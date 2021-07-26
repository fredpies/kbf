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

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
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

  function _isNativeReflectConstruct$3() {
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
    if (_isNativeReflectConstruct$3()) {
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

  var config = {
    env: 'dev',
    url: 'https://webplanet.biz',
    apiEndpoint: 'https://webplanet.biz/kbf/'
  };

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

  function _arrayLikeToArray$1(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }

  function _unsupportedIterableToArray$1(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$1(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen);
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray$1(arr, i) || _nonIterableRest();
  }

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

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray$1(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray$1(arr) || _nonIterableSpread();
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

  function isTouchDevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
  } // Zwraca liste nazw powiatow, areasGeoJSON - granice powiatow z nazwami

  function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
  var url = config.url;
  var apiEndpoint = config.apiEndpoint;

  var KbfMap = /*#__PURE__*/function (_EventTarget) {
    _inherits(KbfMap, _EventTarget);

    var _super = _createSuper$2(KbfMap);

    function KbfMap(selector) {
      var _this;

      _classCallCheck(this, KbfMap);

      _this = _super.call(this);
      var $ = window.$; // Sprawdz poprawnosc argumentow

      if (selector === undefined) throw errors.argumentNotFound('selector');
      var $map = $(selector);
      if ($map.length === 0) throw errors.elementNotFound(selector); // Aliasy i referencje

      _this.on = _this.addEventListener;
      _this.off = _this.removeEventListener;
      _this.emit = _this.dispatchEvent;
      _this.$nameInfo = $('.kbf-map-info'); // Informacja o nazwie wojewodztwa przy kursorze
      // Ustaw element mapy

      _this.mapElement = $map[0];
      _this.$map = $map; // Ustaw kontekst

      var instance = _assertThisInitialized(_this); // Czy urzadzenie jest dotykowe


      _this.isTouchDevice = isTouchDevice(); // Ustaw wojewodztwo i powiat

      _this.currentProvinceName = 'Wszystkie';
      _this.currentAreaName = 'Wszystkie';
      _this.labelLayerGroup = L.layerGroup(); // Warstwa etykiet

      _this.zoomedToArea = false; // Czy powiekszono do powiatu
      // Ustaw branze i sub branze

      _this.currentIndustry = 'Wybierz';
      _this.currentSubIndustry = '';
      _this.markers = []; // Dodane markery
      // Inicjuj warstwe wojewodztw

      _this.provincesLayer = L.geoJSON(window.provincesGeoJSON, {
        style: function style() {
          return {
            weight: 0.6,
            fillOpacity: 0.1,
            color: '#7a838c',
            fillColor: '#478aee'
          };
        },
        onEachFeature: function onEachFeature(feature, layer) {
          var provinceName = feature.properties.name; // Nazwa wojewodztwa

          if (!instance.isTouchDevice) {
            // Usun event listenery
            layer.off('mouseover');
            layer.off('mousemove');
            layer.off('mouseout');
            layer.off('click'); // Przyciemnij warstwy na ktorych znajduje sie kursor i wyswietl nazwe wojewodztwa przy kursorze

            layer.on('mouseover', function (e) {
              this.setStyle({
                fillOpacity: 0.2
              });
              instance.$nameInfo.text(provinceName).css({
                zIndex: 5000,
                top: e.containerPoint.y + 'px',
                left: e.containerPoint.x + 'px'
              });
            });
            layer.on('mouseout', function () {
              this.setStyle({
                fillOpacity: 0.1
              });
              instance.$nameInfo.css({
                zIndex: 0
              });
            });
            layer.on('click', function () {
              this.setStyle({
                fillOpacity: 0.1
              });
            }); // Wyswietl nazwe wojewodztwa przy kursorze

            layer.on('mousemove', function (e) {
              instance.$nameInfo.css({
                top: e.containerPoint.y - 20 + 'px',
                left: e.containerPoint.x + 20 + 'px'
              });
            }); // Emituj zdarzenie z nazwa wojewodztwa po kliknieciu i skaluj do niego

            layer.on('click', instance.zoomToProvinceHandler(provinceName));
          }

          if (instance.isTouchDevice) {
            // Emituj zdarzenie z nazwa wojewodztwa po kliknieciu i skaluj do niego
            layer.off('click');
            layer.on('click', instance.zoomToProvinceHandler(provinceName));
          }
        }
      }); // Inicjalizuj mape

      _this.init();

      $(window).on('resize', instance.init.bind(instance));
      return _this;
    } // Inicjalizuje mape


    _createClass(KbfMap, [{
      key: "init",
      value: function init() {
        var instance = this; // Ustaw kontekst
        // Ustaw styl kontenera map

        if (window.innerWidth <= 768) {
          var mapPanelHeight = $('#kbf-map-panel .card-body')[0].getBoundingClientRect().height;
          this.$map.css({
            width: '100%',
            height: "calc(100vh - ".concat(mapPanelHeight, "px)"),
            marginTop: mapPanelHeight + 'px'
          });
        }

        if (window.innerWidth > 600) {
          this.$map.css({
            width: '100%',
            height: '100vh',
            marginTop: 0
          });
        } // Inicjuj mape


        if (this.map) {
          this.map.remove();
          this.map = undefined;
        }

        this.map = L.map(this.mapElement, {
          zoomSnap: 0.45,
          minZoom: 5,
          zoomControl: false,
          tap: !L.Browser.mobile // Wylacz tap events dla urzadzen mobilnych, fix !

        });
        window.map = this.map;
        instance.showAll(); // Kontroluj zmiane mapy bazowej

        this.map.on('zoom', function (e) {
          var currentZoom = e.target.getZoom();

          if (currentZoom > instance.startingZoom) {
            if (instance.map.hasLayer(KbfMap.polandProvincesTiles)) instance.map.removeLayer(KbfMap.polandProvincesTiles);
            if (instance.map.hasLayer(KbfMap.polandLabels)) instance.map.removeLayer(KbfMap.polandLabels);
            if (!instance.map.hasLayer(KbfMap.polandDetailMap)) KbfMap.polandDetailMap.addTo(instance.map);
          }

          if (currentZoom <= instance.startingZoom) {
            if (!instance.map.hasLayer(KbfMap.polandProvincesTiles)) KbfMap.polandProvincesTiles.addTo(instance.map); // Dodaj map tile wojewodztw

            if (!instance.map.hasLayer(KbfMap.polandLabels)) KbfMap.polandLabels.addTo(instance.map); // Dodaj map tile wojewodztw

            if (instance.map.hasLayer(KbfMap.polandDetailMap)) instance.map.removeLayer(KbfMap.polandDetailMap);
          }
        });
      } // Usuwa warstwy

    }, {
      key: "removeLayers",
      value: function removeLayers() {
        if (this.currentAreasLayer) {
          this.currentAreasLayer.off('mouseover');
          this.currentAreasLayer.off('mouseout');
        }

        if (this.provincesLayer) {
          this.provincesLayer.off('mouseover');
          this.provincesLayer.off('mouseout');
        }

        if (this.currentAreaLayer) {
          this.currentAreaLayer.off('mouseover');
          this.currentAreaLayer.off('mouseout');
        }

        if (this.map.hasLayer(this.provincesLayer)) {
          this.map.removeLayer(this.provincesLayer);
          this.provincesLayer.remove();
        }

        if (this.map.hasLayer(this.currentAreasLayer)) {
          this.map.removeLayer(this.currentAreasLayer);
          this.currentAreasLayer.remove();
        }

        if (this.map.hasLayer(this.currentAreaLayer)) {
          this.map.removeLayer(this.currentAreaLayer);
          this.currentAreaLayer.remove();
        }

        if (this.map.hasLayer(this.labelLayerGroup)) {
          this.map.removeLayer(this.labelLayerGroup);
          this.labelLayerGroup.remove();
        }

        var instance = this; // Usun markery

        this.markers.forEach(function (marker) {
          instance.map.removeLayer(marker);
        });
        this.markers = [];
      } // Pokazuje cala mape

    }, {
      key: "showAll",
      value: function showAll() {
        var instance = this; // Ustaw kontekst

        this.removeLayers(); // Usuw wszystkie warstwy

        if (this.map.hasLayer(KbfMap.polandProvincesTiles)) this.map.removeLayer(KbfMap.polandProvincesTiles); // Skaluj i pozycjonuj mape

        this.map.setView([52, 20]); // Centrum Polski
        // Ustaw skale poczatkowa

        this.map.once('zoom', function () {
          instance.startingZoom = instance.map.getZoom();
        });
        this.provincesLayer.addTo(this.map); // Pokaz wojewodztwa

        this.map.fitBounds(this.provincesLayer.getBounds()); // Ustaw widok

        KbfMap.polandProvincesTiles.addTo(this.map); // Dodaj map tile wojewodztw

        KbfMap.polandLabels.addTo(this.map).bringToFront(); // Dodaj map tile wojewodztw

        if (this.isTouchDevice && window.innerWidth >= 700 && window.innerHeight > 480) this.showProvinceLabels(); // Pokaz etykiety na urzadzeniach dotykowych

        this.map.scrollWheelZoom.disable(); // Wylacz scroll zoom
        // Ustaw nazwy wojewodztwa i powiatu

        this.currentProvinceName = 'Wszystkie';
        this.currentAreaName = 'Wszystkie';
      } // Pokazuje etykiety wojewodztw

    }, {
      key: "showProvinceLabels",
      value: function showProvinceLabels() {
        var instance = this;
        this.provincesLayer.eachLayer(function (layer) {
          var provinceName = layer.feature.properties.name;
          var position = layer.getCenter();
          var style = ''; // Fix na szerokosc

          if (provinceName === 'Kujawsko-Pomorskie' || provinceName === 'Warmińsko-Mazurskie') {
            style = "width: ".concat(provinceName.length * 7, "px");
          } // Fix na pozycje


          var provinces = ['Kujawsko-Pomorskie', 'Warmińsko-Mazurskie', 'Dolnośląskie'];

          if (provinces.indexOf(provinceName) >= 0) {
            position = {
              lat: position.lat,
              lng: position.lng - 0.8
            };
          }

          provinces = ['Wielkopolskie', 'Podkarpackie', 'Świętokrzyskie', 'Małopolskie', 'Lubuskie', 'Lubelskie', 'Śląskie', 'Opolskie', 'Podlaskie'];

          if (provinces.indexOf(provinceName) >= 0) {
            position = {
              lat: position.lat,
              lng: position.lng - 0.4
            };
          }

          provinces = ['Pomorskie'];

          if (provinces.indexOf(provinceName) >= 0) {
            position = {
              lat: position.lat,
              lng: position.lng - 1
            };
          }

          provinces = ['Łódzkie'];

          if (provinces.indexOf(provinceName) >= 0) {
            position = {
              lat: position.lat,
              lng: position.lng - 0.3
            };
          }

          var html = "<div style= \"".concat(style, "\" class=\"kbf-provinces-label\">").concat(provinceName, "</div>");
          L.marker(position, {
            icon: L.divIcon({
              html: html
            })
          }).addTo(instance.labelLayerGroup);
        });
        this.labelLayerGroup.addTo(this.map);
      } // Event handler dla skalowania do wojewodztwa

    }, {
      key: "zoomToProvinceHandler",
      value: function zoomToProvinceHandler(provinceName) {
        var instance = this;
        return function (e) {
          e.originalEvent.stopPropagation();
          instance.zoomToProvince(provinceName); // Skaluj do wojewodztwa

          instance.emit(new CustomEvent('province-clicked', {
            detail: {
              province: instance.currentProvinceName,
              area: instance.currentAreaName
            }
          }));
        };
      } // Skaluje do powiatow

    }, {
      key: "zoomToProvince",
      value: function zoomToProvince(provinceName) {
        var instance = this; // Ustaw kontekst

        var provinceArea;
        var isTouchDevice = this.isTouchDevice;
        this.map.scrollWheelZoom.disable(); // Wylacz scroll zoom

        this.map.dragging.enable(); // Wlacz dragging

        this.zoomedToArea = false;
        this.currentProvinceName = provinceName;
        this.removeLayers(); // Usun warstwy

        this.$nameInfo.css('zIndex', 0); // Ukryj informacje

        if (provinceName !== 'Wszystkie') {
          // Znajdz geometrie wojewodztwa
          L.geoJSON(window.provincesGeoJSON, {
            filter: function filter(feature) {
              return feature.properties.name === provinceName;
            },
            onEachFeature: function onEachFeature(feature, layer) {
              provinceArea = layer;
            }
          }); // Powiaty dla wybranego wojewodztwa

          this.currentAreasLayer = L.geoJSON(window.areasGeoJSON, {
            style: function style() {
              return {
                weight: 0.8,
                fillOpacity: 0.1,
                color: '#7a838c',
                fillColor: '#478aee'
              };
            },
            filter: function filter(feature) {
              return feature.properties.province === provinceName;
            },
            onEachFeature: function onEachFeature(feature, layer) {
              var areaName = feature.properties.name; // Nazwa powiatu

              if (instance.map.hasLayer(layer)) instance.map.removeLayer(layer); // Jeżeli urzadzenie nie jest dotykowe przyciemnij warstwy na ktorych znajduje sie kursor

              if (!isTouchDevice) {
                // Usun event listenery z powiatu
                layer.off('click');
                layer.off('mouseover');
                layer.off('mousemove');
                layer.off('mouseout');
                layer.on('mouseover', function (e) {
                  this.setStyle({
                    fillOpacity: 0.2
                  });
                  instance.$nameInfo.text(areaName).css({
                    zIndex: 5000,
                    top: e.containerPoint.y + 'px',
                    left: e.containerPoint.x + 'px'
                  });
                });
                layer.on('mouseout', function () {
                  this.setStyle({
                    fillOpacity: 0.1
                  });
                  instance.$nameInfo.css({
                    zIndex: 0
                  });
                }); // Wyswietl nazwe powiatu przy kursorze

                layer.on('mousemove', function (e) {
                  instance.$nameInfo.css({
                    top: e.containerPoint.y - 20 + 'px',
                    left: e.containerPoint.x + 20 + 'px'
                  });
                });
              } // Emituj zdarzenie z nazwa wojewodztwa i powiatu po kliknieciu i skaluj do powiatu


              layer.on('click', instance.zoomToAreaHandler(areaName, instance.currentProvinceName, layer));
            }
          }); // Zakres powiatow

          this.map.addLayer(provinceArea); // Warstwa musi byc dodana do mapy zeby na niej centrowac

          provinceArea.setStyle({
            fillOpacity: 0.1
          }); // Ustaw mape na powiatach

          this.map.panTo(provinceArea.getCenter());
          this.map.fitBounds(provinceArea.getBounds()); // Dodaj warstwe powiatow do mapy

          this.map.addLayer(this.currentAreasLayer);
          this.map.removeLayer(provinceArea);
        }

        if (provinceName === 'Wszystkie') this.showAll(); // Jezeli wybrano wszystkie wojewodztwa pokaz cala mape
      } // Event handler dla skalowania do powiatu

    }, {
      key: "zoomToAreaHandler",
      value: function zoomToAreaHandler(areaName, provinceName, layer) {
        var instance = this; // Ustaw kontekst

        return function (e) {
          e.originalEvent.stopPropagation;
          layer.setStyle({
            fillOpacity: 0.1
          });

          if (!instance.zoomedToArea) {
            instance.zoomToArea(areaName, instance.currentProvinceName, layer); // Skaluj do powiatu

            instance.zoomedToArea = true; // Emituj dane gdy kliknieto powiat

            instance.emit(new CustomEvent('area-clicked', {
              detail: {
                province: instance.currentProvinceName,
                area: instance.currentAreaName
              }
            }));
          }
        };
      } // Skaluje do powiatu

    }, {
      key: "zoomToArea",
      value: function zoomToArea(areaName, provinceName, area) {
        var instance = this; // Ustaw kontekst

        var areaCenter;
        var areaBounds;
        this.removeLayers(); // Usun warstwy

        if (area) {
          areaBounds = area.getBounds();
          this.currentAreaLayer = area;
          this.map.addLayer(this.currentAreaLayer);
          areaCenter = this.currentAreaLayer.getCenter();
        }

        instance.currentAreaName = areaName; // Znajdz geometrie powiatu jesli nie podano area

        if (area === undefined) {
          if (instance.currentAreaLayer) {
            instance.map.removeLayer(instance.currentAreaLayer);
            instance.currentAreaLayer.remove();
          }

          L.geoJSON(window.areasGeoJSON, {
            filter: function filter(feature) {
              return feature.properties.name === areaName && feature.properties.province === provinceName;
            },
            style: function style() {
              return {
                weight: 0.85,
                fillOpacity: 0.1,
                color: '#7a838c',
                fillColor: '#478aee'
              };
            },
            onEachFeature: function onEachFeature(feature, layer) {
              areaBounds = layer.getBounds();
              instance.currentAreaLayer = layer;
              instance.map.addLayer(layer);
              areaCenter = layer.getCenter();
            }
          });
        }

        this.$nameInfo.css('zIndex', 0); // Ukryj informacje
        // Usun event listenery z powiatu

        if (!this.isTouchDevice) {
          this.currentAreaLayer.off('mouseover');
          this.currentAreaLayer.off('mousemove');
          this.currentAreaLayer.off('mouseout');
          this.currentAreaLayer.off('click');
        } // Ustaw mape na lokalizacji powiatu


        this.map.panTo(areaCenter);
        this.map.fitBounds(areaBounds);
        this.map.scrollWheelZoom.enable(); // Wlacz scroll zoom

        this.map.dragging.enable(); // Wlacz dragging
      }
    }, {
      key: "removeCompanyMarkers",
      value: function removeCompanyMarkers() {
        var instance = this; // Usun markery

        this.markers.forEach(function (marker) {
          instance.map.removeLayer(marker);
        });
      } // Dodaje markery firm do mapy

    }, {
      key: "addCompanyMarkers",
      value: function addCompanyMarkers(markersData) {
        var instance = this;

        if (markersData && markersData.length > 0) {
          this.markers = [];
          var markerMarkup; // Dodaj markery

          markersData.forEach(function (markerData) {
            var markerLayer = new L.marker([markerData.lat, markerData.lon], {
              icon: KbfMap.markerSymbol
            });
            markerMarkup = "<h6 class=\"mb-3\">".concat(markerData.company_name, "</h6><p>").concat(markerData.company_address, "</p><p>").concat(markerData.company_zip, " ").concat(markerData.company_city, "</p>\n                \n                <p>").concat(markerData.company_phone_1.length > 0 ? 'tel. ' + markerData.company_phone_1 : '', " ").concat(markerData.company_phone_2.length > 0 ? ' , ' + markerData.company_phone_2 : '', "</p>\n                <div style=\"text-align: center\"><a href=\"https://webplanet.biz").concat(markerData.url, "\">Zobacz szczeg\xF3\u0142y</a></div>");
            markerLayer.bindPopup(markerMarkup);
            instance.markers.push(markerLayer);
          });
          this.markers.forEach(function (marker) {
            marker.addTo(instance.map);
          });
        }
      } // TODO

    }, {
      key: "destroy",
      value: function destroy() {}
    }]);

    return KbfMap;
  }( /*#__PURE__*/_wrapNativeSuper(EventTarget));

  KbfMap.polandBoundary = [[47.027, 13.074], [56.851, 25.029]]; // Zasieg Polski

  KbfMap.polandDetailMap = L.tileLayer.provider('OpenStreetMap.Mapnik'); // Tile Map szczegolowy

  KbfMap.polandProvincesTiles = L.tileLayer.provider('USGS.USTopo'); // Tile Map dla wojewodztw

  KbfMap.polandLabels = L.tileLayer.provider('Stamen.TonerLabels'); // Tile Map etykiet

  KbfMap.polandTiles = L.tileLayer.provider('OpenStreetMap.Mapnik'); // Tile Map default

  KbfMap.layerStyle = {}; // Style warstwy wojewodztwa i powiatu

  KbfMap.markerSymbol = L.icon({
    iconUrl: "".concat(url, "/kbf/site/templates/assets/images/marker-icon.png"),
    iconSize: [30, 40],
    // size of the icon
    iconAnchor: [15, 40],
    // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor

  });
  KbfMap.markersAPIEndpoint = apiEndpoint;

  var KbfMiniMap = /*#__PURE__*/function () {
    function KbfMiniMap(selector) {
      _classCallCheck(this, KbfMiniMap);

      var $ = window.$;
      this.$miniMap = $(selector); // Emituj wyjatek gdy nie podano selektora albo element nie zostal znaleziony

      if (!selector || this.$miniMap.length === 0) throw errors.elementNotFound(selector);
      this.lat = this.$miniMap.data('lat');
      this.lon = this.$miniMap.data('lon'); // Emituj wyjatek jezeli nie podano wspolrzednych geograficznych

      if (!this.lat || !this.lon) return; // Ustaw element mapy

      this.miniMapElement = this.$miniMap[0];
      this.init();
    }

    _createClass(KbfMiniMap, [{
      key: "init",
      value: function init() {
        // Ustaw kontekst
        var instance = this; // Inicjuj mape

        if (this.map) {
          this.map.remove();
          this.map = undefined;
        }

        this.minimap = L.map(this.miniMapElement, {
          zoom: 17,
          dragging: false,
          scrollWheelZoom: false,
          attributionControl: false,
          boxZoom: false,
          zoomControl: false,
          center: [Number(instance.lat), Number(instance.lon)],
          tap: !L.Browser.mobile // Wylacz tap events dla urzadzen mobilnych, fix !

        }); // Dodaj tile map

        if (this.minimap.hasLayer(KbfMap.polandTiles)) this.minimap.removeLayer(KbfMap.polandTiles);
        KbfMap.polandTiles.addTo(this.minimap); // Dodaj marker

        L.marker([Number(instance.lat), Number(instance.lon)], {
          icon: KbfMap.markerSymbol
        }).addTo(this.minimap);
      }
    }]);

    return KbfMiniMap;
  }();

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

  function data$1 (owner, key, value) {
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

  function on$1(events, handler) {
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
    on: on$1,
    off: off,
    trigger: trigger
  }; //static

  DependencyLib.extend = extend;
  DependencyLib.data = data$1;
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

  function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  var KbfForm = /*#__PURE__*/function () {
    function KbfForm(formConfig, lang) {
      _classCallCheck(this, KbfForm);

      var $ = window.$;
      this.formConfig = formConfig;
      this.formName = this.formConfig.formName;
      this.formElement = document.forms[this.formName];
      this.lang = lang || 'pl'; // Sprawdz czy formularz o podanej nazwie istnieje

      if (!this.formElement) throw errors.formNotFound(this.formName);
      this.$formElement = $(this.formElement); // Error message

      this.$errorMessageElement = $('.kbf-error-message'); // Sprawdz czy walidator istnieje

      if (!$.fn.validate) throw errors.noValidator(); // Domyslna konfiguracja walidatora

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
        var instance = this;
        this.inputmask = new Inputmask$1(); // Ustaw maski

        Array.from(this.formElement.elements).forEach(function (formElement) {
          instance.inputmask.mask(formElement);
        });
      }
    }, {
      key: "addListeners",
      value: function addListeners() {}
    }, {
      key: "validate",
      value: function validate() {
        this.$formElement.validate(_objectSpread$1(_objectSpread$1({}, this.defaultValidatorConfig), this.formConfig));
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

  function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  var KbfPreloaderButton = /*#__PURE__*/function (_EventTarget) {
    _inherits(KbfPreloaderButton, _EventTarget);

    var _super = _createSuper$1(KbfPreloaderButton);

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

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  var KbfSendMessage = /*#__PURE__*/function (_KbfForm) {
    _inherits(KbfSendMessage, _KbfForm);

    var _super = _createSuper(KbfSendMessage);

    function KbfSendMessage() {
      var _this;

      _classCallCheck(this, KbfSendMessage);

      _this = _super.call(this, {
        formName: 'send-message'
      }, 'pl');

      _this.init();

      return _this;
    }

    _createClass(KbfSendMessage, [{
      key: "init",
      value: function init() {
        _get(_getPrototypeOf(KbfSendMessage.prototype), "init", this).call(this);

        this.formData = new FormData();
        this.$nameField = $('input[name="name"]');
        this.$emailField = $('input[name="email"]');
        this.$companyEmailField = $('input[name="company_email"]');
        this.$messageField = $('textarea[name="message"]');
        this.$submitButton = $('button.send-message[type="submit"]');
        this.$sendMessageContainer = $('.kbf-send-message');
        this.$sendMessageConfirmation = $('.send-message-confirmation');
        this.$h6 = $('.container h6');
        this.preloaderButton = new KbfPreloaderButton('button.send-message[type="submit"]', false);
      }
    }, {
      key: "addListeners",
      value: function addListeners() {
        var instance = this;
        this.$submitButton.on('click', function (e) {
          e.preventDefault();
          instance.formData.append('subject', "Nowa wiadomo\u015B\u0107 z KBF");
          instance.formData.append('to', instance.$companyEmailField.val());
          instance.formData.append('from', instance.$emailField.val());
          instance.formData.append('fromName', instance.$nameField.val());
          instance.formData.append('bodyHTML', instance.$messageField.val());
          instance.validate();

          if (instance.formIsValid) {
            instance.preloaderButton.triggerStart(instance.$submitButton[0]);
            $.ajax("".concat(config.apiEndpoint, "api/mail/"), {
              type: 'POST',
              data: instance.formData,
              processData: false,
              contentType: false
            }).done(function () {
              instance.$sendMessageContainer.addClass('d-none');
              instance.$h6.addClass('d-none');
              instance.$sendMessageConfirmation.removeClass('d-none');
            }).fail(function () {
              console.log('Error sending message.');
            });
          }
        });
      }
    }]);

    return KbfSendMessage;
  }(KbfForm);

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

  var KbfLikeCompany = function KbfLikeCompany() {
    _classCallCheck(this, KbfLikeCompany);

    var $ = window.$;

    window.KbfLikeCompany = function () {
      return {
        disabled: false,
        currentFavouriteCompanies: [],
        init: function init() {
          var favouriteCompanies = localStorage.getItem('favourite-companies');
          if (favouriteCompanies) this.currentFavouriteCompanies = _toConsumableArray(JSON.parse(favouriteCompanies));
          var ids = this.currentFavouriteCompanies.map(function (companyData) {
            return companyData.company_id;
          });

          if (ids.indexOf(Number(this.$refs.anchor.dataset.companyId)) >= 0) {
            this.disabled = true;
            $(this.$refs.anchor).tooltip('hide');
            $(this.$refs.anchor).tooltip('disable');
          }
        },
        capitalize: function capitalize(string) {
          return string.trim().split(' ').map(function (word) {
            return word.charAt(0).toUpperCase() + word.slice(1);
          }).join(' ').split('-').map(function (word) {
            return word.charAt(0).toUpperCase() + word.slice(1);
          }).join('-');
        },
        addToFavourites: function addToFavourites(e) {
          var instance = this;

          if (!this.disabled) {
            $.get("".concat(config.apiEndpoint, "api/get-company/?company_id=").concat(e.target.parentElement.dataset.companyId)).done(function (res) {
              var favouriteCompanies = localStorage.getItem('favourite-companies');
              if (favouriteCompanies) instance.currentFavouriteCompanies = _toConsumableArray(JSON.parse(favouriteCompanies));
              instance.currentFavouriteCompanies.push({
                company_id: res.company_id,
                company_url: location.protocol + '//' + location.hostname + res.company_url,
                company_logo_url: location.protocol + '//' + location.hostname + res.company_logo_url,
                company_name: instance.capitalize(res.company_name.toLowerCase()),
                company_address: instance.capitalize(res.company_address.toLowerCase()),
                company_zip: res.company_zip,
                company_city: res.company_city.charAt(0) + res.company_city.slice(1).toLowerCase(),
                company_phone_1: res.company_phone_1.replace('0-', ''),
                company_phone_2: res.company_phone_2.replace('0-', ''),
                company_fax: res.company_fax.replace('0-', '')
              });
              localStorage.setItem('favourite-companies', JSON.stringify(instance.currentFavouriteCompanies));
              instance.disabled = true;
              $(e.target.parentElement).tooltip('hide');
              $(e.target.parentElement).tooltip('disable');
            });
          }
        }
      };
    };
  };

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;

  var __markAsModule = function __markAsModule(target) {
    return __defProp(target, "__esModule", {
      value: true
    });
  };

  var __commonJS = function __commonJS(callback, module) {
    return function () {
      if (!module) {
        module = {
          exports: {}
        };
        callback(module.exports, module);
      }

      return module.exports;
    };
  };

  var __exportStar = function __exportStar(target, module, desc) {
    if (module && _typeof(module) === "object" || typeof module === "function") {
      var _iterator = _createForOfIteratorHelper(__getOwnPropNames(module)),
          _step;

      try {
        var _loop = function _loop() {
          var key = _step.value;
          if (!__hasOwnProp.call(target, key) && key !== "default") __defProp(target, key, {
            get: function get() {
              return module[key];
            },
            enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable
          });
        };

        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }

    return target;
  };

  var __toModule = function __toModule(module) {
    return __exportStar(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? {
      get: function get() {
        return module.default;
      },
      enumerable: true
    } : {
      value: module,
      enumerable: true
    })), module);
  }; // node_modules/@vue/shared/dist/shared.cjs.js


  var require_shared_cjs = __commonJS(function (exports) {

    var _PatchFlagNames, _slotFlagsText;

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    function makeMap(str, expectsLowerCase) {
      var map = Object.create(null);
      var list = str.split(",");

      for (var i = 0; i < list.length; i++) {
        map[list[i]] = true;
      }

      return expectsLowerCase ? function (val) {
        return !!map[val.toLowerCase()];
      } : function (val) {
        return !!map[val];
      };
    }

    var PatchFlagNames = (_PatchFlagNames = {}, _defineProperty(_PatchFlagNames, 1, "TEXT"), _defineProperty(_PatchFlagNames, 2, "CLASS"), _defineProperty(_PatchFlagNames, 4, "STYLE"), _defineProperty(_PatchFlagNames, 8, "PROPS"), _defineProperty(_PatchFlagNames, 16, "FULL_PROPS"), _defineProperty(_PatchFlagNames, 32, "HYDRATE_EVENTS"), _defineProperty(_PatchFlagNames, 64, "STABLE_FRAGMENT"), _defineProperty(_PatchFlagNames, 128, "KEYED_FRAGMENT"), _defineProperty(_PatchFlagNames, 256, "UNKEYED_FRAGMENT"), _defineProperty(_PatchFlagNames, 512, "NEED_PATCH"), _defineProperty(_PatchFlagNames, 1024, "DYNAMIC_SLOTS"), _defineProperty(_PatchFlagNames, 2048, "DEV_ROOT_FRAGMENT"), _defineProperty(_PatchFlagNames, -1, "HOISTED"), _defineProperty(_PatchFlagNames, -2, "BAIL"), _PatchFlagNames);
    var slotFlagsText = (_slotFlagsText = {}, _defineProperty(_slotFlagsText, 1, "STABLE"), _defineProperty(_slotFlagsText, 2, "DYNAMIC"), _defineProperty(_slotFlagsText, 3, "FORWARDED"), _slotFlagsText);
    var GLOBALS_WHITE_LISTED = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt";
    var isGloballyWhitelisted = /* @__PURE__ */makeMap(GLOBALS_WHITE_LISTED);
    var range = 2;

    function generateCodeFrame(source) {
      var start2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : source.length;
      var lines = source.split(/\r?\n/);
      var count = 0;
      var res = [];

      for (var i = 0; i < lines.length; i++) {
        count += lines[i].length + 1;

        if (count >= start2) {
          for (var j = i - range; j <= i + range || end > count; j++) {
            if (j < 0 || j >= lines.length) continue;
            var line = j + 1;
            res.push("".concat(line).concat(" ".repeat(Math.max(3 - String(line).length, 0)), "|  ").concat(lines[j]));
            var lineLength = lines[j].length;

            if (j === i) {
              var pad = start2 - (count - lineLength) + 1;
              var length = Math.max(1, end > count ? lineLength - pad : end - start2);
              res.push("   |  " + " ".repeat(pad) + "^".repeat(length));
            } else if (j > i) {
              if (end > count) {
                var _length = Math.max(Math.min(end - count, lineLength), 1);

                res.push("   |  " + "^".repeat(_length));
              }

              count += lineLength + 1;
            }
          }

          break;
        }
      }

      return res.join("\n");
    }

    var specialBooleanAttrs = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly";
    var isSpecialBooleanAttr = /* @__PURE__ */makeMap(specialBooleanAttrs);
    var isBooleanAttr2 = /* @__PURE__ */makeMap(specialBooleanAttrs + ",async,autofocus,autoplay,controls,default,defer,disabled,hidden,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected");
    var unsafeAttrCharRE = /[>/="'\u0009\u000a\u000c\u0020]/;
    var attrValidationCache = {};

    function isSSRSafeAttrName(name) {
      if (attrValidationCache.hasOwnProperty(name)) {
        return attrValidationCache[name];
      }

      var isUnsafe = unsafeAttrCharRE.test(name);

      if (isUnsafe) {
        console.error("unsafe attribute name: ".concat(name));
      }

      return attrValidationCache[name] = !isUnsafe;
    }

    var propsToAttrMap = {
      acceptCharset: "accept-charset",
      className: "class",
      htmlFor: "for",
      httpEquiv: "http-equiv"
    };
    var isNoUnitNumericStyleProp = /* @__PURE__ */makeMap("animation-iteration-count,border-image-outset,border-image-slice,border-image-width,box-flex,box-flex-group,box-ordinal-group,column-count,columns,flex,flex-grow,flex-positive,flex-shrink,flex-negative,flex-order,grid-row,grid-row-end,grid-row-span,grid-row-start,grid-column,grid-column-end,grid-column-span,grid-column-start,font-weight,line-clamp,line-height,opacity,order,orphans,tab-size,widows,z-index,zoom,fill-opacity,flood-opacity,stop-opacity,stroke-dasharray,stroke-dashoffset,stroke-miterlimit,stroke-opacity,stroke-width");
    var isKnownAttr = /* @__PURE__ */makeMap("accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap");

    function normalizeStyle(value) {
      if (isArray(value)) {
        var res = {};

        for (var i = 0; i < value.length; i++) {
          var item = value[i];
          var normalized = normalizeStyle(isString(item) ? parseStringStyle(item) : item);

          if (normalized) {
            for (var key in normalized) {
              res[key] = normalized[key];
            }
          }
        }

        return res;
      } else if (isObject(value)) {
        return value;
      }
    }

    var listDelimiterRE = /;(?![^(]*\))/g;
    var propertyDelimiterRE = /:(.+)/;

    function parseStringStyle(cssText) {
      var ret = {};
      cssText.split(listDelimiterRE).forEach(function (item) {
        if (item) {
          var tmp = item.split(propertyDelimiterRE);
          tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
        }
      });
      return ret;
    }

    function stringifyStyle(styles) {
      var ret = "";

      if (!styles) {
        return ret;
      }

      for (var key in styles) {
        var value = styles[key];
        var normalizedKey = key.startsWith("--") ? key : hyphenate(key);

        if (isString(value) || typeof value === "number" && isNoUnitNumericStyleProp(normalizedKey)) {
          ret += "".concat(normalizedKey, ":").concat(value, ";");
        }
      }

      return ret;
    }

    function normalizeClass(value) {
      var res = "";

      if (isString(value)) {
        res = value;
      } else if (isArray(value)) {
        for (var i = 0; i < value.length; i++) {
          var normalized = normalizeClass(value[i]);

          if (normalized) {
            res += normalized + " ";
          }
        }
      } else if (isObject(value)) {
        for (var name in value) {
          if (value[name]) {
            res += name + " ";
          }
        }
      }

      return res.trim();
    }

    var HTML_TAGS = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot";
    var SVG_TAGS = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view";
    var VOID_TAGS = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr";
    var isHTMLTag = /* @__PURE__ */makeMap(HTML_TAGS);
    var isSVGTag = /* @__PURE__ */makeMap(SVG_TAGS);
    var isVoidTag = /* @__PURE__ */makeMap(VOID_TAGS);
    var escapeRE = /["'&<>]/;

    function escapeHtml(string) {
      var str = "" + string;
      var match = escapeRE.exec(str);

      if (!match) {
        return str;
      }

      var html = "";
      var escaped;
      var index;
      var lastIndex = 0;

      for (index = match.index; index < str.length; index++) {
        switch (str.charCodeAt(index)) {
          case 34:
            escaped = "&quot;";
            break;

          case 38:
            escaped = "&amp;";
            break;

          case 39:
            escaped = "&#39;";
            break;

          case 60:
            escaped = "&lt;";
            break;

          case 62:
            escaped = "&gt;";
            break;

          default:
            continue;
        }

        if (lastIndex !== index) {
          html += str.substring(lastIndex, index);
        }

        lastIndex = index + 1;
        html += escaped;
      }

      return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
    }

    var commentStripRE = /^-?>|<!--|-->|--!>|<!-$/g;

    function escapeHtmlComment(src) {
      return src.replace(commentStripRE, "");
    }

    function looseCompareArrays(a, b) {
      if (a.length !== b.length) return false;
      var equal = true;

      for (var i = 0; equal && i < a.length; i++) {
        equal = looseEqual(a[i], b[i]);
      }

      return equal;
    }

    function looseEqual(a, b) {
      if (a === b) return true;
      var aValidType = isDate(a);
      var bValidType = isDate(b);

      if (aValidType || bValidType) {
        return aValidType && bValidType ? a.getTime() === b.getTime() : false;
      }

      aValidType = isArray(a);
      bValidType = isArray(b);

      if (aValidType || bValidType) {
        return aValidType && bValidType ? looseCompareArrays(a, b) : false;
      }

      aValidType = isObject(a);
      bValidType = isObject(b);

      if (aValidType || bValidType) {
        if (!aValidType || !bValidType) {
          return false;
        }

        var aKeysCount = Object.keys(a).length;
        var bKeysCount = Object.keys(b).length;

        if (aKeysCount !== bKeysCount) {
          return false;
        }

        for (var key in a) {
          var aHasKey = a.hasOwnProperty(key);
          var bHasKey = b.hasOwnProperty(key);

          if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key])) {
            return false;
          }
        }
      }

      return String(a) === String(b);
    }

    function looseIndexOf(arr, val) {
      return arr.findIndex(function (item) {
        return looseEqual(item, val);
      });
    }

    var toDisplayString = function toDisplayString(val) {
      return val == null ? "" : isObject(val) ? JSON.stringify(val, replacer, 2) : String(val);
    };

    var replacer = function replacer(_key, val) {
      if (isMap(val)) {
        return _defineProperty({}, "Map(".concat(val.size, ")"), _toConsumableArray(val.entries()).reduce(function (entries, _ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              key = _ref2[0],
              val2 = _ref2[1];

          entries["".concat(key, " =>")] = val2;
          return entries;
        }, {}));
      } else if (isSet(val)) {
        return _defineProperty({}, "Set(".concat(val.size, ")"), _toConsumableArray(val.values()));
      } else if (isObject(val) && !isArray(val) && !isPlainObject(val)) {
        return String(val);
      }

      return val;
    };

    var babelParserDefaultPlugins = ["bigInt", "optionalChaining", "nullishCoalescingOperator"];
    var EMPTY_OBJ = Object.freeze({});
    var EMPTY_ARR = Object.freeze([]);

    var NOOP = function NOOP() {};

    var NO = function NO() {
      return false;
    };

    var onRE = /^on[^a-z]/;

    var isOn = function isOn(key) {
      return onRE.test(key);
    };

    var isModelListener = function isModelListener(key) {
      return key.startsWith("onUpdate:");
    };

    var extend = Object.assign;

    var remove = function remove(arr, el) {
      var i = arr.indexOf(el);

      if (i > -1) {
        arr.splice(i, 1);
      }
    };

    var hasOwnProperty = Object.prototype.hasOwnProperty;

    var hasOwn = function hasOwn(val, key) {
      return hasOwnProperty.call(val, key);
    };

    var isArray = Array.isArray;

    var isMap = function isMap(val) {
      return toTypeString(val) === "[object Map]";
    };

    var isSet = function isSet(val) {
      return toTypeString(val) === "[object Set]";
    };

    var isDate = function isDate(val) {
      return val instanceof Date;
    };

    var isFunction = function isFunction(val) {
      return typeof val === "function";
    };

    var isString = function isString(val) {
      return typeof val === "string";
    };

    var isSymbol = function isSymbol(val) {
      return _typeof(val) === "symbol";
    };

    var isObject = function isObject(val) {
      return val !== null && _typeof(val) === "object";
    };

    var isPromise = function isPromise(val) {
      return isObject(val) && isFunction(val.then) && isFunction(val.catch);
    };

    var objectToString = Object.prototype.toString;

    var toTypeString = function toTypeString(value) {
      return objectToString.call(value);
    };

    var toRawType = function toRawType(value) {
      return toTypeString(value).slice(8, -1);
    };

    var isPlainObject = function isPlainObject(val) {
      return toTypeString(val) === "[object Object]";
    };

    var isIntegerKey = function isIntegerKey(key) {
      return isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
    };

    var isReservedProp = /* @__PURE__ */makeMap(",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");

    var cacheStringFunction = function cacheStringFunction(fn) {
      var cache = Object.create(null);
      return function (str) {
        var hit = cache[str];
        return hit || (cache[str] = fn(str));
      };
    };

    var camelizeRE = /-(\w)/g;
    var camelize = cacheStringFunction(function (str) {
      return str.replace(camelizeRE, function (_, c) {
        return c ? c.toUpperCase() : "";
      });
    });
    var hyphenateRE = /\B([A-Z])/g;
    var hyphenate = cacheStringFunction(function (str) {
      return str.replace(hyphenateRE, "-$1").toLowerCase();
    });
    var capitalize = cacheStringFunction(function (str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    });
    var toHandlerKey = cacheStringFunction(function (str) {
      return str ? "on".concat(capitalize(str)) : "";
    });

    var hasChanged = function hasChanged(value, oldValue) {
      return value !== oldValue && (value === value || oldValue === oldValue);
    };

    var invokeArrayFns = function invokeArrayFns(fns, arg) {
      for (var i = 0; i < fns.length; i++) {
        fns[i](arg);
      }
    };

    var def = function def(obj, key, value) {
      Object.defineProperty(obj, key, {
        configurable: true,
        enumerable: false,
        value: value
      });
    };

    var toNumber = function toNumber(val) {
      var n = parseFloat(val);
      return isNaN(n) ? val : n;
    };

    var _globalThis;

    var getGlobalThis = function getGlobalThis() {
      return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
    };

    exports.EMPTY_ARR = EMPTY_ARR;
    exports.EMPTY_OBJ = EMPTY_OBJ;
    exports.NO = NO;
    exports.NOOP = NOOP;
    exports.PatchFlagNames = PatchFlagNames;
    exports.babelParserDefaultPlugins = babelParserDefaultPlugins;
    exports.camelize = camelize;
    exports.capitalize = capitalize;
    exports.def = def;
    exports.escapeHtml = escapeHtml;
    exports.escapeHtmlComment = escapeHtmlComment;
    exports.extend = extend;
    exports.generateCodeFrame = generateCodeFrame;
    exports.getGlobalThis = getGlobalThis;
    exports.hasChanged = hasChanged;
    exports.hasOwn = hasOwn;
    exports.hyphenate = hyphenate;
    exports.invokeArrayFns = invokeArrayFns;
    exports.isArray = isArray;
    exports.isBooleanAttr = isBooleanAttr2;
    exports.isDate = isDate;
    exports.isFunction = isFunction;
    exports.isGloballyWhitelisted = isGloballyWhitelisted;
    exports.isHTMLTag = isHTMLTag;
    exports.isIntegerKey = isIntegerKey;
    exports.isKnownAttr = isKnownAttr;
    exports.isMap = isMap;
    exports.isModelListener = isModelListener;
    exports.isNoUnitNumericStyleProp = isNoUnitNumericStyleProp;
    exports.isObject = isObject;
    exports.isOn = isOn;
    exports.isPlainObject = isPlainObject;
    exports.isPromise = isPromise;
    exports.isReservedProp = isReservedProp;
    exports.isSSRSafeAttrName = isSSRSafeAttrName;
    exports.isSVGTag = isSVGTag;
    exports.isSet = isSet;
    exports.isSpecialBooleanAttr = isSpecialBooleanAttr;
    exports.isString = isString;
    exports.isSymbol = isSymbol;
    exports.isVoidTag = isVoidTag;
    exports.looseEqual = looseEqual;
    exports.looseIndexOf = looseIndexOf;
    exports.makeMap = makeMap;
    exports.normalizeClass = normalizeClass;
    exports.normalizeStyle = normalizeStyle;
    exports.objectToString = objectToString;
    exports.parseStringStyle = parseStringStyle;
    exports.propsToAttrMap = propsToAttrMap;
    exports.remove = remove;
    exports.slotFlagsText = slotFlagsText;
    exports.stringifyStyle = stringifyStyle;
    exports.toDisplayString = toDisplayString;
    exports.toHandlerKey = toHandlerKey;
    exports.toNumber = toNumber;
    exports.toRawType = toRawType;
    exports.toTypeString = toTypeString;
  }); // node_modules/@vue/shared/index.js


  var require_shared = __commonJS(function (exports, module) {

    {
      module.exports = require_shared_cjs();
    }
  }); // node_modules/@vue/reactivity/dist/reactivity.cjs.js


  var require_reactivity_cjs = __commonJS(function (exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var shared = require_shared();
    var targetMap = new WeakMap();
    var effectStack = [];
    var activeEffect;
    var ITERATE_KEY = Symbol("iterate");
    var MAP_KEY_ITERATE_KEY = Symbol("Map key iterate");

    function isEffect(fn) {
      return fn && fn._isEffect === true;
    }

    function effect3(fn) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : shared.EMPTY_OBJ;

      if (isEffect(fn)) {
        fn = fn.raw;
      }

      var effect4 = createReactiveEffect(fn, options);

      if (!options.lazy) {
        effect4();
      }

      return effect4;
    }

    function stop2(effect4) {
      if (effect4.active) {
        cleanup(effect4);

        if (effect4.options.onStop) {
          effect4.options.onStop();
        }

        effect4.active = false;
      }
    }

    var uid = 0;

    function createReactiveEffect(fn, options) {
      var effect4 = function reactiveEffect() {
        if (!effect4.active) {
          return fn();
        }

        if (!effectStack.includes(effect4)) {
          cleanup(effect4);

          try {
            enableTracking();
            effectStack.push(effect4);
            activeEffect = effect4;
            return fn();
          } finally {
            effectStack.pop();
            resetTracking();
            activeEffect = effectStack[effectStack.length - 1];
          }
        }
      };

      effect4.id = uid++;
      effect4.allowRecurse = !!options.allowRecurse;
      effect4._isEffect = true;
      effect4.active = true;
      effect4.raw = fn;
      effect4.deps = [];
      effect4.options = options;
      return effect4;
    }

    function cleanup(effect4) {
      var deps = effect4.deps;

      if (deps.length) {
        for (var i = 0; i < deps.length; i++) {
          deps[i].delete(effect4);
        }

        deps.length = 0;
      }
    }

    var shouldTrack = true;
    var trackStack = [];

    function pauseTracking() {
      trackStack.push(shouldTrack);
      shouldTrack = false;
    }

    function enableTracking() {
      trackStack.push(shouldTrack);
      shouldTrack = true;
    }

    function resetTracking() {
      var last = trackStack.pop();
      shouldTrack = last === void 0 ? true : last;
    }

    function track(target, type, key) {
      if (!shouldTrack || activeEffect === void 0) {
        return;
      }

      var depsMap = targetMap.get(target);

      if (!depsMap) {
        targetMap.set(target, depsMap = new Map());
      }

      var dep = depsMap.get(key);

      if (!dep) {
        depsMap.set(key, dep = new Set());
      }

      if (!dep.has(activeEffect)) {
        dep.add(activeEffect);
        activeEffect.deps.push(dep);

        if (activeEffect.options.onTrack) {
          activeEffect.options.onTrack({
            effect: activeEffect,
            target: target,
            type: type,
            key: key
          });
        }
      }
    }

    function trigger(target, type, key, newValue, oldValue, oldTarget) {
      var depsMap = targetMap.get(target);

      if (!depsMap) {
        return;
      }

      var effects = new Set();

      var add2 = function add2(effectsToAdd) {
        if (effectsToAdd) {
          effectsToAdd.forEach(function (effect4) {
            if (effect4 !== activeEffect || effect4.allowRecurse) {
              effects.add(effect4);
            }
          });
        }
      };

      if (type === "clear") {
        depsMap.forEach(add2);
      } else if (key === "length" && shared.isArray(target)) {
        depsMap.forEach(function (dep, key2) {
          if (key2 === "length" || key2 >= newValue) {
            add2(dep);
          }
        });
      } else {
        if (key !== void 0) {
          add2(depsMap.get(key));
        }

        switch (type) {
          case "add":
            if (!shared.isArray(target)) {
              add2(depsMap.get(ITERATE_KEY));

              if (shared.isMap(target)) {
                add2(depsMap.get(MAP_KEY_ITERATE_KEY));
              }
            } else if (shared.isIntegerKey(key)) {
              add2(depsMap.get("length"));
            }

            break;

          case "delete":
            if (!shared.isArray(target)) {
              add2(depsMap.get(ITERATE_KEY));

              if (shared.isMap(target)) {
                add2(depsMap.get(MAP_KEY_ITERATE_KEY));
              }
            }

            break;

          case "set":
            if (shared.isMap(target)) {
              add2(depsMap.get(ITERATE_KEY));
            }

            break;
        }
      }

      var run = function run(effect4) {
        if (effect4.options.onTrigger) {
          effect4.options.onTrigger({
            effect: effect4,
            target: target,
            key: key,
            type: type,
            newValue: newValue,
            oldValue: oldValue,
            oldTarget: oldTarget
          });
        }

        if (effect4.options.scheduler) {
          effect4.options.scheduler(effect4);
        } else {
          effect4();
        }
      };

      effects.forEach(run);
    }

    var isNonTrackableKeys = /* @__PURE__ */shared.makeMap("__proto__,__v_isRef,__isVue");
    var builtInSymbols = new Set(Object.getOwnPropertyNames(Symbol).map(function (key) {
      return Symbol[key];
    }).filter(shared.isSymbol));
    var get2 = /* @__PURE__ */createGetter();
    var shallowGet = /* @__PURE__ */createGetter(false, true);
    var readonlyGet = /* @__PURE__ */createGetter(true);
    var shallowReadonlyGet = /* @__PURE__ */createGetter(true, true);
    var arrayInstrumentations = {};
    ["includes", "indexOf", "lastIndexOf"].forEach(function (key) {
      var method = Array.prototype[key];

      arrayInstrumentations[key] = function () {
        var arr = toRaw2(this);

        for (var i = 0, l = this.length; i < l; i++) {
          track(arr, "get", i + "");
        }

        for (var _len = arguments.length, args = new Array(_len), _key2 = 0; _key2 < _len; _key2++) {
          args[_key2] = arguments[_key2];
        }

        var res = method.apply(arr, args);

        if (res === -1 || res === false) {
          return method.apply(arr, args.map(toRaw2));
        } else {
          return res;
        }
      };
    });
    ["push", "pop", "shift", "unshift", "splice"].forEach(function (key) {
      var method = Array.prototype[key];

      arrayInstrumentations[key] = function () {
        pauseTracking();

        for (var _len2 = arguments.length, args = new Array(_len2), _key3 = 0; _key3 < _len2; _key3++) {
          args[_key3] = arguments[_key3];
        }

        var res = method.apply(this, args);
        resetTracking();
        return res;
      };
    });

    function createGetter() {
      var isReadonly2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var shallow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return function get3(target, key, receiver) {
        if (key === "__v_isReactive") {
          return !isReadonly2;
        } else if (key === "__v_isReadonly") {
          return isReadonly2;
        } else if (key === "__v_raw" && receiver === (isReadonly2 ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) {
          return target;
        }

        var targetIsArray = shared.isArray(target);

        if (!isReadonly2 && targetIsArray && shared.hasOwn(arrayInstrumentations, key)) {
          return Reflect.get(arrayInstrumentations, key, receiver);
        }

        var res = Reflect.get(target, key, receiver);

        if (shared.isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
          return res;
        }

        if (!isReadonly2) {
          track(target, "get", key);
        }

        if (shallow) {
          return res;
        }

        if (isRef(res)) {
          var shouldUnwrap = !targetIsArray || !shared.isIntegerKey(key);
          return shouldUnwrap ? res.value : res;
        }

        if (shared.isObject(res)) {
          return isReadonly2 ? readonly(res) : reactive3(res);
        }

        return res;
      };
    }

    var set2 = /* @__PURE__ */createSetter();
    var shallowSet = /* @__PURE__ */createSetter(true);

    function createSetter() {
      var shallow = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      return function set3(target, key, value, receiver) {
        var oldValue = target[key];

        if (!shallow) {
          value = toRaw2(value);
          oldValue = toRaw2(oldValue);

          if (!shared.isArray(target) && isRef(oldValue) && !isRef(value)) {
            oldValue.value = value;
            return true;
          }
        }

        var hadKey = shared.isArray(target) && shared.isIntegerKey(key) ? Number(key) < target.length : shared.hasOwn(target, key);
        var result = Reflect.set(target, key, value, receiver);

        if (target === toRaw2(receiver)) {
          if (!hadKey) {
            trigger(target, "add", key, value);
          } else if (shared.hasChanged(value, oldValue)) {
            trigger(target, "set", key, value, oldValue);
          }
        }

        return result;
      };
    }

    function deleteProperty(target, key) {
      var hadKey = shared.hasOwn(target, key);
      var oldValue = target[key];
      var result = Reflect.deleteProperty(target, key);

      if (result && hadKey) {
        trigger(target, "delete", key, void 0, oldValue);
      }

      return result;
    }

    function has(target, key) {
      var result = Reflect.has(target, key);

      if (!shared.isSymbol(key) || !builtInSymbols.has(key)) {
        track(target, "has", key);
      }

      return result;
    }

    function ownKeys(target) {
      track(target, "iterate", shared.isArray(target) ? "length" : ITERATE_KEY);
      return Reflect.ownKeys(target);
    }

    var mutableHandlers = {
      get: get2,
      set: set2,
      deleteProperty: deleteProperty,
      has: has,
      ownKeys: ownKeys
    };
    var readonlyHandlers = {
      get: readonlyGet,
      set: function set(target, key) {
        {
          console.warn("Set operation on key \"".concat(String(key), "\" failed: target is readonly."), target);
        }
        return true;
      },
      deleteProperty: function deleteProperty(target, key) {
        {
          console.warn("Delete operation on key \"".concat(String(key), "\" failed: target is readonly."), target);
        }
        return true;
      }
    };
    var shallowReactiveHandlers = shared.extend({}, mutableHandlers, {
      get: shallowGet,
      set: shallowSet
    });
    var shallowReadonlyHandlers = shared.extend({}, readonlyHandlers, {
      get: shallowReadonlyGet
    });

    var toReactive = function toReactive(value) {
      return shared.isObject(value) ? reactive3(value) : value;
    };

    var toReadonly = function toReadonly(value) {
      return shared.isObject(value) ? readonly(value) : value;
    };

    var toShallow = function toShallow(value) {
      return value;
    };

    var getProto = function getProto(v) {
      return Reflect.getPrototypeOf(v);
    };

    function get$1(target, key) {
      var isReadonly2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var isShallow = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      target = target["__v_raw"];
      var rawTarget = toRaw2(target);
      var rawKey = toRaw2(key);

      if (key !== rawKey) {
        !isReadonly2 && track(rawTarget, "get", key);
      }

      !isReadonly2 && track(rawTarget, "get", rawKey);

      var _getProto = getProto(rawTarget),
          has2 = _getProto.has;

      var wrap = isShallow ? toShallow : isReadonly2 ? toReadonly : toReactive;

      if (has2.call(rawTarget, key)) {
        return wrap(target.get(key));
      } else if (has2.call(rawTarget, rawKey)) {
        return wrap(target.get(rawKey));
      } else if (target !== rawTarget) {
        target.get(key);
      }
    }

    function has$1(key) {
      var isReadonly2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var target = this["__v_raw"];
      var rawTarget = toRaw2(target);
      var rawKey = toRaw2(key);

      if (key !== rawKey) {
        !isReadonly2 && track(rawTarget, "has", key);
      }

      !isReadonly2 && track(rawTarget, "has", rawKey);
      return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
    }

    function size(target) {
      var isReadonly2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      target = target["__v_raw"];
      !isReadonly2 && track(toRaw2(target), "iterate", ITERATE_KEY);
      return Reflect.get(target, "size", target);
    }

    function add(value) {
      value = toRaw2(value);
      var target = toRaw2(this);
      var proto = getProto(target);
      var hadKey = proto.has.call(target, value);

      if (!hadKey) {
        target.add(value);
        trigger(target, "add", value, value);
      }

      return this;
    }

    function set$1(key, value) {
      value = toRaw2(value);
      var target = toRaw2(this);

      var _getProto2 = getProto(target),
          has2 = _getProto2.has,
          get3 = _getProto2.get;

      var hadKey = has2.call(target, key);

      if (!hadKey) {
        key = toRaw2(key);
        hadKey = has2.call(target, key);
      } else {
        checkIdentityKeys(target, has2, key);
      }

      var oldValue = get3.call(target, key);
      target.set(key, value);

      if (!hadKey) {
        trigger(target, "add", key, value);
      } else if (shared.hasChanged(value, oldValue)) {
        trigger(target, "set", key, value, oldValue);
      }

      return this;
    }

    function deleteEntry(key) {
      var target = toRaw2(this);

      var _getProto3 = getProto(target),
          has2 = _getProto3.has,
          get3 = _getProto3.get;

      var hadKey = has2.call(target, key);

      if (!hadKey) {
        key = toRaw2(key);
        hadKey = has2.call(target, key);
      } else {
        checkIdentityKeys(target, has2, key);
      }

      var oldValue = get3 ? get3.call(target, key) : void 0;
      var result = target.delete(key);

      if (hadKey) {
        trigger(target, "delete", key, void 0, oldValue);
      }

      return result;
    }

    function clear() {
      var target = toRaw2(this);
      var hadItems = target.size !== 0;
      var oldTarget = shared.isMap(target) ? new Map(target) : new Set(target);
      var result = target.clear();

      if (hadItems) {
        trigger(target, "clear", void 0, void 0, oldTarget);
      }

      return result;
    }

    function createForEach(isReadonly2, isShallow) {
      return function forEach(callback, thisArg) {
        var observed = this;
        var target = observed["__v_raw"];
        var rawTarget = toRaw2(target);
        var wrap = isShallow ? toShallow : isReadonly2 ? toReadonly : toReactive;
        !isReadonly2 && track(rawTarget, "iterate", ITERATE_KEY);
        return target.forEach(function (value, key) {
          return callback.call(thisArg, wrap(value), wrap(key), observed);
        });
      };
    }

    function createIterableMethod(method, isReadonly2, isShallow) {
      return function () {
        var target = this["__v_raw"];
        var rawTarget = toRaw2(target);
        var targetIsMap = shared.isMap(rawTarget);
        var isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
        var isKeyOnly = method === "keys" && targetIsMap;
        var innerIterator = target[method].apply(target, arguments);
        var wrap = isShallow ? toShallow : isReadonly2 ? toReadonly : toReactive;
        !isReadonly2 && track(rawTarget, "iterate", isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
        return _defineProperty({
          next: function next() {
            var _innerIterator$next = innerIterator.next(),
                value = _innerIterator$next.value,
                done = _innerIterator$next.done;

            return done ? {
              value: value,
              done: done
            } : {
              value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
              done: done
            };
          }
        }, Symbol.iterator, function () {
          return this;
        });
      };
    }

    function createReadonlyMethod(type) {
      return function () {
        {
          var key = (arguments.length <= 0 ? undefined : arguments[0]) ? "on key \"".concat(arguments.length <= 0 ? undefined : arguments[0], "\" ") : "";
          console.warn("".concat(shared.capitalize(type), " operation ").concat(key, "failed: target is readonly."), toRaw2(this));
        }
        return type === "delete" ? false : this;
      };
    }

    var mutableInstrumentations = {
      get: function get(key) {
        return get$1(this, key);
      },

      get size() {
        return size(this);
      },

      has: has$1,
      add: add,
      set: set$1,
      delete: deleteEntry,
      clear: clear,
      forEach: createForEach(false, false)
    };
    var shallowInstrumentations = {
      get: function get(key) {
        return get$1(this, key, false, true);
      },

      get size() {
        return size(this);
      },

      has: has$1,
      add: add,
      set: set$1,
      delete: deleteEntry,
      clear: clear,
      forEach: createForEach(false, true)
    };
    var readonlyInstrumentations = {
      get: function get(key) {
        return get$1(this, key, true);
      },

      get size() {
        return size(this, true);
      },

      has: function has(key) {
        return has$1.call(this, key, true);
      },
      add: createReadonlyMethod("add"),
      set: createReadonlyMethod("set"),
      delete: createReadonlyMethod("delete"),
      clear: createReadonlyMethod("clear"),
      forEach: createForEach(true, false)
    };
    var shallowReadonlyInstrumentations = {
      get: function get(key) {
        return get$1(this, key, true, true);
      },

      get size() {
        return size(this, true);
      },

      has: function has(key) {
        return has$1.call(this, key, true);
      },
      add: createReadonlyMethod("add"),
      set: createReadonlyMethod("set"),
      delete: createReadonlyMethod("delete"),
      clear: createReadonlyMethod("clear"),
      forEach: createForEach(true, true)
    };
    var iteratorMethods = ["keys", "values", "entries", Symbol.iterator];
    iteratorMethods.forEach(function (method) {
      mutableInstrumentations[method] = createIterableMethod(method, false, false);
      readonlyInstrumentations[method] = createIterableMethod(method, true, false);
      shallowInstrumentations[method] = createIterableMethod(method, false, true);
      shallowReadonlyInstrumentations[method] = createIterableMethod(method, true, true);
    });

    function createInstrumentationGetter(isReadonly2, shallow) {
      var instrumentations = shallow ? isReadonly2 ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly2 ? readonlyInstrumentations : mutableInstrumentations;
      return function (target, key, receiver) {
        if (key === "__v_isReactive") {
          return !isReadonly2;
        } else if (key === "__v_isReadonly") {
          return isReadonly2;
        } else if (key === "__v_raw") {
          return target;
        }

        return Reflect.get(shared.hasOwn(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
      };
    }

    var mutableCollectionHandlers = {
      get: createInstrumentationGetter(false, false)
    };
    var shallowCollectionHandlers = {
      get: createInstrumentationGetter(false, true)
    };
    var readonlyCollectionHandlers = {
      get: createInstrumentationGetter(true, false)
    };
    var shallowReadonlyCollectionHandlers = {
      get: createInstrumentationGetter(true, true)
    };

    function checkIdentityKeys(target, has2, key) {
      var rawKey = toRaw2(key);

      if (rawKey !== key && has2.call(target, rawKey)) {
        var type = shared.toRawType(target);
        console.warn("Reactive ".concat(type, " contains both the raw and reactive versions of the same object").concat(type === "Map" ? " as keys" : "", ", which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible."));
      }
    }

    var reactiveMap = new WeakMap();
    var shallowReactiveMap = new WeakMap();
    var readonlyMap = new WeakMap();
    var shallowReadonlyMap = new WeakMap();

    function targetTypeMap(rawType) {
      switch (rawType) {
        case "Object":
        case "Array":
          return 1;

        case "Map":
        case "Set":
        case "WeakMap":
        case "WeakSet":
          return 2;

        default:
          return 0;
      }
    }

    function getTargetType(value) {
      return value["__v_skip"] || !Object.isExtensible(value) ? 0 : targetTypeMap(shared.toRawType(value));
    }

    function reactive3(target) {
      if (target && target["__v_isReadonly"]) {
        return target;
      }

      return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
    }

    function shallowReactive(target) {
      return createReactiveObject(target, false, shallowReactiveHandlers, shallowCollectionHandlers, shallowReactiveMap);
    }

    function readonly(target) {
      return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
    }

    function shallowReadonly(target) {
      return createReactiveObject(target, true, shallowReadonlyHandlers, shallowReadonlyCollectionHandlers, shallowReadonlyMap);
    }

    function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
      if (!shared.isObject(target)) {
        {
          console.warn("value cannot be made reactive: ".concat(String(target)));
        }
        return target;
      }

      if (target["__v_raw"] && !(isReadonly2 && target["__v_isReactive"])) {
        return target;
      }

      var existingProxy = proxyMap.get(target);

      if (existingProxy) {
        return existingProxy;
      }

      var targetType = getTargetType(target);

      if (targetType === 0) {
        return target;
      }

      var proxy = new Proxy(target, targetType === 2 ? collectionHandlers : baseHandlers);
      proxyMap.set(target, proxy);
      return proxy;
    }

    function isReactive2(value) {
      if (isReadonly(value)) {
        return isReactive2(value["__v_raw"]);
      }

      return !!(value && value["__v_isReactive"]);
    }

    function isReadonly(value) {
      return !!(value && value["__v_isReadonly"]);
    }

    function isProxy(value) {
      return isReactive2(value) || isReadonly(value);
    }

    function toRaw2(observed) {
      return observed && toRaw2(observed["__v_raw"]) || observed;
    }

    function markRaw(value) {
      shared.def(value, "__v_skip", true);
      return value;
    }

    var convert = function convert(val) {
      return shared.isObject(val) ? reactive3(val) : val;
    };

    function isRef(r) {
      return Boolean(r && r.__v_isRef === true);
    }

    function ref(value) {
      return createRef(value);
    }

    function shallowRef(value) {
      return createRef(value, true);
    }

    var RefImpl = /*#__PURE__*/function () {
      function RefImpl(_rawValue, _shallow) {
        _classCallCheck(this, RefImpl);

        this._rawValue = _rawValue;
        this._shallow = _shallow;
        this.__v_isRef = true;
        this._value = _shallow ? _rawValue : convert(_rawValue);
      }

      _createClass(RefImpl, [{
        key: "value",
        get: function get() {
          track(toRaw2(this), "get", "value");
          return this._value;
        },
        set: function set(newVal) {
          if (shared.hasChanged(toRaw2(newVal), this._rawValue)) {
            this._rawValue = newVal;
            this._value = this._shallow ? newVal : convert(newVal);
            trigger(toRaw2(this), "set", "value", newVal);
          }
        }
      }]);

      return RefImpl;
    }();

    function createRef(rawValue) {
      var shallow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (isRef(rawValue)) {
        return rawValue;
      }

      return new RefImpl(rawValue, shallow);
    }

    function triggerRef(ref2) {
      trigger(toRaw2(ref2), "set", "value", ref2.value);
    }

    function unref(ref2) {
      return isRef(ref2) ? ref2.value : ref2;
    }

    var shallowUnwrapHandlers = {
      get: function get(target, key, receiver) {
        return unref(Reflect.get(target, key, receiver));
      },
      set: function set(target, key, value, receiver) {
        var oldValue = target[key];

        if (isRef(oldValue) && !isRef(value)) {
          oldValue.value = value;
          return true;
        } else {
          return Reflect.set(target, key, value, receiver);
        }
      }
    };

    function proxyRefs(objectWithRefs) {
      return isReactive2(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
    }

    var CustomRefImpl = /*#__PURE__*/function () {
      function CustomRefImpl(factory) {
        var _this = this;

        _classCallCheck(this, CustomRefImpl);

        this.__v_isRef = true;

        var _factory = factory(function () {
          return track(_this, "get", "value");
        }, function () {
          return trigger(_this, "set", "value");
        }),
            get3 = _factory.get,
            set3 = _factory.set;

        this._get = get3;
        this._set = set3;
      }

      _createClass(CustomRefImpl, [{
        key: "value",
        get: function get() {
          return this._get();
        },
        set: function set(newVal) {
          this._set(newVal);
        }
      }]);

      return CustomRefImpl;
    }();

    function customRef(factory) {
      return new CustomRefImpl(factory);
    }

    function toRefs(object) {
      if (!isProxy(object)) {
        console.warn("toRefs() expects a reactive object but received a plain one.");
      }

      var ret = shared.isArray(object) ? new Array(object.length) : {};

      for (var key in object) {
        ret[key] = toRef(object, key);
      }

      return ret;
    }

    var ObjectRefImpl = /*#__PURE__*/function () {
      function ObjectRefImpl(_object, _key) {
        _classCallCheck(this, ObjectRefImpl);

        this._object = _object;
        this._key = _key;
        this.__v_isRef = true;
      }

      _createClass(ObjectRefImpl, [{
        key: "value",
        get: function get() {
          return this._object[this._key];
        },
        set: function set(newVal) {
          this._object[this._key] = newVal;
        }
      }]);

      return ObjectRefImpl;
    }();

    function toRef(object, key) {
      return isRef(object[key]) ? object[key] : new ObjectRefImpl(object, key);
    }

    var ComputedRefImpl = /*#__PURE__*/function () {
      function ComputedRefImpl(getter, _setter, isReadonly2) {
        var _this2 = this;

        _classCallCheck(this, ComputedRefImpl);

        this._setter = _setter;
        this._dirty = true;
        this.__v_isRef = true;
        this.effect = effect3(getter, {
          lazy: true,
          scheduler: function scheduler() {
            if (!_this2._dirty) {
              _this2._dirty = true;
              trigger(toRaw2(_this2), "set", "value");
            }
          }
        });
        this["__v_isReadonly"] = isReadonly2;
      }

      _createClass(ComputedRefImpl, [{
        key: "value",
        get: function get() {
          var self2 = toRaw2(this);

          if (self2._dirty) {
            self2._value = this.effect();
            self2._dirty = false;
          }

          track(self2, "get", "value");
          return self2._value;
        },
        set: function set(newValue) {
          this._setter(newValue);
        }
      }]);

      return ComputedRefImpl;
    }();

    function computed(getterOrOptions) {
      var getter;
      var setter;

      if (shared.isFunction(getterOrOptions)) {
        getter = getterOrOptions;

        setter = function setter() {
          console.warn("Write operation failed: computed value is readonly");
        };
      } else {
        getter = getterOrOptions.get;
        setter = getterOrOptions.set;
      }

      return new ComputedRefImpl(getter, setter, shared.isFunction(getterOrOptions) || !getterOrOptions.set);
    }

    exports.ITERATE_KEY = ITERATE_KEY;
    exports.computed = computed;
    exports.customRef = customRef;
    exports.effect = effect3;
    exports.enableTracking = enableTracking;
    exports.isProxy = isProxy;
    exports.isReactive = isReactive2;
    exports.isReadonly = isReadonly;
    exports.isRef = isRef;
    exports.markRaw = markRaw;
    exports.pauseTracking = pauseTracking;
    exports.proxyRefs = proxyRefs;
    exports.reactive = reactive3;
    exports.readonly = readonly;
    exports.ref = ref;
    exports.resetTracking = resetTracking;
    exports.shallowReactive = shallowReactive;
    exports.shallowReadonly = shallowReadonly;
    exports.shallowRef = shallowRef;
    exports.stop = stop2;
    exports.toRaw = toRaw2;
    exports.toRef = toRef;
    exports.toRefs = toRefs;
    exports.track = track;
    exports.trigger = trigger;
    exports.triggerRef = triggerRef;
    exports.unref = unref;
  }); // node_modules/@vue/reactivity/index.js


  var require_reactivity = __commonJS(function (exports, module) {

    {
      module.exports = require_reactivity_cjs();
    }
  }); // packages/alpinejs/src/scheduler.js


  var flushPending = false;
  var flushing = false;
  var queue = [];

  function _scheduler(callback) {
    queueJob(callback);
  }

  function queueJob(job) {
    if (!queue.includes(job)) queue.push(job);
    queueFlush();
  }

  function queueFlush() {
    if (!flushing && !flushPending) {
      flushPending = true;
      queueMicrotask(flushJobs);
    }
  }

  function flushJobs() {
    flushPending = false;
    flushing = true;

    for (var i = 0; i < queue.length; i++) {
      queue[i]();
    }

    queue.length = 0;
    flushing = false;
  } // packages/alpinejs/src/reactivity.js


  var reactive;
  var effect;
  var release;
  var raw;
  var shouldSchedule = true;

  function disableEffectScheduling(callback) {
    shouldSchedule = false;
    callback();
    shouldSchedule = true;
  }

  function setReactivityEngine(engine) {
    reactive = engine.reactive;
    release = engine.release;

    effect = function effect(callback) {
      return engine.effect(callback, {
        scheduler: function scheduler(task) {
          if (shouldSchedule) {
            _scheduler(task);
          } else {
            task();
          }
        }
      });
    };

    raw = engine.raw;
  }

  function overrideEffect(override) {
    effect = override;
  }

  function elementBoundEffect(el) {
    var cleanup = function cleanup() {};

    var wrappedEffect = function wrappedEffect(callback) {
      var effectReference = effect(callback);

      if (!el._x_effects) {
        el._x_effects = new Set();

        el._x_runEffects = function () {
          el._x_effects.forEach(function (i) {
            return i();
          });
        };
      }

      el._x_effects.add(effectReference);

      cleanup = function cleanup() {
        if (effectReference === void 0) return;

        el._x_effects.delete(effectReference);

        release(effectReference);
      };
    };

    return [wrappedEffect, function () {
      cleanup();
    }];
  } // packages/alpinejs/src/mutation.js


  var onAttributeAddeds = [];
  var onElRemoveds = [];
  var onElAddeds = [];

  function onElAdded(callback) {
    onElAddeds.push(callback);
  }

  function onElRemoved(callback) {
    onElRemoveds.push(callback);
  }

  function onAttributesAdded(callback) {
    onAttributeAddeds.push(callback);
  }

  function onAttributeRemoved(el, name, callback) {
    if (!el._x_attributeCleanups) el._x_attributeCleanups = {};
    if (!el._x_attributeCleanups[name]) el._x_attributeCleanups[name] = [];

    el._x_attributeCleanups[name].push(callback);
  }

  function cleanupAttributes(el, names) {
    if (!el._x_attributeCleanups) return;
    Object.entries(el._x_attributeCleanups).forEach(function (_ref6) {
      var _ref7 = _slicedToArray(_ref6, 2),
          name = _ref7[0],
          value = _ref7[1];

      (names === void 0 || names.includes(name)) && value.forEach(function (i) {
        return i();
      });
      delete el._x_attributeCleanups[name];
    });
  }

  var observer = new MutationObserver(onMutate);
  var currentlyObserving = false;

  function startObservingMutations() {
    observer.observe(document, {
      subtree: true,
      childList: true,
      attributes: true,
      attributeOldValue: true
    });
    currentlyObserving = true;
  }

  function stopObservingMutations() {
    observer.disconnect();
    currentlyObserving = false;
  }

  var recordQueue = [];
  var willProcessRecordQueue = false;

  function flushObserver() {
    recordQueue = recordQueue.concat(observer.takeRecords());

    if (recordQueue.length && !willProcessRecordQueue) {
      willProcessRecordQueue = true;
      queueMicrotask(function () {
        processRecordQueue();
        willProcessRecordQueue = false;
      });
    }
  }

  function processRecordQueue() {
    onMutate(recordQueue);
    recordQueue.length = 0;
  }

  function mutateDom(callback) {
    if (!currentlyObserving) return callback();
    flushObserver();
    stopObservingMutations();
    var result = callback();
    startObservingMutations();
    return result;
  }

  function onMutate(mutations) {
    var addedNodes = [];
    var removedNodes = [];
    var addedAttributes = new Map();
    var removedAttributes = new Map();

    for (var i = 0; i < mutations.length; i++) {
      if (mutations[i].target._x_ignoreMutationObserver) continue;

      if (mutations[i].type === "childList") {
        mutations[i].addedNodes.forEach(function (node) {
          return node.nodeType === 1 && addedNodes.push(node);
        });
        mutations[i].removedNodes.forEach(function (node) {
          return node.nodeType === 1 && removedNodes.push(node);
        });
      }

      if (mutations[i].type === "attributes") {
        (function () {
          var el = mutations[i].target;
          var name = mutations[i].attributeName;
          var oldValue = mutations[i].oldValue;

          var add = function add() {
            if (!addedAttributes.has(el)) addedAttributes.set(el, []);
            addedAttributes.get(el).push({
              name: name,
              value: el.getAttribute(name)
            });
          };

          var remove = function remove() {
            if (!removedAttributes.has(el)) removedAttributes.set(el, []);
            removedAttributes.get(el).push(name);
          };

          if (el.hasAttribute(name) && oldValue === null) {
            add();
          } else if (el.hasAttribute(name)) {
            remove();
            add();
          } else {
            remove();
          }
        })();
      }
    }

    removedAttributes.forEach(function (attrs, el) {
      cleanupAttributes(el, attrs);
    });
    addedAttributes.forEach(function (attrs, el) {
      onAttributeAddeds.forEach(function (i) {
        return i(el, attrs);
      });
    });

    var _loop2 = function _loop2() {
      var node = _addedNodes[_i];
      if (removedNodes.includes(node)) return "continue";
      onElAddeds.forEach(function (i) {
        return i(node);
      });
    };

    for (var _i = 0, _addedNodes = addedNodes; _i < _addedNodes.length; _i++) {
      var _ret = _loop2();

      if (_ret === "continue") continue;
    }

    var _loop3 = function _loop3() {
      var node = _removedNodes[_i2];
      if (addedNodes.includes(node)) return "continue";
      onElRemoveds.forEach(function (i) {
        return i(node);
      });
    };

    for (var _i2 = 0, _removedNodes = removedNodes; _i2 < _removedNodes.length; _i2++) {
      var _ret2 = _loop3();

      if (_ret2 === "continue") continue;
    }

    addedNodes = null;
    removedNodes = null;
    addedAttributes = null;
    removedAttributes = null;
  } // packages/alpinejs/src/scope.js


  function addScopeToNode(node, data2, referenceNode) {
    node._x_dataStack = [data2].concat(_toConsumableArray(closestDataStack(referenceNode || node)));
    return function () {
      node._x_dataStack = node._x_dataStack.filter(function (i) {
        return i !== data2;
      });
    };
  }

  function refreshScope(element, scope) {
    var existingScope = element._x_dataStack[0];
    Object.entries(scope).forEach(function (_ref8) {
      var _ref9 = _slicedToArray(_ref8, 2),
          key = _ref9[0],
          value = _ref9[1];

      existingScope[key] = value;
    });
  }

  function closestDataStack(node) {
    if (node._x_dataStack) return node._x_dataStack;

    if (node instanceof ShadowRoot) {
      return closestDataStack(node.host);
    }

    if (!node.parentNode) {
      return [];
    }

    return closestDataStack(node.parentNode);
  }

  function mergeProxies(objects) {
    return new Proxy({}, {
      ownKeys: function ownKeys() {
        return Array.from(new Set(objects.flatMap(function (i) {
          return Object.keys(i);
        })));
      },
      has: function has(target, name) {
        return objects.some(function (obj) {
          return obj.hasOwnProperty(name);
        });
      },
      get: function get(target, name) {
        return (objects.find(function (obj) {
          return obj.hasOwnProperty(name);
        }) || {})[name];
      },
      set: function set(target, name, value) {
        var closestObjectWithKey = objects.find(function (obj) {
          return obj.hasOwnProperty(name);
        });

        if (closestObjectWithKey) {
          closestObjectWithKey[name] = value;
        } else {
          objects[objects.length - 1][name] = value;
        }

        return true;
      }
    });
  } // packages/alpinejs/src/interceptor.js


  function initInterceptors(data2) {
    var isObject = function isObject(val) {
      return _typeof(val) === "object" && !Array.isArray(val) && val !== null;
    };

    var recurse = function recurse(obj) {
      var basePath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
      Object.entries(obj).forEach(function (_ref10) {
        var _ref11 = _slicedToArray(_ref10, 2),
            key = _ref11[0],
            value = _ref11[1];

        var path = basePath === "" ? key : "".concat(basePath, ".").concat(key);

        if (_typeof(value) === "object" && value !== null && value._x_interceptor) {
          obj[key] = value.initialize(data2, path, key);
        } else {
          if (isObject(value) && value !== obj && !(value instanceof Element)) {
            recurse(value, path);
          }
        }
      });
    };

    return recurse(data2);
  }

  function interceptor(callback) {
    var mutateObj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
    var obj = {
      initialValue: void 0,
      _x_interceptor: true,
      initialize: function initialize(data2, path, key) {
        return callback(this.initialValue, function () {
          return get(data2, path);
        }, function (value) {
          return set(data2, path, value);
        }, path, key);
      }
    };
    mutateObj(obj);
    return function (initialValue) {
      if (_typeof(initialValue) === "object" && initialValue !== null && initialValue._x_interceptor) {
        var initialize = obj.initialize.bind(obj);

        obj.initialize = function (data2, path, key) {
          var innerValue = initialValue.initialize(data2, path, key);
          obj.initialValue = innerValue;
          return initialize(data2, path, key);
        };
      } else {
        obj.initialValue = initialValue;
      }

      return obj;
    };
  }

  function get(obj, path) {
    return path.split(".").reduce(function (carry, segment) {
      return carry[segment];
    }, obj);
  }

  function set(obj, path, value) {
    if (typeof path === "string") path = path.split(".");
    if (path.length === 1) obj[path[0]] = value;else if (path.length === 0) throw error;else {
      if (obj[path[0]]) return set(obj[path[0]], path.slice(1), value);else {
        obj[path[0]] = {};
        return set(obj[path[0]], path.slice(1), value);
      }
    }
  } // packages/alpinejs/src/magics.js


  var magics = {};

  function magic(name, callback) {
    magics[name] = callback;
  }

  function injectMagics(obj, el) {
    Object.entries(magics).forEach(function (_ref12) {
      var _ref13 = _slicedToArray(_ref12, 2),
          name = _ref13[0],
          callback = _ref13[1];

      Object.defineProperty(obj, "$".concat(name), {
        get: function get() {
          return callback(el, {
            Alpine: alpine_default,
            interceptor: interceptor
          });
        },
        enumerable: false
      });
    });
    return obj;
  } // packages/alpinejs/src/evaluator.js


  function evaluate(el, expression) {
    var extras = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var result;
    evaluateLater(el, expression)(function (value) {
      return result = value;
    }, extras);
    return result;
  }

  function evaluateLater() {
    return theEvaluatorFunction.apply(void 0, arguments);
  }

  var theEvaluatorFunction = normalEvaluator;

  function setEvaluator(newEvaluator) {
    theEvaluatorFunction = newEvaluator;
  }

  function normalEvaluator(el, expression) {
    var overriddenMagics = {};
    injectMagics(overriddenMagics, el);
    var dataStack = [overriddenMagics].concat(_toConsumableArray(closestDataStack(el)));

    if (typeof expression === "function") {
      return generateEvaluatorFromFunction(dataStack, expression);
    }

    var evaluator = generateEvaluatorFromString(dataStack, expression);
    return tryCatch.bind(null, el, expression, evaluator);
  }

  function generateEvaluatorFromFunction(dataStack, func) {
    return function () {
      var receiver = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};

      var _ref14 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref14$scope = _ref14.scope,
          scope = _ref14$scope === void 0 ? {} : _ref14$scope,
          _ref14$params = _ref14.params,
          params = _ref14$params === void 0 ? [] : _ref14$params;

      var result = func.apply(mergeProxies([scope].concat(_toConsumableArray(dataStack))), params);
      runIfTypeOfFunction(receiver, result);
    };
  }

  var evaluatorMemo = {};

  function generateFunctionFromString(expression) {
    if (evaluatorMemo[expression]) {
      return evaluatorMemo[expression];
    }

    var AsyncFunction = Object.getPrototypeOf( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee() {
      return regenerator.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))).constructor;
    var rightSideSafeExpression = /^[\n\s]*if.*\(.*\)/.test(expression) || /^(let|const)/.test(expression) ? "(() => { ".concat(expression, " })()") : expression;
    var func = new AsyncFunction(["__self", "scope"], "with (scope) { __self.result = ".concat(rightSideSafeExpression, " }; __self.finished = true; return __self.result;"));
    evaluatorMemo[expression] = func;
    return func;
  }

  function generateEvaluatorFromString(dataStack, expression) {
    var func = generateFunctionFromString(expression);
    return function () {
      var receiver = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};

      var _ref16 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref16$scope = _ref16.scope,
          scope = _ref16$scope === void 0 ? {} : _ref16$scope,
          _ref16$params = _ref16.params,
          params = _ref16$params === void 0 ? [] : _ref16$params;

      func.result = void 0;
      func.finished = false;
      var completeScope = mergeProxies([scope].concat(_toConsumableArray(dataStack)));
      var promise = func(func, completeScope);

      if (func.finished) {
        runIfTypeOfFunction(receiver, func.result, completeScope, params);
      } else {
        promise.then(function (result) {
          runIfTypeOfFunction(receiver, result, completeScope, params);
        });
      }
    };
  }

  function runIfTypeOfFunction(receiver, value, scope, params) {
    if (typeof value === "function") {
      var result = value.apply(scope, params);

      if (result instanceof Promise) {
        result.then(function (i) {
          return runIfTypeOfFunction(receiver, i, scope, params);
        });
      } else {
        receiver(result);
      }
    } else {
      receiver(value);
    }
  }

  function tryCatch(el, expression, callback) {
    try {
      for (var _len3 = arguments.length, args = new Array(_len3 > 3 ? _len3 - 3 : 0), _key4 = 3; _key4 < _len3; _key4++) {
        args[_key4 - 3] = arguments[_key4];
      }

      return callback.apply(void 0, args);
    } catch (e) {
      console.warn("Alpine Expression Error: ".concat(e.message, "\n\nExpression: \"").concat(expression, "\"\n\n"), el);
      throw e;
    }
  } // packages/alpinejs/src/directives.js


  var prefixAsString = "x-";

  function prefix() {
    var subject = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    return prefixAsString + subject;
  }

  function setPrefix(newPrefix) {
    prefixAsString = newPrefix;
  }

  var directiveHandlers = {};

  function directive(name, callback) {
    directiveHandlers[name] = callback;
  }

  function directives(el, attributes, originalAttributeOverride) {
    var transformedAttributeMap = {};
    var directives2 = Array.from(attributes).map(toTransformedAttributes(function (newName, oldName) {
      return transformedAttributeMap[newName] = oldName;
    })).filter(outNonAlpineAttributes).map(toParsedDirectives(transformedAttributeMap, originalAttributeOverride)).sort(byPriority);
    return directives2.map(function (directive2) {
      return getDirectiveHandler(el, directive2);
    });
  }

  var isDeferringHandlers = false;
  var directiveHandlerStack = [];

  function deferHandlingDirectives(callback) {
    isDeferringHandlers = true;

    var flushHandlers = function flushHandlers() {
      while (directiveHandlerStack.length) {
        directiveHandlerStack.shift()();
      }
    };

    var stopDeferring = function stopDeferring() {
      isDeferringHandlers = false;
      flushHandlers();
    };

    callback(flushHandlers);
    stopDeferring();
  }

  function getDirectiveHandler(el, directive2) {
    var noop = function noop() {};

    var handler3 = directiveHandlers[directive2.type] || noop;
    var cleanups = [];

    var cleanup = function cleanup(callback) {
      return cleanups.push(callback);
    };

    var _elementBoundEffect = elementBoundEffect(el),
        _elementBoundEffect2 = _slicedToArray(_elementBoundEffect, 2),
        effect3 = _elementBoundEffect2[0],
        cleanupEffect = _elementBoundEffect2[1];

    cleanups.push(cleanupEffect);
    var utilities = {
      Alpine: alpine_default,
      effect: effect3,
      cleanup: cleanup,
      evaluateLater: evaluateLater.bind(evaluateLater, el),
      evaluate: evaluate.bind(evaluate, el)
    };

    var doCleanup = function doCleanup() {
      return cleanups.forEach(function (i) {
        return i();
      });
    };

    onAttributeRemoved(el, directive2.original, doCleanup);

    var fullHandler = function fullHandler() {
      if (el._x_ignore || el._x_ignoreSelf) return;
      handler3.inline && handler3.inline(el, directive2, utilities);
      handler3 = handler3.bind(handler3, el, directive2, utilities);
      isDeferringHandlers ? directiveHandlerStack.push(handler3) : handler3();
    };

    fullHandler.runCleanups = doCleanup;
    return fullHandler;
  }

  var startingWith = function startingWith(subject, replacement) {
    return function (_ref17) {
      var name = _ref17.name,
          value = _ref17.value;
      if (name.startsWith(subject)) name = name.replace(subject, replacement);
      return {
        name: name,
        value: value
      };
    };
  };

  var into = function into(i) {
    return i;
  };

  function toTransformedAttributes(callback) {
    return function (_ref18) {
      var name = _ref18.name,
          value = _ref18.value;

      var _attributeTransformer = attributeTransformers.reduce(function (carry, transform) {
        return transform(carry);
      }, {
        name: name,
        value: value
      }),
          newName = _attributeTransformer.name,
          newValue = _attributeTransformer.value;

      if (newName !== name) callback(newName, name);
      return {
        name: newName,
        value: newValue
      };
    };
  }

  var attributeTransformers = [];

  function mapAttributes(callback) {
    attributeTransformers.push(callback);
  }

  function outNonAlpineAttributes(_ref19) {
    var name = _ref19.name;
    return alpineAttributeRegex().test(name);
  }

  var alpineAttributeRegex = function alpineAttributeRegex() {
    return new RegExp("^".concat(prefixAsString, "([^:^.]+)\\b"));
  };

  function toParsedDirectives(transformedAttributeMap, originalAttributeOverride) {
    return function (_ref20) {
      var name = _ref20.name,
          value = _ref20.value;
      var typeMatch = name.match(alpineAttributeRegex());
      var valueMatch = name.match(/:([a-zA-Z0-9\-:]+)/);
      var modifiers = name.match(/\.[^.\]]+(?=[^\]]*$)/g) || [];
      var original = originalAttributeOverride || transformedAttributeMap[name] || name;
      return {
        type: typeMatch ? typeMatch[1] : null,
        value: valueMatch ? valueMatch[1] : null,
        modifiers: modifiers.map(function (i) {
          return i.replace(".", "");
        }),
        expression: value,
        original: original
      };
    };
  }

  var DEFAULT = "DEFAULT";
  var directiveOrder = ["ignore", "ref", "data", "bind", "init", "for", "model", "transition", "show", "if", DEFAULT, "element"];

  function byPriority(a, b) {
    var typeA = directiveOrder.indexOf(a.type) === -1 ? DEFAULT : a.type;
    var typeB = directiveOrder.indexOf(b.type) === -1 ? DEFAULT : b.type;
    return directiveOrder.indexOf(typeA) - directiveOrder.indexOf(typeB);
  } // packages/alpinejs/src/utils/dispatch.js


  function dispatch(el, name) {
    var detail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    el.dispatchEvent(new CustomEvent(name, {
      detail: detail,
      bubbles: true,
      composed: true,
      cancelable: true
    }));
  } // packages/alpinejs/src/nextTick.js


  var tickStack = [];
  var isHolding = false;

  function nextTick(callback) {
    tickStack.push(callback);
    queueMicrotask(function () {
      isHolding || setTimeout(function () {
        releaseNextTicks();
      });
    });
  }

  function releaseNextTicks() {
    isHolding = false;

    while (tickStack.length) {
      tickStack.shift()();
    }
  }

  function holdNextTicks() {
    isHolding = true;
  } // packages/alpinejs/src/utils/walk.js


  function walk(el, callback) {
    if (el instanceof ShadowRoot) {
      Array.from(el.children).forEach(function (el2) {
        return walk(el2, callback);
      });
      return;
    }

    var skip = false;
    callback(el, function () {
      return skip = true;
    });
    if (skip) return;
    var node = el.firstElementChild;

    while (node) {
      walk(node, callback);
      node = node.nextElementSibling;
    }
  } // packages/alpinejs/src/utils/warn.js


  function warn(message) {
    var _console;

    for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key5 = 1; _key5 < _len4; _key5++) {
      args[_key5 - 1] = arguments[_key5];
    }

    (_console = console).warn.apply(_console, ["Alpine Warning: ".concat(message)].concat(args));
  } // packages/alpinejs/src/lifecycle.js


  function start() {
    if (!document.body) warn("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?");
    dispatch(document, "alpine:init");
    dispatch(document, "alpine:initializing");
    startObservingMutations();
    onElAdded(function (el) {
      return initTree(el, walk);
    });
    onElRemoved(function (el) {
      return nextTick(function () {
        return destroyTree(el);
      });
    });
    onAttributesAdded(function (el, attrs) {
      directives(el, attrs).forEach(function (handle) {
        return handle();
      });
    });

    var outNestedComponents = function outNestedComponents(el) {
      return !closestRoot(el.parentNode || closestRoot(el));
    };

    Array.from(document.querySelectorAll(allSelectors())).filter(outNestedComponents).forEach(function (el) {
      initTree(el);
    });
    dispatch(document, "alpine:initialized");
  }

  var rootSelectorCallbacks = [];
  var initSelectorCallbacks = [];

  function rootSelectors() {
    return rootSelectorCallbacks.map(function (fn) {
      return fn();
    });
  }

  function allSelectors() {
    return rootSelectorCallbacks.concat(initSelectorCallbacks).map(function (fn) {
      return fn();
    });
  }

  function addRootSelector(selectorCallback) {
    rootSelectorCallbacks.push(selectorCallback);
  }

  function addInitSelector(selectorCallback) {
    initSelectorCallbacks.push(selectorCallback);
  }

  function closestRoot(el) {
    if (rootSelectors().some(function (selector) {
      return el.matches(selector);
    })) return el;
    if (!el.parentElement) return;
    return closestRoot(el.parentElement);
  }

  function isRoot(el) {
    return rootSelectors().some(function (selector) {
      return el.matches(selector);
    });
  }

  function initTree(el) {
    var walker = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : walk;
    deferHandlingDirectives(function () {
      walker(el, function (el2, skip) {
        directives(el2, el2.attributes).forEach(function (handle) {
          return handle();
        });
        el2._x_ignore && skip();
      });
    });
  }

  function destroyTree(root) {
    walk(root, function (el) {
      return cleanupAttributes(el);
    });
  } // packages/alpinejs/src/plugin.js


  function plugin(callback) {
    callback(alpine_default);
  } // packages/alpinejs/src/store.js


  var stores = {};
  var isReactive = false;

  function store(name, value) {
    if (!isReactive) {
      stores = reactive(stores);
      isReactive = true;
    }

    if (value === void 0) {
      return stores[name];
    }

    stores[name] = value;

    if (_typeof(value) === "object" && value !== null && value.hasOwnProperty("init") && typeof value.init === "function") {
      stores[name].init();
    }
  }

  function getStores() {
    return stores;
  } // packages/alpinejs/src/clone.js


  var isCloning = false;

  function skipDuringClone(callback) {
    return function () {
      return isCloning || callback.apply(void 0, arguments);
    };
  }

  function clone(oldEl, newEl) {
    newEl._x_dataStack = oldEl._x_dataStack;
    isCloning = true;
    dontRegisterReactiveSideEffects(function () {
      cloneTree(newEl);
    });
    isCloning = false;
  }

  function cloneTree(el) {
    var hasRunThroughFirstEl = false;

    var shallowWalker = function shallowWalker(el2, callback) {
      walk(el2, function (el3, skip) {
        if (hasRunThroughFirstEl && isRoot(el3)) return skip();
        hasRunThroughFirstEl = true;
        callback(el3, skip);
      });
    };

    initTree(el, shallowWalker);
  }

  function dontRegisterReactiveSideEffects(callback) {
    var cache = effect;
    overrideEffect(function (callback2, el) {
      var storedEffect = cache(callback2);
      release(storedEffect);
      return function () {};
    });
    callback();
    overrideEffect(cache);
  } // packages/alpinejs/src/datas.js


  var datas = {};

  function data(name, callback) {
    datas[name] = callback;
  }

  function injectDataProviders(obj, context) {
    Object.entries(datas).forEach(function (_ref21) {
      var _ref22 = _slicedToArray(_ref21, 2),
          name = _ref22[0],
          callback = _ref22[1];

      Object.defineProperty(obj, name, {
        get: function get() {
          return function () {
            return callback.bind(context).apply(void 0, arguments);
          };
        },
        enumerable: false
      });
    });
    return obj;
  } // packages/alpinejs/src/alpine.js


  var Alpine = {
    get reactive() {
      return reactive;
    },

    get release() {
      return release;
    },

    get effect() {
      return effect;
    },

    get raw() {
      return raw;
    },

    version: "3.2.0",
    disableEffectScheduling: disableEffectScheduling,
    setReactivityEngine: setReactivityEngine,
    addRootSelector: addRootSelector,
    mapAttributes: mapAttributes,
    evaluateLater: evaluateLater,
    setEvaluator: setEvaluator,
    closestRoot: closestRoot,
    interceptor: interceptor,
    mutateDom: mutateDom,
    directive: directive,
    evaluate: evaluate,
    initTree: initTree,
    nextTick: nextTick,
    prefix: setPrefix,
    plugin: plugin,
    magic: magic,
    store: store,
    start: start,
    clone: clone,
    data: data
  };
  var alpine_default = Alpine; // packages/alpinejs/src/index.js

  var import_reactivity9 = __toModule(require_reactivity()); // packages/alpinejs/src/magics/$nextTick.js


  magic("nextTick", function () {
    return nextTick;
  }); // packages/alpinejs/src/magics/$dispatch.js

  magic("dispatch", function (el) {
    return dispatch.bind(dispatch, el);
  }); // packages/alpinejs/src/magics/$watch.js

  magic("watch", function (el) {
    return function (key, callback) {
      var evaluate2 = evaluateLater(el, key);
      var firstTime = true;
      var oldValue;
      effect(function () {
        return evaluate2(function (value) {
          var div = document.createElement("div");
          div.dataset.throwAway = value;

          if (!firstTime) {
            queueMicrotask(function () {
              callback(value, oldValue);
              oldValue = value;
            });
          } else {
            oldValue = value;
          }

          firstTime = false;
        });
      });
    };
  }); // packages/alpinejs/src/magics/$store.js

  magic("store", getStores); // packages/alpinejs/src/magics/$refs.js

  magic("refs", function (el) {
    return closestRoot(el)._x_refs || {};
  }); // packages/alpinejs/src/magics/$el.js

  magic("el", function (el) {
    return el;
  }); // packages/alpinejs/src/utils/classes.js

  function setClasses(el, value) {
    if (Array.isArray(value)) {
      return setClassesFromString(el, value.join(" "));
    } else if (_typeof(value) === "object" && value !== null) {
      return setClassesFromObject(el, value);
    } else if (typeof value === "function") {
      return setClasses(el, value());
    }

    return setClassesFromString(el, value);
  }

  function setClassesFromString(el, classString) {

    var missingClasses = function missingClasses(classString2) {
      return classString2.split(" ").filter(function (i) {
        return !el.classList.contains(i);
      }).filter(Boolean);
    };

    var addClassesAndReturnUndo = function addClassesAndReturnUndo(classes) {
      var _el$classList;

      (_el$classList = el.classList).add.apply(_el$classList, _toConsumableArray(classes));

      return function () {
        var _el$classList2;

        (_el$classList2 = el.classList).remove.apply(_el$classList2, _toConsumableArray(classes));
      };
    };

    classString = classString === true ? classString = "" : classString || "";
    return addClassesAndReturnUndo(missingClasses(classString));
  }

  function setClassesFromObject(el, classObject) {
    var split = function split(classString) {
      return classString.split(" ").filter(Boolean);
    };

    var forAdd = Object.entries(classObject).flatMap(function (_ref23) {
      var _ref24 = _slicedToArray(_ref23, 2),
          classString = _ref24[0],
          bool = _ref24[1];

      return bool ? split(classString) : false;
    }).filter(Boolean);
    var forRemove = Object.entries(classObject).flatMap(function (_ref25) {
      var _ref26 = _slicedToArray(_ref25, 2),
          classString = _ref26[0],
          bool = _ref26[1];

      return !bool ? split(classString) : false;
    }).filter(Boolean);
    var added = [];
    var removed = [];
    forRemove.forEach(function (i) {
      if (el.classList.contains(i)) {
        el.classList.remove(i);
        removed.push(i);
      }
    });
    forAdd.forEach(function (i) {
      if (!el.classList.contains(i)) {
        el.classList.add(i);
        added.push(i);
      }
    });
    return function () {
      removed.forEach(function (i) {
        return el.classList.add(i);
      });
      added.forEach(function (i) {
        return el.classList.remove(i);
      });
    };
  } // packages/alpinejs/src/utils/styles.js


  function setStyles(el, value) {
    if (_typeof(value) === "object" && value !== null) {
      return setStylesFromObject(el, value);
    }

    return setStylesFromString(el, value);
  }

  function setStylesFromObject(el, value) {
    var previousStyles = {};
    Object.entries(value).forEach(function (_ref27) {
      var _ref28 = _slicedToArray(_ref27, 2),
          key = _ref28[0],
          value2 = _ref28[1];

      previousStyles[key] = el.style[key];
      el.style[key] = value2;
    });
    setTimeout(function () {
      if (el.style.length === 0) {
        el.removeAttribute("style");
      }
    });
    return function () {
      setStyles(el, previousStyles);
    };
  }

  function setStylesFromString(el, value) {
    var cache = el.getAttribute("style", value);
    el.setAttribute("style", value);
    return function () {
      el.setAttribute("style", cache);
    };
  } // packages/alpinejs/src/utils/once.js


  function once(callback) {
    var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
    var called = false;
    return function () {
      if (!called) {
        called = true;
        callback.apply(this, arguments);
      } else {
        fallback.apply(this, arguments);
      }
    };
  } // packages/alpinejs/src/directives/x-transition.js


  directive("transition", function (el, _ref29) {
    var value = _ref29.value,
        modifiers = _ref29.modifiers,
        expression = _ref29.expression;

    if (!expression) {
      registerTransitionsFromHelper(el, modifiers, value);
    } else {
      registerTransitionsFromClassString(el, expression, value);
    }
  });

  function registerTransitionsFromClassString(el, classString, stage) {
    registerTransitionObject(el, setClasses, "");
    var directiveStorageMap = {
      enter: function enter(classes) {
        el._x_transition.enter.during = classes;
      },
      "enter-start": function enterStart(classes) {
        el._x_transition.enter.start = classes;
      },
      "enter-end": function enterEnd(classes) {
        el._x_transition.enter.end = classes;
      },
      leave: function leave(classes) {
        el._x_transition.leave.during = classes;
      },
      "leave-start": function leaveStart(classes) {
        el._x_transition.leave.start = classes;
      },
      "leave-end": function leaveEnd(classes) {
        el._x_transition.leave.end = classes;
      }
    };
    directiveStorageMap[stage](classString);
  }

  function registerTransitionsFromHelper(el, modifiers, stage) {
    registerTransitionObject(el, setStyles);
    var doesntSpecify = !modifiers.includes("in") && !modifiers.includes("out") && !stage;
    var transitioningIn = doesntSpecify || modifiers.includes("in") || ["enter"].includes(stage);
    var transitioningOut = doesntSpecify || modifiers.includes("out") || ["leave"].includes(stage);

    if (modifiers.includes("in") && !doesntSpecify) {
      modifiers = modifiers.filter(function (i, index) {
        return index < modifiers.indexOf("out");
      });
    }

    if (modifiers.includes("out") && !doesntSpecify) {
      modifiers = modifiers.filter(function (i, index) {
        return index > modifiers.indexOf("out");
      });
    }

    var wantsAll = !modifiers.includes("opacity") && !modifiers.includes("scale");
    var wantsOpacity = wantsAll || modifiers.includes("opacity");
    var wantsScale = wantsAll || modifiers.includes("scale");
    var opacityValue = wantsOpacity ? 0 : 1;
    var scaleValue = wantsScale ? modifierValue(modifiers, "scale", 95) / 100 : 1;
    var delay = modifierValue(modifiers, "delay", 0);
    var origin = modifierValue(modifiers, "origin", "center");
    var property = "opacity, transform";
    var durationIn = modifierValue(modifiers, "duration", 150) / 1e3;
    var durationOut = modifierValue(modifiers, "duration", 75) / 1e3;
    var easing = "cubic-bezier(0.4, 0.0, 0.2, 1)";

    if (transitioningIn) {
      el._x_transition.enter.during = {
        transformOrigin: origin,
        transitionDelay: delay,
        transitionProperty: property,
        transitionDuration: "".concat(durationIn, "s"),
        transitionTimingFunction: easing
      };
      el._x_transition.enter.start = {
        opacity: opacityValue,
        transform: "scale(".concat(scaleValue, ")")
      };
      el._x_transition.enter.end = {
        opacity: 1,
        transform: "scale(1)"
      };
    }

    if (transitioningOut) {
      el._x_transition.leave.during = {
        transformOrigin: origin,
        transitionDelay: delay,
        transitionProperty: property,
        transitionDuration: "".concat(durationOut, "s"),
        transitionTimingFunction: easing
      };
      el._x_transition.leave.start = {
        opacity: 1,
        transform: "scale(1)"
      };
      el._x_transition.leave.end = {
        opacity: opacityValue,
        transform: "scale(".concat(scaleValue, ")")
      };
    }
  }

  function registerTransitionObject(el, setFunction) {
    var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    if (!el._x_transition) el._x_transition = {
      enter: {
        during: defaultValue,
        start: defaultValue,
        end: defaultValue
      },
      leave: {
        during: defaultValue,
        start: defaultValue,
        end: defaultValue
      },
      in: function _in() {
        var before = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
        var after = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
        transition(el, setFunction, {
          during: this.enter.during,
          start: this.enter.start,
          end: this.enter.end,
          entering: true
        }, before, after);
      },
      out: function out() {
        var before = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
        var after = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
        transition(el, setFunction, {
          during: this.leave.during,
          start: this.leave.start,
          end: this.leave.end,
          entering: false
        }, before, after);
      }
    };
  }

  window.Element.prototype._x_toggleAndCascadeWithTransitions = function (el, value, show, hide) {
    var clickAwayCompatibleShow = function clickAwayCompatibleShow() {
      return requestAnimationFrame(show);
    };

    if (value) {
      el._x_transition ? el._x_transition.in(show) : clickAwayCompatibleShow();
      return;
    }

    el._x_hidePromise = el._x_transition ? new Promise(function (resolve, reject) {
      el._x_transition.out(function () {}, function () {
        return resolve(hide);
      });

      el._x_transitioning.beforeCancel(function () {
        return reject({
          isFromCancelledTransition: true
        });
      });
    }) : Promise.resolve(hide);
    queueMicrotask(function () {
      var closest = closestHide(el);

      if (closest) {
        if (!closest._x_hideChildren) closest._x_hideChildren = [];

        closest._x_hideChildren.push(el);
      } else {
        queueMicrotask(function () {
          var hideAfterChildren = function hideAfterChildren(el2) {
            var carry = Promise.all([el2._x_hidePromise].concat(_toConsumableArray((el2._x_hideChildren || []).map(hideAfterChildren)))).then(function (_ref30) {
              var _ref31 = _slicedToArray(_ref30, 1),
                  i = _ref31[0];

              return i();
            });
            delete el2._x_hidePromise;
            delete el2._x_hideChildren;
            return carry;
          };

          hideAfterChildren(el).catch(function (e) {
            if (!e.isFromCancelledTransition) throw e;
          });
        });
      }
    });
  };

  function closestHide(el) {
    var parent = el.parentNode;
    if (!parent) return;
    return parent._x_hidePromise ? parent : closestHide(parent);
  }

  function transition(el, setFunction) {
    var _ref32 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
        _during = _ref32.during,
        start2 = _ref32.start,
        _end = _ref32.end,
        entering = _ref32.entering;

    var before = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};
    var after = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : function () {};
    if (el._x_transitioning) el._x_transitioning.cancel();

    if (Object.keys(_during).length === 0 && Object.keys(start2).length === 0 && Object.keys(_end).length === 0) {
      before();
      after();
      return;
    }

    var undoStart, undoDuring, undoEnd;
    performTransition(el, {
      start: function start() {
        undoStart = setFunction(el, start2);
      },
      during: function during() {
        undoDuring = setFunction(el, _during);
      },
      before: before,
      end: function end() {
        undoStart();
        undoEnd = setFunction(el, _end);
      },
      after: after,
      cleanup: function cleanup() {
        undoDuring();
        undoEnd();
      }
    }, entering);
  }

  function performTransition(el, stages, entering) {
    var interrupted, reachedBefore, reachedEnd;
    var finish = once(function () {
      mutateDom(function () {
        interrupted = true;
        if (!reachedBefore) stages.before();

        if (!reachedEnd) {
          stages.end();
          releaseNextTicks();
        }

        stages.after();
        if (el.isConnected) stages.cleanup();
        delete el._x_transitioning;
      });
    });
    el._x_transitioning = {
      beforeCancels: [],
      beforeCancel: function beforeCancel(callback) {
        this.beforeCancels.push(callback);
      },
      cancel: once(function () {
        while (this.beforeCancels.length) {
          this.beforeCancels.shift()();
        }
        finish();
      }),
      finish: finish,
      entering: entering
    };
    mutateDom(function () {
      stages.start();
      stages.during();
    });
    holdNextTicks();
    requestAnimationFrame(function () {
      if (interrupted) return;
      var duration = Number(getComputedStyle(el).transitionDuration.replace(/,.*/, "").replace("s", "")) * 1e3;
      var delay = Number(getComputedStyle(el).transitionDelay.replace(/,.*/, "").replace("s", "")) * 1e3;
      if (duration === 0) duration = Number(getComputedStyle(el).animationDuration.replace("s", "")) * 1e3;
      mutateDom(function () {
        stages.before();
      });
      reachedBefore = true;
      requestAnimationFrame(function () {
        if (interrupted) return;
        mutateDom(function () {
          stages.end();
        });
        releaseNextTicks();
        setTimeout(el._x_transitioning.finish, duration + delay);
        reachedEnd = true;
      });
    });
  }

  function modifierValue(modifiers, key, fallback) {
    if (modifiers.indexOf(key) === -1) return fallback;
    var rawValue = modifiers[modifiers.indexOf(key) + 1];
    if (!rawValue) return fallback;

    if (key === "scale") {
      if (isNaN(rawValue)) return fallback;
    }

    if (key === "duration") {
      var match = rawValue.match(/([0-9]+)ms/);
      if (match) return match[1];
    }

    if (key === "origin") {
      if (["top", "right", "left", "center", "bottom"].includes(modifiers[modifiers.indexOf(key) + 2])) {
        return [rawValue, modifiers[modifiers.indexOf(key) + 2]].join(" ");
      }
    }

    return rawValue;
  } // packages/alpinejs/src/directives/x-ignore.js


  var handler = function handler() {};

  handler.inline = function (el, _ref33, _ref34) {
    var modifiers = _ref33.modifiers;
    var cleanup = _ref34.cleanup;
    modifiers.includes("self") ? el._x_ignoreSelf = true : el._x_ignore = true;
    cleanup(function () {
      modifiers.includes("self") ? delete el._x_ignoreSelf : delete el._x_ignore;
    });
  };

  directive("ignore", handler); // packages/alpinejs/src/directives/x-effect.js

  directive("effect", function (el, _ref35, _ref36) {
    var expression = _ref35.expression;
    var effect3 = _ref36.effect;
    return effect3(evaluateLater(el, expression));
  }); // packages/alpinejs/src/utils/bind.js

  function bind(el, name, value) {
    var modifiers = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
    if (!el._x_bindings) el._x_bindings = reactive({});
    el._x_bindings[name] = value;
    name = modifiers.includes("camel") ? camelCase(name) : name;

    switch (name) {
      case "value":
        bindInputValue(el, value);
        break;

      case "style":
        bindStyles(el, value);
        break;

      case "class":
        bindClasses(el, value);
        break;

      default:
        bindAttribute(el, name, value);
        break;
    }
  }

  function bindInputValue(el, value) {
    if (el.type === "radio") {
      if (el.attributes.value === void 0) {
        el.value = value;
      }

      if (window.fromModel) {
        el.checked = checkedAttrLooseCompare(el.value, value);
      }
    } else if (el.type === "checkbox") {
      if (Number.isInteger(value)) {
        el.value = value;
      } else if (!Number.isInteger(value) && !Array.isArray(value) && typeof value !== "boolean" && ![null, void 0].includes(value)) {
        el.value = String(value);
      } else {
        if (Array.isArray(value)) {
          el.checked = value.some(function (val) {
            return checkedAttrLooseCompare(val, el.value);
          });
        } else {
          el.checked = !!value;
        }
      }
    } else if (el.tagName === "SELECT") {
      updateSelect(el, value);
    } else {
      if (el.value === value) return;
      el.value = value;
    }
  }

  function bindClasses(el, value) {
    if (el._x_undoAddedClasses) el._x_undoAddedClasses();
    el._x_undoAddedClasses = setClasses(el, value);
  }

  function bindStyles(el, value) {
    if (el._x_undoAddedStyles) el._x_undoAddedStyles();
    el._x_undoAddedStyles = setStyles(el, value);
  }

  function bindAttribute(el, name, value) {
    if ([null, void 0, false].includes(value) && attributeShouldntBePreservedIfFalsy(name)) {
      el.removeAttribute(name);
    } else {
      if (isBooleanAttr(name)) value = name;
      setIfChanged(el, name, value);
    }
  }

  function setIfChanged(el, attrName, value) {
    if (el.getAttribute(attrName) != value) {
      el.setAttribute(attrName, value);
    }
  }

  function updateSelect(el, value) {
    var arrayWrappedValue = [].concat(value).map(function (value2) {
      return value2 + "";
    });
    Array.from(el.options).forEach(function (option) {
      option.selected = arrayWrappedValue.includes(option.value);
    });
  }

  function camelCase(subject) {
    return subject.toLowerCase().replace(/-(\w)/g, function (match, char) {
      return char.toUpperCase();
    });
  }

  function checkedAttrLooseCompare(valueA, valueB) {
    return valueA == valueB;
  }

  function isBooleanAttr(attrName) {
    var booleanAttributes = ["disabled", "checked", "required", "readonly", "hidden", "open", "selected", "autofocus", "itemscope", "multiple", "novalidate", "allowfullscreen", "allowpaymentrequest", "formnovalidate", "autoplay", "controls", "loop", "muted", "playsinline", "default", "ismap", "reversed", "async", "defer", "nomodule"];
    return booleanAttributes.includes(attrName);
  }

  function attributeShouldntBePreservedIfFalsy(name) {
    return !["aria-pressed", "aria-checked"].includes(name);
  } // packages/alpinejs/src/utils/on.js


  function on(el, event, modifiers, callback) {
    var listenerTarget = el;

    var handler3 = function handler3(e) {
      return callback(e);
    };

    var options = {};

    var wrapHandler = function wrapHandler(callback2, wrapper) {
      return function (e) {
        return wrapper(callback2, e);
      };
    };

    if (modifiers.includes("camel")) event = camelCase2(event);
    if (modifiers.includes("passive")) options.passive = true;
    if (modifiers.includes("window")) listenerTarget = window;
    if (modifiers.includes("document")) listenerTarget = document;
    if (modifiers.includes("prevent")) handler3 = wrapHandler(handler3, function (next, e) {
      e.preventDefault();
      next(e);
    });
    if (modifiers.includes("stop")) handler3 = wrapHandler(handler3, function (next, e) {
      e.stopPropagation();
      next(e);
    });
    if (modifiers.includes("self")) handler3 = wrapHandler(handler3, function (next, e) {
      e.target === el && next(e);
    });

    if (modifiers.includes("away") || modifiers.includes("outside")) {
      listenerTarget = document;
      handler3 = wrapHandler(handler3, function (next, e) {
        if (el.contains(e.target)) return;
        if (el.offsetWidth < 1 && el.offsetHeight < 1) return;
        next(e);
      });
    }

    handler3 = wrapHandler(handler3, function (next, e) {
      if (isKeyEvent(event)) {
        if (isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers)) {
          return;
        }
      }

      next(e);
    });

    if (modifiers.includes("debounce")) {
      var nextModifier = modifiers[modifiers.indexOf("debounce") + 1] || "invalid-wait";
      var wait = isNumeric(nextModifier.split("ms")[0]) ? Number(nextModifier.split("ms")[0]) : 250;
      handler3 = debounce(handler3, wait);
    }

    if (modifiers.includes("throttle")) {
      var _nextModifier = modifiers[modifiers.indexOf("throttle") + 1] || "invalid-wait";

      var _wait = isNumeric(_nextModifier.split("ms")[0]) ? Number(_nextModifier.split("ms")[0]) : 250;

      handler3 = throttle(handler3, _wait);
    }

    if (modifiers.includes("once")) {
      handler3 = wrapHandler(handler3, function (next, e) {
        next(e);
        listenerTarget.removeEventListener(event, handler3, options);
      });
    }

    listenerTarget.addEventListener(event, handler3, options);
    return function () {
      listenerTarget.removeEventListener(event, handler3, options);
    };
  }

  function camelCase2(subject) {
    return subject.toLowerCase().replace(/-(\w)/g, function (match, char) {
      return char.toUpperCase();
    });
  }

  function debounce(func, wait) {
    var timeout;
    return function () {
      var context = this,
          args = arguments;

      var later = function later() {
        timeout = null;
        func.apply(context, args);
      };

      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  function throttle(func, limit) {
    var inThrottle;
    return function () {
      var context = this,
          args = arguments;

      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(function () {
          return inThrottle = false;
        }, limit);
      }
    };
  }

  function isNumeric(subject) {
    return !Array.isArray(subject) && !isNaN(subject);
  }

  function kebabCase(subject) {
    return subject.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[_\s]/, "-").toLowerCase();
  }

  function isKeyEvent(event) {
    return ["keydown", "keyup"].includes(event);
  }

  function isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers) {
    var keyModifiers = modifiers.filter(function (i) {
      return !["window", "document", "prevent", "stop", "once"].includes(i);
    });

    if (keyModifiers.includes("debounce")) {
      var debounceIndex = keyModifiers.indexOf("debounce");
      keyModifiers.splice(debounceIndex, isNumeric((keyModifiers[debounceIndex + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
    }

    if (keyModifiers.length === 0) return false;
    if (keyModifiers.length === 1 && keyModifiers[0] === keyToModifier(e.key)) return false;
    var systemKeyModifiers = ["ctrl", "shift", "alt", "meta", "cmd", "super"];
    var selectedSystemKeyModifiers = systemKeyModifiers.filter(function (modifier) {
      return keyModifiers.includes(modifier);
    });
    keyModifiers = keyModifiers.filter(function (i) {
      return !selectedSystemKeyModifiers.includes(i);
    });

    if (selectedSystemKeyModifiers.length > 0) {
      var activelyPressedKeyModifiers = selectedSystemKeyModifiers.filter(function (modifier) {
        if (modifier === "cmd" || modifier === "super") modifier = "meta";
        return e["".concat(modifier, "Key")];
      });

      if (activelyPressedKeyModifiers.length === selectedSystemKeyModifiers.length) {
        if (keyModifiers[0] === keyToModifier(e.key)) return false;
      }
    }

    return true;
  }

  function keyToModifier(key) {
    switch (key) {
      case "/":
        return "slash";

      case " ":
      case "Spacebar":
        return "space";

      default:
        return key && kebabCase(key);
    }
  } // packages/alpinejs/src/directives/x-model.js


  directive("model", function (el, _ref37, _ref38) {
    var modifiers = _ref37.modifiers,
        expression = _ref37.expression;
    var effect3 = _ref38.effect,
        cleanup = _ref38.cleanup;
    var evaluate2 = evaluateLater(el, expression);
    var assignmentExpression = "".concat(expression, " = rightSideOfExpression($event, ").concat(expression, ")");
    var evaluateAssignment = evaluateLater(el, assignmentExpression);
    var event = el.tagName.toLowerCase() === "select" || ["checkbox", "radio"].includes(el.type) || modifiers.includes("lazy") ? "change" : "input";
    var assigmentFunction = generateAssignmentFunction(el, modifiers, expression);
    var removeListener = on(el, event, modifiers, function (e) {
      evaluateAssignment(function () {}, {
        scope: {
          $event: e,
          rightSideOfExpression: assigmentFunction
        }
      });
    });
    cleanup(function () {
      return removeListener();
    });

    el._x_forceModelUpdate = function () {
      evaluate2(function (value) {
        if (value === void 0 && expression.match(/\./)) value = "";
        window.fromModel = true;
        mutateDom(function () {
          return bind(el, "value", value);
        });
        delete window.fromModel;
      });
    };

    effect3(function () {
      if (modifiers.includes("unintrusive") && document.activeElement.isSameNode(el)) return;

      el._x_forceModelUpdate();
    });
  });

  function generateAssignmentFunction(el, modifiers, expression) {
    if (el.type === "radio") {
      mutateDom(function () {
        if (!el.hasAttribute("name")) el.setAttribute("name", expression);
      });
    }

    return function (event, currentValue) {
      return mutateDom(function () {
        if (event instanceof CustomEvent && event.detail !== void 0) {
          return event.detail;
        } else if (el.type === "checkbox") {
          if (Array.isArray(currentValue)) {
            var newValue = modifiers.includes("number") ? safeParseNumber(event.target.value) : event.target.value;
            return event.target.checked ? currentValue.concat([newValue]) : currentValue.filter(function (el2) {
              return !checkedAttrLooseCompare2(el2, newValue);
            });
          } else {
            return event.target.checked;
          }
        } else if (el.tagName.toLowerCase() === "select" && el.multiple) {
          return modifiers.includes("number") ? Array.from(event.target.selectedOptions).map(function (option) {
            var rawValue = option.value || option.text;
            return safeParseNumber(rawValue);
          }) : Array.from(event.target.selectedOptions).map(function (option) {
            return option.value || option.text;
          });
        } else {
          var rawValue = event.target.value;
          return modifiers.includes("number") ? safeParseNumber(rawValue) : modifiers.includes("trim") ? rawValue.trim() : rawValue;
        }
      });
    };
  }

  function safeParseNumber(rawValue) {
    var number = rawValue ? parseFloat(rawValue) : null;
    return isNumeric2(number) ? number : rawValue;
  }

  function checkedAttrLooseCompare2(valueA, valueB) {
    return valueA == valueB;
  }

  function isNumeric2(subject) {
    return !Array.isArray(subject) && !isNaN(subject);
  } // packages/alpinejs/src/directives/x-cloak.js


  directive("cloak", function (el) {
    return queueMicrotask(function () {
      return mutateDom(function () {
        return el.removeAttribute(prefix("cloak"));
      });
    });
  }); // packages/alpinejs/src/directives/x-init.js

  addInitSelector(function () {
    return "[".concat(prefix("init"), "]");
  });
  directive("init", skipDuringClone(function (el, _ref39) {
    var expression = _ref39.expression;
    return evaluate(el, expression, {}, false);
  })); // packages/alpinejs/src/directives/x-text.js

  directive("text", function (el, _ref40, _ref41) {
    var expression = _ref40.expression;
    var effect3 = _ref41.effect,
        evaluateLater2 = _ref41.evaluateLater;
    var evaluate2 = evaluateLater2(expression);
    effect3(function () {
      evaluate2(function (value) {
        mutateDom(function () {
          el.textContent = value;
        });
      });
    });
  }); // packages/alpinejs/src/directives/x-html.js

  directive("html", function (el, _ref42, _ref43) {
    var expression = _ref42.expression;
    var effect3 = _ref43.effect,
        evaluateLater2 = _ref43.evaluateLater;
    var evaluate2 = evaluateLater2(expression);
    effect3(function () {
      evaluate2(function (value) {
        el.innerHTML = value;
      });
    });
  }); // packages/alpinejs/src/directives/x-bind.js

  mapAttributes(startingWith(":", into(prefix("bind:"))));
  directive("bind", function (el, _ref44, _ref45) {
    var value = _ref44.value,
        modifiers = _ref44.modifiers,
        expression = _ref44.expression,
        original = _ref44.original;
    var effect3 = _ref45.effect;
    if (!value) return applyBindingsObject(el, expression, original, effect3);
    if (value === "key") return storeKeyForXFor(el, expression);
    var evaluate2 = evaluateLater(el, expression);
    effect3(function () {
      return evaluate2(function (result) {
        if (result === void 0 && expression.match(/\./)) result = "";
        mutateDom(function () {
          return bind(el, value, result, modifiers);
        });
      });
    });
  });

  function applyBindingsObject(el, expression, original, effect3) {
    var getBindings = evaluateLater(el, expression);
    var cleanupRunners = [];
    effect3(function () {
      while (cleanupRunners.length) {
        cleanupRunners.pop()();
      }

      getBindings(function (bindings) {
        var attributes = Object.entries(bindings).map(function (_ref46) {
          var _ref47 = _slicedToArray(_ref46, 2),
              name = _ref47[0],
              value = _ref47[1];

          return {
            name: name,
            value: value
          };
        });
        directives(el, attributes, original).map(function (handle) {
          cleanupRunners.push(handle.runCleanups);
          handle();
        });
      });
    });
  }

  function storeKeyForXFor(el, expression) {
    el._x_keyExpression = expression;
  } // packages/alpinejs/src/directives/x-data.js


  addRootSelector(function () {
    return "[".concat(prefix("data"), "]");
  });
  directive("data", skipDuringClone(function (el, _ref48, _ref49) {
    var expression = _ref48.expression;
    var cleanup = _ref49.cleanup;
    expression = expression === "" ? "{}" : expression;
    var magicContext = {};
    injectMagics(magicContext, el);
    var dataProviderContext = {};
    injectDataProviders(dataProviderContext, magicContext);
    var data2 = evaluate(el, expression, {
      scope: dataProviderContext
    });
    injectMagics(data2, el);
    var reactiveData = reactive(data2);
    initInterceptors(reactiveData);
    var undo = addScopeToNode(el, reactiveData);
    if (reactiveData["init"]) reactiveData["init"]();
    cleanup(function () {
      undo();
      reactiveData["destroy"] && reactiveData["destroy"]();
    });
  })); // packages/alpinejs/src/directives/x-show.js

  directive("show", function (el, _ref50, _ref51) {
    var modifiers = _ref50.modifiers,
        expression = _ref50.expression;
    var effect3 = _ref51.effect;
    var evaluate2 = evaluateLater(el, expression);

    var hide = function hide() {
      return mutateDom(function () {
        el.style.display = "none";
        el._x_isShown = false;
      });
    };

    var show = function show() {
      return mutateDom(function () {
        if (el.style.length === 1 && el.style.display === "none") {
          el.removeAttribute("style");
        } else {
          el.style.removeProperty("display");
        }

        el._x_isShown = true;
      });
    };

    var clickAwayCompatibleShow = function clickAwayCompatibleShow() {
      return setTimeout(show);
    };

    var toggle = once(function (value) {
      return value ? show() : hide();
    }, function (value) {
      if (typeof el._x_toggleAndCascadeWithTransitions === "function") {
        el._x_toggleAndCascadeWithTransitions(el, value, show, hide);
      } else {
        value ? clickAwayCompatibleShow() : hide();
      }
    });
    var oldValue;
    var firstTime = true;
    effect3(function () {
      return evaluate2(function (value) {
        if (!firstTime && value === oldValue) return;
        if (modifiers.includes("immediate")) value ? clickAwayCompatibleShow() : hide();
        toggle(value);
        oldValue = value;
        firstTime = false;
      });
    });
  }); // packages/alpinejs/src/directives/x-for.js

  directive("for", function (el, _ref52, _ref53) {
    var expression = _ref52.expression;
    var effect3 = _ref53.effect,
        cleanup = _ref53.cleanup;
    var iteratorNames = parseForExpression(expression);
    var evaluateItems = evaluateLater(el, iteratorNames.items);
    var evaluateKey = evaluateLater(el, el._x_keyExpression || "index");
    el._x_prevKeys = [];
    el._x_lookup = {};
    effect3(function () {
      return loop(el, iteratorNames, evaluateItems, evaluateKey);
    });
    cleanup(function () {
      Object.values(el._x_lookup).forEach(function (el2) {
        return el2.remove();
      });
      delete el._x_prevKeys;
      delete el._x_lookup;
    });
  });

  function loop(el, iteratorNames, evaluateItems, evaluateKey) {
    var isObject = function isObject(i) {
      return _typeof(i) === "object" && !Array.isArray(i);
    };

    var templateEl = el;
    evaluateItems(function (items) {
      if (isNumeric3(items) && items >= 0) {
        items = Array.from(Array(items).keys(), function (i) {
          return i + 1;
        });
      }

      var lookup = el._x_lookup;
      var prevKeys = el._x_prevKeys;
      var scopes = [];
      var keys = [];

      if (isObject(items)) {
        items = Object.entries(items).map(function (_ref54) {
          var _ref55 = _slicedToArray(_ref54, 2),
              key = _ref55[0],
              value = _ref55[1];

          var scope = getIterationScopeVariables(iteratorNames, value, key, items);
          evaluateKey(function (value2) {
            return keys.push(value2);
          }, {
            scope: _objectSpread({
              index: key
            }, scope)
          });
          scopes.push(scope);
        });
      } else {
        for (var i = 0; i < items.length; i++) {
          var scope = getIterationScopeVariables(iteratorNames, items[i], i, items);
          evaluateKey(function (value) {
            return keys.push(value);
          }, {
            scope: _objectSpread({
              index: i
            }, scope)
          });
          scopes.push(scope);
        }
      }

      var adds = [];
      var moves = [];
      var removes = [];
      var sames = [];

      for (var _i3 = 0; _i3 < prevKeys.length; _i3++) {
        var key = prevKeys[_i3];
        if (keys.indexOf(key) === -1) removes.push(key);
      }

      prevKeys = prevKeys.filter(function (key) {
        return !removes.includes(key);
      });
      var lastKey = "template";

      for (var _i4 = 0; _i4 < keys.length; _i4++) {
        var _key6 = keys[_i4];
        var prevIndex = prevKeys.indexOf(_key6);

        if (prevIndex === -1) {
          prevKeys.splice(_i4, 0, _key6);
          adds.push([lastKey, _i4]);
        } else if (prevIndex !== _i4) {
          var keyInSpot = prevKeys.splice(_i4, 1)[0];
          var keyForSpot = prevKeys.splice(prevIndex - 1, 1)[0];
          prevKeys.splice(_i4, 0, keyForSpot);
          prevKeys.splice(prevIndex, 0, keyInSpot);
          moves.push([keyInSpot, keyForSpot]);
        } else {
          sames.push(_key6);
        }

        lastKey = _key6;
      }

      for (var _i5 = 0; _i5 < removes.length; _i5++) {
        var _key7 = removes[_i5];

        lookup[_key7].remove();

        lookup[_key7] = null;
        delete lookup[_key7];
      }

      var _loop4 = function _loop4(_i6) {
        var _moves$_i = _slicedToArray(moves[_i6], 2),
            keyInSpot = _moves$_i[0],
            keyForSpot = _moves$_i[1];

        var elInSpot = lookup[keyInSpot];
        var elForSpot = lookup[keyForSpot];
        var marker = document.createElement("div");
        mutateDom(function () {
          elForSpot.after(marker);
          elInSpot.after(elForSpot);
          marker.before(elInSpot);
          marker.remove();
        });
        refreshScope(elForSpot, scopes[keys.indexOf(keyForSpot)]);
      };

      for (var _i6 = 0; _i6 < moves.length; _i6++) {
        _loop4(_i6);
      }

      var _loop5 = function _loop5(_i7) {
        var _adds$_i = _slicedToArray(adds[_i7], 2),
            lastKey2 = _adds$_i[0],
            index = _adds$_i[1];

        var lastEl = lastKey2 === "template" ? templateEl : lookup[lastKey2];
        var scope = scopes[index];
        var key = keys[index];
        var clone2 = document.importNode(templateEl.content, true).firstElementChild;
        addScopeToNode(clone2, reactive(scope), templateEl);
        mutateDom(function () {
          lastEl.after(clone2);
          initTree(clone2);
        });

        if (_typeof(key) === "object") {
          warn("x-for key cannot be an object, it must be a string or an integer", templateEl);
        }

        lookup[key] = clone2;
      };

      for (var _i7 = 0; _i7 < adds.length; _i7++) {
        _loop5(_i7);
      }

      for (var _i8 = 0; _i8 < sames.length; _i8++) {
        refreshScope(lookup[sames[_i8]], scopes[keys.indexOf(sames[_i8])]);
      }

      templateEl._x_prevKeys = keys;
    });
  }

  function parseForExpression(expression) {
    var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
    var stripParensRE = /^\s*\(|\)\s*$/g;
    var forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
    var inMatch = expression.match(forAliasRE);
    if (!inMatch) return;
    var res = {};
    res.items = inMatch[2].trim();
    var item = inMatch[1].replace(stripParensRE, "").trim();
    var iteratorMatch = item.match(forIteratorRE);

    if (iteratorMatch) {
      res.item = item.replace(forIteratorRE, "").trim();
      res.index = iteratorMatch[1].trim();

      if (iteratorMatch[2]) {
        res.collection = iteratorMatch[2].trim();
      }
    } else {
      res.item = item;
    }

    return res;
  }

  function getIterationScopeVariables(iteratorNames, item, index, items) {
    var scopeVariables = {};

    if (/^\[.*\]$/.test(iteratorNames.item) && Array.isArray(item)) {
      var names = iteratorNames.item.replace("[", "").replace("]", "").split(",").map(function (i) {
        return i.trim();
      });
      names.forEach(function (name, i) {
        scopeVariables[name] = item[i];
      });
    } else {
      scopeVariables[iteratorNames.item] = item;
    }

    if (iteratorNames.index) scopeVariables[iteratorNames.index] = index;
    if (iteratorNames.collection) scopeVariables[iteratorNames.collection] = items;
    return scopeVariables;
  }

  function isNumeric3(subject) {
    return !Array.isArray(subject) && !isNaN(subject);
  } // packages/alpinejs/src/directives/x-ref.js


  function handler2() {}

  handler2.inline = function (el, _ref56, _ref57) {
    var expression = _ref56.expression;
    var cleanup = _ref57.cleanup;
    var root = closestRoot(el);
    if (!root._x_refs) root._x_refs = {};
    root._x_refs[expression] = el;
    cleanup(function () {
      return delete root._x_refs[expression];
    });
  };

  directive("ref", handler2); // packages/alpinejs/src/directives/x-if.js

  directive("if", function (el, _ref58, _ref59) {
    var expression = _ref58.expression;
    var effect3 = _ref59.effect,
        cleanup = _ref59.cleanup;
    var evaluate2 = evaluateLater(el, expression);

    var show = function show() {
      if (el._x_currentIfEl) return el._x_currentIfEl;
      var clone2 = el.content.cloneNode(true).firstElementChild;
      addScopeToNode(clone2, {}, el);
      mutateDom(function () {
        el.after(clone2);
        initTree(clone2);
      });
      el._x_currentIfEl = clone2;

      el._x_undoIf = function () {
        clone2.remove();
        delete el._x_currentIfEl;
      };

      return clone2;
    };

    var hide = function hide() {
      if (!el._x_undoIf) return;

      el._x_undoIf();

      delete el._x_undoIf;
    };

    effect3(function () {
      return evaluate2(function (value) {
        value ? show() : hide();
      });
    });
    cleanup(function () {
      return el._x_undoIf && el._x_undoIf();
    });
  }); // packages/alpinejs/src/directives/x-on.js

  mapAttributes(startingWith("@", into(prefix("on:"))));
  directive("on", skipDuringClone(function (el, _ref60, _ref61) {
    var value = _ref60.value,
        modifiers = _ref60.modifiers,
        expression = _ref60.expression;
    var cleanup = _ref61.cleanup;
    var evaluate2 = expression ? evaluateLater(el, expression) : function () {};
    var removeListener = on(el, value, modifiers, function (e) {
      evaluate2(function () {}, {
        scope: {
          $event: e
        },
        params: [e]
      });
    });
    cleanup(function () {
      return removeListener();
    });
  })); // packages/alpinejs/src/index.js

  alpine_default.setEvaluator(normalEvaluator);
  alpine_default.setReactivityEngine({
    reactive: import_reactivity9.reactive,
    effect: import_reactivity9.effect,
    release: import_reactivity9.stop,
    raw: import_reactivity9.toRaw
  });
  var src_default = alpine_default; // packages/alpinejs/builds/module.js

  var module_default = src_default;

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

      var $ = window.$;
      this.$sendButton = $('kbf-send-button');
      this.$form = $('form');
      this.init();
    }

    _createClass(App, [{
      key: "init",
      value: function init() {
        new KbfMiniMap('#kbf-minimap'); // Inicjalizuj minimape

        new KbfSendMessage(); // Inicjuj formularz

        new KbfBackButton('.kbf-back-button');
        new KbfFooterTop();
        new KbfLikeCompany();
        window.Alpine = module_default;
        module_default.start();
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
//# sourceMappingURL=message.js.map
