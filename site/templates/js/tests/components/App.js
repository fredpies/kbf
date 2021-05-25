import KbfForm from "../../components/KbfForm";
import KbfBackButton from "../../components/KbfBackButton";
import Quill from 'quill';

class App {

    constructor() {

        let $ = window.$;
        this.$form = $('form');
        this.init();
    }

    init() {

        // Opcje dla edytora
        let options = {
            modules: {
                toolbar: [['bold', 'italic', 'underline', 'strike'],  [ { 'align': [] } ], [{ 'list': 'ordered'}, { 'list': 'bullet' }]]
            },
            theme: 'bubble'
        };

        new KbfForm({formName: 'form-name'}, 'pl'); // Inicjuj formularz
        new KbfBackButton('.kbf-back-button');

        $(window).on('contextmenu', function (e) {
            e.preventDefault();
        })

        new Quill('.editor', options);

    }
}

export default App;