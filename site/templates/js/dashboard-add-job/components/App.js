import Alpine from "alpinejs";
import errors from "../../modules/Errors";
import KbfStepper from "../../components/KbfStepper";
import KbfPreloaderButton from "../../components/KbfPreloaderButton";
import KbfWysiwyg from "../../components/KbfWysiwyg";
import KbfDatepicker from "../../components/KbfDatePicker";
import KbfDropdown from "../../components/KbfDropdown";
import KbfCityAutocomplete from "../../components/KbfCityAutocomplete";
import KbfRepeater from "../../components/KbfRepeater";
import KbfFooterTop from "../../components/KbfFooterTop";

class App {

    constructor() {
     
        this.init();
        this.addListeners();

    }

    init() {

        let instance = this;

        this.$provinceNameField = $('[name="job_province_name"]');
        this.$provinceNameFieldHidden = $('[name="province_name"]');
        this.$form = $('form[name="add-job"]');

        // Sprawdz czy walidator istnieje
        if (!$.fn.validate) throw errors.noValidator();

        // Walidacja
        this.validatorConfig = {

            formName: 'add-job',
            focusOut: false,
            focus: false,
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

        this.stepper = new KbfStepper('.kbf-stepper', this.validatorConfig);
        this.$kbfStepper = this.stepper.$kbfStepper;

        // Ustaw przyciski w zaleznosci od szerokosci urzadzenia
        if (window.innerWidth >= 768) {
            this.$prevButton = this.$kbfStepper.find('.button-prev.button-desktop');
            this.$nextButton = this.$kbfStepper.find('.button-next.button-desktop');
            this.$submitButton = this.$kbfStepper.find('.button-register.button-desktop');
            this.registerCompanyButton = new KbfPreloaderButton('.button-register.button-desktop button');

        } else {
            this.$prevButton = this.$kbfStepper.find('.button-prev');
            this.$nextButton = this.$kbfStepper.find('.button-next');
            this.$submitButton = this.$kbfStepper.find('.button-register');
            this.registerCompanyButton = new KbfPreloaderButton('.button-register button');
        }

        // Datepicker
        this.datepickerJobExpire = new KbfDatepicker('.job_expire-date-picker', '[name="job_expire"]');
        this.datepickerStartDate = new KbfDatepicker('.job_start_date-date-picker', '[name="job_start_date"]');

        // Rodzaj etatu
        this.jobTypeDropdown = new KbfDropdown('.dropdown-job_type');

        // Miasto autocomplete
        this.cityAutocomplete = new KbfCityAutocomplete('[name="job_city"]');

        // Wysiwyg
        this.$descriptionFieldHidden = $('[name="job_description_hidden"]');
        this.wysiwyg = new KbfWysiwyg('.wysiwyg');

        let htmlToInsert = this.$descriptionFieldHidden.val();
        let editor = document.getElementsByClassName('ql-editor')
        editor[0].innerHTML = htmlToInsert

        // Repeater
        this.repeater = new KbfRepeater('.repeater-item');

        new KbfFooterTop();

        window.Alpine = Alpine;
        Alpine.start();

    }

    addListeners() {

        let instance = this;

        this.$prevButton.on('click', this.prevPage.bind(this));
        this.$nextButton.on('click', this.nextPage.bind(this));
        this.$submitButton.on('click', this.submitForm.bind(this));

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
            instance.$provinceNameFieldHidden.val(e.detail.provinceName);
        })
      

    }

    nextPage(e) {

        this.stepper.nextPage(e);

        if (this.stepper.currentPageIdx > 0) this.$prevButton.find('button').removeAttr('disabled');

        if (this.stepper.currentPageIdx === this.stepper.lastPageIdx) {
            this.$nextButton.hide();
            this.$submitButton.show();
            this.$submitButton.find('button').addClass('show');
        }

    }

    prevPage(e) {

        this.stepper.prevPage(e);

        if (this.stepper.currentPageIdx < this.stepper.lastPageIdx) {
            this.$submitButton.hide();
            this.$submitButton.find('button').removeClass('show');
            this.$nextButton.show();

        }

        if (this.stepper.currentPageIdx === 0) {
            this.$prevButton.find('button').attr('disabled', 'disabled');
        }

    }

    submitForm() {
        this.$prevButton.find('button').attr('disabled', 'disabled').off('click'); // Wylacz prev button
        this.$form.submit();
    }

    hideAllPickers() {
        this.datepickerJobExpire.hideDatePicker();
        this.datepickerStartDate.hideDatePicker();
    }


}

export default App;