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

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function getDefaultExportFromCjs (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
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

  function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
      function RefImpl(_rawValue) {
        var _shallow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

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

  function data$1(name, callback) {
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

    version: "3.2.2",
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
    data: data$1
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


  directive("transition", function (el, _ref29, _ref30) {
    var value = _ref29.value,
        modifiers = _ref29.modifiers,
        expression = _ref29.expression;
    var evaluate2 = _ref30.evaluate;
    if (typeof expression === "function") expression = evaluate2(expression);

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
            var carry = Promise.all([el2._x_hidePromise].concat(_toConsumableArray((el2._x_hideChildren || []).map(hideAfterChildren)))).then(function (_ref31) {
              var _ref32 = _slicedToArray(_ref31, 1),
                  i = _ref32[0];

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
    var _ref33 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
        _during = _ref33.during,
        start2 = _ref33.start,
        _end = _ref33.end,
        entering = _ref33.entering;

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

  handler.inline = function (el, _ref34, _ref35) {
    var modifiers = _ref34.modifiers;
    var cleanup = _ref35.cleanup;
    modifiers.includes("self") ? el._x_ignoreSelf = true : el._x_ignore = true;
    cleanup(function () {
      modifiers.includes("self") ? delete el._x_ignoreSelf : delete el._x_ignore;
    });
  };

  directive("ignore", handler); // packages/alpinejs/src/directives/x-effect.js

  directive("effect", function (el, _ref36, _ref37) {
    var expression = _ref36.expression;
    var effect3 = _ref37.effect;
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


  function on$1(el, event, modifiers, callback) {
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


  directive("model", function (el, _ref38, _ref39) {
    var modifiers = _ref38.modifiers,
        expression = _ref38.expression;
    var effect3 = _ref39.effect,
        cleanup = _ref39.cleanup;
    var evaluate2 = evaluateLater(el, expression);
    var assignmentExpression = "".concat(expression, " = rightSideOfExpression($event, ").concat(expression, ")");
    var evaluateAssignment = evaluateLater(el, assignmentExpression);
    var event = el.tagName.toLowerCase() === "select" || ["checkbox", "radio"].includes(el.type) || modifiers.includes("lazy") ? "change" : "input";
    var assigmentFunction = generateAssignmentFunction(el, modifiers, expression);
    var removeListener = on$1(el, event, modifiers, function (e) {
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
  directive("init", skipDuringClone(function (el, _ref40) {
    var expression = _ref40.expression;
    return evaluate(el, expression, {}, false);
  })); // packages/alpinejs/src/directives/x-text.js

  directive("text", function (el, _ref41, _ref42) {
    var expression = _ref41.expression;
    var effect3 = _ref42.effect,
        evaluateLater2 = _ref42.evaluateLater;
    var evaluate2 = evaluateLater2(expression);
    effect3(function () {
      evaluate2(function (value) {
        mutateDom(function () {
          el.textContent = value;
        });
      });
    });
  }); // packages/alpinejs/src/directives/x-html.js

  directive("html", function (el, _ref43, _ref44) {
    var expression = _ref43.expression;
    var effect3 = _ref44.effect,
        evaluateLater2 = _ref44.evaluateLater;
    var evaluate2 = evaluateLater2(expression);
    effect3(function () {
      evaluate2(function (value) {
        el.innerHTML = value;
      });
    });
  }); // packages/alpinejs/src/directives/x-bind.js

  mapAttributes(startingWith(":", into(prefix("bind:"))));
  directive("bind", function (el, _ref45, _ref46) {
    var value = _ref45.value,
        modifiers = _ref45.modifiers,
        expression = _ref45.expression,
        original = _ref45.original;
    var effect3 = _ref46.effect;
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
        var attributes = Object.entries(bindings).map(function (_ref47) {
          var _ref48 = _slicedToArray(_ref47, 2),
              name = _ref48[0],
              value = _ref48[1];

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
  directive("data", skipDuringClone(function (el, _ref49, _ref50) {
    var expression = _ref49.expression;
    var cleanup = _ref50.cleanup;
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

  directive("show", function (el, _ref51, _ref52) {
    var modifiers = _ref51.modifiers,
        expression = _ref51.expression;
    var effect3 = _ref52.effect;
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

  directive("for", function (el, _ref53, _ref54) {
    var expression = _ref53.expression;
    var effect3 = _ref54.effect,
        cleanup = _ref54.cleanup;
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
        items = Object.entries(items).map(function (_ref55) {
          var _ref56 = _slicedToArray(_ref55, 2),
              key = _ref56[0],
              value = _ref56[1];

          var scope = getIterationScopeVariables(iteratorNames, value, key, items);
          evaluateKey(function (value2) {
            return keys.push(value2);
          }, {
            scope: _objectSpread$2({
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
            scope: _objectSpread$2({
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

  handler2.inline = function (el, _ref57, _ref58) {
    var expression = _ref57.expression;
    var cleanup = _ref58.cleanup;
    var root = closestRoot(el);
    if (!root._x_refs) root._x_refs = {};
    root._x_refs[expression] = el;
    cleanup(function () {
      return delete root._x_refs[expression];
    });
  };

  directive("ref", handler2); // packages/alpinejs/src/directives/x-if.js

  directive("if", function (el, _ref59, _ref60) {
    var expression = _ref59.expression;
    var effect3 = _ref60.effect,
        cleanup = _ref60.cleanup;
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
  directive("on", skipDuringClone(function (el, _ref61, _ref62) {
    var value = _ref61.value,
        modifiers = _ref61.modifiers,
        expression = _ref61.expression;
    var cleanup = _ref62.cleanup;
    var evaluate2 = expression ? evaluateLater(el, expression) : function () {};
    var removeListener = on$1(el, value, modifiers, function (e) {
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

  function _isNativeReflectConstruct$2() {
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
    if (_isNativeReflectConstruct$2()) {
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
        this.emit(new CustomEvent('click'));
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
        this.$showFooterTop.unbind().click(function (e) {
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
        this.$footerBottom.click(function (e) {
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

  var Event$1;

  if (typeof window$1.CustomEvent === "function") {
    Event$1 = window$1.CustomEvent;
  } else {
    Event$1 = function Event(event, params) {
      params = params || {
        bubbles: false,
        cancelable: false,
        detail: undefined
      };
      var evt = document.createEvent("CustomEvent");
      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
      return evt;
    };

    Event$1.prototype = window$1.Event.prototype;
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
  DependencyLib.Event = Event$1;

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

  var quill = createCommonjsModule(function (module, exports) {
    (function webpackUniversalModuleDefinition(root, factory) {
      module.exports = factory();
    })(typeof self !== 'undefined' ? self : commonjsGlobal, function () {
      return (
        /******/
        function (modules) {
          // webpackBootstrap

          /******/
          // The module cache

          /******/
          var installedModules = {};
          /******/

          /******/
          // The require function

          /******/

          function __webpack_require__(moduleId) {
            /******/

            /******/
            // Check if module is in cache

            /******/
            if (installedModules[moduleId]) {
              /******/
              return installedModules[moduleId].exports;
              /******/
            }
            /******/
            // Create a new module (and put it into the cache)

            /******/


            var module = installedModules[moduleId] = {
              /******/
              i: moduleId,

              /******/
              l: false,

              /******/
              exports: {}
              /******/

            };
            /******/

            /******/
            // Execute the module function

            /******/

            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            /******/

            /******/
            // Flag the module as loaded

            /******/

            module.l = true;
            /******/

            /******/
            // Return the exports of the module

            /******/

            return module.exports;
            /******/
          }
          /******/

          /******/

          /******/
          // expose the modules object (__webpack_modules__)

          /******/


          __webpack_require__.m = modules;
          /******/

          /******/
          // expose the module cache

          /******/

          __webpack_require__.c = installedModules;
          /******/

          /******/
          // define getter function for harmony exports

          /******/

          __webpack_require__.d = function (exports, name, getter) {
            /******/
            if (!__webpack_require__.o(exports, name)) {
              /******/
              Object.defineProperty(exports, name, {
                /******/
                configurable: false,

                /******/
                enumerable: true,

                /******/
                get: getter
                /******/

              });
              /******/
            }
            /******/

          };
          /******/

          /******/
          // getDefaultExport function for compatibility with non-harmony modules

          /******/


          __webpack_require__.n = function (module) {
            /******/
            var getter = module && module.__esModule ?
            /******/
            function getDefault() {
              return module['default'];
            } :
            /******/
            function getModuleExports() {
              return module;
            };
            /******/

            __webpack_require__.d(getter, 'a', getter);
            /******/


            return getter;
            /******/
          };
          /******/

          /******/
          // Object.prototype.hasOwnProperty.call

          /******/


          __webpack_require__.o = function (object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
          };
          /******/

          /******/
          // __webpack_public_path__

          /******/


          __webpack_require__.p = "";
          /******/

          /******/
          // Load entry module and return exports

          /******/

          return __webpack_require__(__webpack_require__.s = 109);
          /******/
        }(
        /************************************************************************/

        /******/
        [
        /* 0 */

        /***/
        function (module, exports, __webpack_require__) {

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var container_1 = __webpack_require__(17);

          var format_1 = __webpack_require__(18);

          var leaf_1 = __webpack_require__(19);

          var scroll_1 = __webpack_require__(45);

          var inline_1 = __webpack_require__(46);

          var block_1 = __webpack_require__(47);

          var embed_1 = __webpack_require__(48);

          var text_1 = __webpack_require__(49);

          var attributor_1 = __webpack_require__(12);

          var class_1 = __webpack_require__(32);

          var style_1 = __webpack_require__(33);

          var store_1 = __webpack_require__(31);

          var Registry = __webpack_require__(1);

          var Parchment = {
            Scope: Registry.Scope,
            create: Registry.create,
            find: Registry.find,
            query: Registry.query,
            register: Registry.register,
            Container: container_1.default,
            Format: format_1.default,
            Leaf: leaf_1.default,
            Embed: embed_1.default,
            Scroll: scroll_1.default,
            Block: block_1.default,
            Inline: inline_1.default,
            Text: text_1.default,
            Attributor: {
              Attribute: attributor_1.default,
              Class: class_1.default,
              Style: style_1.default,
              Store: store_1.default
            }
          };
          exports.default = Parchment;
          /***/
        },
        /* 1 */

        /***/
        function (module, exports, __webpack_require__) {

          var __extends = this && this.__extends || function () {
            var extendStatics = Object.setPrototypeOf || {
              __proto__: []
            } instanceof Array && function (d, b) {
              d.__proto__ = b;
            } || function (d, b) {
              for (var p in b) {
                if (b.hasOwnProperty(p)) d[p] = b[p];
              }
            };

            return function (d, b) {
              extendStatics(d, b);

              function __() {
                this.constructor = d;
              }

              d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
          }();

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var ParchmentError =
          /** @class */
          function (_super) {
            __extends(ParchmentError, _super);

            function ParchmentError(message) {
              var _this = this;

              message = '[Parchment] ' + message;
              _this = _super.call(this, message) || this;
              _this.message = message;
              _this.name = _this.constructor.name;
              return _this;
            }

            return ParchmentError;
          }(Error);

          exports.ParchmentError = ParchmentError;
          var attributes = {};
          var classes = {};
          var tags = {};
          var types = {};
          exports.DATA_KEY = '__blot';
          var Scope;

          (function (Scope) {
            Scope[Scope["TYPE"] = 3] = "TYPE";
            Scope[Scope["LEVEL"] = 12] = "LEVEL";
            Scope[Scope["ATTRIBUTE"] = 13] = "ATTRIBUTE";
            Scope[Scope["BLOT"] = 14] = "BLOT";
            Scope[Scope["INLINE"] = 7] = "INLINE";
            Scope[Scope["BLOCK"] = 11] = "BLOCK";
            Scope[Scope["BLOCK_BLOT"] = 10] = "BLOCK_BLOT";
            Scope[Scope["INLINE_BLOT"] = 6] = "INLINE_BLOT";
            Scope[Scope["BLOCK_ATTRIBUTE"] = 9] = "BLOCK_ATTRIBUTE";
            Scope[Scope["INLINE_ATTRIBUTE"] = 5] = "INLINE_ATTRIBUTE";
            Scope[Scope["ANY"] = 15] = "ANY";
          })(Scope = exports.Scope || (exports.Scope = {}));

          function create(input, value) {
            var match = query(input);

            if (match == null) {
              throw new ParchmentError("Unable to create " + input + " blot");
            }

            var BlotClass = match;
            var node = // @ts-ignore
            input instanceof Node || input['nodeType'] === Node.TEXT_NODE ? input : BlotClass.create(value);
            return new BlotClass(node, value);
          }

          exports.create = create;

          function find(node, bubble) {
            if (bubble === void 0) {
              bubble = false;
            }

            if (node == null) return null; // @ts-ignore

            if (node[exports.DATA_KEY] != null) return node[exports.DATA_KEY].blot;
            if (bubble) return find(node.parentNode, bubble);
            return null;
          }

          exports.find = find;

          function query(query, scope) {
            if (scope === void 0) {
              scope = Scope.ANY;
            }

            var match;

            if (typeof query === 'string') {
              match = types[query] || attributes[query]; // @ts-ignore
            } else if (query instanceof Text || query['nodeType'] === Node.TEXT_NODE) {
              match = types['text'];
            } else if (typeof query === 'number') {
              if (query & Scope.LEVEL & Scope.BLOCK) {
                match = types['block'];
              } else if (query & Scope.LEVEL & Scope.INLINE) {
                match = types['inline'];
              }
            } else if (query instanceof HTMLElement) {
              var names = (query.getAttribute('class') || '').split(/\s+/);

              for (var i in names) {
                match = classes[names[i]];
                if (match) break;
              }

              match = match || tags[query.tagName];
            }

            if (match == null) return null; // @ts-ignore

            if (scope & Scope.LEVEL & match.scope && scope & Scope.TYPE & match.scope) return match;
            return null;
          }

          exports.query = query;

          function register() {
            var Definitions = [];

            for (var _i = 0; _i < arguments.length; _i++) {
              Definitions[_i] = arguments[_i];
            }

            if (Definitions.length > 1) {
              return Definitions.map(function (d) {
                return register(d);
              });
            }

            var Definition = Definitions[0];

            if (typeof Definition.blotName !== 'string' && typeof Definition.attrName !== 'string') {
              throw new ParchmentError('Invalid definition');
            } else if (Definition.blotName === 'abstract') {
              throw new ParchmentError('Cannot register abstract class');
            }

            types[Definition.blotName || Definition.attrName] = Definition;

            if (typeof Definition.keyName === 'string') {
              attributes[Definition.keyName] = Definition;
            } else {
              if (Definition.className != null) {
                classes[Definition.className] = Definition;
              }

              if (Definition.tagName != null) {
                if (Array.isArray(Definition.tagName)) {
                  Definition.tagName = Definition.tagName.map(function (tagName) {
                    return tagName.toUpperCase();
                  });
                } else {
                  Definition.tagName = Definition.tagName.toUpperCase();
                }

                var tagNames = Array.isArray(Definition.tagName) ? Definition.tagName : [Definition.tagName];
                tagNames.forEach(function (tag) {
                  if (tags[tag] == null || Definition.className == null) {
                    tags[tag] = Definition;
                  }
                });
              }
            }

            return Definition;
          }

          exports.register = register;
          /***/
        },
        /* 2 */

        /***/
        function (module, exports, __webpack_require__) {
          var diff = __webpack_require__(51);

          var equal = __webpack_require__(11);

          var extend = __webpack_require__(3);

          var op = __webpack_require__(20);

          var NULL_CHARACTER = String.fromCharCode(0); // Placeholder char for embed in diff()

          var Delta = function Delta(ops) {
            // Assume we are given a well formed ops
            if (Array.isArray(ops)) {
              this.ops = ops;
            } else if (ops != null && Array.isArray(ops.ops)) {
              this.ops = ops.ops;
            } else {
              this.ops = [];
            }
          };

          Delta.prototype.insert = function (text, attributes) {
            var newOp = {};
            if (text.length === 0) return this;
            newOp.insert = text;

            if (attributes != null && _typeof(attributes) === 'object' && Object.keys(attributes).length > 0) {
              newOp.attributes = attributes;
            }

            return this.push(newOp);
          };

          Delta.prototype['delete'] = function (length) {
            if (length <= 0) return this;
            return this.push({
              'delete': length
            });
          };

          Delta.prototype.retain = function (length, attributes) {
            if (length <= 0) return this;
            var newOp = {
              retain: length
            };

            if (attributes != null && _typeof(attributes) === 'object' && Object.keys(attributes).length > 0) {
              newOp.attributes = attributes;
            }

            return this.push(newOp);
          };

          Delta.prototype.push = function (newOp) {
            var index = this.ops.length;
            var lastOp = this.ops[index - 1];
            newOp = extend(true, {}, newOp);

            if (_typeof(lastOp) === 'object') {
              if (typeof newOp['delete'] === 'number' && typeof lastOp['delete'] === 'number') {
                this.ops[index - 1] = {
                  'delete': lastOp['delete'] + newOp['delete']
                };
                return this;
              } // Since it does not matter if we insert before or after deleting at the same index,
              // always prefer to insert first


              if (typeof lastOp['delete'] === 'number' && newOp.insert != null) {
                index -= 1;
                lastOp = this.ops[index - 1];

                if (_typeof(lastOp) !== 'object') {
                  this.ops.unshift(newOp);
                  return this;
                }
              }

              if (equal(newOp.attributes, lastOp.attributes)) {
                if (typeof newOp.insert === 'string' && typeof lastOp.insert === 'string') {
                  this.ops[index - 1] = {
                    insert: lastOp.insert + newOp.insert
                  };
                  if (_typeof(newOp.attributes) === 'object') this.ops[index - 1].attributes = newOp.attributes;
                  return this;
                } else if (typeof newOp.retain === 'number' && typeof lastOp.retain === 'number') {
                  this.ops[index - 1] = {
                    retain: lastOp.retain + newOp.retain
                  };
                  if (_typeof(newOp.attributes) === 'object') this.ops[index - 1].attributes = newOp.attributes;
                  return this;
                }
              }
            }

            if (index === this.ops.length) {
              this.ops.push(newOp);
            } else {
              this.ops.splice(index, 0, newOp);
            }

            return this;
          };

          Delta.prototype.chop = function () {
            var lastOp = this.ops[this.ops.length - 1];

            if (lastOp && lastOp.retain && !lastOp.attributes) {
              this.ops.pop();
            }

            return this;
          };

          Delta.prototype.filter = function (predicate) {
            return this.ops.filter(predicate);
          };

          Delta.prototype.forEach = function (predicate) {
            this.ops.forEach(predicate);
          };

          Delta.prototype.map = function (predicate) {
            return this.ops.map(predicate);
          };

          Delta.prototype.partition = function (predicate) {
            var passed = [],
                failed = [];
            this.forEach(function (op) {
              var target = predicate(op) ? passed : failed;
              target.push(op);
            });
            return [passed, failed];
          };

          Delta.prototype.reduce = function (predicate, initial) {
            return this.ops.reduce(predicate, initial);
          };

          Delta.prototype.changeLength = function () {
            return this.reduce(function (length, elem) {
              if (elem.insert) {
                return length + op.length(elem);
              } else if (elem.delete) {
                return length - elem.delete;
              }

              return length;
            }, 0);
          };

          Delta.prototype.length = function () {
            return this.reduce(function (length, elem) {
              return length + op.length(elem);
            }, 0);
          };

          Delta.prototype.slice = function (start, end) {
            start = start || 0;
            if (typeof end !== 'number') end = Infinity;
            var ops = [];
            var iter = op.iterator(this.ops);
            var index = 0;

            while (index < end && iter.hasNext()) {
              var nextOp;

              if (index < start) {
                nextOp = iter.next(start - index);
              } else {
                nextOp = iter.next(end - index);
                ops.push(nextOp);
              }

              index += op.length(nextOp);
            }

            return new Delta(ops);
          };

          Delta.prototype.compose = function (other) {
            var thisIter = op.iterator(this.ops);
            var otherIter = op.iterator(other.ops);
            var ops = [];
            var firstOther = otherIter.peek();

            if (firstOther != null && typeof firstOther.retain === 'number' && firstOther.attributes == null) {
              var firstLeft = firstOther.retain;

              while (thisIter.peekType() === 'insert' && thisIter.peekLength() <= firstLeft) {
                firstLeft -= thisIter.peekLength();
                ops.push(thisIter.next());
              }

              if (firstOther.retain - firstLeft > 0) {
                otherIter.next(firstOther.retain - firstLeft);
              }
            }

            var delta = new Delta(ops);

            while (thisIter.hasNext() || otherIter.hasNext()) {
              if (otherIter.peekType() === 'insert') {
                delta.push(otherIter.next());
              } else if (thisIter.peekType() === 'delete') {
                delta.push(thisIter.next());
              } else {
                var length = Math.min(thisIter.peekLength(), otherIter.peekLength());
                var thisOp = thisIter.next(length);
                var otherOp = otherIter.next(length);

                if (typeof otherOp.retain === 'number') {
                  var newOp = {};

                  if (typeof thisOp.retain === 'number') {
                    newOp.retain = length;
                  } else {
                    newOp.insert = thisOp.insert;
                  } // Preserve null when composing with a retain, otherwise remove it for inserts


                  var attributes = op.attributes.compose(thisOp.attributes, otherOp.attributes, typeof thisOp.retain === 'number');
                  if (attributes) newOp.attributes = attributes;
                  delta.push(newOp); // Optimization if rest of other is just retain

                  if (!otherIter.hasNext() && equal(delta.ops[delta.ops.length - 1], newOp)) {
                    var rest = new Delta(thisIter.rest());
                    return delta.concat(rest).chop();
                  } // Other op should be delete, we could be an insert or retain
                  // Insert + delete cancels out

                } else if (typeof otherOp['delete'] === 'number' && typeof thisOp.retain === 'number') {
                  delta.push(otherOp);
                }
              }
            }

            return delta.chop();
          };

          Delta.prototype.concat = function (other) {
            var delta = new Delta(this.ops.slice());

            if (other.ops.length > 0) {
              delta.push(other.ops[0]);
              delta.ops = delta.ops.concat(other.ops.slice(1));
            }

            return delta;
          };

          Delta.prototype.diff = function (other, index) {
            if (this.ops === other.ops) {
              return new Delta();
            }

            var strings = [this, other].map(function (delta) {
              return delta.map(function (op) {
                if (op.insert != null) {
                  return typeof op.insert === 'string' ? op.insert : NULL_CHARACTER;
                }

                var prep = delta === other ? 'on' : 'with';
                throw new Error('diff() called ' + prep + ' non-document');
              }).join('');
            });
            var delta = new Delta();
            var diffResult = diff(strings[0], strings[1], index);
            var thisIter = op.iterator(this.ops);
            var otherIter = op.iterator(other.ops);
            diffResult.forEach(function (component) {
              var length = component[1].length;

              while (length > 0) {
                var opLength = 0;

                switch (component[0]) {
                  case diff.INSERT:
                    opLength = Math.min(otherIter.peekLength(), length);
                    delta.push(otherIter.next(opLength));
                    break;

                  case diff.DELETE:
                    opLength = Math.min(length, thisIter.peekLength());
                    thisIter.next(opLength);
                    delta['delete'](opLength);
                    break;

                  case diff.EQUAL:
                    opLength = Math.min(thisIter.peekLength(), otherIter.peekLength(), length);
                    var thisOp = thisIter.next(opLength);
                    var otherOp = otherIter.next(opLength);

                    if (equal(thisOp.insert, otherOp.insert)) {
                      delta.retain(opLength, op.attributes.diff(thisOp.attributes, otherOp.attributes));
                    } else {
                      delta.push(otherOp)['delete'](opLength);
                    }

                    break;
                }

                length -= opLength;
              }
            });
            return delta.chop();
          };

          Delta.prototype.eachLine = function (predicate, newline) {
            newline = newline || '\n';
            var iter = op.iterator(this.ops);
            var line = new Delta();
            var i = 0;

            while (iter.hasNext()) {
              if (iter.peekType() !== 'insert') return;
              var thisOp = iter.peek();
              var start = op.length(thisOp) - iter.peekLength();
              var index = typeof thisOp.insert === 'string' ? thisOp.insert.indexOf(newline, start) - start : -1;

              if (index < 0) {
                line.push(iter.next());
              } else if (index > 0) {
                line.push(iter.next(index));
              } else {
                if (predicate(line, iter.next(1).attributes || {}, i) === false) {
                  return;
                }

                i += 1;
                line = new Delta();
              }
            }

            if (line.length() > 0) {
              predicate(line, {}, i);
            }
          };

          Delta.prototype.transform = function (other, priority) {
            priority = !!priority;

            if (typeof other === 'number') {
              return this.transformPosition(other, priority);
            }

            var thisIter = op.iterator(this.ops);
            var otherIter = op.iterator(other.ops);
            var delta = new Delta();

            while (thisIter.hasNext() || otherIter.hasNext()) {
              if (thisIter.peekType() === 'insert' && (priority || otherIter.peekType() !== 'insert')) {
                delta.retain(op.length(thisIter.next()));
              } else if (otherIter.peekType() === 'insert') {
                delta.push(otherIter.next());
              } else {
                var length = Math.min(thisIter.peekLength(), otherIter.peekLength());
                var thisOp = thisIter.next(length);
                var otherOp = otherIter.next(length);

                if (thisOp['delete']) {
                  // Our delete either makes their delete redundant or removes their retain
                  continue;
                } else if (otherOp['delete']) {
                  delta.push(otherOp);
                } else {
                  // We retain either their retain or insert
                  delta.retain(length, op.attributes.transform(thisOp.attributes, otherOp.attributes, priority));
                }
              }
            }

            return delta.chop();
          };

          Delta.prototype.transformPosition = function (index, priority) {
            priority = !!priority;
            var thisIter = op.iterator(this.ops);
            var offset = 0;

            while (thisIter.hasNext() && offset <= index) {
              var length = thisIter.peekLength();
              var nextType = thisIter.peekType();
              thisIter.next();

              if (nextType === 'delete') {
                index -= Math.min(length, index - offset);
                continue;
              } else if (nextType === 'insert' && (offset < index || !priority)) {
                index += length;
              }

              offset += length;
            }

            return index;
          };

          module.exports = Delta;
          /***/
        },
        /* 3 */

        /***/
        function (module, exports) {

          var hasOwn = Object.prototype.hasOwnProperty;
          var toStr = Object.prototype.toString;
          var defineProperty = Object.defineProperty;
          var gOPD = Object.getOwnPropertyDescriptor;

          var isArray = function isArray(arr) {
            if (typeof Array.isArray === 'function') {
              return Array.isArray(arr);
            }

            return toStr.call(arr) === '[object Array]';
          };

          var isPlainObject = function isPlainObject(obj) {
            if (!obj || toStr.call(obj) !== '[object Object]') {
              return false;
            }

            var hasOwnConstructor = hasOwn.call(obj, 'constructor');
            var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf'); // Not own constructor property must be Object

            if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
              return false;
            } // Own properties are enumerated firstly, so to speed up,
            // if last one is own, then all properties are own.


            var key;

            for (key in obj) {
              /**/
            }

            return typeof key === 'undefined' || hasOwn.call(obj, key);
          }; // If name is '__proto__', and Object.defineProperty is available, define __proto__ as an own property on target


          var setProperty = function setProperty(target, options) {
            if (defineProperty && options.name === '__proto__') {
              defineProperty(target, options.name, {
                enumerable: true,
                configurable: true,
                value: options.newValue,
                writable: true
              });
            } else {
              target[options.name] = options.newValue;
            }
          }; // Return undefined instead of __proto__ if '__proto__' is not an own property


          var getProperty = function getProperty(obj, name) {
            if (name === '__proto__') {
              if (!hasOwn.call(obj, name)) {
                return void 0;
              } else if (gOPD) {
                // In early versions of node, obj['__proto__'] is buggy when obj has
                // __proto__ as an own property. Object.getOwnPropertyDescriptor() works.
                return gOPD(obj, name).value;
              }
            }

            return obj[name];
          };

          module.exports = function extend() {
            var options, name, src, copy, copyIsArray, clone;
            var target = arguments[0];
            var i = 1;
            var length = arguments.length;
            var deep = false; // Handle a deep copy situation

            if (typeof target === 'boolean') {
              deep = target;
              target = arguments[1] || {}; // skip the boolean and the target

              i = 2;
            }

            if (target == null || _typeof(target) !== 'object' && typeof target !== 'function') {
              target = {};
            }

            for (; i < length; ++i) {
              options = arguments[i]; // Only deal with non-null/undefined values

              if (options != null) {
                // Extend the base object
                for (name in options) {
                  src = getProperty(target, name);
                  copy = getProperty(options, name); // Prevent never-ending loop

                  if (target !== copy) {
                    // Recurse if we're merging plain objects or arrays
                    if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
                      if (copyIsArray) {
                        copyIsArray = false;
                        clone = src && isArray(src) ? src : [];
                      } else {
                        clone = src && isPlainObject(src) ? src : {};
                      } // Never move original objects, clone them


                      setProperty(target, {
                        name: name,
                        newValue: extend(deep, clone, copy)
                      }); // Don't bring in undefined values
                    } else if (typeof copy !== 'undefined') {
                      setProperty(target, {
                        name: name,
                        newValue: copy
                      });
                    }
                  }
                }
              }
            } // Return the modified object


            return target;
          };
          /***/

        },
        /* 4 */

        /***/
        function (module, exports, __webpack_require__) {

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = exports.BlockEmbed = exports.bubbleFormats = undefined;

          var _createClass = function () {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }

            return function (Constructor, protoProps, staticProps) {
              if (protoProps) defineProperties(Constructor.prototype, protoProps);
              if (staticProps) defineProperties(Constructor, staticProps);
              return Constructor;
            };
          }();

          var _get = function get(object, property, receiver) {
            if (object === null) object = Function.prototype;
            var desc = Object.getOwnPropertyDescriptor(object, property);

            if (desc === undefined) {
              var parent = Object.getPrototypeOf(object);

              if (parent === null) {
                return undefined;
              } else {
                return get(parent, property, receiver);
              }
            } else if ("value" in desc) {
              return desc.value;
            } else {
              var getter = desc.get;

              if (getter === undefined) {
                return undefined;
              }

              return getter.call(receiver);
            }
          };

          var _extend = __webpack_require__(3);

          var _extend2 = _interopRequireDefault(_extend);

          var _quillDelta = __webpack_require__(2);

          var _quillDelta2 = _interopRequireDefault(_quillDelta);

          var _parchment = __webpack_require__(0);

          var _parchment2 = _interopRequireDefault(_parchment);

          var _break = __webpack_require__(16);

          var _break2 = _interopRequireDefault(_break);

          var _inline = __webpack_require__(6);

          var _inline2 = _interopRequireDefault(_inline);

          var _text = __webpack_require__(7);

          var _text2 = _interopRequireDefault(_text);

          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
              default: obj
            };
          }

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }

          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }

            return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
          }

          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
            }

            subClass.prototype = Object.create(superClass && superClass.prototype, {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
              }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
          }

          var NEWLINE_LENGTH = 1;

          var BlockEmbed = function (_Parchment$Embed) {
            _inherits(BlockEmbed, _Parchment$Embed);

            function BlockEmbed() {
              _classCallCheck(this, BlockEmbed);

              return _possibleConstructorReturn(this, (BlockEmbed.__proto__ || Object.getPrototypeOf(BlockEmbed)).apply(this, arguments));
            }

            _createClass(BlockEmbed, [{
              key: 'attach',
              value: function attach() {
                _get(BlockEmbed.prototype.__proto__ || Object.getPrototypeOf(BlockEmbed.prototype), 'attach', this).call(this);

                this.attributes = new _parchment2.default.Attributor.Store(this.domNode);
              }
            }, {
              key: 'delta',
              value: function delta() {
                return new _quillDelta2.default().insert(this.value(), (0, _extend2.default)(this.formats(), this.attributes.values()));
              }
            }, {
              key: 'format',
              value: function format(name, value) {
                var attribute = _parchment2.default.query(name, _parchment2.default.Scope.BLOCK_ATTRIBUTE);

                if (attribute != null) {
                  this.attributes.attribute(attribute, value);
                }
              }
            }, {
              key: 'formatAt',
              value: function formatAt(index, length, name, value) {
                this.format(name, value);
              }
            }, {
              key: 'insertAt',
              value: function insertAt(index, value, def) {
                if (typeof value === 'string' && value.endsWith('\n')) {
                  var block = _parchment2.default.create(Block.blotName);

                  this.parent.insertBefore(block, index === 0 ? this : this.next);
                  block.insertAt(0, value.slice(0, -1));
                } else {
                  _get(BlockEmbed.prototype.__proto__ || Object.getPrototypeOf(BlockEmbed.prototype), 'insertAt', this).call(this, index, value, def);
                }
              }
            }]);

            return BlockEmbed;
          }(_parchment2.default.Embed);

          BlockEmbed.scope = _parchment2.default.Scope.BLOCK_BLOT; // It is important for cursor behavior BlockEmbeds use tags that are block level elements

          var Block = function (_Parchment$Block) {
            _inherits(Block, _Parchment$Block);

            function Block(domNode) {
              _classCallCheck(this, Block);

              var _this2 = _possibleConstructorReturn(this, (Block.__proto__ || Object.getPrototypeOf(Block)).call(this, domNode));

              _this2.cache = {};
              return _this2;
            }

            _createClass(Block, [{
              key: 'delta',
              value: function delta() {
                if (this.cache.delta == null) {
                  this.cache.delta = this.descendants(_parchment2.default.Leaf).reduce(function (delta, leaf) {
                    if (leaf.length() === 0) {
                      return delta;
                    } else {
                      return delta.insert(leaf.value(), bubbleFormats(leaf));
                    }
                  }, new _quillDelta2.default()).insert('\n', bubbleFormats(this));
                }

                return this.cache.delta;
              }
            }, {
              key: 'deleteAt',
              value: function deleteAt(index, length) {
                _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'deleteAt', this).call(this, index, length);

                this.cache = {};
              }
            }, {
              key: 'formatAt',
              value: function formatAt(index, length, name, value) {
                if (length <= 0) return;

                if (_parchment2.default.query(name, _parchment2.default.Scope.BLOCK)) {
                  if (index + length === this.length()) {
                    this.format(name, value);
                  }
                } else {
                  _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'formatAt', this).call(this, index, Math.min(length, this.length() - index - 1), name, value);
                }

                this.cache = {};
              }
            }, {
              key: 'insertAt',
              value: function insertAt(index, value, def) {
                if (def != null) return _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'insertAt', this).call(this, index, value, def);
                if (value.length === 0) return;
                var lines = value.split('\n');
                var text = lines.shift();

                if (text.length > 0) {
                  if (index < this.length() - 1 || this.children.tail == null) {
                    _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'insertAt', this).call(this, Math.min(index, this.length() - 1), text);
                  } else {
                    this.children.tail.insertAt(this.children.tail.length(), text);
                  }

                  this.cache = {};
                }

                var block = this;
                lines.reduce(function (index, line) {
                  block = block.split(index, true);
                  block.insertAt(0, line);
                  return line.length;
                }, index + text.length);
              }
            }, {
              key: 'insertBefore',
              value: function insertBefore(blot, ref) {
                var head = this.children.head;

                _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'insertBefore', this).call(this, blot, ref);

                if (head instanceof _break2.default) {
                  head.remove();
                }

                this.cache = {};
              }
            }, {
              key: 'length',
              value: function length() {
                if (this.cache.length == null) {
                  this.cache.length = _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'length', this).call(this) + NEWLINE_LENGTH;
                }

                return this.cache.length;
              }
            }, {
              key: 'moveChildren',
              value: function moveChildren(target, ref) {
                _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'moveChildren', this).call(this, target, ref);

                this.cache = {};
              }
            }, {
              key: 'optimize',
              value: function optimize(context) {
                _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'optimize', this).call(this, context);

                this.cache = {};
              }
            }, {
              key: 'path',
              value: function path(index) {
                return _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'path', this).call(this, index, true);
              }
            }, {
              key: 'removeChild',
              value: function removeChild(child) {
                _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'removeChild', this).call(this, child);

                this.cache = {};
              }
            }, {
              key: 'split',
              value: function split(index) {
                var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

                if (force && (index === 0 || index >= this.length() - NEWLINE_LENGTH)) {
                  var clone = this.clone();

                  if (index === 0) {
                    this.parent.insertBefore(clone, this);
                    return this;
                  } else {
                    this.parent.insertBefore(clone, this.next);
                    return clone;
                  }
                } else {
                  var next = _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'split', this).call(this, index, force);

                  this.cache = {};
                  return next;
                }
              }
            }]);

            return Block;
          }(_parchment2.default.Block);

          Block.blotName = 'block';
          Block.tagName = 'P';
          Block.defaultChild = 'break';
          Block.allowedChildren = [_inline2.default, _parchment2.default.Embed, _text2.default];

          function bubbleFormats(blot) {
            var formats = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            if (blot == null) return formats;

            if (typeof blot.formats === 'function') {
              formats = (0, _extend2.default)(formats, blot.formats());
            }

            if (blot.parent == null || blot.parent.blotName == 'scroll' || blot.parent.statics.scope !== blot.statics.scope) {
              return formats;
            }

            return bubbleFormats(blot.parent, formats);
          }

          exports.bubbleFormats = bubbleFormats;
          exports.BlockEmbed = BlockEmbed;
          exports.default = Block;
          /***/
        },
        /* 5 */

        /***/
        function (module, exports, __webpack_require__) {

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = exports.overload = exports.expandConfig = undefined;

          var _typeof$1 = typeof Symbol === "function" && _typeof(Symbol.iterator) === "symbol" ? function (obj) {
            return _typeof(obj);
          } : function (obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof(obj);
          };

          var _slicedToArray = function () {
            function sliceIterator(arr, i) {
              var _arr = [];
              var _n = true;
              var _d = false;
              var _e = undefined;

              try {
                for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                  _arr.push(_s.value);

                  if (i && _arr.length === i) break;
                }
              } catch (err) {
                _d = true;
                _e = err;
              } finally {
                try {
                  if (!_n && _i["return"]) _i["return"]();
                } finally {
                  if (_d) throw _e;
                }
              }

              return _arr;
            }

            return function (arr, i) {
              if (Array.isArray(arr)) {
                return arr;
              } else if (Symbol.iterator in Object(arr)) {
                return sliceIterator(arr, i);
              } else {
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
              }
            };
          }();

          var _createClass = function () {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }

            return function (Constructor, protoProps, staticProps) {
              if (protoProps) defineProperties(Constructor.prototype, protoProps);
              if (staticProps) defineProperties(Constructor, staticProps);
              return Constructor;
            };
          }();

          __webpack_require__(50);

          var _quillDelta = __webpack_require__(2);

          var _quillDelta2 = _interopRequireDefault(_quillDelta);

          var _editor = __webpack_require__(14);

          var _editor2 = _interopRequireDefault(_editor);

          var _emitter3 = __webpack_require__(8);

          var _emitter4 = _interopRequireDefault(_emitter3);

          var _module = __webpack_require__(9);

          var _module2 = _interopRequireDefault(_module);

          var _parchment = __webpack_require__(0);

          var _parchment2 = _interopRequireDefault(_parchment);

          var _selection = __webpack_require__(15);

          var _selection2 = _interopRequireDefault(_selection);

          var _extend = __webpack_require__(3);

          var _extend2 = _interopRequireDefault(_extend);

          var _logger = __webpack_require__(10);

          var _logger2 = _interopRequireDefault(_logger);

          var _theme = __webpack_require__(34);

          var _theme2 = _interopRequireDefault(_theme);

          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
              default: obj
            };
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

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }

          var debug = (0, _logger2.default)('quill');

          var Quill = function () {
            _createClass(Quill, null, [{
              key: 'debug',
              value: function debug(limit) {
                if (limit === true) {
                  limit = 'log';
                }

                _logger2.default.level(limit);
              }
            }, {
              key: 'find',
              value: function find(node) {
                return node.__quill || _parchment2.default.find(node);
              }
            }, {
              key: 'import',
              value: function _import(name) {
                if (this.imports[name] == null) {
                  debug.error('Cannot import ' + name + '. Are you sure it was registered?');
                }

                return this.imports[name];
              }
            }, {
              key: 'register',
              value: function register(path, target) {
                var _this = this;

                var overwrite = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

                if (typeof path !== 'string') {
                  var name = path.attrName || path.blotName;

                  if (typeof name === 'string') {
                    // register(Blot | Attributor, overwrite)
                    this.register('formats/' + name, path, target);
                  } else {
                    Object.keys(path).forEach(function (key) {
                      _this.register(key, path[key], target);
                    });
                  }
                } else {
                  if (this.imports[path] != null && !overwrite) {
                    debug.warn('Overwriting ' + path + ' with', target);
                  }

                  this.imports[path] = target;

                  if ((path.startsWith('blots/') || path.startsWith('formats/')) && target.blotName !== 'abstract') {
                    _parchment2.default.register(target);
                  } else if (path.startsWith('modules') && typeof target.register === 'function') {
                    target.register();
                  }
                }
              }
            }]);

            function Quill(container) {
              var _this2 = this;

              var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

              _classCallCheck(this, Quill);

              this.options = expandConfig(container, options);
              this.container = this.options.container;

              if (this.container == null) {
                return debug.error('Invalid Quill container', container);
              }

              if (this.options.debug) {
                Quill.debug(this.options.debug);
              }

              var html = this.container.innerHTML.trim();
              this.container.classList.add('ql-container');
              this.container.innerHTML = '';
              this.container.__quill = this;
              this.root = this.addContainer('ql-editor');
              this.root.classList.add('ql-blank');
              this.root.setAttribute('data-gramm', false);
              this.scrollingContainer = this.options.scrollingContainer || this.root;
              this.emitter = new _emitter4.default();
              this.scroll = _parchment2.default.create(this.root, {
                emitter: this.emitter,
                whitelist: this.options.formats
              });
              this.editor = new _editor2.default(this.scroll);
              this.selection = new _selection2.default(this.scroll, this.emitter);
              this.theme = new this.options.theme(this, this.options);
              this.keyboard = this.theme.addModule('keyboard');
              this.clipboard = this.theme.addModule('clipboard');
              this.history = this.theme.addModule('history');
              this.theme.init();
              this.emitter.on(_emitter4.default.events.EDITOR_CHANGE, function (type) {
                if (type === _emitter4.default.events.TEXT_CHANGE) {
                  _this2.root.classList.toggle('ql-blank', _this2.editor.isBlank());
                }
              });
              this.emitter.on(_emitter4.default.events.SCROLL_UPDATE, function (source, mutations) {
                var range = _this2.selection.lastRange;
                var index = range && range.length === 0 ? range.index : undefined;
                modify.call(_this2, function () {
                  return _this2.editor.update(null, mutations, index);
                }, source);
              });
              var contents = this.clipboard.convert('<div class=\'ql-editor\' style="white-space: normal;">' + html + '<p><br></p></div>');
              this.setContents(contents);
              this.history.clear();

              if (this.options.placeholder) {
                this.root.setAttribute('data-placeholder', this.options.placeholder);
              }

              if (this.options.readOnly) {
                this.disable();
              }
            }

            _createClass(Quill, [{
              key: 'addContainer',
              value: function addContainer(container) {
                var refNode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

                if (typeof container === 'string') {
                  var className = container;
                  container = document.createElement('div');
                  container.classList.add(className);
                }

                this.container.insertBefore(container, refNode);
                return container;
              }
            }, {
              key: 'blur',
              value: function blur() {
                this.selection.setRange(null);
              }
            }, {
              key: 'deleteText',
              value: function deleteText(index, length, source) {
                var _this3 = this;

                var _overload = overload(index, length, source);

                var _overload2 = _slicedToArray(_overload, 4);

                index = _overload2[0];
                length = _overload2[1];
                source = _overload2[3];
                return modify.call(this, function () {
                  return _this3.editor.deleteText(index, length);
                }, source, index, -1 * length);
              }
            }, {
              key: 'disable',
              value: function disable() {
                this.enable(false);
              }
            }, {
              key: 'enable',
              value: function enable() {
                var enabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
                this.scroll.enable(enabled);
                this.container.classList.toggle('ql-disabled', !enabled);
              }
            }, {
              key: 'focus',
              value: function focus() {
                var scrollTop = this.scrollingContainer.scrollTop;
                this.selection.focus();
                this.scrollingContainer.scrollTop = scrollTop;
                this.scrollIntoView();
              }
            }, {
              key: 'format',
              value: function format(name, value) {
                var _this4 = this;

                var source = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _emitter4.default.sources.API;
                return modify.call(this, function () {
                  var range = _this4.getSelection(true);

                  var change = new _quillDelta2.default();

                  if (range == null) {
                    return change;
                  } else if (_parchment2.default.query(name, _parchment2.default.Scope.BLOCK)) {
                    change = _this4.editor.formatLine(range.index, range.length, _defineProperty({}, name, value));
                  } else if (range.length === 0) {
                    _this4.selection.format(name, value);

                    return change;
                  } else {
                    change = _this4.editor.formatText(range.index, range.length, _defineProperty({}, name, value));
                  }

                  _this4.setSelection(range, _emitter4.default.sources.SILENT);

                  return change;
                }, source);
              }
            }, {
              key: 'formatLine',
              value: function formatLine(index, length, name, value, source) {
                var _this5 = this;

                var formats = void 0;

                var _overload3 = overload(index, length, name, value, source);

                var _overload4 = _slicedToArray(_overload3, 4);

                index = _overload4[0];
                length = _overload4[1];
                formats = _overload4[2];
                source = _overload4[3];
                return modify.call(this, function () {
                  return _this5.editor.formatLine(index, length, formats);
                }, source, index, 0);
              }
            }, {
              key: 'formatText',
              value: function formatText(index, length, name, value, source) {
                var _this6 = this;

                var formats = void 0;

                var _overload5 = overload(index, length, name, value, source);

                var _overload6 = _slicedToArray(_overload5, 4);

                index = _overload6[0];
                length = _overload6[1];
                formats = _overload6[2];
                source = _overload6[3];
                return modify.call(this, function () {
                  return _this6.editor.formatText(index, length, formats);
                }, source, index, 0);
              }
            }, {
              key: 'getBounds',
              value: function getBounds(index) {
                var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                var bounds = void 0;

                if (typeof index === 'number') {
                  bounds = this.selection.getBounds(index, length);
                } else {
                  bounds = this.selection.getBounds(index.index, index.length);
                }

                var containerBounds = this.container.getBoundingClientRect();
                return {
                  bottom: bounds.bottom - containerBounds.top,
                  height: bounds.height,
                  left: bounds.left - containerBounds.left,
                  right: bounds.right - containerBounds.left,
                  top: bounds.top - containerBounds.top,
                  width: bounds.width
                };
              }
            }, {
              key: 'getContents',
              value: function getContents() {
                var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.getLength() - index;

                var _overload7 = overload(index, length);

                var _overload8 = _slicedToArray(_overload7, 2);

                index = _overload8[0];
                length = _overload8[1];
                return this.editor.getContents(index, length);
              }
            }, {
              key: 'getFormat',
              value: function getFormat() {
                var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getSelection(true);
                var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

                if (typeof index === 'number') {
                  return this.editor.getFormat(index, length);
                } else {
                  return this.editor.getFormat(index.index, index.length);
                }
              }
            }, {
              key: 'getIndex',
              value: function getIndex(blot) {
                return blot.offset(this.scroll);
              }
            }, {
              key: 'getLength',
              value: function getLength() {
                return this.scroll.length();
              }
            }, {
              key: 'getLeaf',
              value: function getLeaf(index) {
                return this.scroll.leaf(index);
              }
            }, {
              key: 'getLine',
              value: function getLine(index) {
                return this.scroll.line(index);
              }
            }, {
              key: 'getLines',
              value: function getLines() {
                var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Number.MAX_VALUE;

                if (typeof index !== 'number') {
                  return this.scroll.lines(index.index, index.length);
                } else {
                  return this.scroll.lines(index, length);
                }
              }
            }, {
              key: 'getModule',
              value: function getModule(name) {
                return this.theme.modules[name];
              }
            }, {
              key: 'getSelection',
              value: function getSelection() {
                var focus = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
                if (focus) this.focus();
                this.update(); // Make sure we access getRange with editor in consistent state

                return this.selection.getRange()[0];
              }
            }, {
              key: 'getText',
              value: function getText() {
                var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.getLength() - index;

                var _overload9 = overload(index, length);

                var _overload10 = _slicedToArray(_overload9, 2);

                index = _overload10[0];
                length = _overload10[1];
                return this.editor.getText(index, length);
              }
            }, {
              key: 'hasFocus',
              value: function hasFocus() {
                return this.selection.hasFocus();
              }
            }, {
              key: 'insertEmbed',
              value: function insertEmbed(index, embed, value) {
                var _this7 = this;

                var source = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Quill.sources.API;
                return modify.call(this, function () {
                  return _this7.editor.insertEmbed(index, embed, value);
                }, source, index);
              }
            }, {
              key: 'insertText',
              value: function insertText(index, text, name, value, source) {
                var _this8 = this;

                var formats = void 0;

                var _overload11 = overload(index, 0, name, value, source);

                var _overload12 = _slicedToArray(_overload11, 4);

                index = _overload12[0];
                formats = _overload12[2];
                source = _overload12[3];
                return modify.call(this, function () {
                  return _this8.editor.insertText(index, text, formats);
                }, source, index, text.length);
              }
            }, {
              key: 'isEnabled',
              value: function isEnabled() {
                return !this.container.classList.contains('ql-disabled');
              }
            }, {
              key: 'off',
              value: function off() {
                return this.emitter.off.apply(this.emitter, arguments);
              }
            }, {
              key: 'on',
              value: function on() {
                return this.emitter.on.apply(this.emitter, arguments);
              }
            }, {
              key: 'once',
              value: function once() {
                return this.emitter.once.apply(this.emitter, arguments);
              }
            }, {
              key: 'pasteHTML',
              value: function pasteHTML(index, html, source) {
                this.clipboard.dangerouslyPasteHTML(index, html, source);
              }
            }, {
              key: 'removeFormat',
              value: function removeFormat(index, length, source) {
                var _this9 = this;

                var _overload13 = overload(index, length, source);

                var _overload14 = _slicedToArray(_overload13, 4);

                index = _overload14[0];
                length = _overload14[1];
                source = _overload14[3];
                return modify.call(this, function () {
                  return _this9.editor.removeFormat(index, length);
                }, source, index);
              }
            }, {
              key: 'scrollIntoView',
              value: function scrollIntoView() {
                this.selection.scrollIntoView(this.scrollingContainer);
              }
            }, {
              key: 'setContents',
              value: function setContents(delta) {
                var _this10 = this;

                var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _emitter4.default.sources.API;
                return modify.call(this, function () {
                  delta = new _quillDelta2.default(delta);

                  var length = _this10.getLength();

                  var deleted = _this10.editor.deleteText(0, length);

                  var applied = _this10.editor.applyDelta(delta);

                  var lastOp = applied.ops[applied.ops.length - 1];

                  if (lastOp != null && typeof lastOp.insert === 'string' && lastOp.insert[lastOp.insert.length - 1] === '\n') {
                    _this10.editor.deleteText(_this10.getLength() - 1, 1);

                    applied.delete(1);
                  }

                  var ret = deleted.compose(applied);
                  return ret;
                }, source);
              }
            }, {
              key: 'setSelection',
              value: function setSelection(index, length, source) {
                if (index == null) {
                  this.selection.setRange(null, length || Quill.sources.API);
                } else {
                  var _overload15 = overload(index, length, source);

                  var _overload16 = _slicedToArray(_overload15, 4);

                  index = _overload16[0];
                  length = _overload16[1];
                  source = _overload16[3];
                  this.selection.setRange(new _selection.Range(index, length), source);

                  if (source !== _emitter4.default.sources.SILENT) {
                    this.selection.scrollIntoView(this.scrollingContainer);
                  }
                }
              }
            }, {
              key: 'setText',
              value: function setText(text) {
                var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _emitter4.default.sources.API;
                var delta = new _quillDelta2.default().insert(text);
                return this.setContents(delta, source);
              }
            }, {
              key: 'update',
              value: function update() {
                var source = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _emitter4.default.sources.USER;
                var change = this.scroll.update(source); // Will update selection before selection.update() does if text changes

                this.selection.update(source);
                return change;
              }
            }, {
              key: 'updateContents',
              value: function updateContents(delta) {
                var _this11 = this;

                var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _emitter4.default.sources.API;
                return modify.call(this, function () {
                  delta = new _quillDelta2.default(delta);
                  return _this11.editor.applyDelta(delta, source);
                }, source, true);
              }
            }]);

            return Quill;
          }();

          Quill.DEFAULTS = {
            bounds: null,
            formats: null,
            modules: {},
            placeholder: '',
            readOnly: false,
            scrollingContainer: null,
            strict: true,
            theme: 'default'
          };
          Quill.events = _emitter4.default.events;
          Quill.sources = _emitter4.default.sources; // eslint-disable-next-line no-undef

          Quill.version = "1.3.7";
          Quill.imports = {
            'delta': _quillDelta2.default,
            'parchment': _parchment2.default,
            'core/module': _module2.default,
            'core/theme': _theme2.default
          };

          function expandConfig(container, userConfig) {
            userConfig = (0, _extend2.default)(true, {
              container: container,
              modules: {
                clipboard: true,
                keyboard: true,
                history: true
              }
            }, userConfig);

            if (!userConfig.theme || userConfig.theme === Quill.DEFAULTS.theme) {
              userConfig.theme = _theme2.default;
            } else {
              userConfig.theme = Quill.import('themes/' + userConfig.theme);

              if (userConfig.theme == null) {
                throw new Error('Invalid theme ' + userConfig.theme + '. Did you register it?');
              }
            }

            var themeConfig = (0, _extend2.default)(true, {}, userConfig.theme.DEFAULTS);
            [themeConfig, userConfig].forEach(function (config) {
              config.modules = config.modules || {};
              Object.keys(config.modules).forEach(function (module) {
                if (config.modules[module] === true) {
                  config.modules[module] = {};
                }
              });
            });
            var moduleNames = Object.keys(themeConfig.modules).concat(Object.keys(userConfig.modules));
            var moduleConfig = moduleNames.reduce(function (config, name) {
              var moduleClass = Quill.import('modules/' + name);

              if (moduleClass == null) {
                debug.error('Cannot load ' + name + ' module. Are you sure you registered it?');
              } else {
                config[name] = moduleClass.DEFAULTS || {};
              }

              return config;
            }, {}); // Special case toolbar shorthand

            if (userConfig.modules != null && userConfig.modules.toolbar && userConfig.modules.toolbar.constructor !== Object) {
              userConfig.modules.toolbar = {
                container: userConfig.modules.toolbar
              };
            }

            userConfig = (0, _extend2.default)(true, {}, Quill.DEFAULTS, {
              modules: moduleConfig
            }, themeConfig, userConfig);
            ['bounds', 'container', 'scrollingContainer'].forEach(function (key) {
              if (typeof userConfig[key] === 'string') {
                userConfig[key] = document.querySelector(userConfig[key]);
              }
            });
            userConfig.modules = Object.keys(userConfig.modules).reduce(function (config, name) {
              if (userConfig.modules[name]) {
                config[name] = userConfig.modules[name];
              }

              return config;
            }, {});
            return userConfig;
          } // Handle selection preservation and TEXT_CHANGE emission
          // common to modification APIs


          function modify(modifier, source, index, shift) {
            if (this.options.strict && !this.isEnabled() && source === _emitter4.default.sources.USER) {
              return new _quillDelta2.default();
            }

            var range = index == null ? null : this.getSelection();
            var oldDelta = this.editor.delta;
            var change = modifier();

            if (range != null) {
              if (index === true) index = range.index;

              if (shift == null) {
                range = shiftRange(range, change, source);
              } else if (shift !== 0) {
                range = shiftRange(range, index, shift, source);
              }

              this.setSelection(range, _emitter4.default.sources.SILENT);
            }

            if (change.length() > 0) {
              var _emitter;

              var args = [_emitter4.default.events.TEXT_CHANGE, change, oldDelta, source];

              (_emitter = this.emitter).emit.apply(_emitter, [_emitter4.default.events.EDITOR_CHANGE].concat(args));

              if (source !== _emitter4.default.sources.SILENT) {
                var _emitter2;

                (_emitter2 = this.emitter).emit.apply(_emitter2, args);
              }
            }

            return change;
          }

          function overload(index, length, name, value, source) {
            var formats = {};

            if (typeof index.index === 'number' && typeof index.length === 'number') {
              // Allow for throwaway end (used by insertText/insertEmbed)
              if (typeof length !== 'number') {
                source = value, value = name, name = length, length = index.length, index = index.index;
              } else {
                length = index.length, index = index.index;
              }
            } else if (typeof length !== 'number') {
              source = value, value = name, name = length, length = 0;
            } // Handle format being object, two format name/value strings or excluded


            if ((typeof name === 'undefined' ? 'undefined' : _typeof$1(name)) === 'object') {
              formats = name;
              source = value;
            } else if (typeof name === 'string') {
              if (value != null) {
                formats[name] = value;
              } else {
                source = name;
              }
            } // Handle optional source


            source = source || _emitter4.default.sources.API;
            return [index, length, formats, source];
          }

          function shiftRange(range, index, length, source) {
            if (range == null) return null;
            var start = void 0,
                end = void 0;

            if (index instanceof _quillDelta2.default) {
              var _map = [range.index, range.index + range.length].map(function (pos) {
                return index.transformPosition(pos, source !== _emitter4.default.sources.USER);
              });

              var _map2 = _slicedToArray(_map, 2);

              start = _map2[0];
              end = _map2[1];
            } else {
              var _map3 = [range.index, range.index + range.length].map(function (pos) {
                if (pos < index || pos === index && source === _emitter4.default.sources.USER) return pos;

                if (length >= 0) {
                  return pos + length;
                } else {
                  return Math.max(index, pos + length);
                }
              });

              var _map4 = _slicedToArray(_map3, 2);

              start = _map4[0];
              end = _map4[1];
            }

            return new _selection.Range(start, end - start);
          }

          exports.expandConfig = expandConfig;
          exports.overload = overload;
          exports.default = Quill;
          /***/
        },
        /* 6 */

        /***/
        function (module, exports, __webpack_require__) {

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var _createClass = function () {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }

            return function (Constructor, protoProps, staticProps) {
              if (protoProps) defineProperties(Constructor.prototype, protoProps);
              if (staticProps) defineProperties(Constructor, staticProps);
              return Constructor;
            };
          }();

          var _get = function get(object, property, receiver) {
            if (object === null) object = Function.prototype;
            var desc = Object.getOwnPropertyDescriptor(object, property);

            if (desc === undefined) {
              var parent = Object.getPrototypeOf(object);

              if (parent === null) {
                return undefined;
              } else {
                return get(parent, property, receiver);
              }
            } else if ("value" in desc) {
              return desc.value;
            } else {
              var getter = desc.get;

              if (getter === undefined) {
                return undefined;
              }

              return getter.call(receiver);
            }
          };

          var _text = __webpack_require__(7);

          var _text2 = _interopRequireDefault(_text);

          var _parchment = __webpack_require__(0);

          var _parchment2 = _interopRequireDefault(_parchment);

          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
              default: obj
            };
          }

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }

          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }

            return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
          }

          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
            }

            subClass.prototype = Object.create(superClass && superClass.prototype, {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
              }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
          }

          var Inline = function (_Parchment$Inline) {
            _inherits(Inline, _Parchment$Inline);

            function Inline() {
              _classCallCheck(this, Inline);

              return _possibleConstructorReturn(this, (Inline.__proto__ || Object.getPrototypeOf(Inline)).apply(this, arguments));
            }

            _createClass(Inline, [{
              key: 'formatAt',
              value: function formatAt(index, length, name, value) {
                if (Inline.compare(this.statics.blotName, name) < 0 && _parchment2.default.query(name, _parchment2.default.Scope.BLOT)) {
                  var blot = this.isolate(index, length);

                  if (value) {
                    blot.wrap(name, value);
                  }
                } else {
                  _get(Inline.prototype.__proto__ || Object.getPrototypeOf(Inline.prototype), 'formatAt', this).call(this, index, length, name, value);
                }
              }
            }, {
              key: 'optimize',
              value: function optimize(context) {
                _get(Inline.prototype.__proto__ || Object.getPrototypeOf(Inline.prototype), 'optimize', this).call(this, context);

                if (this.parent instanceof Inline && Inline.compare(this.statics.blotName, this.parent.statics.blotName) > 0) {
                  var parent = this.parent.isolate(this.offset(), this.length());
                  this.moveChildren(parent);
                  parent.wrap(this);
                }
              }
            }], [{
              key: 'compare',
              value: function compare(self, other) {
                var selfIndex = Inline.order.indexOf(self);
                var otherIndex = Inline.order.indexOf(other);

                if (selfIndex >= 0 || otherIndex >= 0) {
                  return selfIndex - otherIndex;
                } else if (self === other) {
                  return 0;
                } else if (self < other) {
                  return -1;
                } else {
                  return 1;
                }
              }
            }]);

            return Inline;
          }(_parchment2.default.Inline);

          Inline.allowedChildren = [Inline, _parchment2.default.Embed, _text2.default]; // Lower index means deeper in the DOM tree, since not found (-1) is for embeds

          Inline.order = ['cursor', 'inline', // Must be lower
          'underline', 'strike', 'italic', 'bold', 'script', 'link', 'code' // Must be higher
          ];
          exports.default = Inline;
          /***/
        },
        /* 7 */

        /***/
        function (module, exports, __webpack_require__) {

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var _parchment = __webpack_require__(0);

          var _parchment2 = _interopRequireDefault(_parchment);

          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
              default: obj
            };
          }

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }

          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }

            return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
          }

          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
            }

            subClass.prototype = Object.create(superClass && superClass.prototype, {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
              }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
          }

          var TextBlot = function (_Parchment$Text) {
            _inherits(TextBlot, _Parchment$Text);

            function TextBlot() {
              _classCallCheck(this, TextBlot);

              return _possibleConstructorReturn(this, (TextBlot.__proto__ || Object.getPrototypeOf(TextBlot)).apply(this, arguments));
            }

            return TextBlot;
          }(_parchment2.default.Text);

          exports.default = TextBlot;
          /***/
        },
        /* 8 */

        /***/
        function (module, exports, __webpack_require__) {

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var _createClass = function () {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }

            return function (Constructor, protoProps, staticProps) {
              if (protoProps) defineProperties(Constructor.prototype, protoProps);
              if (staticProps) defineProperties(Constructor, staticProps);
              return Constructor;
            };
          }();

          var _get = function get(object, property, receiver) {
            if (object === null) object = Function.prototype;
            var desc = Object.getOwnPropertyDescriptor(object, property);

            if (desc === undefined) {
              var parent = Object.getPrototypeOf(object);

              if (parent === null) {
                return undefined;
              } else {
                return get(parent, property, receiver);
              }
            } else if ("value" in desc) {
              return desc.value;
            } else {
              var getter = desc.get;

              if (getter === undefined) {
                return undefined;
              }

              return getter.call(receiver);
            }
          };

          var _eventemitter = __webpack_require__(54);

          var _eventemitter2 = _interopRequireDefault(_eventemitter);

          var _logger = __webpack_require__(10);

          var _logger2 = _interopRequireDefault(_logger);

          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
              default: obj
            };
          }

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }

          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }

            return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
          }

          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
            }

            subClass.prototype = Object.create(superClass && superClass.prototype, {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
              }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
          }

          var debug = (0, _logger2.default)('quill:events');
          var EVENTS = ['selectionchange', 'mousedown', 'mouseup', 'click'];
          EVENTS.forEach(function (eventName) {
            document.addEventListener(eventName, function () {
              for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }

              [].slice.call(document.querySelectorAll('.ql-container')).forEach(function (node) {
                // TODO use WeakMap
                if (node.__quill && node.__quill.emitter) {
                  var _node$__quill$emitter;

                  (_node$__quill$emitter = node.__quill.emitter).handleDOM.apply(_node$__quill$emitter, args);
                }
              });
            });
          });

          var Emitter = function (_EventEmitter) {
            _inherits(Emitter, _EventEmitter);

            function Emitter() {
              _classCallCheck(this, Emitter);

              var _this = _possibleConstructorReturn(this, (Emitter.__proto__ || Object.getPrototypeOf(Emitter)).call(this));

              _this.listeners = {};

              _this.on('error', debug.error);

              return _this;
            }

            _createClass(Emitter, [{
              key: 'emit',
              value: function emit() {
                debug.log.apply(debug, arguments);

                _get(Emitter.prototype.__proto__ || Object.getPrototypeOf(Emitter.prototype), 'emit', this).apply(this, arguments);
              }
            }, {
              key: 'handleDOM',
              value: function handleDOM(event) {
                for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                  args[_key2 - 1] = arguments[_key2];
                }

                (this.listeners[event.type] || []).forEach(function (_ref) {
                  var node = _ref.node,
                      handler = _ref.handler;

                  if (event.target === node || node.contains(event.target)) {
                    handler.apply(undefined, [event].concat(args));
                  }
                });
              }
            }, {
              key: 'listenDOM',
              value: function listenDOM(eventName, node, handler) {
                if (!this.listeners[eventName]) {
                  this.listeners[eventName] = [];
                }

                this.listeners[eventName].push({
                  node: node,
                  handler: handler
                });
              }
            }]);

            return Emitter;
          }(_eventemitter2.default);

          Emitter.events = {
            EDITOR_CHANGE: 'editor-change',
            SCROLL_BEFORE_UPDATE: 'scroll-before-update',
            SCROLL_OPTIMIZE: 'scroll-optimize',
            SCROLL_UPDATE: 'scroll-update',
            SELECTION_CHANGE: 'selection-change',
            TEXT_CHANGE: 'text-change'
          };
          Emitter.sources = {
            API: 'api',
            SILENT: 'silent',
            USER: 'user'
          };
          exports.default = Emitter;
          /***/
        },
        /* 9 */

        /***/
        function (module, exports, __webpack_require__) {

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }

          var Module = function Module(quill) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            _classCallCheck(this, Module);

            this.quill = quill;
            this.options = options;
          };

          Module.DEFAULTS = {};
          exports.default = Module;
          /***/
        },
        /* 10 */

        /***/
        function (module, exports, __webpack_require__) {

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          var levels = ['error', 'warn', 'log', 'info'];
          var level = 'warn';

          function debug(method) {
            if (levels.indexOf(method) <= levels.indexOf(level)) {
              var _console;

              for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
              }

              (_console = console)[method].apply(_console, args); // eslint-disable-line no-console

            }
          }

          function namespace(ns) {
            return levels.reduce(function (logger, method) {
              logger[method] = debug.bind(console, method, ns);
              return logger;
            }, {});
          }

          debug.level = namespace.level = function (newLevel) {
            level = newLevel;
          };

          exports.default = namespace;
          /***/
        },
        /* 11 */

        /***/
        function (module, exports, __webpack_require__) {
          var pSlice = Array.prototype.slice;

          var objectKeys = __webpack_require__(52);

          var isArguments = __webpack_require__(53);

          var deepEqual = module.exports = function (actual, expected, opts) {
            if (!opts) opts = {}; // 7.1. All identical values are equivalent, as determined by ===.

            if (actual === expected) {
              return true;
            } else if (actual instanceof Date && expected instanceof Date) {
              return actual.getTime() === expected.getTime(); // 7.3. Other pairs that do not both pass typeof value == 'object',
              // equivalence is determined by ==.
            } else if (!actual || !expected || _typeof(actual) != 'object' && _typeof(expected) != 'object') {
              return opts.strict ? actual === expected : actual == expected; // 7.4. For all other Object pairs, including Array objects, equivalence is
              // determined by having the same number of owned properties (as verified
              // with Object.prototype.hasOwnProperty.call), the same set of keys
              // (although not necessarily the same order), equivalent values for every
              // corresponding key, and an identical 'prototype' property. Note: this
              // accounts for both named and indexed properties on Arrays.
            } else {
              return objEquiv(actual, expected, opts);
            }
          };

          function isUndefinedOrNull(value) {
            return value === null || value === undefined;
          }

          function isBuffer(x) {
            if (!x || _typeof(x) !== 'object' || typeof x.length !== 'number') return false;

            if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
              return false;
            }

            if (x.length > 0 && typeof x[0] !== 'number') return false;
            return true;
          }

          function objEquiv(a, b, opts) {
            var i, key;
            if (isUndefinedOrNull(a) || isUndefinedOrNull(b)) return false; // an identical 'prototype' property.

            if (a.prototype !== b.prototype) return false; //~~~I've managed to break Object.keys through screwy arguments passing.
            //   Converting to array solves the problem.

            if (isArguments(a)) {
              if (!isArguments(b)) {
                return false;
              }

              a = pSlice.call(a);
              b = pSlice.call(b);
              return deepEqual(a, b, opts);
            }

            if (isBuffer(a)) {
              if (!isBuffer(b)) {
                return false;
              }

              if (a.length !== b.length) return false;

              for (i = 0; i < a.length; i++) {
                if (a[i] !== b[i]) return false;
              }

              return true;
            }

            try {
              var ka = objectKeys(a),
                  kb = objectKeys(b);
            } catch (e) {
              //happens when one is a string literal and the other isn't
              return false;
            } // having the same number of owned properties (keys incorporates
            // hasOwnProperty)


            if (ka.length != kb.length) return false; //the same set of keys (although not necessarily the same order),

            ka.sort();
            kb.sort(); //~~~cheap key test

            for (i = ka.length - 1; i >= 0; i--) {
              if (ka[i] != kb[i]) return false;
            } //equivalent values for every corresponding key, and
            //~~~possibly expensive deep test


            for (i = ka.length - 1; i >= 0; i--) {
              key = ka[i];
              if (!deepEqual(a[key], b[key], opts)) return false;
            }

            return _typeof(a) === _typeof(b);
          }
          /***/

        },
        /* 12 */

        /***/
        function (module, exports, __webpack_require__) {

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var Registry = __webpack_require__(1);

          var Attributor =
          /** @class */
          function () {
            function Attributor(attrName, keyName, options) {
              if (options === void 0) {
                options = {};
              }

              this.attrName = attrName;
              this.keyName = keyName;
              var attributeBit = Registry.Scope.TYPE & Registry.Scope.ATTRIBUTE;

              if (options.scope != null) {
                // Ignore type bits, force attribute bit
                this.scope = options.scope & Registry.Scope.LEVEL | attributeBit;
              } else {
                this.scope = Registry.Scope.ATTRIBUTE;
              }

              if (options.whitelist != null) this.whitelist = options.whitelist;
            }

            Attributor.keys = function (node) {
              return [].map.call(node.attributes, function (item) {
                return item.name;
              });
            };

            Attributor.prototype.add = function (node, value) {
              if (!this.canAdd(node, value)) return false;
              node.setAttribute(this.keyName, value);
              return true;
            };

            Attributor.prototype.canAdd = function (node, value) {
              var match = Registry.query(node, Registry.Scope.BLOT & (this.scope | Registry.Scope.TYPE));
              if (match == null) return false;
              if (this.whitelist == null) return true;

              if (typeof value === 'string') {
                return this.whitelist.indexOf(value.replace(/["']/g, '')) > -1;
              } else {
                return this.whitelist.indexOf(value) > -1;
              }
            };

            Attributor.prototype.remove = function (node) {
              node.removeAttribute(this.keyName);
            };

            Attributor.prototype.value = function (node) {
              var value = node.getAttribute(this.keyName);

              if (this.canAdd(node, value) && value) {
                return value;
              }

              return '';
            };

            return Attributor;
          }();

          exports.default = Attributor;
          /***/
        },
        /* 13 */

        /***/
        function (module, exports, __webpack_require__) {

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = exports.Code = undefined;

          var _slicedToArray = function () {
            function sliceIterator(arr, i) {
              var _arr = [];
              var _n = true;
              var _d = false;
              var _e = undefined;

              try {
                for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                  _arr.push(_s.value);

                  if (i && _arr.length === i) break;
                }
              } catch (err) {
                _d = true;
                _e = err;
              } finally {
                try {
                  if (!_n && _i["return"]) _i["return"]();
                } finally {
                  if (_d) throw _e;
                }
              }

              return _arr;
            }

            return function (arr, i) {
              if (Array.isArray(arr)) {
                return arr;
              } else if (Symbol.iterator in Object(arr)) {
                return sliceIterator(arr, i);
              } else {
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
              }
            };
          }();

          var _createClass = function () {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }

            return function (Constructor, protoProps, staticProps) {
              if (protoProps) defineProperties(Constructor.prototype, protoProps);
              if (staticProps) defineProperties(Constructor, staticProps);
              return Constructor;
            };
          }();

          var _get = function get(object, property, receiver) {
            if (object === null) object = Function.prototype;
            var desc = Object.getOwnPropertyDescriptor(object, property);

            if (desc === undefined) {
              var parent = Object.getPrototypeOf(object);

              if (parent === null) {
                return undefined;
              } else {
                return get(parent, property, receiver);
              }
            } else if ("value" in desc) {
              return desc.value;
            } else {
              var getter = desc.get;

              if (getter === undefined) {
                return undefined;
              }

              return getter.call(receiver);
            }
          };

          var _quillDelta = __webpack_require__(2);

          var _quillDelta2 = _interopRequireDefault(_quillDelta);

          var _parchment = __webpack_require__(0);

          var _parchment2 = _interopRequireDefault(_parchment);

          var _block = __webpack_require__(4);

          var _block2 = _interopRequireDefault(_block);

          var _inline = __webpack_require__(6);

          var _inline2 = _interopRequireDefault(_inline);

          var _text = __webpack_require__(7);

          var _text2 = _interopRequireDefault(_text);

          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
              default: obj
            };
          }

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }

          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }

            return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
          }

          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
            }

            subClass.prototype = Object.create(superClass && superClass.prototype, {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
              }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
          }

          var Code = function (_Inline) {
            _inherits(Code, _Inline);

            function Code() {
              _classCallCheck(this, Code);

              return _possibleConstructorReturn(this, (Code.__proto__ || Object.getPrototypeOf(Code)).apply(this, arguments));
            }

            return Code;
          }(_inline2.default);

          Code.blotName = 'code';
          Code.tagName = 'CODE';

          var CodeBlock = function (_Block) {
            _inherits(CodeBlock, _Block);

            function CodeBlock() {
              _classCallCheck(this, CodeBlock);

              return _possibleConstructorReturn(this, (CodeBlock.__proto__ || Object.getPrototypeOf(CodeBlock)).apply(this, arguments));
            }

            _createClass(CodeBlock, [{
              key: 'delta',
              value: function delta() {
                var _this3 = this;

                var text = this.domNode.textContent;

                if (text.endsWith('\n')) {
                  // Should always be true
                  text = text.slice(0, -1);
                }

                return text.split('\n').reduce(function (delta, frag) {
                  return delta.insert(frag).insert('\n', _this3.formats());
                }, new _quillDelta2.default());
              }
            }, {
              key: 'format',
              value: function format(name, value) {
                if (name === this.statics.blotName && value) return;

                var _descendant = this.descendant(_text2.default, this.length() - 1),
                    _descendant2 = _slicedToArray(_descendant, 1),
                    text = _descendant2[0];

                if (text != null) {
                  text.deleteAt(text.length() - 1, 1);
                }

                _get(CodeBlock.prototype.__proto__ || Object.getPrototypeOf(CodeBlock.prototype), 'format', this).call(this, name, value);
              }
            }, {
              key: 'formatAt',
              value: function formatAt(index, length, name, value) {
                if (length === 0) return;

                if (_parchment2.default.query(name, _parchment2.default.Scope.BLOCK) == null || name === this.statics.blotName && value === this.statics.formats(this.domNode)) {
                  return;
                }

                var nextNewline = this.newlineIndex(index);
                if (nextNewline < 0 || nextNewline >= index + length) return;
                var prevNewline = this.newlineIndex(index, true) + 1;
                var isolateLength = nextNewline - prevNewline + 1;
                var blot = this.isolate(prevNewline, isolateLength);
                var next = blot.next;
                blot.format(name, value);

                if (next instanceof CodeBlock) {
                  next.formatAt(0, index - prevNewline + length - isolateLength, name, value);
                }
              }
            }, {
              key: 'insertAt',
              value: function insertAt(index, value, def) {
                if (def != null) return;

                var _descendant3 = this.descendant(_text2.default, index),
                    _descendant4 = _slicedToArray(_descendant3, 2),
                    text = _descendant4[0],
                    offset = _descendant4[1];

                text.insertAt(offset, value);
              }
            }, {
              key: 'length',
              value: function length() {
                var length = this.domNode.textContent.length;

                if (!this.domNode.textContent.endsWith('\n')) {
                  return length + 1;
                }

                return length;
              }
            }, {
              key: 'newlineIndex',
              value: function newlineIndex(searchIndex) {
                var reverse = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

                if (!reverse) {
                  var offset = this.domNode.textContent.slice(searchIndex).indexOf('\n');
                  return offset > -1 ? searchIndex + offset : -1;
                } else {
                  return this.domNode.textContent.slice(0, searchIndex).lastIndexOf('\n');
                }
              }
            }, {
              key: 'optimize',
              value: function optimize(context) {
                if (!this.domNode.textContent.endsWith('\n')) {
                  this.appendChild(_parchment2.default.create('text', '\n'));
                }

                _get(CodeBlock.prototype.__proto__ || Object.getPrototypeOf(CodeBlock.prototype), 'optimize', this).call(this, context);

                var next = this.next;

                if (next != null && next.prev === this && next.statics.blotName === this.statics.blotName && this.statics.formats(this.domNode) === next.statics.formats(next.domNode)) {
                  next.optimize(context);
                  next.moveChildren(this);
                  next.remove();
                }
              }
            }, {
              key: 'replace',
              value: function replace(target) {
                _get(CodeBlock.prototype.__proto__ || Object.getPrototypeOf(CodeBlock.prototype), 'replace', this).call(this, target);

                [].slice.call(this.domNode.querySelectorAll('*')).forEach(function (node) {
                  var blot = _parchment2.default.find(node);

                  if (blot == null) {
                    node.parentNode.removeChild(node);
                  } else if (blot instanceof _parchment2.default.Embed) {
                    blot.remove();
                  } else {
                    blot.unwrap();
                  }
                });
              }
            }], [{
              key: 'create',
              value: function create(value) {
                var domNode = _get(CodeBlock.__proto__ || Object.getPrototypeOf(CodeBlock), 'create', this).call(this, value);

                domNode.setAttribute('spellcheck', false);
                return domNode;
              }
            }, {
              key: 'formats',
              value: function formats() {
                return true;
              }
            }]);

            return CodeBlock;
          }(_block2.default);

          CodeBlock.blotName = 'code-block';
          CodeBlock.tagName = 'PRE';
          CodeBlock.TAB = '  ';
          exports.Code = Code;
          exports.default = CodeBlock;
          /***/
        },
        /* 14 */

        /***/
        function (module, exports, __webpack_require__) {

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var _typeof$1 = typeof Symbol === "function" && _typeof(Symbol.iterator) === "symbol" ? function (obj) {
            return _typeof(obj);
          } : function (obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof(obj);
          };

          var _slicedToArray = function () {
            function sliceIterator(arr, i) {
              var _arr = [];
              var _n = true;
              var _d = false;
              var _e = undefined;

              try {
                for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                  _arr.push(_s.value);

                  if (i && _arr.length === i) break;
                }
              } catch (err) {
                _d = true;
                _e = err;
              } finally {
                try {
                  if (!_n && _i["return"]) _i["return"]();
                } finally {
                  if (_d) throw _e;
                }
              }

              return _arr;
            }

            return function (arr, i) {
              if (Array.isArray(arr)) {
                return arr;
              } else if (Symbol.iterator in Object(arr)) {
                return sliceIterator(arr, i);
              } else {
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
              }
            };
          }();

          var _createClass = function () {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }

            return function (Constructor, protoProps, staticProps) {
              if (protoProps) defineProperties(Constructor.prototype, protoProps);
              if (staticProps) defineProperties(Constructor, staticProps);
              return Constructor;
            };
          }();

          var _quillDelta = __webpack_require__(2);

          var _quillDelta2 = _interopRequireDefault(_quillDelta);

          var _op = __webpack_require__(20);

          var _op2 = _interopRequireDefault(_op);

          var _parchment = __webpack_require__(0);

          var _parchment2 = _interopRequireDefault(_parchment);

          var _code = __webpack_require__(13);

          var _code2 = _interopRequireDefault(_code);

          var _cursor = __webpack_require__(24);

          var _cursor2 = _interopRequireDefault(_cursor);

          var _block = __webpack_require__(4);

          var _block2 = _interopRequireDefault(_block);

          var _break = __webpack_require__(16);

          var _break2 = _interopRequireDefault(_break);

          var _clone = __webpack_require__(21);

          var _clone2 = _interopRequireDefault(_clone);

          var _deepEqual = __webpack_require__(11);

          var _deepEqual2 = _interopRequireDefault(_deepEqual);

          var _extend = __webpack_require__(3);

          var _extend2 = _interopRequireDefault(_extend);

          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
              default: obj
            };
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

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }

          var ASCII = /^[ -~]*$/;

          var Editor = function () {
            function Editor(scroll) {
              _classCallCheck(this, Editor);

              this.scroll = scroll;
              this.delta = this.getDelta();
            }

            _createClass(Editor, [{
              key: 'applyDelta',
              value: function applyDelta(delta) {
                var _this = this;

                var consumeNextNewline = false;
                this.scroll.update();
                var scrollLength = this.scroll.length();
                this.scroll.batchStart();
                delta = normalizeDelta(delta);
                delta.reduce(function (index, op) {
                  var length = op.retain || op.delete || op.insert.length || 1;
                  var attributes = op.attributes || {};

                  if (op.insert != null) {
                    if (typeof op.insert === 'string') {
                      var text = op.insert;

                      if (text.endsWith('\n') && consumeNextNewline) {
                        consumeNextNewline = false;
                        text = text.slice(0, -1);
                      }

                      if (index >= scrollLength && !text.endsWith('\n')) {
                        consumeNextNewline = true;
                      }

                      _this.scroll.insertAt(index, text);

                      var _scroll$line = _this.scroll.line(index),
                          _scroll$line2 = _slicedToArray(_scroll$line, 2),
                          line = _scroll$line2[0],
                          offset = _scroll$line2[1];

                      var formats = (0, _extend2.default)({}, (0, _block.bubbleFormats)(line));

                      if (line instanceof _block2.default) {
                        var _line$descendant = line.descendant(_parchment2.default.Leaf, offset),
                            _line$descendant2 = _slicedToArray(_line$descendant, 1),
                            leaf = _line$descendant2[0];

                        formats = (0, _extend2.default)(formats, (0, _block.bubbleFormats)(leaf));
                      }

                      attributes = _op2.default.attributes.diff(formats, attributes) || {};
                    } else if (_typeof$1(op.insert) === 'object') {
                      var key = Object.keys(op.insert)[0]; // There should only be one key

                      if (key == null) return index;

                      _this.scroll.insertAt(index, key, op.insert[key]);
                    }

                    scrollLength += length;
                  }

                  Object.keys(attributes).forEach(function (name) {
                    _this.scroll.formatAt(index, length, name, attributes[name]);
                  });
                  return index + length;
                }, 0);
                delta.reduce(function (index, op) {
                  if (typeof op.delete === 'number') {
                    _this.scroll.deleteAt(index, op.delete);

                    return index;
                  }

                  return index + (op.retain || op.insert.length || 1);
                }, 0);
                this.scroll.batchEnd();
                return this.update(delta);
              }
            }, {
              key: 'deleteText',
              value: function deleteText(index, length) {
                this.scroll.deleteAt(index, length);
                return this.update(new _quillDelta2.default().retain(index).delete(length));
              }
            }, {
              key: 'formatLine',
              value: function formatLine(index, length) {
                var _this2 = this;

                var formats = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
                this.scroll.update();
                Object.keys(formats).forEach(function (format) {
                  if (_this2.scroll.whitelist != null && !_this2.scroll.whitelist[format]) return;

                  var lines = _this2.scroll.lines(index, Math.max(length, 1));

                  var lengthRemaining = length;
                  lines.forEach(function (line) {
                    var lineLength = line.length();

                    if (!(line instanceof _code2.default)) {
                      line.format(format, formats[format]);
                    } else {
                      var codeIndex = index - line.offset(_this2.scroll);
                      var codeLength = line.newlineIndex(codeIndex + lengthRemaining) - codeIndex + 1;
                      line.formatAt(codeIndex, codeLength, format, formats[format]);
                    }

                    lengthRemaining -= lineLength;
                  });
                });
                this.scroll.optimize();
                return this.update(new _quillDelta2.default().retain(index).retain(length, (0, _clone2.default)(formats)));
              }
            }, {
              key: 'formatText',
              value: function formatText(index, length) {
                var _this3 = this;

                var formats = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
                Object.keys(formats).forEach(function (format) {
                  _this3.scroll.formatAt(index, length, format, formats[format]);
                });
                return this.update(new _quillDelta2.default().retain(index).retain(length, (0, _clone2.default)(formats)));
              }
            }, {
              key: 'getContents',
              value: function getContents(index, length) {
                return this.delta.slice(index, index + length);
              }
            }, {
              key: 'getDelta',
              value: function getDelta() {
                return this.scroll.lines().reduce(function (delta, line) {
                  return delta.concat(line.delta());
                }, new _quillDelta2.default());
              }
            }, {
              key: 'getFormat',
              value: function getFormat(index) {
                var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                var lines = [],
                    leaves = [];

                if (length === 0) {
                  this.scroll.path(index).forEach(function (path) {
                    var _path = _slicedToArray(path, 1),
                        blot = _path[0];

                    if (blot instanceof _block2.default) {
                      lines.push(blot);
                    } else if (blot instanceof _parchment2.default.Leaf) {
                      leaves.push(blot);
                    }
                  });
                } else {
                  lines = this.scroll.lines(index, length);
                  leaves = this.scroll.descendants(_parchment2.default.Leaf, index, length);
                }

                var formatsArr = [lines, leaves].map(function (blots) {
                  if (blots.length === 0) return {};
                  var formats = (0, _block.bubbleFormats)(blots.shift());

                  while (Object.keys(formats).length > 0) {
                    var blot = blots.shift();
                    if (blot == null) return formats;
                    formats = combineFormats((0, _block.bubbleFormats)(blot), formats);
                  }

                  return formats;
                });
                return _extend2.default.apply(_extend2.default, formatsArr);
              }
            }, {
              key: 'getText',
              value: function getText(index, length) {
                return this.getContents(index, length).filter(function (op) {
                  return typeof op.insert === 'string';
                }).map(function (op) {
                  return op.insert;
                }).join('');
              }
            }, {
              key: 'insertEmbed',
              value: function insertEmbed(index, embed, value) {
                this.scroll.insertAt(index, embed, value);
                return this.update(new _quillDelta2.default().retain(index).insert(_defineProperty({}, embed, value)));
              }
            }, {
              key: 'insertText',
              value: function insertText(index, text) {
                var _this4 = this;

                var formats = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
                text = text.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
                this.scroll.insertAt(index, text);
                Object.keys(formats).forEach(function (format) {
                  _this4.scroll.formatAt(index, text.length, format, formats[format]);
                });
                return this.update(new _quillDelta2.default().retain(index).insert(text, (0, _clone2.default)(formats)));
              }
            }, {
              key: 'isBlank',
              value: function isBlank() {
                if (this.scroll.children.length == 0) return true;
                if (this.scroll.children.length > 1) return false;
                var block = this.scroll.children.head;
                if (block.statics.blotName !== _block2.default.blotName) return false;
                if (block.children.length > 1) return false;
                return block.children.head instanceof _break2.default;
              }
            }, {
              key: 'removeFormat',
              value: function removeFormat(index, length) {
                var text = this.getText(index, length);

                var _scroll$line3 = this.scroll.line(index + length),
                    _scroll$line4 = _slicedToArray(_scroll$line3, 2),
                    line = _scroll$line4[0],
                    offset = _scroll$line4[1];

                var suffixLength = 0,
                    suffix = new _quillDelta2.default();

                if (line != null) {
                  if (!(line instanceof _code2.default)) {
                    suffixLength = line.length() - offset;
                  } else {
                    suffixLength = line.newlineIndex(offset) - offset + 1;
                  }

                  suffix = line.delta().slice(offset, offset + suffixLength - 1).insert('\n');
                }

                var contents = this.getContents(index, length + suffixLength);
                var diff = contents.diff(new _quillDelta2.default().insert(text).concat(suffix));
                var delta = new _quillDelta2.default().retain(index).concat(diff);
                return this.applyDelta(delta);
              }
            }, {
              key: 'update',
              value: function update(change) {
                var mutations = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
                var cursorIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
                var oldDelta = this.delta;

                if (mutations.length === 1 && mutations[0].type === 'characterData' && mutations[0].target.data.match(ASCII) && _parchment2.default.find(mutations[0].target)) {
                  // Optimization for character changes
                  var textBlot = _parchment2.default.find(mutations[0].target);

                  var formats = (0, _block.bubbleFormats)(textBlot);
                  var index = textBlot.offset(this.scroll);
                  var oldValue = mutations[0].oldValue.replace(_cursor2.default.CONTENTS, '');
                  var oldText = new _quillDelta2.default().insert(oldValue);
                  var newText = new _quillDelta2.default().insert(textBlot.value());
                  var diffDelta = new _quillDelta2.default().retain(index).concat(oldText.diff(newText, cursorIndex));
                  change = diffDelta.reduce(function (delta, op) {
                    if (op.insert) {
                      return delta.insert(op.insert, formats);
                    } else {
                      return delta.push(op);
                    }
                  }, new _quillDelta2.default());
                  this.delta = oldDelta.compose(change);
                } else {
                  this.delta = this.getDelta();

                  if (!change || !(0, _deepEqual2.default)(oldDelta.compose(change), this.delta)) {
                    change = oldDelta.diff(this.delta, cursorIndex);
                  }
                }

                return change;
              }
            }]);

            return Editor;
          }();

          function combineFormats(formats, combined) {
            return Object.keys(combined).reduce(function (merged, name) {
              if (formats[name] == null) return merged;

              if (combined[name] === formats[name]) {
                merged[name] = combined[name];
              } else if (Array.isArray(combined[name])) {
                if (combined[name].indexOf(formats[name]) < 0) {
                  merged[name] = combined[name].concat([formats[name]]);
                }
              } else {
                merged[name] = [combined[name], formats[name]];
              }

              return merged;
            }, {});
          }

          function normalizeDelta(delta) {
            return delta.reduce(function (delta, op) {
              if (op.insert === 1) {
                var attributes = (0, _clone2.default)(op.attributes);
                delete attributes['image'];
                return delta.insert({
                  image: op.attributes.image
                }, attributes);
              }

              if (op.attributes != null && (op.attributes.list === true || op.attributes.bullet === true)) {
                op = (0, _clone2.default)(op);

                if (op.attributes.list) {
                  op.attributes.list = 'ordered';
                } else {
                  op.attributes.list = 'bullet';
                  delete op.attributes.bullet;
                }
              }

              if (typeof op.insert === 'string') {
                var text = op.insert.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
                return delta.insert(text, op.attributes);
              }

              return delta.push(op);
            }, new _quillDelta2.default());
          }

          exports.default = Editor;
          /***/
        },
        /* 15 */

        /***/
        function (module, exports, __webpack_require__) {

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = exports.Range = undefined;

          var _slicedToArray = function () {
            function sliceIterator(arr, i) {
              var _arr = [];
              var _n = true;
              var _d = false;
              var _e = undefined;

              try {
                for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                  _arr.push(_s.value);

                  if (i && _arr.length === i) break;
                }
              } catch (err) {
                _d = true;
                _e = err;
              } finally {
                try {
                  if (!_n && _i["return"]) _i["return"]();
                } finally {
                  if (_d) throw _e;
                }
              }

              return _arr;
            }

            return function (arr, i) {
              if (Array.isArray(arr)) {
                return arr;
              } else if (Symbol.iterator in Object(arr)) {
                return sliceIterator(arr, i);
              } else {
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
              }
            };
          }();

          var _createClass = function () {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }

            return function (Constructor, protoProps, staticProps) {
              if (protoProps) defineProperties(Constructor.prototype, protoProps);
              if (staticProps) defineProperties(Constructor, staticProps);
              return Constructor;
            };
          }();

          var _parchment = __webpack_require__(0);

          var _parchment2 = _interopRequireDefault(_parchment);

          var _clone = __webpack_require__(21);

          var _clone2 = _interopRequireDefault(_clone);

          var _deepEqual = __webpack_require__(11);

          var _deepEqual2 = _interopRequireDefault(_deepEqual);

          var _emitter3 = __webpack_require__(8);

          var _emitter4 = _interopRequireDefault(_emitter3);

          var _logger = __webpack_require__(10);

          var _logger2 = _interopRequireDefault(_logger);

          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
              default: obj
            };
          }

          function _toConsumableArray(arr) {
            if (Array.isArray(arr)) {
              for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
                arr2[i] = arr[i];
              }

              return arr2;
            } else {
              return Array.from(arr);
            }
          }

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }

          var debug = (0, _logger2.default)('quill:selection');

          var Range = function Range(index) {
            var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            _classCallCheck(this, Range);

            this.index = index;
            this.length = length;
          };

          var Selection = function () {
            function Selection(scroll, emitter) {
              var _this = this;

              _classCallCheck(this, Selection);

              this.emitter = emitter;
              this.scroll = scroll;
              this.composing = false;
              this.mouseDown = false;
              this.root = this.scroll.domNode;
              this.cursor = _parchment2.default.create('cursor', this); // savedRange is last non-null range

              this.lastRange = this.savedRange = new Range(0, 0);
              this.handleComposition();
              this.handleDragging();
              this.emitter.listenDOM('selectionchange', document, function () {
                if (!_this.mouseDown) {
                  setTimeout(_this.update.bind(_this, _emitter4.default.sources.USER), 1);
                }
              });
              this.emitter.on(_emitter4.default.events.EDITOR_CHANGE, function (type, delta) {
                if (type === _emitter4.default.events.TEXT_CHANGE && delta.length() > 0) {
                  _this.update(_emitter4.default.sources.SILENT);
                }
              });
              this.emitter.on(_emitter4.default.events.SCROLL_BEFORE_UPDATE, function () {
                if (!_this.hasFocus()) return;

                var native = _this.getNativeRange();

                if (native == null) return;
                if (native.start.node === _this.cursor.textNode) return; // cursor.restore() will handle
                // TODO unclear if this has negative side effects

                _this.emitter.once(_emitter4.default.events.SCROLL_UPDATE, function () {
                  try {
                    _this.setNativeRange(native.start.node, native.start.offset, native.end.node, native.end.offset);
                  } catch (ignored) {}
                });
              });
              this.emitter.on(_emitter4.default.events.SCROLL_OPTIMIZE, function (mutations, context) {
                if (context.range) {
                  var _context$range = context.range,
                      startNode = _context$range.startNode,
                      startOffset = _context$range.startOffset,
                      endNode = _context$range.endNode,
                      endOffset = _context$range.endOffset;

                  _this.setNativeRange(startNode, startOffset, endNode, endOffset);
                }
              });
              this.update(_emitter4.default.sources.SILENT);
            }

            _createClass(Selection, [{
              key: 'handleComposition',
              value: function handleComposition() {
                var _this2 = this;

                this.root.addEventListener('compositionstart', function () {
                  _this2.composing = true;
                });
                this.root.addEventListener('compositionend', function () {
                  _this2.composing = false;

                  if (_this2.cursor.parent) {
                    var range = _this2.cursor.restore();

                    if (!range) return;
                    setTimeout(function () {
                      _this2.setNativeRange(range.startNode, range.startOffset, range.endNode, range.endOffset);
                    }, 1);
                  }
                });
              }
            }, {
              key: 'handleDragging',
              value: function handleDragging() {
                var _this3 = this;

                this.emitter.listenDOM('mousedown', document.body, function () {
                  _this3.mouseDown = true;
                });
                this.emitter.listenDOM('mouseup', document.body, function () {
                  _this3.mouseDown = false;

                  _this3.update(_emitter4.default.sources.USER);
                });
              }
            }, {
              key: 'focus',
              value: function focus() {
                if (this.hasFocus()) return;
                this.root.focus();
                this.setRange(this.savedRange);
              }
            }, {
              key: 'format',
              value: function format(_format, value) {
                if (this.scroll.whitelist != null && !this.scroll.whitelist[_format]) return;
                this.scroll.update();
                var nativeRange = this.getNativeRange();
                if (nativeRange == null || !nativeRange.native.collapsed || _parchment2.default.query(_format, _parchment2.default.Scope.BLOCK)) return;

                if (nativeRange.start.node !== this.cursor.textNode) {
                  var blot = _parchment2.default.find(nativeRange.start.node, false);

                  if (blot == null) return; // TODO Give blot ability to not split

                  if (blot instanceof _parchment2.default.Leaf) {
                    var after = blot.split(nativeRange.start.offset);
                    blot.parent.insertBefore(this.cursor, after);
                  } else {
                    blot.insertBefore(this.cursor, nativeRange.start.node); // Should never happen
                  }

                  this.cursor.attach();
                }

                this.cursor.format(_format, value);
                this.scroll.optimize();
                this.setNativeRange(this.cursor.textNode, this.cursor.textNode.data.length);
                this.update();
              }
            }, {
              key: 'getBounds',
              value: function getBounds(index) {
                var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                var scrollLength = this.scroll.length();
                index = Math.min(index, scrollLength - 1);
                length = Math.min(index + length, scrollLength - 1) - index;

                var node = void 0,
                    _scroll$leaf = this.scroll.leaf(index),
                    _scroll$leaf2 = _slicedToArray(_scroll$leaf, 2),
                    leaf = _scroll$leaf2[0],
                    offset = _scroll$leaf2[1];

                if (leaf == null) return null;

                var _leaf$position = leaf.position(offset, true);

                var _leaf$position2 = _slicedToArray(_leaf$position, 2);

                node = _leaf$position2[0];
                offset = _leaf$position2[1];
                var range = document.createRange();

                if (length > 0) {
                  range.setStart(node, offset);

                  var _scroll$leaf3 = this.scroll.leaf(index + length);

                  var _scroll$leaf4 = _slicedToArray(_scroll$leaf3, 2);

                  leaf = _scroll$leaf4[0];
                  offset = _scroll$leaf4[1];
                  if (leaf == null) return null;

                  var _leaf$position3 = leaf.position(offset, true);

                  var _leaf$position4 = _slicedToArray(_leaf$position3, 2);

                  node = _leaf$position4[0];
                  offset = _leaf$position4[1];
                  range.setEnd(node, offset);
                  return range.getBoundingClientRect();
                } else {
                  var side = 'left';
                  var rect = void 0;

                  if (node instanceof Text) {
                    if (offset < node.data.length) {
                      range.setStart(node, offset);
                      range.setEnd(node, offset + 1);
                    } else {
                      range.setStart(node, offset - 1);
                      range.setEnd(node, offset);
                      side = 'right';
                    }

                    rect = range.getBoundingClientRect();
                  } else {
                    rect = leaf.domNode.getBoundingClientRect();
                    if (offset > 0) side = 'right';
                  }

                  return {
                    bottom: rect.top + rect.height,
                    height: rect.height,
                    left: rect[side],
                    right: rect[side],
                    top: rect.top,
                    width: 0
                  };
                }
              }
            }, {
              key: 'getNativeRange',
              value: function getNativeRange() {
                var selection = document.getSelection();
                if (selection == null || selection.rangeCount <= 0) return null;
                var nativeRange = selection.getRangeAt(0);
                if (nativeRange == null) return null;
                var range = this.normalizeNative(nativeRange);
                debug.info('getNativeRange', range);
                return range;
              }
            }, {
              key: 'getRange',
              value: function getRange() {
                var normalized = this.getNativeRange();
                if (normalized == null) return [null, null];
                var range = this.normalizedToRange(normalized);
                return [range, normalized];
              }
            }, {
              key: 'hasFocus',
              value: function hasFocus() {
                return document.activeElement === this.root;
              }
            }, {
              key: 'normalizedToRange',
              value: function normalizedToRange(range) {
                var _this4 = this;

                var positions = [[range.start.node, range.start.offset]];

                if (!range.native.collapsed) {
                  positions.push([range.end.node, range.end.offset]);
                }

                var indexes = positions.map(function (position) {
                  var _position = _slicedToArray(position, 2),
                      node = _position[0],
                      offset = _position[1];

                  var blot = _parchment2.default.find(node, true);

                  var index = blot.offset(_this4.scroll);

                  if (offset === 0) {
                    return index;
                  } else if (blot instanceof _parchment2.default.Container) {
                    return index + blot.length();
                  } else {
                    return index + blot.index(node, offset);
                  }
                });
                var end = Math.min(Math.max.apply(Math, _toConsumableArray(indexes)), this.scroll.length() - 1);
                var start = Math.min.apply(Math, [end].concat(_toConsumableArray(indexes)));
                return new Range(start, end - start);
              }
            }, {
              key: 'normalizeNative',
              value: function normalizeNative(nativeRange) {
                if (!contains(this.root, nativeRange.startContainer) || !nativeRange.collapsed && !contains(this.root, nativeRange.endContainer)) {
                  return null;
                }

                var range = {
                  start: {
                    node: nativeRange.startContainer,
                    offset: nativeRange.startOffset
                  },
                  end: {
                    node: nativeRange.endContainer,
                    offset: nativeRange.endOffset
                  },
                  native: nativeRange
                };
                [range.start, range.end].forEach(function (position) {
                  var node = position.node,
                      offset = position.offset;

                  while (!(node instanceof Text) && node.childNodes.length > 0) {
                    if (node.childNodes.length > offset) {
                      node = node.childNodes[offset];
                      offset = 0;
                    } else if (node.childNodes.length === offset) {
                      node = node.lastChild;
                      offset = node instanceof Text ? node.data.length : node.childNodes.length + 1;
                    } else {
                      break;
                    }
                  }

                  position.node = node, position.offset = offset;
                });
                return range;
              }
            }, {
              key: 'rangeToNative',
              value: function rangeToNative(range) {
                var _this5 = this;

                var indexes = range.collapsed ? [range.index] : [range.index, range.index + range.length];
                var args = [];
                var scrollLength = this.scroll.length();
                indexes.forEach(function (index, i) {
                  index = Math.min(scrollLength - 1, index);

                  var node = void 0,
                      _scroll$leaf5 = _this5.scroll.leaf(index),
                      _scroll$leaf6 = _slicedToArray(_scroll$leaf5, 2),
                      leaf = _scroll$leaf6[0],
                      offset = _scroll$leaf6[1];

                  var _leaf$position5 = leaf.position(offset, i !== 0);

                  var _leaf$position6 = _slicedToArray(_leaf$position5, 2);

                  node = _leaf$position6[0];
                  offset = _leaf$position6[1];
                  args.push(node, offset);
                });

                if (args.length < 2) {
                  args = args.concat(args);
                }

                return args;
              }
            }, {
              key: 'scrollIntoView',
              value: function scrollIntoView(scrollingContainer) {
                var range = this.lastRange;
                if (range == null) return;
                var bounds = this.getBounds(range.index, range.length);
                if (bounds == null) return;
                var limit = this.scroll.length() - 1;

                var _scroll$line = this.scroll.line(Math.min(range.index, limit)),
                    _scroll$line2 = _slicedToArray(_scroll$line, 1),
                    first = _scroll$line2[0];

                var last = first;

                if (range.length > 0) {
                  var _scroll$line3 = this.scroll.line(Math.min(range.index + range.length, limit));

                  var _scroll$line4 = _slicedToArray(_scroll$line3, 1);

                  last = _scroll$line4[0];
                }

                if (first == null || last == null) return;
                var scrollBounds = scrollingContainer.getBoundingClientRect();

                if (bounds.top < scrollBounds.top) {
                  scrollingContainer.scrollTop -= scrollBounds.top - bounds.top;
                } else if (bounds.bottom > scrollBounds.bottom) {
                  scrollingContainer.scrollTop += bounds.bottom - scrollBounds.bottom;
                }
              }
            }, {
              key: 'setNativeRange',
              value: function setNativeRange(startNode, startOffset) {
                var endNode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : startNode;
                var endOffset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : startOffset;
                var force = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
                debug.info('setNativeRange', startNode, startOffset, endNode, endOffset);

                if (startNode != null && (this.root.parentNode == null || startNode.parentNode == null || endNode.parentNode == null)) {
                  return;
                }

                var selection = document.getSelection();
                if (selection == null) return;

                if (startNode != null) {
                  if (!this.hasFocus()) this.root.focus();
                  var native = (this.getNativeRange() || {}).native;

                  if (native == null || force || startNode !== native.startContainer || startOffset !== native.startOffset || endNode !== native.endContainer || endOffset !== native.endOffset) {
                    if (startNode.tagName == "BR") {
                      startOffset = [].indexOf.call(startNode.parentNode.childNodes, startNode);
                      startNode = startNode.parentNode;
                    }

                    if (endNode.tagName == "BR") {
                      endOffset = [].indexOf.call(endNode.parentNode.childNodes, endNode);
                      endNode = endNode.parentNode;
                    }

                    var range = document.createRange();
                    range.setStart(startNode, startOffset);
                    range.setEnd(endNode, endOffset);
                    selection.removeAllRanges();
                    selection.addRange(range);
                  }
                } else {
                  selection.removeAllRanges();
                  this.root.blur();
                  document.body.focus(); // root.blur() not enough on IE11+Travis+SauceLabs (but not local VMs)
                }
              }
            }, {
              key: 'setRange',
              value: function setRange(range) {
                var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                var source = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _emitter4.default.sources.API;

                if (typeof force === 'string') {
                  source = force;
                  force = false;
                }

                debug.info('setRange', range);

                if (range != null) {
                  var args = this.rangeToNative(range);
                  this.setNativeRange.apply(this, _toConsumableArray(args).concat([force]));
                } else {
                  this.setNativeRange(null);
                }

                this.update(source);
              }
            }, {
              key: 'update',
              value: function update() {
                var source = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _emitter4.default.sources.USER;
                var oldRange = this.lastRange;

                var _getRange = this.getRange(),
                    _getRange2 = _slicedToArray(_getRange, 2),
                    lastRange = _getRange2[0],
                    nativeRange = _getRange2[1];

                this.lastRange = lastRange;

                if (this.lastRange != null) {
                  this.savedRange = this.lastRange;
                }

                if (!(0, _deepEqual2.default)(oldRange, this.lastRange)) {
                  var _emitter;

                  if (!this.composing && nativeRange != null && nativeRange.native.collapsed && nativeRange.start.node !== this.cursor.textNode) {
                    this.cursor.restore();
                  }

                  var args = [_emitter4.default.events.SELECTION_CHANGE, (0, _clone2.default)(this.lastRange), (0, _clone2.default)(oldRange), source];

                  (_emitter = this.emitter).emit.apply(_emitter, [_emitter4.default.events.EDITOR_CHANGE].concat(args));

                  if (source !== _emitter4.default.sources.SILENT) {
                    var _emitter2;

                    (_emitter2 = this.emitter).emit.apply(_emitter2, args);
                  }
                }
              }
            }]);

            return Selection;
          }();

          function contains(parent, descendant) {
            try {
              // Firefox inserts inaccessible nodes around video elements
              descendant.parentNode;
            } catch (e) {
              return false;
            } // IE11 has bug with Text nodes
            // https://connect.microsoft.com/IE/feedback/details/780874/node-contains-is-incorrect


            if (descendant instanceof Text) {
              descendant = descendant.parentNode;
            }

            return parent.contains(descendant);
          }

          exports.Range = Range;
          exports.default = Selection;
          /***/
        },
        /* 16 */

        /***/
        function (module, exports, __webpack_require__) {

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var _createClass = function () {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }

            return function (Constructor, protoProps, staticProps) {
              if (protoProps) defineProperties(Constructor.prototype, protoProps);
              if (staticProps) defineProperties(Constructor, staticProps);
              return Constructor;
            };
          }();

          var _get = function get(object, property, receiver) {
            if (object === null) object = Function.prototype;
            var desc = Object.getOwnPropertyDescriptor(object, property);

            if (desc === undefined) {
              var parent = Object.getPrototypeOf(object);

              if (parent === null) {
                return undefined;
              } else {
                return get(parent, property, receiver);
              }
            } else if ("value" in desc) {
              return desc.value;
            } else {
              var getter = desc.get;

              if (getter === undefined) {
                return undefined;
              }

              return getter.call(receiver);
            }
          };

          var _parchment = __webpack_require__(0);

          var _parchment2 = _interopRequireDefault(_parchment);

          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
              default: obj
            };
          }

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }

          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }

            return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
          }

          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
            }

            subClass.prototype = Object.create(superClass && superClass.prototype, {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
              }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
          }

          var Break = function (_Parchment$Embed) {
            _inherits(Break, _Parchment$Embed);

            function Break() {
              _classCallCheck(this, Break);

              return _possibleConstructorReturn(this, (Break.__proto__ || Object.getPrototypeOf(Break)).apply(this, arguments));
            }

            _createClass(Break, [{
              key: 'insertInto',
              value: function insertInto(parent, ref) {
                if (parent.children.length === 0) {
                  _get(Break.prototype.__proto__ || Object.getPrototypeOf(Break.prototype), 'insertInto', this).call(this, parent, ref);
                } else {
                  this.remove();
                }
              }
            }, {
              key: 'length',
              value: function length() {
                return 0;
              }
            }, {
              key: 'value',
              value: function value() {
                return '';
              }
            }], [{
              key: 'value',
              value: function value() {
                return undefined;
              }
            }]);

            return Break;
          }(_parchment2.default.Embed);

          Break.blotName = 'break';
          Break.tagName = 'BR';
          exports.default = Break;
          /***/
        },
        /* 17 */

        /***/
        function (module, exports, __webpack_require__) {

          var __extends = this && this.__extends || function () {
            var extendStatics = Object.setPrototypeOf || {
              __proto__: []
            } instanceof Array && function (d, b) {
              d.__proto__ = b;
            } || function (d, b) {
              for (var p in b) {
                if (b.hasOwnProperty(p)) d[p] = b[p];
              }
            };

            return function (d, b) {
              extendStatics(d, b);

              function __() {
                this.constructor = d;
              }

              d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
          }();

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var linked_list_1 = __webpack_require__(44);

          var shadow_1 = __webpack_require__(30);

          var Registry = __webpack_require__(1);

          var ContainerBlot =
          /** @class */
          function (_super) {
            __extends(ContainerBlot, _super);

            function ContainerBlot(domNode) {
              var _this = _super.call(this, domNode) || this;

              _this.build();

              return _this;
            }

            ContainerBlot.prototype.appendChild = function (other) {
              this.insertBefore(other);
            };

            ContainerBlot.prototype.attach = function () {
              _super.prototype.attach.call(this);

              this.children.forEach(function (child) {
                child.attach();
              });
            };

            ContainerBlot.prototype.build = function () {
              var _this = this;

              this.children = new linked_list_1.default(); // Need to be reversed for if DOM nodes already in order

              [].slice.call(this.domNode.childNodes).reverse().forEach(function (node) {
                try {
                  var child = makeBlot(node);

                  _this.insertBefore(child, _this.children.head || undefined);
                } catch (err) {
                  if (err instanceof Registry.ParchmentError) return;else throw err;
                }
              });
            };

            ContainerBlot.prototype.deleteAt = function (index, length) {
              if (index === 0 && length === this.length()) {
                return this.remove();
              }

              this.children.forEachAt(index, length, function (child, offset, length) {
                child.deleteAt(offset, length);
              });
            };

            ContainerBlot.prototype.descendant = function (criteria, index) {
              var _a = this.children.find(index),
                  child = _a[0],
                  offset = _a[1];

              if (criteria.blotName == null && criteria(child) || criteria.blotName != null && child instanceof criteria) {
                return [child, offset];
              } else if (child instanceof ContainerBlot) {
                return child.descendant(criteria, offset);
              } else {
                return [null, -1];
              }
            };

            ContainerBlot.prototype.descendants = function (criteria, index, length) {
              if (index === void 0) {
                index = 0;
              }

              if (length === void 0) {
                length = Number.MAX_VALUE;
              }

              var descendants = [];
              var lengthLeft = length;
              this.children.forEachAt(index, length, function (child, index, length) {
                if (criteria.blotName == null && criteria(child) || criteria.blotName != null && child instanceof criteria) {
                  descendants.push(child);
                }

                if (child instanceof ContainerBlot) {
                  descendants = descendants.concat(child.descendants(criteria, index, lengthLeft));
                }

                lengthLeft -= length;
              });
              return descendants;
            };

            ContainerBlot.prototype.detach = function () {
              this.children.forEach(function (child) {
                child.detach();
              });

              _super.prototype.detach.call(this);
            };

            ContainerBlot.prototype.formatAt = function (index, length, name, value) {
              this.children.forEachAt(index, length, function (child, offset, length) {
                child.formatAt(offset, length, name, value);
              });
            };

            ContainerBlot.prototype.insertAt = function (index, value, def) {
              var _a = this.children.find(index),
                  child = _a[0],
                  offset = _a[1];

              if (child) {
                child.insertAt(offset, value, def);
              } else {
                var blot = def == null ? Registry.create('text', value) : Registry.create(value, def);
                this.appendChild(blot);
              }
            };

            ContainerBlot.prototype.insertBefore = function (childBlot, refBlot) {
              if (this.statics.allowedChildren != null && !this.statics.allowedChildren.some(function (child) {
                return childBlot instanceof child;
              })) {
                throw new Registry.ParchmentError("Cannot insert " + childBlot.statics.blotName + " into " + this.statics.blotName);
              }

              childBlot.insertInto(this, refBlot);
            };

            ContainerBlot.prototype.length = function () {
              return this.children.reduce(function (memo, child) {
                return memo + child.length();
              }, 0);
            };

            ContainerBlot.prototype.moveChildren = function (targetParent, refNode) {
              this.children.forEach(function (child) {
                targetParent.insertBefore(child, refNode);
              });
            };

            ContainerBlot.prototype.optimize = function (context) {
              _super.prototype.optimize.call(this, context);

              if (this.children.length === 0) {
                if (this.statics.defaultChild != null) {
                  var child = Registry.create(this.statics.defaultChild);
                  this.appendChild(child);
                  child.optimize(context);
                } else {
                  this.remove();
                }
              }
            };

            ContainerBlot.prototype.path = function (index, inclusive) {
              if (inclusive === void 0) {
                inclusive = false;
              }

              var _a = this.children.find(index, inclusive),
                  child = _a[0],
                  offset = _a[1];

              var position = [[this, index]];

              if (child instanceof ContainerBlot) {
                return position.concat(child.path(offset, inclusive));
              } else if (child != null) {
                position.push([child, offset]);
              }

              return position;
            };

            ContainerBlot.prototype.removeChild = function (child) {
              this.children.remove(child);
            };

            ContainerBlot.prototype.replace = function (target) {
              if (target instanceof ContainerBlot) {
                target.moveChildren(this);
              }

              _super.prototype.replace.call(this, target);
            };

            ContainerBlot.prototype.split = function (index, force) {
              if (force === void 0) {
                force = false;
              }

              if (!force) {
                if (index === 0) return this;
                if (index === this.length()) return this.next;
              }

              var after = this.clone();
              this.parent.insertBefore(after, this.next);
              this.children.forEachAt(index, this.length(), function (child, offset, length) {
                child = child.split(offset, force);
                after.appendChild(child);
              });
              return after;
            };

            ContainerBlot.prototype.unwrap = function () {
              this.moveChildren(this.parent, this.next);
              this.remove();
            };

            ContainerBlot.prototype.update = function (mutations, context) {
              var _this = this;

              var addedNodes = [];
              var removedNodes = [];
              mutations.forEach(function (mutation) {
                if (mutation.target === _this.domNode && mutation.type === 'childList') {
                  addedNodes.push.apply(addedNodes, mutation.addedNodes);
                  removedNodes.push.apply(removedNodes, mutation.removedNodes);
                }
              });
              removedNodes.forEach(function (node) {
                // Check node has actually been removed
                // One exception is Chrome does not immediately remove IFRAMEs
                // from DOM but MutationRecord is correct in its reported removal
                if (node.parentNode != null && // @ts-ignore
                node.tagName !== 'IFRAME' && document.body.compareDocumentPosition(node) & Node.DOCUMENT_POSITION_CONTAINED_BY) {
                  return;
                }

                var blot = Registry.find(node);
                if (blot == null) return;

                if (blot.domNode.parentNode == null || blot.domNode.parentNode === _this.domNode) {
                  blot.detach();
                }
              });
              addedNodes.filter(function (node) {
                return node.parentNode == _this.domNode;
              }).sort(function (a, b) {
                if (a === b) return 0;

                if (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING) {
                  return 1;
                }

                return -1;
              }).forEach(function (node) {
                var refBlot = null;

                if (node.nextSibling != null) {
                  refBlot = Registry.find(node.nextSibling);
                }

                var blot = makeBlot(node);

                if (blot.next != refBlot || blot.next == null) {
                  if (blot.parent != null) {
                    blot.parent.removeChild(_this);
                  }

                  _this.insertBefore(blot, refBlot || undefined);
                }
              });
            };

            return ContainerBlot;
          }(shadow_1.default);

          function makeBlot(node) {
            var blot = Registry.find(node);

            if (blot == null) {
              try {
                blot = Registry.create(node);
              } catch (e) {
                blot = Registry.create(Registry.Scope.INLINE);
                [].slice.call(node.childNodes).forEach(function (child) {
                  // @ts-ignore
                  blot.domNode.appendChild(child);
                });

                if (node.parentNode) {
                  node.parentNode.replaceChild(blot.domNode, node);
                }

                blot.attach();
              }
            }

            return blot;
          }

          exports.default = ContainerBlot;
          /***/
        },
        /* 18 */

        /***/
        function (module, exports, __webpack_require__) {

          var __extends = this && this.__extends || function () {
            var extendStatics = Object.setPrototypeOf || {
              __proto__: []
            } instanceof Array && function (d, b) {
              d.__proto__ = b;
            } || function (d, b) {
              for (var p in b) {
                if (b.hasOwnProperty(p)) d[p] = b[p];
              }
            };

            return function (d, b) {
              extendStatics(d, b);

              function __() {
                this.constructor = d;
              }

              d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
          }();

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var attributor_1 = __webpack_require__(12);

          var store_1 = __webpack_require__(31);

          var container_1 = __webpack_require__(17);

          var Registry = __webpack_require__(1);

          var FormatBlot =
          /** @class */
          function (_super) {
            __extends(FormatBlot, _super);

            function FormatBlot(domNode) {
              var _this = _super.call(this, domNode) || this;

              _this.attributes = new store_1.default(_this.domNode);
              return _this;
            }

            FormatBlot.formats = function (domNode) {
              if (typeof this.tagName === 'string') {
                return true;
              } else if (Array.isArray(this.tagName)) {
                return domNode.tagName.toLowerCase();
              }

              return undefined;
            };

            FormatBlot.prototype.format = function (name, value) {
              var format = Registry.query(name);

              if (format instanceof attributor_1.default) {
                this.attributes.attribute(format, value);
              } else if (value) {
                if (format != null && (name !== this.statics.blotName || this.formats()[name] !== value)) {
                  this.replaceWith(name, value);
                }
              }
            };

            FormatBlot.prototype.formats = function () {
              var formats = this.attributes.values();
              var format = this.statics.formats(this.domNode);

              if (format != null) {
                formats[this.statics.blotName] = format;
              }

              return formats;
            };

            FormatBlot.prototype.replaceWith = function (name, value) {
              var replacement = _super.prototype.replaceWith.call(this, name, value);

              this.attributes.copy(replacement);
              return replacement;
            };

            FormatBlot.prototype.update = function (mutations, context) {
              var _this = this;

              _super.prototype.update.call(this, mutations, context);

              if (mutations.some(function (mutation) {
                return mutation.target === _this.domNode && mutation.type === 'attributes';
              })) {
                this.attributes.build();
              }
            };

            FormatBlot.prototype.wrap = function (name, value) {
              var wrapper = _super.prototype.wrap.call(this, name, value);

              if (wrapper instanceof FormatBlot && wrapper.statics.scope === this.statics.scope) {
                this.attributes.move(wrapper);
              }

              return wrapper;
            };

            return FormatBlot;
          }(container_1.default);

          exports.default = FormatBlot;
          /***/
        },
        /* 19 */

        /***/
        function (module, exports, __webpack_require__) {

          var __extends = this && this.__extends || function () {
            var extendStatics = Object.setPrototypeOf || {
              __proto__: []
            } instanceof Array && function (d, b) {
              d.__proto__ = b;
            } || function (d, b) {
              for (var p in b) {
                if (b.hasOwnProperty(p)) d[p] = b[p];
              }
            };

            return function (d, b) {
              extendStatics(d, b);

              function __() {
                this.constructor = d;
              }

              d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
          }();

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var shadow_1 = __webpack_require__(30);

          var Registry = __webpack_require__(1);

          var LeafBlot =
          /** @class */
          function (_super) {
            __extends(LeafBlot, _super);

            function LeafBlot() {
              return _super !== null && _super.apply(this, arguments) || this;
            }

            LeafBlot.value = function (domNode) {
              return true;
            };

            LeafBlot.prototype.index = function (node, offset) {
              if (this.domNode === node || this.domNode.compareDocumentPosition(node) & Node.DOCUMENT_POSITION_CONTAINED_BY) {
                return Math.min(offset, 1);
              }

              return -1;
            };

            LeafBlot.prototype.position = function (index, inclusive) {
              var offset = [].indexOf.call(this.parent.domNode.childNodes, this.domNode);
              if (index > 0) offset += 1;
              return [this.parent.domNode, offset];
            };

            LeafBlot.prototype.value = function () {
              var _a;

              return _a = {}, _a[this.statics.blotName] = this.statics.value(this.domNode) || true, _a;
            };

            LeafBlot.scope = Registry.Scope.INLINE_BLOT;
            return LeafBlot;
          }(shadow_1.default);

          exports.default = LeafBlot;
          /***/
        },
        /* 20 */

        /***/
        function (module, exports, __webpack_require__) {
          var equal = __webpack_require__(11);

          var extend = __webpack_require__(3);

          var lib = {
            attributes: {
              compose: function compose(a, b, keepNull) {
                if (_typeof(a) !== 'object') a = {};
                if (_typeof(b) !== 'object') b = {};
                var attributes = extend(true, {}, b);

                if (!keepNull) {
                  attributes = Object.keys(attributes).reduce(function (copy, key) {
                    if (attributes[key] != null) {
                      copy[key] = attributes[key];
                    }

                    return copy;
                  }, {});
                }

                for (var key in a) {
                  if (a[key] !== undefined && b[key] === undefined) {
                    attributes[key] = a[key];
                  }
                }

                return Object.keys(attributes).length > 0 ? attributes : undefined;
              },
              diff: function diff(a, b) {
                if (_typeof(a) !== 'object') a = {};
                if (_typeof(b) !== 'object') b = {};
                var attributes = Object.keys(a).concat(Object.keys(b)).reduce(function (attributes, key) {
                  if (!equal(a[key], b[key])) {
                    attributes[key] = b[key] === undefined ? null : b[key];
                  }

                  return attributes;
                }, {});
                return Object.keys(attributes).length > 0 ? attributes : undefined;
              },
              transform: function transform(a, b, priority) {
                if (_typeof(a) !== 'object') return b;
                if (_typeof(b) !== 'object') return undefined;
                if (!priority) return b; // b simply overwrites us without priority

                var attributes = Object.keys(b).reduce(function (attributes, key) {
                  if (a[key] === undefined) attributes[key] = b[key]; // null is a valid value

                  return attributes;
                }, {});
                return Object.keys(attributes).length > 0 ? attributes : undefined;
              }
            },
            iterator: function iterator(ops) {
              return new Iterator(ops);
            },
            length: function length(op) {
              if (typeof op['delete'] === 'number') {
                return op['delete'];
              } else if (typeof op.retain === 'number') {
                return op.retain;
              } else {
                return typeof op.insert === 'string' ? op.insert.length : 1;
              }
            }
          };

          function Iterator(ops) {
            this.ops = ops;
            this.index = 0;
            this.offset = 0;
          }

          Iterator.prototype.hasNext = function () {
            return this.peekLength() < Infinity;
          };

          Iterator.prototype.next = function (length) {
            if (!length) length = Infinity;
            var nextOp = this.ops[this.index];

            if (nextOp) {
              var offset = this.offset;
              var opLength = lib.length(nextOp);

              if (length >= opLength - offset) {
                length = opLength - offset;
                this.index += 1;
                this.offset = 0;
              } else {
                this.offset += length;
              }

              if (typeof nextOp['delete'] === 'number') {
                return {
                  'delete': length
                };
              } else {
                var retOp = {};

                if (nextOp.attributes) {
                  retOp.attributes = nextOp.attributes;
                }

                if (typeof nextOp.retain === 'number') {
                  retOp.retain = length;
                } else if (typeof nextOp.insert === 'string') {
                  retOp.insert = nextOp.insert.substr(offset, length);
                } else {
                  // offset should === 0, length should === 1
                  retOp.insert = nextOp.insert;
                }

                return retOp;
              }
            } else {
              return {
                retain: Infinity
              };
            }
          };

          Iterator.prototype.peek = function () {
            return this.ops[this.index];
          };

          Iterator.prototype.peekLength = function () {
            if (this.ops[this.index]) {
              // Should never return 0 if our index is being managed correctly
              return lib.length(this.ops[this.index]) - this.offset;
            } else {
              return Infinity;
            }
          };

          Iterator.prototype.peekType = function () {
            if (this.ops[this.index]) {
              if (typeof this.ops[this.index]['delete'] === 'number') {
                return 'delete';
              } else if (typeof this.ops[this.index].retain === 'number') {
                return 'retain';
              } else {
                return 'insert';
              }
            }

            return 'retain';
          };

          Iterator.prototype.rest = function () {
            if (!this.hasNext()) {
              return [];
            } else if (this.offset === 0) {
              return this.ops.slice(this.index);
            } else {
              var offset = this.offset;
              var index = this.index;
              var next = this.next();
              var rest = this.ops.slice(this.index);
              this.offset = offset;
              this.index = index;
              return [next].concat(rest);
            }
          };

          module.exports = lib;
          /***/
        },
        /* 21 */

        /***/
        function (module, exports) {
          var clone = function () {

            function _instanceof(obj, type) {
              return type != null && obj instanceof type;
            }

            var nativeMap;

            try {
              nativeMap = Map;
            } catch (_) {
              // maybe a reference error because no `Map`. Give it a dummy value that no
              // value will ever be an instanceof.
              nativeMap = function nativeMap() {};
            }

            var nativeSet;

            try {
              nativeSet = Set;
            } catch (_) {
              nativeSet = function nativeSet() {};
            }

            var nativePromise;

            try {
              nativePromise = Promise;
            } catch (_) {
              nativePromise = function nativePromise() {};
            }
            /**
             * Clones (copies) an Object using deep copying.
             *
             * This function supports circular references by default, but if you are certain
             * there are no circular references in your object, you can save some CPU time
             * by calling clone(obj, false).
             *
             * Caution: if `circular` is false and `parent` contains circular references,
             * your program may enter an infinite loop and crash.
             *
             * @param `parent` - the object to be cloned
             * @param `circular` - set to true if the object to be cloned may contain
             *    circular references. (optional - true by default)
             * @param `depth` - set to a number if the object is only to be cloned to
             *    a particular depth. (optional - defaults to Infinity)
             * @param `prototype` - sets the prototype to be used when cloning an object.
             *    (optional - defaults to parent prototype).
             * @param `includeNonEnumerable` - set to true if the non-enumerable properties
             *    should be cloned as well. Non-enumerable properties on the prototype
             *    chain will be ignored. (optional - false by default)
            */


            function clone(parent, circular, depth, prototype, includeNonEnumerable) {
              if (_typeof(circular) === 'object') {
                depth = circular.depth;
                prototype = circular.prototype;
                includeNonEnumerable = circular.includeNonEnumerable;
                circular = circular.circular;
              } // maintain two arrays for circular references, where corresponding parents
              // and children have the same index


              var allParents = [];
              var allChildren = [];
              var useBuffer = typeof Buffer != 'undefined';
              if (typeof circular == 'undefined') circular = true;
              if (typeof depth == 'undefined') depth = Infinity; // recurse this function so we don't reset allParents and allChildren

              function _clone(parent, depth) {
                // cloning null always returns null
                if (parent === null) return null;
                if (depth === 0) return parent;
                var child;
                var proto;

                if (_typeof(parent) != 'object') {
                  return parent;
                }

                if (_instanceof(parent, nativeMap)) {
                  child = new nativeMap();
                } else if (_instanceof(parent, nativeSet)) {
                  child = new nativeSet();
                } else if (_instanceof(parent, nativePromise)) {
                  child = new nativePromise(function (resolve, reject) {
                    parent.then(function (value) {
                      resolve(_clone(value, depth - 1));
                    }, function (err) {
                      reject(_clone(err, depth - 1));
                    });
                  });
                } else if (clone.__isArray(parent)) {
                  child = [];
                } else if (clone.__isRegExp(parent)) {
                  child = new RegExp(parent.source, __getRegExpFlags(parent));
                  if (parent.lastIndex) child.lastIndex = parent.lastIndex;
                } else if (clone.__isDate(parent)) {
                  child = new Date(parent.getTime());
                } else if (useBuffer && Buffer.isBuffer(parent)) {
                  if (Buffer.allocUnsafe) {
                    // Node.js >= 4.5.0
                    child = Buffer.allocUnsafe(parent.length);
                  } else {
                    // Older Node.js versions
                    child = new Buffer(parent.length);
                  }

                  parent.copy(child);
                  return child;
                } else if (_instanceof(parent, Error)) {
                  child = Object.create(parent);
                } else {
                  if (typeof prototype == 'undefined') {
                    proto = Object.getPrototypeOf(parent);
                    child = Object.create(proto);
                  } else {
                    child = Object.create(prototype);
                    proto = prototype;
                  }
                }

                if (circular) {
                  var index = allParents.indexOf(parent);

                  if (index != -1) {
                    return allChildren[index];
                  }

                  allParents.push(parent);
                  allChildren.push(child);
                }

                if (_instanceof(parent, nativeMap)) {
                  parent.forEach(function (value, key) {
                    var keyChild = _clone(key, depth - 1);

                    var valueChild = _clone(value, depth - 1);

                    child.set(keyChild, valueChild);
                  });
                }

                if (_instanceof(parent, nativeSet)) {
                  parent.forEach(function (value) {
                    var entryChild = _clone(value, depth - 1);

                    child.add(entryChild);
                  });
                }

                for (var i in parent) {
                  var attrs;

                  if (proto) {
                    attrs = Object.getOwnPropertyDescriptor(proto, i);
                  }

                  if (attrs && attrs.set == null) {
                    continue;
                  }

                  child[i] = _clone(parent[i], depth - 1);
                }

                if (Object.getOwnPropertySymbols) {
                  var symbols = Object.getOwnPropertySymbols(parent);

                  for (var i = 0; i < symbols.length; i++) {
                    // Don't need to worry about cloning a symbol because it is a primitive,
                    // like a number or string.
                    var symbol = symbols[i];
                    var descriptor = Object.getOwnPropertyDescriptor(parent, symbol);

                    if (descriptor && !descriptor.enumerable && !includeNonEnumerable) {
                      continue;
                    }

                    child[symbol] = _clone(parent[symbol], depth - 1);

                    if (!descriptor.enumerable) {
                      Object.defineProperty(child, symbol, {
                        enumerable: false
                      });
                    }
                  }
                }

                if (includeNonEnumerable) {
                  var allPropertyNames = Object.getOwnPropertyNames(parent);

                  for (var i = 0; i < allPropertyNames.length; i++) {
                    var propertyName = allPropertyNames[i];
                    var descriptor = Object.getOwnPropertyDescriptor(parent, propertyName);

                    if (descriptor && descriptor.enumerable) {
                      continue;
                    }

                    child[propertyName] = _clone(parent[propertyName], depth - 1);
                    Object.defineProperty(child, propertyName, {
                      enumerable: false
                    });
                  }
                }

                return child;
              }

              return _clone(parent, depth);
            }
            /**
             * Simple flat clone using prototype, accepts only objects, usefull for property
             * override on FLAT configuration object (no nested props).
             *
             * USE WITH CAUTION! This may not behave as you wish if you do not know how this
             * works.
             */


            clone.clonePrototype = function clonePrototype(parent) {
              if (parent === null) return null;

              var c = function c() {};

              c.prototype = parent;
              return new c();
            }; // private utility functions


            function __objToStr(o) {
              return Object.prototype.toString.call(o);
            }

            clone.__objToStr = __objToStr;

            function __isDate(o) {
              return _typeof(o) === 'object' && __objToStr(o) === '[object Date]';
            }

            clone.__isDate = __isDate;

            function __isArray(o) {
              return _typeof(o) === 'object' && __objToStr(o) === '[object Array]';
            }

            clone.__isArray = __isArray;

            function __isRegExp(o) {
              return _typeof(o) === 'object' && __objToStr(o) === '[object RegExp]';
            }

            clone.__isRegExp = __isRegExp;

            function __getRegExpFlags(re) {
              var flags = '';
              if (re.global) flags += 'g';
              if (re.ignoreCase) flags += 'i';
              if (re.multiline) flags += 'm';
              return flags;
            }

            clone.__getRegExpFlags = __getRegExpFlags;
            return clone;
          }();

          if (_typeof(module) === 'object' && module.exports) {
            module.exports = clone;
          }
          /***/

        },
        /* 22 */

        /***/
        function (module, exports, __webpack_require__) {

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var _slicedToArray = function () {
            function sliceIterator(arr, i) {
              var _arr = [];
              var _n = true;
              var _d = false;
              var _e = undefined;

              try {
                for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                  _arr.push(_s.value);

                  if (i && _arr.length === i) break;
                }
              } catch (err) {
                _d = true;
                _e = err;
              } finally {
                try {
                  if (!_n && _i["return"]) _i["return"]();
                } finally {
                  if (_d) throw _e;
                }
              }

              return _arr;
            }

            return function (arr, i) {
              if (Array.isArray(arr)) {
                return arr;
              } else if (Symbol.iterator in Object(arr)) {
                return sliceIterator(arr, i);
              } else {
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
              }
            };
          }();

          var _createClass = function () {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }

            return function (Constructor, protoProps, staticProps) {
              if (protoProps) defineProperties(Constructor.prototype, protoProps);
              if (staticProps) defineProperties(Constructor, staticProps);
              return Constructor;
            };
          }();

          var _get = function get(object, property, receiver) {
            if (object === null) object = Function.prototype;
            var desc = Object.getOwnPropertyDescriptor(object, property);

            if (desc === undefined) {
              var parent = Object.getPrototypeOf(object);

              if (parent === null) {
                return undefined;
              } else {
                return get(parent, property, receiver);
              }
            } else if ("value" in desc) {
              return desc.value;
            } else {
              var getter = desc.get;

              if (getter === undefined) {
                return undefined;
              }

              return getter.call(receiver);
            }
          };

          var _parchment = __webpack_require__(0);

          var _parchment2 = _interopRequireDefault(_parchment);

          var _emitter = __webpack_require__(8);

          var _emitter2 = _interopRequireDefault(_emitter);

          var _block = __webpack_require__(4);

          var _block2 = _interopRequireDefault(_block);

          var _break = __webpack_require__(16);

          var _break2 = _interopRequireDefault(_break);

          var _code = __webpack_require__(13);

          var _code2 = _interopRequireDefault(_code);

          var _container = __webpack_require__(25);

          var _container2 = _interopRequireDefault(_container);

          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
              default: obj
            };
          }

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }

          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }

            return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
          }

          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
            }

            subClass.prototype = Object.create(superClass && superClass.prototype, {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
              }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
          }

          function isLine(blot) {
            return blot instanceof _block2.default || blot instanceof _block.BlockEmbed;
          }

          var Scroll = function (_Parchment$Scroll) {
            _inherits(Scroll, _Parchment$Scroll);

            function Scroll(domNode, config) {
              _classCallCheck(this, Scroll);

              var _this = _possibleConstructorReturn(this, (Scroll.__proto__ || Object.getPrototypeOf(Scroll)).call(this, domNode));

              _this.emitter = config.emitter;

              if (Array.isArray(config.whitelist)) {
                _this.whitelist = config.whitelist.reduce(function (whitelist, format) {
                  whitelist[format] = true;
                  return whitelist;
                }, {});
              } // Some reason fixes composition issues with character languages in Windows/Chrome, Safari


              _this.domNode.addEventListener('DOMNodeInserted', function () {});

              _this.optimize();

              _this.enable();

              return _this;
            }

            _createClass(Scroll, [{
              key: 'batchStart',
              value: function batchStart() {
                this.batch = true;
              }
            }, {
              key: 'batchEnd',
              value: function batchEnd() {
                this.batch = false;
                this.optimize();
              }
            }, {
              key: 'deleteAt',
              value: function deleteAt(index, length) {
                var _line = this.line(index),
                    _line2 = _slicedToArray(_line, 2),
                    first = _line2[0],
                    offset = _line2[1];

                var _line3 = this.line(index + length),
                    _line4 = _slicedToArray(_line3, 1),
                    last = _line4[0];

                _get(Scroll.prototype.__proto__ || Object.getPrototypeOf(Scroll.prototype), 'deleteAt', this).call(this, index, length);

                if (last != null && first !== last && offset > 0) {
                  if (first instanceof _block.BlockEmbed || last instanceof _block.BlockEmbed) {
                    this.optimize();
                    return;
                  }

                  if (first instanceof _code2.default) {
                    var newlineIndex = first.newlineIndex(first.length(), true);

                    if (newlineIndex > -1) {
                      first = first.split(newlineIndex + 1);

                      if (first === last) {
                        this.optimize();
                        return;
                      }
                    }
                  } else if (last instanceof _code2.default) {
                    var _newlineIndex = last.newlineIndex(0);

                    if (_newlineIndex > -1) {
                      last.split(_newlineIndex + 1);
                    }
                  }

                  var ref = last.children.head instanceof _break2.default ? null : last.children.head;
                  first.moveChildren(last, ref);
                  first.remove();
                }

                this.optimize();
              }
            }, {
              key: 'enable',
              value: function enable() {
                var enabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
                this.domNode.setAttribute('contenteditable', enabled);
              }
            }, {
              key: 'formatAt',
              value: function formatAt(index, length, format, value) {
                if (this.whitelist != null && !this.whitelist[format]) return;

                _get(Scroll.prototype.__proto__ || Object.getPrototypeOf(Scroll.prototype), 'formatAt', this).call(this, index, length, format, value);

                this.optimize();
              }
            }, {
              key: 'insertAt',
              value: function insertAt(index, value, def) {
                if (def != null && this.whitelist != null && !this.whitelist[value]) return;

                if (index >= this.length()) {
                  if (def == null || _parchment2.default.query(value, _parchment2.default.Scope.BLOCK) == null) {
                    var blot = _parchment2.default.create(this.statics.defaultChild);

                    this.appendChild(blot);

                    if (def == null && value.endsWith('\n')) {
                      value = value.slice(0, -1);
                    }

                    blot.insertAt(0, value, def);
                  } else {
                    var embed = _parchment2.default.create(value, def);

                    this.appendChild(embed);
                  }
                } else {
                  _get(Scroll.prototype.__proto__ || Object.getPrototypeOf(Scroll.prototype), 'insertAt', this).call(this, index, value, def);
                }

                this.optimize();
              }
            }, {
              key: 'insertBefore',
              value: function insertBefore(blot, ref) {
                if (blot.statics.scope === _parchment2.default.Scope.INLINE_BLOT) {
                  var wrapper = _parchment2.default.create(this.statics.defaultChild);

                  wrapper.appendChild(blot);
                  blot = wrapper;
                }

                _get(Scroll.prototype.__proto__ || Object.getPrototypeOf(Scroll.prototype), 'insertBefore', this).call(this, blot, ref);
              }
            }, {
              key: 'leaf',
              value: function leaf(index) {
                return this.path(index).pop() || [null, -1];
              }
            }, {
              key: 'line',
              value: function line(index) {
                if (index === this.length()) {
                  return this.line(index - 1);
                }

                return this.descendant(isLine, index);
              }
            }, {
              key: 'lines',
              value: function lines() {
                var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Number.MAX_VALUE;

                var getLines = function getLines(blot, index, length) {
                  var lines = [],
                      lengthLeft = length;
                  blot.children.forEachAt(index, length, function (child, index, length) {
                    if (isLine(child)) {
                      lines.push(child);
                    } else if (child instanceof _parchment2.default.Container) {
                      lines = lines.concat(getLines(child, index, lengthLeft));
                    }

                    lengthLeft -= length;
                  });
                  return lines;
                };

                return getLines(this, index, length);
              }
            }, {
              key: 'optimize',
              value: function optimize() {
                var mutations = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
                var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                if (this.batch === true) return;

                _get(Scroll.prototype.__proto__ || Object.getPrototypeOf(Scroll.prototype), 'optimize', this).call(this, mutations, context);

                if (mutations.length > 0) {
                  this.emitter.emit(_emitter2.default.events.SCROLL_OPTIMIZE, mutations, context);
                }
              }
            }, {
              key: 'path',
              value: function path(index) {
                return _get(Scroll.prototype.__proto__ || Object.getPrototypeOf(Scroll.prototype), 'path', this).call(this, index).slice(1); // Exclude self
              }
            }, {
              key: 'update',
              value: function update(mutations) {
                if (this.batch === true) return;
                var source = _emitter2.default.sources.USER;

                if (typeof mutations === 'string') {
                  source = mutations;
                }

                if (!Array.isArray(mutations)) {
                  mutations = this.observer.takeRecords();
                }

                if (mutations.length > 0) {
                  this.emitter.emit(_emitter2.default.events.SCROLL_BEFORE_UPDATE, source, mutations);
                }

                _get(Scroll.prototype.__proto__ || Object.getPrototypeOf(Scroll.prototype), 'update', this).call(this, mutations.concat([])); // pass copy


                if (mutations.length > 0) {
                  this.emitter.emit(_emitter2.default.events.SCROLL_UPDATE, source, mutations);
                }
              }
            }]);

            return Scroll;
          }(_parchment2.default.Scroll);

          Scroll.blotName = 'scroll';
          Scroll.className = 'ql-editor';
          Scroll.tagName = 'DIV';
          Scroll.defaultChild = 'block';
          Scroll.allowedChildren = [_block2.default, _block.BlockEmbed, _container2.default];
          exports.default = Scroll;
          /***/
        },
        /* 23 */

        /***/
        function (module, exports, __webpack_require__) {

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SHORTKEY = exports.default = undefined;

          var _typeof$1 = typeof Symbol === "function" && _typeof(Symbol.iterator) === "symbol" ? function (obj) {
            return _typeof(obj);
          } : function (obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof(obj);
          };

          var _slicedToArray = function () {
            function sliceIterator(arr, i) {
              var _arr = [];
              var _n = true;
              var _d = false;
              var _e = undefined;

              try {
                for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                  _arr.push(_s.value);

                  if (i && _arr.length === i) break;
                }
              } catch (err) {
                _d = true;
                _e = err;
              } finally {
                try {
                  if (!_n && _i["return"]) _i["return"]();
                } finally {
                  if (_d) throw _e;
                }
              }

              return _arr;
            }

            return function (arr, i) {
              if (Array.isArray(arr)) {
                return arr;
              } else if (Symbol.iterator in Object(arr)) {
                return sliceIterator(arr, i);
              } else {
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
              }
            };
          }();

          var _createClass = function () {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }

            return function (Constructor, protoProps, staticProps) {
              if (protoProps) defineProperties(Constructor.prototype, protoProps);
              if (staticProps) defineProperties(Constructor, staticProps);
              return Constructor;
            };
          }();

          var _clone = __webpack_require__(21);

          var _clone2 = _interopRequireDefault(_clone);

          var _deepEqual = __webpack_require__(11);

          var _deepEqual2 = _interopRequireDefault(_deepEqual);

          var _extend = __webpack_require__(3);

          var _extend2 = _interopRequireDefault(_extend);

          var _quillDelta = __webpack_require__(2);

          var _quillDelta2 = _interopRequireDefault(_quillDelta);

          var _op = __webpack_require__(20);

          var _op2 = _interopRequireDefault(_op);

          var _parchment = __webpack_require__(0);

          var _parchment2 = _interopRequireDefault(_parchment);

          var _quill = __webpack_require__(5);

          var _quill2 = _interopRequireDefault(_quill);

          var _logger = __webpack_require__(10);

          var _logger2 = _interopRequireDefault(_logger);

          var _module = __webpack_require__(9);

          var _module2 = _interopRequireDefault(_module);

          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
              default: obj
            };
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

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }

          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }

            return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
          }

          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
            }

            subClass.prototype = Object.create(superClass && superClass.prototype, {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
              }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
          }

          var debug = (0, _logger2.default)('quill:keyboard');
          var SHORTKEY = /Mac/i.test(navigator.platform) ? 'metaKey' : 'ctrlKey';

          var Keyboard = function (_Module) {
            _inherits(Keyboard, _Module);

            _createClass(Keyboard, null, [{
              key: 'match',
              value: function match(evt, binding) {
                binding = normalize(binding);

                if (['altKey', 'ctrlKey', 'metaKey', 'shiftKey'].some(function (key) {
                  return !!binding[key] !== evt[key] && binding[key] !== null;
                })) {
                  return false;
                }

                return binding.key === (evt.which || evt.keyCode);
              }
            }]);

            function Keyboard(quill, options) {
              _classCallCheck(this, Keyboard);

              var _this = _possibleConstructorReturn(this, (Keyboard.__proto__ || Object.getPrototypeOf(Keyboard)).call(this, quill, options));

              _this.bindings = {};
              Object.keys(_this.options.bindings).forEach(function (name) {
                if (name === 'list autofill' && quill.scroll.whitelist != null && !quill.scroll.whitelist['list']) {
                  return;
                }

                if (_this.options.bindings[name]) {
                  _this.addBinding(_this.options.bindings[name]);
                }
              });

              _this.addBinding({
                key: Keyboard.keys.ENTER,
                shiftKey: null
              }, handleEnter);

              _this.addBinding({
                key: Keyboard.keys.ENTER,
                metaKey: null,
                ctrlKey: null,
                altKey: null
              }, function () {});

              if (/Firefox/i.test(navigator.userAgent)) {
                // Need to handle delete and backspace for Firefox in the general case #1171
                _this.addBinding({
                  key: Keyboard.keys.BACKSPACE
                }, {
                  collapsed: true
                }, handleBackspace);

                _this.addBinding({
                  key: Keyboard.keys.DELETE
                }, {
                  collapsed: true
                }, handleDelete);
              } else {
                _this.addBinding({
                  key: Keyboard.keys.BACKSPACE
                }, {
                  collapsed: true,
                  prefix: /^.?$/
                }, handleBackspace);

                _this.addBinding({
                  key: Keyboard.keys.DELETE
                }, {
                  collapsed: true,
                  suffix: /^.?$/
                }, handleDelete);
              }

              _this.addBinding({
                key: Keyboard.keys.BACKSPACE
              }, {
                collapsed: false
              }, handleDeleteRange);

              _this.addBinding({
                key: Keyboard.keys.DELETE
              }, {
                collapsed: false
              }, handleDeleteRange);

              _this.addBinding({
                key: Keyboard.keys.BACKSPACE,
                altKey: null,
                ctrlKey: null,
                metaKey: null,
                shiftKey: null
              }, {
                collapsed: true,
                offset: 0
              }, handleBackspace);

              _this.listen();

              return _this;
            }

            _createClass(Keyboard, [{
              key: 'addBinding',
              value: function addBinding(key) {
                var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                var handler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
                var binding = normalize(key);

                if (binding == null || binding.key == null) {
                  return debug.warn('Attempted to add invalid keyboard binding', binding);
                }

                if (typeof context === 'function') {
                  context = {
                    handler: context
                  };
                }

                if (typeof handler === 'function') {
                  handler = {
                    handler: handler
                  };
                }

                binding = (0, _extend2.default)(binding, context, handler);
                this.bindings[binding.key] = this.bindings[binding.key] || [];
                this.bindings[binding.key].push(binding);
              }
            }, {
              key: 'listen',
              value: function listen() {
                var _this2 = this;

                this.quill.root.addEventListener('keydown', function (evt) {
                  if (evt.defaultPrevented) return;
                  var which = evt.which || evt.keyCode;
                  var bindings = (_this2.bindings[which] || []).filter(function (binding) {
                    return Keyboard.match(evt, binding);
                  });
                  if (bindings.length === 0) return;

                  var range = _this2.quill.getSelection();

                  if (range == null || !_this2.quill.hasFocus()) return;

                  var _quill$getLine = _this2.quill.getLine(range.index),
                      _quill$getLine2 = _slicedToArray(_quill$getLine, 2),
                      line = _quill$getLine2[0],
                      offset = _quill$getLine2[1];

                  var _quill$getLeaf = _this2.quill.getLeaf(range.index),
                      _quill$getLeaf2 = _slicedToArray(_quill$getLeaf, 2),
                      leafStart = _quill$getLeaf2[0],
                      offsetStart = _quill$getLeaf2[1];

                  var _ref = range.length === 0 ? [leafStart, offsetStart] : _this2.quill.getLeaf(range.index + range.length),
                      _ref2 = _slicedToArray(_ref, 2),
                      leafEnd = _ref2[0],
                      offsetEnd = _ref2[1];

                  var prefixText = leafStart instanceof _parchment2.default.Text ? leafStart.value().slice(0, offsetStart) : '';
                  var suffixText = leafEnd instanceof _parchment2.default.Text ? leafEnd.value().slice(offsetEnd) : '';
                  var curContext = {
                    collapsed: range.length === 0,
                    empty: range.length === 0 && line.length() <= 1,
                    format: _this2.quill.getFormat(range),
                    offset: offset,
                    prefix: prefixText,
                    suffix: suffixText
                  };
                  var prevented = bindings.some(function (binding) {
                    if (binding.collapsed != null && binding.collapsed !== curContext.collapsed) return false;
                    if (binding.empty != null && binding.empty !== curContext.empty) return false;
                    if (binding.offset != null && binding.offset !== curContext.offset) return false;

                    if (Array.isArray(binding.format)) {
                      // any format is present
                      if (binding.format.every(function (name) {
                        return curContext.format[name] == null;
                      })) {
                        return false;
                      }
                    } else if (_typeof$1(binding.format) === 'object') {
                      // all formats must match
                      if (!Object.keys(binding.format).every(function (name) {
                        if (binding.format[name] === true) return curContext.format[name] != null;
                        if (binding.format[name] === false) return curContext.format[name] == null;
                        return (0, _deepEqual2.default)(binding.format[name], curContext.format[name]);
                      })) {
                        return false;
                      }
                    }

                    if (binding.prefix != null && !binding.prefix.test(curContext.prefix)) return false;
                    if (binding.suffix != null && !binding.suffix.test(curContext.suffix)) return false;
                    return binding.handler.call(_this2, range, curContext) !== true;
                  });

                  if (prevented) {
                    evt.preventDefault();
                  }
                });
              }
            }]);

            return Keyboard;
          }(_module2.default);

          Keyboard.keys = {
            BACKSPACE: 8,
            TAB: 9,
            ENTER: 13,
            ESCAPE: 27,
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40,
            DELETE: 46
          };
          Keyboard.DEFAULTS = {
            bindings: {
              'bold': makeFormatHandler('bold'),
              'italic': makeFormatHandler('italic'),
              'underline': makeFormatHandler('underline'),
              'indent': {
                // highlight tab or tab at beginning of list, indent or blockquote
                key: Keyboard.keys.TAB,
                format: ['blockquote', 'indent', 'list'],
                handler: function handler(range, context) {
                  if (context.collapsed && context.offset !== 0) return true;
                  this.quill.format('indent', '+1', _quill2.default.sources.USER);
                }
              },
              'outdent': {
                key: Keyboard.keys.TAB,
                shiftKey: true,
                format: ['blockquote', 'indent', 'list'],
                // highlight tab or tab at beginning of list, indent or blockquote
                handler: function handler(range, context) {
                  if (context.collapsed && context.offset !== 0) return true;
                  this.quill.format('indent', '-1', _quill2.default.sources.USER);
                }
              },
              'outdent backspace': {
                key: Keyboard.keys.BACKSPACE,
                collapsed: true,
                shiftKey: null,
                metaKey: null,
                ctrlKey: null,
                altKey: null,
                format: ['indent', 'list'],
                offset: 0,
                handler: function handler(range, context) {
                  if (context.format.indent != null) {
                    this.quill.format('indent', '-1', _quill2.default.sources.USER);
                  } else if (context.format.list != null) {
                    this.quill.format('list', false, _quill2.default.sources.USER);
                  }
                }
              },
              'indent code-block': makeCodeBlockHandler(true),
              'outdent code-block': makeCodeBlockHandler(false),
              'remove tab': {
                key: Keyboard.keys.TAB,
                shiftKey: true,
                collapsed: true,
                prefix: /\t$/,
                handler: function handler(range) {
                  this.quill.deleteText(range.index - 1, 1, _quill2.default.sources.USER);
                }
              },
              'tab': {
                key: Keyboard.keys.TAB,
                handler: function handler(range) {
                  this.quill.history.cutoff();
                  var delta = new _quillDelta2.default().retain(range.index).delete(range.length).insert('\t');
                  this.quill.updateContents(delta, _quill2.default.sources.USER);
                  this.quill.history.cutoff();
                  this.quill.setSelection(range.index + 1, _quill2.default.sources.SILENT);
                }
              },
              'list empty enter': {
                key: Keyboard.keys.ENTER,
                collapsed: true,
                format: ['list'],
                empty: true,
                handler: function handler(range, context) {
                  this.quill.format('list', false, _quill2.default.sources.USER);

                  if (context.format.indent) {
                    this.quill.format('indent', false, _quill2.default.sources.USER);
                  }
                }
              },
              'checklist enter': {
                key: Keyboard.keys.ENTER,
                collapsed: true,
                format: {
                  list: 'checked'
                },
                handler: function handler(range) {
                  var _quill$getLine3 = this.quill.getLine(range.index),
                      _quill$getLine4 = _slicedToArray(_quill$getLine3, 2),
                      line = _quill$getLine4[0],
                      offset = _quill$getLine4[1];

                  var formats = (0, _extend2.default)({}, line.formats(), {
                    list: 'checked'
                  });
                  var delta = new _quillDelta2.default().retain(range.index).insert('\n', formats).retain(line.length() - offset - 1).retain(1, {
                    list: 'unchecked'
                  });
                  this.quill.updateContents(delta, _quill2.default.sources.USER);
                  this.quill.setSelection(range.index + 1, _quill2.default.sources.SILENT);
                  this.quill.scrollIntoView();
                }
              },
              'header enter': {
                key: Keyboard.keys.ENTER,
                collapsed: true,
                format: ['header'],
                suffix: /^$/,
                handler: function handler(range, context) {
                  var _quill$getLine5 = this.quill.getLine(range.index),
                      _quill$getLine6 = _slicedToArray(_quill$getLine5, 2),
                      line = _quill$getLine6[0],
                      offset = _quill$getLine6[1];

                  var delta = new _quillDelta2.default().retain(range.index).insert('\n', context.format).retain(line.length() - offset - 1).retain(1, {
                    header: null
                  });
                  this.quill.updateContents(delta, _quill2.default.sources.USER);
                  this.quill.setSelection(range.index + 1, _quill2.default.sources.SILENT);
                  this.quill.scrollIntoView();
                }
              },
              'list autofill': {
                key: ' ',
                collapsed: true,
                format: {
                  list: false
                },
                prefix: /^\s*?(\d+\.|-|\*|\[ ?\]|\[x\])$/,
                handler: function handler(range, context) {
                  var length = context.prefix.length;

                  var _quill$getLine7 = this.quill.getLine(range.index),
                      _quill$getLine8 = _slicedToArray(_quill$getLine7, 2),
                      line = _quill$getLine8[0],
                      offset = _quill$getLine8[1];

                  if (offset > length) return true;
                  var value = void 0;

                  switch (context.prefix.trim()) {
                    case '[]':
                    case '[ ]':
                      value = 'unchecked';
                      break;

                    case '[x]':
                      value = 'checked';
                      break;

                    case '-':
                    case '*':
                      value = 'bullet';
                      break;

                    default:
                      value = 'ordered';
                  }

                  this.quill.insertText(range.index, ' ', _quill2.default.sources.USER);
                  this.quill.history.cutoff();
                  var delta = new _quillDelta2.default().retain(range.index - offset).delete(length + 1).retain(line.length() - 2 - offset).retain(1, {
                    list: value
                  });
                  this.quill.updateContents(delta, _quill2.default.sources.USER);
                  this.quill.history.cutoff();
                  this.quill.setSelection(range.index - length, _quill2.default.sources.SILENT);
                }
              },
              'code exit': {
                key: Keyboard.keys.ENTER,
                collapsed: true,
                format: ['code-block'],
                prefix: /\n\n$/,
                suffix: /^\s+$/,
                handler: function handler(range) {
                  var _quill$getLine9 = this.quill.getLine(range.index),
                      _quill$getLine10 = _slicedToArray(_quill$getLine9, 2),
                      line = _quill$getLine10[0],
                      offset = _quill$getLine10[1];

                  var delta = new _quillDelta2.default().retain(range.index + line.length() - offset - 2).retain(1, {
                    'code-block': null
                  }).delete(1);
                  this.quill.updateContents(delta, _quill2.default.sources.USER);
                }
              },
              'embed left': makeEmbedArrowHandler(Keyboard.keys.LEFT, false),
              'embed left shift': makeEmbedArrowHandler(Keyboard.keys.LEFT, true),
              'embed right': makeEmbedArrowHandler(Keyboard.keys.RIGHT, false),
              'embed right shift': makeEmbedArrowHandler(Keyboard.keys.RIGHT, true)
            }
          };

          function makeEmbedArrowHandler(key, shiftKey) {
            var _ref3;

            var where = key === Keyboard.keys.LEFT ? 'prefix' : 'suffix';
            return _ref3 = {
              key: key,
              shiftKey: shiftKey,
              altKey: null
            }, _defineProperty(_ref3, where, /^$/), _defineProperty(_ref3, 'handler', function handler(range) {
              var index = range.index;

              if (key === Keyboard.keys.RIGHT) {
                index += range.length + 1;
              }

              var _quill$getLeaf3 = this.quill.getLeaf(index),
                  _quill$getLeaf4 = _slicedToArray(_quill$getLeaf3, 1),
                  leaf = _quill$getLeaf4[0];

              if (!(leaf instanceof _parchment2.default.Embed)) return true;

              if (key === Keyboard.keys.LEFT) {
                if (shiftKey) {
                  this.quill.setSelection(range.index - 1, range.length + 1, _quill2.default.sources.USER);
                } else {
                  this.quill.setSelection(range.index - 1, _quill2.default.sources.USER);
                }
              } else {
                if (shiftKey) {
                  this.quill.setSelection(range.index, range.length + 1, _quill2.default.sources.USER);
                } else {
                  this.quill.setSelection(range.index + range.length + 1, _quill2.default.sources.USER);
                }
              }

              return false;
            }), _ref3;
          }

          function handleBackspace(range, context) {
            if (range.index === 0 || this.quill.getLength() <= 1) return;

            var _quill$getLine11 = this.quill.getLine(range.index),
                _quill$getLine12 = _slicedToArray(_quill$getLine11, 1),
                line = _quill$getLine12[0];

            var formats = {};

            if (context.offset === 0) {
              var _quill$getLine13 = this.quill.getLine(range.index - 1),
                  _quill$getLine14 = _slicedToArray(_quill$getLine13, 1),
                  prev = _quill$getLine14[0];

              if (prev != null && prev.length() > 1) {
                var curFormats = line.formats();
                var prevFormats = this.quill.getFormat(range.index - 1, 1);
                formats = _op2.default.attributes.diff(curFormats, prevFormats) || {};
              }
            } // Check for astral symbols


            var length = /[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(context.prefix) ? 2 : 1;
            this.quill.deleteText(range.index - length, length, _quill2.default.sources.USER);

            if (Object.keys(formats).length > 0) {
              this.quill.formatLine(range.index - length, length, formats, _quill2.default.sources.USER);
            }

            this.quill.focus();
          }

          function handleDelete(range, context) {
            // Check for astral symbols
            var length = /^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(context.suffix) ? 2 : 1;
            if (range.index >= this.quill.getLength() - length) return;
            var formats = {},
                nextLength = 0;

            var _quill$getLine15 = this.quill.getLine(range.index),
                _quill$getLine16 = _slicedToArray(_quill$getLine15, 1),
                line = _quill$getLine16[0];

            if (context.offset >= line.length() - 1) {
              var _quill$getLine17 = this.quill.getLine(range.index + 1),
                  _quill$getLine18 = _slicedToArray(_quill$getLine17, 1),
                  next = _quill$getLine18[0];

              if (next) {
                var curFormats = line.formats();
                var nextFormats = this.quill.getFormat(range.index, 1);
                formats = _op2.default.attributes.diff(curFormats, nextFormats) || {};
                nextLength = next.length();
              }
            }

            this.quill.deleteText(range.index, length, _quill2.default.sources.USER);

            if (Object.keys(formats).length > 0) {
              this.quill.formatLine(range.index + nextLength - 1, length, formats, _quill2.default.sources.USER);
            }
          }

          function handleDeleteRange(range) {
            var lines = this.quill.getLines(range);
            var formats = {};

            if (lines.length > 1) {
              var firstFormats = lines[0].formats();
              var lastFormats = lines[lines.length - 1].formats();
              formats = _op2.default.attributes.diff(lastFormats, firstFormats) || {};
            }

            this.quill.deleteText(range, _quill2.default.sources.USER);

            if (Object.keys(formats).length > 0) {
              this.quill.formatLine(range.index, 1, formats, _quill2.default.sources.USER);
            }

            this.quill.setSelection(range.index, _quill2.default.sources.SILENT);
            this.quill.focus();
          }

          function handleEnter(range, context) {
            var _this3 = this;

            if (range.length > 0) {
              this.quill.scroll.deleteAt(range.index, range.length); // So we do not trigger text-change
            }

            var lineFormats = Object.keys(context.format).reduce(function (lineFormats, format) {
              if (_parchment2.default.query(format, _parchment2.default.Scope.BLOCK) && !Array.isArray(context.format[format])) {
                lineFormats[format] = context.format[format];
              }

              return lineFormats;
            }, {});
            this.quill.insertText(range.index, '\n', lineFormats, _quill2.default.sources.USER); // Earlier scroll.deleteAt might have messed up our selection,
            // so insertText's built in selection preservation is not reliable

            this.quill.setSelection(range.index + 1, _quill2.default.sources.SILENT);
            this.quill.focus();
            Object.keys(context.format).forEach(function (name) {
              if (lineFormats[name] != null) return;
              if (Array.isArray(context.format[name])) return;
              if (name === 'link') return;

              _this3.quill.format(name, context.format[name], _quill2.default.sources.USER);
            });
          }

          function makeCodeBlockHandler(indent) {
            return {
              key: Keyboard.keys.TAB,
              shiftKey: !indent,
              format: {
                'code-block': true
              },
              handler: function handler(range) {
                var CodeBlock = _parchment2.default.query('code-block');

                var index = range.index,
                    length = range.length;

                var _quill$scroll$descend = this.quill.scroll.descendant(CodeBlock, index),
                    _quill$scroll$descend2 = _slicedToArray(_quill$scroll$descend, 2),
                    block = _quill$scroll$descend2[0],
                    offset = _quill$scroll$descend2[1];

                if (block == null) return;
                var scrollIndex = this.quill.getIndex(block);
                var start = block.newlineIndex(offset, true) + 1;
                var end = block.newlineIndex(scrollIndex + offset + length);
                var lines = block.domNode.textContent.slice(start, end).split('\n');
                offset = 0;
                lines.forEach(function (line, i) {
                  if (indent) {
                    block.insertAt(start + offset, CodeBlock.TAB);
                    offset += CodeBlock.TAB.length;

                    if (i === 0) {
                      index += CodeBlock.TAB.length;
                    } else {
                      length += CodeBlock.TAB.length;
                    }
                  } else if (line.startsWith(CodeBlock.TAB)) {
                    block.deleteAt(start + offset, CodeBlock.TAB.length);
                    offset -= CodeBlock.TAB.length;

                    if (i === 0) {
                      index -= CodeBlock.TAB.length;
                    } else {
                      length -= CodeBlock.TAB.length;
                    }
                  }

                  offset += line.length + 1;
                });
                this.quill.update(_quill2.default.sources.USER);
                this.quill.setSelection(index, length, _quill2.default.sources.SILENT);
              }
            };
          }

          function makeFormatHandler(format) {
            return {
              key: format[0].toUpperCase(),
              shortKey: true,
              handler: function handler(range, context) {
                this.quill.format(format, !context.format[format], _quill2.default.sources.USER);
              }
            };
          }

          function normalize(binding) {
            if (typeof binding === 'string' || typeof binding === 'number') {
              return normalize({
                key: binding
              });
            }

            if ((typeof binding === 'undefined' ? 'undefined' : _typeof$1(binding)) === 'object') {
              binding = (0, _clone2.default)(binding, false);
            }

            if (typeof binding.key === 'string') {
              if (Keyboard.keys[binding.key.toUpperCase()] != null) {
                binding.key = Keyboard.keys[binding.key.toUpperCase()];
              } else if (binding.key.length === 1) {
                binding.key = binding.key.toUpperCase().charCodeAt(0);
              } else {
                return null;
              }
            }

            if (binding.shortKey) {
              binding[SHORTKEY] = binding.shortKey;
              delete binding.shortKey;
            }

            return binding;
          }

          exports.default = Keyboard;
          exports.SHORTKEY = SHORTKEY;
          /***/
        },
        /* 24 */

        /***/
        function (module, exports, __webpack_require__) {

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var _slicedToArray = function () {
            function sliceIterator(arr, i) {
              var _arr = [];
              var _n = true;
              var _d = false;
              var _e = undefined;

              try {
                for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                  _arr.push(_s.value);

                  if (i && _arr.length === i) break;
                }
              } catch (err) {
                _d = true;
                _e = err;
              } finally {
                try {
                  if (!_n && _i["return"]) _i["return"]();
                } finally {
                  if (_d) throw _e;
                }
              }

              return _arr;
            }

            return function (arr, i) {
              if (Array.isArray(arr)) {
                return arr;
              } else if (Symbol.iterator in Object(arr)) {
                return sliceIterator(arr, i);
              } else {
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
              }
            };
          }();

          var _get = function get(object, property, receiver) {
            if (object === null) object = Function.prototype;
            var desc = Object.getOwnPropertyDescriptor(object, property);

            if (desc === undefined) {
              var parent = Object.getPrototypeOf(object);

              if (parent === null) {
                return undefined;
              } else {
                return get(parent, property, receiver);
              }
            } else if ("value" in desc) {
              return desc.value;
            } else {
              var getter = desc.get;

              if (getter === undefined) {
                return undefined;
              }

              return getter.call(receiver);
            }
          };

          var _createClass = function () {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }

            return function (Constructor, protoProps, staticProps) {
              if (protoProps) defineProperties(Constructor.prototype, protoProps);
              if (staticProps) defineProperties(Constructor, staticProps);
              return Constructor;
            };
          }();

          var _parchment = __webpack_require__(0);

          var _parchment2 = _interopRequireDefault(_parchment);

          var _text = __webpack_require__(7);

          var _text2 = _interopRequireDefault(_text);

          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
              default: obj
            };
          }

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }

          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }

            return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
          }

          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
            }

            subClass.prototype = Object.create(superClass && superClass.prototype, {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
              }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
          }

          var Cursor = function (_Parchment$Embed) {
            _inherits(Cursor, _Parchment$Embed);

            _createClass(Cursor, null, [{
              key: 'value',
              value: function value() {
                return undefined;
              }
            }]);

            function Cursor(domNode, selection) {
              _classCallCheck(this, Cursor);

              var _this = _possibleConstructorReturn(this, (Cursor.__proto__ || Object.getPrototypeOf(Cursor)).call(this, domNode));

              _this.selection = selection;
              _this.textNode = document.createTextNode(Cursor.CONTENTS);

              _this.domNode.appendChild(_this.textNode);

              _this._length = 0;
              return _this;
            }

            _createClass(Cursor, [{
              key: 'detach',
              value: function detach() {
                // super.detach() will also clear domNode.__blot
                if (this.parent != null) this.parent.removeChild(this);
              }
            }, {
              key: 'format',
              value: function format(name, value) {
                if (this._length !== 0) {
                  return _get(Cursor.prototype.__proto__ || Object.getPrototypeOf(Cursor.prototype), 'format', this).call(this, name, value);
                }

                var target = this,
                    index = 0;

                while (target != null && target.statics.scope !== _parchment2.default.Scope.BLOCK_BLOT) {
                  index += target.offset(target.parent);
                  target = target.parent;
                }

                if (target != null) {
                  this._length = Cursor.CONTENTS.length;
                  target.optimize();
                  target.formatAt(index, Cursor.CONTENTS.length, name, value);
                  this._length = 0;
                }
              }
            }, {
              key: 'index',
              value: function index(node, offset) {
                if (node === this.textNode) return 0;
                return _get(Cursor.prototype.__proto__ || Object.getPrototypeOf(Cursor.prototype), 'index', this).call(this, node, offset);
              }
            }, {
              key: 'length',
              value: function length() {
                return this._length;
              }
            }, {
              key: 'position',
              value: function position() {
                return [this.textNode, this.textNode.data.length];
              }
            }, {
              key: 'remove',
              value: function remove() {
                _get(Cursor.prototype.__proto__ || Object.getPrototypeOf(Cursor.prototype), 'remove', this).call(this);

                this.parent = null;
              }
            }, {
              key: 'restore',
              value: function restore() {
                if (this.selection.composing || this.parent == null) return;
                var textNode = this.textNode;
                var range = this.selection.getNativeRange();
                var restoreText = void 0,
                    start = void 0,
                    end = void 0;

                if (range != null && range.start.node === textNode && range.end.node === textNode) {
                  var _ref = [textNode, range.start.offset, range.end.offset];
                  restoreText = _ref[0];
                  start = _ref[1];
                  end = _ref[2];
                } // Link format will insert text outside of anchor tag


                while (this.domNode.lastChild != null && this.domNode.lastChild !== this.textNode) {
                  this.domNode.parentNode.insertBefore(this.domNode.lastChild, this.domNode);
                }

                if (this.textNode.data !== Cursor.CONTENTS) {
                  var text = this.textNode.data.split(Cursor.CONTENTS).join('');

                  if (this.next instanceof _text2.default) {
                    restoreText = this.next.domNode;
                    this.next.insertAt(0, text);
                    this.textNode.data = Cursor.CONTENTS;
                  } else {
                    this.textNode.data = text;
                    this.parent.insertBefore(_parchment2.default.create(this.textNode), this);
                    this.textNode = document.createTextNode(Cursor.CONTENTS);
                    this.domNode.appendChild(this.textNode);
                  }
                }

                this.remove();

                if (start != null) {
                  var _map = [start, end].map(function (offset) {
                    return Math.max(0, Math.min(restoreText.data.length, offset - 1));
                  });

                  var _map2 = _slicedToArray(_map, 2);

                  start = _map2[0];
                  end = _map2[1];
                  return {
                    startNode: restoreText,
                    startOffset: start,
                    endNode: restoreText,
                    endOffset: end
                  };
                }
              }
            }, {
              key: 'update',
              value: function update(mutations, context) {
                var _this2 = this;

                if (mutations.some(function (mutation) {
                  return mutation.type === 'characterData' && mutation.target === _this2.textNode;
                })) {
                  var range = this.restore();
                  if (range) context.range = range;
                }
              }
            }, {
              key: 'value',
              value: function value() {
                return '';
              }
            }]);

            return Cursor;
          }(_parchment2.default.Embed);

          Cursor.blotName = 'cursor';
          Cursor.className = 'ql-cursor';
          Cursor.tagName = 'span';
          Cursor.CONTENTS = "\uFEFF"; // Zero width no break space

          exports.default = Cursor;
          /***/
        },
        /* 25 */

        /***/
        function (module, exports, __webpack_require__) {

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var _parchment = __webpack_require__(0);

          var _parchment2 = _interopRequireDefault(_parchment);

          var _block = __webpack_require__(4);

          var _block2 = _interopRequireDefault(_block);

          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
              default: obj
            };
          }

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }

          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }

            return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
          }

          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
            }

            subClass.prototype = Object.create(superClass && superClass.prototype, {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
              }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
          }

          var Container = function (_Parchment$Container) {
            _inherits(Container, _Parchment$Container);

            function Container() {
              _classCallCheck(this, Container);

              return _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).apply(this, arguments));
            }

            return Container;
          }(_parchment2.default.Container);

          Container.allowedChildren = [_block2.default, _block.BlockEmbed, Container];
          exports.default = Container;
          /***/
        },
        /* 26 */

        /***/
        function (module, exports, __webpack_require__) {

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ColorStyle = exports.ColorClass = exports.ColorAttributor = undefined;

          var _createClass = function () {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }

            return function (Constructor, protoProps, staticProps) {
              if (protoProps) defineProperties(Constructor.prototype, protoProps);
              if (staticProps) defineProperties(Constructor, staticProps);
              return Constructor;
            };
          }();

          var _get = function get(object, property, receiver) {
            if (object === null) object = Function.prototype;
            var desc = Object.getOwnPropertyDescriptor(object, property);

            if (desc === undefined) {
              var parent = Object.getPrototypeOf(object);

              if (parent === null) {
                return undefined;
              } else {
                return get(parent, property, receiver);
              }
            } else if ("value" in desc) {
              return desc.value;
            } else {
              var getter = desc.get;

              if (getter === undefined) {
                return undefined;
              }

              return getter.call(receiver);
            }
          };

          var _parchment = __webpack_require__(0);

          var _parchment2 = _interopRequireDefault(_parchment);

          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
              default: obj
            };
          }

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }

          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }

            return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
          }

          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
            }

            subClass.prototype = Object.create(superClass && superClass.prototype, {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
              }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
          }

          var ColorAttributor = function (_Parchment$Attributor) {
            _inherits(ColorAttributor, _Parchment$Attributor);

            function ColorAttributor() {
              _classCallCheck(this, ColorAttributor);

              return _possibleConstructorReturn(this, (ColorAttributor.__proto__ || Object.getPrototypeOf(ColorAttributor)).apply(this, arguments));
            }

            _createClass(ColorAttributor, [{
              key: 'value',
              value: function value(domNode) {
                var value = _get(ColorAttributor.prototype.__proto__ || Object.getPrototypeOf(ColorAttributor.prototype), 'value', this).call(this, domNode);

                if (!value.startsWith('rgb(')) return value;
                value = value.replace(/^[^\d]+/, '').replace(/[^\d]+$/, '');
                return '#' + value.split(',').map(function (component) {
                  return ('00' + parseInt(component).toString(16)).slice(-2);
                }).join('');
              }
            }]);

            return ColorAttributor;
          }(_parchment2.default.Attributor.Style);

          var ColorClass = new _parchment2.default.Attributor.Class('color', 'ql-color', {
            scope: _parchment2.default.Scope.INLINE
          });
          var ColorStyle = new ColorAttributor('color', 'color', {
            scope: _parchment2.default.Scope.INLINE
          });
          exports.ColorAttributor = ColorAttributor;
          exports.ColorClass = ColorClass;
          exports.ColorStyle = ColorStyle;
          /***/
        },
        /* 27 */

        /***/
        function (module, exports, __webpack_require__) {

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.sanitize = exports.default = undefined;

          var _createClass = function () {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }

            return function (Constructor, protoProps, staticProps) {
              if (protoProps) defineProperties(Constructor.prototype, protoProps);
              if (staticProps) defineProperties(Constructor, staticProps);
              return Constructor;
            };
          }();

          var _get = function get(object, property, receiver) {
            if (object === null) object = Function.prototype;
            var desc = Object.getOwnPropertyDescriptor(object, property);

            if (desc === undefined) {
              var parent = Object.getPrototypeOf(object);

              if (parent === null) {
                return undefined;
              } else {
                return get(parent, property, receiver);
              }
            } else if ("value" in desc) {
              return desc.value;
            } else {
              var getter = desc.get;

              if (getter === undefined) {
                return undefined;
              }

              return getter.call(receiver);
            }
          };

          var _inline = __webpack_require__(6);

          var _inline2 = _interopRequireDefault(_inline);

          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
              default: obj
            };
          }

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }

          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }

            return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
          }

          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
            }

            subClass.prototype = Object.create(superClass && superClass.prototype, {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
              }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
          }

          var Link = function (_Inline) {
            _inherits(Link, _Inline);

            function Link() {
              _classCallCheck(this, Link);

              return _possibleConstructorReturn(this, (Link.__proto__ || Object.getPrototypeOf(Link)).apply(this, arguments));
            }

            _createClass(Link, [{
              key: 'format',
              value: function format(name, value) {
                if (name !== this.statics.blotName || !value) return _get(Link.prototype.__proto__ || Object.getPrototypeOf(Link.prototype), 'format', this).call(this, name, value);
                value = this.constructor.sanitize(value);
                this.domNode.setAttribute('href', value);
              }
            }], [{
              key: 'create',
              value: function create(value) {
                var node = _get(Link.__proto__ || Object.getPrototypeOf(Link), 'create', this).call(this, value);

                value = this.sanitize(value);
                node.setAttribute('href', value);
                node.setAttribute('rel', 'noopener noreferrer');
                node.setAttribute('target', '_blank');
                return node;
              }
            }, {
              key: 'formats',
              value: function formats(domNode) {
                return domNode.getAttribute('href');
              }
            }, {
              key: 'sanitize',
              value: function sanitize(url) {
                return _sanitize(url, this.PROTOCOL_WHITELIST) ? url : this.SANITIZED_URL;
              }
            }]);

            return Link;
          }(_inline2.default);

          Link.blotName = 'link';
          Link.tagName = 'A';
          Link.SANITIZED_URL = 'about:blank';
          Link.PROTOCOL_WHITELIST = ['http', 'https', 'mailto', 'tel'];

          function _sanitize(url, protocols) {
            var anchor = document.createElement('a');
            anchor.href = url;
            var protocol = anchor.href.slice(0, anchor.href.indexOf(':'));
            return protocols.indexOf(protocol) > -1;
          }

          exports.default = Link;
          exports.sanitize = _sanitize;
          /***/
        },
        /* 28 */

        /***/
        function (module, exports, __webpack_require__) {

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var _typeof$1 = typeof Symbol === "function" && _typeof(Symbol.iterator) === "symbol" ? function (obj) {
            return _typeof(obj);
          } : function (obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof(obj);
          };

          var _createClass = function () {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }

            return function (Constructor, protoProps, staticProps) {
              if (protoProps) defineProperties(Constructor.prototype, protoProps);
              if (staticProps) defineProperties(Constructor, staticProps);
              return Constructor;
            };
          }();

          var _keyboard = __webpack_require__(23);

          var _keyboard2 = _interopRequireDefault(_keyboard);

          var _dropdown = __webpack_require__(107);

          var _dropdown2 = _interopRequireDefault(_dropdown);

          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
              default: obj
            };
          }

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }

          var optionsCounter = 0;

          function toggleAriaAttribute(element, attribute) {
            element.setAttribute(attribute, !(element.getAttribute(attribute) === 'true'));
          }

          var Picker = function () {
            function Picker(select) {
              var _this = this;

              _classCallCheck(this, Picker);

              this.select = select;
              this.container = document.createElement('span');
              this.buildPicker();
              this.select.style.display = 'none';
              this.select.parentNode.insertBefore(this.container, this.select);
              this.label.addEventListener('mousedown', function () {
                _this.togglePicker();
              });
              this.label.addEventListener('keydown', function (event) {
                switch (event.keyCode) {
                  // Allows the "Enter" key to open the picker
                  case _keyboard2.default.keys.ENTER:
                    _this.togglePicker();

                    break;
                  // Allows the "Escape" key to close the picker

                  case _keyboard2.default.keys.ESCAPE:
                    _this.escape();

                    event.preventDefault();
                    break;
                }
              });
              this.select.addEventListener('change', this.update.bind(this));
            }

            _createClass(Picker, [{
              key: 'togglePicker',
              value: function togglePicker() {
                this.container.classList.toggle('ql-expanded'); // Toggle aria-expanded and aria-hidden to make the picker accessible

                toggleAriaAttribute(this.label, 'aria-expanded');
                toggleAriaAttribute(this.options, 'aria-hidden');
              }
            }, {
              key: 'buildItem',
              value: function buildItem(option) {
                var _this2 = this;

                var item = document.createElement('span');
                item.tabIndex = '0';
                item.setAttribute('role', 'button');
                item.classList.add('ql-picker-item');

                if (option.hasAttribute('value')) {
                  item.setAttribute('data-value', option.getAttribute('value'));
                }

                if (option.textContent) {
                  item.setAttribute('data-label', option.textContent);
                }

                item.addEventListener('click', function () {
                  _this2.selectItem(item, true);
                });
                item.addEventListener('keydown', function (event) {
                  switch (event.keyCode) {
                    // Allows the "Enter" key to select an item
                    case _keyboard2.default.keys.ENTER:
                      _this2.selectItem(item, true);

                      event.preventDefault();
                      break;
                    // Allows the "Escape" key to close the picker

                    case _keyboard2.default.keys.ESCAPE:
                      _this2.escape();

                      event.preventDefault();
                      break;
                  }
                });
                return item;
              }
            }, {
              key: 'buildLabel',
              value: function buildLabel() {
                var label = document.createElement('span');
                label.classList.add('ql-picker-label');
                label.innerHTML = _dropdown2.default;
                label.tabIndex = '0';
                label.setAttribute('role', 'button');
                label.setAttribute('aria-expanded', 'false');
                this.container.appendChild(label);
                return label;
              }
            }, {
              key: 'buildOptions',
              value: function buildOptions() {
                var _this3 = this;

                var options = document.createElement('span');
                options.classList.add('ql-picker-options'); // Don't want screen readers to read this until options are visible

                options.setAttribute('aria-hidden', 'true');
                options.tabIndex = '-1'; // Need a unique id for aria-controls

                options.id = 'ql-picker-options-' + optionsCounter;
                optionsCounter += 1;
                this.label.setAttribute('aria-controls', options.id);
                this.options = options;
                [].slice.call(this.select.options).forEach(function (option) {
                  var item = _this3.buildItem(option);

                  options.appendChild(item);

                  if (option.selected === true) {
                    _this3.selectItem(item);
                  }
                });
                this.container.appendChild(options);
              }
            }, {
              key: 'buildPicker',
              value: function buildPicker() {
                var _this4 = this;

                [].slice.call(this.select.attributes).forEach(function (item) {
                  _this4.container.setAttribute(item.name, item.value);
                });
                this.container.classList.add('ql-picker');
                this.label = this.buildLabel();
                this.buildOptions();
              }
            }, {
              key: 'escape',
              value: function escape() {
                var _this5 = this; // Close menu and return focus to trigger label


                this.close(); // Need setTimeout for accessibility to ensure that the browser executes
                // focus on the next process thread and after any DOM content changes

                setTimeout(function () {
                  return _this5.label.focus();
                }, 1);
              }
            }, {
              key: 'close',
              value: function close() {
                this.container.classList.remove('ql-expanded');
                this.label.setAttribute('aria-expanded', 'false');
                this.options.setAttribute('aria-hidden', 'true');
              }
            }, {
              key: 'selectItem',
              value: function selectItem(item) {
                var trigger = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                var selected = this.container.querySelector('.ql-selected');
                if (item === selected) return;

                if (selected != null) {
                  selected.classList.remove('ql-selected');
                }

                if (item == null) return;
                item.classList.add('ql-selected');
                this.select.selectedIndex = [].indexOf.call(item.parentNode.children, item);

                if (item.hasAttribute('data-value')) {
                  this.label.setAttribute('data-value', item.getAttribute('data-value'));
                } else {
                  this.label.removeAttribute('data-value');
                }

                if (item.hasAttribute('data-label')) {
                  this.label.setAttribute('data-label', item.getAttribute('data-label'));
                } else {
                  this.label.removeAttribute('data-label');
                }

                if (trigger) {
                  if (typeof Event === 'function') {
                    this.select.dispatchEvent(new Event('change'));
                  } else if ((typeof Event === 'undefined' ? 'undefined' : _typeof$1(Event)) === 'object') {
                    // IE11
                    var event = document.createEvent('Event');
                    event.initEvent('change', true, true);
                    this.select.dispatchEvent(event);
                  }

                  this.close();
                }
              }
            }, {
              key: 'update',
              value: function update() {
                var option = void 0;

                if (this.select.selectedIndex > -1) {
                  var item = this.container.querySelector('.ql-picker-options').children[this.select.selectedIndex];
                  option = this.select.options[this.select.selectedIndex];
                  this.selectItem(item);
                } else {
                  this.selectItem(null);
                }

                var isActive = option != null && option !== this.select.querySelector('option[selected]');
                this.label.classList.toggle('ql-active', isActive);
              }
            }]);

            return Picker;
          }();

          exports.default = Picker;
          /***/
        },
        /* 29 */

        /***/
        function (module, exports, __webpack_require__) {

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var _parchment = __webpack_require__(0);

          var _parchment2 = _interopRequireDefault(_parchment);

          var _quill = __webpack_require__(5);

          var _quill2 = _interopRequireDefault(_quill);

          var _block = __webpack_require__(4);

          var _block2 = _interopRequireDefault(_block);

          var _break = __webpack_require__(16);

          var _break2 = _interopRequireDefault(_break);

          var _container = __webpack_require__(25);

          var _container2 = _interopRequireDefault(_container);

          var _cursor = __webpack_require__(24);

          var _cursor2 = _interopRequireDefault(_cursor);

          var _embed = __webpack_require__(35);

          var _embed2 = _interopRequireDefault(_embed);

          var _inline = __webpack_require__(6);

          var _inline2 = _interopRequireDefault(_inline);

          var _scroll = __webpack_require__(22);

          var _scroll2 = _interopRequireDefault(_scroll);

          var _text = __webpack_require__(7);

          var _text2 = _interopRequireDefault(_text);

          var _clipboard = __webpack_require__(55);

          var _clipboard2 = _interopRequireDefault(_clipboard);

          var _history = __webpack_require__(42);

          var _history2 = _interopRequireDefault(_history);

          var _keyboard = __webpack_require__(23);

          var _keyboard2 = _interopRequireDefault(_keyboard);

          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
              default: obj
            };
          }

          _quill2.default.register({
            'blots/block': _block2.default,
            'blots/block/embed': _block.BlockEmbed,
            'blots/break': _break2.default,
            'blots/container': _container2.default,
            'blots/cursor': _cursor2.default,
            'blots/embed': _embed2.default,
            'blots/inline': _inline2.default,
            'blots/scroll': _scroll2.default,
            'blots/text': _text2.default,
            'modules/clipboard': _clipboard2.default,
            'modules/history': _history2.default,
            'modules/keyboard': _keyboard2.default
          });

          _parchment2.default.register(_block2.default, _break2.default, _cursor2.default, _inline2.default, _scroll2.default, _text2.default);

          exports.default = _quill2.default;
          /***/
        },
        /* 30 */

        /***/
        function (module, exports, __webpack_require__) {

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var Registry = __webpack_require__(1);

          var ShadowBlot =
          /** @class */
          function () {
            function ShadowBlot(domNode) {
              this.domNode = domNode; // @ts-ignore

              this.domNode[Registry.DATA_KEY] = {
                blot: this
              };
            }

            Object.defineProperty(ShadowBlot.prototype, "statics", {
              // Hack for accessing inherited static methods
              get: function get() {
                return this.constructor;
              },
              enumerable: true,
              configurable: true
            });

            ShadowBlot.create = function (value) {
              if (this.tagName == null) {
                throw new Registry.ParchmentError('Blot definition missing tagName');
              }

              var node;

              if (Array.isArray(this.tagName)) {
                if (typeof value === 'string') {
                  value = value.toUpperCase();

                  if (parseInt(value).toString() === value) {
                    value = parseInt(value);
                  }
                }

                if (typeof value === 'number') {
                  node = document.createElement(this.tagName[value - 1]);
                } else if (this.tagName.indexOf(value) > -1) {
                  node = document.createElement(value);
                } else {
                  node = document.createElement(this.tagName[0]);
                }
              } else {
                node = document.createElement(this.tagName);
              }

              if (this.className) {
                node.classList.add(this.className);
              }

              return node;
            };

            ShadowBlot.prototype.attach = function () {
              if (this.parent != null) {
                this.scroll = this.parent.scroll;
              }
            };

            ShadowBlot.prototype.clone = function () {
              var domNode = this.domNode.cloneNode(false);
              return Registry.create(domNode);
            };

            ShadowBlot.prototype.detach = function () {
              if (this.parent != null) this.parent.removeChild(this); // @ts-ignore

              delete this.domNode[Registry.DATA_KEY];
            };

            ShadowBlot.prototype.deleteAt = function (index, length) {
              var blot = this.isolate(index, length);
              blot.remove();
            };

            ShadowBlot.prototype.formatAt = function (index, length, name, value) {
              var blot = this.isolate(index, length);

              if (Registry.query(name, Registry.Scope.BLOT) != null && value) {
                blot.wrap(name, value);
              } else if (Registry.query(name, Registry.Scope.ATTRIBUTE) != null) {
                var parent = Registry.create(this.statics.scope);
                blot.wrap(parent);
                parent.format(name, value);
              }
            };

            ShadowBlot.prototype.insertAt = function (index, value, def) {
              var blot = def == null ? Registry.create('text', value) : Registry.create(value, def);
              var ref = this.split(index);
              this.parent.insertBefore(blot, ref);
            };

            ShadowBlot.prototype.insertInto = function (parentBlot, refBlot) {
              if (refBlot === void 0) {
                refBlot = null;
              }

              if (this.parent != null) {
                this.parent.children.remove(this);
              }

              var refDomNode = null;
              parentBlot.children.insertBefore(this, refBlot);

              if (refBlot != null) {
                refDomNode = refBlot.domNode;
              }

              if (this.domNode.parentNode != parentBlot.domNode || this.domNode.nextSibling != refDomNode) {
                parentBlot.domNode.insertBefore(this.domNode, refDomNode);
              }

              this.parent = parentBlot;
              this.attach();
            };

            ShadowBlot.prototype.isolate = function (index, length) {
              var target = this.split(index);
              target.split(length);
              return target;
            };

            ShadowBlot.prototype.length = function () {
              return 1;
            };

            ShadowBlot.prototype.offset = function (root) {
              if (root === void 0) {
                root = this.parent;
              }

              if (this.parent == null || this == root) return 0;
              return this.parent.children.offset(this) + this.parent.offset(root);
            };

            ShadowBlot.prototype.optimize = function (context) {
              // TODO clean up once we use WeakMap
              // @ts-ignore
              if (this.domNode[Registry.DATA_KEY] != null) {
                // @ts-ignore
                delete this.domNode[Registry.DATA_KEY].mutations;
              }
            };

            ShadowBlot.prototype.remove = function () {
              if (this.domNode.parentNode != null) {
                this.domNode.parentNode.removeChild(this.domNode);
              }

              this.detach();
            };

            ShadowBlot.prototype.replace = function (target) {
              if (target.parent == null) return;
              target.parent.insertBefore(this, target.next);
              target.remove();
            };

            ShadowBlot.prototype.replaceWith = function (name, value) {
              var replacement = typeof name === 'string' ? Registry.create(name, value) : name;
              replacement.replace(this);
              return replacement;
            };

            ShadowBlot.prototype.split = function (index, force) {
              return index === 0 ? this : this.next;
            };

            ShadowBlot.prototype.update = function (mutations, context) {// Nothing to do by default
            };

            ShadowBlot.prototype.wrap = function (name, value) {
              var wrapper = typeof name === 'string' ? Registry.create(name, value) : name;

              if (this.parent != null) {
                this.parent.insertBefore(wrapper, this.next);
              }

              wrapper.appendChild(this);
              return wrapper;
            };

            ShadowBlot.blotName = 'abstract';
            return ShadowBlot;
          }();

          exports.default = ShadowBlot;
          /***/
        },
        /* 31 */

        /***/
        function (module, exports, __webpack_require__) {

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var attributor_1 = __webpack_require__(12);

          var class_1 = __webpack_require__(32);

          var style_1 = __webpack_require__(33);

          var Registry = __webpack_require__(1);

          var AttributorStore =
          /** @class */
          function () {
            function AttributorStore(domNode) {
              this.attributes = {};
              this.domNode = domNode;
              this.build();
            }

            AttributorStore.prototype.attribute = function (attribute, value) {
              // verb
              if (value) {
                if (attribute.add(this.domNode, value)) {
                  if (attribute.value(this.domNode) != null) {
                    this.attributes[attribute.attrName] = attribute;
                  } else {
                    delete this.attributes[attribute.attrName];
                  }
                }
              } else {
                attribute.remove(this.domNode);
                delete this.attributes[attribute.attrName];
              }
            };

            AttributorStore.prototype.build = function () {
              var _this = this;

              this.attributes = {};
              var attributes = attributor_1.default.keys(this.domNode);
              var classes = class_1.default.keys(this.domNode);
              var styles = style_1.default.keys(this.domNode);
              attributes.concat(classes).concat(styles).forEach(function (name) {
                var attr = Registry.query(name, Registry.Scope.ATTRIBUTE);

                if (attr instanceof attributor_1.default) {
                  _this.attributes[attr.attrName] = attr;
                }
              });
            };

            AttributorStore.prototype.copy = function (target) {
              var _this = this;

              Object.keys(this.attributes).forEach(function (key) {
                var value = _this.attributes[key].value(_this.domNode);

                target.format(key, value);
              });
            };

            AttributorStore.prototype.move = function (target) {
              var _this = this;

              this.copy(target);
              Object.keys(this.attributes).forEach(function (key) {
                _this.attributes[key].remove(_this.domNode);
              });
              this.attributes = {};
            };

            AttributorStore.prototype.values = function () {
              var _this = this;

              return Object.keys(this.attributes).reduce(function (attributes, name) {
                attributes[name] = _this.attributes[name].value(_this.domNode);
                return attributes;
              }, {});
            };

            return AttributorStore;
          }();

          exports.default = AttributorStore;
          /***/
        },
        /* 32 */

        /***/
        function (module, exports, __webpack_require__) {

          var __extends = this && this.__extends || function () {
            var extendStatics = Object.setPrototypeOf || {
              __proto__: []
            } instanceof Array && function (d, b) {
              d.__proto__ = b;
            } || function (d, b) {
              for (var p in b) {
                if (b.hasOwnProperty(p)) d[p] = b[p];
              }
            };

            return function (d, b) {
              extendStatics(d, b);

              function __() {
                this.constructor = d;
              }

              d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
          }();

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var attributor_1 = __webpack_require__(12);

          function match(node, prefix) {
            var className = node.getAttribute('class') || '';
            return className.split(/\s+/).filter(function (name) {
              return name.indexOf(prefix + "-") === 0;
            });
          }

          var ClassAttributor =
          /** @class */
          function (_super) {
            __extends(ClassAttributor, _super);

            function ClassAttributor() {
              return _super !== null && _super.apply(this, arguments) || this;
            }

            ClassAttributor.keys = function (node) {
              return (node.getAttribute('class') || '').split(/\s+/).map(function (name) {
                return name.split('-').slice(0, -1).join('-');
              });
            };

            ClassAttributor.prototype.add = function (node, value) {
              if (!this.canAdd(node, value)) return false;
              this.remove(node);
              node.classList.add(this.keyName + "-" + value);
              return true;
            };

            ClassAttributor.prototype.remove = function (node) {
              var matches = match(node, this.keyName);
              matches.forEach(function (name) {
                node.classList.remove(name);
              });

              if (node.classList.length === 0) {
                node.removeAttribute('class');
              }
            };

            ClassAttributor.prototype.value = function (node) {
              var result = match(node, this.keyName)[0] || '';
              var value = result.slice(this.keyName.length + 1); // +1 for hyphen

              return this.canAdd(node, value) ? value : '';
            };

            return ClassAttributor;
          }(attributor_1.default);

          exports.default = ClassAttributor;
          /***/
        },
        /* 33 */

        /***/
        function (module, exports, __webpack_require__) {

          var __extends = this && this.__extends || function () {
            var extendStatics = Object.setPrototypeOf || {
              __proto__: []
            } instanceof Array && function (d, b) {
              d.__proto__ = b;
            } || function (d, b) {
              for (var p in b) {
                if (b.hasOwnProperty(p)) d[p] = b[p];
              }
            };

            return function (d, b) {
              extendStatics(d, b);

              function __() {
                this.constructor = d;
              }

              d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
          }();

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var attributor_1 = __webpack_require__(12);

          function camelize(name) {
            var parts = name.split('-');
            var rest = parts.slice(1).map(function (part) {
              return part[0].toUpperCase() + part.slice(1);
            }).join('');
            return parts[0] + rest;
          }

          var StyleAttributor =
          /** @class */
          function (_super) {
            __extends(StyleAttributor, _super);

            function StyleAttributor() {
              return _super !== null && _super.apply(this, arguments) || this;
            }

            StyleAttributor.keys = function (node) {
              return (node.getAttribute('style') || '').split(';').map(function (value) {
                var arr = value.split(':');
                return arr[0].trim();
              });
            };

            StyleAttributor.prototype.add = function (node, value) {
              if (!this.canAdd(node, value)) return false; // @ts-ignore

              node.style[camelize(this.keyName)] = value;
              return true;
            };

            StyleAttributor.prototype.remove = function (node) {
              // @ts-ignore
              node.style[camelize(this.keyName)] = '';

              if (!node.getAttribute('style')) {
                node.removeAttribute('style');
              }
            };

            StyleAttributor.prototype.value = function (node) {
              // @ts-ignore
              var value = node.style[camelize(this.keyName)];
              return this.canAdd(node, value) ? value : '';
            };

            return StyleAttributor;
          }(attributor_1.default);

          exports.default = StyleAttributor;
          /***/
        },
        /* 34 */

        /***/
        function (module, exports, __webpack_require__) {

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var _createClass = function () {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }

            return function (Constructor, protoProps, staticProps) {
              if (protoProps) defineProperties(Constructor.prototype, protoProps);
              if (staticProps) defineProperties(Constructor, staticProps);
              return Constructor;
            };
          }();

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }

          var Theme = function () {
            function Theme(quill, options) {
              _classCallCheck(this, Theme);

              this.quill = quill;
              this.options = options;
              this.modules = {};
            }

            _createClass(Theme, [{
              key: 'init',
              value: function init() {
                var _this = this;

                Object.keys(this.options.modules).forEach(function (name) {
                  if (_this.modules[name] == null) {
                    _this.addModule(name);
                  }
                });
              }
            }, {
              key: 'addModule',
              value: function addModule(name) {
                var moduleClass = this.quill.constructor.import('modules/' + name);
                this.modules[name] = new moduleClass(this.quill, this.options.modules[name] || {});
                return this.modules[name];
              }
            }]);

            return Theme;
          }();

          Theme.DEFAULTS = {
            modules: {}
          };
          Theme.themes = {
            'default': Theme
          };
          exports.default = Theme;
          /***/
        },
        /* 35 */

        /***/
        function (module, exports, __webpack_require__) {

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var _createClass = function () {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }

            return function (Constructor, protoProps, staticProps) {
              if (protoProps) defineProperties(Constructor.prototype, protoProps);
              if (staticProps) defineProperties(Constructor, staticProps);
              return Constructor;
            };
          }();

          var _get = function get(object, property, receiver) {
            if (object === null) object = Function.prototype;
            var desc = Object.getOwnPropertyDescriptor(object, property);

            if (desc === undefined) {
              var parent = Object.getPrototypeOf(object);

              if (parent === null) {
                return undefined;
              } else {
                return get(parent, property, receiver);
              }
            } else if ("value" in desc) {
              return desc.value;
            } else {
              var getter = desc.get;

              if (getter === undefined) {
                return undefined;
              }

              return getter.call(receiver);
            }
          };

          var _parchment = __webpack_require__(0);

          var _parchment2 = _interopRequireDefault(_parchment);

          var _text = __webpack_require__(7);

          var _text2 = _interopRequireDefault(_text);

          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
              default: obj
            };
          }

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }

          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }

            return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
          }

          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
            }

            subClass.prototype = Object.create(superClass && superClass.prototype, {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
              }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
          }

          var GUARD_TEXT = "\uFEFF";

          var Embed = function (_Parchment$Embed) {
            _inherits(Embed, _Parchment$Embed);

            function Embed(node) {
              _classCallCheck(this, Embed);

              var _this = _possibleConstructorReturn(this, (Embed.__proto__ || Object.getPrototypeOf(Embed)).call(this, node));

              _this.contentNode = document.createElement('span');

              _this.contentNode.setAttribute('contenteditable', false);

              [].slice.call(_this.domNode.childNodes).forEach(function (childNode) {
                _this.contentNode.appendChild(childNode);
              });
              _this.leftGuard = document.createTextNode(GUARD_TEXT);
              _this.rightGuard = document.createTextNode(GUARD_TEXT);

              _this.domNode.appendChild(_this.leftGuard);

              _this.domNode.appendChild(_this.contentNode);

              _this.domNode.appendChild(_this.rightGuard);

              return _this;
            }

            _createClass(Embed, [{
              key: 'index',
              value: function index(node, offset) {
                if (node === this.leftGuard) return 0;
                if (node === this.rightGuard) return 1;
                return _get(Embed.prototype.__proto__ || Object.getPrototypeOf(Embed.prototype), 'index', this).call(this, node, offset);
              }
            }, {
              key: 'restore',
              value: function restore(node) {
                var range = void 0,
                    textNode = void 0;
                var text = node.data.split(GUARD_TEXT).join('');

                if (node === this.leftGuard) {
                  if (this.prev instanceof _text2.default) {
                    var prevLength = this.prev.length();
                    this.prev.insertAt(prevLength, text);
                    range = {
                      startNode: this.prev.domNode,
                      startOffset: prevLength + text.length
                    };
                  } else {
                    textNode = document.createTextNode(text);
                    this.parent.insertBefore(_parchment2.default.create(textNode), this);
                    range = {
                      startNode: textNode,
                      startOffset: text.length
                    };
                  }
                } else if (node === this.rightGuard) {
                  if (this.next instanceof _text2.default) {
                    this.next.insertAt(0, text);
                    range = {
                      startNode: this.next.domNode,
                      startOffset: text.length
                    };
                  } else {
                    textNode = document.createTextNode(text);
                    this.parent.insertBefore(_parchment2.default.create(textNode), this.next);
                    range = {
                      startNode: textNode,
                      startOffset: text.length
                    };
                  }
                }

                node.data = GUARD_TEXT;
                return range;
              }
            }, {
              key: 'update',
              value: function update(mutations, context) {
                var _this2 = this;

                mutations.forEach(function (mutation) {
                  if (mutation.type === 'characterData' && (mutation.target === _this2.leftGuard || mutation.target === _this2.rightGuard)) {
                    var range = _this2.restore(mutation.target);

                    if (range) context.range = range;
                  }
                });
              }
            }]);

            return Embed;
          }(_parchment2.default.Embed);

          exports.default = Embed;
          /***/
        },
        /* 36 */

        /***/
        function (module, exports, __webpack_require__) {

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AlignStyle = exports.AlignClass = exports.AlignAttribute = undefined;

          var _parchment = __webpack_require__(0);

          var _parchment2 = _interopRequireDefault(_parchment);

          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
              default: obj
            };
          }

          var config = {
            scope: _parchment2.default.Scope.BLOCK,
            whitelist: ['right', 'center', 'justify']
          };
          var AlignAttribute = new _parchment2.default.Attributor.Attribute('align', 'align', config);
          var AlignClass = new _parchment2.default.Attributor.Class('align', 'ql-align', config);
          var AlignStyle = new _parchment2.default.Attributor.Style('align', 'text-align', config);
          exports.AlignAttribute = AlignAttribute;
          exports.AlignClass = AlignClass;
          exports.AlignStyle = AlignStyle;
          /***/
        },
        /* 37 */

        /***/
        function (module, exports, __webpack_require__) {

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BackgroundStyle = exports.BackgroundClass = undefined;

          var _parchment = __webpack_require__(0);

          var _parchment2 = _interopRequireDefault(_parchment);

          var _color = __webpack_require__(26);

          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
              default: obj
            };
          }

          var BackgroundClass = new _parchment2.default.Attributor.Class('background', 'ql-bg', {
            scope: _parchment2.default.Scope.INLINE
          });
          var BackgroundStyle = new _color.ColorAttributor('background', 'background-color', {
            scope: _parchment2.default.Scope.INLINE
          });
          exports.BackgroundClass = BackgroundClass;
          exports.BackgroundStyle = BackgroundStyle;
          /***/
        },
        /* 38 */

        /***/
        function (module, exports, __webpack_require__) {

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DirectionStyle = exports.DirectionClass = exports.DirectionAttribute = undefined;

          var _parchment = __webpack_require__(0);

          var _parchment2 = _interopRequireDefault(_parchment);

          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
              default: obj
            };
          }

          var config = {
            scope: _parchment2.default.Scope.BLOCK,
            whitelist: ['rtl']
          };
          var DirectionAttribute = new _parchment2.default.Attributor.Attribute('direction', 'dir', config);
          var DirectionClass = new _parchment2.default.Attributor.Class('direction', 'ql-direction', config);
          var DirectionStyle = new _parchment2.default.Attributor.Style('direction', 'direction', config);
          exports.DirectionAttribute = DirectionAttribute;
          exports.DirectionClass = DirectionClass;
          exports.DirectionStyle = DirectionStyle;
          /***/
        },
        /* 39 */

        /***/
        function (module, exports, __webpack_require__) {

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FontClass = exports.FontStyle = undefined;

          var _createClass = function () {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }

            return function (Constructor, protoProps, staticProps) {
              if (protoProps) defineProperties(Constructor.prototype, protoProps);
              if (staticProps) defineProperties(Constructor, staticProps);
              return Constructor;
            };
          }();

          var _get = function get(object, property, receiver) {
            if (object === null) object = Function.prototype;
            var desc = Object.getOwnPropertyDescriptor(object, property);

            if (desc === undefined) {
              var parent = Object.getPrototypeOf(object);

              if (parent === null) {
                return undefined;
              } else {
                return get(parent, property, receiver);
              }
            } else if ("value" in desc) {
              return desc.value;
            } else {
              var getter = desc.get;

              if (getter === undefined) {
                return undefined;
              }

              return getter.call(receiver);
            }
          };

          var _parchment = __webpack_require__(0);

          var _parchment2 = _interopRequireDefault(_parchment);

          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
              default: obj
            };
          }

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }

          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }

            return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
          }

          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
            }

            subClass.prototype = Object.create(superClass && superClass.prototype, {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
              }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
          }

          var config = {
            scope: _parchment2.default.Scope.INLINE,
            whitelist: ['serif', 'monospace']
          };
          var FontClass = new _parchment2.default.Attributor.Class('font', 'ql-font', config);

          var FontStyleAttributor = function (_Parchment$Attributor) {
            _inherits(FontStyleAttributor, _Parchment$Attributor);

            function FontStyleAttributor() {
              _classCallCheck(this, FontStyleAttributor);

              return _possibleConstructorReturn(this, (FontStyleAttributor.__proto__ || Object.getPrototypeOf(FontStyleAttributor)).apply(this, arguments));
            }

            _createClass(FontStyleAttributor, [{
              key: 'value',
              value: function value(node) {
                return _get(FontStyleAttributor.prototype.__proto__ || Object.getPrototypeOf(FontStyleAttributor.prototype), 'value', this).call(this, node).replace(/["']/g, '');
              }
            }]);

            return FontStyleAttributor;
          }(_parchment2.default.Attributor.Style);

          var FontStyle = new FontStyleAttributor('font', 'font-family', config);
          exports.FontStyle = FontStyle;
          exports.FontClass = FontClass;
          /***/
        },
        /* 40 */

        /***/
        function (module, exports, __webpack_require__) {

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SizeStyle = exports.SizeClass = undefined;

          var _parchment = __webpack_require__(0);

          var _parchment2 = _interopRequireDefault(_parchment);

          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
              default: obj
            };
          }

          var SizeClass = new _parchment2.default.Attributor.Class('size', 'ql-size', {
            scope: _parchment2.default.Scope.INLINE,
            whitelist: ['small', 'large', 'huge']
          });
          var SizeStyle = new _parchment2.default.Attributor.Style('size', 'font-size', {
            scope: _parchment2.default.Scope.INLINE,
            whitelist: ['10px', '18px', '32px']
          });
          exports.SizeClass = SizeClass;
          exports.SizeStyle = SizeStyle;
          /***/
        },
        /* 41 */

        /***/
        function (module, exports, __webpack_require__) {

          module.exports = {
            'align': {
              '': __webpack_require__(76),
              'center': __webpack_require__(77),
              'right': __webpack_require__(78),
              'justify': __webpack_require__(79)
            },
            'background': __webpack_require__(80),
            'blockquote': __webpack_require__(81),
            'bold': __webpack_require__(82),
            'clean': __webpack_require__(83),
            'code': __webpack_require__(58),
            'code-block': __webpack_require__(58),
            'color': __webpack_require__(84),
            'direction': {
              '': __webpack_require__(85),
              'rtl': __webpack_require__(86)
            },
            'float': {
              'center': __webpack_require__(87),
              'full': __webpack_require__(88),
              'left': __webpack_require__(89),
              'right': __webpack_require__(90)
            },
            'formula': __webpack_require__(91),
            'header': {
              '1': __webpack_require__(92),
              '2': __webpack_require__(93)
            },
            'italic': __webpack_require__(94),
            'image': __webpack_require__(95),
            'indent': {
              '+1': __webpack_require__(96),
              '-1': __webpack_require__(97)
            },
            'link': __webpack_require__(98),
            'list': {
              'ordered': __webpack_require__(99),
              'bullet': __webpack_require__(100),
              'check': __webpack_require__(101)
            },
            'script': {
              'sub': __webpack_require__(102),
              'super': __webpack_require__(103)
            },
            'strike': __webpack_require__(104),
            'underline': __webpack_require__(105),
            'video': __webpack_require__(106)
          };
          /***/
        },
        /* 42 */

        /***/
        function (module, exports, __webpack_require__) {

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.getLastChangeIndex = exports.default = undefined;

          var _createClass = function () {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }

            return function (Constructor, protoProps, staticProps) {
              if (protoProps) defineProperties(Constructor.prototype, protoProps);
              if (staticProps) defineProperties(Constructor, staticProps);
              return Constructor;
            };
          }();

          var _parchment = __webpack_require__(0);

          var _parchment2 = _interopRequireDefault(_parchment);

          var _quill = __webpack_require__(5);

          var _quill2 = _interopRequireDefault(_quill);

          var _module = __webpack_require__(9);

          var _module2 = _interopRequireDefault(_module);

          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
              default: obj
            };
          }

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }

          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }

            return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
          }

          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
            }

            subClass.prototype = Object.create(superClass && superClass.prototype, {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
              }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
          }

          var History = function (_Module) {
            _inherits(History, _Module);

            function History(quill, options) {
              _classCallCheck(this, History);

              var _this = _possibleConstructorReturn(this, (History.__proto__ || Object.getPrototypeOf(History)).call(this, quill, options));

              _this.lastRecorded = 0;
              _this.ignoreChange = false;

              _this.clear();

              _this.quill.on(_quill2.default.events.EDITOR_CHANGE, function (eventName, delta, oldDelta, source) {
                if (eventName !== _quill2.default.events.TEXT_CHANGE || _this.ignoreChange) return;

                if (!_this.options.userOnly || source === _quill2.default.sources.USER) {
                  _this.record(delta, oldDelta);
                } else {
                  _this.transform(delta);
                }
              });

              _this.quill.keyboard.addBinding({
                key: 'Z',
                shortKey: true
              }, _this.undo.bind(_this));

              _this.quill.keyboard.addBinding({
                key: 'Z',
                shortKey: true,
                shiftKey: true
              }, _this.redo.bind(_this));

              if (/Win/i.test(navigator.platform)) {
                _this.quill.keyboard.addBinding({
                  key: 'Y',
                  shortKey: true
                }, _this.redo.bind(_this));
              }

              return _this;
            }

            _createClass(History, [{
              key: 'change',
              value: function change(source, dest) {
                if (this.stack[source].length === 0) return;
                var delta = this.stack[source].pop();
                this.stack[dest].push(delta);
                this.lastRecorded = 0;
                this.ignoreChange = true;
                this.quill.updateContents(delta[source], _quill2.default.sources.USER);
                this.ignoreChange = false;
                var index = getLastChangeIndex(delta[source]);
                this.quill.setSelection(index);
              }
            }, {
              key: 'clear',
              value: function clear() {
                this.stack = {
                  undo: [],
                  redo: []
                };
              }
            }, {
              key: 'cutoff',
              value: function cutoff() {
                this.lastRecorded = 0;
              }
            }, {
              key: 'record',
              value: function record(changeDelta, oldDelta) {
                if (changeDelta.ops.length === 0) return;
                this.stack.redo = [];
                var undoDelta = this.quill.getContents().diff(oldDelta);
                var timestamp = Date.now();

                if (this.lastRecorded + this.options.delay > timestamp && this.stack.undo.length > 0) {
                  var delta = this.stack.undo.pop();
                  undoDelta = undoDelta.compose(delta.undo);
                  changeDelta = delta.redo.compose(changeDelta);
                } else {
                  this.lastRecorded = timestamp;
                }

                this.stack.undo.push({
                  redo: changeDelta,
                  undo: undoDelta
                });

                if (this.stack.undo.length > this.options.maxStack) {
                  this.stack.undo.shift();
                }
              }
            }, {
              key: 'redo',
              value: function redo() {
                this.change('redo', 'undo');
              }
            }, {
              key: 'transform',
              value: function transform(delta) {
                this.stack.undo.forEach(function (change) {
                  change.undo = delta.transform(change.undo, true);
                  change.redo = delta.transform(change.redo, true);
                });
                this.stack.redo.forEach(function (change) {
                  change.undo = delta.transform(change.undo, true);
                  change.redo = delta.transform(change.redo, true);
                });
              }
            }, {
              key: 'undo',
              value: function undo() {
                this.change('undo', 'redo');
              }
            }]);

            return History;
          }(_module2.default);

          History.DEFAULTS = {
            delay: 1000,
            maxStack: 100,
            userOnly: false
          };

          function endsWithNewlineChange(delta) {
            var lastOp = delta.ops[delta.ops.length - 1];
            if (lastOp == null) return false;

            if (lastOp.insert != null) {
              return typeof lastOp.insert === 'string' && lastOp.insert.endsWith('\n');
            }

            if (lastOp.attributes != null) {
              return Object.keys(lastOp.attributes).some(function (attr) {
                return _parchment2.default.query(attr, _parchment2.default.Scope.BLOCK) != null;
              });
            }

            return false;
          }

          function getLastChangeIndex(delta) {
            var deleteLength = delta.reduce(function (length, op) {
              length += op.delete || 0;
              return length;
            }, 0);
            var changeIndex = delta.length() - deleteLength;

            if (endsWithNewlineChange(delta)) {
              changeIndex -= 1;
            }

            return changeIndex;
          }

          exports.default = History;
          exports.getLastChangeIndex = getLastChangeIndex;
          /***/
        },
        /* 43 */

        /***/
        function (module, exports, __webpack_require__) {

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = exports.BaseTooltip = undefined;

          var _createClass = function () {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }

            return function (Constructor, protoProps, staticProps) {
              if (protoProps) defineProperties(Constructor.prototype, protoProps);
              if (staticProps) defineProperties(Constructor, staticProps);
              return Constructor;
            };
          }();

          var _get = function get(object, property, receiver) {
            if (object === null) object = Function.prototype;
            var desc = Object.getOwnPropertyDescriptor(object, property);

            if (desc === undefined) {
              var parent = Object.getPrototypeOf(object);

              if (parent === null) {
                return undefined;
              } else {
                return get(parent, property, receiver);
              }
            } else if ("value" in desc) {
              return desc.value;
            } else {
              var getter = desc.get;

              if (getter === undefined) {
                return undefined;
              }

              return getter.call(receiver);
            }
          };

          var _extend = __webpack_require__(3);

          var _extend2 = _interopRequireDefault(_extend);

          var _quillDelta = __webpack_require__(2);

          var _quillDelta2 = _interopRequireDefault(_quillDelta);

          var _emitter = __webpack_require__(8);

          var _emitter2 = _interopRequireDefault(_emitter);

          var _keyboard = __webpack_require__(23);

          var _keyboard2 = _interopRequireDefault(_keyboard);

          var _theme = __webpack_require__(34);

          var _theme2 = _interopRequireDefault(_theme);

          var _colorPicker = __webpack_require__(59);

          var _colorPicker2 = _interopRequireDefault(_colorPicker);

          var _iconPicker = __webpack_require__(60);

          var _iconPicker2 = _interopRequireDefault(_iconPicker);

          var _picker = __webpack_require__(28);

          var _picker2 = _interopRequireDefault(_picker);

          var _tooltip = __webpack_require__(61);

          var _tooltip2 = _interopRequireDefault(_tooltip);

          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
              default: obj
            };
          }

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }

          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }

            return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
          }

          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
            }

            subClass.prototype = Object.create(superClass && superClass.prototype, {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
              }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
          }

          var ALIGNS = [false, 'center', 'right', 'justify'];
          var COLORS = ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466"];
          var FONTS = [false, 'serif', 'monospace'];
          var HEADERS = ['1', '2', '3', false];
          var SIZES = ['small', false, 'large', 'huge'];

          var BaseTheme = function (_Theme) {
            _inherits(BaseTheme, _Theme);

            function BaseTheme(quill, options) {
              _classCallCheck(this, BaseTheme);

              var _this = _possibleConstructorReturn(this, (BaseTheme.__proto__ || Object.getPrototypeOf(BaseTheme)).call(this, quill, options));

              var listener = function listener(e) {
                if (!document.body.contains(quill.root)) {
                  return document.body.removeEventListener('click', listener);
                }

                if (_this.tooltip != null && !_this.tooltip.root.contains(e.target) && document.activeElement !== _this.tooltip.textbox && !_this.quill.hasFocus()) {
                  _this.tooltip.hide();
                }

                if (_this.pickers != null) {
                  _this.pickers.forEach(function (picker) {
                    if (!picker.container.contains(e.target)) {
                      picker.close();
                    }
                  });
                }
              };

              quill.emitter.listenDOM('click', document.body, listener);
              return _this;
            }

            _createClass(BaseTheme, [{
              key: 'addModule',
              value: function addModule(name) {
                var module = _get(BaseTheme.prototype.__proto__ || Object.getPrototypeOf(BaseTheme.prototype), 'addModule', this).call(this, name);

                if (name === 'toolbar') {
                  this.extendToolbar(module);
                }

                return module;
              }
            }, {
              key: 'buildButtons',
              value: function buildButtons(buttons, icons) {
                buttons.forEach(function (button) {
                  var className = button.getAttribute('class') || '';
                  className.split(/\s+/).forEach(function (name) {
                    if (!name.startsWith('ql-')) return;
                    name = name.slice('ql-'.length);
                    if (icons[name] == null) return;

                    if (name === 'direction') {
                      button.innerHTML = icons[name][''] + icons[name]['rtl'];
                    } else if (typeof icons[name] === 'string') {
                      button.innerHTML = icons[name];
                    } else {
                      var value = button.value || '';

                      if (value != null && icons[name][value]) {
                        button.innerHTML = icons[name][value];
                      }
                    }
                  });
                });
              }
            }, {
              key: 'buildPickers',
              value: function buildPickers(selects, icons) {
                var _this2 = this;

                this.pickers = selects.map(function (select) {
                  if (select.classList.contains('ql-align')) {
                    if (select.querySelector('option') == null) {
                      fillSelect(select, ALIGNS);
                    }

                    return new _iconPicker2.default(select, icons.align);
                  } else if (select.classList.contains('ql-background') || select.classList.contains('ql-color')) {
                    var format = select.classList.contains('ql-background') ? 'background' : 'color';

                    if (select.querySelector('option') == null) {
                      fillSelect(select, COLORS, format === 'background' ? '#ffffff' : '#000000');
                    }

                    return new _colorPicker2.default(select, icons[format]);
                  } else {
                    if (select.querySelector('option') == null) {
                      if (select.classList.contains('ql-font')) {
                        fillSelect(select, FONTS);
                      } else if (select.classList.contains('ql-header')) {
                        fillSelect(select, HEADERS);
                      } else if (select.classList.contains('ql-size')) {
                        fillSelect(select, SIZES);
                      }
                    }

                    return new _picker2.default(select);
                  }
                });

                var update = function update() {
                  _this2.pickers.forEach(function (picker) {
                    picker.update();
                  });
                };

                this.quill.on(_emitter2.default.events.EDITOR_CHANGE, update);
              }
            }]);

            return BaseTheme;
          }(_theme2.default);

          BaseTheme.DEFAULTS = (0, _extend2.default)(true, {}, _theme2.default.DEFAULTS, {
            modules: {
              toolbar: {
                handlers: {
                  formula: function formula() {
                    this.quill.theme.tooltip.edit('formula');
                  },
                  image: function image() {
                    var _this3 = this;

                    var fileInput = this.container.querySelector('input.ql-image[type=file]');

                    if (fileInput == null) {
                      fileInput = document.createElement('input');
                      fileInput.setAttribute('type', 'file');
                      fileInput.setAttribute('accept', 'image/png, image/gif, image/jpeg, image/bmp, image/x-icon');
                      fileInput.classList.add('ql-image');
                      fileInput.addEventListener('change', function () {
                        if (fileInput.files != null && fileInput.files[0] != null) {
                          var reader = new FileReader();

                          reader.onload = function (e) {
                            var range = _this3.quill.getSelection(true);

                            _this3.quill.updateContents(new _quillDelta2.default().retain(range.index).delete(range.length).insert({
                              image: e.target.result
                            }), _emitter2.default.sources.USER);

                            _this3.quill.setSelection(range.index + 1, _emitter2.default.sources.SILENT);

                            fileInput.value = "";
                          };

                          reader.readAsDataURL(fileInput.files[0]);
                        }
                      });
                      this.container.appendChild(fileInput);
                    }

                    fileInput.click();
                  },
                  video: function video() {
                    this.quill.theme.tooltip.edit('video');
                  }
                }
              }
            }
          });

          var BaseTooltip = function (_Tooltip) {
            _inherits(BaseTooltip, _Tooltip);

            function BaseTooltip(quill, boundsContainer) {
              _classCallCheck(this, BaseTooltip);

              var _this4 = _possibleConstructorReturn(this, (BaseTooltip.__proto__ || Object.getPrototypeOf(BaseTooltip)).call(this, quill, boundsContainer));

              _this4.textbox = _this4.root.querySelector('input[type="text"]');

              _this4.listen();

              return _this4;
            }

            _createClass(BaseTooltip, [{
              key: 'listen',
              value: function listen() {
                var _this5 = this;

                this.textbox.addEventListener('keydown', function (event) {
                  if (_keyboard2.default.match(event, 'enter')) {
                    _this5.save();

                    event.preventDefault();
                  } else if (_keyboard2.default.match(event, 'escape')) {
                    _this5.cancel();

                    event.preventDefault();
                  }
                });
              }
            }, {
              key: 'cancel',
              value: function cancel() {
                this.hide();
              }
            }, {
              key: 'edit',
              value: function edit() {
                var mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'link';
                var preview = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                this.root.classList.remove('ql-hidden');
                this.root.classList.add('ql-editing');

                if (preview != null) {
                  this.textbox.value = preview;
                } else if (mode !== this.root.getAttribute('data-mode')) {
                  this.textbox.value = '';
                }

                this.position(this.quill.getBounds(this.quill.selection.savedRange));
                this.textbox.select();
                this.textbox.setAttribute('placeholder', this.textbox.getAttribute('data-' + mode) || '');
                this.root.setAttribute('data-mode', mode);
              }
            }, {
              key: 'restoreFocus',
              value: function restoreFocus() {
                var scrollTop = this.quill.scrollingContainer.scrollTop;
                this.quill.focus();
                this.quill.scrollingContainer.scrollTop = scrollTop;
              }
            }, {
              key: 'save',
              value: function save() {
                var value = this.textbox.value;

                switch (this.root.getAttribute('data-mode')) {
                  case 'link':
                    {
                      var scrollTop = this.quill.root.scrollTop;

                      if (this.linkRange) {
                        this.quill.formatText(this.linkRange, 'link', value, _emitter2.default.sources.USER);
                        delete this.linkRange;
                      } else {
                        this.restoreFocus();
                        this.quill.format('link', value, _emitter2.default.sources.USER);
                      }

                      this.quill.root.scrollTop = scrollTop;
                      break;
                    }

                  case 'video':
                    {
                      value = extractVideoUrl(value);
                    }
                  // eslint-disable-next-line no-fallthrough

                  case 'formula':
                    {
                      if (!value) break;
                      var range = this.quill.getSelection(true);

                      if (range != null) {
                        var index = range.index + range.length;
                        this.quill.insertEmbed(index, this.root.getAttribute('data-mode'), value, _emitter2.default.sources.USER);

                        if (this.root.getAttribute('data-mode') === 'formula') {
                          this.quill.insertText(index + 1, ' ', _emitter2.default.sources.USER);
                        }

                        this.quill.setSelection(index + 2, _emitter2.default.sources.USER);
                      }

                      break;
                    }
                }

                this.textbox.value = '';
                this.hide();
              }
            }]);

            return BaseTooltip;
          }(_tooltip2.default);

          function extractVideoUrl(url) {
            var match = url.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/) || url.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/);

            if (match) {
              return (match[1] || 'https') + '://www.youtube.com/embed/' + match[2] + '?showinfo=0';
            }

            if (match = url.match(/^(?:(https?):\/\/)?(?:www\.)?vimeo\.com\/(\d+)/)) {
              // eslint-disable-line no-cond-assign
              return (match[1] || 'https') + '://player.vimeo.com/video/' + match[2] + '/';
            }

            return url;
          }

          function fillSelect(select, values) {
            var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            values.forEach(function (value) {
              var option = document.createElement('option');

              if (value === defaultValue) {
                option.setAttribute('selected', 'selected');
              } else {
                option.setAttribute('value', value);
              }

              select.appendChild(option);
            });
          }

          exports.BaseTooltip = BaseTooltip;
          exports.default = BaseTheme;
          /***/
        },
        /* 44 */

        /***/
        function (module, exports, __webpack_require__) {

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var LinkedList =
          /** @class */
          function () {
            function LinkedList() {
              this.head = this.tail = null;
              this.length = 0;
            }

            LinkedList.prototype.append = function () {
              var nodes = [];

              for (var _i = 0; _i < arguments.length; _i++) {
                nodes[_i] = arguments[_i];
              }

              this.insertBefore(nodes[0], null);

              if (nodes.length > 1) {
                this.append.apply(this, nodes.slice(1));
              }
            };

            LinkedList.prototype.contains = function (node) {
              var cur,
                  next = this.iterator();

              while (cur = next()) {
                if (cur === node) return true;
              }

              return false;
            };

            LinkedList.prototype.insertBefore = function (node, refNode) {
              if (!node) return;
              node.next = refNode;

              if (refNode != null) {
                node.prev = refNode.prev;

                if (refNode.prev != null) {
                  refNode.prev.next = node;
                }

                refNode.prev = node;

                if (refNode === this.head) {
                  this.head = node;
                }
              } else if (this.tail != null) {
                this.tail.next = node;
                node.prev = this.tail;
                this.tail = node;
              } else {
                node.prev = null;
                this.head = this.tail = node;
              }

              this.length += 1;
            };

            LinkedList.prototype.offset = function (target) {
              var index = 0,
                  cur = this.head;

              while (cur != null) {
                if (cur === target) return index;
                index += cur.length();
                cur = cur.next;
              }

              return -1;
            };

            LinkedList.prototype.remove = function (node) {
              if (!this.contains(node)) return;
              if (node.prev != null) node.prev.next = node.next;
              if (node.next != null) node.next.prev = node.prev;
              if (node === this.head) this.head = node.next;
              if (node === this.tail) this.tail = node.prev;
              this.length -= 1;
            };

            LinkedList.prototype.iterator = function (curNode) {
              if (curNode === void 0) {
                curNode = this.head;
              } // TODO use yield when we can


              return function () {
                var ret = curNode;
                if (curNode != null) curNode = curNode.next;
                return ret;
              };
            };

            LinkedList.prototype.find = function (index, inclusive) {
              if (inclusive === void 0) {
                inclusive = false;
              }

              var cur,
                  next = this.iterator();

              while (cur = next()) {
                var length = cur.length();

                if (index < length || inclusive && index === length && (cur.next == null || cur.next.length() !== 0)) {
                  return [cur, index];
                }

                index -= length;
              }

              return [null, 0];
            };

            LinkedList.prototype.forEach = function (callback) {
              var cur,
                  next = this.iterator();

              while (cur = next()) {
                callback(cur);
              }
            };

            LinkedList.prototype.forEachAt = function (index, length, callback) {
              if (length <= 0) return;

              var _a = this.find(index),
                  startNode = _a[0],
                  offset = _a[1];

              var cur,
                  curIndex = index - offset,
                  next = this.iterator(startNode);

              while ((cur = next()) && curIndex < index + length) {
                var curLength = cur.length();

                if (index > curIndex) {
                  callback(cur, index - curIndex, Math.min(length, curIndex + curLength - index));
                } else {
                  callback(cur, 0, Math.min(curLength, index + length - curIndex));
                }

                curIndex += curLength;
              }
            };

            LinkedList.prototype.map = function (callback) {
              return this.reduce(function (memo, cur) {
                memo.push(callback(cur));
                return memo;
              }, []);
            };

            LinkedList.prototype.reduce = function (callback, memo) {
              var cur,
                  next = this.iterator();

              while (cur = next()) {
                memo = callback(memo, cur);
              }

              return memo;
            };

            return LinkedList;
          }();

          exports.default = LinkedList;
          /***/
        },
        /* 45 */

        /***/
        function (module, exports, __webpack_require__) {

          var __extends = this && this.__extends || function () {
            var extendStatics = Object.setPrototypeOf || {
              __proto__: []
            } instanceof Array && function (d, b) {
              d.__proto__ = b;
            } || function (d, b) {
              for (var p in b) {
                if (b.hasOwnProperty(p)) d[p] = b[p];
              }
            };

            return function (d, b) {
              extendStatics(d, b);

              function __() {
                this.constructor = d;
              }

              d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
          }();

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var container_1 = __webpack_require__(17);

          var Registry = __webpack_require__(1);

          var OBSERVER_CONFIG = {
            attributes: true,
            characterData: true,
            characterDataOldValue: true,
            childList: true,
            subtree: true
          };
          var MAX_OPTIMIZE_ITERATIONS = 100;

          var ScrollBlot =
          /** @class */
          function (_super) {
            __extends(ScrollBlot, _super);

            function ScrollBlot(node) {
              var _this = _super.call(this, node) || this;

              _this.scroll = _this;
              _this.observer = new MutationObserver(function (mutations) {
                _this.update(mutations);
              });

              _this.observer.observe(_this.domNode, OBSERVER_CONFIG);

              _this.attach();

              return _this;
            }

            ScrollBlot.prototype.detach = function () {
              _super.prototype.detach.call(this);

              this.observer.disconnect();
            };

            ScrollBlot.prototype.deleteAt = function (index, length) {
              this.update();

              if (index === 0 && length === this.length()) {
                this.children.forEach(function (child) {
                  child.remove();
                });
              } else {
                _super.prototype.deleteAt.call(this, index, length);
              }
            };

            ScrollBlot.prototype.formatAt = function (index, length, name, value) {
              this.update();

              _super.prototype.formatAt.call(this, index, length, name, value);
            };

            ScrollBlot.prototype.insertAt = function (index, value, def) {
              this.update();

              _super.prototype.insertAt.call(this, index, value, def);
            };

            ScrollBlot.prototype.optimize = function (mutations, context) {
              var _this = this;

              if (mutations === void 0) {
                mutations = [];
              }

              if (context === void 0) {
                context = {};
              }

              _super.prototype.optimize.call(this, context); // We must modify mutations directly, cannot make copy and then modify


              var records = [].slice.call(this.observer.takeRecords()); // Array.push currently seems to be implemented by a non-tail recursive function
              // so we cannot just mutations.push.apply(mutations, this.observer.takeRecords());

              while (records.length > 0) {
                mutations.push(records.pop());
              } // TODO use WeakMap


              var mark = function mark(blot, markParent) {
                if (markParent === void 0) {
                  markParent = true;
                }

                if (blot == null || blot === _this) return;
                if (blot.domNode.parentNode == null) return; // @ts-ignore

                if (blot.domNode[Registry.DATA_KEY].mutations == null) {
                  // @ts-ignore
                  blot.domNode[Registry.DATA_KEY].mutations = [];
                }

                if (markParent) mark(blot.parent);
              };

              var optimize = function optimize(blot) {
                // Post-order traversal
                if ( // @ts-ignore
                blot.domNode[Registry.DATA_KEY] == null || // @ts-ignore
                blot.domNode[Registry.DATA_KEY].mutations == null) {
                  return;
                }

                if (blot instanceof container_1.default) {
                  blot.children.forEach(optimize);
                }

                blot.optimize(context);
              };

              var remaining = mutations;

              for (var i = 0; remaining.length > 0; i += 1) {
                if (i >= MAX_OPTIMIZE_ITERATIONS) {
                  throw new Error('[Parchment] Maximum optimize iterations reached');
                }

                remaining.forEach(function (mutation) {
                  var blot = Registry.find(mutation.target, true);
                  if (blot == null) return;

                  if (blot.domNode === mutation.target) {
                    if (mutation.type === 'childList') {
                      mark(Registry.find(mutation.previousSibling, false));
                      [].forEach.call(mutation.addedNodes, function (node) {
                        var child = Registry.find(node, false);
                        mark(child, false);

                        if (child instanceof container_1.default) {
                          child.children.forEach(function (grandChild) {
                            mark(grandChild, false);
                          });
                        }
                      });
                    } else if (mutation.type === 'attributes') {
                      mark(blot.prev);
                    }
                  }

                  mark(blot);
                });
                this.children.forEach(optimize);
                remaining = [].slice.call(this.observer.takeRecords());
                records = remaining.slice();

                while (records.length > 0) {
                  mutations.push(records.pop());
                }
              }
            };

            ScrollBlot.prototype.update = function (mutations, context) {
              var _this = this;

              if (context === void 0) {
                context = {};
              }

              mutations = mutations || this.observer.takeRecords(); // TODO use WeakMap

              mutations.map(function (mutation) {
                var blot = Registry.find(mutation.target, true);
                if (blot == null) return null; // @ts-ignore

                if (blot.domNode[Registry.DATA_KEY].mutations == null) {
                  // @ts-ignore
                  blot.domNode[Registry.DATA_KEY].mutations = [mutation];
                  return blot;
                } else {
                  // @ts-ignore
                  blot.domNode[Registry.DATA_KEY].mutations.push(mutation);
                  return null;
                }
              }).forEach(function (blot) {
                if (blot == null || blot === _this || //@ts-ignore
                blot.domNode[Registry.DATA_KEY] == null) return; // @ts-ignore

                blot.update(blot.domNode[Registry.DATA_KEY].mutations || [], context);
              }); // @ts-ignore

              if (this.domNode[Registry.DATA_KEY].mutations != null) {
                // @ts-ignore
                _super.prototype.update.call(this, this.domNode[Registry.DATA_KEY].mutations, context);
              }

              this.optimize(mutations, context);
            };

            ScrollBlot.blotName = 'scroll';
            ScrollBlot.defaultChild = 'block';
            ScrollBlot.scope = Registry.Scope.BLOCK_BLOT;
            ScrollBlot.tagName = 'DIV';
            return ScrollBlot;
          }(container_1.default);

          exports.default = ScrollBlot;
          /***/
        },
        /* 46 */

        /***/
        function (module, exports, __webpack_require__) {

          var __extends = this && this.__extends || function () {
            var extendStatics = Object.setPrototypeOf || {
              __proto__: []
            } instanceof Array && function (d, b) {
              d.__proto__ = b;
            } || function (d, b) {
              for (var p in b) {
                if (b.hasOwnProperty(p)) d[p] = b[p];
              }
            };

            return function (d, b) {
              extendStatics(d, b);

              function __() {
                this.constructor = d;
              }

              d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
          }();

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var format_1 = __webpack_require__(18);

          var Registry = __webpack_require__(1); // Shallow object comparison


          function isEqual(obj1, obj2) {
            if (Object.keys(obj1).length !== Object.keys(obj2).length) return false; // @ts-ignore

            for (var prop in obj1) {
              // @ts-ignore
              if (obj1[prop] !== obj2[prop]) return false;
            }

            return true;
          }

          var InlineBlot =
          /** @class */
          function (_super) {
            __extends(InlineBlot, _super);

            function InlineBlot() {
              return _super !== null && _super.apply(this, arguments) || this;
            }

            InlineBlot.formats = function (domNode) {
              if (domNode.tagName === InlineBlot.tagName) return undefined;
              return _super.formats.call(this, domNode);
            };

            InlineBlot.prototype.format = function (name, value) {
              var _this = this;

              if (name === this.statics.blotName && !value) {
                this.children.forEach(function (child) {
                  if (!(child instanceof format_1.default)) {
                    child = child.wrap(InlineBlot.blotName, true);
                  }

                  _this.attributes.copy(child);
                });
                this.unwrap();
              } else {
                _super.prototype.format.call(this, name, value);
              }
            };

            InlineBlot.prototype.formatAt = function (index, length, name, value) {
              if (this.formats()[name] != null || Registry.query(name, Registry.Scope.ATTRIBUTE)) {
                var blot = this.isolate(index, length);
                blot.format(name, value);
              } else {
                _super.prototype.formatAt.call(this, index, length, name, value);
              }
            };

            InlineBlot.prototype.optimize = function (context) {
              _super.prototype.optimize.call(this, context);

              var formats = this.formats();

              if (Object.keys(formats).length === 0) {
                return this.unwrap(); // unformatted span
              }

              var next = this.next;

              if (next instanceof InlineBlot && next.prev === this && isEqual(formats, next.formats())) {
                next.moveChildren(this);
                next.remove();
              }
            };

            InlineBlot.blotName = 'inline';
            InlineBlot.scope = Registry.Scope.INLINE_BLOT;
            InlineBlot.tagName = 'SPAN';
            return InlineBlot;
          }(format_1.default);

          exports.default = InlineBlot;
          /***/
        },
        /* 47 */

        /***/
        function (module, exports, __webpack_require__) {

          var __extends = this && this.__extends || function () {
            var extendStatics = Object.setPrototypeOf || {
              __proto__: []
            } instanceof Array && function (d, b) {
              d.__proto__ = b;
            } || function (d, b) {
              for (var p in b) {
                if (b.hasOwnProperty(p)) d[p] = b[p];
              }
            };

            return function (d, b) {
              extendStatics(d, b);

              function __() {
                this.constructor = d;
              }

              d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
          }();

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var format_1 = __webpack_require__(18);

          var Registry = __webpack_require__(1);

          var BlockBlot =
          /** @class */
          function (_super) {
            __extends(BlockBlot, _super);

            function BlockBlot() {
              return _super !== null && _super.apply(this, arguments) || this;
            }

            BlockBlot.formats = function (domNode) {
              var tagName = Registry.query(BlockBlot.blotName).tagName;
              if (domNode.tagName === tagName) return undefined;
              return _super.formats.call(this, domNode);
            };

            BlockBlot.prototype.format = function (name, value) {
              if (Registry.query(name, Registry.Scope.BLOCK) == null) {
                return;
              } else if (name === this.statics.blotName && !value) {
                this.replaceWith(BlockBlot.blotName);
              } else {
                _super.prototype.format.call(this, name, value);
              }
            };

            BlockBlot.prototype.formatAt = function (index, length, name, value) {
              if (Registry.query(name, Registry.Scope.BLOCK) != null) {
                this.format(name, value);
              } else {
                _super.prototype.formatAt.call(this, index, length, name, value);
              }
            };

            BlockBlot.prototype.insertAt = function (index, value, def) {
              if (def == null || Registry.query(value, Registry.Scope.INLINE) != null) {
                // Insert text or inline
                _super.prototype.insertAt.call(this, index, value, def);
              } else {
                var after = this.split(index);
                var blot = Registry.create(value, def);
                after.parent.insertBefore(blot, after);
              }
            };

            BlockBlot.prototype.update = function (mutations, context) {
              if (navigator.userAgent.match(/Trident/)) {
                this.build();
              } else {
                _super.prototype.update.call(this, mutations, context);
              }
            };

            BlockBlot.blotName = 'block';
            BlockBlot.scope = Registry.Scope.BLOCK_BLOT;
            BlockBlot.tagName = 'P';
            return BlockBlot;
          }(format_1.default);

          exports.default = BlockBlot;
          /***/
        },
        /* 48 */

        /***/
        function (module, exports, __webpack_require__) {

          var __extends = this && this.__extends || function () {
            var extendStatics = Object.setPrototypeOf || {
              __proto__: []
            } instanceof Array && function (d, b) {
              d.__proto__ = b;
            } || function (d, b) {
              for (var p in b) {
                if (b.hasOwnProperty(p)) d[p] = b[p];
              }
            };

            return function (d, b) {
              extendStatics(d, b);

              function __() {
                this.constructor = d;
              }

              d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
          }();

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var leaf_1 = __webpack_require__(19);

          var EmbedBlot =
          /** @class */
          function (_super) {
            __extends(EmbedBlot, _super);

            function EmbedBlot() {
              return _super !== null && _super.apply(this, arguments) || this;
            }

            EmbedBlot.formats = function (domNode) {
              return undefined;
            };

            EmbedBlot.prototype.format = function (name, value) {
              // super.formatAt wraps, which is what we want in general,
              // but this allows subclasses to overwrite for formats
              // that just apply to particular embeds
              _super.prototype.formatAt.call(this, 0, this.length(), name, value);
            };

            EmbedBlot.prototype.formatAt = function (index, length, name, value) {
              if (index === 0 && length === this.length()) {
                this.format(name, value);
              } else {
                _super.prototype.formatAt.call(this, index, length, name, value);
              }
            };

            EmbedBlot.prototype.formats = function () {
              return this.statics.formats(this.domNode);
            };

            return EmbedBlot;
          }(leaf_1.default);

          exports.default = EmbedBlot;
          /***/
        },
        /* 49 */

        /***/
        function (module, exports, __webpack_require__) {

          var __extends = this && this.__extends || function () {
            var extendStatics = Object.setPrototypeOf || {
              __proto__: []
            } instanceof Array && function (d, b) {
              d.__proto__ = b;
            } || function (d, b) {
              for (var p in b) {
                if (b.hasOwnProperty(p)) d[p] = b[p];
              }
            };

            return function (d, b) {
              extendStatics(d, b);

              function __() {
                this.constructor = d;
              }

              d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
          }();

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var leaf_1 = __webpack_require__(19);

          var Registry = __webpack_require__(1);

          var TextBlot =
          /** @class */
          function (_super) {
            __extends(TextBlot, _super);

            function TextBlot(node) {
              var _this = _super.call(this, node) || this;

              _this.text = _this.statics.value(_this.domNode);
              return _this;
            }

            TextBlot.create = function (value) {
              return document.createTextNode(value);
            };

            TextBlot.value = function (domNode) {
              var text = domNode.data; // @ts-ignore

              if (text['normalize']) text = text['normalize']();
              return text;
            };

            TextBlot.prototype.deleteAt = function (index, length) {
              this.domNode.data = this.text = this.text.slice(0, index) + this.text.slice(index + length);
            };

            TextBlot.prototype.index = function (node, offset) {
              if (this.domNode === node) {
                return offset;
              }

              return -1;
            };

            TextBlot.prototype.insertAt = function (index, value, def) {
              if (def == null) {
                this.text = this.text.slice(0, index) + value + this.text.slice(index);
                this.domNode.data = this.text;
              } else {
                _super.prototype.insertAt.call(this, index, value, def);
              }
            };

            TextBlot.prototype.length = function () {
              return this.text.length;
            };

            TextBlot.prototype.optimize = function (context) {
              _super.prototype.optimize.call(this, context);

              this.text = this.statics.value(this.domNode);

              if (this.text.length === 0) {
                this.remove();
              } else if (this.next instanceof TextBlot && this.next.prev === this) {
                this.insertAt(this.length(), this.next.value());
                this.next.remove();
              }
            };

            TextBlot.prototype.position = function (index, inclusive) {

              return [this.domNode, index];
            };

            TextBlot.prototype.split = function (index, force) {
              if (force === void 0) {
                force = false;
              }

              if (!force) {
                if (index === 0) return this;
                if (index === this.length()) return this.next;
              }

              var after = Registry.create(this.domNode.splitText(index));
              this.parent.insertBefore(after, this.next);
              this.text = this.statics.value(this.domNode);
              return after;
            };

            TextBlot.prototype.update = function (mutations, context) {
              var _this = this;

              if (mutations.some(function (mutation) {
                return mutation.type === 'characterData' && mutation.target === _this.domNode;
              })) {
                this.text = this.statics.value(this.domNode);
              }
            };

            TextBlot.prototype.value = function () {
              return this.text;
            };

            TextBlot.blotName = 'text';
            TextBlot.scope = Registry.Scope.INLINE_BLOT;
            return TextBlot;
          }(leaf_1.default);

          exports.default = TextBlot;
          /***/
        },
        /* 50 */

        /***/
        function (module, exports, __webpack_require__) {

          var elem = document.createElement('div');
          elem.classList.toggle('test-class', false);

          if (elem.classList.contains('test-class')) {
            var _toggle = DOMTokenList.prototype.toggle;

            DOMTokenList.prototype.toggle = function (token, force) {
              if (arguments.length > 1 && !this.contains(token) === !force) {
                return force;
              } else {
                return _toggle.call(this, token);
              }
            };
          }

          if (!String.prototype.startsWith) {
            String.prototype.startsWith = function (searchString, position) {
              position = position || 0;
              return this.substr(position, searchString.length) === searchString;
            };
          }

          if (!String.prototype.endsWith) {
            String.prototype.endsWith = function (searchString, position) {
              var subjectString = this.toString();

              if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
                position = subjectString.length;
              }

              position -= searchString.length;
              var lastIndex = subjectString.indexOf(searchString, position);
              return lastIndex !== -1 && lastIndex === position;
            };
          }

          if (!Array.prototype.find) {
            Object.defineProperty(Array.prototype, "find", {
              value: function value(predicate) {
                if (this === null) {
                  throw new TypeError('Array.prototype.find called on null or undefined');
                }

                if (typeof predicate !== 'function') {
                  throw new TypeError('predicate must be a function');
                }

                var list = Object(this);
                var length = list.length >>> 0;
                var thisArg = arguments[1];
                var value;

                for (var i = 0; i < length; i++) {
                  value = list[i];

                  if (predicate.call(thisArg, value, i, list)) {
                    return value;
                  }
                }

                return undefined;
              }
            });
          }

          document.addEventListener("DOMContentLoaded", function () {
            // Disable resizing in Firefox
            document.execCommand("enableObjectResizing", false, false); // Disable automatic linkifying in IE11

            document.execCommand("autoUrlDetect", false, false);
          });
          /***/
        },
        /* 51 */

        /***/
        function (module, exports) {
          /**
           * This library modifies the diff-patch-match library by Neil Fraser
           * by removing the patch and match functionality and certain advanced
           * options in the diff function. The original license is as follows:
           *
           * ===
           *
           * Diff Match and Patch
           *
           * Copyright 2006 Google Inc.
           * http://code.google.com/p/google-diff-match-patch/
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */

          /**
           * The data structure representing a diff is an array of tuples:
           * [[DIFF_DELETE, 'Hello'], [DIFF_INSERT, 'Goodbye'], [DIFF_EQUAL, ' world.']]
           * which means: delete 'Hello', add 'Goodbye' and keep ' world.'
           */
          var DIFF_DELETE = -1;
          var DIFF_INSERT = 1;
          var DIFF_EQUAL = 0;
          /**
           * Find the differences between two texts.  Simplifies the problem by stripping
           * any common prefix or suffix off the texts before diffing.
           * @param {string} text1 Old string to be diffed.
           * @param {string} text2 New string to be diffed.
           * @param {Int} cursor_pos Expected edit position in text1 (optional)
           * @return {Array} Array of diff tuples.
           */

          function diff_main(text1, text2, cursor_pos) {
            // Check for equality (speedup).
            if (text1 == text2) {
              if (text1) {
                return [[DIFF_EQUAL, text1]];
              }

              return [];
            } // Check cursor_pos within bounds


            if (cursor_pos < 0 || text1.length < cursor_pos) {
              cursor_pos = null;
            } // Trim off common prefix (speedup).


            var commonlength = diff_commonPrefix(text1, text2);
            var commonprefix = text1.substring(0, commonlength);
            text1 = text1.substring(commonlength);
            text2 = text2.substring(commonlength); // Trim off common suffix (speedup).

            commonlength = diff_commonSuffix(text1, text2);
            var commonsuffix = text1.substring(text1.length - commonlength);
            text1 = text1.substring(0, text1.length - commonlength);
            text2 = text2.substring(0, text2.length - commonlength); // Compute the diff on the middle block.

            var diffs = diff_compute_(text1, text2); // Restore the prefix and suffix.

            if (commonprefix) {
              diffs.unshift([DIFF_EQUAL, commonprefix]);
            }

            if (commonsuffix) {
              diffs.push([DIFF_EQUAL, commonsuffix]);
            }

            diff_cleanupMerge(diffs);

            if (cursor_pos != null) {
              diffs = fix_cursor(diffs, cursor_pos);
            }

            diffs = fix_emoji(diffs);
            return diffs;
          }
          /**
           * Find the differences between two texts.  Assumes that the texts do not
           * have any common prefix or suffix.
           * @param {string} text1 Old string to be diffed.
           * @param {string} text2 New string to be diffed.
           * @return {Array} Array of diff tuples.
           */

          function diff_compute_(text1, text2) {
            var diffs;

            if (!text1) {
              // Just add some text (speedup).
              return [[DIFF_INSERT, text2]];
            }

            if (!text2) {
              // Just delete some text (speedup).
              return [[DIFF_DELETE, text1]];
            }

            var longtext = text1.length > text2.length ? text1 : text2;
            var shorttext = text1.length > text2.length ? text2 : text1;
            var i = longtext.indexOf(shorttext);

            if (i != -1) {
              // Shorter text is inside the longer text (speedup).
              diffs = [[DIFF_INSERT, longtext.substring(0, i)], [DIFF_EQUAL, shorttext], [DIFF_INSERT, longtext.substring(i + shorttext.length)]]; // Swap insertions for deletions if diff is reversed.

              if (text1.length > text2.length) {
                diffs[0][0] = diffs[2][0] = DIFF_DELETE;
              }

              return diffs;
            }

            if (shorttext.length == 1) {
              // Single character string.
              // After the previous speedup, the character can't be an equality.
              return [[DIFF_DELETE, text1], [DIFF_INSERT, text2]];
            } // Check to see if the problem can be split in two.


            var hm = diff_halfMatch_(text1, text2);

            if (hm) {
              // A half-match was found, sort out the return data.
              var text1_a = hm[0];
              var text1_b = hm[1];
              var text2_a = hm[2];
              var text2_b = hm[3];
              var mid_common = hm[4]; // Send both pairs off for separate processing.

              var diffs_a = diff_main(text1_a, text2_a);
              var diffs_b = diff_main(text1_b, text2_b); // Merge the results.

              return diffs_a.concat([[DIFF_EQUAL, mid_common]], diffs_b);
            }

            return diff_bisect_(text1, text2);
          }
          /**
           * Find the 'middle snake' of a diff, split the problem in two
           * and return the recursively constructed diff.
           * See Myers 1986 paper: An O(ND) Difference Algorithm and Its Variations.
           * @param {string} text1 Old string to be diffed.
           * @param {string} text2 New string to be diffed.
           * @return {Array} Array of diff tuples.
           * @private
           */

          function diff_bisect_(text1, text2) {
            // Cache the text lengths to prevent multiple calls.
            var text1_length = text1.length;
            var text2_length = text2.length;
            var max_d = Math.ceil((text1_length + text2_length) / 2);
            var v_offset = max_d;
            var v_length = 2 * max_d;
            var v1 = new Array(v_length);
            var v2 = new Array(v_length); // Setting all elements to -1 is faster in Chrome & Firefox than mixing
            // integers and undefined.

            for (var x = 0; x < v_length; x++) {
              v1[x] = -1;
              v2[x] = -1;
            }

            v1[v_offset + 1] = 0;
            v2[v_offset + 1] = 0;
            var delta = text1_length - text2_length; // If the total number of characters is odd, then the front path will collide
            // with the reverse path.

            var front = delta % 2 != 0; // Offsets for start and end of k loop.
            // Prevents mapping of space beyond the grid.

            var k1start = 0;
            var k1end = 0;
            var k2start = 0;
            var k2end = 0;

            for (var d = 0; d < max_d; d++) {
              // Walk the front path one step.
              for (var k1 = -d + k1start; k1 <= d - k1end; k1 += 2) {
                var k1_offset = v_offset + k1;
                var x1;

                if (k1 == -d || k1 != d && v1[k1_offset - 1] < v1[k1_offset + 1]) {
                  x1 = v1[k1_offset + 1];
                } else {
                  x1 = v1[k1_offset - 1] + 1;
                }

                var y1 = x1 - k1;

                while (x1 < text1_length && y1 < text2_length && text1.charAt(x1) == text2.charAt(y1)) {
                  x1++;
                  y1++;
                }

                v1[k1_offset] = x1;

                if (x1 > text1_length) {
                  // Ran off the right of the graph.
                  k1end += 2;
                } else if (y1 > text2_length) {
                  // Ran off the bottom of the graph.
                  k1start += 2;
                } else if (front) {
                  var k2_offset = v_offset + delta - k1;

                  if (k2_offset >= 0 && k2_offset < v_length && v2[k2_offset] != -1) {
                    // Mirror x2 onto top-left coordinate system.
                    var x2 = text1_length - v2[k2_offset];

                    if (x1 >= x2) {
                      // Overlap detected.
                      return diff_bisectSplit_(text1, text2, x1, y1);
                    }
                  }
                }
              } // Walk the reverse path one step.


              for (var k2 = -d + k2start; k2 <= d - k2end; k2 += 2) {
                var k2_offset = v_offset + k2;
                var x2;

                if (k2 == -d || k2 != d && v2[k2_offset - 1] < v2[k2_offset + 1]) {
                  x2 = v2[k2_offset + 1];
                } else {
                  x2 = v2[k2_offset - 1] + 1;
                }

                var y2 = x2 - k2;

                while (x2 < text1_length && y2 < text2_length && text1.charAt(text1_length - x2 - 1) == text2.charAt(text2_length - y2 - 1)) {
                  x2++;
                  y2++;
                }

                v2[k2_offset] = x2;

                if (x2 > text1_length) {
                  // Ran off the left of the graph.
                  k2end += 2;
                } else if (y2 > text2_length) {
                  // Ran off the top of the graph.
                  k2start += 2;
                } else if (!front) {
                  var k1_offset = v_offset + delta - k2;

                  if (k1_offset >= 0 && k1_offset < v_length && v1[k1_offset] != -1) {
                    var x1 = v1[k1_offset];
                    var y1 = v_offset + x1 - k1_offset; // Mirror x2 onto top-left coordinate system.

                    x2 = text1_length - x2;

                    if (x1 >= x2) {
                      // Overlap detected.
                      return diff_bisectSplit_(text1, text2, x1, y1);
                    }
                  }
                }
              }
            } // Diff took too long and hit the deadline or
            // number of diffs equals number of characters, no commonality at all.


            return [[DIFF_DELETE, text1], [DIFF_INSERT, text2]];
          }
          /**
           * Given the location of the 'middle snake', split the diff in two parts
           * and recurse.
           * @param {string} text1 Old string to be diffed.
           * @param {string} text2 New string to be diffed.
           * @param {number} x Index of split point in text1.
           * @param {number} y Index of split point in text2.
           * @return {Array} Array of diff tuples.
           */

          function diff_bisectSplit_(text1, text2, x, y) {
            var text1a = text1.substring(0, x);
            var text2a = text2.substring(0, y);
            var text1b = text1.substring(x);
            var text2b = text2.substring(y); // Compute both diffs serially.

            var diffs = diff_main(text1a, text2a);
            var diffsb = diff_main(text1b, text2b);
            return diffs.concat(diffsb);
          }
          /**
           * Determine the common prefix of two strings.
           * @param {string} text1 First string.
           * @param {string} text2 Second string.
           * @return {number} The number of characters common to the start of each
           *     string.
           */

          function diff_commonPrefix(text1, text2) {
            // Quick check for common null cases.
            if (!text1 || !text2 || text1.charAt(0) != text2.charAt(0)) {
              return 0;
            } // Binary search.
            // Performance analysis: http://neil.fraser.name/news/2007/10/09/


            var pointermin = 0;
            var pointermax = Math.min(text1.length, text2.length);
            var pointermid = pointermax;
            var pointerstart = 0;

            while (pointermin < pointermid) {
              if (text1.substring(pointerstart, pointermid) == text2.substring(pointerstart, pointermid)) {
                pointermin = pointermid;
                pointerstart = pointermin;
              } else {
                pointermax = pointermid;
              }

              pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
            }

            return pointermid;
          }
          /**
           * Determine the common suffix of two strings.
           * @param {string} text1 First string.
           * @param {string} text2 Second string.
           * @return {number} The number of characters common to the end of each string.
           */

          function diff_commonSuffix(text1, text2) {
            // Quick check for common null cases.
            if (!text1 || !text2 || text1.charAt(text1.length - 1) != text2.charAt(text2.length - 1)) {
              return 0;
            } // Binary search.
            // Performance analysis: http://neil.fraser.name/news/2007/10/09/


            var pointermin = 0;
            var pointermax = Math.min(text1.length, text2.length);
            var pointermid = pointermax;
            var pointerend = 0;

            while (pointermin < pointermid) {
              if (text1.substring(text1.length - pointermid, text1.length - pointerend) == text2.substring(text2.length - pointermid, text2.length - pointerend)) {
                pointermin = pointermid;
                pointerend = pointermin;
              } else {
                pointermax = pointermid;
              }

              pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
            }

            return pointermid;
          }
          /**
           * Do the two texts share a substring which is at least half the length of the
           * longer text?
           * This speedup can produce non-minimal diffs.
           * @param {string} text1 First string.
           * @param {string} text2 Second string.
           * @return {Array.<string>} Five element Array, containing the prefix of
           *     text1, the suffix of text1, the prefix of text2, the suffix of
           *     text2 and the common middle.  Or null if there was no match.
           */

          function diff_halfMatch_(text1, text2) {
            var longtext = text1.length > text2.length ? text1 : text2;
            var shorttext = text1.length > text2.length ? text2 : text1;

            if (longtext.length < 4 || shorttext.length * 2 < longtext.length) {
              return null; // Pointless.
            }
            /**
             * Does a substring of shorttext exist within longtext such that the substring
             * is at least half the length of longtext?
             * Closure, but does not reference any external variables.
             * @param {string} longtext Longer string.
             * @param {string} shorttext Shorter string.
             * @param {number} i Start index of quarter length substring within longtext.
             * @return {Array.<string>} Five element Array, containing the prefix of
             *     longtext, the suffix of longtext, the prefix of shorttext, the suffix
             *     of shorttext and the common middle.  Or null if there was no match.
             * @private
             */


            function diff_halfMatchI_(longtext, shorttext, i) {
              // Start with a 1/4 length substring at position i as a seed.
              var seed = longtext.substring(i, i + Math.floor(longtext.length / 4));
              var j = -1;
              var best_common = '';
              var best_longtext_a, best_longtext_b, best_shorttext_a, best_shorttext_b;

              while ((j = shorttext.indexOf(seed, j + 1)) != -1) {
                var prefixLength = diff_commonPrefix(longtext.substring(i), shorttext.substring(j));
                var suffixLength = diff_commonSuffix(longtext.substring(0, i), shorttext.substring(0, j));

                if (best_common.length < suffixLength + prefixLength) {
                  best_common = shorttext.substring(j - suffixLength, j) + shorttext.substring(j, j + prefixLength);
                  best_longtext_a = longtext.substring(0, i - suffixLength);
                  best_longtext_b = longtext.substring(i + prefixLength);
                  best_shorttext_a = shorttext.substring(0, j - suffixLength);
                  best_shorttext_b = shorttext.substring(j + prefixLength);
                }
              }

              if (best_common.length * 2 >= longtext.length) {
                return [best_longtext_a, best_longtext_b, best_shorttext_a, best_shorttext_b, best_common];
              } else {
                return null;
              }
            } // First check if the second quarter is the seed for a half-match.


            var hm1 = diff_halfMatchI_(longtext, shorttext, Math.ceil(longtext.length / 4)); // Check again based on the third quarter.

            var hm2 = diff_halfMatchI_(longtext, shorttext, Math.ceil(longtext.length / 2));
            var hm;

            if (!hm1 && !hm2) {
              return null;
            } else if (!hm2) {
              hm = hm1;
            } else if (!hm1) {
              hm = hm2;
            } else {
              // Both matched.  Select the longest.
              hm = hm1[4].length > hm2[4].length ? hm1 : hm2;
            } // A half-match was found, sort out the return data.


            var text1_a, text1_b, text2_a, text2_b;

            if (text1.length > text2.length) {
              text1_a = hm[0];
              text1_b = hm[1];
              text2_a = hm[2];
              text2_b = hm[3];
            } else {
              text2_a = hm[0];
              text2_b = hm[1];
              text1_a = hm[2];
              text1_b = hm[3];
            }

            var mid_common = hm[4];
            return [text1_a, text1_b, text2_a, text2_b, mid_common];
          }
          /**
           * Reorder and merge like edit sections.  Merge equalities.
           * Any edit section can move as long as it doesn't cross an equality.
           * @param {Array} diffs Array of diff tuples.
           */

          function diff_cleanupMerge(diffs) {
            diffs.push([DIFF_EQUAL, '']); // Add a dummy entry at the end.

            var pointer = 0;
            var count_delete = 0;
            var count_insert = 0;
            var text_delete = '';
            var text_insert = '';
            var commonlength;

            while (pointer < diffs.length) {
              switch (diffs[pointer][0]) {
                case DIFF_INSERT:
                  count_insert++;
                  text_insert += diffs[pointer][1];
                  pointer++;
                  break;

                case DIFF_DELETE:
                  count_delete++;
                  text_delete += diffs[pointer][1];
                  pointer++;
                  break;

                case DIFF_EQUAL:
                  // Upon reaching an equality, check for prior redundancies.
                  if (count_delete + count_insert > 1) {
                    if (count_delete !== 0 && count_insert !== 0) {
                      // Factor out any common prefixies.
                      commonlength = diff_commonPrefix(text_insert, text_delete);

                      if (commonlength !== 0) {
                        if (pointer - count_delete - count_insert > 0 && diffs[pointer - count_delete - count_insert - 1][0] == DIFF_EQUAL) {
                          diffs[pointer - count_delete - count_insert - 1][1] += text_insert.substring(0, commonlength);
                        } else {
                          diffs.splice(0, 0, [DIFF_EQUAL, text_insert.substring(0, commonlength)]);
                          pointer++;
                        }

                        text_insert = text_insert.substring(commonlength);
                        text_delete = text_delete.substring(commonlength);
                      } // Factor out any common suffixies.


                      commonlength = diff_commonSuffix(text_insert, text_delete);

                      if (commonlength !== 0) {
                        diffs[pointer][1] = text_insert.substring(text_insert.length - commonlength) + diffs[pointer][1];
                        text_insert = text_insert.substring(0, text_insert.length - commonlength);
                        text_delete = text_delete.substring(0, text_delete.length - commonlength);
                      }
                    } // Delete the offending records and add the merged ones.


                    if (count_delete === 0) {
                      diffs.splice(pointer - count_insert, count_delete + count_insert, [DIFF_INSERT, text_insert]);
                    } else if (count_insert === 0) {
                      diffs.splice(pointer - count_delete, count_delete + count_insert, [DIFF_DELETE, text_delete]);
                    } else {
                      diffs.splice(pointer - count_delete - count_insert, count_delete + count_insert, [DIFF_DELETE, text_delete], [DIFF_INSERT, text_insert]);
                    }

                    pointer = pointer - count_delete - count_insert + (count_delete ? 1 : 0) + (count_insert ? 1 : 0) + 1;
                  } else if (pointer !== 0 && diffs[pointer - 1][0] == DIFF_EQUAL) {
                    // Merge this equality with the previous one.
                    diffs[pointer - 1][1] += diffs[pointer][1];
                    diffs.splice(pointer, 1);
                  } else {
                    pointer++;
                  }

                  count_insert = 0;
                  count_delete = 0;
                  text_delete = '';
                  text_insert = '';
                  break;
              }
            }

            if (diffs[diffs.length - 1][1] === '') {
              diffs.pop(); // Remove the dummy entry at the end.
            } // Second pass: look for single edits surrounded on both sides by equalities
            // which can be shifted sideways to eliminate an equality.
            // e.g: A<ins>BA</ins>C -> <ins>AB</ins>AC


            var changes = false;
            pointer = 1; // Intentionally ignore the first and last element (don't need checking).

            while (pointer < diffs.length - 1) {
              if (diffs[pointer - 1][0] == DIFF_EQUAL && diffs[pointer + 1][0] == DIFF_EQUAL) {
                // This is a single edit surrounded by equalities.
                if (diffs[pointer][1].substring(diffs[pointer][1].length - diffs[pointer - 1][1].length) == diffs[pointer - 1][1]) {
                  // Shift the edit over the previous equality.
                  diffs[pointer][1] = diffs[pointer - 1][1] + diffs[pointer][1].substring(0, diffs[pointer][1].length - diffs[pointer - 1][1].length);
                  diffs[pointer + 1][1] = diffs[pointer - 1][1] + diffs[pointer + 1][1];
                  diffs.splice(pointer - 1, 1);
                  changes = true;
                } else if (diffs[pointer][1].substring(0, diffs[pointer + 1][1].length) == diffs[pointer + 1][1]) {
                  // Shift the edit over the next equality.
                  diffs[pointer - 1][1] += diffs[pointer + 1][1];
                  diffs[pointer][1] = diffs[pointer][1].substring(diffs[pointer + 1][1].length) + diffs[pointer + 1][1];
                  diffs.splice(pointer + 1, 1);
                  changes = true;
                }
              }

              pointer++;
            } // If shifts were made, the diff needs reordering and another shift sweep.


            if (changes) {
              diff_cleanupMerge(diffs);
            }
          }
          var diff = diff_main;
          diff.INSERT = DIFF_INSERT;
          diff.DELETE = DIFF_DELETE;
          diff.EQUAL = DIFF_EQUAL;
          module.exports = diff;
          /*
           * Modify a diff such that the cursor position points to the start of a change:
           * E.g.
           *   cursor_normalize_diff([[DIFF_EQUAL, 'abc']], 1)
           *     => [1, [[DIFF_EQUAL, 'a'], [DIFF_EQUAL, 'bc']]]
           *   cursor_normalize_diff([[DIFF_INSERT, 'new'], [DIFF_DELETE, 'xyz']], 2)
           *     => [2, [[DIFF_INSERT, 'new'], [DIFF_DELETE, 'xy'], [DIFF_DELETE, 'z']]]
           *
           * @param {Array} diffs Array of diff tuples
           * @param {Int} cursor_pos Suggested edit position. Must not be out of bounds!
           * @return {Array} A tuple [cursor location in the modified diff, modified diff]
           */

          function cursor_normalize_diff(diffs, cursor_pos) {
            if (cursor_pos === 0) {
              return [DIFF_EQUAL, diffs];
            }

            for (var current_pos = 0, i = 0; i < diffs.length; i++) {
              var d = diffs[i];

              if (d[0] === DIFF_DELETE || d[0] === DIFF_EQUAL) {
                var next_pos = current_pos + d[1].length;

                if (cursor_pos === next_pos) {
                  return [i + 1, diffs];
                } else if (cursor_pos < next_pos) {
                  // copy to prevent side effects
                  diffs = diffs.slice(); // split d into two diff changes

                  var split_pos = cursor_pos - current_pos;
                  var d_left = [d[0], d[1].slice(0, split_pos)];
                  var d_right = [d[0], d[1].slice(split_pos)];
                  diffs.splice(i, 1, d_left, d_right);
                  return [i + 1, diffs];
                } else {
                  current_pos = next_pos;
                }
              }
            }

            throw new Error('cursor_pos is out of bounds!');
          }
          /*
           * Modify a diff such that the edit position is "shifted" to the proposed edit location (cursor_position).
           *
           * Case 1)
           *   Check if a naive shift is possible:
           *     [0, X], [ 1, Y] -> [ 1, Y], [0, X]    (if X + Y === Y + X)
           *     [0, X], [-1, Y] -> [-1, Y], [0, X]    (if X + Y === Y + X) - holds same result
           * Case 2)
           *   Check if the following shifts are possible:
           *     [0, 'pre'], [ 1, 'prefix'] -> [ 1, 'pre'], [0, 'pre'], [ 1, 'fix']
           *     [0, 'pre'], [-1, 'prefix'] -> [-1, 'pre'], [0, 'pre'], [-1, 'fix']
           *         ^            ^
           *         d          d_next
           *
           * @param {Array} diffs Array of diff tuples
           * @param {Int} cursor_pos Suggested edit position. Must not be out of bounds!
           * @return {Array} Array of diff tuples
           */


          function fix_cursor(diffs, cursor_pos) {
            var norm = cursor_normalize_diff(diffs, cursor_pos);
            var ndiffs = norm[1];
            var cursor_pointer = norm[0];
            var d = ndiffs[cursor_pointer];
            var d_next = ndiffs[cursor_pointer + 1];

            if (d == null) {
              // Text was deleted from end of original string,
              // cursor is now out of bounds in new string
              return diffs;
            } else if (d[0] !== DIFF_EQUAL) {
              // A modification happened at the cursor location.
              // This is the expected outcome, so we can return the original diff.
              return diffs;
            } else {
              if (d_next != null && d[1] + d_next[1] === d_next[1] + d[1]) {
                // Case 1)
                // It is possible to perform a naive shift
                ndiffs.splice(cursor_pointer, 2, d_next, d);
                return merge_tuples(ndiffs, cursor_pointer, 2);
              } else if (d_next != null && d_next[1].indexOf(d[1]) === 0) {
                // Case 2)
                // d[1] is a prefix of d_next[1]
                // We can assume that d_next[0] !== 0, since d[0] === 0
                // Shift edit locations..
                ndiffs.splice(cursor_pointer, 2, [d_next[0], d[1]], [0, d[1]]);
                var suffix = d_next[1].slice(d[1].length);

                if (suffix.length > 0) {
                  ndiffs.splice(cursor_pointer + 2, 0, [d_next[0], suffix]);
                }

                return merge_tuples(ndiffs, cursor_pointer, 3);
              } else {
                // Not possible to perform any modification
                return diffs;
              }
            }
          }
          /*
           * Check diff did not split surrogate pairs.
           * Ex. [0, '\uD83D'], [-1, '\uDC36'], [1, '\uDC2F'] -> [-1, '\uD83D\uDC36'], [1, '\uD83D\uDC2F']
           *     '\uD83D\uDC36' === '🐶', '\uD83D\uDC2F' === '🐯'
           *
           * @param {Array} diffs Array of diff tuples
           * @return {Array} Array of diff tuples
           */


          function fix_emoji(diffs) {
            var compact = false;

            var starts_with_pair_end = function starts_with_pair_end(str) {
              return str.charCodeAt(0) >= 0xDC00 && str.charCodeAt(0) <= 0xDFFF;
            };

            var ends_with_pair_start = function ends_with_pair_start(str) {
              return str.charCodeAt(str.length - 1) >= 0xD800 && str.charCodeAt(str.length - 1) <= 0xDBFF;
            };

            for (var i = 2; i < diffs.length; i += 1) {
              if (diffs[i - 2][0] === DIFF_EQUAL && ends_with_pair_start(diffs[i - 2][1]) && diffs[i - 1][0] === DIFF_DELETE && starts_with_pair_end(diffs[i - 1][1]) && diffs[i][0] === DIFF_INSERT && starts_with_pair_end(diffs[i][1])) {
                compact = true;
                diffs[i - 1][1] = diffs[i - 2][1].slice(-1) + diffs[i - 1][1];
                diffs[i][1] = diffs[i - 2][1].slice(-1) + diffs[i][1];
                diffs[i - 2][1] = diffs[i - 2][1].slice(0, -1);
              }
            }

            if (!compact) {
              return diffs;
            }

            var fixed_diffs = [];

            for (var i = 0; i < diffs.length; i += 1) {
              if (diffs[i][1].length > 0) {
                fixed_diffs.push(diffs[i]);
              }
            }

            return fixed_diffs;
          }
          /*
           * Try to merge tuples with their neigbors in a given range.
           * E.g. [0, 'a'], [0, 'b'] -> [0, 'ab']
           *
           * @param {Array} diffs Array of diff tuples.
           * @param {Int} start Position of the first element to merge (diffs[start] is also merged with diffs[start - 1]).
           * @param {Int} length Number of consecutive elements to check.
           * @return {Array} Array of merged diff tuples.
           */


          function merge_tuples(diffs, start, length) {
            // Check from (start-1) to (start+length).
            for (var i = start + length - 1; i >= 0 && i >= start - 1; i--) {
              if (i + 1 < diffs.length) {
                var left_d = diffs[i];
                var right_d = diffs[i + 1];

                if (left_d[0] === right_d[1]) {
                  diffs.splice(i, 2, [left_d[0], left_d[1] + right_d[1]]);
                }
              }
            }

            return diffs;
          }
          /***/

        },
        /* 52 */

        /***/
        function (module, exports) {
          exports = module.exports = typeof Object.keys === 'function' ? Object.keys : shim;
          exports.shim = shim;

          function shim(obj) {
            var keys = [];

            for (var key in obj) {
              keys.push(key);
            }

            return keys;
          }
          /***/

        },
        /* 53 */

        /***/
        function (module, exports) {
          var supportsArgumentsClass = function () {
            return Object.prototype.toString.call(arguments);
          }() == '[object Arguments]';

          exports = module.exports = supportsArgumentsClass ? supported : unsupported;
          exports.supported = supported;

          function supported(object) {
            return Object.prototype.toString.call(object) == '[object Arguments]';
          }
          exports.unsupported = unsupported;

          function unsupported(object) {
            return object && _typeof(object) == 'object' && typeof object.length == 'number' && Object.prototype.hasOwnProperty.call(object, 'callee') && !Object.prototype.propertyIsEnumerable.call(object, 'callee') || false;
          }
          /***/
        },
        /* 54 */

        /***/
        function (module, exports) {

          var has = Object.prototype.hasOwnProperty,
              prefix = '~';
          /**
           * Constructor to create a storage for our `EE` objects.
           * An `Events` instance is a plain object whose properties are event names.
           *
           * @constructor
           * @api private
           */

          function Events() {} //
          // We try to not inherit from `Object.prototype`. In some engines creating an
          // instance in this way is faster than calling `Object.create(null)` directly.
          // If `Object.create(null)` is not supported we prefix the event names with a
          // character to make sure that the built-in object properties are not
          // overridden or used as an attack vector.
          //


          if (Object.create) {
            Events.prototype = Object.create(null); //
            // This hack is needed because the `__proto__` property is still inherited in
            // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
            //

            if (!new Events().__proto__) prefix = false;
          }
          /**
           * Representation of a single event listener.
           *
           * @param {Function} fn The listener function.
           * @param {Mixed} context The context to invoke the listener with.
           * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
           * @constructor
           * @api private
           */


          function EE(fn, context, once) {
            this.fn = fn;
            this.context = context;
            this.once = once || false;
          }
          /**
           * Minimal `EventEmitter` interface that is molded against the Node.js
           * `EventEmitter` interface.
           *
           * @constructor
           * @api public
           */


          function EventEmitter() {
            this._events = new Events();
            this._eventsCount = 0;
          }
          /**
           * Return an array listing the events for which the emitter has registered
           * listeners.
           *
           * @returns {Array}
           * @api public
           */


          EventEmitter.prototype.eventNames = function eventNames() {
            var names = [],
                events,
                name;
            if (this._eventsCount === 0) return names;

            for (name in events = this._events) {
              if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
            }

            if (Object.getOwnPropertySymbols) {
              return names.concat(Object.getOwnPropertySymbols(events));
            }

            return names;
          };
          /**
           * Return the listeners registered for a given event.
           *
           * @param {String|Symbol} event The event name.
           * @param {Boolean} exists Only check if there are listeners.
           * @returns {Array|Boolean}
           * @api public
           */


          EventEmitter.prototype.listeners = function listeners(event, exists) {
            var evt = prefix ? prefix + event : event,
                available = this._events[evt];
            if (exists) return !!available;
            if (!available) return [];
            if (available.fn) return [available.fn];

            for (var i = 0, l = available.length, ee = new Array(l); i < l; i++) {
              ee[i] = available[i].fn;
            }

            return ee;
          };
          /**
           * Calls each of the listeners registered for a given event.
           *
           * @param {String|Symbol} event The event name.
           * @returns {Boolean} `true` if the event had listeners, else `false`.
           * @api public
           */


          EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
            var evt = prefix ? prefix + event : event;
            if (!this._events[evt]) return false;
            var listeners = this._events[evt],
                len = arguments.length,
                args,
                i;

            if (listeners.fn) {
              if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

              switch (len) {
                case 1:
                  return listeners.fn.call(listeners.context), true;

                case 2:
                  return listeners.fn.call(listeners.context, a1), true;

                case 3:
                  return listeners.fn.call(listeners.context, a1, a2), true;

                case 4:
                  return listeners.fn.call(listeners.context, a1, a2, a3), true;

                case 5:
                  return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;

                case 6:
                  return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
              }

              for (i = 1, args = new Array(len - 1); i < len; i++) {
                args[i - 1] = arguments[i];
              }

              listeners.fn.apply(listeners.context, args);
            } else {
              var length = listeners.length,
                  j;

              for (i = 0; i < length; i++) {
                if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

                switch (len) {
                  case 1:
                    listeners[i].fn.call(listeners[i].context);
                    break;

                  case 2:
                    listeners[i].fn.call(listeners[i].context, a1);
                    break;

                  case 3:
                    listeners[i].fn.call(listeners[i].context, a1, a2);
                    break;

                  case 4:
                    listeners[i].fn.call(listeners[i].context, a1, a2, a3);
                    break;

                  default:
                    if (!args) for (j = 1, args = new Array(len - 1); j < len; j++) {
                      args[j - 1] = arguments[j];
                    }
                    listeners[i].fn.apply(listeners[i].context, args);
                }
              }
            }

            return true;
          };
          /**
           * Add a listener for a given event.
           *
           * @param {String|Symbol} event The event name.
           * @param {Function} fn The listener function.
           * @param {Mixed} [context=this] The context to invoke the listener with.
           * @returns {EventEmitter} `this`.
           * @api public
           */


          EventEmitter.prototype.on = function on(event, fn, context) {
            var listener = new EE(fn, context || this),
                evt = prefix ? prefix + event : event;
            if (!this._events[evt]) this._events[evt] = listener, this._eventsCount++;else if (!this._events[evt].fn) this._events[evt].push(listener);else this._events[evt] = [this._events[evt], listener];
            return this;
          };
          /**
           * Add a one-time listener for a given event.
           *
           * @param {String|Symbol} event The event name.
           * @param {Function} fn The listener function.
           * @param {Mixed} [context=this] The context to invoke the listener with.
           * @returns {EventEmitter} `this`.
           * @api public
           */


          EventEmitter.prototype.once = function once(event, fn, context) {
            var listener = new EE(fn, context || this, true),
                evt = prefix ? prefix + event : event;
            if (!this._events[evt]) this._events[evt] = listener, this._eventsCount++;else if (!this._events[evt].fn) this._events[evt].push(listener);else this._events[evt] = [this._events[evt], listener];
            return this;
          };
          /**
           * Remove the listeners of a given event.
           *
           * @param {String|Symbol} event The event name.
           * @param {Function} fn Only remove the listeners that match this function.
           * @param {Mixed} context Only remove the listeners that have this context.
           * @param {Boolean} once Only remove one-time listeners.
           * @returns {EventEmitter} `this`.
           * @api public
           */


          EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
            var evt = prefix ? prefix + event : event;
            if (!this._events[evt]) return this;

            if (!fn) {
              if (--this._eventsCount === 0) this._events = new Events();else delete this._events[evt];
              return this;
            }

            var listeners = this._events[evt];

            if (listeners.fn) {
              if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) {
                if (--this._eventsCount === 0) this._events = new Events();else delete this._events[evt];
              }
            } else {
              for (var i = 0, events = [], length = listeners.length; i < length; i++) {
                if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) {
                  events.push(listeners[i]);
                }
              } //
              // Reset the array, or remove it completely if we have no more listeners.
              //


              if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;else if (--this._eventsCount === 0) this._events = new Events();else delete this._events[evt];
            }

            return this;
          };
          /**
           * Remove all listeners, or those of the specified event.
           *
           * @param {String|Symbol} [event] The event name.
           * @returns {EventEmitter} `this`.
           * @api public
           */


          EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
            var evt;

            if (event) {
              evt = prefix ? prefix + event : event;

              if (this._events[evt]) {
                if (--this._eventsCount === 0) this._events = new Events();else delete this._events[evt];
              }
            } else {
              this._events = new Events();
              this._eventsCount = 0;
            }

            return this;
          }; //
          // Alias methods names because people roll like that.
          //


          EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
          EventEmitter.prototype.addListener = EventEmitter.prototype.on; //
          // This function doesn't apply anymore.
          //

          EventEmitter.prototype.setMaxListeners = function setMaxListeners() {
            return this;
          }; //
          // Expose the prefix.
          //


          EventEmitter.prefixed = prefix; //
          // Allow `EventEmitter` to be imported as module namespace.
          //

          EventEmitter.EventEmitter = EventEmitter; //
          // Expose the module.
          //

          if ('undefined' !== typeof module) {
            module.exports = EventEmitter;
          }
          /***/

        },
        /* 55 */

        /***/
        function (module, exports, __webpack_require__) {

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.matchText = exports.matchSpacing = exports.matchNewline = exports.matchBlot = exports.matchAttributor = exports.default = undefined;

          var _typeof$1 = typeof Symbol === "function" && _typeof(Symbol.iterator) === "symbol" ? function (obj) {
            return _typeof(obj);
          } : function (obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof(obj);
          };

          var _slicedToArray = function () {
            function sliceIterator(arr, i) {
              var _arr = [];
              var _n = true;
              var _d = false;
              var _e = undefined;

              try {
                for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                  _arr.push(_s.value);

                  if (i && _arr.length === i) break;
                }
              } catch (err) {
                _d = true;
                _e = err;
              } finally {
                try {
                  if (!_n && _i["return"]) _i["return"]();
                } finally {
                  if (_d) throw _e;
                }
              }

              return _arr;
            }

            return function (arr, i) {
              if (Array.isArray(arr)) {
                return arr;
              } else if (Symbol.iterator in Object(arr)) {
                return sliceIterator(arr, i);
              } else {
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
              }
            };
          }();

          var _createClass = function () {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }

            return function (Constructor, protoProps, staticProps) {
              if (protoProps) defineProperties(Constructor.prototype, protoProps);
              if (staticProps) defineProperties(Constructor, staticProps);
              return Constructor;
            };
          }();

          var _extend2 = __webpack_require__(3);

          var _extend3 = _interopRequireDefault(_extend2);

          var _quillDelta = __webpack_require__(2);

          var _quillDelta2 = _interopRequireDefault(_quillDelta);

          var _parchment = __webpack_require__(0);

          var _parchment2 = _interopRequireDefault(_parchment);

          var _quill = __webpack_require__(5);

          var _quill2 = _interopRequireDefault(_quill);

          var _logger = __webpack_require__(10);

          var _logger2 = _interopRequireDefault(_logger);

          var _module = __webpack_require__(9);

          var _module2 = _interopRequireDefault(_module);

          var _align = __webpack_require__(36);

          var _background = __webpack_require__(37);

          var _code = __webpack_require__(13);

          var _code2 = _interopRequireDefault(_code);

          var _color = __webpack_require__(26);

          var _direction = __webpack_require__(38);

          var _font = __webpack_require__(39);

          var _size = __webpack_require__(40);

          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
              default: obj
            };
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

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }

          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }

            return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
          }

          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
            }

            subClass.prototype = Object.create(superClass && superClass.prototype, {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
              }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
          }

          var debug = (0, _logger2.default)('quill:clipboard');
          var DOM_KEY = '__ql-matcher';
          var CLIPBOARD_CONFIG = [[Node.TEXT_NODE, matchText], [Node.TEXT_NODE, matchNewline], ['br', matchBreak], [Node.ELEMENT_NODE, matchNewline], [Node.ELEMENT_NODE, matchBlot], [Node.ELEMENT_NODE, matchSpacing], [Node.ELEMENT_NODE, matchAttributor], [Node.ELEMENT_NODE, matchStyles], ['li', matchIndent], ['b', matchAlias.bind(matchAlias, 'bold')], ['i', matchAlias.bind(matchAlias, 'italic')], ['style', matchIgnore]];
          var ATTRIBUTE_ATTRIBUTORS = [_align.AlignAttribute, _direction.DirectionAttribute].reduce(function (memo, attr) {
            memo[attr.keyName] = attr;
            return memo;
          }, {});
          var STYLE_ATTRIBUTORS = [_align.AlignStyle, _background.BackgroundStyle, _color.ColorStyle, _direction.DirectionStyle, _font.FontStyle, _size.SizeStyle].reduce(function (memo, attr) {
            memo[attr.keyName] = attr;
            return memo;
          }, {});

          var Clipboard = function (_Module) {
            _inherits(Clipboard, _Module);

            function Clipboard(quill, options) {
              _classCallCheck(this, Clipboard);

              var _this = _possibleConstructorReturn(this, (Clipboard.__proto__ || Object.getPrototypeOf(Clipboard)).call(this, quill, options));

              _this.quill.root.addEventListener('paste', _this.onPaste.bind(_this));

              _this.container = _this.quill.addContainer('ql-clipboard');

              _this.container.setAttribute('contenteditable', true);

              _this.container.setAttribute('tabindex', -1);

              _this.matchers = [];
              CLIPBOARD_CONFIG.concat(_this.options.matchers).forEach(function (_ref) {
                var _ref2 = _slicedToArray(_ref, 2),
                    selector = _ref2[0],
                    matcher = _ref2[1];

                if (!options.matchVisual && matcher === matchSpacing) return;

                _this.addMatcher(selector, matcher);
              });
              return _this;
            }

            _createClass(Clipboard, [{
              key: 'addMatcher',
              value: function addMatcher(selector, matcher) {
                this.matchers.push([selector, matcher]);
              }
            }, {
              key: 'convert',
              value: function convert(html) {
                if (typeof html === 'string') {
                  this.container.innerHTML = html.replace(/\>\r?\n +\</g, '><'); // Remove spaces between tags

                  return this.convert();
                }

                var formats = this.quill.getFormat(this.quill.selection.savedRange.index);

                if (formats[_code2.default.blotName]) {
                  var text = this.container.innerText;
                  this.container.innerHTML = '';
                  return new _quillDelta2.default().insert(text, _defineProperty({}, _code2.default.blotName, formats[_code2.default.blotName]));
                }

                var _prepareMatching = this.prepareMatching(),
                    _prepareMatching2 = _slicedToArray(_prepareMatching, 2),
                    elementMatchers = _prepareMatching2[0],
                    textMatchers = _prepareMatching2[1];

                var delta = traverse(this.container, elementMatchers, textMatchers); // Remove trailing newline

                if (deltaEndsWith(delta, '\n') && delta.ops[delta.ops.length - 1].attributes == null) {
                  delta = delta.compose(new _quillDelta2.default().retain(delta.length() - 1).delete(1));
                }

                debug.log('convert', this.container.innerHTML, delta);
                this.container.innerHTML = '';
                return delta;
              }
            }, {
              key: 'dangerouslyPasteHTML',
              value: function dangerouslyPasteHTML(index, html) {
                var source = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _quill2.default.sources.API;

                if (typeof index === 'string') {
                  this.quill.setContents(this.convert(index), html);
                  this.quill.setSelection(0, _quill2.default.sources.SILENT);
                } else {
                  var paste = this.convert(html);
                  this.quill.updateContents(new _quillDelta2.default().retain(index).concat(paste), source);
                  this.quill.setSelection(index + paste.length(), _quill2.default.sources.SILENT);
                }
              }
            }, {
              key: 'onPaste',
              value: function onPaste(e) {
                var _this2 = this;

                if (e.defaultPrevented || !this.quill.isEnabled()) return;
                var range = this.quill.getSelection();
                var delta = new _quillDelta2.default().retain(range.index);
                var scrollTop = this.quill.scrollingContainer.scrollTop;
                this.container.focus();
                this.quill.selection.update(_quill2.default.sources.SILENT);
                setTimeout(function () {
                  delta = delta.concat(_this2.convert()).delete(range.length);

                  _this2.quill.updateContents(delta, _quill2.default.sources.USER); // range.length contributes to delta.length()


                  _this2.quill.setSelection(delta.length() - range.length, _quill2.default.sources.SILENT);

                  _this2.quill.scrollingContainer.scrollTop = scrollTop;

                  _this2.quill.focus();
                }, 1);
              }
            }, {
              key: 'prepareMatching',
              value: function prepareMatching() {
                var _this3 = this;

                var elementMatchers = [],
                    textMatchers = [];
                this.matchers.forEach(function (pair) {
                  var _pair = _slicedToArray(pair, 2),
                      selector = _pair[0],
                      matcher = _pair[1];

                  switch (selector) {
                    case Node.TEXT_NODE:
                      textMatchers.push(matcher);
                      break;

                    case Node.ELEMENT_NODE:
                      elementMatchers.push(matcher);
                      break;

                    default:
                      [].forEach.call(_this3.container.querySelectorAll(selector), function (node) {
                        // TODO use weakmap
                        node[DOM_KEY] = node[DOM_KEY] || [];
                        node[DOM_KEY].push(matcher);
                      });
                      break;
                  }
                });
                return [elementMatchers, textMatchers];
              }
            }]);

            return Clipboard;
          }(_module2.default);

          Clipboard.DEFAULTS = {
            matchers: [],
            matchVisual: true
          };

          function applyFormat(delta, format, value) {
            if ((typeof format === 'undefined' ? 'undefined' : _typeof$1(format)) === 'object') {
              return Object.keys(format).reduce(function (delta, key) {
                return applyFormat(delta, key, format[key]);
              }, delta);
            } else {
              return delta.reduce(function (delta, op) {
                if (op.attributes && op.attributes[format]) {
                  return delta.push(op);
                } else {
                  return delta.insert(op.insert, (0, _extend3.default)({}, _defineProperty({}, format, value), op.attributes));
                }
              }, new _quillDelta2.default());
            }
          }

          function computeStyle(node) {
            if (node.nodeType !== Node.ELEMENT_NODE) return {};
            var DOM_KEY = '__ql-computed-style';
            return node[DOM_KEY] || (node[DOM_KEY] = window.getComputedStyle(node));
          }

          function deltaEndsWith(delta, text) {
            var endText = "";

            for (var i = delta.ops.length - 1; i >= 0 && endText.length < text.length; --i) {
              var op = delta.ops[i];
              if (typeof op.insert !== 'string') break;
              endText = op.insert + endText;
            }

            return endText.slice(-1 * text.length) === text;
          }

          function isLine(node) {
            if (node.childNodes.length === 0) return false; // Exclude embed blocks

            var style = computeStyle(node);
            return ['block', 'list-item'].indexOf(style.display) > -1;
          }

          function traverse(node, elementMatchers, textMatchers) {
            // Post-order
            if (node.nodeType === node.TEXT_NODE) {
              return textMatchers.reduce(function (delta, matcher) {
                return matcher(node, delta);
              }, new _quillDelta2.default());
            } else if (node.nodeType === node.ELEMENT_NODE) {
              return [].reduce.call(node.childNodes || [], function (delta, childNode) {
                var childrenDelta = traverse(childNode, elementMatchers, textMatchers);

                if (childNode.nodeType === node.ELEMENT_NODE) {
                  childrenDelta = elementMatchers.reduce(function (childrenDelta, matcher) {
                    return matcher(childNode, childrenDelta);
                  }, childrenDelta);
                  childrenDelta = (childNode[DOM_KEY] || []).reduce(function (childrenDelta, matcher) {
                    return matcher(childNode, childrenDelta);
                  }, childrenDelta);
                }

                return delta.concat(childrenDelta);
              }, new _quillDelta2.default());
            } else {
              return new _quillDelta2.default();
            }
          }

          function matchAlias(format, node, delta) {
            return applyFormat(delta, format, true);
          }

          function matchAttributor(node, delta) {
            var attributes = _parchment2.default.Attributor.Attribute.keys(node);

            var classes = _parchment2.default.Attributor.Class.keys(node);

            var styles = _parchment2.default.Attributor.Style.keys(node);

            var formats = {};
            attributes.concat(classes).concat(styles).forEach(function (name) {
              var attr = _parchment2.default.query(name, _parchment2.default.Scope.ATTRIBUTE);

              if (attr != null) {
                formats[attr.attrName] = attr.value(node);
                if (formats[attr.attrName]) return;
              }

              attr = ATTRIBUTE_ATTRIBUTORS[name];

              if (attr != null && (attr.attrName === name || attr.keyName === name)) {
                formats[attr.attrName] = attr.value(node) || undefined;
              }

              attr = STYLE_ATTRIBUTORS[name];

              if (attr != null && (attr.attrName === name || attr.keyName === name)) {
                attr = STYLE_ATTRIBUTORS[name];
                formats[attr.attrName] = attr.value(node) || undefined;
              }
            });

            if (Object.keys(formats).length > 0) {
              delta = applyFormat(delta, formats);
            }

            return delta;
          }

          function matchBlot(node, delta) {
            var match = _parchment2.default.query(node);

            if (match == null) return delta;

            if (match.prototype instanceof _parchment2.default.Embed) {
              var embed = {};
              var value = match.value(node);

              if (value != null) {
                embed[match.blotName] = value;
                delta = new _quillDelta2.default().insert(embed, match.formats(node));
              }
            } else if (typeof match.formats === 'function') {
              delta = applyFormat(delta, match.blotName, match.formats(node));
            }

            return delta;
          }

          function matchBreak(node, delta) {
            if (!deltaEndsWith(delta, '\n')) {
              delta.insert('\n');
            }

            return delta;
          }

          function matchIgnore() {
            return new _quillDelta2.default();
          }

          function matchIndent(node, delta) {
            var match = _parchment2.default.query(node);

            if (match == null || match.blotName !== 'list-item' || !deltaEndsWith(delta, '\n')) {
              return delta;
            }

            var indent = -1,
                parent = node.parentNode;

            while (!parent.classList.contains('ql-clipboard')) {
              if ((_parchment2.default.query(parent) || {}).blotName === 'list') {
                indent += 1;
              }

              parent = parent.parentNode;
            }

            if (indent <= 0) return delta;
            return delta.compose(new _quillDelta2.default().retain(delta.length() - 1).retain(1, {
              indent: indent
            }));
          }

          function matchNewline(node, delta) {
            if (!deltaEndsWith(delta, '\n')) {
              if (isLine(node) || delta.length() > 0 && node.nextSibling && isLine(node.nextSibling)) {
                delta.insert('\n');
              }
            }

            return delta;
          }

          function matchSpacing(node, delta) {
            if (isLine(node) && node.nextElementSibling != null && !deltaEndsWith(delta, '\n\n')) {
              var nodeHeight = node.offsetHeight + parseFloat(computeStyle(node).marginTop) + parseFloat(computeStyle(node).marginBottom);

              if (node.nextElementSibling.offsetTop > node.offsetTop + nodeHeight * 1.5) {
                delta.insert('\n');
              }
            }

            return delta;
          }

          function matchStyles(node, delta) {
            var formats = {};
            var style = node.style || {};

            if (style.fontStyle && computeStyle(node).fontStyle === 'italic') {
              formats.italic = true;
            }

            if (style.fontWeight && (computeStyle(node).fontWeight.startsWith('bold') || parseInt(computeStyle(node).fontWeight) >= 700)) {
              formats.bold = true;
            }

            if (Object.keys(formats).length > 0) {
              delta = applyFormat(delta, formats);
            }

            if (parseFloat(style.textIndent || 0) > 0) {
              // Could be 0.5in
              delta = new _quillDelta2.default().insert('\t').concat(delta);
            }

            return delta;
          }

          function matchText(node, delta) {
            var text = node.data; // Word represents empty line with <o:p>&nbsp;</o:p>

            if (node.parentNode.tagName === 'O:P') {
              return delta.insert(text.trim());
            }

            if (text.trim().length === 0 && node.parentNode.classList.contains('ql-clipboard')) {
              return delta;
            }

            if (!computeStyle(node.parentNode).whiteSpace.startsWith('pre')) {
              // eslint-disable-next-line func-style
              var replacer = function replacer(collapse, match) {
                match = match.replace(/[^\u00a0]/g, ''); // \u00a0 is nbsp;

                return match.length < 1 && collapse ? ' ' : match;
              };

              text = text.replace(/\r\n/g, ' ').replace(/\n/g, ' ');
              text = text.replace(/\s\s+/g, replacer.bind(replacer, true)); // collapse whitespace

              if (node.previousSibling == null && isLine(node.parentNode) || node.previousSibling != null && isLine(node.previousSibling)) {
                text = text.replace(/^\s+/, replacer.bind(replacer, false));
              }

              if (node.nextSibling == null && isLine(node.parentNode) || node.nextSibling != null && isLine(node.nextSibling)) {
                text = text.replace(/\s+$/, replacer.bind(replacer, false));
              }
            }

            return delta.insert(text);
          }

          exports.default = Clipboard;
          exports.matchAttributor = matchAttributor;
          exports.matchBlot = matchBlot;
          exports.matchNewline = matchNewline;
          exports.matchSpacing = matchSpacing;
          exports.matchText = matchText;
          /***/
        },
        /* 56 */

        /***/
        function (module, exports, __webpack_require__) {

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var _createClass = function () {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }

            return function (Constructor, protoProps, staticProps) {
              if (protoProps) defineProperties(Constructor.prototype, protoProps);
              if (staticProps) defineProperties(Constructor, staticProps);
              return Constructor;
            };
          }();

          var _get = function get(object, property, receiver) {
            if (object === null) object = Function.prototype;
            var desc = Object.getOwnPropertyDescriptor(object, property);

            if (desc === undefined) {
              var parent = Object.getPrototypeOf(object);

              if (parent === null) {
                return undefined;
              } else {
                return get(parent, property, receiver);
              }
            } else if ("value" in desc) {
              return desc.value;
            } else {
              var getter = desc.get;

              if (getter === undefined) {
                return undefined;
              }

              return getter.call(receiver);
            }
          };

          var _inline = __webpack_require__(6);

          var _inline2 = _interopRequireDefault(_inline);

          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
              default: obj
            };
          }

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }

          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }

            return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
          }

          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
            }

            subClass.prototype = Object.create(superClass && superClass.prototype, {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
              }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
          }

          var Bold = function (_Inline) {
            _inherits(Bold, _Inline);

            function Bold() {
              _classCallCheck(this, Bold);

              return _possibleConstructorReturn(this, (Bold.__proto__ || Object.getPrototypeOf(Bold)).apply(this, arguments));
            }

            _createClass(Bold, [{
              key: 'optimize',
              value: function optimize(context) {
                _get(Bold.prototype.__proto__ || Object.getPrototypeOf(Bold.prototype), 'optimize', this).call(this, context);

                if (this.domNode.tagName !== this.statics.tagName[0]) {
                  this.replaceWith(this.statics.blotName);
                }
              }
            }], [{
              key: 'create',
              value: function create() {
                return _get(Bold.__proto__ || Object.getPrototypeOf(Bold), 'create', this).call(this);
              }
            }, {
              key: 'formats',
              value: function formats() {
                return true;
              }
            }]);

            return Bold;
          }(_inline2.default);

          Bold.blotName = 'bold';
          Bold.tagName = ['STRONG', 'B'];
          exports.default = Bold;
          /***/
        },
        /* 57 */

        /***/
        function (module, exports, __webpack_require__) {

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.addControls = exports.default = undefined;

          var _slicedToArray = function () {
            function sliceIterator(arr, i) {
              var _arr = [];
              var _n = true;
              var _d = false;
              var _e = undefined;

              try {
                for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                  _arr.push(_s.value);

                  if (i && _arr.length === i) break;
                }
              } catch (err) {
                _d = true;
                _e = err;
              } finally {
                try {
                  if (!_n && _i["return"]) _i["return"]();
                } finally {
                  if (_d) throw _e;
                }
              }

              return _arr;
            }

            return function (arr, i) {
              if (Array.isArray(arr)) {
                return arr;
              } else if (Symbol.iterator in Object(arr)) {
                return sliceIterator(arr, i);
              } else {
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
              }
            };
          }();

          var _createClass = function () {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }

            return function (Constructor, protoProps, staticProps) {
              if (protoProps) defineProperties(Constructor.prototype, protoProps);
              if (staticProps) defineProperties(Constructor, staticProps);
              return Constructor;
            };
          }();

          var _quillDelta = __webpack_require__(2);

          var _quillDelta2 = _interopRequireDefault(_quillDelta);

          var _parchment = __webpack_require__(0);

          var _parchment2 = _interopRequireDefault(_parchment);

          var _quill = __webpack_require__(5);

          var _quill2 = _interopRequireDefault(_quill);

          var _logger = __webpack_require__(10);

          var _logger2 = _interopRequireDefault(_logger);

          var _module = __webpack_require__(9);

          var _module2 = _interopRequireDefault(_module);

          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
              default: obj
            };
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

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }

          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }

            return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
          }

          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
            }

            subClass.prototype = Object.create(superClass && superClass.prototype, {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
              }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
          }

          var debug = (0, _logger2.default)('quill:toolbar');

          var Toolbar = function (_Module) {
            _inherits(Toolbar, _Module);

            function Toolbar(quill, options) {
              _classCallCheck(this, Toolbar);

              var _this = _possibleConstructorReturn(this, (Toolbar.__proto__ || Object.getPrototypeOf(Toolbar)).call(this, quill, options));

              if (Array.isArray(_this.options.container)) {
                var container = document.createElement('div');
                addControls(container, _this.options.container);
                quill.container.parentNode.insertBefore(container, quill.container);
                _this.container = container;
              } else if (typeof _this.options.container === 'string') {
                _this.container = document.querySelector(_this.options.container);
              } else {
                _this.container = _this.options.container;
              }

              if (!(_this.container instanceof HTMLElement)) {
                var _ret;

                return _ret = debug.error('Container required for toolbar', _this.options), _possibleConstructorReturn(_this, _ret);
              }

              _this.container.classList.add('ql-toolbar');

              _this.controls = [];
              _this.handlers = {};
              Object.keys(_this.options.handlers).forEach(function (format) {
                _this.addHandler(format, _this.options.handlers[format]);
              });
              [].forEach.call(_this.container.querySelectorAll('button, select'), function (input) {
                _this.attach(input);
              });

              _this.quill.on(_quill2.default.events.EDITOR_CHANGE, function (type, range) {
                if (type === _quill2.default.events.SELECTION_CHANGE) {
                  _this.update(range);
                }
              });

              _this.quill.on(_quill2.default.events.SCROLL_OPTIMIZE, function () {
                var _this$quill$selection = _this.quill.selection.getRange(),
                    _this$quill$selection2 = _slicedToArray(_this$quill$selection, 1),
                    range = _this$quill$selection2[0]; // quill.getSelection triggers update


                _this.update(range);
              });

              return _this;
            }

            _createClass(Toolbar, [{
              key: 'addHandler',
              value: function addHandler(format, handler) {
                this.handlers[format] = handler;
              }
            }, {
              key: 'attach',
              value: function attach(input) {
                var _this2 = this;

                var format = [].find.call(input.classList, function (className) {
                  return className.indexOf('ql-') === 0;
                });
                if (!format) return;
                format = format.slice('ql-'.length);

                if (input.tagName === 'BUTTON') {
                  input.setAttribute('type', 'button');
                }

                if (this.handlers[format] == null) {
                  if (this.quill.scroll.whitelist != null && this.quill.scroll.whitelist[format] == null) {
                    debug.warn('ignoring attaching to disabled format', format, input);
                    return;
                  }

                  if (_parchment2.default.query(format) == null) {
                    debug.warn('ignoring attaching to nonexistent format', format, input);
                    return;
                  }
                }

                var eventName = input.tagName === 'SELECT' ? 'change' : 'click';
                input.addEventListener(eventName, function (e) {
                  var value = void 0;

                  if (input.tagName === 'SELECT') {
                    if (input.selectedIndex < 0) return;
                    var selected = input.options[input.selectedIndex];

                    if (selected.hasAttribute('selected')) {
                      value = false;
                    } else {
                      value = selected.value || false;
                    }
                  } else {
                    if (input.classList.contains('ql-active')) {
                      value = false;
                    } else {
                      value = input.value || !input.hasAttribute('value');
                    }

                    e.preventDefault();
                  }

                  _this2.quill.focus();

                  var _quill$selection$getR = _this2.quill.selection.getRange(),
                      _quill$selection$getR2 = _slicedToArray(_quill$selection$getR, 1),
                      range = _quill$selection$getR2[0];

                  if (_this2.handlers[format] != null) {
                    _this2.handlers[format].call(_this2, value);
                  } else if (_parchment2.default.query(format).prototype instanceof _parchment2.default.Embed) {
                    value = prompt('Enter ' + format);
                    if (!value) return;

                    _this2.quill.updateContents(new _quillDelta2.default().retain(range.index).delete(range.length).insert(_defineProperty({}, format, value)), _quill2.default.sources.USER);
                  } else {
                    _this2.quill.format(format, value, _quill2.default.sources.USER);
                  }

                  _this2.update(range);
                }); // TODO use weakmap

                this.controls.push([format, input]);
              }
            }, {
              key: 'update',
              value: function update(range) {
                var formats = range == null ? {} : this.quill.getFormat(range);
                this.controls.forEach(function (pair) {
                  var _pair = _slicedToArray(pair, 2),
                      format = _pair[0],
                      input = _pair[1];

                  if (input.tagName === 'SELECT') {
                    var option = void 0;

                    if (range == null) {
                      option = null;
                    } else if (formats[format] == null) {
                      option = input.querySelector('option[selected]');
                    } else if (!Array.isArray(formats[format])) {
                      var value = formats[format];

                      if (typeof value === 'string') {
                        value = value.replace(/\"/g, '\\"');
                      }

                      option = input.querySelector('option[value="' + value + '"]');
                    }

                    if (option == null) {
                      input.value = ''; // TODO make configurable?

                      input.selectedIndex = -1;
                    } else {
                      option.selected = true;
                    }
                  } else {
                    if (range == null) {
                      input.classList.remove('ql-active');
                    } else if (input.hasAttribute('value')) {
                      // both being null should match (default values)
                      // '1' should match with 1 (headers)
                      var isActive = formats[format] === input.getAttribute('value') || formats[format] != null && formats[format].toString() === input.getAttribute('value') || formats[format] == null && !input.getAttribute('value');
                      input.classList.toggle('ql-active', isActive);
                    } else {
                      input.classList.toggle('ql-active', formats[format] != null);
                    }
                  }
                });
              }
            }]);

            return Toolbar;
          }(_module2.default);

          Toolbar.DEFAULTS = {};

          function addButton(container, format, value) {
            var input = document.createElement('button');
            input.setAttribute('type', 'button');
            input.classList.add('ql-' + format);

            if (value != null) {
              input.value = value;
            }

            container.appendChild(input);
          }

          function addControls(container, groups) {
            if (!Array.isArray(groups[0])) {
              groups = [groups];
            }

            groups.forEach(function (controls) {
              var group = document.createElement('span');
              group.classList.add('ql-formats');
              controls.forEach(function (control) {
                if (typeof control === 'string') {
                  addButton(group, control);
                } else {
                  var format = Object.keys(control)[0];
                  var value = control[format];

                  if (Array.isArray(value)) {
                    addSelect(group, format, value);
                  } else {
                    addButton(group, format, value);
                  }
                }
              });
              container.appendChild(group);
            });
          }

          function addSelect(container, format, values) {
            var input = document.createElement('select');
            input.classList.add('ql-' + format);
            values.forEach(function (value) {
              var option = document.createElement('option');

              if (value !== false) {
                option.setAttribute('value', value);
              } else {
                option.setAttribute('selected', 'selected');
              }

              input.appendChild(option);
            });
            container.appendChild(input);
          }

          Toolbar.DEFAULTS = {
            container: null,
            handlers: {
              clean: function clean() {
                var _this3 = this;

                var range = this.quill.getSelection();
                if (range == null) return;

                if (range.length == 0) {
                  var formats = this.quill.getFormat();
                  Object.keys(formats).forEach(function (name) {
                    // Clean functionality in existing apps only clean inline formats
                    if (_parchment2.default.query(name, _parchment2.default.Scope.INLINE) != null) {
                      _this3.quill.format(name, false);
                    }
                  });
                } else {
                  this.quill.removeFormat(range, _quill2.default.sources.USER);
                }
              },
              direction: function direction(value) {
                var align = this.quill.getFormat()['align'];

                if (value === 'rtl' && align == null) {
                  this.quill.format('align', 'right', _quill2.default.sources.USER);
                } else if (!value && align === 'right') {
                  this.quill.format('align', false, _quill2.default.sources.USER);
                }

                this.quill.format('direction', value, _quill2.default.sources.USER);
              },
              indent: function indent(value) {
                var range = this.quill.getSelection();
                var formats = this.quill.getFormat(range);
                var indent = parseInt(formats.indent || 0);

                if (value === '+1' || value === '-1') {
                  var modifier = value === '+1' ? 1 : -1;
                  if (formats.direction === 'rtl') modifier *= -1;
                  this.quill.format('indent', indent + modifier, _quill2.default.sources.USER);
                }
              },
              link: function link(value) {
                if (value === true) {
                  value = prompt('Enter link URL:');
                }

                this.quill.format('link', value, _quill2.default.sources.USER);
              },
              list: function list(value) {
                var range = this.quill.getSelection();
                var formats = this.quill.getFormat(range);

                if (value === 'check') {
                  if (formats['list'] === 'checked' || formats['list'] === 'unchecked') {
                    this.quill.format('list', false, _quill2.default.sources.USER);
                  } else {
                    this.quill.format('list', 'unchecked', _quill2.default.sources.USER);
                  }
                } else {
                  this.quill.format('list', value, _quill2.default.sources.USER);
                }
              }
            }
          };
          exports.default = Toolbar;
          exports.addControls = addControls;
          /***/
        },
        /* 58 */

        /***/
        function (module, exports) {
          module.exports = "<svg viewbox=\"0 0 18 18\"> <polyline class=\"ql-even ql-stroke\" points=\"5 7 3 9 5 11\"></polyline> <polyline class=\"ql-even ql-stroke\" points=\"13 7 15 9 13 11\"></polyline> <line class=ql-stroke x1=10 x2=8 y1=5 y2=13></line> </svg>";
          /***/
        },
        /* 59 */

        /***/
        function (module, exports, __webpack_require__) {

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var _createClass = function () {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }

            return function (Constructor, protoProps, staticProps) {
              if (protoProps) defineProperties(Constructor.prototype, protoProps);
              if (staticProps) defineProperties(Constructor, staticProps);
              return Constructor;
            };
          }();

          var _get = function get(object, property, receiver) {
            if (object === null) object = Function.prototype;
            var desc = Object.getOwnPropertyDescriptor(object, property);

            if (desc === undefined) {
              var parent = Object.getPrototypeOf(object);

              if (parent === null) {
                return undefined;
              } else {
                return get(parent, property, receiver);
              }
            } else if ("value" in desc) {
              return desc.value;
            } else {
              var getter = desc.get;

              if (getter === undefined) {
                return undefined;
              }

              return getter.call(receiver);
            }
          };

          var _picker = __webpack_require__(28);

          var _picker2 = _interopRequireDefault(_picker);

          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
              default: obj
            };
          }

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }

          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }

            return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
          }

          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
            }

            subClass.prototype = Object.create(superClass && superClass.prototype, {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
              }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
          }

          var ColorPicker = function (_Picker) {
            _inherits(ColorPicker, _Picker);

            function ColorPicker(select, label) {
              _classCallCheck(this, ColorPicker);

              var _this = _possibleConstructorReturn(this, (ColorPicker.__proto__ || Object.getPrototypeOf(ColorPicker)).call(this, select));

              _this.label.innerHTML = label;

              _this.container.classList.add('ql-color-picker');

              [].slice.call(_this.container.querySelectorAll('.ql-picker-item'), 0, 7).forEach(function (item) {
                item.classList.add('ql-primary');
              });
              return _this;
            }

            _createClass(ColorPicker, [{
              key: 'buildItem',
              value: function buildItem(option) {
                var item = _get(ColorPicker.prototype.__proto__ || Object.getPrototypeOf(ColorPicker.prototype), 'buildItem', this).call(this, option);

                item.style.backgroundColor = option.getAttribute('value') || '';
                return item;
              }
            }, {
              key: 'selectItem',
              value: function selectItem(item, trigger) {
                _get(ColorPicker.prototype.__proto__ || Object.getPrototypeOf(ColorPicker.prototype), 'selectItem', this).call(this, item, trigger);

                var colorLabel = this.label.querySelector('.ql-color-label');
                var value = item ? item.getAttribute('data-value') || '' : '';

                if (colorLabel) {
                  if (colorLabel.tagName === 'line') {
                    colorLabel.style.stroke = value;
                  } else {
                    colorLabel.style.fill = value;
                  }
                }
              }
            }]);

            return ColorPicker;
          }(_picker2.default);

          exports.default = ColorPicker;
          /***/
        },
        /* 60 */

        /***/
        function (module, exports, __webpack_require__) {

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var _createClass = function () {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }

            return function (Constructor, protoProps, staticProps) {
              if (protoProps) defineProperties(Constructor.prototype, protoProps);
              if (staticProps) defineProperties(Constructor, staticProps);
              return Constructor;
            };
          }();

          var _get = function get(object, property, receiver) {
            if (object === null) object = Function.prototype;
            var desc = Object.getOwnPropertyDescriptor(object, property);

            if (desc === undefined) {
              var parent = Object.getPrototypeOf(object);

              if (parent === null) {
                return undefined;
              } else {
                return get(parent, property, receiver);
              }
            } else if ("value" in desc) {
              return desc.value;
            } else {
              var getter = desc.get;

              if (getter === undefined) {
                return undefined;
              }

              return getter.call(receiver);
            }
          };

          var _picker = __webpack_require__(28);

          var _picker2 = _interopRequireDefault(_picker);

          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
              default: obj
            };
          }

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }

          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }

            return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
          }

          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
            }

            subClass.prototype = Object.create(superClass && superClass.prototype, {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
              }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
          }

          var IconPicker = function (_Picker) {
            _inherits(IconPicker, _Picker);

            function IconPicker(select, icons) {
              _classCallCheck(this, IconPicker);

              var _this = _possibleConstructorReturn(this, (IconPicker.__proto__ || Object.getPrototypeOf(IconPicker)).call(this, select));

              _this.container.classList.add('ql-icon-picker');

              [].forEach.call(_this.container.querySelectorAll('.ql-picker-item'), function (item) {
                item.innerHTML = icons[item.getAttribute('data-value') || ''];
              });
              _this.defaultItem = _this.container.querySelector('.ql-selected');

              _this.selectItem(_this.defaultItem);

              return _this;
            }

            _createClass(IconPicker, [{
              key: 'selectItem',
              value: function selectItem(item, trigger) {
                _get(IconPicker.prototype.__proto__ || Object.getPrototypeOf(IconPicker.prototype), 'selectItem', this).call(this, item, trigger);

                item = item || this.defaultItem;
                this.label.innerHTML = item.innerHTML;
              }
            }]);

            return IconPicker;
          }(_picker2.default);

          exports.default = IconPicker;
          /***/
        },
        /* 61 */

        /***/
        function (module, exports, __webpack_require__) {

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var _createClass = function () {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }

            return function (Constructor, protoProps, staticProps) {
              if (protoProps) defineProperties(Constructor.prototype, protoProps);
              if (staticProps) defineProperties(Constructor, staticProps);
              return Constructor;
            };
          }();

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }

          var Tooltip = function () {
            function Tooltip(quill, boundsContainer) {
              var _this = this;

              _classCallCheck(this, Tooltip);

              this.quill = quill;
              this.boundsContainer = boundsContainer || document.body;
              this.root = quill.addContainer('ql-tooltip');
              this.root.innerHTML = this.constructor.TEMPLATE;

              if (this.quill.root === this.quill.scrollingContainer) {
                this.quill.root.addEventListener('scroll', function () {
                  _this.root.style.marginTop = -1 * _this.quill.root.scrollTop + 'px';
                });
              }

              this.hide();
            }

            _createClass(Tooltip, [{
              key: 'hide',
              value: function hide() {
                this.root.classList.add('ql-hidden');
              }
            }, {
              key: 'position',
              value: function position(reference) {
                var left = reference.left + reference.width / 2 - this.root.offsetWidth / 2; // root.scrollTop should be 0 if scrollContainer !== root

                var top = reference.bottom + this.quill.root.scrollTop;
                this.root.style.left = left + 'px';
                this.root.style.top = top + 'px';
                this.root.classList.remove('ql-flip');
                var containerBounds = this.boundsContainer.getBoundingClientRect();
                var rootBounds = this.root.getBoundingClientRect();
                var shift = 0;

                if (rootBounds.right > containerBounds.right) {
                  shift = containerBounds.right - rootBounds.right;
                  this.root.style.left = left + shift + 'px';
                }

                if (rootBounds.left < containerBounds.left) {
                  shift = containerBounds.left - rootBounds.left;
                  this.root.style.left = left + shift + 'px';
                }

                if (rootBounds.bottom > containerBounds.bottom) {
                  var height = rootBounds.bottom - rootBounds.top;
                  var verticalShift = reference.bottom - reference.top + height;
                  this.root.style.top = top - verticalShift + 'px';
                  this.root.classList.add('ql-flip');
                }

                return shift;
              }
            }, {
              key: 'show',
              value: function show() {
                this.root.classList.remove('ql-editing');
                this.root.classList.remove('ql-hidden');
              }
            }]);

            return Tooltip;
          }();

          exports.default = Tooltip;
          /***/
        },
        /* 62 */

        /***/
        function (module, exports, __webpack_require__) {

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var _slicedToArray = function () {
            function sliceIterator(arr, i) {
              var _arr = [];
              var _n = true;
              var _d = false;
              var _e = undefined;

              try {
                for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                  _arr.push(_s.value);

                  if (i && _arr.length === i) break;
                }
              } catch (err) {
                _d = true;
                _e = err;
              } finally {
                try {
                  if (!_n && _i["return"]) _i["return"]();
                } finally {
                  if (_d) throw _e;
                }
              }

              return _arr;
            }

            return function (arr, i) {
              if (Array.isArray(arr)) {
                return arr;
              } else if (Symbol.iterator in Object(arr)) {
                return sliceIterator(arr, i);
              } else {
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
              }
            };
          }();

          var _get = function get(object, property, receiver) {
            if (object === null) object = Function.prototype;
            var desc = Object.getOwnPropertyDescriptor(object, property);

            if (desc === undefined) {
              var parent = Object.getPrototypeOf(object);

              if (parent === null) {
                return undefined;
              } else {
                return get(parent, property, receiver);
              }
            } else if ("value" in desc) {
              return desc.value;
            } else {
              var getter = desc.get;

              if (getter === undefined) {
                return undefined;
              }

              return getter.call(receiver);
            }
          };

          var _createClass = function () {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }

            return function (Constructor, protoProps, staticProps) {
              if (protoProps) defineProperties(Constructor.prototype, protoProps);
              if (staticProps) defineProperties(Constructor, staticProps);
              return Constructor;
            };
          }();

          var _extend = __webpack_require__(3);

          var _extend2 = _interopRequireDefault(_extend);

          var _emitter = __webpack_require__(8);

          var _emitter2 = _interopRequireDefault(_emitter);

          var _base = __webpack_require__(43);

          var _base2 = _interopRequireDefault(_base);

          var _link = __webpack_require__(27);

          var _link2 = _interopRequireDefault(_link);

          var _selection = __webpack_require__(15);

          var _icons = __webpack_require__(41);

          var _icons2 = _interopRequireDefault(_icons);

          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
              default: obj
            };
          }

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }

          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }

            return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
          }

          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
            }

            subClass.prototype = Object.create(superClass && superClass.prototype, {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
              }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
          }

          var TOOLBAR_CONFIG = [[{
            header: ['1', '2', '3', false]
          }], ['bold', 'italic', 'underline', 'link'], [{
            list: 'ordered'
          }, {
            list: 'bullet'
          }], ['clean']];

          var SnowTheme = function (_BaseTheme) {
            _inherits(SnowTheme, _BaseTheme);

            function SnowTheme(quill, options) {
              _classCallCheck(this, SnowTheme);

              if (options.modules.toolbar != null && options.modules.toolbar.container == null) {
                options.modules.toolbar.container = TOOLBAR_CONFIG;
              }

              var _this = _possibleConstructorReturn(this, (SnowTheme.__proto__ || Object.getPrototypeOf(SnowTheme)).call(this, quill, options));

              _this.quill.container.classList.add('ql-snow');

              return _this;
            }

            _createClass(SnowTheme, [{
              key: 'extendToolbar',
              value: function extendToolbar(toolbar) {
                toolbar.container.classList.add('ql-snow');
                this.buildButtons([].slice.call(toolbar.container.querySelectorAll('button')), _icons2.default);
                this.buildPickers([].slice.call(toolbar.container.querySelectorAll('select')), _icons2.default);
                this.tooltip = new SnowTooltip(this.quill, this.options.bounds);

                if (toolbar.container.querySelector('.ql-link')) {
                  this.quill.keyboard.addBinding({
                    key: 'K',
                    shortKey: true
                  }, function (range, context) {
                    toolbar.handlers['link'].call(toolbar, !context.format.link);
                  });
                }
              }
            }]);

            return SnowTheme;
          }(_base2.default);

          SnowTheme.DEFAULTS = (0, _extend2.default)(true, {}, _base2.default.DEFAULTS, {
            modules: {
              toolbar: {
                handlers: {
                  link: function link(value) {
                    if (value) {
                      var range = this.quill.getSelection();
                      if (range == null || range.length == 0) return;
                      var preview = this.quill.getText(range);

                      if (/^\S+@\S+\.\S+$/.test(preview) && preview.indexOf('mailto:') !== 0) {
                        preview = 'mailto:' + preview;
                      }

                      var tooltip = this.quill.theme.tooltip;
                      tooltip.edit('link', preview);
                    } else {
                      this.quill.format('link', false);
                    }
                  }
                }
              }
            }
          });

          var SnowTooltip = function (_BaseTooltip) {
            _inherits(SnowTooltip, _BaseTooltip);

            function SnowTooltip(quill, bounds) {
              _classCallCheck(this, SnowTooltip);

              var _this2 = _possibleConstructorReturn(this, (SnowTooltip.__proto__ || Object.getPrototypeOf(SnowTooltip)).call(this, quill, bounds));

              _this2.preview = _this2.root.querySelector('a.ql-preview');
              return _this2;
            }

            _createClass(SnowTooltip, [{
              key: 'listen',
              value: function listen() {
                var _this3 = this;

                _get(SnowTooltip.prototype.__proto__ || Object.getPrototypeOf(SnowTooltip.prototype), 'listen', this).call(this);

                this.root.querySelector('a.ql-action').addEventListener('click', function (event) {
                  if (_this3.root.classList.contains('ql-editing')) {
                    _this3.save();
                  } else {
                    _this3.edit('link', _this3.preview.textContent);
                  }

                  event.preventDefault();
                });
                this.root.querySelector('a.ql-remove').addEventListener('click', function (event) {
                  if (_this3.linkRange != null) {
                    var range = _this3.linkRange;

                    _this3.restoreFocus();

                    _this3.quill.formatText(range, 'link', false, _emitter2.default.sources.USER);

                    delete _this3.linkRange;
                  }

                  event.preventDefault();

                  _this3.hide();
                });
                this.quill.on(_emitter2.default.events.SELECTION_CHANGE, function (range, oldRange, source) {
                  if (range == null) return;

                  if (range.length === 0 && source === _emitter2.default.sources.USER) {
                    var _quill$scroll$descend = _this3.quill.scroll.descendant(_link2.default, range.index),
                        _quill$scroll$descend2 = _slicedToArray(_quill$scroll$descend, 2),
                        link = _quill$scroll$descend2[0],
                        offset = _quill$scroll$descend2[1];

                    if (link != null) {
                      _this3.linkRange = new _selection.Range(range.index - offset, link.length());

                      var preview = _link2.default.formats(link.domNode);

                      _this3.preview.textContent = preview;

                      _this3.preview.setAttribute('href', preview);

                      _this3.show();

                      _this3.position(_this3.quill.getBounds(_this3.linkRange));

                      return;
                    }
                  } else {
                    delete _this3.linkRange;
                  }

                  _this3.hide();
                });
              }
            }, {
              key: 'show',
              value: function show() {
                _get(SnowTooltip.prototype.__proto__ || Object.getPrototypeOf(SnowTooltip.prototype), 'show', this).call(this);

                this.root.removeAttribute('data-mode');
              }
            }]);

            return SnowTooltip;
          }(_base.BaseTooltip);

          SnowTooltip.TEMPLATE = ['<a class="ql-preview" rel="noopener noreferrer" target="_blank" href="about:blank"></a>', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-action"></a>', '<a class="ql-remove"></a>'].join('');
          exports.default = SnowTheme;
          /***/
        },
        /* 63 */

        /***/
        function (module, exports, __webpack_require__) {

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var _core = __webpack_require__(29);

          var _core2 = _interopRequireDefault(_core);

          var _align = __webpack_require__(36);

          var _direction = __webpack_require__(38);

          var _indent = __webpack_require__(64);

          var _blockquote = __webpack_require__(65);

          var _blockquote2 = _interopRequireDefault(_blockquote);

          var _header = __webpack_require__(66);

          var _header2 = _interopRequireDefault(_header);

          var _list = __webpack_require__(67);

          var _list2 = _interopRequireDefault(_list);

          var _background = __webpack_require__(37);

          var _color = __webpack_require__(26);

          var _font = __webpack_require__(39);

          var _size = __webpack_require__(40);

          var _bold = __webpack_require__(56);

          var _bold2 = _interopRequireDefault(_bold);

          var _italic = __webpack_require__(68);

          var _italic2 = _interopRequireDefault(_italic);

          var _link = __webpack_require__(27);

          var _link2 = _interopRequireDefault(_link);

          var _script = __webpack_require__(69);

          var _script2 = _interopRequireDefault(_script);

          var _strike = __webpack_require__(70);

          var _strike2 = _interopRequireDefault(_strike);

          var _underline = __webpack_require__(71);

          var _underline2 = _interopRequireDefault(_underline);

          var _image = __webpack_require__(72);

          var _image2 = _interopRequireDefault(_image);

          var _video = __webpack_require__(73);

          var _video2 = _interopRequireDefault(_video);

          var _code = __webpack_require__(13);

          var _code2 = _interopRequireDefault(_code);

          var _formula = __webpack_require__(74);

          var _formula2 = _interopRequireDefault(_formula);

          var _syntax = __webpack_require__(75);

          var _syntax2 = _interopRequireDefault(_syntax);

          var _toolbar = __webpack_require__(57);

          var _toolbar2 = _interopRequireDefault(_toolbar);

          var _icons = __webpack_require__(41);

          var _icons2 = _interopRequireDefault(_icons);

          var _picker = __webpack_require__(28);

          var _picker2 = _interopRequireDefault(_picker);

          var _colorPicker = __webpack_require__(59);

          var _colorPicker2 = _interopRequireDefault(_colorPicker);

          var _iconPicker = __webpack_require__(60);

          var _iconPicker2 = _interopRequireDefault(_iconPicker);

          var _tooltip = __webpack_require__(61);

          var _tooltip2 = _interopRequireDefault(_tooltip);

          var _bubble = __webpack_require__(108);

          var _bubble2 = _interopRequireDefault(_bubble);

          var _snow = __webpack_require__(62);

          var _snow2 = _interopRequireDefault(_snow);

          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
              default: obj
            };
          }

          _core2.default.register({
            'attributors/attribute/direction': _direction.DirectionAttribute,
            'attributors/class/align': _align.AlignClass,
            'attributors/class/background': _background.BackgroundClass,
            'attributors/class/color': _color.ColorClass,
            'attributors/class/direction': _direction.DirectionClass,
            'attributors/class/font': _font.FontClass,
            'attributors/class/size': _size.SizeClass,
            'attributors/style/align': _align.AlignStyle,
            'attributors/style/background': _background.BackgroundStyle,
            'attributors/style/color': _color.ColorStyle,
            'attributors/style/direction': _direction.DirectionStyle,
            'attributors/style/font': _font.FontStyle,
            'attributors/style/size': _size.SizeStyle
          }, true);

          _core2.default.register({
            'formats/align': _align.AlignClass,
            'formats/direction': _direction.DirectionClass,
            'formats/indent': _indent.IndentClass,
            'formats/background': _background.BackgroundStyle,
            'formats/color': _color.ColorStyle,
            'formats/font': _font.FontClass,
            'formats/size': _size.SizeClass,
            'formats/blockquote': _blockquote2.default,
            'formats/code-block': _code2.default,
            'formats/header': _header2.default,
            'formats/list': _list2.default,
            'formats/bold': _bold2.default,
            'formats/code': _code.Code,
            'formats/italic': _italic2.default,
            'formats/link': _link2.default,
            'formats/script': _script2.default,
            'formats/strike': _strike2.default,
            'formats/underline': _underline2.default,
            'formats/image': _image2.default,
            'formats/video': _video2.default,
            'formats/list/item': _list.ListItem,
            'modules/formula': _formula2.default,
            'modules/syntax': _syntax2.default,
            'modules/toolbar': _toolbar2.default,
            'themes/bubble': _bubble2.default,
            'themes/snow': _snow2.default,
            'ui/icons': _icons2.default,
            'ui/picker': _picker2.default,
            'ui/icon-picker': _iconPicker2.default,
            'ui/color-picker': _colorPicker2.default,
            'ui/tooltip': _tooltip2.default
          }, true);

          exports.default = _core2.default;
          /***/
        },
        /* 64 */

        /***/
        function (module, exports, __webpack_require__) {

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.IndentClass = undefined;

          var _createClass = function () {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }

            return function (Constructor, protoProps, staticProps) {
              if (protoProps) defineProperties(Constructor.prototype, protoProps);
              if (staticProps) defineProperties(Constructor, staticProps);
              return Constructor;
            };
          }();

          var _get = function get(object, property, receiver) {
            if (object === null) object = Function.prototype;
            var desc = Object.getOwnPropertyDescriptor(object, property);

            if (desc === undefined) {
              var parent = Object.getPrototypeOf(object);

              if (parent === null) {
                return undefined;
              } else {
                return get(parent, property, receiver);
              }
            } else if ("value" in desc) {
              return desc.value;
            } else {
              var getter = desc.get;

              if (getter === undefined) {
                return undefined;
              }

              return getter.call(receiver);
            }
          };

          var _parchment = __webpack_require__(0);

          var _parchment2 = _interopRequireDefault(_parchment);

          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
              default: obj
            };
          }

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }

          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }

            return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
          }

          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
            }

            subClass.prototype = Object.create(superClass && superClass.prototype, {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
              }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
          }

          var IdentAttributor = function (_Parchment$Attributor) {
            _inherits(IdentAttributor, _Parchment$Attributor);

            function IdentAttributor() {
              _classCallCheck(this, IdentAttributor);

              return _possibleConstructorReturn(this, (IdentAttributor.__proto__ || Object.getPrototypeOf(IdentAttributor)).apply(this, arguments));
            }

            _createClass(IdentAttributor, [{
              key: 'add',
              value: function add(node, value) {
                if (value === '+1' || value === '-1') {
                  var indent = this.value(node) || 0;
                  value = value === '+1' ? indent + 1 : indent - 1;
                }

                if (value === 0) {
                  this.remove(node);
                  return true;
                } else {
                  return _get(IdentAttributor.prototype.__proto__ || Object.getPrototypeOf(IdentAttributor.prototype), 'add', this).call(this, node, value);
                }
              }
            }, {
              key: 'canAdd',
              value: function canAdd(node, value) {
                return _get(IdentAttributor.prototype.__proto__ || Object.getPrototypeOf(IdentAttributor.prototype), 'canAdd', this).call(this, node, value) || _get(IdentAttributor.prototype.__proto__ || Object.getPrototypeOf(IdentAttributor.prototype), 'canAdd', this).call(this, node, parseInt(value));
              }
            }, {
              key: 'value',
              value: function value(node) {
                return parseInt(_get(IdentAttributor.prototype.__proto__ || Object.getPrototypeOf(IdentAttributor.prototype), 'value', this).call(this, node)) || undefined; // Don't return NaN
              }
            }]);

            return IdentAttributor;
          }(_parchment2.default.Attributor.Class);

          var IndentClass = new IdentAttributor('indent', 'ql-indent', {
            scope: _parchment2.default.Scope.BLOCK,
            whitelist: [1, 2, 3, 4, 5, 6, 7, 8]
          });
          exports.IndentClass = IndentClass;
          /***/
        },
        /* 65 */

        /***/
        function (module, exports, __webpack_require__) {

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var _block = __webpack_require__(4);

          var _block2 = _interopRequireDefault(_block);

          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
              default: obj
            };
          }

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }

          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }

            return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
          }

          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
            }

            subClass.prototype = Object.create(superClass && superClass.prototype, {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
              }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
          }

          var Blockquote = function (_Block) {
            _inherits(Blockquote, _Block);

            function Blockquote() {
              _classCallCheck(this, Blockquote);

              return _possibleConstructorReturn(this, (Blockquote.__proto__ || Object.getPrototypeOf(Blockquote)).apply(this, arguments));
            }

            return Blockquote;
          }(_block2.default);

          Blockquote.blotName = 'blockquote';
          Blockquote.tagName = 'blockquote';
          exports.default = Blockquote;
          /***/
        },
        /* 66 */

        /***/
        function (module, exports, __webpack_require__) {

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var _createClass = function () {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }

            return function (Constructor, protoProps, staticProps) {
              if (protoProps) defineProperties(Constructor.prototype, protoProps);
              if (staticProps) defineProperties(Constructor, staticProps);
              return Constructor;
            };
          }();

          var _block = __webpack_require__(4);

          var _block2 = _interopRequireDefault(_block);

          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
              default: obj
            };
          }

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }

          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }

            return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
          }

          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
            }

            subClass.prototype = Object.create(superClass && superClass.prototype, {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
              }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
          }

          var Header = function (_Block) {
            _inherits(Header, _Block);

            function Header() {
              _classCallCheck(this, Header);

              return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
            }

            _createClass(Header, null, [{
              key: 'formats',
              value: function formats(domNode) {
                return this.tagName.indexOf(domNode.tagName) + 1;
              }
            }]);

            return Header;
          }(_block2.default);

          Header.blotName = 'header';
          Header.tagName = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'];
          exports.default = Header;
          /***/
        },
        /* 67 */

        /***/
        function (module, exports, __webpack_require__) {

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = exports.ListItem = undefined;

          var _createClass = function () {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }

            return function (Constructor, protoProps, staticProps) {
              if (protoProps) defineProperties(Constructor.prototype, protoProps);
              if (staticProps) defineProperties(Constructor, staticProps);
              return Constructor;
            };
          }();

          var _get = function get(object, property, receiver) {
            if (object === null) object = Function.prototype;
            var desc = Object.getOwnPropertyDescriptor(object, property);

            if (desc === undefined) {
              var parent = Object.getPrototypeOf(object);

              if (parent === null) {
                return undefined;
              } else {
                return get(parent, property, receiver);
              }
            } else if ("value" in desc) {
              return desc.value;
            } else {
              var getter = desc.get;

              if (getter === undefined) {
                return undefined;
              }

              return getter.call(receiver);
            }
          };

          var _parchment = __webpack_require__(0);

          var _parchment2 = _interopRequireDefault(_parchment);

          var _block = __webpack_require__(4);

          var _block2 = _interopRequireDefault(_block);

          var _container = __webpack_require__(25);

          var _container2 = _interopRequireDefault(_container);

          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
              default: obj
            };
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

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }

          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }

            return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
          }

          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
            }

            subClass.prototype = Object.create(superClass && superClass.prototype, {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
              }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
          }

          var ListItem = function (_Block) {
            _inherits(ListItem, _Block);

            function ListItem() {
              _classCallCheck(this, ListItem);

              return _possibleConstructorReturn(this, (ListItem.__proto__ || Object.getPrototypeOf(ListItem)).apply(this, arguments));
            }

            _createClass(ListItem, [{
              key: 'format',
              value: function format(name, value) {
                if (name === List.blotName && !value) {
                  this.replaceWith(_parchment2.default.create(this.statics.scope));
                } else {
                  _get(ListItem.prototype.__proto__ || Object.getPrototypeOf(ListItem.prototype), 'format', this).call(this, name, value);
                }
              }
            }, {
              key: 'remove',
              value: function remove() {
                if (this.prev == null && this.next == null) {
                  this.parent.remove();
                } else {
                  _get(ListItem.prototype.__proto__ || Object.getPrototypeOf(ListItem.prototype), 'remove', this).call(this);
                }
              }
            }, {
              key: 'replaceWith',
              value: function replaceWith(name, value) {
                this.parent.isolate(this.offset(this.parent), this.length());

                if (name === this.parent.statics.blotName) {
                  this.parent.replaceWith(name, value);
                  return this;
                } else {
                  this.parent.unwrap();
                  return _get(ListItem.prototype.__proto__ || Object.getPrototypeOf(ListItem.prototype), 'replaceWith', this).call(this, name, value);
                }
              }
            }], [{
              key: 'formats',
              value: function formats(domNode) {
                return domNode.tagName === this.tagName ? undefined : _get(ListItem.__proto__ || Object.getPrototypeOf(ListItem), 'formats', this).call(this, domNode);
              }
            }]);

            return ListItem;
          }(_block2.default);

          ListItem.blotName = 'list-item';
          ListItem.tagName = 'LI';

          var List = function (_Container) {
            _inherits(List, _Container);

            _createClass(List, null, [{
              key: 'create',
              value: function create(value) {
                var tagName = value === 'ordered' ? 'OL' : 'UL';

                var node = _get(List.__proto__ || Object.getPrototypeOf(List), 'create', this).call(this, tagName);

                if (value === 'checked' || value === 'unchecked') {
                  node.setAttribute('data-checked', value === 'checked');
                }

                return node;
              }
            }, {
              key: 'formats',
              value: function formats(domNode) {
                if (domNode.tagName === 'OL') return 'ordered';

                if (domNode.tagName === 'UL') {
                  if (domNode.hasAttribute('data-checked')) {
                    return domNode.getAttribute('data-checked') === 'true' ? 'checked' : 'unchecked';
                  } else {
                    return 'bullet';
                  }
                }

                return undefined;
              }
            }]);

            function List(domNode) {
              _classCallCheck(this, List);

              var _this2 = _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).call(this, domNode));

              var listEventHandler = function listEventHandler(e) {
                if (e.target.parentNode !== domNode) return;

                var format = _this2.statics.formats(domNode);

                var blot = _parchment2.default.find(e.target);

                if (format === 'checked') {
                  blot.format('list', 'unchecked');
                } else if (format === 'unchecked') {
                  blot.format('list', 'checked');
                }
              };

              domNode.addEventListener('touchstart', listEventHandler);
              domNode.addEventListener('mousedown', listEventHandler);
              return _this2;
            }

            _createClass(List, [{
              key: 'format',
              value: function format(name, value) {
                if (this.children.length > 0) {
                  this.children.tail.format(name, value);
                }
              }
            }, {
              key: 'formats',
              value: function formats() {
                // We don't inherit from FormatBlot
                return _defineProperty({}, this.statics.blotName, this.statics.formats(this.domNode));
              }
            }, {
              key: 'insertBefore',
              value: function insertBefore(blot, ref) {
                if (blot instanceof ListItem) {
                  _get(List.prototype.__proto__ || Object.getPrototypeOf(List.prototype), 'insertBefore', this).call(this, blot, ref);
                } else {
                  var index = ref == null ? this.length() : ref.offset(this);
                  var after = this.split(index);
                  after.parent.insertBefore(blot, after);
                }
              }
            }, {
              key: 'optimize',
              value: function optimize(context) {
                _get(List.prototype.__proto__ || Object.getPrototypeOf(List.prototype), 'optimize', this).call(this, context);

                var next = this.next;

                if (next != null && next.prev === this && next.statics.blotName === this.statics.blotName && next.domNode.tagName === this.domNode.tagName && next.domNode.getAttribute('data-checked') === this.domNode.getAttribute('data-checked')) {
                  next.moveChildren(this);
                  next.remove();
                }
              }
            }, {
              key: 'replace',
              value: function replace(target) {
                if (target.statics.blotName !== this.statics.blotName) {
                  var item = _parchment2.default.create(this.statics.defaultChild);

                  target.moveChildren(item);
                  this.appendChild(item);
                }

                _get(List.prototype.__proto__ || Object.getPrototypeOf(List.prototype), 'replace', this).call(this, target);
              }
            }]);

            return List;
          }(_container2.default);

          List.blotName = 'list';
          List.scope = _parchment2.default.Scope.BLOCK_BLOT;
          List.tagName = ['OL', 'UL'];
          List.defaultChild = 'list-item';
          List.allowedChildren = [ListItem];
          exports.ListItem = ListItem;
          exports.default = List;
          /***/
        },
        /* 68 */

        /***/
        function (module, exports, __webpack_require__) {

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var _bold = __webpack_require__(56);

          var _bold2 = _interopRequireDefault(_bold);

          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
              default: obj
            };
          }

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }

          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }

            return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
          }

          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
            }

            subClass.prototype = Object.create(superClass && superClass.prototype, {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
              }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
          }

          var Italic = function (_Bold) {
            _inherits(Italic, _Bold);

            function Italic() {
              _classCallCheck(this, Italic);

              return _possibleConstructorReturn(this, (Italic.__proto__ || Object.getPrototypeOf(Italic)).apply(this, arguments));
            }

            return Italic;
          }(_bold2.default);

          Italic.blotName = 'italic';
          Italic.tagName = ['EM', 'I'];
          exports.default = Italic;
          /***/
        },
        /* 69 */

        /***/
        function (module, exports, __webpack_require__) {

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var _createClass = function () {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }

            return function (Constructor, protoProps, staticProps) {
              if (protoProps) defineProperties(Constructor.prototype, protoProps);
              if (staticProps) defineProperties(Constructor, staticProps);
              return Constructor;
            };
          }();

          var _get = function get(object, property, receiver) {
            if (object === null) object = Function.prototype;
            var desc = Object.getOwnPropertyDescriptor(object, property);

            if (desc === undefined) {
              var parent = Object.getPrototypeOf(object);

              if (parent === null) {
                return undefined;
              } else {
                return get(parent, property, receiver);
              }
            } else if ("value" in desc) {
              return desc.value;
            } else {
              var getter = desc.get;

              if (getter === undefined) {
                return undefined;
              }

              return getter.call(receiver);
            }
          };

          var _inline = __webpack_require__(6);

          var _inline2 = _interopRequireDefault(_inline);

          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
              default: obj
            };
          }

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }

          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }

            return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
          }

          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
            }

            subClass.prototype = Object.create(superClass && superClass.prototype, {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
              }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
          }

          var Script = function (_Inline) {
            _inherits(Script, _Inline);

            function Script() {
              _classCallCheck(this, Script);

              return _possibleConstructorReturn(this, (Script.__proto__ || Object.getPrototypeOf(Script)).apply(this, arguments));
            }

            _createClass(Script, null, [{
              key: 'create',
              value: function create(value) {
                if (value === 'super') {
                  return document.createElement('sup');
                } else if (value === 'sub') {
                  return document.createElement('sub');
                } else {
                  return _get(Script.__proto__ || Object.getPrototypeOf(Script), 'create', this).call(this, value);
                }
              }
            }, {
              key: 'formats',
              value: function formats(domNode) {
                if (domNode.tagName === 'SUB') return 'sub';
                if (domNode.tagName === 'SUP') return 'super';
                return undefined;
              }
            }]);

            return Script;
          }(_inline2.default);

          Script.blotName = 'script';
          Script.tagName = ['SUB', 'SUP'];
          exports.default = Script;
          /***/
        },
        /* 70 */

        /***/
        function (module, exports, __webpack_require__) {

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var _inline = __webpack_require__(6);

          var _inline2 = _interopRequireDefault(_inline);

          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
              default: obj
            };
          }

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }

          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }

            return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
          }

          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
            }

            subClass.prototype = Object.create(superClass && superClass.prototype, {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
              }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
          }

          var Strike = function (_Inline) {
            _inherits(Strike, _Inline);

            function Strike() {
              _classCallCheck(this, Strike);

              return _possibleConstructorReturn(this, (Strike.__proto__ || Object.getPrototypeOf(Strike)).apply(this, arguments));
            }

            return Strike;
          }(_inline2.default);

          Strike.blotName = 'strike';
          Strike.tagName = 'S';
          exports.default = Strike;
          /***/
        },
        /* 71 */

        /***/
        function (module, exports, __webpack_require__) {

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var _inline = __webpack_require__(6);

          var _inline2 = _interopRequireDefault(_inline);

          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
              default: obj
            };
          }

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }

          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }

            return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
          }

          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
            }

            subClass.prototype = Object.create(superClass && superClass.prototype, {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
              }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
          }

          var Underline = function (_Inline) {
            _inherits(Underline, _Inline);

            function Underline() {
              _classCallCheck(this, Underline);

              return _possibleConstructorReturn(this, (Underline.__proto__ || Object.getPrototypeOf(Underline)).apply(this, arguments));
            }

            return Underline;
          }(_inline2.default);

          Underline.blotName = 'underline';
          Underline.tagName = 'U';
          exports.default = Underline;
          /***/
        },
        /* 72 */

        /***/
        function (module, exports, __webpack_require__) {

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var _createClass = function () {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }

            return function (Constructor, protoProps, staticProps) {
              if (protoProps) defineProperties(Constructor.prototype, protoProps);
              if (staticProps) defineProperties(Constructor, staticProps);
              return Constructor;
            };
          }();

          var _get = function get(object, property, receiver) {
            if (object === null) object = Function.prototype;
            var desc = Object.getOwnPropertyDescriptor(object, property);

            if (desc === undefined) {
              var parent = Object.getPrototypeOf(object);

              if (parent === null) {
                return undefined;
              } else {
                return get(parent, property, receiver);
              }
            } else if ("value" in desc) {
              return desc.value;
            } else {
              var getter = desc.get;

              if (getter === undefined) {
                return undefined;
              }

              return getter.call(receiver);
            }
          };

          var _parchment = __webpack_require__(0);

          var _parchment2 = _interopRequireDefault(_parchment);

          var _link = __webpack_require__(27);

          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
              default: obj
            };
          }

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }

          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }

            return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
          }

          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
            }

            subClass.prototype = Object.create(superClass && superClass.prototype, {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
              }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
          }

          var ATTRIBUTES = ['alt', 'height', 'width'];

          var Image = function (_Parchment$Embed) {
            _inherits(Image, _Parchment$Embed);

            function Image() {
              _classCallCheck(this, Image);

              return _possibleConstructorReturn(this, (Image.__proto__ || Object.getPrototypeOf(Image)).apply(this, arguments));
            }

            _createClass(Image, [{
              key: 'format',
              value: function format(name, value) {
                if (ATTRIBUTES.indexOf(name) > -1) {
                  if (value) {
                    this.domNode.setAttribute(name, value);
                  } else {
                    this.domNode.removeAttribute(name);
                  }
                } else {
                  _get(Image.prototype.__proto__ || Object.getPrototypeOf(Image.prototype), 'format', this).call(this, name, value);
                }
              }
            }], [{
              key: 'create',
              value: function create(value) {
                var node = _get(Image.__proto__ || Object.getPrototypeOf(Image), 'create', this).call(this, value);

                if (typeof value === 'string') {
                  node.setAttribute('src', this.sanitize(value));
                }

                return node;
              }
            }, {
              key: 'formats',
              value: function formats(domNode) {
                return ATTRIBUTES.reduce(function (formats, attribute) {
                  if (domNode.hasAttribute(attribute)) {
                    formats[attribute] = domNode.getAttribute(attribute);
                  }

                  return formats;
                }, {});
              }
            }, {
              key: 'match',
              value: function match(url) {
                return /\.(jpe?g|gif|png)$/.test(url) || /^data:image\/.+;base64/.test(url);
              }
            }, {
              key: 'sanitize',
              value: function sanitize(url) {
                return (0, _link.sanitize)(url, ['http', 'https', 'data']) ? url : '//:0';
              }
            }, {
              key: 'value',
              value: function value(domNode) {
                return domNode.getAttribute('src');
              }
            }]);

            return Image;
          }(_parchment2.default.Embed);

          Image.blotName = 'image';
          Image.tagName = 'IMG';
          exports.default = Image;
          /***/
        },
        /* 73 */

        /***/
        function (module, exports, __webpack_require__) {

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var _createClass = function () {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }

            return function (Constructor, protoProps, staticProps) {
              if (protoProps) defineProperties(Constructor.prototype, protoProps);
              if (staticProps) defineProperties(Constructor, staticProps);
              return Constructor;
            };
          }();

          var _get = function get(object, property, receiver) {
            if (object === null) object = Function.prototype;
            var desc = Object.getOwnPropertyDescriptor(object, property);

            if (desc === undefined) {
              var parent = Object.getPrototypeOf(object);

              if (parent === null) {
                return undefined;
              } else {
                return get(parent, property, receiver);
              }
            } else if ("value" in desc) {
              return desc.value;
            } else {
              var getter = desc.get;

              if (getter === undefined) {
                return undefined;
              }

              return getter.call(receiver);
            }
          };

          var _block = __webpack_require__(4);

          var _link = __webpack_require__(27);

          var _link2 = _interopRequireDefault(_link);

          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
              default: obj
            };
          }

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }

          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }

            return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
          }

          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
            }

            subClass.prototype = Object.create(superClass && superClass.prototype, {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
              }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
          }

          var ATTRIBUTES = ['height', 'width'];

          var Video = function (_BlockEmbed) {
            _inherits(Video, _BlockEmbed);

            function Video() {
              _classCallCheck(this, Video);

              return _possibleConstructorReturn(this, (Video.__proto__ || Object.getPrototypeOf(Video)).apply(this, arguments));
            }

            _createClass(Video, [{
              key: 'format',
              value: function format(name, value) {
                if (ATTRIBUTES.indexOf(name) > -1) {
                  if (value) {
                    this.domNode.setAttribute(name, value);
                  } else {
                    this.domNode.removeAttribute(name);
                  }
                } else {
                  _get(Video.prototype.__proto__ || Object.getPrototypeOf(Video.prototype), 'format', this).call(this, name, value);
                }
              }
            }], [{
              key: 'create',
              value: function create(value) {
                var node = _get(Video.__proto__ || Object.getPrototypeOf(Video), 'create', this).call(this, value);

                node.setAttribute('frameborder', '0');
                node.setAttribute('allowfullscreen', true);
                node.setAttribute('src', this.sanitize(value));
                return node;
              }
            }, {
              key: 'formats',
              value: function formats(domNode) {
                return ATTRIBUTES.reduce(function (formats, attribute) {
                  if (domNode.hasAttribute(attribute)) {
                    formats[attribute] = domNode.getAttribute(attribute);
                  }

                  return formats;
                }, {});
              }
            }, {
              key: 'sanitize',
              value: function sanitize(url) {
                return _link2.default.sanitize(url);
              }
            }, {
              key: 'value',
              value: function value(domNode) {
                return domNode.getAttribute('src');
              }
            }]);

            return Video;
          }(_block.BlockEmbed);

          Video.blotName = 'video';
          Video.className = 'ql-video';
          Video.tagName = 'IFRAME';
          exports.default = Video;
          /***/
        },
        /* 74 */

        /***/
        function (module, exports, __webpack_require__) {

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = exports.FormulaBlot = undefined;

          var _createClass = function () {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }

            return function (Constructor, protoProps, staticProps) {
              if (protoProps) defineProperties(Constructor.prototype, protoProps);
              if (staticProps) defineProperties(Constructor, staticProps);
              return Constructor;
            };
          }();

          var _get = function get(object, property, receiver) {
            if (object === null) object = Function.prototype;
            var desc = Object.getOwnPropertyDescriptor(object, property);

            if (desc === undefined) {
              var parent = Object.getPrototypeOf(object);

              if (parent === null) {
                return undefined;
              } else {
                return get(parent, property, receiver);
              }
            } else if ("value" in desc) {
              return desc.value;
            } else {
              var getter = desc.get;

              if (getter === undefined) {
                return undefined;
              }

              return getter.call(receiver);
            }
          };

          var _embed = __webpack_require__(35);

          var _embed2 = _interopRequireDefault(_embed);

          var _quill = __webpack_require__(5);

          var _quill2 = _interopRequireDefault(_quill);

          var _module = __webpack_require__(9);

          var _module2 = _interopRequireDefault(_module);

          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
              default: obj
            };
          }

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }

          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }

            return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
          }

          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
            }

            subClass.prototype = Object.create(superClass && superClass.prototype, {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
              }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
          }

          var FormulaBlot = function (_Embed) {
            _inherits(FormulaBlot, _Embed);

            function FormulaBlot() {
              _classCallCheck(this, FormulaBlot);

              return _possibleConstructorReturn(this, (FormulaBlot.__proto__ || Object.getPrototypeOf(FormulaBlot)).apply(this, arguments));
            }

            _createClass(FormulaBlot, null, [{
              key: 'create',
              value: function create(value) {
                var node = _get(FormulaBlot.__proto__ || Object.getPrototypeOf(FormulaBlot), 'create', this).call(this, value);

                if (typeof value === 'string') {
                  window.katex.render(value, node, {
                    throwOnError: false,
                    errorColor: '#f00'
                  });
                  node.setAttribute('data-value', value);
                }

                return node;
              }
            }, {
              key: 'value',
              value: function value(domNode) {
                return domNode.getAttribute('data-value');
              }
            }]);

            return FormulaBlot;
          }(_embed2.default);

          FormulaBlot.blotName = 'formula';
          FormulaBlot.className = 'ql-formula';
          FormulaBlot.tagName = 'SPAN';

          var Formula = function (_Module) {
            _inherits(Formula, _Module);

            _createClass(Formula, null, [{
              key: 'register',
              value: function register() {
                _quill2.default.register(FormulaBlot, true);
              }
            }]);

            function Formula() {
              _classCallCheck(this, Formula);

              var _this2 = _possibleConstructorReturn(this, (Formula.__proto__ || Object.getPrototypeOf(Formula)).call(this));

              if (window.katex == null) {
                throw new Error('Formula module requires KaTeX.');
              }

              return _this2;
            }

            return Formula;
          }(_module2.default);

          exports.FormulaBlot = FormulaBlot;
          exports.default = Formula;
          /***/
        },
        /* 75 */

        /***/
        function (module, exports, __webpack_require__) {

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = exports.CodeToken = exports.CodeBlock = undefined;

          var _createClass = function () {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }

            return function (Constructor, protoProps, staticProps) {
              if (protoProps) defineProperties(Constructor.prototype, protoProps);
              if (staticProps) defineProperties(Constructor, staticProps);
              return Constructor;
            };
          }();

          var _get = function get(object, property, receiver) {
            if (object === null) object = Function.prototype;
            var desc = Object.getOwnPropertyDescriptor(object, property);

            if (desc === undefined) {
              var parent = Object.getPrototypeOf(object);

              if (parent === null) {
                return undefined;
              } else {
                return get(parent, property, receiver);
              }
            } else if ("value" in desc) {
              return desc.value;
            } else {
              var getter = desc.get;

              if (getter === undefined) {
                return undefined;
              }

              return getter.call(receiver);
            }
          };

          var _parchment = __webpack_require__(0);

          var _parchment2 = _interopRequireDefault(_parchment);

          var _quill = __webpack_require__(5);

          var _quill2 = _interopRequireDefault(_quill);

          var _module = __webpack_require__(9);

          var _module2 = _interopRequireDefault(_module);

          var _code = __webpack_require__(13);

          var _code2 = _interopRequireDefault(_code);

          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
              default: obj
            };
          }

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }

          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }

            return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
          }

          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
            }

            subClass.prototype = Object.create(superClass && superClass.prototype, {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
              }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
          }

          var SyntaxCodeBlock = function (_CodeBlock) {
            _inherits(SyntaxCodeBlock, _CodeBlock);

            function SyntaxCodeBlock() {
              _classCallCheck(this, SyntaxCodeBlock);

              return _possibleConstructorReturn(this, (SyntaxCodeBlock.__proto__ || Object.getPrototypeOf(SyntaxCodeBlock)).apply(this, arguments));
            }

            _createClass(SyntaxCodeBlock, [{
              key: 'replaceWith',
              value: function replaceWith(block) {
                this.domNode.textContent = this.domNode.textContent;
                this.attach();

                _get(SyntaxCodeBlock.prototype.__proto__ || Object.getPrototypeOf(SyntaxCodeBlock.prototype), 'replaceWith', this).call(this, block);
              }
            }, {
              key: 'highlight',
              value: function highlight(_highlight) {
                var text = this.domNode.textContent;

                if (this.cachedText !== text) {
                  if (text.trim().length > 0 || this.cachedText == null) {
                    this.domNode.innerHTML = _highlight(text);
                    this.domNode.normalize();
                    this.attach();
                  }

                  this.cachedText = text;
                }
              }
            }]);

            return SyntaxCodeBlock;
          }(_code2.default);

          SyntaxCodeBlock.className = 'ql-syntax';
          var CodeToken = new _parchment2.default.Attributor.Class('token', 'hljs', {
            scope: _parchment2.default.Scope.INLINE
          });

          var Syntax = function (_Module) {
            _inherits(Syntax, _Module);

            _createClass(Syntax, null, [{
              key: 'register',
              value: function register() {
                _quill2.default.register(CodeToken, true);

                _quill2.default.register(SyntaxCodeBlock, true);
              }
            }]);

            function Syntax(quill, options) {
              _classCallCheck(this, Syntax);

              var _this2 = _possibleConstructorReturn(this, (Syntax.__proto__ || Object.getPrototypeOf(Syntax)).call(this, quill, options));

              if (typeof _this2.options.highlight !== 'function') {
                throw new Error('Syntax module requires highlight.js. Please include the library on the page before Quill.');
              }

              var timer = null;

              _this2.quill.on(_quill2.default.events.SCROLL_OPTIMIZE, function () {
                clearTimeout(timer);
                timer = setTimeout(function () {
                  _this2.highlight();

                  timer = null;
                }, _this2.options.interval);
              });

              _this2.highlight();

              return _this2;
            }

            _createClass(Syntax, [{
              key: 'highlight',
              value: function highlight() {
                var _this3 = this;

                if (this.quill.selection.composing) return;
                this.quill.update(_quill2.default.sources.USER);
                var range = this.quill.getSelection();
                this.quill.scroll.descendants(SyntaxCodeBlock).forEach(function (code) {
                  code.highlight(_this3.options.highlight);
                });
                this.quill.update(_quill2.default.sources.SILENT);

                if (range != null) {
                  this.quill.setSelection(range, _quill2.default.sources.SILENT);
                }
              }
            }]);

            return Syntax;
          }(_module2.default);

          Syntax.DEFAULTS = {
            highlight: function () {
              if (window.hljs == null) return null;
              return function (text) {
                var result = window.hljs.highlightAuto(text);
                return result.value;
              };
            }(),
            interval: 1000
          };
          exports.CodeBlock = SyntaxCodeBlock;
          exports.CodeToken = CodeToken;
          exports.default = Syntax;
          /***/
        },
        /* 76 */

        /***/
        function (module, exports) {
          module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=3 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=13 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=9 y1=4 y2=4></line> </svg>";
          /***/
        },
        /* 77 */

        /***/
        function (module, exports) {
          module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=14 x2=4 y1=14 y2=14></line> <line class=ql-stroke x1=12 x2=6 y1=4 y2=4></line> </svg>";
          /***/
        },
        /* 78 */

        /***/
        function (module, exports) {
          module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=5 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=9 y1=4 y2=4></line> </svg>";
          /***/
        },
        /* 79 */

        /***/
        function (module, exports) {
          module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=3 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=3 y1=4 y2=4></line> </svg>";
          /***/
        },
        /* 80 */

        /***/
        function (module, exports) {
          module.exports = "<svg viewbox=\"0 0 18 18\"> <g class=\"ql-fill ql-color-label\"> <polygon points=\"6 6.868 6 6 5 6 5 7 5.942 7 6 6.868\"></polygon> <rect height=1 width=1 x=4 y=4></rect> <polygon points=\"6.817 5 6 5 6 6 6.38 6 6.817 5\"></polygon> <rect height=1 width=1 x=2 y=6></rect> <rect height=1 width=1 x=3 y=5></rect> <rect height=1 width=1 x=4 y=7></rect> <polygon points=\"4 11.439 4 11 3 11 3 12 3.755 12 4 11.439\"></polygon> <rect height=1 width=1 x=2 y=12></rect> <rect height=1 width=1 x=2 y=9></rect> <rect height=1 width=1 x=2 y=15></rect> <polygon points=\"4.63 10 4 10 4 11 4.192 11 4.63 10\"></polygon> <rect height=1 width=1 x=3 y=8></rect> <path d=M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z></path> <path d=M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z></path> <path d=M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z></path> <rect height=1 width=1 x=12 y=2></rect> <rect height=1 width=1 x=11 y=3></rect> <path d=M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z></path> <rect height=1 width=1 x=2 y=3></rect> <rect height=1 width=1 x=6 y=2></rect> <rect height=1 width=1 x=3 y=2></rect> <rect height=1 width=1 x=5 y=3></rect> <rect height=1 width=1 x=9 y=2></rect> <rect height=1 width=1 x=15 y=14></rect> <polygon points=\"13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174\"></polygon> <rect height=1 width=1 x=13 y=7></rect> <rect height=1 width=1 x=15 y=5></rect> <rect height=1 width=1 x=14 y=6></rect> <rect height=1 width=1 x=15 y=8></rect> <rect height=1 width=1 x=14 y=9></rect> <path d=M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z></path> <rect height=1 width=1 x=14 y=3></rect> <polygon points=\"12 6.868 12 6 11.62 6 12 6.868\"></polygon> <rect height=1 width=1 x=15 y=2></rect> <rect height=1 width=1 x=12 y=5></rect> <rect height=1 width=1 x=13 y=4></rect> <polygon points=\"12.933 9 13 9 13 8 12.495 8 12.933 9\"></polygon> <rect height=1 width=1 x=9 y=14></rect> <rect height=1 width=1 x=8 y=15></rect> <path d=M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z></path> <rect height=1 width=1 x=5 y=15></rect> <path d=M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z></path> <rect height=1 width=1 x=11 y=15></rect> <path d=M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z></path> <rect height=1 width=1 x=14 y=15></rect> <rect height=1 width=1 x=15 y=11></rect> </g> <polyline class=ql-stroke points=\"5.5 13 9 5 12.5 13\"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=11 y2=11></line> </svg>";
          /***/
        },
        /* 81 */

        /***/
        function (module, exports) {
          module.exports = "<svg viewbox=\"0 0 18 18\"> <rect class=\"ql-fill ql-stroke\" height=3 width=3 x=4 y=5></rect> <rect class=\"ql-fill ql-stroke\" height=3 width=3 x=11 y=5></rect> <path class=\"ql-even ql-fill ql-stroke\" d=M7,8c0,4.031-3,5-3,5></path> <path class=\"ql-even ql-fill ql-stroke\" d=M14,8c0,4.031-3,5-3,5></path> </svg>";
          /***/
        },
        /* 82 */

        /***/
        function (module, exports) {
          module.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-stroke d=M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z></path> <path class=ql-stroke d=M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z></path> </svg>";
          /***/
        },
        /* 83 */

        /***/
        function (module, exports) {
          module.exports = "<svg class=\"\" viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=5 x2=13 y1=3 y2=3></line> <line class=ql-stroke x1=6 x2=9.35 y1=12 y2=3></line> <line class=ql-stroke x1=11 x2=15 y1=11 y2=15></line> <line class=ql-stroke x1=15 x2=11 y1=11 y2=15></line> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=7 x=2 y=14></rect> </svg>";
          /***/
        },
        /* 84 */

        /***/
        function (module, exports) {
          module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=\"ql-color-label ql-stroke ql-transparent\" x1=3 x2=15 y1=15 y2=15></line> <polyline class=ql-stroke points=\"5.5 11 9 3 12.5 11\"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=9 y2=9></line> </svg>";
          /***/
        },
        /* 85 */

        /***/
        function (module, exports) {
          module.exports = "<svg viewbox=\"0 0 18 18\"> <polygon class=\"ql-stroke ql-fill\" points=\"3 11 5 9 3 7 3 11\"></polygon> <line class=\"ql-stroke ql-fill\" x1=15 x2=11 y1=4 y2=4></line> <path class=ql-fill d=M11,3a3,3,0,0,0,0,6h1V3H11Z></path> <rect class=ql-fill height=11 width=1 x=11 y=4></rect> <rect class=ql-fill height=11 width=1 x=13 y=4></rect> </svg>";
          /***/
        },
        /* 86 */

        /***/
        function (module, exports) {
          module.exports = "<svg viewbox=\"0 0 18 18\"> <polygon class=\"ql-stroke ql-fill\" points=\"15 12 13 10 15 8 15 12\"></polygon> <line class=\"ql-stroke ql-fill\" x1=9 x2=5 y1=4 y2=4></line> <path class=ql-fill d=M5,3A3,3,0,0,0,5,9H6V3H5Z></path> <rect class=ql-fill height=11 width=1 x=5 y=4></rect> <rect class=ql-fill height=11 width=1 x=7 y=4></rect> </svg>";
          /***/
        },
        /* 87 */

        /***/
        function (module, exports) {
          module.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-fill d=M14,16H4a1,1,0,0,1,0-2H14A1,1,0,0,1,14,16Z /> <path class=ql-fill d=M14,4H4A1,1,0,0,1,4,2H14A1,1,0,0,1,14,4Z /> <rect class=ql-fill x=3 y=6 width=12 height=6 rx=1 ry=1 /> </svg>";
          /***/
        },
        /* 88 */

        /***/
        function (module, exports) {
          module.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-fill d=M13,16H5a1,1,0,0,1,0-2h8A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H5A1,1,0,0,1,5,2h8A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=2 y=6 width=14 height=6 rx=1 ry=1 /> </svg>";
          /***/
        },
        /* 89 */

        /***/
        function (module, exports) {
          module.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-fill d=M15,8H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,8Z /> <path class=ql-fill d=M15,12H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,12Z /> <path class=ql-fill d=M15,16H5a1,1,0,0,1,0-2H15A1,1,0,0,1,15,16Z /> <path class=ql-fill d=M15,4H5A1,1,0,0,1,5,2H15A1,1,0,0,1,15,4Z /> <rect class=ql-fill x=2 y=6 width=8 height=6 rx=1 ry=1 /> </svg>";
          /***/
        },
        /* 90 */

        /***/
        function (module, exports) {
          module.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-fill d=M5,8H3A1,1,0,0,1,3,6H5A1,1,0,0,1,5,8Z /> <path class=ql-fill d=M5,12H3a1,1,0,0,1,0-2H5A1,1,0,0,1,5,12Z /> <path class=ql-fill d=M13,16H3a1,1,0,0,1,0-2H13A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H3A1,1,0,0,1,3,2H13A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=8 y=6 width=8 height=6 rx=1 ry=1 transform=\"translate(24 18) rotate(-180)\"/> </svg>";
          /***/
        },
        /* 91 */

        /***/
        function (module, exports) {
          module.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-fill d=M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z></path> <rect class=ql-fill height=1.6 rx=0.8 ry=0.8 width=5 x=5.15 y=6.2></rect> <path class=ql-fill d=M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z></path> </svg>";
          /***/
        },
        /* 92 */

        /***/
        function (module, exports) {
          module.exports = "<svg viewBox=\"0 0 18 18\"> <path class=ql-fill d=M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z /> </svg>";
          /***/
        },
        /* 93 */

        /***/
        function (module, exports) {
          module.exports = "<svg viewBox=\"0 0 18 18\"> <path class=ql-fill d=M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z /> </svg>";
          /***/
        },
        /* 94 */

        /***/
        function (module, exports) {
          module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=7 x2=13 y1=4 y2=4></line> <line class=ql-stroke x1=5 x2=11 y1=14 y2=14></line> <line class=ql-stroke x1=8 x2=10 y1=14 y2=4></line> </svg>";
          /***/
        },
        /* 95 */

        /***/
        function (module, exports) {
          module.exports = "<svg viewbox=\"0 0 18 18\"> <rect class=ql-stroke height=10 width=12 x=3 y=4></rect> <circle class=ql-fill cx=6 cy=7 r=1></circle> <polyline class=\"ql-even ql-fill\" points=\"5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12\"></polyline> </svg>";
          /***/
        },
        /* 96 */

        /***/
        function (module, exports) {
          module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=\"ql-fill ql-stroke\" points=\"3 7 3 11 5 9 3 7\"></polyline> </svg>";
          /***/
        },
        /* 97 */

        /***/
        function (module, exports) {
          module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points=\"5 7 5 11 3 9 5 7\"></polyline> </svg>";
          /***/
        },
        /* 98 */

        /***/
        function (module, exports) {
          module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=7 x2=11 y1=7 y2=11></line> <path class=\"ql-even ql-stroke\" d=M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z></path> <path class=\"ql-even ql-stroke\" d=M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z></path> </svg>";
          /***/
        },
        /* 99 */

        /***/
        function (module, exports) {
          module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=7 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=7 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=7 x2=15 y1=14 y2=14></line> <line class=\"ql-stroke ql-thin\" x1=2.5 x2=4.5 y1=5.5 y2=5.5></line> <path class=ql-fill d=M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z></path> <path class=\"ql-stroke ql-thin\" d=M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156></path> <path class=\"ql-stroke ql-thin\" d=M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109></path> </svg>";
          /***/
        },
        /* 100 */

        /***/
        function (module, exports) {
          module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=6 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=6 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=6 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=3 y1=4 y2=4></line> <line class=ql-stroke x1=3 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=3 y1=14 y2=14></line> </svg>";
          /***/
        },
        /* 101 */

        /***/
        function (module, exports) {
          module.exports = "<svg class=\"\" viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=9 x2=15 y1=4 y2=4></line> <polyline class=ql-stroke points=\"3 4 4 5 6 3\"></polyline> <line class=ql-stroke x1=9 x2=15 y1=14 y2=14></line> <polyline class=ql-stroke points=\"3 14 4 15 6 13\"></polyline> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points=\"3 9 4 10 6 8\"></polyline> </svg>";
          /***/
        },
        /* 102 */

        /***/
        function (module, exports) {
          module.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-fill d=M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z /> <path class=ql-fill d=M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z /> </svg>";
          /***/
        },
        /* 103 */

        /***/
        function (module, exports) {
          module.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-fill d=M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z /> <path class=ql-fill d=M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z /> </svg>";
          /***/
        },
        /* 104 */

        /***/
        function (module, exports) {
          module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=\"ql-stroke ql-thin\" x1=15.5 x2=2.5 y1=8.5 y2=9.5></line> <path class=ql-fill d=M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z></path> <path class=ql-fill d=M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z></path> </svg>";
          /***/
        },
        /* 105 */

        /***/
        function (module, exports) {
          module.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-stroke d=M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3></path> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=12 x=3 y=15></rect> </svg>";
          /***/
        },
        /* 106 */

        /***/
        function (module, exports) {
          module.exports = "<svg viewbox=\"0 0 18 18\"> <rect class=ql-stroke height=12 width=12 x=3 y=3></rect> <rect class=ql-fill height=12 width=1 x=5 y=3></rect> <rect class=ql-fill height=12 width=1 x=12 y=3></rect> <rect class=ql-fill height=2 width=8 x=5 y=8></rect> <rect class=ql-fill height=1 width=3 x=3 y=5></rect> <rect class=ql-fill height=1 width=3 x=3 y=7></rect> <rect class=ql-fill height=1 width=3 x=3 y=10></rect> <rect class=ql-fill height=1 width=3 x=3 y=12></rect> <rect class=ql-fill height=1 width=3 x=12 y=5></rect> <rect class=ql-fill height=1 width=3 x=12 y=7></rect> <rect class=ql-fill height=1 width=3 x=12 y=10></rect> <rect class=ql-fill height=1 width=3 x=12 y=12></rect> </svg>";
          /***/
        },
        /* 107 */

        /***/
        function (module, exports) {
          module.exports = "<svg viewbox=\"0 0 18 18\"> <polygon class=ql-stroke points=\"7 11 9 13 11 11 7 11\"></polygon> <polygon class=ql-stroke points=\"7 7 9 5 11 7 7 7\"></polygon> </svg>";
          /***/
        },
        /* 108 */

        /***/
        function (module, exports, __webpack_require__) {

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = exports.BubbleTooltip = undefined;

          var _get = function get(object, property, receiver) {
            if (object === null) object = Function.prototype;
            var desc = Object.getOwnPropertyDescriptor(object, property);

            if (desc === undefined) {
              var parent = Object.getPrototypeOf(object);

              if (parent === null) {
                return undefined;
              } else {
                return get(parent, property, receiver);
              }
            } else if ("value" in desc) {
              return desc.value;
            } else {
              var getter = desc.get;

              if (getter === undefined) {
                return undefined;
              }

              return getter.call(receiver);
            }
          };

          var _createClass = function () {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }

            return function (Constructor, protoProps, staticProps) {
              if (protoProps) defineProperties(Constructor.prototype, protoProps);
              if (staticProps) defineProperties(Constructor, staticProps);
              return Constructor;
            };
          }();

          var _extend = __webpack_require__(3);

          var _extend2 = _interopRequireDefault(_extend);

          var _emitter = __webpack_require__(8);

          var _emitter2 = _interopRequireDefault(_emitter);

          var _base = __webpack_require__(43);

          var _base2 = _interopRequireDefault(_base);

          var _selection = __webpack_require__(15);

          var _icons = __webpack_require__(41);

          var _icons2 = _interopRequireDefault(_icons);

          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
              default: obj
            };
          }

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }

          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }

            return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
          }

          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
            }

            subClass.prototype = Object.create(superClass && superClass.prototype, {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
              }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
          }

          var TOOLBAR_CONFIG = [['bold', 'italic', 'link'], [{
            header: 1
          }, {
            header: 2
          }, 'blockquote']];

          var BubbleTheme = function (_BaseTheme) {
            _inherits(BubbleTheme, _BaseTheme);

            function BubbleTheme(quill, options) {
              _classCallCheck(this, BubbleTheme);

              if (options.modules.toolbar != null && options.modules.toolbar.container == null) {
                options.modules.toolbar.container = TOOLBAR_CONFIG;
              }

              var _this = _possibleConstructorReturn(this, (BubbleTheme.__proto__ || Object.getPrototypeOf(BubbleTheme)).call(this, quill, options));

              _this.quill.container.classList.add('ql-bubble');

              return _this;
            }

            _createClass(BubbleTheme, [{
              key: 'extendToolbar',
              value: function extendToolbar(toolbar) {
                this.tooltip = new BubbleTooltip(this.quill, this.options.bounds);
                this.tooltip.root.appendChild(toolbar.container);
                this.buildButtons([].slice.call(toolbar.container.querySelectorAll('button')), _icons2.default);
                this.buildPickers([].slice.call(toolbar.container.querySelectorAll('select')), _icons2.default);
              }
            }]);

            return BubbleTheme;
          }(_base2.default);

          BubbleTheme.DEFAULTS = (0, _extend2.default)(true, {}, _base2.default.DEFAULTS, {
            modules: {
              toolbar: {
                handlers: {
                  link: function link(value) {
                    if (!value) {
                      this.quill.format('link', false);
                    } else {
                      this.quill.theme.tooltip.edit();
                    }
                  }
                }
              }
            }
          });

          var BubbleTooltip = function (_BaseTooltip) {
            _inherits(BubbleTooltip, _BaseTooltip);

            function BubbleTooltip(quill, bounds) {
              _classCallCheck(this, BubbleTooltip);

              var _this2 = _possibleConstructorReturn(this, (BubbleTooltip.__proto__ || Object.getPrototypeOf(BubbleTooltip)).call(this, quill, bounds));

              _this2.quill.on(_emitter2.default.events.EDITOR_CHANGE, function (type, range, oldRange, source) {
                if (type !== _emitter2.default.events.SELECTION_CHANGE) return;

                if (range != null && range.length > 0 && source === _emitter2.default.sources.USER) {
                  _this2.show(); // Lock our width so we will expand beyond our offsetParent boundaries


                  _this2.root.style.left = '0px';
                  _this2.root.style.width = '';
                  _this2.root.style.width = _this2.root.offsetWidth + 'px';

                  var lines = _this2.quill.getLines(range.index, range.length);

                  if (lines.length === 1) {
                    _this2.position(_this2.quill.getBounds(range));
                  } else {
                    var lastLine = lines[lines.length - 1];

                    var index = _this2.quill.getIndex(lastLine);

                    var length = Math.min(lastLine.length() - 1, range.index + range.length - index);

                    var _bounds = _this2.quill.getBounds(new _selection.Range(index, length));

                    _this2.position(_bounds);
                  }
                } else if (document.activeElement !== _this2.textbox && _this2.quill.hasFocus()) {
                  _this2.hide();
                }
              });

              return _this2;
            }

            _createClass(BubbleTooltip, [{
              key: 'listen',
              value: function listen() {
                var _this3 = this;

                _get(BubbleTooltip.prototype.__proto__ || Object.getPrototypeOf(BubbleTooltip.prototype), 'listen', this).call(this);

                this.root.querySelector('.ql-close').addEventListener('click', function () {
                  _this3.root.classList.remove('ql-editing');
                });
                this.quill.on(_emitter2.default.events.SCROLL_OPTIMIZE, function () {
                  // Let selection be restored by toolbar handlers before repositioning
                  setTimeout(function () {
                    if (_this3.root.classList.contains('ql-hidden')) return;

                    var range = _this3.quill.getSelection();

                    if (range != null) {
                      _this3.position(_this3.quill.getBounds(range));
                    }
                  }, 1);
                });
              }
            }, {
              key: 'cancel',
              value: function cancel() {
                this.show();
              }
            }, {
              key: 'position',
              value: function position(reference) {
                var shift = _get(BubbleTooltip.prototype.__proto__ || Object.getPrototypeOf(BubbleTooltip.prototype), 'position', this).call(this, reference);

                var arrow = this.root.querySelector('.ql-tooltip-arrow');
                arrow.style.marginLeft = '';
                if (shift === 0) return shift;
                arrow.style.marginLeft = -1 * shift - arrow.offsetWidth / 2 + 'px';
              }
            }]);

            return BubbleTooltip;
          }(_base.BaseTooltip);

          BubbleTooltip.TEMPLATE = ['<span class="ql-tooltip-arrow"></span>', '<div class="ql-tooltip-editor">', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-close"></a>', '</div>'].join('');
          exports.BubbleTooltip = BubbleTooltip;
          exports.default = BubbleTheme;
          /***/
        },
        /* 109 */

        /***/
        function (module, exports, __webpack_require__) {
          module.exports = __webpack_require__(63);
          /***/
        }
        /******/
        ])["default"]
      );
    });
  });
  var Quill = /*@__PURE__*/getDefaultExportFromCjs(quill);

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  var KbfWysiwyg = /*#__PURE__*/function (_EventTarget) {
    _inherits(KbfWysiwyg, _EventTarget);

    var _super = _createSuper(KbfWysiwyg);

    function KbfWysiwyg(selector) {
      var _this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, KbfWysiwyg);

      _this = _super.call(this); // Emituj wyjatek gdy nie podano selektora albo element nie zostal znaleziony

      if (!selector) throw errors.argumentNotFound("selector");
      _this.selector = selector;
      _this.$container = $(selector);
      _this.options = _objectSpread({
        modules: {
          toolbar: [['bold', 'italic', 'underline', 'strike'], [{
            'align': []
          }], [{
            'list': 'ordered'
          }, {
            'list': 'bullet'
          }]]
        },
        theme: 'bubble'
      }, options);

      _this.init();

      _this.addListeners();

      return _this;
    } // Dodaje listenery


    _createClass(KbfWysiwyg, [{
      key: "addListeners",
      value: function addListeners() {
        var instance = this; // Aktualizuj wartosc pola input

        this.editor.on('editor-change', function () {
          instance.setInputValue(instance.$contents.html());
        }); // Ustaw focus na edytorze

        $(window).on('click', function () {
          instance.$contents.removeClass('focus');
        });
        this.$contents.on('click', function (e) {
          e.stopPropagation();
          instance.$contents.addClass('focus');
        });
      } // Inicjalizuje

    }, {
      key: "init",
      value: function init() {
        // Aliasy
        this.on = this.addEventListener;
        this.off = this.removeEventListener;
        this.emit = this.dispatchEvent;
        this.editor = new Quill(this.selector, this.options);
        this.$contents = $('.ql-editor');
        this.$wysiwygInput = $('.wysiwyg').next('input[type="hidden"]');
        this.$wysiwygInput.html(this.$contents.html());
      } //Ustawia wartosc pola input

    }, {
      key: "setInputValue",
      value: function setInputValue(html) {
        var instance = this;
        if (html === '<p><br></p>' || html.length === 0) this.$wysiwygInput.attr('value', '');else this.$wysiwygInput.attr('value', html); // Emituj wartosc w polu edytora

        this.emit(new CustomEvent('change', {
          detail: instance.$wysiwygInput[0].value
        }));
      } // Ustawia wartosc poczatkowa dla edytora

    }, {
      key: "setInitialValue",
      value: function setInitialValue(html) {
        this.$contents.html(html);
        this.setInputValue(html);
      }
    }]);

    return KbfWysiwyg;
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
        var instance = this;
        this.$deleteButtons = $('a[data-id]');
        this.$serviceIdField = $('input[name="service_id"]');
        this.$uploadImageError = $('#upload-error');
        this.isPhone = window.innerWidth <= 480;
        this.isUploadImageValid = false;
        this.$form = $(this.isPhone ? '#add-service-phone' : '#add-service'); // Wysiwyg

        this.$descriptionFieldHidden = $('[name="service_description_hidden"]');
        this.wysiwyg = new KbfWysiwyg(this.isPhone ? '.service-description-phone .wysiwyg' : '.service-description-desktop .wysiwyg'); // Form validator

        this.form = new KbfForm({
          formName: this.isPhone ? 'add-service-phone' : 'add-service'
        }, 'pl');
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
              this.isUploadImageValid = true;
              $('#uploaded_image').attr('src', base64data);
              $modal.modal('hide');
            };
          });
        });
        this.$form.submit(function (event) {
          event.preventDefault();
          instance.form.validate();
          console.log(instance.isUploadImageValid);

          if (!instance.isUploadImageValid) {
            instance.$uploadImageError.removeClass('d-none');
            instance.$uploadImageError[0].removeAttribute('style');
          } else {
            if (!instance.$uploadImageError.hasClass('d-none')) instance.$uploadImageError.addClass('d-none');
          }

          console.log(instance.form.formIsValid); // formData.append("service_name", $("#service_name").val());
          // formData.append("service_price", $("#service_price").val());
          // formData.append("service_description", $("#service_description").val());
          //
          // $.ajax({
          //     type: 'POST',
          //     url: 'http://localhost/kbf2/api/add-service/',
          //     data: formData,
          //     processData: false,
          //     contentType: false
          // }).done(function(data) {
          //     console.log(data);
          //     window.location.href = location.protocol + '//' + location.host + location.pathname + "?action=service-added";
          // });
        });
        new KbfFooterTop();
        new KbfBackButton('.kbf-back-button');
        window.Alpine = module_default;
        module_default.start();
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
