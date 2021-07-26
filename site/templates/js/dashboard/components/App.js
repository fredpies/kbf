import Alpine from "alpinejs";
import KbfFooterTop from "../../components/KbfFooterTop";

class App {

    constructor() {
        this.init();
        this.addListeners();
    }

    init() {

        window.Alpine = Alpine;
        Alpine.start();

        new KbfFooterTop();

    }

    addListeners() {

    }

}

export default App;