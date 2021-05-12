import KbfDropdown from "./KbfDropdown";
import {getIndustriesOptions, getIndustries, getSubIndustries } from "../functions/library";
import errors from "../modules/Errors";

class KbfIndustrySwitcher extends EventTarget {

    constructor(industriesId, subIndustriesId) {

        // Sprawdz czy podano argumenty
        if (!industriesId) throw errors.argumentNotFound(industriesId);
        if (!subIndustriesId) throw errors.argumentNotFound(subIndustriesId);

        super();

        // Aliasy
        this.on = this.addEventListener;
        this.off = this.removeEventListener;
        this.emit = this.dispatchEvent;

        let instance = this; // Ustaw kontekst

        this.industriesId = industriesId;
        this.subIndustriesId = subIndustriesId;

        this.industries = []; // Lista branz
        this.subIndustries = []; // Aktualna lista sub branz
        this.currentIndustry = 'Wszystkie'; // Aktualnie wybrana branza
        this.currentSubIndustry = 'Wszystkie'; // Aktualnie wybrana sub branza

        // Inicjalizuj
        this.init().then(function () {
            instance.addListeners(); // Dodaj listenery
        });

    }

    // Dodaje listenery
    addListeners() {

        let instance = this;

        this.industriesDropdown.on('change', async function (e) {

            let opts;

            instance.currentIndustry = e.detail;

            if (instance.currentIndustry !== 'Wszystkie') {

                let subIndustriesResult = await getSubIndustries(instance.currentIndustry);
                instance.subIndustries = subIndustriesResult.sub_industries; // Pobierz liste sub-branz

                opts = { Wszystkie: 'Wszystkie', ...getIndustriesOptions(instance.subIndustries) };
                instance.subIndustriesDropdown.updateOptions(opts);
                instance.currentSubIndustry = 'Wszystkie';
            }

            if (instance.currentIndustry === 'Wszystkie') {
                instance.subIndustriesDropdown.updateOptions(['Wszystkie']);
            }

            instance.emitCurrentIndustries(); // Emituj aktualne ustawienie branz

        })

        this.subIndustriesDropdown.on('change', function (e) {
            instance.currentSubIndustry = e.detail;
            instance.emitCurrentIndustries(); // Emituj aktualne ustawienie branz
        })

    }

    // Inicjalizuje
    async init() {

        let instance = this; // Ustaw kontekst
        let $ = window.$;

        // Pobierz nazwy branz z rest api a nastepnie inicjuj dropdown z nazwami branz
        this.industries = await getIndustries();

        // Przygotuj opcje dropdown branz jako obiekt opts
        let opts = { Wszystkie: 'Wszystkie', ...getIndustriesOptions(this.industries) };

        // Inicjuj dropdowny
        this.industriesDropdown = new KbfDropdown('#' + this.industriesId, opts); // Inicjalizuj dropdown z nazwami branz
        this.subIndustriesDropdown = new KbfDropdown('#' + this.subIndustriesId, ['Wszystkie']); // Inicjalizuj dropdown dla sub branz

        // Ustaw responsywnosc dropdown'ow
        $(window).off('resize', instance.resetDropdowns);
        $(window).on('resize', instance.resetDropdowns.bind(instance));

    }

    // Emituje aktualne ustawienie branz
    emitCurrentIndustries() {
        let instance = this;
        this.emit(new CustomEvent('industries-changed', {
            detail: {industry: instance.currentIndustry, 'sub-industry': instance.currentSubIndustry}
        }));
    }

    // Resetuje dropdown'y
    resetDropdowns() {
        this.industriesDropdown.setActive('Wszystkie');
        this.subIndustries = [];
        this.subIndustriesDropdown.updateOptions(['Wszystkie', ...this.subIndustries])
        this.subIndustriesDropdown.setActive('Wszystkie');

    }

    // Usuwa komponent
    destroy() {
        if (this.industriesDropdown) {
            this.industriesDropdown.destroy();
            this.industriesDropdown = undefined;
        }

        if (this.subIndustriesDropdown) {
            this.subIndustriesDropdown.destroy();
            this.subIndustriesDropdown = undefined;
        }

    }
}

export default KbfIndustrySwitcher;