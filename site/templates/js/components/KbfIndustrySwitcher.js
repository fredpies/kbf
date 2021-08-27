import KbfDropdown from "./KbfDropdown";
import {getIndustriesOptions, getIndustries, getSubIndustries, getSubSubIndustries } from "../functions/library";
import errors from "../modules/Errors";

class KbfIndustrySwitcher extends EventTarget {

    constructor(industriesId, subIndustriesId, subSubIndustriesId, firstOption = 'Wszystkie', ellipsis = true,  scrollBlock = true) {

        // Sprawdz czy podano argumenty
        if (!industriesId) throw errors.argumentNotFound(industriesId);
        if (!subIndustriesId) throw errors.argumentNotFound(subIndustriesId);
        if (!subSubIndustriesId) throw errors.argumentNotFound(subSubIndustriesId);

        super();

        this.firstOption = firstOption; // Pierwsza opcja
        this.scrollBlock = scrollBlock; // Czy blokowac scroll

        // Aliasy
        this.on = this.addEventListener;
        this.off = this.removeEventListener;
        this.emit = this.dispatchEvent;

        let instance = this; // Ustaw kontekst

        this.industriesId = industriesId;
        this.subIndustriesId = subIndustriesId;
        this.subSubIndustriesId = subSubIndustriesId;

        this.industries = []; // Lista branz
        this.subIndustries = []; // Aktualna lista sub branz
        this.subSubIndustries = []; // Aktualna lista sub-sub branz
        this.currentIndustry = this.firstOption; // Aktualnie wybrana branza
        this.currentSubIndustry = this.firstOption; // Aktualnie wybrana sub branza
        this.currentSubSubIndustry = this.firstOption; // Aktualnie wybrana sub-sub branza

        // Inicjalizuj
        this.init().then(function () {
            instance.addListeners(); // Dodaj listenery
        });

    }

    // Dodaje listenery
    addListeners() {

        let instance = this;

        this.industriesDropdown.on('change', async function (e) {

            instance.currentIndustry = e.detail;

            if (instance.currentIndustry !== instance.firstOption) {

                let subIndustriesResult = await getSubIndustries(instance.currentIndustry);
                instance.subIndustries = subIndustriesResult.sub_industries; // Pobierz liste sub-branz

                let subIndustriesopts = { [instance.firstOption]: instance.firstOption, ...getIndustriesOptions(instance.subIndustries) };
                instance.subIndustriesDropdown.updateOptions(subIndustriesopts);

            }

            if (instance.currentIndustry === instance.firstOption) {
                instance.subIndustriesDropdown.updateOptions([instance.firstOption]);
            }

            instance.emitCurrentIndustries(); // Emituj aktualne ustawienie branz

        })

        this.subIndustriesDropdown.on('change', async function (e) {

            instance.currentSubIndustry = e.detail;

            if (instance.currentSubIndustry !== instance.firstOption) {

                let subSubIndustriesResult = await getSubSubIndustries(instance.currentSubIndustry);
                instance.subSubIndustries = subSubIndustriesResult.sub_sub_industries; // Pobierz liste sub-branz

                let subSubIndustriesopts = { [instance.firstOption]: instance.firstOption, ...getIndustriesOptions(instance.subSubIndustries) };
                instance.subSubIndustriesDropdown.updateOptions(subSubIndustriesopts);

            }

            if (instance.currentSubIndustry === instance.firstOption) {
                instance.subSubIndustriesDropdown.updateOptions([instance.firstOption]);
            }

            instance.emitCurrentIndustries(); // Emituj aktualne ustawienie branz

        })

        // this.subSubIndustriesDropdown.on('change', function (e) {
        //     instance.currentSubSubIndustry = e.detail;
        //     instance.emitCurrentIndustries(); // Emituj aktualne ustawienie branz
        // })

    }

    // Inicjalizuje
    async init() {

        let instance = this; // Ustaw kontekst
        let $ = window.$;

        // Pobierz nazwy branz z rest api a nastepnie inicjuj dropdown z nazwami branz
        this.industries = await getIndustries();

        // Przygotuj opcje dropdown branz jako obiekt opts
        let opts = { [instance.firstOption]: instance.firstOption, ...getIndustriesOptions(this.industries) };

        // Inicjuj dropdowny
        this.industriesDropdown = new KbfDropdown('#' + this.industriesId, opts, this.scrollBlock); // Inicjalizuj dropdown z nazwami branz
        this.subIndustriesDropdown = new KbfDropdown('#' + this.subIndustriesId, [this.firstOption], this.scrollBlock); // Inicjalizuj dropdown dla sub branz
        this.subSubIndustriesDropdown = new KbfDropdown('#' + this.subSubIndustriesId, [this.firstOption], this.scrollBlock); // Inicjalizuj dropdown dla sub branz


        // Ustaw responsywnosc dropdown'ow
        $(window).off('resize', instance.resetDropdowns);
        $(window).on('resize', instance.resetDropdowns.bind(instance));



    }

    // Emituje aktualne ustawienie branz
    emitCurrentIndustries() {
        let instance = this;
        this.emit(new CustomEvent('industries-changed', {
            detail: {industry: instance.currentIndustry, 'sub-industry': instance.currentSubIndustry, 'sub-sub-industry': instance.currentSubSubIndustry}
        }));
    }

    // Resetuje dropdown'y
    resetDropdowns() {
        this.industriesDropdown.setActive(this.firstOption);
        this.subIndustries = [];
        this.subsubIndustries = [];

        this.subIndustriesDropdown.updateOptions([this.firstOption, ...this.subIndustries])
        this.subIndustriesDropdown.setActive(this.firstOption);
        this.subSubIndustriesDropdown.updateOptions([this.firstOption, ...this.subIndustries])
        this.subSubIndustriesDropdown.setActive(this.firstOption);

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

        if (this.subSubIndustriesDropdown) {
            this.subSubIndustriesDropdown.destroy();
            this.subSubIndustriesDropdown = undefined;
        }

    }
}

export default KbfIndustrySwitcher;