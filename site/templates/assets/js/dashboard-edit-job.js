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

function _isNativeReflectConstruct$7() {
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
  if (_isNativeReflectConstruct$7()) {
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

function _createSuper$6(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$6(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$6() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var KbfPreloaderButton = /*#__PURE__*/function (_EventTarget) {
  _inherits(KbfPreloaderButton, _EventTarget);

  var _super = _createSuper$6(KbfPreloaderButton);

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

      var bgColor = getComputedStyle(buttonElement, ':hover').backgroundColor;
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

var INTL_DATE_TIME_FORMAT = Intl && Intl.DateTimeFormat;
var UP_KEYS = [38, 33, 36];
var DOWN_KEYS = [40, 34, 35];
var PREV_KEY_CODES_SET = new Set([37].concat(UP_KEYS));
var NEXT_KEY_CODES_SET = new Set([39].concat(DOWN_KEYS));
var NEXT_DAY_KEY_CODES_SET = new Set([39].concat(UP_KEYS));
var PREV_DAY_KEY_CODES_SET = new Set([37].concat(DOWN_KEYS));
var ALL_NAV_KEYS_SET = new Set([37, 39].concat(UP_KEYS, DOWN_KEYS));
var DATEPICKER_NAME = 'app-datepicker';

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

function createCommonjsModule(fn) {
  var module = { exports: {} };
	return fn(module, module.exports), module.exports;
}

var runtime_1 = createCommonjsModule(function (module) {
  var runtime = function (exports) {

    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var undefined$1; // More compressible than void 0.

    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

    function define(obj, key, value) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
      return obj[key];
    }

    try {
      // IE 8 has a broken Object.defineProperty that only works on DOM objects.
      define({}, "");
    } catch (err) {
      define = function define(obj, key, value) {
        return obj[key] = value;
      };
    }

    function wrap(innerFn, outerFn, self, tryLocsList) {
      // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
      var generator = Object.create(protoGenerator.prototype);
      var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
      // .throw, and .return methods.

      generator._invoke = makeInvokeMethod(innerFn, self, context);
      return generator;
    }

    exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.

    function tryCatch(fn, obj, arg) {
      try {
        return {
          type: "normal",
          arg: fn.call(obj, arg)
        };
      } catch (err) {
        return {
          type: "throw",
          arg: err
        };
      }
    }

    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.

    var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.

    function Generator() {}

    function GeneratorFunction() {}

    function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.


    var IteratorPrototype = {};

    IteratorPrototype[iteratorSymbol] = function () {
      return this;
    };

    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
      // This environment has a native %IteratorPrototype%; use it instead
      // of the polyfill.
      IteratorPrototype = NativeIteratorPrototype;
    }

    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
    GeneratorFunctionPrototype.constructor = GeneratorFunction;
    GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"); // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.

    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function (method) {
        define(prototype, method, function (arg) {
          return this._invoke(method, arg);
        });
      });
    }

    exports.isGeneratorFunction = function (genFun) {
      var ctor = typeof genFun === "function" && genFun.constructor;
      return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
      // do is to check its .name property.
      (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
    };

    exports.mark = function (genFun) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
      } else {
        genFun.__proto__ = GeneratorFunctionPrototype;
        define(genFun, toStringTagSymbol, "GeneratorFunction");
      }

      genFun.prototype = Object.create(Gp);
      return genFun;
    }; // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.


    exports.awrap = function (arg) {
      return {
        __await: arg
      };
    };

    function AsyncIterator(generator, PromiseImpl) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);

        if (record.type === "throw") {
          reject(record.arg);
        } else {
          var result = record.arg;
          var value = result.value;

          if (value && _typeof(value) === "object" && hasOwn.call(value, "__await")) {
            return PromiseImpl.resolve(value.__await).then(function (value) {
              invoke("next", value, resolve, reject);
            }, function (err) {
              invoke("throw", err, resolve, reject);
            });
          }

          return PromiseImpl.resolve(value).then(function (unwrapped) {
            // When a yielded Promise is resolved, its final value becomes
            // the .value of the Promise<{value,done}> result for the
            // current iteration.
            result.value = unwrapped;
            resolve(result);
          }, function (error) {
            // If a rejected Promise was yielded, throw the rejection back
            // into the async generator function so it can be handled there.
            return invoke("throw", error, resolve, reject);
          });
        }
      }

      var previousPromise;

      function enqueue(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }

        return previousPromise = // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
        // invocations of the iterator.
        callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      } // Define the unified helper method that is used to implement .next,
      // .throw, and .return (see defineIteratorMethods).


      this._invoke = enqueue;
    }

    defineIteratorMethods(AsyncIterator.prototype);

    AsyncIterator.prototype[asyncIteratorSymbol] = function () {
      return this;
    };

    exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.

    exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
      if (PromiseImpl === void 0) PromiseImpl = Promise;
      var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
      return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function (result) {
        return result.done ? result.value : iter.next();
      });
    };

    function makeInvokeMethod(innerFn, self, context) {
      var state = GenStateSuspendedStart;
      return function invoke(method, arg) {
        if (state === GenStateExecuting) {
          throw new Error("Generator is already running");
        }

        if (state === GenStateCompleted) {
          if (method === "throw") {
            throw arg;
          } // Be forgiving, per 25.3.3.3.3 of the spec:
          // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


          return doneResult();
        }

        context.method = method;
        context.arg = arg;

        while (true) {
          var delegate = context.delegate;

          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);

            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if (context.method === "next") {
            // Setting context._sent for legacy support of Babel's
            // function.sent implementation.
            context.sent = context._sent = context.arg;
          } else if (context.method === "throw") {
            if (state === GenStateSuspendedStart) {
              state = GenStateCompleted;
              throw context.arg;
            }

            context.dispatchException(context.arg);
          } else if (context.method === "return") {
            context.abrupt("return", context.arg);
          }

          state = GenStateExecuting;
          var record = tryCatch(innerFn, self, context);

          if (record.type === "normal") {
            // If an exception is thrown from innerFn, we leave state ===
            // GenStateExecuting and loop back for another invocation.
            state = context.done ? GenStateCompleted : GenStateSuspendedYield;

            if (record.arg === ContinueSentinel) {
              continue;
            }

            return {
              value: record.arg,
              done: context.done
            };
          } else if (record.type === "throw") {
            state = GenStateCompleted; // Dispatch the exception by looping back around to the
            // context.dispatchException(context.arg) call above.

            context.method = "throw";
            context.arg = record.arg;
          }
        }
      };
    } // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.


    function maybeInvokeDelegate(delegate, context) {
      var method = delegate.iterator[context.method];

      if (method === undefined$1) {
        // A .throw or .return when the delegate iterator has no .throw
        // method always terminates the yield* loop.
        context.delegate = null;

        if (context.method === "throw") {
          // Note: ["return"] must be used for ES3 parsing compatibility.
          if (delegate.iterator["return"]) {
            // If the delegate iterator has a return method, give it a
            // chance to clean up.
            context.method = "return";
            context.arg = undefined$1;
            maybeInvokeDelegate(delegate, context);

            if (context.method === "throw") {
              // If maybeInvokeDelegate(context) changed context.method from
              // "return" to "throw", let that override the TypeError below.
              return ContinueSentinel;
            }
          }

          context.method = "throw";
          context.arg = new TypeError("The iterator does not provide a 'throw' method");
        }

        return ContinueSentinel;
      }

      var record = tryCatch(method, delegate.iterator, context.arg);

      if (record.type === "throw") {
        context.method = "throw";
        context.arg = record.arg;
        context.delegate = null;
        return ContinueSentinel;
      }

      var info = record.arg;

      if (!info) {
        context.method = "throw";
        context.arg = new TypeError("iterator result is not an object");
        context.delegate = null;
        return ContinueSentinel;
      }

      if (info.done) {
        // Assign the result of the finished delegate to the temporary
        // variable specified by delegate.resultName (see delegateYield).
        context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

        context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
        // exception, let the outer generator proceed normally. If
        // context.method was "next", forget context.arg since it has been
        // "consumed" by the delegate iterator. If context.method was
        // "return", allow the original .return call to continue in the
        // outer generator.

        if (context.method !== "return") {
          context.method = "next";
          context.arg = undefined$1;
        }
      } else {
        // Re-yield the result returned by the delegate method.
        return info;
      } // The delegate iterator is finished, so forget it and continue with
      // the outer generator.


      context.delegate = null;
      return ContinueSentinel;
    } // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.


    defineIteratorMethods(Gp);
    define(Gp, toStringTagSymbol, "Generator"); // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.

    Gp[iteratorSymbol] = function () {
      return this;
    };

    Gp.toString = function () {
      return "[object Generator]";
    };

    function pushTryEntry(locs) {
      var entry = {
        tryLoc: locs[0]
      };

      if (1 in locs) {
        entry.catchLoc = locs[1];
      }

      if (2 in locs) {
        entry.finallyLoc = locs[2];
        entry.afterLoc = locs[3];
      }

      this.tryEntries.push(entry);
    }

    function resetTryEntry(entry) {
      var record = entry.completion || {};
      record.type = "normal";
      delete record.arg;
      entry.completion = record;
    }

    function Context(tryLocsList) {
      // The root entry object (effectively a try statement without a catch
      // or a finally block) gives us a place to store values thrown from
      // locations where there is no enclosing try statement.
      this.tryEntries = [{
        tryLoc: "root"
      }];
      tryLocsList.forEach(pushTryEntry, this);
      this.reset(true);
    }

    exports.keys = function (object) {
      var keys = [];

      for (var key in object) {
        keys.push(key);
      }

      keys.reverse(); // Rather than returning an object with a next method, we keep
      // things simple and return the next function itself.

      return function next() {
        while (keys.length) {
          var key = keys.pop();

          if (key in object) {
            next.value = key;
            next.done = false;
            return next;
          }
        } // To avoid creating an additional object, we just hang the .value
        // and .done properties off the next function object itself. This
        // also ensures that the minifier will not anonymize the function.


        next.done = true;
        return next;
      };
    };

    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];

        if (iteratorMethod) {
          return iteratorMethod.call(iterable);
        }

        if (typeof iterable.next === "function") {
          return iterable;
        }

        if (!isNaN(iterable.length)) {
          var i = -1,
              next = function next() {
            while (++i < iterable.length) {
              if (hasOwn.call(iterable, i)) {
                next.value = iterable[i];
                next.done = false;
                return next;
              }
            }

            next.value = undefined$1;
            next.done = true;
            return next;
          };

          return next.next = next;
        }
      } // Return an iterator with no values.


      return {
        next: doneResult
      };
    }

    exports.values = values;

    function doneResult() {
      return {
        value: undefined$1,
        done: true
      };
    }

    Context.prototype = {
      constructor: Context,
      reset: function reset(skipTempReset) {
        this.prev = 0;
        this.next = 0; // Resetting context._sent for legacy support of Babel's
        // function.sent implementation.

        this.sent = this._sent = undefined$1;
        this.done = false;
        this.delegate = null;
        this.method = "next";
        this.arg = undefined$1;
        this.tryEntries.forEach(resetTryEntry);

        if (!skipTempReset) {
          for (var name in this) {
            // Not sure about the optimal order of these conditions:
            if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
              this[name] = undefined$1;
            }
          }
        }
      },
      stop: function stop() {
        this.done = true;
        var rootEntry = this.tryEntries[0];
        var rootRecord = rootEntry.completion;

        if (rootRecord.type === "throw") {
          throw rootRecord.arg;
        }

        return this.rval;
      },
      dispatchException: function dispatchException(exception) {
        if (this.done) {
          throw exception;
        }

        var context = this;

        function handle(loc, caught) {
          record.type = "throw";
          record.arg = exception;
          context.next = loc;

          if (caught) {
            // If the dispatched exception was caught by a catch block,
            // then let that catch block handle the exception normally.
            context.method = "next";
            context.arg = undefined$1;
          }

          return !!caught;
        }

        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          var record = entry.completion;

          if (entry.tryLoc === "root") {
            // Exception thrown outside of any try block that could handle
            // it, so set the completion value of the entire function to
            // throw the exception.
            return handle("end");
          }

          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, "catchLoc");
            var hasFinally = hasOwn.call(entry, "finallyLoc");

            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              } else if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }
            } else if (hasCatch) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              }
            } else if (hasFinally) {
              if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }
            } else {
              throw new Error("try statement without catch or finally");
            }
          }
        }
      },
      abrupt: function abrupt(type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];

          if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }

        if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
          // Ignore the finally entry if control is not jumping to a
          // location outside the try/catch block.
          finallyEntry = null;
        }

        var record = finallyEntry ? finallyEntry.completion : {};
        record.type = type;
        record.arg = arg;

        if (finallyEntry) {
          this.method = "next";
          this.next = finallyEntry.finallyLoc;
          return ContinueSentinel;
        }

        return this.complete(record);
      },
      complete: function complete(record, afterLoc) {
        if (record.type === "throw") {
          throw record.arg;
        }

        if (record.type === "break" || record.type === "continue") {
          this.next = record.arg;
        } else if (record.type === "return") {
          this.rval = this.arg = record.arg;
          this.method = "return";
          this.next = "end";
        } else if (record.type === "normal" && afterLoc) {
          this.next = afterLoc;
        }

        return ContinueSentinel;
      },
      finish: function finish(finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];

          if (entry.finallyLoc === finallyLoc) {
            this.complete(entry.completion, entry.afterLoc);
            resetTryEntry(entry);
            return ContinueSentinel;
          }
        }
      },
      "catch": function _catch(tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];

          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;

            if (record.type === "throw") {
              var thrown = record.arg;
              resetTryEntry(entry);
            }

            return thrown;
          }
        } // The context.catch method must only be called with a location
        // argument that corresponds to a known catch block.


        throw new Error("illegal catch attempt");
      },
      delegateYield: function delegateYield(iterable, resultName, nextLoc) {
        this.delegate = {
          iterator: values(iterable),
          resultName: resultName,
          nextLoc: nextLoc
        };

        if (this.method === "next") {
          // Deliberately forget the last sent value so that we don't
          // accidentally pass it on to the delegate.
          this.arg = undefined$1;
        }

        return ContinueSentinel;
      }
    }; // Regardless of whether this script is executing as a CommonJS module
    // or not, return the runtime object so that we can declare the variable
    // regeneratorRuntime in the outer scope, which allows this module to be
    // injected easily by `bin/regenerator --include-runtime script.js`.

    return exports;
  }( // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
  module.exports );

  try {
    regeneratorRuntime = runtime;
  } catch (accidentalStrictMode) {
    // This module should not be running in strict mode, so the above
    // assignment should always work unless something is misconfigured. Just
    // in case runtime.js accidentally runs in strict mode, we can escape
    // strict mode using a global Function call. This could conceivably fail
    // if a Content Security Policy forbids using Function, but in that case
    // the proper solution is to fix the accidental strict mode problem. If
    // you've misconfigured your bundler to force strict mode and applied a
    // CSP to forbid Function, and you're not willing to fix either of those
    // problems, please detail your unique predicament in a GitHub issue.
    Function("r", "regeneratorRuntime = r")(runtime);
  }
});

var regenerator = runtime_1;

function __decorate(decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * True if the custom elements polyfill is in use.
 */
var isCEPolyfill = typeof window !== 'undefined' && window.customElements != null && window.customElements.polyfillWrapFlushCallback !== undefined;
/**
 * Reparents nodes, starting from `start` (inclusive) to `end` (exclusive),
 * into another container (could be the same container), before `before`. If
 * `before` is null, it appends the nodes to the container.
 */

var reparentNodes = function reparentNodes(container, start) {
  var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var before = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  while (start !== end) {
    var n = start.nextSibling;
    container.insertBefore(start, before);
    start = n;
  }
};
/**
 * Removes nodes, starting from `start` (inclusive) to `end` (exclusive), from
 * `container`.
 */

var removeNodes = function removeNodes(container, start) {
  var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  while (start !== end) {
    var n = start.nextSibling;
    container.removeChild(start);
    start = n;
  }
};

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * An expression marker with embedded unique key to avoid collision with
 * possible text in templates.
 */
var marker = "{{lit-".concat(String(Math.random()).slice(2), "}}");
/**
 * An expression marker used text-positions, multi-binding attributes, and
 * attributes with markup-like text values.
 */

var nodeMarker = "<!--".concat(marker, "-->");
var markerRegex = new RegExp("".concat(marker, "|").concat(nodeMarker));
/**
 * Suffix appended to all bound attribute names.
 */

var boundAttributeSuffix = '$lit$';
/**
 * An updatable Template that tracks the location of dynamic parts.
 */

var Template = function Template(result, element) {
  _classCallCheck(this, Template);

  this.parts = [];
  this.element = element;
  var nodesToRemove = [];
  var stack = []; // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be null

  var walker = document.createTreeWalker(element.content, 133
  /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */
  , null, false); // Keeps track of the last index associated with a part. We try to delete
  // unnecessary nodes, but we never want to associate two different parts
  // to the same index. They must have a constant node between.

  var lastPartIndex = 0;
  var index = -1;
  var partIndex = 0;
  var strings = result.strings,
      length = result.values.length;

  while (partIndex < length) {
    var node = walker.nextNode();

    if (node === null) {
      // We've exhausted the content inside a nested template element.
      // Because we still have parts (the outer for-loop), we know:
      // - There is a template in the stack
      // - The walker will find a nextNode outside the template
      walker.currentNode = stack.pop();
      continue;
    }

    index++;

    if (node.nodeType === 1
    /* Node.ELEMENT_NODE */
    ) {
        if (node.hasAttributes()) {
          var attributes = node.attributes;
          var _length = attributes.length; // Per
          // https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap,
          // attributes are not guaranteed to be returned in document order.
          // In particular, Edge/IE can return them out of order, so we cannot
          // assume a correspondence between part index and attribute index.

          var count = 0;

          for (var i = 0; i < _length; i++) {
            if (endsWith(attributes[i].name, boundAttributeSuffix)) {
              count++;
            }
          }

          while (count-- > 0) {
            // Get the template literal section leading up to the first
            // expression in this attribute
            var stringForPart = strings[partIndex]; // Find the attribute name

            var name = lastAttributeNameRegex.exec(stringForPart)[2]; // Find the corresponding attribute
            // All bound attributes have had a suffix added in
            // TemplateResult#getHTML to opt out of special attribute
            // handling. To look up the attribute value we also need to add
            // the suffix.

            var attributeLookupName = name.toLowerCase() + boundAttributeSuffix;
            var attributeValue = node.getAttribute(attributeLookupName);
            node.removeAttribute(attributeLookupName);
            var statics = attributeValue.split(markerRegex);
            this.parts.push({
              type: 'attribute',
              index: index,
              name: name,
              strings: statics
            });
            partIndex += statics.length - 1;
          }
        }

        if (node.tagName === 'TEMPLATE') {
          stack.push(node);
          walker.currentNode = node.content;
        }
      } else if (node.nodeType === 3
    /* Node.TEXT_NODE */
    ) {
        var data = node.data;

        if (data.indexOf(marker) >= 0) {
          var parent = node.parentNode;

          var _strings = data.split(markerRegex);

          var lastIndex = _strings.length - 1; // Generate a new text node for each literal section
          // These nodes are also used as the markers for node parts

          for (var _i = 0; _i < lastIndex; _i++) {
            var insert = void 0;
            var s = _strings[_i];

            if (s === '') {
              insert = createMarker();
            } else {
              var match = lastAttributeNameRegex.exec(s);

              if (match !== null && endsWith(match[2], boundAttributeSuffix)) {
                s = s.slice(0, match.index) + match[1] + match[2].slice(0, -boundAttributeSuffix.length) + match[3];
              }

              insert = document.createTextNode(s);
            }

            parent.insertBefore(insert, node);
            this.parts.push({
              type: 'node',
              index: ++index
            });
          } // If there's no text, we must insert a comment to mark our place.
          // Else, we can trust it will stick around after cloning.


          if (_strings[lastIndex] === '') {
            parent.insertBefore(createMarker(), node);
            nodesToRemove.push(node);
          } else {
            node.data = _strings[lastIndex];
          } // We have a part for each match found


          partIndex += lastIndex;
        }
      } else if (node.nodeType === 8
    /* Node.COMMENT_NODE */
    ) {
        if (node.data === marker) {
          var _parent = node.parentNode; // Add a new marker node to be the startNode of the Part if any of
          // the following are true:
          //  * We don't have a previousSibling
          //  * The previousSibling is already the start of a previous part

          if (node.previousSibling === null || index === lastPartIndex) {
            index++;

            _parent.insertBefore(createMarker(), node);
          }

          lastPartIndex = index;
          this.parts.push({
            type: 'node',
            index: index
          }); // If we don't have a nextSibling, keep this node so we have an end.
          // Else, we can remove it to save future costs.

          if (node.nextSibling === null) {
            node.data = '';
          } else {
            nodesToRemove.push(node);
            index--;
          }

          partIndex++;
        } else {
          var _i2 = -1;

          while ((_i2 = node.data.indexOf(marker, _i2 + 1)) !== -1) {
            // Comment node has a binding marker inside, make an inactive part
            // The binding won't work, but subsequent bindings will
            // TODO (justinfagnani): consider whether it's even worth it to
            // make bindings in comments work
            this.parts.push({
              type: 'node',
              index: -1
            });
            partIndex++;
          }
        }
      }
  } // Remove text binding nodes after the walk to not disturb the TreeWalker


  for (var _i3 = 0, _nodesToRemove = nodesToRemove; _i3 < _nodesToRemove.length; _i3++) {
    var n = _nodesToRemove[_i3];
    n.parentNode.removeChild(n);
  }
};

var endsWith = function endsWith(str, suffix) {
  var index = str.length - suffix.length;
  return index >= 0 && str.slice(index) === suffix;
};

var isTemplatePartActive = function isTemplatePartActive(part) {
  return part.index !== -1;
}; // Allows `document.createComment('')` to be renamed for a
// small manual size-savings.

var createMarker = function createMarker() {
  return document.createComment('');
};
/**
 * This regex extracts the attribute name preceding an attribute-position
 * expression. It does this by matching the syntax allowed for attributes
 * against the string literal directly preceding the expression, assuming that
 * the expression is in an attribute-value position.
 *
 * See attributes in the HTML spec:
 * https://www.w3.org/TR/html5/syntax.html#elements-attributes
 *
 * " \x09\x0a\x0c\x0d" are HTML space characters:
 * https://www.w3.org/TR/html5/infrastructure.html#space-characters
 *
 * "\0-\x1F\x7F-\x9F" are Unicode control characters, which includes every
 * space character except " ".
 *
 * So an attribute is:
 *  * The name: any character except a control character, space character, ('),
 *    ("), ">", "=", or "/"
 *  * Followed by zero or more space characters
 *  * Followed by "="
 *  * Followed by zero or more space characters
 *  * Followed by:
 *    * Any character except space, ('), ("), "<", ">", "=", (`), or
 *    * (") then any non-("), or
 *    * (') then any non-(')
 */

var lastAttributeNameRegex = // eslint-disable-next-line no-control-regex
/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var walkerNodeFilter = 133
/* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */
;
/**
 * Removes the list of nodes from a Template safely. In addition to removing
 * nodes from the Template, the Template part indices are updated to match
 * the mutated Template DOM.
 *
 * As the template is walked the removal state is tracked and
 * part indices are adjusted as needed.
 *
 * div
 *   div#1 (remove) <-- start removing (removing node is div#1)
 *     div
 *       div#2 (remove)  <-- continue removing (removing node is still div#1)
 *         div
 * div <-- stop removing since previous sibling is the removing node (div#1,
 * removed 4 nodes)
 */

function removeNodesFromTemplate(template, nodesToRemove) {
  var content = template.element.content,
      parts = template.parts;
  var walker = document.createTreeWalker(content, walkerNodeFilter, null, false);
  var partIndex = nextActiveIndexInTemplateParts(parts);
  var part = parts[partIndex];
  var nodeIndex = -1;
  var removeCount = 0;
  var nodesToRemoveInTemplate = [];
  var currentRemovingNode = null;

  while (walker.nextNode()) {
    nodeIndex++;
    var node = walker.currentNode; // End removal if stepped past the removing node

    if (node.previousSibling === currentRemovingNode) {
      currentRemovingNode = null;
    } // A node to remove was found in the template


    if (nodesToRemove.has(node)) {
      nodesToRemoveInTemplate.push(node); // Track node we're removing

      if (currentRemovingNode === null) {
        currentRemovingNode = node;
      }
    } // When removing, increment count by which to adjust subsequent part indices


    if (currentRemovingNode !== null) {
      removeCount++;
    }

    while (part !== undefined && part.index === nodeIndex) {
      // If part is in a removed node deactivate it by setting index to -1 or
      // adjust the index as needed.
      part.index = currentRemovingNode !== null ? -1 : part.index - removeCount; // go to the next active part.

      partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
      part = parts[partIndex];
    }
  }

  nodesToRemoveInTemplate.forEach(function (n) {
    return n.parentNode.removeChild(n);
  });
}

var countNodes = function countNodes(node) {
  var count = node.nodeType === 11
  /* Node.DOCUMENT_FRAGMENT_NODE */
  ? 0 : 1;
  var walker = document.createTreeWalker(node, walkerNodeFilter, null, false);

  while (walker.nextNode()) {
    count++;
  }

  return count;
};

var nextActiveIndexInTemplateParts = function nextActiveIndexInTemplateParts(parts) {
  var startIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;

  for (var i = startIndex + 1; i < parts.length; i++) {
    var part = parts[i];

    if (isTemplatePartActive(part)) {
      return i;
    }
  }

  return -1;
};
/**
 * Inserts the given node into the Template, optionally before the given
 * refNode. In addition to inserting the node into the Template, the Template
 * part indices are updated to match the mutated Template DOM.
 */


function insertNodeIntoTemplate(template, node) {
  var refNode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var content = template.element.content,
      parts = template.parts; // If there's no refNode, then put node at end of template.
  // No part indices need to be shifted in this case.

  if (refNode === null || refNode === undefined) {
    content.appendChild(node);
    return;
  }

  var walker = document.createTreeWalker(content, walkerNodeFilter, null, false);
  var partIndex = nextActiveIndexInTemplateParts(parts);
  var insertCount = 0;
  var walkerIndex = -1;

  while (walker.nextNode()) {
    walkerIndex++;
    var walkerNode = walker.currentNode;

    if (walkerNode === refNode) {
      insertCount = countNodes(node);
      refNode.parentNode.insertBefore(node, refNode);
    }

    while (partIndex !== -1 && parts[partIndex].index === walkerIndex) {
      // If we've inserted the node, simply adjust all subsequent parts
      if (insertCount > 0) {
        while (partIndex !== -1) {
          parts[partIndex].index += insertCount;
          partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
        }

        return;
      }

      partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
    }
  }
}

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var directives = new WeakMap();
/**
 * Brands a function as a directive factory function so that lit-html will call
 * the function during template rendering, rather than passing as a value.
 *
 * A _directive_ is a function that takes a Part as an argument. It has the
 * signature: `(part: Part) => void`.
 *
 * A directive _factory_ is a function that takes arguments for data and
 * configuration and returns a directive. Users of directive usually refer to
 * the directive factory as the directive. For example, "The repeat directive".
 *
 * Usually a template author will invoke a directive factory in their template
 * with relevant arguments, which will then return a directive function.
 *
 * Here's an example of using the `repeat()` directive factory that takes an
 * array and a function to render an item:
 *
 * ```js
 * html`<ul><${repeat(items, (item) => html`<li>${item}</li>`)}</ul>`
 * ```
 *
 * When `repeat` is invoked, it returns a directive function that closes over
 * `items` and the template function. When the outer template is rendered, the
 * return directive function is called with the Part for the expression.
 * `repeat` then performs it's custom logic to render multiple items.
 *
 * @param f The directive factory function. Must be a function that returns a
 * function of the signature `(part: Part) => void`. The returned function will
 * be called with the part object.
 *
 * @example
 *
 * import {directive, html} from 'lit-html';
 *
 * const immutable = directive((v) => (part) => {
 *   if (part.value !== v) {
 *     part.setValue(v)
 *   }
 * });
 */

var directive = function directive(f) {
  return function () {
    var d = f.apply(void 0, arguments);
    directives.set(d, true);
    return d;
  };
};
var isDirective = function isDirective(o) {
  return typeof o === 'function' && directives.has(o);
};

/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * A sentinel value that signals that a value was handled by a directive and
 * should not be written to the DOM.
 */
var noChange = {};
/**
 * A sentinel value that signals a NodePart to fully clear its content.
 */

var nothing = {};

function _arrayLikeToArray$7(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray$7(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _unsupportedIterableToArray$7(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray$7(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$7(o, minLen);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray$7(arr) || _nonIterableSpread();
}

function _createForOfIteratorHelper$6(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$6(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray$6(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$6(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$6(o, minLen); }

function _arrayLikeToArray$6(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
/**
 * An instance of a `Template` that can be attached to the DOM and updated
 * with new values.
 */

var TemplateInstance = /*#__PURE__*/function () {
  function TemplateInstance(template, processor, options) {
    _classCallCheck(this, TemplateInstance);

    this.__parts = [];
    this.template = template;
    this.processor = processor;
    this.options = options;
  }

  _createClass(TemplateInstance, [{
    key: "update",
    value: function update(values) {
      var i = 0;

      var _iterator = _createForOfIteratorHelper$6(this.__parts),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var part = _step.value;

          if (part !== undefined) {
            part.setValue(values[i]);
          }

          i++;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var _iterator2 = _createForOfIteratorHelper$6(this.__parts),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _part = _step2.value;

          if (_part !== undefined) {
            _part.commit();
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }, {
    key: "_clone",
    value: function _clone() {
      // There are a number of steps in the lifecycle of a template instance's
      // DOM fragment:
      //  1. Clone - create the instance fragment
      //  2. Adopt - adopt into the main document
      //  3. Process - find part markers and create parts
      //  4. Upgrade - upgrade custom elements
      //  5. Update - set node, attribute, property, etc., values
      //  6. Connect - connect to the document. Optional and outside of this
      //     method.
      //
      // We have a few constraints on the ordering of these steps:
      //  * We need to upgrade before updating, so that property values will pass
      //    through any property setters.
      //  * We would like to process before upgrading so that we're sure that the
      //    cloned fragment is inert and not disturbed by self-modifying DOM.
      //  * We want custom elements to upgrade even in disconnected fragments.
      //
      // Given these constraints, with full custom elements support we would
      // prefer the order: Clone, Process, Adopt, Upgrade, Update, Connect
      //
      // But Safari does not implement CustomElementRegistry#upgrade, so we
      // can not implement that order and still have upgrade-before-update and
      // upgrade disconnected fragments. So we instead sacrifice the
      // process-before-upgrade constraint, since in Custom Elements v1 elements
      // must not modify their light DOM in the constructor. We still have issues
      // when co-existing with CEv0 elements like Polymer 1, and with polyfills
      // that don't strictly adhere to the no-modification rule because shadow
      // DOM, which may be created in the constructor, is emulated by being placed
      // in the light DOM.
      //
      // The resulting order is on native is: Clone, Adopt, Upgrade, Process,
      // Update, Connect. document.importNode() performs Clone, Adopt, and Upgrade
      // in one step.
      //
      // The Custom Elements v1 polyfill supports upgrade(), so the order when
      // polyfilled is the more ideal: Clone, Process, Adopt, Upgrade, Update,
      // Connect.
      var fragment = isCEPolyfill ? this.template.element.content.cloneNode(true) : document.importNode(this.template.element.content, true);
      var stack = [];
      var parts = this.template.parts; // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be null

      var walker = document.createTreeWalker(fragment, 133
      /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */
      , null, false);
      var partIndex = 0;
      var nodeIndex = 0;
      var part;
      var node = walker.nextNode(); // Loop through all the nodes and parts of a template

      while (partIndex < parts.length) {
        part = parts[partIndex];

        if (!isTemplatePartActive(part)) {
          this.__parts.push(undefined);

          partIndex++;
          continue;
        } // Progress the tree walker until we find our next part's node.
        // Note that multiple parts may share the same node (attribute parts
        // on a single element), so this loop may not run at all.


        while (nodeIndex < part.index) {
          nodeIndex++;

          if (node.nodeName === 'TEMPLATE') {
            stack.push(node);
            walker.currentNode = node.content;
          }

          if ((node = walker.nextNode()) === null) {
            // We've exhausted the content inside a nested template element.
            // Because we still have parts (the outer for-loop), we know:
            // - There is a template in the stack
            // - The walker will find a nextNode outside the template
            walker.currentNode = stack.pop();
            node = walker.nextNode();
          }
        } // We've arrived at our part's node.


        if (part.type === 'node') {
          var _part2 = this.processor.handleTextExpression(this.options);

          _part2.insertAfterNode(node.previousSibling);

          this.__parts.push(_part2);
        } else {
          var _this$__parts;

          (_this$__parts = this.__parts).push.apply(_this$__parts, _toConsumableArray(this.processor.handleAttributeExpressions(node, part.name, part.strings, this.options)));
        }

        partIndex++;
      }

      if (isCEPolyfill) {
        document.adoptNode(fragment);
        customElements.upgrade(fragment);
      }

      return fragment;
    }
  }]);

  return TemplateInstance;
}();

/**
 * Our TrustedTypePolicy for HTML which is declared using the html template
 * tag function.
 *
 * That HTML is a developer-authored constant, and is parsed with innerHTML
 * before any untrusted expressions have been mixed in. Therefor it is
 * considered safe by construction.
 */

var policy = window.trustedTypes && trustedTypes.createPolicy('lit-html', {
  createHTML: function createHTML(s) {
    return s;
  }
});
var commentMarker = " ".concat(marker, " ");
/**
 * The return type of `html`, which holds a Template and the values from
 * interpolated expressions.
 */

var TemplateResult = /*#__PURE__*/function () {
  function TemplateResult(strings, values, type, processor) {
    _classCallCheck(this, TemplateResult);

    this.strings = strings;
    this.values = values;
    this.type = type;
    this.processor = processor;
  }
  /**
   * Returns a string of HTML used to create a `<template>` element.
   */


  _createClass(TemplateResult, [{
    key: "getHTML",
    value: function getHTML() {
      var l = this.strings.length - 1;
      var html = '';
      var isCommentBinding = false;

      for (var i = 0; i < l; i++) {
        var s = this.strings[i]; // For each binding we want to determine the kind of marker to insert
        // into the template source before it's parsed by the browser's HTML
        // parser. The marker type is based on whether the expression is in an
        // attribute, text, or comment position.
        //   * For node-position bindings we insert a comment with the marker
        //     sentinel as its text content, like <!--{{lit-guid}}-->.
        //   * For attribute bindings we insert just the marker sentinel for the
        //     first binding, so that we support unquoted attribute bindings.
        //     Subsequent bindings can use a comment marker because multi-binding
        //     attributes must be quoted.
        //   * For comment bindings we insert just the marker sentinel so we don't
        //     close the comment.
        //
        // The following code scans the template source, but is *not* an HTML
        // parser. We don't need to track the tree structure of the HTML, only
        // whether a binding is inside a comment, and if not, if it appears to be
        // the first binding in an attribute.

        var commentOpen = s.lastIndexOf('<!--'); // We're in comment position if we have a comment open with no following
        // comment close. Because <-- can appear in an attribute value there can
        // be false positives.

        isCommentBinding = (commentOpen > -1 || isCommentBinding) && s.indexOf('-->', commentOpen + 1) === -1; // Check to see if we have an attribute-like sequence preceding the
        // expression. This can match "name=value" like structures in text,
        // comments, and attribute values, so there can be false-positives.

        var attributeMatch = lastAttributeNameRegex.exec(s);

        if (attributeMatch === null) {
          // We're only in this branch if we don't have a attribute-like
          // preceding sequence. For comments, this guards against unusual
          // attribute values like <div foo="<!--${'bar'}">. Cases like
          // <!-- foo=${'bar'}--> are handled correctly in the attribute branch
          // below.
          html += s + (isCommentBinding ? commentMarker : nodeMarker);
        } else {
          // For attributes we use just a marker sentinel, and also append a
          // $lit$ suffix to the name to opt-out of attribute-specific parsing
          // that IE and Edge do for style and certain SVG attributes.
          html += s.substr(0, attributeMatch.index) + attributeMatch[1] + attributeMatch[2] + boundAttributeSuffix + attributeMatch[3] + marker;
        }
      }

      html += this.strings[l];
      return html;
    }
  }, {
    key: "getTemplateElement",
    value: function getTemplateElement() {
      var template = document.createElement('template');
      var value = this.getHTML();

      if (policy !== undefined) {
        // this is secure because `this.strings` is a TemplateStringsArray.
        // TODO: validate this when
        // https://github.com/tc39/proposal-array-is-template-object is
        // implemented.
        value = policy.createHTML(value);
      }

      template.innerHTML = value;
      return template;
    }
  }]);

  return TemplateResult;
}();

function _createSuper$5(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$5(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$5() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _createForOfIteratorHelper$5(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$5(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray$5(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$5(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$5(o, minLen); }

function _arrayLikeToArray$5(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
var isPrimitive = function isPrimitive(value) {
  return value === null || !(_typeof(value) === 'object' || typeof value === 'function');
};
var isIterable = function isIterable(value) {
  return Array.isArray(value) || // eslint-disable-next-line @typescript-eslint/no-explicit-any
  !!(value && value[Symbol.iterator]);
};
/**
 * Writes attribute values to the DOM for a group of AttributeParts bound to a
 * single attribute. The value is only set once even if there are multiple parts
 * for an attribute.
 */

var AttributeCommitter = /*#__PURE__*/function () {
  function AttributeCommitter(element, name, strings) {
    _classCallCheck(this, AttributeCommitter);

    this.dirty = true;
    this.element = element;
    this.name = name;
    this.strings = strings;
    this.parts = [];

    for (var i = 0; i < strings.length - 1; i++) {
      this.parts[i] = this._createPart();
    }
  }
  /**
   * Creates a single part. Override this to create a differnt type of part.
   */


  _createClass(AttributeCommitter, [{
    key: "_createPart",
    value: function _createPart() {
      return new AttributePart(this);
    }
  }, {
    key: "_getValue",
    value: function _getValue() {
      var strings = this.strings;
      var l = strings.length - 1;
      var parts = this.parts; // If we're assigning an attribute via syntax like:
      //    attr="${foo}"  or  attr=${foo}
      // but not
      //    attr="${foo} ${bar}" or attr="${foo} baz"
      // then we don't want to coerce the attribute value into one long
      // string. Instead we want to just return the value itself directly,
      // so that sanitizeDOMValue can get the actual value rather than
      // String(value)
      // The exception is if v is an array, in which case we do want to smash
      // it together into a string without calling String() on the array.
      //
      // This also allows trusted values (when using TrustedTypes) being
      // assigned to DOM sinks without being stringified in the process.

      if (l === 1 && strings[0] === '' && strings[1] === '') {
        var v = parts[0].value;

        if (_typeof(v) === 'symbol') {
          return String(v);
        }

        if (typeof v === 'string' || !isIterable(v)) {
          return v;
        }
      }

      var text = '';

      for (var i = 0; i < l; i++) {
        text += strings[i];
        var part = parts[i];

        if (part !== undefined) {
          var _v = part.value;

          if (isPrimitive(_v) || !isIterable(_v)) {
            text += typeof _v === 'string' ? _v : String(_v);
          } else {
            var _iterator = _createForOfIteratorHelper$5(_v),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var t = _step.value;
                text += typeof t === 'string' ? t : String(t);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        }
      }

      text += strings[l];
      return text;
    }
  }, {
    key: "commit",
    value: function commit() {
      if (this.dirty) {
        this.dirty = false;
        this.element.setAttribute(this.name, this._getValue());
      }
    }
  }]);

  return AttributeCommitter;
}();
/**
 * A Part that controls all or part of an attribute value.
 */

var AttributePart = /*#__PURE__*/function () {
  function AttributePart(committer) {
    _classCallCheck(this, AttributePart);

    this.value = undefined;
    this.committer = committer;
  }

  _createClass(AttributePart, [{
    key: "setValue",
    value: function setValue(value) {
      if (value !== noChange && (!isPrimitive(value) || value !== this.value)) {
        this.value = value; // If the value is a not a directive, dirty the committer so that it'll
        // call setAttribute. If the value is a directive, it'll dirty the
        // committer if it calls setValue().

        if (!isDirective(value)) {
          this.committer.dirty = true;
        }
      }
    }
  }, {
    key: "commit",
    value: function commit() {
      while (isDirective(this.value)) {
        var directive = this.value;
        this.value = noChange;
        directive(this);
      }

      if (this.value === noChange) {
        return;
      }

      this.committer.commit();
    }
  }]);

  return AttributePart;
}();
/**
 * A Part that controls a location within a Node tree. Like a Range, NodePart
 * has start and end locations and can set and update the Nodes between those
 * locations.
 *
 * NodeParts support several value types: primitives, Nodes, TemplateResults,
 * as well as arrays and iterables of those types.
 */

var NodePart = /*#__PURE__*/function () {
  function NodePart(options) {
    _classCallCheck(this, NodePart);

    this.value = undefined;
    this.__pendingValue = undefined;
    this.options = options;
  }
  /**
   * Appends this part into a container.
   *
   * This part must be empty, as its contents are not automatically moved.
   */


  _createClass(NodePart, [{
    key: "appendInto",
    value: function appendInto(container) {
      this.startNode = container.appendChild(createMarker());
      this.endNode = container.appendChild(createMarker());
    }
    /**
     * Inserts this part after the `ref` node (between `ref` and `ref`'s next
     * sibling). Both `ref` and its next sibling must be static, unchanging nodes
     * such as those that appear in a literal section of a template.
     *
     * This part must be empty, as its contents are not automatically moved.
     */

  }, {
    key: "insertAfterNode",
    value: function insertAfterNode(ref) {
      this.startNode = ref;
      this.endNode = ref.nextSibling;
    }
    /**
     * Appends this part into a parent part.
     *
     * This part must be empty, as its contents are not automatically moved.
     */

  }, {
    key: "appendIntoPart",
    value: function appendIntoPart(part) {
      part.__insert(this.startNode = createMarker());

      part.__insert(this.endNode = createMarker());
    }
    /**
     * Inserts this part after the `ref` part.
     *
     * This part must be empty, as its contents are not automatically moved.
     */

  }, {
    key: "insertAfterPart",
    value: function insertAfterPart(ref) {
      ref.__insert(this.startNode = createMarker());

      this.endNode = ref.endNode;
      ref.endNode = this.startNode;
    }
  }, {
    key: "setValue",
    value: function setValue(value) {
      this.__pendingValue = value;
    }
  }, {
    key: "commit",
    value: function commit() {
      if (this.startNode.parentNode === null) {
        return;
      }

      while (isDirective(this.__pendingValue)) {
        var directive = this.__pendingValue;
        this.__pendingValue = noChange;
        directive(this);
      }

      var value = this.__pendingValue;

      if (value === noChange) {
        return;
      }

      if (isPrimitive(value)) {
        if (value !== this.value) {
          this.__commitText(value);
        }
      } else if (value instanceof TemplateResult) {
        this.__commitTemplateResult(value);
      } else if (value instanceof Node) {
        this.__commitNode(value);
      } else if (isIterable(value)) {
        this.__commitIterable(value);
      } else if (value === nothing) {
        this.value = nothing;
        this.clear();
      } else {
        // Fallback, will render the string representation
        this.__commitText(value);
      }
    }
  }, {
    key: "__insert",
    value: function __insert(node) {
      this.endNode.parentNode.insertBefore(node, this.endNode);
    }
  }, {
    key: "__commitNode",
    value: function __commitNode(value) {
      if (this.value === value) {
        return;
      }

      this.clear();

      this.__insert(value);

      this.value = value;
    }
  }, {
    key: "__commitText",
    value: function __commitText(value) {
      var node = this.startNode.nextSibling;
      value = value == null ? '' : value; // If `value` isn't already a string, we explicitly convert it here in case
      // it can't be implicitly converted - i.e. it's a symbol.

      var valueAsString = typeof value === 'string' ? value : String(value);

      if (node === this.endNode.previousSibling && node.nodeType === 3
      /* Node.TEXT_NODE */
      ) {
          // If we only have a single text node between the markers, we can just
          // set its value, rather than replacing it.
          // TODO(justinfagnani): Can we just check if this.value is primitive?
          node.data = valueAsString;
        } else {
        this.__commitNode(document.createTextNode(valueAsString));
      }

      this.value = value;
    }
  }, {
    key: "__commitTemplateResult",
    value: function __commitTemplateResult(value) {
      var template = this.options.templateFactory(value);

      if (this.value instanceof TemplateInstance && this.value.template === template) {
        this.value.update(value.values);
      } else {
        // Make sure we propagate the template processor from the TemplateResult
        // so that we use its syntax extension, etc. The template factory comes
        // from the render function options so that it can control template
        // caching and preprocessing.
        var instance = new TemplateInstance(template, value.processor, this.options);

        var fragment = instance._clone();

        instance.update(value.values);

        this.__commitNode(fragment);

        this.value = instance;
      }
    }
  }, {
    key: "__commitIterable",
    value: function __commitIterable(value) {
      // For an Iterable, we create a new InstancePart per item, then set its
      // value to the item. This is a little bit of overhead for every item in
      // an Iterable, but it lets us recurse easily and efficiently update Arrays
      // of TemplateResults that will be commonly returned from expressions like:
      // array.map((i) => html`${i}`), by reusing existing TemplateInstances.
      // If _value is an array, then the previous render was of an
      // iterable and _value will contain the NodeParts from the previous
      // render. If _value is not an array, clear this part and make a new
      // array for NodeParts.
      if (!Array.isArray(this.value)) {
        this.value = [];
        this.clear();
      } // Lets us keep track of how many items we stamped so we can clear leftover
      // items from a previous render


      var itemParts = this.value;
      var partIndex = 0;
      var itemPart;

      var _iterator2 = _createForOfIteratorHelper$5(value),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var item = _step2.value;
          // Try to reuse an existing part
          itemPart = itemParts[partIndex]; // If no existing part, create a new one

          if (itemPart === undefined) {
            itemPart = new NodePart(this.options);
            itemParts.push(itemPart);

            if (partIndex === 0) {
              itemPart.appendIntoPart(this);
            } else {
              itemPart.insertAfterPart(itemParts[partIndex - 1]);
            }
          }

          itemPart.setValue(item);
          itemPart.commit();
          partIndex++;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      if (partIndex < itemParts.length) {
        // Truncate the parts array so _value reflects the current state
        itemParts.length = partIndex;
        this.clear(itemPart && itemPart.endNode);
      }
    }
  }, {
    key: "clear",
    value: function clear() {
      var startNode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.startNode;
      removeNodes(this.startNode.parentNode, startNode.nextSibling, this.endNode);
    }
  }]);

  return NodePart;
}();
/**
 * Implements a boolean attribute, roughly as defined in the HTML
 * specification.
 *
 * If the value is truthy, then the attribute is present with a value of
 * ''. If the value is falsey, the attribute is removed.
 */

var BooleanAttributePart = /*#__PURE__*/function () {
  function BooleanAttributePart(element, name, strings) {
    _classCallCheck(this, BooleanAttributePart);

    this.value = undefined;
    this.__pendingValue = undefined;

    if (strings.length !== 2 || strings[0] !== '' || strings[1] !== '') {
      throw new Error('Boolean attributes can only contain a single expression');
    }

    this.element = element;
    this.name = name;
    this.strings = strings;
  }

  _createClass(BooleanAttributePart, [{
    key: "setValue",
    value: function setValue(value) {
      this.__pendingValue = value;
    }
  }, {
    key: "commit",
    value: function commit() {
      while (isDirective(this.__pendingValue)) {
        var directive = this.__pendingValue;
        this.__pendingValue = noChange;
        directive(this);
      }

      if (this.__pendingValue === noChange) {
        return;
      }

      var value = !!this.__pendingValue;

      if (this.value !== value) {
        if (value) {
          this.element.setAttribute(this.name, '');
        } else {
          this.element.removeAttribute(this.name);
        }

        this.value = value;
      }

      this.__pendingValue = noChange;
    }
  }]);

  return BooleanAttributePart;
}();
/**
 * Sets attribute values for PropertyParts, so that the value is only set once
 * even if there are multiple parts for a property.
 *
 * If an expression controls the whole property value, then the value is simply
 * assigned to the property under control. If there are string literals or
 * multiple expressions, then the strings are expressions are interpolated into
 * a string first.
 */

var PropertyCommitter = /*#__PURE__*/function (_AttributeCommitter) {
  _inherits(PropertyCommitter, _AttributeCommitter);

  var _super = _createSuper$5(PropertyCommitter);

  function PropertyCommitter(element, name, strings) {
    var _this;

    _classCallCheck(this, PropertyCommitter);

    _this = _super.call(this, element, name, strings);
    _this.single = strings.length === 2 && strings[0] === '' && strings[1] === '';
    return _this;
  }

  _createClass(PropertyCommitter, [{
    key: "_createPart",
    value: function _createPart() {
      return new PropertyPart(this);
    }
  }, {
    key: "_getValue",
    value: function _getValue() {
      if (this.single) {
        return this.parts[0].value;
      }

      return _get(_getPrototypeOf(PropertyCommitter.prototype), "_getValue", this).call(this);
    }
  }, {
    key: "commit",
    value: function commit() {
      if (this.dirty) {
        this.dirty = false; // eslint-disable-next-line @typescript-eslint/no-explicit-any

        this.element[this.name] = this._getValue();
      }
    }
  }]);

  return PropertyCommitter;
}(AttributeCommitter);
var PropertyPart = /*#__PURE__*/function (_AttributePart) {
  _inherits(PropertyPart, _AttributePart);

  var _super2 = _createSuper$5(PropertyPart);

  function PropertyPart() {
    _classCallCheck(this, PropertyPart);

    return _super2.apply(this, arguments);
  }

  return PropertyPart;
}(AttributePart); // Detect event listener options support. If the `capture` property is read
// from the options object, then options are supported. If not, then the third
// argument to add/removeEventListener is interpreted as the boolean capture
// value so we should only pass the `capture` property.

var eventOptionsSupported = false; // Wrap into an IIFE because MS Edge <= v41 does not support having try/catch
// blocks right into the body of a module

(function () {
  try {
    var options = {
      get capture() {
        eventOptionsSupported = true;
        return false;
      }

    }; // eslint-disable-next-line @typescript-eslint/no-explicit-any

    window.addEventListener('test', options, options); // eslint-disable-next-line @typescript-eslint/no-explicit-any

    window.removeEventListener('test', options, options);
  } catch (_e) {// event options not supported
  }
})();

var EventPart = /*#__PURE__*/function () {
  function EventPart(element, eventName, eventContext) {
    var _this2 = this;

    _classCallCheck(this, EventPart);

    this.value = undefined;
    this.__pendingValue = undefined;
    this.element = element;
    this.eventName = eventName;
    this.eventContext = eventContext;

    this.__boundHandleEvent = function (e) {
      return _this2.handleEvent(e);
    };
  }

  _createClass(EventPart, [{
    key: "setValue",
    value: function setValue(value) {
      this.__pendingValue = value;
    }
  }, {
    key: "commit",
    value: function commit() {
      while (isDirective(this.__pendingValue)) {
        var directive = this.__pendingValue;
        this.__pendingValue = noChange;
        directive(this);
      }

      if (this.__pendingValue === noChange) {
        return;
      }

      var newListener = this.__pendingValue;
      var oldListener = this.value;
      var shouldRemoveListener = newListener == null || oldListener != null && (newListener.capture !== oldListener.capture || newListener.once !== oldListener.once || newListener.passive !== oldListener.passive);
      var shouldAddListener = newListener != null && (oldListener == null || shouldRemoveListener);

      if (shouldRemoveListener) {
        this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options);
      }

      if (shouldAddListener) {
        this.__options = getOptions(newListener);
        this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options);
      }

      this.value = newListener;
      this.__pendingValue = noChange;
    }
  }, {
    key: "handleEvent",
    value: function handleEvent(event) {
      if (typeof this.value === 'function') {
        this.value.call(this.eventContext || this.element, event);
      } else {
        this.value.handleEvent(event);
      }
    }
  }]);

  return EventPart;
}(); // We copy options because of the inconsistent behavior of browsers when reading
// the third argument of add/removeEventListener. IE11 doesn't support options
// at all. Chrome 41 only reads `capture` if the argument is an object.

var getOptions = function getOptions(o) {
  return o && (eventOptionsSupported ? {
    capture: o.capture,
    passive: o.passive,
    once: o.once
  } : o.capture);
};

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * The default TemplateFactory which caches Templates keyed on
 * result.type and result.strings.
 */

function templateFactory(result) {
  var templateCache = templateCaches$1.get(result.type);

  if (templateCache === undefined) {
    templateCache = {
      stringsArray: new WeakMap(),
      keyString: new Map()
    };
    templateCaches$1.set(result.type, templateCache);
  }

  var template = templateCache.stringsArray.get(result.strings);

  if (template !== undefined) {
    return template;
  } // If the TemplateStringsArray is new, generate a key from the strings
  // This key is shared between all templates with identical content


  var key = result.strings.join(marker); // Check if we already have a Template for this key

  template = templateCache.keyString.get(key);

  if (template === undefined) {
    // If we have not seen this key before, create a new Template
    template = new Template(result, result.getTemplateElement()); // Cache the Template for this key

    templateCache.keyString.set(key, template);
  } // Cache all future queries for this TemplateStringsArray


  templateCache.stringsArray.set(result.strings, template);
  return template;
}
var templateCaches$1 = new Map();

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var parts = new WeakMap();
/**
 * Renders a template result or other value to a container.
 *
 * To update a container with new values, reevaluate the template literal and
 * call `render` with the new result.
 *
 * @param result Any value renderable by NodePart - typically a TemplateResult
 *     created by evaluating a template tag like `html` or `svg`.
 * @param container A DOM parent to render to. The entire contents are either
 *     replaced, or efficiently updated if the same result type was previous
 *     rendered there.
 * @param options RenderOptions for the entire render tree rendered to this
 *     container. Render options must *not* change between renders to the same
 *     container, as those changes will not effect previously rendered DOM.
 */

var render$1 = function render(result, container, options) {
  var part = parts.get(container);

  if (part === undefined) {
    removeNodes(container, container.firstChild);
    parts.set(container, part = new NodePart(Object.assign({
      templateFactory: templateFactory
    }, options)));
    part.appendInto(container);
  }

  part.setValue(result);
  part.commit();
};

/**
 * Creates Parts when a template is instantiated.
 */

var DefaultTemplateProcessor = /*#__PURE__*/function () {
  function DefaultTemplateProcessor() {
    _classCallCheck(this, DefaultTemplateProcessor);
  }

  _createClass(DefaultTemplateProcessor, [{
    key: "handleAttributeExpressions",
    value:
    /**
     * Create parts for an attribute-position binding, given the event, attribute
     * name, and string literals.
     *
     * @param element The element containing the binding
     * @param name  The attribute name
     * @param strings The string literals. There are always at least two strings,
     *   event for fully-controlled bindings with a single expression.
     */
    function handleAttributeExpressions(element, name, strings, options) {
      var prefix = name[0];

      if (prefix === '.') {
        var _committer = new PropertyCommitter(element, name.slice(1), strings);

        return _committer.parts;
      }

      if (prefix === '@') {
        return [new EventPart(element, name.slice(1), options.eventContext)];
      }

      if (prefix === '?') {
        return [new BooleanAttributePart(element, name.slice(1), strings)];
      }

      var committer = new AttributeCommitter(element, name, strings);
      return committer.parts;
    }
    /**
     * Create parts for a text-position binding.
     * @param templateFactory
     */

  }, {
    key: "handleTextExpression",
    value: function handleTextExpression(options) {
      return new NodePart(options);
    }
  }]);

  return DefaultTemplateProcessor;
}();
var defaultTemplateProcessor = new DefaultTemplateProcessor();

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
// This line will be used in regexes to search for lit-html usage.
// TODO(justinfagnani): inject version number at build time

if (typeof window !== 'undefined') {
  (window['litHtmlVersions'] || (window['litHtmlVersions'] = [])).push('1.4.1');
}
/**
 * Interprets a template literal as an HTML template that can efficiently
 * render to and update a container.
 */


var html = function html(strings) {
  for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }

  return new TemplateResult(strings, values, 'html', defaultTemplateProcessor);
};

var getTemplateCacheKey = function getTemplateCacheKey(type, scopeName) {
  return "".concat(type, "--").concat(scopeName);
};

var compatibleShadyCSSVersion = true;

if (typeof window.ShadyCSS === 'undefined') {
  compatibleShadyCSSVersion = false;
} else if (typeof window.ShadyCSS.prepareTemplateDom === 'undefined') {
  console.warn("Incompatible ShadyCSS version detected. " + "Please update to at least @webcomponents/webcomponentsjs@2.0.2 and " + "@webcomponents/shadycss@1.3.1.");
  compatibleShadyCSSVersion = false;
}
/**
 * Template factory which scopes template DOM using ShadyCSS.
 * @param scopeName {string}
 */


var shadyTemplateFactory = function shadyTemplateFactory(scopeName) {
  return function (result) {
    var cacheKey = getTemplateCacheKey(result.type, scopeName);
    var templateCache = templateCaches$1.get(cacheKey);

    if (templateCache === undefined) {
      templateCache = {
        stringsArray: new WeakMap(),
        keyString: new Map()
      };
      templateCaches$1.set(cacheKey, templateCache);
    }

    var template = templateCache.stringsArray.get(result.strings);

    if (template !== undefined) {
      return template;
    }

    var key = result.strings.join(marker);
    template = templateCache.keyString.get(key);

    if (template === undefined) {
      var element = result.getTemplateElement();

      if (compatibleShadyCSSVersion) {
        window.ShadyCSS.prepareTemplateDom(element, scopeName);
      }

      template = new Template(result, element);
      templateCache.keyString.set(key, template);
    }

    templateCache.stringsArray.set(result.strings, template);
    return template;
  };
};
var TEMPLATE_TYPES = ['html', 'svg'];
/**
 * Removes all style elements from Templates for the given scopeName.
 */

var removeStylesFromLitTemplates = function removeStylesFromLitTemplates(scopeName) {
  TEMPLATE_TYPES.forEach(function (type) {
    var templates = templateCaches$1.get(getTemplateCacheKey(type, scopeName));

    if (templates !== undefined) {
      templates.keyString.forEach(function (template) {
        var content = template.element.content; // IE 11 doesn't support the iterable param Set constructor

        var styles = new Set();
        Array.from(content.querySelectorAll('style')).forEach(function (s) {
          styles.add(s);
        });
        removeNodesFromTemplate(template, styles);
      });
    }
  });
};

var shadyRenderSet = new Set();
/**
 * For the given scope name, ensures that ShadyCSS style scoping is performed.
 * This is done just once per scope name so the fragment and template cannot
 * be modified.
 * (1) extracts styles from the rendered fragment and hands them to ShadyCSS
 * to be scoped and appended to the document
 * (2) removes style elements from all lit-html Templates for this scope name.
 *
 * Note, <style> elements can only be placed into templates for the
 * initial rendering of the scope. If <style> elements are included in templates
 * dynamically rendered to the scope (after the first scope render), they will
 * not be scoped and the <style> will be left in the template and rendered
 * output.
 */

var prepareTemplateStyles = function prepareTemplateStyles(scopeName, renderedDOM, template) {
  shadyRenderSet.add(scopeName); // If `renderedDOM` is stamped from a Template, then we need to edit that
  // Template's underlying template element. Otherwise, we create one here
  // to give to ShadyCSS, which still requires one while scoping.

  var templateElement = !!template ? template.element : document.createElement('template'); // Move styles out of rendered DOM and store.

  var styles = renderedDOM.querySelectorAll('style');
  var length = styles.length; // If there are no styles, skip unnecessary work

  if (length === 0) {
    // Ensure prepareTemplateStyles is called to support adding
    // styles via `prepareAdoptedCssText` since that requires that
    // `prepareTemplateStyles` is called.
    //
    // ShadyCSS will only update styles containing @apply in the template
    // given to `prepareTemplateStyles`. If no lit Template was given,
    // ShadyCSS will not be able to update uses of @apply in any relevant
    // template. However, this is not a problem because we only create the
    // template for the purpose of supporting `prepareAdoptedCssText`,
    // which doesn't support @apply at all.
    window.ShadyCSS.prepareTemplateStyles(templateElement, scopeName);
    return;
  }

  var condensedStyle = document.createElement('style'); // Collect styles into a single style. This helps us make sure ShadyCSS
  // manipulations will not prevent us from being able to fix up template
  // part indices.
  // NOTE: collecting styles is inefficient for browsers but ShadyCSS
  // currently does this anyway. When it does not, this should be changed.

  for (var i = 0; i < length; i++) {
    var _style = styles[i];

    _style.parentNode.removeChild(_style);

    condensedStyle.textContent += _style.textContent;
  } // Remove styles from nested templates in this scope.


  removeStylesFromLitTemplates(scopeName); // And then put the condensed style into the "root" template passed in as
  // `template`.

  var content = templateElement.content;

  if (!!template) {
    insertNodeIntoTemplate(template, condensedStyle, content.firstChild);
  } else {
    content.insertBefore(condensedStyle, content.firstChild);
  } // Note, it's important that ShadyCSS gets the template that `lit-html`
  // will actually render so that it can update the style inside when
  // needed (e.g. @apply native Shadow DOM case).


  window.ShadyCSS.prepareTemplateStyles(templateElement, scopeName);
  var style = content.querySelector('style');

  if (window.ShadyCSS.nativeShadow && style !== null) {
    // When in native Shadow DOM, ensure the style created by ShadyCSS is
    // included in initially rendered output (`renderedDOM`).
    renderedDOM.insertBefore(style.cloneNode(true), renderedDOM.firstChild);
  } else if (!!template) {
    // When no style is left in the template, parts will be broken as a
    // result. To fix this, we put back the style node ShadyCSS removed
    // and then tell lit to remove that node from the template.
    // There can be no style in the template in 2 cases (1) when Shady DOM
    // is in use, ShadyCSS removes all styles, (2) when native Shadow DOM
    // is in use ShadyCSS removes the style if it contains no content.
    // NOTE, ShadyCSS creates its own style so we can safely add/remove
    // `condensedStyle` here.
    content.insertBefore(condensedStyle, content.firstChild);
    var removes = new Set();
    removes.add(condensedStyle);
    removeNodesFromTemplate(template, removes);
  }
};
/**
 * Extension to the standard `render` method which supports rendering
 * to ShadowRoots when the ShadyDOM (https://github.com/webcomponents/shadydom)
 * and ShadyCSS (https://github.com/webcomponents/shadycss) polyfills are used
 * or when the webcomponentsjs
 * (https://github.com/webcomponents/webcomponentsjs) polyfill is used.
 *
 * Adds a `scopeName` option which is used to scope element DOM and stylesheets
 * when native ShadowDOM is unavailable. The `scopeName` will be added to
 * the class attribute of all rendered DOM. In addition, any style elements will
 * be automatically re-written with this `scopeName` selector and moved out
 * of the rendered DOM and into the document `<head>`.
 *
 * It is common to use this render method in conjunction with a custom element
 * which renders a shadowRoot. When this is done, typically the element's
 * `localName` should be used as the `scopeName`.
 *
 * In addition to DOM scoping, ShadyCSS also supports a basic shim for css
 * custom properties (needed only on older browsers like IE11) and a shim for
 * a deprecated feature called `@apply` that supports applying a set of css
 * custom properties to a given location.
 *
 * Usage considerations:
 *
 * * Part values in `<style>` elements are only applied the first time a given
 * `scopeName` renders. Subsequent changes to parts in style elements will have
 * no effect. Because of this, parts in style elements should only be used for
 * values that will never change, for example parts that set scope-wide theme
 * values or parts which render shared style elements.
 *
 * * Note, due to a limitation of the ShadyDOM polyfill, rendering in a
 * custom element's `constructor` is not supported. Instead rendering should
 * either done asynchronously, for example at microtask timing (for example
 * `Promise.resolve()`), or be deferred until the first time the element's
 * `connectedCallback` runs.
 *
 * Usage considerations when using shimmed custom properties or `@apply`:
 *
 * * Whenever any dynamic changes are made which affect
 * css custom properties, `ShadyCSS.styleElement(element)` must be called
 * to update the element. There are two cases when this is needed:
 * (1) the element is connected to a new parent, (2) a class is added to the
 * element that causes it to match different custom properties.
 * To address the first case when rendering a custom element, `styleElement`
 * should be called in the element's `connectedCallback`.
 *
 * * Shimmed custom properties may only be defined either for an entire
 * shadowRoot (for example, in a `:host` rule) or via a rule that directly
 * matches an element with a shadowRoot. In other words, instead of flowing from
 * parent to child as do native css custom properties, shimmed custom properties
 * flow only from shadowRoots to nested shadowRoots.
 *
 * * When using `@apply` mixing css shorthand property names with
 * non-shorthand names (for example `border` and `border-width`) is not
 * supported.
 */


var render = function render(result, container, options) {
  if (!options || _typeof(options) !== 'object' || !options.scopeName) {
    throw new Error('The `scopeName` option is required.');
  }

  var scopeName = options.scopeName;
  var hasRendered = parts.has(container);
  var needsScoping = compatibleShadyCSSVersion && container.nodeType === 11
  /* Node.DOCUMENT_FRAGMENT_NODE */
  && !!container.host; // Handle first render to a scope specially...

  var firstScopeRender = needsScoping && !shadyRenderSet.has(scopeName); // On first scope render, render into a fragment; this cannot be a single
  // fragment that is reused since nested renders can occur synchronously.

  var renderContainer = firstScopeRender ? document.createDocumentFragment() : container;
  render$1(result, renderContainer, Object.assign({
    templateFactory: shadyTemplateFactory(scopeName)
  }, options)); // When performing first scope render,
  // (1) We've rendered into a fragment so that there's a chance to
  // `prepareTemplateStyles` before sub-elements hit the DOM
  // (which might cause them to render based on a common pattern of
  // rendering in a custom element's `connectedCallback`);
  // (2) Scope the template with ShadyCSS one time only for this scope.
  // (3) Render the fragment into the container and make sure the
  // container knows its `part` is the one we just rendered. This ensures
  // DOM will be re-used on subsequent renders.

  if (firstScopeRender) {
    var part = parts.get(renderContainer);
    parts.delete(renderContainer); // ShadyCSS might have style sheets (e.g. from `prepareAdoptedCssText`)
    // that should apply to `renderContainer` even if the rendered value is
    // not a TemplateInstance. However, it will only insert scoped styles
    // into the document if `prepareTemplateStyles` has already been called
    // for the given scope name.

    var template = part.value instanceof TemplateInstance ? part.value.template : undefined;
    prepareTemplateStyles(scopeName, renderContainer, template);
    removeNodes(container, container.firstChild);
    container.appendChild(renderContainer);
    parts.set(container, part);
  } // After elements have hit the DOM, update styling if this is the
  // initial render to this container.
  // This is needed whenever dynamic changes are made so it would be
  // safest to do every render; however, this would regress performance
  // so we leave it up to the user to call `ShadyCSS.styleElement`
  // for dynamic changes.


  if (!hasRendered && needsScoping) {
    window.ShadyCSS.styleElement(container.host);
  }
};

function _createForOfIteratorHelper$4(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$4(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray$4(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$4(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$4(o, minLen); }

function _arrayLikeToArray$4(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper$4(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$4(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$4() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var _a;
/**
 * Use this module if you want to create your own base class extending
 * [[UpdatingElement]].
 * @packageDocumentation
 */

/*
 * When using Closure Compiler, JSCompiler_renameProperty(property, object) is
 * replaced at compile time by the munged name for object[property]. We cannot
 * alias this function, so we have to use a small shim that has the same
 * behavior when not compiling.
 */


window.JSCompiler_renameProperty = function (prop, _obj) {
  return prop;
};

var defaultConverter = {
  toAttribute: function toAttribute(value, type) {
    switch (type) {
      case Boolean:
        return value ? '' : null;

      case Object:
      case Array:
        // if the value is `null` or `undefined` pass this through
        // to allow removing/no change behavior.
        return value == null ? value : JSON.stringify(value);
    }

    return value;
  },
  fromAttribute: function fromAttribute(value, type) {
    switch (type) {
      case Boolean:
        return value !== null;

      case Number:
        return value === null ? null : Number(value);

      case Object:
      case Array:
        // Type assert to adhere to Bazel's "must type assert JSON parse" rule.
        return JSON.parse(value);
    }

    return value;
  }
};
/**
 * Change function that returns true if `value` is different from `oldValue`.
 * This method is used as the default for a property's `hasChanged` function.
 */

var notEqual = function notEqual(value, old) {
  // This ensures (old==NaN, value==NaN) always returns false
  return old !== value && (old === old || value === value);
};
var defaultPropertyDeclaration = {
  attribute: true,
  type: String,
  converter: defaultConverter,
  reflect: false,
  hasChanged: notEqual
};
var STATE_HAS_UPDATED = 1;
var STATE_UPDATE_REQUESTED = 1 << 2;
var STATE_IS_REFLECTING_TO_ATTRIBUTE = 1 << 3;
var STATE_IS_REFLECTING_TO_PROPERTY = 1 << 4;
/**
 * The Closure JS Compiler doesn't currently have good support for static
 * property semantics where "this" is dynamic (e.g.
 * https://github.com/google/closure-compiler/issues/3177 and others) so we use
 * this hack to bypass any rewriting by the compiler.
 */

var finalized = 'finalized';
/**
 * Base element class which manages element properties and attributes. When
 * properties change, the `update` method is asynchronously called. This method
 * should be supplied by subclassers to render updates as desired.
 * @noInheritDoc
 */

var UpdatingElement = /*#__PURE__*/function (_HTMLElement) {
  _inherits(UpdatingElement, _HTMLElement);

  var _super = _createSuper$4(UpdatingElement);

  function UpdatingElement() {
    var _this;

    _classCallCheck(this, UpdatingElement);

    _this = _super.call(this);

    _this.initialize();

    return _this;
  }
  /**
   * Returns a list of attributes corresponding to the registered properties.
   * @nocollapse
   */


  _createClass(UpdatingElement, [{
    key: "initialize",
    value:
    /**
     * Performs element initialization. By default captures any pre-set values for
     * registered properties.
     */
    function initialize() {
      var _this2 = this;

      this._updateState = 0;
      this._updatePromise = new Promise(function (res) {
        return _this2._enableUpdatingResolver = res;
      });
      this._changedProperties = new Map();

      this._saveInstanceProperties(); // ensures first update will be caught by an early access of
      // `updateComplete`


      this.requestUpdateInternal();
    }
    /**
     * Fixes any properties set on the instance before upgrade time.
     * Otherwise these would shadow the accessor and break these properties.
     * The properties are stored in a Map which is played back after the
     * constructor runs. Note, on very old versions of Safari (<=9) or Chrome
     * (<=41), properties created for native platform properties like (`id` or
     * `name`) may not have default values set in the element constructor. On
     * these browsers native properties appear on instances and therefore their
     * default value will overwrite any element default (e.g. if the element sets
     * this.id = 'id' in the constructor, the 'id' will become '' since this is
     * the native platform default).
     */

  }, {
    key: "_saveInstanceProperties",
    value: function _saveInstanceProperties() {
      var _this3 = this;

      // Use forEach so this works even if for/of loops are compiled to for loops
      // expecting arrays
      this.constructor._classProperties.forEach(function (_v, p) {
        if (_this3.hasOwnProperty(p)) {
          var value = _this3[p];
          delete _this3[p];

          if (!_this3._instanceProperties) {
            _this3._instanceProperties = new Map();
          }

          _this3._instanceProperties.set(p, value);
        }
      });
    }
    /**
     * Applies previously saved instance properties.
     */

  }, {
    key: "_applyInstanceProperties",
    value: function _applyInstanceProperties() {
      var _this4 = this;

      // Use forEach so this works even if for/of loops are compiled to for loops
      // expecting arrays
      // tslint:disable-next-line:no-any
      this._instanceProperties.forEach(function (v, p) {
        return _this4[p] = v;
      });

      this._instanceProperties = undefined;
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      // Ensure first connection completes an update. Updates cannot complete
      // before connection.
      this.enableUpdating();
    }
  }, {
    key: "enableUpdating",
    value: function enableUpdating() {
      if (this._enableUpdatingResolver !== undefined) {
        this._enableUpdatingResolver();

        this._enableUpdatingResolver = undefined;
      }
    }
    /**
     * Allows for `super.disconnectedCallback()` in extensions while
     * reserving the possibility of making non-breaking feature additions
     * when disconnecting at some point in the future.
     */

  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {}
    /**
     * Synchronizes property values when attributes change.
     */

  }, {
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(name, old, value) {
      if (old !== value) {
        this._attributeToProperty(name, value);
      }
    }
  }, {
    key: "_propertyToAttribute",
    value: function _propertyToAttribute(name, value) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultPropertyDeclaration;
      var ctor = this.constructor;

      var attr = ctor._attributeNameForProperty(name, options);

      if (attr !== undefined) {
        var attrValue = ctor._propertyValueToAttribute(value, options); // an undefined value does not change the attribute.


        if (attrValue === undefined) {
          return;
        } // Track if the property is being reflected to avoid
        // setting the property again via `attributeChangedCallback`. Note:
        // 1. this takes advantage of the fact that the callback is synchronous.
        // 2. will behave incorrectly if multiple attributes are in the reaction
        // stack at time of calling. However, since we process attributes
        // in `update` this should not be possible (or an extreme corner case
        // that we'd like to discover).
        // mark state reflecting


        this._updateState = this._updateState | STATE_IS_REFLECTING_TO_ATTRIBUTE;

        if (attrValue == null) {
          this.removeAttribute(attr);
        } else {
          this.setAttribute(attr, attrValue);
        } // mark state not reflecting


        this._updateState = this._updateState & ~STATE_IS_REFLECTING_TO_ATTRIBUTE;
      }
    }
  }, {
    key: "_attributeToProperty",
    value: function _attributeToProperty(name, value) {
      // Use tracking info to avoid deserializing attribute value if it was
      // just set from a property setter.
      if (this._updateState & STATE_IS_REFLECTING_TO_ATTRIBUTE) {
        return;
      }

      var ctor = this.constructor; // Note, hint this as an `AttributeMap` so closure clearly understands
      // the type; it has issues with tracking types through statics
      // tslint:disable-next-line:no-unnecessary-type-assertion

      var propName = ctor._attributeToPropertyMap.get(name);

      if (propName !== undefined) {
        var options = ctor.getPropertyOptions(propName); // mark state reflecting

        this._updateState = this._updateState | STATE_IS_REFLECTING_TO_PROPERTY;
        this[propName] = // tslint:disable-next-line:no-any
        ctor._propertyValueFromAttribute(value, options); // mark state not reflecting

        this._updateState = this._updateState & ~STATE_IS_REFLECTING_TO_PROPERTY;
      }
    }
    /**
     * This protected version of `requestUpdate` does not access or return the
     * `updateComplete` promise. This promise can be overridden and is therefore
     * not free to access.
     */

  }, {
    key: "requestUpdateInternal",
    value: function requestUpdateInternal(name, oldValue, options) {
      var shouldRequestUpdate = true; // If we have a property key, perform property update steps.

      if (name !== undefined) {
        var ctor = this.constructor;
        options = options || ctor.getPropertyOptions(name);

        if (ctor._valueHasChanged(this[name], oldValue, options.hasChanged)) {
          if (!this._changedProperties.has(name)) {
            this._changedProperties.set(name, oldValue);
          } // Add to reflecting properties set.
          // Note, it's important that every change has a chance to add the
          // property to `_reflectingProperties`. This ensures setting
          // attribute + property reflects correctly.


          if (options.reflect === true && !(this._updateState & STATE_IS_REFLECTING_TO_PROPERTY)) {
            if (this._reflectingProperties === undefined) {
              this._reflectingProperties = new Map();
            }

            this._reflectingProperties.set(name, options);
          }
        } else {
          // Abort the request if the property should not be considered changed.
          shouldRequestUpdate = false;
        }
      }

      if (!this._hasRequestedUpdate && shouldRequestUpdate) {
        this._updatePromise = this._enqueueUpdate();
      }
    }
    /**
     * Requests an update which is processed asynchronously. This should
     * be called when an element should update based on some state not triggered
     * by setting a property. In this case, pass no arguments. It should also be
     * called when manually implementing a property setter. In this case, pass the
     * property `name` and `oldValue` to ensure that any configured property
     * options are honored. Returns the `updateComplete` Promise which is resolved
     * when the update completes.
     *
     * @param name {PropertyKey} (optional) name of requesting property
     * @param oldValue {any} (optional) old value of requesting property
     * @returns {Promise} A Promise that is resolved when the update completes.
     */

  }, {
    key: "requestUpdate",
    value: function requestUpdate(name, oldValue) {
      this.requestUpdateInternal(name, oldValue);
      return this.updateComplete;
    }
    /**
     * Sets up the element to asynchronously update.
     */

  }, {
    key: "_enqueueUpdate",
    value: function () {
      var _enqueueUpdate2 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee() {
        var result;
        return regenerator.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this._updateState = this._updateState | STATE_UPDATE_REQUESTED;
                _context.prev = 1;
                _context.next = 4;
                return this._updatePromise;

              case 4:
                _context.next = 8;
                break;

              case 6:
                _context.prev = 6;
                _context.t0 = _context["catch"](1);

              case 8:
                result = this.performUpdate(); // If `performUpdate` returns a Promise, we await it. This is done to
                // enable coordinating updates with a scheduler. Note, the result is
                // checked to avoid delaying an additional microtask unless we need to.

                if (!(result != null)) {
                  _context.next = 12;
                  break;
                }

                _context.next = 12;
                return result;

              case 12:
                return _context.abrupt("return", !this._hasRequestedUpdate);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 6]]);
      }));

      function _enqueueUpdate() {
        return _enqueueUpdate2.apply(this, arguments);
      }

      return _enqueueUpdate;
    }()
  }, {
    key: "_hasRequestedUpdate",
    get: function get() {
      return this._updateState & STATE_UPDATE_REQUESTED;
    }
  }, {
    key: "hasUpdated",
    get: function get() {
      return this._updateState & STATE_HAS_UPDATED;
    }
    /**
     * Performs an element update. Note, if an exception is thrown during the
     * update, `firstUpdated` and `updated` will not be called.
     *
     * You can override this method to change the timing of updates. If this
     * method is overridden, `super.performUpdate()` must be called.
     *
     * For instance, to schedule updates to occur just before the next frame:
     *
     * ```
     * protected async performUpdate(): Promise<unknown> {
     *   await new Promise((resolve) => requestAnimationFrame(() => resolve()));
     *   super.performUpdate();
     * }
     * ```
     */

  }, {
    key: "performUpdate",
    value: function performUpdate() {
      // Abort any update if one is not pending when this is called.
      // This can happen if `performUpdate` is called early to "flush"
      // the update.
      if (!this._hasRequestedUpdate) {
        return;
      } // Mixin instance properties once, if they exist.


      if (this._instanceProperties) {
        this._applyInstanceProperties();
      }

      var shouldUpdate = false;
      var changedProperties = this._changedProperties;

      try {
        shouldUpdate = this.shouldUpdate(changedProperties);

        if (shouldUpdate) {
          this.update(changedProperties);
        } else {
          this._markUpdated();
        }
      } catch (e) {
        // Prevent `firstUpdated` and `updated` from running when there's an
        // update exception.
        shouldUpdate = false; // Ensure element can accept additional updates after an exception.

        this._markUpdated();

        throw e;
      }

      if (shouldUpdate) {
        if (!(this._updateState & STATE_HAS_UPDATED)) {
          this._updateState = this._updateState | STATE_HAS_UPDATED;
          this.firstUpdated(changedProperties);
        }

        this.updated(changedProperties);
      }
    }
  }, {
    key: "_markUpdated",
    value: function _markUpdated() {
      this._changedProperties = new Map();
      this._updateState = this._updateState & ~STATE_UPDATE_REQUESTED;
    }
    /**
     * Returns a Promise that resolves when the element has completed updating.
     * The Promise value is a boolean that is `true` if the element completed the
     * update without triggering another update. The Promise result is `false` if
     * a property was set inside `updated()`. If the Promise is rejected, an
     * exception was thrown during the update.
     *
     * To await additional asynchronous work, override the `_getUpdateComplete`
     * method. For example, it is sometimes useful to await a rendered element
     * before fulfilling this Promise. To do this, first await
     * `super._getUpdateComplete()`, then any subsequent state.
     *
     * @returns {Promise} The Promise returns a boolean that indicates if the
     * update resolved without triggering another update.
     */

  }, {
    key: "updateComplete",
    get: function get() {
      return this._getUpdateComplete();
    }
    /**
     * Override point for the `updateComplete` promise.
     *
     * It is not safe to override the `updateComplete` getter directly due to a
     * limitation in TypeScript which means it is not possible to call a
     * superclass getter (e.g. `super.updateComplete.then(...)`) when the target
     * language is ES5 (https://github.com/microsoft/TypeScript/issues/338).
     * This method should be overridden instead. For example:
     *
     *   class MyElement extends LitElement {
     *     async _getUpdateComplete() {
     *       await super._getUpdateComplete();
     *       await this._myChild.updateComplete;
     *     }
     *   }
     * @deprecated Override `getUpdateComplete()` instead for forward
     *     compatibility with `lit-element` 3.0 / `@lit/reactive-element`.
     */

  }, {
    key: "_getUpdateComplete",
    value: function _getUpdateComplete() {
      return this.getUpdateComplete();
    }
    /**
     * Override point for the `updateComplete` promise.
     *
     * It is not safe to override the `updateComplete` getter directly due to a
     * limitation in TypeScript which means it is not possible to call a
     * superclass getter (e.g. `super.updateComplete.then(...)`) when the target
     * language is ES5 (https://github.com/microsoft/TypeScript/issues/338).
     * This method should be overridden instead. For example:
     *
     *   class MyElement extends LitElement {
     *     async getUpdateComplete() {
     *       await super.getUpdateComplete();
     *       await this._myChild.updateComplete;
     *     }
     *   }
     */

  }, {
    key: "getUpdateComplete",
    value: function getUpdateComplete() {
      return this._updatePromise;
    }
    /**
     * Controls whether or not `update` should be called when the element requests
     * an update. By default, this method always returns `true`, but this can be
     * customized to control when to update.
     *
     * @param _changedProperties Map of changed properties with old values
     */

  }, {
    key: "shouldUpdate",
    value: function shouldUpdate(_changedProperties) {
      return true;
    }
    /**
     * Updates the element. This method reflects property values to attributes.
     * It can be overridden to render and keep updated element DOM.
     * Setting properties inside this method will *not* trigger
     * another update.
     *
     * @param _changedProperties Map of changed properties with old values
     */

  }, {
    key: "update",
    value: function update(_changedProperties) {
      var _this5 = this;

      if (this._reflectingProperties !== undefined && this._reflectingProperties.size > 0) {
        // Use forEach so this works even if for/of loops are compiled to for
        // loops expecting arrays
        this._reflectingProperties.forEach(function (v, k) {
          return _this5._propertyToAttribute(k, _this5[k], v);
        });

        this._reflectingProperties = undefined;
      }

      this._markUpdated();
    }
    /**
     * Invoked whenever the element is updated. Implement to perform
     * post-updating tasks via DOM APIs, for example, focusing an element.
     *
     * Setting properties inside this method will trigger the element to update
     * again after this update cycle completes.
     *
     * @param _changedProperties Map of changed properties with old values
     */

  }, {
    key: "updated",
    value: function updated(_changedProperties) {}
    /**
     * Invoked when the element is first updated. Implement to perform one time
     * work on the element after update.
     *
     * Setting properties inside this method will trigger the element to update
     * again after this update cycle completes.
     *
     * @param _changedProperties Map of changed properties with old values
     */

  }, {
    key: "firstUpdated",
    value: function firstUpdated(_changedProperties) {}
  }], [{
    key: "observedAttributes",
    get: function get() {
      var _this6 = this;

      // note: piggy backing on this to ensure we're finalized.
      this.finalize();
      var attributes = []; // Use forEach so this works even if for/of loops are compiled to for loops
      // expecting arrays

      this._classProperties.forEach(function (v, p) {
        var attr = _this6._attributeNameForProperty(p, v);

        if (attr !== undefined) {
          _this6._attributeToPropertyMap.set(attr, p);

          attributes.push(attr);
        }
      });

      return attributes;
    }
    /**
     * Ensures the private `_classProperties` property metadata is created.
     * In addition to `finalize` this is also called in `createProperty` to
     * ensure the `@property` decorator can add property metadata.
     */

    /** @nocollapse */

  }, {
    key: "_ensureClassProperties",
    value: function _ensureClassProperties() {
      var _this7 = this;

      // ensure private storage for property declarations.
      if (!this.hasOwnProperty(JSCompiler_renameProperty('_classProperties', this))) {
        this._classProperties = new Map(); // NOTE: Workaround IE11 not supporting Map constructor argument.

        var superProperties = Object.getPrototypeOf(this)._classProperties;

        if (superProperties !== undefined) {
          superProperties.forEach(function (v, k) {
            return _this7._classProperties.set(k, v);
          });
        }
      }
    }
    /**
     * Creates a property accessor on the element prototype if one does not exist
     * and stores a PropertyDeclaration for the property with the given options.
     * The property setter calls the property's `hasChanged` property option
     * or uses a strict identity check to determine whether or not to request
     * an update.
     *
     * This method may be overridden to customize properties; however,
     * when doing so, it's important to call `super.createProperty` to ensure
     * the property is setup correctly. This method calls
     * `getPropertyDescriptor` internally to get a descriptor to install.
     * To customize what properties do when they are get or set, override
     * `getPropertyDescriptor`. To customize the options for a property,
     * implement `createProperty` like this:
     *
     * static createProperty(name, options) {
     *   options = Object.assign(options, {myOption: true});
     *   super.createProperty(name, options);
     * }
     *
     * @nocollapse
     */

  }, {
    key: "createProperty",
    value: function createProperty(name) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultPropertyDeclaration;

      // Note, since this can be called by the `@property` decorator which
      // is called before `finalize`, we ensure storage exists for property
      // metadata.
      this._ensureClassProperties();

      this._classProperties.set(name, options); // Do not generate an accessor if the prototype already has one, since
      // it would be lost otherwise and that would never be the user's intention;
      // Instead, we expect users to call `requestUpdate` themselves from
      // user-defined accessors. Note that if the super has an accessor we will
      // still overwrite it


      if (options.noAccessor || this.prototype.hasOwnProperty(name)) {
        return;
      }

      var key = _typeof(name) === 'symbol' ? Symbol() : "__".concat(name);
      var descriptor = this.getPropertyDescriptor(name, key, options);

      if (descriptor !== undefined) {
        Object.defineProperty(this.prototype, name, descriptor);
      }
    }
    /**
     * Returns a property descriptor to be defined on the given named property.
     * If no descriptor is returned, the property will not become an accessor.
     * For example,
     *
     *   class MyElement extends LitElement {
     *     static getPropertyDescriptor(name, key, options) {
     *       const defaultDescriptor =
     *           super.getPropertyDescriptor(name, key, options);
     *       const setter = defaultDescriptor.set;
     *       return {
     *         get: defaultDescriptor.get,
     *         set(value) {
     *           setter.call(this, value);
     *           // custom action.
     *         },
     *         configurable: true,
     *         enumerable: true
     *       }
     *     }
     *   }
     *
     * @nocollapse
     */

  }, {
    key: "getPropertyDescriptor",
    value: function getPropertyDescriptor(name, key, options) {
      return {
        // tslint:disable-next-line:no-any no symbol in index
        get: function get() {
          return this[key];
        },
        set: function set(value) {
          var oldValue = this[name];
          this[key] = value;
          this.requestUpdateInternal(name, oldValue, options);
        },
        configurable: true,
        enumerable: true
      };
    }
    /**
     * Returns the property options associated with the given property.
     * These options are defined with a PropertyDeclaration via the `properties`
     * object or the `@property` decorator and are registered in
     * `createProperty(...)`.
     *
     * Note, this method should be considered "final" and not overridden. To
     * customize the options for a given property, override `createProperty`.
     *
     * @nocollapse
     * @final
     */

  }, {
    key: "getPropertyOptions",
    value: function getPropertyOptions(name) {
      return this._classProperties && this._classProperties.get(name) || defaultPropertyDeclaration;
    }
    /**
     * Creates property accessors for registered properties and ensures
     * any superclasses are also finalized.
     * @nocollapse
     */

  }, {
    key: "finalize",
    value: function finalize() {
      // finalize any superclasses
      var superCtor = Object.getPrototypeOf(this);

      if (!superCtor.hasOwnProperty(finalized)) {
        superCtor.finalize();
      }

      this[finalized] = true;

      this._ensureClassProperties(); // initialize Map populated in observedAttributes


      this._attributeToPropertyMap = new Map(); // make any properties
      // Note, only process "own" properties since this element will inherit
      // any properties defined on the superClass, and finalization ensures
      // the entire prototype chain is finalized.

      if (this.hasOwnProperty(JSCompiler_renameProperty('properties', this))) {
        var props = this.properties; // support symbols in properties (IE11 does not support this)

        var propKeys = [].concat(_toConsumableArray(Object.getOwnPropertyNames(props)), _toConsumableArray(typeof Object.getOwnPropertySymbols === 'function' ? Object.getOwnPropertySymbols(props) : [])); // This for/of is ok because propKeys is an array

        var _iterator = _createForOfIteratorHelper$4(propKeys),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var p = _step.value;
            // note, use of `any` is due to TypeSript lack of support for symbol in
            // index types
            // tslint:disable-next-line:no-any no symbol in index
            this.createProperty(p, props[p]);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    }
    /**
     * Returns the property name for the given attribute `name`.
     * @nocollapse
     */

  }, {
    key: "_attributeNameForProperty",
    value: function _attributeNameForProperty(name, options) {
      var attribute = options.attribute;
      return attribute === false ? undefined : typeof attribute === 'string' ? attribute : typeof name === 'string' ? name.toLowerCase() : undefined;
    }
    /**
     * Returns true if a property should request an update.
     * Called when a property value is set and uses the `hasChanged`
     * option for the property if present or a strict identity check.
     * @nocollapse
     */

  }, {
    key: "_valueHasChanged",
    value: function _valueHasChanged(value, old) {
      var hasChanged = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : notEqual;
      return hasChanged(value, old);
    }
    /**
     * Returns the property value for the given attribute value.
     * Called via the `attributeChangedCallback` and uses the property's
     * `converter` or `converter.fromAttribute` property option.
     * @nocollapse
     */

  }, {
    key: "_propertyValueFromAttribute",
    value: function _propertyValueFromAttribute(value, options) {
      var type = options.type;
      var converter = options.converter || defaultConverter;
      var fromAttribute = typeof converter === 'function' ? converter : converter.fromAttribute;
      return fromAttribute ? fromAttribute(value, type) : value;
    }
    /**
     * Returns the attribute value for the given property value. If this
     * returns undefined, the property will *not* be reflected to an attribute.
     * If this returns null, the attribute will be removed, otherwise the
     * attribute will be set to the value.
     * This uses the property's `reflect` and `type.toAttribute` property options.
     * @nocollapse
     */

  }, {
    key: "_propertyValueToAttribute",
    value: function _propertyValueToAttribute(value, options) {
      if (options.reflect === undefined) {
        return;
      }

      var type = options.type;
      var converter = options.converter;
      var toAttribute = converter && converter.toAttribute || defaultConverter.toAttribute;
      return toAttribute(value, type);
    }
  }]);

  return UpdatingElement;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
_a = finalized;
/**
 * Marks class as having finished creating properties.
 */

UpdatingElement[_a] = true;

var standardProperty = function standardProperty(options, element) {
  // When decorating an accessor, pass it through and add property metadata.
  // Note, the `hasOwnProperty` check in `createProperty` ensures we don't
  // stomp over the user's accessor.
  if (element.kind === 'method' && element.descriptor && !('value' in element.descriptor)) {
    return Object.assign(Object.assign({}, element), {
      finisher: function finisher(clazz) {
        clazz.createProperty(element.key, options);
      }
    });
  } else {
    // createProperty() takes care of defining the property, but we still
    // must return some kind of descriptor, so return a descriptor for an
    // unused prototype field. The finisher calls createProperty().
    return {
      kind: 'field',
      key: Symbol(),
      placement: 'own',
      descriptor: {},
      // When @babel/plugin-proposal-decorators implements initializers,
      // do this instead of the initializer below. See:
      // https://github.com/babel/babel/issues/9260 extras: [
      //   {
      //     kind: 'initializer',
      //     placement: 'own',
      //     initializer: descriptor.initializer,
      //   }
      // ],
      initializer: function initializer() {
        if (typeof element.initializer === 'function') {
          this[element.key] = element.initializer.call(this);
        }
      },
      finisher: function finisher(clazz) {
        clazz.createProperty(element.key, options);
      }
    };
  }
};

var legacyProperty = function legacyProperty(options, proto, name) {
  proto.constructor.createProperty(name, options);
};
/**
 * A property decorator which creates a LitElement property which reflects a
 * corresponding attribute value. A [[`PropertyDeclaration`]] may optionally be
 * supplied to configure property features.
 *
 * This decorator should only be used for public fields. Private or protected
 * fields should use the [[`internalProperty`]] decorator.
 *
 * @example
 * ```ts
 * class MyElement {
 *   @property({ type: Boolean })
 *   clicked = false;
 * }
 * ```
 * @category Decorator
 * @ExportDecoratedItems
 */


function property(options) {
  // tslint:disable-next-line:no-any decorator
  return function (protoOrDescriptor, name) {
    return name !== undefined ? legacyProperty(options, protoOrDescriptor, name) : standardProperty(options, protoOrDescriptor);
  };
}
/**
 * A property decorator that converts a class property into a getter that
 * executes a querySelector on the element's renderRoot.
 *
 * @param selector A DOMString containing one or more selectors to match.
 * @param cache An optional boolean which when true performs the DOM query only
 * once and caches the result.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
 *
 * @example
 *
 * ```ts
 * class MyElement {
 *   @query('#first')
 *   first;
 *
 *   render() {
 *     return html`
 *       <div id="first"></div>
 *       <div id="second"></div>
 *     `;
 *   }
 * }
 * ```
 * @category Decorator
 */

function query(selector, cache) {
  return function (protoOrDescriptor, // tslint:disable-next-line:no-any decorator
  name) {
    var descriptor = {
      get: function get() {
        return this.renderRoot.querySelector(selector);
      },
      enumerable: true,
      configurable: true
    };

    if (cache) {
      var prop = name !== undefined ? name : protoOrDescriptor.key;
      var key = _typeof(prop) === 'symbol' ? Symbol() : "__".concat(prop);

      descriptor.get = function () {
        if (this[key] === undefined) {
          this[key] = this.renderRoot.querySelector(selector);
        }

        return this[key];
      };
    }

    return name !== undefined ? legacyQuery(descriptor, protoOrDescriptor, name) : standardQuery(descriptor, protoOrDescriptor);
  };
} // Note, in the future, we may extend this decorator to support the use case

var legacyQuery = function legacyQuery(descriptor, proto, name) {
  Object.defineProperty(proto, name, descriptor);
};

var standardQuery = function standardQuery(descriptor, element) {
  return {
    kind: 'method',
    placement: 'prototype',
    key: element.key,
    descriptor: descriptor
  };
};

var standardEventOptions = function standardEventOptions(options, element) {
  return Object.assign(Object.assign({}, element), {
    finisher: function finisher(clazz) {
      Object.assign(clazz.prototype[element.key], options);
    }
  });
};

var legacyEventOptions = // tslint:disable-next-line:no-any legacy decorator
function legacyEventOptions(options, proto, name) {
  Object.assign(proto[name], options);
};
/**
 * Adds event listener options to a method used as an event listener in a
 * lit-html template.
 *
 * @param options An object that specifies event listener options as accepted by
 * `EventTarget#addEventListener` and `EventTarget#removeEventListener`.
 *
 * Current browsers support the `capture`, `passive`, and `once` options. See:
 * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Parameters
 *
 * @example
 * ```ts
 * class MyElement {
 *   clicked = false;
 *
 *   render() {
 *     return html`
 *       <div @click=${this._onClick}`>
 *         <button></button>
 *       </div>
 *     `;
 *   }
 *
 *   @eventOptions({capture: true})
 *   _onClick(e) {
 *     this.clicked = true;
 *   }
 * }
 * ```
 * @category Decorator
 */


function eventOptions(options) {
  // Return value typed as any to prevent TypeScript from complaining that
  // standard decorator function signature does not match TypeScript decorator
  // signature
  // TODO(kschaaf): unclear why it was only failing on this decorator and not
  // the others
  return function (protoOrDescriptor, name) {
    return name !== undefined ? legacyEventOptions(options, protoOrDescriptor, name) : standardEventOptions(options, protoOrDescriptor);
  };
} // x-browser support for matches

/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

/**
 * Whether the current browser supports `adoptedStyleSheets`.
 */
var supportsAdoptingStyleSheets = window.ShadowRoot && (window.ShadyCSS === undefined || window.ShadyCSS.nativeShadow) && 'adoptedStyleSheets' in Document.prototype && 'replace' in CSSStyleSheet.prototype;
var constructionToken = Symbol();
var CSSResult = /*#__PURE__*/function () {
  function CSSResult(cssText, safeToken) {
    _classCallCheck(this, CSSResult);

    if (safeToken !== constructionToken) {
      throw new Error('CSSResult is not constructable. Use `unsafeCSS` or `css` instead.');
    }

    this.cssText = cssText;
  } // Note, this is a getter so that it's lazy. In practice, this means
  // stylesheets are not created until the first element instance is made.


  _createClass(CSSResult, [{
    key: "styleSheet",
    get: function get() {
      if (this._styleSheet === undefined) {
        // Note, if `supportsAdoptingStyleSheets` is true then we assume
        // CSSStyleSheet is constructable.
        if (supportsAdoptingStyleSheets) {
          this._styleSheet = new CSSStyleSheet();

          this._styleSheet.replaceSync(this.cssText);
        } else {
          this._styleSheet = null;
        }
      }

      return this._styleSheet;
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.cssText;
    }
  }]);

  return CSSResult;
}();
/**
 * Wrap a value for interpolation in a [[`css`]] tagged template literal.
 *
 * This is unsafe because untrusted CSS text can be used to phone home
 * or exfiltrate data to an attacker controlled site. Take care to only use
 * this with trusted input.
 */

var unsafeCSS = function unsafeCSS(value) {
  return new CSSResult(String(value), constructionToken);
};

var textFromCSSResult = function textFromCSSResult(value) {
  if (value instanceof CSSResult) {
    return value.cssText;
  } else if (typeof value === 'number') {
    return value;
  } else {
    throw new Error("Value passed to 'css' function must be a 'css' function result: ".concat(value, ". Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security."));
  }
};
/**
 * Template tag which which can be used with LitElement's [[LitElement.styles |
 * `styles`]] property to set element styles. For security reasons, only literal
 * string values may be used. To incorporate non-literal values [[`unsafeCSS`]]
 * may be used inside a template string part.
 */


var css = function css(strings) {
  for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }

  var cssText = values.reduce(function (acc, v, idx) {
    return acc + textFromCSSResult(v) + strings[idx + 1];
  }, strings[0]);
  return new CSSResult(cssText, constructionToken);
};

function _createSuper$3(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$3(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$3() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
// This line will be used in regexes to search for LitElement usage.
// TODO(justinfagnani): inject version number at build time

(window['litElementVersions'] || (window['litElementVersions'] = [])).push('2.5.1');
/**
 * Sentinal value used to avoid calling lit-html's render function when
 * subclasses do not implement `render`
 */

var renderNotImplemented = {};
/**
 * Base element class that manages element properties and attributes, and
 * renders a lit-html template.
 *
 * To define a component, subclass `LitElement` and implement a
 * `render` method to provide the component's template. Define properties
 * using the [[`properties`]] property or the [[`property`]] decorator.
 */

var LitElement = /*#__PURE__*/function (_UpdatingElement) {
  _inherits(LitElement, _UpdatingElement);

  var _super = _createSuper$3(LitElement);

  function LitElement() {
    _classCallCheck(this, LitElement);

    return _super.apply(this, arguments);
  }

  _createClass(LitElement, [{
    key: "initialize",
    value:
    /**
     * Performs element initialization. By default this calls
     * [[`createRenderRoot`]] to create the element [[`renderRoot`]] node and
     * captures any pre-set values for registered properties.
     */
    function initialize() {
      _get(_getPrototypeOf(LitElement.prototype), "initialize", this).call(this);

      this.constructor._getUniqueStyles();

      this.renderRoot = this.createRenderRoot(); // Note, if renderRoot is not a shadowRoot, styles would/could apply to the
      // element's getRootNode(). While this could be done, we're choosing not to
      // support this now since it would require different logic around de-duping.

      if (window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot) {
        this.adoptStyles();
      }
    }
    /**
     * Returns the node into which the element should render and by default
     * creates and returns an open shadowRoot. Implement to customize where the
     * element's DOM is rendered. For example, to render into the element's
     * childNodes, return `this`.
     * @returns {Element|DocumentFragment} Returns a node into which to render.
     */

  }, {
    key: "createRenderRoot",
    value: function createRenderRoot() {
      return this.attachShadow(this.constructor.shadowRootOptions);
    }
    /**
     * Applies styling to the element shadowRoot using the [[`styles`]]
     * property. Styling will apply using `shadowRoot.adoptedStyleSheets` where
     * available and will fallback otherwise. When Shadow DOM is polyfilled,
     * ShadyCSS scopes styles and adds them to the document. When Shadow DOM
     * is available but `adoptedStyleSheets` is not, styles are appended to the
     * end of the `shadowRoot` to [mimic spec
     * behavior](https://wicg.github.io/construct-stylesheets/#using-constructed-stylesheets).
     */

  }, {
    key: "adoptStyles",
    value: function adoptStyles() {
      var styles = this.constructor._styles;

      if (styles.length === 0) {
        return;
      } // There are three separate cases here based on Shadow DOM support.
      // (1) shadowRoot polyfilled: use ShadyCSS
      // (2) shadowRoot.adoptedStyleSheets available: use it
      // (3) shadowRoot.adoptedStyleSheets polyfilled: append styles after
      // rendering


      if (window.ShadyCSS !== undefined && !window.ShadyCSS.nativeShadow) {
        window.ShadyCSS.ScopingShim.prepareAdoptedCssText(styles.map(function (s) {
          return s.cssText;
        }), this.localName);
      } else if (supportsAdoptingStyleSheets) {
        this.renderRoot.adoptedStyleSheets = styles.map(function (s) {
          return s instanceof CSSStyleSheet ? s : s.styleSheet;
        });
      } else {
        // This must be done after rendering so the actual style insertion is done
        // in `update`.
        this._needsShimAdoptedStyleSheets = true;
      }
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(LitElement.prototype), "connectedCallback", this).call(this); // Note, first update/render handles styleElement so we only call this if
      // connected after first update.


      if (this.hasUpdated && window.ShadyCSS !== undefined) {
        window.ShadyCSS.styleElement(this);
      }
    }
    /**
     * Updates the element. This method reflects property values to attributes
     * and calls `render` to render DOM via lit-html. Setting properties inside
     * this method will *not* trigger another update.
     * @param _changedProperties Map of changed properties with old values
     */

  }, {
    key: "update",
    value: function update(changedProperties) {
      var _this = this;

      // Setting properties in `render` should not trigger an update. Since
      // updates are allowed after super.update, it's important to call `render`
      // before that.
      var templateResult = this.render();

      _get(_getPrototypeOf(LitElement.prototype), "update", this).call(this, changedProperties); // If render is not implemented by the component, don't call lit-html render


      if (templateResult !== renderNotImplemented) {
        this.constructor.render(templateResult, this.renderRoot, {
          scopeName: this.localName,
          eventContext: this
        });
      } // When native Shadow DOM is used but adoptedStyles are not supported,
      // insert styling after rendering to ensure adoptedStyles have highest
      // priority.


      if (this._needsShimAdoptedStyleSheets) {
        this._needsShimAdoptedStyleSheets = false;

        this.constructor._styles.forEach(function (s) {
          var style = document.createElement('style');
          style.textContent = s.cssText;

          _this.renderRoot.appendChild(style);
        });
      }
    }
    /**
     * Invoked on each update to perform rendering tasks. This method may return
     * any value renderable by lit-html's `NodePart` - typically a
     * `TemplateResult`. Setting properties inside this method will *not* trigger
     * the element to update.
     */

  }, {
    key: "render",
    value: function render() {
      return renderNotImplemented;
    }
  }], [{
    key: "getStyles",
    value:
    /**
     * Return the array of styles to apply to the element.
     * Override this method to integrate into a style management system.
     *
     * @nocollapse
     */
    function getStyles() {
      return this.styles;
    }
    /** @nocollapse */

  }, {
    key: "_getUniqueStyles",
    value: function _getUniqueStyles() {
      // Only gather styles once per class
      if (this.hasOwnProperty(JSCompiler_renameProperty('_styles', this))) {
        return;
      } // Take care not to call `this.getStyles()` multiple times since this
      // generates new CSSResults each time.
      // TODO(sorvell): Since we do not cache CSSResults by input, any
      // shared styles will generate new stylesheet objects, which is wasteful.
      // This should be addressed when a browser ships constructable
      // stylesheets.


      var userStyles = this.getStyles();

      if (Array.isArray(userStyles)) {
        // De-duplicate styles preserving the _last_ instance in the set.
        // This is a performance optimization to avoid duplicated styles that can
        // occur especially when composing via subclassing.
        // The last item is kept to try to preserve the cascade order with the
        // assumption that it's most important that last added styles override
        // previous styles.
        var addStyles = function addStyles(styles, set) {
          return styles.reduceRight(function (set, s) {
            return (// Note: On IE set.add() does not return the set
              Array.isArray(s) ? addStyles(s, set) : (set.add(s), set)
            );
          }, set);
        }; // Array.from does not work on Set in IE, otherwise return
        // Array.from(addStyles(userStyles, new Set<CSSResult>())).reverse()


        var set = addStyles(userStyles, new Set());
        var styles = [];
        set.forEach(function (v) {
          return styles.unshift(v);
        });
        this._styles = styles;
      } else {
        this._styles = userStyles === undefined ? [] : [userStyles];
      } // Ensure that there are no invalid CSSStyleSheet instances here. They are
      // invalid in two conditions.
      // (1) the sheet is non-constructible (`sheet` of a HTMLStyleElement), but
      //     this is impossible to check except via .replaceSync or use
      // (2) the ShadyCSS polyfill is enabled (:. supportsAdoptingStyleSheets is
      //     false)


      this._styles = this._styles.map(function (s) {
        if (s instanceof CSSStyleSheet && !supportsAdoptingStyleSheets) {
          // Flatten the cssText from the passed constructible stylesheet (or
          // undetectable non-constructible stylesheet). The user might have
          // expected to update their stylesheets over time, but the alternative
          // is a crash.
          var cssText = Array.prototype.slice.call(s.cssRules).reduce(function (css, rule) {
            return css + rule.cssText;
          }, '');
          return unsafeCSS(cssText);
        }

        return s;
      });
    }
  }]);

  return LitElement;
}(UpdatingElement);
/**
 * Ensure this class is marked as `finalized` as an optimization ensuring
 * it will not needlessly try to `finalize`.
 *
 * Note this property name is a string to prevent breaking Closure JS Compiler
 * optimizations. See updating-element.ts for more information.
 */

LitElement['finalized'] = true;
/**
 * Reference to the underlying library method used to render the element's
 * DOM. By default, points to the `render` method from lit-html's shady-render
 * module.
 *
 * **Most users will never need to touch this property.**
 *
 * This  property should not be confused with the `render` instance method,
 * which should be overridden to define a template for the element.
 *
 * Advanced users creating a new base class based on LitElement can override
 * this property to point to a custom render method with a signature that
 * matches [shady-render's `render`
 * method](https://lit-html.polymer-project.org/api/modules/shady_render.html#render).
 *
 * @nocollapse
 */

LitElement.render = render;
/** @nocollapse */

LitElement.shadowRootOptions = {
  mode: 'open'
};

/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var templateCaches = new WeakMap();
/**
 * Enables fast switching between multiple templates by caching the DOM nodes
 * and TemplateInstances produced by the templates.
 *
 * Example:
 *
 * ```
 * let checked = false;
 *
 * html`
 *   ${cache(checked ? html`input is checked` : html`input is not checked`)}
 * `
 * ```
 */

var cache = directive(function (value) {
  return function (part) {
    if (!(part instanceof NodePart)) {
      throw new Error('cache can only be used in text bindings');
    }

    var templateCache = templateCaches.get(part);

    if (templateCache === undefined) {
      templateCache = new WeakMap();
      templateCaches.set(part, templateCache);
    }

    var previousValue = part.value; // First, can we update the current TemplateInstance, or do we need to move
    // the current nodes into the cache?

    if (previousValue instanceof TemplateInstance) {
      if (value instanceof TemplateResult && previousValue.template === part.options.templateFactory(value)) {
        // Same Template, just trigger an update of the TemplateInstance
        part.setValue(value);
        return;
      } else {
        // Not the same Template, move the nodes from the DOM into the cache.
        var cachedTemplate = templateCache.get(previousValue.template);

        if (cachedTemplate === undefined) {
          cachedTemplate = {
            instance: previousValue,
            nodes: document.createDocumentFragment()
          };
          templateCache.set(previousValue.template, cachedTemplate);
        }

        reparentNodes(cachedTemplate.nodes, part.startNode.nextSibling, part.endNode);
      }
    } // Next, can we reuse nodes from the cache?


    if (value instanceof TemplateResult) {
      var template = part.options.templateFactory(value);

      var _cachedTemplate = templateCache.get(template);

      if (_cachedTemplate !== undefined) {
        // Move nodes out of cache
        part.setValue(_cachedTemplate.nodes);
        part.commit(); // Set the Part value to the TemplateInstance so it'll update it.

        part.value = _cachedTemplate.instance;
      }
    }

    part.setValue(value);
  };
});

function _createForOfIteratorHelper$3(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$3(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray$3(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$3(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$3(o, minLen); }

function _arrayLikeToArray$3(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var ClassList = /*#__PURE__*/function () {
  function ClassList(element) {
    _classCallCheck(this, ClassList);

    this.classes = new Set();
    this.changed = false;
    this.element = element;
    var classList = (element.getAttribute('class') || '').split(/\s+/);

    var _iterator = _createForOfIteratorHelper$3(classList),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var cls = _step.value;
        this.classes.add(cls);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }

  _createClass(ClassList, [{
    key: "add",
    value: function add(cls) {
      this.classes.add(cls);
      this.changed = true;
    }
  }, {
    key: "remove",
    value: function remove(cls) {
      this.classes.delete(cls);
      this.changed = true;
    }
  }, {
    key: "commit",
    value: function commit() {
      if (this.changed) {
        var classString = '';
        this.classes.forEach(function (cls) {
          return classString += cls + ' ';
        });
        this.element.setAttribute('class', classString);
      }
    }
  }]);

  return ClassList;
}();
/**
 * Stores the ClassInfo object applied to a given AttributePart.
 * Used to unset existing values when a new ClassInfo object is applied.
 */


var previousClassesCache = new WeakMap();
/**
 * A directive that applies CSS classes. This must be used in the `class`
 * attribute and must be the only part used in the attribute. It takes each
 * property in the `classInfo` argument and adds the property name to the
 * element's `class` if the property value is truthy; if the property value is
 * falsey, the property name is removed from the element's `class`. For example
 * `{foo: bar}` applies the class `foo` if the value of `bar` is truthy.
 * @param classInfo {ClassInfo}
 */

var classMap = directive(function (classInfo) {
  return function (part) {
    if (!(part instanceof AttributePart) || part instanceof PropertyPart || part.committer.name !== 'class' || part.committer.parts.length > 1) {
      throw new Error('The `classMap` directive must be used in the `class` attribute ' + 'and must be the only part in the attribute.');
    }

    var committer = part.committer;
    var element = committer.element;
    var previousClasses = previousClassesCache.get(part);

    if (previousClasses === undefined) {
      // Write static classes once
      // Use setAttribute() because className isn't a string on SVG elements
      element.setAttribute('class', committer.strings.join(' '));
      previousClassesCache.set(part, previousClasses = new Set());
    }

    var classList = element.classList || new ClassList(element); // Remove old classes that no longer apply
    // We use forEach() instead of for-of so that re don't require down-level
    // iteration.

    previousClasses.forEach(function (name) {
      if (!(name in classInfo)) {
        classList.remove(name);
        previousClasses.delete(name);
      }
    }); // Add or remove classes based on their classMap value

    for (var name in classInfo) {
      var value = classInfo[name];

      if (value != previousClasses.has(name)) {
        // We explicitly want a loose truthy check of `value` because it seems
        // more convenient that '' and 0 are skipped.
        if (value) {
          classList.add(name);
          previousClasses.add(name);
        } else {
          classList.remove(name);
          previousClasses.delete(name);
        }
      }
    }

    if (typeof classList.commit === 'function') {
      classList.commit();
    }
  };
});

function _createForOfIteratorHelper$2(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$2(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray$2(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$2(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$2(o, minLen); }

function _arrayLikeToArray$2(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
// TODO(kschaaf): Refactor into Part API?

var createAndInsertPart = function createAndInsertPart(containerPart, beforePart) {
  var container = containerPart.startNode.parentNode;
  var beforeNode = beforePart === undefined ? containerPart.endNode : beforePart.startNode;
  var startNode = container.insertBefore(createMarker(), beforeNode);
  container.insertBefore(createMarker(), beforeNode);
  var newPart = new NodePart(containerPart.options);
  newPart.insertAfterNode(startNode);
  return newPart;
};

var updatePart = function updatePart(part, value) {
  part.setValue(value);
  part.commit();
  return part;
};

var insertPartBefore = function insertPartBefore(containerPart, part, ref) {
  var container = containerPart.startNode.parentNode;
  var beforeNode = ref ? ref.startNode : containerPart.endNode;
  var endNode = part.endNode.nextSibling;

  if (endNode !== beforeNode) {
    reparentNodes(container, part.startNode, endNode, beforeNode);
  }
};

var removePart = function removePart(part) {
  removeNodes(part.startNode.parentNode, part.startNode, part.endNode.nextSibling);
}; // Helper for generating a map of array item to its index over a subset
// of an array (used to lazily generate `newKeyToIndexMap` and
// `oldKeyToIndexMap`)


var generateMap = function generateMap(list, start, end) {
  var map = new Map();

  for (var i = start; i <= end; i++) {
    map.set(list[i], i);
  }

  return map;
}; // Stores previous ordered list of parts and map of key to index


var partListCache = new WeakMap();
var keyListCache = new WeakMap();
/**
 * A directive that repeats a series of values (usually `TemplateResults`)
 * generated from an iterable, and updates those items efficiently when the
 * iterable changes based on user-provided `keys` associated with each item.
 *
 * Note that if a `keyFn` is provided, strict key-to-DOM mapping is maintained,
 * meaning previous DOM for a given key is moved into the new position if
 * needed, and DOM will never be reused with values for different keys (new DOM
 * will always be created for new keys). This is generally the most efficient
 * way to use `repeat` since it performs minimum unnecessary work for insertions
 * and removals.
 *
 * IMPORTANT: If providing a `keyFn`, keys *must* be unique for all items in a
 * given call to `repeat`. The behavior when two or more items have the same key
 * is undefined.
 *
 * If no `keyFn` is provided, this directive will perform similar to mapping
 * items to values, and DOM will be reused against potentially different items.
 */

var repeat = directive(function (items, keyFnOrTemplate, template) {
  var keyFn;

  if (template === undefined) {
    template = keyFnOrTemplate;
  } else if (keyFnOrTemplate !== undefined) {
    keyFn = keyFnOrTemplate;
  }

  return function (containerPart) {
    if (!(containerPart instanceof NodePart)) {
      throw new Error('repeat can only be used in text bindings');
    } // Old part & key lists are retrieved from the last update
    // (associated with the part for this instance of the directive)


    var oldParts = partListCache.get(containerPart) || [];
    var oldKeys = keyListCache.get(containerPart) || []; // New part list will be built up as we go (either reused from
    // old parts or created for new keys in this update). This is
    // saved in the above cache at the end of the update.

    var newParts = []; // New value list is eagerly generated from items along with a
    // parallel array indicating its key.

    var newValues = [];
    var newKeys = [];
    var index = 0;

    var _iterator = _createForOfIteratorHelper$2(items),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var item = _step.value;
        newKeys[index] = keyFn ? keyFn(item, index) : index;
        newValues[index] = template(item, index);
        index++;
      } // Maps from key to index for current and previous update; these
      // are generated lazily only when needed as a performance
      // optimization, since they are only required for multiple
      // non-contiguous changes in the list, which are less common.

    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    var newKeyToIndexMap;
    var oldKeyToIndexMap; // Head and tail pointers to old parts and new values

    var oldHead = 0;
    var oldTail = oldParts.length - 1;
    var newHead = 0;
    var newTail = newValues.length - 1; // Overview of O(n) reconciliation algorithm (general approach
    // based on ideas found in ivi, vue, snabbdom, etc.):
    //
    // * We start with the list of old parts and new values (and
    //   arrays of their respective keys), head/tail pointers into
    //   each, and we build up the new list of parts by updating
    //   (and when needed, moving) old parts or creating new ones.
    //   The initial scenario might look like this (for brevity of
    //   the diagrams, the numbers in the array reflect keys
    //   associated with the old parts or new values, although keys
    //   and parts/values are actually stored in parallel arrays
    //   indexed using the same head/tail pointers):
    //
    //      oldHead v                 v oldTail
    //   oldKeys:  [0, 1, 2, 3, 4, 5, 6]
    //   newParts: [ ,  ,  ,  ,  ,  ,  ]
    //   newKeys:  [0, 2, 1, 4, 3, 7, 6] <- reflects the user's new
    //                                      item order
    //      newHead ^                 ^ newTail
    //
    // * Iterate old & new lists from both sides, updating,
    //   swapping, or removing parts at the head/tail locations
    //   until neither head nor tail can move.
    //
    // * Example below: keys at head pointers match, so update old
    //   part 0 in-place (no need to move it) and record part 0 in
    //   the `newParts` list. The last thing we do is advance the
    //   `oldHead` and `newHead` pointers (will be reflected in the
    //   next diagram).
    //
    //      oldHead v                 v oldTail
    //   oldKeys:  [0, 1, 2, 3, 4, 5, 6]
    //   newParts: [0,  ,  ,  ,  ,  ,  ] <- heads matched: update 0
    //   newKeys:  [0, 2, 1, 4, 3, 7, 6]    and advance both oldHead
    //                                      & newHead
    //      newHead ^                 ^ newTail
    //
    // * Example below: head pointers don't match, but tail
    //   pointers do, so update part 6 in place (no need to move
    //   it), and record part 6 in the `newParts` list. Last,
    //   advance the `oldTail` and `oldHead` pointers.
    //
    //         oldHead v              v oldTail
    //   oldKeys:  [0, 1, 2, 3, 4, 5, 6]
    //   newParts: [0,  ,  ,  ,  ,  , 6] <- tails matched: update 6
    //   newKeys:  [0, 2, 1, 4, 3, 7, 6]    and advance both oldTail
    //                                      & newTail
    //         newHead ^              ^ newTail
    //
    // * If neither head nor tail match; next check if one of the
    //   old head/tail items was removed. We first need to generate
    //   the reverse map of new keys to index (`newKeyToIndexMap`),
    //   which is done once lazily as a performance optimization,
    //   since we only hit this case if multiple non-contiguous
    //   changes were made. Note that for contiguous removal
    //   anywhere in the list, the head and tails would advance
    //   from either end and pass each other before we get to this
    //   case and removals would be handled in the final while loop
    //   without needing to generate the map.
    //
    // * Example below: The key at `oldTail` was removed (no longer
    //   in the `newKeyToIndexMap`), so remove that part from the
    //   DOM and advance just the `oldTail` pointer.
    //
    //         oldHead v           v oldTail
    //   oldKeys:  [0, 1, 2, 3, 4, 5, 6]
    //   newParts: [0,  ,  ,  ,  ,  , 6] <- 5 not in new map: remove
    //   newKeys:  [0, 2, 1, 4, 3, 7, 6]    5 and advance oldTail
    //         newHead ^           ^ newTail
    //
    // * Once head and tail cannot move, any mismatches are due to
    //   either new or moved items; if a new key is in the previous
    //   "old key to old index" map, move the old part to the new
    //   location, otherwise create and insert a new part. Note
    //   that when moving an old part we null its position in the
    //   oldParts array if it lies between the head and tail so we
    //   know to skip it when the pointers get there.
    //
    // * Example below: neither head nor tail match, and neither
    //   were removed; so find the `newHead` key in the
    //   `oldKeyToIndexMap`, and move that old part's DOM into the
    //   next head position (before `oldParts[oldHead]`). Last,
    //   null the part in the `oldPart` array since it was
    //   somewhere in the remaining oldParts still to be scanned
    //   (between the head and tail pointers) so that we know to
    //   skip that old part on future iterations.
    //
    //         oldHead v        v oldTail
    //   oldKeys:  [0, 1, -, 3, 4, 5, 6]
    //   newParts: [0, 2,  ,  ,  ,  , 6] <- stuck: update & move 2
    //   newKeys:  [0, 2, 1, 4, 3, 7, 6]    into place and advance
    //                                      newHead
    //         newHead ^           ^ newTail
    //
    // * Note that for moves/insertions like the one above, a part
    //   inserted at the head pointer is inserted before the
    //   current `oldParts[oldHead]`, and a part inserted at the
    //   tail pointer is inserted before `newParts[newTail+1]`. The
    //   seeming asymmetry lies in the fact that new parts are
    //   moved into place outside in, so to the right of the head
    //   pointer are old parts, and to the right of the tail
    //   pointer are new parts.
    //
    // * We always restart back from the top of the algorithm,
    //   allowing matching and simple updates in place to
    //   continue...
    //
    // * Example below: the head pointers once again match, so
    //   simply update part 1 and record it in the `newParts`
    //   array.  Last, advance both head pointers.
    //
    //         oldHead v        v oldTail
    //   oldKeys:  [0, 1, -, 3, 4, 5, 6]
    //   newParts: [0, 2, 1,  ,  ,  , 6] <- heads matched: update 1
    //   newKeys:  [0, 2, 1, 4, 3, 7, 6]    and advance both oldHead
    //                                      & newHead
    //            newHead ^        ^ newTail
    //
    // * As mentioned above, items that were moved as a result of
    //   being stuck (the final else clause in the code below) are
    //   marked with null, so we always advance old pointers over
    //   these so we're comparing the next actual old value on
    //   either end.
    //
    // * Example below: `oldHead` is null (already placed in
    //   newParts), so advance `oldHead`.
    //
    //            oldHead v     v oldTail
    //   oldKeys:  [0, 1, -, 3, 4, 5, 6] <- old head already used:
    //   newParts: [0, 2, 1,  ,  ,  , 6]    advance oldHead
    //   newKeys:  [0, 2, 1, 4, 3, 7, 6]
    //               newHead ^     ^ newTail
    //
    // * Note it's not critical to mark old parts as null when they
    //   are moved from head to tail or tail to head, since they
    //   will be outside the pointer range and never visited again.
    //
    // * Example below: Here the old tail key matches the new head
    //   key, so the part at the `oldTail` position and move its
    //   DOM to the new head position (before `oldParts[oldHead]`).
    //   Last, advance `oldTail` and `newHead` pointers.
    //
    //               oldHead v  v oldTail
    //   oldKeys:  [0, 1, -, 3, 4, 5, 6]
    //   newParts: [0, 2, 1, 4,  ,  , 6] <- old tail matches new
    //   newKeys:  [0, 2, 1, 4, 3, 7, 6]   head: update & move 4,
    //                                     advance oldTail & newHead
    //               newHead ^     ^ newTail
    //
    // * Example below: Old and new head keys match, so update the
    //   old head part in place, and advance the `oldHead` and
    //   `newHead` pointers.
    //
    //               oldHead v oldTail
    //   oldKeys:  [0, 1, -, 3, 4, 5, 6]
    //   newParts: [0, 2, 1, 4, 3,   ,6] <- heads match: update 3
    //   newKeys:  [0, 2, 1, 4, 3, 7, 6]    and advance oldHead &
    //                                      newHead
    //                  newHead ^  ^ newTail
    //
    // * Once the new or old pointers move past each other then all
    //   we have left is additions (if old list exhausted) or
    //   removals (if new list exhausted). Those are handled in the
    //   final while loops at the end.
    //
    // * Example below: `oldHead` exceeded `oldTail`, so we're done
    //   with the main loop.  Create the remaining part and insert
    //   it at the new head position, and the update is complete.
    //
    //                   (oldHead > oldTail)
    //   oldKeys:  [0, 1, -, 3, 4, 5, 6]
    //   newParts: [0, 2, 1, 4, 3, 7 ,6] <- create and insert 7
    //   newKeys:  [0, 2, 1, 4, 3, 7, 6]
    //                     newHead ^ newTail
    //
    // * Note that the order of the if/else clauses is not
    //   important to the algorithm, as long as the null checks
    //   come first (to ensure we're always working on valid old
    //   parts) and that the final else clause comes last (since
    //   that's where the expensive moves occur). The order of
    //   remaining clauses is is just a simple guess at which cases
    //   will be most common.
    //
    // * TODO(kschaaf) Note, we could calculate the longest
    //   increasing subsequence (LIS) of old items in new position,
    //   and only move those not in the LIS set. However that costs
    //   O(nlogn) time and adds a bit more code, and only helps
    //   make rare types of mutations require fewer moves. The
    //   above handles removes, adds, reversal, swaps, and single
    //   moves of contiguous items in linear time, in the minimum
    //   number of moves. As the number of multiple moves where LIS
    //   might help approaches a random shuffle, the LIS
    //   optimization becomes less helpful, so it seems not worth
    //   the code at this point. Could reconsider if a compelling
    //   case arises.

    while (oldHead <= oldTail && newHead <= newTail) {
      if (oldParts[oldHead] === null) {
        // `null` means old part at head has already been used
        // below; skip
        oldHead++;
      } else if (oldParts[oldTail] === null) {
        // `null` means old part at tail has already been used
        // below; skip
        oldTail--;
      } else if (oldKeys[oldHead] === newKeys[newHead]) {
        // Old head matches new head; update in place
        newParts[newHead] = updatePart(oldParts[oldHead], newValues[newHead]);
        oldHead++;
        newHead++;
      } else if (oldKeys[oldTail] === newKeys[newTail]) {
        // Old tail matches new tail; update in place
        newParts[newTail] = updatePart(oldParts[oldTail], newValues[newTail]);
        oldTail--;
        newTail--;
      } else if (oldKeys[oldHead] === newKeys[newTail]) {
        // Old head matches new tail; update and move to new tail
        newParts[newTail] = updatePart(oldParts[oldHead], newValues[newTail]);
        insertPartBefore(containerPart, oldParts[oldHead], newParts[newTail + 1]);
        oldHead++;
        newTail--;
      } else if (oldKeys[oldTail] === newKeys[newHead]) {
        // Old tail matches new head; update and move to new head
        newParts[newHead] = updatePart(oldParts[oldTail], newValues[newHead]);
        insertPartBefore(containerPart, oldParts[oldTail], oldParts[oldHead]);
        oldTail--;
        newHead++;
      } else {
        if (newKeyToIndexMap === undefined) {
          // Lazily generate key-to-index maps, used for removals &
          // moves below
          newKeyToIndexMap = generateMap(newKeys, newHead, newTail);
          oldKeyToIndexMap = generateMap(oldKeys, oldHead, oldTail);
        }

        if (!newKeyToIndexMap.has(oldKeys[oldHead])) {
          // Old head is no longer in new list; remove
          removePart(oldParts[oldHead]);
          oldHead++;
        } else if (!newKeyToIndexMap.has(oldKeys[oldTail])) {
          // Old tail is no longer in new list; remove
          removePart(oldParts[oldTail]);
          oldTail--;
        } else {
          // Any mismatches at this point are due to additions or
          // moves; see if we have an old part we can reuse and move
          // into place
          var oldIndex = oldKeyToIndexMap.get(newKeys[newHead]);
          var oldPart = oldIndex !== undefined ? oldParts[oldIndex] : null;

          if (oldPart === null) {
            // No old part for this value; create a new one and
            // insert it
            var newPart = createAndInsertPart(containerPart, oldParts[oldHead]);
            updatePart(newPart, newValues[newHead]);
            newParts[newHead] = newPart;
          } else {
            // Reuse old part
            newParts[newHead] = updatePart(oldPart, newValues[newHead]);
            insertPartBefore(containerPart, oldPart, oldParts[oldHead]); // This marks the old part as having been used, so that
            // it will be skipped in the first two checks above

            oldParts[oldIndex] = null;
          }

          newHead++;
        }
      }
    } // Add parts for any remaining new values


    while (newHead <= newTail) {
      // For all remaining additions, we insert before last new
      // tail, since old pointers are no longer valid
      var _newPart = createAndInsertPart(containerPart, newParts[newTail + 1]);

      updatePart(_newPart, newValues[newHead]);
      newParts[newHead++] = _newPart;
    } // Remove any remaining unused old parts


    while (oldHead <= oldTail) {
      var _oldPart = oldParts[oldHead++];

      if (_oldPart !== null) {
        removePart(_oldPart);
      }
    } // Save order of new parts for next round


    partListCache.set(containerPart, newParts);
    keyListCache.set(containerPart, newKeys);
  };
});

function toUTCDate(y, m, d) {
  return new Date(Date.UTC(y, m, d));
}

var _templateObject$2, _templateObject2$2;
var iconChevronLeft = html(_templateObject$2 || (_templateObject$2 = _taggedTemplateLiteral(["<svg height=\"24\" viewBox=\"0 0 24 24\" width=\"24\"><path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"></path></svg>"])));
var iconChevronRight = html(_templateObject2$2 || (_templateObject2$2 = _taggedTemplateLiteral(["<svg height=\"24\" viewBox=\"0 0 24 24\" width=\"24\"><path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"></path></svg>"])));

var _templateObject$1, _templateObject2$1, _templateObject3$1, _templateObject4$1, _templateObject5$1;
var resetButton = css(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteral(["\nbutton {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n\n  position: relative;\n  display: block;\n  margin: 0;\n  padding: 0;\n  background: none; /** NOTE: IE11 fix */\n  color: inherit;\n  border: none;\n  font: inherit;\n  text-align: left;\n  text-transform: inherit;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n"])));
css(_templateObject2$1 || (_templateObject2$1 = _taggedTemplateLiteral(["\na {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n\n  position: relative;\n  display: inline-block;\n  background: initial;\n  color: inherit;\n  font: inherit;\n  text-transform: inherit;\n  text-decoration: none;\n  outline: none;\n}\na:focus,\na:focus.page-selected {\n  text-decoration: underline;\n}\n"])));
css(_templateObject3$1 || (_templateObject3$1 = _taggedTemplateLiteral(["\nsvg {\n  display: block;\n  min-width: var(--svg-icon-min-width, 24px);\n  min-height: var(--svg-icon-min-height, 24px);\n  fill: var(--svg-icon-fill, currentColor);\n  pointer-events: none;\n}\n"])));
css(_templateObject4$1 || (_templateObject4$1 = _taggedTemplateLiteral(["[hidden] { display: none !important; }"])));
var datepickerVariables = css(_templateObject5$1 || (_templateObject5$1 = _taggedTemplateLiteral(["\n:host {\n  display: block;\n\n  /* --app-datepicker-width: 300px; */\n  /* --app-datepicker-primary-color: #4285f4; */\n  /* --app-datepicker-header-height: 80px; */\n}\n\n* {\n  box-sizing: border-box;\n}\n"])));

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray$7(arr, i) || _nonIterableRest();
}

function animateElement(_x, _x2) {
  return _animateElement.apply(this, arguments);
}

function _animateElement() {
  _animateElement = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee(node, opts) {
    var _ref, _ref$hasNativeWebAnim, hasNativeWebAnimation, _ref$keyframes, keyframes, _ref$options, options;

    return regenerator.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ref = opts || {}, _ref$hasNativeWebAnim = _ref.hasNativeWebAnimation, hasNativeWebAnimation = _ref$hasNativeWebAnim === void 0 ? false : _ref$hasNativeWebAnim, _ref$keyframes = _ref.keyframes, keyframes = _ref$keyframes === void 0 ? [] : _ref$keyframes, _ref$options = _ref.options, options = _ref$options === void 0 ? {
              duration: 100
            } : _ref$options;

            if (!(!Array.isArray(keyframes) || !keyframes.length)) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return");

          case 3:
            return _context.abrupt("return", new Promise(function (y) {
              if (hasNativeWebAnimation) {
                var animationEnd = node.animate(keyframes, options);

                animationEnd.onfinish = function () {
                  return y();
                };
              } else {
                var _ref2 = keyframes || [],
                    _ref3 = _slicedToArray(_ref2, 2),
                    endFrame = _ref3[1];

                var transitionEnd = function transitionEnd() {
                  node.removeEventListener('transitionend', transitionEnd);
                  y();
                };

                node.addEventListener('transitionend', transitionEnd);
                node.style.transitionDuration = "".concat(options.duration, "ms");
                if (options.easing) node.style.transitionTimingFunction = options.easing;
                Object.keys(endFrame).forEach(function (n) {
                  if (n) node.style[n] = endFrame[n];
                });
              }
            }));

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _animateElement.apply(this, arguments);
}

function getDateRange(min, max) {
  return +max - +min;
}

function getNextSelectableDate(_ref) {
  var keyCode = _ref.keyCode,
      disabledDaysSet = _ref.disabledDaysSet,
      disabledDatesSet = _ref.disabledDatesSet,
      focusedDate = _ref.focusedDate,
      maxTime = _ref.maxTime,
      minTime = _ref.minTime;
  var focusedDateTime = +focusedDate;
  var isLessThanMinTime = focusedDateTime < minTime;
  var isMoreThanMaxTime = focusedDateTime > maxTime;
  if (getDateRange(minTime, maxTime) < 864e5) return focusedDate;
  var isDisabledDay = isLessThanMinTime || isMoreThanMaxTime || disabledDaysSet.has(focusedDate.getUTCDay()) || disabledDatesSet.has(focusedDateTime);
  if (!isDisabledDay) return focusedDate;
  var selectableFocusedDateTime = 0;
  var selectableFocusedDate = isLessThanMinTime === isMoreThanMaxTime ? focusedDate : new Date(isLessThanMinTime ? minTime - 864e5 : 864e5 + maxTime);
  var fy = selectableFocusedDate.getUTCFullYear();
  var m = selectableFocusedDate.getUTCMonth();
  var d = selectableFocusedDate.getUTCDate();

  while (isDisabledDay) {
    if (isLessThanMinTime || !isMoreThanMaxTime && NEXT_DAY_KEY_CODES_SET.has(keyCode)) d += 1;
    if (isMoreThanMaxTime || !isLessThanMinTime && PREV_DAY_KEY_CODES_SET.has(keyCode)) d -= 1;
    selectableFocusedDate = toUTCDate(fy, m, d);
    selectableFocusedDateTime = +selectableFocusedDate;

    if (!isLessThanMinTime) {
      isLessThanMinTime = selectableFocusedDateTime < minTime;

      if (isLessThanMinTime) {
        selectableFocusedDate = new Date(minTime);
        selectableFocusedDateTime = +selectableFocusedDate;
        d = selectableFocusedDate.getUTCDate();
      }
    }

    if (!isMoreThanMaxTime) {
      isMoreThanMaxTime = selectableFocusedDateTime > maxTime;

      if (isMoreThanMaxTime) {
        selectableFocusedDate = new Date(maxTime);
        selectableFocusedDateTime = +selectableFocusedDate;
        d = selectableFocusedDate.getUTCDate();
      }
    }

    isDisabledDay = disabledDaysSet.has(selectableFocusedDate.getUTCDay()) || disabledDatesSet.has(selectableFocusedDateTime);
  }

  return selectableFocusedDate;
}

function computeNextFocusedDate(_ref) {
  var hasAltKey = _ref.hasAltKey,
      keyCode = _ref.keyCode,
      focusedDate = _ref.focusedDate,
      selectedDate = _ref.selectedDate,
      disabledDaysSet = _ref.disabledDaysSet,
      disabledDatesSet = _ref.disabledDatesSet,
      minTime = _ref.minTime,
      maxTime = _ref.maxTime;
  var oldFy = focusedDate.getUTCFullYear();
  var oldM = focusedDate.getUTCMonth();
  var oldD = focusedDate.getUTCDate();
  var focusedDateTime = +focusedDate;
  var sdFy = selectedDate.getUTCFullYear();
  var sdM = selectedDate.getUTCMonth();
  var notInCurrentMonth = sdM !== oldM || sdFy !== oldFy;
  var fy = oldFy;
  var m = oldM;
  var d = oldD;
  var shouldRunSwitch = true;

  if (notInCurrentMonth) {
    fy = sdFy;
    m = sdM;
    d = 1;
    shouldRunSwitch = keyCode === 34 || keyCode === 33 || keyCode === 35;
  }

  switch (shouldRunSwitch) {
    case focusedDateTime === minTime && PREV_KEY_CODES_SET.has(keyCode):
    case focusedDateTime === maxTime && NEXT_KEY_CODES_SET.has(keyCode):
      break;

    case keyCode === 38:
      {
        d -= 7;
        break;
      }

    case keyCode === 40:
      {
        d += 7;
        break;
      }

    case keyCode === 37:
      {
        d -= 1;
        break;
      }

    case keyCode === 39:
      {
        d += 1;
        break;
      }

    case keyCode === 34:
      {
        hasAltKey ? fy += 1 : m += 1;
        break;
      }

    case keyCode === 33:
      {
        hasAltKey ? fy -= 1 : m -= 1;
        break;
      }

    case keyCode === 35:
      {
        m += 1;
        d = 0;
        break;
      }

    case keyCode === 36:
    default:
      {
        d = 1;
      }
  }

  if (keyCode === 34 || keyCode === 33) {
    var totalDaysOfMonth = toUTCDate(fy, m + 1, 0).getUTCDate();

    if (d > totalDaysOfMonth) {
      d = totalDaysOfMonth;
    }
  }

  var newFocusedDate = getNextSelectableDate({
    keyCode: keyCode,
    maxTime: maxTime,
    minTime: minTime,
    disabledDaysSet: disabledDaysSet,
    disabledDatesSet: disabledDatesSet,
    focusedDate: toUTCDate(fy, m, d)
  });
  return newFocusedDate;
}

function dispatchCustomEvent(target, eventName, detail) {
  return target.dispatchEvent(new CustomEvent(eventName, {
    detail: detail,
    bubbles: true,
    composed: true
  }));
}

function findShadowTarget(ev, callback) {
  return ev.composedPath().find(function (n) {
    if (n instanceof HTMLElement) return callback(n);
    return false;
  });
}

function getFormatter(formatter) {
  return function (n) {
    return formatter.format(n).replace(/\u200e/gi, '');
  };
}

function getFormatters(locale) {
  var dateFmt = INTL_DATE_TIME_FORMAT(locale, {
    timeZone: 'UTC',
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  });
  var dayFmt = INTL_DATE_TIME_FORMAT(locale, {
    timeZone: 'UTC',
    day: 'numeric'
  });
  var fullDateFmt = INTL_DATE_TIME_FORMAT(locale, {
    timeZone: 'UTC',
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
  var longMonthYearFmt = INTL_DATE_TIME_FORMAT(locale, {
    timeZone: 'UTC',
    year: 'numeric',
    month: 'long'
  });
  var longWeekdayFmt = INTL_DATE_TIME_FORMAT(locale, {
    timeZone: 'UTC',
    weekday: 'long'
  });
  var narrowWeekdayFmt = INTL_DATE_TIME_FORMAT(locale, {
    timeZone: 'UTC',
    weekday: 'narrow'
  });
  var yearFmt = INTL_DATE_TIME_FORMAT(locale, {
    timeZone: 'UTC',
    year: 'numeric'
  });
  return {
    locale: locale,
    dateFormat: getFormatter(dateFmt),
    dayFormat: getFormatter(dayFmt),
    fullDateFormat: getFormatter(fullDateFmt),
    longMonthYearFormat: getFormatter(longMonthYearFmt),
    longWeekdayFormat: getFormatter(longWeekdayFmt),
    narrowWeekdayFormat: getFormatter(narrowWeekdayFmt),
    yearFormat: getFormatter(yearFmt)
  };
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function getWeekdays(init) {
  var _ref = init || {},
      _ref$firstDayOfWeek = _ref.firstDayOfWeek,
      firstDayOfWeek = _ref$firstDayOfWeek === void 0 ? 0 : _ref$firstDayOfWeek,
      _ref$showWeekNumber = _ref.showWeekNumber,
      showWeekNumber = _ref$showWeekNumber === void 0 ? false : _ref$showWeekNumber,
      weekLabel = _ref.weekLabel,
      longWeekdayFormat = _ref.longWeekdayFormat,
      narrowWeekdayFormat = _ref.narrowWeekdayFormat;

  var fixedFirstDayOfWeek = 1 + (firstDayOfWeek + (firstDayOfWeek < 0 ? 7 : 0)) % 7;
  var weekLabel2 = weekLabel || 'Wk';
  var initialValue = showWeekNumber ? [{
    label: weekLabel2 === 'Wk' ? 'Week' : weekLabel2,
    value: weekLabel2
  }] : [];
  var weekdays = Array.from(Array(7)).reduce(function (p, _, i) {
    var d = toUTCDate(2017, 0, fixedFirstDayOfWeek + i);
    p.push({
      label: longWeekdayFormat(d),
      value: narrowWeekdayFormat(d)
    });
    return p;
  }, initialValue);
  return weekdays;
}

function getNormalizedDate(weekNumberType, date) {
  var fy = date.getUTCFullYear();
  var m = date.getUTCMonth();
  var d = date.getUTCDate();
  var wd = date.getUTCDay();
  var offset = wd;
  if (weekNumberType === 'first-4-day-week') offset = 3;
  if (weekNumberType === 'first-day-of-year') offset = 6;
  if (weekNumberType === 'first-full-week') offset = 0;
  return toUTCDate(fy, m, d - wd + offset);
}

function getWeekNumber(weekNumberType, date) {
  var normalizedDate = getNormalizedDate(weekNumberType, date);
  var firstDayOfYear = toUTCDate(normalizedDate.getUTCFullYear(), 0, 1);
  var numDays = 1 + (+normalizedDate - +firstDayOfYear) / 864e5;
  return Math.ceil(numDays / 7);
}

function toValidWeekday(weekday) {
  if (weekday >= 0 && weekday < 7) return Math.abs(weekday);
  var weekdayOffset = weekday < 0 ? 7 * Math.ceil(Math.abs(weekday)) : 0;
  return (weekdayOffset + weekday) % 7;
}

function normalizeWeekday(weekDay, firstDayOfWeek, showWeekNumber) {
  var x = toValidWeekday(weekDay - firstDayOfWeek);
  return showWeekNumber ? 1 + x : x;
}

function _createForOfIteratorHelper$1(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$1(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray$1(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$1(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen); }

function _arrayLikeToArray$1(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function calendar(init) {
  var _ref = init || {},
      date = _ref.date,
      dayFormat = _ref.dayFormat,
      _ref$disabledDates = _ref.disabledDates,
      disabledDates = _ref$disabledDates === void 0 ? [] : _ref$disabledDates,
      _ref$disabledDays = _ref.disabledDays,
      disabledDays = _ref$disabledDays === void 0 ? [] : _ref$disabledDays,
      _ref$firstDayOfWeek = _ref.firstDayOfWeek,
      firstDayOfWeek = _ref$firstDayOfWeek === void 0 ? 0 : _ref$firstDayOfWeek,
      fullDateFormat = _ref.fullDateFormat,
      _ref$locale = _ref.locale,
      locale = _ref$locale === void 0 ? 'en-US' : _ref$locale,
      max = _ref.max,
      min = _ref.min,
      _ref$showWeekNumber = _ref.showWeekNumber,
      showWeekNumber = _ref$showWeekNumber === void 0 ? false : _ref$showWeekNumber,
      _ref$weekLabel = _ref.weekLabel,
      weekLabel = _ref$weekLabel === void 0 ? 'Week' : _ref$weekLabel,
      _ref$weekNumberType = _ref.weekNumberType,
      weekNumberType = _ref$weekNumberType === void 0 ? 'first-4-day-week' : _ref$weekNumberType;

  var firstDayOfWeek2 = toValidWeekday(firstDayOfWeek);
  var dateYear = date.getUTCFullYear();
  var dateMonth = date.getUTCMonth();
  var firstDateOfMonth = toUTCDate(dateYear, dateMonth, 1);
  var disabledDaysSet = new Set(disabledDays.map(function (n) {
    return normalizeWeekday(n, firstDayOfWeek2, showWeekNumber);
  }));
  var disabledDatesSet = new Set(disabledDates.map(function (n) {
    return +n;
  }));
  var calendarKey = [firstDateOfMonth.toJSON(), firstDayOfWeek2, locale, null == max ? '' : max.toJSON(), null == min ? '' : min.toJSON(), Array.from(disabledDaysSet).join(','), Array.from(disabledDatesSet).join(','), weekNumberType].filter(Boolean).join(':');
  var firstDayOfWeekOffset = normalizeWeekday(firstDateOfMonth.getUTCDay(), firstDayOfWeek2, showWeekNumber);
  var minTime = null == min ? +new Date('2000-01-01') : +min;
  var maxTime = null == max ? +new Date('2100-12-31') : +max;
  var colNum = showWeekNumber ? 8 : 7;
  var totalDays = toUTCDate(dateYear, 1 + dateMonth, 0).getUTCDate();
  var rows = [];
  var cols = [];
  var calendarComplete = false;
  var curDay = 1;

  for (var _i = 0, _arr = [0, 1, 2, 3, 4, 5]; _i < _arr.length; _i++) {
    var row = _arr[_i];

    var _iterator = _createForOfIteratorHelper$1([0, 1, 2, 3, 4, 5, 6].concat(colNum === 7 ? [] : [7])),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var col = _step.value;
        var idx = col + row * colNum;

        if (!calendarComplete && showWeekNumber && col === 0) {
          var weekNumberOffset = row < 1 ? firstDayOfWeek2 : 0;
          var weekNumber = getWeekNumber(weekNumberType, toUTCDate(dateYear, dateMonth, curDay - weekNumberOffset));
          var wkLabel = "".concat(weekLabel, " ").concat(weekNumber);
          cols.push({
            fullDate: null,
            label: wkLabel,
            value: "".concat(weekNumber),
            key: "".concat(calendarKey, ":").concat(wkLabel),
            disabled: true
          });
          continue;
        }

        if (calendarComplete || idx < firstDayOfWeekOffset) {
          cols.push({
            fullDate: null,
            label: '',
            value: '',
            key: "".concat(calendarKey, ":").concat(idx),
            disabled: true
          });
          continue;
        }

        var curDate = toUTCDate(dateYear, dateMonth, curDay);
        var curTime = +curDate;
        var isDisabledDay = disabledDaysSet.has(col) || disabledDatesSet.has(curTime) || curTime < minTime || curTime > maxTime;
        if (isDisabledDay) disabledDatesSet.add(curTime);
        cols.push({
          fullDate: curDate,
          label: fullDateFormat(curDate),
          value: dayFormat(curDate),
          key: "".concat(calendarKey, ":").concat(curDate.toJSON()),
          disabled: isDisabledDay
        });
        curDay += 1;
        if (curDay > totalDays) calendarComplete = true;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    rows.push(cols);
    cols = [];
  }

  return {
    disabledDatesSet: disabledDatesSet,
    calendar: rows,
    disabledDaysSet: new Set(disabledDays.map(function (n) {
      return toValidWeekday(n);
    })),
    key: calendarKey
  };
}

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
function getMultiCalendars(options) {
  var dayFormat = options.dayFormat,
      fullDateFormat = options.fullDateFormat,
      locale = options.locale,
      longWeekdayFormat = options.longWeekdayFormat,
      narrowWeekdayFormat = options.narrowWeekdayFormat,
      selectedDate = options.selectedDate,
      disabledDates = options.disabledDates,
      disabledDays = options.disabledDays,
      firstDayOfWeek = options.firstDayOfWeek,
      max = options.max,
      min = options.min,
      showWeekNumber = options.showWeekNumber,
      weekLabel = options.weekLabel,
      weekNumberType = options.weekNumberType;
  var minTime = min == null ? Number.MIN_SAFE_INTEGER : +min;
  var maxTime = max == null ? Number.MAX_SAFE_INTEGER : +max;
  var weekdays = getWeekdays({
    longWeekdayFormat: longWeekdayFormat,
    narrowWeekdayFormat: narrowWeekdayFormat,
    firstDayOfWeek: firstDayOfWeek,
    showWeekNumber: showWeekNumber,
    weekLabel: weekLabel
  });

  var getKey = function getKey(date) {
    return [locale, date.toJSON(), disabledDates === null || disabledDates === void 0 ? void 0 : disabledDates.join('_'), disabledDays === null || disabledDays === void 0 ? void 0 : disabledDays.join('_'), firstDayOfWeek, max === null || max === void 0 ? void 0 : max.toJSON(), min === null || min === void 0 ? void 0 : min.toJSON(), showWeekNumber, weekLabel, weekNumberType].filter(Boolean).join(':');
  };

  var ify = selectedDate.getUTCFullYear();
  var im = selectedDate.getUTCMonth();
  var calendarsList = [-1, 0, 1].map(function (n) {
    var firstDayOfMonth = toUTCDate(ify, im + n, 1);
    var lastDayOfMonthTime = +toUTCDate(ify, im + n + 1, 0);
    var key = getKey(firstDayOfMonth);

    if (lastDayOfMonthTime < minTime || +firstDayOfMonth > maxTime) {
      return {
        key: key,
        calendar: [],
        disabledDatesSet: new Set(),
        disabledDaysSet: new Set()
      };
    }

    var calendarDays = calendar({
      dayFormat: dayFormat,
      fullDateFormat: fullDateFormat,
      locale: locale,
      disabledDates: disabledDates,
      disabledDays: disabledDays,
      firstDayOfWeek: firstDayOfWeek,
      max: max,
      min: min,
      showWeekNumber: showWeekNumber,
      weekLabel: weekLabel,
      weekNumberType: weekNumberType,
      date: firstDayOfMonth
    });
    return _objectSpread$1(_objectSpread$1({}, calendarDays), {}, {
      key: key
    });
  });
  var calendars = [];
  var $disabledDatesSet = new Set();
  var $disabledDaysSet = new Set();

  var _iterator = _createForOfIteratorHelper(calendarsList),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var cal = _step.value;

      var disabledDatesSet = cal.disabledDatesSet,
          disabledDaysSet = cal.disabledDaysSet,
          rest = _objectWithoutProperties(cal, ["disabledDatesSet", "disabledDaysSet"]);

      if (rest.calendar.length > 0) {
        if (disabledDaysSet.size > 0) {
          var _iterator2 = _createForOfIteratorHelper(disabledDaysSet),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var o = _step2.value;
              $disabledDaysSet.add(o);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }

        if (disabledDatesSet.size > 0) {
          var _iterator3 = _createForOfIteratorHelper(disabledDatesSet),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var _o = _step3.value;
              $disabledDatesSet.add(_o);
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }
      }

      calendars.push(rest);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return {
    calendars: calendars,
    weekdays: weekdays,
    disabledDatesSet: $disabledDatesSet,
    disabledDaysSet: $disabledDaysSet,
    key: getKey(selectedDate)
  };
}

function getResolvedDate(date) {
  var dateDate = date == null ? new Date() : new Date(date);
  var isUTCDateFormat = typeof date === 'string' && (/^\d{4}-\d{2}-\d{2}$/i.test(date) || /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}(Z|\+00:00|-00:00)$/i.test(date));
  var isUnixTimestamp = typeof date === 'number' && date > 0 && isFinite(date);
  var fy = dateDate.getFullYear();
  var m = dateDate.getMonth();
  var d = dateDate.getDate();

  if (isUTCDateFormat || isUnixTimestamp) {
    fy = dateDate.getUTCFullYear();
    m = dateDate.getUTCMonth();
    d = dateDate.getUTCDate();
  }

  return toUTCDate(fy, m, d);
}

function getResolvedLocale() {
  return INTL_DATE_TIME_FORMAT && INTL_DATE_TIME_FORMAT().resolvedOptions && INTL_DATE_TIME_FORMAT().resolvedOptions().locale || 'en-US';
}

function hasClass(target, className) {
  return target.classList.contains(className);
}

function isValidDate(date, dateDate) {
  return !(date == null || !(dateDate instanceof Date) || isNaN(+dateDate));
}

function makeNumberPrecise(num) {
  return num - Math.floor(num) > 0 ? +num.toFixed(3) : num;
}

function passiveHandler(cb) {
  return {
    passive: true,
    handleEvent: cb
  };
}

function splitString(dateString, cb) {
  var dateList = typeof dateString === 'string' && dateString.length > 0 ? dateString.split(/,\s*/i) : [];
  if (!dateList.length) return [];
  return typeof cb === 'function' ? dateList.map(cb) : dateList;
}

function targetScrollTo(target, scrollToOptions) {
  if (target.scrollTo == null) {
    var _ref = scrollToOptions || {},
        top = _ref.top,
        left = _ref.left;

    target.scrollTop = top || 0;
    target.scrollLeft = left || 0;
  } else {
    target.scrollTo(scrollToOptions);
  }
}

function toFormattedDateString(date) {
  if (date instanceof Date && !isNaN(+date)) {
    var dateString = date.toJSON();
    return dateString == null ? '' : dateString.replace(/^(.+)T.+/i, '$1');
  }

  return '';
}

function toYearList(min, max) {
  if (getDateRange(min, max) < 864e5) return [];
  var fy = min.getUTCFullYear();
  return Array.from(Array(max.getUTCFullYear() - fy + 1), function (_, i) {
    return i + fy;
  });
}

function updateYearWithMinMax(date, min, max) {
  var dateTime = typeof date === 'number' ? date : +date;
  var minTime = +min;
  var maxTime = +max;
  if (dateTime < minTime) return minTime;
  if (dateTime > maxTime) return maxTime;
  return date;
}

var supportsPassive = false;

var fn = function fn() {};

var optionsBlock = {
  get passive() {
    supportsPassive = true;
    return false;
  }

};
document.addEventListener('x', fn, optionsBlock);
document.removeEventListener('x', fn);
/**
 * Do event listeners suport the `passive` option?
 */

var supportsPassiveEventListener = supportsPassive;

function toPointer(ev) {
  var clientX = ev.clientX,
      clientY = ev.clientY,
      pageX = ev.pageX,
      pageY = ev.pageY;
  var x = Math.max(pageX, clientX);
  var y = Math.max(pageY, clientY);
  var id = ev.identifier || ev.pointerId;
  return {
    x: x,
    y: y,
    id: id == null ? 0 : id
  };
}

function getFirstTouch(startPointer, ev) {
  var changedTouches = ev.changedTouches;
  if (changedTouches == null) return {
    newPointer: toPointer(ev),
    oldPointer: startPointer
  };
  var touches = Array.from(changedTouches, function (n) {
    return toPointer(n);
  });
  var newPointer = startPointer == null ? touches[0] : touches.find(function (n) {
    return n.id === startPointer.id;
  });
  return {
    newPointer: newPointer,
    oldPointer: startPointer
  };
}

function addPassiveEventListener(node, event, callback) {
  node.addEventListener(event, callback, supportsPassiveEventListener ? {
    passive: true
  } : false);
}

var Tracker = /*#__PURE__*/function () {
  function Tracker(_element, handlers) {
    _classCallCheck(this, Tracker);

    this._element = _element;
    this._startPointer = null;
    var down = handlers.down,
        move = handlers.move,
        up = handlers.up;
    this._down = this._onDown(down);
    this._move = this._onMove(move);
    this._up = this._onUp(up);

    if (_element && _element.addEventListener) {
      _element.addEventListener('mousedown', this._down);

      addPassiveEventListener(_element, 'touchstart', this._down);
      addPassiveEventListener(_element, 'touchmove', this._move);
      addPassiveEventListener(_element, 'touchend', this._up);
    }
  }

  _createClass(Tracker, [{
    key: "disconnect",
    value: function disconnect() {
      var rootEl = this._element;

      if (rootEl && rootEl.removeEventListener) {
        rootEl.removeEventListener('mousedown', this._down);
        rootEl.removeEventListener('touchstart', this._down);
        rootEl.removeEventListener('touchmove', this._move);
        rootEl.removeEventListener('touchend', this._up);
      }
    }
  }, {
    key: "_onDown",
    value: function _onDown(down) {
      var _this = this;

      return function (ev) {
        if (ev instanceof MouseEvent) {
          _this._element.addEventListener('mousemove', _this._move);

          _this._element.addEventListener('mouseup', _this._up);

          _this._element.addEventListener('mouseleave', _this._up);
        }

        var _getFirstTouch = getFirstTouch(_this._startPointer, ev),
            newPointer = _getFirstTouch.newPointer;

        down(newPointer, ev);
        _this._startPointer = newPointer;
      };
    }
  }, {
    key: "_onMove",
    value: function _onMove(move) {
      var _this2 = this;

      return function (ev) {
        _this2._updatePointers(move, ev);
      };
    }
  }, {
    key: "_onUp",
    value: function _onUp(up) {
      var _this3 = this;

      return function (ev) {
        _this3._updatePointers(up, ev, true);
      };
    }
  }, {
    key: "_updatePointers",
    value: function _updatePointers(cb, ev, shouldReset) {
      if (shouldReset && ev instanceof MouseEvent) {
        this._element.removeEventListener('mousemove', this._move);

        this._element.removeEventListener('mouseup', this._up);

        this._element.removeEventListener('mouseleave', this._up);
      }

      var _getFirstTouch2 = getFirstTouch(this._startPointer, ev),
          newPointer = _getFirstTouch2.newPointer,
          oldPointer = _getFirstTouch2.oldPointer;

      cb(newPointer, oldPointer, ev);
      this._startPointer = shouldReset ? null : newPointer;
    }
  }]);

  return Tracker;
}();

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16;

function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var Datepicker = /*#__PURE__*/function (_LitElement) {
  _inherits(Datepicker, _LitElement);

  var _super = _createSuper$2(Datepicker);

  function Datepicker() {
    var _this;

    _classCallCheck(this, Datepicker);

    _this = _super.call(this);
    _this.firstDayOfWeek = 0;
    _this.showWeekNumber = false;
    _this.weekNumberType = 'first-4-day-week';
    _this.landscape = false;
    _this.locale = getResolvedLocale();
    _this.disabledDays = '';
    _this.disabledDates = '';
    _this.weekLabel = 'Wk';
    _this.inline = false;
    _this.dragRatio = .15;
    _this._hasMin = false;
    _this._hasMax = false;
    _this._disabledDaysSet = new Set();
    _this._disabledDatesSet = new Set();
    _this._dx = -Infinity;
    _this._hasNativeWebAnimation = 'animate' in HTMLElement.prototype;
    _this._updatingDateWithKey = false;
    var todayDate = getResolvedDate();
    var allFormatters = getFormatters(_this.locale);
    var formattedTodayDate = toFormattedDateString(todayDate);
    var max = getResolvedDate('2100-12-31');
    _this.value = formattedTodayDate;
    _this.startView = 'calendar';
    _this._min = new Date(todayDate);
    _this._max = new Date(max);
    _this._todayDate = todayDate;
    _this._maxDate = max;
    _this._yearList = toYearList(todayDate, max);
    _this._selectedDate = new Date(todayDate);
    _this._focusedDate = new Date(todayDate);
    _this._formatters = allFormatters;
    return _this;
  }

  _createClass(Datepicker, [{
    key: "startView",
    get: function get() {
      return this._startView;
    },
    set: function set(val) {
      var defaultVal = !val ? 'calendar' : val;
      if (defaultVal !== 'calendar' && defaultVal !== 'yearList') return;
      var oldVal = this._startView;
      this._startView = defaultVal;
      this.requestUpdate('startView', oldVal);
    }
  }, {
    key: "min",
    get: function get() {
      return this._hasMin ? toFormattedDateString(this._min) : '';
    },
    set: function set(val) {
      var valDate = getResolvedDate(val);
      var isValidMin = isValidDate(val, valDate);
      this._min = isValidMin ? valDate : this._todayDate;
      this._hasMin = isValidMin;
      this.requestUpdate('min');
    }
  }, {
    key: "max",
    get: function get() {
      return this._hasMax ? toFormattedDateString(this._max) : '';
    },
    set: function set(val) {
      var valDate = getResolvedDate(val);
      var isValidMax = isValidDate(val, valDate);
      this._max = isValidMax ? valDate : this._maxDate;
      this._hasMax = isValidMax;
      this.requestUpdate('max');
    }
  }, {
    key: "value",
    get: function get() {
      return toFormattedDateString(this._focusedDate);
    },
    set: function set(val) {
      var valDate = getResolvedDate(val);
      var validValue = isValidDate(val, valDate) ? valDate : this._todayDate;
      this._focusedDate = new Date(validValue);
      this._selectedDate = this._lastSelectedDate = new Date(validValue);
    }
  }, {
    key: "datepickerBodyCalendarView",
    get: function get() {
      return this.shadowRoot.querySelector('.datepicker-body__calendar-view');
    }
  }, {
    key: "calendarsContainer",
    get: function get() {
      return this.shadowRoot.querySelector('.calendars-container');
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      _get(_getPrototypeOf(Datepicker.prototype), "disconnectedCallback", this).call(this);

      if (this._tracker) {
        this._tracker.disconnect();

        this._tracker = undefined;
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (this._formatters.locale !== this.locale) this._formatters = getFormatters(this.locale);
      var datepickerBodyContent = 'yearList' === this._startView ? this._renderDatepickerYearList() : this._renderDatepickerCalendar();
      var datepickerHeaderContent = this.inline ? null : html(_templateObject || (_templateObject = _taggedTemplateLiteral(["<div class=\"datepicker-header\" part=\"header\">", "</div>"])), this._renderHeaderSelectorButton());
      return html(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    ", "\n    <div class=\"datepicker-body\" part=\"body\">", "</div>\n    "])), datepickerHeaderContent, cache(datepickerBodyContent));
    }
  }, {
    key: "firstUpdated",
    value: function firstUpdated() {
      var firstFocusableElement;

      if ('calendar' === this._startView) {
        firstFocusableElement = this.inline ? this.shadowRoot.querySelector('.btn__month-selector') : this._buttonSelectorYear;
      } else {
        firstFocusableElement = this._yearViewListItem;
      }

      dispatchCustomEvent(this, 'datepicker-first-updated', {
        firstFocusableElement: firstFocusableElement,
        value: this.value
      });
    }
  }, {
    key: "updated",
    value: function updated(changed) {
      var _this2 = this;

      var startView = this._startView;

      if (changed.has('min') || changed.has('max')) {
        this._yearList = toYearList(this._min, this._max);
        if ('yearList' === startView) this.requestUpdate();
        var minTime = +this._min;
        var maxTime = +this._max;

        if (getDateRange(minTime, maxTime) > 864e5) {
          var focusedDateTime = +this._focusedDate;
          var newValue = focusedDateTime;
          if (focusedDateTime < minTime) newValue = minTime;
          if (focusedDateTime > maxTime) newValue = maxTime;
          this.value = toFormattedDateString(new Date(newValue));
        }
      }

      if (changed.has('_startView') || changed.has('startView')) {
        if ('yearList' === startView) {
          var selectedYearScrollTop = 48 * (this._selectedDate.getUTCFullYear() - this._min.getUTCFullYear() - 2);
          targetScrollTo(this._yearViewFullList, {
            top: selectedYearScrollTop,
            left: 0
          });
        }

        if ('calendar' === startView && null == this._tracker) {
          var calendarsContainer = this.calendarsContainer;
          var $down = false;
          var $move = false;
          var $transitioning = false;

          if (calendarsContainer) {
            var handlers = {
              down: function down() {
                if ($transitioning) return;
                $down = true;
                _this2._dx = 0;
              },
              move: function move(pointer, oldPointer) {
                if ($transitioning || !$down) return;
                var dx = _this2._dx;
                var hasMin = dx < 0 && hasClass(calendarsContainer, 'has-max-date') || dx > 0 && hasClass(calendarsContainer, 'has-min-date');

                if (!hasMin && Math.abs(dx) > 0 && $down) {
                  $move = true;
                  calendarsContainer.style.transform = "translateX(".concat(makeNumberPrecise(dx), "px)");
                }

                _this2._dx = hasMin ? 0 : dx + (pointer.x - oldPointer.x);
              },
              up: function () {
                var _up = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee(_$, _$$, ev) {
                  var dx, maxWidth, didPassThreshold, transitionDuration, transitionEasing, transformTo;
                  return regenerator.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          if (!($down && $move)) {
                            _context.next = 17;
                            break;
                          }

                          dx = _this2._dx;
                          maxWidth = calendarsContainer.getBoundingClientRect().width / 3;
                          didPassThreshold = Math.abs(dx) > Number(_this2.dragRatio) * maxWidth;
                          transitionDuration = 350;
                          transitionEasing = 'cubic-bezier(0, 0, .4, 1)';
                          transformTo = didPassThreshold ? makeNumberPrecise(maxWidth * (dx < 0 ? -1 : 1)) : 0;
                          $transitioning = true;
                          _context.next = 10;
                          return animateElement(calendarsContainer, {
                            hasNativeWebAnimation: _this2._hasNativeWebAnimation,
                            keyframes: [{
                              transform: "translateX(".concat(dx, "px)")
                            }, {
                              transform: "translateX(".concat(transformTo, "px)")
                            }],
                            options: {
                              duration: transitionDuration,
                              easing: transitionEasing
                            }
                          });

                        case 10:
                          if (didPassThreshold) {
                            _this2._updateMonth(dx < 0 ? 'next' : 'previous').handleEvent();
                          }

                          $down = $move = $transitioning = false;
                          _this2._dx = -Infinity;
                          calendarsContainer.removeAttribute('style');
                          dispatchCustomEvent(_this2, 'datepicker-animation-finished');
                          _context.next = 18;
                          break;

                        case 17:
                          if ($down) {
                            _this2._updateFocusedDate(ev);

                            $down = $move = false;
                            _this2._dx = -Infinity;
                          }

                        case 18:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }));

                function up(_x, _x2, _x3) {
                  return _up.apply(this, arguments);
                }

                return up;
              }()
            };
            this._tracker = new Tracker(calendarsContainer, handlers);
          }
        }

        if (changed.get('_startView') && 'calendar' === startView) {
          this._focusElement('[part="year-selector"]');
        }
      }

      if (this._updatingDateWithKey) {
        this._focusElement('[part="calendars"]:nth-of-type(2) .day--focused');

        this._updatingDateWithKey = false;
      }
    }
  }, {
    key: "_focusElement",
    value: function _focusElement(selector) {
      var focusedTarget = this.shadowRoot.querySelector(selector);
      if (focusedTarget) focusedTarget.focus();
    }
  }, {
    key: "_renderHeaderSelectorButton",
    value: function _renderHeaderSelectorButton() {
      var _this$_formatters = this._formatters,
          yearFormat = _this$_formatters.yearFormat,
          dateFormat = _this$_formatters.dateFormat;
      var isCalendarView = this.startView === 'calendar';
      var focusedDate = this._focusedDate;
      var formattedDate = dateFormat(focusedDate);
      var formatterFy = yearFormat(focusedDate);
      return html(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    <button\n      class=\"", "\"\n      type=\"button\"\n      part=\"year-selector\"\n      data-view=\"", "\"\n      @click=\"", "\">", "</button>\n\n    <div class=\"datepicker-toolbar\" part=\"toolbar\">\n      <button\n        class=\"", "\"\n        type=\"button\"\n        part=\"calendar-selector\"\n        data-view=\"", "\"\n        @click=\"", "\">", "</button>\n    </div>\n    "])), classMap({
        'btn__year-selector': true,
        selected: !isCalendarView
      }), 'yearList', this._updateView('yearList'), formatterFy, classMap({
        'btn__calendar-selector': true,
        selected: isCalendarView
      }), 'calendar', this._updateView('calendar'), formattedDate);
    }
  }, {
    key: "_renderDatepickerYearList",
    value: function _renderDatepickerYearList() {
      var yearFormat = this._formatters.yearFormat;

      var focusedDateFy = this._focusedDate.getUTCFullYear();

      return html(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    <div class=\"datepicker-body__year-list-view\" part=\"year-list-view\">\n      <div class=\"year-list-view__full-list\" part=\"year-list\" @click=\"", "\">\n      ", "</div>\n    </div>\n    "])), this._updateYear, this._yearList.map(function (n) {
        return html(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["<button\n        class=\"", "\"\n        type=\"button\"\n        part=\"year\"\n        .year=\"", "\">", "</button>"])), classMap({
          'year-list-view__list-item': true,
          'year--selected': focusedDateFy === n
        }), n, yearFormat(toUTCDate(n, 0, 1)));
      }));
    }
  }, {
    key: "_renderDatepickerCalendar",
    value: function _renderDatepickerCalendar() {
      var _this3 = this;

      var _this$_formatters2 = this._formatters,
          longMonthYearFormat = _this$_formatters2.longMonthYearFormat,
          dayFormat = _this$_formatters2.dayFormat,
          fullDateFormat = _this$_formatters2.fullDateFormat,
          longWeekdayFormat = _this$_formatters2.longWeekdayFormat,
          narrowWeekdayFormat = _this$_formatters2.narrowWeekdayFormat;
      var disabledDays = splitString(this.disabledDays, Number);
      var disabledDates = splitString(this.disabledDates, getResolvedDate);
      var showWeekNumber = this.showWeekNumber;
      var $focusedDate = this._focusedDate;
      var firstDayOfWeek = this.firstDayOfWeek;
      var todayDate = getResolvedDate();
      var $selectedDate = this._selectedDate;
      var $max = this._max;
      var $min = this._min;

      var _getMultiCalendars = getMultiCalendars({
        dayFormat: dayFormat,
        fullDateFormat: fullDateFormat,
        longWeekdayFormat: longWeekdayFormat,
        narrowWeekdayFormat: narrowWeekdayFormat,
        firstDayOfWeek: firstDayOfWeek,
        disabledDays: disabledDays,
        disabledDates: disabledDates,
        locale: this.locale,
        selectedDate: $selectedDate,
        showWeekNumber: this.showWeekNumber,
        weekNumberType: this.weekNumberType,
        max: $max,
        min: $min,
        weekLabel: this.weekLabel
      }),
          calendars = _getMultiCalendars.calendars,
          disabledDaysSet = _getMultiCalendars.disabledDaysSet,
          disabledDatesSet = _getMultiCalendars.disabledDatesSet,
          weekdays = _getMultiCalendars.weekdays;

      var hasMinDate = !calendars[0].calendar.length;
      var hasMaxDate = !calendars[2].calendar.length;
      var weekdaysContent = weekdays.map(function (o) {
        return html(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["<th\n        class=\"calendar-weekday\"\n        part=\"calendar-weekday\"\n        role=\"columnheader\"\n        aria-label=\"", "\"\n      >\n        <div class=\"weekday\" part=\"weekday\">", "</div>\n      </th>"])), o.label, o.value);
      });
      var calendarsContent = repeat(calendars, function (n) {
        return n.key;
      }, function (_ref, ci) {
        var calendar = _ref.calendar;

        if (!calendar.length) {
          return html(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["<div class=\"calendar-container\" part=\"calendar\"></div>"])));
        }

        var calendarAriaId = "calendarcaption".concat(ci);
        var midCalendarFullDate = calendar[1][1].fullDate;
        var isMidCalendar = ci === 1;
        var $newFocusedDate = isMidCalendar && !_this3._isInVisibleMonth($focusedDate, $selectedDate) ? computeNextFocusedDate({
          disabledDaysSet: disabledDaysSet,
          disabledDatesSet: disabledDatesSet,
          hasAltKey: false,
          keyCode: 36,
          focusedDate: $focusedDate,
          selectedDate: $selectedDate,
          minTime: +$min,
          maxTime: +$max
        }) : $focusedDate;
        return html(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      <div class=\"calendar-container\" part=\"calendar\">\n        <table class=\"calendar-table\" part=\"table\" role=\"grid\" aria-labelledby=\"", "\">\n          <caption id=\"", "\">\n            <div class=\"calendar-label\" part=\"label\">", "</div>\n          </caption>\n\n          <thead role=\"rowgroup\">\n            <tr class=\"calendar-weekdays\" part=\"weekdays\" role=\"row\">", "</tr>\n          </thead>\n\n          <tbody role=\"rowgroup\">", "</tbody>\n        </table>\n      </div>\n      "])), calendarAriaId, calendarAriaId, midCalendarFullDate ? longMonthYearFormat(midCalendarFullDate) : '', weekdaysContent, calendar.map(function (calendarRow) {
          return html(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["<tr role=\"row\">", "</tr>"])), calendarRow.map(function (calendarCol, i) {
            var disabled = calendarCol.disabled,
                fullDate = calendarCol.fullDate,
                label = calendarCol.label,
                value = calendarCol.value;

            if (!fullDate && value && showWeekNumber && i < 1) {
              return html(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["<th\n                      class=\"full-calendar__day weekday-label\"\n                      part=\"calendar-day\"\n                      scope=\"row\"\n                      role=\"rowheader\"\n                      abbr=\"", "\"\n                      aria-label=\"", "\"\n                    >", "</th>"])), label, label, value);
            }

            if (!value || !fullDate) {
              return html(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["<td class=\"full-calendar__day day--empty\" part=\"calendar-day\"></td>"])));
            }

            var curTime = +new Date(fullDate);
            var isCurrentDate = +$focusedDate === curTime;
            var shouldTab = isMidCalendar && $newFocusedDate.getUTCDate() === Number(value);
            return html(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n                  <td\n                    tabindex=\"", "\"\n                    class=\"", "\"\n                    part=\"calendar-day\"\n                    role=\"gridcell\"\n                    aria-disabled=\"", "\"\n                    aria-label=\"", "\"\n                    aria-selected=\"", "\"\n                    .fullDate=\"", "\"\n                    .day=\"", "\"\n                  >\n                    <div class=\"calendar-day\" part=\"day\">", "</div>\n                  </td>\n                  "])), shouldTab ? '0' : '-1', classMap({
              'full-calendar__day': true,
              'day--disabled': disabled,
              'day--today': +todayDate === curTime,
              'day--focused': !disabled && isCurrentDate
            }), disabled ? 'true' : 'false', label, isCurrentDate ? 'true' : 'false', fullDate, value, value);
          }));
        }));
      });
      this._disabledDatesSet = disabledDatesSet;
      this._disabledDaysSet = disabledDaysSet;
      return html(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n    <div class=\"datepicker-body__calendar-view\" part=\"calendar-view\">\n      <div class=\"calendar-view__month-selector\" part=\"month-selectors\">\n        <div class=\"month-selector-container\">", "</div>\n\n        <div class=\"month-selector-container\">", "</div>\n      </div>\n\n      <div\n        class=\"", "\"\n        part=\"calendars\"\n        @keyup=\"", "\"\n      >", "</div>\n    </div>\n    "])), hasMinDate ? null : html(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n          <button\n            class=\"btn__month-selector\"\n            type=\"button\"\n            part=\"month-selector\"\n            aria-label=\"Previous month\"\n            @click=\"", "\"\n          >", "</button>\n        "])), this._updateMonth('previous'), iconChevronLeft), hasMaxDate ? null : html(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n          <button\n            class=\"btn__month-selector\"\n            type=\"button\"\n            part=\"month-selector\"\n            aria-label=\"Next month\"\n            @click=\"", "\"\n          >", "</button>\n        "])), this._updateMonth('next'), iconChevronRight), classMap({
        'calendars-container': true,
        'has-min-date': hasMinDate,
        'has-max-date': hasMaxDate
      }), this._updateFocusedDateWithKeyboard, calendarsContent);
    }
  }, {
    key: "_updateView",
    value: function _updateView(view) {
      var _this4 = this;

      var handleUpdateView = function handleUpdateView() {
        if ('calendar' === view) {
          _this4._selectedDate = _this4._lastSelectedDate = new Date(updateYearWithMinMax(_this4._focusedDate, _this4._min, _this4._max));
        }

        _this4._startView = view;
      };

      return passiveHandler(handleUpdateView);
    }
  }, {
    key: "_updateMonth",
    value: function _updateMonth(updateType) {
      var _this5 = this;

      var handleUpdateMonth = function handleUpdateMonth() {
        var calendarsContainer = _this5.calendarsContainer;
        if (null == calendarsContainer) return _this5.updateComplete;
        var dateDate = _this5._lastSelectedDate || _this5._selectedDate;
        var minDate = _this5._min;
        var maxDate = _this5._max;
        var isPreviousMonth = updateType === 'previous';
        var newSelectedDate = toUTCDate(dateDate.getUTCFullYear(), dateDate.getUTCMonth() + (isPreviousMonth ? -1 : 1), 1);
        var newSelectedDateFy = newSelectedDate.getUTCFullYear();
        var newSelectedDateM = newSelectedDate.getUTCMonth();
        var minDateFy = minDate.getUTCFullYear();
        var minDateM = minDate.getUTCMonth();
        var maxDateFy = maxDate.getUTCFullYear();
        var maxDateM = maxDate.getUTCMonth();
        var isLessThanYearAndMonth = newSelectedDateFy < minDateFy || newSelectedDateFy <= minDateFy && newSelectedDateM < minDateM;
        var isMoreThanYearAndMonth = newSelectedDateFy > maxDateFy || newSelectedDateFy >= maxDateFy && newSelectedDateM > maxDateM;
        if (isLessThanYearAndMonth || isMoreThanYearAndMonth) return _this5.updateComplete;
        _this5._lastSelectedDate = newSelectedDate;
        _this5._selectedDate = _this5._lastSelectedDate;
        return _this5.updateComplete;
      };

      return passiveHandler(handleUpdateMonth);
    }
  }, {
    key: "_updateYear",
    value: function _updateYear(ev) {
      var selectedYearEl = findShadowTarget(ev, function (n) {
        return hasClass(n, 'year-list-view__list-item');
      });
      if (selectedYearEl == null) return;
      var newFocusedDate = updateYearWithMinMax(new Date(this._focusedDate).setUTCFullYear(+selectedYearEl.year), this._min, this._max);
      this._selectedDate = this._lastSelectedDate = new Date(newFocusedDate);
      this._focusedDate = new Date(newFocusedDate);
      this._startView = 'calendar';
    }
  }, {
    key: "_updateFocusedDate",
    value: function _updateFocusedDate(ev) {
      var selectedDayEl = findShadowTarget(ev, function (n) {
        return hasClass(n, 'full-calendar__day');
      });
      if (selectedDayEl == null || ['day--empty', 'day--disabled', 'day--focused', 'weekday-label'].some(function (n) {
        return hasClass(selectedDayEl, n);
      })) return;
      this._focusedDate = new Date(selectedDayEl.fullDate);
      dispatchCustomEvent(this, 'datepicker-value-updated', {
        isKeypress: false,
        value: this.value
      });
    }
  }, {
    key: "_updateFocusedDateWithKeyboard",
    value: function _updateFocusedDateWithKeyboard(ev) {
      var keyCode = ev.keyCode;

      if (13 === keyCode || 32 === keyCode) {
        dispatchCustomEvent(this, 'datepicker-value-updated', {
          keyCode: keyCode,
          isKeypress: true,
          value: this.value
        });
        this._focusedDate = new Date(this._selectedDate);
        return;
      }

      if (keyCode === 9 || !ALL_NAV_KEYS_SET.has(keyCode)) return;
      var selectedDate = this._selectedDate;
      var nextFocusedDate = computeNextFocusedDate({
        keyCode: keyCode,
        selectedDate: selectedDate,
        disabledDatesSet: this._disabledDatesSet,
        disabledDaysSet: this._disabledDaysSet,
        focusedDate: this._focusedDate,
        hasAltKey: ev.altKey,
        maxTime: +this._max,
        minTime: +this._min
      });

      if (!this._isInVisibleMonth(nextFocusedDate, selectedDate)) {
        this._selectedDate = this._lastSelectedDate = nextFocusedDate;
      }

      this._focusedDate = nextFocusedDate;
      this._updatingDateWithKey = true;
      dispatchCustomEvent(this, 'datepicker-value-updated', {
        keyCode: keyCode,
        isKeypress: true,
        value: this.value
      });
    }
  }, {
    key: "_isInVisibleMonth",
    value: function _isInVisibleMonth(dateA, dateB) {
      var dateAFy = dateA.getUTCFullYear();
      var dateAM = dateA.getUTCMonth();
      var dateBFY = dateB.getUTCFullYear();
      var dateBM = dateB.getUTCMonth();
      return dateAFy === dateBFY && dateAM === dateBM;
    }
  }]);

  return Datepicker;
}(LitElement);
Datepicker.styles = [datepickerVariables, resetButton, css(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n    :host {\n      width: 312px;\n      /** NOTE: Magic number as 16:9 aspect ratio does not look good */\n      /* height: calc((var(--app-datepicker-width) / .66) - var(--app-datepicker-footer-height, 56px)); */\n      background-color: var(--app-datepicker-bg-color, #fff);\n      color: var(--app-datepicker-color, #000);\n      border-radius:\n        var(--app-datepicker-border-top-left-radius, 0)\n        var(--app-datepicker-border-top-right-radius, 0)\n        var(--app-datepicker-border-bottom-right-radius, 0)\n        var(--app-datepicker-border-bottom-left-radius, 0);\n      contain: content;\n      overflow: hidden;\n    }\n    :host([landscape]) {\n      display: flex;\n\n      /** <iphone-5-landscape-width> - <standard-side-margin-width> */\n      min-width: calc(568px - 16px * 2);\n      width: calc(568px - 16px * 2);\n    }\n\n    .datepicker-header + .datepicker-body {\n      border-top: 1px solid var(--app-datepicker-separator-color, #ddd);\n    }\n    :host([landscape]) > .datepicker-header + .datepicker-body {\n      border-top: none;\n      border-left: 1px solid var(--app-datepicker-separator-color, #ddd);\n    }\n\n    .datepicker-header {\n      display: flex;\n      flex-direction: column;\n      align-items: flex-start;\n\n      position: relative;\n      padding: 16px 24px;\n    }\n    :host([landscape]) > .datepicker-header {\n      /** :this.<one-liner-month-day-width> + :this.<side-padding-width> */\n      min-width: calc(14ch + 24px * 2);\n    }\n\n    .btn__year-selector,\n    .btn__calendar-selector {\n      color: var(--app-datepicker-selector-color, rgba(0, 0, 0, .55));\n      cursor: pointer;\n      /* outline: none; */\n    }\n    .btn__year-selector.selected,\n    .btn__calendar-selector.selected {\n      color: currentColor;\n    }\n\n    /**\n      * NOTE: IE11-only fix. This prevents formatted focused date from overflowing the container.\n      */\n    .datepicker-toolbar {\n      width: 100%;\n    }\n\n    .btn__year-selector {\n      font-size: 16px;\n      font-weight: 700;\n    }\n    .btn__calendar-selector {\n      font-size: 36px;\n      font-weight: 700;\n      line-height: 1;\n    }\n\n    .datepicker-body {\n      position: relative;\n      width: 100%;\n      overflow: hidden;\n    }\n\n    .datepicker-body__calendar-view {\n      min-height: 56px;\n    }\n\n    .calendar-view__month-selector {\n      display: flex;\n      align-items: center;\n\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      padding: 0 8px;\n      z-index: 1;\n    }\n\n    .month-selector-container {\n      max-height: 56px;\n      height: 100%;\n    }\n    .month-selector-container + .month-selector-container {\n      margin: 0 0 0 auto;\n    }\n\n    .btn__month-selector {\n      padding: calc((56px - 24px) / 2);\n      /**\n        * NOTE: button element contains no text, only SVG.\n        * No extra height will incur with such setting.\n        */\n      line-height: 0;\n    }\n    .btn__month-selector > svg {\n      fill: currentColor;\n    }\n\n    .calendars-container {\n      display: flex;\n      justify-content: center;\n\n      position: relative;\n      top: 0;\n      left: calc(-100%);\n      width: calc(100% * 3);\n      transform: translateZ(0);\n      will-change: transform;\n      /**\n        * NOTE: Required for Pointer Events API to work on touch devices.\n        * Native `pan-y` action will be fired by the browsers since we only care about the\n        * horizontal direction. This is great as vertical scrolling still works even when touch\n        * event happens on a datepicker's calendar.\n        */\n      touch-action: pan-y;\n      /* outline: none; */\n    }\n\n    .year-list-view__full-list {\n      max-height: calc(48px * 7);\n      overflow-y: auto;\n\n      scrollbar-color: var(--app-datepicker-scrollbar-thumb-bg-color, rgba(0, 0, 0, .35)) rgba(0, 0, 0, 0);\n      scrollbar-width: thin;\n    }\n    .year-list-view__full-list::-webkit-scrollbar {\n      width: 8px;\n      background-color: rgba(0, 0, 0, 0);\n    }\n    .year-list-view__full-list::-webkit-scrollbar-thumb {\n      background-color: var(--app-datepicker-scrollbar-thumb-bg-color, rgba(0, 0, 0, .35));\n      border-radius: 50px;\n    }\n    .year-list-view__full-list::-webkit-scrollbar-thumb:hover {\n      background-color: var(--app-datepicker-scrollbar-thumb-hover-bg-color, rgba(0, 0, 0, .5));\n    }\n\n    .calendar-weekdays > th,\n    .weekday-label {\n      color: var(--app-datepicker-weekday-color, rgba(0, 0, 0, .55));\n      font-weight: 400;\n      transform: translateZ(0);\n      will-change: transform;\n    }\n\n    .calendar-container,\n    .calendar-label,\n    .calendar-table {\n      width: 100%;\n    }\n\n    .calendar-container {\n      position: relative;\n      padding: 0 16px 16px;\n    }\n\n    .calendar-table {\n      -moz-user-select: none;\n      -webkit-user-select: none;\n      user-select: none;\n\n      border-collapse: collapse;\n      border-spacing: 0;\n      text-align: center;\n    }\n\n    .calendar-label {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n\n      height: 56px;\n      font-weight: 500;\n      text-align: center;\n    }\n\n    .calendar-weekday,\n    .full-calendar__day {\n      position: relative;\n      width: calc(100% / 7);\n      height: 0;\n      padding: calc(100% / 7 / 2) 0;\n      outline: none;\n      text-align: center;\n    }\n    .full-calendar__day:not(.day--disabled):focus {\n      outline: #000 dotted 1px;\n      outline: -webkit-focus-ring-color auto 1px;\n    }\n    :host([showweeknumber]) .calendar-weekday,\n    :host([showweeknumber]) .full-calendar__day {\n      width: calc(100% / 8);\n      padding-top: calc(100% / 8);\n      padding-bottom: 0;\n    }\n    :host([showweeknumber]) th.weekday-label {\n      padding: 0;\n    }\n\n    /**\n      * NOTE: Interesting fact! That is ::after will trigger paint when dragging. This will trigger\n      * layout and paint on **ONLY** affected nodes. This is much cheaper as compared to rendering\n      * all :::after of all calendar day elements. When dragging the entire calendar container,\n      * because of all layout and paint trigger on each and every ::after, this becomes a expensive\n      * task for the browsers especially on low-end devices. Even though animating opacity is much\n      * cheaper, the technique does not work here. Adding 'will-change' will further reduce overall\n      * painting at the expense of memory consumption as many cells in a table has been promoted\n      * a its own layer.\n      */\n    .full-calendar__day:not(.day--empty):not(.day--disabled):not(.weekday-label) {\n      transform: translateZ(0);\n      will-change: transform;\n    }\n    .full-calendar__day:not(.day--empty):not(.day--disabled):not(.weekday-label).day--focused::after,\n    .full-calendar__day:not(.day--empty):not(.day--disabled):not(.day--focused):not(.weekday-label):hover::after {\n      content: '';\n      display: block;\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      background-color: var(--app-datepicker-accent-color, #1a73e8);\n      border-radius: 50%;\n      opacity: 0;\n      pointer-events: none;\n    }\n    .full-calendar__day:not(.day--empty):not(.day--disabled):not(.weekday-label) {\n      cursor: pointer;\n      pointer-events: auto;\n      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n    }\n    .full-calendar__day.day--focused:not(.day--empty):not(.day--disabled):not(.weekday-label)::after,\n    .full-calendar__day.day--today.day--focused:not(.day--empty):not(.day--disabled):not(.weekday-label)::after {\n      opacity: 1;\n    }\n\n    .calendar-weekday > .weekday,\n    .full-calendar__day > .calendar-day {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n\n      position: absolute;\n      top: 5%;\n      left: 5%;\n      width: 90%;\n      height: 90%;\n      color: currentColor;\n      font-size: 14px;\n      pointer-events: none;\n      z-index: 1;\n    }\n    .full-calendar__day.day--today {\n      color: var(--app-datepicker-accent-color, #1a73e8);\n    }\n    .full-calendar__day.day--focused,\n    .full-calendar__day.day--today.day--focused {\n      color: var(--app-datepicker-focused-day-color, #fff);\n    }\n    .full-calendar__day.day--empty,\n    .full-calendar__day.weekday-label,\n    .full-calendar__day.day--disabled > .calendar-day {\n      pointer-events: none;\n    }\n    .full-calendar__day.day--disabled:not(.day--today) {\n      color: var(--app-datepicker-disabled-day-color, rgba(0, 0, 0, .55));\n    }\n\n    .year-list-view__list-item {\n      position: relative;\n      width: 100%;\n      padding: 12px 16px;\n      text-align: center;\n      /** NOTE: Reduce paint when hovering and scrolling, but this increases memory usage */\n      /* will-change: opacity; */\n      /* outline: none; */\n    }\n    .year-list-view__list-item::after {\n      content: '';\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      background-color: var(--app-datepicker-focused-year-bg-color, #000);\n      opacity: 0;\n      pointer-events: none;\n    }\n    .year-list-view__list-item:focus::after {\n      opacity: .05;\n    }\n    .year-list-view__list-item.year--selected {\n      color: var(--app-datepicker-accent-color, #1a73e8);\n      font-size: 24px;\n      font-weight: 500;\n    }\n\n    @media (any-hover: hover) {\n      .btn__month-selector:hover,\n      .year-list-view__list-item:hover {\n        cursor: pointer;\n      }\n      .full-calendar__day:not(.day--empty):not(.day--disabled):not(.day--focused):not(.weekday-label):hover::after {\n        opacity: .15;\n      }\n      .year-list-view__list-item:hover::after {\n        opacity: .05;\n      }\n    }\n\n    @supports (background: -webkit-canvas(squares)) {\n      .calendar-container {\n        padding: 56px 16px 16px;\n      }\n\n      table > caption {\n        position: absolute;\n        top: 0;\n        left: 50%;\n        transform: translate3d(-50%, 0, 0);\n        will-change: transform;\n      }\n    }\n    "], ["\n    :host {\n      width: 312px;\n      /** NOTE: Magic number as 16:9 aspect ratio does not look good */\n      /* height: calc((var(--app-datepicker-width) / .66) - var(--app-datepicker-footer-height, 56px)); */\n      background-color: var(--app-datepicker-bg-color, #fff);\n      color: var(--app-datepicker-color, #000);\n      border-radius:\n        var(--app-datepicker-border-top-left-radius, 0)\n        var(--app-datepicker-border-top-right-radius, 0)\n        var(--app-datepicker-border-bottom-right-radius, 0)\n        var(--app-datepicker-border-bottom-left-radius, 0);\n      contain: content;\n      overflow: hidden;\n    }\n    :host([landscape]) {\n      display: flex;\n\n      /** <iphone-5-landscape-width> - <standard-side-margin-width> */\n      min-width: calc(568px - 16px * 2);\n      width: calc(568px - 16px * 2);\n    }\n\n    .datepicker-header + .datepicker-body {\n      border-top: 1px solid var(--app-datepicker-separator-color, #ddd);\n    }\n    :host([landscape]) > .datepicker-header + .datepicker-body {\n      border-top: none;\n      border-left: 1px solid var(--app-datepicker-separator-color, #ddd);\n    }\n\n    .datepicker-header {\n      display: flex;\n      flex-direction: column;\n      align-items: flex-start;\n\n      position: relative;\n      padding: 16px 24px;\n    }\n    :host([landscape]) > .datepicker-header {\n      /** :this.<one-liner-month-day-width> + :this.<side-padding-width> */\n      min-width: calc(14ch + 24px * 2);\n    }\n\n    .btn__year-selector,\n    .btn__calendar-selector {\n      color: var(--app-datepicker-selector-color, rgba(0, 0, 0, .55));\n      cursor: pointer;\n      /* outline: none; */\n    }\n    .btn__year-selector.selected,\n    .btn__calendar-selector.selected {\n      color: currentColor;\n    }\n\n    /**\n      * NOTE: IE11-only fix. This prevents formatted focused date from overflowing the container.\n      */\n    .datepicker-toolbar {\n      width: 100%;\n    }\n\n    .btn__year-selector {\n      font-size: 16px;\n      font-weight: 700;\n    }\n    .btn__calendar-selector {\n      font-size: 36px;\n      font-weight: 700;\n      line-height: 1;\n    }\n\n    .datepicker-body {\n      position: relative;\n      width: 100%;\n      overflow: hidden;\n    }\n\n    .datepicker-body__calendar-view {\n      min-height: 56px;\n    }\n\n    .calendar-view__month-selector {\n      display: flex;\n      align-items: center;\n\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      padding: 0 8px;\n      z-index: 1;\n    }\n\n    .month-selector-container {\n      max-height: 56px;\n      height: 100%;\n    }\n    .month-selector-container + .month-selector-container {\n      margin: 0 0 0 auto;\n    }\n\n    .btn__month-selector {\n      padding: calc((56px - 24px) / 2);\n      /**\n        * NOTE: button element contains no text, only SVG.\n        * No extra height will incur with such setting.\n        */\n      line-height: 0;\n    }\n    .btn__month-selector > svg {\n      fill: currentColor;\n    }\n\n    .calendars-container {\n      display: flex;\n      justify-content: center;\n\n      position: relative;\n      top: 0;\n      left: calc(-100%);\n      width: calc(100% * 3);\n      transform: translateZ(0);\n      will-change: transform;\n      /**\n        * NOTE: Required for Pointer Events API to work on touch devices.\n        * Native \\`pan-y\\` action will be fired by the browsers since we only care about the\n        * horizontal direction. This is great as vertical scrolling still works even when touch\n        * event happens on a datepicker's calendar.\n        */\n      touch-action: pan-y;\n      /* outline: none; */\n    }\n\n    .year-list-view__full-list {\n      max-height: calc(48px * 7);\n      overflow-y: auto;\n\n      scrollbar-color: var(--app-datepicker-scrollbar-thumb-bg-color, rgba(0, 0, 0, .35)) rgba(0, 0, 0, 0);\n      scrollbar-width: thin;\n    }\n    .year-list-view__full-list::-webkit-scrollbar {\n      width: 8px;\n      background-color: rgba(0, 0, 0, 0);\n    }\n    .year-list-view__full-list::-webkit-scrollbar-thumb {\n      background-color: var(--app-datepicker-scrollbar-thumb-bg-color, rgba(0, 0, 0, .35));\n      border-radius: 50px;\n    }\n    .year-list-view__full-list::-webkit-scrollbar-thumb:hover {\n      background-color: var(--app-datepicker-scrollbar-thumb-hover-bg-color, rgba(0, 0, 0, .5));\n    }\n\n    .calendar-weekdays > th,\n    .weekday-label {\n      color: var(--app-datepicker-weekday-color, rgba(0, 0, 0, .55));\n      font-weight: 400;\n      transform: translateZ(0);\n      will-change: transform;\n    }\n\n    .calendar-container,\n    .calendar-label,\n    .calendar-table {\n      width: 100%;\n    }\n\n    .calendar-container {\n      position: relative;\n      padding: 0 16px 16px;\n    }\n\n    .calendar-table {\n      -moz-user-select: none;\n      -webkit-user-select: none;\n      user-select: none;\n\n      border-collapse: collapse;\n      border-spacing: 0;\n      text-align: center;\n    }\n\n    .calendar-label {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n\n      height: 56px;\n      font-weight: 500;\n      text-align: center;\n    }\n\n    .calendar-weekday,\n    .full-calendar__day {\n      position: relative;\n      width: calc(100% / 7);\n      height: 0;\n      padding: calc(100% / 7 / 2) 0;\n      outline: none;\n      text-align: center;\n    }\n    .full-calendar__day:not(.day--disabled):focus {\n      outline: #000 dotted 1px;\n      outline: -webkit-focus-ring-color auto 1px;\n    }\n    :host([showweeknumber]) .calendar-weekday,\n    :host([showweeknumber]) .full-calendar__day {\n      width: calc(100% / 8);\n      padding-top: calc(100% / 8);\n      padding-bottom: 0;\n    }\n    :host([showweeknumber]) th.weekday-label {\n      padding: 0;\n    }\n\n    /**\n      * NOTE: Interesting fact! That is ::after will trigger paint when dragging. This will trigger\n      * layout and paint on **ONLY** affected nodes. This is much cheaper as compared to rendering\n      * all :::after of all calendar day elements. When dragging the entire calendar container,\n      * because of all layout and paint trigger on each and every ::after, this becomes a expensive\n      * task for the browsers especially on low-end devices. Even though animating opacity is much\n      * cheaper, the technique does not work here. Adding 'will-change' will further reduce overall\n      * painting at the expense of memory consumption as many cells in a table has been promoted\n      * a its own layer.\n      */\n    .full-calendar__day:not(.day--empty):not(.day--disabled):not(.weekday-label) {\n      transform: translateZ(0);\n      will-change: transform;\n    }\n    .full-calendar__day:not(.day--empty):not(.day--disabled):not(.weekday-label).day--focused::after,\n    .full-calendar__day:not(.day--empty):not(.day--disabled):not(.day--focused):not(.weekday-label):hover::after {\n      content: '';\n      display: block;\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      background-color: var(--app-datepicker-accent-color, #1a73e8);\n      border-radius: 50%;\n      opacity: 0;\n      pointer-events: none;\n    }\n    .full-calendar__day:not(.day--empty):not(.day--disabled):not(.weekday-label) {\n      cursor: pointer;\n      pointer-events: auto;\n      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n    }\n    .full-calendar__day.day--focused:not(.day--empty):not(.day--disabled):not(.weekday-label)::after,\n    .full-calendar__day.day--today.day--focused:not(.day--empty):not(.day--disabled):not(.weekday-label)::after {\n      opacity: 1;\n    }\n\n    .calendar-weekday > .weekday,\n    .full-calendar__day > .calendar-day {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n\n      position: absolute;\n      top: 5%;\n      left: 5%;\n      width: 90%;\n      height: 90%;\n      color: currentColor;\n      font-size: 14px;\n      pointer-events: none;\n      z-index: 1;\n    }\n    .full-calendar__day.day--today {\n      color: var(--app-datepicker-accent-color, #1a73e8);\n    }\n    .full-calendar__day.day--focused,\n    .full-calendar__day.day--today.day--focused {\n      color: var(--app-datepicker-focused-day-color, #fff);\n    }\n    .full-calendar__day.day--empty,\n    .full-calendar__day.weekday-label,\n    .full-calendar__day.day--disabled > .calendar-day {\n      pointer-events: none;\n    }\n    .full-calendar__day.day--disabled:not(.day--today) {\n      color: var(--app-datepicker-disabled-day-color, rgba(0, 0, 0, .55));\n    }\n\n    .year-list-view__list-item {\n      position: relative;\n      width: 100%;\n      padding: 12px 16px;\n      text-align: center;\n      /** NOTE: Reduce paint when hovering and scrolling, but this increases memory usage */\n      /* will-change: opacity; */\n      /* outline: none; */\n    }\n    .year-list-view__list-item::after {\n      content: '';\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      background-color: var(--app-datepicker-focused-year-bg-color, #000);\n      opacity: 0;\n      pointer-events: none;\n    }\n    .year-list-view__list-item:focus::after {\n      opacity: .05;\n    }\n    .year-list-view__list-item.year--selected {\n      color: var(--app-datepicker-accent-color, #1a73e8);\n      font-size: 24px;\n      font-weight: 500;\n    }\n\n    @media (any-hover: hover) {\n      .btn__month-selector:hover,\n      .year-list-view__list-item:hover {\n        cursor: pointer;\n      }\n      .full-calendar__day:not(.day--empty):not(.day--disabled):not(.day--focused):not(.weekday-label):hover::after {\n        opacity: .15;\n      }\n      .year-list-view__list-item:hover::after {\n        opacity: .05;\n      }\n    }\n\n    @supports (background: -webkit-canvas(squares)) {\n      .calendar-container {\n        padding: 56px 16px 16px;\n      }\n\n      table > caption {\n        position: absolute;\n        top: 0;\n        left: 50%;\n        transform: translate3d(-50%, 0, 0);\n        will-change: transform;\n      }\n    }\n    "])))];

__decorate([property({
  type: Number,
  reflect: true
})], Datepicker.prototype, "firstDayOfWeek", void 0);

__decorate([property({
  type: Boolean,
  reflect: true
})], Datepicker.prototype, "showWeekNumber", void 0);

__decorate([property({
  type: String,
  reflect: true
})], Datepicker.prototype, "weekNumberType", void 0);

__decorate([property({
  type: Boolean,
  reflect: true
})], Datepicker.prototype, "landscape", void 0);

__decorate([property({
  type: String,
  reflect: true
})], Datepicker.prototype, "startView", null);

__decorate([property({
  type: String,
  reflect: true
})], Datepicker.prototype, "min", null);

__decorate([property({
  type: String,
  reflect: true
})], Datepicker.prototype, "max", null);

__decorate([property({
  type: String
})], Datepicker.prototype, "value", null);

__decorate([property({
  type: String
})], Datepicker.prototype, "locale", void 0);

__decorate([property({
  type: String
})], Datepicker.prototype, "disabledDays", void 0);

__decorate([property({
  type: String
})], Datepicker.prototype, "disabledDates", void 0);

__decorate([property({
  type: String
})], Datepicker.prototype, "weekLabel", void 0);

__decorate([property({
  type: Boolean
})], Datepicker.prototype, "inline", void 0);

__decorate([property({
  type: Number
})], Datepicker.prototype, "dragRatio", void 0);

__decorate([property({
  type: Date,
  attribute: false
})], Datepicker.prototype, "_selectedDate", void 0);

__decorate([property({
  type: Date,
  attribute: false
})], Datepicker.prototype, "_focusedDate", void 0);

__decorate([property({
  type: String,
  attribute: false
})], Datepicker.prototype, "_startView", void 0);

__decorate([query('.year-list-view__full-list')], Datepicker.prototype, "_yearViewFullList", void 0);

__decorate([query('.btn__year-selector')], Datepicker.prototype, "_buttonSelectorYear", void 0);

__decorate([query('.year-list-view__list-item')], Datepicker.prototype, "_yearViewListItem", void 0);

__decorate([eventOptions({
  passive: true
})], Datepicker.prototype, "_updateYear", null);

__decorate([eventOptions({
  passive: true
})], Datepicker.prototype, "_updateFocusedDateWithKeyboard", null);

function customElementsDefine(tagName, baseClass) {
  if (window.customElements && !window.customElements.get(tagName)) {
    window.customElements.define(tagName, baseClass);
  }
}

customElementsDefine(DATEPICKER_NAME, Datepicker);

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var KbfDatepicker = /*#__PURE__*/function (_EventTarget) {
  _inherits(KbfDatepicker, _EventTarget);

  var _super = _createSuper$1(KbfDatepicker);

  function KbfDatepicker(selector, inputElementSelector) {
    var _this;

    _classCallCheck(this, KbfDatepicker);

    _this = _super.call(this);
    var $ = window.$; // Sprawdz czy podano argumenty

    if (!selector) throw errors.argumentNotFound("Selector");
    if (!inputElementSelector) throw errors.argumentNotFound("inputElementSelector");
    _this.$datepicker = $(selector);
    _this.$inputElement = $(inputElementSelector);
    if (_this.$datepicker.length === 0) throw errors.elementNotFound(selector);
    if (_this.$inputElement.length === 0) throw errors.elementNotFound(selector);

    _this.init();

    _this.addListeners();

    return _this;
  }

  _createClass(KbfDatepicker, [{
    key: "init",
    value: function init() {

      this.on = this.addEventListener;
      this.off = this.removeEventListener;
      this.emit = this.dispatchEvent;
    }
  }, {
    key: "addListeners",
    value: function addListeners() {
      var instance = this;

      function datePickerHandler() {
        this.$datepicker.on('datepicker-value-updated', function (e) {
          instance.$inputElement.val(e.originalEvent.detail.value);
          instance.hideDatePicker();
        });
      }

      this.$inputElement.on('click', datePickerHandler.bind(this));
      this.$inputElement.on('focus', this.showDatePicker.bind(this));
      $(window).on('click', function (e) {
        if (e.target.tagName !== 'APP-DATEPICKER' && e.target.tagName !== 'INPUT') {
          instance.hideDatePicker();
          $('[name="job_expire"]').off('click', datePickerHandler);
        }
      });
    }
  }, {
    key: "showDatePicker",
    value: function showDatePicker() {
      this.$datepicker.fadeIn(200);
    }
  }, {
    key: "hideDatePicker",
    value: function hideDatePicker() {
      this.$datepicker.fadeOut(200);
    }
  }]);

  return KbfDatepicker;
}( /*#__PURE__*/_wrapNativeSuper(EventTarget));

if (typeof Object.getPrototypeOf !== "function") {
  Object.getPrototypeOf = _typeof("test".__proto__) === "object" ? function (object) {
    return object.__proto__;
  } : function (object) {
    return object.constructor.prototype;
  };
}

var BACKSPACE = 8;
var BACKSPACE_SAFARI = 127;
var DELETE = 46;
var DOWN = 40;
var END = 35;
var ENTER = 13;
var ESCAPE = 27;
var HOME = 36;
var INSERT = 45;
var LEFT = 37;
var PAGE_DOWN = 34;
var PAGE_UP = 33;
var RIGHT = 39;
var SPACE = 32;
var TAB = 9;
var UP = 38;
var X = 88;
var CONTROL = 17;
var KEY_229 = 229;
var keyCode = {
	BACKSPACE: BACKSPACE,
	BACKSPACE_SAFARI: BACKSPACE_SAFARI,
	DELETE: DELETE,
	DOWN: DOWN,
	END: END,
	ENTER: ENTER,
	ESCAPE: ESCAPE,
	HOME: HOME,
	INSERT: INSERT,
	LEFT: LEFT,
	PAGE_DOWN: PAGE_DOWN,
	PAGE_UP: PAGE_UP,
	RIGHT: RIGHT,
	SPACE: SPACE,
	TAB: TAB,
	UP: UP,
	X: X,
	CONTROL: CONTROL,
	KEY_229: KEY_229
};

function getLocator(tst, align) {
  //need to align the locators to be correct
  var locator = (tst.alternation != undefined ? tst.mloc[getDecisionTaker(tst)] : tst.locator).join("");
  if (locator !== "") while (locator.length < align) {
    locator += "0";
  }
  return locator;
}

function getDecisionTaker(tst) {
  var decisionTaker = tst.locator[tst.alternation];

  if (typeof decisionTaker == "string" && decisionTaker.length > 0) {
    //no decision taken ~ take first one as decider
    decisionTaker = decisionTaker.split(",")[0];
  }

  return decisionTaker !== undefined ? decisionTaker.toString() : "";
} //tobe put on prototype?


function getPlaceholder(pos, test, returnPL) {
  var inputmask = this,
      opts = this.opts,
      maskset = this.maskset;
  test = test || getTest.call(inputmask, pos).match;

  if (test.placeholder !== undefined || returnPL === true) {
    return typeof test.placeholder === "function" ? test.placeholder(opts) : test.placeholder;
  } else if (test.static === true) {
    if (pos > -1 && maskset.validPositions[pos] === undefined) {
      var tests = getTests.call(inputmask, pos),
          staticAlternations = [],
          prevTest;

      if (tests.length > 1 + (tests[tests.length - 1].match.def === "" ? 1 : 0)) {
        for (var i = 0; i < tests.length; i++) {
          if (tests[i].match.def !== "" && tests[i].match.optionality !== true && tests[i].match.optionalQuantifier !== true && (tests[i].match.static === true || prevTest === undefined || tests[i].match.fn.test(prevTest.match.def, maskset, pos, true, opts) !== false)) {
            staticAlternations.push(tests[i]);
            if (tests[i].match.static === true) prevTest = tests[i];

            if (staticAlternations.length > 1) {
              if (/[0-9a-bA-Z]/.test(staticAlternations[0].match.def)) {
                return opts.placeholder.charAt(pos % opts.placeholder.length);
              }
            }
          }
        }
      }
    }

    return test.def;
  }

  return opts.placeholder.charAt(pos % opts.placeholder.length);
} //tobe put on prototype?


function getMaskTemplate(baseOnInput, minimalPos, includeMode, noJit, clearOptionalTail) {
  //includeMode true => input, undefined => placeholder, false => mask
  var inputmask = this,
      opts = this.opts,
      maskset = this.maskset;
  var greedy = opts.greedy;
  if (clearOptionalTail) opts.greedy = false;
  minimalPos = minimalPos || 0;
  var maskTemplate = [],
      ndxIntlzr,
      pos = 0,
      test,
      testPos,
      jitRenderStatic;

  do {
    if (baseOnInput === true && maskset.validPositions[pos]) {
      testPos = clearOptionalTail && maskset.validPositions[pos].match.optionality === true && maskset.validPositions[pos + 1] === undefined && (maskset.validPositions[pos].generatedInput === true || maskset.validPositions[pos].input == opts.skipOptionalPartCharacter && pos > 0) ? determineTestTemplate.call(inputmask, pos, getTests.call(inputmask, pos, ndxIntlzr, pos - 1)) : maskset.validPositions[pos];
      test = testPos.match;
      ndxIntlzr = testPos.locator.slice();
      maskTemplate.push(includeMode === true ? testPos.input : includeMode === false ? test.nativeDef : getPlaceholder.call(inputmask, pos, test));
    } else {
      testPos = getTestTemplate.call(inputmask, pos, ndxIntlzr, pos - 1);
      test = testPos.match;
      ndxIntlzr = testPos.locator.slice();
      var jitMasking = noJit === true ? false : opts.jitMasking !== false ? opts.jitMasking : test.jit; //check for groupSeparator is a hack for the numerics as we don't want the render of the groupSeparator beforehand

      jitRenderStatic = jitRenderStatic && test.static && test.def !== opts.groupSeparator && test.fn === null || maskset.validPositions[pos - 1] && test.static && test.def !== opts.groupSeparator && test.fn === null;

      if (jitRenderStatic || jitMasking === false || jitMasking === undefined
      /*|| pos < lvp*/
      || typeof jitMasking === "number" && isFinite(jitMasking) && jitMasking > pos) {
        maskTemplate.push(includeMode === false ? test.nativeDef : getPlaceholder.call(inputmask, pos, test));
      } else {
        jitRenderStatic = false;
      }
    }

    pos++;
  } while ((inputmask.maxLength === undefined || pos < inputmask.maxLength) && (test.static !== true || test.def !== "") || minimalPos > pos);

  if (maskTemplate[maskTemplate.length - 1] === "") {
    maskTemplate.pop(); //drop the last one which is empty
  }

  if (includeMode !== false || //do not alter the masklength when just retrieving the maskdefinition
  maskset.maskLength === undefined) //just make sure the maskLength gets initialized in all cases (needed for isValid)
    {
      maskset.maskLength = pos - 1;
    }

  opts.greedy = greedy;
  return maskTemplate;
} //tobe put on prototype?


function getTestTemplate(pos, ndxIntlzr, tstPs) {
  var inputmask = this,
      maskset = this.maskset;
  return maskset.validPositions[pos] || determineTestTemplate.call(inputmask, pos, getTests.call(inputmask, pos, ndxIntlzr ? ndxIntlzr.slice() : ndxIntlzr, tstPs));
} //tobe put on prototype?


function determineTestTemplate(pos, tests) {
  var inputmask = this,
      opts = this.opts;
  pos = pos > 0 ? pos - 1 : 0;
  var altTest = getTest.call(inputmask, pos),
      targetLocator = getLocator(altTest),
      tstLocator,
      closest,
      bestMatch;

  for (var ndx = 0; ndx < tests.length; ndx++) {
    //find best matching
    var tst = tests[ndx];
    tstLocator = getLocator(tst, targetLocator.length);
    var distance = Math.abs(tstLocator - targetLocator);

    if (closest === undefined || tstLocator !== "" && distance < closest || bestMatch && !opts.greedy && bestMatch.match.optionality && bestMatch.match.newBlockMarker === "master" && (!tst.match.optionality || !tst.match.newBlockMarker) || bestMatch && bestMatch.match.optionalQuantifier && !tst.match.optionalQuantifier) {
      closest = distance;
      bestMatch = tst;
    }
  }

  return bestMatch;
} //tobe put on prototype?


function getTest(pos, tests) {
  var inputmask = this,
      maskset = this.maskset;

  if (maskset.validPositions[pos]) {
    return maskset.validPositions[pos];
  }

  return (tests || getTests.call(inputmask, pos))[0];
} //tobe put on prototype?


function getTests(pos, ndxIntlzr, tstPs) {
  var inputmask = this,
      $ = this.dependencyLib,
      maskset = this.maskset,
      opts = this.opts,
      el = this.el,
      maskTokens = maskset.maskToken,
      testPos = ndxIntlzr ? tstPs : 0,
      ndxInitializer = ndxIntlzr ? ndxIntlzr.slice() : [0],
      matches = [],
      insertStop = false,
      latestMatch,
      cacheDependency = ndxIntlzr ? ndxIntlzr.join("") : "";

  function resolveTestFromToken(maskToken, ndxInitializer, loopNdx, quantifierRecurse) {
    //ndxInitializer contains a set of indexes to speedup searches in the mtokens
    function handleMatch(match, loopNdx, quantifierRecurse) {
      function isFirstMatch(latestMatch, tokenGroup) {
        var firstMatch = tokenGroup.matches.indexOf(latestMatch) === 0;

        if (!firstMatch) {
          tokenGroup.matches.every(function (match, ndx) {
            if (match.isQuantifier === true) {
              firstMatch = isFirstMatch(latestMatch, tokenGroup.matches[ndx - 1]);
            } else if (Object.prototype.hasOwnProperty.call(match, "matches")) firstMatch = isFirstMatch(latestMatch, match);

            if (firstMatch) return false;
            return true;
          });
        }

        return firstMatch;
      }

      function resolveNdxInitializer(pos, alternateNdx, targetAlternation) {
        var bestMatch, indexPos;

        if (maskset.tests[pos] || maskset.validPositions[pos]) {
          (maskset.tests[pos] || [maskset.validPositions[pos]]).every(function (lmnt, ndx) {
            if (lmnt.mloc[alternateNdx]) {
              bestMatch = lmnt;
              return false; //break
            }

            var alternation = targetAlternation !== undefined ? targetAlternation : lmnt.alternation,
                ndxPos = lmnt.locator[alternation] !== undefined ? lmnt.locator[alternation].toString().indexOf(alternateNdx) : -1;

            if ((indexPos === undefined || ndxPos < indexPos) && ndxPos !== -1) {
              bestMatch = lmnt;
              indexPos = ndxPos;
            }

            return true;
          });
        }

        if (bestMatch) {
          var bestMatchAltIndex = bestMatch.locator[bestMatch.alternation];
          var locator = bestMatch.mloc[alternateNdx] || bestMatch.mloc[bestMatchAltIndex] || bestMatch.locator;
          return locator.slice((targetAlternation !== undefined ? targetAlternation : bestMatch.alternation) + 1);
        } else {
          return targetAlternation !== undefined ? resolveNdxInitializer(pos, alternateNdx) : undefined;
        }
      }

      function isSubsetOf(source, target) {
        function expand(pattern) {
          var expanded = [],
              start = -1,
              end;

          for (var i = 0, l = pattern.length; i < l; i++) {
            if (pattern.charAt(i) === "-") {
              end = pattern.charCodeAt(i + 1);

              while (++start < end) {
                expanded.push(String.fromCharCode(start));
              }
            } else {
              start = pattern.charCodeAt(i);
              expanded.push(pattern.charAt(i));
            }
          }

          return expanded.join("");
        }

        if (source.match.def === target.match.nativeDef) return true;

        if ((opts.regex || source.match.fn instanceof RegExp && target.match.fn instanceof RegExp) && source.match.static !== true && target.match.static !== true) {
          //is regex a subset
          return expand(target.match.fn.toString().replace(/[[\]/]/g, "")).indexOf(expand(source.match.fn.toString().replace(/[[\]/]/g, ""))) !== -1;
        }

        return false;
      }

      function staticCanMatchDefinition(source, target) {
        return source.match.static === true && target.match.static !== true ? target.match.fn.test(source.match.def, maskset, pos, false, opts, false) : false;
      } //mergelocators for retrieving the correct locator match when merging


      function setMergeLocators(targetMatch, altMatch) {
        var alternationNdx = targetMatch.alternation,
            shouldMerge = altMatch === undefined || alternationNdx === altMatch.alternation && targetMatch.locator[alternationNdx].toString().indexOf(altMatch.locator[alternationNdx]) === -1;

        if (!shouldMerge && alternationNdx > altMatch.alternation) {
          for (var i = altMatch.alternation; i < alternationNdx; i++) {
            if (targetMatch.locator[i] !== altMatch.locator[i]) {
              alternationNdx = i;
              shouldMerge = true;
              break;
            }
          }
        }

        if (shouldMerge) {
          targetMatch.mloc = targetMatch.mloc || {};
          var locNdx = targetMatch.locator[alternationNdx];

          if (locNdx === undefined) {
            targetMatch.alternation = undefined;
          } else {
            if (typeof locNdx === "string") locNdx = locNdx.split(",")[0];
            if (targetMatch.mloc[locNdx] === undefined) targetMatch.mloc[locNdx] = targetMatch.locator.slice();

            if (altMatch !== undefined) {
              for (var ndx in altMatch.mloc) {
                if (typeof ndx === "string") ndx = ndx.split(",")[0];
                if (targetMatch.mloc[ndx] === undefined) targetMatch.mloc[ndx] = altMatch.mloc[ndx];
              }

              targetMatch.locator[alternationNdx] = Object.keys(targetMatch.mloc).join(",");
            }

            return true;
          }
        }

        return false;
      }

      function isSameLevel(targetMatch, altMatch) {
        if (targetMatch.locator.length !== altMatch.locator.length) {
          return false;
        }

        for (var locNdx = targetMatch.alternation + 1; locNdx < targetMatch.locator.length; locNdx++) {
          if (targetMatch.locator[locNdx] !== altMatch.locator[locNdx]) {
            return false;
          }
        }

        return true;
      }

      if (testPos > pos + opts._maxTestPos) {
        throw "Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " + maskset.mask;
      }

      if (testPos === pos && match.matches === undefined) {
        matches.push({
          "match": match,
          "locator": loopNdx.reverse(),
          "cd": cacheDependency,
          "mloc": {}
        });
        return true;
      } else if (match.matches !== undefined) {
        if (match.isGroup && quantifierRecurse !== match) {
          //when a group pass along to the quantifier
          match = handleMatch(maskToken.matches[maskToken.matches.indexOf(match) + 1], loopNdx, quantifierRecurse);
          if (match) return true;
        } else if (match.isOptional) {
          var optionalToken = match,
              mtchsNdx = matches.length;
          match = resolveTestFromToken(match, ndxInitializer, loopNdx, quantifierRecurse);

          if (match) {
            //mark optionality in matches
            matches.forEach(function (mtch, ndx) {
              if (ndx >= mtchsNdx) {
                mtch.match.optionality = true;
              }
            });
            latestMatch = matches[matches.length - 1].match;

            if (quantifierRecurse === undefined && isFirstMatch(latestMatch, optionalToken)) {
              //prevent loop see #698
              insertStop = true; //insert a stop

              testPos = pos; //match the position after the group
            } else {
              return true;
            }
          }
        } else if (match.isAlternator) {
          var alternateToken = match,
              malternateMatches = [],
              maltMatches,
              currentMatches = matches.slice(),
              loopNdxCnt = loopNdx.length;
          var altIndex = ndxInitializer.length > 0 ? ndxInitializer.shift() : -1;

          if (altIndex === -1 || typeof altIndex === "string") {
            var currentPos = testPos,
                ndxInitializerClone = ndxInitializer.slice(),
                altIndexArr = [],
                amndx;

            if (typeof altIndex == "string") {
              altIndexArr = altIndex.split(",");
            } else {
              for (amndx = 0; amndx < alternateToken.matches.length; amndx++) {
                altIndexArr.push(amndx.toString());
              }
            }

            if (maskset.excludes[pos] !== undefined) {
              var altIndexArrClone = altIndexArr.slice();

              for (var i = 0, exl = maskset.excludes[pos].length; i < exl; i++) {
                var excludeSet = maskset.excludes[pos][i].toString().split(":");

                if (loopNdx.length == excludeSet[1]) {
                  altIndexArr.splice(altIndexArr.indexOf(excludeSet[0]), 1);
                }
              }

              if (altIndexArr.length === 0) {
                //fully alternated => reset
                delete maskset.excludes[pos];
                altIndexArr = altIndexArrClone;
              }
            }

            if (opts.keepStatic === true || isFinite(parseInt(opts.keepStatic)) && currentPos >= opts.keepStatic) altIndexArr = altIndexArr.slice(0, 1);
            var unMatchedAlternation = false;

            for (var ndx = 0; ndx < altIndexArr.length; ndx++) {
              amndx = parseInt(altIndexArr[ndx]);
              matches = []; //set the correct ndxInitializer

              ndxInitializer = typeof altIndex === "string" ? resolveNdxInitializer(testPos, amndx, loopNdxCnt) || ndxInitializerClone.slice() : ndxInitializerClone.slice();

              if (alternateToken.matches[amndx] && handleMatch(alternateToken.matches[amndx], [amndx].concat(loopNdx), quantifierRecurse)) {
                match = true;
              } else if (ndx === 0) {
                unMatchedAlternation = true;
              }

              maltMatches = matches.slice();
              testPos = currentPos;
              matches = []; //fuzzy merge matches

              for (var ndx1 = 0; ndx1 < maltMatches.length; ndx1++) {
                var altMatch = maltMatches[ndx1],
                    dropMatch = false;
                altMatch.match.jit = altMatch.match.jit || unMatchedAlternation; //mark jit when there are unmatched alternations  ex: mask: "(a|aa)"

                altMatch.alternation = altMatch.alternation || loopNdxCnt;
                setMergeLocators(altMatch);

                for (var ndx2 = 0; ndx2 < malternateMatches.length; ndx2++) {
                  var altMatch2 = malternateMatches[ndx2];

                  if (typeof altIndex !== "string" || altMatch.alternation !== undefined && altIndexArr.includes(altMatch.locator[altMatch.alternation].toString())) {
                    if (altMatch.match.nativeDef === altMatch2.match.nativeDef) {
                      dropMatch = true;
                      setMergeLocators(altMatch2, altMatch);
                      break;
                    } else if (isSubsetOf(altMatch, altMatch2)) {
                      if (setMergeLocators(altMatch, altMatch2)) {
                        dropMatch = true;
                        malternateMatches.splice(malternateMatches.indexOf(altMatch2), 0, altMatch);
                      }

                      break;
                    } else if (isSubsetOf(altMatch2, altMatch)) {
                      setMergeLocators(altMatch2, altMatch);
                      break;
                    } else if (staticCanMatchDefinition(altMatch, altMatch2)) {
                      if (!isSameLevel(altMatch, altMatch2) && el.inputmask.userOptions.keepStatic === undefined) {
                        opts.keepStatic = true;
                      } else if (setMergeLocators(altMatch, altMatch2)) {
                        //insert match above general match
                        dropMatch = true;
                        malternateMatches.splice(malternateMatches.indexOf(altMatch2), 0, altMatch);
                      }

                      break;
                    }
                  }
                }

                if (!dropMatch) {
                  malternateMatches.push(altMatch);
                }
              }
            }

            matches = currentMatches.concat(malternateMatches);
            testPos = pos;
            insertStop = matches.length > 0; //insert a stopelemnt when there is an alternate - needed for non-greedy option

            match = malternateMatches.length > 0; //set correct match state
            //cloneback

            ndxInitializer = ndxInitializerClone.slice();
          } else {
            match = handleMatch(alternateToken.matches[altIndex] || maskToken.matches[altIndex], [altIndex].concat(loopNdx), quantifierRecurse);
          }

          if (match) return true;
        } else if (match.isQuantifier && quantifierRecurse !== maskToken.matches[maskToken.matches.indexOf(match) - 1]) {
          var qt = match;

          for (var qndx = ndxInitializer.length > 0 ? ndxInitializer.shift() : 0; qndx < (isNaN(qt.quantifier.max) ? qndx + 1 : qt.quantifier.max) && testPos <= pos; qndx++) {
            var tokenGroup = maskToken.matches[maskToken.matches.indexOf(qt) - 1];
            match = handleMatch(tokenGroup, [qndx].concat(loopNdx), tokenGroup); //set the tokenGroup as quantifierRecurse marker

            if (match) {
              //get latest match
              latestMatch = matches[matches.length - 1].match; //mark optionality
              //TODO FIX RECURSIVE QUANTIFIERS

              latestMatch.optionalQuantifier = qndx >= qt.quantifier.min; // console.log(pos + " " + qt.quantifier.min + " " + latestMatch.optionalQuantifier);

              latestMatch.jit = (qndx || 1) * tokenGroup.matches.indexOf(latestMatch) >= qt.quantifier.jit;

              if (latestMatch.optionalQuantifier && isFirstMatch(latestMatch, tokenGroup)) {
                insertStop = true;
                testPos = pos; //match the position after the group

                break; //stop quantifierloop && search for next possible match
              }

              if (latestMatch.jit
              /*&& !latestMatch.optionalQuantifier*/
              ) {
                  //always set jitOffset, isvalid checks when to apply
                  maskset.jitOffset[pos] = tokenGroup.matches.length - tokenGroup.matches.indexOf(latestMatch);
                }

              return true;
            }
          }
        } else {
          match = resolveTestFromToken(match, ndxInitializer, loopNdx, quantifierRecurse);
          if (match) return true;
        }
      } else {
        testPos++;
      }
    } //the offset is set in the quantifierloop when git masking is used


    for (var tndx = ndxInitializer.length > 0 ? ndxInitializer.shift() : 0; tndx < maskToken.matches.length; tndx++) {
      if (maskToken.matches[tndx].isQuantifier !== true) {
        var match = handleMatch(maskToken.matches[tndx], [tndx].concat(loopNdx), quantifierRecurse);

        if (match && testPos === pos) {
          return match;
        } else if (testPos > pos) {
          break;
        }
      }
    }
  }

  function mergeLocators(pos, tests) {
    var locator = [],
        alternation;
    if (!Array.isArray(tests)) tests = [tests];

    if (tests.length > 0) {
      if (tests[0].alternation === undefined || opts.keepStatic === true) {
        locator = determineTestTemplate.call(inputmask, pos, tests.slice()).locator.slice();
        if (locator.length === 0) locator = tests[0].locator.slice();
      } else {
        tests.forEach(function (tst) {
          if (tst.def !== "") {
            if (locator.length === 0) {
              alternation = tst.alternation;
              locator = tst.locator.slice();
            } else {
              if (tst.locator[alternation] && locator[alternation].toString().indexOf(tst.locator[alternation]) === -1) {
                locator[alternation] += "," + tst.locator[alternation];
              }
            }
          }
        });
      }
    }

    return locator;
  }

  if (pos > -1 && (inputmask.maxLength === undefined || pos < inputmask.maxLength)) {
    if (ndxIntlzr === undefined) {
      //determine index initializer
      var previousPos = pos - 1,
          test;

      while ((test = maskset.validPositions[previousPos] || maskset.tests[previousPos]) === undefined && previousPos > -1) {
        previousPos--;
      }

      if (test !== undefined && previousPos > -1) {
        ndxInitializer = mergeLocators(previousPos, test);
        cacheDependency = ndxInitializer.join("");
        testPos = previousPos;
      }
    }

    if (maskset.tests[pos] && maskset.tests[pos][0].cd === cacheDependency) {
      //cacheDependency is set on all tests, just check on the first
      return maskset.tests[pos];
    }

    for (var mtndx = ndxInitializer.shift(); mtndx < maskTokens.length; mtndx++) {
      var match = resolveTestFromToken(maskTokens[mtndx], ndxInitializer, [mtndx]);

      if (match && testPos === pos || testPos > pos) {
        break;
      }
    }
  }

  if (matches.length === 0 || insertStop) {
    matches.push({
      match: {
        fn: null,
        static: true,
        optionality: false,
        casing: null,
        def: "",
        placeholder: ""
      },
      locator: [],
      mloc: {},
      cd: cacheDependency
    });
  }

  if (ndxIntlzr !== undefined && maskset.tests[pos]) {
    //prioritize full tests for caching
    return $.extend(true, [], matches);
  }

  maskset.tests[pos] = $.extend(true, [], matches); //set a clone to prevent overwriting some props
  // console.log(pos + " - " + JSON.stringify(matches));

  return maskset.tests[pos];
}

var ua = window.navigator && window.navigator.userAgent || "",
    ie = ua.indexOf("MSIE ") > 0 || ua.indexOf("Trident/") > 0,
    mobile = ("ontouchstart" in window),
    //not entirely correct but will currently do
iemobile = /iemobile/i.test(ua),
    iphone = /iphone/i.test(ua) && !iemobile;

function applyInputValue(input, value) {
  var inputmask = input ? input.inputmask : this,
      opts = inputmask.opts;
  input.inputmask.refreshValue = false;
  if (typeof opts.onBeforeMask === "function") value = opts.onBeforeMask.call(inputmask, value, opts) || value;
  value = value.toString().split("");
  checkVal(input, true, false, value);
  inputmask.undoValue = getBuffer.call(inputmask).join("");

  if ((opts.clearMaskOnLostFocus || opts.clearIncomplete) && input.inputmask._valueGet() === getBufferTemplate.call(inputmask).join("") && getLastValidPosition.call(inputmask) === -1) {
    input.inputmask._valueSet("");
  }
} //todo put on prototype?


function clearOptionalTail(buffer) {
  var inputmask = this;
  buffer.length = 0;
  var template = getMaskTemplate.call(inputmask, true, 0, true, undefined, true),
      lmnt;

  while ((lmnt = template.shift()) !== undefined) {
    buffer.push(lmnt);
  }

  return buffer;
}

function checkVal(input, writeOut, strict, nptvl, initiatingEvent) {
  var inputmask = input ? input.inputmask : this,
      maskset = inputmask.maskset,
      opts = inputmask.opts,
      $ = inputmask.dependencyLib;
  var inputValue = nptvl.slice(),
      charCodes = "",
      initialNdx = -1,
      result = undefined,
      skipOptionalPartCharacter = opts.skipOptionalPartCharacter;
  opts.skipOptionalPartCharacter = ""; //see issue #2311

  function isTemplateMatch(ndx, charCodes) {
    var targetTemplate = getMaskTemplate.call(inputmask, true, 0).slice(ndx, seekNext.call(inputmask, ndx)).join("").replace(/'/g, ""),
        charCodeNdx = targetTemplate.indexOf(charCodes); //strip spaces from targetTemplate

    while (charCodeNdx > 0 && targetTemplate[charCodeNdx - 1] === " ") {
      charCodeNdx--;
    }

    var match = charCodeNdx === 0 && !isMask.call(inputmask, ndx) && (getTest.call(inputmask, ndx).match.nativeDef === charCodes.charAt(0) || getTest.call(inputmask, ndx).match.static === true && getTest.call(inputmask, ndx).match.nativeDef === "'" + charCodes.charAt(0) || getTest.call(inputmask, ndx).match.nativeDef === " " && (getTest.call(inputmask, ndx + 1).match.nativeDef === charCodes.charAt(0) || getTest.call(inputmask, ndx + 1).match.static === true && getTest.call(inputmask, ndx + 1).match.nativeDef === "'" + charCodes.charAt(0)));

    if (!match && charCodeNdx > 0 && !isMask.call(inputmask, ndx, false, true)) {
      var nextPos = seekNext.call(inputmask, ndx);

      if (inputmask.caretPos.begin < nextPos) {
        inputmask.caretPos = {
          begin: nextPos
        };
      }
    }

    return match;
  }

  resetMaskSet.call(inputmask);
  maskset.tests = {}; //reset tests ~ possible after alternating

  initialNdx = opts.radixPoint ? determineNewCaretPosition.call(inputmask, {
    begin: 0,
    end: 0
  }).begin : 0;
  maskset.p = initialNdx;
  inputmask.caretPos = {
    begin: initialNdx
  };
  var staticMatches = [],
      prevCaretPos = inputmask.caretPos;
  inputValue.forEach(function (charCode, ndx) {
    if (charCode !== undefined) {
      //inputfallback strips some elements out of the inputarray.  $.each logically presents them as undefined
      if (maskset.validPositions[ndx] === undefined && inputValue[ndx] === getPlaceholder.call(inputmask, ndx) && isMask.call(inputmask, ndx, true) && isValid.call(inputmask, ndx, inputValue[ndx], true, undefined, undefined, true) === false) {
        maskset.p++;
      } else {
        var keypress = new $.Event("_checkval");
        keypress.which = charCode.toString().charCodeAt(0);
        charCodes += charCode;
        var lvp = getLastValidPosition.call(inputmask, undefined, true);

        if (!isTemplateMatch(initialNdx, charCodes)) {
          result = EventHandlers.keypressEvent.call(input || inputmask, keypress, true, false, strict, inputmask.caretPos.begin);

          if (result) {
            initialNdx = inputmask.caretPos.begin + 1;
            charCodes = "";
          }
        } else {
          result = EventHandlers.keypressEvent.call(input || inputmask, keypress, true, false, strict, lvp + 1);
        }

        if (result) {
          if (result.pos !== undefined && maskset.validPositions[result.pos] && maskset.validPositions[result.pos].match.static === true && maskset.validPositions[result.pos].alternation === undefined) {
            staticMatches.push(result.pos);

            if (!inputmask.isRTL) {
              result.forwardPosition = result.pos + 1;
            }
          }

          writeBuffer.call(inputmask, undefined, getBuffer.call(inputmask), result.forwardPosition, keypress, false);
          inputmask.caretPos = {
            begin: result.forwardPosition,
            end: result.forwardPosition
          };
          prevCaretPos = inputmask.caretPos;
        } else {
          inputmask.caretPos = prevCaretPos;
        } //restore the caret position from before the failed validation

      }
    }
  });

  if (staticMatches.length > 0) {
    var sndx,
        validPos,
        nextValid = seekNext.call(inputmask, -1, undefined, false);

    if (!isComplete.call(inputmask, getBuffer.call(inputmask)) && staticMatches.length <= nextValid || isComplete.call(inputmask, getBuffer.call(inputmask)) && staticMatches.length > 0 && staticMatches.length !== nextValid && staticMatches[0] === 0) {
      //should check if is sequence starting from 0
      var nextSndx = nextValid;

      while ((sndx = staticMatches.shift()) !== undefined) {
        var keypress = new $.Event("_checkval");
        validPos = maskset.validPositions[sndx];
        validPos.generatedInput = true;
        keypress.which = validPos.input.charCodeAt(0);
        result = EventHandlers.keypressEvent.call(input, keypress, true, false, strict, nextSndx);

        if (result && result.pos !== undefined && result.pos !== sndx && maskset.validPositions[result.pos] && maskset.validPositions[result.pos].match.static === true) {
          staticMatches.push(result.pos);
        } else if (!result) break;

        nextSndx++;
      }
    }
  }

  if (writeOut) {
    writeBuffer.call(inputmask, input, getBuffer.call(inputmask), result ? result.forwardPosition : inputmask.caretPos.begin, initiatingEvent || new $.Event("checkval"), initiatingEvent && initiatingEvent.type === "input" && inputmask.undoValue !== getBuffer.call(inputmask).join("")); // for (var vndx in maskset.validPositions) {
    // 	if (maskset.validPositions[vndx].match.generated !== true) { //only remove non forced generated
    // 		delete maskset.validPositions[vndx].generatedInput; //clear generated markings ~ consider initializing with a  value as fully typed
    // 	}
    // }
  }

  opts.skipOptionalPartCharacter = skipOptionalPartCharacter;
}

function HandleNativePlaceholder(npt, value) {
  var inputmask = npt ? npt.inputmask : this;

  if (ie) {
    if (npt.inputmask._valueGet() !== value && (npt.placeholder !== value || npt.placeholder === "")) {
      var buffer = getBuffer.call(inputmask).slice(),
          nptValue = npt.inputmask._valueGet();

      if (nptValue !== value) {
        var lvp = getLastValidPosition.call(inputmask);

        if (lvp === -1 && nptValue === getBufferTemplate.call(inputmask).join("")) {
          buffer = [];
        } else if (lvp !== -1) {
          //clearout optional tail of the mask
          clearOptionalTail.call(inputmask, buffer);
        }

        writeBuffer(npt, buffer);
      }
    }
  } else if (npt.placeholder !== value) {
    npt.placeholder = value;
    if (npt.placeholder === "") npt.removeAttribute("placeholder");
  }
}

function unmaskedvalue(input) {
  var inputmask = input ? input.inputmask : this,
      opts = inputmask.opts,
      maskset = inputmask.maskset;

  if (input) {
    if (input.inputmask === undefined) {
      return input.value;
    }

    if (input.inputmask && input.inputmask.refreshValue) {
      //forced refresh from the value form.reset
      applyInputValue(input, input.inputmask._valueGet(true));
    }
  }

  var umValue = [],
      vps = maskset.validPositions;

  for (var pndx in vps) {
    if (vps[pndx] && vps[pndx].match && (vps[pndx].match.static != true || Array.isArray(maskset.metadata) && vps[pndx].generatedInput !== true)) {
      //only include generated input with multiple masks (check on metadata)
      umValue.push(vps[pndx].input);
    }
  }

  var unmaskedValue = umValue.length === 0 ? "" : (inputmask.isRTL ? umValue.reverse() : umValue).join("");

  if (typeof opts.onUnMask === "function") {
    var bufferValue = (inputmask.isRTL ? getBuffer.call(inputmask).slice().reverse() : getBuffer.call(inputmask)).join("");
    unmaskedValue = opts.onUnMask.call(inputmask, bufferValue, unmaskedValue, opts);
  }

  return unmaskedValue;
}

function writeBuffer(input, buffer, caretPos, event, triggerEvents) {
  var inputmask = input ? input.inputmask : this,
      opts = inputmask.opts,
      $ = inputmask.dependencyLib;

  if (event && typeof opts.onBeforeWrite === "function") {
    //    buffer = buffer.slice(); //prevent uncontrolled manipulation of the internal buffer
    var result = opts.onBeforeWrite.call(inputmask, event, buffer, caretPos, opts);

    if (result) {
      if (result.refreshFromBuffer) {
        var refresh = result.refreshFromBuffer;
        refreshFromBuffer.call(inputmask, refresh === true ? refresh : refresh.start, refresh.end, result.buffer || buffer);
        buffer = getBuffer.call(inputmask, true);
      }

      if (caretPos !== undefined) caretPos = result.caret !== undefined ? result.caret : caretPos;
    }
  }

  if (input !== undefined) {
    input.inputmask._valueSet(buffer.join(""));

    if (caretPos !== undefined && (event === undefined || event.type !== "blur")) {
      caret.call(inputmask, input, caretPos, undefined, undefined, event !== undefined && event.type === "keydown" && (event.keyCode === keyCode.DELETE || event.keyCode === keyCode.BACKSPACE));
    }

    if (triggerEvents === true) {
      var $input = $(input),
          nptVal = input.inputmask._valueGet();

      input.inputmask.skipInputEvent = true;
      $input.trigger("input");
      setTimeout(function () {
        //timeout needed for IE
        if (nptVal === getBufferTemplate.call(inputmask).join("")) {
          $input.trigger("cleared");
        } else if (isComplete.call(inputmask, buffer) === true) {
          $input.trigger("complete");
        }
      }, 0);
    }
  }
}

var EventHandlers = {
  keydownEvent: function keydownEvent(e) {
    var inputmask = this.inputmask,
        opts = inputmask.opts,
        $ = inputmask.dependencyLib,
        maskset = inputmask.maskset;
    var input = this,
        $input = $(input),
        k = e.keyCode,
        pos = caret.call(inputmask, input);
    var kdResult = opts.onKeyDown.call(this, e, getBuffer.call(inputmask), pos, opts);
    if (kdResult !== undefined) return kdResult; //backspace, delete, and escape get special treatment

    if (k === keyCode.BACKSPACE || k === keyCode.DELETE || iphone && k === keyCode.BACKSPACE_SAFARI || e.ctrlKey && k === keyCode.X && !("oncut" in input)) {
      //backspace/delete
      e.preventDefault(); //stop default action but allow propagation

      handleRemove.call(inputmask, input, k, pos);
      writeBuffer(input, getBuffer.call(inputmask, true), maskset.p, e, input.inputmask._valueGet() !== getBuffer.call(inputmask).join(""));
    } else if (k === keyCode.END || k === keyCode.PAGE_DOWN) {
      //when END or PAGE_DOWN pressed set position at lastmatch
      e.preventDefault();
      var caretPos = seekNext.call(inputmask, getLastValidPosition.call(inputmask));
      caret.call(inputmask, input, e.shiftKey ? pos.begin : caretPos, caretPos, true);
    } else if (k === keyCode.HOME && !e.shiftKey || k === keyCode.PAGE_UP) {
      //Home or page_up
      e.preventDefault();
      caret.call(inputmask, input, 0, e.shiftKey ? pos.begin : 0, true);
    } else if ((opts.undoOnEscape && k === keyCode.ESCAPE || k === 90 && e.ctrlKey) && e.altKey !== true) {
      //escape && undo && #762
      checkVal(input, true, false, inputmask.undoValue.split(""));
      $input.trigger("click"); // } else if (k === keyCode.INSERT && !(e.shiftKey || e.ctrlKey) && inputmask.userOptions.insertMode === undefined) { //insert
      // 	opts.insertMode = !opts.insertMode;
      // 	caret(input, pos.begin, pos.end);
    } else if (opts.tabThrough === true && k === keyCode.TAB) {
      if (e.shiftKey === true) {
        pos.end = seekPrevious.call(inputmask, pos.end, true);

        if (getTest.call(inputmask, pos.end - 1).match.static === true) {
          pos.end--;
        }

        pos.begin = seekPrevious.call(inputmask, pos.end, true);

        if (pos.begin >= 0 && pos.end > 0) {
          e.preventDefault();
          caret.call(inputmask, input, pos.begin, pos.end);
        }
      } else {
        pos.begin = seekNext.call(inputmask, pos.begin, true);
        pos.end = seekNext.call(inputmask, pos.begin, true);
        if (pos.end < maskset.maskLength) pos.end--;

        if (pos.begin <= maskset.maskLength) {
          e.preventDefault();
          caret.call(inputmask, input, pos.begin, pos.end);
        }
      }
    } else if (!e.shiftKey) {
      if (opts.insertModeVisual && opts.insertMode === false) {
        if (k === keyCode.RIGHT) {
          setTimeout(function () {
            var caretPos = caret.call(inputmask, input);
            caret.call(inputmask, input, caretPos.begin);
          }, 0);
        } else if (k === keyCode.LEFT) {
          setTimeout(function () {
            var caretPos = {
              begin: translatePosition.call(inputmask, input.inputmask.caretPos.begin),
              end: translatePosition.call(inputmask, input.inputmask.caretPos.end)
            };

            if (inputmask.isRTL) {
              caret.call(inputmask, input, caretPos.begin + (caretPos.begin === maskset.maskLength ? 0 : 1));
            } else {
              caret.call(inputmask, input, caretPos.begin - (caretPos.begin === 0 ? 0 : 1));
            }
          }, 0);
        }
      }
    }

    inputmask.ignorable = opts.ignorables.includes(k);
  },
  keypressEvent: function keypressEvent(e, checkval, writeOut, strict, ndx) {
    var inputmask = this.inputmask || this,
        opts = inputmask.opts,
        $ = inputmask.dependencyLib,
        maskset = inputmask.maskset;
    var input = inputmask.el,
        $input = $(input),
        k = e.which || e.charCode || e.keyCode;

    if (checkval !== true && !(e.ctrlKey && e.altKey) && (e.ctrlKey || e.metaKey || inputmask.ignorable)) {
      if (k === keyCode.ENTER && inputmask.undoValue !== getBuffer.call(inputmask).join("")) {
        inputmask.undoValue = getBuffer.call(inputmask).join(""); // e.preventDefault();

        setTimeout(function () {
          $input.trigger("change");
        }, 0);
      }

      inputmask.skipInputEvent = true; //skip the input as otherwise the skipped char could be picked up for validation by the inputfallback

      return true;
    } else if (k) {
      //special treat the decimal separator
      if ((k === 44 || k === 46) && e.location === 3 && opts.radixPoint !== "") k = opts.radixPoint.charCodeAt(0);
      var pos = checkval ? {
        begin: ndx,
        end: ndx
      } : caret.call(inputmask, input),
          forwardPosition,
          c = String.fromCharCode(k);
      maskset.writeOutBuffer = true;
      var valResult = isValid.call(inputmask, pos, c, strict, undefined, undefined, undefined, checkval);

      if (valResult !== false) {
        resetMaskSet.call(inputmask, true);
        forwardPosition = valResult.caret !== undefined ? valResult.caret : seekNext.call(inputmask, valResult.pos.begin ? valResult.pos.begin : valResult.pos);
        maskset.p = forwardPosition; //needed for checkval
      }

      forwardPosition = opts.numericInput && valResult.caret === undefined ? seekPrevious.call(inputmask, forwardPosition) : forwardPosition;

      if (writeOut !== false) {
        setTimeout(function () {
          opts.onKeyValidation.call(input, k, valResult);
        }, 0);

        if (maskset.writeOutBuffer && valResult !== false) {
          var buffer = getBuffer.call(inputmask);
          writeBuffer(input, buffer, forwardPosition, e, checkval !== true);
        }
      }

      e.preventDefault();

      if (checkval) {
        if (valResult !== false) valResult.forwardPosition = forwardPosition;
        return valResult;
      }
    }
  },
  keyupEvent: function keyupEvent(e) {
    var inputmask = this.inputmask;

    if (inputmask.isComposing && (e.keyCode === keyCode.KEY_229 || e.keyCode === keyCode.ENTER)) {
      inputmask.$el.trigger("input");
    }
  },
  pasteEvent: function pasteEvent(e) {
    var inputmask = this.inputmask,
        opts = inputmask.opts;

    var input = this,
        inputValue = inputmask._valueGet(true),
        caretPos = caret.call(inputmask, input),
        tempValue;

    if (inputmask.isRTL) {
      tempValue = caretPos.end;
      caretPos.end = caretPos.begin;
      caretPos.begin = tempValue;
    }

    var valueBeforeCaret = inputValue.substr(0, caretPos.begin),
        valueAfterCaret = inputValue.substr(caretPos.end, inputValue.length);
    if (valueBeforeCaret == (inputmask.isRTL ? getBufferTemplate.call(inputmask).slice().reverse() : getBufferTemplate.call(inputmask)).slice(0, caretPos.begin).join("")) valueBeforeCaret = "";
    if (valueAfterCaret == (inputmask.isRTL ? getBufferTemplate.call(inputmask).slice().reverse() : getBufferTemplate.call(inputmask)).slice(caretPos.end).join("")) valueAfterCaret = "";

    if (window.clipboardData && window.clipboardData.getData) {
      // IE
      inputValue = valueBeforeCaret + window.clipboardData.getData("Text") + valueAfterCaret;
    } else if (e.clipboardData && e.clipboardData.getData) {
      inputValue = valueBeforeCaret + e.clipboardData.getData("text/plain") + valueAfterCaret;
    } else {
      return true;
    } //allow native paste event as fallback ~ masking will continue by inputfallback


    var pasteValue = inputValue;

    if (typeof opts.onBeforePaste === "function") {
      pasteValue = opts.onBeforePaste.call(inputmask, inputValue, opts);

      if (pasteValue === false) {
        return e.preventDefault();
      }

      if (!pasteValue) {
        pasteValue = inputValue;
      }
    }

    checkVal(input, true, false, pasteValue.toString().split(""), e); // writeBuffer(input, getBuffer(), seekNext(getLastValidPosition()), e, inputmask.undoValue !== getBuffer().join(""));

    return e.preventDefault();
  },
  inputFallBackEvent: function inputFallBackEvent(e) {
    //fallback when keypress is not triggered
    var inputmask = this.inputmask,
        opts = inputmask.opts,
        $ = inputmask.dependencyLib;

    function ieMobileHandler(input, inputValue, caretPos) {
      if (iemobile) {
        //iemobile just sets the character at the end althought the caret position is correctly set
        var inputChar = inputValue.replace(getBuffer.call(inputmask).join(""), "");

        if (inputChar.length === 1) {
          var iv = inputValue.split("");
          iv.splice(caretPos.begin, 0, inputChar);
          inputValue = iv.join("");
        }
      }

      return inputValue;
    }

    function analyseChanges(inputValue, buffer, caretPos) {
      var frontPart = inputValue.substr(0, caretPos.begin).split(""),
          backPart = inputValue.substr(caretPos.begin).split(""),
          frontBufferPart = buffer.substr(0, caretPos.begin).split(""),
          backBufferPart = buffer.substr(caretPos.begin).split("");
      var fpl = frontPart.length >= frontBufferPart.length ? frontPart.length : frontBufferPart.length,
          bpl = backPart.length >= backBufferPart.length ? backPart.length : backBufferPart.length,
          bl,
          i,
          action = "",
          data = [],
          marker = "~",
          placeholder; //align buffers

      while (frontPart.length < fpl) {
        frontPart.push(marker);
      }

      while (frontBufferPart.length < fpl) {
        frontBufferPart.push(marker);
      }

      while (backPart.length < bpl) {
        backPart.unshift(marker);
      }

      while (backBufferPart.length < bpl) {
        backBufferPart.unshift(marker);
      }

      var newBuffer = frontPart.concat(backPart);
      var oldBuffer = frontBufferPart.concat(backBufferPart); // console.log("N " + newBuffer);
      // console.log("O " + oldBuffer);

      for (i = 0, bl = newBuffer.length; i < bl; i++) {
        placeholder = getPlaceholder.call(inputmask, translatePosition.call(inputmask, i));

        switch (action) {
          case "insertText":
            if (oldBuffer[i - 1] === newBuffer[i] && caretPos.begin == newBuffer.length - 1) {
              data.push(newBuffer[i]);
            }

            i = bl;
            break;

          case "insertReplacementText":
            if (newBuffer[i] === marker) {
              //extend selection
              caretPos.end++;
            } else {
              // breakout loop
              i = bl;
            }

            break;

          case "deleteContentBackward":
            if (newBuffer[i] === marker) {
              caretPos.end++;
            } else {
              //breakout loop
              i = bl;
            }

            break;

          default:
            if (newBuffer[i] !== oldBuffer[i]) {
              if ((newBuffer[i + 1] === marker || newBuffer[i + 1] === placeholder || newBuffer[i + 1] === undefined) && (oldBuffer[i] === placeholder && oldBuffer[i + 1] === marker || oldBuffer[i] === marker)) {
                //basic insert
                action = "insertText";
                data.push(newBuffer[i]);
                caretPos.begin--;
                caretPos.end--;
              } else if (oldBuffer[i + 1] === marker && oldBuffer[i] === newBuffer[i + 1]) {
                //insert between
                action = "insertText";
                data.push(newBuffer[i]);
                caretPos.begin--;
                caretPos.end--;
              } else if (newBuffer[i] !== placeholder && newBuffer[i] !== marker && (newBuffer[i + 1] === marker || oldBuffer[i] !== newBuffer[i] && oldBuffer[i + 1] === newBuffer[i + 1]
              /*single char replacement*/
              )) {
                //replace selection
                action = "insertReplacementText";
                data.push(newBuffer[i]);
                caretPos.begin--;
              } else if (newBuffer[i] === marker) {
                //delete~backspace
                action = "deleteContentBackward";
                if (isMask.call(inputmask, translatePosition.call(inputmask, i), true) || oldBuffer[i] === opts.radixPoint) caretPos.end++;
              } else {
                i = bl;
              }
            }

            break;
        }
      }

      return {
        action: action,
        data: data,
        caret: caretPos
      };
    }

    var input = this,
        inputValue = input.inputmask._valueGet(true),
        buffer = (inputmask.isRTL ? getBuffer.call(inputmask).slice().reverse() : getBuffer.call(inputmask)).join(""),
        caretPos = caret.call(inputmask, input, undefined, undefined, true);

    if (buffer !== inputValue) {
      // inputValue = radixPointHandler(input, inputValue, caretPos);
      inputValue = ieMobileHandler(input, inputValue, caretPos);
      var changes = analyseChanges(inputValue, buffer, caretPos); // console.log(JSON.stringify(changes));

      if ((input.inputmask.shadowRoot || document).activeElement !== input) {
        input.focus();
      }

      writeBuffer(input, getBuffer.call(inputmask));
      caret.call(inputmask, input, caretPos.begin, caretPos.end, true);

      switch (changes.action) {
        case "insertText":
        case "insertReplacementText":
          changes.data.forEach(function (entry, ndx) {
            var keypress = new $.Event("keypress");
            keypress.which = entry.charCodeAt(0);
            inputmask.ignorable = false; //make sure ignorable is ignored ;-)

            EventHandlers.keypressEvent.call(input, keypress);
          });
          setTimeout(function () {
            //#2195 trigger keyup to help some other plugins to track changes
            inputmask.$el.trigger("keyup");
          }, 0);
          break;

        case "deleteContentBackward":
          var keydown = new $.Event("keydown");
          keydown.keyCode = keyCode.BACKSPACE;
          EventHandlers.keydownEvent.call(input, keydown);
          break;

        default:
          applyInputValue(input, inputValue);
          break;
      }

      e.preventDefault();
    }
  },
  compositionendEvent: function compositionendEvent(e) {
    var inputmask = this.inputmask;
    inputmask.isComposing = false;
    inputmask.$el.trigger("input");
  },
  setValueEvent: function setValueEvent(e) {
    var inputmask = this.inputmask;
    var input = this,
        value = e && e.detail ? e.detail[0] : arguments[1];

    if (value === undefined) {
      value = input.inputmask._valueGet(true);
    }

    applyInputValue(input, value);

    if (e.detail && e.detail[1] !== undefined || arguments[2] !== undefined) {
      caret.call(inputmask, input, e.detail ? e.detail[1] : arguments[2]);
    }
  },
  focusEvent: function focusEvent(e) {
    var inputmask = this.inputmask,
        opts = inputmask.opts;

    var input = this,
        nptValue = input.inputmask._valueGet();

    if (opts.showMaskOnFocus) {
      if (nptValue !== getBuffer.call(inputmask).join("")) {
        writeBuffer(input, getBuffer.call(inputmask), seekNext.call(inputmask, getLastValidPosition.call(inputmask)));
      }
      /*else if (mouseEnter === false) { //only executed on focus without mouseenter
      caret(input, seekNext(getLastValidPosition()));
      }*/

    }

    if (opts.positionCaretOnTab === true && inputmask.mouseEnter === false && (!isComplete.call(inputmask, getBuffer.call(inputmask)) || getLastValidPosition.call(inputmask) === -1)) {
      EventHandlers.clickEvent.apply(input, [e, true]);
    }

    inputmask.undoValue = getBuffer.call(inputmask).join("");
  },
  invalidEvent: function invalidEvent(e) {
    this.inputmask.validationEvent = true;
  },
  mouseleaveEvent: function mouseleaveEvent() {
    var inputmask = this.inputmask,
        opts = inputmask.opts;
    var input = this;
    inputmask.mouseEnter = false;

    if (opts.clearMaskOnLostFocus && (input.inputmask.shadowRoot || document).activeElement !== input) {
      HandleNativePlaceholder(input, inputmask.originalPlaceholder);
    }
  },
  clickEvent: function clickEvent(e, tabbed) {
    var inputmask = this.inputmask;
    var input = this;

    if ((input.inputmask.shadowRoot || document).activeElement === input) {
      var newCaretPosition = determineNewCaretPosition.call(inputmask, caret.call(inputmask, input), tabbed);

      if (newCaretPosition !== undefined) {
        caret.call(inputmask, input, newCaretPosition);
      }
    }
  },
  cutEvent: function cutEvent(e) {
    var inputmask = this.inputmask,
        maskset = inputmask.maskset;
    var input = this,
        pos = caret.call(inputmask, input); //correct clipboardData

    var clipboardData = window.clipboardData || e.clipboardData,
        clipData = inputmask.isRTL ? getBuffer.call(inputmask).slice(pos.end, pos.begin) : getBuffer.call(inputmask).slice(pos.begin, pos.end);
    clipboardData.setData("text", inputmask.isRTL ? clipData.reverse().join("") : clipData.join(""));
    if (document.execCommand) document.execCommand("copy"); // copy selected content to system clipbaord

    handleRemove.call(inputmask, input, keyCode.DELETE, pos);
    writeBuffer(input, getBuffer.call(inputmask), maskset.p, e, inputmask.undoValue !== getBuffer.call(inputmask).join(""));
  },
  blurEvent: function blurEvent(e) {
    var inputmask = this.inputmask,
        opts = inputmask.opts,
        $ = inputmask.dependencyLib;
    var $input = $(this),
        input = this;

    if (input.inputmask) {
      HandleNativePlaceholder(input, inputmask.originalPlaceholder);

      var nptValue = input.inputmask._valueGet(),
          buffer = getBuffer.call(inputmask).slice();

      if (nptValue !== "") {
        if (opts.clearMaskOnLostFocus) {
          if (getLastValidPosition.call(inputmask) === -1 && nptValue === getBufferTemplate.call(inputmask).join("")) {
            buffer = [];
          } else {
            //clearout optional tail of the mask
            clearOptionalTail.call(inputmask, buffer);
          }
        }

        if (isComplete.call(inputmask, buffer) === false) {
          setTimeout(function () {
            $input.trigger("incomplete");
          }, 0);

          if (opts.clearIncomplete) {
            resetMaskSet.call(inputmask);

            if (opts.clearMaskOnLostFocus) {
              buffer = [];
            } else {
              buffer = getBufferTemplate.call(inputmask).slice();
            }
          }
        }

        writeBuffer(input, buffer, undefined, e);
      }

      if (inputmask.undoValue !== getBuffer.call(inputmask).join("")) {
        inputmask.undoValue = getBuffer.call(inputmask).join("");
        $input.trigger("change");
      }
    }
  },
  mouseenterEvent: function mouseenterEvent() {
    var inputmask = this.inputmask,
        opts = inputmask.opts;
    var input = this;
    inputmask.mouseEnter = true;

    if ((input.inputmask.shadowRoot || document).activeElement !== input) {
      if (inputmask.originalPlaceholder == undefined && input.placeholder !== inputmask.originalPlaceholder) {
        inputmask.originalPlaceholder = input.placeholder;
      }

      if (opts.showMaskOnHover) {
        HandleNativePlaceholder(input, (inputmask.isRTL ? getBufferTemplate.call(inputmask).slice().reverse() : getBufferTemplate.call(inputmask)).join(""));
      }
    }
  },
  submitEvent: function submitEvent() {
    //trigger change on submit if any
    var inputmask = this.inputmask,
        opts = inputmask.opts;

    if (inputmask.undoValue !== getBuffer.call(inputmask).join("")) {
      inputmask.$el.trigger("change");
    }

    if (opts.clearMaskOnLostFocus && getLastValidPosition.call(inputmask) === -1 && inputmask._valueGet && inputmask._valueGet() === getBufferTemplate.call(inputmask).join("")) {
      inputmask._valueSet(""); //clear masktemplete on submit and still has focus

    }

    if (opts.clearIncomplete && isComplete.call(inputmask, getBuffer.call(inputmask)) === false) {
      inputmask._valueSet("");
    }

    if (opts.removeMaskOnSubmit) {
      inputmask._valueSet(inputmask.unmaskedvalue(), true);

      setTimeout(function () {
        writeBuffer(inputmask.el, getBuffer.call(inputmask));
      }, 0);
    }
  },
  resetEvent: function resetEvent() {
    var inputmask = this.inputmask;
    inputmask.refreshValue = true; //indicate a forced refresh when there is a call to the value before leaving the triggering event fn

    setTimeout(function () {
      applyInputValue(inputmask.el, inputmask._valueGet(true));
    }, 0);
  }
};

function alternate(maskPos, c, strict, fromIsValid, rAltPos, selection) {
  //pos == true => generalize
  var inputmask = this,
      $ = this.dependencyLib,
      opts = this.opts,
      maskset = inputmask.maskset;
  var validPsClone = $.extend(true, {}, maskset.validPositions),
      tstClone = $.extend(true, {}, maskset.tests),
      lastAlt,
      alternation,
      isValidRslt = false,
      returnRslt = false,
      altPos,
      prevAltPos,
      i,
      validPos,
      decisionPos,
      lAltPos = rAltPos !== undefined ? rAltPos : getLastValidPosition.call(inputmask),
      nextPos,
      input,
      begin,
      end;

  if (selection) {
    begin = selection.begin;
    end = selection.end;

    if (selection.begin > selection.end) {
      begin = selection.end;
      end = selection.begin;
    }
  }

  if (lAltPos === -1 && rAltPos === undefined) {
    //do not recurse when already paste the beginning
    lastAlt = 0;
    prevAltPos = getTest.call(inputmask, lastAlt);
    alternation = prevAltPos.alternation;
  } else {
    //find last modified alternation
    for (; lAltPos >= 0; lAltPos--) {
      altPos = maskset.validPositions[lAltPos];

      if (altPos && altPos.alternation !== undefined) {
        if (prevAltPos && prevAltPos.locator[altPos.alternation] !== altPos.locator[altPos.alternation]) {
          break;
        }

        lastAlt = lAltPos;
        alternation = maskset.validPositions[lastAlt].alternation;
        prevAltPos = altPos;
      }
    }
  }

  if (alternation !== undefined) {
    decisionPos = parseInt(lastAlt);
    maskset.excludes[decisionPos] = maskset.excludes[decisionPos] || [];

    if (maskPos !== true) {
      //generalize
      maskset.excludes[decisionPos].push(getDecisionTaker(prevAltPos) + ":" + prevAltPos.alternation);
    }

    var validInputs = [],
        resultPos = -1;

    for (i = decisionPos; i < getLastValidPosition.call(inputmask, undefined, true) + 1; i++) {
      if (resultPos === -1 && maskPos <= i && c !== undefined) {
        validInputs.push(c);
        resultPos = validInputs.length - 1;
      }

      validPos = maskset.validPositions[i];

      if (validPos && validPos.generatedInput !== true && (selection === undefined || i < begin || i >= end)) {
        validInputs.push(validPos.input);
      }

      delete maskset.validPositions[i];
    }

    if (resultPos === -1 && c !== undefined) {
      validInputs.push(c);
      resultPos = validInputs.length - 1;
    }

    while (maskset.excludes[decisionPos] !== undefined && maskset.excludes[decisionPos].length < 10) {
      // maskset.tests[decisionPos] = undefined; //clear decisionPos
      maskset.tests = {}; //clear all

      resetMaskSet.call(inputmask, true); //clear getbuffer

      isValidRslt = true;

      for (i = 0; i < validInputs.length; i++) {
        nextPos = isValidRslt.caret || getLastValidPosition.call(inputmask, undefined, true) + 1;
        input = validInputs[i];

        if (!(isValidRslt = isValid.call(inputmask, nextPos, input, false, fromIsValid, true))) {
          break;
        }

        if (i === resultPos) {
          returnRslt = isValidRslt;
        }

        if (maskPos == true && isValidRslt) {
          //return validposition on generalise
          returnRslt = {
            caretPos: i
          };
        }
      }

      if (!isValidRslt) {
        resetMaskSet.call(inputmask);
        prevAltPos = getTest.call(inputmask, decisionPos); //get the current decisionPos to exclude ~ needs to be before restoring the initial validation
        //reset & revert

        maskset.validPositions = $.extend(true, {}, validPsClone);
        maskset.tests = $.extend(true, {}, tstClone); //refresh tests after possible alternating

        if (maskset.excludes[decisionPos]) {
          var decisionTaker = getDecisionTaker(prevAltPos);

          if (maskset.excludes[decisionPos].indexOf(decisionTaker + ":" + prevAltPos.alternation) !== -1) {
            returnRslt = alternate.call(inputmask, maskPos, c, strict, fromIsValid, decisionPos - 1, selection);
            break;
          }

          maskset.excludes[decisionPos].push(decisionTaker + ":" + prevAltPos.alternation);

          for (i = decisionPos; i < getLastValidPosition.call(inputmask, undefined, true) + 1; i++) {
            delete maskset.validPositions[i];
          }
        } else {
          //latest alternation
          returnRslt = alternate.call(inputmask, maskPos, c, strict, fromIsValid, decisionPos - 1, selection);
          break;
        }
      } else {
        break;
      }
    }
  } //reset alternation excludes


  if (!returnRslt || opts.keepStatic !== false) {
    delete maskset.excludes[decisionPos];
  }

  return returnRslt;
}

function casing(elem, test, pos) {
  var opts = this.opts,
      maskset = this.maskset;

  switch (opts.casing || test.casing) {
    case "upper":
      elem = elem.toUpperCase();
      break;

    case "lower":
      elem = elem.toLowerCase();
      break;

    case "title":
      var posBefore = maskset.validPositions[pos - 1];

      if (pos === 0 || posBefore && posBefore.input === String.fromCharCode(keyCode.SPACE)) {
        elem = elem.toUpperCase();
      } else {
        elem = elem.toLowerCase();
      }

      break;

    default:
      if (typeof opts.casing === "function") {
        var args = Array.prototype.slice.call(arguments);
        args.push(maskset.validPositions);
        elem = opts.casing.apply(this, args);
      }

  }

  return elem;
} //tobe put on prototype?


function checkAlternationMatch(altArr1, altArr2, na) {
  var opts = this.opts;
  var altArrC = opts.greedy ? altArr2 : altArr2.slice(0, 1),
      isMatch = false,
      naArr = na !== undefined ? na.split(",") : [],
      naNdx; //remove no alternate indexes from alternation array

  for (var i = 0; i < naArr.length; i++) {
    if ((naNdx = altArr1.indexOf(naArr[i])) !== -1) {
      altArr1.splice(naNdx, 1);
    }
  }

  for (var alndx = 0; alndx < altArr1.length; alndx++) {
    if (altArrC.includes(altArr1[alndx])) {
      isMatch = true;
      break;
    }
  }

  return isMatch;
} //tobe put on prototype?


function handleRemove(input, k, pos, strict, fromIsValid) {
  var inputmask = this,
      maskset = this.maskset,
      opts = this.opts;

  if (opts.numericInput || inputmask.isRTL) {
    if (k === keyCode.BACKSPACE) {
      k = keyCode.DELETE;
    } else if (k === keyCode.DELETE) {
      k = keyCode.BACKSPACE;
    }

    if (inputmask.isRTL) {
      var pend = pos.end;
      pos.end = pos.begin;
      pos.begin = pend;
    }
  }

  var lvp = getLastValidPosition.call(inputmask, undefined, true);

  if (pos.end >= getBuffer.call(inputmask).length && lvp >= pos.end) {
    //handle numeric negate symbol offset, due to  dynamic jit masking
    pos.end = lvp + 1;
  }

  if (k === keyCode.BACKSPACE) {
    if (pos.end - pos.begin < 1) {
      pos.begin = seekPrevious.call(inputmask, pos.begin);
    }
  } else if (k === keyCode.DELETE) {
    if (pos.begin === pos.end) {
      pos.end = isMask.call(inputmask, pos.end, true, true) ? pos.end + 1 : seekNext.call(inputmask, pos.end) + 1;
    }
  }

  var offset;

  if ((offset = revalidateMask.call(inputmask, pos)) !== false) {
    if (strict !== true && opts.keepStatic !== false || opts.regex !== null && getTest.call(inputmask, pos.begin).match.def.indexOf("|") !== -1) {
      //TODO NEEDS BETTER CHECK WHEN TO ALTERNATE  ~ opts regex isn"t good enough
      var result = alternate.call(inputmask, true);

      if (result) {
        var newPos = result.caret !== undefined ? result.caret : result.pos ? seekNext.call(inputmask, result.pos.begin ? result.pos.begin : result.pos) : getLastValidPosition.call(inputmask, -1, true);

        if (k !== keyCode.DELETE || pos.begin > newPos) {
          pos.begin == newPos;
        }
      }
    }

    if (strict !== true) {
      maskset.p = k === keyCode.DELETE ? pos.begin + offset : pos.begin;
    }
  }
} //tobe put on prototype?


function isComplete(buffer) {
  //return true / false / undefined (repeat *)
  var inputmask = this,
      opts = this.opts,
      maskset = this.maskset;
  if (typeof opts.isComplete === "function") return opts.isComplete(buffer, opts);
  if (opts.repeat === "*") return undefined;
  var complete = false,
      lrp = determineLastRequiredPosition.call(inputmask, true),
      aml = seekPrevious.call(inputmask, lrp.l);

  if (lrp.def === undefined || lrp.def.newBlockMarker || lrp.def.optionality || lrp.def.optionalQuantifier) {
    complete = true;

    for (var i = 0; i <= aml; i++) {
      var test = getTestTemplate.call(inputmask, i).match;

      if (test.static !== true && maskset.validPositions[i] === undefined && test.optionality !== true && test.optionalQuantifier !== true || test.static === true && buffer[i] !== getPlaceholder.call(inputmask, i, test)) {
        complete = false;
        break;
      }
    }
  }

  return complete;
} //tobe put on prototype?


function isValid(pos, c, strict, fromIsValid, fromAlternate, validateOnly, fromCheckval) {
  //strict true ~ no correction or autofill
  var inputmask = this,
      $ = this.dependencyLib,
      opts = this.opts,
      el = inputmask.el,
      maskset = inputmask.maskset;

  function isSelection(posObj) {
    return inputmask.isRTL ? posObj.begin - posObj.end > 1 || posObj.begin - posObj.end === 1 : posObj.end - posObj.begin > 1 || posObj.end - posObj.begin === 1;
  }

  strict = strict === true; //always set a value to strict to prevent possible strange behavior in the extensions

  var maskPos = pos;

  if (pos.begin !== undefined) {
    //position was a position object - used to handle a delete by typing over a selection
    maskPos = inputmask.isRTL ? pos.end : pos.begin;
  }

  function processCommandObject(commandObj) {
    if (commandObj !== undefined) {
      if (commandObj.remove !== undefined) {
        //remove position(s)
        if (!Array.isArray(commandObj.remove)) commandObj.remove = [commandObj.remove];
        commandObj.remove.sort(function (a, b) {
          return b.pos - a.pos;
        }).forEach(function (lmnt) {
          revalidateMask.call(inputmask, {
            begin: lmnt,
            end: lmnt + 1
          });
        });
        commandObj.remove = undefined;
      }

      if (commandObj.insert !== undefined) {
        //insert position(s)
        if (!Array.isArray(commandObj.insert)) commandObj.insert = [commandObj.insert];
        commandObj.insert.sort(function (a, b) {
          return a.pos - b.pos;
        }).forEach(function (lmnt) {
          if (lmnt.c !== "") {
            isValid.call(inputmask, lmnt.pos, lmnt.c, lmnt.strict !== undefined ? lmnt.strict : true, lmnt.fromIsValid !== undefined ? lmnt.fromIsValid : fromIsValid);
          }
        });
        commandObj.insert = undefined;
      }

      if (commandObj.refreshFromBuffer && commandObj.buffer) {
        var refresh = commandObj.refreshFromBuffer;
        refreshFromBuffer.call(inputmask, refresh === true ? refresh : refresh.start, refresh.end, commandObj.buffer);
        commandObj.refreshFromBuffer = undefined;
      }

      if (commandObj.rewritePosition !== undefined) {
        maskPos = commandObj.rewritePosition; // commandObj.rewritePosition = undefined;

        commandObj = true;
      }
    }

    return commandObj;
  }

  function _isValid(position, c, strict) {
    var rslt = false;
    getTests.call(inputmask, position).every(function (tst, ndx) {
      var test = tst.match; //make sure the buffer is set and correct

      getBuffer.call(inputmask, true); //return is false or a json object => { pos: ??, c: ??} or true

      rslt = test.fn != null ? test.fn.test(c, maskset, position, strict, opts, isSelection(pos)) : (c === test.def || c === opts.skipOptionalPartCharacter) && test.def !== "" ? //non mask
      {
        c: getPlaceholder.call(inputmask, position, test, true) || test.def,
        pos: position
      } : false;

      if (rslt !== false) {
        var elem = rslt.c !== undefined ? rslt.c : c,
            validatedPos = position;
        elem = elem === opts.skipOptionalPartCharacter && test.static === true ? getPlaceholder.call(inputmask, position, test, true) || test.def : elem;
        rslt = processCommandObject(rslt);

        if (rslt !== true && rslt.pos !== undefined && rslt.pos !== position) {
          //their is a position offset
          validatedPos = rslt.pos;
        }

        if (rslt !== true && rslt.pos === undefined && rslt.c === undefined) {
          return false; //breakout if nothing to insert
        }

        if (revalidateMask.call(inputmask, pos, $.extend({}, tst, {
          "input": casing.call(inputmask, elem, test, validatedPos)
        }), fromIsValid, validatedPos) === false) {
          rslt = false;
        }

        return false; //break from loop
      }

      return true;
    });
    return rslt;
  }

  var result = true,
      positionsClone = $.extend(true, {}, maskset.validPositions); //clone the currentPositions

  if (opts.keepStatic === false && maskset.excludes[maskPos] !== undefined && fromAlternate !== true && fromIsValid !== true) {
    for (var i = maskPos; i < (inputmask.isRTL ? pos.begin : pos.end); i++) {
      if (maskset.excludes[i] !== undefined) {
        maskset.excludes[i] = undefined;
        delete maskset.tests[i];
      }
    }
  }

  if (typeof opts.preValidation === "function" && fromIsValid !== true && validateOnly !== true) {
    result = opts.preValidation.call(el, getBuffer.call(inputmask), maskPos, c, isSelection(pos), opts, maskset, pos, strict || fromAlternate);
    result = processCommandObject(result);
  }

  if (result === true) {
    //preValidation result
    if (inputmask.maxLength === undefined || maskPos < inputmask.maxLength) {
      result = _isValid(maskPos, c, strict);

      if ((!strict || fromIsValid === true) && result === false && validateOnly !== true) {
        var currentPosValid = maskset.validPositions[maskPos];

        if (currentPosValid && currentPosValid.match.static === true && (currentPosValid.match.def === c || c === opts.skipOptionalPartCharacter)) {
          result = {
            "caret": seekNext.call(inputmask, maskPos)
          };
        } else {
          if (opts.insertMode || maskset.validPositions[seekNext.call(inputmask, maskPos)] === undefined || pos.end > maskPos) {
            //does the input match on a further position?
            var skip = false;

            if (maskset.jitOffset[maskPos] && maskset.validPositions[seekNext.call(inputmask, maskPos)] === undefined) {
              result = isValid.call(inputmask, maskPos + maskset.jitOffset[maskPos], c, true);

              if (result !== false) {
                if (fromAlternate !== true) result.caret = maskPos;
                skip = true;
              }
            }

            if (pos.end > maskPos) {
              maskset.validPositions[maskPos] = undefined;
            }

            if (!skip && !isMask.call(inputmask, maskPos, opts.keepStatic && maskPos === 0)) {
              for (var nPos = maskPos + 1, snPos = seekNext.call(inputmask, maskPos, false, maskPos !== 0); nPos <= snPos; nPos++) {
                // if (!isMask(nPos, true)) {
                // 	continue;
                // }
                result = _isValid(nPos, c, strict);

                if (result !== false) {
                  result = trackbackPositions.call(inputmask, maskPos, result.pos !== undefined ? result.pos : nPos) || result;
                  maskPos = nPos;
                  break;
                }
              }
            }
          }
        }
      }
    } else {
      result = false;
    }

    if (result === false && opts.keepStatic && (isComplete.call(inputmask, getBuffer.call(inputmask)) || maskPos === 0) && !strict && fromAlternate !== true) {
      //try fuzzy alternator logic
      result = alternate.call(inputmask, maskPos, c, strict, fromIsValid, undefined, pos);
    } else if (isSelection(pos) && maskset.tests[maskPos] && maskset.tests[maskPos].length > 1 && opts.keepStatic && !strict && fromAlternate !== true) {
      //selection clears an alternated keepstatic mask ~ #2189
      result = alternate.call(inputmask, true);
    }

    if (result === true) {
      result = {
        "pos": maskPos
      };
    }
  }

  if (typeof opts.postValidation === "function" && fromIsValid !== true && validateOnly !== true) {
    var postResult = opts.postValidation.call(el, getBuffer.call(inputmask, true), pos.begin !== undefined ? inputmask.isRTL ? pos.end : pos.begin : pos, c, result, opts, maskset, strict, fromCheckval);

    if (postResult !== undefined) {
      result = postResult === true ? result : postResult;
    }
  }

  if (result && result.pos === undefined) {
    result.pos = maskPos;
  }

  if (result === false || validateOnly === true) {
    resetMaskSet.call(inputmask, true);
    maskset.validPositions = $.extend(true, {}, positionsClone); //revert validation changes
  } else {
    trackbackPositions.call(inputmask, undefined, maskPos, true);
  }

  var endResult = processCommandObject(result); // console.log("returned result " + JSON.stringify(endResult));

  return endResult;
} //tobe put on prototype?


function positionCanMatchDefinition(pos, testDefinition, opts) {
  var inputmask = this,
      maskset = this.maskset;
  var valid = false,
      tests = getTests.call(inputmask, pos);

  for (var tndx = 0; tndx < tests.length; tndx++) {
    if (tests[tndx].match && (tests[tndx].match["nativeDef"] === testDefinition.match[opts.shiftPositions ? "def" : "nativeDef"] && (!opts.shiftPositions || !testDefinition.match.static) || tests[tndx].match["nativeDef"] === testDefinition.match["nativeDef"])) {
      valid = true;
      break;
    } else if (tests[tndx].match && tests[tndx].match["def"] === testDefinition.match["nativeDef"]) {
      valid = undefined;
      break;
    }
  }

  if (valid === false) {
    if (maskset.jitOffset[pos] !== undefined) {
      valid = positionCanMatchDefinition.call(inputmask, pos + maskset.jitOffset[pos], testDefinition, opts);
    }
  }

  return valid;
} //tobe put on prototype?


function refreshFromBuffer(start, end, buffer) {
  var inputmask = this,
      maskset = this.maskset,
      opts = this.opts,
      $ = this.dependencyLib,
      el = inputmask.el; // checkVal.call(inputmask, el, false, true, isRTL ? buffer.reverse() : buffer);

  var i,
      p,
      skipOptionalPartCharacter = opts.skipOptionalPartCharacter,
      bffr = inputmask.isRTL ? buffer.slice().reverse() : buffer;
  opts.skipOptionalPartCharacter = "";

  if (start === true) {
    resetMaskSet.call(inputmask);
    maskset.tests = {}; //refresh tests after possible alternating

    start = 0;
    end = buffer.length;
    p = determineNewCaretPosition.call(inputmask, {
      begin: 0,
      end: 0
    }, false).begin;
  } else {
    for (i = start; i < end; i++) {
      delete maskset.validPositions[i];
    }

    p = start;
  }

  var keypress = new $.Event("keypress");

  for (i = start; i < end; i++) {
    keypress.which = bffr[i].toString().charCodeAt(0);
    inputmask.ignorable = false; //make sure ignorable is ignored ;-)

    var valResult = EventHandlers.keypressEvent.call(el, keypress, true, false, false, p);

    if (valResult !== false) {
      p = valResult.forwardPosition;
    }
  }

  opts.skipOptionalPartCharacter = skipOptionalPartCharacter;
} //tobe put on prototype?
//fill in best positions according the current input


function trackbackPositions(originalPos, newPos, fillOnly) {
  var inputmask = this,
      maskset = this.maskset,
      $ = this.dependencyLib; // console.log("trackbackPositions " + originalPos + " " + newPos);

  if (originalPos === undefined) {
    //find previous valid
    for (originalPos = newPos - 1; originalPos > 0; originalPos--) {
      if (maskset.validPositions[originalPos]) break;
    }
  }

  for (var ps = originalPos; ps < newPos; ps++) {
    if (maskset.validPositions[ps] === undefined && !isMask.call(inputmask, ps, true)) {
      var vp = ps == 0 ? getTest.call(inputmask, ps) : maskset.validPositions[ps - 1];

      if (vp) {
        var tests = getTests.call(inputmask, ps).slice();
        if (tests[tests.length - 1].match.def === "") tests.pop();
        var bestMatch = determineTestTemplate.call(inputmask, ps, tests),
            np;

        if (bestMatch && (bestMatch.match.jit !== true || bestMatch.match.newBlockMarker === "master" && (np = maskset.validPositions[ps + 1]) && np.match.optionalQuantifier === true)) {
          bestMatch = $.extend({}, bestMatch, {
            "input": getPlaceholder.call(inputmask, ps, bestMatch.match, true) || bestMatch.match.def
          });
          bestMatch.generatedInput = true;
          revalidateMask.call(inputmask, ps, bestMatch, true);

          if (fillOnly !== true) {
            //revalidate the new position to update the locator value
            var cvpInput = maskset.validPositions[newPos].input;
            maskset.validPositions[newPos] = undefined;
            return isValid.call(inputmask, newPos, cvpInput, true, true);
          }
        }
      }
    }
  }
} //tobe put on prototype?


function revalidateMask(pos, validTest, fromIsValid, validatedPos) {
  var inputmask = this,
      maskset = this.maskset,
      opts = this.opts,
      $ = this.dependencyLib;

  function IsEnclosedStatic(pos, valids, selection) {
    var posMatch = valids[pos];

    if (posMatch !== undefined && posMatch.match.static === true && posMatch.match.optionality !== true && (valids[0] === undefined || valids[0].alternation === undefined)) {
      var prevMatch = selection.begin <= pos - 1 ? valids[pos - 1] && valids[pos - 1].match.static === true && valids[pos - 1] : valids[pos - 1],
          nextMatch = selection.end > pos + 1 ? valids[pos + 1] && valids[pos + 1].match.static === true && valids[pos + 1] : valids[pos + 1];
      return prevMatch && nextMatch;
    }

    return false;
  }

  var offset = 0,
      begin = pos.begin !== undefined ? pos.begin : pos,
      end = pos.end !== undefined ? pos.end : pos;

  if (pos.begin > pos.end) {
    begin = pos.end;
    end = pos.begin;
  }

  validatedPos = validatedPos !== undefined ? validatedPos : begin;

  if (begin !== end || opts.insertMode && maskset.validPositions[validatedPos] !== undefined && fromIsValid === undefined || validTest === undefined) {
    //reposition & revalidate others
    var positionsClone = $.extend(true, {}, maskset.validPositions),
        lvp = getLastValidPosition.call(inputmask, undefined, true),
        i;
    maskset.p = begin; //needed for alternated position after overtype selection

    for (i = lvp; i >= begin; i--) {
      delete maskset.validPositions[i];
      if (validTest === undefined) delete maskset.tests[i + 1];
    }

    var valid = true,
        j = validatedPos,
        posMatch = j,
        t,
        canMatch;

    if (validTest) {
      maskset.validPositions[validatedPos] = $.extend(true, {}, validTest);
      posMatch++;
      j++;
    }

    for (i = validTest ? end : end - 1; i <= lvp; i++) {
      if ((t = positionsClone[i]) !== undefined && t.generatedInput !== true && (i >= end || i >= begin && IsEnclosedStatic(i, positionsClone, {
        begin: begin,
        end: end
      }))) {
        while (getTest.call(inputmask, posMatch).match.def !== "") {
          //loop needed to match further positions
          if ((canMatch = positionCanMatchDefinition.call(inputmask, posMatch, t, opts)) !== false || t.match.def === "+") {
            //validated match //we still need some hackery for the + validator (numeric alias)
            if (t.match.def === "+") getBuffer.call(inputmask, true);
            var result = isValid.call(inputmask, posMatch, t.input, t.match.def !== "+", t.match.def !== "+");
            valid = result !== false;
            j = (result.pos || posMatch) + 1;
            if (!valid && canMatch) break;
          } else {
            valid = false;
          }

          if (valid) {
            if (validTest === undefined && t.match.static && i === pos.begin) offset++;
            break;
          }

          if (!valid && posMatch > maskset.maskLength) {
            break;
          }

          posMatch++;
        }

        if (getTest.call(inputmask, posMatch).match.def == "") {
          valid = false;
        } //restore position


        posMatch = j;
      }

      if (!valid) break;
    }

    if (!valid) {
      maskset.validPositions = $.extend(true, {}, positionsClone);
      resetMaskSet.call(inputmask, true);
      return false;
    }
  } else if (validTest && getTest.call(inputmask, validatedPos).match.cd === validTest.match.cd) {
    maskset.validPositions[validatedPos] = $.extend(true, {}, validTest);
  }

  resetMaskSet.call(inputmask, true);
  return offset;
}

function caret(input, begin, end, notranslate, isDelete) {
  var inputmask = this,
      opts = this.opts;
  var range;

  if (begin !== undefined) {
    if (Array.isArray(begin)) {
      end = inputmask.isRTL ? begin[0] : begin[1];
      begin = inputmask.isRTL ? begin[1] : begin[0];
    }

    if (begin.begin !== undefined) {
      end = inputmask.isRTL ? begin.begin : begin.end;
      begin = inputmask.isRTL ? begin.end : begin.begin;
    }

    if (typeof begin === "number") {
      begin = notranslate ? begin : translatePosition.call(inputmask, begin);
      end = notranslate ? end : translatePosition.call(inputmask, end);
      end = typeof end == "number" ? end : begin; // if (!$(input).is(":visible")) {
      // 	return;
      // }

      var scrollCalc = parseInt(((input.ownerDocument.defaultView || window).getComputedStyle ? (input.ownerDocument.defaultView || window).getComputedStyle(input, null) : input.currentStyle).fontSize) * end;
      input.scrollLeft = scrollCalc > input.scrollWidth ? scrollCalc : 0;
      input.inputmask.caretPos = {
        begin: begin,
        end: end
      }; //track caret internally

      if (opts.insertModeVisual && opts.insertMode === false && begin === end) {
        if (!isDelete) {
          end++; //set visualization for insert/overwrite mode
        }
      }

      if (input === (input.inputmask.shadowRoot || document).activeElement) {
        if ("setSelectionRange" in input) {
          input.setSelectionRange(begin, end);
        } else if (window.getSelection) {
          range = document.createRange();

          if (input.firstChild === undefined || input.firstChild === null) {
            var textNode = document.createTextNode("");
            input.appendChild(textNode);
          }

          range.setStart(input.firstChild, begin < input.inputmask._valueGet().length ? begin : input.inputmask._valueGet().length);
          range.setEnd(input.firstChild, end < input.inputmask._valueGet().length ? end : input.inputmask._valueGet().length);
          range.collapse(true);
          var sel = window.getSelection();
          sel.removeAllRanges();
          sel.addRange(range); //input.focus();
        } else if (input.createTextRange) {
          range = input.createTextRange();
          range.collapse(true);
          range.moveEnd("character", end);
          range.moveStart("character", begin);
          range.select();
        }
      }
    }
  } else {
    if ("selectionStart" in input && "selectionEnd" in input) {
      begin = input.selectionStart;
      end = input.selectionEnd;
    } else if (window.getSelection) {
      range = window.getSelection().getRangeAt(0);

      if (range.commonAncestorContainer.parentNode === input || range.commonAncestorContainer === input) {
        begin = range.startOffset;
        end = range.endOffset;
      }
    } else if (document.selection && document.selection.createRange) {
      range = document.selection.createRange();
      begin = 0 - range.duplicate().moveStart("character", -input.inputmask._valueGet().length);
      end = begin + range.text.length;
    } // if (opts.insertModeVisual && opts.insertMode === false && begin === (end - 1)) end--; //correct caret for insert/overwrite mode

    /*eslint-disable consistent-return */


    return {
      "begin": notranslate ? begin : translatePosition.call(inputmask, begin),
      "end": notranslate ? end : translatePosition.call(inputmask, end)
    };
    /*eslint-enable consistent-return */
  }
} //tobe put on prototype?


function determineLastRequiredPosition(returnDefinition) {
  var inputmask = this,
      maskset = this.maskset,
      $ = this.dependencyLib;
  var buffer = getMaskTemplate.call(inputmask, true, getLastValidPosition.call(inputmask), true, true),
      bl = buffer.length,
      pos,
      lvp = getLastValidPosition.call(inputmask),
      positions = {},
      lvTest = maskset.validPositions[lvp],
      ndxIntlzr = lvTest !== undefined ? lvTest.locator.slice() : undefined,
      testPos;

  for (pos = lvp + 1; pos < buffer.length; pos++) {
    testPos = getTestTemplate.call(inputmask, pos, ndxIntlzr, pos - 1);
    ndxIntlzr = testPos.locator.slice();
    positions[pos] = $.extend(true, {}, testPos);
  }

  var lvTestAlt = lvTest && lvTest.alternation !== undefined ? lvTest.locator[lvTest.alternation] : undefined;

  for (pos = bl - 1; pos > lvp; pos--) {
    testPos = positions[pos];

    if ((testPos.match.optionality || testPos.match.optionalQuantifier && testPos.match.newBlockMarker || lvTestAlt && (lvTestAlt !== positions[pos].locator[lvTest.alternation] && testPos.match.static != true || testPos.match.static === true && testPos.locator[lvTest.alternation] && checkAlternationMatch.call(inputmask, testPos.locator[lvTest.alternation].toString().split(","), lvTestAlt.toString().split(",")) && getTests.call(inputmask, pos)[0].def !== "")) && buffer[pos] === getPlaceholder.call(inputmask, pos, testPos.match)) {
      bl--;
    } else {
      break;
    }
  }

  return returnDefinition ? {
    "l": bl,
    "def": positions[bl] ? positions[bl].match : undefined
  } : bl;
} //tobe put on prototype?


function determineNewCaretPosition(selectedCaret, tabbed) {
  var inputmask = this,
      maskset = this.maskset,
      opts = this.opts;

  function doRadixFocus(clickPos) {
    if (opts.radixPoint !== "" && opts.digits !== 0) {
      var vps = maskset.validPositions;

      if (vps[clickPos] === undefined || vps[clickPos].input === getPlaceholder.call(inputmask, clickPos)) {
        if (clickPos < seekNext.call(inputmask, -1)) return true;
        var radixPos = getBuffer.call(inputmask).indexOf(opts.radixPoint);

        if (radixPos !== -1) {
          for (var vp in vps) {
            if (vps[vp] && radixPos < vp && vps[vp].input !== getPlaceholder.call(inputmask, vp)) {
              return false;
            }
          }

          return true;
        }
      }
    }

    return false;
  }

  if (tabbed) {
    if (inputmask.isRTL) {
      selectedCaret.end = selectedCaret.begin;
    } else {
      selectedCaret.begin = selectedCaret.end;
    }
  }

  if (selectedCaret.begin === selectedCaret.end) {
    switch (opts.positionCaretOnClick) {
      case "none":
        break;

      case "select":
        selectedCaret = {
          begin: 0,
          end: getBuffer.call(inputmask).length
        };
        break;

      case "ignore":
        selectedCaret.end = selectedCaret.begin = seekNext.call(inputmask, getLastValidPosition.call(inputmask));
        break;

      case "radixFocus":
        if (doRadixFocus(selectedCaret.begin)) {
          var radixPos = getBuffer.call(inputmask).join("").indexOf(opts.radixPoint);
          selectedCaret.end = selectedCaret.begin = opts.numericInput ? seekNext.call(inputmask, radixPos) : radixPos;
          break;
        }

      //fallback to lvp
      // eslint-disable-next-line no-fallthrough

      default:
        //lvp:
        var clickPosition = selectedCaret.begin,
            lvclickPosition = getLastValidPosition.call(inputmask, clickPosition, true),
            lastPosition = seekNext.call(inputmask, lvclickPosition === -1 && !isMask.call(inputmask, 0) ? -1 : lvclickPosition);

        if (clickPosition <= lastPosition) {
          selectedCaret.end = selectedCaret.begin = !isMask.call(inputmask, clickPosition, false, true) ? seekNext.call(inputmask, clickPosition) : clickPosition;
        } else {
          var lvp = maskset.validPositions[lvclickPosition],
              tt = getTestTemplate.call(inputmask, lastPosition, lvp ? lvp.match.locator : undefined, lvp),
              placeholder = getPlaceholder.call(inputmask, lastPosition, tt.match);

          if (placeholder !== "" && getBuffer.call(inputmask)[lastPosition] !== placeholder && tt.match.optionalQuantifier !== true && tt.match.newBlockMarker !== true || !isMask.call(inputmask, lastPosition, opts.keepStatic, true) && tt.match.def === placeholder) {
            var newPos = seekNext.call(inputmask, lastPosition);

            if (clickPosition >= newPos || clickPosition === lastPosition) {
              lastPosition = newPos;
            }
          }

          selectedCaret.end = selectedCaret.begin = lastPosition;
        }

    }

    return selectedCaret;
  }
} //tobe put on prototype?


function getBuffer(noCache) {
  var inputmask = this,
      maskset = this.maskset;

  if (maskset.buffer === undefined || noCache === true) {
    maskset.buffer = getMaskTemplate.call(inputmask, true, getLastValidPosition.call(inputmask), true);
    if (maskset._buffer === undefined) maskset._buffer = maskset.buffer.slice();
  }

  return maskset.buffer;
} //tobe put on prototype?


function getBufferTemplate() {
  var inputmask = this,
      maskset = this.maskset;

  if (maskset._buffer === undefined) {
    //generate template
    maskset._buffer = getMaskTemplate.call(inputmask, false, 1);
    if (maskset.buffer === undefined) maskset.buffer = maskset._buffer.slice();
  }

  return maskset._buffer;
} //tobe put on prototype?


function getLastValidPosition(closestTo, strict, validPositions) {
  var maskset = this.maskset;
  var before = -1,
      after = -1,
      valids = validPositions || maskset.validPositions; //for use in valhook ~ context switch

  if (closestTo === undefined) closestTo = -1;

  for (var posNdx in valids) {
    var psNdx = parseInt(posNdx);

    if (valids[psNdx] && (strict || valids[psNdx].generatedInput !== true)) {
      if (psNdx <= closestTo) before = psNdx;
      if (psNdx >= closestTo) after = psNdx;
    }
  }

  return before === -1 || before == closestTo ? after : after == -1 ? before : closestTo - before < after - closestTo ? before : after;
} //tobe put on prototype?


function isMask(pos, strict, fuzzy) {
  var inputmask = this,
      maskset = this.maskset;
  var test = getTestTemplate.call(inputmask, pos).match;
  if (test.def === "") test = getTest.call(inputmask, pos).match;

  if (test.static !== true) {
    return test.fn;
  }

  if (fuzzy === true && maskset.validPositions[pos] !== undefined && maskset.validPositions[pos].generatedInput !== true) {
    return true;
  }

  if (strict !== true && pos > -1) {
    if (fuzzy) {
      //check on the number of tests
      var tests = getTests.call(inputmask, pos);
      return tests.length > 1 + (tests[tests.length - 1].match.def === "" ? 1 : 0);
    } //else based on the template


    var testTemplate = determineTestTemplate.call(inputmask, pos, getTests.call(inputmask, pos));
    var testPlaceHolder = getPlaceholder.call(inputmask, pos, testTemplate.match);
    return testTemplate.match.def !== testPlaceHolder;
  }

  return false;
} //tobe put on prototype?


function resetMaskSet(soft) {
  var maskset = this.maskset;
  maskset.buffer = undefined;

  if (soft !== true) {
    maskset.validPositions = {};
    maskset.p = 0;
  }
} //tobe put on prototype?


function seekNext(pos, newBlock, fuzzy) {
  var inputmask = this;
  if (fuzzy === undefined) fuzzy = true;
  var position = pos + 1;

  while (getTest.call(inputmask, position).match.def !== "" && (newBlock === true && (getTest.call(inputmask, position).match.newBlockMarker !== true || !isMask.call(inputmask, position, undefined, true)) || newBlock !== true && !isMask.call(inputmask, position, undefined, fuzzy))) {
    position++;
  }

  return position;
} //tobe put on prototype?


function seekPrevious(pos, newBlock) {
  var inputmask = this;
  var position = pos - 1;
  if (pos <= 0) return 0;

  while (position > 0 && (newBlock === true && (getTest.call(inputmask, position).match.newBlockMarker !== true || !isMask.call(inputmask, position, undefined, true)) || newBlock !== true && !isMask.call(inputmask, position, undefined, true))) {
    position--;
  }

  return position;
} //tobe put on prototype?


function translatePosition(pos) {
  var inputmask = this,
      opts = this.opts,
      el = this.el;

  if (inputmask.isRTL && typeof pos === "number" && (!opts.greedy || opts.placeholder !== "") && el) {
    pos = inputmask._valueGet().length - pos;
  }

  return pos;
}

var EventRuler = {
  on: function on(input, eventName, eventHandler) {
    var $ = input.inputmask.dependencyLib;

    var ev = function ev(e) {
      if (e.originalEvent) {
        e = e.originalEvent || e; //get original event from jquery evenbt

        arguments[0] = e;
      } // console.log(e.type);


      var that = this,
          args,
          inputmask = that.inputmask,
          opts = inputmask ? inputmask.opts : undefined,
          $ = inputmask.dependencyLib;

      if (inputmask === undefined && this.nodeName !== "FORM") {
        //happens when cloning an object with jquery.clone
        var imOpts = $.data(that, "_inputmask_opts");
        $(that).off(); //unbind all events

        if (imOpts) {
          new Inputmask$1(imOpts).mask(that);
        }
      } else if (e.type !== "setvalue" && this.nodeName !== "FORM" && (that.disabled || that.readOnly && !(e.type === "keydown" && e.ctrlKey && e.keyCode === 67 || opts.tabThrough === false && e.keyCode === keyCode.TAB))) {
        e.preventDefault();
      } else {
        switch (e.type) {
          case "input":
            if (inputmask.skipInputEvent === true || e.inputType && e.inputType === "insertCompositionText") {
              inputmask.skipInputEvent = false;
              return e.preventDefault();
            } // if (mobile) { //this causes problem see #2220
            // 	args = arguments;
            // 	setTimeout(function () { //needed for caret selection when entering a char on Android 8 - #1818
            // 		eventHandler.apply(that, args);
            // 		caret(that, that.inputmask.caretPos, undefined, true);
            // 	}, 0);
            // 	return false;
            // }


            break;

          case "keydown":
            //Safari 5.1.x - modal dialog fires keypress twice workaround
            inputmask.skipKeyPressEvent = false;
            inputmask.skipInputEvent = inputmask.isComposing = e.keyCode === keyCode.KEY_229;
            break;

          case "keyup":
          case "compositionend":
            if (inputmask.isComposing) {
              inputmask.skipInputEvent = false;
            }

            break;

          case "keypress":
            if (inputmask.skipKeyPressEvent === true) {
              return e.preventDefault();
            }

            inputmask.skipKeyPressEvent = true;
            break;

          case "click":
          case "focus":
            if (inputmask.validationEvent) {
              // #841
              inputmask.validationEvent = false;
              input.blur();
              HandleNativePlaceholder(input, (inputmask.isRTL ? getBufferTemplate.call(inputmask).slice().reverse() : getBufferTemplate.call(inputmask)).join(""));
              setTimeout(function () {
                input.focus();
              }, 3000);
              return false;
            }

            args = arguments;
            setTimeout(function () {
              //needed for Chrome ~ initial selection clears after the clickevent
              if (!input.inputmask) {
                // `inputmask.remove()` was called before this callback
                return;
              }

              eventHandler.apply(that, args);
            }, 0);
            return false;
        }

        var returnVal = eventHandler.apply(that, arguments);

        if (returnVal === false) {
          e.preventDefault();
          e.stopPropagation();
        }

        return returnVal;
      }
    }; //keep instance of the event


    input.inputmask.events[eventName] = input.inputmask.events[eventName] || [];
    input.inputmask.events[eventName].push(ev);

    if (["submit", "reset"].includes(eventName)) {
      if (input.form !== null) $(input.form).on(eventName, ev.bind(input));
    } else {
      $(input).on(eventName, ev);
    }
  },
  off: function off(input, event) {
    if (input.inputmask && input.inputmask.events) {
      var $ = input.inputmask.dependencyLib;
      var events = input.inputmask.events;

      if (event) {
        events = [];
        events[event] = input.inputmask.events[event];
      }

      for (var eventName in events) {
        var evArr = events[eventName];

        while (evArr.length > 0) {
          var ev = evArr.pop();

          if (["submit", "reset"].includes(eventName)) {
            if (input.form !== null) $(input.form).off(eventName, ev);
          } else {
            $(input).off(eventName, ev);
          }
        }

        delete input.inputmask.events[eventName];
      }
    }
  }
};

function mask() {
  var inputmask = this,
      opts = this.opts,
      el = this.el,
      $ = this.dependencyLib;

  function isElementTypeSupported(input, opts) {
    function patchValueProperty(npt) {
      var valueGet;
      var valueSet;

      function patchValhook(type) {
        if ($.valHooks && ($.valHooks[type] === undefined || $.valHooks[type].inputmaskpatch !== true)) {
          var valhookGet = $.valHooks[type] && $.valHooks[type].get ? $.valHooks[type].get : function (elem) {
            return elem.value;
          };
          var valhookSet = $.valHooks[type] && $.valHooks[type].set ? $.valHooks[type].set : function (elem, value) {
            elem.value = value;
            return elem;
          };
          $.valHooks[type] = {
            get: function get(elem) {
              if (elem.inputmask) {
                if (elem.inputmask.opts.autoUnmask) {
                  return elem.inputmask.unmaskedvalue();
                } else {
                  var result = valhookGet(elem);
                  return getLastValidPosition.call(inputmask, undefined, undefined, elem.inputmask.maskset.validPositions) !== -1 || opts.nullable !== true ? result : "";
                }
              } else {
                return valhookGet(elem);
              }
            },
            set: function set(elem, value) {
              var result = valhookSet(elem, value);

              if (elem.inputmask) {
                applyInputValue(elem, value);
              }

              return result;
            },
            inputmaskpatch: true
          };
        }
      }

      function getter() {
        if (this.inputmask) {
          return this.inputmask.opts.autoUnmask ? this.inputmask.unmaskedvalue() : getLastValidPosition.call(inputmask) !== -1 || opts.nullable !== true ? (this.inputmask.shadowRoot || document.activeElement) === this && opts.clearMaskOnLostFocus ? (inputmask.isRTL ? clearOptionalTail.call(inputmask, getBuffer.call(inputmask).slice()).reverse() : clearOptionalTail.call(inputmask, getBuffer.call(inputmask).slice())).join("") : valueGet.call(this) : "";
        } else {
          return valueGet.call(this);
        }
      }

      function setter(value) {
        valueSet.call(this, value);

        if (this.inputmask) {
          applyInputValue(this, value);
        }
      }

      function installNativeValueSetFallback(npt) {
        EventRuler.on(npt, "mouseenter", function () {
          var input = this,
              value = input.inputmask._valueGet(true);

          if (value !== (inputmask.isRTL ? getBuffer.call(inputmask).reverse() : getBuffer.call(inputmask)).join("")) {
            //Is this correct? to apply RTL? TOCHECK
            applyInputValue(input, value);
          }
        });
      }

      if (!npt.inputmask.__valueGet) {
        if (opts.noValuePatching !== true) {
          if (Object.getOwnPropertyDescriptor) {
            var valueProperty = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(npt), "value") : undefined;

            if (valueProperty && valueProperty.get && valueProperty.set) {
              valueGet = valueProperty.get;
              valueSet = valueProperty.set;
              Object.defineProperty(npt, "value", {
                get: getter,
                set: setter,
                configurable: true
              });
            } else if (npt.tagName.toLowerCase() !== "input") {
              valueGet = function valueGet() {
                return this.textContent;
              };

              valueSet = function valueSet(value) {
                this.textContent = value;
              };

              Object.defineProperty(npt, "value", {
                get: getter,
                set: setter,
                configurable: true
              });
            }
          } else if (document.__lookupGetter__ && npt.__lookupGetter__("value")) {
            valueGet = npt.__lookupGetter__("value");
            valueSet = npt.__lookupSetter__("value");

            npt.__defineGetter__("value", getter);

            npt.__defineSetter__("value", setter);
          }

          npt.inputmask.__valueGet = valueGet; //store native property getter

          npt.inputmask.__valueSet = valueSet; //store native property setter
        }

        npt.inputmask._valueGet = function (overruleRTL) {
          return inputmask.isRTL && overruleRTL !== true ? valueGet.call(this.el).split("").reverse().join("") : valueGet.call(this.el);
        };

        npt.inputmask._valueSet = function (value, overruleRTL) {
          //null check is needed for IE8 => otherwise converts to "null"
          valueSet.call(this.el, value === null || value === undefined ? "" : overruleRTL !== true && inputmask.isRTL ? value.split("").reverse().join("") : value);
        };

        if (valueGet === undefined) {
          //jquery.val fallback
          valueGet = function valueGet() {
            return this.value;
          };

          valueSet = function valueSet(value) {
            this.value = value;
          };

          patchValhook(npt.type);
          installNativeValueSetFallback(npt);
        }
      }
    }

    if (input.tagName.toLowerCase() !== "textarea") {
      opts.ignorables.push(keyCode.ENTER);
    }

    var elementType = input.getAttribute("type");
    var isSupported = input.tagName.toLowerCase() === "input" && opts.supportsInputType.includes(elementType) || input.isContentEditable || input.tagName.toLowerCase() === "textarea";

    if (!isSupported) {
      if (input.tagName.toLowerCase() === "input") {
        var el = document.createElement("input");
        el.setAttribute("type", elementType);
        isSupported = el.type === "text"; //apply mask only if the type is not natively supported

        el = null;
      } else {
        isSupported = "partial";
      }
    }

    if (isSupported !== false) {
      patchValueProperty(input);
    } else {
      input.inputmask = undefined;
    }

    return isSupported;
  } //unbind all events - to make sure that no other mask will interfere when re-masking


  EventRuler.off(el);
  var isSupported = isElementTypeSupported(el, opts);

  if (isSupported !== false) {
    inputmask.originalPlaceholder = el.placeholder; //read maxlength prop from el

    inputmask.maxLength = el !== undefined ? el.maxLength : undefined;
    if (inputmask.maxLength === -1) inputmask.maxLength = undefined;

    if ("inputMode" in el && el.getAttribute("inputmode") === null) {
      el.inputMode = opts.inputmode;
      el.setAttribute("inputmode", opts.inputmode);
    }

    if (isSupported === true) {
      opts.showMaskOnFocus = opts.showMaskOnFocus && ["cc-number", "cc-exp"].indexOf(el.autocomplete) === -1;

      if (iphone) {
        //selecting the caret shows as a slection on iphone
        opts.insertModeVisual = false;
      } //bind events


      EventRuler.on(el, "submit", EventHandlers.submitEvent);
      EventRuler.on(el, "reset", EventHandlers.resetEvent);
      EventRuler.on(el, "blur", EventHandlers.blurEvent);
      EventRuler.on(el, "focus", EventHandlers.focusEvent);
      EventRuler.on(el, "invalid", EventHandlers.invalidEvent);
      EventRuler.on(el, "click", EventHandlers.clickEvent);
      EventRuler.on(el, "mouseleave", EventHandlers.mouseleaveEvent);
      EventRuler.on(el, "mouseenter", EventHandlers.mouseenterEvent);
      EventRuler.on(el, "paste", EventHandlers.pasteEvent);
      EventRuler.on(el, "cut", EventHandlers.cutEvent);
      EventRuler.on(el, "complete", opts.oncomplete);
      EventRuler.on(el, "incomplete", opts.onincomplete);
      EventRuler.on(el, "cleared", opts.oncleared);

      if (opts.inputEventOnly !== true) {
        EventRuler.on(el, "keydown", EventHandlers.keydownEvent);
        EventRuler.on(el, "keypress", EventHandlers.keypressEvent);
        EventRuler.on(el, "keyup", EventHandlers.keyupEvent);
      }

      if (mobile || opts.inputEventOnly) {
        el.removeAttribute("maxLength");
      }

      EventRuler.on(el, "input", EventHandlers.inputFallBackEvent);
      EventRuler.on(el, "compositionend", EventHandlers.compositionendEvent); // EventRuler.on(el, "beforeinput", EventHandlers.beforeInputEvent); //https://github.com/w3c/input-events - to implement
    }

    EventRuler.on(el, "setvalue", EventHandlers.setValueEvent); //apply mask

    inputmask.undoValue = getBufferTemplate.call(inputmask).join(""); //initialize the buffer and getmasklength

    var activeElement = (el.inputmask.shadowRoot || document).activeElement;

    if (el.inputmask._valueGet(true) !== "" || opts.clearMaskOnLostFocus === false || activeElement === el) {
      applyInputValue(el, el.inputmask._valueGet(true));
      var buffer = getBuffer.call(inputmask).slice();

      if (isComplete.call(inputmask, buffer) === false) {
        if (opts.clearIncomplete) {
          resetMaskSet.call(inputmask);
        }
      }

      if (opts.clearMaskOnLostFocus && activeElement !== el) {
        if (getLastValidPosition.call(inputmask) === -1) {
          buffer = [];
        } else {
          clearOptionalTail.call(inputmask, buffer);
        }
      }

      if (opts.clearMaskOnLostFocus === false || opts.showMaskOnFocus && activeElement === el || el.inputmask._valueGet(true) !== "") {
        writeBuffer(el, buffer);
      }

      if (activeElement === el) {
        //position the caret when in focus
        caret.call(inputmask, el, seekNext.call(inputmask, getLastValidPosition.call(inputmask)));
      }
    }
  }
}

function extend() {
  var options,
      name,
      src,
      copy,
      copyIsArray,
      clone,
      target = arguments[0] || {},
      i = 1,
      length = arguments.length,
      deep = false; // Handle a deep copy situation

  if (typeof target === "boolean") {
    deep = target; // Skip the boolean and the target

    target = arguments[i] || {};
    i++;
  } // Handle case when target is a string or something (possible in deep copy)


  if (_typeof(target) !== "object" && typeof target !== "function") {
    target = {};
  }

  for (; i < length; i++) {
    // Only deal with non-null/undefined values
    if ((options = arguments[i]) != null) {
      // Extend the base object
      for (name in options) {
        src = target[name];
        copy = options[name]; // Prevent never-ending loop

        if (target === copy) {
          continue;
        } // Recurse if we're merging plain objects or arrays


        if (deep && copy && (Object.prototype.toString.call(copy) === "[object Object]" || (copyIsArray = Array.isArray(copy)))) {
          if (copyIsArray) {
            copyIsArray = false;
            clone = src && Array.isArray(src) ? src : [];
          } else {
            clone = src && Object.prototype.toString.call(src) === "[object Object]" ? src : {};
          } // Never move original objects, clone them


          target[name] = extend(deep, clone, copy); // Don't bring in undefined values
        } else if (copy !== undefined) {
          target[name] = copy;
        }
      }
    }
  } // Return the modified object


  return target;
}

var window$1 = typeof window !== "undefined" ? window : new (eval("require('jsdom').JSDOM"))("").window;

function data (owner, key, value) {
  if (value === undefined) {
    return owner.__data ? owner.__data[key] : null;
  } else {
    owner.__data = owner.__data || {};
    owner.__data[key] = value;
  }
}

function isValidElement(elem) {
  return elem instanceof Element;
}

var Event;

if (typeof window$1.CustomEvent === "function") {
  Event = window$1.CustomEvent;
} else {
  Event = function Event(event, params) {
    params = params || {
      bubbles: false,
      cancelable: false,
      detail: undefined
    };
    var evt = document.createEvent("CustomEvent");
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    return evt;
  };

  Event.prototype = window$1.Event.prototype;
}

function on(events, handler) {
  function addEvent(ev, namespace) {
    //register domevent
    if (elem.addEventListener) {
      // all browsers except IE before version 9
      elem.addEventListener(ev, handler, false);
    } else if (elem.attachEvent) {
      // IE before version 9
      elem.attachEvent("on" + ev, handler);
    }

    eventRegistry[ev] = eventRegistry[ev] || {};
    eventRegistry[ev][namespace] = eventRegistry[ev][namespace] || [];
    eventRegistry[ev][namespace].push(handler);
  }

  if (isValidElement(this[0])) {
    var eventRegistry = this[0].eventRegistry,
        elem = this[0];

    var _events = events.split(" ");

    for (var endx = 0; endx < _events.length; endx++) {
      var nsEvent = _events[endx].split("."),
          ev = nsEvent[0],
          namespace = nsEvent[1] || "global";

      addEvent(ev, namespace);
    }
  }

  return this;
}

function off(events, handler) {
  var eventRegistry, elem;

  function removeEvent(ev, namespace, handler) {
    if (ev in eventRegistry === true) {
      //unbind to dom events
      if (elem.removeEventListener) {
        // all browsers except IE before version 9
        elem.removeEventListener(ev, handler, false);
      } else if (elem.detachEvent) {
        // IE before version 9
        elem.detachEvent("on" + ev, handler);
      }

      if (namespace === "global") {
        for (var nmsp in eventRegistry[ev]) {
          eventRegistry[ev][nmsp].splice(eventRegistry[ev][nmsp].indexOf(handler), 1);
        }
      } else {
        eventRegistry[ev][namespace].splice(eventRegistry[ev][namespace].indexOf(handler), 1);
      }
    }
  }

  function resolveNamespace(ev, namespace) {
    var evts = [],
        hndx,
        hndL;

    if (ev.length > 0) {
      if (handler === undefined) {
        for (hndx = 0, hndL = eventRegistry[ev][namespace].length; hndx < hndL; hndx++) {
          evts.push({
            ev: ev,
            namespace: namespace && namespace.length > 0 ? namespace : "global",
            handler: eventRegistry[ev][namespace][hndx]
          });
        }
      } else {
        evts.push({
          ev: ev,
          namespace: namespace && namespace.length > 0 ? namespace : "global",
          handler: handler
        });
      }
    } else if (namespace.length > 0) {
      for (var evNdx in eventRegistry) {
        for (var nmsp in eventRegistry[evNdx]) {
          if (nmsp === namespace) {
            if (handler === undefined) {
              for (hndx = 0, hndL = eventRegistry[evNdx][nmsp].length; hndx < hndL; hndx++) {
                evts.push({
                  ev: evNdx,
                  namespace: nmsp,
                  handler: eventRegistry[evNdx][nmsp][hndx]
                });
              }
            } else {
              evts.push({
                ev: evNdx,
                namespace: nmsp,
                handler: handler
              });
            }
          }
        }
      }
    }

    return evts;
  }

  if (isValidElement(this[0])) {
    eventRegistry = this[0].eventRegistry;
    elem = this[0];

    var _events = events.split(" ");

    for (var endx = 0; endx < _events.length; endx++) {
      var nsEvent = _events[endx].split("."),
          offEvents = resolveNamespace(nsEvent[0], nsEvent[1]);

      for (var i = 0, offEventsL = offEvents.length; i < offEventsL; i++) {
        removeEvent(offEvents[i].ev, offEvents[i].namespace, offEvents[i].handler);
      }
    }
  }

  return this;
}

function trigger(events
/* , args... */
) {
  if (isValidElement(this[0])) {
    var eventRegistry = this[0].eventRegistry,
        elem = this[0];

    var _events = typeof events === "string" ? events.split(" ") : [events.type];

    for (var endx = 0; endx < _events.length; endx++) {
      var nsEvent = _events[endx].split("."),
          ev = nsEvent[0],
          namespace = nsEvent[1] || "global";

      if (document !== undefined && namespace === "global") {
        //trigger domevent
        var evnt,
            i,
            params = {
          bubbles: true,
          cancelable: true,
          detail: arguments[1]
        }; // The custom event that will be created

        if (document.createEvent) {
          try {
            evnt = new CustomEvent(ev, params);
          } catch (e) {
            evnt = document.createEvent("CustomEvent");
            evnt.initCustomEvent(ev, params.bubbles, params.cancelable, params.detail);
          }

          if (events.type) extend(evnt, events);
          elem.dispatchEvent(evnt);
        } else {
          evnt = document.createEventObject();
          evnt.eventType = ev;
          evnt.detail = arguments[1];
          if (events.type) extend(evnt, events);
          elem.fireEvent("on" + evnt.eventType, evnt);
        }
      } else if (eventRegistry[ev] !== undefined) {
        arguments[0] = arguments[0].type ? arguments[0] : DependencyLib.Event(arguments[0]);
        arguments[0].detail = arguments.slice(1);

        if (namespace === "global") {
          for (var nmsp in eventRegistry[ev]) {
            for (i = 0; i < eventRegistry[ev][nmsp].length; i++) {
              eventRegistry[ev][nmsp][i].apply(elem, arguments);
            }
          }
        } else {
          for (i = 0; i < eventRegistry[ev][namespace].length; i++) {
            eventRegistry[ev][namespace][i].apply(elem, arguments);
          }
        }
      }
    }
  }

  return this;
}

/*
 Input Mask plugin dependencyLib
 http://github.com/RobinHerbots/jquery.inputmask
 Copyright (c) Robin Herbots
 Licensed under the MIT license
 */
var document$2 = window$1.document;

function DependencyLib(elem) {
  if (elem instanceof DependencyLib) {
    return elem;
  }

  if (!(this instanceof DependencyLib)) {
    return new DependencyLib(elem);
  }

  if (elem !== undefined && elem !== null && elem !== window$1) {
    this[0] = elem.nodeName ? elem : elem[0] !== undefined && elem[0].nodeName ? elem[0] : document$2.querySelector(elem);

    if (this[0] !== undefined && this[0] !== null) {
      this[0].eventRegistry = this[0].eventRegistry || {};
    }
  }
}

DependencyLib.prototype = {
  on: on,
  off: off,
  trigger: trigger
}; //static

DependencyLib.extend = extend;
DependencyLib.data = data;
DependencyLib.Event = Event;

function generateMaskSet(opts, nocache) {
  var ms;

  function generateMask(mask, metadata, opts) {
    var regexMask = false;

    if (mask === null || mask === "") {
      regexMask = opts.regex !== null;

      if (regexMask) {
        mask = opts.regex;
        mask = mask.replace(/^(\^)(.*)(\$)$/, "$2");
      } else {
        regexMask = true;
        mask = ".*";
      }
    }

    if (mask.length === 1 && opts.greedy === false && opts.repeat !== 0) {
      opts.placeholder = "";
    } //hide placeholder with single non-greedy mask


    if (opts.repeat > 0 || opts.repeat === "*" || opts.repeat === "+") {
      var repeatStart = opts.repeat === "*" ? 0 : opts.repeat === "+" ? 1 : opts.repeat;
      mask = opts.groupmarker[0] + mask + opts.groupmarker[1] + opts.quantifiermarker[0] + repeatStart + "," + opts.repeat + opts.quantifiermarker[1];
    } // console.log(mask);


    var masksetDefinition, maskdefKey;
    maskdefKey = regexMask ? "regex_" + opts.regex : opts.numericInput ? mask.split("").reverse().join("") : mask;

    if (opts.keepStatic !== false) {
      //keepstatic modifies the output from the testdefinitions ~ so differentiate in the maskcache
      maskdefKey = "ks_" + maskdefKey;
    }

    if (Inputmask.prototype.masksCache[maskdefKey] === undefined || nocache === true) {
      masksetDefinition = {
        "mask": mask,
        "maskToken": Inputmask.prototype.analyseMask(mask, regexMask, opts),
        "validPositions": {},
        "_buffer": undefined,
        "buffer": undefined,
        "tests": {},
        "excludes": {},
        //excluded alternations
        "metadata": metadata,
        "maskLength": undefined,
        "jitOffset": {}
      };

      if (nocache !== true) {
        Inputmask.prototype.masksCache[maskdefKey] = masksetDefinition;
        masksetDefinition = DependencyLib.extend(true, {}, Inputmask.prototype.masksCache[maskdefKey]);
      }
    } else {
      masksetDefinition = DependencyLib.extend(true, {}, Inputmask.prototype.masksCache[maskdefKey]);
    }

    return masksetDefinition;
  }

  if (typeof opts.mask === "function") {
    //allow mask to be a preprocessing fn - should return a valid mask
    opts.mask = opts.mask(opts);
  }

  if (Array.isArray(opts.mask)) {
    if (opts.mask.length > 1) {
      if (opts.keepStatic === null) {
        //enable by default when passing multiple masks when the option is not explicitly specified
        opts.keepStatic = true;
      }

      var altMask = opts.groupmarker[0];
      (opts.isRTL ? opts.mask.reverse() : opts.mask).forEach(function (msk) {
        if (altMask.length > 1) {
          altMask += opts.groupmarker[1] + opts.alternatormarker + opts.groupmarker[0];
        }

        if (msk.mask !== undefined && typeof msk.mask !== "function") {
          altMask += msk.mask;
        } else {
          altMask += msk;
        }
      });
      altMask += opts.groupmarker[1]; // console.log(altMask);

      return generateMask(altMask, opts.mask, opts);
    } else {
      opts.mask = opts.mask.pop();
    }
  }

  if (opts.keepStatic === null) opts.keepStatic = false;

  if (opts.mask && opts.mask.mask !== undefined && typeof opts.mask.mask !== "function") {
    ms = generateMask(opts.mask.mask, opts.mask, opts);
  } else {
    ms = generateMask(opts.mask, opts.mask, opts);
  }

  return ms;
}

function analyseMask(mask, regexMask, opts) {
  var tokenizer = /(?:[?*+]|\{[0-9+*]+(?:,[0-9+*]*)?(?:\|[0-9+*]*)?\})|[^.?*+^${[]()|\\]+|./g,
      //Thx to https://github.com/slevithan/regex-colorizer for the regexTokenizer regex
  regexTokenizer = /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g;
  var escaped = false,
      currentToken = new MaskToken(),
      match,
      m,
      openenings = [],
      maskTokens = [],
      openingToken,
      currentOpeningToken,
      alternator,
      lastMatch,
      closeRegexGroup = false;

  function MaskToken(isGroup, isOptional, isQuantifier, isAlternator) {
    this.matches = [];
    this.openGroup = isGroup || false;
    this.alternatorGroup = false;
    this.isGroup = isGroup || false;
    this.isOptional = isOptional || false;
    this.isQuantifier = isQuantifier || false;
    this.isAlternator = isAlternator || false;
    this.quantifier = {
      min: 1,
      max: 1
    };
  } //test definition => {fn: RegExp/function, static: true/false optionality: bool, newBlockMarker: bool, casing: null/upper/lower, def: definitionSymbol, placeholder: placeholder, mask: real maskDefinition}


  function insertTestDefinition(mtoken, element, position) {
    position = position !== undefined ? position : mtoken.matches.length;
    var prevMatch = mtoken.matches[position - 1];

    if (regexMask) {
      if (element.indexOf("[") === 0 || escaped && /\\d|\\s|\\w]/i.test(element) || element === ".") {
        mtoken.matches.splice(position++, 0, {
          fn: new RegExp(element, opts.casing ? "i" : ""),
          static: false,
          optionality: false,
          newBlockMarker: prevMatch === undefined ? "master" : prevMatch.def !== element,
          casing: null,
          def: element,
          placeholder: undefined,
          nativeDef: element
        });
      } else {
        if (escaped) element = element[element.length - 1];
        element.split("").forEach(function (lmnt, ndx) {
          prevMatch = mtoken.matches[position - 1];
          mtoken.matches.splice(position++, 0, {
            fn: /[a-z]/i.test(opts.staticDefinitionSymbol || lmnt) ? new RegExp("[" + (opts.staticDefinitionSymbol || lmnt) + "]", opts.casing ? "i" : "") : null,
            static: true,
            optionality: false,
            newBlockMarker: prevMatch === undefined ? "master" : prevMatch.def !== lmnt && prevMatch.static !== true,
            casing: null,
            def: opts.staticDefinitionSymbol || lmnt,
            placeholder: opts.staticDefinitionSymbol !== undefined ? lmnt : undefined,
            nativeDef: (escaped ? "'" : "") + lmnt
          });
        });
      }

      escaped = false;
    } else {
      var maskdef = opts.definitions && opts.definitions[element] || opts.usePrototypeDefinitions && Inputmask.prototype.definitions[element];

      if (maskdef && !escaped) {
        mtoken.matches.splice(position++, 0, {
          fn: maskdef.validator ? typeof maskdef.validator == "string" ? new RegExp(maskdef.validator, opts.casing ? "i" : "") : new function () {
            this.test = maskdef.validator;
          }() : new RegExp("."),
          static: maskdef.static || false,
          optionality: false,
          newBlockMarker: prevMatch === undefined ? "master" : prevMatch.def !== (maskdef.definitionSymbol || element),
          casing: maskdef.casing,
          def: maskdef.definitionSymbol || element,
          placeholder: maskdef.placeholder,
          nativeDef: element,
          generated: maskdef.generated
        });
      } else {
        mtoken.matches.splice(position++, 0, {
          fn: /[a-z]/i.test(opts.staticDefinitionSymbol || element) ? new RegExp("[" + (opts.staticDefinitionSymbol || element) + "]", opts.casing ? "i" : "") : null,
          static: true,
          optionality: false,
          newBlockMarker: prevMatch === undefined ? "master" : prevMatch.def !== element && prevMatch.static !== true,
          casing: null,
          def: opts.staticDefinitionSymbol || element,
          placeholder: opts.staticDefinitionSymbol !== undefined ? element : undefined,
          nativeDef: (escaped ? "'" : "") + element
        });
        escaped = false;
      }
    }
  }

  function verifyGroupMarker(maskToken) {
    if (maskToken && maskToken.matches) {
      maskToken.matches.forEach(function (token, ndx) {
        var nextToken = maskToken.matches[ndx + 1];

        if ((nextToken === undefined || nextToken.matches === undefined || nextToken.isQuantifier === false) && token && token.isGroup) {
          //this is not a group but a normal mask => convert
          token.isGroup = false;

          if (!regexMask) {
            insertTestDefinition(token, opts.groupmarker[0], 0);

            if (token.openGroup !== true) {
              insertTestDefinition(token, opts.groupmarker[1]);
            }
          }
        }

        verifyGroupMarker(token);
      });
    }
  }

  function defaultCase() {
    if (openenings.length > 0) {
      currentOpeningToken = openenings[openenings.length - 1];
      insertTestDefinition(currentOpeningToken, m);

      if (currentOpeningToken.isAlternator) {
        //handle alternator a | b case
        alternator = openenings.pop();

        for (var mndx = 0; mndx < alternator.matches.length; mndx++) {
          if (alternator.matches[mndx].isGroup) alternator.matches[mndx].isGroup = false; //don't mark alternate groups as group
        }

        if (openenings.length > 0) {
          currentOpeningToken = openenings[openenings.length - 1];
          currentOpeningToken.matches.push(alternator);
        } else {
          currentToken.matches.push(alternator);
        }
      }
    } else {
      insertTestDefinition(currentToken, m);
    }
  }

  function reverseTokens(maskToken) {
    function reverseStatic(st) {
      if (st === opts.optionalmarker[0]) {
        st = opts.optionalmarker[1];
      } else if (st === opts.optionalmarker[1]) {
        st = opts.optionalmarker[0];
      } else if (st === opts.groupmarker[0]) {
        st = opts.groupmarker[1];
      } else if (st === opts.groupmarker[1]) st = opts.groupmarker[0];

      return st;
    }

    maskToken.matches = maskToken.matches.reverse();

    for (var match in maskToken.matches) {
      if (Object.prototype.hasOwnProperty.call(maskToken.matches, match)) {
        var intMatch = parseInt(match);

        if (maskToken.matches[match].isQuantifier && maskToken.matches[intMatch + 1] && maskToken.matches[intMatch + 1].isGroup) {
          //reposition quantifier
          var qt = maskToken.matches[match];
          maskToken.matches.splice(match, 1);
          maskToken.matches.splice(intMatch + 1, 0, qt);
        }

        if (maskToken.matches[match].matches !== undefined) {
          maskToken.matches[match] = reverseTokens(maskToken.matches[match]);
        } else {
          maskToken.matches[match] = reverseStatic(maskToken.matches[match]);
        }
      }
    }

    return maskToken;
  }

  function groupify(matches) {
    var groupToken = new MaskToken(true);
    groupToken.openGroup = false;
    groupToken.matches = matches;
    return groupToken;
  }

  function closeGroup() {
    // Group closing
    openingToken = openenings.pop();
    openingToken.openGroup = false; //mark group as complete

    if (openingToken !== undefined) {
      if (openenings.length > 0) {
        currentOpeningToken = openenings[openenings.length - 1];
        currentOpeningToken.matches.push(openingToken);

        if (currentOpeningToken.isAlternator) {
          //handle alternator (a) | (b) case
          alternator = openenings.pop();

          for (var mndx = 0; mndx < alternator.matches.length; mndx++) {
            alternator.matches[mndx].isGroup = false; //don't mark alternate groups as group

            alternator.matches[mndx].alternatorGroup = false;
          }

          if (openenings.length > 0) {
            currentOpeningToken = openenings[openenings.length - 1];
            currentOpeningToken.matches.push(alternator);
          } else {
            currentToken.matches.push(alternator);
          }
        }
      } else {
        currentToken.matches.push(openingToken);
      }
    } else {
      defaultCase();
    }
  }

  function groupQuantifier(matches) {
    var lastMatch = matches.pop();

    if (lastMatch.isQuantifier) {
      lastMatch = groupify([matches.pop(), lastMatch]);
    }

    return lastMatch;
  }

  if (regexMask) {
    opts.optionalmarker[0] = undefined;
    opts.optionalmarker[1] = undefined;
  }

  while (match = regexMask ? regexTokenizer.exec(mask) : tokenizer.exec(mask)) {
    m = match[0];

    if (regexMask) {
      switch (m.charAt(0)) {
        //Quantifier
        case "?":
          m = "{0,1}";
          break;

        case "+":
        case "*":
          m = "{" + m + "}";
          break;

        case "|":
          //regex mask alternator  ex: [01][0-9]|2[0-3] => ([01][0-9]|2[0-3])
          if (openenings.length === 0) {
            //wrap the mask in a group to form a regex alternator  ([01][0-9]|2[0-3])
            var altRegexGroup = groupify(currentToken.matches);
            altRegexGroup.openGroup = true;
            openenings.push(altRegexGroup);
            currentToken.matches = [];
            closeRegexGroup = true;
          }

          break;
      }
    }

    if (escaped) {
      defaultCase();
      continue;
    }

    switch (m.charAt(0)) {
      case "$":
      case "^":
        //ignore beginswith and endswith as in masking this makes no point
        if (!regexMask) {
          defaultCase();
        }

        break;

      case "(?=":
        //lookahead
        break;

      case "(?!":
        //negative lookahead
        break;

      case "(?<=":
        //lookbehind
        break;

      case "(?<!":
        //negative lookbehind
        break;

      case opts.escapeChar:
        escaped = true;

        if (regexMask) {
          defaultCase();
        }

        break;
      // optional closing

      case opts.optionalmarker[1]:
      case opts.groupmarker[1]:
        closeGroup();
        break;

      case opts.optionalmarker[0]:
        // optional opening
        openenings.push(new MaskToken(false, true));
        break;

      case opts.groupmarker[0]:
        // Group opening
        openenings.push(new MaskToken(true));
        break;

      case opts.quantifiermarker[0]:
        //Quantifier
        var quantifier = new MaskToken(false, false, true);
        m = m.replace(/[{}]/g, "");
        var mqj = m.split("|"),
            mq = mqj[0].split(","),
            mq0 = isNaN(mq[0]) ? mq[0] : parseInt(mq[0]),
            mq1 = mq.length === 1 ? mq0 : isNaN(mq[1]) ? mq[1] : parseInt(mq[1]);

        if (mq0 === "*" || mq0 === "+") {
          mq0 = mq1 === "*" ? 0 : 1;
        }

        quantifier.quantifier = {
          min: mq0,
          max: mq1,
          jit: mqj[1]
        };
        var matches = openenings.length > 0 ? openenings[openenings.length - 1].matches : currentToken.matches;
        match = matches.pop();

        if (match.isAlternator) {
          //handle quantifier in an alternation [0-9]{2}|[0-9]{3}
          matches.push(match); //push back alternator

          matches = match.matches; //remap target matches

          var groupToken = new MaskToken(true);
          var tmpMatch = matches.pop();
          matches.push(groupToken); //push the group

          matches = groupToken.matches;
          match = tmpMatch;
        }

        if (!match.isGroup) {
          // if (regexMask && match.fn === null) { //why is this needed???
          //     if (match.def === ".") match.fn = new RegExp(match.def, opts.casing ? "i" : "");
          // }
          match = groupify([match]);
        }

        matches.push(match);
        matches.push(quantifier);
        break;

      case opts.alternatormarker:
        if (openenings.length > 0) {
          currentOpeningToken = openenings[openenings.length - 1];
          var subToken = currentOpeningToken.matches[currentOpeningToken.matches.length - 1];

          if (currentOpeningToken.openGroup && ( //regexp alt syntax
          subToken.matches === undefined || subToken.isGroup === false && subToken.isAlternator === false)) {
            //alternations within group
            lastMatch = openenings.pop();
          } else {
            lastMatch = groupQuantifier(currentOpeningToken.matches);
          }
        } else {
          lastMatch = groupQuantifier(currentToken.matches);
        }

        if (lastMatch.isAlternator) {
          openenings.push(lastMatch);
        } else {
          if (lastMatch.alternatorGroup) {
            alternator = openenings.pop();
            lastMatch.alternatorGroup = false;
          } else {
            alternator = new MaskToken(false, false, false, true);
          }

          alternator.matches.push(lastMatch);
          openenings.push(alternator);

          if (lastMatch.openGroup) {
            //regexp alt syntax
            lastMatch.openGroup = false;
            var alternatorGroup = new MaskToken(true);
            alternatorGroup.alternatorGroup = true;
            openenings.push(alternatorGroup);
          }
        }

        break;

      default:
        defaultCase();
    }
  }

  if (closeRegexGroup) closeGroup();

  while (openenings.length > 0) {
    openingToken = openenings.pop();
    currentToken.matches.push(openingToken);
  }

  if (currentToken.matches.length > 0) {
    verifyGroupMarker(currentToken);
    maskTokens.push(currentToken);
  }

  if (opts.numericInput || opts.isRTL) {
    reverseTokens(maskTokens[0]);
  } // console.log(JSON.stringify(maskTokens));


  return maskTokens;
}

var definitions = {
  "9": {
    //\uFF11-\uFF19 #1606
    validator: "[0-9\uFF10-\uFF19]",
    definitionSymbol: "*"
  },
  "a": {
    //\u0410-\u044F\u0401\u0451\u00C0-\u00FF\u00B5 #76
    validator: "[A-Za-z\u0410-\u044F\u0401\u0451\xC0-\xFF\xB5]",
    definitionSymbol: "*"
  },
  "*": {
    validator: "[0-9\uFF10-\uFF19A-Za-z\u0410-\u044F\u0401\u0451\xC0-\xFF\xB5]"
  }
};

var defaults = {
  _maxTestPos: 500,
  placeholder: "_",
  optionalmarker: ["[", "]"],
  quantifiermarker: ["{", "}"],
  groupmarker: ["(", ")"],
  alternatormarker: "|",
  escapeChar: "\\",
  mask: null,
  //needs tobe null instead of undefined as the extend method does not consider props with the undefined value
  regex: null,
  //regular expression as a mask
  oncomplete: function oncomplete() {},
  //executes when the mask is complete
  onincomplete: function onincomplete() {},
  //executes when the mask is incomplete and focus is lost
  oncleared: function oncleared() {},
  //executes when the mask is cleared
  repeat: 0,
  //repetitions of the mask: * ~ forever, otherwise specify an integer
  greedy: false,
  //true: allocated buffer for the mask and repetitions - false: allocate only if needed
  autoUnmask: false,
  //automatically unmask when retrieving the value with $.fn.val or value if the browser supports __lookupGetter__ or getOwnPropertyDescriptor
  removeMaskOnSubmit: false,
  //remove the mask before submitting the form.
  clearMaskOnLostFocus: true,
  insertMode: true,
  //insert the input or overwrite the input
  insertModeVisual: true,
  //show selected caret when insertmode = false
  clearIncomplete: false,
  //clear the incomplete input on blur
  alias: null,
  onKeyDown: function onKeyDown() {},
  //callback to implement autocomplete on certain keys for example. args => event, buffer, caretPos, opts
  onBeforeMask: null,
  //executes before masking the initial value to allow preprocessing of the initial value.	args => initialValue, opts => return processedValue
  onBeforePaste: function onBeforePaste(pastedValue, opts) {
    return typeof opts.onBeforeMask === "function" ? opts.onBeforeMask.call(this, pastedValue, opts) : pastedValue;
  },
  //executes before masking the pasted value to allow preprocessing of the pasted value.	args => pastedValue, opts => return processedValue
  onBeforeWrite: null,
  //executes before writing to the masked element. args => event, opts
  onUnMask: null,
  //executes after unmasking to allow postprocessing of the unmaskedvalue.	args => maskedValue, unmaskedValue, opts
  showMaskOnFocus: true,
  //show the mask-placeholder when the input has focus
  showMaskOnHover: true,
  //show the mask-placeholder when hovering the empty input
  onKeyValidation: function onKeyValidation() {},
  //executes on every key-press with the result of isValid. Params: key, result, opts
  skipOptionalPartCharacter: " ",
  //a character which can be used to skip an optional part of a mask
  numericInput: false,
  //numericInput input direction style (input shifts to the left while holding the caret position)
  rightAlign: false,
  //align to the right
  undoOnEscape: true,
  //pressing escape reverts the value to the value before focus
  //numeric basic properties
  radixPoint: "",
  //".", // | ","
  _radixDance: false,
  //dance around the radixPoint
  groupSeparator: "",
  //",", // | "."
  //numeric basic properties
  keepStatic: null,
  //try to keep the mask static while typing. Decisions to alter the mask will be posponed if possible
  positionCaretOnTab: true,
  //when enabled the caret position is set after the latest valid position on TAB
  tabThrough: false,
  //allows for tabbing through the different parts of the masked field
  supportsInputType: ["text", "tel", "url", "password", "search"],
  //list with the supported input types
  //specify keyCodes which should not be considered in the keypress event, otherwise the preventDefault will stop their default behavior especially in FF
  ignorables: [8, 9, 19, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 0, 229],
  isComplete: null,
  //override for isComplete - args => buffer, opts - return true || false
  preValidation: null,
  //hook to preValidate the input.  Usefull for validating regardless the definition.	args => buffer, pos, char, isSelection, opts, maskset, caretPos, strict => return true/false/command object
  postValidation: null,
  //hook to postValidate the result from isValid.	Usefull for validating the entry as a whole.	args => buffer, pos, c, currentResult, opts, maskset, strict, fromCheckval => return true/false/json
  staticDefinitionSymbol: undefined,
  //specify a definitionSymbol for static content, used to make matches for alternators
  jitMasking: false,
  //just in time masking ~ only mask while typing, can n (number), true or false
  nullable: true,
  //return nothing instead of the buffertemplate when the user hasn't entered anything.
  inputEventOnly: false,
  //dev option - testing inputfallback behavior
  noValuePatching: false,
  //disable value property patching
  positionCaretOnClick: "lvp",
  //none, lvp (based on the last valid position (default), radixFocus (position caret to radixpoint on initial click), select (select the whole input), ignore (ignore the click and continue the mask)
  casing: null,
  //mask-level casing. Options: null, "upper", "lower" or "title" or callback args => elem, test, pos, validPositions return charValue
  inputmode: "text",
  //specify the inputmode
  importDataAttributes: true,
  //import data-inputmask attributes
  shiftPositions: true,
  //shift position of the mask entries on entry and deletion.
  usePrototypeDefinitions: true //use the default defined definitions from the prototype

};

var document$1 = window$1.document,
    dataKey = "_inputmask_opts";

function Inputmask$1(alias, options, internal) {
  //allow instanciating without new
  if (!(this instanceof Inputmask$1)) {
    return new Inputmask$1(alias, options, internal);
  }

  this.dependencyLib = DependencyLib;
  this.el = undefined;
  this.events = {};
  this.maskset = undefined;

  if (internal !== true) {
    //init options
    if (Object.prototype.toString.call(alias) === "[object Object]") {
      options = alias;
    } else {
      options = options || {};
      if (alias) options.alias = alias;
    }

    this.opts = DependencyLib.extend(true, {}, this.defaults, options);
    this.noMasksCache = options && options.definitions !== undefined;
    this.userOptions = options || {}; //user passed options

    resolveAlias(this.opts.alias, options, this.opts);
  } //maskscope properties


  this.refreshValue = false; //indicate a refresh from the inputvalue is needed (form.reset)

  this.undoValue = undefined;
  this.$el = undefined;
  this.skipKeyPressEvent = false; //Safari 5.1.x - modal dialog fires keypress twice workaround

  this.skipInputEvent = false; //skip when triggered from within inputmask

  this.validationEvent = false;
  this.ignorable = false;
  this.maxLength;
  this.mouseEnter = false;
  this.originalPlaceholder = undefined; //needed for FF

  this.isComposing = false; //keydowncode == 229  compositionevent fallback
}

Inputmask$1.prototype = {
  dataAttribute: "data-inputmask",
  //data attribute prefix used for attribute binding
  //options default
  defaults: defaults,
  definitions: definitions,
  aliases: {},
  //aliases definitions
  masksCache: {},

  get isRTL() {
    return this.opts.isRTL || this.opts.numericInput;
  },

  mask: function mask$1(elems) {
    var that = this;

    if (typeof elems === "string") {
      elems = document$1.getElementById(elems) || document$1.querySelectorAll(elems);
    }

    elems = elems.nodeName ? [elems] : elems;
    elems.forEach(function (el, ndx) {
      var scopedOpts = DependencyLib.extend(true, {}, that.opts);

      if (importAttributeOptions(el, scopedOpts, DependencyLib.extend(true, {}, that.userOptions), that.dataAttribute)) {
        var maskset = generateMaskSet(scopedOpts, that.noMasksCache);

        if (maskset !== undefined) {
          if (el.inputmask !== undefined) {
            el.inputmask.opts.autoUnmask = true; //force autounmasking when remasking

            el.inputmask.remove();
          } //store inputmask instance on the input with element reference


          el.inputmask = new Inputmask$1(undefined, undefined, true);
          el.inputmask.opts = scopedOpts;
          el.inputmask.noMasksCache = that.noMasksCache;
          el.inputmask.userOptions = DependencyLib.extend(true, {}, that.userOptions); // el.inputmask.isRTL = scopedOpts.isRTL || scopedOpts.numericInput;

          el.inputmask.el = el;
          el.inputmask.$el = DependencyLib(el);
          el.inputmask.maskset = maskset;
          DependencyLib.data(el, dataKey, that.userOptions);

          mask.call(el.inputmask);
        }
      }
    });
    return elems && elems[0] ? elems[0].inputmask || this : this;
  },
  option: function option(options, noremask) {
    //set extra options || retrieve value of a current option
    if (typeof options === "string") {
      return this.opts[options];
    } else if (_typeof(options) === "object") {
      DependencyLib.extend(this.userOptions, options); //user passed options
      //remask

      if (this.el && noremask !== true) {
        this.mask(this.el);
      }

      return this;
    }
  },
  unmaskedvalue: function unmaskedvalue$1(value) {
    this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache);

    if (this.el === undefined || value !== undefined) {
      var valueBuffer = (typeof this.opts.onBeforeMask === "function" ? this.opts.onBeforeMask.call(this, value, this.opts) || value : value).split("");
      checkVal.call(this, undefined, false, false, valueBuffer);
      if (typeof this.opts.onBeforeWrite === "function") this.opts.onBeforeWrite.call(this, undefined, getBuffer.call(this), 0, this.opts);
    }

    return unmaskedvalue.call(this, this.el);
  },
  remove: function remove() {
    if (this.el) {
      DependencyLib.data(this.el, dataKey, null); //invalidate
      //writeout the value

      var cv = this.opts.autoUnmask ? unmaskedvalue(this.el) : this._valueGet(this.opts.autoUnmask);
      if (cv !== getBufferTemplate.call(this).join("")) this._valueSet(cv, this.opts.autoUnmask);else this._valueSet(""); //unbind all events

      EventRuler.off(this.el); //restore the value property

      var valueProperty;

      if (Object.getOwnPropertyDescriptor && Object.getPrototypeOf) {
        valueProperty = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this.el), "value");

        if (valueProperty) {
          if (this.__valueGet) {
            Object.defineProperty(this.el, "value", {
              get: this.__valueGet,
              set: this.__valueSet,
              configurable: true
            });
          }
        }
      } else if (document$1.__lookupGetter__ && this.el.__lookupGetter__("value")) {
        if (this.__valueGet) {
          this.el.__defineGetter__("value", this.__valueGet);

          this.el.__defineSetter__("value", this.__valueSet);
        }
      } //clear data


      this.el.inputmask = undefined;
    }

    return this.el;
  },
  getemptymask: function getemptymask() {
    //return the default (empty) mask value, usefull for setting the default value in validation
    this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache);
    return getBufferTemplate.call(this).join("");
  },
  hasMaskedValue: function hasMaskedValue() {
    //check wheter the returned value is masked or not; currently only works reliable when using jquery.val fn to retrieve the value
    return !this.opts.autoUnmask;
  },
  isComplete: function isComplete$1() {
    this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache);
    return isComplete.call(this, getBuffer.call(this));
  },
  getmetadata: function getmetadata() {
    //return mask metadata if exists
    this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache);

    if (Array.isArray(this.maskset.metadata)) {
      var maskTarget = getMaskTemplate.call(this, true, 0, false).join("");
      this.maskset.metadata.forEach(function (mtdt) {
        if (mtdt.mask === maskTarget) {
          maskTarget = mtdt;
          return false;
        }

        return true;
      });
      return maskTarget;
    }

    return this.maskset.metadata;
  },
  isValid: function isValid(value) {
    this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache);

    if (value) {
      var valueBuffer = (typeof this.opts.onBeforeMask === "function" ? this.opts.onBeforeMask.call(this, value, this.opts) || value : value).split("");
      checkVal.call(this, undefined, true, false, valueBuffer);
    } else {
      value = this.isRTL ? getBuffer.call(this).slice().reverse().join("") : getBuffer.call(this).join("");
    }

    var buffer = getBuffer.call(this);
    var rl = determineLastRequiredPosition.call(this),
        lmib = buffer.length - 1;

    for (; lmib > rl; lmib--) {
      if (isMask.call(this, lmib)) break;
    }

    buffer.splice(rl, lmib + 1 - rl);
    return isComplete.call(this, buffer) && value === (this.isRTL ? getBuffer.call(this).slice().reverse().join("") : getBuffer.call(this).join(""));
  },
  format: function format(value, metadata) {
    this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache);
    var valueBuffer = (typeof this.opts.onBeforeMask === "function" ? this.opts.onBeforeMask.call(this, value, this.opts) || value : value).split("");
    checkVal.call(this, undefined, true, false, valueBuffer);
    var formattedValue = this.isRTL ? getBuffer.call(this).slice().reverse().join("") : getBuffer.call(this).join("");
    return metadata ? {
      value: formattedValue,
      metadata: this.getmetadata()
    } : formattedValue;
  },
  setValue: function setValue(value) {
    if (this.el) {
      DependencyLib(this.el).trigger("setvalue", [value]);
    }
  },
  analyseMask: analyseMask
};

function resolveAlias(aliasStr, options, opts) {
  var aliasDefinition = Inputmask$1.prototype.aliases[aliasStr];

  if (aliasDefinition) {
    if (aliasDefinition.alias) resolveAlias(aliasDefinition.alias, undefined, opts); //alias is another alias

    DependencyLib.extend(true, opts, aliasDefinition); //merge alias definition in the options

    DependencyLib.extend(true, opts, options); //reapply extra given options

    return true;
  } else //alias not found - try as mask
    if (opts.mask === null) {
      opts.mask = aliasStr;
    }

  return false;
}

function importAttributeOptions(npt, opts, userOptions, dataAttribute) {
  function importOption(option, optionData) {
    var attrOption = dataAttribute === "" ? option : dataAttribute + "-" + option;
    optionData = optionData !== undefined ? optionData : npt.getAttribute(attrOption);

    if (optionData !== null) {
      if (typeof optionData === "string") {
        if (option.indexOf("on") === 0) {
          optionData = window$1[optionData];
        } //get function definition
        else if (optionData === "false") {
            optionData = false;
          } else if (optionData === "true") optionData = true;
      }

      userOptions[option] = optionData;
    }
  }

  if (opts.importDataAttributes === true) {
    var attrOptions = npt.getAttribute(dataAttribute),
        option,
        dataoptions,
        optionData,
        p;

    if (attrOptions && attrOptions !== "") {
      attrOptions = attrOptions.replace(/'/g, "\"");
      dataoptions = JSON.parse("{" + attrOptions + "}");
    } //resolve aliases


    if (dataoptions) {
      //pickup alias from dataAttribute
      optionData = undefined;

      for (p in dataoptions) {
        if (p.toLowerCase() === "alias") {
          optionData = dataoptions[p];
          break;
        }
      }
    }

    importOption("alias", optionData); //pickup alias from dataAttribute-alias

    if (userOptions.alias) {
      resolveAlias(userOptions.alias, userOptions, opts);
    }

    for (option in opts) {
      if (dataoptions) {
        optionData = undefined;

        for (p in dataoptions) {
          if (p.toLowerCase() === option.toLowerCase()) {
            optionData = dataoptions[p];
            break;
          }
        }
      }

      importOption(option, optionData);
    }
  }

  DependencyLib.extend(true, opts, userOptions); //handle dir=rtl

  if (npt.dir === "rtl" || opts.rightAlign) {
    npt.style.textAlign = "right";
  }

  if (npt.dir === "rtl" || opts.numericInput) {
    npt.dir = "ltr";
    npt.removeAttribute("dir");
    opts.isRTL = true;
  }

  return Object.keys(userOptions).length;
} //apply defaults, definitions, aliases


Inputmask$1.extendDefaults = function (options) {
  DependencyLib.extend(true, Inputmask$1.prototype.defaults, options);
};

Inputmask$1.extendDefinitions = function (definition) {
  DependencyLib.extend(true, Inputmask$1.prototype.definitions, definition);
};

Inputmask$1.extendAliases = function (alias) {
  DependencyLib.extend(true, Inputmask$1.prototype.aliases, alias);
}; //static fn on inputmask


Inputmask$1.format = function (value, options, metadata) {
  return Inputmask$1(options).format(value, metadata);
};

Inputmask$1.unmask = function (value, options) {
  return Inputmask$1(options).unmaskedvalue(value);
};

Inputmask$1.isValid = function (value, options) {
  return Inputmask$1(options).isValid(value);
};

Inputmask$1.remove = function (elems) {
  if (typeof elems === "string") {
    elems = document$1.getElementById(elems) || document$1.querySelectorAll(elems);
  }

  elems = elems.nodeName ? [elems] : elems;
  elems.forEach(function (el) {
    if (el.inputmask) el.inputmask.remove();
  });
};

Inputmask$1.setValue = function (elems, value) {
  if (typeof elems === "string") {
    elems = document$1.getElementById(elems) || document$1.querySelectorAll(elems);
  }

  elems = elems.nodeName ? [elems] : elems;
  elems.forEach(function (el) {
    if (el.inputmask) el.inputmask.setValue(value);else DependencyLib(el).trigger("setvalue", [value]);
  });
};

Inputmask$1.dependencyLib = DependencyLib; //make inputmask available

window$1.Inputmask = Inputmask$1;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var KbfForm = /*#__PURE__*/function () {
  function KbfForm(formConfig, lang) {
    _classCallCheck(this, KbfForm);

    var $ = window.$;
    this.formConfig = formConfig;
    this.formName = this.formConfig.formName;
    this.formElement = document.forms[this.formName];
    this.lang = lang || 'pl'; // Sprawdz czy formularz o podanej nazwie istnieje

    if (!this.formElement) throw errors.formNotFound(this.formName);
    this.$formElement = $(this.formElement); // this.$submitButton = this.$formElement.find('button[type="submit"]');
    // Error message

    this.$errorMessageElement = $('.kbf-error-message'); // Sprawdz czy walidator istnieje

    if (!$.fn.validate) throw errors.noValidator(); // Konfiguracja walidatora

    this.validatorConfig = formConfig.validator; // Domyslna konfiguracja walidatora

    this.defaultValidatorConfig = {
      ignore: [],
      // Umiejscowienie komunikatu o bledzie
      errorPlacement: function errorPlacement($label, $element) {
        $label.addClass('kbf-error-message');
        var $column = $element.closest('[class*="col"]');

        if ($column.length > 0) {
          $column.append($label);
        } else $label.insertAfter($element);
      }
    };
    this.init();
    this.addListeners();
  }

  _createClass(KbfForm, [{
    key: "init",
    value: function init() {
      // Ustaw maski
      Array.from(this.formElement.elements).forEach(function (formElement) {
        new Inputmask$1().mask(formElement);
      });
    }
  }, {
    key: "addListeners",
    value: function addListeners() {
      // this.$formElement.on('submit', function (e) {
      //     e.stopPropagation();
      //     e.preventDefault();
      // });
      //
      // // Waliduj formularz
      // this.$submitButton.on('click', function (e) {
      //     e.stopPropagation();
      //     instance.$formElement.validate({ ...instance.defaultValidatorConfig, ...instance.validatorConfig });
      //     instance.handleErrorMessage.call(instance);
      // });
    }
  }, {
    key: "validate",
    value: function validate() {
      this.$formElement.validate(_objectSpread(_objectSpread({}, this.defaultValidatorConfig), this.validatorConfig));
      this.handleErrorMessage();
    } // Ustawia error message jezeli istnieje

  }, {
    key: "handleErrorMessage",
    value: function handleErrorMessage() {
      this.formIsValid = this.$formElement.valid(); // Wyswietl komunikat o bledzie jeżeli pole komunikatu istnieje

      if (this.$errorMessageElement.length > 0) {
        if (this.formIsValid && !this.$errorMessageElement.hasClass('d-none')) this.$errorMessageElement.addClass('d-none');
        if (!this.formIsValid && this.$errorMessageElement.hasClass('d-none')) this.$errorMessageElement.removeClass('d-none');
      }
    }
  }]);

  return KbfForm;
}();

var KbfTabs = /*#__PURE__*/function () {
  function KbfTabs(formName) {
    _classCallCheck(this, KbfTabs);

    this.formIsValid = true;
    if (formName) this.formName = formName;
    this.init();
    this.addListeners();
  }

  _createClass(KbfTabs, [{
    key: "init",
    value: function init() {
      var $ = window.$;
      var instance = this; // Inicjuj kontroler formularza jezeli podano nazwe

      if (this.formName) {
        this.$tabToggles = $('[data-toggle="tab"]'); // Taby

        this.formController = new KbfForm({
          formName: instance.formName
        });
      }
    }
  }, {
    key: "addListeners",
    value: function addListeners() {
      var instance = this; // Zablokuj przelaczanie tabow jezeli sa bledy w formularzu

      if (this.formName) {
        this.$tabToggles.on('click', function (e) {
          instance.validateForm();
          if (!instance.formIsValid) e.stopPropagation();
        });
      }
    }
  }, {
    key: "validateForm",
    value: function validateForm() {
      this.formController.validate();
      this.formIsValid = this.formController.formIsValid;
    }
  }]);

  return KbfTabs;
}();

/*!
 * perfect-scrollbar v1.5.0
 * Copyright 2020 Hyunje Jun, MDBootstrap and Contributors
 * Licensed under MIT
 */
function get(element) {
  return getComputedStyle(element);
}

function set(element, obj) {
  for (var key in obj) {
    var val = obj[key];

    if (typeof val === 'number') {
      val = val + "px";
    }

    element.style[key] = val;
  }

  return element;
}

function div(className) {
  var div = document.createElement('div');
  div.className = className;
  return div;
}

var elMatches = typeof Element !== 'undefined' && (Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector);

function matches(element, query) {
  if (!elMatches) {
    throw new Error('No element matching method supported');
  }

  return elMatches.call(element, query);
}

function remove(element) {
  if (element.remove) {
    element.remove();
  } else {
    if (element.parentNode) {
      element.parentNode.removeChild(element);
    }
  }
}

function queryChildren(element, selector) {
  return Array.prototype.filter.call(element.children, function (child) {
    return matches(child, selector);
  });
}

var cls = {
  main: 'ps',
  rtl: 'ps__rtl',
  element: {
    thumb: function thumb(x) {
      return "ps__thumb-" + x;
    },
    rail: function rail(x) {
      return "ps__rail-" + x;
    },
    consuming: 'ps__child--consume'
  },
  state: {
    focus: 'ps--focus',
    clicking: 'ps--clicking',
    active: function active(x) {
      return "ps--active-" + x;
    },
    scrolling: function scrolling(x) {
      return "ps--scrolling-" + x;
    }
  }
};
/*
 * Helper methods
 */

var scrollingClassTimeout = {
  x: null,
  y: null
};

function addScrollingClass(i, x) {
  var classList = i.element.classList;
  var className = cls.state.scrolling(x);

  if (classList.contains(className)) {
    clearTimeout(scrollingClassTimeout[x]);
  } else {
    classList.add(className);
  }
}

function removeScrollingClass(i, x) {
  scrollingClassTimeout[x] = setTimeout(function () {
    return i.isAlive && i.element.classList.remove(cls.state.scrolling(x));
  }, i.settings.scrollingThreshold);
}

function setScrollingClassInstantly(i, x) {
  addScrollingClass(i, x);
  removeScrollingClass(i, x);
}

var EventElement = function EventElement(element) {
  this.element = element;
  this.handlers = {};
};

var prototypeAccessors = {
  isEmpty: {
    configurable: true
  }
};

EventElement.prototype.bind = function bind(eventName, handler) {
  if (typeof this.handlers[eventName] === 'undefined') {
    this.handlers[eventName] = [];
  }

  this.handlers[eventName].push(handler);
  this.element.addEventListener(eventName, handler, false);
};

EventElement.prototype.unbind = function unbind(eventName, target) {
  var this$1 = this;
  this.handlers[eventName] = this.handlers[eventName].filter(function (handler) {
    if (target && handler !== target) {
      return true;
    }

    this$1.element.removeEventListener(eventName, handler, false);
    return false;
  });
};

EventElement.prototype.unbindAll = function unbindAll() {
  for (var name in this.handlers) {
    this.unbind(name);
  }
};

prototypeAccessors.isEmpty.get = function () {
  var this$1 = this;
  return Object.keys(this.handlers).every(function (key) {
    return this$1.handlers[key].length === 0;
  });
};

Object.defineProperties(EventElement.prototype, prototypeAccessors);

var EventManager = function EventManager() {
  this.eventElements = [];
};

EventManager.prototype.eventElement = function eventElement(element) {
  var ee = this.eventElements.filter(function (ee) {
    return ee.element === element;
  })[0];

  if (!ee) {
    ee = new EventElement(element);
    this.eventElements.push(ee);
  }

  return ee;
};

EventManager.prototype.bind = function bind(element, eventName, handler) {
  this.eventElement(element).bind(eventName, handler);
};

EventManager.prototype.unbind = function unbind(element, eventName, handler) {
  var ee = this.eventElement(element);
  ee.unbind(eventName, handler);

  if (ee.isEmpty) {
    // remove
    this.eventElements.splice(this.eventElements.indexOf(ee), 1);
  }
};

EventManager.prototype.unbindAll = function unbindAll() {
  this.eventElements.forEach(function (e) {
    return e.unbindAll();
  });
  this.eventElements = [];
};

EventManager.prototype.once = function once(element, eventName, handler) {
  var ee = this.eventElement(element);

  var onceHandler = function onceHandler(evt) {
    ee.unbind(eventName, onceHandler);
    handler(evt);
  };

  ee.bind(eventName, onceHandler);
};

function createEvent(name) {
  if (typeof window.CustomEvent === 'function') {
    return new CustomEvent(name);
  } else {
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(name, false, false, undefined);
    return evt;
  }
}

function processScrollDiff(i, axis, diff, useScrollingClass, forceFireReachEvent) {
  if (useScrollingClass === void 0) useScrollingClass = true;
  if (forceFireReachEvent === void 0) forceFireReachEvent = false;
  var fields;

  if (axis === 'top') {
    fields = ['contentHeight', 'containerHeight', 'scrollTop', 'y', 'up', 'down'];
  } else if (axis === 'left') {
    fields = ['contentWidth', 'containerWidth', 'scrollLeft', 'x', 'left', 'right'];
  } else {
    throw new Error('A proper axis should be provided');
  }

  processScrollDiff$1(i, diff, fields, useScrollingClass, forceFireReachEvent);
}

function processScrollDiff$1(i, diff, ref, useScrollingClass, forceFireReachEvent) {
  var contentHeight = ref[0];
  var containerHeight = ref[1];
  var scrollTop = ref[2];
  var y = ref[3];
  var up = ref[4];
  var down = ref[5];
  if (useScrollingClass === void 0) useScrollingClass = true;
  if (forceFireReachEvent === void 0) forceFireReachEvent = false;
  var element = i.element; // reset reach

  i.reach[y] = null; // 1 for subpixel rounding

  if (element[scrollTop] < 1) {
    i.reach[y] = 'start';
  } // 1 for subpixel rounding


  if (element[scrollTop] > i[contentHeight] - i[containerHeight] - 1) {
    i.reach[y] = 'end';
  }

  if (diff) {
    element.dispatchEvent(createEvent("ps-scroll-" + y));

    if (diff < 0) {
      element.dispatchEvent(createEvent("ps-scroll-" + up));
    } else if (diff > 0) {
      element.dispatchEvent(createEvent("ps-scroll-" + down));
    }

    if (useScrollingClass) {
      setScrollingClassInstantly(i, y);
    }
  }

  if (i.reach[y] && (diff || forceFireReachEvent)) {
    element.dispatchEvent(createEvent("ps-" + y + "-reach-" + i.reach[y]));
  }
}

function toInt(x) {
  return parseInt(x, 10) || 0;
}

function isEditable(el) {
  return matches(el, 'input,[contenteditable]') || matches(el, 'select,[contenteditable]') || matches(el, 'textarea,[contenteditable]') || matches(el, 'button,[contenteditable]');
}

function outerWidth(element) {
  var styles = get(element);
  return toInt(styles.width) + toInt(styles.paddingLeft) + toInt(styles.paddingRight) + toInt(styles.borderLeftWidth) + toInt(styles.borderRightWidth);
}

var env = {
  isWebKit: typeof document !== 'undefined' && 'WebkitAppearance' in document.documentElement.style,
  supportsTouch: typeof window !== 'undefined' && ('ontouchstart' in window || 'maxTouchPoints' in window.navigator && window.navigator.maxTouchPoints > 0 || window.DocumentTouch && document instanceof window.DocumentTouch),
  supportsIePointer: typeof navigator !== 'undefined' && navigator.msMaxTouchPoints,
  isChrome: typeof navigator !== 'undefined' && /Chrome/i.test(navigator && navigator.userAgent)
};

function updateGeometry(i) {
  var element = i.element;
  var roundedScrollTop = Math.floor(element.scrollTop);
  var rect = element.getBoundingClientRect();
  i.containerWidth = Math.ceil(rect.width);
  i.containerHeight = Math.ceil(rect.height);
  i.contentWidth = element.scrollWidth;
  i.contentHeight = element.scrollHeight;

  if (!element.contains(i.scrollbarXRail)) {
    // clean up and append
    queryChildren(element, cls.element.rail('x')).forEach(function (el) {
      return remove(el);
    });
    element.appendChild(i.scrollbarXRail);
  }

  if (!element.contains(i.scrollbarYRail)) {
    // clean up and append
    queryChildren(element, cls.element.rail('y')).forEach(function (el) {
      return remove(el);
    });
    element.appendChild(i.scrollbarYRail);
  }

  if (!i.settings.suppressScrollX && i.containerWidth + i.settings.scrollXMarginOffset < i.contentWidth) {
    i.scrollbarXActive = true;
    i.railXWidth = i.containerWidth - i.railXMarginWidth;
    i.railXRatio = i.containerWidth / i.railXWidth;
    i.scrollbarXWidth = getThumbSize(i, toInt(i.railXWidth * i.containerWidth / i.contentWidth));
    i.scrollbarXLeft = toInt((i.negativeScrollAdjustment + element.scrollLeft) * (i.railXWidth - i.scrollbarXWidth) / (i.contentWidth - i.containerWidth));
  } else {
    i.scrollbarXActive = false;
  }

  if (!i.settings.suppressScrollY && i.containerHeight + i.settings.scrollYMarginOffset < i.contentHeight) {
    i.scrollbarYActive = true;
    i.railYHeight = i.containerHeight - i.railYMarginHeight;
    i.railYRatio = i.containerHeight / i.railYHeight;
    i.scrollbarYHeight = getThumbSize(i, toInt(i.railYHeight * i.containerHeight / i.contentHeight));
    i.scrollbarYTop = toInt(roundedScrollTop * (i.railYHeight - i.scrollbarYHeight) / (i.contentHeight - i.containerHeight));
  } else {
    i.scrollbarYActive = false;
  }

  if (i.scrollbarXLeft >= i.railXWidth - i.scrollbarXWidth) {
    i.scrollbarXLeft = i.railXWidth - i.scrollbarXWidth;
  }

  if (i.scrollbarYTop >= i.railYHeight - i.scrollbarYHeight) {
    i.scrollbarYTop = i.railYHeight - i.scrollbarYHeight;
  }

  updateCss(element, i);

  if (i.scrollbarXActive) {
    element.classList.add(cls.state.active('x'));
  } else {
    element.classList.remove(cls.state.active('x'));
    i.scrollbarXWidth = 0;
    i.scrollbarXLeft = 0;
    element.scrollLeft = i.isRtl === true ? i.contentWidth : 0;
  }

  if (i.scrollbarYActive) {
    element.classList.add(cls.state.active('y'));
  } else {
    element.classList.remove(cls.state.active('y'));
    i.scrollbarYHeight = 0;
    i.scrollbarYTop = 0;
    element.scrollTop = 0;
  }
}

function getThumbSize(i, thumbSize) {
  if (i.settings.minScrollbarLength) {
    thumbSize = Math.max(thumbSize, i.settings.minScrollbarLength);
  }

  if (i.settings.maxScrollbarLength) {
    thumbSize = Math.min(thumbSize, i.settings.maxScrollbarLength);
  }

  return thumbSize;
}

function updateCss(element, i) {
  var xRailOffset = {
    width: i.railXWidth
  };
  var roundedScrollTop = Math.floor(element.scrollTop);

  if (i.isRtl) {
    xRailOffset.left = i.negativeScrollAdjustment + element.scrollLeft + i.containerWidth - i.contentWidth;
  } else {
    xRailOffset.left = element.scrollLeft;
  }

  if (i.isScrollbarXUsingBottom) {
    xRailOffset.bottom = i.scrollbarXBottom - roundedScrollTop;
  } else {
    xRailOffset.top = i.scrollbarXTop + roundedScrollTop;
  }

  set(i.scrollbarXRail, xRailOffset);
  var yRailOffset = {
    top: roundedScrollTop,
    height: i.railYHeight
  };

  if (i.isScrollbarYUsingRight) {
    if (i.isRtl) {
      yRailOffset.right = i.contentWidth - (i.negativeScrollAdjustment + element.scrollLeft) - i.scrollbarYRight - i.scrollbarYOuterWidth - 9;
    } else {
      yRailOffset.right = i.scrollbarYRight - element.scrollLeft;
    }
  } else {
    if (i.isRtl) {
      yRailOffset.left = i.negativeScrollAdjustment + element.scrollLeft + i.containerWidth * 2 - i.contentWidth - i.scrollbarYLeft - i.scrollbarYOuterWidth;
    } else {
      yRailOffset.left = i.scrollbarYLeft + element.scrollLeft;
    }
  }

  set(i.scrollbarYRail, yRailOffset);
  set(i.scrollbarX, {
    left: i.scrollbarXLeft,
    width: i.scrollbarXWidth - i.railBorderXWidth
  });
  set(i.scrollbarY, {
    top: i.scrollbarYTop,
    height: i.scrollbarYHeight - i.railBorderYWidth
  });
}

function clickRail(i) {
  i.element;
  i.event.bind(i.scrollbarY, 'mousedown', function (e) {
    return e.stopPropagation();
  });
  i.event.bind(i.scrollbarYRail, 'mousedown', function (e) {
    var positionTop = e.pageY - window.pageYOffset - i.scrollbarYRail.getBoundingClientRect().top;
    var direction = positionTop > i.scrollbarYTop ? 1 : -1;
    i.element.scrollTop += direction * i.containerHeight;
    updateGeometry(i);
    e.stopPropagation();
  });
  i.event.bind(i.scrollbarX, 'mousedown', function (e) {
    return e.stopPropagation();
  });
  i.event.bind(i.scrollbarXRail, 'mousedown', function (e) {
    var positionLeft = e.pageX - window.pageXOffset - i.scrollbarXRail.getBoundingClientRect().left;
    var direction = positionLeft > i.scrollbarXLeft ? 1 : -1;
    i.element.scrollLeft += direction * i.containerWidth;
    updateGeometry(i);
    e.stopPropagation();
  });
}

function dragThumb(i) {
  bindMouseScrollHandler(i, ['containerWidth', 'contentWidth', 'pageX', 'railXWidth', 'scrollbarX', 'scrollbarXWidth', 'scrollLeft', 'x', 'scrollbarXRail']);
  bindMouseScrollHandler(i, ['containerHeight', 'contentHeight', 'pageY', 'railYHeight', 'scrollbarY', 'scrollbarYHeight', 'scrollTop', 'y', 'scrollbarYRail']);
}

function bindMouseScrollHandler(i, ref) {
  var containerHeight = ref[0];
  var contentHeight = ref[1];
  var pageY = ref[2];
  var railYHeight = ref[3];
  var scrollbarY = ref[4];
  var scrollbarYHeight = ref[5];
  var scrollTop = ref[6];
  var y = ref[7];
  var scrollbarYRail = ref[8];
  var element = i.element;
  var startingScrollTop = null;
  var startingMousePageY = null;
  var scrollBy = null;

  function mouseMoveHandler(e) {
    if (e.touches && e.touches[0]) {
      e[pageY] = e.touches[0].pageY;
    }

    element[scrollTop] = startingScrollTop + scrollBy * (e[pageY] - startingMousePageY);
    addScrollingClass(i, y);
    updateGeometry(i);
    e.stopPropagation();
    e.preventDefault();
  }

  function mouseUpHandler() {
    removeScrollingClass(i, y);
    i[scrollbarYRail].classList.remove(cls.state.clicking);
    i.event.unbind(i.ownerDocument, 'mousemove', mouseMoveHandler);
  }

  function bindMoves(e, touchMode) {
    startingScrollTop = element[scrollTop];

    if (touchMode && e.touches) {
      e[pageY] = e.touches[0].pageY;
    }

    startingMousePageY = e[pageY];
    scrollBy = (i[contentHeight] - i[containerHeight]) / (i[railYHeight] - i[scrollbarYHeight]);

    if (!touchMode) {
      i.event.bind(i.ownerDocument, 'mousemove', mouseMoveHandler);
      i.event.once(i.ownerDocument, 'mouseup', mouseUpHandler);
      e.preventDefault();
    } else {
      i.event.bind(i.ownerDocument, 'touchmove', mouseMoveHandler);
    }

    i[scrollbarYRail].classList.add(cls.state.clicking);
    e.stopPropagation();
  }

  i.event.bind(i[scrollbarY], 'mousedown', function (e) {
    bindMoves(e);
  });
  i.event.bind(i[scrollbarY], 'touchstart', function (e) {
    bindMoves(e, true);
  });
}

function keyboard(i) {
  var element = i.element;

  var elementHovered = function elementHovered() {
    return matches(element, ':hover');
  };

  var scrollbarFocused = function scrollbarFocused() {
    return matches(i.scrollbarX, ':focus') || matches(i.scrollbarY, ':focus');
  };

  function shouldPreventDefault(deltaX, deltaY) {
    var scrollTop = Math.floor(element.scrollTop);

    if (deltaX === 0) {
      if (!i.scrollbarYActive) {
        return false;
      }

      if (scrollTop === 0 && deltaY > 0 || scrollTop >= i.contentHeight - i.containerHeight && deltaY < 0) {
        return !i.settings.wheelPropagation;
      }
    }

    var scrollLeft = element.scrollLeft;

    if (deltaY === 0) {
      if (!i.scrollbarXActive) {
        return false;
      }

      if (scrollLeft === 0 && deltaX < 0 || scrollLeft >= i.contentWidth - i.containerWidth && deltaX > 0) {
        return !i.settings.wheelPropagation;
      }
    }

    return true;
  }

  i.event.bind(i.ownerDocument, 'keydown', function (e) {
    if (e.isDefaultPrevented && e.isDefaultPrevented() || e.defaultPrevented) {
      return;
    }

    if (!elementHovered() && !scrollbarFocused()) {
      return;
    }

    var activeElement = document.activeElement ? document.activeElement : i.ownerDocument.activeElement;

    if (activeElement) {
      if (activeElement.tagName === 'IFRAME') {
        activeElement = activeElement.contentDocument.activeElement;
      } else {
        // go deeper if element is a webcomponent
        while (activeElement.shadowRoot) {
          activeElement = activeElement.shadowRoot.activeElement;
        }
      }

      if (isEditable(activeElement)) {
        return;
      }
    }

    var deltaX = 0;
    var deltaY = 0;

    switch (e.which) {
      case 37:
        // left
        if (e.metaKey) {
          deltaX = -i.contentWidth;
        } else if (e.altKey) {
          deltaX = -i.containerWidth;
        } else {
          deltaX = -30;
        }

        break;

      case 38:
        // up
        if (e.metaKey) {
          deltaY = i.contentHeight;
        } else if (e.altKey) {
          deltaY = i.containerHeight;
        } else {
          deltaY = 30;
        }

        break;

      case 39:
        // right
        if (e.metaKey) {
          deltaX = i.contentWidth;
        } else if (e.altKey) {
          deltaX = i.containerWidth;
        } else {
          deltaX = 30;
        }

        break;

      case 40:
        // down
        if (e.metaKey) {
          deltaY = -i.contentHeight;
        } else if (e.altKey) {
          deltaY = -i.containerHeight;
        } else {
          deltaY = -30;
        }

        break;

      case 32:
        // space bar
        if (e.shiftKey) {
          deltaY = i.containerHeight;
        } else {
          deltaY = -i.containerHeight;
        }

        break;

      case 33:
        // page up
        deltaY = i.containerHeight;
        break;

      case 34:
        // page down
        deltaY = -i.containerHeight;
        break;

      case 36:
        // home
        deltaY = i.contentHeight;
        break;

      case 35:
        // end
        deltaY = -i.contentHeight;
        break;

      default:
        return;
    }

    if (i.settings.suppressScrollX && deltaX !== 0) {
      return;
    }

    if (i.settings.suppressScrollY && deltaY !== 0) {
      return;
    }

    element.scrollTop -= deltaY;
    element.scrollLeft += deltaX;
    updateGeometry(i);

    if (shouldPreventDefault(deltaX, deltaY)) {
      e.preventDefault();
    }
  });
}

function wheel(i) {
  var element = i.element;

  function shouldPreventDefault(deltaX, deltaY) {
    var roundedScrollTop = Math.floor(element.scrollTop);
    var isTop = element.scrollTop === 0;
    var isBottom = roundedScrollTop + element.offsetHeight === element.scrollHeight;
    var isLeft = element.scrollLeft === 0;
    var isRight = element.scrollLeft + element.offsetWidth === element.scrollWidth;
    var hitsBound; // pick axis with primary direction

    if (Math.abs(deltaY) > Math.abs(deltaX)) {
      hitsBound = isTop || isBottom;
    } else {
      hitsBound = isLeft || isRight;
    }

    return hitsBound ? !i.settings.wheelPropagation : true;
  }

  function getDeltaFromEvent(e) {
    var deltaX = e.deltaX;
    var deltaY = -1 * e.deltaY;

    if (typeof deltaX === 'undefined' || typeof deltaY === 'undefined') {
      // OS X Safari
      deltaX = -1 * e.wheelDeltaX / 6;
      deltaY = e.wheelDeltaY / 6;
    }

    if (e.deltaMode && e.deltaMode === 1) {
      // Firefox in deltaMode 1: Line scrolling
      deltaX *= 10;
      deltaY *= 10;
    }

    if (deltaX !== deltaX && deltaY !== deltaY
    /* NaN checks */
    ) {
        // IE in some mouse drivers
        deltaX = 0;
        deltaY = e.wheelDelta;
      }

    if (e.shiftKey) {
      // reverse axis with shift key
      return [-deltaY, -deltaX];
    }

    return [deltaX, deltaY];
  }

  function shouldBeConsumedByChild(target, deltaX, deltaY) {
    // FIXME: this is a workaround for <select> issue in FF and IE #571
    if (!env.isWebKit && element.querySelector('select:focus')) {
      return true;
    }

    if (!element.contains(target)) {
      return false;
    }

    var cursor = target;

    while (cursor && cursor !== element) {
      if (cursor.classList.contains(cls.element.consuming)) {
        return true;
      }

      var style = get(cursor); // if deltaY && vertical scrollable

      if (deltaY && style.overflowY.match(/(scroll|auto)/)) {
        var maxScrollTop = cursor.scrollHeight - cursor.clientHeight;

        if (maxScrollTop > 0) {
          if (cursor.scrollTop > 0 && deltaY < 0 || cursor.scrollTop < maxScrollTop && deltaY > 0) {
            return true;
          }
        }
      } // if deltaX && horizontal scrollable


      if (deltaX && style.overflowX.match(/(scroll|auto)/)) {
        var maxScrollLeft = cursor.scrollWidth - cursor.clientWidth;

        if (maxScrollLeft > 0) {
          if (cursor.scrollLeft > 0 && deltaX < 0 || cursor.scrollLeft < maxScrollLeft && deltaX > 0) {
            return true;
          }
        }
      }

      cursor = cursor.parentNode;
    }

    return false;
  }

  function mousewheelHandler(e) {
    var ref = getDeltaFromEvent(e);
    var deltaX = ref[0];
    var deltaY = ref[1];

    if (shouldBeConsumedByChild(e.target, deltaX, deltaY)) {
      return;
    }

    var shouldPrevent = false;

    if (!i.settings.useBothWheelAxes) {
      // deltaX will only be used for horizontal scrolling and deltaY will
      // only be used for vertical scrolling - this is the default
      element.scrollTop -= deltaY * i.settings.wheelSpeed;
      element.scrollLeft += deltaX * i.settings.wheelSpeed;
    } else if (i.scrollbarYActive && !i.scrollbarXActive) {
      // only vertical scrollbar is active and useBothWheelAxes option is
      // active, so let's scroll vertical bar using both mouse wheel axes
      if (deltaY) {
        element.scrollTop -= deltaY * i.settings.wheelSpeed;
      } else {
        element.scrollTop += deltaX * i.settings.wheelSpeed;
      }

      shouldPrevent = true;
    } else if (i.scrollbarXActive && !i.scrollbarYActive) {
      // useBothWheelAxes and only horizontal bar is active, so use both
      // wheel axes for horizontal bar
      if (deltaX) {
        element.scrollLeft += deltaX * i.settings.wheelSpeed;
      } else {
        element.scrollLeft -= deltaY * i.settings.wheelSpeed;
      }

      shouldPrevent = true;
    }

    updateGeometry(i);
    shouldPrevent = shouldPrevent || shouldPreventDefault(deltaX, deltaY);

    if (shouldPrevent && !e.ctrlKey) {
      e.stopPropagation();
      e.preventDefault();
    }
  }

  if (typeof window.onwheel !== 'undefined') {
    i.event.bind(element, 'wheel', mousewheelHandler);
  } else if (typeof window.onmousewheel !== 'undefined') {
    i.event.bind(element, 'mousewheel', mousewheelHandler);
  }
}

function touch(i) {
  if (!env.supportsTouch && !env.supportsIePointer) {
    return;
  }

  var element = i.element;

  function shouldPrevent(deltaX, deltaY) {
    var scrollTop = Math.floor(element.scrollTop);
    var scrollLeft = element.scrollLeft;
    var magnitudeX = Math.abs(deltaX);
    var magnitudeY = Math.abs(deltaY);

    if (magnitudeY > magnitudeX) {
      // user is perhaps trying to swipe up/down the page
      if (deltaY < 0 && scrollTop === i.contentHeight - i.containerHeight || deltaY > 0 && scrollTop === 0) {
        // set prevent for mobile Chrome refresh
        return window.scrollY === 0 && deltaY > 0 && env.isChrome;
      }
    } else if (magnitudeX > magnitudeY) {
      // user is perhaps trying to swipe left/right across the page
      if (deltaX < 0 && scrollLeft === i.contentWidth - i.containerWidth || deltaX > 0 && scrollLeft === 0) {
        return true;
      }
    }

    return true;
  }

  function applyTouchMove(differenceX, differenceY) {
    element.scrollTop -= differenceY;
    element.scrollLeft -= differenceX;
    updateGeometry(i);
  }

  var startOffset = {};
  var startTime = 0;
  var speed = {};
  var easingLoop = null;

  function getTouch(e) {
    if (e.targetTouches) {
      return e.targetTouches[0];
    } else {
      // Maybe IE pointer
      return e;
    }
  }

  function shouldHandle(e) {
    if (e.pointerType && e.pointerType === 'pen' && e.buttons === 0) {
      return false;
    }

    if (e.targetTouches && e.targetTouches.length === 1) {
      return true;
    }

    if (e.pointerType && e.pointerType !== 'mouse' && e.pointerType !== e.MSPOINTER_TYPE_MOUSE) {
      return true;
    }

    return false;
  }

  function touchStart(e) {
    if (!shouldHandle(e)) {
      return;
    }

    var touch = getTouch(e);
    startOffset.pageX = touch.pageX;
    startOffset.pageY = touch.pageY;
    startTime = new Date().getTime();

    if (easingLoop !== null) {
      clearInterval(easingLoop);
    }
  }

  function shouldBeConsumedByChild(target, deltaX, deltaY) {
    if (!element.contains(target)) {
      return false;
    }

    var cursor = target;

    while (cursor && cursor !== element) {
      if (cursor.classList.contains(cls.element.consuming)) {
        return true;
      }

      var style = get(cursor); // if deltaY && vertical scrollable

      if (deltaY && style.overflowY.match(/(scroll|auto)/)) {
        var maxScrollTop = cursor.scrollHeight - cursor.clientHeight;

        if (maxScrollTop > 0) {
          if (cursor.scrollTop > 0 && deltaY < 0 || cursor.scrollTop < maxScrollTop && deltaY > 0) {
            return true;
          }
        }
      } // if deltaX && horizontal scrollable


      if (deltaX && style.overflowX.match(/(scroll|auto)/)) {
        var maxScrollLeft = cursor.scrollWidth - cursor.clientWidth;

        if (maxScrollLeft > 0) {
          if (cursor.scrollLeft > 0 && deltaX < 0 || cursor.scrollLeft < maxScrollLeft && deltaX > 0) {
            return true;
          }
        }
      }

      cursor = cursor.parentNode;
    }

    return false;
  }

  function touchMove(e) {
    if (shouldHandle(e)) {
      var touch = getTouch(e);
      var currentOffset = {
        pageX: touch.pageX,
        pageY: touch.pageY
      };
      var differenceX = currentOffset.pageX - startOffset.pageX;
      var differenceY = currentOffset.pageY - startOffset.pageY;

      if (shouldBeConsumedByChild(e.target, differenceX, differenceY)) {
        return;
      }

      applyTouchMove(differenceX, differenceY);
      startOffset = currentOffset;
      var currentTime = new Date().getTime();
      var timeGap = currentTime - startTime;

      if (timeGap > 0) {
        speed.x = differenceX / timeGap;
        speed.y = differenceY / timeGap;
        startTime = currentTime;
      }

      if (shouldPrevent(differenceX, differenceY)) {
        e.preventDefault();
      }
    }
  }

  function touchEnd() {
    if (i.settings.swipeEasing) {
      clearInterval(easingLoop);
      easingLoop = setInterval(function () {
        if (i.isInitialized) {
          clearInterval(easingLoop);
          return;
        }

        if (!speed.x && !speed.y) {
          clearInterval(easingLoop);
          return;
        }

        if (Math.abs(speed.x) < 0.01 && Math.abs(speed.y) < 0.01) {
          clearInterval(easingLoop);
          return;
        }

        applyTouchMove(speed.x * 30, speed.y * 30);
        speed.x *= 0.8;
        speed.y *= 0.8;
      }, 10);
    }
  }

  if (env.supportsTouch) {
    i.event.bind(element, 'touchstart', touchStart);
    i.event.bind(element, 'touchmove', touchMove);
    i.event.bind(element, 'touchend', touchEnd);
  } else if (env.supportsIePointer) {
    if (window.PointerEvent) {
      i.event.bind(element, 'pointerdown', touchStart);
      i.event.bind(element, 'pointermove', touchMove);
      i.event.bind(element, 'pointerup', touchEnd);
    } else if (window.MSPointerEvent) {
      i.event.bind(element, 'MSPointerDown', touchStart);
      i.event.bind(element, 'MSPointerMove', touchMove);
      i.event.bind(element, 'MSPointerUp', touchEnd);
    }
  }
}

var defaultSettings = function defaultSettings() {
  return {
    handlers: ['click-rail', 'drag-thumb', 'keyboard', 'wheel', 'touch'],
    maxScrollbarLength: null,
    minScrollbarLength: null,
    scrollingThreshold: 1000,
    scrollXMarginOffset: 0,
    scrollYMarginOffset: 0,
    suppressScrollX: false,
    suppressScrollY: false,
    swipeEasing: true,
    useBothWheelAxes: false,
    wheelPropagation: true,
    wheelSpeed: 1
  };
};

var handlers = {
  'click-rail': clickRail,
  'drag-thumb': dragThumb,
  keyboard: keyboard,
  wheel: wheel,
  touch: touch
};

var PerfectScrollbar = function PerfectScrollbar(element, userSettings) {
  var this$1 = this;
  if (userSettings === void 0) userSettings = {};

  if (typeof element === 'string') {
    element = document.querySelector(element);
  }

  if (!element || !element.nodeName) {
    throw new Error('no element is specified to initialize PerfectScrollbar');
  }

  this.element = element;
  element.classList.add(cls.main);
  this.settings = defaultSettings();

  for (var key in userSettings) {
    this.settings[key] = userSettings[key];
  }

  this.containerWidth = null;
  this.containerHeight = null;
  this.contentWidth = null;
  this.contentHeight = null;

  var focus = function focus() {
    return element.classList.add(cls.state.focus);
  };

  var blur = function blur() {
    return element.classList.remove(cls.state.focus);
  };

  this.isRtl = get(element).direction === 'rtl';

  if (this.isRtl === true) {
    element.classList.add(cls.rtl);
  }

  this.isNegativeScroll = function () {
    var originalScrollLeft = element.scrollLeft;
    var result = null;
    element.scrollLeft = -1;
    result = element.scrollLeft < 0;
    element.scrollLeft = originalScrollLeft;
    return result;
  }();

  this.negativeScrollAdjustment = this.isNegativeScroll ? element.scrollWidth - element.clientWidth : 0;
  this.event = new EventManager();
  this.ownerDocument = element.ownerDocument || document;
  this.scrollbarXRail = div(cls.element.rail('x'));
  element.appendChild(this.scrollbarXRail);
  this.scrollbarX = div(cls.element.thumb('x'));
  this.scrollbarXRail.appendChild(this.scrollbarX);
  this.scrollbarX.setAttribute('tabindex', 0);
  this.event.bind(this.scrollbarX, 'focus', focus);
  this.event.bind(this.scrollbarX, 'blur', blur);
  this.scrollbarXActive = null;
  this.scrollbarXWidth = null;
  this.scrollbarXLeft = null;
  var railXStyle = get(this.scrollbarXRail);
  this.scrollbarXBottom = parseInt(railXStyle.bottom, 10);

  if (isNaN(this.scrollbarXBottom)) {
    this.isScrollbarXUsingBottom = false;
    this.scrollbarXTop = toInt(railXStyle.top);
  } else {
    this.isScrollbarXUsingBottom = true;
  }

  this.railBorderXWidth = toInt(railXStyle.borderLeftWidth) + toInt(railXStyle.borderRightWidth); // Set rail to display:block to calculate margins

  set(this.scrollbarXRail, {
    display: 'block'
  });
  this.railXMarginWidth = toInt(railXStyle.marginLeft) + toInt(railXStyle.marginRight);
  set(this.scrollbarXRail, {
    display: ''
  });
  this.railXWidth = null;
  this.railXRatio = null;
  this.scrollbarYRail = div(cls.element.rail('y'));
  element.appendChild(this.scrollbarYRail);
  this.scrollbarY = div(cls.element.thumb('y'));
  this.scrollbarYRail.appendChild(this.scrollbarY);
  this.scrollbarY.setAttribute('tabindex', 0);
  this.event.bind(this.scrollbarY, 'focus', focus);
  this.event.bind(this.scrollbarY, 'blur', blur);
  this.scrollbarYActive = null;
  this.scrollbarYHeight = null;
  this.scrollbarYTop = null;
  var railYStyle = get(this.scrollbarYRail);
  this.scrollbarYRight = parseInt(railYStyle.right, 10);

  if (isNaN(this.scrollbarYRight)) {
    this.isScrollbarYUsingRight = false;
    this.scrollbarYLeft = toInt(railYStyle.left);
  } else {
    this.isScrollbarYUsingRight = true;
  }

  this.scrollbarYOuterWidth = this.isRtl ? outerWidth(this.scrollbarY) : null;
  this.railBorderYWidth = toInt(railYStyle.borderTopWidth) + toInt(railYStyle.borderBottomWidth);
  set(this.scrollbarYRail, {
    display: 'block'
  });
  this.railYMarginHeight = toInt(railYStyle.marginTop) + toInt(railYStyle.marginBottom);
  set(this.scrollbarYRail, {
    display: ''
  });
  this.railYHeight = null;
  this.railYRatio = null;
  this.reach = {
    x: element.scrollLeft <= 0 ? 'start' : element.scrollLeft >= this.contentWidth - this.containerWidth ? 'end' : null,
    y: element.scrollTop <= 0 ? 'start' : element.scrollTop >= this.contentHeight - this.containerHeight ? 'end' : null
  };
  this.isAlive = true;
  this.settings.handlers.forEach(function (handlerName) {
    return handlers[handlerName](this$1);
  });
  this.lastScrollTop = Math.floor(element.scrollTop); // for onScroll only

  this.lastScrollLeft = element.scrollLeft; // for onScroll only

  this.event.bind(this.element, 'scroll', function (e) {
    return this$1.onScroll(e);
  });
  updateGeometry(this);
};

PerfectScrollbar.prototype.update = function update() {
  if (!this.isAlive) {
    return;
  } // Recalcuate negative scrollLeft adjustment


  this.negativeScrollAdjustment = this.isNegativeScroll ? this.element.scrollWidth - this.element.clientWidth : 0; // Recalculate rail margins

  set(this.scrollbarXRail, {
    display: 'block'
  });
  set(this.scrollbarYRail, {
    display: 'block'
  });
  this.railXMarginWidth = toInt(get(this.scrollbarXRail).marginLeft) + toInt(get(this.scrollbarXRail).marginRight);
  this.railYMarginHeight = toInt(get(this.scrollbarYRail).marginTop) + toInt(get(this.scrollbarYRail).marginBottom); // Hide scrollbars not to affect scrollWidth and scrollHeight

  set(this.scrollbarXRail, {
    display: 'none'
  });
  set(this.scrollbarYRail, {
    display: 'none'
  });
  updateGeometry(this);
  processScrollDiff(this, 'top', 0, false, true);
  processScrollDiff(this, 'left', 0, false, true);
  set(this.scrollbarXRail, {
    display: ''
  });
  set(this.scrollbarYRail, {
    display: ''
  });
};

PerfectScrollbar.prototype.onScroll = function onScroll(e) {
  if (!this.isAlive) {
    return;
  }

  updateGeometry(this);
  processScrollDiff(this, 'top', this.element.scrollTop - this.lastScrollTop);
  processScrollDiff(this, 'left', this.element.scrollLeft - this.lastScrollLeft);
  this.lastScrollTop = Math.floor(this.element.scrollTop);
  this.lastScrollLeft = this.element.scrollLeft;
};

PerfectScrollbar.prototype.destroy = function destroy() {
  if (!this.isAlive) {
    return;
  }

  this.event.unbindAll();
  remove(this.scrollbarX);
  remove(this.scrollbarY);
  remove(this.scrollbarXRail);
  remove(this.scrollbarYRail);
  this.removePsClasses(); // unset elements

  this.element = null;
  this.scrollbarX = null;
  this.scrollbarY = null;
  this.scrollbarXRail = null;
  this.scrollbarYRail = null;
  this.isAlive = false;
};

PerfectScrollbar.prototype.removePsClasses = function removePsClasses() {
  this.element.className = this.element.className.split(' ').filter(function (name) {
    return !name.match(/^ps([-_].+|)$/);
  }).join(' ');
};

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var KbfDropdown = /*#__PURE__*/function (_EventTarget) {
  _inherits(KbfDropdown, _EventTarget);

  var _super = _createSuper(KbfDropdown);

  function KbfDropdown(selector, opts) {
    var _this;

    var scrollBlock = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    _classCallCheck(this, KbfDropdown);

    _this = _super.call(this);

    if (selector === undefined) throw errors.argumentNotFound('selector');
    if (opts === undefined) throw errors.argumentNotFound('opts');
    _this.selector = selector;
    _this.opts = opts;
    _this.scrollBlock = scrollBlock; // Czy blokowac scroll po otwarciu dropdown

    _this.init(); // Inicjalizuj


    _this.addListeners(); // Dodaj event listenery


    _this.initScrollBar(); // Inicjuj scrollbar


    return _this;
  }

  _createClass(KbfDropdown, [{
    key: "init",
    value: function init() {
      var $ = window.$; // Aliasy

      this.on = this.addEventListener;
      this.off = this.removeEventListener;
      this.emit = this.dispatchEvent;
      this.$dropdowns = $(this.selector);
      if (this.$dropdowns.length === 0) throw errors.elementNotFound(this.selector);
      this.$dropdownButtons = this.$dropdowns.find('button'); // Przyciski dropdown
      // Wstaw ukryte pole formularza

      this.$dropdowns.append($('<input class="form-control" type="hidden">'));
      this.$hiddenInputs = this.$dropdowns.find('input[type="hidden"]'); // Ustaw opcje

      this.setOptions(this.opts);
      this.$dropdownItems = this.$dropdowns.find('.dropdown-item'); // Elementy menu
    } // Dodaje listenery

  }, {
    key: "addListeners",
    value: function addListeners() {
      var $ = window.$;
      var instance = this; // Ustaw kontekst

      this.$dropdownItems.off('click');
      var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

      function preventDefault(e) {
        e.preventDefault();
      }

      function disableScroll() {
        window.addEventListener('DOMMouseScroll', preventDefault, {
          passive: false
        }); // older FF

        window.addEventListener(wheelEvent, preventDefault, {
          passive: false
        }); // modern desktop

        window.addEventListener('touchmove', preventDefault, {
          passive: false
        }); // mobile
      }

      function enableScroll() {
        window.removeEventListener('DOMMouseScroll', preventDefault, {
          passive: false
        });
        window.removeEventListener(wheelEvent, preventDefault, {
          passive: false
        });
        window.removeEventListener('touchmove', preventDefault, {
          passive: false
        });
      }

      if (this.scrollBlock) {
        // Blokowanie scrollingu body kiedy dropdown jest widoczny
        this.$dropdowns.on('shown.bs.dropdown', function (e) {
          e.stopPropagation();
          disableScroll();
        });
        this.$dropdowns.on('hidden.bs.dropdown', function (e) {
          e.stopPropagation();
          enableScroll();
        });
      } // Fix dla przyciskow steppera // TODO przeniesc do steppera
      // this.$dropdowns.on('shown.bs.dropdown', function (e) {
      //
      //     e.stopPropagation();
      //     let $steps = $('.step');
      //     let $buttons = $('.button-prev, .button-next, .button-register');
      //     if ($steps.length) $steps.css('z-index', -1);
      //     if ($buttons.length) $buttons.css('z-index', -1);
      //
      // });
      //
      // this.$dropdowns.on('hidden.bs.dropdown', function (e) {
      //
      //     e.stopPropagation();
      //     let $steps = $('.step');
      //     let $buttons = $('.button-prev, .button-next, .button-register');
      //     if ($steps.length) $steps.css('z-index', '');
      //     if ($buttons.length) $buttons.css('z-index', '');
      //
      // });
      // Gdy klikniemy na dropdown item


      this.$dropdownItems.on('click', function (e) {
        e.preventDefault();
        var $this = $(this); // Sprawdz czy wartosci sie zmienila

        if ($this.text() !== instance.displayed) {
          // Wyswietl nowa wartosc na przycisku
          instance.displayed = $this.text();
          instance.$dropdownButtons.text(instance.displayed); // Ustaw ukryte pole
          // Jeżeli opts jest obiektem

          if (Array.isArray(instance.opts) === false && _typeof(instance.opts) === 'object') {
            instance.$hiddenInputs.attr({
              name: instance.$dropdowns.data('name'),
              value: instance.opts[instance.displayed]
            });
            instance.emit(new CustomEvent('change', {
              detail: instance.opts[instance.displayed]
            })); // Emituj nowa wartosc
          } else // Jezeli opts jest tablica
            if (Array.isArray(instance.opts) === true) {
              instance.$hiddenInputs.attr({
                name: instance.$dropdowns.data('name'),
                value: instance.displayed
              });
              instance.emit(new CustomEvent('change', {
                detail: instance.displayed
              })); // Emituj nowa wartosc
            }
        }
      });
    } // Inicjalizuje opcje

  }, {
    key: "setOptions",
    value: function setOptions(opts) {
      var $ = window.$;
      var dropdownMenu, optionsLastIdx, idx;
      var ariaLabelledBy = this.$dropdownButtons.attr('id');
      var instance = this; // Ustaw kontekst
      // Jeżeli opts jest obiektem

      if (Array.isArray(opts) === false && _typeof(opts) === 'object') {
        var keys = Object.keys(opts);
        optionsLastIdx = keys.length - 1;
        idx = 0; // Ustaw stan

        this.setState(); // Aktualizuj ukryte pole

        this.updateHiddenInput(); // Przygotuj elementy menu

        dropdownMenu = "<div class=\"dropdown-menu\" aria-labelledby=\"".concat(ariaLabelledBy, "\">");

        do {
          dropdownMenu += "<a class=\"dropdown-item\" href=\"#\">".concat(keys[idx], "</a>");
        } while (idx++ < optionsLastIdx);

        dropdownMenu += '</div>';
      } else // Jezeli opts jest tablica
        if (Array.isArray(opts) === true) {
          optionsLastIdx = opts.length - 1;
          idx = 0; // Ustaw stan

          this.setState(); // Aktualizuj ukryte pole

          this.updateHiddenInput(); // Przygotuj elementy menu

          dropdownMenu = "<div class=\"dropdown-menu\" aria-labelledby=\"".concat(ariaLabelledBy, "\">");

          do {
            dropdownMenu += "<a class=\"dropdown-item\" href=\"#\">".concat(opts[idx], "</a>");
          } while (idx++ < optionsLastIdx);

          dropdownMenu += '</div>';
        }

      this.$dropdownButtons.text(this.displayed); // Ustaw tekst na przycisku

      this.$dropdownButtons.on('click', function () {
        instance.initScrollBar(); // Scrollbar fix !

        instance.$dropdownMenu.on('click', function (e) {
          if (e.target.className.indexOf('ps__') !== -1) {
            e.stopPropagation();
          }
        });
      });
      this.$dropdowns.find('.dropdown-menu').remove();
      this.$dropdownMenu = $(dropdownMenu);
      this.$dropdownButtons.after(this.$dropdownMenu); // Ustaw szerokosc dropdown menu na szerokosc przycisku - fix

      this.$dropdownButtons.off('mouseenter');
      this.$dropdownButtons.on('mouseenter', function () {
        var $this = $(this);
        $this.next().css('width', $this.css('width'));
      });
      this.$dropdownMenu.css({
        width: this.$dropdownMenu.prev('button').css('width')
      });
    } // Ustawia nowe opcje

  }, {
    key: "updateOptions",
    value: function updateOptions(opts) {
      var newMenuItemsHtml = ''; // Generowany kod html dla elementow menu

      this.opts = opts; // Jeżeli opts jest obiektem

      if (Array.isArray(this.opts) === false && _typeof(this.opts) === 'object') {
        var keys = Object.keys(this.opts); // Usun istniejace elementy menu

        this.$dropdownItems.remove(); // Generuj nowy kod html dla elementow menu <a class="dropdown-item" href="#">Wszystkie</a>

        keys.forEach(function (key) {
          newMenuItemsHtml += "<a class=\"dropdown-item\" href=\"#\">".concat(key, "</a>");
        });
        this.$dropdownButtons.text(keys[0]); // Aktualizuj przycisk

        this.$dropdownMenu.html(newMenuItemsHtml);
        this.$dropdownItems = this.$dropdownMenu.find('.dropdown-item');
        this.addListeners(); // Dodaj ponownie listenery
        // Ustaw stan

        this.setState();
        this.initScrollBar();
      } else // Jezeli opts jest tablica
        if (Array.isArray(this.opts) === true) {
          // Usun istniejace elementy menu
          this.$dropdownItems.off('click');
          this.$dropdownItems.remove();
          this.opts.forEach(function (opt) {
            newMenuItemsHtml += "<a class=\"dropdown-item\" href=\"#\">".concat(opt, "</a>");
          });
          this.$dropdownButtons.text(this.opts[0]); // Aktualizuj przycisk

          this.$dropdownMenu.html(newMenuItemsHtml);
          this.$dropdownItems = this.$dropdownMenu.find('.dropdown-item');
          this.addListeners(); // Dodaj ponownie listenery
          // Ustaw stan

          this.setState();
        } // Aktualizuj ukryte pole


      this.updateHiddenInput();
    } // Aktualizuje ukryte pole input

  }, {
    key: "updateHiddenInput",
    value: function updateHiddenInput() {
      // Ustaw ukryte pola
      this.$hiddenInputs.attr({
        name: this.$dropdowns.data('name'),
        value: this.value
      });
    } // Ustawia aktywna opcje

  }, {
    key: "setActive",
    value: function setActive(optionName) {
      // Sprawdz poprawnosc argumentow
      if (optionName === undefined) throw errors.argumentNotFound('optionName'); // Jeżeli opts jest obiektem

      if (Array.isArray(this.opts) === false && _typeof(this.opts) === 'object') {
        // Sprawdz czy opcja istnieje
        if (optionName in this.opts === false) throw new Error("Option ".concat(optionName, " does not exist")); // Ustaw stan

        this.displayed = optionName;
        this.value = this.opts[optionName];
      } // Jezeli opts jest tablica


      if (Array.isArray(this.opts) === true) {
        // Sprawdz czy opcja istnieje
        if (this.opts.includes(optionName) === false) throw new Error("Option ".concat(optionName, " does not exist")); // Ustaw stan

        this.displayed = optionName;
        this.value = optionName;
      }

      this.$dropdownButtons.text(this.displayed); // Wyswietl nowa wartosc na przycisku

      this.updateHiddenInput(); // Aktualizuj ukryty input
    } // Ustawia stan

  }, {
    key: "setState",
    value: function setState() {
      // Jeżeli opts jest obiektem
      if (Array.isArray(this.opts) === false && _typeof(this.opts) === 'object') {
        var keys = Object.keys(this.opts); // Ustaw stan

        this.value = this.opts[keys[0]];
        this.displayed = keys[0];
        this.items = keys;
      } // Jezeli opts jest tablica


      if (Array.isArray(this.opts) === true) {
        // Ustaw stan
        this.value = this.opts[0];
        this.displayed = this.opts[0];
        this.items = this.opts;
      }
    } // Aktywuje scrollbar

  }, {
    key: "initScrollBar",
    value: function initScrollBar() {
      var instance = this;
      if (this.scrollbar) this.scrollbar.destroy(); // Inicjuj scrollbar

      this.scrollbar = new PerfectScrollbar(this.$dropdownMenu[0], {
        minScrollbarLength: 20
      });
      this.$psRail = this.$dropdowns.find('[class*="ps__rail-y"]');
      this.$psThumb = this.$dropdowns.find('[class*="ps__thumb-y"]'); // Wylacz pan mapy gdy kursor znajduje sie na scrollbar i mapa istnieje

      this.$psRail.on('mouseenter', function () {
        if (window.map) window.map.dragging.disable();
      });
      this.$dropdownMenu.on('mouseenter', function (e) {
        e.stopPropagation();
        instance.scrollbar.update();

        if (window.map) {
          window.map.scrollWheelZoom.disable();
          window.map.dragging.disable();
        }
      }); // Wlacz pan mapy gdy kursor opuszcza dropdown i mapa istnieje

      this.$psRail.on('mouseleave', function () {
        if (window.map) window.map.dragging.enable();
      });
      this.$dropdownMenu.on('mouseleave', function () {
        if (window.map) {
          window.map.scrollWheelZoom.enable();
          window.map.dragging.enable();
        }
      });
      this.$psRail.on('mousedown mouseup click', function (e) {
        e.stopPropagation();
      });
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.$dropdownItems.off('click');
      this.$hiddenInputs.remove();
      this.$dropdownMenu.remove();
    }
  }]);

  return KbfDropdown;
}( /*#__PURE__*/_wrapNativeSuper(EventTarget));

var App = /*#__PURE__*/function () {
  function App() {
    _classCallCheck(this, App);

    this.init();
    this.addListeners();
  }

  _createClass(App, [{
    key: "init",
    value: function init() {
      var $ = window.$;
      this.$submitButton = $('.submit-button'); // Datepicker

      this.datepickerJobExpire = new KbfDatepicker('.job_expire-date-picker', '[name="job_expire"]');
      this.datepickerStartDate = new KbfDatepicker('.job_start_date-date-picker', '[name="job_start_date"]'); // Taby

      this.tabs = new KbfTabs('dashboard-job-edit'); // Rodzaj etatu

      this.jobTypeDropdown = new KbfDropdown('.dropdown-job-type', ['Wybierz', 'Pełen etat', 'Pół etatu', '1/4 etatu', 'Umowa o dzieło', 'Umowa zlecenie', 'Kontrakt']); // Wysiwyg
      // this.$descriptionFieldHidden = $('[name="company_description_hidden"]');
      // TODO: Musi byc zmienione, ukryte pole musi byc niezalezne od kontekstu
      // this.wysiwyg = new KbfWysiwyg('.wysiwyg');
      // let htmlToInsert = this.$descriptionFieldHidden.val();
      // let editor = document.getElementsByClassName('ql-editor')
      // editor[0].innerHTML = htmlToInsert
      // Preloader button

      this.preloaderButton = new KbfPreloaderButton('.submit-button', false);
    }
  }, {
    key: "addListeners",
    value: function addListeners() {
      var instance = this;
      this.$submitButton.on('click', function (e) {
        e.preventDefault();
        instance.tabs.validateForm();
        if (instance.tabs.formIsValid) instance.preloaderButton.triggerStart(this);
      }); // Datepicker

      $('[name="job_expire"]').on('focus', function () {
        instance.datepickerStartDate.hideDatePicker();
      });
      $('[name="job_start_date"]').on('focus', function () {
        instance.datepickerJobExpire.hideDatePicker();
      });
      $('[name="job_name"]').on('focus', function () {
        instance.datepickerJobExpire.hideDatePicker();
        instance.datepickerStartDate.hideDatePicker();
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
//# sourceMappingURL=dashboard-edit-job.js.map
