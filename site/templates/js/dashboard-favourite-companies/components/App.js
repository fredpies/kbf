import Alpine from "alpinejs";
import KbfFavouriteCompanies from "../../components/KbfFavouriteCompanies";
import KbfPreloaderButton from "../../components/KbfPreloaderButton";
import KbfFavouriteCounters from "../../components/KbfFavouriteCounters";

class App {

    constructor() {

        this.init();


    }

    init() {

        new KbfFavouriteCompanies();
        new KbfFavouriteCounters();
        new KbfPreloaderButton('.preloader-button')

        window.Alpine = Alpine;
        Alpine.start();

    }


    addListeners() {



    }
}

export default App;