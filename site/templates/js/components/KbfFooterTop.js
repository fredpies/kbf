class KbfFooterTop {

    constructor() {

        this.init();
        this.addListeners();
    }

    init() {

        this.$footerTop = $('.footer-top');
        this.$showFooterTop = $('#showFooterTop');

    }

    addListeners() {

        let instance = this;

        this.$showFooterTop.click(function (e) {
            e.preventDefault();
            e.stopPropagation();
            instance.$footerTop.toggleClass('show-footer-top');
        });

        this.$footerTop.click(function (e) {
            e.stopPropagation();
        })

        $(window).click(function () {
            instance.$footerTop.removeClass('show-footer-top');
        })

        $(window).scroll(function () {
            instance.$footerTop.removeClass('show-footer-top');
        });

    }

}

export default KbfFooterTop;