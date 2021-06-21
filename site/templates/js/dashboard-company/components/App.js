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

        // Taby
        this.tabs = new KbfTabs('dashboard-company-edit');

        this.$submitButton = $('.submit-button');

        this.$cityField = $('[name="company_city"]');
        this.$zipField = $('[name="company_zip"]');

        // Wysiwyg
        // TODO: Musi byc zmienione, ukryte pole musi byc niezalezne od kontekstu
        this.$descriptionFieldHidden = $('[name="company_description_hidden"]');
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