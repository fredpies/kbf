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

  var config = {
    env: 'dev',
    url: 'https://webplanet.biz',
    apiEndpoint: 'https://webplanet.biz/kbf'
  };

  function createCommonjsModule(fn) {
    var module = { exports: {} };
  	return fn(module, module.exports), module.exports;
  }

  createCommonjsModule(function (module) {
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

  function isTouchDevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
  } // Zwraca liste nazw powiatow, areasGeoJSON - granice powiatow z nazwami

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
  var apiEndpoint = config.apiEndpoint;

  var KbfMap = /*#__PURE__*/function (_EventTarget) {
    _inherits(KbfMap, _EventTarget);

    var _super = _createSuper(KbfMap);

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
                weight: 0.6,
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
                weight: 0.6,
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
        // TODO: Pokaz markery firm
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
            markerMarkup = "<h6 class=\"mb-3\">".concat(markerData.company_name, "</h6><p>").concat(markerData.company_address, "</p><p>").concat(markerData.company_zip, " ").concat(markerData.company_city, "</p>\n                \n                <p>").concat(markerData.company_phone_1.length > 0 ? 'tel. ' + markerData.company_phone_1 : '', " ").concat(markerData.company_phone_2.length > 0 ? ' , ' + markerData.company_phone_2 : '', "</p>\n                <div style=\"text-align: center\"><a href=\"").concat(KbfMap.markersAPIEndpoint).concat(markerData.url, "\">Zobacz szczeg\xF3\u0142y</a></div>");
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
    iconUrl: "".concat(apiEndpoint, "/site/templates/assets/images/marker-icon.png"),
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

  var App = /*#__PURE__*/function () {
    function App() {
      _classCallCheck(this, App);

      this.init();
    }

    _createClass(App, [{
      key: "init",
      value: function init() {
        new KbfMiniMap('#kbf-minimap');
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
//# sourceMappingURL=company.js.map
