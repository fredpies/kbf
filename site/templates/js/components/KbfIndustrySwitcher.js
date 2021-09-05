import KbfDropdown from "./KbfDropdown";
import {getIndustriesOptions, getIndustries, getSubIndustries, getSubSubIndustries} from "../functions/library";
import errors from "../modules/Errors";

class KbfIndustrySwitcher extends EventTarget {

    constructor(industriesId, subIndustriesId, subSubIndustriesId, firstOption = 'Wszystkie', ellipsis = true, scrollBlock = true) {

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

        this.industriesDropdownElement = document.getElementById(this.industriesId).querySelector('button');
        this.subIndustriesDropdownElement = document.getElementById(this.subIndustriesId).querySelector('button');
        this.subSubIndustriesDropdownElement = document.getElementById(this.subSubIndustriesId).querySelector('button');

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

    async fetchSubIndustries(currentIndustry) {
        const {sub_industries} = await getSubIndustries(currentIndustry);
        return sub_industries;
    }

    async fetchSubSubIndustries(currentSubIndustry) {
        const {sub_sub_industries} = await getSubSubIndustries(currentSubIndustry);
        return sub_sub_industries;
    }

    updateIndustryDropdowns() {

        if (this.currentIndustry === 'Wszystkie') {
            this.subIndustriesDropdownElement.setAttribute('disabled', 'disabled');
            this.subSubIndustriesDropdownElement.setAttribute('disabled', 'disabled');
        }

        if (this.currentIndustry !== 'Wszystkie') {
            this.subIndustriesDropdownElement.removeAttribute('disabled');
            if (this.currentSubIndustry !== 'Wszystkie') this.subSubIndustriesDropdownElement.removeAttribute('disabled');
            if (this.currentSubIndustry === 'Wszystkie') this.subSubIndustriesDropdownElement.setAttribute('disabled', 'disabled');
        }

    }

    // Dodaje listenery
    addListeners() {

        let instance = this;

        this.industriesDropdown.on('change', async function (e) {

            instance.currentIndustry = e.detail;
            instance.updateIndustryDropdowns();

            if (instance.currentIndustry !== instance.firstOption) {

                instance.subIndustries = await instance.fetchSubIndustries(instance.currentIndustry);
                let subIndustriesopts = {[instance.firstOption]: instance.firstOption, ...getIndustriesOptions(instance.subIndustries)};
                instance.subIndustriesDropdown.updateOptions(subIndustriesopts);

            }

            instance.subSubIndustriesDropdown.updateOptions([instance.firstOption]);

            if (instance.currentIndustry === instance.firstOption) {
                instance.subIndustriesDropdown.updateOptions([instance.firstOption]);
            }


            instance.emitCurrentIndustries(); // Emituj aktualne ustawienie branz

        })

        this.subIndustriesDropdown.on('change', async function (e) {

            instance.currentSubIndustry = e.detail;
            instance.updateIndustryDropdowns();

            if (instance.currentSubIndustry !== instance.firstOption) {

                instance.subSubIndustries = await instance.fetchSubSubIndustries(instance.currentSubIndustry);
                let subSubIndustriesopts = {[instance.firstOption]: instance.firstOption, ...getIndustriesOptions(instance.subSubIndustries)};
                instance.subSubIndustriesDropdown.updateOptions(subSubIndustriesopts);

            }

            if (instance.currentSubIndustry === instance.firstOption) {
                instance.subSubIndustriesDropdown.updateOptions([instance.firstOption]);
            }

            instance.emitCurrentIndustries(); // Emituj aktualne ustawienie branz

        })

        this.subSubIndustriesDropdown.on('change', function (e) {
            instance.currentSubSubIndustry = e.detail;
            instance.emitCurrentIndustries(); // Emituj aktualne ustawienie branz
        })

    }

    // Inicjalizuje
    async init() {

        let instance = this; // Ustaw kontekst
        let $ = window.$;

        // Pobierz nazwy branz z rest api a nastepnie inicjuj dropdown z nazwami branz
        this.industries = await getIndustries();

        // Przygotuj opcje dropdown

        let industriesOpts = {[instance.firstOption]: instance.firstOption, ...getIndustriesOptions(this.industries)};
        let subIndustriesOpts = [this.firstOption];
        let subSubIndustriesOpts = [this.firstOption];

        let industriesStartValue = $('#' + this.industriesId).data('start-value');
        let subIndustriesStartValue = $('#' + this.subIndustriesId).data('start-value');
        let subSubIndustriesStartValue = $('#' + this.subSubIndustriesId).data('start-value');

        // Ustaw domyslne stany dla sub i sub-sub branz
        if (!subIndustriesStartValue) {
            this.subIndustriesDropdownElement.setAttribute('disabled', 'disabled')
            this.subSubIndustriesDropdownElement.setAttribute('disabled', 'disabled');
        }

        if (industriesStartValue) {

            this.subIndustriesDropdownElement.removeAttribute('disabled', 'disabled')

            this.currentIndustry = industriesStartValue.toLowerCase().substr(0, 1).toUpperCase() + industriesStartValue.substr(1);
            this.subIndustries = await this.fetchSubIndustries(this.currentIndustry.toUpperCase());
            subIndustriesOpts = {[instance.firstOption]: instance.firstOption, ...getIndustriesOptions(this.subIndustries)};

        }

        if (subIndustriesStartValue) {
            this.currentSubIndustry = subIndustriesStartValue;
            this.subSubIndustries = await this.fetchSubSubIndustries(this.currentSubIndustry)
        }

        if (subSubIndustriesStartValue) {
            this.currentSubSubIndustry = subSubIndustriesStartValue;
            subSubIndustriesOpts = {[instance.firstOption]: instance.firstOption, ...getIndustriesOptions(this.subSubIndustries)};
        }

        // Inicjuj dropdowny
        this.industriesDropdown = new KbfDropdown('#' + this.industriesId, industriesOpts, this.scrollBlock); // Inicjalizuj dropdown z nazwami branz
        this.subIndustriesDropdown = new KbfDropdown('#' + this.subIndustriesId, subIndustriesOpts, this.scrollBlock); // Inicjalizuj dropdown dla sub branz
        this.subSubIndustriesDropdown = new KbfDropdown('#' + this.subSubIndustriesId, subSubIndustriesOpts, this.scrollBlock); // Inicjalizuj dropdown dla sub branz

        // Ustaw responsywnosc dropdown'ow
        $(window).off('resize', instance.resetDropdowns);
        $(window).on('resize', instance.resetDropdowns.bind(instance));


    }

    // Emituje aktualne ustawienie branz
    emitCurrentIndustries() {
        let instance = this;
        this.emit(new CustomEvent('industries-changed', {
            detail: {
                industry: instance.currentIndustry,
                'sub-industry': instance.currentSubIndustry,
                'sub-sub-industry': instance.currentSubSubIndustry
            }
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