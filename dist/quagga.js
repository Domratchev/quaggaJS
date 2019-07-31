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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/quagga.ts");
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

/***/ "./src/common/cluster.ts":
/*!*******************************!*\
  !*** ./src/common/cluster.ts ***!
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
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);




/**
 * Creates a cluster for grouping similar orientations of moments
 */
var Cluster =
/*#__PURE__*/
function () {
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Cluster, null, [{
    key: "clusterize",
    value: function clusterize(moments, threshold) {
      var clusters = new Array();
      moments.forEach(function (moment) {
        var matchingCluster = clusters.find(function (cluster) {
          return cluster.fits(moment);
        });

        if (matchingCluster) {
          matchingCluster.add(moment);
        } else {
          clusters.push(new Cluster(threshold, moment));
        }
      });
      return clusters;
    }
  }]);

  function Cluster(threshold, moment) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Cluster);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "_threshold", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "_moments", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "_center", void 0);

    this._threshold = threshold;
    this._moments = new Array();
    this._center = {
      rad: 0,
      x: 0,
      y: 0
    };

    if (moment) {
      this.add(moment);
    }
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Cluster, [{
    key: "add",
    value: function add(point) {
      this._moments.push(point); // Update center


      this._center.rad = this._moments.reduce(function (sum, p) {
        return sum + p.rad;
      }, 0) / this._moments.length;
      this._center.x = Math.cos(this._center.rad);
      this._center.y = Math.sin(this._center.rad);
    }
  }, {
    key: "fits",
    value: function fits(moment) {
      // check cosine similarity to center-angle
      var similarity = Math.abs(moment.x * this._center.x + moment.y * this._center.y);
      return similarity > this._threshold;
    }
  }, {
    key: "moments",
    get: function get() {
      return this._moments;
    }
  }]);

  return Cluster;
}();

/***/ }),

/***/ "./src/common/events.ts":
/*!******************************!*\
  !*** ./src/common/events.ts ***!
  \******************************/
/*! exports provided: Events */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Events", function() { return Events; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);


var events = {};
var Events =
/*#__PURE__*/
function () {
  function Events() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Events);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Events, null, [{
    key: "subscribe",
    value: function subscribe(event, callback, async) {
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

      getEvent(event).subscriptions.push(subscription);
    }
  }, {
    key: "publish",
    value: function publish(type, data) {
      var eventItem = getEvent(type);
      var subscriptions = eventItem.subscriptions; // Publish one-time subscriptions

      subscriptions.filter(function (_ref) {
        var once = _ref.once;
        return !!once;
      }).forEach(function (subscription) {
        return publishSubscription(subscription, data);
      }); // remove them from the subscription

      eventItem.subscriptions = subscriptions.filter(function (_ref2) {
        var once = _ref2.once;
        return !once;
      }); // publish the rest

      eventItem.subscriptions.forEach(function (subscription) {
        return publishSubscription(subscription, data);
      });
    }
  }, {
    key: "once",
    value: function once(event, callback, async) {
      Events.subscribe(event, {
        callback: callback,
        async: async,
        once: true
      });
    }
  }, {
    key: "unsubscribe",
    value: function unsubscribe(eventName, callback) {
      if (eventName) {
        var event = getEvent(eventName);

        if (event && callback) {
          event.subscriptions = event.subscriptions.filter(function (subscription) {
            return subscription.callback !== callback;
          });
        } else {
          event.subscriptions = [];
        }
      } else {
        events = {};
      }
    }
  }]);

  return Events;
}();

function getEvent(eventName) {
  if (!events[eventName]) {
    events[eventName] = {
      subscriptions: []
    };
  }

  return events[eventName];
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

/***/ }),

/***/ "./src/common/hsv2rgb.ts":
/*!*******************************!*\
  !*** ./src/common/hsv2rgb.ts ***!
  \*******************************/
/*! exports provided: hsv2rgb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hsv2rgb", function() { return hsv2rgb; });
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

/***/ }),

/***/ "./src/common/image-debug.ts":
/*!***********************************!*\
  !*** ./src/common/image-debug.ts ***!
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
    key: "drawPath",
    value: function drawPath(path, context, color, lineWidth) {
      if (path && path.length > 1) {
        context.strokeStyle = color;
        context.fillStyle = color;
        context.lineWidth = lineWidth;
        context.beginPath();
        context.moveTo(path[0].x, path[0].y);
        path.slice(1).forEach(function (_ref) {
          var x = _ref.x,
              y = _ref.y;
          return context.lineTo(x, y);
        });
        context.closePath();
        context.stroke();
      }
    }
  }, {
    key: "drawImage",
    value: function drawImage(imageData, width, height, context) {
      var canvasData = context.getImageData(0, 0, width, height);
      var data = canvasData.data;
      var imageIndex = imageData.length | 0;
      var canvasIndex = data.length | 0;

      if (canvasIndex / imageIndex !== 4) {
        return false;
      }

      while (imageIndex--) {
        var value = imageData[imageIndex];
        data[--canvasIndex] = 255;
        data[--canvasIndex] = value;
        data[--canvasIndex] = value;
        data[--canvasIndex] = value;
      }

      context.putImageData(canvasData, 0, 0);
      return true;
    }
  }]);

  return ImageDebug;
}();

/***/ }),

/***/ "./src/common/image-wrapper.ts":
/*!*************************************!*\
  !*** ./src/common/image-wrapper.ts ***!
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
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hsv2rgb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hsv2rgb */ "./src/common/hsv2rgb.ts");





/**
 * Represents a basic image combining the data and size.
 * In addition, some methods for manipulation are contained.
 */
var ImageWrapper =
/*#__PURE__*/
function () {
  /**
   * @param size The size of the image in pixel
   * @param data If given, a flat array containing the pixel data
   * @param arrayType If given, the desired DataType of the Array (may be typed/non-typed)
   * @param initialize Indicating if the array should be initialized on creation.
   */
  function ImageWrapper(size, data, arrayType, initialize) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ImageWrapper);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "data", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "size", void 0);

    if (!data) {
      this.data = new (arrayType || Uint8Array)(size.x * size.y);

      if (initialize) {
        this.data.fill(0);
      }
    } else {
      this.data = data;
    }

    this.size = size;
  }
  /**
   * Tests if a position is within the image with a given offset
   * @param point The location to test
   * @param border The padding value in pixels
   * @returns true if location inside the image's border, false otherwise
   * @see cvd/image.h
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ImageWrapper, [{
    key: "inImageWithBorder",
    value: function inImageWithBorder(point, border) {
      return point.x >= border && point.y >= border && point.x < this.size.x - border && point.y < this.size.y - border;
    }
    /**
     * Creates an {ImageWrapper) and copies the needed underlying image-data area
     * @param imageWrapper The target {ImageWrapper} where the data should be copied
     * @param fromX The horizontal position where to copy from
     * @param fromY The vertical position where to copy from
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
     * @param x The x-position
     * @param y The y-position
     * @returns The grayscale value at the pixel-position
     */

  }, {
    key: "get",
    value: function get(x, y) {
      return this.data[y * this.size.x + x];
    }
    /**
     * Sets a given pixel position in the image
     * @param x The x-position
     * @param y The y-position
     * @param value The grayscale value to set
     * @returns The Image itself (for possible chaining)
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
      var labelSum = new Array();
      var result = new Array();

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
     * @param context The rendering context to write to
     * @param scale Scale which is applied to each pixel-value
     */

  }, {
    key: "show",
    value: function show(context, scale) {
      var height = this.size.y;
      var width = this.size.x; // const context = canvas.getContext('2d');
      // canvas.height = height;
      // canvas.width = width;

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
     * @param context The rendering context to write to
     * @param scale Scale which is applied to each pixel-value
     * @param fromX The horizontal position where to overlay from
     * @param fromY The vertical position where to overlay from
     */

  }, {
    key: "overlay",
    value: function overlay(context, scale, fromX, fromY) {
      var hsv = [0, 1, 1];
      var whiteRgb = [255, 255, 255];
      var blackRgb = [0, 0, 0];
      var frame = context.getImageData(fromX, fromY, this.size.x, this.size.y);
      var data = frame.data;

      if (!scale || scale < 0 || scale > 360) {
        scale = 360;
      }

      for (var length = this.data.length; length--;) {
        hsv[0] = this.data[length] * scale;
        var rgb = hsv[0] <= 0 ? whiteRgb : hsv[0] >= 360 ? blackRgb : Object(_hsv2rgb__WEBPACK_IMPORTED_MODULE_3__["hsv2rgb"])(hsv);
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

/***/ "./src/common/media-devices.ts":
/*!*************************************!*\
  !*** ./src/common/media-devices.ts ***!
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

/***/ "./src/common/merge.ts":
/*!*****************************!*\
  !*** ./src/common/merge.ts ***!
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
 * @param objects - Objects to merge
 * @returns New object with merged key/values
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

/***/ "./src/config/config.dev.ts":
/*!**********************************!*\
  !*** ./src/config/config.dev.ts ***!
  \**********************************/
/*! exports provided: config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
var config = {
  inputStream: {
    name: 'Live',
    type: 'LiveStream',
    constraints: {
      width: 640,
      height: 480,
      // aspectRatio: 640/480, // optional
      facingMode: 'environment' // or user
      // deviceId: '38745983457387598375983759834'

    },
    area: {
      top: '0%',
      right: '0%',
      left: '0%',
      bottom: '0%'
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
    patchSize: 'medium',
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

/***/ "./src/decoder/barcode-decoder.ts":
/*!****************************************!*\
  !*** ./src/decoder/barcode-decoder.ts ***!
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
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _reader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reader */ "./src/reader/index.ts");
/* harmony import */ var _bresenham__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bresenham */ "./src/decoder/bresenham.ts");
/* harmony import */ var _common_image_debug__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/image-debug */ "./src/common/image-debug.ts");








;
var BarcodeDecoder =
/*#__PURE__*/
function () {
  function BarcodeDecoder(config, inputImageWrapper) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, BarcodeDecoder);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(this, "_config", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(this, "_inputImageWrapper", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(this, "_frequencyCanvas", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(this, "_patternCanvas", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(this, "_overlayContext", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(this, "_barcodeReaders", void 0);

    this._config = config;
    this._inputImageWrapper = inputImageWrapper;
    this._barcodeReaders = [];

    if ( true && this._config.debug && typeof document !== 'undefined') {
      var debugDiv = document.querySelector('#debug.detection');
      this._frequencyCanvas = document.querySelector('canvas.frequency');

      if (!this._frequencyCanvas) {
        this._frequencyCanvas = document.createElement('canvas');
        this._frequencyCanvas.className = 'frequency';

        if (debugDiv) {
          debugDiv.appendChild(this._frequencyCanvas);
        }
      }

      this._frequencyCanvas.style.display = this._config.debug.showFrequency ? 'block' : 'none';
      this._patternCanvas = document.querySelector('canvas.patternBuffer');

      if (!this._patternCanvas) {
        this._patternCanvas = document.createElement('canvas');
        this._patternCanvas.className = 'patternBuffer';

        if (debugDiv) {
          debugDiv.appendChild(this._patternCanvas);
        }
      }

      this._patternCanvas.style.display = this._config.debug.showPattern ? 'block' : 'none';
      var overlayCanvas = document.querySelector('canvas.drawingBuffer');
      this._overlayContext = overlayCanvas ? overlayCanvas.getContext('2d') : null;
    }

    this._initReaders();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(BarcodeDecoder, [{
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
    /**
     * With the help of the configured readers this function tries to detect
     * a valid barcode pattern within the given area.
     * @param box The area to search in
     * @returns The result {codeResult, line, angle, pattern, threshold}
     */

  }, {
    key: "decodeFromBoundingBox",
    value: function decodeFromBoundingBox(box) {
      var debug =  true && this._overlayContext && this._config.debug;

      if (debug && debug.drawBoundingBox) {
        this._drawPath(box, 'blue', 2);
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

      if (debug && debug.drawScanline) {
        this._drawPath(line, 'red', 3);
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
    key: "setReaders",
    value: function setReaders(readers) {
      this._config.readers = readers;
      this._barcodeReaders.length = 0;

      this._initReaders();
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
            return new _reader__WEBPACK_IMPORTED_MODULE_5__["Readers"][supplement]();
          });
        }

        _this._barcodeReaders.push(new _reader__WEBPACK_IMPORTED_MODULE_5__["Readers"][reader](configuration, supplements));
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
    /**
     * extend the line on both ends
     * @param line
     * @param angle
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
      var debug =  true && this._config.debug;

      if (debug && this._overlayContext) {
        this._drawPath(line, 'red', 3);
      }

      var barcodeLine = _bresenham__WEBPACK_IMPORTED_MODULE_6__["Bresenham"].getBarcodeLine(this._inputImageWrapper, line[0], line[1]);

      if (debug && debug.showFrequency) {
        this._printFrequency(barcodeLine.line);
      }

      barcodeLine = _bresenham__WEBPACK_IMPORTED_MODULE_6__["Bresenham"].toBinaryLine(barcodeLine);

      if (debug && debug.showPattern) {
        this._printPattern(barcodeLine.line);
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
     * @param box
     * @param line
     * @param lineAngle
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
     * Used for development only
     */

  }, {
    key: "_printFrequency",
    value: function _printFrequency(line) {
      var context = this._frequencyCanvas.getContext('2d');

      this._frequencyCanvas.width = line.length;
      this._frequencyCanvas.height = 256;
      context.beginPath();
      context.strokeStyle = 'blue';

      for (var i = 0; i < line.length; i++) {
        context.moveTo(i, 255);
        context.lineTo(i, 255 - line[i]);
      }

      context.closePath();
      context.stroke();
    }
    /**
     * Used for development only
     */

  }, {
    key: "_printPattern",
    value: function _printPattern(line) {
      var context = this._patternCanvas.getContext('2d');

      this._patternCanvas.width = line.length;
      context.fillStyle = 'black';

      for (var i = 0; i < line.length; i++) {
        if (line[i] === 1) {
          context.fillRect(i, 0, 1, 100);
        }
      }
    }
  }, {
    key: "_drawPath",
    value: function _drawPath(path, color, lineWidth) {
      _common_image_debug__WEBPACK_IMPORTED_MODULE_7__["ImageDebug"].drawPath(path, this._overlayContext, color, lineWidth);
    }
  }]);

  return BarcodeDecoder;
}();

/***/ }),

/***/ "./src/decoder/bresenham.ts":
/*!**********************************!*\
  !*** ./src/decoder/bresenham.ts ***!
  \**********************************/
/*! exports provided: Bresenham */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bresenham", function() { return Bresenham; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Slope;

(function (Slope) {
  Slope[Slope["Up"] = 1] = "Up";
  Slope[Slope["Down"] = -1] = "Down";
})(Slope || (Slope = {}));

;
var Bresenham =
/*#__PURE__*/
function () {
  function Bresenham() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Bresenham);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Bresenham, null, [{
    key: "getBarcodeLine",

    /**
     * Scans a line of the given image from point p1 to p2 and returns a result object containing
     * gray-scale values (0-255) of the underlying pixels in addition to the min and max values.
     * @param imageWrapper
     * @param p1 The start point {x,y}
     * @param p2 The end point {x,y}
     * @returns {line, min, max}
     */
    value: function getBarcodeLine(imageWrapper, p1, p2) {
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
    }
    /**
     * Converts the result from getBarcodeLine into a binary representation
     * also considering the frequency and slope of the signal for more robust results
     * @param result {line, min, max}
     */

  }, {
    key: "toBinaryLine",
    value: function toBinaryLine(result) {
      var min = result.min;
      var max = result.max;
      var line = result.line;
      var center = min + (max - min) / 2;
      var extrema = new Array();
      var threshold = (max - min) / 12;
      var rThreshold = -threshold; // 1. find extrema

      var currentDir = line[0] > center ? Slope.Up : Slope.Down;
      extrema.push({
        pos: 0,
        val: line[0]
      });

      for (var i = 0; i < line.length - 2; i++) {
        var slope = line[i + 1] - line[i];
        var slope2 = line[i + 2] - line[i + 1];
        var dir = void 0;

        if (slope + slope2 < rThreshold && line[i + 1] < center * 1.5) {
          dir = Slope.Down;
        } else if (slope + slope2 > threshold && line[i + 1] > center * 0.5) {
          dir = Slope.Up;
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

      return _objectSpread({}, result, {
        threshold: threshold
      });
    }
  }]);

  return Bresenham;
}();

/***/ }),

/***/ "./src/input/camera-access.ts":
/*!************************************!*\
  !*** ./src/input/camera-access.ts ***!
  \************************************/
/*! exports provided: CameraAccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraAccess", function() { return CameraAccess; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "../../node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_media_devices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/media-devices */ "./src/common/media-devices.ts");






var _stream;

var CameraAccess =
/*#__PURE__*/
function () {
  function CameraAccess() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, CameraAccess);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(CameraAccess, null, [{
    key: "request",

    /**
     * Attempts to attach the camera-stream to a given video element
     * and calls the callback function when the content is ready
     * @param video
     * @param videoConstraints
     */
    value: function () {
      var _request = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(video, videoConstraints) {
        var normalizedConstraints;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                normalizedConstraints = CameraAccess.pickConstraints(videoConstraints);
                _context.next = 3;
                return Object(_common_media_devices__WEBPACK_IMPORTED_MODULE_4__["getUserMedia"])(normalizedConstraints);

              case 3:
                _stream = _context.sent;
                video.srcObject = _stream;
                video.setAttribute('autoplay', '');
                video.setAttribute('muted', '');
                video.setAttribute('playsinline', '');
                return _context.abrupt("return", new Promise(function (resolve) {
                  return video.addEventListener('loadedmetadata', function () {
                    video.play();
                    resolve();
                  });
                }).then(_waitForVideo.bind(null, video)));

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function request(_x, _x2) {
        return _request.apply(this, arguments);
      }

      return request;
    }()
  }, {
    key: "release",
    value: function release() {
      var tracks = _stream && _stream.getVideoTracks();

      if (tracks && tracks.length) {
        tracks[0].stop();
      }

      _stream = null;
    }
  }, {
    key: "enumerateVideoDevices",
    value: function () {
      var _enumerateVideoDevices = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var devices;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return Object(_common_media_devices__WEBPACK_IMPORTED_MODULE_4__["enumerateDevices"])();

              case 2:
                devices = _context2.sent;
                return _context2.abrupt("return", devices.filter(function (_ref) {
                  var kind = _ref.kind;
                  return kind === 'videoinput';
                }));

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function enumerateVideoDevices() {
        return _enumerateVideoDevices.apply(this, arguments);
      }

      return enumerateVideoDevices;
    }()
  }, {
    key: "getActiveStreamLabel",
    value: function getActiveStreamLabel() {
      var track = CameraAccess.getActiveTrack();
      return track ? track.label : '';
    }
  }, {
    key: "getActiveTrack",
    value: function getActiveTrack() {
      var tracks = _stream && _stream.getVideoTracks();

      if (tracks && tracks.length) {
        return tracks[0];
      }

      return null;
    }
  }, {
    key: "pickConstraints",
    value: function pickConstraints(videoConstraints) {
      var width = videoConstraints.width,
          height = videoConstraints.height,
          facingMode = videoConstraints.facingMode,
          aspectRatio = videoConstraints.aspectRatio,
          deviceId = videoConstraints.deviceId;
      var _ref2 = videoConstraints,
          minAspectRatio = _ref2.minAspectRatio,
          facing = _ref2.facing;

      if (typeof minAspectRatio !== 'undefined' && minAspectRatio > 0) {
        aspectRatio = minAspectRatio;
        console.log("WARNING: Constraint 'minAspectRatio' is deprecated; Use 'aspectRatio' instead");
      }

      if (typeof facing !== 'undefined') {
        facingMode = facing;
        console.log("WARNING: Constraint 'facing' is deprecated. Use 'facingMode' instead'");
      }

      var normalizedConstraints = deviceId && facingMode ? {
        width: width,
        height: height,
        aspectRatio: aspectRatio,
        deviceId: deviceId
      } : {
        width: width,
        height: height,
        facingMode: facingMode,
        aspectRatio: aspectRatio,
        deviceId: deviceId
      };
      return {
        audio: false,
        video: normalizedConstraints
      };
    }
  }]);

  return CameraAccess;
}();

function _waitForVideo(_ref3) {
  var videoWidth = _ref3.videoWidth,
      videoHeight = _ref3.videoHeight;
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

/***/ }),

/***/ "./src/input/exif-helper.ts":
/*!**********************************!*\
  !*** ./src/input/exif-helper.ts ***!
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
    return null;
  }

  while (offset < length) {
    if (dataView.getUint8(offset) !== 0xFF) {
      return null;
    }

    var marker = dataView.getUint8(offset + 1);

    if (marker === 0xE1) {
      return readEXIFData(dataView, offset + 4, exifTags);
    } else {
      offset += 2 + dataView.getUint16(offset + 2);
    }
  }

  return null;
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
            throw new Error('HTTP Error ' + response.status);

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
  if ('Exif'.split('').some(function (_char, index) {
    return dataView.getUint8(start + index) !== _char.charCodeAt(0);
  })) {
    return null;
  }

  var tiffOffset = start + 6;
  var bigEnd;

  if (dataView.getUint16(tiffOffset) === 0x4949) {
    bigEnd = false;
  } else if (dataView.getUint16(tiffOffset) === 0x4D4D) {
    bigEnd = true;
  } else {
    return null;
  }

  if (dataView.getUint16(tiffOffset + 2, !bigEnd) !== 0x002A) {
    return null;
  }

  var firstIFDOffset = dataView.getUint32(tiffOffset + 4, !bigEnd);

  if (firstIFDOffset < 0x00000008) {
    return null;
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

/***/ "./src/input/frame-grabber.ts":
/*!************************************!*\
  !*** ./src/input/frame-grabber.ts ***!
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
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);



var QUATER_CIRCLE = Math.PI / 2;
var FrameGrabber =
/*#__PURE__*/
function () {
  function FrameGrabber(inputStream, canvas) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, FrameGrabber);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "_inputStream", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "_streamConfig", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "_canvas", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "_context", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "_data", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "_canvasHeight", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "_canvasWidth", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "_height", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "_width", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "_topLeft", void 0);

    this._inputStream = inputStream;
    this._streamConfig = inputStream.config;
    this._canvasWidth = inputStream.canvasWidth;
    this._canvasHeight = inputStream.canvasHeight;
    this._width = inputStream.width;
    this._height = inputStream.height;
    this._topLeft = inputStream.topLeft;
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
        topLeft: this._topLeft,
        videoSize: {
          x: inputStream.realWidth,
          y: inputStream.realHeight
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
      var frame = this._inputStream.getFrame();

      if (frame) {
        this._adjustCanvasSize();

        var drawable;
        var drawAngle = 0;

        if (frame instanceof HTMLVideoElement) {
          drawable = frame;
        } else {
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

        var imageData = this._context.getImageData(this._topLeft.x, this._topLeft.y, this._width, this._height).data;

        if (this._streamConfig.halfSample) {
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
      if (this._canvas.height !== this._canvasHeight || this._canvas.width !== this._canvasWidth) {
        if (true) {
          console.warn('Canvas size needs to be adjusted');
        }

        this._canvas.height = this._canvasHeight;
        this._canvas.width = this._canvasWidth;
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
          this._data[outImageIndex] = (0.299 * imageData[top4 + 0] + 0.587 * imageData[top4 + 1] + 0.114 * imageData[top4 + 2] + (0.299 * imageData[top4 + 4] + 0.587 * imageData[top4 + 5] + 0.114 * imageData[top4 + 6]) + (0.299 * imageData[bottom4 + 0] + 0.587 * imageData[bottom4 + 1] + 0.114 * imageData[bottom4 + 2]) + (0.299 * imageData[bottom4 + 4] + 0.587 * imageData[bottom4 + 5] + 0.114 * imageData[bottom4 + 6])) / 4 | 0;
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
          this._data[_j] = 0.299 * imageData[_i] + 0.587 * imageData[_i + 1] + 0.114 * imageData[_i + 2] | 0;
        }
      }
    }
  }]);

  return FrameGrabber;
}();

/***/ }),

/***/ "./src/input/image-loader.ts":
/*!***********************************!*\
  !*** ./src/input/image-loader.ts ***!
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
/* harmony import */ var _exif_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./exif-helper */ "./src/input/exif-helper.ts");





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
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(baseUri, callback, offset, size, sequence) {
        var imageSrcs, loadedImages, notLoadedImages, i, loaded, _loaded;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _loaded = function _ref2() {
                  _loaded = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
                  /*#__PURE__*/
                  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(loadedImage) {
                    var x, y, imageName, firstImage;
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            x = 0;

                          case 1:
                            if (!(x < notLoadedImages.length)) {
                              _context.next = 17;
                              break;
                            }

                            if (!(notLoadedImages[x] === loadedImage)) {
                              _context.next = 14;
                              break;
                            }

                            notLoadedImages.splice(x, 1); // TODO: assume the index is the same

                            y = 0;

                          case 5:
                            if (!(y < imageSrcs.length)) {
                              _context.next = 13;
                              break;
                            }

                            imageName = imageSrcs[y].substr(imageSrcs[y].lastIndexOf('/'));

                            if (!(loadedImage.src.lastIndexOf(imageName) !== -1)) {
                              _context.next = 10;
                              break;
                            }

                            loadedImages[y] = {
                              image: loadedImage
                            };
                            return _context.abrupt("break", 13);

                          case 10:
                            y++;
                            _context.next = 5;
                            break;

                          case 13:
                            return _context.abrupt("break", 17);

                          case 14:
                            x++;
                            _context.next = 1;
                            break;

                          case 17:
                            if (!(notLoadedImages.length === 0)) {
                              _context.next = 33;
                              break;
                            }

                            if (true) {
                              console.log('Images loaded');
                            }

                            _context.prev = 19;

                            if (!(sequence === false)) {
                              _context.next = 25;
                              break;
                            }

                            firstImage = loadedImages[0];
                            _context.next = 24;
                            return Object(_exif_helper__WEBPACK_IMPORTED_MODULE_4__["findTagsInObjectURL"])(baseUri);

                          case 24:
                            firstImage.tags = _context.sent;

                          case 25:
                            _context.next = 30;
                            break;

                          case 27:
                            _context.prev = 27;
                            _context.t0 = _context["catch"](19);
                            console.log(_context.t0);

                          case 30:
                            _context.prev = 30;
                            callback(loadedImages);
                            return _context.finish(30);

                          case 33:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee, null, [[19, 27, 30, 33]]);
                  }));
                  return _loaded.apply(this, arguments);
                };

                loaded = function _ref(_x6) {
                  return _loaded.apply(this, arguments);
                };

                imageSrcs = new Array(size);
                loadedImages = new Array(size);
                notLoadedImages = new Array();

                if (sequence === false) {
                  imageSrcs[0] = baseUri;
                } else {
                  for (i = 0; i < size; i++) {
                    imageSrcs[i] = "".concat(baseUri, "image-").concat(('00' + (offset + i)).slice(-3), ".jpg");
                  }
                }

                imageSrcs.forEach(function (src) {
                  var image = new Image();
                  notLoadedImages.push(image);

                  image.onload = function () {
                    return loaded(image);
                  };

                  image.src = src;
                });

              case 7:
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

/***/ "./src/input/image-stream.ts":
/*!***********************************!*\
  !*** ./src/input/image-stream.ts ***!
  \***********************************/
/*! exports provided: ImageStream */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageStream", function() { return ImageStream; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../../node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _image_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./image-loader */ "./src/input/image-loader.ts");
/* harmony import */ var _input_stream__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./input-stream */ "./src/input/input-stream.ts");









var ImageStream =
/*#__PURE__*/
function (_InputStream) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(ImageStream, _InputStream);

  function ImageStream() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ImageStream);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(ImageStream).call(this));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "_baseUrl", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "_ended", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "_frameIndex", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "_height", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "_images", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "_loaded", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "_offset", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "_paused", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "_size", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "_width", void 0);

    _this._canvasHeight = 0;
    _this._canvasWidth = 0;
    _this._baseUrl = null;
    _this._ended = false;
    _this._frameIndex = 0;
    _this._height = 0;
    _this._images = null;
    _this._loaded = false;
    _this._offset = 1;
    _this._paused = true;
    _this._size = 0;
    _this._width = 0;
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ImageStream, [{
    key: "setAttribute",
    value: function setAttribute() {}
  }, {
    key: "pause",
    value: function pause() {
      this._paused = true;
    }
  }, {
    key: "play",
    value: function play() {
      this._paused = false;
    }
  }, {
    key: "getFrame",
    value: function getFrame() {
      var _this2 = this;

      var frame = null;

      if (this._loaded && !this._paused) {
        frame = this._images[this._frameIndex];

        if (this._frameIndex < this._size - 1) {
          this._frameIndex++;
        } else {
          setTimeout(function () {
            _this2._ended = true;

            _this2.trigger('ended', []);
          }, 0);
        }
      }

      return frame;
    }
  }, {
    key: "_loadImages",
    value: function _loadImages() {
      var _this3 = this;

      this._loaded = false;
      _image_loader__WEBPACK_IMPORTED_MODULE_7__["ImageLoader"].load(this._baseUrl, function (images) {
        _this3._images = images;

        switch (images[0].tags && images[0].tags.orientation) {
          case 6:
          case 8:
            {
              _this3._width = images[0].image.height;
              _this3._height = images[0].image.width;
              break;
            }

          default:
            {
              _this3._width = images[0].image.width;
              _this3._height = images[0].image.height;
            }
        }

        _this3._canvasWidth = _this3._calculatedWidth = _this3._config.size ? _this3._width > _this3._height ? _this3._config.size : _this3._width * _this3._config.size / _this3._height | 0 : _this3._width;
        _this3._canvasHeight = _this3._calculatedHeight = _this3._config.size ? _this3._width > _this3._height ? _this3._height * _this3._config.size / _this3._width | 0 : _this3._config.size : _this3._height;
        _this3._loaded = true;
        _this3._frameIndex = 0;
        setTimeout(function () {
          return _this3.trigger('canrecord', []);
        }, 0);
      }, this._offset, this._size, this._config.sequence);
    }
  }, {
    key: "realHeight",
    get: function get() {
      return this._height;
    }
  }, {
    key: "realWidth",
    get: function get() {
      return this._width;
    }
  }, {
    key: "config",
    get: function get() {
      return this._config;
    },
    set: function set(config) {
      this._config = config;

      if (config.sequence === false) {
        this._baseUrl = config.src;
        this._size = 1;
      } else {
        this._baseUrl = config.src;
        this._size = config.length;
      }

      this._loadImages();
    }
  }, {
    key: "ended",
    get: function get() {
      return this._ended;
    }
  }, {
    key: "currentTime",
    set: function set(time) {
      this._frameIndex = time;
    }
  }]);

  return ImageStream;
}(_input_stream__WEBPACK_IMPORTED_MODULE_8__["InputStream"]);

/***/ }),

/***/ "./src/input/input-stream-utils.ts":
/*!*****************************************!*\
  !*** ./src/input/input-stream-utils.ts ***!
  \*****************************************/
/*! exports provided: calculatePatchSize, checkImageConstraints, _parseCssDimensionValues, _dimensionsConverters, computeImageArea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculatePatchSize", function() { return calculatePatchSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkImageConstraints", function() { return checkImageConstraints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_parseCssDimensionValues", function() { return _parseCssDimensionValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_dimensionsConverters", function() { return _dimensionsConverters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeImageArea", function() { return computeImageArea; });
function _computeDivisors(n) {
  var divisors = new Array();
  var largeDivisors = new Array();

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
  var divisors = new Array();
  var largeDivisors = new Array();

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

function calculatePatchSize(patchSize, _ref) {
  var x = _ref.x,
      y = _ref.y;
  var wideSide = Math.max(x | 0, y | 0) | 0;
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

  var optimalPatchSize = findPatchSizeForDivisors(_computeCommonDivisors(x, y)) || findPatchSizeForDivisors(_computeDivisors(wideSide)) || findPatchSizeForDivisors(_computeDivisors(desiredPatchSize * nrOfPatches));
  return optimalPatchSize;
}
function checkImageConstraints(inputStream, config) {
  var width = inputStream.width;
  var height = inputStream.height;
  var shift = config.halfSample ? 1 : 0 | 0; // calculate width and height based on area

  if (inputStream.config.area) {
    var area = computeImageArea(width, height, inputStream.config.area);
    inputStream.topLeft = area.topLeft;
    inputStream.setCanvasSize(width, height);
    width = area.width;
    height = area.height;
  }

  var size = {
    x: width >> shift,
    y: height >> shift
  };
  var patchSize = calculatePatchSize(config.patchSize, size);

  if (true) {
    console.log('Patch-Size:', JSON.stringify(patchSize));
  }

  inputStream.width = (size.x / patchSize.x << shift) * patchSize.x | 0;
  inputStream.height = (size.y / patchSize.y << shift) * patchSize.y | 0;

  if (inputStream.width % patchSize.x === 0 && inputStream.height % patchSize.y === 0) {
    return true;
  } // eslint-disable-next-line max-len


  throw new Error("Image dimensions do not comply with the current settings: width (".concat(width, ") and height (").concat(height, ") must be a multiple of ").concat(patchSize.x));
}
function _parseCssDimensionValues(value) {
  var dimension = {
    value: parseFloat(value),
    unit: value.indexOf('%') === value.length - 1 ? '%' : value.indexOf('px') === value.length - 2 ? 'px' : '%'
  };
  return dimension;
}
var _dimensionsConverters = {
  bottom: function bottom(dimension, _ref2) {
    var height = _ref2.height;
    return dimension.unit === '%' ? height - height * dimension.value / 100 | 0 : dimension.unit === 'px' ? height - dimension.value : height;
  },
  left: function left(dimension, _ref3) {
    var width = _ref3.width;
    return dimension.unit === '%' ? width * dimension.value / 100 | 0 : dimension.unit === 'px' ? dimension.value : 0;
  },
  right: function right(dimension, _ref4) {
    var width = _ref4.width;
    return dimension.unit === '%' ? width - width * dimension.value / 100 | 0 : dimension.unit === 'px' ? width - dimension.value : width;
  },
  top: function top(dimension, _ref5) {
    var height = _ref5.height;
    return dimension.unit === '%' ? height * dimension.value / 100 | 0 : dimension.unit === 'px' ? dimension.value : 0;
  }
};
function computeImageArea(inputWidth, inputHeight, area) {
  var context = {
    width: inputWidth,
    height: inputHeight
  };
  var parsedArea = Object.keys(area).reduce(function (result, key) {
    var value = area[key];

    var parsed = _parseCssDimensionValues(value);

    var calculated = _dimensionsConverters[key](parsed, context);

    result[key] = calculated;
    return result;
  }, {});
  return {
    topLeft: {
      x: parsedArea.left,
      y: parsedArea.top
    },
    width: parsedArea.right - parsedArea.left,
    height: parsedArea.bottom - parsedArea.top
  };
}

/***/ }),

/***/ "./src/input/input-stream.ts":
/*!***********************************!*\
  !*** ./src/input/input-stream.ts ***!
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
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var InputStream =
/*#__PURE__*/
function () {
  function InputStream() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, InputStream);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "_calculatedHeight", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "_calculatedWidth", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "_canvasHeight", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "_canvasWidth", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "_config", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "_eventNames", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "_eventHandlers", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "_topLeft", void 0);

    this._canvasWidth = 0;
    this._canvasHeight = 0;
    this._config = null;
    this._eventNames = ['canrecord', 'ended'];
    this._eventHandlers = new Map();
    this._topLeft = {
      x: 0,
      y: 0
    };
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(InputStream, [{
    key: "setCanvasSize",
    value: function setCanvasSize(width, height) {
      this._canvasWidth = width;
      this._canvasHeight = height;
    }
  }, {
    key: "addEventListener",
    value: function addEventListener(event, listener, _options) {
      if (this._eventNames.indexOf(event) !== -1) {
        if (!this._eventHandlers.has(event)) {
          this._eventHandlers.set(event, new Array());
        }

        this._eventHandlers.get(event).push(listener);
      }
    }
  }, {
    key: "clearEventHandlers",
    value: function clearEventHandlers() {
      this._eventHandlers.clear();
    }
  }, {
    key: "trigger",
    value: function trigger(eventName, argArray) {
      var handlers = this._eventHandlers.get(eventName);

      if (handlers && handlers.length > 0) {
        for (var j = 0; j < handlers.length; j++) {
          handlers[j].apply(this, argArray);
        }
      }
    }
  }, {
    key: "height",
    get: function get() {
      return this._calculatedHeight;
    },
    set: function set(height) {
      this._calculatedHeight = height;
    }
  }, {
    key: "width",
    get: function get() {
      return this._calculatedWidth;
    },
    set: function set(width) {
      this._calculatedWidth = width;
    }
  }, {
    key: "topLeft",
    get: function get() {
      return _objectSpread({}, this._topLeft);
    },
    set: function set(topLeft) {
      this._topLeft.x = topLeft.x;
      this._topLeft.y = topLeft.y;
    }
  }, {
    key: "canvasHeight",
    get: function get() {
      return this._canvasHeight;
    }
  }, {
    key: "canvasWidth",
    get: function get() {
      return this._canvasWidth;
    }
  }, {
    key: "config",
    get: function get() {
      return this._config;
    },
    set: function set(config) {
      this._config = config;
    }
  }]);

  return InputStream;
}();

/***/ }),

/***/ "./src/input/live-stream.ts":
/*!**********************************!*\
  !*** ./src/input/live-stream.ts ***!
  \**********************************/
/*! exports provided: LiveStream */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveStream", function() { return LiveStream; });
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
/* harmony import */ var _video_stream__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./video-stream */ "./src/input/video-stream.ts");






var LiveStream =
/*#__PURE__*/
function (_VideoStream) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(LiveStream, _VideoStream);

  function LiveStream(video) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, LiveStream);

    video.setAttribute('autoplay', '');
    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(LiveStream).call(this, video));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(LiveStream, [{
    key: "ended",
    get: function get() {
      return false;
    }
  }]);

  return LiveStream;
}(_video_stream__WEBPACK_IMPORTED_MODULE_5__["VideoStream"]);

/***/ }),

/***/ "./src/input/video-stream.ts":
/*!***********************************!*\
  !*** ./src/input/video-stream.ts ***!
  \***********************************/
/*! exports provided: VideoStream, LiveStream */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoStream", function() { return VideoStream; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveStream", function() { return LiveStream; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../../node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "../../node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _input_stream__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./input-stream */ "./src/input/input-stream.ts");









var VideoStream =
/*#__PURE__*/
function (_InputStream) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(VideoStream, _InputStream);

  function VideoStream(video) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, VideoStream);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(VideoStream).call(this));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "_video", void 0);

    _this._video = video;
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(VideoStream, [{
    key: "setAttribute",
    value: function setAttribute(name, value) {
      this._video.setAttribute(name, value);
    }
  }, {
    key: "pause",
    value: function pause() {
      this._video.pause();
    }
  }, {
    key: "play",
    value: function play() {
      this._video.play();
    }
  }, {
    key: "addEventListener",
    value: function addEventListener(event, listener, options) {
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(VideoStream.prototype), "addEventListener", this).call(this, event, listener, options);

      if (this._eventNames.indexOf(event) === -1) {
        this._video.addEventListener(event, listener, options);
      }
    }
  }, {
    key: "clearEventHandlers",
    value: function clearEventHandlers() {
      // TODO: come up with a way to remove video event handlers
      // this._eventNames.forEach(eventName => {
      //     const handlers = this._eventHandlers.get(eventName);
      //     if (handlers && handlers.length > 0) {
      //         handlers.forEach(handler => this._video.removeEventListener(eventName, handler));
      //     }
      // });
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(VideoStream.prototype), "clearEventHandlers", this).call(this);
    }
  }, {
    key: "trigger",
    value: function trigger(eventName, argArray) {
      if (eventName === 'canrecord') {
        this._initSize();
      }

      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(VideoStream.prototype), "trigger", this).call(this, eventName, argArray);
    }
  }, {
    key: "getFrame",
    value: function getFrame() {
      return this._video;
    }
  }, {
    key: "_initSize",
    value: function _initSize() {
      var width = this._video.videoWidth;
      var height = this._video.videoHeight;
      this._canvasWidth = this._calculatedWidth = this._config.size ? width > height ? this._config.size : width * this._config.size / height | 0 : width;
      this._canvasHeight = this._calculatedHeight = this._config.size ? width > height ? height * this._config.size / width | 0 : this._config.size : height;
    }
  }, {
    key: "realHeight",
    get: function get() {
      return this._video.videoHeight;
    }
  }, {
    key: "realWidth",
    get: function get() {
      return this._video.videoWidth;
    }
  }, {
    key: "config",
    set: function set(config) {
      this._config = config;
      this._video.src = typeof config.src !== 'undefined' ? config.src : '';
    }
  }, {
    key: "ended",
    get: function get() {
      return this._video.ended;
    }
  }, {
    key: "currentTime",
    set: function set(time) {
      if (this._config.type !== 'LiveStream') {
        this._video.currentTime = time;
      }
    }
  }]);

  return VideoStream;
}(_input_stream__WEBPACK_IMPORTED_MODULE_8__["InputStream"]);
var LiveStream =
/*#__PURE__*/
function (_VideoStream) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(LiveStream, _VideoStream);

  function LiveStream(video) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, LiveStream);

    video.setAttribute('autoplay', '');
    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(LiveStream).call(this, video));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(LiveStream, [{
    key: "ended",
    get: function get() {
      return false;
    }
  }]);

  return LiveStream;
}(VideoStream);

/***/ }),

/***/ "./src/locator/barcode-locator-utils.ts":
/*!**********************************************!*\
  !*** ./src/locator/barcode-locator-utils.ts ***!
  \**********************************************/
/*! exports provided: invert, transformWithMatrix, otsuThreshold, halfSample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invert", function() { return invert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformWithMatrix", function() { return transformWithMatrix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "otsuThreshold", function() { return otsuThreshold; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "halfSample", function() { return halfSample; });
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
 * @param matrix matrix to transform with
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
 * @param imageWrapper input image to be sampled
 * @param outImageWrapper {ImageWrapper} to be stored in
 */

function halfSample(imageWrapper, outImageWrapper) {
  var image = imageWrapper.data;
  var width = imageWrapper.size.x;
  var outImage = outImageWrapper.data;
  var endIndex = image.length;
  var outWidth = width >> 1;
  var topRowIndex = 0;
  var bottomRowIndex = width;
  var outImgIndex = 0;

  while (bottomRowIndex < endIndex) {
    for (var i = 0; i < outWidth; i++) {
      outImage[outImgIndex] = image[topRowIndex] + image[topRowIndex + 1] + image[bottomRowIndex] + image[bottomRowIndex + 1] >> 2;
      outImgIndex++;
      topRowIndex += 2;
      bottomRowIndex += 2;
    }

    topRowIndex += width;
    bottomRowIndex += width;
  }
}

/***/ }),

/***/ "./src/locator/barcode-locator.ts":
/*!****************************************!*\
  !*** ./src/locator/barcode-locator.ts ***!
  \****************************************/
/*! exports provided: BarcodeLocator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarcodeLocator", function() { return BarcodeLocator; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_cluster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/cluster */ "./src/common/cluster.ts");
/* harmony import */ var _common_hsv2rgb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/hsv2rgb */ "./src/common/hsv2rgb.ts");
/* harmony import */ var _common_image_debug__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/image-debug */ "./src/common/image-debug.ts");
/* harmony import */ var _common_image_wrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/image-wrapper */ "./src/common/image-wrapper.ts");
/* harmony import */ var _input_input_stream_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../input/input-stream-utils */ "./src/input/input-stream-utils.ts");
/* harmony import */ var _barcode_locator_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./barcode-locator-utils */ "./src/locator/barcode-locator-utils.ts");
/* harmony import */ var _rasterizer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./rasterizer */ "./src/locator/rasterizer.ts");
/* harmony import */ var _skeletonizer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./skeletonizer */ "./src/locator/skeletonizer.js");
/* harmony import */ var _tracer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tracer */ "./src/locator/tracer.ts");












var MomentSimilarityThreshold = 0.9;
var BarcodeLocator =
/*#__PURE__*/
function () {
  function BarcodeLocator(inputImageWrapper, config) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, BarcodeLocator);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "_config", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "_inputImageWrapper", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "_currentImageWrapper", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "_skelImageWrapper", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "_subImageWrapper", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "_labelImageWrapper", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "_binaryImageWrapper", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "_patchGrid", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "_patchLabelGrid", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "_imageToPatchGrid", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "_patchSize", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "_binaryContext", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "_numPatches", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "_skeletonizer", void 0);

    this._config = config;
    this._inputImageWrapper = inputImageWrapper;
    this._numPatches = {
      x: 0,
      y: 0
    };

    this._initBuffers();

    this._initCanvas();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(BarcodeLocator, [{
    key: "locate",
    value: function locate() {
      if (this._config.halfSample) {
        Object(_barcode_locator_utils__WEBPACK_IMPORTED_MODULE_8__["halfSample"])(this._inputImageWrapper, this._currentImageWrapper);
      }

      this._binarizeImage();

      var patchesFound = this._findPatches(); // return unless 5% or more patches are found


      if (patchesFound.length < this._numPatches.x * this._numPatches.y * 0.05) {
        return null;
      } // rasterize area by comparing angular similarity;


      var maxLabel = this._rasterizeAngularSimilarity(patchesFound);

      if (maxLabel < 1) {
        return null;
      } // search for area with the most patches (biggest connected area)


      var topLabels = this._findBiggestConnectedAreas(maxLabel);

      if (topLabels.length === 0) {
        return null;
      }

      var boxes = this._findBoxes(topLabels, maxLabel);

      return boxes;
    }
  }, {
    key: "_initBuffers",
    value: function _initBuffers() {
      if (this._config.halfSample) {
        this._currentImageWrapper = new _common_image_wrapper__WEBPACK_IMPORTED_MODULE_6__["ImageWrapper"]({
          x: this._inputImageWrapper.size.x / 2 | 0,
          y: this._inputImageWrapper.size.y / 2 | 0
        });
      } else {
        this._currentImageWrapper = this._inputImageWrapper;
      }

      this._patchSize = Object(_input_input_stream_utils__WEBPACK_IMPORTED_MODULE_7__["calculatePatchSize"])(this._config.patchSize, this._currentImageWrapper.size);
      this._numPatches.x = this._currentImageWrapper.size.x / this._patchSize.x | 0;
      this._numPatches.y = this._currentImageWrapper.size.y / this._patchSize.y | 0;
      this._binaryImageWrapper = new _common_image_wrapper__WEBPACK_IMPORTED_MODULE_6__["ImageWrapper"](this._currentImageWrapper.size, undefined, Uint8Array, false);
      this._labelImageWrapper = new _common_image_wrapper__WEBPACK_IMPORTED_MODULE_6__["ImageWrapper"](this._patchSize, undefined, Array, true);
      var skeletonImageData = new ArrayBuffer(64 * 1024);
      this._subImageWrapper = new _common_image_wrapper__WEBPACK_IMPORTED_MODULE_6__["ImageWrapper"](this._patchSize, new Uint8Array(skeletonImageData, 0, this._patchSize.x * this._patchSize.y));
      this._skelImageWrapper = new _common_image_wrapper__WEBPACK_IMPORTED_MODULE_6__["ImageWrapper"](this._patchSize, new Uint8Array(skeletonImageData, this._patchSize.x * this._patchSize.y * 3, this._patchSize.x * this._patchSize.y), undefined, true);
      this._skeletonizer = Object(_skeletonizer__WEBPACK_IMPORTED_MODULE_10__["default"])(typeof window !== 'undefined' ? window : typeof self !== 'undefined' ? self : global, {
        size: this._patchSize.x
      }, skeletonImageData);
      var size = {
        x: this._currentImageWrapper.size.x / this._subImageWrapper.size.x | 0,
        y: this._currentImageWrapper.size.y / this._subImageWrapper.size.y | 0
      };
      this._patchLabelGrid = new _common_image_wrapper__WEBPACK_IMPORTED_MODULE_6__["ImageWrapper"](size, undefined, Int32Array, true);
      this._patchGrid = new _common_image_wrapper__WEBPACK_IMPORTED_MODULE_6__["ImageWrapper"](size, undefined, undefined, true);
      this._imageToPatchGrid = new Array(this._patchLabelGrid.data.length);
    }
  }, {
    key: "_initCanvas",
    value: function _initCanvas() {
      if (this._config.useWorker || typeof document === 'undefined') {
        return;
      }

      var canvas = document.createElement('canvas');
      canvas.className = 'binaryBuffer';
      canvas.width = this._binaryImageWrapper.size.x;
      canvas.height = this._binaryImageWrapper.size.y;

      if ( true && this._config.debug && this._config.debug.showCanvas) {
        document.querySelector('#debug').appendChild(canvas);
      }

      this._binaryContext = canvas.getContext('2d');
    }
    /**
     * Creates a bounding box which encloses all the given patches
     * @returns The minimal bounding box
     */

  }, {
    key: "_boxFromPatches",
    value: function _boxFromPatches(patches) {
      var _this = this;

      var debug =  true && this._config.debug;
      var averageRad = patches.reduce(function (sum, _ref) {
        var pos = _ref.pos,
            rad = _ref.rad;

        if (debug && debug.showPatches) {
          // draw all patches which are to be taken into consideration
          _this._drawRect(pos, _this._subImageWrapper.size, 'red', 1);
        }

        return sum + rad;
      }, 0) / patches.length;
      averageRad = (averageRad * 180 / Math.PI + 90) % 180 - 90;

      if (averageRad < 0) {
        averageRad += 180;
      }

      averageRad = (180 - averageRad) * Math.PI / 180;
      var cos = Math.cos(averageRad);
      var sin = Math.sin(averageRad);
      var matrix = new Float32Array([cos, sin, -sin, cos]);
      var inverseMatrix = Object(_barcode_locator_utils__WEBPACK_IMPORTED_MODULE_8__["invert"])(matrix); // iterate over patches and rotate by angle

      patches.forEach(function (_ref2) {
        var box = _ref2.box;

        for (var j = 0; j < 4; j++) {
          box[j] = Object(_barcode_locator_utils__WEBPACK_IMPORTED_MODULE_8__["transformWithMatrix"])(box[j], matrix);
        }

        if (debug && debug.boxFromPatches.showTransformed) {
          _this._drawPath(box, '#99ff00', 2);
        }
      });
      var minX = this._binaryImageWrapper.size.x;
      var minY = this._binaryImageWrapper.size.y;
      var maxX = -minX;
      var maxY = -minY; // find bounding box

      patches.forEach(function (_ref3) {
        var box = _ref3.box;
        box.forEach(function (_ref4) {
          var x = _ref4.x,
              y = _ref4.y;

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

      if (debug && debug.boxFromPatches.showTransformedBox) {
        this._drawPath(box, '#ff0000', 2);
      } // reverse rotation


      box = box.map(function (vertex) {
        return Object(_barcode_locator_utils__WEBPACK_IMPORTED_MODULE_8__["transformWithMatrix"])(vertex, inverseMatrix);
      });

      if (debug && debug.boxFromPatches.showBB) {
        this._drawPath(box, '#ff0000', 2);
      }

      if (this._config.halfSample) {
        // scale
        box = box.map(function (_ref5) {
          var x = _ref5.x,
              y = _ref5.y;
          return {
            x: x * 2,
            y: y *= 2
          };
        });
      }

      return box;
    }
    /**
     * Creates a binary image of the current image
     */

  }, {
    key: "_binarizeImage",
    value: function _binarizeImage() {
      Object(_barcode_locator_utils__WEBPACK_IMPORTED_MODULE_8__["otsuThreshold"])(this._currentImageWrapper, this._binaryImageWrapper);

      this._binaryImageWrapper.zeroBorder();

      if ( true && this._config.debug && this._config.debug.showCanvas) {
        this._binaryImageWrapper.show(this._binaryContext, 255);
      }
    }
    /**
     * Iterate over the entire image, extract patches
     */

  }, {
    key: "_findPatches",
    value: function _findPatches() {
      var debug =  true && this._config.debug;
      var patchesFound = new Array();

      for (var i = 0; i < this._numPatches.x; i++) {
        for (var j = 0; j < this._numPatches.y; j++) {
          var x = this._subImageWrapper.size.x * i;
          var y = this._subImageWrapper.size.y * j; // seperate parts

          this._skeletonize(x, y); // Rasterize, find individual bars


          this._skelImageWrapper.zeroBorder();

          this._labelImageWrapper.data.fill(0);

          var rasterizer = new _rasterizer__WEBPACK_IMPORTED_MODULE_9__["Rasterizer"](this._skelImageWrapper, this._labelImageWrapper);
          var rasterResult = rasterizer.rasterize(0);

          if (debug && debug.showLabels) {
            this._labelImageWrapper.overlay(this._binaryContext, 360 / rasterResult.count | 0, x, y);
          } // calculate moments from the skeletonized patch


          var moments = this._labelImageWrapper.moments(rasterResult.count); // extract eligible patches


          var patch = this._describePatch(moments, j * this._numPatches.x + i, x, y);

          if (patch) {
            patchesFound.push(patch);

            if (debug && debug.showFoundPatches) {
              this._drawRect(patch.pos, this._subImageWrapper.size, '#99ff00', 2);
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

  }, {
    key: "_findBiggestConnectedAreas",
    value: function _findBiggestConnectedAreas(maxLabel) {
      var labelHist = new Array(maxLabel).fill(0);

      this._patchLabelGrid.data.forEach(function (data) {
        if (data > 0) {
          labelHist[data - 1]++;
        }
      }); // extract top areas with at least 6 patches present


      var topLabels = labelHist.map(function (value, index) {
        return {
          value: value,
          index: index
        };
      }).filter(function (_ref6) {
        var value = _ref6.value;
        return value >= 5;
      }).sort(function (a, b) {
        return b.value - a.value;
      }).map(function (_ref7) {
        var index = _ref7.index;
        return index + 1;
      });
      return topLabels;
    }
    /**
     *
     */

  }, {
    key: "_findBoxes",
    value: function _findBoxes(topLabels, maxLabel) {
      var _this2 = this;

      var boxes = new Array();
      var showRemainingPatchLabels =  true && this._config.debug && this._config.debug.showRemainingPatchLabels;
      topLabels.forEach(function (label) {
        var patches = new Array();

        _this2._patchLabelGrid.data.forEach(function (data, index) {
          if (data === label) {
            patches.push(_this2._imageToPatchGrid[index]);
          }
        });

        var box = _this2._boxFromPatches(patches);

        if (box) {
          boxes.push(box);

          if (showRemainingPatchLabels) {
            // draw patch-labels if requested
            var hsv = [label / (maxLabel + 1) * 360, 1, 1];
            var rgb = [0, 0, 0];
            Object(_common_hsv2rgb__WEBPACK_IMPORTED_MODULE_4__["hsv2rgb"])(hsv, rgb);
            var color = "rgb(".concat(rgb.join(','), ")");
            patches.forEach(function (_ref8) {
              var pos = _ref8.pos;
              return _this2._drawRect(pos, _this2._subImageWrapper.size, color, 2);
            });
          }
        }
      });
      return boxes;
    }
    /**
     * Find similar moments (via cluster)
     * @param moments
     */

  }, {
    key: "_similarMoments",
    value: function _similarMoments(moments) {
      var clusters = _common_cluster__WEBPACK_IMPORTED_MODULE_3__["Cluster"].clusterize(moments, MomentSimilarityThreshold);
      var topCluster = clusters.reduce(function (top, item) {
        var count = item.moments.length;
        return count > top.count ? {
          item: item,
          count: count
        } : top;
      }, {
        item: {
          moments: []
        },
        count: 0
      });
      var result = topCluster.item.moments;
      return result;
    }
  }, {
    key: "_skeletonize",
    value: function _skeletonize(x, y) {
      this._binaryImageWrapper.subImageAsCopy(this._subImageWrapper, x, y);

      this._skeletonizer.skeletonize(); // Show skeleton if requested


      if ( true && this._config.debug && this._config.debug.showSkeleton) {
        this._skelImageWrapper.overlay(this._binaryContext, 360, x, y);
      }
    }
    /**
     * Extracts and describes those patches which seem to contain a barcode pattern
     * @param moments
     * @param index
     * @param x
     * @param y
     * @returns list of patches
     */

  }, {
    key: "_describePatch",
    value: function _describePatch(moments, index, x, y) {
      if (moments.length > 1) {
        var minComponentWeight = Math.ceil(this._patchSize.x / 3); // only collect moments which area covers at least minComponentWeight pixels

        var eligibleMoments = moments.filter(function (moment) {
          return moment.m00 > minComponentWeight;
        }); // if at least 2 moments are found which have at least minComponentWeights covered

        if (eligibleMoments.length > 1) {
          var matchingMoments = this._similarMoments(eligibleMoments);

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
                x: x + this._subImageWrapper.size.x,
                y: y
              }, {
                x: x + this._subImageWrapper.size.x,
                y: y + this._subImageWrapper.size.y
              }, {
                x: x,
                y: y + this._subImageWrapper.size.y
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
  }, {
    key: "_notYetProcessed",
    value: function _notYetProcessed() {
      for (var i = 0; i < this._patchLabelGrid.data.length; i++) {
        if (this._patchLabelGrid.data[i] === 0 && this._patchGrid.data[i] === 1) {
          return i;
        }
      }

      return this._patchLabelGrid.data.length;
    }
  }, {
    key: "_trace",
    value: function _trace(currentIndex, label) {
      var _this3 = this;

      var threshold = 0.95;
      var current = {
        x: currentIndex % this._patchLabelGrid.size.x,
        y: currentIndex / this._patchLabelGrid.size.x | 0
      };

      if (currentIndex < this._patchLabelGrid.data.length) {
        var currentPatch = this._imageToPatchGrid[currentIndex]; // assign label

        this._patchLabelGrid.data[currentIndex] = label;
        _tracer__WEBPACK_IMPORTED_MODULE_11__["SearchDirections"].forEach(function (direction) {
          var y = current.y + direction[0];
          var x = current.x + direction[1];
          var index = y * _this3._patchLabelGrid.size.x + x; // continue if patch empty

          if (_this3._patchGrid.data[index] === 0) {
            _this3._patchLabelGrid.data[index] = Number.MAX_VALUE;
          } else if (_this3._patchLabelGrid.data[index] === 0) {
            var patch = _this3._imageToPatchGrid[index];
            var similarity = Math.abs(patch.x * currentPatch.x + patch.y * currentPatch.y);

            if (similarity > threshold) {
              _this3._trace(index, label);
            }
          }
        });
      }
    }
    /**
     * Finds patches which are connected and share the same orientation
     * @param patchesFound
     */

  }, {
    key: "_rasterizeAngularSimilarity",
    value: function _rasterizeAngularSimilarity(patchesFound) {
      var _this4 = this;

      var label = 0;
      var hsv = [0, 1, 1];
      var rgb = [0, 0, 0]; // prepare for finding the right patches

      this._patchGrid.data.fill(0);

      this._patchLabelGrid.data.fill(0);

      this._imageToPatchGrid.fill(null);

      patchesFound.forEach(function (patch) {
        _this4._imageToPatchGrid[patch.index] = patch;
        _this4._patchGrid.data[patch.index] = 1;
      }); // rasterize the patches found to determine area

      this._patchGrid.zeroBorder();

      var currentIndex = 0;

      while ((currentIndex = this._notYetProcessed()) < this._patchLabelGrid.data.length) {
        label++;

        this._trace(currentIndex, label);
      } // draw patch-labels if requested


      if ( true && this._config.debug && this._config.debug.showPatchLabels) {
        for (var j = 0; j < this._patchLabelGrid.data.length; j++) {
          if (this._patchLabelGrid.data[j] > 0 && this._patchLabelGrid.data[j] <= label) {
            var patch = this._imageToPatchGrid[j];
            hsv[0] = this._patchLabelGrid.data[j] / (label + 1) * 360;
            Object(_common_hsv2rgb__WEBPACK_IMPORTED_MODULE_4__["hsv2rgb"])(hsv, rgb);

            this._drawRect(patch.pos, this._subImageWrapper.size, "rgb(".concat(rgb.join(','), ")"), 2);
          }
        }
      }

      return label;
    }
  }, {
    key: "_drawRect",
    value: function _drawRect(_ref9, size, color, lineWidth) {
      var x = _ref9.x,
          y = _ref9.y;
      this._binaryContext.strokeStyle = color;
      this._binaryContext.fillStyle = color;
      this._binaryContext.lineWidth = lineWidth || 1;

      this._binaryContext.strokeRect(x, y, size.x, size.y);
    }
  }, {
    key: "_drawPath",
    value: function _drawPath(path, color, lineWidth) {
      _common_image_debug__WEBPACK_IMPORTED_MODULE_5__["ImageDebug"].drawPath(path, this._binaryContext, color, lineWidth);
    }
  }]);

  return BarcodeLocator;
}();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/locator/rasterizer.ts":
/*!***********************************!*\
  !*** ./src/locator/rasterizer.ts ***!
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
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tracer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tracer */ "./src/locator/tracer.ts");




/**
 * @borrows http://www.codeproject.com/Tips/407172/Connected-Component-Labeling-and-Vectorization
 */

var EdgeLabel;

(function (EdgeLabel) {
  EdgeLabel[EdgeLabel["Outside"] = -32767] = "Outside";
  EdgeLabel[EdgeLabel["Inside"] = -32766] = "Inside";
})(EdgeLabel || (EdgeLabel = {}));

;
var ContourDirection;

(function (ContourDirection) {
  ContourDirection[ContourDirection["CW"] = 0] = "CW";
  ContourDirection[ContourDirection["CCW"] = 1] = "CCW";
  ContourDirection[ContourDirection["Unknown"] = 2] = "Unknown";
})(ContourDirection || (ContourDirection = {}));

;
var Rasterizer =
/*#__PURE__*/
function () {
  function Rasterizer(imageWrapper, labelWrapper) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Rasterizer);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "_width", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "_height", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "_tracer", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "_imageData", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "_labelData", void 0);

    this._imageData = imageWrapper.data;
    this._labelData = labelWrapper.data;
    this._width = imageWrapper.size.x;
    this._height = imageWrapper.size.y;
    this._tracer = new _tracer__WEBPACK_IMPORTED_MODULE_3__["Tracer"](imageWrapper, labelWrapper);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Rasterizer, [{
    key: "rasterize",
    value: function rasterize(depthLabel) {
      var colorMap = new Array();

      for (var i = 0; i < 400; i++) {
        colorMap[i] = 0;
      }

      colorMap[0] = this._imageData[0];
      var cc = null;
      var sc;
      var connectedCount = 0;

      for (var cy = 1; cy < this._height - 1; cy++) {
        var labelIndex = 0;
        var bc = colorMap[0];

        for (var cx = 1; cx < this._width - 1; cx++) {
          var pos = cy * this._width + cx;

          if (this._labelData[pos] === 0) {
            var color = this._imageData[pos];

            if (color !== bc) {
              if (labelIndex === 0) {
                var lc = connectedCount + 1;
                colorMap[lc] = color;
                bc = color;

                var vertex = this._tracer.contourTracing(cy, cx, lc, color, EdgeLabel.Outside);

                if (vertex !== null) {
                  connectedCount++;
                  labelIndex = lc;
                  var p = {
                    dir: ContourDirection.CW,
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
                var _vertex = this._tracer.contourTracing(cy, cx, EdgeLabel.Inside, color, labelIndex);

                if (_vertex !== null) {
                  var _p = {
                    dir: depthLabel === 0 ? ContourDirection.CCW : ContourDirection.CW,
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
              this._labelData[pos] = labelIndex;
            }
          } else if (this._labelData[pos] === EdgeLabel.Inside) {
            labelIndex = 0;
            bc = this._imageData[pos];
          } else if (this._labelData[pos] === EdgeLabel.Outside) {
            labelIndex = 0;
            bc = colorMap[0];
          } else {
            labelIndex = this._labelData[pos];
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
          case ContourDirection.CW:
            {
              ctx.strokeStyle = 'red';
              break;
            }

          case ContourDirection.CCW:
            {
              ctx.strokeStyle = 'blue';
              break;
            }

          case ContourDirection.Unknown:
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

/***/ "./src/locator/tracer.ts":
/*!*******************************!*\
  !*** ./src/locator/tracer.ts ***!
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
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);




/**
 * @borrows http://www.codeproject.com/Tips/407172/Connected-Component-Labeling-and-Vectorization
 */
var SearchDirections = [[0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1], [-1, 0], [-1, 1]];
var Tracer =
/*#__PURE__*/
function () {
  function Tracer(imageWrapper, labelWrapper) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Tracer);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "_imageData", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "_labelData", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "_width", void 0);

    this._imageData = imageWrapper.data;
    this._labelData = labelWrapper.data;
    this._width = imageWrapper.size.x;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Tracer, [{
    key: "trace",
    value: function trace(current, color, label, edgeLabel) {
      for (var i = 0; i < 7; i++) {
        var y = current.cy + SearchDirections[current.dir][0] | 0;
        var x = current.cx + SearchDirections[current.dir][1] | 0;
        var pos = y * this._width + x | 0;

        if (this._imageData[pos] === color && (this._labelData[pos] === 0 || this._labelData[pos] === label)) {
          this._labelData[pos] = label;
          current.cx = x;
          current.cy = y;
          return true;
        } else {
          if (this._labelData[pos] === 0) {
            this._labelData[pos] = edgeLabel;
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

/***/ "./src/quagga.ts":
/*!***********************!*\
  !*** ./src/quagga.ts ***!
  \***********************/
/*! exports provided: Quagga, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Quagga", function() { return Quagga; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/events */ "./src/common/events.ts");
/* harmony import */ var _common_image_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/image-wrapper */ "./src/common/image-wrapper.ts");
/* harmony import */ var _common_merge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/merge */ "./src/common/merge.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./config/config */ "./src/config/config.dev.ts");
/* harmony import */ var _decoder_barcode_decoder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./decoder/barcode-decoder */ "./src/decoder/barcode-decoder.ts");
/* harmony import */ var _input_camera_access__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./input/camera-access */ "./src/input/camera-access.ts");
/* harmony import */ var _input_frame_grabber__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./input/frame-grabber */ "./src/input/frame-grabber.ts");
/* harmony import */ var _input_image_stream__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./input/image-stream */ "./src/input/image-stream.ts");
/* harmony import */ var _input_live_stream__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./input/live-stream */ "./src/input/live-stream.ts");
/* harmony import */ var _input_video_stream__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./input/video-stream */ "./src/input/video-stream.ts");
/* harmony import */ var _input_input_stream_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./input/input-stream-utils */ "./src/input/input-stream-utils.ts");
/* harmony import */ var _locator_barcode_locator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./locator/barcode-locator */ "./src/locator/barcode-locator.ts");
















var __factorySource__;

var Quagga =
/*#__PURE__*/
function () {
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Quagga, null, [{
    key: "decodeSingle",
    value: function decodeSingle(_config, resultCallback) {
      _config = Object(_common_merge__WEBPACK_IMPORTED_MODULE_5__["merge"])({
        inputStream: {
          type: 'ImageStream',
          sequence: false,
          size: 800,
          src: _config.src
        },
        numOfWorkers:  true && _config.debug ? 0 : 1,
        locator: {
          halfSample: false
        }
      }, _config);
      var quagga = new Quagga(_config, function () {
        _common_events__WEBPACK_IMPORTED_MODULE_3__["Events"].once('processed', function (result) {
          quagga.stop();
          resultCallback.call(null, result);
        }, true);
        quagga.start();
      });
    }
  }]);

  function Quagga(_config, cb, imageWrapper) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Quagga);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "_inputStream", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "_frameGrabber", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "_stopped", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "_canvasContainer", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "_inputImageWrapper", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "_locator", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "_boxSize", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "_decoder", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "_workerPool", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "_onUIThread", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "_resultCollector", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "_config", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "CameraAccess", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "ImageDebug", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "ImageWrapper", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "ResultCollector", void 0);

    this._onUIThread = true;
    this._canvasContainer = {
      ctx: {
        image: null,
        overlay: null
      },
      dom: {
        image: null,
        overlay: null
      }
    };
    this._workerPool = new Array();
    this._config = Object(_common_merge__WEBPACK_IMPORTED_MODULE_5__["merge"])(_config_config__WEBPACK_IMPORTED_MODULE_6__["config"], _config);

    if (imageWrapper) {
      this._onUIThread = false;

      this._initializeData(imageWrapper);

      cb();
    } else {
      this._initInputStream(cb);
    }
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Quagga, [{
    key: "start",
    value: function start() {
      if (this._onUIThread && this._config.inputStream.type === 'LiveStream') {
        this._startContinuousUpdate();
      } else {
        this._update();
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      this._stopped = true;

      this._adjustWorkerPool(0);

      if (this._config.inputStream.type === 'LiveStream') {
        _input_camera_access__WEBPACK_IMPORTED_MODULE_8__["CameraAccess"].release();

        this._inputStream.clearEventHandlers();
      }
    }
  }, {
    key: "pause",
    value: function pause() {
      this._stopped = true;
    }
  }, {
    key: "onDetected",
    value: function onDetected(callback) {
      _common_events__WEBPACK_IMPORTED_MODULE_3__["Events"].subscribe('detected', callback);
    }
  }, {
    key: "offDetected",
    value: function offDetected(callback) {
      _common_events__WEBPACK_IMPORTED_MODULE_3__["Events"].unsubscribe('detected', callback);
    }
  }, {
    key: "onProcessed",
    value: function onProcessed(callback) {
      _common_events__WEBPACK_IMPORTED_MODULE_3__["Events"].subscribe('processed', callback);
    }
  }, {
    key: "offProcessed",
    value: function offProcessed(callback) {
      _common_events__WEBPACK_IMPORTED_MODULE_3__["Events"].unsubscribe('processed', callback);
    }
  }, {
    key: "setReaders",
    value: function setReaders(readers) {
      if (this._decoder) {
        this._decoder.setReaders(readers);
      } else if (this._onUIThread && this._workerPool.length > 0) {
        this._workerPool.forEach(function (_ref) {
          var worker = _ref.worker;
          return worker.postMessage({
            cmd: 'setReaders',
            readers: readers
          });
        });
      }
    }
  }, {
    key: "registerResultCollector",
    value: function registerResultCollector(resultCollector) {
      if (resultCollector && typeof resultCollector.addResult === 'function') {
        this._resultCollector = resultCollector;
      }
    }
  }, {
    key: "_initializeData",
    value: function _initializeData(imageWrapper) {
      this._initBuffers(imageWrapper);

      this._decoder = new _decoder_barcode_decoder__WEBPACK_IMPORTED_MODULE_7__["BarcodeDecoder"](this._config.decoder, this._inputImageWrapper);
    }
  }, {
    key: "_initInputStream",
    value: function _initInputStream(callback) {
      var _this = this;

      var video;

      if (this._config.inputStream.type === 'VideoStream') {
        video = document.createElement('video');
        this._inputStream = new _input_video_stream__WEBPACK_IMPORTED_MODULE_12__["VideoStream"](video);
      } else if (this._config.inputStream.type === 'ImageStream') {
        this._inputStream = new _input_image_stream__WEBPACK_IMPORTED_MODULE_10__["ImageStream"]();
      } else if (this._config.inputStream.type === 'LiveStream') {
        var viewport = this._getViewPort();

        if (viewport) {
          video = viewport.querySelector('video');

          if (!video) {
            video = document.createElement('video');
            viewport.appendChild(video);
          }
        }

        this._inputStream = new _input_live_stream__WEBPACK_IMPORTED_MODULE_11__["LiveStream"](video);
        _input_camera_access__WEBPACK_IMPORTED_MODULE_8__["CameraAccess"].request(video, this._config.inputStream.constraints).then(function () {
          return _this._inputStream.trigger('canrecord');
        }, function (err) {
          return callback(err);
        });
      }

      this._inputStream.setAttribute('preload', 'auto');

      this._inputStream.config = this._config.inputStream;

      this._inputStream.addEventListener('canrecord', this._canRecord.bind(this, callback));
    }
  }, {
    key: "_getViewPort",
    value: function _getViewPort() {
      var target = this._config.inputStream.target; // Check if target is already a DOM element

      if (target instanceof HTMLElement) {
        return target;
      } else {
        // Use '#interactive.viewport' as a fallback selector (backwards compatibility)
        var selector = typeof target === 'string' ? target : '#interactive.viewport';
        return document.querySelector(selector);
      }
    }
  }, {
    key: "_canRecord",
    value: function _canRecord(cb) {
      var _this2 = this;

      Object(_input_input_stream_utils__WEBPACK_IMPORTED_MODULE_13__["checkImageConstraints"])(this._inputStream, this._config.locator);

      this._initCanvas();

      this._frameGrabber = new _input_frame_grabber__WEBPACK_IMPORTED_MODULE_9__["FrameGrabber"](this._inputStream, this._canvasContainer.dom.image);

      this._adjustWorkerPool(this._config.numOfWorkers, function () {
        if (_this2._config.numOfWorkers === 0) {
          _this2._initializeData();
        }

        _this2._inputStream.play();

        cb();
      });
    }
  }, {
    key: "_initCanvas",
    value: function _initCanvas() {
      if (typeof document !== 'undefined') {
        var viewport = this._getViewPort();

        this._canvasContainer.dom.image = document.querySelector('canvas.imgBuffer');

        if (!this._canvasContainer.dom.image) {
          this._canvasContainer.dom.image = document.createElement('canvas');
          this._canvasContainer.dom.image.className = 'imgBuffer';

          if (viewport && this._config.inputStream.type === 'ImageStream') {
            viewport.appendChild(this._canvasContainer.dom.image);
          }
        }

        this._canvasContainer.ctx.image = this._canvasContainer.dom.image.getContext('2d');
        this._canvasContainer.dom.image.width = this._inputStream.canvasWidth;
        this._canvasContainer.dom.image.height = this._inputStream.canvasHeight;
        this._canvasContainer.dom.overlay = document.querySelector('canvas.drawingBuffer');

        if (!this._canvasContainer.dom.overlay) {
          this._canvasContainer.dom.overlay = document.createElement('canvas');
          this._canvasContainer.dom.overlay.className = 'drawingBuffer';

          if (viewport) {
            viewport.appendChild(this._canvasContainer.dom.overlay);
          }

          var clearFix = document.createElement('br');
          clearFix.setAttribute('clear', 'all');

          if (viewport) {
            viewport.appendChild(clearFix);
          }
        }

        this._canvasContainer.ctx.overlay = this._canvasContainer.dom.overlay.getContext('2d');
        this._canvasContainer.dom.overlay.width = this._inputStream.canvasWidth;
        this._canvasContainer.dom.overlay.height = this._inputStream.canvasHeight;
      }
    }
  }, {
    key: "_initBuffers",
    value: function _initBuffers(imageWrapper) {
      if (imageWrapper) {
        this._inputImageWrapper = imageWrapper;
      } else {
        this._inputImageWrapper = new _common_image_wrapper__WEBPACK_IMPORTED_MODULE_4__["ImageWrapper"]({
          x: this._inputStream.width,
          y: this._inputStream.height
        });
      }

      if (true) {
        console.log(this._inputImageWrapper.size);
      }

      this._boxSize = [{
        x: 0,
        y: 0
      }, {
        x: 0,
        y: this._inputImageWrapper.size.y
      }, {
        x: this._inputImageWrapper.size.x,
        y: this._inputImageWrapper.size.y
      }, {
        x: this._inputImageWrapper.size.x,
        y: 0
      }];
      this._locator = new _locator_barcode_locator__WEBPACK_IMPORTED_MODULE_14__["BarcodeLocator"](this._inputImageWrapper, this._config.locator);
    }
  }, {
    key: "_getBoundingBoxes",
    value: function _getBoundingBoxes() {
      if (this._config.locate) {
        return this._locator.locate();
      } else {
        return [[this._boxSize[0], this._boxSize[1], this._boxSize[2], this._boxSize[3]]];
      }
    }
  }, {
    key: "_transform",
    value: function _transform(polygon, offset) {
      polygon.forEach(function (vertex) {
        vertex.x += offset.x;
        vertex.y += offset.y;
      });
    }
  }, {
    key: "_transformResult",
    value: function _transformResult(result, offset) {
      var _this3 = this;

      if (result.barcodes) {
        result.barcodes.forEach(function (barcode) {
          return _this3._transformResult(barcode, offset);
        });
      }

      if (result.line) {
        this._transform(result.line, offset);
      }

      if (result.box) {
        this._transform(result.box, offset);
      }

      if (result.boxes) {
        result.boxes.forEach(function (box) {
          return _this3._transform(box, offset);
        });
      }
    }
  }, {
    key: "_addResult",
    value: function _addResult(result, imageData, canvasWidth, canvasHeight) {
      var _this4 = this;

      if (imageData && this._resultCollector) {
        if (result.barcodes) {
          result.barcodes.forEach(function (_ref2) {
            var codeResult = _ref2.codeResult;

            if (codeResult) {
              _this4._resultCollector.addResult(imageData, canvasWidth, canvasHeight, codeResult);
            }
          });
        } else if (result.codeResult) {
          this._resultCollector.addResult(imageData, canvasWidth, canvasHeight, result.codeResult);
        }
      }
    }
  }, {
    key: "_hasCodeResult",
    value: function _hasCodeResult(result) {
      return result && (!!result.codeResult || result.barcodes && result.barcodes.some(function (barcode) {
        return !!barcode.codeResult;
      }));
    }
  }, {
    key: "_publishResult",
    value: function _publishResult(result, imageData) {
      var resultToPublish = result;

      if (result && this._onUIThread) {
        var offset = this._inputStream.topLeft;

        if (offset.x !== 0 || offset.y !== 0) {
          this._transformResult(result, offset);
        }

        this._addResult(result, imageData, this._inputStream.canvasWidth, this._inputStream.canvasHeight);

        resultToPublish = result.barcodes || result;
      }

      _common_events__WEBPACK_IMPORTED_MODULE_3__["Events"].publish('processed', resultToPublish);

      if (this._hasCodeResult(result)) {
        _common_events__WEBPACK_IMPORTED_MODULE_3__["Events"].publish('detected', resultToPublish);
      }
    }
  }, {
    key: "_locateAndDecode",
    value: function _locateAndDecode() {
      var boxes = this._getBoundingBoxes();

      if (boxes) {
        var result = this._decoder.decodeFromBoundingBoxes(boxes) || {};
        result.boxes = boxes;

        this._publishResult(result, this._inputImageWrapper.data);
      } else {
        this._publishResult();
      }
    }
  }, {
    key: "_update",
    value: function _update() {
      var availableWorker;

      if (this._onUIThread) {
        if (this._workerPool.length > 0) {
          availableWorker = this._workerPool.find(function (workerThread) {
            return !workerThread.busy;
          });

          if (availableWorker) {
            this._frameGrabber.attachData(availableWorker.imageData);
          } else {
            return; // all workers are busy
          }
        } else {
          this._frameGrabber.attachData(this._inputImageWrapper.data);
        }

        if (this._frameGrabber.grab()) {
          if (availableWorker) {
            availableWorker.busy = true;
            availableWorker.worker.postMessage({
              cmd: 'process',
              imageData: availableWorker.imageData
            }, [availableWorker.imageData.buffer]);
          } else {
            this._locateAndDecode();
          }
        }
      } else {
        this._locateAndDecode();
      }
    }
  }, {
    key: "_startContinuousUpdate",
    value: function _startContinuousUpdate() {
      var delay = 1000 / (this._config.frequency || 60);
      var that = this;
      var next = null;
      this._stopped = false;

      (function frame(timestamp) {
        next = next || timestamp;

        if (!that._stopped) {
          if (timestamp >= next) {
            next += delay;

            that._update();
          }

          window.requestAnimationFrame(frame);
        }
      })(performance.now());
    }
  }, {
    key: "_initWorker",
    value: function _initWorker(cb) {
      var _this5 = this;

      var blobURL = this._generateWorkerBlob();

      var workerThread = {
        worker: new Worker(blobURL),
        imageData: new Uint8Array(this._inputStream.width * this._inputStream.height),
        busy: true
      };

      workerThread.worker.onmessage = function (_ref3) {
        var data = _ref3.data;

        if (data.event === 'initialized') {
          URL.revokeObjectURL(blobURL);
          workerThread.busy = false;
          workerThread.imageData = new Uint8Array(data.imageData);

          if (true) {
            console.log('Worker initialized');
          }

          cb(workerThread);
        } else if (data.event === 'processed') {
          workerThread.busy = false;
          workerThread.imageData = new Uint8Array(data.imageData);

          _this5._publishResult(data.result, workerThread.imageData);
        } else if (data.event === 'error') {
          if (true) {
            console.log('Worker error:', data.message);
          }
        }
      };

      workerThread.worker.postMessage({
        cmd: 'init',
        size: {
          x: this._inputStream.width,
          y: this._inputStream.height
        },
        imageData: workerThread.imageData,
        config: Object(_common_merge__WEBPACK_IMPORTED_MODULE_5__["merge"])(this._config, {
          inputStream: {
            target: null
          }
        })
      }, [workerThread.imageData.buffer]);
    }
  }, {
    key: "_workerInterface",
    value: function _workerInterface(factory) {
      var origin = '*';
      var quagga;
      var imageWrapper;

      if (factory) {
        quagga = factory()["default"];

        if (!quagga) {
          self.postMessage({
            event: 'error',
            message: 'Quagga could not be created'
          }, origin);
          return;
        }
      }

      self.onmessage = function (_ref4) {
        var data = _ref4.data;

        if (data.cmd === 'init') {
          var _config = data.config;
          _config.numOfWorkers = 0;
          imageWrapper = new _common_image_wrapper__WEBPACK_IMPORTED_MODULE_4__["ImageWrapper"]({
            x: data.size.x,
            y: data.size.y
          }, new Uint8Array(data.imageData));
          quagga = new Quagga(_config, function () {
            return self.postMessage({
              event: 'initialized',
              imageData: imageWrapper.data
            }, origin, [imageWrapper.data.buffer]);
          }, imageWrapper);
          quagga.onProcessed(function (result) {
            return self.postMessage({
              event: 'processed',
              imageData: imageWrapper.data,
              result: result
            }, origin, [imageWrapper.data.buffer]);
          });
        } else if (data.cmd === 'process') {
          imageWrapper.data = new Uint8Array(data.imageData);
          quagga.start();
        } else if (data.cmd === 'setReaders') {
          quagga.setReaders(data.readers);
        }
      };
    }
  }, {
    key: "_generateWorkerBlob",
    value: function _generateWorkerBlob() {
      var blob = new Blob(["(".concat(this._workerInterface.toString(), ")(").concat(__factorySource__ || '', ");")], {
        type: 'text/javascript'
      });
      return window.URL.createObjectURL(blob);
    }
  }, {
    key: "_adjustWorkerPool",
    value: function _adjustWorkerPool(capacity, cb) {
      var _this6 = this;

      var increaseBy = capacity - this._workerPool.length;

      if (increaseBy === 0) {
        return cb && cb();
      }

      if (increaseBy < 0) {
        this._workerPool.slice(increaseBy).forEach(function (_ref5) {
          var worker = _ref5.worker;
          worker.terminate();

          if (true) {
            console.log('Worker terminated!');
          }
        });

        this._workerPool = this._workerPool.slice(0, increaseBy);
        return cb && cb();
      } else {
        for (var i = 0; i < increaseBy; i++) {
          this._initWorker(function (workerThread) {
            _this6._workerPool.push(workerThread);

            if (_this6._workerPool.length >= capacity && cb) {
              cb();
            }
          });
        }
      }
    }
  }, {
    key: "canvas",
    get: function get() {
      return this._canvasContainer;
    }
  }]);

  return Quagga;
}();
/* harmony default export */ __webpack_exports__["default"] = (Quagga);

/***/ }),

/***/ "./src/reader/2of5-reader.ts":
/*!***********************************!*\
  !*** ./src/reader/2of5-reader.ts ***!
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
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../../node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _barcode_reader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./barcode-reader */ "./src/reader/barcode-reader.ts");








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
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(TwoOfFiveReader, _BarcodeReader);

  function TwoOfFiveReader(config) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, TwoOfFiveReader);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(TwoOfFiveReader).call(this, config));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "_barSpaceRatio", void 0);

    _this._barSpaceRatio = [1, 1];
    _this._format = '2of5';
    _this._singleCodeError = 0.78;
    _this._averageCodeError = 0.30;
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(TwoOfFiveReader, [{
    key: "decode",
    value: function decode() {
      var startInfo = this._findStart();

      if (!startInfo) {
        return null;
      }

      var endInfo = this._findEnd();

      if (!endInfo) {
        return null;
      }

      var counters = this._fillCounters(startInfo.end, endInfo.start, 0);

      if (counters.length % 10 !== 0) {
        return null;
      }

      var result = new Array();
      var decodedCodes = new Array();
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
  }, {
    key: "_findStart",
    value: function _findStart() {
      var offset = this._nextSet(this._row);

      var narrowBarWidth = 1;
      var startInfo;

      while (!startInfo) {
        startInfo = this._findPattern(START_PATTERN, offset, 0, true);

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

      var endInfo = this._findPattern(STOP_PATTERN, offset, 0, true);

      this._row.reverse();

      if (endInfo === null) {
        return null;
      } // reverse numbers


      var start = endInfo.start;
      endInfo.start = this._row.length - endInfo.end;
      endInfo.end = this._row.length - start;
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

        result.push(code.code);
        decodedCodes.push(code);
      }

      return code;
    }
  }]);

  return TwoOfFiveReader;
}(_barcode_reader__WEBPACK_IMPORTED_MODULE_7__["BarcodeReader"]);

/***/ }),

/***/ "./src/reader/barcode-reader.ts":
/*!**************************************!*\
  !*** ./src/reader/barcode-reader.ts ***!
  \**************************************/
/*! exports provided: BarcodeDirection, BarcodeReader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarcodeDirection", function() { return BarcodeDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarcodeReader", function() { return BarcodeReader; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);



var BarcodeDirection;

(function (BarcodeDirection) {
  BarcodeDirection[BarcodeDirection["Forward"] = 1] = "Forward";
  BarcodeDirection[BarcodeDirection["Reverse"] = -1] = "Reverse";
})(BarcodeDirection || (BarcodeDirection = {}));

;
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

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "_singleCodeError", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "_averageCodeError", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "_format", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "_row", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "config", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "supplements", void 0);

    this._format = 'unknown';
    this._row = [];
    this.config = config || {};
    this.supplements = supplements;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(BarcodeReader, [{
    key: "_findPattern",
    value: function _findPattern(pattern, offset, isWhite, tryHarder) {
      var counter = new Array(pattern.length);
      var bestMatch = {
        error: Number.MAX_VALUE,
        code: -1,
        start: 0,
        end: 0
      };
      var epsilon = this.AVERAGE_CODE_ERROR;
      var counterPos = 0;

      if (!offset) {
        offset = this._nextSet(this._row);
      }

      counter.fill(0);

      for (var i = offset; i < this._row.length; i++) {
        if (this._row[i] ^ isWhite) {
          counter[counterPos]++;
        } else {
          if (counterPos === counter.length - 1) {
            var error = this._matchPattern(counter, pattern);

            if (error < epsilon) {
              bestMatch.error = error;
              bestMatch.start = i - counter.reduce(function (sum, value) {
                return sum + value;
              }, 0);
              bestMatch.end = i;
              return bestMatch;
            }

            if (tryHarder) {
              for (var j = 0; j < counter.length - 2; j++) {
                counter[j] = counter[j + 2];
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
          isWhite = isWhite ? 0 : 1;
        }
      }

      return null;
    }
  }, {
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
    key: "_nextSet",
    value: function _nextSet(line, start) {
      for (var i = start || 0; i < line.length; i++) {
        if (line[i]) {
          return i;
        }
      }

      return line.length;
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
      var result = this.decode();

      if (result === null) {
        this._row.reverse();

        result = this.decode();

        if (result) {
          result.direction = BarcodeDirection.Reverse;
          result.start = this._row.length - result.start;
          result.end = this._row.length - result.end;
        }
      } else {
        result.direction = BarcodeDirection.Forward;
      }

      if (result) {
        result.format = this.FORMAT;
      }

      return result;
    }
  }, {
    key: "_fillCounters",
    value: function _fillCounters(offset, end, isWhite) {
      var counters = new Array();
      var counterPos = 0;
      counters[counterPos] = 0;

      for (var i = offset; i < end; i++) {
        if (this._row[i] ^ isWhite) {
          counters[counterPos]++;
        } else {
          counterPos++;
          counters[counterPos] = 1;
          isWhite = isWhite ? 0 : 1;
        }
      }

      return counters;
    }
  }, {
    key: "_toCounters",
    value: function _toCounters(start, counters) {
      var numCounters = counters.length;
      var end = this._row.length;
      var isWhite = this._row[start] ? 0 : 1;
      var counterPos = 0;
      counters.fill(0);

      for (var i = start; i < end; i++) {
        if (this._row[i] ^ isWhite) {
          counters[counterPos]++;
        } else {
          counterPos++;

          if (counterPos === numCounters) {
            break;
          } else {
            counters[counterPos] = 1;
            isWhite = isWhite ? 0 : 1;
          }
        }
      }

      return counters;
    }
  }]);

  return BarcodeReader;
}();

/***/ }),

/***/ "./src/reader/codabar-reader.ts":
/*!**************************************!*\
  !*** ./src/reader/codabar-reader.ts ***!
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
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../../node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "../../node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _barcode_reader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./barcode-reader */ "./src/reader/barcode-reader.ts");










var ALPHABETH_STRING = '0123456789-$:/.+ABCD';

var ALPHABET = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_8___default()(ALPHABETH_STRING).map(function (_char) {
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
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(CodabarReader, _BarcodeReader);

  function CodabarReader() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, CodabarReader);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(CodabarReader).call(this));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "_counters", void 0);

    _this._format = 'codabar';
    _this._counters = [];
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(CodabarReader, [{
    key: "decode",
    value: function decode() {
      this._counters = this._fillCounters(this._nextUnset(this._row), this._row.length, 1);

      var start = this._findStart();

      if (!start) {
        return null;
      }

      var result = new Array();
      var nextStart = start.startCounter;
      var pattern;

      do {
        pattern = this._toPattern(nextStart);

        if (pattern < 0) {
          return null;
        }

        var decodedChar = this._patternToChar(pattern);

        if (decodedChar === null) {
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
      var threshold = this._thresholdResultPattern(result, startCounter);

      var pos = startCounter;

      for (var i = 0; i < result.length; i++) {
        var pattern = this._charToPattern(result[i]);

        for (var j = 6; j >= 0; j--) {
          var kind = (j & 1) === 0 ? threshold.bar : threshold.space;
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

      return null;
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
}(_barcode_reader__WEBPACK_IMPORTED_MODULE_9__["BarcodeReader"]);

/***/ }),

/***/ "./src/reader/code-128-reader.ts":
/*!***************************************!*\
  !*** ./src/reader/code-128-reader.ts ***!
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
/* harmony import */ var _barcode_reader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./barcode-reader */ "./src/reader/barcode-reader.ts");






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
      var isWhite = this._row[offset] ? 0 : 1;
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
              bestMatch.correction.bar = this._calculateCorrection(expected, counter, MODULE_INDICES.bar);
              bestMatch.correction.space = this._calculateCorrection(expected, counter, MODULE_INDICES.space);
            }

            return bestMatch;
          } else {
            counterPos++;
          }

          counter[counterPos] = 1;
          isWhite = isWhite ? 0 : 1;
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
      var isWhite = 0;
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
              bestMatch.correction.bar = this._calculateCorrection(CODE_PATTERN[bestMatch.code], counter, MODULE_INDICES.bar);
              bestMatch.correction.space = this._calculateCorrection(CODE_PATTERN[bestMatch.code], counter, MODULE_INDICES.space);
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
          isWhite = isWhite ? 0 : 1;
        }
      }

      return null;
    }
  }, {
    key: "decode",
    value: function decode() {
      var result = new Array();

      var startInfo = this._findStart();

      var code = null;
      var done = false;
      var multiplier = 0;
      var checksum = 0;
      var codeset;
      var rawResult = new Array();
      var decodedCodes = new Array();
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
    key: "_calculateCorrection",
    value: function _calculateCorrection(expected, normalized, indices) {
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

/***/ "./src/reader/code-39-reader.ts":
/*!**************************************!*\
  !*** ./src/reader/code-39-reader.ts ***!
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
/* harmony import */ var _barcode_reader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./barcode-reader */ "./src/reader/barcode-reader.ts");







var ASTERISK = 0x094;
var ALPHABETH_STRING = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. *$/+%';
var ALPHABET = new Uint16Array(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5___default()(ALPHABETH_STRING).map(function (_char) {
  return _char.charCodeAt(0);
})); // const ALPHABET = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78,
//     79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 45, 46, 32, 42, 36, 47, 43, 37];

var CHARACTER_ENCODINGS = new Uint16Array([0x034, 0x121, 0x061, 0x160, 0x031, 0x130, 0x070, 0x025, 0x124, 0x064, 0x109, 0x049, 0x148, 0x019, 0x118, 0x058, 0x00D, 0x10C, 0x04C, 0x01C, 0x103, 0x043, 0x142, 0x013, 0x112, 0x052, 0x007, 0x106, 0x046, 0x016, 0x181, 0x0C1, 0x1C0, 0x091, 0x190, 0x0D0, 0x085, 0x184, 0x0C4, 0x094, 0x0A8, 0x0A2, 0x08A, 0x02A]);
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
    key: "decode",
    value: function decode() {
      var start = this._findStart();

      if (!start) {
        return null;
      }

      var result = new Array();
      var counters = new Uint16Array(9);
      var decodedChar;
      var lastStart;

      var nextStart = this._nextSet(this._row, start.end);

      do {
        this._toCounters(nextStart, counters);

        var pattern = this._toPattern(counters);

        if (pattern < 0) {
          return null;
        }

        decodedChar = this._patternToChar(pattern);

        if (decodedChar === null) {
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
    key: "_patternToChar",
    value: function _patternToChar(pattern) {
      for (var i = 0; i < CHARACTER_ENCODINGS.length; i++) {
        if (CHARACTER_ENCODINGS[i] === pattern) {
          return String.fromCharCode(ALPHABET[i]);
        }
      }

      return null;
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
      var counter = new Uint16Array(9);
      var counterPos = 0;
      var isWhite = 0;
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
          isWhite = isWhite ? 0 : 1;
        }
      }

      return null;
    }
  }]);

  return Code39Reader;
}(_barcode_reader__WEBPACK_IMPORTED_MODULE_6__["BarcodeReader"]);

/***/ }),

/***/ "./src/reader/code-39-vin-reader.ts":
/*!******************************************!*\
  !*** ./src/reader/code-39-vin-reader.ts ***!
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
/* harmony import */ var _code_39_reader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./code-39-reader */ "./src/reader/code-39-reader.ts");







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
    key: "decode",
    value: function decode() {
      var result = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Code39VINReader.prototype), "decode", this).call(this);

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

/***/ "./src/reader/code-93-reader.ts":
/*!**************************************!*\
  !*** ./src/reader/code-93-reader.ts ***!
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
/* harmony import */ var _barcode_reader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./barcode-reader */ "./src/reader/barcode-reader.ts");







var ALPHABETH_STRING = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. $/+%abcd*';
var ALPHABET = new Uint16Array(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5___default()(ALPHABETH_STRING).map(function (_char) {
  return _char.charCodeAt(0);
}));
var CHARACTER_ENCODINGS = new Uint16Array([0x114, 0x148, 0x144, 0x142, 0x128, 0x124, 0x122, 0x150, 0x112, 0x10A, 0x1A8, 0x1A4, 0x1A2, 0x194, 0x192, 0x18A, 0x168, 0x164, 0x162, 0x134, 0x11A, 0x158, 0x14C, 0x146, 0x12C, 0x116, 0x1B4, 0x1B2, 0x1AC, 0x1A6, 0x196, 0x19A, 0x16C, 0x166, 0x136, 0x13A, 0x12E, 0x1D4, 0x1D2, 0x1CA, 0x16E, 0x176, 0x1AE, 0x126, 0x1DA, 0x1D6, 0x132, 0x15E]);
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
    key: "decode",
    value: function decode() {
      var start = this._findStart();

      if (!start) {
        return null;
      }

      var result = new Array();
      var counters = new Uint16Array(6);
      var decodedChar;
      var lastStart;

      var nextStart = this._nextSet(this._row, start.end);

      do {
        this._toCounters(nextStart, counters);

        var pattern = this._toPattern(counters);

        if (pattern < 0) {
          return null;
        }

        decodedChar = this._patternToChar(pattern);

        if (decodedChar === null) {
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

      if (!this._verifyEnd(lastStart, nextStart)) {
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
    key: "_patternToChar",
    value: function _patternToChar(pattern) {
      for (var i = 0; i < CHARACTER_ENCODINGS.length; i++) {
        if (CHARACTER_ENCODINGS[i] === pattern) {
          return String.fromCharCode(ALPHABET[i]);
        }
      }

      return null;
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
      var counter = new Uint16Array(6);

      var offset = this._nextSet(this._row);

      var patternStart = offset;
      var counterPos = 0;
      var isWhite = 0;
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
          isWhite = isWhite ? 0 : 1;
        }
      }

      return null;
    }
  }, {
    key: "_decodeExtended",
    value: function _decodeExtended(charArray) {
      var length = charArray.length;
      var result = new Array();

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

/***/ "./src/reader/ean-2-reader.ts":
/*!************************************!*\
  !*** ./src/reader/ean-2-reader.ts ***!
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
/* harmony import */ var _ean_reader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ean-reader */ "./src/reader/ean-reader.ts");






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
      var result = new Array();
      var decodedCodes = new Array();
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

/***/ "./src/reader/ean-5-reader.ts":
/*!************************************!*\
  !*** ./src/reader/ean-5-reader.ts ***!
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
/* harmony import */ var _ean_reader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ean-reader */ "./src/reader/ean-reader.ts");






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
      var result = new Array();
      var decodedCodes = new Array();
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

/***/ "./src/reader/ean-8-reader.ts":
/*!************************************!*\
  !*** ./src/reader/ean-8-reader.ts ***!
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
/* harmony import */ var _ean_reader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ean-reader */ "./src/reader/ean-reader.ts");






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

      code = this._findPattern(this.MIDDLE_PATTERN, code.end, 1, false);

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

/***/ "./src/reader/ean-reader.ts":
/*!**********************************!*\
  !*** ./src/reader/ean-reader.ts ***!
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
/* harmony import */ var _common_merge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/merge */ "./src/common/merge.ts");
/* harmony import */ var _barcode_reader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./barcode-reader */ "./src/reader/barcode-reader.ts");







function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var EXTENSION_START_PATTERN = [1, 1, 2];
var CODE_PATTERN = [[3, 2, 1, 1], [2, 2, 2, 1], [2, 1, 2, 2], [1, 4, 1, 1], [1, 1, 3, 2], [1, 2, 3, 1], [1, 1, 1, 4], [1, 3, 1, 2], [1, 2, 1, 3], [3, 1, 1, 2], [1, 1, 2, 3], [1, 2, 2, 2], [2, 2, 1, 2], [1, 1, 4, 1], [2, 3, 1, 1], [1, 3, 2, 1], [4, 1, 1, 1], [2, 1, 3, 1], [3, 1, 2, 1], [2, 1, 1, 3]];
var CODE_FREQUENCY = [0, 11, 13, 14, 19, 25, 28, 21, 22, 26];
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
      var isWhite = this._row[offset] ? 0 : 1;
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
          isWhite = isWhite ? 0 : 1;
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
        startInfo = this._findPattern(this.START_PATTERN, offset, 0, true);

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
      for (var i = 0; i < CODE_FREQUENCY.length; i++) {
        if (codeFrequency === CODE_FREQUENCY[i]) {
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
      code = this._findPattern(this.MIDDLE_PATTERN, code.end, 1, false);

      if (code === null) {
        return null;
      }

      decodedCodes.push(code);

      for (var _i = 0; _i < 6; _i++) {
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
    key: "decode",
    value: function decode() {
      var result = new Array();
      var decodedCodes = new Array();
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

      code = this._findEnd(code.end, 0);

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
        startInfo: startInfo,
        decodedCodes: decodedCodes
      }, resultInfo);
    }
  }, {
    key: "_decodeExtensions",
    value: function _decodeExtensions(offset) {
      var start = this._nextSet(this._row, offset);

      var startInfo = this._findPattern(EXTENSION_START_PATTERN, start, 0, false);

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

      for (var _i2 = result.length - 1; _i2 >= 0; _i2 -= 2) {
        sum += result[_i2];
      }

      return sum % 10 === 0;
    }
  }]);

  return EANReader;
}(_barcode_reader__WEBPACK_IMPORTED_MODULE_7__["BarcodeReader"]);

/***/ }),

/***/ "./src/reader/i2of5-reader.ts":
/*!************************************!*\
  !*** ./src/reader/i2of5-reader.ts ***!
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
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../../node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "../../node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _common_merge__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/merge */ "./src/common/merge.ts");
/* harmony import */ var _barcode_reader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./barcode-reader */ "./src/reader/barcode-reader.ts");










var N = 1;
var W = 3;
var START_PATTERN = [N, N, N, N];
var STOP_PATTERN = [N, N, W];
var CODE_PATTERN = [[N, N, W, W, N], [W, N, N, N, W], [N, W, N, N, W], [W, W, N, N, N], [N, N, W, N, W], [W, N, W, N, N], [N, W, W, N, N], [N, N, N, W, W], [W, N, N, W, N], [N, W, N, W, N]];
var MAX_CORRECTION_FACTOR = 5;
var I2of5Reader =
/*#__PURE__*/
function (_BarcodeReader) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(I2of5Reader, _BarcodeReader);

  function I2of5Reader(config) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, I2of5Reader);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(I2of5Reader).call(this, Object(_common_merge__WEBPACK_IMPORTED_MODULE_8__["merge"])({
      normalizeBarSpaceWidth: false // Normalize the width difference between bars and spaces

    }, config)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "_barSpaceRatio", void 0);

    _this._barSpaceRatio = [1, 1];
    _this._format = 'i2of5';

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
    key: "decode",
    value: function decode() {
      var startInfo = this._findStart();

      if (!startInfo) {
        return null;
      }

      var endInfo = this._findEnd();

      if (!endInfo) {
        return null;
      }

      var counters = this._fillCounters(startInfo.end, endInfo.start, 0);

      if (counters.length % 10 !== 0) {
        return null;
      }

      var result = new Array();
      var decodedCodes = new Array();
      decodedCodes.push(startInfo);

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
  }, {
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

      return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(I2of5Reader.prototype), "_matchPattern", this).call(this, counter, code);
    }
  }, {
    key: "_findStart",
    value: function _findStart() {
      var offset = this._nextSet(this._row);

      var startInfo;

      while (!startInfo) {
        startInfo = this._findPattern(START_PATTERN, offset, 0, true);

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

      var endInfo = this._findPattern(STOP_PATTERN, undefined, 0, false);

      this._row.reverse();

      if (endInfo === null) {
        return null;
      } // reverse numbers


      var start = endInfo.start;
      endInfo.start = this._row.length - endInfo.end;
      endInfo.end = this._row.length - start;
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
      var counter0 = [0, 0, 0, 0, 0];
      var counter1 = [0, 0, 0, 0, 0];
      var code0;
      var code1;
      var pos = 0;

      while (pos < counterLength) {
        for (var i = 0; i < 5; i++) {
          counter0[i] = counters[pos] * this._barSpaceRatio[0];
          counter1[i] = counters[pos + 1] * this._barSpaceRatio[1];
          pos += 2;
        }

        code0 = this._decodeCode(counter0);

        if (!code0) {
          return null;
        }

        code1 = this._decodeCode(counter1);

        if (!code1) {
          return null;
        }

        result.push(code0.code, code1.code);
        decodedCodes.push(code0, code1);
      }

      return [code0, code1];
    }
  }]);

  return I2of5Reader;
}(_barcode_reader__WEBPACK_IMPORTED_MODULE_9__["BarcodeReader"]);

/***/ }),

/***/ "./src/reader/index.ts":
/*!*****************************!*\
  !*** ./src/reader/index.ts ***!
  \*****************************/
/*! exports provided: Readers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Readers", function() { return Readers; });
/* harmony import */ var _code_128_reader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./code-128-reader */ "./src/reader/code-128-reader.ts");
/* harmony import */ var _code_39_reader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./code-39-reader */ "./src/reader/code-39-reader.ts");
/* harmony import */ var _code_39_vin_reader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code-39-vin-reader */ "./src/reader/code-39-vin-reader.ts");
/* harmony import */ var _codabar_reader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./codabar-reader */ "./src/reader/codabar-reader.ts");
/* harmony import */ var _ean_reader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ean-reader */ "./src/reader/ean-reader.ts");
/* harmony import */ var _ean_8_reader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ean-8-reader */ "./src/reader/ean-8-reader.ts");
/* harmony import */ var _ean_2_reader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ean-2-reader */ "./src/reader/ean-2-reader.ts");
/* harmony import */ var _ean_5_reader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ean-5-reader */ "./src/reader/ean-5-reader.ts");
/* harmony import */ var _upc_reader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./upc-reader */ "./src/reader/upc-reader.ts");
/* harmony import */ var _upc_e_reader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./upc-e-reader */ "./src/reader/upc-e-reader.ts");
/* harmony import */ var _i2of5_reader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./i2of5-reader */ "./src/reader/i2of5-reader.ts");
/* harmony import */ var _2of5_reader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./2of5-reader */ "./src/reader/2of5-reader.ts");
/* harmony import */ var _code_93_reader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./code-93-reader */ "./src/reader/code-93-reader.ts");













var Readers = {
  code_128_reader: _code_128_reader__WEBPACK_IMPORTED_MODULE_0__["Code128Reader"],
  ean_reader: _ean_reader__WEBPACK_IMPORTED_MODULE_4__["EANReader"],
  ean_5_reader: _ean_5_reader__WEBPACK_IMPORTED_MODULE_7__["EAN5Reader"],
  ean_2_reader: _ean_2_reader__WEBPACK_IMPORTED_MODULE_6__["EAN2Reader"],
  ean_8_reader: _ean_8_reader__WEBPACK_IMPORTED_MODULE_5__["EAN8Reader"],
  code_39_reader: _code_39_reader__WEBPACK_IMPORTED_MODULE_1__["Code39Reader"],
  code_39_vin_reader: _code_39_vin_reader__WEBPACK_IMPORTED_MODULE_2__["Code39VINReader"],
  codabar_reader: _codabar_reader__WEBPACK_IMPORTED_MODULE_3__["CodabarReader"],
  upc_reader: _upc_reader__WEBPACK_IMPORTED_MODULE_8__["UPCReader"],
  upc_e_reader: _upc_e_reader__WEBPACK_IMPORTED_MODULE_9__["UPCEReader"],
  i2of5_reader: _i2of5_reader__WEBPACK_IMPORTED_MODULE_10__["I2of5Reader"],
  '2of5_reader': _2of5_reader__WEBPACK_IMPORTED_MODULE_11__["TwoOfFiveReader"],
  code_93_reader: _code_93_reader__WEBPACK_IMPORTED_MODULE_12__["Code93Reader"]
};

/***/ }),

/***/ "./src/reader/upc-e-reader.ts":
/*!************************************!*\
  !*** ./src/reader/upc-e-reader.ts ***!
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
/* harmony import */ var _ean_reader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ean-reader */ "./src/reader/ean-reader.ts");







var CODE_FREQUENCY = [[56, 52, 50, 49, 44, 38, 35, 42, 41, 37], [7, 11, 13, 14, 19, 25, 28, 21, 22, 26]];
var UPCEReader =
/*#__PURE__*/
function (_EANReader) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(UPCEReader, _EANReader);

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(UPCEReader, [{
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
      for (var nrSystem = 0; nrSystem < CODE_FREQUENCY.length; nrSystem++) {
        for (var i = 0; i < CODE_FREQUENCY[nrSystem].length; i++) {
          if (codeFrequency === CODE_FREQUENCY[nrSystem][i]) {
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
      isWhite = 1;
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

/***/ "./src/reader/upc-reader.ts":
/*!**********************************!*\
  !*** ./src/reader/upc-reader.ts ***!
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
/* harmony import */ var _ean_reader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ean-reader */ "./src/reader/ean-reader.ts");







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
    key: "decode",
    value: function decode() {
      var result = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(UPCReader.prototype), "decode", this).call(this);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9RdWFnZ2Evd2VicGFjay9teU1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vUXVhZ2dhL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1F1YWdnYS8vVXNlcnMvYWRvbXJhdGNoZXYvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy9Vc2Vycy9hZG9tcmF0Y2hldi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy9Vc2Vycy9hZG9tcmF0Y2hldi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yLmpzIiwid2VicGFjazovL1F1YWdnYS8vVXNlcnMvYWRvbXJhdGNoZXYvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy9Vc2Vycy9hZG9tcmF0Y2hldi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly9RdWFnZ2EvL1VzZXJzL2Fkb21yYXRjaGV2L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL1F1YWdnYS8vVXNlcnMvYWRvbXJhdGNoZXYvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0LmpzIiwid2VicGFjazovL1F1YWdnYS8vVXNlcnMvYWRvbXJhdGNoZXYvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy9Vc2Vycy9hZG9tcmF0Y2hldi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly9RdWFnZ2EvL1VzZXJzL2Fkb21yYXRjaGV2L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9RdWFnZ2EvL1VzZXJzL2Fkb21yYXRjaGV2L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL1F1YWdnYS8vVXNlcnMvYWRvbXJhdGNoZXYvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly9RdWFnZ2EvL1VzZXJzL2Fkb21yYXRjaGV2L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL1F1YWdnYS8vVXNlcnMvYWRvbXJhdGNoZXYvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc3VwZXJQcm9wQmFzZS5qcyIsIndlYnBhY2s6Ly9RdWFnZ2EvL1VzZXJzL2Fkb21yYXRjaGV2L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovL1F1YWdnYS8vVXNlcnMvYWRvbXJhdGNoZXYvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL1F1YWdnYS8vVXNlcnMvYWRvbXJhdGNoZXYvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwid2VicGFjazovL1F1YWdnYS8vVXNlcnMvYWRvbXJhdGNoZXYvbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS1tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy9Vc2Vycy9hZG9tcmF0Y2hldi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovL1F1YWdnYS8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL2NvbW1vbi9jbHVzdGVyLnRzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9jb21tb24vZXZlbnRzLnRzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9jb21tb24vaHN2MnJnYi50cyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvY29tbW9uL2ltYWdlLWRlYnVnLnRzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9jb21tb24vaW1hZ2Utd3JhcHBlci50cyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvY29tbW9uL21lZGlhLWRldmljZXMudHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL2NvbW1vbi9tZXJnZS50cyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvY29uZmlnL2NvbmZpZy5kZXYudHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL2RlY29kZXIvYmFyY29kZS1kZWNvZGVyLnRzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9kZWNvZGVyL2JyZXNlbmhhbS50cyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvaW5wdXQvY2FtZXJhLWFjY2Vzcy50cyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvaW5wdXQvZXhpZi1oZWxwZXIudHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL2lucHV0L2ZyYW1lLWdyYWJiZXIudHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL2lucHV0L2ltYWdlLWxvYWRlci50cyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvaW5wdXQvaW1hZ2Utc3RyZWFtLnRzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9pbnB1dC9pbnB1dC1zdHJlYW0tdXRpbHMudHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL2lucHV0L2lucHV0LXN0cmVhbS50cyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvaW5wdXQvbGl2ZS1zdHJlYW0udHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL2lucHV0L3ZpZGVvLXN0cmVhbS50cyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvbG9jYXRvci9iYXJjb2RlLWxvY2F0b3ItdXRpbHMudHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL2xvY2F0b3IvYmFyY29kZS1sb2NhdG9yLnRzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9sb2NhdG9yL3Jhc3Rlcml6ZXIudHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL2xvY2F0b3Ivc2tlbGV0b25pemVyLmpzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9sb2NhdG9yL3RyYWNlci50cyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvcXVhZ2dhLnRzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9yZWFkZXIvMm9mNS1yZWFkZXIudHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL3JlYWRlci9iYXJjb2RlLXJlYWRlci50cyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvcmVhZGVyL2NvZGFiYXItcmVhZGVyLnRzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9yZWFkZXIvY29kZS0xMjgtcmVhZGVyLnRzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9yZWFkZXIvY29kZS0zOS1yZWFkZXIudHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL3JlYWRlci9jb2RlLTM5LXZpbi1yZWFkZXIudHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL3JlYWRlci9jb2RlLTkzLXJlYWRlci50cyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvcmVhZGVyL2Vhbi0yLXJlYWRlci50cyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvcmVhZGVyL2Vhbi01LXJlYWRlci50cyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvcmVhZGVyL2Vhbi04LXJlYWRlci50cyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvcmVhZGVyL2Vhbi1yZWFkZXIudHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL3JlYWRlci9pMm9mNS1yZWFkZXIudHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL3JlYWRlci9pbmRleC50cyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvcmVhZGVyL3VwYy1lLXJlYWRlci50cyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvcmVhZGVyL3VwYy1yZWFkZXIudHMiXSwibmFtZXMiOlsiQ2x1c3RlciIsIm1vbWVudHMiLCJ0aHJlc2hvbGQiLCJjbHVzdGVycyIsIkFycmF5IiwiZm9yRWFjaCIsIm1vbWVudCIsIm1hdGNoaW5nQ2x1c3RlciIsImZpbmQiLCJjbHVzdGVyIiwiZml0cyIsImFkZCIsInB1c2giLCJfdGhyZXNob2xkIiwiX21vbWVudHMiLCJfY2VudGVyIiwicmFkIiwieCIsInkiLCJwb2ludCIsInJlZHVjZSIsInN1bSIsInAiLCJsZW5ndGgiLCJNYXRoIiwiY29zIiwic2luIiwic2ltaWxhcml0eSIsImFicyIsImV2ZW50cyIsIkV2ZW50cyIsImV2ZW50IiwiY2FsbGJhY2siLCJhc3luYyIsInN1YnNjcmlwdGlvbiIsImdldEV2ZW50Iiwic3Vic2NyaXB0aW9ucyIsInR5cGUiLCJkYXRhIiwiZXZlbnRJdGVtIiwiZmlsdGVyIiwib25jZSIsInB1Ymxpc2hTdWJzY3JpcHRpb24iLCJzdWJzY3JpYmUiLCJldmVudE5hbWUiLCJzZXRUaW1lb3V0IiwiaHN2MnJnYiIsImhzdiIsInJnYiIsImgiLCJzIiwidiIsImMiLCJtIiwiciIsImciLCJiIiwiSW1hZ2VEZWJ1ZyIsInBhdGgiLCJjb250ZXh0IiwiY29sb3IiLCJsaW5lV2lkdGgiLCJzdHJva2VTdHlsZSIsImZpbGxTdHlsZSIsImJlZ2luUGF0aCIsIm1vdmVUbyIsInNsaWNlIiwibGluZVRvIiwiY2xvc2VQYXRoIiwic3Ryb2tlIiwiaW1hZ2VEYXRhIiwid2lkdGgiLCJoZWlnaHQiLCJjYW52YXNEYXRhIiwiZ2V0SW1hZ2VEYXRhIiwiaW1hZ2VJbmRleCIsImNhbnZhc0luZGV4IiwidmFsdWUiLCJwdXRJbWFnZURhdGEiLCJJbWFnZVdyYXBwZXIiLCJzaXplIiwiYXJyYXlUeXBlIiwiaW5pdGlhbGl6ZSIsIlVpbnQ4QXJyYXkiLCJmaWxsIiwiYm9yZGVyIiwiaW1hZ2VXcmFwcGVyIiwiZnJvbVgiLCJmcm9tWSIsInNpemVZIiwic2l6ZVgiLCJpIiwibGFiZWxDb3VudCIsImxhYmVsU3VtIiwicmVzdWx0IiwibTAwIiwibTAxIiwibTEwIiwibTExIiwibTAyIiwibTIwIiwidGhldGEiLCJ5c3EiLCJ2YWwiLCJsYWJlbCIsIlBJIiwiUElfNCIsImlzTmFOIiwieF8iLCJ5XyIsIm11MTEiLCJtdTAyIiwibXUyMCIsInRtcCIsImF0YW4iLCJzY2FsZSIsImZyYW1lIiwiY3VycmVudCIsInBpeGVsIiwiZ2V0Iiwid2hpdGVSZ2IiLCJibGFja1JnYiIsImVudW1lcmF0ZURldmljZXMiLCJuYXZpZ2F0b3IiLCJtZWRpYURldmljZXMiLCJQcm9taXNlIiwicmVqZWN0IiwiRXJyb3IiLCJnZXRVc2VyTWVkaWEiLCJjb25zdHJhaW50cyIsIm1lcmdlIiwiaXNPYmplY3QiLCJvYmoiLCJvYmplY3RzIiwicHJldiIsIk9iamVjdCIsImtleXMiLCJrZXkiLCJwVmFsIiwib1ZhbCIsImlzQXJyYXkiLCJjb25maWciLCJpbnB1dFN0cmVhbSIsIm5hbWUiLCJmYWNpbmdNb2RlIiwiYXJlYSIsInRvcCIsInJpZ2h0IiwibGVmdCIsImJvdHRvbSIsInNpbmdsZUNoYW5uZWwiLCJsb2NhdGUiLCJudW1PZldvcmtlcnMiLCJkZWNvZGVyIiwicmVhZGVycyIsImRlYnVnIiwiZHJhd0JvdW5kaW5nQm94Iiwic2hvd0ZyZXF1ZW5jeSIsImRyYXdTY2FubGluZSIsInNob3dQYXR0ZXJuIiwibG9jYXRvciIsImhhbGZTYW1wbGUiLCJwYXRjaFNpemUiLCJzaG93Q2FudmFzIiwic2hvd1BhdGNoZXMiLCJzaG93Rm91bmRQYXRjaGVzIiwic2hvd1NrZWxldG9uIiwic2hvd0xhYmVscyIsInNob3dQYXRjaExhYmVscyIsInNob3dSZW1haW5pbmdQYXRjaExhYmVscyIsImJveEZyb21QYXRjaGVzIiwic2hvd1RyYW5zZm9ybWVkIiwic2hvd1RyYW5zZm9ybWVkQm94Iiwic2hvd0JCIiwiQmFyY29kZURlY29kZXIiLCJpbnB1dEltYWdlV3JhcHBlciIsIl9jb25maWciLCJfaW5wdXRJbWFnZVdyYXBwZXIiLCJfYmFyY29kZVJlYWRlcnMiLCJwcm9jZXNzIiwiZG9jdW1lbnQiLCJkZWJ1Z0RpdiIsInF1ZXJ5U2VsZWN0b3IiLCJfZnJlcXVlbmN5Q2FudmFzIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImFwcGVuZENoaWxkIiwic3R5bGUiLCJkaXNwbGF5IiwiX3BhdHRlcm5DYW52YXMiLCJvdmVybGF5Q2FudmFzIiwiX292ZXJsYXlDb250ZXh0IiwiZ2V0Q29udGV4dCIsIl9pbml0UmVhZGVycyIsImJveGVzIiwiYmFyY29kZXMiLCJtdWx0aXBsZSIsImJveCIsImRlY29kZUZyb21Cb3VuZGluZ0JveCIsImNvZGVSZXN1bHQiLCJfZHJhd1BhdGgiLCJsaW5lIiwiX2dldExpbmUiLCJhbmdsZSIsImF0YW4yIiwiX2dldEV4dGVuZGVkTGluZSIsIl90cnlEZWNvZGUiLCJfdHJ5RGVjb2RlQnJ1dGVGb3JjZSIsInBhdHRlcm4iLCJiYXJjb2RlTGluZSIsInJlYWRlckNvbmZpZyIsInJlYWRlciIsImNvbmZpZ3VyYXRpb24iLCJzdXBwbGVtZW50cyIsImZvcm1hdCIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJzdXBwbGVtZW50IiwiUmVhZGVycyIsIkZPUk1BVCIsIkpTT04iLCJzdHJpbmdpZnkiLCJleHRlbmRMaW5lIiwiYW1vdW50IiwiZXh0ZW5zaW9uIiwibGluZUxlbmd0aCIsInNxcnQiLCJleHRlbnNpb25MZW5ndGgiLCJpbkltYWdlV2l0aEJvcmRlciIsIkJyZXNlbmhhbSIsImdldEJhcmNvZGVMaW5lIiwiX3ByaW50RnJlcXVlbmN5IiwidG9CaW5hcnlMaW5lIiwiX3ByaW50UGF0dGVybiIsImRlY29kZVBhdHRlcm4iLCJsaW5lQW5nbGUiLCJzaWRlTGVuZ3RoIiwic2xpY2VzIiwieGRpciIsInlkaXIiLCJkaXIiLCJmaWxsUmVjdCIsImRyYXdQYXRoIiwiU2xvcGUiLCJwMSIsInAyIiwieDAiLCJ5MCIsIngxIiwieTEiLCJzdGVlcCIsIm1pbiIsIm1heCIsInJlYWQiLCJhIiwiZGVsdGF4IiwiZGVsdGF5IiwiZXJyb3IiLCJ5c3RlcCIsImNlbnRlciIsImV4dHJlbWEiLCJyVGhyZXNob2xkIiwiY3VycmVudERpciIsIlVwIiwiRG93biIsInBvcyIsInNsb3BlIiwic2xvcGUyIiwiaiIsIl9zdHJlYW0iLCJDYW1lcmFBY2Nlc3MiLCJ2aWRlbyIsInZpZGVvQ29uc3RyYWludHMiLCJub3JtYWxpemVkQ29uc3RyYWludHMiLCJwaWNrQ29uc3RyYWludHMiLCJzcmNPYmplY3QiLCJzZXRBdHRyaWJ1dGUiLCJyZXNvbHZlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBsYXkiLCJ0aGVuIiwiX3dhaXRGb3JWaWRlbyIsImJpbmQiLCJ0cmFja3MiLCJnZXRWaWRlb1RyYWNrcyIsInN0b3AiLCJkZXZpY2VzIiwia2luZCIsInRyYWNrIiwiZ2V0QWN0aXZlVHJhY2siLCJhc3BlY3RSYXRpbyIsImRldmljZUlkIiwibWluQXNwZWN0UmF0aW8iLCJmYWNpbmciLCJhdWRpbyIsInZpZGVvV2lkdGgiLCJ2aWRlb0hlaWdodCIsImF0dGVtcHRzIiwiY2hlY2tWaWRlbyIsIndpbmRvdyIsIkV4aWZUYWdzIiwiQXZhaWxhYmxlVGFncyIsImZpbmRUYWdzSW5PYmplY3RVUkwiLCJzcmMiLCJ0YWdzIiwidGVzdCIsIm9iamVjdFVSTFRvQmxvYiIsImJ1ZmZlciIsImZpbmRUYWdzSW5CdWZmZXIiLCJmaWxlIiwic2VsZWN0ZWRUYWdzIiwiZGF0YVZpZXciLCJEYXRhVmlldyIsImJ5dGVMZW5ndGgiLCJleGlmVGFncyIsInNlbGVjdGVkVGFnIiwiZXhpZlRhZyIsInRhZyIsIm9mZnNldCIsImdldFVpbnQ4IiwibWFya2VyIiwicmVhZEVYSUZEYXRhIiwiZ2V0VWludDE2IiwidXJsIiwiZmV0Y2giLCJyZXNwb25zZSIsIm9rIiwiYXJyYXlCdWZmZXIiLCJzdGF0dXMiLCJzdGFydCIsInNwbGl0Iiwic29tZSIsImNoYXIiLCJpbmRleCIsImNoYXJDb2RlQXQiLCJ0aWZmT2Zmc2V0IiwiYmlnRW5kIiwiZmlyc3RJRkRPZmZzZXQiLCJnZXRVaW50MzIiLCJyZWFkVGFncyIsImRpclN0YXJ0Iiwic3RyaW5ncyIsImVudHJpZXMiLCJlbnRyeU9mZnNldCIsInJlYWRUYWdWYWx1ZSIsIm51bVZhbHVlcyIsInVuZGVmaW5lZCIsIlFVQVRFUl9DSVJDTEUiLCJGcmFtZUdyYWJiZXIiLCJjYW52YXMiLCJfaW5wdXRTdHJlYW0iLCJfc3RyZWFtQ29uZmlnIiwiX2NhbnZhc1dpZHRoIiwiY2FudmFzV2lkdGgiLCJfY2FudmFzSGVpZ2h0IiwiY2FudmFzSGVpZ2h0IiwiX3dpZHRoIiwiX2hlaWdodCIsIl90b3BMZWZ0IiwidG9wTGVmdCIsIl9jYW52YXMiLCJfY29udGV4dCIsIl9kYXRhIiwidmlkZW9TaXplIiwicmVhbFdpZHRoIiwicmVhbEhlaWdodCIsImNhbnZhc1NpemUiLCJnZXRGcmFtZSIsIl9hZGp1c3RDYW52YXNTaXplIiwiZHJhd2FibGUiLCJkcmF3QW5nbGUiLCJIVE1MVmlkZW9FbGVtZW50IiwiaW1hZ2UiLCJvcmllbnRhdGlvbiIsImhhbGZXaWR0aCIsImhhbGZIZWlnaHQiLCJ0cmFuc2xhdGUiLCJyb3RhdGUiLCJkcmF3SW1hZ2UiLCJfZ3JheUFuZEhhbGZTYW1wbGVGcm9tQ2FudmFzRGF0YSIsIl9jb21wdXRlR3JheSIsIndhcm4iLCJlbmRJbmRleCIsIm91dFdpZHRoIiwidG9wUm93SW5kZXgiLCJib3R0b21Sb3dJbmRleCIsIm91dEltYWdlSW5kZXgiLCJ0b3A0IiwiYm90dG9tNCIsImltYWdlRGF0YUxlbmd0aCIsIkltYWdlTG9hZGVyIiwiYmFzZVVyaSIsInNlcXVlbmNlIiwibG9hZGVkIiwibG9hZGVkSW1hZ2UiLCJub3RMb2FkZWRJbWFnZXMiLCJzcGxpY2UiLCJpbWFnZVNyY3MiLCJpbWFnZU5hbWUiLCJzdWJzdHIiLCJsYXN0SW5kZXhPZiIsImxvYWRlZEltYWdlcyIsImZpcnN0SW1hZ2UiLCJJbWFnZSIsIm9ubG9hZCIsIkltYWdlU3RyZWFtIiwiX2Jhc2VVcmwiLCJfZW5kZWQiLCJfZnJhbWVJbmRleCIsIl9pbWFnZXMiLCJfbG9hZGVkIiwiX29mZnNldCIsIl9wYXVzZWQiLCJfc2l6ZSIsInRyaWdnZXIiLCJsb2FkIiwiaW1hZ2VzIiwiX2NhbGN1bGF0ZWRXaWR0aCIsIl9jYWxjdWxhdGVkSGVpZ2h0IiwiX2xvYWRJbWFnZXMiLCJ0aW1lIiwiSW5wdXRTdHJlYW0iLCJfY29tcHV0ZURpdmlzb3JzIiwibiIsImRpdmlzb3JzIiwibGFyZ2VEaXZpc29ycyIsImRpdmlzb3IiLCJ1bnNoaWZ0IiwiY29uY2F0IiwiX2NvbXB1dGVDb21tb25EaXZpc29ycyIsImxhcmdlRGl2aXNvciIsImNhbGN1bGF0ZVBhdGNoU2l6ZSIsIndpZGVTaWRlIiwibnJPZlBhdGNoZXNMaXN0IiwibnJPZlBhdGNoZXNNYXAiLCJzbWFsbCIsIm1lZGl1bSIsImxhcmdlIiwibnJPZlBhdGNoZXNJbmRleCIsIm5yT2ZQYXRjaGVzIiwiZGVzaXJlZFBhdGNoU2l6ZSIsImZpbmRQYXRjaFNpemVGb3JEaXZpc29ycyIsImZvdW5kIiwib3B0aW1hbFBhdGNoU2l6ZSIsImNoZWNrSW1hZ2VDb25zdHJhaW50cyIsInNoaWZ0IiwiY29tcHV0ZUltYWdlQXJlYSIsInNldENhbnZhc1NpemUiLCJfcGFyc2VDc3NEaW1lbnNpb25WYWx1ZXMiLCJkaW1lbnNpb24iLCJwYXJzZUZsb2F0IiwidW5pdCIsImluZGV4T2YiLCJfZGltZW5zaW9uc0NvbnZlcnRlcnMiLCJpbnB1dFdpZHRoIiwiaW5wdXRIZWlnaHQiLCJwYXJzZWRBcmVhIiwicGFyc2VkIiwiY2FsY3VsYXRlZCIsIl9ldmVudE5hbWVzIiwiX2V2ZW50SGFuZGxlcnMiLCJNYXAiLCJsaXN0ZW5lciIsIl9vcHRpb25zIiwiaGFzIiwic2V0IiwiY2xlYXIiLCJhcmdBcnJheSIsImhhbmRsZXJzIiwiYXBwbHkiLCJMaXZlU3RyZWFtIiwiVmlkZW9TdHJlYW0iLCJfdmlkZW8iLCJwYXVzZSIsIm9wdGlvbnMiLCJfaW5pdFNpemUiLCJlbmRlZCIsImN1cnJlbnRUaW1lIiwiaW52ZXJ0IiwibWF0cml4IiwiYTAiLCJhMSIsImEyIiwiYTMiLCJkZXRlcm1pbmFudCIsIkZsb2F0MzJBcnJheSIsInRyYW5zZm9ybVdpdGhNYXRyaXgiLCJfY29tcHV0ZUhpc3RvZ3JhbSIsImJpdHNQZXJQaXhlbCIsImJpdFNoaWZ0IiwiYnVja2V0Q291bnQiLCJoaXN0b2dyYW0iLCJJbnQzMkFycmF5IiwiX2RldGVybWluZU90c3VUaHJlc2hvbGQiLCJoaXN0IiwidmV0IiwicHgiLCJpbml0IiwiZW5kIiwibXgiLCJrIiwicDEyIiwibTEiLCJtMiIsIm0xMiIsIm1heEluZGV4IiwiaXRlbSIsImFycmF5Iiwib3RzdVRocmVzaG9sZCIsInRhcmdldFdyYXBwZXIiLCJ0YXJnZXREYXRhIiwib3V0SW1hZ2VXcmFwcGVyIiwib3V0SW1hZ2UiLCJvdXRJbWdJbmRleCIsIk1vbWVudFNpbWlsYXJpdHlUaHJlc2hvbGQiLCJCYXJjb2RlTG9jYXRvciIsIl9udW1QYXRjaGVzIiwiX2luaXRCdWZmZXJzIiwiX2luaXRDYW52YXMiLCJfY3VycmVudEltYWdlV3JhcHBlciIsIl9iaW5hcml6ZUltYWdlIiwicGF0Y2hlc0ZvdW5kIiwiX2ZpbmRQYXRjaGVzIiwibWF4TGFiZWwiLCJfcmFzdGVyaXplQW5ndWxhclNpbWlsYXJpdHkiLCJ0b3BMYWJlbHMiLCJfZmluZEJpZ2dlc3RDb25uZWN0ZWRBcmVhcyIsIl9maW5kQm94ZXMiLCJfcGF0Y2hTaXplIiwiX2JpbmFyeUltYWdlV3JhcHBlciIsIl9sYWJlbEltYWdlV3JhcHBlciIsInNrZWxldG9uSW1hZ2VEYXRhIiwiQXJyYXlCdWZmZXIiLCJfc3ViSW1hZ2VXcmFwcGVyIiwiX3NrZWxJbWFnZVdyYXBwZXIiLCJfc2tlbGV0b25pemVyIiwic2tlbGV0b25pemVyIiwic2VsZiIsImdsb2JhbCIsIl9wYXRjaExhYmVsR3JpZCIsIl9wYXRjaEdyaWQiLCJfaW1hZ2VUb1BhdGNoR3JpZCIsInVzZVdvcmtlciIsIl9iaW5hcnlDb250ZXh0IiwicGF0Y2hlcyIsImF2ZXJhZ2VSYWQiLCJfZHJhd1JlY3QiLCJpbnZlcnNlTWF0cml4IiwibWluWCIsIm1pblkiLCJtYXhYIiwibWF4WSIsInZlcnRleCIsInplcm9Cb3JkZXIiLCJzaG93IiwiX3NrZWxldG9uaXplIiwicmFzdGVyaXplciIsIlJhc3Rlcml6ZXIiLCJyYXN0ZXJSZXN1bHQiLCJyYXN0ZXJpemUiLCJvdmVybGF5IiwiY291bnQiLCJwYXRjaCIsIl9kZXNjcmliZVBhdGNoIiwibGFiZWxIaXN0Iiwic29ydCIsIl9ib3hGcm9tUGF0Y2hlcyIsImpvaW4iLCJjbHVzdGVyaXplIiwidG9wQ2x1c3RlciIsInN1YkltYWdlQXNDb3B5Iiwic2tlbGV0b25pemUiLCJtaW5Db21wb25lbnRXZWlnaHQiLCJjZWlsIiwiZWxpZ2libGVNb21lbnRzIiwibWF0Y2hpbmdNb21lbnRzIiwiX3NpbWlsYXJNb21lbnRzIiwiY3VycmVudEluZGV4IiwiY3VycmVudFBhdGNoIiwiU2VhcmNoRGlyZWN0aW9ucyIsImRpcmVjdGlvbiIsIk51bWJlciIsIk1BWF9WQUxVRSIsIl90cmFjZSIsIl9ub3RZZXRQcm9jZXNzZWQiLCJzdHJva2VSZWN0IiwiRWRnZUxhYmVsIiwiQ29udG91ckRpcmVjdGlvbiIsImxhYmVsV3JhcHBlciIsIl9pbWFnZURhdGEiLCJfbGFiZWxEYXRhIiwiX3RyYWNlciIsIlRyYWNlciIsImRlcHRoTGFiZWwiLCJjb2xvck1hcCIsImNjIiwic2MiLCJjb25uZWN0ZWRDb3VudCIsImN5IiwibGFiZWxJbmRleCIsImJjIiwiY3giLCJsYyIsImNvbnRvdXJUcmFjaW5nIiwiT3V0c2lkZSIsIkNXIiwiZmlyc3RWZXJ0ZXgiLCJuZXh0UGVlciIsImluc2lkZUNvbnRvdXJzIiwicHJldmlvdXNQZWVyIiwiSW5zaWRlIiwiQ0NXIiwiZmlyc3RDb250b3VyIiwiY3R4IiwicHEiLCJpcSIsInEiLCJVbmtub3duIiwibmV4dCIsIlNrZWxldG9uaXplciIsInN0ZGxpYiIsImZvcmVpZ24iLCJpbXVsIiwiZXJvZGUiLCJpbkltYWdlUHRyIiwib3V0SW1hZ2VQdHIiLCJ1IiwieVN0YXJ0MSIsInlTdGFydDIiLCJ4U3RhcnQxIiwieFN0YXJ0MiIsInN1YnRyYWN0IiwiYUltYWdlUHRyIiwiYkltYWdlUHRyIiwiYml0d2lzZU9yIiwiY291bnROb25aZXJvIiwiaW1hZ2VQdHIiLCJkaWxhdGUiLCJtZW1jcHkiLCJzcmNJbWFnZVB0ciIsImRzdEltYWdlUHRyIiwic3ViSW1hZ2VQdHIiLCJlcm9kZWRJbWFnZVB0ciIsInRlbXBJbWFnZVB0ciIsInNrZWxJbWFnZVB0ciIsImRvbmUiLCJlZGdlTGFiZWwiLCJzeSIsInN4IiwiRnYiLCJ0cmFjZSIsIkN2IiwibGRpciIsIlAiLCJfX2ZhY3RvcnlTb3VyY2VfXyIsIlF1YWdnYSIsInJlc3VsdENhbGxiYWNrIiwicXVhZ2dhIiwiY2FsbCIsImNiIiwiX29uVUlUaHJlYWQiLCJfY2FudmFzQ29udGFpbmVyIiwiZG9tIiwiX3dvcmtlclBvb2wiLCJfaW5pdGlhbGl6ZURhdGEiLCJfaW5pdElucHV0U3RyZWFtIiwiX3N0YXJ0Q29udGludW91c1VwZGF0ZSIsIl91cGRhdGUiLCJfc3RvcHBlZCIsIl9hZGp1c3RXb3JrZXJQb29sIiwicmVsZWFzZSIsImNsZWFyRXZlbnRIYW5kbGVycyIsInVuc3Vic2NyaWJlIiwiX2RlY29kZXIiLCJzZXRSZWFkZXJzIiwid29ya2VyIiwicG9zdE1lc3NhZ2UiLCJjbWQiLCJyZXN1bHRDb2xsZWN0b3IiLCJhZGRSZXN1bHQiLCJfcmVzdWx0Q29sbGVjdG9yIiwidmlld3BvcnQiLCJfZ2V0Vmlld1BvcnQiLCJyZXF1ZXN0IiwiZXJyIiwiX2NhblJlY29yZCIsInRhcmdldCIsIkhUTUxFbGVtZW50Iiwic2VsZWN0b3IiLCJfZnJhbWVHcmFiYmVyIiwiY2xlYXJGaXgiLCJfYm94U2l6ZSIsIl9sb2NhdG9yIiwicG9seWdvbiIsImJhcmNvZGUiLCJfdHJhbnNmb3JtUmVzdWx0IiwiX3RyYW5zZm9ybSIsInJlc3VsdFRvUHVibGlzaCIsIl9hZGRSZXN1bHQiLCJwdWJsaXNoIiwiX2hhc0NvZGVSZXN1bHQiLCJfZ2V0Qm91bmRpbmdCb3hlcyIsImRlY29kZUZyb21Cb3VuZGluZ0JveGVzIiwiX3B1Ymxpc2hSZXN1bHQiLCJhdmFpbGFibGVXb3JrZXIiLCJ3b3JrZXJUaHJlYWQiLCJidXN5IiwiYXR0YWNoRGF0YSIsImdyYWIiLCJfbG9jYXRlQW5kRGVjb2RlIiwiZGVsYXkiLCJmcmVxdWVuY3kiLCJ0aGF0IiwidGltZXN0YW1wIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicGVyZm9ybWFuY2UiLCJub3ciLCJibG9iVVJMIiwiX2dlbmVyYXRlV29ya2VyQmxvYiIsIldvcmtlciIsIm9ubWVzc2FnZSIsIlVSTCIsInJldm9rZU9iamVjdFVSTCIsIm1lc3NhZ2UiLCJmYWN0b3J5Iiwib3JpZ2luIiwib25Qcm9jZXNzZWQiLCJibG9iIiwiQmxvYiIsIl93b3JrZXJJbnRlcmZhY2UiLCJ0b1N0cmluZyIsImNyZWF0ZU9iamVjdFVSTCIsImNhcGFjaXR5IiwiaW5jcmVhc2VCeSIsInRlcm1pbmF0ZSIsIl9pbml0V29ya2VyIiwiTiIsIlciLCJTVEFSVF9QQVRURVJOIiwiU1RPUF9QQVRURVJOIiwiQ09ERV9QQVRURVJOIiwic3RhcnRQYXR0ZXJuTGVuZ3RoIiwiVHdvT2ZGaXZlUmVhZGVyIiwiX2JhclNwYWNlUmF0aW8iLCJfZm9ybWF0IiwiX3NpbmdsZUNvZGVFcnJvciIsIl9hdmVyYWdlQ29kZUVycm9yIiwic3RhcnRJbmZvIiwiX2ZpbmRTdGFydCIsImVuZEluZm8iLCJfZmluZEVuZCIsImNvdW50ZXJzIiwiX2ZpbGxDb3VudGVycyIsImRlY29kZWRDb2RlcyIsImNvZGUiLCJfZGVjb2RlUGF5bG9hZCIsIl9uZXh0U2V0IiwiX3JvdyIsIm5hcnJvd0JhcldpZHRoIiwiX2ZpbmRQYXR0ZXJuIiwibGVhZGluZ1doaXRlc3BhY2VTdGFydCIsIl9tYXRjaFJhbmdlIiwidHJhaWxpbmdXaGl0ZXNwYWNlRW5kIiwicmV2ZXJzZSIsIl92ZXJpZnlUcmFpbGluZ1doaXRlc3BhY2UiLCJjb3VudGVyIiwiYmVzdE1hdGNoIiwiX21hdGNoUGF0dGVybiIsIkFWRVJBR0VfQ09ERV9FUlJPUiIsImNvdW50ZXJMZW5ndGgiLCJfZGVjb2RlQ29kZSIsIkJhcmNvZGVSZWFkZXIiLCJCYXJjb2RlRGlyZWN0aW9uIiwiU3RhcnROb3RGb3VuZEV4Y2VwdGlvbiIsIkNvZGVOb3RGb3VuZEV4Y2VwdGlvbiIsIlBhdHRlcm5Ob3RGb3VuZEV4Y2VwdGlvbiIsImlzV2hpdGUiLCJ0cnlIYXJkZXIiLCJlcHNpbG9uIiwiY291bnRlclBvcyIsIm1heFNpbmdsZUVycm9yIiwibW9kdWxvIiwiU0lOR0xFX0NPREVfRVJST1IiLCJiYXJXaWR0aCIsInNjYWxlZCIsInNpbmdsZUVycm9yIiwiY29ycmVjdGlvbiIsImluZGljZXMiLCJkZWNvZGUiLCJSZXZlcnNlIiwiRm9yd2FyZCIsIm51bUNvdW50ZXJzIiwiQUxQSEFCRVRIX1NUUklORyIsIkFMUEhBQkVUIiwiQ0hBUkFDVEVSX0VOQ09ESU5HUyIsIlNUQVJUX0VORCIsIk1JTl9FTkNPREVEX0NIQVJTIiwiTUFYX0FDQ0VQVEFCTEUiLCJQQURESU5HIiwiQ29kYWJhclJlYWRlciIsIl9jb3VudGVycyIsIl9uZXh0VW5zZXQiLCJuZXh0U3RhcnQiLCJzdGFydENvdW50ZXIiLCJfdG9QYXR0ZXJuIiwiZGVjb2RlZENoYXIiLCJfcGF0dGVyblRvQ2hhciIsIl92ZXJpZnlXaGl0ZXNwYWNlIiwiX3ZhbGlkYXRlUmVzdWx0IiwiX3N1bUNvdW50ZXJzIiwiZW5kQ291bnRlciIsIl9jYWxjdWxhdGVQYXR0ZXJuTGVuZ3RoIiwiY2F0ZWdvcml6YXRpb24iLCJzcGFjZSIsIm5hcnJvdyIsImNvdW50cyIsIndpZGUiLCJiYXIiLCJfY2hhclRvUGF0dGVybiIsImNhdCIsImZsb29yIiwiY2hhckNvZGUiLCJfdGhyZXNob2xkUmVzdWx0UGF0dGVybiIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsImJhclRocmVzaG9sZCIsIl9jb21wdXRlQWx0ZXJuYXRpbmdUaHJlc2hvbGQiLCJzcGFjZVRocmVzaG9sZCIsImJpdG1hc2siLCJDT0RFX1NISUZUIiwiQ09ERV9DIiwiQ09ERV9CIiwiQ09ERV9BIiwiU1RBUlRfQ09ERV9BIiwiU1RBUlRfQ09ERV9CIiwiU1RBUlRfQ09ERV9DIiwiU1RPUF9DT0RFIiwiTU9EVUxFX0lORElDRVMiLCJDb2RlMTI4UmVhZGVyIiwiX2NvcnJlY3QiLCJleHBlY3RlZCIsIl9jYWxjdWxhdGVDb3JyZWN0aW9uIiwiX2NvcnJlY3RCYXJzIiwibXVsdGlwbGllciIsImNoZWNrc3VtIiwiY29kZXNldCIsInJhd1Jlc3VsdCIsInNoaWZ0TmV4dCIsInJlbW92ZUxhc3RDaGFyYWN0ZXIiLCJub3JtYWxpemVkIiwic3VtTm9ybWFsaXplZCIsInN1bUV4cGVjdGVkIiwiQVNURVJJU0siLCJVaW50MTZBcnJheSIsIkNvZGUzOVJlYWRlciIsImxhc3RTdGFydCIsIl90b0NvdW50ZXJzIiwicG9wIiwicGF0dGVyblNpemUiLCJtaW5XaWR0aCIsIm1heE5hcnJvd1dpZHRoIiwibnVtV2lkZUJhcnMiLCJ3aWRlQmFyV2lkdGgiLCJfZmluZE5leHRXaWR0aCIsInBhdHRlcm5TdGFydCIsIndoaXRlU3BhY2VNdXN0U3RhcnQiLCJDb2RlMzlWSU5SZWFkZXIiLCJyZXBsYWNlIiwiX2NoZWNrQ2hlY2tzdW0iLCJDb2RlOTNSZWFkZXIiLCJfdmVyaWZ5RW5kIiwiX3ZlcmlmeUNoZWNrc3VtcyIsIl9kZWNvZGVFeHRlbmRlZCIsInJvdW5kIiwiY2hhckFycmF5IiwibmV4dENoYXIiLCJuZXh0Q2hhckNvZGUiLCJfbWF0Y2hDaGVja0NoYXIiLCJtYXhXZWlnaHQiLCJhcnJheVRvQ2hlY2siLCJ3ZWlnaHRlZFN1bXMiLCJ3ZWlnaHQiLCJjaGVja0NoYXIiLCJFQU4yUmVhZGVyIiwicm93IiwiY29kZUZyZXF1ZW5jeSIsIkNPREVfR19TVEFSVCIsInBhcnNlSW50IiwiRUFOUmVhZGVyIiwiRUFONVJlYWRlciIsIl9leHRlbnNpb25DaGVja3N1bSIsIl9kZXRlcm1pbmVDaGVja0RpZ2l0IiwiQ0hFQ0tfRElHSVRfRU5DT0RJTkdTIiwiRUFOOFJlYWRlciIsIk1JRERMRV9QQVRURVJOIiwiRVhURU5TSU9OX1NUQVJUX1BBVFRFUk4iLCJDT0RFX0ZSRVFVRU5DWSIsImNvZGVyYW5nZSIsImZpcnN0RGlnaXQiLCJfY2FsY3VsYXRlRmlyc3REaWdpdCIsInJlc3VsdEluZm8iLCJfY2hlY2tzdW0iLCJfZGVjb2RlRXh0ZW5zaW9ucyIsImxhc3RDb2RlIiwiTUFYX0NPUlJFQ1RJT05fRkFDVE9SIiwiSTJvZjVSZWFkZXIiLCJub3JtYWxpemVCYXJTcGFjZVdpZHRoIiwiY291bnRlclN1bSIsImNvZGVTdW0iLCJjb3JyZWN0aW9uUmF0aW8iLCJjb3JyZWN0aW9uUmF0aW9JbnZlcnNlIiwiY291bnRlcjAiLCJjb3VudGVyMSIsImNvZGUwIiwiY29kZTEiLCJjb2RlXzEyOF9yZWFkZXIiLCJlYW5fcmVhZGVyIiwiZWFuXzVfcmVhZGVyIiwiZWFuXzJfcmVhZGVyIiwiZWFuXzhfcmVhZGVyIiwiY29kZV8zOV9yZWFkZXIiLCJjb2RlXzM5X3Zpbl9yZWFkZXIiLCJjb2RhYmFyX3JlYWRlciIsInVwY19yZWFkZXIiLCJVUENSZWFkZXIiLCJ1cGNfZV9yZWFkZXIiLCJVUENFUmVhZGVyIiwiaTJvZjVfcmVhZGVyIiwiY29kZV85M19yZWFkZXIiLCJfZGV0ZXJtaW5lUGFyaXR5IiwibnJTeXN0ZW0iLCJsYXN0RGlnaXQiLCJ1cGNhIiwiX2NvbnZlcnRUb1VQQ0EiLCJjaGFyQXQiLCJzdWJzdHJpbmciXSwibWFwcGluZ3MiOiI7O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsVztBQ1ZBO0FB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O0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBLHdDQUF3QyxXQUFXO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFD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ckZ6MEIsY0FBTSxDQUFDcXBCLElBQVAsR0FBY3JwQixNQUFNLENBQUNxcEIsSUFBUCxDQUFZcUwsU0FBWixDQUFzQixDQUF0QixDQUFkO0FBQ0EsZUFBTzEwQixNQUFQO0FBQ0g7O0FBRUQsYUFBTyxJQUFQO0FBQ0g7QUFoQkw7O0FBQUE7QUFBQSxFQUErQjJ4QixxREFBL0IsRSIsImZpbGUiOiJxdWFnZ2EuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG4gICAgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jykge1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoZmFjdG9yeS50b1N0cmluZygpKS5kZWZhdWx0O1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGV4cG9ydHNbXCJRdWFnZ2FcIl0gPSBmYWN0b3J5KGZhY3RvcnkudG9TdHJpbmcoKSkuZGVmYXVsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgICByb290W1wiUXVhZ2dhXCJdID0gZmFjdG9yeShmYWN0b3J5LnRvU3RyaW5nKCkpLmRlZmF1bHQ7XG4gICAgfVxufSkodGhpcywgZnVuY3Rpb24oX19mYWN0b3J5U291cmNlX18pIHtcbiAgICByZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3F1YWdnYS50c1wiKTtcbiIsImZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcnIyW2ldID0gYXJyW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBhcnIyO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aG91dEhvbGVzOyIsImZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZDsiLCJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cblxuICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXN5bmNUb0dlbmVyYXRvcjsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjazsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eTsiLCJ2YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9nZXRQcm90b3R5cGVPZlwiKTtcblxudmFyIHN1cGVyUHJvcEJhc2UgPSByZXF1aXJlKFwiLi9zdXBlclByb3BCYXNlXCIpO1xuXG5mdW5jdGlvbiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBSZWZsZWN0LmdldCkge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX2dldCA9IFJlZmxlY3QuZ2V0O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX2dldCA9IGZ1bmN0aW9uIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHtcbiAgICAgIHZhciBiYXNlID0gc3VwZXJQcm9wQmFzZSh0YXJnZXQsIHByb3BlcnR5KTtcbiAgICAgIGlmICghYmFzZSkgcmV0dXJuO1xuICAgICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGJhc2UsIHByb3BlcnR5KTtcblxuICAgICAgaWYgKGRlc2MuZ2V0KSB7XG4gICAgICAgIHJldHVybiBkZXNjLmdldC5jYWxsKHJlY2VpdmVyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRlc2MudmFsdWU7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyIHx8IHRhcmdldCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2dldDsiLCJmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfTtcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2Y7IiwidmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vc2V0UHJvdG90eXBlT2ZcIik7XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW5oZXJpdHM7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmIChTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpdGVyKSA9PT0gXCJbb2JqZWN0IEFyZ3VtZW50c11cIikgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheTsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVTcHJlYWQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbnZhciBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgPSByZXF1aXJlKFwiLi9hc3NlcnRUaGlzSW5pdGlhbGl6ZWRcIik7XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfVxuXG4gIHJldHVybiBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm47IiwiZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG5cbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2Y7IiwidmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vZ2V0UHJvdG90eXBlT2ZcIik7XG5cbmZ1bmN0aW9uIF9zdXBlclByb3BCYXNlKG9iamVjdCwgcHJvcGVydHkpIHtcbiAgd2hpbGUgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSkpIHtcbiAgICBvYmplY3QgPSBnZXRQcm90b3R5cGVPZihvYmplY3QpO1xuICAgIGlmIChvYmplY3QgPT09IG51bGwpIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIG9iamVjdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc3VwZXJQcm9wQmFzZTsiLCJ2YXIgYXJyYXlXaXRob3V0SG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhvdXRIb2xlc1wiKTtcblxudmFyIGl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheVwiKTtcblxudmFyIG5vbkl0ZXJhYmxlU3ByZWFkID0gcmVxdWlyZShcIi4vbm9uSXRlcmFibGVTcHJlYWRcIik7XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdG9Db25zdW1hYmxlQXJyYXk7IiwiZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mMiA9IGZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZjIgPSBmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2YyKG9iaik7IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBfdHlwZW9mMihTeW1ib2wuaXRlcmF0b3IpID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBfdHlwZW9mMihvYmopO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiBfdHlwZW9mMihvYmopO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuLy8gVGhpcyBtZXRob2Qgb2Ygb2J0YWluaW5nIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0IG5lZWRzIHRvIGJlXG4vLyBrZXB0IGlkZW50aWNhbCB0byB0aGUgd2F5IGl0IGlzIG9idGFpbmVkIGluIHJ1bnRpbWUuanNcbnZhciBnID0gKGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcyB8fCAodHlwZW9mIHNlbGYgPT09IFwib2JqZWN0XCIgJiYgc2VsZik7XG59KSgpIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcblxuLy8gVXNlIGBnZXRPd25Qcm9wZXJ0eU5hbWVzYCBiZWNhdXNlIG5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCBjYWxsaW5nXG4vLyBgaGFzT3duUHJvcGVydHlgIG9uIHRoZSBnbG9iYWwgYHNlbGZgIG9iamVjdCBpbiBhIHdvcmtlci4gU2VlICMxODMuXG52YXIgaGFkUnVudGltZSA9IGcucmVnZW5lcmF0b3JSdW50aW1lICYmXG4gIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGcpLmluZGV4T2YoXCJyZWdlbmVyYXRvclJ1bnRpbWVcIikgPj0gMDtcblxuLy8gU2F2ZSB0aGUgb2xkIHJlZ2VuZXJhdG9yUnVudGltZSBpbiBjYXNlIGl0IG5lZWRzIHRvIGJlIHJlc3RvcmVkIGxhdGVyLlxudmFyIG9sZFJ1bnRpbWUgPSBoYWRSdW50aW1lICYmIGcucmVnZW5lcmF0b3JSdW50aW1lO1xuXG4vLyBGb3JjZSByZWV2YWx1dGF0aW9uIG9mIHJ1bnRpbWUuanMuXG5nLnJlZ2VuZXJhdG9yUnVudGltZSA9IHVuZGVmaW5lZDtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9ydW50aW1lXCIpO1xuXG5pZiAoaGFkUnVudGltZSkge1xuICAvLyBSZXN0b3JlIHRoZSBvcmlnaW5hbCBydW50aW1lLlxuICBnLnJlZ2VuZXJhdG9yUnVudGltZSA9IG9sZFJ1bnRpbWU7XG59IGVsc2Uge1xuICAvLyBSZW1vdmUgdGhlIGdsb2JhbCBwcm9wZXJ0eSBhZGRlZCBieSBydW50aW1lLmpzLlxuICB0cnkge1xuICAgIGRlbGV0ZSBnLnJlZ2VuZXJhdG9yUnVudGltZTtcbiAgfSBjYXRjaChlKSB7XG4gICAgZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSB1bmRlZmluZWQ7XG4gIH1cbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuIShmdW5jdGlvbihnbG9iYWwpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICB2YXIgaW5Nb2R1bGUgPSB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiO1xuICB2YXIgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWU7XG4gIGlmIChydW50aW1lKSB7XG4gICAgaWYgKGluTW9kdWxlKSB7XG4gICAgICAvLyBJZiByZWdlbmVyYXRvclJ1bnRpbWUgaXMgZGVmaW5lZCBnbG9iYWxseSBhbmQgd2UncmUgaW4gYSBtb2R1bGUsXG4gICAgICAvLyBtYWtlIHRoZSBleHBvcnRzIG9iamVjdCBpZGVudGljYWwgdG8gcmVnZW5lcmF0b3JSdW50aW1lLlxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBydW50aW1lO1xuICAgIH1cbiAgICAvLyBEb24ndCBib3RoZXIgZXZhbHVhdGluZyB0aGUgcmVzdCBvZiB0aGlzIGZpbGUgaWYgdGhlIHJ1bnRpbWUgd2FzXG4gICAgLy8gYWxyZWFkeSBkZWZpbmVkIGdsb2JhbGx5LlxuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIERlZmluZSB0aGUgcnVudGltZSBnbG9iYWxseSAoYXMgZXhwZWN0ZWQgYnkgZ2VuZXJhdGVkIGNvZGUpIGFzIGVpdGhlclxuICAvLyBtb2R1bGUuZXhwb3J0cyAoaWYgd2UncmUgaW4gYSBtb2R1bGUpIG9yIGEgbmV3LCBlbXB0eSBvYmplY3QuXG4gIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lID0gaW5Nb2R1bGUgPyBtb2R1bGUuZXhwb3J0cyA6IHt9O1xuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIHJ1bnRpbWUud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlW3RvU3RyaW5nVGFnU3ltYm9sXSA9XG4gICAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgcHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgcnVudGltZS5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBpZiAoISh0b1N0cmluZ1RhZ1N5bWJvbCBpbiBnZW5GdW4pKSB7XG4gICAgICAgIGdlbkZ1blt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG4gICAgICB9XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIHJ1bnRpbWUuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGhhbmRsZWQgdGhlcmUuXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIEFzeW5jSXRlcmF0b3IucHJvdG90eXBlW2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBydW50aW1lLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBydW50aW1lLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdClcbiAgICApO1xuXG4gICAgcmV0dXJuIHJ1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvci5yZXR1cm4pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBHcFt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvclwiO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIHJ1bnRpbWUua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBydW50aW1lLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xufSkoXG4gIC8vIEluIHNsb3BweSBtb2RlLCB1bmJvdW5kIGB0aGlzYCByZWZlcnMgdG8gdGhlIGdsb2JhbCBvYmplY3QsIGZhbGxiYWNrIHRvXG4gIC8vIEZ1bmN0aW9uIGNvbnN0cnVjdG9yIGlmIHdlJ3JlIGluIGdsb2JhbCBzdHJpY3QgbW9kZS4gVGhhdCBpcyBzYWRseSBhIGZvcm1cbiAgLy8gb2YgaW5kaXJlY3QgZXZhbCB3aGljaCB2aW9sYXRlcyBDb250ZW50IFNlY3VyaXR5IFBvbGljeS5cbiAgKGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzIHx8ICh0eXBlb2Ygc2VsZiA9PT0gXCJvYmplY3RcIiAmJiBzZWxmKTtcbiAgfSkoKSB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKClcbik7XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJpbXBvcnQgeyBNb21lbnQgfSBmcm9tICcuL21vbWVudCc7XG5cblxuLyoqXG4gKiBDcmVhdGVzIGEgY2x1c3RlciBmb3IgZ3JvdXBpbmcgc2ltaWxhciBvcmllbnRhdGlvbnMgb2YgbW9tZW50c1xuICovXG5leHBvcnQgY2xhc3MgQ2x1c3RlciB7XG4gICAgcHJpdmF0ZSBfdGhyZXNob2xkOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfbW9tZW50czogQXJyYXk8TW9tZW50PjtcbiAgICBwcml2YXRlIF9jZW50ZXI6IE1vbWVudDtcblxuICAgIHN0YXRpYyBjbHVzdGVyaXplKG1vbWVudHM6IEFycmF5PE1vbWVudD4sIHRocmVzaG9sZDogbnVtYmVyKTogQXJyYXk8Q2x1c3Rlcj4ge1xuICAgICAgICBjb25zdCBjbHVzdGVycyA9IG5ldyBBcnJheTxDbHVzdGVyPigpO1xuXG4gICAgICAgIG1vbWVudHMuZm9yRWFjaChtb21lbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWF0Y2hpbmdDbHVzdGVyID0gY2x1c3RlcnMuZmluZChjbHVzdGVyID0+IGNsdXN0ZXIuZml0cyhtb21lbnQpKTtcblxuICAgICAgICAgICAgaWYgKG1hdGNoaW5nQ2x1c3Rlcikge1xuICAgICAgICAgICAgICAgIG1hdGNoaW5nQ2x1c3Rlci5hZGQobW9tZW50KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2x1c3RlcnMucHVzaChuZXcgQ2x1c3Rlcih0aHJlc2hvbGQsIG1vbWVudCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gY2x1c3RlcnM7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IodGhyZXNob2xkOiBudW1iZXIsIG1vbWVudDogTW9tZW50KSB7XG4gICAgICAgIHRoaXMuX3RocmVzaG9sZCA9IHRocmVzaG9sZDtcbiAgICAgICAgdGhpcy5fbW9tZW50cyA9IG5ldyBBcnJheTxNb21lbnQ+KCk7XG4gICAgICAgIHRoaXMuX2NlbnRlciA9IHtcbiAgICAgICAgICAgIHJhZDogMCxcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiAwXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKG1vbWVudCkge1xuICAgICAgICAgICAgdGhpcy5hZGQobW9tZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZChwb2ludDogTW9tZW50KSB7XG4gICAgICAgIHRoaXMuX21vbWVudHMucHVzaChwb2ludCk7XG5cbiAgICAgICAgLy8gVXBkYXRlIGNlbnRlclxuICAgICAgICB0aGlzLl9jZW50ZXIucmFkID0gdGhpcy5fbW9tZW50cy5yZWR1Y2UoKHN1bSwgcCkgPT4gc3VtICsgcC5yYWQsIDApIC8gdGhpcy5fbW9tZW50cy5sZW5ndGg7XG4gICAgICAgIHRoaXMuX2NlbnRlci54ID0gTWF0aC5jb3ModGhpcy5fY2VudGVyLnJhZCk7XG4gICAgICAgIHRoaXMuX2NlbnRlci55ID0gTWF0aC5zaW4odGhpcy5fY2VudGVyLnJhZCk7XG4gICAgfVxuXG4gICAgZml0cyhtb21lbnQ6IE1vbWVudCk6IGJvb2xlYW4ge1xuICAgICAgICAvLyBjaGVjayBjb3NpbmUgc2ltaWxhcml0eSB0byBjZW50ZXItYW5nbGVcbiAgICAgICAgY29uc3Qgc2ltaWxhcml0eSA9IE1hdGguYWJzKG1vbWVudC54ICogdGhpcy5fY2VudGVyLnggKyBtb21lbnQueSAqIHRoaXMuX2NlbnRlci55KTtcbiAgICAgICAgcmV0dXJuIHNpbWlsYXJpdHkgPiB0aGlzLl90aHJlc2hvbGQ7XG4gICAgfVxuXG4gICAgZ2V0IG1vbWVudHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tb21lbnRzO1xuICAgIH1cbn1cbiIsImV4cG9ydCBpbnRlcmZhY2UgRXZlbnRDYWxsYmFjayB7XG4gICAgKGRhdGE6IGFueSk6IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXZlbnRTdWJzY3JpcHRpb24ge1xuICAgIGNhbGxiYWNrOiBFdmVudENhbGxiYWNrO1xuICAgIGFzeW5jPzogYm9vbGVhbjtcbiAgICBvbmNlPzogYm9vbGVhbjtcbn1cblxuaW50ZXJmYWNlIEV2ZW50SXRlbSB7XG4gICAgc3Vic2NyaXB0aW9uczogQXJyYXk8RXZlbnRTdWJzY3JpcHRpb24+XG59XG5cbmxldCBldmVudHM6IHsgW25hbWU6IHN0cmluZ106IEV2ZW50SXRlbSB9ID0ge307XG5cbmV4cG9ydCBjbGFzcyBFdmVudHMge1xuICAgIHN0YXRpYyBzdWJzY3JpYmUoZXZlbnQ6IHN0cmluZywgY2FsbGJhY2s6IEV2ZW50U3Vic2NyaXB0aW9uIHwgRXZlbnRDYWxsYmFjaywgYXN5bmM/OiBib29sZWFuKSB7XG4gICAgICAgIGxldCBzdWJzY3JpcHRpb246IEV2ZW50U3Vic2NyaXB0aW9uO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbiA9IHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayxcbiAgICAgICAgICAgICAgICBhc3luY1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbiA9IGNhbGxiYWNrO1xuICAgICAgICAgICAgaWYgKCFzdWJzY3JpcHRpb24uY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICB0aHJvdyAnQ2FsbGJhY2sgd2FzIG5vdCBzcGVjaWZpZWQgb24gb3B0aW9ucyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBnZXRFdmVudChldmVudCkuc3Vic2NyaXB0aW9ucy5wdXNoKHN1YnNjcmlwdGlvbik7XG4gICAgfVxuXG4gICAgc3RhdGljIHB1Ymxpc2godHlwZTogc3RyaW5nLCBkYXRhPzogYW55KSB7XG4gICAgICAgIGNvbnN0IGV2ZW50SXRlbSA9IGdldEV2ZW50KHR5cGUpO1xuICAgICAgICBjb25zdCBzdWJzY3JpcHRpb25zID0gZXZlbnRJdGVtLnN1YnNjcmlwdGlvbnM7XG5cbiAgICAgICAgLy8gUHVibGlzaCBvbmUtdGltZSBzdWJzY3JpcHRpb25zXG4gICAgICAgIHN1YnNjcmlwdGlvbnMuZmlsdGVyKCh7IG9uY2UgfSkgPT4gISFvbmNlKS5mb3JFYWNoKHN1YnNjcmlwdGlvbiA9PiBwdWJsaXNoU3Vic2NyaXB0aW9uKHN1YnNjcmlwdGlvbiwgZGF0YSkpO1xuXG4gICAgICAgIC8vIHJlbW92ZSB0aGVtIGZyb20gdGhlIHN1YnNjcmlwdGlvblxuICAgICAgICBldmVudEl0ZW0uc3Vic2NyaXB0aW9ucyA9IHN1YnNjcmlwdGlvbnMuZmlsdGVyKCh7IG9uY2UgfSkgPT4gIW9uY2UpO1xuXG4gICAgICAgIC8vIHB1Ymxpc2ggdGhlIHJlc3RcbiAgICAgICAgZXZlbnRJdGVtLnN1YnNjcmlwdGlvbnMuZm9yRWFjaChzdWJzY3JpcHRpb24gPT4gcHVibGlzaFN1YnNjcmlwdGlvbihzdWJzY3JpcHRpb24sIGRhdGEpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgb25jZShldmVudDogc3RyaW5nLCBjYWxsYmFjazogRXZlbnRDYWxsYmFjaywgYXN5bmM/OiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIEV2ZW50cy5zdWJzY3JpYmUoZXZlbnQsIHsgY2FsbGJhY2ssIGFzeW5jLCBvbmNlOiB0cnVlIH0pO1xuICAgIH1cblxuICAgIHN0YXRpYyB1bnN1YnNjcmliZShldmVudE5hbWU/OiBzdHJpbmcsIGNhbGxiYWNrPzogRXZlbnRDYWxsYmFjaykge1xuICAgICAgICBpZiAoZXZlbnROYW1lKSB7XG4gICAgICAgICAgICBjb25zdCBldmVudCA9IGdldEV2ZW50KGV2ZW50TmFtZSk7XG4gICAgICAgICAgICBpZiAoZXZlbnQgJiYgY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBldmVudC5zdWJzY3JpcHRpb25zID0gZXZlbnQuc3Vic2NyaXB0aW9ucy5maWx0ZXIoc3Vic2NyaXB0aW9uID0+IHN1YnNjcmlwdGlvbi5jYWxsYmFjayAhPT0gY2FsbGJhY2spO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBldmVudC5zdWJzY3JpcHRpb25zID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBldmVudHMgPSB7fTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0RXZlbnQoZXZlbnROYW1lOiBzdHJpbmcpOiBFdmVudEl0ZW0ge1xuICAgIGlmICghZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgICAgZXZlbnRzW2V2ZW50TmFtZV0gPSB7XG4gICAgICAgICAgICBzdWJzY3JpcHRpb25zOiBbXVxuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gZXZlbnRzW2V2ZW50TmFtZV07XG59XG5cbmZ1bmN0aW9uIHB1Ymxpc2hTdWJzY3JpcHRpb24oc3Vic2NyaXB0aW9uOiBFdmVudFN1YnNjcmlwdGlvbiwgZGF0YTogYW55KTogdm9pZCB7XG4gICAgaWYgKHN1YnNjcmlwdGlvbi5hc3luYykge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbi5jYWxsYmFjayhkYXRhKTtcbiAgICAgICAgfSwgNCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc3Vic2NyaXB0aW9uLmNhbGxiYWNrKGRhdGEpO1xuICAgIH1cbn1cbiIsImV4cG9ydCB0eXBlIEhTViA9IFtudW1iZXIsIG51bWJlciwgbnVtYmVyXTtcblxuZXhwb3J0IHR5cGUgUkdCID0gW251bWJlciwgbnVtYmVyLCBudW1iZXJdO1xuXG5leHBvcnQgZnVuY3Rpb24gaHN2MnJnYihoc3Y6IEhTViwgcmdiPzogUkdCKTogUkdCIHtcbiAgICBjb25zdCBoID0gaHN2WzBdO1xuICAgIGNvbnN0IHMgPSBoc3ZbMV07XG4gICAgY29uc3QgdiA9IGhzdlsyXTtcbiAgICBjb25zdCBjID0gdiAqIHM7XG4gICAgY29uc3QgeCA9IGMgKiAoMSAtIE1hdGguYWJzKChoIC8gNjApICUgMiAtIDEpKTtcbiAgICBjb25zdCBtID0gdiAtIGM7XG4gICAgbGV0IHIgPSAwO1xuICAgIGxldCBnID0gMDtcbiAgICBsZXQgYiA9IDA7XG5cbiAgICBpZiAoaCA8IDYwKSB7XG4gICAgICAgIHIgPSBjO1xuICAgICAgICBnID0geDtcbiAgICB9IGVsc2UgaWYgKGggPCAxMjApIHtcbiAgICAgICAgciA9IHg7XG4gICAgICAgIGcgPSBjO1xuICAgIH0gZWxzZSBpZiAoaCA8IDE4MCkge1xuICAgICAgICBnID0gYztcbiAgICAgICAgYiA9IHg7XG4gICAgfSBlbHNlIGlmIChoIDwgMjQwKSB7XG4gICAgICAgIGcgPSB4O1xuICAgICAgICBiID0gYztcbiAgICB9IGVsc2UgaWYgKGggPCAzMDApIHtcbiAgICAgICAgciA9IHg7XG4gICAgICAgIGIgPSBjO1xuICAgIH0gZWxzZSBpZiAoaCA8IDM2MCkge1xuICAgICAgICByID0gYztcbiAgICAgICAgYiA9IHg7XG4gICAgfVxuXG4gICAgcmdiID0gcmdiIHx8IFswLCAwLCAwXTtcblxuICAgIHJnYlswXSA9IChyICsgbSkgKiAyNTUgfCAwO1xuICAgIHJnYlsxXSA9IChnICsgbSkgKiAyNTUgfCAwO1xuICAgIHJnYlsyXSA9IChiICsgbSkgKiAyNTUgfCAwO1xuXG4gICAgcmV0dXJuIHJnYjtcbn1cbiIsImltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi9wb2ludCc7XG5cbmV4cG9ydCBjbGFzcyBJbWFnZURlYnVnIHtcbiAgICBzdGF0aWMgZHJhd1BhdGgocGF0aDogQXJyYXk8UG9pbnQ+LCBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIGNvbG9yOiBzdHJpbmcsIGxpbmVXaWR0aDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmIChwYXRoICYmIHBhdGgubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9IGNvbG9yO1xuICAgICAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICAgICAgICAgIGNvbnRleHQubGluZVdpZHRoID0gbGluZVdpZHRoO1xuICAgICAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGNvbnRleHQubW92ZVRvKHBhdGhbMF0ueCwgcGF0aFswXS55KTtcbiAgICAgICAgICAgIHBhdGguc2xpY2UoMSkuZm9yRWFjaCgoeyB4LCB5IH0pID0+IGNvbnRleHQubGluZVRvKHgsIHkpKTtcbiAgICAgICAgICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICBjb250ZXh0LnN0cm9rZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGRyYXdJbWFnZShpbWFnZURhdGE6IFVpbnQ4QXJyYXksIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgY2FudmFzRGF0YSA9IGNvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICBjb25zdCBkYXRhID0gY2FudmFzRGF0YS5kYXRhO1xuICAgICAgICBsZXQgaW1hZ2VJbmRleCA9IGltYWdlRGF0YS5sZW5ndGggfCAwO1xuICAgICAgICBsZXQgY2FudmFzSW5kZXggPSBkYXRhLmxlbmd0aCB8IDA7XG5cbiAgICAgICAgaWYgKGNhbnZhc0luZGV4IC8gaW1hZ2VJbmRleCAhPT0gNCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgd2hpbGUgKGltYWdlSW5kZXgtLSkge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBpbWFnZURhdGFbaW1hZ2VJbmRleF07XG4gICAgICAgICAgICBkYXRhWy0tY2FudmFzSW5kZXhdID0gMjU1O1xuICAgICAgICAgICAgZGF0YVstLWNhbnZhc0luZGV4XSA9IHZhbHVlO1xuICAgICAgICAgICAgZGF0YVstLWNhbnZhc0luZGV4XSA9IHZhbHVlO1xuICAgICAgICAgICAgZGF0YVstLWNhbnZhc0luZGV4XSA9IHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5wdXRJbWFnZURhdGEoY2FudmFzRGF0YSwgMCwgMCk7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTW9tZW50IH0gZnJvbSAnLi9tb21lbnQnO1xuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuL3BvaW50JztcbmltcG9ydCB7IEhTViwgaHN2MnJnYiwgUkdCIH0gZnJvbSAnLi9oc3YycmdiJztcblxudHlwZSBBcnJheVR5cGUgPSBBcnJheTxudW1iZXI+IHwgVWludDhBcnJheSB8IEludDMyQXJyYXk7XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIGJhc2ljIGltYWdlIGNvbWJpbmluZyB0aGUgZGF0YSBhbmQgc2l6ZS5cbiAqIEluIGFkZGl0aW9uLCBzb21lIG1ldGhvZHMgZm9yIG1hbmlwdWxhdGlvbiBhcmUgY29udGFpbmVkLlxuICovXG5leHBvcnQgY2xhc3MgSW1hZ2VXcmFwcGVyPFQgZXh0ZW5kcyBBcnJheVR5cGUgPSBVaW50OEFycmF5PiB7XG4gICAgZGF0YTogVCB8IFVpbnQ4QXJyYXk7XG4gICAgc2l6ZTogUG9pbnQ7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2l6ZSBUaGUgc2l6ZSBvZiB0aGUgaW1hZ2UgaW4gcGl4ZWxcbiAgICAgKiBAcGFyYW0gZGF0YSBJZiBnaXZlbiwgYSBmbGF0IGFycmF5IGNvbnRhaW5pbmcgdGhlIHBpeGVsIGRhdGFcbiAgICAgKiBAcGFyYW0gYXJyYXlUeXBlIElmIGdpdmVuLCB0aGUgZGVzaXJlZCBEYXRhVHlwZSBvZiB0aGUgQXJyYXkgKG1heSBiZSB0eXBlZC9ub24tdHlwZWQpXG4gICAgICogQHBhcmFtIGluaXRpYWxpemUgSW5kaWNhdGluZyBpZiB0aGUgYXJyYXkgc2hvdWxkIGJlIGluaXRpYWxpemVkIG9uIGNyZWF0aW9uLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNpemU6IFBvaW50LCBkYXRhPzogVCwgYXJyYXlUeXBlPzogeyBuZXcoXzogbnVtYmVyKTogVCB8IFVpbnQ4QXJyYXkgfSwgaW5pdGlhbGl6ZT86IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGEgPSBuZXcgKGFycmF5VHlwZSB8fCBVaW50OEFycmF5KShzaXplLnggKiBzaXplLnkpO1xuXG4gICAgICAgICAgICBpZiAoaW5pdGlhbGl6ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5maWxsKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGVzdHMgaWYgYSBwb3NpdGlvbiBpcyB3aXRoaW4gdGhlIGltYWdlIHdpdGggYSBnaXZlbiBvZmZzZXRcbiAgICAgKiBAcGFyYW0gcG9pbnQgVGhlIGxvY2F0aW9uIHRvIHRlc3RcbiAgICAgKiBAcGFyYW0gYm9yZGVyIFRoZSBwYWRkaW5nIHZhbHVlIGluIHBpeGVsc1xuICAgICAqIEByZXR1cm5zIHRydWUgaWYgbG9jYXRpb24gaW5zaWRlIHRoZSBpbWFnZSdzIGJvcmRlciwgZmFsc2Ugb3RoZXJ3aXNlXG4gICAgICogQHNlZSBjdmQvaW1hZ2UuaFxuICAgICAqL1xuICAgIGluSW1hZ2VXaXRoQm9yZGVyKHBvaW50OiBQb2ludCwgYm9yZGVyOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIChwb2ludC54ID49IGJvcmRlcilcbiAgICAgICAgICAgICYmIChwb2ludC55ID49IGJvcmRlcilcbiAgICAgICAgICAgICYmIChwb2ludC54IDwgKHRoaXMuc2l6ZS54IC0gYm9yZGVyKSlcbiAgICAgICAgICAgICYmIChwb2ludC55IDwgKHRoaXMuc2l6ZS55IC0gYm9yZGVyKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiB7SW1hZ2VXcmFwcGVyKSBhbmQgY29waWVzIHRoZSBuZWVkZWQgdW5kZXJseWluZyBpbWFnZS1kYXRhIGFyZWFcbiAgICAgKiBAcGFyYW0gaW1hZ2VXcmFwcGVyIFRoZSB0YXJnZXQge0ltYWdlV3JhcHBlcn0gd2hlcmUgdGhlIGRhdGEgc2hvdWxkIGJlIGNvcGllZFxuICAgICAqIEBwYXJhbSBmcm9tWCBUaGUgaG9yaXpvbnRhbCBwb3NpdGlvbiB3aGVyZSB0byBjb3B5IGZyb21cbiAgICAgKiBAcGFyYW0gZnJvbVkgVGhlIHZlcnRpY2FsIHBvc2l0aW9uIHdoZXJlIHRvIGNvcHkgZnJvbVxuICAgICovXG4gICAgc3ViSW1hZ2VBc0NvcHkoaW1hZ2VXcmFwcGVyOiBJbWFnZVdyYXBwZXIsIGZyb21YOiBudW1iZXIsIGZyb21ZOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgc2l6ZVkgPSBpbWFnZVdyYXBwZXIuc2l6ZS55O1xuICAgICAgICBjb25zdCBzaXplWCA9IGltYWdlV3JhcHBlci5zaXplLng7XG5cbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBzaXplWDsgeCsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHNpemVZOyB5KyspIHtcbiAgICAgICAgICAgICAgICBpbWFnZVdyYXBwZXIuZGF0YVt5ICogc2l6ZVggKyB4XSA9IHRoaXMuZGF0YVsoZnJvbVkgKyB5KSAqIHRoaXMuc2l6ZS54ICsgZnJvbVggKyB4XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHJpZXZlcyBhIGdpdmVuIHBpeGVsIHBvc2l0aW9uIGZyb20gdGhlIGltYWdlXG4gICAgICogQHBhcmFtIHggVGhlIHgtcG9zaXRpb25cbiAgICAgKiBAcGFyYW0geSBUaGUgeS1wb3NpdGlvblxuICAgICAqIEByZXR1cm5zIFRoZSBncmF5c2NhbGUgdmFsdWUgYXQgdGhlIHBpeGVsLXBvc2l0aW9uXG4gICAgICovXG4gICAgZ2V0KHg6IG51bWJlciwgeTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVt5ICogdGhpcy5zaXplLnggKyB4XTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIGEgZ2l2ZW4gcGl4ZWwgcG9zaXRpb24gaW4gdGhlIGltYWdlXG4gICAgICogQHBhcmFtIHggVGhlIHgtcG9zaXRpb25cbiAgICAgKiBAcGFyYW0geSBUaGUgeS1wb3NpdGlvblxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgZ3JheXNjYWxlIHZhbHVlIHRvIHNldFxuICAgICAqIEByZXR1cm5zIFRoZSBJbWFnZSBpdHNlbGYgKGZvciBwb3NzaWJsZSBjaGFpbmluZylcbiAgICAgKi9cbiAgICBzZXQoeDogbnVtYmVyLCB5OiBudW1iZXIsIHZhbHVlOiBudW1iZXIpOiBJbWFnZVdyYXBwZXI8VD4ge1xuICAgICAgICB0aGlzLmRhdGFbeSAqIHRoaXMuc2l6ZS54ICsgeF0gPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgYm9yZGVyIG9mIHRoZSBpbWFnZSAoMSBwaXhlbCkgdG8gemVyb1xuICAgICAqL1xuICAgIHplcm9Cb3JkZXIoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy5zaXplLng7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuc2l6ZS55O1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd2lkdGg7IGkrKykge1xuICAgICAgICAgICAgZGF0YVtpXSA9IGRhdGFbKGhlaWdodCAtIDEpICogd2lkdGggKyBpXSA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGhlaWdodCAtIDE7IGkrKykge1xuICAgICAgICAgICAgZGF0YVtpICogd2lkdGhdID0gZGF0YVtpICogd2lkdGggKyAod2lkdGggLSAxKV0gPSAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW52ZXJ0cyBhIGJpbmFyeSBpbWFnZSBpbiBwbGFjZVxuICAgICAqL1xuICAgIGludmVydCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YTtcblxuICAgICAgICBmb3IgKGxldCBpID0gZGF0YS5sZW5ndGg7IGktLTspIHtcbiAgICAgICAgICAgIGRhdGFbaV0gPSBkYXRhW2ldID8gMCA6IDE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtb21lbnRzKGxhYmVsQ291bnQ6IG51bWJlcik6IEFycmF5PE1vbWVudD4ge1xuICAgICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLnNpemUueTtcbiAgICAgICAgY29uc3Qgd2lkdGggPSB0aGlzLnNpemUueDtcbiAgICAgICAgY29uc3QgbGFiZWxTdW0gPSBuZXcgQXJyYXk8TW9tZW50PigpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgQXJyYXk8TW9tZW50PigpO1xuXG4gICAgICAgIGlmIChsYWJlbENvdW50IDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxhYmVsQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgbGFiZWxTdW1baV0gPSB7XG4gICAgICAgICAgICAgICAgbTAwOiAwLFxuICAgICAgICAgICAgICAgIG0wMTogMCxcbiAgICAgICAgICAgICAgICBtMTA6IDAsXG4gICAgICAgICAgICAgICAgbTExOiAwLFxuICAgICAgICAgICAgICAgIG0wMjogMCxcbiAgICAgICAgICAgICAgICBtMjA6IDAsXG4gICAgICAgICAgICAgICAgdGhldGE6IDAsXG4gICAgICAgICAgICAgICAgcmFkOiAwXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBoZWlnaHQ7IHkrKykge1xuICAgICAgICAgICAgY29uc3QgeXNxID0geSAqIHk7XG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHdpZHRoOyB4KyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWwgPSB0aGlzLmRhdGFbeSAqIHdpZHRoICsgeF07XG4gICAgICAgICAgICAgICAgaWYgKHZhbCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBsYWJlbFN1bVt2YWwgLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwubTAwICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsLm0wMSArPSB5O1xuICAgICAgICAgICAgICAgICAgICBsYWJlbC5tMTAgKz0geDtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwubTExICs9IHggKiB5O1xuICAgICAgICAgICAgICAgICAgICBsYWJlbC5tMDIgKz0geXNxO1xuICAgICAgICAgICAgICAgICAgICBsYWJlbC5tMjAgKz0geCAqIHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgUEkgPSBNYXRoLlBJO1xuICAgICAgICBjb25zdCBQSV80ID0gUEkgLyA0O1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGFiZWxDb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBsYWJlbCA9IGxhYmVsU3VtW2ldO1xuICAgICAgICAgICAgaWYgKCFpc05hTihsYWJlbC5tMDApICYmIGxhYmVsLm0wMCAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHhfID0gbGFiZWwubTEwIC8gbGFiZWwubTAwO1xuICAgICAgICAgICAgICAgIGNvbnN0IHlfID0gbGFiZWwubTAxIC8gbGFiZWwubTAwO1xuICAgICAgICAgICAgICAgIGNvbnN0IG11MTEgPSBsYWJlbC5tMTEgLyBsYWJlbC5tMDAgLSB4XyAqIHlfO1xuICAgICAgICAgICAgICAgIGNvbnN0IG11MDIgPSBsYWJlbC5tMDIgLyBsYWJlbC5tMDAgLSB5XyAqIHlfO1xuICAgICAgICAgICAgICAgIGNvbnN0IG11MjAgPSBsYWJlbC5tMjAgLyBsYWJlbC5tMDAgLSB4XyAqIHhfO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRtcCA9IDAuNSAqIE1hdGguYXRhbigobXUwMiAtIG11MjApIC8gKDIgKiBtdTExKSkgKyAobXUxMSA+PSAwID8gUElfNCA6IC1QSV80KSArIFBJO1xuICAgICAgICAgICAgICAgIGxhYmVsLnRoZXRhID0gKHRtcCAqIDE4MCAvIFBJICsgOTApICUgMTgwIC0gOTA7XG4gICAgICAgICAgICAgICAgaWYgKGxhYmVsLnRoZXRhIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbC50aGV0YSArPSAxODA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxhYmVsLnJhZCA9IHRtcCA+IFBJID8gdG1wIC0gUEkgOiB0bXA7XG4gICAgICAgICAgICAgICAgbGFiZWwueCA9IE1hdGguY29zKHRtcCk7XG4gICAgICAgICAgICAgICAgbGFiZWwueSA9IE1hdGguc2luKHRtcCk7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gobGFiZWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEaXNwbGF5cyB0aGUge0ltYWdlV3JhcHBlcn0gaW4gYSBnaXZlbiBjYW52YXNcbiAgICAgKiBAcGFyYW0gY29udGV4dCBUaGUgcmVuZGVyaW5nIGNvbnRleHQgdG8gd3JpdGUgdG9cbiAgICAgKiBAcGFyYW0gc2NhbGUgU2NhbGUgd2hpY2ggaXMgYXBwbGllZCB0byBlYWNoIHBpeGVsLXZhbHVlXG4gICAgICovXG4gICAgc2hvdyhjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHNjYWxlOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5zaXplLnk7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy5zaXplLng7XG4gICAgICAgIC8vIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgLy8gY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgLy8gY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIGNvbnN0IGZyYW1lID0gY29udGV4dC5nZXRJbWFnZURhdGEoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBmcmFtZS5kYXRhO1xuICAgICAgICBsZXQgY3VycmVudCA9IDA7XG5cbiAgICAgICAgaWYgKCFzY2FsZSkge1xuICAgICAgICAgICAgc2NhbGUgPSAxLjA7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGhlaWdodDsgeSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHdpZHRoOyB4KyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwaXhlbCA9IHkgKiB3aWR0aCArIHg7XG4gICAgICAgICAgICAgICAgY3VycmVudCA9IHRoaXMuZ2V0KHgsIHkpICogc2NhbGU7XG4gICAgICAgICAgICAgICAgZGF0YVtwaXhlbCAqIDQgKyAwXSA9IGN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgZGF0YVtwaXhlbCAqIDQgKyAxXSA9IGN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgZGF0YVtwaXhlbCAqIDQgKyAyXSA9IGN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgZGF0YVtwaXhlbCAqIDQgKyAzXSA9IDI1NTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vZnJhbWUuZGF0YSA9IGRhdGE7XG4gICAgICAgIGNvbnRleHQucHV0SW1hZ2VEYXRhKGZyYW1lLCAwLCAwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEaXNwbGF5cyB0aGUgcGFydCBvZiB0aGUgaW1hZ2UgaW4gYSBnaXZlbiBjYW52YXNcbiAgICAgKiBAcGFyYW0gY29udGV4dCBUaGUgcmVuZGVyaW5nIGNvbnRleHQgdG8gd3JpdGUgdG9cbiAgICAgKiBAcGFyYW0gc2NhbGUgU2NhbGUgd2hpY2ggaXMgYXBwbGllZCB0byBlYWNoIHBpeGVsLXZhbHVlXG4gICAgICogQHBhcmFtIGZyb21YIFRoZSBob3Jpem9udGFsIHBvc2l0aW9uIHdoZXJlIHRvIG92ZXJsYXkgZnJvbVxuICAgICAqIEBwYXJhbSBmcm9tWSBUaGUgdmVydGljYWwgcG9zaXRpb24gd2hlcmUgdG8gb3ZlcmxheSBmcm9tXG4gICAgICovXG4gICAgb3ZlcmxheShjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHNjYWxlOiBudW1iZXIsIGZyb21YOiBudW1iZXIsIGZyb21ZOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgaHN2OiBIU1YgPSBbMCwgMSwgMV07XG4gICAgICAgIGNvbnN0IHdoaXRlUmdiOiBSR0IgPSBbMjU1LCAyNTUsIDI1NV07XG4gICAgICAgIGNvbnN0IGJsYWNrUmdiOiBSR0IgPSBbMCwgMCwgMF07XG4gICAgICAgIGNvbnN0IGZyYW1lID0gY29udGV4dC5nZXRJbWFnZURhdGEoZnJvbVgsIGZyb21ZLCB0aGlzLnNpemUueCwgdGhpcy5zaXplLnkpO1xuICAgICAgICBjb25zdCBkYXRhID0gZnJhbWUuZGF0YTtcblxuICAgICAgICBpZiAoIXNjYWxlIHx8IHNjYWxlIDwgMCB8fCBzY2FsZSA+IDM2MCkge1xuICAgICAgICAgICAgc2NhbGUgPSAzNjA7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBsZW5ndGggPSB0aGlzLmRhdGEubGVuZ3RoOyBsZW5ndGgtLTspIHtcbiAgICAgICAgICAgIGhzdlswXSA9IHRoaXMuZGF0YVtsZW5ndGhdICogc2NhbGU7XG4gICAgICAgICAgICBjb25zdCByZ2I6IFJHQiA9IGhzdlswXSA8PSAwID8gd2hpdGVSZ2IgOiBoc3ZbMF0gPj0gMzYwID8gYmxhY2tSZ2IgOiBoc3YycmdiKGhzdik7XG4gICAgICAgICAgICBkYXRhW2xlbmd0aCAqIDQgKyAwXSA9IHJnYlswXTtcbiAgICAgICAgICAgIGRhdGFbbGVuZ3RoICogNCArIDFdID0gcmdiWzFdO1xuICAgICAgICAgICAgZGF0YVtsZW5ndGggKiA0ICsgMl0gPSByZ2JbMl07XG4gICAgICAgICAgICBkYXRhW2xlbmd0aCAqIDQgKyAzXSA9IDI1NTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQucHV0SW1hZ2VEYXRhKGZyYW1lLCBmcm9tWCwgZnJvbVkpO1xuICAgIH1cbn1cbiIsIlxuZXhwb3J0IGZ1bmN0aW9uIGVudW1lcmF0ZURldmljZXMoKTogUHJvbWlzZTxBcnJheTxNZWRpYURldmljZUluZm8+PiB7XG4gICAgaWYgKG5hdmlnYXRvci5tZWRpYURldmljZXMgJiYgdHlwZW9mIG5hdmlnYXRvci5tZWRpYURldmljZXMuZW51bWVyYXRlRGV2aWNlcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5lbnVtZXJhdGVEZXZpY2VzKCk7XG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ2VudW1lcmF0ZURldmljZXMgaXMgbm90IGRlZmluZWQnKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVc2VyTWVkaWEoY29uc3RyYWludHM6IE1lZGlhU3RyZWFtQ29uc3RyYWludHMpOiBQcm9taXNlPE1lZGlhU3RyZWFtPiB7XG4gICAgaWYgKG5hdmlnYXRvci5tZWRpYURldmljZXMgJiYgdHlwZW9mIG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYShjb25zdHJhaW50cyk7XG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ2dldFVzZXJNZWRpYSBpcyBub3QgZGVmaW5lZCcpKTtcbn1cbiIsIi8qKlxuICogUGVyZm9ybXMgYSBkZWVwIG1lcmdlIG9mIG9iamVjdHMgYW5kIHJldHVybnMgbmV3IG9iamVjdC5cbiAqIERvZXMgbm90IG1vZGlmeSBvYmplY3RzIChpbW11dGFibGUpLlxuICogQHNlZSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNDgyMTgyMDlcbiAqXG4gKiBAcGFyYW0gb2JqZWN0cyAtIE9iamVjdHMgdG8gbWVyZ2VcbiAqIEByZXR1cm5zIE5ldyBvYmplY3Qgd2l0aCBtZXJnZWQga2V5L3ZhbHVlc1xuICovXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2UoLi4ub2JqZWN0czogUmVhZG9ubHlBcnJheTxhbnk+KTogb2JqZWN0IHtcbiAgICBjb25zdCBpc09iamVjdCA9IChvYmo6IHVua25vd24pID0+IG9iaiAmJiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JztcblxuICAgIHJldHVybiBvYmplY3RzLnJlZHVjZSgocHJldiwgb2JqKSA9PiB7XG4gICAgICAgIGlmIChvYmopIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBWYWwgPSBwcmV2W2tleV07XG4gICAgICAgICAgICAgICAgY29uc3Qgb1ZhbCA9IG9ialtrZXldO1xuXG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocFZhbCkgJiYgQXJyYXkuaXNBcnJheShvVmFsKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBwcmV2W2tleV0gPSBwVmFsLmNvbmNhdCguLi5vVmFsKTtcbiAgICAgICAgICAgICAgICAgICAgcHJldltrZXldID0gb1ZhbDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGlzT2JqZWN0KHBWYWwpICYmIGlzT2JqZWN0KG9WYWwpKSB7XG4gICAgICAgICAgICAgICAgICAgIHByZXZba2V5XSA9IG1lcmdlKHBWYWwsIG9WYWwpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHByZXZba2V5XSA9IG9WYWw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcHJldjtcbiAgICB9LCB7fSk7XG59IiwiaW1wb3J0IHsgUXVhZ2dhQ29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuXG5leHBvcnQgY29uc3QgY29uZmlnOiBRdWFnZ2FDb25maWcgPSB7XG4gICAgaW5wdXRTdHJlYW06IHtcbiAgICAgICAgbmFtZTogJ0xpdmUnLFxuICAgICAgICB0eXBlOiAnTGl2ZVN0cmVhbScsXG4gICAgICAgIGNvbnN0cmFpbnRzOiB7XG4gICAgICAgICAgICB3aWR0aDogNjQwLFxuICAgICAgICAgICAgaGVpZ2h0OiA0ODAsXG4gICAgICAgICAgICAvLyBhc3BlY3RSYXRpbzogNjQwLzQ4MCwgLy8gb3B0aW9uYWxcbiAgICAgICAgICAgIGZhY2luZ01vZGU6ICdlbnZpcm9ubWVudCcgLy8gb3IgdXNlclxuICAgICAgICAgICAgLy8gZGV2aWNlSWQ6ICczODc0NTk4MzQ1NzM4NzU5ODM3NTk4Mzc1OTgzNCdcbiAgICAgICAgfSxcbiAgICAgICAgYXJlYToge1xuICAgICAgICAgICAgdG9wOiAnMCUnLFxuICAgICAgICAgICAgcmlnaHQ6ICcwJScsXG4gICAgICAgICAgICBsZWZ0OiAnMCUnLFxuICAgICAgICAgICAgYm90dG9tOiAnMCUnXG4gICAgICAgIH0sXG4gICAgICAgIHNpbmdsZUNoYW5uZWw6IGZhbHNlIC8vIHRydWU6IG9ubHkgdGhlIHJlZCBjb2xvci1jaGFubmVsIGlzIHJlYWRcbiAgICB9LFxuICAgIGxvY2F0ZTogdHJ1ZSxcbiAgICBudW1PZldvcmtlcnM6IDAsXG4gICAgZGVjb2Rlcjoge1xuICAgICAgICByZWFkZXJzOiBbXG4gICAgICAgICAgICAnY29kZV8xMjhfcmVhZGVyJ1xuICAgICAgICBdLFxuICAgICAgICBkZWJ1Zzoge1xuICAgICAgICAgICAgZHJhd0JvdW5kaW5nQm94OiBmYWxzZSxcbiAgICAgICAgICAgIHNob3dGcmVxdWVuY3k6IGZhbHNlLFxuICAgICAgICAgICAgZHJhd1NjYW5saW5lOiBmYWxzZSxcbiAgICAgICAgICAgIHNob3dQYXR0ZXJuOiBmYWxzZVxuICAgICAgICB9XG4gICAgfSxcbiAgICBsb2NhdG9yOiB7XG4gICAgICAgIGhhbGZTYW1wbGU6IHRydWUsXG4gICAgICAgIHBhdGNoU2l6ZTogJ21lZGl1bScsIC8vIHgtc21hbGwsIHNtYWxsLCBtZWRpdW0sIGxhcmdlLCB4LWxhcmdlXG4gICAgICAgIGRlYnVnOiB7XG4gICAgICAgICAgICBzaG93Q2FudmFzOiBmYWxzZSxcbiAgICAgICAgICAgIHNob3dQYXRjaGVzOiBmYWxzZSxcbiAgICAgICAgICAgIHNob3dGb3VuZFBhdGNoZXM6IGZhbHNlLFxuICAgICAgICAgICAgc2hvd1NrZWxldG9uOiBmYWxzZSxcbiAgICAgICAgICAgIHNob3dMYWJlbHM6IGZhbHNlLFxuICAgICAgICAgICAgc2hvd1BhdGNoTGFiZWxzOiBmYWxzZSxcbiAgICAgICAgICAgIHNob3dSZW1haW5pbmdQYXRjaExhYmVsczogZmFsc2UsXG4gICAgICAgICAgICBib3hGcm9tUGF0Y2hlczoge1xuICAgICAgICAgICAgICAgIHNob3dUcmFuc2Zvcm1lZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2hvd1RyYW5zZm9ybWVkQm94OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzaG93QkI6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuIiwiaW1wb3J0IHsgQm94IH0gZnJvbSAnLi4vY29tbW9uL2JveCc7XG5pbXBvcnQgeyBJbWFnZVdyYXBwZXIgfSBmcm9tICcuLi9jb21tb24vaW1hZ2Utd3JhcHBlcic7XG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJy4uL2NvbW1vbi9wb2ludCc7XG5pbXBvcnQgeyBSZWFkZXJzIH0gZnJvbSAnLi4vcmVhZGVyJztcbmltcG9ydCB7IEJhcmNvZGUsIEJhcmNvZGVSZWFkZXIsIEJhcmNvZGVSZWFkZXJDb25maWcsIEJhcmNvZGVSZWFkZXJEZWNsYXJhdGlvbiwgQmFyY29kZVJlYWRlclR5cGUgfSBmcm9tICcuLi9yZWFkZXIvYmFyY29kZS1yZWFkZXInO1xuaW1wb3J0IHsgQmFyY29kZUxpbmUsIEJyZXNlbmhhbSB9IGZyb20gJy4vYnJlc2VuaGFtJztcbmltcG9ydCB7IEltYWdlRGVidWcgfSBmcm9tICcuLi9jb21tb24vaW1hZ2UtZGVidWcnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEJhcmNvZGVEZWNvZGVyQ29uZmlnIHtcbiAgICBkZWJ1Zz86IHtcbiAgICAgICAgZHJhd0JvdW5kaW5nQm94PzogYm9vbGVhbjtcbiAgICAgICAgZHJhd1NjYW5saW5lPzogYm9vbGVhbjtcbiAgICAgICAgc2hvd0ZyZXF1ZW5jeT86IGJvb2xlYW47XG4gICAgICAgIHNob3dQYXR0ZXJuPzogYm9vbGVhbjtcbiAgICB9O1xuICAgIG11bHRpcGxlPzogYm9vbGVhbjtcbiAgICByZWFkZXJzPzogQXJyYXk8QmFyY29kZVJlYWRlckRlY2xhcmF0aW9uPjtcbn1cblxudHlwZSBMaW5lID0gW1BvaW50LCBQb2ludF07XG5cbmV4cG9ydCBpbnRlcmZhY2UgUXVhZ2dhQmFyY29kZSB7XG4gICAgYW5nbGU/OiBudW1iZXI7XG4gICAgYmFyY29kZXM/OiBBcnJheTxRdWFnZ2FCYXJjb2RlPjsgLy8gVE9PRDogZGVhbCB3aXRoIG11bHRpcGxlIHJlc3VsdHNcbiAgICBib3g/OiBCb3g7XG4gICAgYm94ZXM/OiBBcnJheTxCb3g+OyAvLyBUT09EOiBkZWFsIHdpdGggbXVsdGlwbGUgcmVzdWx0c1xuICAgIGNvZGVSZXN1bHQ/OiBCYXJjb2RlO1xuICAgIGZyYW1lPzogc3RyaW5nO1xuICAgIGxpbmU/OiBMaW5lO1xuICAgIHBhdHRlcm4/OiBBcnJheTxudW1iZXI+O1xuICAgIHRocmVzaG9sZD86IG51bWJlcjtcbn07XG5cbmludGVyZmFjZSBCYXJjb2RlQW5kQmFyY29kZUxpbmUge1xuICAgIGNvZGVSZXN1bHQ6IEJhcmNvZGU7XG4gICAgYmFyY29kZUxpbmU6IEJhcmNvZGVMaW5lO1xufVxuXG5leHBvcnQgY2xhc3MgQmFyY29kZURlY29kZXIge1xuICAgIHByaXZhdGUgX2NvbmZpZzogQmFyY29kZURlY29kZXJDb25maWc7XG4gICAgcHJpdmF0ZSBfaW5wdXRJbWFnZVdyYXBwZXI6IEltYWdlV3JhcHBlcjxVaW50OEFycmF5PjtcbiAgICBwcml2YXRlIF9mcmVxdWVuY3lDYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICAgIHByaXZhdGUgX3BhdHRlcm5DYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICAgIHByaXZhdGUgX292ZXJsYXlDb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4gICAgcHJpdmF0ZSBfYmFyY29kZVJlYWRlcnM6IEFycmF5PEJhcmNvZGVSZWFkZXI+O1xuXG4gICAgY29uc3RydWN0b3IoY29uZmlnOiBCYXJjb2RlRGVjb2RlckNvbmZpZywgaW5wdXRJbWFnZVdyYXBwZXI6IEltYWdlV3JhcHBlcjxVaW50OEFycmF5Pikge1xuICAgICAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG4gICAgICAgIHRoaXMuX2lucHV0SW1hZ2VXcmFwcGVyID0gaW5wdXRJbWFnZVdyYXBwZXI7XG4gICAgICAgIHRoaXMuX2JhcmNvZGVSZWFkZXJzID0gW107XG5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdGhpcy5fY29uZmlnLmRlYnVnICYmIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGNvbnN0IGRlYnVnRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RlYnVnLmRldGVjdGlvbicpO1xuXG4gICAgICAgICAgICB0aGlzLl9mcmVxdWVuY3lDYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjYW52YXMuZnJlcXVlbmN5Jyk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX2ZyZXF1ZW5jeUNhbnZhcykge1xuICAgICAgICAgICAgICAgIHRoaXMuX2ZyZXF1ZW5jeUNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2ZyZXF1ZW5jeUNhbnZhcy5jbGFzc05hbWUgPSAnZnJlcXVlbmN5JztcbiAgICAgICAgICAgICAgICBpZiAoZGVidWdEaXYpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVidWdEaXYuYXBwZW5kQ2hpbGQodGhpcy5fZnJlcXVlbmN5Q2FudmFzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9mcmVxdWVuY3lDYW52YXMuc3R5bGUuZGlzcGxheSA9IHRoaXMuX2NvbmZpZy5kZWJ1Zy5zaG93RnJlcXVlbmN5ID8gJ2Jsb2NrJyA6ICdub25lJztcblxuICAgICAgICAgICAgdGhpcy5fcGF0dGVybkNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbnZhcy5wYXR0ZXJuQnVmZmVyJyk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX3BhdHRlcm5DYW52YXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9wYXR0ZXJuQ2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5fcGF0dGVybkNhbnZhcy5jbGFzc05hbWUgPSAncGF0dGVybkJ1ZmZlcic7XG4gICAgICAgICAgICAgICAgaWYgKGRlYnVnRGl2KSB7XG4gICAgICAgICAgICAgICAgICAgIGRlYnVnRGl2LmFwcGVuZENoaWxkKHRoaXMuX3BhdHRlcm5DYW52YXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX3BhdHRlcm5DYW52YXMuc3R5bGUuZGlzcGxheSA9IHRoaXMuX2NvbmZpZy5kZWJ1Zy5zaG93UGF0dGVybiA/ICdibG9jaycgOiAnbm9uZSc7XG5cbiAgICAgICAgICAgIGNvbnN0IG92ZXJsYXlDYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxDYW52YXNFbGVtZW50PignY2FudmFzLmRyYXdpbmdCdWZmZXInKTtcbiAgICAgICAgICAgIHRoaXMuX292ZXJsYXlDb250ZXh0ID0gb3ZlcmxheUNhbnZhcyA/IG92ZXJsYXlDYW52YXMuZ2V0Q29udGV4dCgnMmQnKSA6IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9pbml0UmVhZGVycygpO1xuICAgIH1cblxuICAgIGRlY29kZUZyb21Cb3VuZGluZ0JveGVzKGJveGVzOiBBcnJheTxCb3g+KTogUXVhZ2dhQmFyY29kZSB7XG4gICAgICAgIGNvbnN0IGJhcmNvZGVzID0gW107XG4gICAgICAgIGNvbnN0IG11bHRpcGxlID0gdGhpcy5fY29uZmlnLm11bHRpcGxlO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm94ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGJveCA9IGJveGVzW2ldO1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5kZWNvZGVGcm9tQm91bmRpbmdCb3goYm94KSB8fCB7fTtcbiAgICAgICAgICAgIHJlc3VsdC5ib3ggPSBib3g7XG5cbiAgICAgICAgICAgIGlmIChtdWx0aXBsZSkge1xuICAgICAgICAgICAgICAgIGJhcmNvZGVzLnB1c2gocmVzdWx0KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmNvZGVSZXN1bHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG11bHRpcGxlKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGJhcmNvZGVzXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV2l0aCB0aGUgaGVscCBvZiB0aGUgY29uZmlndXJlZCByZWFkZXJzIHRoaXMgZnVuY3Rpb24gdHJpZXMgdG8gZGV0ZWN0XG4gICAgICogYSB2YWxpZCBiYXJjb2RlIHBhdHRlcm4gd2l0aGluIHRoZSBnaXZlbiBhcmVhLlxuICAgICAqIEBwYXJhbSBib3ggVGhlIGFyZWEgdG8gc2VhcmNoIGluXG4gICAgICogQHJldHVybnMgVGhlIHJlc3VsdCB7Y29kZVJlc3VsdCwgbGluZSwgYW5nbGUsIHBhdHRlcm4sIHRocmVzaG9sZH1cbiAgICAgKi9cbiAgICBkZWNvZGVGcm9tQm91bmRpbmdCb3goYm94OiBCb3gpOiBRdWFnZ2FCYXJjb2RlIHtcbiAgICAgICAgY29uc3QgZGVidWcgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuX292ZXJsYXlDb250ZXh0ICYmIHRoaXMuX2NvbmZpZy5kZWJ1ZztcblxuICAgICAgICBpZiAoZGVidWcgJiYgZGVidWcuZHJhd0JvdW5kaW5nQm94KSB7XG4gICAgICAgICAgICB0aGlzLl9kcmF3UGF0aChib3gsICdibHVlJywgMik7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbGluZSA9IHRoaXMuX2dldExpbmUoYm94KTtcblxuICAgICAgICBpZiAobGluZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhbmdsZSA9IE1hdGguYXRhbjIobGluZVsxXS55IC0gbGluZVswXS55LCBsaW5lWzFdLnggLSBsaW5lWzBdLngpO1xuICAgICAgICBsaW5lID0gdGhpcy5fZ2V0RXh0ZW5kZWRMaW5lKGxpbmUsIGFuZ2xlKTtcblxuICAgICAgICBsZXQgcmVzdWx0ID0gdGhpcy5fdHJ5RGVjb2RlKGxpbmUpO1xuICAgICAgICBpZiAocmVzdWx0ID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLl90cnlEZWNvZGVCcnV0ZUZvcmNlKGJveCwgbGluZSwgYW5nbGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlc3VsdCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGVidWcgJiYgZGVidWcuZHJhd1NjYW5saW5lKSB7XG4gICAgICAgICAgICB0aGlzLl9kcmF3UGF0aChsaW5lLCAncmVkJywgMyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29kZVJlc3VsdDogcmVzdWx0LmNvZGVSZXN1bHQsXG4gICAgICAgICAgICBsaW5lLFxuICAgICAgICAgICAgYW5nbGUsXG4gICAgICAgICAgICBwYXR0ZXJuOiByZXN1bHQuYmFyY29kZUxpbmUubGluZSxcbiAgICAgICAgICAgIHRocmVzaG9sZDogcmVzdWx0LmJhcmNvZGVMaW5lLnRocmVzaG9sZFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHNldFJlYWRlcnMocmVhZGVyczogQXJyYXk8QmFyY29kZVJlYWRlckRlY2xhcmF0aW9uPik6IHZvaWQge1xuICAgICAgICB0aGlzLl9jb25maWcucmVhZGVycyA9IHJlYWRlcnM7XG4gICAgICAgIHRoaXMuX2JhcmNvZGVSZWFkZXJzLmxlbmd0aCA9IDA7XG4gICAgICAgIHRoaXMuX2luaXRSZWFkZXJzKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaW5pdFJlYWRlcnMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2NvbmZpZy5yZWFkZXJzLmZvckVhY2gocmVhZGVyQ29uZmlnID0+IHtcbiAgICAgICAgICAgIGxldCByZWFkZXI6IEJhcmNvZGVSZWFkZXJUeXBlO1xuICAgICAgICAgICAgbGV0IGNvbmZpZ3VyYXRpb246IEJhcmNvZGVSZWFkZXJDb25maWcgPSB7fTtcbiAgICAgICAgICAgIGxldCBzdXBwbGVtZW50cyA9IFtdO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIHJlYWRlckNvbmZpZyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICByZWFkZXIgPSByZWFkZXJDb25maWcuZm9ybWF0O1xuICAgICAgICAgICAgICAgIGNvbmZpZ3VyYXRpb24gPSByZWFkZXJDb25maWcuY29uZmlnIHx8IHt9O1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgcmVhZGVyQ29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHJlYWRlciA9IHJlYWRlckNvbmZpZztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQmVmb3JlIHJlZ2lzdGVyaW5nIHJlYWRlcjonLCByZWFkZXIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbi5zdXBwbGVtZW50cykge1xuICAgICAgICAgICAgICAgIHN1cHBsZW1lbnRzID0gY29uZmlndXJhdGlvbi5zdXBwbGVtZW50cy5tYXAoc3VwcGxlbWVudCA9PiBuZXcgUmVhZGVyc1tzdXBwbGVtZW50XSgpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fYmFyY29kZVJlYWRlcnMucHVzaChuZXcgUmVhZGVyc1tyZWFkZXJdKGNvbmZpZ3VyYXRpb24sIHN1cHBsZW1lbnRzKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUmVnaXN0ZXJlZCBSZWFkZXJzOicsXG4gICAgICAgICAgICAgICAgLi4udGhpcy5fYmFyY29kZVJlYWRlcnMubWFwKCh7IGNvbmZpZywgRk9STUFUIH0pID0+IEpTT04uc3RyaW5naWZ5KHsgY29uZmlnLCBGT1JNQVQgfSkpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGV4dGVuZCB0aGUgbGluZSBvbiBib3RoIGVuZHNcbiAgICAgKiBAcGFyYW0gbGluZVxuICAgICAqIEBwYXJhbSBhbmdsZVxuICAgICAqL1xuICAgIHByaXZhdGUgX2dldEV4dGVuZGVkTGluZShsaW5lOiBMaW5lLCBhbmdsZTogbnVtYmVyKTogTGluZSB7XG4gICAgICAgIGZ1bmN0aW9uIGV4dGVuZExpbmUoYW1vdW50OiBudW1iZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IGV4dGVuc2lvbiA9IHtcbiAgICAgICAgICAgICAgICB5OiBhbW91bnQgKiBNYXRoLnNpbihhbmdsZSksXG4gICAgICAgICAgICAgICAgeDogYW1vdW50ICogTWF0aC5jb3MoYW5nbGUpXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBsaW5lWzBdLnkgLT0gZXh0ZW5zaW9uLnk7XG4gICAgICAgICAgICBsaW5lWzBdLnggLT0gZXh0ZW5zaW9uLng7XG4gICAgICAgICAgICBsaW5lWzFdLnkgKz0gZXh0ZW5zaW9uLnk7XG4gICAgICAgICAgICBsaW5lWzFdLnggKz0gZXh0ZW5zaW9uLng7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBsaW5lTGVuZ3RoID0gTWF0aC5zcXJ0KChsaW5lWzFdLnkgLSBsaW5lWzBdLnkpICoqIDIgKyAobGluZVsxXS54IC0gbGluZVswXS54KSAqKiAyKTtcbiAgICAgICAgbGV0IGV4dGVuc2lvbkxlbmd0aCA9IGxpbmVMZW5ndGggKiAwLjEgfCAwO1xuXG4gICAgICAgIGV4dGVuZExpbmUoZXh0ZW5zaW9uTGVuZ3RoKTtcblxuICAgICAgICAvLyBjaGVjayBpZiBpbnNpZGUgaW1hZ2VcbiAgICAgICAgd2hpbGUgKGV4dGVuc2lvbkxlbmd0aCA+IDEgJiYgKCF0aGlzLl9pbnB1dEltYWdlV3JhcHBlci5pbkltYWdlV2l0aEJvcmRlcihsaW5lWzBdLCAwKVxuICAgICAgICAgICAgfHwgIXRoaXMuX2lucHV0SW1hZ2VXcmFwcGVyLmluSW1hZ2VXaXRoQm9yZGVyKGxpbmVbMV0sIDApKSkge1xuICAgICAgICAgICAgZXh0ZW5zaW9uTGVuZ3RoID4+PSAxO1xuICAgICAgICAgICAgZXh0ZW5kTGluZSgtZXh0ZW5zaW9uTGVuZ3RoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBsaW5lO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2dldExpbmUoYm94OiBCb3gpOiBMaW5lIHtcbiAgICAgICAgcmV0dXJuIFt7XG4gICAgICAgICAgICB4OiAoYm94WzFdLnggKyBib3hbMF0ueCkgLyAyLFxuICAgICAgICAgICAgeTogKGJveFsxXS55ICsgYm94WzBdLnkpIC8gMlxuICAgICAgICB9LCB7XG4gICAgICAgICAgICB4OiAoYm94WzNdLnggKyBib3hbMl0ueCkgLyAyLFxuICAgICAgICAgICAgeTogKGJveFszXS55ICsgYm94WzJdLnkpIC8gMlxuICAgICAgICB9XTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF90cnlEZWNvZGUobGluZTogTGluZSk6IEJhcmNvZGVBbmRCYXJjb2RlTGluZSB7XG4gICAgICAgIGNvbnN0IGRlYnVnID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLl9jb25maWcuZGVidWc7XG5cbiAgICAgICAgaWYgKGRlYnVnICYmIHRoaXMuX292ZXJsYXlDb250ZXh0KSB7XG4gICAgICAgICAgICB0aGlzLl9kcmF3UGF0aChsaW5lLCAncmVkJywgMyk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgYmFyY29kZUxpbmUgPSBCcmVzZW5oYW0uZ2V0QmFyY29kZUxpbmUodGhpcy5faW5wdXRJbWFnZVdyYXBwZXIsIGxpbmVbMF0sIGxpbmVbMV0pO1xuXG4gICAgICAgIGlmIChkZWJ1ZyAmJiBkZWJ1Zy5zaG93RnJlcXVlbmN5KSB7XG4gICAgICAgICAgICB0aGlzLl9wcmludEZyZXF1ZW5jeShiYXJjb2RlTGluZS5saW5lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJhcmNvZGVMaW5lID0gQnJlc2VuaGFtLnRvQmluYXJ5TGluZShiYXJjb2RlTGluZSk7XG5cbiAgICAgICAgaWYgKGRlYnVnICYmIGRlYnVnLnNob3dQYXR0ZXJuKSB7XG4gICAgICAgICAgICB0aGlzLl9wcmludFBhdHRlcm4oYmFyY29kZUxpbmUubGluZSk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2JhcmNvZGVSZWFkZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBjb2RlUmVzdWx0ID0gdGhpcy5fYmFyY29kZVJlYWRlcnNbaV0uZGVjb2RlUGF0dGVybihiYXJjb2RlTGluZS5saW5lKTtcbiAgICAgICAgICAgIGlmIChjb2RlUmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgY29kZVJlc3VsdCxcbiAgICAgICAgICAgICAgICAgICAgYmFyY29kZUxpbmVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2Qgc2xpY2VzIHRoZSBnaXZlbiBhcmVhIGFwYXJ0IGFuZCB0cmllcyB0byBkZXRlY3QgYSBiYXJjb2RlLXBhdHRlcm4gZm9yIGVhY2ggc2xpY2UuXG4gICAgICogSXQgcmV0dXJucyB0aGUgZGVjb2RlZCBiYXJjb2RlLCBvciBudWxsIGlmIG5vdGhpbmcgd2FzIGZvdW5kXG4gICAgICogQHBhcmFtIGJveFxuICAgICAqIEBwYXJhbSBsaW5lXG4gICAgICogQHBhcmFtIGxpbmVBbmdsZVxuICAgICAqL1xuICAgIHByaXZhdGUgX3RyeURlY29kZUJydXRlRm9yY2UoYm94OiBCb3gsIGxpbmU6IExpbmUsIGxpbmVBbmdsZTogbnVtYmVyKTogQmFyY29kZUFuZEJhcmNvZGVMaW5lIHtcbiAgICAgICAgY29uc3Qgc2lkZUxlbmd0aCA9IE1hdGguc3FydCgoYm94WzFdLnggLSBib3hbMF0ueCkgKiogMiArIChib3hbMV0ueSAtIGJveFswXS55KSAqKiAyKTtcbiAgICAgICAgY29uc3Qgc2xpY2VzID0gMTY7XG4gICAgICAgIGNvbnN0IHhkaXIgPSBNYXRoLnNpbihsaW5lQW5nbGUpO1xuICAgICAgICBjb25zdCB5ZGlyID0gTWF0aC5jb3MobGluZUFuZ2xlKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHNsaWNlczsgaSsrKSB7XG4gICAgICAgICAgICAvLyBtb3ZlIGxpbmUgcGVycGVuZGljdWxhciB0byBhbmdsZVxuICAgICAgICAgICAgY29uc3QgZGlyID0gc2lkZUxlbmd0aCAvIHNsaWNlcyAqIGkgKiAoaSAlIDIgPT09IDAgPyAtMSA6IDEpO1xuICAgICAgICAgICAgbGluZVswXS55ICs9IGRpciAqIHhkaXI7XG4gICAgICAgICAgICBsaW5lWzBdLnggLT0gZGlyICogeWRpcjtcbiAgICAgICAgICAgIGxpbmVbMV0ueSArPSBkaXIgKiB4ZGlyO1xuICAgICAgICAgICAgbGluZVsxXS54IC09IGRpciAqIHlkaXI7XG5cbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuX3RyeURlY29kZShsaW5lKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXNlZCBmb3IgZGV2ZWxvcG1lbnQgb25seVxuICAgICAqL1xuICAgIHByaXZhdGUgX3ByaW50RnJlcXVlbmN5KGxpbmU6IEFycmF5PG51bWJlcj4pOiB2b2lkIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuX2ZyZXF1ZW5jeUNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICB0aGlzLl9mcmVxdWVuY3lDYW52YXMud2lkdGggPSBsaW5lLmxlbmd0aDtcbiAgICAgICAgdGhpcy5fZnJlcXVlbmN5Q2FudmFzLmhlaWdodCA9IDI1NjtcblxuICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gJ2JsdWUnO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29udGV4dC5tb3ZlVG8oaSwgMjU1KTtcbiAgICAgICAgICAgIGNvbnRleHQubGluZVRvKGksIDI1NSAtIGxpbmVbaV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgICAgICAgY29udGV4dC5zdHJva2UoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVc2VkIGZvciBkZXZlbG9wbWVudCBvbmx5XG4gICAgICovXG4gICAgcHJpdmF0ZSBfcHJpbnRQYXR0ZXJuKGxpbmU6IEFycmF5PG51bWJlcj4pOiB2b2lkIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuX3BhdHRlcm5DYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAgICAgICB0aGlzLl9wYXR0ZXJuQ2FudmFzLndpZHRoID0gbGluZS5sZW5ndGg7XG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gJ2JsYWNrJztcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChsaW5lW2ldID09PSAxKSB7XG4gICAgICAgICAgICAgICAgY29udGV4dC5maWxsUmVjdChpLCAwLCAxLCAxMDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZHJhd1BhdGgocGF0aDogQXJyYXk8UG9pbnQ+LCBjb2xvcjogc3RyaW5nLCBsaW5lV2lkdGg6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBJbWFnZURlYnVnLmRyYXdQYXRoKHBhdGgsIHRoaXMuX292ZXJsYXlDb250ZXh0LCBjb2xvciwgbGluZVdpZHRoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBQb2ludCB9IGZyb20gJy4uL2NvbW1vbi9wb2ludCc7XG5pbXBvcnQgeyBJbWFnZVdyYXBwZXIgfSBmcm9tICcuLi9jb21tb24vaW1hZ2Utd3JhcHBlcic7XG5cbmVudW0gU2xvcGUge1xuICAgIFVwID0gMSxcbiAgICBEb3duID0gLTFcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmFyY29kZUxpbmUge1xuICAgIGxpbmU6IEFycmF5PG51bWJlcj47XG4gICAgbWF4PzogbnVtYmVyO1xuICAgIG1pbj86IG51bWJlcjtcbiAgICB0aHJlc2hvbGQ/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBCcmVzZW5oYW0ge1xuICAgIC8qKlxuICAgICAqIFNjYW5zIGEgbGluZSBvZiB0aGUgZ2l2ZW4gaW1hZ2UgZnJvbSBwb2ludCBwMSB0byBwMiBhbmQgcmV0dXJucyBhIHJlc3VsdCBvYmplY3QgY29udGFpbmluZ1xuICAgICAqIGdyYXktc2NhbGUgdmFsdWVzICgwLTI1NSkgb2YgdGhlIHVuZGVybHlpbmcgcGl4ZWxzIGluIGFkZGl0aW9uIHRvIHRoZSBtaW4gYW5kIG1heCB2YWx1ZXMuXG4gICAgICogQHBhcmFtIGltYWdlV3JhcHBlclxuICAgICAqIEBwYXJhbSBwMSBUaGUgc3RhcnQgcG9pbnQge3gseX1cbiAgICAgKiBAcGFyYW0gcDIgVGhlIGVuZCBwb2ludCB7eCx5fVxuICAgICAqIEByZXR1cm5zIHtsaW5lLCBtaW4sIG1heH1cbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0QmFyY29kZUxpbmUoaW1hZ2VXcmFwcGVyOiBJbWFnZVdyYXBwZXIsIHAxOiBQb2ludCwgcDI6IFBvaW50KTogQmFyY29kZUxpbmUge1xuICAgICAgICBsZXQgeDAgPSBwMS54IHwgMDtcbiAgICAgICAgbGV0IHkwID0gcDEueSB8IDA7XG4gICAgICAgIGxldCB4MSA9IHAyLnggfCAwO1xuICAgICAgICBsZXQgeTEgPSBwMi55IHwgMDtcbiAgICAgICAgY29uc3Qgc3RlZXAgPSBNYXRoLmFicyh5MSAtIHkwKSA+IE1hdGguYWJzKHgxIC0geDApO1xuICAgICAgICBsZXQgdG1wOiBudW1iZXI7XG4gICAgICAgIGNvbnN0IGxpbmUgPSBbXTtcbiAgICAgICAgY29uc3QgaW1hZ2VEYXRhID0gaW1hZ2VXcmFwcGVyLmRhdGE7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gaW1hZ2VXcmFwcGVyLnNpemUueDtcbiAgICAgICAgbGV0IHZhbDogbnVtYmVyO1xuICAgICAgICBsZXQgbWluID0gMjU1O1xuICAgICAgICBsZXQgbWF4ID0gMDtcblxuICAgICAgICBmdW5jdGlvbiByZWFkKGE6IG51bWJlciwgYjogbnVtYmVyKSB7XG4gICAgICAgICAgICB2YWwgPSBpbWFnZURhdGFbYiAqIHdpZHRoICsgYV07XG4gICAgICAgICAgICBtaW4gPSB2YWwgPCBtaW4gPyB2YWwgOiBtaW47XG4gICAgICAgICAgICBtYXggPSB2YWwgPiBtYXggPyB2YWwgOiBtYXg7XG4gICAgICAgICAgICBsaW5lLnB1c2godmFsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdGVlcCkge1xuICAgICAgICAgICAgdG1wID0geDA7XG4gICAgICAgICAgICB4MCA9IHkwO1xuICAgICAgICAgICAgeTAgPSB0bXA7XG5cbiAgICAgICAgICAgIHRtcCA9IHgxO1xuICAgICAgICAgICAgeDEgPSB5MTtcbiAgICAgICAgICAgIHkxID0gdG1wO1xuICAgICAgICB9XG4gICAgICAgIGlmICh4MCA+IHgxKSB7XG4gICAgICAgICAgICB0bXAgPSB4MDtcbiAgICAgICAgICAgIHgwID0geDE7XG4gICAgICAgICAgICB4MSA9IHRtcDtcblxuICAgICAgICAgICAgdG1wID0geTA7XG4gICAgICAgICAgICB5MCA9IHkxO1xuICAgICAgICAgICAgeTEgPSB0bXA7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZGVsdGF4ID0geDEgLSB4MDtcbiAgICAgICAgbGV0IGRlbHRheSA9IE1hdGguYWJzKHkxIC0geTApO1xuICAgICAgICBsZXQgZXJyb3IgPSAoZGVsdGF4IC8gMikgfCAwO1xuICAgICAgICBsZXQgeSA9IHkwO1xuICAgICAgICBsZXQgeXN0ZXAgPSB5MCA8IHkxID8gMSA6IC0xO1xuXG4gICAgICAgIGZvciAobGV0IHggPSB4MDsgeCA8IHgxOyB4KyspIHtcbiAgICAgICAgICAgIGlmIChzdGVlcCkge1xuICAgICAgICAgICAgICAgIHJlYWQoeSwgeCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlYWQoeCwgeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlcnJvciA9IGVycm9yIC0gZGVsdGF5O1xuICAgICAgICAgICAgaWYgKGVycm9yIDwgMCkge1xuICAgICAgICAgICAgICAgIHkgKz0geXN0ZXA7XG4gICAgICAgICAgICAgICAgZXJyb3IgPSBlcnJvciArIGRlbHRheDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsaW5lLFxuICAgICAgICAgICAgbWluLFxuICAgICAgICAgICAgbWF4XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29udmVydHMgdGhlIHJlc3VsdCBmcm9tIGdldEJhcmNvZGVMaW5lIGludG8gYSBiaW5hcnkgcmVwcmVzZW50YXRpb25cbiAgICAgKiBhbHNvIGNvbnNpZGVyaW5nIHRoZSBmcmVxdWVuY3kgYW5kIHNsb3BlIG9mIHRoZSBzaWduYWwgZm9yIG1vcmUgcm9idXN0IHJlc3VsdHNcbiAgICAgKiBAcGFyYW0gcmVzdWx0IHtsaW5lLCBtaW4sIG1heH1cbiAgICAgKi9cbiAgICBzdGF0aWMgdG9CaW5hcnlMaW5lKHJlc3VsdDogQmFyY29kZUxpbmUpOiBCYXJjb2RlTGluZSB7XG4gICAgICAgIGNvbnN0IG1pbiA9IHJlc3VsdC5taW47XG4gICAgICAgIGNvbnN0IG1heCA9IHJlc3VsdC5tYXg7XG4gICAgICAgIGNvbnN0IGxpbmUgPSByZXN1bHQubGluZTtcbiAgICAgICAgY29uc3QgY2VudGVyID0gbWluICsgKG1heCAtIG1pbikgLyAyO1xuICAgICAgICBjb25zdCBleHRyZW1hID0gbmV3IEFycmF5PHsgcG9zOiBudW1iZXI7IHZhbDogbnVtYmVyOyB9PigpO1xuICAgICAgICBsZXQgdGhyZXNob2xkID0gKG1heCAtIG1pbikgLyAxMjtcbiAgICAgICAgY29uc3QgclRocmVzaG9sZCA9IC10aHJlc2hvbGQ7XG5cbiAgICAgICAgLy8gMS4gZmluZCBleHRyZW1hXG4gICAgICAgIGxldCBjdXJyZW50RGlyID0gbGluZVswXSA+IGNlbnRlciA/IFNsb3BlLlVwIDogU2xvcGUuRG93bjtcbiAgICAgICAgZXh0cmVtYS5wdXNoKHtcbiAgICAgICAgICAgIHBvczogMCxcbiAgICAgICAgICAgIHZhbDogbGluZVswXVxuICAgICAgICB9KTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lLmxlbmd0aCAtIDI7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgc2xvcGUgPSAobGluZVtpICsgMV0gLSBsaW5lW2ldKTtcbiAgICAgICAgICAgIGNvbnN0IHNsb3BlMiA9IChsaW5lW2kgKyAyXSAtIGxpbmVbaSArIDFdKTtcbiAgICAgICAgICAgIGxldCBkaXI6IFNsb3BlO1xuICAgICAgICAgICAgaWYgKChzbG9wZSArIHNsb3BlMikgPCByVGhyZXNob2xkICYmIGxpbmVbaSArIDFdIDwgKGNlbnRlciAqIDEuNSkpIHtcbiAgICAgICAgICAgICAgICBkaXIgPSBTbG9wZS5Eb3duO1xuICAgICAgICAgICAgfSBlbHNlIGlmICgoc2xvcGUgKyBzbG9wZTIpID4gdGhyZXNob2xkICYmIGxpbmVbaSArIDFdID4gKGNlbnRlciAqIDAuNSkpIHtcbiAgICAgICAgICAgICAgICBkaXIgPSBTbG9wZS5VcDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGlyID0gY3VycmVudERpcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGN1cnJlbnREaXIgIT09IGRpcikge1xuICAgICAgICAgICAgICAgIGV4dHJlbWEucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHBvczogaSxcbiAgICAgICAgICAgICAgICAgICAgdmFsOiBsaW5lW2ldXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY3VycmVudERpciA9IGRpcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBleHRyZW1hLnB1c2goe1xuICAgICAgICAgICAgcG9zOiBsaW5lLmxlbmd0aCxcbiAgICAgICAgICAgIHZhbDogbGluZVtsaW5lLmxlbmd0aCAtIDFdXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZvciAobGV0IGogPSBleHRyZW1hWzBdLnBvczsgaiA8IGV4dHJlbWFbMV0ucG9zOyBqKyspIHtcbiAgICAgICAgICAgIGxpbmVbal0gPSBsaW5lW2pdID4gY2VudGVyID8gMCA6IDE7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpdGVyYXRlIG92ZXIgZXh0cmVtYSBhbmQgY29udmVydCB0byBiaW5hcnkgYmFzZWQgb24gYXZnIGJldHdlZW4gbWlubWF4XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgZXh0cmVtYS5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChleHRyZW1hW2kgKyAxXS52YWwgPiBleHRyZW1hW2ldLnZhbCkge1xuICAgICAgICAgICAgICAgIHRocmVzaG9sZCA9IChleHRyZW1hW2ldLnZhbCArICgoZXh0cmVtYVtpICsgMV0udmFsIC0gZXh0cmVtYVtpXS52YWwpIC8gMykgKiAyKSB8IDA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocmVzaG9sZCA9IChleHRyZW1hW2kgKyAxXS52YWwgKyAoKGV4dHJlbWFbaV0udmFsIC0gZXh0cmVtYVtpICsgMV0udmFsKSAvIDMpKSB8IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAobGV0IGogPSBleHRyZW1hW2ldLnBvczsgaiA8IGV4dHJlbWFbaSArIDFdLnBvczsgaisrKSB7XG4gICAgICAgICAgICAgICAgbGluZVtqXSA9IGxpbmVbal0gPiB0aHJlc2hvbGQgPyAwIDogMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5yZXN1bHQsXG4gICAgICAgICAgICB0aHJlc2hvbGRcbiAgICAgICAgfTtcbiAgICB9O1xufVxuIiwiaW1wb3J0IHsgZ2V0VXNlck1lZGlhLCBlbnVtZXJhdGVEZXZpY2VzIH0gZnJvbSAnLi4vY29tbW9uL21lZGlhLWRldmljZXMnO1xuXG5sZXQgX3N0cmVhbTogTWVkaWFTdHJlYW07XG5cbmV4cG9ydCBjbGFzcyBDYW1lcmFBY2Nlc3Mge1xuICAgIC8qKlxuICAgICAqIEF0dGVtcHRzIHRvIGF0dGFjaCB0aGUgY2FtZXJhLXN0cmVhbSB0byBhIGdpdmVuIHZpZGVvIGVsZW1lbnRcbiAgICAgKiBhbmQgY2FsbHMgdGhlIGNhbGxiYWNrIGZ1bmN0aW9uIHdoZW4gdGhlIGNvbnRlbnQgaXMgcmVhZHlcbiAgICAgKiBAcGFyYW0gdmlkZW9cbiAgICAgKiBAcGFyYW0gdmlkZW9Db25zdHJhaW50c1xuICAgICAqL1xuICAgIHN0YXRpYyBhc3luYyByZXF1ZXN0KHZpZGVvOiBIVE1MVmlkZW9FbGVtZW50LCB2aWRlb0NvbnN0cmFpbnRzOiBNZWRpYVRyYWNrQ29uc3RyYWludHMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZENvbnN0cmFpbnRzID0gQ2FtZXJhQWNjZXNzLnBpY2tDb25zdHJhaW50cyh2aWRlb0NvbnN0cmFpbnRzKTtcbiAgICAgICAgX3N0cmVhbSA9IGF3YWl0IGdldFVzZXJNZWRpYShub3JtYWxpemVkQ29uc3RyYWludHMpO1xuICAgICAgICB2aWRlby5zcmNPYmplY3QgPSBfc3RyZWFtO1xuICAgICAgICB2aWRlby5zZXRBdHRyaWJ1dGUoJ2F1dG9wbGF5JywgJycpO1xuICAgICAgICB2aWRlby5zZXRBdHRyaWJ1dGUoJ211dGVkJywgJycpO1xuICAgICAgICB2aWRlby5zZXRBdHRyaWJ1dGUoJ3BsYXlzaW5saW5lJywgJycpO1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWRlZG1ldGFkYXRhJywgKCkgPT4ge1xuICAgICAgICAgICAgdmlkZW8ucGxheSgpO1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9KSkudGhlbihfd2FpdEZvclZpZGVvLmJpbmQobnVsbCwgdmlkZW8pKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcmVsZWFzZSgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgdHJhY2tzID0gX3N0cmVhbSAmJiBfc3RyZWFtLmdldFZpZGVvVHJhY2tzKCk7XG4gICAgICAgIGlmICh0cmFja3MgJiYgdHJhY2tzLmxlbmd0aCkge1xuICAgICAgICAgICAgdHJhY2tzWzBdLnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgICBfc3RyZWFtID0gbnVsbDtcbiAgICB9XG5cbiAgICBzdGF0aWMgYXN5bmMgZW51bWVyYXRlVmlkZW9EZXZpY2VzKCk6IFByb21pc2U8QXJyYXk8TWVkaWFEZXZpY2VJbmZvPj4ge1xuICAgICAgICBjb25zdCBkZXZpY2VzID0gYXdhaXQgZW51bWVyYXRlRGV2aWNlcygpO1xuICAgICAgICByZXR1cm4gZGV2aWNlcy5maWx0ZXIoKHsga2luZCB9KSA9PiBraW5kID09PSAndmlkZW9pbnB1dCcpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRBY3RpdmVTdHJlYW1MYWJlbCgpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCB0cmFjayA9IENhbWVyYUFjY2Vzcy5nZXRBY3RpdmVUcmFjaygpO1xuICAgICAgICByZXR1cm4gdHJhY2sgPyB0cmFjay5sYWJlbCA6ICcnO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRBY3RpdmVUcmFjaygpIHtcbiAgICAgICAgY29uc3QgdHJhY2tzID0gX3N0cmVhbSAmJiBfc3RyZWFtLmdldFZpZGVvVHJhY2tzKCk7XG4gICAgICAgIGlmICh0cmFja3MgJiYgdHJhY2tzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHRyYWNrc1swXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHN0YXRpYyBwaWNrQ29uc3RyYWludHModmlkZW9Db25zdHJhaW50czogTWVkaWFUcmFja0NvbnN0cmFpbnRzKTogTWVkaWFTdHJlYW1Db25zdHJhaW50cyB7XG4gICAgICAgIGxldCB7IHdpZHRoLCBoZWlnaHQsIGZhY2luZ01vZGUsIGFzcGVjdFJhdGlvLCBkZXZpY2VJZCB9ID0gdmlkZW9Db25zdHJhaW50cztcbiAgICAgICAgY29uc3QgeyBtaW5Bc3BlY3RSYXRpbywgZmFjaW5nIH0gPSB2aWRlb0NvbnN0cmFpbnRzIGFzIGFueTtcblxuICAgICAgICBpZiAodHlwZW9mIG1pbkFzcGVjdFJhdGlvICE9PSAndW5kZWZpbmVkJyAmJiBtaW5Bc3BlY3RSYXRpbyA+IDApIHtcbiAgICAgICAgICAgIGFzcGVjdFJhdGlvID0gbWluQXNwZWN0UmF0aW87XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgV0FSTklORzogQ29uc3RyYWludCAnbWluQXNwZWN0UmF0aW8nIGlzIGRlcHJlY2F0ZWQ7IFVzZSAnYXNwZWN0UmF0aW8nIGluc3RlYWRgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgZmFjaW5nICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgZmFjaW5nTW9kZSA9IGZhY2luZztcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBXQVJOSU5HOiBDb25zdHJhaW50ICdmYWNpbmcnIGlzIGRlcHJlY2F0ZWQuIFVzZSAnZmFjaW5nTW9kZScgaW5zdGVhZCdgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRDb25zdHJhaW50cyA9IGRldmljZUlkICYmIGZhY2luZ01vZGUgP1xuICAgICAgICAgICAgeyB3aWR0aCwgaGVpZ2h0LCBhc3BlY3RSYXRpbywgZGV2aWNlSWQgfSA6IHsgd2lkdGgsIGhlaWdodCwgZmFjaW5nTW9kZSwgYXNwZWN0UmF0aW8sIGRldmljZUlkIH07XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGF1ZGlvOiBmYWxzZSxcbiAgICAgICAgICAgIHZpZGVvOiBub3JtYWxpemVkQ29uc3RyYWludHNcbiAgICAgICAgfTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIF93YWl0Rm9yVmlkZW8oeyB2aWRlb1dpZHRoLCB2aWRlb0hlaWdodCB9KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgbGV0IGF0dGVtcHRzID0gMTA7XG5cbiAgICAgICAgZnVuY3Rpb24gY2hlY2tWaWRlbygpIHtcbiAgICAgICAgICAgIGlmIChhdHRlbXB0cyA+IDApIHtcbiAgICAgICAgICAgICAgICBpZiAodmlkZW9XaWR0aCA+IDEwICYmIHZpZGVvSGVpZ2h0ID4gMTApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3ZpZGVvV2lkdGh9cHggeCAke3ZpZGVvSGVpZ2h0fXB4YCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGNoZWNrVmlkZW8sIDUwMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZWplY3QoJ1VuYWJsZSB0byBwbGF5IHZpZGVvIHN0cmVhbS4gSXMgd2ViY2FtIHdvcmtpbmc/Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhdHRlbXB0cy0tO1xuICAgICAgICB9XG4gICAgICAgIGNoZWNrVmlkZW8oKTtcbiAgICB9KTtcbn1cbiIsIi8qKlxuICogQGJvcnJvd3MgaHR0cHM6Ly9naXRodWIuY29tL2V4aWYtanMvZXhpZi1qc1xuICovXG5cbmNvbnN0IEV4aWZUYWdzID0geyAweDAxMTI6ICdvcmllbnRhdGlvbicgfTtcbmV4cG9ydCBjb25zdCBBdmFpbGFibGVUYWdzOiBBcnJheTxzdHJpbmc+ID0gT2JqZWN0LmtleXMoRXhpZlRhZ3MpLm1hcChrZXkgPT4gRXhpZlRhZ3Nba2V5XSk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGFncyB7XG4gICAgW2tleTogc3RyaW5nXTogbnVtYmVyIHwgc3RyaW5nO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmluZFRhZ3NJbk9iamVjdFVSTChzcmM6IHN0cmluZywgdGFncyA9IEF2YWlsYWJsZVRhZ3MpOiBQcm9taXNlPFRhZ3M+IHtcbiAgICBpZiAoL15ibG9iOi9pLnRlc3Qoc3JjKSkge1xuICAgICAgICBjb25zdCBidWZmZXIgPSBhd2FpdCBvYmplY3RVUkxUb0Jsb2Ioc3JjKTtcbiAgICAgICAgcmV0dXJuIGZpbmRUYWdzSW5CdWZmZXIoYnVmZmVyLCB0YWdzKTtcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShudWxsKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRUYWdzSW5CdWZmZXIoZmlsZTogQXJyYXlCdWZmZXIsIHNlbGVjdGVkVGFnczogQXJyYXk8c3RyaW5nPiA9IEF2YWlsYWJsZVRhZ3MpOiBUYWdzIHtcbiAgICBjb25zdCBkYXRhVmlldyA9IG5ldyBEYXRhVmlldyhmaWxlKTtcbiAgICBjb25zdCBsZW5ndGggPSBmaWxlLmJ5dGVMZW5ndGg7XG4gICAgY29uc3QgZXhpZlRhZ3MgPSBzZWxlY3RlZFRhZ3MucmVkdWNlKChyZXN1bHQsIHNlbGVjdGVkVGFnKSA9PiB7XG4gICAgICAgIGNvbnN0IGV4aWZUYWcgPSBPYmplY3Qua2V5cyhFeGlmVGFncykuZmluZCh0YWcgPT4gRXhpZlRhZ3NbdGFnXSA9PT0gc2VsZWN0ZWRUYWcpO1xuICAgICAgICBpZiAoZXhpZlRhZykge1xuICAgICAgICAgICAgcmVzdWx0W2V4aWZUYWddID0gc2VsZWN0ZWRUYWc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9LCB7fSk7XG4gICAgbGV0IG9mZnNldCA9IDI7XG5cbiAgICBpZiAoKGRhdGFWaWV3LmdldFVpbnQ4KDApICE9PSAweEZGKSB8fCAoZGF0YVZpZXcuZ2V0VWludDgoMSkgIT09IDB4RDgpKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHdoaWxlIChvZmZzZXQgPCBsZW5ndGgpIHtcbiAgICAgICAgaWYgKGRhdGFWaWV3LmdldFVpbnQ4KG9mZnNldCkgIT09IDB4RkYpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbWFya2VyID0gZGF0YVZpZXcuZ2V0VWludDgob2Zmc2V0ICsgMSk7XG4gICAgICAgIGlmIChtYXJrZXIgPT09IDB4RTEpIHtcbiAgICAgICAgICAgIHJldHVybiByZWFkRVhJRkRhdGEoZGF0YVZpZXcsIG9mZnNldCArIDQsIGV4aWZUYWdzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9mZnNldCArPSAyICsgZGF0YVZpZXcuZ2V0VWludDE2KG9mZnNldCArIDIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIG9iamVjdFVSTFRvQmxvYih1cmw6IHN0cmluZyk6IFByb21pc2U8QXJyYXlCdWZmZXI+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5hcnJheUJ1ZmZlcigpO1xuICAgIH1cblxuICAgIHRocm93IG5ldyBFcnJvcignSFRUUCBFcnJvciAnICsgcmVzcG9uc2Uuc3RhdHVzKTtcbn1cblxuZnVuY3Rpb24gcmVhZEVYSUZEYXRhKGRhdGFWaWV3OiBEYXRhVmlldywgc3RhcnQ6IG51bWJlciwgZXhpZlRhZ3M6IHsgW2tleTogbnVtYmVyXTogc3RyaW5nIH0pOiBUYWdzIHtcbiAgICBpZiAoJ0V4aWYnLnNwbGl0KCcnKS5zb21lKChjaGFyLCBpbmRleCkgPT4gZGF0YVZpZXcuZ2V0VWludDgoc3RhcnQgKyBpbmRleCkgIT09IGNoYXIuY2hhckNvZGVBdCgwKSkpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgdGlmZk9mZnNldCA9IHN0YXJ0ICsgNjtcbiAgICBsZXQgYmlnRW5kOiBib29sZWFuO1xuXG4gICAgaWYgKGRhdGFWaWV3LmdldFVpbnQxNih0aWZmT2Zmc2V0KSA9PT0gMHg0OTQ5KSB7XG4gICAgICAgIGJpZ0VuZCA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoZGF0YVZpZXcuZ2V0VWludDE2KHRpZmZPZmZzZXQpID09PSAweDRENEQpIHtcbiAgICAgICAgYmlnRW5kID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoZGF0YVZpZXcuZ2V0VWludDE2KHRpZmZPZmZzZXQgKyAyLCAhYmlnRW5kKSAhPT0gMHgwMDJBKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGZpcnN0SUZET2Zmc2V0ID0gZGF0YVZpZXcuZ2V0VWludDMyKHRpZmZPZmZzZXQgKyA0LCAhYmlnRW5kKTtcbiAgICBpZiAoZmlyc3RJRkRPZmZzZXQgPCAweDAwMDAwMDA4KSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHRhZ3MgPSByZWFkVGFncyhkYXRhVmlldywgdGlmZk9mZnNldCArIGZpcnN0SUZET2Zmc2V0LCBleGlmVGFncywgYmlnRW5kKTtcbiAgICByZXR1cm4gdGFncztcbn1cblxuZnVuY3Rpb24gcmVhZFRhZ3MoZGF0YVZpZXc6IERhdGFWaWV3LCBkaXJTdGFydDogbnVtYmVyLCBzdHJpbmdzOiB7IFtrZXk6IG51bWJlcl06IHN0cmluZyB9LCBiaWdFbmQ6IGJvb2xlYW4pOiBUYWdzIHtcbiAgICBjb25zdCBlbnRyaWVzID0gZGF0YVZpZXcuZ2V0VWludDE2KGRpclN0YXJ0LCAhYmlnRW5kKTtcbiAgICBjb25zdCB0YWdzOiBUYWdzID0ge307XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVudHJpZXM7IGkrKykge1xuICAgICAgICBjb25zdCBlbnRyeU9mZnNldCA9IGRpclN0YXJ0ICsgaSAqIDEyICsgMjtcbiAgICAgICAgY29uc3QgdGFnID0gc3RyaW5nc1tkYXRhVmlldy5nZXRVaW50MTYoZW50cnlPZmZzZXQsICFiaWdFbmQpXTtcbiAgICAgICAgaWYgKHRhZykge1xuICAgICAgICAgICAgdGFnc1t0YWddID0gcmVhZFRhZ1ZhbHVlKGRhdGFWaWV3LCBlbnRyeU9mZnNldCwgYmlnRW5kKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YWdzO1xufVxuXG5mdW5jdGlvbiByZWFkVGFnVmFsdWUoZGF0YVZpZXc6IERhdGFWaWV3LCBlbnRyeU9mZnNldDogbnVtYmVyLCBiaWdFbmQ6IGJvb2xlYW4pOiBudW1iZXIgfCBzdHJpbmcge1xuICAgIGNvbnN0IHR5cGUgPSBkYXRhVmlldy5nZXRVaW50MTYoZW50cnlPZmZzZXQgKyAyLCAhYmlnRW5kKTtcbiAgICBjb25zdCBudW1WYWx1ZXMgPSBkYXRhVmlldy5nZXRVaW50MzIoZW50cnlPZmZzZXQgKyA0LCAhYmlnRW5kKTtcblxuICAgIHJldHVybiB0eXBlID09PSAzICYmIG51bVZhbHVlcyA9PT0gMSA/IGRhdGFWaWV3LmdldFVpbnQxNihlbnRyeU9mZnNldCArIDgsICFiaWdFbmQpIDogdW5kZWZpbmVkO1xufVxuIiwiaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuLi9jb21tb24vcG9pbnQnO1xuaW1wb3J0IHsgSW5wdXRTdHJlYW0gfSBmcm9tICcuL2lucHV0LXN0cmVhbSc7XG5pbXBvcnQgeyBJbnB1dFN0cmVhbUNvbmZpZyB9IGZyb20gJy4vaW5wdXQtc3RyZWFtLWNvbmZpZyc7XG5cbmNvbnN0IFFVQVRFUl9DSVJDTEUgPSBNYXRoLlBJIC8gMjtcblxuZXhwb3J0IGNsYXNzIEZyYW1lR3JhYmJlciB7XG4gICAgcHJpdmF0ZSBfaW5wdXRTdHJlYW06IElucHV0U3RyZWFtO1xuICAgIHByaXZhdGUgX3N0cmVhbUNvbmZpZzogSW5wdXRTdHJlYW1Db25maWc7XG4gICAgcHJpdmF0ZSBfY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICBwcml2YXRlIF9jb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4gICAgcHJpdmF0ZSBfZGF0YTogVWludDhBcnJheTtcbiAgICBwcml2YXRlIF9jYW52YXNIZWlnaHQ6IG51bWJlcjtcbiAgICBwcml2YXRlIF9jYW52YXNXaWR0aDogbnVtYmVyO1xuICAgIHByaXZhdGUgX2hlaWdodDogbnVtYmVyO1xuICAgIHByaXZhdGUgX3dpZHRoOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfdG9wTGVmdDogUG9pbnQ7XG5cbiAgICBjb25zdHJ1Y3RvcihpbnB1dFN0cmVhbTogSW5wdXRTdHJlYW0sIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5faW5wdXRTdHJlYW0gPSBpbnB1dFN0cmVhbTtcbiAgICAgICAgdGhpcy5fc3RyZWFtQ29uZmlnID0gaW5wdXRTdHJlYW0uY29uZmlnO1xuICAgICAgICB0aGlzLl9jYW52YXNXaWR0aCA9IGlucHV0U3RyZWFtLmNhbnZhc1dpZHRoO1xuICAgICAgICB0aGlzLl9jYW52YXNIZWlnaHQgPSBpbnB1dFN0cmVhbS5jYW52YXNIZWlnaHQ7XG4gICAgICAgIHRoaXMuX3dpZHRoID0gaW5wdXRTdHJlYW0ud2lkdGg7XG4gICAgICAgIHRoaXMuX2hlaWdodCA9IGlucHV0U3RyZWFtLmhlaWdodDtcbiAgICAgICAgdGhpcy5fdG9wTGVmdCA9IGlucHV0U3RyZWFtLnRvcExlZnQ7XG4gICAgICAgIHRoaXMuX2NhbnZhcyA9IGNhbnZhcyB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgdGhpcy5fY2FudmFzLndpZHRoID0gdGhpcy5fY2FudmFzV2lkdGg7XG4gICAgICAgIHRoaXMuX2NhbnZhcy5oZWlnaHQgPSB0aGlzLl9jYW52YXNIZWlnaHQ7XG4gICAgICAgIHRoaXMuX2NvbnRleHQgPSB0aGlzLl9jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgdGhpcy5fZGF0YSA9IG5ldyBVaW50OEFycmF5KHRoaXMuX3dpZHRoICogdGhpcy5faGVpZ2h0KTtcblxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0ZyYW1lR3JhYmJlcicsIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBzaXplOiB7XG4gICAgICAgICAgICAgICAgICAgIHg6IHRoaXMuX3dpZHRoLFxuICAgICAgICAgICAgICAgICAgICB5OiB0aGlzLl9oZWlnaHRcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRvcExlZnQ6IHRoaXMuX3RvcExlZnQsXG4gICAgICAgICAgICAgICAgdmlkZW9TaXplOiB7XG4gICAgICAgICAgICAgICAgICAgIHg6IGlucHV0U3RyZWFtLnJlYWxXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgeTogaW5wdXRTdHJlYW0ucmVhbEhlaWdodFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY2FudmFzU2l6ZToge1xuICAgICAgICAgICAgICAgICAgICB4OiB0aGlzLl9jYW52YXNXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgeTogdGhpcy5fY2FudmFzSGVpZ2h0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXNlcyB0aGUgZ2l2ZW4gYXJyYXkgYXMgZnJhbWUtYnVmZmVyXG4gICAgICovXG4gICAgYXR0YWNoRGF0YShkYXRhOiBVaW50OEFycmF5KTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZldGNoZXMgYSBmcmFtZSBmcm9tIHRoZSBpbnB1dC1zdHJlYW0gYW5kIHB1dHMgaW50byB0aGUgZnJhbWUtYnVmZmVyLlxuICAgICAqIFRoZSBpbWFnZS1kYXRhIGlzIGNvbnZlcnRlZCB0byBncmF5LXNjYWxlIGFuZCB0aGVuIGhhbGYtc2FtcGxlZCBpZiBjb25maWd1cmVkLlxuICAgICAqL1xuICAgIGdyYWIoKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IGZyYW1lID0gdGhpcy5faW5wdXRTdHJlYW0uZ2V0RnJhbWUoKTtcblxuICAgICAgICBpZiAoZnJhbWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2FkanVzdENhbnZhc1NpemUoKTtcblxuICAgICAgICAgICAgbGV0IGRyYXdhYmxlOiBIVE1MSW1hZ2VFbGVtZW50IHwgSFRNTFZpZGVvRWxlbWVudDtcbiAgICAgICAgICAgIGxldCBkcmF3QW5nbGUgPSAwO1xuXG4gICAgICAgICAgICBpZiAoZnJhbWUgaW5zdGFuY2VvZiBIVE1MVmlkZW9FbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgZHJhd2FibGUgPSBmcmFtZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZHJhd2FibGUgPSBmcmFtZS5pbWFnZTtcblxuICAgICAgICAgICAgICAgIGlmIChmcmFtZS50YWdzKSB7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoZnJhbWUudGFncy5vcmllbnRhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA2OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJhd0FuZ2xlID0gUVVBVEVSX0NJUkNMRTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgODoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyYXdBbmdsZSA9IC1RVUFURVJfQ0lSQ0xFO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZHJhd0FuZ2xlICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaGFsZldpZHRoID0gdGhpcy5fY2FudmFzV2lkdGggPj4gMTtcbiAgICAgICAgICAgICAgICBjb25zdCBoYWxmSGVpZ2h0ID0gdGhpcy5fY2FudmFzSGVpZ2h0ID4+IDE7XG5cbiAgICAgICAgICAgICAgICB0aGlzLl9jb250ZXh0LnRyYW5zbGF0ZShoYWxmV2lkdGgsIGhhbGZIZWlnaHQpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2NvbnRleHQucm90YXRlKGRyYXdBbmdsZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fY29udGV4dC5kcmF3SW1hZ2UoZHJhd2FibGUsIC1oYWxmSGVpZ2h0LCAtaGFsZldpZHRoLCB0aGlzLl9jYW52YXNIZWlnaHQsIHRoaXMuX2NhbnZhc1dpZHRoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9jb250ZXh0LnJvdGF0ZSgtZHJhd0FuZ2xlKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9jb250ZXh0LnRyYW5zbGF0ZSgtaGFsZldpZHRoLCAtaGFsZkhlaWdodCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NvbnRleHQuZHJhd0ltYWdlKGRyYXdhYmxlLCAwLCAwLCB0aGlzLl9jYW52YXNXaWR0aCwgdGhpcy5fY2FudmFzSGVpZ2h0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgaW1hZ2VEYXRhID0gdGhpcy5fY29udGV4dC5nZXRJbWFnZURhdGEodGhpcy5fdG9wTGVmdC54LCB0aGlzLl90b3BMZWZ0LnksIHRoaXMuX3dpZHRoLCB0aGlzLl9oZWlnaHQpLmRhdGE7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLl9zdHJlYW1Db25maWcuaGFsZlNhbXBsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2dyYXlBbmRIYWxmU2FtcGxlRnJvbUNhbnZhc0RhdGEoaW1hZ2VEYXRhKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY29tcHV0ZUdyYXkoaW1hZ2VEYXRhKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9hZGp1c3RDYW52YXNTaXplKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5fY2FudmFzLmhlaWdodCAhPT0gdGhpcy5fY2FudmFzSGVpZ2h0IHx8IHRoaXMuX2NhbnZhcy53aWR0aCAhPT0gdGhpcy5fY2FudmFzV2lkdGgpIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdDYW52YXMgc2l6ZSBuZWVkcyB0byBiZSBhZGp1c3RlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fY2FudmFzLmhlaWdodCA9IHRoaXMuX2NhbnZhc0hlaWdodDtcbiAgICAgICAgICAgIHRoaXMuX2NhbnZhcy53aWR0aCA9IHRoaXMuX2NhbnZhc1dpZHRoO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZ3JheUFuZEhhbGZTYW1wbGVGcm9tQ2FudmFzRGF0YShpbWFnZURhdGE6IFVpbnQ4Q2xhbXBlZEFycmF5KTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGVuZEluZGV4ID0gaW1hZ2VEYXRhLmxlbmd0aCA+PiAyO1xuICAgICAgICBjb25zdCBvdXRXaWR0aCA9IHRoaXMuX3dpZHRoID4+IDE7XG4gICAgICAgIGxldCB0b3BSb3dJbmRleCA9IDA7XG4gICAgICAgIGxldCBib3R0b21Sb3dJbmRleCA9IHRoaXMuX3dpZHRoO1xuICAgICAgICBsZXQgb3V0SW1hZ2VJbmRleCA9IDA7XG5cbiAgICAgICAgd2hpbGUgKGJvdHRvbVJvd0luZGV4IDwgZW5kSW5kZXgpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3V0V2lkdGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvcDQgPSB0b3BSb3dJbmRleCA8PCAyO1xuICAgICAgICAgICAgICAgIGNvbnN0IGJvdHRvbTQgPSBib3R0b21Sb3dJbmRleCA8PCAyO1xuICAgICAgICAgICAgICAgIHRoaXMuX2RhdGFbb3V0SW1hZ2VJbmRleF0gPSAoXG4gICAgICAgICAgICAgICAgICAgICgwLjI5OSAqIGltYWdlRGF0YVt0b3A0ICsgMF0gKyAwLjU4NyAqIGltYWdlRGF0YVt0b3A0ICsgMV0gKyAwLjExNCAqIGltYWdlRGF0YVt0b3A0ICsgMl0pICtcbiAgICAgICAgICAgICAgICAgICAgKDAuMjk5ICogaW1hZ2VEYXRhW3RvcDQgKyA0XSArIDAuNTg3ICogaW1hZ2VEYXRhW3RvcDQgKyA1XSArIDAuMTE0ICogaW1hZ2VEYXRhW3RvcDQgKyA2XSkgK1xuICAgICAgICAgICAgICAgICAgICAoMC4yOTkgKiBpbWFnZURhdGFbYm90dG9tNCArIDBdICsgMC41ODcgKiBpbWFnZURhdGFbYm90dG9tNCArIDFdICsgMC4xMTQgKiBpbWFnZURhdGFbYm90dG9tNCArIDJdKSArXG4gICAgICAgICAgICAgICAgICAgICgwLjI5OSAqIGltYWdlRGF0YVtib3R0b200ICsgNF0gKyAwLjU4NyAqIGltYWdlRGF0YVtib3R0b200ICsgNV0gKyAwLjExNCAqIGltYWdlRGF0YVtib3R0b200ICsgNl0pXG4gICAgICAgICAgICAgICAgKSAvIDQgfCAwO1xuICAgICAgICAgICAgICAgIG91dEltYWdlSW5kZXgrKztcbiAgICAgICAgICAgICAgICB0b3BSb3dJbmRleCArPSAyO1xuICAgICAgICAgICAgICAgIGJvdHRvbVJvd0luZGV4ICs9IDI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0b3BSb3dJbmRleCArPSB0aGlzLl93aWR0aDtcbiAgICAgICAgICAgIGJvdHRvbVJvd0luZGV4ICs9IHRoaXMuX3dpZHRoO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfY29tcHV0ZUdyYXkoaW1hZ2VEYXRhOiBVaW50OENsYW1wZWRBcnJheSk6IHZvaWQge1xuICAgICAgICBjb25zdCBpbWFnZURhdGFMZW5ndGggPSBpbWFnZURhdGEubGVuZ3RoO1xuXG4gICAgICAgIGlmICh0aGlzLl9zdHJlYW1Db25maWcgJiYgdGhpcy5fc3RyZWFtQ29uZmlnLnNpbmdsZUNoYW5uZWwpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBqID0gMDsgaSA8IGltYWdlRGF0YUxlbmd0aDsgaSArPSA0LCBqKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9kYXRhW2pdID0gaW1hZ2VEYXRhW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGogPSAwOyBpIDwgaW1hZ2VEYXRhTGVuZ3RoOyBpICs9IDQsIGorKykge1xuICAgICAgICAgICAgICAgIHRoaXMuX2RhdGFbal0gPSAwLjI5OSAqIGltYWdlRGF0YVtpXSArIDAuNTg3ICogaW1hZ2VEYXRhW2kgKyAxXSArIDAuMTE0ICogaW1hZ2VEYXRhW2kgKyAyXSB8IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBmaW5kVGFnc0luT2JqZWN0VVJMLCBUYWdzIH0gZnJvbSAnLi9leGlmLWhlbHBlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW1hZ2VJbmZvIHtcbiAgICBpbWFnZTogSFRNTEltYWdlRWxlbWVudDtcbiAgICB0YWdzPzogVGFncztcbn1cblxuZXhwb3J0IGNsYXNzIEltYWdlTG9hZGVyIHtcbiAgICBzdGF0aWMgYXN5bmMgbG9hZChcbiAgICAgICAgYmFzZVVyaTogc3RyaW5nLFxuICAgICAgICBjYWxsYmFjazogKF86IEFycmF5PEltYWdlSW5mbz4pID0+IHZvaWQsXG4gICAgICAgIG9mZnNldDogbnVtYmVyLFxuICAgICAgICBzaXplOiBudW1iZXIsXG4gICAgICAgIHNlcXVlbmNlOiBib29sZWFuXG4gICAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGNvbnN0IGltYWdlU3JjcyA9IG5ldyBBcnJheTxzdHJpbmc+KHNpemUpO1xuICAgICAgICBjb25zdCBsb2FkZWRJbWFnZXMgPSBuZXcgQXJyYXk8SW1hZ2VJbmZvPihzaXplKTtcbiAgICAgICAgY29uc3Qgbm90TG9hZGVkSW1hZ2VzID0gbmV3IEFycmF5PEhUTUxJbWFnZUVsZW1lbnQ+KCk7XG5cbiAgICAgICAgaWYgKHNlcXVlbmNlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgaW1hZ2VTcmNzWzBdID0gYmFzZVVyaTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaW1hZ2VTcmNzW2ldID0gYCR7YmFzZVVyaX1pbWFnZS0keygnMDAnICsgKG9mZnNldCArIGkpKS5zbGljZSgtMyl9LmpwZ2A7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpbWFnZVNyY3MuZm9yRWFjaChzcmMgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIG5vdExvYWRlZEltYWdlcy5wdXNoKGltYWdlKTtcbiAgICAgICAgICAgIGltYWdlLm9ubG9hZCA9ICgpID0+IGxvYWRlZChpbWFnZSk7XG4gICAgICAgICAgICBpbWFnZS5zcmMgPSBzcmM7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGxvYWRlZChsb2FkZWRJbWFnZTogSFRNTEltYWdlRWxlbWVudCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBub3RMb2FkZWRJbWFnZXMubGVuZ3RoOyB4KyspIHtcbiAgICAgICAgICAgICAgICBpZiAobm90TG9hZGVkSW1hZ2VzW3hdID09PSBsb2FkZWRJbWFnZSkge1xuICAgICAgICAgICAgICAgICAgICBub3RMb2FkZWRJbWFnZXMuc3BsaWNlKHgsIDEpO1xuICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBhc3N1bWUgdGhlIGluZGV4IGlzIHRoZSBzYW1lXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgaW1hZ2VTcmNzLmxlbmd0aDsgeSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbWFnZU5hbWUgPSBpbWFnZVNyY3NbeV0uc3Vic3RyKGltYWdlU3Jjc1t5XS5sYXN0SW5kZXhPZignLycpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsb2FkZWRJbWFnZS5zcmMubGFzdEluZGV4T2YoaW1hZ2VOYW1lKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkZWRJbWFnZXNbeV0gPSB7IGltYWdlOiBsb2FkZWRJbWFnZSB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChub3RMb2FkZWRJbWFnZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0ltYWdlcyBsb2FkZWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlcXVlbmNlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlyc3RJbWFnZSA9IGxvYWRlZEltYWdlc1swXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0SW1hZ2UudGFncyA9IGF3YWl0IGZpbmRUYWdzSW5PYmplY3RVUkwoYmFzZVVyaSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhleCk7XG4gICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sobG9hZGVkSW1hZ2VzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBJbWFnZUluZm8sIEltYWdlTG9hZGVyIH0gZnJvbSAnLi9pbWFnZS1sb2FkZXInO1xuaW1wb3J0IHsgSW5wdXRTdHJlYW0gfSBmcm9tICcuL2lucHV0LXN0cmVhbSc7XG5pbXBvcnQgeyBJbnB1dFN0cmVhbUNvbmZpZyB9IGZyb20gJy4vaW5wdXQtc3RyZWFtLWNvbmZpZyc7XG5cbmV4cG9ydCBjbGFzcyBJbWFnZVN0cmVhbSBleHRlbmRzIElucHV0U3RyZWFtIHtcbiAgICBwcml2YXRlIF9iYXNlVXJsOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfZW5kZWQ6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBfZnJhbWVJbmRleDogbnVtYmVyO1xuICAgIHByaXZhdGUgX2hlaWdodDogbnVtYmVyO1xuICAgIHByaXZhdGUgX2ltYWdlczogQXJyYXk8SW1hZ2VJbmZvPjtcbiAgICBwcml2YXRlIF9sb2FkZWQ6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBfb2Zmc2V0OiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfcGF1c2VkOiBib29sZWFuO1xuICAgIHByaXZhdGUgX3NpemU6IG51bWJlcjtcbiAgICBwcml2YXRlIF93aWR0aDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5fY2FudmFzSGVpZ2h0ID0gMDtcbiAgICAgICAgdGhpcy5fY2FudmFzV2lkdGggPSAwO1xuICAgICAgICB0aGlzLl9iYXNlVXJsID0gbnVsbDtcbiAgICAgICAgdGhpcy5fZW5kZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fZnJhbWVJbmRleCA9IDA7XG4gICAgICAgIHRoaXMuX2hlaWdodCA9IDA7XG4gICAgICAgIHRoaXMuX2ltYWdlcyA9IG51bGw7XG4gICAgICAgIHRoaXMuX2xvYWRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9vZmZzZXQgPSAxO1xuICAgICAgICB0aGlzLl9wYXVzZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLl9zaXplID0gMDtcbiAgICAgICAgdGhpcy5fd2lkdGggPSAwO1xuICAgIH1cblxuICAgIGdldCByZWFsSGVpZ2h0KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9oZWlnaHQ7XG4gICAgfVxuXG4gICAgZ2V0IHJlYWxXaWR0aCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fd2lkdGg7XG4gICAgfVxuXG4gICAgZ2V0IGNvbmZpZygpOiBJbnB1dFN0cmVhbUNvbmZpZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb25maWc7XG4gICAgfVxuXG4gICAgc2V0IGNvbmZpZyhjb25maWc6IElucHV0U3RyZWFtQ29uZmlnKSB7XG4gICAgICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcblxuICAgICAgICBpZiAoY29uZmlnLnNlcXVlbmNlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5fYmFzZVVybCA9IGNvbmZpZy5zcmM7XG4gICAgICAgICAgICB0aGlzLl9zaXplID0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2Jhc2VVcmwgPSBjb25maWcuc3JjO1xuICAgICAgICAgICAgdGhpcy5fc2l6ZSA9IGNvbmZpZy5sZW5ndGg7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9sb2FkSW1hZ2VzKCk7XG4gICAgfVxuXG4gICAgZ2V0IGVuZGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZW5kZWQ7XG4gICAgfVxuXG4gICAgc2V0QXR0cmlidXRlKCkgeyB9XG5cbiAgICBwYXVzZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fcGF1c2VkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwbGF5KCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9wYXVzZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBzZXQgY3VycmVudFRpbWUodGltZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX2ZyYW1lSW5kZXggPSB0aW1lO1xuICAgIH1cblxuICAgIGdldEZyYW1lKCk6IEhUTUxWaWRlb0VsZW1lbnQgfCBJbWFnZUluZm8ge1xuICAgICAgICBsZXQgZnJhbWU6IEltYWdlSW5mbyA9IG51bGw7XG5cbiAgICAgICAgaWYgKHRoaXMuX2xvYWRlZCAmJiAhdGhpcy5fcGF1c2VkKSB7XG4gICAgICAgICAgICBmcmFtZSA9IHRoaXMuX2ltYWdlc1t0aGlzLl9mcmFtZUluZGV4XTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuX2ZyYW1lSW5kZXggPCAodGhpcy5fc2l6ZSAtIDEpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZnJhbWVJbmRleCsrO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZW5kZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXIoJ2VuZGVkJywgW10pO1xuICAgICAgICAgICAgICAgIH0sIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZyYW1lO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2xvYWRJbWFnZXMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2xvYWRlZCA9IGZhbHNlO1xuICAgICAgICBJbWFnZUxvYWRlci5sb2FkKHRoaXMuX2Jhc2VVcmwsIGltYWdlcyA9PiB7XG4gICAgICAgICAgICB0aGlzLl9pbWFnZXMgPSBpbWFnZXM7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoaW1hZ2VzWzBdLnRhZ3MgJiYgaW1hZ2VzWzBdLnRhZ3Mub3JpZW50YXRpb24pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgY2FzZSA4OiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3dpZHRoID0gaW1hZ2VzWzBdLmltYWdlLmhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faGVpZ2h0ID0gaW1hZ2VzWzBdLmltYWdlLndpZHRoO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl93aWR0aCA9IGltYWdlc1swXS5pbWFnZS53aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faGVpZ2h0ID0gaW1hZ2VzWzBdLmltYWdlLmhlaWdodDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX2NhbnZhc1dpZHRoID0gdGhpcy5fY2FsY3VsYXRlZFdpZHRoID0gdGhpcy5fY29uZmlnLnNpemUgPyB0aGlzLl93aWR0aCA+IHRoaXMuX2hlaWdodCA/XG4gICAgICAgICAgICAgICAgdGhpcy5fY29uZmlnLnNpemUgOiB0aGlzLl93aWR0aCAqIHRoaXMuX2NvbmZpZy5zaXplIC8gdGhpcy5faGVpZ2h0IHwgMCA6IHRoaXMuX3dpZHRoO1xuICAgICAgICAgICAgdGhpcy5fY2FudmFzSGVpZ2h0ID0gdGhpcy5fY2FsY3VsYXRlZEhlaWdodCA9IHRoaXMuX2NvbmZpZy5zaXplID8gdGhpcy5fd2lkdGggPiB0aGlzLl9oZWlnaHQgP1xuICAgICAgICAgICAgICAgIHRoaXMuX2hlaWdodCAqIHRoaXMuX2NvbmZpZy5zaXplIC8gdGhpcy5fd2lkdGggfCAwIDogdGhpcy5fY29uZmlnLnNpemUgOiB0aGlzLl9oZWlnaHQ7XG4gICAgICAgICAgICB0aGlzLl9sb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5fZnJhbWVJbmRleCA9IDA7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMudHJpZ2dlcignY2FucmVjb3JkJywgW10pLCAwKTtcbiAgICAgICAgfSwgdGhpcy5fb2Zmc2V0LCB0aGlzLl9zaXplLCB0aGlzLl9jb25maWcuc2VxdWVuY2UpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi4vY29tbW9uL3BvaW50JztcbmltcG9ydCB7IEJhcmNvZGVMb2NhdG9yQ29uZmlnLCBQYXRjaFNpemVDb25maWcgfSBmcm9tICcuLi9sb2NhdG9yL2JhcmNvZGUtbG9jYXRvci1jb25maWcnO1xuaW1wb3J0IHsgSW5wdXRTdHJlYW0gfSBmcm9tICcuL2lucHV0LXN0cmVhbSc7XG5pbXBvcnQgeyBBcmVhQ29uZmlnIH0gZnJvbSAnLi9pbnB1dC1zdHJlYW0tY29uZmlnJztcblxuZXhwb3J0IGludGVyZmFjZSBEaW1lbnNpb24ge1xuICAgIHVuaXQ6ICclJyB8ICdweCcsXG4gICAgdmFsdWU6IG51bWJlcjtcbn1cblxuZnVuY3Rpb24gX2NvbXB1dGVEaXZpc29ycyhuOiBudW1iZXIpOiBBcnJheTxudW1iZXI+IHtcbiAgICBjb25zdCBkaXZpc29ycyA9IG5ldyBBcnJheTxudW1iZXI+KCk7XG4gICAgY29uc3QgbGFyZ2VEaXZpc29ycyA9IG5ldyBBcnJheTxudW1iZXI+KCk7XG5cbiAgICBmb3IgKGxldCBkaXZpc29yID0gMTsgZGl2aXNvciAqIGRpdmlzb3IgPD0gbjsgZGl2aXNvcisrKSB7XG4gICAgICAgIGlmIChuICUgZGl2aXNvciA9PT0gMCkge1xuICAgICAgICAgICAgZGl2aXNvcnMucHVzaChkaXZpc29yKTtcbiAgICAgICAgICAgIGlmIChkaXZpc29yICogZGl2aXNvciAhPT0gbikge1xuICAgICAgICAgICAgICAgIGxhcmdlRGl2aXNvcnMudW5zaGlmdChuIC8gZGl2aXNvciB8IDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpdmlzb3JzLmNvbmNhdChsYXJnZURpdmlzb3JzKTtcbn1cblxuZnVuY3Rpb24gX2NvbXB1dGVDb21tb25EaXZpc29ycyhtOiBudW1iZXIsIG46IG51bWJlcik6IEFycmF5PG51bWJlcj4ge1xuICAgIGlmIChtID09PSBuKSB7XG4gICAgICAgIHJldHVybiBfY29tcHV0ZURpdmlzb3JzKG0pO1xuICAgIH1cblxuICAgIGNvbnN0IG1heCA9IG0gPiBuID8gbSA6IG47XG4gICAgY29uc3QgbWluID0gbSA+IG4gPyBuIDogbTtcbiAgICBjb25zdCBkaXZpc29ycyA9IG5ldyBBcnJheTxudW1iZXI+KCk7XG4gICAgY29uc3QgbGFyZ2VEaXZpc29ycyA9IG5ldyBBcnJheTxudW1iZXI+KCk7XG5cbiAgICBmb3IgKGxldCBkaXZpc29yID0gMTsgZGl2aXNvciAqIGRpdmlzb3IgPD0gbWluOyBkaXZpc29yKyspIHtcbiAgICAgICAgaWYgKG1heCAlIGRpdmlzb3IgPT09IDAgJiYgbWluICUgZGl2aXNvciA9PT0gMCkge1xuICAgICAgICAgICAgZGl2aXNvcnMucHVzaChkaXZpc29yKTtcbiAgICAgICAgICAgIGNvbnN0IGxhcmdlRGl2aXNvciA9IG1pbiAvIGRpdmlzb3IgfCAwO1xuICAgICAgICAgICAgaWYgKGRpdmlzb3IgIT09IGxhcmdlRGl2aXNvciAmJiBtYXggJSBsYXJnZURpdmlzb3IgPT09IDApIHtcbiAgICAgICAgICAgICAgICBsYXJnZURpdmlzb3JzLnVuc2hpZnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkaXZpc29ycy5jb25jYXQobGFyZ2VEaXZpc29ycyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVQYXRjaFNpemUocGF0Y2hTaXplOiBQYXRjaFNpemVDb25maWcsIHsgeCwgeSB9OiBQb2ludCk6IFBvaW50IHtcbiAgICBjb25zdCB3aWRlU2lkZSA9IE1hdGgubWF4KHggfCAwLCB5IHwgMCkgfCAwO1xuICAgIGNvbnN0IG5yT2ZQYXRjaGVzTGlzdCA9IFs4LCAxMCwgMTUsIDIwLCAzMiwgNjAsIDgwXTtcbiAgICBjb25zdCBuck9mUGF0Y2hlc01hcCA9IHtcbiAgICAgICAgJ3gtc21hbGwnOiA1LFxuICAgICAgICBzbWFsbDogNCxcbiAgICAgICAgbWVkaXVtOiAzLFxuICAgICAgICBsYXJnZTogMixcbiAgICAgICAgJ3gtbGFyZ2UnOiAxXG4gICAgfTtcbiAgICBjb25zdCBuck9mUGF0Y2hlc0luZGV4ID0gbnJPZlBhdGNoZXNNYXBbcGF0Y2hTaXplXSB8fCBuck9mUGF0Y2hlc01hcC5tZWRpdW0gfCAwO1xuICAgIGNvbnN0IG5yT2ZQYXRjaGVzID0gbnJPZlBhdGNoZXNMaXN0W25yT2ZQYXRjaGVzSW5kZXhdIHwgMDtcbiAgICBjb25zdCBkZXNpcmVkUGF0Y2hTaXplID0gd2lkZVNpZGUgLyBuck9mUGF0Y2hlcyB8IDA7XG5cbiAgICBmdW5jdGlvbiBmaW5kUGF0Y2hTaXplRm9yRGl2aXNvcnMoZGl2aXNvcnM6IEFycmF5PG51bWJlcj4pOiBQb2ludCB7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgbGV0IGZvdW5kID0gZGl2aXNvcnNbZGl2aXNvcnMubGVuZ3RoID4+IDFdIHwgMDtcblxuICAgICAgICB3aGlsZSAoaSA8IChkaXZpc29ycy5sZW5ndGggLSAxKSAmJiBkaXZpc29yc1tpXSA8IGRlc2lyZWRQYXRjaFNpemUpIHtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgfVxuICAgICAgICBpZiAoaSA+IDApIHtcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhkaXZpc29yc1tpXSAtIGRlc2lyZWRQYXRjaFNpemUpID4gTWF0aC5hYnMoZGl2aXNvcnNbaSAtIDFdIC0gZGVzaXJlZFBhdGNoU2l6ZSkpIHtcbiAgICAgICAgICAgICAgICBmb3VuZCA9IGRpdmlzb3JzW2kgLSAxXSB8IDA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvdW5kID0gZGl2aXNvcnNbaV0gfCAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChkZXNpcmVkUGF0Y2hTaXplIC8gZm91bmQgPCBuck9mUGF0Y2hlc0xpc3RbbnJPZlBhdGNoZXNJbmRleCArIDFdIC8gbnJPZlBhdGNoZXNMaXN0W25yT2ZQYXRjaGVzSW5kZXhdICYmXG4gICAgICAgICAgICBkZXNpcmVkUGF0Y2hTaXplIC8gZm91bmQgPiBuck9mUGF0Y2hlc0xpc3RbbnJPZlBhdGNoZXNJbmRleCAtIDFdIC8gbnJPZlBhdGNoZXNMaXN0W25yT2ZQYXRjaGVzSW5kZXhdKSB7XG4gICAgICAgICAgICByZXR1cm4geyB4OiBmb3VuZCwgeTogZm91bmQgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBvcHRpbWFsUGF0Y2hTaXplID0gZmluZFBhdGNoU2l6ZUZvckRpdmlzb3JzKF9jb21wdXRlQ29tbW9uRGl2aXNvcnMoeCwgeSkpIHx8XG4gICAgICAgIGZpbmRQYXRjaFNpemVGb3JEaXZpc29ycyhfY29tcHV0ZURpdmlzb3JzKHdpZGVTaWRlKSkgfHxcbiAgICAgICAgZmluZFBhdGNoU2l6ZUZvckRpdmlzb3JzKF9jb21wdXRlRGl2aXNvcnMoZGVzaXJlZFBhdGNoU2l6ZSAqIG5yT2ZQYXRjaGVzKSk7XG5cbiAgICByZXR1cm4gb3B0aW1hbFBhdGNoU2l6ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrSW1hZ2VDb25zdHJhaW50cyhpbnB1dFN0cmVhbTogSW5wdXRTdHJlYW0sIGNvbmZpZzogQmFyY29kZUxvY2F0b3JDb25maWcpIHtcbiAgICBsZXQgd2lkdGggPSBpbnB1dFN0cmVhbS53aWR0aDtcbiAgICBsZXQgaGVpZ2h0ID0gaW5wdXRTdHJlYW0uaGVpZ2h0O1xuICAgIGNvbnN0IHNoaWZ0ID0gY29uZmlnLmhhbGZTYW1wbGUgPyAxIDogMCB8IDA7XG5cbiAgICAvLyBjYWxjdWxhdGUgd2lkdGggYW5kIGhlaWdodCBiYXNlZCBvbiBhcmVhXG4gICAgaWYgKGlucHV0U3RyZWFtLmNvbmZpZy5hcmVhKSB7XG4gICAgICAgIGNvbnN0IGFyZWEgPSBjb21wdXRlSW1hZ2VBcmVhKHdpZHRoLCBoZWlnaHQsIGlucHV0U3RyZWFtLmNvbmZpZy5hcmVhKTtcbiAgICAgICAgaW5wdXRTdHJlYW0udG9wTGVmdCA9IGFyZWEudG9wTGVmdDtcbiAgICAgICAgaW5wdXRTdHJlYW0uc2V0Q2FudmFzU2l6ZSh3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgd2lkdGggPSBhcmVhLndpZHRoO1xuICAgICAgICBoZWlnaHQgPSBhcmVhLmhlaWdodDtcbiAgICB9XG5cbiAgICBjb25zdCBzaXplID0ge1xuICAgICAgICB4OiB3aWR0aCA+PiBzaGlmdCxcbiAgICAgICAgeTogaGVpZ2h0ID4+IHNoaWZ0XG4gICAgfTtcblxuICAgIGNvbnN0IHBhdGNoU2l6ZSA9IGNhbGN1bGF0ZVBhdGNoU2l6ZShjb25maWcucGF0Y2hTaXplLCBzaXplKTtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zb2xlLmxvZygnUGF0Y2gtU2l6ZTonLCBKU09OLnN0cmluZ2lmeShwYXRjaFNpemUpKTtcbiAgICB9XG5cbiAgICBpbnB1dFN0cmVhbS53aWR0aCA9IChzaXplLnggLyBwYXRjaFNpemUueCA8PCBzaGlmdCkgKiBwYXRjaFNpemUueCB8IDA7XG4gICAgaW5wdXRTdHJlYW0uaGVpZ2h0ID0gKHNpemUueSAvIHBhdGNoU2l6ZS55IDw8IHNoaWZ0KSAqIHBhdGNoU2l6ZS55IHwgMDtcblxuICAgIGlmICgoaW5wdXRTdHJlYW0ud2lkdGggJSBwYXRjaFNpemUueCkgPT09IDAgJiYgKGlucHV0U3RyZWFtLmhlaWdodCAlIHBhdGNoU2l6ZS55KSA9PT0gMCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxuICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2UgZGltZW5zaW9ucyBkbyBub3QgY29tcGx5IHdpdGggdGhlIGN1cnJlbnQgc2V0dGluZ3M6IHdpZHRoICgke3dpZHRofSkgYW5kIGhlaWdodCAoJHtoZWlnaHR9KSBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgJHtwYXRjaFNpemUueH1gKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9wYXJzZUNzc0RpbWVuc2lvblZhbHVlcyh2YWx1ZTogc3RyaW5nKTogRGltZW5zaW9uIHtcbiAgICBjb25zdCBkaW1lbnNpb246IERpbWVuc2lvbiA9IHtcbiAgICAgICAgdmFsdWU6IHBhcnNlRmxvYXQodmFsdWUpLFxuICAgICAgICB1bml0OiB2YWx1ZS5pbmRleE9mKCclJykgPT09IHZhbHVlLmxlbmd0aCAtIDEgPyAnJScgOiB2YWx1ZS5pbmRleE9mKCdweCcpID09PSB2YWx1ZS5sZW5ndGggLSAyID8gJ3B4JyA6ICclJ1xuICAgIH07XG5cbiAgICByZXR1cm4gZGltZW5zaW9uO1xufVxuXG5leHBvcnQgY29uc3QgX2RpbWVuc2lvbnNDb252ZXJ0ZXJzID0ge1xuICAgIGJvdHRvbTogKGRpbWVuc2lvbjogRGltZW5zaW9uLCB7IGhlaWdodCB9KSA9PiBkaW1lbnNpb24udW5pdCA9PT0gJyUnID9cbiAgICAgICAgaGVpZ2h0IC0gaGVpZ2h0ICogZGltZW5zaW9uLnZhbHVlIC8gMTAwIHwgMCA6IGRpbWVuc2lvbi51bml0ID09PSAncHgnID8gaGVpZ2h0IC0gZGltZW5zaW9uLnZhbHVlIDogaGVpZ2h0LFxuICAgIGxlZnQ6IChkaW1lbnNpb246IERpbWVuc2lvbiwgeyB3aWR0aCB9KSA9PiBkaW1lbnNpb24udW5pdCA9PT0gJyUnID9cbiAgICAgICAgd2lkdGggKiBkaW1lbnNpb24udmFsdWUgLyAxMDAgfCAwIDogZGltZW5zaW9uLnVuaXQgPT09ICdweCcgPyBkaW1lbnNpb24udmFsdWUgOiAwLFxuICAgIHJpZ2h0OiAoZGltZW5zaW9uOiBEaW1lbnNpb24sIHsgd2lkdGggfSkgPT4gZGltZW5zaW9uLnVuaXQgPT09ICclJyA/XG4gICAgICAgIHdpZHRoIC0gd2lkdGggKiBkaW1lbnNpb24udmFsdWUgLyAxMDAgfCAwIDogZGltZW5zaW9uLnVuaXQgPT09ICdweCcgPyB3aWR0aCAtIGRpbWVuc2lvbi52YWx1ZSA6IHdpZHRoLFxuICAgIHRvcDogKGRpbWVuc2lvbjogRGltZW5zaW9uLCB7IGhlaWdodCB9KTogbnVtYmVyID0+IGRpbWVuc2lvbi51bml0ID09PSAnJScgP1xuICAgICAgICBoZWlnaHQgKiBkaW1lbnNpb24udmFsdWUgLyAxMDAgfCAwIDogZGltZW5zaW9uLnVuaXQgPT09ICdweCcgPyBkaW1lbnNpb24udmFsdWUgOiAwXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gY29tcHV0ZUltYWdlQXJlYShpbnB1dFdpZHRoOiBudW1iZXIsIGlucHV0SGVpZ2h0OiBudW1iZXIsIGFyZWE6IEFyZWFDb25maWcpIHtcbiAgICBjb25zdCBjb250ZXh0ID0geyB3aWR0aDogaW5wdXRXaWR0aCwgaGVpZ2h0OiBpbnB1dEhlaWdodCB9O1xuICAgIGNvbnN0IHBhcnNlZEFyZWE6IHtcbiAgICAgICAgYm90dG9tPzogbnVtYmVyO1xuICAgICAgICBsZWZ0PzogbnVtYmVyO1xuICAgICAgICByaWdodD86IG51bWJlcjtcbiAgICAgICAgdG9wPzogbnVtYmVyO1xuICAgIH0gPSBPYmplY3Qua2V5cyhhcmVhKS5yZWR1Y2UoKHJlc3VsdCwga2V5KSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gYXJlYVtrZXldO1xuICAgICAgICBjb25zdCBwYXJzZWQgPSBfcGFyc2VDc3NEaW1lbnNpb25WYWx1ZXModmFsdWUpO1xuICAgICAgICBjb25zdCBjYWxjdWxhdGVkID0gX2RpbWVuc2lvbnNDb252ZXJ0ZXJzW2tleV0ocGFyc2VkLCBjb250ZXh0KTtcblxuICAgICAgICByZXN1bHRba2V5XSA9IGNhbGN1bGF0ZWQ7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSwge30pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdG9wTGVmdDogeyB4OiBwYXJzZWRBcmVhLmxlZnQsIHk6IHBhcnNlZEFyZWEudG9wIH0sXG4gICAgICAgIHdpZHRoOiBwYXJzZWRBcmVhLnJpZ2h0IC0gcGFyc2VkQXJlYS5sZWZ0LFxuICAgICAgICBoZWlnaHQ6IHBhcnNlZEFyZWEuYm90dG9tIC0gcGFyc2VkQXJlYS50b3BcbiAgICB9O1xufVxuIiwiaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuLi9jb21tb24vcG9pbnQnO1xuaW1wb3J0IHsgSW1hZ2VJbmZvIH0gZnJvbSAnLi9pbWFnZS1sb2FkZXInO1xuaW1wb3J0IHsgSW5wdXRTdHJlYW1Db25maWcgfSBmcm9tICcuL2lucHV0LXN0cmVhbS1jb25maWcnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgSW5wdXRTdHJlYW0ge1xuICAgIHByb3RlY3RlZCBfY2FsY3VsYXRlZEhlaWdodDogbnVtYmVyO1xuICAgIHByb3RlY3RlZCBfY2FsY3VsYXRlZFdpZHRoOiBudW1iZXI7XG4gICAgcHJvdGVjdGVkIF9jYW52YXNIZWlnaHQ6IG51bWJlcjtcbiAgICBwcm90ZWN0ZWQgX2NhbnZhc1dpZHRoOiBudW1iZXI7XG4gICAgcHJvdGVjdGVkIF9jb25maWc6IElucHV0U3RyZWFtQ29uZmlnO1xuICAgIHByb3RlY3RlZCBfZXZlbnROYW1lczogQXJyYXk8c3RyaW5nPjtcbiAgICBwcm90ZWN0ZWQgX2V2ZW50SGFuZGxlcnM6IE1hcDxzdHJpbmcsIEFycmF5PEV2ZW50TGlzdGVuZXI+PjtcbiAgICBwcm90ZWN0ZWQgX3RvcExlZnQ6IFBvaW50O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX2NhbnZhc1dpZHRoID0gMDtcbiAgICAgICAgdGhpcy5fY2FudmFzSGVpZ2h0ID0gMDtcbiAgICAgICAgdGhpcy5fY29uZmlnID0gbnVsbDtcbiAgICAgICAgdGhpcy5fZXZlbnROYW1lcyA9IFsnY2FucmVjb3JkJywgJ2VuZGVkJ107XG4gICAgICAgIHRoaXMuX2V2ZW50SGFuZGxlcnMgPSBuZXcgTWFwPHN0cmluZywgQXJyYXk8RXZlbnRMaXN0ZW5lcj4+KCk7XG4gICAgICAgIHRoaXMuX3RvcExlZnQgPSB7IHg6IDAsIHk6IDAgfTtcbiAgICB9XG5cbiAgICBhYnN0cmFjdCBnZXQgcmVhbEhlaWdodCgpOiBudW1iZXI7XG5cbiAgICBhYnN0cmFjdCBnZXQgcmVhbFdpZHRoKCk6IG51bWJlcjtcblxuICAgIGdldCBoZWlnaHQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhbGN1bGF0ZWRIZWlnaHQ7XG4gICAgfVxuXG4gICAgc2V0IGhlaWdodChoZWlnaHQ6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9jYWxjdWxhdGVkSGVpZ2h0ID0gaGVpZ2h0O1xuICAgIH1cblxuICAgIGdldCB3aWR0aCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2FsY3VsYXRlZFdpZHRoO1xuICAgIH1cblxuICAgIHNldCB3aWR0aCh3aWR0aDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX2NhbGN1bGF0ZWRXaWR0aCA9IHdpZHRoO1xuICAgIH1cblxuICAgIGdldCB0b3BMZWZ0KCk6IFBvaW50IHtcbiAgICAgICAgcmV0dXJuIHsgLi4udGhpcy5fdG9wTGVmdCB9O1xuICAgIH1cblxuICAgIHNldCB0b3BMZWZ0KHRvcExlZnQ6IFBvaW50KSB7XG4gICAgICAgIHRoaXMuX3RvcExlZnQueCA9IHRvcExlZnQueDtcbiAgICAgICAgdGhpcy5fdG9wTGVmdC55ID0gdG9wTGVmdC55O1xuICAgIH1cblxuICAgIHNldENhbnZhc1NpemUod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fY2FudmFzV2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5fY2FudmFzSGVpZ2h0ID0gaGVpZ2h0O1xuICAgIH1cblxuICAgIGdldCBjYW52YXNIZWlnaHQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhbnZhc0hlaWdodDtcbiAgICB9XG5cbiAgICBnZXQgY2FudmFzV2lkdGgoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhbnZhc1dpZHRoO1xuICAgIH1cblxuICAgIGdldCBjb25maWcoKTogSW5wdXRTdHJlYW1Db25maWcge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29uZmlnO1xuICAgIH1cblxuICAgIHNldCBjb25maWcoY29uZmlnOiBJbnB1dFN0cmVhbUNvbmZpZykge1xuICAgICAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG4gICAgfVxuXG4gICAgYWJzdHJhY3QgZ2V0IGVuZGVkKCk6IGJvb2xlYW47XG5cbiAgICBhYnN0cmFjdCBzZXRBdHRyaWJ1dGUobmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZDtcblxuICAgIGFic3RyYWN0IHBhdXNlKCk6IHZvaWQ7XG5cbiAgICBhYnN0cmFjdCBwbGF5KCk6IHZvaWQ7XG5cbiAgICBhYnN0cmFjdCBzZXQgY3VycmVudFRpbWUodGltZTogbnVtYmVyKTtcblxuICAgIGFkZEV2ZW50TGlzdGVuZXIoZXZlbnQ6IHN0cmluZywgbGlzdGVuZXI6IEV2ZW50TGlzdGVuZXIsIF9vcHRpb25zPzogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5fZXZlbnROYW1lcy5pbmRleE9mKGV2ZW50KSAhPT0gLTEpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5fZXZlbnRIYW5kbGVycy5oYXMoZXZlbnQpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZXZlbnRIYW5kbGVycy5zZXQoZXZlbnQsIG5ldyBBcnJheTxFdmVudExpc3RlbmVyPigpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2V2ZW50SGFuZGxlcnMuZ2V0KGV2ZW50KS5wdXNoKGxpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsZWFyRXZlbnRIYW5kbGVycygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fZXZlbnRIYW5kbGVycy5jbGVhcigpO1xuICAgIH1cblxuICAgIHRyaWdnZXIoZXZlbnROYW1lOiBzdHJpbmcsIGFyZ0FycmF5PzogYW55KSB7XG4gICAgICAgIGNvbnN0IGhhbmRsZXJzID0gdGhpcy5fZXZlbnRIYW5kbGVycy5nZXQoZXZlbnROYW1lKTtcblxuICAgICAgICBpZiAoaGFuZGxlcnMgJiYgaGFuZGxlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBoYW5kbGVycy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGhhbmRsZXJzW2pdLmFwcGx5KHRoaXMsIGFyZ0FycmF5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFic3RyYWN0IGdldEZyYW1lKCk6IEhUTUxWaWRlb0VsZW1lbnQgfCBJbWFnZUluZm87XG59XG4iLCJpbXBvcnQgeyBWaWRlb1N0cmVhbSB9IGZyb20gJy4vdmlkZW8tc3RyZWFtJztcblxuZXhwb3J0IGNsYXNzIExpdmVTdHJlYW0gZXh0ZW5kcyBWaWRlb1N0cmVhbSB7XG4gICAgY29uc3RydWN0b3IodmlkZW86IEhUTUxWaWRlb0VsZW1lbnQpIHtcbiAgICAgICAgdmlkZW8uc2V0QXR0cmlidXRlKCdhdXRvcGxheScsICcnKTtcbiAgICAgICAgc3VwZXIodmlkZW8pO1xuICAgIH1cblxuICAgIGdldCBlbmRlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEltYWdlSW5mbyB9IGZyb20gJy4vaW1hZ2UtbG9hZGVyJztcbmltcG9ydCB7IElucHV0U3RyZWFtIH0gZnJvbSAnLi9pbnB1dC1zdHJlYW0nO1xuaW1wb3J0IHsgSW5wdXRTdHJlYW1Db25maWcgfSBmcm9tICcuL2lucHV0LXN0cmVhbS1jb25maWcnO1xuXG5leHBvcnQgY2xhc3MgVmlkZW9TdHJlYW0gZXh0ZW5kcyBJbnB1dFN0cmVhbSB7XG4gICAgcHJpdmF0ZSBfdmlkZW86IEhUTUxWaWRlb0VsZW1lbnQ7XG5cbiAgICBjb25zdHJ1Y3Rvcih2aWRlbzogSFRNTFZpZGVvRWxlbWVudCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuX3ZpZGVvID0gdmlkZW87XG4gICAgfVxuXG4gICAgZ2V0IHJlYWxIZWlnaHQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZpZGVvLnZpZGVvSGVpZ2h0O1xuICAgIH1cblxuICAgIGdldCByZWFsV2lkdGgoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZpZGVvLnZpZGVvV2lkdGg7XG4gICAgfVxuXG4gICAgc2V0IGNvbmZpZyhjb25maWc6IElucHV0U3RyZWFtQ29uZmlnKSB7XG4gICAgICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcbiAgICAgICAgdGhpcy5fdmlkZW8uc3JjID0gKHR5cGVvZiBjb25maWcuc3JjICE9PSAndW5kZWZpbmVkJykgPyBjb25maWcuc3JjIDogJyc7XG4gICAgfVxuXG4gICAgZ2V0IGVuZGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmlkZW8uZW5kZWQ7XG4gICAgfVxuXG4gICAgc2V0QXR0cmlidXRlKG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLl92aWRlby5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICAgIH1cblxuICAgIHBhdXNlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl92aWRlby5wYXVzZSgpO1xuICAgIH1cblxuICAgIHBsYXkoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3ZpZGVvLnBsYXkoKTtcbiAgICB9XG5cbiAgICBzZXQgY3VycmVudFRpbWUodGltZTogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLl9jb25maWcudHlwZSAhPT0gJ0xpdmVTdHJlYW0nKSB7XG4gICAgICAgICAgICB0aGlzLl92aWRlby5jdXJyZW50VGltZSA9IHRpbWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRFdmVudExpc3RlbmVyKGV2ZW50OiBzdHJpbmcsIGxpc3RlbmVyOiBFdmVudExpc3RlbmVyLCBvcHRpb25zPzogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICBzdXBlci5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lciwgb3B0aW9ucyk7XG5cbiAgICAgICAgaWYgKHRoaXMuX2V2ZW50TmFtZXMuaW5kZXhPZihldmVudCkgPT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLl92aWRlby5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lciwgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbGVhckV2ZW50SGFuZGxlcnMoKTogdm9pZCB7XG4gICAgICAgIC8vIFRPRE86IGNvbWUgdXAgd2l0aCBhIHdheSB0byByZW1vdmUgdmlkZW8gZXZlbnQgaGFuZGxlcnNcbiAgICAgICAgLy8gdGhpcy5fZXZlbnROYW1lcy5mb3JFYWNoKGV2ZW50TmFtZSA9PiB7XG4gICAgICAgIC8vICAgICBjb25zdCBoYW5kbGVycyA9IHRoaXMuX2V2ZW50SGFuZGxlcnMuZ2V0KGV2ZW50TmFtZSk7XG4gICAgICAgIC8vICAgICBpZiAoaGFuZGxlcnMgJiYgaGFuZGxlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAvLyAgICAgICAgIGhhbmRsZXJzLmZvckVhY2goaGFuZGxlciA9PiB0aGlzLl92aWRlby5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgaGFuZGxlcikpO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9KTtcbiAgICAgICAgc3VwZXIuY2xlYXJFdmVudEhhbmRsZXJzKCk7XG4gICAgfVxuXG4gICAgdHJpZ2dlcihldmVudE5hbWU6IHN0cmluZywgYXJnQXJyYXk/OiBhbnkpIHtcbiAgICAgICAgaWYgKGV2ZW50TmFtZSA9PT0gJ2NhbnJlY29yZCcpIHtcbiAgICAgICAgICAgIHRoaXMuX2luaXRTaXplKCk7XG4gICAgICAgIH1cblxuICAgICAgICBzdXBlci50cmlnZ2VyKGV2ZW50TmFtZSwgYXJnQXJyYXkpXG4gICAgfVxuXG4gICAgZ2V0RnJhbWUoKTogSFRNTFZpZGVvRWxlbWVudCB8IEltYWdlSW5mbyB7XG4gICAgICAgIHJldHVybiB0aGlzLl92aWRlbztcbiAgICB9XG5cbiAgICBwcml2YXRlIF9pbml0U2l6ZSgpIHtcbiAgICAgICAgY29uc3Qgd2lkdGggPSB0aGlzLl92aWRlby52aWRlb1dpZHRoO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLl92aWRlby52aWRlb0hlaWdodDtcblxuICAgICAgICB0aGlzLl9jYW52YXNXaWR0aCA9IHRoaXMuX2NhbGN1bGF0ZWRXaWR0aCA9XG4gICAgICAgICAgICB0aGlzLl9jb25maWcuc2l6ZSA/IHdpZHRoID4gaGVpZ2h0ID8gdGhpcy5fY29uZmlnLnNpemUgOiB3aWR0aCAqIHRoaXMuX2NvbmZpZy5zaXplIC8gaGVpZ2h0IHwgMCA6IHdpZHRoO1xuICAgICAgICB0aGlzLl9jYW52YXNIZWlnaHQgPSB0aGlzLl9jYWxjdWxhdGVkSGVpZ2h0ID1cbiAgICAgICAgICAgIHRoaXMuX2NvbmZpZy5zaXplID8gd2lkdGggPiBoZWlnaHQgPyBoZWlnaHQgKiB0aGlzLl9jb25maWcuc2l6ZSAvIHdpZHRoIHwgMCA6IHRoaXMuX2NvbmZpZy5zaXplIDogaGVpZ2h0O1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIExpdmVTdHJlYW0gZXh0ZW5kcyBWaWRlb1N0cmVhbSB7XG4gICAgY29uc3RydWN0b3IodmlkZW86IEhUTUxWaWRlb0VsZW1lbnQpIHtcbiAgICAgICAgdmlkZW8uc2V0QXR0cmlidXRlKCdhdXRvcGxheScsICcnKTtcbiAgICAgICAgc3VwZXIodmlkZW8pO1xuICAgIH1cblxuICAgIGdldCBlbmRlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEltYWdlV3JhcHBlciB9IGZyb20gJy4uL2NvbW1vbi9pbWFnZS13cmFwcGVyJztcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi4vY29tbW9uL3BvaW50JztcblxuLyoqXG4gKiBJbnZlcnQgbWF0cml4XG4gKiBAcGFyYW0gbWF0cml4IHRoZSBtYXRyaXggdG8gaW52ZXJ0XG4gKiBAcmV0dXJucyB0aGUgaW52ZXJ0ZWQgbWF0cml4XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbnZlcnQobWF0cml4OiBGbG9hdDMyQXJyYXkpOiBGbG9hdDMyQXJyYXkge1xuICAgIGNvbnN0IGEwID0gbWF0cml4WzBdO1xuICAgIGNvbnN0IGExID0gbWF0cml4WzFdO1xuICAgIGNvbnN0IGEyID0gbWF0cml4WzJdO1xuICAgIGNvbnN0IGEzID0gbWF0cml4WzNdO1xuICAgIGNvbnN0IGRldGVybWluYW50ID0gYTAgKiBhMyAtIGEyICogYTE7XG5cbiAgICBpZiAoIWRldGVybWluYW50KSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRmxvYXQzMkFycmF5KFthMyAvIGRldGVybWluYW50LCAtYTEgLyBkZXRlcm1pbmFudCwgLWEyIC8gZGV0ZXJtaW5hbnQsIGEwIC8gZGV0ZXJtaW5hbnRdKTtcbn1cblxuLyoqXG4gKiBUcmFuc2Zvcm1zIHRoZSB2ZWN0b3Igd2l0aCBhIG1hdHJpeFxuICogQHBhcmFtIHsgeCwgeSB9IHZlY3RvciB0byB0cmFuc2Zvcm1cbiAqIEBwYXJhbSBtYXRyaXggbWF0cml4IHRvIHRyYW5zZm9ybSB3aXRoXG4gKiBAcmV0dXJucyB0aGUgdHJhbnNmb3JtZWQgdmVjdG9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1XaXRoTWF0cml4KHsgeCwgeSB9OiBQb2ludCwgbWF0cml4OiBGbG9hdDMyQXJyYXkpOiBQb2ludCB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgeDogbWF0cml4WzBdICogeCArIG1hdHJpeFsyXSAqIHksXG4gICAgICAgIHk6IG1hdHJpeFsxXSAqIHggKyBtYXRyaXhbM10gKiB5XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gX2NvbXB1dGVIaXN0b2dyYW0oaW1hZ2VXcmFwcGVyOiBJbWFnZVdyYXBwZXIsIGJpdHNQZXJQaXhlbDogbnVtYmVyKTogSW50MzJBcnJheSB7XG4gICAgaWYgKCFiaXRzUGVyUGl4ZWwpIHtcbiAgICAgICAgYml0c1BlclBpeGVsID0gODtcbiAgICB9XG5cbiAgICBjb25zdCBpbWFnZURhdGEgPSBpbWFnZVdyYXBwZXIuZGF0YTtcbiAgICBjb25zdCBiaXRTaGlmdCA9IDggLSBiaXRzUGVyUGl4ZWw7XG4gICAgY29uc3QgYnVja2V0Q291bnQgPSAxIDw8IGJpdHNQZXJQaXhlbDtcbiAgICBjb25zdCBoaXN0b2dyYW0gPSBuZXcgSW50MzJBcnJheShidWNrZXRDb3VudCk7XG5cbiAgICBmb3IgKGxldCBpID0gaW1hZ2VEYXRhLmxlbmd0aDsgaS0tOykge1xuICAgICAgICBoaXN0b2dyYW1baW1hZ2VEYXRhW2ldID4+IGJpdFNoaWZ0XSsrO1xuICAgIH1cblxuICAgIHJldHVybiBoaXN0b2dyYW07XG59XG5cbmZ1bmN0aW9uIF9kZXRlcm1pbmVPdHN1VGhyZXNob2xkKGltYWdlV3JhcHBlcjogSW1hZ2VXcmFwcGVyLCBiaXRzUGVyUGl4ZWw/OiBudW1iZXIpOiBudW1iZXIge1xuICAgIGlmICghYml0c1BlclBpeGVsKSB7XG4gICAgICAgIGJpdHNQZXJQaXhlbCA9IDg7XG4gICAgfVxuXG4gICAgY29uc3QgYml0U2hpZnQgPSA4IC0gYml0c1BlclBpeGVsO1xuICAgIGNvbnN0IGhpc3QgPSBfY29tcHV0ZUhpc3RvZ3JhbShpbWFnZVdyYXBwZXIsIGJpdHNQZXJQaXhlbCk7XG4gICAgY29uc3QgdmV0ID0gWzBdO1xuICAgIGNvbnN0IG1heCA9ICgxIDw8IGJpdHNQZXJQaXhlbCkgLSAxO1xuXG4gICAgZnVuY3Rpb24gcHgoaW5pdDogbnVtYmVyLCBlbmQ6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIGxldCBzdW0gPSAwO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSBpbml0OyBpIDw9IGVuZDsgaSsrKSB7XG4gICAgICAgICAgICBzdW0gKz0gaGlzdFtpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdW07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbXgoaW5pdDogbnVtYmVyLCBlbmQ6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIGxldCBzdW0gPSAwO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSBpbml0OyBpIDw9IGVuZDsgaSsrKSB7XG4gICAgICAgICAgICBzdW0gKz0gaSAqIGhpc3RbaV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VtO1xuICAgIH1cblxuICAgIGZvciAobGV0IGsgPSAxOyBrIDwgbWF4OyBrKyspIHtcbiAgICAgICAgY29uc3QgcDEgPSBweCgwLCBrKTtcbiAgICAgICAgY29uc3QgcDIgPSBweChrICsgMSwgbWF4KTtcbiAgICAgICAgY29uc3QgcDEyID0gcDEgKiBwMiB8fCAxO1xuICAgICAgICBjb25zdCBtMSA9IG14KDAsIGspICogcDI7XG4gICAgICAgIGNvbnN0IG0yID0gbXgoayArIDEsIG1heCkgKiBwMTtcbiAgICAgICAgY29uc3QgbTEyID0gbTEgLSBtMjtcbiAgICAgICAgdmV0W2tdID0gbTEyICogbTEyIC8gcDEyO1xuICAgIH1cblxuICAgIC8vIGluZGV4IG9mIG1heCBlbGVtZW50XG4gICAgY29uc3QgdGhyZXNob2xkID0gdmV0LnJlZHVjZSgobWF4SW5kZXgsIGl0ZW0sIGluZGV4LCBhcnJheSkgPT4gaXRlbSA+IGFycmF5W21heEluZGV4XSA/IGluZGV4IDogbWF4SW5kZXgsIDApO1xuXG4gICAgcmV0dXJuIHRocmVzaG9sZCA8PCBiaXRTaGlmdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG90c3VUaHJlc2hvbGQoaW1hZ2VXcmFwcGVyOiBJbWFnZVdyYXBwZXIsIHRhcmdldFdyYXBwZXI6IEltYWdlV3JhcHBlcik6IG51bWJlciB7XG4gICAgY29uc3QgdGhyZXNob2xkID0gX2RldGVybWluZU90c3VUaHJlc2hvbGQoaW1hZ2VXcmFwcGVyKTtcbiAgICBjb25zdCB0YXJnZXREYXRhID0gdGFyZ2V0V3JhcHBlci5kYXRhO1xuXG4gICAgaW1hZ2VXcmFwcGVyLmRhdGEuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAgIHRhcmdldERhdGFbaW5kZXhdID0gdmFsdWUgPCB0aHJlc2hvbGQgPyAxIDogMDtcbiAgICB9KTtcblxuICAgIHJldHVybiB0aHJlc2hvbGQ7XG59XG5cbi8qKlxuICogQHBhcmFtIGltYWdlV3JhcHBlciBpbnB1dCBpbWFnZSB0byBiZSBzYW1wbGVkXG4gKiBAcGFyYW0gb3V0SW1hZ2VXcmFwcGVyIHtJbWFnZVdyYXBwZXJ9IHRvIGJlIHN0b3JlZCBpblxuICovXG5leHBvcnQgZnVuY3Rpb24gaGFsZlNhbXBsZShpbWFnZVdyYXBwZXI6IEltYWdlV3JhcHBlciwgb3V0SW1hZ2VXcmFwcGVyOiBJbWFnZVdyYXBwZXIpOiB2b2lkIHtcbiAgICBjb25zdCBpbWFnZSA9IGltYWdlV3JhcHBlci5kYXRhO1xuICAgIGNvbnN0IHdpZHRoID0gaW1hZ2VXcmFwcGVyLnNpemUueDtcbiAgICBjb25zdCBvdXRJbWFnZSA9IG91dEltYWdlV3JhcHBlci5kYXRhO1xuICAgIGNvbnN0IGVuZEluZGV4ID0gaW1hZ2UubGVuZ3RoO1xuICAgIGNvbnN0IG91dFdpZHRoID0gd2lkdGggPj4gMTtcbiAgICBsZXQgdG9wUm93SW5kZXggPSAwO1xuICAgIGxldCBib3R0b21Sb3dJbmRleCA9IHdpZHRoO1xuICAgIGxldCBvdXRJbWdJbmRleCA9IDA7XG5cbiAgICB3aGlsZSAoYm90dG9tUm93SW5kZXggPCBlbmRJbmRleCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG91dFdpZHRoOyBpKyspIHtcbiAgICAgICAgICAgIG91dEltYWdlW291dEltZ0luZGV4XSA9XG4gICAgICAgICAgICAgICAgKGltYWdlW3RvcFJvd0luZGV4XSArIGltYWdlW3RvcFJvd0luZGV4ICsgMV0gKyBpbWFnZVtib3R0b21Sb3dJbmRleF0gKyBpbWFnZVtib3R0b21Sb3dJbmRleCArIDFdKSA+PiAyO1xuICAgICAgICAgICAgb3V0SW1nSW5kZXgrKztcbiAgICAgICAgICAgIHRvcFJvd0luZGV4ICs9IDI7XG4gICAgICAgICAgICBib3R0b21Sb3dJbmRleCArPSAyO1xuICAgICAgICB9XG4gICAgICAgIHRvcFJvd0luZGV4ICs9IHdpZHRoO1xuICAgICAgICBib3R0b21Sb3dJbmRleCArPSB3aWR0aDtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBCb3ggfSBmcm9tICcuLi9jb21tb24vYm94JztcbmltcG9ydCB7IENsdXN0ZXIgfSBmcm9tICcuLi9jb21tb24vY2x1c3Rlcic7XG5pbXBvcnQgeyBIU1YsIGhzdjJyZ2IsIFJHQiB9IGZyb20gJy4uL2NvbW1vbi9oc3YycmdiJztcbmltcG9ydCB7IEltYWdlRGVidWcgfSBmcm9tICcuLi9jb21tb24vaW1hZ2UtZGVidWcnO1xuaW1wb3J0IHsgSW1hZ2VXcmFwcGVyIH0gZnJvbSAnLi4vY29tbW9uL2ltYWdlLXdyYXBwZXInO1xuaW1wb3J0IHsgTW9tZW50IH0gZnJvbSAnLi4vY29tbW9uL21vbWVudCc7XG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJy4uL2NvbW1vbi9wb2ludCc7XG5pbXBvcnQgeyBjYWxjdWxhdGVQYXRjaFNpemUgfSBmcm9tICcuLi9pbnB1dC9pbnB1dC1zdHJlYW0tdXRpbHMnO1xuaW1wb3J0IHsgQmFyY29kZUxvY2F0b3JDb25maWcgfSBmcm9tICcuL2JhcmNvZGUtbG9jYXRvci1jb25maWcnO1xuaW1wb3J0IHsgaGFsZlNhbXBsZSwgaW52ZXJ0LCBvdHN1VGhyZXNob2xkLCB0cmFuc2Zvcm1XaXRoTWF0cml4IH0gZnJvbSAnLi9iYXJjb2RlLWxvY2F0b3ItdXRpbHMnO1xuaW1wb3J0IHsgUmFzdGVyaXplciB9IGZyb20gJy4vcmFzdGVyaXplcic7XG5pbXBvcnQgc2tlbGV0b25pemVyIGZyb20gJy4vc2tlbGV0b25pemVyJztcbmltcG9ydCB7IFNlYXJjaERpcmVjdGlvbnMgfSBmcm9tICcuL3RyYWNlcic7XG5cbmludGVyZmFjZSBQYXRjaCB7XG4gICAgYm94OiBCb3g7XG4gICAgaW5kZXg6IG51bWJlcjtcbiAgICBtb21lbnRzOiBBcnJheTxNb21lbnQ+O1xuICAgIHBvczogUG9pbnQ7XG4gICAgcmFkOiBudW1iZXI7XG4gICAgeDogbnVtYmVyO1xuICAgIHk6IG51bWJlcjtcbn1cblxudHlwZSBTY2VsZXRvbml6ZXIgPSBhbnk7XG5cbmNvbnN0IE1vbWVudFNpbWlsYXJpdHlUaHJlc2hvbGQgPSAwLjk7XG5cbmV4cG9ydCBjbGFzcyBCYXJjb2RlTG9jYXRvciB7XG4gICAgcHJpdmF0ZSBfY29uZmlnOiBCYXJjb2RlTG9jYXRvckNvbmZpZztcbiAgICBwcml2YXRlIF9pbnB1dEltYWdlV3JhcHBlcjogSW1hZ2VXcmFwcGVyO1xuICAgIHByaXZhdGUgX2N1cnJlbnRJbWFnZVdyYXBwZXI6IEltYWdlV3JhcHBlcjtcbiAgICBwcml2YXRlIF9za2VsSW1hZ2VXcmFwcGVyOiBJbWFnZVdyYXBwZXI7XG4gICAgcHJpdmF0ZSBfc3ViSW1hZ2VXcmFwcGVyOiBJbWFnZVdyYXBwZXI7XG4gICAgcHJpdmF0ZSBfbGFiZWxJbWFnZVdyYXBwZXI6IEltYWdlV3JhcHBlcjxBcnJheTxudW1iZXI+PjtcbiAgICBwcml2YXRlIF9iaW5hcnlJbWFnZVdyYXBwZXI6IEltYWdlV3JhcHBlcjtcbiAgICBwcml2YXRlIF9wYXRjaEdyaWQ6IEltYWdlV3JhcHBlcjtcbiAgICBwcml2YXRlIF9wYXRjaExhYmVsR3JpZDogSW1hZ2VXcmFwcGVyPEludDMyQXJyYXk+O1xuICAgIHByaXZhdGUgX2ltYWdlVG9QYXRjaEdyaWQ6IEFycmF5PFBhdGNoPjtcbiAgICBwcml2YXRlIF9wYXRjaFNpemU6IFBvaW50O1xuICAgIHByaXZhdGUgX2JpbmFyeUNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcbiAgICBwcml2YXRlIF9udW1QYXRjaGVzOiBQb2ludDtcbiAgICBwcml2YXRlIF9za2VsZXRvbml6ZXI6IFNjZWxldG9uaXplcjtcblxuICAgIGNvbnN0cnVjdG9yKGlucHV0SW1hZ2VXcmFwcGVyOiBJbWFnZVdyYXBwZXIsIGNvbmZpZzogQmFyY29kZUxvY2F0b3JDb25maWcpIHtcbiAgICAgICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuICAgICAgICB0aGlzLl9pbnB1dEltYWdlV3JhcHBlciA9IGlucHV0SW1hZ2VXcmFwcGVyO1xuICAgICAgICB0aGlzLl9udW1QYXRjaGVzID0geyB4OiAwLCB5OiAwIH07XG5cbiAgICAgICAgdGhpcy5faW5pdEJ1ZmZlcnMoKTtcbiAgICAgICAgdGhpcy5faW5pdENhbnZhcygpO1xuICAgIH1cblxuICAgIGxvY2F0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy5oYWxmU2FtcGxlKSB7XG4gICAgICAgICAgICBoYWxmU2FtcGxlKHRoaXMuX2lucHV0SW1hZ2VXcmFwcGVyLCB0aGlzLl9jdXJyZW50SW1hZ2VXcmFwcGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2JpbmFyaXplSW1hZ2UoKTtcbiAgICAgICAgY29uc3QgcGF0Y2hlc0ZvdW5kID0gdGhpcy5fZmluZFBhdGNoZXMoKTtcbiAgICAgICAgLy8gcmV0dXJuIHVubGVzcyA1JSBvciBtb3JlIHBhdGNoZXMgYXJlIGZvdW5kXG4gICAgICAgIGlmIChwYXRjaGVzRm91bmQubGVuZ3RoIDwgdGhpcy5fbnVtUGF0Y2hlcy54ICogdGhpcy5fbnVtUGF0Y2hlcy55ICogMC4wNSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvLyByYXN0ZXJpemUgYXJlYSBieSBjb21wYXJpbmcgYW5ndWxhciBzaW1pbGFyaXR5O1xuICAgICAgICBjb25zdCBtYXhMYWJlbCA9IHRoaXMuX3Jhc3Rlcml6ZUFuZ3VsYXJTaW1pbGFyaXR5KHBhdGNoZXNGb3VuZCk7XG4gICAgICAgIGlmIChtYXhMYWJlbCA8IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc2VhcmNoIGZvciBhcmVhIHdpdGggdGhlIG1vc3QgcGF0Y2hlcyAoYmlnZ2VzdCBjb25uZWN0ZWQgYXJlYSlcbiAgICAgICAgY29uc3QgdG9wTGFiZWxzID0gdGhpcy5fZmluZEJpZ2dlc3RDb25uZWN0ZWRBcmVhcyhtYXhMYWJlbCk7XG4gICAgICAgIGlmICh0b3BMYWJlbHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGJveGVzID0gdGhpcy5fZmluZEJveGVzKHRvcExhYmVscywgbWF4TGFiZWwpO1xuICAgICAgICByZXR1cm4gYm94ZXM7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaW5pdEJ1ZmZlcnMoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLl9jb25maWcuaGFsZlNhbXBsZSkge1xuICAgICAgICAgICAgdGhpcy5fY3VycmVudEltYWdlV3JhcHBlciA9IG5ldyBJbWFnZVdyYXBwZXIoe1xuICAgICAgICAgICAgICAgIHg6IHRoaXMuX2lucHV0SW1hZ2VXcmFwcGVyLnNpemUueCAvIDIgfCAwLFxuICAgICAgICAgICAgICAgIHk6IHRoaXMuX2lucHV0SW1hZ2VXcmFwcGVyLnNpemUueSAvIDIgfCAwXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRJbWFnZVdyYXBwZXIgPSB0aGlzLl9pbnB1dEltYWdlV3JhcHBlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3BhdGNoU2l6ZSA9IGNhbGN1bGF0ZVBhdGNoU2l6ZSh0aGlzLl9jb25maWcucGF0Y2hTaXplLCB0aGlzLl9jdXJyZW50SW1hZ2VXcmFwcGVyLnNpemUpO1xuXG4gICAgICAgIHRoaXMuX251bVBhdGNoZXMueCA9IHRoaXMuX2N1cnJlbnRJbWFnZVdyYXBwZXIuc2l6ZS54IC8gdGhpcy5fcGF0Y2hTaXplLnggfCAwO1xuICAgICAgICB0aGlzLl9udW1QYXRjaGVzLnkgPSB0aGlzLl9jdXJyZW50SW1hZ2VXcmFwcGVyLnNpemUueSAvIHRoaXMuX3BhdGNoU2l6ZS55IHwgMDtcblxuICAgICAgICB0aGlzLl9iaW5hcnlJbWFnZVdyYXBwZXIgPSBuZXcgSW1hZ2VXcmFwcGVyKHRoaXMuX2N1cnJlbnRJbWFnZVdyYXBwZXIuc2l6ZSwgdW5kZWZpbmVkLCBVaW50OEFycmF5LCBmYWxzZSk7XG5cbiAgICAgICAgdGhpcy5fbGFiZWxJbWFnZVdyYXBwZXIgPSBuZXcgSW1hZ2VXcmFwcGVyKHRoaXMuX3BhdGNoU2l6ZSwgdW5kZWZpbmVkLCBBcnJheSwgdHJ1ZSk7XG5cbiAgICAgICAgY29uc3Qgc2tlbGV0b25JbWFnZURhdGEgPSBuZXcgQXJyYXlCdWZmZXIoNjQgKiAxMDI0KTtcbiAgICAgICAgdGhpcy5fc3ViSW1hZ2VXcmFwcGVyID0gbmV3IEltYWdlV3JhcHBlcih0aGlzLl9wYXRjaFNpemUsIG5ldyBVaW50OEFycmF5KHNrZWxldG9uSW1hZ2VEYXRhLCAwLCB0aGlzLl9wYXRjaFNpemUueCAqIHRoaXMuX3BhdGNoU2l6ZS55KSk7XG4gICAgICAgIHRoaXMuX3NrZWxJbWFnZVdyYXBwZXIgPSBuZXcgSW1hZ2VXcmFwcGVyKHRoaXMuX3BhdGNoU2l6ZSxcbiAgICAgICAgICAgIG5ldyBVaW50OEFycmF5KHNrZWxldG9uSW1hZ2VEYXRhLCB0aGlzLl9wYXRjaFNpemUueCAqIHRoaXMuX3BhdGNoU2l6ZS55ICogMywgdGhpcy5fcGF0Y2hTaXplLnggKiB0aGlzLl9wYXRjaFNpemUueSksXG4gICAgICAgICAgICB1bmRlZmluZWQsIHRydWUpO1xuICAgICAgICB0aGlzLl9za2VsZXRvbml6ZXIgPSBza2VsZXRvbml6ZXIoXG4gICAgICAgICAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpID8gd2luZG93IDogKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJykgPyBzZWxmIDogZ2xvYmFsLFxuICAgICAgICAgICAgeyBzaXplOiB0aGlzLl9wYXRjaFNpemUueCB9LFxuICAgICAgICAgICAgc2tlbGV0b25JbWFnZURhdGFcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBzaXplID0ge1xuICAgICAgICAgICAgeDogKHRoaXMuX2N1cnJlbnRJbWFnZVdyYXBwZXIuc2l6ZS54IC8gdGhpcy5fc3ViSW1hZ2VXcmFwcGVyLnNpemUueCkgfCAwLFxuICAgICAgICAgICAgeTogKHRoaXMuX2N1cnJlbnRJbWFnZVdyYXBwZXIuc2l6ZS55IC8gdGhpcy5fc3ViSW1hZ2VXcmFwcGVyLnNpemUueSkgfCAwXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX3BhdGNoTGFiZWxHcmlkID0gbmV3IEltYWdlV3JhcHBlcihzaXplLCB1bmRlZmluZWQsIEludDMyQXJyYXksIHRydWUpO1xuICAgICAgICB0aGlzLl9wYXRjaEdyaWQgPSBuZXcgSW1hZ2VXcmFwcGVyKHNpemUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0cnVlKTtcbiAgICAgICAgdGhpcy5faW1hZ2VUb1BhdGNoR3JpZCA9IG5ldyBBcnJheTxQYXRjaD4odGhpcy5fcGF0Y2hMYWJlbEdyaWQuZGF0YS5sZW5ndGgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2luaXRDYW52YXMoKSB7XG4gICAgICAgIGlmICh0aGlzLl9jb25maWcudXNlV29ya2VyIHx8IHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICBjYW52YXMuY2xhc3NOYW1lID0gJ2JpbmFyeUJ1ZmZlcic7XG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHRoaXMuX2JpbmFyeUltYWdlV3JhcHBlci5zaXplLng7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSB0aGlzLl9iaW5hcnlJbWFnZVdyYXBwZXIuc2l6ZS55O1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLl9jb25maWcuZGVidWcgJiYgdGhpcy5fY29uZmlnLmRlYnVnLnNob3dDYW52YXMpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZWJ1ZycpLmFwcGVuZENoaWxkKGNhbnZhcyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fYmluYXJ5Q29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBib3VuZGluZyBib3ggd2hpY2ggZW5jbG9zZXMgYWxsIHRoZSBnaXZlbiBwYXRjaGVzXG4gICAgICogQHJldHVybnMgVGhlIG1pbmltYWwgYm91bmRpbmcgYm94XG4gICAgICovXG4gICAgcHJpdmF0ZSBfYm94RnJvbVBhdGNoZXMocGF0Y2hlczogQXJyYXk8UGF0Y2g+KTogQm94IHtcbiAgICAgICAgY29uc3QgZGVidWcgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuX2NvbmZpZy5kZWJ1ZztcbiAgICAgICAgbGV0IGF2ZXJhZ2VSYWQgPSBwYXRjaGVzLnJlZHVjZSgoc3VtLCB7IHBvcywgcmFkIH0pID0+IHtcbiAgICAgICAgICAgIGlmIChkZWJ1ZyAmJiBkZWJ1Zy5zaG93UGF0Y2hlcykge1xuICAgICAgICAgICAgICAgIC8vIGRyYXcgYWxsIHBhdGNoZXMgd2hpY2ggYXJlIHRvIGJlIHRha2VuIGludG8gY29uc2lkZXJhdGlvblxuICAgICAgICAgICAgICAgIHRoaXMuX2RyYXdSZWN0KHBvcywgdGhpcy5fc3ViSW1hZ2VXcmFwcGVyLnNpemUsICdyZWQnLCAxKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHN1bSArIHJhZDtcbiAgICAgICAgfSwgMCkgLyBwYXRjaGVzLmxlbmd0aDtcblxuICAgICAgICBhdmVyYWdlUmFkID0gKGF2ZXJhZ2VSYWQgKiAxODAgLyBNYXRoLlBJICsgOTApICUgMTgwIC0gOTA7XG4gICAgICAgIGlmIChhdmVyYWdlUmFkIDwgMCkge1xuICAgICAgICAgICAgYXZlcmFnZVJhZCArPSAxODA7XG4gICAgICAgIH1cbiAgICAgICAgYXZlcmFnZVJhZCA9ICgxODAgLSBhdmVyYWdlUmFkKSAqIE1hdGguUEkgLyAxODA7XG5cbiAgICAgICAgY29uc3QgY29zID0gTWF0aC5jb3MoYXZlcmFnZVJhZCk7XG4gICAgICAgIGNvbnN0IHNpbiA9IE1hdGguc2luKGF2ZXJhZ2VSYWQpO1xuICAgICAgICBjb25zdCBtYXRyaXggPSBuZXcgRmxvYXQzMkFycmF5KFtjb3MsIHNpbiwgLXNpbiwgY29zXSk7XG4gICAgICAgIGNvbnN0IGludmVyc2VNYXRyaXggPSBpbnZlcnQobWF0cml4KTtcblxuICAgICAgICAvLyBpdGVyYXRlIG92ZXIgcGF0Y2hlcyBhbmQgcm90YXRlIGJ5IGFuZ2xlXG4gICAgICAgIHBhdGNoZXMuZm9yRWFjaCgoeyBib3ggfSkgPT4ge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA0OyBqKyspIHtcbiAgICAgICAgICAgICAgICBib3hbal0gPSB0cmFuc2Zvcm1XaXRoTWF0cml4KGJveFtqXSwgbWF0cml4KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGRlYnVnICYmIGRlYnVnLmJveEZyb21QYXRjaGVzLnNob3dUcmFuc2Zvcm1lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2RyYXdQYXRoKGJveCwgJyM5OWZmMDAnLCAyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IG1pblggPSB0aGlzLl9iaW5hcnlJbWFnZVdyYXBwZXIuc2l6ZS54O1xuICAgICAgICBsZXQgbWluWSA9IHRoaXMuX2JpbmFyeUltYWdlV3JhcHBlci5zaXplLnk7XG4gICAgICAgIGxldCBtYXhYID0gLW1pblg7XG4gICAgICAgIGxldCBtYXhZID0gLW1pblk7XG5cbiAgICAgICAgLy8gZmluZCBib3VuZGluZyBib3hcbiAgICAgICAgcGF0Y2hlcy5mb3JFYWNoKCh7IGJveCB9KSA9PiB7XG4gICAgICAgICAgICBib3guZm9yRWFjaCgoeyB4LCB5IH0pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoeCA8IG1pblgpIHtcbiAgICAgICAgICAgICAgICAgICAgbWluWCA9IHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh4ID4gbWF4WCkge1xuICAgICAgICAgICAgICAgICAgICBtYXhYID0geDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHkgPCBtaW5ZKSB7XG4gICAgICAgICAgICAgICAgICAgIG1pblkgPSB5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoeSA+IG1heFkpIHtcbiAgICAgICAgICAgICAgICAgICAgbWF4WSA9IHk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBib3g6IEJveCA9IFt7IHg6IG1pblgsIHk6IG1pblkgfSwgeyB4OiBtYXhYLCB5OiBtaW5ZIH0sIHsgeDogbWF4WCwgeTogbWF4WSB9LCB7IHg6IG1pblgsIHk6IG1heFkgfV07XG5cbiAgICAgICAgaWYgKGRlYnVnICYmIGRlYnVnLmJveEZyb21QYXRjaGVzLnNob3dUcmFuc2Zvcm1lZEJveCkge1xuICAgICAgICAgICAgdGhpcy5fZHJhd1BhdGgoYm94LCAnI2ZmMDAwMCcsIDIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcmV2ZXJzZSByb3RhdGlvblxuICAgICAgICBib3ggPSBib3gubWFwKHZlcnRleCA9PiB0cmFuc2Zvcm1XaXRoTWF0cml4KHZlcnRleCwgaW52ZXJzZU1hdHJpeCkpIGFzIEJveDtcblxuICAgICAgICBpZiAoZGVidWcgJiYgZGVidWcuYm94RnJvbVBhdGNoZXMuc2hvd0JCKSB7XG4gICAgICAgICAgICB0aGlzLl9kcmF3UGF0aChib3gsICcjZmYwMDAwJywgMik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fY29uZmlnLmhhbGZTYW1wbGUpIHtcbiAgICAgICAgICAgIC8vIHNjYWxlXG4gICAgICAgICAgICBib3ggPSBib3gubWFwKCh7IHgsIHkgfSkgPT4gKHsgeDogeCAqIDIsIHk6IHkgKj0gMiB9KSkgYXMgQm94O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGJveDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgYmluYXJ5IGltYWdlIG9mIHRoZSBjdXJyZW50IGltYWdlXG4gICAgICovXG4gICAgcHJpdmF0ZSBfYmluYXJpemVJbWFnZSgpOiB2b2lkIHtcbiAgICAgICAgb3RzdVRocmVzaG9sZCh0aGlzLl9jdXJyZW50SW1hZ2VXcmFwcGVyLCB0aGlzLl9iaW5hcnlJbWFnZVdyYXBwZXIpO1xuICAgICAgICB0aGlzLl9iaW5hcnlJbWFnZVdyYXBwZXIuemVyb0JvcmRlcigpO1xuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuX2NvbmZpZy5kZWJ1ZyAmJiB0aGlzLl9jb25maWcuZGVidWcuc2hvd0NhbnZhcykge1xuICAgICAgICAgICAgdGhpcy5fYmluYXJ5SW1hZ2VXcmFwcGVyLnNob3codGhpcy5fYmluYXJ5Q29udGV4dCwgMjU1KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEl0ZXJhdGUgb3ZlciB0aGUgZW50aXJlIGltYWdlLCBleHRyYWN0IHBhdGNoZXNcbiAgICAgKi9cbiAgICBwcml2YXRlIF9maW5kUGF0Y2hlcygpOiBBcnJheTxQYXRjaD4ge1xuICAgICAgICBjb25zdCBkZWJ1ZyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdGhpcy5fY29uZmlnLmRlYnVnO1xuICAgICAgICBsZXQgcGF0Y2hlc0ZvdW5kID0gbmV3IEFycmF5PFBhdGNoPigpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fbnVtUGF0Y2hlcy54OyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5fbnVtUGF0Y2hlcy55OyBqKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCB4ID0gdGhpcy5fc3ViSW1hZ2VXcmFwcGVyLnNpemUueCAqIGk7XG4gICAgICAgICAgICAgICAgY29uc3QgeSA9IHRoaXMuX3N1YkltYWdlV3JhcHBlci5zaXplLnkgKiBqO1xuXG4gICAgICAgICAgICAgICAgLy8gc2VwZXJhdGUgcGFydHNcbiAgICAgICAgICAgICAgICB0aGlzLl9za2VsZXRvbml6ZSh4LCB5KTtcblxuICAgICAgICAgICAgICAgIC8vIFJhc3Rlcml6ZSwgZmluZCBpbmRpdmlkdWFsIGJhcnNcbiAgICAgICAgICAgICAgICB0aGlzLl9za2VsSW1hZ2VXcmFwcGVyLnplcm9Cb3JkZXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9sYWJlbEltYWdlV3JhcHBlci5kYXRhLmZpbGwoMCk7XG4gICAgICAgICAgICAgICAgY29uc3QgcmFzdGVyaXplciA9IG5ldyBSYXN0ZXJpemVyKHRoaXMuX3NrZWxJbWFnZVdyYXBwZXIsIHRoaXMuX2xhYmVsSW1hZ2VXcmFwcGVyKTtcbiAgICAgICAgICAgICAgICBjb25zdCByYXN0ZXJSZXN1bHQgPSByYXN0ZXJpemVyLnJhc3Rlcml6ZSgwKTtcblxuICAgICAgICAgICAgICAgIGlmIChkZWJ1ZyAmJiBkZWJ1Zy5zaG93TGFiZWxzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2xhYmVsSW1hZ2VXcmFwcGVyLm92ZXJsYXkodGhpcy5fYmluYXJ5Q29udGV4dCwgMzYwIC8gcmFzdGVyUmVzdWx0LmNvdW50IHwgMCwgeCwgeSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gY2FsY3VsYXRlIG1vbWVudHMgZnJvbSB0aGUgc2tlbGV0b25pemVkIHBhdGNoXG4gICAgICAgICAgICAgICAgY29uc3QgbW9tZW50cyA9IHRoaXMuX2xhYmVsSW1hZ2VXcmFwcGVyLm1vbWVudHMocmFzdGVyUmVzdWx0LmNvdW50KTtcblxuICAgICAgICAgICAgICAgIC8vIGV4dHJhY3QgZWxpZ2libGUgcGF0Y2hlc1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhdGNoID0gdGhpcy5fZGVzY3JpYmVQYXRjaChtb21lbnRzLCBqICogdGhpcy5fbnVtUGF0Y2hlcy54ICsgaSwgeCwgeSk7XG4gICAgICAgICAgICAgICAgaWYgKHBhdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGNoZXNGb3VuZC5wdXNoKHBhdGNoKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoZGVidWcgJiYgZGVidWcuc2hvd0ZvdW5kUGF0Y2hlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZHJhd1JlY3QocGF0Y2gucG9zLCB0aGlzLl9zdWJJbWFnZVdyYXBwZXIuc2l6ZSwgJyM5OWZmMDAnLCAyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYXRjaGVzRm91bmQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmluZHMgdGhvc2UgY29ubmVjdGVkIGFyZWFzIHdoaWNoIGNvbnRhaW4gYXQgbGVhc3QgNiBwYXRjaGVzXG4gICAgICogYW5kIHJldHVybnMgdGhlbSBvcmRlcmVkIERFU0MgYnkgdGhlIG51bWJlciBvZiBjb250YWluZWQgcGF0Y2hlc1xuICAgICAqIEBwYXJhbSBtYXhMYWJlbFxuICAgICAqL1xuICAgIHByaXZhdGUgX2ZpbmRCaWdnZXN0Q29ubmVjdGVkQXJlYXMobWF4TGFiZWw6IG51bWJlcik6IEFycmF5PG51bWJlcj4ge1xuICAgICAgICBsZXQgbGFiZWxIaXN0ID0gbmV3IEFycmF5PG51bWJlcj4obWF4TGFiZWwpLmZpbGwoMCk7XG5cbiAgICAgICAgdGhpcy5fcGF0Y2hMYWJlbEdyaWQuZGF0YS5mb3JFYWNoKChkYXRhOiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIGlmIChkYXRhID4gMCkge1xuICAgICAgICAgICAgICAgIGxhYmVsSGlzdFtkYXRhIC0gMV0rKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gZXh0cmFjdCB0b3AgYXJlYXMgd2l0aCBhdCBsZWFzdCA2IHBhdGNoZXMgcHJlc2VudFxuICAgICAgICBjb25zdCB0b3BMYWJlbHMgPSBsYWJlbEhpc3QubWFwKCh2YWx1ZSwgaW5kZXgpID0+ICh7IHZhbHVlLCBpbmRleCB9KSlcbiAgICAgICAgICAgIC5maWx0ZXIoKHsgdmFsdWUgfSkgPT4gdmFsdWUgPj0gNSkuc29ydCgoYSwgYikgPT4gYi52YWx1ZSAtIGEudmFsdWUpLm1hcCgoeyBpbmRleCB9KSA9PiBpbmRleCArIDEpO1xuXG4gICAgICAgIHJldHVybiB0b3BMYWJlbHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBwcml2YXRlIF9maW5kQm94ZXModG9wTGFiZWxzOiBBcnJheTxudW1iZXI+LCBtYXhMYWJlbDogbnVtYmVyKTogQXJyYXk8Qm94PiB7XG4gICAgICAgIGNvbnN0IGJveGVzID0gbmV3IEFycmF5PEJveD4oKTtcbiAgICAgICAgY29uc3Qgc2hvd1JlbWFpbmluZ1BhdGNoTGFiZWxzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJlxuICAgICAgICAgICAgdGhpcy5fY29uZmlnLmRlYnVnICYmIHRoaXMuX2NvbmZpZy5kZWJ1Zy5zaG93UmVtYWluaW5nUGF0Y2hMYWJlbHM7XG5cbiAgICAgICAgdG9wTGFiZWxzLmZvckVhY2gobGFiZWwgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGF0Y2hlcyA9IG5ldyBBcnJheTxQYXRjaD4oKTtcblxuICAgICAgICAgICAgdGhpcy5fcGF0Y2hMYWJlbEdyaWQuZGF0YS5mb3JFYWNoKChkYXRhOiBudW1iZXIsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YSA9PT0gbGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0Y2hlcy5wdXNoKHRoaXMuX2ltYWdlVG9QYXRjaEdyaWRbaW5kZXhdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc3QgYm94ID0gdGhpcy5fYm94RnJvbVBhdGNoZXMocGF0Y2hlcyk7XG5cbiAgICAgICAgICAgIGlmIChib3gpIHtcbiAgICAgICAgICAgICAgICBib3hlcy5wdXNoKGJveCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoc2hvd1JlbWFpbmluZ1BhdGNoTGFiZWxzKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGRyYXcgcGF0Y2gtbGFiZWxzIGlmIHJlcXVlc3RlZFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBoc3Y6IEhTViA9IFsobGFiZWwgLyAobWF4TGFiZWwgKyAxKSkgKiAzNjAsIDEsIDFdO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZ2I6IFJHQiA9IFswLCAwLCAwXTtcbiAgICAgICAgICAgICAgICAgICAgaHN2MnJnYihoc3YsIHJnYik7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29sb3IgPSBgcmdiKCR7cmdiLmpvaW4oJywnKX0pYDtcblxuICAgICAgICAgICAgICAgICAgICBwYXRjaGVzLmZvckVhY2goKHsgcG9zIH0pID0+IHRoaXMuX2RyYXdSZWN0KHBvcywgdGhpcy5fc3ViSW1hZ2VXcmFwcGVyLnNpemUsIGNvbG9yLCAyKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gYm94ZXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmluZCBzaW1pbGFyIG1vbWVudHMgKHZpYSBjbHVzdGVyKVxuICAgICAqIEBwYXJhbSBtb21lbnRzXG4gICAgICovXG4gICAgcHJpdmF0ZSBfc2ltaWxhck1vbWVudHMobW9tZW50czogQXJyYXk8TW9tZW50Pik6IEFycmF5PE1vbWVudD4ge1xuICAgICAgICBjb25zdCBjbHVzdGVycyA9IENsdXN0ZXIuY2x1c3Rlcml6ZShtb21lbnRzLCBNb21lbnRTaW1pbGFyaXR5VGhyZXNob2xkKTtcbiAgICAgICAgY29uc3QgdG9wQ2x1c3RlciA9IGNsdXN0ZXJzLnJlZHVjZSgodG9wLCBpdGVtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb3VudCA9IGl0ZW0ubW9tZW50cy5sZW5ndGg7XG4gICAgICAgICAgICByZXR1cm4gY291bnQgPiB0b3AuY291bnQgPyB7IGl0ZW0sIGNvdW50IH0gOiB0b3A7XG4gICAgICAgIH0sIHsgaXRlbTogeyBtb21lbnRzOiBbXSB9LCBjb3VudDogMCB9KTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdG9wQ2x1c3Rlci5pdGVtLm1vbWVudHM7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9za2VsZXRvbml6ZSh4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLl9iaW5hcnlJbWFnZVdyYXBwZXIuc3ViSW1hZ2VBc0NvcHkodGhpcy5fc3ViSW1hZ2VXcmFwcGVyLCB4LCB5KTtcbiAgICAgICAgdGhpcy5fc2tlbGV0b25pemVyLnNrZWxldG9uaXplKCk7XG5cbiAgICAgICAgLy8gU2hvdyBza2VsZXRvbiBpZiByZXF1ZXN0ZWRcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdGhpcy5fY29uZmlnLmRlYnVnICYmIHRoaXMuX2NvbmZpZy5kZWJ1Zy5zaG93U2tlbGV0b24pIHtcbiAgICAgICAgICAgIHRoaXMuX3NrZWxJbWFnZVdyYXBwZXIub3ZlcmxheSh0aGlzLl9iaW5hcnlDb250ZXh0LCAzNjAsIHgsIHkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXh0cmFjdHMgYW5kIGRlc2NyaWJlcyB0aG9zZSBwYXRjaGVzIHdoaWNoIHNlZW0gdG8gY29udGFpbiBhIGJhcmNvZGUgcGF0dGVyblxuICAgICAqIEBwYXJhbSBtb21lbnRzXG4gICAgICogQHBhcmFtIGluZGV4XG4gICAgICogQHBhcmFtIHhcbiAgICAgKiBAcGFyYW0geVxuICAgICAqIEByZXR1cm5zIGxpc3Qgb2YgcGF0Y2hlc1xuICAgICAqL1xuICAgIHByaXZhdGUgX2Rlc2NyaWJlUGF0Y2gobW9tZW50czogQXJyYXk8TW9tZW50PiwgaW5kZXg6IG51bWJlciwgeDogbnVtYmVyLCB5OiBudW1iZXIpOiBQYXRjaCB7XG4gICAgICAgIGlmIChtb21lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IG1pbkNvbXBvbmVudFdlaWdodCA9IE1hdGguY2VpbCh0aGlzLl9wYXRjaFNpemUueCAvIDMpO1xuICAgICAgICAgICAgLy8gb25seSBjb2xsZWN0IG1vbWVudHMgd2hpY2ggYXJlYSBjb3ZlcnMgYXQgbGVhc3QgbWluQ29tcG9uZW50V2VpZ2h0IHBpeGVsc1xuICAgICAgICAgICAgY29uc3QgZWxpZ2libGVNb21lbnRzID0gbW9tZW50cy5maWx0ZXIobW9tZW50ID0+IG1vbWVudC5tMDAgPiBtaW5Db21wb25lbnRXZWlnaHQpO1xuXG4gICAgICAgICAgICAvLyBpZiBhdCBsZWFzdCAyIG1vbWVudHMgYXJlIGZvdW5kIHdoaWNoIGhhdmUgYXQgbGVhc3QgbWluQ29tcG9uZW50V2VpZ2h0cyBjb3ZlcmVkXG4gICAgICAgICAgICBpZiAoZWxpZ2libGVNb21lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtYXRjaGluZ01vbWVudHMgPSB0aGlzLl9zaW1pbGFyTW9tZW50cyhlbGlnaWJsZU1vbWVudHMpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxlbmd0aCA9IG1hdGNoaW5nTW9tZW50cy5sZW5ndGggfCAwO1xuXG4gICAgICAgICAgICAgICAgLy8gT25seSB0d28gb2YgdGhlIG1vbWVudHMgYXJlIGFsbG93ZWQgbm90IHRvIGZpdCBpbnRvIHRoZSBlcXVhdGlvblxuICAgICAgICAgICAgICAgIGlmIChsZW5ndGggPiAxICYmIChsZW5ndGggPDwgMikgPj0gZWxpZ2libGVNb21lbnRzLmxlbmd0aCAqIDMgJiYgKGxlbmd0aCA8PCAyKSA+IG1vbWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGRldGVybWluZSB0aGUgc2ltaWxhcml0eSBvZiB0aGUgbW9tZW50c1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByYWQgPSBtYXRjaGluZ01vbWVudHMucmVkdWNlKChzdW06IG51bWJlciwgbW9tZW50OiBNb21lbnQpID0+IHN1bSArIG1vbWVudC5yYWQsIDApIC8gbGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvczogeyB4LCB5IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBib3g6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHgsIHkgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHg6IHggKyB0aGlzLl9zdWJJbWFnZVdyYXBwZXIuc2l6ZS54LCB5IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB4OiB4ICsgdGhpcy5fc3ViSW1hZ2VXcmFwcGVyLnNpemUueCwgeTogeSArIHRoaXMuX3N1YkltYWdlV3JhcHBlci5zaXplLnkgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHgsIHk6IHkgKyB0aGlzLl9zdWJJbWFnZVdyYXBwZXIuc2l6ZS55IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtb21lbnRzOiBtYXRjaGluZ01vbWVudHMsXG4gICAgICAgICAgICAgICAgICAgICAgICByYWQsXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBNYXRoLmNvcyhyYWQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgeTogTWF0aC5zaW4ocmFkKVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHByaXZhdGUgX25vdFlldFByb2Nlc3NlZCgpOiBudW1iZXIge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX3BhdGNoTGFiZWxHcmlkLmRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9wYXRjaExhYmVsR3JpZC5kYXRhW2ldID09PSAwICYmIHRoaXMuX3BhdGNoR3JpZC5kYXRhW2ldID09PSAxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhdGNoTGFiZWxHcmlkLmRhdGEubGVuZ3RoO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3RyYWNlKGN1cnJlbnRJbmRleDogbnVtYmVyLCBsYWJlbDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHRocmVzaG9sZCA9IDAuOTU7XG4gICAgICAgIGNvbnN0IGN1cnJlbnQ6IFBvaW50ID0ge1xuICAgICAgICAgICAgeDogY3VycmVudEluZGV4ICUgdGhpcy5fcGF0Y2hMYWJlbEdyaWQuc2l6ZS54LFxuICAgICAgICAgICAgeTogKGN1cnJlbnRJbmRleCAvIHRoaXMuX3BhdGNoTGFiZWxHcmlkLnNpemUueCkgfCAwXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGN1cnJlbnRJbmRleCA8IHRoaXMuX3BhdGNoTGFiZWxHcmlkLmRhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50UGF0Y2ggPSB0aGlzLl9pbWFnZVRvUGF0Y2hHcmlkW2N1cnJlbnRJbmRleF07XG4gICAgICAgICAgICAvLyBhc3NpZ24gbGFiZWxcbiAgICAgICAgICAgIHRoaXMuX3BhdGNoTGFiZWxHcmlkLmRhdGFbY3VycmVudEluZGV4XSA9IGxhYmVsO1xuXG4gICAgICAgICAgICBTZWFyY2hEaXJlY3Rpb25zLmZvckVhY2goZGlyZWN0aW9uID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB5ID0gY3VycmVudC55ICsgZGlyZWN0aW9uWzBdO1xuICAgICAgICAgICAgICAgIGNvbnN0IHggPSBjdXJyZW50LnggKyBkaXJlY3Rpb25bMV07XG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSB5ICogdGhpcy5fcGF0Y2hMYWJlbEdyaWQuc2l6ZS54ICsgeDtcblxuICAgICAgICAgICAgICAgIC8vIGNvbnRpbnVlIGlmIHBhdGNoIGVtcHR5XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3BhdGNoR3JpZC5kYXRhW2luZGV4XSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wYXRjaExhYmVsR3JpZC5kYXRhW2luZGV4XSA9IE51bWJlci5NQVhfVkFMVUU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9wYXRjaExhYmVsR3JpZC5kYXRhW2luZGV4XSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXRjaCA9IHRoaXMuX2ltYWdlVG9QYXRjaEdyaWRbaW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzaW1pbGFyaXR5ID0gTWF0aC5hYnMocGF0Y2gueCAqIGN1cnJlbnRQYXRjaC54ICsgcGF0Y2gueSAqIGN1cnJlbnRQYXRjaC55KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNpbWlsYXJpdHkgPiB0aHJlc2hvbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3RyYWNlKGluZGV4LCBsYWJlbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZpbmRzIHBhdGNoZXMgd2hpY2ggYXJlIGNvbm5lY3RlZCBhbmQgc2hhcmUgdGhlIHNhbWUgb3JpZW50YXRpb25cbiAgICAgKiBAcGFyYW0gcGF0Y2hlc0ZvdW5kXG4gICAgICovXG4gICAgcHJpdmF0ZSBfcmFzdGVyaXplQW5ndWxhclNpbWlsYXJpdHkocGF0Y2hlc0ZvdW5kOiBBcnJheTxQYXRjaD4pOiBudW1iZXIge1xuICAgICAgICBsZXQgbGFiZWwgPSAwO1xuICAgICAgICBjb25zdCBoc3Y6IEhTViA9IFswLCAxLCAxXTtcbiAgICAgICAgY29uc3QgcmdiOiBSR0IgPSBbMCwgMCwgMF07XG5cbiAgICAgICAgLy8gcHJlcGFyZSBmb3IgZmluZGluZyB0aGUgcmlnaHQgcGF0Y2hlc1xuICAgICAgICB0aGlzLl9wYXRjaEdyaWQuZGF0YS5maWxsKDApO1xuICAgICAgICB0aGlzLl9wYXRjaExhYmVsR3JpZC5kYXRhLmZpbGwoMCk7XG4gICAgICAgIHRoaXMuX2ltYWdlVG9QYXRjaEdyaWQuZmlsbChudWxsKTtcblxuICAgICAgICBwYXRjaGVzRm91bmQuZm9yRWFjaChwYXRjaCA9PiB7XG4gICAgICAgICAgICB0aGlzLl9pbWFnZVRvUGF0Y2hHcmlkW3BhdGNoLmluZGV4XSA9IHBhdGNoO1xuICAgICAgICAgICAgdGhpcy5fcGF0Y2hHcmlkLmRhdGFbcGF0Y2guaW5kZXhdID0gMTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gcmFzdGVyaXplIHRoZSBwYXRjaGVzIGZvdW5kIHRvIGRldGVybWluZSBhcmVhXG4gICAgICAgIHRoaXMuX3BhdGNoR3JpZC56ZXJvQm9yZGVyKCk7XG5cbiAgICAgICAgbGV0IGN1cnJlbnRJbmRleCA9IDA7XG4gICAgICAgIHdoaWxlICgoY3VycmVudEluZGV4ID0gdGhpcy5fbm90WWV0UHJvY2Vzc2VkKCkpIDwgdGhpcy5fcGF0Y2hMYWJlbEdyaWQuZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGxhYmVsKys7XG4gICAgICAgICAgICB0aGlzLl90cmFjZShjdXJyZW50SW5kZXgsIGxhYmVsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGRyYXcgcGF0Y2gtbGFiZWxzIGlmIHJlcXVlc3RlZFxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLl9jb25maWcuZGVidWcgJiYgdGhpcy5fY29uZmlnLmRlYnVnLnNob3dQYXRjaExhYmVscykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLl9wYXRjaExhYmVsR3JpZC5kYXRhLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3BhdGNoTGFiZWxHcmlkLmRhdGFbal0gPiAwICYmIHRoaXMuX3BhdGNoTGFiZWxHcmlkLmRhdGFbal0gPD0gbGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGF0Y2ggPSB0aGlzLl9pbWFnZVRvUGF0Y2hHcmlkW2pdO1xuICAgICAgICAgICAgICAgICAgICBoc3ZbMF0gPSAodGhpcy5fcGF0Y2hMYWJlbEdyaWQuZGF0YVtqXSAvIChsYWJlbCArIDEpKSAqIDM2MDtcbiAgICAgICAgICAgICAgICAgICAgaHN2MnJnYihoc3YsIHJnYik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2RyYXdSZWN0KHBhdGNoLnBvcywgdGhpcy5fc3ViSW1hZ2VXcmFwcGVyLnNpemUsIGByZ2IoJHtyZ2Iuam9pbignLCcpfSlgLCAyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbGFiZWw7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZHJhd1JlY3QoeyB4LCB5IH06IFBvaW50LCBzaXplOiBQb2ludCwgY29sb3I6IHN0cmluZywgbGluZVdpZHRoOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fYmluYXJ5Q29udGV4dC5zdHJva2VTdHlsZSA9IGNvbG9yO1xuICAgICAgICB0aGlzLl9iaW5hcnlDb250ZXh0LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgICAgICB0aGlzLl9iaW5hcnlDb250ZXh0LmxpbmVXaWR0aCA9IGxpbmVXaWR0aCB8fCAxO1xuICAgICAgICB0aGlzLl9iaW5hcnlDb250ZXh0LnN0cm9rZVJlY3QoeCwgeSwgc2l6ZS54LCBzaXplLnkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2RyYXdQYXRoKHBhdGg6IEFycmF5PFBvaW50PiwgY29sb3I6IHN0cmluZywgbGluZVdpZHRoOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgSW1hZ2VEZWJ1Zy5kcmF3UGF0aChwYXRoLCB0aGlzLl9iaW5hcnlDb250ZXh0LCBjb2xvciwgbGluZVdpZHRoKTtcbiAgICB9XG59XG4iLCIvKipcbiAqIEBib3Jyb3dzIGh0dHA6Ly93d3cuY29kZXByb2plY3QuY29tL1RpcHMvNDA3MTcyL0Nvbm5lY3RlZC1Db21wb25lbnQtTGFiZWxpbmctYW5kLVZlY3Rvcml6YXRpb25cbiAqL1xuXG5pbXBvcnQgeyBJbWFnZVdyYXBwZXIgfSBmcm9tICcuLi9jb21tb24vaW1hZ2Utd3JhcHBlcic7XG5pbXBvcnQgeyBDb250b3VyVmVydGV4LCBUcmFjZXIgfSBmcm9tICcuL3RyYWNlcic7XG5cbmVudW0gRWRnZUxhYmVsIHtcbiAgICBPdXRzaWRlID0gLTMyNzY3LFxuICAgIEluc2lkZSA9IC0zMjc2NlxufTtcblxuZW51bSBDb250b3VyRGlyZWN0aW9uIHtcbiAgICBDVyA9IDAsXG4gICAgQ0NXID0gMSxcbiAgICBVbmtub3duID0gMlxufTtcblxuaW50ZXJmYWNlIENvbnRvdXIge1xuICAgIGRpcjogQ29udG91ckRpcmVjdGlvbjtcbiAgICBpbmRleDogbnVtYmVyO1xuICAgIGZpcnN0VmVydGV4OiBDb250b3VyVmVydGV4O1xuICAgIHByZXZpb3VzUGVlcj86IENvbnRvdXI7XG4gICAgbmV4dFBlZXI/OiBDb250b3VyO1xuICAgIGluc2lkZUNvbnRvdXJzOiBDb250b3VyO1xufVxuXG5pbnRlcmZhY2UgUmFzdGVyUmVzdWx0IHtcbiAgICBjYzogQ29udG91cjtcbiAgICBjb3VudDogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgUmFzdGVyaXplciB7XG4gICAgcHJpdmF0ZSBfd2lkdGg6IG51bWJlcjtcbiAgICBwcml2YXRlIF9oZWlnaHQ6IG51bWJlcjtcbiAgICBwcml2YXRlIF90cmFjZXI6IFRyYWNlcjtcbiAgICBwcml2YXRlIF9pbWFnZURhdGE6IFVpbnQ4QXJyYXk7XG4gICAgcHJpdmF0ZSBfbGFiZWxEYXRhOiBBcnJheTxudW1iZXI+O1xuXG4gICAgY29uc3RydWN0b3IoaW1hZ2VXcmFwcGVyOiBJbWFnZVdyYXBwZXI8VWludDhBcnJheT4sIGxhYmVsV3JhcHBlcjogSW1hZ2VXcmFwcGVyPEFycmF5PG51bWJlcj4+KSB7XG4gICAgICAgIHRoaXMuX2ltYWdlRGF0YSA9IGltYWdlV3JhcHBlci5kYXRhO1xuICAgICAgICB0aGlzLl9sYWJlbERhdGEgPSBsYWJlbFdyYXBwZXIuZGF0YSBhcyBBcnJheTxudW1iZXI+O1xuICAgICAgICB0aGlzLl93aWR0aCA9IGltYWdlV3JhcHBlci5zaXplLng7XG4gICAgICAgIHRoaXMuX2hlaWdodCA9IGltYWdlV3JhcHBlci5zaXplLnk7XG4gICAgICAgIHRoaXMuX3RyYWNlciA9IG5ldyBUcmFjZXIoaW1hZ2VXcmFwcGVyLCBsYWJlbFdyYXBwZXIpO1xuICAgIH1cblxuICAgIHJhc3Rlcml6ZShkZXB0aExhYmVsOiBudW1iZXIpOiBSYXN0ZXJSZXN1bHQge1xuICAgICAgICBjb25zdCBjb2xvck1hcCA9IG5ldyBBcnJheTxudW1iZXI+KCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0MDA7IGkrKykge1xuICAgICAgICAgICAgY29sb3JNYXBbaV0gPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgY29sb3JNYXBbMF0gPSB0aGlzLl9pbWFnZURhdGFbMF07XG5cbiAgICAgICAgbGV0IGNjOiBDb250b3VyID0gbnVsbDtcbiAgICAgICAgbGV0IHNjOiBDb250b3VyO1xuICAgICAgICBsZXQgY29ubmVjdGVkQ291bnQgPSAwO1xuXG4gICAgICAgIGZvciAobGV0IGN5ID0gMTsgY3kgPCB0aGlzLl9oZWlnaHQgLSAxOyBjeSsrKSB7XG4gICAgICAgICAgICBsZXQgbGFiZWxJbmRleCA9IDA7XG4gICAgICAgICAgICBsZXQgYmMgPSBjb2xvck1hcFswXTtcblxuICAgICAgICAgICAgZm9yIChsZXQgY3ggPSAxOyBjeCA8IHRoaXMuX3dpZHRoIC0gMTsgY3grKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBvcyA9IGN5ICogdGhpcy5fd2lkdGggKyBjeDtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9sYWJlbERhdGFbcG9zXSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb2xvciA9IHRoaXMuX2ltYWdlRGF0YVtwb3NdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29sb3IgIT09IGJjKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFiZWxJbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxjID0gY29ubmVjdGVkQ291bnQgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yTWFwW2xjXSA9IGNvbG9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJjID0gY29sb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmVydGV4ID0gdGhpcy5fdHJhY2VyLmNvbnRvdXJUcmFjaW5nKGN5LCBjeCwgbGMsIGNvbG9yLCBFZGdlTGFiZWwuT3V0c2lkZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZlcnRleCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25uZWN0ZWRDb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbEluZGV4ID0gbGM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHA6IENvbnRvdXIgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXI6IENvbnRvdXJEaXJlY3Rpb24uQ1csXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleDogbGFiZWxJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0VmVydGV4OiB2ZXJ0ZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0UGVlcjogY2MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNpZGVDb250b3VyczogbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2MgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnByZXZpb3VzUGVlciA9IHA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MgPSBwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmVydGV4ID0gdGhpcy5fdHJhY2VyLmNvbnRvdXJUcmFjaW5nKGN5LCBjeCwgRWRnZUxhYmVsLkluc2lkZSwgY29sb3IsIGxhYmVsSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2ZXJ0ZXggIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcDogQ29udG91ciA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcjogZGVwdGhMYWJlbCA9PT0gMCA/IENvbnRvdXJEaXJlY3Rpb24uQ0NXIDogQ29udG91ckRpcmVjdGlvbi5DVyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0VmVydGV4OiB2ZXJ0ZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleDogZGVwdGhMYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc2lkZUNvbnRvdXJzOiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjID0gY2M7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlICgoc2MgIT09IG51bGwpICYmIHNjLmluZGV4ICE9PSBsYWJlbEluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYyA9IHNjLm5leHRQZWVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzYyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcC5uZXh0UGVlciA9IHNjLmluc2lkZUNvbnRvdXJzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNjLmluc2lkZUNvbnRvdXJzICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2MuaW5zaWRlQ29udG91cnMucHJldmlvdXNQZWVyID0gcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjLmluc2lkZUNvbnRvdXJzID0gcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2xhYmVsRGF0YVtwb3NdID0gbGFiZWxJbmRleDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5fbGFiZWxEYXRhW3Bvc10gPT09IEVkZ2VMYWJlbC5JbnNpZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxJbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGJjID0gdGhpcy5faW1hZ2VEYXRhW3Bvc107XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9sYWJlbERhdGFbcG9zXSA9PT0gRWRnZUxhYmVsLk91dHNpZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxJbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGJjID0gY29sb3JNYXBbMF07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxJbmRleCA9IHRoaXMuX2xhYmVsRGF0YVtwb3NdO1xuICAgICAgICAgICAgICAgICAgICBiYyA9IGNvbG9yTWFwW2xhYmVsSW5kZXhdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHNjID0gY2M7XG4gICAgICAgIHdoaWxlIChzYyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgc2MuaW5kZXggPSBkZXB0aExhYmVsO1xuICAgICAgICAgICAgc2MgPSBzYy5uZXh0UGVlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjYyxcbiAgICAgICAgICAgIGNvdW50OiBjb25uZWN0ZWRDb3VudFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGRyYXdDb250b3VyKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIGZpcnN0Q29udG91cjogQ29udG91cik6IHZvaWQge1xuICAgICAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSAncmVkJztcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZWQnO1xuICAgICAgICBjdHgubGluZVdpZHRoID0gMTtcblxuICAgICAgICBsZXQgcHEgPSBmaXJzdENvbnRvdXI7XG4gICAgICAgIGxldCBpcSA9IHBxICYmIHBxLmluc2lkZUNvbnRvdXJzO1xuXG4gICAgICAgIHdoaWxlIChwcSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgbGV0IHEgPSBpcSB8fCBwcTtcblxuICAgICAgICAgICAgaWYgKGlxICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaXEgPSBpcS5uZXh0UGVlcjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcHEgPSBwcS5uZXh0UGVlcjtcbiAgICAgICAgICAgICAgICBpcSA9IHBxICYmIHBxLmluc2lkZUNvbnRvdXJzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzd2l0Y2ggKHEuZGlyKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBDb250b3VyRGlyZWN0aW9uLkNXOiB7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICdyZWQnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBDb250b3VyRGlyZWN0aW9uLkNDVzoge1xuICAgICAgICAgICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSAnYmx1ZSc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIENvbnRvdXJEaXJlY3Rpb24uVW5rbm93bjoge1xuICAgICAgICAgICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSAnZ3JlZW4nO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBwID0gcS5maXJzdFZlcnRleDtcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8ocC54LCBwLnkpO1xuXG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgcCA9IHAubmV4dDtcbiAgICAgICAgICAgICAgICBjdHgubGluZVRvKHAueCwgcC55KTtcbiAgICAgICAgICAgIH0gd2hpbGUgKHAgIT09IHEuZmlyc3RWZXJ0ZXgpO1xuXG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBlcWVxZXEgKi9cbmZ1bmN0aW9uIFNrZWxldG9uaXplcihzdGRsaWIsIGZvcmVpZ24sIGJ1ZmZlcikge1xuICAgIFwidXNlIGFzbVwiO1xuXG4gICAgdmFyIGltYWdlcyA9IG5ldyBzdGRsaWIuVWludDhBcnJheShidWZmZXIpLFxuICAgICAgICBzaXplID0gZm9yZWlnbi5zaXplIHwgMCxcbiAgICAgICAgaW11bCA9IHN0ZGxpYi5NYXRoLmltdWw7XG5cbiAgICBmdW5jdGlvbiBlcm9kZShpbkltYWdlUHRyLCBvdXRJbWFnZVB0cikge1xuICAgICAgICBpbkltYWdlUHRyID0gaW5JbWFnZVB0ciB8IDA7XG4gICAgICAgIG91dEltYWdlUHRyID0gb3V0SW1hZ2VQdHIgfCAwO1xuXG4gICAgICAgIHZhciB2ID0gMCxcbiAgICAgICAgICAgIHUgPSAwLFxuICAgICAgICAgICAgc3VtID0gMCxcbiAgICAgICAgICAgIHlTdGFydDEgPSAwLFxuICAgICAgICAgICAgeVN0YXJ0MiA9IDAsXG4gICAgICAgICAgICB4U3RhcnQxID0gMCxcbiAgICAgICAgICAgIHhTdGFydDIgPSAwLFxuICAgICAgICAgICAgb2Zmc2V0ID0gMDtcblxuICAgICAgICBmb3IgKHYgPSAxOyAodiB8IDApIDwgKChzaXplIC0gMSkgfCAwKTsgdiA9ICh2ICsgMSkgfCAwKSB7XG4gICAgICAgICAgICBvZmZzZXQgPSAob2Zmc2V0ICsgc2l6ZSkgfCAwO1xuICAgICAgICAgICAgZm9yICh1ID0gMTsgKHUgfCAwKSA8ICgoc2l6ZSAtIDEpIHwgMCk7IHUgPSAodSArIDEpIHwgMCkge1xuICAgICAgICAgICAgICAgIHlTdGFydDEgPSAob2Zmc2V0IC0gc2l6ZSkgfCAwO1xuICAgICAgICAgICAgICAgIHlTdGFydDIgPSAob2Zmc2V0ICsgc2l6ZSkgfCAwO1xuICAgICAgICAgICAgICAgIHhTdGFydDEgPSAodSAtIDEpIHwgMDtcbiAgICAgICAgICAgICAgICB4U3RhcnQyID0gKHUgKyAxKSB8IDA7XG4gICAgICAgICAgICAgICAgc3VtID0gKChpbWFnZXNbKGluSW1hZ2VQdHIgKyB5U3RhcnQxICsgeFN0YXJ0MSkgfCAwXSB8IDApXG4gICAgICAgICAgICAgICAgICAgICsgKGltYWdlc1soaW5JbWFnZVB0ciArIHlTdGFydDEgKyB4U3RhcnQyKSB8IDBdIHwgMClcbiAgICAgICAgICAgICAgICAgICAgKyAoaW1hZ2VzWyhpbkltYWdlUHRyICsgb2Zmc2V0ICsgdSkgfCAwXSB8IDApXG4gICAgICAgICAgICAgICAgICAgICsgKGltYWdlc1soaW5JbWFnZVB0ciArIHlTdGFydDIgKyB4U3RhcnQxKSB8IDBdIHwgMClcbiAgICAgICAgICAgICAgICAgICAgKyAoaW1hZ2VzWyhpbkltYWdlUHRyICsgeVN0YXJ0MiArIHhTdGFydDIpIHwgMF0gfCAwKSkgfCAwO1xuICAgICAgICAgICAgICAgIGlmICgoc3VtIHwgMCkgPT0gKDUgfCAwKSkge1xuICAgICAgICAgICAgICAgICAgICBpbWFnZXNbKG91dEltYWdlUHRyICsgb2Zmc2V0ICsgdSkgfCAwXSA9IDE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VzWyhvdXRJbWFnZVB0ciArIG9mZnNldCArIHUpIHwgMF0gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3VidHJhY3QoYUltYWdlUHRyLCBiSW1hZ2VQdHIsIG91dEltYWdlUHRyKSB7XG4gICAgICAgIGFJbWFnZVB0ciA9IGFJbWFnZVB0ciB8IDA7XG4gICAgICAgIGJJbWFnZVB0ciA9IGJJbWFnZVB0ciB8IDA7XG4gICAgICAgIG91dEltYWdlUHRyID0gb3V0SW1hZ2VQdHIgfCAwO1xuXG4gICAgICAgIHZhciBsZW5ndGggPSAwO1xuXG4gICAgICAgIGxlbmd0aCA9IGltdWwoc2l6ZSwgc2l6ZSkgfCAwO1xuXG4gICAgICAgIHdoaWxlICgobGVuZ3RoIHwgMCkgPiAwKSB7XG4gICAgICAgICAgICBsZW5ndGggPSAobGVuZ3RoIC0gMSkgfCAwO1xuICAgICAgICAgICAgaW1hZ2VzWyhvdXRJbWFnZVB0ciArIGxlbmd0aCkgfCAwXSA9XG4gICAgICAgICAgICAgICAgKChpbWFnZXNbKGFJbWFnZVB0ciArIGxlbmd0aCkgfCAwXSB8IDApIC0gKGltYWdlc1soYkltYWdlUHRyICsgbGVuZ3RoKSB8IDBdIHwgMCkpIHwgMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGJpdHdpc2VPcihhSW1hZ2VQdHIsIGJJbWFnZVB0ciwgb3V0SW1hZ2VQdHIpIHtcbiAgICAgICAgYUltYWdlUHRyID0gYUltYWdlUHRyIHwgMDtcbiAgICAgICAgYkltYWdlUHRyID0gYkltYWdlUHRyIHwgMDtcbiAgICAgICAgb3V0SW1hZ2VQdHIgPSBvdXRJbWFnZVB0ciB8IDA7XG5cbiAgICAgICAgdmFyIGxlbmd0aCA9IDA7XG5cbiAgICAgICAgbGVuZ3RoID0gaW11bChzaXplLCBzaXplKSB8IDA7XG5cbiAgICAgICAgd2hpbGUgKChsZW5ndGggfCAwKSA+IDApIHtcbiAgICAgICAgICAgIGxlbmd0aCA9IChsZW5ndGggLSAxKSB8IDA7XG4gICAgICAgICAgICBpbWFnZXNbKG91dEltYWdlUHRyICsgbGVuZ3RoKSB8IDBdID1cbiAgICAgICAgICAgICAgICAoKGltYWdlc1soYUltYWdlUHRyICsgbGVuZ3RoKSB8IDBdIHwgMCkgfCAoaW1hZ2VzWyhiSW1hZ2VQdHIgKyBsZW5ndGgpIHwgMF0gfCAwKSkgfCAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY291bnROb25aZXJvKGltYWdlUHRyKSB7XG4gICAgICAgIGltYWdlUHRyID0gaW1hZ2VQdHIgfCAwO1xuXG4gICAgICAgIHZhciBzdW0gPSAwLFxuICAgICAgICAgICAgbGVuZ3RoID0gMDtcblxuICAgICAgICBsZW5ndGggPSBpbXVsKHNpemUsIHNpemUpIHwgMDtcblxuICAgICAgICB3aGlsZSAoKGxlbmd0aCB8IDApID4gMCkge1xuICAgICAgICAgICAgbGVuZ3RoID0gKGxlbmd0aCAtIDEpIHwgMDtcbiAgICAgICAgICAgIHN1bSA9ICgoc3VtIHwgMCkgKyAoaW1hZ2VzWyhpbWFnZVB0ciArIGxlbmd0aCkgfCAwXSB8IDApKSB8IDA7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKHN1bSB8IDApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluaXQoaW1hZ2VQdHIsIHZhbHVlKSB7XG4gICAgICAgIGltYWdlUHRyID0gaW1hZ2VQdHIgfCAwO1xuICAgICAgICB2YWx1ZSA9IHZhbHVlIHwgMDtcblxuICAgICAgICB2YXIgbGVuZ3RoID0gMDtcblxuICAgICAgICBsZW5ndGggPSBpbXVsKHNpemUsIHNpemUpIHwgMDtcblxuICAgICAgICB3aGlsZSAoKGxlbmd0aCB8IDApID4gMCkge1xuICAgICAgICAgICAgbGVuZ3RoID0gKGxlbmd0aCAtIDEpIHwgMDtcbiAgICAgICAgICAgIGltYWdlc1soaW1hZ2VQdHIgKyBsZW5ndGgpIHwgMF0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpbGF0ZShpbkltYWdlUHRyLCBvdXRJbWFnZVB0cikge1xuICAgICAgICBpbkltYWdlUHRyID0gaW5JbWFnZVB0ciB8IDA7XG4gICAgICAgIG91dEltYWdlUHRyID0gb3V0SW1hZ2VQdHIgfCAwO1xuXG4gICAgICAgIHZhciB2ID0gMCxcbiAgICAgICAgICAgIHUgPSAwLFxuICAgICAgICAgICAgc3VtID0gMCxcbiAgICAgICAgICAgIHlTdGFydDEgPSAwLFxuICAgICAgICAgICAgeVN0YXJ0MiA9IDAsXG4gICAgICAgICAgICB4U3RhcnQxID0gMCxcbiAgICAgICAgICAgIHhTdGFydDIgPSAwLFxuICAgICAgICAgICAgb2Zmc2V0ID0gMDtcblxuICAgICAgICBmb3IgKHYgPSAxOyAodiB8IDApIDwgKChzaXplIC0gMSkgfCAwKTsgdiA9ICh2ICsgMSkgfCAwKSB7XG4gICAgICAgICAgICBvZmZzZXQgPSAob2Zmc2V0ICsgc2l6ZSkgfCAwO1xuICAgICAgICAgICAgZm9yICh1ID0gMTsgKHUgfCAwKSA8ICgoc2l6ZSAtIDEpIHwgMCk7IHUgPSAodSArIDEpIHwgMCkge1xuICAgICAgICAgICAgICAgIHlTdGFydDEgPSAob2Zmc2V0IC0gc2l6ZSkgfCAwO1xuICAgICAgICAgICAgICAgIHlTdGFydDIgPSAob2Zmc2V0ICsgc2l6ZSkgfCAwO1xuICAgICAgICAgICAgICAgIHhTdGFydDEgPSAodSAtIDEpIHwgMDtcbiAgICAgICAgICAgICAgICB4U3RhcnQyID0gKHUgKyAxKSB8IDA7XG4gICAgICAgICAgICAgICAgc3VtID0gKChpbWFnZXNbKGluSW1hZ2VQdHIgKyB5U3RhcnQxICsgeFN0YXJ0MSkgfCAwXSB8IDApXG4gICAgICAgICAgICAgICAgICAgICsgKGltYWdlc1soaW5JbWFnZVB0ciArIHlTdGFydDEgKyB4U3RhcnQyKSB8IDBdIHwgMClcbiAgICAgICAgICAgICAgICAgICAgKyAoaW1hZ2VzWyhpbkltYWdlUHRyICsgb2Zmc2V0ICsgdSkgfCAwXSB8IDApXG4gICAgICAgICAgICAgICAgICAgICsgKGltYWdlc1soaW5JbWFnZVB0ciArIHlTdGFydDIgKyB4U3RhcnQxKSB8IDBdIHwgMClcbiAgICAgICAgICAgICAgICAgICAgKyAoaW1hZ2VzWyhpbkltYWdlUHRyICsgeVN0YXJ0MiArIHhTdGFydDIpIHwgMF0gfCAwKSkgfCAwO1xuICAgICAgICAgICAgICAgIGlmICgoc3VtIHwgMCkgPiAoMCB8IDApKSB7XG4gICAgICAgICAgICAgICAgICAgIGltYWdlc1sob3V0SW1hZ2VQdHIgKyBvZmZzZXQgKyB1KSB8IDBdID0gMTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpbWFnZXNbKG91dEltYWdlUHRyICsgb2Zmc2V0ICsgdSkgfCAwXSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtZW1jcHkoc3JjSW1hZ2VQdHIsIGRzdEltYWdlUHRyKSB7XG4gICAgICAgIHNyY0ltYWdlUHRyID0gc3JjSW1hZ2VQdHIgfCAwO1xuICAgICAgICBkc3RJbWFnZVB0ciA9IGRzdEltYWdlUHRyIHwgMDtcblxuICAgICAgICB2YXIgbGVuZ3RoID0gMDtcblxuICAgICAgICBsZW5ndGggPSBpbXVsKHNpemUsIHNpemUpIHwgMDtcblxuICAgICAgICB3aGlsZSAoKGxlbmd0aCB8IDApID4gMCkge1xuICAgICAgICAgICAgbGVuZ3RoID0gKGxlbmd0aCAtIDEpIHwgMDtcbiAgICAgICAgICAgIGltYWdlc1soZHN0SW1hZ2VQdHIgKyBsZW5ndGgpIHwgMF0gPSAoaW1hZ2VzWyhzcmNJbWFnZVB0ciArIGxlbmd0aCkgfCAwXSB8IDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gemVyb0JvcmRlcihpbWFnZVB0cikge1xuICAgICAgICBpbWFnZVB0ciA9IGltYWdlUHRyIHwgMDtcblxuICAgICAgICB2YXIgeCA9IDAsXG4gICAgICAgICAgICB5ID0gMDtcblxuICAgICAgICBmb3IgKHggPSAwOyAoeCB8IDApIDwgKChzaXplIC0gMSkgfCAwKTsgeCA9ICh4ICsgMSkgfCAwKSB7XG4gICAgICAgICAgICBpbWFnZXNbKGltYWdlUHRyICsgeCkgfCAwXSA9IDA7XG4gICAgICAgICAgICBpbWFnZXNbKGltYWdlUHRyICsgeSkgfCAwXSA9IDA7XG4gICAgICAgICAgICB5ID0gKCh5ICsgc2l6ZSkgLSAxKSB8IDA7XG4gICAgICAgICAgICBpbWFnZXNbKGltYWdlUHRyICsgeSkgfCAwXSA9IDA7XG4gICAgICAgICAgICB5ID0gKHkgKyAxKSB8IDA7XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh4ID0gMDsgKHggfCAwKSA8IChzaXplIHwgMCk7IHggPSAoeCArIDEpIHwgMCkge1xuICAgICAgICAgICAgaW1hZ2VzWyhpbWFnZVB0ciArIHkpIHwgMF0gPSAwO1xuICAgICAgICAgICAgeSA9ICh5ICsgMSkgfCAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2tlbGV0b25pemUoKSB7XG4gICAgICAgIHZhciBzdWJJbWFnZVB0ciA9IDAsXG4gICAgICAgICAgICBlcm9kZWRJbWFnZVB0ciA9IDAsXG4gICAgICAgICAgICB0ZW1wSW1hZ2VQdHIgPSAwLFxuICAgICAgICAgICAgc2tlbEltYWdlUHRyID0gMCxcbiAgICAgICAgICAgIHN1bSA9IDAsXG4gICAgICAgICAgICBkb25lID0gMDtcblxuICAgICAgICBlcm9kZWRJbWFnZVB0ciA9IGltdWwoc2l6ZSwgc2l6ZSkgfCAwO1xuICAgICAgICB0ZW1wSW1hZ2VQdHIgPSAoZXJvZGVkSW1hZ2VQdHIgKyBlcm9kZWRJbWFnZVB0cikgfCAwO1xuICAgICAgICBza2VsSW1hZ2VQdHIgPSAodGVtcEltYWdlUHRyICsgZXJvZGVkSW1hZ2VQdHIpIHwgMDtcblxuICAgICAgICAvLyBpbml0IHNrZWwtaW1hZ2VcbiAgICAgICAgaW5pdChza2VsSW1hZ2VQdHIsIDApO1xuICAgICAgICB6ZXJvQm9yZGVyKHN1YkltYWdlUHRyKTtcblxuICAgICAgICBkbyB7XG4gICAgICAgICAgICBlcm9kZShzdWJJbWFnZVB0ciwgZXJvZGVkSW1hZ2VQdHIpO1xuICAgICAgICAgICAgZGlsYXRlKGVyb2RlZEltYWdlUHRyLCB0ZW1wSW1hZ2VQdHIpO1xuICAgICAgICAgICAgc3VidHJhY3Qoc3ViSW1hZ2VQdHIsIHRlbXBJbWFnZVB0ciwgdGVtcEltYWdlUHRyKTtcbiAgICAgICAgICAgIGJpdHdpc2VPcihza2VsSW1hZ2VQdHIsIHRlbXBJbWFnZVB0ciwgc2tlbEltYWdlUHRyKTtcbiAgICAgICAgICAgIG1lbWNweShlcm9kZWRJbWFnZVB0ciwgc3ViSW1hZ2VQdHIpO1xuICAgICAgICAgICAgc3VtID0gY291bnROb25aZXJvKHN1YkltYWdlUHRyKSB8IDA7XG4gICAgICAgICAgICBkb25lID0gKChzdW0gfCAwKSA9PSAwIHwgMCk7XG4gICAgICAgIH0gd2hpbGUgKCFkb25lKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBza2VsZXRvbml6ZTogc2tlbGV0b25pemVcbiAgICB9O1xufVxuZXhwb3J0IGRlZmF1bHQgU2tlbGV0b25pemVyO1xuLyogZXNsaW50LWVuYWJsZSBlcWVxZXEgKi9cbiIsImltcG9ydCB7IEltYWdlV3JhcHBlciB9IGZyb20gXCIuLi9jb21tb24vaW1hZ2Utd3JhcHBlclwiO1xuXG4vKipcbiAqIEBib3Jyb3dzIGh0dHA6Ly93d3cuY29kZXByb2plY3QuY29tL1RpcHMvNDA3MTcyL0Nvbm5lY3RlZC1Db21wb25lbnQtTGFiZWxpbmctYW5kLVZlY3Rvcml6YXRpb25cbiAqL1xuXG50eXBlIERpcmVjdGlvbiA9IG51bWJlcjtcblxuZXhwb3J0IGNvbnN0IFNlYXJjaERpcmVjdGlvbnM6IEFycmF5PEFycmF5PERpcmVjdGlvbj4+ID0gW1swLCAxXSwgWzEsIDFdLCBbMSwgMF0sIFsxLCAtMV0sIFswLCAtMV0sIFstMSwgLTFdLCBbLTEsIDBdLCBbLTEsIDFdXTtcblxuZXhwb3J0IGludGVyZmFjZSBDb250b3VyVmVydGV4IHtcbiAgICB4OiBudW1iZXIsXG4gICAgeTogbnVtYmVyLFxuICAgIGRpcjogRGlyZWN0aW9uLFxuICAgIG5leHQ6IENvbnRvdXJWZXJ0ZXgsXG4gICAgcHJldjogQ29udG91clZlcnRleFxufVxuXG5pbnRlcmZhY2UgQ3VycmVudCB7XG4gICAgY3g6IG51bWJlcixcbiAgICBjeTogbnVtYmVyLFxuICAgIGRpcjogRGlyZWN0aW9uXG59XG5cbmV4cG9ydCBjbGFzcyBUcmFjZXIge1xuICAgIHByaXZhdGUgX2ltYWdlRGF0YTogVWludDhBcnJheTtcbiAgICBwcml2YXRlIF9sYWJlbERhdGE6IEFycmF5PG51bWJlcj47XG4gICAgcHJpdmF0ZSBfd2lkdGg6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGltYWdlV3JhcHBlcjogSW1hZ2VXcmFwcGVyLCBsYWJlbFdyYXBwZXI6IEltYWdlV3JhcHBlcjxBcnJheTxudW1iZXI+Pikge1xuICAgICAgICB0aGlzLl9pbWFnZURhdGEgPSBpbWFnZVdyYXBwZXIuZGF0YTtcbiAgICAgICAgdGhpcy5fbGFiZWxEYXRhID0gbGFiZWxXcmFwcGVyLmRhdGEgYXMgQXJyYXk8bnVtYmVyPjtcbiAgICAgICAgdGhpcy5fd2lkdGggPSBpbWFnZVdyYXBwZXIuc2l6ZS54O1xuICAgIH1cblxuICAgIHRyYWNlKGN1cnJlbnQ6IEN1cnJlbnQsIGNvbG9yOiBudW1iZXIsIGxhYmVsOiBudW1iZXIsIGVkZ2VMYWJlbDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCB5ID0gY3VycmVudC5jeSArIFNlYXJjaERpcmVjdGlvbnNbY3VycmVudC5kaXJdWzBdIHwgMDtcbiAgICAgICAgICAgIGNvbnN0IHggPSBjdXJyZW50LmN4ICsgU2VhcmNoRGlyZWN0aW9uc1tjdXJyZW50LmRpcl1bMV0gfCAwO1xuICAgICAgICAgICAgY29uc3QgcG9zID0geSAqIHRoaXMuX3dpZHRoICsgeCB8IDA7XG5cbiAgICAgICAgICAgIGlmICgodGhpcy5faW1hZ2VEYXRhW3Bvc10gPT09IGNvbG9yKSAmJiAoKHRoaXMuX2xhYmVsRGF0YVtwb3NdID09PSAwKSB8fCAodGhpcy5fbGFiZWxEYXRhW3Bvc10gPT09IGxhYmVsKSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9sYWJlbERhdGFbcG9zXSA9IGxhYmVsO1xuICAgICAgICAgICAgICAgIGN1cnJlbnQuY3ggPSB4O1xuICAgICAgICAgICAgICAgIGN1cnJlbnQuY3kgPSB5O1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9sYWJlbERhdGFbcG9zXSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9sYWJlbERhdGFbcG9zXSA9IGVkZ2VMYWJlbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY3VycmVudC5kaXIgPSAoY3VycmVudC5kaXIgKyAxKSAlIDg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29udG91clRyYWNpbmcoc3k6IG51bWJlciwgc3g6IG51bWJlciwgbGFiZWw6IG51bWJlciwgY29sb3I6IG51bWJlciwgZWRnZUxhYmVsOiBudW1iZXIpOiBDb250b3VyVmVydGV4IHtcbiAgICAgICAgbGV0IEZ2OiBDb250b3VyVmVydGV4ID0gbnVsbDtcbiAgICAgICAgY29uc3QgY3VycmVudDogQ3VycmVudCA9IHtcbiAgICAgICAgICAgIGN4OiBzeCxcbiAgICAgICAgICAgIGN5OiBzeSxcbiAgICAgICAgICAgIGRpcjogMFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmICh0aGlzLnRyYWNlKGN1cnJlbnQsIGNvbG9yLCBsYWJlbCwgZWRnZUxhYmVsKSkge1xuICAgICAgICAgICAgRnYgPSB7XG4gICAgICAgICAgICAgICAgeDogc3gsXG4gICAgICAgICAgICAgICAgeTogc3ksXG4gICAgICAgICAgICAgICAgZGlyOiBjdXJyZW50LmRpcixcbiAgICAgICAgICAgICAgICBuZXh0OiBudWxsLFxuICAgICAgICAgICAgICAgIHByZXY6IG51bGxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBsZXQgQ3YgPSBGdjtcbiAgICAgICAgICAgIGxldCBsZGlyID0gY3VycmVudC5kaXI7XG4gICAgICAgICAgICBsZXQgUCA9IHtcbiAgICAgICAgICAgICAgICB4OiBjdXJyZW50LmN4LFxuICAgICAgICAgICAgICAgIHk6IGN1cnJlbnQuY3ksXG4gICAgICAgICAgICAgICAgZGlyOiAwLFxuICAgICAgICAgICAgICAgIG5leHQ6IG51bGwsXG4gICAgICAgICAgICAgICAgcHJldjogQ3ZcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBDdi5uZXh0ID0gUDtcbiAgICAgICAgICAgIEN2ID0gUDtcblxuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgIGN1cnJlbnQuZGlyID0gKGN1cnJlbnQuZGlyICsgNikgJSA4O1xuXG4gICAgICAgICAgICAgICAgdGhpcy50cmFjZShjdXJyZW50LCBjb2xvciwgbGFiZWwsIGVkZ2VMYWJlbCk7XG5cbiAgICAgICAgICAgICAgICBpZiAobGRpciAhPT0gY3VycmVudC5kaXIpIHtcbiAgICAgICAgICAgICAgICAgICAgQ3YuZGlyID0gY3VycmVudC5kaXI7XG4gICAgICAgICAgICAgICAgICAgIFAgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBjdXJyZW50LmN4LFxuICAgICAgICAgICAgICAgICAgICAgICAgeTogY3VycmVudC5jeSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcjogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHQ6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2OiBDdlxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBDdi5uZXh0ID0gUDtcbiAgICAgICAgICAgICAgICAgICAgQ3YgPSBQO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIEN2LmRpciA9IGxkaXI7XG4gICAgICAgICAgICAgICAgICAgIEN2LnggPSBjdXJyZW50LmN4O1xuICAgICAgICAgICAgICAgICAgICBDdi55ID0gY3VycmVudC5jeTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBsZGlyID0gY3VycmVudC5kaXI7XG4gICAgICAgICAgICB9IHdoaWxlIChjdXJyZW50LmN4ICE9PSBzeCB8fCBjdXJyZW50LmN5ICE9PSBzeSk7XG5cbiAgICAgICAgICAgIEZ2LnByZXYgPSBDdi5wcmV2O1xuICAgICAgICAgICAgQ3YucHJldi5uZXh0ID0gRnY7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEZ2O1xuICAgIH1cbn1cbiIsImltcG9ydCBfcG9seWZpbGxzIGZyb20gJy4vY29tbW9uL3BvbHlmaWxscyc7XG5pbXBvcnQgeyBSZXN1bHRDb2xsZWN0b3IgfSBmcm9tICcuL2FuYWx5dGljcy9yZXN1bHQtY29sbGVjdG9yJztcbmltcG9ydCB7IEJveCB9IGZyb20gJy4vY29tbW9uL2JveCc7XG5pbXBvcnQgeyBFdmVudENhbGxiYWNrLCBFdmVudHMsIEV2ZW50U3Vic2NyaXB0aW9uIH0gZnJvbSAnLi9jb21tb24vZXZlbnRzJztcbmltcG9ydCB7IEltYWdlRGVidWcgfSBmcm9tICcuL2NvbW1vbi9pbWFnZS1kZWJ1Zyc7XG5pbXBvcnQgeyBJbWFnZVdyYXBwZXIgfSBmcm9tICcuL2NvbW1vbi9pbWFnZS13cmFwcGVyJztcbmltcG9ydCB7IG1lcmdlIH0gZnJvbSAnLi9jb21tb24vbWVyZ2UnO1xuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuL2NvbW1vbi9wb2ludCc7XG5pbXBvcnQgeyBjb25maWcsIFF1YWdnYUNvbmZpZyB9IGZyb20gJy4vY29uZmlnL2NvbmZpZyc7XG5pbXBvcnQgeyBCYXJjb2RlRGVjb2RlciwgUXVhZ2dhQmFyY29kZSB9IGZyb20gJy4vZGVjb2Rlci9iYXJjb2RlLWRlY29kZXInO1xuaW1wb3J0IHsgQ2FtZXJhQWNjZXNzIH0gZnJvbSAnLi9pbnB1dC9jYW1lcmEtYWNjZXNzJztcbmltcG9ydCB7IEZyYW1lR3JhYmJlciB9IGZyb20gJy4vaW5wdXQvZnJhbWUtZ3JhYmJlcic7XG5pbXBvcnQgeyBJbWFnZVN0cmVhbSB9IGZyb20gJy4vaW5wdXQvaW1hZ2Utc3RyZWFtJztcbmltcG9ydCB7IElucHV0U3RyZWFtIH0gZnJvbSAnLi9pbnB1dC9pbnB1dC1zdHJlYW0nO1xuaW1wb3J0IHsgTGl2ZVN0cmVhbSB9IGZyb20gJy4vaW5wdXQvbGl2ZS1zdHJlYW0nO1xuaW1wb3J0IHsgVmlkZW9TdHJlYW0gfSBmcm9tICcuL2lucHV0L3ZpZGVvLXN0cmVhbSc7XG5pbXBvcnQgeyBjaGVja0ltYWdlQ29uc3RyYWludHMgfSBmcm9tICcuL2lucHV0L2lucHV0LXN0cmVhbS11dGlscyc7XG5pbXBvcnQgeyBCYXJjb2RlTG9jYXRvciB9IGZyb20gJy4vbG9jYXRvci9iYXJjb2RlLWxvY2F0b3InO1xuaW1wb3J0IHsgQmFyY29kZVJlYWRlckRlY2xhcmF0aW9uIH0gZnJvbSAnLi9yZWFkZXIvYmFyY29kZS1yZWFkZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIFdvcmtlclRocmVhZCB7XG4gICAgd29ya2VyOiBXb3JrZXI7XG4gICAgaW1hZ2VEYXRhOiBVaW50OEFycmF5O1xuICAgIGJ1c3k6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUXVhZ2dhQ2FudmFzQ29udGFpbmVyIHtcbiAgICBjdHg6IHtcbiAgICAgICAgaW1hZ2U6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCxcbiAgICAgICAgb3ZlcmxheTogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEXG4gICAgfSxcbiAgICBkb206IHtcbiAgICAgICAgaW1hZ2U6IEhUTUxDYW52YXNFbGVtZW50LFxuICAgICAgICBvdmVybGF5OiBIVE1MQ2FudmFzRWxlbWVudFxuICAgIH1cbn1cblxubGV0IF9fZmFjdG9yeVNvdXJjZV9fOiBzdHJpbmc7XG5cbmV4cG9ydCBjbGFzcyBRdWFnZ2Ege1xuICAgIHByaXZhdGUgX2lucHV0U3RyZWFtOiBJbnB1dFN0cmVhbTtcbiAgICBwcml2YXRlIF9mcmFtZUdyYWJiZXI6IEZyYW1lR3JhYmJlcjtcbiAgICBwcml2YXRlIF9zdG9wcGVkOiBib29sZWFuO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgX2NhbnZhc0NvbnRhaW5lcjogUXVhZ2dhQ2FudmFzQ29udGFpbmVyO1xuICAgIHByaXZhdGUgX2lucHV0SW1hZ2VXcmFwcGVyOiBJbWFnZVdyYXBwZXI7XG4gICAgcHJpdmF0ZSBfbG9jYXRvcjogQmFyY29kZUxvY2F0b3I7XG4gICAgcHJpdmF0ZSBfYm94U2l6ZTogQm94O1xuICAgIHByaXZhdGUgX2RlY29kZXI6IEJhcmNvZGVEZWNvZGVyO1xuICAgIHByaXZhdGUgX3dvcmtlclBvb2w6IEFycmF5PFdvcmtlclRocmVhZD47XG4gICAgcHJpdmF0ZSBfb25VSVRocmVhZDogYm9vbGVhbjtcbiAgICBwcml2YXRlIF9yZXN1bHRDb2xsZWN0b3I6IFJlc3VsdENvbGxlY3RvcjtcbiAgICBwcml2YXRlIF9jb25maWc6IFF1YWdnYUNvbmZpZztcblxuICAgIHN0YXRpYyBkZWNvZGVTaW5nbGUoX2NvbmZpZzogUXVhZ2dhQ29uZmlnLCByZXN1bHRDYWxsYmFjazogKF86IFF1YWdnYUJhcmNvZGUpID0+IHZvaWQpOiB2b2lkIHtcbiAgICAgICAgX2NvbmZpZyA9IG1lcmdlKHtcbiAgICAgICAgICAgIGlucHV0U3RyZWFtOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ0ltYWdlU3RyZWFtJyxcbiAgICAgICAgICAgICAgICBzZXF1ZW5jZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2l6ZTogODAwLFxuICAgICAgICAgICAgICAgIHNyYzogX2NvbmZpZy5zcmNcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBudW1PZldvcmtlcnM6IChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIF9jb25maWcuZGVidWcpID8gMCA6IDEsXG4gICAgICAgICAgICBsb2NhdG9yOiB7XG4gICAgICAgICAgICAgICAgaGFsZlNhbXBsZTogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgX2NvbmZpZyk7XG5cbiAgICAgICAgY29uc3QgcXVhZ2dhID0gbmV3IFF1YWdnYShfY29uZmlnLCAoKSA9PiB7XG4gICAgICAgICAgICBFdmVudHMub25jZSgncHJvY2Vzc2VkJywgKHJlc3VsdDogUXVhZ2dhQmFyY29kZSkgPT4ge1xuICAgICAgICAgICAgICAgIHF1YWdnYS5zdG9wKCk7XG4gICAgICAgICAgICAgICAgcmVzdWx0Q2FsbGJhY2suY2FsbChudWxsLCByZXN1bHQpO1xuICAgICAgICAgICAgfSwgdHJ1ZSk7XG4gICAgICAgICAgICBxdWFnZ2Euc3RhcnQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoX2NvbmZpZzogUXVhZ2dhQ29uZmlnLCBjYjogKCkgPT4gdm9pZCwgaW1hZ2VXcmFwcGVyPzogSW1hZ2VXcmFwcGVyKSB7XG4gICAgICAgIHRoaXMuX29uVUlUaHJlYWQgPSB0cnVlO1xuICAgICAgICB0aGlzLl9jYW52YXNDb250YWluZXIgPSB7XG4gICAgICAgICAgICBjdHg6IHtcbiAgICAgICAgICAgICAgICBpbWFnZTogbnVsbCxcbiAgICAgICAgICAgICAgICBvdmVybGF5OiBudWxsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZG9tOiB7XG4gICAgICAgICAgICAgICAgaW1hZ2U6IG51bGwsXG4gICAgICAgICAgICAgICAgb3ZlcmxheTogbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLl93b3JrZXJQb29sID0gbmV3IEFycmF5PFdvcmtlclRocmVhZD4oKTtcbiAgICAgICAgdGhpcy5fY29uZmlnID0gbWVyZ2UoY29uZmlnLCBfY29uZmlnKTtcbiAgICAgICAgaWYgKGltYWdlV3JhcHBlcikge1xuICAgICAgICAgICAgdGhpcy5fb25VSVRocmVhZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5faW5pdGlhbGl6ZURhdGEoaW1hZ2VXcmFwcGVyKTtcbiAgICAgICAgICAgIGNiKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9pbml0SW5wdXRTdHJlYW0oY2IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IGNhbnZhcygpOiBRdWFnZ2FDYW52YXNDb250YWluZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2FudmFzQ29udGFpbmVyO1xuICAgIH1cblxuICAgIHN0YXJ0KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5fb25VSVRocmVhZCAmJiB0aGlzLl9jb25maWcuaW5wdXRTdHJlYW0udHlwZSA9PT0gJ0xpdmVTdHJlYW0nKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGFydENvbnRpbnVvdXNVcGRhdGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RvcCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fc3RvcHBlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuX2FkanVzdFdvcmtlclBvb2woMCk7XG4gICAgICAgIGlmICh0aGlzLl9jb25maWcuaW5wdXRTdHJlYW0udHlwZSA9PT0gJ0xpdmVTdHJlYW0nKSB7XG4gICAgICAgICAgICBDYW1lcmFBY2Nlc3MucmVsZWFzZSgpO1xuICAgICAgICAgICAgdGhpcy5faW5wdXRTdHJlYW0uY2xlYXJFdmVudEhhbmRsZXJzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwYXVzZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fc3RvcHBlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgb25EZXRlY3RlZChjYWxsYmFjazogRXZlbnRTdWJzY3JpcHRpb24gfCBFdmVudENhbGxiYWNrKTogdm9pZCB7XG4gICAgICAgIEV2ZW50cy5zdWJzY3JpYmUoJ2RldGVjdGVkJywgY2FsbGJhY2spO1xuICAgIH1cblxuICAgIG9mZkRldGVjdGVkKGNhbGxiYWNrOiBFdmVudENhbGxiYWNrKTogdm9pZCB7XG4gICAgICAgIEV2ZW50cy51bnN1YnNjcmliZSgnZGV0ZWN0ZWQnLCBjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgb25Qcm9jZXNzZWQoY2FsbGJhY2s6IEV2ZW50U3Vic2NyaXB0aW9uIHwgRXZlbnRDYWxsYmFjayk6IHZvaWQge1xuICAgICAgICBFdmVudHMuc3Vic2NyaWJlKCdwcm9jZXNzZWQnLCBjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgb2ZmUHJvY2Vzc2VkKGNhbGxiYWNrOiBFdmVudENhbGxiYWNrKTogdm9pZCB7XG4gICAgICAgIEV2ZW50cy51bnN1YnNjcmliZSgncHJvY2Vzc2VkJywgY2FsbGJhY2spO1xuICAgIH1cblxuICAgIHNldFJlYWRlcnMocmVhZGVyczogQXJyYXk8QmFyY29kZVJlYWRlckRlY2xhcmF0aW9uPik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5fZGVjb2Rlcikge1xuICAgICAgICAgICAgdGhpcy5fZGVjb2Rlci5zZXRSZWFkZXJzKHJlYWRlcnMpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX29uVUlUaHJlYWQgJiYgdGhpcy5fd29ya2VyUG9vbC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLl93b3JrZXJQb29sLmZvckVhY2goKHsgd29ya2VyIH0pID0+IHdvcmtlci5wb3N0TWVzc2FnZSh7IGNtZDogJ3NldFJlYWRlcnMnLCByZWFkZXJzIH0pKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlZ2lzdGVyUmVzdWx0Q29sbGVjdG9yKHJlc3VsdENvbGxlY3RvcjogUmVzdWx0Q29sbGVjdG9yKTogdm9pZCB7XG4gICAgICAgIGlmIChyZXN1bHRDb2xsZWN0b3IgJiYgdHlwZW9mIHJlc3VsdENvbGxlY3Rvci5hZGRSZXN1bHQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRoaXMuX3Jlc3VsdENvbGxlY3RvciA9IHJlc3VsdENvbGxlY3RvcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIENhbWVyYUFjY2VzczogQ2FtZXJhQWNjZXNzO1xuICAgIEltYWdlRGVidWc6IEltYWdlRGVidWc7XG4gICAgSW1hZ2VXcmFwcGVyOiBJbWFnZVdyYXBwZXI7XG4gICAgUmVzdWx0Q29sbGVjdG9yOiBSZXN1bHRDb2xsZWN0b3I7XG5cbiAgICBwcml2YXRlIF9pbml0aWFsaXplRGF0YShpbWFnZVdyYXBwZXI/OiBJbWFnZVdyYXBwZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5faW5pdEJ1ZmZlcnMoaW1hZ2VXcmFwcGVyKTtcbiAgICAgICAgdGhpcy5fZGVjb2RlciA9IG5ldyBCYXJjb2RlRGVjb2Rlcih0aGlzLl9jb25maWcuZGVjb2RlciwgdGhpcy5faW5wdXRJbWFnZVdyYXBwZXIpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2luaXRJbnB1dFN0cmVhbShjYWxsYmFjazogKGVycj86IGFueSkgPT4gdm9pZCk6IHZvaWQge1xuICAgICAgICBsZXQgdmlkZW86IEhUTUxWaWRlb0VsZW1lbnQ7XG4gICAgICAgIGlmICh0aGlzLl9jb25maWcuaW5wdXRTdHJlYW0udHlwZSA9PT0gJ1ZpZGVvU3RyZWFtJykge1xuICAgICAgICAgICAgdmlkZW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2aWRlbycpO1xuICAgICAgICAgICAgdGhpcy5faW5wdXRTdHJlYW0gPSBuZXcgVmlkZW9TdHJlYW0odmlkZW8pO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2NvbmZpZy5pbnB1dFN0cmVhbS50eXBlID09PSAnSW1hZ2VTdHJlYW0nKSB7XG4gICAgICAgICAgICB0aGlzLl9pbnB1dFN0cmVhbSA9IG5ldyBJbWFnZVN0cmVhbSgpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2NvbmZpZy5pbnB1dFN0cmVhbS50eXBlID09PSAnTGl2ZVN0cmVhbScpIHtcbiAgICAgICAgICAgIGNvbnN0IHZpZXdwb3J0ID0gdGhpcy5fZ2V0Vmlld1BvcnQoKTtcbiAgICAgICAgICAgIGlmICh2aWV3cG9ydCkge1xuICAgICAgICAgICAgICAgIHZpZGVvID0gdmlld3BvcnQucXVlcnlTZWxlY3RvcigndmlkZW8nKTtcbiAgICAgICAgICAgICAgICBpZiAoIXZpZGVvKSB7XG4gICAgICAgICAgICAgICAgICAgIHZpZGVvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndmlkZW8nKTtcbiAgICAgICAgICAgICAgICAgICAgdmlld3BvcnQuYXBwZW5kQ2hpbGQodmlkZW8pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2lucHV0U3RyZWFtID0gbmV3IExpdmVTdHJlYW0odmlkZW8pO1xuICAgICAgICAgICAgQ2FtZXJhQWNjZXNzLnJlcXVlc3QodmlkZW8sIHRoaXMuX2NvbmZpZy5pbnB1dFN0cmVhbS5jb25zdHJhaW50cylcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB0aGlzLl9pbnB1dFN0cmVhbS50cmlnZ2VyKCdjYW5yZWNvcmQnKSwgZXJyID0+IGNhbGxiYWNrKGVycikpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5faW5wdXRTdHJlYW0uc2V0QXR0cmlidXRlKCdwcmVsb2FkJywgJ2F1dG8nKTtcbiAgICAgICAgdGhpcy5faW5wdXRTdHJlYW0uY29uZmlnID0gdGhpcy5fY29uZmlnLmlucHV0U3RyZWFtO1xuICAgICAgICB0aGlzLl9pbnB1dFN0cmVhbS5hZGRFdmVudExpc3RlbmVyKCdjYW5yZWNvcmQnLCB0aGlzLl9jYW5SZWNvcmQuYmluZCh0aGlzLCBjYWxsYmFjaykpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2dldFZpZXdQb3J0KCk6IEhUTUxFbGVtZW50IHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5fY29uZmlnLmlucHV0U3RyZWFtLnRhcmdldDtcbiAgICAgICAgLy8gQ2hlY2sgaWYgdGFyZ2V0IGlzIGFscmVhZHkgYSBET00gZWxlbWVudFxuICAgICAgICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBVc2UgJyNpbnRlcmFjdGl2ZS52aWV3cG9ydCcgYXMgYSBmYWxsYmFjayBzZWxlY3RvciAoYmFja3dhcmRzIGNvbXBhdGliaWxpdHkpXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RvciA9IHR5cGVvZiB0YXJnZXQgPT09ICdzdHJpbmcnID8gdGFyZ2V0IDogJyNpbnRlcmFjdGl2ZS52aWV3cG9ydCc7XG4gICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9jYW5SZWNvcmQoY2I6ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICAgICAgY2hlY2tJbWFnZUNvbnN0cmFpbnRzKHRoaXMuX2lucHV0U3RyZWFtLCB0aGlzLl9jb25maWcubG9jYXRvcik7XG4gICAgICAgIHRoaXMuX2luaXRDYW52YXMoKTtcbiAgICAgICAgdGhpcy5fZnJhbWVHcmFiYmVyID0gbmV3IEZyYW1lR3JhYmJlcih0aGlzLl9pbnB1dFN0cmVhbSwgdGhpcy5fY2FudmFzQ29udGFpbmVyLmRvbS5pbWFnZSk7XG5cbiAgICAgICAgdGhpcy5fYWRqdXN0V29ya2VyUG9vbCh0aGlzLl9jb25maWcubnVtT2ZXb3JrZXJzLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5fY29uZmlnLm51bU9mV29ya2VycyA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2luaXRpYWxpemVEYXRhKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX2lucHV0U3RyZWFtLnBsYXkoKTtcbiAgICAgICAgICAgIGNiKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2luaXRDYW52YXMoKTogdm9pZCB7XG4gICAgICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBjb25zdCB2aWV3cG9ydCA9IHRoaXMuX2dldFZpZXdQb3J0KCk7XG4gICAgICAgICAgICB0aGlzLl9jYW52YXNDb250YWluZXIuZG9tLmltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FudmFzLmltZ0J1ZmZlcicpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9jYW52YXNDb250YWluZXIuZG9tLmltYWdlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2FudmFzQ29udGFpbmVyLmRvbS5pbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2NhbnZhc0NvbnRhaW5lci5kb20uaW1hZ2UuY2xhc3NOYW1lID0gJ2ltZ0J1ZmZlcic7XG4gICAgICAgICAgICAgICAgaWYgKHZpZXdwb3J0ICYmIHRoaXMuX2NvbmZpZy5pbnB1dFN0cmVhbS50eXBlID09PSAnSW1hZ2VTdHJlYW0nKSB7XG4gICAgICAgICAgICAgICAgICAgIHZpZXdwb3J0LmFwcGVuZENoaWxkKHRoaXMuX2NhbnZhc0NvbnRhaW5lci5kb20uaW1hZ2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2NhbnZhc0NvbnRhaW5lci5jdHguaW1hZ2UgPSB0aGlzLl9jYW52YXNDb250YWluZXIuZG9tLmltYWdlLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgICAgICB0aGlzLl9jYW52YXNDb250YWluZXIuZG9tLmltYWdlLndpZHRoID0gdGhpcy5faW5wdXRTdHJlYW0uY2FudmFzV2lkdGg7XG4gICAgICAgICAgICB0aGlzLl9jYW52YXNDb250YWluZXIuZG9tLmltYWdlLmhlaWdodCA9IHRoaXMuX2lucHV0U3RyZWFtLmNhbnZhc0hlaWdodDtcblxuICAgICAgICAgICAgdGhpcy5fY2FudmFzQ29udGFpbmVyLmRvbS5vdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FudmFzLmRyYXdpbmdCdWZmZXInKTtcbiAgICAgICAgICAgIGlmICghdGhpcy5fY2FudmFzQ29udGFpbmVyLmRvbS5vdmVybGF5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2FudmFzQ29udGFpbmVyLmRvbS5vdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2FudmFzQ29udGFpbmVyLmRvbS5vdmVybGF5LmNsYXNzTmFtZSA9ICdkcmF3aW5nQnVmZmVyJztcbiAgICAgICAgICAgICAgICBpZiAodmlld3BvcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmlld3BvcnQuYXBwZW5kQ2hpbGQodGhpcy5fY2FudmFzQ29udGFpbmVyLmRvbS5vdmVybGF5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgY2xlYXJGaXggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuICAgICAgICAgICAgICAgIGNsZWFyRml4LnNldEF0dHJpYnV0ZSgnY2xlYXInLCAnYWxsJyk7XG4gICAgICAgICAgICAgICAgaWYgKHZpZXdwb3J0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZpZXdwb3J0LmFwcGVuZENoaWxkKGNsZWFyRml4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9jYW52YXNDb250YWluZXIuY3R4Lm92ZXJsYXkgPSB0aGlzLl9jYW52YXNDb250YWluZXIuZG9tLm92ZXJsYXkuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgICAgIHRoaXMuX2NhbnZhc0NvbnRhaW5lci5kb20ub3ZlcmxheS53aWR0aCA9IHRoaXMuX2lucHV0U3RyZWFtLmNhbnZhc1dpZHRoO1xuICAgICAgICAgICAgdGhpcy5fY2FudmFzQ29udGFpbmVyLmRvbS5vdmVybGF5LmhlaWdodCA9IHRoaXMuX2lucHV0U3RyZWFtLmNhbnZhc0hlaWdodDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX2luaXRCdWZmZXJzKGltYWdlV3JhcHBlcj86IEltYWdlV3JhcHBlcik6IHZvaWQge1xuICAgICAgICBpZiAoaW1hZ2VXcmFwcGVyKSB7XG4gICAgICAgICAgICB0aGlzLl9pbnB1dEltYWdlV3JhcHBlciA9IGltYWdlV3JhcHBlcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2lucHV0SW1hZ2VXcmFwcGVyID0gbmV3IEltYWdlV3JhcHBlcih7XG4gICAgICAgICAgICAgICAgeDogdGhpcy5faW5wdXRTdHJlYW0ud2lkdGgsXG4gICAgICAgICAgICAgICAgeTogdGhpcy5faW5wdXRTdHJlYW0uaGVpZ2h0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9pbnB1dEltYWdlV3JhcHBlci5zaXplKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9ib3hTaXplID0gW1xuICAgICAgICAgICAgeyB4OiAwLCB5OiAwIH0sXG4gICAgICAgICAgICB7IHg6IDAsIHk6IHRoaXMuX2lucHV0SW1hZ2VXcmFwcGVyLnNpemUueSB9LFxuICAgICAgICAgICAgeyB4OiB0aGlzLl9pbnB1dEltYWdlV3JhcHBlci5zaXplLngsIHk6IHRoaXMuX2lucHV0SW1hZ2VXcmFwcGVyLnNpemUueSB9LFxuICAgICAgICAgICAgeyB4OiB0aGlzLl9pbnB1dEltYWdlV3JhcHBlci5zaXplLngsIHk6IDAgfVxuICAgICAgICBdO1xuICAgICAgICB0aGlzLl9sb2NhdG9yID0gbmV3IEJhcmNvZGVMb2NhdG9yKHRoaXMuX2lucHV0SW1hZ2VXcmFwcGVyLCB0aGlzLl9jb25maWcubG9jYXRvcik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZ2V0Qm91bmRpbmdCb3hlcygpOiBBcnJheTxCb3g+IHtcbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy5sb2NhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9sb2NhdG9yLmxvY2F0ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFtbXG4gICAgICAgICAgICAgICAgdGhpcy5fYm94U2l6ZVswXSxcbiAgICAgICAgICAgICAgICB0aGlzLl9ib3hTaXplWzFdLFxuICAgICAgICAgICAgICAgIHRoaXMuX2JveFNpemVbMl0sXG4gICAgICAgICAgICAgICAgdGhpcy5fYm94U2l6ZVszXVxuICAgICAgICAgICAgXV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF90cmFuc2Zvcm0ocG9seWdvbjogUmVhZG9ubHlBcnJheTxQb2ludD4sIG9mZnNldDogUG9pbnQpOiB2b2lkIHtcbiAgICAgICAgcG9seWdvbi5mb3JFYWNoKHZlcnRleCA9PiB7XG4gICAgICAgICAgICB2ZXJ0ZXgueCArPSBvZmZzZXQueDtcbiAgICAgICAgICAgIHZlcnRleC55ICs9IG9mZnNldC55O1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHByaXZhdGUgX3RyYW5zZm9ybVJlc3VsdChyZXN1bHQ6IFF1YWdnYUJhcmNvZGUsIG9mZnNldDogUG9pbnQpOiB2b2lkIHtcbiAgICAgICAgaWYgKHJlc3VsdC5iYXJjb2Rlcykge1xuICAgICAgICAgICAgcmVzdWx0LmJhcmNvZGVzLmZvckVhY2goYmFyY29kZSA9PiB0aGlzLl90cmFuc2Zvcm1SZXN1bHQoYmFyY29kZSwgb2Zmc2V0KSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVzdWx0LmxpbmUpIHtcbiAgICAgICAgICAgIHRoaXMuX3RyYW5zZm9ybShyZXN1bHQubGluZSwgb2Zmc2V0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXN1bHQuYm94KSB7XG4gICAgICAgICAgICB0aGlzLl90cmFuc2Zvcm0ocmVzdWx0LmJveCwgb2Zmc2V0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXN1bHQuYm94ZXMpIHtcbiAgICAgICAgICAgIHJlc3VsdC5ib3hlcy5mb3JFYWNoKGJveCA9PiB0aGlzLl90cmFuc2Zvcm0oYm94LCBvZmZzZXQpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX2FkZFJlc3VsdChyZXN1bHQ6IFF1YWdnYUJhcmNvZGUsIGltYWdlRGF0YTogVWludDhBcnJheSwgY2FudmFzV2lkdGg6IG51bWJlciwgY2FudmFzSGVpZ2h0OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKGltYWdlRGF0YSAmJiB0aGlzLl9yZXN1bHRDb2xsZWN0b3IpIHtcbiAgICAgICAgICAgIGlmIChyZXN1bHQuYmFyY29kZXMpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuYmFyY29kZXMuZm9yRWFjaCgoeyBjb2RlUmVzdWx0IH0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvZGVSZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3Jlc3VsdENvbGxlY3Rvci5hZGRSZXN1bHQoaW1hZ2VEYXRhLCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0LCBjb2RlUmVzdWx0KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5jb2RlUmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVzdWx0Q29sbGVjdG9yLmFkZFJlc3VsdChpbWFnZURhdGEsIGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQsIHJlc3VsdC5jb2RlUmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX2hhc0NvZGVSZXN1bHQocmVzdWx0OiBRdWFnZ2FCYXJjb2RlKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiByZXN1bHQgJiYgKCEhcmVzdWx0LmNvZGVSZXN1bHQgfHwgcmVzdWx0LmJhcmNvZGVzICYmIHJlc3VsdC5iYXJjb2Rlcy5zb21lKGJhcmNvZGUgPT4gISFiYXJjb2RlLmNvZGVSZXN1bHQpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9wdWJsaXNoUmVzdWx0KHJlc3VsdD86IFF1YWdnYUJhcmNvZGUsIGltYWdlRGF0YT86IFVpbnQ4QXJyYXkpOiB2b2lkIHtcbiAgICAgICAgbGV0IHJlc3VsdFRvUHVibGlzaDogUXVhZ2dhQmFyY29kZSB8IEFycmF5PFF1YWdnYUJhcmNvZGU+ID0gcmVzdWx0O1xuXG4gICAgICAgIGlmIChyZXN1bHQgJiYgdGhpcy5fb25VSVRocmVhZCkge1xuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0ID0gdGhpcy5faW5wdXRTdHJlYW0udG9wTGVmdDtcblxuICAgICAgICAgICAgaWYgKG9mZnNldC54ICE9PSAwIHx8IG9mZnNldC55ICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdHJhbnNmb3JtUmVzdWx0KHJlc3VsdCwgb2Zmc2V0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fYWRkUmVzdWx0KHJlc3VsdCwgaW1hZ2VEYXRhLCB0aGlzLl9pbnB1dFN0cmVhbS5jYW52YXNXaWR0aCwgdGhpcy5faW5wdXRTdHJlYW0uY2FudmFzSGVpZ2h0KTtcbiAgICAgICAgICAgIHJlc3VsdFRvUHVibGlzaCA9IHJlc3VsdC5iYXJjb2RlcyB8fCByZXN1bHQ7XG4gICAgICAgIH1cblxuICAgICAgICBFdmVudHMucHVibGlzaCgncHJvY2Vzc2VkJywgcmVzdWx0VG9QdWJsaXNoKTtcbiAgICAgICAgaWYgKHRoaXMuX2hhc0NvZGVSZXN1bHQocmVzdWx0KSkge1xuICAgICAgICAgICAgRXZlbnRzLnB1Ymxpc2goJ2RldGVjdGVkJywgcmVzdWx0VG9QdWJsaXNoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX2xvY2F0ZUFuZERlY29kZSgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgYm94ZXMgPSB0aGlzLl9nZXRCb3VuZGluZ0JveGVzKCk7XG5cbiAgICAgICAgaWYgKGJveGVzKSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLl9kZWNvZGVyLmRlY29kZUZyb21Cb3VuZGluZ0JveGVzKGJveGVzKSB8fCB7fTtcbiAgICAgICAgICAgIHJlc3VsdC5ib3hlcyA9IGJveGVzO1xuICAgICAgICAgICAgdGhpcy5fcHVibGlzaFJlc3VsdChyZXN1bHQsIHRoaXMuX2lucHV0SW1hZ2VXcmFwcGVyLmRhdGEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fcHVibGlzaFJlc3VsdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfdXBkYXRlKCk6IHZvaWQge1xuICAgICAgICBsZXQgYXZhaWxhYmxlV29ya2VyO1xuXG4gICAgICAgIGlmICh0aGlzLl9vblVJVGhyZWFkKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fd29ya2VyUG9vbC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgYXZhaWxhYmxlV29ya2VyID0gdGhpcy5fd29ya2VyUG9vbC5maW5kKHdvcmtlclRocmVhZCA9PiAhd29ya2VyVGhyZWFkLmJ1c3kpO1xuICAgICAgICAgICAgICAgIGlmIChhdmFpbGFibGVXb3JrZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZnJhbWVHcmFiYmVyLmF0dGFjaERhdGEoYXZhaWxhYmxlV29ya2VyLmltYWdlRGF0YSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuOyAvLyBhbGwgd29ya2VycyBhcmUgYnVzeVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZnJhbWVHcmFiYmVyLmF0dGFjaERhdGEodGhpcy5faW5wdXRJbWFnZVdyYXBwZXIuZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5fZnJhbWVHcmFiYmVyLmdyYWIoKSkge1xuICAgICAgICAgICAgICAgIGlmIChhdmFpbGFibGVXb3JrZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgYXZhaWxhYmxlV29ya2VyLmJ1c3kgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBhdmFpbGFibGVXb3JrZXIud29ya2VyLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNtZDogJ3Byb2Nlc3MnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VEYXRhOiBhdmFpbGFibGVXb3JrZXIuaW1hZ2VEYXRhXG4gICAgICAgICAgICAgICAgICAgIH0sIFthdmFpbGFibGVXb3JrZXIuaW1hZ2VEYXRhLmJ1ZmZlcl0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvY2F0ZUFuZERlY29kZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2xvY2F0ZUFuZERlY29kZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfc3RhcnRDb250aW51b3VzVXBkYXRlKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBkZWxheSA9IDEwMDAgLyAodGhpcy5fY29uZmlnLmZyZXF1ZW5jeSB8fCA2MCk7XG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgICAgICBsZXQgbmV4dCA9IG51bGw7XG4gICAgICAgIHRoaXMuX3N0b3BwZWQgPSBmYWxzZTtcblxuICAgICAgICAoZnVuY3Rpb24gZnJhbWUodGltZXN0YW1wKTogdm9pZCB7XG4gICAgICAgICAgICBuZXh0ID0gbmV4dCB8fCB0aW1lc3RhbXA7XG4gICAgICAgICAgICBpZiAoIXRoYXQuX3N0b3BwZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGltZXN0YW1wID49IG5leHQpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dCArPSBkZWxheTtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5fdXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnJhbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KHBlcmZvcm1hbmNlLm5vdygpKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaW5pdFdvcmtlcihjYjogKHdvcmtlclRocmVhZDogV29ya2VyVGhyZWFkKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGJsb2JVUkwgPSB0aGlzLl9nZW5lcmF0ZVdvcmtlckJsb2IoKTtcbiAgICAgICAgY29uc3Qgd29ya2VyVGhyZWFkID0ge1xuICAgICAgICAgICAgd29ya2VyOiBuZXcgV29ya2VyKGJsb2JVUkwpLFxuICAgICAgICAgICAgaW1hZ2VEYXRhOiBuZXcgVWludDhBcnJheSh0aGlzLl9pbnB1dFN0cmVhbS53aWR0aCAqIHRoaXMuX2lucHV0U3RyZWFtLmhlaWdodCksXG4gICAgICAgICAgICBidXN5OiB0cnVlXG4gICAgICAgIH07XG5cbiAgICAgICAgd29ya2VyVGhyZWFkLndvcmtlci5vbm1lc3NhZ2UgPSAoeyBkYXRhIH0pID0+IHtcbiAgICAgICAgICAgIGlmIChkYXRhLmV2ZW50ID09PSAnaW5pdGlhbGl6ZWQnKSB7XG4gICAgICAgICAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTChibG9iVVJMKTtcbiAgICAgICAgICAgICAgICB3b3JrZXJUaHJlYWQuYnVzeSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHdvcmtlclRocmVhZC5pbWFnZURhdGEgPSBuZXcgVWludDhBcnJheShkYXRhLmltYWdlRGF0YSk7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1dvcmtlciBpbml0aWFsaXplZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYih3b3JrZXJUaHJlYWQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRhLmV2ZW50ID09PSAncHJvY2Vzc2VkJykge1xuICAgICAgICAgICAgICAgIHdvcmtlclRocmVhZC5idXN5ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgd29ya2VyVGhyZWFkLmltYWdlRGF0YSA9IG5ldyBVaW50OEFycmF5KGRhdGEuaW1hZ2VEYXRhKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9wdWJsaXNoUmVzdWx0KGRhdGEucmVzdWx0LCB3b3JrZXJUaHJlYWQuaW1hZ2VEYXRhKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS5ldmVudCA9PT0gJ2Vycm9yJykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdXb3JrZXIgZXJyb3I6JywgZGF0YS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgd29ya2VyVGhyZWFkLndvcmtlci5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICBjbWQ6ICdpbml0JyxcbiAgICAgICAgICAgIHNpemU6IHsgeDogdGhpcy5faW5wdXRTdHJlYW0ud2lkdGgsIHk6IHRoaXMuX2lucHV0U3RyZWFtLmhlaWdodCB9LFxuICAgICAgICAgICAgaW1hZ2VEYXRhOiB3b3JrZXJUaHJlYWQuaW1hZ2VEYXRhLFxuICAgICAgICAgICAgY29uZmlnOiBtZXJnZSh0aGlzLl9jb25maWcsIHsgaW5wdXRTdHJlYW06IHsgdGFyZ2V0OiBudWxsIH0gfSlcbiAgICAgICAgfSwgW3dvcmtlclRocmVhZC5pbWFnZURhdGEuYnVmZmVyXSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfd29ya2VySW50ZXJmYWNlKGZhY3Rvcnk6IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IG9yaWdpbiA9ICcqJztcbiAgICAgICAgbGV0IHF1YWdnYTogUXVhZ2dhO1xuICAgICAgICBsZXQgaW1hZ2VXcmFwcGVyOiBJbWFnZVdyYXBwZXI7XG5cbiAgICAgICAgaWYgKGZhY3RvcnkpIHtcbiAgICAgICAgICAgIHF1YWdnYSA9IGZhY3RvcnkoKS5kZWZhdWx0O1xuICAgICAgICAgICAgaWYgKCFxdWFnZ2EpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnBvc3RNZXNzYWdlKHsgZXZlbnQ6ICdlcnJvcicsIG1lc3NhZ2U6ICdRdWFnZ2EgY291bGQgbm90IGJlIGNyZWF0ZWQnIH0sIG9yaWdpbik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgc2VsZi5vbm1lc3NhZ2UgPSAoeyBkYXRhIH0pID0+IHtcbiAgICAgICAgICAgIGlmIChkYXRhLmNtZCA9PT0gJ2luaXQnKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgX2NvbmZpZzogUXVhZ2dhQ29uZmlnID0gZGF0YS5jb25maWc7XG4gICAgICAgICAgICAgICAgX2NvbmZpZy5udW1PZldvcmtlcnMgPSAwO1xuICAgICAgICAgICAgICAgIGltYWdlV3JhcHBlciA9IG5ldyBJbWFnZVdyYXBwZXIoeyB4OiBkYXRhLnNpemUueCwgeTogZGF0YS5zaXplLnkgfSwgbmV3IFVpbnQ4QXJyYXkoZGF0YS5pbWFnZURhdGEpKTtcbiAgICAgICAgICAgICAgICBxdWFnZ2EgPSBuZXcgUXVhZ2dhKF9jb25maWcsICgpID0+IHNlbGYucG9zdE1lc3NhZ2UoXG4gICAgICAgICAgICAgICAgICAgIHsgZXZlbnQ6ICdpbml0aWFsaXplZCcsIGltYWdlRGF0YTogaW1hZ2VXcmFwcGVyLmRhdGEgfSwgb3JpZ2luLCBbaW1hZ2VXcmFwcGVyLmRhdGEuYnVmZmVyXSksXG4gICAgICAgICAgICAgICAgICAgIGltYWdlV3JhcHBlclxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgcXVhZ2dhLm9uUHJvY2Vzc2VkKChyZXN1bHQ6IFF1YWdnYUJhcmNvZGUpID0+IHNlbGYucG9zdE1lc3NhZ2UoXG4gICAgICAgICAgICAgICAgICAgIHsgZXZlbnQ6ICdwcm9jZXNzZWQnLCBpbWFnZURhdGE6IGltYWdlV3JhcHBlci5kYXRhLCByZXN1bHQgfSwgb3JpZ2luLCBbaW1hZ2VXcmFwcGVyLmRhdGEuYnVmZmVyXVxuICAgICAgICAgICAgICAgICkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRhLmNtZCA9PT0gJ3Byb2Nlc3MnKSB7XG4gICAgICAgICAgICAgICAgaW1hZ2VXcmFwcGVyLmRhdGEgPSBuZXcgVWludDhBcnJheShkYXRhLmltYWdlRGF0YSk7XG4gICAgICAgICAgICAgICAgcXVhZ2dhLnN0YXJ0KCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEuY21kID09PSAnc2V0UmVhZGVycycpIHtcbiAgICAgICAgICAgICAgICBxdWFnZ2Euc2V0UmVhZGVycyhkYXRhLnJlYWRlcnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHByaXZhdGUgX2dlbmVyYXRlV29ya2VyQmxvYigpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW2AoJHt0aGlzLl93b3JrZXJJbnRlcmZhY2UudG9TdHJpbmcoKX0pKCR7X19mYWN0b3J5U291cmNlX18gfHwgJyd9KTtgXSxcbiAgICAgICAgICAgIHsgdHlwZTogJ3RleHQvamF2YXNjcmlwdCcgfSk7XG5cbiAgICAgICAgcmV0dXJuIHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2FkanVzdFdvcmtlclBvb2woY2FwYWNpdHk6IG51bWJlciwgY2I/OiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGluY3JlYXNlQnkgPSBjYXBhY2l0eSAtIHRoaXMuX3dvcmtlclBvb2wubGVuZ3RoO1xuICAgICAgICBpZiAoaW5jcmVhc2VCeSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGNiICYmIGNiKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGluY3JlYXNlQnkgPCAwKSB7XG4gICAgICAgICAgICB0aGlzLl93b3JrZXJQb29sLnNsaWNlKGluY3JlYXNlQnkpLmZvckVhY2goKHsgd29ya2VyIH0pID0+IHtcbiAgICAgICAgICAgICAgICB3b3JrZXIudGVybWluYXRlKCk7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1dvcmtlciB0ZXJtaW5hdGVkIScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5fd29ya2VyUG9vbCA9IHRoaXMuX3dvcmtlclBvb2wuc2xpY2UoMCwgaW5jcmVhc2VCeSk7XG4gICAgICAgICAgICByZXR1cm4gY2IgJiYgY2IoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5jcmVhc2VCeTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5faW5pdFdvcmtlcih3b3JrZXJUaHJlYWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl93b3JrZXJQb29sLnB1c2god29ya2VyVGhyZWFkKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3dvcmtlclBvb2wubGVuZ3RoID49IGNhcGFjaXR5ICYmIGNiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFF1YWdnYTsiLCJpbXBvcnQgeyBCYXJjb2RlLCBCYXJjb2RlSW5mbywgQmFyY29kZVJlYWRlciwgQmFyY29kZVJlYWRlckNvbmZpZyB9IGZyb20gJy4vYmFyY29kZS1yZWFkZXInO1xuXG5jb25zdCBOID0gMTtcbmNvbnN0IFcgPSAzO1xuY29uc3QgU1RBUlRfUEFUVEVSTiA9IFtXLCBOLCBXLCBOLCBOLCBOXTtcbmNvbnN0IFNUT1BfUEFUVEVSTiA9IFtXLCBOLCBOLCBOLCBXXTtcbmNvbnN0IENPREVfUEFUVEVSTiA9IFtcbiAgICBbTiwgTiwgVywgVywgTl0sXG4gICAgW1csIE4sIE4sIE4sIFddLFxuICAgIFtOLCBXLCBOLCBOLCBXXSxcbiAgICBbVywgVywgTiwgTiwgTl0sXG4gICAgW04sIE4sIFcsIE4sIFddLFxuICAgIFtXLCBOLCBXLCBOLCBOXSxcbiAgICBbTiwgVywgVywgTiwgTl0sXG4gICAgW04sIE4sIE4sIFcsIFddLFxuICAgIFtXLCBOLCBOLCBXLCBOXSxcbiAgICBbTiwgVywgTiwgVywgTl1cbl07XG5jb25zdCBzdGFydFBhdHRlcm5MZW5ndGggPSBTVEFSVF9QQVRURVJOLnJlZHVjZSgoc3VtLCB2YWwpID0+IHN1bSArIHZhbCwgMCk7XG5cbmV4cG9ydCBjbGFzcyBUd29PZkZpdmVSZWFkZXIgZXh0ZW5kcyBCYXJjb2RlUmVhZGVyIHtcbiAgICBwcml2YXRlIF9iYXJTcGFjZVJhdGlvOiBbbnVtYmVyLCBudW1iZXJdO1xuXG4gICAgY29uc3RydWN0b3IoY29uZmlnPzogQmFyY29kZVJlYWRlckNvbmZpZykge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuXG4gICAgICAgIHRoaXMuX2JhclNwYWNlUmF0aW8gPSBbMSwgMV07XG4gICAgICAgIHRoaXMuX2Zvcm1hdCA9ICcyb2Y1JztcbiAgICAgICAgdGhpcy5fc2luZ2xlQ29kZUVycm9yID0gMC43ODtcbiAgICAgICAgdGhpcy5fYXZlcmFnZUNvZGVFcnJvciA9IDAuMzA7XG4gICAgfVxuXG4gICAgZGVjb2RlKCk6IEJhcmNvZGUge1xuICAgICAgICBjb25zdCBzdGFydEluZm8gPSB0aGlzLl9maW5kU3RhcnQoKTtcblxuICAgICAgICBpZiAoIXN0YXJ0SW5mbykge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBlbmRJbmZvID0gdGhpcy5fZmluZEVuZCgpO1xuXG4gICAgICAgIGlmICghZW5kSW5mbykge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjb3VudGVycyA9IHRoaXMuX2ZpbGxDb3VudGVycyhzdGFydEluZm8uZW5kLCBlbmRJbmZvLnN0YXJ0LCAwKTtcblxuICAgICAgICBpZiAoY291bnRlcnMubGVuZ3RoICUgMTAgIT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEFycmF5PG51bWJlcj4oKTtcbiAgICAgICAgY29uc3QgZGVjb2RlZENvZGVzID0gbmV3IEFycmF5PEJhcmNvZGVJbmZvPigpO1xuXG4gICAgICAgIGRlY29kZWRDb2Rlcy5wdXNoKHN0YXJ0SW5mbyk7XG5cbiAgICAgICAgY29uc3QgY29kZSA9IHRoaXMuX2RlY29kZVBheWxvYWQoY291bnRlcnMsIHJlc3VsdCwgZGVjb2RlZENvZGVzKTtcblxuICAgICAgICBpZiAoIWNvZGUgfHwgcmVzdWx0Lmxlbmd0aCA8IDUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVjb2RlZENvZGVzLnB1c2goZW5kSW5mbyk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvZGU6IHJlc3VsdC5qb2luKCcnKSxcbiAgICAgICAgICAgIHN0YXJ0OiBzdGFydEluZm8uc3RhcnQsXG4gICAgICAgICAgICBlbmQ6IGVuZEluZm8uZW5kLFxuICAgICAgICAgICAgc3RhcnRJbmZvLFxuICAgICAgICAgICAgZGVjb2RlZENvZGVzXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9maW5kU3RhcnQoKTogQmFyY29kZUluZm8ge1xuICAgICAgICBsZXQgb2Zmc2V0ID0gdGhpcy5fbmV4dFNldCh0aGlzLl9yb3cpO1xuICAgICAgICBsZXQgbmFycm93QmFyV2lkdGggPSAxO1xuICAgICAgICBsZXQgc3RhcnRJbmZvOiBCYXJjb2RlSW5mbztcblxuICAgICAgICB3aGlsZSAoIXN0YXJ0SW5mbykge1xuICAgICAgICAgICAgc3RhcnRJbmZvID0gdGhpcy5fZmluZFBhdHRlcm4oU1RBUlRfUEFUVEVSTiwgb2Zmc2V0LCAwLCB0cnVlKTtcblxuICAgICAgICAgICAgaWYgKCFzdGFydEluZm8pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbmFycm93QmFyV2lkdGggPSAoc3RhcnRJbmZvLmVuZCAtIHN0YXJ0SW5mby5zdGFydCkgLyBzdGFydFBhdHRlcm5MZW5ndGggfCAwO1xuICAgICAgICAgICAgY29uc3QgbGVhZGluZ1doaXRlc3BhY2VTdGFydCA9IHN0YXJ0SW5mby5zdGFydCAtIG5hcnJvd0JhcldpZHRoICogNTtcblxuICAgICAgICAgICAgaWYgKGxlYWRpbmdXaGl0ZXNwYWNlU3RhcnQgPj0gMCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9tYXRjaFJhbmdlKGxlYWRpbmdXaGl0ZXNwYWNlU3RhcnQsIHN0YXJ0SW5mby5zdGFydCwgMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0YXJ0SW5mbztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG9mZnNldCA9IHN0YXJ0SW5mby5lbmQ7XG4gICAgICAgICAgICBzdGFydEluZm8gPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF92ZXJpZnlUcmFpbGluZ1doaXRlc3BhY2UoZW5kSW5mbzogQmFyY29kZUluZm8pOiBCYXJjb2RlSW5mbyB7XG4gICAgICAgIGNvbnN0IHRyYWlsaW5nV2hpdGVzcGFjZUVuZCA9IGVuZEluZm8uZW5kICsgKGVuZEluZm8uZW5kIC0gZW5kSW5mby5zdGFydCkgLyAyO1xuXG4gICAgICAgIGlmICh0cmFpbGluZ1doaXRlc3BhY2VFbmQgPCB0aGlzLl9yb3cubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fbWF0Y2hSYW5nZShlbmRJbmZvLmVuZCwgdHJhaWxpbmdXaGl0ZXNwYWNlRW5kLCAwKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbmRJbmZvO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9maW5kRW5kKCk6IEJhcmNvZGVJbmZvIHtcbiAgICAgICAgdGhpcy5fcm93LnJldmVyc2UoKTtcblxuICAgICAgICBjb25zdCBvZmZzZXQgPSB0aGlzLl9uZXh0U2V0KHRoaXMuX3Jvdyk7XG4gICAgICAgIGNvbnN0IGVuZEluZm8gPSB0aGlzLl9maW5kUGF0dGVybihTVE9QX1BBVFRFUk4sIG9mZnNldCwgMCwgdHJ1ZSk7XG5cbiAgICAgICAgdGhpcy5fcm93LnJldmVyc2UoKTtcblxuICAgICAgICBpZiAoZW5kSW5mbyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvLyByZXZlcnNlIG51bWJlcnNcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBlbmRJbmZvLnN0YXJ0O1xuICAgICAgICBlbmRJbmZvLnN0YXJ0ID0gdGhpcy5fcm93Lmxlbmd0aCAtIGVuZEluZm8uZW5kO1xuICAgICAgICBlbmRJbmZvLmVuZCA9IHRoaXMuX3Jvdy5sZW5ndGggLSBzdGFydDtcblxuICAgICAgICByZXR1cm4gZW5kSW5mbyAhPT0gbnVsbCA/IHRoaXMuX3ZlcmlmeVRyYWlsaW5nV2hpdGVzcGFjZShlbmRJbmZvKSA6IG51bGw7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9kZWNvZGVDb2RlKGNvdW50ZXI6IFJlYWRvbmx5QXJyYXk8bnVtYmVyPik6IEJhcmNvZGVJbmZvIHtcbiAgICAgICAgY29uc3QgYmVzdE1hdGNoOiBCYXJjb2RlSW5mbyA9IHtcbiAgICAgICAgICAgIGVycm9yOiBOdW1iZXIuTUFYX1ZBTFVFLFxuICAgICAgICAgICAgY29kZTogLTEsXG4gICAgICAgICAgICBzdGFydDogMCxcbiAgICAgICAgICAgIGVuZDogMFxuICAgICAgICB9O1xuXG4gICAgICAgIGZvciAobGV0IGNvZGUgPSAwOyBjb2RlIDwgQ09ERV9QQVRURVJOLmxlbmd0aDsgY29kZSsrKSB7XG4gICAgICAgICAgICBjb25zdCBlcnJvciA9IHRoaXMuX21hdGNoUGF0dGVybihjb3VudGVyLCBDT0RFX1BBVFRFUk5bY29kZV0pO1xuICAgICAgICAgICAgaWYgKGVycm9yIDwgYmVzdE1hdGNoLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgYmVzdE1hdGNoLmNvZGUgPSBjb2RlO1xuICAgICAgICAgICAgICAgIGJlc3RNYXRjaC5lcnJvciA9IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGJlc3RNYXRjaC5lcnJvciA8IHRoaXMuQVZFUkFHRV9DT0RFX0VSUk9SID8gYmVzdE1hdGNoIDogbnVsbDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2RlY29kZVBheWxvYWQoY291bnRlcnM6IFJlYWRvbmx5QXJyYXk8bnVtYmVyPiwgcmVzdWx0OiBBcnJheTxudW1iZXI+LCBkZWNvZGVkQ29kZXM6IEFycmF5PEJhcmNvZGVJbmZvPik6IEJhcmNvZGVJbmZvIHtcbiAgICAgICAgY29uc3QgY291bnRlckxlbmd0aCA9IGNvdW50ZXJzLmxlbmd0aDtcbiAgICAgICAgY29uc3QgY291bnRlciA9IFswLCAwLCAwLCAwLCAwXTtcbiAgICAgICAgbGV0IHBvcyA9IDA7XG4gICAgICAgIGxldCBjb2RlOiBCYXJjb2RlSW5mbztcblxuICAgICAgICB3aGlsZSAocG9zIDwgY291bnRlckxlbmd0aCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb3VudGVyW2ldID0gY291bnRlcnNbcG9zXSAqIHRoaXMuX2JhclNwYWNlUmF0aW9bMF07XG4gICAgICAgICAgICAgICAgcG9zICs9IDI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvZGUgPSB0aGlzLl9kZWNvZGVDb2RlKGNvdW50ZXIpO1xuXG4gICAgICAgICAgICBpZiAoIWNvZGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVzdWx0LnB1c2goY29kZS5jb2RlKTtcbiAgICAgICAgICAgIGRlY29kZWRDb2Rlcy5wdXNoKGNvZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvZGU7XG4gICAgfVxufVxuIiwiZXhwb3J0IGVudW0gQmFyY29kZURpcmVjdGlvbiB7XG4gICAgRm9yd2FyZCA9IDEsXG4gICAgUmV2ZXJzZSA9IC0xXG59O1xuXG5leHBvcnQgdHlwZSBCYXJjb2RlRm9ybWF0ID0gc3RyaW5nO1xuXG5leHBvcnQgdHlwZSBCYXJjb2RlUmVhZGVyVHlwZSA9IHN0cmluZztcblxuZXhwb3J0IHR5cGUgQmFyY29kZVJlYWRlckRlY2xhcmF0aW9uID0gQmFyY29kZVJlYWRlclR5cGUgfCB7IGZvcm1hdDogQmFyY29kZVJlYWRlclR5cGU7IGNvbmZpZzogQmFyY29kZVJlYWRlckNvbmZpZzsgfTtcblxuZXhwb3J0IGludGVyZmFjZSBCYXJjb2RlUmVhZGVyQ29uZmlnIHtcbiAgICBub3JtYWxpemVCYXJTcGFjZVdpZHRoPzogYm9vbGVhbjtcbiAgICBzdXBwbGVtZW50cz86IEFycmF5PEJhcmNvZGVSZWFkZXJUeXBlPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCYXJjb2RlQ29ycmVjdGlvbiB7XG4gICAgYmFyOiBudW1iZXI7XG4gICAgc3BhY2U6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCYXJjb2RlSW5mbyB7XG4gICAgY29kZT86IG51bWJlcjtcbiAgICBjb3JyZWN0aW9uPzogQmFyY29kZUNvcnJlY3Rpb247XG4gICAgZW5kPzogbnVtYmVyO1xuICAgIGVuZENvdW50ZXI/OiBudW1iZXI7XG4gICAgZXJyb3I/OiBudW1iZXI7XG4gICAgc3RhcnQ/OiBudW1iZXI7XG4gICAgc3RhcnRDb3VudGVyPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJhcmNvZGUge1xuICAgIGNvZGU/OiBzdHJpbmc7XG4gICAgY29kZXNldD86IG51bWJlcjtcbiAgICBjb3JyZWN0aW9uPzogQmFyY29kZUNvcnJlY3Rpb247XG4gICAgZGVjb2RlZENvZGVzPzogQXJyYXk8c3RyaW5nIHwgQmFyY29kZUluZm8+O1xuICAgIGRpcmVjdGlvbj86IEJhcmNvZGVEaXJlY3Rpb247XG4gICAgZW5kPzogbnVtYmVyO1xuICAgIGVuZEluZm8/OiBCYXJjb2RlSW5mbztcbiAgICBmb3JtYXQ/OiBCYXJjb2RlRm9ybWF0O1xuICAgIHN0YXJ0PzogbnVtYmVyO1xuICAgIHN0YXJ0SW5mbz86IEJhcmNvZGVJbmZvO1xuICAgIHN1cHBsZW1lbnQ/OiBCYXJjb2RlO1xufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFyY29kZVJlYWRlciB7XG4gICAgcHJvdGVjdGVkIF9zaW5nbGVDb2RlRXJyb3I6IG51bWJlcjtcbiAgICBwcm90ZWN0ZWQgX2F2ZXJhZ2VDb2RlRXJyb3I6IG51bWJlcjtcbiAgICBwcm90ZWN0ZWQgX2Zvcm1hdDogQmFyY29kZUZvcm1hdDtcbiAgICBwcm90ZWN0ZWQgX3JvdzogQXJyYXk8bnVtYmVyPjtcblxuICAgIGNvbmZpZzogQmFyY29kZVJlYWRlckNvbmZpZztcbiAgICBzdXBwbGVtZW50czogQXJyYXk8QmFyY29kZVJlYWRlcj47XG5cbiAgICBzdGF0aWMgZ2V0IEV4Y2VwdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIFN0YXJ0Tm90Rm91bmRFeGNlcHRpb246ICdTdGFydC1JbmZvIHdhcyBub3QgZm91bmQhJyxcbiAgICAgICAgICAgIENvZGVOb3RGb3VuZEV4Y2VwdGlvbjogJ0NvZGUgY291bGQgbm90IGJlIGZvdW5kIScsXG4gICAgICAgICAgICBQYXR0ZXJuTm90Rm91bmRFeGNlcHRpb246ICdQYXR0ZXJuIGNvdWxkIG5vdCBiZSBmb3VuZCEnXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZ2V0IFNJTkdMRV9DT0RFX0VSUk9SKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zaW5nbGVDb2RlRXJyb3I7XG4gICAgfVxuXG4gICAgZ2V0IEFWRVJBR0VfQ09ERV9FUlJPUigpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fYXZlcmFnZUNvZGVFcnJvcjtcbiAgICB9XG5cbiAgICBnZXQgRk9STUFUKCk6IEJhcmNvZGVGb3JtYXQge1xuICAgICAgICByZXR1cm4gdGhpcy5fZm9ybWF0O1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZz86IEJhcmNvZGVSZWFkZXJDb25maWcsIHN1cHBsZW1lbnRzPzogQXJyYXk8QmFyY29kZVJlYWRlcj4pIHtcbiAgICAgICAgdGhpcy5fZm9ybWF0ID0gJ3Vua25vd24nO1xuICAgICAgICB0aGlzLl9yb3cgPSBbXTtcbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWcgfHwge307XG4gICAgICAgIHRoaXMuc3VwcGxlbWVudHMgPSBzdXBwbGVtZW50cztcbiAgICB9XG5cbiAgICBhYnN0cmFjdCBkZWNvZGUocm93PzogQXJyYXk8bnVtYmVyPiwgc3RhcnQ/OiBudW1iZXIpOiBCYXJjb2RlO1xuXG4gICAgcHJvdGVjdGVkIF9maW5kUGF0dGVybihwYXR0ZXJuOiBSZWFkb25seUFycmF5PG51bWJlcj4sIG9mZnNldDogbnVtYmVyLCBpc1doaXRlOiAwIHwgMSwgdHJ5SGFyZGVyOiBib29sZWFuKTogQmFyY29kZUluZm8ge1xuICAgICAgICBjb25zdCBjb3VudGVyID0gbmV3IEFycmF5PG51bWJlcj4ocGF0dGVybi5sZW5ndGgpO1xuICAgICAgICBjb25zdCBiZXN0TWF0Y2g6IEJhcmNvZGVJbmZvID0ge1xuICAgICAgICAgICAgZXJyb3I6IE51bWJlci5NQVhfVkFMVUUsXG4gICAgICAgICAgICBjb2RlOiAtMSxcbiAgICAgICAgICAgIHN0YXJ0OiAwLFxuICAgICAgICAgICAgZW5kOiAwXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGVwc2lsb24gPSB0aGlzLkFWRVJBR0VfQ09ERV9FUlJPUjtcbiAgICAgICAgbGV0IGNvdW50ZXJQb3MgPSAwO1xuXG4gICAgICAgIGlmICghb2Zmc2V0KSB7XG4gICAgICAgICAgICBvZmZzZXQgPSB0aGlzLl9uZXh0U2V0KHRoaXMuX3Jvdyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb3VudGVyLmZpbGwoMCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IG9mZnNldDsgaSA8IHRoaXMuX3Jvdy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3Jvd1tpXSBeIGlzV2hpdGUpIHtcbiAgICAgICAgICAgICAgICBjb3VudGVyW2NvdW50ZXJQb3NdKys7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChjb3VudGVyUG9zID09PSBjb3VudGVyLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXJyb3IgPSB0aGlzLl9tYXRjaFBhdHRlcm4oY291bnRlciwgcGF0dGVybik7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yIDwgZXBzaWxvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmVzdE1hdGNoLmVycm9yID0gZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICBiZXN0TWF0Y2guc3RhcnQgPSBpIC0gY291bnRlci5yZWR1Y2UoKHN1bSwgdmFsdWUpID0+IHN1bSArIHZhbHVlLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlc3RNYXRjaC5lbmQgPSBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJlc3RNYXRjaDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0cnlIYXJkZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY291bnRlci5sZW5ndGggLSAyOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVyW2pdID0gY291bnRlcltqICsgMl07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVyW2NvdW50ZXIubGVuZ3RoIC0gMl0gPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgY291bnRlcltjb3VudGVyLmxlbmd0aCAtIDFdID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ZXJQb3MtLTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnRlclBvcysrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb3VudGVyW2NvdW50ZXJQb3NdID0gMTtcbiAgICAgICAgICAgICAgICBpc1doaXRlID0gaXNXaGl0ZSA/IDAgOiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfbmV4dFVuc2V0KGxpbmU6IFJlYWRvbmx5QXJyYXk8bnVtYmVyPiwgc3RhcnQ/OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICBmb3IgKGxldCBpID0gc3RhcnQgfHwgMDsgaSA8IGxpbmUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICghbGluZVtpXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsaW5lLmxlbmd0aDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX25leHRTZXQobGluZTogUmVhZG9ubHlBcnJheTxudW1iZXI+LCBzdGFydD86IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIGZvciAobGV0IGkgPSBzdGFydCB8fCAwOyBpIDwgbGluZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGxpbmVbaV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGluZS5sZW5ndGg7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9tYXRjaFJhbmdlKHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyLCB2YWx1ZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIGZvciAobGV0IGkgPSBzdGFydCA8IDAgPyAwIDogc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3Jvd1tpXSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9tYXRjaFBhdHRlcm4oY291bnRlcjogUmVhZG9ubHlBcnJheTxudW1iZXI+LCBjb2RlOiBSZWFkb25seUFycmF5PG51bWJlcj4sIG1heFNpbmdsZUVycm9yPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgbGV0IGVycm9yID0gMDtcbiAgICAgICAgbGV0IHN1bSA9IDA7XG4gICAgICAgIGxldCBtb2R1bG8gPSAwO1xuXG4gICAgICAgIG1heFNpbmdsZUVycm9yID0gbWF4U2luZ2xlRXJyb3IgfHwgdGhpcy5TSU5HTEVfQ09ERV9FUlJPUiB8fCAxO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnRlci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgc3VtICs9IGNvdW50ZXJbaV07XG4gICAgICAgICAgICBtb2R1bG8gKz0gY29kZVtpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdW0gPCBtb2R1bG8pIHtcbiAgICAgICAgICAgIHJldHVybiBOdW1iZXIuTUFYX1ZBTFVFO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYmFyV2lkdGggPSBzdW0gLyBtb2R1bG87XG4gICAgICAgIG1heFNpbmdsZUVycm9yICo9IGJhcldpZHRoO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnRlci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY291bnQgPSBjb3VudGVyW2ldO1xuICAgICAgICAgICAgY29uc3Qgc2NhbGVkID0gY29kZVtpXSAqIGJhcldpZHRoO1xuICAgICAgICAgICAgY29uc3Qgc2luZ2xlRXJyb3IgPSBNYXRoLmFicyhjb3VudCAtIHNjYWxlZCkgLyBzY2FsZWQ7XG5cbiAgICAgICAgICAgIGlmIChzaW5nbGVFcnJvciA+IG1heFNpbmdsZUVycm9yKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE51bWJlci5NQVhfVkFMVUU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGVycm9yICs9IHNpbmdsZUVycm9yO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGVycm9yIC8gbW9kdWxvO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfY29ycmVjdEJhcnMoY291bnRlcjogQXJyYXk8bnVtYmVyPiwgY29ycmVjdGlvbjogbnVtYmVyLCBpbmRpY2VzOiBBcnJheTxudW1iZXI+KSB7XG4gICAgICAgIGxldCBsZW5ndGggPSBpbmRpY2VzLmxlbmd0aDtcbiAgICAgICAgbGV0IHRtcCA9IDA7XG5cbiAgICAgICAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgICAgICAgICB0bXAgPSBjb3VudGVyW2luZGljZXNbbGVuZ3RoXV0gKiAoMSAtICgoMSAtIGNvcnJlY3Rpb24pIC8gMikpO1xuICAgICAgICAgICAgaWYgKHRtcCA+IDEpIHtcbiAgICAgICAgICAgICAgICBjb3VudGVyW2luZGljZXNbbGVuZ3RoXV0gPSB0bXA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZWNvZGVQYXR0ZXJuKHBhdHRlcm46IEFycmF5PG51bWJlcj4pOiBCYXJjb2RlIHtcbiAgICAgICAgdGhpcy5fcm93ID0gcGF0dGVybjtcbiAgICAgICAgbGV0IHJlc3VsdCA9IHRoaXMuZGVjb2RlKCk7XG5cbiAgICAgICAgaWYgKHJlc3VsdCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5fcm93LnJldmVyc2UoKTtcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZGVjb2RlKCk7XG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmRpcmVjdGlvbiA9IEJhcmNvZGVEaXJlY3Rpb24uUmV2ZXJzZTtcbiAgICAgICAgICAgICAgICByZXN1bHQuc3RhcnQgPSB0aGlzLl9yb3cubGVuZ3RoIC0gcmVzdWx0LnN0YXJ0O1xuICAgICAgICAgICAgICAgIHJlc3VsdC5lbmQgPSB0aGlzLl9yb3cubGVuZ3RoIC0gcmVzdWx0LmVuZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdC5kaXJlY3Rpb24gPSBCYXJjb2RlRGlyZWN0aW9uLkZvcndhcmQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICByZXN1bHQuZm9ybWF0ID0gdGhpcy5GT1JNQVQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIF9maWxsQ291bnRlcnMob2Zmc2V0OiBudW1iZXIsIGVuZDogbnVtYmVyLCBpc1doaXRlOiAwIHwgMSk6IEFycmF5PG51bWJlcj4ge1xuICAgICAgICBjb25zdCBjb3VudGVycyA9IG5ldyBBcnJheTxudW1iZXI+KCk7XG4gICAgICAgIGxldCBjb3VudGVyUG9zID0gMDtcblxuICAgICAgICBjb3VudGVyc1tjb3VudGVyUG9zXSA9IDA7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IG9mZnNldDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fcm93W2ldIF4gaXNXaGl0ZSkge1xuICAgICAgICAgICAgICAgIGNvdW50ZXJzW2NvdW50ZXJQb3NdKys7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvdW50ZXJQb3MrKztcbiAgICAgICAgICAgICAgICBjb3VudGVyc1tjb3VudGVyUG9zXSA9IDE7XG4gICAgICAgICAgICAgICAgaXNXaGl0ZSA9IGlzV2hpdGUgPyAwIDogMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb3VudGVycztcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX3RvQ291bnRlcnMoc3RhcnQ6IG51bWJlciwgY291bnRlcnM6IFVpbnQxNkFycmF5KTogVWludDE2QXJyYXkge1xuICAgICAgICBjb25zdCBudW1Db3VudGVycyA9IGNvdW50ZXJzLmxlbmd0aDtcbiAgICAgICAgY29uc3QgZW5kID0gdGhpcy5fcm93Lmxlbmd0aDtcbiAgICAgICAgbGV0IGlzV2hpdGU6IDAgfCAxID0gdGhpcy5fcm93W3N0YXJ0XSA/IDAgOiAxO1xuICAgICAgICBsZXQgY291bnRlclBvcyA9IDA7XG5cbiAgICAgICAgY291bnRlcnMuZmlsbCgwKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3Jvd1tpXSBeIGlzV2hpdGUpIHtcbiAgICAgICAgICAgICAgICBjb3VudGVyc1tjb3VudGVyUG9zXSsrO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb3VudGVyUG9zKys7XG4gICAgICAgICAgICAgICAgaWYgKGNvdW50ZXJQb3MgPT09IG51bUNvdW50ZXJzKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXJzW2NvdW50ZXJQb3NdID0gMTtcbiAgICAgICAgICAgICAgICAgICAgaXNXaGl0ZSA9IGlzV2hpdGUgPyAwIDogMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY291bnRlcnM7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQmFyY29kZSwgQmFyY29kZUluZm8sIEJhcmNvZGVSZWFkZXIgfSBmcm9tICcuL2JhcmNvZGUtcmVhZGVyJztcblxuY29uc3QgQUxQSEFCRVRIX1NUUklORyA9ICcwMTIzNDU2Nzg5LSQ6Ly4rQUJDRCc7XG5jb25zdCBBTFBIQUJFVCA9IFsuLi5BTFBIQUJFVEhfU1RSSU5HXS5tYXAoY2hhciA9PiBjaGFyLmNoYXJDb2RlQXQoMCkpO1xuLy8gY29uc3QgQUxQSEFCRVQgPSBbNDgsIDQ5LCA1MCwgNTEsIDUyLCA1MywgNTQsIDU1LCA1NiwgNTcsIDQ1LCAzNiwgNTgsIDQ3LCA0NiwgNDMsIDY1LCA2NiwgNjcsIDY4XTtcbmNvbnN0IENIQVJBQ1RFUl9FTkNPRElOR1MgPSBbMHgwMDMsIDB4MDA2LCAweDAwOSwgMHgwNjAsIDB4MDEyLCAweDA0MiwgMHgwMjEsIDB4MDI0LCAweDAzMCwgMHgwNDgsIDB4MDBjLCAweDAxOCwgMHgwNDUsXG4gICAgMHgwNTEsIDB4MDU0LCAweDAxNSwgMHgwMUEsIDB4MDI5LCAweDAwQiwgMHgwMEVdO1xuY29uc3QgU1RBUlRfRU5EID0gWzB4MDFBLCAweDAyOSwgMHgwMEIsIDB4MDBFXTtcbmNvbnN0IE1JTl9FTkNPREVEX0NIQVJTID0gNDtcbmNvbnN0IE1BWF9BQ0NFUFRBQkxFID0gMi4wO1xuY29uc3QgUEFERElORyA9IDEuNTtcblxuaW50ZXJmYWNlIFRocmVzaG9sZCB7XG4gICAgc3BhY2U6IHtcbiAgICAgICAgbmFycm93OiB7XG4gICAgICAgICAgICBzaXplOiBudW1iZXI7XG4gICAgICAgICAgICBjb3VudHM6IG51bWJlcjtcbiAgICAgICAgICAgIG1pbjogbnVtYmVyO1xuICAgICAgICAgICAgbWF4OiBudW1iZXI7XG4gICAgICAgIH07XG4gICAgICAgIHdpZGU6IHtcbiAgICAgICAgICAgIHNpemU6IG51bWJlcjtcbiAgICAgICAgICAgIGNvdW50czogbnVtYmVyO1xuICAgICAgICAgICAgbWluOiBudW1iZXI7XG4gICAgICAgICAgICBtYXg6IG51bWJlcjtcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIGJhcjoge1xuICAgICAgICBuYXJyb3c6IHtcbiAgICAgICAgICAgIHNpemU6IG51bWJlcjtcbiAgICAgICAgICAgIGNvdW50czogbnVtYmVyO1xuICAgICAgICAgICAgbWluOiBudW1iZXI7XG4gICAgICAgICAgICBtYXg6IG51bWJlcjtcbiAgICAgICAgfTtcbiAgICAgICAgd2lkZToge1xuICAgICAgICAgICAgc2l6ZTogbnVtYmVyO1xuICAgICAgICAgICAgY291bnRzOiBudW1iZXI7XG4gICAgICAgICAgICBtaW46IG51bWJlcjtcbiAgICAgICAgICAgIG1heDogbnVtYmVyO1xuICAgICAgICB9O1xuICAgIH07XG59XG5cbmV4cG9ydCBjbGFzcyBDb2RhYmFyUmVhZGVyIGV4dGVuZHMgQmFyY29kZVJlYWRlciB7XG4gICAgcHJpdmF0ZSBfY291bnRlcnM6IEFycmF5PG51bWJlcj47XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLl9mb3JtYXQgPSAnY29kYWJhcic7XG4gICAgICAgIHRoaXMuX2NvdW50ZXJzID0gW107XG4gICAgfVxuXG4gICAgZGVjb2RlKCk6IEJhcmNvZGUge1xuICAgICAgICB0aGlzLl9jb3VudGVycyA9IHRoaXMuX2ZpbGxDb3VudGVycyh0aGlzLl9uZXh0VW5zZXQodGhpcy5fcm93KSwgdGhpcy5fcm93Lmxlbmd0aCwgMSk7XG5cbiAgICAgICAgY29uc3Qgc3RhcnQgPSB0aGlzLl9maW5kU3RhcnQoKTtcbiAgICAgICAgaWYgKCFzdGFydCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xuICAgICAgICBsZXQgbmV4dFN0YXJ0ID0gc3RhcnQuc3RhcnRDb3VudGVyO1xuICAgICAgICBsZXQgcGF0dGVybjogbnVtYmVyO1xuXG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIHBhdHRlcm4gPSB0aGlzLl90b1BhdHRlcm4obmV4dFN0YXJ0KTtcbiAgICAgICAgICAgIGlmIChwYXR0ZXJuIDwgMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZGVjb2RlZENoYXIgPSB0aGlzLl9wYXR0ZXJuVG9DaGFyKHBhdHRlcm4pO1xuICAgICAgICAgICAgaWYgKGRlY29kZWRDaGFyID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaChkZWNvZGVkQ2hhcik7XG4gICAgICAgICAgICBuZXh0U3RhcnQgKz0gODtcbiAgICAgICAgICAgIGlmIChyZXN1bHQubGVuZ3RoID4gMSAmJiBTVEFSVF9FTkQuc29tZShjb2RlID0+IGNvZGUgPT09IHBhdHRlcm4pKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gd2hpbGUgKG5leHRTdGFydCA8IHRoaXMuX2NvdW50ZXJzLmxlbmd0aCk7XG5cbiAgICAgICAgLy8gdmVyaWZ5IGVuZFxuICAgICAgICBpZiAoKHJlc3VsdC5sZW5ndGggLSAyKSA8IE1JTl9FTkNPREVEX0NIQVJTIHx8ICFTVEFSVF9FTkQuc29tZShjb2RlID0+IGNvZGUgPT09IHBhdHRlcm4pKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHZlcmlmeSBlbmQgd2hpdGUgc3BhY2VcbiAgICAgICAgaWYgKCF0aGlzLl92ZXJpZnlXaGl0ZXNwYWNlKHN0YXJ0LnN0YXJ0Q291bnRlciwgbmV4dFN0YXJ0IC0gOCkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLl92YWxpZGF0ZVJlc3VsdChyZXN1bHQsIHN0YXJ0LnN0YXJ0Q291bnRlcikpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgbmV4dFN0YXJ0ID0gbmV4dFN0YXJ0ID4gdGhpcy5fY291bnRlcnMubGVuZ3RoID8gdGhpcy5fY291bnRlcnMubGVuZ3RoIDogbmV4dFN0YXJ0O1xuICAgICAgICBjb25zdCBlbmQgPSBzdGFydC5zdGFydCArIHRoaXMuX3N1bUNvdW50ZXJzKHN0YXJ0LnN0YXJ0Q291bnRlciwgbmV4dFN0YXJ0IC0gOCk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvZGU6IHJlc3VsdC5qb2luKCcnKSxcbiAgICAgICAgICAgIHN0YXJ0OiBzdGFydC5zdGFydCxcbiAgICAgICAgICAgIGVuZCxcbiAgICAgICAgICAgIHN0YXJ0SW5mbzogc3RhcnQsXG4gICAgICAgICAgICBkZWNvZGVkQ29kZXM6IHJlc3VsdFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfdmVyaWZ5V2hpdGVzcGFjZShzdGFydENvdW50ZXI6IG51bWJlciwgZW5kQ291bnRlcjogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICgoc3RhcnRDb3VudGVyIC0gMSA8PSAwKVxuICAgICAgICAgICAgfHwgdGhpcy5fY291bnRlcnNbc3RhcnRDb3VudGVyIC0gMV0gPj0gKHRoaXMuX2NhbGN1bGF0ZVBhdHRlcm5MZW5ndGgoc3RhcnRDb3VudGVyKSAvIDIuMCkpIHtcbiAgICAgICAgICAgIGlmICgoZW5kQ291bnRlciArIDggPj0gdGhpcy5fY291bnRlcnMubGVuZ3RoKVxuICAgICAgICAgICAgICAgIHx8IHRoaXMuX2NvdW50ZXJzW2VuZENvdW50ZXIgKyA3XSA+PSAodGhpcy5fY2FsY3VsYXRlUGF0dGVybkxlbmd0aChlbmRDb3VudGVyKSAvIDIuMCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9jYWxjdWxhdGVQYXR0ZXJuTGVuZ3RoKG9mZnNldDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgbGV0IHN1bSA9IDA7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IG9mZnNldDsgaSA8IG9mZnNldCArIDc7IGkrKykge1xuICAgICAgICAgICAgc3VtICs9IHRoaXMuX2NvdW50ZXJzW2ldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1bTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF90aHJlc2hvbGRSZXN1bHRQYXR0ZXJuKHJlc3VsdDogUmVhZG9ubHlBcnJheTxzdHJpbmc+LCBzdGFydENvdW50ZXI6IG51bWJlcik6IFRocmVzaG9sZCB7XG4gICAgICAgIGNvbnN0IGNhdGVnb3JpemF0aW9uOiBUaHJlc2hvbGQgPSB7XG4gICAgICAgICAgICBzcGFjZToge1xuICAgICAgICAgICAgICAgIG5hcnJvdzogeyBzaXplOiAwLCBjb3VudHM6IDAsIG1pbjogMCwgbWF4OiBOdW1iZXIuTUFYX1ZBTFVFIH0sXG4gICAgICAgICAgICAgICAgd2lkZTogeyBzaXplOiAwLCBjb3VudHM6IDAsIG1pbjogMCwgbWF4OiBOdW1iZXIuTUFYX1ZBTFVFIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiYXI6IHtcbiAgICAgICAgICAgICAgICBuYXJyb3c6IHsgc2l6ZTogMCwgY291bnRzOiAwLCBtaW46IDAsIG1heDogTnVtYmVyLk1BWF9WQUxVRSB9LFxuICAgICAgICAgICAgICAgIHdpZGU6IHsgc2l6ZTogMCwgY291bnRzOiAwLCBtaW46IDAsIG1heDogTnVtYmVyLk1BWF9WQUxVRSB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGxldCBwb3MgPSBzdGFydENvdW50ZXI7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBwYXR0ZXJuID0gdGhpcy5fY2hhclRvUGF0dGVybihyZXN1bHRbaV0pO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gNjsgaiA+PSAwOyBqLS0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBraW5kID0gKGogJiAxKSA9PT0gMiA/IGNhdGVnb3JpemF0aW9uLmJhciA6IGNhdGVnb3JpemF0aW9uLnNwYWNlO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhdCA9IChwYXR0ZXJuICYgMSkgPT09IDEgPyBraW5kLndpZGUgOiBraW5kLm5hcnJvdztcbiAgICAgICAgICAgICAgICBjYXQuc2l6ZSArPSB0aGlzLl9jb3VudGVyc1twb3MgKyBqXTtcbiAgICAgICAgICAgICAgICBjYXQuY291bnRzKys7XG4gICAgICAgICAgICAgICAgcGF0dGVybiA+Pj0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBvcyArPSA4O1xuICAgICAgICB9XG5cbiAgICAgICAgWydzcGFjZScsICdiYXInXS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBjb25zdCBraW5kID0gY2F0ZWdvcml6YXRpb25ba2V5XTtcbiAgICAgICAgICAgIGtpbmQud2lkZS5taW4gPSBNYXRoLmZsb29yKChraW5kLm5hcnJvdy5zaXplIC8ga2luZC5uYXJyb3cuY291bnRzICsga2luZC53aWRlLnNpemUgLyBraW5kLndpZGUuY291bnRzKSAvIDIpO1xuICAgICAgICAgICAga2luZC5uYXJyb3cubWF4ID0gTWF0aC5jZWlsKGtpbmQud2lkZS5taW4pO1xuICAgICAgICAgICAga2luZC53aWRlLm1heCA9IE1hdGguY2VpbCgoa2luZC53aWRlLnNpemUgKiBNQVhfQUNDRVBUQUJMRSArIFBBRERJTkcpIC8ga2luZC53aWRlLmNvdW50cyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBjYXRlZ29yaXphdGlvbjtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9jaGFyVG9QYXR0ZXJuKGNoYXI6IHN0cmluZyk6IG51bWJlciB7XG4gICAgICAgIGNvbnN0IGNoYXJDb2RlID0gY2hhci5jaGFyQ29kZUF0KDApO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQUxQSEFCRVQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChBTFBIQUJFVFtpXSA9PT0gY2hhckNvZGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gQ0hBUkFDVEVSX0VOQ09ESU5HU1tpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAweDA7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfdmFsaWRhdGVSZXN1bHQocmVzdWx0OiBSZWFkb25seUFycmF5PHN0cmluZz4sIHN0YXJ0Q291bnRlcjogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IHRocmVzaG9sZCA9IHRoaXMuX3RocmVzaG9sZFJlc3VsdFBhdHRlcm4ocmVzdWx0LCBzdGFydENvdW50ZXIpO1xuICAgICAgICBsZXQgcG9zID0gc3RhcnRDb3VudGVyO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzdWx0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcGF0dGVybiA9IHRoaXMuX2NoYXJUb1BhdHRlcm4ocmVzdWx0W2ldKTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDY7IGogPj0gMDsgai0tKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qga2luZCA9IChqICYgMSkgPT09IDAgPyB0aHJlc2hvbGQuYmFyIDogdGhyZXNob2xkLnNwYWNlO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhdCA9IChwYXR0ZXJuICYgMSkgPT09IDEgPyBraW5kLndpZGUgOiBraW5kLm5hcnJvdztcbiAgICAgICAgICAgICAgICBjb25zdCBzaXplID0gdGhpcy5fY291bnRlcnNbcG9zICsgal07XG4gICAgICAgICAgICAgICAgaWYgKHNpemUgPCBjYXQubWluIHx8IHNpemUgPiBjYXQubWF4KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0dGVybiA+Pj0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBvcyArPSA4O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfcGF0dGVyblRvQ2hhcihwYXR0ZXJuOiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IENIQVJBQ1RFUl9FTkNPRElOR1MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChDSEFSQUNURVJfRU5DT0RJTkdTW2ldID09PSBwYXR0ZXJuKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoQUxQSEFCRVRbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfY29tcHV0ZUFsdGVybmF0aW5nVGhyZXNob2xkKG9mZnNldDogbnVtYmVyLCBlbmQ6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIGxldCBtaW4gPSBOdW1iZXIuTUFYX1ZBTFVFO1xuICAgICAgICBsZXQgbWF4ID0gMDtcblxuICAgICAgICBmb3IgKGxldCBpID0gb2Zmc2V0OyBpIDwgZW5kOyBpICs9IDIpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvdW50ZXIgPSB0aGlzLl9jb3VudGVyc1tpXTtcbiAgICAgICAgICAgIGlmIChjb3VudGVyID4gbWF4KSB7XG4gICAgICAgICAgICAgICAgbWF4ID0gY291bnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb3VudGVyIDwgbWluKSB7XG4gICAgICAgICAgICAgICAgbWluID0gY291bnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoKG1pbiArIG1heCkgLyAyLjApIHwgMDtcbiAgICB9XG5cbiAgICBwcml2YXRlIF90b1BhdHRlcm4ob2Zmc2V0OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICBjb25zdCBudW1Db3VudGVycyA9IDc7XG4gICAgICAgIGNvbnN0IGVuZCA9IG9mZnNldCArIG51bUNvdW50ZXJzO1xuXG4gICAgICAgIGlmIChlbmQgPiB0aGlzLl9jb3VudGVycy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGJhclRocmVzaG9sZCA9IHRoaXMuX2NvbXB1dGVBbHRlcm5hdGluZ1RocmVzaG9sZChvZmZzZXQsIGVuZCk7XG4gICAgICAgIGNvbnN0IHNwYWNlVGhyZXNob2xkID0gdGhpcy5fY29tcHV0ZUFsdGVybmF0aW5nVGhyZXNob2xkKG9mZnNldCArIDEsIGVuZCk7XG4gICAgICAgIGxldCBiaXRtYXNrID0gMSA8PCAobnVtQ291bnRlcnMgLSAxKTtcbiAgICAgICAgbGV0IHBhdHRlcm4gPSAwO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtQ291bnRlcnM7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgdGhyZXNob2xkID0gKGkgJiAxKSA9PT0gMCA/IGJhclRocmVzaG9sZCA6IHNwYWNlVGhyZXNob2xkO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2NvdW50ZXJzW29mZnNldCArIGldID4gdGhyZXNob2xkKSB7XG4gICAgICAgICAgICAgICAgcGF0dGVybiB8PSBiaXRtYXNrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYml0bWFzayA+Pj0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYXR0ZXJuO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3N1bUNvdW50ZXJzKHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgbGV0IHN1bSA9IDA7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcbiAgICAgICAgICAgIHN1bSArPSB0aGlzLl9jb3VudGVyc1tpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdW07XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9maW5kU3RhcnQoKTogQmFyY29kZUluZm8ge1xuICAgICAgICBsZXQgc3RhcnQgPSB0aGlzLl9uZXh0VW5zZXQodGhpcy5fcm93KTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRoaXMuX2NvdW50ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBwYXR0ZXJuID0gdGhpcy5fdG9QYXR0ZXJuKGkpO1xuICAgICAgICAgICAgaWYgKHBhdHRlcm4gIT09IC0xICYmIFNUQVJUX0VORC5zb21lKGNvZGUgPT4gY29kZSA9PT0gcGF0dGVybikpIHtcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBMb29rIGZvciB3aGl0ZXNwYWNlIGFoZWFkXG4gICAgICAgICAgICAgICAgc3RhcnQgKz0gdGhpcy5fc3VtQ291bnRlcnMoMCwgaSk7XG4gICAgICAgICAgICAgICAgY29uc3QgZW5kID0gc3RhcnQgKyB0aGlzLl9zdW1Db3VudGVycyhpLCBpICsgOCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQsXG4gICAgICAgICAgICAgICAgICAgIGVuZCxcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRDb3VudGVyOiBpLFxuICAgICAgICAgICAgICAgICAgICBlbmRDb3VudGVyOiBpICsgOFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBCYXJjb2RlLCBCYXJjb2RlQ29ycmVjdGlvbiwgQmFyY29kZUluZm8sIEJhcmNvZGVSZWFkZXIgfSBmcm9tICcuL2JhcmNvZGUtcmVhZGVyJztcblxuY29uc3QgQ09ERV9TSElGVCA9IDk4O1xuY29uc3QgQ09ERV9DID0gOTk7XG5jb25zdCBDT0RFX0IgPSAxMDA7XG5jb25zdCBDT0RFX0EgPSAxMDE7XG5jb25zdCBTVEFSVF9DT0RFX0EgPSAxMDM7XG5jb25zdCBTVEFSVF9DT0RFX0IgPSAxMDQ7XG5jb25zdCBTVEFSVF9DT0RFX0MgPSAxMDU7XG5jb25zdCBTVE9QX0NPREUgPSAxMDY7XG5jb25zdCBDT0RFX1BBVFRFUk4gPSBbXG4gICAgWzIsIDEsIDIsIDIsIDIsIDJdLFxuICAgIFsyLCAyLCAyLCAxLCAyLCAyXSxcbiAgICBbMiwgMiwgMiwgMiwgMiwgMV0sXG4gICAgWzEsIDIsIDEsIDIsIDIsIDNdLFxuICAgIFsxLCAyLCAxLCAzLCAyLCAyXSxcbiAgICBbMSwgMywgMSwgMiwgMiwgMl0sXG4gICAgWzEsIDIsIDIsIDIsIDEsIDNdLFxuICAgIFsxLCAyLCAyLCAzLCAxLCAyXSxcbiAgICBbMSwgMywgMiwgMiwgMSwgMl0sXG4gICAgWzIsIDIsIDEsIDIsIDEsIDNdLFxuICAgIFsyLCAyLCAxLCAzLCAxLCAyXSxcbiAgICBbMiwgMywgMSwgMiwgMSwgMl0sXG4gICAgWzEsIDEsIDIsIDIsIDMsIDJdLFxuICAgIFsxLCAyLCAyLCAxLCAzLCAyXSxcbiAgICBbMSwgMiwgMiwgMiwgMywgMV0sXG4gICAgWzEsIDEsIDMsIDIsIDIsIDJdLFxuICAgIFsxLCAyLCAzLCAxLCAyLCAyXSxcbiAgICBbMSwgMiwgMywgMiwgMiwgMV0sXG4gICAgWzIsIDIsIDMsIDIsIDEsIDFdLFxuICAgIFsyLCAyLCAxLCAxLCAzLCAyXSxcbiAgICBbMiwgMiwgMSwgMiwgMywgMV0sXG4gICAgWzIsIDEsIDMsIDIsIDEsIDJdLFxuICAgIFsyLCAyLCAzLCAxLCAxLCAyXSxcbiAgICBbMywgMSwgMiwgMSwgMywgMV0sXG4gICAgWzMsIDEsIDEsIDIsIDIsIDJdLFxuICAgIFszLCAyLCAxLCAxLCAyLCAyXSxcbiAgICBbMywgMiwgMSwgMiwgMiwgMV0sXG4gICAgWzMsIDEsIDIsIDIsIDEsIDJdLFxuICAgIFszLCAyLCAyLCAxLCAxLCAyXSxcbiAgICBbMywgMiwgMiwgMiwgMSwgMV0sXG4gICAgWzIsIDEsIDIsIDEsIDIsIDNdLFxuICAgIFsyLCAxLCAyLCAzLCAyLCAxXSxcbiAgICBbMiwgMywgMiwgMSwgMiwgMV0sXG4gICAgWzEsIDEsIDEsIDMsIDIsIDNdLFxuICAgIFsxLCAzLCAxLCAxLCAyLCAzXSxcbiAgICBbMSwgMywgMSwgMywgMiwgMV0sXG4gICAgWzEsIDEsIDIsIDMsIDEsIDNdLFxuICAgIFsxLCAzLCAyLCAxLCAxLCAzXSxcbiAgICBbMSwgMywgMiwgMywgMSwgMV0sXG4gICAgWzIsIDEsIDEsIDMsIDEsIDNdLFxuICAgIFsyLCAzLCAxLCAxLCAxLCAzXSxcbiAgICBbMiwgMywgMSwgMywgMSwgMV0sXG4gICAgWzEsIDEsIDIsIDEsIDMsIDNdLFxuICAgIFsxLCAxLCAyLCAzLCAzLCAxXSxcbiAgICBbMSwgMywgMiwgMSwgMywgMV0sXG4gICAgWzEsIDEsIDMsIDEsIDIsIDNdLFxuICAgIFsxLCAxLCAzLCAzLCAyLCAxXSxcbiAgICBbMSwgMywgMywgMSwgMiwgMV0sXG4gICAgWzMsIDEsIDMsIDEsIDIsIDFdLFxuICAgIFsyLCAxLCAxLCAzLCAzLCAxXSxcbiAgICBbMiwgMywgMSwgMSwgMywgMV0sXG4gICAgWzIsIDEsIDMsIDEsIDEsIDNdLFxuICAgIFsyLCAxLCAzLCAzLCAxLCAxXSxcbiAgICBbMiwgMSwgMywgMSwgMywgMV0sXG4gICAgWzMsIDEsIDEsIDEsIDIsIDNdLFxuICAgIFszLCAxLCAxLCAzLCAyLCAxXSxcbiAgICBbMywgMywgMSwgMSwgMiwgMV0sXG4gICAgWzMsIDEsIDIsIDEsIDEsIDNdLFxuICAgIFszLCAxLCAyLCAzLCAxLCAxXSxcbiAgICBbMywgMywgMiwgMSwgMSwgMV0sXG4gICAgWzMsIDEsIDQsIDEsIDEsIDFdLFxuICAgIFsyLCAyLCAxLCA0LCAxLCAxXSxcbiAgICBbNCwgMywgMSwgMSwgMSwgMV0sXG4gICAgWzEsIDEsIDEsIDIsIDIsIDRdLFxuICAgIFsxLCAxLCAxLCA0LCAyLCAyXSxcbiAgICBbMSwgMiwgMSwgMSwgMiwgNF0sXG4gICAgWzEsIDIsIDEsIDQsIDIsIDFdLFxuICAgIFsxLCA0LCAxLCAxLCAyLCAyXSxcbiAgICBbMSwgNCwgMSwgMiwgMiwgMV0sXG4gICAgWzEsIDEsIDIsIDIsIDEsIDRdLFxuICAgIFsxLCAxLCAyLCA0LCAxLCAyXSxcbiAgICBbMSwgMiwgMiwgMSwgMSwgNF0sXG4gICAgWzEsIDIsIDIsIDQsIDEsIDFdLFxuICAgIFsxLCA0LCAyLCAxLCAxLCAyXSxcbiAgICBbMSwgNCwgMiwgMiwgMSwgMV0sXG4gICAgWzIsIDQsIDEsIDIsIDEsIDFdLFxuICAgIFsyLCAyLCAxLCAxLCAxLCA0XSxcbiAgICBbNCwgMSwgMywgMSwgMSwgMV0sXG4gICAgWzIsIDQsIDEsIDEsIDEsIDJdLFxuICAgIFsxLCAzLCA0LCAxLCAxLCAxXSxcbiAgICBbMSwgMSwgMSwgMiwgNCwgMl0sXG4gICAgWzEsIDIsIDEsIDEsIDQsIDJdLFxuICAgIFsxLCAyLCAxLCAyLCA0LCAxXSxcbiAgICBbMSwgMSwgNCwgMiwgMSwgMl0sXG4gICAgWzEsIDIsIDQsIDEsIDEsIDJdLFxuICAgIFsxLCAyLCA0LCAyLCAxLCAxXSxcbiAgICBbNCwgMSwgMSwgMiwgMSwgMl0sXG4gICAgWzQsIDIsIDEsIDEsIDEsIDJdLFxuICAgIFs0LCAyLCAxLCAyLCAxLCAxXSxcbiAgICBbMiwgMSwgMiwgMSwgNCwgMV0sXG4gICAgWzIsIDEsIDQsIDEsIDIsIDFdLFxuICAgIFs0LCAxLCAyLCAxLCAyLCAxXSxcbiAgICBbMSwgMSwgMSwgMSwgNCwgM10sXG4gICAgWzEsIDEsIDEsIDMsIDQsIDFdLFxuICAgIFsxLCAzLCAxLCAxLCA0LCAxXSxcbiAgICBbMSwgMSwgNCwgMSwgMSwgM10sXG4gICAgWzEsIDEsIDQsIDMsIDEsIDFdLFxuICAgIFs0LCAxLCAxLCAxLCAxLCAzXSxcbiAgICBbNCwgMSwgMSwgMywgMSwgMV0sXG4gICAgWzEsIDEsIDMsIDEsIDQsIDFdLFxuICAgIFsxLCAxLCA0LCAxLCAzLCAxXSxcbiAgICBbMywgMSwgMSwgMSwgNCwgMV0sXG4gICAgWzQsIDEsIDEsIDEsIDMsIDFdLFxuICAgIFsyLCAxLCAxLCA0LCAxLCAyXSxcbiAgICBbMiwgMSwgMSwgMiwgMSwgNF0sXG4gICAgWzIsIDEsIDEsIDIsIDMsIDJdLFxuICAgIFsyLCAzLCAzLCAxLCAxLCAxLCAyXVxuXTtcbmNvbnN0IE1PRFVMRV9JTkRJQ0VTID0geyBiYXI6IFswLCAyLCA0XSwgc3BhY2U6IFsxLCAzLCA1XSB9O1xuXG5leHBvcnQgY2xhc3MgQ29kZTEyOFJlYWRlciBleHRlbmRzIEJhcmNvZGVSZWFkZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuX2Zvcm1hdCA9ICdjb2RlXzEyOCc7XG4gICAgICAgIHRoaXMuX3NpbmdsZUNvZGVFcnJvciA9IDAuNjQ7XG4gICAgICAgIHRoaXMuX2F2ZXJhZ2VDb2RlRXJyb3IgPSAwLjMwO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZGVjb2RlQ29kZShzdGFydDogbnVtYmVyLCBjb3JyZWN0aW9uOiBCYXJjb2RlQ29ycmVjdGlvbik6IEJhcmNvZGVJbmZvIHtcbiAgICAgICAgY29uc3QgY291bnRlciA9IFswLCAwLCAwLCAwLCAwLCAwXTtcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gc3RhcnQ7XG4gICAgICAgIGNvbnN0IGJlc3RNYXRjaDogQmFyY29kZUluZm8gPSB7XG4gICAgICAgICAgICBlcnJvcjogTnVtYmVyLk1BWF9WQUxVRSxcbiAgICAgICAgICAgIGNvZGU6IC0xLFxuICAgICAgICAgICAgc3RhcnQ6IHN0YXJ0LFxuICAgICAgICAgICAgZW5kOiBzdGFydCxcbiAgICAgICAgICAgIGNvcnJlY3Rpb246IHtcbiAgICAgICAgICAgICAgICBiYXI6IDEsXG4gICAgICAgICAgICAgICAgc3BhY2U6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgZXBzaWxvbiA9IHRoaXMuQVZFUkFHRV9DT0RFX0VSUk9SO1xuICAgICAgICBsZXQgaXNXaGl0ZTogMCB8IDEgPSB0aGlzLl9yb3dbb2Zmc2V0XSA/IDAgOiAxO1xuICAgICAgICBsZXQgY291bnRlclBvcyA9IDA7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IG9mZnNldDsgaSA8IHRoaXMuX3Jvdy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3Jvd1tpXSBeIGlzV2hpdGUpIHtcbiAgICAgICAgICAgICAgICBjb3VudGVyW2NvdW50ZXJQb3NdKys7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChjb3VudGVyUG9zID09PSBjb3VudGVyLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvcnJlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NvcnJlY3QoY291bnRlciwgY29ycmVjdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBjb2RlID0gMDsgY29kZSA8IENPREVfUEFUVEVSTi5sZW5ndGg7IGNvZGUrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXJyb3IgPSB0aGlzLl9tYXRjaFBhdHRlcm4oY291bnRlciwgQ09ERV9QQVRURVJOW2NvZGVdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnJvciA8IGJlc3RNYXRjaC5lcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlc3RNYXRjaC5jb2RlID0gY29kZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZXN0TWF0Y2guZXJyb3IgPSBlcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGJlc3RNYXRjaC5lbmQgPSBpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChiZXN0TWF0Y2guY29kZSA9PT0gLTEgfHwgYmVzdE1hdGNoLmVycm9yID4gZXBzaWxvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBleHBlY3RlZCA9IENPREVfUEFUVEVSTltiZXN0TWF0Y2guY29kZV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChleHBlY3RlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmVzdE1hdGNoLmNvcnJlY3Rpb24uYmFyID0gdGhpcy5fY2FsY3VsYXRlQ29ycmVjdGlvbihleHBlY3RlZCwgY291bnRlciwgTU9EVUxFX0lORElDRVMuYmFyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlc3RNYXRjaC5jb3JyZWN0aW9uLnNwYWNlID0gdGhpcy5fY2FsY3VsYXRlQ29ycmVjdGlvbihleHBlY3RlZCwgY291bnRlciwgTU9EVUxFX0lORElDRVMuc3BhY2UpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJlc3RNYXRjaDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb3VudGVyUG9zKys7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY291bnRlcltjb3VudGVyUG9zXSA9IDE7XG4gICAgICAgICAgICAgICAgaXNXaGl0ZSA9IGlzV2hpdGUgPyAwIDogMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2NvcnJlY3QoY291bnRlcjogQXJyYXk8bnVtYmVyPiwgY29ycmVjdGlvbjogQmFyY29kZUNvcnJlY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fY29ycmVjdEJhcnMoY291bnRlciwgY29ycmVjdGlvbi5iYXIsIE1PRFVMRV9JTkRJQ0VTLmJhcik7XG4gICAgICAgIHRoaXMuX2NvcnJlY3RCYXJzKGNvdW50ZXIsIGNvcnJlY3Rpb24uc3BhY2UsIE1PRFVMRV9JTkRJQ0VTLnNwYWNlKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2ZpbmRTdGFydCgpIHtcbiAgICAgICAgY29uc3QgY291bnRlciA9IFswLCAwLCAwLCAwLCAwLCAwXTtcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gdGhpcy5fbmV4dFNldCh0aGlzLl9yb3cpO1xuICAgICAgICBjb25zdCBiZXN0TWF0Y2ggPSB7XG4gICAgICAgICAgICBlcnJvcjogTnVtYmVyLk1BWF9WQUxVRSxcbiAgICAgICAgICAgIGNvZGU6IC0xLFxuICAgICAgICAgICAgc3RhcnQ6IDAsXG4gICAgICAgICAgICBlbmQ6IDAsXG4gICAgICAgICAgICBjb3JyZWN0aW9uOiB7XG4gICAgICAgICAgICAgICAgYmFyOiAxLFxuICAgICAgICAgICAgICAgIHNwYWNlOiAxXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGVwc2lsb24gPSB0aGlzLkFWRVJBR0VfQ09ERV9FUlJPUjtcbiAgICAgICAgbGV0IGlzV2hpdGU6IDAgfCAxID0gMDtcbiAgICAgICAgbGV0IGNvdW50ZXJQb3MgPSAwO1xuICAgICAgICBsZXQgc3VtOiBudW1iZXI7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IG9mZnNldDsgaSA8IHRoaXMuX3Jvdy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3Jvd1tpXSBeIGlzV2hpdGUpIHtcbiAgICAgICAgICAgICAgICBjb3VudGVyW2NvdW50ZXJQb3NdKys7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChjb3VudGVyUG9zID09PSBjb3VudGVyLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgc3VtID0gMDtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb3VudGVyLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdW0gKz0gY291bnRlcltqXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBjb2RlID0gU1RBUlRfQ09ERV9BOyBjb2RlIDw9IFNUQVJUX0NPREVfQzsgY29kZSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlcnJvciA9IHRoaXMuX21hdGNoUGF0dGVybihjb3VudGVyLCBDT0RFX1BBVFRFUk5bY29kZV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yIDwgYmVzdE1hdGNoLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVzdE1hdGNoLmNvZGUgPSBjb2RlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlc3RNYXRjaC5lcnJvciA9IGVycm9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChiZXN0TWF0Y2guZXJyb3IgPCBlcHNpbG9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiZXN0TWF0Y2guc3RhcnQgPSBpIC0gc3VtO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmVzdE1hdGNoLmVuZCA9IGk7XG4gICAgICAgICAgICAgICAgICAgICAgICBiZXN0TWF0Y2guY29ycmVjdGlvbi5iYXIgPSB0aGlzLl9jYWxjdWxhdGVDb3JyZWN0aW9uKENPREVfUEFUVEVSTltiZXN0TWF0Y2guY29kZV0sIGNvdW50ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTU9EVUxFX0lORElDRVMuYmFyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlc3RNYXRjaC5jb3JyZWN0aW9uLnNwYWNlID0gdGhpcy5fY2FsY3VsYXRlQ29ycmVjdGlvbihDT0RFX1BBVFRFUk5bYmVzdE1hdGNoLmNvZGVdLCBjb3VudGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1PRFVMRV9JTkRJQ0VTLnNwYWNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBiZXN0TWF0Y2g7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDQ7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY291bnRlcltqXSA9IGNvdW50ZXJbaiArIDJdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXJbNF0gPSAwO1xuICAgICAgICAgICAgICAgICAgICBjb3VudGVyWzVdID0gMDtcbiAgICAgICAgICAgICAgICAgICAgY291bnRlclBvcy0tO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXJQb3MrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY291bnRlcltjb3VudGVyUG9zXSA9IDE7XG4gICAgICAgICAgICAgICAgaXNXaGl0ZSA9IGlzV2hpdGUgPyAwIDogMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGRlY29kZSgpOiBCYXJjb2RlIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEFycmF5PHN0cmluZyB8IG51bWJlcj4oKTtcbiAgICAgICAgY29uc3Qgc3RhcnRJbmZvID0gdGhpcy5fZmluZFN0YXJ0KCk7XG4gICAgICAgIGxldCBjb2RlOiBCYXJjb2RlSW5mbyA9IG51bGw7XG4gICAgICAgIGxldCBkb25lID0gZmFsc2U7XG4gICAgICAgIGxldCBtdWx0aXBsaWVyID0gMDtcbiAgICAgICAgbGV0IGNoZWNrc3VtID0gMDtcbiAgICAgICAgbGV0IGNvZGVzZXQ6IG51bWJlcjtcbiAgICAgICAgbGV0IHJhd1Jlc3VsdCA9IG5ldyBBcnJheTxudW1iZXI+KCk7XG4gICAgICAgIGxldCBkZWNvZGVkQ29kZXMgPSBuZXcgQXJyYXk8QmFyY29kZUluZm8+KCk7XG4gICAgICAgIGxldCBzaGlmdE5leHQgPSBmYWxzZTtcbiAgICAgICAgbGV0IHVuc2hpZnQ6IGJvb2xlYW47XG4gICAgICAgIGxldCByZW1vdmVMYXN0Q2hhcmFjdGVyID0gdHJ1ZTtcblxuICAgICAgICBpZiAoc3RhcnRJbmZvID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb2RlID0ge1xuICAgICAgICAgICAgY29kZTogc3RhcnRJbmZvLmNvZGUsXG4gICAgICAgICAgICBzdGFydDogc3RhcnRJbmZvLnN0YXJ0LFxuICAgICAgICAgICAgZW5kOiBzdGFydEluZm8uZW5kLFxuICAgICAgICAgICAgY29ycmVjdGlvbjoge1xuICAgICAgICAgICAgICAgIGJhcjogc3RhcnRJbmZvLmNvcnJlY3Rpb24uYmFyLFxuICAgICAgICAgICAgICAgIHNwYWNlOiBzdGFydEluZm8uY29ycmVjdGlvbi5zcGFjZVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBkZWNvZGVkQ29kZXMucHVzaChjb2RlKTtcbiAgICAgICAgY2hlY2tzdW0gPSBjb2RlLmNvZGU7XG5cbiAgICAgICAgc3dpdGNoIChjb2RlLmNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgU1RBUlRfQ09ERV9BOlxuICAgICAgICAgICAgICAgIGNvZGVzZXQgPSBDT0RFX0E7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFNUQVJUX0NPREVfQjpcbiAgICAgICAgICAgICAgICBjb2Rlc2V0ID0gQ09ERV9CO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBTVEFSVF9DT0RFX0M6XG4gICAgICAgICAgICAgICAgY29kZXNldCA9IENPREVfQztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICB3aGlsZSAoIWRvbmUpIHtcbiAgICAgICAgICAgIHVuc2hpZnQgPSBzaGlmdE5leHQ7XG4gICAgICAgICAgICBzaGlmdE5leHQgPSBmYWxzZTtcbiAgICAgICAgICAgIGNvZGUgPSB0aGlzLl9kZWNvZGVDb2RlKGNvZGUuZW5kLCBjb2RlLmNvcnJlY3Rpb24pO1xuICAgICAgICAgICAgaWYgKGNvZGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAoY29kZS5jb2RlICE9PSBTVE9QX0NPREUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlTGFzdENoYXJhY3RlciA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGNvZGUuY29kZSAhPT0gU1RPUF9DT0RFKSB7XG4gICAgICAgICAgICAgICAgICAgIHJhd1Jlc3VsdC5wdXNoKGNvZGUuY29kZSk7XG4gICAgICAgICAgICAgICAgICAgIG11bHRpcGxpZXIrKztcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tzdW0gKz0gbXVsdGlwbGllciAqIGNvZGUuY29kZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGVjb2RlZENvZGVzLnB1c2goY29kZSk7XG5cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGNvZGVzZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBDT0RFX0E6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2RlLmNvZGUgPCA2NCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUoMzIgKyBjb2RlLmNvZGUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY29kZS5jb2RlIDwgOTYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGUuY29kZSAtIDY0KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2RlLmNvZGUgIT09IFNUT1BfQ09ERSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVMYXN0Q2hhcmFjdGVyID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoY29kZS5jb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgQ09ERV9TSElGVDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaWZ0TmV4dCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2Rlc2V0ID0gQ09ERV9CO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgQ09ERV9COlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29kZXNldCA9IENPREVfQjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIENPREVfQzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvZGVzZXQgPSBDT0RFX0M7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBTVE9QX0NPREU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb25lID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgQ09ERV9COiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29kZS5jb2RlIDwgOTYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKDMyICsgY29kZS5jb2RlKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2RlLmNvZGUgIT09IFNUT1BfQ09ERSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVMYXN0Q2hhcmFjdGVyID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoY29kZS5jb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgQ09ERV9TSElGVDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaWZ0TmV4dCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2Rlc2V0ID0gQ09ERV9BO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgQ09ERV9BOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29kZXNldCA9IENPREVfQTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIENPREVfQzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvZGVzZXQgPSBDT0RFX0M7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBTVE9QX0NPREU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb25lID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgQ09ERV9DOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29kZS5jb2RlIDwgMTAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goY29kZS5jb2RlIDwgMTAgPyAnMCcgKyBjb2RlLmNvZGUgOiBjb2RlLmNvZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29kZS5jb2RlICE9PSBTVE9QX0NPREUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlTGFzdENoYXJhY3RlciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGNvZGUuY29kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIENPREVfQTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvZGVzZXQgPSBDT0RFX0E7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBDT0RFX0I6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2Rlc2V0ID0gQ09ERV9CO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgU1RPUF9DT0RFOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9uZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZG9uZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodW5zaGlmdCkge1xuICAgICAgICAgICAgICAgIGNvZGVzZXQgPSBjb2Rlc2V0ID09PSBDT0RFX0EgPyBDT0RFX0IgOiBDT0RFX0E7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29kZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb2RlLmVuZCA9IHRoaXMuX25leHRVbnNldCh0aGlzLl9yb3csIGNvZGUuZW5kKTtcbiAgICAgICAgaWYgKCF0aGlzLl92ZXJpZnlUcmFpbGluZ1doaXRlc3BhY2UoY29kZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY2hlY2tzdW0gLT0gbXVsdGlwbGllciAqIHJhd1Jlc3VsdFtyYXdSZXN1bHQubGVuZ3RoIC0gMV07XG4gICAgICAgIGlmIChjaGVja3N1bSAlIDEwMyAhPT0gcmF3UmVzdWx0W3Jhd1Jlc3VsdC5sZW5ndGggLSAxXSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXJlc3VsdC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcmVtb3ZlIGxhc3QgY29kZSBmcm9tIHJlc3VsdCAoY2hlY2tzdW0pXG4gICAgICAgIGlmIChyZW1vdmVMYXN0Q2hhcmFjdGVyKSB7XG4gICAgICAgICAgICByZXN1bHQuc3BsaWNlKHJlc3VsdC5sZW5ndGggLSAxLCAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb2RlOiByZXN1bHQuam9pbignJyksXG4gICAgICAgICAgICBzdGFydDogc3RhcnRJbmZvLnN0YXJ0LFxuICAgICAgICAgICAgZW5kOiBjb2RlLmVuZCxcbiAgICAgICAgICAgIGNvZGVzZXQsXG4gICAgICAgICAgICBzdGFydEluZm8sXG4gICAgICAgICAgICBkZWNvZGVkQ29kZXMsXG4gICAgICAgICAgICBlbmRJbmZvOiBjb2RlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF92ZXJpZnlUcmFpbGluZ1doaXRlc3BhY2UoZW5kSW5mbzogQmFyY29kZUluZm8pOiBCYXJjb2RlSW5mbyB7XG4gICAgICAgIGNvbnN0IHRyYWlsaW5nV2hpdGVzcGFjZUVuZCA9IGVuZEluZm8uZW5kICsgKGVuZEluZm8uZW5kIC0gZW5kSW5mby5zdGFydCkgLyAyO1xuXG4gICAgICAgIGlmICh0cmFpbGluZ1doaXRlc3BhY2VFbmQgPCB0aGlzLl9yb3cubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fbWF0Y2hSYW5nZShlbmRJbmZvLmVuZCwgdHJhaWxpbmdXaGl0ZXNwYWNlRW5kLCAwKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbmRJbmZvO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfY2FsY3VsYXRlQ29ycmVjdGlvbihcbiAgICAgICAgZXhwZWN0ZWQ6IFJlYWRvbmx5QXJyYXk8bnVtYmVyPixcbiAgICAgICAgbm9ybWFsaXplZDogUmVhZG9ubHlBcnJheTxudW1iZXI+LFxuICAgICAgICBpbmRpY2VzOiBSZWFkb25seUFycmF5PG51bWJlcj5cbiAgICApOiBudW1iZXIge1xuICAgICAgICBsZXQgc3VtTm9ybWFsaXplZCA9IDA7XG4gICAgICAgIGxldCBzdW1FeHBlY3RlZCA9IDA7XG5cbiAgICAgICAgZm9yIChsZXQgbGVuZ3RoID0gaW5kaWNlcy5sZW5ndGg7IGxlbmd0aC0tOykge1xuICAgICAgICAgICAgc3VtRXhwZWN0ZWQgKz0gZXhwZWN0ZWRbaW5kaWNlc1tsZW5ndGhdXTtcbiAgICAgICAgICAgIHN1bU5vcm1hbGl6ZWQgKz0gbm9ybWFsaXplZFtpbmRpY2VzW2xlbmd0aF1dO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1bUV4cGVjdGVkIC8gc3VtTm9ybWFsaXplZDtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBCYXJjb2RlLCBCYXJjb2RlSW5mbywgQmFyY29kZVJlYWRlciB9IGZyb20gJy4vYmFyY29kZS1yZWFkZXInO1xuXG5jb25zdCBBU1RFUklTSyA9IDB4MDk0O1xuY29uc3QgQUxQSEFCRVRIX1NUUklORyA9ICcwMTIzNDU2Nzg5QUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVotLiAqJC8rJSc7XG5jb25zdCBBTFBIQUJFVCA9IG5ldyBVaW50MTZBcnJheShbLi4uQUxQSEFCRVRIX1NUUklOR10ubWFwKGNoYXIgPT4gY2hhci5jaGFyQ29kZUF0KDApKSk7XG4vLyBjb25zdCBBTFBIQUJFVCA9IFs0OCwgNDksIDUwLCA1MSwgNTIsIDUzLCA1NCwgNTUsIDU2LCA1NywgNjUsIDY2LCA2NywgNjgsIDY5LCA3MCwgNzEsIDcyLCA3MywgNzQsIDc1LCA3NiwgNzcsIDc4LFxuLy8gICAgIDc5LCA4MCwgODEsIDgyLCA4MywgODQsIDg1LCA4NiwgODcsIDg4LCA4OSwgOTAsIDQ1LCA0NiwgMzIsIDQyLCAzNiwgNDcsIDQzLCAzN107XG5jb25zdCBDSEFSQUNURVJfRU5DT0RJTkdTID0gbmV3IFVpbnQxNkFycmF5KFtcbiAgICAweDAzNCwgMHgxMjEsIDB4MDYxLCAweDE2MCwgMHgwMzEsIDB4MTMwLCAweDA3MCwgMHgwMjUsIDB4MTI0LCAweDA2NCwgMHgxMDksIDB4MDQ5LCAweDE0OCwgMHgwMTksIDB4MTE4LCAweDA1OCxcbiAgICAweDAwRCwgMHgxMEMsIDB4MDRDLCAweDAxQywgMHgxMDMsIDB4MDQzLCAweDE0MiwgMHgwMTMsIDB4MTEyLCAweDA1MiwgMHgwMDcsIDB4MTA2LCAweDA0NiwgMHgwMTYsIDB4MTgxLCAweDBDMSxcbiAgICAweDFDMCwgMHgwOTEsIDB4MTkwLCAweDBEMCwgMHgwODUsIDB4MTg0LCAweDBDNCwgMHgwOTQsIDB4MEE4LCAweDBBMiwgMHgwOEEsIDB4MDJBXG5dKTtcblxuZXhwb3J0IGNsYXNzIENvZGUzOVJlYWRlciBleHRlbmRzIEJhcmNvZGVSZWFkZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuX2Zvcm1hdCA9ICdjb2RlXzM5JztcbiAgICB9XG5cbiAgICBkZWNvZGUoKTogQmFyY29kZSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy5fZmluZFN0YXJ0KCk7XG5cbiAgICAgICAgaWYgKCFzdGFydCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xuICAgICAgICBsZXQgY291bnRlcnMgPSBuZXcgVWludDE2QXJyYXkoOSk7XG4gICAgICAgIGxldCBkZWNvZGVkQ2hhcjogc3RyaW5nO1xuICAgICAgICBsZXQgbGFzdFN0YXJ0OiBudW1iZXI7XG4gICAgICAgIGxldCBuZXh0U3RhcnQgPSB0aGlzLl9uZXh0U2V0KHRoaXMuX3Jvdywgc3RhcnQuZW5kKTtcblxuICAgICAgICBkbyB7XG4gICAgICAgICAgICB0aGlzLl90b0NvdW50ZXJzKG5leHRTdGFydCwgY291bnRlcnMpO1xuICAgICAgICAgICAgY29uc3QgcGF0dGVybiA9IHRoaXMuX3RvUGF0dGVybihjb3VudGVycyk7XG4gICAgICAgICAgICBpZiAocGF0dGVybiA8IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlY29kZWRDaGFyID0gdGhpcy5fcGF0dGVyblRvQ2hhcihwYXR0ZXJuKTtcbiAgICAgICAgICAgIGlmIChkZWNvZGVkQ2hhciA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goZGVjb2RlZENoYXIpO1xuICAgICAgICAgICAgbGFzdFN0YXJ0ID0gbmV4dFN0YXJ0O1xuICAgICAgICAgICAgbmV4dFN0YXJ0ICs9IGNvdW50ZXJzLnJlZHVjZSgoc3VtLCBpdGVtKSA9PiBzdW0gKyBpdGVtLCAwKTtcbiAgICAgICAgICAgIG5leHRTdGFydCA9IHRoaXMuX25leHRTZXQodGhpcy5fcm93LCBuZXh0U3RhcnQpO1xuICAgICAgICB9IHdoaWxlIChkZWNvZGVkQ2hhciAhPT0gJyonKTtcbiAgICAgICAgcmVzdWx0LnBvcCgpO1xuXG4gICAgICAgIGlmICghcmVzdWx0Lmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuX3ZlcmlmeVRyYWlsaW5nV2hpdGVzcGFjZShsYXN0U3RhcnQsIG5leHRTdGFydCwgY291bnRlcnMpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb2RlOiByZXN1bHQuam9pbignJyksXG4gICAgICAgICAgICBzdGFydDogc3RhcnQuc3RhcnQsXG4gICAgICAgICAgICBlbmQ6IG5leHRTdGFydCxcbiAgICAgICAgICAgIHN0YXJ0SW5mbzogc3RhcnQsXG4gICAgICAgICAgICBkZWNvZGVkQ29kZXM6IHJlc3VsdFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfcGF0dGVyblRvQ2hhcihwYXR0ZXJuKTogc3RyaW5nIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBDSEFSQUNURVJfRU5DT0RJTkdTLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoQ0hBUkFDVEVSX0VOQ09ESU5HU1tpXSA9PT0gcGF0dGVybikge1xuICAgICAgICAgICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKEFMUEhBQkVUW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBwcml2YXRlIF92ZXJpZnlUcmFpbGluZ1doaXRlc3BhY2UobGFzdFN0YXJ0OiBudW1iZXIsIG5leHRTdGFydDogbnVtYmVyLCBjb3VudGVyczogVWludDE2QXJyYXkpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgcGF0dGVyblNpemUgPSBjb3VudGVycy5yZWR1Y2UoKHN1bSwgaXRlbSkgPT4gc3VtICsgaXRlbSwgMCk7XG4gICAgICAgIGNvbnN0IHRyYWlsaW5nV2hpdGVzcGFjZUVuZCA9IG5leHRTdGFydCAtIGxhc3RTdGFydCAtIHBhdHRlcm5TaXplO1xuICAgICAgICByZXR1cm4gKHRyYWlsaW5nV2hpdGVzcGFjZUVuZCAqIDMpID49IHBhdHRlcm5TaXplO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2ZpbmROZXh0V2lkdGgoY291bnRlcnM6IFVpbnQxNkFycmF5LCBjdXJyZW50OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICBsZXQgbWluV2lkdGggPSBOdW1iZXIuTUFYX1ZBTFVFO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnRlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChjb3VudGVyc1tpXSA8IG1pbldpZHRoICYmIGNvdW50ZXJzW2ldID4gY3VycmVudCkge1xuICAgICAgICAgICAgICAgIG1pbldpZHRoID0gY291bnRlcnNbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbWluV2lkdGg7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfdG9QYXR0ZXJuKGNvdW50ZXJzOiBVaW50MTZBcnJheSk6IG51bWJlciB7XG4gICAgICAgIGNvbnN0IG51bUNvdW50ZXJzID0gY291bnRlcnMubGVuZ3RoO1xuICAgICAgICBsZXQgbWF4TmFycm93V2lkdGggPSAwO1xuICAgICAgICBsZXQgbnVtV2lkZUJhcnMgPSBudW1Db3VudGVycztcbiAgICAgICAgbGV0IHdpZGVCYXJXaWR0aCA9IDA7XG4gICAgICAgIGxldCBwYXR0ZXJuOiBudW1iZXI7XG5cbiAgICAgICAgd2hpbGUgKG51bVdpZGVCYXJzID4gMykge1xuICAgICAgICAgICAgbWF4TmFycm93V2lkdGggPSB0aGlzLl9maW5kTmV4dFdpZHRoKGNvdW50ZXJzLCBtYXhOYXJyb3dXaWR0aCk7XG4gICAgICAgICAgICBudW1XaWRlQmFycyA9IDA7XG4gICAgICAgICAgICBwYXR0ZXJuID0gMDtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtQ291bnRlcnM7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChjb3VudGVyc1tpXSA+IG1heE5hcnJvd1dpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm4gfD0gMSA8PCAobnVtQ291bnRlcnMgLSAxIC0gaSk7XG4gICAgICAgICAgICAgICAgICAgIG51bVdpZGVCYXJzKys7XG4gICAgICAgICAgICAgICAgICAgIHdpZGVCYXJXaWR0aCArPSBjb3VudGVyc1tpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChudW1XaWRlQmFycyA9PT0gMykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtQ291bnRlcnMgJiYgbnVtV2lkZUJhcnMgPiAwOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ZXJzW2ldID4gbWF4TmFycm93V2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bVdpZGVCYXJzLS07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKGNvdW50ZXJzW2ldICogMikgPj0gd2lkZUJhcldpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBwYXR0ZXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2ZpbmRTdGFydCgpOiBCYXJjb2RlSW5mbyB7XG4gICAgICAgIGNvbnN0IG9mZnNldCA9IHRoaXMuX25leHRTZXQodGhpcy5fcm93KTtcbiAgICAgICAgbGV0IHBhdHRlcm5TdGFydCA9IG9mZnNldDtcbiAgICAgICAgY29uc3QgY291bnRlciA9IG5ldyBVaW50MTZBcnJheSg5KTtcbiAgICAgICAgbGV0IGNvdW50ZXJQb3MgPSAwO1xuICAgICAgICBsZXQgaXNXaGl0ZTogMCB8IDEgPSAwO1xuICAgICAgICBsZXQgd2hpdGVTcGFjZU11c3RTdGFydDogbnVtYmVyO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSBvZmZzZXQ7IGkgPCB0aGlzLl9yb3cubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9yb3dbaV0gXiBpc1doaXRlKSB7XG4gICAgICAgICAgICAgICAgY291bnRlcltjb3VudGVyUG9zXSsrO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoY291bnRlclBvcyA9PT0gY291bnRlci5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGZpbmQgc3RhcnQgcGF0dGVyblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fdG9QYXR0ZXJuKGNvdW50ZXIpID09PSBBU1RFUklTSykge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGVTcGFjZU11c3RTdGFydCA9IE1hdGgubWF4KDAsIHBhdHRlcm5TdGFydCAtICgoaSAtIHBhdHRlcm5TdGFydCkgLyA0KSkgfCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX21hdGNoUmFuZ2Uod2hpdGVTcGFjZU11c3RTdGFydCwgcGF0dGVyblN0YXJ0LCAwKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBwYXR0ZXJuU3RhcnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuU3RhcnQgKz0gY291bnRlclswXSArIGNvdW50ZXJbMV07XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgNzsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVyW2pdID0gY291bnRlcltqICsgMl07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY291bnRlcls3XSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXJbOF0gPSAwO1xuICAgICAgICAgICAgICAgICAgICBjb3VudGVyUG9zLS07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnRlclBvcysrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb3VudGVyW2NvdW50ZXJQb3NdID0gMTtcbiAgICAgICAgICAgICAgICBpc1doaXRlID0gaXNXaGl0ZSA/IDAgOiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQmFyY29kZSB9IGZyb20gJy4vYmFyY29kZS1yZWFkZXInO1xuaW1wb3J0IHsgQ29kZTM5UmVhZGVyIH0gZnJvbSAnLi9jb2RlLTM5LXJlYWRlcic7XG5cbmV4cG9ydCBjbGFzcyBDb2RlMzlWSU5SZWFkZXIgZXh0ZW5kcyBDb2RlMzlSZWFkZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuX2Zvcm1hdCA9ICdjb2RlXzM5X3Zpbic7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGJvcnJvd3NcbiAgICAgKiBodHRwczovL2dpdGh1Yi5jb20venhpbmcvenhpbmcvYmxvYi9tYXN0ZXIvY29yZS9zcmMvbWFpbi9qYXZhL2NvbS9nb29nbGUvenhpbmcvY2xpZW50L3Jlc3VsdC9WSU5SZXN1bHRQYXJzZXIuamF2YVxuICAgICAqL1xuICAgIGRlY29kZSgpOiBCYXJjb2RlIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuZGVjb2RlKCk7XG4gICAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjb2RlID0gcmVzdWx0LmNvZGU7XG5cbiAgICAgICAgaWYgKCFjb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvZGUgPSBjb2RlLnJlcGxhY2UoL1tJT1FdL2csICcnKTtcblxuICAgICAgICBpZiAoIS9bQS1aMC05XXsxN30vLnRlc3QoY29kZSkpIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0ZhaWxlZCBBWjA5IHBhdHRlcm4gY29kZTonLCBjb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLl9jaGVja0NoZWNrc3VtKGNvZGUpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc3VsdC5jb2RlID0gY29kZTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9jaGVja0NoZWNrc3VtKGNvZGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICAvLyBUT0RPXG4gICAgICAgIHJldHVybiAhIWNvZGU7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQmFyY29kZSwgQmFyY29kZUluZm8sIEJhcmNvZGVSZWFkZXIgfSBmcm9tICcuL2JhcmNvZGUtcmVhZGVyJztcblxuY29uc3QgQUxQSEFCRVRIX1NUUklORyA9ICcwMTIzNDU2Nzg5QUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVotLiAkLyslYWJjZConO1xuY29uc3QgQUxQSEFCRVQgPSBuZXcgVWludDE2QXJyYXkoWy4uLkFMUEhBQkVUSF9TVFJJTkddLm1hcChjaGFyID0+IGNoYXIuY2hhckNvZGVBdCgwKSkpO1xuY29uc3QgQ0hBUkFDVEVSX0VOQ09ESU5HUyA9IG5ldyBVaW50MTZBcnJheShbXG4gICAgMHgxMTQsIDB4MTQ4LCAweDE0NCwgMHgxNDIsIDB4MTI4LCAweDEyNCwgMHgxMjIsIDB4MTUwLCAweDExMiwgMHgxMEEsIDB4MUE4LCAweDFBNCwgMHgxQTIsIDB4MTk0LCAweDE5MiwgMHgxOEEsXG4gICAgMHgxNjgsIDB4MTY0LCAweDE2MiwgMHgxMzQsIDB4MTFBLCAweDE1OCwgMHgxNEMsIDB4MTQ2LCAweDEyQywgMHgxMTYsIDB4MUI0LCAweDFCMiwgMHgxQUMsIDB4MUE2LCAweDE5NiwgMHgxOUEsXG4gICAgMHgxNkMsIDB4MTY2LCAweDEzNiwgMHgxM0EsIDB4MTJFLCAweDFENCwgMHgxRDIsIDB4MUNBLCAweDE2RSwgMHgxNzYsIDB4MUFFLCAweDEyNiwgMHgxREEsIDB4MUQ2LCAweDEzMiwgMHgxNUVcbl0pO1xuY29uc3QgQVNURVJJU0sgPSAweDE1RTtcblxuZXhwb3J0IGNsYXNzIENvZGU5M1JlYWRlciBleHRlbmRzIEJhcmNvZGVSZWFkZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuX2Zvcm1hdCA9ICdjb2RlXzkzJztcbiAgICB9XG5cbiAgICBkZWNvZGUoKTogQmFyY29kZSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy5fZmluZFN0YXJ0KCk7XG5cbiAgICAgICAgaWYgKCFzdGFydCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmVzdWx0ID0gbmV3IEFycmF5PHN0cmluZz4oKTtcbiAgICAgICAgbGV0IGNvdW50ZXJzID0gbmV3IFVpbnQxNkFycmF5KDYpO1xuICAgICAgICBsZXQgZGVjb2RlZENoYXI6IHN0cmluZztcbiAgICAgICAgbGV0IGxhc3RTdGFydDogbnVtYmVyO1xuICAgICAgICBsZXQgbmV4dFN0YXJ0ID0gdGhpcy5fbmV4dFNldCh0aGlzLl9yb3csIHN0YXJ0LmVuZCk7XG5cbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgdGhpcy5fdG9Db3VudGVycyhuZXh0U3RhcnQsIGNvdW50ZXJzKTtcbiAgICAgICAgICAgIGNvbnN0IHBhdHRlcm4gPSB0aGlzLl90b1BhdHRlcm4oY291bnRlcnMpO1xuICAgICAgICAgICAgaWYgKHBhdHRlcm4gPCAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWNvZGVkQ2hhciA9IHRoaXMuX3BhdHRlcm5Ub0NoYXIocGF0dGVybik7XG4gICAgICAgICAgICBpZiAoZGVjb2RlZENoYXIgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGRlY29kZWRDaGFyKTtcbiAgICAgICAgICAgIGxhc3RTdGFydCA9IG5leHRTdGFydDtcbiAgICAgICAgICAgIG5leHRTdGFydCArPSBjb3VudGVycy5yZWR1Y2UoKHN1bSwgaXRlbSkgPT4gc3VtICsgaXRlbSwgMCk7XG4gICAgICAgICAgICBuZXh0U3RhcnQgPSB0aGlzLl9uZXh0U2V0KHRoaXMuX3JvdywgbmV4dFN0YXJ0KTtcbiAgICAgICAgfSB3aGlsZSAoZGVjb2RlZENoYXIgIT09ICcqJyk7XG4gICAgICAgIHJlc3VsdC5wb3AoKTtcblxuICAgICAgICBpZiAoIXJlc3VsdC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLl92ZXJpZnlFbmQobGFzdFN0YXJ0LCBuZXh0U3RhcnQpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5fdmVyaWZ5Q2hlY2tzdW1zKHJlc3VsdCkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0LnNsaWNlKDAsIHJlc3VsdC5sZW5ndGggLSAyKTtcbiAgICAgICAgaWYgKChyZXN1bHQgPSB0aGlzLl9kZWNvZGVFeHRlbmRlZChyZXN1bHQpKSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29kZTogcmVzdWx0LmpvaW4oJycpLFxuICAgICAgICAgICAgc3RhcnQ6IHN0YXJ0LnN0YXJ0LFxuICAgICAgICAgICAgZW5kOiBuZXh0U3RhcnQsXG4gICAgICAgICAgICBzdGFydEluZm86IHN0YXJ0LFxuICAgICAgICAgICAgZGVjb2RlZENvZGVzOiByZXN1bHRcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX3BhdHRlcm5Ub0NoYXIocGF0dGVybjogbnVtYmVyKTogc3RyaW5nIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBDSEFSQUNURVJfRU5DT0RJTkdTLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoQ0hBUkFDVEVSX0VOQ09ESU5HU1tpXSA9PT0gcGF0dGVybikge1xuICAgICAgICAgICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKEFMUEhBQkVUW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBwcml2YXRlIF92ZXJpZnlFbmQobGFzdFN0YXJ0OiBudW1iZXIsIG5leHRTdGFydDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIGlmIChsYXN0U3RhcnQgPT09IG5leHRTdGFydCB8fCAhdGhpcy5fcm93W25leHRTdGFydF0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF90b1BhdHRlcm4oY291bnRlcnM6IFVpbnQxNkFycmF5KTogbnVtYmVyIHtcbiAgICAgICAgY29uc3QgbnVtQ291bnRlcnMgPSBjb3VudGVycy5sZW5ndGg7XG4gICAgICAgIGxldCBwYXR0ZXJuID0gMDtcbiAgICAgICAgbGV0IHN1bSA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtQ291bnRlcnM7IGkrKykge1xuICAgICAgICAgICAgc3VtICs9IGNvdW50ZXJzW2ldO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1Db3VudGVyczsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbm9ybWFsaXplZCA9IE1hdGgucm91bmQoY291bnRlcnNbaV0gKiA5IC8gc3VtKTtcbiAgICAgICAgICAgIGlmIChub3JtYWxpemVkIDwgMSB8fCBub3JtYWxpemVkID4gNCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgoaSAmIDEpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBub3JtYWxpemVkOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybiA9IChwYXR0ZXJuIDw8IDEpIHwgMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhdHRlcm4gPDw9IG5vcm1hbGl6ZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGF0dGVybjtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9maW5kU3RhcnQoKTogQmFyY29kZUluZm8ge1xuICAgICAgICBjb25zdCBjb3VudGVyID0gbmV3IFVpbnQxNkFycmF5KDYpO1xuICAgICAgICBjb25zdCBvZmZzZXQgPSB0aGlzLl9uZXh0U2V0KHRoaXMuX3Jvdyk7XG4gICAgICAgIGxldCBwYXR0ZXJuU3RhcnQgPSBvZmZzZXQ7XG4gICAgICAgIGxldCBjb3VudGVyUG9zID0gMDtcbiAgICAgICAgbGV0IGlzV2hpdGU6IDAgfCAxID0gMDtcbiAgICAgICAgbGV0IHdoaXRlU3BhY2VNdXN0U3RhcnQ6IG51bWJlcjtcblxuICAgICAgICBmb3IgKGxldCBpID0gb2Zmc2V0OyBpIDwgdGhpcy5fcm93Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fcm93W2ldIF4gaXNXaGl0ZSkge1xuICAgICAgICAgICAgICAgIGNvdW50ZXJbY291bnRlclBvc10rKztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvdW50ZXJQb3MgPT09IGNvdW50ZXIubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBmaW5kIHN0YXJ0IHBhdHRlcm5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3RvUGF0dGVybihjb3VudGVyKSA9PT0gQVNURVJJU0spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlU3BhY2VNdXN0U3RhcnQgPSBNYXRoLm1heCgwLCBwYXR0ZXJuU3RhcnQgLSAoKGkgLSBwYXR0ZXJuU3RhcnQpIC8gNCkpIHwgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9tYXRjaFJhbmdlKHdoaXRlU3BhY2VNdXN0U3RhcnQsIHBhdHRlcm5TdGFydCwgMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydDogcGF0dGVyblN0YXJ0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcGF0dGVyblN0YXJ0ICs9IGNvdW50ZXJbMF0gKyBjb3VudGVyWzFdO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDQ7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY291bnRlcltqXSA9IGNvdW50ZXJbaiArIDJdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXJbNF0gPSAwO1xuICAgICAgICAgICAgICAgICAgICBjb3VudGVyWzVdID0gMDtcbiAgICAgICAgICAgICAgICAgICAgY291bnRlclBvcy0tO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXJQb3MrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY291bnRlcltjb3VudGVyUG9zXSA9IDE7XG4gICAgICAgICAgICAgICAgaXNXaGl0ZSA9IGlzV2hpdGUgPyAwIDogMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2RlY29kZUV4dGVuZGVkKGNoYXJBcnJheTogQXJyYXk8c3RyaW5nPik6IEFycmF5PHN0cmluZz4ge1xuICAgICAgICBjb25zdCBsZW5ndGggPSBjaGFyQXJyYXkubGVuZ3RoO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBjaGFyID0gY2hhckFycmF5W2ldO1xuICAgICAgICAgICAgaWYgKGNoYXIgPj0gJ2EnICYmIGNoYXIgPD0gJ2QnKSB7XG4gICAgICAgICAgICAgICAgaWYgKGkgPiAobGVuZ3RoIC0gMikpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IG5leHRDaGFyID0gY2hhckFycmF5WysraV07XG4gICAgICAgICAgICAgICAgY29uc3QgbmV4dENoYXJDb2RlID0gbmV4dENoYXIuY2hhckNvZGVBdCgwKTtcbiAgICAgICAgICAgICAgICBsZXQgZGVjb2RlZENoYXI6IHN0cmluZztcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGNoYXIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnYSc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXh0Q2hhciA+PSAnQScgJiYgbmV4dENoYXIgPD0gJ1onKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjb2RlZENoYXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKG5leHRDaGFyQ29kZSAtIDY0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXNlICdiJzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRDaGFyID49ICdBJyAmJiBuZXh0Q2hhciA8PSAnRScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNvZGVkQ2hhciA9IFN0cmluZy5mcm9tQ2hhckNvZGUobmV4dENoYXJDb2RlIC0gMzgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChuZXh0Q2hhciA+PSAnRicgJiYgbmV4dENoYXIgPD0gJ0onKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjb2RlZENoYXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKG5leHRDaGFyQ29kZSAtIDExKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobmV4dENoYXIgPj0gJ0snICYmIG5leHRDaGFyIDw9ICdPJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY29kZWRDaGFyID0gU3RyaW5nLmZyb21DaGFyQ29kZShuZXh0Q2hhckNvZGUgKyAxNik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG5leHRDaGFyID49ICdQJyAmJiBuZXh0Q2hhciA8PSAnUycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNvZGVkQ2hhciA9IFN0cmluZy5mcm9tQ2hhckNvZGUobmV4dENoYXJDb2RlICsgNDMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChuZXh0Q2hhciA+PSAnVCcgJiYgbmV4dENoYXIgPD0gJ1onKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjb2RlZENoYXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDEyNyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnYyc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXh0Q2hhciA+PSAnQScgJiYgbmV4dENoYXIgPD0gJ08nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjb2RlZENoYXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKG5leHRDaGFyQ29kZSAtIDMyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobmV4dENoYXIgPT09ICdaJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY29kZWRDaGFyID0gJzonO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2QnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV4dENoYXIgPj0gJ0EnICYmIG5leHRDaGFyIDw9ICdaJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY29kZWRDaGFyID0gU3RyaW5nLmZyb21DaGFyQ29kZShuZXh0Q2hhckNvZGUgKyAzMik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goZGVjb2RlZENoYXIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChjaGFyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHByaXZhdGUgX3ZlcmlmeUNoZWNrc3VtcyhjaGFyQXJyYXk6IEFycmF5PHN0cmluZz4pOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hdGNoQ2hlY2tDaGFyKGNoYXJBcnJheSwgY2hhckFycmF5Lmxlbmd0aCAtIDIsIDIwKVxuICAgICAgICAgICAgJiYgdGhpcy5fbWF0Y2hDaGVja0NoYXIoY2hhckFycmF5LCBjaGFyQXJyYXkubGVuZ3RoIC0gMSwgMTUpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX21hdGNoQ2hlY2tDaGFyKGNoYXJBcnJheTogQXJyYXk8c3RyaW5nPiwgaW5kZXg6IG51bWJlciwgbWF4V2VpZ2h0OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgYXJyYXlUb0NoZWNrID0gY2hhckFycmF5LnNsaWNlKDAsIGluZGV4KTtcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gYXJyYXlUb0NoZWNrLmxlbmd0aDtcbiAgICAgICAgY29uc3Qgd2VpZ2h0ZWRTdW1zID0gYXJyYXlUb0NoZWNrLnJlZHVjZSgoc3VtLCBjaGFyLCBpKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB3ZWlnaHQgPSAoKChpICogLTEpICsgKGxlbmd0aCAtIDEpKSAlIG1heFdlaWdodCkgKyAxO1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBBTFBIQUJFVC5pbmRleE9mKGNoYXIuY2hhckNvZGVBdCgwKSk7XG4gICAgICAgICAgICByZXR1cm4gc3VtICsgKHdlaWdodCAqIHZhbHVlKTtcbiAgICAgICAgfSwgMCk7XG5cbiAgICAgICAgY29uc3QgY2hlY2tDaGFyID0gQUxQSEFCRVRbKHdlaWdodGVkU3VtcyAlIDQ3KV07XG4gICAgICAgIHJldHVybiBjaGVja0NoYXIgPT09IGNoYXJBcnJheVtpbmRleF0uY2hhckNvZGVBdCgwKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBCYXJjb2RlLCBCYXJjb2RlSW5mbywgQmFyY29kZVJlYWRlciwgQmFyY29kZVJlYWRlckNvbmZpZyB9IGZyb20gJy4vYmFyY29kZS1yZWFkZXInO1xuaW1wb3J0IHsgRUFOUmVhZGVyIH0gZnJvbSAnLi9lYW4tcmVhZGVyJztcblxuZXhwb3J0IGNsYXNzIEVBTjJSZWFkZXIgZXh0ZW5kcyBFQU5SZWFkZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZz86IEJhcmNvZGVSZWFkZXJDb25maWcsIHN1cHBsZW1lbnRzPzogQXJyYXk8QmFyY29kZVJlYWRlcj4pIHtcbiAgICAgICAgc3VwZXIoY29uZmlnLCBzdXBwbGVtZW50cyk7XG5cbiAgICAgICAgdGhpcy5fZm9ybWF0ID0gJ2Vhbl8yJztcbiAgICB9XG5cbiAgICBkZWNvZGUocm93PzogQXJyYXk8bnVtYmVyPiwgc3RhcnQ/OiBudW1iZXIpOiBCYXJjb2RlIHtcbiAgICAgICAgY29uc3QgZW5kID0gcm93Lmxlbmd0aDtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEFycmF5PG51bWJlcj4oKTtcbiAgICAgICAgY29uc3QgZGVjb2RlZENvZGVzID0gbmV3IEFycmF5PEJhcmNvZGVJbmZvPigpO1xuICAgICAgICBsZXQgb2Zmc2V0ID0gc3RhcnQ7XG4gICAgICAgIGxldCBjb2RlRnJlcXVlbmN5ID0gMDtcbiAgICAgICAgbGV0IGNvZGU6IEJhcmNvZGVJbmZvO1xuXG4gICAgICAgIHRoaXMuX3JvdyA9IHJvdztcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDIgJiYgb2Zmc2V0IDwgZW5kOyBpKyspIHtcbiAgICAgICAgICAgIGNvZGUgPSB0aGlzLl9kZWNvZGVDb2RlKG9mZnNldCk7XG4gICAgICAgICAgICBpZiAoIWNvZGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlY29kZWRDb2Rlcy5wdXNoKGNvZGUpO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goY29kZS5jb2RlICUgMTApO1xuICAgICAgICAgICAgaWYgKGNvZGUuY29kZSA+PSB0aGlzLkNPREVfR19TVEFSVCkge1xuICAgICAgICAgICAgICAgIGNvZGVGcmVxdWVuY3kgfD0gMSA8PCAoMSAtIGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGkgIT09IDEpIHtcbiAgICAgICAgICAgICAgICBvZmZzZXQgPSB0aGlzLl9uZXh0U2V0KHRoaXMuX3JvdywgY29kZS5lbmQpO1xuICAgICAgICAgICAgICAgIG9mZnNldCA9IHRoaXMuX25leHRVbnNldCh0aGlzLl9yb3csIG9mZnNldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVzdWx0Lmxlbmd0aCAhPT0gMiB8fCAocGFyc2VJbnQocmVzdWx0LmpvaW4oJycpKSAlIDQpICE9PSBjb2RlRnJlcXVlbmN5KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb2RlOiByZXN1bHQuam9pbignJyksXG4gICAgICAgICAgICBkZWNvZGVkQ29kZXMsXG4gICAgICAgICAgICBlbmQ6IGNvZGUuZW5kXG4gICAgICAgIH07XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQmFyY29kZSwgQmFyY29kZUluZm8sIEJhcmNvZGVSZWFkZXIsIEJhcmNvZGVSZWFkZXJDb25maWcgfSBmcm9tICcuL2JhcmNvZGUtcmVhZGVyJztcbmltcG9ydCB7IEVBTlJlYWRlciB9IGZyb20gJy4vZWFuLXJlYWRlcic7XG5cbmV4cG9ydCBjbGFzcyBFQU41UmVhZGVyIGV4dGVuZHMgRUFOUmVhZGVyIHtcbiAgICBnZXQgQ0hFQ0tfRElHSVRfRU5DT0RJTkdTKCk6IEFycmF5PG51bWJlcj4ge1xuICAgICAgICByZXR1cm4gWzI0LCAyMCwgMTgsIDE3LCAxMiwgNiwgMywgMTAsIDksIDVdO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZz86IEJhcmNvZGVSZWFkZXJDb25maWcsIHN1cHBsZW1lbnRzPzogQXJyYXk8QmFyY29kZVJlYWRlcj4pIHtcbiAgICAgICAgc3VwZXIoY29uZmlnLCBzdXBwbGVtZW50cyk7XG5cbiAgICAgICAgdGhpcy5fZm9ybWF0ID0gJ2Vhbl81JztcbiAgICB9XG5cbiAgICBkZWNvZGUocm93PzogQXJyYXk8bnVtYmVyPiwgc3RhcnQ/OiBudW1iZXIpOiBCYXJjb2RlIHtcbiAgICAgICAgY29uc3QgZW5kID0gcm93Lmxlbmd0aDtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEFycmF5PG51bWJlcj4oKTtcbiAgICAgICAgY29uc3QgZGVjb2RlZENvZGVzID0gbmV3IEFycmF5PEJhcmNvZGVJbmZvPigpO1xuICAgICAgICBsZXQgY29kZUZyZXF1ZW5jeSA9IDA7XG4gICAgICAgIGxldCBvZmZzZXQgPSBzdGFydDtcbiAgICAgICAgbGV0IGNvZGU6IEJhcmNvZGVJbmZvO1xuXG4gICAgICAgIHRoaXMuX3JvdyA9IHJvdztcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDUgJiYgb2Zmc2V0IDwgZW5kOyBpKyspIHtcbiAgICAgICAgICAgIGNvZGUgPSB0aGlzLl9kZWNvZGVDb2RlKG9mZnNldCk7XG4gICAgICAgICAgICBpZiAoIWNvZGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlY29kZWRDb2Rlcy5wdXNoKGNvZGUpO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goY29kZS5jb2RlICUgMTApO1xuICAgICAgICAgICAgaWYgKGNvZGUuY29kZSA+PSB0aGlzLkNPREVfR19TVEFSVCkge1xuICAgICAgICAgICAgICAgIGNvZGVGcmVxdWVuY3kgfD0gMSA8PCAoNCAtIGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGkgIT09IDQpIHtcbiAgICAgICAgICAgICAgICBvZmZzZXQgPSB0aGlzLl9uZXh0U2V0KHRoaXMuX3JvdywgY29kZS5lbmQpO1xuICAgICAgICAgICAgICAgIG9mZnNldCA9IHRoaXMuX25leHRVbnNldCh0aGlzLl9yb3csIG9mZnNldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVzdWx0Lmxlbmd0aCAhPT0gNSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fZXh0ZW5zaW9uQ2hlY2tzdW0ocmVzdWx0KSAhPT0gdGhpcy5fZGV0ZXJtaW5lQ2hlY2tEaWdpdChjb2RlRnJlcXVlbmN5KSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29kZTogcmVzdWx0LmpvaW4oJycpLFxuICAgICAgICAgICAgZGVjb2RlZENvZGVzLFxuICAgICAgICAgICAgZW5kOiBjb2RlLmVuZFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHByaXZhdGUgX2RldGVybWluZUNoZWNrRGlnaXQoY29kZUZyZXF1ZW5jeTogbnVtYmVyKTogbnVtYmVyIHwgbnVsbCB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgaWYgKGNvZGVGcmVxdWVuY3kgPT09IHRoaXMuQ0hFQ0tfRElHSVRfRU5DT0RJTkdTW2ldKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZXh0ZW5zaW9uQ2hlY2tzdW0ocmVzdWx0OiBBcnJheTxudW1iZXI+KTogbnVtYmVyIHtcbiAgICAgICAgbGV0IGxlbmd0aCA9IHJlc3VsdC5sZW5ndGg7XG4gICAgICAgIGxldCBzdW0gPSAwO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSBsZW5ndGggLSAyOyBpID49IDA7IGkgLT0gMikge1xuICAgICAgICAgICAgc3VtICs9IHJlc3VsdFtpXTtcbiAgICAgICAgfVxuICAgICAgICBzdW0gKj0gMztcbiAgICAgICAgZm9yIChsZXQgaSA9IGxlbmd0aCAtIDE7IGkgPj0gMDsgaSAtPSAyKSB7XG4gICAgICAgICAgICBzdW0gKz0gcmVzdWx0W2ldO1xuICAgICAgICB9XG4gICAgICAgIHN1bSAqPSAzO1xuXG4gICAgICAgIHJldHVybiBzdW0gJSAxMDtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBCYXJjb2RlSW5mbywgQmFyY29kZVJlYWRlciwgQmFyY29kZVJlYWRlckNvbmZpZyB9IGZyb20gJy4vYmFyY29kZS1yZWFkZXInO1xuaW1wb3J0IHsgRUFOUmVhZGVyIH0gZnJvbSAnLi9lYW4tcmVhZGVyJztcblxuZXhwb3J0IGNsYXNzIEVBTjhSZWFkZXIgZXh0ZW5kcyBFQU5SZWFkZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZz86IEJhcmNvZGVSZWFkZXJDb25maWcsIHN1cHBsZW1lbnRzPzogQXJyYXk8QmFyY29kZVJlYWRlcj4pIHtcbiAgICAgICAgc3VwZXIoY29uZmlnLCBzdXBwbGVtZW50cyk7XG5cbiAgICAgICAgdGhpcy5fZm9ybWF0ID0gJ2Vhbl84JztcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2RlY29kZVBheWxvYWQoY29kZTogQmFyY29kZUluZm8sIHJlc3VsdDogQXJyYXk8bnVtYmVyPiwgZGVjb2RlZENvZGVzOiBBcnJheTxCYXJjb2RlSW5mbz4pOiBCYXJjb2RlSW5mbyB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgICAgICBjb2RlID0gdGhpcy5fZGVjb2RlQ29kZShjb2RlLmVuZCwgdGhpcy5DT0RFX0dfU1RBUlQpO1xuICAgICAgICAgICAgaWYgKCFjb2RlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaChjb2RlLmNvZGUpO1xuICAgICAgICAgICAgZGVjb2RlZENvZGVzLnB1c2goY29kZSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb2RlID0gdGhpcy5fZmluZFBhdHRlcm4odGhpcy5NSURETEVfUEFUVEVSTiwgY29kZS5lbmQsIDEsIGZhbHNlKTtcblxuICAgICAgICBpZiAoY29kZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBkZWNvZGVkQ29kZXMucHVzaChjb2RlKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICAgICAgY29kZSA9IHRoaXMuX2RlY29kZUNvZGUoY29kZS5lbmQsIHRoaXMuQ09ERV9HX1NUQVJUKTtcblxuICAgICAgICAgICAgaWYgKCFjb2RlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRlY29kZWRDb2Rlcy5wdXNoKGNvZGUpO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goY29kZS5jb2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb2RlO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IG1lcmdlIH0gZnJvbSAnLi4vY29tbW9uL21lcmdlJztcbmltcG9ydCB7IEJhcmNvZGUsIEJhcmNvZGVJbmZvLCBCYXJjb2RlUmVhZGVyLCBCYXJjb2RlUmVhZGVyQ29uZmlnIH0gZnJvbSAnLi9iYXJjb2RlLXJlYWRlcic7XG5cbmNvbnN0IEVYVEVOU0lPTl9TVEFSVF9QQVRURVJOID0gWzEsIDEsIDJdO1xuY29uc3QgQ09ERV9QQVRURVJOID0gW1xuICAgIFszLCAyLCAxLCAxXSxcbiAgICBbMiwgMiwgMiwgMV0sXG4gICAgWzIsIDEsIDIsIDJdLFxuICAgIFsxLCA0LCAxLCAxXSxcbiAgICBbMSwgMSwgMywgMl0sXG4gICAgWzEsIDIsIDMsIDFdLFxuICAgIFsxLCAxLCAxLCA0XSxcbiAgICBbMSwgMywgMSwgMl0sXG4gICAgWzEsIDIsIDEsIDNdLFxuICAgIFszLCAxLCAxLCAyXSxcbiAgICBbMSwgMSwgMiwgM10sXG4gICAgWzEsIDIsIDIsIDJdLFxuICAgIFsyLCAyLCAxLCAyXSxcbiAgICBbMSwgMSwgNCwgMV0sXG4gICAgWzIsIDMsIDEsIDFdLFxuICAgIFsxLCAzLCAyLCAxXSxcbiAgICBbNCwgMSwgMSwgMV0sXG4gICAgWzIsIDEsIDMsIDFdLFxuICAgIFszLCAxLCAyLCAxXSxcbiAgICBbMiwgMSwgMSwgM11cbl07XG5jb25zdCBDT0RFX0ZSRVFVRU5DWSA9IFswLCAxMSwgMTMsIDE0LCAxOSwgMjUsIDI4LCAyMSwgMjIsIDI2XTtcblxuZXhwb3J0IGNsYXNzIEVBTlJlYWRlciBleHRlbmRzIEJhcmNvZGVSZWFkZXIge1xuICAgIGdldCBDT0RFX0xfU1RBUlQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgZ2V0IENPREVfR19TVEFSVCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gMTA7XG4gICAgfVxuXG4gICAgZ2V0IFNUQVJUX1BBVFRFUk4oKTogQXJyYXk8bnVtYmVyPiB7XG4gICAgICAgIHJldHVybiBbMSwgMSwgMV07XG4gICAgfVxuXG4gICAgZ2V0IFNUT1BfUEFUVEVSTigpOiBBcnJheTxudW1iZXI+IHtcbiAgICAgICAgcmV0dXJuIFsxLCAxLCAxXTtcbiAgICB9XG5cbiAgICBnZXQgTUlERExFX1BBVFRFUk4oKTogQXJyYXk8bnVtYmVyPiB7XG4gICAgICAgIHJldHVybiBbMSwgMSwgMSwgMSwgMV07XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoY29uZmlnPzogQmFyY29kZVJlYWRlckNvbmZpZywgc3VwcGxlbWVudHM/OiBBcnJheTxCYXJjb2RlUmVhZGVyPikge1xuICAgICAgICBzdXBlcihtZXJnZSh7XG4gICAgICAgICAgICBzdXBwbGVtZW50czogW10gLy8gQWxsb3dlZCBleHRlbnNpb25zIHRvIGJlIGRlY29kZWQgKDIgYW5kL29yIDUpXG4gICAgICAgIH0sIGNvbmZpZyksIHN1cHBsZW1lbnRzKTtcblxuICAgICAgICB0aGlzLl9mb3JtYXQgPSAnZWFuXzEzJztcbiAgICAgICAgdGhpcy5fc2luZ2xlQ29kZUVycm9yID0gMC43MDtcbiAgICAgICAgdGhpcy5fYXZlcmFnZUNvZGVFcnJvciA9IDAuNDg7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9kZWNvZGVDb2RlKHN0YXJ0OiBudW1iZXIsIGNvZGVyYW5nZT86IG51bWJlcik6IEJhcmNvZGVJbmZvIHtcbiAgICAgICAgY29uc3QgY291bnRlciA9IFswLCAwLCAwLCAwXTtcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gc3RhcnQ7XG4gICAgICAgIGNvbnN0IGJlc3RNYXRjaDogQmFyY29kZUluZm8gPSB7XG4gICAgICAgICAgICBlcnJvcjogTnVtYmVyLk1BWF9WQUxVRSxcbiAgICAgICAgICAgIGNvZGU6IC0xLFxuICAgICAgICAgICAgc3RhcnQ6IHN0YXJ0LFxuICAgICAgICAgICAgZW5kOiBzdGFydFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBlcHNpbG9uID0gdGhpcy5BVkVSQUdFX0NPREVfRVJST1I7XG4gICAgICAgIGxldCBpc1doaXRlOiAwIHwgMSA9IHRoaXMuX3Jvd1tvZmZzZXRdID8gMCA6IDE7XG4gICAgICAgIGxldCBjb3VudGVyUG9zID0gMDtcblxuICAgICAgICBpZiAoIWNvZGVyYW5nZSkge1xuICAgICAgICAgICAgY29kZXJhbmdlID0gQ09ERV9QQVRURVJOLmxlbmd0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSBvZmZzZXQ7IGkgPCB0aGlzLl9yb3cubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9yb3dbaV0gXiBpc1doaXRlKSB7XG4gICAgICAgICAgICAgICAgY291bnRlcltjb3VudGVyUG9zXSsrO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoY291bnRlclBvcyA9PT0gY291bnRlci5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGNvZGUgPSAwOyBjb2RlIDwgY29kZXJhbmdlOyBjb2RlKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yID0gdGhpcy5fbWF0Y2hQYXR0ZXJuKGNvdW50ZXIsIENPREVfUEFUVEVSTltjb2RlXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IgPCBiZXN0TWF0Y2guZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZXN0TWF0Y2guY29kZSA9IGNvZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVzdE1hdGNoLmVycm9yID0gZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYmVzdE1hdGNoLmVuZCA9IGk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChiZXN0TWF0Y2guZXJyb3IgPiBlcHNpbG9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYmVzdE1hdGNoO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXJQb3MrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY291bnRlcltjb3VudGVyUG9zXSA9IDE7XG4gICAgICAgICAgICAgICAgaXNXaGl0ZSA9IGlzV2hpdGUgPyAwIDogMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZmluZFN0YXJ0KCk6IEJhcmNvZGVJbmZvIHtcbiAgICAgICAgbGV0IG9mZnNldCA9IHRoaXMuX25leHRTZXQodGhpcy5fcm93KTtcbiAgICAgICAgbGV0IHN0YXJ0SW5mbzogQmFyY29kZUluZm87XG5cbiAgICAgICAgd2hpbGUgKCFzdGFydEluZm8pIHtcbiAgICAgICAgICAgIHN0YXJ0SW5mbyA9IHRoaXMuX2ZpbmRQYXR0ZXJuKHRoaXMuU1RBUlRfUEFUVEVSTiwgb2Zmc2V0LCAwLCB0cnVlKTtcblxuICAgICAgICAgICAgaWYgKCFzdGFydEluZm8pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgbGVhZGluZ1doaXRlc3BhY2VTdGFydCA9IHN0YXJ0SW5mby5zdGFydCAtIChzdGFydEluZm8uZW5kIC0gc3RhcnRJbmZvLnN0YXJ0KTtcblxuICAgICAgICAgICAgaWYgKGxlYWRpbmdXaGl0ZXNwYWNlU3RhcnQgPj0gMCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9tYXRjaFJhbmdlKGxlYWRpbmdXaGl0ZXNwYWNlU3RhcnQsIHN0YXJ0SW5mby5zdGFydCwgMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0YXJ0SW5mbztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG9mZnNldCA9IHN0YXJ0SW5mby5lbmQ7XG4gICAgICAgICAgICBzdGFydEluZm8gPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF92ZXJpZnlUcmFpbGluZ1doaXRlc3BhY2UoZW5kSW5mbzogQmFyY29kZUluZm8pOiBCYXJjb2RlSW5mbyB7XG4gICAgICAgIGNvbnN0IHRyYWlsaW5nV2hpdGVzcGFjZUVuZCA9IGVuZEluZm8uZW5kICsgKGVuZEluZm8uZW5kIC0gZW5kSW5mby5zdGFydCk7XG5cbiAgICAgICAgaWYgKHRyYWlsaW5nV2hpdGVzcGFjZUVuZCA8IHRoaXMuX3Jvdy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9tYXRjaFJhbmdlKGVuZEluZm8uZW5kLCB0cmFpbGluZ1doaXRlc3BhY2VFbmQsIDApKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVuZEluZm87XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2ZpbmRFbmQob2Zmc2V0OiBudW1iZXIsIGlzV2hpdGU6IDAgfCAxKTogQmFyY29kZUluZm8ge1xuICAgICAgICBjb25zdCBlbmRJbmZvID0gdGhpcy5fZmluZFBhdHRlcm4odGhpcy5TVE9QX1BBVFRFUk4sIG9mZnNldCwgaXNXaGl0ZSwgZmFsc2UpO1xuXG4gICAgICAgIHJldHVybiBlbmRJbmZvICE9PSBudWxsID8gdGhpcy5fdmVyaWZ5VHJhaWxpbmdXaGl0ZXNwYWNlKGVuZEluZm8pIDogbnVsbDtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9jYWxjdWxhdGVGaXJzdERpZ2l0KGNvZGVGcmVxdWVuY3k6IG51bWJlcik6IG51bWJlciB8IG51bGwge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IENPREVfRlJFUVVFTkNZLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoY29kZUZyZXF1ZW5jeSA9PT0gQ09ERV9GUkVRVUVOQ1lbaV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2RlY29kZVBheWxvYWQoY29kZTogQmFyY29kZUluZm8sIHJlc3VsdDogQXJyYXk8bnVtYmVyPiwgZGVjb2RlZENvZGVzOiBBcnJheTxCYXJjb2RlSW5mbz4pOiBCYXJjb2RlSW5mbyB7XG4gICAgICAgIGxldCBjb2RlRnJlcXVlbmN5ID0gMHgwO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gICAgICAgICAgICBjb2RlID0gdGhpcy5fZGVjb2RlQ29kZShjb2RlLmVuZCk7XG4gICAgICAgICAgICBpZiAoIWNvZGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb2RlLmNvZGUgPj0gdGhpcy5DT0RFX0dfU1RBUlQpIHtcbiAgICAgICAgICAgICAgICBjb2RlLmNvZGUgLT0gdGhpcy5DT0RFX0dfU1RBUlQ7XG4gICAgICAgICAgICAgICAgY29kZUZyZXF1ZW5jeSB8PSAxIDw8ICg1IC0gaSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvZGVGcmVxdWVuY3kgfD0gMCA8PCAoNSAtIGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goY29kZS5jb2RlKTtcbiAgICAgICAgICAgIGRlY29kZWRDb2Rlcy5wdXNoKGNvZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZmlyc3REaWdpdCA9IHRoaXMuX2NhbGN1bGF0ZUZpcnN0RGlnaXQoY29kZUZyZXF1ZW5jeSk7XG5cbiAgICAgICAgaWYgKGZpcnN0RGlnaXQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzdWx0LnVuc2hpZnQoZmlyc3REaWdpdCk7XG5cbiAgICAgICAgY29kZSA9IHRoaXMuX2ZpbmRQYXR0ZXJuKHRoaXMuTUlERExFX1BBVFRFUk4sIGNvZGUuZW5kLCAxLCBmYWxzZSk7XG5cbiAgICAgICAgaWYgKGNvZGUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVjb2RlZENvZGVzLnB1c2goY29kZSk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICAgICAgICAgIGNvZGUgPSB0aGlzLl9kZWNvZGVDb2RlKGNvZGUuZW5kLCB0aGlzLkNPREVfR19TVEFSVCk7XG5cbiAgICAgICAgICAgIGlmICghY29kZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkZWNvZGVkQ29kZXMucHVzaChjb2RlKTtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGNvZGUuY29kZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29kZTtcbiAgICB9XG5cbiAgICBkZWNvZGUoKTogQmFyY29kZSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBBcnJheTxudW1iZXI+KCk7XG4gICAgICAgIGNvbnN0IGRlY29kZWRDb2RlcyA9IG5ldyBBcnJheTxCYXJjb2RlSW5mbz4oKTtcbiAgICAgICAgbGV0IHJlc3VsdEluZm86IEJhcmNvZGUgPSB7fTtcbiAgICAgICAgbGV0IHN0YXJ0SW5mbyA9IHRoaXMuX2ZpbmRTdGFydCgpO1xuXG4gICAgICAgIGlmICghc3RhcnRJbmZvKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjb2RlOiBCYXJjb2RlSW5mbyA9IHtcbiAgICAgICAgICAgIGNvZGU6IHN0YXJ0SW5mby5jb2RlLFxuICAgICAgICAgICAgc3RhcnQ6IHN0YXJ0SW5mby5zdGFydCxcbiAgICAgICAgICAgIGVuZDogc3RhcnRJbmZvLmVuZFxuICAgICAgICB9O1xuICAgICAgICBkZWNvZGVkQ29kZXMucHVzaChjb2RlKTtcblxuICAgICAgICBjb2RlID0gdGhpcy5fZGVjb2RlUGF5bG9hZChjb2RlLCByZXN1bHQsIGRlY29kZWRDb2Rlcyk7XG5cbiAgICAgICAgaWYgKCFjb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvZGUgPSB0aGlzLl9maW5kRW5kKGNvZGUuZW5kLCAwKTtcblxuICAgICAgICBpZiAoIWNvZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVjb2RlZENvZGVzLnB1c2goY29kZSk7XG5cbiAgICAgICAgLy8gQ2hlY2tzdW1cbiAgICAgICAgaWYgKCF0aGlzLl9jaGVja3N1bShyZXN1bHQpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnN1cHBsZW1lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHN1cHBsZW1lbnQgPSB0aGlzLl9kZWNvZGVFeHRlbnNpb25zKGNvZGUuZW5kKTtcbiAgICAgICAgICAgIGlmICghc3VwcGxlbWVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBsYXN0Q29kZSA9IHN1cHBsZW1lbnQuZGVjb2RlZENvZGVzW3N1cHBsZW1lbnQuZGVjb2RlZENvZGVzLmxlbmd0aCAtIDFdIGFzIEJhcmNvZGVJbmZvO1xuICAgICAgICAgICAgY29uc3QgZW5kSW5mbyA9IHtcbiAgICAgICAgICAgICAgICBzdGFydDogbGFzdENvZGUuc3RhcnQgKyAoKChsYXN0Q29kZS5lbmQgLSBsYXN0Q29kZS5zdGFydCkgLyAyKSB8IDApLFxuICAgICAgICAgICAgICAgIGVuZDogbGFzdENvZGUuZW5kXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpZiAoIXRoaXMuX3ZlcmlmeVRyYWlsaW5nV2hpdGVzcGFjZShlbmRJbmZvKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXN1bHRJbmZvID0ge1xuICAgICAgICAgICAgICAgIHN1cHBsZW1lbnQsXG4gICAgICAgICAgICAgICAgY29kZTogcmVzdWx0LmpvaW4oJycpICsgc3VwcGxlbWVudC5jb2RlXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvZGU6IHJlc3VsdC5qb2luKCcnKSxcbiAgICAgICAgICAgIHN0YXJ0OiBzdGFydEluZm8uc3RhcnQsXG4gICAgICAgICAgICBlbmQ6IGNvZGUuZW5kLFxuICAgICAgICAgICAgc3RhcnRJbmZvLFxuICAgICAgICAgICAgZGVjb2RlZENvZGVzLFxuICAgICAgICAgICAgLi4ucmVzdWx0SW5mb1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHByaXZhdGUgX2RlY29kZUV4dGVuc2lvbnMob2Zmc2V0OiBudW1iZXIpOiBCYXJjb2RlIHtcbiAgICAgICAgY29uc3Qgc3RhcnQgPSB0aGlzLl9uZXh0U2V0KHRoaXMuX3Jvdywgb2Zmc2V0KTtcbiAgICAgICAgY29uc3Qgc3RhcnRJbmZvID0gdGhpcy5fZmluZFBhdHRlcm4oRVhURU5TSU9OX1NUQVJUX1BBVFRFUk4sIHN0YXJ0LCAwLCBmYWxzZSk7XG5cbiAgICAgICAgaWYgKHN0YXJ0SW5mbyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3VwcGxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSB0aGlzLnN1cHBsZW1lbnRzW2ldLmRlY29kZSh0aGlzLl9yb3csIHN0YXJ0SW5mby5lbmQpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGNvZGU6IHJlc3VsdC5jb2RlLFxuICAgICAgICAgICAgICAgICAgICBzdGFydCxcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRJbmZvLFxuICAgICAgICAgICAgICAgICAgICBlbmQ6IHJlc3VsdC5lbmQsXG4gICAgICAgICAgICAgICAgICAgIGRlY29kZWRDb2RlczogcmVzdWx0LmRlY29kZWRDb2Rlc1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2NoZWNrc3VtKHJlc3VsdDogQXJyYXk8bnVtYmVyPik6IGJvb2xlYW4ge1xuICAgICAgICBsZXQgc3VtID0gMDtcblxuICAgICAgICBmb3IgKGxldCBpID0gcmVzdWx0Lmxlbmd0aCAtIDI7IGkgPj0gMDsgaSAtPSAyKSB7XG4gICAgICAgICAgICBzdW0gKz0gcmVzdWx0W2ldO1xuICAgICAgICB9XG5cbiAgICAgICAgc3VtICo9IDM7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IHJlc3VsdC5sZW5ndGggLSAxOyBpID49IDA7IGkgLT0gMikge1xuICAgICAgICAgICAgc3VtICs9IHJlc3VsdFtpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdW0gJSAxMCA9PT0gMDtcbiAgICB9XG59IiwiaW1wb3J0IHsgbWVyZ2UgfSBmcm9tICcuLi9jb21tb24vbWVyZ2UnO1xuaW1wb3J0IHsgQmFyY29kZSwgQmFyY29kZUluZm8sIEJhcmNvZGVSZWFkZXIsIEJhcmNvZGVSZWFkZXJDb25maWcgfSBmcm9tICcuL2JhcmNvZGUtcmVhZGVyJztcblxuY29uc3QgTiA9IDE7XG5jb25zdCBXID0gMztcbmNvbnN0IFNUQVJUX1BBVFRFUk4gPSBbTiwgTiwgTiwgTl07XG5jb25zdCBTVE9QX1BBVFRFUk4gPSBbTiwgTiwgV107XG5jb25zdCBDT0RFX1BBVFRFUk4gPSBbXG4gICAgW04sIE4sIFcsIFcsIE5dLFxuICAgIFtXLCBOLCBOLCBOLCBXXSxcbiAgICBbTiwgVywgTiwgTiwgV10sXG4gICAgW1csIFcsIE4sIE4sIE5dLFxuICAgIFtOLCBOLCBXLCBOLCBXXSxcbiAgICBbVywgTiwgVywgTiwgTl0sXG4gICAgW04sIFcsIFcsIE4sIE5dLFxuICAgIFtOLCBOLCBOLCBXLCBXXSxcbiAgICBbVywgTiwgTiwgVywgTl0sXG4gICAgW04sIFcsIE4sIFcsIE5dXG5dO1xuY29uc3QgTUFYX0NPUlJFQ1RJT05fRkFDVE9SID0gNTtcblxuZXhwb3J0IGNsYXNzIEkyb2Y1UmVhZGVyIGV4dGVuZHMgQmFyY29kZVJlYWRlciB7XG4gICAgcHJpdmF0ZSBfYmFyU3BhY2VSYXRpbzogW251bWJlciwgbnVtYmVyXTtcblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZz86IEJhcmNvZGVSZWFkZXJDb25maWcpIHtcbiAgICAgICAgc3VwZXIobWVyZ2Uoe1xuICAgICAgICAgICAgbm9ybWFsaXplQmFyU3BhY2VXaWR0aDogZmFsc2UgLy8gTm9ybWFsaXplIHRoZSB3aWR0aCBkaWZmZXJlbmNlIGJldHdlZW4gYmFycyBhbmQgc3BhY2VzXG4gICAgICAgIH0sIGNvbmZpZykpO1xuXG4gICAgICAgIHRoaXMuX2JhclNwYWNlUmF0aW8gPSBbMSwgMV07XG4gICAgICAgIHRoaXMuX2Zvcm1hdCA9ICdpMm9mNSc7XG5cbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLm5vcm1hbGl6ZUJhclNwYWNlV2lkdGgpIHtcbiAgICAgICAgICAgIHRoaXMuX3NpbmdsZUNvZGVFcnJvciA9IDAuMzg7XG4gICAgICAgICAgICB0aGlzLl9hdmVyYWdlQ29kZUVycm9yID0gMC4wOTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3NpbmdsZUNvZGVFcnJvciA9IDAuNzg7XG4gICAgICAgICAgICB0aGlzLl9hdmVyYWdlQ29kZUVycm9yID0gMC4zODtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRlY29kZSgpOiBCYXJjb2RlIHtcbiAgICAgICAgY29uc3Qgc3RhcnRJbmZvID0gdGhpcy5fZmluZFN0YXJ0KCk7XG5cbiAgICAgICAgaWYgKCFzdGFydEluZm8pIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZW5kSW5mbyA9IHRoaXMuX2ZpbmRFbmQoKTtcblxuICAgICAgICBpZiAoIWVuZEluZm8pIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY291bnRlcnMgPSB0aGlzLl9maWxsQ291bnRlcnMoc3RhcnRJbmZvLmVuZCwgZW5kSW5mby5zdGFydCwgMCk7XG5cbiAgICAgICAgaWYgKGNvdW50ZXJzLmxlbmd0aCAlIDEwICE9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBBcnJheTxudW1iZXI+KCk7XG4gICAgICAgIGNvbnN0IGRlY29kZWRDb2RlcyA9IG5ldyBBcnJheTxCYXJjb2RlSW5mbz4oKTtcblxuICAgICAgICBkZWNvZGVkQ29kZXMucHVzaChzdGFydEluZm8pO1xuXG4gICAgICAgIGNvbnN0IGNvZGUgPSB0aGlzLl9kZWNvZGVQYXlsb2FkKGNvdW50ZXJzLCByZXN1bHQsIGRlY29kZWRDb2Rlcyk7XG5cbiAgICAgICAgaWYgKCFjb2RlIHx8IHJlc3VsdC5sZW5ndGggJSAyICE9PSAwIHx8IHJlc3VsdC5sZW5ndGggPCA2KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlY29kZWRDb2Rlcy5wdXNoKGVuZEluZm8pO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb2RlOiByZXN1bHQuam9pbignJyksXG4gICAgICAgICAgICBzdGFydDogc3RhcnRJbmZvLnN0YXJ0LFxuICAgICAgICAgICAgZW5kOiBlbmRJbmZvLmVuZCxcbiAgICAgICAgICAgIHN0YXJ0SW5mbyxcbiAgICAgICAgICAgIGRlY29kZWRDb2Rlc1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfbWF0Y2hQYXR0ZXJuKGNvdW50ZXI6IEFycmF5PG51bWJlcj4sIGNvZGU6IFJlYWRvbmx5QXJyYXk8bnVtYmVyPik6IG51bWJlciB7XG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5ub3JtYWxpemVCYXJTcGFjZVdpZHRoKSB7XG4gICAgICAgICAgICBjb25zdCBjb3VudGVyU3VtOiBbbnVtYmVyLCBudW1iZXJdID0gWzAsIDBdO1xuICAgICAgICAgICAgY29uc3QgY29kZVN1bTogW251bWJlciwgbnVtYmVyXSA9IFswLCAwXTtcbiAgICAgICAgICAgIGNvbnN0IGNvcnJlY3Rpb246IFtudW1iZXIsIG51bWJlcl0gPSBbMCwgMF07XG4gICAgICAgICAgICBjb25zdCBjb3JyZWN0aW9uUmF0aW8gPSBNQVhfQ09SUkVDVElPTl9GQUNUT1I7XG4gICAgICAgICAgICBjb25zdCBjb3JyZWN0aW9uUmF0aW9JbnZlcnNlID0gMSAvIGNvcnJlY3Rpb25SYXRpbztcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY291bnRlclN1bVtpICUgMl0gKz0gY291bnRlcltpXTtcbiAgICAgICAgICAgICAgICBjb2RlU3VtW2kgJSAyXSArPSBjb2RlW2ldO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb3JyZWN0aW9uWzBdID0gY29kZVN1bVswXSAvIGNvdW50ZXJTdW1bMF07XG4gICAgICAgICAgICBjb3JyZWN0aW9uWzFdID0gY29kZVN1bVsxXSAvIGNvdW50ZXJTdW1bMV07XG5cbiAgICAgICAgICAgIGNvcnJlY3Rpb25bMF0gPSBNYXRoLm1heChNYXRoLm1pbihjb3JyZWN0aW9uWzBdLCBjb3JyZWN0aW9uUmF0aW8pLCBjb3JyZWN0aW9uUmF0aW9JbnZlcnNlKTtcbiAgICAgICAgICAgIGNvcnJlY3Rpb25bMV0gPSBNYXRoLm1heChNYXRoLm1pbihjb3JyZWN0aW9uWzFdLCBjb3JyZWN0aW9uUmF0aW8pLCBjb3JyZWN0aW9uUmF0aW9JbnZlcnNlKTtcbiAgICAgICAgICAgIHRoaXMuX2JhclNwYWNlUmF0aW8gPSBjb3JyZWN0aW9uO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50ZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb3VudGVyW2ldICo9IHRoaXMuX2JhclNwYWNlUmF0aW9baSAlIDJdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1cGVyLl9tYXRjaFBhdHRlcm4oY291bnRlciwgY29kZSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9maW5kU3RhcnQoKTogQmFyY29kZUluZm8ge1xuICAgICAgICBsZXQgb2Zmc2V0ID0gdGhpcy5fbmV4dFNldCh0aGlzLl9yb3cpO1xuICAgICAgICBsZXQgc3RhcnRJbmZvOiBCYXJjb2RlSW5mbztcblxuICAgICAgICB3aGlsZSAoIXN0YXJ0SW5mbykge1xuICAgICAgICAgICAgc3RhcnRJbmZvID0gdGhpcy5fZmluZFBhdHRlcm4oU1RBUlRfUEFUVEVSTiwgb2Zmc2V0LCAwLCB0cnVlKTtcbiAgICAgICAgICAgIGlmICghc3RhcnRJbmZvKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IG5hcnJvd0JhcldpZHRoID0gKHN0YXJ0SW5mby5lbmQgLSBzdGFydEluZm8uc3RhcnQpID4+IDI7XG4gICAgICAgICAgICBjb25zdCBsZWFkaW5nV2hpdGVzcGFjZVN0YXJ0ID0gc3RhcnRJbmZvLnN0YXJ0IC0gbmFycm93QmFyV2lkdGggKiAxMDtcblxuICAgICAgICAgICAgaWYgKGxlYWRpbmdXaGl0ZXNwYWNlU3RhcnQgPj0gMCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9tYXRjaFJhbmdlKGxlYWRpbmdXaGl0ZXNwYWNlU3RhcnQsIHN0YXJ0SW5mby5zdGFydCwgMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0YXJ0SW5mbztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG9mZnNldCA9IHN0YXJ0SW5mby5lbmQ7XG4gICAgICAgICAgICBzdGFydEluZm8gPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF92ZXJpZnlUcmFpbGluZ1doaXRlc3BhY2UoZW5kSW5mbzogQmFyY29kZUluZm8pOiBCYXJjb2RlSW5mbyB7XG4gICAgICAgIGNvbnN0IHRyYWlsaW5nV2hpdGVzcGFjZUVuZCA9IGVuZEluZm8uZW5kICsgKGVuZEluZm8uZW5kIC0gZW5kSW5mby5zdGFydCkgLyAyO1xuXG4gICAgICAgIGlmICh0cmFpbGluZ1doaXRlc3BhY2VFbmQgPCB0aGlzLl9yb3cubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fbWF0Y2hSYW5nZShlbmRJbmZvLmVuZCwgdHJhaWxpbmdXaGl0ZXNwYWNlRW5kLCAwKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbmRJbmZvO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9maW5kRW5kKCk6IEJhcmNvZGVJbmZvIHtcbiAgICAgICAgdGhpcy5fcm93LnJldmVyc2UoKTtcblxuICAgICAgICBjb25zdCBlbmRJbmZvID0gdGhpcy5fZmluZFBhdHRlcm4oU1RPUF9QQVRURVJOLCB1bmRlZmluZWQsIDAsIGZhbHNlKTtcblxuICAgICAgICB0aGlzLl9yb3cucmV2ZXJzZSgpO1xuXG4gICAgICAgIGlmIChlbmRJbmZvID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHJldmVyc2UgbnVtYmVyc1xuICAgICAgICBjb25zdCBzdGFydCA9IGVuZEluZm8uc3RhcnQ7XG4gICAgICAgIGVuZEluZm8uc3RhcnQgPSB0aGlzLl9yb3cubGVuZ3RoIC0gZW5kSW5mby5lbmQ7XG4gICAgICAgIGVuZEluZm8uZW5kID0gdGhpcy5fcm93Lmxlbmd0aCAtIHN0YXJ0O1xuXG4gICAgICAgIHJldHVybiBlbmRJbmZvICE9PSBudWxsID8gdGhpcy5fdmVyaWZ5VHJhaWxpbmdXaGl0ZXNwYWNlKGVuZEluZm8pIDogbnVsbDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2RlY29kZUNvZGUoY291bnRlcjogQXJyYXk8bnVtYmVyPik6IEJhcmNvZGVJbmZvIHtcbiAgICAgICAgY29uc3QgYmVzdE1hdGNoOiBCYXJjb2RlSW5mbyA9IHtcbiAgICAgICAgICAgIGVycm9yOiBOdW1iZXIuTUFYX1ZBTFVFLFxuICAgICAgICAgICAgY29kZTogLTEsXG4gICAgICAgICAgICBzdGFydDogMCxcbiAgICAgICAgICAgIGVuZDogMFxuICAgICAgICB9O1xuXG4gICAgICAgIGZvciAobGV0IGNvZGUgPSAwOyBjb2RlIDwgQ09ERV9QQVRURVJOLmxlbmd0aDsgY29kZSsrKSB7XG4gICAgICAgICAgICBjb25zdCBlcnJvciA9IHRoaXMuX21hdGNoUGF0dGVybihjb3VudGVyLCBDT0RFX1BBVFRFUk5bY29kZV0pO1xuICAgICAgICAgICAgaWYgKGVycm9yIDwgYmVzdE1hdGNoLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgYmVzdE1hdGNoLmNvZGUgPSBjb2RlO1xuICAgICAgICAgICAgICAgIGJlc3RNYXRjaC5lcnJvciA9IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGJlc3RNYXRjaC5lcnJvciA8IHRoaXMuQVZFUkFHRV9DT0RFX0VSUk9SID8gYmVzdE1hdGNoIDogbnVsbDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2RlY29kZVBheWxvYWQoY291bnRlcnM6IFJlYWRvbmx5QXJyYXk8bnVtYmVyPiwgcmVzdWx0OiBBcnJheTxudW1iZXI+LCBkZWNvZGVkQ29kZXM6IEFycmF5PEJhcmNvZGVJbmZvPik6IFtCYXJjb2RlSW5mbywgQmFyY29kZUluZm9dIHtcbiAgICAgICAgY29uc3QgY291bnRlckxlbmd0aCA9IGNvdW50ZXJzLmxlbmd0aDtcbiAgICAgICAgY29uc3QgY291bnRlcjAgPSBbMCwgMCwgMCwgMCwgMF07XG4gICAgICAgIGNvbnN0IGNvdW50ZXIxID0gWzAsIDAsIDAsIDAsIDBdO1xuICAgICAgICBsZXQgY29kZTA6IEJhcmNvZGVJbmZvO1xuICAgICAgICBsZXQgY29kZTE6IEJhcmNvZGVJbmZvO1xuICAgICAgICBsZXQgcG9zID0gMDtcblxuICAgICAgICB3aGlsZSAocG9zIDwgY291bnRlckxlbmd0aCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb3VudGVyMFtpXSA9IGNvdW50ZXJzW3Bvc10gKiB0aGlzLl9iYXJTcGFjZVJhdGlvWzBdO1xuICAgICAgICAgICAgICAgIGNvdW50ZXIxW2ldID0gY291bnRlcnNbcG9zICsgMV0gKiB0aGlzLl9iYXJTcGFjZVJhdGlvWzFdO1xuICAgICAgICAgICAgICAgIHBvcyArPSAyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb2RlMCA9IHRoaXMuX2RlY29kZUNvZGUoY291bnRlcjApO1xuICAgICAgICAgICAgaWYgKCFjb2RlMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb2RlMSA9IHRoaXMuX2RlY29kZUNvZGUoY291bnRlcjEpO1xuICAgICAgICAgICAgaWYgKCFjb2RlMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXN1bHQucHVzaChjb2RlMC5jb2RlLCBjb2RlMS5jb2RlKTtcbiAgICAgICAgICAgIGRlY29kZWRDb2Rlcy5wdXNoKGNvZGUwLCBjb2RlMSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gW2NvZGUwLCBjb2RlMV07XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29kZTEyOFJlYWRlciB9IGZyb20gJy4vY29kZS0xMjgtcmVhZGVyJztcbmltcG9ydCB7IENvZGUzOVJlYWRlciB9IGZyb20gJy4vY29kZS0zOS1yZWFkZXInO1xuaW1wb3J0IHsgQ29kZTM5VklOUmVhZGVyIH0gZnJvbSAnLi9jb2RlLTM5LXZpbi1yZWFkZXInO1xuaW1wb3J0IHsgQ29kYWJhclJlYWRlciB9IGZyb20gJy4vY29kYWJhci1yZWFkZXInO1xuaW1wb3J0IHsgRUFOUmVhZGVyIH0gZnJvbSAnLi9lYW4tcmVhZGVyJztcbmltcG9ydCB7IEVBTjhSZWFkZXIgfSBmcm9tICcuL2Vhbi04LXJlYWRlcic7XG5pbXBvcnQgeyBFQU4yUmVhZGVyIH0gZnJvbSAnLi9lYW4tMi1yZWFkZXInO1xuaW1wb3J0IHsgRUFONVJlYWRlciB9IGZyb20gJy4vZWFuLTUtcmVhZGVyJztcbmltcG9ydCB7IFVQQ1JlYWRlciB9IGZyb20gJy4vdXBjLXJlYWRlcic7XG5pbXBvcnQgeyBVUENFUmVhZGVyIH0gZnJvbSAnLi91cGMtZS1yZWFkZXInO1xuaW1wb3J0IHsgSTJvZjVSZWFkZXIgfSBmcm9tICcuL2kyb2Y1LXJlYWRlcic7XG5pbXBvcnQgeyBUd29PZkZpdmVSZWFkZXIgfSBmcm9tICcuLzJvZjUtcmVhZGVyJztcbmltcG9ydCB7IENvZGU5M1JlYWRlciB9IGZyb20gJy4vY29kZS05My1yZWFkZXInO1xuXG5leHBvcnQgY29uc3QgUmVhZGVycyA9IHtcbiAgICBjb2RlXzEyOF9yZWFkZXI6IENvZGUxMjhSZWFkZXIsXG4gICAgZWFuX3JlYWRlcjogRUFOUmVhZGVyLFxuICAgIGVhbl81X3JlYWRlcjogRUFONVJlYWRlcixcbiAgICBlYW5fMl9yZWFkZXI6IEVBTjJSZWFkZXIsXG4gICAgZWFuXzhfcmVhZGVyOiBFQU44UmVhZGVyLFxuICAgIGNvZGVfMzlfcmVhZGVyOiBDb2RlMzlSZWFkZXIsXG4gICAgY29kZV8zOV92aW5fcmVhZGVyOiBDb2RlMzlWSU5SZWFkZXIsXG4gICAgY29kYWJhcl9yZWFkZXI6IENvZGFiYXJSZWFkZXIsXG4gICAgdXBjX3JlYWRlcjogVVBDUmVhZGVyLFxuICAgIHVwY19lX3JlYWRlcjogVVBDRVJlYWRlcixcbiAgICBpMm9mNV9yZWFkZXI6IEkyb2Y1UmVhZGVyLFxuICAgICcyb2Y1X3JlYWRlcic6IFR3b09mRml2ZVJlYWRlcixcbiAgICBjb2RlXzkzX3JlYWRlcjogQ29kZTkzUmVhZGVyXG59O1xuIiwiaW1wb3J0IHsgQmFyY29kZUluZm8sIEJhcmNvZGVSZWFkZXIsIEJhcmNvZGVSZWFkZXJDb25maWcgfSBmcm9tICcuL2JhcmNvZGUtcmVhZGVyJztcbmltcG9ydCB7IEVBTlJlYWRlciB9IGZyb20gJy4vZWFuLXJlYWRlcic7XG5cbmNvbnN0IENPREVfRlJFUVVFTkNZID0gW1s1NiwgNTIsIDUwLCA0OSwgNDQsIDM4LCAzNSwgNDIsIDQxLCAzN10sIFs3LCAxMSwgMTMsIDE0LCAxOSwgMjUsIDI4LCAyMSwgMjIsIDI2XV07XG5cbmV4cG9ydCBjbGFzcyBVUENFUmVhZGVyIGV4dGVuZHMgRUFOUmVhZGVyIHtcbiAgICBnZXQgU1RPUF9QQVRURVJOKCkge1xuICAgICAgICByZXR1cm4gWzEgLyA2ICogNywgMSAvIDYgKiA3LCAxIC8gNiAqIDcsIDEgLyA2ICogNywgMSAvIDYgKiA3LCAxIC8gNiAqIDddO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZz86IEJhcmNvZGVSZWFkZXJDb25maWcsIHN1cHBsZW1lbnRzPzogQXJyYXk8QmFyY29kZVJlYWRlcj4pIHtcbiAgICAgICAgc3VwZXIoY29uZmlnLCBzdXBwbGVtZW50cyk7XG5cbiAgICAgICAgdGhpcy5fZm9ybWF0ID0gJ3VwY19lJztcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2RlY29kZVBheWxvYWQoY29kZTogQmFyY29kZUluZm8sIHJlc3VsdDogQXJyYXk8bnVtYmVyPiwgZGVjb2RlZENvZGVzOiBBcnJheTxCYXJjb2RlSW5mbz4pOiBCYXJjb2RlSW5mbyB7XG4gICAgICAgIGxldCBjb2RlRnJlcXVlbmN5ID0gMHgwO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gICAgICAgICAgICBjb2RlID0gdGhpcy5fZGVjb2RlQ29kZShjb2RlLmVuZCk7XG4gICAgICAgICAgICBpZiAoIWNvZGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb2RlLmNvZGUgPj0gdGhpcy5DT0RFX0dfU1RBUlQpIHtcbiAgICAgICAgICAgICAgICBjb2RlLmNvZGUgPSBjb2RlLmNvZGUgLSB0aGlzLkNPREVfR19TVEFSVDtcbiAgICAgICAgICAgICAgICBjb2RlRnJlcXVlbmN5IHw9IDEgPDwgKDUgLSBpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGNvZGUuY29kZSk7XG4gICAgICAgICAgICBkZWNvZGVkQ29kZXMucHVzaChjb2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5fZGV0ZXJtaW5lUGFyaXR5KGNvZGVGcmVxdWVuY3ksIHJlc3VsdCkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvZGU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZGV0ZXJtaW5lUGFyaXR5KGNvZGVGcmVxdWVuY3k6IG51bWJlciwgcmVzdWx0OiBBcnJheTxudW1iZXI+KTogYm9vbGVhbiB7XG4gICAgICAgIGZvciAobGV0IG5yU3lzdGVtID0gMDsgbnJTeXN0ZW0gPCBDT0RFX0ZSRVFVRU5DWS5sZW5ndGg7IG5yU3lzdGVtKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQ09ERV9GUkVRVUVOQ1lbbnJTeXN0ZW1dLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvZGVGcmVxdWVuY3kgPT09IENPREVfRlJFUVVFTkNZW25yU3lzdGVtXVtpXSkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQudW5zaGlmdChuclN5c3RlbSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGkpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2NvbnZlcnRUb1VQQ0EocmVzdWx0OiBBcnJheTxudW1iZXI+KTogQXJyYXk8bnVtYmVyPiB7XG4gICAgICAgIGNvbnN0IGxhc3REaWdpdCA9IHJlc3VsdFtyZXN1bHQubGVuZ3RoIC0gMl07XG4gICAgICAgIGxldCB1cGNhID0gW3Jlc3VsdFswXV07XG5cbiAgICAgICAgaWYgKGxhc3REaWdpdCA8PSAyKSB7XG4gICAgICAgICAgICB1cGNhID0gdXBjYS5jb25jYXQocmVzdWx0LnNsaWNlKDEsIDMpKS5jb25jYXQoW2xhc3REaWdpdCwgMCwgMCwgMCwgMF0pLmNvbmNhdChyZXN1bHQuc2xpY2UoMywgNikpO1xuICAgICAgICB9IGVsc2UgaWYgKGxhc3REaWdpdCA9PT0gMykge1xuICAgICAgICAgICAgdXBjYSA9IHVwY2EuY29uY2F0KHJlc3VsdC5zbGljZSgxLCA0KSkuY29uY2F0KFswLCAwLCAwLCAwLCAwXSkuY29uY2F0KHJlc3VsdC5zbGljZSg0LCA2KSk7XG4gICAgICAgIH0gZWxzZSBpZiAobGFzdERpZ2l0ID09PSA0KSB7XG4gICAgICAgICAgICB1cGNhID0gdXBjYS5jb25jYXQocmVzdWx0LnNsaWNlKDEsIDUpKS5jb25jYXQoWzAsIDAsIDAsIDAsIDAsIHJlc3VsdFs1XV0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdXBjYSA9IHVwY2EuY29uY2F0KHJlc3VsdC5zbGljZSgxLCA2KSkuY29uY2F0KFswLCAwLCAwLCAwLCBsYXN0RGlnaXRdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHVwY2EucHVzaChyZXN1bHRbcmVzdWx0Lmxlbmd0aCAtIDFdKTtcbiAgICAgICAgcmV0dXJuIHVwY2E7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9jaGVja3N1bShyZXN1bHQ6IEFycmF5PG51bWJlcj4pOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHN1cGVyLl9jaGVja3N1bSh0aGlzLl9jb252ZXJ0VG9VUENBKHJlc3VsdCkpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZmluZEVuZChvZmZzZXQ6IG51bWJlciwgaXNXaGl0ZTogMCB8IDEpIHtcbiAgICAgICAgaXNXaGl0ZSA9IDE7XG4gICAgICAgIHJldHVybiBzdXBlci5fZmluZEVuZChvZmZzZXQsIGlzV2hpdGUpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfdmVyaWZ5VHJhaWxpbmdXaGl0ZXNwYWNlKGVuZEluZm86IEJhcmNvZGVJbmZvKTogQmFyY29kZUluZm8ge1xuICAgICAgICBjb25zdCB0cmFpbGluZ1doaXRlc3BhY2VFbmQgPSBlbmRJbmZvLmVuZCArIChlbmRJbmZvLmVuZCAtIGVuZEluZm8uc3RhcnQpIC8gMjtcblxuICAgICAgICBpZiAodHJhaWxpbmdXaGl0ZXNwYWNlRW5kIDwgdGhpcy5fcm93Lmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX21hdGNoUmFuZ2UoZW5kSW5mby5lbmQsIHRyYWlsaW5nV2hpdGVzcGFjZUVuZCwgMCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZW5kSW5mbztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBCYXJjb2RlLCBCYXJjb2RlUmVhZGVyLCBCYXJjb2RlUmVhZGVyQ29uZmlnIH0gZnJvbSAnLi9iYXJjb2RlLXJlYWRlcic7XG5pbXBvcnQgeyBFQU5SZWFkZXIgfSBmcm9tICcuL2Vhbi1yZWFkZXInO1xuXG5leHBvcnQgY2xhc3MgVVBDUmVhZGVyIGV4dGVuZHMgRUFOUmVhZGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihjb25maWc/OiBCYXJjb2RlUmVhZGVyQ29uZmlnLCBzdXBwbGVtZW50cz86IEFycmF5PEJhcmNvZGVSZWFkZXI+KSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZywgc3VwcGxlbWVudHMpO1xuXG4gICAgICAgIHRoaXMuX2Zvcm1hdCA9ICd1cGNfYSc7XG4gICAgfVxuXG4gICAgZGVjb2RlKCk6IEJhcmNvZGUge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5kZWNvZGUoKTtcblxuICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5jb2RlICYmIHJlc3VsdC5jb2RlLmxlbmd0aCA9PT0gMTMgJiYgcmVzdWx0LmNvZGUuY2hhckF0KDApID09PSAnMCcpIHtcbiAgICAgICAgICAgIHJlc3VsdC5jb2RlID0gcmVzdWx0LmNvZGUuc3Vic3RyaW5nKDEpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9