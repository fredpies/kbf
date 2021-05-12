import KbfMap from "./KbfMap";
import KbfMapPanel from './KbfMapPanel'
import KbfMapPanelIndustrySwitcher from "./KbfMapPanelIndustrySwitcher";
import {getCompanyMarkersData, getSubIndustries} from "../../functions/library";

// Dane o wojewodztwach i powiatach
import provincesGeoJSON from '../provinces.json'
import areasGeoJSON from '../areas.json'

class App {

    constructor() {

        window.provincesGeoJSON = provincesGeoJSON;
        window.areasGeoJSON = areasGeoJSON;

        this.init();
        this.addListeners();

    }

    init() {

        let $ = window.$;

        this.kbfMap = new KbfMap('#kbf-map'); // Mapa
        this.kbfMapPanel = new KbfMapPanel(); // Panel kontrolny
        this.kbfMapIndustrySwitcher = new KbfMapPanelIndustrySwitcher('#kbf-map-panel.industries'); // Wybor branz
        this.$displayCompaniesButton = $('.kbf-map-show-companies'); // Pokaz liste firm
        this.$showAll = $('.kbf-map-panel-show-all');// Przycisk pokaz wszystko

        this.$mapMiniPreloader = $('.kbf-mini-preloader').hide(); // Ukry mini preloader
        this.$displayCompaniesButton.hide(); // Ukryj przycisk przechodzenia do listy firm
        this.$showAll.hide(); // Ukryj przycisk pokaz wszystko

        this.addedMarkersCount = 0; // Liczba markerow dodanych do mapy

        // Poczatkowe ustawienie form action
        this.startingFormAction = $('form').data().action;

        // Dane dla query buildera
        this.provinceAreaQueryPart = '';
        this.industrySubindustryPart = '';
        this.targetURL = '';

    }

    // Zwraca dane dla rest api dla markerow
    getMarkersRequestData(industry, subIndustry) {
        return {
            industry: industry === 'Wszystkie' ? '' : industry,
            'sub-industry': subIndustry === 'Wszystkie' ? '' : subIndustry,
            'province-name': this.kbfMap.currentProvinceName,
            'area-name': this.kbfMap.currentAreaName
        };
    }

    // Resetuje industry switcher
    resetIndustrySwitcher() {
        // Ustaw stan dla industry switcher
        this.kbfMapIndustrySwitcher.currentIndustry = 'Wszystkie';
        this.kbfMapIndustrySwitcher.currentSubIndustry = 'Wszystkie';
        this.industrySubindustryPart = '';

    }

    addListeners() {

        let instance = this; // Ustaw kontekst

        // Zmiana branzy
        this.kbfMapIndustrySwitcher.on('industries-changed', async function (e) {

            // Aktualizuj query dla branzy i sub branzy
            let currentIndustry = instance.kbfMapIndustrySwitcher.currentIndustry;
            let currentSubIndustry = instance.kbfMapIndustrySwitcher.currentSubIndustry;

            if (currentIndustry == 'Wszystkie' && currentSubIndustry === 'Wszystkie') {
                instance.industrySubindustryPart = '';
            }

            if (currentIndustry !== 'Wszystkie' && currentSubIndustry === 'Wszystkie') {
                instance.industrySubindustryPart = `industry=${currentIndustry}`;
            }

            if (currentIndustry !== 'Wszystkie' && currentSubIndustry !== 'Wszystkie') {
                instance.industrySubindustryPart = `sub_industry=${currentSubIndustry}`;
            }

            instance.kbfMap.removeCompanyMarkers(); // Usun istniejace markery
            instance.$mapMiniPreloader.show(); // Pokaz preloader

            let requestData = instance.getMarkersRequestData(e.detail.industry, e.detail['sub-industry']);
            try {

                let companiesMarkersData = await getCompanyMarkersData(requestData);

                // Aktualizuj liczbe markerow dodanych do mapy
                instance.addedMarkersCount = companiesMarkersData.length;

                if (instance.addedMarkersCount > 0) {
                    instance.kbfMap.addCompanyMarkers(companiesMarkersData); // Dodaj markery do mapy
                    instance.updateFormQuery(); // Aktualizuj query
                    instance.$displayCompaniesButton.show(); // Wyswietl przycisk listy firm

                } else instance.$displayCompaniesButton.hide();

                instance.$mapMiniPreloader.hide();

            } catch (err) {}

        })

        // Reakcja mapy na zmiany wojewodztw i powiatow
        this.kbfMapPanel.on('province-changed', function (e) {
            instance.kbfMap.zoomToProvince(e.detail.province);
            instance.kbfMapIndustrySwitcher.hidePanel();
            instance.$displayCompaniesButton.hide();

            // Pokaz przycisk pokaz cala mape
            instance.$showAll.show();

        })

        this.kbfMapPanel.on('area-changed', async function (e) {

            let detail = e.detail;
            let provinceName = detail.province;
            let areaName = detail.area;

            // Aktualizuj informacje o aktualnym powiecie
            instance.kbfMapIndustrySwitcher.$currentAreaInfo.html(areaName.substr(0, 1).toUpperCase() + areaName.substr(1));

            if (provinceName === 'Wszystkie' && areaName === 'Wszystkie') {
                instance.kbfMap.showAll();
                instance.kbfMapPanel.$showProvince.hide();
                instance.$showAll.hide();
                instance.kbfMapIndustrySwitcher.hidePanel();
                instance.$displayCompaniesButton.hide();
            }

            if (provinceName !== 'Wszystkie' && areaName !== 'Wszystkie') {
                instance.kbfMap.zoomToArea(areaName, provinceName);
                instance.kbfMapPanel.$showProvince.show();
                instance.kbfMapIndustrySwitcher.hidePanel();
                instance.kbfMapIndustrySwitcher.showPanel();
                instance.$showAll.show();

                // Pobierz dane o markerach (rest)
                instance.$mapMiniPreloader.show();

                let markersData;

                // Aktualizuj query
                instance.provinceAreaQueryPart = `province_name=${instance.kbfMapPanel.currentProvince}&area_name=${instance.kbfMapPanel.currentArea}`;

                try {
                    markersData = await getCompanyMarkersData(instance.getMarkersRequestData('Wszystkie', 'Wszystkie'));

                    // Aktualizuj liczbe markerow dodanych do mapy
                    instance.addedMarkersCount = markersData.length;
                    instance.$mapMiniPreloader.hide();

                    if (instance.addedMarkersCount > 0) {
                        instance.kbfMap.addCompanyMarkers(markersData);
                        instance.updateFormQuery(); // Aktualizuj query dla listy firm
                        instance.$displayCompaniesButton.show();
                    } else instance.$displayCompaniesButton.hide();

                } catch (e) {
                }
            }

            if (provinceName !== 'Wszystkie' && areaName === 'Wszystkie') {
                instance.kbfMap.zoomToProvince(provinceName);
                instance.kbfMapPanel.$showProvince.hide();
                instance.kbfMapIndustrySwitcher.hidePanel();
                instance.$displayCompaniesButton.hide();

            }

        })

        // Reakcja na zmiany na mapie
        this.kbfMap.on('province-clicked', function (e) {
            instance.kbfMapPanel.updateProvince(e.detail.province);
            instance.kbfMapIndustrySwitcher.hidePanel();
            instance.$displayCompaniesButton.hide();
            instance.kbfMapPanel.$showProvince.hide();
            instance.$showAll.show();


        })

        this.kbfMap.on('area-clicked', async function (e) {

            instance.kbfMapPanel.updateArea(e.detail.area);
            instance.kbfMapPanel.$showProvince.show();
            instance.kbfMapIndustrySwitcher.showPanel();
            instance.$mapMiniPreloader.show();
            instance.$showAll.hide();

            // Aktualizuj informacje o aktualnym powiecie
            instance.kbfMapIndustrySwitcher.$currentAreaInfo.html(e.detail.area.substr(0, 1).toUpperCase() + e.detail.area.substr(1));

            // Pobierz dane o markerach (rest)
            let markersData;

            // Aktualizuj query
            instance.provinceAreaQueryPart = `province_name=${instance.kbfMapPanel.currentProvince}&area_name=${instance.kbfMapPanel.currentArea}`;
            instance.updateFormQuery();

            try {
                markersData = await getCompanyMarkersData(instance.getMarkersRequestData('Wszystkie', 'Wszystkie'));

                // Aktualizuj liczbe markerow dodanych do mapy
                instance.addedMarkersCount = markersData.length;


                if (instance.addedMarkersCount > 0) {
                    instance.kbfMap.addCompanyMarkers(markersData);
                    instance.$displayCompaniesButton.show();
                } else instance.$displayCompaniesButton.hide();

            } catch (e) {
            }

            instance.$mapMiniPreloader.hide();

        })

        // Resetuj mape
        this.kbfMapPanel.on('reset-map', function () {
            instance.kbfMapPanel.$showProvince.hide();
            instance.kbfMapIndustrySwitcher.hidePanel();
            instance.kbfMap.showAll();
            instance.$displayCompaniesButton.hide();
            instance.resetIndustrySwitcher();
        })

        //Ustaw na wojewodztwie
        this.kbfMapPanel.on('show-province', function (e) {
            let provinceName = e.detail;
            instance.kbfMapPanel.updateProvince(provinceName);
            instance.kbfMap.zoomToProvince(provinceName);
            instance.kbfMapIndustrySwitcher.hidePanel();
            instance.$displayCompaniesButton.hide();
            instance.kbfMapPanel.$showProvince.hide();
            instance.$showAll.show();
            instance.resetIndustrySwitcher();

        })

        this.$displayCompaniesButton.on('click', function (ev) {
            ev.preventDefault();
            window.location = instance.targetURL;
        })

    }

    // Ustawia target URL
    updateFormQuery() {
        if (this.industrySubindustryPart) this.targetURL = `${this.startingFormAction}/?${this.provinceAreaQueryPart}&${this.industrySubindustryPart}`
        else this.targetURL = `${this.startingFormAction}/?${this.provinceAreaQueryPart}`;
    }

}

export default App;