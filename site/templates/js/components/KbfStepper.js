import errors from "../modules/Errors";
import Inputmask from "inputmask/lib/inputmask";

class KbfStepper {

    constructor(selector) {

        let $ = window.$;
        this.$kbfStepper = $(selector);

        // Emituj wyjatek gdy nie podano selektora albo element nie zostal znaleziony
        if (!selector || this.$kbfStepper.length === 0) throw errors.elementNotFound(selector);

        this.init();
        this.addListeners();
    }

    init() {

        this.currentPageIdx = 0; // Biezacy index strony
        this.$pages = this.$kbfStepper.find('.page');
        this.$pages.eq(0).removeClass('d-none');
        this.lastPageIdx = this.$pages.length - 1; // Ostatni index

        // Elementy $
        this.$infoMessages = this.$kbfStepper.find('.top-message');
        this.$infoMessages.hide().eq(0).addClass('d-flex'); // Pokaz tylko pierwszy message
        this.$errorMessageElement = $('.kbf-error-message'); // Komunikaty bledow
        this.$errorStepper = $('.error-stepper'); // Dolny komunikat o bledzie

        this.$stepsTop = this.$kbfStepper.find('.container > .steps > .step'); // Krok u gory
        this.$stepsBottom = this.$kbfStepper.find('form > .steps > .step'); // Kroki na dole

        // Maski wprowadzania
        this.$formInputs = $('.form-control');
        this.$formInputs.each(function () {
            if (this.name === 'company_regon') new Inputmask({ placeholder: ''}).mask(this);
            else new Inputmask().mask(this);
        })
    }

    addListeners() {}

    // Zmienia na nastepna strone
    nextPage(e) {

        e.stopPropagation();

        if (this.validateCurrentPage()) { // Zmienia strone tylko w przypadku jej poprawnosci

            if (this.currentPageIdx === this.lastPageIdx) return;

            this.$stepsTop.eq(this.currentPageIdx).addClass('done');
            this.$stepsTop.eq(this.currentPageIdx).removeClass('active');

            this.$stepsBottom.eq(this.currentPageIdx).addClass('done');
            this.$stepsBottom.eq(this.currentPageIdx).removeClass('active');

            this.currentPageIdx++;

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

        let fieldsAreValid = true;
        if ($currentPageInputs.length) fieldsAreValid = $currentPageInputs.valid();

        // Wyswietl komunikat o bledzie jeżeli pole komunikatu istnieje
        if (this.$errorMessageElement.length > 0) {
            if(fieldsAreValid && !this.$errorMessageElement.hasClass('d-none')) this.$errorMessageElement.addClass('d-none');
            if(!fieldsAreValid && this.$errorMessageElement.hasClass('d-none')) this.$errorMessageElement.removeClass('d-none');
        }

        if (!fieldsAreValid) this.$errorStepper.removeClass('d-none');

        return fieldsAreValid;
    }

}

export default KbfStepper