import config from "../config/config";

class KbfProductImagesEdit {

    constructor() {

        let $ = window.$;

        window.productImagesEdit = function () {

            return {

                images: [],
                imgs: [],

                init() {

                    let instance = this;

                    this.productId = this.$el.dataset.id;
                    this.$confirmationModal = $('#confirmation');
                    this.$cropperModal = $(this.$refs.cropperModal);

                    this.getImages();


                },

                showModal() {
                    this.currentImageUrl = this.$el.dataset.imageSrc;
                    this.$currentImageItem = ($(this.$el).parent());
                    this.$confirmationModal.modal('show');
                },

                deleteImage() {

                    let instance = this;
                    this.$confirmationModal.modal('hide');
                    console.log('deleted');

                    this.$currentImageItem.fadeOut(350, function () {
                        $.post('http://localhost/kbf2/api/delete-image-from-product/',
                            {
                                image_url: instance.currentImageUrl,
                                page_id: instance.productId
                            }
                            ).done(function () {
                            instance.getImages();
                        })
                    });
                },

                getImages() {

                    let instance = this;

                    $.get('http://localhost/kbf2/api/get-product-images/?id=' + instance.productId)
                        .done(function (res) {
                            instance.images = res;
                            instance.$nextTick(function () {
                                // console.log($(instance.$el).find('.product-image').eq(0).attr('src'));

                            });

                        })
                }

            }

        }

    }
}

export default KbfProductImagesEdit;