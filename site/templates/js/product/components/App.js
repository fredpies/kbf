import KbfMiniMap from "../../components/KbfMiniMap";
import KbfBackButton from "../../components/KbfBackButton";
import KbfLikeCompany from "../../components/KbfLikeCompany";
import KbfLikeProduct from "../../components/KbfLikeProduct";
import Alpine from "alpinejs";

class App {

    constructor() {

        this.init();
        this.addListeners();

    }

    init() {

        new KbfMiniMap('#kbf-minimap');
        new KbfBackButton('.kbf-back-button');

        new KbfLikeCompany();
        new KbfLikeProduct();

        window.Alpine = Alpine;
        Alpine.start();

    }

    addListeners() {


    }
}

export default App;