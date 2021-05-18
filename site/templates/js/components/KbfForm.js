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
        this.$submitButton = this.$formElement.find('button[type="submit"]');

        // Error message
        this.$errorMessageElement = $('.kbf-error-message');

        // Sprawdz czy walidator istnieje
        if (!$.fn.validate) throw errors.noValidator();

        // Konfiguracja walidatora
        this.validatorConfig = formConfig.validator;

        // Domyslna konfiguracja walidatora
        this.defaultValidatorConfig = {

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

        let $ = window.$;

        console.log($.validator.addMethod)

        // Ustaw custom rules
        $.validator.addMethod("kbfPhone", function(value, element) {
            return this.optional( element ) || /[1-9][0-9]{2}-[0-9]{3}-[0-9]{3,}/.test( value );
        });



        // Ustaw maski
        Array.from(this.formElement.elements).forEach(function (formElement) {
            new Inputmask().mask(formElement)
        })

    }

    addListeners() {

        let instance = this;
        let $ = window.$;

        // Usun domyslne zachowanie formularza
        this.$formElement.on('submit', function (e) {
            e.stopPropagation();
            e.preventDefault();
        });

        // Waliduj formularz
        this.$submitButton.on('click', function (e) {
            e.stopPropagation();
            instance.$formElement.validate({ ...instance.defaultValidatorConfig, ...instance.validatorConfig });
            instance.handleErrorMessage.call(instance);
        });
    }

    // Ustawia error message jezeli istnieje
    handleErrorMessage() {

        let formIsValid = this.$formElement.valid();

        // Wyswietl komunikat o bledzie jeżeli pole komunikatu istnieje
        if (this.$errorMessageElement.length > 0) {
            if(formIsValid && !this.$errorMessageElement.hasClass('d-none')) this.$errorMessageElement.addClass('d-none');
            if(!formIsValid && this.$errorMessageElement.hasClass('d-none')) this.$errorMessageElement.removeClass('d-none');
        }
    }

}

export default KbfForm;