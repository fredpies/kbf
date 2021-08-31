import KbfIndustrySwitcher from "../components/KbfIndustrySwitcher";
import KbfAreaSwitcher from "./KbfAreaSwitcher";
import KbfPreloaderButton from "./KbfPreloaderButton";

// Dane o wojewodztwach i powiatach
import provincesGeoJSON from '../map/provinces.json'
import areasGeoJSON from '../map/areas.json'

class KbfIndustryFilter extends EventTarget {

    constructor() {

        super();

        window.provincesGeoJSON = provincesGeoJSON;
        window.areasGeoJSON = areasGeoJSON;

        this.init();
        this.addListeners();

    }

    init() {

        // Aliasy
        this.on = this.addEventListener;
        this.off = this.removeEventListener;
        this.emit = this.dispatchEvent;

        let $ = window.$;

        new KbfPreloaderButton('.kbf-filter-button');
        new KbfPreloaderButton('.kbf-search-button');
        new KbfPreloaderButton('.kbf-reset-button');

        this.industrySwitcher = new KbfIndustrySwitcher('industries', 'sub-industries', 'sub-sub-industries');
        this.areaSwitcher = new KbfAreaSwitcher('provinces', 'areas');

        this.$resetButton = $('.kbf-reset-button');
        this.$searchButton = $('.kbf-search-button');
        this.$filterButton = $('.kbf-filter-button');
        this.$form = $('form');

    }

    addListeners() {

        let instance = this;
        let $ = window.$;

        this.$searchButton.click(function (e) {
            e.stopPropagation();
            e.preventDefault();
            instance.$form.eq(1).submit();
        })

        this.$filterButton.click(function (e) {
            e.stopPropagation();
            e.preventDefault();
            instance.$form.eq(1).submit();
        })

        this.$resetButton.on('click', function (e) {
            e.stopPropagation();
            e.preventDefault();
            instance.resetFilter();

        });
    }


    resetFilter() {

        let $ = window.$;

        // Wyczysc pole wyszukiwania
        $('.kbf-search-input').val('');

        // Wyczysc dropdown'y
        this.areaSwitcher.provincesDropdown.setActive('Województwo');
        this.areaSwitcher.areasDropdown.setActive('Powiat');
        this.industrySwitcher.industriesDropdown.setActive('Wszystkie');
        this.industrySwitcher.subIndustriesDropdown.setActive('Wszystkie');
        this.industrySwitcher.subSubIndustriesDropdown.setActive('Wszystkie');

        this.areaSwitcher.areasDropdown.$dropdownButtons.attr('disabled', 'disabled');
        this.industrySwitcher.subIndustriesDropdownElement.setAttribute('disabled', 'disabled');
        this.industrySwitcher.subSubIndustriesDropdownElement.setAttribute('disabled', 'disabled');

        this.$form.eq(1).submit();

    }


}


export default KbfIndustryFilter;