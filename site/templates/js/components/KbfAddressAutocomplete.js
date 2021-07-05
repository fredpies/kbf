import errors from "../modules/Errors";
import "bootstrap-autocomplete/dist/latest/bootstrap-autocomplete.min";
import config from "../config/config";

class KbfAddressAutocomplete extends EventTarget {

    constructor(selector, autocompleteConfig = {}, lang = 'pl') {

        super();

        this.$addressAutocomplete = $(selector);

        // Emituj wyjatek gdy nie podano selektora albo element nie zostal znaleziony
        if (!selector || this.$addressAutocomplete.length === 0) throw errors.elementNotFound(selector);

        let instance = this;

        this.lang = lang;
        this.currentAddressInfo = {}; // Aktualne dane o adresie

        this.config = {

            minLength: 6,
            requestThrottling: 250,
            noResultsText: this.lang === 'pl' ? 'Nie odneleziono adresu.' : '',

            // Ustawienia resolvera
            resolverSettings: {
            url: config.apiEndpoint + '/api/addresses/?',
                fail: function () {
            }
        },

            // Formatuj wyniki
            formatResult: function (item) {

                let city;
                let houseNumber;

                if (item.address.house_number) {
                    houseNumber = item.address.house_number.toUpperCase();
                } else houseNumber = '';

                if (item.address.town) city = item.address.town;
                if (item.address.city) city = item.address.city;

                // Aktualizuj dane o adresie
                instance.currentAddressInfo = {
                        lat: item.lat,
                        lon: item.lon,
                        address: item.address.road,
                        houseNumber,
                        city,
                        zip: item.address.postcode,
                };

                console.log(item);

                instance.emitAddressChange();

                return {
                    id: item.place_id,
                    text: item.address.road + ' ' + houseNumber,
                    html: `${item.address.road.toUpperCase() + ' ' + houseNumber}, <b>${city.toUpperCase()}</b>`
                }
            },

            events: {

                // Testuj query przed zapytaniem
                searchPre: function (query) {

                    query = query.replace(new RegExp("_+"), '');
                    let isQueryValid = new RegExp("[a-zA-ZńółęśźżŃÓŁĘŚŹŻ\\s-]+\\d+[a-zA-ZńółęśźżŃÓŁĘŚŹŻ\\s-]+").test(query);
                    if (isQueryValid ) return query;
                    else return false;

                },

                // Przygotuj wyniki
                searchPost: function (results) {

                    return Object.values(results).filter(function (result) {
                        return (result.address.city !== undefined || result.address.town !== undefined)
                    })

                },

            },

            ...autocompleteConfig
        }

        this.init();

    }

    init() {

        // Aliasy
        this.on = this.addEventListener;
        this.off = this.removeEventListener;
        this.emit = this.dispatchEvent;

        this.$addressAutocomplete.autoComplete(this.config);

    }

    addListeners() {

    }

    emitAddressChange() {

        let instance = this;

        setTimeout(function () {
            let $dropdownMenu = instance.$addressAutocomplete.next('.dropdown-menu');
            if ($dropdownMenu.length > 0)

                if ($dropdownMenu.is(':hidden')) {
                    instance.emit(new CustomEvent('address-change', { detail: instance.currentAddressInfo }))
                }

        }, 200);

    }
}

export default KbfAddressAutocomplete