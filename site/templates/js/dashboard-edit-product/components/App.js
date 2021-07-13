import KbfPreloaderButton from "../../components/KbfPreloaderButton";
import KbfWysiwyg from "../../components/KbfWysiwyg";
import KbfTabs from "../../components/KbfTabs";
import Alpine from "alpinejs";
import KbfProductImagesEdit from "../../components/KbfProductImagesEdit";

class App {

    constructor() {

        this.init();
        this.addListeners();

    }

    init() {

        // Taby
        this.tabs = new KbfTabs('dashboard-edit-product');

        this.$form = $('[name="dashboard-edit-product"]');
        this.$submitButton = $('.submit-button');

        // Wysiwyg
        // TODO: Musi byc zmienione, ukryte pole musi byc niezalezne od kontekstu
        this.$descriptionFieldHidden = $('[name="product_description_hidden"]');
        this.wysiwyg = new KbfWysiwyg('.wysiwyg');

        let htmlToInsert = this.$descriptionFieldHidden.val();
        let editor = document.getElementsByClassName('ql-editor')
        editor[0].innerHTML = htmlToInsert

        // Preloader buttons
        this.preloaderButton = new KbfPreloaderButton('.submit-button', false);
        this.backButton = new KbfPreloaderButton('.back-button');

        // Editing images

        new KbfProductImagesEdit();
        window.Alpine = Alpine;
        Alpine.start();
    }

    addListeners() {

        let instance = this;

        this.$submitButton.on('click', function (e) {
            e.preventDefault();
            instance.tabs.validateForm();
            if(instance.tabs.formIsValid) {
                instance.preloaderButton.triggerStart(this);
                instance.$form.submit();
            }
        });

    }

}

export default App;