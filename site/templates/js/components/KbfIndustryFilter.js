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

        this.areaSwitcher = new KbfAreaSwitcher('provinces', 'areas');
        this.$resetButton = $('.kbf-reset-button');
        this.$searchButton = $('.kbf-search-button');
        this.$filterButton = $('.kbf-filter-button');
        this.$checkBoxes = $('input[type=checkbox]');
        this.$form = $('form');

    }

    addListeners() {

        let instance = this;
        let $ = window.$;



        // Emituj zmiane checkboxa
        this.$checkBoxes.on('change', function () {

            let wasChecked = !($(this).prop('checked') === true); //Czy checkbox byl zaznaczony
            let eventData = {
                wasChecked,
                name: this.value
            };

            instance.emit(new CustomEvent('checkbox-change', { detail: eventData }));

        })

        this.$searchButton.click(function (e) {
            e.stopPropagation();
            e.preventDefault();
            instance.$form.eq(1).submit();
        })

        this.$filterButton.click(function (e) {
            e.stopPropagation();
            e.preventDefault();
            instance.emit(new CustomEvent('filter'));
        })

        this.$resetButton.on('click', function (e) {
            e.stopPropagation();
            e.preventDefault();
            instance.resetFilter();
            instance.$form.eq(2).submit();

        });
    }

    // Zaznacza checkbox
    check(checkboxValue) {

        let $ = window.$;

        this.$checkBoxes.each(function () {
            let $this = $(this);
            if ($this.val() === checkboxValue) {
                $this.prop('checked', 'checked');
            }
        })
    }

    // Odznacza checkbox
    uncheck(checkboxValue) {

        let $ = window.$;

        this.$checkBoxes.each(function () {
            let $this = $(this);
            if ($this.val() === checkboxValue) {
                $this.prop('checked', '');
            }
        })
    }

    resetFilter() {

        let $ = window.$;

        // Wyczysc checkboxy
        let $checkedCheckboxes = $(":checkbox:checked");
        $checkedCheckboxes.each(function () {
            this.removeAttribute('checked');
        })

        // Wyczysc pole wyszukiwania
        $('.kbf-search-input').val('');

        // Wyczysc dropdown'y
        this.areaSwitcher.provincesDropdown.setActive('Wszystkie');
        this.areaSwitcher.areasDropdown.setActive('Wszystkie');
        this.areaSwitcher.areasDropdown.$dropdownButtons.attr('disabled', 'disabled');

    }


}


export default KbfIndustryFilter;