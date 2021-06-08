import KbfStepper from "../../components/KbfStepper";
import KbfIndustrySwitcher from "../../components/KbfIndustrySwitcher";
import KbfWysiwyg from "../../components/KbfWysiwyg";
import PerfectScrollbar from 'perfect-scrollbar';

class App {

    constructor() {

        this.init();
        this.addListeners();

    }

    init() {

        new KbfStepper('.kbf-stepper');
        new KbfIndustrySwitcher('industries', 'sub-industries', "Wybierz", false);
        new KbfWysiwyg('.wysiwyg')


    }

    addListeners() {



    }

}

export default App;