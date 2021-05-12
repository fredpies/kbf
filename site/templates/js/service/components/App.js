import KbfMiniMap from "../../components/KbfMiniMap";

class App {

    constructor() {
        this.init();
    }

    init() {
        new KbfMiniMap('#kbf-minimap');
    }

    addListeners() {}
}

export default App;