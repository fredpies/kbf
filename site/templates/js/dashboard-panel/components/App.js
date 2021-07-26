import KbfFavouriteCounters from "../../components/KbfFavouriteCounters";

class App {

    constructor() {
        this.init();
        this.addListeners();
    }

    init() {

        new KbfFavouriteCounters();

    }

    addListeners() {

    }

}

export default App;