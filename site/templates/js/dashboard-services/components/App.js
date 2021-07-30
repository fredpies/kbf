import Alpine from "alpinejs";
import KbfBackButton from "../../components/KbfBackButton";
import KbfFooterTop from "../../components/KbfFooterTop";
import KbfForm from "../../components/KbfForm";
import KbfWysiwyg from "../../components/KbfWysiwyg";

class App {

    constructor() {
        this.init();
        this.addListeners();
    }

    init() {

        let instance = this;

        this.$deleteButtons = $('a[data-id]');
        this.$serviceIdField = $('input[name="service_id"]');
        this.$uploadImageError = $('#upload-error');

        this.isPhone = window.innerWidth <= 480;
        this.isUploadImageValid = false;

        this.$form = $( this.isPhone ? '#add-service-phone' : '#add-service');

        // Wysiwyg
        this.$descriptionFieldHidden = $('[name="service_description_hidden"]');
        this.wysiwyg = new KbfWysiwyg(this.isPhone ? '.service-description-phone .wysiwyg' : '.service-description-desktop .wysiwyg');

        // Form validator
        this.form = new KbfForm({formName:  this.isPhone ? 'add-service-phone' : 'add-service'}, 'pl');

        let $modal = $('#modal');
        let image = document.getElementById('sample_image');
        let cropper = null;
        let formData = new FormData();

        $('#upload_image').change(function(event) {
            let files = event.target.files;

            let done = function(url) {
                image.src = url;
                $modal.modal('show');
            };

            if(files && files.length > 0) {
                let reader = new FileReader();
                reader.onload = function(event) {
                    done(reader.result);
                };
                reader.readAsDataURL(files[0]);
            }

            $('#upload_image').val('');
        });

        $modal.on('shown.bs.modal', function() {
            cropper = new Cropper(image, {
                aspectRatio: 1,
                viewMode: 2,
                preview:'.preview'
            });
        }).on('hidden.bs.modal', function() {
            cropper.destroy();
            cropper = null;
        });

        $('#crop').click(function(){
            let canvas = cropper.getCroppedCanvas({
                width: 400,
                height: 400
            });

            canvas.toBlob(function(blob) {
                let url = URL.createObjectURL(blob);
                let reader = new FileReader();
                reader.readAsDataURL(blob);
                reader.onloadend = function(){
                    let base64data = reader.result;
                    formData.append("service_image", blob, "image.png");

                    this.isUploadImageValid = true;

                    $('#uploaded_image').attr('src', base64data);
                    $modal.modal('hide');
                };
            });
        });

        this.$form.submit(function(event) {

            event.preventDefault();

            instance.form.validate();

            console.log(instance.isUploadImageValid)

            if (!instance.isUploadImageValid) {
                instance.$uploadImageError.removeClass('d-none');
                instance.$uploadImageError[0].removeAttribute('style');
            }
            else {

                if (!instance.$uploadImageError.hasClass('d-none')) instance.$uploadImageError.addClass('d-none');
            }

            console.log(instance.form.formIsValid)


            // formData.append("service_name", $("#service_name").val());
            // formData.append("service_price", $("#service_price").val());
            // formData.append("service_description", $("#service_description").val());
            //
            // $.ajax({
            //     type: 'POST',
            //     url: 'http://localhost/kbf2/api/add-service/',
            //     data: formData,
            //     processData: false,
            //     contentType: false
            // }).done(function(data) {
            //     console.log(data);
            //     window.location.href = location.protocol + '//' + location.host + location.pathname + "?action=service-added";
            // });



        });

        new KbfFooterTop();
        new KbfBackButton('.kbf-back-button');

        window.Alpine = Alpine;
        Alpine.start();
    }

    addListeners() {
        let instance = this;

        this.$deleteButtons.on('click', function () {
            instance.$serviceIdField.val($(this).data('id'));
        })

    }

}

export default App;