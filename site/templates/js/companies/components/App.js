import KbfIndustryFilter from "../../components/KbfIndustryFilter";
import KbfLikeCompany from "../../components/KbfLikeCompany";
import KbfFooterTop from "../../components/KbfFooterTop";
import Alpine from "alpinejs";

class App {

    constructor() {

        this.init();
    }

    init() {

        let instance = this;

        this.kbfIndustryFilter = new KbfIndustryFilter();

        this.kbfIndustryFilter.on('filter', function () {
            instance.kbfIndustryFilter.$searchButton.trigger('click');
        });


        new KbfLikeCompany();
        new KbfFooterTop();

        window.Alpine = Alpine;
        Alpine.start();

    }

}

export default App;