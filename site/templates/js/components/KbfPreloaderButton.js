import errors from "../modules/Errors";

class KbfPreloaderButton extends EventTarget {

    constructor(selector, auto= true) {

        super();
        let $ = window.$;

        this.$preloaderButton = $(selector);

        // Emituj wyjatek gdy nie podano selektora albo element nie zostal znaleziony
        if (!selector || this.$preloaderButton.length === 0) throw errors.elementNotFound(selector);

        this.auto = auto; // Czy automatycznie dodawac listener

        this.init();
        this.addListeners();

    }

    init() {

        // Aliasy
        this.on = this.addEventListener;
        this.off = this.removeEventListener;
        this.emit = this.dispatchEvent;

        this.buttonCurrentContents = this.$preloaderButton.html(); // Aktualna zawartosc

    }

    triggerStart(buttonElement) {

        let buttonGeometry = buttonElement.getBoundingClientRect(); // Aktualna geometria

        let $buttonElement = $(buttonElement);
        let bgColor;

        $buttonElement.on('click', function () {
            bgColor = getComputedStyle(buttonElement, ':hover').backgroundColor;
        })


        this.$preloaderButton.trigger({
            type: 'start-preloader',
            buttonGeometry,
            bgColor
        });

        this.emit(new CustomEvent('click'));
    }

    // Startuje preloader
    startPreloader(buttonElement, buttonGeometry, bgColor) {

        let $ = window.$;

        let $buttonElement = $(buttonElement);

        $buttonElement.attr('disabled', 'disabled');
        $buttonElement.css('width', buttonGeometry.width + 'px');
        $buttonElement.css('height', buttonGeometry.height + 'px');
        $buttonElement.css('padding', 0);
        $buttonElement.css('background-color', bgColor);
        $buttonElement.html(KbfPreloaderButton.preloaderMarkup);

        this.emit(new CustomEvent('click'));

    }

    // Zatrzymuje preloader
    stopPreloader() {
        this.$preloaderButton.html(this.buttonCurrentContents).attr('style', '');
        this.$preloaderButton.removeAttr('disabled');
    }

    addListeners() {

        let instance = this;

        // Rejestruj handler warunkowo
        if (this.auto) {
            this.$preloaderButton.on('click', function () {
               instance.triggerStart(this);
            });
        }

        this.$preloaderButton.on('start-preloader', function (e) {
            instance.startPreloader(this, e.buttonGeometry, e.bgColor);
        })

    }
}

KbfPreloaderButton.preloaderMarkup = '<div class="kbf-button-preloader"><div id="dots"><span></span><span></span><span></span></div></div>';
export default KbfPreloaderButton;