import KbfAreaSwitcher from "../../components/KbfAreaSwitcher";

class KbfMapPanel extends KbfAreaSwitcher {

    constructor() {

        super('provinces', 'areas');
        this.init(); // Inicjalizuj
        this.addListeners(); // Dodaj listenery

    }

    // Inicjalizuje
    init() {

        super.init();

        // Przycisk pokaz wszystko
        this.$showAll = $('.kbf-map-panel-show-all');

        // Przycisk pokaz cale wojewodztwo
        this.$showProvince = $('.kbf-map-panel-show-province');

    }

    addListeners() {

        super.addListeners();

        let instance = this; // Ustaw kontekst

        // Pokaz cala mape
        this.$showAll.on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            instance.resetDropdowns();
            instance.$showAll.hide();
            instance.emit(new CustomEvent('reset-map'));
        })

        // Pokaz wojewodztwo
        this.$showProvince.on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            instance.emit(new CustomEvent('show-province', { detail: instance.currentProvince }));
        })

    }

}

export default KbfMapPanel;