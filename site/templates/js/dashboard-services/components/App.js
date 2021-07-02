class App {

    constructor() {
        this.init();
        this.addListeners();
    }

    init() {
        let $modal = $('#modal');
        let image = document.getElementById('sample_image');
        let cropper = null;

        $('#upload_image').change(function(event) {
            let files = event.target.files;
            console.log(files);

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
        }).on('hidden.bs.modal', function(){
            cropper.destroy();
            cropper = null;
        });

        $('#crop').click(function(){
            let canvas = cropper.getCroppedCanvas({
                width:400,
                height:400
            });

            canvas.toBlob(function(blob) {
                let url = URL.createObjectURL(blob);
                let reader = new FileReader();
                reader.readAsDataURL(blob);
                reader.onloadend = function(){
                    let base64data = reader.result;

                    let formData = new FormData();
                    formData.append("service_image", blob, "image.png");
                    $.ajax({
                        type: 'POST',
                        url: '/kbf/api/upload/',
                        data: formData,
                        processData: false,
                        contentType: false
                    }).done(function(data) {
                        console.log(data);
                    });

                    $('#uploaded_image').attr('src', base64data);

                    $modal.modal('hide');
                };
            });
        });
    }

    addListeners() {

    }

}

export default App;