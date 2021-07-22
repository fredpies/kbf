import KbfBackButton from "../../components/KbfBackButton";

class App {

    constructor() {
        this.init();
    }

    init() {
        let formData = new FormData();

        this.initBannerCropper(formData);
        this.initMobileBannerCropper(formData);

        $( "#add-banner" ).submit(function(event) {
            event.preventDefault();

            formData.append("banner_name", $("#banner_name").val());
            formData.append("banner_target_url", $("#banner_target_url").val());

            $.ajax({
                type: 'POST',
                url: '/kbf/api/add-banner/',
                data: formData,
                processData: false,
                contentType: false
            }).done(function(data) {
                console.log(data);
                window.location.href = location.protocol + '//' + location.host + location.pathname + "?action=banner-added";
            });

        });


        $(".banner-img-draggable").on('dragstart', function (event) {
            event.originalEvent.dataTransfer.setData("bannerId", event.target.id);
        });

        $("#bannerIndex").on("dragover", function(event) {
            event.preventDefault();
            event.stopPropagation();
        }).on("drop", function(event) {
            event.preventDefault();
            event.stopPropagation();

            let id = event.originalEvent.dataTransfer.getData("bannerId");
            window.location.href = location.protocol + '//' + location.host + "/kbf/panel/ustaw-baner/?id=" + id + "&type=INDEX";
        });

        $("#bannerIndustry").on("dragover", function(event) {
            event.preventDefault();
            event.stopPropagation();
        }).on("drop", function(event) {
            event.preventDefault();
            event.stopPropagation();

            let id = event.originalEvent.dataTransfer.getData("bannerId");
            window.location.href = location.protocol + '//' + location.host + "/kbf/panel/ustaw-baner/?id=" + id + "&type=INDUSTRY";
        });

        $("#bannerJob").on("dragover", function(event) {
            event.preventDefault();
            event.stopPropagation();
        }).on("drop", function(event) {
            event.preventDefault();
            event.stopPropagation();

            let id = event.originalEvent.dataTransfer.getData("bannerId");
            window.location.href = location.protocol + '//' + location.host + "/kbf/panel/ustaw-baner/?id=" + id + "&type=JOB";
        });
    }

    initBannerCropper(formData) {
        let $modal = $('#modal');
        let image = document.getElementById('sample_image');
        let cropper = null;

        $('#upload_image').change(function (event) {
            let files = event.target.files;

            let done = function (url) {
                image.src = url;
                $modal.modal('show');
            };

            if (files && files.length > 0) {
                let reader = new FileReader();
                reader.onload = function (event) {
                    done(reader.result);
                };
                reader.readAsDataURL(files[0]);
            }

            $('#upload_image').val('');
        });

        $modal.on('shown.bs.modal', function () {
            cropper = new Cropper(image, {
                aspectRatio: 1920 / 140,
                viewMode: 2,
                preview: '.preview',
                autoCropArea: 1,
                zoomable: false
            });
        }).on('hidden.bs.modal', function () {
            cropper.destroy();
            cropper = null;
        });

        $('#crop').click(function () {
            let canvas = cropper.getCroppedCanvas({
                width: 1920,
                height: 140
            });

            canvas.toBlob(function (blob) {
                let url = URL.createObjectURL(blob);
                let reader = new FileReader();
                reader.readAsDataURL(blob);
                reader.onloadend = function () {
                    let base64data = reader.result;
                    formData.append("banner_image", blob, "image.png");

                    $('#uploaded_image').attr('src', base64data);
                    $modal.modal('hide');
                };
            });
        });
    }

    initMobileBannerCropper(formData) {
        let $modalMobile = $('#modalMobile');
        let imageMobile = document.getElementById('sample_image_mobile');
        let cropperMobile = null;

        $('#upload_image_mobile').change(function(event) {
            let files = event.target.files;

            let done = function(url) {
                imageMobile.src = url;
                $modalMobile.modal('show');
            };

            if(files && files.length > 0) {
                let reader = new FileReader();
                reader.onload = function(event) {
                    done(reader.result);
                };
                reader.readAsDataURL(files[0]);
            }

            $('#upload_image_mobile').val('');
        });

        $modalMobile.on('shown.bs.modal', function() {
            cropperMobile = new Cropper(imageMobile, {
                aspectRatio: 600 / 140,
                viewMode: 2,
                preview:'.preview',
                autoCropArea: 1,
                zoomable: false
            });
        }).on('hidden.bs.modal', function() {
            cropperMobile.destroy();
            cropperMobile = null;
        });

        $('#cropMobile').click(function(){
            let canvas = cropperMobile.getCroppedCanvas({
                width: 600,
                height: 140
            });

            canvas.toBlob(function(blob) {
                let url = URL.createObjectURL(blob);
                let reader = new FileReader();
                reader.readAsDataURL(blob);
                reader.onloadend = function(){
                    let base64data = reader.result;
                    formData.append("banner_image_mobile", blob, "image-mobile.png");

                    $('#uploaded_image_mobile').attr('src', base64data);
                    $modalMobile.modal('hide');
                };
            });
        });
    }

    addListeners() {
    }

}

export default App;