import KbfStepper from "../../components/KbfStepper";
import KbfIndustrySwitcher from "../../components/KbfIndustrySwitcher";
import KbfWysiwyg from "../../components/KbfWysiwyg";

class App {

    constructor() {

        this.init();
        this.addListeners();

    }

    init() {

        this.stepper = new KbfStepper('.kbf-stepper');

    }

    addListeners() {



    }

}

export default App;