import errors from "../modules/Errors";
import KbfPreloaderButton from "./KbfPreloaderButton";

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
        this.lastPageIdx = (this.$kbfStepper.find('.page')).length - 1; // Ostatni index
        this.currentWidth = window.innerWidth;

        // Elementy $
        this.$infoMessages = this.$kbfStepper.find('.top-message');
        this.$infoMessages.hide().eq(0).addClass('d-flex'); // Pokaz tylko pierwszy message

        // Ustaw przyciski w zaleznosci od szerokosci urzadzenia

        if (window.innerWidth >= 768) {
            this.$prevButton = this.$kbfStepper.find('.button-prev.button-desktop');
            this.$nextButton = this.$kbfStepper.find('.button-next.button-desktop');
            this.$registerButton = this.$kbfStepper.find('.button-register.button-desktop');
            this.preloaderButton = new KbfPreloaderButton('.button-register.button-desktop button');

        } else {
            this.$prevButton = this.$kbfStepper.find('.button-prev');
            this.$nextButton = this.$kbfStepper.find('.button-next');
            this.$registerButton = this.$kbfStepper.find('.button-register');
            this.preloaderButton = new KbfPreloaderButton('.button-register button');
        }

        this.$pageWrapper = this.$kbfStepper.find('.page-wrapper'); // Przesuwany wrapper
        this.$stepsTop = this.$kbfStepper.find('.container > .steps > .step'); // Kroki
        this.$stepsBottom = this.$kbfStepper.find('.page-wrapper').next('.steps').find('.step'); // Kroki


    }


    addListeners() {

        this.$prevButton.on('click', this.prevPage.bind(this));
        this.$nextButton.on('click', this.nextPage.bind(this));
        this.$registerButton.on('click', this.submitRegister.bind(this));

        $(window).on('resize', this.adjustStepper.bind(this)); // Dostosuj polozenie przesuwanego wrappera podczas rotacji urzadzenia

    }

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
            this.$pageWrapper.css('transform', `translateX(-${this.currentPageIdx * this.currentWidth}px)`);

            if (this.currentPageIdx > 0) this.$prevButton.find('button').removeAttr('disabled');

            if (this.currentPageIdx === this.lastPageIdx) {
                this.$nextButton.hide();
                this.$registerButton.show();
                this.$registerButton.find('button').addClass('show');
            }

            this.$stepsTop.eq(this.currentPageIdx).addClass('active');
            this.$stepsBottom.eq(this.currentPageIdx).addClass('active');

            this.setMessages();


        }
    }

    // Zmienia na poprzednia strone
    prevPage(e) {

        e.stopPropagation();

        if (this.validateCurrentPage()) { // Zmienia strone tylko w przypadku jej poprawnosci


            if (this.currentPageIdx === 0) return

            this.$stepsTop.eq(this.currentPageIdx).removeClass('active');
            this.$stepsBottom.eq(this.currentPageIdx).removeClass('active');

            this.currentPageIdx--;

            this.$stepsTop.eq(this.currentPageIdx).removeClass('done');
            this.$stepsTop.eq(this.currentPageIdx).addClass('active');

            this.$stepsBottom.eq(this.currentPageIdx).removeClass('done');
            this.$stepsBottom.eq(this.currentPageIdx).addClass('active');

            this.$pageWrapper.css('transform', `translateX(-${this.currentPageIdx * this.currentWidth}px)`);

            if (this.currentPageIdx < this.lastPageIdx) {
                this.$registerButton.hide();
                this.$registerButton.find('button').removeClass('show');
                this.$nextButton.show();

            }

            if (this.currentPageIdx === 0) {
                this.$prevButton.find('button').attr('disabled', 'disabled');
            }

            this.setMessages();


        }
    }

    // Ustawia komunikaty dla stron
    setMessages() {
        this.$infoMessages.eq(this.currentPageIdx).addClass('d-flex').show();
        this.$infoMessages.eq(this.currentPageIdx).siblings('.top-message').removeClass('d-flex').hide();
    }

    adjustStepper() {
        this.currentWidth = this.$kbfStepper.find('.page').eq(0).width();
        this.$pageWrapper.css('transform', `translateX(-${this.currentPageIdx * this.currentWidth}px)`);

    }

    // Sprawdza poprawnosc formularza na danej stronie
    validateCurrentPage() {

        return true;
    }

    // Potwierdza rejestracje
    submitRegister() {

        this.$prevButton.find('button').attr('disabled', 'disabled').off('click'); // Wylacz prev button

    }

}

export default KbfStepper