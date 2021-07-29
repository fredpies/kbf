import KbfFooterTop from "../../components/KbfFooterTop";
import KbfBackButton from "../../components/KbfBackButton";
import KbfMiniMap from "../../components/KbfMiniMap";

class App {

    constructor() {
        this.init();
    }

    init() {
        new KbfMiniMap('#kbf-minimap');
        new KbfFooterTop();
        new KbfBackButton('.kbf-back-button')
    }

}

export default App;