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

  var KbfFooterTop = /*#__PURE__*/function () {
    function KbfFooterTop() {
      _classCallCheck(this, KbfFooterTop);

      this.init();
      this.addListeners();
    }

    _createClass(KbfFooterTop, [{
      key: "init",
      value: function init() {
        this.$footerTop = $('.footer-top');
        this.$showFooterTop = $('#showFooterTop');
      }
    }, {
      key: "addListeners",
      value: function addListeners() {
        var instance = this;
        this.$showFooterTop.click(function (e) {
          e.preventDefault();
          e.stopPropagation();
          instance.$footerTop.toggleClass('show-footer-top');
        });
        this.$footerTop.click(function (e) {
          e.stopPropagation();
        });
        $(window).click(function () {
          instance.$footerTop.removeClass('show-footer-top');
        });
        $(window).scroll(function () {
          instance.$footerTop.removeClass('show-footer-top');
        });
      }
    }]);

    return KbfFooterTop;
  }();

  var App = /*#__PURE__*/function () {
    function App() {
      _classCallCheck(this, App);

      this.init();
      this.addListeners();
    }

    _createClass(App, [{
      key: "init",
      value: function init() {
        this.$deleteButtons = $('a[data-id]');
        this.$serviceIdField = $('input[name="service_id"]');
        var $modal = $('#modal');
        var image = document.getElementById('sample_image');
        var cropper = null;
        var formData = new FormData();
        $('#upload_image').change(function (event) {
          var files = event.target.files;

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
              formData.append("service_image", blob, "image.png");
              $('#uploaded_image').attr('src', base64data);
              $modal.modal('hide');
            };
          });
        });
        $("#add-service").submit(function (event) {
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
          }).done(function (data) {
            console.log(data);
            window.location.href = location.protocol + '//' + location.host + location.pathname + "?action=service-added";
          });
        });
        new KbfFooterTop();
      }
    }, {
      key: "addListeners",
      value: function addListeners() {
        var instance = this;
        this.$deleteButtons.on('click', function () {
          instance.$serviceIdField.val($(this).data('id'));
        });
      }
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
