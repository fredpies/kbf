import KbfIndustryFilter from "../../components/KbfIndustryFilter";
import KbfTag from "../../components/KbfTag";

class App {

    constructor() {
        this.init();
    }

    init() {

        let instance = this;

        this.kbfIndustryFilter = new KbfIndustryFilter();
        this.kbfTag = new KbfTag('.kbf-filter-badges');

        this.kbfTag.on('reset-filter', function () {
            instance.kbfIndustryFilter.$resetButton.trigger('click');
        });

        this.kbfTag.on('refresh-filter', function () {
            instance.kbfIndustryFilter.$searchButton.trigger('click');
        });

        this.kbfIndustryFilter.on('checkbox-change', function (e) {

            let wasChecked = e.detail.wasChecked;
            let name = e.detail.name;

            if (wasChecked) instance.kbfTag.removeBadge(name);
            if (!wasChecked) instance.kbfTag.addBadge(name);

        })

        this.kbfTag.on('badge-remove', function (e) {
            instance.kbfIndustryFilter.uncheck(e.detail.name);
        })
    }



}

export default App;