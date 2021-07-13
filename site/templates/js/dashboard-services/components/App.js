class App {

    constructor() {
        this.init();
        this.addListeners();
    }

    init() {
        this.$deleteButtons = $('a[data-id]');
        this.$serviceIdField = $('input[name="service_id"]');


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

                    $('#uploaded_image').attr('src', base64data);
                    $modal.modal('hide');
                };
            });
        });

        $( "#add-service" ).submit(function(event) {
            event.preventDefault();

            formData.append("service_name", $("#service_name").val());
            formData.append("service_description", $("#service_description").val());
            formData.append("service_price", $("#service_price").val());

            $.ajax({
                type: 'POST',
                url: '/kbf/api/add-service/',
                data: formData,
                processData: false,
                contentType: false
            }).done(function(data) {
                console.log(data);
                window.location.href = location.protocol + '//' + location.host + location.pathname + "?action=service-added";
            });

        });
    }

    addListeners() {
        let instance = this;

        this.$deleteButtons.on('click', function () {
            instance.$serviceIdField.val($(this).data('id'));
        })

    }

}

export default App;