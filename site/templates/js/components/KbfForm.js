import errors from "../modules/Errors";
import Inputmask from "inputmask/lib/inputmask";

class KbfForm {

    constructor(formConfig, lang) {

        let $ = window.$;

        this.formConfig = formConfig;
        this.formName = this.formConfig.formName;
        this.formElement = document.forms[this.formName];
        this.lang = lang || 'pl';

        // Sprawdz czy formularz o podanej nazwie istnieje
        if (!this.formElement) throw errors.formNotFound(this.formName);

        this.$formElement = $(this.formElement);

        // Error message
        this.$errorMessageElement = $('.kbf-error-message');

        // Sprawdz czy walidator istnieje
        if (!$.fn.validate) throw errors.noValidator();

        // Domyslna konfiguracja walidatora
        this.defaultValidatorConfig = {

            ignore: [],

            // Umiejscowienie komunikatu o bledzie
            errorPlacement: function ($label, $element) {
                $label.addClass('kbf-error-message');

                let $column = $element.closest('[class*="col"]');

                if ($column.length > 0) {
                    $column.append($label);
                } else $label.insertAfter($element);
            }
        };

        this.init();
        this.addListeners();

    }

    init() {

        let instance = this;
        this.inputmask = new Inputmask();

        // Ustaw maski
        Array.from(this.formElement.elements).forEach(function (formElement) {
                instance.inputmask.mask(formElement)

        })

    }

    addListeners() {

    }

    validate() {

        this.$formElement.validate({ ...this.defaultValidatorConfig, ...this.formConfig });
        this.handleErrorMessage();
    }

    // Ustawia error message jezeli istnieje
    handleErrorMessage() {

        this.formIsValid = this.$formElement.valid();

        // Wyswietl komunikat o bledzie jeżeli pole komunikatu istnieje
        if (this.$errorMessageElement.length > 0) {
            if(this.formIsValid && !this.$errorMessageElement.hasClass('d-none')) this.$errorMessageElement.addClass('d-none');
            if(!this.formIsValid && this.$errorMessageElement.hasClass('d-none')) this.$errorMessageElement.removeClass('d-none');
        }
    }

}

export default KbfForm;