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

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }

  function _isNativeReflectConstruct$1() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct$1()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;

      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }

      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);

        _cache.set(Class, Wrapper);
      }

      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }

      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class);
    };

    return _wrapNativeSuper(Class);
  }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  var KbfPreloaderButton = /*#__PURE__*/function (_EventTarget) {
    _inherits(KbfPreloaderButton, _EventTarget);

    var _super = _createSuper(KbfPreloaderButton);

    function KbfPreloaderButton(selector) {
      var _this;

      var auto = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      _classCallCheck(this, KbfPreloaderButton);

      _this = _super.call(this);
      var $ = window.$;
      _this.$preloaderButton = $(selector); // Emituj wyjatek gdy nie podano selektora albo element nie zostal znaleziony

      if (!selector || _this.$preloaderButton.length === 0) throw errors.elementNotFound(selector);
      _this.auto = auto; // Czy automatycznie dodawac listener

      _this.init();

      _this.addListeners();

      return _this;
    }

    _createClass(KbfPreloaderButton, [{
      key: "init",
      value: function init() {
        // Aliasy
        this.on = this.addEventListener;
        this.off = this.removeEventListener;
        this.emit = this.dispatchEvent;
        this.buttonCurrentContents = this.$preloaderButton.html(); // Aktualna zawartosc
      }
    }, {
      key: "triggerStart",
      value: function triggerStart(buttonElement) {
        var buttonGeometry = buttonElement.getBoundingClientRect(); // Aktualna geometria

        var $buttonElement = $(buttonElement);
        var bgColor;
        $buttonElement.on('click', function () {
          console.log('not touch');
          bgColor = getComputedStyle(buttonElement, ':hover').backgroundColor;
        });
        this.$preloaderButton.trigger({
          type: 'start-preloader',
          buttonGeometry: buttonGeometry,
          bgColor: bgColor
        });
        this.emit(new CustomEvent('click'));
      } // Startuje preloader

    }, {
      key: "startPreloader",
      value: function startPreloader(buttonElement, buttonGeometry, bgColor) {
        var $ = window.$;
        var $buttonElement = $(buttonElement);
        $buttonElement.attr('disabled', 'disabled');
        $buttonElement.css('width', buttonGeometry.width + 'px');
        $buttonElement.css('height', buttonGeometry.height + 'px');
        $buttonElement.css('padding', 0);
        $buttonElement.css('background-color', bgColor);
        $buttonElement.html(KbfPreloaderButton.preloaderMarkup);
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
        var instance = this; // Rejestruj handler warunkowo

        if (this.auto) {
          this.$preloaderButton.on('click', function () {
            instance.triggerStart(this);
          });
        }

        this.$preloaderButton.on('start-preloader', function (e) {
          instance.startPreloader(this, e.buttonGeometry, e.bgColor);
        });
      }
    }]);

    return KbfPreloaderButton;
  }( /*#__PURE__*/_wrapNativeSuper(EventTarget));

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
    }

    _createClass(App, [{
      key: "init",
      value: function init() {
        new KbfBackButton('.kbf-back-button');
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
//# sourceMappingURL=send-cv-confirmation.js.map
