import KbfForm from "../../components/KbfForm";
import KbfBackButton from "../../components/KbfBackButton";
import KbfWysiwyg from "../../components/KbfWysiwyg";

class App {

    constructor() {

        this.init();
        this.addListeners();

    }

    init() {


        new KbfForm({formName: 'generated'}, 'pl'); // Inicjuj formularz
        new KbfWysiwyg('.editor');
        new KbfBackButton('.kbf-back-button');


    }

    addListeners() {


    }

}

export default App;