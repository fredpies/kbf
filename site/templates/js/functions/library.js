import config from "../config/config";

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
export function getIndustriesOptions(industries) {

    // Utworz tablice branz
    let capitalizedIndustries = [];
    industries.forEach(function (industry) {
        capitalizedIndustries.push(capitalizeIndustry(getEllipsis(industry, 34)));
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
    return await $.get("https://webplanet.biz/kbf/api/industries/");
}

// Pobiera nazwy sub branz z rest api dla danej branzy
export async function getSubIndustries(industryName) {
    let $ = window.$;
    return await $.get(`https://webplanet.biz/kbf/api/sub-industries/?industry=${industryName}`);
}

// Pobiera dane do markerow dla mapy
export async function getCompanyMarkersData(requestData) {

    let $ = window.$;
    let url = '';
    let provinceName = requestData['province-name'];
    let areaName = requestData['area-name'];
    let industry = requestData.industry;
    let subIndustry = requestData['sub-industry'];

    if (subIndustry.length > 0) url = `${config.url}/kbf/api/markers/?province-name=${provinceName}&area-name=${areaName}&industry=${industry}&sub-industry=${subIndustry}`;
    if (subIndustry.length === 0) url = `${config.url}/kbf/api/markers/?province-name=${provinceName}&area-name=${areaName}&industry=${industry}`;

    return await $.get(url).fail(function () {
        $('.kbf-mini-preloader').hide();
    });

}