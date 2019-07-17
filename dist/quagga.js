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
        largeDivisors.unshift(Math.floor(n / divisor));
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
      var largeDivisor = Math.floor(min / divisor);

      if (divisor !== largeDivisor && max % largeDivisor === 0) {
        largeDivisors.unshift();
      }
    }
  }

  return divisors.concat(largeDivisors);
}

function calculatePatchSize(patchSize, imgSize) {
  var wideSide = Math.max(imgSize.x, imgSize.y);
  var nrOfPatchesList = [8, 10, 15, 20, 32, 60, 80];
  var nrOfPatchesMap = {
    'x-small': 5,
    small: 4,
    medium: 3,
    large: 2,
    'x-large': 1
  };
  var nrOfPatchesIndex = nrOfPatchesMap[patchSize] || nrOfPatchesMap.medium;
  var nrOfPatches = nrOfPatchesList[nrOfPatchesIndex];
  var desiredPatchSize = Math.floor(wideSide / nrOfPatches);

  function findPatchSizeForDivisors(divisors) {
    var i = 0;
    var found = divisors[divisors.length >> 1];

    while (i < divisors.length - 1 && divisors[i] < desiredPatchSize) {
      i++;
    }

    if (i > 0) {
      if (Math.abs(divisors[i] - desiredPatchSize) > Math.abs(divisors[i - 1] - desiredPatchSize)) {
        found = divisors[i - 1];
      } else {
        found = divisors[i];
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
    if (dimension.unit === '%') {
      return Math.floor(context.height * (dimension.value / 100));
    }
  },
  right: function right(dimension, context) {
    if (dimension.unit === '%') {
      return Math.floor(context.width * (1 - dimension.value / 100));
    }
  },
  bottom: function bottom(dimension, context) {
    if (dimension.unit === '%') {
      return Math.floor(context.height * (1 - dimension.value / 100));
    }
  },
  left: function left(dimension, context) {
    if (dimension.unit === '%') {
      return Math.floor(context.width * (dimension.value / 100));
    }
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

      subscribers.filter(function (subscriber) {
        return !!subscriber.once;
      }).forEach(function (subscriber) {
        publishSubscription(subscriber, data);
      }); // remove them from the subscriber

      event.subscribers = subscribers.filter(function (subscriber) {
        return !subscriber.once;
      }); // publish the rest

      event.subscribers.forEach(function (subscriber) {
        publishSubscription(subscriber, data);
      });
    },
    once: function once(event, callback, async) {
      _subscribe(event, {
        callback: callback,
        async: async,
        once: true
      });
    },
    unsubscribe: function unsubscribe(eventName, callback) {
      var event;

      if (eventName) {
        event = getEvent(eventName);

        if (event && callback) {
          event.subscribers = event.subscribers.filter(function (subscriber) {
            return subscriber.callback !== callback;
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

var _arguments = arguments;

/**
 * typedefs.js
 * Normalizes browser-specific prefixes
 */
Math.imul = Math.imul || function (a, b) {
  var ah = a >>> 16 & 0xffff;
  var al = a & 0xffff;
  var bh = b >>> 16 & 0xffff;
  var bl = b & 0xffff; // the shift by 0 fixes the sign on the high part
  // the final |0 converts the unsigned value into a signed value

  return al * bl + (ah * bl + al * bh << 16 >>> 0) | 0;
};

if (typeof Object.assign !== 'function') {
  Object.assign = function (target) {
    // .length of function is 2
    'use strict';

    if (target === null) {
      // TypeError if undefined or null
      throw new TypeError('Cannot convert undefined or null to object');
    }

    var to = Object(target);

    for (var index = 1; index < _arguments.length; index++) {
      var nextSource = _arguments[index];

      if (nextSource !== null) {
        // Skip over if undefined or null
        for (var nextKey in nextSource) {
          // Avoid bugs when hasOwnProperty is shadowed
          if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }

    return to;
  };
}

/***/ }),

/***/ "./src/config/config.dev.js":
/*!**********************************!*\
  !*** ./src/config/config.dev.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
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

/***/ "./src/config/config.js":
/*!******************************!*\
  !*** ./src/config/config.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var config;

if (true) {
  config = __webpack_require__(/*! ./config.dev.js */ "./src/config/config.dev.js");
} else {}

/* harmony default export */ __webpack_exports__["default"] = (config);

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
        var $debug = document.querySelector('#debug.detection');
        this._canvas.dom.frequency = document.querySelector('canvas.frequency');

        if (!this._canvas.dom.frequency) {
          this._canvas.dom.frequency = document.createElement('canvas');
          this._canvas.dom.frequency.className = 'frequency';

          if ($debug) {
            $debug.appendChild(this._canvas.dom.frequency);
          }
        }

        this._canvas.ctx.frequency = this._canvas.dom.frequency.getContext('2d');
        this._canvas.dom.pattern = document.querySelector('canvas.patternBuffer');

        if (!this._canvas.dom.pattern) {
          this._canvas.dom.pattern = document.createElement('canvas');
          this._canvas.dom.pattern.className = 'patternBuffer';

          if ($debug) {
            $debug.appendChild(this._canvas.dom.pattern);
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

        (_console = console).log.apply(_console, ['Registered Readers:'].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(this._barcodeReaders.map(function (reader) {
          return JSON.stringify({
            format: reader.FORMAT,
            config: reader.config
          });
        }))));
      }
    }
  }, {
    key: "_initConfig",
    value: function _initConfig() {
      if (this._config.debug && typeof document !== 'undefined') {
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
      var extensionLength = Math.floor(lineLength * 0.1);
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
        x: (box[1].x - box[0].x) / 2 + box[0].x,
        y: (box[1].y - box[0].y) / 2 + box[0].y
      }, {
        x: (box[3].x - box[2].x) / 2 + box[2].x,
        y: (box[3].y - box[2].y) / 2 + box[2].y
      }];
    }
  }, {
    key: "_tryDecode",
    value: function _tryDecode(line) {
      var barcodeLine = _bresenham__WEBPACK_IMPORTED_MODULE_4__["default"].getBarcodeLine(this._inputImageWrapper, line[0], line[1]);

      if (this._config.debug && this._config.debug.showFrequency) {
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

      if (this._config.debug && this._config.debug.showPattern) {
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

      if (this._config.debug && this._config.debug.drawBoundingBox && context) {
        _common_image_debug__WEBPACK_IMPORTED_MODULE_5__["ImageDebug"].drawPath(box, {
          x: 0,
          y: 1
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

      if (this._config.debug && this._config.debug.drawScanline && context) {
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
/* harmony import */ var Common_media_devices__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Common/media-devices */ "./src/common/media-devices.js");

var streamRef;

function waitForVideo(video) {
  return new Promise(function (resolve, reject) {
    var attempts = 10;

    function checkVideo() {
      if (attempts > 0) {
        if (video.videoWidth > 10 && video.videoHeight > 10) {
          if (true) {
            console.log("".concat(video.videoWidth, "px x ").concat(video.videoHeight, "px"));
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
  return Object(Common_media_devices__WEBPACK_IMPORTED_MODULE_0__["getUserMedia"])(constraints).then(function (stream) {
    return new Promise(function (resolve) {
      streamRef = stream;
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
  return Object(Common_media_devices__WEBPACK_IMPORTED_MODULE_0__["enumerateDevices"])().then(function (devices) {
    return devices.filter(function (device) {
      return device.kind === 'videoinput';
    });
  });
}

function getActiveTrack() {
  if (streamRef) {
    var tracks = streamRef.getVideoTracks();

    if (tracks && tracks.length) {
      return tracks[0];
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = ({
  request: function request(video, videoConstraints) {
    return pickConstraints(videoConstraints).then(initCamera.bind(null, video));
  },
  release: function release() {
    var tracks = streamRef && streamRef.getVideoTracks();

    if (tracks && tracks.length) {
      tracks[0].stop();
    }

    streamRef = null;
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

            if (!/^blob\:/i.test(src)) {
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

function readEXIFData(file, start, exifTags) {
  if (getStringFromBuffer(file, start, 4) !== 'Exif') {
    return false;
  }

  var tiffOffset = start + 6;
  var bigEnd;

  if (file.getUint16(tiffOffset) === 0x4949) {
    bigEnd = false;
  } else if (file.getUint16(tiffOffset) === 0x4D4D) {
    bigEnd = true;
  } else {
    return false;
  }

  if (file.getUint16(tiffOffset + 2, !bigEnd) !== 0x002A) {
    return false;
  }

  var firstIFDOffset = file.getUint32(tiffOffset + 4, !bigEnd);

  if (firstIFDOffset < 0x00000008) {
    return false;
  }

  var tags = readTags(file, tiffOffset + firstIFDOffset, exifTags, bigEnd);
  return tags;
}

function readTags(file, dirStart, strings, bigEnd) {
  var entries = file.getUint16(dirStart, !bigEnd);
  var tags = {};

  for (var i = 0; i < entries; i++) {
    var entryOffset = dirStart + i * 12 + 2;
    var tag = strings[file.getUint16(entryOffset, !bigEnd)];

    if (tag) {
      tags[tag] = readTagValue(file, entryOffset, bigEnd);
    }
  }

  return tags;
}

function readTagValue(file, entryOffset, bigEnd) {
  var type = file.getUint16(entryOffset + 2, !bigEnd);
  var numValues = file.getUint32(entryOffset + 4, !bigEnd);

  switch (type) {
    case 3:
      {
        if (numValues === 1) {
          return file.getUint16(entryOffset + 8, !bigEnd);
        }
      }
  }
}

function getStringFromBuffer(buffer, start, length) {
  var outstr = '';

  for (var n = start; n < start + length; n++) {
    outstr += String.fromCharCode(buffer.getUint8(n));
  }

  return outstr;
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
    this._ctx = this._canvas.getContext('2d');
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
          this._ctx.translate(this._canvasWidth / 2, this._canvasHeight / 2);

          this._ctx.rotate(drawAngle);

          this._ctx.drawImage(drawable, -this._canvasHeight / 2, -this._canvasWidth / 2, this._canvasHeight, this._canvasWidth);

          this._ctx.rotate(-drawAngle);

          this._ctx.translate(-this._canvasWidth / 2, -this._canvasHeight / 2);
        } else {
          this._ctx.drawImage(drawable, 0, 0, this._canvasWidth, this._canvasHeight);
        }

        var ctxData = this._ctx.getImageData(this._sx, this._sy, this._width, this._height).data;

        if (doHalfSample) {
          this._grayAndHalfSampleFromCanvasData(ctxData);
        } else {
          this._computeGray(ctxData);
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
      var endIdx = Math.floor(imageData.length / 4);
      var outWidth = this._width / 2;
      var topRowIdx = 0;
      var bottomRowIdx = this._width;
      var outImgIdx = 0;

      while (bottomRowIdx < endIdx) {
        for (var i = 0; i < outWidth; i++) {
          this._data[outImgIdx] = (0.299 * imageData[topRowIdx * 4 + 0] + 0.587 * imageData[topRowIdx * 4 + 1] + 0.114 * imageData[topRowIdx * 4 + 2] + (0.299 * imageData[(topRowIdx + 1) * 4 + 0] + 0.587 * imageData[(topRowIdx + 1) * 4 + 1] + 0.114 * imageData[(topRowIdx + 1) * 4 + 2]) + (0.299 * imageData[bottomRowIdx * 4 + 0] + 0.587 * imageData[bottomRowIdx * 4 + 1] + 0.114 * imageData[bottomRowIdx * 4 + 2]) + (0.299 * imageData[(bottomRowIdx + 1) * 4 + 0] + 0.587 * imageData[(bottomRowIdx + 1) * 4 + 1] + 0.114 * imageData[(bottomRowIdx + 1) * 4 + 2])) / 4;
          outImgIdx++;
          topRowIdx += 2;
          bottomRowIdx += 2;
        }

        topRowIdx += this._width;
        bottomRowIdx += this._width;
      }
    }
  }, {
    key: "_computeGray",
    value: function _computeGray(imageData) {
      var endIdx = Math.floor(imageData.length / 4);

      if (this._streamConfig && this._streamConfig.singleChannel) {
        for (var i = 0; i < endIdx; i++) {
          this._data[i] = imageData[i * 4 + 0];
        }
      } else {
        for (var _i = 0; _i < endIdx; _i++) {
          this._data[_i] = 0.299 * imageData[_i * 4 + 0] + 0.587 * imageData[_i * 4 + 1] + 0.114 * imageData[_i * 4 + 2];
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
        _calculatedWidth = _config.size ? width / height > 1 ? _config.size : Math.floor(width / height * _config.size) : width;
        _calculatedHeight = _config.size ? width / height > 1 ? Math.floor(height / width * _config.size) : _config.size : height;
        _canvasWidth = _calculatedWidth;
        _canvasHeight = _calculatedHeight;
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

          _calculatedWidth = _canvasWidth = _config.size ? width / height > 1 ? _config.size : Math.floor(width / height * _config.size) : width;
          _calculatedHeight = _canvasHeight = _config.size ? width / height > 1 ? Math.floor(height / width * _config.size) : _config.size : height;
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

      that.setInputStream = function (stream) {
        _config = stream;

        if (stream.sequence === false) {
          baseUrl = stream.src;
          size = 1;
        } else {
          baseUrl = stream.src;
          size = stream.length;
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

  if (_config.debug && _config.debug.showCanvas) {
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
    if (_config.debug && _config.debug.showPatches) {
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
  var matrix = Float32Array.from([cos, sin, -sin, cos]);
  var context = _canvasContainer.ctx.binary; // iterate over patches and rotate by angle

  patches.forEach(function (patch) {
    for (var j = 0; j < 4; j++) {
      patch.box[j] = transformWithMatrix(patch.box[j], matrix);
    }

    if (_config.debug && _config.debug.boxFromPatches.showTransformed) {
      _common_image_debug__WEBPACK_IMPORTED_MODULE_2__["ImageDebug"].drawPath(patch.box, {
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

  patches.forEach(function (patch) {
    patch.box.forEach(function (vertex) {
      if (vertex.x < minX) {
        minX = vertex.x;
      }

      if (vertex.x > maxX) {
        maxX = vertex.x;
      }

      if (vertex.y < minY) {
        minY = vertex.y;
      }

      if (vertex.y > maxY) {
        maxY = vertex.y;
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

  if (_config.debug && _config.debug.boxFromPatches.showTransformedBox) {
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

  if (_config.debug && _config.debug.boxFromPatches.showBB) {
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

  return Float32Array.from([a3 / determinant, -a1 / determinant, -a2 / determinant, a0 / determinant]);
}
/**
 * Transforms the vector with a matrix
 * @param { x, y } vector to transform
 * @param matric matrix to transform with
 * @returns the transformed vector
 */


function transformWithMatrix(_ref, matrix) {
  var x = _ref.x,
      y = _ref.y;
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

  if (_config.debug && _config.debug.showCanvas) {
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

      if (_config.debug && _config.debug.showLabels) {
        _labelImageWrapper.overlay(_canvasContainer.dom.binary, Math.floor(360 / rasterResult.count), x, y);
      } // calculate moments from the skeletonized patch


      var moments = _labelImageWrapper.moments(rasterResult.count); // extract eligible patches


      var patch = describePatch(moments, j * _numPatches.x + i, x, y);

      if (patch) {
        patchesFound.push(patch);

        if (_config.debug && _config.debug.showFoundPatches) {
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
  var labelHist = [];

  for (var _i = 0; _i < maxLabel; _i++) {
    labelHist.push(0);
  }

  var i = _patchLabelGrid.data.length;

  while (i--) {
    if (_patchLabelGrid.data[i] > 0) {
      labelHist[_patchLabelGrid.data[i] - 1]++;
    }
  }

  labelHist = labelHist.map(function (val, index) {
    return {
      val: val,
      label: index + 1
    };
  });
  labelHist.sort(function (a, b) {
    return b.val - a.val;
  }); // extract top areas with at least 6 patches present

  var topLabels = labelHist.filter(function (el) {
    return el.val >= 5;
  });
  return topLabels;
}
/**
 *
 */


function findBoxes(topLabels, maxLabel) {
  var boxes = [];
  var hsv = [0, 1, 1];
  var rgb = [0, 0, 0];

  for (var i = 0; i < topLabels.length; i++) {
    var patches = [];

    for (var sum = _patchLabelGrid.data.length; sum--;) {
      if (_patchLabelGrid.data[sum] === topLabels[i].label) {
        var patch = _imageToPatchGrid.data[sum];
        patches.push(patch);
      }
    }

    var box = boxFromPatches(patches);

    if (box) {
      boxes.push(box); // draw patch-labels if requested

      if (_config.debug && _config.debug.showRemainingPatchLabels) {
        (function () {
          hsv[0] = topLabels[i].label / (maxLabel + 1) * 360;
          Object(_common_cv_utils__WEBPACK_IMPORTED_MODULE_1__["hsv2rgb"])(hsv, rgb);
          var context = _canvasContainer.ctx.binary;
          var style = {
            color: 'rgb(' + rgb.join(',') + ')',
            lineWidth: 2
          };
          patches.forEach(function (patch) {
            return _common_image_debug__WEBPACK_IMPORTED_MODULE_2__["ImageDebug"].drawRect(patch.pos, _subImageWrapper.size, context, style);
          });
        })();
      }
    }
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

;
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
  var result = topCluster.item.points.map(function (point) {
    return point.point;
  });
  return result;
}

function skeletonize(x, y) {
  _binaryImageWrapper.subImageAsCopy(_subImageWrapper, x, y);

  _skeletonizer.skeletonize(); // Show skeleton if requested


  if (_config.debug && _config.debug.showSkeleton) {
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
      var length = matchingMoments.length; // Only two of the moments are allowed not to fit into the equation

      if (length > 1 && length >= eligibleMoments.length / 4 * 3 && length > moments.length / 4) {
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


  if (_config.debug && _config.debug.showPatchLabels) {
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
    var sample = config.halfSample ? 0.5 : 1; // calculate width and height based on area

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
      x: Math.floor(width * sample),
      y: Math.floor(height * sample)
    };
    var patchSize = Object(_common_cv_utils__WEBPACK_IMPORTED_MODULE_1__["calculatePatchSize"])(config.patchSize, size);

    if (true) {
      console.log('Patch-Size:', JSON.stringify(patchSize));
    }

    inputStream.setWidth(Math.floor(Math.floor(size.x / patchSize.x) * (1 / sample) * patchSize.x));
    inputStream.setHeight(Math.floor(Math.floor(size.y / patchSize.y) * (1 / sample) * patchSize.y));

    if (inputStream.getWidth() % patchSize.x === 0 && inputStream.getHeight() % patchSize.y === 0) {
      return true;
    }

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
;

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
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./config/config */ "./src/config/config.js");
/* harmony import */ var _decoder_barcode_decoder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./decoder/barcode_decoder */ "./src/decoder/barcode_decoder.js");
/* harmony import */ var _input_camera_access__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./input/camera_access */ "./src/input/camera_access.js");
/* harmony import */ var _locator_barcode_locator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./locator/barcode_locator */ "./src/locator/barcode_locator.js");
/* harmony import */ var Input_frame_grabber__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! Input/frame_grabber */ "./src/input/frame_grabber.js");
/* harmony import */ var Input_input_stream__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! Input/input_stream */ "./src/input/input_stream.js");













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
    _inputStream = Input_input_stream__WEBPACK_IMPORTED_MODULE_11__["InputStream"].createVideoStream(video);
  } else if (_config.inputStream.type === 'ImageStream') {
    _inputStream = Input_input_stream__WEBPACK_IMPORTED_MODULE_11__["InputStream"].createImageStream();
  } else if (_config.inputStream.type === 'LiveStream') {
    var viewport = getViewPort();

    if (viewport) {
      video = viewport.querySelector('video');

      if (!video) {
        video = document.createElement('video');
        viewport.appendChild(video);
      }
    }

    _inputStream = Input_input_stream__WEBPACK_IMPORTED_MODULE_11__["InputStream"].createLiveStream(video);
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
  _locator_barcode_locator__WEBPACK_IMPORTED_MODULE_9__["default"].checkImageConstraints(_inputStream, _config.locator);
  initCanvas(_config);
  _framegrabber = new Input_frame_grabber__WEBPACK_IMPORTED_MODULE_10__["FrameGrabber"](_inputStream, _canvasContainer.dom.image);
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
    var $viewport = getViewPort();
    _canvasContainer.dom.image = document.querySelector('canvas.imgBuffer');

    if (!_canvasContainer.dom.image) {
      _canvasContainer.dom.image = document.createElement('canvas');
      _canvasContainer.dom.image.className = 'imgBuffer';

      if ($viewport && _config.inputStream.type === 'ImageStream') {
        $viewport.appendChild(_canvasContainer.dom.image);
      }
    }

    _canvasContainer.ctx.image = _canvasContainer.dom.image.getContext('2d');
    _canvasContainer.dom.image.width = _inputStream.getCanvasWidth();
    _canvasContainer.dom.image.height = _inputStream.getCanvasHeight();
    _canvasContainer.dom.overlay = document.querySelector('canvas.drawingBuffer');

    if (!_canvasContainer.dom.overlay) {
      _canvasContainer.dom.overlay = document.createElement('canvas');
      _canvasContainer.dom.overlay.className = 'drawingBuffer';

      if ($viewport) {
        $viewport.appendChild(_canvasContainer.dom.overlay);
      }

      var clearFix = document.createElement('br');
      clearFix.setAttribute('clear', 'all');

      if ($viewport) {
        $viewport.appendChild(clearFix);
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
  _locator_barcode_locator__WEBPACK_IMPORTED_MODULE_9__["default"].init(_inputImageWrapper, _config.locator);
}

function getBoundingBoxes() {
  if (_config.locate) {
    return _locator_barcode_locator__WEBPACK_IMPORTED_MODULE_9__["default"].locate();
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
    result.barcodes.filter(function (barcode) {
      return barcode.codeResult;
    }).forEach(function (barcode) {
      return addResult(barcode, imageData, canvasWidth, canvasHeight);
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

function initWorker(cb) {
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

      return cb(workerThread);
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

function configForWorker(config) {
  return Object(_common_merge__WEBPACK_IMPORTED_MODULE_5__["merge"])(config, {
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
      var config = e.data.config;
      config.numOfWorkers = 0;
      imageWrapper = new Quagga.ImageWrapper({
        x: e.data.size.x,
        y: e.data.size.y
      }, new Uint8Array(e.data.imageData));
      Quagga.init(config, ready, imageWrapper);
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
    _workerPool.forEach(function (workerThread) {
      return workerThread.worker.postMessage({
        cmd: 'setReaders',
        readers: readers
      });
    });
  }
}

function adjustWorkerPool(capacity, cb) {
  var increaseBy = capacity - _workerPool.length;

  if (increaseBy === 0) {
    return cb && cb();
  }

  if (increaseBy < 0) {
    var workersToTerminate = _workerPool.slice(increaseBy);

    workersToTerminate.forEach(function (workerThread) {
      workerThread.worker.terminate();

      if (true) {
        console.log('Worker terminated!');
      }
    });
    _workerPool = _workerPool.slice(0, increaseBy);
    return cb && cb();
  } else {
    var workerInitialized = function workerInitialized(workerThread) {
      _workerPool.push(workerThread);

      if (_workerPool.length >= capacity) {
        cb && cb();
      }
    };

    for (var i = 0; i < increaseBy; i++) {
      initWorker(workerInitialized);
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = ({
  init: function init(config, cb, imageWrapper) {
    _config = Object(_common_merge__WEBPACK_IMPORTED_MODULE_5__["merge"])(_config_config__WEBPACK_IMPORTED_MODULE_6__["default"], config);

    if (imageWrapper) {
      _onUIThread = false;
      initializeData(imageWrapper);
      return cb();
    } else {
      initInputStream(cb);
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
  decodeSingle: function decodeSingle(config, resultCallback) {
    var _this = this;

    config = Object(_common_merge__WEBPACK_IMPORTED_MODULE_5__["merge"])({
      inputStream: {
        type: 'ImageStream',
        sequence: false,
        size: 800,
        src: config.src
      },
      numOfWorkers:  true && config.debug ? 0 : 1,
      locator: {
        halfSample: false
      }
    }, config);
    this.init(config, function () {
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

        narrowBarWidth = Math.floor((startInfo.end - startInfo.start) / startPatternLength);
        var leadingWhitespaceStart = startInfo.start - narrowBarWidth * 5;

        if (leadingWhitespaceStart >= 0) {
          if (this._matchRange(leadingWhitespaceStart, startInfo.start, 0)) {
            return startInfo;
          }
        }

        offset = startInfo.end;
        startInfo = null;
      }
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

      if (bestMatch.error < this.AVERAGE_CODE_ERROR) {
        return bestMatch;
      }
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
      var result;
      this._row = pattern;
      result = this._decode();

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

            if (CODE_PATTERN[bestMatch.code]) {
              bestMatch.correction.bar = this.calculateCorrection(CODE_PATTERN[bestMatch.code], counter, MODULE_INDICES.bar);
              bestMatch.correction.space = this.calculateCorrection(CODE_PATTERN[bestMatch.code], counter, MODULE_INDICES.space);
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
              whiteSpaceMustStart = Math.floor(Math.max(0, patternStart - (i - patternStart) / 4));

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
              whiteSpaceMustStart = Math.floor(Math.max(0, patternStart - (i - patternStart) / 4));

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







function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

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
        var ext = this._decodeExtensions(code.end);

        if (!ext) {
          return null;
        }

        var lastCode = ext.decodedCodes[ext.decodedCodes.length - 1];
        var endInfo = {
          start: lastCode.start + ((lastCode.end - lastCode.start) / 2 | 0),
          end: lastCode.end
        };

        if (!this._verifyTrailingWhitespace(endInfo)) {
          return null;
        }

        resultInfo = {
          supplement: ext,
          code: result.join('') + ext.code
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

      var result;

      if (startInfo === null) {
        return null;
      }

      for (var i = 0; i < this.supplements.length; i++) {
        result = this.supplements[i].decode(this._row, startInfo.end);

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
      var narrowBarWidth = 1;

      while (!startInfo) {
        startInfo = this._findPattern(START_PATTERN, offset, false, true);

        if (!startInfo) {
          return null;
        }

        narrowBarWidth = Math.floor((startInfo.end - startInfo.start) / 4);
        var leadingWhitespaceStart = startInfo.start - narrowBarWidth * 10;

        if (leadingWhitespaceStart >= 0) {
          if (this._matchRange(leadingWhitespaceStart, startInfo.start, 0)) {
            return startInfo;
          }
        }

        offset = startInfo.end;
        startInfo = null;
      }
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
      var epsilon = this.AVERAGE_CODE_ERROR;
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

      if (bestMatch.error < epsilon) {
        return bestMatch;
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9RdWFnZ2Evd2VicGFjay9teU1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vUXVhZ2dhL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1F1YWdnYS8vVXNlcnMvYWRvbXJhdGNoZXYvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy9Vc2Vycy9hZG9tcmF0Y2hldi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy9Vc2Vycy9hZG9tcmF0Y2hldi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yLmpzIiwid2VicGFjazovL1F1YWdnYS8vVXNlcnMvYWRvbXJhdGNoZXYvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy9Vc2Vycy9hZG9tcmF0Y2hldi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly9RdWFnZ2EvL1VzZXJzL2Fkb21yYXRjaGV2L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL1F1YWdnYS8vVXNlcnMvYWRvbXJhdGNoZXYvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0LmpzIiwid2VicGFjazovL1F1YWdnYS8vVXNlcnMvYWRvbXJhdGNoZXYvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy9Vc2Vycy9hZG9tcmF0Y2hldi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly9RdWFnZ2EvL1VzZXJzL2Fkb21yYXRjaGV2L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9RdWFnZ2EvL1VzZXJzL2Fkb21yYXRjaGV2L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL1F1YWdnYS8vVXNlcnMvYWRvbXJhdGNoZXYvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly9RdWFnZ2EvL1VzZXJzL2Fkb21yYXRjaGV2L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL1F1YWdnYS8vVXNlcnMvYWRvbXJhdGNoZXYvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc3VwZXJQcm9wQmFzZS5qcyIsIndlYnBhY2s6Ly9RdWFnZ2EvL1VzZXJzL2Fkb21yYXRjaGV2L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovL1F1YWdnYS8vVXNlcnMvYWRvbXJhdGNoZXYvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL1F1YWdnYS8vVXNlcnMvYWRvbXJhdGNoZXYvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwid2VicGFjazovL1F1YWdnYS8vVXNlcnMvYWRvbXJhdGNoZXYvbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS1tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy9Vc2Vycy9hZG9tcmF0Y2hldi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovL1F1YWdnYS8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL2FuYWx5dGljcy9yZXN1bHRfY29sbGVjdG9yLmpzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9jb21tb24vY2x1c3Rlci5qcyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvY29tbW9uL2N2X3V0aWxzLmpzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9jb21tb24vZXZlbnRzLmpzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9jb21tb24vaW1hZ2VfZGVidWcuanMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL2NvbW1vbi9pbWFnZV93cmFwcGVyLmpzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9jb21tb24vbWVkaWEtZGV2aWNlcy5qcyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvY29tbW9uL21lcmdlLmpzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9jb21tb24vdHlwZWRlZnMuanMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL2NvbmZpZy9jb25maWcuZGV2LmpzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9jb25maWcvY29uZmlnLmpzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9kZWNvZGVyL2JhcmNvZGVfZGVjb2Rlci5qcyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvZGVjb2Rlci9icmVzZW5oYW0uanMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL2lucHV0L2NhbWVyYV9hY2Nlc3MuanMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL2lucHV0L2V4aWZfaGVscGVyLmpzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9pbnB1dC9mcmFtZV9ncmFiYmVyLmpzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9pbnB1dC9pbWFnZV9sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL2lucHV0L2lucHV0X3N0cmVhbS5qcyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvbG9jYXRvci9iYXJjb2RlX2xvY2F0b3IuanMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL2xvY2F0b3IvcmFzdGVyaXplci5qcyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvbG9jYXRvci9za2VsZXRvbml6ZXIuanMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL2xvY2F0b3IvdHJhY2VyLmpzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9xdWFnZ2EuanMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL3JlYWRlci8yb2Y1X3JlYWRlci5qcyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvcmVhZGVyL2JhcmNvZGVfcmVhZGVyLmpzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9yZWFkZXIvY29kYWJhcl9yZWFkZXIuanMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL3JlYWRlci9jb2RlXzEyOF9yZWFkZXIuanMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL3JlYWRlci9jb2RlXzM5X3JlYWRlci5qcyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvcmVhZGVyL2NvZGVfMzlfdmluX3JlYWRlci5qcyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvcmVhZGVyL2NvZGVfOTNfcmVhZGVyLmpzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9yZWFkZXIvZWFuXzJfcmVhZGVyLmpzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9yZWFkZXIvZWFuXzVfcmVhZGVyLmpzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9yZWFkZXIvZWFuXzhfcmVhZGVyLmpzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9yZWFkZXIvZWFuX3JlYWRlci5qcyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvcmVhZGVyL2kyb2Y1X3JlYWRlci5qcyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvcmVhZGVyL3VwY19lX3JlYWRlci5qcyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvcmVhZGVyL3VwY19yZWFkZXIuanMiXSwibmFtZXMiOlsiUmVzdWx0Q29sbGVjdG9yIiwiY29uZmlnIiwiX2NvbmZpZyIsIl9jYW52YXMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJfY29udGV4dCIsImdldENvbnRleHQiLCJfcmVzdWx0cyIsIl9jYXBhY2l0eSIsImNhcGFjaXR5IiwiX2NhcHR1cmUiLCJjYXB0dXJlIiwiY29kZVJlc3VsdCIsImxpc3QiLCJzb21lIiwiaXRlbSIsIk9iamVjdCIsImtleXMiLCJldmVyeSIsImtleSIsImZpbHRlciIsIl9jb250YWlucyIsImJsYWNrbGlzdCIsIl9wYXNzZXNGaWx0ZXIiLCJkYXRhIiwiaW1hZ2VXaWR0aCIsImltYWdlSGVpZ2h0IiwiX21hdGNoZXNDb25zdHJhaW50cyIsInJlc3VsdCIsIndpZHRoIiwiaGVpZ2h0IiwiSW1hZ2VEZWJ1ZyIsImRyYXdJbWFnZSIsImZyYW1lIiwidG9EYXRhVVJMIiwicHVzaCIsIkNsdXN0ZXIiLCJ0aHJlc2hvbGQiLCJwb2ludCIsIl90aHJlc2hvbGQiLCJfcG9pbnRzIiwiX2NlbnRlciIsInJhZCIsIngiLCJ5IiwiX3BvaW50TWFwIiwiYWRkIiwiaWQiLCJyZWR1Y2UiLCJzdW0iLCJwIiwibGVuZ3RoIiwiTWF0aCIsImNvcyIsInNpbiIsInNpbWlsYXJpdHkiLCJhYnMiLCJfY29tcHV0ZUhpc3RvZ3JhbSIsImltYWdlV3JhcHBlciIsImJpdHNQZXJQaXhlbCIsImltYWdlRGF0YSIsImJpdFNoaWZ0IiwiYnVja2V0Q291bnQiLCJoaXN0b2dyYW0iLCJJbnQzMkFycmF5IiwiaSIsIl9kZXRlcm1pbmVPdHN1VGhyZXNob2xkIiwiaGlzdCIsInZldCIsIm1heCIsInB4IiwiaW5pdCIsImVuZCIsIm14IiwiayIsInAxIiwicDIiLCJwMTIiLCJtMSIsIm0yIiwibTEyIiwibWF4SW5kZXgiLCJpbmRleCIsImFycmF5Iiwib3RzdVRocmVzaG9sZCIsInRhcmdldFdyYXBwZXIiLCJ0YXJnZXREYXRhIiwiZm9yRWFjaCIsInZhbHVlIiwiaGFsZlNhbXBsZSIsImluSW1nV3JhcHBlciIsIm91dEltZ1dyYXBwZXIiLCJpbkltZyIsImluV2lkdGgiLCJzaXplIiwib3V0SW1nIiwiZW5kSW5kZXgiLCJvdXRXaWR0aCIsInRvcFJvd0luZGV4IiwiYm90dG9tUm93SW5kZXgiLCJvdXRJbWdJbmRleCIsImhzdjJyZ2IiLCJoc3YiLCJyZ2IiLCJoIiwicyIsInYiLCJjIiwibSIsInIiLCJnIiwiYiIsIl9jb21wdXRlRGl2aXNvcnMiLCJuIiwibGFyZ2VEaXZpc29ycyIsImRpdmlzb3JzIiwiZGl2aXNvciIsInVuc2hpZnQiLCJmbG9vciIsImNvbmNhdCIsIl9jb21wdXRlQ29tbW9uRGl2aXNvcnMiLCJtaW4iLCJsYXJnZURpdmlzb3IiLCJjYWxjdWxhdGVQYXRjaFNpemUiLCJwYXRjaFNpemUiLCJpbWdTaXplIiwid2lkZVNpZGUiLCJuck9mUGF0Y2hlc0xpc3QiLCJuck9mUGF0Y2hlc01hcCIsInNtYWxsIiwibWVkaXVtIiwibGFyZ2UiLCJuck9mUGF0Y2hlc0luZGV4IiwibnJPZlBhdGNoZXMiLCJkZXNpcmVkUGF0Y2hTaXplIiwiZmluZFBhdGNoU2l6ZUZvckRpdmlzb3JzIiwiZm91bmQiLCJvcHRpbWFsUGF0Y2hTaXplIiwiX3BhcnNlQ1NTRGltZW5zaW9uVmFsdWVzIiwiZGltZW5zaW9uIiwicGFyc2VGbG9hdCIsInVuaXQiLCJpbmRleE9mIiwiX2RpbWVuc2lvbnNDb252ZXJ0ZXJzIiwidG9wIiwiY29udGV4dCIsInJpZ2h0IiwiYm90dG9tIiwibGVmdCIsImNvbXB1dGVJbWFnZUFyZWEiLCJpbnB1dFdpZHRoIiwiaW5wdXRIZWlnaHQiLCJhcmVhIiwicGFyc2VkQXJlYSIsInBhcnNlZCIsImNhbGN1bGF0ZWQiLCJzeCIsInN5Iiwic3ciLCJzaCIsImV2ZW50cyIsImdldEV2ZW50IiwiZXZlbnROYW1lIiwic3Vic2NyaWJlcnMiLCJjbGVhckV2ZW50cyIsInB1Ymxpc2hTdWJzY3JpcHRpb24iLCJzdWJzY3JpcHRpb24iLCJhc3luYyIsInNldFRpbWVvdXQiLCJjYWxsYmFjayIsInN1YnNjcmliZSIsImV2ZW50IiwicHVibGlzaCIsInN1YnNjcmliZXIiLCJvbmNlIiwidW5zdWJzY3JpYmUiLCJwb3MiLCJzdHlsZSIsInN0cm9rZVN0eWxlIiwiY29sb3IiLCJmaWxsU3R5bGUiLCJsaW5lV2lkdGgiLCJiZWdpblBhdGgiLCJzdHJva2VSZWN0IiwicGF0aCIsImRlZiIsIm1vdmVUbyIsImoiLCJsaW5lVG8iLCJjbG9zZVBhdGgiLCJzdHJva2UiLCJjYW52YXNEYXRhIiwiZ2V0SW1hZ2VEYXRhIiwiaW1hZ2VEYXRhUG9zIiwiY2FudmFzRGF0YVBvcyIsInB1dEltYWdlRGF0YSIsIkltYWdlV3JhcHBlciIsIkFycmF5VHlwZSIsImluaXRpYWxpemUiLCJVaW50OEFycmF5IiwiZmlsbCIsImltZ1JlZiIsImJvcmRlciIsImZyb21YIiwiZnJvbVkiLCJzaXplWSIsInNpemVYIiwibGFiZWxDb3VudCIsImxhYmVsU3VtIiwibTAwIiwibTAxIiwibTEwIiwibTExIiwibTAyIiwibTIwIiwidGhldGEiLCJ5c3EiLCJ2YWwiLCJsYWJlbCIsIlBJIiwiUElfNCIsImlzTmFOIiwieF8iLCJ5XyIsIm11MTEiLCJtdTAyIiwibXUyMCIsInRtcCIsImF0YW4iLCJjYW52YXMiLCJzY2FsZSIsImN1cnJlbnQiLCJwaXhlbCIsImdldCIsIndoaXRlUmdiIiwiYmxhY2tSZ2IiLCJlbnVtZXJhdGVEZXZpY2VzIiwibmF2aWdhdG9yIiwibWVkaWFEZXZpY2VzIiwiUHJvbWlzZSIsInJlamVjdCIsIkVycm9yIiwiZ2V0VXNlck1lZGlhIiwiY29uc3RyYWludHMiLCJtZXJnZSIsImlzT2JqZWN0Iiwib2JqIiwib2JqZWN0cyIsInByZXYiLCJwVmFsIiwib1ZhbCIsIkFycmF5IiwiaXNBcnJheSIsImltdWwiLCJhIiwiYWgiLCJhbCIsImJoIiwiYmwiLCJhc3NpZ24iLCJ0YXJnZXQiLCJUeXBlRXJyb3IiLCJ0byIsImFyZ3VtZW50cyIsIm5leHRTb3VyY2UiLCJuZXh0S2V5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwibW9kdWxlIiwiZXhwb3J0cyIsImlucHV0U3RyZWFtIiwibmFtZSIsInR5cGUiLCJmYWNpbmdNb2RlIiwic2luZ2xlQ2hhbm5lbCIsImxvY2F0ZSIsIm51bU9mV29ya2VycyIsImRlY29kZXIiLCJyZWFkZXJzIiwiZGVidWciLCJkcmF3Qm91bmRpbmdCb3giLCJzaG93RnJlcXVlbmN5IiwiZHJhd1NjYW5saW5lIiwic2hvd1BhdHRlcm4iLCJsb2NhdG9yIiwic2hvd0NhbnZhcyIsInNob3dQYXRjaGVzIiwic2hvd0ZvdW5kUGF0Y2hlcyIsInNob3dTa2VsZXRvbiIsInNob3dMYWJlbHMiLCJzaG93UGF0Y2hMYWJlbHMiLCJzaG93UmVtYWluaW5nUGF0Y2hMYWJlbHMiLCJib3hGcm9tUGF0Y2hlcyIsInNob3dUcmFuc2Zvcm1lZCIsInNob3dUcmFuc2Zvcm1lZEJveCIsInNob3dCQiIsIkVOViIsInJlcXVpcmUiLCJSRUFERVJTIiwiY29kZV8xMjhfcmVhZGVyIiwiQ29kZTEyOFJlYWRlciIsImVhbl9yZWFkZXIiLCJFQU5SZWFkZXIiLCJlYW5fNV9yZWFkZXIiLCJFQU41UmVhZGVyIiwiZWFuXzJfcmVhZGVyIiwiRUFOMlJlYWRlciIsImVhbl84X3JlYWRlciIsIkVBTjhSZWFkZXIiLCJjb2RlXzM5X3JlYWRlciIsIkNvZGUzOVJlYWRlciIsImNvZGVfMzlfdmluX3JlYWRlciIsIkNvZGUzOVZJTlJlYWRlciIsImNvZGFiYXJfcmVhZGVyIiwiQ29kYWJhclJlYWRlciIsInVwY19yZWFkZXIiLCJVUENSZWFkZXIiLCJ1cGNfZV9yZWFkZXIiLCJVUENFUmVhZGVyIiwiaTJvZjVfcmVhZGVyIiwiSTJvZjVSZWFkZXIiLCJUd29PZkZpdmVSZWFkZXIiLCJjb2RlXzkzX3JlYWRlciIsIkNvZGU5M1JlYWRlciIsIkJhcmNvZGVEZWNvZGVyIiwiaW5wdXRJbWFnZVdyYXBwZXIiLCJfaW5wdXRJbWFnZVdyYXBwZXIiLCJjdHgiLCJmcmVxdWVuY3kiLCJwYXR0ZXJuIiwib3ZlcmxheSIsImRvbSIsIl9iYXJjb2RlUmVhZGVycyIsIl9pbml0Q2FudmFzIiwiX2luaXRSZWFkZXJzIiwiX2luaXRDb25maWciLCIkZGVidWciLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NOYW1lIiwiYXBwZW5kQ2hpbGQiLCJyZWFkZXJDb25maWciLCJyZWFkZXIiLCJjb25maWd1cmF0aW9uIiwic3VwcGxlbWVudHMiLCJmb3JtYXQiLCJjb25zb2xlIiwibG9nIiwibWFwIiwic3VwcGxlbWVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJGT1JNQVQiLCJkaXNwbGF5IiwibGluZSIsImFuZ2xlIiwiZXh0ZW5kTGluZSIsImFtb3VudCIsImV4dGVuc2lvbiIsImxpbmVMZW5ndGgiLCJzcXJ0IiwicG93IiwiZXh0ZW5zaW9uTGVuZ3RoIiwiaW5JbWFnZVdpdGhCb3JkZXIiLCJib3giLCJiYXJjb2RlTGluZSIsIkJyZXNlbmhhbSIsImdldEJhcmNvZGVMaW5lIiwiZHJhd1BhdGgiLCJwcmludEZyZXF1ZW5jeSIsInRvQmluYXJ5TGluZSIsInByaW50UGF0dGVybiIsImRlY29kZVBhdHRlcm4iLCJsaW5lQW5nbGUiLCJzaWRlTGVuZ3RoIiwic2xpY2VzIiwieGRpciIsInlkaXIiLCJkaXIiLCJfdHJ5RGVjb2RlIiwiX2dldExpbmUiLCJhdGFuMiIsIl9nZXRFeHRlbmRlZExpbmUiLCJfdHJ5RGVjb2RlQnJ1dGVGb3JjZSIsImJveGVzIiwiYmFyY29kZXMiLCJtdWx0aXBsZSIsImRlY29kZUZyb21Cb3VuZGluZ0JveCIsIlNsb3BlIiwiRElSIiwiVVAiLCJET1dOIiwieDAiLCJ5MCIsIngxIiwieTEiLCJzdGVlcCIsInJlYWQiLCJkZWx0YXgiLCJkZWx0YXkiLCJlcnJvciIsInlzdGVwIiwiY2VudGVyIiwiZXh0cmVtYSIsInJUaHJlc2hvbGQiLCJjdXJyZW50RGlyIiwic2xvcGUiLCJzbG9wZTIiLCJmaWxsQ29sb3IiLCJmaWxsUmVjdCIsInN0cmVhbVJlZiIsIndhaXRGb3JWaWRlbyIsInZpZGVvIiwicmVzb2x2ZSIsImF0dGVtcHRzIiwiY2hlY2tWaWRlbyIsInZpZGVvV2lkdGgiLCJ2aWRlb0hlaWdodCIsIndpbmRvdyIsImluaXRDYW1lcmEiLCJ0aGVuIiwic3RyZWFtIiwic2V0QXR0cmlidXRlIiwic3JjT2JqZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInBsYXkiLCJiaW5kIiwiZGVwcmVjYXRlZENvbnN0cmFpbnRzIiwidmlkZW9Db25zdHJhaW50cyIsImFzcGVjdFJhdGlvIiwiZGV2aWNlSWQiLCJtaW5Bc3BlY3RSYXRpbyIsImZhY2luZyIsInBpY2tDb25zdHJhaW50cyIsIm5vcm1hbGl6ZWRDb25zdHJhaW50cyIsImF1ZGlvIiwiZW51bWVyYXRlVmlkZW9EZXZpY2VzIiwiZGV2aWNlcyIsImRldmljZSIsImtpbmQiLCJnZXRBY3RpdmVUcmFjayIsInRyYWNrcyIsImdldFZpZGVvVHJhY2tzIiwicmVxdWVzdCIsInJlbGVhc2UiLCJzdG9wIiwiZ2V0QWN0aXZlU3RyZWFtTGFiZWwiLCJ0cmFjayIsIkV4aWZUYWdzIiwiQXZhaWxhYmxlVGFncyIsImZpbmRUYWdzSW5PYmplY3RVUkwiLCJzcmMiLCJ0YWdzIiwidGVzdCIsIm9iamVjdFVSTFRvQmxvYiIsImJ1ZmZlciIsImZpbmRUYWdzSW5CdWZmZXIiLCJmaWxlIiwic2VsZWN0ZWRUYWdzIiwiZGF0YVZpZXciLCJEYXRhVmlldyIsImJ5dGVMZW5ndGgiLCJleGlmVGFncyIsInNlbGVjdGVkVGFnIiwiZXhpZlRhZyIsImZpbmQiLCJ0YWciLCJvZmZzZXQiLCJnZXRVaW50OCIsIm1hcmtlciIsInJlYWRFWElGRGF0YSIsImdldFVpbnQxNiIsInVybCIsImZldGNoIiwicmVzcG9uc2UiLCJvayIsImFycmF5QnVmZmVyIiwic3RhdHVzIiwic3RhcnQiLCJnZXRTdHJpbmdGcm9tQnVmZmVyIiwidGlmZk9mZnNldCIsImJpZ0VuZCIsImZpcnN0SUZET2Zmc2V0IiwiZ2V0VWludDMyIiwicmVhZFRhZ3MiLCJkaXJTdGFydCIsInN0cmluZ3MiLCJlbnRyaWVzIiwiZW50cnlPZmZzZXQiLCJyZWFkVGFnVmFsdWUiLCJudW1WYWx1ZXMiLCJvdXRzdHIiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJRVUFURVJfQ0lSQ0xFIiwiRnJhbWVHcmFiYmVyIiwiX2lucHV0U3RyZWFtIiwiX3N0cmVhbUNvbmZpZyIsImdldENvbmZpZyIsIl9jYW52YXNXaWR0aCIsImdldENhbnZhc1dpZHRoIiwiX2NhbnZhc0hlaWdodCIsImdldENhbnZhc0hlaWdodCIsIl93aWR0aCIsImdldFdpZHRoIiwiX2hlaWdodCIsImdldEhlaWdodCIsInRvcFJpZ2h0IiwiZ2V0VG9wUmlnaHQiLCJfc3giLCJfc3kiLCJfY3R4IiwiX2RhdGEiLCJ2aWRlb1NpemUiLCJnZXRSZWFsV2lkdGgiLCJnZXRSZWFsSGVpZ2h0IiwiY2FudmFzU2l6ZSIsImRvSGFsZlNhbXBsZSIsImdldEZyYW1lIiwiZHJhd2FibGUiLCJkcmF3QW5nbGUiLCJfYWRqdXN0Q2FudmFzU2l6ZSIsImltYWdlIiwib3JpZW50YXRpb24iLCJ0cmFuc2xhdGUiLCJyb3RhdGUiLCJjdHhEYXRhIiwiX2dyYXlBbmRIYWxmU2FtcGxlRnJvbUNhbnZhc0RhdGEiLCJfY29tcHV0ZUdyYXkiLCJlbmRJZHgiLCJ0b3BSb3dJZHgiLCJib3R0b21Sb3dJZHgiLCJvdXRJbWdJZHgiLCJJbWFnZUxvYWRlciIsImRpcmVjdG9yeSIsInNlcXVlbmNlIiwibG9hZGVkIiwibG9hZGVkSW1hZ2UiLCJub3RMb2FkZWRJbWFnZXMiLCJodG1sSW1hZ2VzQXJyYXkiLCJub3RMb2FkZWQiLCJzcGxpY2UiLCJodG1sSW1hZ2VzU3JjQXJyYXkiLCJpbWFnZU5hbWUiLCJzdWJzdHIiLCJsYXN0SW5kZXhPZiIsImZpcnN0SW1hZ2UiLCJudW0iLCJzbGljZSIsImFkZEltYWdlIiwiSW1hZ2UiLCJvbmxvYWQiLCJJbnB1dFN0cmVhbSIsInRoYXQiLCJfZXZlbnROYW1lcyIsIl9ldmVudEhhbmRsZXJzIiwiX2NhbGN1bGF0ZWRXaWR0aCIsIl9jYWxjdWxhdGVkSGVpZ2h0IiwiX3RvcFJpZ2h0IiwiaW5pdFNpemUiLCJzZXRXaWR0aCIsInNldEhlaWdodCIsInNldElucHV0U3RyZWFtIiwiZW5kZWQiLCJwYXVzZSIsInNldEN1cnJlbnRUaW1lIiwidGltZSIsImN1cnJlbnRUaW1lIiwiZiIsImJvb2wiLCJjbGVhckV2ZW50SGFuZGxlcnMiLCJoYW5kbGVycyIsImhhbmRsZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidHJpZ2dlciIsImFyZ3MiLCJhcHBseSIsInNldFRvcFJpZ2h0Iiwic2V0Q2FudmFzU2l6ZSIsImNyZWF0ZVZpZGVvU3RyZWFtIiwiZnJhbWVJbmRleCIsInBhdXNlZCIsIl9pbWFnZXMiLCJiYXNlVXJsIiwibG9hZEltYWdlcyIsImxvYWQiLCJpbWFnZXMiLCJwdWJsaXNoRXZlbnQiLCJuZXdXaWR0aCIsIm5ld0hlaWdodCIsInciLCJfY3VycmVudEltYWdlV3JhcHBlciIsIl9za2VsSW1hZ2VXcmFwcGVyIiwiX3N1YkltYWdlV3JhcHBlciIsIl9sYWJlbEltYWdlV3JhcHBlciIsIl9wYXRjaEdyaWQiLCJfcGF0Y2hMYWJlbEdyaWQiLCJfaW1hZ2VUb1BhdGNoR3JpZCIsIl9iaW5hcnlJbWFnZVdyYXBwZXIiLCJfcGF0Y2hTaXplIiwiX2NhbnZhc0NvbnRhaW5lciIsImJpbmFyeSIsIl9udW1QYXRjaGVzIiwiX3NrZWxldG9uaXplciIsImluaXRCdWZmZXJzIiwidW5kZWZpbmVkIiwic2tlbGV0b25JbWFnZURhdGEiLCJBcnJheUJ1ZmZlciIsInNrZWxldG9uaXplciIsInNlbGYiLCJnbG9iYWwiLCJpbml0Q2FudmFzIiwidXNlV29ya2VyIiwicGF0Y2hlcyIsImF2ZXJhZ2VSYWQiLCJwYXRjaCIsImRyYXdSZWN0IiwibWF0cml4IiwiRmxvYXQzMkFycmF5IiwiZnJvbSIsInRyYW5zZm9ybVdpdGhNYXRyaXgiLCJtaW5YIiwibWluWSIsIm1heFgiLCJtYXhZIiwidmVydGV4IiwiaW52ZXJzZU1hdHJpeCIsImludmVydCIsImEwIiwiYTEiLCJhMiIsImEzIiwiZGV0ZXJtaW5hbnQiLCJiaW5hcml6ZUltYWdlIiwiemVyb0JvcmRlciIsInNob3ciLCJmaW5kUGF0Y2hlcyIsInBhdGNoZXNGb3VuZCIsInNrZWxldG9uaXplIiwicmFzdGVyaXplciIsIlJhc3Rlcml6ZXIiLCJyYXN0ZXJSZXN1bHQiLCJyYXN0ZXJpemUiLCJjb3VudCIsIm1vbWVudHMiLCJkZXNjcmliZVBhdGNoIiwiZmluZEJpZ2dlc3RDb25uZWN0ZWRBcmVhcyIsIm1heExhYmVsIiwibGFiZWxIaXN0Iiwic29ydCIsInRvcExhYmVscyIsImVsIiwiZmluZEJveGVzIiwiam9pbiIsImNsdXN0ZXJpemUiLCJwb2ludHMiLCJwcm9wZXJ0eSIsImNsdXN0ZXJzIiwibWF0Y2hpbmdDbHVzdGVyIiwiY2x1c3RlciIsImZpdHMiLCJzaW1pbGFyTW9tZW50cyIsInRvcENsdXN0ZXIiLCJzdWJJbWFnZUFzQ29weSIsIm1pbkNvbXBvbmVudFdlaWdodCIsImNlaWwiLCJlbGlnaWJsZU1vbWVudHMiLCJtb21lbnQiLCJtYXRjaGluZ01vbWVudHMiLCJyYXN0ZXJpemVBbmd1bGFyU2ltaWxhcml0eSIsIm5vdFlldFByb2Nlc3NlZCIsInRyYWNlIiwiY3VycmVudEluZGV4IiwiY3VycmVudFBhdGNoIiwiU2VhcmNoRGlyZWN0aW9ucyIsImRpcmVjdGlvbiIsIk51bWJlciIsIk1BWF9WQUxVRSIsImNoZWNrSW1hZ2VDb25zdHJhaW50cyIsInNhbXBsZSIsIk9VVFNJREVfRURHRSIsIklOU0lERV9FREdFIiwiQ09OVE9VUl9ESVIiLCJDV19ESVIiLCJDQ1dfRElSIiwiVU5LTk9XTl9ESVIiLCJsYWJlbFdyYXBwZXIiLCJsYWJlbERhdGEiLCJ0cmFjZXIiLCJUcmFjZXIiLCJkZXB0aExhYmVsIiwiY29sb3JNYXAiLCJjYyIsInNjIiwiY29ubmVjdGVkQ291bnQiLCJjeSIsImxhYmVsSW5kZXgiLCJiYyIsImN4IiwibGMiLCJjb250b3VyVHJhY2luZyIsImZpcnN0VmVydGV4IiwibmV4dFBlZXIiLCJpbnNpZGVDb250b3VycyIsInByZXZpb3VzUGVlciIsImZpcnN0Q29udG91ciIsInBxIiwiaXEiLCJxIiwibmV4dCIsIlNrZWxldG9uaXplciIsInN0ZGxpYiIsImZvcmVpZ24iLCJlcm9kZSIsImluSW1hZ2VQdHIiLCJvdXRJbWFnZVB0ciIsInUiLCJ5U3RhcnQxIiwieVN0YXJ0MiIsInhTdGFydDEiLCJ4U3RhcnQyIiwic3VidHJhY3QiLCJhSW1hZ2VQdHIiLCJiSW1hZ2VQdHIiLCJiaXR3aXNlT3IiLCJjb3VudE5vblplcm8iLCJpbWFnZVB0ciIsImRpbGF0ZSIsIm1lbWNweSIsInNyY0ltYWdlUHRyIiwiZHN0SW1hZ2VQdHIiLCJzdWJJbWFnZVB0ciIsImVyb2RlZEltYWdlUHRyIiwidGVtcEltYWdlUHRyIiwic2tlbEltYWdlUHRyIiwiZG9uZSIsImVkZ2VMYWJlbCIsIkZ2IiwiQ3YiLCJsZGlyIiwiUCIsIl9mcmFtZWdyYWJiZXIiLCJfc3RvcHBlZCIsIl9ib3hTaXplIiwiX2RlY29kZXIiLCJfd29ya2VyUG9vbCIsIl9vblVJVGhyZWFkIiwiX3Jlc3VsdENvbGxlY3RvciIsImluaXRpYWxpemVEYXRhIiwiaW5pdElucHV0U3RyZWFtIiwiY3JlYXRlSW1hZ2VTdHJlYW0iLCJ2aWV3cG9ydCIsImdldFZpZXdQb3J0IiwiY3JlYXRlTGl2ZVN0cmVhbSIsIkNhbWVyYUFjY2VzcyIsImVyciIsImNhblJlY29yZCIsIm5vZGVOYW1lIiwibm9kZVR5cGUiLCJzZWxlY3RvciIsImNiIiwiQmFyY29kZUxvY2F0b3IiLCJhZGp1c3RXb3JrZXJQb29sIiwicmVhZHkiLCIkdmlld3BvcnQiLCJjbGVhckZpeCIsImdldEJvdW5kaW5nQm94ZXMiLCJ0cmFuc2Zvcm0iLCJwb2x5Z29uIiwidHJhbnNmb3JtUmVzdWx0IiwiYmFyY29kZSIsImFkZFJlc3VsdCIsImNhbnZhc1dpZHRoIiwiY2FudmFzSGVpZ2h0IiwiaGFzQ29kZVJlc3VsdCIsInB1Ymxpc2hSZXN1bHQiLCJyZXN1bHRUb1B1Ymxpc2giLCJFdmVudHMiLCJsb2NhdGVBbmREZWNvZGUiLCJkZWNvZGVGcm9tQm91bmRpbmdCb3hlcyIsInVwZGF0ZSIsImF2YWlsYWJsZVdvcmtlciIsIndvcmtlclRocmVhZCIsImJ1c3kiLCJhdHRhY2hEYXRhIiwiZ3JhYiIsIndvcmtlciIsInBvc3RNZXNzYWdlIiwiY21kIiwic3RhcnRDb250aW51b3VzVXBkYXRlIiwiZGVsYXkiLCJ0aW1lc3RhbXAiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJwZXJmb3JtYW5jZSIsIm5vdyIsImluaXRXb3JrZXIiLCJibG9iVVJMIiwiZ2VuZXJhdGVXb3JrZXJCbG9iIiwiV29ya2VyIiwib25tZXNzYWdlIiwiZXYiLCJVUkwiLCJyZXZva2VPYmplY3RVUkwiLCJtZXNzYWdlIiwiY29uZmlnRm9yV29ya2VyIiwid29ya2VySW50ZXJmYWNlIiwiZmFjdG9yeSIsIlF1YWdnYSIsImUiLCJvblByb2Nlc3NlZCIsInNldFJlYWRlcnMiLCJmYWN0b3J5U291cmNlIiwiX19mYWN0b3J5U291cmNlX18iLCJibG9iIiwiQmxvYiIsInRvU3RyaW5nIiwiY3JlYXRlT2JqZWN0VVJMIiwiaW5jcmVhc2VCeSIsIndvcmtlcnNUb1Rlcm1pbmF0ZSIsInRlcm1pbmF0ZSIsIndvcmtlckluaXRpYWxpemVkIiwiQ29uZmlnIiwib25EZXRlY3RlZCIsIm9mZkRldGVjdGVkIiwib2ZmUHJvY2Vzc2VkIiwicmVnaXN0ZXJSZXN1bHRDb2xsZWN0b3IiLCJyZXN1bHRDb2xsZWN0b3IiLCJkZWNvZGVTaW5nbGUiLCJyZXN1bHRDYWxsYmFjayIsIk4iLCJXIiwiU1RBUlRfUEFUVEVSTiIsIlNUT1BfUEFUVEVSTiIsIkNPREVfUEFUVEVSTiIsInN0YXJ0UGF0dGVybkxlbmd0aCIsIl9iYXJTcGFjZVJhdGlvIiwiX2Zvcm1hdCIsIl9zaW5nbGVDb2RlRXJyb3IiLCJfYXZlcmFnZUNvZGVFcnJvciIsImlzV2hpdGUiLCJ0cnlIYXJkZXIiLCJjb3VudGVyIiwiYmVzdE1hdGNoIiwiY29kZSIsImVwc2lsb24iLCJBVkVSQUdFX0NPREVfRVJST1IiLCJjb3VudGVyUG9zIiwiX25leHRTZXQiLCJfcm93IiwiX21hdGNoUGF0dGVybiIsIm5hcnJvd0JhcldpZHRoIiwic3RhcnRJbmZvIiwiX2ZpbmRQYXR0ZXJuIiwibGVhZGluZ1doaXRlc3BhY2VTdGFydCIsIl9tYXRjaFJhbmdlIiwiZW5kSW5mbyIsInRyYWlsaW5nV2hpdGVzcGFjZUVuZCIsInJldmVyc2UiLCJfdmVyaWZ5VHJhaWxpbmdXaGl0ZXNwYWNlIiwiY291bnRlcnMiLCJkZWNvZGVkQ29kZXMiLCJjb3VudGVyTGVuZ3RoIiwiX2RlY29kZUNvZGUiLCJfZmluZFN0YXJ0IiwiX2ZpbmRFbmQiLCJfZmlsbENvdW50ZXJzIiwiX2RlY29kZVBheWxvYWQiLCJCYXJjb2RlUmVhZGVyIiwiRElSRUNUSU9OIiwiRk9SV0FSRCIsIlJFVkVSU0UiLCJTdGFydE5vdEZvdW5kRXhjZXB0aW9uIiwiQ29kZU5vdEZvdW5kRXhjZXB0aW9uIiwiUGF0dGVybk5vdEZvdW5kRXhjZXB0aW9uIiwibWF4U2luZ2xlRXJyb3IiLCJtb2R1bG8iLCJTSU5HTEVfQ09ERV9FUlJPUiIsImJhcldpZHRoIiwic2NhbGVkIiwic2luZ2xlRXJyb3IiLCJjb3JyZWN0aW9uIiwiaW5kaWNlcyIsIl9kZWNvZGUiLCJfbmV4dFVuc2V0IiwibnVtQ291bnRlcnMiLCJBTFBIQUJFVEhfU1RSSU5HIiwiQUxQSEFCRVQiLCJjaGFyIiwiY2hhckNvZGVBdCIsIkNIQVJBQ1RFUl9FTkNPRElOR1MiLCJTVEFSVF9FTkQiLCJNSU5fRU5DT0RFRF9DSEFSUyIsIk1BWF9BQ0NFUFRBQkxFIiwiUEFERElORyIsIl9jb3VudGVycyIsIm5leHRTdGFydCIsInN0YXJ0Q291bnRlciIsIl90b1BhdHRlcm4iLCJkZWNvZGVkQ2hhciIsIl9wYXR0ZXJuVG9DaGFyIiwiX3ZlcmlmeVdoaXRlc3BhY2UiLCJfdmFsaWRhdGVSZXN1bHQiLCJfc3VtQ291bnRlcnMiLCJlbmRDb3VudGVyIiwiX2NhbGN1bGF0ZVBhdHRlcm5MZW5ndGgiLCJjYXRlZ29yaXphdGlvbiIsInNwYWNlIiwibmFycm93IiwiY291bnRzIiwid2lkZSIsImJhciIsIl9jaGFyVG9QYXR0ZXJuIiwiY2F0IiwiY2hhckNvZGUiLCJ0aHJlc2hvbGRzIiwiX3RocmVzaG9sZFJlc3VsdFBhdHRlcm4iLCJiYXJUaHJlc2hvbGQiLCJfY29tcHV0ZUFsdGVybmF0aW5nVGhyZXNob2xkIiwic3BhY2VUaHJlc2hvbGQiLCJiaXRtYXNrIiwiQ09ERV9TSElGVCIsIkNPREVfQyIsIkNPREVfQiIsIkNPREVfQSIsIlNUQVJUX0NPREVfQSIsIlNUQVJUX0NPREVfQiIsIlNUQVJUX0NPREVfQyIsIlNUT1BfQ09ERSIsIk1PRFVMRV9JTkRJQ0VTIiwiX2NvcnJlY3QiLCJjYWxjdWxhdGVDb3JyZWN0aW9uIiwiX2NvcnJlY3RCYXJzIiwibXVsdGlwbGllciIsImNoZWNrc3VtIiwiY29kZXNldCIsInJhd1Jlc3VsdCIsInNoaWZ0TmV4dCIsInJlbW92ZUxhc3RDaGFyYWN0ZXIiLCJleHBlY3RlZCIsIm5vcm1hbGl6ZWQiLCJzdW1Ob3JtYWxpemVkIiwic3VtRXhwZWN0ZWQiLCJBU1RFUklTSyIsImxhc3RTdGFydCIsIl90b0NvdW50ZXJzIiwicG9wIiwicGF0dGVyblNpemUiLCJtaW5XaWR0aCIsIm1heE5hcnJvd1dpZHRoIiwibnVtV2lkZUJhcnMiLCJ3aWRlQmFyV2lkdGgiLCJfZmluZE5leHRXaWR0aCIsInBhdHRlcm5TdGFydCIsIndoaXRlU3BhY2VNdXN0U3RhcnQiLCJyZXBsYWNlIiwiX2NoZWNrQ2hlY2tzdW0iLCJfdmVyaWZ5RW5kIiwiX3ZlcmlmeUNoZWNrc3VtcyIsIl9kZWNvZGVFeHRlbmRlZCIsInJvdW5kIiwiY2hhckFycmF5IiwibmV4dENoYXIiLCJuZXh0Q2hhckNvZGUiLCJfbWF0Y2hDaGVja0NoYXIiLCJtYXhXZWlnaHQiLCJhcnJheVRvQ2hlY2siLCJ3ZWlnaHRlZFN1bXMiLCJ3ZWlnaHQiLCJjaGVja0NoYXIiLCJyb3ciLCJjb2RlRnJlcXVlbmN5IiwiQ09ERV9HX1NUQVJUIiwicGFyc2VJbnQiLCJfZXh0ZW5zaW9uQ2hlY2tzdW0iLCJfZGV0ZXJtaW5lQ2hlY2tEaWdpdCIsIkNIRUNLX0RJR0lUX0VOQ09ESU5HUyIsIk1JRERMRV9QQVRURVJOIiwiRVhURU5TSU9OX1NUQVJUX1BBVFRFUk4iLCJjb2RlcmFuZ2UiLCJDT0RFX0ZSRVFVRU5DWSIsImZpcnN0RGlnaXQiLCJfY2FsY3VsYXRlRmlyc3REaWdpdCIsInJlc3VsdEluZm8iLCJfY2hlY2tzdW0iLCJleHQiLCJfZGVjb2RlRXh0ZW5zaW9ucyIsImxhc3RDb2RlIiwiZGVjb2RlIiwiTUFYX0NPUlJFQ1RJT05fRkFDVE9SIiwibm9ybWFsaXplQmFyU3BhY2VXaWR0aCIsImNvdW50ZXJTdW0iLCJjb2RlU3VtIiwiY29ycmVjdGlvblJhdGlvIiwiY29ycmVjdGlvblJhdGlvSW52ZXJzZSIsImNvdW50ZXJQYWlyIiwiY29kZXMiLCJfZGVjb2RlUGFpciIsIl9kZXRlcm1pbmVQYXJpdHkiLCJuclN5c3RlbSIsImxhc3REaWdpdCIsInVwY2EiLCJfY29udmVydFRvVVBDQSIsImNoYXJBdCIsInN1YnN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRCxXO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVc7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLGNBQWM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxrQkFBa0I7QUFDbkQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FB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QUtteUIsV0FBTCxDQUFpQkMsT0FBTyxDQUFDL3dCLEdBQXpCLEVBQThCZ3hCLHFCQUE5QixFQUFxRCxDQUFyRCxDQUFKLEVBQTZEO0FBQ3pELGlCQUFPRCxPQUFQO0FBQ0g7QUFDSjtBQUNKO0FBcEZMOztBQUFBO0FBQUEsRUFBZ0N4aUIscURBQWhDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBRU8sSUFBTWMsU0FBYjtBQUFBO0FBQUE7QUFBQTs7QUFDSSxxQkFBWTdULE1BQVosRUFBb0J3VixXQUFwQixFQUFpQztBQUFBOztBQUFBOztBQUM3Qiw2TUFBTXhWLE1BQU4sRUFBY3dWLFdBQWQ7QUFFQSxVQUFLNGUsT0FBTCxHQUFlLE9BQWY7QUFINkI7QUFJaEM7O0FBTEw7QUFBQTtBQUFBLDhCQU9jO0FBQ04sVUFBTXh5QixNQUFNLEdBQUcsZ01BQWY7O0FBRUEsVUFBSUEsTUFBTSxJQUFJQSxNQUFNLENBQUMreUIsSUFBakIsSUFBeUIveUIsTUFBTSxDQUFDK3lCLElBQVAsQ0FBWXh4QixNQUFaLEtBQXVCLEVBQWhELElBQXNEdkIsTUFBTSxDQUFDK3lCLElBQVAsQ0FBWStKLE1BQVosQ0FBbUIsQ0FBbkIsTUFBMEIsR0FBcEYsRUFBeUY7QUFDckY5OEIsY0FBTSxDQUFDK3lCLElBQVAsR0FBYy95QixNQUFNLENBQUMreUIsSUFBUCxDQUFZZ0ssU0FBWixDQUFzQixDQUF0QixDQUFkO0FBQ0EsZUFBTy84QixNQUFQO0FBQ0g7O0FBRUQsYUFBTyxJQUFQO0FBQ0g7QUFoQkw7O0FBQUE7QUFBQSxFQUErQm1SLHFEQUEvQixFIiwiZmlsZSI6InF1YWdnYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcbiAgICBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShmYWN0b3J5LnRvU3RyaW5nKCkpLmRlZmF1bHQ7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXhwb3J0c1tcIlF1YWdnYVwiXSA9IGZhY3RvcnkoZmFjdG9yeS50b1N0cmluZygpKS5kZWZhdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJvb3RbXCJRdWFnZ2FcIl0gPSBmYWN0b3J5KGZhY3RvcnkudG9TdHJpbmcoKSkuZGVmYXVsdDtcbiAgICB9XG59KSh0aGlzLCBmdW5jdGlvbihfX2ZhY3RvcnlTb3VyY2VfXykge1xuICAgIHJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcXVhZ2dhLmpzXCIpO1xuIiwiZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFycjJbaV0gPSBhcnJbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycjI7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRob3V0SG9sZXM7IiwiZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkOyIsImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpbmZvLmRvbmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcblxuICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuXG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3luY1RvR2VuZXJhdG9yOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3M7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5OyIsInZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL2dldFByb3RvdHlwZU9mXCIpO1xuXG52YXIgc3VwZXJQcm9wQmFzZSA9IHJlcXVpcmUoXCIuL3N1cGVyUHJvcEJhc2VcIik7XG5cbmZ1bmN0aW9uIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ICE9PSBcInVuZGVmaW5lZFwiICYmIFJlZmxlY3QuZ2V0KSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0ID0gUmVmbGVjdC5nZXQ7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0ID0gZnVuY3Rpb24gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICAgICAgdmFyIGJhc2UgPSBzdXBlclByb3BCYXNlKHRhcmdldCwgcHJvcGVydHkpO1xuICAgICAgaWYgKCFiYXNlKSByZXR1cm47XG4gICAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYmFzZSwgcHJvcGVydHkpO1xuXG4gICAgICBpZiAoZGVzYy5nZXQpIHtcbiAgICAgICAgcmV0dXJuIGRlc2MuZ2V0LmNhbGwocmVjZWl2ZXIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGVzYy52YWx1ZTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIgfHwgdGFyZ2V0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0OyIsImZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9O1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZjsiLCJ2YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9zZXRQcm90b3R5cGVPZlwiKTtcblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbmhlcml0czsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGl0ZXIpID09PSBcIltvYmplY3QgQXJndW1lbnRzXVwiKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5OyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVNwcmVhZDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxudmFyIGFzc2VydFRoaXNJbml0aWFsaXplZCA9IHJlcXVpcmUoXCIuL2Fzc2VydFRoaXNJbml0aWFsaXplZFwiKTtcblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9XG5cbiAgcmV0dXJuIGFzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjsiLCJmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcblxuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZjsiLCJ2YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9nZXRQcm90b3R5cGVPZlwiKTtcblxuZnVuY3Rpb24gX3N1cGVyUHJvcEJhc2Uob2JqZWN0LCBwcm9wZXJ0eSkge1xuICB3aGlsZSAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KSkge1xuICAgIG9iamVjdCA9IGdldFByb3RvdHlwZU9mKG9iamVjdCk7XG4gICAgaWYgKG9iamVjdCA9PT0gbnVsbCkgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gb2JqZWN0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zdXBlclByb3BCYXNlOyIsInZhciBhcnJheVdpdGhvdXRIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aG91dEhvbGVzXCIpO1xuXG52YXIgaXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5XCIpO1xuXG52YXIgbm9uSXRlcmFibGVTcHJlYWQgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVNwcmVhZFwiKTtcblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90b0NvbnN1bWFibGVBcnJheTsiLCJmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YyID0gZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mMiA9IGZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZjIob2JqKTsgfVxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIF90eXBlb2YyKFN5bWJvbC5pdGVyYXRvcikgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIF90eXBlb2YyKG9iaik7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IF90eXBlb2YyKG9iaik7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4vLyBUaGlzIG1ldGhvZCBvZiBvYnRhaW5pbmcgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QgbmVlZHMgdG8gYmVcbi8vIGtlcHQgaWRlbnRpY2FsIHRvIHRoZSB3YXkgaXQgaXMgb2J0YWluZWQgaW4gcnVudGltZS5qc1xudmFyIGcgPSAoZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzIHx8ICh0eXBlb2Ygc2VsZiA9PT0gXCJvYmplY3RcIiAmJiBzZWxmKTtcbn0pKCkgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xuXG4vLyBVc2UgYGdldE93blByb3BlcnR5TmFtZXNgIGJlY2F1c2Ugbm90IGFsbCBicm93c2VycyBzdXBwb3J0IGNhbGxpbmdcbi8vIGBoYXNPd25Qcm9wZXJ0eWAgb24gdGhlIGdsb2JhbCBgc2VsZmAgb2JqZWN0IGluIGEgd29ya2VyLiBTZWUgIzE4My5cbnZhciBoYWRSdW50aW1lID0gZy5yZWdlbmVyYXRvclJ1bnRpbWUgJiZcbiAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZykuaW5kZXhPZihcInJlZ2VuZXJhdG9yUnVudGltZVwiKSA+PSAwO1xuXG4vLyBTYXZlIHRoZSBvbGQgcmVnZW5lcmF0b3JSdW50aW1lIGluIGNhc2UgaXQgbmVlZHMgdG8gYmUgcmVzdG9yZWQgbGF0ZXIuXG52YXIgb2xkUnVudGltZSA9IGhhZFJ1bnRpbWUgJiYgZy5yZWdlbmVyYXRvclJ1bnRpbWU7XG5cbi8vIEZvcmNlIHJlZXZhbHV0YXRpb24gb2YgcnVudGltZS5qcy5cbmcucmVnZW5lcmF0b3JSdW50aW1lID0gdW5kZWZpbmVkO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL3J1bnRpbWVcIik7XG5cbmlmIChoYWRSdW50aW1lKSB7XG4gIC8vIFJlc3RvcmUgdGhlIG9yaWdpbmFsIHJ1bnRpbWUuXG4gIGcucmVnZW5lcmF0b3JSdW50aW1lID0gb2xkUnVudGltZTtcbn0gZWxzZSB7XG4gIC8vIFJlbW92ZSB0aGUgZ2xvYmFsIHByb3BlcnR5IGFkZGVkIGJ5IHJ1bnRpbWUuanMuXG4gIHRyeSB7XG4gICAgZGVsZXRlIGcucmVnZW5lcmF0b3JSdW50aW1lO1xuICB9IGNhdGNoKGUpIHtcbiAgICBnLnJlZ2VuZXJhdG9yUnVudGltZSA9IHVuZGVmaW5lZDtcbiAgfVxufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4hKGZ1bmN0aW9uKGdsb2JhbCkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIHZhciBpbk1vZHVsZSA9IHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCI7XG4gIHZhciBydW50aW1lID0gZ2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZTtcbiAgaWYgKHJ1bnRpbWUpIHtcbiAgICBpZiAoaW5Nb2R1bGUpIHtcbiAgICAgIC8vIElmIHJlZ2VuZXJhdG9yUnVudGltZSBpcyBkZWZpbmVkIGdsb2JhbGx5IGFuZCB3ZSdyZSBpbiBhIG1vZHVsZSxcbiAgICAgIC8vIG1ha2UgdGhlIGV4cG9ydHMgb2JqZWN0IGlkZW50aWNhbCB0byByZWdlbmVyYXRvclJ1bnRpbWUuXG4gICAgICBtb2R1bGUuZXhwb3J0cyA9IHJ1bnRpbWU7XG4gICAgfVxuICAgIC8vIERvbid0IGJvdGhlciBldmFsdWF0aW5nIHRoZSByZXN0IG9mIHRoaXMgZmlsZSBpZiB0aGUgcnVudGltZSB3YXNcbiAgICAvLyBhbHJlYWR5IGRlZmluZWQgZ2xvYmFsbHkuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRGVmaW5lIHRoZSBydW50aW1lIGdsb2JhbGx5IChhcyBleHBlY3RlZCBieSBnZW5lcmF0ZWQgY29kZSkgYXMgZWl0aGVyXG4gIC8vIG1vZHVsZS5leHBvcnRzIChpZiB3ZSdyZSBpbiBhIG1vZHVsZSkgb3IgYSBuZXcsIGVtcHR5IG9iamVjdC5cbiAgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWUgPSBpbk1vZHVsZSA/IG1vZHVsZS5leHBvcnRzIDoge307XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgcnVudGltZS53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGVbdG9TdHJpbmdUYWdTeW1ib2xdID1cbiAgICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBwcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBydW50aW1lLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGlmICghKHRvU3RyaW5nVGFnU3ltYm9sIGluIGdlbkZ1bikpIHtcbiAgICAgICAgZ2VuRnVuW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcbiAgICAgIH1cbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgcnVudGltZS5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIHJ1bnRpbWUuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIHJ1bnRpbWUuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KVxuICAgICk7XG5cbiAgICByZXR1cm4gcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yLnJldHVybikge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIEdwW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yXCI7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgcnVudGltZS5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIHJ1bnRpbWUudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG59KShcbiAgLy8gSW4gc2xvcHB5IG1vZGUsIHVuYm91bmQgYHRoaXNgIHJlZmVycyB0byB0aGUgZ2xvYmFsIG9iamVjdCwgZmFsbGJhY2sgdG9cbiAgLy8gRnVuY3Rpb24gY29uc3RydWN0b3IgaWYgd2UncmUgaW4gZ2xvYmFsIHN0cmljdCBtb2RlLiBUaGF0IGlzIHNhZGx5IGEgZm9ybVxuICAvLyBvZiBpbmRpcmVjdCBldmFsIHdoaWNoIHZpb2xhdGVzIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5LlxuICAoZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMgfHwgKHR5cGVvZiBzZWxmID09PSBcIm9iamVjdFwiICYmIHNlbGYpO1xuICB9KSgpIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKVxuKTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsImltcG9ydCB7IEltYWdlRGVidWcgfSBmcm9tICcuLi9jb21tb24vaW1hZ2VfZGVidWcnO1xuXG5leHBvcnQgY2xhc3MgUmVzdWx0Q29sbGVjdG9yIHtcbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuICAgICAgICB0aGlzLl9jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgdGhpcy5fY29udGV4dCA9IHRoaXMuX2NhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICB0aGlzLl9yZXN1bHRzID0gW107XG4gICAgICAgIHRoaXMuX2NhcGFjaXR5ID0gY29uZmlnLmNhcGFjaXR5IHx8IDIwO1xuICAgICAgICB0aGlzLl9jYXB0dXJlID0gY29uZmlnLmNhcHR1cmUgPT09IHRydWU7XG4gICAgfVxuXG4gICAgX2NvbnRhaW5zKGNvZGVSZXN1bHQsIGxpc3QpIHtcbiAgICAgICAgcmV0dXJuICEhbGlzdCAmJiBsaXN0LnNvbWUoaXRlbSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoaXRlbSkuZXZlcnkoa2V5ID0+IGl0ZW1ba2V5XSA9PT0gY29kZVJlc3VsdFtrZXldKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX3Bhc3Nlc0ZpbHRlcihjb2RlUmVzdWx0LCBmaWx0ZXIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBmaWx0ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybiBmaWx0ZXIoY29kZVJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgX21hdGNoZXNDb25zdHJhaW50cyhjb2RlUmVzdWx0KSB7XG4gICAgICAgIHJldHVybiBjb2RlUmVzdWx0XG4gICAgICAgICAgICAmJiB0aGlzLl9jYXBhY2l0eVxuICAgICAgICAgICAgJiYgIXRoaXMuX2NvbnRhaW5zKGNvZGVSZXN1bHQsIHRoaXMuX2NvbmZpZy5ibGFja2xpc3QpXG4gICAgICAgICAgICAmJiB0aGlzLl9wYXNzZXNGaWx0ZXIoY29kZVJlc3VsdCwgdGhpcy5fY29uZmlnLmZpbHRlcik7XG4gICAgfVxuXG4gICAgYWRkUmVzdWx0KGRhdGEsIGltYWdlV2lkdGgsIGltYWdlSGVpZ2h0LCBjb2RlUmVzdWx0KSB7XG4gICAgICAgIGlmICh0aGlzLl9tYXRjaGVzQ29uc3RyYWludHMoY29kZVJlc3VsdCkpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuXG4gICAgICAgICAgICB0aGlzLl9jYXBhY2l0eS0tO1xuICAgICAgICAgICAgcmVzdWx0LmNvZGVSZXN1bHQgPSBjb2RlUmVzdWx0O1xuXG4gICAgICAgICAgICBpZiAodGhpcy5fY2FwdHVyZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NhbnZhcy53aWR0aCA9IGltYWdlV2lkdGg7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2FudmFzLmhlaWdodCA9IGltYWdlSGVpZ2h0O1xuICAgICAgICAgICAgICAgIEltYWdlRGVidWcuZHJhd0ltYWdlKGRhdGEsIGltYWdlV2lkdGgsIGltYWdlSGVpZ2h0LCB0aGlzLl9jb250ZXh0KTtcbiAgICAgICAgICAgICAgICByZXN1bHQuZnJhbWUgPSB0aGlzLl9jYW52YXMudG9EYXRhVVJMKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX3Jlc3VsdHMucHVzaChyZXN1bHQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0UmVzdWx0cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Jlc3VsdHM7XG4gICAgfVxufVxuIiwiLyoqXG4gKiBDcmVhdGVzIGEgY2x1c3RlciBmb3IgZ3JvdXBpbmcgc2ltaWxhciBvcmllbnRhdGlvbnMgb2YgZGF0YXBvaW50c1xuICovXG5leHBvcnQgY2xhc3MgQ2x1c3RlciB7XG4gICAgY29uc3RydWN0b3IodGhyZXNob2xkLCBwb2ludCkge1xuICAgICAgICB0aGlzLl90aHJlc2hvbGQgPSB0aHJlc2hvbGQ7XG4gICAgICAgIHRoaXMuX3BvaW50cyA9IFtdO1xuICAgICAgICB0aGlzLl9jZW50ZXIgPSB7XG4gICAgICAgICAgICByYWQ6IDAsXG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogMFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9wb2ludE1hcCA9IHt9O1xuXG4gICAgICAgIGlmIChwb2ludCkge1xuICAgICAgICAgICAgdGhpcy5hZGQocG9pbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkKHBvaW50KSB7XG4gICAgICAgIGlmICghdGhpcy5fcG9pbnRNYXBbcG9pbnQuaWRdKSB7XG4gICAgICAgICAgICB0aGlzLl9wb2ludE1hcFtwb2ludC5pZF0gPSBwb2ludDtcbiAgICAgICAgICAgIHRoaXMuX3BvaW50cy5wdXNoKHBvaW50KTtcblxuICAgICAgICAgICAgLy8gVXBkYXRlIGNlbnRlclxuICAgICAgICAgICAgdGhpcy5fY2VudGVyLnJhZCA9IHRoaXMuX3BvaW50cy5yZWR1Y2UoKHN1bSwgcCkgPT4gc3VtICsgcC5yYWQsIDApIC8gdGhpcy5fcG9pbnRzLmxlbmd0aDtcbiAgICAgICAgICAgIHRoaXMuX2NlbnRlci54ID0gTWF0aC5jb3ModGhpcy5fY2VudGVyLnJhZCk7XG4gICAgICAgICAgICB0aGlzLl9jZW50ZXIueSA9IE1hdGguc2luKHRoaXMuX2NlbnRlci5yYWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZml0cyhwb2ludCkge1xuICAgICAgICAvLyBjaGVjayBjb3NpbmUgc2ltaWxhcml0eSB0byBjZW50ZXItYW5nbGVcbiAgICAgICAgY29uc3Qgc2ltaWxhcml0eSA9IE1hdGguYWJzKHBvaW50LnBvaW50LnggKiB0aGlzLl9jZW50ZXIueCArIHBvaW50LnBvaW50LnkgKiB0aGlzLl9jZW50ZXIueSk7XG4gICAgICAgIHJldHVybiBzaW1pbGFyaXR5ID4gdGhpcy5fdGhyZXNob2xkO1xuICAgIH1cblxuICAgIGdldCBwb2ludHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wb2ludHM7XG4gICAgfVxufVxuIiwiZnVuY3Rpb24gX2NvbXB1dGVIaXN0b2dyYW0oaW1hZ2VXcmFwcGVyLCBiaXRzUGVyUGl4ZWwpIHtcbiAgICBpZiAoIWJpdHNQZXJQaXhlbCkge1xuICAgICAgICBiaXRzUGVyUGl4ZWwgPSA4O1xuICAgIH1cblxuICAgIGNvbnN0IGltYWdlRGF0YSA9IGltYWdlV3JhcHBlci5kYXRhO1xuICAgIGNvbnN0IGJpdFNoaWZ0ID0gOCAtIGJpdHNQZXJQaXhlbDtcbiAgICBjb25zdCBidWNrZXRDb3VudCA9IDEgPDwgYml0c1BlclBpeGVsO1xuICAgIGNvbnN0IGhpc3RvZ3JhbSA9IG5ldyBJbnQzMkFycmF5KGJ1Y2tldENvdW50KTtcblxuICAgIGZvciAobGV0IGkgPSBpbWFnZURhdGEubGVuZ3RoOyBpLS07KSB7XG4gICAgICAgIGhpc3RvZ3JhbVtpbWFnZURhdGFbaV0gPj4gYml0U2hpZnRdKys7XG4gICAgfVxuXG4gICAgcmV0dXJuIGhpc3RvZ3JhbTtcbn1cblxuZnVuY3Rpb24gX2RldGVybWluZU90c3VUaHJlc2hvbGQoaW1hZ2VXcmFwcGVyLCBiaXRzUGVyUGl4ZWwpIHtcbiAgICBpZiAoIWJpdHNQZXJQaXhlbCkge1xuICAgICAgICBiaXRzUGVyUGl4ZWwgPSA4O1xuICAgIH1cblxuICAgIGNvbnN0IGJpdFNoaWZ0ID0gOCAtIGJpdHNQZXJQaXhlbDtcbiAgICBjb25zdCBoaXN0ID0gX2NvbXB1dGVIaXN0b2dyYW0oaW1hZ2VXcmFwcGVyLCBiaXRzUGVyUGl4ZWwpO1xuICAgIGNvbnN0IHZldCA9IFswXTtcbiAgICBjb25zdCBtYXggPSAoMSA8PCBiaXRzUGVyUGl4ZWwpIC0gMTtcblxuICAgIGZ1bmN0aW9uIHB4KGluaXQsIGVuZCkge1xuICAgICAgICBsZXQgc3VtID0gMDtcblxuICAgICAgICBmb3IgKGxldCBpID0gaW5pdDsgaSA8PSBlbmQ7IGkrKykge1xuICAgICAgICAgICAgc3VtICs9IGhpc3RbaV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VtO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG14KGluaXQsIGVuZCkge1xuICAgICAgICBsZXQgc3VtID0gMDtcblxuICAgICAgICBmb3IgKGxldCBpID0gaW5pdDsgaSA8PSBlbmQ7IGkrKykge1xuICAgICAgICAgICAgc3VtICs9IGkgKiBoaXN0W2ldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1bTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBrID0gMTsgayA8IG1heDsgaysrKSB7XG4gICAgICAgIGNvbnN0IHAxID0gcHgoMCwgayk7XG4gICAgICAgIGNvbnN0IHAyID0gcHgoayArIDEsIG1heCk7XG4gICAgICAgIGNvbnN0IHAxMiA9IHAxICogcDIgfHwgMTtcbiAgICAgICAgY29uc3QgbTEgPSBteCgwLCBrKSAqIHAyO1xuICAgICAgICBjb25zdCBtMiA9IG14KGsgKyAxLCBtYXgpICogcDE7XG4gICAgICAgIGNvbnN0IG0xMiA9IG0xIC0gbTI7XG4gICAgICAgIHZldFtrXSA9IG0xMiAqIG0xMiAvIHAxMjtcbiAgICB9XG5cbiAgICAvLyBpbmRleCBvZiBtYXggZWxlbWVudFxuICAgIGNvbnN0IHRocmVzaG9sZCA9IHZldC5yZWR1Y2UoKG1heEluZGV4LCBpdGVtLCBpbmRleCwgYXJyYXkpID0+IGl0ZW0gPiBhcnJheVttYXhJbmRleF0gPyBpbmRleCA6IG1heEluZGV4LCAwKTtcblxuICAgIHJldHVybiB0aHJlc2hvbGQgPDwgYml0U2hpZnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvdHN1VGhyZXNob2xkKGltYWdlV3JhcHBlciwgdGFyZ2V0V3JhcHBlcikge1xuICAgIGNvbnN0IHRocmVzaG9sZCA9IF9kZXRlcm1pbmVPdHN1VGhyZXNob2xkKGltYWdlV3JhcHBlcik7XG4gICAgY29uc3QgdGFyZ2V0RGF0YSA9IHRhcmdldFdyYXBwZXIuZGF0YTtcblxuICAgIGltYWdlV3JhcHBlci5kYXRhLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgICB0YXJnZXREYXRhW2luZGV4XSA9IHZhbHVlIDwgdGhyZXNob2xkID8gMSA6IDA7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhyZXNob2xkO1xufVxuXG4vKipcbiAqIEBwYXJhbSBpbkltZ1dyYXBwZXIge0ltYWdlV3JhcHBlcn0gaW5wdXQgaW1hZ2UgdG8gYmUgc2FtcGxlZFxuICogQHBhcmFtIG91dEltZ1dyYXBwZXIge0ltYWdlV3JhcHBlcn0gdG8gYmUgc3RvcmVkIGluXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoYWxmU2FtcGxlKGluSW1nV3JhcHBlciwgb3V0SW1nV3JhcHBlcikge1xuICAgIGNvbnN0IGluSW1nID0gaW5JbWdXcmFwcGVyLmRhdGE7XG4gICAgY29uc3QgaW5XaWR0aCA9IGluSW1nV3JhcHBlci5zaXplLng7XG4gICAgY29uc3Qgb3V0SW1nID0gb3V0SW1nV3JhcHBlci5kYXRhO1xuICAgIGNvbnN0IGVuZEluZGV4ID0gaW5JbWcubGVuZ3RoO1xuICAgIGNvbnN0IG91dFdpZHRoID0gaW5XaWR0aCAvIDI7XG4gICAgbGV0IHRvcFJvd0luZGV4ID0gMDtcbiAgICBsZXQgYm90dG9tUm93SW5kZXggPSBpbldpZHRoO1xuICAgIGxldCBvdXRJbWdJbmRleCA9IDA7XG5cbiAgICB3aGlsZSAoYm90dG9tUm93SW5kZXggPCBlbmRJbmRleCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG91dFdpZHRoOyBpKyspIHtcbiAgICAgICAgICAgIG91dEltZ1tvdXRJbWdJbmRleF0gPVxuICAgICAgICAgICAgICAgIChpbkltZ1t0b3BSb3dJbmRleF0gKyBpbkltZ1t0b3BSb3dJbmRleCArIDFdICsgaW5JbWdbYm90dG9tUm93SW5kZXhdICsgaW5JbWdbYm90dG9tUm93SW5kZXggKyAxXSkgPj4gMjtcbiAgICAgICAgICAgIG91dEltZ0luZGV4Kys7XG4gICAgICAgICAgICB0b3BSb3dJbmRleCArPSAyO1xuICAgICAgICAgICAgYm90dG9tUm93SW5kZXggKz0gMjtcbiAgICAgICAgfVxuICAgICAgICB0b3BSb3dJbmRleCArPSBpbldpZHRoO1xuICAgICAgICBib3R0b21Sb3dJbmRleCArPSBpbldpZHRoO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhzdjJyZ2IoaHN2LCByZ2IpIHtcbiAgICBjb25zdCBoID0gaHN2WzBdO1xuICAgIGNvbnN0IHMgPSBoc3ZbMV07XG4gICAgY29uc3QgdiA9IGhzdlsyXTtcbiAgICBjb25zdCBjID0gdiAqIHM7XG4gICAgY29uc3QgeCA9IGMgKiAoMSAtIE1hdGguYWJzKChoIC8gNjApICUgMiAtIDEpKTtcbiAgICBjb25zdCBtID0gdiAtIGM7XG4gICAgbGV0IHIgPSAwO1xuICAgIGxldCBnID0gMDtcbiAgICBsZXQgYiA9IDA7XG5cbiAgICBpZiAoaCA8IDYwKSB7XG4gICAgICAgIHIgPSBjO1xuICAgICAgICBnID0geDtcbiAgICB9IGVsc2UgaWYgKGggPCAxMjApIHtcbiAgICAgICAgciA9IHg7XG4gICAgICAgIGcgPSBjO1xuICAgIH0gZWxzZSBpZiAoaCA8IDE4MCkge1xuICAgICAgICBnID0gYztcbiAgICAgICAgYiA9IHg7XG4gICAgfSBlbHNlIGlmIChoIDwgMjQwKSB7XG4gICAgICAgIGcgPSB4O1xuICAgICAgICBiID0gYztcbiAgICB9IGVsc2UgaWYgKGggPCAzMDApIHtcbiAgICAgICAgciA9IHg7XG4gICAgICAgIGIgPSBjO1xuICAgIH0gZWxzZSBpZiAoaCA8IDM2MCkge1xuICAgICAgICByID0gYztcbiAgICAgICAgYiA9IHg7XG4gICAgfVxuXG4gICAgcmdiID0gcmdiIHx8IFswLCAwLCAwXTtcblxuICAgIHJnYlswXSA9ICgociArIG0pICogMjU1KSB8IDA7XG4gICAgcmdiWzFdID0gKChnICsgbSkgKiAyNTUpIHwgMDtcbiAgICByZ2JbMl0gPSAoKGIgKyBtKSAqIDI1NSkgfCAwO1xuXG4gICAgcmV0dXJuIHJnYjtcbn1cblxuZnVuY3Rpb24gX2NvbXB1dGVEaXZpc29ycyhuKSB7XG4gICAgY29uc3QgbGFyZ2VEaXZpc29ycyA9IFtdO1xuICAgIGNvbnN0IGRpdmlzb3JzID0gW107XG5cbiAgICBmb3IgKGxldCBkaXZpc29yID0gMTsgZGl2aXNvciAqIGRpdmlzb3IgPD0gbjsgZGl2aXNvcisrKSB7XG4gICAgICAgIGlmIChuICUgZGl2aXNvciA9PT0gMCkge1xuICAgICAgICAgICAgZGl2aXNvcnMucHVzaChkaXZpc29yKTtcbiAgICAgICAgICAgIGlmIChkaXZpc29yICogZGl2aXNvciAhPT0gbikge1xuICAgICAgICAgICAgICAgIGxhcmdlRGl2aXNvcnMudW5zaGlmdChNYXRoLmZsb29yKG4gLyBkaXZpc29yKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGl2aXNvcnMuY29uY2F0KGxhcmdlRGl2aXNvcnMpO1xufVxuXG5mdW5jdGlvbiBfY29tcHV0ZUNvbW1vbkRpdmlzb3JzKG0sIG4pIHtcbiAgICBpZiAobSA9PT0gbikge1xuICAgICAgICByZXR1cm4gX2NvbXB1dGVEaXZpc29ycyhtKTtcbiAgICB9XG5cbiAgICBjb25zdCBtYXggPSBtID4gbiA/IG0gOiBuO1xuICAgIGNvbnN0IG1pbiA9IG0gPiBuID8gbiA6IG07XG4gICAgY29uc3QgbGFyZ2VEaXZpc29ycyA9IFtdO1xuICAgIGNvbnN0IGRpdmlzb3JzID0gW107XG5cbiAgICBmb3IgKGxldCBkaXZpc29yID0gMTsgZGl2aXNvciAqIGRpdmlzb3IgPD0gbWluOyBkaXZpc29yKyspIHtcbiAgICAgICAgaWYgKG1heCAlIGRpdmlzb3IgPT09IDAgJiYgbWluICUgZGl2aXNvciA9PT0gMCkge1xuICAgICAgICAgICAgZGl2aXNvcnMucHVzaChkaXZpc29yKTtcbiAgICAgICAgICAgIGNvbnN0IGxhcmdlRGl2aXNvciA9IE1hdGguZmxvb3IobWluIC8gZGl2aXNvcik7XG4gICAgICAgICAgICBpZiAoZGl2aXNvciAhPT0gbGFyZ2VEaXZpc29yICYmIG1heCAlIGxhcmdlRGl2aXNvciA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGxhcmdlRGl2aXNvcnMudW5zaGlmdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpdmlzb3JzLmNvbmNhdChsYXJnZURpdmlzb3JzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZVBhdGNoU2l6ZShwYXRjaFNpemUsIGltZ1NpemUpIHtcbiAgICBjb25zdCB3aWRlU2lkZSA9IE1hdGgubWF4KGltZ1NpemUueCwgaW1nU2l6ZS55KTtcbiAgICBjb25zdCBuck9mUGF0Y2hlc0xpc3QgPSBbOCwgMTAsIDE1LCAyMCwgMzIsIDYwLCA4MF07XG4gICAgY29uc3QgbnJPZlBhdGNoZXNNYXAgPSB7XG4gICAgICAgICd4LXNtYWxsJzogNSxcbiAgICAgICAgc21hbGw6IDQsXG4gICAgICAgIG1lZGl1bTogMyxcbiAgICAgICAgbGFyZ2U6IDIsXG4gICAgICAgICd4LWxhcmdlJzogMVxuICAgIH07XG4gICAgY29uc3QgbnJPZlBhdGNoZXNJbmRleCA9IG5yT2ZQYXRjaGVzTWFwW3BhdGNoU2l6ZV0gfHwgbnJPZlBhdGNoZXNNYXAubWVkaXVtO1xuICAgIGNvbnN0IG5yT2ZQYXRjaGVzID0gbnJPZlBhdGNoZXNMaXN0W25yT2ZQYXRjaGVzSW5kZXhdO1xuICAgIGNvbnN0IGRlc2lyZWRQYXRjaFNpemUgPSBNYXRoLmZsb29yKHdpZGVTaWRlIC8gbnJPZlBhdGNoZXMpO1xuXG4gICAgZnVuY3Rpb24gZmluZFBhdGNoU2l6ZUZvckRpdmlzb3JzKGRpdmlzb3JzKSB7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgbGV0IGZvdW5kID0gZGl2aXNvcnNbZGl2aXNvcnMubGVuZ3RoID4+IDFdO1xuXG4gICAgICAgIHdoaWxlIChpIDwgKGRpdmlzb3JzLmxlbmd0aCAtIDEpICYmIGRpdmlzb3JzW2ldIDwgZGVzaXJlZFBhdGNoU2l6ZSkge1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpID4gMCkge1xuICAgICAgICAgICAgaWYgKE1hdGguYWJzKGRpdmlzb3JzW2ldIC0gZGVzaXJlZFBhdGNoU2l6ZSkgPiBNYXRoLmFicyhkaXZpc29yc1tpIC0gMV0gLSBkZXNpcmVkUGF0Y2hTaXplKSkge1xuICAgICAgICAgICAgICAgIGZvdW5kID0gZGl2aXNvcnNbaSAtIDFdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3VuZCA9IGRpdmlzb3JzW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChkZXNpcmVkUGF0Y2hTaXplIC8gZm91bmQgPCBuck9mUGF0Y2hlc0xpc3RbbnJPZlBhdGNoZXNJbmRleCArIDFdIC8gbnJPZlBhdGNoZXNMaXN0W25yT2ZQYXRjaGVzSW5kZXhdICYmXG4gICAgICAgICAgICBkZXNpcmVkUGF0Y2hTaXplIC8gZm91bmQgPiBuck9mUGF0Y2hlc0xpc3RbbnJPZlBhdGNoZXNJbmRleCAtIDFdIC8gbnJPZlBhdGNoZXNMaXN0W25yT2ZQYXRjaGVzSW5kZXhdKSB7XG4gICAgICAgICAgICByZXR1cm4geyB4OiBmb3VuZCwgeTogZm91bmQgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBvcHRpbWFsUGF0Y2hTaXplID0gZmluZFBhdGNoU2l6ZUZvckRpdmlzb3JzKF9jb21wdXRlQ29tbW9uRGl2aXNvcnMoaW1nU2l6ZS54LCBpbWdTaXplLnkpKSB8fFxuICAgICAgICBmaW5kUGF0Y2hTaXplRm9yRGl2aXNvcnMoX2NvbXB1dGVEaXZpc29ycyh3aWRlU2lkZSkpIHx8XG4gICAgICAgIGZpbmRQYXRjaFNpemVGb3JEaXZpc29ycyhfY29tcHV0ZURpdmlzb3JzKGRlc2lyZWRQYXRjaFNpemUgKiBuck9mUGF0Y2hlcykpO1xuXG4gICAgcmV0dXJuIG9wdGltYWxQYXRjaFNpemU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfcGFyc2VDU1NEaW1lbnNpb25WYWx1ZXModmFsdWUpIHtcbiAgICBjb25zdCBkaW1lbnNpb24gPSB7XG4gICAgICAgIHZhbHVlOiBwYXJzZUZsb2F0KHZhbHVlKSxcbiAgICAgICAgdW5pdDogdmFsdWUuaW5kZXhPZignJScpID09PSB2YWx1ZS5sZW5ndGggLSAxID8gJyUnIDogJyUnXG4gICAgfTtcblxuICAgIHJldHVybiBkaW1lbnNpb247XG59XG5cbmV4cG9ydCBjb25zdCBfZGltZW5zaW9uc0NvbnZlcnRlcnMgPSB7XG4gICAgdG9wOiAoZGltZW5zaW9uLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGlmIChkaW1lbnNpb24udW5pdCA9PT0gJyUnKSB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihjb250ZXh0LmhlaWdodCAqIChkaW1lbnNpb24udmFsdWUgLyAxMDApKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgcmlnaHQ6IChkaW1lbnNpb24sIGNvbnRleHQpID0+IHtcbiAgICAgICAgaWYgKGRpbWVuc2lvbi51bml0ID09PSAnJScpIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmZsb29yKGNvbnRleHQud2lkdGggKiAoMSAtIGRpbWVuc2lvbi52YWx1ZSAvIDEwMCkpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBib3R0b206IChkaW1lbnNpb24sIGNvbnRleHQpID0+IHtcbiAgICAgICAgaWYgKGRpbWVuc2lvbi51bml0ID09PSAnJScpIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmZsb29yKGNvbnRleHQuaGVpZ2h0ICogKDEgLSBkaW1lbnNpb24udmFsdWUgLyAxMDApKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbGVmdDogKGRpbWVuc2lvbiwgY29udGV4dCkgPT4ge1xuICAgICAgICBpZiAoZGltZW5zaW9uLnVuaXQgPT09ICclJykge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoY29udGV4dC53aWR0aCAqIChkaW1lbnNpb24udmFsdWUgLyAxMDApKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wdXRlSW1hZ2VBcmVhKGlucHV0V2lkdGgsIGlucHV0SGVpZ2h0LCBhcmVhKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHsgd2lkdGg6IGlucHV0V2lkdGgsIGhlaWdodDogaW5wdXRIZWlnaHQgfTtcbiAgICBjb25zdCBwYXJzZWRBcmVhID0gT2JqZWN0LmtleXMoYXJlYSkucmVkdWNlKChyZXN1bHQsIGtleSkgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGFyZWFba2V5XTtcbiAgICAgICAgY29uc3QgcGFyc2VkID0gX3BhcnNlQ1NTRGltZW5zaW9uVmFsdWVzKHZhbHVlKTtcbiAgICAgICAgY29uc3QgY2FsY3VsYXRlZCA9IF9kaW1lbnNpb25zQ29udmVydGVyc1trZXldKHBhcnNlZCwgY29udGV4dCk7XG5cbiAgICAgICAgcmVzdWx0W2tleV0gPSBjYWxjdWxhdGVkO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0sIHt9KTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHN4OiBwYXJzZWRBcmVhLmxlZnQsXG4gICAgICAgIHN5OiBwYXJzZWRBcmVhLnRvcCxcbiAgICAgICAgc3c6IHBhcnNlZEFyZWEucmlnaHQgLSBwYXJzZWRBcmVhLmxlZnQsXG4gICAgICAgIHNoOiBwYXJzZWRBcmVhLmJvdHRvbSAtIHBhcnNlZEFyZWEudG9wXG4gICAgfTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGV2ZW50cyA9IHt9O1xuXG4gICAgZnVuY3Rpb24gZ2V0RXZlbnQoZXZlbnROYW1lKSB7XG4gICAgICAgIGlmICghZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgICAgICAgIGV2ZW50c1tldmVudE5hbWVdID0ge1xuICAgICAgICAgICAgICAgIHN1YnNjcmliZXJzOiBbXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZXZlbnRzW2V2ZW50TmFtZV07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYXJFdmVudHMoKSB7XG4gICAgICAgIGV2ZW50cyA9IHt9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHB1Ymxpc2hTdWJzY3JpcHRpb24oc3Vic2NyaXB0aW9uLCBkYXRhKSB7XG4gICAgICAgIGlmIChzdWJzY3JpcHRpb24uYXN5bmMpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbi5jYWxsYmFjayhkYXRhKTtcbiAgICAgICAgICAgIH0sIDQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3Vic2NyaXB0aW9uLmNhbGxiYWNrKGRhdGEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3Vic2NyaWJlKGV2ZW50LCBjYWxsYmFjaywgYXN5bmMpIHtcbiAgICAgICAgbGV0IHN1YnNjcmlwdGlvbjtcblxuICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBzdWJzY3JpcHRpb24gPSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IGNhbGxiYWNrLFxuICAgICAgICAgICAgICAgIGFzeW5jOiBhc3luY1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbiA9IGNhbGxiYWNrO1xuICAgICAgICAgICAgaWYgKCFzdWJzY3JpcHRpb24uY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICB0aHJvdyAnQ2FsbGJhY2sgd2FzIG5vdCBzcGVjaWZpZWQgb24gb3B0aW9ucyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBnZXRFdmVudChldmVudCkuc3Vic2NyaWJlcnMucHVzaChzdWJzY3JpcHRpb24pO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHN1YnNjcmliZTogZnVuY3Rpb24gKGV2ZW50LCBjYWxsYmFjaywgYXN5bmMpIHtcbiAgICAgICAgICAgIHJldHVybiBzdWJzY3JpYmUoZXZlbnQsIGNhbGxiYWNrLCBhc3luYyk7XG4gICAgICAgIH0sXG4gICAgICAgIHB1Ymxpc2g6IGZ1bmN0aW9uIChldmVudE5hbWUsIGRhdGEpIHtcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0gZ2V0RXZlbnQoZXZlbnROYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IHN1YnNjcmliZXJzID0gZXZlbnQuc3Vic2NyaWJlcnM7XG5cbiAgICAgICAgICAgIC8vIFB1Ymxpc2ggb25lLXRpbWUgc3Vic2NyaXB0aW9uc1xuICAgICAgICAgICAgc3Vic2NyaWJlcnMuZmlsdGVyKGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICEhc3Vic2NyaWJlci5vbmNlO1xuICAgICAgICAgICAgfSkuZm9yRWFjaCgoc3Vic2NyaWJlcikgPT4ge1xuICAgICAgICAgICAgICAgIHB1Ymxpc2hTdWJzY3JpcHRpb24oc3Vic2NyaWJlciwgZGF0YSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gcmVtb3ZlIHRoZW0gZnJvbSB0aGUgc3Vic2NyaWJlclxuICAgICAgICAgICAgZXZlbnQuc3Vic2NyaWJlcnMgPSBzdWJzY3JpYmVycy5maWx0ZXIoZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIXN1YnNjcmliZXIub25jZTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBwdWJsaXNoIHRoZSByZXN0XG4gICAgICAgICAgICBldmVudC5zdWJzY3JpYmVycy5mb3JFYWNoKChzdWJzY3JpYmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgcHVibGlzaFN1YnNjcmlwdGlvbihzdWJzY3JpYmVyLCBkYXRhKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBvbmNlOiBmdW5jdGlvbiAoZXZlbnQsIGNhbGxiYWNrLCBhc3luYykge1xuICAgICAgICAgICAgc3Vic2NyaWJlKGV2ZW50LCB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IGNhbGxiYWNrLFxuICAgICAgICAgICAgICAgIGFzeW5jOiBhc3luYyxcbiAgICAgICAgICAgICAgICBvbmNlOiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgdW5zdWJzY3JpYmU6IGZ1bmN0aW9uIChldmVudE5hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBsZXQgZXZlbnQ7XG5cbiAgICAgICAgICAgIGlmIChldmVudE5hbWUpIHtcbiAgICAgICAgICAgICAgICBldmVudCA9IGdldEV2ZW50KGV2ZW50TmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50ICYmIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnN1YnNjcmliZXJzID0gZXZlbnQuc3Vic2NyaWJlcnMuZmlsdGVyKGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3Vic2NyaWJlci5jYWxsYmFjayAhPT0gY2FsbGJhY2s7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnN1YnNjcmliZXJzID0gW107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjbGVhckV2ZW50cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbn0pKCk7XG4iLCJleHBvcnQgY2xhc3MgSW1hZ2VEZWJ1ZyB7XG4gICAgc3RhdGljIGRyYXdSZWN0KHBvcywgc2l6ZSwgY29udGV4dCwgc3R5bGUpIHtcbiAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9IHN0eWxlLmNvbG9yO1xuICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IHN0eWxlLmNvbG9yO1xuICAgICAgICBjb250ZXh0LmxpbmVXaWR0aCA9IHN0eWxlLmxpbmVXaWR0aCB8fCAxO1xuICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICBjb250ZXh0LnN0cm9rZVJlY3QocG9zLngsIHBvcy55LCBzaXplLngsIHNpemUueSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGRyYXdQYXRoKHBhdGgsIGRlZiwgY29udGV4dCwgc3R5bGUpIHtcbiAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9IHN0eWxlLmNvbG9yO1xuICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IHN0eWxlLmNvbG9yO1xuICAgICAgICBjb250ZXh0LmxpbmVXaWR0aCA9IHN0eWxlLmxpbmVXaWR0aDtcbiAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgY29udGV4dC5tb3ZlVG8ocGF0aFswXVtkZWYueF0sIHBhdGhbMF1bZGVmLnldKTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDE7IGogPCBwYXRoLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBjb250ZXh0LmxpbmVUbyhwYXRoW2pdW2RlZi54XSwgcGF0aFtqXVtkZWYueV0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgICAgIGNvbnRleHQuc3Ryb2tlKCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGRyYXdJbWFnZShpbWFnZURhdGEsIHdpZHRoLCBoZWlnaHQsIGNvbnRleHQpIHtcbiAgICAgICAgY29uc3QgY2FudmFzRGF0YSA9IGNvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICBjb25zdCBkYXRhID0gY2FudmFzRGF0YS5kYXRhO1xuICAgICAgICBsZXQgaW1hZ2VEYXRhUG9zID0gaW1hZ2VEYXRhLmxlbmd0aDtcbiAgICAgICAgbGV0IGNhbnZhc0RhdGFQb3MgPSBkYXRhLmxlbmd0aDtcblxuICAgICAgICBpZiAoY2FudmFzRGF0YVBvcyAvIGltYWdlRGF0YVBvcyAhPT0gNCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHdoaWxlIChpbWFnZURhdGFQb3MtLSkge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBpbWFnZURhdGFbaW1hZ2VEYXRhUG9zXTtcbiAgICAgICAgICAgIGRhdGFbLS1jYW52YXNEYXRhUG9zXSA9IDI1NTtcbiAgICAgICAgICAgIGRhdGFbLS1jYW52YXNEYXRhUG9zXSA9IHZhbHVlO1xuICAgICAgICAgICAgZGF0YVstLWNhbnZhc0RhdGFQb3NdID0gdmFsdWU7XG4gICAgICAgICAgICBkYXRhWy0tY2FudmFzRGF0YVBvc10gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBjb250ZXh0LnB1dEltYWdlRGF0YShjYW52YXNEYXRhLCAwLCAwKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgaHN2MnJnYiB9IGZyb20gJy4uL2NvbW1vbi9jdl91dGlscyc7XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIGJhc2ljIGltYWdlIGNvbWJpbmluZyB0aGUgZGF0YSBhbmQgc2l6ZS5cbiAqIEluIGFkZGl0aW9uLCBzb21lIG1ldGhvZHMgZm9yIG1hbmlwdWxhdGlvbiBhcmUgY29udGFpbmVkLlxuICovXG5leHBvcnQgY2xhc3MgSW1hZ2VXcmFwcGVyIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2l6ZSB7eCx5fSBUaGUgc2l6ZSBvZiB0aGUgaW1hZ2UgaW4gcGl4ZWxcbiAgICAgKiBAcGFyYW0gZGF0YSB7QXJyYXl9IElmIGdpdmVuLCBhIGZsYXQgYXJyYXkgY29udGFpbmluZyB0aGUgcGl4ZWwgZGF0YVxuICAgICAqIEBwYXJhbSBBcnJheVR5cGUge1R5cGV9IElmIGdpdmVuLCB0aGUgZGVzaXJlZCBEYXRhVHlwZSBvZiB0aGUgQXJyYXkgKG1heSBiZSB0eXBlZC9ub24tdHlwZWQpXG4gICAgICogQHBhcmFtIGluaXRpYWxpemUge0Jvb2xlYW59IEluZGljYXRpbmcgaWYgdGhlIGFycmF5IHNob3VsZCBiZSBpbml0aWFsaXplZCBvbiBjcmVhdGlvbi5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzaXplLCBkYXRhLCBBcnJheVR5cGUsIGluaXRpYWxpemUpIHtcbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGEgPSBuZXcgKEFycmF5VHlwZSB8fCBVaW50OEFycmF5KShzaXplLnggKiBzaXplLnkpO1xuXG4gICAgICAgICAgICBpZiAoaW5pdGlhbGl6ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5maWxsKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogdGVzdHMgaWYgYSBwb3NpdGlvbiBpcyB3aXRoaW4gdGhlIGltYWdlIHdpdGggYSBnaXZlbiBvZmZzZXRcbiAgICAgKiBAcGFyYW0gaW1nUmVmIHt4LCB5fSBUaGUgbG9jYXRpb24gdG8gdGVzdFxuICAgICAqIEBwYXJhbSBib3JkZXIgTnVtYmVyIHRoZSBwYWRkaW5nIHZhbHVlIGluIHBpeGVsXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaWYgbG9jYXRpb24gaW5zaWRlIHRoZSBpbWFnZSdzIGJvcmRlciwgZmFsc2Ugb3RoZXJ3aXNlXG4gICAgICogQHNlZSBjdmQvaW1hZ2UuaFxuICAgICAqL1xuICAgIGluSW1hZ2VXaXRoQm9yZGVyKGltZ1JlZiwgYm9yZGVyKSB7XG4gICAgICAgIHJldHVybiAoaW1nUmVmLnggPj0gYm9yZGVyKVxuICAgICAgICAgICAgJiYgKGltZ1JlZi55ID49IGJvcmRlcilcbiAgICAgICAgICAgICYmIChpbWdSZWYueCA8ICh0aGlzLnNpemUueCAtIGJvcmRlcikpXG4gICAgICAgICAgICAmJiAoaW1nUmVmLnkgPCAodGhpcy5zaXplLnkgLSBib3JkZXIpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuIHtJbWFnZVdyYXBwZXIpIGFuZCBjb3BpZXMgdGhlIG5lZWRlZCB1bmRlcmx5aW5nIGltYWdlLWRhdGEgYXJlYVxuICAgICAqIEBwYXJhbSBpbWFnZVdyYXBwZXIge0ltYWdlV3JhcHBlcn0gVGhlIHRhcmdldCB7SW1hZ2VXcmFwcGVyfSB3aGVyZSB0aGUgZGF0YSBzaG91bGQgYmUgY29waWVkXG4gICAgICogQHBhcmFtIGZyb21YIHtOdW1iZXJ9IFRoZSBob3Jpem9udGFsIHBvc2l0aW9uIHdoZXJlIHRvIGNvcHkgZnJvbVxuICAgICAqIEBwYXJhbSBmcm9tWSB7TnVtYmVyfSBUaGUgdmVydGljYWwgcG9zaXRpb24gd2hlcmUgdG8gY29weSBmcm9tXG4gICAgKi9cbiAgICBzdWJJbWFnZUFzQ29weShpbWFnZVdyYXBwZXIsIGZyb21YLCBmcm9tWSkge1xuICAgICAgICBjb25zdCBzaXplWSA9IGltYWdlV3JhcHBlci5zaXplLnk7XG4gICAgICAgIGNvbnN0IHNpemVYID0gaW1hZ2VXcmFwcGVyLnNpemUueDtcblxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHNpemVYOyB4KyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgc2l6ZVk7IHkrKykge1xuICAgICAgICAgICAgICAgIGltYWdlV3JhcHBlci5kYXRhW3kgKiBzaXplWCArIHhdID0gdGhpcy5kYXRhWyhmcm9tWSArIHkpICogdGhpcy5zaXplLnggKyBmcm9tWCArIHhdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0cmlldmVzIGEgZ2l2ZW4gcGl4ZWwgcG9zaXRpb24gZnJvbSB0aGUgaW1hZ2VcbiAgICAgKiBAcGFyYW0geCB7TnVtYmVyfSBUaGUgeC1wb3NpdGlvblxuICAgICAqIEBwYXJhbSB5IHtOdW1iZXJ9IFRoZSB5LXBvc2l0aW9uXG4gICAgICogQHJldHVybnMge051bWJlcn0gVGhlIGdyYXlzY2FsZSB2YWx1ZSBhdCB0aGUgcGl4ZWwtcG9zaXRpb25cbiAgICAgKi9cbiAgICBnZXQoeCwgeSkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhW3kgKiB0aGlzLnNpemUueCArIHhdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgYSBnaXZlbiBwaXhlbCBwb3NpdGlvbiBpbiB0aGUgaW1hZ2VcbiAgICAgKiBAcGFyYW0geCB7TnVtYmVyfSBUaGUgeC1wb3NpdGlvblxuICAgICAqIEBwYXJhbSB5IHtOdW1iZXJ9IFRoZSB5LXBvc2l0aW9uXG4gICAgICogQHBhcmFtIHZhbHVlIHtOdW1iZXJ9IFRoZSBncmF5c2NhbGUgdmFsdWUgdG8gc2V0XG4gICAgICogQHJldHVybnMge0ltYWdlV3JhcHBlcn0gVGhlIEltYWdlIGl0c2VsZiAoZm9yIHBvc3NpYmxlIGNoYWluaW5nKVxuICAgICAqL1xuICAgIHNldCh4LCB5LCB2YWx1ZSkge1xuICAgICAgICB0aGlzLmRhdGFbeSAqIHRoaXMuc2l6ZS54ICsgeF0gPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgYm9yZGVyIG9mIHRoZSBpbWFnZSAoMSBwaXhlbCkgdG8gemVyb1xuICAgICAqL1xuICAgIHplcm9Cb3JkZXIoKSB7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy5zaXplLng7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuc2l6ZS55O1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd2lkdGg7IGkrKykge1xuICAgICAgICAgICAgZGF0YVtpXSA9IGRhdGFbKGhlaWdodCAtIDEpICogd2lkdGggKyBpXSA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGhlaWdodCAtIDE7IGkrKykge1xuICAgICAgICAgICAgZGF0YVtpICogd2lkdGhdID0gZGF0YVtpICogd2lkdGggKyAod2lkdGggLSAxKV0gPSAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW52ZXJ0cyBhIGJpbmFyeSBpbWFnZSBpbiBwbGFjZVxuICAgICAqL1xuICAgIGludmVydCgpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YTtcblxuICAgICAgICBmb3IgKGxldCBpID0gZGF0YS5sZW5ndGg7IGktLTspIHtcbiAgICAgICAgICAgIGRhdGFbaV0gPSBkYXRhW2ldID8gMCA6IDE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtb21lbnRzKGxhYmVsQ291bnQpIHtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5zaXplLnk7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy5zaXplLng7XG4gICAgICAgIGNvbnN0IGxhYmVsU3VtID0gW107XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuXG4gICAgICAgIGlmIChsYWJlbENvdW50IDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxhYmVsQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgbGFiZWxTdW1baV0gPSB7XG4gICAgICAgICAgICAgICAgbTAwOiAwLFxuICAgICAgICAgICAgICAgIG0wMTogMCxcbiAgICAgICAgICAgICAgICBtMTA6IDAsXG4gICAgICAgICAgICAgICAgbTExOiAwLFxuICAgICAgICAgICAgICAgIG0wMjogMCxcbiAgICAgICAgICAgICAgICBtMjA6IDAsXG4gICAgICAgICAgICAgICAgdGhldGE6IDAsXG4gICAgICAgICAgICAgICAgcmFkOiAwXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBoZWlnaHQ7IHkrKykge1xuICAgICAgICAgICAgY29uc3QgeXNxID0geSAqIHk7XG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHdpZHRoOyB4KyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWwgPSB0aGlzLmRhdGFbeSAqIHdpZHRoICsgeF07XG4gICAgICAgICAgICAgICAgaWYgKHZhbCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBsYWJlbFN1bVt2YWwgLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwubTAwICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsLm0wMSArPSB5O1xuICAgICAgICAgICAgICAgICAgICBsYWJlbC5tMTAgKz0geDtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwubTExICs9IHggKiB5O1xuICAgICAgICAgICAgICAgICAgICBsYWJlbC5tMDIgKz0geXNxO1xuICAgICAgICAgICAgICAgICAgICBsYWJlbC5tMjAgKz0geCAqIHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgUEkgPSBNYXRoLlBJO1xuICAgICAgICBjb25zdCBQSV80ID0gUEkgLyA0O1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGFiZWxDb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBsYWJlbCA9IGxhYmVsU3VtW2ldO1xuICAgICAgICAgICAgaWYgKCFpc05hTihsYWJlbC5tMDApICYmIGxhYmVsLm0wMCAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHhfID0gbGFiZWwubTEwIC8gbGFiZWwubTAwO1xuICAgICAgICAgICAgICAgIGNvbnN0IHlfID0gbGFiZWwubTAxIC8gbGFiZWwubTAwO1xuICAgICAgICAgICAgICAgIGNvbnN0IG11MTEgPSBsYWJlbC5tMTEgLyBsYWJlbC5tMDAgLSB4XyAqIHlfO1xuICAgICAgICAgICAgICAgIGNvbnN0IG11MDIgPSBsYWJlbC5tMDIgLyBsYWJlbC5tMDAgLSB5XyAqIHlfO1xuICAgICAgICAgICAgICAgIGNvbnN0IG11MjAgPSBsYWJlbC5tMjAgLyBsYWJlbC5tMDAgLSB4XyAqIHhfO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRtcCA9IDAuNSAqIE1hdGguYXRhbigobXUwMiAtIG11MjApIC8gKDIgKiBtdTExKSkgKyAobXUxMSA+PSAwID8gUElfNCA6IC1QSV80KSArIFBJO1xuICAgICAgICAgICAgICAgIGxhYmVsLnRoZXRhID0gKHRtcCAqIDE4MCAvIFBJICsgOTApICUgMTgwIC0gOTA7XG4gICAgICAgICAgICAgICAgaWYgKGxhYmVsLnRoZXRhIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbC50aGV0YSArPSAxODA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxhYmVsLnJhZCA9IHRtcCA+IFBJID8gdG1wIC0gUEkgOiB0bXA7XG4gICAgICAgICAgICAgICAgbGFiZWwueCA9IE1hdGguY29zKHRtcCk7XG4gICAgICAgICAgICAgICAgbGFiZWwueSA9IE1hdGguc2luKHRtcCk7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gobGFiZWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEaXNwbGF5cyB0aGUge0ltYWdlV3JhcHBlcn0gaW4gYSBnaXZlbiBjYW52YXNcbiAgICAgKiBAcGFyYW0gY2FudmFzIHtDYW52YXN9IFRoZSBjYW52YXMgZWxlbWVudCB0byB3cml0ZSB0b1xuICAgICAqIEBwYXJhbSBzY2FsZSB7TnVtYmVyfSBTY2FsZSB3aGljaCBpcyBhcHBsaWVkIHRvIGVhY2ggcGl4ZWwtdmFsdWVcbiAgICAgKi9cbiAgICBzaG93KGNhbnZhcywgc2NhbGUpIHtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5zaXplLnk7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy5zaXplLng7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIGNvbnN0IGZyYW1lID0gY29udGV4dC5nZXRJbWFnZURhdGEoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBmcmFtZS5kYXRhO1xuICAgICAgICBsZXQgY3VycmVudCA9IDA7XG5cbiAgICAgICAgaWYgKCFzY2FsZSkge1xuICAgICAgICAgICAgc2NhbGUgPSAxLjA7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGhlaWdodDsgeSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHdpZHRoOyB4KyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwaXhlbCA9IHkgKiB3aWR0aCArIHg7XG4gICAgICAgICAgICAgICAgY3VycmVudCA9IHRoaXMuZ2V0KHgsIHkpICogc2NhbGU7XG4gICAgICAgICAgICAgICAgZGF0YVtwaXhlbCAqIDQgKyAwXSA9IGN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgZGF0YVtwaXhlbCAqIDQgKyAxXSA9IGN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgZGF0YVtwaXhlbCAqIDQgKyAyXSA9IGN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgZGF0YVtwaXhlbCAqIDQgKyAzXSA9IDI1NTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vZnJhbWUuZGF0YSA9IGRhdGE7XG4gICAgICAgIGNvbnRleHQucHV0SW1hZ2VEYXRhKGZyYW1lLCAwLCAwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEaXNwbGF5cyB0aGUgcGFydCBvZiB0aGUgaW1hZ2UgaW4gYSBnaXZlbiBjYW52YXNcbiAgICAgKiBAcGFyYW0gY2FudmFzIHtDYW52YXN9IFRoZSBjYW52YXMgZWxlbWVudCB0byB3cml0ZSB0b1xuICAgICAqIEBwYXJhbSBzY2FsZSB7TnVtYmVyfSBTY2FsZSB3aGljaCBpcyBhcHBsaWVkIHRvIGVhY2ggcGl4ZWwtdmFsdWVcbiAgICAgKiBAcGFyYW0gZnJvbVgge051bWJlcn0gVGhlIGhvcml6b250YWwgcG9zaXRpb24gd2hlcmUgdG8gb3ZlcmxheSBmcm9tXG4gICAgICogQHBhcmFtIGZyb21ZIHtOdW1iZXJ9IFRoZSB2ZXJ0aWNhbCBwb3NpdGlvbiB3aGVyZSB0byBvdmVybGF5IGZyb21cbiAgICAgKi9cbiAgICBvdmVybGF5KGNhbnZhcywgc2NhbGUsIGZyb21YLCBmcm9tWSkge1xuICAgICAgICBjb25zdCBoc3YgPSBbMCwgMSwgMV07XG4gICAgICAgIGNvbnN0IHdoaXRlUmdiID0gWzI1NSwgMjU1LCAyNTVdO1xuICAgICAgICBjb25zdCBibGFja1JnYiA9IFswLCAwLCAwXTtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICBjb25zdCBmcmFtZSA9IGNvbnRleHQuZ2V0SW1hZ2VEYXRhKGZyb21YLCBmcm9tWSwgdGhpcy5zaXplLngsIHRoaXMuc2l6ZS55KTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGZyYW1lLmRhdGE7XG5cbiAgICAgICAgaWYgKCFzY2FsZSB8fCBzY2FsZSA8IDAgfHwgc2NhbGUgPiAzNjApIHtcbiAgICAgICAgICAgIHNjYWxlID0gMzYwO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgbGVuZ3RoID0gdGhpcy5kYXRhLmxlbmd0aDsgbGVuZ3RoLS07KSB7XG4gICAgICAgICAgICBoc3ZbMF0gPSB0aGlzLmRhdGFbbGVuZ3RoXSAqIHNjYWxlO1xuICAgICAgICAgICAgY29uc3QgcmdiID0gaHN2WzBdIDw9IDAgPyB3aGl0ZVJnYiA6IGhzdlswXSA+PSAzNjAgPyBibGFja1JnYiA6IGhzdjJyZ2IoaHN2KTtcbiAgICAgICAgICAgIGRhdGFbbGVuZ3RoICogNCArIDBdID0gcmdiWzBdO1xuICAgICAgICAgICAgZGF0YVtsZW5ndGggKiA0ICsgMV0gPSByZ2JbMV07XG4gICAgICAgICAgICBkYXRhW2xlbmd0aCAqIDQgKyAyXSA9IHJnYlsyXTtcbiAgICAgICAgICAgIGRhdGFbbGVuZ3RoICogNCArIDNdID0gMjU1O1xuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5wdXRJbWFnZURhdGEoZnJhbWUsIGZyb21YLCBmcm9tWSk7XG4gICAgfVxufVxuIiwiXG5leHBvcnQgZnVuY3Rpb24gZW51bWVyYXRlRGV2aWNlcygpIHtcbiAgICBpZiAobmF2aWdhdG9yLm1lZGlhRGV2aWNlcyAmJiB0eXBlb2YgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5lbnVtZXJhdGVEZXZpY2VzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmVudW1lcmF0ZURldmljZXMoKTtcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcignZW51bWVyYXRlRGV2aWNlcyBpcyBub3QgZGVmaW5lZCcpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVzZXJNZWRpYShjb25zdHJhaW50cykge1xuICAgIGlmIChuYXZpZ2F0b3IubWVkaWFEZXZpY2VzICYmIHR5cGVvZiBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoY29uc3RyYWludHMpO1xuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdnZXRVc2VyTWVkaWEgaXMgbm90IGRlZmluZWQnKSk7XG59XG4iLCIvKipcbiAqIFBlcmZvcm1zIGEgZGVlcCBtZXJnZSBvZiBvYmplY3RzIGFuZCByZXR1cm5zIG5ldyBvYmplY3QuXG4gKiBEb2VzIG5vdCBtb2RpZnkgb2JqZWN0cyAoaW1tdXRhYmxlKS5cbiAqIEBzZWUgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzQ4MjE4MjA5XG4gKlxuICogQHBhcmFtIHsuLi5vYmplY3R9IG9iamVjdHMgLSBPYmplY3RzIHRvIG1lcmdlXG4gKiBAcmV0dXJucyB7b2JqZWN0fSBOZXcgb2JqZWN0IHdpdGggbWVyZ2VkIGtleS92YWx1ZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlKC4uLm9iamVjdHMpIHtcbiAgICBjb25zdCBpc09iamVjdCA9IG9iaiA9PiBvYmogJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCc7XG5cbiAgICByZXR1cm4gb2JqZWN0cy5yZWR1Y2UoKHByZXYsIG9iaikgPT4ge1xuICAgICAgICBpZiAob2JqKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwVmFsID0gcHJldltrZXldO1xuICAgICAgICAgICAgICAgIGNvbnN0IG9WYWwgPSBvYmpba2V5XTtcblxuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHBWYWwpICYmIEFycmF5LmlzQXJyYXkob1ZhbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gcHJldltrZXldID0gcFZhbC5jb25jYXQoLi4ub1ZhbCk7XG4gICAgICAgICAgICAgICAgICAgIHByZXZba2V5XSA9IG9WYWw7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpc09iamVjdChwVmFsKSAmJiBpc09iamVjdChvVmFsKSkge1xuICAgICAgICAgICAgICAgICAgICBwcmV2W2tleV0gPSBtZXJnZShwVmFsLCBvVmFsKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwcmV2W2tleV0gPSBvVmFsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHByZXY7XG4gICAgfSwge30pO1xufSIsIi8qKlxuICogdHlwZWRlZnMuanNcbiAqIE5vcm1hbGl6ZXMgYnJvd3Nlci1zcGVjaWZpYyBwcmVmaXhlc1xuICovXG5cbk1hdGguaW11bCA9IE1hdGguaW11bCB8fCAoKGEsIGIpID0+IHtcbiAgICBjb25zdCBhaCA9IChhID4+PiAxNikgJiAweGZmZmY7XG4gICAgY29uc3QgYWwgPSBhICYgMHhmZmZmO1xuICAgIGNvbnN0IGJoID0gKGIgPj4+IDE2KSAmIDB4ZmZmZjtcbiAgICBjb25zdCBibCA9IGIgJiAweGZmZmY7XG4gICAgLy8gdGhlIHNoaWZ0IGJ5IDAgZml4ZXMgdGhlIHNpZ24gb24gdGhlIGhpZ2ggcGFydFxuICAgIC8vIHRoZSBmaW5hbCB8MCBjb252ZXJ0cyB0aGUgdW5zaWduZWQgdmFsdWUgaW50byBhIHNpZ25lZCB2YWx1ZVxuICAgIHJldHVybiAoKGFsICogYmwpICsgKCgoYWggKiBibCArIGFsICogYmgpIDw8IDE2KSA+Pj4gMCkgfCAwKTtcbn0pO1xuXG5pZiAodHlwZW9mIE9iamVjdC5hc3NpZ24gIT09ICdmdW5jdGlvbicpIHtcbiAgICBPYmplY3QuYXNzaWduID0gdGFyZ2V0ID0+IHsgLy8gLmxlbmd0aCBvZiBmdW5jdGlvbiBpcyAyXG4gICAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgICAgaWYgKHRhcmdldCA9PT0gbnVsbCkgeyAvLyBUeXBlRXJyb3IgaWYgdW5kZWZpbmVkIG9yIG51bGxcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IHVuZGVmaW5lZCBvciBudWxsIHRvIG9iamVjdCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdG8gPSBPYmplY3QodGFyZ2V0KTtcblxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDE7IGluZGV4IDwgYXJndW1lbnRzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgbmV4dFNvdXJjZSA9IGFyZ3VtZW50c1tpbmRleF07XG5cbiAgICAgICAgICAgIGlmIChuZXh0U291cmNlICE9PSBudWxsKSB7IC8vIFNraXAgb3ZlciBpZiB1bmRlZmluZWQgb3IgbnVsbFxuICAgICAgICAgICAgICAgIGZvciAobGV0IG5leHRLZXkgaW4gbmV4dFNvdXJjZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBBdm9pZCBidWdzIHdoZW4gaGFzT3duUHJvcGVydHkgaXMgc2hhZG93ZWRcbiAgICAgICAgICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuZXh0U291cmNlLCBuZXh0S2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9bbmV4dEtleV0gPSBuZXh0U291cmNlW25leHRLZXldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0bztcbiAgICB9O1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgaW5wdXRTdHJlYW06IHtcbiAgICAgICAgbmFtZTogXCJMaXZlXCIsXG4gICAgICAgIHR5cGU6IFwiTGl2ZVN0cmVhbVwiLFxuICAgICAgICBjb25zdHJhaW50czoge1xuICAgICAgICAgICAgd2lkdGg6IDY0MCxcbiAgICAgICAgICAgIGhlaWdodDogNDgwLFxuICAgICAgICAgICAgLy8gYXNwZWN0UmF0aW86IDY0MC80ODAsIC8vIG9wdGlvbmFsXG4gICAgICAgICAgICBmYWNpbmdNb2RlOiBcImVudmlyb25tZW50XCIsIC8vIG9yIHVzZXJcbiAgICAgICAgICAgIC8vIGRldmljZUlkOiBcIjM4NzQ1OTgzNDU3Mzg3NTk4Mzc1OTgzNzU5ODM0XCJcbiAgICAgICAgfSxcbiAgICAgICAgYXJlYToge1xuICAgICAgICAgICAgdG9wOiBcIjAlXCIsXG4gICAgICAgICAgICByaWdodDogXCIwJVwiLFxuICAgICAgICAgICAgbGVmdDogXCIwJVwiLFxuICAgICAgICAgICAgYm90dG9tOiBcIjAlXCJcbiAgICAgICAgfSxcbiAgICAgICAgc2luZ2xlQ2hhbm5lbDogZmFsc2UgLy8gdHJ1ZTogb25seSB0aGUgcmVkIGNvbG9yLWNoYW5uZWwgaXMgcmVhZFxuICAgIH0sXG4gICAgbG9jYXRlOiB0cnVlLFxuICAgIG51bU9mV29ya2VyczogMCxcbiAgICBkZWNvZGVyOiB7XG4gICAgICAgIHJlYWRlcnM6IFtcbiAgICAgICAgICAgICdjb2RlXzEyOF9yZWFkZXInXG4gICAgICAgIF0sXG4gICAgICAgIGRlYnVnOiB7XG4gICAgICAgICAgICBkcmF3Qm91bmRpbmdCb3g6IGZhbHNlLFxuICAgICAgICAgICAgc2hvd0ZyZXF1ZW5jeTogZmFsc2UsXG4gICAgICAgICAgICBkcmF3U2NhbmxpbmU6IGZhbHNlLFxuICAgICAgICAgICAgc2hvd1BhdHRlcm46IGZhbHNlXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGxvY2F0b3I6IHtcbiAgICAgICAgaGFsZlNhbXBsZTogdHJ1ZSxcbiAgICAgICAgcGF0Y2hTaXplOiBcIm1lZGl1bVwiLCAvLyB4LXNtYWxsLCBzbWFsbCwgbWVkaXVtLCBsYXJnZSwgeC1sYXJnZVxuICAgICAgICBkZWJ1Zzoge1xuICAgICAgICAgICAgc2hvd0NhbnZhczogZmFsc2UsXG4gICAgICAgICAgICBzaG93UGF0Y2hlczogZmFsc2UsXG4gICAgICAgICAgICBzaG93Rm91bmRQYXRjaGVzOiBmYWxzZSxcbiAgICAgICAgICAgIHNob3dTa2VsZXRvbjogZmFsc2UsXG4gICAgICAgICAgICBzaG93TGFiZWxzOiBmYWxzZSxcbiAgICAgICAgICAgIHNob3dQYXRjaExhYmVsczogZmFsc2UsXG4gICAgICAgICAgICBzaG93UmVtYWluaW5nUGF0Y2hMYWJlbHM6IGZhbHNlLFxuICAgICAgICAgICAgYm94RnJvbVBhdGNoZXM6IHtcbiAgICAgICAgICAgICAgICBzaG93VHJhbnNmb3JtZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNob3dUcmFuc2Zvcm1lZEJveDogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2hvd0JCOiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcbiIsImxldCBjb25maWc7XG5cbmlmIChFTlYuZGV2ZWxvcG1lbnQpe1xuICAgIGNvbmZpZyA9IHJlcXVpcmUoJy4vY29uZmlnLmRldi5qcycpO1xufSBlbHNlIGlmIChFTlYubm9kZSkge1xuICAgIGNvbmZpZyA9IHJlcXVpcmUoJy4vY29uZmlnLm5vZGUuanMnKTtcbn0gZWxzZSB7XG4gICAgY29uZmlnID0gcmVxdWlyZSgnLi9jb25maWcucHJvZC5qcycpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb25maWc7XG4iLCJpbXBvcnQgQnJlc2VuaGFtIGZyb20gJy4vYnJlc2VuaGFtJztcbmltcG9ydCB7IEltYWdlRGVidWcgfSBmcm9tICcuLi9jb21tb24vaW1hZ2VfZGVidWcnO1xuaW1wb3J0IHsgQ29kZTEyOFJlYWRlciB9IGZyb20gJy4uL3JlYWRlci9jb2RlXzEyOF9yZWFkZXInO1xuaW1wb3J0IHsgQ29kZTM5UmVhZGVyIH0gZnJvbSAnLi4vcmVhZGVyL2NvZGVfMzlfcmVhZGVyJztcbmltcG9ydCB7IENvZGUzOVZJTlJlYWRlciB9IGZyb20gJy4uL3JlYWRlci9jb2RlXzM5X3Zpbl9yZWFkZXInO1xuaW1wb3J0IHsgQ29kYWJhclJlYWRlciB9IGZyb20gJy4uL3JlYWRlci9jb2RhYmFyX3JlYWRlcic7XG5pbXBvcnQgeyBFQU5SZWFkZXIgfSBmcm9tICcuLi9yZWFkZXIvZWFuX3JlYWRlcic7XG5pbXBvcnQgeyBFQU44UmVhZGVyIH0gZnJvbSAnLi4vcmVhZGVyL2Vhbl84X3JlYWRlcic7XG5pbXBvcnQgeyBFQU4yUmVhZGVyIH0gZnJvbSAnLi4vcmVhZGVyL2Vhbl8yX3JlYWRlcic7XG5pbXBvcnQgeyBFQU41UmVhZGVyIH0gZnJvbSAnLi4vcmVhZGVyL2Vhbl81X3JlYWRlcic7XG5pbXBvcnQgeyBVUENSZWFkZXIgfSBmcm9tICcuLi9yZWFkZXIvdXBjX3JlYWRlcic7XG5pbXBvcnQgeyBVUENFUmVhZGVyIH0gZnJvbSAnLi4vcmVhZGVyL3VwY19lX3JlYWRlcic7XG5pbXBvcnQgeyBJMm9mNVJlYWRlciB9IGZyb20gJy4uL3JlYWRlci9pMm9mNV9yZWFkZXInO1xuaW1wb3J0IHsgVHdvT2ZGaXZlUmVhZGVyIH0gZnJvbSAnLi4vcmVhZGVyLzJvZjVfcmVhZGVyJztcbmltcG9ydCB7IENvZGU5M1JlYWRlciB9IGZyb20gJy4uL3JlYWRlci9jb2RlXzkzX3JlYWRlcic7XG5cbmNvbnN0IFJFQURFUlMgPSB7XG4gICAgY29kZV8xMjhfcmVhZGVyOiBDb2RlMTI4UmVhZGVyLFxuICAgIGVhbl9yZWFkZXI6IEVBTlJlYWRlcixcbiAgICBlYW5fNV9yZWFkZXI6IEVBTjVSZWFkZXIsXG4gICAgZWFuXzJfcmVhZGVyOiBFQU4yUmVhZGVyLFxuICAgIGVhbl84X3JlYWRlcjogRUFOOFJlYWRlcixcbiAgICBjb2RlXzM5X3JlYWRlcjogQ29kZTM5UmVhZGVyLFxuICAgIGNvZGVfMzlfdmluX3JlYWRlcjogQ29kZTM5VklOUmVhZGVyLFxuICAgIGNvZGFiYXJfcmVhZGVyOiBDb2RhYmFyUmVhZGVyLFxuICAgIHVwY19yZWFkZXI6IFVQQ1JlYWRlcixcbiAgICB1cGNfZV9yZWFkZXI6IFVQQ0VSZWFkZXIsXG4gICAgaTJvZjVfcmVhZGVyOiBJMm9mNVJlYWRlcixcbiAgICAnMm9mNV9yZWFkZXInOiBUd29PZkZpdmVSZWFkZXIsXG4gICAgY29kZV85M19yZWFkZXI6IENvZGU5M1JlYWRlclxufTtcblxuZXhwb3J0IGNsYXNzIEJhcmNvZGVEZWNvZGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihjb25maWcsIGlucHV0SW1hZ2VXcmFwcGVyKSB7XG4gICAgICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcbiAgICAgICAgdGhpcy5faW5wdXRJbWFnZVdyYXBwZXIgPSBpbnB1dEltYWdlV3JhcHBlcjtcbiAgICAgICAgdGhpcy5fY2FudmFzID0ge1xuICAgICAgICAgICAgY3R4OiB7XG4gICAgICAgICAgICAgICAgZnJlcXVlbmN5OiBudWxsLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IG51bGwsXG4gICAgICAgICAgICAgICAgb3ZlcmxheTogbnVsbFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRvbToge1xuICAgICAgICAgICAgICAgIGZyZXF1ZW5jeTogbnVsbCxcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBudWxsLFxuICAgICAgICAgICAgICAgIG92ZXJsYXk6IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fYmFyY29kZVJlYWRlcnMgPSBbXTtcblxuICAgICAgICB0aGlzLl9pbml0Q2FudmFzKCk7XG4gICAgICAgIHRoaXMuX2luaXRSZWFkZXJzKCk7XG4gICAgICAgIHRoaXMuX2luaXRDb25maWcoKTtcbiAgICB9XG5cbiAgICBfaW5pdENhbnZhcygpIHtcbiAgICAgICAgaWYgKEVOVi5kZXZlbG9wbWVudCAmJiB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBjb25zdCAkZGVidWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVidWcuZGV0ZWN0aW9uJyk7XG4gICAgICAgICAgICB0aGlzLl9jYW52YXMuZG9tLmZyZXF1ZW5jeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbnZhcy5mcmVxdWVuY3knKTtcbiAgICAgICAgICAgIGlmICghdGhpcy5fY2FudmFzLmRvbS5mcmVxdWVuY3kpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jYW52YXMuZG9tLmZyZXF1ZW5jeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2NhbnZhcy5kb20uZnJlcXVlbmN5LmNsYXNzTmFtZSA9ICdmcmVxdWVuY3knO1xuICAgICAgICAgICAgICAgIGlmICgkZGVidWcpIHtcbiAgICAgICAgICAgICAgICAgICAgJGRlYnVnLmFwcGVuZENoaWxkKHRoaXMuX2NhbnZhcy5kb20uZnJlcXVlbmN5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9jYW52YXMuY3R4LmZyZXF1ZW5jeSA9IHRoaXMuX2NhbnZhcy5kb20uZnJlcXVlbmN5LmdldENvbnRleHQoJzJkJyk7XG5cbiAgICAgICAgICAgIHRoaXMuX2NhbnZhcy5kb20ucGF0dGVybiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbnZhcy5wYXR0ZXJuQnVmZmVyJyk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX2NhbnZhcy5kb20ucGF0dGVybikge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NhbnZhcy5kb20ucGF0dGVybiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2NhbnZhcy5kb20ucGF0dGVybi5jbGFzc05hbWUgPSAncGF0dGVybkJ1ZmZlcic7XG4gICAgICAgICAgICAgICAgaWYgKCRkZWJ1Zykge1xuICAgICAgICAgICAgICAgICAgICAkZGVidWcuYXBwZW5kQ2hpbGQodGhpcy5fY2FudmFzLmRvbS5wYXR0ZXJuKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9jYW52YXMuY3R4LnBhdHRlcm4gPSB0aGlzLl9jYW52YXMuZG9tLnBhdHRlcm4uZ2V0Q29udGV4dCgnMmQnKTtcblxuICAgICAgICAgICAgdGhpcy5fY2FudmFzLmRvbS5vdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FudmFzLmRyYXdpbmdCdWZmZXInKTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9jYW52YXMuZG9tLm92ZXJsYXkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jYW52YXMuY3R4Lm92ZXJsYXkgPSB0aGlzLl9jYW52YXMuZG9tLm92ZXJsYXkuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9pbml0UmVhZGVycygpIHtcbiAgICAgICAgdGhpcy5fY29uZmlnLnJlYWRlcnMuZm9yRWFjaChyZWFkZXJDb25maWcgPT4ge1xuICAgICAgICAgICAgbGV0IHJlYWRlcjtcbiAgICAgICAgICAgIGxldCBjb25maWd1cmF0aW9uID0ge307XG4gICAgICAgICAgICBsZXQgc3VwcGxlbWVudHMgPSBbXTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiByZWFkZXJDb25maWcgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgcmVhZGVyID0gcmVhZGVyQ29uZmlnLmZvcm1hdDtcbiAgICAgICAgICAgICAgICBjb25maWd1cmF0aW9uID0gcmVhZGVyQ29uZmlnLmNvbmZpZyB8fCB7fTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHJlYWRlckNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICByZWFkZXIgPSByZWFkZXJDb25maWc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoRU5WLmRldmVsb3BtZW50KSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0JlZm9yZSByZWdpc3RlcmluZyByZWFkZXI6JywgcmVhZGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uLnN1cHBsZW1lbnRzKSB7XG4gICAgICAgICAgICAgICAgc3VwcGxlbWVudHMgPSBjb25maWd1cmF0aW9uLnN1cHBsZW1lbnRzLm1hcChzdXBwbGVtZW50ID0+IG5ldyBSRUFERVJTW3N1cHBsZW1lbnRdKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fYmFyY29kZVJlYWRlcnMucHVzaChuZXcgUkVBREVSU1tyZWFkZXJdKGNvbmZpZ3VyYXRpb24sIHN1cHBsZW1lbnRzKSk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoRU5WLmRldmVsb3BtZW50KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUmVnaXN0ZXJlZCBSZWFkZXJzOicsXG4gICAgICAgICAgICAgICAgLi4udGhpcy5fYmFyY29kZVJlYWRlcnMubWFwKHJlYWRlciA9PiBKU09OLnN0cmluZ2lmeSh7IGZvcm1hdDogcmVhZGVyLkZPUk1BVCwgY29uZmlnOiByZWFkZXIuY29uZmlnIH0pKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfaW5pdENvbmZpZygpIHtcbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy5kZWJ1ZyAmJiB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aGlzLl9jYW52YXMuZG9tLmZyZXF1ZW5jeS5zdHlsZS5kaXNwbGF5ID0gdGhpcy5fY29uZmlnLmRlYnVnLnNob3dGcmVxdWVuY3kgPyAnYmxvY2snIDogJ25vbmUnO1xuICAgICAgICAgICAgdGhpcy5fY2FudmFzLmRvbS5wYXR0ZXJuLnN0eWxlLmRpc3BsYXkgPSB0aGlzLl9jb25maWcuZGVidWcuc2hvd1BhdHRlcm4gPyAnYmxvY2snIDogJ25vbmUnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogZXh0ZW5kIHRoZSBsaW5lIG9uIGJvdGggZW5kc1xuICAgICAqIEBwYXJhbSB7QXJyYXl9IGxpbmVcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gYW5nbGVcbiAgICAgKi9cbiAgICBfZ2V0RXh0ZW5kZWRMaW5lKGxpbmUsIGFuZ2xlKSB7XG4gICAgICAgIGZ1bmN0aW9uIGV4dGVuZExpbmUoYW1vdW50KSB7XG4gICAgICAgICAgICBjb25zdCBleHRlbnNpb24gPSB7XG4gICAgICAgICAgICAgICAgeTogYW1vdW50ICogTWF0aC5zaW4oYW5nbGUpLFxuICAgICAgICAgICAgICAgIHg6IGFtb3VudCAqIE1hdGguY29zKGFuZ2xlKVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgbGluZVswXS55IC09IGV4dGVuc2lvbi55O1xuICAgICAgICAgICAgbGluZVswXS54IC09IGV4dGVuc2lvbi54O1xuICAgICAgICAgICAgbGluZVsxXS55ICs9IGV4dGVuc2lvbi55O1xuICAgICAgICAgICAgbGluZVsxXS54ICs9IGV4dGVuc2lvbi54O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbGluZUxlbmd0aCA9IE1hdGguc3FydChNYXRoLnBvdyhsaW5lWzFdLnkgLSBsaW5lWzBdLnksIDIpICsgTWF0aC5wb3cobGluZVsxXS54IC0gbGluZVswXS54LCAyKSk7XG4gICAgICAgIGxldCBleHRlbnNpb25MZW5ndGggPSBNYXRoLmZsb29yKGxpbmVMZW5ndGggKiAwLjEpO1xuXG4gICAgICAgIGV4dGVuZExpbmUoZXh0ZW5zaW9uTGVuZ3RoKTtcblxuICAgICAgICAvLyBjaGVjayBpZiBpbnNpZGUgaW1hZ2VcbiAgICAgICAgd2hpbGUgKGV4dGVuc2lvbkxlbmd0aCA+IDEgJiYgKCF0aGlzLl9pbnB1dEltYWdlV3JhcHBlci5pbkltYWdlV2l0aEJvcmRlcihsaW5lWzBdLCAwKVxuICAgICAgICAgICAgfHwgIXRoaXMuX2lucHV0SW1hZ2VXcmFwcGVyLmluSW1hZ2VXaXRoQm9yZGVyKGxpbmVbMV0sIDApKSkge1xuICAgICAgICAgICAgZXh0ZW5zaW9uTGVuZ3RoID4+PSAxO1xuICAgICAgICAgICAgZXh0ZW5kTGluZSgtZXh0ZW5zaW9uTGVuZ3RoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBsaW5lO1xuICAgIH1cblxuICAgIF9nZXRMaW5lKGJveCkge1xuICAgICAgICByZXR1cm4gW3tcbiAgICAgICAgICAgIHg6IChib3hbMV0ueCAtIGJveFswXS54KSAvIDIgKyBib3hbMF0ueCxcbiAgICAgICAgICAgIHk6IChib3hbMV0ueSAtIGJveFswXS55KSAvIDIgKyBib3hbMF0ueVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICB4OiAoYm94WzNdLnggLSBib3hbMl0ueCkgLyAyICsgYm94WzJdLngsXG4gICAgICAgICAgICB5OiAoYm94WzNdLnkgLSBib3hbMl0ueSkgLyAyICsgYm94WzJdLnlcbiAgICAgICAgfV07XG4gICAgfVxuXG4gICAgX3RyeURlY29kZShsaW5lKSB7XG4gICAgICAgIGNvbnN0IGJhcmNvZGVMaW5lID0gQnJlc2VuaGFtLmdldEJhcmNvZGVMaW5lKHRoaXMuX2lucHV0SW1hZ2VXcmFwcGVyLCBsaW5lWzBdLCBsaW5lWzFdKTtcblxuICAgICAgICBpZiAodGhpcy5fY29uZmlnLmRlYnVnICYmIHRoaXMuX2NvbmZpZy5kZWJ1Zy5zaG93RnJlcXVlbmN5KSB7XG4gICAgICAgICAgICBJbWFnZURlYnVnLmRyYXdQYXRoKGxpbmUsIHsgeDogJ3gnLCB5OiAneScgfSwgdGhpcy5fY2FudmFzLmN0eC5vdmVybGF5LCB7IGNvbG9yOiAncmVkJywgbGluZVdpZHRoOiAzIH0pO1xuICAgICAgICAgICAgQnJlc2VuaGFtLmRlYnVnLnByaW50RnJlcXVlbmN5KGJhcmNvZGVMaW5lLmxpbmUsIHRoaXMuX2NhbnZhcy5kb20uZnJlcXVlbmN5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIEJyZXNlbmhhbS50b0JpbmFyeUxpbmUoYmFyY29kZUxpbmUpO1xuXG4gICAgICAgIGlmICh0aGlzLl9jb25maWcuZGVidWcgJiYgdGhpcy5fY29uZmlnLmRlYnVnLnNob3dQYXR0ZXJuKSB7XG4gICAgICAgICAgICBCcmVzZW5oYW0uZGVidWcucHJpbnRQYXR0ZXJuKGJhcmNvZGVMaW5lLmxpbmUsIHRoaXMuX2NhbnZhcy5kb20ucGF0dGVybik7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2JhcmNvZGVSZWFkZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBjb2RlUmVzdWx0ID0gdGhpcy5fYmFyY29kZVJlYWRlcnNbaV0uZGVjb2RlUGF0dGVybihiYXJjb2RlTGluZS5saW5lKTtcbiAgICAgICAgICAgIGlmIChjb2RlUmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgY29kZVJlc3VsdCxcbiAgICAgICAgICAgICAgICAgICAgYmFyY29kZUxpbmVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2Qgc2xpY2VzIHRoZSBnaXZlbiBhcmVhIGFwYXJ0IGFuZCB0cmllcyB0byBkZXRlY3QgYSBiYXJjb2RlLXBhdHRlcm4gZm9yIGVhY2ggc2xpY2UuXG4gICAgICogSXQgcmV0dXJucyB0aGUgZGVjb2RlZCBiYXJjb2RlLCBvciBudWxsIGlmIG5vdGhpbmcgd2FzIGZvdW5kXG4gICAgICogQHBhcmFtIHtBcnJheX0gYm94XG4gICAgICogQHBhcmFtIHtBcnJheX0gbGluZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBsaW5lQW5nbGVcbiAgICAgKi9cbiAgICBfdHJ5RGVjb2RlQnJ1dGVGb3JjZShib3gsIGxpbmUsIGxpbmVBbmdsZSkge1xuICAgICAgICBjb25zdCBzaWRlTGVuZ3RoID0gTWF0aC5zcXJ0KChib3hbMV0ueCAtIGJveFswXS54KSAqKiAyICsgKGJveFsxXS55IC0gYm94WzBdLnkpICoqIDIpO1xuICAgICAgICBjb25zdCBzbGljZXMgPSAxNjtcbiAgICAgICAgY29uc3QgeGRpciA9IE1hdGguc2luKGxpbmVBbmdsZSk7XG4gICAgICAgIGNvbnN0IHlkaXIgPSBNYXRoLmNvcyhsaW5lQW5nbGUpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgc2xpY2VzOyBpKyspIHtcbiAgICAgICAgICAgIC8vIG1vdmUgbGluZSBwZXJwZW5kaWN1bGFyIHRvIGFuZ2xlXG4gICAgICAgICAgICBjb25zdCBkaXIgPSBzaWRlTGVuZ3RoIC8gc2xpY2VzICogaSAqIChpICUgMiA9PT0gMCA/IC0xIDogMSk7XG4gICAgICAgICAgICBsaW5lWzBdLnkgKz0gZGlyICogeGRpcjtcbiAgICAgICAgICAgIGxpbmVbMF0ueCAtPSBkaXIgKiB5ZGlyO1xuICAgICAgICAgICAgbGluZVsxXS55ICs9IGRpciAqIHhkaXI7XG4gICAgICAgICAgICBsaW5lWzFdLnggLT0gZGlyICogeWRpcjtcblxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5fdHJ5RGVjb2RlKGxpbmUpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXaXRoIHRoZSBoZWxwIG9mIHRoZSBjb25maWd1cmVkIHJlYWRlcnMgdGhpcyBmdW5jdGlvbiB0cmllcyB0byBkZXRlY3RcbiAgICAgKiBhIHZhbGlkIGJhcmNvZGUgcGF0dGVybiB3aXRoaW4gdGhlIGdpdmVuIGFyZWEuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGJveCBUaGUgYXJlYSB0byBzZWFyY2ggaW5cbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSB0aGUgcmVzdWx0IHtjb2RlUmVzdWx0LCBsaW5lLCBhbmdsZSwgcGF0dGVybiwgdGhyZXNob2xkfVxuICAgICAqL1xuICAgIGRlY29kZUZyb21Cb3VuZGluZ0JveChib3gpIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuX2NhbnZhcy5jdHgub3ZlcmxheTtcblxuICAgICAgICBpZiAodGhpcy5fY29uZmlnLmRlYnVnICYmIHRoaXMuX2NvbmZpZy5kZWJ1Zy5kcmF3Qm91bmRpbmdCb3ggJiYgY29udGV4dCkge1xuICAgICAgICAgICAgSW1hZ2VEZWJ1Zy5kcmF3UGF0aChib3gsIHsgeDogMCwgeTogMSB9LCBjb250ZXh0LCB7IGNvbG9yOiAnYmx1ZScsIGxpbmVXaWR0aDogMiB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBsaW5lID0gdGhpcy5fZ2V0TGluZShib3gpO1xuXG4gICAgICAgIGlmIChsaW5lID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGFuZ2xlID0gTWF0aC5hdGFuMihsaW5lWzFdLnkgLSBsaW5lWzBdLnksIGxpbmVbMV0ueCAtIGxpbmVbMF0ueCk7XG4gICAgICAgIGxpbmUgPSB0aGlzLl9nZXRFeHRlbmRlZExpbmUobGluZSwgYW5nbGUpO1xuXG4gICAgICAgIGxldCByZXN1bHQgPSB0aGlzLl90cnlEZWNvZGUobGluZSk7XG4gICAgICAgIGlmIChyZXN1bHQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuX3RyeURlY29kZUJydXRlRm9yY2UoYm94LCBsaW5lLCBhbmdsZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVzdWx0ID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9jb25maWcuZGVidWcgJiYgdGhpcy5fY29uZmlnLmRlYnVnLmRyYXdTY2FubGluZSAmJiBjb250ZXh0KSB7XG4gICAgICAgICAgICBJbWFnZURlYnVnLmRyYXdQYXRoKGxpbmUsIHsgeDogJ3gnLCB5OiAneScgfSwgY29udGV4dCwgeyBjb2xvcjogJ3JlZCcsIGxpbmVXaWR0aDogMyB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb2RlUmVzdWx0OiByZXN1bHQuY29kZVJlc3VsdCxcbiAgICAgICAgICAgIGxpbmUsXG4gICAgICAgICAgICBhbmdsZSxcbiAgICAgICAgICAgIHBhdHRlcm46IHJlc3VsdC5iYXJjb2RlTGluZS5saW5lLFxuICAgICAgICAgICAgdGhyZXNob2xkOiByZXN1bHQuYmFyY29kZUxpbmUudGhyZXNob2xkXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZGVjb2RlRnJvbUJvdW5kaW5nQm94ZXMoYm94ZXMpIHtcbiAgICAgICAgY29uc3QgYmFyY29kZXMgPSBbXTtcbiAgICAgICAgY29uc3QgbXVsdGlwbGUgPSB0aGlzLl9jb25maWcubXVsdGlwbGU7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib3hlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgYm94ID0gYm94ZXNbaV07XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLmRlY29kZUZyb21Cb3VuZGluZ0JveChib3gpIHx8IHt9O1xuICAgICAgICAgICAgcmVzdWx0LmJveCA9IGJveDtcblxuICAgICAgICAgICAgaWYgKG11bHRpcGxlKSB7XG4gICAgICAgICAgICAgICAgYmFyY29kZXMucHVzaChyZXN1bHQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuY29kZVJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobXVsdGlwbGUpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgYmFyY29kZXNcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBzZXRSZWFkZXJzKHJlYWRlcnMpIHtcbiAgICAgICAgdGhpcy5fY29uZmlnLnJlYWRlcnMgPSByZWFkZXJzO1xuICAgICAgICB0aGlzLl9iYXJjb2RlUmVhZGVycy5sZW5ndGggPSAwO1xuICAgICAgICB0aGlzLl9pbml0UmVhZGVycygpO1xuICAgIH1cbn1cbiIsInZhciBCcmVzZW5oYW0gPSB7fTtcblxuY29uc3QgU2xvcGUgPSB7XG4gICAgRElSOiB7XG4gICAgICAgIFVQOiAxLFxuICAgICAgICBET1dOOiAtMVxuICAgIH1cbn07XG5cbi8qKlxuICogU2NhbnMgYSBsaW5lIG9mIHRoZSBnaXZlbiBpbWFnZSBmcm9tIHBvaW50IHAxIHRvIHAyIGFuZCByZXR1cm5zIGEgcmVzdWx0IG9iamVjdCBjb250YWluaW5nXG4gKiBncmF5LXNjYWxlIHZhbHVlcyAoMC0yNTUpIG9mIHRoZSB1bmRlcmx5aW5nIHBpeGVscyBpbiBhZGRpdGlvbiB0byB0aGUgbWluIGFuZCBtYXggdmFsdWVzLlxuICogQHBhcmFtIHtPYmplY3R9IGltYWdlV3JhcHBlclxuICogQHBhcmFtIHtPYmplY3R9IHAxIFRoZSBzdGFydCBwb2ludCB7eCx5fVxuICogQHBhcmFtIHtPYmplY3R9IHAyIFRoZSBlbmQgcG9pbnQge3gseX1cbiAqIEByZXR1cm5zIHtsaW5lLCBtaW4sIG1heH1cbiAqL1xuQnJlc2VuaGFtLmdldEJhcmNvZGVMaW5lID0gZnVuY3Rpb24gKGltYWdlV3JhcHBlciwgcDEsIHAyKSB7XG4gICAgbGV0IHgwID0gcDEueCB8IDA7XG4gICAgbGV0IHkwID0gcDEueSB8IDA7XG4gICAgbGV0IHgxID0gcDIueCB8IDA7XG4gICAgbGV0IHkxID0gcDIueSB8IDA7XG4gICAgY29uc3Qgc3RlZXAgPSBNYXRoLmFicyh5MSAtIHkwKSA+IE1hdGguYWJzKHgxIC0geDApO1xuICAgIGxldCB0bXA7XG4gICAgY29uc3QgbGluZSA9IFtdO1xuICAgIGNvbnN0IGltYWdlRGF0YSA9IGltYWdlV3JhcHBlci5kYXRhO1xuICAgIGNvbnN0IHdpZHRoID0gaW1hZ2VXcmFwcGVyLnNpemUueDtcbiAgICBsZXQgdmFsO1xuICAgIGxldCBtaW4gPSAyNTU7XG4gICAgbGV0IG1heCA9IDA7XG5cbiAgICBmdW5jdGlvbiByZWFkKGEsIGIpIHtcbiAgICAgICAgdmFsID0gaW1hZ2VEYXRhW2IgKiB3aWR0aCArIGFdO1xuICAgICAgICBtaW4gPSB2YWwgPCBtaW4gPyB2YWwgOiBtaW47XG4gICAgICAgIG1heCA9IHZhbCA+IG1heCA/IHZhbCA6IG1heDtcbiAgICAgICAgbGluZS5wdXNoKHZhbCk7XG4gICAgfVxuXG4gICAgaWYgKHN0ZWVwKSB7XG4gICAgICAgIHRtcCA9IHgwO1xuICAgICAgICB4MCA9IHkwO1xuICAgICAgICB5MCA9IHRtcDtcblxuICAgICAgICB0bXAgPSB4MTtcbiAgICAgICAgeDEgPSB5MTtcbiAgICAgICAgeTEgPSB0bXA7XG4gICAgfVxuICAgIGlmICh4MCA+IHgxKSB7XG4gICAgICAgIHRtcCA9IHgwO1xuICAgICAgICB4MCA9IHgxO1xuICAgICAgICB4MSA9IHRtcDtcblxuICAgICAgICB0bXAgPSB5MDtcbiAgICAgICAgeTAgPSB5MTtcbiAgICAgICAgeTEgPSB0bXA7XG4gICAgfVxuXG4gICAgbGV0IGRlbHRheCA9IHgxIC0geDA7XG4gICAgbGV0IGRlbHRheSA9IE1hdGguYWJzKHkxIC0geTApO1xuICAgIGxldCBlcnJvciA9IChkZWx0YXggLyAyKSB8IDA7XG4gICAgbGV0IHkgPSB5MDtcbiAgICBsZXQgeXN0ZXAgPSB5MCA8IHkxID8gMSA6IC0xO1xuXG4gICAgZm9yIChsZXQgeCA9IHgwOyB4IDwgeDE7IHgrKykge1xuICAgICAgICBpZiAoc3RlZXApIHtcbiAgICAgICAgICAgIHJlYWQoeSwgeCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWFkKHgsIHkpO1xuICAgICAgICB9XG4gICAgICAgIGVycm9yID0gZXJyb3IgLSBkZWx0YXk7XG4gICAgICAgIGlmIChlcnJvciA8IDApIHtcbiAgICAgICAgICAgIHkgKz0geXN0ZXA7XG4gICAgICAgICAgICBlcnJvciA9IGVycm9yICsgZGVsdGF4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbGluZSxcbiAgICAgICAgbWluLFxuICAgICAgICBtYXhcbiAgICB9O1xufTtcblxuLyoqXG4gKiBDb252ZXJ0cyB0aGUgcmVzdWx0IGZyb20gZ2V0QmFyY29kZUxpbmUgaW50byBhIGJpbmFyeSByZXByZXNlbnRhdGlvblxuICogYWxzbyBjb25zaWRlcmluZyB0aGUgZnJlcXVlbmN5IGFuZCBzbG9wZSBvZiB0aGUgc2lnbmFsIGZvciBtb3JlIHJvYnVzdCByZXN1bHRzXG4gKiBAcGFyYW0ge09iamVjdH0gcmVzdWx0IHtsaW5lLCBtaW4sIG1heH1cbiAqL1xuQnJlc2VuaGFtLnRvQmluYXJ5TGluZSA9IGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICBjb25zdCBtaW4gPSByZXN1bHQubWluO1xuICAgIGNvbnN0IG1heCA9IHJlc3VsdC5tYXg7XG4gICAgY29uc3QgbGluZSA9IHJlc3VsdC5saW5lO1xuICAgIGNvbnN0IGNlbnRlciA9IG1pbiArIChtYXggLSBtaW4pIC8gMjtcbiAgICBjb25zdCBleHRyZW1hID0gW107XG4gICAgbGV0IHRocmVzaG9sZCA9IChtYXggLSBtaW4pIC8gMTI7XG4gICAgY29uc3QgclRocmVzaG9sZCA9IC10aHJlc2hvbGQ7XG5cbiAgICAvLyAxLiBmaW5kIGV4dHJlbWFcbiAgICBsZXQgY3VycmVudERpciA9IGxpbmVbMF0gPiBjZW50ZXIgPyBTbG9wZS5ESVIuVVAgOiBTbG9wZS5ESVIuRE9XTjtcbiAgICBleHRyZW1hLnB1c2goe1xuICAgICAgICBwb3M6IDAsXG4gICAgICAgIHZhbDogbGluZVswXVxuICAgIH0pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZS5sZW5ndGggLSAyOyBpKyspIHtcbiAgICAgICAgY29uc3Qgc2xvcGUgPSAobGluZVtpICsgMV0gLSBsaW5lW2ldKTtcbiAgICAgICAgY29uc3Qgc2xvcGUyID0gKGxpbmVbaSArIDJdIC0gbGluZVtpICsgMV0pO1xuICAgICAgICBsZXQgZGlyO1xuICAgICAgICBpZiAoKHNsb3BlICsgc2xvcGUyKSA8IHJUaHJlc2hvbGQgJiYgbGluZVtpICsgMV0gPCAoY2VudGVyICogMS41KSkge1xuICAgICAgICAgICAgZGlyID0gU2xvcGUuRElSLkRPV047XG4gICAgICAgIH0gZWxzZSBpZiAoKHNsb3BlICsgc2xvcGUyKSA+IHRocmVzaG9sZCAmJiBsaW5lW2kgKyAxXSA+IChjZW50ZXIgKiAwLjUpKSB7XG4gICAgICAgICAgICBkaXIgPSBTbG9wZS5ESVIuVVA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkaXIgPSBjdXJyZW50RGlyO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGN1cnJlbnREaXIgIT09IGRpcikge1xuICAgICAgICAgICAgZXh0cmVtYS5wdXNoKHtcbiAgICAgICAgICAgICAgICBwb3M6IGksXG4gICAgICAgICAgICAgICAgdmFsOiBsaW5lW2ldXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGN1cnJlbnREaXIgPSBkaXI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZXh0cmVtYS5wdXNoKHtcbiAgICAgICAgcG9zOiBsaW5lLmxlbmd0aCxcbiAgICAgICAgdmFsOiBsaW5lW2xpbmUubGVuZ3RoIC0gMV1cbiAgICB9KTtcblxuICAgIGZvciAobGV0IGogPSBleHRyZW1hWzBdLnBvczsgaiA8IGV4dHJlbWFbMV0ucG9zOyBqKyspIHtcbiAgICAgICAgbGluZVtqXSA9IGxpbmVbal0gPiBjZW50ZXIgPyAwIDogMTtcbiAgICB9XG5cbiAgICAvLyBpdGVyYXRlIG92ZXIgZXh0cmVtYSBhbmQgY29udmVydCB0byBiaW5hcnkgYmFzZWQgb24gYXZnIGJldHdlZW4gbWlubWF4XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBleHRyZW1hLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICBpZiAoZXh0cmVtYVtpICsgMV0udmFsID4gZXh0cmVtYVtpXS52YWwpIHtcbiAgICAgICAgICAgIHRocmVzaG9sZCA9IChleHRyZW1hW2ldLnZhbCArICgoZXh0cmVtYVtpICsgMV0udmFsIC0gZXh0cmVtYVtpXS52YWwpIC8gMykgKiAyKSB8IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJlc2hvbGQgPSAoZXh0cmVtYVtpICsgMV0udmFsICsgKChleHRyZW1hW2ldLnZhbCAtIGV4dHJlbWFbaSArIDFdLnZhbCkgLyAzKSkgfCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaiA9IGV4dHJlbWFbaV0ucG9zOyBqIDwgZXh0cmVtYVtpICsgMV0ucG9zOyBqKyspIHtcbiAgICAgICAgICAgIGxpbmVbal0gPSBsaW5lW2pdID4gdGhyZXNob2xkID8gMCA6IDE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBsaW5lLFxuICAgICAgICB0aHJlc2hvbGRcbiAgICB9O1xufTtcblxuLyoqXG4gKiBVc2VkIGZvciBkZXZlbG9wbWVudCBvbmx5XG4gKi9cbkJyZXNlbmhhbS5kZWJ1ZyA9IHtcbiAgICBwcmludEZyZXF1ZW5jeTogZnVuY3Rpb24gKGxpbmUsIGNhbnZhcykge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIGNhbnZhcy53aWR0aCA9IGxpbmUubGVuZ3RoO1xuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gMjU2O1xuXG4gICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSAnYmx1ZSc7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb250ZXh0Lm1vdmVUbyhpLCAyNTUpO1xuICAgICAgICAgICAgY29udGV4dC5saW5lVG8oaSwgMjU1IC0gbGluZVtpXSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0LnN0cm9rZSgpO1xuICAgICAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgIH0sXG5cbiAgICBwcmludFBhdHRlcm46IGZ1bmN0aW9uIChsaW5lLCBjYW52YXMpIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IGxpbmUubGVuZ3RoO1xuICAgICAgICBjb250ZXh0LmZpbGxDb2xvciA9ICdibGFjayc7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAobGluZVtpXSA9PT0gMSkge1xuICAgICAgICAgICAgICAgIGNvbnRleHQuZmlsbFJlY3QoaSwgMCwgMSwgMTAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJyZXNlbmhhbTtcbiIsImltcG9ydCB7IGdldFVzZXJNZWRpYSwgZW51bWVyYXRlRGV2aWNlcyB9IGZyb20gJ0NvbW1vbi9tZWRpYS1kZXZpY2VzJztcblxubGV0IHN0cmVhbVJlZjtcblxuZnVuY3Rpb24gd2FpdEZvclZpZGVvKHZpZGVvKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgbGV0IGF0dGVtcHRzID0gMTA7XG5cbiAgICAgICAgZnVuY3Rpb24gY2hlY2tWaWRlbygpIHtcbiAgICAgICAgICAgIGlmIChhdHRlbXB0cyA+IDApIHtcbiAgICAgICAgICAgICAgICBpZiAodmlkZW8udmlkZW9XaWR0aCA+IDEwICYmIHZpZGVvLnZpZGVvSGVpZ2h0ID4gMTApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKEVOVi5kZXZlbG9wbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCR7dmlkZW8udmlkZW9XaWR0aH1weCB4ICR7dmlkZW8udmlkZW9IZWlnaHR9cHhgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoY2hlY2tWaWRlbywgNTAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlamVjdCgnVW5hYmxlIHRvIHBsYXkgdmlkZW8gc3RyZWFtLiBJcyB3ZWJjYW0gd29ya2luZz8nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGF0dGVtcHRzLS07XG4gICAgICAgIH1cbiAgICAgICAgY2hlY2tWaWRlbygpO1xuICAgIH0pO1xufVxuXG4vKipcbiAqIFRyaWVzIHRvIGF0dGFjaCB0aGUgY2FtZXJhLXN0cmVhbSB0byBhIGdpdmVuIHZpZGVvLWVsZW1lbnRcbiAqIGFuZCBjYWxscyB0aGUgY2FsbGJhY2sgZnVuY3Rpb24gd2hlbiB0aGUgY29udGVudCBpcyByZWFkeVxuICogQHBhcmFtIHtPYmplY3R9IGNvbnN0cmFpbnRzXG4gKiBAcGFyYW0ge09iamVjdH0gdmlkZW9cbiAqL1xuZnVuY3Rpb24gaW5pdENhbWVyYSh2aWRlbywgY29uc3RyYWludHMpIHtcbiAgICByZXR1cm4gZ2V0VXNlck1lZGlhKGNvbnN0cmFpbnRzKVxuICAgICAgICAudGhlbigoc3RyZWFtKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgICAgICBzdHJlYW1SZWYgPSBzdHJlYW07XG4gICAgICAgICAgICAgICAgdmlkZW8uc2V0QXR0cmlidXRlKCdhdXRvcGxheScsIHRydWUpO1xuICAgICAgICAgICAgICAgIHZpZGVvLnNldEF0dHJpYnV0ZSgnbXV0ZWQnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB2aWRlby5zZXRBdHRyaWJ1dGUoJ3BsYXlzaW5saW5lJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgdmlkZW8uc3JjT2JqZWN0ID0gc3RyZWFtO1xuICAgICAgICAgICAgICAgIHZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWRlZG1ldGFkYXRhJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB2aWRlby5wbGF5KCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbih3YWl0Rm9yVmlkZW8uYmluZChudWxsLCB2aWRlbykpO1xufVxuXG5mdW5jdGlvbiBkZXByZWNhdGVkQ29uc3RyYWludHModmlkZW9Db25zdHJhaW50cykge1xuICAgIGxldCB7IHdpZHRoLCBoZWlnaHQsIGZhY2luZ01vZGUsIGFzcGVjdFJhdGlvLCBkZXZpY2VJZCB9ID0gdmlkZW9Db25zdHJhaW50cztcblxuICAgIGlmICh0eXBlb2YgdmlkZW9Db25zdHJhaW50cy5taW5Bc3BlY3RSYXRpbyAhPT0gJ3VuZGVmaW5lZCcgJiYgdmlkZW9Db25zdHJhaW50cy5taW5Bc3BlY3RSYXRpbyA+IDApIHtcbiAgICAgICAgYXNwZWN0UmF0aW8gPSB2aWRlb0NvbnN0cmFpbnRzLm1pbkFzcGVjdFJhdGlvO1xuICAgICAgICBjb25zb2xlLmxvZyhgV0FSTklORzogQ29uc3RyYWludCAnbWluQXNwZWN0UmF0aW8nIGlzIGRlcHJlY2F0ZWQ7IFVzZSAnYXNwZWN0UmF0aW8nIGluc3RlYWRgKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHZpZGVvQ29uc3RyYWludHMuZmFjaW5nICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBmYWNpbmdNb2RlID0gdmlkZW9Db25zdHJhaW50cy5mYWNpbmc7XG4gICAgICAgIGNvbnNvbGUubG9nKGBXQVJOSU5HOiBDb25zdHJhaW50ICdmYWNpbmcnIGlzIGRlcHJlY2F0ZWQuIFVzZSAnZmFjaW5nTW9kZScgaW5zdGVhZCdgKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyB3aWR0aCwgaGVpZ2h0LCBmYWNpbmdNb2RlLCBhc3BlY3RSYXRpbywgZGV2aWNlSWQgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBpY2tDb25zdHJhaW50cyh2aWRlb0NvbnN0cmFpbnRzKSB7XG4gICAgY29uc3Qgbm9ybWFsaXplZENvbnN0cmFpbnRzID0ge1xuICAgICAgICBhdWRpbzogZmFsc2UsXG4gICAgICAgIHZpZGVvOiBkZXByZWNhdGVkQ29uc3RyYWludHModmlkZW9Db25zdHJhaW50cylcbiAgICB9O1xuXG4gICAgaWYgKG5vcm1hbGl6ZWRDb25zdHJhaW50cy52aWRlby5kZXZpY2VJZCAmJiBub3JtYWxpemVkQ29uc3RyYWludHMudmlkZW8uZmFjaW5nTW9kZSkge1xuICAgICAgICBkZWxldGUgbm9ybWFsaXplZENvbnN0cmFpbnRzLnZpZGVvLmZhY2luZ01vZGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShub3JtYWxpemVkQ29uc3RyYWludHMpO1xufVxuXG5mdW5jdGlvbiBlbnVtZXJhdGVWaWRlb0RldmljZXMoKSB7XG4gICAgcmV0dXJuIGVudW1lcmF0ZURldmljZXMoKVxuICAgICAgICAudGhlbihkZXZpY2VzID0+IGRldmljZXMuZmlsdGVyKGRldmljZSA9PiBkZXZpY2Uua2luZCA9PT0gJ3ZpZGVvaW5wdXQnKSk7XG59XG5cbmZ1bmN0aW9uIGdldEFjdGl2ZVRyYWNrKCkge1xuICAgIGlmIChzdHJlYW1SZWYpIHtcbiAgICAgICAgY29uc3QgdHJhY2tzID0gc3RyZWFtUmVmLmdldFZpZGVvVHJhY2tzKCk7XG4gICAgICAgIGlmICh0cmFja3MgJiYgdHJhY2tzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHRyYWNrc1swXTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHJlcXVlc3Q6IGZ1bmN0aW9uICh2aWRlbywgdmlkZW9Db25zdHJhaW50cykge1xuICAgICAgICByZXR1cm4gcGlja0NvbnN0cmFpbnRzKHZpZGVvQ29uc3RyYWludHMpXG4gICAgICAgICAgICAudGhlbihpbml0Q2FtZXJhLmJpbmQobnVsbCwgdmlkZW8pKTtcbiAgICB9LFxuICAgIHJlbGVhc2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgdHJhY2tzID0gc3RyZWFtUmVmICYmIHN0cmVhbVJlZi5nZXRWaWRlb1RyYWNrcygpO1xuICAgICAgICBpZiAodHJhY2tzICYmIHRyYWNrcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRyYWNrc1swXS5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgICAgc3RyZWFtUmVmID0gbnVsbDtcbiAgICB9LFxuICAgIGVudW1lcmF0ZVZpZGVvRGV2aWNlcyxcbiAgICBnZXRBY3RpdmVTdHJlYW1MYWJlbDogZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCB0cmFjayA9IGdldEFjdGl2ZVRyYWNrKCk7XG4gICAgICAgIHJldHVybiB0cmFjayA/IHRyYWNrLmxhYmVsIDogJyc7XG4gICAgfSxcbiAgICBnZXRBY3RpdmVUcmFja1xufTtcbiIsIi8qKlxuICogQGJvcnJvd3MgaHR0cHM6Ly9naXRodWIuY29tL2V4aWYtanMvZXhpZi1qc1xuICovXG5cbmNvbnN0IEV4aWZUYWdzID0geyAweDAxMTI6ICdvcmllbnRhdGlvbicgfTtcbmV4cG9ydCBjb25zdCBBdmFpbGFibGVUYWdzID0gT2JqZWN0LmtleXMoRXhpZlRhZ3MpLm1hcChrZXkgPT4gRXhpZlRhZ3Nba2V5XSk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmaW5kVGFnc0luT2JqZWN0VVJMKHNyYywgdGFncyA9IEF2YWlsYWJsZVRhZ3MpIHtcbiAgICBpZiAoL15ibG9iXFw6L2kudGVzdChzcmMpKSB7XG4gICAgICAgIGNvbnN0IGJ1ZmZlciA9IGF3YWl0IG9iamVjdFVSTFRvQmxvYihzcmMpO1xuICAgICAgICByZXR1cm4gZmluZFRhZ3NJbkJ1ZmZlcihidWZmZXIsIHRhZ3MpO1xuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG51bGwpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZFRhZ3NJbkJ1ZmZlcihmaWxlLCBzZWxlY3RlZFRhZ3MgPSBBdmFpbGFibGVUYWdzKSB7XG4gICAgY29uc3QgZGF0YVZpZXcgPSBuZXcgRGF0YVZpZXcoZmlsZSk7XG4gICAgY29uc3QgbGVuZ3RoID0gZmlsZS5ieXRlTGVuZ3RoO1xuICAgIGNvbnN0IGV4aWZUYWdzID0gc2VsZWN0ZWRUYWdzLnJlZHVjZSgocmVzdWx0LCBzZWxlY3RlZFRhZykgPT4ge1xuICAgICAgICBjb25zdCBleGlmVGFnID0gT2JqZWN0LmtleXMoRXhpZlRhZ3MpLmZpbmQodGFnID0+IEV4aWZUYWdzW3RhZ10gPT09IHNlbGVjdGVkVGFnKTtcbiAgICAgICAgaWYgKGV4aWZUYWcpIHtcbiAgICAgICAgICAgIHJlc3VsdFtleGlmVGFnXSA9IHNlbGVjdGVkVGFnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSwge30pO1xuICAgIGxldCBvZmZzZXQgPSAyO1xuXG4gICAgaWYgKChkYXRhVmlldy5nZXRVaW50OCgwKSAhPT0gMHhGRikgfHwgKGRhdGFWaWV3LmdldFVpbnQ4KDEpICE9PSAweEQ4KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgd2hpbGUgKG9mZnNldCA8IGxlbmd0aCkge1xuICAgICAgICBpZiAoZGF0YVZpZXcuZ2V0VWludDgob2Zmc2V0KSAhPT0gMHhGRikge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbWFya2VyID0gZGF0YVZpZXcuZ2V0VWludDgob2Zmc2V0ICsgMSk7XG4gICAgICAgIGlmIChtYXJrZXIgPT09IDB4RTEpIHtcbiAgICAgICAgICAgIHJldHVybiByZWFkRVhJRkRhdGEoZGF0YVZpZXcsIG9mZnNldCArIDQsIGV4aWZUYWdzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9mZnNldCArPSAyICsgZGF0YVZpZXcuZ2V0VWludDE2KG9mZnNldCArIDIpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBvYmplY3RVUkxUb0Jsb2IodXJsKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuYXJyYXlCdWZmZXIoKTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKCdIVFRQIEVycm9yJywgcmVzcG9uc2Uuc3RhdHVzKTtcbiAgICAvLyByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIC8vICAgICBjb25zdCBodHRwID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgLy8gICAgIGh0dHAub3BlbignR0VUJywgdXJsLCB0cnVlKTtcbiAgICAvLyAgICAgaHR0cC5yZXNwb25zZVR5cGUgPSAnYmxvYic7XG4gICAgLy8gICAgIGh0dHAub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xuICAgIC8vICAgICAgICAgaWYgKGh0dHAucmVhZHlTdGF0ZSA9PT0gWE1MSHR0cFJlcXVlc3QuRE9ORSAmJiAoaHR0cC5zdGF0dXMgPT09IDIwMCB8fCBodHRwLnN0YXR1cyA9PT0gMCkpIHtcbiAgICAvLyAgICAgICAgICAgICByZXNvbHZlKGh0dHAucmVzcG9uc2UpO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICB9O1xuICAgIC8vICAgICBodHRwLm9uZXJyb3IgPSByZWplY3Q7XG4gICAgLy8gICAgIGh0dHAuc2VuZCgpO1xuICAgIC8vIH0pO1xufVxuXG5mdW5jdGlvbiByZWFkRVhJRkRhdGEoZmlsZSwgc3RhcnQsIGV4aWZUYWdzKSB7XG4gICAgaWYgKGdldFN0cmluZ0Zyb21CdWZmZXIoZmlsZSwgc3RhcnQsIDQpICE9PSAnRXhpZicpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IHRpZmZPZmZzZXQgPSBzdGFydCArIDY7XG4gICAgbGV0IGJpZ0VuZDtcblxuICAgIGlmIChmaWxlLmdldFVpbnQxNih0aWZmT2Zmc2V0KSA9PT0gMHg0OTQ5KSB7XG4gICAgICAgIGJpZ0VuZCA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoZmlsZS5nZXRVaW50MTYodGlmZk9mZnNldCkgPT09IDB4NEQ0RCkge1xuICAgICAgICBiaWdFbmQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoZmlsZS5nZXRVaW50MTYodGlmZk9mZnNldCArIDIsICFiaWdFbmQpICE9PSAweDAwMkEpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IGZpcnN0SUZET2Zmc2V0ID0gZmlsZS5nZXRVaW50MzIodGlmZk9mZnNldCArIDQsICFiaWdFbmQpO1xuICAgIGlmIChmaXJzdElGRE9mZnNldCA8IDB4MDAwMDAwMDgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IHRhZ3MgPSByZWFkVGFncyhmaWxlLCB0aWZmT2Zmc2V0ICsgZmlyc3RJRkRPZmZzZXQsIGV4aWZUYWdzLCBiaWdFbmQpO1xuICAgIHJldHVybiB0YWdzO1xufVxuXG5mdW5jdGlvbiByZWFkVGFncyhmaWxlLCBkaXJTdGFydCwgc3RyaW5ncywgYmlnRW5kKSB7XG4gICAgY29uc3QgZW50cmllcyA9IGZpbGUuZ2V0VWludDE2KGRpclN0YXJ0LCAhYmlnRW5kKTtcbiAgICBjb25zdCB0YWdzID0ge307XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVudHJpZXM7IGkrKykge1xuICAgICAgICBjb25zdCBlbnRyeU9mZnNldCA9IGRpclN0YXJ0ICsgaSAqIDEyICsgMjtcbiAgICAgICAgY29uc3QgdGFnID0gc3RyaW5nc1tmaWxlLmdldFVpbnQxNihlbnRyeU9mZnNldCwgIWJpZ0VuZCldO1xuICAgICAgICBpZiAodGFnKSB7XG4gICAgICAgICAgICB0YWdzW3RhZ10gPSByZWFkVGFnVmFsdWUoZmlsZSwgZW50cnlPZmZzZXQsIGJpZ0VuZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFncztcbn1cblxuZnVuY3Rpb24gcmVhZFRhZ1ZhbHVlKGZpbGUsIGVudHJ5T2Zmc2V0LCBiaWdFbmQpIHtcbiAgICBjb25zdCB0eXBlID0gZmlsZS5nZXRVaW50MTYoZW50cnlPZmZzZXQgKyAyLCAhYmlnRW5kKTtcbiAgICBjb25zdCBudW1WYWx1ZXMgPSBmaWxlLmdldFVpbnQzMihlbnRyeU9mZnNldCArIDQsICFiaWdFbmQpO1xuXG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgMzoge1xuICAgICAgICAgICAgaWYgKG51bVZhbHVlcyA9PT0gMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmaWxlLmdldFVpbnQxNihlbnRyeU9mZnNldCArIDgsICFiaWdFbmQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXRTdHJpbmdGcm9tQnVmZmVyKGJ1ZmZlciwgc3RhcnQsIGxlbmd0aCkge1xuICAgIGxldCBvdXRzdHIgPSAnJztcbiAgICBmb3IgKGxldCBuID0gc3RhcnQ7IG4gPCBzdGFydCArIGxlbmd0aDsgbisrKSB7XG4gICAgICAgIG91dHN0ciArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ1ZmZlci5nZXRVaW50OChuKSk7XG4gICAgfVxuICAgIHJldHVybiBvdXRzdHI7XG59XG4iLCJjb25zdCBRVUFURVJfQ0lSQ0xFID0gTWF0aC5QSSAvIDI7XG5cbmV4cG9ydCBjbGFzcyBGcmFtZUdyYWJiZXIge1xuICAgIGNvbnN0cnVjdG9yKGlucHV0U3RyZWFtLCBjYW52YXMpIHtcbiAgICAgICAgdGhpcy5faW5wdXRTdHJlYW0gPSBpbnB1dFN0cmVhbTtcbiAgICAgICAgdGhpcy5fc3RyZWFtQ29uZmlnID0gaW5wdXRTdHJlYW0uZ2V0Q29uZmlnKCk7XG4gICAgICAgIHRoaXMuX2NhbnZhc1dpZHRoID0gaW5wdXRTdHJlYW0uZ2V0Q2FudmFzV2lkdGgoKTtcbiAgICAgICAgdGhpcy5fY2FudmFzSGVpZ2h0ID0gaW5wdXRTdHJlYW0uZ2V0Q2FudmFzSGVpZ2h0KCk7XG4gICAgICAgIHRoaXMuX3dpZHRoID0gaW5wdXRTdHJlYW0uZ2V0V2lkdGgoKTtcbiAgICAgICAgdGhpcy5faGVpZ2h0ID0gaW5wdXRTdHJlYW0uZ2V0SGVpZ2h0KCk7XG4gICAgICAgIGNvbnN0IHRvcFJpZ2h0ID0gaW5wdXRTdHJlYW0uZ2V0VG9wUmlnaHQoKTtcbiAgICAgICAgdGhpcy5fc3ggPSB0b3BSaWdodC54O1xuICAgICAgICB0aGlzLl9zeSA9IHRvcFJpZ2h0Lnk7XG4gICAgICAgIHRoaXMuX2NhbnZhcyA9IGNhbnZhcyB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgdGhpcy5fY2FudmFzLndpZHRoID0gdGhpcy5fY2FudmFzV2lkdGg7XG4gICAgICAgIHRoaXMuX2NhbnZhcy5oZWlnaHQgPSB0aGlzLl9jYW52YXNIZWlnaHQ7XG4gICAgICAgIHRoaXMuX2N0eCA9IHRoaXMuX2NhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICB0aGlzLl9kYXRhID0gbmV3IFVpbnQ4QXJyYXkodGhpcy5fd2lkdGggKiB0aGlzLl9oZWlnaHQpO1xuXG4gICAgICAgIGlmIChFTlYuZGV2ZWxvcG1lbnQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdGcmFtZUdyYWJiZXInLCBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgc2l6ZToge1xuICAgICAgICAgICAgICAgICAgICB4OiB0aGlzLl93aWR0aCxcbiAgICAgICAgICAgICAgICAgICAgeTogdGhpcy5faGVpZ2h0XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0b3BSaWdodCxcbiAgICAgICAgICAgICAgICB2aWRlb1NpemU6IHtcbiAgICAgICAgICAgICAgICAgICAgeDogaW5wdXRTdHJlYW0uZ2V0UmVhbFdpZHRoKCksXG4gICAgICAgICAgICAgICAgICAgIHk6IGlucHV0U3RyZWFtLmdldFJlYWxIZWlnaHQoKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY2FudmFzU2l6ZToge1xuICAgICAgICAgICAgICAgICAgICB4OiB0aGlzLl9jYW52YXNXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgeTogdGhpcy5fY2FudmFzSGVpZ2h0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXNlcyB0aGUgZ2l2ZW4gYXJyYXkgYXMgZnJhbWUtYnVmZmVyXG4gICAgICovXG4gICAgYXR0YWNoRGF0YShkYXRhKSB7XG4gICAgICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZldGNoZXMgYSBmcmFtZSBmcm9tIHRoZSBpbnB1dC1zdHJlYW0gYW5kIHB1dHMgaW50byB0aGUgZnJhbWUtYnVmZmVyLlxuICAgICAqIFRoZSBpbWFnZS1kYXRhIGlzIGNvbnZlcnRlZCB0byBncmF5LXNjYWxlIGFuZCB0aGVuIGhhbGYtc2FtcGxlZCBpZiBjb25maWd1cmVkLlxuICAgICAqL1xuICAgIGdyYWIoKSB7XG4gICAgICAgIGNvbnN0IGRvSGFsZlNhbXBsZSA9IHRoaXMuX3N0cmVhbUNvbmZpZy5oYWxmU2FtcGxlO1xuICAgICAgICBjb25zdCBmcmFtZSA9IHRoaXMuX2lucHV0U3RyZWFtLmdldEZyYW1lKCk7XG4gICAgICAgIGxldCBkcmF3YWJsZSA9IGZyYW1lO1xuICAgICAgICBsZXQgZHJhd0FuZ2xlID0gMDtcblxuICAgICAgICBpZiAoZHJhd2FibGUpIHtcbiAgICAgICAgICAgIHRoaXMuX2FkanVzdENhbnZhc1NpemUoKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuX3N0cmVhbUNvbmZpZy50eXBlID09PSAnSW1hZ2VTdHJlYW0nKSB7XG4gICAgICAgICAgICAgICAgZHJhd2FibGUgPSBmcmFtZS5pbWFnZTtcblxuICAgICAgICAgICAgICAgIGlmIChmcmFtZS50YWdzKSB7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoZnJhbWUudGFncy5vcmllbnRhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA2OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJhd0FuZ2xlID0gUVVBVEVSX0NJUkNMRTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgODoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyYXdBbmdsZSA9IC1RVUFURVJfQ0lSQ0xFO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZHJhd0FuZ2xlICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY3R4LnRyYW5zbGF0ZSh0aGlzLl9jYW52YXNXaWR0aCAvIDIsIHRoaXMuX2NhbnZhc0hlaWdodCAvIDIpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2N0eC5yb3RhdGUoZHJhd0FuZ2xlKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9jdHguZHJhd0ltYWdlKGRyYXdhYmxlLCAtdGhpcy5fY2FudmFzSGVpZ2h0IC8gMiwgLXRoaXMuX2NhbnZhc1dpZHRoIC8gMiwgdGhpcy5fY2FudmFzSGVpZ2h0LCB0aGlzLl9jYW52YXNXaWR0aCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fY3R4LnJvdGF0ZSgtZHJhd0FuZ2xlKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9jdHgudHJhbnNsYXRlKC10aGlzLl9jYW52YXNXaWR0aCAvIDIsIC10aGlzLl9jYW52YXNIZWlnaHQgLyAyKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY3R4LmRyYXdJbWFnZShkcmF3YWJsZSwgMCwgMCwgdGhpcy5fY2FudmFzV2lkdGgsIHRoaXMuX2NhbnZhc0hlaWdodCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGN0eERhdGEgPSB0aGlzLl9jdHguZ2V0SW1hZ2VEYXRhKHRoaXMuX3N4LCB0aGlzLl9zeSwgdGhpcy5fd2lkdGgsIHRoaXMuX2hlaWdodCkuZGF0YTtcbiAgICAgICAgICAgIGlmIChkb0hhbGZTYW1wbGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9ncmF5QW5kSGFsZlNhbXBsZUZyb21DYW52YXNEYXRhKGN0eERhdGEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jb21wdXRlR3JheShjdHhEYXRhKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfYWRqdXN0Q2FudmFzU2l6ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2NhbnZhcy53aWR0aCAhPT0gdGhpcy5fY2FudmFzV2lkdGgpIHtcbiAgICAgICAgICAgIGlmIChFTlYuZGV2ZWxvcG1lbnQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnV0FSTklORzogY2FudmFzLXNpemUgbmVlZHMgdG8gYmUgYWRqdXN0ZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2NhbnZhcy53aWR0aCA9IHRoaXMuX2NhbnZhc1dpZHRoO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9jYW52YXMuaGVpZ2h0ICE9PSB0aGlzLl9jYW52YXNIZWlnaHQpIHtcbiAgICAgICAgICAgIGlmIChFTlYuZGV2ZWxvcG1lbnQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnV0FSTklORzogY2FudmFzLXNpemUgbmVlZHMgdG8gYmUgYWRqdXN0ZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2NhbnZhcy5oZWlnaHQgPSB0aGlzLl9jYW52YXNIZWlnaHQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfZ3JheUFuZEhhbGZTYW1wbGVGcm9tQ2FudmFzRGF0YShpbWFnZURhdGEpIHtcbiAgICAgICAgY29uc3QgZW5kSWR4ID0gTWF0aC5mbG9vcihpbWFnZURhdGEubGVuZ3RoIC8gNCk7XG4gICAgICAgIGNvbnN0IG91dFdpZHRoID0gdGhpcy5fd2lkdGggLyAyO1xuICAgICAgICBsZXQgdG9wUm93SWR4ID0gMDtcbiAgICAgICAgbGV0IGJvdHRvbVJvd0lkeCA9IHRoaXMuX3dpZHRoO1xuICAgICAgICBsZXQgb3V0SW1nSWR4ID0gMDtcblxuICAgICAgICB3aGlsZSAoYm90dG9tUm93SWR4IDwgZW5kSWR4KSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG91dFdpZHRoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9kYXRhW291dEltZ0lkeF0gPSAoXG4gICAgICAgICAgICAgICAgICAgICgwLjI5OSAqIGltYWdlRGF0YVt0b3BSb3dJZHggKiA0ICsgMF0gK1xuICAgICAgICAgICAgICAgICAgICAgICAgMC41ODcgKiBpbWFnZURhdGFbdG9wUm93SWR4ICogNCArIDFdICtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMTE0ICogaW1hZ2VEYXRhW3RvcFJvd0lkeCAqIDQgKyAyXSkgK1xuICAgICAgICAgICAgICAgICAgICAoMC4yOTkgKiBpbWFnZURhdGFbKHRvcFJvd0lkeCArIDEpICogNCArIDBdICtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNTg3ICogaW1hZ2VEYXRhWyh0b3BSb3dJZHggKyAxKSAqIDQgKyAxXSArXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjExNCAqIGltYWdlRGF0YVsodG9wUm93SWR4ICsgMSkgKiA0ICsgMl0pICtcbiAgICAgICAgICAgICAgICAgICAgKDAuMjk5ICogaW1hZ2VEYXRhWyhib3R0b21Sb3dJZHgpICogNCArIDBdICtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNTg3ICogaW1hZ2VEYXRhWyhib3R0b21Sb3dJZHgpICogNCArIDFdICtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMTE0ICogaW1hZ2VEYXRhWyhib3R0b21Sb3dJZHgpICogNCArIDJdKSArXG4gICAgICAgICAgICAgICAgICAgICgwLjI5OSAqIGltYWdlRGF0YVsoYm90dG9tUm93SWR4ICsgMSkgKiA0ICsgMF0gK1xuICAgICAgICAgICAgICAgICAgICAgICAgMC41ODcgKiBpbWFnZURhdGFbKGJvdHRvbVJvd0lkeCArIDEpICogNCArIDFdICtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMTE0ICogaW1hZ2VEYXRhWyhib3R0b21Sb3dJZHggKyAxKSAqIDQgKyAyXSkpIC8gNDtcbiAgICAgICAgICAgICAgICBvdXRJbWdJZHgrKztcbiAgICAgICAgICAgICAgICB0b3BSb3dJZHggKz0gMjtcbiAgICAgICAgICAgICAgICBib3R0b21Sb3dJZHggKz0gMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRvcFJvd0lkeCArPSB0aGlzLl93aWR0aDtcbiAgICAgICAgICAgIGJvdHRvbVJvd0lkeCArPSB0aGlzLl93aWR0aDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9jb21wdXRlR3JheShpbWFnZURhdGEpIHtcbiAgICAgICAgY29uc3QgZW5kSWR4ID0gTWF0aC5mbG9vcihpbWFnZURhdGEubGVuZ3RoIC8gNCk7XG5cbiAgICAgICAgaWYgKHRoaXMuX3N0cmVhbUNvbmZpZyAmJiB0aGlzLl9zdHJlYW1Db25maWcuc2luZ2xlQ2hhbm5lbCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbmRJZHg7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuX2RhdGFbaV0gPSBpbWFnZURhdGFbaSAqIDQgKyAwXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZW5kSWR4OyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9kYXRhW2ldID0gMC4yOTkgKiBpbWFnZURhdGFbaSAqIDQgKyAwXSArIDAuNTg3ICogaW1hZ2VEYXRhW2kgKiA0ICsgMV0gKyAwLjExNCAqIGltYWdlRGF0YVtpICogNCArIDJdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgZmluZFRhZ3NJbk9iamVjdFVSTCB9IGZyb20gJy4vZXhpZl9oZWxwZXInO1xuXG5leHBvcnQgY2xhc3MgSW1hZ2VMb2FkZXIge1xuICAgIHN0YXRpYyBhc3luYyBsb2FkKGRpcmVjdG9yeSwgY2FsbGJhY2ssIG9mZnNldCwgc2l6ZSwgc2VxdWVuY2UpIHtcbiAgICAgICAgY29uc3QgaHRtbEltYWdlc1NyY0FycmF5ID0gbmV3IEFycmF5KHNpemUpO1xuICAgICAgICBjb25zdCBodG1sSW1hZ2VzQXJyYXkgPSBuZXcgQXJyYXkoc2l6ZSk7XG5cbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gbG9hZGVkKGxvYWRlZEltYWdlKSB7XG4gICAgICAgICAgICBjb25zdCBub3RMb2FkZWRJbWFnZXMgPSBodG1sSW1hZ2VzQXJyYXkubm90TG9hZGVkO1xuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBub3RMb2FkZWRJbWFnZXMubGVuZ3RoOyB4KyspIHtcbiAgICAgICAgICAgICAgICBpZiAobm90TG9hZGVkSW1hZ2VzW3hdID09PSBsb2FkZWRJbWFnZSkge1xuICAgICAgICAgICAgICAgICAgICBub3RMb2FkZWRJbWFnZXMuc3BsaWNlKHgsIDEpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGh0bWxJbWFnZXNTcmNBcnJheS5sZW5ndGg7IHkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1hZ2VOYW1lID0gaHRtbEltYWdlc1NyY0FycmF5W3ldLnN1YnN0cihodG1sSW1hZ2VzU3JjQXJyYXlbeV0ubGFzdEluZGV4T2YoJy8nKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobG9hZGVkSW1hZ2Uuc3JjLmxhc3RJbmRleE9mKGltYWdlTmFtZSkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEltYWdlc0FycmF5W3ldID0geyBpbWFnZTogbG9hZGVkSW1hZ2UgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobm90TG9hZGVkSW1hZ2VzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGlmIChFTlYuZGV2ZWxvcG1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0ltYWdlcyBsb2FkZWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlcXVlbmNlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlyc3RJbWFnZSA9IGh0bWxJbWFnZXNBcnJheVswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0SW1hZ2UudGFncyA9IGF3YWl0IGZpbmRUYWdzSW5PYmplY3RVUkwoZGlyZWN0b3J5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV4KTtcbiAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhodG1sSW1hZ2VzQXJyYXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZXF1ZW5jZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGh0bWxJbWFnZXNTcmNBcnJheVswXSA9IGRpcmVjdG9yeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbnVtID0gKG9mZnNldCArIGkpO1xuICAgICAgICAgICAgICAgIGh0bWxJbWFnZXNTcmNBcnJheVtpXSA9IGRpcmVjdG9yeSArICdpbWFnZS0nICsgKCcwMCcgKyBudW0pLnNsaWNlKC0zKSArICcuanBnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBodG1sSW1hZ2VzQXJyYXkubm90TG9hZGVkID0gW107XG4gICAgICAgIGh0bWxJbWFnZXNBcnJheS5hZGRJbWFnZSA9IGZ1bmN0aW9uIChpbWFnZSkge1xuICAgICAgICAgICAgaHRtbEltYWdlc0FycmF5Lm5vdExvYWRlZC5wdXNoKGltYWdlKTtcbiAgICAgICAgfTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBodG1sSW1hZ2VzU3JjQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICBodG1sSW1hZ2VzQXJyYXkuYWRkSW1hZ2UoaW1hZ2UpO1xuICAgICAgICAgICAgaW1hZ2Uub25sb2FkID0gKCkgPT4gbG9hZGVkKGltYWdlKTtcbiAgICAgICAgICAgIGltYWdlLnNyYyA9IGh0bWxJbWFnZXNTcmNBcnJheVtpXTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IEltYWdlTG9hZGVyIH0gZnJvbSAnLi9pbWFnZV9sb2FkZXInO1xuXG5leHBvcnQgY2xhc3MgSW5wdXRTdHJlYW0ge1xuICAgIHN0YXRpYyBjcmVhdGVWaWRlb1N0cmVhbSh2aWRlbykge1xuICAgICAgICBjb25zdCB0aGF0ID0ge307XG4gICAgICAgIGxldCBfY29uZmlnID0gbnVsbDtcbiAgICAgICAgY29uc3QgX2V2ZW50TmFtZXMgPSBbJ2NhbnJlY29yZCcsICdlbmRlZCddO1xuICAgICAgICBjb25zdCBfZXZlbnRIYW5kbGVycyA9IHt9O1xuICAgICAgICBsZXQgX2NhbGN1bGF0ZWRXaWR0aDtcbiAgICAgICAgbGV0IF9jYWxjdWxhdGVkSGVpZ2h0O1xuICAgICAgICBsZXQgX3RvcFJpZ2h0ID0geyB4OiAwLCB5OiAwIH07XG4gICAgICAgIGxldCBfY2FudmFzV2lkdGggPSAwO1xuICAgICAgICBsZXQgX2NhbnZhc0hlaWdodCA9IDA7XG5cbiAgICAgICAgZnVuY3Rpb24gaW5pdFNpemUoKSB7XG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IHZpZGVvLnZpZGVvV2lkdGg7XG4gICAgICAgICAgICBjb25zdCBoZWlnaHQgPSB2aWRlby52aWRlb0hlaWdodDtcblxuICAgICAgICAgICAgX2NhbGN1bGF0ZWRXaWR0aCA9XG4gICAgICAgICAgICAgICAgX2NvbmZpZy5zaXplID8gd2lkdGggLyBoZWlnaHQgPiAxID8gX2NvbmZpZy5zaXplIDogTWF0aC5mbG9vcigod2lkdGggLyBoZWlnaHQpICogX2NvbmZpZy5zaXplKSA6IHdpZHRoO1xuICAgICAgICAgICAgX2NhbGN1bGF0ZWRIZWlnaHQgPVxuICAgICAgICAgICAgICAgIF9jb25maWcuc2l6ZSA/IHdpZHRoIC8gaGVpZ2h0ID4gMSA/IE1hdGguZmxvb3IoKGhlaWdodCAvIHdpZHRoKSAqIF9jb25maWcuc2l6ZSkgOiBfY29uZmlnLnNpemUgOiBoZWlnaHQ7XG5cbiAgICAgICAgICAgIF9jYW52YXNXaWR0aCA9IF9jYWxjdWxhdGVkV2lkdGg7XG4gICAgICAgICAgICBfY2FudmFzSGVpZ2h0ID0gX2NhbGN1bGF0ZWRIZWlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICB0aGF0LmdldFJlYWxXaWR0aCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB2aWRlby52aWRlb1dpZHRoO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoYXQuZ2V0UmVhbEhlaWdodCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB2aWRlby52aWRlb0hlaWdodDtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGF0LmdldFdpZHRoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9jYWxjdWxhdGVkV2lkdGg7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhhdC5nZXRIZWlnaHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX2NhbGN1bGF0ZWRIZWlnaHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhhdC5zZXRXaWR0aCA9IGZ1bmN0aW9uICh3aWR0aCkge1xuICAgICAgICAgICAgX2NhbGN1bGF0ZWRXaWR0aCA9IHdpZHRoO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoYXQuc2V0SGVpZ2h0ID0gZnVuY3Rpb24gKGhlaWdodCkge1xuICAgICAgICAgICAgX2NhbGN1bGF0ZWRIZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhhdC5zZXRJbnB1dFN0cmVhbSA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICAgICAgICAgIF9jb25maWcgPSBjb25maWc7XG4gICAgICAgICAgICB2aWRlby5zcmMgPSAodHlwZW9mIGNvbmZpZy5zcmMgIT09ICd1bmRlZmluZWQnKSA/IGNvbmZpZy5zcmMgOiAnJztcbiAgICAgICAgfTtcblxuICAgICAgICB0aGF0LmVuZGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHZpZGVvLmVuZGVkO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoYXQuZ2V0Q29uZmlnID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9jb25maWc7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhhdC5zZXRBdHRyaWJ1dGUgPSBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgICAgIHZpZGVvLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhhdC5wYXVzZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZpZGVvLnBhdXNlKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhhdC5wbGF5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmlkZW8ucGxheSgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoYXQuc2V0Q3VycmVudFRpbWUgPSBmdW5jdGlvbiAodGltZSkge1xuICAgICAgICAgICAgaWYgKF9jb25maWcudHlwZSAhPT0gJ0xpdmVTdHJlYW0nKSB7XG4gICAgICAgICAgICAgICAgdmlkZW8uY3VycmVudFRpbWUgPSB0aW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoYXQuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uIChldmVudCwgZiwgYm9vbCkge1xuICAgICAgICAgICAgaWYgKF9ldmVudE5hbWVzLmluZGV4T2YoZXZlbnQpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIGlmICghX2V2ZW50SGFuZGxlcnNbZXZlbnRdKSB7XG4gICAgICAgICAgICAgICAgICAgIF9ldmVudEhhbmRsZXJzW2V2ZW50XSA9IFtdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfZXZlbnRIYW5kbGVyc1tldmVudF0ucHVzaChmKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmlkZW8uYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgZiwgYm9vbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhhdC5jbGVhckV2ZW50SGFuZGxlcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfZXZlbnROYW1lcy5mb3JFYWNoKGV2ZW50TmFtZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaGFuZGxlcnMgPSBfZXZlbnRIYW5kbGVyc1tldmVudE5hbWVdO1xuICAgICAgICAgICAgICAgIGlmIChoYW5kbGVycyAmJiBoYW5kbGVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXJzLmZvckVhY2goaGFuZGxlciA9PiB2aWRlby5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgaGFuZGxlcikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoYXQudHJpZ2dlciA9IGZ1bmN0aW9uIChldmVudE5hbWUsIGFyZ3MpIHtcbiAgICAgICAgICAgIGNvbnN0IGhhbmRsZXJzID0gX2V2ZW50SGFuZGxlcnNbZXZlbnROYW1lXTtcblxuICAgICAgICAgICAgaWYgKGV2ZW50TmFtZSA9PT0gJ2NhbnJlY29yZCcpIHtcbiAgICAgICAgICAgICAgICBpbml0U2l6ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGhhbmRsZXJzICYmIGhhbmRsZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGhhbmRsZXJzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXJzW2pdLmFwcGx5KHRoYXQsIGFyZ3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB0aGF0LnNldFRvcFJpZ2h0ID0gZnVuY3Rpb24gKHRvcFJpZ2h0KSB7XG4gICAgICAgICAgICBfdG9wUmlnaHQueCA9IHRvcFJpZ2h0Lng7XG4gICAgICAgICAgICBfdG9wUmlnaHQueSA9IHRvcFJpZ2h0Lnk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhhdC5nZXRUb3BSaWdodCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfdG9wUmlnaHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhhdC5zZXRDYW52YXNTaXplID0gZnVuY3Rpb24gKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgICAgIF9jYW52YXNXaWR0aCA9IHdpZHRoO1xuICAgICAgICAgICAgX2NhbnZhc0hlaWdodCA9IGhlaWdodDtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGF0LmdldENhbnZhc1dpZHRoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9jYW52YXNXaWR0aDtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGF0LmdldENhbnZhc0hlaWdodCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfY2FudmFzSGVpZ2h0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoYXQuZ2V0RnJhbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdmlkZW87XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHRoYXQ7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZUxpdmVTdHJlYW0odmlkZW8pIHtcbiAgICAgICAgdmlkZW8uc2V0QXR0cmlidXRlKCdhdXRvcGxheScsIHRydWUpO1xuICAgICAgICBjb25zdCB0aGF0ID0gSW5wdXRTdHJlYW0uY3JlYXRlVmlkZW9TdHJlYW0odmlkZW8pO1xuXG4gICAgICAgIHRoYXQuZW5kZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHRoYXQ7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZUltYWdlU3RyZWFtKCkge1xuICAgICAgICBjb25zdCB0aGF0ID0ge307XG4gICAgICAgIGxldCBfY29uZmlnID0gbnVsbDtcbiAgICAgICAgbGV0IHdpZHRoID0gMDtcbiAgICAgICAgbGV0IGhlaWdodCA9IDA7XG4gICAgICAgIGxldCBmcmFtZUluZGV4ID0gMDtcbiAgICAgICAgbGV0IHBhdXNlZCA9IHRydWU7XG4gICAgICAgIGxldCBsb2FkZWQgPSBmYWxzZTtcbiAgICAgICAgbGV0IF9pbWFnZXMgPSBudWxsO1xuICAgICAgICBsZXQgc2l6ZSA9IDA7XG4gICAgICAgIGxldCBvZmZzZXQgPSAxO1xuICAgICAgICBsZXQgYmFzZVVybCA9IG51bGw7XG4gICAgICAgIGxldCBlbmRlZCA9IGZhbHNlO1xuICAgICAgICBsZXQgX2NhbGN1bGF0ZWRXaWR0aDtcbiAgICAgICAgbGV0IF9jYWxjdWxhdGVkSGVpZ2h0O1xuICAgICAgICBjb25zdCBfZXZlbnROYW1lcyA9IFsnY2FucmVjb3JkJywgJ2VuZGVkJ107XG4gICAgICAgIGNvbnN0IF9ldmVudEhhbmRsZXJzID0ge307XG4gICAgICAgIGxldCBfdG9wUmlnaHQgPSB7IHg6IDAsIHk6IDAgfTtcbiAgICAgICAgbGV0IF9jYW52YXNXaWR0aCA9IDA7XG4gICAgICAgIGxldCBfY2FudmFzSGVpZ2h0ID0gMDtcblxuICAgICAgICBmdW5jdGlvbiBsb2FkSW1hZ2VzKCkge1xuICAgICAgICAgICAgbG9hZGVkID0gZmFsc2U7XG4gICAgICAgICAgICBJbWFnZUxvYWRlci5sb2FkKGJhc2VVcmwsIGltYWdlcyA9PiB7XG4gICAgICAgICAgICAgICAgX2ltYWdlcyA9IGltYWdlcztcblxuICAgICAgICAgICAgICAgIHN3aXRjaCAoaW1hZ2VzWzBdLnRhZ3MgJiYgaW1hZ2VzWzBdLnRhZ3Mub3JpZW50YXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgICAgICBjYXNlIDg6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoID0gaW1hZ2VzWzBdLmltYWdlLmhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodCA9IGltYWdlc1swXS5pbWFnZS53aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoID0gaW1hZ2VzWzBdLmltYWdlLndpZHRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0ID0gaW1hZ2VzWzBdLmltYWdlLmhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIF9jYWxjdWxhdGVkV2lkdGggPSBfY2FudmFzV2lkdGggPSBfY29uZmlnLnNpemUgP1xuICAgICAgICAgICAgICAgICAgICB3aWR0aCAvIGhlaWdodCA+IDEgPyBfY29uZmlnLnNpemUgOiBNYXRoLmZsb29yKCh3aWR0aCAvIGhlaWdodCkgKiBfY29uZmlnLnNpemUpIDogd2lkdGg7XG4gICAgICAgICAgICAgICAgX2NhbGN1bGF0ZWRIZWlnaHQgPSBfY2FudmFzSGVpZ2h0ID0gX2NvbmZpZy5zaXplID9cbiAgICAgICAgICAgICAgICAgICAgd2lkdGggLyBoZWlnaHQgPiAxID8gTWF0aC5mbG9vcigoaGVpZ2h0IC8gd2lkdGgpICogX2NvbmZpZy5zaXplKSA6IF9jb25maWcuc2l6ZSA6IGhlaWdodDtcbiAgICAgICAgICAgICAgICBsb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGZyYW1lSW5kZXggPSAwO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gcHVibGlzaEV2ZW50KCdjYW5yZWNvcmQnLCBbXSksIDApO1xuICAgICAgICAgICAgfSwgb2Zmc2V0LCBzaXplLCBfY29uZmlnLnNlcXVlbmNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHB1Ymxpc2hFdmVudChldmVudE5hbWUsIGFyZ3MpIHtcbiAgICAgICAgICAgIGNvbnN0IGhhbmRsZXJzID0gX2V2ZW50SGFuZGxlcnNbZXZlbnROYW1lXTtcblxuICAgICAgICAgICAgaWYgKGhhbmRsZXJzICYmIGhhbmRsZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGhhbmRsZXJzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXJzW2pdLmFwcGx5KHRoYXQsIGFyZ3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoYXQudHJpZ2dlciA9IHB1Ymxpc2hFdmVudDtcblxuICAgICAgICB0aGF0LmdldFdpZHRoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9jYWxjdWxhdGVkV2lkdGg7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhhdC5nZXRIZWlnaHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX2NhbGN1bGF0ZWRIZWlnaHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhhdC5zZXRXaWR0aCA9IGZ1bmN0aW9uIChuZXdXaWR0aCkge1xuICAgICAgICAgICAgX2NhbGN1bGF0ZWRXaWR0aCA9IG5ld1dpZHRoO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoYXQuc2V0SGVpZ2h0ID0gZnVuY3Rpb24gKG5ld0hlaWdodCkge1xuICAgICAgICAgICAgX2NhbGN1bGF0ZWRIZWlnaHQgPSBuZXdIZWlnaHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhhdC5nZXRSZWFsV2lkdGggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gd2lkdGg7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhhdC5nZXRSZWFsSGVpZ2h0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGhlaWdodDtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGF0LnNldElucHV0U3RyZWFtID0gZnVuY3Rpb24gKHN0cmVhbSkge1xuICAgICAgICAgICAgX2NvbmZpZyA9IHN0cmVhbTtcbiAgICAgICAgICAgIGlmIChzdHJlYW0uc2VxdWVuY2UgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgYmFzZVVybCA9IHN0cmVhbS5zcmM7XG4gICAgICAgICAgICAgICAgc2l6ZSA9IDE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJhc2VVcmwgPSBzdHJlYW0uc3JjO1xuICAgICAgICAgICAgICAgIHNpemUgPSBzdHJlYW0ubGVuZ3RoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbG9hZEltYWdlcygpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoYXQuZW5kZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gZW5kZWQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhhdC5zZXRBdHRyaWJ1dGUgPSBmdW5jdGlvbiAoKSB7IH07XG5cbiAgICAgICAgdGhhdC5nZXRDb25maWcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX2NvbmZpZztcbiAgICAgICAgfTtcblxuICAgICAgICB0aGF0LnBhdXNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcGF1c2VkID0gdHJ1ZTtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGF0LnBsYXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBwYXVzZWQgPSBmYWxzZTtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGF0LnNldEN1cnJlbnRUaW1lID0gZnVuY3Rpb24gKHRpbWUpIHtcbiAgICAgICAgICAgIGZyYW1lSW5kZXggPSB0aW1lO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoYXQuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uIChldmVudCwgZikge1xuICAgICAgICAgICAgaWYgKF9ldmVudE5hbWVzLmluZGV4T2YoZXZlbnQpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIGlmICghX2V2ZW50SGFuZGxlcnNbZXZlbnRdKSB7XG4gICAgICAgICAgICAgICAgICAgIF9ldmVudEhhbmRsZXJzW2V2ZW50XSA9IFtdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfZXZlbnRIYW5kbGVyc1tldmVudF0ucHVzaChmKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB0aGF0LnNldFRvcFJpZ2h0ID0gZnVuY3Rpb24gKHRvcFJpZ2h0KSB7XG4gICAgICAgICAgICBfdG9wUmlnaHQueCA9IHRvcFJpZ2h0Lng7XG4gICAgICAgICAgICBfdG9wUmlnaHQueSA9IHRvcFJpZ2h0Lnk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhhdC5nZXRUb3BSaWdodCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfdG9wUmlnaHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhhdC5zZXRDYW52YXNTaXplID0gZnVuY3Rpb24gKHcsIGgpIHtcbiAgICAgICAgICAgIF9jYW52YXNXaWR0aCA9IHc7XG4gICAgICAgICAgICBfY2FudmFzSGVpZ2h0ID0gaDtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGF0LmdldENhbnZhc1dpZHRoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9jYW52YXNXaWR0aDtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGF0LmdldENhbnZhc0hlaWdodCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfY2FudmFzSGVpZ2h0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoYXQuZ2V0RnJhbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsZXQgZnJhbWU7XG5cbiAgICAgICAgICAgIGlmICghbG9hZGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXBhdXNlZCkge1xuICAgICAgICAgICAgICAgIGZyYW1lID0gX2ltYWdlc1tmcmFtZUluZGV4XTtcbiAgICAgICAgICAgICAgICBpZiAoZnJhbWVJbmRleCA8IChzaXplIC0gMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZnJhbWVJbmRleCsrO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW5kZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHVibGlzaEV2ZW50KCdlbmRlZCcsIFtdKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZyYW1lO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiB0aGF0O1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENsdXN0ZXIgfSBmcm9tICcuLi9jb21tb24vY2x1c3Rlcic7XG5pbXBvcnQgeyBjYWxjdWxhdGVQYXRjaFNpemUsIGNvbXB1dGVJbWFnZUFyZWEsIGhhbGZTYW1wbGUsIGhzdjJyZ2IsIG90c3VUaHJlc2hvbGQgfSBmcm9tICcuLi9jb21tb24vY3ZfdXRpbHMnO1xuaW1wb3J0IHsgSW1hZ2VEZWJ1ZyB9IGZyb20gJy4uL2NvbW1vbi9pbWFnZV9kZWJ1Zyc7XG5pbXBvcnQgeyBJbWFnZVdyYXBwZXIgfSBmcm9tICcuLi9jb21tb24vaW1hZ2Vfd3JhcHBlcic7XG5pbXBvcnQgeyBSYXN0ZXJpemVyIH0gZnJvbSAnLi9yYXN0ZXJpemVyJztcbmltcG9ydCBza2VsZXRvbml6ZXIgZnJvbSAnLi9za2VsZXRvbml6ZXInO1xuaW1wb3J0IHsgU2VhcmNoRGlyZWN0aW9ucyB9IGZyb20gJy4vdHJhY2VyJztcblxubGV0IF9jb25maWc7XG5sZXQgX2N1cnJlbnRJbWFnZVdyYXBwZXI7XG5sZXQgX3NrZWxJbWFnZVdyYXBwZXI7XG5sZXQgX3N1YkltYWdlV3JhcHBlcjtcbmxldCBfbGFiZWxJbWFnZVdyYXBwZXI7XG5sZXQgX3BhdGNoR3JpZDtcbmxldCBfcGF0Y2hMYWJlbEdyaWQ7XG5sZXQgX2ltYWdlVG9QYXRjaEdyaWQ7XG5sZXQgX2JpbmFyeUltYWdlV3JhcHBlcjtcbmxldCBfcGF0Y2hTaXplO1xubGV0IF9jYW52YXNDb250YWluZXIgPSB7XG4gICAgY3R4OiB7XG4gICAgICAgIGJpbmFyeTogbnVsbFxuICAgIH0sXG4gICAgZG9tOiB7XG4gICAgICAgIGJpbmFyeTogbnVsbFxuICAgIH1cbn07XG5sZXQgX251bVBhdGNoZXMgPSB7IHg6IDAsIHk6IDAgfTtcbmxldCBfaW5wdXRJbWFnZVdyYXBwZXI7XG5sZXQgX3NrZWxldG9uaXplcjtcblxuZnVuY3Rpb24gaW5pdEJ1ZmZlcnMoKSB7XG4gICAgaWYgKF9jb25maWcuaGFsZlNhbXBsZSkge1xuICAgICAgICBfY3VycmVudEltYWdlV3JhcHBlciA9IG5ldyBJbWFnZVdyYXBwZXIoe1xuICAgICAgICAgICAgeDogX2lucHV0SW1hZ2VXcmFwcGVyLnNpemUueCAvIDIgfCAwLFxuICAgICAgICAgICAgeTogX2lucHV0SW1hZ2VXcmFwcGVyLnNpemUueSAvIDIgfCAwXG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIF9jdXJyZW50SW1hZ2VXcmFwcGVyID0gX2lucHV0SW1hZ2VXcmFwcGVyO1xuICAgIH1cblxuICAgIF9wYXRjaFNpemUgPSBjYWxjdWxhdGVQYXRjaFNpemUoX2NvbmZpZy5wYXRjaFNpemUsIF9jdXJyZW50SW1hZ2VXcmFwcGVyLnNpemUpO1xuXG4gICAgX251bVBhdGNoZXMueCA9IF9jdXJyZW50SW1hZ2VXcmFwcGVyLnNpemUueCAvIF9wYXRjaFNpemUueCB8IDA7XG4gICAgX251bVBhdGNoZXMueSA9IF9jdXJyZW50SW1hZ2VXcmFwcGVyLnNpemUueSAvIF9wYXRjaFNpemUueSB8IDA7XG5cbiAgICBfYmluYXJ5SW1hZ2VXcmFwcGVyID0gbmV3IEltYWdlV3JhcHBlcihfY3VycmVudEltYWdlV3JhcHBlci5zaXplLCB1bmRlZmluZWQsIFVpbnQ4QXJyYXksIGZhbHNlKTtcblxuICAgIF9sYWJlbEltYWdlV3JhcHBlciA9IG5ldyBJbWFnZVdyYXBwZXIoX3BhdGNoU2l6ZSwgdW5kZWZpbmVkLCBBcnJheSwgdHJ1ZSk7XG5cbiAgICBjb25zdCBza2VsZXRvbkltYWdlRGF0YSA9IG5ldyBBcnJheUJ1ZmZlcig2NCAqIDEwMjQpO1xuICAgIF9zdWJJbWFnZVdyYXBwZXIgPSBuZXcgSW1hZ2VXcmFwcGVyKF9wYXRjaFNpemUsIG5ldyBVaW50OEFycmF5KHNrZWxldG9uSW1hZ2VEYXRhLCAwLCBfcGF0Y2hTaXplLnggKiBfcGF0Y2hTaXplLnkpKTtcbiAgICBfc2tlbEltYWdlV3JhcHBlciA9IG5ldyBJbWFnZVdyYXBwZXIoX3BhdGNoU2l6ZSxcbiAgICAgICAgbmV3IFVpbnQ4QXJyYXkoc2tlbGV0b25JbWFnZURhdGEsIF9wYXRjaFNpemUueCAqIF9wYXRjaFNpemUueSAqIDMsIF9wYXRjaFNpemUueCAqIF9wYXRjaFNpemUueSksXG4gICAgICAgIHVuZGVmaW5lZCwgdHJ1ZSk7XG4gICAgX3NrZWxldG9uaXplciA9IHNrZWxldG9uaXplcihcbiAgICAgICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSA/IHdpbmRvdyA6ICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcpID8gc2VsZiA6IGdsb2JhbCxcbiAgICAgICAgeyBzaXplOiBfcGF0Y2hTaXplLnggfSxcbiAgICAgICAgc2tlbGV0b25JbWFnZURhdGFcbiAgICApO1xuXG4gICAgX2ltYWdlVG9QYXRjaEdyaWQgPSBuZXcgSW1hZ2VXcmFwcGVyKHtcbiAgICAgICAgeDogKF9jdXJyZW50SW1hZ2VXcmFwcGVyLnNpemUueCAvIF9zdWJJbWFnZVdyYXBwZXIuc2l6ZS54KSB8IDAsXG4gICAgICAgIHk6IChfY3VycmVudEltYWdlV3JhcHBlci5zaXplLnkgLyBfc3ViSW1hZ2VXcmFwcGVyLnNpemUueSkgfCAwXG4gICAgfSwgdW5kZWZpbmVkLCBBcnJheSwgdHJ1ZSk7XG4gICAgX3BhdGNoR3JpZCA9IG5ldyBJbWFnZVdyYXBwZXIoX2ltYWdlVG9QYXRjaEdyaWQuc2l6ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRydWUpO1xuICAgIF9wYXRjaExhYmVsR3JpZCA9IG5ldyBJbWFnZVdyYXBwZXIoX2ltYWdlVG9QYXRjaEdyaWQuc2l6ZSwgdW5kZWZpbmVkLCBJbnQzMkFycmF5LCB0cnVlKTtcbn1cblxuZnVuY3Rpb24gaW5pdENhbnZhcygpIHtcbiAgICBpZiAoX2NvbmZpZy51c2VXb3JrZXIgfHwgdHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIF9jYW52YXNDb250YWluZXIuZG9tLmJpbmFyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIF9jYW52YXNDb250YWluZXIuZG9tLmJpbmFyeS5jbGFzc05hbWUgPSAnYmluYXJ5QnVmZmVyJztcbiAgICBpZiAoX2NvbmZpZy5kZWJ1ZyAmJiBfY29uZmlnLmRlYnVnLnNob3dDYW52YXMpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RlYnVnJykuYXBwZW5kQ2hpbGQoX2NhbnZhc0NvbnRhaW5lci5kb20uYmluYXJ5KTtcbiAgICB9XG4gICAgX2NhbnZhc0NvbnRhaW5lci5jdHguYmluYXJ5ID0gX2NhbnZhc0NvbnRhaW5lci5kb20uYmluYXJ5LmdldENvbnRleHQoJzJkJyk7XG4gICAgX2NhbnZhc0NvbnRhaW5lci5kb20uYmluYXJ5LndpZHRoID0gX2JpbmFyeUltYWdlV3JhcHBlci5zaXplLng7XG4gICAgX2NhbnZhc0NvbnRhaW5lci5kb20uYmluYXJ5LmhlaWdodCA9IF9iaW5hcnlJbWFnZVdyYXBwZXIuc2l6ZS55O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBib3VuZGluZyBib3ggd2hpY2ggZW5jbG9zZXMgYWxsIHRoZSBnaXZlbiBwYXRjaGVzXG4gKiBAcmV0dXJucyBUaGUgbWluaW1hbCBib3VuZGluZyBib3hcbiAqL1xuZnVuY3Rpb24gYm94RnJvbVBhdGNoZXMocGF0Y2hlcykge1xuICAgIGxldCBhdmVyYWdlUmFkID0gcGF0Y2hlcy5yZWR1Y2UoKHN1bSwgcGF0Y2gpID0+IHtcbiAgICAgICAgaWYgKF9jb25maWcuZGVidWcgJiYgX2NvbmZpZy5kZWJ1Zy5zaG93UGF0Y2hlcykge1xuICAgICAgICAgICAgLy8gZHJhdyBhbGwgcGF0Y2hlcyB3aGljaCBhcmUgdG8gYmUgdGFrZW4gaW50byBjb25zaWRlcmF0aW9uXG4gICAgICAgICAgICBJbWFnZURlYnVnLmRyYXdSZWN0KHBhdGNoLnBvcywgX3N1YkltYWdlV3JhcHBlci5zaXplLCBfY2FudmFzQ29udGFpbmVyLmN0eC5iaW5hcnksIHsgY29sb3I6ICdyZWQnIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1bSArIHBhdGNoLnJhZDtcbiAgICB9LCAwKSAvIHBhdGNoZXMubGVuZ3RoO1xuXG4gICAgYXZlcmFnZVJhZCA9IChhdmVyYWdlUmFkICogMTgwIC8gTWF0aC5QSSArIDkwKSAlIDE4MCAtIDkwO1xuICAgIGlmIChhdmVyYWdlUmFkIDwgMCkge1xuICAgICAgICBhdmVyYWdlUmFkICs9IDE4MDtcbiAgICB9XG4gICAgYXZlcmFnZVJhZCA9ICgxODAgLSBhdmVyYWdlUmFkKSAqIE1hdGguUEkgLyAxODA7XG5cbiAgICBjb25zdCBjb3MgPSBNYXRoLmNvcyhhdmVyYWdlUmFkKTtcbiAgICBjb25zdCBzaW4gPSBNYXRoLnNpbihhdmVyYWdlUmFkKTtcbiAgICBjb25zdCBtYXRyaXggPSBGbG9hdDMyQXJyYXkuZnJvbShbY29zLCBzaW4sIC1zaW4sIGNvc10pO1xuICAgIGNvbnN0IGNvbnRleHQgPSBfY2FudmFzQ29udGFpbmVyLmN0eC5iaW5hcnk7XG5cbiAgICAvLyBpdGVyYXRlIG92ZXIgcGF0Y2hlcyBhbmQgcm90YXRlIGJ5IGFuZ2xlXG4gICAgcGF0Y2hlcy5mb3JFYWNoKHBhdGNoID0+IHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA0OyBqKyspIHtcbiAgICAgICAgICAgIHBhdGNoLmJveFtqXSA9IHRyYW5zZm9ybVdpdGhNYXRyaXgocGF0Y2guYm94W2pdLCBtYXRyaXgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF9jb25maWcuZGVidWcgJiYgX2NvbmZpZy5kZWJ1Zy5ib3hGcm9tUGF0Y2hlcy5zaG93VHJhbnNmb3JtZWQpIHtcbiAgICAgICAgICAgIEltYWdlRGVidWcuZHJhd1BhdGgocGF0Y2guYm94LCB7IHg6ICd4JywgeTogJ3knIH0sIGNvbnRleHQsIHsgY29sb3I6ICcjOTlmZjAwJywgbGluZVdpZHRoOiAyIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBsZXQgbWluWCA9IF9iaW5hcnlJbWFnZVdyYXBwZXIuc2l6ZS54O1xuICAgIGxldCBtaW5ZID0gX2JpbmFyeUltYWdlV3JhcHBlci5zaXplLnk7XG4gICAgbGV0IG1heFggPSAtbWluWDtcbiAgICBsZXQgbWF4WSA9IC1taW5ZO1xuXG4gICAgLy8gZmluZCBib3VuZGluZyBib3hcbiAgICBwYXRjaGVzLmZvckVhY2gocGF0Y2ggPT4ge1xuICAgICAgICBwYXRjaC5ib3guZm9yRWFjaCh2ZXJ0ZXggPT4ge1xuICAgICAgICAgICAgaWYgKHZlcnRleC54IDwgbWluWCkge1xuICAgICAgICAgICAgICAgIG1pblggPSB2ZXJ0ZXgueDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh2ZXJ0ZXgueCA+IG1heFgpIHtcbiAgICAgICAgICAgICAgICBtYXhYID0gdmVydGV4Lng7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmVydGV4LnkgPCBtaW5ZKSB7XG4gICAgICAgICAgICAgICAgbWluWSA9IHZlcnRleC55O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHZlcnRleC55ID4gbWF4WSkge1xuICAgICAgICAgICAgICAgIG1heFkgPSB2ZXJ0ZXgueTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBib3ggPSBbeyB4OiBtaW5YLCB5OiBtaW5ZIH0sIHsgeDogbWF4WCwgeTogbWluWSB9LCB7IHg6IG1heFgsIHk6IG1heFkgfSwgeyB4OiBtaW5YLCB5OiBtYXhZIH1dO1xuXG4gICAgaWYgKF9jb25maWcuZGVidWcgJiYgX2NvbmZpZy5kZWJ1Zy5ib3hGcm9tUGF0Y2hlcy5zaG93VHJhbnNmb3JtZWRCb3gpIHtcbiAgICAgICAgSW1hZ2VEZWJ1Zy5kcmF3UGF0aChib3gsIHsgeDogJ3gnLCB5OiAneScgfSwgY29udGV4dCwgeyBjb2xvcjogJyNmZjAwMDAnLCBsaW5lV2lkdGg6IDIgfSk7XG4gICAgfVxuXG4gICAgLy8gcmV2ZXJzZSByb3RhdGlvblxuICAgIGNvbnN0IGludmVyc2VNYXRyaXggPSBpbnZlcnQobWF0cml4KTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDQ7IGorKykge1xuICAgICAgICBib3hbal0gPSB0cmFuc2Zvcm1XaXRoTWF0cml4KGJveFtqXSwgaW52ZXJzZU1hdHJpeCk7XG4gICAgfVxuXG4gICAgaWYgKF9jb25maWcuZGVidWcgJiYgX2NvbmZpZy5kZWJ1Zy5ib3hGcm9tUGF0Y2hlcy5zaG93QkIpIHtcbiAgICAgICAgSW1hZ2VEZWJ1Zy5kcmF3UGF0aChib3gsIHsgeDogJ3gnLCB5OiAneScgfSwgY29udGV4dCwgeyBjb2xvcjogJyNmZjAwMDAnLCBsaW5lV2lkdGg6IDIgfSk7XG4gICAgfVxuXG4gICAgaWYgKF9jb25maWcuaGFsZlNhbXBsZSkge1xuICAgICAgICAvLyBzY2FsZVxuICAgICAgICBib3guZm9yRWFjaCh2ZXJ0ZXggPT4ge1xuICAgICAgICAgICAgdmVydGV4LnggKj0gMjtcbiAgICAgICAgICAgIHZlcnRleC55ICo9IDI7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBib3g7XG59XG5cbi8qKlxuICogSW52ZXJ0IG1hdHJpeFxuICogQHBhcmFtIG1hdHJpeCB0aGUgbWF0cml4IHRvIGludmVydFxuICogQHJldHVybnMgdGhlIGludmVydGVkIG1hdHJpeFxuICovXG5mdW5jdGlvbiBpbnZlcnQobWF0cml4KSB7XG4gICAgY29uc3QgYTAgPSBtYXRyaXhbMF07XG4gICAgY29uc3QgYTEgPSBtYXRyaXhbMV07XG4gICAgY29uc3QgYTIgPSBtYXRyaXhbMl07XG4gICAgY29uc3QgYTMgPSBtYXRyaXhbM107XG4gICAgY29uc3QgZGV0ZXJtaW5hbnQgPSBhMCAqIGEzIC0gYTIgKiBhMTtcblxuICAgIGlmICghZGV0ZXJtaW5hbnQpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIEZsb2F0MzJBcnJheS5mcm9tKFthMyAvIGRldGVybWluYW50LCAtYTEgLyBkZXRlcm1pbmFudCwgLWEyIC8gZGV0ZXJtaW5hbnQsIGEwIC8gZGV0ZXJtaW5hbnRdKTtcbn1cblxuLyoqXG4gKiBUcmFuc2Zvcm1zIHRoZSB2ZWN0b3Igd2l0aCBhIG1hdHJpeFxuICogQHBhcmFtIHsgeCwgeSB9IHZlY3RvciB0byB0cmFuc2Zvcm1cbiAqIEBwYXJhbSBtYXRyaWMgbWF0cml4IHRvIHRyYW5zZm9ybSB3aXRoXG4gKiBAcmV0dXJucyB0aGUgdHJhbnNmb3JtZWQgdmVjdG9yXG4gKi9cbmZ1bmN0aW9uIHRyYW5zZm9ybVdpdGhNYXRyaXgoeyB4LCB5IH0sIG1hdHJpeCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHg6IG1hdHJpeFswXSAqIHggKyBtYXRyaXhbMl0gKiB5LFxuICAgICAgICB5OiBtYXRyaXhbMV0gKiB4ICsgbWF0cml4WzNdICogeVxuICAgIH07XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGJpbmFyeSBpbWFnZSBvZiB0aGUgY3VycmVudCBpbWFnZVxuICovXG5mdW5jdGlvbiBiaW5hcml6ZUltYWdlKCkge1xuICAgIG90c3VUaHJlc2hvbGQoX2N1cnJlbnRJbWFnZVdyYXBwZXIsIF9iaW5hcnlJbWFnZVdyYXBwZXIpO1xuICAgIF9iaW5hcnlJbWFnZVdyYXBwZXIuemVyb0JvcmRlcigpO1xuXG4gICAgaWYgKF9jb25maWcuZGVidWcgJiYgX2NvbmZpZy5kZWJ1Zy5zaG93Q2FudmFzKSB7XG4gICAgICAgIF9iaW5hcnlJbWFnZVdyYXBwZXIuc2hvdyhfY2FudmFzQ29udGFpbmVyLmRvbS5iaW5hcnksIDI1NSk7XG4gICAgfVxufVxuXG4vKipcbiAqIEl0ZXJhdGUgb3ZlciB0aGUgZW50aXJlIGltYWdlXG4gKiBleHRyYWN0IHBhdGNoZXNcbiAqL1xuZnVuY3Rpb24gZmluZFBhdGNoZXMoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IF9jYW52YXNDb250YWluZXIuY3R4LmJpbmFyeTtcbiAgICBsZXQgcGF0Y2hlc0ZvdW5kID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IF9udW1QYXRjaGVzLng7IGkrKykge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IF9udW1QYXRjaGVzLnk7IGorKykge1xuICAgICAgICAgICAgY29uc3QgeCA9IF9zdWJJbWFnZVdyYXBwZXIuc2l6ZS54ICogaTtcbiAgICAgICAgICAgIGNvbnN0IHkgPSBfc3ViSW1hZ2VXcmFwcGVyLnNpemUueSAqIGo7XG5cbiAgICAgICAgICAgIC8vIHNlcGVyYXRlIHBhcnRzXG4gICAgICAgICAgICBza2VsZXRvbml6ZSh4LCB5KTtcblxuICAgICAgICAgICAgLy8gUmFzdGVyaXplLCBmaW5kIGluZGl2aWR1YWwgYmFyc1xuICAgICAgICAgICAgX3NrZWxJbWFnZVdyYXBwZXIuemVyb0JvcmRlcigpO1xuICAgICAgICAgICAgX2xhYmVsSW1hZ2VXcmFwcGVyLmRhdGEuZmlsbCgwKTtcbiAgICAgICAgICAgIGNvbnN0IHJhc3Rlcml6ZXIgPSBuZXcgUmFzdGVyaXplcihfc2tlbEltYWdlV3JhcHBlciwgX2xhYmVsSW1hZ2VXcmFwcGVyKTtcbiAgICAgICAgICAgIGNvbnN0IHJhc3RlclJlc3VsdCA9IHJhc3Rlcml6ZXIucmFzdGVyaXplKDApO1xuXG4gICAgICAgICAgICBpZiAoX2NvbmZpZy5kZWJ1ZyAmJiBfY29uZmlnLmRlYnVnLnNob3dMYWJlbHMpIHtcbiAgICAgICAgICAgICAgICBfbGFiZWxJbWFnZVdyYXBwZXIub3ZlcmxheShfY2FudmFzQ29udGFpbmVyLmRvbS5iaW5hcnksIE1hdGguZmxvb3IoMzYwIC8gcmFzdGVyUmVzdWx0LmNvdW50KSwgeCwgeSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGNhbGN1bGF0ZSBtb21lbnRzIGZyb20gdGhlIHNrZWxldG9uaXplZCBwYXRjaFxuICAgICAgICAgICAgY29uc3QgbW9tZW50cyA9IF9sYWJlbEltYWdlV3JhcHBlci5tb21lbnRzKHJhc3RlclJlc3VsdC5jb3VudCk7XG5cbiAgICAgICAgICAgIC8vIGV4dHJhY3QgZWxpZ2libGUgcGF0Y2hlc1xuICAgICAgICAgICAgY29uc3QgcGF0Y2ggPSBkZXNjcmliZVBhdGNoKG1vbWVudHMsIGogKiBfbnVtUGF0Y2hlcy54ICsgaSwgeCwgeSk7XG4gICAgICAgICAgICBpZiAocGF0Y2gpIHtcbiAgICAgICAgICAgICAgICBwYXRjaGVzRm91bmQucHVzaChwYXRjaCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoX2NvbmZpZy5kZWJ1ZyAmJiBfY29uZmlnLmRlYnVnLnNob3dGb3VuZFBhdGNoZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgSW1hZ2VEZWJ1Zy5kcmF3UmVjdChwYXRjaC5wb3MsIF9zdWJJbWFnZVdyYXBwZXIuc2l6ZSwgY29udGV4dCwgeyBjb2xvcjogJyM5OWZmMDAnLCBsaW5lV2lkdGg6IDIgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhdGNoZXNGb3VuZDtcbn1cblxuLyoqXG4gKiBGaW5kcyB0aG9zZSBjb25uZWN0ZWQgYXJlYXMgd2hpY2ggY29udGFpbiBhdCBsZWFzdCA2IHBhdGNoZXNcbiAqIGFuZCByZXR1cm5zIHRoZW0gb3JkZXJlZCBERVNDIGJ5IHRoZSBudW1iZXIgb2YgY29udGFpbmVkIHBhdGNoZXNcbiAqIEBwYXJhbSBtYXhMYWJlbFxuICovXG5mdW5jdGlvbiBmaW5kQmlnZ2VzdENvbm5lY3RlZEFyZWFzKG1heExhYmVsKSB7XG4gICAgbGV0IGxhYmVsSGlzdCA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXhMYWJlbDsgaSsrKSB7XG4gICAgICAgIGxhYmVsSGlzdC5wdXNoKDApO1xuICAgIH1cblxuICAgIGxldCBpID0gX3BhdGNoTGFiZWxHcmlkLmRhdGEubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgaWYgKF9wYXRjaExhYmVsR3JpZC5kYXRhW2ldID4gMCkge1xuICAgICAgICAgICAgbGFiZWxIaXN0W19wYXRjaExhYmVsR3JpZC5kYXRhW2ldIC0gMV0rKztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxhYmVsSGlzdCA9IGxhYmVsSGlzdC5tYXAoKHZhbCwgaW5kZXgpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbCxcbiAgICAgICAgICAgIGxhYmVsOiBpbmRleCArIDFcbiAgICAgICAgfTtcbiAgICB9KTtcblxuICAgIGxhYmVsSGlzdC5zb3J0KChhLCBiKSA9PiBiLnZhbCAtIGEudmFsKTtcblxuICAgIC8vIGV4dHJhY3QgdG9wIGFyZWFzIHdpdGggYXQgbGVhc3QgNiBwYXRjaGVzIHByZXNlbnRcbiAgICBjb25zdCB0b3BMYWJlbHMgPSBsYWJlbEhpc3QuZmlsdGVyKGVsID0+IGVsLnZhbCA+PSA1KTtcblxuICAgIHJldHVybiB0b3BMYWJlbHM7XG59XG5cbi8qKlxuICpcbiAqL1xuZnVuY3Rpb24gZmluZEJveGVzKHRvcExhYmVscywgbWF4TGFiZWwpIHtcbiAgICBjb25zdCBib3hlcyA9IFtdO1xuICAgIGNvbnN0IGhzdiA9IFswLCAxLCAxXTtcbiAgICBjb25zdCByZ2IgPSBbMCwgMCwgMF07XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvcExhYmVscy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBwYXRjaGVzID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgc3VtID0gX3BhdGNoTGFiZWxHcmlkLmRhdGEubGVuZ3RoOyBzdW0tLTspIHtcbiAgICAgICAgICAgIGlmIChfcGF0Y2hMYWJlbEdyaWQuZGF0YVtzdW1dID09PSB0b3BMYWJlbHNbaV0ubGFiZWwpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXRjaCA9IF9pbWFnZVRvUGF0Y2hHcmlkLmRhdGFbc3VtXTtcbiAgICAgICAgICAgICAgICBwYXRjaGVzLnB1c2gocGF0Y2gpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYm94ID0gYm94RnJvbVBhdGNoZXMocGF0Y2hlcyk7XG5cbiAgICAgICAgaWYgKGJveCkge1xuICAgICAgICAgICAgYm94ZXMucHVzaChib3gpO1xuXG4gICAgICAgICAgICAvLyBkcmF3IHBhdGNoLWxhYmVscyBpZiByZXF1ZXN0ZWRcbiAgICAgICAgICAgIGlmIChfY29uZmlnLmRlYnVnICYmIF9jb25maWcuZGVidWcuc2hvd1JlbWFpbmluZ1BhdGNoTGFiZWxzKSB7XG4gICAgICAgICAgICAgICAgaHN2WzBdID0gKHRvcExhYmVsc1tpXS5sYWJlbCAvIChtYXhMYWJlbCArIDEpKSAqIDM2MDtcbiAgICAgICAgICAgICAgICBoc3YycmdiKGhzdiwgcmdiKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSBfY2FudmFzQ29udGFpbmVyLmN0eC5iaW5hcnk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAncmdiKCcgKyByZ2Iuam9pbignLCcpICsgJyknLFxuICAgICAgICAgICAgICAgICAgICBsaW5lV2lkdGg6IDJcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgcGF0Y2hlcy5mb3JFYWNoKHBhdGNoID0+IEltYWdlRGVidWcuZHJhd1JlY3QocGF0Y2gucG9zLCBfc3ViSW1hZ2VXcmFwcGVyLnNpemUsIGNvbnRleHQsIHN0eWxlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYm94ZXM7XG59XG5cbmZ1bmN0aW9uIGNsdXN0ZXJpemUocG9pbnRzLCB0aHJlc2hvbGQsIHByb3BlcnR5ID0gJ3JhZCcpIHtcbiAgICBjb25zdCBjbHVzdGVycyA9IFtdO1xuXG4gICAgcG9pbnRzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBwb2ludCA9IHtcbiAgICAgICAgICAgIHJhZDogdmFsdWVbcHJvcGVydHldLFxuICAgICAgICAgICAgcG9pbnQ6IHZhbHVlLFxuICAgICAgICAgICAgaWQ6IGluZGV4XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IG1hdGNoaW5nQ2x1c3RlciA9IGNsdXN0ZXJzLmZpbmQoY2x1c3RlciA9PiBjbHVzdGVyLmZpdHMocG9pbnQpKTtcblxuICAgICAgICBpZiAobWF0Y2hpbmdDbHVzdGVyKSB7XG4gICAgICAgICAgICBtYXRjaGluZ0NsdXN0ZXIuYWRkKHBvaW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNsdXN0ZXJzLnB1c2gobmV3IENsdXN0ZXIodGhyZXNob2xkLCBwb2ludCkpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY2x1c3RlcnM7XG59O1xuXG4vKipcbiAqIEZpbmQgc2ltaWxhciBtb21lbnRzICh2aWEgY2x1c3RlcilcbiAqIEBwYXJhbSBtb21lbnRzXG4gKi9cbmZ1bmN0aW9uIHNpbWlsYXJNb21lbnRzKG1vbWVudHMpIHtcbiAgICBjb25zdCBjbHVzdGVycyA9IGNsdXN0ZXJpemUobW9tZW50cywgMC45MCk7XG4gICAgY29uc3QgdG9wQ2x1c3RlciA9IGNsdXN0ZXJzLnJlZHVjZSgodG9wLCBpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvdW50ID0gaXRlbS5wb2ludHMubGVuZ3RoO1xuICAgICAgICByZXR1cm4gY291bnQgPiB0b3AuY291bnQgPyB7IGl0ZW0sIGNvdW50IH0gOiB0b3A7XG4gICAgfSwgeyBpdGVtOiB7IHBvaW50czogW10gfSwgY291bnQ6IDAgfSk7XG4gICAgY29uc3QgcmVzdWx0ID0gdG9wQ2x1c3Rlci5pdGVtLnBvaW50cy5tYXAocG9pbnQgPT4gcG9pbnQucG9pbnQpO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gc2tlbGV0b25pemUoeCwgeSkge1xuICAgIF9iaW5hcnlJbWFnZVdyYXBwZXIuc3ViSW1hZ2VBc0NvcHkoX3N1YkltYWdlV3JhcHBlciwgeCwgeSk7XG4gICAgX3NrZWxldG9uaXplci5za2VsZXRvbml6ZSgpO1xuXG4gICAgLy8gU2hvdyBza2VsZXRvbiBpZiByZXF1ZXN0ZWRcbiAgICBpZiAoX2NvbmZpZy5kZWJ1ZyAmJiBfY29uZmlnLmRlYnVnLnNob3dTa2VsZXRvbikge1xuICAgICAgICBfc2tlbEltYWdlV3JhcHBlci5vdmVybGF5KF9jYW52YXNDb250YWluZXIuZG9tLmJpbmFyeSwgMzYwLCB4LCB5KTtcbiAgICB9XG59XG5cbi8qKlxuICogRXh0cmFjdHMgYW5kIGRlc2NyaWJlcyB0aG9zZSBwYXRjaGVzIHdoaWNoIHNlZW0gdG8gY29udGFpbiBhIGJhcmNvZGUgcGF0dGVyblxuICogQHBhcmFtIHtBcnJheX0gbW9tZW50c1xuICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XG4gKiBAcGFyYW0ge051bWJlcn0geFxuICogQHBhcmFtIHtOdW1iZXJ9IHlcbiAqIEByZXR1cm5zIHtBcnJheX0gbGlzdCBvZiBwYXRjaGVzXG4gKi9cbmZ1bmN0aW9uIGRlc2NyaWJlUGF0Y2gobW9tZW50cywgaW5kZXgsIHgsIHkpIHtcbiAgICBpZiAobW9tZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGNvbnN0IG1pbkNvbXBvbmVudFdlaWdodCA9IE1hdGguY2VpbChfcGF0Y2hTaXplLnggLyAzKTtcbiAgICAgICAgLy8gb25seSBjb2xsZWN0IG1vbWVudHMgd2hpY2ggYXJlYSBjb3ZlcnMgYXQgbGVhc3QgbWluQ29tcG9uZW50V2VpZ2h0IHBpeGVsc1xuICAgICAgICBjb25zdCBlbGlnaWJsZU1vbWVudHMgPSBtb21lbnRzLmZpbHRlcihtb21lbnQgPT4gbW9tZW50Lm0wMCA+IG1pbkNvbXBvbmVudFdlaWdodCk7XG5cbiAgICAgICAgLy8gaWYgYXQgbGVhc3QgMiBtb21lbnRzIGFyZSBmb3VuZCB3aGljaCBoYXZlIGF0IGxlYXN0IG1pbkNvbXBvbmVudFdlaWdodHMgY292ZXJlZFxuICAgICAgICBpZiAoZWxpZ2libGVNb21lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoaW5nTW9tZW50cyA9IHNpbWlsYXJNb21lbnRzKGVsaWdpYmxlTW9tZW50cyk7XG4gICAgICAgICAgICBjb25zdCBsZW5ndGggPSBtYXRjaGluZ01vbWVudHMubGVuZ3RoO1xuXG4gICAgICAgICAgICAvLyBPbmx5IHR3byBvZiB0aGUgbW9tZW50cyBhcmUgYWxsb3dlZCBub3QgdG8gZml0IGludG8gdGhlIGVxdWF0aW9uXG4gICAgICAgICAgICBpZiAobGVuZ3RoID4gMSAmJiBsZW5ndGggPj0gKGVsaWdpYmxlTW9tZW50cy5sZW5ndGggLyA0KSAqIDMgJiYgbGVuZ3RoID4gbW9tZW50cy5sZW5ndGggLyA0KSB7XG4gICAgICAgICAgICAgICAgLy8gZGV0ZXJtaW5lIHRoZSBzaW1pbGFyaXR5IG9mIHRoZSBtb21lbnRzXG4gICAgICAgICAgICAgICAgY29uc3QgcmFkID0gbWF0Y2hpbmdNb21lbnRzLnJlZHVjZSgoc3VtLCBtb21lbnQpID0+IHN1bSArIG1vbWVudC5yYWQsIDApIC8gbGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgIHBvczogeyB4LCB5IH0sXG4gICAgICAgICAgICAgICAgICAgIGJveDogW1xuICAgICAgICAgICAgICAgICAgICAgICAgeyB4LCB5IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHg6IHggKyBfc3ViSW1hZ2VXcmFwcGVyLnNpemUueCwgeSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgeyB4OiB4ICsgX3N1YkltYWdlV3JhcHBlci5zaXplLngsIHk6IHkgKyBfc3ViSW1hZ2VXcmFwcGVyLnNpemUueSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgeyB4LCB5OiB5ICsgX3N1YkltYWdlV3JhcHBlci5zaXplLnkgfVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBtb21lbnRzOiBtYXRjaGluZ01vbWVudHMsXG4gICAgICAgICAgICAgICAgICAgIHJhZCxcbiAgICAgICAgICAgICAgICAgICAgeDogTWF0aC5jb3MocmFkKSxcbiAgICAgICAgICAgICAgICAgICAgeTogTWF0aC5zaW4ocmFkKVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKiBmaW5kcyBwYXRjaGVzIHdoaWNoIGFyZSBjb25uZWN0ZWQgYW5kIHNoYXJlIHRoZSBzYW1lIG9yaWVudGF0aW9uXG4gKiBAcGFyYW0gcGF0Y2hlc0ZvdW5kXG4gKi9cbmZ1bmN0aW9uIHJhc3Rlcml6ZUFuZ3VsYXJTaW1pbGFyaXR5KHBhdGNoZXNGb3VuZCkge1xuICAgIGNvbnN0IHRocmVzaG9sZCA9IDAuOTU7XG4gICAgbGV0IGxhYmVsID0gMDtcbiAgICBjb25zdCBoc3YgPSBbMCwgMSwgMV07XG4gICAgY29uc3QgcmdiID0gWzAsIDAsIDBdO1xuXG4gICAgZnVuY3Rpb24gbm90WWV0UHJvY2Vzc2VkKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IF9wYXRjaExhYmVsR3JpZC5kYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoX3BhdGNoTGFiZWxHcmlkLmRhdGFbaV0gPT09IDAgJiYgX3BhdGNoR3JpZC5kYXRhW2ldID09PSAxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF9wYXRjaExhYmVsR3JpZC5kYXRhLmxlbmd0aDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0cmFjZShjdXJyZW50SW5kZXgpIHtcbiAgICAgICAgY29uc3QgY3VycmVudCA9IHtcbiAgICAgICAgICAgIHg6IGN1cnJlbnRJbmRleCAlIF9wYXRjaExhYmVsR3JpZC5zaXplLngsXG4gICAgICAgICAgICB5OiAoY3VycmVudEluZGV4IC8gX3BhdGNoTGFiZWxHcmlkLnNpemUueCkgfCAwXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGN1cnJlbnRJbmRleCA8IF9wYXRjaExhYmVsR3JpZC5kYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFBhdGNoID0gX2ltYWdlVG9QYXRjaEdyaWQuZGF0YVtjdXJyZW50SW5kZXhdO1xuICAgICAgICAgICAgLy8gYXNzaWduIGxhYmVsXG4gICAgICAgICAgICBfcGF0Y2hMYWJlbEdyaWQuZGF0YVtjdXJyZW50SW5kZXhdID0gbGFiZWw7XG5cbiAgICAgICAgICAgIFNlYXJjaERpcmVjdGlvbnMuZm9yRWFjaChkaXJlY3Rpb24gPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHkgPSBjdXJyZW50LnkgKyBkaXJlY3Rpb25bMF07XG4gICAgICAgICAgICAgICAgY29uc3QgeCA9IGN1cnJlbnQueCArIGRpcmVjdGlvblsxXTtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IHkgKiBfcGF0Y2hMYWJlbEdyaWQuc2l6ZS54ICsgeDtcblxuICAgICAgICAgICAgICAgIC8vIGNvbnRpbnVlIGlmIHBhdGNoIGVtcHR5XG4gICAgICAgICAgICAgICAgaWYgKF9wYXRjaEdyaWQuZGF0YVtpbmRleF0gPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgX3BhdGNoTGFiZWxHcmlkLmRhdGFbaW5kZXhdID0gTnVtYmVyLk1BWF9WQUxVRTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKF9wYXRjaExhYmVsR3JpZC5kYXRhW2luZGV4XSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXRjaCA9IF9pbWFnZVRvUGF0Y2hHcmlkLmRhdGFbaW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzaW1pbGFyaXR5ID0gTWF0aC5hYnMocGF0Y2gueCAqIGN1cnJlbnRQYXRjaC54ICsgcGF0Y2gueSAqIGN1cnJlbnRQYXRjaC55KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNpbWlsYXJpdHkgPiB0aHJlc2hvbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYWNlKGluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gcHJlcGFyZSBmb3IgZmluZGluZyB0aGUgcmlnaHQgcGF0Y2hlc1xuICAgIF9wYXRjaEdyaWQuZGF0YS5maWxsKDApO1xuICAgIF9wYXRjaExhYmVsR3JpZC5kYXRhLmZpbGwoMCk7XG4gICAgX2ltYWdlVG9QYXRjaEdyaWQuZGF0YS5maWxsKG51bGwpO1xuXG4gICAgcGF0Y2hlc0ZvdW5kLmZvckVhY2gocGF0Y2ggPT4ge1xuICAgICAgICBfaW1hZ2VUb1BhdGNoR3JpZC5kYXRhW3BhdGNoLmluZGV4XSA9IHBhdGNoO1xuICAgICAgICBfcGF0Y2hHcmlkLmRhdGFbcGF0Y2guaW5kZXhdID0gMTtcbiAgICB9KTtcblxuICAgIC8vIHJhc3Rlcml6ZSB0aGUgcGF0Y2hlcyBmb3VuZCB0byBkZXRlcm1pbmUgYXJlYVxuICAgIF9wYXRjaEdyaWQuemVyb0JvcmRlcigpO1xuXG4gICAgbGV0IGN1cnJlbnRJbmRleCA9IDA7XG4gICAgd2hpbGUgKChjdXJyZW50SW5kZXggPSBub3RZZXRQcm9jZXNzZWQoKSkgPCBfcGF0Y2hMYWJlbEdyaWQuZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgbGFiZWwrKztcbiAgICAgICAgdHJhY2UoY3VycmVudEluZGV4KTtcbiAgICB9XG5cbiAgICAvLyBkcmF3IHBhdGNoLWxhYmVscyBpZiByZXF1ZXN0ZWRcbiAgICBpZiAoX2NvbmZpZy5kZWJ1ZyAmJiBfY29uZmlnLmRlYnVnLnNob3dQYXRjaExhYmVscykge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gX2NhbnZhc0NvbnRhaW5lci5jdHguYmluYXJ5O1xuXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgX3BhdGNoTGFiZWxHcmlkLmRhdGEubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGlmIChfcGF0Y2hMYWJlbEdyaWQuZGF0YVtqXSA+IDAgJiYgX3BhdGNoTGFiZWxHcmlkLmRhdGFbal0gPD0gbGFiZWwpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXRjaCA9IF9pbWFnZVRvUGF0Y2hHcmlkLmRhdGFbal07XG4gICAgICAgICAgICAgICAgaHN2WzBdID0gKF9wYXRjaExhYmVsR3JpZC5kYXRhW2pdIC8gKGxhYmVsICsgMSkpICogMzYwO1xuICAgICAgICAgICAgICAgIGhzdjJyZ2IoaHN2LCByZ2IpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gJ3JnYignICsgcmdiLmpvaW4oJywnKSArICcpJztcbiAgICAgICAgICAgICAgICBJbWFnZURlYnVnLmRyYXdSZWN0KHBhdGNoLnBvcywgX3N1YkltYWdlV3JhcHBlci5zaXplLCBjb250ZXh0LCB7IGNvbG9yLCBsaW5lV2lkdGg6IDIgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWw7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBpbml0OiAoaW5wdXRJbWFnZVdyYXBwZXIsIGNvbmZpZykgPT4ge1xuICAgICAgICBfY29uZmlnID0gY29uZmlnO1xuICAgICAgICBfaW5wdXRJbWFnZVdyYXBwZXIgPSBpbnB1dEltYWdlV3JhcHBlcjtcblxuICAgICAgICBpbml0QnVmZmVycygpO1xuICAgICAgICBpbml0Q2FudmFzKCk7XG4gICAgfSxcblxuICAgIGxvY2F0ZTogKCkgPT4ge1xuICAgICAgICBpZiAoX2NvbmZpZy5oYWxmU2FtcGxlKSB7XG4gICAgICAgICAgICBoYWxmU2FtcGxlKF9pbnB1dEltYWdlV3JhcHBlciwgX2N1cnJlbnRJbWFnZVdyYXBwZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgYmluYXJpemVJbWFnZSgpO1xuICAgICAgICBjb25zdCBwYXRjaGVzRm91bmQgPSBmaW5kUGF0Y2hlcygpO1xuICAgICAgICAvLyByZXR1cm4gdW5sZXNzIDUlIG9yIG1vcmUgcGF0Y2hlcyBhcmUgZm91bmRcbiAgICAgICAgaWYgKHBhdGNoZXNGb3VuZC5sZW5ndGggPCBfbnVtUGF0Y2hlcy54ICogX251bVBhdGNoZXMueSAqIDAuMDUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcmFzdGVyaXplIGFyZWEgYnkgY29tcGFyaW5nIGFuZ3VsYXIgc2ltaWxhcml0eTtcbiAgICAgICAgY29uc3QgbWF4TGFiZWwgPSByYXN0ZXJpemVBbmd1bGFyU2ltaWxhcml0eShwYXRjaGVzRm91bmQpO1xuICAgICAgICBpZiAobWF4TGFiZWwgPCAxKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNlYXJjaCBmb3IgYXJlYSB3aXRoIHRoZSBtb3N0IHBhdGNoZXMgKGJpZ2dlc3QgY29ubmVjdGVkIGFyZWEpXG4gICAgICAgIGNvbnN0IHRvcExhYmVscyA9IGZpbmRCaWdnZXN0Q29ubmVjdGVkQXJlYXMobWF4TGFiZWwpO1xuICAgICAgICBpZiAodG9wTGFiZWxzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBib3hlcyA9IGZpbmRCb3hlcyh0b3BMYWJlbHMsIG1heExhYmVsKTtcbiAgICAgICAgcmV0dXJuIGJveGVzO1xuICAgIH0sXG5cbiAgICBjaGVja0ltYWdlQ29uc3RyYWludHM6IChpbnB1dFN0cmVhbSwgY29uZmlnKSA9PiB7XG4gICAgICAgIGxldCB3aWR0aCA9IGlucHV0U3RyZWFtLmdldFdpZHRoKCk7XG4gICAgICAgIGxldCBoZWlnaHQgPSBpbnB1dFN0cmVhbS5nZXRIZWlnaHQoKTtcbiAgICAgICAgY29uc3Qgc2FtcGxlID0gY29uZmlnLmhhbGZTYW1wbGUgPyAwLjUgOiAxO1xuXG4gICAgICAgIC8vIGNhbGN1bGF0ZSB3aWR0aCBhbmQgaGVpZ2h0IGJhc2VkIG9uIGFyZWFcbiAgICAgICAgaWYgKGlucHV0U3RyZWFtLmdldENvbmZpZygpLmFyZWEpIHtcbiAgICAgICAgICAgIGNvbnN0IGFyZWEgPSBjb21wdXRlSW1hZ2VBcmVhKHdpZHRoLCBoZWlnaHQsIGlucHV0U3RyZWFtLmdldENvbmZpZygpLmFyZWEpO1xuICAgICAgICAgICAgaW5wdXRTdHJlYW0uc2V0VG9wUmlnaHQoeyB4OiBhcmVhLnN4LCB5OiBhcmVhLnN5IH0pO1xuICAgICAgICAgICAgaW5wdXRTdHJlYW0uc2V0Q2FudmFzU2l6ZSh3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgICAgIHdpZHRoID0gYXJlYS5zdztcbiAgICAgICAgICAgIGhlaWdodCA9IGFyZWEuc2g7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzaXplID0ge1xuICAgICAgICAgICAgeDogTWF0aC5mbG9vcih3aWR0aCAqIHNhbXBsZSksXG4gICAgICAgICAgICB5OiBNYXRoLmZsb29yKGhlaWdodCAqIHNhbXBsZSlcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBwYXRjaFNpemUgPSBjYWxjdWxhdGVQYXRjaFNpemUoY29uZmlnLnBhdGNoU2l6ZSwgc2l6ZSk7XG4gICAgICAgIGlmIChFTlYuZGV2ZWxvcG1lbnQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdQYXRjaC1TaXplOicsIEpTT04uc3RyaW5naWZ5KHBhdGNoU2l6ZSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5wdXRTdHJlYW0uc2V0V2lkdGgoTWF0aC5mbG9vcihNYXRoLmZsb29yKHNpemUueCAvIHBhdGNoU2l6ZS54KSAqICgxIC8gc2FtcGxlKSAqIHBhdGNoU2l6ZS54KSk7XG4gICAgICAgIGlucHV0U3RyZWFtLnNldEhlaWdodChNYXRoLmZsb29yKE1hdGguZmxvb3Ioc2l6ZS55IC8gcGF0Y2hTaXplLnkpICogKDEgLyBzYW1wbGUpICogcGF0Y2hTaXplLnkpKTtcblxuICAgICAgICBpZiAoKGlucHV0U3RyZWFtLmdldFdpZHRoKCkgJSBwYXRjaFNpemUueCkgPT09IDAgJiYgKGlucHV0U3RyZWFtLmdldEhlaWdodCgpICUgcGF0Y2hTaXplLnkpID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2UgZGltZW5zaW9ucyBkbyBub3QgY29tcGx5IHdpdGggdGhlIGN1cnJlbnQgc2V0dGluZ3M6IHdpZHRoICgke3dpZHRofSkgYW5kIGhlaWdodCAoJHtoZWlnaHR9KSBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgJHtwYXRjaFNpemUueH1gKTtcbiAgICB9XG59O1xuIiwiLyoqXG4gKiBAYm9ycm93cyBodHRwOi8vd3d3LmNvZGVwcm9qZWN0LmNvbS9UaXBzLzQwNzE3Mi9Db25uZWN0ZWQtQ29tcG9uZW50LUxhYmVsaW5nLWFuZC1WZWN0b3JpemF0aW9uXG4gKi9cblxuaW1wb3J0IHsgVHJhY2VyIH0gZnJvbSAnLi90cmFjZXInO1xuXG5jb25zdCBESVIgPSB7XG4gICAgT1VUU0lERV9FREdFOiAtMzI3NjcsXG4gICAgSU5TSURFX0VER0U6IC0zMjc2NlxufTtcblxuY29uc3QgQ09OVE9VUl9ESVIgPSB7XG4gICAgQ1dfRElSOiAwLFxuICAgIENDV19ESVI6IDEsXG4gICAgVU5LTk9XTl9ESVI6IDJcbn07XG5cbmV4cG9ydCBjbGFzcyBSYXN0ZXJpemVyIHtcbiAgICBjb25zdHJ1Y3RvcihpbWFnZVdyYXBwZXIsIGxhYmVsV3JhcHBlcikge1xuICAgICAgICB0aGlzLmltYWdlRGF0YSA9IGltYWdlV3JhcHBlci5kYXRhO1xuICAgICAgICB0aGlzLmxhYmVsRGF0YSA9IGxhYmVsV3JhcHBlci5kYXRhO1xuICAgICAgICB0aGlzLndpZHRoID0gaW1hZ2VXcmFwcGVyLnNpemUueDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBpbWFnZVdyYXBwZXIuc2l6ZS55O1xuICAgICAgICB0aGlzLnRyYWNlciA9IG5ldyBUcmFjZXIoaW1hZ2VXcmFwcGVyLCBsYWJlbFdyYXBwZXIpO1xuICAgIH1cblxuICAgIHJhc3Rlcml6ZShkZXB0aExhYmVsKSB7XG4gICAgICAgIGNvbnN0IGNvbG9yTWFwID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0MDA7IGkrKykge1xuICAgICAgICAgICAgY29sb3JNYXBbaV0gPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgY29sb3JNYXBbMF0gPSB0aGlzLmltYWdlRGF0YVswXTtcblxuICAgICAgICBsZXQgY2MgPSBudWxsO1xuICAgICAgICBsZXQgc2M7XG4gICAgICAgIGxldCBjb25uZWN0ZWRDb3VudCA9IDA7XG5cbiAgICAgICAgZm9yIChsZXQgY3kgPSAxOyBjeSA8IHRoaXMuaGVpZ2h0IC0gMTsgY3krKykge1xuICAgICAgICAgICAgbGV0IGxhYmVsSW5kZXggPSAwO1xuICAgICAgICAgICAgbGV0IGJjID0gY29sb3JNYXBbMF07XG5cbiAgICAgICAgICAgIGZvciAobGV0IGN4ID0gMTsgY3ggPCB0aGlzLndpZHRoIC0gMTsgY3grKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBvcyA9IGN5ICogdGhpcy53aWR0aCArIGN4O1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubGFiZWxEYXRhW3Bvc10gPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29sb3IgPSB0aGlzLmltYWdlRGF0YVtwb3NdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29sb3IgIT09IGJjKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFiZWxJbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxjID0gY29ubmVjdGVkQ291bnQgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yTWFwW2xjXSA9IGNvbG9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJjID0gY29sb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmVydGV4ID0gdGhpcy50cmFjZXIuY29udG91clRyYWNpbmcoY3ksIGN4LCBsYywgY29sb3IsIERJUi5PVVRTSURFX0VER0UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2ZXJ0ZXggIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29ubmVjdGVkQ291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxJbmRleCA9IGxjO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyOiBDT05UT1VSX0RJUi5DV19ESVIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleDogbGFiZWxJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0VmVydGV4OiB2ZXJ0ZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0UGVlcjogY2MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNpZGVDb250b3VyczogbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2MgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnByZXZpb3VzUGVlciA9IHA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MgPSBwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmVydGV4ID0gdGhpcy50cmFjZXIuY29udG91clRyYWNpbmcoY3ksIGN4LCBESVIuSU5TSURFX0VER0UsIGNvbG9yLCBsYWJlbEluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmVydGV4ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHAgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXI6IGRlcHRoTGFiZWwgPT09IDAgPyBDT05UT1VSX0RJUi5DQ1dfRElSIDogQ09OVE9VUl9ESVIuQ1dfRElSLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3RWZXJ0ZXg6IHZlcnRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4OiBkZXB0aExhYmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zaWRlQ29udG91cnM6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2MgPSBjYztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKChzYyAhPT0gbnVsbCkgJiYgc2MuaW5kZXggIT09IGxhYmVsSW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjID0gc2MubmV4dFBlZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNjICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwLm5leHRQZWVyID0gc2MuaW5zaWRlQ29udG91cnM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2MuaW5zaWRlQ29udG91cnMgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYy5pbnNpZGVDb250b3Vycy5wcmV2aW91c1BlZXIgPSBwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2MuaW5zaWRlQ29udG91cnMgPSBwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYWJlbERhdGFbcG9zXSA9IGxhYmVsSW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMubGFiZWxEYXRhW3Bvc10gPT09IERJUi5JTlNJREVfRURHRSkge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbEluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgYmMgPSB0aGlzLmltYWdlRGF0YVtwb3NdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5sYWJlbERhdGFbcG9zXSA9PT0gRElSLk9VVFNJREVfRURHRSkge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbEluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgYmMgPSBjb2xvck1hcFswXTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbEluZGV4ID0gdGhpcy5sYWJlbERhdGFbcG9zXTtcbiAgICAgICAgICAgICAgICAgICAgYmMgPSBjb2xvck1hcFtsYWJlbEluZGV4XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc2MgPSBjYztcbiAgICAgICAgd2hpbGUgKHNjICE9PSBudWxsKSB7XG4gICAgICAgICAgICBzYy5pbmRleCA9IGRlcHRoTGFiZWw7XG4gICAgICAgICAgICBzYyA9IHNjLm5leHRQZWVyO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjYyxcbiAgICAgICAgICAgIGNvdW50OiBjb25uZWN0ZWRDb3VudFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGRyYXdDb250b3VyKGNhbnZhcywgZmlyc3RDb250b3VyKSB7XG4gICAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICdyZWQnO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gJ3JlZCc7XG4gICAgICAgIGN0eC5saW5lV2lkdGggPSAxO1xuXG4gICAgICAgIGxldCBwcSA9IGZpcnN0Q29udG91cjtcbiAgICAgICAgbGV0IGlxID0gcHEgJiYgcHEuaW5zaWRlQ29udG91cnM7XG5cbiAgICAgICAgd2hpbGUgKHBxICE9PSBudWxsKSB7XG4gICAgICAgICAgICBsZXQgcSA9IGlxIHx8IHBxO1xuXG4gICAgICAgICAgICBpZiAoaXEgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpcSA9IGlxLm5leHRQZWVyO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcSA9IHBxLm5leHRQZWVyO1xuICAgICAgICAgICAgICAgIGlxID0gcHEgJiYgcHEuaW5zaWRlQ29udG91cnM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHN3aXRjaCAocS5kaXIpIHtcbiAgICAgICAgICAgICAgICBjYXNlIENPTlRPVVJfRElSLkNXX0RJUjoge1xuICAgICAgICAgICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSAncmVkJztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgQ09OVE9VUl9ESVIuQ0NXX0RJUjoge1xuICAgICAgICAgICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSAnYmx1ZSc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIENPTlRPVVJfRElSLlVOS05PV05fRElSOiB7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICdncmVlbic7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHAgPSBxLmZpcnN0VmVydGV4O1xuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4Lm1vdmVUbyhwLngsIHAueSk7XG5cbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICBwID0gcC5uZXh0O1xuICAgICAgICAgICAgICAgIGN0eC5saW5lVG8ocC54LCBwLnkpO1xuICAgICAgICAgICAgfSB3aGlsZSAocCAhPT0gcS5maXJzdFZlcnRleCk7XG5cbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBlcWVxZXEgKi9cbmZ1bmN0aW9uIFNrZWxldG9uaXplcihzdGRsaWIsIGZvcmVpZ24sIGJ1ZmZlcikge1xuICAgIFwidXNlIGFzbVwiO1xuXG4gICAgdmFyIGltYWdlcyA9IG5ldyBzdGRsaWIuVWludDhBcnJheShidWZmZXIpLFxuICAgICAgICBzaXplID0gZm9yZWlnbi5zaXplIHwgMCxcbiAgICAgICAgaW11bCA9IHN0ZGxpYi5NYXRoLmltdWw7XG5cbiAgICBmdW5jdGlvbiBlcm9kZShpbkltYWdlUHRyLCBvdXRJbWFnZVB0cikge1xuICAgICAgICBpbkltYWdlUHRyID0gaW5JbWFnZVB0ciB8IDA7XG4gICAgICAgIG91dEltYWdlUHRyID0gb3V0SW1hZ2VQdHIgfCAwO1xuXG4gICAgICAgIHZhciB2ID0gMCxcbiAgICAgICAgICAgIHUgPSAwLFxuICAgICAgICAgICAgc3VtID0gMCxcbiAgICAgICAgICAgIHlTdGFydDEgPSAwLFxuICAgICAgICAgICAgeVN0YXJ0MiA9IDAsXG4gICAgICAgICAgICB4U3RhcnQxID0gMCxcbiAgICAgICAgICAgIHhTdGFydDIgPSAwLFxuICAgICAgICAgICAgb2Zmc2V0ID0gMDtcblxuICAgICAgICBmb3IgKCB2ID0gMTsgKHYgfCAwKSA8ICgoc2l6ZSAtIDEpIHwgMCk7IHYgPSAodiArIDEpIHwgMCkge1xuICAgICAgICAgICAgb2Zmc2V0ID0gKG9mZnNldCArIHNpemUpIHwgMDtcbiAgICAgICAgICAgIGZvciAoIHUgPSAxOyAodSB8IDApIDwgKChzaXplIC0gMSkgfCAwKTsgdSA9ICh1ICsgMSkgfCAwKSB7XG4gICAgICAgICAgICAgICAgeVN0YXJ0MSA9IChvZmZzZXQgLSBzaXplKSB8IDA7XG4gICAgICAgICAgICAgICAgeVN0YXJ0MiA9IChvZmZzZXQgKyBzaXplKSB8IDA7XG4gICAgICAgICAgICAgICAgeFN0YXJ0MSA9ICh1IC0gMSkgfCAwO1xuICAgICAgICAgICAgICAgIHhTdGFydDIgPSAodSArIDEpIHwgMDtcbiAgICAgICAgICAgICAgICBzdW0gPSAoKGltYWdlc1soaW5JbWFnZVB0ciArIHlTdGFydDEgKyB4U3RhcnQxKSB8IDBdIHwgMClcbiAgICAgICAgICAgICAgICAgICAgKyAoaW1hZ2VzWyhpbkltYWdlUHRyICsgeVN0YXJ0MSArIHhTdGFydDIpIHwgMF0gfCAwKVxuICAgICAgICAgICAgICAgICAgICArIChpbWFnZXNbKGluSW1hZ2VQdHIgKyBvZmZzZXQgKyB1KSB8IDBdIHwgMClcbiAgICAgICAgICAgICAgICAgICAgKyAoaW1hZ2VzWyhpbkltYWdlUHRyICsgeVN0YXJ0MiArIHhTdGFydDEpIHwgMF0gfCAwKVxuICAgICAgICAgICAgICAgICAgICArIChpbWFnZXNbKGluSW1hZ2VQdHIgKyB5U3RhcnQyICsgeFN0YXJ0MikgfCAwXSB8IDApKSB8IDA7XG4gICAgICAgICAgICAgICAgaWYgKChzdW0gfCAwKSA9PSAoNSB8IDApKSB7XG4gICAgICAgICAgICAgICAgICAgIGltYWdlc1sob3V0SW1hZ2VQdHIgKyBvZmZzZXQgKyB1KSB8IDBdID0gMTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpbWFnZXNbKG91dEltYWdlUHRyICsgb2Zmc2V0ICsgdSkgfCAwXSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdWJ0cmFjdChhSW1hZ2VQdHIsIGJJbWFnZVB0ciwgb3V0SW1hZ2VQdHIpIHtcbiAgICAgICAgYUltYWdlUHRyID0gYUltYWdlUHRyIHwgMDtcbiAgICAgICAgYkltYWdlUHRyID0gYkltYWdlUHRyIHwgMDtcbiAgICAgICAgb3V0SW1hZ2VQdHIgPSBvdXRJbWFnZVB0ciB8IDA7XG5cbiAgICAgICAgdmFyIGxlbmd0aCA9IDA7XG5cbiAgICAgICAgbGVuZ3RoID0gaW11bChzaXplLCBzaXplKSB8IDA7XG5cbiAgICAgICAgd2hpbGUgKChsZW5ndGggfCAwKSA+IDApIHtcbiAgICAgICAgICAgIGxlbmd0aCA9IChsZW5ndGggLSAxKSB8IDA7XG4gICAgICAgICAgICBpbWFnZXNbKG91dEltYWdlUHRyICsgbGVuZ3RoKSB8IDBdID1cbiAgICAgICAgICAgICAgICAoKGltYWdlc1soYUltYWdlUHRyICsgbGVuZ3RoKSB8IDBdIHwgMCkgLSAoaW1hZ2VzWyhiSW1hZ2VQdHIgKyBsZW5ndGgpIHwgMF0gfCAwKSkgfCAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYml0d2lzZU9yKGFJbWFnZVB0ciwgYkltYWdlUHRyLCBvdXRJbWFnZVB0cikge1xuICAgICAgICBhSW1hZ2VQdHIgPSBhSW1hZ2VQdHIgfCAwO1xuICAgICAgICBiSW1hZ2VQdHIgPSBiSW1hZ2VQdHIgfCAwO1xuICAgICAgICBvdXRJbWFnZVB0ciA9IG91dEltYWdlUHRyIHwgMDtcblxuICAgICAgICB2YXIgbGVuZ3RoID0gMDtcblxuICAgICAgICBsZW5ndGggPSBpbXVsKHNpemUsIHNpemUpIHwgMDtcblxuICAgICAgICB3aGlsZSAoKGxlbmd0aCB8IDApID4gMCkge1xuICAgICAgICAgICAgbGVuZ3RoID0gKGxlbmd0aCAtIDEpIHwgMDtcbiAgICAgICAgICAgIGltYWdlc1sob3V0SW1hZ2VQdHIgKyBsZW5ndGgpIHwgMF0gPVxuICAgICAgICAgICAgICAgICgoaW1hZ2VzWyhhSW1hZ2VQdHIgKyBsZW5ndGgpIHwgMF0gfCAwKSB8IChpbWFnZXNbKGJJbWFnZVB0ciArIGxlbmd0aCkgfCAwXSB8IDApKSB8IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb3VudE5vblplcm8oaW1hZ2VQdHIpIHtcbiAgICAgICAgaW1hZ2VQdHIgPSBpbWFnZVB0ciB8IDA7XG5cbiAgICAgICAgdmFyIHN1bSA9IDAsXG4gICAgICAgICAgICBsZW5ndGggPSAwO1xuXG4gICAgICAgIGxlbmd0aCA9IGltdWwoc2l6ZSwgc2l6ZSkgfCAwO1xuXG4gICAgICAgIHdoaWxlICgobGVuZ3RoIHwgMCkgPiAwKSB7XG4gICAgICAgICAgICBsZW5ndGggPSAobGVuZ3RoIC0gMSkgfCAwO1xuICAgICAgICAgICAgc3VtID0gKChzdW0gfCAwKSArIChpbWFnZXNbKGltYWdlUHRyICsgbGVuZ3RoKSB8IDBdIHwgMCkpIHwgMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoc3VtIHwgMCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5pdChpbWFnZVB0ciwgdmFsdWUpIHtcbiAgICAgICAgaW1hZ2VQdHIgPSBpbWFnZVB0ciB8IDA7XG4gICAgICAgIHZhbHVlID0gdmFsdWUgfCAwO1xuXG4gICAgICAgIHZhciBsZW5ndGggPSAwO1xuXG4gICAgICAgIGxlbmd0aCA9IGltdWwoc2l6ZSwgc2l6ZSkgfCAwO1xuXG4gICAgICAgIHdoaWxlICgobGVuZ3RoIHwgMCkgPiAwKSB7XG4gICAgICAgICAgICBsZW5ndGggPSAobGVuZ3RoIC0gMSkgfCAwO1xuICAgICAgICAgICAgaW1hZ2VzWyhpbWFnZVB0ciArIGxlbmd0aCkgfCAwXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlsYXRlKGluSW1hZ2VQdHIsIG91dEltYWdlUHRyKSB7XG4gICAgICAgIGluSW1hZ2VQdHIgPSBpbkltYWdlUHRyIHwgMDtcbiAgICAgICAgb3V0SW1hZ2VQdHIgPSBvdXRJbWFnZVB0ciB8IDA7XG5cbiAgICAgICAgdmFyIHYgPSAwLFxuICAgICAgICAgICAgdSA9IDAsXG4gICAgICAgICAgICBzdW0gPSAwLFxuICAgICAgICAgICAgeVN0YXJ0MSA9IDAsXG4gICAgICAgICAgICB5U3RhcnQyID0gMCxcbiAgICAgICAgICAgIHhTdGFydDEgPSAwLFxuICAgICAgICAgICAgeFN0YXJ0MiA9IDAsXG4gICAgICAgICAgICBvZmZzZXQgPSAwO1xuXG4gICAgICAgIGZvciAoIHYgPSAxOyAodiB8IDApIDwgKChzaXplIC0gMSkgfCAwKTsgdiA9ICh2ICsgMSkgfCAwKSB7XG4gICAgICAgICAgICBvZmZzZXQgPSAob2Zmc2V0ICsgc2l6ZSkgfCAwO1xuICAgICAgICAgICAgZm9yICggdSA9IDE7ICh1IHwgMCkgPCAoKHNpemUgLSAxKSB8IDApOyB1ID0gKHUgKyAxKSB8IDApIHtcbiAgICAgICAgICAgICAgICB5U3RhcnQxID0gKG9mZnNldCAtIHNpemUpIHwgMDtcbiAgICAgICAgICAgICAgICB5U3RhcnQyID0gKG9mZnNldCArIHNpemUpIHwgMDtcbiAgICAgICAgICAgICAgICB4U3RhcnQxID0gKHUgLSAxKSB8IDA7XG4gICAgICAgICAgICAgICAgeFN0YXJ0MiA9ICh1ICsgMSkgfCAwO1xuICAgICAgICAgICAgICAgIHN1bSA9ICgoaW1hZ2VzWyhpbkltYWdlUHRyICsgeVN0YXJ0MSArIHhTdGFydDEpIHwgMF0gfCAwKVxuICAgICAgICAgICAgICAgICAgICArIChpbWFnZXNbKGluSW1hZ2VQdHIgKyB5U3RhcnQxICsgeFN0YXJ0MikgfCAwXSB8IDApXG4gICAgICAgICAgICAgICAgICAgICsgKGltYWdlc1soaW5JbWFnZVB0ciArIG9mZnNldCArIHUpIHwgMF0gfCAwKVxuICAgICAgICAgICAgICAgICAgICArIChpbWFnZXNbKGluSW1hZ2VQdHIgKyB5U3RhcnQyICsgeFN0YXJ0MSkgfCAwXSB8IDApXG4gICAgICAgICAgICAgICAgICAgICsgKGltYWdlc1soaW5JbWFnZVB0ciArIHlTdGFydDIgKyB4U3RhcnQyKSB8IDBdIHwgMCkpIHwgMDtcbiAgICAgICAgICAgICAgICBpZiAoKHN1bSB8IDApID4gKDAgfCAwKSkge1xuICAgICAgICAgICAgICAgICAgICBpbWFnZXNbKG91dEltYWdlUHRyICsgb2Zmc2V0ICsgdSkgfCAwXSA9IDE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VzWyhvdXRJbWFnZVB0ciArIG9mZnNldCArIHUpIHwgMF0gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWVtY3B5KHNyY0ltYWdlUHRyLCBkc3RJbWFnZVB0cikge1xuICAgICAgICBzcmNJbWFnZVB0ciA9IHNyY0ltYWdlUHRyIHwgMDtcbiAgICAgICAgZHN0SW1hZ2VQdHIgPSBkc3RJbWFnZVB0ciB8IDA7XG5cbiAgICAgICAgdmFyIGxlbmd0aCA9IDA7XG5cbiAgICAgICAgbGVuZ3RoID0gaW11bChzaXplLCBzaXplKSB8IDA7XG5cbiAgICAgICAgd2hpbGUgKChsZW5ndGggfCAwKSA+IDApIHtcbiAgICAgICAgICAgIGxlbmd0aCA9IChsZW5ndGggLSAxKSB8IDA7XG4gICAgICAgICAgICBpbWFnZXNbKGRzdEltYWdlUHRyICsgbGVuZ3RoKSB8IDBdID0gKGltYWdlc1soc3JjSW1hZ2VQdHIgKyBsZW5ndGgpIHwgMF0gfCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHplcm9Cb3JkZXIoaW1hZ2VQdHIpIHtcbiAgICAgICAgaW1hZ2VQdHIgPSBpbWFnZVB0ciB8IDA7XG5cbiAgICAgICAgdmFyIHggPSAwLFxuICAgICAgICAgICAgeSA9IDA7XG5cbiAgICAgICAgZm9yICggeCA9IDA7ICh4IHwgMCkgPCAoKHNpemUgLSAxKSB8IDApOyB4ID0gKHggKyAxKSB8IDApIHtcbiAgICAgICAgICAgIGltYWdlc1soaW1hZ2VQdHIgKyB4KSB8IDBdID0gMDtcbiAgICAgICAgICAgIGltYWdlc1soaW1hZ2VQdHIgKyB5KSB8IDBdID0gMDtcbiAgICAgICAgICAgIHkgPSAoKHkgKyBzaXplKSAtIDEpIHwgMDtcbiAgICAgICAgICAgIGltYWdlc1soaW1hZ2VQdHIgKyB5KSB8IDBdID0gMDtcbiAgICAgICAgICAgIHkgPSAoeSArIDEpIHwgMDtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKCB4ID0gMDsgKHggfCAwKSA8IChzaXplIHwgMCk7IHggPSAoeCArIDEpIHwgMCkge1xuICAgICAgICAgICAgaW1hZ2VzWyhpbWFnZVB0ciArIHkpIHwgMF0gPSAwO1xuICAgICAgICAgICAgeSA9ICh5ICsgMSkgfCAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2tlbGV0b25pemUoKSB7XG4gICAgICAgIHZhciBzdWJJbWFnZVB0ciA9IDAsXG4gICAgICAgICAgICBlcm9kZWRJbWFnZVB0ciA9IDAsXG4gICAgICAgICAgICB0ZW1wSW1hZ2VQdHIgPSAwLFxuICAgICAgICAgICAgc2tlbEltYWdlUHRyID0gMCxcbiAgICAgICAgICAgIHN1bSA9IDAsXG4gICAgICAgICAgICBkb25lID0gMDtcblxuICAgICAgICBlcm9kZWRJbWFnZVB0ciA9IGltdWwoc2l6ZSwgc2l6ZSkgfCAwO1xuICAgICAgICB0ZW1wSW1hZ2VQdHIgPSAoZXJvZGVkSW1hZ2VQdHIgKyBlcm9kZWRJbWFnZVB0cikgfCAwO1xuICAgICAgICBza2VsSW1hZ2VQdHIgPSAodGVtcEltYWdlUHRyICsgZXJvZGVkSW1hZ2VQdHIpIHwgMDtcblxuICAgICAgICAvLyBpbml0IHNrZWwtaW1hZ2VcbiAgICAgICAgaW5pdChza2VsSW1hZ2VQdHIsIDApO1xuICAgICAgICB6ZXJvQm9yZGVyKHN1YkltYWdlUHRyKTtcblxuICAgICAgICBkbyB7XG4gICAgICAgICAgICBlcm9kZShzdWJJbWFnZVB0ciwgZXJvZGVkSW1hZ2VQdHIpO1xuICAgICAgICAgICAgZGlsYXRlKGVyb2RlZEltYWdlUHRyLCB0ZW1wSW1hZ2VQdHIpO1xuICAgICAgICAgICAgc3VidHJhY3Qoc3ViSW1hZ2VQdHIsIHRlbXBJbWFnZVB0ciwgdGVtcEltYWdlUHRyKTtcbiAgICAgICAgICAgIGJpdHdpc2VPcihza2VsSW1hZ2VQdHIsIHRlbXBJbWFnZVB0ciwgc2tlbEltYWdlUHRyKTtcbiAgICAgICAgICAgIG1lbWNweShlcm9kZWRJbWFnZVB0ciwgc3ViSW1hZ2VQdHIpO1xuICAgICAgICAgICAgc3VtID0gY291bnROb25aZXJvKHN1YkltYWdlUHRyKSB8IDA7XG4gICAgICAgICAgICBkb25lID0gKChzdW0gfCAwKSA9PSAwIHwgMCk7XG4gICAgICAgIH0gd2hpbGUgKCFkb25lKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2tlbGV0b25pemU6IHNrZWxldG9uaXplXG4gICAgfTtcbn1cbmV4cG9ydCBkZWZhdWx0IFNrZWxldG9uaXplcjtcbi8qIGVzbGludC1lbmFibGUgZXFlcWVxICovXG4iLCIvKipcbiAqIEBib3Jyb3dzIGh0dHA6Ly93d3cuY29kZXByb2plY3QuY29tL1RpcHMvNDA3MTcyL0Nvbm5lY3RlZC1Db21wb25lbnQtTGFiZWxpbmctYW5kLVZlY3Rvcml6YXRpb25cbiAqL1xuXG5leHBvcnQgY29uc3QgU2VhcmNoRGlyZWN0aW9ucyA9IFtbMCwgMV0sIFsxLCAxXSwgWzEsIDBdLCBbMSwgLTFdLCBbMCwgLTFdLCBbLTEsIC0xXSwgWy0xLCAwXSwgWy0xLCAxXV07XG5cbmV4cG9ydCBjbGFzcyBUcmFjZXIge1xuICAgIGNvbnN0cnVjdG9yKGltYWdlV3JhcHBlciwgbGFiZWxXcmFwcGVyKSB7XG4gICAgICAgIHRoaXMuaW1hZ2VEYXRhID0gaW1hZ2VXcmFwcGVyLmRhdGE7XG4gICAgICAgIHRoaXMubGFiZWxEYXRhID0gbGFiZWxXcmFwcGVyLmRhdGE7XG4gICAgICAgIHRoaXMud2lkdGggPSBpbWFnZVdyYXBwZXIuc2l6ZS54O1xuICAgIH1cblxuICAgIHRyYWNlKGN1cnJlbnQsIGNvbG9yLCBsYWJlbCwgZWRnZUxhYmVsKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCB5ID0gY3VycmVudC5jeSArIFNlYXJjaERpcmVjdGlvbnNbY3VycmVudC5kaXJdWzBdO1xuICAgICAgICAgICAgY29uc3QgeCA9IGN1cnJlbnQuY3ggKyBTZWFyY2hEaXJlY3Rpb25zW2N1cnJlbnQuZGlyXVsxXTtcbiAgICAgICAgICAgIGNvbnN0IHBvcyA9IHkgKiB0aGlzLndpZHRoICsgeDtcblxuICAgICAgICAgICAgaWYgKCh0aGlzLmltYWdlRGF0YVtwb3NdID09PSBjb2xvcikgJiYgKCh0aGlzLmxhYmVsRGF0YVtwb3NdID09PSAwKSB8fCAodGhpcy5sYWJlbERhdGFbcG9zXSA9PT0gbGFiZWwpKSkge1xuICAgICAgICAgICAgICAgIHRoaXMubGFiZWxEYXRhW3Bvc10gPSBsYWJlbDtcbiAgICAgICAgICAgICAgICBjdXJyZW50LmN5ID0geTtcbiAgICAgICAgICAgICAgICBjdXJyZW50LmN4ID0geDtcblxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sYWJlbERhdGFbcG9zXSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhYmVsRGF0YVtwb3NdID0gZWRnZUxhYmVsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjdXJyZW50LmRpciA9IChjdXJyZW50LmRpciArIDEpICUgODtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29udG91clRyYWNpbmcoc3ksIHN4LCBsYWJlbCwgY29sb3IsIGVkZ2VMYWJlbCkge1xuICAgICAgICBsZXQgRnYgPSBudWxsO1xuICAgICAgICBjb25zdCBjdXJyZW50ID0ge1xuICAgICAgICAgICAgY3g6IHN4LFxuICAgICAgICAgICAgY3k6IHN5LFxuICAgICAgICAgICAgZGlyOiAwXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHRoaXMudHJhY2UoY3VycmVudCwgY29sb3IsIGxhYmVsLCBlZGdlTGFiZWwpKSB7XG4gICAgICAgICAgICBGdiA9IHtcbiAgICAgICAgICAgICAgICB4OiBzeCxcbiAgICAgICAgICAgICAgICB5OiBzeSxcbiAgICAgICAgICAgICAgICBkaXI6IGN1cnJlbnQuZGlyLFxuICAgICAgICAgICAgICAgIG5leHQ6IG51bGwsXG4gICAgICAgICAgICAgICAgcHJldjogbnVsbFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGxldCBDdiA9IEZ2O1xuICAgICAgICAgICAgbGV0IGxkaXIgPSBjdXJyZW50LmRpcjtcbiAgICAgICAgICAgIGxldCBQID0ge1xuICAgICAgICAgICAgICAgIHg6IGN1cnJlbnQuY3gsXG4gICAgICAgICAgICAgICAgeTogY3VycmVudC5jeSxcbiAgICAgICAgICAgICAgICBkaXI6IDAsXG4gICAgICAgICAgICAgICAgbmV4dDogbnVsbCxcbiAgICAgICAgICAgICAgICBwcmV2OiBDdlxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIEN2Lm5leHQgPSBQO1xuICAgICAgICAgICAgQ3YgPSBQO1xuXG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgY3VycmVudC5kaXIgPSAoY3VycmVudC5kaXIgKyA2KSAlIDg7XG4gICAgICAgICAgICAgICAgdGhpcy50cmFjZShjdXJyZW50LCBjb2xvciwgbGFiZWwsIGVkZ2VMYWJlbCk7XG4gICAgICAgICAgICAgICAgaWYgKGxkaXIgIT09IGN1cnJlbnQuZGlyKSB7XG4gICAgICAgICAgICAgICAgICAgIEN2LmRpciA9IGN1cnJlbnQuZGlyO1xuICAgICAgICAgICAgICAgICAgICBQID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgeDogY3VycmVudC5jeCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IGN1cnJlbnQuY3ksXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXI6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0OiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJldjogQ3ZcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgQ3YubmV4dCA9IFA7XG4gICAgICAgICAgICAgICAgICAgIEN2ID0gUDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBDdi5kaXIgPSBsZGlyO1xuICAgICAgICAgICAgICAgICAgICBDdi54ID0gY3VycmVudC5jeDtcbiAgICAgICAgICAgICAgICAgICAgQ3YueSA9IGN1cnJlbnQuY3k7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxkaXIgPSBjdXJyZW50LmRpcjtcbiAgICAgICAgICAgIH0gd2hpbGUgKGN1cnJlbnQuY3ggIT09IHN4IHx8IGN1cnJlbnQuY3kgIT09IHN5KTtcbiAgICAgICAgICAgIEZ2LnByZXYgPSBDdi5wcmV2O1xuICAgICAgICAgICAgQ3YucHJldi5uZXh0ID0gRnY7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEZ2O1xuICAgIH1cbn1cbiIsImltcG9ydCAnLi9jb21tb24vdHlwZWRlZnMnO1xuaW1wb3J0IHsgUmVzdWx0Q29sbGVjdG9yIH0gZnJvbSAnLi9hbmFseXRpY3MvcmVzdWx0X2NvbGxlY3Rvcic7XG5pbXBvcnQgRXZlbnRzIGZyb20gJy4vY29tbW9uL2V2ZW50cyc7XG5pbXBvcnQgeyBJbWFnZURlYnVnIH0gZnJvbSAnLi9jb21tb24vaW1hZ2VfZGVidWcnO1xuaW1wb3J0IHsgSW1hZ2VXcmFwcGVyIH0gZnJvbSAnLi9jb21tb24vaW1hZ2Vfd3JhcHBlcic7XG5pbXBvcnQgeyBtZXJnZSB9IGZyb20gJy4vY29tbW9uL21lcmdlJztcbmltcG9ydCBDb25maWcgZnJvbSAnLi9jb25maWcvY29uZmlnJztcbmltcG9ydCB7IEJhcmNvZGVEZWNvZGVyIH0gZnJvbSAnLi9kZWNvZGVyL2JhcmNvZGVfZGVjb2Rlcic7XG5pbXBvcnQgQ2FtZXJhQWNjZXNzIGZyb20gJy4vaW5wdXQvY2FtZXJhX2FjY2Vzcyc7XG5pbXBvcnQgQmFyY29kZUxvY2F0b3IgZnJvbSAnLi9sb2NhdG9yL2JhcmNvZGVfbG9jYXRvcic7XG5pbXBvcnQgeyBGcmFtZUdyYWJiZXIgfSBmcm9tICdJbnB1dC9mcmFtZV9ncmFiYmVyJztcbmltcG9ydCB7IElucHV0U3RyZWFtIH0gZnJvbSAnSW5wdXQvaW5wdXRfc3RyZWFtJztcblxubGV0IF9pbnB1dFN0cmVhbTtcbmxldCBfZnJhbWVncmFiYmVyO1xubGV0IF9zdG9wcGVkO1xuY29uc3QgX2NhbnZhc0NvbnRhaW5lciA9IHtcbiAgICBjdHg6IHtcbiAgICAgICAgaW1hZ2U6IG51bGwsXG4gICAgICAgIG92ZXJsYXk6IG51bGxcbiAgICB9LFxuICAgIGRvbToge1xuICAgICAgICBpbWFnZTogbnVsbCxcbiAgICAgICAgb3ZlcmxheTogbnVsbFxuICAgIH1cbn07XG5sZXQgX2lucHV0SW1hZ2VXcmFwcGVyO1xubGV0IF9ib3hTaXplO1xubGV0IF9kZWNvZGVyO1xubGV0IF93b3JrZXJQb29sID0gW107XG5sZXQgX29uVUlUaHJlYWQgPSB0cnVlO1xubGV0IF9yZXN1bHRDb2xsZWN0b3I7XG5sZXQgX2NvbmZpZyA9IHt9O1xuXG5mdW5jdGlvbiBpbml0aWFsaXplRGF0YShpbWFnZVdyYXBwZXIpIHtcbiAgICBpbml0QnVmZmVycyhpbWFnZVdyYXBwZXIpO1xuICAgIF9kZWNvZGVyID0gbmV3IEJhcmNvZGVEZWNvZGVyKF9jb25maWcuZGVjb2RlciwgX2lucHV0SW1hZ2VXcmFwcGVyKTtcbn1cblxuZnVuY3Rpb24gaW5pdElucHV0U3RyZWFtKGNhbGxiYWNrKSB7XG4gICAgbGV0IHZpZGVvO1xuICAgIGlmIChfY29uZmlnLmlucHV0U3RyZWFtLnR5cGUgPT09ICdWaWRlb1N0cmVhbScpIHtcbiAgICAgICAgdmlkZW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2aWRlbycpO1xuICAgICAgICBfaW5wdXRTdHJlYW0gPSBJbnB1dFN0cmVhbS5jcmVhdGVWaWRlb1N0cmVhbSh2aWRlbyk7XG4gICAgfSBlbHNlIGlmIChfY29uZmlnLmlucHV0U3RyZWFtLnR5cGUgPT09ICdJbWFnZVN0cmVhbScpIHtcbiAgICAgICAgX2lucHV0U3RyZWFtID0gSW5wdXRTdHJlYW0uY3JlYXRlSW1hZ2VTdHJlYW0oKTtcbiAgICB9IGVsc2UgaWYgKF9jb25maWcuaW5wdXRTdHJlYW0udHlwZSA9PT0gJ0xpdmVTdHJlYW0nKSB7XG4gICAgICAgIGNvbnN0IHZpZXdwb3J0ID0gZ2V0Vmlld1BvcnQoKTtcbiAgICAgICAgaWYgKHZpZXdwb3J0KSB7XG4gICAgICAgICAgICB2aWRlbyA9IHZpZXdwb3J0LnF1ZXJ5U2VsZWN0b3IoJ3ZpZGVvJyk7XG4gICAgICAgICAgICBpZiAoIXZpZGVvKSB7XG4gICAgICAgICAgICAgICAgdmlkZW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2aWRlbycpO1xuICAgICAgICAgICAgICAgIHZpZXdwb3J0LmFwcGVuZENoaWxkKHZpZGVvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBfaW5wdXRTdHJlYW0gPSBJbnB1dFN0cmVhbS5jcmVhdGVMaXZlU3RyZWFtKHZpZGVvKTtcbiAgICAgICAgQ2FtZXJhQWNjZXNzLnJlcXVlc3QodmlkZW8sIF9jb25maWcuaW5wdXRTdHJlYW0uY29uc3RyYWludHMpXG4gICAgICAgICAgICAudGhlbigoKSA9PiBfaW5wdXRTdHJlYW0udHJpZ2dlcignY2FucmVjb3JkJyksIGVyciA9PiBjYWxsYmFjayhlcnIpKTtcbiAgICB9XG5cbiAgICBfaW5wdXRTdHJlYW0uc2V0QXR0cmlidXRlKCdwcmVsb2FkJywgJ2F1dG8nKTtcbiAgICBfaW5wdXRTdHJlYW0uc2V0SW5wdXRTdHJlYW0oX2NvbmZpZy5pbnB1dFN0cmVhbSk7XG4gICAgX2lucHV0U3RyZWFtLmFkZEV2ZW50TGlzdGVuZXIoJ2NhbnJlY29yZCcsIGNhblJlY29yZC5iaW5kKHVuZGVmaW5lZCwgY2FsbGJhY2spKTtcbn1cblxuZnVuY3Rpb24gZ2V0Vmlld1BvcnQoKSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gX2NvbmZpZy5pbnB1dFN0cmVhbS50YXJnZXQ7XG4gICAgLy8gQ2hlY2sgaWYgdGFyZ2V0IGlzIGFscmVhZHkgYSBET00gZWxlbWVudFxuICAgIGlmICh0YXJnZXQgJiYgdGFyZ2V0Lm5vZGVOYW1lICYmIHRhcmdldC5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFVzZSAnI2ludGVyYWN0aXZlLnZpZXdwb3J0JyBhcyBhIGZhbGxiYWNrIHNlbGVjdG9yIChiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSlcbiAgICAgICAgY29uc3Qgc2VsZWN0b3IgPSB0eXBlb2YgdGFyZ2V0ID09PSAnc3RyaW5nJyA/IHRhcmdldCA6ICcjaW50ZXJhY3RpdmUudmlld3BvcnQnO1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjYW5SZWNvcmQoY2IpIHtcbiAgICBCYXJjb2RlTG9jYXRvci5jaGVja0ltYWdlQ29uc3RyYWludHMoX2lucHV0U3RyZWFtLCBfY29uZmlnLmxvY2F0b3IpO1xuICAgIGluaXRDYW52YXMoX2NvbmZpZyk7XG4gICAgX2ZyYW1lZ3JhYmJlciA9IG5ldyBGcmFtZUdyYWJiZXIoX2lucHV0U3RyZWFtLCBfY2FudmFzQ29udGFpbmVyLmRvbS5pbWFnZSk7XG5cbiAgICBhZGp1c3RXb3JrZXJQb29sKF9jb25maWcubnVtT2ZXb3JrZXJzLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChfY29uZmlnLm51bU9mV29ya2VycyA9PT0gMCkge1xuICAgICAgICAgICAgaW5pdGlhbGl6ZURhdGEoKTtcbiAgICAgICAgfVxuICAgICAgICByZWFkeShjYik7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlYWR5KGNiKSB7XG4gICAgX2lucHV0U3RyZWFtLnBsYXkoKTtcbiAgICBjYigpO1xufVxuXG5mdW5jdGlvbiBpbml0Q2FudmFzKCkge1xuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnN0ICR2aWV3cG9ydCA9IGdldFZpZXdQb3J0KCk7XG4gICAgICAgIF9jYW52YXNDb250YWluZXIuZG9tLmltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FudmFzLmltZ0J1ZmZlcicpO1xuICAgICAgICBpZiAoIV9jYW52YXNDb250YWluZXIuZG9tLmltYWdlKSB7XG4gICAgICAgICAgICBfY2FudmFzQ29udGFpbmVyLmRvbS5pbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICAgICAgX2NhbnZhc0NvbnRhaW5lci5kb20uaW1hZ2UuY2xhc3NOYW1lID0gJ2ltZ0J1ZmZlcic7XG4gICAgICAgICAgICBpZiAoJHZpZXdwb3J0ICYmIF9jb25maWcuaW5wdXRTdHJlYW0udHlwZSA9PT0gJ0ltYWdlU3RyZWFtJykge1xuICAgICAgICAgICAgICAgICR2aWV3cG9ydC5hcHBlbmRDaGlsZChfY2FudmFzQ29udGFpbmVyLmRvbS5pbWFnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgX2NhbnZhc0NvbnRhaW5lci5jdHguaW1hZ2UgPSBfY2FudmFzQ29udGFpbmVyLmRvbS5pbWFnZS5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICBfY2FudmFzQ29udGFpbmVyLmRvbS5pbWFnZS53aWR0aCA9IF9pbnB1dFN0cmVhbS5nZXRDYW52YXNXaWR0aCgpO1xuICAgICAgICBfY2FudmFzQ29udGFpbmVyLmRvbS5pbWFnZS5oZWlnaHQgPSBfaW5wdXRTdHJlYW0uZ2V0Q2FudmFzSGVpZ2h0KCk7XG5cbiAgICAgICAgX2NhbnZhc0NvbnRhaW5lci5kb20ub3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbnZhcy5kcmF3aW5nQnVmZmVyJyk7XG4gICAgICAgIGlmICghX2NhbnZhc0NvbnRhaW5lci5kb20ub3ZlcmxheSkge1xuICAgICAgICAgICAgX2NhbnZhc0NvbnRhaW5lci5kb20ub3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICAgICAgX2NhbnZhc0NvbnRhaW5lci5kb20ub3ZlcmxheS5jbGFzc05hbWUgPSAnZHJhd2luZ0J1ZmZlcic7XG4gICAgICAgICAgICBpZiAoJHZpZXdwb3J0KSB7XG4gICAgICAgICAgICAgICAgJHZpZXdwb3J0LmFwcGVuZENoaWxkKF9jYW52YXNDb250YWluZXIuZG9tLm92ZXJsYXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgY2xlYXJGaXggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuICAgICAgICAgICAgY2xlYXJGaXguc2V0QXR0cmlidXRlKCdjbGVhcicsICdhbGwnKTtcbiAgICAgICAgICAgIGlmICgkdmlld3BvcnQpIHtcbiAgICAgICAgICAgICAgICAkdmlld3BvcnQuYXBwZW5kQ2hpbGQoY2xlYXJGaXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIF9jYW52YXNDb250YWluZXIuY3R4Lm92ZXJsYXkgPSBfY2FudmFzQ29udGFpbmVyLmRvbS5vdmVybGF5LmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIF9jYW52YXNDb250YWluZXIuZG9tLm92ZXJsYXkud2lkdGggPSBfaW5wdXRTdHJlYW0uZ2V0Q2FudmFzV2lkdGgoKTtcbiAgICAgICAgX2NhbnZhc0NvbnRhaW5lci5kb20ub3ZlcmxheS5oZWlnaHQgPSBfaW5wdXRTdHJlYW0uZ2V0Q2FudmFzSGVpZ2h0KCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBpbml0QnVmZmVycyhpbWFnZVdyYXBwZXIpIHtcbiAgICBpZiAoaW1hZ2VXcmFwcGVyKSB7XG4gICAgICAgIF9pbnB1dEltYWdlV3JhcHBlciA9IGltYWdlV3JhcHBlcjtcbiAgICB9IGVsc2Uge1xuICAgICAgICBfaW5wdXRJbWFnZVdyYXBwZXIgPSBuZXcgSW1hZ2VXcmFwcGVyKHtcbiAgICAgICAgICAgIHg6IF9pbnB1dFN0cmVhbS5nZXRXaWR0aCgpLFxuICAgICAgICAgICAgeTogX2lucHV0U3RyZWFtLmdldEhlaWdodCgpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChFTlYuZGV2ZWxvcG1lbnQpIHtcbiAgICAgICAgY29uc29sZS5sb2coX2lucHV0SW1hZ2VXcmFwcGVyLnNpemUpO1xuICAgIH1cbiAgICBfYm94U2l6ZSA9IFtcbiAgICAgICAgeyB4OiAwLCB5OiAwIH0sXG4gICAgICAgIHsgeDogMCwgeTogX2lucHV0SW1hZ2VXcmFwcGVyLnNpemUueSB9LFxuICAgICAgICB7IHg6IF9pbnB1dEltYWdlV3JhcHBlci5zaXplLngsIHk6IF9pbnB1dEltYWdlV3JhcHBlci5zaXplLnkgfSxcbiAgICAgICAgeyB4OiBfaW5wdXRJbWFnZVdyYXBwZXIuc2l6ZS54LCB5OiAwIH1cbiAgICBdO1xuICAgIEJhcmNvZGVMb2NhdG9yLmluaXQoX2lucHV0SW1hZ2VXcmFwcGVyLCBfY29uZmlnLmxvY2F0b3IpO1xufVxuXG5mdW5jdGlvbiBnZXRCb3VuZGluZ0JveGVzKCkge1xuICAgIGlmIChfY29uZmlnLmxvY2F0ZSkge1xuICAgICAgICByZXR1cm4gQmFyY29kZUxvY2F0b3IubG9jYXRlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFtbXG4gICAgICAgICAgICBfYm94U2l6ZVswXSxcbiAgICAgICAgICAgIF9ib3hTaXplWzFdLFxuICAgICAgICAgICAgX2JveFNpemVbMl0sXG4gICAgICAgICAgICBfYm94U2l6ZVszXVxuICAgICAgICBdXTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybShwb2x5Z29uLCBvZmZzZXQpIHtcbiAgICBwb2x5Z29uLmZvckVhY2godmVydGV4ID0+IHtcbiAgICAgICAgdmVydGV4LnggKz0gb2Zmc2V0Lng7XG4gICAgICAgIHZlcnRleC55ICs9IG9mZnNldC55O1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm1SZXN1bHQocmVzdWx0LCBvZmZzZXQpIHtcbiAgICBpZiAocmVzdWx0LmJhcmNvZGVzKSB7XG4gICAgICAgIHJlc3VsdC5iYXJjb2Rlcy5mb3JFYWNoKGJhcmNvZGUgPT4gdHJhbnNmb3JtUmVzdWx0KGJhcmNvZGUsIG9mZnNldCkpO1xuICAgIH1cblxuICAgIGlmIChyZXN1bHQubGluZSkge1xuICAgICAgICB0cmFuc2Zvcm0ocmVzdWx0LmxpbmUsIG9mZnNldCk7XG4gICAgfVxuXG4gICAgaWYgKHJlc3VsdC5ib3gpIHtcbiAgICAgICAgdHJhbnNmb3JtKHJlc3VsdC5ib3gsIG9mZnNldCk7XG4gICAgfVxuXG4gICAgaWYgKHJlc3VsdC5ib3hlcykge1xuICAgICAgICByZXN1bHQuYm94ZXMuZm9yRWFjaChib3ggPT4gdHJhbnNmb3JtKGJveCwgb2Zmc2V0KSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBhZGRSZXN1bHQocmVzdWx0LCBpbWFnZURhdGEsIGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQpIHtcbiAgICBpZiAoIWltYWdlRGF0YSB8fCAhX3Jlc3VsdENvbGxlY3Rvcikge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHJlc3VsdC5iYXJjb2Rlcykge1xuICAgICAgICByZXN1bHQuYmFyY29kZXMuZmlsdGVyKGJhcmNvZGUgPT4gYmFyY29kZS5jb2RlUmVzdWx0KS5mb3JFYWNoKGJhcmNvZGUgPT4gYWRkUmVzdWx0KGJhcmNvZGUsIGltYWdlRGF0YSwgY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCkpO1xuICAgIH0gZWxzZSBpZiAocmVzdWx0LmNvZGVSZXN1bHQpIHtcbiAgICAgICAgX3Jlc3VsdENvbGxlY3Rvci5hZGRSZXN1bHQoaW1hZ2VEYXRhLCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0LCByZXN1bHQuY29kZVJlc3VsdCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBoYXNDb2RlUmVzdWx0KHJlc3VsdCkge1xuICAgIHJldHVybiByZXN1bHQgJiYgKCEhcmVzdWx0LmNvZGVSZXN1bHQgfHwgcmVzdWx0LmJhcmNvZGVzICYmIHJlc3VsdC5iYXJjb2Rlcy5zb21lKGJhcmNvZGUgPT4gYmFyY29kZS5jb2RlUmVzdWx0KSk7XG59XG5cbmZ1bmN0aW9uIHB1Ymxpc2hSZXN1bHQocmVzdWx0LCBpbWFnZURhdGEpIHtcbiAgICBsZXQgcmVzdWx0VG9QdWJsaXNoID0gcmVzdWx0O1xuXG4gICAgaWYgKHJlc3VsdCAmJiBfb25VSVRocmVhZCkge1xuICAgICAgICBjb25zdCBvZmZzZXQgPSBfaW5wdXRTdHJlYW0uZ2V0VG9wUmlnaHQoKTtcblxuICAgICAgICBpZiAob2Zmc2V0LnggIT09IDAgfHwgb2Zmc2V0LnkgIT09IDApIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybVJlc3VsdChyZXN1bHQsIG9mZnNldCk7XG4gICAgICAgIH1cblxuICAgICAgICBhZGRSZXN1bHQocmVzdWx0LCBpbWFnZURhdGEsIF9pbnB1dFN0cmVhbS5nZXRDYW52YXNXaWR0aCgpLCBfaW5wdXRTdHJlYW0uZ2V0Q2FudmFzSGVpZ2h0KCkpO1xuICAgICAgICByZXN1bHRUb1B1Ymxpc2ggPSByZXN1bHQuYmFyY29kZXMgfHwgcmVzdWx0O1xuICAgIH1cblxuICAgIEV2ZW50cy5wdWJsaXNoKCdwcm9jZXNzZWQnLCByZXN1bHRUb1B1Ymxpc2gpO1xuICAgIGlmIChoYXNDb2RlUmVzdWx0KHJlc3VsdCkpIHtcbiAgICAgICAgRXZlbnRzLnB1Ymxpc2goJ2RldGVjdGVkJywgcmVzdWx0VG9QdWJsaXNoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGxvY2F0ZUFuZERlY29kZSgpIHtcbiAgICBjb25zdCBib3hlcyA9IGdldEJvdW5kaW5nQm94ZXMoKTtcblxuICAgIGlmIChib3hlcykge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBfZGVjb2Rlci5kZWNvZGVGcm9tQm91bmRpbmdCb3hlcyhib3hlcykgfHwge307XG4gICAgICAgIHJlc3VsdC5ib3hlcyA9IGJveGVzO1xuICAgICAgICBwdWJsaXNoUmVzdWx0KHJlc3VsdCwgX2lucHV0SW1hZ2VXcmFwcGVyLmRhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHB1Ymxpc2hSZXN1bHQoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICBsZXQgYXZhaWxhYmxlV29ya2VyO1xuXG4gICAgaWYgKF9vblVJVGhyZWFkKSB7XG4gICAgICAgIGlmIChfd29ya2VyUG9vbC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBhdmFpbGFibGVXb3JrZXIgPSBfd29ya2VyUG9vbC5maW5kKHdvcmtlclRocmVhZCA9PiAhd29ya2VyVGhyZWFkLmJ1c3kpO1xuICAgICAgICAgICAgaWYgKGF2YWlsYWJsZVdvcmtlcikge1xuICAgICAgICAgICAgICAgIF9mcmFtZWdyYWJiZXIuYXR0YWNoRGF0YShhdmFpbGFibGVXb3JrZXIuaW1hZ2VEYXRhKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuOyAvLyBhbGwgd29ya2VycyBhcmUgYnVzeVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX2ZyYW1lZ3JhYmJlci5hdHRhY2hEYXRhKF9pbnB1dEltYWdlV3JhcHBlci5kYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoX2ZyYW1lZ3JhYmJlci5ncmFiKCkpIHtcbiAgICAgICAgICAgIGlmIChhdmFpbGFibGVXb3JrZXIpIHtcbiAgICAgICAgICAgICAgICBhdmFpbGFibGVXb3JrZXIuYnVzeSA9IHRydWU7XG4gICAgICAgICAgICAgICAgYXZhaWxhYmxlV29ya2VyLndvcmtlci5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgICAgIGNtZDogJ3Byb2Nlc3MnLFxuICAgICAgICAgICAgICAgICAgICBpbWFnZURhdGE6IGF2YWlsYWJsZVdvcmtlci5pbWFnZURhdGFcbiAgICAgICAgICAgICAgICB9LCBbYXZhaWxhYmxlV29ya2VyLmltYWdlRGF0YS5idWZmZXJdKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbG9jYXRlQW5kRGVjb2RlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBsb2NhdGVBbmREZWNvZGUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHN0YXJ0Q29udGludW91c1VwZGF0ZSgpIHtcbiAgICBjb25zdCBkZWxheSA9IDEwMDAgLyAoX2NvbmZpZy5mcmVxdWVuY3kgfHwgNjApO1xuICAgIGxldCBuZXh0ID0gbnVsbDtcblxuICAgIF9zdG9wcGVkID0gZmFsc2U7XG4gICAgKGZ1bmN0aW9uIGZyYW1lKHRpbWVzdGFtcCkge1xuICAgICAgICBuZXh0ID0gbmV4dCB8fCB0aW1lc3RhbXA7XG4gICAgICAgIGlmICghX3N0b3BwZWQpIHtcbiAgICAgICAgICAgIGlmICh0aW1lc3RhbXAgPj0gbmV4dCkge1xuICAgICAgICAgICAgICAgIG5leHQgKz0gZGVsYXk7XG4gICAgICAgICAgICAgICAgdXBkYXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZyYW1lKTtcbiAgICAgICAgfVxuICAgIH0ocGVyZm9ybWFuY2Uubm93KCkpKTtcbn1cblxuZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgaWYgKF9vblVJVGhyZWFkICYmIF9jb25maWcuaW5wdXRTdHJlYW0udHlwZSA9PT0gJ0xpdmVTdHJlYW0nKSB7XG4gICAgICAgIHN0YXJ0Q29udGludW91c1VwZGF0ZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHVwZGF0ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaW5pdFdvcmtlcihjYikge1xuICAgIGNvbnN0IGJsb2JVUkwgPSBnZW5lcmF0ZVdvcmtlckJsb2IoKTtcbiAgICBjb25zdCB3b3JrZXJUaHJlYWQgPSB7XG4gICAgICAgIHdvcmtlcjogbmV3IFdvcmtlcihibG9iVVJMKSxcbiAgICAgICAgaW1hZ2VEYXRhOiBuZXcgVWludDhBcnJheShfaW5wdXRTdHJlYW0uZ2V0V2lkdGgoKSAqIF9pbnB1dFN0cmVhbS5nZXRIZWlnaHQoKSksXG4gICAgICAgIGJ1c3k6IHRydWVcbiAgICB9O1xuXG4gICAgd29ya2VyVGhyZWFkLndvcmtlci5vbm1lc3NhZ2UgPSBldiA9PiB7XG4gICAgICAgIGlmIChldi5kYXRhLmV2ZW50ID09PSAnaW5pdGlhbGl6ZWQnKSB7XG4gICAgICAgICAgICBVUkwucmV2b2tlT2JqZWN0VVJMKGJsb2JVUkwpO1xuICAgICAgICAgICAgd29ya2VyVGhyZWFkLmJ1c3kgPSBmYWxzZTtcbiAgICAgICAgICAgIHdvcmtlclRocmVhZC5pbWFnZURhdGEgPSBuZXcgVWludDhBcnJheShldi5kYXRhLmltYWdlRGF0YSk7XG4gICAgICAgICAgICBpZiAoRU5WLmRldmVsb3BtZW50KSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1dvcmtlciBpbml0aWFsaXplZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNiKHdvcmtlclRocmVhZCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZXYuZGF0YS5ldmVudCA9PT0gJ3Byb2Nlc3NlZCcpIHtcbiAgICAgICAgICAgIHdvcmtlclRocmVhZC5pbWFnZURhdGEgPSBuZXcgVWludDhBcnJheShldi5kYXRhLmltYWdlRGF0YSk7XG4gICAgICAgICAgICB3b3JrZXJUaHJlYWQuYnVzeSA9IGZhbHNlO1xuICAgICAgICAgICAgcHVibGlzaFJlc3VsdChldi5kYXRhLnJlc3VsdCwgd29ya2VyVGhyZWFkLmltYWdlRGF0YSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZXYuZGF0YS5ldmVudCA9PT0gJ2Vycm9yJykge1xuICAgICAgICAgICAgaWYgKEVOVi5kZXZlbG9wbWVudCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdXb3JrZXIgZXJyb3I6JywgZXYuZGF0YS5tZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB3b3JrZXJUaHJlYWQud29ya2VyLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgY21kOiAnaW5pdCcsXG4gICAgICAgIHNpemU6IHsgeDogX2lucHV0U3RyZWFtLmdldFdpZHRoKCksIHk6IF9pbnB1dFN0cmVhbS5nZXRIZWlnaHQoKSB9LFxuICAgICAgICBpbWFnZURhdGE6IHdvcmtlclRocmVhZC5pbWFnZURhdGEsXG4gICAgICAgIGNvbmZpZzogY29uZmlnRm9yV29ya2VyKF9jb25maWcpXG4gICAgfSwgW3dvcmtlclRocmVhZC5pbWFnZURhdGEuYnVmZmVyXSk7XG59XG5cbmZ1bmN0aW9uIGNvbmZpZ0Zvcldvcmtlcihjb25maWcpIHtcbiAgICByZXR1cm4gbWVyZ2UoY29uZmlnLCB7IGlucHV0U3RyZWFtOiB7IHRhcmdldDogbnVsbCB9IH0pO1xufVxuXG5mdW5jdGlvbiB3b3JrZXJJbnRlcmZhY2UoZmFjdG9yeSkge1xuICAgIGxldCBRdWFnZ2E7XG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYqL1xuICAgIGlmIChmYWN0b3J5KSB7XG4gICAgICAgIFF1YWdnYSA9IGZhY3RvcnkoKS5kZWZhdWx0O1xuICAgICAgICBpZiAoIVF1YWdnYSkge1xuICAgICAgICAgICAgc2VsZi5wb3N0TWVzc2FnZSh7ICdldmVudCc6ICdlcnJvcicsIG1lc3NhZ2U6ICdRdWFnZ2EgY291bGQgbm90IGJlIGNyZWF0ZWQnIH0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuICAgIGxldCBpbWFnZVdyYXBwZXI7XG5cbiAgICBzZWxmLm9ubWVzc2FnZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmIChlLmRhdGEuY21kID09PSAnaW5pdCcpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbmZpZyA9IGUuZGF0YS5jb25maWc7XG4gICAgICAgICAgICBjb25maWcubnVtT2ZXb3JrZXJzID0gMDtcbiAgICAgICAgICAgIGltYWdlV3JhcHBlciA9IG5ldyBRdWFnZ2EuSW1hZ2VXcmFwcGVyKHtcbiAgICAgICAgICAgICAgICB4OiBlLmRhdGEuc2l6ZS54LFxuICAgICAgICAgICAgICAgIHk6IGUuZGF0YS5zaXplLnlcbiAgICAgICAgICAgIH0sIG5ldyBVaW50OEFycmF5KGUuZGF0YS5pbWFnZURhdGEpKTtcbiAgICAgICAgICAgIFF1YWdnYS5pbml0KGNvbmZpZywgcmVhZHksIGltYWdlV3JhcHBlcik7XG4gICAgICAgICAgICBRdWFnZ2Eub25Qcm9jZXNzZWQob25Qcm9jZXNzZWQpO1xuICAgICAgICB9IGVsc2UgaWYgKGUuZGF0YS5jbWQgPT09ICdwcm9jZXNzJykge1xuICAgICAgICAgICAgaW1hZ2VXcmFwcGVyLmRhdGEgPSBuZXcgVWludDhBcnJheShlLmRhdGEuaW1hZ2VEYXRhKTtcbiAgICAgICAgICAgIFF1YWdnYS5zdGFydCgpO1xuICAgICAgICB9IGVsc2UgaWYgKGUuZGF0YS5jbWQgPT09ICdzZXRSZWFkZXJzJykge1xuICAgICAgICAgICAgUXVhZ2dhLnNldFJlYWRlcnMoZS5kYXRhLnJlYWRlcnMpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIG9uUHJvY2Vzc2VkKHJlc3VsdCkge1xuICAgICAgICBzZWxmLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgICdldmVudCc6ICdwcm9jZXNzZWQnLFxuICAgICAgICAgICAgaW1hZ2VEYXRhOiBpbWFnZVdyYXBwZXIuZGF0YSxcbiAgICAgICAgICAgIHJlc3VsdDogcmVzdWx0XG4gICAgICAgIH0sIFtpbWFnZVdyYXBwZXIuZGF0YS5idWZmZXJdKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWFkeSgpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgICBzZWxmLnBvc3RNZXNzYWdlKHsgJ2V2ZW50JzogJ2luaXRpYWxpemVkJywgaW1hZ2VEYXRhOiBpbWFnZVdyYXBwZXIuZGF0YSB9LCBbaW1hZ2VXcmFwcGVyLmRhdGEuYnVmZmVyXSk7XG4gICAgfVxuXG4gICAgLyogZXNsaW50LWVuYWJsZSAqL1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVdvcmtlckJsb2IoKSB7XG4gICAgbGV0IGZhY3RvcnlTb3VyY2U7XG5cbiAgICAvKiBqc2hpbnQgaWdub3JlOnN0YXJ0ICovXG4gICAgaWYgKHR5cGVvZiBfX2ZhY3RvcnlTb3VyY2VfXyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgZmFjdG9yeVNvdXJjZSA9IF9fZmFjdG9yeVNvdXJjZV9fOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4gICAgfVxuICAgIC8qIGpzaGludCBpZ25vcmU6ZW5kICovXG5cbiAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoWycoJyArIHdvcmtlckludGVyZmFjZS50b1N0cmluZygpICsgJykoJyArIGZhY3RvcnlTb3VyY2UgKyAnKTsnXSxcbiAgICAgICAgeyB0eXBlOiAndGV4dC9qYXZhc2NyaXB0JyB9KTtcblxuICAgIHJldHVybiB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcbn1cblxuZnVuY3Rpb24gc2V0UmVhZGVycyhyZWFkZXJzKSB7XG4gICAgaWYgKF9kZWNvZGVyKSB7XG4gICAgICAgIF9kZWNvZGVyLnNldFJlYWRlcnMocmVhZGVycyk7XG4gICAgfSBlbHNlIGlmIChfb25VSVRocmVhZCAmJiBfd29ya2VyUG9vbC5sZW5ndGggPiAwKSB7XG4gICAgICAgIF93b3JrZXJQb29sLmZvckVhY2god29ya2VyVGhyZWFkID0+IHdvcmtlclRocmVhZC53b3JrZXIucG9zdE1lc3NhZ2UoeyBjbWQ6ICdzZXRSZWFkZXJzJywgcmVhZGVyczogcmVhZGVycyB9KSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBhZGp1c3RXb3JrZXJQb29sKGNhcGFjaXR5LCBjYikge1xuICAgIGNvbnN0IGluY3JlYXNlQnkgPSBjYXBhY2l0eSAtIF93b3JrZXJQb29sLmxlbmd0aDtcbiAgICBpZiAoaW5jcmVhc2VCeSA9PT0gMCkge1xuICAgICAgICByZXR1cm4gY2IgJiYgY2IoKTtcbiAgICB9XG4gICAgaWYgKGluY3JlYXNlQnkgPCAwKSB7XG4gICAgICAgIGNvbnN0IHdvcmtlcnNUb1Rlcm1pbmF0ZSA9IF93b3JrZXJQb29sLnNsaWNlKGluY3JlYXNlQnkpO1xuICAgICAgICB3b3JrZXJzVG9UZXJtaW5hdGUuZm9yRWFjaChmdW5jdGlvbiAod29ya2VyVGhyZWFkKSB7XG4gICAgICAgICAgICB3b3JrZXJUaHJlYWQud29ya2VyLnRlcm1pbmF0ZSgpO1xuICAgICAgICAgICAgaWYgKEVOVi5kZXZlbG9wbWVudCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdXb3JrZXIgdGVybWluYXRlZCEnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIF93b3JrZXJQb29sID0gX3dvcmtlclBvb2wuc2xpY2UoMCwgaW5jcmVhc2VCeSk7XG4gICAgICAgIHJldHVybiBjYiAmJiBjYigpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5jcmVhc2VCeTsgaSsrKSB7XG4gICAgICAgICAgICBpbml0V29ya2VyKHdvcmtlckluaXRpYWxpemVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHdvcmtlckluaXRpYWxpemVkKHdvcmtlclRocmVhZCkge1xuICAgICAgICAgICAgX3dvcmtlclBvb2wucHVzaCh3b3JrZXJUaHJlYWQpO1xuICAgICAgICAgICAgaWYgKF93b3JrZXJQb29sLmxlbmd0aCA+PSBjYXBhY2l0eSkge1xuICAgICAgICAgICAgICAgIGNiICYmIGNiKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBpbml0OiBmdW5jdGlvbiAoY29uZmlnLCBjYiwgaW1hZ2VXcmFwcGVyKSB7XG4gICAgICAgIF9jb25maWcgPSBtZXJnZShDb25maWcsIGNvbmZpZyk7XG4gICAgICAgIGlmIChpbWFnZVdyYXBwZXIpIHtcbiAgICAgICAgICAgIF9vblVJVGhyZWFkID0gZmFsc2U7XG4gICAgICAgICAgICBpbml0aWFsaXplRGF0YShpbWFnZVdyYXBwZXIpO1xuICAgICAgICAgICAgcmV0dXJuIGNiKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbml0SW5wdXRTdHJlYW0oY2IpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBzdGFydDogZnVuY3Rpb24gKCkge1xuICAgICAgICBzdGFydCgpO1xuICAgIH0sXG4gICAgc3RvcDogZnVuY3Rpb24gKCkge1xuICAgICAgICBfc3RvcHBlZCA9IHRydWU7XG4gICAgICAgIGFkanVzdFdvcmtlclBvb2woMCk7XG4gICAgICAgIGlmIChfY29uZmlnLmlucHV0U3RyZWFtLnR5cGUgPT09ICdMaXZlU3RyZWFtJykge1xuICAgICAgICAgICAgQ2FtZXJhQWNjZXNzLnJlbGVhc2UoKTtcbiAgICAgICAgICAgIF9pbnB1dFN0cmVhbS5jbGVhckV2ZW50SGFuZGxlcnMoKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgcGF1c2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3N0b3BwZWQgPSB0cnVlO1xuICAgIH0sXG4gICAgb25EZXRlY3RlZDogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIEV2ZW50cy5zdWJzY3JpYmUoJ2RldGVjdGVkJywgY2FsbGJhY2spO1xuICAgIH0sXG4gICAgb2ZmRGV0ZWN0ZWQ6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICBFdmVudHMudW5zdWJzY3JpYmUoJ2RldGVjdGVkJywgY2FsbGJhY2spO1xuICAgIH0sXG4gICAgb25Qcm9jZXNzZWQ6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICBFdmVudHMuc3Vic2NyaWJlKCdwcm9jZXNzZWQnLCBjYWxsYmFjayk7XG4gICAgfSxcbiAgICBvZmZQcm9jZXNzZWQ6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICBFdmVudHMudW5zdWJzY3JpYmUoJ3Byb2Nlc3NlZCcsIGNhbGxiYWNrKTtcbiAgICB9LFxuICAgIHNldFJlYWRlcnM6IGZ1bmN0aW9uIChyZWFkZXJzKSB7XG4gICAgICAgIHNldFJlYWRlcnMocmVhZGVycyk7XG4gICAgfSxcbiAgICByZWdpc3RlclJlc3VsdENvbGxlY3RvcjogKHJlc3VsdENvbGxlY3RvcikgPT4ge1xuICAgICAgICBpZiAocmVzdWx0Q29sbGVjdG9yICYmIHR5cGVvZiByZXN1bHRDb2xsZWN0b3IuYWRkUmVzdWx0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBfcmVzdWx0Q29sbGVjdG9yID0gcmVzdWx0Q29sbGVjdG9yO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBjYW52YXM6IF9jYW52YXNDb250YWluZXIsXG4gICAgZGVjb2RlU2luZ2xlOiBmdW5jdGlvbiAoY29uZmlnLCByZXN1bHRDYWxsYmFjaykge1xuICAgICAgICBjb25maWcgPSBtZXJnZSh7XG4gICAgICAgICAgICBpbnB1dFN0cmVhbToge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdJbWFnZVN0cmVhbScsXG4gICAgICAgICAgICAgICAgc2VxdWVuY2U6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNpemU6IDgwMCxcbiAgICAgICAgICAgICAgICBzcmM6IGNvbmZpZy5zcmNcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBudW1PZldvcmtlcnM6IChFTlYuZGV2ZWxvcG1lbnQgJiYgY29uZmlnLmRlYnVnKSA/IDAgOiAxLFxuICAgICAgICAgICAgbG9jYXRvcjoge1xuICAgICAgICAgICAgICAgIGhhbGZTYW1wbGU6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIGNvbmZpZyk7XG5cbiAgICAgICAgdGhpcy5pbml0KGNvbmZpZywgKCkgPT4ge1xuICAgICAgICAgICAgRXZlbnRzLm9uY2UoJ3Byb2Nlc3NlZCcsIHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgICAgICAgICAgcmVzdWx0Q2FsbGJhY2suY2FsbChudWxsLCByZXN1bHQpO1xuICAgICAgICAgICAgfSwgdHJ1ZSk7XG4gICAgICAgICAgICBzdGFydCgpO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIEltYWdlV3JhcHBlcixcbiAgICBJbWFnZURlYnVnLFxuICAgIFJlc3VsdENvbGxlY3RvcixcbiAgICBDYW1lcmFBY2Nlc3Ncbn07XG4iLCJpbXBvcnQgeyBCYXJjb2RlUmVhZGVyIH0gZnJvbSAnLi9iYXJjb2RlX3JlYWRlcic7XG5cbmNvbnN0IE4gPSAxO1xuY29uc3QgVyA9IDM7XG5jb25zdCBTVEFSVF9QQVRURVJOID0gW1csIE4sIFcsIE4sIE4sIE5dO1xuY29uc3QgU1RPUF9QQVRURVJOID0gW1csIE4sIE4sIE4sIFddO1xuY29uc3QgQ09ERV9QQVRURVJOID0gW1xuICAgIFtOLCBOLCBXLCBXLCBOXSxcbiAgICBbVywgTiwgTiwgTiwgV10sXG4gICAgW04sIFcsIE4sIE4sIFddLFxuICAgIFtXLCBXLCBOLCBOLCBOXSxcbiAgICBbTiwgTiwgVywgTiwgV10sXG4gICAgW1csIE4sIFcsIE4sIE5dLFxuICAgIFtOLCBXLCBXLCBOLCBOXSxcbiAgICBbTiwgTiwgTiwgVywgV10sXG4gICAgW1csIE4sIE4sIFcsIE5dLFxuICAgIFtOLCBXLCBOLCBXLCBOXVxuXTtcbmNvbnN0IHN0YXJ0UGF0dGVybkxlbmd0aCA9IFNUQVJUX1BBVFRFUk4ucmVkdWNlKChzdW0sIHZhbCkgPT4gc3VtICsgdmFsLCAwKTtcblxuZXhwb3J0IGNsYXNzIFR3b09mRml2ZVJlYWRlciBleHRlbmRzIEJhcmNvZGVSZWFkZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuXG4gICAgICAgIHRoaXMuX2JhclNwYWNlUmF0aW8gPSBbMSwgMV07XG4gICAgICAgIHRoaXMuX2Zvcm1hdCA9ICcyb2Y1JztcbiAgICAgICAgdGhpcy5fc2luZ2xlQ29kZUVycm9yID0gMC43ODtcbiAgICAgICAgdGhpcy5fYXZlcmFnZUNvZGVFcnJvciA9IDAuMzA7XG4gICAgfVxuXG4gICAgX2ZpbmRQYXR0ZXJuKHBhdHRlcm4sIG9mZnNldCwgaXNXaGl0ZSwgdHJ5SGFyZGVyKSB7XG4gICAgICAgIGNvbnN0IGNvdW50ZXIgPSBbXTtcbiAgICAgICAgY29uc3QgYmVzdE1hdGNoID0ge1xuICAgICAgICAgICAgZXJyb3I6IE51bWJlci5NQVhfVkFMVUUsXG4gICAgICAgICAgICBjb2RlOiAtMSxcbiAgICAgICAgICAgIHN0YXJ0OiAwLFxuICAgICAgICAgICAgZW5kOiAwXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGVwc2lsb24gPSB0aGlzLkFWRVJBR0VfQ09ERV9FUlJPUjtcbiAgICAgICAgbGV0IGNvdW50ZXJQb3MgPSAwO1xuXG4gICAgICAgIGlzV2hpdGUgPSBpc1doaXRlIHx8IGZhbHNlO1xuICAgICAgICB0cnlIYXJkZXIgPSB0cnlIYXJkZXIgfHwgZmFsc2U7XG5cbiAgICAgICAgaWYgKCFvZmZzZXQpIHtcbiAgICAgICAgICAgIG9mZnNldCA9IHRoaXMuX25leHRTZXQodGhpcy5fcm93KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0dGVybi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY291bnRlcltpXSA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gb2Zmc2V0OyBpIDwgdGhpcy5fcm93Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fcm93W2ldIF4gaXNXaGl0ZSkge1xuICAgICAgICAgICAgICAgIGNvdW50ZXJbY291bnRlclBvc10rKztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvdW50ZXJQb3MgPT09IGNvdW50ZXIubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgc3VtID0gMDtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvdW50ZXIubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1bSArPSBjb3VudGVyW2pdO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXJyb3IgPSB0aGlzLl9tYXRjaFBhdHRlcm4oY291bnRlciwgcGF0dGVybik7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yIDwgZXBzaWxvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmVzdE1hdGNoLmVycm9yID0gZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICBiZXN0TWF0Y2guc3RhcnQgPSBpIC0gc3VtO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmVzdE1hdGNoLmVuZCA9IGk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYmVzdE1hdGNoO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRyeUhhcmRlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb3VudGVyLmxlbmd0aCAtIDI7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ZXJbal0gPSBjb3VudGVyW2ogKyAyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ZXJbY291bnRlci5sZW5ndGggLSAyXSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVyW2NvdW50ZXIubGVuZ3RoIC0gMV0gPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgY291bnRlclBvcy0tO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb3VudGVyUG9zKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvdW50ZXJbY291bnRlclBvc10gPSAxO1xuICAgICAgICAgICAgICAgIGlzV2hpdGUgPSAhaXNXaGl0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIF9maW5kU3RhcnQoKSB7XG4gICAgICAgIGxldCBvZmZzZXQgPSB0aGlzLl9uZXh0U2V0KHRoaXMuX3Jvdyk7XG4gICAgICAgIGxldCBuYXJyb3dCYXJXaWR0aCA9IDE7XG4gICAgICAgIGxldCBzdGFydEluZm87XG5cbiAgICAgICAgd2hpbGUgKCFzdGFydEluZm8pIHtcbiAgICAgICAgICAgIHN0YXJ0SW5mbyA9IHRoaXMuX2ZpbmRQYXR0ZXJuKFNUQVJUX1BBVFRFUk4sIG9mZnNldCwgZmFsc2UsIHRydWUpO1xuICAgICAgICAgICAgaWYgKCFzdGFydEluZm8pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5hcnJvd0JhcldpZHRoID0gTWF0aC5mbG9vcigoc3RhcnRJbmZvLmVuZCAtIHN0YXJ0SW5mby5zdGFydCkgLyBzdGFydFBhdHRlcm5MZW5ndGgpO1xuICAgICAgICAgICAgY29uc3QgbGVhZGluZ1doaXRlc3BhY2VTdGFydCA9IHN0YXJ0SW5mby5zdGFydCAtIG5hcnJvd0JhcldpZHRoICogNTtcbiAgICAgICAgICAgIGlmIChsZWFkaW5nV2hpdGVzcGFjZVN0YXJ0ID49IDApIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fbWF0Y2hSYW5nZShsZWFkaW5nV2hpdGVzcGFjZVN0YXJ0LCBzdGFydEluZm8uc3RhcnQsIDApKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGFydEluZm87XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb2Zmc2V0ID0gc3RhcnRJbmZvLmVuZDtcbiAgICAgICAgICAgIHN0YXJ0SW5mbyA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfdmVyaWZ5VHJhaWxpbmdXaGl0ZXNwYWNlKGVuZEluZm8pIHtcbiAgICAgICAgY29uc3QgdHJhaWxpbmdXaGl0ZXNwYWNlRW5kID0gZW5kSW5mby5lbmQgKyAoKGVuZEluZm8uZW5kIC0gZW5kSW5mby5zdGFydCkgLyAyKTtcbiAgICAgICAgaWYgKHRyYWlsaW5nV2hpdGVzcGFjZUVuZCA8IHRoaXMuX3Jvdy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9tYXRjaFJhbmdlKGVuZEluZm8uZW5kLCB0cmFpbGluZ1doaXRlc3BhY2VFbmQsIDApKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVuZEluZm87XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgX2ZpbmRFbmQoKSB7XG4gICAgICAgIHRoaXMuX3Jvdy5yZXZlcnNlKCk7XG5cbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gdGhpcy5fbmV4dFNldCh0aGlzLl9yb3cpO1xuICAgICAgICBjb25zdCBlbmRJbmZvID0gdGhpcy5fZmluZFBhdHRlcm4oU1RPUF9QQVRURVJOLCBvZmZzZXQsIGZhbHNlLCB0cnVlKTtcblxuICAgICAgICB0aGlzLl9yb3cucmV2ZXJzZSgpO1xuXG4gICAgICAgIGlmIChlbmRJbmZvID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHJldmVyc2UgbnVtYmVyc1xuICAgICAgICBjb25zdCB0bXAgPSBlbmRJbmZvLnN0YXJ0O1xuICAgICAgICBlbmRJbmZvLnN0YXJ0ID0gdGhpcy5fcm93Lmxlbmd0aCAtIGVuZEluZm8uZW5kO1xuICAgICAgICBlbmRJbmZvLmVuZCA9IHRoaXMuX3Jvdy5sZW5ndGggLSB0bXA7XG5cbiAgICAgICAgcmV0dXJuIGVuZEluZm8gIT09IG51bGwgPyB0aGlzLl92ZXJpZnlUcmFpbGluZ1doaXRlc3BhY2UoZW5kSW5mbykgOiBudWxsO1xuICAgIH1cblxuICAgIF9kZWNvZGVDb2RlKGNvdW50ZXIpIHtcbiAgICAgICAgY29uc3QgYmVzdE1hdGNoID0ge1xuICAgICAgICAgICAgZXJyb3I6IE51bWJlci5NQVhfVkFMVUUsXG4gICAgICAgICAgICBjb2RlOiAtMSxcbiAgICAgICAgICAgIHN0YXJ0OiAwLFxuICAgICAgICAgICAgZW5kOiAwXG4gICAgICAgIH07XG5cbiAgICAgICAgZm9yIChsZXQgY29kZSA9IDA7IGNvZGUgPCBDT0RFX1BBVFRFUk4ubGVuZ3RoOyBjb2RlKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGVycm9yID0gdGhpcy5fbWF0Y2hQYXR0ZXJuKGNvdW50ZXIsIENPREVfUEFUVEVSTltjb2RlXSk7XG4gICAgICAgICAgICBpZiAoZXJyb3IgPCBiZXN0TWF0Y2guZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBiZXN0TWF0Y2guY29kZSA9IGNvZGU7XG4gICAgICAgICAgICAgICAgYmVzdE1hdGNoLmVycm9yID0gZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYmVzdE1hdGNoLmVycm9yIDwgdGhpcy5BVkVSQUdFX0NPREVfRVJST1IpIHtcbiAgICAgICAgICAgIHJldHVybiBiZXN0TWF0Y2g7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfZGVjb2RlUGF5bG9hZChjb3VudGVycywgcmVzdWx0LCBkZWNvZGVkQ29kZXMpIHtcbiAgICAgICAgY29uc3QgY291bnRlckxlbmd0aCA9IGNvdW50ZXJzLmxlbmd0aDtcbiAgICAgICAgY29uc3QgY291bnRlciA9IFswLCAwLCAwLCAwLCAwXTtcbiAgICAgICAgbGV0IHBvcyA9IDA7XG4gICAgICAgIGxldCBjb2RlO1xuXG4gICAgICAgIHdoaWxlIChwb3MgPCBjb3VudGVyTGVuZ3RoKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvdW50ZXJbaV0gPSBjb3VudGVyc1twb3NdICogdGhpcy5fYmFyU3BhY2VSYXRpb1swXTtcbiAgICAgICAgICAgICAgICBwb3MgKz0gMjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29kZSA9IHRoaXMuX2RlY29kZUNvZGUoY291bnRlcik7XG5cbiAgICAgICAgICAgIGlmICghY29kZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXN1bHQucHVzaChjb2RlLmNvZGUgKyAnJyk7XG4gICAgICAgICAgICBkZWNvZGVkQ29kZXMucHVzaChjb2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb2RlO1xuICAgIH1cblxuICAgIF9kZWNvZGUoKSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0SW5mbyA9IHRoaXMuX2ZpbmRTdGFydCgpO1xuXG4gICAgICAgIGlmICghc3RhcnRJbmZvKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGVuZEluZm8gPSB0aGlzLl9maW5kRW5kKCk7XG5cbiAgICAgICAgaWYgKCFlbmRJbmZvKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvdW50ZXJzID0gdGhpcy5fZmlsbENvdW50ZXJzKHN0YXJ0SW5mby5lbmQsIGVuZEluZm8uc3RhcnQsIGZhbHNlKTtcblxuICAgICAgICBpZiAoY291bnRlcnMubGVuZ3RoICUgMTAgIT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgICAgIGNvbnN0IGRlY29kZWRDb2RlcyA9IFtdO1xuXG4gICAgICAgIGRlY29kZWRDb2Rlcy5wdXNoKHN0YXJ0SW5mbyk7XG5cbiAgICAgICAgY29uc3QgY29kZSA9IHRoaXMuX2RlY29kZVBheWxvYWQoY291bnRlcnMsIHJlc3VsdCwgZGVjb2RlZENvZGVzKTtcblxuICAgICAgICBpZiAoIWNvZGUgfHwgcmVzdWx0Lmxlbmd0aCA8IDUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVjb2RlZENvZGVzLnB1c2goZW5kSW5mbyk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvZGU6IHJlc3VsdC5qb2luKCcnKSxcbiAgICAgICAgICAgIHN0YXJ0OiBzdGFydEluZm8uc3RhcnQsXG4gICAgICAgICAgICBlbmQ6IGVuZEluZm8uZW5kLFxuICAgICAgICAgICAgc3RhcnRJbmZvLFxuICAgICAgICAgICAgZGVjb2RlZENvZGVzXG4gICAgICAgIH07XG4gICAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IERJUkVDVElPTiA9IHtcbiAgICBGT1JXQVJEOiAxLFxuICAgIFJFVkVSU0U6IC0xXG59O1xuXG5leHBvcnQgY2xhc3MgQmFyY29kZVJlYWRlciB7XG4gICAgc3RhdGljIGdldCBFeGNlcHRpb24oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBTdGFydE5vdEZvdW5kRXhjZXB0aW9uOiAnU3RhcnQtSW5mbyB3YXMgbm90IGZvdW5kIScsXG4gICAgICAgICAgICBDb2RlTm90Rm91bmRFeGNlcHRpb246ICdDb2RlIGNvdWxkIG5vdCBiZSBmb3VuZCEnLFxuICAgICAgICAgICAgUGF0dGVybk5vdEZvdW5kRXhjZXB0aW9uOiAnUGF0dGVybiBjb3VsZCBub3QgYmUgZm91bmQhJ1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGdldCBTSU5HTEVfQ09ERV9FUlJPUigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpbmdsZUNvZGVFcnJvcjtcbiAgICB9XG5cbiAgICBnZXQgQVZFUkFHRV9DT0RFX0VSUk9SKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYXZlcmFnZUNvZGVFcnJvcjtcbiAgICB9XG5cbiAgICBnZXQgRk9STUFUKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZm9ybWF0O1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZywgc3VwcGxlbWVudHMpIHtcbiAgICAgICAgdGhpcy5fZm9ybWF0ID0gJ3Vua25vd24nO1xuICAgICAgICB0aGlzLl9yb3cgPSBbXTtcbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWcgfHwge307XG4gICAgICAgIHRoaXMuc3VwcGxlbWVudHMgPSBzdXBwbGVtZW50cztcbiAgICB9XG5cbiAgICBfbmV4dFVuc2V0KGxpbmUsIHN0YXJ0KSB7XG4gICAgICAgIGZvciAobGV0IGkgPSBzdGFydCB8fCAwOyBpIDwgbGluZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKCFsaW5lW2ldKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxpbmUubGVuZ3RoO1xuICAgIH1cblxuICAgIF9tYXRjaFBhdHRlcm4oY291bnRlciwgY29kZSwgbWF4U2luZ2xlRXJyb3IpIHtcbiAgICAgICAgbGV0IGVycm9yID0gMDtcbiAgICAgICAgbGV0IHN1bSA9IDA7XG4gICAgICAgIGxldCBtb2R1bG8gPSAwO1xuXG4gICAgICAgIG1heFNpbmdsZUVycm9yID0gbWF4U2luZ2xlRXJyb3IgfHwgdGhpcy5TSU5HTEVfQ09ERV9FUlJPUiB8fCAxO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnRlci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgc3VtICs9IGNvdW50ZXJbaV07XG4gICAgICAgICAgICBtb2R1bG8gKz0gY29kZVtpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdW0gPCBtb2R1bG8pIHtcbiAgICAgICAgICAgIHJldHVybiBOdW1iZXIuTUFYX1ZBTFVFO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYmFyV2lkdGggPSBzdW0gLyBtb2R1bG87XG4gICAgICAgIG1heFNpbmdsZUVycm9yICo9IGJhcldpZHRoO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnRlci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY291bnQgPSBjb3VudGVyW2ldO1xuICAgICAgICAgICAgY29uc3Qgc2NhbGVkID0gY29kZVtpXSAqIGJhcldpZHRoO1xuICAgICAgICAgICAgY29uc3Qgc2luZ2xlRXJyb3IgPSBNYXRoLmFicyhjb3VudCAtIHNjYWxlZCkgLyBzY2FsZWQ7XG4gICAgICAgICAgICBpZiAoc2luZ2xlRXJyb3IgPiBtYXhTaW5nbGVFcnJvcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBOdW1iZXIuTUFYX1ZBTFVFO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZXJyb3IgKz0gc2luZ2xlRXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVycm9yIC8gbW9kdWxvO1xuICAgIH1cblxuICAgIF9uZXh0U2V0KGxpbmUsIG9mZnNldCkge1xuICAgICAgICBmb3IgKGxldCBpID0gb2Zmc2V0IHx8IDA7IGkgPCBsaW5lLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAobGluZVtpXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsaW5lLmxlbmd0aDtcbiAgICB9XG5cbiAgICBfY29ycmVjdEJhcnMoY291bnRlciwgY29ycmVjdGlvbiwgaW5kaWNlcykge1xuICAgICAgICBsZXQgbGVuZ3RoID0gaW5kaWNlcy5sZW5ndGg7XG4gICAgICAgIGxldCB0bXAgPSAwO1xuXG4gICAgICAgIHdoaWxlIChsZW5ndGgtLSkge1xuICAgICAgICAgICAgdG1wID0gY291bnRlcltpbmRpY2VzW2xlbmd0aF1dICogKDEgLSAoKDEgLSBjb3JyZWN0aW9uKSAvIDIpKTtcbiAgICAgICAgICAgIGlmICh0bXAgPiAxKSB7XG4gICAgICAgICAgICAgICAgY291bnRlcltpbmRpY2VzW2xlbmd0aF1dID0gdG1wO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGVjb2RlUGF0dGVybihwYXR0ZXJuKSB7XG4gICAgICAgIGxldCByZXN1bHQ7XG5cbiAgICAgICAgdGhpcy5fcm93ID0gcGF0dGVybjtcbiAgICAgICAgcmVzdWx0ID0gdGhpcy5fZGVjb2RlKCk7XG4gICAgICAgIGlmIChyZXN1bHQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuX3Jvdy5yZXZlcnNlKCk7XG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLl9kZWNvZGUoKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuZGlyZWN0aW9uID0gRElSRUNUSU9OLlJFVkVSU0U7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnN0YXJ0ID0gdGhpcy5fcm93Lmxlbmd0aCAtIHJlc3VsdC5zdGFydDtcbiAgICAgICAgICAgICAgICByZXN1bHQuZW5kID0gdGhpcy5fcm93Lmxlbmd0aCAtIHJlc3VsdC5lbmQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQuZGlyZWN0aW9uID0gRElSRUNUSU9OLkZPUldBUkQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICByZXN1bHQuZm9ybWF0ID0gdGhpcy5GT1JNQVQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIF9tYXRjaFJhbmdlKHN0YXJ0LCBlbmQsIHZhbHVlKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSBzdGFydCA8IDAgPyAwIDogc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3Jvd1tpXSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgX2ZpbGxDb3VudGVycyhvZmZzZXQsIGVuZCwgaXNXaGl0ZSkge1xuICAgICAgICBjb25zdCBjb3VudGVycyA9IFtdO1xuICAgICAgICBsZXQgY291bnRlclBvcyA9IDA7XG5cbiAgICAgICAgaXNXaGl0ZSA9ICh0eXBlb2YgaXNXaGl0ZSAhPT0gJ3VuZGVmaW5lZCcpID8gaXNXaGl0ZSA6IHRydWU7XG4gICAgICAgIG9mZnNldCA9ICh0eXBlb2Ygb2Zmc2V0ICE9PSAndW5kZWZpbmVkJykgPyBvZmZzZXQgOiB0aGlzLl9uZXh0VW5zZXQodGhpcy5fcm93KTtcbiAgICAgICAgZW5kID0gZW5kIHx8IHRoaXMuX3Jvdy5sZW5ndGg7XG5cbiAgICAgICAgY291bnRlcnNbY291bnRlclBvc10gPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gb2Zmc2V0OyBpIDwgZW5kOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9yb3dbaV0gXiBpc1doaXRlKSB7XG4gICAgICAgICAgICAgICAgY291bnRlcnNbY291bnRlclBvc10rKztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY291bnRlclBvcysrO1xuICAgICAgICAgICAgICAgIGNvdW50ZXJzW2NvdW50ZXJQb3NdID0gMTtcbiAgICAgICAgICAgICAgICBpc1doaXRlID0gIWlzV2hpdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvdW50ZXJzO1xuICAgIH1cblxuICAgIF90b0NvdW50ZXJzKHN0YXJ0LCBjb3VudGVyKSB7XG4gICAgICAgIGNvbnN0IG51bUNvdW50ZXJzID0gY291bnRlci5sZW5ndGg7XG4gICAgICAgIGNvbnN0IGVuZCA9IHRoaXMuX3Jvdy5sZW5ndGg7XG4gICAgICAgIGxldCBpc1doaXRlID0gIXRoaXMuX3Jvd1tzdGFydF07XG4gICAgICAgIGxldCBjb3VudGVyUG9zID0gMDtcblxuICAgICAgICBjb3VudGVyLmZpbGwoMCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9yb3dbaV0gXiBpc1doaXRlKSB7XG4gICAgICAgICAgICAgICAgY291bnRlcltjb3VudGVyUG9zXSsrO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb3VudGVyUG9zKys7XG4gICAgICAgICAgICAgICAgaWYgKGNvdW50ZXJQb3MgPT09IG51bUNvdW50ZXJzKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXJbY291bnRlclBvc10gPSAxO1xuICAgICAgICAgICAgICAgICAgICBpc1doaXRlID0gIWlzV2hpdGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvdW50ZXI7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQmFyY29kZVJlYWRlciB9IGZyb20gJy4vYmFyY29kZV9yZWFkZXInO1xuXG5jb25zdCBBTFBIQUJFVEhfU1RSSU5HID0gJzAxMjM0NTY3ODktJDovLitBQkNEJztcbmNvbnN0IEFMUEhBQkVUID0gWy4uLkFMUEhBQkVUSF9TVFJJTkddLm1hcChjaGFyID0+IGNoYXIuY2hhckNvZGVBdCgwKSk7XG4vLyBjb25zdCBBTFBIQUJFVCA9IFs0OCwgNDksIDUwLCA1MSwgNTIsIDUzLCA1NCwgNTUsIDU2LCA1NywgNDUsIDM2LCA1OCwgNDcsIDQ2LCA0MywgNjUsIDY2LCA2NywgNjhdO1xuY29uc3QgQ0hBUkFDVEVSX0VOQ09ESU5HUyA9IFsweDAwMywgMHgwMDYsIDB4MDA5LCAweDA2MCwgMHgwMTIsIDB4MDQyLCAweDAyMSwgMHgwMjQsIDB4MDMwLCAweDA0OCwgMHgwMGMsIDB4MDE4LFxuICAgIDB4MDQ1LCAweDA1MSwgMHgwNTQsIDB4MDE1LCAweDAxQSwgMHgwMjksIDB4MDBCLCAweDAwRV07XG5jb25zdCBTVEFSVF9FTkQgPSBbMHgwMUEsIDB4MDI5LCAweDAwQiwgMHgwMEVdO1xuY29uc3QgTUlOX0VOQ09ERURfQ0hBUlMgPSA0O1xuY29uc3QgTUFYX0FDQ0VQVEFCTEUgPSAyLjA7XG5jb25zdCBQQURESU5HID0gMS41O1xuXG5leHBvcnQgY2xhc3MgQ29kYWJhclJlYWRlciBleHRlbmRzIEJhcmNvZGVSZWFkZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuX2Zvcm1hdCA9ICdjb2RhYmFyJztcbiAgICAgICAgdGhpcy5fY291bnRlcnMgPSBbXTtcbiAgICB9XG5cbiAgICBfZGVjb2RlKCkge1xuICAgICAgICB0aGlzLl9jb3VudGVycyA9IHRoaXMuX2ZpbGxDb3VudGVycygpO1xuXG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy5fZmluZFN0YXJ0KCk7XG4gICAgICAgIGlmICghc3RhcnQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgICAgIGxldCBuZXh0U3RhcnQgPSBzdGFydC5zdGFydENvdW50ZXI7XG4gICAgICAgIGxldCBwYXR0ZXJuO1xuXG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIHBhdHRlcm4gPSB0aGlzLl90b1BhdHRlcm4obmV4dFN0YXJ0KTtcbiAgICAgICAgICAgIGlmIChwYXR0ZXJuIDwgMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZGVjb2RlZENoYXIgPSB0aGlzLl9wYXR0ZXJuVG9DaGFyKHBhdHRlcm4pO1xuICAgICAgICAgICAgaWYgKGRlY29kZWRDaGFyIDwgMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goZGVjb2RlZENoYXIpO1xuICAgICAgICAgICAgbmV4dFN0YXJ0ICs9IDg7XG4gICAgICAgICAgICBpZiAocmVzdWx0Lmxlbmd0aCA+IDEgJiYgU1RBUlRfRU5ELnNvbWUoY29kZSA9PiBjb2RlID09PSBwYXR0ZXJuKSkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IHdoaWxlIChuZXh0U3RhcnQgPCB0aGlzLl9jb3VudGVycy5sZW5ndGgpO1xuXG4gICAgICAgIC8vIHZlcmlmeSBlbmRcbiAgICAgICAgaWYgKChyZXN1bHQubGVuZ3RoIC0gMikgPCBNSU5fRU5DT0RFRF9DSEFSUyB8fCAhU1RBUlRfRU5ELnNvbWUoY29kZSA9PiBjb2RlID09PSBwYXR0ZXJuKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB2ZXJpZnkgZW5kIHdoaXRlIHNwYWNlXG4gICAgICAgIGlmICghdGhpcy5fdmVyaWZ5V2hpdGVzcGFjZShzdGFydC5zdGFydENvdW50ZXIsIG5leHRTdGFydCAtIDgpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5fdmFsaWRhdGVSZXN1bHQocmVzdWx0LCBzdGFydC5zdGFydENvdW50ZXIpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIG5leHRTdGFydCA9IG5leHRTdGFydCA+IHRoaXMuX2NvdW50ZXJzLmxlbmd0aCA/IHRoaXMuX2NvdW50ZXJzLmxlbmd0aCA6IG5leHRTdGFydDtcbiAgICAgICAgY29uc3QgZW5kID0gc3RhcnQuc3RhcnQgKyB0aGlzLl9zdW1Db3VudGVycyhzdGFydC5zdGFydENvdW50ZXIsIG5leHRTdGFydCAtIDgpO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb2RlOiByZXN1bHQuam9pbignJyksXG4gICAgICAgICAgICBzdGFydDogc3RhcnQuc3RhcnQsXG4gICAgICAgICAgICBlbmQsXG4gICAgICAgICAgICBzdGFydEluZm86IHN0YXJ0LFxuICAgICAgICAgICAgZGVjb2RlZENvZGVzOiByZXN1bHRcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBfdmVyaWZ5V2hpdGVzcGFjZShzdGFydENvdW50ZXIsIGVuZENvdW50ZXIpIHtcbiAgICAgICAgaWYgKChzdGFydENvdW50ZXIgLSAxIDw9IDApXG4gICAgICAgICAgICB8fCB0aGlzLl9jb3VudGVyc1tzdGFydENvdW50ZXIgLSAxXSA+PSAodGhpcy5fY2FsY3VsYXRlUGF0dGVybkxlbmd0aChzdGFydENvdW50ZXIpIC8gMi4wKSkge1xuICAgICAgICAgICAgaWYgKChlbmRDb3VudGVyICsgOCA+PSB0aGlzLl9jb3VudGVycy5sZW5ndGgpXG4gICAgICAgICAgICAgICAgfHwgdGhpcy5fY291bnRlcnNbZW5kQ291bnRlciArIDddID49ICh0aGlzLl9jYWxjdWxhdGVQYXR0ZXJuTGVuZ3RoKGVuZENvdW50ZXIpIC8gMi4wKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIF9jYWxjdWxhdGVQYXR0ZXJuTGVuZ3RoKG9mZnNldCkge1xuICAgICAgICBsZXQgc3VtID0gMDtcblxuICAgICAgICBmb3IgKGxldCBpID0gb2Zmc2V0OyBpIDwgb2Zmc2V0ICsgNzsgaSsrKSB7XG4gICAgICAgICAgICBzdW0gKz0gdGhpcy5fY291bnRlcnNbaV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VtO1xuICAgIH1cblxuICAgIF90aHJlc2hvbGRSZXN1bHRQYXR0ZXJuKHJlc3VsdCwgc3RhcnRDb3VudGVyKSB7XG4gICAgICAgIGNvbnN0IGNhdGVnb3JpemF0aW9uID0ge1xuICAgICAgICAgICAgc3BhY2U6IHtcbiAgICAgICAgICAgICAgICBuYXJyb3c6IHsgc2l6ZTogMCwgY291bnRzOiAwLCBtaW46IDAsIG1heDogTnVtYmVyLk1BWF9WQUxVRSB9LFxuICAgICAgICAgICAgICAgIHdpZGU6IHsgc2l6ZTogMCwgY291bnRzOiAwLCBtaW46IDAsIG1heDogTnVtYmVyLk1BWF9WQUxVRSB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmFyOiB7XG4gICAgICAgICAgICAgICAgbmFycm93OiB7IHNpemU6IDAsIGNvdW50czogMCwgbWluOiAwLCBtYXg6IE51bWJlci5NQVhfVkFMVUUgfSxcbiAgICAgICAgICAgICAgICB3aWRlOiB7IHNpemU6IDAsIGNvdW50czogMCwgbWluOiAwLCBtYXg6IE51bWJlci5NQVhfVkFMVUUgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBsZXQgcG9zID0gc3RhcnRDb3VudGVyO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzdWx0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcGF0dGVybiA9IHRoaXMuX2NoYXJUb1BhdHRlcm4ocmVzdWx0W2ldKTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDY7IGogPj0gMDsgai0tKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qga2luZCA9IChqICYgMSkgPT09IDIgPyBjYXRlZ29yaXphdGlvbi5iYXIgOiBjYXRlZ29yaXphdGlvbi5zcGFjZTtcbiAgICAgICAgICAgICAgICBjb25zdCBjYXQgPSAocGF0dGVybiAmIDEpID09PSAxID8ga2luZC53aWRlIDoga2luZC5uYXJyb3c7XG4gICAgICAgICAgICAgICAgY2F0LnNpemUgKz0gdGhpcy5fY291bnRlcnNbcG9zICsgal07XG4gICAgICAgICAgICAgICAgY2F0LmNvdW50cysrO1xuICAgICAgICAgICAgICAgIHBhdHRlcm4gPj49IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwb3MgKz0gODtcbiAgICAgICAgfVxuXG4gICAgICAgIFsnc3BhY2UnLCAnYmFyJ10uZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgY29uc3Qga2luZCA9IGNhdGVnb3JpemF0aW9uW2tleV07XG4gICAgICAgICAgICBraW5kLndpZGUubWluID0gTWF0aC5mbG9vcigoa2luZC5uYXJyb3cuc2l6ZSAvIGtpbmQubmFycm93LmNvdW50cyArIGtpbmQud2lkZS5zaXplIC8ga2luZC53aWRlLmNvdW50cykgLyAyKTtcbiAgICAgICAgICAgIGtpbmQubmFycm93Lm1heCA9IE1hdGguY2VpbChraW5kLndpZGUubWluKTtcbiAgICAgICAgICAgIGtpbmQud2lkZS5tYXggPSBNYXRoLmNlaWwoKGtpbmQud2lkZS5zaXplICogTUFYX0FDQ0VQVEFCTEUgKyBQQURESU5HKSAvIGtpbmQud2lkZS5jb3VudHMpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gY2F0ZWdvcml6YXRpb247XG4gICAgfVxuXG4gICAgX2NoYXJUb1BhdHRlcm4oY2hhcikge1xuICAgICAgICBjb25zdCBjaGFyQ29kZSA9IGNoYXIuY2hhckNvZGVBdCgwKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IEFMUEhBQkVULmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoQUxQSEFCRVRbaV0gPT09IGNoYXJDb2RlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIENIQVJBQ1RFUl9FTkNPRElOR1NbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gMHgwO1xuICAgIH1cblxuICAgIF92YWxpZGF0ZVJlc3VsdChyZXN1bHQsIHN0YXJ0Q291bnRlcikge1xuICAgICAgICBjb25zdCB0aHJlc2hvbGRzID0gdGhpcy5fdGhyZXNob2xkUmVzdWx0UGF0dGVybihyZXN1bHQsIHN0YXJ0Q291bnRlcik7XG4gICAgICAgIGxldCBwb3MgPSBzdGFydENvdW50ZXI7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBwYXR0ZXJuID0gdGhpcy5fY2hhclRvUGF0dGVybihyZXN1bHRbaV0pO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gNjsgaiA+PSAwOyBqLS0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBraW5kID0gKGogJiAxKSA9PT0gMCA/IHRocmVzaG9sZHMuYmFyIDogdGhyZXNob2xkcy5zcGFjZTtcbiAgICAgICAgICAgICAgICBjb25zdCBjYXQgPSAocGF0dGVybiAmIDEpID09PSAxID8ga2luZC53aWRlIDoga2luZC5uYXJyb3c7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2l6ZSA9IHRoaXMuX2NvdW50ZXJzW3BvcyArIGpdO1xuICAgICAgICAgICAgICAgIGlmIChzaXplIDwgY2F0Lm1pbiB8fCBzaXplID4gY2F0Lm1heCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdHRlcm4gPj49IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwb3MgKz0gODtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIF9wYXR0ZXJuVG9DaGFyKHBhdHRlcm4pIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBDSEFSQUNURVJfRU5DT0RJTkdTLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoQ0hBUkFDVEVSX0VOQ09ESU5HU1tpXSA9PT0gcGF0dGVybikge1xuICAgICAgICAgICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKEFMUEhBQkVUW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG5cbiAgICBfY29tcHV0ZUFsdGVybmF0aW5nVGhyZXNob2xkKG9mZnNldCwgZW5kKSB7XG4gICAgICAgIGxldCBtaW4gPSBOdW1iZXIuTUFYX1ZBTFVFO1xuICAgICAgICBsZXQgbWF4ID0gMDtcblxuICAgICAgICBmb3IgKGxldCBpID0gb2Zmc2V0OyBpIDwgZW5kOyBpICs9IDIpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvdW50ZXIgPSB0aGlzLl9jb3VudGVyc1tpXTtcbiAgICAgICAgICAgIGlmIChjb3VudGVyID4gbWF4KSB7XG4gICAgICAgICAgICAgICAgbWF4ID0gY291bnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb3VudGVyIDwgbWluKSB7XG4gICAgICAgICAgICAgICAgbWluID0gY291bnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoKG1pbiArIG1heCkgLyAyLjApIHwgMDtcbiAgICB9XG5cbiAgICBfdG9QYXR0ZXJuKG9mZnNldCkge1xuICAgICAgICBjb25zdCBudW1Db3VudGVycyA9IDc7XG4gICAgICAgIGNvbnN0IGVuZCA9IG9mZnNldCArIG51bUNvdW50ZXJzO1xuXG4gICAgICAgIGlmIChlbmQgPiB0aGlzLl9jb3VudGVycy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGJhclRocmVzaG9sZCA9IHRoaXMuX2NvbXB1dGVBbHRlcm5hdGluZ1RocmVzaG9sZChvZmZzZXQsIGVuZCk7XG4gICAgICAgIGNvbnN0IHNwYWNlVGhyZXNob2xkID0gdGhpcy5fY29tcHV0ZUFsdGVybmF0aW5nVGhyZXNob2xkKG9mZnNldCArIDEsIGVuZCk7XG4gICAgICAgIGxldCBiaXRtYXNrID0gMSA8PCAobnVtQ291bnRlcnMgLSAxKTtcbiAgICAgICAgbGV0IHBhdHRlcm4gPSAwO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtQ291bnRlcnM7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgdGhyZXNob2xkID0gKGkgJiAxKSA9PT0gMCA/IGJhclRocmVzaG9sZCA6IHNwYWNlVGhyZXNob2xkO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2NvdW50ZXJzW29mZnNldCArIGldID4gdGhyZXNob2xkKSB7XG4gICAgICAgICAgICAgICAgcGF0dGVybiB8PSBiaXRtYXNrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYml0bWFzayA+Pj0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYXR0ZXJuO1xuICAgIH1cblxuICAgIF9zdW1Db3VudGVycyhzdGFydCwgZW5kKSB7XG4gICAgICAgIGxldCBzdW0gPSAwO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgICAgICAgICBzdW0gKz0gdGhpcy5fY291bnRlcnNbaV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VtO1xuICAgIH1cblxuICAgIF9maW5kU3RhcnQoKSB7XG4gICAgICAgIGxldCBzdGFydCA9IHRoaXMuX25leHRVbnNldCh0aGlzLl9yb3cpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdGhpcy5fY291bnRlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHBhdHRlcm4gPSB0aGlzLl90b1BhdHRlcm4oaSk7XG4gICAgICAgICAgICBpZiAocGF0dGVybiAhPT0gLTEgJiYgU1RBUlRfRU5ELnNvbWUoY29kZSA9PiBjb2RlID09PSBwYXR0ZXJuKSkge1xuICAgICAgICAgICAgICAgIC8vIFRPRE86IExvb2sgZm9yIHdoaXRlc3BhY2UgYWhlYWRcbiAgICAgICAgICAgICAgICBzdGFydCArPSB0aGlzLl9zdW1Db3VudGVycygwLCBpKTtcbiAgICAgICAgICAgICAgICBjb25zdCBlbmQgPSBzdGFydCArIHRoaXMuX3N1bUNvdW50ZXJzKGksIGkgKyA4KTtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBzdGFydCxcbiAgICAgICAgICAgICAgICAgICAgZW5kLFxuICAgICAgICAgICAgICAgICAgICBzdGFydENvdW50ZXI6IGksXG4gICAgICAgICAgICAgICAgICAgIGVuZENvdW50ZXI6IGkgKyA4XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IEJhcmNvZGVSZWFkZXIgfSBmcm9tICcuL2JhcmNvZGVfcmVhZGVyJztcblxuY29uc3QgQ09ERV9TSElGVCA9IDk4O1xuY29uc3QgQ09ERV9DID0gOTk7XG5jb25zdCBDT0RFX0IgPSAxMDA7XG5jb25zdCBDT0RFX0EgPSAxMDE7XG5jb25zdCBTVEFSVF9DT0RFX0EgPSAxMDM7XG5jb25zdCBTVEFSVF9DT0RFX0IgPSAxMDQ7XG5jb25zdCBTVEFSVF9DT0RFX0MgPSAxMDU7XG5jb25zdCBTVE9QX0NPREUgPSAxMDY7XG5jb25zdCBDT0RFX1BBVFRFUk4gPSBbXG4gICAgWzIsIDEsIDIsIDIsIDIsIDJdLFxuICAgIFsyLCAyLCAyLCAxLCAyLCAyXSxcbiAgICBbMiwgMiwgMiwgMiwgMiwgMV0sXG4gICAgWzEsIDIsIDEsIDIsIDIsIDNdLFxuICAgIFsxLCAyLCAxLCAzLCAyLCAyXSxcbiAgICBbMSwgMywgMSwgMiwgMiwgMl0sXG4gICAgWzEsIDIsIDIsIDIsIDEsIDNdLFxuICAgIFsxLCAyLCAyLCAzLCAxLCAyXSxcbiAgICBbMSwgMywgMiwgMiwgMSwgMl0sXG4gICAgWzIsIDIsIDEsIDIsIDEsIDNdLFxuICAgIFsyLCAyLCAxLCAzLCAxLCAyXSxcbiAgICBbMiwgMywgMSwgMiwgMSwgMl0sXG4gICAgWzEsIDEsIDIsIDIsIDMsIDJdLFxuICAgIFsxLCAyLCAyLCAxLCAzLCAyXSxcbiAgICBbMSwgMiwgMiwgMiwgMywgMV0sXG4gICAgWzEsIDEsIDMsIDIsIDIsIDJdLFxuICAgIFsxLCAyLCAzLCAxLCAyLCAyXSxcbiAgICBbMSwgMiwgMywgMiwgMiwgMV0sXG4gICAgWzIsIDIsIDMsIDIsIDEsIDFdLFxuICAgIFsyLCAyLCAxLCAxLCAzLCAyXSxcbiAgICBbMiwgMiwgMSwgMiwgMywgMV0sXG4gICAgWzIsIDEsIDMsIDIsIDEsIDJdLFxuICAgIFsyLCAyLCAzLCAxLCAxLCAyXSxcbiAgICBbMywgMSwgMiwgMSwgMywgMV0sXG4gICAgWzMsIDEsIDEsIDIsIDIsIDJdLFxuICAgIFszLCAyLCAxLCAxLCAyLCAyXSxcbiAgICBbMywgMiwgMSwgMiwgMiwgMV0sXG4gICAgWzMsIDEsIDIsIDIsIDEsIDJdLFxuICAgIFszLCAyLCAyLCAxLCAxLCAyXSxcbiAgICBbMywgMiwgMiwgMiwgMSwgMV0sXG4gICAgWzIsIDEsIDIsIDEsIDIsIDNdLFxuICAgIFsyLCAxLCAyLCAzLCAyLCAxXSxcbiAgICBbMiwgMywgMiwgMSwgMiwgMV0sXG4gICAgWzEsIDEsIDEsIDMsIDIsIDNdLFxuICAgIFsxLCAzLCAxLCAxLCAyLCAzXSxcbiAgICBbMSwgMywgMSwgMywgMiwgMV0sXG4gICAgWzEsIDEsIDIsIDMsIDEsIDNdLFxuICAgIFsxLCAzLCAyLCAxLCAxLCAzXSxcbiAgICBbMSwgMywgMiwgMywgMSwgMV0sXG4gICAgWzIsIDEsIDEsIDMsIDEsIDNdLFxuICAgIFsyLCAzLCAxLCAxLCAxLCAzXSxcbiAgICBbMiwgMywgMSwgMywgMSwgMV0sXG4gICAgWzEsIDEsIDIsIDEsIDMsIDNdLFxuICAgIFsxLCAxLCAyLCAzLCAzLCAxXSxcbiAgICBbMSwgMywgMiwgMSwgMywgMV0sXG4gICAgWzEsIDEsIDMsIDEsIDIsIDNdLFxuICAgIFsxLCAxLCAzLCAzLCAyLCAxXSxcbiAgICBbMSwgMywgMywgMSwgMiwgMV0sXG4gICAgWzMsIDEsIDMsIDEsIDIsIDFdLFxuICAgIFsyLCAxLCAxLCAzLCAzLCAxXSxcbiAgICBbMiwgMywgMSwgMSwgMywgMV0sXG4gICAgWzIsIDEsIDMsIDEsIDEsIDNdLFxuICAgIFsyLCAxLCAzLCAzLCAxLCAxXSxcbiAgICBbMiwgMSwgMywgMSwgMywgMV0sXG4gICAgWzMsIDEsIDEsIDEsIDIsIDNdLFxuICAgIFszLCAxLCAxLCAzLCAyLCAxXSxcbiAgICBbMywgMywgMSwgMSwgMiwgMV0sXG4gICAgWzMsIDEsIDIsIDEsIDEsIDNdLFxuICAgIFszLCAxLCAyLCAzLCAxLCAxXSxcbiAgICBbMywgMywgMiwgMSwgMSwgMV0sXG4gICAgWzMsIDEsIDQsIDEsIDEsIDFdLFxuICAgIFsyLCAyLCAxLCA0LCAxLCAxXSxcbiAgICBbNCwgMywgMSwgMSwgMSwgMV0sXG4gICAgWzEsIDEsIDEsIDIsIDIsIDRdLFxuICAgIFsxLCAxLCAxLCA0LCAyLCAyXSxcbiAgICBbMSwgMiwgMSwgMSwgMiwgNF0sXG4gICAgWzEsIDIsIDEsIDQsIDIsIDFdLFxuICAgIFsxLCA0LCAxLCAxLCAyLCAyXSxcbiAgICBbMSwgNCwgMSwgMiwgMiwgMV0sXG4gICAgWzEsIDEsIDIsIDIsIDEsIDRdLFxuICAgIFsxLCAxLCAyLCA0LCAxLCAyXSxcbiAgICBbMSwgMiwgMiwgMSwgMSwgNF0sXG4gICAgWzEsIDIsIDIsIDQsIDEsIDFdLFxuICAgIFsxLCA0LCAyLCAxLCAxLCAyXSxcbiAgICBbMSwgNCwgMiwgMiwgMSwgMV0sXG4gICAgWzIsIDQsIDEsIDIsIDEsIDFdLFxuICAgIFsyLCAyLCAxLCAxLCAxLCA0XSxcbiAgICBbNCwgMSwgMywgMSwgMSwgMV0sXG4gICAgWzIsIDQsIDEsIDEsIDEsIDJdLFxuICAgIFsxLCAzLCA0LCAxLCAxLCAxXSxcbiAgICBbMSwgMSwgMSwgMiwgNCwgMl0sXG4gICAgWzEsIDIsIDEsIDEsIDQsIDJdLFxuICAgIFsxLCAyLCAxLCAyLCA0LCAxXSxcbiAgICBbMSwgMSwgNCwgMiwgMSwgMl0sXG4gICAgWzEsIDIsIDQsIDEsIDEsIDJdLFxuICAgIFsxLCAyLCA0LCAyLCAxLCAxXSxcbiAgICBbNCwgMSwgMSwgMiwgMSwgMl0sXG4gICAgWzQsIDIsIDEsIDEsIDEsIDJdLFxuICAgIFs0LCAyLCAxLCAyLCAxLCAxXSxcbiAgICBbMiwgMSwgMiwgMSwgNCwgMV0sXG4gICAgWzIsIDEsIDQsIDEsIDIsIDFdLFxuICAgIFs0LCAxLCAyLCAxLCAyLCAxXSxcbiAgICBbMSwgMSwgMSwgMSwgNCwgM10sXG4gICAgWzEsIDEsIDEsIDMsIDQsIDFdLFxuICAgIFsxLCAzLCAxLCAxLCA0LCAxXSxcbiAgICBbMSwgMSwgNCwgMSwgMSwgM10sXG4gICAgWzEsIDEsIDQsIDMsIDEsIDFdLFxuICAgIFs0LCAxLCAxLCAxLCAxLCAzXSxcbiAgICBbNCwgMSwgMSwgMywgMSwgMV0sXG4gICAgWzEsIDEsIDMsIDEsIDQsIDFdLFxuICAgIFsxLCAxLCA0LCAxLCAzLCAxXSxcbiAgICBbMywgMSwgMSwgMSwgNCwgMV0sXG4gICAgWzQsIDEsIDEsIDEsIDMsIDFdLFxuICAgIFsyLCAxLCAxLCA0LCAxLCAyXSxcbiAgICBbMiwgMSwgMSwgMiwgMSwgNF0sXG4gICAgWzIsIDEsIDEsIDIsIDMsIDJdLFxuICAgIFsyLCAzLCAzLCAxLCAxLCAxLCAyXVxuXTtcbmNvbnN0IE1PRFVMRV9JTkRJQ0VTID0geyBiYXI6IFswLCAyLCA0XSwgc3BhY2U6IFsxLCAzLCA1XSB9O1xuXG5leHBvcnQgY2xhc3MgQ29kZTEyOFJlYWRlciBleHRlbmRzIEJhcmNvZGVSZWFkZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuX2Zvcm1hdCA9ICdjb2RlXzEyOCc7XG4gICAgICAgIHRoaXMuX3NpbmdsZUNvZGVFcnJvciA9IDAuNjQ7XG4gICAgICAgIHRoaXMuX2F2ZXJhZ2VDb2RlRXJyb3IgPSAwLjMwO1xuICAgIH1cblxuICAgIF9kZWNvZGVDb2RlKHN0YXJ0LCBjb3JyZWN0aW9uKSB7XG4gICAgICAgIGNvbnN0IGNvdW50ZXIgPSBbMCwgMCwgMCwgMCwgMCwgMF07XG4gICAgICAgIGNvbnN0IG9mZnNldCA9IHN0YXJ0O1xuICAgICAgICBjb25zdCBiZXN0TWF0Y2ggPSB7XG4gICAgICAgICAgICBlcnJvcjogTnVtYmVyLk1BWF9WQUxVRSxcbiAgICAgICAgICAgIGNvZGU6IC0xLFxuICAgICAgICAgICAgc3RhcnQ6IHN0YXJ0LFxuICAgICAgICAgICAgZW5kOiBzdGFydCxcbiAgICAgICAgICAgIGNvcnJlY3Rpb246IHtcbiAgICAgICAgICAgICAgICBiYXI6IDEsXG4gICAgICAgICAgICAgICAgc3BhY2U6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgZXBzaWxvbiA9IHRoaXMuQVZFUkFHRV9DT0RFX0VSUk9SO1xuICAgICAgICBsZXQgaXNXaGl0ZSA9ICF0aGlzLl9yb3dbb2Zmc2V0XTtcbiAgICAgICAgbGV0IGNvdW50ZXJQb3MgPSAwO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSBvZmZzZXQ7IGkgPCB0aGlzLl9yb3cubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9yb3dbaV0gXiBpc1doaXRlKSB7XG4gICAgICAgICAgICAgICAgY291bnRlcltjb3VudGVyUG9zXSsrO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoY291bnRlclBvcyA9PT0gY291bnRlci5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3JyZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jb3JyZWN0KGNvdW50ZXIsIGNvcnJlY3Rpb24pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGNvZGUgPSAwOyBjb2RlIDwgQ09ERV9QQVRURVJOLmxlbmd0aDsgY29kZSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlcnJvciA9IHRoaXMuX21hdGNoUGF0dGVybihjb3VudGVyLCBDT0RFX1BBVFRFUk5bY29kZV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yIDwgYmVzdE1hdGNoLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVzdE1hdGNoLmNvZGUgPSBjb2RlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlc3RNYXRjaC5lcnJvciA9IGVycm9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJlc3RNYXRjaC5lbmQgPSBpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYmVzdE1hdGNoLmNvZGUgPT09IC0xIHx8IGJlc3RNYXRjaC5lcnJvciA+IGVwc2lsb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChDT0RFX1BBVFRFUk5bYmVzdE1hdGNoLmNvZGVdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiZXN0TWF0Y2guY29ycmVjdGlvbi5iYXIgPSB0aGlzLmNhbGN1bGF0ZUNvcnJlY3Rpb24oQ09ERV9QQVRURVJOW2Jlc3RNYXRjaC5jb2RlXSwgY291bnRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNT0RVTEVfSU5ESUNFUy5iYXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmVzdE1hdGNoLmNvcnJlY3Rpb24uc3BhY2UgPSB0aGlzLmNhbGN1bGF0ZUNvcnJlY3Rpb24oQ09ERV9QQVRURVJOW2Jlc3RNYXRjaC5jb2RlXSwgY291bnRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNT0RVTEVfSU5ESUNFUy5zcGFjZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJlc3RNYXRjaDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb3VudGVyUG9zKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvdW50ZXJbY291bnRlclBvc10gPSAxO1xuICAgICAgICAgICAgICAgIGlzV2hpdGUgPSAhaXNXaGl0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBfY29ycmVjdChjb3VudGVyLCBjb3JyZWN0aW9uKSB7XG4gICAgICAgIHRoaXMuX2NvcnJlY3RCYXJzKGNvdW50ZXIsIGNvcnJlY3Rpb24uYmFyLCBNT0RVTEVfSU5ESUNFUy5iYXIpO1xuICAgICAgICB0aGlzLl9jb3JyZWN0QmFycyhjb3VudGVyLCBjb3JyZWN0aW9uLnNwYWNlLCBNT0RVTEVfSU5ESUNFUy5zcGFjZSk7XG4gICAgfVxuXG4gICAgX2ZpbmRTdGFydCgpIHtcbiAgICAgICAgY29uc3QgY291bnRlciA9IFswLCAwLCAwLCAwLCAwLCAwXTtcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gdGhpcy5fbmV4dFNldCh0aGlzLl9yb3cpO1xuICAgICAgICBjb25zdCBiZXN0TWF0Y2ggPSB7XG4gICAgICAgICAgICBlcnJvcjogTnVtYmVyLk1BWF9WQUxVRSxcbiAgICAgICAgICAgIGNvZGU6IC0xLFxuICAgICAgICAgICAgc3RhcnQ6IDAsXG4gICAgICAgICAgICBlbmQ6IDAsXG4gICAgICAgICAgICBjb3JyZWN0aW9uOiB7XG4gICAgICAgICAgICAgICAgYmFyOiAxLFxuICAgICAgICAgICAgICAgIHNwYWNlOiAxXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGVwc2lsb24gPSB0aGlzLkFWRVJBR0VfQ09ERV9FUlJPUjtcbiAgICAgICAgbGV0IGlzV2hpdGUgPSBmYWxzZTtcbiAgICAgICAgbGV0IGNvdW50ZXJQb3MgPSAwO1xuICAgICAgICBsZXQgc3VtO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSBvZmZzZXQ7IGkgPCB0aGlzLl9yb3cubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9yb3dbaV0gXiBpc1doaXRlKSB7XG4gICAgICAgICAgICAgICAgY291bnRlcltjb3VudGVyUG9zXSsrO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoY291bnRlclBvcyA9PT0gY291bnRlci5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1bSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY291bnRlci5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3VtICs9IGNvdW50ZXJbal07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgY29kZSA9IFNUQVJUX0NPREVfQTsgY29kZSA8PSBTVEFSVF9DT0RFX0M7IGNvZGUrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXJyb3IgPSB0aGlzLl9tYXRjaFBhdHRlcm4oY291bnRlciwgQ09ERV9QQVRURVJOW2NvZGVdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnJvciA8IGJlc3RNYXRjaC5lcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlc3RNYXRjaC5jb2RlID0gY29kZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZXN0TWF0Y2guZXJyb3IgPSBlcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoYmVzdE1hdGNoLmVycm9yIDwgZXBzaWxvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmVzdE1hdGNoLnN0YXJ0ID0gaSAtIHN1bTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlc3RNYXRjaC5lbmQgPSBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmVzdE1hdGNoLmNvcnJlY3Rpb24uYmFyID0gdGhpcy5jYWxjdWxhdGVDb3JyZWN0aW9uKENPREVfUEFUVEVSTltiZXN0TWF0Y2guY29kZV0sIGNvdW50ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTU9EVUxFX0lORElDRVMuYmFyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlc3RNYXRjaC5jb3JyZWN0aW9uLnNwYWNlID0gdGhpcy5jYWxjdWxhdGVDb3JyZWN0aW9uKENPREVfUEFUVEVSTltiZXN0TWF0Y2guY29kZV0sIGNvdW50ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTU9EVUxFX0lORElDRVMuc3BhY2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJlc3RNYXRjaDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgNDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVyW2pdID0gY291bnRlcltqICsgMl07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY291bnRlcls0XSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXJbNV0gPSAwO1xuICAgICAgICAgICAgICAgICAgICBjb3VudGVyUG9zLS07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnRlclBvcysrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb3VudGVyW2NvdW50ZXJQb3NdID0gMTtcbiAgICAgICAgICAgICAgICBpc1doaXRlID0gIWlzV2hpdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgX2RlY29kZSgpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgICAgIGNvbnN0IHN0YXJ0SW5mbyA9IHRoaXMuX2ZpbmRTdGFydCgpO1xuICAgICAgICBsZXQgY29kZSA9IG51bGw7XG4gICAgICAgIGxldCBkb25lID0gZmFsc2U7XG4gICAgICAgIGxldCBtdWx0aXBsaWVyID0gMDtcbiAgICAgICAgbGV0IGNoZWNrc3VtID0gMDtcbiAgICAgICAgbGV0IGNvZGVzZXQ7XG4gICAgICAgIGxldCByYXdSZXN1bHQgPSBbXTtcbiAgICAgICAgbGV0IGRlY29kZWRDb2RlcyA9IFtdO1xuICAgICAgICBsZXQgc2hpZnROZXh0ID0gZmFsc2U7XG4gICAgICAgIGxldCB1bnNoaWZ0O1xuICAgICAgICBsZXQgcmVtb3ZlTGFzdENoYXJhY3RlciA9IHRydWU7XG5cbiAgICAgICAgaWYgKHN0YXJ0SW5mbyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY29kZSA9IHtcbiAgICAgICAgICAgIGNvZGU6IHN0YXJ0SW5mby5jb2RlLFxuICAgICAgICAgICAgc3RhcnQ6IHN0YXJ0SW5mby5zdGFydCxcbiAgICAgICAgICAgIGVuZDogc3RhcnRJbmZvLmVuZCxcbiAgICAgICAgICAgIGNvcnJlY3Rpb246IHtcbiAgICAgICAgICAgICAgICBiYXI6IHN0YXJ0SW5mby5jb3JyZWN0aW9uLmJhcixcbiAgICAgICAgICAgICAgICBzcGFjZTogc3RhcnRJbmZvLmNvcnJlY3Rpb24uc3BhY2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgZGVjb2RlZENvZGVzLnB1c2goY29kZSk7XG4gICAgICAgIGNoZWNrc3VtID0gY29kZS5jb2RlO1xuXG4gICAgICAgIHN3aXRjaCAoY29kZS5jb2RlKSB7XG4gICAgICAgICAgICBjYXNlIFNUQVJUX0NPREVfQTpcbiAgICAgICAgICAgICAgICBjb2Rlc2V0ID0gQ09ERV9BO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBTVEFSVF9DT0RFX0I6XG4gICAgICAgICAgICAgICAgY29kZXNldCA9IENPREVfQjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgU1RBUlRfQ09ERV9DOlxuICAgICAgICAgICAgICAgIGNvZGVzZXQgPSBDT0RFX0M7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgd2hpbGUgKCFkb25lKSB7XG4gICAgICAgICAgICB1bnNoaWZ0ID0gc2hpZnROZXh0O1xuICAgICAgICAgICAgc2hpZnROZXh0ID0gZmFsc2U7XG4gICAgICAgICAgICBjb2RlID0gdGhpcy5fZGVjb2RlQ29kZShjb2RlLmVuZCwgY29kZS5jb3JyZWN0aW9uKTtcbiAgICAgICAgICAgIGlmIChjb2RlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvZGUuY29kZSAhPT0gU1RPUF9DT0RFKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUxhc3RDaGFyYWN0ZXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChjb2RlLmNvZGUgIT09IFNUT1BfQ09ERSkge1xuICAgICAgICAgICAgICAgICAgICByYXdSZXN1bHQucHVzaChjb2RlLmNvZGUpO1xuICAgICAgICAgICAgICAgICAgICBtdWx0aXBsaWVyKys7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrc3VtICs9IG11bHRpcGxpZXIgKiBjb2RlLmNvZGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRlY29kZWRDb2Rlcy5wdXNoKGNvZGUpO1xuXG4gICAgICAgICAgICAgICAgc3dpdGNoIChjb2Rlc2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgQ09ERV9BOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29kZS5jb2RlIDwgNjQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKDMyICsgY29kZS5jb2RlKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNvZGUuY29kZSA8IDk2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlLmNvZGUgLSA2NCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29kZS5jb2RlICE9PSBTVE9QX0NPREUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlTGFzdENoYXJhY3RlciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGNvZGUuY29kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIENPREVfU0hJRlQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlmdE5leHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29kZXNldCA9IENPREVfQjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIENPREVfQjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvZGVzZXQgPSBDT0RFX0I7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBDT0RFX0M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2Rlc2V0ID0gQ09ERV9DO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgU1RPUF9DT0RFOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9uZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXNlIENPREVfQjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvZGUuY29kZSA8IDk2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZSgzMiArIGNvZGUuY29kZSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29kZS5jb2RlICE9PSBTVE9QX0NPREUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlTGFzdENoYXJhY3RlciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGNvZGUuY29kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIENPREVfU0hJRlQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlmdE5leHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29kZXNldCA9IENPREVfQTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIENPREVfQTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvZGVzZXQgPSBDT0RFX0E7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBDT0RFX0M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2Rlc2V0ID0gQ09ERV9DO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgU1RPUF9DT0RFOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9uZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXNlIENPREVfQzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvZGUuY29kZSA8IDEwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGNvZGUuY29kZSA8IDEwID8gJzAnICsgY29kZS5jb2RlIDogY29kZS5jb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvZGUuY29kZSAhPT0gU1RPUF9DT0RFKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZUxhc3RDaGFyYWN0ZXIgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChjb2RlLmNvZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBDT0RFX0E6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2Rlc2V0ID0gQ09ERV9BO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgQ09ERV9COlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29kZXNldCA9IENPREVfQjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFNUT1BfQ09ERTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRvbmUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHVuc2hpZnQpIHtcbiAgICAgICAgICAgICAgICBjb2Rlc2V0ID0gY29kZXNldCA9PT0gQ09ERV9BID8gQ09ERV9CIDogQ09ERV9BO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvZGUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29kZS5lbmQgPSB0aGlzLl9uZXh0VW5zZXQodGhpcy5fcm93LCBjb2RlLmVuZCk7XG4gICAgICAgIGlmICghdGhpcy5fdmVyaWZ5VHJhaWxpbmdXaGl0ZXNwYWNlKGNvZGUpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNoZWNrc3VtIC09IG11bHRpcGxpZXIgKiByYXdSZXN1bHRbcmF3UmVzdWx0Lmxlbmd0aCAtIDFdO1xuICAgICAgICBpZiAoY2hlY2tzdW0gJSAxMDMgIT09IHJhd1Jlc3VsdFtyYXdSZXN1bHQubGVuZ3RoIC0gMV0pIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFyZXN1bHQubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHJlbW92ZSBsYXN0IGNvZGUgZnJvbSByZXN1bHQgKGNoZWNrc3VtKVxuICAgICAgICBpZiAocmVtb3ZlTGFzdENoYXJhY3Rlcikge1xuICAgICAgICAgICAgcmVzdWx0LnNwbGljZShyZXN1bHQubGVuZ3RoIC0gMSwgMSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29kZTogcmVzdWx0LmpvaW4oJycpLFxuICAgICAgICAgICAgc3RhcnQ6IHN0YXJ0SW5mby5zdGFydCxcbiAgICAgICAgICAgIGVuZDogY29kZS5lbmQsXG4gICAgICAgICAgICBjb2Rlc2V0LFxuICAgICAgICAgICAgc3RhcnRJbmZvLFxuICAgICAgICAgICAgZGVjb2RlZENvZGVzLFxuICAgICAgICAgICAgZW5kSW5mbzogY29kZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIF92ZXJpZnlUcmFpbGluZ1doaXRlc3BhY2UoZW5kSW5mbykge1xuICAgICAgICBsZXQgdHJhaWxpbmdXaGl0ZXNwYWNlRW5kID0gZW5kSW5mby5lbmQgKyAoKGVuZEluZm8uZW5kIC0gZW5kSW5mby5zdGFydCkgLyAyKTtcbiAgICAgICAgaWYgKHRyYWlsaW5nV2hpdGVzcGFjZUVuZCA8IHRoaXMuX3Jvdy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9tYXRjaFJhbmdlKGVuZEluZm8uZW5kLCB0cmFpbGluZ1doaXRlc3BhY2VFbmQsIDApKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVuZEluZm87XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY2FsY3VsYXRlQ29ycmVjdGlvbihleHBlY3RlZCwgbm9ybWFsaXplZCwgaW5kaWNlcykge1xuICAgICAgICBsZXQgc3VtTm9ybWFsaXplZCA9IDA7XG4gICAgICAgIGxldCBzdW1FeHBlY3RlZCA9IDA7XG5cbiAgICAgICAgZm9yIChsZXQgbGVuZ3RoID0gaW5kaWNlcy5sZW5ndGg7IGxlbmd0aC0tOykge1xuICAgICAgICAgICAgc3VtRXhwZWN0ZWQgKz0gZXhwZWN0ZWRbaW5kaWNlc1tsZW5ndGhdXTtcbiAgICAgICAgICAgIHN1bU5vcm1hbGl6ZWQgKz0gbm9ybWFsaXplZFtpbmRpY2VzW2xlbmd0aF1dO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1bUV4cGVjdGVkIC8gc3VtTm9ybWFsaXplZDtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBCYXJjb2RlUmVhZGVyIH0gZnJvbSAnLi9iYXJjb2RlX3JlYWRlcic7XG5cbmNvbnN0IEFTVEVSSVNLID0gMHgwOTQ7XG5jb25zdCBBTFBIQUJFVEhfU1RSSU5HID0gJzAxMjM0NTY3ODlBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWi0uICokLyslJztcbmNvbnN0IEFMUEhBQkVUID0gWy4uLkFMUEhBQkVUSF9TVFJJTkddLm1hcChjaGFyID0+IGNoYXIuY2hhckNvZGVBdCgwKSk7XG4vLyBjb25zdCBBTFBIQUJFVCA9IFs0OCwgNDksIDUwLCA1MSwgNTIsIDUzLCA1NCwgNTUsIDU2LCA1NywgNjUsIDY2LCA2NywgNjgsIDY5LCA3MCwgNzEsIDcyLCA3MywgNzQsIDc1LCA3NiwgNzcsIDc4LFxuLy8gICAgIDc5LCA4MCwgODEsIDgyLCA4MywgODQsIDg1LCA4NiwgODcsIDg4LCA4OSwgOTAsIDQ1LCA0NiwgMzIsIDQyLCAzNiwgNDcsIDQzLCAzN107XG5jb25zdCBDSEFSQUNURVJfRU5DT0RJTkdTID0gWzB4MDM0LCAweDEyMSwgMHgwNjEsIDB4MTYwLCAweDAzMSwgMHgxMzAsIDB4MDcwLCAweDAyNSwgMHgxMjQsIDB4MDY0LCAweDEwOSwgMHgwNDksXG4gICAgMHgxNDgsIDB4MDE5LCAweDExOCwgMHgwNTgsIDB4MDBELCAweDEwQywgMHgwNEMsIDB4MDFDLCAweDEwMywgMHgwNDMsIDB4MTQyLCAweDAxMywgMHgxMTIsIDB4MDUyLCAweDAwNywgMHgxMDYsXG4gICAgMHgwNDYsIDB4MDE2LCAweDE4MSwgMHgwQzEsIDB4MUMwLCAweDA5MSwgMHgxOTAsIDB4MEQwLCAweDA4NSwgMHgxODQsIDB4MEM0LCAweDA5NCwgMHgwQTgsIDB4MEEyLCAweDA4QSwgMHgwMkFcbl07XG5cbmV4cG9ydCBjbGFzcyBDb2RlMzlSZWFkZXIgZXh0ZW5kcyBCYXJjb2RlUmVhZGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLl9mb3JtYXQgPSAnY29kZV8zOSc7XG4gICAgfVxuXG4gICAgX2RlY29kZSgpIHtcbiAgICAgICAgY29uc3Qgc3RhcnQgPSB0aGlzLl9maW5kU3RhcnQoKTtcblxuICAgICAgICBpZiAoIXN0YXJ0KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgICAgICBsZXQgY291bnRlcnMgPSBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF07XG4gICAgICAgIGxldCBkZWNvZGVkQ2hhcjtcbiAgICAgICAgbGV0IGxhc3RTdGFydDtcbiAgICAgICAgbGV0IG5leHRTdGFydCA9IHRoaXMuX25leHRTZXQodGhpcy5fcm93LCBzdGFydC5lbmQpO1xuXG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIGNvdW50ZXJzID0gdGhpcy5fdG9Db3VudGVycyhuZXh0U3RhcnQsIGNvdW50ZXJzKTtcbiAgICAgICAgICAgIGNvbnN0IHBhdHRlcm4gPSB0aGlzLl90b1BhdHRlcm4oY291bnRlcnMpO1xuICAgICAgICAgICAgaWYgKHBhdHRlcm4gPCAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWNvZGVkQ2hhciA9IHRoaXMuX3BhdHRlcm5Ub0NoYXIocGF0dGVybik7XG4gICAgICAgICAgICBpZiAoZGVjb2RlZENoYXIgPCAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaChkZWNvZGVkQ2hhcik7XG4gICAgICAgICAgICBsYXN0U3RhcnQgPSBuZXh0U3RhcnQ7XG4gICAgICAgICAgICBuZXh0U3RhcnQgKz0gY291bnRlcnMucmVkdWNlKChzdW0sIGl0ZW0pID0+IHN1bSArIGl0ZW0sIDApO1xuICAgICAgICAgICAgbmV4dFN0YXJ0ID0gdGhpcy5fbmV4dFNldCh0aGlzLl9yb3csIG5leHRTdGFydCk7XG4gICAgICAgIH0gd2hpbGUgKGRlY29kZWRDaGFyICE9PSAnKicpO1xuICAgICAgICByZXN1bHQucG9wKCk7XG5cbiAgICAgICAgaWYgKCFyZXN1bHQubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5fdmVyaWZ5VHJhaWxpbmdXaGl0ZXNwYWNlKGxhc3RTdGFydCwgbmV4dFN0YXJ0LCBjb3VudGVycykpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvZGU6IHJlc3VsdC5qb2luKCcnKSxcbiAgICAgICAgICAgIHN0YXJ0OiBzdGFydC5zdGFydCxcbiAgICAgICAgICAgIGVuZDogbmV4dFN0YXJ0LFxuICAgICAgICAgICAgc3RhcnRJbmZvOiBzdGFydCxcbiAgICAgICAgICAgIGRlY29kZWRDb2RlczogcmVzdWx0XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgX3ZlcmlmeVRyYWlsaW5nV2hpdGVzcGFjZShsYXN0U3RhcnQsIG5leHRTdGFydCwgY291bnRlcnMpIHtcbiAgICAgICAgY29uc3QgcGF0dGVyblNpemUgPSBjb3VudGVycy5yZWR1Y2UoKHN1bSwgaXRlbSkgPT4gc3VtICsgaXRlbSwgMCk7XG4gICAgICAgIGNvbnN0IHRyYWlsaW5nV2hpdGVzcGFjZUVuZCA9IG5leHRTdGFydCAtIGxhc3RTdGFydCAtIHBhdHRlcm5TaXplO1xuICAgICAgICByZXR1cm4gKHRyYWlsaW5nV2hpdGVzcGFjZUVuZCAqIDMpID49IHBhdHRlcm5TaXplO1xuICAgIH1cblxuICAgIF9wYXR0ZXJuVG9DaGFyKHBhdHRlcm4pIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBDSEFSQUNURVJfRU5DT0RJTkdTLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoQ0hBUkFDVEVSX0VOQ09ESU5HU1tpXSA9PT0gcGF0dGVybikge1xuICAgICAgICAgICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKEFMUEhBQkVUW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLTE7XG4gICAgfVxuXG4gICAgX2ZpbmROZXh0V2lkdGgoY291bnRlcnMsIGN1cnJlbnQpIHtcbiAgICAgICAgbGV0IG1pbldpZHRoID0gTnVtYmVyLk1BWF9WQUxVRTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoY291bnRlcnNbaV0gPCBtaW5XaWR0aCAmJiBjb3VudGVyc1tpXSA+IGN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICBtaW5XaWR0aCA9IGNvdW50ZXJzW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG1pbldpZHRoO1xuICAgIH1cblxuICAgIF90b1BhdHRlcm4oY291bnRlcnMpIHtcbiAgICAgICAgY29uc3QgbnVtQ291bnRlcnMgPSBjb3VudGVycy5sZW5ndGg7XG4gICAgICAgIGxldCBtYXhOYXJyb3dXaWR0aCA9IDA7XG4gICAgICAgIGxldCBudW1XaWRlQmFycyA9IG51bUNvdW50ZXJzO1xuICAgICAgICBsZXQgd2lkZUJhcldpZHRoID0gMDtcbiAgICAgICAgbGV0IHBhdHRlcm47XG5cbiAgICAgICAgd2hpbGUgKG51bVdpZGVCYXJzID4gMykge1xuICAgICAgICAgICAgbWF4TmFycm93V2lkdGggPSB0aGlzLl9maW5kTmV4dFdpZHRoKGNvdW50ZXJzLCBtYXhOYXJyb3dXaWR0aCk7XG4gICAgICAgICAgICBudW1XaWRlQmFycyA9IDA7XG4gICAgICAgICAgICBwYXR0ZXJuID0gMDtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtQ291bnRlcnM7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChjb3VudGVyc1tpXSA+IG1heE5hcnJvd1dpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm4gfD0gMSA8PCAobnVtQ291bnRlcnMgLSAxIC0gaSk7XG4gICAgICAgICAgICAgICAgICAgIG51bVdpZGVCYXJzKys7XG4gICAgICAgICAgICAgICAgICAgIHdpZGVCYXJXaWR0aCArPSBjb3VudGVyc1tpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChudW1XaWRlQmFycyA9PT0gMykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtQ291bnRlcnMgJiYgbnVtV2lkZUJhcnMgPiAwOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ZXJzW2ldID4gbWF4TmFycm93V2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bVdpZGVCYXJzLS07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKGNvdW50ZXJzW2ldICogMikgPj0gd2lkZUJhcldpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBwYXR0ZXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG5cbiAgICBfZmluZFN0YXJ0KCkge1xuICAgICAgICBjb25zdCBvZmZzZXQgPSB0aGlzLl9uZXh0U2V0KHRoaXMuX3Jvdyk7XG4gICAgICAgIGxldCBwYXR0ZXJuU3RhcnQgPSBvZmZzZXQ7XG4gICAgICAgIGNvbnN0IGNvdW50ZXIgPSBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF07XG4gICAgICAgIGxldCBjb3VudGVyUG9zID0gMDtcbiAgICAgICAgbGV0IGlzV2hpdGUgPSBmYWxzZTtcbiAgICAgICAgbGV0IHdoaXRlU3BhY2VNdXN0U3RhcnQ7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IG9mZnNldDsgaSA8IHRoaXMuX3Jvdy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3Jvd1tpXSBeIGlzV2hpdGUpIHtcbiAgICAgICAgICAgICAgICBjb3VudGVyW2NvdW50ZXJQb3NdKys7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChjb3VudGVyUG9zID09PSBjb3VudGVyLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZmluZCBzdGFydCBwYXR0ZXJuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl90b1BhdHRlcm4oY291bnRlcikgPT09IEFTVEVSSVNLKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZVNwYWNlTXVzdFN0YXJ0ID0gTWF0aC5mbG9vcihNYXRoLm1heCgwLCBwYXR0ZXJuU3RhcnQgLSAoKGkgLSBwYXR0ZXJuU3RhcnQpIC8gNCkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9tYXRjaFJhbmdlKHdoaXRlU3BhY2VNdXN0U3RhcnQsIHBhdHRlcm5TdGFydCwgMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydDogcGF0dGVyblN0YXJ0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcGF0dGVyblN0YXJ0ICs9IGNvdW50ZXJbMF0gKyBjb3VudGVyWzFdO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDc7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY291bnRlcltqXSA9IGNvdW50ZXJbaiArIDJdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXJbN10gPSAwO1xuICAgICAgICAgICAgICAgICAgICBjb3VudGVyWzhdID0gMDtcbiAgICAgICAgICAgICAgICAgICAgY291bnRlclBvcy0tO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXJQb3MrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY291bnRlcltjb3VudGVyUG9zXSA9IDE7XG4gICAgICAgICAgICAgICAgaXNXaGl0ZSA9ICFpc1doaXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvZGUzOVJlYWRlciB9IGZyb20gJy4vY29kZV8zOV9yZWFkZXInO1xuXG5leHBvcnQgY2xhc3MgQ29kZTM5VklOUmVhZGVyIGV4dGVuZHMgQ29kZTM5UmVhZGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLl9mb3JtYXQgPSAnY29kZV8zOV92aW4nO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBib3Jyb3dzXG4gICAgICogaHR0cHM6Ly9naXRodWIuY29tL3p4aW5nL3p4aW5nL2Jsb2IvbWFzdGVyL2NvcmUvc3JjL21haW4vamF2YS9jb20vZ29vZ2xlL3p4aW5nL2NsaWVudC9yZXN1bHQvVklOUmVzdWx0UGFyc2VyLmphdmFcbiAgICAgKi9cbiAgICBfZGVjb2RlKCkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZGVjb2RlKCk7XG4gICAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjb2RlID0gcmVzdWx0LmNvZGU7XG5cbiAgICAgICAgaWYgKCFjb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvZGUgPSBjb2RlLnJlcGxhY2UoL1tJT1FdL2csICcnKTtcblxuICAgICAgICBpZiAoIS9bQS1aMC05XXsxN30vLnRlc3QoY29kZSkpIHtcbiAgICAgICAgICAgIGlmIChFTlYuZGV2ZWxvcG1lbnQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRmFpbGVkIEFaMDkgcGF0dGVybiBjb2RlOicsIGNvZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuX2NoZWNrQ2hlY2tzdW0oY29kZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzdWx0LmNvZGUgPSBjb2RlO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIF9jaGVja0NoZWNrc3VtKGNvZGUpIHtcbiAgICAgICAgLy8gVE9ET1xuICAgICAgICByZXR1cm4gISFjb2RlO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEJhcmNvZGVSZWFkZXIgfSBmcm9tICcuL2JhcmNvZGVfcmVhZGVyJztcblxuY29uc3QgQUxQSEFCRVRIX1NUUklORyA9ICcwMTIzNDU2Nzg5QUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVotLiAkLyslYWJjZConO1xuY29uc3QgQUxQSEFCRVQgPSBbLi4uQUxQSEFCRVRIX1NUUklOR10ubWFwKGNoYXIgPT4gY2hhci5jaGFyQ29kZUF0KDApKTtcbmNvbnN0IENIQVJBQ1RFUl9FTkNPRElOR1MgPSBbXG4gICAgMHgxMTQsIDB4MTQ4LCAweDE0NCwgMHgxNDIsIDB4MTI4LCAweDEyNCwgMHgxMjIsIDB4MTUwLCAweDExMiwgMHgxMEEsXG4gICAgMHgxQTgsIDB4MUE0LCAweDFBMiwgMHgxOTQsIDB4MTkyLCAweDE4QSwgMHgxNjgsIDB4MTY0LCAweDE2MiwgMHgxMzQsXG4gICAgMHgxMUEsIDB4MTU4LCAweDE0QywgMHgxNDYsIDB4MTJDLCAweDExNiwgMHgxQjQsIDB4MUIyLCAweDFBQywgMHgxQTYsXG4gICAgMHgxOTYsIDB4MTlBLCAweDE2QywgMHgxNjYsIDB4MTM2LCAweDEzQSwgMHgxMkUsIDB4MUQ0LCAweDFEMiwgMHgxQ0EsXG4gICAgMHgxNkUsIDB4MTc2LCAweDFBRSwgMHgxMjYsIDB4MURBLCAweDFENiwgMHgxMzIsIDB4MTVFXG5dO1xuY29uc3QgQVNURVJJU0sgPSAweDE1RTtcblxuZXhwb3J0IGNsYXNzIENvZGU5M1JlYWRlciBleHRlbmRzIEJhcmNvZGVSZWFkZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuX2Zvcm1hdCA9ICdjb2RlXzkzJztcbiAgICB9XG5cbiAgICBfZGVjb2RlKCkge1xuICAgICAgICBjb25zdCBzdGFydCA9IHRoaXMuX2ZpbmRTdGFydCgpO1xuXG4gICAgICAgIGlmICghc3RhcnQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xuICAgICAgICBsZXQgY291bnRlcnMgPSBbMCwgMCwgMCwgMCwgMCwgMF07XG4gICAgICAgIGxldCBkZWNvZGVkQ2hhcjtcbiAgICAgICAgbGV0IGxhc3RTdGFydDtcbiAgICAgICAgbGV0IG5leHRTdGFydCA9IHRoaXMuX25leHRTZXQodGhpcy5fcm93LCBzdGFydC5lbmQpO1xuXG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIGNvdW50ZXJzID0gdGhpcy5fdG9Db3VudGVycyhuZXh0U3RhcnQsIGNvdW50ZXJzKTtcbiAgICAgICAgICAgIGNvbnN0IHBhdHRlcm4gPSB0aGlzLl90b1BhdHRlcm4oY291bnRlcnMpO1xuICAgICAgICAgICAgaWYgKHBhdHRlcm4gPCAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWNvZGVkQ2hhciA9IHRoaXMuX3BhdHRlcm5Ub0NoYXIocGF0dGVybik7XG4gICAgICAgICAgICBpZiAoZGVjb2RlZENoYXIgPCAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaChkZWNvZGVkQ2hhcik7XG4gICAgICAgICAgICBsYXN0U3RhcnQgPSBuZXh0U3RhcnQ7XG4gICAgICAgICAgICBuZXh0U3RhcnQgKz0gY291bnRlcnMucmVkdWNlKChzdW0sIGl0ZW0pID0+IHN1bSArIGl0ZW0sIDApO1xuICAgICAgICAgICAgbmV4dFN0YXJ0ID0gdGhpcy5fbmV4dFNldCh0aGlzLl9yb3csIG5leHRTdGFydCk7XG4gICAgICAgIH0gd2hpbGUgKGRlY29kZWRDaGFyICE9PSAnKicpO1xuICAgICAgICByZXN1bHQucG9wKCk7XG5cbiAgICAgICAgaWYgKCFyZXN1bHQubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5fdmVyaWZ5RW5kKGxhc3RTdGFydCwgbmV4dFN0YXJ0LCBjb3VudGVycykpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLl92ZXJpZnlDaGVja3N1bXMocmVzdWx0KSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXN1bHQgPSByZXN1bHQuc2xpY2UoMCwgcmVzdWx0Lmxlbmd0aCAtIDIpO1xuICAgICAgICBpZiAoKHJlc3VsdCA9IHRoaXMuX2RlY29kZUV4dGVuZGVkKHJlc3VsdCkpID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb2RlOiByZXN1bHQuam9pbignJyksXG4gICAgICAgICAgICBzdGFydDogc3RhcnQuc3RhcnQsXG4gICAgICAgICAgICBlbmQ6IG5leHRTdGFydCxcbiAgICAgICAgICAgIHN0YXJ0SW5mbzogc3RhcnQsXG4gICAgICAgICAgICBkZWNvZGVkQ29kZXM6IHJlc3VsdFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIF92ZXJpZnlFbmQobGFzdFN0YXJ0LCBuZXh0U3RhcnQpIHtcbiAgICAgICAgaWYgKGxhc3RTdGFydCA9PT0gbmV4dFN0YXJ0IHx8ICF0aGlzLl9yb3dbbmV4dFN0YXJ0XSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIF9wYXR0ZXJuVG9DaGFyKHBhdHRlcm4pIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBDSEFSQUNURVJfRU5DT0RJTkdTLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoQ0hBUkFDVEVSX0VOQ09ESU5HU1tpXSA9PT0gcGF0dGVybikge1xuICAgICAgICAgICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKEFMUEhBQkVUW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLTE7XG4gICAgfVxuXG4gICAgX3RvUGF0dGVybihjb3VudGVycykge1xuICAgICAgICBjb25zdCBudW1Db3VudGVycyA9IGNvdW50ZXJzLmxlbmd0aDtcbiAgICAgICAgbGV0IHBhdHRlcm4gPSAwO1xuICAgICAgICBsZXQgc3VtID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1Db3VudGVyczsgaSsrKSB7XG4gICAgICAgICAgICBzdW0gKz0gY291bnRlcnNbaV07XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bUNvdW50ZXJzOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBub3JtYWxpemVkID0gTWF0aC5yb3VuZChjb3VudGVyc1tpXSAqIDkgLyBzdW0pO1xuICAgICAgICAgICAgaWYgKG5vcm1hbGl6ZWQgPCAxIHx8IG5vcm1hbGl6ZWQgPiA0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKChpICYgMSkgPT09IDApIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG5vcm1hbGl6ZWQ7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuID0gKHBhdHRlcm4gPDwgMSkgfCAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGF0dGVybiA8PD0gbm9ybWFsaXplZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYXR0ZXJuO1xuICAgIH1cblxuICAgIF9maW5kU3RhcnQoKSB7XG4gICAgICAgIGNvbnN0IGNvdW50ZXIgPSBbMCwgMCwgMCwgMCwgMCwgMF07XG4gICAgICAgIGNvbnN0IG9mZnNldCA9IHRoaXMuX25leHRTZXQodGhpcy5fcm93KTtcbiAgICAgICAgbGV0IHBhdHRlcm5TdGFydCA9IG9mZnNldDtcbiAgICAgICAgbGV0IGNvdW50ZXJQb3MgPSAwO1xuICAgICAgICBsZXQgaXNXaGl0ZSA9IGZhbHNlO1xuICAgICAgICBsZXQgd2hpdGVTcGFjZU11c3RTdGFydDtcblxuICAgICAgICBmb3IgKGxldCBpID0gb2Zmc2V0OyBpIDwgdGhpcy5fcm93Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fcm93W2ldIF4gaXNXaGl0ZSkge1xuICAgICAgICAgICAgICAgIGNvdW50ZXJbY291bnRlclBvc10rKztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvdW50ZXJQb3MgPT09IGNvdW50ZXIubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBmaW5kIHN0YXJ0IHBhdHRlcm5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3RvUGF0dGVybihjb3VudGVyKSA9PT0gQVNURVJJU0spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlU3BhY2VNdXN0U3RhcnQgPSBNYXRoLmZsb29yKE1hdGgubWF4KDAsIHBhdHRlcm5TdGFydCAtICgoaSAtIHBhdHRlcm5TdGFydCkgLyA0KSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX21hdGNoUmFuZ2Uod2hpdGVTcGFjZU11c3RTdGFydCwgcGF0dGVyblN0YXJ0LCAwKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBwYXR0ZXJuU3RhcnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuU3RhcnQgKz0gY291bnRlclswXSArIGNvdW50ZXJbMV07XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgNDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVyW2pdID0gY291bnRlcltqICsgMl07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY291bnRlcls0XSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXJbNV0gPSAwO1xuICAgICAgICAgICAgICAgICAgICBjb3VudGVyUG9zLS07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnRlclBvcysrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb3VudGVyW2NvdW50ZXJQb3NdID0gMTtcbiAgICAgICAgICAgICAgICBpc1doaXRlID0gIWlzV2hpdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgX2RlY29kZUV4dGVuZGVkKGNoYXJBcnJheSkge1xuICAgICAgICBjb25zdCBsZW5ndGggPSBjaGFyQXJyYXkubGVuZ3RoO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY2hhciA9IGNoYXJBcnJheVtpXTtcbiAgICAgICAgICAgIGlmIChjaGFyID49ICdhJyAmJiBjaGFyIDw9ICdkJykge1xuICAgICAgICAgICAgICAgIGlmIChpID4gKGxlbmd0aCAtIDIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBuZXh0Q2hhciA9IGNoYXJBcnJheVsrK2ldO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5leHRDaGFyQ29kZSA9IG5leHRDaGFyLmNoYXJDb2RlQXQoMCk7XG4gICAgICAgICAgICAgICAgbGV0IGRlY29kZWRDaGFyO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoY2hhcikge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdhJzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRDaGFyID49ICdBJyAmJiBuZXh0Q2hhciA8PSAnWicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNvZGVkQ2hhciA9IFN0cmluZy5mcm9tQ2hhckNvZGUobmV4dENoYXJDb2RlIC0gNjQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2InOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV4dENoYXIgPj0gJ0EnICYmIG5leHRDaGFyIDw9ICdFJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY29kZWRDaGFyID0gU3RyaW5nLmZyb21DaGFyQ29kZShuZXh0Q2hhckNvZGUgLSAzOCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG5leHRDaGFyID49ICdGJyAmJiBuZXh0Q2hhciA8PSAnSicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNvZGVkQ2hhciA9IFN0cmluZy5mcm9tQ2hhckNvZGUobmV4dENoYXJDb2RlIC0gMTEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChuZXh0Q2hhciA+PSAnSycgJiYgbmV4dENoYXIgPD0gJ08nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjb2RlZENoYXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKG5leHRDaGFyQ29kZSArIDE2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobmV4dENoYXIgPj0gJ1AnICYmIG5leHRDaGFyIDw9ICdTJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY29kZWRDaGFyID0gU3RyaW5nLmZyb21DaGFyQ29kZShuZXh0Q2hhckNvZGUgKyA0Myk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG5leHRDaGFyID49ICdUJyAmJiBuZXh0Q2hhciA8PSAnWicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNvZGVkQ2hhciA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMTI3KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXNlICdjJzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRDaGFyID49ICdBJyAmJiBuZXh0Q2hhciA8PSAnTycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNvZGVkQ2hhciA9IFN0cmluZy5mcm9tQ2hhckNvZGUobmV4dENoYXJDb2RlIC0gMzIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChuZXh0Q2hhciA9PT0gJ1onKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjb2RlZENoYXIgPSAnOic7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZCc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXh0Q2hhciA+PSAnQScgJiYgbmV4dENoYXIgPD0gJ1onKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjb2RlZENoYXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKG5leHRDaGFyQ29kZSArIDMyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChkZWNvZGVkQ2hhcik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGNoYXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgX3ZlcmlmeUNoZWNrc3VtcyhjaGFyQXJyYXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hdGNoQ2hlY2tDaGFyKGNoYXJBcnJheSwgY2hhckFycmF5Lmxlbmd0aCAtIDIsIDIwKVxuICAgICAgICAgICAgJiYgdGhpcy5fbWF0Y2hDaGVja0NoYXIoY2hhckFycmF5LCBjaGFyQXJyYXkubGVuZ3RoIC0gMSwgMTUpO1xuICAgIH1cblxuICAgIF9tYXRjaENoZWNrQ2hhcihjaGFyQXJyYXksIGluZGV4LCBtYXhXZWlnaHQpIHtcbiAgICAgICAgY29uc3QgYXJyYXlUb0NoZWNrID0gY2hhckFycmF5LnNsaWNlKDAsIGluZGV4KTtcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gYXJyYXlUb0NoZWNrLmxlbmd0aDtcbiAgICAgICAgY29uc3Qgd2VpZ2h0ZWRTdW1zID0gYXJyYXlUb0NoZWNrLnJlZHVjZSgoc3VtLCBjaGFyLCBpKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB3ZWlnaHQgPSAoKChpICogLTEpICsgKGxlbmd0aCAtIDEpKSAlIG1heFdlaWdodCkgKyAxO1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBBTFBIQUJFVC5pbmRleE9mKGNoYXIuY2hhckNvZGVBdCgwKSk7XG4gICAgICAgICAgICByZXR1cm4gc3VtICsgKHdlaWdodCAqIHZhbHVlKTtcbiAgICAgICAgfSwgMCk7XG5cbiAgICAgICAgY29uc3QgY2hlY2tDaGFyID0gQUxQSEFCRVRbKHdlaWdodGVkU3VtcyAlIDQ3KV07XG4gICAgICAgIHJldHVybiBjaGVja0NoYXIgPT09IGNoYXJBcnJheVtpbmRleF0uY2hhckNvZGVBdCgwKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBFQU5SZWFkZXIgfSBmcm9tICcuL2Vhbl9yZWFkZXInO1xuXG5leHBvcnQgY2xhc3MgRUFOMlJlYWRlciBleHRlbmRzIEVBTlJlYWRlciB7XG4gICAgY29uc3RydWN0b3IoY29uZmlnLCBzdXBwbGVtZW50cykge1xuICAgICAgICBzdXBlcihjb25maWcsIHN1cHBsZW1lbnRzKTtcblxuICAgICAgICB0aGlzLl9mb3JtYXQgPSAnZWFuXzInO1xuICAgIH1cblxuICAgIGRlY29kZShyb3csIHN0YXJ0KSB7XG4gICAgICAgIGNvbnN0IGVuZCA9IHJvdy5sZW5ndGg7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgICAgICBjb25zdCBkZWNvZGVkQ29kZXMgPSBbXTtcbiAgICAgICAgbGV0IG9mZnNldCA9IHN0YXJ0O1xuICAgICAgICBsZXQgY29kZUZyZXF1ZW5jeSA9IDA7XG4gICAgICAgIGxldCBjb2RlO1xuXG4gICAgICAgIHRoaXMuX3JvdyA9IHJvdztcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDIgJiYgb2Zmc2V0IDwgZW5kOyBpKyspIHtcbiAgICAgICAgICAgIGNvZGUgPSB0aGlzLl9kZWNvZGVDb2RlKG9mZnNldCk7XG4gICAgICAgICAgICBpZiAoIWNvZGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlY29kZWRDb2Rlcy5wdXNoKGNvZGUpO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goY29kZS5jb2RlICUgMTApO1xuICAgICAgICAgICAgaWYgKGNvZGUuY29kZSA+PSB0aGlzLkNPREVfR19TVEFSVCkge1xuICAgICAgICAgICAgICAgIGNvZGVGcmVxdWVuY3kgfD0gMSA8PCAoMSAtIGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGkgIT09IDEpIHtcbiAgICAgICAgICAgICAgICBvZmZzZXQgPSB0aGlzLl9uZXh0U2V0KHRoaXMuX3JvdywgY29kZS5lbmQpO1xuICAgICAgICAgICAgICAgIG9mZnNldCA9IHRoaXMuX25leHRVbnNldCh0aGlzLl9yb3csIG9mZnNldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVzdWx0Lmxlbmd0aCAhPT0gMiB8fCAocGFyc2VJbnQocmVzdWx0LmpvaW4oJycpKSAlIDQpICE9PSBjb2RlRnJlcXVlbmN5KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb2RlOiByZXN1bHQuam9pbignJyksXG4gICAgICAgICAgICBkZWNvZGVkQ29kZXMsXG4gICAgICAgICAgICBlbmQ6IGNvZGUuZW5kXG4gICAgICAgIH07XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgRUFOUmVhZGVyIH0gZnJvbSAnLi9lYW5fcmVhZGVyJztcblxuZXhwb3J0IGNsYXNzIEVBTjVSZWFkZXIgZXh0ZW5kcyBFQU5SZWFkZXIge1xuICAgIGdldCBDSEVDS19ESUdJVF9FTkNPRElOR1MoKSB7XG4gICAgICAgIHJldHVybiBbMjQsIDIwLCAxOCwgMTcsIDEyLCA2LCAzLCAxMCwgOSwgNV07XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoY29uZmlnLCBzdXBwbGVtZW50cykge1xuICAgICAgICBzdXBlcihjb25maWcsIHN1cHBsZW1lbnRzKTtcblxuICAgICAgICB0aGlzLl9mb3JtYXQgPSAnZWFuXzUnO1xuICAgIH1cblxuICAgIGRlY29kZShyb3csIHN0YXJ0KSB7XG4gICAgICAgIGNvbnN0IGVuZCA9IHJvdy5sZW5ndGg7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgICAgICBjb25zdCBkZWNvZGVkQ29kZXMgPSBbXTtcbiAgICAgICAgbGV0IGNvZGVGcmVxdWVuY3kgPSAwO1xuICAgICAgICBsZXQgb2Zmc2V0ID0gc3RhcnQ7XG4gICAgICAgIGxldCBjb2RlO1xuXG4gICAgICAgIHRoaXMuX3JvdyA9IHJvdztcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDUgJiYgb2Zmc2V0IDwgZW5kOyBpKyspIHtcbiAgICAgICAgICAgIGNvZGUgPSB0aGlzLl9kZWNvZGVDb2RlKG9mZnNldCk7XG4gICAgICAgICAgICBpZiAoIWNvZGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlY29kZWRDb2Rlcy5wdXNoKGNvZGUpO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goY29kZS5jb2RlICUgMTApO1xuICAgICAgICAgICAgaWYgKGNvZGUuY29kZSA+PSB0aGlzLkNPREVfR19TVEFSVCkge1xuICAgICAgICAgICAgICAgIGNvZGVGcmVxdWVuY3kgfD0gMSA8PCAoNCAtIGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGkgIT09IDQpIHtcbiAgICAgICAgICAgICAgICBvZmZzZXQgPSB0aGlzLl9uZXh0U2V0KHRoaXMuX3JvdywgY29kZS5lbmQpO1xuICAgICAgICAgICAgICAgIG9mZnNldCA9IHRoaXMuX25leHRVbnNldCh0aGlzLl9yb3csIG9mZnNldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVzdWx0Lmxlbmd0aCAhPT0gNSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fZXh0ZW5zaW9uQ2hlY2tzdW0ocmVzdWx0KSAhPT0gdGhpcy5fZGV0ZXJtaW5lQ2hlY2tEaWdpdChjb2RlRnJlcXVlbmN5KSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29kZTogcmVzdWx0LmpvaW4oJycpLFxuICAgICAgICAgICAgZGVjb2RlZENvZGVzLFxuICAgICAgICAgICAgZW5kOiBjb2RlLmVuZFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIF9kZXRlcm1pbmVDaGVja0RpZ2l0KGNvZGVGcmVxdWVuY3kpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoY29kZUZyZXF1ZW5jeSA9PT0gdGhpcy5DSEVDS19ESUdJVF9FTkNPRElOR1NbaV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cblxuICAgIF9leHRlbnNpb25DaGVja3N1bShyZXN1bHQpIHtcbiAgICAgICAgbGV0IGxlbmd0aCA9IHJlc3VsdC5sZW5ndGg7XG4gICAgICAgIGxldCBzdW0gPSAwO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSBsZW5ndGggLSAyOyBpID49IDA7IGkgLT0gMikge1xuICAgICAgICAgICAgc3VtICs9IHJlc3VsdFtpXTtcbiAgICAgICAgfVxuICAgICAgICBzdW0gKj0gMztcbiAgICAgICAgZm9yIChsZXQgaSA9IGxlbmd0aCAtIDE7IGkgPj0gMDsgaSAtPSAyKSB7XG4gICAgICAgICAgICBzdW0gKz0gcmVzdWx0W2ldO1xuICAgICAgICB9XG4gICAgICAgIHN1bSAqPSAzO1xuXG4gICAgICAgIHJldHVybiBzdW0gJSAxMDtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBFQU5SZWFkZXIgfSBmcm9tICcuL2Vhbl9yZWFkZXInO1xuXG5leHBvcnQgY2xhc3MgRUFOOFJlYWRlciBleHRlbmRzIEVBTlJlYWRlciB7XG4gICAgY29uc3RydWN0b3IoY29uZmlnLCBzdXBwbGVtZW50cykge1xuICAgICAgICBzdXBlcihjb25maWcsIHN1cHBsZW1lbnRzKTtcblxuICAgICAgICB0aGlzLl9mb3JtYXQgPSAnZWFuXzgnO1xuICAgIH1cblxuICAgIF9kZWNvZGVQYXlsb2FkKGNvZGUsIHJlc3VsdCwgZGVjb2RlZENvZGVzKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgICAgICBjb2RlID0gdGhpcy5fZGVjb2RlQ29kZShjb2RlLmVuZCwgdGhpcy5DT0RFX0dfU1RBUlQpO1xuICAgICAgICAgICAgaWYgKCFjb2RlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaChjb2RlLmNvZGUpO1xuICAgICAgICAgICAgZGVjb2RlZENvZGVzLnB1c2goY29kZSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb2RlID0gdGhpcy5fZmluZFBhdHRlcm4odGhpcy5NSURETEVfUEFUVEVSTiwgY29kZS5lbmQsIHRydWUsIGZhbHNlKTtcblxuICAgICAgICBpZiAoY29kZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBkZWNvZGVkQ29kZXMucHVzaChjb2RlKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICAgICAgY29kZSA9IHRoaXMuX2RlY29kZUNvZGUoY29kZS5lbmQsIHRoaXMuQ09ERV9HX1NUQVJUKTtcblxuICAgICAgICAgICAgaWYgKCFjb2RlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRlY29kZWRDb2Rlcy5wdXNoKGNvZGUpO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goY29kZS5jb2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb2RlO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IG1lcmdlIH0gZnJvbSAnLi4vY29tbW9uL21lcmdlJztcbmltcG9ydCB7IEJhcmNvZGVSZWFkZXIgfSBmcm9tICcuL2JhcmNvZGVfcmVhZGVyJztcblxuY29uc3QgRVhURU5TSU9OX1NUQVJUX1BBVFRFUk4gPSBbMSwgMSwgMl07XG5jb25zdCBDT0RFX1BBVFRFUk4gPSBbXG4gICAgWzMsIDIsIDEsIDFdLFxuICAgIFsyLCAyLCAyLCAxXSxcbiAgICBbMiwgMSwgMiwgMl0sXG4gICAgWzEsIDQsIDEsIDFdLFxuICAgIFsxLCAxLCAzLCAyXSxcbiAgICBbMSwgMiwgMywgMV0sXG4gICAgWzEsIDEsIDEsIDRdLFxuICAgIFsxLCAzLCAxLCAyXSxcbiAgICBbMSwgMiwgMSwgM10sXG4gICAgWzMsIDEsIDEsIDJdLFxuICAgIFsxLCAxLCAyLCAzXSxcbiAgICBbMSwgMiwgMiwgMl0sXG4gICAgWzIsIDIsIDEsIDJdLFxuICAgIFsxLCAxLCA0LCAxXSxcbiAgICBbMiwgMywgMSwgMV0sXG4gICAgWzEsIDMsIDIsIDFdLFxuICAgIFs0LCAxLCAxLCAxXSxcbiAgICBbMiwgMSwgMywgMV0sXG4gICAgWzMsIDEsIDIsIDFdLFxuICAgIFsyLCAxLCAxLCAzXVxuXTtcblxuZXhwb3J0IGNsYXNzIEVBTlJlYWRlciBleHRlbmRzIEJhcmNvZGVSZWFkZXIge1xuICAgIGdldCBDT0RFX0xfU1RBUlQoKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIGdldCBDT0RFX0dfU1RBUlQoKSB7XG4gICAgICAgIHJldHVybiAxMDtcbiAgICB9XG5cbiAgICBnZXQgU1RBUlRfUEFUVEVSTigpIHtcbiAgICAgICAgcmV0dXJuIFsxLCAxLCAxXTtcbiAgICB9XG5cbiAgICBnZXQgU1RPUF9QQVRURVJOKCkge1xuICAgICAgICByZXR1cm4gWzEsIDEsIDFdO1xuICAgIH1cblxuICAgIGdldCBNSURETEVfUEFUVEVSTigpIHtcbiAgICAgICAgcmV0dXJuIFsxLCAxLCAxLCAxLCAxXTtcbiAgICB9XG5cbiAgICBnZXQgQ09ERV9GUkVRVUVOQ1koKSB7XG4gICAgICAgIHJldHVybiBbMCwgMTEsIDEzLCAxNCwgMTksIDI1LCAyOCwgMjEsIDIyLCAyNl07XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoY29uZmlnLCBzdXBwbGVtZW50cykge1xuICAgICAgICBzdXBlcihtZXJnZSh7XG4gICAgICAgICAgICBzdXBwbGVtZW50czogW10gLy8gQWxsb3dlZCBleHRlbnNpb25zIHRvIGJlIGRlY29kZWQgKDIgYW5kL29yIDUpXG4gICAgICAgIH0sIGNvbmZpZyksIHN1cHBsZW1lbnRzKTtcblxuICAgICAgICB0aGlzLl9mb3JtYXQgPSAnZWFuXzEzJztcbiAgICAgICAgdGhpcy5fc2luZ2xlQ29kZUVycm9yID0gMC43MDtcbiAgICAgICAgdGhpcy5fYXZlcmFnZUNvZGVFcnJvciA9IDAuNDg7XG4gICAgfVxuXG4gICAgX2RlY29kZUNvZGUoc3RhcnQsIGNvZGVyYW5nZSkge1xuICAgICAgICBjb25zdCBjb3VudGVyID0gWzAsIDAsIDAsIDBdO1xuICAgICAgICBjb25zdCBvZmZzZXQgPSBzdGFydDtcbiAgICAgICAgY29uc3QgYmVzdE1hdGNoID0ge1xuICAgICAgICAgICAgZXJyb3I6IE51bWJlci5NQVhfVkFMVUUsXG4gICAgICAgICAgICBjb2RlOiAtMSxcbiAgICAgICAgICAgIHN0YXJ0OiBzdGFydCxcbiAgICAgICAgICAgIGVuZDogc3RhcnRcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgZXBzaWxvbiA9IHRoaXMuQVZFUkFHRV9DT0RFX0VSUk9SO1xuICAgICAgICBsZXQgaXNXaGl0ZSA9ICF0aGlzLl9yb3dbb2Zmc2V0XTtcbiAgICAgICAgbGV0IGNvdW50ZXJQb3MgPSAwO1xuXG4gICAgICAgIGlmICghY29kZXJhbmdlKSB7XG4gICAgICAgICAgICBjb2RlcmFuZ2UgPSBDT0RFX1BBVFRFUk4ubGVuZ3RoO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IG9mZnNldDsgaSA8IHRoaXMuX3Jvdy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3Jvd1tpXSBeIGlzV2hpdGUpIHtcbiAgICAgICAgICAgICAgICBjb3VudGVyW2NvdW50ZXJQb3NdKys7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChjb3VudGVyUG9zID09PSBjb3VudGVyLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgY29kZSA9IDA7IGNvZGUgPCBjb2RlcmFuZ2U7IGNvZGUrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXJyb3IgPSB0aGlzLl9tYXRjaFBhdHRlcm4oY291bnRlciwgQ09ERV9QQVRURVJOW2NvZGVdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnJvciA8IGJlc3RNYXRjaC5lcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlc3RNYXRjaC5jb2RlID0gY29kZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZXN0TWF0Y2guZXJyb3IgPSBlcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBiZXN0TWF0Y2guZW5kID0gaTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJlc3RNYXRjaC5lcnJvciA+IGVwc2lsb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBiZXN0TWF0Y2g7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnRlclBvcysrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb3VudGVyW2NvdW50ZXJQb3NdID0gMTtcbiAgICAgICAgICAgICAgICBpc1doaXRlID0gIWlzV2hpdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBfZmluZFBhdHRlcm4ocGF0dGVybiwgb2Zmc2V0LCBpc1doaXRlLCB0cnlIYXJkZXIsIGVwc2lsb24pIHtcbiAgICAgICAgY29uc3QgY291bnRlciA9IFtdO1xuICAgICAgICBjb25zdCBiZXN0TWF0Y2ggPSB7XG4gICAgICAgICAgICBlcnJvcjogTnVtYmVyLk1BWF9WQUxVRSxcbiAgICAgICAgICAgIGNvZGU6IC0xLFxuICAgICAgICAgICAgc3RhcnQ6IDAsXG4gICAgICAgICAgICBlbmQ6IDBcbiAgICAgICAgfTtcbiAgICAgICAgbGV0IGNvdW50ZXJQb3MgPSAwO1xuICAgICAgICBsZXQgc3VtO1xuXG4gICAgICAgIGlmICghb2Zmc2V0KSB7XG4gICAgICAgICAgICBvZmZzZXQgPSB0aGlzLl9uZXh0U2V0KHRoaXMuX3Jvdyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNXaGl0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpc1doaXRlID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHJ5SGFyZGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRyeUhhcmRlciA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXBzaWxvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBlcHNpbG9uID0gdGhpcy5BVkVSQUdFX0NPREVfRVJST1I7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdHRlcm4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvdW50ZXJbaV0gPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IG9mZnNldDsgaSA8IHRoaXMuX3Jvdy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3Jvd1tpXSBeIGlzV2hpdGUpIHtcbiAgICAgICAgICAgICAgICBjb3VudGVyW2NvdW50ZXJQb3NdKys7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChjb3VudGVyUG9zID09PSBjb3VudGVyLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgc3VtID0gMDtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb3VudGVyLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdW0gKz0gY291bnRlcltqXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yID0gdGhpcy5fbWF0Y2hQYXR0ZXJuKGNvdW50ZXIsIHBhdHRlcm4pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IgPCBlcHNpbG9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiZXN0TWF0Y2guZXJyb3IgPSBlcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlc3RNYXRjaC5zdGFydCA9IGkgLSBzdW07XG4gICAgICAgICAgICAgICAgICAgICAgICBiZXN0TWF0Y2guZW5kID0gaTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBiZXN0TWF0Y2g7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAodHJ5SGFyZGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvdW50ZXIubGVuZ3RoIC0gMjsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnRlcltqXSA9IGNvdW50ZXJbaiArIDJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY291bnRlcltjb3VudGVyLmxlbmd0aCAtIDJdID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ZXJbY291bnRlci5sZW5ndGggLSAxXSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVyUG9zLS07XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXJQb3MrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY291bnRlcltjb3VudGVyUG9zXSA9IDE7XG4gICAgICAgICAgICAgICAgaXNXaGl0ZSA9ICFpc1doaXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgX2ZpbmRTdGFydCgpIHtcbiAgICAgICAgbGV0IG9mZnNldCA9IHRoaXMuX25leHRTZXQodGhpcy5fcm93KTtcbiAgICAgICAgbGV0IHN0YXJ0SW5mbztcblxuICAgICAgICB3aGlsZSAoIXN0YXJ0SW5mbykge1xuICAgICAgICAgICAgc3RhcnRJbmZvID0gdGhpcy5fZmluZFBhdHRlcm4odGhpcy5TVEFSVF9QQVRURVJOLCBvZmZzZXQpO1xuXG4gICAgICAgICAgICBpZiAoIXN0YXJ0SW5mbykge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBsZWFkaW5nV2hpdGVzcGFjZVN0YXJ0ID0gc3RhcnRJbmZvLnN0YXJ0IC0gKHN0YXJ0SW5mby5lbmQgLSBzdGFydEluZm8uc3RhcnQpO1xuXG4gICAgICAgICAgICBpZiAobGVhZGluZ1doaXRlc3BhY2VTdGFydCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX21hdGNoUmFuZ2UobGVhZGluZ1doaXRlc3BhY2VTdGFydCwgc3RhcnRJbmZvLnN0YXJ0LCAwKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RhcnRJbmZvO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgb2Zmc2V0ID0gc3RhcnRJbmZvLmVuZDtcbiAgICAgICAgICAgIHN0YXJ0SW5mbyA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfdmVyaWZ5VHJhaWxpbmdXaGl0ZXNwYWNlKGVuZEluZm8pIHtcbiAgICAgICAgY29uc3QgdHJhaWxpbmdXaGl0ZXNwYWNlRW5kID0gZW5kSW5mby5lbmQgKyAoZW5kSW5mby5lbmQgLSBlbmRJbmZvLnN0YXJ0KTtcblxuICAgICAgICBpZiAodHJhaWxpbmdXaGl0ZXNwYWNlRW5kIDwgdGhpcy5fcm93Lmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX21hdGNoUmFuZ2UoZW5kSW5mby5lbmQsIHRyYWlsaW5nV2hpdGVzcGFjZUVuZCwgMCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZW5kSW5mbztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIF9maW5kRW5kKG9mZnNldCwgaXNXaGl0ZSkge1xuICAgICAgICBjb25zdCBlbmRJbmZvID0gdGhpcy5fZmluZFBhdHRlcm4odGhpcy5TVE9QX1BBVFRFUk4sIG9mZnNldCwgaXNXaGl0ZSwgZmFsc2UpO1xuXG4gICAgICAgIHJldHVybiBlbmRJbmZvICE9PSBudWxsID8gdGhpcy5fdmVyaWZ5VHJhaWxpbmdXaGl0ZXNwYWNlKGVuZEluZm8pIDogbnVsbDtcbiAgICB9XG5cbiAgICBfY2FsY3VsYXRlRmlyc3REaWdpdChjb2RlRnJlcXVlbmN5KSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5DT0RFX0ZSRVFVRU5DWS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGNvZGVGcmVxdWVuY3kgPT09IHRoaXMuQ09ERV9GUkVRVUVOQ1lbaV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBfZGVjb2RlUGF5bG9hZChjb2RlLCByZXN1bHQsIGRlY29kZWRDb2Rlcykge1xuICAgICAgICBsZXQgY29kZUZyZXF1ZW5jeSA9IDB4MDtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgICAgICAgICAgY29kZSA9IHRoaXMuX2RlY29kZUNvZGUoY29kZS5lbmQpO1xuICAgICAgICAgICAgaWYgKCFjb2RlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY29kZS5jb2RlID49IHRoaXMuQ09ERV9HX1NUQVJUKSB7XG4gICAgICAgICAgICAgICAgY29kZS5jb2RlIC09IHRoaXMuQ09ERV9HX1NUQVJUO1xuICAgICAgICAgICAgICAgIGNvZGVGcmVxdWVuY3kgfD0gMSA8PCAoNSAtIGkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb2RlRnJlcXVlbmN5IHw9IDAgPDwgKDUgLSBpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGNvZGUuY29kZSk7XG4gICAgICAgICAgICBkZWNvZGVkQ29kZXMucHVzaChjb2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGZpcnN0RGlnaXQgPSB0aGlzLl9jYWxjdWxhdGVGaXJzdERpZ2l0KGNvZGVGcmVxdWVuY3kpO1xuXG4gICAgICAgIGlmIChmaXJzdERpZ2l0ID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc3VsdC51bnNoaWZ0KGZpcnN0RGlnaXQpO1xuXG4gICAgICAgIGNvZGUgPSB0aGlzLl9maW5kUGF0dGVybih0aGlzLk1JRERMRV9QQVRURVJOLCBjb2RlLmVuZCwgdHJ1ZSwgZmFsc2UpO1xuXG4gICAgICAgIGlmIChjb2RlID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlY29kZWRDb2Rlcy5wdXNoKGNvZGUpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gICAgICAgICAgICBjb2RlID0gdGhpcy5fZGVjb2RlQ29kZShjb2RlLmVuZCwgdGhpcy5DT0RFX0dfU1RBUlQpO1xuXG4gICAgICAgICAgICBpZiAoIWNvZGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGVjb2RlZENvZGVzLnB1c2goY29kZSk7XG4gICAgICAgICAgICByZXN1bHQucHVzaChjb2RlLmNvZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvZGU7XG4gICAgfVxuXG4gICAgX2RlY29kZSgpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgICAgIGNvbnN0IGRlY29kZWRDb2RlcyA9IFtdO1xuICAgICAgICBsZXQgcmVzdWx0SW5mbyA9IHt9O1xuICAgICAgICBsZXQgc3RhcnRJbmZvID0gdGhpcy5fZmluZFN0YXJ0KCk7XG5cbiAgICAgICAgaWYgKCFzdGFydEluZm8pIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNvZGUgPSB7XG4gICAgICAgICAgICBjb2RlOiBzdGFydEluZm8uY29kZSxcbiAgICAgICAgICAgIHN0YXJ0OiBzdGFydEluZm8uc3RhcnQsXG4gICAgICAgICAgICBlbmQ6IHN0YXJ0SW5mby5lbmRcbiAgICAgICAgfTtcbiAgICAgICAgZGVjb2RlZENvZGVzLnB1c2goY29kZSk7XG5cbiAgICAgICAgY29kZSA9IHRoaXMuX2RlY29kZVBheWxvYWQoY29kZSwgcmVzdWx0LCBkZWNvZGVkQ29kZXMpO1xuXG4gICAgICAgIGlmICghY29kZSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb2RlID0gdGhpcy5fZmluZEVuZChjb2RlLmVuZCwgZmFsc2UpO1xuXG4gICAgICAgIGlmICghY29kZSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBkZWNvZGVkQ29kZXMucHVzaChjb2RlKTtcblxuICAgICAgICAvLyBDaGVja3N1bVxuICAgICAgICBpZiAoIXRoaXMuX2NoZWNrc3VtKHJlc3VsdCkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc3VwcGxlbWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc3QgZXh0ID0gdGhpcy5fZGVjb2RlRXh0ZW5zaW9ucyhjb2RlLmVuZCk7XG4gICAgICAgICAgICBpZiAoIWV4dCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbGFzdENvZGUgPSBleHQuZGVjb2RlZENvZGVzW2V4dC5kZWNvZGVkQ29kZXMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICBjb25zdCBlbmRJbmZvID0ge1xuICAgICAgICAgICAgICAgIHN0YXJ0OiBsYXN0Q29kZS5zdGFydCArICgoKGxhc3RDb2RlLmVuZCAtIGxhc3RDb2RlLnN0YXJ0KSAvIDIpIHwgMCksXG4gICAgICAgICAgICAgICAgZW5kOiBsYXN0Q29kZS5lbmRcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5fdmVyaWZ5VHJhaWxpbmdXaGl0ZXNwYWNlKGVuZEluZm8pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlc3VsdEluZm8gPSB7XG4gICAgICAgICAgICAgICAgc3VwcGxlbWVudDogZXh0LFxuICAgICAgICAgICAgICAgIGNvZGU6IHJlc3VsdC5qb2luKCcnKSArIGV4dC5jb2RlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29kZTogcmVzdWx0LmpvaW4oJycpLFxuICAgICAgICAgICAgc3RhcnQ6IHN0YXJ0SW5mby5zdGFydCxcbiAgICAgICAgICAgIGVuZDogY29kZS5lbmQsXG4gICAgICAgICAgICBjb2Rlc2V0OiAnJyxcbiAgICAgICAgICAgIHN0YXJ0SW5mbyxcbiAgICAgICAgICAgIGRlY29kZWRDb2RlcyxcbiAgICAgICAgICAgIC4uLnJlc3VsdEluZm9cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBfZGVjb2RlRXh0ZW5zaW9ucyhvZmZzZXQpIHtcbiAgICAgICAgY29uc3Qgc3RhcnQgPSB0aGlzLl9uZXh0U2V0KHRoaXMuX3Jvdywgb2Zmc2V0KTtcbiAgICAgICAgY29uc3Qgc3RhcnRJbmZvID0gdGhpcy5fZmluZFBhdHRlcm4oRVhURU5TSU9OX1NUQVJUX1BBVFRFUk4sIHN0YXJ0LCBmYWxzZSwgZmFsc2UpO1xuICAgICAgICBsZXQgcmVzdWx0O1xuXG4gICAgICAgIGlmIChzdGFydEluZm8gPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN1cHBsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLnN1cHBsZW1lbnRzW2ldLmRlY29kZSh0aGlzLl9yb3csIHN0YXJ0SW5mby5lbmQpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGNvZGU6IHJlc3VsdC5jb2RlLFxuICAgICAgICAgICAgICAgICAgICBzdGFydCxcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRJbmZvLFxuICAgICAgICAgICAgICAgICAgICBlbmQ6IHJlc3VsdC5lbmQsXG4gICAgICAgICAgICAgICAgICAgIGNvZGVzZXQ6ICcnLFxuICAgICAgICAgICAgICAgICAgICBkZWNvZGVkQ29kZXM6IHJlc3VsdC5kZWNvZGVkQ29kZXNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgX2NoZWNrc3VtKHJlc3VsdCkge1xuICAgICAgICBsZXQgc3VtID0gMDtcblxuICAgICAgICBmb3IgKGxldCBpID0gcmVzdWx0Lmxlbmd0aCAtIDI7IGkgPj0gMDsgaSAtPSAyKSB7XG4gICAgICAgICAgICBzdW0gKz0gcmVzdWx0W2ldO1xuICAgICAgICB9XG4gICAgICAgIHN1bSAqPSAzO1xuICAgICAgICBmb3IgKGxldCBpID0gcmVzdWx0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaSAtPSAyKSB7XG4gICAgICAgICAgICBzdW0gKz0gcmVzdWx0W2ldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdW0gJSAxMCA9PT0gMDtcbiAgICB9XG59IiwiaW1wb3J0IHsgbWVyZ2UgfSBmcm9tICcuLi9jb21tb24vbWVyZ2UnO1xuaW1wb3J0IHsgQmFyY29kZVJlYWRlciB9IGZyb20gJy4vYmFyY29kZV9yZWFkZXInO1xuXG5jb25zdCBOID0gMTtcbmNvbnN0IFcgPSAzO1xuY29uc3QgU1RBUlRfUEFUVEVSTiA9IFtOLCBOLCBOLCBOXTtcbmNvbnN0IFNUT1BfUEFUVEVSTiA9IFtOLCBOLCBXXTtcbmNvbnN0IENPREVfUEFUVEVSTiA9IFtcbiAgICBbTiwgTiwgVywgVywgTl0sXG4gICAgW1csIE4sIE4sIE4sIFddLFxuICAgIFtOLCBXLCBOLCBOLCBXXSxcbiAgICBbVywgVywgTiwgTiwgTl0sXG4gICAgW04sIE4sIFcsIE4sIFddLFxuICAgIFtXLCBOLCBXLCBOLCBOXSxcbiAgICBbTiwgVywgVywgTiwgTl0sXG4gICAgW04sIE4sIE4sIFcsIFddLFxuICAgIFtXLCBOLCBOLCBXLCBOXSxcbiAgICBbTiwgVywgTiwgVywgTl1cbl07XG5jb25zdCBNQVhfQ09SUkVDVElPTl9GQUNUT1IgPSA1O1xuXG5leHBvcnQgY2xhc3MgSTJvZjVSZWFkZXIgZXh0ZW5kcyBCYXJjb2RlUmVhZGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgICAgc3VwZXIobWVyZ2Uoe1xuICAgICAgICAgICAgbm9ybWFsaXplQmFyU3BhY2VXaWR0aDogZmFsc2UgLy8gTm9ybWFsaXplIHRoZSB3aWR0aCBkaWZmZXJlbmNlIGJldHdlZW4gYmFycyBhbmQgc3BhY2VzXG4gICAgICAgIH0sIGNvbmZpZykpO1xuXG4gICAgICAgIHRoaXMuX2Zvcm1hdCA9ICdpMm9mNSc7XG4gICAgICAgIHRoaXMuX2JhclNwYWNlUmF0aW8gPSBbMSwgMV07XG5cbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLm5vcm1hbGl6ZUJhclNwYWNlV2lkdGgpIHtcbiAgICAgICAgICAgIHRoaXMuX3NpbmdsZUNvZGVFcnJvciA9IDAuMzg7XG4gICAgICAgICAgICB0aGlzLl9hdmVyYWdlQ29kZUVycm9yID0gMC4wOTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3NpbmdsZUNvZGVFcnJvciA9IDAuNzg7XG4gICAgICAgICAgICB0aGlzLl9hdmVyYWdlQ29kZUVycm9yID0gMC4zODtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9tYXRjaFBhdHRlcm4oY291bnRlciwgY29kZSkge1xuICAgICAgICBpZiAodGhpcy5jb25maWcubm9ybWFsaXplQmFyU3BhY2VXaWR0aCkge1xuICAgICAgICAgICAgY29uc3QgY291bnRlclN1bSA9IFswLCAwXTtcbiAgICAgICAgICAgIGNvbnN0IGNvZGVTdW0gPSBbMCwgMF07XG4gICAgICAgICAgICBjb25zdCBjb3JyZWN0aW9uID0gWzAsIDBdO1xuICAgICAgICAgICAgY29uc3QgY29ycmVjdGlvblJhdGlvID0gTUFYX0NPUlJFQ1RJT05fRkFDVE9SO1xuICAgICAgICAgICAgY29uc3QgY29ycmVjdGlvblJhdGlvSW52ZXJzZSA9IDEgLyBjb3JyZWN0aW9uUmF0aW87XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnRlci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvdW50ZXJTdW1baSAlIDJdICs9IGNvdW50ZXJbaV07XG4gICAgICAgICAgICAgICAgY29kZVN1bVtpICUgMl0gKz0gY29kZVtpXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29ycmVjdGlvblswXSA9IGNvZGVTdW1bMF0gLyBjb3VudGVyU3VtWzBdO1xuICAgICAgICAgICAgY29ycmVjdGlvblsxXSA9IGNvZGVTdW1bMV0gLyBjb3VudGVyU3VtWzFdO1xuXG4gICAgICAgICAgICBjb3JyZWN0aW9uWzBdID0gTWF0aC5tYXgoTWF0aC5taW4oY29ycmVjdGlvblswXSwgY29ycmVjdGlvblJhdGlvKSwgY29ycmVjdGlvblJhdGlvSW52ZXJzZSk7XG4gICAgICAgICAgICBjb3JyZWN0aW9uWzFdID0gTWF0aC5tYXgoTWF0aC5taW4oY29ycmVjdGlvblsxXSwgY29ycmVjdGlvblJhdGlvKSwgY29ycmVjdGlvblJhdGlvSW52ZXJzZSk7XG4gICAgICAgICAgICB0aGlzLl9iYXJTcGFjZVJhdGlvID0gY29ycmVjdGlvbjtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY291bnRlcltpXSAqPSB0aGlzLl9iYXJTcGFjZVJhdGlvW2kgJSAyXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdXBlci5fbWF0Y2hQYXR0ZXJuKGNvdW50ZXIsIGNvZGUpO1xuICAgIH1cblxuICAgIF9maW5kUGF0dGVybihwYXR0ZXJuLCBvZmZzZXQsIGlzV2hpdGUsIHRyeUhhcmRlcikge1xuICAgICAgICBjb25zdCBjb3VudGVyID0gW107XG4gICAgICAgIGNvbnN0IGJlc3RNYXRjaCA9IHtcbiAgICAgICAgICAgIGVycm9yOiBOdW1iZXIuTUFYX1ZBTFVFLFxuICAgICAgICAgICAgY29kZTogLTEsXG4gICAgICAgICAgICBzdGFydDogMCxcbiAgICAgICAgICAgIGVuZDogMFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBlcHNpbG9uID0gdGhpcy5BVkVSQUdFX0NPREVfRVJST1I7XG4gICAgICAgIGxldCBjb3VudGVyUG9zID0gMDtcblxuICAgICAgICBpc1doaXRlID0gaXNXaGl0ZSB8fCBmYWxzZTtcbiAgICAgICAgdHJ5SGFyZGVyID0gdHJ5SGFyZGVyIHx8IGZhbHNlO1xuXG4gICAgICAgIGlmICghb2Zmc2V0KSB7XG4gICAgICAgICAgICBvZmZzZXQgPSB0aGlzLl9uZXh0U2V0KHRoaXMuX3Jvdyk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdHRlcm4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvdW50ZXJbaV0gPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IG9mZnNldDsgaSA8IHRoaXMuX3Jvdy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3Jvd1tpXSBeIGlzV2hpdGUpIHtcbiAgICAgICAgICAgICAgICBjb3VudGVyW2NvdW50ZXJQb3NdKys7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChjb3VudGVyUG9zID09PSBjb3VudGVyLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN1bSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY291bnRlci5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3VtICs9IGNvdW50ZXJbal07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXJyb3IgPSB0aGlzLl9tYXRjaFBhdHRlcm4oY291bnRlciwgcGF0dGVybik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnJvciA8IGVwc2lsb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlc3RNYXRjaC5lcnJvciA9IGVycm9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmVzdE1hdGNoLnN0YXJ0ID0gaSAtIHN1bTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlc3RNYXRjaC5lbmQgPSBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJlc3RNYXRjaDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodHJ5SGFyZGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvdW50ZXIubGVuZ3RoIC0gMjsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnRlcltqXSA9IGNvdW50ZXJbaiArIDJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY291bnRlcltjb3VudGVyLmxlbmd0aCAtIDJdID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ZXJbY291bnRlci5sZW5ndGggLSAxXSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVyUG9zLS07XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXJQb3MrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY291bnRlcltjb3VudGVyUG9zXSA9IDE7XG4gICAgICAgICAgICAgICAgaXNXaGl0ZSA9ICFpc1doaXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIF9maW5kU3RhcnQoKSB7XG4gICAgICAgIGxldCBvZmZzZXQgPSB0aGlzLl9uZXh0U2V0KHRoaXMuX3Jvdyk7XG4gICAgICAgIGxldCBzdGFydEluZm87XG4gICAgICAgIGxldCBuYXJyb3dCYXJXaWR0aCA9IDE7XG5cbiAgICAgICAgd2hpbGUgKCFzdGFydEluZm8pIHtcbiAgICAgICAgICAgIHN0YXJ0SW5mbyA9IHRoaXMuX2ZpbmRQYXR0ZXJuKFNUQVJUX1BBVFRFUk4sIG9mZnNldCwgZmFsc2UsIHRydWUpO1xuICAgICAgICAgICAgaWYgKCFzdGFydEluZm8pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5hcnJvd0JhcldpZHRoID0gTWF0aC5mbG9vcigoc3RhcnRJbmZvLmVuZCAtIHN0YXJ0SW5mby5zdGFydCkgLyA0KTtcblxuICAgICAgICAgICAgY29uc3QgbGVhZGluZ1doaXRlc3BhY2VTdGFydCA9IHN0YXJ0SW5mby5zdGFydCAtIG5hcnJvd0JhcldpZHRoICogMTA7XG5cbiAgICAgICAgICAgIGlmIChsZWFkaW5nV2hpdGVzcGFjZVN0YXJ0ID49IDApIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fbWF0Y2hSYW5nZShsZWFkaW5nV2hpdGVzcGFjZVN0YXJ0LCBzdGFydEluZm8uc3RhcnQsIDApKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGFydEluZm87XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBvZmZzZXQgPSBzdGFydEluZm8uZW5kO1xuICAgICAgICAgICAgc3RhcnRJbmZvID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF92ZXJpZnlUcmFpbGluZ1doaXRlc3BhY2UoZW5kSW5mbykge1xuICAgICAgICBjb25zdCB0cmFpbGluZ1doaXRlc3BhY2VFbmQgPSBlbmRJbmZvLmVuZCArICgoZW5kSW5mby5lbmQgLSBlbmRJbmZvLnN0YXJ0KSAvIDIpO1xuXG4gICAgICAgIGlmICh0cmFpbGluZ1doaXRlc3BhY2VFbmQgPCB0aGlzLl9yb3cubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fbWF0Y2hSYW5nZShlbmRJbmZvLmVuZCwgdHJhaWxpbmdXaGl0ZXNwYWNlRW5kLCAwKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbmRJbmZvO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgX2ZpbmRFbmQoKSB7XG4gICAgICAgIHRoaXMuX3Jvdy5yZXZlcnNlKCk7XG4gICAgICAgIGNvbnN0IGVuZEluZm8gPSB0aGlzLl9maW5kUGF0dGVybihTVE9QX1BBVFRFUk4pO1xuICAgICAgICB0aGlzLl9yb3cucmV2ZXJzZSgpO1xuXG4gICAgICAgIGlmIChlbmRJbmZvID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHJldmVyc2UgbnVtYmVyc1xuICAgICAgICBjb25zdCB0bXAgPSBlbmRJbmZvLnN0YXJ0O1xuICAgICAgICBlbmRJbmZvLnN0YXJ0ID0gdGhpcy5fcm93Lmxlbmd0aCAtIGVuZEluZm8uZW5kO1xuICAgICAgICBlbmRJbmZvLmVuZCA9IHRoaXMuX3Jvdy5sZW5ndGggLSB0bXA7XG5cbiAgICAgICAgcmV0dXJuIGVuZEluZm8gIT09IG51bGwgPyB0aGlzLl92ZXJpZnlUcmFpbGluZ1doaXRlc3BhY2UoZW5kSW5mbykgOiBudWxsO1xuICAgIH1cblxuICAgIF9kZWNvZGVQYWlyKGNvdW50ZXJQYWlyKSB7XG4gICAgICAgIGNvbnN0IGNvZGVzID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudGVyUGFpci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY29kZSA9IHRoaXMuX2RlY29kZUNvZGUoY291bnRlclBhaXJbaV0pO1xuXG4gICAgICAgICAgICBpZiAoIWNvZGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29kZXMucHVzaChjb2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb2RlcztcbiAgICB9XG5cbiAgICBfZGVjb2RlQ29kZShjb3VudGVyKSB7XG4gICAgICAgIGNvbnN0IGVwc2lsb24gPSB0aGlzLkFWRVJBR0VfQ09ERV9FUlJPUjtcbiAgICAgICAgY29uc3QgYmVzdE1hdGNoID0ge1xuICAgICAgICAgICAgZXJyb3I6IE51bWJlci5NQVhfVkFMVUUsXG4gICAgICAgICAgICBjb2RlOiAtMSxcbiAgICAgICAgICAgIHN0YXJ0OiAwLFxuICAgICAgICAgICAgZW5kOiAwXG4gICAgICAgIH07XG5cbiAgICAgICAgZm9yIChsZXQgY29kZSA9IDA7IGNvZGUgPCBDT0RFX1BBVFRFUk4ubGVuZ3RoOyBjb2RlKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGVycm9yID0gdGhpcy5fbWF0Y2hQYXR0ZXJuKGNvdW50ZXIsIENPREVfUEFUVEVSTltjb2RlXSk7XG4gICAgICAgICAgICBpZiAoZXJyb3IgPCBiZXN0TWF0Y2guZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBiZXN0TWF0Y2guY29kZSA9IGNvZGU7XG4gICAgICAgICAgICAgICAgYmVzdE1hdGNoLmVycm9yID0gZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYmVzdE1hdGNoLmVycm9yIDwgZXBzaWxvbikge1xuICAgICAgICAgICAgcmV0dXJuIGJlc3RNYXRjaDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9kZWNvZGVQYXlsb2FkKGNvdW50ZXJzLCByZXN1bHQsIGRlY29kZWRDb2Rlcykge1xuICAgICAgICBjb25zdCBjb3VudGVyTGVuZ3RoID0gY291bnRlcnMubGVuZ3RoO1xuICAgICAgICBjb25zdCBjb3VudGVyUGFpciA9IFtbMCwgMCwgMCwgMCwgMF0sIFswLCAwLCAwLCAwLCAwXV07XG4gICAgICAgIGxldCBwb3MgPSAwO1xuICAgICAgICBsZXQgY29kZXM7XG5cbiAgICAgICAgd2hpbGUgKHBvcyA8IGNvdW50ZXJMZW5ndGgpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY291bnRlclBhaXJbMF1baV0gPSBjb3VudGVyc1twb3NdICogdGhpcy5fYmFyU3BhY2VSYXRpb1swXTtcbiAgICAgICAgICAgICAgICBjb3VudGVyUGFpclsxXVtpXSA9IGNvdW50ZXJzW3BvcyArIDFdICogdGhpcy5fYmFyU3BhY2VSYXRpb1sxXTtcbiAgICAgICAgICAgICAgICBwb3MgKz0gMjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29kZXMgPSB0aGlzLl9kZWNvZGVQYWlyKGNvdW50ZXJQYWlyKTtcblxuICAgICAgICAgICAgaWYgKCFjb2Rlcykge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goY29kZXNbaV0uY29kZSArICcnKTtcbiAgICAgICAgICAgICAgICBkZWNvZGVkQ29kZXMucHVzaChjb2Rlc1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29kZXM7XG4gICAgfVxuXG4gICAgX2RlY29kZSgpIHtcbiAgICAgICAgY29uc3Qgc3RhcnRJbmZvID0gdGhpcy5fZmluZFN0YXJ0KCk7XG5cbiAgICAgICAgaWYgKCFzdGFydEluZm8pIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZW5kSW5mbyA9IHRoaXMuX2ZpbmRFbmQoKTtcblxuICAgICAgICBpZiAoIWVuZEluZm8pIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZGVjb2RlZENvZGVzID0gW107XG4gICAgICAgIGRlY29kZWRDb2Rlcy5wdXNoKHN0YXJ0SW5mbyk7XG5cbiAgICAgICAgY29uc3QgY291bnRlcnMgPSB0aGlzLl9maWxsQ291bnRlcnMoc3RhcnRJbmZvLmVuZCwgZW5kSW5mby5zdGFydCwgZmFsc2UpO1xuXG4gICAgICAgIGlmIChjb3VudGVycy5sZW5ndGggJSAxMCAhPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICAgICAgY29uc3QgY29kZSA9IHRoaXMuX2RlY29kZVBheWxvYWQoY291bnRlcnMsIHJlc3VsdCwgZGVjb2RlZENvZGVzKTtcblxuICAgICAgICBpZiAoIWNvZGUgfHwgcmVzdWx0Lmxlbmd0aCAlIDIgIT09IDAgfHwgcmVzdWx0Lmxlbmd0aCA8IDYpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVjb2RlZENvZGVzLnB1c2goZW5kSW5mbyk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvZGU6IHJlc3VsdC5qb2luKCcnKSxcbiAgICAgICAgICAgIHN0YXJ0OiBzdGFydEluZm8uc3RhcnQsXG4gICAgICAgICAgICBlbmQ6IGVuZEluZm8uZW5kLFxuICAgICAgICAgICAgc3RhcnRJbmZvLFxuICAgICAgICAgICAgZGVjb2RlZENvZGVzXG4gICAgICAgIH07XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgRUFOUmVhZGVyIH0gZnJvbSAnLi9lYW5fcmVhZGVyJztcblxuZXhwb3J0IGNsYXNzIFVQQ0VSZWFkZXIgZXh0ZW5kcyBFQU5SZWFkZXIge1xuICAgIGdldCBDT0RFX0ZSRVFVRU5DWSgpIHtcbiAgICAgICAgcmV0dXJuIFtbNTYsIDUyLCA1MCwgNDksIDQ0LCAzOCwgMzUsIDQyLCA0MSwgMzddLCBbNywgMTEsIDEzLCAxNCwgMTksIDI1LCAyOCwgMjEsIDIyLCAyNl1dO1xuICAgIH1cblxuICAgIGdldCBTVE9QX1BBVFRFUk4oKSB7XG4gICAgICAgIHJldHVybiBbMSAvIDYgKiA3LCAxIC8gNiAqIDcsIDEgLyA2ICogNywgMSAvIDYgKiA3LCAxIC8gNiAqIDcsIDEgLyA2ICogN107XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoY29uZmlnLCBzdXBwbGVtZW50cykge1xuICAgICAgICBzdXBlcihjb25maWcsIHN1cHBsZW1lbnRzKTtcblxuICAgICAgICB0aGlzLl9mb3JtYXQgPSAndXBjX2UnO1xuICAgIH1cblxuICAgIF9kZWNvZGVQYXlsb2FkKGNvZGUsIHJlc3VsdCwgZGVjb2RlZENvZGVzKSB7XG4gICAgICAgIGxldCBjb2RlRnJlcXVlbmN5ID0gMHgwO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gICAgICAgICAgICBjb2RlID0gdGhpcy5fZGVjb2RlQ29kZShjb2RlLmVuZCk7XG4gICAgICAgICAgICBpZiAoIWNvZGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb2RlLmNvZGUgPj0gdGhpcy5DT0RFX0dfU1RBUlQpIHtcbiAgICAgICAgICAgICAgICBjb2RlLmNvZGUgPSBjb2RlLmNvZGUgLSB0aGlzLkNPREVfR19TVEFSVDtcbiAgICAgICAgICAgICAgICBjb2RlRnJlcXVlbmN5IHw9IDEgPDwgKDUgLSBpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGNvZGUuY29kZSk7XG4gICAgICAgICAgICBkZWNvZGVkQ29kZXMucHVzaChjb2RlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuX2RldGVybWluZVBhcml0eShjb2RlRnJlcXVlbmN5LCByZXN1bHQpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb2RlO1xuICAgIH1cblxuICAgIF9kZXRlcm1pbmVQYXJpdHkoY29kZUZyZXF1ZW5jeSwgcmVzdWx0KSB7XG4gICAgICAgIGZvciAobGV0IG5yU3lzdGVtID0gMDsgbnJTeXN0ZW0gPCB0aGlzLkNPREVfRlJFUVVFTkNZLmxlbmd0aDsgbnJTeXN0ZW0rKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLkNPREVfRlJFUVVFTkNZW25yU3lzdGVtXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChjb2RlRnJlcXVlbmN5ID09PSB0aGlzLkNPREVfRlJFUVVFTkNZW25yU3lzdGVtXVtpXSkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQudW5zaGlmdChuclN5c3RlbSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGkpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIF9jb252ZXJ0VG9VUENBKHJlc3VsdCkge1xuICAgICAgICBjb25zdCBsYXN0RGlnaXQgPSByZXN1bHRbcmVzdWx0Lmxlbmd0aCAtIDJdO1xuICAgICAgICBsZXQgdXBjYSA9IFtyZXN1bHRbMF1dO1xuXG4gICAgICAgIGlmIChsYXN0RGlnaXQgPD0gMikge1xuICAgICAgICAgICAgdXBjYSA9IHVwY2EuY29uY2F0KHJlc3VsdC5zbGljZSgxLCAzKSkuY29uY2F0KFtsYXN0RGlnaXQsIDAsIDAsIDAsIDBdKS5jb25jYXQocmVzdWx0LnNsaWNlKDMsIDYpKTtcbiAgICAgICAgfSBlbHNlIGlmIChsYXN0RGlnaXQgPT09IDMpIHtcbiAgICAgICAgICAgIHVwY2EgPSB1cGNhLmNvbmNhdChyZXN1bHQuc2xpY2UoMSwgNCkpLmNvbmNhdChbMCwgMCwgMCwgMCwgMF0pLmNvbmNhdChyZXN1bHQuc2xpY2UoNCwgNikpO1xuICAgICAgICB9IGVsc2UgaWYgKGxhc3REaWdpdCA9PT0gNCkge1xuICAgICAgICAgICAgdXBjYSA9IHVwY2EuY29uY2F0KHJlc3VsdC5zbGljZSgxLCA1KSkuY29uY2F0KFswLCAwLCAwLCAwLCAwLCByZXN1bHRbNV1dKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHVwY2EgPSB1cGNhLmNvbmNhdChyZXN1bHQuc2xpY2UoMSwgNikpLmNvbmNhdChbMCwgMCwgMCwgMCwgbGFzdERpZ2l0XSk7XG4gICAgICAgIH1cblxuICAgICAgICB1cGNhLnB1c2gocmVzdWx0W3Jlc3VsdC5sZW5ndGggLSAxXSk7XG4gICAgICAgIHJldHVybiB1cGNhO1xuICAgIH1cblxuICAgIF9jaGVja3N1bShyZXN1bHQpIHtcbiAgICAgICAgcmV0dXJuIHN1cGVyLl9jaGVja3N1bSh0aGlzLl9jb252ZXJ0VG9VUENBKHJlc3VsdCkpO1xuICAgIH1cblxuICAgIF9maW5kRW5kKG9mZnNldCwgaXNXaGl0ZSkge1xuICAgICAgICBpc1doaXRlID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHN1cGVyLl9maW5kRW5kKG9mZnNldCwgaXNXaGl0ZSk7XG4gICAgfVxuXG4gICAgX3ZlcmlmeVRyYWlsaW5nV2hpdGVzcGFjZShlbmRJbmZvKSB7XG4gICAgICAgIGNvbnN0IHRyYWlsaW5nV2hpdGVzcGFjZUVuZCA9IGVuZEluZm8uZW5kICsgKChlbmRJbmZvLmVuZCAtIGVuZEluZm8uc3RhcnQpIC8gMik7XG4gICAgICAgIGlmICh0cmFpbGluZ1doaXRlc3BhY2VFbmQgPCB0aGlzLl9yb3cubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fbWF0Y2hSYW5nZShlbmRJbmZvLmVuZCwgdHJhaWxpbmdXaGl0ZXNwYWNlRW5kLCAwKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbmRJbmZvO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7IEVBTlJlYWRlciB9IGZyb20gJy4vZWFuX3JlYWRlcic7XG5cbmV4cG9ydCBjbGFzcyBVUENSZWFkZXIgZXh0ZW5kcyBFQU5SZWFkZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZywgc3VwcGxlbWVudHMpIHtcbiAgICAgICAgc3VwZXIoY29uZmlnLCBzdXBwbGVtZW50cyk7XG5cbiAgICAgICAgdGhpcy5fZm9ybWF0ID0gJ3VwY19hJztcbiAgICB9XG5cbiAgICBfZGVjb2RlKCkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZGVjb2RlKCk7XG5cbiAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuY29kZSAmJiByZXN1bHQuY29kZS5sZW5ndGggPT09IDEzICYmIHJlc3VsdC5jb2RlLmNoYXJBdCgwKSA9PT0gJzAnKSB7XG4gICAgICAgICAgICByZXN1bHQuY29kZSA9IHJlc3VsdC5jb2RlLnN1YnN0cmluZygxKTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==