import KbfForm from "../../components/KbfForm";
import KbfBackButton from "../../components/KbfBackButton";
import Quill from 'quill';

class App {

    constructor() {

        let $ = window.$;
        this.$form = $('form');
        this.$editor = $('.editor');
        this.$wysiwyg = $('.wysiwyg');
        this.$wysiwygInput = $('.wysiwyg > input');
        this.init();
        this.addListeners();

    }

    init() {


        let instance = this;

        // Opcje dla edytora
        let options = {
            modules: {
                toolbar: [['bold', 'italic', 'underline', 'strike'],  [ { 'align': [] } ], [{ 'list': 'ordered'}, { 'list': 'bullet' }]]
            },
            theme: 'bubble'
        };

        new KbfForm({formName: 'generated'}, 'pl'); // Inicjuj formularz
        new KbfBackButton('.kbf-back-button');

        $(window).on('contextmenu', function (e) {
            e.preventDefault();
        })

        this.editor = new Quill('.editor', options);
        this.$contents = $('.ql-editor');

        if (this.$wysiwyg.data('value')) this.setInitialValue(this.$wysiwyg.data('value')); // Ustaw wartosc poczatkowa dla edytora



    }

    addListeners() {

        let instance = this;

        // Aktualizuj wartosc pola input
        this.editor.on('editor-change', function () {
            instance.setInputValue(instance.$contents.html());
        })


        // Ustaw focus na edytorze
        let $qlEditor = $('.ql-editor');
        $(window).on('click', function () {
            $qlEditor.removeClass('focus');
        });

        $qlEditor.on('click', function (e) {
            e.stopPropagation();
            $qlEditor.addClass('focus');
        })


    }

    //Ustawia wartosc pola input
    setInputValue(html) {

        if (html === '<p><br></p>' || html.length === 0) this.$wysiwygInput.attr('value', '');
        else this.$wysiwygInput.attr('value', html);
    }

    // Ustawia wartosc poczatkowa dla edytora
    setInitialValue(html) {
        this.$contents.html(html);
        this.setInputValue(html)
    }
}

export default App;