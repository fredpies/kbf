import Alpine from "alpinejs";
import KbfFavouriteProducts from "../../components/KbfFavouriteProducts";
import KbfPreloaderButton from "../../components/KbfPreloaderButton";
import KbfFavouriteCounters from "../../components/KbfFavouriteCounters";

class App {

    constructor() {

        this.init();


    }

    init() {

        new KbfFavouriteProducts();
        new KbfFavouriteCounters();
        new KbfPreloaderButton('.preloader-button')

        window.Alpine = Alpine;
        Alpine.start();

    }


    addListeners() {



    }
}

export default App;