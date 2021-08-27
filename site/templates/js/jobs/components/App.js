import KbfIndustryFilter from "../../components/KbfIndustryFilter";
import KbfFooterTop from "../../components/KbfFooterTop";

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


        new KbfFooterTop();


    }

}

export default App;