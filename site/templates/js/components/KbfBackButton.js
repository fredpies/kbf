import errors from "../modules/Errors";
import KbfPreloaderButton from "./KbfPreloaderButton";

class KbfBackButton {

    constructor(selector) {

        let $ = window.$;
        this.$backButton = $(selector);

        // Emituj wyjatek gdy nie podano selektora albo element nie zostal znaleziony
        if (!selector || this.$backButton.length === 0) throw errors.elementNotFound(selector);

        this.init(selector);
        this.addListeners();

    }

    init(selector) {

        this.preloaderButton = new KbfPreloaderButton(selector);
        this.$backButton.hide();

        if (window.history.length > 1 ) this.$backButton.show();

    }

    addListeners() {

        if (window.history.length > 1 ) {
            this.$backButton.on('click', function () {
                window.history.back();
            })
        }


    }
}

export default KbfBackButton