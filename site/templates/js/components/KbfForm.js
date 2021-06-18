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
        // this.$submitButton = this.$formElement.find('button[type="submit"]');

        // Error message
        this.$errorMessageElement = $('.kbf-error-message');

        // Sprawdz czy walidator istnieje
        if (!$.fn.validate) throw errors.noValidator();

        // Konfiguracja walidatora
        this.validatorConfig = formConfig.validator;

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

        // Ustaw maski
        Array.from(this.formElement.elements).forEach(function (formElement) {
            new Inputmask().mask(formElement)
        })

    }

    addListeners() {

        let instance = this;
        let $ = window.$;

        // // Usun domyslne zachowanie formularza
        // this.$formElement.on('submit', function (e) {
        //     e.stopPropagation();
        //     e.preventDefault();
        // });
        //
        // // Waliduj formularz
        // this.$submitButton.on('click', function (e) {
        //     e.stopPropagation();
        //     instance.$formElement.validate({ ...instance.defaultValidatorConfig, ...instance.validatorConfig });
        //     instance.handleErrorMessage.call(instance);
        // });
    }

    validate() {
        this.$formElement.validate({ ...this.defaultValidatorConfig, ...this.validatorConfig });
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