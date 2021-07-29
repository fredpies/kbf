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
        this.$footerBottom = $('.footer-bottom');
        this.$footerTop = $('.footer-top');
        this.$footerTop.css('transform', 'translateY(100%)');
        this.$showFooterTop = $('#showFooterTop');
      }
    }, {
      key: "addListeners",
      value: function addListeners() {
        var instance = this;
        this.$showFooterTop.click(function (e) {
          e.preventDefault();
          e.stopPropagation();
          var $industriesSidebar = $('#industriesSidebar');
          if ($industriesSidebar.length > 0) $industriesSidebar.removeClass('show');
          instance.$footerTop.toggleClass('show-footer-top');
          if (instance.$footerTop.hasClass('show-footer-top')) instance.$footerTop.css('transform', "translateY(-".concat(parseInt(getComputedStyle($('.footer-bottom')[0]).height), "px)"));else instance.$footerTop.css('transform', 'translateY(100%)');
        });
        this.$footerTop.click(function (e) {
          e.stopPropagation();
        });
        $(window).click(function () {
          instance.$footerTop.css('transform', 'translateY(100%)');
          instance.$footerTop.removeClass('show-footer-top');
        });
        $(window).scroll(function () {
          instance.$footerTop.css('transform', 'translateY(100%)');
          instance.$footerTop.removeClass('show-footer-top');
        });
        $(window).resize(function () {
          instance.$footerTop.css('transform', 'translateY(100%)');
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
    }

    _createClass(App, [{
      key: "init",
      value: function init() {
        var formData = new FormData();
        this.initBannerCropper(formData);
        this.initMobileBannerCropper(formData);
        $("#add-banner").submit(function (event) {
          event.preventDefault();
          formData.append("banner_name", $("#banner_name").val());
          formData.append("banner_target_url", $("#banner_target_url").val());
          $.ajax({
            type: 'POST',
            url: '/kbf/api/add-banner/',
            data: formData,
            processData: false,
            contentType: false
          }).done(function (data) {
            if ("error" in data) {
              $("#error_msg").text(data["error"]);
              $("#banner_error").show();
            } else {
              window.location.href = location.protocol + '//' + location.host + location.pathname + "?action=banner-added";
            }
          });
        });
        $(".banner-img-draggable").on('dragstart', function (event) {
          event.originalEvent.dataTransfer.setData("bannerId", event.target.id);
        });
        $("#bannerIndex").on("dragover", function (event) {
          event.preventDefault();
          event.stopPropagation();
        }).on("drop", function (event) {
          event.preventDefault();
          event.stopPropagation();
          var id = event.originalEvent.dataTransfer.getData("bannerId");
          window.location.href = location.protocol + '//' + location.host + "/kbf/panel/ustaw-baner/?id=" + id + "&type=INDEX";
        });
        $("#bannerIndustry").on("dragover", function (event) {
          event.preventDefault();
          event.stopPropagation();
        }).on("drop", function (event) {
          event.preventDefault();
          event.stopPropagation();
          var id = event.originalEvent.dataTransfer.getData("bannerId");
          window.location.href = location.protocol + '//' + location.host + "/kbf/panel/ustaw-baner/?id=" + id + "&type=INDUSTRY";
        });
        $("#bannerJob").on("dragover", function (event) {
          event.preventDefault();
          event.stopPropagation();
        }).on("drop", function (event) {
          event.preventDefault();
          event.stopPropagation();
          var id = event.originalEvent.dataTransfer.getData("bannerId");
          window.location.href = location.protocol + '//' + location.host + "/kbf/panel/ustaw-baner/?id=" + id + "&type=JOB";
        });
        new KbfFooterTop();
      }
    }, {
      key: "initBannerCropper",
      value: function initBannerCropper(formData) {
        var $modal = $('#modal');
        var image = document.getElementById('sample_image');
        var cropper = null;
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
          var canvas = cropper.getCroppedCanvas({
            width: 1920,
            height: 140
          });
          canvas.toBlob(function (blob) {
            URL.createObjectURL(blob);
            var reader = new FileReader();
            reader.readAsDataURL(blob);

            reader.onloadend = function () {
              var base64data = reader.result;
              formData.append("banner_image", blob, "image.png");
              $('#uploaded_image').attr('src', base64data);
              $modal.modal('hide');
            };
          });
        });
      }
    }, {
      key: "initMobileBannerCropper",
      value: function initMobileBannerCropper(formData) {
        var $modalMobile = $('#modalMobile');
        var imageMobile = document.getElementById('sample_image_mobile');
        var cropperMobile = null;
        $('#upload_image_mobile').change(function (event) {
          var files = event.target.files;

          var done = function done(url) {
            imageMobile.src = url;
            $modalMobile.modal('show');
          };

          if (files && files.length > 0) {
            var reader = new FileReader();

            reader.onload = function (event) {
              done(reader.result);
            };

            reader.readAsDataURL(files[0]);
          }

          $('#upload_image_mobile').val('');
        });
        $modalMobile.on('shown.bs.modal', function () {
          cropperMobile = new Cropper(imageMobile, {
            aspectRatio: 600 / 140,
            viewMode: 2,
            preview: '.preview',
            autoCropArea: 1,
            zoomable: false
          });
        }).on('hidden.bs.modal', function () {
          cropperMobile.destroy();
          cropperMobile = null;
        });
        $('#cropMobile').click(function () {
          var canvas = cropperMobile.getCroppedCanvas({
            width: 600,
            height: 140
          });
          canvas.toBlob(function (blob) {
            URL.createObjectURL(blob);
            var reader = new FileReader();
            reader.readAsDataURL(blob);

            reader.onloadend = function () {
              var base64data = reader.result;
              formData.append("banner_image_mobile", blob, "image-mobile.png");
              $('#uploaded_image_mobile').attr('src', base64data);
              $modalMobile.modal('hide');
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
//# sourceMappingURL=dashboard-banners.js.map
