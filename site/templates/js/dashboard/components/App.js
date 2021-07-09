import Alpine from "alpinejs";

class App {

    constructor() {
        this.init();
        this.addListeners();
    }

    init() {

        window.Alpine = Alpine;
        Alpine.start();

    }

    addListeners() {

    }

}

export default App;