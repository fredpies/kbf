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

                showCropperModal() {

                    let instance = this;
                    let cropper;
                    let files = this.$el.files;

                    let done = function(url) {
                        instance.$refs.sampleImage.src = url;
                        instance.$cropperModal.modal('show');
                    };

                    if(files && files.length > 0) {
                        let reader = new FileReader();
                        reader.onload = function(event) {
                            done(reader.result);
                        };
                        reader.readAsDataURL(files[0]);
                    }

                    this.$cropperModal.on('shown.bs.modal', function() {
                        cropper = new Cropper(instance.$refs.sampleImage, {
                            aspectRatio: 1,
                            viewMode: 2,
                            preview:'.preview'
                        });
                    }).on('hidden.bs.modal', function(){
                        cropper.destroy();
                        cropper = null;
                    });

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