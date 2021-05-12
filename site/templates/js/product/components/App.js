import KbfMiniMap from "../../components/KbfMiniMap";
import KbfBackButton from "../../components/KbfBackButton";

class App {

    constructor() {

        this.init();
        this.addListeners();

    }

    init() {

        new KbfMiniMap('#kbf-minimap');
        new KbfBackButton('.kbf-back-button');

    }

    addListeners() {


    }
}

export default App;