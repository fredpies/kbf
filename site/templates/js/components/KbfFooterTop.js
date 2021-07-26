class KbfFooterTop {

    constructor() {

        this.init();
        this.addListeners();
    }

    init() {

        this.$footerBottom = $('.footer-bottom');
        this.$footerTop = $('.footer-top');
        this.$footerTop.css('transform', 'translateY(100%)')
        this.$showFooterTop = $('#showFooterTop');


    }

    addListeners() {

        let instance = this;

        this.$showFooterTop.click(function (e) {
            e.preventDefault();
            e.stopPropagation();

            let $industriesSidebar = $('#industriesSidebar');
            if ($industriesSidebar.length > 0) $industriesSidebar.removeClass('show');

            instance.isSmall = window.innerWidth <= 1026;

            instance.$footerTop.toggleClass('show-footer-top');
            if (instance.$footerTop.hasClass('show-footer-top')) instance.$footerTop.css('transform', `translateY(-${parseInt(getComputedStyle($('.footer-bottom')[0]).height) + (instance.isSmall ? 16 : 0)}px)`)
            else instance.$footerTop.css('transform', 'translateY(100%)');

        });

        this.$footerTop.click(function (e) {
            e.stopPropagation();
        })

        $(window).click(function () {
            instance.$footerTop.css('transform', 'translateY(100%)');
            instance.$footerTop.removeClass('show-footer-top');
        })

        $(window).scroll(function () {
            instance.$footerTop.css('transform', 'translateY(100%)');
            instance.$footerTop.removeClass('show-footer-top');
        });

        $(window).resize(function () {
            instance.$footerTop.css('transform', 'translateY(100%)');
            instance.$footerTop.removeClass('show-footer-top');
        });

    }

}

export default KbfFooterTop;