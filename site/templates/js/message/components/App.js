import KbfMiniMap from "../../components/KbfMiniMap";
import KbfSendForm from "./KbfSendForm";
import KbfBackButton from "../../components/KbfBackButton";
import KbfLikeCompany from "../../components/KbfLikeCompany";
import Alpine from "alpinejs";

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

        new KbfLikeCompany();

        window.Alpine = Alpine;
        Alpine.start();

    }
}

export default App;