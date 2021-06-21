import KbfPreloaderButton from "../../components/KbfPreloaderButton";
import KbfWysiwyg from "../../components/KbfWysiwyg";
import KbfTagify from "../../components/KbfTagify";
import KbfAddressAutocomplete from "../../components/KbfAddressAutocomplete";
import KbfTabs from "../../components/KbfTabs";


class App {

    constructor() {

        this.init();
        this.addListeners();

    }

    init() {

        this.$submitButton = $('.submit-button');

        this.$cityField = $('[name="company_city"]');
        this.$zipField = $('[name="company_zip"]');

        // Wysiwyg
        this.wysiwyg = new KbfWysiwyg('.wysiwyg', '[name="company_description_hidden"]');

        //Tagify
        new KbfTagify('input.kbf-keywords');

        // Preloader button
        this.preloaderButton = new KbfPreloaderButton('.submit-button', false);

        // Address autocomplete
        this.addressAutocomplete = new KbfAddressAutocomplete('[name="company_address"]');

        // Taby
        this.tabs = new KbfTabs('dashboard-job-edit');

    }

    addListeners() {

        let instance = this;

        this.$submitButton.on('click', function (e) {
            e.preventDefault();
            instance.tabs.validateForm();
            if(instance.tabs.formIsValid) instance.preloaderButton.triggerStart(this);
        });

        this.addressAutocomplete.on('address-change', function (e) {
            instance.$cityField.val(e.detail.city);
            instance.$zipField.val(e.detail.zip);
        })

    }

}

export default App;