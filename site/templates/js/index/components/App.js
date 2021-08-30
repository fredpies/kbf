import KbfAreaSwitcher from "../../components/KbfAreaSwitcher";
import KbfFooterTop from "../../components/KbfFooterTop";
import KbfPreloaderButton from "../../components/KbfPreloaderButton";

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

        // First section industries sub-menu opening and closing
        $("#industriesSidebarOpenButton").click(function() {
            $("#top-section").removeClass('col-xl-12');
            $("#top-section").addClass('col-xl-9');

            $("#industriesSidebar").addClass('d-xl-block');

            $("#industriesSidebarOpenButton").removeClass('d-xl-block')
            $("#industriesSidebarOpenButton").addClass('d-none')

            $("#industriesSidebarCloseButton").addClass('d-xl-block');
        });

        $("#industriesSidebarCloseButton").click(function() {
            $("#top-section").removeClass('col-xl-9');
            $("#top-section").addClass('col-xl-12');

            $("#industriesSidebar").removeClass('d-xl-block');
            $("#industriesSidebar").addClass('d-none');

            $("#industriesSidebarCloseButton").removeClass('d-xl-block')
            $("#industriesSidebarCloseButton").addClass('d-none')

            $("#industriesSidebarOpenButton").addClass('d-xl-block');
        });

        this.$kbfSearch = $('.kbf-search');
        this.$form = $('form');
        new KbfPreloaderButton('.kbf-search');
    }

    addListeners() {
        let instance = this;

        this.$kbfSearch.on('click', function () {
            instance.$form.submit();
        })
    }

}

export default App;