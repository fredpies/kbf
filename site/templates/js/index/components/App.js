import KbfAreaSwitcher from "../../components/KbfAreaSwitcher";

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

        this.$footerTop = $('.footer-top');
        this.$showFooterTop = $('#showFooterTop');
        this.$topSection = $('#top-section');
        this.$industriesSidebar = $('#industriesSidebar');
        this.$industriesSidebarOpenButton = $('#industriesSidebarOpenButton');
        this.$industriesSidebarCloseButton = $("#industriesSidebarCloseButton");

    }

    addListeners() {

        let instance = this;

        // First section industries sub-menu opening and closing
        this.$industriesSidebarOpenButton.click(function () {
            instance.$topSection.removeClass('col-xl-12');
            instance.$topSection.addClass('col-xl-9');

            instance.$industriesSidebar.addClass('d-xl-block');

            instance.$industriesSidebarOpenButton.removeClass('d-xl-block')
            instance.$industriesSidebarOpenButton.addClass('d-none')

            instance.$industriesSidebarCloseButton.addClass('d-xl-block');
        });

        this.$industriesSidebarCloseButton.click(function () {
            instance.$topSection.removeClass('col-xl-9');
            instance.$topSection.addClass('col-xl-12');

            instance.$industriesSidebar.removeClass('d-xl-block');
            instance.$industriesSidebar.addClass('d-none');

            instance.$industriesSidebarCloseButton.removeClass('d-xl-block')
            instance.$industriesSidebarCloseButton.addClass('d-none')

            instance.$industriesSidebarOpenButton.addClass('d-xl-block');
        });

        this.$showFooterTop.click(function (e) {
            e.preventDefault();
            e.stopPropagation();
            instance.$footerTop.toggleClass('show-footer-top');
        });

        $(window).scroll(function () {
            instance.$footerTop.removeClass('show-footer-top');
        });

    }

}

export default App;