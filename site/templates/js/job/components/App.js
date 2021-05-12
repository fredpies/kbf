import KbfBackButton from "../../components/KbfBackButton";

class App {

    constructor() {

        this.init();
        this.addListeners();
    }

    init() {

        new KbfBackButton('.kbf-back-button')

    }

    addListeners() {

    }


}

export default App;