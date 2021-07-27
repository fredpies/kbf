import KbfAreaSwitcher from "../../components/KbfAreaSwitcher";
import KbfFooterTop from "../../components/KbfFooterTop";
import PerfectScrollbar from 'perfect-scrollbar';
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

        this.$industriesSidebar = $('#industriesSidebar');
        this.$industriesSidebarButton = $('#industriesSidebarButton');
        this.$kbfSearch = $('.kbf-search');
        this.$form = $('form');

        this.adjustHeight();
        new KbfPreloaderButton('.kbf-search');

    }

    addListeners() {

        let instance = this;

        this.$industriesSidebar.click(function (e) {
            e.stopPropagation();
        });

        // First section industries sub-menu opening and closing
        this.$industriesSidebarButton.click(function (e) {
            e.stopPropagation();
            $('.footer-top').removeClass('show-footer-top');
            instance.$industriesSidebar.toggleClass('show');

            instance.scrollbar = new PerfectScrollbar(instance.$industriesSidebar[0], {
                minScrollbarLength: 20,
                suppressScrollX: true
            });

        });

        $(window).click(function () {
            instance.$industriesSidebar.removeClass('show');
            if (instance.scrollbar) instance.scrollbar.destroy();
        })

        $(window).on('resize', this.adjustHeight);

        this.$kbfSearch.on('click', function () {
            instance.$form.submit();
        })
    }

    adjustHeight() {

        this.$topSection = $('#top-section');
        this.$navikHeader = $('.navik-header');
        this.$banner = $('.kbf-banner-index');
        this.$footerBottom = $('.footer-bottom');
        this.$phoneImageContainer = $('.home-phone-image-container');

        if (window.innerWidth >= 1200) {

            this.headerHeight = parseInt(getComputedStyle(this.$navikHeader[0]).height);
            this.bannerHeight = parseInt(getComputedStyle(this.$banner[0]).height);
            this.footerBottomHeight = parseInt(getComputedStyle(this.$footerBottom[0]).height);

            this.containerHeight = window.innerHeight - (this.headerHeight + this.bannerHeight + this.footerBottomHeight);
            this.$topSection.css('height', this.containerHeight);
            this.$industriesSidebar.css('height', this.containerHeight);
            this.$phoneImageContainer.css('height', this.containerHeight);

        } else {
            this.$topSection.css('height', 'auto');
            this.$industriesSidebar.css('height', 'auto');
            this.$phoneImageContainer.css('height', 'auto');
        }





    }

}

export default App;