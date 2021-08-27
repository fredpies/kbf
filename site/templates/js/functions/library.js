import config from "../config/config";

let apiEndpoint = config.apiEndpoint;

// Sprawdza czy urzadzenie jest dotykowe
export function isTouchDevice() {
    return (('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
}

// Zwraca liste nazw powiatow, areasGeoJSON - granice powiatow z nazwami
export function getAreaNames(areasGeoJSON) {
    let result = [];
    areasGeoJSON.features.forEach(function (feature) {
        result.push(feature.properties.name); // Dodaj nazwe powiatu do listy powiatow
    });

    result = result.sort(function (current, next) {
        return current.localeCompare(next);
    })

    return result;
}

// Zwraca slownik wojewodztwo: powiaty, areasGeoJSON - granice powiatow z nazwami
export function getProvinceAreaDict(areasGeoJSON) {

    let result = {};
    areasGeoJSON.features.forEach(function (feature) {
        result[feature.properties.province] = [...result[feature.properties.province] || [], feature.properties.name];
        result[feature.properties.province].sort(function (current, next) {
            return current.localeCompare(next);
        });
    })

    return result;

}

// Zwraca liste nazw wojewodztw ze slownika provinceAreaDict
export function getProvinceNames(provinceAreaDict) {
    let result = [];
    result = Object.keys(provinceAreaDict);
    result = result.sort(function (current, next) {
        return current.localeCompare(next);
    });

    return result;
}

// Konwertuje nazwe branzy
export function capitalizeIndustry(industry) {
    let _industry = industry.toLowerCase();
    return _industry.trim().substr(0, 1).toUpperCase() + _industry.trim().substr(1);
}

// Tworzy skrot
export function getEllipsis(string, length) {

    let ellipsis;

    if (string.length - 4 >= length - 4) ellipsis = string.trim().substring(0, length - 5) + ' ...';
    if (string.length - 4 < length - 4) ellipsis = string;

    return ellipsis;
}

// Przygotowuje opcje dla dropdown branz
export function getIndustriesOptions(industries, ellipsis = true) {

    // Utworz tablice branz
    let capitalizedIndustries = [];
    industries.forEach(function (industry) {
        if (ellipsis) capitalizedIndustries.push(capitalizeIndustry(getEllipsis(industry, 34)));
        else capitalizedIndustries.push(capitalizeIndustry(industry));
    });

    // Utworz opcje
    let opts = {};
    let idx = 0;
    capitalizedIndustries.forEach(function (capitalizedIndustry) {
        opts[capitalizedIndustry] = industries[idx];
        idx++;
    })

    return opts;
}

// Pobiera nazwy branz z rest api
export async function getIndustries() {
    let $ = window.$;
    return await $.get(`${apiEndpoint}/api/industries/`);
}

// Pobiera nazwy sub branz z rest api dla danej branzy
export async function getSubIndustries(industryName) {
    let $ = window.$;
    return await $.get(`${apiEndpoint}/api/sub-industries/?industry=${industryName}`);
}

// Pobiera nazwy sub-sub branz z rest api dla danej sub-branzy
export async function getSubSubIndustries(subIndustryName) {
    let $ = window.$;
    return await $.get(`${apiEndpoint}/api/sub-sub-industries/?sub-industry=${subIndustryName}`);
}

// Pobiera dane do markerow dla mapy
export async function getCompanyMarkersData(requestData) {

    let $ = window.$;
    let url = '';
    let provinceName = requestData['province-name'];
    let areaName = requestData['area-name'];
    let industry = requestData.industry;
    let subIndustry = requestData['sub-industry'];

    if (subIndustry.length > 0) url = `${apiEndpoint}/api/markers/?province-name=${provinceName}&area-name=${areaName}&industry=${industry}&sub-industry=${subIndustry}`;
    if (subIndustry.length === 0) url = `${apiEndpoint}/api/markers/?province-name=${provinceName}&area-name=${areaName}&industry=${industry}`;

    return await $.get(url).fail(function () {
        $('.kbf-mini-preloader').hide();
    });

}

// Zamienia placeholders w stringu
export function replacePlaceholders(placeholderMap, string) {

    for (const [placeholder, value] of Object.entries(placeholderMap)) {
        string = string.replace(placeholder, value);
    }

   return string;

}