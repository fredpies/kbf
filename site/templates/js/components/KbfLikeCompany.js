import config from "../config/config";

class KbfLikeCompany {

    constructor() {

        let $ = window.$;

        window.KbfLikeCompany = function () {

            return {

                disabled: false,
                currentFavouriteCompanies: [],

                init() {

                    let favouriteCompanies = localStorage.getItem('favourite-companies');
                    if (favouriteCompanies) this.currentFavouriteCompanies = [...JSON.parse(favouriteCompanies)];

                    let ids = this.currentFavouriteCompanies.map(function (companyData) {
                        return companyData.company_id;
                    });

                    if (ids.indexOf(Number(this.$refs.anchor.dataset.companyId)) >= 0) {
                        this.disabled = true;
                        $(this.$refs.anchor).tooltip('hide');
                        $(this.$refs.anchor).tooltip('disable');
                    }

                },

                capitalize(string) {
                  return string.trim().split(' ').map(function(word) {
                      return word.charAt(0).toUpperCase() + word.slice(1);
                  }).join(' ').split('-').map(function(word) {
                      return word.charAt(0).toUpperCase() + word.slice(1);
                  }).join('-');
                },

                addToFavourites(e) {

                    let instance = this;

                    if (!this.disabled) {
                        $.get(`http://localhost/kbf2/api/get-company/?company_id=${e.target.parentElement.dataset.companyId}`)
                            .done(function (res) {

                                let favouriteCompanies = localStorage.getItem('favourite-companies');
                                if (favouriteCompanies) instance.currentFavouriteCompanies = [...JSON.parse(favouriteCompanies)];

                                instance.currentFavouriteCompanies.push({
                                    company_id: res.company_id,
                                    company_url: location.protocol + '//' + location.hostname + res.company_url,
                                    company_logo_url: location.protocol + '//' + location.hostname + res.company_logo_url,
                                    company_name: instance.capitalize(res.company_name.toLowerCase()),
                                    company_address: instance.capitalize(res.company_address.toLowerCase()),
                                    company_zip: res.company_zip,
                                    company_city: res.company_city.charAt(0) + res.company_city.slice(1).toLowerCase(),
                                    company_phone_1: res.company_phone_1.replace('0-', ''),
                                    company_phone_2: res.company_phone_2.replace('0-', ''),
                                    company_fax: res.company_fax.replace('0-', '')
                                })

                                localStorage.setItem('favourite-companies', JSON.stringify(instance.currentFavouriteCompanies));

                                instance.disabled = true;
                                $(e.target.parentElement).tooltip('hide');
                                $(e.target.parentElement).tooltip('disable');

                            })
                    }

                }
            }

        };

    }

}

export default KbfLikeCompany;