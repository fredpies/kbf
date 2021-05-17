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

  var errors = {}; // Wyjatki
  // Nie znaleziono elementu DOM

  errors.elementNotFound = function (selector) {
    return new Error("Cannot find elements with selector \"".concat(selector, "\""));
  }; // Nie znaleziono formularza


  errors.formNotFound = function (formName) {
    return new Error("Cannot find form with name \"".concat(formName, "\""));
  }; // Nie podano argumentu


  errors.argumentNotFound = function (argumentName) {
    return new Error("".concat(argumentName.substring(0, 1).toUpperCase() + argumentName.substring(1), " argument cannot be empty"));
  }; // Brak walidatora dla formularza


  errors.noValidator = function () {
    return new Error("No JQuery validator plugin");
  }; // Nie podano wspolrzednych geograficznych


  errors.noGeoCoords = function () {
    return new Error("You must provide geo coordinates.");
  };

  var KbfPreloaderButton = /*#__PURE__*/function () {
    function KbfPreloaderButton(selector) {
      _classCallCheck(this, KbfPreloaderButton);

      var $ = window.$;
      this.$preloaderButton = $(selector); // Emituj wyjatek gdy nie podano selektora albo element nie zostal znaleziony

      if (!selector || this.$preloaderButton.length === 0) throw errors.elementNotFound(selector);
      this.init();
      this.addListeners();
    }

    _createClass(KbfPreloaderButton, [{
      key: "init",
      value: function init() {
        this.buttonCurrentContents = this.$preloaderButton.html(); // Aktualna zawartosc
      } // Startuje preloader

    }, {
      key: "startPreloader",
      value: function startPreloader(buttonElement) {
        var $ = window.$;
        var $this = $(buttonElement);
        var buttonGeometry = buttonElement.getBoundingClientRect(); // Aktualna geometria

        $this.css('width', buttonGeometry.width + 'px');
        $this.css('height', buttonGeometry.height + 'px');
        $this.css('padding', 0); // $this.css('padding-bottom', 0);

        $this.html(KbfPreloaderButton.preloaderMarkup);
      } // Zatrzymuje preloader

    }, {
      key: "stopPreloader",
      value: function stopPreloader() {
        this.$preloaderButton.html(this.buttonCurrentContents).attr('style', '');
      }
    }, {
      key: "addListeners",
      value: function addListeners() {
        var instance = this;
        this.$preloaderButton.on('click', function () {
          instance.startPreloader(this);
        });
      }
    }]);

    return KbfPreloaderButton;
  }();

  KbfPreloaderButton.preloaderMarkup = '<div class="kbf-button-preloader"><div id="dots"><span></span><span></span><span></span></div></div>';

  var KbfBackButton = /*#__PURE__*/function () {
    function KbfBackButton(selector) {
      _classCallCheck(this, KbfBackButton);

      var $ = window.$;
      this.$backButton = $(selector); // Emituj wyjatek gdy nie podano selektora albo element nie zostal znaleziony

      if (!selector || this.$backButton.length === 0) throw errors.elementNotFound(selector);
      this.init(selector);
      this.addListeners();
    }

    _createClass(KbfBackButton, [{
      key: "init",
      value: function init(selector) {
        this.preloaderButton = new KbfPreloaderButton(selector);
        this.$backButton.hide();
        if (window.history.length > 1) this.$backButton.show();
      }
    }, {
      key: "addListeners",
      value: function addListeners() {
        if (window.history.length > 1) {
          this.$backButton.on('click', function () {
            window.history.back();
          });
        }
      }
    }]);

    return KbfBackButton;
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
        new KbfBackButton('.kbf-back-button');
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
//# sourceMappingURL=job.js.map
