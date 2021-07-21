import KbfMiniMap from "../../components/KbfMiniMap";
import KbfBackButton from "../../components/KbfBackButton";
import KbfLikeCompany from "../../components/KbfLikeCompany";
import KbfLikeProduct from "../../components/KbfLikeProduct";
import Alpine from "alpinejs";
import KbfFooterTop from "../../components/KbfFooterTop";

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
        new KbfFooterTop();

        window.Alpine = Alpine;
        Alpine.start();

    }

    addListeners() {


    }
}

export default App;