import KbfMiniMap from "../../components/KbfMiniMap";
import Alpine from "alpinejs";
import KbfLikeCompany from "../../components/KbfLikeCompany";
import KbfBackButton from "../../components/KbfBackButton";

class App {

    constructor() {
        this.init();
    }

    init() {

        new KbfMiniMap('#kbf-minimap');
        new KbfLikeCompany();
        new KbfBackButton('.kbf-back-button');

        window.Alpine = Alpine;
        Alpine.start();

    }

    addListeners() {}


}

export default App;