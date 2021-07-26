import Alpine from "alpinejs";
import KbfFavouriteCompanies from "../../components/KbfFavouriteCompanies";
import KbfPreloaderButton from "../../components/KbfPreloaderButton";
import KbfFavouriteCounters from "../../components/KbfFavouriteCounters";
import KbfFooterTop from "../../components/KbfFooterTop";

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

        new KbfFooterTop();

    }


    addListeners() {



    }
}

export default App;