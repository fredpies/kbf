import config from "../config/config";

class KbfFavouriteProducts {

    constructor() {

        let $ = window.$;

        window.KbfFavouriteProducts = function () {

            return {

                companyToDelete: undefined,
                elementToFadeOut: undefined,

                init() {

                    this.favouriteProducts = JSON.parse(localStorage.getItem('favourite-products'));
                    if (!this.favouriteProducts) {
                        localStorage.setItem('favourite-products', JSON.stringify([]));
                    }

                    this.$productsCounter = $('.products-counter span');

                },

                removeFromFavourites(e) {

                    let instance = this;

                    if (e.target.classList.contains('confirm-button')) {

                        let $modal = $('.modal')

                        $modal.unbind().on('hidden.bs.modal', function () {

                            $(instance.elementToFadeOut).fadeOut(400, function () {
                                let favoriteIndexToDelete = instance.favouriteProducts.findIndex(function (favourite) {
                                    return favourite.product_id === instance.companyToDelete;
                                })

                                instance.favouriteProducts.splice(favoriteIndexToDelete, 1);
                                localStorage.setItem('favourite-products', JSON.stringify([ ...instance.favouriteProducts ]));

                            });


                        })

                        $modal.modal('hide');
                        instance.$productsCounter.html(Number(instance.$productsCounter.html()) - 1);


                    }

                }


            };

        }

    }

}

export default KbfFavouriteProducts;