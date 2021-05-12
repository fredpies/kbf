import KbfMiniMap from "../../components/KbfMiniMap";
import KbfSendForm from "./KbfSendForm";
import KbfBackButton from "../../components/KbfBackButton";

class App {

    constructor() {

        let $ = window.$;
        this.$sendButton = $('kbf-send-button');
        this.$form = $('form');
        this.init();
    }

    init() {

        new KbfMiniMap('#kbf-minimap'); // Inicjalizuj minimape
        new KbfSendForm(); // Inicjuj formularz
        new KbfBackButton('.kbf-back-button');

    }
}

export default App;