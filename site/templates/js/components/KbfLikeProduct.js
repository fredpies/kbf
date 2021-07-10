import config from "../config/config";

class KbfLikeProduct {

    constructor() {

        let $ = window.$;

        window.KbfLikeProduct = function () {

            return {

                disabled: false,
                currentFavouriteProducts: [],

                init() {

                    let favouriteProducts = localStorage.getItem('favourite-products');
                    if (favouriteProducts) this.currentFavouriteProducts = [...JSON.parse(favouriteProducts)];

                    let ids = this.currentFavouriteProducts.map(function (productData) {
                        return productData.product_id;
                    });

                    if (ids.indexOf(Number(this.$refs.anchor.dataset.productId)) >= 0) {
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
                        $.get(`${config.apiEndpoint}api/get-product/?product_id=${e.target.parentElement.dataset.productId}`)
                            .done(function (res) {

                                let favouriteProducts = localStorage.getItem('favourite-products');
                                if (favouriteProducts) instance.currentFavouriteProducts = [...JSON.parse(favouriteProducts)];

                                instance.currentFavouriteProducts.push({

                                    product_id: res.product_id,
                                    product_url: location.protocol + '//' + location.hostname + res.product_url,
                                    product_first_image_url: location.protocol + '//' + location.hostname + res.product_first_image_url,
                                    product_name: res.product_name,
                                    product_description: res.product_description,
                                    product_price: res.product_price

                                })

                                localStorage.setItem('favourite-products', JSON.stringify(instance.currentFavouriteProducts));

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

export default KbfLikeProduct;