import config from "../config/config";

class KbfProductImagesAdd {

    constructor() {

        let $ = window.$;

        window.productImagesAdd = function () {

            return {

                images: [],
                imagesCount: 0,
                imgs: [],

                init() {

                    let instance = this;

                    window.imageNames = [];

                    this.productId = this.$el.dataset.id;
                    this.$confirmationModal = $('#confirmation');
                    this.$cropperModal = $(this.$refs.cropperModal);
                    this.cropper = undefined;
                    this.formData = new FormData();

                    this.$cropperModal.on('shown.bs.modal', function () {
                        instance.cropper = new Cropper(instance.$refs.sampleImage, {
                            aspectRatio: 1,
                            viewMode: 3,
                            zoom: 0.8
                        });
                    }).on('hidden.bs.modal', function () {
                        instance.cropper.destroy();
                        instance.cropper = null;
                    });

                },

                showModal() {

                    this.currentImageUrl = this.$el.dataset.imageSrc;
                    this.$currentImageItem = ($(this.$el).parent());
                    this.$confirmationModal.modal('show');

                    this.currentIdx = this.$el.parentElement.dataset.idx;
                    this.currentImageName = this.$el.parentElement.dataset.imageFileName;

                },

                showCropperModal() {

                    let instance = this;
                    let files = this.$el.files;

                    let done = function (url) {
                        instance.$refs.sampleImage.src = url;
                        instance.$cropperModal.modal('show');
                    };

                    if (files && files.length > 0) {

                        this.currentFileName = files[0].name;

                        let reader = new FileReader();
                        reader.onload = function (event) {
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

                    if (canvas) {
                        canvas.toBlob(function (blob) {
                            let reader = new FileReader();

                            reader.readAsDataURL(blob);
                            instance.images.push({
                                imageSrc: URL.createObjectURL(blob),
                                imageName: instance.currentFileName
                            });

                            reader.onloadend = function () {

                                instance.imageData = reader.result;
                                instance.formData.append("product_image", blob, instance.currentFileName);
                                instance.$cropperModal.modal('hide');

                                $.ajax({
                                    type: 'POST',
                                    url: config.apiEndpoint + 'api/upload-image/',
                                    data: instance.formData,
                                    processData: false,
                                    contentType: false
                                }).done(function () {
                                    window.imageNames.push(instance.currentFileName);
                                });


                            };
                        });
                    }


                },

                deleteImage() {

                    let instance = this;
                    this.$confirmationModal.modal('hide');
                    this.images.splice(this.currentIdx, 1);
                    window.imageNames.splice(this.currentIdx, 1);

                    this.$currentImageItem.fadeOut(350, function () {
                        $.post(config.apiEndpoint + 'api/delete-image/',
                            {
                                imageName: instance.currentImageName,
                            }
                        ).done(function () {
                        })
                    });

                },

            }

        }

    }
}

export default KbfProductImagesAdd;