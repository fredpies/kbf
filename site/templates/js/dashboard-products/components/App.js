import Alpine from "alpinejs";
import KbfPreloaderButton from "../../components/KbfPreloaderButton";
import KbfFooterTop from "../../components/KbfFooterTop";

class App {

    constructor() {

        this.init();
        this.addListeners();

    }

    init() {

        this.$deleteButtons = $('a[data-id]');
        this.$productIdField = $('input[name="product_id"]');
        this.preloaderButton = new KbfPreloaderButton('.back-button');

        new KbfFooterTop();
        window.Alpine = Alpine;
        Alpine.start();

    }

    addListeners() {

        let instance = this;

        this.$deleteButtons.on('click', function () {
            instance.$productIdField.val($(this).data('id'));
        })

    }
}

export default App;