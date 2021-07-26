import KbfAreaSwitcher from "../../components/KbfAreaSwitcher";
import KbfFooterTop from "../../components/KbfFooterTop";

// Dane o wojewodztwach i powiatach
import provincesGeoJSON from '../../map/provinces.json'
import areasGeoJSON from '../../map/areas.json'

class App {

    constructor() {
        window.provincesGeoJSON = provincesGeoJSON;
        window.areasGeoJSON = areasGeoJSON;

        this.init();
        this.addListeners();
    }

    init() {

        new KbfAreaSwitcher('provinces', 'areas');
        new KbfFooterTop();

        this.$industriesSidebar = $('#industriesSidebar');
        this.$industriesSidebarButton = $('#industriesSidebarButton');

    }

    addListeners() {

        let instance = this;

        this.$industriesSidebar.click(function (e) {
            e.stopPropagation();
        });

        // First section industries sub-menu opening and closing
        this.$industriesSidebarButton.click(function (e) {
            e.stopPropagation();
            instance.$industriesSidebar.toggleClass('show');
        });

        $(window).click(function () {
            instance.$industriesSidebar.removeClass('show');
        })


    }

}

export default App;