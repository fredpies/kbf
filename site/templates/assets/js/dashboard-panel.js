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

  var KbfFavouriteCounters = function KbfFavouriteCounters() {
    _classCallCheck(this, KbfFavouriteCounters);

    window.favouriteCompaniesCount = function () {
      return {
        counterValue: 0,
        init: function init() {
          this.favouriteCompanies = JSON.parse(localStorage.getItem('favourite-companies'));

          if (!this.favouriteCompanies) {
            localStorage.setItem('favourite-companies', JSON.stringify([]));
          }

          this.counterValue = this.favouriteCompanies.length;
          console.log('favourite companies');
        }
      };
    };

    window.favouriteProductsCount = function () {
      return {
        counterValue: 0,
        init: function init() {
          this.favouriteProducts = JSON.parse(localStorage.getItem('favourite-products'));

          if (!this.favouriteProducts) {
            localStorage.setItem('favourite-products', JSON.stringify([]));
          }

          this.counterValue = this.favouriteProducts.length;
          console.log('favourite products');
        }
      };
    };
  };

  var App = /*#__PURE__*/function () {
    function App() {
      _classCallCheck(this, App);

      this.init();
      this.addListeners();
    }

    _createClass(App, [{
      key: "init",
      value: function init() {
        new KbfFavouriteCounters();
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
//# sourceMappingURL=dashboard-panel.js.map
