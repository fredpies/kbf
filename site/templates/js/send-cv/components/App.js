import KbfSendCv from "./KbfSendCv";
import KbfBackButton from "../../components/KbfBackButton";
import KbfFooterTop from "../../components/KbfFooterTop";

class App {

    constructor() {
        this.init();
    }

    init() {

        new KbfSendCv(); // Inicjuj formularz
        new KbfBackButton('.kbf-back-button');
        new KbfFooterTop();

    }
}

export default App;