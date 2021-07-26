import config from "../config/config";

class KbfProductImagesEdit {

    constructor() {

        let $ = window.$;

        window.productImagesEdit = function () {

            return {

                images: [],
                imagesCount: 0,
                imgs: [],

                init() {

                    let instance = this;

                    this.productId = this.$el.dataset.id;
                    this.$confirmationModal = $('#confirmation');
                    this.$cropperModal = $(this.$refs.cropperModal);
                    this.cropper = undefined;
                    this.formData = new FormData();

                    this.$cropperModal.on('shown.bs.modal', function() {
                        instance.cropper = new Cropper(instance.$refs.sampleImage, {
                            aspectRatio: 1,
                            viewMode: 2,
                            preview:'.preview'
                        });
                    }).on('hidden.bs.modal', function(){
                        instance.cropper.destroy();
                        instance.cropper = null;
                    });

                    this.getImages();

                },

                updateImagesCount() {
                    this.imagesCount = this.images.length;
                },

                showModal() {
                    this.currentImageUrl = this.$el.dataset.imageSrc;
                    this.$currentImageItem = ($(this.$el).parent());
                    this.$confirmationModal.modal('show');
                },

                showCropperModal() {

                    let instance = this;
                    let files = this.$el.files;

                    let done = function(url) {
                        instance.$refs.sampleImage.src = url;
                        instance.$cropperModal.modal('show');
                    };

                    if(files && files.length > 0) {

                        this.currentFileName = files[0].name;

                        let reader = new FileReader();
                        reader.onload = function(event) {
                            done(reader.result);
                        };
                        reader.readAsDataURL(files[0]);
                    }

                    $(this.$el).val('');

                },

                cropImage() {

                    let instance = this;

                    let canvas = this.cropper.getCroppedCanvas({
                        width: 400,
                        height: 400
                    });

                    canvas.toBlob(function(blob) {
                        let reader = new FileReader();
                        reader.readAsDataURL(blob);
                        reader.onloadend = function(){

                            instance.imageData = reader.result;
                            instance.formData.append("product_image", blob, instance.currentFileName);
                            instance.formData.append("product_id", instance.productId)
                            instance.$cropperModal.modal('hide');

                            $.ajax({
                                type: 'POST',
                                url: config.apiEndpoint + 'api/update-product-images/',
                                data: instance.formData,
                                processData: false,
                                contentType: false
                            }).done(function() {
                                instance.getImages();
                            });
                        };
                    });
                },

                deleteImage() {

                    let instance = this;
                    this.$confirmationModal.modal('hide');

                    this.$currentImageItem.fadeOut(350, function () {
                        $.post( config.apiEndpoint + 'api/delete-image-from-product/',
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

                    $.get(config.apiEndpoint + 'api/get-product-images/?id=' + instance.productId)
                        .done(function (res) {
                            instance.images = res;
                            instance.$nextTick(function () {
                                instance.updateImagesCount();
                            });
                        });
                }
            }
        }
    }
}

export default KbfProductImagesEdit;