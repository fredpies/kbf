import KbfDropdown from "./KbfDropdown";
import {getIndustriesOptions, getIndustries, getSubIndustries } from "../functions/library";
import errors from "../modules/Errors";

class KbfIndustrySwitcher extends EventTarget {

    constructor(industriesId, subIndustriesId, firstOption = 'Wszystkie', ellipsis = true,  scrollBlock = true) {

        // Sprawdz czy podano argumenty
        if (!industriesId) throw errors.argumentNotFound(industriesId);
        if (!subIndustriesId) throw errors.argumentNotFound(subIndustriesId);

        super();

        this.firstOption = firstOption; // Pierwsza opcja
        this.scrollBlock = scrollBlock; // Czy blokowac scroll
        this.ellipsis = ellipsis; // Czy stosowac skroty

        // Aliasy
        this.on = this.addEventListener;
        this.off = this.removeEventListener;
        this.emit = this.dispatchEvent;

        let instance = this; // Ustaw kontekst

        this.industriesId = industriesId;
        this.subIndustriesId = subIndustriesId;

        this.industries = []; // Lista branz
        this.subIndustries = []; // Aktualna lista sub branz
        this.currentIndustry = this.firstOption; // Aktualnie wybrana branza
        this.currentSubIndustry = this.firstOption; // Aktualnie wybrana sub branza

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

            if (instance.currentIndustry !== instance.firstOption) {

                let subIndustriesResult = await getSubIndustries(instance.currentIndustry);
                instance.subIndustries = subIndustriesResult.sub_industries; // Pobierz liste sub-branz

                opts = { [instance.firstOption]: instance.firstOption, ...getIndustriesOptions(instance.subIndustries, instance.ellipsis) };
                instance.subIndustriesDropdown.updateOptions(opts);
                instance.currentSubIndustry = instance.firstOption;
            }

            if (instance.currentIndustry === instance.firstOption) {
                instance.subIndustriesDropdown.updateOptions([instance.firstOption]);
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
        let opts = { [instance.firstOption]: instance.firstOption, ...getIndustriesOptions(this.industries, this.ellipsis) };

        // Inicjuj dropdowny
        this.industriesDropdown = new KbfDropdown('#' + this.industriesId, opts, this.scrollBlock); // Inicjalizuj dropdown z nazwami branz
        this.subIndustriesDropdown = new KbfDropdown('#' + this.subIndustriesId, [this.firstOption], this.scrollBlock); // Inicjalizuj dropdown dla sub branz

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
        this.industriesDropdown.setActive(this.firstOption);
        this.subIndustries = [];
        this.subIndustriesDropdown.updateOptions([this.firstOption, ...this.subIndustries])
        this.subIndustriesDropdown.setActive(this.firstOption);

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