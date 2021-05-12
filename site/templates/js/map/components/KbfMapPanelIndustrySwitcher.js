import KbfIndustrySwitcher from "../../components/KbfIndustrySwitcher";
import errors from "../../modules/Errors";

class KbfMapPanelIndustrySwitcher extends KbfIndustrySwitcher {

    constructor(selector) {

        let $ = window.$;

        // Sprawdz poprawnosc argumentow
        if (selector === undefined) throw errors.argumentNotFound('selector');
        let $panel = $(selector);
        if ($panel.length === 0) throw errors.elementNotFound(selector);

        super('industries', 'sub-industries');

        this.$panel = $panel;
        this.$currentAreaInfo = $('.kbf-current-area');

    }

    // Ukrywa panel
    hidePanel() {
        if (!this.$panel.hasClass('d-none')) {
            this.resetDropdowns();
            this.$panel.addClass('d-none');
        }
    }

    // Pokazuje panel
    showPanel() {
        if (this.$panel.hasClass('d-none')) this.$panel.removeClass('d-none');
    }


}

export default KbfMapPanelIndustrySwitcher;