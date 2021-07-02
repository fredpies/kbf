(function () {
  'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  var App = /*#__PURE__*/function () {
    function App() {
      _classCallCheck(this, App);

      this.init();
      this.addListeners();
    }

    _createClass(App, [{
      key: "init",
      value: function init() {
        var $modal = $('#modal');
        var image = document.getElementById('sample_image');
        var cropper = null;
        $('#upload_image').change(function (event) {
          var files = event.target.files;
          console.log(files);

          var done = function done(url) {
            image.src = url;
            $modal.modal('show');
          };

          if (files && files.length > 0) {
            var reader = new FileReader();

            reader.onload = function (event) {
              done(reader.result);
            };

            reader.readAsDataURL(files[0]);
          }

          $('#upload_image').val('');
        });
        $modal.on('shown.bs.modal', function () {
          cropper = new Cropper(image, {
            aspectRatio: 1,
            viewMode: 2,
            preview: '.preview'
          });
        }).on('hidden.bs.modal', function () {
          cropper.destroy();
          cropper = null;
        });
        $('#crop').click(function () {
          var canvas = cropper.getCroppedCanvas({
            width: 400,
            height: 400
          });
          canvas.toBlob(function (blob) {
            URL.createObjectURL(blob);
            var reader = new FileReader();
            reader.readAsDataURL(blob);

            reader.onloadend = function () {
              var base64data = reader.result;
              var formData = new FormData();
              formData.append("service_image", blob, "image.png");
              $.ajax({
                type: 'POST',
                url: '/kbf/api/upload/',
                data: formData,
                processData: false,
                contentType: false
              }).done(function (data) {
                console.log(data);
              });
              $('#uploaded_image').attr('src', base64data);
              $modal.modal('hide');
            };
          });
        });
      }
    }, {
      key: "addListeners",
      value: function addListeners() {}
    }]);

    return App;
  }();

  (function ($) {
    $(document).ready(function () {
      new App();
    });
  })(window.$);

}());
//# sourceMappingURL=dashboard-services.js.map
