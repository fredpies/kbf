import errors from "../modules/Errors";
import Quill from "quill";

class KbfWysiwyg extends EventTarget {

    constructor(selector, options = {}) {

        super();

        // Emituj wyjatek gdy nie podano selektora albo element nie zostal znaleziony

        if (!selector) throw errors.argumentNotFound("selector");

        this.selector = selector;

        this.options = {
            modules: {
                toolbar: [['bold', 'italic', 'underline', 'strike'],  [ { 'align': [] } ], [{ 'list': 'ordered'}, { 'list': 'bullet' }]]
            },
            theme: 'bubble',
            ...options
        };

        this.init();
        this.addListeners();

    }

    // Dodaje listenery
    addListeners() {

        let instance = this;

        // Aktualizuj wartosc pola input
        this.editor.on('editor-change', function () {
            instance.setInputValue(instance.$contents.html());
        })

        // Ustaw focus na edytorze

        $(window).on('click', function () {
            instance.$contents.removeClass('focus');
        });

        this.$contents.on('click', function (e) {
            e.stopPropagation();
            instance.$contents.addClass('focus');
        })
    }

    // Inicjalizuje
    init() {

        // Aliasy
        this.on = this.addEventListener;
        this.off = this.removeEventListener;
        this.emit = this.dispatchEvent;

        this.editor = new Quill(this.selector, this.options);
        this.$contents = $('.ql-editor');
        this.$wysiwygInput = $('.wysiwyg').next('input[type="hidden"]');

        this.$wysiwygInput.html(this.$contents.html());

    }

    //Ustawia wartosc pola input
    setInputValue(html) {

        let instance = this;

        if (html === '<p><br></p>' || html.length === 0) this.$wysiwygInput.attr('value', '');
        else this.$wysiwygInput.attr('value', html);

        // Emituj wartosc w polu edytora
        this.emit(new CustomEvent('change', { detail: instance.$wysiwygInput[0].value }));

    }

    // Ustawia wartosc poczatkowa dla edytora
    setInitialValue(html) {
        this.$contents.html(html);
        this.setInputValue(html)
    }

}

export default KbfWysiwyg;