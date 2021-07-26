import KbfForm from "./KbfForm";

class KbfTabs {

    constructor(formName) {

        this.formIsValid = true;
        if (formName) this.formName = formName;

        if (window.innerWidth >= 768) {
            $('.mobile-tabs').remove();
        }

        if (window.innerWidth < 768) {
            $('.desktop-tabs').remove();
        }

        this.init();
        this.addListeners();
    }

    init() {

        let $ = window.$;
        let instance = this;

        this.$tabToggles = $('[data-toggle="tab"]'); // Taby

        // Inicjuj kontroler formularza jezeli podano nazwe
        if (this.formName) {

            this.formController = new KbfForm({
                formName: instance.formName,
                onfocusout: false,
                onfocus: false,
                onkeyup: false
            })
        }

    }


    addListeners() {

        let instance = this;

        // Zablokuj przelaczanie tabow jezeli sa bledy w formularzu
        if (this.formName) {
            this.$tabToggles.on('click', function (e) {
                instance.validateForm();
                if (!instance.formIsValid) e.stopPropagation();
            })
        }

    }


    validateForm() {

        let formExists = $(`form[name="${this.formName}"]`).length > 0;

        if (formExists) {
            this.formController.validate();
            this.formIsValid = this.formController.formIsValid;
        }

        }
}

export default KbfTabs;