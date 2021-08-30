import KbfIndustryFilter from "../../components/KbfIndustryFilter";
import KbfFooterTop from "../../components/KbfFooterTop";

class App {

    constructor() {

        this.init();
    }

    init() {

        this.kbfIndustryFilter = new KbfIndustryFilter();
        new KbfFooterTop();

    }

}

export default App;