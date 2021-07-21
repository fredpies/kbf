import KbfBackButton from "../../components/KbfBackButton";
import KbfFooterTop from "../../components/KbfFooterTop";

class App {

    constructor() {

        this.init();
        this.addListeners();
    }

    init() {

        new KbfBackButton('.kbf-back-button');
        new KbfFooterTop();

    }

    addListeners() {

    }


}

export default App;