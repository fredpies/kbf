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
      this.$deleteButtons = $('a[data-id]');
      this.$jobIdField = $('input[name="job_id"]');
    }
  }, {
    key: "addListeners",
    value: function addListeners() {
      var instance = this;
      this.$deleteButtons.on('click', function () {
        instance.$jobIdField.val($(this).data('id'));
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
//# sourceMappingURL=dashboard-jobs.js.map
