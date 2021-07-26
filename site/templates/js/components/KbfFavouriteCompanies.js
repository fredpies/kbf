import config from "../config/config";

class KbfFavouriteCompanies {

    constructor() {

        let $ = window.$;

        window.KbfFavouriteCompanies = function () {

            return {

                companyToDelete: undefined,
                elementToFadeOut: undefined,

                init() {

                    this.favouriteCompanies = JSON.parse(localStorage.getItem('favourite-companies'));
                    if (!this.favouriteCompanies) {
                        localStorage.setItem('favourite-companies', JSON.stringify([]));
                    }

                    this.$companiesCounter = $('.companies-counter span');

                },

                removeFromFavourites(e) {

                    let instance = this;

                    if (e.target.classList.contains('confirm-button')) {

                        let $modal = $('.modal')

                        $modal.on('hidden.bs.modal', function () {

                            $(instance.elementToFadeOut).fadeOut(400, function () {
                                let favoriteIndexToDelete = instance.favouriteCompanies.findIndex(function (favourite) {
                                    return favourite.company_id === instance.companyToDelete;
                                })

                                instance.favouriteCompanies.splice(favoriteIndexToDelete, 1);
                                localStorage.setItem('favourite-companies', JSON.stringify([ ...instance.favouriteCompanies ]));

                            });


                        })

                        $modal.modal('hide');
                        instance.$companiesCounter.html(Number(instance.$companiesCounter.html()) - 1);


                    }

                }


            };

        }

    }

}

export default KbfFavouriteCompanies;