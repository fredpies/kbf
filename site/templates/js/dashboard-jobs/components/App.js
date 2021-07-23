import KbfPreloaderButton from "../../components/KbfPreloaderButton";
import KbfFooterTop from "../../components/KbfFooterTop";

class App {

    constructor() {

        this.init();
        this.addListeners();

    }

    init() {

        this.$deleteButtons = $('a[data-id]');
        this.$jobIdField = $('input[name="job_id"]');
        this.preloaderButton = new KbfPreloaderButton('.back-button');

        new KbfFooterTop();


    }


    addListeners() {

        let instance = this;

        this.$deleteButtons.on('click', function () {
            instance.$jobIdField.val($(this).data('id'));
        })

    }
}

export default App;