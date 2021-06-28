import KbfPreloaderButton from "../../components/KbfPreloaderButton";
import KbfDatepicker from "../../components/KbfDatePicker";
import KbfTabs from "../../components/KbfTabs";
import KbfDropdown from "../../components/KbfDropdown";
import KbfCityAutocomplete from "../../components/KbfCityAutocomplete";
import KbfWysiwyg from "../../components/KbfWysiwyg";
import KbfRepeater from "../../components/KbfRepeater";

class App {

    constructor() {

        this.init();
        this.addListeners();

    }

    init() {

        let instance = this;
        let $ = window.$;


        this.$submitButton = $('.submit-button'); // Submit
        this.$form = $('form[name="dashboard-edit-job"]');

        this.$provinceNameField = $('[name="job_province_name"]');
        this.$provinceNameHIddenField = $('[name="province_name"]');

        // Taby
        this.tabs = new KbfTabs('dashboard-edit-job');

        // Datepicker
        this.datepickerJobExpire = new KbfDatepicker('.job_expire-date-picker', '[name="job_expire"]');
        this.datepickerStartDate = new KbfDatepicker('.job_start_date-date-picker', '[name="job_start_date"]');

        // Rodzaj etatu
        this.jobTypeDropdown = new KbfDropdown('.dropdown-job_type');

        // Miasto autocomplete
        this.cityAutocomplete = new KbfCityAutocomplete('[name="job_city"]');

        // Wysiwyg
        // TODO: Musi byc zmienione, ukryte pole musi byc niezalezne od kontekstu
        this.$descriptionFieldHidden = $('[name="job_description_hidden"]');
        this.wysiwyg = new KbfWysiwyg('.wysiwyg');

        let htmlToInsert = this.$descriptionFieldHidden.val();
        let editor = document.getElementsByClassName('ql-editor')
        editor[0].innerHTML = htmlToInsert

        // Preloader button
        this.preloaderButton = new KbfPreloaderButton('.submit-button', false);

        // Back button
        this.backButton = new KbfPreloaderButton('.back-button');

        // Repeater
        this.repeater = new KbfRepeater('.repeater-item');

    }


    addListeners() {

        let instance = this;

        this.$submitButton.on('click', function (e) {

            e.preventDefault();

            instance.tabs.validateForm();
            if(instance.tabs.formIsValid) {

                instance.preloaderButton.triggerStart(this);
                instance.$form.submit();

            }

        });


        // Datepicker
        $('[name="job_expire"]').on('focus', function () {
            instance.datepickerStartDate.hideDatePicker();
        })

        $('[name="job_start_date"]').on('focus', function () {
            instance.datepickerJobExpire.hideDatePicker();
        })

        $('[name="job_name"], #job_type-button, [name="job_city"]').on('focus', this.hideAllPickers.bind(this))

        this.wysiwyg.$container.find('.ql-editor').on('click', this.hideAllPickers.bind(this))

        // Aktualizacja pola "Miasto"
        this.cityAutocomplete.on('city-change', function (e) {
            instance.$provinceNameField.val(e.detail.provinceName);
            instance.$provinceNameHIddenFieldField.val(e.detail.provinceName);
        })

    }

    hideAllPickers() {
        this.datepickerJobExpire.hideDatePicker();
        this.datepickerStartDate.hideDatePicker();
    }


}

export default App;