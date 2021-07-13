import KbfMiniMap from "../../components/KbfMiniMap";
import KbfSendMessage from "./KbfSendMessage";
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
        new KbfSendMessage(); // Inicjuj formularz
        new KbfBackButton('.kbf-back-button');

        new KbfLikeCompany();

        window.Alpine = Alpine;
        Alpine.start();

    }
}

export default App;