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

    }


    addListeners() {}

}

export default App;