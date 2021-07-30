import Alpine from "alpinejs";
import KbfFavouriteProducts from "../../components/KbfFavouriteProducts";
import KbfPreloaderButton from "../../components/KbfPreloaderButton";
import KbfFavouriteCounters from "../../components/KbfFavouriteCounters";
import KbfFooterTop from "../../components/KbfFooterTop";

class App {

    constructor() {

        this.init();

    }

    init() {

        new KbfFavouriteProducts();
        new KbfFavouriteCounters();
        new KbfPreloaderButton('.preloader-button')
        new KbfFooterTop();

        window.Alpine = Alpine;
        Alpine.start();

    }


    addListeners() {



    }
}

export default App;