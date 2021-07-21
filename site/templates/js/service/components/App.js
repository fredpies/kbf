import KbfFooterTop from "../../components/KbfFooterTop";
import KbfBackButton from "../../components/KbfBackButton";

class App {

    constructor() {
        this.init();
    }

    init() {
        new KbfFooterTop();
        new KbfBackButton('.kbf-back-button')
    }

}

export default App;