import KbfPreloaderButton from "../../components/KbfPreloaderButton";
import KbfWysiwyg from "../../components/KbfWysiwyg";
import KbfTagify from "../../components/KbfTagify";
import KbfAddressAutocomplete from "../../components/KbfAddressAutocomplete";
import KbfForm from "../../components/KbfForm";


class App {

    constructor() {

        this.init();
        this.addListeners();

        this.formIsValid = true;

    }

    init() {

        let instance = this;

        this.$submitButton = $('.submit-button');


        this.$descriptionFieldHidden = $('[name="company_description_hidden"]');
        this.$cityField = $('[name="company_city"]');
        this.$zipField = $('[name="company_zip"]');

        this.$tabToggles = $('[data-toggle="tab"]');



        // Wysiwyg
        this.wysiwyg = new KbfWysiwyg('.wysiwyg');

        let htmlToInsert = this.$descriptionFieldHidden.val();
        let editor = document.getElementsByClassName('ql-editor')
        editor[0].innerHTML = htmlToInsert

        //Tagify
        new KbfTagify('input.kbf-keywords');

        // Preloader button
        this.preloaderButton = new KbfPreloaderButton('.submit-button', false);

        // Address autocomplete
        this.addressAutocomplete = new KbfAddressAutocomplete('[name="company_address"]');

        // Formularz
        this.formController = new KbfForm({
            formName: 'dashboard-company-edit'
        })

    }

    addListeners() {

        let instance = this;

        this.$submitButton.on('click', function (e) {
            e.preventDefault();
            instance.validateForm();
            if(instance.formIsValid) instance.preloaderButton.triggerStart(this);
        });

        this.addressAutocomplete.on('address-change', function (e) {
            instance.$cityField.val(e.detail.city);
            instance.$zipField.val(e.detail.zip);
        })

        // Zablokuj przelaczanie tabow jezeli sa bledy w formularzu
        this.$tabToggles.on('click', function (e) {
            instance.validateForm();
            if (!instance.formIsValid) e.stopPropagation();
        })
    }

    validateForm() {
        this.formController.validate();
        this.formIsValid = this.formController.formIsValid;
    }

}

export default App;