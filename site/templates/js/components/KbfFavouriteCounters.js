import config from "../config/config";

class KbfFavouriteCounters {

    constructor() {

        let $ = window.$;

        window.favouriteCompaniesCount = function () {

            return {

                counterValue: 0,
                init() {

                    this.favouriteCompanies = JSON.parse(localStorage.getItem('favourite-companies'));

                    if (!this.favouriteCompanies) {
                        localStorage.setItem('favourite-companies', JSON.stringify([]));
                    }

                    this.counterValue = this.favouriteCompanies.length;

                }

            };

        }
        window.favouriteProductsCount = function () {

            return {

                counterValue: 0,
                init() {

                    this.favouriteProducts = JSON.parse(localStorage.getItem('favourite-products'));

                    if (!this.favouriteProducts) {
                        localStorage.setItem('favourite-products', JSON.stringify([]));
                    }

                    this.counterValue = this.favouriteProducts.length;

                }


            };

        }

    }

}

export default KbfFavouriteCounters;