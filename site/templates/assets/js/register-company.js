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

        $this.attr('disabled', 'disabled');
        $this.css('width', buttonGeometry.width + 'px');
        $this.css('height', buttonGeometry.height + 'px');
        $this.css('padding', 0);
        $this.html(KbfPreloaderButton.preloaderMarkup);
      } // Zatrzymuje preloader

    }, {
      key: "stopPreloader",
      value: function stopPreloader() {
        this.$preloaderButton.html(this.buttonCurrentContents).attr('style', '');
        this.$preloaderButton.removeAttr('disabled');
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

  var KbfStepper = /*#__PURE__*/function () {
    function KbfStepper(selector) {
      _classCallCheck(this, KbfStepper);

      var $ = window.$;
      this.$kbfStepper = $(selector); // Emituj wyjatek gdy nie podano selektora albo element nie zostal znaleziony

      if (!selector || this.$kbfStepper.length === 0) throw errors.elementNotFound(selector);
      this.init();
      this.addListeners();
    }

    _createClass(KbfStepper, [{
      key: "init",
      value: function init() {
        this.currentPageIdx = 0; // Biezacy index strony

        this.lastPageIdx = this.$kbfStepper.find('.page').length - 1; // Ostatni index

        this.currentWidth = window.innerWidth; // Elementy $

        this.$infoMessages = this.$kbfStepper.find('.page-info-msg'); // Ustaw przyciski w zaleznosci od szerokosci urzadzenia

        if (window.innerWidth >= 768) {
          this.$prevButton = this.$kbfStepper.find('.button-prev.button-desktop');
          this.$nextButton = this.$kbfStepper.find('.button-next.button-desktop');
          this.$registerButton = this.$kbfStepper.find('.button-register.button-desktop');
          this.preloaderButton = new KbfPreloaderButton('.button-register.button-desktop button');
        } else {
          this.$prevButton = this.$kbfStepper.find('.button-prev');
          this.$nextButton = this.$kbfStepper.find('.button-next');
          this.$registerButton = this.$kbfStepper.find('.button-register');
          this.preloaderButton = new KbfPreloaderButton('.button-register button');
        }

        this.$pageWrapper = this.$kbfStepper.find('.page-wrapper'); // Przesuwany wrapper

        this.$steps = this.$kbfStepper.find('.step'); // Kroki w naglowku
      }
    }, {
      key: "addListeners",
      value: function addListeners() {
        this.$prevButton.on('click', this.prevPage.bind(this));
        this.$nextButton.on('click', this.nextPage.bind(this));
        this.$registerButton.on('click', this.submitRegister.bind(this));
        $(window).on('resize', this.adjustStepper.bind(this)); // Dostosuj polozenie przesuwanego wrappera podczas rotacji urzadzenia
      } // Zmienia na nastepna strone

    }, {
      key: "nextPage",
      value: function nextPage(e) {
        e.stopPropagation();

        if (this.validateCurrentPage()) {
          // Zmienia strone tylko w przypadku jej poprawnosci
          if (this.currentPageIdx === this.lastPageIdx) return;
          this.$steps.eq(this.currentPageIdx).addClass('done');
          this.$steps.eq(this.currentPageIdx).removeClass('active');
          this.currentPageIdx++;
          this.$pageWrapper.css('transform', "translateX(-".concat(this.currentPageIdx * this.currentWidth, "px)"));
          if (this.currentPageIdx > 0) this.$prevButton.find('button').removeAttr('disabled');

          if (this.currentPageIdx === this.lastPageIdx) {
            this.$nextButton.hide();
            this.$registerButton.show();
            this.$registerButton.find('button').addClass('show');
          }

          this.$steps.eq(this.currentPageIdx).addClass('active');
          this.$infoMessages.eq(this.currentPageIdx).addClass('show').siblings().removeClass('show'); // Ustaw komunikat
        }
      } // Zmienia na poprzednia strone

    }, {
      key: "prevPage",
      value: function prevPage(e) {
        e.stopPropagation();

        if (this.validateCurrentPage()) {
          // Zmienia strone tylko w przypadku jej poprawnosci
          if (this.currentPageIdx === 0) return;
          this.$steps.eq(this.currentPageIdx).removeClass('active');
          this.currentPageIdx--;
          this.$steps.eq(this.currentPageIdx).removeClass('done');
          this.$steps.eq(this.currentPageIdx).addClass('active');
          this.$pageWrapper.css('transform', "translateX(-".concat(this.currentPageIdx * this.currentWidth, "px)"));

          if (this.currentPageIdx < this.lastPageIdx) {
            this.$registerButton.hide();
            this.$registerButton.find('button').removeClass('show');
            this.$nextButton.show();
          }

          if (this.currentPageIdx === 0) {
            this.$prevButton.find('button').attr('disabled', 'disabled');
          }

          this.$infoMessages.eq(this.currentPageIdx).addClass('show').siblings().removeClass('show'); // Ustaw komunikat
        }
      }
    }, {
      key: "adjustStepper",
      value: function adjustStepper() {
        this.currentWidth = this.$kbfStepper.find('.page').eq(0).width();
        this.$pageWrapper.css('transform', "translateX(-".concat(this.currentPageIdx * this.currentWidth, "px)"));
      } // Sprawdza poprawnosc formularza na danej stronie

    }, {
      key: "validateCurrentPage",
      value: function validateCurrentPage() {
        return true;
      } // Potwierdza rejestracje

    }, {
      key: "submitRegister",
      value: function submitRegister() {
        this.$prevButton.find('button').attr('disabled', 'disabled').off('click'); // Wylacz prev button
      }
    }]);

    return KbfStepper;
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
        new KbfStepper('.kbf-stepper');
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
//# sourceMappingURL=register-company.js.map
