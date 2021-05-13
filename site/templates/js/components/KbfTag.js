import errors from "../modules/Errors";
import PerfectScrollbar from 'perfect-scrollbar';

class KbfTag extends EventTarget {

    constructor(selector) {

        super();

        let $ = window.$;

        // Sprawdz czy podano argumenty
        if (!selector) throw errors.argumentNotFound("Selector");
        this.$kbfFilterBadges = $(selector);
        if(this.$kbfFilterBadges.length === 0) throw errors.elementNotFound(selector);

        this.numberOfChecked = 0; // Zaznaczone checkboxy

        this.init();
        this.addListeners();
    }

    init() {

        let $ = window.$;
        let instance = this;

        // Aliasy
        this.on = this.addEventListener;
        this.off = this.removeEventListener;
        this.emit = this.dispatchEvent;

        this.$checkedCheckboxes = $(':checked');
        this.numberOfChecked = this.$checkedCheckboxes.length;

        this.checkBadges(); // Usuwa kontener jezeli jest pusty
        this.initScrollBar(); // Inicjalizuj scrollbar

        // Dodaj badge na podstawie stanu checkboxow
        this.$checkedCheckboxes.each(function () {
            instance.addBadge(this.value);

        })

        this.$refreshFilterLink = $('.kbf-badge-filter-actions-refresh');
        this.$resetFilterLink = $('.kbf-badge-filter-actions-reset');

    }


    initScrollBar() {

        let instance = this;

        if (this.scrollbar) this.scrollbar.destroy();

        // Inicjuj scrollbar
        this.scrollbar = new PerfectScrollbar(instance.$kbfFilterBadges[0], {
            minScrollbarLength: 20
        });

    }

    // Dodaje badge do listy
    addBadge(badgeName) {

        let $ = window.$;
        let instance = this;

        this.numberOfChecked = ++this.numberOfChecked;
        this.checkBadges();

        let $newBadge = $(KbfTag.badgeMarkup.replaceAll('{content}', badgeName));
        let $newBadgeClose = $newBadge.find('.badge-close')

        // Usuwa badge po kliknieciu
        $newBadgeClose.on('click', function () {
            let $this = $(this);
            let badgeName = $this.closest('.company-industry').data().name;

            instance.removeBadge(badgeName);
            instance.checkBadges();

        })

        this.$kbfFilterBadges.append($newBadge);
        this.scrollbar.update();

    }


    // Usuwa badge z listy
    removeBadge(badgeName) {

        let $ = window.$;
        let instance = this;

        let $currentBadges = this.$kbfFilterBadges.find('.company-industry');
        $currentBadges.each(function () {
            let $this = $(this);
            let badgeDataName = $this.data().name;
            if(badgeName === badgeDataName) {
                $this.fadeOut(350, function () {
                    $this.remove();
                    instance.numberOfChecked = --instance.numberOfChecked;
                    instance.checkBadges();

                    let eventData = {
                        name: badgeName,
                    };

                    instance.emit(new CustomEvent('badge-remove', { detail: eventData }));


                });
            }
        })

        this.scrollbar.update();

    }

    // Ukrywa kontener jezeli jest pusty
    checkBadges() {

        if (this.numberOfChecked === 0) this.$kbfFilterBadges.parent().css('opacity', 0);
        else this.$kbfFilterBadges.parent().css('opacity', 1);
    }

    addListeners() {

        let instance = this;

        // Odswierza filtr
        this.$refreshFilterLink.on('click', function (e) {
            instance.emit(new CustomEvent('refresh-filter'));
        })

        // Resetuje filtr
        this.$resetFilterLink.on('click', function (e) {

            instance.numberOfChecked = 0;
            instance.checkBadges();
            instance.emit(new CustomEvent('reset-filter'));
        })
    }
}

KbfTag.badgeMarkup = '<span data-name="{content}" class="company-industry badge badge-pill badge-secondary mb-1 mt-1"><span class="badge-name">{content}</span><span class="badge-close">x</span></span>';

export default KbfTag;