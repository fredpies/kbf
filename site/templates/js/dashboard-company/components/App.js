import KbfPreloaderButton from "../../components/KbfPreloaderButton";
import KbfWysiwyg from "../../components/KbfWysiwyg";
import KbfTagify from "../../components/KbfTagify";


class App {

    constructor() {

        this.init();
        this.addListeners();

    }

    init() {

        // Wysiwyg
        this.wysiwyg = new KbfWysiwyg('.wysiwyg');

        //Tagify
        new KbfTagify('input.kbf-keywords');

    }

    addListeners() {

    }

}

export default App;