import KbfSendCv from "./KbfSendCv";
import KbfBackButton from "../../components/KbfBackButton";

class App {

    constructor() {
        this.init();
    }

    init() {

        new KbfSendCv(); // Inicjuj formularz
        new KbfBackButton('.kbf-back-button');

    }
}

export default App;