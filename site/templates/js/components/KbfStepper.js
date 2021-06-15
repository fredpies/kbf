import errors from "../modules/Errors";
import config from "../config/config";
import KbfPreloaderButton from "./KbfPreloaderButton";
import Inputmask from "inputmask/lib/inputmask";
import KbfIndustrySwitcher from "./KbfIndustrySwitcher";
import KbfWysiwyg from "./KbfWysiwyg";

class KbfStepper {

    constructor(selector) {

        let $ = window.$;
        this.$kbfStepper = $(selector);
        this.regonNotExists = true; // Czy REGON istnieje w bazie KBF
        this.regonFound = true; // Czy REGON istnieje w bazie KBF
        this.regonErrorVisible = false; // Czy wiswietlony jest blad regon

        // Emituj wyjatek gdy nie podano selektora albo element nie zostal znaleziony
        if (!selector || this.$kbfStepper.length === 0) throw errors.elementNotFound(selector);

        this.init();
        this.addListeners();
    }

    init() {

        let instance = this;

        this.currentPageIdx = 0; // Biezacy index strony
        this.$pages = this.$kbfStepper.find('.page');
        this.$pages.eq(0).removeClass('d-none');
        this.lastPageIdx = this.$pages.length - 1; // Ostatni index

        // Elementy $
        this.$infoMessages = this.$kbfStepper.find('.top-message');
        this.$infoMessages.hide().eq(0).addClass('d-flex'); // Pokaz tylko pierwszy message
        this.$errorMessageElement = $('.kbf-error-message'); // Komunikaty bledow
        this.$errorStepper = $('.error-stepper'); // Dolny komunikat o bledzie

        this.searchByREGONButtonPreloader = new KbfPreloaderButton('.kbf-search-button');

        // Ustaw przyciski w zaleznosci od szerokosci urzadzenia
        if (window.innerWidth >= 768) {
            this.$prevButton = this.$kbfStepper.find('.button-prev.button-desktop');
            this.$nextButton = this.$kbfStepper.find('.button-next.button-desktop');
            this.$registerButton = this.$kbfStepper.find('.button-register.button-desktop');
            this.registerCompanyButton = new KbfPreloaderButton('.button-register.button-desktop button');

        } else {
            this.$prevButton = this.$kbfStepper.find('.button-prev');
            this.$nextButton = this.$kbfStepper.find('.button-next');
            this.$registerButton = this.$kbfStepper.find('.button-register');
            this.registerCompanyButton = new KbfPreloaderButton('.button-register button');
        }

        this.$stepsTop = this.$kbfStepper.find('.container > .steps > .step'); // Krok u gory
        this.$stepsBottom = this.$kbfStepper.find('form > .steps > .step'); // Kroki na dole


        console.log(this.$stepsBottom);

        // Przycisk wyszukiwania po numerze REGON
        this.$searchByREGONButton = $('.kbf-search-button');
        this.$searchByREGONButton.attr('disabled', 'disabled');


        let $keywordsField = $('input.kbf-keywords');

        //Tagify
       $keywordsField.tagify().on('change', function (e, value) {

        // Aktualizuj wartosc pola
        if (value) {

            let currentValue = JSON.parse(value);

            currentValue = currentValue.map(function (nextValue) {
                return nextValue.value
            })

            $keywordsField.val(currentValue.join(','));
       }
           else $keywordsField.val('');
       });

        // Maski wprowadzania
        this.$formInputs = $('.form-control');
        this.$formInputs.each(function () {
            if (this.name === 'company_regon') new Inputmask({ placeholder: ''}).mask(this);
            else new Inputmask().mask(this);
        })

        // Sprawdz czy walidator istnieje
        if (!$.fn.validate) throw errors.noValidator();

        // Ustaw walidator dla branz
        $.validator.addMethod('industries', function (value, element) {
            return this.optional(element) || value !== 'Wybierz'
        }, "Nazwa braży musi zostać wybrana.");

        // Ustaw walidator dla numeru REGON
        $.validator.addMethod('regon-not-exists', function (value, element) {
            return this.optional(element) || instance.regonNotExists
        }, "Firma o podanym numerze REGON jest juz zarejestrowana w KBF.");

        $.validator.addMethod('regon-not-found', function (value, element) {
            return this.optional(element) || instance.regonFound
        }, "Firma o podanym numerze REGON nie została odnaleziona.");

        // Walidacja
        this.$formElement = $('form');
        this.validator = this.$formElement.validate({

            formName: 'register-company',
            ignore: [],

            rules: {

                // Ustaw reguly dla branz
                industry: {
                    required: true,
                    industries: true
                },
                "sub-industry": {
                    required: true,
                    industries: true
                },
                "company_regon": {
                    required: true,
                    "regon-not-exists": true,
                    "regon-not-found": true
                }

            },

            // Umiejscowienie komunikatu o bledzie
            errorPlacement: function ($label, $element) {
                $label.addClass('kbf-error-message');

                let $column = $element.closest('[class*="col"]');

                if ($column.length > 0) {
                    $column.append($label);
                } else $label.insertAfter($element);
            }
        });

        // Wybor branz
        this.industrySwitcher = new KbfIndustrySwitcher('industries', 'sub-industries', "Wybierz", false, false);
        this.industrySwitcher.on('industries-changed', this.validateCurrentPage.bind(this));

        // Wysiwyg
        this.wysiwyg = new KbfWysiwyg('.wysiwyg');
        this.wysiwyg.on('change', this.validateCurrentPage.bind(this))

    }

    addListeners() {

        let instance = this;

        this.$prevButton.on('click', this.prevPage.bind(this));
        this.$nextButton.on('click', this.nextPage.bind(this));
        this.$registerButton.on('click', this.submitRegister.bind(this));

        // Pole REGON
        let $regonField = $('[name="company_regon"]');

        $regonField.on('change', this.regonFieldHandler($regonField).bind(this));
        $regonField.on('input', this.regonFieldHandler($regonField).bind(this));
        $regonField.on('paste', this.regonFieldHandler($regonField).bind(this));

        this.searchByREGONButtonPreloader.on('click', async function () {

            if (instance.regonErrorVisible) {
                $('.kbf-error-message').css('display', 'none');
            }

            instance.regonErrorVisible = false;

            let data = await instance.getDataFromREGON($regonField.val());
            instance.searchByREGONButtonPreloader.stopPreloader();

            let $companyNameField = $('[name="company_name"]');
            let $companyNipField = $('[name="company_nip"]');
            let $companyAddressField = $('[name="company_address"]');
            let $companyZipField = $('[name="company_zip"]');
            let $companyCityField = $('[name="company_city"]');
            $companyNameField.val('');
            $companyNipField.val('');
            $companyAddressField.val('');
            $companyZipField.val('');
            $companyCityField.val('');

            instance.regonFound = true;
            instance.regonNotExists = true;

            let isError = data['error'] !== undefined;

            if (isError) {
                if (data['error'] === 'No data found') instance.regonFound = false;
                if (data['error'] === 'Regon exists') instance.regonNotExists = false;
                instance.regonErrorVisible = true;
            }

            if (instance.regonNotExists && !isError) {

                // Ustaw wartosci dla pol
                $companyNameField.val(data["company_name"]);
                $companyNipField.val(data["company_nip"]);
                $companyAddressField.val(data["company_address"]);
                $companyZipField.val(data["company_zip"]);
                $companyCityField.val(data["company_city"]);
            }

            instance.validateCurrentPage();

        })
    }

    // Aktywuje przycisk wyszukiwania jezeli dlugosc REGON jest prawidlowa
    regonFieldHandler($regonField) {

        return function () {
            if ($regonField.val().length >= 7) this.$searchByREGONButton.attr('disabled', false);
            else this.$searchByREGONButton.attr('disabled', 'disabled');
        }
    }

    // Zmienia na nastepna strone
    nextPage(e) {

        e.stopPropagation();
        this.validator.resetForm();

        if (this.validateCurrentPage()) { // Zmienia strone tylko w przypadku jej poprawnosci

            if (this.currentPageIdx === this.lastPageIdx) return;

            this.$stepsTop.eq(this.currentPageIdx).addClass('done');
            this.$stepsTop.eq(this.currentPageIdx).removeClass('active');

            this.$stepsBottom.eq(this.currentPageIdx).addClass('done');
            this.$stepsBottom.eq(this.currentPageIdx).removeClass('active');

            this.currentPageIdx++;

            if (this.currentPageIdx > 0) this.$prevButton.find('button').removeAttr('disabled');

            if (this.currentPageIdx === this.lastPageIdx) {
                this.$nextButton.hide();
                this.$registerButton.show();
                this.$registerButton.find('button').addClass('show');
            }

            this.$stepsTop.eq(this.currentPageIdx).addClass('active');
            this.$stepsBottom.eq(this.currentPageIdx).addClass('active');

            this.goToPage(this.currentPageIdx);
            this.setMessages();


        }
    }

    // Zmienia na poprzednia strone
    prevPage(e) {

        e.stopPropagation();

        if (this.currentPageIdx === 0) return

        this.$stepsTop.eq(this.currentPageIdx).removeClass('active');
        this.$stepsBottom.eq(this.currentPageIdx).removeClass('active');

        this.currentPageIdx--;

        this.$stepsTop.eq(this.currentPageIdx).removeClass('done');
        this.$stepsTop.eq(this.currentPageIdx).addClass('active');

        this.$stepsBottom.eq(this.currentPageIdx).removeClass('done');
        this.$stepsBottom.eq(this.currentPageIdx).addClass('active');

        if (this.currentPageIdx < this.lastPageIdx) {
            this.$registerButton.hide();
            this.$registerButton.find('button').removeClass('show');
            this.$nextButton.show();

        }

        if (this.currentPageIdx === 0) {
            this.$prevButton.find('button').attr('disabled', 'disabled');
        }

        this.goToPage(this.currentPageIdx);
        this.setMessages();

    }

    goToPage(pageIdx) {
        this.$pages.addClass('d-none');
        this.$pages.eq(pageIdx).removeClass('d-none');

        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

    }

    // Ustawia komunikaty dla stron
    setMessages() {
        this.$infoMessages.eq(this.currentPageIdx).addClass('d-flex').show();
        this.$infoMessages.eq(this.currentPageIdx).siblings('.top-message').removeClass('d-flex').hide();
        $('.error-stepper').addClass('d-none');
    }


    // Sprawdza poprawnosc formularza na danej stronie
    validateCurrentPage() {

        if (!this.$errorStepper.hasClass('d-none')) this.$errorStepper.addClass('d-none')

        let $currentPageInputs = $('.page').eq(this.currentPageIdx).find('.form-control').not('.kbf-keywords');

        let fieldsAreValid = $currentPageInputs.valid();

        // Wyswietl komunikat o bledzie jeżeli pole komunikatu istnieje
        if (this.$errorMessageElement.length > 0) {
            if(formIsValid && !this.$errorMessageElement.hasClass('d-none')) this.$errorMessageElement.addClass('d-none');
            if(!formIsValid && this.$errorMessageElement.hasClass('d-none')) this.$errorMessageElement.removeClass('d-none');
        }

        if (!fieldsAreValid) this.$errorStepper.removeClass('d-none');

        return fieldsAreValid;
    }

    // Potwierdza rejestracje
    submitRegister() {

        this.$prevButton.find('button').attr('disabled', 'disabled').off('click'); // Wylacz prev button

    }

    async getDataFromREGON(regon) {

        if (!regon) return [];
        return await $.get(config.apiEndpoint + `/api/regon/?regon=${regon}`)

    }

}

export default KbfStepper