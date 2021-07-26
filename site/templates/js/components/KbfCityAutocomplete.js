import errors from "../modules/Errors";
import "bootstrap-autocomplete/dist/latest/bootstrap-autocomplete.min";
import config from "../config/config";

class KbfAddressAutocomplete extends EventTarget {

    constructor(selector, autocompleteConfig = {}, lang = 'pl') {

        super();

        this.$cityAutocomplete = $(selector);

        // Emituj wyjatek gdy nie podano selektora albo element nie zostal znaleziony
        if (!selector || this.$cityAutocomplete.length === 0) throw errors.elementNotFound(selector);

        let instance = this;

        this.lang = lang;
        this.currentCityInfo = {}; // Aktualne dane o miescie

        this.config = {

            minLength: 3,
            requestThrottling: 250,
            noResultsText: this.lang === 'pl' ? 'Nie odneleziono miasta.' : '',

            // Ustawienia resolvera
            resolverSettings: {
            url: config.apiEndpoint + '/api/addresses/?',
                fail: function () {
            }
        },

            // Formatuj wyniki
            formatResult: function (item) {

                // Aktualizuj dane o miescie
                instance.currentCityInfo = {
                        city: item.city,
                        provinceName: item.provinceName
                };

                instance.emitCityChange();
                
                return {
                    id: item.placeId,
                    text: item.city,
                    html: item.displayName
                }
            },

            events: {

                // Testuj query przed zapytaniem
                searchPre: function (query) {

                    query = query.replace(new RegExp("_+"), '');
                    let isQueryValid = new RegExp("[-a-zA-ZńółęśźżŃÓŁĘŚŹŻ\s]+").test(query);
                    if (isQueryValid) return query;
                    else return false;

                },

                // Przygotuj wyniki
                searchPost: function (results) {


                    let _results = Object.values(results).filter(function (result) {
                        return result.address.country_code === 'pl' && result.address.state !== undefined && (result.address.city !== undefined || result.address.town !== undefined)
                    }).map(function (result) {
                        return {
                            placeId: result.place_id,
                            displayName: result.display_name,
                            city: result.address.city || result.address.town,
                            provinceName: result.address.state.split(' ')[1]
                        }
                    })

                    _results = [ ...(new Set(_results)) ];

                    return _results;

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

        this.$cityAutocomplete.autoComplete(this.config);

    }

    addListeners() {

    }

    emitCityChange() {

        let instance = this;

        setTimeout(function () {
            let $dropdownMenu = instance.$cityAutocomplete.next('.dropdown-menu');
            if ($dropdownMenu.length > 0)

                if ($dropdownMenu.is(':hidden')) {
                    instance.emit(new CustomEvent('city-change', { detail: instance.currentCityInfo }))
                }

        }, 500);

    }
}

export default KbfAddressAutocomplete