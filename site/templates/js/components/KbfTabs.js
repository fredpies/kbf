import KbfForm from "./KbfForm";

class KbfTabs {

    constructor(formName) {

        this.formIsValid = true;
        if (formName) this.formName = formName;

        this.init();
        this.addListeners();
    }

    init() {

        let $ = window.$;
        let instance = this;

        // Inicjuj kontroler formularza jezeli podano nazwe
        if (this.formName) {
            this.$tabToggles = $('[data-toggle="tab"]'); // Taby
            this.formController = new KbfForm({
                formName: instance.formName
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
        this.formController.validate();
        this.formIsValid = this.formController.formIsValid;
    }
}

export default KbfTabs;