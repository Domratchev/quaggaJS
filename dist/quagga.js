var Quagga =

(function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === 'object' && typeof module === 'object') {
        module.exports = factory(factory.toString()).default;
    } else if (typeof exports === 'object') {
        exports["Quagga"] = factory(factory.toString()).default;
    } else {
        root["Quagga"] = factory(factory.toString()).default;
    }
})(this, function(__factorySource__) {
    return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/quagga.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!***********************************************************************************!*\
  !*** /Users/adomratchev/node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!***************************************************************************************!*\
  !*** /Users/adomratchev/node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!**********************************************************************************!*\
  !*** /Users/adomratchev/node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

module.exports = _asyncToGenerator;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!********************************************************************************!*\
  !*** /Users/adomratchev/node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/createClass.js":
/*!*****************************************************************************!*\
  !*** /Users/adomratchev/node_modules/@babel/runtime/helpers/createClass.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

module.exports = _createClass;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/defineProperty.js":
/*!********************************************************************************!*\
  !*** /Users/adomratchev/node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

module.exports = _defineProperty;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/get.js":
/*!*********************************************************************!*\
  !*** /Users/adomratchev/node_modules/@babel/runtime/helpers/get.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(/*! ./getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/getPrototypeOf.js");

var superPropBase = __webpack_require__(/*! ./superPropBase */ "../../node_modules/@babel/runtime/helpers/superPropBase.js");

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    module.exports = _get = Reflect.get;
  } else {
    module.exports = _get = function _get(target, property, receiver) {
      var base = superPropBase(target, property);
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

module.exports = _get;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!********************************************************************************!*\
  !*** /Users/adomratchev/node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/inherits.js":
/*!**************************************************************************!*\
  !*** /Users/adomratchev/node_modules/@babel/runtime/helpers/inherits.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "../../node_modules/@babel/runtime/helpers/setPrototypeOf.js");

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
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!*********************************************************************************!*\
  !*** /Users/adomratchev/node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!***********************************************************************************!*\
  !*** /Users/adomratchev/node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!*******************************************************************************************!*\
  !*** /Users/adomratchev/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "../../node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "../../node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!********************************************************************************!*\
  !*** /Users/adomratchev/node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/superPropBase.js":
/*!*******************************************************************************!*\
  !*** /Users/adomratchev/node_modules/@babel/runtime/helpers/superPropBase.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(/*! ./getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/getPrototypeOf.js");

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

module.exports = _superPropBase;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!***********************************************************************************!*\
  !*** /Users/adomratchev/node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "../../node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "../../node_modules/@babel/runtime/helpers/iterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "../../node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/typeof.js":
/*!************************************************************************!*\
  !*** /Users/adomratchev/node_modules/@babel/runtime/helpers/typeof.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "../../node_modules/@babel/runtime/regenerator/index.js":
/*!***************************************************************************!*\
  !*** /Users/adomratchev/node_modules/@babel/runtime/regenerator/index.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "../../node_modules/regenerator-runtime/runtime-module.js");


/***/ }),

/***/ "../../node_modules/regenerator-runtime/runtime-module.js":
/*!*****************************************************************************!*\
  !*** /Users/adomratchev/node_modules/regenerator-runtime/runtime-module.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ "../../node_modules/regenerator-runtime/runtime.js");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ "../../node_modules/regenerator-runtime/runtime.js":
/*!**********************************************************************!*\
  !*** /Users/adomratchev/node_modules/regenerator-runtime/runtime.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
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
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
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
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
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
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
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
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
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

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

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
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
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
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
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
          context.arg = undefined;
        }

        return !! caught;
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

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
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

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
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

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
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
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/analytics/result_collector.js":
/*!*******************************************!*\
  !*** ./src/analytics/result_collector.js ***!
  \*******************************************/
/*! exports provided: ResultCollector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultCollector", function() { return ResultCollector; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_image_debug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/image_debug */ "./src/common/image_debug.js");



var ResultCollector =
/*#__PURE__*/
function () {
  function ResultCollector(config) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ResultCollector);

    this._config = config;
    this._canvas = document.createElement('canvas');
    this._context = this._canvas.getContext('2d');
    this._results = [];
    this._capacity = config.capacity || 20;
    this._capture = config.capture === true;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ResultCollector, [{
    key: "_contains",
    value: function _contains(codeResult, list) {
      return !!list && list.some(function (item) {
        return Object.keys(item).every(function (key) {
          return item[key] === codeResult[key];
        });
      });
    }
  }, {
    key: "_passesFilter",
    value: function _passesFilter(codeResult, filter) {
      if (typeof filter === 'function') {
        return filter(codeResult);
      }

      return true;
    }
  }, {
    key: "_matchesConstraints",
    value: function _matchesConstraints(codeResult) {
      return codeResult && this._capacity && !this._contains(codeResult, this._config.blacklist) && this._passesFilter(codeResult, this._config.filter);
    }
  }, {
    key: "addResult",
    value: function addResult(data, imageWidth, imageHeight, codeResult) {
      if (this._matchesConstraints(codeResult)) {
        var result = {};
        this._capacity--;
        result.codeResult = codeResult;

        if (this._capture) {
          this._canvas.width = imageWidth;
          this._canvas.height = imageHeight;
          _common_image_debug__WEBPACK_IMPORTED_MODULE_2__["ImageDebug"].drawImage(data, imageWidth, imageHeight, this._context);
          result.frame = this._canvas.toDataURL();
        }

        this._results.push(result);
      }
    }
  }, {
    key: "getResults",
    value: function getResults() {
      return this._results;
    }
  }]);

  return ResultCollector;
}();

/***/ }),

/***/ "./src/common/cluster.js":
/*!*******************************!*\
  !*** ./src/common/cluster.js ***!
  \*******************************/
/*! exports provided: Cluster */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cluster", function() { return Cluster; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);



/**
 * Creates a cluster for grouping similar orientations of datapoints
 */
var Cluster =
/*#__PURE__*/
function () {
  function Cluster(threshold, point) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Cluster);

    this._threshold = threshold;
    this._points = [];
    this._center = {
      rad: 0,
      x: 0,
      y: 0
    };
    this._pointMap = {};

    if (point) {
      this.add(point);
    }
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Cluster, [{
    key: "add",
    value: function add(point) {
      if (!this._pointMap[point.id]) {
        this._pointMap[point.id] = point;

        this._points.push(point); // Update center


        this._center.rad = this._points.reduce(function (sum, p) {
          return sum + p.rad;
        }, 0) / this._points.length;
        this._center.x = Math.cos(this._center.rad);
        this._center.y = Math.sin(this._center.rad);
      }
    }
  }, {
    key: "fits",
    value: function fits(point) {
      // check cosine similarity to center-angle
      var similarity = Math.abs(point.point.x * this._center.x + point.point.y * this._center.y);
      return similarity > this._threshold;
    }
  }, {
    key: "points",
    get: function get() {
      return this._points;
    }
  }]);

  return Cluster;
}();

/***/ }),

/***/ "./src/common/cv_utils.js":
/*!********************************!*\
  !*** ./src/common/cv_utils.js ***!
  \********************************/
/*! exports provided: otsuThreshold, halfSample, hsv2rgb, calculatePatchSize, _parseCSSDimensionValues, _dimensionsConverters, computeImageArea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "otsuThreshold", function() { return otsuThreshold; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "halfSample", function() { return halfSample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hsv2rgb", function() { return hsv2rgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculatePatchSize", function() { return calculatePatchSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_parseCSSDimensionValues", function() { return _parseCSSDimensionValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_dimensionsConverters", function() { return _dimensionsConverters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeImageArea", function() { return computeImageArea; });
function _computeHistogram(imageWrapper, bitsPerPixel) {
  if (!bitsPerPixel) {
    bitsPerPixel = 8;
  }

  var imageData = imageWrapper.data;
  var bitShift = 8 - bitsPerPixel;
  var bucketCount = 1 << bitsPerPixel;
  var histogram = new Int32Array(bucketCount);

  for (var i = imageData.length; i--;) {
    histogram[imageData[i] >> bitShift]++;
  }

  return histogram;
}

function _determineOtsuThreshold(imageWrapper, bitsPerPixel) {
  if (!bitsPerPixel) {
    bitsPerPixel = 8;
  }

  var bitShift = 8 - bitsPerPixel;

  var hist = _computeHistogram(imageWrapper, bitsPerPixel);

  var vet = [0];
  var max = (1 << bitsPerPixel) - 1;

  function px(init, end) {
    var sum = 0;

    for (var i = init; i <= end; i++) {
      sum += hist[i];
    }

    return sum;
  }

  function mx(init, end) {
    var sum = 0;

    for (var i = init; i <= end; i++) {
      sum += i * hist[i];
    }

    return sum;
  }

  for (var k = 1; k < max; k++) {
    var p1 = px(0, k);
    var p2 = px(k + 1, max);
    var p12 = p1 * p2 || 1;
    var m1 = mx(0, k) * p2;
    var m2 = mx(k + 1, max) * p1;
    var m12 = m1 - m2;
    vet[k] = m12 * m12 / p12;
  } // index of max element


  var threshold = vet.reduce(function (maxIndex, item, index, array) {
    return item > array[maxIndex] ? index : maxIndex;
  }, 0);
  return threshold << bitShift;
}

function otsuThreshold(imageWrapper, targetWrapper) {
  var threshold = _determineOtsuThreshold(imageWrapper);

  var targetData = targetWrapper.data;
  imageWrapper.data.forEach(function (value, index) {
    targetData[index] = value < threshold ? 1 : 0;
  });
  return threshold;
}
/**
 * @param inImgWrapper {ImageWrapper} input image to be sampled
 * @param outImgWrapper {ImageWrapper} to be stored in
 */

function halfSample(inImgWrapper, outImgWrapper) {
  var inImg = inImgWrapper.data;
  var inWidth = inImgWrapper.size.x;
  var outImg = outImgWrapper.data;
  var endIndex = inImg.length;
  var outWidth = inWidth / 2;
  var topRowIndex = 0;
  var bottomRowIndex = inWidth;
  var outImgIndex = 0;

  while (bottomRowIndex < endIndex) {
    for (var i = 0; i < outWidth; i++) {
      outImg[outImgIndex] = inImg[topRowIndex] + inImg[topRowIndex + 1] + inImg[bottomRowIndex] + inImg[bottomRowIndex + 1] >> 2;
      outImgIndex++;
      topRowIndex += 2;
      bottomRowIndex += 2;
    }

    topRowIndex += inWidth;
    bottomRowIndex += inWidth;
  }
}
function hsv2rgb(hsv, rgb) {
  var h = hsv[0];
  var s = hsv[1];
  var v = hsv[2];
  var c = v * s;
  var x = c * (1 - Math.abs(h / 60 % 2 - 1));
  var m = v - c;
  var r = 0;
  var g = 0;
  var b = 0;

  if (h < 60) {
    r = c;
    g = x;
  } else if (h < 120) {
    r = x;
    g = c;
  } else if (h < 180) {
    g = c;
    b = x;
  } else if (h < 240) {
    g = x;
    b = c;
  } else if (h < 300) {
    r = x;
    b = c;
  } else if (h < 360) {
    r = c;
    b = x;
  }

  rgb = rgb || [0, 0, 0];
  rgb[0] = (r + m) * 255 | 0;
  rgb[1] = (g + m) * 255 | 0;
  rgb[2] = (b + m) * 255 | 0;
  return rgb;
}

function _computeDivisors(n) {
  var largeDivisors = [];
  var divisors = [];

  for (var divisor = 1; divisor * divisor <= n; divisor++) {
    if (n % divisor === 0) {
      divisors.push(divisor);

      if (divisor * divisor !== n) {
        largeDivisors.unshift(n / divisor | 0);
      }
    }
  }

  return divisors.concat(largeDivisors);
}

function _computeCommonDivisors(m, n) {
  if (m === n) {
    return _computeDivisors(m);
  }

  var max = m > n ? m : n;
  var min = m > n ? n : m;
  var largeDivisors = [];
  var divisors = [];

  for (var divisor = 1; divisor * divisor <= min; divisor++) {
    if (max % divisor === 0 && min % divisor === 0) {
      divisors.push(divisor);
      var largeDivisor = min / divisor | 0;

      if (divisor !== largeDivisor && max % largeDivisor === 0) {
        largeDivisors.unshift();
      }
    }
  }

  return divisors.concat(largeDivisors);
}

function calculatePatchSize(patchSize, imgSize) {
  var wideSide = Math.max(imgSize.x | 0, imgSize.y | 0) | 0;
  var nrOfPatchesList = [8, 10, 15, 20, 32, 60, 80];
  var nrOfPatchesMap = {
    'x-small': 5,
    small: 4,
    medium: 3,
    large: 2,
    'x-large': 1
  };
  var nrOfPatchesIndex = nrOfPatchesMap[patchSize] || nrOfPatchesMap.medium | 0;
  var nrOfPatches = nrOfPatchesList[nrOfPatchesIndex] | 0;
  var desiredPatchSize = wideSide / nrOfPatches | 0;

  function findPatchSizeForDivisors(divisors) {
    var i = 0;
    var found = divisors[divisors.length >> 1] | 0;

    while (i < divisors.length - 1 && divisors[i] < desiredPatchSize) {
      i++;
    }

    if (i > 0) {
      if (Math.abs(divisors[i] - desiredPatchSize) > Math.abs(divisors[i - 1] - desiredPatchSize)) {
        found = divisors[i - 1] | 0;
      } else {
        found = divisors[i] | 0;
      }
    }

    if (desiredPatchSize / found < nrOfPatchesList[nrOfPatchesIndex + 1] / nrOfPatchesList[nrOfPatchesIndex] && desiredPatchSize / found > nrOfPatchesList[nrOfPatchesIndex - 1] / nrOfPatchesList[nrOfPatchesIndex]) {
      return {
        x: found,
        y: found
      };
    }

    return null;
  }

  var optimalPatchSize = findPatchSizeForDivisors(_computeCommonDivisors(imgSize.x, imgSize.y)) || findPatchSizeForDivisors(_computeDivisors(wideSide)) || findPatchSizeForDivisors(_computeDivisors(desiredPatchSize * nrOfPatches));
  return optimalPatchSize;
}
function _parseCSSDimensionValues(value) {
  var dimension = {
    value: parseFloat(value),
    unit: value.indexOf('%') === value.length - 1 ? '%' : '%'
  };
  return dimension;
}
var _dimensionsConverters = {
  top: function top(dimension, context) {
    return dimension.unit === '%' ? context.height * dimension.value / 100 | 0 : context.height;
  },
  right: function right(dimension, context) {
    return dimension.unit === '%' ? context.width - context.width * dimension.value / 100 | 0 : context.width;
  },
  bottom: function bottom(dimension, context) {
    return dimension.unit === '%' ? context.height - context.height * dimension.value / 100 | 0 : context.height;
  },
  left: function left(dimension, context) {
    return dimension.unit === '%' ? context.width * dimension.value / 100 | 0 : context.width;
  }
};
function computeImageArea(inputWidth, inputHeight, area) {
  var context = {
    width: inputWidth,
    height: inputHeight
  };
  var parsedArea = Object.keys(area).reduce(function (result, key) {
    var value = area[key];

    var parsed = _parseCSSDimensionValues(value);

    var calculated = _dimensionsConverters[key](parsed, context);

    result[key] = calculated;
    return result;
  }, {});
  return {
    sx: parsedArea.left,
    sy: parsedArea.top,
    sw: parsedArea.right - parsedArea.left,
    sh: parsedArea.bottom - parsedArea.top
  };
}

/***/ }),

/***/ "./src/common/events.js":
/*!******************************!*\
  !*** ./src/common/events.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ((function () {
  var events = {};

  function getEvent(eventName) {
    if (!events[eventName]) {
      events[eventName] = {
        subscribers: []
      };
    }

    return events[eventName];
  }

  function clearEvents() {
    events = {};
  }

  function publishSubscription(subscription, data) {
    if (subscription.async) {
      setTimeout(function () {
        subscription.callback(data);
      }, 4);
    } else {
      subscription.callback(data);
    }
  }

  function _subscribe(event, callback, async) {
    var subscription;

    if (typeof callback === 'function') {
      subscription = {
        callback: callback,
        async: async
      };
    } else {
      subscription = callback;

      if (!subscription.callback) {
        throw 'Callback was not specified on options';
      }
    }

    getEvent(event).subscribers.push(subscription);
  }

  return {
    subscribe: function subscribe(event, callback, async) {
      return _subscribe(event, callback, async);
    },
    publish: function publish(eventName, data) {
      var event = getEvent(eventName);
      var subscribers = event.subscribers; // Publish one-time subscriptions

      subscribers.filter(function (_ref) {
        var once = _ref.once;
        return !!once;
      }).forEach(function (subscriber) {
        return publishSubscription(subscriber, data);
      }); // remove them from the subscriber

      event.subscribers = subscribers.filter(function (_ref2) {
        var once = _ref2.once;
        return !once;
      }); // publish the rest

      event.subscribers.forEach(function (subscriber) {
        return publishSubscription(subscriber, data);
      });
    },
    once: function once(event, callback, async) {
      _subscribe(event, {
        callback: callback,
        async: async,
        once: true
      });
    },
    unsubscribe: function unsubscribe(eventName, _callback) {
      if (eventName) {
        var event = getEvent(eventName);

        if (event && _callback) {
          event.subscribers = event.subscribers.filter(function (_ref3) {
            var callback = _ref3.callback;
            return callback !== _callback;
          });
        } else {
          event.subscribers = [];
        }
      } else {
        clearEvents();
      }
    }
  };
})());

/***/ }),

/***/ "./src/common/image_debug.js":
/*!***********************************!*\
  !*** ./src/common/image_debug.js ***!
  \***********************************/
/*! exports provided: ImageDebug */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageDebug", function() { return ImageDebug; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);


var ImageDebug =
/*#__PURE__*/
function () {
  function ImageDebug() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ImageDebug);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ImageDebug, null, [{
    key: "drawRect",
    value: function drawRect(pos, size, context, style) {
      context.strokeStyle = style.color;
      context.fillStyle = style.color;
      context.lineWidth = style.lineWidth || 1;
      context.beginPath();
      context.strokeRect(pos.x, pos.y, size.x, size.y);
    }
  }, {
    key: "drawPath",
    value: function drawPath(path, def, context, style) {
      context.strokeStyle = style.color;
      context.fillStyle = style.color;
      context.lineWidth = style.lineWidth;
      context.beginPath();
      context.moveTo(path[0][def.x], path[0][def.y]);

      for (var j = 1; j < path.length; j++) {
        context.lineTo(path[j][def.x], path[j][def.y]);
      }

      context.closePath();
      context.stroke();
    }
  }, {
    key: "drawImage",
    value: function drawImage(imageData, width, height, context) {
      var canvasData = context.getImageData(0, 0, width, height);
      var data = canvasData.data;
      var imageDataPos = imageData.length;
      var canvasDataPos = data.length;

      if (canvasDataPos / imageDataPos !== 4) {
        return false;
      }

      while (imageDataPos--) {
        var value = imageData[imageDataPos];
        data[--canvasDataPos] = 255;
        data[--canvasDataPos] = value;
        data[--canvasDataPos] = value;
        data[--canvasDataPos] = value;
      }

      context.putImageData(canvasData, 0, 0);
      return true;
    }
  }]);

  return ImageDebug;
}();

/***/ }),

/***/ "./src/common/image_wrapper.js":
/*!*************************************!*\
  !*** ./src/common/image_wrapper.js ***!
  \*************************************/
/*! exports provided: ImageWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageWrapper", function() { return ImageWrapper; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_cv_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/cv_utils */ "./src/common/cv_utils.js");



/**
 * Represents a basic image combining the data and size.
 * In addition, some methods for manipulation are contained.
 */

var ImageWrapper =
/*#__PURE__*/
function () {
  /**
   * @param size {x,y} The size of the image in pixel
   * @param data {Array} If given, a flat array containing the pixel data
   * @param ArrayType {Type} If given, the desired DataType of the Array (may be typed/non-typed)
   * @param initialize {Boolean} Indicating if the array should be initialized on creation.
   */
  function ImageWrapper(size, data, ArrayType, initialize) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ImageWrapper);

    if (!data) {
      this.data = new (ArrayType || Uint8Array)(size.x * size.y);

      if (initialize) {
        this.data.fill(0);
      }
    } else {
      this.data = data;
    }

    this.size = size;
  }
  /**
   * tests if a position is within the image with a given offset
   * @param imgRef {x, y} The location to test
   * @param border Number the padding value in pixel
   * @returns {Boolean} true if location inside the image's border, false otherwise
   * @see cvd/image.h
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ImageWrapper, [{
    key: "inImageWithBorder",
    value: function inImageWithBorder(imgRef, border) {
      return imgRef.x >= border && imgRef.y >= border && imgRef.x < this.size.x - border && imgRef.y < this.size.y - border;
    }
    /**
     * Creates an {ImageWrapper) and copies the needed underlying image-data area
     * @param imageWrapper {ImageWrapper} The target {ImageWrapper} where the data should be copied
     * @param fromX {Number} The horizontal position where to copy from
     * @param fromY {Number} The vertical position where to copy from
    */

  }, {
    key: "subImageAsCopy",
    value: function subImageAsCopy(imageWrapper, fromX, fromY) {
      var sizeY = imageWrapper.size.y;
      var sizeX = imageWrapper.size.x;

      for (var x = 0; x < sizeX; x++) {
        for (var y = 0; y < sizeY; y++) {
          imageWrapper.data[y * sizeX + x] = this.data[(fromY + y) * this.size.x + fromX + x];
        }
      }
    }
    /**
     * Retrieves a given pixel position from the image
     * @param x {Number} The x-position
     * @param y {Number} The y-position
     * @returns {Number} The grayscale value at the pixel-position
     */

  }, {
    key: "get",
    value: function get(x, y) {
      return this.data[y * this.size.x + x];
    }
    /**
     * Sets a given pixel position in the image
     * @param x {Number} The x-position
     * @param y {Number} The y-position
     * @param value {Number} The grayscale value to set
     * @returns {ImageWrapper} The Image itself (for possible chaining)
     */

  }, {
    key: "set",
    value: function set(x, y, value) {
      this.data[y * this.size.x + x] = value;
      return this;
    }
    /**
     * Sets the border of the image (1 pixel) to zero
     */

  }, {
    key: "zeroBorder",
    value: function zeroBorder() {
      var width = this.size.x;
      var height = this.size.y;
      var data = this.data;

      for (var i = 0; i < width; i++) {
        data[i] = data[(height - 1) * width + i] = 0;
      }

      for (var _i = 1; _i < height - 1; _i++) {
        data[_i * width] = data[_i * width + (width - 1)] = 0;
      }
    }
    /**
     * Inverts a binary image in place
     */

  }, {
    key: "invert",
    value: function invert() {
      var data = this.data;

      for (var i = data.length; i--;) {
        data[i] = data[i] ? 0 : 1;
      }
    }
  }, {
    key: "moments",
    value: function moments(labelCount) {
      var height = this.size.y;
      var width = this.size.x;
      var labelSum = [];
      var result = [];

      if (labelCount <= 0) {
        return result;
      }

      for (var i = 0; i < labelCount; i++) {
        labelSum[i] = {
          m00: 0,
          m01: 0,
          m10: 0,
          m11: 0,
          m02: 0,
          m20: 0,
          theta: 0,
          rad: 0
        };
      }

      for (var y = 0; y < height; y++) {
        var ysq = y * y;

        for (var x = 0; x < width; x++) {
          var val = this.data[y * width + x];

          if (val > 0) {
            var label = labelSum[val - 1];
            label.m00 += 1;
            label.m01 += y;
            label.m10 += x;
            label.m11 += x * y;
            label.m02 += ysq;
            label.m20 += x * x;
          }
        }
      }

      var PI = Math.PI;
      var PI_4 = PI / 4;

      for (var _i2 = 0; _i2 < labelCount; _i2++) {
        var _label = labelSum[_i2];

        if (!isNaN(_label.m00) && _label.m00 !== 0) {
          var x_ = _label.m10 / _label.m00;
          var y_ = _label.m01 / _label.m00;
          var mu11 = _label.m11 / _label.m00 - x_ * y_;
          var mu02 = _label.m02 / _label.m00 - y_ * y_;
          var mu20 = _label.m20 / _label.m00 - x_ * x_;
          var tmp = 0.5 * Math.atan((mu02 - mu20) / (2 * mu11)) + (mu11 >= 0 ? PI_4 : -PI_4) + PI;
          _label.theta = (tmp * 180 / PI + 90) % 180 - 90;

          if (_label.theta < 0) {
            _label.theta += 180;
          }

          _label.rad = tmp > PI ? tmp - PI : tmp;
          _label.x = Math.cos(tmp);
          _label.y = Math.sin(tmp);
          result.push(_label);
        }
      }

      return result;
    }
    /**
     * Displays the {ImageWrapper} in a given canvas
     * @param canvas {Canvas} The canvas element to write to
     * @param scale {Number} Scale which is applied to each pixel-value
     */

  }, {
    key: "show",
    value: function show(canvas, scale) {
      var height = this.size.y;
      var width = this.size.x;
      var context = canvas.getContext('2d');
      canvas.height = height;
      canvas.width = width;
      var frame = context.getImageData(0, 0, width, height);
      var data = frame.data;
      var current = 0;

      if (!scale) {
        scale = 1.0;
      }

      for (var y = 0; y < height; y++) {
        for (var x = 0; x < width; x++) {
          var pixel = y * width + x;
          current = this.get(x, y) * scale;
          data[pixel * 4 + 0] = current;
          data[pixel * 4 + 1] = current;
          data[pixel * 4 + 2] = current;
          data[pixel * 4 + 3] = 255;
        }
      } //frame.data = data;


      context.putImageData(frame, 0, 0);
    }
    /**
     * Displays the part of the image in a given canvas
     * @param canvas {Canvas} The canvas element to write to
     * @param scale {Number} Scale which is applied to each pixel-value
     * @param fromX {Number} The horizontal position where to overlay from
     * @param fromY {Number} The vertical position where to overlay from
     */

  }, {
    key: "overlay",
    value: function overlay(canvas, scale, fromX, fromY) {
      var hsv = [0, 1, 1];
      var whiteRgb = [255, 255, 255];
      var blackRgb = [0, 0, 0];
      var context = canvas.getContext('2d');
      var frame = context.getImageData(fromX, fromY, this.size.x, this.size.y);
      var data = frame.data;

      if (!scale || scale < 0 || scale > 360) {
        scale = 360;
      }

      for (var length = this.data.length; length--;) {
        hsv[0] = this.data[length] * scale;
        var rgb = hsv[0] <= 0 ? whiteRgb : hsv[0] >= 360 ? blackRgb : Object(_common_cv_utils__WEBPACK_IMPORTED_MODULE_2__["hsv2rgb"])(hsv);
        data[length * 4 + 0] = rgb[0];
        data[length * 4 + 1] = rgb[1];
        data[length * 4 + 2] = rgb[2];
        data[length * 4 + 3] = 255;
      }

      context.putImageData(frame, fromX, fromY);
    }
  }]);

  return ImageWrapper;
}();

/***/ }),

/***/ "./src/common/media-devices.js":
/*!*************************************!*\
  !*** ./src/common/media-devices.js ***!
  \*************************************/
/*! exports provided: enumerateDevices, getUserMedia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enumerateDevices", function() { return enumerateDevices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserMedia", function() { return getUserMedia; });
function enumerateDevices() {
  if (navigator.mediaDevices && typeof navigator.mediaDevices.enumerateDevices === 'function') {
    return navigator.mediaDevices.enumerateDevices();
  }

  return Promise.reject(new Error('enumerateDevices is not defined'));
}
function getUserMedia(constraints) {
  if (navigator.mediaDevices && typeof navigator.mediaDevices.getUserMedia === 'function') {
    return navigator.mediaDevices.getUserMedia(constraints);
  }

  return Promise.reject(new Error('getUserMedia is not defined'));
}

/***/ }),

/***/ "./src/common/merge.js":
/*!*****************************!*\
  !*** ./src/common/merge.js ***!
  \*****************************/
/*! exports provided: merge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../../node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Performs a deep merge of objects and returns new object.
 * Does not modify objects (immutable).
 * @see https://stackoverflow.com/a/48218209
 *
 * @param {...object} objects - Objects to merge
 * @returns {object} New object with merged key/values
 */
function merge() {
  var isObject = function isObject(obj) {
    return obj && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(obj) === 'object';
  };

  for (var _len = arguments.length, objects = new Array(_len), _key = 0; _key < _len; _key++) {
    objects[_key] = arguments[_key];
  }

  return objects.reduce(function (prev, obj) {
    if (obj) {
      Object.keys(obj).forEach(function (key) {
        var pVal = prev[key];
        var oVal = obj[key];

        if (Array.isArray(pVal) && Array.isArray(oVal)) {
          // prev[key] = pVal.concat(...oVal);
          prev[key] = oVal;
        } else if (isObject(pVal) && isObject(oVal)) {
          prev[key] = merge(pVal, oVal);
        } else {
          prev[key] = oVal;
        }
      });
    }

    return prev;
  }, {});
}

/***/ }),

/***/ "./src/common/typedefs.js":
/*!********************************!*\
  !*** ./src/common/typedefs.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * typedefs.js
 * Normalizes browser-specific prefixes
 */
if (!Math.imul) {
  Math.imul = function (opA, opB) {
    opB |= 0; // ensure that opB is an integer. opA will automatically be coerced.
    // floating points give us 53 bits of precision to work with plus 1 sign bit
    // automatically handled for our convienence:
    // 1. 0x003fffff /*opA & 0x000fffff*/ * 0x7fffffff /*opB*/ = 0x1fffff7fc00001
    //    0x1fffff7fc00001 < Number.MAX_SAFE_INTEGER /*0x1fffffffffffff*/

    var result = (opA & 0x003fffff) * opB; // 2. We can remove an integer coersion from the statement above because:
    //    0x1fffff7fc00001 + 0xffc00000 = 0x1fffffff800001
    //    0x1fffffff800001 < Number.MAX_SAFE_INTEGER /*0x1fffffffffffff*/

    if (opA & 0xffc00000
    /*!== 0*/
    ) {
        result += (opA & 0xffc00000) * opB | 0;
      }

    return result | 0;
  };
}

/***/ }),

/***/ "./src/config/config.dev.js":
/*!**********************************!*\
  !*** ./src/config/config.dev.js ***!
  \**********************************/
/*! exports provided: config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
var config = {
  inputStream: {
    name: "Live",
    type: "LiveStream",
    constraints: {
      width: 640,
      height: 480,
      // aspectRatio: 640/480, // optional
      facingMode: "environment" // or user
      // deviceId: "38745983457387598375983759834"

    },
    area: {
      top: "0%",
      right: "0%",
      left: "0%",
      bottom: "0%"
    },
    singleChannel: false // true: only the red color-channel is read

  },
  locate: true,
  numOfWorkers: 0,
  decoder: {
    readers: ['code_128_reader'],
    debug: {
      drawBoundingBox: false,
      showFrequency: false,
      drawScanline: false,
      showPattern: false
    }
  },
  locator: {
    halfSample: true,
    patchSize: "medium",
    // x-small, small, medium, large, x-large
    debug: {
      showCanvas: false,
      showPatches: false,
      showFoundPatches: false,
      showSkeleton: false,
      showLabels: false,
      showPatchLabels: false,
      showRemainingPatchLabels: false,
      boxFromPatches: {
        showTransformed: false,
        showTransformedBox: false,
        showBB: false
      }
    }
  }
};

/***/ }),

/***/ "./src/decoder/barcode_decoder.js":
/*!****************************************!*\
  !*** ./src/decoder/barcode_decoder.js ***!
  \****************************************/
/*! exports provided: BarcodeDecoder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarcodeDecoder", function() { return BarcodeDecoder; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "../../node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../../node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _bresenham__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bresenham */ "./src/decoder/bresenham.js");
/* harmony import */ var _common_image_debug__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/image_debug */ "./src/common/image_debug.js");
/* harmony import */ var _reader_code_128_reader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reader/code_128_reader */ "./src/reader/code_128_reader.js");
/* harmony import */ var _reader_code_39_reader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reader/code_39_reader */ "./src/reader/code_39_reader.js");
/* harmony import */ var _reader_code_39_vin_reader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../reader/code_39_vin_reader */ "./src/reader/code_39_vin_reader.js");
/* harmony import */ var _reader_codabar_reader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../reader/codabar_reader */ "./src/reader/codabar_reader.js");
/* harmony import */ var _reader_ean_reader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../reader/ean_reader */ "./src/reader/ean_reader.js");
/* harmony import */ var _reader_ean_8_reader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../reader/ean_8_reader */ "./src/reader/ean_8_reader.js");
/* harmony import */ var _reader_ean_2_reader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../reader/ean_2_reader */ "./src/reader/ean_2_reader.js");
/* harmony import */ var _reader_ean_5_reader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../reader/ean_5_reader */ "./src/reader/ean_5_reader.js");
/* harmony import */ var _reader_upc_reader__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../reader/upc_reader */ "./src/reader/upc_reader.js");
/* harmony import */ var _reader_upc_e_reader__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../reader/upc_e_reader */ "./src/reader/upc_e_reader.js");
/* harmony import */ var _reader_i2of5_reader__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../reader/i2of5_reader */ "./src/reader/i2of5_reader.js");
/* harmony import */ var _reader_2of5_reader__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../reader/2of5_reader */ "./src/reader/2of5_reader.js");
/* harmony import */ var _reader_code_93_reader__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../reader/code_93_reader */ "./src/reader/code_93_reader.js");



















var READERS = {
  code_128_reader: _reader_code_128_reader__WEBPACK_IMPORTED_MODULE_6__["Code128Reader"],
  ean_reader: _reader_ean_reader__WEBPACK_IMPORTED_MODULE_10__["EANReader"],
  ean_5_reader: _reader_ean_5_reader__WEBPACK_IMPORTED_MODULE_13__["EAN5Reader"],
  ean_2_reader: _reader_ean_2_reader__WEBPACK_IMPORTED_MODULE_12__["EAN2Reader"],
  ean_8_reader: _reader_ean_8_reader__WEBPACK_IMPORTED_MODULE_11__["EAN8Reader"],
  code_39_reader: _reader_code_39_reader__WEBPACK_IMPORTED_MODULE_7__["Code39Reader"],
  code_39_vin_reader: _reader_code_39_vin_reader__WEBPACK_IMPORTED_MODULE_8__["Code39VINReader"],
  codabar_reader: _reader_codabar_reader__WEBPACK_IMPORTED_MODULE_9__["CodabarReader"],
  upc_reader: _reader_upc_reader__WEBPACK_IMPORTED_MODULE_14__["UPCReader"],
  upc_e_reader: _reader_upc_e_reader__WEBPACK_IMPORTED_MODULE_15__["UPCEReader"],
  i2of5_reader: _reader_i2of5_reader__WEBPACK_IMPORTED_MODULE_16__["I2of5Reader"],
  '2of5_reader': _reader_2of5_reader__WEBPACK_IMPORTED_MODULE_17__["TwoOfFiveReader"],
  code_93_reader: _reader_code_93_reader__WEBPACK_IMPORTED_MODULE_18__["Code93Reader"]
};
var BarcodeDecoder =
/*#__PURE__*/
function () {
  function BarcodeDecoder(config, inputImageWrapper) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, BarcodeDecoder);

    this._config = config;
    this._inputImageWrapper = inputImageWrapper;
    this._canvas = {
      ctx: {
        frequency: null,
        pattern: null,
        overlay: null
      },
      dom: {
        frequency: null,
        pattern: null,
        overlay: null
      }
    };
    this._barcodeReaders = [];

    this._initCanvas();

    this._initReaders();

    this._initConfig();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(BarcodeDecoder, [{
    key: "_initCanvas",
    value: function _initCanvas() {
      if ( true && typeof document !== 'undefined') {
        var debugDiv = document.querySelector('#debug.detection');
        this._canvas.dom.frequency = document.querySelector('canvas.frequency');

        if (!this._canvas.dom.frequency) {
          this._canvas.dom.frequency = document.createElement('canvas');
          this._canvas.dom.frequency.className = 'frequency';

          if (debugDiv) {
            debugDiv.appendChild(this._canvas.dom.frequency);
          }
        }

        this._canvas.ctx.frequency = this._canvas.dom.frequency.getContext('2d');
        this._canvas.dom.pattern = document.querySelector('canvas.patternBuffer');

        if (!this._canvas.dom.pattern) {
          this._canvas.dom.pattern = document.createElement('canvas');
          this._canvas.dom.pattern.className = 'patternBuffer';

          if (debugDiv) {
            debugDiv.appendChild(this._canvas.dom.pattern);
          }
        }

        this._canvas.ctx.pattern = this._canvas.dom.pattern.getContext('2d');
        this._canvas.dom.overlay = document.querySelector('canvas.drawingBuffer');

        if (this._canvas.dom.overlay) {
          this._canvas.ctx.overlay = this._canvas.dom.overlay.getContext('2d');
        }
      }
    }
  }, {
    key: "_initReaders",
    value: function _initReaders() {
      var _this = this;

      this._config.readers.forEach(function (readerConfig) {
        var reader;
        var configuration = {};
        var supplements = [];

        if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(readerConfig) === 'object') {
          reader = readerConfig.format;
          configuration = readerConfig.config || {};
        } else if (typeof readerConfig === 'string') {
          reader = readerConfig;
        }

        if (true) {
          console.log('Before registering reader:', reader);
        }

        if (configuration.supplements) {
          supplements = configuration.supplements.map(function (supplement) {
            return new READERS[supplement]();
          });
        }

        _this._barcodeReaders.push(new READERS[reader](configuration, supplements));
      });

      if (true) {
        var _console;

        (_console = console).log.apply(_console, ['Registered Readers:'].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(this._barcodeReaders.map(function (_ref) {
          var config = _ref.config,
              FORMAT = _ref.FORMAT;
          return JSON.stringify({
            config: config,
            FORMAT: FORMAT
          });
        }))));
      }
    }
  }, {
    key: "_initConfig",
    value: function _initConfig() {
      if ( true && this._config.debug && typeof document !== 'undefined') {
        this._canvas.dom.frequency.style.display = this._config.debug.showFrequency ? 'block' : 'none';
        this._canvas.dom.pattern.style.display = this._config.debug.showPattern ? 'block' : 'none';
      }
    }
    /**
     * extend the line on both ends
     * @param {Array} line
     * @param {Number} angle
     */

  }, {
    key: "_getExtendedLine",
    value: function _getExtendedLine(line, angle) {
      function extendLine(amount) {
        var extension = {
          y: amount * Math.sin(angle),
          x: amount * Math.cos(angle)
        };
        line[0].y -= extension.y;
        line[0].x -= extension.x;
        line[1].y += extension.y;
        line[1].x += extension.x;
      }

      var lineLength = Math.sqrt(Math.pow(line[1].y - line[0].y, 2) + Math.pow(line[1].x - line[0].x, 2));
      var extensionLength = lineLength * 0.1 | 0;
      extendLine(extensionLength); // check if inside image

      while (extensionLength > 1 && (!this._inputImageWrapper.inImageWithBorder(line[0], 0) || !this._inputImageWrapper.inImageWithBorder(line[1], 0))) {
        extensionLength >>= 1;
        extendLine(-extensionLength);
      }

      return line;
    }
  }, {
    key: "_getLine",
    value: function _getLine(box) {
      return [{
        x: (box[1].x + box[0].x) / 2,
        y: (box[1].y + box[0].y) / 2
      }, {
        x: (box[3].x + box[2].x) / 2,
        y: (box[3].y + box[2].y) / 2
      }];
    }
  }, {
    key: "_tryDecode",
    value: function _tryDecode(line) {
      var barcodeLine = _bresenham__WEBPACK_IMPORTED_MODULE_4__["default"].getBarcodeLine(this._inputImageWrapper, line[0], line[1]);

      if ( true && this._config.debug && this._config.debug.showFrequency) {
        _common_image_debug__WEBPACK_IMPORTED_MODULE_5__["ImageDebug"].drawPath(line, {
          x: 'x',
          y: 'y'
        }, this._canvas.ctx.overlay, {
          color: 'red',
          lineWidth: 3
        });
        _bresenham__WEBPACK_IMPORTED_MODULE_4__["default"].debug.printFrequency(barcodeLine.line, this._canvas.dom.frequency);
      }

      _bresenham__WEBPACK_IMPORTED_MODULE_4__["default"].toBinaryLine(barcodeLine);

      if ( true && this._config.debug && this._config.debug.showPattern) {
        _bresenham__WEBPACK_IMPORTED_MODULE_4__["default"].debug.printPattern(barcodeLine.line, this._canvas.dom.pattern);
      }

      for (var i = 0; i < this._barcodeReaders.length; i++) {
        var codeResult = this._barcodeReaders[i].decodePattern(barcodeLine.line);

        if (codeResult) {
          return {
            codeResult: codeResult,
            barcodeLine: barcodeLine
          };
        }
      }

      return null;
    }
    /**
     * This method slices the given area apart and tries to detect a barcode-pattern for each slice.
     * It returns the decoded barcode, or null if nothing was found
     * @param {Array} box
     * @param {Array} line
     * @param {Number} lineAngle
     */

  }, {
    key: "_tryDecodeBruteForce",
    value: function _tryDecodeBruteForce(box, line, lineAngle) {
      var sideLength = Math.sqrt(Math.pow(box[1].x - box[0].x, 2) + Math.pow(box[1].y - box[0].y, 2));
      var slices = 16;
      var xdir = Math.sin(lineAngle);
      var ydir = Math.cos(lineAngle);

      for (var i = 1; i < slices; i++) {
        // move line perpendicular to angle
        var dir = sideLength / slices * i * (i % 2 === 0 ? -1 : 1);
        line[0].y += dir * xdir;
        line[0].x -= dir * ydir;
        line[1].y += dir * xdir;
        line[1].x -= dir * ydir;

        var result = this._tryDecode(line);

        if (result) {
          return result;
        }
      }

      return null;
    }
    /**
     * With the help of the configured readers this function tries to detect
     * a valid barcode pattern within the given area.
     * @param {Object} box The area to search in
     * @returns {Object} the result {codeResult, line, angle, pattern, threshold}
     */

  }, {
    key: "decodeFromBoundingBox",
    value: function decodeFromBoundingBox(box) {
      var context = this._canvas.ctx.overlay;
      var debug = this._config.debug;

      if ( true && debug && debug.drawBoundingBox && context) {
        _common_image_debug__WEBPACK_IMPORTED_MODULE_5__["ImageDebug"].drawPath(box, {
          x: 'x',
          y: 'y'
        }, context, {
          color: 'blue',
          lineWidth: 2
        });
      }

      var line = this._getLine(box);

      if (line === null) {
        return null;
      }

      var angle = Math.atan2(line[1].y - line[0].y, line[1].x - line[0].x);
      line = this._getExtendedLine(line, angle);

      var result = this._tryDecode(line);

      if (result === null) {
        result = this._tryDecodeBruteForce(box, line, angle);
      }

      if (result === null) {
        return null;
      }

      if ( true && debug && debug.drawScanline && context) {
        _common_image_debug__WEBPACK_IMPORTED_MODULE_5__["ImageDebug"].drawPath(line, {
          x: 'x',
          y: 'y'
        }, context, {
          color: 'red',
          lineWidth: 3
        });
      }

      return {
        codeResult: result.codeResult,
        line: line,
        angle: angle,
        pattern: result.barcodeLine.line,
        threshold: result.barcodeLine.threshold
      };
    }
  }, {
    key: "decodeFromBoundingBoxes",
    value: function decodeFromBoundingBoxes(boxes) {
      var barcodes = [];
      var multiple = this._config.multiple;

      for (var i = 0; i < boxes.length; i++) {
        var box = boxes[i];
        var result = this.decodeFromBoundingBox(box) || {};
        result.box = box;

        if (multiple) {
          barcodes.push(result);
        } else if (result.codeResult) {
          return result;
        }
      }

      if (multiple) {
        return {
          barcodes: barcodes
        };
      }

      return null;
    }
  }, {
    key: "setReaders",
    value: function setReaders(readers) {
      this._config.readers = readers;
      this._barcodeReaders.length = 0;

      this._initReaders();
    }
  }]);

  return BarcodeDecoder;
}();

/***/ }),

/***/ "./src/decoder/bresenham.js":
/*!**********************************!*\
  !*** ./src/decoder/bresenham.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Bresenham = {};
var Slope = {
  DIR: {
    UP: 1,
    DOWN: -1
  }
};
/**
 * Scans a line of the given image from point p1 to p2 and returns a result object containing
 * gray-scale values (0-255) of the underlying pixels in addition to the min and max values.
 * @param {Object} imageWrapper
 * @param {Object} p1 The start point {x,y}
 * @param {Object} p2 The end point {x,y}
 * @returns {line, min, max}
 */

Bresenham.getBarcodeLine = function (imageWrapper, p1, p2) {
  var x0 = p1.x | 0;
  var y0 = p1.y | 0;
  var x1 = p2.x | 0;
  var y1 = p2.y | 0;
  var steep = Math.abs(y1 - y0) > Math.abs(x1 - x0);
  var tmp;
  var line = [];
  var imageData = imageWrapper.data;
  var width = imageWrapper.size.x;
  var val;
  var min = 255;
  var max = 0;

  function read(a, b) {
    val = imageData[b * width + a];
    min = val < min ? val : min;
    max = val > max ? val : max;
    line.push(val);
  }

  if (steep) {
    tmp = x0;
    x0 = y0;
    y0 = tmp;
    tmp = x1;
    x1 = y1;
    y1 = tmp;
  }

  if (x0 > x1) {
    tmp = x0;
    x0 = x1;
    x1 = tmp;
    tmp = y0;
    y0 = y1;
    y1 = tmp;
  }

  var deltax = x1 - x0;
  var deltay = Math.abs(y1 - y0);
  var error = deltax / 2 | 0;
  var y = y0;
  var ystep = y0 < y1 ? 1 : -1;

  for (var x = x0; x < x1; x++) {
    if (steep) {
      read(y, x);
    } else {
      read(x, y);
    }

    error = error - deltay;

    if (error < 0) {
      y += ystep;
      error = error + deltax;
    }
  }

  return {
    line: line,
    min: min,
    max: max
  };
};
/**
 * Converts the result from getBarcodeLine into a binary representation
 * also considering the frequency and slope of the signal for more robust results
 * @param {Object} result {line, min, max}
 */


Bresenham.toBinaryLine = function (result) {
  var min = result.min;
  var max = result.max;
  var line = result.line;
  var center = min + (max - min) / 2;
  var extrema = [];
  var threshold = (max - min) / 12;
  var rThreshold = -threshold; // 1. find extrema

  var currentDir = line[0] > center ? Slope.DIR.UP : Slope.DIR.DOWN;
  extrema.push({
    pos: 0,
    val: line[0]
  });

  for (var i = 0; i < line.length - 2; i++) {
    var slope = line[i + 1] - line[i];
    var slope2 = line[i + 2] - line[i + 1];
    var dir = void 0;

    if (slope + slope2 < rThreshold && line[i + 1] < center * 1.5) {
      dir = Slope.DIR.DOWN;
    } else if (slope + slope2 > threshold && line[i + 1] > center * 0.5) {
      dir = Slope.DIR.UP;
    } else {
      dir = currentDir;
    }

    if (currentDir !== dir) {
      extrema.push({
        pos: i,
        val: line[i]
      });
      currentDir = dir;
    }
  }

  extrema.push({
    pos: line.length,
    val: line[line.length - 1]
  });

  for (var j = extrema[0].pos; j < extrema[1].pos; j++) {
    line[j] = line[j] > center ? 0 : 1;
  } // iterate over extrema and convert to binary based on avg between minmax


  for (var _i = 1; _i < extrema.length - 1; _i++) {
    if (extrema[_i + 1].val > extrema[_i].val) {
      threshold = extrema[_i].val + (extrema[_i + 1].val - extrema[_i].val) / 3 * 2 | 0;
    } else {
      threshold = extrema[_i + 1].val + (extrema[_i].val - extrema[_i + 1].val) / 3 | 0;
    }

    for (var _j = extrema[_i].pos; _j < extrema[_i + 1].pos; _j++) {
      line[_j] = line[_j] > threshold ? 0 : 1;
    }
  }

  return {
    line: line,
    threshold: threshold
  };
};
/**
 * Used for development only
 */


Bresenham.debug = {
  printFrequency: function printFrequency(line, canvas) {
    var context = canvas.getContext('2d');
    canvas.width = line.length;
    canvas.height = 256;
    context.beginPath();
    context.strokeStyle = 'blue';

    for (var i = 0; i < line.length; i++) {
      context.moveTo(i, 255);
      context.lineTo(i, 255 - line[i]);
    }

    context.stroke();
    context.closePath();
  },
  printPattern: function printPattern(line, canvas) {
    var context = canvas.getContext('2d');
    canvas.width = line.length;
    context.fillColor = 'black';

    for (var i = 0; i < line.length; i++) {
      if (line[i] === 1) {
        context.fillRect(i, 0, 1, 100);
      }
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Bresenham);

/***/ }),

/***/ "./src/input/camera_access.js":
/*!************************************!*\
  !*** ./src/input/camera_access.js ***!
  \************************************/
/*! exports provided: pickConstraints, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pickConstraints", function() { return pickConstraints; });
/* harmony import */ var _common_media_devices__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/media-devices */ "./src/common/media-devices.js");


var _stream;

function waitForVideo(_ref) {
  var videoWidth = _ref.videoWidth,
      videoHeight = _ref.videoHeight;
  return new Promise(function (resolve, reject) {
    var attempts = 10;

    function checkVideo() {
      if (attempts > 0) {
        if (videoWidth > 10 && videoHeight > 10) {
          if (true) {
            console.log("".concat(videoWidth, "px x ").concat(videoHeight, "px"));
          }

          resolve();
        } else {
          window.setTimeout(checkVideo, 500);
        }
      } else {
        reject('Unable to play video stream. Is webcam working?');
      }

      attempts--;
    }

    checkVideo();
  });
}
/**
 * Tries to attach the camera-stream to a given video-element
 * and calls the callback function when the content is ready
 * @param {Object} constraints
 * @param {Object} video
 */


function initCamera(video, constraints) {
  return Object(_common_media_devices__WEBPACK_IMPORTED_MODULE_0__["getUserMedia"])(constraints).then(function (stream) {
    return new Promise(function (resolve) {
      _stream = stream;
      video.setAttribute('autoplay', true);
      video.setAttribute('muted', true);
      video.setAttribute('playsinline', true);
      video.srcObject = stream;
      video.addEventListener('loadedmetadata', function () {
        video.play();
        resolve();
      });
    });
  }).then(waitForVideo.bind(null, video));
}

function deprecatedConstraints(videoConstraints) {
  var width = videoConstraints.width,
      height = videoConstraints.height,
      facingMode = videoConstraints.facingMode,
      aspectRatio = videoConstraints.aspectRatio,
      deviceId = videoConstraints.deviceId;

  if (typeof videoConstraints.minAspectRatio !== 'undefined' && videoConstraints.minAspectRatio > 0) {
    aspectRatio = videoConstraints.minAspectRatio;
    console.log("WARNING: Constraint 'minAspectRatio' is deprecated; Use 'aspectRatio' instead");
  }

  if (typeof videoConstraints.facing !== 'undefined') {
    facingMode = videoConstraints.facing;
    console.log("WARNING: Constraint 'facing' is deprecated. Use 'facingMode' instead'");
  }

  return {
    width: width,
    height: height,
    facingMode: facingMode,
    aspectRatio: aspectRatio,
    deviceId: deviceId
  };
}

function pickConstraints(videoConstraints) {
  var normalizedConstraints = {
    audio: false,
    video: deprecatedConstraints(videoConstraints)
  };

  if (normalizedConstraints.video.deviceId && normalizedConstraints.video.facingMode) {
    delete normalizedConstraints.video.facingMode;
  }

  return Promise.resolve(normalizedConstraints);
}

function enumerateVideoDevices() {
  return Object(_common_media_devices__WEBPACK_IMPORTED_MODULE_0__["enumerateDevices"])().then(function (devices) {
    return devices.filter(function (_ref2) {
      var kind = _ref2.kind;
      return kind === 'videoinput';
    });
  });
}

function getActiveTrack() {
  var tracks = _stream && _stream.getVideoTracks();

  if (tracks && tracks.length) {
    return tracks[0];
  }

  return null;
}

/* harmony default export */ __webpack_exports__["default"] = ({
  request: function request(video, videoConstraints) {
    return pickConstraints(videoConstraints).then(initCamera.bind(null, video));
  },
  release: function release() {
    var tracks = _stream && _stream.getVideoTracks();

    if (tracks && tracks.length) {
      tracks[0].stop();
    }

    _stream = null;
  },
  enumerateVideoDevices: enumerateVideoDevices,
  getActiveStreamLabel: function getActiveStreamLabel() {
    var track = getActiveTrack();
    return track ? track.label : '';
  },
  getActiveTrack: getActiveTrack
});

/***/ }),

/***/ "./src/input/exif_helper.js":
/*!**********************************!*\
  !*** ./src/input/exif_helper.js ***!
  \**********************************/
/*! exports provided: AvailableTags, findTagsInObjectURL, findTagsInBuffer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvailableTags", function() { return AvailableTags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findTagsInObjectURL", function() { return findTagsInObjectURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findTagsInBuffer", function() { return findTagsInBuffer; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "../../node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);



/**
 * @borrows https://github.com/exif-js/exif-js
 */
var ExifTags = {
  0x0112: 'orientation'
};
var AvailableTags = Object.keys(ExifTags).map(function (key) {
  return ExifTags[key];
});
function findTagsInObjectURL(_x) {
  return _findTagsInObjectURL.apply(this, arguments);
}

function _findTagsInObjectURL() {
  _findTagsInObjectURL = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(src) {
    var tags,
        buffer,
        _args = arguments;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            tags = _args.length > 1 && _args[1] !== undefined ? _args[1] : AvailableTags;

            if (!/^blob:/i.test(src)) {
              _context.next = 6;
              break;
            }

            _context.next = 4;
            return objectURLToBlob(src);

          case 4:
            buffer = _context.sent;
            return _context.abrupt("return", findTagsInBuffer(buffer, tags));

          case 6:
            return _context.abrupt("return", Promise.resolve(null));

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _findTagsInObjectURL.apply(this, arguments);
}

function findTagsInBuffer(file) {
  var selectedTags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : AvailableTags;
  var dataView = new DataView(file);
  var length = file.byteLength;
  var exifTags = selectedTags.reduce(function (result, selectedTag) {
    var exifTag = Object.keys(ExifTags).find(function (tag) {
      return ExifTags[tag] === selectedTag;
    });

    if (exifTag) {
      result[exifTag] = selectedTag;
    }

    return result;
  }, {});
  var offset = 2;

  if (dataView.getUint8(0) !== 0xFF || dataView.getUint8(1) !== 0xD8) {
    return false;
  }

  while (offset < length) {
    if (dataView.getUint8(offset) !== 0xFF) {
      return false;
    }

    var marker = dataView.getUint8(offset + 1);

    if (marker === 0xE1) {
      return readEXIFData(dataView, offset + 4, exifTags);
    } else {
      offset += 2 + dataView.getUint16(offset + 2);
    }
  }

  return false;
}

function objectURLToBlob(_x2) {
  return _objectURLToBlob.apply(this, arguments);
}

function _objectURLToBlob() {
  _objectURLToBlob = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(url) {
    var response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return fetch(url);

          case 2:
            response = _context2.sent;

            if (!response.ok) {
              _context2.next = 5;
              break;
            }

            return _context2.abrupt("return", response.arrayBuffer());

          case 5:
            throw new Error('HTTP Error', response.status);

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _objectURLToBlob.apply(this, arguments);
}

function readEXIFData(dataView, start, exifTags) {
  if ('Exif'.split().some(function (_char, index) {
    return dataView.getUint8(start + index) !== _char.charCodeAt(0);
  })) {
    return false;
  }

  var tiffOffset = start + 6;
  var bigEnd;

  if (dataView.getUint16(tiffOffset) === 0x4949) {
    bigEnd = false;
  } else if (dataView.getUint16(tiffOffset) === 0x4D4D) {
    bigEnd = true;
  } else {
    return false;
  }

  if (dataView.getUint16(tiffOffset + 2, !bigEnd) !== 0x002A) {
    return false;
  }

  var firstIFDOffset = dataView.getUint32(tiffOffset + 4, !bigEnd);

  if (firstIFDOffset < 0x00000008) {
    return false;
  }

  var tags = readTags(dataView, tiffOffset + firstIFDOffset, exifTags, bigEnd);
  return tags;
}

function readTags(dataView, dirStart, strings, bigEnd) {
  var entries = dataView.getUint16(dirStart, !bigEnd);
  var tags = {};

  for (var i = 0; i < entries; i++) {
    var entryOffset = dirStart + i * 12 + 2;
    var tag = strings[dataView.getUint16(entryOffset, !bigEnd)];

    if (tag) {
      tags[tag] = readTagValue(dataView, entryOffset, bigEnd);
    }
  }

  return tags;
}

function readTagValue(dataView, entryOffset, bigEnd) {
  var type = dataView.getUint16(entryOffset + 2, !bigEnd);
  var numValues = dataView.getUint32(entryOffset + 4, !bigEnd);
  return type === 3 && numValues === 1 ? dataView.getUint16(entryOffset + 8, !bigEnd) : undefined;
}

/***/ }),

/***/ "./src/input/frame_grabber.js":
/*!************************************!*\
  !*** ./src/input/frame_grabber.js ***!
  \************************************/
/*! exports provided: FrameGrabber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrameGrabber", function() { return FrameGrabber; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);


var QUATER_CIRCLE = Math.PI / 2;
var FrameGrabber =
/*#__PURE__*/
function () {
  function FrameGrabber(inputStream, canvas) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, FrameGrabber);

    this._inputStream = inputStream;
    this._streamConfig = inputStream.getConfig();
    this._canvasWidth = inputStream.getCanvasWidth();
    this._canvasHeight = inputStream.getCanvasHeight();
    this._width = inputStream.getWidth();
    this._height = inputStream.getHeight();
    var topRight = inputStream.getTopRight();
    this._sx = topRight.x;
    this._sy = topRight.y;
    this._canvas = canvas || document.createElement('canvas');
    this._canvas.width = this._canvasWidth;
    this._canvas.height = this._canvasHeight;
    this._context = this._canvas.getContext('2d');
    this._data = new Uint8Array(this._width * this._height);

    if (true) {
      console.log('FrameGrabber', JSON.stringify({
        size: {
          x: this._width,
          y: this._height
        },
        topRight: topRight,
        videoSize: {
          x: inputStream.getRealWidth(),
          y: inputStream.getRealHeight()
        },
        canvasSize: {
          x: this._canvasWidth,
          y: this._canvasHeight
        }
      }));
    }
  }
  /**
   * Uses the given array as frame-buffer
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(FrameGrabber, [{
    key: "attachData",
    value: function attachData(data) {
      this._data = data;
    }
    /**
     * Fetches a frame from the input-stream and puts into the frame-buffer.
     * The image-data is converted to gray-scale and then half-sampled if configured.
     */

  }, {
    key: "grab",
    value: function grab() {
      var doHalfSample = this._streamConfig.halfSample;

      var frame = this._inputStream.getFrame();

      var drawable = frame;
      var drawAngle = 0;

      if (drawable) {
        this._adjustCanvasSize();

        if (this._streamConfig.type === 'ImageStream') {
          drawable = frame.image;

          if (frame.tags) {
            switch (frame.tags.orientation) {
              case 6:
                {
                  drawAngle = QUATER_CIRCLE;
                  break;
                }

              case 8:
                {
                  drawAngle = -QUATER_CIRCLE;
                  break;
                }
            }
          }
        }

        if (drawAngle !== 0) {
          var halfWidth = this._canvasWidth >> 1;
          var halfHeight = this._canvasHeight >> 1;

          this._context.translate(halfWidth, halfHeight);

          this._context.rotate(drawAngle);

          this._context.drawImage(drawable, -halfHeight, -halfWidth, this._canvasHeight, this._canvasWidth);

          this._context.rotate(-drawAngle);

          this._context.translate(-halfWidth, -halfHeight);
        } else {
          this._context.drawImage(drawable, 0, 0, this._canvasWidth, this._canvasHeight);
        }

        var imageData = this._context.getImageData(this._sx, this._sy, this._width, this._height).data;

        if (doHalfSample) {
          this._grayAndHalfSampleFromCanvasData(imageData);
        } else {
          this._computeGray(imageData);
        }

        return true;
      } else {
        return false;
      }
    }
  }, {
    key: "_adjustCanvasSize",
    value: function _adjustCanvasSize() {
      if (this._canvas.width !== this._canvasWidth) {
        if (true) {
          console.log('WARNING: canvas-size needs to be adjusted');
        }

        this._canvas.width = this._canvasWidth;
      }

      if (this._canvas.height !== this._canvasHeight) {
        if (true) {
          console.log('WARNING: canvas-size needs to be adjusted');
        }

        this._canvas.height = this._canvasHeight;
      }
    }
  }, {
    key: "_grayAndHalfSampleFromCanvasData",
    value: function _grayAndHalfSampleFromCanvasData(imageData) {
      var endIndex = imageData.length >> 2;
      var outWidth = this._width >> 1;
      var topRowIndex = 0;
      var bottomRowIndex = this._width;
      var outImageIndex = 0;

      while (bottomRowIndex < endIndex) {
        for (var i = 0; i < outWidth; i++) {
          var top4 = topRowIndex << 2;
          var bottom4 = bottomRowIndex << 2;
          this._data[outImageIndex] = (0.299 * imageData[top4 + 0] + 0.587 * imageData[top4 + 1] + 0.114 * imageData[top4 + 2] + (0.299 * imageData[top4 + 4] + 0.587 * imageData[top4 + 5] + 0.114 * imageData[top4 + 6]) + (0.299 * imageData[bottom4 + 0] + 0.587 * imageData[bottom4 + 1] + 0.114 * imageData[bottom4 + 2]) + (0.299 * imageData[bottom4 + 4] + 0.587 * imageData[bottom4 + 5] + 0.114 * imageData[bottom4 + 6])) / 4;
          outImageIndex++;
          topRowIndex += 2;
          bottomRowIndex += 2;
        }

        topRowIndex += this._width;
        bottomRowIndex += this._width;
      }
    }
  }, {
    key: "_computeGray",
    value: function _computeGray(imageData) {
      var imageDataLength = imageData.length;

      if (this._streamConfig && this._streamConfig.singleChannel) {
        for (var i = 0, j = 0; i < imageDataLength; i += 4, j++) {
          this._data[j] = imageData[i];
        }
      } else {
        for (var _i = 0, _j = 0; _i < imageDataLength; _i += 4, _j++) {
          this._data[_j] = 0.299 * imageData[_i] + 0.587 * imageData[_i + 1] + 0.114 * imageData[_i + 2];
        }
      }
    }
  }]);

  return FrameGrabber;
}();

/***/ }),

/***/ "./src/input/image_loader.js":
/*!***********************************!*\
  !*** ./src/input/image_loader.js ***!
  \***********************************/
/*! exports provided: ImageLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageLoader", function() { return ImageLoader; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "../../node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _exif_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./exif_helper */ "./src/input/exif_helper.js");





var ImageLoader =
/*#__PURE__*/
function () {
  function ImageLoader() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, ImageLoader);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(ImageLoader, null, [{
    key: "load",
    value: function () {
      var _load = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(directory, callback, offset, size, sequence) {
        var htmlImagesSrcArray, htmlImagesArray, loaded, _loaded, i, num, _loop, _i;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _loaded = function _ref2() {
                  _loaded = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
                  /*#__PURE__*/
                  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(loadedImage) {
                    var notLoadedImages, x, y, imageName, firstImage;
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            notLoadedImages = htmlImagesArray.notLoaded;
                            x = 0;

                          case 2:
                            if (!(x < notLoadedImages.length)) {
                              _context.next = 18;
                              break;
                            }

                            if (!(notLoadedImages[x] === loadedImage)) {
                              _context.next = 15;
                              break;
                            }

                            notLoadedImages.splice(x, 1);
                            y = 0;

                          case 6:
                            if (!(y < htmlImagesSrcArray.length)) {
                              _context.next = 14;
                              break;
                            }

                            imageName = htmlImagesSrcArray[y].substr(htmlImagesSrcArray[y].lastIndexOf('/'));

                            if (!(loadedImage.src.lastIndexOf(imageName) !== -1)) {
                              _context.next = 11;
                              break;
                            }

                            htmlImagesArray[y] = {
                              image: loadedImage
                            };
                            return _context.abrupt("break", 14);

                          case 11:
                            y++;
                            _context.next = 6;
                            break;

                          case 14:
                            return _context.abrupt("break", 18);

                          case 15:
                            x++;
                            _context.next = 2;
                            break;

                          case 18:
                            if (!(notLoadedImages.length === 0)) {
                              _context.next = 34;
                              break;
                            }

                            if (true) {
                              console.log('Images loaded');
                            }

                            _context.prev = 20;

                            if (!(sequence === false)) {
                              _context.next = 26;
                              break;
                            }

                            firstImage = htmlImagesArray[0];
                            _context.next = 25;
                            return Object(_exif_helper__WEBPACK_IMPORTED_MODULE_4__["findTagsInObjectURL"])(directory);

                          case 25:
                            firstImage.tags = _context.sent;

                          case 26:
                            _context.next = 31;
                            break;

                          case 28:
                            _context.prev = 28;
                            _context.t0 = _context["catch"](20);
                            console.log(_context.t0);

                          case 31:
                            _context.prev = 31;
                            callback(htmlImagesArray);
                            return _context.finish(31);

                          case 34:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee, null, [[20, 28, 31, 34]]);
                  }));
                  return _loaded.apply(this, arguments);
                };

                loaded = function _ref(_x6) {
                  return _loaded.apply(this, arguments);
                };

                htmlImagesSrcArray = new Array(size);
                htmlImagesArray = new Array(size);

                if (sequence === false) {
                  htmlImagesSrcArray[0] = directory;
                } else {
                  for (i = 0; i < size; i++) {
                    num = offset + i;
                    htmlImagesSrcArray[i] = directory + 'image-' + ('00' + num).slice(-3) + '.jpg';
                  }
                }

                htmlImagesArray.notLoaded = [];

                htmlImagesArray.addImage = function (image) {
                  htmlImagesArray.notLoaded.push(image);
                };

                _loop = function _loop(_i) {
                  var image = new Image();
                  htmlImagesArray.addImage(image);

                  image.onload = function () {
                    return loaded(image);
                  };

                  image.src = htmlImagesSrcArray[_i];
                };

                for (_i = 0; _i < htmlImagesSrcArray.length; _i++) {
                  _loop(_i);
                }

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function load(_x, _x2, _x3, _x4, _x5) {
        return _load.apply(this, arguments);
      }

      return load;
    }()
  }]);

  return ImageLoader;
}();

/***/ }),

/***/ "./src/input/input_stream.js":
/*!***********************************!*\
  !*** ./src/input/input_stream.js ***!
  \***********************************/
/*! exports provided: InputStream */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputStream", function() { return InputStream; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _image_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image_loader */ "./src/input/image_loader.js");



var InputStream =
/*#__PURE__*/
function () {
  function InputStream() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, InputStream);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(InputStream, null, [{
    key: "createVideoStream",
    value: function createVideoStream(video) {
      var that = {};
      var _config = null;
      var _eventNames = ['canrecord', 'ended'];
      var _eventHandlers = {};

      var _calculatedWidth;

      var _calculatedHeight;

      var _topRight = {
        x: 0,
        y: 0
      };
      var _canvasWidth = 0;
      var _canvasHeight = 0;

      function initSize() {
        var width = video.videoWidth;
        var height = video.videoHeight;
        _canvasWidth = _calculatedWidth = _config.size ? width > height ? _config.size : width * _config.size / height | 0 : width;
        _canvasHeight = _calculatedHeight = _config.size ? width > height ? height * _config.size / width | 0 : _config.size : height;
      }

      that.getRealWidth = function () {
        return video.videoWidth;
      };

      that.getRealHeight = function () {
        return video.videoHeight;
      };

      that.getWidth = function () {
        return _calculatedWidth;
      };

      that.getHeight = function () {
        return _calculatedHeight;
      };

      that.setWidth = function (width) {
        _calculatedWidth = width;
      };

      that.setHeight = function (height) {
        _calculatedHeight = height;
      };

      that.setInputStream = function (config) {
        _config = config;
        video.src = typeof config.src !== 'undefined' ? config.src : '';
      };

      that.ended = function () {
        return video.ended;
      };

      that.getConfig = function () {
        return _config;
      };

      that.setAttribute = function (name, value) {
        video.setAttribute(name, value);
      };

      that.pause = function () {
        video.pause();
      };

      that.play = function () {
        video.play();
      };

      that.setCurrentTime = function (time) {
        if (_config.type !== 'LiveStream') {
          video.currentTime = time;
        }
      };

      that.addEventListener = function (event, f, bool) {
        if (_eventNames.indexOf(event) !== -1) {
          if (!_eventHandlers[event]) {
            _eventHandlers[event] = [];
          }

          _eventHandlers[event].push(f);
        } else {
          video.addEventListener(event, f, bool);
        }
      };

      that.clearEventHandlers = function () {
        _eventNames.forEach(function (eventName) {
          var handlers = _eventHandlers[eventName];

          if (handlers && handlers.length > 0) {
            handlers.forEach(function (handler) {
              return video.removeEventListener(eventName, handler);
            });
          }
        });
      };

      that.trigger = function (eventName, args) {
        var handlers = _eventHandlers[eventName];

        if (eventName === 'canrecord') {
          initSize();
        }

        if (handlers && handlers.length > 0) {
          for (var j = 0; j < handlers.length; j++) {
            handlers[j].apply(that, args);
          }
        }
      };

      that.setTopRight = function (topRight) {
        _topRight.x = topRight.x;
        _topRight.y = topRight.y;
      };

      that.getTopRight = function () {
        return _topRight;
      };

      that.setCanvasSize = function (width, height) {
        _canvasWidth = width;
        _canvasHeight = height;
      };

      that.getCanvasWidth = function () {
        return _canvasWidth;
      };

      that.getCanvasHeight = function () {
        return _canvasHeight;
      };

      that.getFrame = function () {
        return video;
      };

      return that;
    }
  }, {
    key: "createLiveStream",
    value: function createLiveStream(video) {
      video.setAttribute('autoplay', true);
      var that = InputStream.createVideoStream(video);

      that.ended = function () {
        return false;
      };

      return that;
    }
  }, {
    key: "createImageStream",
    value: function createImageStream() {
      var that = {};
      var _config = null;
      var width = 0;
      var height = 0;
      var frameIndex = 0;
      var paused = true;
      var loaded = false;
      var _images = null;
      var size = 0;
      var offset = 1;
      var baseUrl = null;
      var ended = false;

      var _calculatedWidth;

      var _calculatedHeight;

      var _eventNames = ['canrecord', 'ended'];
      var _eventHandlers = {};
      var _topRight = {
        x: 0,
        y: 0
      };
      var _canvasWidth = 0;
      var _canvasHeight = 0;

      function loadImages() {
        loaded = false;
        _image_loader__WEBPACK_IMPORTED_MODULE_2__["ImageLoader"].load(baseUrl, function (images) {
          _images = images;

          switch (images[0].tags && images[0].tags.orientation) {
            case 6:
            case 8:
              {
                width = images[0].image.height;
                height = images[0].image.width;
                break;
              }

            default:
              {
                width = images[0].image.width;
                height = images[0].image.height;
              }
          }

          _canvasWidth = _calculatedWidth = _config.size ? width > height ? _config.size : width * _config.size / height | 0 : width;
          _canvasHeight = _calculatedHeight = _config.size ? width > height ? height * _config.size / width | 0 : _config.size : height;
          loaded = true;
          frameIndex = 0;
          setTimeout(function () {
            return publishEvent('canrecord', []);
          }, 0);
        }, offset, size, _config.sequence);
      }

      function publishEvent(eventName, args) {
        var handlers = _eventHandlers[eventName];

        if (handlers && handlers.length > 0) {
          for (var j = 0; j < handlers.length; j++) {
            handlers[j].apply(that, args);
          }
        }
      }

      that.trigger = publishEvent;

      that.getWidth = function () {
        return _calculatedWidth;
      };

      that.getHeight = function () {
        return _calculatedHeight;
      };

      that.setWidth = function (newWidth) {
        _calculatedWidth = newWidth;
      };

      that.setHeight = function (newHeight) {
        _calculatedHeight = newHeight;
      };

      that.getRealWidth = function () {
        return width;
      };

      that.getRealHeight = function () {
        return height;
      };

      that.setInputStream = function (config) {
        _config = config;

        if (config.sequence === false) {
          baseUrl = config.src;
          size = 1;
        } else {
          baseUrl = config.src;
          size = config.length;
        }

        loadImages();
      };

      that.ended = function () {
        return ended;
      };

      that.setAttribute = function () {};

      that.getConfig = function () {
        return _config;
      };

      that.pause = function () {
        paused = true;
      };

      that.play = function () {
        paused = false;
      };

      that.setCurrentTime = function (time) {
        frameIndex = time;
      };

      that.addEventListener = function (event, f) {
        if (_eventNames.indexOf(event) !== -1) {
          if (!_eventHandlers[event]) {
            _eventHandlers[event] = [];
          }

          _eventHandlers[event].push(f);
        }
      };

      that.setTopRight = function (topRight) {
        _topRight.x = topRight.x;
        _topRight.y = topRight.y;
      };

      that.getTopRight = function () {
        return _topRight;
      };

      that.setCanvasSize = function (w, h) {
        _canvasWidth = w;
        _canvasHeight = h;
      };

      that.getCanvasWidth = function () {
        return _canvasWidth;
      };

      that.getCanvasHeight = function () {
        return _canvasHeight;
      };

      that.getFrame = function () {
        var frame;

        if (!loaded) {
          return null;
        }

        if (!paused) {
          frame = _images[frameIndex];

          if (frameIndex < size - 1) {
            frameIndex++;
          } else {
            setTimeout(function () {
              ended = true;
              publishEvent('ended', []);
            }, 0);
          }
        }

        return frame;
      };

      return that;
    }
  }]);

  return InputStream;
}();

/***/ }),

/***/ "./src/locator/barcode_locator.js":
/*!****************************************!*\
  !*** ./src/locator/barcode_locator.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _common_cluster__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/cluster */ "./src/common/cluster.js");
/* harmony import */ var _common_cv_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/cv_utils */ "./src/common/cv_utils.js");
/* harmony import */ var _common_image_debug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/image_debug */ "./src/common/image_debug.js");
/* harmony import */ var _common_image_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/image_wrapper */ "./src/common/image_wrapper.js");
/* harmony import */ var _rasterizer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rasterizer */ "./src/locator/rasterizer.js");
/* harmony import */ var _skeletonizer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./skeletonizer */ "./src/locator/skeletonizer.js");
/* harmony import */ var _tracer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tracer */ "./src/locator/tracer.js");








var _config;

var _currentImageWrapper;

var _skelImageWrapper;

var _subImageWrapper;

var _labelImageWrapper;

var _patchGrid;

var _patchLabelGrid;

var _imageToPatchGrid;

var _binaryImageWrapper;

var _patchSize;

var _canvasContainer = {
  ctx: {
    binary: null
  },
  dom: {
    binary: null
  }
};
var _numPatches = {
  x: 0,
  y: 0
};

var _inputImageWrapper;

var _skeletonizer;

function initBuffers() {
  if (_config.halfSample) {
    _currentImageWrapper = new _common_image_wrapper__WEBPACK_IMPORTED_MODULE_3__["ImageWrapper"]({
      x: _inputImageWrapper.size.x / 2 | 0,
      y: _inputImageWrapper.size.y / 2 | 0
    });
  } else {
    _currentImageWrapper = _inputImageWrapper;
  }

  _patchSize = Object(_common_cv_utils__WEBPACK_IMPORTED_MODULE_1__["calculatePatchSize"])(_config.patchSize, _currentImageWrapper.size);
  _numPatches.x = _currentImageWrapper.size.x / _patchSize.x | 0;
  _numPatches.y = _currentImageWrapper.size.y / _patchSize.y | 0;
  _binaryImageWrapper = new _common_image_wrapper__WEBPACK_IMPORTED_MODULE_3__["ImageWrapper"](_currentImageWrapper.size, undefined, Uint8Array, false);
  _labelImageWrapper = new _common_image_wrapper__WEBPACK_IMPORTED_MODULE_3__["ImageWrapper"](_patchSize, undefined, Array, true);
  var skeletonImageData = new ArrayBuffer(64 * 1024);
  _subImageWrapper = new _common_image_wrapper__WEBPACK_IMPORTED_MODULE_3__["ImageWrapper"](_patchSize, new Uint8Array(skeletonImageData, 0, _patchSize.x * _patchSize.y));
  _skelImageWrapper = new _common_image_wrapper__WEBPACK_IMPORTED_MODULE_3__["ImageWrapper"](_patchSize, new Uint8Array(skeletonImageData, _patchSize.x * _patchSize.y * 3, _patchSize.x * _patchSize.y), undefined, true);
  _skeletonizer = Object(_skeletonizer__WEBPACK_IMPORTED_MODULE_5__["default"])(typeof window !== 'undefined' ? window : typeof self !== 'undefined' ? self : global, {
    size: _patchSize.x
  }, skeletonImageData);
  _imageToPatchGrid = new _common_image_wrapper__WEBPACK_IMPORTED_MODULE_3__["ImageWrapper"]({
    x: _currentImageWrapper.size.x / _subImageWrapper.size.x | 0,
    y: _currentImageWrapper.size.y / _subImageWrapper.size.y | 0
  }, undefined, Array, true);
  _patchGrid = new _common_image_wrapper__WEBPACK_IMPORTED_MODULE_3__["ImageWrapper"](_imageToPatchGrid.size, undefined, undefined, true);
  _patchLabelGrid = new _common_image_wrapper__WEBPACK_IMPORTED_MODULE_3__["ImageWrapper"](_imageToPatchGrid.size, undefined, Int32Array, true);
}

function initCanvas() {
  if (_config.useWorker || typeof document === 'undefined') {
    return;
  }

  _canvasContainer.dom.binary = document.createElement('canvas');
  _canvasContainer.dom.binary.className = 'binaryBuffer';

  if ( true && _config.debug && _config.debug.showCanvas) {
    document.querySelector('#debug').appendChild(_canvasContainer.dom.binary);
  }

  _canvasContainer.ctx.binary = _canvasContainer.dom.binary.getContext('2d');
  _canvasContainer.dom.binary.width = _binaryImageWrapper.size.x;
  _canvasContainer.dom.binary.height = _binaryImageWrapper.size.y;
}
/**
 * Creates a bounding box which encloses all the given patches
 * @returns The minimal bounding box
 */


function boxFromPatches(patches) {
  var averageRad = patches.reduce(function (sum, patch) {
    if ( true && _config.debug && _config.debug.showPatches) {
      // draw all patches which are to be taken into consideration
      _common_image_debug__WEBPACK_IMPORTED_MODULE_2__["ImageDebug"].drawRect(patch.pos, _subImageWrapper.size, _canvasContainer.ctx.binary, {
        color: 'red'
      });
    }

    return sum + patch.rad;
  }, 0) / patches.length;
  averageRad = (averageRad * 180 / Math.PI + 90) % 180 - 90;

  if (averageRad < 0) {
    averageRad += 180;
  }

  averageRad = (180 - averageRad) * Math.PI / 180;
  var cos = Math.cos(averageRad);
  var sin = Math.sin(averageRad);
  var matrix = new Float32Array([cos, sin, -sin, cos]);
  var context = _canvasContainer.ctx.binary; // iterate over patches and rotate by angle

  patches.forEach(function (_ref) {
    var box = _ref.box;

    for (var j = 0; j < 4; j++) {
      box[j] = transformWithMatrix(box[j], matrix);
    }

    if ( true && _config.debug && _config.debug.boxFromPatches.showTransformed) {
      _common_image_debug__WEBPACK_IMPORTED_MODULE_2__["ImageDebug"].drawPath(box, {
        x: 'x',
        y: 'y'
      }, context, {
        color: '#99ff00',
        lineWidth: 2
      });
    }
  });
  var minX = _binaryImageWrapper.size.x;
  var minY = _binaryImageWrapper.size.y;
  var maxX = -minX;
  var maxY = -minY; // find bounding box

  patches.forEach(function (_ref2) {
    var box = _ref2.box;
    box.forEach(function (_ref3) {
      var x = _ref3.x,
          y = _ref3.y;

      if (x < minX) {
        minX = x;
      }

      if (x > maxX) {
        maxX = x;
      }

      if (y < minY) {
        minY = y;
      }

      if (y > maxY) {
        maxY = y;
      }
    });
  });
  var box = [{
    x: minX,
    y: minY
  }, {
    x: maxX,
    y: minY
  }, {
    x: maxX,
    y: maxY
  }, {
    x: minX,
    y: maxY
  }];

  if ( true && _config.debug && _config.debug.boxFromPatches.showTransformedBox) {
    _common_image_debug__WEBPACK_IMPORTED_MODULE_2__["ImageDebug"].drawPath(box, {
      x: 'x',
      y: 'y'
    }, context, {
      color: '#ff0000',
      lineWidth: 2
    });
  } // reverse rotation


  var inverseMatrix = invert(matrix);

  for (var j = 0; j < 4; j++) {
    box[j] = transformWithMatrix(box[j], inverseMatrix);
  }

  if ( true && _config.debug && _config.debug.boxFromPatches.showBB) {
    _common_image_debug__WEBPACK_IMPORTED_MODULE_2__["ImageDebug"].drawPath(box, {
      x: 'x',
      y: 'y'
    }, context, {
      color: '#ff0000',
      lineWidth: 2
    });
  }

  if (_config.halfSample) {
    // scale
    box.forEach(function (vertex) {
      vertex.x *= 2;
      vertex.y *= 2;
    });
  }

  return box;
}
/**
 * Invert matrix
 * @param matrix the matrix to invert
 * @returns the inverted matrix
 */


function invert(matrix) {
  var a0 = matrix[0];
  var a1 = matrix[1];
  var a2 = matrix[2];
  var a3 = matrix[3];
  var determinant = a0 * a3 - a2 * a1;

  if (!determinant) {
    return null;
  }

  return new Float32Array([a3 / determinant, -a1 / determinant, -a2 / determinant, a0 / determinant]);
}
/**
 * Transforms the vector with a matrix
 * @param { x, y } vector to transform
 * @param matric matrix to transform with
 * @returns the transformed vector
 */


function transformWithMatrix(_ref4, matrix) {
  var x = _ref4.x,
      y = _ref4.y;
  return {
    x: matrix[0] * x + matrix[2] * y,
    y: matrix[1] * x + matrix[3] * y
  };
}
/**
 * Creates a binary image of the current image
 */


function binarizeImage() {
  Object(_common_cv_utils__WEBPACK_IMPORTED_MODULE_1__["otsuThreshold"])(_currentImageWrapper, _binaryImageWrapper);

  _binaryImageWrapper.zeroBorder();

  if ( true && _config.debug && _config.debug.showCanvas) {
    _binaryImageWrapper.show(_canvasContainer.dom.binary, 255);
  }
}
/**
 * Iterate over the entire image
 * extract patches
 */


function findPatches() {
  var context = _canvasContainer.ctx.binary;
  var patchesFound = [];

  for (var i = 0; i < _numPatches.x; i++) {
    for (var j = 0; j < _numPatches.y; j++) {
      var x = _subImageWrapper.size.x * i;
      var y = _subImageWrapper.size.y * j; // seperate parts

      skeletonize(x, y); // Rasterize, find individual bars

      _skelImageWrapper.zeroBorder();

      _labelImageWrapper.data.fill(0);

      var rasterizer = new _rasterizer__WEBPACK_IMPORTED_MODULE_4__["Rasterizer"](_skelImageWrapper, _labelImageWrapper);
      var rasterResult = rasterizer.rasterize(0);

      if ( true && _config.debug && _config.debug.showLabels) {
        _labelImageWrapper.overlay(_canvasContainer.dom.binary, 360 / rasterResult.count | 0, x, y);
      } // calculate moments from the skeletonized patch


      var moments = _labelImageWrapper.moments(rasterResult.count); // extract eligible patches


      var patch = describePatch(moments, j * _numPatches.x + i, x, y);

      if (patch) {
        patchesFound.push(patch);

        if ( true && _config.debug && _config.debug.showFoundPatches) {
          _common_image_debug__WEBPACK_IMPORTED_MODULE_2__["ImageDebug"].drawRect(patch.pos, _subImageWrapper.size, context, {
            color: '#99ff00',
            lineWidth: 2
          });
        }
      }
    }
  }

  return patchesFound;
}
/**
 * Finds those connected areas which contain at least 6 patches
 * and returns them ordered DESC by the number of contained patches
 * @param maxLabel
 */


function findBiggestConnectedAreas(maxLabel) {
  var labelHist = new Array(maxLabel).fill(0);

  _patchLabelGrid.data.forEach(function (data) {
    if (data > 0) {
      labelHist[data - 1]++;
    }
  }); // extract top areas with at least 6 patches present


  var topLabels = labelHist.map(function (val, index) {
    return {
      val: val,
      label: index + 1
    };
  }).sort(function (a, b) {
    return b.val - a.val;
  }).filter(function (_ref5) {
    var val = _ref5.val;
    return val >= 5;
  });
  return topLabels;
}
/**
 *
 */


function findBoxes(topLabels, maxLabel) {
  var boxes = [];
  var debug =  true && _config.debug && _config.debug.showRemainingPatchLabels;
  var context = _canvasContainer.ctx.binary;

  var _loop = function _loop(i) {
    var patches = [];

    _patchLabelGrid.data.forEach(function (data, index) {
      if (data === topLabels[i].label) {
        patches.push(_imageToPatchGrid.data[index]);
      }
    });

    var box = boxFromPatches(patches);

    if (box) {
      boxes.push(box);

      if (debug) {
        // draw patch-labels if requested
        var hsv = [topLabels[i].label / (maxLabel + 1) * 360, 1, 1];
        var rgb = [0, 0, 0];
        Object(_common_cv_utils__WEBPACK_IMPORTED_MODULE_1__["hsv2rgb"])(hsv, rgb);
        var style = {
          color: "rgb(".concat(rgb.join(','), ")"),
          lineWidth: 2
        };
        patches.forEach(function (_ref6) {
          var pos = _ref6.pos;
          return _common_image_debug__WEBPACK_IMPORTED_MODULE_2__["ImageDebug"].drawRect(pos, _subImageWrapper.size, context, style);
        });
      }
    }
  };

  for (var i = 0; i < topLabels.length; i++) {
    _loop(i);
  }

  return boxes;
}

function clusterize(points, threshold) {
  var property = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'rad';
  var clusters = [];
  points.forEach(function (value, index) {
    var point = {
      rad: value[property],
      point: value,
      id: index
    };
    var matchingCluster = clusters.find(function (cluster) {
      return cluster.fits(point);
    });

    if (matchingCluster) {
      matchingCluster.add(point);
    } else {
      clusters.push(new _common_cluster__WEBPACK_IMPORTED_MODULE_0__["Cluster"](threshold, point));
    }
  });
  return clusters;
}
/**
 * Find similar moments (via cluster)
 * @param moments
 */


function similarMoments(moments) {
  var clusters = clusterize(moments, 0.90);
  var topCluster = clusters.reduce(function (top, item) {
    var count = item.points.length;
    return count > top.count ? {
      item: item,
      count: count
    } : top;
  }, {
    item: {
      points: []
    },
    count: 0
  });
  var result = topCluster.item.points.map(function (_ref7) {
    var point = _ref7.point;
    return point;
  });
  return result;
}

function skeletonize(x, y) {
  _binaryImageWrapper.subImageAsCopy(_subImageWrapper, x, y);

  _skeletonizer.skeletonize(); // Show skeleton if requested


  if ( true && _config.debug && _config.debug.showSkeleton) {
    _skelImageWrapper.overlay(_canvasContainer.dom.binary, 360, x, y);
  }
}
/**
 * Extracts and describes those patches which seem to contain a barcode pattern
 * @param {Array} moments
 * @param {Number} index
 * @param {Number} x
 * @param {Number} y
 * @returns {Array} list of patches
 */


function describePatch(moments, index, x, y) {
  if (moments.length > 1) {
    var minComponentWeight = Math.ceil(_patchSize.x / 3); // only collect moments which area covers at least minComponentWeight pixels

    var eligibleMoments = moments.filter(function (moment) {
      return moment.m00 > minComponentWeight;
    }); // if at least 2 moments are found which have at least minComponentWeights covered

    if (eligibleMoments.length > 1) {
      var matchingMoments = similarMoments(eligibleMoments);
      var length = matchingMoments.length | 0; // Only two of the moments are allowed not to fit into the equation

      if (length > 1 && length << 2 >= eligibleMoments.length * 3 && length << 2 > moments.length) {
        // determine the similarity of the moments
        var rad = matchingMoments.reduce(function (sum, moment) {
          return sum + moment.rad;
        }, 0) / length;
        return {
          index: index,
          pos: {
            x: x,
            y: y
          },
          box: [{
            x: x,
            y: y
          }, {
            x: x + _subImageWrapper.size.x,
            y: y
          }, {
            x: x + _subImageWrapper.size.x,
            y: y + _subImageWrapper.size.y
          }, {
            x: x,
            y: y + _subImageWrapper.size.y
          }],
          moments: matchingMoments,
          rad: rad,
          x: Math.cos(rad),
          y: Math.sin(rad)
        };
      }
    }
  }

  return null;
}
/**
 * finds patches which are connected and share the same orientation
 * @param patchesFound
 */


function rasterizeAngularSimilarity(patchesFound) {
  var threshold = 0.95;
  var label = 0;
  var hsv = [0, 1, 1];
  var rgb = [0, 0, 0];

  function notYetProcessed() {
    for (var i = 0; i < _patchLabelGrid.data.length; i++) {
      if (_patchLabelGrid.data[i] === 0 && _patchGrid.data[i] === 1) {
        return i;
      }
    }

    return _patchLabelGrid.data.length;
  }

  function trace(currentIndex) {
    var current = {
      x: currentIndex % _patchLabelGrid.size.x,
      y: currentIndex / _patchLabelGrid.size.x | 0
    };

    if (currentIndex < _patchLabelGrid.data.length) {
      var currentPatch = _imageToPatchGrid.data[currentIndex]; // assign label

      _patchLabelGrid.data[currentIndex] = label;
      _tracer__WEBPACK_IMPORTED_MODULE_6__["SearchDirections"].forEach(function (direction) {
        var y = current.y + direction[0];
        var x = current.x + direction[1];
        var index = y * _patchLabelGrid.size.x + x; // continue if patch empty

        if (_patchGrid.data[index] === 0) {
          _patchLabelGrid.data[index] = Number.MAX_VALUE;
        } else if (_patchLabelGrid.data[index] === 0) {
          var patch = _imageToPatchGrid.data[index];
          var similarity = Math.abs(patch.x * currentPatch.x + patch.y * currentPatch.y);

          if (similarity > threshold) {
            trace(index);
          }
        }
      });
    }
  } // prepare for finding the right patches


  _patchGrid.data.fill(0);

  _patchLabelGrid.data.fill(0);

  _imageToPatchGrid.data.fill(null);

  patchesFound.forEach(function (patch) {
    _imageToPatchGrid.data[patch.index] = patch;
    _patchGrid.data[patch.index] = 1;
  }); // rasterize the patches found to determine area

  _patchGrid.zeroBorder();

  var currentIndex = 0;

  while ((currentIndex = notYetProcessed()) < _patchLabelGrid.data.length) {
    label++;
    trace(currentIndex);
  } // draw patch-labels if requested


  if ( true && _config.debug && _config.debug.showPatchLabels) {
    var context = _canvasContainer.ctx.binary;

    for (var j = 0; j < _patchLabelGrid.data.length; j++) {
      if (_patchLabelGrid.data[j] > 0 && _patchLabelGrid.data[j] <= label) {
        var patch = _imageToPatchGrid.data[j];
        hsv[0] = _patchLabelGrid.data[j] / (label + 1) * 360;
        Object(_common_cv_utils__WEBPACK_IMPORTED_MODULE_1__["hsv2rgb"])(hsv, rgb);
        var color = 'rgb(' + rgb.join(',') + ')';
        _common_image_debug__WEBPACK_IMPORTED_MODULE_2__["ImageDebug"].drawRect(patch.pos, _subImageWrapper.size, context, {
          color: color,
          lineWidth: 2
        });
      }
    }
  }

  return label;
}

/* harmony default export */ __webpack_exports__["default"] = ({
  init: function init(inputImageWrapper, config) {
    _config = config;
    _inputImageWrapper = inputImageWrapper;
    initBuffers();
    initCanvas();
  },
  locate: function locate() {
    if (_config.halfSample) {
      Object(_common_cv_utils__WEBPACK_IMPORTED_MODULE_1__["halfSample"])(_inputImageWrapper, _currentImageWrapper);
    }

    binarizeImage();
    var patchesFound = findPatches(); // return unless 5% or more patches are found

    if (patchesFound.length < _numPatches.x * _numPatches.y * 0.05) {
      return null;
    } // rasterize area by comparing angular similarity;


    var maxLabel = rasterizeAngularSimilarity(patchesFound);

    if (maxLabel < 1) {
      return null;
    } // search for area with the most patches (biggest connected area)


    var topLabels = findBiggestConnectedAreas(maxLabel);

    if (topLabels.length === 0) {
      return null;
    }

    var boxes = findBoxes(topLabels, maxLabel);
    return boxes;
  },
  checkImageConstraints: function checkImageConstraints(inputStream, config) {
    var width = inputStream.getWidth();
    var height = inputStream.getHeight();
    var shift = config.halfSample ? 1 : 0 | 0; // calculate width and height based on area

    if (inputStream.getConfig().area) {
      var area = Object(_common_cv_utils__WEBPACK_IMPORTED_MODULE_1__["computeImageArea"])(width, height, inputStream.getConfig().area);
      inputStream.setTopRight({
        x: area.sx,
        y: area.sy
      });
      inputStream.setCanvasSize(width, height);
      width = area.sw;
      height = area.sh;
    }

    var size = {
      x: width >> shift,
      y: height >> shift
    };
    var patchSize = Object(_common_cv_utils__WEBPACK_IMPORTED_MODULE_1__["calculatePatchSize"])(config.patchSize, size);

    if (true) {
      console.log('Patch-Size:', JSON.stringify(patchSize));
    }

    inputStream.setWidth((size.x / patchSize.x << shift) * patchSize.x | 0);
    inputStream.setHeight((size.y / patchSize.y << shift) * patchSize.y | 0);

    if (inputStream.getWidth() % patchSize.x === 0 && inputStream.getHeight() % patchSize.y === 0) {
      return true;
    } // eslint-disable-next-line max-len


    throw new Error("Image dimensions do not comply with the current settings: width (".concat(width, ") and height (").concat(height, ") must be a multiple of ").concat(patchSize.x));
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/locator/rasterizer.js":
/*!***********************************!*\
  !*** ./src/locator/rasterizer.js ***!
  \***********************************/
/*! exports provided: Rasterizer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rasterizer", function() { return Rasterizer; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tracer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tracer */ "./src/locator/tracer.js");



/**
 * @borrows http://www.codeproject.com/Tips/407172/Connected-Component-Labeling-and-Vectorization
 */

var DIR = {
  OUTSIDE_EDGE: -32767,
  INSIDE_EDGE: -32766
};
var CONTOUR_DIR = {
  CW_DIR: 0,
  CCW_DIR: 1,
  UNKNOWN_DIR: 2
};
var Rasterizer =
/*#__PURE__*/
function () {
  function Rasterizer(imageWrapper, labelWrapper) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Rasterizer);

    this.imageData = imageWrapper.data;
    this.labelData = labelWrapper.data;
    this.width = imageWrapper.size.x;
    this.height = imageWrapper.size.y;
    this.tracer = new _tracer__WEBPACK_IMPORTED_MODULE_2__["Tracer"](imageWrapper, labelWrapper);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Rasterizer, [{
    key: "rasterize",
    value: function rasterize(depthLabel) {
      var colorMap = [];

      for (var i = 0; i < 400; i++) {
        colorMap[i] = 0;
      }

      colorMap[0] = this.imageData[0];
      var cc = null;
      var sc;
      var connectedCount = 0;

      for (var cy = 1; cy < this.height - 1; cy++) {
        var labelIndex = 0;
        var bc = colorMap[0];

        for (var cx = 1; cx < this.width - 1; cx++) {
          var pos = cy * this.width + cx;

          if (this.labelData[pos] === 0) {
            var color = this.imageData[pos];

            if (color !== bc) {
              if (labelIndex === 0) {
                var lc = connectedCount + 1;
                colorMap[lc] = color;
                bc = color;
                var vertex = this.tracer.contourTracing(cy, cx, lc, color, DIR.OUTSIDE_EDGE);

                if (vertex !== null) {
                  connectedCount++;
                  labelIndex = lc;
                  var p = {
                    dir: CONTOUR_DIR.CW_DIR,
                    index: labelIndex,
                    firstVertex: vertex,
                    nextPeer: cc,
                    insideContours: null
                  };

                  if (cc !== null) {
                    cc.previousPeer = p;
                  }

                  cc = p;
                }
              } else {
                var _vertex = this.tracer.contourTracing(cy, cx, DIR.INSIDE_EDGE, color, labelIndex);

                if (_vertex !== null) {
                  var _p = {
                    dir: depthLabel === 0 ? CONTOUR_DIR.CCW_DIR : CONTOUR_DIR.CW_DIR,
                    firstVertex: _vertex,
                    index: depthLabel,
                    insideContours: null
                  };
                  sc = cc;

                  while (sc !== null && sc.index !== labelIndex) {
                    sc = sc.nextPeer;
                  }

                  if (sc !== null) {
                    _p.nextPeer = sc.insideContours;

                    if (sc.insideContours !== null) {
                      sc.insideContours.previousPeer = _p;
                    }

                    sc.insideContours = _p;
                  }
                }
              }
            } else {
              this.labelData[pos] = labelIndex;
            }
          } else if (this.labelData[pos] === DIR.INSIDE_EDGE) {
            labelIndex = 0;
            bc = this.imageData[pos];
          } else if (this.labelData[pos] === DIR.OUTSIDE_EDGE) {
            labelIndex = 0;
            bc = colorMap[0];
          } else {
            labelIndex = this.labelData[pos];
            bc = colorMap[labelIndex];
          }
        }
      }

      sc = cc;

      while (sc !== null) {
        sc.index = depthLabel;
        sc = sc.nextPeer;
      }

      return {
        cc: cc,
        count: connectedCount
      };
    }
  }, {
    key: "drawContour",
    value: function drawContour(canvas, firstContour) {
      var ctx = canvas.getContext('2d');
      ctx.strokeStyle = 'red';
      ctx.fillStyle = 'red';
      ctx.lineWidth = 1;
      var pq = firstContour;
      var iq = pq && pq.insideContours;

      while (pq !== null) {
        var q = iq || pq;

        if (iq !== null) {
          iq = iq.nextPeer;
        } else {
          pq = pq.nextPeer;
          iq = pq && pq.insideContours;
        }

        switch (q.dir) {
          case CONTOUR_DIR.CW_DIR:
            {
              ctx.strokeStyle = 'red';
              break;
            }

          case CONTOUR_DIR.CCW_DIR:
            {
              ctx.strokeStyle = 'blue';
              break;
            }

          case CONTOUR_DIR.UNKNOWN_DIR:
            {
              ctx.strokeStyle = 'green';
              break;
            }
        }

        var p = q.firstVertex;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);

        do {
          p = p.next;
          ctx.lineTo(p.x, p.y);
        } while (p !== q.firstVertex);

        ctx.stroke();
      }
    }
  }]);

  return Rasterizer;
}();

/***/ }),

/***/ "./src/locator/skeletonizer.js":
/*!*************************************!*\
  !*** ./src/locator/skeletonizer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable eqeqeq */
function Skeletonizer(stdlib, foreign, buffer) {
  "use asm";

  var images = new stdlib.Uint8Array(buffer),
      size = foreign.size | 0,
      imul = stdlib.Math.imul;

  function erode(inImagePtr, outImagePtr) {
    inImagePtr = inImagePtr | 0;
    outImagePtr = outImagePtr | 0;
    var v = 0,
        u = 0,
        sum = 0,
        yStart1 = 0,
        yStart2 = 0,
        xStart1 = 0,
        xStart2 = 0,
        offset = 0;

    for (v = 1; (v | 0) < (size - 1 | 0); v = v + 1 | 0) {
      offset = offset + size | 0;

      for (u = 1; (u | 0) < (size - 1 | 0); u = u + 1 | 0) {
        yStart1 = offset - size | 0;
        yStart2 = offset + size | 0;
        xStart1 = u - 1 | 0;
        xStart2 = u + 1 | 0;
        sum = (images[inImagePtr + yStart1 + xStart1 | 0] | 0) + (images[inImagePtr + yStart1 + xStart2 | 0] | 0) + (images[inImagePtr + offset + u | 0] | 0) + (images[inImagePtr + yStart2 + xStart1 | 0] | 0) + (images[inImagePtr + yStart2 + xStart2 | 0] | 0) | 0;

        if ((sum | 0) == (5 | 0)) {
          images[outImagePtr + offset + u | 0] = 1;
        } else {
          images[outImagePtr + offset + u | 0] = 0;
        }
      }
    }

    return;
  }

  function subtract(aImagePtr, bImagePtr, outImagePtr) {
    aImagePtr = aImagePtr | 0;
    bImagePtr = bImagePtr | 0;
    outImagePtr = outImagePtr | 0;
    var length = 0;
    length = imul(size, size) | 0;

    while ((length | 0) > 0) {
      length = length - 1 | 0;
      images[outImagePtr + length | 0] = (images[aImagePtr + length | 0] | 0) - (images[bImagePtr + length | 0] | 0) | 0;
    }
  }

  function bitwiseOr(aImagePtr, bImagePtr, outImagePtr) {
    aImagePtr = aImagePtr | 0;
    bImagePtr = bImagePtr | 0;
    outImagePtr = outImagePtr | 0;
    var length = 0;
    length = imul(size, size) | 0;

    while ((length | 0) > 0) {
      length = length - 1 | 0;
      images[outImagePtr + length | 0] = images[aImagePtr + length | 0] | 0 | (images[bImagePtr + length | 0] | 0) | 0;
    }
  }

  function countNonZero(imagePtr) {
    imagePtr = imagePtr | 0;
    var sum = 0,
        length = 0;
    length = imul(size, size) | 0;

    while ((length | 0) > 0) {
      length = length - 1 | 0;
      sum = (sum | 0) + (images[imagePtr + length | 0] | 0) | 0;
    }

    return sum | 0;
  }

  function init(imagePtr, value) {
    imagePtr = imagePtr | 0;
    value = value | 0;
    var length = 0;
    length = imul(size, size) | 0;

    while ((length | 0) > 0) {
      length = length - 1 | 0;
      images[imagePtr + length | 0] = value;
    }
  }

  function dilate(inImagePtr, outImagePtr) {
    inImagePtr = inImagePtr | 0;
    outImagePtr = outImagePtr | 0;
    var v = 0,
        u = 0,
        sum = 0,
        yStart1 = 0,
        yStart2 = 0,
        xStart1 = 0,
        xStart2 = 0,
        offset = 0;

    for (v = 1; (v | 0) < (size - 1 | 0); v = v + 1 | 0) {
      offset = offset + size | 0;

      for (u = 1; (u | 0) < (size - 1 | 0); u = u + 1 | 0) {
        yStart1 = offset - size | 0;
        yStart2 = offset + size | 0;
        xStart1 = u - 1 | 0;
        xStart2 = u + 1 | 0;
        sum = (images[inImagePtr + yStart1 + xStart1 | 0] | 0) + (images[inImagePtr + yStart1 + xStart2 | 0] | 0) + (images[inImagePtr + offset + u | 0] | 0) + (images[inImagePtr + yStart2 + xStart1 | 0] | 0) + (images[inImagePtr + yStart2 + xStart2 | 0] | 0) | 0;

        if ((sum | 0) > (0 | 0)) {
          images[outImagePtr + offset + u | 0] = 1;
        } else {
          images[outImagePtr + offset + u | 0] = 0;
        }
      }
    }

    return;
  }

  function memcpy(srcImagePtr, dstImagePtr) {
    srcImagePtr = srcImagePtr | 0;
    dstImagePtr = dstImagePtr | 0;
    var length = 0;
    length = imul(size, size) | 0;

    while ((length | 0) > 0) {
      length = length - 1 | 0;
      images[dstImagePtr + length | 0] = images[srcImagePtr + length | 0] | 0;
    }
  }

  function zeroBorder(imagePtr) {
    imagePtr = imagePtr | 0;
    var x = 0,
        y = 0;

    for (x = 0; (x | 0) < (size - 1 | 0); x = x + 1 | 0) {
      images[imagePtr + x | 0] = 0;
      images[imagePtr + y | 0] = 0;
      y = y + size - 1 | 0;
      images[imagePtr + y | 0] = 0;
      y = y + 1 | 0;
    }

    for (x = 0; (x | 0) < (size | 0); x = x + 1 | 0) {
      images[imagePtr + y | 0] = 0;
      y = y + 1 | 0;
    }
  }

  function skeletonize() {
    var subImagePtr = 0,
        erodedImagePtr = 0,
        tempImagePtr = 0,
        skelImagePtr = 0,
        sum = 0,
        done = 0;
    erodedImagePtr = imul(size, size) | 0;
    tempImagePtr = erodedImagePtr + erodedImagePtr | 0;
    skelImagePtr = tempImagePtr + erodedImagePtr | 0; // init skel-image

    init(skelImagePtr, 0);
    zeroBorder(subImagePtr);

    do {
      erode(subImagePtr, erodedImagePtr);
      dilate(erodedImagePtr, tempImagePtr);
      subtract(subImagePtr, tempImagePtr, tempImagePtr);
      bitwiseOr(skelImagePtr, tempImagePtr, skelImagePtr);
      memcpy(erodedImagePtr, subImagePtr);
      sum = countNonZero(subImagePtr) | 0;
      done = (sum | 0) == 0 | 0;
    } while (!done);
  }

  return {
    skeletonize: skeletonize
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Skeletonizer);
/* eslint-enable eqeqeq */

/***/ }),

/***/ "./src/locator/tracer.js":
/*!*******************************!*\
  !*** ./src/locator/tracer.js ***!
  \*******************************/
/*! exports provided: SearchDirections, Tracer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchDirections", function() { return SearchDirections; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tracer", function() { return Tracer; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);



/**
 * @borrows http://www.codeproject.com/Tips/407172/Connected-Component-Labeling-and-Vectorization
 */
var SearchDirections = [[0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1], [-1, 0], [-1, 1]];
var Tracer =
/*#__PURE__*/
function () {
  function Tracer(imageWrapper, labelWrapper) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Tracer);

    this.imageData = imageWrapper.data;
    this.labelData = labelWrapper.data;
    this.width = imageWrapper.size.x;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Tracer, [{
    key: "trace",
    value: function trace(current, color, label, edgeLabel) {
      for (var i = 0; i < 7; i++) {
        var y = current.cy + SearchDirections[current.dir][0];
        var x = current.cx + SearchDirections[current.dir][1];
        var pos = y * this.width + x;

        if (this.imageData[pos] === color && (this.labelData[pos] === 0 || this.labelData[pos] === label)) {
          this.labelData[pos] = label;
          current.cy = y;
          current.cx = x;
          return true;
        } else {
          if (this.labelData[pos] === 0) {
            this.labelData[pos] = edgeLabel;
          }

          current.dir = (current.dir + 1) % 8;
        }
      }

      return false;
    }
  }, {
    key: "contourTracing",
    value: function contourTracing(sy, sx, label, color, edgeLabel) {
      var Fv = null;
      var current = {
        cx: sx,
        cy: sy,
        dir: 0
      };

      if (this.trace(current, color, label, edgeLabel)) {
        Fv = {
          x: sx,
          y: sy,
          dir: current.dir,
          next: null,
          prev: null
        };
        var Cv = Fv;
        var ldir = current.dir;
        var P = {
          x: current.cx,
          y: current.cy,
          dir: 0,
          next: null,
          prev: Cv
        };
        Cv.next = P;
        Cv = P;

        do {
          current.dir = (current.dir + 6) % 8;
          this.trace(current, color, label, edgeLabel);

          if (ldir !== current.dir) {
            Cv.dir = current.dir;
            P = {
              x: current.cx,
              y: current.cy,
              dir: 0,
              next: null,
              prev: Cv
            };
            Cv.next = P;
            Cv = P;
          } else {
            Cv.dir = ldir;
            Cv.x = current.cx;
            Cv.y = current.cy;
          }

          ldir = current.dir;
        } while (current.cx !== sx || current.cy !== sy);

        Fv.prev = Cv.prev;
        Cv.prev.next = Fv;
      }

      return Fv;
    }
  }]);

  return Tracer;
}();

/***/ }),

/***/ "./src/quagga.js":
/*!***********************!*\
  !*** ./src/quagga.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_typedefs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/typedefs */ "./src/common/typedefs.js");
/* harmony import */ var _common_typedefs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_common_typedefs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _analytics_result_collector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./analytics/result_collector */ "./src/analytics/result_collector.js");
/* harmony import */ var _common_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/events */ "./src/common/events.js");
/* harmony import */ var _common_image_debug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/image_debug */ "./src/common/image_debug.js");
/* harmony import */ var _common_image_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/image_wrapper */ "./src/common/image_wrapper.js");
/* harmony import */ var _common_merge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/merge */ "./src/common/merge.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./config/config */ "./src/config/config.dev.js");
/* harmony import */ var _decoder_barcode_decoder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./decoder/barcode_decoder */ "./src/decoder/barcode_decoder.js");
/* harmony import */ var _input_camera_access__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./input/camera_access */ "./src/input/camera_access.js");
/* harmony import */ var _input_frame_grabber__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./input/frame_grabber */ "./src/input/frame_grabber.js");
/* harmony import */ var _input_input_stream__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./input/input_stream */ "./src/input/input_stream.js");
/* harmony import */ var _locator_barcode_locator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./locator/barcode_locator */ "./src/locator/barcode_locator.js");













var _inputStream;

var _framegrabber;

var _stopped;

var _canvasContainer = {
  ctx: {
    image: null,
    overlay: null
  },
  dom: {
    image: null,
    overlay: null
  }
};

var _inputImageWrapper;

var _boxSize;

var _decoder;

var _workerPool = [];
var _onUIThread = true;

var _resultCollector;

var _config = {};

function initializeData(imageWrapper) {
  initBuffers(imageWrapper);
  _decoder = new _decoder_barcode_decoder__WEBPACK_IMPORTED_MODULE_7__["BarcodeDecoder"](_config.decoder, _inputImageWrapper);
}

function initInputStream(callback) {
  var video;

  if (_config.inputStream.type === 'VideoStream') {
    video = document.createElement('video');
    _inputStream = _input_input_stream__WEBPACK_IMPORTED_MODULE_10__["InputStream"].createVideoStream(video);
  } else if (_config.inputStream.type === 'ImageStream') {
    _inputStream = _input_input_stream__WEBPACK_IMPORTED_MODULE_10__["InputStream"].createImageStream();
  } else if (_config.inputStream.type === 'LiveStream') {
    var viewport = getViewPort();

    if (viewport) {
      video = viewport.querySelector('video');

      if (!video) {
        video = document.createElement('video');
        viewport.appendChild(video);
      }
    }

    _inputStream = _input_input_stream__WEBPACK_IMPORTED_MODULE_10__["InputStream"].createLiveStream(video);
    _input_camera_access__WEBPACK_IMPORTED_MODULE_8__["default"].request(video, _config.inputStream.constraints).then(function () {
      return _inputStream.trigger('canrecord');
    }, function (err) {
      return callback(err);
    });
  }

  _inputStream.setAttribute('preload', 'auto');

  _inputStream.setInputStream(_config.inputStream);

  _inputStream.addEventListener('canrecord', canRecord.bind(undefined, callback));
}

function getViewPort() {
  var target = _config.inputStream.target; // Check if target is already a DOM element

  if (target && target.nodeName && target.nodeType === 1) {
    return target;
  } else {
    // Use '#interactive.viewport' as a fallback selector (backwards compatibility)
    var selector = typeof target === 'string' ? target : '#interactive.viewport';
    return document.querySelector(selector);
  }
}

function canRecord(cb) {
  _locator_barcode_locator__WEBPACK_IMPORTED_MODULE_11__["default"].checkImageConstraints(_inputStream, _config.locator);
  initCanvas(_config);
  _framegrabber = new _input_frame_grabber__WEBPACK_IMPORTED_MODULE_9__["FrameGrabber"](_inputStream, _canvasContainer.dom.image);
  adjustWorkerPool(_config.numOfWorkers, function () {
    if (_config.numOfWorkers === 0) {
      initializeData();
    }

    ready(cb);
  });
}

function ready(cb) {
  _inputStream.play();

  cb();
}

function initCanvas() {
  if (typeof document !== 'undefined') {
    var viewport = getViewPort();
    _canvasContainer.dom.image = document.querySelector('canvas.imgBuffer');

    if (!_canvasContainer.dom.image) {
      _canvasContainer.dom.image = document.createElement('canvas');
      _canvasContainer.dom.image.className = 'imgBuffer';

      if (viewport && _config.inputStream.type === 'ImageStream') {
        viewport.appendChild(_canvasContainer.dom.image);
      }
    }

    _canvasContainer.ctx.image = _canvasContainer.dom.image.getContext('2d');
    _canvasContainer.dom.image.width = _inputStream.getCanvasWidth();
    _canvasContainer.dom.image.height = _inputStream.getCanvasHeight();
    _canvasContainer.dom.overlay = document.querySelector('canvas.drawingBuffer');

    if (!_canvasContainer.dom.overlay) {
      _canvasContainer.dom.overlay = document.createElement('canvas');
      _canvasContainer.dom.overlay.className = 'drawingBuffer';

      if (viewport) {
        viewport.appendChild(_canvasContainer.dom.overlay);
      }

      var clearFix = document.createElement('br');
      clearFix.setAttribute('clear', 'all');

      if (viewport) {
        viewport.appendChild(clearFix);
      }
    }

    _canvasContainer.ctx.overlay = _canvasContainer.dom.overlay.getContext('2d');
    _canvasContainer.dom.overlay.width = _inputStream.getCanvasWidth();
    _canvasContainer.dom.overlay.height = _inputStream.getCanvasHeight();
  }
}

function initBuffers(imageWrapper) {
  if (imageWrapper) {
    _inputImageWrapper = imageWrapper;
  } else {
    _inputImageWrapper = new _common_image_wrapper__WEBPACK_IMPORTED_MODULE_4__["ImageWrapper"]({
      x: _inputStream.getWidth(),
      y: _inputStream.getHeight()
    });
  }

  if (true) {
    console.log(_inputImageWrapper.size);
  }

  _boxSize = [{
    x: 0,
    y: 0
  }, {
    x: 0,
    y: _inputImageWrapper.size.y
  }, {
    x: _inputImageWrapper.size.x,
    y: _inputImageWrapper.size.y
  }, {
    x: _inputImageWrapper.size.x,
    y: 0
  }];
  _locator_barcode_locator__WEBPACK_IMPORTED_MODULE_11__["default"].init(_inputImageWrapper, _config.locator);
}

function getBoundingBoxes() {
  if (_config.locate) {
    return _locator_barcode_locator__WEBPACK_IMPORTED_MODULE_11__["default"].locate();
  } else {
    return [[_boxSize[0], _boxSize[1], _boxSize[2], _boxSize[3]]];
  }
}

function transform(polygon, offset) {
  polygon.forEach(function (vertex) {
    vertex.x += offset.x;
    vertex.y += offset.y;
  });
}

function transformResult(result, offset) {
  if (result.barcodes) {
    result.barcodes.forEach(function (barcode) {
      return transformResult(barcode, offset);
    });
  }

  if (result.line) {
    transform(result.line, offset);
  }

  if (result.box) {
    transform(result.box, offset);
  }

  if (result.boxes) {
    result.boxes.forEach(function (box) {
      return transform(box, offset);
    });
  }
}

function addResult(result, imageData, canvasWidth, canvasHeight) {
  if (!imageData || !_resultCollector) {
    return;
  }

  if (result.barcodes) {
    result.barcodes.forEach(function (barcode) {
      if (barcode.codeResult) {
        addResult(barcode, imageData, canvasWidth, canvasHeight);
      }
    });
  } else if (result.codeResult) {
    _resultCollector.addResult(imageData, canvasWidth, canvasHeight, result.codeResult);
  }
}

function hasCodeResult(result) {
  return result && (!!result.codeResult || result.barcodes && result.barcodes.some(function (barcode) {
    return barcode.codeResult;
  }));
}

function publishResult(result, imageData) {
  var resultToPublish = result;

  if (result && _onUIThread) {
    var offset = _inputStream.getTopRight();

    if (offset.x !== 0 || offset.y !== 0) {
      transformResult(result, offset);
    }

    addResult(result, imageData, _inputStream.getCanvasWidth(), _inputStream.getCanvasHeight());
    resultToPublish = result.barcodes || result;
  }

  _common_events__WEBPACK_IMPORTED_MODULE_2__["default"].publish('processed', resultToPublish);

  if (hasCodeResult(result)) {
    _common_events__WEBPACK_IMPORTED_MODULE_2__["default"].publish('detected', resultToPublish);
  }
}

function locateAndDecode() {
  var boxes = getBoundingBoxes();

  if (boxes) {
    var result = _decoder.decodeFromBoundingBoxes(boxes) || {};
    result.boxes = boxes;
    publishResult(result, _inputImageWrapper.data);
  } else {
    publishResult();
  }
}

function update() {
  var availableWorker;

  if (_onUIThread) {
    if (_workerPool.length > 0) {
      availableWorker = _workerPool.find(function (workerThread) {
        return !workerThread.busy;
      });

      if (availableWorker) {
        _framegrabber.attachData(availableWorker.imageData);
      } else {
        return; // all workers are busy
      }
    } else {
      _framegrabber.attachData(_inputImageWrapper.data);
    }

    if (_framegrabber.grab()) {
      if (availableWorker) {
        availableWorker.busy = true;
        availableWorker.worker.postMessage({
          cmd: 'process',
          imageData: availableWorker.imageData
        }, [availableWorker.imageData.buffer]);
      } else {
        locateAndDecode();
      }
    }
  } else {
    locateAndDecode();
  }
}

function startContinuousUpdate() {
  var delay = 1000 / (_config.frequency || 60);
  var next = null;
  _stopped = false;

  (function frame(timestamp) {
    next = next || timestamp;

    if (!_stopped) {
      if (timestamp >= next) {
        next += delay;
        update();
      }

      window.requestAnimationFrame(frame);
    }
  })(performance.now());
}

function _start() {
  if (_onUIThread && _config.inputStream.type === 'LiveStream') {
    startContinuousUpdate();
  } else {
    update();
  }
}

function initWorker(callback) {
  var blobURL = generateWorkerBlob();
  var workerThread = {
    worker: new Worker(blobURL),
    imageData: new Uint8Array(_inputStream.getWidth() * _inputStream.getHeight()),
    busy: true
  };

  workerThread.worker.onmessage = function (ev) {
    if (ev.data.event === 'initialized') {
      URL.revokeObjectURL(blobURL);
      workerThread.busy = false;
      workerThread.imageData = new Uint8Array(ev.data.imageData);

      if (true) {
        console.log('Worker initialized');
      }

      callback(workerThread);
    } else if (ev.data.event === 'processed') {
      workerThread.imageData = new Uint8Array(ev.data.imageData);
      workerThread.busy = false;
      publishResult(ev.data.result, workerThread.imageData);
    } else if (ev.data.event === 'error') {
      if (true) {
        console.log('Worker error:', ev.data.message);
      }
    }
  };

  workerThread.worker.postMessage({
    cmd: 'init',
    size: {
      x: _inputStream.getWidth(),
      y: _inputStream.getHeight()
    },
    imageData: workerThread.imageData,
    config: configForWorker(_config)
  }, [workerThread.imageData.buffer]);
}

function configForWorker(cfg) {
  return Object(_common_merge__WEBPACK_IMPORTED_MODULE_5__["merge"])(cfg, {
    inputStream: {
      target: null
    }
  });
}

function workerInterface(factory) {
  var Quagga;
  /* eslint-disable no-undef*/

  if (factory) {
    Quagga = factory()["default"];

    if (!Quagga) {
      self.postMessage({
        'event': 'error',
        message: 'Quagga could not be created'
      });
      return;
    }
  }

  var imageWrapper;

  self.onmessage = function (e) {
    if (e.data.cmd === 'init') {
      var cfg = e.data.config;
      cfg.numOfWorkers = 0;
      imageWrapper = new Quagga.ImageWrapper({
        x: e.data.size.x,
        y: e.data.size.y
      }, new Uint8Array(e.data.imageData));
      Quagga.init(cfg, ready, imageWrapper);
      Quagga.onProcessed(onProcessed);
    } else if (e.data.cmd === 'process') {
      imageWrapper.data = new Uint8Array(e.data.imageData);
      Quagga.start();
    } else if (e.data.cmd === 'setReaders') {
      Quagga.setReaders(e.data.readers);
    }
  };

  function onProcessed(result) {
    self.postMessage({
      'event': 'processed',
      imageData: imageWrapper.data,
      result: result
    }, [imageWrapper.data.buffer]);
  }

  function ready() {
    // eslint-disable-line
    self.postMessage({
      'event': 'initialized',
      imageData: imageWrapper.data
    }, [imageWrapper.data.buffer]);
  }
  /* eslint-enable */

}

function generateWorkerBlob() {
  var factorySource;
  /* jshint ignore:start */

  if (typeof __factorySource__ !== 'undefined') {
    factorySource = __factorySource__; // eslint-disable-line no-undef
  }
  /* jshint ignore:end */


  var blob = new Blob(['(' + workerInterface.toString() + ')(' + factorySource + ');'], {
    type: 'text/javascript'
  });
  return window.URL.createObjectURL(blob);
}

function _setReaders(readers) {
  if (_decoder) {
    _decoder.setReaders(readers);
  } else if (_onUIThread && _workerPool.length > 0) {
    _workerPool.forEach(function (_ref) {
      var worker = _ref.worker;
      return worker.postMessage({
        cmd: 'setReaders',
        readers: readers
      });
    });
  }
}

function adjustWorkerPool(capacity, callback) {
  var increaseBy = capacity - _workerPool.length;

  if (increaseBy === 0) {
    if (callback) {
      callback();
    }

    return;
  }

  if (increaseBy < 0) {
    var workersToTerminate = _workerPool.slice(increaseBy);

    workersToTerminate.forEach(function (_ref2) {
      var worker = _ref2.worker;
      worker.terminate();

      if (true) {
        console.log('Worker terminated!');
      }
    });
    _workerPool = _workerPool.slice(0, increaseBy);

    if (callback) {
      callback();
    }
  } else {
    for (var i = 0; i < increaseBy; i++) {
      initWorker(function (workerThread) {
        _workerPool.push(workerThread);

        if (_workerPool.length >= capacity && callback) {
          callback();
        }
      });
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = ({
  init: function init(cfg, callback, imageWrapper) {
    _config = Object(_common_merge__WEBPACK_IMPORTED_MODULE_5__["merge"])(_config_config__WEBPACK_IMPORTED_MODULE_6__["config"], cfg);

    if (imageWrapper) {
      _onUIThread = false;
      initializeData(imageWrapper);

      if (callback) {
        callback();
      }
    } else {
      initInputStream(callback);
    }
  },
  start: function start() {
    _start();
  },
  stop: function stop() {
    _stopped = true;
    adjustWorkerPool(0);

    if (_config.inputStream.type === 'LiveStream') {
      _input_camera_access__WEBPACK_IMPORTED_MODULE_8__["default"].release();

      _inputStream.clearEventHandlers();
    }
  },
  pause: function pause() {
    _stopped = true;
  },
  onDetected: function onDetected(callback) {
    _common_events__WEBPACK_IMPORTED_MODULE_2__["default"].subscribe('detected', callback);
  },
  offDetected: function offDetected(callback) {
    _common_events__WEBPACK_IMPORTED_MODULE_2__["default"].unsubscribe('detected', callback);
  },
  onProcessed: function onProcessed(callback) {
    _common_events__WEBPACK_IMPORTED_MODULE_2__["default"].subscribe('processed', callback);
  },
  offProcessed: function offProcessed(callback) {
    _common_events__WEBPACK_IMPORTED_MODULE_2__["default"].unsubscribe('processed', callback);
  },
  setReaders: function setReaders(readers) {
    _setReaders(readers);
  },
  registerResultCollector: function registerResultCollector(resultCollector) {
    if (resultCollector && typeof resultCollector.addResult === 'function') {
      _resultCollector = resultCollector;
    }
  },
  canvas: _canvasContainer,
  decodeSingle: function decodeSingle(cfg, resultCallback) {
    var _this = this;

    cfg = Object(_common_merge__WEBPACK_IMPORTED_MODULE_5__["merge"])({
      inputStream: {
        type: 'ImageStream',
        sequence: false,
        size: 800,
        src: cfg.src
      },
      numOfWorkers:  true && cfg.debug ? 0 : 1,
      locator: {
        halfSample: false
      }
    }, cfg);
    this.init(cfg, function () {
      _common_events__WEBPACK_IMPORTED_MODULE_2__["default"].once('processed', function (result) {
        _this.stop();

        resultCallback.call(null, result);
      }, true);

      _start();
    });
  },
  ImageWrapper: _common_image_wrapper__WEBPACK_IMPORTED_MODULE_4__["ImageWrapper"],
  ImageDebug: _common_image_debug__WEBPACK_IMPORTED_MODULE_3__["ImageDebug"],
  ResultCollector: _analytics_result_collector__WEBPACK_IMPORTED_MODULE_1__["ResultCollector"],
  CameraAccess: _input_camera_access__WEBPACK_IMPORTED_MODULE_8__["default"]
});

/***/ }),

/***/ "./src/reader/2of5_reader.js":
/*!***********************************!*\
  !*** ./src/reader/2of5_reader.js ***!
  \***********************************/
/*! exports provided: TwoOfFiveReader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwoOfFiveReader", function() { return TwoOfFiveReader; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _barcode_reader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./barcode_reader */ "./src/reader/barcode_reader.js");






var N = 1;
var W = 3;
var START_PATTERN = [W, N, W, N, N, N];
var STOP_PATTERN = [W, N, N, N, W];
var CODE_PATTERN = [[N, N, W, W, N], [W, N, N, N, W], [N, W, N, N, W], [W, W, N, N, N], [N, N, W, N, W], [W, N, W, N, N], [N, W, W, N, N], [N, N, N, W, W], [W, N, N, W, N], [N, W, N, W, N]];
var startPatternLength = START_PATTERN.reduce(function (sum, val) {
  return sum + val;
}, 0);
var TwoOfFiveReader =
/*#__PURE__*/
function (_BarcodeReader) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(TwoOfFiveReader, _BarcodeReader);

  function TwoOfFiveReader(config) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, TwoOfFiveReader);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(TwoOfFiveReader).call(this, config));
    _this._barSpaceRatio = [1, 1];
    _this._format = '2of5';
    _this._singleCodeError = 0.78;
    _this._averageCodeError = 0.30;
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(TwoOfFiveReader, [{
    key: "_findPattern",
    value: function _findPattern(pattern, offset, isWhite, tryHarder) {
      var counter = [];
      var bestMatch = {
        error: Number.MAX_VALUE,
        code: -1,
        start: 0,
        end: 0
      };
      var epsilon = this.AVERAGE_CODE_ERROR;
      var counterPos = 0;
      isWhite = isWhite || false;
      tryHarder = tryHarder || false;

      if (!offset) {
        offset = this._nextSet(this._row);
      }

      for (var i = 0; i < pattern.length; i++) {
        counter[i] = 0;
      }

      for (var _i = offset; _i < this._row.length; _i++) {
        if (this._row[_i] ^ isWhite) {
          counter[counterPos]++;
        } else {
          if (counterPos === counter.length - 1) {
            var sum = 0;

            for (var j = 0; j < counter.length; j++) {
              sum += counter[j];
            }

            var error = this._matchPattern(counter, pattern);

            if (error < epsilon) {
              bestMatch.error = error;
              bestMatch.start = _i - sum;
              bestMatch.end = _i;
              return bestMatch;
            }

            if (tryHarder) {
              for (var _j = 0; _j < counter.length - 2; _j++) {
                counter[_j] = counter[_j + 2];
              }

              counter[counter.length - 2] = 0;
              counter[counter.length - 1] = 0;
              counterPos--;
            } else {
              return null;
            }
          } else {
            counterPos++;
          }

          counter[counterPos] = 1;
          isWhite = !isWhite;
        }
      }

      return null;
    }
  }, {
    key: "_findStart",
    value: function _findStart() {
      var offset = this._nextSet(this._row);

      var narrowBarWidth = 1;
      var startInfo;

      while (!startInfo) {
        startInfo = this._findPattern(START_PATTERN, offset, false, true);

        if (!startInfo) {
          return null;
        }

        narrowBarWidth = (startInfo.end - startInfo.start) / startPatternLength | 0;
        var leadingWhitespaceStart = startInfo.start - narrowBarWidth * 5;

        if (leadingWhitespaceStart >= 0) {
          if (this._matchRange(leadingWhitespaceStart, startInfo.start, 0)) {
            return startInfo;
          }
        }

        offset = startInfo.end;
        startInfo = null;
      }

      return null;
    }
  }, {
    key: "_verifyTrailingWhitespace",
    value: function _verifyTrailingWhitespace(endInfo) {
      var trailingWhitespaceEnd = endInfo.end + (endInfo.end - endInfo.start) / 2;

      if (trailingWhitespaceEnd < this._row.length) {
        if (this._matchRange(endInfo.end, trailingWhitespaceEnd, 0)) {
          return endInfo;
        }
      }

      return null;
    }
  }, {
    key: "_findEnd",
    value: function _findEnd() {
      this._row.reverse();

      var offset = this._nextSet(this._row);

      var endInfo = this._findPattern(STOP_PATTERN, offset, false, true);

      this._row.reverse();

      if (endInfo === null) {
        return null;
      } // reverse numbers


      var tmp = endInfo.start;
      endInfo.start = this._row.length - endInfo.end;
      endInfo.end = this._row.length - tmp;
      return endInfo !== null ? this._verifyTrailingWhitespace(endInfo) : null;
    }
  }, {
    key: "_decodeCode",
    value: function _decodeCode(counter) {
      var bestMatch = {
        error: Number.MAX_VALUE,
        code: -1,
        start: 0,
        end: 0
      };

      for (var code = 0; code < CODE_PATTERN.length; code++) {
        var error = this._matchPattern(counter, CODE_PATTERN[code]);

        if (error < bestMatch.error) {
          bestMatch.code = code;
          bestMatch.error = error;
        }
      }

      return bestMatch.error < this.AVERAGE_CODE_ERROR ? bestMatch : null;
    }
  }, {
    key: "_decodePayload",
    value: function _decodePayload(counters, result, decodedCodes) {
      var counterLength = counters.length;
      var counter = [0, 0, 0, 0, 0];
      var pos = 0;
      var code;

      while (pos < counterLength) {
        for (var i = 0; i < 5; i++) {
          counter[i] = counters[pos] * this._barSpaceRatio[0];
          pos += 2;
        }

        code = this._decodeCode(counter);

        if (!code) {
          return null;
        }

        result.push(code.code + '');
        decodedCodes.push(code);
      }

      return code;
    }
  }, {
    key: "_decode",
    value: function _decode() {
      var startInfo = this._findStart();

      if (!startInfo) {
        return null;
      }

      var endInfo = this._findEnd();

      if (!endInfo) {
        return null;
      }

      var counters = this._fillCounters(startInfo.end, endInfo.start, false);

      if (counters.length % 10 !== 0) {
        return null;
      }

      var result = [];
      var decodedCodes = [];
      decodedCodes.push(startInfo);

      var code = this._decodePayload(counters, result, decodedCodes);

      if (!code || result.length < 5) {
        return null;
      }

      decodedCodes.push(endInfo);
      return {
        code: result.join(''),
        start: startInfo.start,
        end: endInfo.end,
        startInfo: startInfo,
        decodedCodes: decodedCodes
      };
    }
  }]);

  return TwoOfFiveReader;
}(_barcode_reader__WEBPACK_IMPORTED_MODULE_5__["BarcodeReader"]);

/***/ }),

/***/ "./src/reader/barcode_reader.js":
/*!**************************************!*\
  !*** ./src/reader/barcode_reader.js ***!
  \**************************************/
/*! exports provided: DIRECTION, BarcodeReader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIRECTION", function() { return DIRECTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarcodeReader", function() { return BarcodeReader; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);


var DIRECTION = {
  FORWARD: 1,
  REVERSE: -1
};
var BarcodeReader =
/*#__PURE__*/
function () {
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(BarcodeReader, [{
    key: "SINGLE_CODE_ERROR",
    get: function get() {
      return this._singleCodeError;
    }
  }, {
    key: "AVERAGE_CODE_ERROR",
    get: function get() {
      return this._averageCodeError;
    }
  }, {
    key: "FORMAT",
    get: function get() {
      return this._format;
    }
  }], [{
    key: "Exception",
    get: function get() {
      return {
        StartNotFoundException: 'Start-Info was not found!',
        CodeNotFoundException: 'Code could not be found!',
        PatternNotFoundException: 'Pattern could not be found!'
      };
    }
  }]);

  function BarcodeReader(config, supplements) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, BarcodeReader);

    this._format = 'unknown';
    this._row = [];
    this.config = config || {};
    this.supplements = supplements;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(BarcodeReader, [{
    key: "_nextUnset",
    value: function _nextUnset(line, start) {
      for (var i = start || 0; i < line.length; i++) {
        if (!line[i]) {
          return i;
        }
      }

      return line.length;
    }
  }, {
    key: "_matchPattern",
    value: function _matchPattern(counter, code, maxSingleError) {
      var error = 0;
      var sum = 0;
      var modulo = 0;
      maxSingleError = maxSingleError || this.SINGLE_CODE_ERROR || 1;

      for (var i = 0; i < counter.length; i++) {
        sum += counter[i];
        modulo += code[i];
      }

      if (sum < modulo) {
        return Number.MAX_VALUE;
      }

      var barWidth = sum / modulo;
      maxSingleError *= barWidth;

      for (var _i = 0; _i < counter.length; _i++) {
        var count = counter[_i];
        var scaled = code[_i] * barWidth;
        var singleError = Math.abs(count - scaled) / scaled;

        if (singleError > maxSingleError) {
          return Number.MAX_VALUE;
        }

        error += singleError;
      }

      return error / modulo;
    }
  }, {
    key: "_nextSet",
    value: function _nextSet(line, offset) {
      for (var i = offset || 0; i < line.length; i++) {
        if (line[i]) {
          return i;
        }
      }

      return line.length;
    }
  }, {
    key: "_correctBars",
    value: function _correctBars(counter, correction, indices) {
      var length = indices.length;
      var tmp = 0;

      while (length--) {
        tmp = counter[indices[length]] * (1 - (1 - correction) / 2);

        if (tmp > 1) {
          counter[indices[length]] = tmp;
        }
      }
    }
  }, {
    key: "decodePattern",
    value: function decodePattern(pattern) {
      this._row = pattern;

      var result = this._decode();

      if (result === null) {
        this._row.reverse();

        result = this._decode();

        if (result) {
          result.direction = DIRECTION.REVERSE;
          result.start = this._row.length - result.start;
          result.end = this._row.length - result.end;
        }
      } else {
        result.direction = DIRECTION.FORWARD;
      }

      if (result) {
        result.format = this.FORMAT;
      }

      return result;
    }
  }, {
    key: "_matchRange",
    value: function _matchRange(start, end, value) {
      for (var i = start < 0 ? 0 : start; i < end; i++) {
        if (this._row[i] !== value) {
          return false;
        }
      }

      return true;
    }
  }, {
    key: "_fillCounters",
    value: function _fillCounters(offset, end, isWhite) {
      var counters = [];
      var counterPos = 0;
      isWhite = typeof isWhite !== 'undefined' ? isWhite : true;
      offset = typeof offset !== 'undefined' ? offset : this._nextUnset(this._row);
      end = end || this._row.length;
      counters[counterPos] = 0;

      for (var i = offset; i < end; i++) {
        if (this._row[i] ^ isWhite) {
          counters[counterPos]++;
        } else {
          counterPos++;
          counters[counterPos] = 1;
          isWhite = !isWhite;
        }
      }

      return counters;
    }
  }, {
    key: "_toCounters",
    value: function _toCounters(start, counter) {
      var numCounters = counter.length;
      var end = this._row.length;
      var isWhite = !this._row[start];
      var counterPos = 0;
      counter.fill(0);

      for (var i = start; i < end; i++) {
        if (this._row[i] ^ isWhite) {
          counter[counterPos]++;
        } else {
          counterPos++;

          if (counterPos === numCounters) {
            break;
          } else {
            counter[counterPos] = 1;
            isWhite = !isWhite;
          }
        }
      }

      return counter;
    }
  }]);

  return BarcodeReader;
}();

/***/ }),

/***/ "./src/reader/codabar_reader.js":
/*!**************************************!*\
  !*** ./src/reader/codabar_reader.js ***!
  \**************************************/
/*! exports provided: CodabarReader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodabarReader", function() { return CodabarReader; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../../node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "../../node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _barcode_reader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./barcode_reader */ "./src/reader/barcode_reader.js");








var ALPHABETH_STRING = '0123456789-$:/.+ABCD';

var ALPHABET = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_6___default()(ALPHABETH_STRING).map(function (_char) {
  return _char.charCodeAt(0);
}); // const ALPHABET = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 45, 36, 58, 47, 46, 43, 65, 66, 67, 68];


var CHARACTER_ENCODINGS = [0x003, 0x006, 0x009, 0x060, 0x012, 0x042, 0x021, 0x024, 0x030, 0x048, 0x00c, 0x018, 0x045, 0x051, 0x054, 0x015, 0x01A, 0x029, 0x00B, 0x00E];
var START_END = [0x01A, 0x029, 0x00B, 0x00E];
var MIN_ENCODED_CHARS = 4;
var MAX_ACCEPTABLE = 2.0;
var PADDING = 1.5;
var CodabarReader =
/*#__PURE__*/
function (_BarcodeReader) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(CodabarReader, _BarcodeReader);

  function CodabarReader() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, CodabarReader);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(CodabarReader).call(this));
    _this._format = 'codabar';
    _this._counters = [];
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(CodabarReader, [{
    key: "_decode",
    value: function _decode() {
      this._counters = this._fillCounters();

      var start = this._findStart();

      if (!start) {
        return null;
      }

      var result = [];
      var nextStart = start.startCounter;
      var pattern;

      do {
        pattern = this._toPattern(nextStart);

        if (pattern < 0) {
          return null;
        }

        var decodedChar = this._patternToChar(pattern);

        if (decodedChar < 0) {
          return null;
        }

        result.push(decodedChar);
        nextStart += 8;

        if (result.length > 1 && START_END.some(function (code) {
          return code === pattern;
        })) {
          break;
        }
      } while (nextStart < this._counters.length); // verify end


      if (result.length - 2 < MIN_ENCODED_CHARS || !START_END.some(function (code) {
        return code === pattern;
      })) {
        return null;
      } // verify end white space


      if (!this._verifyWhitespace(start.startCounter, nextStart - 8)) {
        return null;
      }

      if (!this._validateResult(result, start.startCounter)) {
        return null;
      }

      nextStart = nextStart > this._counters.length ? this._counters.length : nextStart;

      var end = start.start + this._sumCounters(start.startCounter, nextStart - 8);

      return {
        code: result.join(''),
        start: start.start,
        end: end,
        startInfo: start,
        decodedCodes: result
      };
    }
  }, {
    key: "_verifyWhitespace",
    value: function _verifyWhitespace(startCounter, endCounter) {
      if (startCounter - 1 <= 0 || this._counters[startCounter - 1] >= this._calculatePatternLength(startCounter) / 2.0) {
        if (endCounter + 8 >= this._counters.length || this._counters[endCounter + 7] >= this._calculatePatternLength(endCounter) / 2.0) {
          return true;
        }
      }

      return false;
    }
  }, {
    key: "_calculatePatternLength",
    value: function _calculatePatternLength(offset) {
      var sum = 0;

      for (var i = offset; i < offset + 7; i++) {
        sum += this._counters[i];
      }

      return sum;
    }
  }, {
    key: "_thresholdResultPattern",
    value: function _thresholdResultPattern(result, startCounter) {
      var categorization = {
        space: {
          narrow: {
            size: 0,
            counts: 0,
            min: 0,
            max: Number.MAX_VALUE
          },
          wide: {
            size: 0,
            counts: 0,
            min: 0,
            max: Number.MAX_VALUE
          }
        },
        bar: {
          narrow: {
            size: 0,
            counts: 0,
            min: 0,
            max: Number.MAX_VALUE
          },
          wide: {
            size: 0,
            counts: 0,
            min: 0,
            max: Number.MAX_VALUE
          }
        }
      };
      var pos = startCounter;

      for (var i = 0; i < result.length; i++) {
        var pattern = this._charToPattern(result[i]);

        for (var j = 6; j >= 0; j--) {
          var kind = (j & 1) === 2 ? categorization.bar : categorization.space;
          var cat = (pattern & 1) === 1 ? kind.wide : kind.narrow;
          cat.size += this._counters[pos + j];
          cat.counts++;
          pattern >>= 1;
        }

        pos += 8;
      }

      ['space', 'bar'].forEach(function (key) {
        var kind = categorization[key];
        kind.wide.min = Math.floor((kind.narrow.size / kind.narrow.counts + kind.wide.size / kind.wide.counts) / 2);
        kind.narrow.max = Math.ceil(kind.wide.min);
        kind.wide.max = Math.ceil((kind.wide.size * MAX_ACCEPTABLE + PADDING) / kind.wide.counts);
      });
      return categorization;
    }
  }, {
    key: "_charToPattern",
    value: function _charToPattern(_char2) {
      var charCode = _char2.charCodeAt(0);

      for (var i = 0; i < ALPHABET.length; i++) {
        if (ALPHABET[i] === charCode) {
          return CHARACTER_ENCODINGS[i];
        }
      }

      return 0x0;
    }
  }, {
    key: "_validateResult",
    value: function _validateResult(result, startCounter) {
      var thresholds = this._thresholdResultPattern(result, startCounter);

      var pos = startCounter;

      for (var i = 0; i < result.length; i++) {
        var pattern = this._charToPattern(result[i]);

        for (var j = 6; j >= 0; j--) {
          var kind = (j & 1) === 0 ? thresholds.bar : thresholds.space;
          var cat = (pattern & 1) === 1 ? kind.wide : kind.narrow;
          var size = this._counters[pos + j];

          if (size < cat.min || size > cat.max) {
            return false;
          }

          pattern >>= 1;
        }

        pos += 8;
      }

      return true;
    }
  }, {
    key: "_patternToChar",
    value: function _patternToChar(pattern) {
      for (var i = 0; i < CHARACTER_ENCODINGS.length; i++) {
        if (CHARACTER_ENCODINGS[i] === pattern) {
          return String.fromCharCode(ALPHABET[i]);
        }
      }

      return -1;
    }
  }, {
    key: "_computeAlternatingThreshold",
    value: function _computeAlternatingThreshold(offset, end) {
      var min = Number.MAX_VALUE;
      var max = 0;

      for (var i = offset; i < end; i += 2) {
        var counter = this._counters[i];

        if (counter > max) {
          max = counter;
        }

        if (counter < min) {
          min = counter;
        }
      }

      return (min + max) / 2.0 | 0;
    }
  }, {
    key: "_toPattern",
    value: function _toPattern(offset) {
      var numCounters = 7;
      var end = offset + numCounters;

      if (end > this._counters.length) {
        return -1;
      }

      var barThreshold = this._computeAlternatingThreshold(offset, end);

      var spaceThreshold = this._computeAlternatingThreshold(offset + 1, end);

      var bitmask = 1 << numCounters - 1;
      var pattern = 0;

      for (var i = 0; i < numCounters; i++) {
        var threshold = (i & 1) === 0 ? barThreshold : spaceThreshold;

        if (this._counters[offset + i] > threshold) {
          pattern |= bitmask;
        }

        bitmask >>= 1;
      }

      return pattern;
    }
  }, {
    key: "_sumCounters",
    value: function _sumCounters(start, end) {
      var sum = 0;

      for (var i = start; i < end; i++) {
        sum += this._counters[i];
      }

      return sum;
    }
  }, {
    key: "_findStart",
    value: function _findStart() {
      var _this2 = this;

      var start = this._nextUnset(this._row);

      var _loop = function _loop(i) {
        var pattern = _this2._toPattern(i);

        if (pattern !== -1 && START_END.some(function (code) {
          return code === pattern;
        })) {
          // TODO: Look for whitespace ahead
          start += _this2._sumCounters(0, i);

          var end = start + _this2._sumCounters(i, i + 8);

          return {
            v: {
              start: start,
              end: end,
              startCounter: i,
              endCounter: i + 8
            }
          };
        }
      };

      for (var i = 1; i < this._counters.length; i++) {
        var _ret = _loop(i);

        if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(_ret) === "object") return _ret.v;
      }

      return null;
    }
  }]);

  return CodabarReader;
}(_barcode_reader__WEBPACK_IMPORTED_MODULE_7__["BarcodeReader"]);

/***/ }),

/***/ "./src/reader/code_128_reader.js":
/*!***************************************!*\
  !*** ./src/reader/code_128_reader.js ***!
  \***************************************/
/*! exports provided: Code128Reader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Code128Reader", function() { return Code128Reader; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _barcode_reader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./barcode_reader */ "./src/reader/barcode_reader.js");






var CODE_SHIFT = 98;
var CODE_C = 99;
var CODE_B = 100;
var CODE_A = 101;
var START_CODE_A = 103;
var START_CODE_B = 104;
var START_CODE_C = 105;
var STOP_CODE = 106;
var CODE_PATTERN = [[2, 1, 2, 2, 2, 2], [2, 2, 2, 1, 2, 2], [2, 2, 2, 2, 2, 1], [1, 2, 1, 2, 2, 3], [1, 2, 1, 3, 2, 2], [1, 3, 1, 2, 2, 2], [1, 2, 2, 2, 1, 3], [1, 2, 2, 3, 1, 2], [1, 3, 2, 2, 1, 2], [2, 2, 1, 2, 1, 3], [2, 2, 1, 3, 1, 2], [2, 3, 1, 2, 1, 2], [1, 1, 2, 2, 3, 2], [1, 2, 2, 1, 3, 2], [1, 2, 2, 2, 3, 1], [1, 1, 3, 2, 2, 2], [1, 2, 3, 1, 2, 2], [1, 2, 3, 2, 2, 1], [2, 2, 3, 2, 1, 1], [2, 2, 1, 1, 3, 2], [2, 2, 1, 2, 3, 1], [2, 1, 3, 2, 1, 2], [2, 2, 3, 1, 1, 2], [3, 1, 2, 1, 3, 1], [3, 1, 1, 2, 2, 2], [3, 2, 1, 1, 2, 2], [3, 2, 1, 2, 2, 1], [3, 1, 2, 2, 1, 2], [3, 2, 2, 1, 1, 2], [3, 2, 2, 2, 1, 1], [2, 1, 2, 1, 2, 3], [2, 1, 2, 3, 2, 1], [2, 3, 2, 1, 2, 1], [1, 1, 1, 3, 2, 3], [1, 3, 1, 1, 2, 3], [1, 3, 1, 3, 2, 1], [1, 1, 2, 3, 1, 3], [1, 3, 2, 1, 1, 3], [1, 3, 2, 3, 1, 1], [2, 1, 1, 3, 1, 3], [2, 3, 1, 1, 1, 3], [2, 3, 1, 3, 1, 1], [1, 1, 2, 1, 3, 3], [1, 1, 2, 3, 3, 1], [1, 3, 2, 1, 3, 1], [1, 1, 3, 1, 2, 3], [1, 1, 3, 3, 2, 1], [1, 3, 3, 1, 2, 1], [3, 1, 3, 1, 2, 1], [2, 1, 1, 3, 3, 1], [2, 3, 1, 1, 3, 1], [2, 1, 3, 1, 1, 3], [2, 1, 3, 3, 1, 1], [2, 1, 3, 1, 3, 1], [3, 1, 1, 1, 2, 3], [3, 1, 1, 3, 2, 1], [3, 3, 1, 1, 2, 1], [3, 1, 2, 1, 1, 3], [3, 1, 2, 3, 1, 1], [3, 3, 2, 1, 1, 1], [3, 1, 4, 1, 1, 1], [2, 2, 1, 4, 1, 1], [4, 3, 1, 1, 1, 1], [1, 1, 1, 2, 2, 4], [1, 1, 1, 4, 2, 2], [1, 2, 1, 1, 2, 4], [1, 2, 1, 4, 2, 1], [1, 4, 1, 1, 2, 2], [1, 4, 1, 2, 2, 1], [1, 1, 2, 2, 1, 4], [1, 1, 2, 4, 1, 2], [1, 2, 2, 1, 1, 4], [1, 2, 2, 4, 1, 1], [1, 4, 2, 1, 1, 2], [1, 4, 2, 2, 1, 1], [2, 4, 1, 2, 1, 1], [2, 2, 1, 1, 1, 4], [4, 1, 3, 1, 1, 1], [2, 4, 1, 1, 1, 2], [1, 3, 4, 1, 1, 1], [1, 1, 1, 2, 4, 2], [1, 2, 1, 1, 4, 2], [1, 2, 1, 2, 4, 1], [1, 1, 4, 2, 1, 2], [1, 2, 4, 1, 1, 2], [1, 2, 4, 2, 1, 1], [4, 1, 1, 2, 1, 2], [4, 2, 1, 1, 1, 2], [4, 2, 1, 2, 1, 1], [2, 1, 2, 1, 4, 1], [2, 1, 4, 1, 2, 1], [4, 1, 2, 1, 2, 1], [1, 1, 1, 1, 4, 3], [1, 1, 1, 3, 4, 1], [1, 3, 1, 1, 4, 1], [1, 1, 4, 1, 1, 3], [1, 1, 4, 3, 1, 1], [4, 1, 1, 1, 1, 3], [4, 1, 1, 3, 1, 1], [1, 1, 3, 1, 4, 1], [1, 1, 4, 1, 3, 1], [3, 1, 1, 1, 4, 1], [4, 1, 1, 1, 3, 1], [2, 1, 1, 4, 1, 2], [2, 1, 1, 2, 1, 4], [2, 1, 1, 2, 3, 2], [2, 3, 3, 1, 1, 1, 2]];
var MODULE_INDICES = {
  bar: [0, 2, 4],
  space: [1, 3, 5]
};
var Code128Reader =
/*#__PURE__*/
function (_BarcodeReader) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Code128Reader, _BarcodeReader);

  function Code128Reader() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Code128Reader);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Code128Reader).call(this));
    _this._format = 'code_128';
    _this._singleCodeError = 0.64;
    _this._averageCodeError = 0.30;
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Code128Reader, [{
    key: "_decodeCode",
    value: function _decodeCode(start, correction) {
      var counter = [0, 0, 0, 0, 0, 0];
      var offset = start;
      var bestMatch = {
        error: Number.MAX_VALUE,
        code: -1,
        start: start,
        end: start,
        correction: {
          bar: 1,
          space: 1
        }
      };
      var epsilon = this.AVERAGE_CODE_ERROR;
      var isWhite = !this._row[offset];
      var counterPos = 0;

      for (var i = offset; i < this._row.length; i++) {
        if (this._row[i] ^ isWhite) {
          counter[counterPos]++;
        } else {
          if (counterPos === counter.length - 1) {
            if (correction) {
              this._correct(counter, correction);
            }

            for (var code = 0; code < CODE_PATTERN.length; code++) {
              var error = this._matchPattern(counter, CODE_PATTERN[code]);

              if (error < bestMatch.error) {
                bestMatch.code = code;
                bestMatch.error = error;
              }
            }

            bestMatch.end = i;

            if (bestMatch.code === -1 || bestMatch.error > epsilon) {
              return null;
            }

            var expected = CODE_PATTERN[bestMatch.code];

            if (expected) {
              bestMatch.correction.bar = this.calculateCorrection(expected, counter, MODULE_INDICES.bar);
              bestMatch.correction.space = this.calculateCorrection(expected, counter, MODULE_INDICES.space);
            }

            return bestMatch;
          } else {
            counterPos++;
          }

          counter[counterPos] = 1;
          isWhite = !isWhite;
        }
      }

      return null;
    }
  }, {
    key: "_correct",
    value: function _correct(counter, correction) {
      this._correctBars(counter, correction.bar, MODULE_INDICES.bar);

      this._correctBars(counter, correction.space, MODULE_INDICES.space);
    }
  }, {
    key: "_findStart",
    value: function _findStart() {
      var counter = [0, 0, 0, 0, 0, 0];

      var offset = this._nextSet(this._row);

      var bestMatch = {
        error: Number.MAX_VALUE,
        code: -1,
        start: 0,
        end: 0,
        correction: {
          bar: 1,
          space: 1
        }
      };
      var epsilon = this.AVERAGE_CODE_ERROR;
      var isWhite = false;
      var counterPos = 0;
      var sum;

      for (var i = offset; i < this._row.length; i++) {
        if (this._row[i] ^ isWhite) {
          counter[counterPos]++;
        } else {
          if (counterPos === counter.length - 1) {
            sum = 0;

            for (var j = 0; j < counter.length; j++) {
              sum += counter[j];
            }

            for (var code = START_CODE_A; code <= START_CODE_C; code++) {
              var error = this._matchPattern(counter, CODE_PATTERN[code]);

              if (error < bestMatch.error) {
                bestMatch.code = code;
                bestMatch.error = error;
              }
            }

            if (bestMatch.error < epsilon) {
              bestMatch.start = i - sum;
              bestMatch.end = i;
              bestMatch.correction.bar = this.calculateCorrection(CODE_PATTERN[bestMatch.code], counter, MODULE_INDICES.bar);
              bestMatch.correction.space = this.calculateCorrection(CODE_PATTERN[bestMatch.code], counter, MODULE_INDICES.space);
              return bestMatch;
            }

            for (var _j = 0; _j < 4; _j++) {
              counter[_j] = counter[_j + 2];
            }

            counter[4] = 0;
            counter[5] = 0;
            counterPos--;
          } else {
            counterPos++;
          }

          counter[counterPos] = 1;
          isWhite = !isWhite;
        }
      }

      return null;
    }
  }, {
    key: "_decode",
    value: function _decode() {
      var result = [];

      var startInfo = this._findStart();

      var code = null;
      var done = false;
      var multiplier = 0;
      var checksum = 0;
      var codeset;
      var rawResult = [];
      var decodedCodes = [];
      var shiftNext = false;
      var unshift;
      var removeLastCharacter = true;

      if (startInfo === null) {
        return null;
      }

      code = {
        code: startInfo.code,
        start: startInfo.start,
        end: startInfo.end,
        correction: {
          bar: startInfo.correction.bar,
          space: startInfo.correction.space
        }
      };
      decodedCodes.push(code);
      checksum = code.code;

      switch (code.code) {
        case START_CODE_A:
          codeset = CODE_A;
          break;

        case START_CODE_B:
          codeset = CODE_B;
          break;

        case START_CODE_C:
          codeset = CODE_C;
          break;

        default:
          return null;
      }

      while (!done) {
        unshift = shiftNext;
        shiftNext = false;
        code = this._decodeCode(code.end, code.correction);

        if (code !== null) {
          if (code.code !== STOP_CODE) {
            removeLastCharacter = true;
          }

          if (code.code !== STOP_CODE) {
            rawResult.push(code.code);
            multiplier++;
            checksum += multiplier * code.code;
          }

          decodedCodes.push(code);

          switch (codeset) {
            case CODE_A:
              {
                if (code.code < 64) {
                  result.push(String.fromCharCode(32 + code.code));
                } else if (code.code < 96) {
                  result.push(String.fromCharCode(code.code - 64));
                } else {
                  if (code.code !== STOP_CODE) {
                    removeLastCharacter = false;
                  }

                  switch (code.code) {
                    case CODE_SHIFT:
                      shiftNext = true;
                      codeset = CODE_B;
                      break;

                    case CODE_B:
                      codeset = CODE_B;
                      break;

                    case CODE_C:
                      codeset = CODE_C;
                      break;

                    case STOP_CODE:
                      done = true;
                      break;
                  }
                }

                break;
              }

            case CODE_B:
              {
                if (code.code < 96) {
                  result.push(String.fromCharCode(32 + code.code));
                } else {
                  if (code.code !== STOP_CODE) {
                    removeLastCharacter = false;
                  }

                  switch (code.code) {
                    case CODE_SHIFT:
                      shiftNext = true;
                      codeset = CODE_A;
                      break;

                    case CODE_A:
                      codeset = CODE_A;
                      break;

                    case CODE_C:
                      codeset = CODE_C;
                      break;

                    case STOP_CODE:
                      done = true;
                      break;
                  }
                }

                break;
              }

            case CODE_C:
              {
                if (code.code < 100) {
                  result.push(code.code < 10 ? '0' + code.code : code.code);
                } else {
                  if (code.code !== STOP_CODE) {
                    removeLastCharacter = false;
                  }

                  switch (code.code) {
                    case CODE_A:
                      codeset = CODE_A;
                      break;

                    case CODE_B:
                      codeset = CODE_B;
                      break;

                    case STOP_CODE:
                      done = true;
                      break;
                  }
                }

                break;
              }
          }
        } else {
          done = true;
        }

        if (unshift) {
          codeset = codeset === CODE_A ? CODE_B : CODE_A;
        }
      }

      if (code === null) {
        return null;
      }

      code.end = this._nextUnset(this._row, code.end);

      if (!this._verifyTrailingWhitespace(code)) {
        return null;
      }

      checksum -= multiplier * rawResult[rawResult.length - 1];

      if (checksum % 103 !== rawResult[rawResult.length - 1]) {
        return null;
      }

      if (!result.length) {
        return null;
      } // remove last code from result (checksum)


      if (removeLastCharacter) {
        result.splice(result.length - 1, 1);
      }

      return {
        code: result.join(''),
        start: startInfo.start,
        end: code.end,
        codeset: codeset,
        startInfo: startInfo,
        decodedCodes: decodedCodes,
        endInfo: code
      };
    }
  }, {
    key: "_verifyTrailingWhitespace",
    value: function _verifyTrailingWhitespace(endInfo) {
      var trailingWhitespaceEnd = endInfo.end + (endInfo.end - endInfo.start) / 2;

      if (trailingWhitespaceEnd < this._row.length) {
        if (this._matchRange(endInfo.end, trailingWhitespaceEnd, 0)) {
          return endInfo;
        }
      }

      return null;
    }
  }, {
    key: "calculateCorrection",
    value: function calculateCorrection(expected, normalized, indices) {
      var sumNormalized = 0;
      var sumExpected = 0;

      for (var length = indices.length; length--;) {
        sumExpected += expected[indices[length]];
        sumNormalized += normalized[indices[length]];
      }

      return sumExpected / sumNormalized;
    }
  }]);

  return Code128Reader;
}(_barcode_reader__WEBPACK_IMPORTED_MODULE_5__["BarcodeReader"]);

/***/ }),

/***/ "./src/reader/code_39_reader.js":
/*!**************************************!*\
  !*** ./src/reader/code_39_reader.js ***!
  \**************************************/
/*! exports provided: Code39Reader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Code39Reader", function() { return Code39Reader; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "../../node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _barcode_reader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./barcode_reader */ "./src/reader/barcode_reader.js");







var ASTERISK = 0x094;
var ALPHABETH_STRING = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. *$/+%';

var ALPHABET = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5___default()(ALPHABETH_STRING).map(function (_char) {
  return _char.charCodeAt(0);
}); // const ALPHABET = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78,
//     79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 45, 46, 32, 42, 36, 47, 43, 37];


var CHARACTER_ENCODINGS = [0x034, 0x121, 0x061, 0x160, 0x031, 0x130, 0x070, 0x025, 0x124, 0x064, 0x109, 0x049, 0x148, 0x019, 0x118, 0x058, 0x00D, 0x10C, 0x04C, 0x01C, 0x103, 0x043, 0x142, 0x013, 0x112, 0x052, 0x007, 0x106, 0x046, 0x016, 0x181, 0x0C1, 0x1C0, 0x091, 0x190, 0x0D0, 0x085, 0x184, 0x0C4, 0x094, 0x0A8, 0x0A2, 0x08A, 0x02A];
var Code39Reader =
/*#__PURE__*/
function (_BarcodeReader) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Code39Reader, _BarcodeReader);

  function Code39Reader() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Code39Reader);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Code39Reader).call(this));
    _this._format = 'code_39';
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Code39Reader, [{
    key: "_decode",
    value: function _decode() {
      var start = this._findStart();

      if (!start) {
        return null;
      }

      var result = [];
      var counters = [0, 0, 0, 0, 0, 0, 0, 0, 0];
      var decodedChar;
      var lastStart;

      var nextStart = this._nextSet(this._row, start.end);

      do {
        counters = this._toCounters(nextStart, counters);

        var pattern = this._toPattern(counters);

        if (pattern < 0) {
          return null;
        }

        decodedChar = this._patternToChar(pattern);

        if (decodedChar < 0) {
          return null;
        }

        result.push(decodedChar);
        lastStart = nextStart;
        nextStart += counters.reduce(function (sum, item) {
          return sum + item;
        }, 0);
        nextStart = this._nextSet(this._row, nextStart);
      } while (decodedChar !== '*');

      result.pop();

      if (!result.length) {
        return null;
      }

      if (!this._verifyTrailingWhitespace(lastStart, nextStart, counters)) {
        return null;
      }

      return {
        code: result.join(''),
        start: start.start,
        end: nextStart,
        startInfo: start,
        decodedCodes: result
      };
    }
  }, {
    key: "_verifyTrailingWhitespace",
    value: function _verifyTrailingWhitespace(lastStart, nextStart, counters) {
      var patternSize = counters.reduce(function (sum, item) {
        return sum + item;
      }, 0);
      var trailingWhitespaceEnd = nextStart - lastStart - patternSize;
      return trailingWhitespaceEnd * 3 >= patternSize;
    }
  }, {
    key: "_patternToChar",
    value: function _patternToChar(pattern) {
      for (var i = 0; i < CHARACTER_ENCODINGS.length; i++) {
        if (CHARACTER_ENCODINGS[i] === pattern) {
          return String.fromCharCode(ALPHABET[i]);
        }
      }

      return -1;
    }
  }, {
    key: "_findNextWidth",
    value: function _findNextWidth(counters, current) {
      var minWidth = Number.MAX_VALUE;

      for (var i = 0; i < counters.length; i++) {
        if (counters[i] < minWidth && counters[i] > current) {
          minWidth = counters[i];
        }
      }

      return minWidth;
    }
  }, {
    key: "_toPattern",
    value: function _toPattern(counters) {
      var numCounters = counters.length;
      var maxNarrowWidth = 0;
      var numWideBars = numCounters;
      var wideBarWidth = 0;
      var pattern;

      while (numWideBars > 3) {
        maxNarrowWidth = this._findNextWidth(counters, maxNarrowWidth);
        numWideBars = 0;
        pattern = 0;

        for (var i = 0; i < numCounters; i++) {
          if (counters[i] > maxNarrowWidth) {
            pattern |= 1 << numCounters - 1 - i;
            numWideBars++;
            wideBarWidth += counters[i];
          }
        }

        if (numWideBars === 3) {
          for (var _i = 0; _i < numCounters && numWideBars > 0; _i++) {
            if (counters[_i] > maxNarrowWidth) {
              numWideBars--;

              if (counters[_i] * 2 >= wideBarWidth) {
                return -1;
              }
            }
          }

          return pattern;
        }
      }

      return -1;
    }
  }, {
    key: "_findStart",
    value: function _findStart() {
      var offset = this._nextSet(this._row);

      var patternStart = offset;
      var counter = [0, 0, 0, 0, 0, 0, 0, 0, 0];
      var counterPos = 0;
      var isWhite = false;
      var whiteSpaceMustStart;

      for (var i = offset; i < this._row.length; i++) {
        if (this._row[i] ^ isWhite) {
          counter[counterPos]++;
        } else {
          if (counterPos === counter.length - 1) {
            // find start pattern
            if (this._toPattern(counter) === ASTERISK) {
              whiteSpaceMustStart = Math.max(0, patternStart - (i - patternStart) / 4) | 0;

              if (this._matchRange(whiteSpaceMustStart, patternStart, 0)) {
                return {
                  start: patternStart,
                  end: i
                };
              }
            }

            patternStart += counter[0] + counter[1];

            for (var j = 0; j < 7; j++) {
              counter[j] = counter[j + 2];
            }

            counter[7] = 0;
            counter[8] = 0;
            counterPos--;
          } else {
            counterPos++;
          }

          counter[counterPos] = 1;
          isWhite = !isWhite;
        }
      }

      return null;
    }
  }]);

  return Code39Reader;
}(_barcode_reader__WEBPACK_IMPORTED_MODULE_6__["BarcodeReader"]);

/***/ }),

/***/ "./src/reader/code_39_vin_reader.js":
/*!******************************************!*\
  !*** ./src/reader/code_39_vin_reader.js ***!
  \******************************************/
/*! exports provided: Code39VINReader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Code39VINReader", function() { return Code39VINReader; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "../../node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _code_39_reader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./code_39_reader */ "./src/reader/code_39_reader.js");







var Code39VINReader =
/*#__PURE__*/
function (_Code39Reader) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Code39VINReader, _Code39Reader);

  function Code39VINReader() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Code39VINReader);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Code39VINReader).call(this));
    _this._format = 'code_39_vin';
    return _this;
  }
  /**
   * @borrows
   * https://github.com/zxing/zxing/blob/master/core/src/main/java/com/google/zxing/client/result/VINResultParser.java
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Code39VINReader, [{
    key: "_decode",
    value: function _decode() {
      var result = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Code39VINReader.prototype), "_decode", this).call(this);

      if (!result) {
        return null;
      }

      var code = result.code;

      if (!code) {
        return null;
      }

      code = code.replace(/[IOQ]/g, '');

      if (!/[A-Z0-9]{17}/.test(code)) {
        if (true) {
          console.log('Failed AZ09 pattern code:', code);
        }

        return null;
      }

      if (!this._checkChecksum(code)) {
        return null;
      }

      result.code = code;
      return result;
    }
  }, {
    key: "_checkChecksum",
    value: function _checkChecksum(code) {
      // TODO
      return !!code;
    }
  }]);

  return Code39VINReader;
}(_code_39_reader__WEBPACK_IMPORTED_MODULE_6__["Code39Reader"]);

/***/ }),

/***/ "./src/reader/code_93_reader.js":
/*!**************************************!*\
  !*** ./src/reader/code_93_reader.js ***!
  \**************************************/
/*! exports provided: Code93Reader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Code93Reader", function() { return Code93Reader; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "../../node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _barcode_reader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./barcode_reader */ "./src/reader/barcode_reader.js");







var ALPHABETH_STRING = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. $/+%abcd*';

var ALPHABET = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5___default()(ALPHABETH_STRING).map(function (_char) {
  return _char.charCodeAt(0);
});

var CHARACTER_ENCODINGS = [0x114, 0x148, 0x144, 0x142, 0x128, 0x124, 0x122, 0x150, 0x112, 0x10A, 0x1A8, 0x1A4, 0x1A2, 0x194, 0x192, 0x18A, 0x168, 0x164, 0x162, 0x134, 0x11A, 0x158, 0x14C, 0x146, 0x12C, 0x116, 0x1B4, 0x1B2, 0x1AC, 0x1A6, 0x196, 0x19A, 0x16C, 0x166, 0x136, 0x13A, 0x12E, 0x1D4, 0x1D2, 0x1CA, 0x16E, 0x176, 0x1AE, 0x126, 0x1DA, 0x1D6, 0x132, 0x15E];
var ASTERISK = 0x15E;
var Code93Reader =
/*#__PURE__*/
function (_BarcodeReader) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Code93Reader, _BarcodeReader);

  function Code93Reader() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Code93Reader);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Code93Reader).call(this));
    _this._format = 'code_93';
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Code93Reader, [{
    key: "_decode",
    value: function _decode() {
      var start = this._findStart();

      if (!start) {
        return null;
      }

      var result = [];
      var counters = [0, 0, 0, 0, 0, 0];
      var decodedChar;
      var lastStart;

      var nextStart = this._nextSet(this._row, start.end);

      do {
        counters = this._toCounters(nextStart, counters);

        var pattern = this._toPattern(counters);

        if (pattern < 0) {
          return null;
        }

        decodedChar = this._patternToChar(pattern);

        if (decodedChar < 0) {
          return null;
        }

        result.push(decodedChar);
        lastStart = nextStart;
        nextStart += counters.reduce(function (sum, item) {
          return sum + item;
        }, 0);
        nextStart = this._nextSet(this._row, nextStart);
      } while (decodedChar !== '*');

      result.pop();

      if (!result.length) {
        return null;
      }

      if (!this._verifyEnd(lastStart, nextStart, counters)) {
        return null;
      }

      if (!this._verifyChecksums(result)) {
        return null;
      }

      result = result.slice(0, result.length - 2);

      if ((result = this._decodeExtended(result)) === null) {
        return null;
      }

      return {
        code: result.join(''),
        start: start.start,
        end: nextStart,
        startInfo: start,
        decodedCodes: result
      };
    }
  }, {
    key: "_verifyEnd",
    value: function _verifyEnd(lastStart, nextStart) {
      if (lastStart === nextStart || !this._row[nextStart]) {
        return false;
      }

      return true;
    }
  }, {
    key: "_patternToChar",
    value: function _patternToChar(pattern) {
      for (var i = 0; i < CHARACTER_ENCODINGS.length; i++) {
        if (CHARACTER_ENCODINGS[i] === pattern) {
          return String.fromCharCode(ALPHABET[i]);
        }
      }

      return -1;
    }
  }, {
    key: "_toPattern",
    value: function _toPattern(counters) {
      var numCounters = counters.length;
      var pattern = 0;
      var sum = 0;

      for (var i = 0; i < numCounters; i++) {
        sum += counters[i];
      }

      for (var _i = 0; _i < numCounters; _i++) {
        var normalized = Math.round(counters[_i] * 9 / sum);

        if (normalized < 1 || normalized > 4) {
          return -1;
        }

        if ((_i & 1) === 0) {
          for (var j = 0; j < normalized; j++) {
            pattern = pattern << 1 | 1;
          }
        } else {
          pattern <<= normalized;
        }
      }

      return pattern;
    }
  }, {
    key: "_findStart",
    value: function _findStart() {
      var counter = [0, 0, 0, 0, 0, 0];

      var offset = this._nextSet(this._row);

      var patternStart = offset;
      var counterPos = 0;
      var isWhite = false;
      var whiteSpaceMustStart;

      for (var i = offset; i < this._row.length; i++) {
        if (this._row[i] ^ isWhite) {
          counter[counterPos]++;
        } else {
          if (counterPos === counter.length - 1) {
            // find start pattern
            if (this._toPattern(counter) === ASTERISK) {
              whiteSpaceMustStart = Math.max(0, patternStart - (i - patternStart) / 4) | 0;

              if (this._matchRange(whiteSpaceMustStart, patternStart, 0)) {
                return {
                  start: patternStart,
                  end: i
                };
              }
            }

            patternStart += counter[0] + counter[1];

            for (var j = 0; j < 4; j++) {
              counter[j] = counter[j + 2];
            }

            counter[4] = 0;
            counter[5] = 0;
            counterPos--;
          } else {
            counterPos++;
          }

          counter[counterPos] = 1;
          isWhite = !isWhite;
        }
      }

      return null;
    }
  }, {
    key: "_decodeExtended",
    value: function _decodeExtended(charArray) {
      var length = charArray.length;
      var result = [];

      for (var i = 0; i < length; i++) {
        var _char2 = charArray[i];

        if (_char2 >= 'a' && _char2 <= 'd') {
          if (i > length - 2) {
            return null;
          }

          var nextChar = charArray[++i];
          var nextCharCode = nextChar.charCodeAt(0);
          var decodedChar = void 0;

          switch (_char2) {
            case 'a':
              {
                if (nextChar >= 'A' && nextChar <= 'Z') {
                  decodedChar = String.fromCharCode(nextCharCode - 64);
                } else {
                  return null;
                }

                break;
              }

            case 'b':
              {
                if (nextChar >= 'A' && nextChar <= 'E') {
                  decodedChar = String.fromCharCode(nextCharCode - 38);
                } else if (nextChar >= 'F' && nextChar <= 'J') {
                  decodedChar = String.fromCharCode(nextCharCode - 11);
                } else if (nextChar >= 'K' && nextChar <= 'O') {
                  decodedChar = String.fromCharCode(nextCharCode + 16);
                } else if (nextChar >= 'P' && nextChar <= 'S') {
                  decodedChar = String.fromCharCode(nextCharCode + 43);
                } else if (nextChar >= 'T' && nextChar <= 'Z') {
                  decodedChar = String.fromCharCode(127);
                } else {
                  return null;
                }

                break;
              }

            case 'c':
              {
                if (nextChar >= 'A' && nextChar <= 'O') {
                  decodedChar = String.fromCharCode(nextCharCode - 32);
                } else if (nextChar === 'Z') {
                  decodedChar = ':';
                } else {
                  return null;
                }

                break;
              }

            case 'd':
              {
                if (nextChar >= 'A' && nextChar <= 'Z') {
                  decodedChar = String.fromCharCode(nextCharCode + 32);
                } else {
                  return null;
                }

                break;
              }
          }

          result.push(decodedChar);
        } else {
          result.push(_char2);
        }
      }

      return result;
    }
  }, {
    key: "_verifyChecksums",
    value: function _verifyChecksums(charArray) {
      return this._matchCheckChar(charArray, charArray.length - 2, 20) && this._matchCheckChar(charArray, charArray.length - 1, 15);
    }
  }, {
    key: "_matchCheckChar",
    value: function _matchCheckChar(charArray, index, maxWeight) {
      var arrayToCheck = charArray.slice(0, index);
      var length = arrayToCheck.length;
      var weightedSums = arrayToCheck.reduce(function (sum, _char3, i) {
        var weight = (i * -1 + (length - 1)) % maxWeight + 1;
        var value = ALPHABET.indexOf(_char3.charCodeAt(0));
        return sum + weight * value;
      }, 0);
      var checkChar = ALPHABET[weightedSums % 47];
      return checkChar === charArray[index].charCodeAt(0);
    }
  }]);

  return Code93Reader;
}(_barcode_reader__WEBPACK_IMPORTED_MODULE_6__["BarcodeReader"]);

/***/ }),

/***/ "./src/reader/ean_2_reader.js":
/*!************************************!*\
  !*** ./src/reader/ean_2_reader.js ***!
  \************************************/
/*! exports provided: EAN2Reader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EAN2Reader", function() { return EAN2Reader; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ean_reader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ean_reader */ "./src/reader/ean_reader.js");






var EAN2Reader =
/*#__PURE__*/
function (_EANReader) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(EAN2Reader, _EANReader);

  function EAN2Reader(config, supplements) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, EAN2Reader);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(EAN2Reader).call(this, config, supplements));
    _this._format = 'ean_2';
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(EAN2Reader, [{
    key: "decode",
    value: function decode(row, start) {
      var end = row.length;
      var result = [];
      var decodedCodes = [];
      var offset = start;
      var codeFrequency = 0;
      var code;
      this._row = row;

      for (var i = 0; i < 2 && offset < end; i++) {
        code = this._decodeCode(offset);

        if (!code) {
          return null;
        }

        decodedCodes.push(code);
        result.push(code.code % 10);

        if (code.code >= this.CODE_G_START) {
          codeFrequency |= 1 << 1 - i;
        }

        if (i !== 1) {
          offset = this._nextSet(this._row, code.end);
          offset = this._nextUnset(this._row, offset);
        }
      }

      if (result.length !== 2 || parseInt(result.join('')) % 4 !== codeFrequency) {
        return null;
      }

      return {
        code: result.join(''),
        decodedCodes: decodedCodes,
        end: code.end
      };
    }
  }]);

  return EAN2Reader;
}(_ean_reader__WEBPACK_IMPORTED_MODULE_5__["EANReader"]);

/***/ }),

/***/ "./src/reader/ean_5_reader.js":
/*!************************************!*\
  !*** ./src/reader/ean_5_reader.js ***!
  \************************************/
/*! exports provided: EAN5Reader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EAN5Reader", function() { return EAN5Reader; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ean_reader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ean_reader */ "./src/reader/ean_reader.js");






var EAN5Reader =
/*#__PURE__*/
function (_EANReader) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(EAN5Reader, _EANReader);

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(EAN5Reader, [{
    key: "CHECK_DIGIT_ENCODINGS",
    get: function get() {
      return [24, 20, 18, 17, 12, 6, 3, 10, 9, 5];
    }
  }]);

  function EAN5Reader(config, supplements) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, EAN5Reader);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default()(EAN5Reader).call(this, config, supplements));
    _this._format = 'ean_5';
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(EAN5Reader, [{
    key: "decode",
    value: function decode(row, start) {
      var end = row.length;
      var result = [];
      var decodedCodes = [];
      var codeFrequency = 0;
      var offset = start;
      var code;
      this._row = row;

      for (var i = 0; i < 5 && offset < end; i++) {
        code = this._decodeCode(offset);

        if (!code) {
          return null;
        }

        decodedCodes.push(code);
        result.push(code.code % 10);

        if (code.code >= this.CODE_G_START) {
          codeFrequency |= 1 << 4 - i;
        }

        if (i !== 4) {
          offset = this._nextSet(this._row, code.end);
          offset = this._nextUnset(this._row, offset);
        }
      }

      if (result.length !== 5) {
        return null;
      }

      if (this._extensionChecksum(result) !== this._determineCheckDigit(codeFrequency)) {
        return null;
      }

      return {
        code: result.join(''),
        decodedCodes: decodedCodes,
        end: code.end
      };
    }
  }, {
    key: "_determineCheckDigit",
    value: function _determineCheckDigit(codeFrequency) {
      for (var i = 0; i < 10; i++) {
        if (codeFrequency === this.CHECK_DIGIT_ENCODINGS[i]) {
          return i;
        }
      }

      return null;
    }
  }, {
    key: "_extensionChecksum",
    value: function _extensionChecksum(result) {
      var length = result.length;
      var sum = 0;

      for (var i = length - 2; i >= 0; i -= 2) {
        sum += result[i];
      }

      sum *= 3;

      for (var _i = length - 1; _i >= 0; _i -= 2) {
        sum += result[_i];
      }

      sum *= 3;
      return sum % 10;
    }
  }]);

  return EAN5Reader;
}(_ean_reader__WEBPACK_IMPORTED_MODULE_5__["EANReader"]);

/***/ }),

/***/ "./src/reader/ean_8_reader.js":
/*!************************************!*\
  !*** ./src/reader/ean_8_reader.js ***!
  \************************************/
/*! exports provided: EAN8Reader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EAN8Reader", function() { return EAN8Reader; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ean_reader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ean_reader */ "./src/reader/ean_reader.js");






var EAN8Reader =
/*#__PURE__*/
function (_EANReader) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(EAN8Reader, _EANReader);

  function EAN8Reader(config, supplements) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, EAN8Reader);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(EAN8Reader).call(this, config, supplements));
    _this._format = 'ean_8';
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(EAN8Reader, [{
    key: "_decodePayload",
    value: function _decodePayload(code, result, decodedCodes) {
      for (var i = 0; i < 4; i++) {
        code = this._decodeCode(code.end, this.CODE_G_START);

        if (!code) {
          return null;
        }

        result.push(code.code);
        decodedCodes.push(code);
      }

      code = this._findPattern(this.MIDDLE_PATTERN, code.end, true, false);

      if (code === null) {
        return null;
      }

      decodedCodes.push(code);

      for (var _i = 0; _i < 4; _i++) {
        code = this._decodeCode(code.end, this.CODE_G_START);

        if (!code) {
          return null;
        }

        decodedCodes.push(code);
        result.push(code.code);
      }

      return code;
    }
  }]);

  return EAN8Reader;
}(_ean_reader__WEBPACK_IMPORTED_MODULE_5__["EANReader"]);

/***/ }),

/***/ "./src/reader/ean_reader.js":
/*!**********************************!*\
  !*** ./src/reader/ean_reader.js ***!
  \**********************************/
/*! exports provided: EANReader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EANReader", function() { return EANReader; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_merge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/merge */ "./src/common/merge.js");
/* harmony import */ var _barcode_reader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./barcode_reader */ "./src/reader/barcode_reader.js");







function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var EXTENSION_START_PATTERN = [1, 1, 2];
var CODE_PATTERN = [[3, 2, 1, 1], [2, 2, 2, 1], [2, 1, 2, 2], [1, 4, 1, 1], [1, 1, 3, 2], [1, 2, 3, 1], [1, 1, 1, 4], [1, 3, 1, 2], [1, 2, 1, 3], [3, 1, 1, 2], [1, 1, 2, 3], [1, 2, 2, 2], [2, 2, 1, 2], [1, 1, 4, 1], [2, 3, 1, 1], [1, 3, 2, 1], [4, 1, 1, 1], [2, 1, 3, 1], [3, 1, 2, 1], [2, 1, 1, 3]];
var EANReader =
/*#__PURE__*/
function (_BarcodeReader) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(EANReader, _BarcodeReader);

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(EANReader, [{
    key: "CODE_L_START",
    get: function get() {
      return 0;
    }
  }, {
    key: "CODE_G_START",
    get: function get() {
      return 10;
    }
  }, {
    key: "START_PATTERN",
    get: function get() {
      return [1, 1, 1];
    }
  }, {
    key: "STOP_PATTERN",
    get: function get() {
      return [1, 1, 1];
    }
  }, {
    key: "MIDDLE_PATTERN",
    get: function get() {
      return [1, 1, 1, 1, 1];
    }
  }, {
    key: "CODE_FREQUENCY",
    get: function get() {
      return [0, 11, 13, 14, 19, 25, 28, 21, 22, 26];
    }
  }]);

  function EANReader(config, supplements) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, EANReader);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(EANReader).call(this, Object(_common_merge__WEBPACK_IMPORTED_MODULE_6__["merge"])({
      supplements: [] // Allowed extensions to be decoded (2 and/or 5)

    }, config), supplements));
    _this._format = 'ean_13';
    _this._singleCodeError = 0.70;
    _this._averageCodeError = 0.48;
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(EANReader, [{
    key: "_decodeCode",
    value: function _decodeCode(start, coderange) {
      var counter = [0, 0, 0, 0];
      var offset = start;
      var bestMatch = {
        error: Number.MAX_VALUE,
        code: -1,
        start: start,
        end: start
      };
      var epsilon = this.AVERAGE_CODE_ERROR;
      var isWhite = !this._row[offset];
      var counterPos = 0;

      if (!coderange) {
        coderange = CODE_PATTERN.length;
      }

      for (var i = offset; i < this._row.length; i++) {
        if (this._row[i] ^ isWhite) {
          counter[counterPos]++;
        } else {
          if (counterPos === counter.length - 1) {
            for (var code = 0; code < coderange; code++) {
              var error = this._matchPattern(counter, CODE_PATTERN[code]);

              if (error < bestMatch.error) {
                bestMatch.code = code;
                bestMatch.error = error;
              }
            }

            bestMatch.end = i;

            if (bestMatch.error > epsilon) {
              return null;
            }

            return bestMatch;
          } else {
            counterPos++;
          }

          counter[counterPos] = 1;
          isWhite = !isWhite;
        }
      }

      return null;
    }
  }, {
    key: "_findPattern",
    value: function _findPattern(pattern, offset, isWhite, tryHarder, epsilon) {
      var counter = [];
      var bestMatch = {
        error: Number.MAX_VALUE,
        code: -1,
        start: 0,
        end: 0
      };
      var counterPos = 0;
      var sum;

      if (!offset) {
        offset = this._nextSet(this._row);
      }

      if (isWhite === undefined) {
        isWhite = false;
      }

      if (tryHarder === undefined) {
        tryHarder = true;
      }

      if (epsilon === undefined) {
        epsilon = this.AVERAGE_CODE_ERROR;
      }

      for (var i = 0; i < pattern.length; i++) {
        counter[i] = 0;
      }

      for (var _i = offset; _i < this._row.length; _i++) {
        if (this._row[_i] ^ isWhite) {
          counter[counterPos]++;
        } else {
          if (counterPos === counter.length - 1) {
            sum = 0;

            for (var j = 0; j < counter.length; j++) {
              sum += counter[j];
            }

            var error = this._matchPattern(counter, pattern);

            if (error < epsilon) {
              bestMatch.error = error;
              bestMatch.start = _i - sum;
              bestMatch.end = _i;
              return bestMatch;
            }

            if (tryHarder) {
              for (var _j = 0; _j < counter.length - 2; _j++) {
                counter[_j] = counter[_j + 2];
              }

              counter[counter.length - 2] = 0;
              counter[counter.length - 1] = 0;
              counterPos--;
            } else {
              return null;
            }
          } else {
            counterPos++;
          }

          counter[counterPos] = 1;
          isWhite = !isWhite;
        }
      }

      return null;
    }
  }, {
    key: "_findStart",
    value: function _findStart() {
      var offset = this._nextSet(this._row);

      var startInfo;

      while (!startInfo) {
        startInfo = this._findPattern(this.START_PATTERN, offset);

        if (!startInfo) {
          return null;
        }

        var leadingWhitespaceStart = startInfo.start - (startInfo.end - startInfo.start);

        if (leadingWhitespaceStart >= 0) {
          if (this._matchRange(leadingWhitespaceStart, startInfo.start, 0)) {
            return startInfo;
          }
        }

        offset = startInfo.end;
        startInfo = null;
      }

      return null;
    }
  }, {
    key: "_verifyTrailingWhitespace",
    value: function _verifyTrailingWhitespace(endInfo) {
      var trailingWhitespaceEnd = endInfo.end + (endInfo.end - endInfo.start);

      if (trailingWhitespaceEnd < this._row.length) {
        if (this._matchRange(endInfo.end, trailingWhitespaceEnd, 0)) {
          return endInfo;
        }
      }

      return null;
    }
  }, {
    key: "_findEnd",
    value: function _findEnd(offset, isWhite) {
      var endInfo = this._findPattern(this.STOP_PATTERN, offset, isWhite, false);

      return endInfo !== null ? this._verifyTrailingWhitespace(endInfo) : null;
    }
  }, {
    key: "_calculateFirstDigit",
    value: function _calculateFirstDigit(codeFrequency) {
      for (var i = 0; i < this.CODE_FREQUENCY.length; i++) {
        if (codeFrequency === this.CODE_FREQUENCY[i]) {
          return i;
        }
      }

      return null;
    }
  }, {
    key: "_decodePayload",
    value: function _decodePayload(code, result, decodedCodes) {
      var codeFrequency = 0x0;

      for (var i = 0; i < 6; i++) {
        code = this._decodeCode(code.end);

        if (!code) {
          return null;
        }

        if (code.code >= this.CODE_G_START) {
          code.code -= this.CODE_G_START;
          codeFrequency |= 1 << 5 - i;
        } else {
          codeFrequency |= 0 << 5 - i;
        }

        result.push(code.code);
        decodedCodes.push(code);
      }

      var firstDigit = this._calculateFirstDigit(codeFrequency);

      if (firstDigit === null) {
        return null;
      }

      result.unshift(firstDigit);
      code = this._findPattern(this.MIDDLE_PATTERN, code.end, true, false);

      if (code === null) {
        return null;
      }

      decodedCodes.push(code);

      for (var _i2 = 0; _i2 < 6; _i2++) {
        code = this._decodeCode(code.end, this.CODE_G_START);

        if (!code) {
          return null;
        }

        decodedCodes.push(code);
        result.push(code.code);
      }

      return code;
    }
  }, {
    key: "_decode",
    value: function _decode() {
      var result = [];
      var decodedCodes = [];
      var resultInfo = {};

      var startInfo = this._findStart();

      if (!startInfo) {
        return null;
      }

      var code = {
        code: startInfo.code,
        start: startInfo.start,
        end: startInfo.end
      };
      decodedCodes.push(code);
      code = this._decodePayload(code, result, decodedCodes);

      if (!code) {
        return null;
      }

      code = this._findEnd(code.end, false);

      if (!code) {
        return null;
      }

      decodedCodes.push(code); // Checksum

      if (!this._checksum(result)) {
        return null;
      }

      if (this.supplements.length > 0) {
        var supplement = this._decodeExtensions(code.end);

        if (!supplement) {
          return null;
        }

        var lastCode = supplement.decodedCodes[supplement.decodedCodes.length - 1];
        var endInfo = {
          start: lastCode.start + ((lastCode.end - lastCode.start) / 2 | 0),
          end: lastCode.end
        };

        if (!this._verifyTrailingWhitespace(endInfo)) {
          return null;
        }

        resultInfo = {
          supplement: supplement,
          code: result.join('') + supplement.code
        };
      }

      return _objectSpread({
        code: result.join(''),
        start: startInfo.start,
        end: code.end,
        codeset: '',
        startInfo: startInfo,
        decodedCodes: decodedCodes
      }, resultInfo);
    }
  }, {
    key: "_decodeExtensions",
    value: function _decodeExtensions(offset) {
      var start = this._nextSet(this._row, offset);

      var startInfo = this._findPattern(EXTENSION_START_PATTERN, start, false, false);

      if (startInfo === null) {
        return null;
      }

      for (var i = 0; i < this.supplements.length; i++) {
        var result = this.supplements[i].decode(this._row, startInfo.end);

        if (result !== null) {
          return {
            code: result.code,
            start: start,
            startInfo: startInfo,
            end: result.end,
            codeset: '',
            decodedCodes: result.decodedCodes
          };
        }
      }

      return null;
    }
  }, {
    key: "_checksum",
    value: function _checksum(result) {
      var sum = 0;

      for (var i = result.length - 2; i >= 0; i -= 2) {
        sum += result[i];
      }

      sum *= 3;

      for (var _i3 = result.length - 1; _i3 >= 0; _i3 -= 2) {
        sum += result[_i3];
      }

      return sum % 10 === 0;
    }
  }]);

  return EANReader;
}(_barcode_reader__WEBPACK_IMPORTED_MODULE_7__["BarcodeReader"]);

/***/ }),

/***/ "./src/reader/i2of5_reader.js":
/*!************************************!*\
  !*** ./src/reader/i2of5_reader.js ***!
  \************************************/
/*! exports provided: I2of5Reader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I2of5Reader", function() { return I2of5Reader; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "../../node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_merge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/merge */ "./src/common/merge.js");
/* harmony import */ var _barcode_reader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./barcode_reader */ "./src/reader/barcode_reader.js");








var N = 1;
var W = 3;
var START_PATTERN = [N, N, N, N];
var STOP_PATTERN = [N, N, W];
var CODE_PATTERN = [[N, N, W, W, N], [W, N, N, N, W], [N, W, N, N, W], [W, W, N, N, N], [N, N, W, N, W], [W, N, W, N, N], [N, W, W, N, N], [N, N, N, W, W], [W, N, N, W, N], [N, W, N, W, N]];
var MAX_CORRECTION_FACTOR = 5;
var I2of5Reader =
/*#__PURE__*/
function (_BarcodeReader) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(I2of5Reader, _BarcodeReader);

  function I2of5Reader(config) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, I2of5Reader);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(I2of5Reader).call(this, Object(_common_merge__WEBPACK_IMPORTED_MODULE_6__["merge"])({
      normalizeBarSpaceWidth: false // Normalize the width difference between bars and spaces

    }, config)));
    _this._format = 'i2of5';
    _this._barSpaceRatio = [1, 1];

    if (_this.config.normalizeBarSpaceWidth) {
      _this._singleCodeError = 0.38;
      _this._averageCodeError = 0.09;
    } else {
      _this._singleCodeError = 0.78;
      _this._averageCodeError = 0.38;
    }

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(I2of5Reader, [{
    key: "_matchPattern",
    value: function _matchPattern(counter, code) {
      if (this.config.normalizeBarSpaceWidth) {
        var counterSum = [0, 0];
        var codeSum = [0, 0];
        var correction = [0, 0];
        var correctionRatio = MAX_CORRECTION_FACTOR;
        var correctionRatioInverse = 1 / correctionRatio;

        for (var i = 0; i < counter.length; i++) {
          counterSum[i % 2] += counter[i];
          codeSum[i % 2] += code[i];
        }

        correction[0] = codeSum[0] / counterSum[0];
        correction[1] = codeSum[1] / counterSum[1];
        correction[0] = Math.max(Math.min(correction[0], correctionRatio), correctionRatioInverse);
        correction[1] = Math.max(Math.min(correction[1], correctionRatio), correctionRatioInverse);
        this._barSpaceRatio = correction;

        for (var _i = 0; _i < counter.length; _i++) {
          counter[_i] *= this._barSpaceRatio[_i % 2];
        }
      }

      return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(I2of5Reader.prototype), "_matchPattern", this).call(this, counter, code);
    }
  }, {
    key: "_findPattern",
    value: function _findPattern(pattern, offset, isWhite, tryHarder) {
      var counter = [];
      var bestMatch = {
        error: Number.MAX_VALUE,
        code: -1,
        start: 0,
        end: 0
      };
      var epsilon = this.AVERAGE_CODE_ERROR;
      var counterPos = 0;
      isWhite = isWhite || false;
      tryHarder = tryHarder || false;

      if (!offset) {
        offset = this._nextSet(this._row);
      }

      for (var i = 0; i < pattern.length; i++) {
        counter[i] = 0;
      }

      for (var _i2 = offset; _i2 < this._row.length; _i2++) {
        if (this._row[_i2] ^ isWhite) {
          counter[counterPos]++;
        } else {
          if (counterPos === counter.length - 1) {
            var sum = 0;

            for (var j = 0; j < counter.length; j++) {
              sum += counter[j];
            }

            var error = this._matchPattern(counter, pattern);

            if (error < epsilon) {
              bestMatch.error = error;
              bestMatch.start = _i2 - sum;
              bestMatch.end = _i2;
              return bestMatch;
            }

            if (tryHarder) {
              for (var _j = 0; _j < counter.length - 2; _j++) {
                counter[_j] = counter[_j + 2];
              }

              counter[counter.length - 2] = 0;
              counter[counter.length - 1] = 0;
              counterPos--;
            } else {
              return null;
            }
          } else {
            counterPos++;
          }

          counter[counterPos] = 1;
          isWhite = !isWhite;
        }
      }

      return null;
    }
  }, {
    key: "_findStart",
    value: function _findStart() {
      var offset = this._nextSet(this._row);

      var startInfo;

      while (!startInfo) {
        startInfo = this._findPattern(START_PATTERN, offset, false, true);

        if (!startInfo) {
          return null;
        }

        var narrowBarWidth = startInfo.end - startInfo.start >> 2;
        var leadingWhitespaceStart = startInfo.start - narrowBarWidth * 10;

        if (leadingWhitespaceStart >= 0) {
          if (this._matchRange(leadingWhitespaceStart, startInfo.start, 0)) {
            return startInfo;
          }
        }

        offset = startInfo.end;
        startInfo = null;
      }

      return null;
    }
  }, {
    key: "_verifyTrailingWhitespace",
    value: function _verifyTrailingWhitespace(endInfo) {
      var trailingWhitespaceEnd = endInfo.end + (endInfo.end - endInfo.start) / 2;

      if (trailingWhitespaceEnd < this._row.length) {
        if (this._matchRange(endInfo.end, trailingWhitespaceEnd, 0)) {
          return endInfo;
        }
      }

      return null;
    }
  }, {
    key: "_findEnd",
    value: function _findEnd() {
      this._row.reverse();

      var endInfo = this._findPattern(STOP_PATTERN);

      this._row.reverse();

      if (endInfo === null) {
        return null;
      } // reverse numbers


      var tmp = endInfo.start;
      endInfo.start = this._row.length - endInfo.end;
      endInfo.end = this._row.length - tmp;
      return endInfo !== null ? this._verifyTrailingWhitespace(endInfo) : null;
    }
  }, {
    key: "_decodePair",
    value: function _decodePair(counterPair) {
      var codes = [];

      for (var i = 0; i < counterPair.length; i++) {
        var code = this._decodeCode(counterPair[i]);

        if (!code) {
          return null;
        }

        codes.push(code);
      }

      return codes;
    }
  }, {
    key: "_decodeCode",
    value: function _decodeCode(counter) {
      var bestMatch = {
        error: Number.MAX_VALUE,
        code: -1,
        start: 0,
        end: 0
      };

      for (var code = 0; code < CODE_PATTERN.length; code++) {
        var error = this._matchPattern(counter, CODE_PATTERN[code]);

        if (error < bestMatch.error) {
          bestMatch.code = code;
          bestMatch.error = error;
        }
      }

      return bestMatch.error < this.AVERAGE_CODE_ERROR ? bestMatch : null;
    }
  }, {
    key: "_decodePayload",
    value: function _decodePayload(counters, result, decodedCodes) {
      var counterLength = counters.length;
      var counterPair = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0]];
      var pos = 0;
      var codes;

      while (pos < counterLength) {
        for (var i = 0; i < 5; i++) {
          counterPair[0][i] = counters[pos] * this._barSpaceRatio[0];
          counterPair[1][i] = counters[pos + 1] * this._barSpaceRatio[1];
          pos += 2;
        }

        codes = this._decodePair(counterPair);

        if (!codes) {
          return null;
        }

        for (var _i3 = 0; _i3 < codes.length; _i3++) {
          result.push(codes[_i3].code + '');
          decodedCodes.push(codes[_i3]);
        }
      }

      return codes;
    }
  }, {
    key: "_decode",
    value: function _decode() {
      var startInfo = this._findStart();

      if (!startInfo) {
        return null;
      }

      var endInfo = this._findEnd();

      if (!endInfo) {
        return null;
      }

      var decodedCodes = [];
      decodedCodes.push(startInfo);

      var counters = this._fillCounters(startInfo.end, endInfo.start, false);

      if (counters.length % 10 !== 0) {
        return null;
      }

      var result = [];

      var code = this._decodePayload(counters, result, decodedCodes);

      if (!code || result.length % 2 !== 0 || result.length < 6) {
        return null;
      }

      decodedCodes.push(endInfo);
      return {
        code: result.join(''),
        start: startInfo.start,
        end: endInfo.end,
        startInfo: startInfo,
        decodedCodes: decodedCodes
      };
    }
  }]);

  return I2of5Reader;
}(_barcode_reader__WEBPACK_IMPORTED_MODULE_7__["BarcodeReader"]);

/***/ }),

/***/ "./src/reader/upc_e_reader.js":
/*!************************************!*\
  !*** ./src/reader/upc_e_reader.js ***!
  \************************************/
/*! exports provided: UPCEReader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPCEReader", function() { return UPCEReader; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "../../node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ean_reader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ean_reader */ "./src/reader/ean_reader.js");







var UPCEReader =
/*#__PURE__*/
function (_EANReader) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(UPCEReader, _EANReader);

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(UPCEReader, [{
    key: "CODE_FREQUENCY",
    get: function get() {
      return [[56, 52, 50, 49, 44, 38, 35, 42, 41, 37], [7, 11, 13, 14, 19, 25, 28, 21, 22, 26]];
    }
  }, {
    key: "STOP_PATTERN",
    get: function get() {
      return [1 / 6 * 7, 1 / 6 * 7, 1 / 6 * 7, 1 / 6 * 7, 1 / 6 * 7, 1 / 6 * 7];
    }
  }]);

  function UPCEReader(config, supplements) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, UPCEReader);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default()(UPCEReader).call(this, config, supplements));
    _this._format = 'upc_e';
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(UPCEReader, [{
    key: "_decodePayload",
    value: function _decodePayload(code, result, decodedCodes) {
      var codeFrequency = 0x0;

      for (var i = 0; i < 6; i++) {
        code = this._decodeCode(code.end);

        if (!code) {
          return null;
        }

        if (code.code >= this.CODE_G_START) {
          code.code = code.code - this.CODE_G_START;
          codeFrequency |= 1 << 5 - i;
        }

        result.push(code.code);
        decodedCodes.push(code);
      }

      if (!this._determineParity(codeFrequency, result)) {
        return null;
      }

      return code;
    }
  }, {
    key: "_determineParity",
    value: function _determineParity(codeFrequency, result) {
      for (var nrSystem = 0; nrSystem < this.CODE_FREQUENCY.length; nrSystem++) {
        for (var i = 0; i < this.CODE_FREQUENCY[nrSystem].length; i++) {
          if (codeFrequency === this.CODE_FREQUENCY[nrSystem][i]) {
            result.unshift(nrSystem);
            result.push(i);
            return true;
          }
        }
      }

      return false;
    }
  }, {
    key: "_convertToUPCA",
    value: function _convertToUPCA(result) {
      var lastDigit = result[result.length - 2];
      var upca = [result[0]];

      if (lastDigit <= 2) {
        upca = upca.concat(result.slice(1, 3)).concat([lastDigit, 0, 0, 0, 0]).concat(result.slice(3, 6));
      } else if (lastDigit === 3) {
        upca = upca.concat(result.slice(1, 4)).concat([0, 0, 0, 0, 0]).concat(result.slice(4, 6));
      } else if (lastDigit === 4) {
        upca = upca.concat(result.slice(1, 5)).concat([0, 0, 0, 0, 0, result[5]]);
      } else {
        upca = upca.concat(result.slice(1, 6)).concat([0, 0, 0, 0, lastDigit]);
      }

      upca.push(result[result.length - 1]);
      return upca;
    }
  }, {
    key: "_checksum",
    value: function _checksum(result) {
      return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default()(UPCEReader.prototype), "_checksum", this).call(this, this._convertToUPCA(result));
    }
  }, {
    key: "_findEnd",
    value: function _findEnd(offset, isWhite) {
      isWhite = true;
      return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default()(UPCEReader.prototype), "_findEnd", this).call(this, offset, isWhite);
    }
  }, {
    key: "_verifyTrailingWhitespace",
    value: function _verifyTrailingWhitespace(endInfo) {
      var trailingWhitespaceEnd = endInfo.end + (endInfo.end - endInfo.start) / 2;

      if (trailingWhitespaceEnd < this._row.length) {
        if (this._matchRange(endInfo.end, trailingWhitespaceEnd, 0)) {
          return endInfo;
        }
      }

      return null;
    }
  }]);

  return UPCEReader;
}(_ean_reader__WEBPACK_IMPORTED_MODULE_6__["EANReader"]);

/***/ }),

/***/ "./src/reader/upc_reader.js":
/*!**********************************!*\
  !*** ./src/reader/upc_reader.js ***!
  \**********************************/
/*! exports provided: UPCReader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPCReader", function() { return UPCReader; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "../../node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ean_reader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ean_reader */ "./src/reader/ean_reader.js");







var UPCReader =
/*#__PURE__*/
function (_EANReader) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(UPCReader, _EANReader);

  function UPCReader(config, supplements) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, UPCReader);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(UPCReader).call(this, config, supplements));
    _this._format = 'upc_a';
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(UPCReader, [{
    key: "_decode",
    value: function _decode() {
      var result = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(UPCReader.prototype), "_decode", this).call(this);

      if (result && result.code && result.code.length === 13 && result.code.charAt(0) === '0') {
        result.code = result.code.substring(1);
        return result;
      }

      return null;
    }
  }]);

  return UPCReader;
}(_ean_reader__WEBPACK_IMPORTED_MODULE_6__["EANReader"]);

/***/ })

/******/ })
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9RdWFnZ2Evd2VicGFjay9teU1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vUXVhZ2dhL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1F1YWdnYS8vVXNlcnMvYWRvbXJhdGNoZXYvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy9Vc2Vycy9hZG9tcmF0Y2hldi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy9Vc2Vycy9hZG9tcmF0Y2hldi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yLmpzIiwid2VicGFjazovL1F1YWdnYS8vVXNlcnMvYWRvbXJhdGNoZXYvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy9Vc2Vycy9hZG9tcmF0Y2hldi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly9RdWFnZ2EvL1VzZXJzL2Fkb21yYXRjaGV2L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL1F1YWdnYS8vVXNlcnMvYWRvbXJhdGNoZXYvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0LmpzIiwid2VicGFjazovL1F1YWdnYS8vVXNlcnMvYWRvbXJhdGNoZXYvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy9Vc2Vycy9hZG9tcmF0Y2hldi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly9RdWFnZ2EvL1VzZXJzL2Fkb21yYXRjaGV2L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9RdWFnZ2EvL1VzZXJzL2Fkb21yYXRjaGV2L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL1F1YWdnYS8vVXNlcnMvYWRvbXJhdGNoZXYvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly9RdWFnZ2EvL1VzZXJzL2Fkb21yYXRjaGV2L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL1F1YWdnYS8vVXNlcnMvYWRvbXJhdGNoZXYvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc3VwZXJQcm9wQmFzZS5qcyIsIndlYnBhY2s6Ly9RdWFnZ2EvL1VzZXJzL2Fkb21yYXRjaGV2L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovL1F1YWdnYS8vVXNlcnMvYWRvbXJhdGNoZXYvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL1F1YWdnYS8vVXNlcnMvYWRvbXJhdGNoZXYvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwid2VicGFjazovL1F1YWdnYS8vVXNlcnMvYWRvbXJhdGNoZXYvbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS1tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy9Vc2Vycy9hZG9tcmF0Y2hldi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovL1F1YWdnYS8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL2FuYWx5dGljcy9yZXN1bHRfY29sbGVjdG9yLmpzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9jb21tb24vY2x1c3Rlci5qcyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvY29tbW9uL2N2X3V0aWxzLmpzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9jb21tb24vZXZlbnRzLmpzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9jb21tb24vaW1hZ2VfZGVidWcuanMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL2NvbW1vbi9pbWFnZV93cmFwcGVyLmpzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9jb21tb24vbWVkaWEtZGV2aWNlcy5qcyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvY29tbW9uL21lcmdlLmpzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9jb21tb24vdHlwZWRlZnMuanMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL2NvbmZpZy9jb25maWcuZGV2LmpzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9kZWNvZGVyL2JhcmNvZGVfZGVjb2Rlci5qcyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvZGVjb2Rlci9icmVzZW5oYW0uanMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL2lucHV0L2NhbWVyYV9hY2Nlc3MuanMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL2lucHV0L2V4aWZfaGVscGVyLmpzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9pbnB1dC9mcmFtZV9ncmFiYmVyLmpzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9pbnB1dC9pbWFnZV9sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL2lucHV0L2lucHV0X3N0cmVhbS5qcyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvbG9jYXRvci9iYXJjb2RlX2xvY2F0b3IuanMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL2xvY2F0b3IvcmFzdGVyaXplci5qcyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvbG9jYXRvci9za2VsZXRvbml6ZXIuanMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL2xvY2F0b3IvdHJhY2VyLmpzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9xdWFnZ2EuanMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL3JlYWRlci8yb2Y1X3JlYWRlci5qcyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvcmVhZGVyL2JhcmNvZGVfcmVhZGVyLmpzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9yZWFkZXIvY29kYWJhcl9yZWFkZXIuanMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL3JlYWRlci9jb2RlXzEyOF9yZWFkZXIuanMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL3JlYWRlci9jb2RlXzM5X3JlYWRlci5qcyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvcmVhZGVyL2NvZGVfMzlfdmluX3JlYWRlci5qcyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvcmVhZGVyL2NvZGVfOTNfcmVhZGVyLmpzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9yZWFkZXIvZWFuXzJfcmVhZGVyLmpzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9yZWFkZXIvZWFuXzVfcmVhZGVyLmpzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9yZWFkZXIvZWFuXzhfcmVhZGVyLmpzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9yZWFkZXIvZWFuX3JlYWRlci5qcyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvcmVhZGVyL2kyb2Y1X3JlYWRlci5qcyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvcmVhZGVyL3VwY19lX3JlYWRlci5qcyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvcmVhZGVyL3VwY19yZWFkZXIuanMiXSwibmFtZXMiOlsiUmVzdWx0Q29sbGVjdG9yIiwiY29uZmlnIiwiX2NvbmZpZyIsIl9jYW52YXMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJfY29udGV4dCIsImdldENvbnRleHQiLCJfcmVzdWx0cyIsIl9jYXBhY2l0eSIsImNhcGFjaXR5IiwiX2NhcHR1cmUiLCJjYXB0dXJlIiwiY29kZVJlc3VsdCIsImxpc3QiLCJzb21lIiwiaXRlbSIsIk9iamVjdCIsImtleXMiLCJldmVyeSIsImtleSIsImZpbHRlciIsIl9jb250YWlucyIsImJsYWNrbGlzdCIsIl9wYXNzZXNGaWx0ZXIiLCJkYXRhIiwiaW1hZ2VXaWR0aCIsImltYWdlSGVpZ2h0IiwiX21hdGNoZXNDb25zdHJhaW50cyIsInJlc3VsdCIsIndpZHRoIiwiaGVpZ2h0IiwiSW1hZ2VEZWJ1ZyIsImRyYXdJbWFnZSIsImZyYW1lIiwidG9EYXRhVVJMIiwicHVzaCIsIkNsdXN0ZXIiLCJ0aHJlc2hvbGQiLCJwb2ludCIsIl90aHJlc2hvbGQiLCJfcG9pbnRzIiwiX2NlbnRlciIsInJhZCIsIngiLCJ5IiwiX3BvaW50TWFwIiwiYWRkIiwiaWQiLCJyZWR1Y2UiLCJzdW0iLCJwIiwibGVuZ3RoIiwiTWF0aCIsImNvcyIsInNpbiIsInNpbWlsYXJpdHkiLCJhYnMiLCJfY29tcHV0ZUhpc3RvZ3JhbSIsImltYWdlV3JhcHBlciIsImJpdHNQZXJQaXhlbCIsImltYWdlRGF0YSIsImJpdFNoaWZ0IiwiYnVja2V0Q291bnQiLCJoaXN0b2dyYW0iLCJJbnQzMkFycmF5IiwiaSIsIl9kZXRlcm1pbmVPdHN1VGhyZXNob2xkIiwiaGlzdCIsInZldCIsIm1heCIsInB4IiwiaW5pdCIsImVuZCIsIm14IiwiayIsInAxIiwicDIiLCJwMTIiLCJtMSIsIm0yIiwibTEyIiwibWF4SW5kZXgiLCJpbmRleCIsImFycmF5Iiwib3RzdVRocmVzaG9sZCIsInRhcmdldFdyYXBwZXIiLCJ0YXJnZXREYXRhIiwiZm9yRWFjaCIsInZhbHVlIiwiaGFsZlNhbXBsZSIsImluSW1nV3JhcHBlciIsIm91dEltZ1dyYXBwZXIiLCJpbkltZyIsImluV2lkdGgiLCJzaXplIiwib3V0SW1nIiwiZW5kSW5kZXgiLCJvdXRXaWR0aCIsInRvcFJvd0luZGV4IiwiYm90dG9tUm93SW5kZXgiLCJvdXRJbWdJbmRleCIsImhzdjJyZ2IiLCJoc3YiLCJyZ2IiLCJoIiwicyIsInYiLCJjIiwibSIsInIiLCJnIiwiYiIsIl9jb21wdXRlRGl2aXNvcnMiLCJuIiwibGFyZ2VEaXZpc29ycyIsImRpdmlzb3JzIiwiZGl2aXNvciIsInVuc2hpZnQiLCJjb25jYXQiLCJfY29tcHV0ZUNvbW1vbkRpdmlzb3JzIiwibWluIiwibGFyZ2VEaXZpc29yIiwiY2FsY3VsYXRlUGF0Y2hTaXplIiwicGF0Y2hTaXplIiwiaW1nU2l6ZSIsIndpZGVTaWRlIiwibnJPZlBhdGNoZXNMaXN0IiwibnJPZlBhdGNoZXNNYXAiLCJzbWFsbCIsIm1lZGl1bSIsImxhcmdlIiwibnJPZlBhdGNoZXNJbmRleCIsIm5yT2ZQYXRjaGVzIiwiZGVzaXJlZFBhdGNoU2l6ZSIsImZpbmRQYXRjaFNpemVGb3JEaXZpc29ycyIsImZvdW5kIiwib3B0aW1hbFBhdGNoU2l6ZSIsIl9wYXJzZUNTU0RpbWVuc2lvblZhbHVlcyIsImRpbWVuc2lvbiIsInBhcnNlRmxvYXQiLCJ1bml0IiwiaW5kZXhPZiIsIl9kaW1lbnNpb25zQ29udmVydGVycyIsInRvcCIsImNvbnRleHQiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJjb21wdXRlSW1hZ2VBcmVhIiwiaW5wdXRXaWR0aCIsImlucHV0SGVpZ2h0IiwiYXJlYSIsInBhcnNlZEFyZWEiLCJwYXJzZWQiLCJjYWxjdWxhdGVkIiwic3giLCJzeSIsInN3Iiwic2giLCJldmVudHMiLCJnZXRFdmVudCIsImV2ZW50TmFtZSIsInN1YnNjcmliZXJzIiwiY2xlYXJFdmVudHMiLCJwdWJsaXNoU3Vic2NyaXB0aW9uIiwic3Vic2NyaXB0aW9uIiwiYXN5bmMiLCJzZXRUaW1lb3V0IiwiY2FsbGJhY2siLCJzdWJzY3JpYmUiLCJldmVudCIsInB1Ymxpc2giLCJvbmNlIiwic3Vic2NyaWJlciIsInVuc3Vic2NyaWJlIiwiX2NhbGxiYWNrIiwicG9zIiwic3R5bGUiLCJzdHJva2VTdHlsZSIsImNvbG9yIiwiZmlsbFN0eWxlIiwibGluZVdpZHRoIiwiYmVnaW5QYXRoIiwic3Ryb2tlUmVjdCIsInBhdGgiLCJkZWYiLCJtb3ZlVG8iLCJqIiwibGluZVRvIiwiY2xvc2VQYXRoIiwic3Ryb2tlIiwiY2FudmFzRGF0YSIsImdldEltYWdlRGF0YSIsImltYWdlRGF0YVBvcyIsImNhbnZhc0RhdGFQb3MiLCJwdXRJbWFnZURhdGEiLCJJbWFnZVdyYXBwZXIiLCJBcnJheVR5cGUiLCJpbml0aWFsaXplIiwiVWludDhBcnJheSIsImZpbGwiLCJpbWdSZWYiLCJib3JkZXIiLCJmcm9tWCIsImZyb21ZIiwic2l6ZVkiLCJzaXplWCIsImxhYmVsQ291bnQiLCJsYWJlbFN1bSIsIm0wMCIsIm0wMSIsIm0xMCIsIm0xMSIsIm0wMiIsIm0yMCIsInRoZXRhIiwieXNxIiwidmFsIiwibGFiZWwiLCJQSSIsIlBJXzQiLCJpc05hTiIsInhfIiwieV8iLCJtdTExIiwibXUwMiIsIm11MjAiLCJ0bXAiLCJhdGFuIiwiY2FudmFzIiwic2NhbGUiLCJjdXJyZW50IiwicGl4ZWwiLCJnZXQiLCJ3aGl0ZVJnYiIsImJsYWNrUmdiIiwiZW51bWVyYXRlRGV2aWNlcyIsIm5hdmlnYXRvciIsIm1lZGlhRGV2aWNlcyIsIlByb21pc2UiLCJyZWplY3QiLCJFcnJvciIsImdldFVzZXJNZWRpYSIsImNvbnN0cmFpbnRzIiwibWVyZ2UiLCJpc09iamVjdCIsIm9iaiIsIm9iamVjdHMiLCJwcmV2IiwicFZhbCIsIm9WYWwiLCJBcnJheSIsImlzQXJyYXkiLCJpbXVsIiwib3BBIiwib3BCIiwiaW5wdXRTdHJlYW0iLCJuYW1lIiwidHlwZSIsImZhY2luZ01vZGUiLCJzaW5nbGVDaGFubmVsIiwibG9jYXRlIiwibnVtT2ZXb3JrZXJzIiwiZGVjb2RlciIsInJlYWRlcnMiLCJkZWJ1ZyIsImRyYXdCb3VuZGluZ0JveCIsInNob3dGcmVxdWVuY3kiLCJkcmF3U2NhbmxpbmUiLCJzaG93UGF0dGVybiIsImxvY2F0b3IiLCJzaG93Q2FudmFzIiwic2hvd1BhdGNoZXMiLCJzaG93Rm91bmRQYXRjaGVzIiwic2hvd1NrZWxldG9uIiwic2hvd0xhYmVscyIsInNob3dQYXRjaExhYmVscyIsInNob3dSZW1haW5pbmdQYXRjaExhYmVscyIsImJveEZyb21QYXRjaGVzIiwic2hvd1RyYW5zZm9ybWVkIiwic2hvd1RyYW5zZm9ybWVkQm94Iiwic2hvd0JCIiwiUkVBREVSUyIsImNvZGVfMTI4X3JlYWRlciIsIkNvZGUxMjhSZWFkZXIiLCJlYW5fcmVhZGVyIiwiRUFOUmVhZGVyIiwiZWFuXzVfcmVhZGVyIiwiRUFONVJlYWRlciIsImVhbl8yX3JlYWRlciIsIkVBTjJSZWFkZXIiLCJlYW5fOF9yZWFkZXIiLCJFQU44UmVhZGVyIiwiY29kZV8zOV9yZWFkZXIiLCJDb2RlMzlSZWFkZXIiLCJjb2RlXzM5X3Zpbl9yZWFkZXIiLCJDb2RlMzlWSU5SZWFkZXIiLCJjb2RhYmFyX3JlYWRlciIsIkNvZGFiYXJSZWFkZXIiLCJ1cGNfcmVhZGVyIiwiVVBDUmVhZGVyIiwidXBjX2VfcmVhZGVyIiwiVVBDRVJlYWRlciIsImkyb2Y1X3JlYWRlciIsIkkyb2Y1UmVhZGVyIiwiVHdvT2ZGaXZlUmVhZGVyIiwiY29kZV85M19yZWFkZXIiLCJDb2RlOTNSZWFkZXIiLCJCYXJjb2RlRGVjb2RlciIsImlucHV0SW1hZ2VXcmFwcGVyIiwiX2lucHV0SW1hZ2VXcmFwcGVyIiwiY3R4IiwiZnJlcXVlbmN5IiwicGF0dGVybiIsIm92ZXJsYXkiLCJkb20iLCJfYmFyY29kZVJlYWRlcnMiLCJfaW5pdENhbnZhcyIsIl9pbml0UmVhZGVycyIsIl9pbml0Q29uZmlnIiwicHJvY2VzcyIsImRlYnVnRGl2IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTmFtZSIsImFwcGVuZENoaWxkIiwicmVhZGVyQ29uZmlnIiwicmVhZGVyIiwiY29uZmlndXJhdGlvbiIsInN1cHBsZW1lbnRzIiwiZm9ybWF0IiwiY29uc29sZSIsImxvZyIsIm1hcCIsInN1cHBsZW1lbnQiLCJGT1JNQVQiLCJKU09OIiwic3RyaW5naWZ5IiwiZGlzcGxheSIsImxpbmUiLCJhbmdsZSIsImV4dGVuZExpbmUiLCJhbW91bnQiLCJleHRlbnNpb24iLCJsaW5lTGVuZ3RoIiwic3FydCIsImV4dGVuc2lvbkxlbmd0aCIsImluSW1hZ2VXaXRoQm9yZGVyIiwiYm94IiwiYmFyY29kZUxpbmUiLCJCcmVzZW5oYW0iLCJnZXRCYXJjb2RlTGluZSIsImRyYXdQYXRoIiwicHJpbnRGcmVxdWVuY3kiLCJ0b0JpbmFyeUxpbmUiLCJwcmludFBhdHRlcm4iLCJkZWNvZGVQYXR0ZXJuIiwibGluZUFuZ2xlIiwic2lkZUxlbmd0aCIsInNsaWNlcyIsInhkaXIiLCJ5ZGlyIiwiZGlyIiwiX3RyeURlY29kZSIsIl9nZXRMaW5lIiwiYXRhbjIiLCJfZ2V0RXh0ZW5kZWRMaW5lIiwiX3RyeURlY29kZUJydXRlRm9yY2UiLCJib3hlcyIsImJhcmNvZGVzIiwibXVsdGlwbGUiLCJkZWNvZGVGcm9tQm91bmRpbmdCb3giLCJTbG9wZSIsIkRJUiIsIlVQIiwiRE9XTiIsIngwIiwieTAiLCJ4MSIsInkxIiwic3RlZXAiLCJyZWFkIiwiYSIsImRlbHRheCIsImRlbHRheSIsImVycm9yIiwieXN0ZXAiLCJjZW50ZXIiLCJleHRyZW1hIiwiclRocmVzaG9sZCIsImN1cnJlbnREaXIiLCJzbG9wZSIsInNsb3BlMiIsImZpbGxDb2xvciIsImZpbGxSZWN0IiwiX3N0cmVhbSIsIndhaXRGb3JWaWRlbyIsInZpZGVvV2lkdGgiLCJ2aWRlb0hlaWdodCIsInJlc29sdmUiLCJhdHRlbXB0cyIsImNoZWNrVmlkZW8iLCJ3aW5kb3ciLCJpbml0Q2FtZXJhIiwidmlkZW8iLCJ0aGVuIiwic3RyZWFtIiwic2V0QXR0cmlidXRlIiwic3JjT2JqZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInBsYXkiLCJiaW5kIiwiZGVwcmVjYXRlZENvbnN0cmFpbnRzIiwidmlkZW9Db25zdHJhaW50cyIsImFzcGVjdFJhdGlvIiwiZGV2aWNlSWQiLCJtaW5Bc3BlY3RSYXRpbyIsImZhY2luZyIsInBpY2tDb25zdHJhaW50cyIsIm5vcm1hbGl6ZWRDb25zdHJhaW50cyIsImF1ZGlvIiwiZW51bWVyYXRlVmlkZW9EZXZpY2VzIiwiZGV2aWNlcyIsImtpbmQiLCJnZXRBY3RpdmVUcmFjayIsInRyYWNrcyIsImdldFZpZGVvVHJhY2tzIiwicmVxdWVzdCIsInJlbGVhc2UiLCJzdG9wIiwiZ2V0QWN0aXZlU3RyZWFtTGFiZWwiLCJ0cmFjayIsIkV4aWZUYWdzIiwiQXZhaWxhYmxlVGFncyIsImZpbmRUYWdzSW5PYmplY3RVUkwiLCJzcmMiLCJ0YWdzIiwidGVzdCIsIm9iamVjdFVSTFRvQmxvYiIsImJ1ZmZlciIsImZpbmRUYWdzSW5CdWZmZXIiLCJmaWxlIiwic2VsZWN0ZWRUYWdzIiwiZGF0YVZpZXciLCJEYXRhVmlldyIsImJ5dGVMZW5ndGgiLCJleGlmVGFncyIsInNlbGVjdGVkVGFnIiwiZXhpZlRhZyIsImZpbmQiLCJ0YWciLCJvZmZzZXQiLCJnZXRVaW50OCIsIm1hcmtlciIsInJlYWRFWElGRGF0YSIsImdldFVpbnQxNiIsInVybCIsImZldGNoIiwicmVzcG9uc2UiLCJvayIsImFycmF5QnVmZmVyIiwic3RhdHVzIiwic3RhcnQiLCJzcGxpdCIsImNoYXIiLCJjaGFyQ29kZUF0IiwidGlmZk9mZnNldCIsImJpZ0VuZCIsImZpcnN0SUZET2Zmc2V0IiwiZ2V0VWludDMyIiwicmVhZFRhZ3MiLCJkaXJTdGFydCIsInN0cmluZ3MiLCJlbnRyaWVzIiwiZW50cnlPZmZzZXQiLCJyZWFkVGFnVmFsdWUiLCJudW1WYWx1ZXMiLCJ1bmRlZmluZWQiLCJRVUFURVJfQ0lSQ0xFIiwiRnJhbWVHcmFiYmVyIiwiX2lucHV0U3RyZWFtIiwiX3N0cmVhbUNvbmZpZyIsImdldENvbmZpZyIsIl9jYW52YXNXaWR0aCIsImdldENhbnZhc1dpZHRoIiwiX2NhbnZhc0hlaWdodCIsImdldENhbnZhc0hlaWdodCIsIl93aWR0aCIsImdldFdpZHRoIiwiX2hlaWdodCIsImdldEhlaWdodCIsInRvcFJpZ2h0IiwiZ2V0VG9wUmlnaHQiLCJfc3giLCJfc3kiLCJfZGF0YSIsInZpZGVvU2l6ZSIsImdldFJlYWxXaWR0aCIsImdldFJlYWxIZWlnaHQiLCJjYW52YXNTaXplIiwiZG9IYWxmU2FtcGxlIiwiZ2V0RnJhbWUiLCJkcmF3YWJsZSIsImRyYXdBbmdsZSIsIl9hZGp1c3RDYW52YXNTaXplIiwiaW1hZ2UiLCJvcmllbnRhdGlvbiIsImhhbGZXaWR0aCIsImhhbGZIZWlnaHQiLCJ0cmFuc2xhdGUiLCJyb3RhdGUiLCJfZ3JheUFuZEhhbGZTYW1wbGVGcm9tQ2FudmFzRGF0YSIsIl9jb21wdXRlR3JheSIsIm91dEltYWdlSW5kZXgiLCJ0b3A0IiwiYm90dG9tNCIsImltYWdlRGF0YUxlbmd0aCIsIkltYWdlTG9hZGVyIiwiZGlyZWN0b3J5Iiwic2VxdWVuY2UiLCJsb2FkZWQiLCJsb2FkZWRJbWFnZSIsIm5vdExvYWRlZEltYWdlcyIsImh0bWxJbWFnZXNBcnJheSIsIm5vdExvYWRlZCIsInNwbGljZSIsImh0bWxJbWFnZXNTcmNBcnJheSIsImltYWdlTmFtZSIsInN1YnN0ciIsImxhc3RJbmRleE9mIiwiZmlyc3RJbWFnZSIsIm51bSIsInNsaWNlIiwiYWRkSW1hZ2UiLCJJbWFnZSIsIm9ubG9hZCIsIklucHV0U3RyZWFtIiwidGhhdCIsIl9ldmVudE5hbWVzIiwiX2V2ZW50SGFuZGxlcnMiLCJfY2FsY3VsYXRlZFdpZHRoIiwiX2NhbGN1bGF0ZWRIZWlnaHQiLCJfdG9wUmlnaHQiLCJpbml0U2l6ZSIsInNldFdpZHRoIiwic2V0SGVpZ2h0Iiwic2V0SW5wdXRTdHJlYW0iLCJlbmRlZCIsInBhdXNlIiwic2V0Q3VycmVudFRpbWUiLCJ0aW1lIiwiY3VycmVudFRpbWUiLCJmIiwiYm9vbCIsImNsZWFyRXZlbnRIYW5kbGVycyIsImhhbmRsZXJzIiwiaGFuZGxlciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ0cmlnZ2VyIiwiYXJncyIsImFwcGx5Iiwic2V0VG9wUmlnaHQiLCJzZXRDYW52YXNTaXplIiwiY3JlYXRlVmlkZW9TdHJlYW0iLCJmcmFtZUluZGV4IiwicGF1c2VkIiwiX2ltYWdlcyIsImJhc2VVcmwiLCJsb2FkSW1hZ2VzIiwibG9hZCIsImltYWdlcyIsInB1Ymxpc2hFdmVudCIsIm5ld1dpZHRoIiwibmV3SGVpZ2h0IiwidyIsIl9jdXJyZW50SW1hZ2VXcmFwcGVyIiwiX3NrZWxJbWFnZVdyYXBwZXIiLCJfc3ViSW1hZ2VXcmFwcGVyIiwiX2xhYmVsSW1hZ2VXcmFwcGVyIiwiX3BhdGNoR3JpZCIsIl9wYXRjaExhYmVsR3JpZCIsIl9pbWFnZVRvUGF0Y2hHcmlkIiwiX2JpbmFyeUltYWdlV3JhcHBlciIsIl9wYXRjaFNpemUiLCJfY2FudmFzQ29udGFpbmVyIiwiYmluYXJ5IiwiX251bVBhdGNoZXMiLCJfc2tlbGV0b25pemVyIiwiaW5pdEJ1ZmZlcnMiLCJza2VsZXRvbkltYWdlRGF0YSIsIkFycmF5QnVmZmVyIiwic2tlbGV0b25pemVyIiwic2VsZiIsImdsb2JhbCIsImluaXRDYW52YXMiLCJ1c2VXb3JrZXIiLCJwYXRjaGVzIiwiYXZlcmFnZVJhZCIsInBhdGNoIiwiZHJhd1JlY3QiLCJtYXRyaXgiLCJGbG9hdDMyQXJyYXkiLCJ0cmFuc2Zvcm1XaXRoTWF0cml4IiwibWluWCIsIm1pblkiLCJtYXhYIiwibWF4WSIsImludmVyc2VNYXRyaXgiLCJpbnZlcnQiLCJ2ZXJ0ZXgiLCJhMCIsImExIiwiYTIiLCJhMyIsImRldGVybWluYW50IiwiYmluYXJpemVJbWFnZSIsInplcm9Cb3JkZXIiLCJzaG93IiwiZmluZFBhdGNoZXMiLCJwYXRjaGVzRm91bmQiLCJza2VsZXRvbml6ZSIsInJhc3Rlcml6ZXIiLCJSYXN0ZXJpemVyIiwicmFzdGVyUmVzdWx0IiwicmFzdGVyaXplIiwiY291bnQiLCJtb21lbnRzIiwiZGVzY3JpYmVQYXRjaCIsImZpbmRCaWdnZXN0Q29ubmVjdGVkQXJlYXMiLCJtYXhMYWJlbCIsImxhYmVsSGlzdCIsInRvcExhYmVscyIsInNvcnQiLCJmaW5kQm94ZXMiLCJqb2luIiwiY2x1c3Rlcml6ZSIsInBvaW50cyIsInByb3BlcnR5IiwiY2x1c3RlcnMiLCJtYXRjaGluZ0NsdXN0ZXIiLCJjbHVzdGVyIiwiZml0cyIsInNpbWlsYXJNb21lbnRzIiwidG9wQ2x1c3RlciIsInN1YkltYWdlQXNDb3B5IiwibWluQ29tcG9uZW50V2VpZ2h0IiwiY2VpbCIsImVsaWdpYmxlTW9tZW50cyIsIm1vbWVudCIsIm1hdGNoaW5nTW9tZW50cyIsInJhc3Rlcml6ZUFuZ3VsYXJTaW1pbGFyaXR5Iiwibm90WWV0UHJvY2Vzc2VkIiwidHJhY2UiLCJjdXJyZW50SW5kZXgiLCJjdXJyZW50UGF0Y2giLCJTZWFyY2hEaXJlY3Rpb25zIiwiZGlyZWN0aW9uIiwiTnVtYmVyIiwiTUFYX1ZBTFVFIiwiY2hlY2tJbWFnZUNvbnN0cmFpbnRzIiwic2hpZnQiLCJPVVRTSURFX0VER0UiLCJJTlNJREVfRURHRSIsIkNPTlRPVVJfRElSIiwiQ1dfRElSIiwiQ0NXX0RJUiIsIlVOS05PV05fRElSIiwibGFiZWxXcmFwcGVyIiwibGFiZWxEYXRhIiwidHJhY2VyIiwiVHJhY2VyIiwiZGVwdGhMYWJlbCIsImNvbG9yTWFwIiwiY2MiLCJzYyIsImNvbm5lY3RlZENvdW50IiwiY3kiLCJsYWJlbEluZGV4IiwiYmMiLCJjeCIsImxjIiwiY29udG91clRyYWNpbmciLCJmaXJzdFZlcnRleCIsIm5leHRQZWVyIiwiaW5zaWRlQ29udG91cnMiLCJwcmV2aW91c1BlZXIiLCJmaXJzdENvbnRvdXIiLCJwcSIsImlxIiwicSIsIm5leHQiLCJTa2VsZXRvbml6ZXIiLCJzdGRsaWIiLCJmb3JlaWduIiwiZXJvZGUiLCJpbkltYWdlUHRyIiwib3V0SW1hZ2VQdHIiLCJ1IiwieVN0YXJ0MSIsInlTdGFydDIiLCJ4U3RhcnQxIiwieFN0YXJ0MiIsInN1YnRyYWN0IiwiYUltYWdlUHRyIiwiYkltYWdlUHRyIiwiYml0d2lzZU9yIiwiY291bnROb25aZXJvIiwiaW1hZ2VQdHIiLCJkaWxhdGUiLCJtZW1jcHkiLCJzcmNJbWFnZVB0ciIsImRzdEltYWdlUHRyIiwic3ViSW1hZ2VQdHIiLCJlcm9kZWRJbWFnZVB0ciIsInRlbXBJbWFnZVB0ciIsInNrZWxJbWFnZVB0ciIsImRvbmUiLCJlZGdlTGFiZWwiLCJGdiIsIkN2IiwibGRpciIsIlAiLCJfZnJhbWVncmFiYmVyIiwiX3N0b3BwZWQiLCJfYm94U2l6ZSIsIl9kZWNvZGVyIiwiX3dvcmtlclBvb2wiLCJfb25VSVRocmVhZCIsIl9yZXN1bHRDb2xsZWN0b3IiLCJpbml0aWFsaXplRGF0YSIsImluaXRJbnB1dFN0cmVhbSIsImNyZWF0ZUltYWdlU3RyZWFtIiwidmlld3BvcnQiLCJnZXRWaWV3UG9ydCIsImNyZWF0ZUxpdmVTdHJlYW0iLCJDYW1lcmFBY2Nlc3MiLCJlcnIiLCJjYW5SZWNvcmQiLCJ0YXJnZXQiLCJub2RlTmFtZSIsIm5vZGVUeXBlIiwic2VsZWN0b3IiLCJjYiIsIkJhcmNvZGVMb2NhdG9yIiwiYWRqdXN0V29ya2VyUG9vbCIsInJlYWR5IiwiY2xlYXJGaXgiLCJnZXRCb3VuZGluZ0JveGVzIiwidHJhbnNmb3JtIiwicG9seWdvbiIsInRyYW5zZm9ybVJlc3VsdCIsImJhcmNvZGUiLCJhZGRSZXN1bHQiLCJjYW52YXNXaWR0aCIsImNhbnZhc0hlaWdodCIsImhhc0NvZGVSZXN1bHQiLCJwdWJsaXNoUmVzdWx0IiwicmVzdWx0VG9QdWJsaXNoIiwiRXZlbnRzIiwibG9jYXRlQW5kRGVjb2RlIiwiZGVjb2RlRnJvbUJvdW5kaW5nQm94ZXMiLCJ1cGRhdGUiLCJhdmFpbGFibGVXb3JrZXIiLCJ3b3JrZXJUaHJlYWQiLCJidXN5IiwiYXR0YWNoRGF0YSIsImdyYWIiLCJ3b3JrZXIiLCJwb3N0TWVzc2FnZSIsImNtZCIsInN0YXJ0Q29udGludW91c1VwZGF0ZSIsImRlbGF5IiwidGltZXN0YW1wIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicGVyZm9ybWFuY2UiLCJub3ciLCJpbml0V29ya2VyIiwiYmxvYlVSTCIsImdlbmVyYXRlV29ya2VyQmxvYiIsIldvcmtlciIsIm9ubWVzc2FnZSIsImV2IiwiVVJMIiwicmV2b2tlT2JqZWN0VVJMIiwibWVzc2FnZSIsImNvbmZpZ0ZvcldvcmtlciIsImNmZyIsIndvcmtlckludGVyZmFjZSIsImZhY3RvcnkiLCJRdWFnZ2EiLCJlIiwib25Qcm9jZXNzZWQiLCJzZXRSZWFkZXJzIiwiZmFjdG9yeVNvdXJjZSIsIl9fZmFjdG9yeVNvdXJjZV9fIiwiYmxvYiIsIkJsb2IiLCJ0b1N0cmluZyIsImNyZWF0ZU9iamVjdFVSTCIsImluY3JlYXNlQnkiLCJ3b3JrZXJzVG9UZXJtaW5hdGUiLCJ0ZXJtaW5hdGUiLCJvbkRldGVjdGVkIiwib2ZmRGV0ZWN0ZWQiLCJvZmZQcm9jZXNzZWQiLCJyZWdpc3RlclJlc3VsdENvbGxlY3RvciIsInJlc3VsdENvbGxlY3RvciIsImRlY29kZVNpbmdsZSIsInJlc3VsdENhbGxiYWNrIiwiY2FsbCIsIk4iLCJXIiwiU1RBUlRfUEFUVEVSTiIsIlNUT1BfUEFUVEVSTiIsIkNPREVfUEFUVEVSTiIsInN0YXJ0UGF0dGVybkxlbmd0aCIsIl9iYXJTcGFjZVJhdGlvIiwiX2Zvcm1hdCIsIl9zaW5nbGVDb2RlRXJyb3IiLCJfYXZlcmFnZUNvZGVFcnJvciIsImlzV2hpdGUiLCJ0cnlIYXJkZXIiLCJjb3VudGVyIiwiYmVzdE1hdGNoIiwiY29kZSIsImVwc2lsb24iLCJBVkVSQUdFX0NPREVfRVJST1IiLCJjb3VudGVyUG9zIiwiX25leHRTZXQiLCJfcm93IiwiX21hdGNoUGF0dGVybiIsIm5hcnJvd0JhcldpZHRoIiwic3RhcnRJbmZvIiwiX2ZpbmRQYXR0ZXJuIiwibGVhZGluZ1doaXRlc3BhY2VTdGFydCIsIl9tYXRjaFJhbmdlIiwiZW5kSW5mbyIsInRyYWlsaW5nV2hpdGVzcGFjZUVuZCIsInJldmVyc2UiLCJfdmVyaWZ5VHJhaWxpbmdXaGl0ZXNwYWNlIiwiY291bnRlcnMiLCJkZWNvZGVkQ29kZXMiLCJjb3VudGVyTGVuZ3RoIiwiX2RlY29kZUNvZGUiLCJfZmluZFN0YXJ0IiwiX2ZpbmRFbmQiLCJfZmlsbENvdW50ZXJzIiwiX2RlY29kZVBheWxvYWQiLCJCYXJjb2RlUmVhZGVyIiwiRElSRUNUSU9OIiwiRk9SV0FSRCIsIlJFVkVSU0UiLCJTdGFydE5vdEZvdW5kRXhjZXB0aW9uIiwiQ29kZU5vdEZvdW5kRXhjZXB0aW9uIiwiUGF0dGVybk5vdEZvdW5kRXhjZXB0aW9uIiwibWF4U2luZ2xlRXJyb3IiLCJtb2R1bG8iLCJTSU5HTEVfQ09ERV9FUlJPUiIsImJhcldpZHRoIiwic2NhbGVkIiwic2luZ2xlRXJyb3IiLCJjb3JyZWN0aW9uIiwiaW5kaWNlcyIsIl9kZWNvZGUiLCJfbmV4dFVuc2V0IiwibnVtQ291bnRlcnMiLCJBTFBIQUJFVEhfU1RSSU5HIiwiQUxQSEFCRVQiLCJDSEFSQUNURVJfRU5DT0RJTkdTIiwiU1RBUlRfRU5EIiwiTUlOX0VOQ09ERURfQ0hBUlMiLCJNQVhfQUNDRVBUQUJMRSIsIlBBRERJTkciLCJfY291bnRlcnMiLCJuZXh0U3RhcnQiLCJzdGFydENvdW50ZXIiLCJfdG9QYXR0ZXJuIiwiZGVjb2RlZENoYXIiLCJfcGF0dGVyblRvQ2hhciIsIl92ZXJpZnlXaGl0ZXNwYWNlIiwiX3ZhbGlkYXRlUmVzdWx0IiwiX3N1bUNvdW50ZXJzIiwiZW5kQ291bnRlciIsIl9jYWxjdWxhdGVQYXR0ZXJuTGVuZ3RoIiwiY2F0ZWdvcml6YXRpb24iLCJzcGFjZSIsIm5hcnJvdyIsImNvdW50cyIsIndpZGUiLCJiYXIiLCJfY2hhclRvUGF0dGVybiIsImNhdCIsImZsb29yIiwiY2hhckNvZGUiLCJ0aHJlc2hvbGRzIiwiX3RocmVzaG9sZFJlc3VsdFBhdHRlcm4iLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJiYXJUaHJlc2hvbGQiLCJfY29tcHV0ZUFsdGVybmF0aW5nVGhyZXNob2xkIiwic3BhY2VUaHJlc2hvbGQiLCJiaXRtYXNrIiwiQ09ERV9TSElGVCIsIkNPREVfQyIsIkNPREVfQiIsIkNPREVfQSIsIlNUQVJUX0NPREVfQSIsIlNUQVJUX0NPREVfQiIsIlNUQVJUX0NPREVfQyIsIlNUT1BfQ09ERSIsIk1PRFVMRV9JTkRJQ0VTIiwiX2NvcnJlY3QiLCJleHBlY3RlZCIsImNhbGN1bGF0ZUNvcnJlY3Rpb24iLCJfY29ycmVjdEJhcnMiLCJtdWx0aXBsaWVyIiwiY2hlY2tzdW0iLCJjb2Rlc2V0IiwicmF3UmVzdWx0Iiwic2hpZnROZXh0IiwicmVtb3ZlTGFzdENoYXJhY3RlciIsIm5vcm1hbGl6ZWQiLCJzdW1Ob3JtYWxpemVkIiwic3VtRXhwZWN0ZWQiLCJBU1RFUklTSyIsImxhc3RTdGFydCIsIl90b0NvdW50ZXJzIiwicG9wIiwicGF0dGVyblNpemUiLCJtaW5XaWR0aCIsIm1heE5hcnJvd1dpZHRoIiwibnVtV2lkZUJhcnMiLCJ3aWRlQmFyV2lkdGgiLCJfZmluZE5leHRXaWR0aCIsInBhdHRlcm5TdGFydCIsIndoaXRlU3BhY2VNdXN0U3RhcnQiLCJyZXBsYWNlIiwiX2NoZWNrQ2hlY2tzdW0iLCJfdmVyaWZ5RW5kIiwiX3ZlcmlmeUNoZWNrc3VtcyIsIl9kZWNvZGVFeHRlbmRlZCIsInJvdW5kIiwiY2hhckFycmF5IiwibmV4dENoYXIiLCJuZXh0Q2hhckNvZGUiLCJfbWF0Y2hDaGVja0NoYXIiLCJtYXhXZWlnaHQiLCJhcnJheVRvQ2hlY2siLCJ3ZWlnaHRlZFN1bXMiLCJ3ZWlnaHQiLCJjaGVja0NoYXIiLCJyb3ciLCJjb2RlRnJlcXVlbmN5IiwiQ09ERV9HX1NUQVJUIiwicGFyc2VJbnQiLCJfZXh0ZW5zaW9uQ2hlY2tzdW0iLCJfZGV0ZXJtaW5lQ2hlY2tEaWdpdCIsIkNIRUNLX0RJR0lUX0VOQ09ESU5HUyIsIk1JRERMRV9QQVRURVJOIiwiRVhURU5TSU9OX1NUQVJUX1BBVFRFUk4iLCJjb2RlcmFuZ2UiLCJDT0RFX0ZSRVFVRU5DWSIsImZpcnN0RGlnaXQiLCJfY2FsY3VsYXRlRmlyc3REaWdpdCIsInJlc3VsdEluZm8iLCJfY2hlY2tzdW0iLCJfZGVjb2RlRXh0ZW5zaW9ucyIsImxhc3RDb2RlIiwiZGVjb2RlIiwiTUFYX0NPUlJFQ1RJT05fRkFDVE9SIiwibm9ybWFsaXplQmFyU3BhY2VXaWR0aCIsImNvdW50ZXJTdW0iLCJjb2RlU3VtIiwiY29ycmVjdGlvblJhdGlvIiwiY29ycmVjdGlvblJhdGlvSW52ZXJzZSIsImNvdW50ZXJQYWlyIiwiY29kZXMiLCJfZGVjb2RlUGFpciIsIl9kZXRlcm1pbmVQYXJpdHkiLCJuclN5c3RlbSIsImxhc3REaWdpdCIsInVwY2EiLCJfY29udmVydFRvVVBDQSIsImNoYXJBdCIsInN1YnN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRCxXO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBLGlEQUFpRCxnQkFBZ0I7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLGNBQWM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxrQkFBa0I7QUFDbkQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTs7QUFFQTtBQUNB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R0FBcEYsRUFBeUY7QUFDckYxN0IsY0FBTSxDQUFDMnhCLElBQVAsR0FBYzN4QixNQUFNLENBQUMyeEIsSUFBUCxDQUFZZ0ssU0FBWixDQUFzQixDQUF0QixDQUFkO0FBQ0EsZUFBTzM3QixNQUFQO0FBQ0g7O0FBRUQsYUFBTyxJQUFQO0FBQ0g7QUFoQkw7O0FBQUE7QUFBQSxFQUErQmtRLHFEQUEvQixFIiwiZmlsZSI6InF1YWdnYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcbiAgICBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShmYWN0b3J5LnRvU3RyaW5nKCkpLmRlZmF1bHQ7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXhwb3J0c1tcIlF1YWdnYVwiXSA9IGZhY3RvcnkoZmFjdG9yeS50b1N0cmluZygpKS5kZWZhdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJvb3RbXCJRdWFnZ2FcIl0gPSBmYWN0b3J5KGZhY3RvcnkudG9TdHJpbmcoKSkuZGVmYXVsdDtcbiAgICB9XG59KSh0aGlzLCBmdW5jdGlvbihfX2ZhY3RvcnlTb3VyY2VfXykge1xuICAgIHJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcXVhZ2dhLmpzXCIpO1xuIiwiZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFycjJbaV0gPSBhcnJbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycjI7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRob3V0SG9sZXM7IiwiZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkOyIsImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpbmZvLmRvbmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcblxuICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuXG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3luY1RvR2VuZXJhdG9yOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3M7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5OyIsInZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL2dldFByb3RvdHlwZU9mXCIpO1xuXG52YXIgc3VwZXJQcm9wQmFzZSA9IHJlcXVpcmUoXCIuL3N1cGVyUHJvcEJhc2VcIik7XG5cbmZ1bmN0aW9uIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ICE9PSBcInVuZGVmaW5lZFwiICYmIFJlZmxlY3QuZ2V0KSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0ID0gUmVmbGVjdC5nZXQ7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0ID0gZnVuY3Rpb24gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICAgICAgdmFyIGJhc2UgPSBzdXBlclByb3BCYXNlKHRhcmdldCwgcHJvcGVydHkpO1xuICAgICAgaWYgKCFiYXNlKSByZXR1cm47XG4gICAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYmFzZSwgcHJvcGVydHkpO1xuXG4gICAgICBpZiAoZGVzYy5nZXQpIHtcbiAgICAgICAgcmV0dXJuIGRlc2MuZ2V0LmNhbGwocmVjZWl2ZXIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGVzYy52YWx1ZTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIgfHwgdGFyZ2V0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0OyIsImZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9O1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZjsiLCJ2YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9zZXRQcm90b3R5cGVPZlwiKTtcblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbmhlcml0czsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGl0ZXIpID09PSBcIltvYmplY3QgQXJndW1lbnRzXVwiKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5OyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVNwcmVhZDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxudmFyIGFzc2VydFRoaXNJbml0aWFsaXplZCA9IHJlcXVpcmUoXCIuL2Fzc2VydFRoaXNJbml0aWFsaXplZFwiKTtcblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9XG5cbiAgcmV0dXJuIGFzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjsiLCJmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcblxuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZjsiLCJ2YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9nZXRQcm90b3R5cGVPZlwiKTtcblxuZnVuY3Rpb24gX3N1cGVyUHJvcEJhc2Uob2JqZWN0LCBwcm9wZXJ0eSkge1xuICB3aGlsZSAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KSkge1xuICAgIG9iamVjdCA9IGdldFByb3RvdHlwZU9mKG9iamVjdCk7XG4gICAgaWYgKG9iamVjdCA9PT0gbnVsbCkgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gb2JqZWN0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zdXBlclByb3BCYXNlOyIsInZhciBhcnJheVdpdGhvdXRIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aG91dEhvbGVzXCIpO1xuXG52YXIgaXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5XCIpO1xuXG52YXIgbm9uSXRlcmFibGVTcHJlYWQgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVNwcmVhZFwiKTtcblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90b0NvbnN1bWFibGVBcnJheTsiLCJmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YyID0gZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mMiA9IGZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZjIob2JqKTsgfVxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIF90eXBlb2YyKFN5bWJvbC5pdGVyYXRvcikgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIF90eXBlb2YyKG9iaik7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IF90eXBlb2YyKG9iaik7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4vLyBUaGlzIG1ldGhvZCBvZiBvYnRhaW5pbmcgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QgbmVlZHMgdG8gYmVcbi8vIGtlcHQgaWRlbnRpY2FsIHRvIHRoZSB3YXkgaXQgaXMgb2J0YWluZWQgaW4gcnVudGltZS5qc1xudmFyIGcgPSAoZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzIHx8ICh0eXBlb2Ygc2VsZiA9PT0gXCJvYmplY3RcIiAmJiBzZWxmKTtcbn0pKCkgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xuXG4vLyBVc2UgYGdldE93blByb3BlcnR5TmFtZXNgIGJlY2F1c2Ugbm90IGFsbCBicm93c2VycyBzdXBwb3J0IGNhbGxpbmdcbi8vIGBoYXNPd25Qcm9wZXJ0eWAgb24gdGhlIGdsb2JhbCBgc2VsZmAgb2JqZWN0IGluIGEgd29ya2VyLiBTZWUgIzE4My5cbnZhciBoYWRSdW50aW1lID0gZy5yZWdlbmVyYXRvclJ1bnRpbWUgJiZcbiAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZykuaW5kZXhPZihcInJlZ2VuZXJhdG9yUnVudGltZVwiKSA+PSAwO1xuXG4vLyBTYXZlIHRoZSBvbGQgcmVnZW5lcmF0b3JSdW50aW1lIGluIGNhc2UgaXQgbmVlZHMgdG8gYmUgcmVzdG9yZWQgbGF0ZXIuXG52YXIgb2xkUnVudGltZSA9IGhhZFJ1bnRpbWUgJiYgZy5yZWdlbmVyYXRvclJ1bnRpbWU7XG5cbi8vIEZvcmNlIHJlZXZhbHV0YXRpb24gb2YgcnVudGltZS5qcy5cbmcucmVnZW5lcmF0b3JSdW50aW1lID0gdW5kZWZpbmVkO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL3J1bnRpbWVcIik7XG5cbmlmIChoYWRSdW50aW1lKSB7XG4gIC8vIFJlc3RvcmUgdGhlIG9yaWdpbmFsIHJ1bnRpbWUuXG4gIGcucmVnZW5lcmF0b3JSdW50aW1lID0gb2xkUnVudGltZTtcbn0gZWxzZSB7XG4gIC8vIFJlbW92ZSB0aGUgZ2xvYmFsIHByb3BlcnR5IGFkZGVkIGJ5IHJ1bnRpbWUuanMuXG4gIHRyeSB7XG4gICAgZGVsZXRlIGcucmVnZW5lcmF0b3JSdW50aW1lO1xuICB9IGNhdGNoKGUpIHtcbiAgICBnLnJlZ2VuZXJhdG9yUnVudGltZSA9IHVuZGVmaW5lZDtcbiAgfVxufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4hKGZ1bmN0aW9uKGdsb2JhbCkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIHZhciBpbk1vZHVsZSA9IHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCI7XG4gIHZhciBydW50aW1lID0gZ2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZTtcbiAgaWYgKHJ1bnRpbWUpIHtcbiAgICBpZiAoaW5Nb2R1bGUpIHtcbiAgICAgIC8vIElmIHJlZ2VuZXJhdG9yUnVudGltZSBpcyBkZWZpbmVkIGdsb2JhbGx5IGFuZCB3ZSdyZSBpbiBhIG1vZHVsZSxcbiAgICAgIC8vIG1ha2UgdGhlIGV4cG9ydHMgb2JqZWN0IGlkZW50aWNhbCB0byByZWdlbmVyYXRvclJ1bnRpbWUuXG4gICAgICBtb2R1bGUuZXhwb3J0cyA9IHJ1bnRpbWU7XG4gICAgfVxuICAgIC8vIERvbid0IGJvdGhlciBldmFsdWF0aW5nIHRoZSByZXN0IG9mIHRoaXMgZmlsZSBpZiB0aGUgcnVudGltZSB3YXNcbiAgICAvLyBhbHJlYWR5IGRlZmluZWQgZ2xvYmFsbHkuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRGVmaW5lIHRoZSBydW50aW1lIGdsb2JhbGx5IChhcyBleHBlY3RlZCBieSBnZW5lcmF0ZWQgY29kZSkgYXMgZWl0aGVyXG4gIC8vIG1vZHVsZS5leHBvcnRzIChpZiB3ZSdyZSBpbiBhIG1vZHVsZSkgb3IgYSBuZXcsIGVtcHR5IG9iamVjdC5cbiAgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWUgPSBpbk1vZHVsZSA/IG1vZHVsZS5leHBvcnRzIDoge307XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgcnVudGltZS53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGVbdG9TdHJpbmdUYWdTeW1ib2xdID1cbiAgICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBwcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBydW50aW1lLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGlmICghKHRvU3RyaW5nVGFnU3ltYm9sIGluIGdlbkZ1bikpIHtcbiAgICAgICAgZ2VuRnVuW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcbiAgICAgIH1cbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgcnVudGltZS5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIHJ1bnRpbWUuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIHJ1bnRpbWUuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KVxuICAgICk7XG5cbiAgICByZXR1cm4gcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yLnJldHVybikge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIEdwW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yXCI7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgcnVudGltZS5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIHJ1bnRpbWUudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG59KShcbiAgLy8gSW4gc2xvcHB5IG1vZGUsIHVuYm91bmQgYHRoaXNgIHJlZmVycyB0byB0aGUgZ2xvYmFsIG9iamVjdCwgZmFsbGJhY2sgdG9cbiAgLy8gRnVuY3Rpb24gY29uc3RydWN0b3IgaWYgd2UncmUgaW4gZ2xvYmFsIHN0cmljdCBtb2RlLiBUaGF0IGlzIHNhZGx5IGEgZm9ybVxuICAvLyBvZiBpbmRpcmVjdCBldmFsIHdoaWNoIHZpb2xhdGVzIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5LlxuICAoZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMgfHwgKHR5cGVvZiBzZWxmID09PSBcIm9iamVjdFwiICYmIHNlbGYpO1xuICB9KSgpIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKVxuKTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsImltcG9ydCB7IEltYWdlRGVidWcgfSBmcm9tICcuLi9jb21tb24vaW1hZ2VfZGVidWcnO1xuXG5leHBvcnQgY2xhc3MgUmVzdWx0Q29sbGVjdG9yIHtcbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuICAgICAgICB0aGlzLl9jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgdGhpcy5fY29udGV4dCA9IHRoaXMuX2NhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICB0aGlzLl9yZXN1bHRzID0gW107XG4gICAgICAgIHRoaXMuX2NhcGFjaXR5ID0gY29uZmlnLmNhcGFjaXR5IHx8IDIwO1xuICAgICAgICB0aGlzLl9jYXB0dXJlID0gY29uZmlnLmNhcHR1cmUgPT09IHRydWU7XG4gICAgfVxuXG4gICAgX2NvbnRhaW5zKGNvZGVSZXN1bHQsIGxpc3QpIHtcbiAgICAgICAgcmV0dXJuICEhbGlzdCAmJiBsaXN0LnNvbWUoaXRlbSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoaXRlbSkuZXZlcnkoa2V5ID0+IGl0ZW1ba2V5XSA9PT0gY29kZVJlc3VsdFtrZXldKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX3Bhc3Nlc0ZpbHRlcihjb2RlUmVzdWx0LCBmaWx0ZXIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBmaWx0ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybiBmaWx0ZXIoY29kZVJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgX21hdGNoZXNDb25zdHJhaW50cyhjb2RlUmVzdWx0KSB7XG4gICAgICAgIHJldHVybiBjb2RlUmVzdWx0XG4gICAgICAgICAgICAmJiB0aGlzLl9jYXBhY2l0eVxuICAgICAgICAgICAgJiYgIXRoaXMuX2NvbnRhaW5zKGNvZGVSZXN1bHQsIHRoaXMuX2NvbmZpZy5ibGFja2xpc3QpXG4gICAgICAgICAgICAmJiB0aGlzLl9wYXNzZXNGaWx0ZXIoY29kZVJlc3VsdCwgdGhpcy5fY29uZmlnLmZpbHRlcik7XG4gICAgfVxuXG4gICAgYWRkUmVzdWx0KGRhdGEsIGltYWdlV2lkdGgsIGltYWdlSGVpZ2h0LCBjb2RlUmVzdWx0KSB7XG4gICAgICAgIGlmICh0aGlzLl9tYXRjaGVzQ29uc3RyYWludHMoY29kZVJlc3VsdCkpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuXG4gICAgICAgICAgICB0aGlzLl9jYXBhY2l0eS0tO1xuICAgICAgICAgICAgcmVzdWx0LmNvZGVSZXN1bHQgPSBjb2RlUmVzdWx0O1xuXG4gICAgICAgICAgICBpZiAodGhpcy5fY2FwdHVyZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NhbnZhcy53aWR0aCA9IGltYWdlV2lkdGg7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2FudmFzLmhlaWdodCA9IGltYWdlSGVpZ2h0O1xuICAgICAgICAgICAgICAgIEltYWdlRGVidWcuZHJhd0ltYWdlKGRhdGEsIGltYWdlV2lkdGgsIGltYWdlSGVpZ2h0LCB0aGlzLl9jb250ZXh0KTtcbiAgICAgICAgICAgICAgICByZXN1bHQuZnJhbWUgPSB0aGlzLl9jYW52YXMudG9EYXRhVVJMKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX3Jlc3VsdHMucHVzaChyZXN1bHQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0UmVzdWx0cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Jlc3VsdHM7XG4gICAgfVxufVxuIiwiLyoqXG4gKiBDcmVhdGVzIGEgY2x1c3RlciBmb3IgZ3JvdXBpbmcgc2ltaWxhciBvcmllbnRhdGlvbnMgb2YgZGF0YXBvaW50c1xuICovXG5leHBvcnQgY2xhc3MgQ2x1c3RlciB7XG4gICAgY29uc3RydWN0b3IodGhyZXNob2xkLCBwb2ludCkge1xuICAgICAgICB0aGlzLl90aHJlc2hvbGQgPSB0aHJlc2hvbGQ7XG4gICAgICAgIHRoaXMuX3BvaW50cyA9IFtdO1xuICAgICAgICB0aGlzLl9jZW50ZXIgPSB7XG4gICAgICAgICAgICByYWQ6IDAsXG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogMFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9wb2ludE1hcCA9IHt9O1xuXG4gICAgICAgIGlmIChwb2ludCkge1xuICAgICAgICAgICAgdGhpcy5hZGQocG9pbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkKHBvaW50KSB7XG4gICAgICAgIGlmICghdGhpcy5fcG9pbnRNYXBbcG9pbnQuaWRdKSB7XG4gICAgICAgICAgICB0aGlzLl9wb2ludE1hcFtwb2ludC5pZF0gPSBwb2ludDtcbiAgICAgICAgICAgIHRoaXMuX3BvaW50cy5wdXNoKHBvaW50KTtcblxuICAgICAgICAgICAgLy8gVXBkYXRlIGNlbnRlclxuICAgICAgICAgICAgdGhpcy5fY2VudGVyLnJhZCA9IHRoaXMuX3BvaW50cy5yZWR1Y2UoKHN1bSwgcCkgPT4gc3VtICsgcC5yYWQsIDApIC8gdGhpcy5fcG9pbnRzLmxlbmd0aDtcbiAgICAgICAgICAgIHRoaXMuX2NlbnRlci54ID0gTWF0aC5jb3ModGhpcy5fY2VudGVyLnJhZCk7XG4gICAgICAgICAgICB0aGlzLl9jZW50ZXIueSA9IE1hdGguc2luKHRoaXMuX2NlbnRlci5yYWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZml0cyhwb2ludCkge1xuICAgICAgICAvLyBjaGVjayBjb3NpbmUgc2ltaWxhcml0eSB0byBjZW50ZXItYW5nbGVcbiAgICAgICAgY29uc3Qgc2ltaWxhcml0eSA9IE1hdGguYWJzKHBvaW50LnBvaW50LnggKiB0aGlzLl9jZW50ZXIueCArIHBvaW50LnBvaW50LnkgKiB0aGlzLl9jZW50ZXIueSk7XG4gICAgICAgIHJldHVybiBzaW1pbGFyaXR5ID4gdGhpcy5fdGhyZXNob2xkO1xuICAgIH1cblxuICAgIGdldCBwb2ludHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wb2ludHM7XG4gICAgfVxufVxuIiwiZnVuY3Rpb24gX2NvbXB1dGVIaXN0b2dyYW0oaW1hZ2VXcmFwcGVyLCBiaXRzUGVyUGl4ZWwpIHtcbiAgICBpZiAoIWJpdHNQZXJQaXhlbCkge1xuICAgICAgICBiaXRzUGVyUGl4ZWwgPSA4O1xuICAgIH1cblxuICAgIGNvbnN0IGltYWdlRGF0YSA9IGltYWdlV3JhcHBlci5kYXRhO1xuICAgIGNvbnN0IGJpdFNoaWZ0ID0gOCAtIGJpdHNQZXJQaXhlbDtcbiAgICBjb25zdCBidWNrZXRDb3VudCA9IDEgPDwgYml0c1BlclBpeGVsO1xuICAgIGNvbnN0IGhpc3RvZ3JhbSA9IG5ldyBJbnQzMkFycmF5KGJ1Y2tldENvdW50KTtcblxuICAgIGZvciAobGV0IGkgPSBpbWFnZURhdGEubGVuZ3RoOyBpLS07KSB7XG4gICAgICAgIGhpc3RvZ3JhbVtpbWFnZURhdGFbaV0gPj4gYml0U2hpZnRdKys7XG4gICAgfVxuXG4gICAgcmV0dXJuIGhpc3RvZ3JhbTtcbn1cblxuZnVuY3Rpb24gX2RldGVybWluZU90c3VUaHJlc2hvbGQoaW1hZ2VXcmFwcGVyLCBiaXRzUGVyUGl4ZWwpIHtcbiAgICBpZiAoIWJpdHNQZXJQaXhlbCkge1xuICAgICAgICBiaXRzUGVyUGl4ZWwgPSA4O1xuICAgIH1cblxuICAgIGNvbnN0IGJpdFNoaWZ0ID0gOCAtIGJpdHNQZXJQaXhlbDtcbiAgICBjb25zdCBoaXN0ID0gX2NvbXB1dGVIaXN0b2dyYW0oaW1hZ2VXcmFwcGVyLCBiaXRzUGVyUGl4ZWwpO1xuICAgIGNvbnN0IHZldCA9IFswXTtcbiAgICBjb25zdCBtYXggPSAoMSA8PCBiaXRzUGVyUGl4ZWwpIC0gMTtcblxuICAgIGZ1bmN0aW9uIHB4KGluaXQsIGVuZCkge1xuICAgICAgICBsZXQgc3VtID0gMDtcblxuICAgICAgICBmb3IgKGxldCBpID0gaW5pdDsgaSA8PSBlbmQ7IGkrKykge1xuICAgICAgICAgICAgc3VtICs9IGhpc3RbaV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VtO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG14KGluaXQsIGVuZCkge1xuICAgICAgICBsZXQgc3VtID0gMDtcblxuICAgICAgICBmb3IgKGxldCBpID0gaW5pdDsgaSA8PSBlbmQ7IGkrKykge1xuICAgICAgICAgICAgc3VtICs9IGkgKiBoaXN0W2ldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1bTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBrID0gMTsgayA8IG1heDsgaysrKSB7XG4gICAgICAgIGNvbnN0IHAxID0gcHgoMCwgayk7XG4gICAgICAgIGNvbnN0IHAyID0gcHgoayArIDEsIG1heCk7XG4gICAgICAgIGNvbnN0IHAxMiA9IHAxICogcDIgfHwgMTtcbiAgICAgICAgY29uc3QgbTEgPSBteCgwLCBrKSAqIHAyO1xuICAgICAgICBjb25zdCBtMiA9IG14KGsgKyAxLCBtYXgpICogcDE7XG4gICAgICAgIGNvbnN0IG0xMiA9IG0xIC0gbTI7XG4gICAgICAgIHZldFtrXSA9IG0xMiAqIG0xMiAvIHAxMjtcbiAgICB9XG5cbiAgICAvLyBpbmRleCBvZiBtYXggZWxlbWVudFxuICAgIGNvbnN0IHRocmVzaG9sZCA9IHZldC5yZWR1Y2UoKG1heEluZGV4LCBpdGVtLCBpbmRleCwgYXJyYXkpID0+IGl0ZW0gPiBhcnJheVttYXhJbmRleF0gPyBpbmRleCA6IG1heEluZGV4LCAwKTtcblxuICAgIHJldHVybiB0aHJlc2hvbGQgPDwgYml0U2hpZnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvdHN1VGhyZXNob2xkKGltYWdlV3JhcHBlciwgdGFyZ2V0V3JhcHBlcikge1xuICAgIGNvbnN0IHRocmVzaG9sZCA9IF9kZXRlcm1pbmVPdHN1VGhyZXNob2xkKGltYWdlV3JhcHBlcik7XG4gICAgY29uc3QgdGFyZ2V0RGF0YSA9IHRhcmdldFdyYXBwZXIuZGF0YTtcblxuICAgIGltYWdlV3JhcHBlci5kYXRhLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgICB0YXJnZXREYXRhW2luZGV4XSA9IHZhbHVlIDwgdGhyZXNob2xkID8gMSA6IDA7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhyZXNob2xkO1xufVxuXG4vKipcbiAqIEBwYXJhbSBpbkltZ1dyYXBwZXIge0ltYWdlV3JhcHBlcn0gaW5wdXQgaW1hZ2UgdG8gYmUgc2FtcGxlZFxuICogQHBhcmFtIG91dEltZ1dyYXBwZXIge0ltYWdlV3JhcHBlcn0gdG8gYmUgc3RvcmVkIGluXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoYWxmU2FtcGxlKGluSW1nV3JhcHBlciwgb3V0SW1nV3JhcHBlcikge1xuICAgIGNvbnN0IGluSW1nID0gaW5JbWdXcmFwcGVyLmRhdGE7XG4gICAgY29uc3QgaW5XaWR0aCA9IGluSW1nV3JhcHBlci5zaXplLng7XG4gICAgY29uc3Qgb3V0SW1nID0gb3V0SW1nV3JhcHBlci5kYXRhO1xuICAgIGNvbnN0IGVuZEluZGV4ID0gaW5JbWcubGVuZ3RoO1xuICAgIGNvbnN0IG91dFdpZHRoID0gaW5XaWR0aCAvIDI7XG4gICAgbGV0IHRvcFJvd0luZGV4ID0gMDtcbiAgICBsZXQgYm90dG9tUm93SW5kZXggPSBpbldpZHRoO1xuICAgIGxldCBvdXRJbWdJbmRleCA9IDA7XG5cbiAgICB3aGlsZSAoYm90dG9tUm93SW5kZXggPCBlbmRJbmRleCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG91dFdpZHRoOyBpKyspIHtcbiAgICAgICAgICAgIG91dEltZ1tvdXRJbWdJbmRleF0gPVxuICAgICAgICAgICAgICAgIChpbkltZ1t0b3BSb3dJbmRleF0gKyBpbkltZ1t0b3BSb3dJbmRleCArIDFdICsgaW5JbWdbYm90dG9tUm93SW5kZXhdICsgaW5JbWdbYm90dG9tUm93SW5kZXggKyAxXSkgPj4gMjtcbiAgICAgICAgICAgIG91dEltZ0luZGV4Kys7XG4gICAgICAgICAgICB0b3BSb3dJbmRleCArPSAyO1xuICAgICAgICAgICAgYm90dG9tUm93SW5kZXggKz0gMjtcbiAgICAgICAgfVxuICAgICAgICB0b3BSb3dJbmRleCArPSBpbldpZHRoO1xuICAgICAgICBib3R0b21Sb3dJbmRleCArPSBpbldpZHRoO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhzdjJyZ2IoaHN2LCByZ2IpIHtcbiAgICBjb25zdCBoID0gaHN2WzBdO1xuICAgIGNvbnN0IHMgPSBoc3ZbMV07XG4gICAgY29uc3QgdiA9IGhzdlsyXTtcbiAgICBjb25zdCBjID0gdiAqIHM7XG4gICAgY29uc3QgeCA9IGMgKiAoMSAtIE1hdGguYWJzKChoIC8gNjApICUgMiAtIDEpKTtcbiAgICBjb25zdCBtID0gdiAtIGM7XG4gICAgbGV0IHIgPSAwO1xuICAgIGxldCBnID0gMDtcbiAgICBsZXQgYiA9IDA7XG5cbiAgICBpZiAoaCA8IDYwKSB7XG4gICAgICAgIHIgPSBjO1xuICAgICAgICBnID0geDtcbiAgICB9IGVsc2UgaWYgKGggPCAxMjApIHtcbiAgICAgICAgciA9IHg7XG4gICAgICAgIGcgPSBjO1xuICAgIH0gZWxzZSBpZiAoaCA8IDE4MCkge1xuICAgICAgICBnID0gYztcbiAgICAgICAgYiA9IHg7XG4gICAgfSBlbHNlIGlmIChoIDwgMjQwKSB7XG4gICAgICAgIGcgPSB4O1xuICAgICAgICBiID0gYztcbiAgICB9IGVsc2UgaWYgKGggPCAzMDApIHtcbiAgICAgICAgciA9IHg7XG4gICAgICAgIGIgPSBjO1xuICAgIH0gZWxzZSBpZiAoaCA8IDM2MCkge1xuICAgICAgICByID0gYztcbiAgICAgICAgYiA9IHg7XG4gICAgfVxuXG4gICAgcmdiID0gcmdiIHx8IFswLCAwLCAwXTtcblxuICAgIHJnYlswXSA9IChyICsgbSkgKiAyNTUgfCAwO1xuICAgIHJnYlsxXSA9IChnICsgbSkgKiAyNTUgfCAwO1xuICAgIHJnYlsyXSA9IChiICsgbSkgKiAyNTUgfCAwO1xuXG4gICAgcmV0dXJuIHJnYjtcbn1cblxuZnVuY3Rpb24gX2NvbXB1dGVEaXZpc29ycyhuKSB7XG4gICAgY29uc3QgbGFyZ2VEaXZpc29ycyA9IFtdO1xuICAgIGNvbnN0IGRpdmlzb3JzID0gW107XG5cbiAgICBmb3IgKGxldCBkaXZpc29yID0gMTsgZGl2aXNvciAqIGRpdmlzb3IgPD0gbjsgZGl2aXNvcisrKSB7XG4gICAgICAgIGlmIChuICUgZGl2aXNvciA9PT0gMCkge1xuICAgICAgICAgICAgZGl2aXNvcnMucHVzaChkaXZpc29yKTtcbiAgICAgICAgICAgIGlmIChkaXZpc29yICogZGl2aXNvciAhPT0gbikge1xuICAgICAgICAgICAgICAgIGxhcmdlRGl2aXNvcnMudW5zaGlmdChuIC8gZGl2aXNvciB8IDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpdmlzb3JzLmNvbmNhdChsYXJnZURpdmlzb3JzKTtcbn1cblxuZnVuY3Rpb24gX2NvbXB1dGVDb21tb25EaXZpc29ycyhtLCBuKSB7XG4gICAgaWYgKG0gPT09IG4pIHtcbiAgICAgICAgcmV0dXJuIF9jb21wdXRlRGl2aXNvcnMobSk7XG4gICAgfVxuXG4gICAgY29uc3QgbWF4ID0gbSA+IG4gPyBtIDogbjtcbiAgICBjb25zdCBtaW4gPSBtID4gbiA/IG4gOiBtO1xuICAgIGNvbnN0IGxhcmdlRGl2aXNvcnMgPSBbXTtcbiAgICBjb25zdCBkaXZpc29ycyA9IFtdO1xuXG4gICAgZm9yIChsZXQgZGl2aXNvciA9IDE7IGRpdmlzb3IgKiBkaXZpc29yIDw9IG1pbjsgZGl2aXNvcisrKSB7XG4gICAgICAgIGlmIChtYXggJSBkaXZpc29yID09PSAwICYmIG1pbiAlIGRpdmlzb3IgPT09IDApIHtcbiAgICAgICAgICAgIGRpdmlzb3JzLnB1c2goZGl2aXNvcik7XG4gICAgICAgICAgICBjb25zdCBsYXJnZURpdmlzb3IgPSBtaW4gLyBkaXZpc29yIHwgMDtcbiAgICAgICAgICAgIGlmIChkaXZpc29yICE9PSBsYXJnZURpdmlzb3IgJiYgbWF4ICUgbGFyZ2VEaXZpc29yID09PSAwKSB7XG4gICAgICAgICAgICAgICAgbGFyZ2VEaXZpc29ycy51bnNoaWZ0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGl2aXNvcnMuY29uY2F0KGxhcmdlRGl2aXNvcnMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlUGF0Y2hTaXplKHBhdGNoU2l6ZSwgaW1nU2l6ZSkge1xuICAgIGNvbnN0IHdpZGVTaWRlID0gTWF0aC5tYXgoaW1nU2l6ZS54IHwgMCwgaW1nU2l6ZS55IHwgMCkgfCAwO1xuICAgIGNvbnN0IG5yT2ZQYXRjaGVzTGlzdCA9IFs4LCAxMCwgMTUsIDIwLCAzMiwgNjAsIDgwXTtcbiAgICBjb25zdCBuck9mUGF0Y2hlc01hcCA9IHtcbiAgICAgICAgJ3gtc21hbGwnOiA1LFxuICAgICAgICBzbWFsbDogNCxcbiAgICAgICAgbWVkaXVtOiAzLFxuICAgICAgICBsYXJnZTogMixcbiAgICAgICAgJ3gtbGFyZ2UnOiAxXG4gICAgfTtcbiAgICBjb25zdCBuck9mUGF0Y2hlc0luZGV4ID0gbnJPZlBhdGNoZXNNYXBbcGF0Y2hTaXplXSB8fCBuck9mUGF0Y2hlc01hcC5tZWRpdW0gfCAwO1xuICAgIGNvbnN0IG5yT2ZQYXRjaGVzID0gbnJPZlBhdGNoZXNMaXN0W25yT2ZQYXRjaGVzSW5kZXhdIHwgMDtcbiAgICBjb25zdCBkZXNpcmVkUGF0Y2hTaXplID0gd2lkZVNpZGUgLyBuck9mUGF0Y2hlcyB8IDA7XG5cbiAgICBmdW5jdGlvbiBmaW5kUGF0Y2hTaXplRm9yRGl2aXNvcnMoZGl2aXNvcnMpIHtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBsZXQgZm91bmQgPSBkaXZpc29yc1tkaXZpc29ycy5sZW5ndGggPj4gMV0gfCAwO1xuXG4gICAgICAgIHdoaWxlIChpIDwgKGRpdmlzb3JzLmxlbmd0aCAtIDEpICYmIGRpdmlzb3JzW2ldIDwgZGVzaXJlZFBhdGNoU2l6ZSkge1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpID4gMCkge1xuICAgICAgICAgICAgaWYgKE1hdGguYWJzKGRpdmlzb3JzW2ldIC0gZGVzaXJlZFBhdGNoU2l6ZSkgPiBNYXRoLmFicyhkaXZpc29yc1tpIC0gMV0gLSBkZXNpcmVkUGF0Y2hTaXplKSkge1xuICAgICAgICAgICAgICAgIGZvdW5kID0gZGl2aXNvcnNbaSAtIDFdIHwgMDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZm91bmQgPSBkaXZpc29yc1tpXSB8IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRlc2lyZWRQYXRjaFNpemUgLyBmb3VuZCA8IG5yT2ZQYXRjaGVzTGlzdFtuck9mUGF0Y2hlc0luZGV4ICsgMV0gLyBuck9mUGF0Y2hlc0xpc3RbbnJPZlBhdGNoZXNJbmRleF0gJiZcbiAgICAgICAgICAgIGRlc2lyZWRQYXRjaFNpemUgLyBmb3VuZCA+IG5yT2ZQYXRjaGVzTGlzdFtuck9mUGF0Y2hlc0luZGV4IC0gMV0gLyBuck9mUGF0Y2hlc0xpc3RbbnJPZlBhdGNoZXNJbmRleF0pIHtcbiAgICAgICAgICAgIHJldHVybiB7IHg6IGZvdW5kLCB5OiBmb3VuZCB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IG9wdGltYWxQYXRjaFNpemUgPSBmaW5kUGF0Y2hTaXplRm9yRGl2aXNvcnMoX2NvbXB1dGVDb21tb25EaXZpc29ycyhpbWdTaXplLngsIGltZ1NpemUueSkpIHx8XG4gICAgICAgIGZpbmRQYXRjaFNpemVGb3JEaXZpc29ycyhfY29tcHV0ZURpdmlzb3JzKHdpZGVTaWRlKSkgfHxcbiAgICAgICAgZmluZFBhdGNoU2l6ZUZvckRpdmlzb3JzKF9jb21wdXRlRGl2aXNvcnMoZGVzaXJlZFBhdGNoU2l6ZSAqIG5yT2ZQYXRjaGVzKSk7XG5cbiAgICByZXR1cm4gb3B0aW1hbFBhdGNoU2l6ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9wYXJzZUNTU0RpbWVuc2lvblZhbHVlcyh2YWx1ZSkge1xuICAgIGNvbnN0IGRpbWVuc2lvbiA9IHtcbiAgICAgICAgdmFsdWU6IHBhcnNlRmxvYXQodmFsdWUpLFxuICAgICAgICB1bml0OiB2YWx1ZS5pbmRleE9mKCclJykgPT09IHZhbHVlLmxlbmd0aCAtIDEgPyAnJScgOiAnJSdcbiAgICB9O1xuXG4gICAgcmV0dXJuIGRpbWVuc2lvbjtcbn1cblxuZXhwb3J0IGNvbnN0IF9kaW1lbnNpb25zQ29udmVydGVycyA9IHtcbiAgICB0b3A6IChkaW1lbnNpb24sIGNvbnRleHQpID0+XG4gICAgICAgIGRpbWVuc2lvbi51bml0ID09PSAnJScgPyBjb250ZXh0LmhlaWdodCAqIGRpbWVuc2lvbi52YWx1ZSAvIDEwMCB8IDAgOiBjb250ZXh0LmhlaWdodCxcbiAgICByaWdodDogKGRpbWVuc2lvbiwgY29udGV4dCkgPT5cbiAgICAgICAgZGltZW5zaW9uLnVuaXQgPT09ICclJyA/IGNvbnRleHQud2lkdGggLSBjb250ZXh0LndpZHRoICogZGltZW5zaW9uLnZhbHVlIC8gMTAwIHwgMCA6IGNvbnRleHQud2lkdGgsXG4gICAgYm90dG9tOiAoZGltZW5zaW9uLCBjb250ZXh0KSA9PlxuICAgICAgICBkaW1lbnNpb24udW5pdCA9PT0gJyUnID8gY29udGV4dC5oZWlnaHQgLSBjb250ZXh0LmhlaWdodCAqIGRpbWVuc2lvbi52YWx1ZSAvIDEwMCB8IDAgOiBjb250ZXh0LmhlaWdodCxcbiAgICBsZWZ0OiAoZGltZW5zaW9uLCBjb250ZXh0KSA9PlxuICAgICAgICBkaW1lbnNpb24udW5pdCA9PT0gJyUnID8gY29udGV4dC53aWR0aCAqIGRpbWVuc2lvbi52YWx1ZSAvIDEwMCB8IDAgOiBjb250ZXh0LndpZHRoXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gY29tcHV0ZUltYWdlQXJlYShpbnB1dFdpZHRoLCBpbnB1dEhlaWdodCwgYXJlYSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB7IHdpZHRoOiBpbnB1dFdpZHRoLCBoZWlnaHQ6IGlucHV0SGVpZ2h0IH07XG4gICAgY29uc3QgcGFyc2VkQXJlYSA9IE9iamVjdC5rZXlzKGFyZWEpLnJlZHVjZSgocmVzdWx0LCBrZXkpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBhcmVhW2tleV07XG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IF9wYXJzZUNTU0RpbWVuc2lvblZhbHVlcyh2YWx1ZSk7XG4gICAgICAgIGNvbnN0IGNhbGN1bGF0ZWQgPSBfZGltZW5zaW9uc0NvbnZlcnRlcnNba2V5XShwYXJzZWQsIGNvbnRleHQpO1xuXG4gICAgICAgIHJlc3VsdFtrZXldID0gY2FsY3VsYXRlZDtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9LCB7fSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzeDogcGFyc2VkQXJlYS5sZWZ0LFxuICAgICAgICBzeTogcGFyc2VkQXJlYS50b3AsXG4gICAgICAgIHN3OiBwYXJzZWRBcmVhLnJpZ2h0IC0gcGFyc2VkQXJlYS5sZWZ0LFxuICAgICAgICBzaDogcGFyc2VkQXJlYS5ib3R0b20gLSBwYXJzZWRBcmVhLnRvcFxuICAgIH07XG59XG4iLCJleHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gKCkge1xuICAgIGxldCBldmVudHMgPSB7fTtcblxuICAgIGZ1bmN0aW9uIGdldEV2ZW50KGV2ZW50TmFtZSkge1xuICAgICAgICBpZiAoIWV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICAgICAgICBldmVudHNbZXZlbnROYW1lXSA9IHtcbiAgICAgICAgICAgICAgICBzdWJzY3JpYmVyczogW11cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGV2ZW50c1tldmVudE5hbWVdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFyRXZlbnRzKCkge1xuICAgICAgICBldmVudHMgPSB7fTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwdWJsaXNoU3Vic2NyaXB0aW9uKHN1YnNjcmlwdGlvbiwgZGF0YSkge1xuICAgICAgICBpZiAoc3Vic2NyaXB0aW9uLmFzeW5jKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb24uY2FsbGJhY2soZGF0YSk7XG4gICAgICAgICAgICB9LCA0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbi5jYWxsYmFjayhkYXRhKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN1YnNjcmliZShldmVudCwgY2FsbGJhY2ssIGFzeW5jKSB7XG4gICAgICAgIGxldCBzdWJzY3JpcHRpb247XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgc3Vic2NyaXB0aW9uID0ge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBjYWxsYmFjayxcbiAgICAgICAgICAgICAgICBhc3luYzogYXN5bmNcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdWJzY3JpcHRpb24gPSBjYWxsYmFjaztcbiAgICAgICAgICAgIGlmICghc3Vic2NyaXB0aW9uLmNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgJ0NhbGxiYWNrIHdhcyBub3Qgc3BlY2lmaWVkIG9uIG9wdGlvbnMnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZ2V0RXZlbnQoZXZlbnQpLnN1YnNjcmliZXJzLnB1c2goc3Vic2NyaXB0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzdWJzY3JpYmU6IGZ1bmN0aW9uIChldmVudCwgY2FsbGJhY2ssIGFzeW5jKSB7XG4gICAgICAgICAgICByZXR1cm4gc3Vic2NyaWJlKGV2ZW50LCBjYWxsYmFjaywgYXN5bmMpO1xuICAgICAgICB9LFxuICAgICAgICBwdWJsaXNoOiBmdW5jdGlvbiAoZXZlbnROYW1lLCBkYXRhKSB7XG4gICAgICAgICAgICBjb25zdCBldmVudCA9IGdldEV2ZW50KGV2ZW50TmFtZSk7XG4gICAgICAgICAgICBjb25zdCBzdWJzY3JpYmVycyA9IGV2ZW50LnN1YnNjcmliZXJzO1xuXG4gICAgICAgICAgICAvLyBQdWJsaXNoIG9uZS10aW1lIHN1YnNjcmlwdGlvbnNcbiAgICAgICAgICAgIHN1YnNjcmliZXJzLmZpbHRlcigoeyBvbmNlIH0pID0+ICEhb25jZSkuZm9yRWFjaChzdWJzY3JpYmVyID0+IHB1Ymxpc2hTdWJzY3JpcHRpb24oc3Vic2NyaWJlciwgZGF0YSkpO1xuXG4gICAgICAgICAgICAvLyByZW1vdmUgdGhlbSBmcm9tIHRoZSBzdWJzY3JpYmVyXG4gICAgICAgICAgICBldmVudC5zdWJzY3JpYmVycyA9IHN1YnNjcmliZXJzLmZpbHRlcigoeyBvbmNlIH0pID0+ICFvbmNlKTtcblxuICAgICAgICAgICAgLy8gcHVibGlzaCB0aGUgcmVzdFxuICAgICAgICAgICAgZXZlbnQuc3Vic2NyaWJlcnMuZm9yRWFjaChzdWJzY3JpYmVyID0+IHB1Ymxpc2hTdWJzY3JpcHRpb24oc3Vic2NyaWJlciwgZGF0YSkpO1xuICAgICAgICB9LFxuICAgICAgICBvbmNlOiBmdW5jdGlvbiAoZXZlbnQsIGNhbGxiYWNrLCBhc3luYykge1xuICAgICAgICAgICAgc3Vic2NyaWJlKGV2ZW50LCB7IGNhbGxiYWNrLCBhc3luYywgb25jZTogdHJ1ZSB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgdW5zdWJzY3JpYmU6IGZ1bmN0aW9uIChldmVudE5hbWUsIF9jYWxsYmFjaykge1xuICAgICAgICAgICAgaWYgKGV2ZW50TmFtZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0gZ2V0RXZlbnQoZXZlbnROYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQgJiYgX2NhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnN1YnNjcmliZXJzID0gZXZlbnQuc3Vic2NyaWJlcnMuZmlsdGVyKCh7IGNhbGxiYWNrIH0pID0+IGNhbGxiYWNrICE9PSBfY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnN1YnNjcmliZXJzID0gW107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjbGVhckV2ZW50cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbn0pKCk7XG4iLCJleHBvcnQgY2xhc3MgSW1hZ2VEZWJ1ZyB7XG4gICAgc3RhdGljIGRyYXdSZWN0KHBvcywgc2l6ZSwgY29udGV4dCwgc3R5bGUpIHtcbiAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9IHN0eWxlLmNvbG9yO1xuICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IHN0eWxlLmNvbG9yO1xuICAgICAgICBjb250ZXh0LmxpbmVXaWR0aCA9IHN0eWxlLmxpbmVXaWR0aCB8fCAxO1xuICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICBjb250ZXh0LnN0cm9rZVJlY3QocG9zLngsIHBvcy55LCBzaXplLngsIHNpemUueSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGRyYXdQYXRoKHBhdGgsIGRlZiwgY29udGV4dCwgc3R5bGUpIHtcbiAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9IHN0eWxlLmNvbG9yO1xuICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IHN0eWxlLmNvbG9yO1xuICAgICAgICBjb250ZXh0LmxpbmVXaWR0aCA9IHN0eWxlLmxpbmVXaWR0aDtcbiAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgY29udGV4dC5tb3ZlVG8ocGF0aFswXVtkZWYueF0sIHBhdGhbMF1bZGVmLnldKTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDE7IGogPCBwYXRoLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBjb250ZXh0LmxpbmVUbyhwYXRoW2pdW2RlZi54XSwgcGF0aFtqXVtkZWYueV0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgICAgIGNvbnRleHQuc3Ryb2tlKCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGRyYXdJbWFnZShpbWFnZURhdGEsIHdpZHRoLCBoZWlnaHQsIGNvbnRleHQpIHtcbiAgICAgICAgY29uc3QgY2FudmFzRGF0YSA9IGNvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICBjb25zdCBkYXRhID0gY2FudmFzRGF0YS5kYXRhO1xuICAgICAgICBsZXQgaW1hZ2VEYXRhUG9zID0gaW1hZ2VEYXRhLmxlbmd0aDtcbiAgICAgICAgbGV0IGNhbnZhc0RhdGFQb3MgPSBkYXRhLmxlbmd0aDtcblxuICAgICAgICBpZiAoY2FudmFzRGF0YVBvcyAvIGltYWdlRGF0YVBvcyAhPT0gNCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHdoaWxlIChpbWFnZURhdGFQb3MtLSkge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBpbWFnZURhdGFbaW1hZ2VEYXRhUG9zXTtcbiAgICAgICAgICAgIGRhdGFbLS1jYW52YXNEYXRhUG9zXSA9IDI1NTtcbiAgICAgICAgICAgIGRhdGFbLS1jYW52YXNEYXRhUG9zXSA9IHZhbHVlO1xuICAgICAgICAgICAgZGF0YVstLWNhbnZhc0RhdGFQb3NdID0gdmFsdWU7XG4gICAgICAgICAgICBkYXRhWy0tY2FudmFzRGF0YVBvc10gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBjb250ZXh0LnB1dEltYWdlRGF0YShjYW52YXNEYXRhLCAwLCAwKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgaHN2MnJnYiB9IGZyb20gJy4uL2NvbW1vbi9jdl91dGlscyc7XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIGJhc2ljIGltYWdlIGNvbWJpbmluZyB0aGUgZGF0YSBhbmQgc2l6ZS5cbiAqIEluIGFkZGl0aW9uLCBzb21lIG1ldGhvZHMgZm9yIG1hbmlwdWxhdGlvbiBhcmUgY29udGFpbmVkLlxuICovXG5leHBvcnQgY2xhc3MgSW1hZ2VXcmFwcGVyIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2l6ZSB7eCx5fSBUaGUgc2l6ZSBvZiB0aGUgaW1hZ2UgaW4gcGl4ZWxcbiAgICAgKiBAcGFyYW0gZGF0YSB7QXJyYXl9IElmIGdpdmVuLCBhIGZsYXQgYXJyYXkgY29udGFpbmluZyB0aGUgcGl4ZWwgZGF0YVxuICAgICAqIEBwYXJhbSBBcnJheVR5cGUge1R5cGV9IElmIGdpdmVuLCB0aGUgZGVzaXJlZCBEYXRhVHlwZSBvZiB0aGUgQXJyYXkgKG1heSBiZSB0eXBlZC9ub24tdHlwZWQpXG4gICAgICogQHBhcmFtIGluaXRpYWxpemUge0Jvb2xlYW59IEluZGljYXRpbmcgaWYgdGhlIGFycmF5IHNob3VsZCBiZSBpbml0aWFsaXplZCBvbiBjcmVhdGlvbi5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzaXplLCBkYXRhLCBBcnJheVR5cGUsIGluaXRpYWxpemUpIHtcbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGEgPSBuZXcgKEFycmF5VHlwZSB8fCBVaW50OEFycmF5KShzaXplLnggKiBzaXplLnkpO1xuXG4gICAgICAgICAgICBpZiAoaW5pdGlhbGl6ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5maWxsKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogdGVzdHMgaWYgYSBwb3NpdGlvbiBpcyB3aXRoaW4gdGhlIGltYWdlIHdpdGggYSBnaXZlbiBvZmZzZXRcbiAgICAgKiBAcGFyYW0gaW1nUmVmIHt4LCB5fSBUaGUgbG9jYXRpb24gdG8gdGVzdFxuICAgICAqIEBwYXJhbSBib3JkZXIgTnVtYmVyIHRoZSBwYWRkaW5nIHZhbHVlIGluIHBpeGVsXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaWYgbG9jYXRpb24gaW5zaWRlIHRoZSBpbWFnZSdzIGJvcmRlciwgZmFsc2Ugb3RoZXJ3aXNlXG4gICAgICogQHNlZSBjdmQvaW1hZ2UuaFxuICAgICAqL1xuICAgIGluSW1hZ2VXaXRoQm9yZGVyKGltZ1JlZiwgYm9yZGVyKSB7XG4gICAgICAgIHJldHVybiAoaW1nUmVmLnggPj0gYm9yZGVyKVxuICAgICAgICAgICAgJiYgKGltZ1JlZi55ID49IGJvcmRlcilcbiAgICAgICAgICAgICYmIChpbWdSZWYueCA8ICh0aGlzLnNpemUueCAtIGJvcmRlcikpXG4gICAgICAgICAgICAmJiAoaW1nUmVmLnkgPCAodGhpcy5zaXplLnkgLSBib3JkZXIpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuIHtJbWFnZVdyYXBwZXIpIGFuZCBjb3BpZXMgdGhlIG5lZWRlZCB1bmRlcmx5aW5nIGltYWdlLWRhdGEgYXJlYVxuICAgICAqIEBwYXJhbSBpbWFnZVdyYXBwZXIge0ltYWdlV3JhcHBlcn0gVGhlIHRhcmdldCB7SW1hZ2VXcmFwcGVyfSB3aGVyZSB0aGUgZGF0YSBzaG91bGQgYmUgY29waWVkXG4gICAgICogQHBhcmFtIGZyb21YIHtOdW1iZXJ9IFRoZSBob3Jpem9udGFsIHBvc2l0aW9uIHdoZXJlIHRvIGNvcHkgZnJvbVxuICAgICAqIEBwYXJhbSBmcm9tWSB7TnVtYmVyfSBUaGUgdmVydGljYWwgcG9zaXRpb24gd2hlcmUgdG8gY29weSBmcm9tXG4gICAgKi9cbiAgICBzdWJJbWFnZUFzQ29weShpbWFnZVdyYXBwZXIsIGZyb21YLCBmcm9tWSkge1xuICAgICAgICBjb25zdCBzaXplWSA9IGltYWdlV3JhcHBlci5zaXplLnk7XG4gICAgICAgIGNvbnN0IHNpemVYID0gaW1hZ2VXcmFwcGVyLnNpemUueDtcblxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHNpemVYOyB4KyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgc2l6ZVk7IHkrKykge1xuICAgICAgICAgICAgICAgIGltYWdlV3JhcHBlci5kYXRhW3kgKiBzaXplWCArIHhdID0gdGhpcy5kYXRhWyhmcm9tWSArIHkpICogdGhpcy5zaXplLnggKyBmcm9tWCArIHhdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0cmlldmVzIGEgZ2l2ZW4gcGl4ZWwgcG9zaXRpb24gZnJvbSB0aGUgaW1hZ2VcbiAgICAgKiBAcGFyYW0geCB7TnVtYmVyfSBUaGUgeC1wb3NpdGlvblxuICAgICAqIEBwYXJhbSB5IHtOdW1iZXJ9IFRoZSB5LXBvc2l0aW9uXG4gICAgICogQHJldHVybnMge051bWJlcn0gVGhlIGdyYXlzY2FsZSB2YWx1ZSBhdCB0aGUgcGl4ZWwtcG9zaXRpb25cbiAgICAgKi9cbiAgICBnZXQoeCwgeSkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhW3kgKiB0aGlzLnNpemUueCArIHhdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgYSBnaXZlbiBwaXhlbCBwb3NpdGlvbiBpbiB0aGUgaW1hZ2VcbiAgICAgKiBAcGFyYW0geCB7TnVtYmVyfSBUaGUgeC1wb3NpdGlvblxuICAgICAqIEBwYXJhbSB5IHtOdW1iZXJ9IFRoZSB5LXBvc2l0aW9uXG4gICAgICogQHBhcmFtIHZhbHVlIHtOdW1iZXJ9IFRoZSBncmF5c2NhbGUgdmFsdWUgdG8gc2V0XG4gICAgICogQHJldHVybnMge0ltYWdlV3JhcHBlcn0gVGhlIEltYWdlIGl0c2VsZiAoZm9yIHBvc3NpYmxlIGNoYWluaW5nKVxuICAgICAqL1xuICAgIHNldCh4LCB5LCB2YWx1ZSkge1xuICAgICAgICB0aGlzLmRhdGFbeSAqIHRoaXMuc2l6ZS54ICsgeF0gPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgYm9yZGVyIG9mIHRoZSBpbWFnZSAoMSBwaXhlbCkgdG8gemVyb1xuICAgICAqL1xuICAgIHplcm9Cb3JkZXIoKSB7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy5zaXplLng7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuc2l6ZS55O1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd2lkdGg7IGkrKykge1xuICAgICAgICAgICAgZGF0YVtpXSA9IGRhdGFbKGhlaWdodCAtIDEpICogd2lkdGggKyBpXSA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGhlaWdodCAtIDE7IGkrKykge1xuICAgICAgICAgICAgZGF0YVtpICogd2lkdGhdID0gZGF0YVtpICogd2lkdGggKyAod2lkdGggLSAxKV0gPSAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW52ZXJ0cyBhIGJpbmFyeSBpbWFnZSBpbiBwbGFjZVxuICAgICAqL1xuICAgIGludmVydCgpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YTtcblxuICAgICAgICBmb3IgKGxldCBpID0gZGF0YS5sZW5ndGg7IGktLTspIHtcbiAgICAgICAgICAgIGRhdGFbaV0gPSBkYXRhW2ldID8gMCA6IDE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtb21lbnRzKGxhYmVsQ291bnQpIHtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5zaXplLnk7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy5zaXplLng7XG4gICAgICAgIGNvbnN0IGxhYmVsU3VtID0gW107XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuXG4gICAgICAgIGlmIChsYWJlbENvdW50IDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxhYmVsQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgbGFiZWxTdW1baV0gPSB7XG4gICAgICAgICAgICAgICAgbTAwOiAwLFxuICAgICAgICAgICAgICAgIG0wMTogMCxcbiAgICAgICAgICAgICAgICBtMTA6IDAsXG4gICAgICAgICAgICAgICAgbTExOiAwLFxuICAgICAgICAgICAgICAgIG0wMjogMCxcbiAgICAgICAgICAgICAgICBtMjA6IDAsXG4gICAgICAgICAgICAgICAgdGhldGE6IDAsXG4gICAgICAgICAgICAgICAgcmFkOiAwXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBoZWlnaHQ7IHkrKykge1xuICAgICAgICAgICAgY29uc3QgeXNxID0geSAqIHk7XG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHdpZHRoOyB4KyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWwgPSB0aGlzLmRhdGFbeSAqIHdpZHRoICsgeF07XG4gICAgICAgICAgICAgICAgaWYgKHZhbCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBsYWJlbFN1bVt2YWwgLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwubTAwICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsLm0wMSArPSB5O1xuICAgICAgICAgICAgICAgICAgICBsYWJlbC5tMTAgKz0geDtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwubTExICs9IHggKiB5O1xuICAgICAgICAgICAgICAgICAgICBsYWJlbC5tMDIgKz0geXNxO1xuICAgICAgICAgICAgICAgICAgICBsYWJlbC5tMjAgKz0geCAqIHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgUEkgPSBNYXRoLlBJO1xuICAgICAgICBjb25zdCBQSV80ID0gUEkgLyA0O1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGFiZWxDb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBsYWJlbCA9IGxhYmVsU3VtW2ldO1xuICAgICAgICAgICAgaWYgKCFpc05hTihsYWJlbC5tMDApICYmIGxhYmVsLm0wMCAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHhfID0gbGFiZWwubTEwIC8gbGFiZWwubTAwO1xuICAgICAgICAgICAgICAgIGNvbnN0IHlfID0gbGFiZWwubTAxIC8gbGFiZWwubTAwO1xuICAgICAgICAgICAgICAgIGNvbnN0IG11MTEgPSBsYWJlbC5tMTEgLyBsYWJlbC5tMDAgLSB4XyAqIHlfO1xuICAgICAgICAgICAgICAgIGNvbnN0IG11MDIgPSBsYWJlbC5tMDIgLyBsYWJlbC5tMDAgLSB5XyAqIHlfO1xuICAgICAgICAgICAgICAgIGNvbnN0IG11MjAgPSBsYWJlbC5tMjAgLyBsYWJlbC5tMDAgLSB4XyAqIHhfO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRtcCA9IDAuNSAqIE1hdGguYXRhbigobXUwMiAtIG11MjApIC8gKDIgKiBtdTExKSkgKyAobXUxMSA+PSAwID8gUElfNCA6IC1QSV80KSArIFBJO1xuICAgICAgICAgICAgICAgIGxhYmVsLnRoZXRhID0gKHRtcCAqIDE4MCAvIFBJICsgOTApICUgMTgwIC0gOTA7XG4gICAgICAgICAgICAgICAgaWYgKGxhYmVsLnRoZXRhIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbC50aGV0YSArPSAxODA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxhYmVsLnJhZCA9IHRtcCA+IFBJID8gdG1wIC0gUEkgOiB0bXA7XG4gICAgICAgICAgICAgICAgbGFiZWwueCA9IE1hdGguY29zKHRtcCk7XG4gICAgICAgICAgICAgICAgbGFiZWwueSA9IE1hdGguc2luKHRtcCk7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gobGFiZWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEaXNwbGF5cyB0aGUge0ltYWdlV3JhcHBlcn0gaW4gYSBnaXZlbiBjYW52YXNcbiAgICAgKiBAcGFyYW0gY2FudmFzIHtDYW52YXN9IFRoZSBjYW52YXMgZWxlbWVudCB0byB3cml0ZSB0b1xuICAgICAqIEBwYXJhbSBzY2FsZSB7TnVtYmVyfSBTY2FsZSB3aGljaCBpcyBhcHBsaWVkIHRvIGVhY2ggcGl4ZWwtdmFsdWVcbiAgICAgKi9cbiAgICBzaG93KGNhbnZhcywgc2NhbGUpIHtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5zaXplLnk7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy5zaXplLng7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIGNvbnN0IGZyYW1lID0gY29udGV4dC5nZXRJbWFnZURhdGEoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBmcmFtZS5kYXRhO1xuICAgICAgICBsZXQgY3VycmVudCA9IDA7XG5cbiAgICAgICAgaWYgKCFzY2FsZSkge1xuICAgICAgICAgICAgc2NhbGUgPSAxLjA7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGhlaWdodDsgeSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHdpZHRoOyB4KyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwaXhlbCA9IHkgKiB3aWR0aCArIHg7XG4gICAgICAgICAgICAgICAgY3VycmVudCA9IHRoaXMuZ2V0KHgsIHkpICogc2NhbGU7XG4gICAgICAgICAgICAgICAgZGF0YVtwaXhlbCAqIDQgKyAwXSA9IGN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgZGF0YVtwaXhlbCAqIDQgKyAxXSA9IGN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgZGF0YVtwaXhlbCAqIDQgKyAyXSA9IGN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgZGF0YVtwaXhlbCAqIDQgKyAzXSA9IDI1NTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vZnJhbWUuZGF0YSA9IGRhdGE7XG4gICAgICAgIGNvbnRleHQucHV0SW1hZ2VEYXRhKGZyYW1lLCAwLCAwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEaXNwbGF5cyB0aGUgcGFydCBvZiB0aGUgaW1hZ2UgaW4gYSBnaXZlbiBjYW52YXNcbiAgICAgKiBAcGFyYW0gY2FudmFzIHtDYW52YXN9IFRoZSBjYW52YXMgZWxlbWVudCB0byB3cml0ZSB0b1xuICAgICAqIEBwYXJhbSBzY2FsZSB7TnVtYmVyfSBTY2FsZSB3aGljaCBpcyBhcHBsaWVkIHRvIGVhY2ggcGl4ZWwtdmFsdWVcbiAgICAgKiBAcGFyYW0gZnJvbVgge051bWJlcn0gVGhlIGhvcml6b250YWwgcG9zaXRpb24gd2hlcmUgdG8gb3ZlcmxheSBmcm9tXG4gICAgICogQHBhcmFtIGZyb21ZIHtOdW1iZXJ9IFRoZSB2ZXJ0aWNhbCBwb3NpdGlvbiB3aGVyZSB0byBvdmVybGF5IGZyb21cbiAgICAgKi9cbiAgICBvdmVybGF5KGNhbnZhcywgc2NhbGUsIGZyb21YLCBmcm9tWSkge1xuICAgICAgICBjb25zdCBoc3YgPSBbMCwgMSwgMV07XG4gICAgICAgIGNvbnN0IHdoaXRlUmdiID0gWzI1NSwgMjU1LCAyNTVdO1xuICAgICAgICBjb25zdCBibGFja1JnYiA9IFswLCAwLCAwXTtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICBjb25zdCBmcmFtZSA9IGNvbnRleHQuZ2V0SW1hZ2VEYXRhKGZyb21YLCBmcm9tWSwgdGhpcy5zaXplLngsIHRoaXMuc2l6ZS55KTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGZyYW1lLmRhdGE7XG5cbiAgICAgICAgaWYgKCFzY2FsZSB8fCBzY2FsZSA8IDAgfHwgc2NhbGUgPiAzNjApIHtcbiAgICAgICAgICAgIHNjYWxlID0gMzYwO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgbGVuZ3RoID0gdGhpcy5kYXRhLmxlbmd0aDsgbGVuZ3RoLS07KSB7XG4gICAgICAgICAgICBoc3ZbMF0gPSB0aGlzLmRhdGFbbGVuZ3RoXSAqIHNjYWxlO1xuICAgICAgICAgICAgY29uc3QgcmdiID0gaHN2WzBdIDw9IDAgPyB3aGl0ZVJnYiA6IGhzdlswXSA+PSAzNjAgPyBibGFja1JnYiA6IGhzdjJyZ2IoaHN2KTtcbiAgICAgICAgICAgIGRhdGFbbGVuZ3RoICogNCArIDBdID0gcmdiWzBdO1xuICAgICAgICAgICAgZGF0YVtsZW5ndGggKiA0ICsgMV0gPSByZ2JbMV07XG4gICAgICAgICAgICBkYXRhW2xlbmd0aCAqIDQgKyAyXSA9IHJnYlsyXTtcbiAgICAgICAgICAgIGRhdGFbbGVuZ3RoICogNCArIDNdID0gMjU1O1xuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5wdXRJbWFnZURhdGEoZnJhbWUsIGZyb21YLCBmcm9tWSk7XG4gICAgfVxufVxuIiwiXG5leHBvcnQgZnVuY3Rpb24gZW51bWVyYXRlRGV2aWNlcygpIHtcbiAgICBpZiAobmF2aWdhdG9yLm1lZGlhRGV2aWNlcyAmJiB0eXBlb2YgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5lbnVtZXJhdGVEZXZpY2VzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmVudW1lcmF0ZURldmljZXMoKTtcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcignZW51bWVyYXRlRGV2aWNlcyBpcyBub3QgZGVmaW5lZCcpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVzZXJNZWRpYShjb25zdHJhaW50cykge1xuICAgIGlmIChuYXZpZ2F0b3IubWVkaWFEZXZpY2VzICYmIHR5cGVvZiBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoY29uc3RyYWludHMpO1xuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdnZXRVc2VyTWVkaWEgaXMgbm90IGRlZmluZWQnKSk7XG59XG4iLCIvKipcbiAqIFBlcmZvcm1zIGEgZGVlcCBtZXJnZSBvZiBvYmplY3RzIGFuZCByZXR1cm5zIG5ldyBvYmplY3QuXG4gKiBEb2VzIG5vdCBtb2RpZnkgb2JqZWN0cyAoaW1tdXRhYmxlKS5cbiAqIEBzZWUgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzQ4MjE4MjA5XG4gKlxuICogQHBhcmFtIHsuLi5vYmplY3R9IG9iamVjdHMgLSBPYmplY3RzIHRvIG1lcmdlXG4gKiBAcmV0dXJucyB7b2JqZWN0fSBOZXcgb2JqZWN0IHdpdGggbWVyZ2VkIGtleS92YWx1ZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlKC4uLm9iamVjdHMpIHtcbiAgICBjb25zdCBpc09iamVjdCA9IG9iaiA9PiBvYmogJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCc7XG5cbiAgICByZXR1cm4gb2JqZWN0cy5yZWR1Y2UoKHByZXYsIG9iaikgPT4ge1xuICAgICAgICBpZiAob2JqKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwVmFsID0gcHJldltrZXldO1xuICAgICAgICAgICAgICAgIGNvbnN0IG9WYWwgPSBvYmpba2V5XTtcblxuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHBWYWwpICYmIEFycmF5LmlzQXJyYXkob1ZhbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gcHJldltrZXldID0gcFZhbC5jb25jYXQoLi4ub1ZhbCk7XG4gICAgICAgICAgICAgICAgICAgIHByZXZba2V5XSA9IG9WYWw7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpc09iamVjdChwVmFsKSAmJiBpc09iamVjdChvVmFsKSkge1xuICAgICAgICAgICAgICAgICAgICBwcmV2W2tleV0gPSBtZXJnZShwVmFsLCBvVmFsKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwcmV2W2tleV0gPSBvVmFsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHByZXY7XG4gICAgfSwge30pO1xufSIsIi8qKlxuICogdHlwZWRlZnMuanNcbiAqIE5vcm1hbGl6ZXMgYnJvd3Nlci1zcGVjaWZpYyBwcmVmaXhlc1xuICovXG5cbmlmICghTWF0aC5pbXVsKSB7XG4gICAgTWF0aC5pbXVsID0gZnVuY3Rpb24gKG9wQSwgb3BCKSB7XG4gICAgICAgIG9wQiB8PSAwOyAvLyBlbnN1cmUgdGhhdCBvcEIgaXMgYW4gaW50ZWdlci4gb3BBIHdpbGwgYXV0b21hdGljYWxseSBiZSBjb2VyY2VkLlxuICAgICAgICAvLyBmbG9hdGluZyBwb2ludHMgZ2l2ZSB1cyA1MyBiaXRzIG9mIHByZWNpc2lvbiB0byB3b3JrIHdpdGggcGx1cyAxIHNpZ24gYml0XG4gICAgICAgIC8vIGF1dG9tYXRpY2FsbHkgaGFuZGxlZCBmb3Igb3VyIGNvbnZpZW5lbmNlOlxuICAgICAgICAvLyAxLiAweDAwM2ZmZmZmIC8qb3BBICYgMHgwMDBmZmZmZiovICogMHg3ZmZmZmZmZiAvKm9wQiovID0gMHgxZmZmZmY3ZmMwMDAwMVxuICAgICAgICAvLyAgICAweDFmZmZmZjdmYzAwMDAxIDwgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIgLyoweDFmZmZmZmZmZmZmZmZmKi9cbiAgICAgICAgbGV0IHJlc3VsdCA9IChvcEEgJiAweDAwM2ZmZmZmKSAqIG9wQjtcbiAgICAgICAgLy8gMi4gV2UgY2FuIHJlbW92ZSBhbiBpbnRlZ2VyIGNvZXJzaW9uIGZyb20gdGhlIHN0YXRlbWVudCBhYm92ZSBiZWNhdXNlOlxuICAgICAgICAvLyAgICAweDFmZmZmZjdmYzAwMDAxICsgMHhmZmMwMDAwMCA9IDB4MWZmZmZmZmY4MDAwMDFcbiAgICAgICAgLy8gICAgMHgxZmZmZmZmZjgwMDAwMSA8IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSIC8qMHgxZmZmZmZmZmZmZmZmZiovXG4gICAgICAgIGlmIChvcEEgJiAweGZmYzAwMDAwIC8qIT09IDAqLykge1xuICAgICAgICAgICAgcmVzdWx0ICs9IChvcEEgJiAweGZmYzAwMDAwKSAqIG9wQiB8IDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdCB8IDA7XG4gICAgfTtcbn1cbiIsImV4cG9ydCBjb25zdCBjb25maWcgPSB7XG4gICAgaW5wdXRTdHJlYW06IHtcbiAgICAgICAgbmFtZTogXCJMaXZlXCIsXG4gICAgICAgIHR5cGU6IFwiTGl2ZVN0cmVhbVwiLFxuICAgICAgICBjb25zdHJhaW50czoge1xuICAgICAgICAgICAgd2lkdGg6IDY0MCxcbiAgICAgICAgICAgIGhlaWdodDogNDgwLFxuICAgICAgICAgICAgLy8gYXNwZWN0UmF0aW86IDY0MC80ODAsIC8vIG9wdGlvbmFsXG4gICAgICAgICAgICBmYWNpbmdNb2RlOiBcImVudmlyb25tZW50XCIgLy8gb3IgdXNlclxuICAgICAgICAgICAgLy8gZGV2aWNlSWQ6IFwiMzg3NDU5ODM0NTczODc1OTgzNzU5ODM3NTk4MzRcIlxuICAgICAgICB9LFxuICAgICAgICBhcmVhOiB7XG4gICAgICAgICAgICB0b3A6IFwiMCVcIixcbiAgICAgICAgICAgIHJpZ2h0OiBcIjAlXCIsXG4gICAgICAgICAgICBsZWZ0OiBcIjAlXCIsXG4gICAgICAgICAgICBib3R0b206IFwiMCVcIlxuICAgICAgICB9LFxuICAgICAgICBzaW5nbGVDaGFubmVsOiBmYWxzZSAvLyB0cnVlOiBvbmx5IHRoZSByZWQgY29sb3ItY2hhbm5lbCBpcyByZWFkXG4gICAgfSxcbiAgICBsb2NhdGU6IHRydWUsXG4gICAgbnVtT2ZXb3JrZXJzOiAwLFxuICAgIGRlY29kZXI6IHtcbiAgICAgICAgcmVhZGVyczogW1xuICAgICAgICAgICAgJ2NvZGVfMTI4X3JlYWRlcidcbiAgICAgICAgXSxcbiAgICAgICAgZGVidWc6IHtcbiAgICAgICAgICAgIGRyYXdCb3VuZGluZ0JveDogZmFsc2UsXG4gICAgICAgICAgICBzaG93RnJlcXVlbmN5OiBmYWxzZSxcbiAgICAgICAgICAgIGRyYXdTY2FubGluZTogZmFsc2UsXG4gICAgICAgICAgICBzaG93UGF0dGVybjogZmFsc2VcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbG9jYXRvcjoge1xuICAgICAgICBoYWxmU2FtcGxlOiB0cnVlLFxuICAgICAgICBwYXRjaFNpemU6IFwibWVkaXVtXCIsIC8vIHgtc21hbGwsIHNtYWxsLCBtZWRpdW0sIGxhcmdlLCB4LWxhcmdlXG4gICAgICAgIGRlYnVnOiB7XG4gICAgICAgICAgICBzaG93Q2FudmFzOiBmYWxzZSxcbiAgICAgICAgICAgIHNob3dQYXRjaGVzOiBmYWxzZSxcbiAgICAgICAgICAgIHNob3dGb3VuZFBhdGNoZXM6IGZhbHNlLFxuICAgICAgICAgICAgc2hvd1NrZWxldG9uOiBmYWxzZSxcbiAgICAgICAgICAgIHNob3dMYWJlbHM6IGZhbHNlLFxuICAgICAgICAgICAgc2hvd1BhdGNoTGFiZWxzOiBmYWxzZSxcbiAgICAgICAgICAgIHNob3dSZW1haW5pbmdQYXRjaExhYmVsczogZmFsc2UsXG4gICAgICAgICAgICBib3hGcm9tUGF0Y2hlczoge1xuICAgICAgICAgICAgICAgIHNob3dUcmFuc2Zvcm1lZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2hvd1RyYW5zZm9ybWVkQm94OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzaG93QkI6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuIiwiaW1wb3J0IEJyZXNlbmhhbSBmcm9tICcuL2JyZXNlbmhhbSc7XG5pbXBvcnQgeyBJbWFnZURlYnVnIH0gZnJvbSAnLi4vY29tbW9uL2ltYWdlX2RlYnVnJztcbmltcG9ydCB7IENvZGUxMjhSZWFkZXIgfSBmcm9tICcuLi9yZWFkZXIvY29kZV8xMjhfcmVhZGVyJztcbmltcG9ydCB7IENvZGUzOVJlYWRlciB9IGZyb20gJy4uL3JlYWRlci9jb2RlXzM5X3JlYWRlcic7XG5pbXBvcnQgeyBDb2RlMzlWSU5SZWFkZXIgfSBmcm9tICcuLi9yZWFkZXIvY29kZV8zOV92aW5fcmVhZGVyJztcbmltcG9ydCB7IENvZGFiYXJSZWFkZXIgfSBmcm9tICcuLi9yZWFkZXIvY29kYWJhcl9yZWFkZXInO1xuaW1wb3J0IHsgRUFOUmVhZGVyIH0gZnJvbSAnLi4vcmVhZGVyL2Vhbl9yZWFkZXInO1xuaW1wb3J0IHsgRUFOOFJlYWRlciB9IGZyb20gJy4uL3JlYWRlci9lYW5fOF9yZWFkZXInO1xuaW1wb3J0IHsgRUFOMlJlYWRlciB9IGZyb20gJy4uL3JlYWRlci9lYW5fMl9yZWFkZXInO1xuaW1wb3J0IHsgRUFONVJlYWRlciB9IGZyb20gJy4uL3JlYWRlci9lYW5fNV9yZWFkZXInO1xuaW1wb3J0IHsgVVBDUmVhZGVyIH0gZnJvbSAnLi4vcmVhZGVyL3VwY19yZWFkZXInO1xuaW1wb3J0IHsgVVBDRVJlYWRlciB9IGZyb20gJy4uL3JlYWRlci91cGNfZV9yZWFkZXInO1xuaW1wb3J0IHsgSTJvZjVSZWFkZXIgfSBmcm9tICcuLi9yZWFkZXIvaTJvZjVfcmVhZGVyJztcbmltcG9ydCB7IFR3b09mRml2ZVJlYWRlciB9IGZyb20gJy4uL3JlYWRlci8yb2Y1X3JlYWRlcic7XG5pbXBvcnQgeyBDb2RlOTNSZWFkZXIgfSBmcm9tICcuLi9yZWFkZXIvY29kZV85M19yZWFkZXInO1xuXG5jb25zdCBSRUFERVJTID0ge1xuICAgIGNvZGVfMTI4X3JlYWRlcjogQ29kZTEyOFJlYWRlcixcbiAgICBlYW5fcmVhZGVyOiBFQU5SZWFkZXIsXG4gICAgZWFuXzVfcmVhZGVyOiBFQU41UmVhZGVyLFxuICAgIGVhbl8yX3JlYWRlcjogRUFOMlJlYWRlcixcbiAgICBlYW5fOF9yZWFkZXI6IEVBTjhSZWFkZXIsXG4gICAgY29kZV8zOV9yZWFkZXI6IENvZGUzOVJlYWRlcixcbiAgICBjb2RlXzM5X3Zpbl9yZWFkZXI6IENvZGUzOVZJTlJlYWRlcixcbiAgICBjb2RhYmFyX3JlYWRlcjogQ29kYWJhclJlYWRlcixcbiAgICB1cGNfcmVhZGVyOiBVUENSZWFkZXIsXG4gICAgdXBjX2VfcmVhZGVyOiBVUENFUmVhZGVyLFxuICAgIGkyb2Y1X3JlYWRlcjogSTJvZjVSZWFkZXIsXG4gICAgJzJvZjVfcmVhZGVyJzogVHdvT2ZGaXZlUmVhZGVyLFxuICAgIGNvZGVfOTNfcmVhZGVyOiBDb2RlOTNSZWFkZXJcbn07XG5cbmV4cG9ydCBjbGFzcyBCYXJjb2RlRGVjb2RlciB7XG4gICAgY29uc3RydWN0b3IoY29uZmlnLCBpbnB1dEltYWdlV3JhcHBlcikge1xuICAgICAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG4gICAgICAgIHRoaXMuX2lucHV0SW1hZ2VXcmFwcGVyID0gaW5wdXRJbWFnZVdyYXBwZXI7XG4gICAgICAgIHRoaXMuX2NhbnZhcyA9IHtcbiAgICAgICAgICAgIGN0eDoge1xuICAgICAgICAgICAgICAgIGZyZXF1ZW5jeTogbnVsbCxcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBudWxsLFxuICAgICAgICAgICAgICAgIG92ZXJsYXk6IG51bGxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkb206IHtcbiAgICAgICAgICAgICAgICBmcmVxdWVuY3k6IG51bGwsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogbnVsbCxcbiAgICAgICAgICAgICAgICBvdmVybGF5OiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2JhcmNvZGVSZWFkZXJzID0gW107XG5cbiAgICAgICAgdGhpcy5faW5pdENhbnZhcygpO1xuICAgICAgICB0aGlzLl9pbml0UmVhZGVycygpO1xuICAgICAgICB0aGlzLl9pbml0Q29uZmlnKCk7XG4gICAgfVxuXG4gICAgX2luaXRDYW52YXMoKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGNvbnN0IGRlYnVnRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RlYnVnLmRldGVjdGlvbicpO1xuICAgICAgICAgICAgdGhpcy5fY2FudmFzLmRvbS5mcmVxdWVuY3kgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjYW52YXMuZnJlcXVlbmN5Jyk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX2NhbnZhcy5kb20uZnJlcXVlbmN5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2FudmFzLmRvbS5mcmVxdWVuY3kgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9jYW52YXMuZG9tLmZyZXF1ZW5jeS5jbGFzc05hbWUgPSAnZnJlcXVlbmN5JztcbiAgICAgICAgICAgICAgICBpZiAoZGVidWdEaXYpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVidWdEaXYuYXBwZW5kQ2hpbGQodGhpcy5fY2FudmFzLmRvbS5mcmVxdWVuY3kpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2NhbnZhcy5jdHguZnJlcXVlbmN5ID0gdGhpcy5fY2FudmFzLmRvbS5mcmVxdWVuY3kuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAgICAgICAgICAgdGhpcy5fY2FudmFzLmRvbS5wYXR0ZXJuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FudmFzLnBhdHRlcm5CdWZmZXInKTtcbiAgICAgICAgICAgIGlmICghdGhpcy5fY2FudmFzLmRvbS5wYXR0ZXJuKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2FudmFzLmRvbS5wYXR0ZXJuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2FudmFzLmRvbS5wYXR0ZXJuLmNsYXNzTmFtZSA9ICdwYXR0ZXJuQnVmZmVyJztcbiAgICAgICAgICAgICAgICBpZiAoZGVidWdEaXYpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVidWdEaXYuYXBwZW5kQ2hpbGQodGhpcy5fY2FudmFzLmRvbS5wYXR0ZXJuKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9jYW52YXMuY3R4LnBhdHRlcm4gPSB0aGlzLl9jYW52YXMuZG9tLnBhdHRlcm4uZ2V0Q29udGV4dCgnMmQnKTtcblxuICAgICAgICAgICAgdGhpcy5fY2FudmFzLmRvbS5vdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FudmFzLmRyYXdpbmdCdWZmZXInKTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9jYW52YXMuZG9tLm92ZXJsYXkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jYW52YXMuY3R4Lm92ZXJsYXkgPSB0aGlzLl9jYW52YXMuZG9tLm92ZXJsYXkuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9pbml0UmVhZGVycygpIHtcbiAgICAgICAgdGhpcy5fY29uZmlnLnJlYWRlcnMuZm9yRWFjaChyZWFkZXJDb25maWcgPT4ge1xuICAgICAgICAgICAgbGV0IHJlYWRlcjtcbiAgICAgICAgICAgIGxldCBjb25maWd1cmF0aW9uID0ge307XG4gICAgICAgICAgICBsZXQgc3VwcGxlbWVudHMgPSBbXTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiByZWFkZXJDb25maWcgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgcmVhZGVyID0gcmVhZGVyQ29uZmlnLmZvcm1hdDtcbiAgICAgICAgICAgICAgICBjb25maWd1cmF0aW9uID0gcmVhZGVyQ29uZmlnLmNvbmZpZyB8fCB7fTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHJlYWRlckNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICByZWFkZXIgPSByZWFkZXJDb25maWc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0JlZm9yZSByZWdpc3RlcmluZyByZWFkZXI6JywgcmVhZGVyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24uc3VwcGxlbWVudHMpIHtcbiAgICAgICAgICAgICAgICBzdXBwbGVtZW50cyA9IGNvbmZpZ3VyYXRpb24uc3VwcGxlbWVudHMubWFwKHN1cHBsZW1lbnQgPT4gbmV3IFJFQURFUlNbc3VwcGxlbWVudF0oKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX2JhcmNvZGVSZWFkZXJzLnB1c2gobmV3IFJFQURFUlNbcmVhZGVyXShjb25maWd1cmF0aW9uLCBzdXBwbGVtZW50cykpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1JlZ2lzdGVyZWQgUmVhZGVyczonLFxuICAgICAgICAgICAgICAgIC4uLnRoaXMuX2JhcmNvZGVSZWFkZXJzLm1hcCgoeyBjb25maWcsIEZPUk1BVCB9KSA9PiBKU09OLnN0cmluZ2lmeSh7IGNvbmZpZywgRk9STUFUIH0pKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfaW5pdENvbmZpZygpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdGhpcy5fY29uZmlnLmRlYnVnICYmIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHRoaXMuX2NhbnZhcy5kb20uZnJlcXVlbmN5LnN0eWxlLmRpc3BsYXkgPSB0aGlzLl9jb25maWcuZGVidWcuc2hvd0ZyZXF1ZW5jeSA/ICdibG9jaycgOiAnbm9uZSc7XG4gICAgICAgICAgICB0aGlzLl9jYW52YXMuZG9tLnBhdHRlcm4uc3R5bGUuZGlzcGxheSA9IHRoaXMuX2NvbmZpZy5kZWJ1Zy5zaG93UGF0dGVybiA/ICdibG9jaycgOiAnbm9uZSc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBleHRlbmQgdGhlIGxpbmUgb24gYm90aCBlbmRzXG4gICAgICogQHBhcmFtIHtBcnJheX0gbGluZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBhbmdsZVxuICAgICAqL1xuICAgIF9nZXRFeHRlbmRlZExpbmUobGluZSwgYW5nbGUpIHtcbiAgICAgICAgZnVuY3Rpb24gZXh0ZW5kTGluZShhbW91bnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGV4dGVuc2lvbiA9IHtcbiAgICAgICAgICAgICAgICB5OiBhbW91bnQgKiBNYXRoLnNpbihhbmdsZSksXG4gICAgICAgICAgICAgICAgeDogYW1vdW50ICogTWF0aC5jb3MoYW5nbGUpXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBsaW5lWzBdLnkgLT0gZXh0ZW5zaW9uLnk7XG4gICAgICAgICAgICBsaW5lWzBdLnggLT0gZXh0ZW5zaW9uLng7XG4gICAgICAgICAgICBsaW5lWzFdLnkgKz0gZXh0ZW5zaW9uLnk7XG4gICAgICAgICAgICBsaW5lWzFdLnggKz0gZXh0ZW5zaW9uLng7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBsaW5lTGVuZ3RoID0gTWF0aC5zcXJ0KChsaW5lWzFdLnkgLSBsaW5lWzBdLnkpICoqIDIgKyAobGluZVsxXS54IC0gbGluZVswXS54KSAqKiAyKTtcbiAgICAgICAgbGV0IGV4dGVuc2lvbkxlbmd0aCA9IGxpbmVMZW5ndGggKiAwLjEgfCAwO1xuXG4gICAgICAgIGV4dGVuZExpbmUoZXh0ZW5zaW9uTGVuZ3RoKTtcblxuICAgICAgICAvLyBjaGVjayBpZiBpbnNpZGUgaW1hZ2VcbiAgICAgICAgd2hpbGUgKGV4dGVuc2lvbkxlbmd0aCA+IDEgJiYgKCF0aGlzLl9pbnB1dEltYWdlV3JhcHBlci5pbkltYWdlV2l0aEJvcmRlcihsaW5lWzBdLCAwKVxuICAgICAgICAgICAgfHwgIXRoaXMuX2lucHV0SW1hZ2VXcmFwcGVyLmluSW1hZ2VXaXRoQm9yZGVyKGxpbmVbMV0sIDApKSkge1xuICAgICAgICAgICAgZXh0ZW5zaW9uTGVuZ3RoID4+PSAxO1xuICAgICAgICAgICAgZXh0ZW5kTGluZSgtZXh0ZW5zaW9uTGVuZ3RoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBsaW5lO1xuICAgIH1cblxuICAgIF9nZXRMaW5lKGJveCkge1xuICAgICAgICByZXR1cm4gW3tcbiAgICAgICAgICAgIHg6IChib3hbMV0ueCArIGJveFswXS54KSAvIDIsXG4gICAgICAgICAgICB5OiAoYm94WzFdLnkgKyBib3hbMF0ueSkgLyAyXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHg6IChib3hbM10ueCArIGJveFsyXS54KSAvIDIsXG4gICAgICAgICAgICB5OiAoYm94WzNdLnkgKyBib3hbMl0ueSkgLyAyXG4gICAgICAgIH1dO1xuICAgIH1cblxuICAgIF90cnlEZWNvZGUobGluZSkge1xuICAgICAgICBjb25zdCBiYXJjb2RlTGluZSA9IEJyZXNlbmhhbS5nZXRCYXJjb2RlTGluZSh0aGlzLl9pbnB1dEltYWdlV3JhcHBlciwgbGluZVswXSwgbGluZVsxXSk7XG5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdGhpcy5fY29uZmlnLmRlYnVnICYmIHRoaXMuX2NvbmZpZy5kZWJ1Zy5zaG93RnJlcXVlbmN5KSB7XG4gICAgICAgICAgICBJbWFnZURlYnVnLmRyYXdQYXRoKGxpbmUsIHsgeDogJ3gnLCB5OiAneScgfSwgdGhpcy5fY2FudmFzLmN0eC5vdmVybGF5LCB7IGNvbG9yOiAncmVkJywgbGluZVdpZHRoOiAzIH0pO1xuICAgICAgICAgICAgQnJlc2VuaGFtLmRlYnVnLnByaW50RnJlcXVlbmN5KGJhcmNvZGVMaW5lLmxpbmUsIHRoaXMuX2NhbnZhcy5kb20uZnJlcXVlbmN5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIEJyZXNlbmhhbS50b0JpbmFyeUxpbmUoYmFyY29kZUxpbmUpO1xuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuX2NvbmZpZy5kZWJ1ZyAmJiB0aGlzLl9jb25maWcuZGVidWcuc2hvd1BhdHRlcm4pIHtcbiAgICAgICAgICAgIEJyZXNlbmhhbS5kZWJ1Zy5wcmludFBhdHRlcm4oYmFyY29kZUxpbmUubGluZSwgdGhpcy5fY2FudmFzLmRvbS5wYXR0ZXJuKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fYmFyY29kZVJlYWRlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNvZGVSZXN1bHQgPSB0aGlzLl9iYXJjb2RlUmVhZGVyc1tpXS5kZWNvZGVQYXR0ZXJuKGJhcmNvZGVMaW5lLmxpbmUpO1xuICAgICAgICAgICAgaWYgKGNvZGVSZXN1bHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBjb2RlUmVzdWx0LFxuICAgICAgICAgICAgICAgICAgICBiYXJjb2RlTGluZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCBzbGljZXMgdGhlIGdpdmVuIGFyZWEgYXBhcnQgYW5kIHRyaWVzIHRvIGRldGVjdCBhIGJhcmNvZGUtcGF0dGVybiBmb3IgZWFjaCBzbGljZS5cbiAgICAgKiBJdCByZXR1cm5zIHRoZSBkZWNvZGVkIGJhcmNvZGUsIG9yIG51bGwgaWYgbm90aGluZyB3YXMgZm91bmRcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBib3hcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBsaW5lXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGxpbmVBbmdsZVxuICAgICAqL1xuICAgIF90cnlEZWNvZGVCcnV0ZUZvcmNlKGJveCwgbGluZSwgbGluZUFuZ2xlKSB7XG4gICAgICAgIGNvbnN0IHNpZGVMZW5ndGggPSBNYXRoLnNxcnQoKGJveFsxXS54IC0gYm94WzBdLngpICoqIDIgKyAoYm94WzFdLnkgLSBib3hbMF0ueSkgKiogMik7XG4gICAgICAgIGNvbnN0IHNsaWNlcyA9IDE2O1xuICAgICAgICBjb25zdCB4ZGlyID0gTWF0aC5zaW4obGluZUFuZ2xlKTtcbiAgICAgICAgY29uc3QgeWRpciA9IE1hdGguY29zKGxpbmVBbmdsZSk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBzbGljZXM7IGkrKykge1xuICAgICAgICAgICAgLy8gbW92ZSBsaW5lIHBlcnBlbmRpY3VsYXIgdG8gYW5nbGVcbiAgICAgICAgICAgIGNvbnN0IGRpciA9IHNpZGVMZW5ndGggLyBzbGljZXMgKiBpICogKGkgJSAyID09PSAwID8gLTEgOiAxKTtcbiAgICAgICAgICAgIGxpbmVbMF0ueSArPSBkaXIgKiB4ZGlyO1xuICAgICAgICAgICAgbGluZVswXS54IC09IGRpciAqIHlkaXI7XG4gICAgICAgICAgICBsaW5lWzFdLnkgKz0gZGlyICogeGRpcjtcbiAgICAgICAgICAgIGxpbmVbMV0ueCAtPSBkaXIgKiB5ZGlyO1xuXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLl90cnlEZWNvZGUobGluZSk7XG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdpdGggdGhlIGhlbHAgb2YgdGhlIGNvbmZpZ3VyZWQgcmVhZGVycyB0aGlzIGZ1bmN0aW9uIHRyaWVzIHRvIGRldGVjdFxuICAgICAqIGEgdmFsaWQgYmFyY29kZSBwYXR0ZXJuIHdpdGhpbiB0aGUgZ2l2ZW4gYXJlYS5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gYm94IFRoZSBhcmVhIHRvIHNlYXJjaCBpblxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IHRoZSByZXN1bHQge2NvZGVSZXN1bHQsIGxpbmUsIGFuZ2xlLCBwYXR0ZXJuLCB0aHJlc2hvbGR9XG4gICAgICovXG4gICAgZGVjb2RlRnJvbUJvdW5kaW5nQm94KGJveCkge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5fY2FudmFzLmN0eC5vdmVybGF5O1xuICAgICAgICBjb25zdCBkZWJ1ZyA9IHRoaXMuX2NvbmZpZy5kZWJ1ZztcblxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBkZWJ1ZyAmJiBkZWJ1Zy5kcmF3Qm91bmRpbmdCb3ggJiYgY29udGV4dCkge1xuICAgICAgICAgICAgSW1hZ2VEZWJ1Zy5kcmF3UGF0aChib3gsIHsgeDogJ3gnLCB5OiAneScgfSwgY29udGV4dCwgeyBjb2xvcjogJ2JsdWUnLCBsaW5lV2lkdGg6IDIgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbGluZSA9IHRoaXMuX2dldExpbmUoYm94KTtcblxuICAgICAgICBpZiAobGluZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhbmdsZSA9IE1hdGguYXRhbjIobGluZVsxXS55IC0gbGluZVswXS55LCBsaW5lWzFdLnggLSBsaW5lWzBdLngpO1xuICAgICAgICBsaW5lID0gdGhpcy5fZ2V0RXh0ZW5kZWRMaW5lKGxpbmUsIGFuZ2xlKTtcblxuICAgICAgICBsZXQgcmVzdWx0ID0gdGhpcy5fdHJ5RGVjb2RlKGxpbmUpO1xuICAgICAgICBpZiAocmVzdWx0ID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLl90cnlEZWNvZGVCcnV0ZUZvcmNlKGJveCwgbGluZSwgYW5nbGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlc3VsdCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBkZWJ1ZyAmJiBkZWJ1Zy5kcmF3U2NhbmxpbmUgJiYgY29udGV4dCkge1xuICAgICAgICAgICAgSW1hZ2VEZWJ1Zy5kcmF3UGF0aChsaW5lLCB7IHg6ICd4JywgeTogJ3knIH0sIGNvbnRleHQsIHsgY29sb3I6ICdyZWQnLCBsaW5lV2lkdGg6IDMgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29kZVJlc3VsdDogcmVzdWx0LmNvZGVSZXN1bHQsXG4gICAgICAgICAgICBsaW5lLFxuICAgICAgICAgICAgYW5nbGUsXG4gICAgICAgICAgICBwYXR0ZXJuOiByZXN1bHQuYmFyY29kZUxpbmUubGluZSxcbiAgICAgICAgICAgIHRocmVzaG9sZDogcmVzdWx0LmJhcmNvZGVMaW5lLnRocmVzaG9sZFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGRlY29kZUZyb21Cb3VuZGluZ0JveGVzKGJveGVzKSB7XG4gICAgICAgIGNvbnN0IGJhcmNvZGVzID0gW107XG4gICAgICAgIGNvbnN0IG11bHRpcGxlID0gdGhpcy5fY29uZmlnLm11bHRpcGxlO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm94ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGJveCA9IGJveGVzW2ldO1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5kZWNvZGVGcm9tQm91bmRpbmdCb3goYm94KSB8fCB7fTtcbiAgICAgICAgICAgIHJlc3VsdC5ib3ggPSBib3g7XG5cbiAgICAgICAgICAgIGlmIChtdWx0aXBsZSkge1xuICAgICAgICAgICAgICAgIGJhcmNvZGVzLnB1c2gocmVzdWx0KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmNvZGVSZXN1bHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG11bHRpcGxlKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGJhcmNvZGVzXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgc2V0UmVhZGVycyhyZWFkZXJzKSB7XG4gICAgICAgIHRoaXMuX2NvbmZpZy5yZWFkZXJzID0gcmVhZGVycztcbiAgICAgICAgdGhpcy5fYmFyY29kZVJlYWRlcnMubGVuZ3RoID0gMDtcbiAgICAgICAgdGhpcy5faW5pdFJlYWRlcnMoKTtcbiAgICB9XG59XG4iLCJ2YXIgQnJlc2VuaGFtID0ge307XG5cbmNvbnN0IFNsb3BlID0ge1xuICAgIERJUjoge1xuICAgICAgICBVUDogMSxcbiAgICAgICAgRE9XTjogLTFcbiAgICB9XG59O1xuXG4vKipcbiAqIFNjYW5zIGEgbGluZSBvZiB0aGUgZ2l2ZW4gaW1hZ2UgZnJvbSBwb2ludCBwMSB0byBwMiBhbmQgcmV0dXJucyBhIHJlc3VsdCBvYmplY3QgY29udGFpbmluZ1xuICogZ3JheS1zY2FsZSB2YWx1ZXMgKDAtMjU1KSBvZiB0aGUgdW5kZXJseWluZyBwaXhlbHMgaW4gYWRkaXRpb24gdG8gdGhlIG1pbiBhbmQgbWF4IHZhbHVlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBpbWFnZVdyYXBwZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwMSBUaGUgc3RhcnQgcG9pbnQge3gseX1cbiAqIEBwYXJhbSB7T2JqZWN0fSBwMiBUaGUgZW5kIHBvaW50IHt4LHl9XG4gKiBAcmV0dXJucyB7bGluZSwgbWluLCBtYXh9XG4gKi9cbkJyZXNlbmhhbS5nZXRCYXJjb2RlTGluZSA9IGZ1bmN0aW9uIChpbWFnZVdyYXBwZXIsIHAxLCBwMikge1xuICAgIGxldCB4MCA9IHAxLnggfCAwO1xuICAgIGxldCB5MCA9IHAxLnkgfCAwO1xuICAgIGxldCB4MSA9IHAyLnggfCAwO1xuICAgIGxldCB5MSA9IHAyLnkgfCAwO1xuICAgIGNvbnN0IHN0ZWVwID0gTWF0aC5hYnMoeTEgLSB5MCkgPiBNYXRoLmFicyh4MSAtIHgwKTtcbiAgICBsZXQgdG1wO1xuICAgIGNvbnN0IGxpbmUgPSBbXTtcbiAgICBjb25zdCBpbWFnZURhdGEgPSBpbWFnZVdyYXBwZXIuZGF0YTtcbiAgICBjb25zdCB3aWR0aCA9IGltYWdlV3JhcHBlci5zaXplLng7XG4gICAgbGV0IHZhbDtcbiAgICBsZXQgbWluID0gMjU1O1xuICAgIGxldCBtYXggPSAwO1xuXG4gICAgZnVuY3Rpb24gcmVhZChhLCBiKSB7XG4gICAgICAgIHZhbCA9IGltYWdlRGF0YVtiICogd2lkdGggKyBhXTtcbiAgICAgICAgbWluID0gdmFsIDwgbWluID8gdmFsIDogbWluO1xuICAgICAgICBtYXggPSB2YWwgPiBtYXggPyB2YWwgOiBtYXg7XG4gICAgICAgIGxpbmUucHVzaCh2YWwpO1xuICAgIH1cblxuICAgIGlmIChzdGVlcCkge1xuICAgICAgICB0bXAgPSB4MDtcbiAgICAgICAgeDAgPSB5MDtcbiAgICAgICAgeTAgPSB0bXA7XG5cbiAgICAgICAgdG1wID0geDE7XG4gICAgICAgIHgxID0geTE7XG4gICAgICAgIHkxID0gdG1wO1xuICAgIH1cbiAgICBpZiAoeDAgPiB4MSkge1xuICAgICAgICB0bXAgPSB4MDtcbiAgICAgICAgeDAgPSB4MTtcbiAgICAgICAgeDEgPSB0bXA7XG5cbiAgICAgICAgdG1wID0geTA7XG4gICAgICAgIHkwID0geTE7XG4gICAgICAgIHkxID0gdG1wO1xuICAgIH1cblxuICAgIGxldCBkZWx0YXggPSB4MSAtIHgwO1xuICAgIGxldCBkZWx0YXkgPSBNYXRoLmFicyh5MSAtIHkwKTtcbiAgICBsZXQgZXJyb3IgPSAoZGVsdGF4IC8gMikgfCAwO1xuICAgIGxldCB5ID0geTA7XG4gICAgbGV0IHlzdGVwID0geTAgPCB5MSA/IDEgOiAtMTtcblxuICAgIGZvciAobGV0IHggPSB4MDsgeCA8IHgxOyB4KyspIHtcbiAgICAgICAgaWYgKHN0ZWVwKSB7XG4gICAgICAgICAgICByZWFkKHksIHgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVhZCh4LCB5KTtcbiAgICAgICAgfVxuICAgICAgICBlcnJvciA9IGVycm9yIC0gZGVsdGF5O1xuICAgICAgICBpZiAoZXJyb3IgPCAwKSB7XG4gICAgICAgICAgICB5ICs9IHlzdGVwO1xuICAgICAgICAgICAgZXJyb3IgPSBlcnJvciArIGRlbHRheDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGxpbmUsXG4gICAgICAgIG1pbixcbiAgICAgICAgbWF4XG4gICAgfTtcbn07XG5cbi8qKlxuICogQ29udmVydHMgdGhlIHJlc3VsdCBmcm9tIGdldEJhcmNvZGVMaW5lIGludG8gYSBiaW5hcnkgcmVwcmVzZW50YXRpb25cbiAqIGFsc28gY29uc2lkZXJpbmcgdGhlIGZyZXF1ZW5jeSBhbmQgc2xvcGUgb2YgdGhlIHNpZ25hbCBmb3IgbW9yZSByb2J1c3QgcmVzdWx0c1xuICogQHBhcmFtIHtPYmplY3R9IHJlc3VsdCB7bGluZSwgbWluLCBtYXh9XG4gKi9cbkJyZXNlbmhhbS50b0JpbmFyeUxpbmUgPSBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgY29uc3QgbWluID0gcmVzdWx0Lm1pbjtcbiAgICBjb25zdCBtYXggPSByZXN1bHQubWF4O1xuICAgIGNvbnN0IGxpbmUgPSByZXN1bHQubGluZTtcbiAgICBjb25zdCBjZW50ZXIgPSBtaW4gKyAobWF4IC0gbWluKSAvIDI7XG4gICAgY29uc3QgZXh0cmVtYSA9IFtdO1xuICAgIGxldCB0aHJlc2hvbGQgPSAobWF4IC0gbWluKSAvIDEyO1xuICAgIGNvbnN0IHJUaHJlc2hvbGQgPSAtdGhyZXNob2xkO1xuXG4gICAgLy8gMS4gZmluZCBleHRyZW1hXG4gICAgbGV0IGN1cnJlbnREaXIgPSBsaW5lWzBdID4gY2VudGVyID8gU2xvcGUuRElSLlVQIDogU2xvcGUuRElSLkRPV047XG4gICAgZXh0cmVtYS5wdXNoKHtcbiAgICAgICAgcG9zOiAwLFxuICAgICAgICB2YWw6IGxpbmVbMF1cbiAgICB9KTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmUubGVuZ3RoIC0gMjsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHNsb3BlID0gKGxpbmVbaSArIDFdIC0gbGluZVtpXSk7XG4gICAgICAgIGNvbnN0IHNsb3BlMiA9IChsaW5lW2kgKyAyXSAtIGxpbmVbaSArIDFdKTtcbiAgICAgICAgbGV0IGRpcjtcbiAgICAgICAgaWYgKChzbG9wZSArIHNsb3BlMikgPCByVGhyZXNob2xkICYmIGxpbmVbaSArIDFdIDwgKGNlbnRlciAqIDEuNSkpIHtcbiAgICAgICAgICAgIGRpciA9IFNsb3BlLkRJUi5ET1dOO1xuICAgICAgICB9IGVsc2UgaWYgKChzbG9wZSArIHNsb3BlMikgPiB0aHJlc2hvbGQgJiYgbGluZVtpICsgMV0gPiAoY2VudGVyICogMC41KSkge1xuICAgICAgICAgICAgZGlyID0gU2xvcGUuRElSLlVQO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGlyID0gY3VycmVudERpcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjdXJyZW50RGlyICE9PSBkaXIpIHtcbiAgICAgICAgICAgIGV4dHJlbWEucHVzaCh7XG4gICAgICAgICAgICAgICAgcG9zOiBpLFxuICAgICAgICAgICAgICAgIHZhbDogbGluZVtpXVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjdXJyZW50RGlyID0gZGlyO1xuICAgICAgICB9XG4gICAgfVxuICAgIGV4dHJlbWEucHVzaCh7XG4gICAgICAgIHBvczogbGluZS5sZW5ndGgsXG4gICAgICAgIHZhbDogbGluZVtsaW5lLmxlbmd0aCAtIDFdXG4gICAgfSk7XG5cbiAgICBmb3IgKGxldCBqID0gZXh0cmVtYVswXS5wb3M7IGogPCBleHRyZW1hWzFdLnBvczsgaisrKSB7XG4gICAgICAgIGxpbmVbal0gPSBsaW5lW2pdID4gY2VudGVyID8gMCA6IDE7XG4gICAgfVxuXG4gICAgLy8gaXRlcmF0ZSBvdmVyIGV4dHJlbWEgYW5kIGNvbnZlcnQgdG8gYmluYXJ5IGJhc2VkIG9uIGF2ZyBiZXR3ZWVuIG1pbm1heFxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgZXh0cmVtYS5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgaWYgKGV4dHJlbWFbaSArIDFdLnZhbCA+IGV4dHJlbWFbaV0udmFsKSB7XG4gICAgICAgICAgICB0aHJlc2hvbGQgPSAoZXh0cmVtYVtpXS52YWwgKyAoKGV4dHJlbWFbaSArIDFdLnZhbCAtIGV4dHJlbWFbaV0udmFsKSAvIDMpICogMikgfCAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyZXNob2xkID0gKGV4dHJlbWFbaSArIDFdLnZhbCArICgoZXh0cmVtYVtpXS52YWwgLSBleHRyZW1hW2kgKyAxXS52YWwpIC8gMykpIHwgMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGogPSBleHRyZW1hW2ldLnBvczsgaiA8IGV4dHJlbWFbaSArIDFdLnBvczsgaisrKSB7XG4gICAgICAgICAgICBsaW5lW2pdID0gbGluZVtqXSA+IHRocmVzaG9sZCA/IDAgOiAxO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbGluZSxcbiAgICAgICAgdGhyZXNob2xkXG4gICAgfTtcbn07XG5cbi8qKlxuICogVXNlZCBmb3IgZGV2ZWxvcG1lbnQgb25seVxuICovXG5CcmVzZW5oYW0uZGVidWcgPSB7XG4gICAgcHJpbnRGcmVxdWVuY3k6IGZ1bmN0aW9uIChsaW5lLCBjYW52YXMpIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICBjYW52YXMud2lkdGggPSBsaW5lLmxlbmd0aDtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IDI1NjtcblxuICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gJ2JsdWUnO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29udGV4dC5tb3ZlVG8oaSwgMjU1KTtcbiAgICAgICAgICAgIGNvbnRleHQubGluZVRvKGksIDI1NSAtIGxpbmVbaV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5zdHJva2UoKTtcbiAgICAgICAgY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgICB9LFxuXG4gICAgcHJpbnRQYXR0ZXJuOiBmdW5jdGlvbiAobGluZSwgY2FudmFzKSB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAgICAgICBjYW52YXMud2lkdGggPSBsaW5lLmxlbmd0aDtcbiAgICAgICAgY29udGV4dC5maWxsQ29sb3IgPSAnYmxhY2snO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGxpbmVbaV0gPT09IDEpIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmZpbGxSZWN0KGksIDAsIDEsIDEwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCcmVzZW5oYW07XG4iLCJpbXBvcnQgeyBnZXRVc2VyTWVkaWEsIGVudW1lcmF0ZURldmljZXMgfSBmcm9tICcuLi9jb21tb24vbWVkaWEtZGV2aWNlcyc7XG5cbmxldCBfc3RyZWFtO1xuXG5mdW5jdGlvbiB3YWl0Rm9yVmlkZW8oeyB2aWRlb1dpZHRoLCB2aWRlb0hlaWdodCB9KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgbGV0IGF0dGVtcHRzID0gMTA7XG5cbiAgICAgICAgZnVuY3Rpb24gY2hlY2tWaWRlbygpIHtcbiAgICAgICAgICAgIGlmIChhdHRlbXB0cyA+IDApIHtcbiAgICAgICAgICAgICAgICBpZiAodmlkZW9XaWR0aCA+IDEwICYmIHZpZGVvSGVpZ2h0ID4gMTApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3ZpZGVvV2lkdGh9cHggeCAke3ZpZGVvSGVpZ2h0fXB4YCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGNoZWNrVmlkZW8sIDUwMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZWplY3QoJ1VuYWJsZSB0byBwbGF5IHZpZGVvIHN0cmVhbS4gSXMgd2ViY2FtIHdvcmtpbmc/Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhdHRlbXB0cy0tO1xuICAgICAgICB9XG4gICAgICAgIGNoZWNrVmlkZW8oKTtcbiAgICB9KTtcbn1cblxuLyoqXG4gKiBUcmllcyB0byBhdHRhY2ggdGhlIGNhbWVyYS1zdHJlYW0gdG8gYSBnaXZlbiB2aWRlby1lbGVtZW50XG4gKiBhbmQgY2FsbHMgdGhlIGNhbGxiYWNrIGZ1bmN0aW9uIHdoZW4gdGhlIGNvbnRlbnQgaXMgcmVhZHlcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25zdHJhaW50c1xuICogQHBhcmFtIHtPYmplY3R9IHZpZGVvXG4gKi9cbmZ1bmN0aW9uIGluaXRDYW1lcmEodmlkZW8sIGNvbnN0cmFpbnRzKSB7XG4gICAgcmV0dXJuIGdldFVzZXJNZWRpYShjb25zdHJhaW50cylcbiAgICAgICAgLnRoZW4oc3RyZWFtID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICBfc3RyZWFtID0gc3RyZWFtO1xuICAgICAgICAgICAgICAgIHZpZGVvLnNldEF0dHJpYnV0ZSgnYXV0b3BsYXknLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB2aWRlby5zZXRBdHRyaWJ1dGUoJ211dGVkJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgdmlkZW8uc2V0QXR0cmlidXRlKCdwbGF5c2lubGluZScsIHRydWUpO1xuICAgICAgICAgICAgICAgIHZpZGVvLnNyY09iamVjdCA9IHN0cmVhbTtcbiAgICAgICAgICAgICAgICB2aWRlby5hZGRFdmVudExpc3RlbmVyKCdsb2FkZWRtZXRhZGF0YScsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdmlkZW8ucGxheSgpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4od2FpdEZvclZpZGVvLmJpbmQobnVsbCwgdmlkZW8pKTtcbn1cblxuZnVuY3Rpb24gZGVwcmVjYXRlZENvbnN0cmFpbnRzKHZpZGVvQ29uc3RyYWludHMpIHtcbiAgICBsZXQgeyB3aWR0aCwgaGVpZ2h0LCBmYWNpbmdNb2RlLCBhc3BlY3RSYXRpbywgZGV2aWNlSWQgfSA9IHZpZGVvQ29uc3RyYWludHM7XG5cbiAgICBpZiAodHlwZW9mIHZpZGVvQ29uc3RyYWludHMubWluQXNwZWN0UmF0aW8gIT09ICd1bmRlZmluZWQnICYmIHZpZGVvQ29uc3RyYWludHMubWluQXNwZWN0UmF0aW8gPiAwKSB7XG4gICAgICAgIGFzcGVjdFJhdGlvID0gdmlkZW9Db25zdHJhaW50cy5taW5Bc3BlY3RSYXRpbztcbiAgICAgICAgY29uc29sZS5sb2coYFdBUk5JTkc6IENvbnN0cmFpbnQgJ21pbkFzcGVjdFJhdGlvJyBpcyBkZXByZWNhdGVkOyBVc2UgJ2FzcGVjdFJhdGlvJyBpbnN0ZWFkYCk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB2aWRlb0NvbnN0cmFpbnRzLmZhY2luZyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgZmFjaW5nTW9kZSA9IHZpZGVvQ29uc3RyYWludHMuZmFjaW5nO1xuICAgICAgICBjb25zb2xlLmxvZyhgV0FSTklORzogQ29uc3RyYWludCAnZmFjaW5nJyBpcyBkZXByZWNhdGVkLiBVc2UgJ2ZhY2luZ01vZGUnIGluc3RlYWQnYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgd2lkdGgsIGhlaWdodCwgZmFjaW5nTW9kZSwgYXNwZWN0UmF0aW8sIGRldmljZUlkIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwaWNrQ29uc3RyYWludHModmlkZW9Db25zdHJhaW50cykge1xuICAgIGNvbnN0IG5vcm1hbGl6ZWRDb25zdHJhaW50cyA9IHtcbiAgICAgICAgYXVkaW86IGZhbHNlLFxuICAgICAgICB2aWRlbzogZGVwcmVjYXRlZENvbnN0cmFpbnRzKHZpZGVvQ29uc3RyYWludHMpXG4gICAgfTtcblxuICAgIGlmIChub3JtYWxpemVkQ29uc3RyYWludHMudmlkZW8uZGV2aWNlSWQgJiYgbm9ybWFsaXplZENvbnN0cmFpbnRzLnZpZGVvLmZhY2luZ01vZGUpIHtcbiAgICAgICAgZGVsZXRlIG5vcm1hbGl6ZWRDb25zdHJhaW50cy52aWRlby5mYWNpbmdNb2RlO1xuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobm9ybWFsaXplZENvbnN0cmFpbnRzKTtcbn1cblxuZnVuY3Rpb24gZW51bWVyYXRlVmlkZW9EZXZpY2VzKCkge1xuICAgIHJldHVybiBlbnVtZXJhdGVEZXZpY2VzKCkudGhlbihkZXZpY2VzID0+IGRldmljZXMuZmlsdGVyKCh7IGtpbmQgfSkgPT4ga2luZCA9PT0gJ3ZpZGVvaW5wdXQnKSk7XG59XG5cbmZ1bmN0aW9uIGdldEFjdGl2ZVRyYWNrKCkge1xuICAgIGNvbnN0IHRyYWNrcyA9IF9zdHJlYW0gJiYgX3N0cmVhbS5nZXRWaWRlb1RyYWNrcygpO1xuICAgIGlmICh0cmFja3MgJiYgdHJhY2tzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gdHJhY2tzWzBdO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcmVxdWVzdDogZnVuY3Rpb24gKHZpZGVvLCB2aWRlb0NvbnN0cmFpbnRzKSB7XG4gICAgICAgIHJldHVybiBwaWNrQ29uc3RyYWludHModmlkZW9Db25zdHJhaW50cykudGhlbihpbml0Q2FtZXJhLmJpbmQobnVsbCwgdmlkZW8pKTtcbiAgICB9LFxuICAgIHJlbGVhc2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgdHJhY2tzID0gX3N0cmVhbSAmJiBfc3RyZWFtLmdldFZpZGVvVHJhY2tzKCk7XG4gICAgICAgIGlmICh0cmFja3MgJiYgdHJhY2tzLmxlbmd0aCkge1xuICAgICAgICAgICAgdHJhY2tzWzBdLnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgICBfc3RyZWFtID0gbnVsbDtcbiAgICB9LFxuICAgIGVudW1lcmF0ZVZpZGVvRGV2aWNlcyxcbiAgICBnZXRBY3RpdmVTdHJlYW1MYWJlbDogZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCB0cmFjayA9IGdldEFjdGl2ZVRyYWNrKCk7XG4gICAgICAgIHJldHVybiB0cmFjayA/IHRyYWNrLmxhYmVsIDogJyc7XG4gICAgfSxcbiAgICBnZXRBY3RpdmVUcmFja1xufTtcbiIsIi8qKlxuICogQGJvcnJvd3MgaHR0cHM6Ly9naXRodWIuY29tL2V4aWYtanMvZXhpZi1qc1xuICovXG5cbmNvbnN0IEV4aWZUYWdzID0geyAweDAxMTI6ICdvcmllbnRhdGlvbicgfTtcbmV4cG9ydCBjb25zdCBBdmFpbGFibGVUYWdzID0gT2JqZWN0LmtleXMoRXhpZlRhZ3MpLm1hcChrZXkgPT4gRXhpZlRhZ3Nba2V5XSk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmaW5kVGFnc0luT2JqZWN0VVJMKHNyYywgdGFncyA9IEF2YWlsYWJsZVRhZ3MpIHtcbiAgICBpZiAoL15ibG9iOi9pLnRlc3Qoc3JjKSkge1xuICAgICAgICBjb25zdCBidWZmZXIgPSBhd2FpdCBvYmplY3RVUkxUb0Jsb2Ioc3JjKTtcbiAgICAgICAgcmV0dXJuIGZpbmRUYWdzSW5CdWZmZXIoYnVmZmVyLCB0YWdzKTtcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShudWxsKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRUYWdzSW5CdWZmZXIoZmlsZSwgc2VsZWN0ZWRUYWdzID0gQXZhaWxhYmxlVGFncykge1xuICAgIGNvbnN0IGRhdGFWaWV3ID0gbmV3IERhdGFWaWV3KGZpbGUpO1xuICAgIGNvbnN0IGxlbmd0aCA9IGZpbGUuYnl0ZUxlbmd0aDtcbiAgICBjb25zdCBleGlmVGFncyA9IHNlbGVjdGVkVGFncy5yZWR1Y2UoKHJlc3VsdCwgc2VsZWN0ZWRUYWcpID0+IHtcbiAgICAgICAgY29uc3QgZXhpZlRhZyA9IE9iamVjdC5rZXlzKEV4aWZUYWdzKS5maW5kKHRhZyA9PiBFeGlmVGFnc1t0YWddID09PSBzZWxlY3RlZFRhZyk7XG4gICAgICAgIGlmIChleGlmVGFnKSB7XG4gICAgICAgICAgICByZXN1bHRbZXhpZlRhZ10gPSBzZWxlY3RlZFRhZztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0sIHt9KTtcbiAgICBsZXQgb2Zmc2V0ID0gMjtcblxuICAgIGlmICgoZGF0YVZpZXcuZ2V0VWludDgoMCkgIT09IDB4RkYpIHx8IChkYXRhVmlldy5nZXRVaW50OCgxKSAhPT0gMHhEOCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHdoaWxlIChvZmZzZXQgPCBsZW5ndGgpIHtcbiAgICAgICAgaWYgKGRhdGFWaWV3LmdldFVpbnQ4KG9mZnNldCkgIT09IDB4RkYpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG1hcmtlciA9IGRhdGFWaWV3LmdldFVpbnQ4KG9mZnNldCArIDEpO1xuICAgICAgICBpZiAobWFya2VyID09PSAweEUxKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVhZEVYSUZEYXRhKGRhdGFWaWV3LCBvZmZzZXQgKyA0LCBleGlmVGFncyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvZmZzZXQgKz0gMiArIGRhdGFWaWV3LmdldFVpbnQxNihvZmZzZXQgKyAyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gb2JqZWN0VVJMVG9CbG9iKHVybCkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmFycmF5QnVmZmVyKCk7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcignSFRUUCBFcnJvcicsIHJlc3BvbnNlLnN0YXR1cyk7XG59XG5cbmZ1bmN0aW9uIHJlYWRFWElGRGF0YShkYXRhVmlldywgc3RhcnQsIGV4aWZUYWdzKSB7XG4gICAgaWYgKCdFeGlmJy5zcGxpdCgpLnNvbWUoKGNoYXIsIGluZGV4KSA9PiBkYXRhVmlldy5nZXRVaW50OChzdGFydCArIGluZGV4KSAhPT0gY2hhci5jaGFyQ29kZUF0KDApKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgdGlmZk9mZnNldCA9IHN0YXJ0ICsgNjtcbiAgICBsZXQgYmlnRW5kO1xuXG4gICAgaWYgKGRhdGFWaWV3LmdldFVpbnQxNih0aWZmT2Zmc2V0KSA9PT0gMHg0OTQ5KSB7XG4gICAgICAgIGJpZ0VuZCA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoZGF0YVZpZXcuZ2V0VWludDE2KHRpZmZPZmZzZXQpID09PSAweDRENEQpIHtcbiAgICAgICAgYmlnRW5kID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKGRhdGFWaWV3LmdldFVpbnQxNih0aWZmT2Zmc2V0ICsgMiwgIWJpZ0VuZCkgIT09IDB4MDAyQSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgZmlyc3RJRkRPZmZzZXQgPSBkYXRhVmlldy5nZXRVaW50MzIodGlmZk9mZnNldCArIDQsICFiaWdFbmQpO1xuICAgIGlmIChmaXJzdElGRE9mZnNldCA8IDB4MDAwMDAwMDgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IHRhZ3MgPSByZWFkVGFncyhkYXRhVmlldywgdGlmZk9mZnNldCArIGZpcnN0SUZET2Zmc2V0LCBleGlmVGFncywgYmlnRW5kKTtcbiAgICByZXR1cm4gdGFncztcbn1cblxuZnVuY3Rpb24gcmVhZFRhZ3MoZGF0YVZpZXcsIGRpclN0YXJ0LCBzdHJpbmdzLCBiaWdFbmQpIHtcbiAgICBjb25zdCBlbnRyaWVzID0gZGF0YVZpZXcuZ2V0VWludDE2KGRpclN0YXJ0LCAhYmlnRW5kKTtcbiAgICBjb25zdCB0YWdzID0ge307XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVudHJpZXM7IGkrKykge1xuICAgICAgICBjb25zdCBlbnRyeU9mZnNldCA9IGRpclN0YXJ0ICsgaSAqIDEyICsgMjtcbiAgICAgICAgY29uc3QgdGFnID0gc3RyaW5nc1tkYXRhVmlldy5nZXRVaW50MTYoZW50cnlPZmZzZXQsICFiaWdFbmQpXTtcbiAgICAgICAgaWYgKHRhZykge1xuICAgICAgICAgICAgdGFnc1t0YWddID0gcmVhZFRhZ1ZhbHVlKGRhdGFWaWV3LCBlbnRyeU9mZnNldCwgYmlnRW5kKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YWdzO1xufVxuXG5mdW5jdGlvbiByZWFkVGFnVmFsdWUoZGF0YVZpZXcsIGVudHJ5T2Zmc2V0LCBiaWdFbmQpIHtcbiAgICBjb25zdCB0eXBlID0gZGF0YVZpZXcuZ2V0VWludDE2KGVudHJ5T2Zmc2V0ICsgMiwgIWJpZ0VuZCk7XG4gICAgY29uc3QgbnVtVmFsdWVzID0gZGF0YVZpZXcuZ2V0VWludDMyKGVudHJ5T2Zmc2V0ICsgNCwgIWJpZ0VuZCk7XG5cbiAgICByZXR1cm4gdHlwZSA9PT0gMyAmJiBudW1WYWx1ZXMgPT09IDEgPyBkYXRhVmlldy5nZXRVaW50MTYoZW50cnlPZmZzZXQgKyA4LCAhYmlnRW5kKSA6IHVuZGVmaW5lZDtcbn1cbiIsImNvbnN0IFFVQVRFUl9DSVJDTEUgPSBNYXRoLlBJIC8gMjtcblxuZXhwb3J0IGNsYXNzIEZyYW1lR3JhYmJlciB7XG4gICAgY29uc3RydWN0b3IoaW5wdXRTdHJlYW0sIGNhbnZhcykge1xuICAgICAgICB0aGlzLl9pbnB1dFN0cmVhbSA9IGlucHV0U3RyZWFtO1xuICAgICAgICB0aGlzLl9zdHJlYW1Db25maWcgPSBpbnB1dFN0cmVhbS5nZXRDb25maWcoKTtcbiAgICAgICAgdGhpcy5fY2FudmFzV2lkdGggPSBpbnB1dFN0cmVhbS5nZXRDYW52YXNXaWR0aCgpO1xuICAgICAgICB0aGlzLl9jYW52YXNIZWlnaHQgPSBpbnB1dFN0cmVhbS5nZXRDYW52YXNIZWlnaHQoKTtcbiAgICAgICAgdGhpcy5fd2lkdGggPSBpbnB1dFN0cmVhbS5nZXRXaWR0aCgpO1xuICAgICAgICB0aGlzLl9oZWlnaHQgPSBpbnB1dFN0cmVhbS5nZXRIZWlnaHQoKTtcbiAgICAgICAgY29uc3QgdG9wUmlnaHQgPSBpbnB1dFN0cmVhbS5nZXRUb3BSaWdodCgpO1xuICAgICAgICB0aGlzLl9zeCA9IHRvcFJpZ2h0Lng7XG4gICAgICAgIHRoaXMuX3N5ID0gdG9wUmlnaHQueTtcbiAgICAgICAgdGhpcy5fY2FudmFzID0gY2FudmFzIHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICB0aGlzLl9jYW52YXMud2lkdGggPSB0aGlzLl9jYW52YXNXaWR0aDtcbiAgICAgICAgdGhpcy5fY2FudmFzLmhlaWdodCA9IHRoaXMuX2NhbnZhc0hlaWdodDtcbiAgICAgICAgdGhpcy5fY29udGV4dCA9IHRoaXMuX2NhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICB0aGlzLl9kYXRhID0gbmV3IFVpbnQ4QXJyYXkodGhpcy5fd2lkdGggKiB0aGlzLl9oZWlnaHQpO1xuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRnJhbWVHcmFiYmVyJywgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIHNpemU6IHtcbiAgICAgICAgICAgICAgICAgICAgeDogdGhpcy5fd2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIHk6IHRoaXMuX2hlaWdodFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdG9wUmlnaHQsXG4gICAgICAgICAgICAgICAgdmlkZW9TaXplOiB7XG4gICAgICAgICAgICAgICAgICAgIHg6IGlucHV0U3RyZWFtLmdldFJlYWxXaWR0aCgpLFxuICAgICAgICAgICAgICAgICAgICB5OiBpbnB1dFN0cmVhbS5nZXRSZWFsSGVpZ2h0KClcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNhbnZhc1NpemU6IHtcbiAgICAgICAgICAgICAgICAgICAgeDogdGhpcy5fY2FudmFzV2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIHk6IHRoaXMuX2NhbnZhc0hlaWdodFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVzZXMgdGhlIGdpdmVuIGFycmF5IGFzIGZyYW1lLWJ1ZmZlclxuICAgICAqL1xuICAgIGF0dGFjaERhdGEoZGF0YSkge1xuICAgICAgICB0aGlzLl9kYXRhID0gZGF0YTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGZXRjaGVzIGEgZnJhbWUgZnJvbSB0aGUgaW5wdXQtc3RyZWFtIGFuZCBwdXRzIGludG8gdGhlIGZyYW1lLWJ1ZmZlci5cbiAgICAgKiBUaGUgaW1hZ2UtZGF0YSBpcyBjb252ZXJ0ZWQgdG8gZ3JheS1zY2FsZSBhbmQgdGhlbiBoYWxmLXNhbXBsZWQgaWYgY29uZmlndXJlZC5cbiAgICAgKi9cbiAgICBncmFiKCkge1xuICAgICAgICBjb25zdCBkb0hhbGZTYW1wbGUgPSB0aGlzLl9zdHJlYW1Db25maWcuaGFsZlNhbXBsZTtcbiAgICAgICAgY29uc3QgZnJhbWUgPSB0aGlzLl9pbnB1dFN0cmVhbS5nZXRGcmFtZSgpO1xuICAgICAgICBsZXQgZHJhd2FibGUgPSBmcmFtZTtcbiAgICAgICAgbGV0IGRyYXdBbmdsZSA9IDA7XG5cbiAgICAgICAgaWYgKGRyYXdhYmxlKSB7XG4gICAgICAgICAgICB0aGlzLl9hZGp1c3RDYW52YXNTaXplKCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLl9zdHJlYW1Db25maWcudHlwZSA9PT0gJ0ltYWdlU3RyZWFtJykge1xuICAgICAgICAgICAgICAgIGRyYXdhYmxlID0gZnJhbWUuaW1hZ2U7XG5cbiAgICAgICAgICAgICAgICBpZiAoZnJhbWUudGFncykge1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGZyYW1lLnRhZ3Mub3JpZW50YXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyYXdBbmdsZSA9IFFVQVRFUl9DSVJDTEU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDg6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcmF3QW5nbGUgPSAtUVVBVEVSX0NJUkNMRTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGRyYXdBbmdsZSAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGhhbGZXaWR0aCA9IHRoaXMuX2NhbnZhc1dpZHRoID4+IDE7XG4gICAgICAgICAgICAgICAgY29uc3QgaGFsZkhlaWdodCA9IHRoaXMuX2NhbnZhc0hlaWdodCA+PiAxO1xuICAgICAgICAgICAgICAgIHRoaXMuX2NvbnRleHQudHJhbnNsYXRlKGhhbGZXaWR0aCwgaGFsZkhlaWdodCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fY29udGV4dC5yb3RhdGUoZHJhd0FuZ2xlKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9jb250ZXh0LmRyYXdJbWFnZShkcmF3YWJsZSwgLWhhbGZIZWlnaHQsIC1oYWxmV2lkdGgsIHRoaXMuX2NhbnZhc0hlaWdodCwgdGhpcy5fY2FudmFzV2lkdGgpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2NvbnRleHQucm90YXRlKC1kcmF3QW5nbGUpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2NvbnRleHQudHJhbnNsYXRlKC1oYWxmV2lkdGgsIC1oYWxmSGVpZ2h0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY29udGV4dC5kcmF3SW1hZ2UoZHJhd2FibGUsIDAsIDAsIHRoaXMuX2NhbnZhc1dpZHRoLCB0aGlzLl9jYW52YXNIZWlnaHQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBpbWFnZURhdGEgPSB0aGlzLl9jb250ZXh0LmdldEltYWdlRGF0YSh0aGlzLl9zeCwgdGhpcy5fc3ksIHRoaXMuX3dpZHRoLCB0aGlzLl9oZWlnaHQpLmRhdGE7XG4gICAgICAgICAgICBpZiAoZG9IYWxmU2FtcGxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZ3JheUFuZEhhbGZTYW1wbGVGcm9tQ2FudmFzRGF0YShpbWFnZURhdGEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jb21wdXRlR3JheShpbWFnZURhdGEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9hZGp1c3RDYW52YXNTaXplKCkge1xuICAgICAgICBpZiAodGhpcy5fY2FudmFzLndpZHRoICE9PSB0aGlzLl9jYW52YXNXaWR0aCkge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnV0FSTklORzogY2FudmFzLXNpemUgbmVlZHMgdG8gYmUgYWRqdXN0ZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2NhbnZhcy53aWR0aCA9IHRoaXMuX2NhbnZhc1dpZHRoO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9jYW52YXMuaGVpZ2h0ICE9PSB0aGlzLl9jYW52YXNIZWlnaHQpIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1dBUk5JTkc6IGNhbnZhcy1zaXplIG5lZWRzIHRvIGJlIGFkanVzdGVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9jYW52YXMuaGVpZ2h0ID0gdGhpcy5fY2FudmFzSGVpZ2h0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2dyYXlBbmRIYWxmU2FtcGxlRnJvbUNhbnZhc0RhdGEoaW1hZ2VEYXRhKSB7XG4gICAgICAgIGNvbnN0IGVuZEluZGV4ID0gaW1hZ2VEYXRhLmxlbmd0aCA+PiAyO1xuICAgICAgICBjb25zdCBvdXRXaWR0aCA9IHRoaXMuX3dpZHRoID4+IDE7XG4gICAgICAgIGxldCB0b3BSb3dJbmRleCA9IDA7XG4gICAgICAgIGxldCBib3R0b21Sb3dJbmRleCA9IHRoaXMuX3dpZHRoO1xuICAgICAgICBsZXQgb3V0SW1hZ2VJbmRleCA9IDA7XG5cbiAgICAgICAgd2hpbGUgKGJvdHRvbVJvd0luZGV4IDwgZW5kSW5kZXgpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3V0V2lkdGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvcDQgPSB0b3BSb3dJbmRleCA8PCAyO1xuICAgICAgICAgICAgICAgIGNvbnN0IGJvdHRvbTQgPSBib3R0b21Sb3dJbmRleCA8PCAyO1xuICAgICAgICAgICAgICAgIHRoaXMuX2RhdGFbb3V0SW1hZ2VJbmRleF0gPSAoXG4gICAgICAgICAgICAgICAgICAgICgwLjI5OSAqIGltYWdlRGF0YVt0b3A0ICsgMF0gKyAwLjU4NyAqIGltYWdlRGF0YVt0b3A0ICsgMV0gKyAwLjExNCAqIGltYWdlRGF0YVt0b3A0ICsgMl0pICtcbiAgICAgICAgICAgICAgICAgICAgKDAuMjk5ICogaW1hZ2VEYXRhW3RvcDQgKyA0XSArIDAuNTg3ICogaW1hZ2VEYXRhW3RvcDQgKyA1XSArIDAuMTE0ICogaW1hZ2VEYXRhW3RvcDQgKyA2XSkgK1xuICAgICAgICAgICAgICAgICAgICAoMC4yOTkgKiBpbWFnZURhdGFbYm90dG9tNCArIDBdICsgMC41ODcgKiBpbWFnZURhdGFbYm90dG9tNCArIDFdICsgMC4xMTQgKiBpbWFnZURhdGFbYm90dG9tNCArIDJdKSArXG4gICAgICAgICAgICAgICAgICAgICgwLjI5OSAqIGltYWdlRGF0YVtib3R0b200ICsgNF0gKyAwLjU4NyAqIGltYWdlRGF0YVtib3R0b200ICsgNV0gKyAwLjExNCAqIGltYWdlRGF0YVtib3R0b200ICsgNl0pXG4gICAgICAgICAgICAgICAgKSAvIDQ7XG4gICAgICAgICAgICAgICAgb3V0SW1hZ2VJbmRleCsrO1xuICAgICAgICAgICAgICAgIHRvcFJvd0luZGV4ICs9IDI7XG4gICAgICAgICAgICAgICAgYm90dG9tUm93SW5kZXggKz0gMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRvcFJvd0luZGV4ICs9IHRoaXMuX3dpZHRoO1xuICAgICAgICAgICAgYm90dG9tUm93SW5kZXggKz0gdGhpcy5fd2lkdGg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfY29tcHV0ZUdyYXkoaW1hZ2VEYXRhKSB7XG4gICAgICAgIGNvbnN0IGltYWdlRGF0YUxlbmd0aCA9IGltYWdlRGF0YS5sZW5ndGg7XG5cbiAgICAgICAgaWYgKHRoaXMuX3N0cmVhbUNvbmZpZyAmJiB0aGlzLl9zdHJlYW1Db25maWcuc2luZ2xlQ2hhbm5lbCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGogPSAwOyBpIDwgaW1hZ2VEYXRhTGVuZ3RoOyBpICs9IDQsIGorKykge1xuICAgICAgICAgICAgICAgIHRoaXMuX2RhdGFbal0gPSBpbWFnZURhdGFbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgaiA9IDA7IGkgPCBpbWFnZURhdGFMZW5ndGg7IGkgKz0gNCwgaisrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGF0YVtqXSA9IDAuMjk5ICogaW1hZ2VEYXRhW2ldICsgMC41ODcgKiBpbWFnZURhdGFbaSArIDFdICsgMC4xMTQgKiBpbWFnZURhdGFbaSArIDJdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgZmluZFRhZ3NJbk9iamVjdFVSTCB9IGZyb20gJy4vZXhpZl9oZWxwZXInO1xuXG5leHBvcnQgY2xhc3MgSW1hZ2VMb2FkZXIge1xuICAgIHN0YXRpYyBhc3luYyBsb2FkKGRpcmVjdG9yeSwgY2FsbGJhY2ssIG9mZnNldCwgc2l6ZSwgc2VxdWVuY2UpIHtcbiAgICAgICAgY29uc3QgaHRtbEltYWdlc1NyY0FycmF5ID0gbmV3IEFycmF5KHNpemUpO1xuICAgICAgICBjb25zdCBodG1sSW1hZ2VzQXJyYXkgPSBuZXcgQXJyYXkoc2l6ZSk7XG5cbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gbG9hZGVkKGxvYWRlZEltYWdlKSB7XG4gICAgICAgICAgICBjb25zdCBub3RMb2FkZWRJbWFnZXMgPSBodG1sSW1hZ2VzQXJyYXkubm90TG9hZGVkO1xuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBub3RMb2FkZWRJbWFnZXMubGVuZ3RoOyB4KyspIHtcbiAgICAgICAgICAgICAgICBpZiAobm90TG9hZGVkSW1hZ2VzW3hdID09PSBsb2FkZWRJbWFnZSkge1xuICAgICAgICAgICAgICAgICAgICBub3RMb2FkZWRJbWFnZXMuc3BsaWNlKHgsIDEpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGh0bWxJbWFnZXNTcmNBcnJheS5sZW5ndGg7IHkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1hZ2VOYW1lID0gaHRtbEltYWdlc1NyY0FycmF5W3ldLnN1YnN0cihodG1sSW1hZ2VzU3JjQXJyYXlbeV0ubGFzdEluZGV4T2YoJy8nKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobG9hZGVkSW1hZ2Uuc3JjLmxhc3RJbmRleE9mKGltYWdlTmFtZSkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEltYWdlc0FycmF5W3ldID0geyBpbWFnZTogbG9hZGVkSW1hZ2UgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobm90TG9hZGVkSW1hZ2VzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdJbWFnZXMgbG9hZGVkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZXF1ZW5jZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpcnN0SW1hZ2UgPSBodG1sSW1hZ2VzQXJyYXlbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICBmaXJzdEltYWdlLnRhZ3MgPSBhd2FpdCBmaW5kVGFnc0luT2JqZWN0VVJMKGRpcmVjdG9yeSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhleCk7XG4gICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soaHRtbEltYWdlc0FycmF5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VxdWVuY2UgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBodG1sSW1hZ2VzU3JjQXJyYXlbMF0gPSBkaXJlY3Rvcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IG51bSA9IChvZmZzZXQgKyBpKTtcbiAgICAgICAgICAgICAgICBodG1sSW1hZ2VzU3JjQXJyYXlbaV0gPSBkaXJlY3RvcnkgKyAnaW1hZ2UtJyArICgnMDAnICsgbnVtKS5zbGljZSgtMykgKyAnLmpwZyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaHRtbEltYWdlc0FycmF5Lm5vdExvYWRlZCA9IFtdO1xuICAgICAgICBodG1sSW1hZ2VzQXJyYXkuYWRkSW1hZ2UgPSBmdW5jdGlvbiAoaW1hZ2UpIHtcbiAgICAgICAgICAgIGh0bWxJbWFnZXNBcnJheS5ub3RMb2FkZWQucHVzaChpbWFnZSk7XG4gICAgICAgIH07XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaHRtbEltYWdlc1NyY0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgaHRtbEltYWdlc0FycmF5LmFkZEltYWdlKGltYWdlKTtcbiAgICAgICAgICAgIGltYWdlLm9ubG9hZCA9ICgpID0+IGxvYWRlZChpbWFnZSk7XG4gICAgICAgICAgICBpbWFnZS5zcmMgPSBodG1sSW1hZ2VzU3JjQXJyYXlbaV07XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBJbWFnZUxvYWRlciB9IGZyb20gJy4vaW1hZ2VfbG9hZGVyJztcblxuZXhwb3J0IGNsYXNzIElucHV0U3RyZWFtIHtcbiAgICBzdGF0aWMgY3JlYXRlVmlkZW9TdHJlYW0odmlkZW8pIHtcbiAgICAgICAgY29uc3QgdGhhdCA9IHt9O1xuICAgICAgICBsZXQgX2NvbmZpZyA9IG51bGw7XG4gICAgICAgIGNvbnN0IF9ldmVudE5hbWVzID0gWydjYW5yZWNvcmQnLCAnZW5kZWQnXTtcbiAgICAgICAgY29uc3QgX2V2ZW50SGFuZGxlcnMgPSB7fTtcbiAgICAgICAgbGV0IF9jYWxjdWxhdGVkV2lkdGg7XG4gICAgICAgIGxldCBfY2FsY3VsYXRlZEhlaWdodDtcbiAgICAgICAgbGV0IF90b3BSaWdodCA9IHsgeDogMCwgeTogMCB9O1xuICAgICAgICBsZXQgX2NhbnZhc1dpZHRoID0gMDtcbiAgICAgICAgbGV0IF9jYW52YXNIZWlnaHQgPSAwO1xuXG4gICAgICAgIGZ1bmN0aW9uIGluaXRTaXplKCkge1xuICAgICAgICAgICAgY29uc3Qgd2lkdGggPSB2aWRlby52aWRlb1dpZHRoO1xuICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gdmlkZW8udmlkZW9IZWlnaHQ7XG5cbiAgICAgICAgICAgIF9jYW52YXNXaWR0aCA9IF9jYWxjdWxhdGVkV2lkdGggPVxuICAgICAgICAgICAgICAgIF9jb25maWcuc2l6ZSA/IHdpZHRoID4gaGVpZ2h0ID8gX2NvbmZpZy5zaXplIDogd2lkdGggKiBfY29uZmlnLnNpemUgLyBoZWlnaHQgfCAwIDogd2lkdGg7XG4gICAgICAgICAgICBfY2FudmFzSGVpZ2h0ID0gX2NhbGN1bGF0ZWRIZWlnaHQgPVxuICAgICAgICAgICAgICAgIF9jb25maWcuc2l6ZSA/IHdpZHRoID4gaGVpZ2h0ID8gaGVpZ2h0ICogX2NvbmZpZy5zaXplIC8gd2lkdGggfCAwIDogX2NvbmZpZy5zaXplIDogaGVpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhhdC5nZXRSZWFsV2lkdGggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdmlkZW8udmlkZW9XaWR0aDtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGF0LmdldFJlYWxIZWlnaHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdmlkZW8udmlkZW9IZWlnaHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhhdC5nZXRXaWR0aCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfY2FsY3VsYXRlZFdpZHRoO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoYXQuZ2V0SGVpZ2h0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9jYWxjdWxhdGVkSGVpZ2h0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoYXQuc2V0V2lkdGggPSBmdW5jdGlvbiAod2lkdGgpIHtcbiAgICAgICAgICAgIF9jYWxjdWxhdGVkV2lkdGggPSB3aWR0aDtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGF0LnNldEhlaWdodCA9IGZ1bmN0aW9uIChoZWlnaHQpIHtcbiAgICAgICAgICAgIF9jYWxjdWxhdGVkSGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoYXQuc2V0SW5wdXRTdHJlYW0gPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgICAgICAgICBfY29uZmlnID0gY29uZmlnO1xuICAgICAgICAgICAgdmlkZW8uc3JjID0gKHR5cGVvZiBjb25maWcuc3JjICE9PSAndW5kZWZpbmVkJykgPyBjb25maWcuc3JjIDogJyc7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhhdC5lbmRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB2aWRlby5lbmRlZDtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGF0LmdldENvbmZpZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfY29uZmlnO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoYXQuc2V0QXR0cmlidXRlID0gZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG4gICAgICAgICAgICB2aWRlby5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoYXQucGF1c2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2aWRlby5wYXVzZSgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoYXQucGxheSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZpZGVvLnBsYXkoKTtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGF0LnNldEN1cnJlbnRUaW1lID0gZnVuY3Rpb24gKHRpbWUpIHtcbiAgICAgICAgICAgIGlmIChfY29uZmlnLnR5cGUgIT09ICdMaXZlU3RyZWFtJykge1xuICAgICAgICAgICAgICAgIHZpZGVvLmN1cnJlbnRUaW1lID0gdGltZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB0aGF0LmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiAoZXZlbnQsIGYsIGJvb2wpIHtcbiAgICAgICAgICAgIGlmIChfZXZlbnROYW1lcy5pbmRleE9mKGV2ZW50KSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBpZiAoIV9ldmVudEhhbmRsZXJzW2V2ZW50XSkge1xuICAgICAgICAgICAgICAgICAgICBfZXZlbnRIYW5kbGVyc1tldmVudF0gPSBbXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX2V2ZW50SGFuZGxlcnNbZXZlbnRdLnB1c2goZik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGYsIGJvb2wpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoYXQuY2xlYXJFdmVudEhhbmRsZXJzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX2V2ZW50TmFtZXMuZm9yRWFjaChldmVudE5hbWUgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGhhbmRsZXJzID0gX2V2ZW50SGFuZGxlcnNbZXZlbnROYW1lXTtcbiAgICAgICAgICAgICAgICBpZiAoaGFuZGxlcnMgJiYgaGFuZGxlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGVycy5mb3JFYWNoKGhhbmRsZXIgPT4gdmlkZW8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGhhbmRsZXIpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGF0LnRyaWdnZXIgPSBmdW5jdGlvbiAoZXZlbnROYW1lLCBhcmdzKSB7XG4gICAgICAgICAgICBjb25zdCBoYW5kbGVycyA9IF9ldmVudEhhbmRsZXJzW2V2ZW50TmFtZV07XG5cbiAgICAgICAgICAgIGlmIChldmVudE5hbWUgPT09ICdjYW5yZWNvcmQnKSB7XG4gICAgICAgICAgICAgICAgaW5pdFNpemUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChoYW5kbGVycyAmJiBoYW5kbGVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBoYW5kbGVycy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGVyc1tqXS5hcHBseSh0aGF0LCBhcmdzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhhdC5zZXRUb3BSaWdodCA9IGZ1bmN0aW9uICh0b3BSaWdodCkge1xuICAgICAgICAgICAgX3RvcFJpZ2h0LnggPSB0b3BSaWdodC54O1xuICAgICAgICAgICAgX3RvcFJpZ2h0LnkgPSB0b3BSaWdodC55O1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoYXQuZ2V0VG9wUmlnaHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RvcFJpZ2h0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoYXQuc2V0Q2FudmFzU2l6ZSA9IGZ1bmN0aW9uICh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgICAgICBfY2FudmFzV2lkdGggPSB3aWR0aDtcbiAgICAgICAgICAgIF9jYW52YXNIZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhhdC5nZXRDYW52YXNXaWR0aCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfY2FudmFzV2lkdGg7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhhdC5nZXRDYW52YXNIZWlnaHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX2NhbnZhc0hlaWdodDtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGF0LmdldEZyYW1lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHZpZGVvO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiB0aGF0O1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVMaXZlU3RyZWFtKHZpZGVvKSB7XG4gICAgICAgIHZpZGVvLnNldEF0dHJpYnV0ZSgnYXV0b3BsYXknLCB0cnVlKTtcbiAgICAgICAgY29uc3QgdGhhdCA9IElucHV0U3RyZWFtLmNyZWF0ZVZpZGVvU3RyZWFtKHZpZGVvKTtcblxuICAgICAgICB0aGF0LmVuZGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiB0aGF0O1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVJbWFnZVN0cmVhbSgpIHtcbiAgICAgICAgY29uc3QgdGhhdCA9IHt9O1xuICAgICAgICBsZXQgX2NvbmZpZyA9IG51bGw7XG4gICAgICAgIGxldCB3aWR0aCA9IDA7XG4gICAgICAgIGxldCBoZWlnaHQgPSAwO1xuICAgICAgICBsZXQgZnJhbWVJbmRleCA9IDA7XG4gICAgICAgIGxldCBwYXVzZWQgPSB0cnVlO1xuICAgICAgICBsZXQgbG9hZGVkID0gZmFsc2U7XG4gICAgICAgIGxldCBfaW1hZ2VzID0gbnVsbDtcbiAgICAgICAgbGV0IHNpemUgPSAwO1xuICAgICAgICBsZXQgb2Zmc2V0ID0gMTtcbiAgICAgICAgbGV0IGJhc2VVcmwgPSBudWxsO1xuICAgICAgICBsZXQgZW5kZWQgPSBmYWxzZTtcbiAgICAgICAgbGV0IF9jYWxjdWxhdGVkV2lkdGg7XG4gICAgICAgIGxldCBfY2FsY3VsYXRlZEhlaWdodDtcbiAgICAgICAgY29uc3QgX2V2ZW50TmFtZXMgPSBbJ2NhbnJlY29yZCcsICdlbmRlZCddO1xuICAgICAgICBjb25zdCBfZXZlbnRIYW5kbGVycyA9IHt9O1xuICAgICAgICBsZXQgX3RvcFJpZ2h0ID0geyB4OiAwLCB5OiAwIH07XG4gICAgICAgIGxldCBfY2FudmFzV2lkdGggPSAwO1xuICAgICAgICBsZXQgX2NhbnZhc0hlaWdodCA9IDA7XG5cbiAgICAgICAgZnVuY3Rpb24gbG9hZEltYWdlcygpIHtcbiAgICAgICAgICAgIGxvYWRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgSW1hZ2VMb2FkZXIubG9hZChiYXNlVXJsLCBpbWFnZXMgPT4ge1xuICAgICAgICAgICAgICAgIF9pbWFnZXMgPSBpbWFnZXM7XG5cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGltYWdlc1swXS50YWdzICYmIGltYWdlc1swXS50YWdzLm9yaWVudGF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA4OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCA9IGltYWdlc1swXS5pbWFnZS5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQgPSBpbWFnZXNbMF0uaW1hZ2Uud2lkdGg7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCA9IGltYWdlc1swXS5pbWFnZS53aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodCA9IGltYWdlc1swXS5pbWFnZS5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBfY2FudmFzV2lkdGggPSBfY2FsY3VsYXRlZFdpZHRoID1cbiAgICAgICAgICAgICAgICAgICAgX2NvbmZpZy5zaXplID8gd2lkdGggPiBoZWlnaHQgPyBfY29uZmlnLnNpemUgOiB3aWR0aCAqIF9jb25maWcuc2l6ZSAvIGhlaWdodCB8IDAgOiB3aWR0aDtcbiAgICAgICAgICAgICAgICBfY2FudmFzSGVpZ2h0ID0gX2NhbGN1bGF0ZWRIZWlnaHQgPVxuICAgICAgICAgICAgICAgICAgICBfY29uZmlnLnNpemUgPyB3aWR0aCA+IGhlaWdodCA/IGhlaWdodCAqIF9jb25maWcuc2l6ZSAvIHdpZHRoIHwgMCA6IF9jb25maWcuc2l6ZSA6IGhlaWdodDtcbiAgICAgICAgICAgICAgICBsb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGZyYW1lSW5kZXggPSAwO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gcHVibGlzaEV2ZW50KCdjYW5yZWNvcmQnLCBbXSksIDApO1xuICAgICAgICAgICAgfSwgb2Zmc2V0LCBzaXplLCBfY29uZmlnLnNlcXVlbmNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHB1Ymxpc2hFdmVudChldmVudE5hbWUsIGFyZ3MpIHtcbiAgICAgICAgICAgIGNvbnN0IGhhbmRsZXJzID0gX2V2ZW50SGFuZGxlcnNbZXZlbnROYW1lXTtcblxuICAgICAgICAgICAgaWYgKGhhbmRsZXJzICYmIGhhbmRsZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGhhbmRsZXJzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXJzW2pdLmFwcGx5KHRoYXQsIGFyZ3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoYXQudHJpZ2dlciA9IHB1Ymxpc2hFdmVudDtcblxuICAgICAgICB0aGF0LmdldFdpZHRoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9jYWxjdWxhdGVkV2lkdGg7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhhdC5nZXRIZWlnaHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX2NhbGN1bGF0ZWRIZWlnaHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhhdC5zZXRXaWR0aCA9IGZ1bmN0aW9uIChuZXdXaWR0aCkge1xuICAgICAgICAgICAgX2NhbGN1bGF0ZWRXaWR0aCA9IG5ld1dpZHRoO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoYXQuc2V0SGVpZ2h0ID0gZnVuY3Rpb24gKG5ld0hlaWdodCkge1xuICAgICAgICAgICAgX2NhbGN1bGF0ZWRIZWlnaHQgPSBuZXdIZWlnaHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhhdC5nZXRSZWFsV2lkdGggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gd2lkdGg7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhhdC5nZXRSZWFsSGVpZ2h0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGhlaWdodDtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGF0LnNldElucHV0U3RyZWFtID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICAgICAgICAgICAgX2NvbmZpZyA9IGNvbmZpZztcbiAgICAgICAgICAgIGlmIChjb25maWcuc2VxdWVuY2UgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgYmFzZVVybCA9IGNvbmZpZy5zcmM7XG4gICAgICAgICAgICAgICAgc2l6ZSA9IDE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJhc2VVcmwgPSBjb25maWcuc3JjO1xuICAgICAgICAgICAgICAgIHNpemUgPSBjb25maWcubGVuZ3RoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbG9hZEltYWdlcygpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoYXQuZW5kZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gZW5kZWQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhhdC5zZXRBdHRyaWJ1dGUgPSBmdW5jdGlvbiAoKSB7IH07XG5cbiAgICAgICAgdGhhdC5nZXRDb25maWcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX2NvbmZpZztcbiAgICAgICAgfTtcblxuICAgICAgICB0aGF0LnBhdXNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcGF1c2VkID0gdHJ1ZTtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGF0LnBsYXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBwYXVzZWQgPSBmYWxzZTtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGF0LnNldEN1cnJlbnRUaW1lID0gZnVuY3Rpb24gKHRpbWUpIHtcbiAgICAgICAgICAgIGZyYW1lSW5kZXggPSB0aW1lO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoYXQuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uIChldmVudCwgZikge1xuICAgICAgICAgICAgaWYgKF9ldmVudE5hbWVzLmluZGV4T2YoZXZlbnQpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIGlmICghX2V2ZW50SGFuZGxlcnNbZXZlbnRdKSB7XG4gICAgICAgICAgICAgICAgICAgIF9ldmVudEhhbmRsZXJzW2V2ZW50XSA9IFtdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfZXZlbnRIYW5kbGVyc1tldmVudF0ucHVzaChmKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB0aGF0LnNldFRvcFJpZ2h0ID0gZnVuY3Rpb24gKHRvcFJpZ2h0KSB7XG4gICAgICAgICAgICBfdG9wUmlnaHQueCA9IHRvcFJpZ2h0Lng7XG4gICAgICAgICAgICBfdG9wUmlnaHQueSA9IHRvcFJpZ2h0Lnk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhhdC5nZXRUb3BSaWdodCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfdG9wUmlnaHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhhdC5zZXRDYW52YXNTaXplID0gZnVuY3Rpb24gKHcsIGgpIHtcbiAgICAgICAgICAgIF9jYW52YXNXaWR0aCA9IHc7XG4gICAgICAgICAgICBfY2FudmFzSGVpZ2h0ID0gaDtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGF0LmdldENhbnZhc1dpZHRoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9jYW52YXNXaWR0aDtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGF0LmdldENhbnZhc0hlaWdodCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfY2FudmFzSGVpZ2h0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoYXQuZ2V0RnJhbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsZXQgZnJhbWU7XG5cbiAgICAgICAgICAgIGlmICghbG9hZGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXBhdXNlZCkge1xuICAgICAgICAgICAgICAgIGZyYW1lID0gX2ltYWdlc1tmcmFtZUluZGV4XTtcbiAgICAgICAgICAgICAgICBpZiAoZnJhbWVJbmRleCA8IChzaXplIC0gMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZnJhbWVJbmRleCsrO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW5kZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHVibGlzaEV2ZW50KCdlbmRlZCcsIFtdKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZyYW1lO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiB0aGF0O1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENsdXN0ZXIgfSBmcm9tICcuLi9jb21tb24vY2x1c3Rlcic7XG5pbXBvcnQgeyBjYWxjdWxhdGVQYXRjaFNpemUsIGNvbXB1dGVJbWFnZUFyZWEsIGhhbGZTYW1wbGUsIGhzdjJyZ2IsIG90c3VUaHJlc2hvbGQgfSBmcm9tICcuLi9jb21tb24vY3ZfdXRpbHMnO1xuaW1wb3J0IHsgSW1hZ2VEZWJ1ZyB9IGZyb20gJy4uL2NvbW1vbi9pbWFnZV9kZWJ1Zyc7XG5pbXBvcnQgeyBJbWFnZVdyYXBwZXIgfSBmcm9tICcuLi9jb21tb24vaW1hZ2Vfd3JhcHBlcic7XG5pbXBvcnQgeyBSYXN0ZXJpemVyIH0gZnJvbSAnLi9yYXN0ZXJpemVyJztcbmltcG9ydCBza2VsZXRvbml6ZXIgZnJvbSAnLi9za2VsZXRvbml6ZXInO1xuaW1wb3J0IHsgU2VhcmNoRGlyZWN0aW9ucyB9IGZyb20gJy4vdHJhY2VyJztcblxubGV0IF9jb25maWc7XG5sZXQgX2N1cnJlbnRJbWFnZVdyYXBwZXI7XG5sZXQgX3NrZWxJbWFnZVdyYXBwZXI7XG5sZXQgX3N1YkltYWdlV3JhcHBlcjtcbmxldCBfbGFiZWxJbWFnZVdyYXBwZXI7XG5sZXQgX3BhdGNoR3JpZDtcbmxldCBfcGF0Y2hMYWJlbEdyaWQ7XG5sZXQgX2ltYWdlVG9QYXRjaEdyaWQ7XG5sZXQgX2JpbmFyeUltYWdlV3JhcHBlcjtcbmxldCBfcGF0Y2hTaXplO1xubGV0IF9jYW52YXNDb250YWluZXIgPSB7XG4gICAgY3R4OiB7XG4gICAgICAgIGJpbmFyeTogbnVsbFxuICAgIH0sXG4gICAgZG9tOiB7XG4gICAgICAgIGJpbmFyeTogbnVsbFxuICAgIH1cbn07XG5sZXQgX251bVBhdGNoZXMgPSB7IHg6IDAsIHk6IDAgfTtcbmxldCBfaW5wdXRJbWFnZVdyYXBwZXI7XG5sZXQgX3NrZWxldG9uaXplcjtcblxuZnVuY3Rpb24gaW5pdEJ1ZmZlcnMoKSB7XG4gICAgaWYgKF9jb25maWcuaGFsZlNhbXBsZSkge1xuICAgICAgICBfY3VycmVudEltYWdlV3JhcHBlciA9IG5ldyBJbWFnZVdyYXBwZXIoe1xuICAgICAgICAgICAgeDogX2lucHV0SW1hZ2VXcmFwcGVyLnNpemUueCAvIDIgfCAwLFxuICAgICAgICAgICAgeTogX2lucHV0SW1hZ2VXcmFwcGVyLnNpemUueSAvIDIgfCAwXG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIF9jdXJyZW50SW1hZ2VXcmFwcGVyID0gX2lucHV0SW1hZ2VXcmFwcGVyO1xuICAgIH1cblxuICAgIF9wYXRjaFNpemUgPSBjYWxjdWxhdGVQYXRjaFNpemUoX2NvbmZpZy5wYXRjaFNpemUsIF9jdXJyZW50SW1hZ2VXcmFwcGVyLnNpemUpO1xuXG4gICAgX251bVBhdGNoZXMueCA9IF9jdXJyZW50SW1hZ2VXcmFwcGVyLnNpemUueCAvIF9wYXRjaFNpemUueCB8IDA7XG4gICAgX251bVBhdGNoZXMueSA9IF9jdXJyZW50SW1hZ2VXcmFwcGVyLnNpemUueSAvIF9wYXRjaFNpemUueSB8IDA7XG5cbiAgICBfYmluYXJ5SW1hZ2VXcmFwcGVyID0gbmV3IEltYWdlV3JhcHBlcihfY3VycmVudEltYWdlV3JhcHBlci5zaXplLCB1bmRlZmluZWQsIFVpbnQ4QXJyYXksIGZhbHNlKTtcblxuICAgIF9sYWJlbEltYWdlV3JhcHBlciA9IG5ldyBJbWFnZVdyYXBwZXIoX3BhdGNoU2l6ZSwgdW5kZWZpbmVkLCBBcnJheSwgdHJ1ZSk7XG5cbiAgICBjb25zdCBza2VsZXRvbkltYWdlRGF0YSA9IG5ldyBBcnJheUJ1ZmZlcig2NCAqIDEwMjQpO1xuICAgIF9zdWJJbWFnZVdyYXBwZXIgPSBuZXcgSW1hZ2VXcmFwcGVyKF9wYXRjaFNpemUsIG5ldyBVaW50OEFycmF5KHNrZWxldG9uSW1hZ2VEYXRhLCAwLCBfcGF0Y2hTaXplLnggKiBfcGF0Y2hTaXplLnkpKTtcbiAgICBfc2tlbEltYWdlV3JhcHBlciA9IG5ldyBJbWFnZVdyYXBwZXIoX3BhdGNoU2l6ZSxcbiAgICAgICAgbmV3IFVpbnQ4QXJyYXkoc2tlbGV0b25JbWFnZURhdGEsIF9wYXRjaFNpemUueCAqIF9wYXRjaFNpemUueSAqIDMsIF9wYXRjaFNpemUueCAqIF9wYXRjaFNpemUueSksXG4gICAgICAgIHVuZGVmaW5lZCwgdHJ1ZSk7XG4gICAgX3NrZWxldG9uaXplciA9IHNrZWxldG9uaXplcihcbiAgICAgICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSA/IHdpbmRvdyA6ICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcpID8gc2VsZiA6IGdsb2JhbCxcbiAgICAgICAgeyBzaXplOiBfcGF0Y2hTaXplLnggfSxcbiAgICAgICAgc2tlbGV0b25JbWFnZURhdGFcbiAgICApO1xuXG4gICAgX2ltYWdlVG9QYXRjaEdyaWQgPSBuZXcgSW1hZ2VXcmFwcGVyKHtcbiAgICAgICAgeDogKF9jdXJyZW50SW1hZ2VXcmFwcGVyLnNpemUueCAvIF9zdWJJbWFnZVdyYXBwZXIuc2l6ZS54KSB8IDAsXG4gICAgICAgIHk6IChfY3VycmVudEltYWdlV3JhcHBlci5zaXplLnkgLyBfc3ViSW1hZ2VXcmFwcGVyLnNpemUueSkgfCAwXG4gICAgfSwgdW5kZWZpbmVkLCBBcnJheSwgdHJ1ZSk7XG4gICAgX3BhdGNoR3JpZCA9IG5ldyBJbWFnZVdyYXBwZXIoX2ltYWdlVG9QYXRjaEdyaWQuc2l6ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRydWUpO1xuICAgIF9wYXRjaExhYmVsR3JpZCA9IG5ldyBJbWFnZVdyYXBwZXIoX2ltYWdlVG9QYXRjaEdyaWQuc2l6ZSwgdW5kZWZpbmVkLCBJbnQzMkFycmF5LCB0cnVlKTtcbn1cblxuZnVuY3Rpb24gaW5pdENhbnZhcygpIHtcbiAgICBpZiAoX2NvbmZpZy51c2VXb3JrZXIgfHwgdHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIF9jYW52YXNDb250YWluZXIuZG9tLmJpbmFyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIF9jYW52YXNDb250YWluZXIuZG9tLmJpbmFyeS5jbGFzc05hbWUgPSAnYmluYXJ5QnVmZmVyJztcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBfY29uZmlnLmRlYnVnICYmIF9jb25maWcuZGVidWcuc2hvd0NhbnZhcykge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVidWcnKS5hcHBlbmRDaGlsZChfY2FudmFzQ29udGFpbmVyLmRvbS5iaW5hcnkpO1xuICAgIH1cbiAgICBfY2FudmFzQ29udGFpbmVyLmN0eC5iaW5hcnkgPSBfY2FudmFzQ29udGFpbmVyLmRvbS5iaW5hcnkuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBfY2FudmFzQ29udGFpbmVyLmRvbS5iaW5hcnkud2lkdGggPSBfYmluYXJ5SW1hZ2VXcmFwcGVyLnNpemUueDtcbiAgICBfY2FudmFzQ29udGFpbmVyLmRvbS5iaW5hcnkuaGVpZ2h0ID0gX2JpbmFyeUltYWdlV3JhcHBlci5zaXplLnk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGJvdW5kaW5nIGJveCB3aGljaCBlbmNsb3NlcyBhbGwgdGhlIGdpdmVuIHBhdGNoZXNcbiAqIEByZXR1cm5zIFRoZSBtaW5pbWFsIGJvdW5kaW5nIGJveFxuICovXG5mdW5jdGlvbiBib3hGcm9tUGF0Y2hlcyhwYXRjaGVzKSB7XG4gICAgbGV0IGF2ZXJhZ2VSYWQgPSBwYXRjaGVzLnJlZHVjZSgoc3VtLCBwYXRjaCkgPT4ge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBfY29uZmlnLmRlYnVnICYmIF9jb25maWcuZGVidWcuc2hvd1BhdGNoZXMpIHtcbiAgICAgICAgICAgIC8vIGRyYXcgYWxsIHBhdGNoZXMgd2hpY2ggYXJlIHRvIGJlIHRha2VuIGludG8gY29uc2lkZXJhdGlvblxuICAgICAgICAgICAgSW1hZ2VEZWJ1Zy5kcmF3UmVjdChwYXRjaC5wb3MsIF9zdWJJbWFnZVdyYXBwZXIuc2l6ZSwgX2NhbnZhc0NvbnRhaW5lci5jdHguYmluYXJ5LCB7IGNvbG9yOiAncmVkJyB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdW0gKyBwYXRjaC5yYWQ7XG4gICAgfSwgMCkgLyBwYXRjaGVzLmxlbmd0aDtcblxuICAgIGF2ZXJhZ2VSYWQgPSAoYXZlcmFnZVJhZCAqIDE4MCAvIE1hdGguUEkgKyA5MCkgJSAxODAgLSA5MDtcbiAgICBpZiAoYXZlcmFnZVJhZCA8IDApIHtcbiAgICAgICAgYXZlcmFnZVJhZCArPSAxODA7XG4gICAgfVxuICAgIGF2ZXJhZ2VSYWQgPSAoMTgwIC0gYXZlcmFnZVJhZCkgKiBNYXRoLlBJIC8gMTgwO1xuXG4gICAgY29uc3QgY29zID0gTWF0aC5jb3MoYXZlcmFnZVJhZCk7XG4gICAgY29uc3Qgc2luID0gTWF0aC5zaW4oYXZlcmFnZVJhZCk7XG4gICAgY29uc3QgbWF0cml4ID0gbmV3IEZsb2F0MzJBcnJheShbY29zLCBzaW4sIC1zaW4sIGNvc10pO1xuICAgIGNvbnN0IGNvbnRleHQgPSBfY2FudmFzQ29udGFpbmVyLmN0eC5iaW5hcnk7XG5cbiAgICAvLyBpdGVyYXRlIG92ZXIgcGF0Y2hlcyBhbmQgcm90YXRlIGJ5IGFuZ2xlXG4gICAgcGF0Y2hlcy5mb3JFYWNoKCh7IGJveCB9KSA9PiB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgNDsgaisrKSB7XG4gICAgICAgICAgICBib3hbal0gPSB0cmFuc2Zvcm1XaXRoTWF0cml4KGJveFtqXSwgbWF0cml4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIF9jb25maWcuZGVidWcgJiYgX2NvbmZpZy5kZWJ1Zy5ib3hGcm9tUGF0Y2hlcy5zaG93VHJhbnNmb3JtZWQpIHtcbiAgICAgICAgICAgIEltYWdlRGVidWcuZHJhd1BhdGgoYm94LCB7IHg6ICd4JywgeTogJ3knIH0sIGNvbnRleHQsIHsgY29sb3I6ICcjOTlmZjAwJywgbGluZVdpZHRoOiAyIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBsZXQgbWluWCA9IF9iaW5hcnlJbWFnZVdyYXBwZXIuc2l6ZS54O1xuICAgIGxldCBtaW5ZID0gX2JpbmFyeUltYWdlV3JhcHBlci5zaXplLnk7XG4gICAgbGV0IG1heFggPSAtbWluWDtcbiAgICBsZXQgbWF4WSA9IC1taW5ZO1xuXG4gICAgLy8gZmluZCBib3VuZGluZyBib3hcbiAgICBwYXRjaGVzLmZvckVhY2goKHsgYm94IH0pID0+IHtcbiAgICAgICAgYm94LmZvckVhY2goKHsgeCwgeSB9KSA9PiB7XG4gICAgICAgICAgICBpZiAoeCA8IG1pblgpIHtcbiAgICAgICAgICAgICAgICBtaW5YID0geDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh4ID4gbWF4WCkge1xuICAgICAgICAgICAgICAgIG1heFggPSB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHkgPCBtaW5ZKSB7XG4gICAgICAgICAgICAgICAgbWluWSA9IHk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoeSA+IG1heFkpIHtcbiAgICAgICAgICAgICAgICBtYXhZID0geTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBib3ggPSBbeyB4OiBtaW5YLCB5OiBtaW5ZIH0sIHsgeDogbWF4WCwgeTogbWluWSB9LCB7IHg6IG1heFgsIHk6IG1heFkgfSwgeyB4OiBtaW5YLCB5OiBtYXhZIH1dO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgX2NvbmZpZy5kZWJ1ZyAmJiBfY29uZmlnLmRlYnVnLmJveEZyb21QYXRjaGVzLnNob3dUcmFuc2Zvcm1lZEJveCkge1xuICAgICAgICBJbWFnZURlYnVnLmRyYXdQYXRoKGJveCwgeyB4OiAneCcsIHk6ICd5JyB9LCBjb250ZXh0LCB7IGNvbG9yOiAnI2ZmMDAwMCcsIGxpbmVXaWR0aDogMiB9KTtcbiAgICB9XG5cbiAgICAvLyByZXZlcnNlIHJvdGF0aW9uXG4gICAgY29uc3QgaW52ZXJzZU1hdHJpeCA9IGludmVydChtYXRyaXgpO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgNDsgaisrKSB7XG4gICAgICAgIGJveFtqXSA9IHRyYW5zZm9ybVdpdGhNYXRyaXgoYm94W2pdLCBpbnZlcnNlTWF0cml4KTtcbiAgICB9XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBfY29uZmlnLmRlYnVnICYmIF9jb25maWcuZGVidWcuYm94RnJvbVBhdGNoZXMuc2hvd0JCKSB7XG4gICAgICAgIEltYWdlRGVidWcuZHJhd1BhdGgoYm94LCB7IHg6ICd4JywgeTogJ3knIH0sIGNvbnRleHQsIHsgY29sb3I6ICcjZmYwMDAwJywgbGluZVdpZHRoOiAyIH0pO1xuICAgIH1cblxuICAgIGlmIChfY29uZmlnLmhhbGZTYW1wbGUpIHtcbiAgICAgICAgLy8gc2NhbGVcbiAgICAgICAgYm94LmZvckVhY2godmVydGV4ID0+IHtcbiAgICAgICAgICAgIHZlcnRleC54ICo9IDI7XG4gICAgICAgICAgICB2ZXJ0ZXgueSAqPSAyO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYm94O1xufVxuXG4vKipcbiAqIEludmVydCBtYXRyaXhcbiAqIEBwYXJhbSBtYXRyaXggdGhlIG1hdHJpeCB0byBpbnZlcnRcbiAqIEByZXR1cm5zIHRoZSBpbnZlcnRlZCBtYXRyaXhcbiAqL1xuZnVuY3Rpb24gaW52ZXJ0KG1hdHJpeCkge1xuICAgIGNvbnN0IGEwID0gbWF0cml4WzBdO1xuICAgIGNvbnN0IGExID0gbWF0cml4WzFdO1xuICAgIGNvbnN0IGEyID0gbWF0cml4WzJdO1xuICAgIGNvbnN0IGEzID0gbWF0cml4WzNdO1xuICAgIGNvbnN0IGRldGVybWluYW50ID0gYTAgKiBhMyAtIGEyICogYTE7XG5cbiAgICBpZiAoIWRldGVybWluYW50KSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRmxvYXQzMkFycmF5KFthMyAvIGRldGVybWluYW50LCAtYTEgLyBkZXRlcm1pbmFudCwgLWEyIC8gZGV0ZXJtaW5hbnQsIGEwIC8gZGV0ZXJtaW5hbnRdKTtcbn1cblxuLyoqXG4gKiBUcmFuc2Zvcm1zIHRoZSB2ZWN0b3Igd2l0aCBhIG1hdHJpeFxuICogQHBhcmFtIHsgeCwgeSB9IHZlY3RvciB0byB0cmFuc2Zvcm1cbiAqIEBwYXJhbSBtYXRyaWMgbWF0cml4IHRvIHRyYW5zZm9ybSB3aXRoXG4gKiBAcmV0dXJucyB0aGUgdHJhbnNmb3JtZWQgdmVjdG9yXG4gKi9cbmZ1bmN0aW9uIHRyYW5zZm9ybVdpdGhNYXRyaXgoeyB4LCB5IH0sIG1hdHJpeCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHg6IG1hdHJpeFswXSAqIHggKyBtYXRyaXhbMl0gKiB5LFxuICAgICAgICB5OiBtYXRyaXhbMV0gKiB4ICsgbWF0cml4WzNdICogeVxuICAgIH07XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGJpbmFyeSBpbWFnZSBvZiB0aGUgY3VycmVudCBpbWFnZVxuICovXG5mdW5jdGlvbiBiaW5hcml6ZUltYWdlKCkge1xuICAgIG90c3VUaHJlc2hvbGQoX2N1cnJlbnRJbWFnZVdyYXBwZXIsIF9iaW5hcnlJbWFnZVdyYXBwZXIpO1xuICAgIF9iaW5hcnlJbWFnZVdyYXBwZXIuemVyb0JvcmRlcigpO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgX2NvbmZpZy5kZWJ1ZyAmJiBfY29uZmlnLmRlYnVnLnNob3dDYW52YXMpIHtcbiAgICAgICAgX2JpbmFyeUltYWdlV3JhcHBlci5zaG93KF9jYW52YXNDb250YWluZXIuZG9tLmJpbmFyeSwgMjU1KTtcbiAgICB9XG59XG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIHRoZSBlbnRpcmUgaW1hZ2VcbiAqIGV4dHJhY3QgcGF0Y2hlc1xuICovXG5mdW5jdGlvbiBmaW5kUGF0Y2hlcygpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gX2NhbnZhc0NvbnRhaW5lci5jdHguYmluYXJ5O1xuICAgIGxldCBwYXRjaGVzRm91bmQgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgX251bVBhdGNoZXMueDsgaSsrKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgX251bVBhdGNoZXMueTsgaisrKSB7XG4gICAgICAgICAgICBjb25zdCB4ID0gX3N1YkltYWdlV3JhcHBlci5zaXplLnggKiBpO1xuICAgICAgICAgICAgY29uc3QgeSA9IF9zdWJJbWFnZVdyYXBwZXIuc2l6ZS55ICogajtcblxuICAgICAgICAgICAgLy8gc2VwZXJhdGUgcGFydHNcbiAgICAgICAgICAgIHNrZWxldG9uaXplKHgsIHkpO1xuXG4gICAgICAgICAgICAvLyBSYXN0ZXJpemUsIGZpbmQgaW5kaXZpZHVhbCBiYXJzXG4gICAgICAgICAgICBfc2tlbEltYWdlV3JhcHBlci56ZXJvQm9yZGVyKCk7XG4gICAgICAgICAgICBfbGFiZWxJbWFnZVdyYXBwZXIuZGF0YS5maWxsKDApO1xuICAgICAgICAgICAgY29uc3QgcmFzdGVyaXplciA9IG5ldyBSYXN0ZXJpemVyKF9za2VsSW1hZ2VXcmFwcGVyLCBfbGFiZWxJbWFnZVdyYXBwZXIpO1xuICAgICAgICAgICAgY29uc3QgcmFzdGVyUmVzdWx0ID0gcmFzdGVyaXplci5yYXN0ZXJpemUoMCk7XG5cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIF9jb25maWcuZGVidWcgJiYgX2NvbmZpZy5kZWJ1Zy5zaG93TGFiZWxzKSB7XG4gICAgICAgICAgICAgICAgX2xhYmVsSW1hZ2VXcmFwcGVyLm92ZXJsYXkoX2NhbnZhc0NvbnRhaW5lci5kb20uYmluYXJ5LCAzNjAgLyByYXN0ZXJSZXN1bHQuY291bnQgfCAwLCB4LCB5KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gY2FsY3VsYXRlIG1vbWVudHMgZnJvbSB0aGUgc2tlbGV0b25pemVkIHBhdGNoXG4gICAgICAgICAgICBjb25zdCBtb21lbnRzID0gX2xhYmVsSW1hZ2VXcmFwcGVyLm1vbWVudHMocmFzdGVyUmVzdWx0LmNvdW50KTtcblxuICAgICAgICAgICAgLy8gZXh0cmFjdCBlbGlnaWJsZSBwYXRjaGVzXG4gICAgICAgICAgICBjb25zdCBwYXRjaCA9IGRlc2NyaWJlUGF0Y2gobW9tZW50cywgaiAqIF9udW1QYXRjaGVzLnggKyBpLCB4LCB5KTtcbiAgICAgICAgICAgIGlmIChwYXRjaCkge1xuICAgICAgICAgICAgICAgIHBhdGNoZXNGb3VuZC5wdXNoKHBhdGNoKTtcblxuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIF9jb25maWcuZGVidWcgJiYgX2NvbmZpZy5kZWJ1Zy5zaG93Rm91bmRQYXRjaGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIEltYWdlRGVidWcuZHJhd1JlY3QocGF0Y2gucG9zLCBfc3ViSW1hZ2VXcmFwcGVyLnNpemUsIGNvbnRleHQsIHsgY29sb3I6ICcjOTlmZjAwJywgbGluZVdpZHRoOiAyIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwYXRjaGVzRm91bmQ7XG59XG5cbi8qKlxuICogRmluZHMgdGhvc2UgY29ubmVjdGVkIGFyZWFzIHdoaWNoIGNvbnRhaW4gYXQgbGVhc3QgNiBwYXRjaGVzXG4gKiBhbmQgcmV0dXJucyB0aGVtIG9yZGVyZWQgREVTQyBieSB0aGUgbnVtYmVyIG9mIGNvbnRhaW5lZCBwYXRjaGVzXG4gKiBAcGFyYW0gbWF4TGFiZWxcbiAqL1xuZnVuY3Rpb24gZmluZEJpZ2dlc3RDb25uZWN0ZWRBcmVhcyhtYXhMYWJlbCkge1xuICAgIGxldCBsYWJlbEhpc3QgPSBuZXcgQXJyYXkobWF4TGFiZWwpLmZpbGwoMCk7XG5cbiAgICBfcGF0Y2hMYWJlbEdyaWQuZGF0YS5mb3JFYWNoKGRhdGEgPT4ge1xuICAgICAgICBpZiAoZGF0YSA+IDApIHtcbiAgICAgICAgICAgIGxhYmVsSGlzdFtkYXRhIC0gMV0rKztcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gZXh0cmFjdCB0b3AgYXJlYXMgd2l0aCBhdCBsZWFzdCA2IHBhdGNoZXMgcHJlc2VudFxuICAgIGNvbnN0IHRvcExhYmVscyA9IGxhYmVsSGlzdFxuICAgICAgICAubWFwKCh2YWwsIGluZGV4KSA9PiAoeyB2YWwsIGxhYmVsOiBpbmRleCArIDEgfSkpLnNvcnQoKGEsIGIpID0+IGIudmFsIC0gYS52YWwpLmZpbHRlcigoeyB2YWwgfSkgPT4gdmFsID49IDUpO1xuXG4gICAgcmV0dXJuIHRvcExhYmVscztcbn1cblxuLyoqXG4gKlxuICovXG5mdW5jdGlvbiBmaW5kQm94ZXModG9wTGFiZWxzLCBtYXhMYWJlbCkge1xuICAgIGNvbnN0IGJveGVzID0gW107XG4gICAgY29uc3QgZGVidWcgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIF9jb25maWcuZGVidWcgJiYgX2NvbmZpZy5kZWJ1Zy5zaG93UmVtYWluaW5nUGF0Y2hMYWJlbHM7XG4gICAgY29uc3QgY29udGV4dCA9IF9jYW52YXNDb250YWluZXIuY3R4LmJpbmFyeTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9wTGFiZWxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHBhdGNoZXMgPSBbXTtcblxuICAgICAgICBfcGF0Y2hMYWJlbEdyaWQuZGF0YS5mb3JFYWNoKChkYXRhLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKGRhdGEgPT09IHRvcExhYmVsc1tpXS5sYWJlbCkge1xuICAgICAgICAgICAgICAgIHBhdGNoZXMucHVzaChfaW1hZ2VUb1BhdGNoR3JpZC5kYXRhW2luZGV4XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGJveCA9IGJveEZyb21QYXRjaGVzKHBhdGNoZXMpO1xuXG4gICAgICAgIGlmIChib3gpIHtcbiAgICAgICAgICAgIGJveGVzLnB1c2goYm94KTtcblxuICAgICAgICAgICAgaWYgKGRlYnVnKSB7XG4gICAgICAgICAgICAgICAgLy8gZHJhdyBwYXRjaC1sYWJlbHMgaWYgcmVxdWVzdGVkXG4gICAgICAgICAgICAgICAgY29uc3QgaHN2ID0gWyh0b3BMYWJlbHNbaV0ubGFiZWwgLyAobWF4TGFiZWwgKyAxKSkgKiAzNjAsIDEsIDFdO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJnYiA9IFswLCAwLCAwXTtcbiAgICAgICAgICAgICAgICBoc3YycmdiKGhzdiwgcmdiKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHN0eWxlID0ge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogYHJnYigke3JnYi5qb2luKCcsJyl9KWAsXG4gICAgICAgICAgICAgICAgICAgIGxpbmVXaWR0aDogMlxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBwYXRjaGVzLmZvckVhY2goKHsgcG9zIH0pID0+IEltYWdlRGVidWcuZHJhd1JlY3QocG9zLCBfc3ViSW1hZ2VXcmFwcGVyLnNpemUsIGNvbnRleHQsIHN0eWxlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYm94ZXM7XG59XG5cbmZ1bmN0aW9uIGNsdXN0ZXJpemUocG9pbnRzLCB0aHJlc2hvbGQsIHByb3BlcnR5ID0gJ3JhZCcpIHtcbiAgICBjb25zdCBjbHVzdGVycyA9IFtdO1xuXG4gICAgcG9pbnRzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBwb2ludCA9IHtcbiAgICAgICAgICAgIHJhZDogdmFsdWVbcHJvcGVydHldLFxuICAgICAgICAgICAgcG9pbnQ6IHZhbHVlLFxuICAgICAgICAgICAgaWQ6IGluZGV4XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IG1hdGNoaW5nQ2x1c3RlciA9IGNsdXN0ZXJzLmZpbmQoY2x1c3RlciA9PiBjbHVzdGVyLmZpdHMocG9pbnQpKTtcblxuICAgICAgICBpZiAobWF0Y2hpbmdDbHVzdGVyKSB7XG4gICAgICAgICAgICBtYXRjaGluZ0NsdXN0ZXIuYWRkKHBvaW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNsdXN0ZXJzLnB1c2gobmV3IENsdXN0ZXIodGhyZXNob2xkLCBwb2ludCkpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY2x1c3RlcnM7XG59XG5cbi8qKlxuICogRmluZCBzaW1pbGFyIG1vbWVudHMgKHZpYSBjbHVzdGVyKVxuICogQHBhcmFtIG1vbWVudHNcbiAqL1xuZnVuY3Rpb24gc2ltaWxhck1vbWVudHMobW9tZW50cykge1xuICAgIGNvbnN0IGNsdXN0ZXJzID0gY2x1c3Rlcml6ZShtb21lbnRzLCAwLjkwKTtcbiAgICBjb25zdCB0b3BDbHVzdGVyID0gY2x1c3RlcnMucmVkdWNlKCh0b3AsIGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3QgY291bnQgPSBpdGVtLnBvaW50cy5sZW5ndGg7XG4gICAgICAgIHJldHVybiBjb3VudCA+IHRvcC5jb3VudCA/IHsgaXRlbSwgY291bnQgfSA6IHRvcDtcbiAgICB9LCB7IGl0ZW06IHsgcG9pbnRzOiBbXSB9LCBjb3VudDogMCB9KTtcbiAgICBjb25zdCByZXN1bHQgPSB0b3BDbHVzdGVyLml0ZW0ucG9pbnRzLm1hcCgoeyBwb2ludCB9KSA9PiBwb2ludCk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBza2VsZXRvbml6ZSh4LCB5KSB7XG4gICAgX2JpbmFyeUltYWdlV3JhcHBlci5zdWJJbWFnZUFzQ29weShfc3ViSW1hZ2VXcmFwcGVyLCB4LCB5KTtcbiAgICBfc2tlbGV0b25pemVyLnNrZWxldG9uaXplKCk7XG5cbiAgICAvLyBTaG93IHNrZWxldG9uIGlmIHJlcXVlc3RlZFxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIF9jb25maWcuZGVidWcgJiYgX2NvbmZpZy5kZWJ1Zy5zaG93U2tlbGV0b24pIHtcbiAgICAgICAgX3NrZWxJbWFnZVdyYXBwZXIub3ZlcmxheShfY2FudmFzQ29udGFpbmVyLmRvbS5iaW5hcnksIDM2MCwgeCwgeSk7XG4gICAgfVxufVxuXG4vKipcbiAqIEV4dHJhY3RzIGFuZCBkZXNjcmliZXMgdGhvc2UgcGF0Y2hlcyB3aGljaCBzZWVtIHRvIGNvbnRhaW4gYSBiYXJjb2RlIHBhdHRlcm5cbiAqIEBwYXJhbSB7QXJyYXl9IG1vbWVudHNcbiAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleFxuICogQHBhcmFtIHtOdW1iZXJ9IHhcbiAqIEBwYXJhbSB7TnVtYmVyfSB5XG4gKiBAcmV0dXJucyB7QXJyYXl9IGxpc3Qgb2YgcGF0Y2hlc1xuICovXG5mdW5jdGlvbiBkZXNjcmliZVBhdGNoKG1vbWVudHMsIGluZGV4LCB4LCB5KSB7XG4gICAgaWYgKG1vbWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBjb25zdCBtaW5Db21wb25lbnRXZWlnaHQgPSBNYXRoLmNlaWwoX3BhdGNoU2l6ZS54IC8gMyk7XG4gICAgICAgIC8vIG9ubHkgY29sbGVjdCBtb21lbnRzIHdoaWNoIGFyZWEgY292ZXJzIGF0IGxlYXN0IG1pbkNvbXBvbmVudFdlaWdodCBwaXhlbHNcbiAgICAgICAgY29uc3QgZWxpZ2libGVNb21lbnRzID0gbW9tZW50cy5maWx0ZXIobW9tZW50ID0+IG1vbWVudC5tMDAgPiBtaW5Db21wb25lbnRXZWlnaHQpO1xuXG4gICAgICAgIC8vIGlmIGF0IGxlYXN0IDIgbW9tZW50cyBhcmUgZm91bmQgd2hpY2ggaGF2ZSBhdCBsZWFzdCBtaW5Db21wb25lbnRXZWlnaHRzIGNvdmVyZWRcbiAgICAgICAgaWYgKGVsaWdpYmxlTW9tZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBjb25zdCBtYXRjaGluZ01vbWVudHMgPSBzaW1pbGFyTW9tZW50cyhlbGlnaWJsZU1vbWVudHMpO1xuICAgICAgICAgICAgY29uc3QgbGVuZ3RoID0gbWF0Y2hpbmdNb21lbnRzLmxlbmd0aCB8IDA7XG5cbiAgICAgICAgICAgIC8vIE9ubHkgdHdvIG9mIHRoZSBtb21lbnRzIGFyZSBhbGxvd2VkIG5vdCB0byBmaXQgaW50byB0aGUgZXF1YXRpb25cbiAgICAgICAgICAgIGlmIChsZW5ndGggPiAxICYmIChsZW5ndGggPDwgMikgPj0gZWxpZ2libGVNb21lbnRzLmxlbmd0aCAqIDMgJiYgKGxlbmd0aCA8PCAyKSA+IG1vbWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgLy8gZGV0ZXJtaW5lIHRoZSBzaW1pbGFyaXR5IG9mIHRoZSBtb21lbnRzXG4gICAgICAgICAgICAgICAgY29uc3QgcmFkID0gbWF0Y2hpbmdNb21lbnRzLnJlZHVjZSgoc3VtLCBtb21lbnQpID0+IHN1bSArIG1vbWVudC5yYWQsIDApIC8gbGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgIHBvczogeyB4LCB5IH0sXG4gICAgICAgICAgICAgICAgICAgIGJveDogW1xuICAgICAgICAgICAgICAgICAgICAgICAgeyB4LCB5IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHg6IHggKyBfc3ViSW1hZ2VXcmFwcGVyLnNpemUueCwgeSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgeyB4OiB4ICsgX3N1YkltYWdlV3JhcHBlci5zaXplLngsIHk6IHkgKyBfc3ViSW1hZ2VXcmFwcGVyLnNpemUueSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgeyB4LCB5OiB5ICsgX3N1YkltYWdlV3JhcHBlci5zaXplLnkgfVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBtb21lbnRzOiBtYXRjaGluZ01vbWVudHMsXG4gICAgICAgICAgICAgICAgICAgIHJhZCxcbiAgICAgICAgICAgICAgICAgICAgeDogTWF0aC5jb3MocmFkKSxcbiAgICAgICAgICAgICAgICAgICAgeTogTWF0aC5zaW4ocmFkKVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKiBmaW5kcyBwYXRjaGVzIHdoaWNoIGFyZSBjb25uZWN0ZWQgYW5kIHNoYXJlIHRoZSBzYW1lIG9yaWVudGF0aW9uXG4gKiBAcGFyYW0gcGF0Y2hlc0ZvdW5kXG4gKi9cbmZ1bmN0aW9uIHJhc3Rlcml6ZUFuZ3VsYXJTaW1pbGFyaXR5KHBhdGNoZXNGb3VuZCkge1xuICAgIGNvbnN0IHRocmVzaG9sZCA9IDAuOTU7XG4gICAgbGV0IGxhYmVsID0gMDtcbiAgICBjb25zdCBoc3YgPSBbMCwgMSwgMV07XG4gICAgY29uc3QgcmdiID0gWzAsIDAsIDBdO1xuXG4gICAgZnVuY3Rpb24gbm90WWV0UHJvY2Vzc2VkKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IF9wYXRjaExhYmVsR3JpZC5kYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoX3BhdGNoTGFiZWxHcmlkLmRhdGFbaV0gPT09IDAgJiYgX3BhdGNoR3JpZC5kYXRhW2ldID09PSAxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF9wYXRjaExhYmVsR3JpZC5kYXRhLmxlbmd0aDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0cmFjZShjdXJyZW50SW5kZXgpIHtcbiAgICAgICAgY29uc3QgY3VycmVudCA9IHtcbiAgICAgICAgICAgIHg6IGN1cnJlbnRJbmRleCAlIF9wYXRjaExhYmVsR3JpZC5zaXplLngsXG4gICAgICAgICAgICB5OiAoY3VycmVudEluZGV4IC8gX3BhdGNoTGFiZWxHcmlkLnNpemUueCkgfCAwXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGN1cnJlbnRJbmRleCA8IF9wYXRjaExhYmVsR3JpZC5kYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFBhdGNoID0gX2ltYWdlVG9QYXRjaEdyaWQuZGF0YVtjdXJyZW50SW5kZXhdO1xuICAgICAgICAgICAgLy8gYXNzaWduIGxhYmVsXG4gICAgICAgICAgICBfcGF0Y2hMYWJlbEdyaWQuZGF0YVtjdXJyZW50SW5kZXhdID0gbGFiZWw7XG5cbiAgICAgICAgICAgIFNlYXJjaERpcmVjdGlvbnMuZm9yRWFjaChkaXJlY3Rpb24gPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHkgPSBjdXJyZW50LnkgKyBkaXJlY3Rpb25bMF07XG4gICAgICAgICAgICAgICAgY29uc3QgeCA9IGN1cnJlbnQueCArIGRpcmVjdGlvblsxXTtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IHkgKiBfcGF0Y2hMYWJlbEdyaWQuc2l6ZS54ICsgeDtcblxuICAgICAgICAgICAgICAgIC8vIGNvbnRpbnVlIGlmIHBhdGNoIGVtcHR5XG4gICAgICAgICAgICAgICAgaWYgKF9wYXRjaEdyaWQuZGF0YVtpbmRleF0gPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgX3BhdGNoTGFiZWxHcmlkLmRhdGFbaW5kZXhdID0gTnVtYmVyLk1BWF9WQUxVRTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKF9wYXRjaExhYmVsR3JpZC5kYXRhW2luZGV4XSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXRjaCA9IF9pbWFnZVRvUGF0Y2hHcmlkLmRhdGFbaW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzaW1pbGFyaXR5ID0gTWF0aC5hYnMocGF0Y2gueCAqIGN1cnJlbnRQYXRjaC54ICsgcGF0Y2gueSAqIGN1cnJlbnRQYXRjaC55KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNpbWlsYXJpdHkgPiB0aHJlc2hvbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYWNlKGluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gcHJlcGFyZSBmb3IgZmluZGluZyB0aGUgcmlnaHQgcGF0Y2hlc1xuICAgIF9wYXRjaEdyaWQuZGF0YS5maWxsKDApO1xuICAgIF9wYXRjaExhYmVsR3JpZC5kYXRhLmZpbGwoMCk7XG4gICAgX2ltYWdlVG9QYXRjaEdyaWQuZGF0YS5maWxsKG51bGwpO1xuXG4gICAgcGF0Y2hlc0ZvdW5kLmZvckVhY2gocGF0Y2ggPT4ge1xuICAgICAgICBfaW1hZ2VUb1BhdGNoR3JpZC5kYXRhW3BhdGNoLmluZGV4XSA9IHBhdGNoO1xuICAgICAgICBfcGF0Y2hHcmlkLmRhdGFbcGF0Y2guaW5kZXhdID0gMTtcbiAgICB9KTtcblxuICAgIC8vIHJhc3Rlcml6ZSB0aGUgcGF0Y2hlcyBmb3VuZCB0byBkZXRlcm1pbmUgYXJlYVxuICAgIF9wYXRjaEdyaWQuemVyb0JvcmRlcigpO1xuXG4gICAgbGV0IGN1cnJlbnRJbmRleCA9IDA7XG4gICAgd2hpbGUgKChjdXJyZW50SW5kZXggPSBub3RZZXRQcm9jZXNzZWQoKSkgPCBfcGF0Y2hMYWJlbEdyaWQuZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgbGFiZWwrKztcbiAgICAgICAgdHJhY2UoY3VycmVudEluZGV4KTtcbiAgICB9XG5cbiAgICAvLyBkcmF3IHBhdGNoLWxhYmVscyBpZiByZXF1ZXN0ZWRcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBfY29uZmlnLmRlYnVnICYmIF9jb25maWcuZGVidWcuc2hvd1BhdGNoTGFiZWxzKSB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBfY2FudmFzQ29udGFpbmVyLmN0eC5iaW5hcnk7XG5cbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBfcGF0Y2hMYWJlbEdyaWQuZGF0YS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgaWYgKF9wYXRjaExhYmVsR3JpZC5kYXRhW2pdID4gMCAmJiBfcGF0Y2hMYWJlbEdyaWQuZGF0YVtqXSA8PSBsYWJlbCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhdGNoID0gX2ltYWdlVG9QYXRjaEdyaWQuZGF0YVtqXTtcbiAgICAgICAgICAgICAgICBoc3ZbMF0gPSAoX3BhdGNoTGFiZWxHcmlkLmRhdGFbal0gLyAobGFiZWwgKyAxKSkgKiAzNjA7XG4gICAgICAgICAgICAgICAgaHN2MnJnYihoc3YsIHJnYik7XG4gICAgICAgICAgICAgICAgY29uc3QgY29sb3IgPSAncmdiKCcgKyByZ2Iuam9pbignLCcpICsgJyknO1xuICAgICAgICAgICAgICAgIEltYWdlRGVidWcuZHJhd1JlY3QocGF0Y2gucG9zLCBfc3ViSW1hZ2VXcmFwcGVyLnNpemUsIGNvbnRleHQsIHsgY29sb3IsIGxpbmVXaWR0aDogMiB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBsYWJlbDtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGluaXQ6IChpbnB1dEltYWdlV3JhcHBlciwgY29uZmlnKSA9PiB7XG4gICAgICAgIF9jb25maWcgPSBjb25maWc7XG4gICAgICAgIF9pbnB1dEltYWdlV3JhcHBlciA9IGlucHV0SW1hZ2VXcmFwcGVyO1xuXG4gICAgICAgIGluaXRCdWZmZXJzKCk7XG4gICAgICAgIGluaXRDYW52YXMoKTtcbiAgICB9LFxuXG4gICAgbG9jYXRlOiAoKSA9PiB7XG4gICAgICAgIGlmIChfY29uZmlnLmhhbGZTYW1wbGUpIHtcbiAgICAgICAgICAgIGhhbGZTYW1wbGUoX2lucHV0SW1hZ2VXcmFwcGVyLCBfY3VycmVudEltYWdlV3JhcHBlcik7XG4gICAgICAgIH1cblxuICAgICAgICBiaW5hcml6ZUltYWdlKCk7XG4gICAgICAgIGNvbnN0IHBhdGNoZXNGb3VuZCA9IGZpbmRQYXRjaGVzKCk7XG4gICAgICAgIC8vIHJldHVybiB1bmxlc3MgNSUgb3IgbW9yZSBwYXRjaGVzIGFyZSBmb3VuZFxuICAgICAgICBpZiAocGF0Y2hlc0ZvdW5kLmxlbmd0aCA8IF9udW1QYXRjaGVzLnggKiBfbnVtUGF0Y2hlcy55ICogMC4wNSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvLyByYXN0ZXJpemUgYXJlYSBieSBjb21wYXJpbmcgYW5ndWxhciBzaW1pbGFyaXR5O1xuICAgICAgICBjb25zdCBtYXhMYWJlbCA9IHJhc3Rlcml6ZUFuZ3VsYXJTaW1pbGFyaXR5KHBhdGNoZXNGb3VuZCk7XG4gICAgICAgIGlmIChtYXhMYWJlbCA8IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc2VhcmNoIGZvciBhcmVhIHdpdGggdGhlIG1vc3QgcGF0Y2hlcyAoYmlnZ2VzdCBjb25uZWN0ZWQgYXJlYSlcbiAgICAgICAgY29uc3QgdG9wTGFiZWxzID0gZmluZEJpZ2dlc3RDb25uZWN0ZWRBcmVhcyhtYXhMYWJlbCk7XG4gICAgICAgIGlmICh0b3BMYWJlbHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGJveGVzID0gZmluZEJveGVzKHRvcExhYmVscywgbWF4TGFiZWwpO1xuICAgICAgICByZXR1cm4gYm94ZXM7XG4gICAgfSxcblxuICAgIGNoZWNrSW1hZ2VDb25zdHJhaW50czogKGlucHV0U3RyZWFtLCBjb25maWcpID0+IHtcbiAgICAgICAgbGV0IHdpZHRoID0gaW5wdXRTdHJlYW0uZ2V0V2lkdGgoKTtcbiAgICAgICAgbGV0IGhlaWdodCA9IGlucHV0U3RyZWFtLmdldEhlaWdodCgpO1xuICAgICAgICBjb25zdCBzaGlmdCA9IGNvbmZpZy5oYWxmU2FtcGxlID8gMSA6IDAgfCAwO1xuXG4gICAgICAgIC8vIGNhbGN1bGF0ZSB3aWR0aCBhbmQgaGVpZ2h0IGJhc2VkIG9uIGFyZWFcbiAgICAgICAgaWYgKGlucHV0U3RyZWFtLmdldENvbmZpZygpLmFyZWEpIHtcbiAgICAgICAgICAgIGNvbnN0IGFyZWEgPSBjb21wdXRlSW1hZ2VBcmVhKHdpZHRoLCBoZWlnaHQsIGlucHV0U3RyZWFtLmdldENvbmZpZygpLmFyZWEpO1xuICAgICAgICAgICAgaW5wdXRTdHJlYW0uc2V0VG9wUmlnaHQoeyB4OiBhcmVhLnN4LCB5OiBhcmVhLnN5IH0pO1xuICAgICAgICAgICAgaW5wdXRTdHJlYW0uc2V0Q2FudmFzU2l6ZSh3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgICAgIHdpZHRoID0gYXJlYS5zdztcbiAgICAgICAgICAgIGhlaWdodCA9IGFyZWEuc2g7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzaXplID0ge1xuICAgICAgICAgICAgeDogd2lkdGggPj4gc2hpZnQsXG4gICAgICAgICAgICB5OiBoZWlnaHQgPj4gc2hpZnRcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBwYXRjaFNpemUgPSBjYWxjdWxhdGVQYXRjaFNpemUoY29uZmlnLnBhdGNoU2l6ZSwgc2l6ZSk7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUGF0Y2gtU2l6ZTonLCBKU09OLnN0cmluZ2lmeShwYXRjaFNpemUpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlucHV0U3RyZWFtLnNldFdpZHRoKChzaXplLnggLyBwYXRjaFNpemUueCA8PCBzaGlmdCkgKiBwYXRjaFNpemUueCB8IDApO1xuICAgICAgICBpbnB1dFN0cmVhbS5zZXRIZWlnaHQoKHNpemUueSAvIHBhdGNoU2l6ZS55IDw8IHNoaWZ0KSAqIHBhdGNoU2l6ZS55IHwgMCk7XG5cbiAgICAgICAgaWYgKChpbnB1dFN0cmVhbS5nZXRXaWR0aCgpICUgcGF0Y2hTaXplLngpID09PSAwICYmIChpbnB1dFN0cmVhbS5nZXRIZWlnaHQoKSAlIHBhdGNoU2l6ZS55KSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIGRpbWVuc2lvbnMgZG8gbm90IGNvbXBseSB3aXRoIHRoZSBjdXJyZW50IHNldHRpbmdzOiB3aWR0aCAoJHt3aWR0aH0pIGFuZCBoZWlnaHQgKCR7aGVpZ2h0fSkgbXVzdCBiZSBhIG11bHRpcGxlIG9mICR7cGF0Y2hTaXplLnh9YCk7XG4gICAgfVxufTtcbiIsIi8qKlxuICogQGJvcnJvd3MgaHR0cDovL3d3dy5jb2RlcHJvamVjdC5jb20vVGlwcy80MDcxNzIvQ29ubmVjdGVkLUNvbXBvbmVudC1MYWJlbGluZy1hbmQtVmVjdG9yaXphdGlvblxuICovXG5cbmltcG9ydCB7IFRyYWNlciB9IGZyb20gJy4vdHJhY2VyJztcblxuY29uc3QgRElSID0ge1xuICAgIE9VVFNJREVfRURHRTogLTMyNzY3LFxuICAgIElOU0lERV9FREdFOiAtMzI3NjZcbn07XG5cbmNvbnN0IENPTlRPVVJfRElSID0ge1xuICAgIENXX0RJUjogMCxcbiAgICBDQ1dfRElSOiAxLFxuICAgIFVOS05PV05fRElSOiAyXG59O1xuXG5leHBvcnQgY2xhc3MgUmFzdGVyaXplciB7XG4gICAgY29uc3RydWN0b3IoaW1hZ2VXcmFwcGVyLCBsYWJlbFdyYXBwZXIpIHtcbiAgICAgICAgdGhpcy5pbWFnZURhdGEgPSBpbWFnZVdyYXBwZXIuZGF0YTtcbiAgICAgICAgdGhpcy5sYWJlbERhdGEgPSBsYWJlbFdyYXBwZXIuZGF0YTtcbiAgICAgICAgdGhpcy53aWR0aCA9IGltYWdlV3JhcHBlci5zaXplLng7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaW1hZ2VXcmFwcGVyLnNpemUueTtcbiAgICAgICAgdGhpcy50cmFjZXIgPSBuZXcgVHJhY2VyKGltYWdlV3JhcHBlciwgbGFiZWxXcmFwcGVyKTtcbiAgICB9XG5cbiAgICByYXN0ZXJpemUoZGVwdGhMYWJlbCkge1xuICAgICAgICBjb25zdCBjb2xvck1hcCA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDAwOyBpKyspIHtcbiAgICAgICAgICAgIGNvbG9yTWFwW2ldID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbG9yTWFwWzBdID0gdGhpcy5pbWFnZURhdGFbMF07XG5cbiAgICAgICAgbGV0IGNjID0gbnVsbDtcbiAgICAgICAgbGV0IHNjO1xuICAgICAgICBsZXQgY29ubmVjdGVkQ291bnQgPSAwO1xuXG4gICAgICAgIGZvciAobGV0IGN5ID0gMTsgY3kgPCB0aGlzLmhlaWdodCAtIDE7IGN5KyspIHtcbiAgICAgICAgICAgIGxldCBsYWJlbEluZGV4ID0gMDtcbiAgICAgICAgICAgIGxldCBiYyA9IGNvbG9yTWFwWzBdO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBjeCA9IDE7IGN4IDwgdGhpcy53aWR0aCAtIDE7IGN4KyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwb3MgPSBjeSAqIHRoaXMud2lkdGggKyBjeDtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxhYmVsRGF0YVtwb3NdID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gdGhpcy5pbWFnZURhdGFbcG9zXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbG9yICE9PSBiYykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhYmVsSW5kZXggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYyA9IGNvbm5lY3RlZENvdW50ICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvck1hcFtsY10gPSBjb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYyA9IGNvbG9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZlcnRleCA9IHRoaXMudHJhY2VyLmNvbnRvdXJUcmFjaW5nKGN5LCBjeCwgbGMsIGNvbG9yLCBESVIuT1VUU0lERV9FREdFKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmVydGV4ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbm5lY3RlZENvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsSW5kZXggPSBsYztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcjogQ09OVE9VUl9ESVIuQ1dfRElSLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGxhYmVsSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdFZlcnRleDogdmVydGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFBlZXI6IGNjLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zaWRlQ29udG91cnM6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNjICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5wcmV2aW91c1BlZXIgPSBwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjID0gcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZlcnRleCA9IHRoaXMudHJhY2VyLmNvbnRvdXJUcmFjaW5nKGN5LCBjeCwgRElSLklOU0lERV9FREdFLCBjb2xvciwgbGFiZWxJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZlcnRleCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyOiBkZXB0aExhYmVsID09PSAwID8gQ09OVE9VUl9ESVIuQ0NXX0RJUiA6IENPTlRPVVJfRElSLkNXX0RJUixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0VmVydGV4OiB2ZXJ0ZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleDogZGVwdGhMYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc2lkZUNvbnRvdXJzOiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjID0gY2M7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlICgoc2MgIT09IG51bGwpICYmIHNjLmluZGV4ICE9PSBsYWJlbEluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYyA9IHNjLm5leHRQZWVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzYyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcC5uZXh0UGVlciA9IHNjLmluc2lkZUNvbnRvdXJzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNjLmluc2lkZUNvbnRvdXJzICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2MuaW5zaWRlQ29udG91cnMucHJldmlvdXNQZWVyID0gcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjLmluc2lkZUNvbnRvdXJzID0gcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGFiZWxEYXRhW3Bvc10gPSBsYWJlbEluZGV4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmxhYmVsRGF0YVtwb3NdID09PSBESVIuSU5TSURFX0VER0UpIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxJbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGJjID0gdGhpcy5pbWFnZURhdGFbcG9zXTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMubGFiZWxEYXRhW3Bvc10gPT09IERJUi5PVVRTSURFX0VER0UpIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxJbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGJjID0gY29sb3JNYXBbMF07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxJbmRleCA9IHRoaXMubGFiZWxEYXRhW3Bvc107XG4gICAgICAgICAgICAgICAgICAgIGJjID0gY29sb3JNYXBbbGFiZWxJbmRleF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHNjID0gY2M7XG4gICAgICAgIHdoaWxlIChzYyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgc2MuaW5kZXggPSBkZXB0aExhYmVsO1xuICAgICAgICAgICAgc2MgPSBzYy5uZXh0UGVlcjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY2MsXG4gICAgICAgICAgICBjb3VudDogY29ubmVjdGVkQ291bnRcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBkcmF3Q29udG91cihjYW52YXMsIGZpcnN0Q29udG91cikge1xuICAgICAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSAncmVkJztcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZWQnO1xuICAgICAgICBjdHgubGluZVdpZHRoID0gMTtcblxuICAgICAgICBsZXQgcHEgPSBmaXJzdENvbnRvdXI7XG4gICAgICAgIGxldCBpcSA9IHBxICYmIHBxLmluc2lkZUNvbnRvdXJzO1xuXG4gICAgICAgIHdoaWxlIChwcSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgbGV0IHEgPSBpcSB8fCBwcTtcblxuICAgICAgICAgICAgaWYgKGlxICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaXEgPSBpcS5uZXh0UGVlcjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcHEgPSBwcS5uZXh0UGVlcjtcbiAgICAgICAgICAgICAgICBpcSA9IHBxICYmIHBxLmluc2lkZUNvbnRvdXJzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzd2l0Y2ggKHEuZGlyKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBDT05UT1VSX0RJUi5DV19ESVI6IHtcbiAgICAgICAgICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJ3JlZCc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIENPTlRPVVJfRElSLkNDV19ESVI6IHtcbiAgICAgICAgICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJ2JsdWUnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBDT05UT1VSX0RJUi5VTktOT1dOX0RJUjoge1xuICAgICAgICAgICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSAnZ3JlZW4nO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBwID0gcS5maXJzdFZlcnRleDtcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8ocC54LCBwLnkpO1xuXG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgcCA9IHAubmV4dDtcbiAgICAgICAgICAgICAgICBjdHgubGluZVRvKHAueCwgcC55KTtcbiAgICAgICAgICAgIH0gd2hpbGUgKHAgIT09IHEuZmlyc3RWZXJ0ZXgpO1xuXG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBlcWVxZXEgKi9cbmZ1bmN0aW9uIFNrZWxldG9uaXplcihzdGRsaWIsIGZvcmVpZ24sIGJ1ZmZlcikge1xuICAgIFwidXNlIGFzbVwiO1xuXG4gICAgdmFyIGltYWdlcyA9IG5ldyBzdGRsaWIuVWludDhBcnJheShidWZmZXIpLFxuICAgICAgICBzaXplID0gZm9yZWlnbi5zaXplIHwgMCxcbiAgICAgICAgaW11bCA9IHN0ZGxpYi5NYXRoLmltdWw7XG5cbiAgICBmdW5jdGlvbiBlcm9kZShpbkltYWdlUHRyLCBvdXRJbWFnZVB0cikge1xuICAgICAgICBpbkltYWdlUHRyID0gaW5JbWFnZVB0ciB8IDA7XG4gICAgICAgIG91dEltYWdlUHRyID0gb3V0SW1hZ2VQdHIgfCAwO1xuXG4gICAgICAgIHZhciB2ID0gMCxcbiAgICAgICAgICAgIHUgPSAwLFxuICAgICAgICAgICAgc3VtID0gMCxcbiAgICAgICAgICAgIHlTdGFydDEgPSAwLFxuICAgICAgICAgICAgeVN0YXJ0MiA9IDAsXG4gICAgICAgICAgICB4U3RhcnQxID0gMCxcbiAgICAgICAgICAgIHhTdGFydDIgPSAwLFxuICAgICAgICAgICAgb2Zmc2V0ID0gMDtcblxuICAgICAgICBmb3IgKCB2ID0gMTsgKHYgfCAwKSA8ICgoc2l6ZSAtIDEpIHwgMCk7IHYgPSAodiArIDEpIHwgMCkge1xuICAgICAgICAgICAgb2Zmc2V0ID0gKG9mZnNldCArIHNpemUpIHwgMDtcbiAgICAgICAgICAgIGZvciAoIHUgPSAxOyAodSB8IDApIDwgKChzaXplIC0gMSkgfCAwKTsgdSA9ICh1ICsgMSkgfCAwKSB7XG4gICAgICAgICAgICAgICAgeVN0YXJ0MSA9IChvZmZzZXQgLSBzaXplKSB8IDA7XG4gICAgICAgICAgICAgICAgeVN0YXJ0MiA9IChvZmZzZXQgKyBzaXplKSB8IDA7XG4gICAgICAgICAgICAgICAgeFN0YXJ0MSA9ICh1IC0gMSkgfCAwO1xuICAgICAgICAgICAgICAgIHhTdGFydDIgPSAodSArIDEpIHwgMDtcbiAgICAgICAgICAgICAgICBzdW0gPSAoKGltYWdlc1soaW5JbWFnZVB0ciArIHlTdGFydDEgKyB4U3RhcnQxKSB8IDBdIHwgMClcbiAgICAgICAgICAgICAgICAgICAgKyAoaW1hZ2VzWyhpbkltYWdlUHRyICsgeVN0YXJ0MSArIHhTdGFydDIpIHwgMF0gfCAwKVxuICAgICAgICAgICAgICAgICAgICArIChpbWFnZXNbKGluSW1hZ2VQdHIgKyBvZmZzZXQgKyB1KSB8IDBdIHwgMClcbiAgICAgICAgICAgICAgICAgICAgKyAoaW1hZ2VzWyhpbkltYWdlUHRyICsgeVN0YXJ0MiArIHhTdGFydDEpIHwgMF0gfCAwKVxuICAgICAgICAgICAgICAgICAgICArIChpbWFnZXNbKGluSW1hZ2VQdHIgKyB5U3RhcnQyICsgeFN0YXJ0MikgfCAwXSB8IDApKSB8IDA7XG4gICAgICAgICAgICAgICAgaWYgKChzdW0gfCAwKSA9PSAoNSB8IDApKSB7XG4gICAgICAgICAgICAgICAgICAgIGltYWdlc1sob3V0SW1hZ2VQdHIgKyBvZmZzZXQgKyB1KSB8IDBdID0gMTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpbWFnZXNbKG91dEltYWdlUHRyICsgb2Zmc2V0ICsgdSkgfCAwXSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdWJ0cmFjdChhSW1hZ2VQdHIsIGJJbWFnZVB0ciwgb3V0SW1hZ2VQdHIpIHtcbiAgICAgICAgYUltYWdlUHRyID0gYUltYWdlUHRyIHwgMDtcbiAgICAgICAgYkltYWdlUHRyID0gYkltYWdlUHRyIHwgMDtcbiAgICAgICAgb3V0SW1hZ2VQdHIgPSBvdXRJbWFnZVB0ciB8IDA7XG5cbiAgICAgICAgdmFyIGxlbmd0aCA9IDA7XG5cbiAgICAgICAgbGVuZ3RoID0gaW11bChzaXplLCBzaXplKSB8IDA7XG5cbiAgICAgICAgd2hpbGUgKChsZW5ndGggfCAwKSA+IDApIHtcbiAgICAgICAgICAgIGxlbmd0aCA9IChsZW5ndGggLSAxKSB8IDA7XG4gICAgICAgICAgICBpbWFnZXNbKG91dEltYWdlUHRyICsgbGVuZ3RoKSB8IDBdID1cbiAgICAgICAgICAgICAgICAoKGltYWdlc1soYUltYWdlUHRyICsgbGVuZ3RoKSB8IDBdIHwgMCkgLSAoaW1hZ2VzWyhiSW1hZ2VQdHIgKyBsZW5ndGgpIHwgMF0gfCAwKSkgfCAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYml0d2lzZU9yKGFJbWFnZVB0ciwgYkltYWdlUHRyLCBvdXRJbWFnZVB0cikge1xuICAgICAgICBhSW1hZ2VQdHIgPSBhSW1hZ2VQdHIgfCAwO1xuICAgICAgICBiSW1hZ2VQdHIgPSBiSW1hZ2VQdHIgfCAwO1xuICAgICAgICBvdXRJbWFnZVB0ciA9IG91dEltYWdlUHRyIHwgMDtcblxuICAgICAgICB2YXIgbGVuZ3RoID0gMDtcblxuICAgICAgICBsZW5ndGggPSBpbXVsKHNpemUsIHNpemUpIHwgMDtcblxuICAgICAgICB3aGlsZSAoKGxlbmd0aCB8IDApID4gMCkge1xuICAgICAgICAgICAgbGVuZ3RoID0gKGxlbmd0aCAtIDEpIHwgMDtcbiAgICAgICAgICAgIGltYWdlc1sob3V0SW1hZ2VQdHIgKyBsZW5ndGgpIHwgMF0gPVxuICAgICAgICAgICAgICAgICgoaW1hZ2VzWyhhSW1hZ2VQdHIgKyBsZW5ndGgpIHwgMF0gfCAwKSB8IChpbWFnZXNbKGJJbWFnZVB0ciArIGxlbmd0aCkgfCAwXSB8IDApKSB8IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb3VudE5vblplcm8oaW1hZ2VQdHIpIHtcbiAgICAgICAgaW1hZ2VQdHIgPSBpbWFnZVB0ciB8IDA7XG5cbiAgICAgICAgdmFyIHN1bSA9IDAsXG4gICAgICAgICAgICBsZW5ndGggPSAwO1xuXG4gICAgICAgIGxlbmd0aCA9IGltdWwoc2l6ZSwgc2l6ZSkgfCAwO1xuXG4gICAgICAgIHdoaWxlICgobGVuZ3RoIHwgMCkgPiAwKSB7XG4gICAgICAgICAgICBsZW5ndGggPSAobGVuZ3RoIC0gMSkgfCAwO1xuICAgICAgICAgICAgc3VtID0gKChzdW0gfCAwKSArIChpbWFnZXNbKGltYWdlUHRyICsgbGVuZ3RoKSB8IDBdIHwgMCkpIHwgMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoc3VtIHwgMCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5pdChpbWFnZVB0ciwgdmFsdWUpIHtcbiAgICAgICAgaW1hZ2VQdHIgPSBpbWFnZVB0ciB8IDA7XG4gICAgICAgIHZhbHVlID0gdmFsdWUgfCAwO1xuXG4gICAgICAgIHZhciBsZW5ndGggPSAwO1xuXG4gICAgICAgIGxlbmd0aCA9IGltdWwoc2l6ZSwgc2l6ZSkgfCAwO1xuXG4gICAgICAgIHdoaWxlICgobGVuZ3RoIHwgMCkgPiAwKSB7XG4gICAgICAgICAgICBsZW5ndGggPSAobGVuZ3RoIC0gMSkgfCAwO1xuICAgICAgICAgICAgaW1hZ2VzWyhpbWFnZVB0ciArIGxlbmd0aCkgfCAwXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlsYXRlKGluSW1hZ2VQdHIsIG91dEltYWdlUHRyKSB7XG4gICAgICAgIGluSW1hZ2VQdHIgPSBpbkltYWdlUHRyIHwgMDtcbiAgICAgICAgb3V0SW1hZ2VQdHIgPSBvdXRJbWFnZVB0ciB8IDA7XG5cbiAgICAgICAgdmFyIHYgPSAwLFxuICAgICAgICAgICAgdSA9IDAsXG4gICAgICAgICAgICBzdW0gPSAwLFxuICAgICAgICAgICAgeVN0YXJ0MSA9IDAsXG4gICAgICAgICAgICB5U3RhcnQyID0gMCxcbiAgICAgICAgICAgIHhTdGFydDEgPSAwLFxuICAgICAgICAgICAgeFN0YXJ0MiA9IDAsXG4gICAgICAgICAgICBvZmZzZXQgPSAwO1xuXG4gICAgICAgIGZvciAoIHYgPSAxOyAodiB8IDApIDwgKChzaXplIC0gMSkgfCAwKTsgdiA9ICh2ICsgMSkgfCAwKSB7XG4gICAgICAgICAgICBvZmZzZXQgPSAob2Zmc2V0ICsgc2l6ZSkgfCAwO1xuICAgICAgICAgICAgZm9yICggdSA9IDE7ICh1IHwgMCkgPCAoKHNpemUgLSAxKSB8IDApOyB1ID0gKHUgKyAxKSB8IDApIHtcbiAgICAgICAgICAgICAgICB5U3RhcnQxID0gKG9mZnNldCAtIHNpemUpIHwgMDtcbiAgICAgICAgICAgICAgICB5U3RhcnQyID0gKG9mZnNldCArIHNpemUpIHwgMDtcbiAgICAgICAgICAgICAgICB4U3RhcnQxID0gKHUgLSAxKSB8IDA7XG4gICAgICAgICAgICAgICAgeFN0YXJ0MiA9ICh1ICsgMSkgfCAwO1xuICAgICAgICAgICAgICAgIHN1bSA9ICgoaW1hZ2VzWyhpbkltYWdlUHRyICsgeVN0YXJ0MSArIHhTdGFydDEpIHwgMF0gfCAwKVxuICAgICAgICAgICAgICAgICAgICArIChpbWFnZXNbKGluSW1hZ2VQdHIgKyB5U3RhcnQxICsgeFN0YXJ0MikgfCAwXSB8IDApXG4gICAgICAgICAgICAgICAgICAgICsgKGltYWdlc1soaW5JbWFnZVB0ciArIG9mZnNldCArIHUpIHwgMF0gfCAwKVxuICAgICAgICAgICAgICAgICAgICArIChpbWFnZXNbKGluSW1hZ2VQdHIgKyB5U3RhcnQyICsgeFN0YXJ0MSkgfCAwXSB8IDApXG4gICAgICAgICAgICAgICAgICAgICsgKGltYWdlc1soaW5JbWFnZVB0ciArIHlTdGFydDIgKyB4U3RhcnQyKSB8IDBdIHwgMCkpIHwgMDtcbiAgICAgICAgICAgICAgICBpZiAoKHN1bSB8IDApID4gKDAgfCAwKSkge1xuICAgICAgICAgICAgICAgICAgICBpbWFnZXNbKG91dEltYWdlUHRyICsgb2Zmc2V0ICsgdSkgfCAwXSA9IDE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VzWyhvdXRJbWFnZVB0ciArIG9mZnNldCArIHUpIHwgMF0gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWVtY3B5KHNyY0ltYWdlUHRyLCBkc3RJbWFnZVB0cikge1xuICAgICAgICBzcmNJbWFnZVB0ciA9IHNyY0ltYWdlUHRyIHwgMDtcbiAgICAgICAgZHN0SW1hZ2VQdHIgPSBkc3RJbWFnZVB0ciB8IDA7XG5cbiAgICAgICAgdmFyIGxlbmd0aCA9IDA7XG5cbiAgICAgICAgbGVuZ3RoID0gaW11bChzaXplLCBzaXplKSB8IDA7XG5cbiAgICAgICAgd2hpbGUgKChsZW5ndGggfCAwKSA+IDApIHtcbiAgICAgICAgICAgIGxlbmd0aCA9IChsZW5ndGggLSAxKSB8IDA7XG4gICAgICAgICAgICBpbWFnZXNbKGRzdEltYWdlUHRyICsgbGVuZ3RoKSB8IDBdID0gKGltYWdlc1soc3JjSW1hZ2VQdHIgKyBsZW5ndGgpIHwgMF0gfCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHplcm9Cb3JkZXIoaW1hZ2VQdHIpIHtcbiAgICAgICAgaW1hZ2VQdHIgPSBpbWFnZVB0ciB8IDA7XG5cbiAgICAgICAgdmFyIHggPSAwLFxuICAgICAgICAgICAgeSA9IDA7XG5cbiAgICAgICAgZm9yICggeCA9IDA7ICh4IHwgMCkgPCAoKHNpemUgLSAxKSB8IDApOyB4ID0gKHggKyAxKSB8IDApIHtcbiAgICAgICAgICAgIGltYWdlc1soaW1hZ2VQdHIgKyB4KSB8IDBdID0gMDtcbiAgICAgICAgICAgIGltYWdlc1soaW1hZ2VQdHIgKyB5KSB8IDBdID0gMDtcbiAgICAgICAgICAgIHkgPSAoKHkgKyBzaXplKSAtIDEpIHwgMDtcbiAgICAgICAgICAgIGltYWdlc1soaW1hZ2VQdHIgKyB5KSB8IDBdID0gMDtcbiAgICAgICAgICAgIHkgPSAoeSArIDEpIHwgMDtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKCB4ID0gMDsgKHggfCAwKSA8IChzaXplIHwgMCk7IHggPSAoeCArIDEpIHwgMCkge1xuICAgICAgICAgICAgaW1hZ2VzWyhpbWFnZVB0ciArIHkpIHwgMF0gPSAwO1xuICAgICAgICAgICAgeSA9ICh5ICsgMSkgfCAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2tlbGV0b25pemUoKSB7XG4gICAgICAgIHZhciBzdWJJbWFnZVB0ciA9IDAsXG4gICAgICAgICAgICBlcm9kZWRJbWFnZVB0ciA9IDAsXG4gICAgICAgICAgICB0ZW1wSW1hZ2VQdHIgPSAwLFxuICAgICAgICAgICAgc2tlbEltYWdlUHRyID0gMCxcbiAgICAgICAgICAgIHN1bSA9IDAsXG4gICAgICAgICAgICBkb25lID0gMDtcblxuICAgICAgICBlcm9kZWRJbWFnZVB0ciA9IGltdWwoc2l6ZSwgc2l6ZSkgfCAwO1xuICAgICAgICB0ZW1wSW1hZ2VQdHIgPSAoZXJvZGVkSW1hZ2VQdHIgKyBlcm9kZWRJbWFnZVB0cikgfCAwO1xuICAgICAgICBza2VsSW1hZ2VQdHIgPSAodGVtcEltYWdlUHRyICsgZXJvZGVkSW1hZ2VQdHIpIHwgMDtcblxuICAgICAgICAvLyBpbml0IHNrZWwtaW1hZ2VcbiAgICAgICAgaW5pdChza2VsSW1hZ2VQdHIsIDApO1xuICAgICAgICB6ZXJvQm9yZGVyKHN1YkltYWdlUHRyKTtcblxuICAgICAgICBkbyB7XG4gICAgICAgICAgICBlcm9kZShzdWJJbWFnZVB0ciwgZXJvZGVkSW1hZ2VQdHIpO1xuICAgICAgICAgICAgZGlsYXRlKGVyb2RlZEltYWdlUHRyLCB0ZW1wSW1hZ2VQdHIpO1xuICAgICAgICAgICAgc3VidHJhY3Qoc3ViSW1hZ2VQdHIsIHRlbXBJbWFnZVB0ciwgdGVtcEltYWdlUHRyKTtcbiAgICAgICAgICAgIGJpdHdpc2VPcihza2VsSW1hZ2VQdHIsIHRlbXBJbWFnZVB0ciwgc2tlbEltYWdlUHRyKTtcbiAgICAgICAgICAgIG1lbWNweShlcm9kZWRJbWFnZVB0ciwgc3ViSW1hZ2VQdHIpO1xuICAgICAgICAgICAgc3VtID0gY291bnROb25aZXJvKHN1YkltYWdlUHRyKSB8IDA7XG4gICAgICAgICAgICBkb25lID0gKChzdW0gfCAwKSA9PSAwIHwgMCk7XG4gICAgICAgIH0gd2hpbGUgKCFkb25lKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2tlbGV0b25pemU6IHNrZWxldG9uaXplXG4gICAgfTtcbn1cbmV4cG9ydCBkZWZhdWx0IFNrZWxldG9uaXplcjtcbi8qIGVzbGludC1lbmFibGUgZXFlcWVxICovXG4iLCIvKipcbiAqIEBib3Jyb3dzIGh0dHA6Ly93d3cuY29kZXByb2plY3QuY29tL1RpcHMvNDA3MTcyL0Nvbm5lY3RlZC1Db21wb25lbnQtTGFiZWxpbmctYW5kLVZlY3Rvcml6YXRpb25cbiAqL1xuXG5leHBvcnQgY29uc3QgU2VhcmNoRGlyZWN0aW9ucyA9IFtbMCwgMV0sIFsxLCAxXSwgWzEsIDBdLCBbMSwgLTFdLCBbMCwgLTFdLCBbLTEsIC0xXSwgWy0xLCAwXSwgWy0xLCAxXV07XG5cbmV4cG9ydCBjbGFzcyBUcmFjZXIge1xuICAgIGNvbnN0cnVjdG9yKGltYWdlV3JhcHBlciwgbGFiZWxXcmFwcGVyKSB7XG4gICAgICAgIHRoaXMuaW1hZ2VEYXRhID0gaW1hZ2VXcmFwcGVyLmRhdGE7XG4gICAgICAgIHRoaXMubGFiZWxEYXRhID0gbGFiZWxXcmFwcGVyLmRhdGE7XG4gICAgICAgIHRoaXMud2lkdGggPSBpbWFnZVdyYXBwZXIuc2l6ZS54O1xuICAgIH1cblxuICAgIHRyYWNlKGN1cnJlbnQsIGNvbG9yLCBsYWJlbCwgZWRnZUxhYmVsKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCB5ID0gY3VycmVudC5jeSArIFNlYXJjaERpcmVjdGlvbnNbY3VycmVudC5kaXJdWzBdO1xuICAgICAgICAgICAgY29uc3QgeCA9IGN1cnJlbnQuY3ggKyBTZWFyY2hEaXJlY3Rpb25zW2N1cnJlbnQuZGlyXVsxXTtcbiAgICAgICAgICAgIGNvbnN0IHBvcyA9IHkgKiB0aGlzLndpZHRoICsgeDtcblxuICAgICAgICAgICAgaWYgKCh0aGlzLmltYWdlRGF0YVtwb3NdID09PSBjb2xvcikgJiYgKCh0aGlzLmxhYmVsRGF0YVtwb3NdID09PSAwKSB8fCAodGhpcy5sYWJlbERhdGFbcG9zXSA9PT0gbGFiZWwpKSkge1xuICAgICAgICAgICAgICAgIHRoaXMubGFiZWxEYXRhW3Bvc10gPSBsYWJlbDtcbiAgICAgICAgICAgICAgICBjdXJyZW50LmN5ID0geTtcbiAgICAgICAgICAgICAgICBjdXJyZW50LmN4ID0geDtcblxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sYWJlbERhdGFbcG9zXSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhYmVsRGF0YVtwb3NdID0gZWRnZUxhYmVsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjdXJyZW50LmRpciA9IChjdXJyZW50LmRpciArIDEpICUgODtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29udG91clRyYWNpbmcoc3ksIHN4LCBsYWJlbCwgY29sb3IsIGVkZ2VMYWJlbCkge1xuICAgICAgICBsZXQgRnYgPSBudWxsO1xuICAgICAgICBjb25zdCBjdXJyZW50ID0ge1xuICAgICAgICAgICAgY3g6IHN4LFxuICAgICAgICAgICAgY3k6IHN5LFxuICAgICAgICAgICAgZGlyOiAwXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHRoaXMudHJhY2UoY3VycmVudCwgY29sb3IsIGxhYmVsLCBlZGdlTGFiZWwpKSB7XG4gICAgICAgICAgICBGdiA9IHtcbiAgICAgICAgICAgICAgICB4OiBzeCxcbiAgICAgICAgICAgICAgICB5OiBzeSxcbiAgICAgICAgICAgICAgICBkaXI6IGN1cnJlbnQuZGlyLFxuICAgICAgICAgICAgICAgIG5leHQ6IG51bGwsXG4gICAgICAgICAgICAgICAgcHJldjogbnVsbFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGxldCBDdiA9IEZ2O1xuICAgICAgICAgICAgbGV0IGxkaXIgPSBjdXJyZW50LmRpcjtcbiAgICAgICAgICAgIGxldCBQID0ge1xuICAgICAgICAgICAgICAgIHg6IGN1cnJlbnQuY3gsXG4gICAgICAgICAgICAgICAgeTogY3VycmVudC5jeSxcbiAgICAgICAgICAgICAgICBkaXI6IDAsXG4gICAgICAgICAgICAgICAgbmV4dDogbnVsbCxcbiAgICAgICAgICAgICAgICBwcmV2OiBDdlxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIEN2Lm5leHQgPSBQO1xuICAgICAgICAgICAgQ3YgPSBQO1xuXG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgY3VycmVudC5kaXIgPSAoY3VycmVudC5kaXIgKyA2KSAlIDg7XG4gICAgICAgICAgICAgICAgdGhpcy50cmFjZShjdXJyZW50LCBjb2xvciwgbGFiZWwsIGVkZ2VMYWJlbCk7XG4gICAgICAgICAgICAgICAgaWYgKGxkaXIgIT09IGN1cnJlbnQuZGlyKSB7XG4gICAgICAgICAgICAgICAgICAgIEN2LmRpciA9IGN1cnJlbnQuZGlyO1xuICAgICAgICAgICAgICAgICAgICBQID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgeDogY3VycmVudC5jeCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IGN1cnJlbnQuY3ksXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXI6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0OiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJldjogQ3ZcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgQ3YubmV4dCA9IFA7XG4gICAgICAgICAgICAgICAgICAgIEN2ID0gUDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBDdi5kaXIgPSBsZGlyO1xuICAgICAgICAgICAgICAgICAgICBDdi54ID0gY3VycmVudC5jeDtcbiAgICAgICAgICAgICAgICAgICAgQ3YueSA9IGN1cnJlbnQuY3k7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxkaXIgPSBjdXJyZW50LmRpcjtcbiAgICAgICAgICAgIH0gd2hpbGUgKGN1cnJlbnQuY3ggIT09IHN4IHx8IGN1cnJlbnQuY3kgIT09IHN5KTtcbiAgICAgICAgICAgIEZ2LnByZXYgPSBDdi5wcmV2O1xuICAgICAgICAgICAgQ3YucHJldi5uZXh0ID0gRnY7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEZ2O1xuICAgIH1cbn1cbiIsImltcG9ydCAnLi9jb21tb24vdHlwZWRlZnMnO1xuaW1wb3J0IHsgUmVzdWx0Q29sbGVjdG9yIH0gZnJvbSAnLi9hbmFseXRpY3MvcmVzdWx0X2NvbGxlY3Rvcic7XG5pbXBvcnQgRXZlbnRzIGZyb20gJy4vY29tbW9uL2V2ZW50cyc7XG5pbXBvcnQgeyBJbWFnZURlYnVnIH0gZnJvbSAnLi9jb21tb24vaW1hZ2VfZGVidWcnO1xuaW1wb3J0IHsgSW1hZ2VXcmFwcGVyIH0gZnJvbSAnLi9jb21tb24vaW1hZ2Vfd3JhcHBlcic7XG5pbXBvcnQgeyBtZXJnZSB9IGZyb20gJy4vY29tbW9uL21lcmdlJztcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4vY29uZmlnL2NvbmZpZyc7XG5pbXBvcnQgeyBCYXJjb2RlRGVjb2RlciB9IGZyb20gJy4vZGVjb2Rlci9iYXJjb2RlX2RlY29kZXInO1xuaW1wb3J0IENhbWVyYUFjY2VzcyBmcm9tICcuL2lucHV0L2NhbWVyYV9hY2Nlc3MnO1xuaW1wb3J0IHsgRnJhbWVHcmFiYmVyIH0gZnJvbSAnLi9pbnB1dC9mcmFtZV9ncmFiYmVyJztcbmltcG9ydCB7IElucHV0U3RyZWFtIH0gZnJvbSAnLi9pbnB1dC9pbnB1dF9zdHJlYW0nO1xuaW1wb3J0IEJhcmNvZGVMb2NhdG9yIGZyb20gJy4vbG9jYXRvci9iYXJjb2RlX2xvY2F0b3InO1xuXG5sZXQgX2lucHV0U3RyZWFtO1xubGV0IF9mcmFtZWdyYWJiZXI7XG5sZXQgX3N0b3BwZWQ7XG5jb25zdCBfY2FudmFzQ29udGFpbmVyID0ge1xuICAgIGN0eDoge1xuICAgICAgICBpbWFnZTogbnVsbCxcbiAgICAgICAgb3ZlcmxheTogbnVsbFxuICAgIH0sXG4gICAgZG9tOiB7XG4gICAgICAgIGltYWdlOiBudWxsLFxuICAgICAgICBvdmVybGF5OiBudWxsXG4gICAgfVxufTtcbmxldCBfaW5wdXRJbWFnZVdyYXBwZXI7XG5sZXQgX2JveFNpemU7XG5sZXQgX2RlY29kZXI7XG5sZXQgX3dvcmtlclBvb2wgPSBbXTtcbmxldCBfb25VSVRocmVhZCA9IHRydWU7XG5sZXQgX3Jlc3VsdENvbGxlY3RvcjtcbmxldCBfY29uZmlnID0ge307XG5cbmZ1bmN0aW9uIGluaXRpYWxpemVEYXRhKGltYWdlV3JhcHBlcikge1xuICAgIGluaXRCdWZmZXJzKGltYWdlV3JhcHBlcik7XG4gICAgX2RlY29kZXIgPSBuZXcgQmFyY29kZURlY29kZXIoX2NvbmZpZy5kZWNvZGVyLCBfaW5wdXRJbWFnZVdyYXBwZXIpO1xufVxuXG5mdW5jdGlvbiBpbml0SW5wdXRTdHJlYW0oY2FsbGJhY2spIHtcbiAgICBsZXQgdmlkZW87XG4gICAgaWYgKF9jb25maWcuaW5wdXRTdHJlYW0udHlwZSA9PT0gJ1ZpZGVvU3RyZWFtJykge1xuICAgICAgICB2aWRlbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZpZGVvJyk7XG4gICAgICAgIF9pbnB1dFN0cmVhbSA9IElucHV0U3RyZWFtLmNyZWF0ZVZpZGVvU3RyZWFtKHZpZGVvKTtcbiAgICB9IGVsc2UgaWYgKF9jb25maWcuaW5wdXRTdHJlYW0udHlwZSA9PT0gJ0ltYWdlU3RyZWFtJykge1xuICAgICAgICBfaW5wdXRTdHJlYW0gPSBJbnB1dFN0cmVhbS5jcmVhdGVJbWFnZVN0cmVhbSgpO1xuICAgIH0gZWxzZSBpZiAoX2NvbmZpZy5pbnB1dFN0cmVhbS50eXBlID09PSAnTGl2ZVN0cmVhbScpIHtcbiAgICAgICAgY29uc3Qgdmlld3BvcnQgPSBnZXRWaWV3UG9ydCgpO1xuICAgICAgICBpZiAodmlld3BvcnQpIHtcbiAgICAgICAgICAgIHZpZGVvID0gdmlld3BvcnQucXVlcnlTZWxlY3RvcigndmlkZW8nKTtcbiAgICAgICAgICAgIGlmICghdmlkZW8pIHtcbiAgICAgICAgICAgICAgICB2aWRlbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZpZGVvJyk7XG4gICAgICAgICAgICAgICAgdmlld3BvcnQuYXBwZW5kQ2hpbGQodmlkZW8pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIF9pbnB1dFN0cmVhbSA9IElucHV0U3RyZWFtLmNyZWF0ZUxpdmVTdHJlYW0odmlkZW8pO1xuICAgICAgICBDYW1lcmFBY2Nlc3MucmVxdWVzdCh2aWRlbywgX2NvbmZpZy5pbnB1dFN0cmVhbS5jb25zdHJhaW50cylcbiAgICAgICAgICAgIC50aGVuKCgpID0+IF9pbnB1dFN0cmVhbS50cmlnZ2VyKCdjYW5yZWNvcmQnKSwgZXJyID0+IGNhbGxiYWNrKGVycikpO1xuICAgIH1cblxuICAgIF9pbnB1dFN0cmVhbS5zZXRBdHRyaWJ1dGUoJ3ByZWxvYWQnLCAnYXV0bycpO1xuICAgIF9pbnB1dFN0cmVhbS5zZXRJbnB1dFN0cmVhbShfY29uZmlnLmlucHV0U3RyZWFtKTtcbiAgICBfaW5wdXRTdHJlYW0uYWRkRXZlbnRMaXN0ZW5lcignY2FucmVjb3JkJywgY2FuUmVjb3JkLmJpbmQodW5kZWZpbmVkLCBjYWxsYmFjaykpO1xufVxuXG5mdW5jdGlvbiBnZXRWaWV3UG9ydCgpIHtcbiAgICBjb25zdCB0YXJnZXQgPSBfY29uZmlnLmlucHV0U3RyZWFtLnRhcmdldDtcbiAgICAvLyBDaGVjayBpZiB0YXJnZXQgaXMgYWxyZWFkeSBhIERPTSBlbGVtZW50XG4gICAgaWYgKHRhcmdldCAmJiB0YXJnZXQubm9kZU5hbWUgJiYgdGFyZ2V0Lm5vZGVUeXBlID09PSAxKSB7XG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVXNlICcjaW50ZXJhY3RpdmUudmlld3BvcnQnIGFzIGEgZmFsbGJhY2sgc2VsZWN0b3IgKGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5KVxuICAgICAgICBjb25zdCBzZWxlY3RvciA9IHR5cGVvZiB0YXJnZXQgPT09ICdzdHJpbmcnID8gdGFyZ2V0IDogJyNpbnRlcmFjdGl2ZS52aWV3cG9ydCc7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNhblJlY29yZChjYikge1xuICAgIEJhcmNvZGVMb2NhdG9yLmNoZWNrSW1hZ2VDb25zdHJhaW50cyhfaW5wdXRTdHJlYW0sIF9jb25maWcubG9jYXRvcik7XG4gICAgaW5pdENhbnZhcyhfY29uZmlnKTtcbiAgICBfZnJhbWVncmFiYmVyID0gbmV3IEZyYW1lR3JhYmJlcihfaW5wdXRTdHJlYW0sIF9jYW52YXNDb250YWluZXIuZG9tLmltYWdlKTtcblxuICAgIGFkanVzdFdvcmtlclBvb2woX2NvbmZpZy5udW1PZldvcmtlcnMsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKF9jb25maWcubnVtT2ZXb3JrZXJzID09PSAwKSB7XG4gICAgICAgICAgICBpbml0aWFsaXplRGF0YSgpO1xuICAgICAgICB9XG4gICAgICAgIHJlYWR5KGNiKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gcmVhZHkoY2IpIHtcbiAgICBfaW5wdXRTdHJlYW0ucGxheSgpO1xuICAgIGNiKCk7XG59XG5cbmZ1bmN0aW9uIGluaXRDYW52YXMoKSB7XG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc3Qgdmlld3BvcnQgPSBnZXRWaWV3UG9ydCgpO1xuICAgICAgICBfY2FudmFzQ29udGFpbmVyLmRvbS5pbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbnZhcy5pbWdCdWZmZXInKTtcbiAgICAgICAgaWYgKCFfY2FudmFzQ29udGFpbmVyLmRvbS5pbWFnZSkge1xuICAgICAgICAgICAgX2NhbnZhc0NvbnRhaW5lci5kb20uaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgICAgIF9jYW52YXNDb250YWluZXIuZG9tLmltYWdlLmNsYXNzTmFtZSA9ICdpbWdCdWZmZXInO1xuICAgICAgICAgICAgaWYgKHZpZXdwb3J0ICYmIF9jb25maWcuaW5wdXRTdHJlYW0udHlwZSA9PT0gJ0ltYWdlU3RyZWFtJykge1xuICAgICAgICAgICAgICAgIHZpZXdwb3J0LmFwcGVuZENoaWxkKF9jYW52YXNDb250YWluZXIuZG9tLmltYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBfY2FudmFzQ29udGFpbmVyLmN0eC5pbWFnZSA9IF9jYW52YXNDb250YWluZXIuZG9tLmltYWdlLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIF9jYW52YXNDb250YWluZXIuZG9tLmltYWdlLndpZHRoID0gX2lucHV0U3RyZWFtLmdldENhbnZhc1dpZHRoKCk7XG4gICAgICAgIF9jYW52YXNDb250YWluZXIuZG9tLmltYWdlLmhlaWdodCA9IF9pbnB1dFN0cmVhbS5nZXRDYW52YXNIZWlnaHQoKTtcblxuICAgICAgICBfY2FudmFzQ29udGFpbmVyLmRvbS5vdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FudmFzLmRyYXdpbmdCdWZmZXInKTtcbiAgICAgICAgaWYgKCFfY2FudmFzQ29udGFpbmVyLmRvbS5vdmVybGF5KSB7XG4gICAgICAgICAgICBfY2FudmFzQ29udGFpbmVyLmRvbS5vdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgICAgICBfY2FudmFzQ29udGFpbmVyLmRvbS5vdmVybGF5LmNsYXNzTmFtZSA9ICdkcmF3aW5nQnVmZmVyJztcbiAgICAgICAgICAgIGlmICh2aWV3cG9ydCkge1xuICAgICAgICAgICAgICAgIHZpZXdwb3J0LmFwcGVuZENoaWxkKF9jYW52YXNDb250YWluZXIuZG9tLm92ZXJsYXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgY2xlYXJGaXggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuICAgICAgICAgICAgY2xlYXJGaXguc2V0QXR0cmlidXRlKCdjbGVhcicsICdhbGwnKTtcbiAgICAgICAgICAgIGlmICh2aWV3cG9ydCkge1xuICAgICAgICAgICAgICAgIHZpZXdwb3J0LmFwcGVuZENoaWxkKGNsZWFyRml4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBfY2FudmFzQ29udGFpbmVyLmN0eC5vdmVybGF5ID0gX2NhbnZhc0NvbnRhaW5lci5kb20ub3ZlcmxheS5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICBfY2FudmFzQ29udGFpbmVyLmRvbS5vdmVybGF5LndpZHRoID0gX2lucHV0U3RyZWFtLmdldENhbnZhc1dpZHRoKCk7XG4gICAgICAgIF9jYW52YXNDb250YWluZXIuZG9tLm92ZXJsYXkuaGVpZ2h0ID0gX2lucHV0U3RyZWFtLmdldENhbnZhc0hlaWdodCgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaW5pdEJ1ZmZlcnMoaW1hZ2VXcmFwcGVyKSB7XG4gICAgaWYgKGltYWdlV3JhcHBlcikge1xuICAgICAgICBfaW5wdXRJbWFnZVdyYXBwZXIgPSBpbWFnZVdyYXBwZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgX2lucHV0SW1hZ2VXcmFwcGVyID0gbmV3IEltYWdlV3JhcHBlcih7XG4gICAgICAgICAgICB4OiBfaW5wdXRTdHJlYW0uZ2V0V2lkdGgoKSxcbiAgICAgICAgICAgIHk6IF9pbnB1dFN0cmVhbS5nZXRIZWlnaHQoKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zb2xlLmxvZyhfaW5wdXRJbWFnZVdyYXBwZXIuc2l6ZSk7XG4gICAgfVxuICAgIF9ib3hTaXplID0gW1xuICAgICAgICB7IHg6IDAsIHk6IDAgfSxcbiAgICAgICAgeyB4OiAwLCB5OiBfaW5wdXRJbWFnZVdyYXBwZXIuc2l6ZS55IH0sXG4gICAgICAgIHsgeDogX2lucHV0SW1hZ2VXcmFwcGVyLnNpemUueCwgeTogX2lucHV0SW1hZ2VXcmFwcGVyLnNpemUueSB9LFxuICAgICAgICB7IHg6IF9pbnB1dEltYWdlV3JhcHBlci5zaXplLngsIHk6IDAgfVxuICAgIF07XG4gICAgQmFyY29kZUxvY2F0b3IuaW5pdChfaW5wdXRJbWFnZVdyYXBwZXIsIF9jb25maWcubG9jYXRvcik7XG59XG5cbmZ1bmN0aW9uIGdldEJvdW5kaW5nQm94ZXMoKSB7XG4gICAgaWYgKF9jb25maWcubG9jYXRlKSB7XG4gICAgICAgIHJldHVybiBCYXJjb2RlTG9jYXRvci5sb2NhdGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gW1tcbiAgICAgICAgICAgIF9ib3hTaXplWzBdLFxuICAgICAgICAgICAgX2JveFNpemVbMV0sXG4gICAgICAgICAgICBfYm94U2l6ZVsyXSxcbiAgICAgICAgICAgIF9ib3hTaXplWzNdXG4gICAgICAgIF1dO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtKHBvbHlnb24sIG9mZnNldCkge1xuICAgIHBvbHlnb24uZm9yRWFjaCh2ZXJ0ZXggPT4ge1xuICAgICAgICB2ZXJ0ZXgueCArPSBvZmZzZXQueDtcbiAgICAgICAgdmVydGV4LnkgKz0gb2Zmc2V0Lnk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybVJlc3VsdChyZXN1bHQsIG9mZnNldCkge1xuICAgIGlmIChyZXN1bHQuYmFyY29kZXMpIHtcbiAgICAgICAgcmVzdWx0LmJhcmNvZGVzLmZvckVhY2goYmFyY29kZSA9PiB0cmFuc2Zvcm1SZXN1bHQoYmFyY29kZSwgb2Zmc2V0KSk7XG4gICAgfVxuXG4gICAgaWYgKHJlc3VsdC5saW5lKSB7XG4gICAgICAgIHRyYW5zZm9ybShyZXN1bHQubGluZSwgb2Zmc2V0KTtcbiAgICB9XG5cbiAgICBpZiAocmVzdWx0LmJveCkge1xuICAgICAgICB0cmFuc2Zvcm0ocmVzdWx0LmJveCwgb2Zmc2V0KTtcbiAgICB9XG5cbiAgICBpZiAocmVzdWx0LmJveGVzKSB7XG4gICAgICAgIHJlc3VsdC5ib3hlcy5mb3JFYWNoKGJveCA9PiB0cmFuc2Zvcm0oYm94LCBvZmZzZXQpKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGFkZFJlc3VsdChyZXN1bHQsIGltYWdlRGF0YSwgY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCkge1xuICAgIGlmICghaW1hZ2VEYXRhIHx8ICFfcmVzdWx0Q29sbGVjdG9yKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocmVzdWx0LmJhcmNvZGVzKSB7XG4gICAgICAgIHJlc3VsdC5iYXJjb2Rlcy5mb3JFYWNoKGJhcmNvZGUgPT4ge1xuICAgICAgICAgICAgaWYgKGJhcmNvZGUuY29kZVJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGFkZFJlc3VsdChiYXJjb2RlLCBpbWFnZURhdGEsIGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHJlc3VsdC5jb2RlUmVzdWx0KSB7XG4gICAgICAgIF9yZXN1bHRDb2xsZWN0b3IuYWRkUmVzdWx0KGltYWdlRGF0YSwgY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCwgcmVzdWx0LmNvZGVSZXN1bHQpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaGFzQ29kZVJlc3VsdChyZXN1bHQpIHtcbiAgICByZXR1cm4gcmVzdWx0ICYmICghIXJlc3VsdC5jb2RlUmVzdWx0IHx8IHJlc3VsdC5iYXJjb2RlcyAmJiByZXN1bHQuYmFyY29kZXMuc29tZShiYXJjb2RlID0+IGJhcmNvZGUuY29kZVJlc3VsdCkpO1xufVxuXG5mdW5jdGlvbiBwdWJsaXNoUmVzdWx0KHJlc3VsdCwgaW1hZ2VEYXRhKSB7XG4gICAgbGV0IHJlc3VsdFRvUHVibGlzaCA9IHJlc3VsdDtcblxuICAgIGlmIChyZXN1bHQgJiYgX29uVUlUaHJlYWQpIHtcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gX2lucHV0U3RyZWFtLmdldFRvcFJpZ2h0KCk7XG5cbiAgICAgICAgaWYgKG9mZnNldC54ICE9PSAwIHx8IG9mZnNldC55ICE9PSAwKSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm1SZXN1bHQocmVzdWx0LCBvZmZzZXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgYWRkUmVzdWx0KHJlc3VsdCwgaW1hZ2VEYXRhLCBfaW5wdXRTdHJlYW0uZ2V0Q2FudmFzV2lkdGgoKSwgX2lucHV0U3RyZWFtLmdldENhbnZhc0hlaWdodCgpKTtcbiAgICAgICAgcmVzdWx0VG9QdWJsaXNoID0gcmVzdWx0LmJhcmNvZGVzIHx8IHJlc3VsdDtcbiAgICB9XG5cbiAgICBFdmVudHMucHVibGlzaCgncHJvY2Vzc2VkJywgcmVzdWx0VG9QdWJsaXNoKTtcbiAgICBpZiAoaGFzQ29kZVJlc3VsdChyZXN1bHQpKSB7XG4gICAgICAgIEV2ZW50cy5wdWJsaXNoKCdkZXRlY3RlZCcsIHJlc3VsdFRvUHVibGlzaCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBsb2NhdGVBbmREZWNvZGUoKSB7XG4gICAgY29uc3QgYm94ZXMgPSBnZXRCb3VuZGluZ0JveGVzKCk7XG5cbiAgICBpZiAoYm94ZXMpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gX2RlY29kZXIuZGVjb2RlRnJvbUJvdW5kaW5nQm94ZXMoYm94ZXMpIHx8IHt9O1xuICAgICAgICByZXN1bHQuYm94ZXMgPSBib3hlcztcbiAgICAgICAgcHVibGlzaFJlc3VsdChyZXN1bHQsIF9pbnB1dEltYWdlV3JhcHBlci5kYXRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBwdWJsaXNoUmVzdWx0KCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgbGV0IGF2YWlsYWJsZVdvcmtlcjtcblxuICAgIGlmIChfb25VSVRocmVhZCkge1xuICAgICAgICBpZiAoX3dvcmtlclBvb2wubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgYXZhaWxhYmxlV29ya2VyID0gX3dvcmtlclBvb2wuZmluZCh3b3JrZXJUaHJlYWQgPT4gIXdvcmtlclRocmVhZC5idXN5KTtcbiAgICAgICAgICAgIGlmIChhdmFpbGFibGVXb3JrZXIpIHtcbiAgICAgICAgICAgICAgICBfZnJhbWVncmFiYmVyLmF0dGFjaERhdGEoYXZhaWxhYmxlV29ya2VyLmltYWdlRGF0YSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybjsgLy8gYWxsIHdvcmtlcnMgYXJlIGJ1c3lcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF9mcmFtZWdyYWJiZXIuYXR0YWNoRGF0YShfaW5wdXRJbWFnZVdyYXBwZXIuZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF9mcmFtZWdyYWJiZXIuZ3JhYigpKSB7XG4gICAgICAgICAgICBpZiAoYXZhaWxhYmxlV29ya2VyKSB7XG4gICAgICAgICAgICAgICAgYXZhaWxhYmxlV29ya2VyLmJ1c3kgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGF2YWlsYWJsZVdvcmtlci53b3JrZXIucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgICAgICBjbWQ6ICdwcm9jZXNzJyxcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VEYXRhOiBhdmFpbGFibGVXb3JrZXIuaW1hZ2VEYXRhXG4gICAgICAgICAgICAgICAgfSwgW2F2YWlsYWJsZVdvcmtlci5pbWFnZURhdGEuYnVmZmVyXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxvY2F0ZUFuZERlY29kZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbG9jYXRlQW5kRGVjb2RlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBzdGFydENvbnRpbnVvdXNVcGRhdGUoKSB7XG4gICAgY29uc3QgZGVsYXkgPSAxMDAwIC8gKF9jb25maWcuZnJlcXVlbmN5IHx8IDYwKTtcbiAgICBsZXQgbmV4dCA9IG51bGw7XG5cbiAgICBfc3RvcHBlZCA9IGZhbHNlO1xuICAgIChmdW5jdGlvbiBmcmFtZSh0aW1lc3RhbXApIHtcbiAgICAgICAgbmV4dCA9IG5leHQgfHwgdGltZXN0YW1wO1xuICAgICAgICBpZiAoIV9zdG9wcGVkKSB7XG4gICAgICAgICAgICBpZiAodGltZXN0YW1wID49IG5leHQpIHtcbiAgICAgICAgICAgICAgICBuZXh0ICs9IGRlbGF5O1xuICAgICAgICAgICAgICAgIHVwZGF0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShmcmFtZSk7XG4gICAgICAgIH1cbiAgICB9KHBlcmZvcm1hbmNlLm5vdygpKSk7XG59XG5cbmZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgIGlmIChfb25VSVRocmVhZCAmJiBfY29uZmlnLmlucHV0U3RyZWFtLnR5cGUgPT09ICdMaXZlU3RyZWFtJykge1xuICAgICAgICBzdGFydENvbnRpbnVvdXNVcGRhdGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB1cGRhdGUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGluaXRXb3JrZXIoY2FsbGJhY2spIHtcbiAgICBjb25zdCBibG9iVVJMID0gZ2VuZXJhdGVXb3JrZXJCbG9iKCk7XG4gICAgY29uc3Qgd29ya2VyVGhyZWFkID0ge1xuICAgICAgICB3b3JrZXI6IG5ldyBXb3JrZXIoYmxvYlVSTCksXG4gICAgICAgIGltYWdlRGF0YTogbmV3IFVpbnQ4QXJyYXkoX2lucHV0U3RyZWFtLmdldFdpZHRoKCkgKiBfaW5wdXRTdHJlYW0uZ2V0SGVpZ2h0KCkpLFxuICAgICAgICBidXN5OiB0cnVlXG4gICAgfTtcblxuICAgIHdvcmtlclRocmVhZC53b3JrZXIub25tZXNzYWdlID0gZXYgPT4ge1xuICAgICAgICBpZiAoZXYuZGF0YS5ldmVudCA9PT0gJ2luaXRpYWxpemVkJykge1xuICAgICAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTChibG9iVVJMKTtcbiAgICAgICAgICAgIHdvcmtlclRocmVhZC5idXN5ID0gZmFsc2U7XG4gICAgICAgICAgICB3b3JrZXJUaHJlYWQuaW1hZ2VEYXRhID0gbmV3IFVpbnQ4QXJyYXkoZXYuZGF0YS5pbWFnZURhdGEpO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnV29ya2VyIGluaXRpYWxpemVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYWxsYmFjayh3b3JrZXJUaHJlYWQpO1xuICAgICAgICB9IGVsc2UgaWYgKGV2LmRhdGEuZXZlbnQgPT09ICdwcm9jZXNzZWQnKSB7XG4gICAgICAgICAgICB3b3JrZXJUaHJlYWQuaW1hZ2VEYXRhID0gbmV3IFVpbnQ4QXJyYXkoZXYuZGF0YS5pbWFnZURhdGEpO1xuICAgICAgICAgICAgd29ya2VyVGhyZWFkLmJ1c3kgPSBmYWxzZTtcbiAgICAgICAgICAgIHB1Ymxpc2hSZXN1bHQoZXYuZGF0YS5yZXN1bHQsIHdvcmtlclRocmVhZC5pbWFnZURhdGEpO1xuICAgICAgICB9IGVsc2UgaWYgKGV2LmRhdGEuZXZlbnQgPT09ICdlcnJvcicpIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1dvcmtlciBlcnJvcjonLCBldi5kYXRhLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIHdvcmtlclRocmVhZC53b3JrZXIucG9zdE1lc3NhZ2Uoe1xuICAgICAgICBjbWQ6ICdpbml0JyxcbiAgICAgICAgc2l6ZTogeyB4OiBfaW5wdXRTdHJlYW0uZ2V0V2lkdGgoKSwgeTogX2lucHV0U3RyZWFtLmdldEhlaWdodCgpIH0sXG4gICAgICAgIGltYWdlRGF0YTogd29ya2VyVGhyZWFkLmltYWdlRGF0YSxcbiAgICAgICAgY29uZmlnOiBjb25maWdGb3JXb3JrZXIoX2NvbmZpZylcbiAgICB9LCBbd29ya2VyVGhyZWFkLmltYWdlRGF0YS5idWZmZXJdKTtcbn1cblxuZnVuY3Rpb24gY29uZmlnRm9yV29ya2VyKGNmZykge1xuICAgIHJldHVybiBtZXJnZShjZmcsIHsgaW5wdXRTdHJlYW06IHsgdGFyZ2V0OiBudWxsIH0gfSk7XG59XG5cbmZ1bmN0aW9uIHdvcmtlckludGVyZmFjZShmYWN0b3J5KSB7XG4gICAgbGV0IFF1YWdnYTtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiovXG4gICAgaWYgKGZhY3RvcnkpIHtcbiAgICAgICAgUXVhZ2dhID0gZmFjdG9yeSgpLmRlZmF1bHQ7XG4gICAgICAgIGlmICghUXVhZ2dhKSB7XG4gICAgICAgICAgICBzZWxmLnBvc3RNZXNzYWdlKHsgJ2V2ZW50JzogJ2Vycm9yJywgbWVzc2FnZTogJ1F1YWdnYSBjb3VsZCBub3QgYmUgY3JlYXRlZCcgfSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG4gICAgbGV0IGltYWdlV3JhcHBlcjtcblxuICAgIHNlbGYub25tZXNzYWdlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKGUuZGF0YS5jbWQgPT09ICdpbml0Jykge1xuICAgICAgICAgICAgY29uc3QgY2ZnID0gZS5kYXRhLmNvbmZpZztcbiAgICAgICAgICAgIGNmZy5udW1PZldvcmtlcnMgPSAwO1xuICAgICAgICAgICAgaW1hZ2VXcmFwcGVyID0gbmV3IFF1YWdnYS5JbWFnZVdyYXBwZXIoe1xuICAgICAgICAgICAgICAgIHg6IGUuZGF0YS5zaXplLngsXG4gICAgICAgICAgICAgICAgeTogZS5kYXRhLnNpemUueVxuICAgICAgICAgICAgfSwgbmV3IFVpbnQ4QXJyYXkoZS5kYXRhLmltYWdlRGF0YSkpO1xuICAgICAgICAgICAgUXVhZ2dhLmluaXQoY2ZnLCByZWFkeSwgaW1hZ2VXcmFwcGVyKTtcbiAgICAgICAgICAgIFF1YWdnYS5vblByb2Nlc3NlZChvblByb2Nlc3NlZCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZS5kYXRhLmNtZCA9PT0gJ3Byb2Nlc3MnKSB7XG4gICAgICAgICAgICBpbWFnZVdyYXBwZXIuZGF0YSA9IG5ldyBVaW50OEFycmF5KGUuZGF0YS5pbWFnZURhdGEpO1xuICAgICAgICAgICAgUXVhZ2dhLnN0YXJ0KCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZS5kYXRhLmNtZCA9PT0gJ3NldFJlYWRlcnMnKSB7XG4gICAgICAgICAgICBRdWFnZ2Euc2V0UmVhZGVycyhlLmRhdGEucmVhZGVycyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gb25Qcm9jZXNzZWQocmVzdWx0KSB7XG4gICAgICAgIHNlbGYucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgJ2V2ZW50JzogJ3Byb2Nlc3NlZCcsXG4gICAgICAgICAgICBpbWFnZURhdGE6IGltYWdlV3JhcHBlci5kYXRhLFxuICAgICAgICAgICAgcmVzdWx0OiByZXN1bHRcbiAgICAgICAgfSwgW2ltYWdlV3JhcHBlci5kYXRhLmJ1ZmZlcl0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlYWR5KCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICAgIHNlbGYucG9zdE1lc3NhZ2UoeyAnZXZlbnQnOiAnaW5pdGlhbGl6ZWQnLCBpbWFnZURhdGE6IGltYWdlV3JhcHBlci5kYXRhIH0sIFtpbWFnZVdyYXBwZXIuZGF0YS5idWZmZXJdKTtcbiAgICB9XG5cbiAgICAvKiBlc2xpbnQtZW5hYmxlICovXG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlV29ya2VyQmxvYigpIHtcbiAgICBsZXQgZmFjdG9yeVNvdXJjZTtcblxuICAgIC8qIGpzaGludCBpZ25vcmU6c3RhcnQgKi9cbiAgICBpZiAodHlwZW9mIF9fZmFjdG9yeVNvdXJjZV9fICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBmYWN0b3J5U291cmNlID0gX19mYWN0b3J5U291cmNlX187IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiAgICB9XG4gICAgLyoganNoaW50IGlnbm9yZTplbmQgKi9cblxuICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbJygnICsgd29ya2VySW50ZXJmYWNlLnRvU3RyaW5nKCkgKyAnKSgnICsgZmFjdG9yeVNvdXJjZSArICcpOyddLFxuICAgICAgICB7IHR5cGU6ICd0ZXh0L2phdmFzY3JpcHQnIH0pO1xuXG4gICAgcmV0dXJuIHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xufVxuXG5mdW5jdGlvbiBzZXRSZWFkZXJzKHJlYWRlcnMpIHtcbiAgICBpZiAoX2RlY29kZXIpIHtcbiAgICAgICAgX2RlY29kZXIuc2V0UmVhZGVycyhyZWFkZXJzKTtcbiAgICB9IGVsc2UgaWYgKF9vblVJVGhyZWFkICYmIF93b3JrZXJQb29sLmxlbmd0aCA+IDApIHtcbiAgICAgICAgX3dvcmtlclBvb2wuZm9yRWFjaCgoeyB3b3JrZXIgfSkgPT4gd29ya2VyLnBvc3RNZXNzYWdlKHsgY21kOiAnc2V0UmVhZGVycycsIHJlYWRlcnMgfSkpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gYWRqdXN0V29ya2VyUG9vbChjYXBhY2l0eSwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBpbmNyZWFzZUJ5ID0gY2FwYWNpdHkgLSBfd29ya2VyUG9vbC5sZW5ndGg7XG5cbiAgICBpZiAoaW5jcmVhc2VCeSA9PT0gMCkge1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChpbmNyZWFzZUJ5IDwgMCkge1xuICAgICAgICBjb25zdCB3b3JrZXJzVG9UZXJtaW5hdGUgPSBfd29ya2VyUG9vbC5zbGljZShpbmNyZWFzZUJ5KTtcbiAgICAgICAgd29ya2Vyc1RvVGVybWluYXRlLmZvckVhY2goKHsgd29ya2VyIH0pID0+IHtcbiAgICAgICAgICAgIHdvcmtlci50ZXJtaW5hdGUoKTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1dvcmtlciB0ZXJtaW5hdGVkIScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgX3dvcmtlclBvb2wgPSBfd29ya2VyUG9vbC5zbGljZSgwLCBpbmNyZWFzZUJ5KTtcblxuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluY3JlYXNlQnk7IGkrKykge1xuICAgICAgICAgICAgaW5pdFdvcmtlcih3b3JrZXJUaHJlYWQgPT4ge1xuICAgICAgICAgICAgICAgIF93b3JrZXJQb29sLnB1c2god29ya2VyVGhyZWFkKTtcblxuICAgICAgICAgICAgICAgIGlmIChfd29ya2VyUG9vbC5sZW5ndGggPj0gY2FwYWNpdHkgJiYgY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGluaXQ6IGZ1bmN0aW9uIChjZmcsIGNhbGxiYWNrLCBpbWFnZVdyYXBwZXIpIHtcbiAgICAgICAgX2NvbmZpZyA9IG1lcmdlKGNvbmZpZywgY2ZnKTtcbiAgICAgICAgaWYgKGltYWdlV3JhcHBlcikge1xuICAgICAgICAgICAgX29uVUlUaHJlYWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGluaXRpYWxpemVEYXRhKGltYWdlV3JhcHBlcik7XG5cbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbml0SW5wdXRTdHJlYW0oY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBzdGFydDogZnVuY3Rpb24gKCkge1xuICAgICAgICBzdGFydCgpO1xuICAgIH0sXG4gICAgc3RvcDogZnVuY3Rpb24gKCkge1xuICAgICAgICBfc3RvcHBlZCA9IHRydWU7XG4gICAgICAgIGFkanVzdFdvcmtlclBvb2woMCk7XG4gICAgICAgIGlmIChfY29uZmlnLmlucHV0U3RyZWFtLnR5cGUgPT09ICdMaXZlU3RyZWFtJykge1xuICAgICAgICAgICAgQ2FtZXJhQWNjZXNzLnJlbGVhc2UoKTtcbiAgICAgICAgICAgIF9pbnB1dFN0cmVhbS5jbGVhckV2ZW50SGFuZGxlcnMoKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgcGF1c2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3N0b3BwZWQgPSB0cnVlO1xuICAgIH0sXG4gICAgb25EZXRlY3RlZDogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIEV2ZW50cy5zdWJzY3JpYmUoJ2RldGVjdGVkJywgY2FsbGJhY2spO1xuICAgIH0sXG4gICAgb2ZmRGV0ZWN0ZWQ6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICBFdmVudHMudW5zdWJzY3JpYmUoJ2RldGVjdGVkJywgY2FsbGJhY2spO1xuICAgIH0sXG4gICAgb25Qcm9jZXNzZWQ6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICBFdmVudHMuc3Vic2NyaWJlKCdwcm9jZXNzZWQnLCBjYWxsYmFjayk7XG4gICAgfSxcbiAgICBvZmZQcm9jZXNzZWQ6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICBFdmVudHMudW5zdWJzY3JpYmUoJ3Byb2Nlc3NlZCcsIGNhbGxiYWNrKTtcbiAgICB9LFxuICAgIHNldFJlYWRlcnM6IGZ1bmN0aW9uIChyZWFkZXJzKSB7XG4gICAgICAgIHNldFJlYWRlcnMocmVhZGVycyk7XG4gICAgfSxcbiAgICByZWdpc3RlclJlc3VsdENvbGxlY3RvcjogKHJlc3VsdENvbGxlY3RvcikgPT4ge1xuICAgICAgICBpZiAocmVzdWx0Q29sbGVjdG9yICYmIHR5cGVvZiByZXN1bHRDb2xsZWN0b3IuYWRkUmVzdWx0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBfcmVzdWx0Q29sbGVjdG9yID0gcmVzdWx0Q29sbGVjdG9yO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBjYW52YXM6IF9jYW52YXNDb250YWluZXIsXG4gICAgZGVjb2RlU2luZ2xlOiBmdW5jdGlvbiAoY2ZnLCByZXN1bHRDYWxsYmFjaykge1xuICAgICAgICBjZmcgPSBtZXJnZSh7XG4gICAgICAgICAgICBpbnB1dFN0cmVhbToge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdJbWFnZVN0cmVhbScsXG4gICAgICAgICAgICAgICAgc2VxdWVuY2U6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNpemU6IDgwMCxcbiAgICAgICAgICAgICAgICBzcmM6IGNmZy5zcmNcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBudW1PZldvcmtlcnM6IChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGNmZy5kZWJ1ZykgPyAwIDogMSxcbiAgICAgICAgICAgIGxvY2F0b3I6IHtcbiAgICAgICAgICAgICAgICBoYWxmU2FtcGxlOiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCBjZmcpO1xuXG4gICAgICAgIHRoaXMuaW5pdChjZmcsICgpID0+IHtcbiAgICAgICAgICAgIEV2ZW50cy5vbmNlKCdwcm9jZXNzZWQnLCByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICAgICAgICAgIHJlc3VsdENhbGxiYWNrLmNhbGwobnVsbCwgcmVzdWx0KTtcbiAgICAgICAgICAgIH0sIHRydWUpO1xuICAgICAgICAgICAgc3RhcnQoKTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBJbWFnZVdyYXBwZXIsXG4gICAgSW1hZ2VEZWJ1ZyxcbiAgICBSZXN1bHRDb2xsZWN0b3IsXG4gICAgQ2FtZXJhQWNjZXNzXG59O1xuIiwiaW1wb3J0IHsgQmFyY29kZVJlYWRlciB9IGZyb20gJy4vYmFyY29kZV9yZWFkZXInO1xuXG5jb25zdCBOID0gMTtcbmNvbnN0IFcgPSAzO1xuY29uc3QgU1RBUlRfUEFUVEVSTiA9IFtXLCBOLCBXLCBOLCBOLCBOXTtcbmNvbnN0IFNUT1BfUEFUVEVSTiA9IFtXLCBOLCBOLCBOLCBXXTtcbmNvbnN0IENPREVfUEFUVEVSTiA9IFtcbiAgICBbTiwgTiwgVywgVywgTl0sXG4gICAgW1csIE4sIE4sIE4sIFddLFxuICAgIFtOLCBXLCBOLCBOLCBXXSxcbiAgICBbVywgVywgTiwgTiwgTl0sXG4gICAgW04sIE4sIFcsIE4sIFddLFxuICAgIFtXLCBOLCBXLCBOLCBOXSxcbiAgICBbTiwgVywgVywgTiwgTl0sXG4gICAgW04sIE4sIE4sIFcsIFddLFxuICAgIFtXLCBOLCBOLCBXLCBOXSxcbiAgICBbTiwgVywgTiwgVywgTl1cbl07XG5jb25zdCBzdGFydFBhdHRlcm5MZW5ndGggPSBTVEFSVF9QQVRURVJOLnJlZHVjZSgoc3VtLCB2YWwpID0+IHN1bSArIHZhbCwgMCk7XG5cbmV4cG9ydCBjbGFzcyBUd29PZkZpdmVSZWFkZXIgZXh0ZW5kcyBCYXJjb2RlUmVhZGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcblxuICAgICAgICB0aGlzLl9iYXJTcGFjZVJhdGlvID0gWzEsIDFdO1xuICAgICAgICB0aGlzLl9mb3JtYXQgPSAnMm9mNSc7XG4gICAgICAgIHRoaXMuX3NpbmdsZUNvZGVFcnJvciA9IDAuNzg7XG4gICAgICAgIHRoaXMuX2F2ZXJhZ2VDb2RlRXJyb3IgPSAwLjMwO1xuICAgIH1cblxuICAgIF9maW5kUGF0dGVybihwYXR0ZXJuLCBvZmZzZXQsIGlzV2hpdGUsIHRyeUhhcmRlcikge1xuICAgICAgICBjb25zdCBjb3VudGVyID0gW107XG4gICAgICAgIGNvbnN0IGJlc3RNYXRjaCA9IHtcbiAgICAgICAgICAgIGVycm9yOiBOdW1iZXIuTUFYX1ZBTFVFLFxuICAgICAgICAgICAgY29kZTogLTEsXG4gICAgICAgICAgICBzdGFydDogMCxcbiAgICAgICAgICAgIGVuZDogMFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBlcHNpbG9uID0gdGhpcy5BVkVSQUdFX0NPREVfRVJST1I7XG4gICAgICAgIGxldCBjb3VudGVyUG9zID0gMDtcblxuICAgICAgICBpc1doaXRlID0gaXNXaGl0ZSB8fCBmYWxzZTtcbiAgICAgICAgdHJ5SGFyZGVyID0gdHJ5SGFyZGVyIHx8IGZhbHNlO1xuXG4gICAgICAgIGlmICghb2Zmc2V0KSB7XG4gICAgICAgICAgICBvZmZzZXQgPSB0aGlzLl9uZXh0U2V0KHRoaXMuX3Jvdyk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdHRlcm4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvdW50ZXJbaV0gPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IG9mZnNldDsgaSA8IHRoaXMuX3Jvdy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3Jvd1tpXSBeIGlzV2hpdGUpIHtcbiAgICAgICAgICAgICAgICBjb3VudGVyW2NvdW50ZXJQb3NdKys7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChjb3VudGVyUG9zID09PSBjb3VudGVyLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN1bSA9IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb3VudGVyLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdW0gKz0gY291bnRlcltqXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yID0gdGhpcy5fbWF0Y2hQYXR0ZXJuKGNvdW50ZXIsIHBhdHRlcm4pO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnJvciA8IGVwc2lsb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlc3RNYXRjaC5lcnJvciA9IGVycm9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmVzdE1hdGNoLnN0YXJ0ID0gaSAtIHN1bTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlc3RNYXRjaC5lbmQgPSBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJlc3RNYXRjaDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0cnlIYXJkZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY291bnRlci5sZW5ndGggLSAyOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVyW2pdID0gY291bnRlcltqICsgMl07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVyW2NvdW50ZXIubGVuZ3RoIC0gMl0gPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgY291bnRlcltjb3VudGVyLmxlbmd0aCAtIDFdID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ZXJQb3MtLTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnRlclBvcysrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb3VudGVyW2NvdW50ZXJQb3NdID0gMTtcbiAgICAgICAgICAgICAgICBpc1doaXRlID0gIWlzV2hpdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBfZmluZFN0YXJ0KCkge1xuICAgICAgICBsZXQgb2Zmc2V0ID0gdGhpcy5fbmV4dFNldCh0aGlzLl9yb3cpO1xuICAgICAgICBsZXQgbmFycm93QmFyV2lkdGggPSAxO1xuICAgICAgICBsZXQgc3RhcnRJbmZvO1xuXG4gICAgICAgIHdoaWxlICghc3RhcnRJbmZvKSB7XG4gICAgICAgICAgICBzdGFydEluZm8gPSB0aGlzLl9maW5kUGF0dGVybihTVEFSVF9QQVRURVJOLCBvZmZzZXQsIGZhbHNlLCB0cnVlKTtcbiAgICAgICAgICAgIGlmICghc3RhcnRJbmZvKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuYXJyb3dCYXJXaWR0aCA9IChzdGFydEluZm8uZW5kIC0gc3RhcnRJbmZvLnN0YXJ0KSAvIHN0YXJ0UGF0dGVybkxlbmd0aCB8IDA7XG4gICAgICAgICAgICBjb25zdCBsZWFkaW5nV2hpdGVzcGFjZVN0YXJ0ID0gc3RhcnRJbmZvLnN0YXJ0IC0gbmFycm93QmFyV2lkdGggKiA1O1xuICAgICAgICAgICAgaWYgKGxlYWRpbmdXaGl0ZXNwYWNlU3RhcnQgPj0gMCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9tYXRjaFJhbmdlKGxlYWRpbmdXaGl0ZXNwYWNlU3RhcnQsIHN0YXJ0SW5mby5zdGFydCwgMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0YXJ0SW5mbztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvZmZzZXQgPSBzdGFydEluZm8uZW5kO1xuICAgICAgICAgICAgc3RhcnRJbmZvID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIF92ZXJpZnlUcmFpbGluZ1doaXRlc3BhY2UoZW5kSW5mbykge1xuICAgICAgICBjb25zdCB0cmFpbGluZ1doaXRlc3BhY2VFbmQgPSBlbmRJbmZvLmVuZCArIChlbmRJbmZvLmVuZCAtIGVuZEluZm8uc3RhcnQpIC8gMjtcblxuICAgICAgICBpZiAodHJhaWxpbmdXaGl0ZXNwYWNlRW5kIDwgdGhpcy5fcm93Lmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX21hdGNoUmFuZ2UoZW5kSW5mby5lbmQsIHRyYWlsaW5nV2hpdGVzcGFjZUVuZCwgMCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZW5kSW5mbztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIF9maW5kRW5kKCkge1xuICAgICAgICB0aGlzLl9yb3cucmV2ZXJzZSgpO1xuXG4gICAgICAgIGNvbnN0IG9mZnNldCA9IHRoaXMuX25leHRTZXQodGhpcy5fcm93KTtcbiAgICAgICAgY29uc3QgZW5kSW5mbyA9IHRoaXMuX2ZpbmRQYXR0ZXJuKFNUT1BfUEFUVEVSTiwgb2Zmc2V0LCBmYWxzZSwgdHJ1ZSk7XG5cbiAgICAgICAgdGhpcy5fcm93LnJldmVyc2UoKTtcblxuICAgICAgICBpZiAoZW5kSW5mbyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvLyByZXZlcnNlIG51bWJlcnNcbiAgICAgICAgY29uc3QgdG1wID0gZW5kSW5mby5zdGFydDtcbiAgICAgICAgZW5kSW5mby5zdGFydCA9IHRoaXMuX3Jvdy5sZW5ndGggLSBlbmRJbmZvLmVuZDtcbiAgICAgICAgZW5kSW5mby5lbmQgPSB0aGlzLl9yb3cubGVuZ3RoIC0gdG1wO1xuXG4gICAgICAgIHJldHVybiBlbmRJbmZvICE9PSBudWxsID8gdGhpcy5fdmVyaWZ5VHJhaWxpbmdXaGl0ZXNwYWNlKGVuZEluZm8pIDogbnVsbDtcbiAgICB9XG5cbiAgICBfZGVjb2RlQ29kZShjb3VudGVyKSB7XG4gICAgICAgIGNvbnN0IGJlc3RNYXRjaCA9IHtcbiAgICAgICAgICAgIGVycm9yOiBOdW1iZXIuTUFYX1ZBTFVFLFxuICAgICAgICAgICAgY29kZTogLTEsXG4gICAgICAgICAgICBzdGFydDogMCxcbiAgICAgICAgICAgIGVuZDogMFxuICAgICAgICB9O1xuXG4gICAgICAgIGZvciAobGV0IGNvZGUgPSAwOyBjb2RlIDwgQ09ERV9QQVRURVJOLmxlbmd0aDsgY29kZSsrKSB7XG4gICAgICAgICAgICBjb25zdCBlcnJvciA9IHRoaXMuX21hdGNoUGF0dGVybihjb3VudGVyLCBDT0RFX1BBVFRFUk5bY29kZV0pO1xuICAgICAgICAgICAgaWYgKGVycm9yIDwgYmVzdE1hdGNoLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgYmVzdE1hdGNoLmNvZGUgPSBjb2RlO1xuICAgICAgICAgICAgICAgIGJlc3RNYXRjaC5lcnJvciA9IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGJlc3RNYXRjaC5lcnJvciA8IHRoaXMuQVZFUkFHRV9DT0RFX0VSUk9SID8gYmVzdE1hdGNoIDogbnVsbDtcbiAgICB9XG5cbiAgICBfZGVjb2RlUGF5bG9hZChjb3VudGVycywgcmVzdWx0LCBkZWNvZGVkQ29kZXMpIHtcbiAgICAgICAgY29uc3QgY291bnRlckxlbmd0aCA9IGNvdW50ZXJzLmxlbmd0aDtcbiAgICAgICAgY29uc3QgY291bnRlciA9IFswLCAwLCAwLCAwLCAwXTtcbiAgICAgICAgbGV0IHBvcyA9IDA7XG4gICAgICAgIGxldCBjb2RlO1xuXG4gICAgICAgIHdoaWxlIChwb3MgPCBjb3VudGVyTGVuZ3RoKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvdW50ZXJbaV0gPSBjb3VudGVyc1twb3NdICogdGhpcy5fYmFyU3BhY2VSYXRpb1swXTtcbiAgICAgICAgICAgICAgICBwb3MgKz0gMjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29kZSA9IHRoaXMuX2RlY29kZUNvZGUoY291bnRlcik7XG5cbiAgICAgICAgICAgIGlmICghY29kZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXN1bHQucHVzaChjb2RlLmNvZGUgKyAnJyk7XG4gICAgICAgICAgICBkZWNvZGVkQ29kZXMucHVzaChjb2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb2RlO1xuICAgIH1cblxuICAgIF9kZWNvZGUoKSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0SW5mbyA9IHRoaXMuX2ZpbmRTdGFydCgpO1xuXG4gICAgICAgIGlmICghc3RhcnRJbmZvKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGVuZEluZm8gPSB0aGlzLl9maW5kRW5kKCk7XG5cbiAgICAgICAgaWYgKCFlbmRJbmZvKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvdW50ZXJzID0gdGhpcy5fZmlsbENvdW50ZXJzKHN0YXJ0SW5mby5lbmQsIGVuZEluZm8uc3RhcnQsIGZhbHNlKTtcblxuICAgICAgICBpZiAoY291bnRlcnMubGVuZ3RoICUgMTAgIT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgICAgIGNvbnN0IGRlY29kZWRDb2RlcyA9IFtdO1xuXG4gICAgICAgIGRlY29kZWRDb2Rlcy5wdXNoKHN0YXJ0SW5mbyk7XG5cbiAgICAgICAgY29uc3QgY29kZSA9IHRoaXMuX2RlY29kZVBheWxvYWQoY291bnRlcnMsIHJlc3VsdCwgZGVjb2RlZENvZGVzKTtcblxuICAgICAgICBpZiAoIWNvZGUgfHwgcmVzdWx0Lmxlbmd0aCA8IDUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVjb2RlZENvZGVzLnB1c2goZW5kSW5mbyk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvZGU6IHJlc3VsdC5qb2luKCcnKSxcbiAgICAgICAgICAgIHN0YXJ0OiBzdGFydEluZm8uc3RhcnQsXG4gICAgICAgICAgICBlbmQ6IGVuZEluZm8uZW5kLFxuICAgICAgICAgICAgc3RhcnRJbmZvLFxuICAgICAgICAgICAgZGVjb2RlZENvZGVzXG4gICAgICAgIH07XG4gICAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IERJUkVDVElPTiA9IHtcbiAgICBGT1JXQVJEOiAxLFxuICAgIFJFVkVSU0U6IC0xXG59O1xuXG5leHBvcnQgY2xhc3MgQmFyY29kZVJlYWRlciB7XG4gICAgc3RhdGljIGdldCBFeGNlcHRpb24oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBTdGFydE5vdEZvdW5kRXhjZXB0aW9uOiAnU3RhcnQtSW5mbyB3YXMgbm90IGZvdW5kIScsXG4gICAgICAgICAgICBDb2RlTm90Rm91bmRFeGNlcHRpb246ICdDb2RlIGNvdWxkIG5vdCBiZSBmb3VuZCEnLFxuICAgICAgICAgICAgUGF0dGVybk5vdEZvdW5kRXhjZXB0aW9uOiAnUGF0dGVybiBjb3VsZCBub3QgYmUgZm91bmQhJ1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGdldCBTSU5HTEVfQ09ERV9FUlJPUigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpbmdsZUNvZGVFcnJvcjtcbiAgICB9XG5cbiAgICBnZXQgQVZFUkFHRV9DT0RFX0VSUk9SKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYXZlcmFnZUNvZGVFcnJvcjtcbiAgICB9XG5cbiAgICBnZXQgRk9STUFUKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZm9ybWF0O1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZywgc3VwcGxlbWVudHMpIHtcbiAgICAgICAgdGhpcy5fZm9ybWF0ID0gJ3Vua25vd24nO1xuICAgICAgICB0aGlzLl9yb3cgPSBbXTtcbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWcgfHwge307XG4gICAgICAgIHRoaXMuc3VwcGxlbWVudHMgPSBzdXBwbGVtZW50cztcbiAgICB9XG5cbiAgICBfbmV4dFVuc2V0KGxpbmUsIHN0YXJ0KSB7XG4gICAgICAgIGZvciAobGV0IGkgPSBzdGFydCB8fCAwOyBpIDwgbGluZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKCFsaW5lW2ldKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxpbmUubGVuZ3RoO1xuICAgIH1cblxuICAgIF9tYXRjaFBhdHRlcm4oY291bnRlciwgY29kZSwgbWF4U2luZ2xlRXJyb3IpIHtcbiAgICAgICAgbGV0IGVycm9yID0gMDtcbiAgICAgICAgbGV0IHN1bSA9IDA7XG4gICAgICAgIGxldCBtb2R1bG8gPSAwO1xuXG4gICAgICAgIG1heFNpbmdsZUVycm9yID0gbWF4U2luZ2xlRXJyb3IgfHwgdGhpcy5TSU5HTEVfQ09ERV9FUlJPUiB8fCAxO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnRlci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgc3VtICs9IGNvdW50ZXJbaV07XG4gICAgICAgICAgICBtb2R1bG8gKz0gY29kZVtpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdW0gPCBtb2R1bG8pIHtcbiAgICAgICAgICAgIHJldHVybiBOdW1iZXIuTUFYX1ZBTFVFO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYmFyV2lkdGggPSBzdW0gLyBtb2R1bG87XG4gICAgICAgIG1heFNpbmdsZUVycm9yICo9IGJhcldpZHRoO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnRlci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY291bnQgPSBjb3VudGVyW2ldO1xuICAgICAgICAgICAgY29uc3Qgc2NhbGVkID0gY29kZVtpXSAqIGJhcldpZHRoO1xuICAgICAgICAgICAgY29uc3Qgc2luZ2xlRXJyb3IgPSBNYXRoLmFicyhjb3VudCAtIHNjYWxlZCkgLyBzY2FsZWQ7XG5cbiAgICAgICAgICAgIGlmIChzaW5nbGVFcnJvciA+IG1heFNpbmdsZUVycm9yKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE51bWJlci5NQVhfVkFMVUU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGVycm9yICs9IHNpbmdsZUVycm9yO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGVycm9yIC8gbW9kdWxvO1xuICAgIH1cblxuICAgIF9uZXh0U2V0KGxpbmUsIG9mZnNldCkge1xuICAgICAgICBmb3IgKGxldCBpID0gb2Zmc2V0IHx8IDA7IGkgPCBsaW5lLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAobGluZVtpXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsaW5lLmxlbmd0aDtcbiAgICB9XG5cbiAgICBfY29ycmVjdEJhcnMoY291bnRlciwgY29ycmVjdGlvbiwgaW5kaWNlcykge1xuICAgICAgICBsZXQgbGVuZ3RoID0gaW5kaWNlcy5sZW5ndGg7XG4gICAgICAgIGxldCB0bXAgPSAwO1xuXG4gICAgICAgIHdoaWxlIChsZW5ndGgtLSkge1xuICAgICAgICAgICAgdG1wID0gY291bnRlcltpbmRpY2VzW2xlbmd0aF1dICogKDEgLSAoKDEgLSBjb3JyZWN0aW9uKSAvIDIpKTtcbiAgICAgICAgICAgIGlmICh0bXAgPiAxKSB7XG4gICAgICAgICAgICAgICAgY291bnRlcltpbmRpY2VzW2xlbmd0aF1dID0gdG1wO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGVjb2RlUGF0dGVybihwYXR0ZXJuKSB7XG4gICAgICAgIHRoaXMuX3JvdyA9IHBhdHRlcm47XG4gICAgICAgIGxldCByZXN1bHQgPSB0aGlzLl9kZWNvZGUoKTtcblxuICAgICAgICBpZiAocmVzdWx0ID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLl9yb3cucmV2ZXJzZSgpO1xuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5fZGVjb2RlKCk7XG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmRpcmVjdGlvbiA9IERJUkVDVElPTi5SRVZFUlNFO1xuICAgICAgICAgICAgICAgIHJlc3VsdC5zdGFydCA9IHRoaXMuX3Jvdy5sZW5ndGggLSByZXN1bHQuc3RhcnQ7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmVuZCA9IHRoaXMuX3Jvdy5sZW5ndGggLSByZXN1bHQuZW5kO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0LmRpcmVjdGlvbiA9IERJUkVDVElPTi5GT1JXQVJEO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgcmVzdWx0LmZvcm1hdCA9IHRoaXMuRk9STUFUO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBfbWF0Y2hSYW5nZShzdGFydCwgZW5kLCB2YWx1ZSkge1xuICAgICAgICBmb3IgKGxldCBpID0gc3RhcnQgPCAwID8gMCA6IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9yb3dbaV0gIT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIF9maWxsQ291bnRlcnMob2Zmc2V0LCBlbmQsIGlzV2hpdGUpIHtcbiAgICAgICAgY29uc3QgY291bnRlcnMgPSBbXTtcbiAgICAgICAgbGV0IGNvdW50ZXJQb3MgPSAwO1xuXG4gICAgICAgIGlzV2hpdGUgPSAodHlwZW9mIGlzV2hpdGUgIT09ICd1bmRlZmluZWQnKSA/IGlzV2hpdGUgOiB0cnVlO1xuICAgICAgICBvZmZzZXQgPSAodHlwZW9mIG9mZnNldCAhPT0gJ3VuZGVmaW5lZCcpID8gb2Zmc2V0IDogdGhpcy5fbmV4dFVuc2V0KHRoaXMuX3Jvdyk7XG4gICAgICAgIGVuZCA9IGVuZCB8fCB0aGlzLl9yb3cubGVuZ3RoO1xuICAgICAgICBjb3VudGVyc1tjb3VudGVyUG9zXSA9IDA7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IG9mZnNldDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fcm93W2ldIF4gaXNXaGl0ZSkge1xuICAgICAgICAgICAgICAgIGNvdW50ZXJzW2NvdW50ZXJQb3NdKys7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvdW50ZXJQb3MrKztcbiAgICAgICAgICAgICAgICBjb3VudGVyc1tjb3VudGVyUG9zXSA9IDE7XG4gICAgICAgICAgICAgICAgaXNXaGl0ZSA9ICFpc1doaXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvdW50ZXJzO1xuICAgIH1cblxuICAgIF90b0NvdW50ZXJzKHN0YXJ0LCBjb3VudGVyKSB7XG4gICAgICAgIGNvbnN0IG51bUNvdW50ZXJzID0gY291bnRlci5sZW5ndGg7XG4gICAgICAgIGNvbnN0IGVuZCA9IHRoaXMuX3Jvdy5sZW5ndGg7XG4gICAgICAgIGxldCBpc1doaXRlID0gIXRoaXMuX3Jvd1tzdGFydF07XG4gICAgICAgIGxldCBjb3VudGVyUG9zID0gMDtcblxuICAgICAgICBjb3VudGVyLmZpbGwoMCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9yb3dbaV0gXiBpc1doaXRlKSB7XG4gICAgICAgICAgICAgICAgY291bnRlcltjb3VudGVyUG9zXSsrO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb3VudGVyUG9zKys7XG4gICAgICAgICAgICAgICAgaWYgKGNvdW50ZXJQb3MgPT09IG51bUNvdW50ZXJzKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXJbY291bnRlclBvc10gPSAxO1xuICAgICAgICAgICAgICAgICAgICBpc1doaXRlID0gIWlzV2hpdGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvdW50ZXI7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQmFyY29kZVJlYWRlciB9IGZyb20gJy4vYmFyY29kZV9yZWFkZXInO1xuXG5jb25zdCBBTFBIQUJFVEhfU1RSSU5HID0gJzAxMjM0NTY3ODktJDovLitBQkNEJztcbmNvbnN0IEFMUEhBQkVUID0gWy4uLkFMUEhBQkVUSF9TVFJJTkddLm1hcChjaGFyID0+IGNoYXIuY2hhckNvZGVBdCgwKSk7XG4vLyBjb25zdCBBTFBIQUJFVCA9IFs0OCwgNDksIDUwLCA1MSwgNTIsIDUzLCA1NCwgNTUsIDU2LCA1NywgNDUsIDM2LCA1OCwgNDcsIDQ2LCA0MywgNjUsIDY2LCA2NywgNjhdO1xuY29uc3QgQ0hBUkFDVEVSX0VOQ09ESU5HUyA9IFsweDAwMywgMHgwMDYsIDB4MDA5LCAweDA2MCwgMHgwMTIsIDB4MDQyLCAweDAyMSwgMHgwMjQsIDB4MDMwLCAweDA0OCwgMHgwMGMsIDB4MDE4LFxuICAgIDB4MDQ1LCAweDA1MSwgMHgwNTQsIDB4MDE1LCAweDAxQSwgMHgwMjksIDB4MDBCLCAweDAwRV07XG5jb25zdCBTVEFSVF9FTkQgPSBbMHgwMUEsIDB4MDI5LCAweDAwQiwgMHgwMEVdO1xuY29uc3QgTUlOX0VOQ09ERURfQ0hBUlMgPSA0O1xuY29uc3QgTUFYX0FDQ0VQVEFCTEUgPSAyLjA7XG5jb25zdCBQQURESU5HID0gMS41O1xuXG5leHBvcnQgY2xhc3MgQ29kYWJhclJlYWRlciBleHRlbmRzIEJhcmNvZGVSZWFkZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuX2Zvcm1hdCA9ICdjb2RhYmFyJztcbiAgICAgICAgdGhpcy5fY291bnRlcnMgPSBbXTtcbiAgICB9XG5cbiAgICBfZGVjb2RlKCkge1xuICAgICAgICB0aGlzLl9jb3VudGVycyA9IHRoaXMuX2ZpbGxDb3VudGVycygpO1xuXG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy5fZmluZFN0YXJ0KCk7XG4gICAgICAgIGlmICghc3RhcnQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgICAgIGxldCBuZXh0U3RhcnQgPSBzdGFydC5zdGFydENvdW50ZXI7XG4gICAgICAgIGxldCBwYXR0ZXJuO1xuXG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIHBhdHRlcm4gPSB0aGlzLl90b1BhdHRlcm4obmV4dFN0YXJ0KTtcbiAgICAgICAgICAgIGlmIChwYXR0ZXJuIDwgMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZGVjb2RlZENoYXIgPSB0aGlzLl9wYXR0ZXJuVG9DaGFyKHBhdHRlcm4pO1xuICAgICAgICAgICAgaWYgKGRlY29kZWRDaGFyIDwgMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goZGVjb2RlZENoYXIpO1xuICAgICAgICAgICAgbmV4dFN0YXJ0ICs9IDg7XG4gICAgICAgICAgICBpZiAocmVzdWx0Lmxlbmd0aCA+IDEgJiYgU1RBUlRfRU5ELnNvbWUoY29kZSA9PiBjb2RlID09PSBwYXR0ZXJuKSkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IHdoaWxlIChuZXh0U3RhcnQgPCB0aGlzLl9jb3VudGVycy5sZW5ndGgpO1xuXG4gICAgICAgIC8vIHZlcmlmeSBlbmRcbiAgICAgICAgaWYgKChyZXN1bHQubGVuZ3RoIC0gMikgPCBNSU5fRU5DT0RFRF9DSEFSUyB8fCAhU1RBUlRfRU5ELnNvbWUoY29kZSA9PiBjb2RlID09PSBwYXR0ZXJuKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB2ZXJpZnkgZW5kIHdoaXRlIHNwYWNlXG4gICAgICAgIGlmICghdGhpcy5fdmVyaWZ5V2hpdGVzcGFjZShzdGFydC5zdGFydENvdW50ZXIsIG5leHRTdGFydCAtIDgpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5fdmFsaWRhdGVSZXN1bHQocmVzdWx0LCBzdGFydC5zdGFydENvdW50ZXIpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIG5leHRTdGFydCA9IG5leHRTdGFydCA+IHRoaXMuX2NvdW50ZXJzLmxlbmd0aCA/IHRoaXMuX2NvdW50ZXJzLmxlbmd0aCA6IG5leHRTdGFydDtcbiAgICAgICAgY29uc3QgZW5kID0gc3RhcnQuc3RhcnQgKyB0aGlzLl9zdW1Db3VudGVycyhzdGFydC5zdGFydENvdW50ZXIsIG5leHRTdGFydCAtIDgpO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb2RlOiByZXN1bHQuam9pbignJyksXG4gICAgICAgICAgICBzdGFydDogc3RhcnQuc3RhcnQsXG4gICAgICAgICAgICBlbmQsXG4gICAgICAgICAgICBzdGFydEluZm86IHN0YXJ0LFxuICAgICAgICAgICAgZGVjb2RlZENvZGVzOiByZXN1bHRcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBfdmVyaWZ5V2hpdGVzcGFjZShzdGFydENvdW50ZXIsIGVuZENvdW50ZXIpIHtcbiAgICAgICAgaWYgKChzdGFydENvdW50ZXIgLSAxIDw9IDApXG4gICAgICAgICAgICB8fCB0aGlzLl9jb3VudGVyc1tzdGFydENvdW50ZXIgLSAxXSA+PSAodGhpcy5fY2FsY3VsYXRlUGF0dGVybkxlbmd0aChzdGFydENvdW50ZXIpIC8gMi4wKSkge1xuICAgICAgICAgICAgaWYgKChlbmRDb3VudGVyICsgOCA+PSB0aGlzLl9jb3VudGVycy5sZW5ndGgpXG4gICAgICAgICAgICAgICAgfHwgdGhpcy5fY291bnRlcnNbZW5kQ291bnRlciArIDddID49ICh0aGlzLl9jYWxjdWxhdGVQYXR0ZXJuTGVuZ3RoKGVuZENvdW50ZXIpIC8gMi4wKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIF9jYWxjdWxhdGVQYXR0ZXJuTGVuZ3RoKG9mZnNldCkge1xuICAgICAgICBsZXQgc3VtID0gMDtcblxuICAgICAgICBmb3IgKGxldCBpID0gb2Zmc2V0OyBpIDwgb2Zmc2V0ICsgNzsgaSsrKSB7XG4gICAgICAgICAgICBzdW0gKz0gdGhpcy5fY291bnRlcnNbaV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VtO1xuICAgIH1cblxuICAgIF90aHJlc2hvbGRSZXN1bHRQYXR0ZXJuKHJlc3VsdCwgc3RhcnRDb3VudGVyKSB7XG4gICAgICAgIGNvbnN0IGNhdGVnb3JpemF0aW9uID0ge1xuICAgICAgICAgICAgc3BhY2U6IHtcbiAgICAgICAgICAgICAgICBuYXJyb3c6IHsgc2l6ZTogMCwgY291bnRzOiAwLCBtaW46IDAsIG1heDogTnVtYmVyLk1BWF9WQUxVRSB9LFxuICAgICAgICAgICAgICAgIHdpZGU6IHsgc2l6ZTogMCwgY291bnRzOiAwLCBtaW46IDAsIG1heDogTnVtYmVyLk1BWF9WQUxVRSB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmFyOiB7XG4gICAgICAgICAgICAgICAgbmFycm93OiB7IHNpemU6IDAsIGNvdW50czogMCwgbWluOiAwLCBtYXg6IE51bWJlci5NQVhfVkFMVUUgfSxcbiAgICAgICAgICAgICAgICB3aWRlOiB7IHNpemU6IDAsIGNvdW50czogMCwgbWluOiAwLCBtYXg6IE51bWJlci5NQVhfVkFMVUUgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBsZXQgcG9zID0gc3RhcnRDb3VudGVyO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzdWx0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcGF0dGVybiA9IHRoaXMuX2NoYXJUb1BhdHRlcm4ocmVzdWx0W2ldKTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDY7IGogPj0gMDsgai0tKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qga2luZCA9IChqICYgMSkgPT09IDIgPyBjYXRlZ29yaXphdGlvbi5iYXIgOiBjYXRlZ29yaXphdGlvbi5zcGFjZTtcbiAgICAgICAgICAgICAgICBjb25zdCBjYXQgPSAocGF0dGVybiAmIDEpID09PSAxID8ga2luZC53aWRlIDoga2luZC5uYXJyb3c7XG4gICAgICAgICAgICAgICAgY2F0LnNpemUgKz0gdGhpcy5fY291bnRlcnNbcG9zICsgal07XG4gICAgICAgICAgICAgICAgY2F0LmNvdW50cysrO1xuICAgICAgICAgICAgICAgIHBhdHRlcm4gPj49IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwb3MgKz0gODtcbiAgICAgICAgfVxuXG4gICAgICAgIFsnc3BhY2UnLCAnYmFyJ10uZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgY29uc3Qga2luZCA9IGNhdGVnb3JpemF0aW9uW2tleV07XG4gICAgICAgICAgICBraW5kLndpZGUubWluID0gTWF0aC5mbG9vcigoa2luZC5uYXJyb3cuc2l6ZSAvIGtpbmQubmFycm93LmNvdW50cyArIGtpbmQud2lkZS5zaXplIC8ga2luZC53aWRlLmNvdW50cykgLyAyKTtcbiAgICAgICAgICAgIGtpbmQubmFycm93Lm1heCA9IE1hdGguY2VpbChraW5kLndpZGUubWluKTtcbiAgICAgICAgICAgIGtpbmQud2lkZS5tYXggPSBNYXRoLmNlaWwoKGtpbmQud2lkZS5zaXplICogTUFYX0FDQ0VQVEFCTEUgKyBQQURESU5HKSAvIGtpbmQud2lkZS5jb3VudHMpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gY2F0ZWdvcml6YXRpb247XG4gICAgfVxuXG4gICAgX2NoYXJUb1BhdHRlcm4oY2hhcikge1xuICAgICAgICBjb25zdCBjaGFyQ29kZSA9IGNoYXIuY2hhckNvZGVBdCgwKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IEFMUEhBQkVULmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoQUxQSEFCRVRbaV0gPT09IGNoYXJDb2RlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIENIQVJBQ1RFUl9FTkNPRElOR1NbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gMHgwO1xuICAgIH1cblxuICAgIF92YWxpZGF0ZVJlc3VsdChyZXN1bHQsIHN0YXJ0Q291bnRlcikge1xuICAgICAgICBjb25zdCB0aHJlc2hvbGRzID0gdGhpcy5fdGhyZXNob2xkUmVzdWx0UGF0dGVybihyZXN1bHQsIHN0YXJ0Q291bnRlcik7XG4gICAgICAgIGxldCBwb3MgPSBzdGFydENvdW50ZXI7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBwYXR0ZXJuID0gdGhpcy5fY2hhclRvUGF0dGVybihyZXN1bHRbaV0pO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gNjsgaiA+PSAwOyBqLS0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBraW5kID0gKGogJiAxKSA9PT0gMCA/IHRocmVzaG9sZHMuYmFyIDogdGhyZXNob2xkcy5zcGFjZTtcbiAgICAgICAgICAgICAgICBjb25zdCBjYXQgPSAocGF0dGVybiAmIDEpID09PSAxID8ga2luZC53aWRlIDoga2luZC5uYXJyb3c7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2l6ZSA9IHRoaXMuX2NvdW50ZXJzW3BvcyArIGpdO1xuICAgICAgICAgICAgICAgIGlmIChzaXplIDwgY2F0Lm1pbiB8fCBzaXplID4gY2F0Lm1heCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdHRlcm4gPj49IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwb3MgKz0gODtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIF9wYXR0ZXJuVG9DaGFyKHBhdHRlcm4pIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBDSEFSQUNURVJfRU5DT0RJTkdTLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoQ0hBUkFDVEVSX0VOQ09ESU5HU1tpXSA9PT0gcGF0dGVybikge1xuICAgICAgICAgICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKEFMUEhBQkVUW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG5cbiAgICBfY29tcHV0ZUFsdGVybmF0aW5nVGhyZXNob2xkKG9mZnNldCwgZW5kKSB7XG4gICAgICAgIGxldCBtaW4gPSBOdW1iZXIuTUFYX1ZBTFVFO1xuICAgICAgICBsZXQgbWF4ID0gMDtcblxuICAgICAgICBmb3IgKGxldCBpID0gb2Zmc2V0OyBpIDwgZW5kOyBpICs9IDIpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvdW50ZXIgPSB0aGlzLl9jb3VudGVyc1tpXTtcbiAgICAgICAgICAgIGlmIChjb3VudGVyID4gbWF4KSB7XG4gICAgICAgICAgICAgICAgbWF4ID0gY291bnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb3VudGVyIDwgbWluKSB7XG4gICAgICAgICAgICAgICAgbWluID0gY291bnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoKG1pbiArIG1heCkgLyAyLjApIHwgMDtcbiAgICB9XG5cbiAgICBfdG9QYXR0ZXJuKG9mZnNldCkge1xuICAgICAgICBjb25zdCBudW1Db3VudGVycyA9IDc7XG4gICAgICAgIGNvbnN0IGVuZCA9IG9mZnNldCArIG51bUNvdW50ZXJzO1xuXG4gICAgICAgIGlmIChlbmQgPiB0aGlzLl9jb3VudGVycy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGJhclRocmVzaG9sZCA9IHRoaXMuX2NvbXB1dGVBbHRlcm5hdGluZ1RocmVzaG9sZChvZmZzZXQsIGVuZCk7XG4gICAgICAgIGNvbnN0IHNwYWNlVGhyZXNob2xkID0gdGhpcy5fY29tcHV0ZUFsdGVybmF0aW5nVGhyZXNob2xkKG9mZnNldCArIDEsIGVuZCk7XG4gICAgICAgIGxldCBiaXRtYXNrID0gMSA8PCAobnVtQ291bnRlcnMgLSAxKTtcbiAgICAgICAgbGV0IHBhdHRlcm4gPSAwO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtQ291bnRlcnM7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgdGhyZXNob2xkID0gKGkgJiAxKSA9PT0gMCA/IGJhclRocmVzaG9sZCA6IHNwYWNlVGhyZXNob2xkO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2NvdW50ZXJzW29mZnNldCArIGldID4gdGhyZXNob2xkKSB7XG4gICAgICAgICAgICAgICAgcGF0dGVybiB8PSBiaXRtYXNrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYml0bWFzayA+Pj0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYXR0ZXJuO1xuICAgIH1cblxuICAgIF9zdW1Db3VudGVycyhzdGFydCwgZW5kKSB7XG4gICAgICAgIGxldCBzdW0gPSAwO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgICAgICAgICBzdW0gKz0gdGhpcy5fY291bnRlcnNbaV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VtO1xuICAgIH1cblxuICAgIF9maW5kU3RhcnQoKSB7XG4gICAgICAgIGxldCBzdGFydCA9IHRoaXMuX25leHRVbnNldCh0aGlzLl9yb3cpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdGhpcy5fY291bnRlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHBhdHRlcm4gPSB0aGlzLl90b1BhdHRlcm4oaSk7XG4gICAgICAgICAgICBpZiAocGF0dGVybiAhPT0gLTEgJiYgU1RBUlRfRU5ELnNvbWUoY29kZSA9PiBjb2RlID09PSBwYXR0ZXJuKSkge1xuICAgICAgICAgICAgICAgIC8vIFRPRE86IExvb2sgZm9yIHdoaXRlc3BhY2UgYWhlYWRcbiAgICAgICAgICAgICAgICBzdGFydCArPSB0aGlzLl9zdW1Db3VudGVycygwLCBpKTtcbiAgICAgICAgICAgICAgICBjb25zdCBlbmQgPSBzdGFydCArIHRoaXMuX3N1bUNvdW50ZXJzKGksIGkgKyA4KTtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBzdGFydCxcbiAgICAgICAgICAgICAgICAgICAgZW5kLFxuICAgICAgICAgICAgICAgICAgICBzdGFydENvdW50ZXI6IGksXG4gICAgICAgICAgICAgICAgICAgIGVuZENvdW50ZXI6IGkgKyA4XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEJhcmNvZGVSZWFkZXIgfSBmcm9tICcuL2JhcmNvZGVfcmVhZGVyJztcblxuY29uc3QgQ09ERV9TSElGVCA9IDk4O1xuY29uc3QgQ09ERV9DID0gOTk7XG5jb25zdCBDT0RFX0IgPSAxMDA7XG5jb25zdCBDT0RFX0EgPSAxMDE7XG5jb25zdCBTVEFSVF9DT0RFX0EgPSAxMDM7XG5jb25zdCBTVEFSVF9DT0RFX0IgPSAxMDQ7XG5jb25zdCBTVEFSVF9DT0RFX0MgPSAxMDU7XG5jb25zdCBTVE9QX0NPREUgPSAxMDY7XG5jb25zdCBDT0RFX1BBVFRFUk4gPSBbXG4gICAgWzIsIDEsIDIsIDIsIDIsIDJdLFxuICAgIFsyLCAyLCAyLCAxLCAyLCAyXSxcbiAgICBbMiwgMiwgMiwgMiwgMiwgMV0sXG4gICAgWzEsIDIsIDEsIDIsIDIsIDNdLFxuICAgIFsxLCAyLCAxLCAzLCAyLCAyXSxcbiAgICBbMSwgMywgMSwgMiwgMiwgMl0sXG4gICAgWzEsIDIsIDIsIDIsIDEsIDNdLFxuICAgIFsxLCAyLCAyLCAzLCAxLCAyXSxcbiAgICBbMSwgMywgMiwgMiwgMSwgMl0sXG4gICAgWzIsIDIsIDEsIDIsIDEsIDNdLFxuICAgIFsyLCAyLCAxLCAzLCAxLCAyXSxcbiAgICBbMiwgMywgMSwgMiwgMSwgMl0sXG4gICAgWzEsIDEsIDIsIDIsIDMsIDJdLFxuICAgIFsxLCAyLCAyLCAxLCAzLCAyXSxcbiAgICBbMSwgMiwgMiwgMiwgMywgMV0sXG4gICAgWzEsIDEsIDMsIDIsIDIsIDJdLFxuICAgIFsxLCAyLCAzLCAxLCAyLCAyXSxcbiAgICBbMSwgMiwgMywgMiwgMiwgMV0sXG4gICAgWzIsIDIsIDMsIDIsIDEsIDFdLFxuICAgIFsyLCAyLCAxLCAxLCAzLCAyXSxcbiAgICBbMiwgMiwgMSwgMiwgMywgMV0sXG4gICAgWzIsIDEsIDMsIDIsIDEsIDJdLFxuICAgIFsyLCAyLCAzLCAxLCAxLCAyXSxcbiAgICBbMywgMSwgMiwgMSwgMywgMV0sXG4gICAgWzMsIDEsIDEsIDIsIDIsIDJdLFxuICAgIFszLCAyLCAxLCAxLCAyLCAyXSxcbiAgICBbMywgMiwgMSwgMiwgMiwgMV0sXG4gICAgWzMsIDEsIDIsIDIsIDEsIDJdLFxuICAgIFszLCAyLCAyLCAxLCAxLCAyXSxcbiAgICBbMywgMiwgMiwgMiwgMSwgMV0sXG4gICAgWzIsIDEsIDIsIDEsIDIsIDNdLFxuICAgIFsyLCAxLCAyLCAzLCAyLCAxXSxcbiAgICBbMiwgMywgMiwgMSwgMiwgMV0sXG4gICAgWzEsIDEsIDEsIDMsIDIsIDNdLFxuICAgIFsxLCAzLCAxLCAxLCAyLCAzXSxcbiAgICBbMSwgMywgMSwgMywgMiwgMV0sXG4gICAgWzEsIDEsIDIsIDMsIDEsIDNdLFxuICAgIFsxLCAzLCAyLCAxLCAxLCAzXSxcbiAgICBbMSwgMywgMiwgMywgMSwgMV0sXG4gICAgWzIsIDEsIDEsIDMsIDEsIDNdLFxuICAgIFsyLCAzLCAxLCAxLCAxLCAzXSxcbiAgICBbMiwgMywgMSwgMywgMSwgMV0sXG4gICAgWzEsIDEsIDIsIDEsIDMsIDNdLFxuICAgIFsxLCAxLCAyLCAzLCAzLCAxXSxcbiAgICBbMSwgMywgMiwgMSwgMywgMV0sXG4gICAgWzEsIDEsIDMsIDEsIDIsIDNdLFxuICAgIFsxLCAxLCAzLCAzLCAyLCAxXSxcbiAgICBbMSwgMywgMywgMSwgMiwgMV0sXG4gICAgWzMsIDEsIDMsIDEsIDIsIDFdLFxuICAgIFsyLCAxLCAxLCAzLCAzLCAxXSxcbiAgICBbMiwgMywgMSwgMSwgMywgMV0sXG4gICAgWzIsIDEsIDMsIDEsIDEsIDNdLFxuICAgIFsyLCAxLCAzLCAzLCAxLCAxXSxcbiAgICBbMiwgMSwgMywgMSwgMywgMV0sXG4gICAgWzMsIDEsIDEsIDEsIDIsIDNdLFxuICAgIFszLCAxLCAxLCAzLCAyLCAxXSxcbiAgICBbMywgMywgMSwgMSwgMiwgMV0sXG4gICAgWzMsIDEsIDIsIDEsIDEsIDNdLFxuICAgIFszLCAxLCAyLCAzLCAxLCAxXSxcbiAgICBbMywgMywgMiwgMSwgMSwgMV0sXG4gICAgWzMsIDEsIDQsIDEsIDEsIDFdLFxuICAgIFsyLCAyLCAxLCA0LCAxLCAxXSxcbiAgICBbNCwgMywgMSwgMSwgMSwgMV0sXG4gICAgWzEsIDEsIDEsIDIsIDIsIDRdLFxuICAgIFsxLCAxLCAxLCA0LCAyLCAyXSxcbiAgICBbMSwgMiwgMSwgMSwgMiwgNF0sXG4gICAgWzEsIDIsIDEsIDQsIDIsIDFdLFxuICAgIFsxLCA0LCAxLCAxLCAyLCAyXSxcbiAgICBbMSwgNCwgMSwgMiwgMiwgMV0sXG4gICAgWzEsIDEsIDIsIDIsIDEsIDRdLFxuICAgIFsxLCAxLCAyLCA0LCAxLCAyXSxcbiAgICBbMSwgMiwgMiwgMSwgMSwgNF0sXG4gICAgWzEsIDIsIDIsIDQsIDEsIDFdLFxuICAgIFsxLCA0LCAyLCAxLCAxLCAyXSxcbiAgICBbMSwgNCwgMiwgMiwgMSwgMV0sXG4gICAgWzIsIDQsIDEsIDIsIDEsIDFdLFxuICAgIFsyLCAyLCAxLCAxLCAxLCA0XSxcbiAgICBbNCwgMSwgMywgMSwgMSwgMV0sXG4gICAgWzIsIDQsIDEsIDEsIDEsIDJdLFxuICAgIFsxLCAzLCA0LCAxLCAxLCAxXSxcbiAgICBbMSwgMSwgMSwgMiwgNCwgMl0sXG4gICAgWzEsIDIsIDEsIDEsIDQsIDJdLFxuICAgIFsxLCAyLCAxLCAyLCA0LCAxXSxcbiAgICBbMSwgMSwgNCwgMiwgMSwgMl0sXG4gICAgWzEsIDIsIDQsIDEsIDEsIDJdLFxuICAgIFsxLCAyLCA0LCAyLCAxLCAxXSxcbiAgICBbNCwgMSwgMSwgMiwgMSwgMl0sXG4gICAgWzQsIDIsIDEsIDEsIDEsIDJdLFxuICAgIFs0LCAyLCAxLCAyLCAxLCAxXSxcbiAgICBbMiwgMSwgMiwgMSwgNCwgMV0sXG4gICAgWzIsIDEsIDQsIDEsIDIsIDFdLFxuICAgIFs0LCAxLCAyLCAxLCAyLCAxXSxcbiAgICBbMSwgMSwgMSwgMSwgNCwgM10sXG4gICAgWzEsIDEsIDEsIDMsIDQsIDFdLFxuICAgIFsxLCAzLCAxLCAxLCA0LCAxXSxcbiAgICBbMSwgMSwgNCwgMSwgMSwgM10sXG4gICAgWzEsIDEsIDQsIDMsIDEsIDFdLFxuICAgIFs0LCAxLCAxLCAxLCAxLCAzXSxcbiAgICBbNCwgMSwgMSwgMywgMSwgMV0sXG4gICAgWzEsIDEsIDMsIDEsIDQsIDFdLFxuICAgIFsxLCAxLCA0LCAxLCAzLCAxXSxcbiAgICBbMywgMSwgMSwgMSwgNCwgMV0sXG4gICAgWzQsIDEsIDEsIDEsIDMsIDFdLFxuICAgIFsyLCAxLCAxLCA0LCAxLCAyXSxcbiAgICBbMiwgMSwgMSwgMiwgMSwgNF0sXG4gICAgWzIsIDEsIDEsIDIsIDMsIDJdLFxuICAgIFsyLCAzLCAzLCAxLCAxLCAxLCAyXVxuXTtcbmNvbnN0IE1PRFVMRV9JTkRJQ0VTID0geyBiYXI6IFswLCAyLCA0XSwgc3BhY2U6IFsxLCAzLCA1XSB9O1xuXG5leHBvcnQgY2xhc3MgQ29kZTEyOFJlYWRlciBleHRlbmRzIEJhcmNvZGVSZWFkZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuX2Zvcm1hdCA9ICdjb2RlXzEyOCc7XG4gICAgICAgIHRoaXMuX3NpbmdsZUNvZGVFcnJvciA9IDAuNjQ7XG4gICAgICAgIHRoaXMuX2F2ZXJhZ2VDb2RlRXJyb3IgPSAwLjMwO1xuICAgIH1cblxuICAgIF9kZWNvZGVDb2RlKHN0YXJ0LCBjb3JyZWN0aW9uKSB7XG4gICAgICAgIGNvbnN0IGNvdW50ZXIgPSBbMCwgMCwgMCwgMCwgMCwgMF07XG4gICAgICAgIGNvbnN0IG9mZnNldCA9IHN0YXJ0O1xuICAgICAgICBjb25zdCBiZXN0TWF0Y2ggPSB7XG4gICAgICAgICAgICBlcnJvcjogTnVtYmVyLk1BWF9WQUxVRSxcbiAgICAgICAgICAgIGNvZGU6IC0xLFxuICAgICAgICAgICAgc3RhcnQ6IHN0YXJ0LFxuICAgICAgICAgICAgZW5kOiBzdGFydCxcbiAgICAgICAgICAgIGNvcnJlY3Rpb246IHtcbiAgICAgICAgICAgICAgICBiYXI6IDEsXG4gICAgICAgICAgICAgICAgc3BhY2U6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgZXBzaWxvbiA9IHRoaXMuQVZFUkFHRV9DT0RFX0VSUk9SO1xuICAgICAgICBsZXQgaXNXaGl0ZSA9ICF0aGlzLl9yb3dbb2Zmc2V0XTtcbiAgICAgICAgbGV0IGNvdW50ZXJQb3MgPSAwO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSBvZmZzZXQ7IGkgPCB0aGlzLl9yb3cubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9yb3dbaV0gXiBpc1doaXRlKSB7XG4gICAgICAgICAgICAgICAgY291bnRlcltjb3VudGVyUG9zXSsrO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoY291bnRlclBvcyA9PT0gY291bnRlci5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3JyZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jb3JyZWN0KGNvdW50ZXIsIGNvcnJlY3Rpb24pO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgY29kZSA9IDA7IGNvZGUgPCBDT0RFX1BBVFRFUk4ubGVuZ3RoOyBjb2RlKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yID0gdGhpcy5fbWF0Y2hQYXR0ZXJuKGNvdW50ZXIsIENPREVfUEFUVEVSTltjb2RlXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IgPCBiZXN0TWF0Y2guZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZXN0TWF0Y2guY29kZSA9IGNvZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVzdE1hdGNoLmVycm9yID0gZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBiZXN0TWF0Y2guZW5kID0gaTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoYmVzdE1hdGNoLmNvZGUgPT09IC0xIHx8IGJlc3RNYXRjaC5lcnJvciA+IGVwc2lsb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXhwZWN0ZWQgPSBDT0RFX1BBVFRFUk5bYmVzdE1hdGNoLmNvZGVdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXhwZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlc3RNYXRjaC5jb3JyZWN0aW9uLmJhciA9IHRoaXMuY2FsY3VsYXRlQ29ycmVjdGlvbihleHBlY3RlZCwgY291bnRlciwgTU9EVUxFX0lORElDRVMuYmFyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlc3RNYXRjaC5jb3JyZWN0aW9uLnNwYWNlID0gdGhpcy5jYWxjdWxhdGVDb3JyZWN0aW9uKGV4cGVjdGVkLCBjb3VudGVyLCBNT0RVTEVfSU5ESUNFUy5zcGFjZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYmVzdE1hdGNoO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXJQb3MrKztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb3VudGVyW2NvdW50ZXJQb3NdID0gMTtcbiAgICAgICAgICAgICAgICBpc1doaXRlID0gIWlzV2hpdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBfY29ycmVjdChjb3VudGVyLCBjb3JyZWN0aW9uKSB7XG4gICAgICAgIHRoaXMuX2NvcnJlY3RCYXJzKGNvdW50ZXIsIGNvcnJlY3Rpb24uYmFyLCBNT0RVTEVfSU5ESUNFUy5iYXIpO1xuICAgICAgICB0aGlzLl9jb3JyZWN0QmFycyhjb3VudGVyLCBjb3JyZWN0aW9uLnNwYWNlLCBNT0RVTEVfSU5ESUNFUy5zcGFjZSk7XG4gICAgfVxuXG4gICAgX2ZpbmRTdGFydCgpIHtcbiAgICAgICAgY29uc3QgY291bnRlciA9IFswLCAwLCAwLCAwLCAwLCAwXTtcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gdGhpcy5fbmV4dFNldCh0aGlzLl9yb3cpO1xuICAgICAgICBjb25zdCBiZXN0TWF0Y2ggPSB7XG4gICAgICAgICAgICBlcnJvcjogTnVtYmVyLk1BWF9WQUxVRSxcbiAgICAgICAgICAgIGNvZGU6IC0xLFxuICAgICAgICAgICAgc3RhcnQ6IDAsXG4gICAgICAgICAgICBlbmQ6IDAsXG4gICAgICAgICAgICBjb3JyZWN0aW9uOiB7XG4gICAgICAgICAgICAgICAgYmFyOiAxLFxuICAgICAgICAgICAgICAgIHNwYWNlOiAxXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGVwc2lsb24gPSB0aGlzLkFWRVJBR0VfQ09ERV9FUlJPUjtcbiAgICAgICAgbGV0IGlzV2hpdGUgPSBmYWxzZTtcbiAgICAgICAgbGV0IGNvdW50ZXJQb3MgPSAwO1xuICAgICAgICBsZXQgc3VtO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSBvZmZzZXQ7IGkgPCB0aGlzLl9yb3cubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9yb3dbaV0gXiBpc1doaXRlKSB7XG4gICAgICAgICAgICAgICAgY291bnRlcltjb3VudGVyUG9zXSsrO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoY291bnRlclBvcyA9PT0gY291bnRlci5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1bSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY291bnRlci5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3VtICs9IGNvdW50ZXJbal07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgY29kZSA9IFNUQVJUX0NPREVfQTsgY29kZSA8PSBTVEFSVF9DT0RFX0M7IGNvZGUrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXJyb3IgPSB0aGlzLl9tYXRjaFBhdHRlcm4oY291bnRlciwgQ09ERV9QQVRURVJOW2NvZGVdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnJvciA8IGJlc3RNYXRjaC5lcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlc3RNYXRjaC5jb2RlID0gY29kZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZXN0TWF0Y2guZXJyb3IgPSBlcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoYmVzdE1hdGNoLmVycm9yIDwgZXBzaWxvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmVzdE1hdGNoLnN0YXJ0ID0gaSAtIHN1bTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlc3RNYXRjaC5lbmQgPSBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmVzdE1hdGNoLmNvcnJlY3Rpb24uYmFyID0gdGhpcy5jYWxjdWxhdGVDb3JyZWN0aW9uKENPREVfUEFUVEVSTltiZXN0TWF0Y2guY29kZV0sIGNvdW50ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTU9EVUxFX0lORElDRVMuYmFyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlc3RNYXRjaC5jb3JyZWN0aW9uLnNwYWNlID0gdGhpcy5jYWxjdWxhdGVDb3JyZWN0aW9uKENPREVfUEFUVEVSTltiZXN0TWF0Y2guY29kZV0sIGNvdW50ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTU9EVUxFX0lORElDRVMuc3BhY2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJlc3RNYXRjaDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgNDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVyW2pdID0gY291bnRlcltqICsgMl07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY291bnRlcls0XSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXJbNV0gPSAwO1xuICAgICAgICAgICAgICAgICAgICBjb3VudGVyUG9zLS07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnRlclBvcysrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb3VudGVyW2NvdW50ZXJQb3NdID0gMTtcbiAgICAgICAgICAgICAgICBpc1doaXRlID0gIWlzV2hpdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBfZGVjb2RlKCkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICAgICAgY29uc3Qgc3RhcnRJbmZvID0gdGhpcy5fZmluZFN0YXJ0KCk7XG4gICAgICAgIGxldCBjb2RlID0gbnVsbDtcbiAgICAgICAgbGV0IGRvbmUgPSBmYWxzZTtcbiAgICAgICAgbGV0IG11bHRpcGxpZXIgPSAwO1xuICAgICAgICBsZXQgY2hlY2tzdW0gPSAwO1xuICAgICAgICBsZXQgY29kZXNldDtcbiAgICAgICAgbGV0IHJhd1Jlc3VsdCA9IFtdO1xuICAgICAgICBsZXQgZGVjb2RlZENvZGVzID0gW107XG4gICAgICAgIGxldCBzaGlmdE5leHQgPSBmYWxzZTtcbiAgICAgICAgbGV0IHVuc2hpZnQ7XG4gICAgICAgIGxldCByZW1vdmVMYXN0Q2hhcmFjdGVyID0gdHJ1ZTtcblxuICAgICAgICBpZiAoc3RhcnRJbmZvID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb2RlID0ge1xuICAgICAgICAgICAgY29kZTogc3RhcnRJbmZvLmNvZGUsXG4gICAgICAgICAgICBzdGFydDogc3RhcnRJbmZvLnN0YXJ0LFxuICAgICAgICAgICAgZW5kOiBzdGFydEluZm8uZW5kLFxuICAgICAgICAgICAgY29ycmVjdGlvbjoge1xuICAgICAgICAgICAgICAgIGJhcjogc3RhcnRJbmZvLmNvcnJlY3Rpb24uYmFyLFxuICAgICAgICAgICAgICAgIHNwYWNlOiBzdGFydEluZm8uY29ycmVjdGlvbi5zcGFjZVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBkZWNvZGVkQ29kZXMucHVzaChjb2RlKTtcbiAgICAgICAgY2hlY2tzdW0gPSBjb2RlLmNvZGU7XG5cbiAgICAgICAgc3dpdGNoIChjb2RlLmNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgU1RBUlRfQ09ERV9BOlxuICAgICAgICAgICAgICAgIGNvZGVzZXQgPSBDT0RFX0E7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFNUQVJUX0NPREVfQjpcbiAgICAgICAgICAgICAgICBjb2Rlc2V0ID0gQ09ERV9CO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBTVEFSVF9DT0RFX0M6XG4gICAgICAgICAgICAgICAgY29kZXNldCA9IENPREVfQztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICB3aGlsZSAoIWRvbmUpIHtcbiAgICAgICAgICAgIHVuc2hpZnQgPSBzaGlmdE5leHQ7XG4gICAgICAgICAgICBzaGlmdE5leHQgPSBmYWxzZTtcbiAgICAgICAgICAgIGNvZGUgPSB0aGlzLl9kZWNvZGVDb2RlKGNvZGUuZW5kLCBjb2RlLmNvcnJlY3Rpb24pO1xuICAgICAgICAgICAgaWYgKGNvZGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAoY29kZS5jb2RlICE9PSBTVE9QX0NPREUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlTGFzdENoYXJhY3RlciA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGNvZGUuY29kZSAhPT0gU1RPUF9DT0RFKSB7XG4gICAgICAgICAgICAgICAgICAgIHJhd1Jlc3VsdC5wdXNoKGNvZGUuY29kZSk7XG4gICAgICAgICAgICAgICAgICAgIG11bHRpcGxpZXIrKztcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tzdW0gKz0gbXVsdGlwbGllciAqIGNvZGUuY29kZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGVjb2RlZENvZGVzLnB1c2goY29kZSk7XG5cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGNvZGVzZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBDT0RFX0E6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2RlLmNvZGUgPCA2NCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUoMzIgKyBjb2RlLmNvZGUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY29kZS5jb2RlIDwgOTYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGUuY29kZSAtIDY0KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2RlLmNvZGUgIT09IFNUT1BfQ09ERSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVMYXN0Q2hhcmFjdGVyID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoY29kZS5jb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgQ09ERV9TSElGVDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaWZ0TmV4dCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2Rlc2V0ID0gQ09ERV9CO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgQ09ERV9COlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29kZXNldCA9IENPREVfQjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIENPREVfQzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvZGVzZXQgPSBDT0RFX0M7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBTVE9QX0NPREU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb25lID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgQ09ERV9COiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29kZS5jb2RlIDwgOTYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKDMyICsgY29kZS5jb2RlKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2RlLmNvZGUgIT09IFNUT1BfQ09ERSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVMYXN0Q2hhcmFjdGVyID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoY29kZS5jb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgQ09ERV9TSElGVDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaWZ0TmV4dCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2Rlc2V0ID0gQ09ERV9BO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgQ09ERV9BOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29kZXNldCA9IENPREVfQTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIENPREVfQzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvZGVzZXQgPSBDT0RFX0M7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBTVE9QX0NPREU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb25lID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgQ09ERV9DOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29kZS5jb2RlIDwgMTAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goY29kZS5jb2RlIDwgMTAgPyAnMCcgKyBjb2RlLmNvZGUgOiBjb2RlLmNvZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29kZS5jb2RlICE9PSBTVE9QX0NPREUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlTGFzdENoYXJhY3RlciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGNvZGUuY29kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIENPREVfQTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvZGVzZXQgPSBDT0RFX0E7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBDT0RFX0I6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2Rlc2V0ID0gQ09ERV9CO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgU1RPUF9DT0RFOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9uZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZG9uZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodW5zaGlmdCkge1xuICAgICAgICAgICAgICAgIGNvZGVzZXQgPSBjb2Rlc2V0ID09PSBDT0RFX0EgPyBDT0RFX0IgOiBDT0RFX0E7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29kZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb2RlLmVuZCA9IHRoaXMuX25leHRVbnNldCh0aGlzLl9yb3csIGNvZGUuZW5kKTtcbiAgICAgICAgaWYgKCF0aGlzLl92ZXJpZnlUcmFpbGluZ1doaXRlc3BhY2UoY29kZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY2hlY2tzdW0gLT0gbXVsdGlwbGllciAqIHJhd1Jlc3VsdFtyYXdSZXN1bHQubGVuZ3RoIC0gMV07XG4gICAgICAgIGlmIChjaGVja3N1bSAlIDEwMyAhPT0gcmF3UmVzdWx0W3Jhd1Jlc3VsdC5sZW5ndGggLSAxXSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXJlc3VsdC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcmVtb3ZlIGxhc3QgY29kZSBmcm9tIHJlc3VsdCAoY2hlY2tzdW0pXG4gICAgICAgIGlmIChyZW1vdmVMYXN0Q2hhcmFjdGVyKSB7XG4gICAgICAgICAgICByZXN1bHQuc3BsaWNlKHJlc3VsdC5sZW5ndGggLSAxLCAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb2RlOiByZXN1bHQuam9pbignJyksXG4gICAgICAgICAgICBzdGFydDogc3RhcnRJbmZvLnN0YXJ0LFxuICAgICAgICAgICAgZW5kOiBjb2RlLmVuZCxcbiAgICAgICAgICAgIGNvZGVzZXQsXG4gICAgICAgICAgICBzdGFydEluZm8sXG4gICAgICAgICAgICBkZWNvZGVkQ29kZXMsXG4gICAgICAgICAgICBlbmRJbmZvOiBjb2RlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgX3ZlcmlmeVRyYWlsaW5nV2hpdGVzcGFjZShlbmRJbmZvKSB7XG4gICAgICAgIGNvbnN0IHRyYWlsaW5nV2hpdGVzcGFjZUVuZCA9IGVuZEluZm8uZW5kICsgKGVuZEluZm8uZW5kIC0gZW5kSW5mby5zdGFydCkgLyAyO1xuXG4gICAgICAgIGlmICh0cmFpbGluZ1doaXRlc3BhY2VFbmQgPCB0aGlzLl9yb3cubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fbWF0Y2hSYW5nZShlbmRJbmZvLmVuZCwgdHJhaWxpbmdXaGl0ZXNwYWNlRW5kLCAwKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbmRJbmZvO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY2FsY3VsYXRlQ29ycmVjdGlvbihleHBlY3RlZCwgbm9ybWFsaXplZCwgaW5kaWNlcykge1xuICAgICAgICBsZXQgc3VtTm9ybWFsaXplZCA9IDA7XG4gICAgICAgIGxldCBzdW1FeHBlY3RlZCA9IDA7XG5cbiAgICAgICAgZm9yIChsZXQgbGVuZ3RoID0gaW5kaWNlcy5sZW5ndGg7IGxlbmd0aC0tOykge1xuICAgICAgICAgICAgc3VtRXhwZWN0ZWQgKz0gZXhwZWN0ZWRbaW5kaWNlc1tsZW5ndGhdXTtcbiAgICAgICAgICAgIHN1bU5vcm1hbGl6ZWQgKz0gbm9ybWFsaXplZFtpbmRpY2VzW2xlbmd0aF1dO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1bUV4cGVjdGVkIC8gc3VtTm9ybWFsaXplZDtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBCYXJjb2RlUmVhZGVyIH0gZnJvbSAnLi9iYXJjb2RlX3JlYWRlcic7XG5cbmNvbnN0IEFTVEVSSVNLID0gMHgwOTQ7XG5jb25zdCBBTFBIQUJFVEhfU1RSSU5HID0gJzAxMjM0NTY3ODlBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWi0uICokLyslJztcbmNvbnN0IEFMUEhBQkVUID0gWy4uLkFMUEhBQkVUSF9TVFJJTkddLm1hcChjaGFyID0+IGNoYXIuY2hhckNvZGVBdCgwKSk7XG4vLyBjb25zdCBBTFBIQUJFVCA9IFs0OCwgNDksIDUwLCA1MSwgNTIsIDUzLCA1NCwgNTUsIDU2LCA1NywgNjUsIDY2LCA2NywgNjgsIDY5LCA3MCwgNzEsIDcyLCA3MywgNzQsIDc1LCA3NiwgNzcsIDc4LFxuLy8gICAgIDc5LCA4MCwgODEsIDgyLCA4MywgODQsIDg1LCA4NiwgODcsIDg4LCA4OSwgOTAsIDQ1LCA0NiwgMzIsIDQyLCAzNiwgNDcsIDQzLCAzN107XG5jb25zdCBDSEFSQUNURVJfRU5DT0RJTkdTID0gWzB4MDM0LCAweDEyMSwgMHgwNjEsIDB4MTYwLCAweDAzMSwgMHgxMzAsIDB4MDcwLCAweDAyNSwgMHgxMjQsIDB4MDY0LCAweDEwOSwgMHgwNDksXG4gICAgMHgxNDgsIDB4MDE5LCAweDExOCwgMHgwNTgsIDB4MDBELCAweDEwQywgMHgwNEMsIDB4MDFDLCAweDEwMywgMHgwNDMsIDB4MTQyLCAweDAxMywgMHgxMTIsIDB4MDUyLCAweDAwNywgMHgxMDYsXG4gICAgMHgwNDYsIDB4MDE2LCAweDE4MSwgMHgwQzEsIDB4MUMwLCAweDA5MSwgMHgxOTAsIDB4MEQwLCAweDA4NSwgMHgxODQsIDB4MEM0LCAweDA5NCwgMHgwQTgsIDB4MEEyLCAweDA4QSwgMHgwMkFcbl07XG5cbmV4cG9ydCBjbGFzcyBDb2RlMzlSZWFkZXIgZXh0ZW5kcyBCYXJjb2RlUmVhZGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLl9mb3JtYXQgPSAnY29kZV8zOSc7XG4gICAgfVxuXG4gICAgX2RlY29kZSgpIHtcbiAgICAgICAgY29uc3Qgc3RhcnQgPSB0aGlzLl9maW5kU3RhcnQoKTtcblxuICAgICAgICBpZiAoIXN0YXJ0KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgICAgICBsZXQgY291bnRlcnMgPSBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF07XG4gICAgICAgIGxldCBkZWNvZGVkQ2hhcjtcbiAgICAgICAgbGV0IGxhc3RTdGFydDtcbiAgICAgICAgbGV0IG5leHRTdGFydCA9IHRoaXMuX25leHRTZXQodGhpcy5fcm93LCBzdGFydC5lbmQpO1xuXG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIGNvdW50ZXJzID0gdGhpcy5fdG9Db3VudGVycyhuZXh0U3RhcnQsIGNvdW50ZXJzKTtcbiAgICAgICAgICAgIGNvbnN0IHBhdHRlcm4gPSB0aGlzLl90b1BhdHRlcm4oY291bnRlcnMpO1xuICAgICAgICAgICAgaWYgKHBhdHRlcm4gPCAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWNvZGVkQ2hhciA9IHRoaXMuX3BhdHRlcm5Ub0NoYXIocGF0dGVybik7XG4gICAgICAgICAgICBpZiAoZGVjb2RlZENoYXIgPCAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaChkZWNvZGVkQ2hhcik7XG4gICAgICAgICAgICBsYXN0U3RhcnQgPSBuZXh0U3RhcnQ7XG4gICAgICAgICAgICBuZXh0U3RhcnQgKz0gY291bnRlcnMucmVkdWNlKChzdW0sIGl0ZW0pID0+IHN1bSArIGl0ZW0sIDApO1xuICAgICAgICAgICAgbmV4dFN0YXJ0ID0gdGhpcy5fbmV4dFNldCh0aGlzLl9yb3csIG5leHRTdGFydCk7XG4gICAgICAgIH0gd2hpbGUgKGRlY29kZWRDaGFyICE9PSAnKicpO1xuICAgICAgICByZXN1bHQucG9wKCk7XG5cbiAgICAgICAgaWYgKCFyZXN1bHQubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5fdmVyaWZ5VHJhaWxpbmdXaGl0ZXNwYWNlKGxhc3RTdGFydCwgbmV4dFN0YXJ0LCBjb3VudGVycykpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvZGU6IHJlc3VsdC5qb2luKCcnKSxcbiAgICAgICAgICAgIHN0YXJ0OiBzdGFydC5zdGFydCxcbiAgICAgICAgICAgIGVuZDogbmV4dFN0YXJ0LFxuICAgICAgICAgICAgc3RhcnRJbmZvOiBzdGFydCxcbiAgICAgICAgICAgIGRlY29kZWRDb2RlczogcmVzdWx0XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgX3ZlcmlmeVRyYWlsaW5nV2hpdGVzcGFjZShsYXN0U3RhcnQsIG5leHRTdGFydCwgY291bnRlcnMpIHtcbiAgICAgICAgY29uc3QgcGF0dGVyblNpemUgPSBjb3VudGVycy5yZWR1Y2UoKHN1bSwgaXRlbSkgPT4gc3VtICsgaXRlbSwgMCk7XG4gICAgICAgIGNvbnN0IHRyYWlsaW5nV2hpdGVzcGFjZUVuZCA9IG5leHRTdGFydCAtIGxhc3RTdGFydCAtIHBhdHRlcm5TaXplO1xuICAgICAgICByZXR1cm4gKHRyYWlsaW5nV2hpdGVzcGFjZUVuZCAqIDMpID49IHBhdHRlcm5TaXplO1xuICAgIH1cblxuICAgIF9wYXR0ZXJuVG9DaGFyKHBhdHRlcm4pIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBDSEFSQUNURVJfRU5DT0RJTkdTLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoQ0hBUkFDVEVSX0VOQ09ESU5HU1tpXSA9PT0gcGF0dGVybikge1xuICAgICAgICAgICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKEFMUEhBQkVUW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLTE7XG4gICAgfVxuXG4gICAgX2ZpbmROZXh0V2lkdGgoY291bnRlcnMsIGN1cnJlbnQpIHtcbiAgICAgICAgbGV0IG1pbldpZHRoID0gTnVtYmVyLk1BWF9WQUxVRTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoY291bnRlcnNbaV0gPCBtaW5XaWR0aCAmJiBjb3VudGVyc1tpXSA+IGN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICBtaW5XaWR0aCA9IGNvdW50ZXJzW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG1pbldpZHRoO1xuICAgIH1cblxuICAgIF90b1BhdHRlcm4oY291bnRlcnMpIHtcbiAgICAgICAgY29uc3QgbnVtQ291bnRlcnMgPSBjb3VudGVycy5sZW5ndGg7XG4gICAgICAgIGxldCBtYXhOYXJyb3dXaWR0aCA9IDA7XG4gICAgICAgIGxldCBudW1XaWRlQmFycyA9IG51bUNvdW50ZXJzO1xuICAgICAgICBsZXQgd2lkZUJhcldpZHRoID0gMDtcbiAgICAgICAgbGV0IHBhdHRlcm47XG5cbiAgICAgICAgd2hpbGUgKG51bVdpZGVCYXJzID4gMykge1xuICAgICAgICAgICAgbWF4TmFycm93V2lkdGggPSB0aGlzLl9maW5kTmV4dFdpZHRoKGNvdW50ZXJzLCBtYXhOYXJyb3dXaWR0aCk7XG4gICAgICAgICAgICBudW1XaWRlQmFycyA9IDA7XG4gICAgICAgICAgICBwYXR0ZXJuID0gMDtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtQ291bnRlcnM7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChjb3VudGVyc1tpXSA+IG1heE5hcnJvd1dpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm4gfD0gMSA8PCAobnVtQ291bnRlcnMgLSAxIC0gaSk7XG4gICAgICAgICAgICAgICAgICAgIG51bVdpZGVCYXJzKys7XG4gICAgICAgICAgICAgICAgICAgIHdpZGVCYXJXaWR0aCArPSBjb3VudGVyc1tpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChudW1XaWRlQmFycyA9PT0gMykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtQ291bnRlcnMgJiYgbnVtV2lkZUJhcnMgPiAwOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ZXJzW2ldID4gbWF4TmFycm93V2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bVdpZGVCYXJzLS07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKGNvdW50ZXJzW2ldICogMikgPj0gd2lkZUJhcldpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBwYXR0ZXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG5cbiAgICBfZmluZFN0YXJ0KCkge1xuICAgICAgICBjb25zdCBvZmZzZXQgPSB0aGlzLl9uZXh0U2V0KHRoaXMuX3Jvdyk7XG4gICAgICAgIGxldCBwYXR0ZXJuU3RhcnQgPSBvZmZzZXQ7XG4gICAgICAgIGNvbnN0IGNvdW50ZXIgPSBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF07XG4gICAgICAgIGxldCBjb3VudGVyUG9zID0gMDtcbiAgICAgICAgbGV0IGlzV2hpdGUgPSBmYWxzZTtcbiAgICAgICAgbGV0IHdoaXRlU3BhY2VNdXN0U3RhcnQ7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IG9mZnNldDsgaSA8IHRoaXMuX3Jvdy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3Jvd1tpXSBeIGlzV2hpdGUpIHtcbiAgICAgICAgICAgICAgICBjb3VudGVyW2NvdW50ZXJQb3NdKys7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChjb3VudGVyUG9zID09PSBjb3VudGVyLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZmluZCBzdGFydCBwYXR0ZXJuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl90b1BhdHRlcm4oY291bnRlcikgPT09IEFTVEVSSVNLKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZVNwYWNlTXVzdFN0YXJ0ID0gTWF0aC5tYXgoMCwgcGF0dGVyblN0YXJ0IC0gKChpIC0gcGF0dGVyblN0YXJ0KSAvIDQpKSB8IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fbWF0Y2hSYW5nZSh3aGl0ZVNwYWNlTXVzdFN0YXJ0LCBwYXR0ZXJuU3RhcnQsIDApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IHBhdHRlcm5TdGFydCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kOiBpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm5TdGFydCArPSBjb3VudGVyWzBdICsgY291bnRlclsxXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA3OyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ZXJbal0gPSBjb3VudGVyW2ogKyAyXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb3VudGVyWzddID0gMDtcbiAgICAgICAgICAgICAgICAgICAgY291bnRlcls4XSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXJQb3MtLTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb3VudGVyUG9zKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvdW50ZXJbY291bnRlclBvc10gPSAxO1xuICAgICAgICAgICAgICAgIGlzV2hpdGUgPSAhaXNXaGl0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvZGUzOVJlYWRlciB9IGZyb20gJy4vY29kZV8zOV9yZWFkZXInO1xuXG5leHBvcnQgY2xhc3MgQ29kZTM5VklOUmVhZGVyIGV4dGVuZHMgQ29kZTM5UmVhZGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLl9mb3JtYXQgPSAnY29kZV8zOV92aW4nO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBib3Jyb3dzXG4gICAgICogaHR0cHM6Ly9naXRodWIuY29tL3p4aW5nL3p4aW5nL2Jsb2IvbWFzdGVyL2NvcmUvc3JjL21haW4vamF2YS9jb20vZ29vZ2xlL3p4aW5nL2NsaWVudC9yZXN1bHQvVklOUmVzdWx0UGFyc2VyLmphdmFcbiAgICAgKi9cbiAgICBfZGVjb2RlKCkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZGVjb2RlKCk7XG4gICAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjb2RlID0gcmVzdWx0LmNvZGU7XG5cbiAgICAgICAgaWYgKCFjb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvZGUgPSBjb2RlLnJlcGxhY2UoL1tJT1FdL2csICcnKTtcblxuICAgICAgICBpZiAoIS9bQS1aMC05XXsxN30vLnRlc3QoY29kZSkpIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0ZhaWxlZCBBWjA5IHBhdHRlcm4gY29kZTonLCBjb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLl9jaGVja0NoZWNrc3VtKGNvZGUpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc3VsdC5jb2RlID0gY29kZTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBfY2hlY2tDaGVja3N1bShjb2RlKSB7XG4gICAgICAgIC8vIFRPRE9cbiAgICAgICAgcmV0dXJuICEhY29kZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBCYXJjb2RlUmVhZGVyIH0gZnJvbSAnLi9iYXJjb2RlX3JlYWRlcic7XG5cbmNvbnN0IEFMUEhBQkVUSF9TVFJJTkcgPSAnMDEyMzQ1Njc4OUFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaLS4gJC8rJWFiY2QqJztcbmNvbnN0IEFMUEhBQkVUID0gWy4uLkFMUEhBQkVUSF9TVFJJTkddLm1hcChjaGFyID0+IGNoYXIuY2hhckNvZGVBdCgwKSk7XG5jb25zdCBDSEFSQUNURVJfRU5DT0RJTkdTID0gW1xuICAgIDB4MTE0LCAweDE0OCwgMHgxNDQsIDB4MTQyLCAweDEyOCwgMHgxMjQsIDB4MTIyLCAweDE1MCwgMHgxMTIsIDB4MTBBLFxuICAgIDB4MUE4LCAweDFBNCwgMHgxQTIsIDB4MTk0LCAweDE5MiwgMHgxOEEsIDB4MTY4LCAweDE2NCwgMHgxNjIsIDB4MTM0LFxuICAgIDB4MTFBLCAweDE1OCwgMHgxNEMsIDB4MTQ2LCAweDEyQywgMHgxMTYsIDB4MUI0LCAweDFCMiwgMHgxQUMsIDB4MUE2LFxuICAgIDB4MTk2LCAweDE5QSwgMHgxNkMsIDB4MTY2LCAweDEzNiwgMHgxM0EsIDB4MTJFLCAweDFENCwgMHgxRDIsIDB4MUNBLFxuICAgIDB4MTZFLCAweDE3NiwgMHgxQUUsIDB4MTI2LCAweDFEQSwgMHgxRDYsIDB4MTMyLCAweDE1RVxuXTtcbmNvbnN0IEFTVEVSSVNLID0gMHgxNUU7XG5cbmV4cG9ydCBjbGFzcyBDb2RlOTNSZWFkZXIgZXh0ZW5kcyBCYXJjb2RlUmVhZGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLl9mb3JtYXQgPSAnY29kZV85Myc7XG4gICAgfVxuXG4gICAgX2RlY29kZSgpIHtcbiAgICAgICAgY29uc3Qgc3RhcnQgPSB0aGlzLl9maW5kU3RhcnQoKTtcblxuICAgICAgICBpZiAoIXN0YXJ0KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZXN1bHQgPSBbXTtcbiAgICAgICAgbGV0IGNvdW50ZXJzID0gWzAsIDAsIDAsIDAsIDAsIDBdO1xuICAgICAgICBsZXQgZGVjb2RlZENoYXI7XG4gICAgICAgIGxldCBsYXN0U3RhcnQ7XG4gICAgICAgIGxldCBuZXh0U3RhcnQgPSB0aGlzLl9uZXh0U2V0KHRoaXMuX3Jvdywgc3RhcnQuZW5kKTtcblxuICAgICAgICBkbyB7XG4gICAgICAgICAgICBjb3VudGVycyA9IHRoaXMuX3RvQ291bnRlcnMobmV4dFN0YXJ0LCBjb3VudGVycyk7XG4gICAgICAgICAgICBjb25zdCBwYXR0ZXJuID0gdGhpcy5fdG9QYXR0ZXJuKGNvdW50ZXJzKTtcbiAgICAgICAgICAgIGlmIChwYXR0ZXJuIDwgMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVjb2RlZENoYXIgPSB0aGlzLl9wYXR0ZXJuVG9DaGFyKHBhdHRlcm4pO1xuICAgICAgICAgICAgaWYgKGRlY29kZWRDaGFyIDwgMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goZGVjb2RlZENoYXIpO1xuICAgICAgICAgICAgbGFzdFN0YXJ0ID0gbmV4dFN0YXJ0O1xuICAgICAgICAgICAgbmV4dFN0YXJ0ICs9IGNvdW50ZXJzLnJlZHVjZSgoc3VtLCBpdGVtKSA9PiBzdW0gKyBpdGVtLCAwKTtcbiAgICAgICAgICAgIG5leHRTdGFydCA9IHRoaXMuX25leHRTZXQodGhpcy5fcm93LCBuZXh0U3RhcnQpO1xuICAgICAgICB9IHdoaWxlIChkZWNvZGVkQ2hhciAhPT0gJyonKTtcbiAgICAgICAgcmVzdWx0LnBvcCgpO1xuXG4gICAgICAgIGlmICghcmVzdWx0Lmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuX3ZlcmlmeUVuZChsYXN0U3RhcnQsIG5leHRTdGFydCwgY291bnRlcnMpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5fdmVyaWZ5Q2hlY2tzdW1zKHJlc3VsdCkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0LnNsaWNlKDAsIHJlc3VsdC5sZW5ndGggLSAyKTtcbiAgICAgICAgaWYgKChyZXN1bHQgPSB0aGlzLl9kZWNvZGVFeHRlbmRlZChyZXN1bHQpKSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29kZTogcmVzdWx0LmpvaW4oJycpLFxuICAgICAgICAgICAgc3RhcnQ6IHN0YXJ0LnN0YXJ0LFxuICAgICAgICAgICAgZW5kOiBuZXh0U3RhcnQsXG4gICAgICAgICAgICBzdGFydEluZm86IHN0YXJ0LFxuICAgICAgICAgICAgZGVjb2RlZENvZGVzOiByZXN1bHRcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBfdmVyaWZ5RW5kKGxhc3RTdGFydCwgbmV4dFN0YXJ0KSB7XG4gICAgICAgIGlmIChsYXN0U3RhcnQgPT09IG5leHRTdGFydCB8fCAhdGhpcy5fcm93W25leHRTdGFydF0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBfcGF0dGVyblRvQ2hhcihwYXR0ZXJuKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQ0hBUkFDVEVSX0VOQ09ESU5HUy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKENIQVJBQ1RFUl9FTkNPRElOR1NbaV0gPT09IHBhdHRlcm4pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShBTFBIQUJFVFtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cblxuICAgIF90b1BhdHRlcm4oY291bnRlcnMpIHtcbiAgICAgICAgY29uc3QgbnVtQ291bnRlcnMgPSBjb3VudGVycy5sZW5ndGg7XG4gICAgICAgIGxldCBwYXR0ZXJuID0gMDtcbiAgICAgICAgbGV0IHN1bSA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtQ291bnRlcnM7IGkrKykge1xuICAgICAgICAgICAgc3VtICs9IGNvdW50ZXJzW2ldO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1Db3VudGVyczsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbm9ybWFsaXplZCA9IE1hdGgucm91bmQoY291bnRlcnNbaV0gKiA5IC8gc3VtKTtcbiAgICAgICAgICAgIGlmIChub3JtYWxpemVkIDwgMSB8fCBub3JtYWxpemVkID4gNCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgoaSAmIDEpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBub3JtYWxpemVkOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybiA9IChwYXR0ZXJuIDw8IDEpIHwgMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhdHRlcm4gPDw9IG5vcm1hbGl6ZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGF0dGVybjtcbiAgICB9XG5cbiAgICBfZmluZFN0YXJ0KCkge1xuICAgICAgICBjb25zdCBjb3VudGVyID0gWzAsIDAsIDAsIDAsIDAsIDBdO1xuICAgICAgICBjb25zdCBvZmZzZXQgPSB0aGlzLl9uZXh0U2V0KHRoaXMuX3Jvdyk7XG4gICAgICAgIGxldCBwYXR0ZXJuU3RhcnQgPSBvZmZzZXQ7XG4gICAgICAgIGxldCBjb3VudGVyUG9zID0gMDtcbiAgICAgICAgbGV0IGlzV2hpdGUgPSBmYWxzZTtcbiAgICAgICAgbGV0IHdoaXRlU3BhY2VNdXN0U3RhcnQ7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IG9mZnNldDsgaSA8IHRoaXMuX3Jvdy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3Jvd1tpXSBeIGlzV2hpdGUpIHtcbiAgICAgICAgICAgICAgICBjb3VudGVyW2NvdW50ZXJQb3NdKys7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChjb3VudGVyUG9zID09PSBjb3VudGVyLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZmluZCBzdGFydCBwYXR0ZXJuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl90b1BhdHRlcm4oY291bnRlcikgPT09IEFTVEVSSVNLKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZVNwYWNlTXVzdFN0YXJ0ID0gTWF0aC5tYXgoMCwgcGF0dGVyblN0YXJ0IC0gKChpIC0gcGF0dGVyblN0YXJ0KSAvIDQpKSB8IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fbWF0Y2hSYW5nZSh3aGl0ZVNwYWNlTXVzdFN0YXJ0LCBwYXR0ZXJuU3RhcnQsIDApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IHBhdHRlcm5TdGFydCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kOiBpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm5TdGFydCArPSBjb3VudGVyWzBdICsgY291bnRlclsxXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA0OyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ZXJbal0gPSBjb3VudGVyW2ogKyAyXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb3VudGVyWzRdID0gMDtcbiAgICAgICAgICAgICAgICAgICAgY291bnRlcls1XSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXJQb3MtLTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb3VudGVyUG9zKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvdW50ZXJbY291bnRlclBvc10gPSAxO1xuICAgICAgICAgICAgICAgIGlzV2hpdGUgPSAhaXNXaGl0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIF9kZWNvZGVFeHRlbmRlZChjaGFyQXJyYXkpIHtcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gY2hhckFycmF5Lmxlbmd0aDtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNoYXIgPSBjaGFyQXJyYXlbaV07XG4gICAgICAgICAgICBpZiAoY2hhciA+PSAnYScgJiYgY2hhciA8PSAnZCcpIHtcbiAgICAgICAgICAgICAgICBpZiAoaSA+IChsZW5ndGggLSAyKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgbmV4dENoYXIgPSBjaGFyQXJyYXlbKytpXTtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXh0Q2hhckNvZGUgPSBuZXh0Q2hhci5jaGFyQ29kZUF0KDApO1xuICAgICAgICAgICAgICAgIGxldCBkZWNvZGVkQ2hhcjtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGNoYXIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnYSc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXh0Q2hhciA+PSAnQScgJiYgbmV4dENoYXIgPD0gJ1onKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjb2RlZENoYXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKG5leHRDaGFyQ29kZSAtIDY0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXNlICdiJzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRDaGFyID49ICdBJyAmJiBuZXh0Q2hhciA8PSAnRScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNvZGVkQ2hhciA9IFN0cmluZy5mcm9tQ2hhckNvZGUobmV4dENoYXJDb2RlIC0gMzgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChuZXh0Q2hhciA+PSAnRicgJiYgbmV4dENoYXIgPD0gJ0onKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjb2RlZENoYXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKG5leHRDaGFyQ29kZSAtIDExKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobmV4dENoYXIgPj0gJ0snICYmIG5leHRDaGFyIDw9ICdPJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY29kZWRDaGFyID0gU3RyaW5nLmZyb21DaGFyQ29kZShuZXh0Q2hhckNvZGUgKyAxNik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG5leHRDaGFyID49ICdQJyAmJiBuZXh0Q2hhciA8PSAnUycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNvZGVkQ2hhciA9IFN0cmluZy5mcm9tQ2hhckNvZGUobmV4dENoYXJDb2RlICsgNDMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChuZXh0Q2hhciA+PSAnVCcgJiYgbmV4dENoYXIgPD0gJ1onKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjb2RlZENoYXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDEyNyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnYyc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXh0Q2hhciA+PSAnQScgJiYgbmV4dENoYXIgPD0gJ08nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjb2RlZENoYXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKG5leHRDaGFyQ29kZSAtIDMyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobmV4dENoYXIgPT09ICdaJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY29kZWRDaGFyID0gJzonO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2QnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV4dENoYXIgPj0gJ0EnICYmIG5leHRDaGFyIDw9ICdaJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY29kZWRDaGFyID0gU3RyaW5nLmZyb21DaGFyQ29kZShuZXh0Q2hhckNvZGUgKyAzMik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goZGVjb2RlZENoYXIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChjaGFyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIF92ZXJpZnlDaGVja3N1bXMoY2hhckFycmF5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYXRjaENoZWNrQ2hhcihjaGFyQXJyYXksIGNoYXJBcnJheS5sZW5ndGggLSAyLCAyMClcbiAgICAgICAgICAgICYmIHRoaXMuX21hdGNoQ2hlY2tDaGFyKGNoYXJBcnJheSwgY2hhckFycmF5Lmxlbmd0aCAtIDEsIDE1KTtcbiAgICB9XG5cbiAgICBfbWF0Y2hDaGVja0NoYXIoY2hhckFycmF5LCBpbmRleCwgbWF4V2VpZ2h0KSB7XG4gICAgICAgIGNvbnN0IGFycmF5VG9DaGVjayA9IGNoYXJBcnJheS5zbGljZSgwLCBpbmRleCk7XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IGFycmF5VG9DaGVjay5sZW5ndGg7XG4gICAgICAgIGNvbnN0IHdlaWdodGVkU3VtcyA9IGFycmF5VG9DaGVjay5yZWR1Y2UoKHN1bSwgY2hhciwgaSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgd2VpZ2h0ID0gKCgoaSAqIC0xKSArIChsZW5ndGggLSAxKSkgJSBtYXhXZWlnaHQpICsgMTtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gQUxQSEFCRVQuaW5kZXhPZihjaGFyLmNoYXJDb2RlQXQoMCkpO1xuICAgICAgICAgICAgcmV0dXJuIHN1bSArICh3ZWlnaHQgKiB2YWx1ZSk7XG4gICAgICAgIH0sIDApO1xuXG4gICAgICAgIGNvbnN0IGNoZWNrQ2hhciA9IEFMUEhBQkVUWyh3ZWlnaHRlZFN1bXMgJSA0NyldO1xuICAgICAgICByZXR1cm4gY2hlY2tDaGFyID09PSBjaGFyQXJyYXlbaW5kZXhdLmNoYXJDb2RlQXQoMCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgRUFOUmVhZGVyIH0gZnJvbSAnLi9lYW5fcmVhZGVyJztcblxuZXhwb3J0IGNsYXNzIEVBTjJSZWFkZXIgZXh0ZW5kcyBFQU5SZWFkZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZywgc3VwcGxlbWVudHMpIHtcbiAgICAgICAgc3VwZXIoY29uZmlnLCBzdXBwbGVtZW50cyk7XG5cbiAgICAgICAgdGhpcy5fZm9ybWF0ID0gJ2Vhbl8yJztcbiAgICB9XG5cbiAgICBkZWNvZGUocm93LCBzdGFydCkge1xuICAgICAgICBjb25zdCBlbmQgPSByb3cubGVuZ3RoO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICAgICAgY29uc3QgZGVjb2RlZENvZGVzID0gW107XG4gICAgICAgIGxldCBvZmZzZXQgPSBzdGFydDtcbiAgICAgICAgbGV0IGNvZGVGcmVxdWVuY3kgPSAwO1xuICAgICAgICBsZXQgY29kZTtcblxuICAgICAgICB0aGlzLl9yb3cgPSByb3c7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyICYmIG9mZnNldCA8IGVuZDsgaSsrKSB7XG4gICAgICAgICAgICBjb2RlID0gdGhpcy5fZGVjb2RlQ29kZShvZmZzZXQpO1xuICAgICAgICAgICAgaWYgKCFjb2RlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWNvZGVkQ29kZXMucHVzaChjb2RlKTtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGNvZGUuY29kZSAlIDEwKTtcbiAgICAgICAgICAgIGlmIChjb2RlLmNvZGUgPj0gdGhpcy5DT0RFX0dfU1RBUlQpIHtcbiAgICAgICAgICAgICAgICBjb2RlRnJlcXVlbmN5IHw9IDEgPDwgKDEgLSBpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpICE9PSAxKSB7XG4gICAgICAgICAgICAgICAgb2Zmc2V0ID0gdGhpcy5fbmV4dFNldCh0aGlzLl9yb3csIGNvZGUuZW5kKTtcbiAgICAgICAgICAgICAgICBvZmZzZXQgPSB0aGlzLl9uZXh0VW5zZXQodGhpcy5fcm93LCBvZmZzZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGggIT09IDIgfHwgKHBhcnNlSW50KHJlc3VsdC5qb2luKCcnKSkgJSA0KSAhPT0gY29kZUZyZXF1ZW5jeSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29kZTogcmVzdWx0LmpvaW4oJycpLFxuICAgICAgICAgICAgZGVjb2RlZENvZGVzLFxuICAgICAgICAgICAgZW5kOiBjb2RlLmVuZFxuICAgICAgICB9O1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEVBTlJlYWRlciB9IGZyb20gJy4vZWFuX3JlYWRlcic7XG5cbmV4cG9ydCBjbGFzcyBFQU41UmVhZGVyIGV4dGVuZHMgRUFOUmVhZGVyIHtcbiAgICBnZXQgQ0hFQ0tfRElHSVRfRU5DT0RJTkdTKCkge1xuICAgICAgICByZXR1cm4gWzI0LCAyMCwgMTgsIDE3LCAxMiwgNiwgMywgMTAsIDksIDVdO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZywgc3VwcGxlbWVudHMpIHtcbiAgICAgICAgc3VwZXIoY29uZmlnLCBzdXBwbGVtZW50cyk7XG5cbiAgICAgICAgdGhpcy5fZm9ybWF0ID0gJ2Vhbl81JztcbiAgICB9XG5cbiAgICBkZWNvZGUocm93LCBzdGFydCkge1xuICAgICAgICBjb25zdCBlbmQgPSByb3cubGVuZ3RoO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICAgICAgY29uc3QgZGVjb2RlZENvZGVzID0gW107XG4gICAgICAgIGxldCBjb2RlRnJlcXVlbmN5ID0gMDtcbiAgICAgICAgbGV0IG9mZnNldCA9IHN0YXJ0O1xuICAgICAgICBsZXQgY29kZTtcblxuICAgICAgICB0aGlzLl9yb3cgPSByb3c7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1ICYmIG9mZnNldCA8IGVuZDsgaSsrKSB7XG4gICAgICAgICAgICBjb2RlID0gdGhpcy5fZGVjb2RlQ29kZShvZmZzZXQpO1xuICAgICAgICAgICAgaWYgKCFjb2RlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWNvZGVkQ29kZXMucHVzaChjb2RlKTtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGNvZGUuY29kZSAlIDEwKTtcbiAgICAgICAgICAgIGlmIChjb2RlLmNvZGUgPj0gdGhpcy5DT0RFX0dfU1RBUlQpIHtcbiAgICAgICAgICAgICAgICBjb2RlRnJlcXVlbmN5IHw9IDEgPDwgKDQgLSBpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpICE9PSA0KSB7XG4gICAgICAgICAgICAgICAgb2Zmc2V0ID0gdGhpcy5fbmV4dFNldCh0aGlzLl9yb3csIGNvZGUuZW5kKTtcbiAgICAgICAgICAgICAgICBvZmZzZXQgPSB0aGlzLl9uZXh0VW5zZXQodGhpcy5fcm93LCBvZmZzZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGggIT09IDUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX2V4dGVuc2lvbkNoZWNrc3VtKHJlc3VsdCkgIT09IHRoaXMuX2RldGVybWluZUNoZWNrRGlnaXQoY29kZUZyZXF1ZW5jeSkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvZGU6IHJlc3VsdC5qb2luKCcnKSxcbiAgICAgICAgICAgIGRlY29kZWRDb2RlcyxcbiAgICAgICAgICAgIGVuZDogY29kZS5lbmRcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBfZGV0ZXJtaW5lQ2hlY2tEaWdpdChjb2RlRnJlcXVlbmN5KSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgaWYgKGNvZGVGcmVxdWVuY3kgPT09IHRoaXMuQ0hFQ0tfRElHSVRfRU5DT0RJTkdTW2ldKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG5cbiAgICBfZXh0ZW5zaW9uQ2hlY2tzdW0ocmVzdWx0KSB7XG4gICAgICAgIGxldCBsZW5ndGggPSByZXN1bHQubGVuZ3RoO1xuICAgICAgICBsZXQgc3VtID0gMDtcblxuICAgICAgICBmb3IgKGxldCBpID0gbGVuZ3RoIC0gMjsgaSA+PSAwOyBpIC09IDIpIHtcbiAgICAgICAgICAgIHN1bSArPSByZXN1bHRbaV07XG4gICAgICAgIH1cbiAgICAgICAgc3VtICo9IDM7XG4gICAgICAgIGZvciAobGV0IGkgPSBsZW5ndGggLSAxOyBpID49IDA7IGkgLT0gMikge1xuICAgICAgICAgICAgc3VtICs9IHJlc3VsdFtpXTtcbiAgICAgICAgfVxuICAgICAgICBzdW0gKj0gMztcblxuICAgICAgICByZXR1cm4gc3VtICUgMTA7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgRUFOUmVhZGVyIH0gZnJvbSAnLi9lYW5fcmVhZGVyJztcblxuZXhwb3J0IGNsYXNzIEVBTjhSZWFkZXIgZXh0ZW5kcyBFQU5SZWFkZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZywgc3VwcGxlbWVudHMpIHtcbiAgICAgICAgc3VwZXIoY29uZmlnLCBzdXBwbGVtZW50cyk7XG5cbiAgICAgICAgdGhpcy5fZm9ybWF0ID0gJ2Vhbl84JztcbiAgICB9XG5cbiAgICBfZGVjb2RlUGF5bG9hZChjb2RlLCByZXN1bHQsIGRlY29kZWRDb2Rlcykge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICAgICAgY29kZSA9IHRoaXMuX2RlY29kZUNvZGUoY29kZS5lbmQsIHRoaXMuQ09ERV9HX1NUQVJUKTtcbiAgICAgICAgICAgIGlmICghY29kZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goY29kZS5jb2RlKTtcbiAgICAgICAgICAgIGRlY29kZWRDb2Rlcy5wdXNoKGNvZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29kZSA9IHRoaXMuX2ZpbmRQYXR0ZXJuKHRoaXMuTUlERExFX1BBVFRFUk4sIGNvZGUuZW5kLCB0cnVlLCBmYWxzZSk7XG5cbiAgICAgICAgaWYgKGNvZGUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVjb2RlZENvZGVzLnB1c2goY29kZSk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgICAgIGNvZGUgPSB0aGlzLl9kZWNvZGVDb2RlKGNvZGUuZW5kLCB0aGlzLkNPREVfR19TVEFSVCk7XG5cbiAgICAgICAgICAgIGlmICghY29kZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkZWNvZGVkQ29kZXMucHVzaChjb2RlKTtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGNvZGUuY29kZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29kZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBtZXJnZSB9IGZyb20gJy4uL2NvbW1vbi9tZXJnZSc7XG5pbXBvcnQgeyBCYXJjb2RlUmVhZGVyIH0gZnJvbSAnLi9iYXJjb2RlX3JlYWRlcic7XG5cbmNvbnN0IEVYVEVOU0lPTl9TVEFSVF9QQVRURVJOID0gWzEsIDEsIDJdO1xuY29uc3QgQ09ERV9QQVRURVJOID0gW1xuICAgIFszLCAyLCAxLCAxXSxcbiAgICBbMiwgMiwgMiwgMV0sXG4gICAgWzIsIDEsIDIsIDJdLFxuICAgIFsxLCA0LCAxLCAxXSxcbiAgICBbMSwgMSwgMywgMl0sXG4gICAgWzEsIDIsIDMsIDFdLFxuICAgIFsxLCAxLCAxLCA0XSxcbiAgICBbMSwgMywgMSwgMl0sXG4gICAgWzEsIDIsIDEsIDNdLFxuICAgIFszLCAxLCAxLCAyXSxcbiAgICBbMSwgMSwgMiwgM10sXG4gICAgWzEsIDIsIDIsIDJdLFxuICAgIFsyLCAyLCAxLCAyXSxcbiAgICBbMSwgMSwgNCwgMV0sXG4gICAgWzIsIDMsIDEsIDFdLFxuICAgIFsxLCAzLCAyLCAxXSxcbiAgICBbNCwgMSwgMSwgMV0sXG4gICAgWzIsIDEsIDMsIDFdLFxuICAgIFszLCAxLCAyLCAxXSxcbiAgICBbMiwgMSwgMSwgM11cbl07XG5cbmV4cG9ydCBjbGFzcyBFQU5SZWFkZXIgZXh0ZW5kcyBCYXJjb2RlUmVhZGVyIHtcbiAgICBnZXQgQ09ERV9MX1NUQVJUKCkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICBnZXQgQ09ERV9HX1NUQVJUKCkge1xuICAgICAgICByZXR1cm4gMTA7XG4gICAgfVxuXG4gICAgZ2V0IFNUQVJUX1BBVFRFUk4oKSB7XG4gICAgICAgIHJldHVybiBbMSwgMSwgMV07XG4gICAgfVxuXG4gICAgZ2V0IFNUT1BfUEFUVEVSTigpIHtcbiAgICAgICAgcmV0dXJuIFsxLCAxLCAxXTtcbiAgICB9XG5cbiAgICBnZXQgTUlERExFX1BBVFRFUk4oKSB7XG4gICAgICAgIHJldHVybiBbMSwgMSwgMSwgMSwgMV07XG4gICAgfVxuXG4gICAgZ2V0IENPREVfRlJFUVVFTkNZKCkge1xuICAgICAgICByZXR1cm4gWzAsIDExLCAxMywgMTQsIDE5LCAyNSwgMjgsIDIxLCAyMiwgMjZdO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZywgc3VwcGxlbWVudHMpIHtcbiAgICAgICAgc3VwZXIobWVyZ2Uoe1xuICAgICAgICAgICAgc3VwcGxlbWVudHM6IFtdIC8vIEFsbG93ZWQgZXh0ZW5zaW9ucyB0byBiZSBkZWNvZGVkICgyIGFuZC9vciA1KVxuICAgICAgICB9LCBjb25maWcpLCBzdXBwbGVtZW50cyk7XG5cbiAgICAgICAgdGhpcy5fZm9ybWF0ID0gJ2Vhbl8xMyc7XG4gICAgICAgIHRoaXMuX3NpbmdsZUNvZGVFcnJvciA9IDAuNzA7XG4gICAgICAgIHRoaXMuX2F2ZXJhZ2VDb2RlRXJyb3IgPSAwLjQ4O1xuICAgIH1cblxuICAgIF9kZWNvZGVDb2RlKHN0YXJ0LCBjb2RlcmFuZ2UpIHtcbiAgICAgICAgY29uc3QgY291bnRlciA9IFswLCAwLCAwLCAwXTtcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gc3RhcnQ7XG4gICAgICAgIGNvbnN0IGJlc3RNYXRjaCA9IHtcbiAgICAgICAgICAgIGVycm9yOiBOdW1iZXIuTUFYX1ZBTFVFLFxuICAgICAgICAgICAgY29kZTogLTEsXG4gICAgICAgICAgICBzdGFydDogc3RhcnQsXG4gICAgICAgICAgICBlbmQ6IHN0YXJ0XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGVwc2lsb24gPSB0aGlzLkFWRVJBR0VfQ09ERV9FUlJPUjtcbiAgICAgICAgbGV0IGlzV2hpdGUgPSAhdGhpcy5fcm93W29mZnNldF07XG4gICAgICAgIGxldCBjb3VudGVyUG9zID0gMDtcblxuICAgICAgICBpZiAoIWNvZGVyYW5nZSkge1xuICAgICAgICAgICAgY29kZXJhbmdlID0gQ09ERV9QQVRURVJOLmxlbmd0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSBvZmZzZXQ7IGkgPCB0aGlzLl9yb3cubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9yb3dbaV0gXiBpc1doaXRlKSB7XG4gICAgICAgICAgICAgICAgY291bnRlcltjb3VudGVyUG9zXSsrO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoY291bnRlclBvcyA9PT0gY291bnRlci5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGNvZGUgPSAwOyBjb2RlIDwgY29kZXJhbmdlOyBjb2RlKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yID0gdGhpcy5fbWF0Y2hQYXR0ZXJuKGNvdW50ZXIsIENPREVfUEFUVEVSTltjb2RlXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IgPCBiZXN0TWF0Y2guZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZXN0TWF0Y2guY29kZSA9IGNvZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVzdE1hdGNoLmVycm9yID0gZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYmVzdE1hdGNoLmVuZCA9IGk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChiZXN0TWF0Y2guZXJyb3IgPiBlcHNpbG9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYmVzdE1hdGNoO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXJQb3MrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY291bnRlcltjb3VudGVyUG9zXSA9IDE7XG4gICAgICAgICAgICAgICAgaXNXaGl0ZSA9ICFpc1doaXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgX2ZpbmRQYXR0ZXJuKHBhdHRlcm4sIG9mZnNldCwgaXNXaGl0ZSwgdHJ5SGFyZGVyLCBlcHNpbG9uKSB7XG4gICAgICAgIGNvbnN0IGNvdW50ZXIgPSBbXTtcbiAgICAgICAgY29uc3QgYmVzdE1hdGNoID0ge1xuICAgICAgICAgICAgZXJyb3I6IE51bWJlci5NQVhfVkFMVUUsXG4gICAgICAgICAgICBjb2RlOiAtMSxcbiAgICAgICAgICAgIHN0YXJ0OiAwLFxuICAgICAgICAgICAgZW5kOiAwXG4gICAgICAgIH07XG4gICAgICAgIGxldCBjb3VudGVyUG9zID0gMDtcbiAgICAgICAgbGV0IHN1bTtcblxuICAgICAgICBpZiAoIW9mZnNldCkge1xuICAgICAgICAgICAgb2Zmc2V0ID0gdGhpcy5fbmV4dFNldCh0aGlzLl9yb3cpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzV2hpdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaXNXaGl0ZSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRyeUhhcmRlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0cnlIYXJkZXIgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVwc2lsb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZXBzaWxvbiA9IHRoaXMuQVZFUkFHRV9DT0RFX0VSUk9SO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXR0ZXJuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb3VudGVyW2ldID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSBvZmZzZXQ7IGkgPCB0aGlzLl9yb3cubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9yb3dbaV0gXiBpc1doaXRlKSB7XG4gICAgICAgICAgICAgICAgY291bnRlcltjb3VudGVyUG9zXSsrO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoY291bnRlclBvcyA9PT0gY291bnRlci5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1bSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY291bnRlci5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3VtICs9IGNvdW50ZXJbal07XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBlcnJvciA9IHRoaXMuX21hdGNoUGF0dGVybihjb3VudGVyLCBwYXR0ZXJuKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yIDwgZXBzaWxvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmVzdE1hdGNoLmVycm9yID0gZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICBiZXN0TWF0Y2guc3RhcnQgPSBpIC0gc3VtO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmVzdE1hdGNoLmVuZCA9IGk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYmVzdE1hdGNoO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRyeUhhcmRlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb3VudGVyLmxlbmd0aCAtIDI7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ZXJbal0gPSBjb3VudGVyW2ogKyAyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ZXJbY291bnRlci5sZW5ndGggLSAyXSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVyW2NvdW50ZXIubGVuZ3RoIC0gMV0gPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgY291bnRlclBvcy0tO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb3VudGVyUG9zKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvdW50ZXJbY291bnRlclBvc10gPSAxO1xuICAgICAgICAgICAgICAgIGlzV2hpdGUgPSAhaXNXaGl0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIF9maW5kU3RhcnQoKSB7XG4gICAgICAgIGxldCBvZmZzZXQgPSB0aGlzLl9uZXh0U2V0KHRoaXMuX3Jvdyk7XG4gICAgICAgIGxldCBzdGFydEluZm87XG5cbiAgICAgICAgd2hpbGUgKCFzdGFydEluZm8pIHtcbiAgICAgICAgICAgIHN0YXJ0SW5mbyA9IHRoaXMuX2ZpbmRQYXR0ZXJuKHRoaXMuU1RBUlRfUEFUVEVSTiwgb2Zmc2V0KTtcblxuICAgICAgICAgICAgaWYgKCFzdGFydEluZm8pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgbGVhZGluZ1doaXRlc3BhY2VTdGFydCA9IHN0YXJ0SW5mby5zdGFydCAtIChzdGFydEluZm8uZW5kIC0gc3RhcnRJbmZvLnN0YXJ0KTtcblxuICAgICAgICAgICAgaWYgKGxlYWRpbmdXaGl0ZXNwYWNlU3RhcnQgPj0gMCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9tYXRjaFJhbmdlKGxlYWRpbmdXaGl0ZXNwYWNlU3RhcnQsIHN0YXJ0SW5mby5zdGFydCwgMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0YXJ0SW5mbztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG9mZnNldCA9IHN0YXJ0SW5mby5lbmQ7XG4gICAgICAgICAgICBzdGFydEluZm8gPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgX3ZlcmlmeVRyYWlsaW5nV2hpdGVzcGFjZShlbmRJbmZvKSB7XG4gICAgICAgIGNvbnN0IHRyYWlsaW5nV2hpdGVzcGFjZUVuZCA9IGVuZEluZm8uZW5kICsgKGVuZEluZm8uZW5kIC0gZW5kSW5mby5zdGFydCk7XG5cbiAgICAgICAgaWYgKHRyYWlsaW5nV2hpdGVzcGFjZUVuZCA8IHRoaXMuX3Jvdy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9tYXRjaFJhbmdlKGVuZEluZm8uZW5kLCB0cmFpbGluZ1doaXRlc3BhY2VFbmQsIDApKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVuZEluZm87XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBfZmluZEVuZChvZmZzZXQsIGlzV2hpdGUpIHtcbiAgICAgICAgY29uc3QgZW5kSW5mbyA9IHRoaXMuX2ZpbmRQYXR0ZXJuKHRoaXMuU1RPUF9QQVRURVJOLCBvZmZzZXQsIGlzV2hpdGUsIGZhbHNlKTtcblxuICAgICAgICByZXR1cm4gZW5kSW5mbyAhPT0gbnVsbCA/IHRoaXMuX3ZlcmlmeVRyYWlsaW5nV2hpdGVzcGFjZShlbmRJbmZvKSA6IG51bGw7XG4gICAgfVxuXG4gICAgX2NhbGN1bGF0ZUZpcnN0RGlnaXQoY29kZUZyZXF1ZW5jeSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuQ09ERV9GUkVRVUVOQ1kubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChjb2RlRnJlcXVlbmN5ID09PSB0aGlzLkNPREVfRlJFUVVFTkNZW2ldKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgX2RlY29kZVBheWxvYWQoY29kZSwgcmVzdWx0LCBkZWNvZGVkQ29kZXMpIHtcbiAgICAgICAgbGV0IGNvZGVGcmVxdWVuY3kgPSAweDA7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICAgICAgICAgIGNvZGUgPSB0aGlzLl9kZWNvZGVDb2RlKGNvZGUuZW5kKTtcbiAgICAgICAgICAgIGlmICghY29kZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvZGUuY29kZSA+PSB0aGlzLkNPREVfR19TVEFSVCkge1xuICAgICAgICAgICAgICAgIGNvZGUuY29kZSAtPSB0aGlzLkNPREVfR19TVEFSVDtcbiAgICAgICAgICAgICAgICBjb2RlRnJlcXVlbmN5IHw9IDEgPDwgKDUgLSBpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29kZUZyZXF1ZW5jeSB8PSAwIDw8ICg1IC0gaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaChjb2RlLmNvZGUpO1xuICAgICAgICAgICAgZGVjb2RlZENvZGVzLnB1c2goY29kZSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBmaXJzdERpZ2l0ID0gdGhpcy5fY2FsY3VsYXRlRmlyc3REaWdpdChjb2RlRnJlcXVlbmN5KTtcblxuICAgICAgICBpZiAoZmlyc3REaWdpdCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXN1bHQudW5zaGlmdChmaXJzdERpZ2l0KTtcblxuICAgICAgICBjb2RlID0gdGhpcy5fZmluZFBhdHRlcm4odGhpcy5NSURETEVfUEFUVEVSTiwgY29kZS5lbmQsIHRydWUsIGZhbHNlKTtcblxuICAgICAgICBpZiAoY29kZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBkZWNvZGVkQ29kZXMucHVzaChjb2RlKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgICAgICAgICAgY29kZSA9IHRoaXMuX2RlY29kZUNvZGUoY29kZS5lbmQsIHRoaXMuQ09ERV9HX1NUQVJUKTtcblxuICAgICAgICAgICAgaWYgKCFjb2RlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRlY29kZWRDb2Rlcy5wdXNoKGNvZGUpO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goY29kZS5jb2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb2RlO1xuICAgIH1cblxuICAgIF9kZWNvZGUoKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgICAgICBjb25zdCBkZWNvZGVkQ29kZXMgPSBbXTtcbiAgICAgICAgbGV0IHJlc3VsdEluZm8gPSB7fTtcbiAgICAgICAgbGV0IHN0YXJ0SW5mbyA9IHRoaXMuX2ZpbmRTdGFydCgpO1xuXG4gICAgICAgIGlmICghc3RhcnRJbmZvKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjb2RlID0ge1xuICAgICAgICAgICAgY29kZTogc3RhcnRJbmZvLmNvZGUsXG4gICAgICAgICAgICBzdGFydDogc3RhcnRJbmZvLnN0YXJ0LFxuICAgICAgICAgICAgZW5kOiBzdGFydEluZm8uZW5kXG4gICAgICAgIH07XG4gICAgICAgIGRlY29kZWRDb2Rlcy5wdXNoKGNvZGUpO1xuXG4gICAgICAgIGNvZGUgPSB0aGlzLl9kZWNvZGVQYXlsb2FkKGNvZGUsIHJlc3VsdCwgZGVjb2RlZENvZGVzKTtcblxuICAgICAgICBpZiAoIWNvZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29kZSA9IHRoaXMuX2ZpbmRFbmQoY29kZS5lbmQsIGZhbHNlKTtcblxuICAgICAgICBpZiAoIWNvZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVjb2RlZENvZGVzLnB1c2goY29kZSk7XG5cbiAgICAgICAgLy8gQ2hlY2tzdW1cbiAgICAgICAgaWYgKCF0aGlzLl9jaGVja3N1bShyZXN1bHQpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnN1cHBsZW1lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHN1cHBsZW1lbnQgPSB0aGlzLl9kZWNvZGVFeHRlbnNpb25zKGNvZGUuZW5kKTtcbiAgICAgICAgICAgIGlmICghc3VwcGxlbWVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBsYXN0Q29kZSA9IHN1cHBsZW1lbnQuZGVjb2RlZENvZGVzW3N1cHBsZW1lbnQuZGVjb2RlZENvZGVzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgY29uc3QgZW5kSW5mbyA9IHtcbiAgICAgICAgICAgICAgICBzdGFydDogbGFzdENvZGUuc3RhcnQgKyAoKChsYXN0Q29kZS5lbmQgLSBsYXN0Q29kZS5zdGFydCkgLyAyKSB8IDApLFxuICAgICAgICAgICAgICAgIGVuZDogbGFzdENvZGUuZW5kXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpZiAoIXRoaXMuX3ZlcmlmeVRyYWlsaW5nV2hpdGVzcGFjZShlbmRJbmZvKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXN1bHRJbmZvID0ge1xuICAgICAgICAgICAgICAgIHN1cHBsZW1lbnQsXG4gICAgICAgICAgICAgICAgY29kZTogcmVzdWx0LmpvaW4oJycpICsgc3VwcGxlbWVudC5jb2RlXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvZGU6IHJlc3VsdC5qb2luKCcnKSxcbiAgICAgICAgICAgIHN0YXJ0OiBzdGFydEluZm8uc3RhcnQsXG4gICAgICAgICAgICBlbmQ6IGNvZGUuZW5kLFxuICAgICAgICAgICAgY29kZXNldDogJycsXG4gICAgICAgICAgICBzdGFydEluZm8sXG4gICAgICAgICAgICBkZWNvZGVkQ29kZXMsXG4gICAgICAgICAgICAuLi5yZXN1bHRJbmZvXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgX2RlY29kZUV4dGVuc2lvbnMob2Zmc2V0KSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy5fbmV4dFNldCh0aGlzLl9yb3csIG9mZnNldCk7XG4gICAgICAgIGNvbnN0IHN0YXJ0SW5mbyA9IHRoaXMuX2ZpbmRQYXR0ZXJuKEVYVEVOU0lPTl9TVEFSVF9QQVRURVJOLCBzdGFydCwgZmFsc2UsIGZhbHNlKTtcblxuICAgICAgICBpZiAoc3RhcnRJbmZvID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdXBwbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHRoaXMuc3VwcGxlbWVudHNbaV0uZGVjb2RlKHRoaXMuX3Jvdywgc3RhcnRJbmZvLmVuZCk7XG4gICAgICAgICAgICBpZiAocmVzdWx0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgY29kZTogcmVzdWx0LmNvZGUsXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0LFxuICAgICAgICAgICAgICAgICAgICBzdGFydEluZm8sXG4gICAgICAgICAgICAgICAgICAgIGVuZDogcmVzdWx0LmVuZCxcbiAgICAgICAgICAgICAgICAgICAgY29kZXNldDogJycsXG4gICAgICAgICAgICAgICAgICAgIGRlY29kZWRDb2RlczogcmVzdWx0LmRlY29kZWRDb2Rlc1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBfY2hlY2tzdW0ocmVzdWx0KSB7XG4gICAgICAgIGxldCBzdW0gPSAwO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSByZXN1bHQubGVuZ3RoIC0gMjsgaSA+PSAwOyBpIC09IDIpIHtcbiAgICAgICAgICAgIHN1bSArPSByZXN1bHRbaV07XG4gICAgICAgIH1cblxuICAgICAgICBzdW0gKj0gMztcblxuICAgICAgICBmb3IgKGxldCBpID0gcmVzdWx0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaSAtPSAyKSB7XG4gICAgICAgICAgICBzdW0gKz0gcmVzdWx0W2ldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1bSAlIDEwID09PSAwO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBtZXJnZSB9IGZyb20gJy4uL2NvbW1vbi9tZXJnZSc7XG5pbXBvcnQgeyBCYXJjb2RlUmVhZGVyIH0gZnJvbSAnLi9iYXJjb2RlX3JlYWRlcic7XG5cbmNvbnN0IE4gPSAxO1xuY29uc3QgVyA9IDM7XG5jb25zdCBTVEFSVF9QQVRURVJOID0gW04sIE4sIE4sIE5dO1xuY29uc3QgU1RPUF9QQVRURVJOID0gW04sIE4sIFddO1xuY29uc3QgQ09ERV9QQVRURVJOID0gW1xuICAgIFtOLCBOLCBXLCBXLCBOXSxcbiAgICBbVywgTiwgTiwgTiwgV10sXG4gICAgW04sIFcsIE4sIE4sIFddLFxuICAgIFtXLCBXLCBOLCBOLCBOXSxcbiAgICBbTiwgTiwgVywgTiwgV10sXG4gICAgW1csIE4sIFcsIE4sIE5dLFxuICAgIFtOLCBXLCBXLCBOLCBOXSxcbiAgICBbTiwgTiwgTiwgVywgV10sXG4gICAgW1csIE4sIE4sIFcsIE5dLFxuICAgIFtOLCBXLCBOLCBXLCBOXVxuXTtcbmNvbnN0IE1BWF9DT1JSRUNUSU9OX0ZBQ1RPUiA9IDU7XG5cbmV4cG9ydCBjbGFzcyBJMm9mNVJlYWRlciBleHRlbmRzIEJhcmNvZGVSZWFkZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICBzdXBlcihtZXJnZSh7XG4gICAgICAgICAgICBub3JtYWxpemVCYXJTcGFjZVdpZHRoOiBmYWxzZSAvLyBOb3JtYWxpemUgdGhlIHdpZHRoIGRpZmZlcmVuY2UgYmV0d2VlbiBiYXJzIGFuZCBzcGFjZXNcbiAgICAgICAgfSwgY29uZmlnKSk7XG5cbiAgICAgICAgdGhpcy5fZm9ybWF0ID0gJ2kyb2Y1JztcbiAgICAgICAgdGhpcy5fYmFyU3BhY2VSYXRpbyA9IFsxLCAxXTtcblxuICAgICAgICBpZiAodGhpcy5jb25maWcubm9ybWFsaXplQmFyU3BhY2VXaWR0aCkge1xuICAgICAgICAgICAgdGhpcy5fc2luZ2xlQ29kZUVycm9yID0gMC4zODtcbiAgICAgICAgICAgIHRoaXMuX2F2ZXJhZ2VDb2RlRXJyb3IgPSAwLjA5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fc2luZ2xlQ29kZUVycm9yID0gMC43ODtcbiAgICAgICAgICAgIHRoaXMuX2F2ZXJhZ2VDb2RlRXJyb3IgPSAwLjM4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX21hdGNoUGF0dGVybihjb3VudGVyLCBjb2RlKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5ub3JtYWxpemVCYXJTcGFjZVdpZHRoKSB7XG4gICAgICAgICAgICBjb25zdCBjb3VudGVyU3VtID0gWzAsIDBdO1xuICAgICAgICAgICAgY29uc3QgY29kZVN1bSA9IFswLCAwXTtcbiAgICAgICAgICAgIGNvbnN0IGNvcnJlY3Rpb24gPSBbMCwgMF07XG4gICAgICAgICAgICBjb25zdCBjb3JyZWN0aW9uUmF0aW8gPSBNQVhfQ09SUkVDVElPTl9GQUNUT1I7XG4gICAgICAgICAgICBjb25zdCBjb3JyZWN0aW9uUmF0aW9JbnZlcnNlID0gMSAvIGNvcnJlY3Rpb25SYXRpbztcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY291bnRlclN1bVtpICUgMl0gKz0gY291bnRlcltpXTtcbiAgICAgICAgICAgICAgICBjb2RlU3VtW2kgJSAyXSArPSBjb2RlW2ldO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb3JyZWN0aW9uWzBdID0gY29kZVN1bVswXSAvIGNvdW50ZXJTdW1bMF07XG4gICAgICAgICAgICBjb3JyZWN0aW9uWzFdID0gY29kZVN1bVsxXSAvIGNvdW50ZXJTdW1bMV07XG5cbiAgICAgICAgICAgIGNvcnJlY3Rpb25bMF0gPSBNYXRoLm1heChNYXRoLm1pbihjb3JyZWN0aW9uWzBdLCBjb3JyZWN0aW9uUmF0aW8pLCBjb3JyZWN0aW9uUmF0aW9JbnZlcnNlKTtcbiAgICAgICAgICAgIGNvcnJlY3Rpb25bMV0gPSBNYXRoLm1heChNYXRoLm1pbihjb3JyZWN0aW9uWzFdLCBjb3JyZWN0aW9uUmF0aW8pLCBjb3JyZWN0aW9uUmF0aW9JbnZlcnNlKTtcbiAgICAgICAgICAgIHRoaXMuX2JhclNwYWNlUmF0aW8gPSBjb3JyZWN0aW9uO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50ZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb3VudGVyW2ldICo9IHRoaXMuX2JhclNwYWNlUmF0aW9baSAlIDJdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1cGVyLl9tYXRjaFBhdHRlcm4oY291bnRlciwgY29kZSk7XG4gICAgfVxuXG4gICAgX2ZpbmRQYXR0ZXJuKHBhdHRlcm4sIG9mZnNldCwgaXNXaGl0ZSwgdHJ5SGFyZGVyKSB7XG4gICAgICAgIGNvbnN0IGNvdW50ZXIgPSBbXTtcbiAgICAgICAgY29uc3QgYmVzdE1hdGNoID0ge1xuICAgICAgICAgICAgZXJyb3I6IE51bWJlci5NQVhfVkFMVUUsXG4gICAgICAgICAgICBjb2RlOiAtMSxcbiAgICAgICAgICAgIHN0YXJ0OiAwLFxuICAgICAgICAgICAgZW5kOiAwXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGVwc2lsb24gPSB0aGlzLkFWRVJBR0VfQ09ERV9FUlJPUjtcbiAgICAgICAgbGV0IGNvdW50ZXJQb3MgPSAwO1xuXG4gICAgICAgIGlzV2hpdGUgPSBpc1doaXRlIHx8IGZhbHNlO1xuICAgICAgICB0cnlIYXJkZXIgPSB0cnlIYXJkZXIgfHwgZmFsc2U7XG5cbiAgICAgICAgaWYgKCFvZmZzZXQpIHtcbiAgICAgICAgICAgIG9mZnNldCA9IHRoaXMuX25leHRTZXQodGhpcy5fcm93KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0dGVybi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY291bnRlcltpXSA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gb2Zmc2V0OyBpIDwgdGhpcy5fcm93Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fcm93W2ldIF4gaXNXaGl0ZSkge1xuICAgICAgICAgICAgICAgIGNvdW50ZXJbY291bnRlclBvc10rKztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvdW50ZXJQb3MgPT09IGNvdW50ZXIubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgc3VtID0gMDtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb3VudGVyLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdW0gKz0gY291bnRlcltqXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBlcnJvciA9IHRoaXMuX21hdGNoUGF0dGVybihjb3VudGVyLCBwYXR0ZXJuKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yIDwgZXBzaWxvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmVzdE1hdGNoLmVycm9yID0gZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICBiZXN0TWF0Y2guc3RhcnQgPSBpIC0gc3VtO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmVzdE1hdGNoLmVuZCA9IGk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYmVzdE1hdGNoO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0cnlIYXJkZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY291bnRlci5sZW5ndGggLSAyOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVyW2pdID0gY291bnRlcltqICsgMl07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVyW2NvdW50ZXIubGVuZ3RoIC0gMl0gPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgY291bnRlcltjb3VudGVyLmxlbmd0aCAtIDFdID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ZXJQb3MtLTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnRlclBvcysrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb3VudGVyW2NvdW50ZXJQb3NdID0gMTtcbiAgICAgICAgICAgICAgICBpc1doaXRlID0gIWlzV2hpdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgX2ZpbmRTdGFydCgpIHtcbiAgICAgICAgbGV0IG9mZnNldCA9IHRoaXMuX25leHRTZXQodGhpcy5fcm93KTtcbiAgICAgICAgbGV0IHN0YXJ0SW5mbztcblxuICAgICAgICB3aGlsZSAoIXN0YXJ0SW5mbykge1xuICAgICAgICAgICAgc3RhcnRJbmZvID0gdGhpcy5fZmluZFBhdHRlcm4oU1RBUlRfUEFUVEVSTiwgb2Zmc2V0LCBmYWxzZSwgdHJ1ZSk7XG4gICAgICAgICAgICBpZiAoIXN0YXJ0SW5mbykge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBuYXJyb3dCYXJXaWR0aCA9IChzdGFydEluZm8uZW5kIC0gc3RhcnRJbmZvLnN0YXJ0KSA+PiAyO1xuICAgICAgICAgICAgY29uc3QgbGVhZGluZ1doaXRlc3BhY2VTdGFydCA9IHN0YXJ0SW5mby5zdGFydCAtIG5hcnJvd0JhcldpZHRoICogMTA7XG5cbiAgICAgICAgICAgIGlmIChsZWFkaW5nV2hpdGVzcGFjZVN0YXJ0ID49IDApIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fbWF0Y2hSYW5nZShsZWFkaW5nV2hpdGVzcGFjZVN0YXJ0LCBzdGFydEluZm8uc3RhcnQsIDApKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGFydEluZm87XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBvZmZzZXQgPSBzdGFydEluZm8uZW5kO1xuICAgICAgICAgICAgc3RhcnRJbmZvID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIF92ZXJpZnlUcmFpbGluZ1doaXRlc3BhY2UoZW5kSW5mbykge1xuICAgICAgICBjb25zdCB0cmFpbGluZ1doaXRlc3BhY2VFbmQgPSBlbmRJbmZvLmVuZCArIChlbmRJbmZvLmVuZCAtIGVuZEluZm8uc3RhcnQpIC8gMjtcblxuICAgICAgICBpZiAodHJhaWxpbmdXaGl0ZXNwYWNlRW5kIDwgdGhpcy5fcm93Lmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX21hdGNoUmFuZ2UoZW5kSW5mby5lbmQsIHRyYWlsaW5nV2hpdGVzcGFjZUVuZCwgMCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZW5kSW5mbztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIF9maW5kRW5kKCkge1xuICAgICAgICB0aGlzLl9yb3cucmV2ZXJzZSgpO1xuICAgICAgICBjb25zdCBlbmRJbmZvID0gdGhpcy5fZmluZFBhdHRlcm4oU1RPUF9QQVRURVJOKTtcbiAgICAgICAgdGhpcy5fcm93LnJldmVyc2UoKTtcblxuICAgICAgICBpZiAoZW5kSW5mbyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvLyByZXZlcnNlIG51bWJlcnNcbiAgICAgICAgY29uc3QgdG1wID0gZW5kSW5mby5zdGFydDtcbiAgICAgICAgZW5kSW5mby5zdGFydCA9IHRoaXMuX3Jvdy5sZW5ndGggLSBlbmRJbmZvLmVuZDtcbiAgICAgICAgZW5kSW5mby5lbmQgPSB0aGlzLl9yb3cubGVuZ3RoIC0gdG1wO1xuXG4gICAgICAgIHJldHVybiBlbmRJbmZvICE9PSBudWxsID8gdGhpcy5fdmVyaWZ5VHJhaWxpbmdXaGl0ZXNwYWNlKGVuZEluZm8pIDogbnVsbDtcbiAgICB9XG5cbiAgICBfZGVjb2RlUGFpcihjb3VudGVyUGFpcikge1xuICAgICAgICBjb25zdCBjb2RlcyA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnRlclBhaXIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNvZGUgPSB0aGlzLl9kZWNvZGVDb2RlKGNvdW50ZXJQYWlyW2ldKTtcblxuICAgICAgICAgICAgaWYgKCFjb2RlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvZGVzLnB1c2goY29kZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29kZXM7XG4gICAgfVxuXG4gICAgX2RlY29kZUNvZGUoY291bnRlcikge1xuICAgICAgICBjb25zdCBiZXN0TWF0Y2ggPSB7XG4gICAgICAgICAgICBlcnJvcjogTnVtYmVyLk1BWF9WQUxVRSxcbiAgICAgICAgICAgIGNvZGU6IC0xLFxuICAgICAgICAgICAgc3RhcnQ6IDAsXG4gICAgICAgICAgICBlbmQ6IDBcbiAgICAgICAgfTtcblxuICAgICAgICBmb3IgKGxldCBjb2RlID0gMDsgY29kZSA8IENPREVfUEFUVEVSTi5sZW5ndGg7IGNvZGUrKykge1xuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSB0aGlzLl9tYXRjaFBhdHRlcm4oY291bnRlciwgQ09ERV9QQVRURVJOW2NvZGVdKTtcbiAgICAgICAgICAgIGlmIChlcnJvciA8IGJlc3RNYXRjaC5lcnJvcikge1xuICAgICAgICAgICAgICAgIGJlc3RNYXRjaC5jb2RlID0gY29kZTtcbiAgICAgICAgICAgICAgICBiZXN0TWF0Y2guZXJyb3IgPSBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBiZXN0TWF0Y2guZXJyb3IgPCB0aGlzLkFWRVJBR0VfQ09ERV9FUlJPUiA/IGJlc3RNYXRjaCA6IG51bGw7XG4gICAgfVxuXG4gICAgX2RlY29kZVBheWxvYWQoY291bnRlcnMsIHJlc3VsdCwgZGVjb2RlZENvZGVzKSB7XG4gICAgICAgIGNvbnN0IGNvdW50ZXJMZW5ndGggPSBjb3VudGVycy5sZW5ndGg7XG4gICAgICAgIGNvbnN0IGNvdW50ZXJQYWlyID0gW1swLCAwLCAwLCAwLCAwXSwgWzAsIDAsIDAsIDAsIDBdXTtcbiAgICAgICAgbGV0IHBvcyA9IDA7XG4gICAgICAgIGxldCBjb2RlcztcblxuICAgICAgICB3aGlsZSAocG9zIDwgY291bnRlckxlbmd0aCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb3VudGVyUGFpclswXVtpXSA9IGNvdW50ZXJzW3Bvc10gKiB0aGlzLl9iYXJTcGFjZVJhdGlvWzBdO1xuICAgICAgICAgICAgICAgIGNvdW50ZXJQYWlyWzFdW2ldID0gY291bnRlcnNbcG9zICsgMV0gKiB0aGlzLl9iYXJTcGFjZVJhdGlvWzFdO1xuICAgICAgICAgICAgICAgIHBvcyArPSAyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb2RlcyA9IHRoaXMuX2RlY29kZVBhaXIoY291bnRlclBhaXIpO1xuXG4gICAgICAgICAgICBpZiAoIWNvZGVzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChjb2Rlc1tpXS5jb2RlICsgJycpO1xuICAgICAgICAgICAgICAgIGRlY29kZWRDb2Rlcy5wdXNoKGNvZGVzW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb2RlcztcbiAgICB9XG5cbiAgICBfZGVjb2RlKCkge1xuICAgICAgICBjb25zdCBzdGFydEluZm8gPSB0aGlzLl9maW5kU3RhcnQoKTtcblxuICAgICAgICBpZiAoIXN0YXJ0SW5mbykge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBlbmRJbmZvID0gdGhpcy5fZmluZEVuZCgpO1xuXG4gICAgICAgIGlmICghZW5kSW5mbykge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkZWNvZGVkQ29kZXMgPSBbXTtcbiAgICAgICAgZGVjb2RlZENvZGVzLnB1c2goc3RhcnRJbmZvKTtcblxuICAgICAgICBjb25zdCBjb3VudGVycyA9IHRoaXMuX2ZpbGxDb3VudGVycyhzdGFydEluZm8uZW5kLCBlbmRJbmZvLnN0YXJ0LCBmYWxzZSk7XG5cbiAgICAgICAgaWYgKGNvdW50ZXJzLmxlbmd0aCAlIDEwICE9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgICAgICBjb25zdCBjb2RlID0gdGhpcy5fZGVjb2RlUGF5bG9hZChjb3VudGVycywgcmVzdWx0LCBkZWNvZGVkQ29kZXMpO1xuXG4gICAgICAgIGlmICghY29kZSB8fCByZXN1bHQubGVuZ3RoICUgMiAhPT0gMCB8fCByZXN1bHQubGVuZ3RoIDwgNikge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBkZWNvZGVkQ29kZXMucHVzaChlbmRJbmZvKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29kZTogcmVzdWx0LmpvaW4oJycpLFxuICAgICAgICAgICAgc3RhcnQ6IHN0YXJ0SW5mby5zdGFydCxcbiAgICAgICAgICAgIGVuZDogZW5kSW5mby5lbmQsXG4gICAgICAgICAgICBzdGFydEluZm8sXG4gICAgICAgICAgICBkZWNvZGVkQ29kZXNcbiAgICAgICAgfTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBFQU5SZWFkZXIgfSBmcm9tICcuL2Vhbl9yZWFkZXInO1xuXG5leHBvcnQgY2xhc3MgVVBDRVJlYWRlciBleHRlbmRzIEVBTlJlYWRlciB7XG4gICAgZ2V0IENPREVfRlJFUVVFTkNZKCkge1xuICAgICAgICByZXR1cm4gW1s1NiwgNTIsIDUwLCA0OSwgNDQsIDM4LCAzNSwgNDIsIDQxLCAzN10sIFs3LCAxMSwgMTMsIDE0LCAxOSwgMjUsIDI4LCAyMSwgMjIsIDI2XV07XG4gICAgfVxuXG4gICAgZ2V0IFNUT1BfUEFUVEVSTigpIHtcbiAgICAgICAgcmV0dXJuIFsxIC8gNiAqIDcsIDEgLyA2ICogNywgMSAvIDYgKiA3LCAxIC8gNiAqIDcsIDEgLyA2ICogNywgMSAvIDYgKiA3XTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcsIHN1cHBsZW1lbnRzKSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZywgc3VwcGxlbWVudHMpO1xuXG4gICAgICAgIHRoaXMuX2Zvcm1hdCA9ICd1cGNfZSc7XG4gICAgfVxuXG4gICAgX2RlY29kZVBheWxvYWQoY29kZSwgcmVzdWx0LCBkZWNvZGVkQ29kZXMpIHtcbiAgICAgICAgbGV0IGNvZGVGcmVxdWVuY3kgPSAweDA7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICAgICAgICAgIGNvZGUgPSB0aGlzLl9kZWNvZGVDb2RlKGNvZGUuZW5kKTtcbiAgICAgICAgICAgIGlmICghY29kZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvZGUuY29kZSA+PSB0aGlzLkNPREVfR19TVEFSVCkge1xuICAgICAgICAgICAgICAgIGNvZGUuY29kZSA9IGNvZGUuY29kZSAtIHRoaXMuQ09ERV9HX1NUQVJUO1xuICAgICAgICAgICAgICAgIGNvZGVGcmVxdWVuY3kgfD0gMSA8PCAoNSAtIGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goY29kZS5jb2RlKTtcbiAgICAgICAgICAgIGRlY29kZWRDb2Rlcy5wdXNoKGNvZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLl9kZXRlcm1pbmVQYXJpdHkoY29kZUZyZXF1ZW5jeSwgcmVzdWx0KSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29kZTtcbiAgICB9XG5cbiAgICBfZGV0ZXJtaW5lUGFyaXR5KGNvZGVGcmVxdWVuY3ksIHJlc3VsdCkge1xuICAgICAgICBmb3IgKGxldCBuclN5c3RlbSA9IDA7IG5yU3lzdGVtIDwgdGhpcy5DT0RFX0ZSRVFVRU5DWS5sZW5ndGg7IG5yU3lzdGVtKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5DT0RFX0ZSRVFVRU5DWVtuclN5c3RlbV0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoY29kZUZyZXF1ZW5jeSA9PT0gdGhpcy5DT0RFX0ZSRVFVRU5DWVtuclN5c3RlbV1baV0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnVuc2hpZnQobnJTeXN0ZW0pO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChpKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBfY29udmVydFRvVVBDQShyZXN1bHQpIHtcbiAgICAgICAgY29uc3QgbGFzdERpZ2l0ID0gcmVzdWx0W3Jlc3VsdC5sZW5ndGggLSAyXTtcbiAgICAgICAgbGV0IHVwY2EgPSBbcmVzdWx0WzBdXTtcblxuICAgICAgICBpZiAobGFzdERpZ2l0IDw9IDIpIHtcbiAgICAgICAgICAgIHVwY2EgPSB1cGNhLmNvbmNhdChyZXN1bHQuc2xpY2UoMSwgMykpLmNvbmNhdChbbGFzdERpZ2l0LCAwLCAwLCAwLCAwXSkuY29uY2F0KHJlc3VsdC5zbGljZSgzLCA2KSk7XG4gICAgICAgIH0gZWxzZSBpZiAobGFzdERpZ2l0ID09PSAzKSB7XG4gICAgICAgICAgICB1cGNhID0gdXBjYS5jb25jYXQocmVzdWx0LnNsaWNlKDEsIDQpKS5jb25jYXQoWzAsIDAsIDAsIDAsIDBdKS5jb25jYXQocmVzdWx0LnNsaWNlKDQsIDYpKTtcbiAgICAgICAgfSBlbHNlIGlmIChsYXN0RGlnaXQgPT09IDQpIHtcbiAgICAgICAgICAgIHVwY2EgPSB1cGNhLmNvbmNhdChyZXN1bHQuc2xpY2UoMSwgNSkpLmNvbmNhdChbMCwgMCwgMCwgMCwgMCwgcmVzdWx0WzVdXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB1cGNhID0gdXBjYS5jb25jYXQocmVzdWx0LnNsaWNlKDEsIDYpKS5jb25jYXQoWzAsIDAsIDAsIDAsIGxhc3REaWdpdF0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdXBjYS5wdXNoKHJlc3VsdFtyZXN1bHQubGVuZ3RoIC0gMV0pO1xuICAgICAgICByZXR1cm4gdXBjYTtcbiAgICB9XG5cbiAgICBfY2hlY2tzdW0ocmVzdWx0KSB7XG4gICAgICAgIHJldHVybiBzdXBlci5fY2hlY2tzdW0odGhpcy5fY29udmVydFRvVVBDQShyZXN1bHQpKTtcbiAgICB9XG5cbiAgICBfZmluZEVuZChvZmZzZXQsIGlzV2hpdGUpIHtcbiAgICAgICAgaXNXaGl0ZSA9IHRydWU7XG4gICAgICAgIHJldHVybiBzdXBlci5fZmluZEVuZChvZmZzZXQsIGlzV2hpdGUpO1xuICAgIH1cblxuICAgIF92ZXJpZnlUcmFpbGluZ1doaXRlc3BhY2UoZW5kSW5mbykge1xuICAgICAgICBjb25zdCB0cmFpbGluZ1doaXRlc3BhY2VFbmQgPSBlbmRJbmZvLmVuZCArIChlbmRJbmZvLmVuZCAtIGVuZEluZm8uc3RhcnQpIC8gMjtcblxuICAgICAgICBpZiAodHJhaWxpbmdXaGl0ZXNwYWNlRW5kIDwgdGhpcy5fcm93Lmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX21hdGNoUmFuZ2UoZW5kSW5mby5lbmQsIHRyYWlsaW5nV2hpdGVzcGFjZUVuZCwgMCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZW5kSW5mbztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBFQU5SZWFkZXIgfSBmcm9tICcuL2Vhbl9yZWFkZXInO1xuXG5leHBvcnQgY2xhc3MgVVBDUmVhZGVyIGV4dGVuZHMgRUFOUmVhZGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihjb25maWcsIHN1cHBsZW1lbnRzKSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZywgc3VwcGxlbWVudHMpO1xuXG4gICAgICAgIHRoaXMuX2Zvcm1hdCA9ICd1cGNfYSc7XG4gICAgfVxuXG4gICAgX2RlY29kZSgpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2RlY29kZSgpO1xuXG4gICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LmNvZGUgJiYgcmVzdWx0LmNvZGUubGVuZ3RoID09PSAxMyAmJiByZXN1bHQuY29kZS5jaGFyQXQoMCkgPT09ICcwJykge1xuICAgICAgICAgICAgcmVzdWx0LmNvZGUgPSByZXN1bHQuY29kZS5zdWJzdHJpbmcoMSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=