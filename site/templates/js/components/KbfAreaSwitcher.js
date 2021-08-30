import KbfDropdown from "./KbfDropdown";
import {getAreaNames, getProvinceAreaDict, getProvinceNames} from "../functions/library";
import errors from "../modules/Errors";

class KbfAreaSwitcher extends EventTarget {

    constructor(provincesId, areasId, scrollBlock = true) {

        // Sprawdz czy podano argumenty
        if (!provincesId) throw errors.argumentNotFound(provincesId);
        if (!areasId) throw errors.argumentNotFound(areasId);

        super();

        this.provincesId = provincesId;
        this.areasId = areasId;

        this.scrollBlock = scrollBlock; // Czy blokowac scroll

        this.areasDictionary = {}; // Slownik wojewodztwo - powiaty
        this.provinces = []; // Nazwy wojewodztw
        this.areas = []; // Nazwy powiatow

        this.currentProvince = 'Województwo'; // Aktualnie wybrane wojewodztwo
        this.currentArea = 'Powiat'; // Aktualnie wybrany powiat

        this.init(); // Inicjalizuj
        this.addListeners(); // Dodaj listenery

    }


    // Dodaje listenery
    addListeners() {

        let instance = this;

        this.provincesDropdown.on('change', function (e) {

                let detail = e.detail;

                // Jesli wybrano wszystkie ustaw liste powiatow na wszystkie i wylacz dropdown powiatow
                if (detail === 'Województwo') {
                    instance.areasDropdown.updateOptions(['Powiat', ...instance.areas]);
                    instance.currentArea = 'Powiat';
                    instance.$areasDropdown.attr('disabled', 'true');
                } else {
                    instance.areasDropdown.updateOptions(['Powiat', ...instance.findAreas(detail)]); // Wyswietl liste powiatow dla wojewodztwa
                    instance.$areasDropdown[0].removeAttribute('disabled');
                }

                instance.currentProvince = detail; // Ustaw nowe wojewodztwo
                instance.emit(new CustomEvent('province-changed', {
                    detail: {province: instance.currentProvince, area: instance.currentArea}
                }));

            }
        );

        this.areasDropdown.on('change', function (e) {

            let detail = e.detail;

            instance.currentArea = detail; // Ustaw nowy powiat
            instance.areasDropdown.setActive(detail);

            // Emituj zdarzenie
            instance.emit(new CustomEvent('area-changed', {
                detail: {province: instance.currentProvince, area: instance.currentArea}
            }));

        })

    }

    // Inicjalizuje
    init() {


        let $ = window.$;

        let instance = this; // Ustaw kontekst

        // Przygotuj dane o powiatach i wojewodztwach
        let areasGeoJSON = window.areasGeoJSON;
        this.areas = getAreaNames(areasGeoJSON);
        this.areasDictionary = getProvinceAreaDict(areasGeoJSON)
        this.provinces = getProvinceNames(this.areasDictionary);

        // Inicjalizuj dropdown wojewodztw
        this.provincesDropdown = new KbfDropdown('#' + this.provincesId, ['Województwo', ...this.provinces], this.scrollBlock, true);

        // Inicjalizuj dropdown powiatow
        this.areasDropdown = new KbfDropdown('#' + this.areasId, ['Powiat', ...this.areas], this.scrollBlock, true);

        // Element dropdown powiatow
        this.$areasDropdown = $('#' + this.areasId).find('button');
        this.$areasDropdown.attr('disabled', 'true');

        // Pobierz dane poczatkowe dla dropdown'ow
        let provincesStartValue = this.provincesDropdown.$dropdowns.eq(0).data('startValue');
        let areasStartValue = this.areasDropdown.$dropdowns.eq(0).data('startValue');

        if (provincesStartValue) this.updateProvince(provincesStartValue);
        if (provincesStartValue && areasStartValue) this.updateArea(areasStartValue);

        // Aliasy
        this.on = this.addEventListener;
        this.off = this.removeEventListener;
        this.emit = this.dispatchEvent;

        // Ustaw responsywnosc dropdown'ow
        $(window).off('resize', instance.resetDropdowns);
        $(window).on('resize', instance.resetDropdowns.bind(instance));

    }

    // Resetuje dropdown'y
    resetDropdowns() {
        this.provincesDropdown.setActive('Województwo');
        this.areasDropdown.updateOptions(['Powiat', ...this.areas]);
        this.areasDropdown.setActive('Powiat');
        this.$areasDropdown.attr('disabled', 'true');
    }

    // Ustawia wojewodztwo w dropdown
    updateProvince(provinceName) {

        let areas;

        // Znajdz powiaty dla wojewodztwa
        if (provinceName !== 'Województwo') {

            areas = this.findAreas(provinceName);

            this.$areasDropdown[0].removeAttribute('disabled');

            // Zaktualizuj liste powiatow
            if (Array.isArray(areas)) this.areasDropdown.updateOptions(['Powiat', ...areas]);
        }

        if (provinceName === 'Województwo') {
            this.areasDropdown.setActive('Powiat');
            this.$areasDropdown.attr('disabled', 'true');
        }

        this.provincesDropdown.setActive(provinceName); // Ustaw aktywne wojewodztwo
        this.currentProvince = provinceName;

    }

    // Ustawia powiat w dropdown
    updateArea(areaName) {

        let provinceName = this.findProvince(areaName); // Znajdz wojewodztwo dla powiatu
        let areas = this.findAreas(provinceName); // Znajdz powiaty dla wojewodztwa

        this.currentArea = areaName;
        this.currentProvince = provinceName;

        this.areasDropdown.updateOptions(['Powiat', ...areas]); // Ustaw wszystkie powiaty na liscie

        this.areasDropdown.setActive(this.currentArea); // Ustaw aktywny powiat
        this.provincesDropdown.setActive(this.currentProvince); // Ustaw aktywne wojewodztwo
    }

    // Znajduje powiaty dla danego wojewodztwa
    findAreas(provinceName) {
        return this.areasDictionary[provinceName];
    }

    // Znajduje wojewodztwo dla danego powiatu
    findProvince(areaName) {

        if (areaName === 'Powiat') return;

        let features = window.areasGeoJSON.features;
        return features.filter(function (feature) {
            return feature.properties.name === areaName;
        })[0].properties.province;

    }

    // Usuwa komponent
    destroy() {
        if (this.areasDropdown) {
            this.areasDropdown.destroy();
            this.areasDropdown = undefined;
        }
        if (this.provincesDropdown) {
            this.provincesDropdown.destroy();
            this.provincesDropdown = undefined;
        }
    }
}

export default KbfAreaSwitcher;