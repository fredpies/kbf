import KbfPreloaderButton from "../../components/KbfPreloaderButton";
import KbfDatepicker from "../../components/KbfDatePicker";
import KbfTabs from "../../components/KbfTabs";
import KbfDropdown from "../../components/KbfDropdown";

class App {

    constructor() {

        this.init();
        this.addListeners();

    }

    init() {

        let instance = this;
        let $ = window.$;

        this.$submitButton = $('.submit-button');

        // Datepicker
        this.datepickerJobExpire = new KbfDatepicker('.job_expire-date-picker', '[name="job_expire"]');
        this.datepickerStartDate = new KbfDatepicker('.job_start_date-date-picker', '[name="job_start_date"]');

        // Taby
        this.tabs = new KbfTabs('dashboard-job-edit');

        // Rodzaj etatu
        this.jobTypeDropdown = new KbfDropdown('.dropdown-job-type', ['Wybierz', 'Pełen etat', 'Pół etatu', '1/4 etatu', 'Umowa o dzieło', 'Umowa zlecenie', 'Kontrakt']);



        // Wysiwyg
        // this.$descriptionFieldHidden = $('[name="company_description_hidden"]');
        // TODO: Musi byc zmienione, ukryte pole musi byc niezalezne od kontekstu
        // this.wysiwyg = new KbfWysiwyg('.wysiwyg');

        // let htmlToInsert = this.$descriptionFieldHidden.val();
        // let editor = document.getElementsByClassName('ql-editor')
        // editor[0].innerHTML = htmlToInsert

        // Preloader button
        this.preloaderButton = new KbfPreloaderButton('.submit-button', false);


    }


    addListeners() {

        let instance = this;

        this.$submitButton.on('click', function (e) {
            e.preventDefault();
            instance.tabs.validateForm();
            if(instance.tabs.formIsValid) instance.preloaderButton.triggerStart(this);
        });


        // Datepicker
        $('[name="job_expire"]').on('focus', function () {
            instance.datepickerStartDate.hideDatePicker();
        })

        $('[name="job_start_date"]').on('focus', function () {
            instance.datepickerJobExpire.hideDatePicker();
        })

        $('[name="job_name"]').on('focus', function () {
            instance.datepickerJobExpire.hideDatePicker();
            instance.datepickerStartDate.hideDatePicker();
        })

    }


}

export default App;