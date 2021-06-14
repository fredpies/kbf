import errors from "../modules/Errors";

class KbfPreloaderButton extends EventTarget {

    constructor(selector) {

        super();
        let $ = window.$;
        this.$preloaderButton = $(selector);

        // Emituj wyjatek gdy nie podano selektora albo element nie zostal znaleziony
        if (!selector || this.$preloaderButton.length === 0) throw errors.elementNotFound(selector);

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

    // Startuje preloader
    startPreloader(buttonElement) {

        let $ = window.$;
        let $this = $(buttonElement);

        let buttonGeometry = buttonElement.getBoundingClientRect(); // Aktualna geometria

        $this.attr('disabled', 'disabled');
        $this.css('width', buttonGeometry.width + 'px');
        $this.css('height', buttonGeometry.height + 'px');
        $this.css('padding', 0);
        $this.html(KbfPreloaderButton.preloaderMarkup);

    }

    // Zatrzymuje preloader
    stopPreloader() {
        this.$preloaderButton.html(this.buttonCurrentContents).attr('style', '');
        this.$preloaderButton.removeAttr('disabled');
    }

    addListeners() {

        let instance = this;
        this.$preloaderButton.on('click', function () {
            instance.startPreloader(this);
            instance.emit(new CustomEvent('click'));
        });
    }
}

KbfPreloaderButton.preloaderMarkup = '<div class="kbf-button-preloader"><div id="dots"><span></span><span></span><span></span></div></div>';
export default KbfPreloaderButton;