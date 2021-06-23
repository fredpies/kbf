import KbfAreaSwitcher from "../../components/KbfAreaSwitcher";

// Dane o wojewodztwach i powiatach
import provincesGeoJSON from '../../map/provinces.json'
import areasGeoJSON from '../../map/areas.json'

class App {

    constructor() {
        window.provincesGeoJSON = provincesGeoJSON;
        window.areasGeoJSON = areasGeoJSON;

        this.init();
    }

    init() {
        new KbfAreaSwitcher('provinces', 'areas');

        // First section industries sub-menu opening and closing
        $("#industriesSidebarOpenButton").click(function() {
            $("#top-section").removeClass('col-12');
            $("#top-section").addClass('col-9');

            $("#industriesSidebar").addClass('d-xl-block');

            $("#industriesSidebarOpenButton").removeClass('d-xl-block')
            $("#industriesSidebarOpenButton").addClass('d-none')

            $("#industriesSidebarCloseButton").addClass('d-xl-block');
        });

        $("#industriesSidebarCloseButton").click(function() {
            $("#top-section").removeClass('col-9');
            $("#top-section").addClass('col-12');

            $("#industriesSidebar").removeClass('d-xl-block');
            $("#industriesSidebar").addClass('d-none');

            $("#industriesSidebarCloseButton").removeClass('d-xl-block')
            $("#industriesSidebarCloseButton").addClass('d-none')

            $("#industriesSidebarOpenButton").addClass('d-xl-block');
        });
    }

}

export default App;