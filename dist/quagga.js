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

/***/ "./src/analytics/result-collector.ts":
/*!*******************************************!*\
  !*** ./src/analytics/result-collector.ts ***!
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
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_image_debug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/image-debug */ "./src/common/image-debug.ts");




var ResultCollector =
/*#__PURE__*/
function () {
  function ResultCollector(config) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ResultCollector);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "_canvas", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "_context", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "_config", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "_capacity", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "_capture", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "_results", void 0);

    this._results = new Array();
    this._config = config;
    this._capacity = config.capacity || 20;
    this._capture = config.capture === true;

    if (this._capture) {
      this._canvas = document.createElement('canvas');
      this._context = this._canvas.getContext('2d');
    }
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ResultCollector, [{
    key: "addResult",
    value: function addResult(data, imageWidth, imageHeight, codeResult) {
      if (codeResult && this._capacity && !this._contains(codeResult) && this._passesFilter(codeResult)) {
        var result = {
          codeResult: codeResult
        };
        this._capacity--;

        if (this._capture) {
          this._canvas.width = imageWidth;
          this._canvas.height = imageHeight;
          _common_image_debug__WEBPACK_IMPORTED_MODULE_3__["ImageDebug"].drawImage(data, imageWidth, imageHeight, this._context);
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
  }, {
    key: "_contains",
    value: function _contains(codeResult) {
      return this._config.blacklist && this._config.blacklist.some(function (item) {
        return Object.keys(item).every(function (key) {
          return item[key] === codeResult[key];
        });
      });
    }
  }, {
    key: "_passesFilter",
    value: function _passesFilter(codeResult) {
      return typeof this._config.filter !== 'function' || this._config.filter(codeResult);
    }
  }]);

  return ResultCollector;
}();

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
var ImageDebug = {
  drawPath: function drawPath(path, context, color, lineWidth) {
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
  },
  drawImage: function drawImage(imageData, width, height, context) {
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
};

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
/* harmony import */ var _reader_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reader/index */ "./src/reader/index.ts");
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
            return new _reader_index__WEBPACK_IMPORTED_MODULE_5__["Readers"][supplement]();
          });
        }

        _this._barcodeReaders.push(new _reader_index__WEBPACK_IMPORTED_MODULE_5__["Readers"][reader](configuration, supplements));
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
/* harmony import */ var _common_media_devices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/media-devices */ "./src/common/media-devices.ts");




var _stream;

var CameraAccess = {
  /**
   * Attempts to attach the camera-stream to a given video element
   * and calls the callback function when the content is ready
   * @param video
   * @param videoConstraints
   */
  request: function () {
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
              return Object(_common_media_devices__WEBPACK_IMPORTED_MODULE_2__["getUserMedia"])(normalizedConstraints);

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
  }(),
  release: function release() {
    var tracks = _stream && _stream.getVideoTracks();

    if (tracks && tracks.length) {
      tracks[0].stop();
    }

    _stream = null;
  },
  enumerateVideoDevices: function () {
    var _enumerateVideoDevices = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var devices;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return Object(_common_media_devices__WEBPACK_IMPORTED_MODULE_2__["enumerateDevices"])();

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
  }(),
  getActiveStreamLabel: function getActiveStreamLabel() {
    var track = CameraAccess.getActiveTrack();
    return track ? track.label : '';
  },
  getActiveTrack: function getActiveTrack() {
    var tracks = _stream && _stream.getVideoTracks();

    if (tracks && tracks.length) {
      return tracks[0];
    }

    return null;
  },
  pickConstraints: function pickConstraints(videoConstraints) {
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
};

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
      var context = canvas.getContext('2d');
      context.strokeStyle = 'red';
      context.fillStyle = 'red';
      context.lineWidth = 1;
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
              context.strokeStyle = 'red';
              break;
            }

          case ContourDirection.CCW:
            {
              context.strokeStyle = 'blue';
              break;
            }

          case ContourDirection.Unknown:
            {
              context.strokeStyle = 'green';
              break;
            }
        }

        var p = q.firstVertex;
        context.beginPath();
        context.moveTo(p.x, p.y);

        do {
          p = p.next;
          context.lineTo(p.x, p.y);
        } while (p !== q.firstVertex);

        context.stroke();
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
/* harmony import */ var _analytics_result_collector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./analytics/result-collector */ "./src/analytics/result-collector.ts");
/* harmony import */ var _common_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/events */ "./src/common/events.ts");
/* harmony import */ var _common_image_debug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/image-debug */ "./src/common/image-debug.ts");
/* harmony import */ var _common_image_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/image-wrapper */ "./src/common/image-wrapper.ts");
/* harmony import */ var _common_merge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/merge */ "./src/common/merge.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config/config */ "./src/config/config.dev.ts");
/* harmony import */ var _decoder_barcode_decoder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./decoder/barcode-decoder */ "./src/decoder/barcode-decoder.ts");
/* harmony import */ var _input_camera_access__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./input/camera-access */ "./src/input/camera-access.ts");
/* harmony import */ var _input_frame_grabber__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./input/frame-grabber */ "./src/input/frame-grabber.ts");
/* harmony import */ var _input_image_stream__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./input/image-stream */ "./src/input/image-stream.ts");
/* harmony import */ var _input_live_stream__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./input/live-stream */ "./src/input/live-stream.ts");
/* harmony import */ var _input_video_stream__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./input/video-stream */ "./src/input/video-stream.ts");
/* harmony import */ var _input_input_stream_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./input/input-stream-utils */ "./src/input/input-stream-utils.ts");
/* harmony import */ var _locator_barcode_locator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./locator/barcode-locator */ "./src/locator/barcode-locator.ts");















var __factorySource__;

var _inputStream;

var _frameGrabber;

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

var _locator;

var _boxSize;

var _decoder;

var _workerPool = new Array();

var _onUIThread;

var _resultCollector;

var _config;

var Quagga = {
  init: function init(config, cb, imageWrapper) {
    _onUIThread = true;
    _config = Object(_common_merge__WEBPACK_IMPORTED_MODULE_4__["merge"])(_config_config__WEBPACK_IMPORTED_MODULE_5__["config"], config);

    if (imageWrapper) {
      _onUIThread = false;

      _initializeData(imageWrapper);

      cb();
    } else {
      _initInputStream(cb);
    }
  },
  CameraAccess: _input_camera_access__WEBPACK_IMPORTED_MODULE_7__["CameraAccess"],
  ImageDebug: _common_image_debug__WEBPACK_IMPORTED_MODULE_2__["ImageDebug"],
  ImageWrapper: _common_image_wrapper__WEBPACK_IMPORTED_MODULE_3__["ImageWrapper"],
  ResultCollector: _analytics_result_collector__WEBPACK_IMPORTED_MODULE_0__["ResultCollector"],

  get canvas() {
    return _canvasContainer;
  },

  start: function start() {
    if (_onUIThread && _config.inputStream.type === 'LiveStream') {
      _startContinuousUpdate();
    } else {
      _update();
    }
  },
  stop: function stop() {
    _stopped = true;

    _adjustWorkerPool(0);

    if (_config.inputStream.type === 'LiveStream') {
      _input_camera_access__WEBPACK_IMPORTED_MODULE_7__["CameraAccess"].release();

      _inputStream.clearEventHandlers();
    }
  },
  decodeSingle: function decodeSingle(config, resultCallback) {
    config = Object(_common_merge__WEBPACK_IMPORTED_MODULE_4__["merge"])({
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
    Quagga.init(config, function () {
      _common_events__WEBPACK_IMPORTED_MODULE_1__["Events"].once('processed', function (result) {
        Quagga.stop();
        resultCallback.call(null, result);
      }, true);
      Quagga.start();
    });
  },
  pause: function pause() {
    _stopped = true;
  },
  onDetected: function onDetected(callback) {
    _common_events__WEBPACK_IMPORTED_MODULE_1__["Events"].subscribe('detected', callback);
  },
  offDetected: function offDetected(callback) {
    _common_events__WEBPACK_IMPORTED_MODULE_1__["Events"].unsubscribe('detected', callback);
  },
  onProcessed: function onProcessed(callback) {
    _common_events__WEBPACK_IMPORTED_MODULE_1__["Events"].subscribe('processed', callback);
  },
  offProcessed: function offProcessed(callback) {
    _common_events__WEBPACK_IMPORTED_MODULE_1__["Events"].unsubscribe('processed', callback);
  },
  setReaders: function setReaders(readers) {
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
  },
  registerResultCollector: function registerResultCollector(resultCollector) {
    if (resultCollector && typeof resultCollector.addResult === 'function') {
      _resultCollector = resultCollector;
    }
  }
};

function _initializeData(imageWrapper) {
  _initBuffers(imageWrapper);

  _decoder = new _decoder_barcode_decoder__WEBPACK_IMPORTED_MODULE_6__["BarcodeDecoder"](_config.decoder, _inputImageWrapper);
}

function _initInputStream(callback) {
  var video;

  if (_config.inputStream.type === 'VideoStream') {
    video = document.createElement('video');
    _inputStream = new _input_video_stream__WEBPACK_IMPORTED_MODULE_11__["VideoStream"](video);
  } else if (_config.inputStream.type === 'ImageStream') {
    _inputStream = new _input_image_stream__WEBPACK_IMPORTED_MODULE_9__["ImageStream"]();
  } else if (_config.inputStream.type === 'LiveStream') {
    var viewport = _getViewPort();

    if (viewport) {
      video = viewport.querySelector('video');

      if (!video) {
        video = document.createElement('video');
        viewport.appendChild(video);
      }
    }

    _inputStream = new _input_live_stream__WEBPACK_IMPORTED_MODULE_10__["LiveStream"](video);
    _input_camera_access__WEBPACK_IMPORTED_MODULE_7__["CameraAccess"].request(video, _config.inputStream.constraints).then(function () {
      return _inputStream.trigger('canrecord');
    }, function (err) {
      return callback(err);
    });
  }

  _inputStream.setAttribute('preload', 'auto');

  _inputStream.config = _config.inputStream;

  _inputStream.addEventListener('canrecord', _canRecord.bind(this, callback));
}

function _getViewPort() {
  var target = _config.inputStream.target; // Check if target is already a DOM element

  if (target instanceof HTMLElement) {
    return target;
  } else {
    // Use '#interactive.viewport' as a fallback selector (backwards compatibility)
    var selector = typeof target === 'string' ? target : '#interactive.viewport';
    return document.querySelector(selector);
  }
}

function _canRecord(cb) {
  Object(_input_input_stream_utils__WEBPACK_IMPORTED_MODULE_12__["checkImageConstraints"])(_inputStream, _config.locator);

  _initCanvas();

  _frameGrabber = new _input_frame_grabber__WEBPACK_IMPORTED_MODULE_8__["FrameGrabber"](_inputStream, _canvasContainer.dom.image);

  _adjustWorkerPool(_config.numOfWorkers, function () {
    if (_config.numOfWorkers === 0) {
      _initializeData();
    }

    _inputStream.play();

    cb();
  });
}

function _initCanvas() {
  if (typeof document !== 'undefined') {
    var viewport = _getViewPort();

    _canvasContainer.dom.image = document.querySelector('canvas.imgBuffer');

    if (!_canvasContainer.dom.image) {
      _canvasContainer.dom.image = document.createElement('canvas');
      _canvasContainer.dom.image.className = 'imgBuffer';

      if (viewport && _config.inputStream.type === 'ImageStream') {
        viewport.appendChild(_canvasContainer.dom.image);
      }
    }

    _canvasContainer.ctx.image = _canvasContainer.dom.image.getContext('2d');
    _canvasContainer.dom.image.width = _inputStream.canvasWidth;
    _canvasContainer.dom.image.height = _inputStream.canvasHeight;
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
    _canvasContainer.dom.overlay.width = _inputStream.canvasWidth;
    _canvasContainer.dom.overlay.height = _inputStream.canvasHeight;
  }
}

function _initBuffers(imageWrapper) {
  if (imageWrapper) {
    _inputImageWrapper = imageWrapper;
  } else {
    _inputImageWrapper = new _common_image_wrapper__WEBPACK_IMPORTED_MODULE_3__["ImageWrapper"]({
      x: _inputStream.width,
      y: _inputStream.height
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
  _locator = new _locator_barcode_locator__WEBPACK_IMPORTED_MODULE_13__["BarcodeLocator"](_inputImageWrapper, _config.locator);
}

function _getBoundingBoxes() {
  if (_config.locate) {
    return _locator.locate();
  } else {
    return [[_boxSize[0], _boxSize[1], _boxSize[2], _boxSize[3]]];
  }
}

function _transform(polygon, offset) {
  polygon.forEach(function (vertex) {
    vertex.x += offset.x;
    vertex.y += offset.y;
  });
}

function _transformResult(result, offset) {
  if (result.barcodes) {
    result.barcodes.forEach(function (barcode) {
      return _transformResult(barcode, offset);
    });
  }

  if (result.line) {
    _transform(result.line, offset);
  }

  if (result.box) {
    _transform(result.box, offset);
  }

  if (result.boxes) {
    result.boxes.forEach(function (box) {
      return _transform(box, offset);
    });
  }
}

function _addResult(result, imageData, canvasWidth, canvasHeight) {
  if (imageData && _resultCollector) {
    if (result.barcodes) {
      result.barcodes.forEach(function (_ref2) {
        var codeResult = _ref2.codeResult;

        if (codeResult) {
          _resultCollector.addResult(imageData, canvasWidth, canvasHeight, codeResult);
        }
      });
    } else if (result.codeResult) {
      _resultCollector.addResult(imageData, canvasWidth, canvasHeight, result.codeResult);
    }
  }
}

function _hasCodeResult(result) {
  return result && (!!result.codeResult || result.barcodes && result.barcodes.some(function (barcode) {
    return !!barcode.codeResult;
  }));
}

function _publishResult(result, imageData) {
  var resultToPublish = result;

  if (result && _onUIThread) {
    var offset = _inputStream.topLeft;

    if (offset.x !== 0 || offset.y !== 0) {
      _transformResult(result, offset);
    }

    _addResult(result, imageData, _inputStream.canvasWidth, _inputStream.canvasHeight);

    resultToPublish = result.barcodes || result;
  }

  _common_events__WEBPACK_IMPORTED_MODULE_1__["Events"].publish('processed', resultToPublish);

  if (_hasCodeResult(result)) {
    _common_events__WEBPACK_IMPORTED_MODULE_1__["Events"].publish('detected', resultToPublish);
  }
}

function _locateAndDecode() {
  var boxes = _getBoundingBoxes();

  if (boxes) {
    var result = _decoder.decodeFromBoundingBoxes(boxes) || {};
    result.boxes = boxes;

    _publishResult(result, _inputImageWrapper.data);
  } else {
    _publishResult();
  }
}

function _update() {
  var availableWorker;

  if (_onUIThread) {
    if (_workerPool.length > 0) {
      availableWorker = _workerPool.find(function (workerThread) {
        return !workerThread.busy;
      });

      if (availableWorker) {
        _frameGrabber.attachData(availableWorker.imageData);
      } else {
        return; // all workers are busy
      }
    } else {
      _frameGrabber.attachData(_inputImageWrapper.data);
    }

    if (_frameGrabber.grab()) {
      if (availableWorker) {
        availableWorker.busy = true;
        availableWorker.worker.postMessage({
          cmd: 'process',
          imageData: availableWorker.imageData
        }, [availableWorker.imageData.buffer]);
      } else {
        _locateAndDecode();
      }
    }
  } else {
    _locateAndDecode();
  }
}

function _startContinuousUpdate() {
  var delay = 1000 / (_config.frequency || 60);
  var that = this;
  var next = null;
  _stopped = false;

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

function _initWorker(cb) {
  var blobURL = _generateWorkerBlob();

  var workerThread = {
    worker: new Worker(blobURL),
    imageData: new Uint8Array(_inputStream.width * _inputStream.height),
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

      _publishResult(data.result, workerThread.imageData);
    } else if (data.event === 'error') {
      if (true) {
        console.log('Worker error:', data.message);
      }
    }
  };

  workerThread.worker.postMessage({
    cmd: 'init',
    size: {
      x: _inputStream.width,
      y: _inputStream.height
    },
    imageData: workerThread.imageData,
    config: Object(_common_merge__WEBPACK_IMPORTED_MODULE_4__["merge"])(_config, {
      inputStream: {
        target: null
      }
    })
  }, [workerThread.imageData.buffer]);
}

function _workerInterface(factory) {
  var origin = '*';
  var imageWrapper;

  if (factory) {
    Quagga = factory()["default"];

    if (!Quagga) {
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
      var config = data.config;
      config.numOfWorkers = 0;
      imageWrapper = new _common_image_wrapper__WEBPACK_IMPORTED_MODULE_3__["ImageWrapper"]({
        x: data.size.x,
        y: data.size.y
      }, new Uint8Array(data.imageData));
      Quagga.init(config, function () {
        return self.postMessage({
          event: 'initialized',
          imageData: imageWrapper.data
        }, origin, [imageWrapper.data.buffer]);
      }, imageWrapper);
      Quagga.onProcessed(function (result) {
        return self.postMessage({
          event: 'processed',
          imageData: imageWrapper.data,
          result: result
        }, origin, [imageWrapper.data.buffer]);
      });
    } else if (data.cmd === 'process') {
      imageWrapper.data = new Uint8Array(data.imageData);
      Quagga.start();
    } else if (data.cmd === 'setReaders') {
      Quagga.setReaders(data.readers);
    }
  };
}

function _generateWorkerBlob() {
  var blob = new Blob(["(".concat(_workerInterface.toString(), ")(").concat(__factorySource__ || '', ");")], {
    type: 'text/javascript'
  });
  return window.URL.createObjectURL(blob);
}

function _adjustWorkerPool(capacity, cb) {
  var increaseBy = capacity - _workerPool.length;

  if (increaseBy === 0) {
    return cb && cb();
  }

  if (increaseBy < 0) {
    _workerPool.slice(increaseBy).forEach(function (_ref5) {
      var worker = _ref5.worker;
      worker.terminate();

      if (true) {
        console.log('Worker terminated!');
      }
    });

    _workerPool = _workerPool.slice(0, increaseBy);
    return cb && cb();
  } else {
    for (var i = 0; i < increaseBy; i++) {
      _initWorker(function (workerThread) {
        _workerPool.push(workerThread);

        if (_workerPool.length >= capacity && cb) {
          cb();
        }
      });
    }
  }
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9RdWFnZ2Evd2VicGFjay9teU1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vUXVhZ2dhL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1F1YWdnYS8vVXNlcnMvYWRvbXJhdGNoZXYvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy9Vc2Vycy9hZG9tcmF0Y2hldi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy9Vc2Vycy9hZG9tcmF0Y2hldi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yLmpzIiwid2VicGFjazovL1F1YWdnYS8vVXNlcnMvYWRvbXJhdGNoZXYvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy9Vc2Vycy9hZG9tcmF0Y2hldi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly9RdWFnZ2EvL1VzZXJzL2Fkb21yYXRjaGV2L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL1F1YWdnYS8vVXNlcnMvYWRvbXJhdGNoZXYvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0LmpzIiwid2VicGFjazovL1F1YWdnYS8vVXNlcnMvYWRvbXJhdGNoZXYvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy9Vc2Vycy9hZG9tcmF0Y2hldi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly9RdWFnZ2EvL1VzZXJzL2Fkb21yYXRjaGV2L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9RdWFnZ2EvL1VzZXJzL2Fkb21yYXRjaGV2L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL1F1YWdnYS8vVXNlcnMvYWRvbXJhdGNoZXYvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly9RdWFnZ2EvL1VzZXJzL2Fkb21yYXRjaGV2L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL1F1YWdnYS8vVXNlcnMvYWRvbXJhdGNoZXYvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc3VwZXJQcm9wQmFzZS5qcyIsIndlYnBhY2s6Ly9RdWFnZ2EvL1VzZXJzL2Fkb21yYXRjaGV2L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovL1F1YWdnYS8vVXNlcnMvYWRvbXJhdGNoZXYvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL1F1YWdnYS8vVXNlcnMvYWRvbXJhdGNoZXYvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwid2VicGFjazovL1F1YWdnYS8vVXNlcnMvYWRvbXJhdGNoZXYvbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS1tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy9Vc2Vycy9hZG9tcmF0Y2hldi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovL1F1YWdnYS8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL2FuYWx5dGljcy9yZXN1bHQtY29sbGVjdG9yLnRzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9jb21tb24vY2x1c3Rlci50cyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvY29tbW9uL2V2ZW50cy50cyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvY29tbW9uL2hzdjJyZ2IudHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL2NvbW1vbi9pbWFnZS1kZWJ1Zy50cyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvY29tbW9uL2ltYWdlLXdyYXBwZXIudHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL2NvbW1vbi9tZWRpYS1kZXZpY2VzLnRzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9jb21tb24vbWVyZ2UudHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL2NvbmZpZy9jb25maWcuZGV2LnRzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9kZWNvZGVyL2JhcmNvZGUtZGVjb2Rlci50cyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvZGVjb2Rlci9icmVzZW5oYW0udHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL2lucHV0L2NhbWVyYS1hY2Nlc3MudHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL2lucHV0L2V4aWYtaGVscGVyLnRzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9pbnB1dC9mcmFtZS1ncmFiYmVyLnRzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9pbnB1dC9pbWFnZS1sb2FkZXIudHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL2lucHV0L2ltYWdlLXN0cmVhbS50cyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvaW5wdXQvaW5wdXQtc3RyZWFtLXV0aWxzLnRzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9pbnB1dC9pbnB1dC1zdHJlYW0udHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL2lucHV0L2xpdmUtc3RyZWFtLnRzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9pbnB1dC92aWRlby1zdHJlYW0udHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL2xvY2F0b3IvYmFyY29kZS1sb2NhdG9yLXV0aWxzLnRzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9sb2NhdG9yL2JhcmNvZGUtbG9jYXRvci50cyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvbG9jYXRvci9yYXN0ZXJpemVyLnRzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9sb2NhdG9yL3NrZWxldG9uaXplci5qcyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvbG9jYXRvci90cmFjZXIudHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL3F1YWdnYS50cyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvcmVhZGVyLzJvZjUtcmVhZGVyLnRzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9yZWFkZXIvYmFyY29kZS1yZWFkZXIudHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL3JlYWRlci9jb2RhYmFyLXJlYWRlci50cyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvcmVhZGVyL2NvZGUtMTI4LXJlYWRlci50cyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvcmVhZGVyL2NvZGUtMzktcmVhZGVyLnRzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9yZWFkZXIvY29kZS0zOS12aW4tcmVhZGVyLnRzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9yZWFkZXIvY29kZS05My1yZWFkZXIudHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL3JlYWRlci9lYW4tMi1yZWFkZXIudHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL3JlYWRlci9lYW4tNS1yZWFkZXIudHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL3JlYWRlci9lYW4tOC1yZWFkZXIudHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL3JlYWRlci9lYW4tcmVhZGVyLnRzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9yZWFkZXIvaTJvZjUtcmVhZGVyLnRzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9yZWFkZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL3JlYWRlci91cGMtZS1yZWFkZXIudHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL3JlYWRlci91cGMtcmVhZGVyLnRzIl0sIm5hbWVzIjpbIlJlc3VsdENvbGxlY3RvciIsImNvbmZpZyIsIl9yZXN1bHRzIiwiQXJyYXkiLCJfY29uZmlnIiwiX2NhcGFjaXR5IiwiY2FwYWNpdHkiLCJfY2FwdHVyZSIsImNhcHR1cmUiLCJfY2FudmFzIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiX2NvbnRleHQiLCJnZXRDb250ZXh0IiwiZGF0YSIsImltYWdlV2lkdGgiLCJpbWFnZUhlaWdodCIsImNvZGVSZXN1bHQiLCJfY29udGFpbnMiLCJfcGFzc2VzRmlsdGVyIiwicmVzdWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJJbWFnZURlYnVnIiwiZHJhd0ltYWdlIiwiZnJhbWUiLCJ0b0RhdGFVUkwiLCJwdXNoIiwiYmxhY2tsaXN0Iiwic29tZSIsIml0ZW0iLCJPYmplY3QiLCJrZXlzIiwiZXZlcnkiLCJrZXkiLCJmaWx0ZXIiLCJDbHVzdGVyIiwibW9tZW50cyIsInRocmVzaG9sZCIsImNsdXN0ZXJzIiwiZm9yRWFjaCIsIm1vbWVudCIsIm1hdGNoaW5nQ2x1c3RlciIsImZpbmQiLCJjbHVzdGVyIiwiZml0cyIsImFkZCIsIl90aHJlc2hvbGQiLCJfbW9tZW50cyIsIl9jZW50ZXIiLCJyYWQiLCJ4IiwieSIsInBvaW50IiwicmVkdWNlIiwic3VtIiwicCIsImxlbmd0aCIsIk1hdGgiLCJjb3MiLCJzaW4iLCJzaW1pbGFyaXR5IiwiYWJzIiwiZXZlbnRzIiwiRXZlbnRzIiwiZXZlbnQiLCJjYWxsYmFjayIsImFzeW5jIiwic3Vic2NyaXB0aW9uIiwiZ2V0RXZlbnQiLCJzdWJzY3JpcHRpb25zIiwidHlwZSIsImV2ZW50SXRlbSIsIm9uY2UiLCJwdWJsaXNoU3Vic2NyaXB0aW9uIiwic3Vic2NyaWJlIiwiZXZlbnROYW1lIiwic2V0VGltZW91dCIsImhzdjJyZ2IiLCJoc3YiLCJyZ2IiLCJoIiwicyIsInYiLCJjIiwibSIsInIiLCJnIiwiYiIsImRyYXdQYXRoIiwicGF0aCIsImNvbnRleHQiLCJjb2xvciIsImxpbmVXaWR0aCIsInN0cm9rZVN0eWxlIiwiZmlsbFN0eWxlIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwic2xpY2UiLCJsaW5lVG8iLCJjbG9zZVBhdGgiLCJzdHJva2UiLCJpbWFnZURhdGEiLCJjYW52YXNEYXRhIiwiZ2V0SW1hZ2VEYXRhIiwiaW1hZ2VJbmRleCIsImNhbnZhc0luZGV4IiwidmFsdWUiLCJwdXRJbWFnZURhdGEiLCJJbWFnZVdyYXBwZXIiLCJzaXplIiwiYXJyYXlUeXBlIiwiaW5pdGlhbGl6ZSIsIlVpbnQ4QXJyYXkiLCJmaWxsIiwiYm9yZGVyIiwiaW1hZ2VXcmFwcGVyIiwiZnJvbVgiLCJmcm9tWSIsInNpemVZIiwic2l6ZVgiLCJpIiwibGFiZWxDb3VudCIsImxhYmVsU3VtIiwibTAwIiwibTAxIiwibTEwIiwibTExIiwibTAyIiwibTIwIiwidGhldGEiLCJ5c3EiLCJ2YWwiLCJsYWJlbCIsIlBJIiwiUElfNCIsImlzTmFOIiwieF8iLCJ5XyIsIm11MTEiLCJtdTAyIiwibXUyMCIsInRtcCIsImF0YW4iLCJzY2FsZSIsImN1cnJlbnQiLCJwaXhlbCIsImdldCIsIndoaXRlUmdiIiwiYmxhY2tSZ2IiLCJlbnVtZXJhdGVEZXZpY2VzIiwibmF2aWdhdG9yIiwibWVkaWFEZXZpY2VzIiwiUHJvbWlzZSIsInJlamVjdCIsIkVycm9yIiwiZ2V0VXNlck1lZGlhIiwiY29uc3RyYWludHMiLCJtZXJnZSIsImlzT2JqZWN0Iiwib2JqIiwib2JqZWN0cyIsInByZXYiLCJwVmFsIiwib1ZhbCIsImlzQXJyYXkiLCJpbnB1dFN0cmVhbSIsIm5hbWUiLCJmYWNpbmdNb2RlIiwiYXJlYSIsInRvcCIsInJpZ2h0IiwibGVmdCIsImJvdHRvbSIsInNpbmdsZUNoYW5uZWwiLCJsb2NhdGUiLCJudW1PZldvcmtlcnMiLCJkZWNvZGVyIiwicmVhZGVycyIsImRlYnVnIiwiZHJhd0JvdW5kaW5nQm94Iiwic2hvd0ZyZXF1ZW5jeSIsImRyYXdTY2FubGluZSIsInNob3dQYXR0ZXJuIiwibG9jYXRvciIsImhhbGZTYW1wbGUiLCJwYXRjaFNpemUiLCJzaG93Q2FudmFzIiwic2hvd1BhdGNoZXMiLCJzaG93Rm91bmRQYXRjaGVzIiwic2hvd1NrZWxldG9uIiwic2hvd0xhYmVscyIsInNob3dQYXRjaExhYmVscyIsInNob3dSZW1haW5pbmdQYXRjaExhYmVscyIsImJveEZyb21QYXRjaGVzIiwic2hvd1RyYW5zZm9ybWVkIiwic2hvd1RyYW5zZm9ybWVkQm94Iiwic2hvd0JCIiwiQmFyY29kZURlY29kZXIiLCJpbnB1dEltYWdlV3JhcHBlciIsIl9pbnB1dEltYWdlV3JhcHBlciIsIl9iYXJjb2RlUmVhZGVycyIsInByb2Nlc3MiLCJkZWJ1Z0RpdiIsInF1ZXJ5U2VsZWN0b3IiLCJfZnJlcXVlbmN5Q2FudmFzIiwiY2xhc3NOYW1lIiwiYXBwZW5kQ2hpbGQiLCJzdHlsZSIsImRpc3BsYXkiLCJfcGF0dGVybkNhbnZhcyIsIm92ZXJsYXlDYW52YXMiLCJfb3ZlcmxheUNvbnRleHQiLCJfaW5pdFJlYWRlcnMiLCJib3hlcyIsImJhcmNvZGVzIiwibXVsdGlwbGUiLCJib3giLCJkZWNvZGVGcm9tQm91bmRpbmdCb3giLCJfZHJhd1BhdGgiLCJsaW5lIiwiX2dldExpbmUiLCJhbmdsZSIsImF0YW4yIiwiX2dldEV4dGVuZGVkTGluZSIsIl90cnlEZWNvZGUiLCJfdHJ5RGVjb2RlQnJ1dGVGb3JjZSIsInBhdHRlcm4iLCJiYXJjb2RlTGluZSIsInJlYWRlckNvbmZpZyIsInJlYWRlciIsImNvbmZpZ3VyYXRpb24iLCJzdXBwbGVtZW50cyIsImZvcm1hdCIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJzdXBwbGVtZW50IiwiUmVhZGVycyIsIkZPUk1BVCIsIkpTT04iLCJzdHJpbmdpZnkiLCJleHRlbmRMaW5lIiwiYW1vdW50IiwiZXh0ZW5zaW9uIiwibGluZUxlbmd0aCIsInNxcnQiLCJleHRlbnNpb25MZW5ndGgiLCJpbkltYWdlV2l0aEJvcmRlciIsIkJyZXNlbmhhbSIsImdldEJhcmNvZGVMaW5lIiwiX3ByaW50RnJlcXVlbmN5IiwidG9CaW5hcnlMaW5lIiwiX3ByaW50UGF0dGVybiIsImRlY29kZVBhdHRlcm4iLCJsaW5lQW5nbGUiLCJzaWRlTGVuZ3RoIiwic2xpY2VzIiwieGRpciIsInlkaXIiLCJkaXIiLCJmaWxsUmVjdCIsIlNsb3BlIiwicDEiLCJwMiIsIngwIiwieTAiLCJ4MSIsInkxIiwic3RlZXAiLCJtaW4iLCJtYXgiLCJyZWFkIiwiYSIsImRlbHRheCIsImRlbHRheSIsImVycm9yIiwieXN0ZXAiLCJjZW50ZXIiLCJleHRyZW1hIiwiclRocmVzaG9sZCIsImN1cnJlbnREaXIiLCJVcCIsIkRvd24iLCJwb3MiLCJzbG9wZSIsInNsb3BlMiIsImoiLCJfc3RyZWFtIiwiQ2FtZXJhQWNjZXNzIiwicmVxdWVzdCIsInZpZGVvIiwidmlkZW9Db25zdHJhaW50cyIsIm5vcm1hbGl6ZWRDb25zdHJhaW50cyIsInBpY2tDb25zdHJhaW50cyIsInNyY09iamVjdCIsInNldEF0dHJpYnV0ZSIsInJlc29sdmUiLCJhZGRFdmVudExpc3RlbmVyIiwicGxheSIsInRoZW4iLCJfd2FpdEZvclZpZGVvIiwiYmluZCIsInJlbGVhc2UiLCJ0cmFja3MiLCJnZXRWaWRlb1RyYWNrcyIsInN0b3AiLCJlbnVtZXJhdGVWaWRlb0RldmljZXMiLCJkZXZpY2VzIiwia2luZCIsImdldEFjdGl2ZVN0cmVhbUxhYmVsIiwidHJhY2siLCJnZXRBY3RpdmVUcmFjayIsImFzcGVjdFJhdGlvIiwiZGV2aWNlSWQiLCJtaW5Bc3BlY3RSYXRpbyIsImZhY2luZyIsImF1ZGlvIiwidmlkZW9XaWR0aCIsInZpZGVvSGVpZ2h0IiwiYXR0ZW1wdHMiLCJjaGVja1ZpZGVvIiwid2luZG93IiwiRXhpZlRhZ3MiLCJBdmFpbGFibGVUYWdzIiwiZmluZFRhZ3NJbk9iamVjdFVSTCIsInNyYyIsInRhZ3MiLCJ0ZXN0Iiwib2JqZWN0VVJMVG9CbG9iIiwiYnVmZmVyIiwiZmluZFRhZ3NJbkJ1ZmZlciIsImZpbGUiLCJzZWxlY3RlZFRhZ3MiLCJkYXRhVmlldyIsIkRhdGFWaWV3IiwiYnl0ZUxlbmd0aCIsImV4aWZUYWdzIiwic2VsZWN0ZWRUYWciLCJleGlmVGFnIiwidGFnIiwib2Zmc2V0IiwiZ2V0VWludDgiLCJtYXJrZXIiLCJyZWFkRVhJRkRhdGEiLCJnZXRVaW50MTYiLCJ1cmwiLCJmZXRjaCIsInJlc3BvbnNlIiwib2siLCJhcnJheUJ1ZmZlciIsInN0YXR1cyIsInN0YXJ0Iiwic3BsaXQiLCJjaGFyIiwiaW5kZXgiLCJjaGFyQ29kZUF0IiwidGlmZk9mZnNldCIsImJpZ0VuZCIsImZpcnN0SUZET2Zmc2V0IiwiZ2V0VWludDMyIiwicmVhZFRhZ3MiLCJkaXJTdGFydCIsInN0cmluZ3MiLCJlbnRyaWVzIiwiZW50cnlPZmZzZXQiLCJyZWFkVGFnVmFsdWUiLCJudW1WYWx1ZXMiLCJ1bmRlZmluZWQiLCJRVUFURVJfQ0lSQ0xFIiwiRnJhbWVHcmFiYmVyIiwiY2FudmFzIiwiX2lucHV0U3RyZWFtIiwiX3N0cmVhbUNvbmZpZyIsIl9jYW52YXNXaWR0aCIsImNhbnZhc1dpZHRoIiwiX2NhbnZhc0hlaWdodCIsImNhbnZhc0hlaWdodCIsIl93aWR0aCIsIl9oZWlnaHQiLCJfdG9wTGVmdCIsInRvcExlZnQiLCJfZGF0YSIsInZpZGVvU2l6ZSIsInJlYWxXaWR0aCIsInJlYWxIZWlnaHQiLCJjYW52YXNTaXplIiwiZ2V0RnJhbWUiLCJfYWRqdXN0Q2FudmFzU2l6ZSIsImRyYXdhYmxlIiwiZHJhd0FuZ2xlIiwiSFRNTFZpZGVvRWxlbWVudCIsImltYWdlIiwib3JpZW50YXRpb24iLCJoYWxmV2lkdGgiLCJoYWxmSGVpZ2h0IiwidHJhbnNsYXRlIiwicm90YXRlIiwiX2dyYXlBbmRIYWxmU2FtcGxlRnJvbUNhbnZhc0RhdGEiLCJfY29tcHV0ZUdyYXkiLCJ3YXJuIiwiZW5kSW5kZXgiLCJvdXRXaWR0aCIsInRvcFJvd0luZGV4IiwiYm90dG9tUm93SW5kZXgiLCJvdXRJbWFnZUluZGV4IiwidG9wNCIsImJvdHRvbTQiLCJpbWFnZURhdGFMZW5ndGgiLCJJbWFnZUxvYWRlciIsImJhc2VVcmkiLCJzZXF1ZW5jZSIsImxvYWRlZCIsImxvYWRlZEltYWdlIiwibm90TG9hZGVkSW1hZ2VzIiwic3BsaWNlIiwiaW1hZ2VTcmNzIiwiaW1hZ2VOYW1lIiwic3Vic3RyIiwibGFzdEluZGV4T2YiLCJsb2FkZWRJbWFnZXMiLCJmaXJzdEltYWdlIiwiSW1hZ2UiLCJvbmxvYWQiLCJJbWFnZVN0cmVhbSIsIl9iYXNlVXJsIiwiX2VuZGVkIiwiX2ZyYW1lSW5kZXgiLCJfaW1hZ2VzIiwiX2xvYWRlZCIsIl9vZmZzZXQiLCJfcGF1c2VkIiwiX3NpemUiLCJ0cmlnZ2VyIiwibG9hZCIsImltYWdlcyIsIl9jYWxjdWxhdGVkV2lkdGgiLCJfY2FsY3VsYXRlZEhlaWdodCIsIl9sb2FkSW1hZ2VzIiwidGltZSIsIklucHV0U3RyZWFtIiwiX2NvbXB1dGVEaXZpc29ycyIsIm4iLCJkaXZpc29ycyIsImxhcmdlRGl2aXNvcnMiLCJkaXZpc29yIiwidW5zaGlmdCIsImNvbmNhdCIsIl9jb21wdXRlQ29tbW9uRGl2aXNvcnMiLCJsYXJnZURpdmlzb3IiLCJjYWxjdWxhdGVQYXRjaFNpemUiLCJ3aWRlU2lkZSIsIm5yT2ZQYXRjaGVzTGlzdCIsIm5yT2ZQYXRjaGVzTWFwIiwic21hbGwiLCJtZWRpdW0iLCJsYXJnZSIsIm5yT2ZQYXRjaGVzSW5kZXgiLCJuck9mUGF0Y2hlcyIsImRlc2lyZWRQYXRjaFNpemUiLCJmaW5kUGF0Y2hTaXplRm9yRGl2aXNvcnMiLCJmb3VuZCIsIm9wdGltYWxQYXRjaFNpemUiLCJjaGVja0ltYWdlQ29uc3RyYWludHMiLCJzaGlmdCIsImNvbXB1dGVJbWFnZUFyZWEiLCJzZXRDYW52YXNTaXplIiwiX3BhcnNlQ3NzRGltZW5zaW9uVmFsdWVzIiwiZGltZW5zaW9uIiwicGFyc2VGbG9hdCIsInVuaXQiLCJpbmRleE9mIiwiX2RpbWVuc2lvbnNDb252ZXJ0ZXJzIiwiaW5wdXRXaWR0aCIsImlucHV0SGVpZ2h0IiwicGFyc2VkQXJlYSIsInBhcnNlZCIsImNhbGN1bGF0ZWQiLCJfZXZlbnROYW1lcyIsIl9ldmVudEhhbmRsZXJzIiwiTWFwIiwibGlzdGVuZXIiLCJfb3B0aW9ucyIsImhhcyIsInNldCIsImNsZWFyIiwiYXJnQXJyYXkiLCJoYW5kbGVycyIsImFwcGx5IiwiTGl2ZVN0cmVhbSIsIlZpZGVvU3RyZWFtIiwiX3ZpZGVvIiwicGF1c2UiLCJvcHRpb25zIiwiX2luaXRTaXplIiwiZW5kZWQiLCJjdXJyZW50VGltZSIsImludmVydCIsIm1hdHJpeCIsImEwIiwiYTEiLCJhMiIsImEzIiwiZGV0ZXJtaW5hbnQiLCJGbG9hdDMyQXJyYXkiLCJ0cmFuc2Zvcm1XaXRoTWF0cml4IiwiX2NvbXB1dGVIaXN0b2dyYW0iLCJiaXRzUGVyUGl4ZWwiLCJiaXRTaGlmdCIsImJ1Y2tldENvdW50IiwiaGlzdG9ncmFtIiwiSW50MzJBcnJheSIsIl9kZXRlcm1pbmVPdHN1VGhyZXNob2xkIiwiaGlzdCIsInZldCIsInB4IiwiaW5pdCIsImVuZCIsIm14IiwiayIsInAxMiIsIm0xIiwibTIiLCJtMTIiLCJtYXhJbmRleCIsImFycmF5Iiwib3RzdVRocmVzaG9sZCIsInRhcmdldFdyYXBwZXIiLCJ0YXJnZXREYXRhIiwib3V0SW1hZ2VXcmFwcGVyIiwib3V0SW1hZ2UiLCJvdXRJbWdJbmRleCIsIk1vbWVudFNpbWlsYXJpdHlUaHJlc2hvbGQiLCJCYXJjb2RlTG9jYXRvciIsIl9udW1QYXRjaGVzIiwiX2luaXRCdWZmZXJzIiwiX2luaXRDYW52YXMiLCJfY3VycmVudEltYWdlV3JhcHBlciIsIl9iaW5hcml6ZUltYWdlIiwicGF0Y2hlc0ZvdW5kIiwiX2ZpbmRQYXRjaGVzIiwibWF4TGFiZWwiLCJfcmFzdGVyaXplQW5ndWxhclNpbWlsYXJpdHkiLCJ0b3BMYWJlbHMiLCJfZmluZEJpZ2dlc3RDb25uZWN0ZWRBcmVhcyIsIl9maW5kQm94ZXMiLCJfcGF0Y2hTaXplIiwiX2JpbmFyeUltYWdlV3JhcHBlciIsIl9sYWJlbEltYWdlV3JhcHBlciIsInNrZWxldG9uSW1hZ2VEYXRhIiwiQXJyYXlCdWZmZXIiLCJfc3ViSW1hZ2VXcmFwcGVyIiwiX3NrZWxJbWFnZVdyYXBwZXIiLCJfc2tlbGV0b25pemVyIiwic2tlbGV0b25pemVyIiwic2VsZiIsImdsb2JhbCIsIl9wYXRjaExhYmVsR3JpZCIsIl9wYXRjaEdyaWQiLCJfaW1hZ2VUb1BhdGNoR3JpZCIsInVzZVdvcmtlciIsIl9iaW5hcnlDb250ZXh0IiwicGF0Y2hlcyIsImF2ZXJhZ2VSYWQiLCJfZHJhd1JlY3QiLCJpbnZlcnNlTWF0cml4IiwibWluWCIsIm1pblkiLCJtYXhYIiwibWF4WSIsInZlcnRleCIsInplcm9Cb3JkZXIiLCJzaG93IiwiX3NrZWxldG9uaXplIiwicmFzdGVyaXplciIsIlJhc3Rlcml6ZXIiLCJyYXN0ZXJSZXN1bHQiLCJyYXN0ZXJpemUiLCJvdmVybGF5IiwiY291bnQiLCJwYXRjaCIsIl9kZXNjcmliZVBhdGNoIiwibGFiZWxIaXN0Iiwic29ydCIsIl9ib3hGcm9tUGF0Y2hlcyIsImpvaW4iLCJjbHVzdGVyaXplIiwidG9wQ2x1c3RlciIsInN1YkltYWdlQXNDb3B5Iiwic2tlbGV0b25pemUiLCJtaW5Db21wb25lbnRXZWlnaHQiLCJjZWlsIiwiZWxpZ2libGVNb21lbnRzIiwibWF0Y2hpbmdNb21lbnRzIiwiX3NpbWlsYXJNb21lbnRzIiwiY3VycmVudEluZGV4IiwiY3VycmVudFBhdGNoIiwiU2VhcmNoRGlyZWN0aW9ucyIsImRpcmVjdGlvbiIsIk51bWJlciIsIk1BWF9WQUxVRSIsIl90cmFjZSIsIl9ub3RZZXRQcm9jZXNzZWQiLCJzdHJva2VSZWN0IiwiRWRnZUxhYmVsIiwiQ29udG91ckRpcmVjdGlvbiIsImxhYmVsV3JhcHBlciIsIl9pbWFnZURhdGEiLCJfbGFiZWxEYXRhIiwiX3RyYWNlciIsIlRyYWNlciIsImRlcHRoTGFiZWwiLCJjb2xvck1hcCIsImNjIiwic2MiLCJjb25uZWN0ZWRDb3VudCIsImN5IiwibGFiZWxJbmRleCIsImJjIiwiY3giLCJsYyIsImNvbnRvdXJUcmFjaW5nIiwiT3V0c2lkZSIsIkNXIiwiZmlyc3RWZXJ0ZXgiLCJuZXh0UGVlciIsImluc2lkZUNvbnRvdXJzIiwicHJldmlvdXNQZWVyIiwiSW5zaWRlIiwiQ0NXIiwiZmlyc3RDb250b3VyIiwicHEiLCJpcSIsInEiLCJVbmtub3duIiwibmV4dCIsIlNrZWxldG9uaXplciIsInN0ZGxpYiIsImZvcmVpZ24iLCJpbXVsIiwiZXJvZGUiLCJpbkltYWdlUHRyIiwib3V0SW1hZ2VQdHIiLCJ1IiwieVN0YXJ0MSIsInlTdGFydDIiLCJ4U3RhcnQxIiwieFN0YXJ0MiIsInN1YnRyYWN0IiwiYUltYWdlUHRyIiwiYkltYWdlUHRyIiwiYml0d2lzZU9yIiwiY291bnROb25aZXJvIiwiaW1hZ2VQdHIiLCJkaWxhdGUiLCJtZW1jcHkiLCJzcmNJbWFnZVB0ciIsImRzdEltYWdlUHRyIiwic3ViSW1hZ2VQdHIiLCJlcm9kZWRJbWFnZVB0ciIsInRlbXBJbWFnZVB0ciIsInNrZWxJbWFnZVB0ciIsImRvbmUiLCJlZGdlTGFiZWwiLCJzeSIsInN4IiwiRnYiLCJ0cmFjZSIsIkN2IiwibGRpciIsIlAiLCJfX2ZhY3RvcnlTb3VyY2VfXyIsIl9mcmFtZUdyYWJiZXIiLCJfc3RvcHBlZCIsIl9jYW52YXNDb250YWluZXIiLCJjdHgiLCJkb20iLCJfbG9jYXRvciIsIl9ib3hTaXplIiwiX2RlY29kZXIiLCJfd29ya2VyUG9vbCIsIl9vblVJVGhyZWFkIiwiX3Jlc3VsdENvbGxlY3RvciIsIlF1YWdnYSIsImNiIiwiZGVmYXVsdENvbmZpZyIsIl9pbml0aWFsaXplRGF0YSIsIl9pbml0SW5wdXRTdHJlYW0iLCJfc3RhcnRDb250aW51b3VzVXBkYXRlIiwiX3VwZGF0ZSIsIl9hZGp1c3RXb3JrZXJQb29sIiwiY2xlYXJFdmVudEhhbmRsZXJzIiwiZGVjb2RlU2luZ2xlIiwicmVzdWx0Q2FsbGJhY2siLCJjYWxsIiwib25EZXRlY3RlZCIsIm9mZkRldGVjdGVkIiwidW5zdWJzY3JpYmUiLCJvblByb2Nlc3NlZCIsIm9mZlByb2Nlc3NlZCIsInNldFJlYWRlcnMiLCJ3b3JrZXIiLCJwb3N0TWVzc2FnZSIsImNtZCIsInJlZ2lzdGVyUmVzdWx0Q29sbGVjdG9yIiwicmVzdWx0Q29sbGVjdG9yIiwiYWRkUmVzdWx0Iiwidmlld3BvcnQiLCJfZ2V0Vmlld1BvcnQiLCJlcnIiLCJfY2FuUmVjb3JkIiwidGFyZ2V0IiwiSFRNTEVsZW1lbnQiLCJzZWxlY3RvciIsImNsZWFyRml4IiwiX2dldEJvdW5kaW5nQm94ZXMiLCJfdHJhbnNmb3JtIiwicG9seWdvbiIsIl90cmFuc2Zvcm1SZXN1bHQiLCJiYXJjb2RlIiwiX2FkZFJlc3VsdCIsIl9oYXNDb2RlUmVzdWx0IiwiX3B1Ymxpc2hSZXN1bHQiLCJyZXN1bHRUb1B1Ymxpc2giLCJwdWJsaXNoIiwiX2xvY2F0ZUFuZERlY29kZSIsImRlY29kZUZyb21Cb3VuZGluZ0JveGVzIiwiYXZhaWxhYmxlV29ya2VyIiwid29ya2VyVGhyZWFkIiwiYnVzeSIsImF0dGFjaERhdGEiLCJncmFiIiwiZGVsYXkiLCJmcmVxdWVuY3kiLCJ0aGF0IiwidGltZXN0YW1wIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicGVyZm9ybWFuY2UiLCJub3ciLCJfaW5pdFdvcmtlciIsImJsb2JVUkwiLCJfZ2VuZXJhdGVXb3JrZXJCbG9iIiwiV29ya2VyIiwib25tZXNzYWdlIiwiVVJMIiwicmV2b2tlT2JqZWN0VVJMIiwibWVzc2FnZSIsIl93b3JrZXJJbnRlcmZhY2UiLCJmYWN0b3J5Iiwib3JpZ2luIiwiYmxvYiIsIkJsb2IiLCJ0b1N0cmluZyIsImNyZWF0ZU9iamVjdFVSTCIsImluY3JlYXNlQnkiLCJ0ZXJtaW5hdGUiLCJOIiwiVyIsIlNUQVJUX1BBVFRFUk4iLCJTVE9QX1BBVFRFUk4iLCJDT0RFX1BBVFRFUk4iLCJzdGFydFBhdHRlcm5MZW5ndGgiLCJUd29PZkZpdmVSZWFkZXIiLCJfYmFyU3BhY2VSYXRpbyIsIl9mb3JtYXQiLCJfc2luZ2xlQ29kZUVycm9yIiwiX2F2ZXJhZ2VDb2RlRXJyb3IiLCJzdGFydEluZm8iLCJfZmluZFN0YXJ0IiwiZW5kSW5mbyIsIl9maW5kRW5kIiwiY291bnRlcnMiLCJfZmlsbENvdW50ZXJzIiwiZGVjb2RlZENvZGVzIiwiY29kZSIsIl9kZWNvZGVQYXlsb2FkIiwiX25leHRTZXQiLCJfcm93IiwibmFycm93QmFyV2lkdGgiLCJfZmluZFBhdHRlcm4iLCJsZWFkaW5nV2hpdGVzcGFjZVN0YXJ0IiwiX21hdGNoUmFuZ2UiLCJ0cmFpbGluZ1doaXRlc3BhY2VFbmQiLCJyZXZlcnNlIiwiX3ZlcmlmeVRyYWlsaW5nV2hpdGVzcGFjZSIsImNvdW50ZXIiLCJiZXN0TWF0Y2giLCJfbWF0Y2hQYXR0ZXJuIiwiQVZFUkFHRV9DT0RFX0VSUk9SIiwiY291bnRlckxlbmd0aCIsIl9kZWNvZGVDb2RlIiwiQmFyY29kZVJlYWRlciIsIkJhcmNvZGVEaXJlY3Rpb24iLCJTdGFydE5vdEZvdW5kRXhjZXB0aW9uIiwiQ29kZU5vdEZvdW5kRXhjZXB0aW9uIiwiUGF0dGVybk5vdEZvdW5kRXhjZXB0aW9uIiwiaXNXaGl0ZSIsInRyeUhhcmRlciIsImVwc2lsb24iLCJjb3VudGVyUG9zIiwibWF4U2luZ2xlRXJyb3IiLCJtb2R1bG8iLCJTSU5HTEVfQ09ERV9FUlJPUiIsImJhcldpZHRoIiwic2NhbGVkIiwic2luZ2xlRXJyb3IiLCJjb3JyZWN0aW9uIiwiaW5kaWNlcyIsImRlY29kZSIsIlJldmVyc2UiLCJGb3J3YXJkIiwibnVtQ291bnRlcnMiLCJBTFBIQUJFVEhfU1RSSU5HIiwiQUxQSEFCRVQiLCJDSEFSQUNURVJfRU5DT0RJTkdTIiwiU1RBUlRfRU5EIiwiTUlOX0VOQ09ERURfQ0hBUlMiLCJNQVhfQUNDRVBUQUJMRSIsIlBBRERJTkciLCJDb2RhYmFyUmVhZGVyIiwiX2NvdW50ZXJzIiwiX25leHRVbnNldCIsIm5leHRTdGFydCIsInN0YXJ0Q291bnRlciIsIl90b1BhdHRlcm4iLCJkZWNvZGVkQ2hhciIsIl9wYXR0ZXJuVG9DaGFyIiwiX3ZlcmlmeVdoaXRlc3BhY2UiLCJfdmFsaWRhdGVSZXN1bHQiLCJfc3VtQ291bnRlcnMiLCJlbmRDb3VudGVyIiwiX2NhbGN1bGF0ZVBhdHRlcm5MZW5ndGgiLCJjYXRlZ29yaXphdGlvbiIsInNwYWNlIiwibmFycm93IiwiY291bnRzIiwid2lkZSIsImJhciIsIl9jaGFyVG9QYXR0ZXJuIiwiY2F0IiwiZmxvb3IiLCJjaGFyQ29kZSIsIl90aHJlc2hvbGRSZXN1bHRQYXR0ZXJuIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwiYmFyVGhyZXNob2xkIiwiX2NvbXB1dGVBbHRlcm5hdGluZ1RocmVzaG9sZCIsInNwYWNlVGhyZXNob2xkIiwiYml0bWFzayIsIkNPREVfU0hJRlQiLCJDT0RFX0MiLCJDT0RFX0IiLCJDT0RFX0EiLCJTVEFSVF9DT0RFX0EiLCJTVEFSVF9DT0RFX0IiLCJTVEFSVF9DT0RFX0MiLCJTVE9QX0NPREUiLCJNT0RVTEVfSU5ESUNFUyIsIkNvZGUxMjhSZWFkZXIiLCJfY29ycmVjdCIsImV4cGVjdGVkIiwiX2NhbGN1bGF0ZUNvcnJlY3Rpb24iLCJfY29ycmVjdEJhcnMiLCJtdWx0aXBsaWVyIiwiY2hlY2tzdW0iLCJjb2Rlc2V0IiwicmF3UmVzdWx0Iiwic2hpZnROZXh0IiwicmVtb3ZlTGFzdENoYXJhY3RlciIsIm5vcm1hbGl6ZWQiLCJzdW1Ob3JtYWxpemVkIiwic3VtRXhwZWN0ZWQiLCJBU1RFUklTSyIsIlVpbnQxNkFycmF5IiwiQ29kZTM5UmVhZGVyIiwibGFzdFN0YXJ0IiwiX3RvQ291bnRlcnMiLCJwb3AiLCJwYXR0ZXJuU2l6ZSIsIm1pbldpZHRoIiwibWF4TmFycm93V2lkdGgiLCJudW1XaWRlQmFycyIsIndpZGVCYXJXaWR0aCIsIl9maW5kTmV4dFdpZHRoIiwicGF0dGVyblN0YXJ0Iiwid2hpdGVTcGFjZU11c3RTdGFydCIsIkNvZGUzOVZJTlJlYWRlciIsInJlcGxhY2UiLCJfY2hlY2tDaGVja3N1bSIsIkNvZGU5M1JlYWRlciIsIl92ZXJpZnlFbmQiLCJfdmVyaWZ5Q2hlY2tzdW1zIiwiX2RlY29kZUV4dGVuZGVkIiwicm91bmQiLCJjaGFyQXJyYXkiLCJuZXh0Q2hhciIsIm5leHRDaGFyQ29kZSIsIl9tYXRjaENoZWNrQ2hhciIsIm1heFdlaWdodCIsImFycmF5VG9DaGVjayIsIndlaWdodGVkU3VtcyIsIndlaWdodCIsImNoZWNrQ2hhciIsIkVBTjJSZWFkZXIiLCJyb3ciLCJjb2RlRnJlcXVlbmN5IiwiQ09ERV9HX1NUQVJUIiwicGFyc2VJbnQiLCJFQU5SZWFkZXIiLCJFQU41UmVhZGVyIiwiX2V4dGVuc2lvbkNoZWNrc3VtIiwiX2RldGVybWluZUNoZWNrRGlnaXQiLCJDSEVDS19ESUdJVF9FTkNPRElOR1MiLCJFQU44UmVhZGVyIiwiTUlERExFX1BBVFRFUk4iLCJFWFRFTlNJT05fU1RBUlRfUEFUVEVSTiIsIkNPREVfRlJFUVVFTkNZIiwiY29kZXJhbmdlIiwiZmlyc3REaWdpdCIsIl9jYWxjdWxhdGVGaXJzdERpZ2l0IiwicmVzdWx0SW5mbyIsIl9jaGVja3N1bSIsIl9kZWNvZGVFeHRlbnNpb25zIiwibGFzdENvZGUiLCJNQVhfQ09SUkVDVElPTl9GQUNUT1IiLCJJMm9mNVJlYWRlciIsIm5vcm1hbGl6ZUJhclNwYWNlV2lkdGgiLCJjb3VudGVyU3VtIiwiY29kZVN1bSIsImNvcnJlY3Rpb25SYXRpbyIsImNvcnJlY3Rpb25SYXRpb0ludmVyc2UiLCJjb3VudGVyMCIsImNvdW50ZXIxIiwiY29kZTAiLCJjb2RlMSIsImNvZGVfMTI4X3JlYWRlciIsImVhbl9yZWFkZXIiLCJlYW5fNV9yZWFkZXIiLCJlYW5fMl9yZWFkZXIiLCJlYW5fOF9yZWFkZXIiLCJjb2RlXzM5X3JlYWRlciIsImNvZGVfMzlfdmluX3JlYWRlciIsImNvZGFiYXJfcmVhZGVyIiwidXBjX3JlYWRlciIsIlVQQ1JlYWRlciIsInVwY19lX3JlYWRlciIsIlVQQ0VSZWFkZXIiLCJpMm9mNV9yZWFkZXIiLCJjb2RlXzkzX3JlYWRlciIsIl9kZXRlcm1pbmVQYXJpdHkiLCJuclN5c3RlbSIsImxhc3REaWdpdCIsInVwY2EiLCJfY29udmVydFRvVVBDQSIsImNoYXJBdCIsInN1YnN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRCxXO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBLGlEQUFpRCxnQkFBZ0I7QUFDakU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0M7Ozs7Ozs7Ozs7O0FD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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZCxLQUFLO0FBQ0wsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVc7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLGNBQWM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxrQkFBa0I7QUFDbkQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7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Q0g7QUFDSjs7QUFFRCxhQUFPLElBQVA7QUFDSDtBQXBGTDs7QUFBQTtBQUFBLEVBQWdDMkkscURBQWhDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBRU8sSUFBTW9DLFNBQWI7QUFBQTtBQUFBO0FBQUE7O0FBQ0kscUJBQVkvNkIsTUFBWixFQUEwQ3VPLFdBQTFDLEVBQThFO0FBQUE7O0FBQUE7O0FBQzFFLDZNQUFNdk8sTUFBTixFQUFjdU8sV0FBZDtBQUVBLFVBQUtvaEIsT0FBTCxHQUFlLE9BQWY7QUFIMEU7QUFJN0U7O0FBTEw7QUFBQTtBQUFBLDZCQU9zQjtBQUNkLFVBQU14dUIsTUFBTSxHQUFHLCtMQUFmOztBQUVBLFVBQUlBLE1BQU0sSUFBSUEsTUFBTSxDQUFDa3ZCLElBQWpCLElBQXlCbHZCLE1BQU0sQ0FBQ2t2QixJQUFQLENBQVk3c0IsTUFBWixLQUF1QixFQUFoRCxJQUFzRHJDLE1BQU0sQ0FBQ2t2QixJQUFQLENBQVlvTCxNQUFaLENBQW1CLENBQW5CLE1BQTBCLEdBQXBGLEVBQXlGO0FBQ3JGdDZCLGNBQU0sQ0FBQ2t2QixJQUFQLEdBQWNsdkIsTUFBTSxDQUFDa3ZCLElBQVAsQ0FBWXFMLFNBQVosQ0FBc0IsQ0FBdEIsQ0FBZDtBQUNBLGVBQU92NkIsTUFBUDtBQUNIOztBQUVELGFBQU8sSUFBUDtBQUNIO0FBaEJMOztBQUFBO0FBQUEsRUFBK0J3M0IscURBQS9CLEUiLCJmaWxlIjoicXVhZ2dhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4oZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuICAgIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KGZhY3RvcnkudG9TdHJpbmcoKSkuZGVmYXVsdDtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuICAgICAgICBleHBvcnRzW1wiUXVhZ2dhXCJdID0gZmFjdG9yeShmYWN0b3J5LnRvU3RyaW5nKCkpLmRlZmF1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcm9vdFtcIlF1YWdnYVwiXSA9IGZhY3RvcnkoZmFjdG9yeS50b1N0cmluZygpKS5kZWZhdWx0O1xuICAgIH1cbn0pKHRoaXMsIGZ1bmN0aW9uKF9fZmFjdG9yeVNvdXJjZV9fKSB7XG4gICAgcmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9xdWFnZ2EudHNcIik7XG4iLCJmdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgYXJyMltpXSA9IGFycltpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyMjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhvdXRIb2xlczsiLCJmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQ7IiwiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FzeW5jVG9HZW5lcmF0b3I7IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2s7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzczsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7IiwidmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vZ2V0UHJvdG90eXBlT2ZcIik7XG5cbnZhciBzdXBlclByb3BCYXNlID0gcmVxdWlyZShcIi4vc3VwZXJQcm9wQmFzZVwiKTtcblxuZnVuY3Rpb24gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgIT09IFwidW5kZWZpbmVkXCIgJiYgUmVmbGVjdC5nZXQpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9nZXQgPSBSZWZsZWN0LmdldDtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9nZXQgPSBmdW5jdGlvbiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gICAgICB2YXIgYmFzZSA9IHN1cGVyUHJvcEJhc2UodGFyZ2V0LCBwcm9wZXJ0eSk7XG4gICAgICBpZiAoIWJhc2UpIHJldHVybjtcbiAgICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihiYXNlLCBwcm9wZXJ0eSk7XG5cbiAgICAgIGlmIChkZXNjLmdldCkge1xuICAgICAgICByZXR1cm4gZGVzYy5nZXQuY2FsbChyZWNlaXZlcik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkZXNjLnZhbHVlO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlciB8fCB0YXJnZXQpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9nZXQ7IiwiZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mOyIsInZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL3NldFByb3RvdHlwZU9mXCIpO1xuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2luaGVyaXRzOyIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaXRlcikgPT09IFwiW29iamVjdCBBcmd1bWVudHNdXCIpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXk7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2VcIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlU3ByZWFkOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG52YXIgYXNzZXJ0VGhpc0luaXRpYWxpemVkID0gcmVxdWlyZShcIi4vYXNzZXJ0VGhpc0luaXRpYWxpemVkXCIpO1xuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH1cblxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuOyIsImZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mOyIsInZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL2dldFByb3RvdHlwZU9mXCIpO1xuXG5mdW5jdGlvbiBfc3VwZXJQcm9wQmFzZShvYmplY3QsIHByb3BlcnR5KSB7XG4gIHdoaWxlICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpKSB7XG4gICAgb2JqZWN0ID0gZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTtcbiAgICBpZiAob2JqZWN0ID09PSBudWxsKSBicmVhaztcbiAgfVxuXG4gIHJldHVybiBvYmplY3Q7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3N1cGVyUHJvcEJhc2U7IiwidmFyIGFycmF5V2l0aG91dEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRob3V0SG9sZXNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXlcIik7XG5cbnZhciBub25JdGVyYWJsZVNwcmVhZCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlU3ByZWFkXCIpO1xuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3RvQ29uc3VtYWJsZUFycmF5OyIsImZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZjIgPSBmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YyID0gZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mMihvYmopOyB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgX3R5cGVvZjIoU3ltYm9sLml0ZXJhdG9yKSA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gX3R5cGVvZjIob2JqKTtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogX3R5cGVvZjIob2JqKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbi8vIFRoaXMgbWV0aG9kIG9mIG9idGFpbmluZyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdCBuZWVkcyB0byBiZVxuLy8ga2VwdCBpZGVudGljYWwgdG8gdGhlIHdheSBpdCBpcyBvYnRhaW5lZCBpbiBydW50aW1lLmpzXG52YXIgZyA9IChmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMgfHwgKHR5cGVvZiBzZWxmID09PSBcIm9iamVjdFwiICYmIHNlbGYpO1xufSkoKSB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG5cbi8vIFVzZSBgZ2V0T3duUHJvcGVydHlOYW1lc2AgYmVjYXVzZSBub3QgYWxsIGJyb3dzZXJzIHN1cHBvcnQgY2FsbGluZ1xuLy8gYGhhc093blByb3BlcnR5YCBvbiB0aGUgZ2xvYmFsIGBzZWxmYCBvYmplY3QgaW4gYSB3b3JrZXIuIFNlZSAjMTgzLlxudmFyIGhhZFJ1bnRpbWUgPSBnLnJlZ2VuZXJhdG9yUnVudGltZSAmJlxuICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhnKS5pbmRleE9mKFwicmVnZW5lcmF0b3JSdW50aW1lXCIpID49IDA7XG5cbi8vIFNhdmUgdGhlIG9sZCByZWdlbmVyYXRvclJ1bnRpbWUgaW4gY2FzZSBpdCBuZWVkcyB0byBiZSByZXN0b3JlZCBsYXRlci5cbnZhciBvbGRSdW50aW1lID0gaGFkUnVudGltZSAmJiBnLnJlZ2VuZXJhdG9yUnVudGltZTtcblxuLy8gRm9yY2UgcmVldmFsdXRhdGlvbiBvZiBydW50aW1lLmpzLlxuZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSB1bmRlZmluZWQ7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vcnVudGltZVwiKTtcblxuaWYgKGhhZFJ1bnRpbWUpIHtcbiAgLy8gUmVzdG9yZSB0aGUgb3JpZ2luYWwgcnVudGltZS5cbiAgZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSBvbGRSdW50aW1lO1xufSBlbHNlIHtcbiAgLy8gUmVtb3ZlIHRoZSBnbG9iYWwgcHJvcGVydHkgYWRkZWQgYnkgcnVudGltZS5qcy5cbiAgdHJ5IHtcbiAgICBkZWxldGUgZy5yZWdlbmVyYXRvclJ1bnRpbWU7XG4gIH0gY2F0Y2goZSkge1xuICAgIGcucmVnZW5lcmF0b3JSdW50aW1lID0gdW5kZWZpbmVkO1xuICB9XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbiEoZnVuY3Rpb24oZ2xvYmFsKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgdmFyIGluTW9kdWxlID0gdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIjtcbiAgdmFyIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lO1xuICBpZiAocnVudGltZSkge1xuICAgIGlmIChpbk1vZHVsZSkge1xuICAgICAgLy8gSWYgcmVnZW5lcmF0b3JSdW50aW1lIGlzIGRlZmluZWQgZ2xvYmFsbHkgYW5kIHdlJ3JlIGluIGEgbW9kdWxlLFxuICAgICAgLy8gbWFrZSB0aGUgZXhwb3J0cyBvYmplY3QgaWRlbnRpY2FsIHRvIHJlZ2VuZXJhdG9yUnVudGltZS5cbiAgICAgIG1vZHVsZS5leHBvcnRzID0gcnVudGltZTtcbiAgICB9XG4gICAgLy8gRG9uJ3QgYm90aGVyIGV2YWx1YXRpbmcgdGhlIHJlc3Qgb2YgdGhpcyBmaWxlIGlmIHRoZSBydW50aW1lIHdhc1xuICAgIC8vIGFscmVhZHkgZGVmaW5lZCBnbG9iYWxseS5cbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBEZWZpbmUgdGhlIHJ1bnRpbWUgZ2xvYmFsbHkgKGFzIGV4cGVjdGVkIGJ5IGdlbmVyYXRlZCBjb2RlKSBhcyBlaXRoZXJcbiAgLy8gbW9kdWxlLmV4cG9ydHMgKGlmIHdlJ3JlIGluIGEgbW9kdWxlKSBvciBhIG5ldywgZW1wdHkgb2JqZWN0LlxuICBydW50aW1lID0gZ2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZSA9IGluTW9kdWxlID8gbW9kdWxlLmV4cG9ydHMgOiB7fTtcblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBydW50aW1lLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZVt0b1N0cmluZ1RhZ1N5bWJvbF0gPVxuICAgIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIHByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIHJ1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIHJ1bnRpbWUubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgaWYgKCEodG9TdHJpbmdUYWdTeW1ib2wgaW4gZ2VuRnVuKSkge1xuICAgICAgICBnZW5GdW5bdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuICAgICAgfVxuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBydW50aW1lLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgcnVudGltZS5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgcnVudGltZS5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpXG4gICAgKTtcblxuICAgIHJldHVybiBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgR3BbdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JcIjtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBydW50aW1lLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgcnVudGltZS52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcbn0pKFxuICAvLyBJbiBzbG9wcHkgbW9kZSwgdW5ib3VuZCBgdGhpc2AgcmVmZXJzIHRvIHRoZSBnbG9iYWwgb2JqZWN0LCBmYWxsYmFjayB0b1xuICAvLyBGdW5jdGlvbiBjb25zdHJ1Y3RvciBpZiB3ZSdyZSBpbiBnbG9iYWwgc3RyaWN0IG1vZGUuIFRoYXQgaXMgc2FkbHkgYSBmb3JtXG4gIC8vIG9mIGluZGlyZWN0IGV2YWwgd2hpY2ggdmlvbGF0ZXMgQ29udGVudCBTZWN1cml0eSBQb2xpY3kuXG4gIChmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcyB8fCAodHlwZW9mIHNlbGYgPT09IFwib2JqZWN0XCIgJiYgc2VsZik7XG4gIH0pKCkgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpXG4pO1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiaW1wb3J0IHsgSW1hZ2VEZWJ1ZyB9IGZyb20gJy4uL2NvbW1vbi9pbWFnZS1kZWJ1Zyc7XG5pbXBvcnQgeyBRdWFnZ2FCYXJjb2RlIH0gZnJvbSAnLi4vZGVjb2Rlci9iYXJjb2RlLWRlY29kZXInO1xuaW1wb3J0IHsgQmFyY29kZSB9IGZyb20gJy4uL3JlYWRlci9iYXJjb2RlLXJlYWRlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVzdWx0Q29sbGVjdG9yQ29uZmlnIHtcbiAgICBjYXBhY2l0eT86IG51bWJlcjtcbiAgICBjYXB0dXJlPzogYm9vbGVhbjtcbiAgICBibGFja2xpc3Q/OiBBcnJheTxCYXJjb2RlPjtcbiAgICBmaWx0ZXI/OiAoaXRlbTogQmFyY29kZSkgPT4gYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNsYXNzIFJlc3VsdENvbGxlY3RvciB7XG4gICAgcHJpdmF0ZSBfY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICBwcml2YXRlIF9jb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4gICAgcHJpdmF0ZSBfY29uZmlnOiBSZXN1bHRDb2xsZWN0b3JDb25maWc7XG4gICAgcHJpdmF0ZSBfY2FwYWNpdHk6IG51bWJlcjtcbiAgICBwcml2YXRlIF9jYXB0dXJlOiBib29sZWFuO1xuICAgIHByaXZhdGUgX3Jlc3VsdHM6IEFycmF5PFF1YWdnYUJhcmNvZGU+O1xuXG4gICAgY29uc3RydWN0b3IoY29uZmlnOiBSZXN1bHRDb2xsZWN0b3JDb25maWcpIHtcbiAgICAgICAgdGhpcy5fcmVzdWx0cyA9IG5ldyBBcnJheTxRdWFnZ2FCYXJjb2RlPigpO1xuICAgICAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG4gICAgICAgIHRoaXMuX2NhcGFjaXR5ID0gY29uZmlnLmNhcGFjaXR5IHx8IDIwO1xuICAgICAgICB0aGlzLl9jYXB0dXJlID0gY29uZmlnLmNhcHR1cmUgPT09IHRydWU7XG5cbiAgICAgICAgaWYgKHRoaXMuX2NhcHR1cmUpIHtcbiAgICAgICAgICAgIHRoaXMuX2NhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICAgICAgdGhpcy5fY29udGV4dCA9IHRoaXMuX2NhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkUmVzdWx0KGRhdGE6IFVpbnQ4QXJyYXksIGltYWdlV2lkdGg6IG51bWJlciwgaW1hZ2VIZWlnaHQ6IG51bWJlciwgY29kZVJlc3VsdDogQmFyY29kZSk6IHZvaWQge1xuICAgICAgICBpZiAoY29kZVJlc3VsdCAmJiB0aGlzLl9jYXBhY2l0eSAmJiAhdGhpcy5fY29udGFpbnMoY29kZVJlc3VsdCkgJiYgdGhpcy5fcGFzc2VzRmlsdGVyKGNvZGVSZXN1bHQpKSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQ6IFF1YWdnYUJhcmNvZGUgPSB7IGNvZGVSZXN1bHQgfTtcblxuICAgICAgICAgICAgdGhpcy5fY2FwYWNpdHktLTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuX2NhcHR1cmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jYW52YXMud2lkdGggPSBpbWFnZVdpZHRoO1xuICAgICAgICAgICAgICAgIHRoaXMuX2NhbnZhcy5oZWlnaHQgPSBpbWFnZUhlaWdodDtcblxuICAgICAgICAgICAgICAgIEltYWdlRGVidWcuZHJhd0ltYWdlKGRhdGEsIGltYWdlV2lkdGgsIGltYWdlSGVpZ2h0LCB0aGlzLl9jb250ZXh0KTtcblxuICAgICAgICAgICAgICAgIHJlc3VsdC5mcmFtZSA9IHRoaXMuX2NhbnZhcy50b0RhdGFVUkwoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fcmVzdWx0cy5wdXNoKHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRSZXN1bHRzKCk6IEFycmF5PFF1YWdnYUJhcmNvZGU+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Jlc3VsdHM7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfY29udGFpbnMoY29kZVJlc3VsdDogQmFyY29kZSk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29uZmlnLmJsYWNrbGlzdCAmJlxuICAgICAgICAgICAgdGhpcy5fY29uZmlnLmJsYWNrbGlzdC5zb21lKGl0ZW0gPT4gT2JqZWN0LmtleXMoaXRlbSkuZXZlcnkoa2V5ID0+IGl0ZW1ba2V5XSA9PT0gY29kZVJlc3VsdFtrZXldKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfcGFzc2VzRmlsdGVyKGNvZGVSZXN1bHQ6IEJhcmNvZGUpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB0aGlzLl9jb25maWcuZmlsdGVyICE9PSAnZnVuY3Rpb24nIHx8IHRoaXMuX2NvbmZpZy5maWx0ZXIoY29kZVJlc3VsdCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTW9tZW50IH0gZnJvbSAnLi9tb21lbnQnO1xuXG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsdXN0ZXIgZm9yIGdyb3VwaW5nIHNpbWlsYXIgb3JpZW50YXRpb25zIG9mIG1vbWVudHNcbiAqL1xuZXhwb3J0IGNsYXNzIENsdXN0ZXIge1xuICAgIHByaXZhdGUgX3RocmVzaG9sZDogbnVtYmVyO1xuICAgIHByaXZhdGUgX21vbWVudHM6IEFycmF5PE1vbWVudD47XG4gICAgcHJpdmF0ZSBfY2VudGVyOiBNb21lbnQ7XG5cbiAgICBzdGF0aWMgY2x1c3Rlcml6ZShtb21lbnRzOiBBcnJheTxNb21lbnQ+LCB0aHJlc2hvbGQ6IG51bWJlcik6IEFycmF5PENsdXN0ZXI+IHtcbiAgICAgICAgY29uc3QgY2x1c3RlcnMgPSBuZXcgQXJyYXk8Q2x1c3Rlcj4oKTtcblxuICAgICAgICBtb21lbnRzLmZvckVhY2gobW9tZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoaW5nQ2x1c3RlciA9IGNsdXN0ZXJzLmZpbmQoY2x1c3RlciA9PiBjbHVzdGVyLmZpdHMobW9tZW50KSk7XG5cbiAgICAgICAgICAgIGlmIChtYXRjaGluZ0NsdXN0ZXIpIHtcbiAgICAgICAgICAgICAgICBtYXRjaGluZ0NsdXN0ZXIuYWRkKG1vbWVudCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNsdXN0ZXJzLnB1c2gobmV3IENsdXN0ZXIodGhyZXNob2xkLCBtb21lbnQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGNsdXN0ZXJzO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHRocmVzaG9sZDogbnVtYmVyLCBtb21lbnQ6IE1vbWVudCkge1xuICAgICAgICB0aGlzLl90aHJlc2hvbGQgPSB0aHJlc2hvbGQ7XG4gICAgICAgIHRoaXMuX21vbWVudHMgPSBuZXcgQXJyYXk8TW9tZW50PigpO1xuICAgICAgICB0aGlzLl9jZW50ZXIgPSB7XG4gICAgICAgICAgICByYWQ6IDAsXG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogMFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChtb21lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkKG1vbWVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGQocG9pbnQ6IE1vbWVudCkge1xuICAgICAgICB0aGlzLl9tb21lbnRzLnB1c2gocG9pbnQpO1xuXG4gICAgICAgIC8vIFVwZGF0ZSBjZW50ZXJcbiAgICAgICAgdGhpcy5fY2VudGVyLnJhZCA9IHRoaXMuX21vbWVudHMucmVkdWNlKChzdW0sIHApID0+IHN1bSArIHAucmFkLCAwKSAvIHRoaXMuX21vbWVudHMubGVuZ3RoO1xuICAgICAgICB0aGlzLl9jZW50ZXIueCA9IE1hdGguY29zKHRoaXMuX2NlbnRlci5yYWQpO1xuICAgICAgICB0aGlzLl9jZW50ZXIueSA9IE1hdGguc2luKHRoaXMuX2NlbnRlci5yYWQpO1xuICAgIH1cblxuICAgIGZpdHMobW9tZW50OiBNb21lbnQpOiBib29sZWFuIHtcbiAgICAgICAgLy8gY2hlY2sgY29zaW5lIHNpbWlsYXJpdHkgdG8gY2VudGVyLWFuZ2xlXG4gICAgICAgIGNvbnN0IHNpbWlsYXJpdHkgPSBNYXRoLmFicyhtb21lbnQueCAqIHRoaXMuX2NlbnRlci54ICsgbW9tZW50LnkgKiB0aGlzLl9jZW50ZXIueSk7XG4gICAgICAgIHJldHVybiBzaW1pbGFyaXR5ID4gdGhpcy5fdGhyZXNob2xkO1xuICAgIH1cblxuICAgIGdldCBtb21lbnRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbW9tZW50cztcbiAgICB9XG59XG4iLCJleHBvcnQgaW50ZXJmYWNlIEV2ZW50Q2FsbGJhY2sge1xuICAgIChkYXRhOiBhbnkpOiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEV2ZW50U3Vic2NyaXB0aW9uIHtcbiAgICBjYWxsYmFjazogRXZlbnRDYWxsYmFjaztcbiAgICBhc3luYz86IGJvb2xlYW47XG4gICAgb25jZT86IGJvb2xlYW47XG59XG5cbmludGVyZmFjZSBFdmVudEl0ZW0ge1xuICAgIHN1YnNjcmlwdGlvbnM6IEFycmF5PEV2ZW50U3Vic2NyaXB0aW9uPlxufVxuXG5sZXQgZXZlbnRzOiB7IFtuYW1lOiBzdHJpbmddOiBFdmVudEl0ZW0gfSA9IHt9O1xuXG5leHBvcnQgY2xhc3MgRXZlbnRzIHtcbiAgICBzdGF0aWMgc3Vic2NyaWJlKGV2ZW50OiBzdHJpbmcsIGNhbGxiYWNrOiBFdmVudFN1YnNjcmlwdGlvbiB8IEV2ZW50Q2FsbGJhY2ssIGFzeW5jPzogYm9vbGVhbikge1xuICAgICAgICBsZXQgc3Vic2NyaXB0aW9uOiBFdmVudFN1YnNjcmlwdGlvbjtcblxuICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBzdWJzY3JpcHRpb24gPSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2ssXG4gICAgICAgICAgICAgICAgYXN5bmNcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdWJzY3JpcHRpb24gPSBjYWxsYmFjaztcbiAgICAgICAgICAgIGlmICghc3Vic2NyaXB0aW9uLmNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgJ0NhbGxiYWNrIHdhcyBub3Qgc3BlY2lmaWVkIG9uIG9wdGlvbnMnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZ2V0RXZlbnQoZXZlbnQpLnN1YnNjcmlwdGlvbnMucHVzaChzdWJzY3JpcHRpb24pO1xuICAgIH1cblxuICAgIHN0YXRpYyBwdWJsaXNoKHR5cGU6IHN0cmluZywgZGF0YT86IGFueSkge1xuICAgICAgICBjb25zdCBldmVudEl0ZW0gPSBnZXRFdmVudCh0eXBlKTtcbiAgICAgICAgY29uc3Qgc3Vic2NyaXB0aW9ucyA9IGV2ZW50SXRlbS5zdWJzY3JpcHRpb25zO1xuXG4gICAgICAgIC8vIFB1Ymxpc2ggb25lLXRpbWUgc3Vic2NyaXB0aW9uc1xuICAgICAgICBzdWJzY3JpcHRpb25zLmZpbHRlcigoeyBvbmNlIH0pID0+ICEhb25jZSkuZm9yRWFjaChzdWJzY3JpcHRpb24gPT4gcHVibGlzaFN1YnNjcmlwdGlvbihzdWJzY3JpcHRpb24sIGRhdGEpKTtcblxuICAgICAgICAvLyByZW1vdmUgdGhlbSBmcm9tIHRoZSBzdWJzY3JpcHRpb25cbiAgICAgICAgZXZlbnRJdGVtLnN1YnNjcmlwdGlvbnMgPSBzdWJzY3JpcHRpb25zLmZpbHRlcigoeyBvbmNlIH0pID0+ICFvbmNlKTtcblxuICAgICAgICAvLyBwdWJsaXNoIHRoZSByZXN0XG4gICAgICAgIGV2ZW50SXRlbS5zdWJzY3JpcHRpb25zLmZvckVhY2goc3Vic2NyaXB0aW9uID0+IHB1Ymxpc2hTdWJzY3JpcHRpb24oc3Vic2NyaXB0aW9uLCBkYXRhKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIG9uY2UoZXZlbnQ6IHN0cmluZywgY2FsbGJhY2s6IEV2ZW50Q2FsbGJhY2ssIGFzeW5jPzogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICBFdmVudHMuc3Vic2NyaWJlKGV2ZW50LCB7IGNhbGxiYWNrLCBhc3luYywgb25jZTogdHJ1ZSB9KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgdW5zdWJzY3JpYmUoZXZlbnROYW1lPzogc3RyaW5nLCBjYWxsYmFjaz86IEV2ZW50Q2FsbGJhY2spIHtcbiAgICAgICAgaWYgKGV2ZW50TmFtZSkge1xuICAgICAgICAgICAgY29uc3QgZXZlbnQgPSBnZXRFdmVudChldmVudE5hbWUpO1xuICAgICAgICAgICAgaWYgKGV2ZW50ICYmIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQuc3Vic2NyaXB0aW9ucyA9IGV2ZW50LnN1YnNjcmlwdGlvbnMuZmlsdGVyKHN1YnNjcmlwdGlvbiA9PiBzdWJzY3JpcHRpb24uY2FsbGJhY2sgIT09IGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZXZlbnQuc3Vic2NyaXB0aW9ucyA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXZlbnRzID0ge307XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldEV2ZW50KGV2ZW50TmFtZTogc3RyaW5nKTogRXZlbnRJdGVtIHtcbiAgICBpZiAoIWV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICAgIGV2ZW50c1tldmVudE5hbWVdID0ge1xuICAgICAgICAgICAgc3Vic2NyaXB0aW9uczogW11cbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIGV2ZW50c1tldmVudE5hbWVdO1xufVxuXG5mdW5jdGlvbiBwdWJsaXNoU3Vic2NyaXB0aW9uKHN1YnNjcmlwdGlvbjogRXZlbnRTdWJzY3JpcHRpb24sIGRhdGE6IGFueSk6IHZvaWQge1xuICAgIGlmIChzdWJzY3JpcHRpb24uYXN5bmMpIHtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzdWJzY3JpcHRpb24uY2FsbGJhY2soZGF0YSk7XG4gICAgICAgIH0sIDQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHN1YnNjcmlwdGlvbi5jYWxsYmFjayhkYXRhKTtcbiAgICB9XG59XG4iLCJleHBvcnQgdHlwZSBIU1YgPSBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl07XG5cbmV4cG9ydCB0eXBlIFJHQiA9IFtudW1iZXIsIG51bWJlciwgbnVtYmVyXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGhzdjJyZ2IoaHN2OiBIU1YsIHJnYj86IFJHQik6IFJHQiB7XG4gICAgY29uc3QgaCA9IGhzdlswXTtcbiAgICBjb25zdCBzID0gaHN2WzFdO1xuICAgIGNvbnN0IHYgPSBoc3ZbMl07XG4gICAgY29uc3QgYyA9IHYgKiBzO1xuICAgIGNvbnN0IHggPSBjICogKDEgLSBNYXRoLmFicygoaCAvIDYwKSAlIDIgLSAxKSk7XG4gICAgY29uc3QgbSA9IHYgLSBjO1xuICAgIGxldCByID0gMDtcbiAgICBsZXQgZyA9IDA7XG4gICAgbGV0IGIgPSAwO1xuXG4gICAgaWYgKGggPCA2MCkge1xuICAgICAgICByID0gYztcbiAgICAgICAgZyA9IHg7XG4gICAgfSBlbHNlIGlmIChoIDwgMTIwKSB7XG4gICAgICAgIHIgPSB4O1xuICAgICAgICBnID0gYztcbiAgICB9IGVsc2UgaWYgKGggPCAxODApIHtcbiAgICAgICAgZyA9IGM7XG4gICAgICAgIGIgPSB4O1xuICAgIH0gZWxzZSBpZiAoaCA8IDI0MCkge1xuICAgICAgICBnID0geDtcbiAgICAgICAgYiA9IGM7XG4gICAgfSBlbHNlIGlmIChoIDwgMzAwKSB7XG4gICAgICAgIHIgPSB4O1xuICAgICAgICBiID0gYztcbiAgICB9IGVsc2UgaWYgKGggPCAzNjApIHtcbiAgICAgICAgciA9IGM7XG4gICAgICAgIGIgPSB4O1xuICAgIH1cblxuICAgIHJnYiA9IHJnYiB8fCBbMCwgMCwgMF07XG5cbiAgICByZ2JbMF0gPSAociArIG0pICogMjU1IHwgMDtcbiAgICByZ2JbMV0gPSAoZyArIG0pICogMjU1IHwgMDtcbiAgICByZ2JbMl0gPSAoYiArIG0pICogMjU1IHwgMDtcblxuICAgIHJldHVybiByZ2I7XG59XG4iLCJpbXBvcnQgeyBQb2ludCB9IGZyb20gJy4vcG9pbnQnO1xuXG5leHBvcnQgY29uc3QgSW1hZ2VEZWJ1ZyA9IHtcbiAgICBkcmF3UGF0aChwYXRoOiBBcnJheTxQb2ludD4sIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgY29sb3I6IHN0cmluZywgbGluZVdpZHRoOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHBhdGggJiYgcGF0aC5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gY29sb3I7XG4gICAgICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgICAgICAgICAgY29udGV4dC5saW5lV2lkdGggPSBsaW5lV2lkdGg7XG4gICAgICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY29udGV4dC5tb3ZlVG8ocGF0aFswXS54LCBwYXRoWzBdLnkpO1xuICAgICAgICAgICAgcGF0aC5zbGljZSgxKS5mb3JFYWNoKCh7IHgsIHkgfSkgPT4gY29udGV4dC5saW5lVG8oeCwgeSkpO1xuICAgICAgICAgICAgY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIGNvbnRleHQuc3Ryb2tlKCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgZHJhd0ltYWdlKGltYWdlRGF0YTogVWludDhBcnJheSwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBjYW52YXNEYXRhID0gY29udGV4dC5nZXRJbWFnZURhdGEoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBjYW52YXNEYXRhLmRhdGE7XG4gICAgICAgIGxldCBpbWFnZUluZGV4ID0gaW1hZ2VEYXRhLmxlbmd0aCB8IDA7XG4gICAgICAgIGxldCBjYW52YXNJbmRleCA9IGRhdGEubGVuZ3RoIHwgMDtcblxuICAgICAgICBpZiAoY2FudmFzSW5kZXggLyBpbWFnZUluZGV4ICE9PSA0KSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICB3aGlsZSAoaW1hZ2VJbmRleC0tKSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGltYWdlRGF0YVtpbWFnZUluZGV4XTtcbiAgICAgICAgICAgIGRhdGFbLS1jYW52YXNJbmRleF0gPSAyNTU7XG4gICAgICAgICAgICBkYXRhWy0tY2FudmFzSW5kZXhdID0gdmFsdWU7XG4gICAgICAgICAgICBkYXRhWy0tY2FudmFzSW5kZXhdID0gdmFsdWU7XG4gICAgICAgICAgICBkYXRhWy0tY2FudmFzSW5kZXhdID0gdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0LnB1dEltYWdlRGF0YShjYW52YXNEYXRhLCAwLCAwKTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBNb21lbnQgfSBmcm9tICcuL21vbWVudCc7XG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJy4vcG9pbnQnO1xuaW1wb3J0IHsgSFNWLCBoc3YycmdiLCBSR0IgfSBmcm9tICcuL2hzdjJyZ2InO1xuXG50eXBlIEFycmF5VHlwZSA9IEFycmF5PG51bWJlcj4gfCBVaW50OEFycmF5IHwgSW50MzJBcnJheTtcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgYmFzaWMgaW1hZ2UgY29tYmluaW5nIHRoZSBkYXRhIGFuZCBzaXplLlxuICogSW4gYWRkaXRpb24sIHNvbWUgbWV0aG9kcyBmb3IgbWFuaXB1bGF0aW9uIGFyZSBjb250YWluZWQuXG4gKi9cbmV4cG9ydCBjbGFzcyBJbWFnZVdyYXBwZXI8VCBleHRlbmRzIEFycmF5VHlwZSA9IFVpbnQ4QXJyYXk+IHtcbiAgICBkYXRhOiBUIHwgVWludDhBcnJheTtcbiAgICBzaXplOiBQb2ludDtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBzaXplIFRoZSBzaXplIG9mIHRoZSBpbWFnZSBpbiBwaXhlbFxuICAgICAqIEBwYXJhbSBkYXRhIElmIGdpdmVuLCBhIGZsYXQgYXJyYXkgY29udGFpbmluZyB0aGUgcGl4ZWwgZGF0YVxuICAgICAqIEBwYXJhbSBhcnJheVR5cGUgSWYgZ2l2ZW4sIHRoZSBkZXNpcmVkIERhdGFUeXBlIG9mIHRoZSBBcnJheSAobWF5IGJlIHR5cGVkL25vbi10eXBlZClcbiAgICAgKiBAcGFyYW0gaW5pdGlhbGl6ZSBJbmRpY2F0aW5nIGlmIHRoZSBhcnJheSBzaG91bGQgYmUgaW5pdGlhbGl6ZWQgb24gY3JlYXRpb24uXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2l6ZTogUG9pbnQsIGRhdGE/OiBULCBhcnJheVR5cGU/OiB7IG5ldyhfOiBudW1iZXIpOiBUIHwgVWludDhBcnJheSB9LCBpbml0aWFsaXplPzogYm9vbGVhbikge1xuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IG5ldyAoYXJyYXlUeXBlIHx8IFVpbnQ4QXJyYXkpKHNpemUueCAqIHNpemUueSk7XG5cbiAgICAgICAgICAgIGlmIChpbml0aWFsaXplKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhLmZpbGwoMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zaXplID0gc2l6ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUZXN0cyBpZiBhIHBvc2l0aW9uIGlzIHdpdGhpbiB0aGUgaW1hZ2Ugd2l0aCBhIGdpdmVuIG9mZnNldFxuICAgICAqIEBwYXJhbSBwb2ludCBUaGUgbG9jYXRpb24gdG8gdGVzdFxuICAgICAqIEBwYXJhbSBib3JkZXIgVGhlIHBhZGRpbmcgdmFsdWUgaW4gcGl4ZWxzXG4gICAgICogQHJldHVybnMgdHJ1ZSBpZiBsb2NhdGlvbiBpbnNpZGUgdGhlIGltYWdlJ3MgYm9yZGVyLCBmYWxzZSBvdGhlcndpc2VcbiAgICAgKiBAc2VlIGN2ZC9pbWFnZS5oXG4gICAgICovXG4gICAgaW5JbWFnZVdpdGhCb3JkZXIocG9pbnQ6IFBvaW50LCBib3JkZXI6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gKHBvaW50LnggPj0gYm9yZGVyKVxuICAgICAgICAgICAgJiYgKHBvaW50LnkgPj0gYm9yZGVyKVxuICAgICAgICAgICAgJiYgKHBvaW50LnggPCAodGhpcy5zaXplLnggLSBib3JkZXIpKVxuICAgICAgICAgICAgJiYgKHBvaW50LnkgPCAodGhpcy5zaXplLnkgLSBib3JkZXIpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuIHtJbWFnZVdyYXBwZXIpIGFuZCBjb3BpZXMgdGhlIG5lZWRlZCB1bmRlcmx5aW5nIGltYWdlLWRhdGEgYXJlYVxuICAgICAqIEBwYXJhbSBpbWFnZVdyYXBwZXIgVGhlIHRhcmdldCB7SW1hZ2VXcmFwcGVyfSB3aGVyZSB0aGUgZGF0YSBzaG91bGQgYmUgY29waWVkXG4gICAgICogQHBhcmFtIGZyb21YIFRoZSBob3Jpem9udGFsIHBvc2l0aW9uIHdoZXJlIHRvIGNvcHkgZnJvbVxuICAgICAqIEBwYXJhbSBmcm9tWSBUaGUgdmVydGljYWwgcG9zaXRpb24gd2hlcmUgdG8gY29weSBmcm9tXG4gICAgKi9cbiAgICBzdWJJbWFnZUFzQ29weShpbWFnZVdyYXBwZXI6IEltYWdlV3JhcHBlciwgZnJvbVg6IG51bWJlciwgZnJvbVk6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBjb25zdCBzaXplWSA9IGltYWdlV3JhcHBlci5zaXplLnk7XG4gICAgICAgIGNvbnN0IHNpemVYID0gaW1hZ2VXcmFwcGVyLnNpemUueDtcblxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHNpemVYOyB4KyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgc2l6ZVk7IHkrKykge1xuICAgICAgICAgICAgICAgIGltYWdlV3JhcHBlci5kYXRhW3kgKiBzaXplWCArIHhdID0gdGhpcy5kYXRhWyhmcm9tWSArIHkpICogdGhpcy5zaXplLnggKyBmcm9tWCArIHhdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0cmlldmVzIGEgZ2l2ZW4gcGl4ZWwgcG9zaXRpb24gZnJvbSB0aGUgaW1hZ2VcbiAgICAgKiBAcGFyYW0geCBUaGUgeC1wb3NpdGlvblxuICAgICAqIEBwYXJhbSB5IFRoZSB5LXBvc2l0aW9uXG4gICAgICogQHJldHVybnMgVGhlIGdyYXlzY2FsZSB2YWx1ZSBhdCB0aGUgcGl4ZWwtcG9zaXRpb25cbiAgICAgKi9cbiAgICBnZXQoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhW3kgKiB0aGlzLnNpemUueCArIHhdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgYSBnaXZlbiBwaXhlbCBwb3NpdGlvbiBpbiB0aGUgaW1hZ2VcbiAgICAgKiBAcGFyYW0geCBUaGUgeC1wb3NpdGlvblxuICAgICAqIEBwYXJhbSB5IFRoZSB5LXBvc2l0aW9uXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSBncmF5c2NhbGUgdmFsdWUgdG8gc2V0XG4gICAgICogQHJldHVybnMgVGhlIEltYWdlIGl0c2VsZiAoZm9yIHBvc3NpYmxlIGNoYWluaW5nKVxuICAgICAqL1xuICAgIHNldCh4OiBudW1iZXIsIHk6IG51bWJlciwgdmFsdWU6IG51bWJlcik6IEltYWdlV3JhcHBlcjxUPiB7XG4gICAgICAgIHRoaXMuZGF0YVt5ICogdGhpcy5zaXplLnggKyB4XSA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBib3JkZXIgb2YgdGhlIGltYWdlICgxIHBpeGVsKSB0byB6ZXJvXG4gICAgICovXG4gICAgemVyb0JvcmRlcigpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgd2lkdGggPSB0aGlzLnNpemUueDtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5zaXplLnk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGE7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3aWR0aDsgaSsrKSB7XG4gICAgICAgICAgICBkYXRhW2ldID0gZGF0YVsoaGVpZ2h0IC0gMSkgKiB3aWR0aCArIGldID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgaGVpZ2h0IC0gMTsgaSsrKSB7XG4gICAgICAgICAgICBkYXRhW2kgKiB3aWR0aF0gPSBkYXRhW2kgKiB3aWR0aCArICh3aWR0aCAtIDEpXSA9IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnZlcnRzIGEgYmluYXJ5IGltYWdlIGluIHBsYWNlXG4gICAgICovXG4gICAgaW52ZXJ0KCk6IHZvaWQge1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSBkYXRhLmxlbmd0aDsgaS0tOykge1xuICAgICAgICAgICAgZGF0YVtpXSA9IGRhdGFbaV0gPyAwIDogMTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1vbWVudHMobGFiZWxDb3VudDogbnVtYmVyKTogQXJyYXk8TW9tZW50PiB7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuc2l6ZS55O1xuICAgICAgICBjb25zdCB3aWR0aCA9IHRoaXMuc2l6ZS54O1xuICAgICAgICBjb25zdCBsYWJlbFN1bSA9IG5ldyBBcnJheTxNb21lbnQ+KCk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBBcnJheTxNb21lbnQ+KCk7XG5cbiAgICAgICAgaWYgKGxhYmVsQ291bnQgPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGFiZWxDb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBsYWJlbFN1bVtpXSA9IHtcbiAgICAgICAgICAgICAgICBtMDA6IDAsXG4gICAgICAgICAgICAgICAgbTAxOiAwLFxuICAgICAgICAgICAgICAgIG0xMDogMCxcbiAgICAgICAgICAgICAgICBtMTE6IDAsXG4gICAgICAgICAgICAgICAgbTAyOiAwLFxuICAgICAgICAgICAgICAgIG0yMDogMCxcbiAgICAgICAgICAgICAgICB0aGV0YTogMCxcbiAgICAgICAgICAgICAgICByYWQ6IDBcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGhlaWdodDsgeSsrKSB7XG4gICAgICAgICAgICBjb25zdCB5c3EgPSB5ICogeTtcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgd2lkdGg7IHgrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbCA9IHRoaXMuZGF0YVt5ICogd2lkdGggKyB4XTtcbiAgICAgICAgICAgICAgICBpZiAodmFsID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsYWJlbCA9IGxhYmVsU3VtW3ZhbCAtIDFdO1xuICAgICAgICAgICAgICAgICAgICBsYWJlbC5tMDAgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwubTAxICs9IHk7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsLm0xMCArPSB4O1xuICAgICAgICAgICAgICAgICAgICBsYWJlbC5tMTEgKz0geCAqIHk7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsLm0wMiArPSB5c3E7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsLm0yMCArPSB4ICogeDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBQSSA9IE1hdGguUEk7XG4gICAgICAgIGNvbnN0IFBJXzQgPSBQSSAvIDQ7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsYWJlbENvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gbGFiZWxTdW1baV07XG4gICAgICAgICAgICBpZiAoIWlzTmFOKGxhYmVsLm0wMCkgJiYgbGFiZWwubTAwICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeF8gPSBsYWJlbC5tMTAgLyBsYWJlbC5tMDA7XG4gICAgICAgICAgICAgICAgY29uc3QgeV8gPSBsYWJlbC5tMDEgLyBsYWJlbC5tMDA7XG4gICAgICAgICAgICAgICAgY29uc3QgbXUxMSA9IGxhYmVsLm0xMSAvIGxhYmVsLm0wMCAtIHhfICogeV87XG4gICAgICAgICAgICAgICAgY29uc3QgbXUwMiA9IGxhYmVsLm0wMiAvIGxhYmVsLm0wMCAtIHlfICogeV87XG4gICAgICAgICAgICAgICAgY29uc3QgbXUyMCA9IGxhYmVsLm0yMCAvIGxhYmVsLm0wMCAtIHhfICogeF87XG4gICAgICAgICAgICAgICAgY29uc3QgdG1wID0gMC41ICogTWF0aC5hdGFuKChtdTAyIC0gbXUyMCkgLyAoMiAqIG11MTEpKSArIChtdTExID49IDAgPyBQSV80IDogLVBJXzQpICsgUEk7XG4gICAgICAgICAgICAgICAgbGFiZWwudGhldGEgPSAodG1wICogMTgwIC8gUEkgKyA5MCkgJSAxODAgLSA5MDtcbiAgICAgICAgICAgICAgICBpZiAobGFiZWwudGhldGEgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsLnRoZXRhICs9IDE4MDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGFiZWwucmFkID0gdG1wID4gUEkgPyB0bXAgLSBQSSA6IHRtcDtcbiAgICAgICAgICAgICAgICBsYWJlbC54ID0gTWF0aC5jb3ModG1wKTtcbiAgICAgICAgICAgICAgICBsYWJlbC55ID0gTWF0aC5zaW4odG1wKTtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChsYWJlbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERpc3BsYXlzIHRoZSB7SW1hZ2VXcmFwcGVyfSBpbiBhIGdpdmVuIGNhbnZhc1xuICAgICAqIEBwYXJhbSBjb250ZXh0IFRoZSByZW5kZXJpbmcgY29udGV4dCB0byB3cml0ZSB0b1xuICAgICAqIEBwYXJhbSBzY2FsZSBTY2FsZSB3aGljaCBpcyBhcHBsaWVkIHRvIGVhY2ggcGl4ZWwtdmFsdWVcbiAgICAgKi9cbiAgICBzaG93KGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgc2NhbGU6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLnNpemUueTtcbiAgICAgICAgY29uc3Qgd2lkdGggPSB0aGlzLnNpemUueDtcbiAgICAgICAgLy8gY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICAvLyBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICAvLyBjYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgY29uc3QgZnJhbWUgPSBjb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGZyYW1lLmRhdGE7XG4gICAgICAgIGxldCBjdXJyZW50ID0gMDtcblxuICAgICAgICBpZiAoIXNjYWxlKSB7XG4gICAgICAgICAgICBzY2FsZSA9IDEuMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgaGVpZ2h0OyB5KyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgd2lkdGg7IHgrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBpeGVsID0geSAqIHdpZHRoICsgeDtcbiAgICAgICAgICAgICAgICBjdXJyZW50ID0gdGhpcy5nZXQoeCwgeSkgKiBzY2FsZTtcbiAgICAgICAgICAgICAgICBkYXRhW3BpeGVsICogNCArIDBdID0gY3VycmVudDtcbiAgICAgICAgICAgICAgICBkYXRhW3BpeGVsICogNCArIDFdID0gY3VycmVudDtcbiAgICAgICAgICAgICAgICBkYXRhW3BpeGVsICogNCArIDJdID0gY3VycmVudDtcbiAgICAgICAgICAgICAgICBkYXRhW3BpeGVsICogNCArIDNdID0gMjU1O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy9mcmFtZS5kYXRhID0gZGF0YTtcbiAgICAgICAgY29udGV4dC5wdXRJbWFnZURhdGEoZnJhbWUsIDAsIDApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERpc3BsYXlzIHRoZSBwYXJ0IG9mIHRoZSBpbWFnZSBpbiBhIGdpdmVuIGNhbnZhc1xuICAgICAqIEBwYXJhbSBjb250ZXh0IFRoZSByZW5kZXJpbmcgY29udGV4dCB0byB3cml0ZSB0b1xuICAgICAqIEBwYXJhbSBzY2FsZSBTY2FsZSB3aGljaCBpcyBhcHBsaWVkIHRvIGVhY2ggcGl4ZWwtdmFsdWVcbiAgICAgKiBAcGFyYW0gZnJvbVggVGhlIGhvcml6b250YWwgcG9zaXRpb24gd2hlcmUgdG8gb3ZlcmxheSBmcm9tXG4gICAgICogQHBhcmFtIGZyb21ZIFRoZSB2ZXJ0aWNhbCBwb3NpdGlvbiB3aGVyZSB0byBvdmVybGF5IGZyb21cbiAgICAgKi9cbiAgICBvdmVybGF5KGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgc2NhbGU6IG51bWJlciwgZnJvbVg6IG51bWJlciwgZnJvbVk6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBjb25zdCBoc3Y6IEhTViA9IFswLCAxLCAxXTtcbiAgICAgICAgY29uc3Qgd2hpdGVSZ2I6IFJHQiA9IFsyNTUsIDI1NSwgMjU1XTtcbiAgICAgICAgY29uc3QgYmxhY2tSZ2I6IFJHQiA9IFswLCAwLCAwXTtcbiAgICAgICAgY29uc3QgZnJhbWUgPSBjb250ZXh0LmdldEltYWdlRGF0YShmcm9tWCwgZnJvbVksIHRoaXMuc2l6ZS54LCB0aGlzLnNpemUueSk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBmcmFtZS5kYXRhO1xuXG4gICAgICAgIGlmICghc2NhbGUgfHwgc2NhbGUgPCAwIHx8IHNjYWxlID4gMzYwKSB7XG4gICAgICAgICAgICBzY2FsZSA9IDM2MDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGxlbmd0aCA9IHRoaXMuZGF0YS5sZW5ndGg7IGxlbmd0aC0tOykge1xuICAgICAgICAgICAgaHN2WzBdID0gdGhpcy5kYXRhW2xlbmd0aF0gKiBzY2FsZTtcbiAgICAgICAgICAgIGNvbnN0IHJnYjogUkdCID0gaHN2WzBdIDw9IDAgPyB3aGl0ZVJnYiA6IGhzdlswXSA+PSAzNjAgPyBibGFja1JnYiA6IGhzdjJyZ2IoaHN2KTtcbiAgICAgICAgICAgIGRhdGFbbGVuZ3RoICogNCArIDBdID0gcmdiWzBdO1xuICAgICAgICAgICAgZGF0YVtsZW5ndGggKiA0ICsgMV0gPSByZ2JbMV07XG4gICAgICAgICAgICBkYXRhW2xlbmd0aCAqIDQgKyAyXSA9IHJnYlsyXTtcbiAgICAgICAgICAgIGRhdGFbbGVuZ3RoICogNCArIDNdID0gMjU1O1xuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5wdXRJbWFnZURhdGEoZnJhbWUsIGZyb21YLCBmcm9tWSk7XG4gICAgfVxufVxuIiwiXG5leHBvcnQgZnVuY3Rpb24gZW51bWVyYXRlRGV2aWNlcygpOiBQcm9taXNlPEFycmF5PE1lZGlhRGV2aWNlSW5mbz4+IHtcbiAgICBpZiAobmF2aWdhdG9yLm1lZGlhRGV2aWNlcyAmJiB0eXBlb2YgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5lbnVtZXJhdGVEZXZpY2VzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmVudW1lcmF0ZURldmljZXMoKTtcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcignZW51bWVyYXRlRGV2aWNlcyBpcyBub3QgZGVmaW5lZCcpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVzZXJNZWRpYShjb25zdHJhaW50czogTWVkaWFTdHJlYW1Db25zdHJhaW50cyk6IFByb21pc2U8TWVkaWFTdHJlYW0+IHtcbiAgICBpZiAobmF2aWdhdG9yLm1lZGlhRGV2aWNlcyAmJiB0eXBlb2YgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKGNvbnN0cmFpbnRzKTtcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcignZ2V0VXNlck1lZGlhIGlzIG5vdCBkZWZpbmVkJykpO1xufVxuIiwiLyoqXG4gKiBQZXJmb3JtcyBhIGRlZXAgbWVyZ2Ugb2Ygb2JqZWN0cyBhbmQgcmV0dXJucyBuZXcgb2JqZWN0LlxuICogRG9lcyBub3QgbW9kaWZ5IG9iamVjdHMgKGltbXV0YWJsZSkuXG4gKiBAc2VlIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS80ODIxODIwOVxuICpcbiAqIEBwYXJhbSBvYmplY3RzIC0gT2JqZWN0cyB0byBtZXJnZVxuICogQHJldHVybnMgTmV3IG9iamVjdCB3aXRoIG1lcmdlZCBrZXkvdmFsdWVzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZSguLi5vYmplY3RzOiBSZWFkb25seUFycmF5PGFueT4pOiBvYmplY3Qge1xuICAgIGNvbnN0IGlzT2JqZWN0ID0gKG9iajogdW5rbm93bikgPT4gb2JqICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnO1xuXG4gICAgcmV0dXJuIG9iamVjdHMucmVkdWNlKChwcmV2LCBvYmopID0+IHtcbiAgICAgICAgaWYgKG9iaikge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMob2JqKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcFZhbCA9IHByZXZba2V5XTtcbiAgICAgICAgICAgICAgICBjb25zdCBvVmFsID0gb2JqW2tleV07XG5cbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwVmFsKSAmJiBBcnJheS5pc0FycmF5KG9WYWwpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHByZXZba2V5XSA9IHBWYWwuY29uY2F0KC4uLm9WYWwpO1xuICAgICAgICAgICAgICAgICAgICBwcmV2W2tleV0gPSBvVmFsO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNPYmplY3QocFZhbCkgJiYgaXNPYmplY3Qob1ZhbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJldltrZXldID0gbWVyZ2UocFZhbCwgb1ZhbCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcHJldltrZXldID0gb1ZhbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwcmV2O1xuICAgIH0sIHt9KTtcbn0iLCJpbXBvcnQgeyBRdWFnZ2FDb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XG5cbmV4cG9ydCBjb25zdCBjb25maWc6IFF1YWdnYUNvbmZpZyA9IHtcbiAgICBpbnB1dFN0cmVhbToge1xuICAgICAgICBuYW1lOiAnTGl2ZScsXG4gICAgICAgIHR5cGU6ICdMaXZlU3RyZWFtJyxcbiAgICAgICAgY29uc3RyYWludHM6IHtcbiAgICAgICAgICAgIHdpZHRoOiA2NDAsXG4gICAgICAgICAgICBoZWlnaHQ6IDQ4MCxcbiAgICAgICAgICAgIC8vIGFzcGVjdFJhdGlvOiA2NDAvNDgwLCAvLyBvcHRpb25hbFxuICAgICAgICAgICAgZmFjaW5nTW9kZTogJ2Vudmlyb25tZW50JyAvLyBvciB1c2VyXG4gICAgICAgICAgICAvLyBkZXZpY2VJZDogJzM4NzQ1OTgzNDU3Mzg3NTk4Mzc1OTgzNzU5ODM0J1xuICAgICAgICB9LFxuICAgICAgICBhcmVhOiB7XG4gICAgICAgICAgICB0b3A6ICcwJScsXG4gICAgICAgICAgICByaWdodDogJzAlJyxcbiAgICAgICAgICAgIGxlZnQ6ICcwJScsXG4gICAgICAgICAgICBib3R0b206ICcwJSdcbiAgICAgICAgfSxcbiAgICAgICAgc2luZ2xlQ2hhbm5lbDogZmFsc2UgLy8gdHJ1ZTogb25seSB0aGUgcmVkIGNvbG9yLWNoYW5uZWwgaXMgcmVhZFxuICAgIH0sXG4gICAgbG9jYXRlOiB0cnVlLFxuICAgIG51bU9mV29ya2VyczogMCxcbiAgICBkZWNvZGVyOiB7XG4gICAgICAgIHJlYWRlcnM6IFtcbiAgICAgICAgICAgICdjb2RlXzEyOF9yZWFkZXInXG4gICAgICAgIF0sXG4gICAgICAgIGRlYnVnOiB7XG4gICAgICAgICAgICBkcmF3Qm91bmRpbmdCb3g6IGZhbHNlLFxuICAgICAgICAgICAgc2hvd0ZyZXF1ZW5jeTogZmFsc2UsXG4gICAgICAgICAgICBkcmF3U2NhbmxpbmU6IGZhbHNlLFxuICAgICAgICAgICAgc2hvd1BhdHRlcm46IGZhbHNlXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGxvY2F0b3I6IHtcbiAgICAgICAgaGFsZlNhbXBsZTogdHJ1ZSxcbiAgICAgICAgcGF0Y2hTaXplOiAnbWVkaXVtJywgLy8geC1zbWFsbCwgc21hbGwsIG1lZGl1bSwgbGFyZ2UsIHgtbGFyZ2VcbiAgICAgICAgZGVidWc6IHtcbiAgICAgICAgICAgIHNob3dDYW52YXM6IGZhbHNlLFxuICAgICAgICAgICAgc2hvd1BhdGNoZXM6IGZhbHNlLFxuICAgICAgICAgICAgc2hvd0ZvdW5kUGF0Y2hlczogZmFsc2UsXG4gICAgICAgICAgICBzaG93U2tlbGV0b246IGZhbHNlLFxuICAgICAgICAgICAgc2hvd0xhYmVsczogZmFsc2UsXG4gICAgICAgICAgICBzaG93UGF0Y2hMYWJlbHM6IGZhbHNlLFxuICAgICAgICAgICAgc2hvd1JlbWFpbmluZ1BhdGNoTGFiZWxzOiBmYWxzZSxcbiAgICAgICAgICAgIGJveEZyb21QYXRjaGVzOiB7XG4gICAgICAgICAgICAgICAgc2hvd1RyYW5zZm9ybWVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzaG93VHJhbnNmb3JtZWRCb3g6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNob3dCQjogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG4iLCJpbXBvcnQgeyBCb3ggfSBmcm9tICcuLi9jb21tb24vYm94JztcbmltcG9ydCB7IEltYWdlV3JhcHBlciB9IGZyb20gJy4uL2NvbW1vbi9pbWFnZS13cmFwcGVyJztcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi4vY29tbW9uL3BvaW50JztcbmltcG9ydCB7IFJlYWRlcnMgfSBmcm9tICcuLi9yZWFkZXIvaW5kZXgnO1xuaW1wb3J0IHsgQmFyY29kZSwgQmFyY29kZVJlYWRlciwgQmFyY29kZVJlYWRlckNvbmZpZywgQmFyY29kZVJlYWRlckRlY2xhcmF0aW9uLCBCYXJjb2RlUmVhZGVyVHlwZSB9IGZyb20gJy4uL3JlYWRlci9iYXJjb2RlLXJlYWRlcic7XG5pbXBvcnQgeyBCYXJjb2RlTGluZSwgQnJlc2VuaGFtIH0gZnJvbSAnLi9icmVzZW5oYW0nO1xuaW1wb3J0IHsgSW1hZ2VEZWJ1ZyB9IGZyb20gJy4uL2NvbW1vbi9pbWFnZS1kZWJ1Zyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmFyY29kZURlY29kZXJDb25maWcge1xuICAgIGRlYnVnPzoge1xuICAgICAgICBkcmF3Qm91bmRpbmdCb3g/OiBib29sZWFuO1xuICAgICAgICBkcmF3U2NhbmxpbmU/OiBib29sZWFuO1xuICAgICAgICBzaG93RnJlcXVlbmN5PzogYm9vbGVhbjtcbiAgICAgICAgc2hvd1BhdHRlcm4/OiBib29sZWFuO1xuICAgIH07XG4gICAgbXVsdGlwbGU/OiBib29sZWFuO1xuICAgIHJlYWRlcnM/OiBBcnJheTxCYXJjb2RlUmVhZGVyRGVjbGFyYXRpb24+O1xufVxuXG50eXBlIExpbmUgPSBbUG9pbnQsIFBvaW50XTtcblxuZXhwb3J0IGludGVyZmFjZSBRdWFnZ2FCYXJjb2RlIHtcbiAgICBhbmdsZT86IG51bWJlcjtcbiAgICBiYXJjb2Rlcz86IEFycmF5PFF1YWdnYUJhcmNvZGU+OyAvLyBUT09EOiBkZWFsIHdpdGggbXVsdGlwbGUgcmVzdWx0c1xuICAgIGJveD86IEJveDtcbiAgICBib3hlcz86IEFycmF5PEJveD47IC8vIFRPT0Q6IGRlYWwgd2l0aCBtdWx0aXBsZSByZXN1bHRzXG4gICAgY29kZVJlc3VsdD86IEJhcmNvZGU7XG4gICAgZnJhbWU/OiBzdHJpbmc7XG4gICAgbGluZT86IExpbmU7XG4gICAgcGF0dGVybj86IEFycmF5PG51bWJlcj47XG4gICAgdGhyZXNob2xkPzogbnVtYmVyO1xufTtcblxuaW50ZXJmYWNlIEJhcmNvZGVBbmRCYXJjb2RlTGluZSB7XG4gICAgY29kZVJlc3VsdDogQmFyY29kZTtcbiAgICBiYXJjb2RlTGluZTogQmFyY29kZUxpbmU7XG59XG5cbmV4cG9ydCBjbGFzcyBCYXJjb2RlRGVjb2RlciB7XG4gICAgcHJpdmF0ZSBfY29uZmlnOiBCYXJjb2RlRGVjb2RlckNvbmZpZztcbiAgICBwcml2YXRlIF9pbnB1dEltYWdlV3JhcHBlcjogSW1hZ2VXcmFwcGVyPFVpbnQ4QXJyYXk+O1xuICAgIHByaXZhdGUgX2ZyZXF1ZW5jeUNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG4gICAgcHJpdmF0ZSBfcGF0dGVybkNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG4gICAgcHJpdmF0ZSBfb3ZlcmxheUNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcbiAgICBwcml2YXRlIF9iYXJjb2RlUmVhZGVyczogQXJyYXk8QmFyY29kZVJlYWRlcj47XG5cbiAgICBjb25zdHJ1Y3Rvcihjb25maWc6IEJhcmNvZGVEZWNvZGVyQ29uZmlnLCBpbnB1dEltYWdlV3JhcHBlcjogSW1hZ2VXcmFwcGVyPFVpbnQ4QXJyYXk+KSB7XG4gICAgICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcbiAgICAgICAgdGhpcy5faW5wdXRJbWFnZVdyYXBwZXIgPSBpbnB1dEltYWdlV3JhcHBlcjtcbiAgICAgICAgdGhpcy5fYmFyY29kZVJlYWRlcnMgPSBbXTtcblxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLl9jb25maWcuZGVidWcgJiYgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgY29uc3QgZGVidWdEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVidWcuZGV0ZWN0aW9uJyk7XG5cbiAgICAgICAgICAgIHRoaXMuX2ZyZXF1ZW5jeUNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbnZhcy5mcmVxdWVuY3knKTtcbiAgICAgICAgICAgIGlmICghdGhpcy5fZnJlcXVlbmN5Q2FudmFzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZnJlcXVlbmN5Q2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5fZnJlcXVlbmN5Q2FudmFzLmNsYXNzTmFtZSA9ICdmcmVxdWVuY3knO1xuICAgICAgICAgICAgICAgIGlmIChkZWJ1Z0Rpdikge1xuICAgICAgICAgICAgICAgICAgICBkZWJ1Z0Rpdi5hcHBlbmRDaGlsZCh0aGlzLl9mcmVxdWVuY3lDYW52YXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2ZyZXF1ZW5jeUNhbnZhcy5zdHlsZS5kaXNwbGF5ID0gdGhpcy5fY29uZmlnLmRlYnVnLnNob3dGcmVxdWVuY3kgPyAnYmxvY2snIDogJ25vbmUnO1xuXG4gICAgICAgICAgICB0aGlzLl9wYXR0ZXJuQ2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FudmFzLnBhdHRlcm5CdWZmZXInKTtcbiAgICAgICAgICAgIGlmICghdGhpcy5fcGF0dGVybkNhbnZhcykge1xuICAgICAgICAgICAgICAgIHRoaXMuX3BhdHRlcm5DYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9wYXR0ZXJuQ2FudmFzLmNsYXNzTmFtZSA9ICdwYXR0ZXJuQnVmZmVyJztcbiAgICAgICAgICAgICAgICBpZiAoZGVidWdEaXYpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVidWdEaXYuYXBwZW5kQ2hpbGQodGhpcy5fcGF0dGVybkNhbnZhcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fcGF0dGVybkNhbnZhcy5zdHlsZS5kaXNwbGF5ID0gdGhpcy5fY29uZmlnLmRlYnVnLnNob3dQYXR0ZXJuID8gJ2Jsb2NrJyA6ICdub25lJztcblxuICAgICAgICAgICAgY29uc3Qgb3ZlcmxheUNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTENhbnZhc0VsZW1lbnQ+KCdjYW52YXMuZHJhd2luZ0J1ZmZlcicpO1xuICAgICAgICAgICAgdGhpcy5fb3ZlcmxheUNvbnRleHQgPSBvdmVybGF5Q2FudmFzID8gb3ZlcmxheUNhbnZhcy5nZXRDb250ZXh0KCcyZCcpIDogbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2luaXRSZWFkZXJzKCk7XG4gICAgfVxuXG4gICAgZGVjb2RlRnJvbUJvdW5kaW5nQm94ZXMoYm94ZXM6IEFycmF5PEJveD4pOiBRdWFnZ2FCYXJjb2RlIHtcbiAgICAgICAgY29uc3QgYmFyY29kZXMgPSBbXTtcbiAgICAgICAgY29uc3QgbXVsdGlwbGUgPSB0aGlzLl9jb25maWcubXVsdGlwbGU7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib3hlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgYm94ID0gYm94ZXNbaV07XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLmRlY29kZUZyb21Cb3VuZGluZ0JveChib3gpIHx8IHt9O1xuICAgICAgICAgICAgcmVzdWx0LmJveCA9IGJveDtcblxuICAgICAgICAgICAgaWYgKG11bHRpcGxlKSB7XG4gICAgICAgICAgICAgICAgYmFyY29kZXMucHVzaChyZXN1bHQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuY29kZVJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobXVsdGlwbGUpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgYmFyY29kZXNcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXaXRoIHRoZSBoZWxwIG9mIHRoZSBjb25maWd1cmVkIHJlYWRlcnMgdGhpcyBmdW5jdGlvbiB0cmllcyB0byBkZXRlY3RcbiAgICAgKiBhIHZhbGlkIGJhcmNvZGUgcGF0dGVybiB3aXRoaW4gdGhlIGdpdmVuIGFyZWEuXG4gICAgICogQHBhcmFtIGJveCBUaGUgYXJlYSB0byBzZWFyY2ggaW5cbiAgICAgKiBAcmV0dXJucyBUaGUgcmVzdWx0IHtjb2RlUmVzdWx0LCBsaW5lLCBhbmdsZSwgcGF0dGVybiwgdGhyZXNob2xkfVxuICAgICAqL1xuICAgIGRlY29kZUZyb21Cb3VuZGluZ0JveChib3g6IEJveCk6IFF1YWdnYUJhcmNvZGUge1xuICAgICAgICBjb25zdCBkZWJ1ZyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdGhpcy5fb3ZlcmxheUNvbnRleHQgJiYgdGhpcy5fY29uZmlnLmRlYnVnO1xuXG4gICAgICAgIGlmIChkZWJ1ZyAmJiBkZWJ1Zy5kcmF3Qm91bmRpbmdCb3gpIHtcbiAgICAgICAgICAgIHRoaXMuX2RyYXdQYXRoKGJveCwgJ2JsdWUnLCAyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBsaW5lID0gdGhpcy5fZ2V0TGluZShib3gpO1xuXG4gICAgICAgIGlmIChsaW5lID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGFuZ2xlID0gTWF0aC5hdGFuMihsaW5lWzFdLnkgLSBsaW5lWzBdLnksIGxpbmVbMV0ueCAtIGxpbmVbMF0ueCk7XG4gICAgICAgIGxpbmUgPSB0aGlzLl9nZXRFeHRlbmRlZExpbmUobGluZSwgYW5nbGUpO1xuXG4gICAgICAgIGxldCByZXN1bHQgPSB0aGlzLl90cnlEZWNvZGUobGluZSk7XG4gICAgICAgIGlmIChyZXN1bHQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuX3RyeURlY29kZUJydXRlRm9yY2UoYm94LCBsaW5lLCBhbmdsZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVzdWx0ID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkZWJ1ZyAmJiBkZWJ1Zy5kcmF3U2NhbmxpbmUpIHtcbiAgICAgICAgICAgIHRoaXMuX2RyYXdQYXRoKGxpbmUsICdyZWQnLCAzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb2RlUmVzdWx0OiByZXN1bHQuY29kZVJlc3VsdCxcbiAgICAgICAgICAgIGxpbmUsXG4gICAgICAgICAgICBhbmdsZSxcbiAgICAgICAgICAgIHBhdHRlcm46IHJlc3VsdC5iYXJjb2RlTGluZS5saW5lLFxuICAgICAgICAgICAgdGhyZXNob2xkOiByZXN1bHQuYmFyY29kZUxpbmUudGhyZXNob2xkXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgc2V0UmVhZGVycyhyZWFkZXJzOiBBcnJheTxCYXJjb2RlUmVhZGVyRGVjbGFyYXRpb24+KTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2NvbmZpZy5yZWFkZXJzID0gcmVhZGVycztcbiAgICAgICAgdGhpcy5fYmFyY29kZVJlYWRlcnMubGVuZ3RoID0gMDtcbiAgICAgICAgdGhpcy5faW5pdFJlYWRlcnMoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9pbml0UmVhZGVycygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fY29uZmlnLnJlYWRlcnMuZm9yRWFjaChyZWFkZXJDb25maWcgPT4ge1xuICAgICAgICAgICAgbGV0IHJlYWRlcjogQmFyY29kZVJlYWRlclR5cGU7XG4gICAgICAgICAgICBsZXQgY29uZmlndXJhdGlvbjogQmFyY29kZVJlYWRlckNvbmZpZyA9IHt9O1xuICAgICAgICAgICAgbGV0IHN1cHBsZW1lbnRzID0gW107XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgcmVhZGVyQ29uZmlnID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIHJlYWRlciA9IHJlYWRlckNvbmZpZy5mb3JtYXQ7XG4gICAgICAgICAgICAgICAgY29uZmlndXJhdGlvbiA9IHJlYWRlckNvbmZpZy5jb25maWcgfHwge307XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiByZWFkZXJDb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgcmVhZGVyID0gcmVhZGVyQ29uZmlnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdCZWZvcmUgcmVnaXN0ZXJpbmcgcmVhZGVyOicsIHJlYWRlcik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uLnN1cHBsZW1lbnRzKSB7XG4gICAgICAgICAgICAgICAgc3VwcGxlbWVudHMgPSBjb25maWd1cmF0aW9uLnN1cHBsZW1lbnRzLm1hcChzdXBwbGVtZW50ID0+IG5ldyBSZWFkZXJzW3N1cHBsZW1lbnRdKCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9iYXJjb2RlUmVhZGVycy5wdXNoKG5ldyBSZWFkZXJzW3JlYWRlcl0oY29uZmlndXJhdGlvbiwgc3VwcGxlbWVudHMpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZWdpc3RlcmVkIFJlYWRlcnM6JyxcbiAgICAgICAgICAgICAgICAuLi50aGlzLl9iYXJjb2RlUmVhZGVycy5tYXAoKHsgY29uZmlnLCBGT1JNQVQgfSkgPT4gSlNPTi5zdHJpbmdpZnkoeyBjb25maWcsIEZPUk1BVCB9KSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogZXh0ZW5kIHRoZSBsaW5lIG9uIGJvdGggZW5kc1xuICAgICAqIEBwYXJhbSBsaW5lXG4gICAgICogQHBhcmFtIGFuZ2xlXG4gICAgICovXG4gICAgcHJpdmF0ZSBfZ2V0RXh0ZW5kZWRMaW5lKGxpbmU6IExpbmUsIGFuZ2xlOiBudW1iZXIpOiBMaW5lIHtcbiAgICAgICAgZnVuY3Rpb24gZXh0ZW5kTGluZShhbW91bnQ6IG51bWJlcikge1xuICAgICAgICAgICAgY29uc3QgZXh0ZW5zaW9uID0ge1xuICAgICAgICAgICAgICAgIHk6IGFtb3VudCAqIE1hdGguc2luKGFuZ2xlKSxcbiAgICAgICAgICAgICAgICB4OiBhbW91bnQgKiBNYXRoLmNvcyhhbmdsZSlcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGxpbmVbMF0ueSAtPSBleHRlbnNpb24ueTtcbiAgICAgICAgICAgIGxpbmVbMF0ueCAtPSBleHRlbnNpb24ueDtcbiAgICAgICAgICAgIGxpbmVbMV0ueSArPSBleHRlbnNpb24ueTtcbiAgICAgICAgICAgIGxpbmVbMV0ueCArPSBleHRlbnNpb24ueDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGxpbmVMZW5ndGggPSBNYXRoLnNxcnQoKGxpbmVbMV0ueSAtIGxpbmVbMF0ueSkgKiogMiArIChsaW5lWzFdLnggLSBsaW5lWzBdLngpICoqIDIpO1xuICAgICAgICBsZXQgZXh0ZW5zaW9uTGVuZ3RoID0gbGluZUxlbmd0aCAqIDAuMSB8IDA7XG5cbiAgICAgICAgZXh0ZW5kTGluZShleHRlbnNpb25MZW5ndGgpO1xuXG4gICAgICAgIC8vIGNoZWNrIGlmIGluc2lkZSBpbWFnZVxuICAgICAgICB3aGlsZSAoZXh0ZW5zaW9uTGVuZ3RoID4gMSAmJiAoIXRoaXMuX2lucHV0SW1hZ2VXcmFwcGVyLmluSW1hZ2VXaXRoQm9yZGVyKGxpbmVbMF0sIDApXG4gICAgICAgICAgICB8fCAhdGhpcy5faW5wdXRJbWFnZVdyYXBwZXIuaW5JbWFnZVdpdGhCb3JkZXIobGluZVsxXSwgMCkpKSB7XG4gICAgICAgICAgICBleHRlbnNpb25MZW5ndGggPj49IDE7XG4gICAgICAgICAgICBleHRlbmRMaW5lKC1leHRlbnNpb25MZW5ndGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGxpbmU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZ2V0TGluZShib3g6IEJveCk6IExpbmUge1xuICAgICAgICByZXR1cm4gW3tcbiAgICAgICAgICAgIHg6IChib3hbMV0ueCArIGJveFswXS54KSAvIDIsXG4gICAgICAgICAgICB5OiAoYm94WzFdLnkgKyBib3hbMF0ueSkgLyAyXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHg6IChib3hbM10ueCArIGJveFsyXS54KSAvIDIsXG4gICAgICAgICAgICB5OiAoYm94WzNdLnkgKyBib3hbMl0ueSkgLyAyXG4gICAgICAgIH1dO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3RyeURlY29kZShsaW5lOiBMaW5lKTogQmFyY29kZUFuZEJhcmNvZGVMaW5lIHtcbiAgICAgICAgY29uc3QgZGVidWcgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuX2NvbmZpZy5kZWJ1ZztcblxuICAgICAgICBpZiAoZGVidWcgJiYgdGhpcy5fb3ZlcmxheUNvbnRleHQpIHtcbiAgICAgICAgICAgIHRoaXMuX2RyYXdQYXRoKGxpbmUsICdyZWQnLCAzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBiYXJjb2RlTGluZSA9IEJyZXNlbmhhbS5nZXRCYXJjb2RlTGluZSh0aGlzLl9pbnB1dEltYWdlV3JhcHBlciwgbGluZVswXSwgbGluZVsxXSk7XG5cbiAgICAgICAgaWYgKGRlYnVnICYmIGRlYnVnLnNob3dGcmVxdWVuY3kpIHtcbiAgICAgICAgICAgIHRoaXMuX3ByaW50RnJlcXVlbmN5KGJhcmNvZGVMaW5lLmxpbmUpO1xuICAgICAgICB9XG5cbiAgICAgICAgYmFyY29kZUxpbmUgPSBCcmVzZW5oYW0udG9CaW5hcnlMaW5lKGJhcmNvZGVMaW5lKTtcblxuICAgICAgICBpZiAoZGVidWcgJiYgZGVidWcuc2hvd1BhdHRlcm4pIHtcbiAgICAgICAgICAgIHRoaXMuX3ByaW50UGF0dGVybihiYXJjb2RlTGluZS5saW5lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fYmFyY29kZVJlYWRlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNvZGVSZXN1bHQgPSB0aGlzLl9iYXJjb2RlUmVhZGVyc1tpXS5kZWNvZGVQYXR0ZXJuKGJhcmNvZGVMaW5lLmxpbmUpO1xuICAgICAgICAgICAgaWYgKGNvZGVSZXN1bHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBjb2RlUmVzdWx0LFxuICAgICAgICAgICAgICAgICAgICBiYXJjb2RlTGluZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCBzbGljZXMgdGhlIGdpdmVuIGFyZWEgYXBhcnQgYW5kIHRyaWVzIHRvIGRldGVjdCBhIGJhcmNvZGUtcGF0dGVybiBmb3IgZWFjaCBzbGljZS5cbiAgICAgKiBJdCByZXR1cm5zIHRoZSBkZWNvZGVkIGJhcmNvZGUsIG9yIG51bGwgaWYgbm90aGluZyB3YXMgZm91bmRcbiAgICAgKiBAcGFyYW0gYm94XG4gICAgICogQHBhcmFtIGxpbmVcbiAgICAgKiBAcGFyYW0gbGluZUFuZ2xlXG4gICAgICovXG4gICAgcHJpdmF0ZSBfdHJ5RGVjb2RlQnJ1dGVGb3JjZShib3g6IEJveCwgbGluZTogTGluZSwgbGluZUFuZ2xlOiBudW1iZXIpOiBCYXJjb2RlQW5kQmFyY29kZUxpbmUge1xuICAgICAgICBjb25zdCBzaWRlTGVuZ3RoID0gTWF0aC5zcXJ0KChib3hbMV0ueCAtIGJveFswXS54KSAqKiAyICsgKGJveFsxXS55IC0gYm94WzBdLnkpICoqIDIpO1xuICAgICAgICBjb25zdCBzbGljZXMgPSAxNjtcbiAgICAgICAgY29uc3QgeGRpciA9IE1hdGguc2luKGxpbmVBbmdsZSk7XG4gICAgICAgIGNvbnN0IHlkaXIgPSBNYXRoLmNvcyhsaW5lQW5nbGUpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgc2xpY2VzOyBpKyspIHtcbiAgICAgICAgICAgIC8vIG1vdmUgbGluZSBwZXJwZW5kaWN1bGFyIHRvIGFuZ2xlXG4gICAgICAgICAgICBjb25zdCBkaXIgPSBzaWRlTGVuZ3RoIC8gc2xpY2VzICogaSAqIChpICUgMiA9PT0gMCA/IC0xIDogMSk7XG4gICAgICAgICAgICBsaW5lWzBdLnkgKz0gZGlyICogeGRpcjtcbiAgICAgICAgICAgIGxpbmVbMF0ueCAtPSBkaXIgKiB5ZGlyO1xuICAgICAgICAgICAgbGluZVsxXS55ICs9IGRpciAqIHhkaXI7XG4gICAgICAgICAgICBsaW5lWzFdLnggLT0gZGlyICogeWRpcjtcblxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5fdHJ5RGVjb2RlKGxpbmUpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVc2VkIGZvciBkZXZlbG9wbWVudCBvbmx5XG4gICAgICovXG4gICAgcHJpdmF0ZSBfcHJpbnRGcmVxdWVuY3kobGluZTogQXJyYXk8bnVtYmVyPik6IHZvaWQge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5fZnJlcXVlbmN5Q2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIHRoaXMuX2ZyZXF1ZW5jeUNhbnZhcy53aWR0aCA9IGxpbmUubGVuZ3RoO1xuICAgICAgICB0aGlzLl9mcmVxdWVuY3lDYW52YXMuaGVpZ2h0ID0gMjU2O1xuXG4gICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSAnYmx1ZSc7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb250ZXh0Lm1vdmVUbyhpLCAyNTUpO1xuICAgICAgICAgICAgY29udGV4dC5saW5lVG8oaSwgMjU1IC0gbGluZVtpXSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgICAgICBjb250ZXh0LnN0cm9rZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVzZWQgZm9yIGRldmVsb3BtZW50IG9ubHlcbiAgICAgKi9cbiAgICBwcml2YXRlIF9wcmludFBhdHRlcm4obGluZTogQXJyYXk8bnVtYmVyPik6IHZvaWQge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5fcGF0dGVybkNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgICAgIHRoaXMuX3BhdHRlcm5DYW52YXMud2lkdGggPSBsaW5lLmxlbmd0aDtcbiAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSAnYmxhY2snO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGxpbmVbaV0gPT09IDEpIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmZpbGxSZWN0KGksIDAsIDEsIDEwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9kcmF3UGF0aChwYXRoOiBBcnJheTxQb2ludD4sIGNvbG9yOiBzdHJpbmcsIGxpbmVXaWR0aDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIEltYWdlRGVidWcuZHJhd1BhdGgocGF0aCwgdGhpcy5fb3ZlcmxheUNvbnRleHQsIGNvbG9yLCBsaW5lV2lkdGgpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi4vY29tbW9uL3BvaW50JztcbmltcG9ydCB7IEltYWdlV3JhcHBlciB9IGZyb20gJy4uL2NvbW1vbi9pbWFnZS13cmFwcGVyJztcblxuZW51bSBTbG9wZSB7XG4gICAgVXAgPSAxLFxuICAgIERvd24gPSAtMVxufTtcblxuZXhwb3J0IGludGVyZmFjZSBCYXJjb2RlTGluZSB7XG4gICAgbGluZTogQXJyYXk8bnVtYmVyPjtcbiAgICBtYXg/OiBudW1iZXI7XG4gICAgbWluPzogbnVtYmVyO1xuICAgIHRocmVzaG9sZD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIEJyZXNlbmhhbSB7XG4gICAgLyoqXG4gICAgICogU2NhbnMgYSBsaW5lIG9mIHRoZSBnaXZlbiBpbWFnZSBmcm9tIHBvaW50IHAxIHRvIHAyIGFuZCByZXR1cm5zIGEgcmVzdWx0IG9iamVjdCBjb250YWluaW5nXG4gICAgICogZ3JheS1zY2FsZSB2YWx1ZXMgKDAtMjU1KSBvZiB0aGUgdW5kZXJseWluZyBwaXhlbHMgaW4gYWRkaXRpb24gdG8gdGhlIG1pbiBhbmQgbWF4IHZhbHVlcy5cbiAgICAgKiBAcGFyYW0gaW1hZ2VXcmFwcGVyXG4gICAgICogQHBhcmFtIHAxIFRoZSBzdGFydCBwb2ludCB7eCx5fVxuICAgICAqIEBwYXJhbSBwMiBUaGUgZW5kIHBvaW50IHt4LHl9XG4gICAgICogQHJldHVybnMge2xpbmUsIG1pbiwgbWF4fVxuICAgICAqL1xuICAgIHN0YXRpYyBnZXRCYXJjb2RlTGluZShpbWFnZVdyYXBwZXI6IEltYWdlV3JhcHBlciwgcDE6IFBvaW50LCBwMjogUG9pbnQpOiBCYXJjb2RlTGluZSB7XG4gICAgICAgIGxldCB4MCA9IHAxLnggfCAwO1xuICAgICAgICBsZXQgeTAgPSBwMS55IHwgMDtcbiAgICAgICAgbGV0IHgxID0gcDIueCB8IDA7XG4gICAgICAgIGxldCB5MSA9IHAyLnkgfCAwO1xuICAgICAgICBjb25zdCBzdGVlcCA9IE1hdGguYWJzKHkxIC0geTApID4gTWF0aC5hYnMoeDEgLSB4MCk7XG4gICAgICAgIGxldCB0bXA6IG51bWJlcjtcbiAgICAgICAgY29uc3QgbGluZSA9IFtdO1xuICAgICAgICBjb25zdCBpbWFnZURhdGEgPSBpbWFnZVdyYXBwZXIuZGF0YTtcbiAgICAgICAgY29uc3Qgd2lkdGggPSBpbWFnZVdyYXBwZXIuc2l6ZS54O1xuICAgICAgICBsZXQgdmFsOiBudW1iZXI7XG4gICAgICAgIGxldCBtaW4gPSAyNTU7XG4gICAgICAgIGxldCBtYXggPSAwO1xuXG4gICAgICAgIGZ1bmN0aW9uIHJlYWQoYTogbnVtYmVyLCBiOiBudW1iZXIpIHtcbiAgICAgICAgICAgIHZhbCA9IGltYWdlRGF0YVtiICogd2lkdGggKyBhXTtcbiAgICAgICAgICAgIG1pbiA9IHZhbCA8IG1pbiA/IHZhbCA6IG1pbjtcbiAgICAgICAgICAgIG1heCA9IHZhbCA+IG1heCA/IHZhbCA6IG1heDtcbiAgICAgICAgICAgIGxpbmUucHVzaCh2YWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN0ZWVwKSB7XG4gICAgICAgICAgICB0bXAgPSB4MDtcbiAgICAgICAgICAgIHgwID0geTA7XG4gICAgICAgICAgICB5MCA9IHRtcDtcblxuICAgICAgICAgICAgdG1wID0geDE7XG4gICAgICAgICAgICB4MSA9IHkxO1xuICAgICAgICAgICAgeTEgPSB0bXA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHgwID4geDEpIHtcbiAgICAgICAgICAgIHRtcCA9IHgwO1xuICAgICAgICAgICAgeDAgPSB4MTtcbiAgICAgICAgICAgIHgxID0gdG1wO1xuXG4gICAgICAgICAgICB0bXAgPSB5MDtcbiAgICAgICAgICAgIHkwID0geTE7XG4gICAgICAgICAgICB5MSA9IHRtcDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBkZWx0YXggPSB4MSAtIHgwO1xuICAgICAgICBsZXQgZGVsdGF5ID0gTWF0aC5hYnMoeTEgLSB5MCk7XG4gICAgICAgIGxldCBlcnJvciA9IChkZWx0YXggLyAyKSB8IDA7XG4gICAgICAgIGxldCB5ID0geTA7XG4gICAgICAgIGxldCB5c3RlcCA9IHkwIDwgeTEgPyAxIDogLTE7XG5cbiAgICAgICAgZm9yIChsZXQgeCA9IHgwOyB4IDwgeDE7IHgrKykge1xuICAgICAgICAgICAgaWYgKHN0ZWVwKSB7XG4gICAgICAgICAgICAgICAgcmVhZCh5LCB4KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVhZCh4LCB5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVycm9yID0gZXJyb3IgLSBkZWx0YXk7XG4gICAgICAgICAgICBpZiAoZXJyb3IgPCAwKSB7XG4gICAgICAgICAgICAgICAgeSArPSB5c3RlcDtcbiAgICAgICAgICAgICAgICBlcnJvciA9IGVycm9yICsgZGVsdGF4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxpbmUsXG4gICAgICAgICAgICBtaW4sXG4gICAgICAgICAgICBtYXhcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyB0aGUgcmVzdWx0IGZyb20gZ2V0QmFyY29kZUxpbmUgaW50byBhIGJpbmFyeSByZXByZXNlbnRhdGlvblxuICAgICAqIGFsc28gY29uc2lkZXJpbmcgdGhlIGZyZXF1ZW5jeSBhbmQgc2xvcGUgb2YgdGhlIHNpZ25hbCBmb3IgbW9yZSByb2J1c3QgcmVzdWx0c1xuICAgICAqIEBwYXJhbSByZXN1bHQge2xpbmUsIG1pbiwgbWF4fVxuICAgICAqL1xuICAgIHN0YXRpYyB0b0JpbmFyeUxpbmUocmVzdWx0OiBCYXJjb2RlTGluZSk6IEJhcmNvZGVMaW5lIHtcbiAgICAgICAgY29uc3QgbWluID0gcmVzdWx0Lm1pbjtcbiAgICAgICAgY29uc3QgbWF4ID0gcmVzdWx0Lm1heDtcbiAgICAgICAgY29uc3QgbGluZSA9IHJlc3VsdC5saW5lO1xuICAgICAgICBjb25zdCBjZW50ZXIgPSBtaW4gKyAobWF4IC0gbWluKSAvIDI7XG4gICAgICAgIGNvbnN0IGV4dHJlbWEgPSBuZXcgQXJyYXk8eyBwb3M6IG51bWJlcjsgdmFsOiBudW1iZXI7IH0+KCk7XG4gICAgICAgIGxldCB0aHJlc2hvbGQgPSAobWF4IC0gbWluKSAvIDEyO1xuICAgICAgICBjb25zdCByVGhyZXNob2xkID0gLXRocmVzaG9sZDtcblxuICAgICAgICAvLyAxLiBmaW5kIGV4dHJlbWFcbiAgICAgICAgbGV0IGN1cnJlbnREaXIgPSBsaW5lWzBdID4gY2VudGVyID8gU2xvcGUuVXAgOiBTbG9wZS5Eb3duO1xuICAgICAgICBleHRyZW1hLnB1c2goe1xuICAgICAgICAgICAgcG9zOiAwLFxuICAgICAgICAgICAgdmFsOiBsaW5lWzBdXG4gICAgICAgIH0pO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmUubGVuZ3RoIC0gMjsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBzbG9wZSA9IChsaW5lW2kgKyAxXSAtIGxpbmVbaV0pO1xuICAgICAgICAgICAgY29uc3Qgc2xvcGUyID0gKGxpbmVbaSArIDJdIC0gbGluZVtpICsgMV0pO1xuICAgICAgICAgICAgbGV0IGRpcjogU2xvcGU7XG4gICAgICAgICAgICBpZiAoKHNsb3BlICsgc2xvcGUyKSA8IHJUaHJlc2hvbGQgJiYgbGluZVtpICsgMV0gPCAoY2VudGVyICogMS41KSkge1xuICAgICAgICAgICAgICAgIGRpciA9IFNsb3BlLkRvd247XG4gICAgICAgICAgICB9IGVsc2UgaWYgKChzbG9wZSArIHNsb3BlMikgPiB0aHJlc2hvbGQgJiYgbGluZVtpICsgMV0gPiAoY2VudGVyICogMC41KSkge1xuICAgICAgICAgICAgICAgIGRpciA9IFNsb3BlLlVwO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkaXIgPSBjdXJyZW50RGlyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY3VycmVudERpciAhPT0gZGlyKSB7XG4gICAgICAgICAgICAgICAgZXh0cmVtYS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgcG9zOiBpLFxuICAgICAgICAgICAgICAgICAgICB2YWw6IGxpbmVbaV1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjdXJyZW50RGlyID0gZGlyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGV4dHJlbWEucHVzaCh7XG4gICAgICAgICAgICBwb3M6IGxpbmUubGVuZ3RoLFxuICAgICAgICAgICAgdmFsOiBsaW5lW2xpbmUubGVuZ3RoIC0gMV1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgZm9yIChsZXQgaiA9IGV4dHJlbWFbMF0ucG9zOyBqIDwgZXh0cmVtYVsxXS5wb3M7IGorKykge1xuICAgICAgICAgICAgbGluZVtqXSA9IGxpbmVbal0gPiBjZW50ZXIgPyAwIDogMTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGl0ZXJhdGUgb3ZlciBleHRyZW1hIGFuZCBjb252ZXJ0IHRvIGJpbmFyeSBiYXNlZCBvbiBhdmcgYmV0d2VlbiBtaW5tYXhcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBleHRyZW1hLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICAgICAgaWYgKGV4dHJlbWFbaSArIDFdLnZhbCA+IGV4dHJlbWFbaV0udmFsKSB7XG4gICAgICAgICAgICAgICAgdGhyZXNob2xkID0gKGV4dHJlbWFbaV0udmFsICsgKChleHRyZW1hW2kgKyAxXS52YWwgLSBleHRyZW1hW2ldLnZhbCkgLyAzKSAqIDIpIHwgMDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyZXNob2xkID0gKGV4dHJlbWFbaSArIDFdLnZhbCArICgoZXh0cmVtYVtpXS52YWwgLSBleHRyZW1hW2kgKyAxXS52YWwpIC8gMykpIHwgMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IGV4dHJlbWFbaV0ucG9zOyBqIDwgZXh0cmVtYVtpICsgMV0ucG9zOyBqKyspIHtcbiAgICAgICAgICAgICAgICBsaW5lW2pdID0gbGluZVtqXSA+IHRocmVzaG9sZCA/IDAgOiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnJlc3VsdCxcbiAgICAgICAgICAgIHRocmVzaG9sZFxuICAgICAgICB9O1xuICAgIH07XG59XG4iLCJpbXBvcnQgeyBnZXRVc2VyTWVkaWEsIGVudW1lcmF0ZURldmljZXMgfSBmcm9tICcuLi9jb21tb24vbWVkaWEtZGV2aWNlcyc7XG5cbmxldCBfc3RyZWFtOiBNZWRpYVN0cmVhbTtcblxuZXhwb3J0IGNvbnN0IENhbWVyYUFjY2VzcyA9IHtcbiAgICAvKipcbiAgICAgKiBBdHRlbXB0cyB0byBhdHRhY2ggdGhlIGNhbWVyYS1zdHJlYW0gdG8gYSBnaXZlbiB2aWRlbyBlbGVtZW50XG4gICAgICogYW5kIGNhbGxzIHRoZSBjYWxsYmFjayBmdW5jdGlvbiB3aGVuIHRoZSBjb250ZW50IGlzIHJlYWR5XG4gICAgICogQHBhcmFtIHZpZGVvXG4gICAgICogQHBhcmFtIHZpZGVvQ29uc3RyYWludHNcbiAgICAgKi9cbiAgICBhc3luYyByZXF1ZXN0KHZpZGVvOiBIVE1MVmlkZW9FbGVtZW50LCB2aWRlb0NvbnN0cmFpbnRzOiBNZWRpYVRyYWNrQ29uc3RyYWludHMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZENvbnN0cmFpbnRzID0gQ2FtZXJhQWNjZXNzLnBpY2tDb25zdHJhaW50cyh2aWRlb0NvbnN0cmFpbnRzKTtcbiAgICAgICAgX3N0cmVhbSA9IGF3YWl0IGdldFVzZXJNZWRpYShub3JtYWxpemVkQ29uc3RyYWludHMpO1xuICAgICAgICB2aWRlby5zcmNPYmplY3QgPSBfc3RyZWFtO1xuICAgICAgICB2aWRlby5zZXRBdHRyaWJ1dGUoJ2F1dG9wbGF5JywgJycpO1xuICAgICAgICB2aWRlby5zZXRBdHRyaWJ1dGUoJ211dGVkJywgJycpO1xuICAgICAgICB2aWRlby5zZXRBdHRyaWJ1dGUoJ3BsYXlzaW5saW5lJywgJycpO1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWRlZG1ldGFkYXRhJywgKCkgPT4ge1xuICAgICAgICAgICAgdmlkZW8ucGxheSgpO1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9KSkudGhlbihfd2FpdEZvclZpZGVvLmJpbmQobnVsbCwgdmlkZW8pKTtcbiAgICB9LFxuXG4gICAgcmVsZWFzZSgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgdHJhY2tzID0gX3N0cmVhbSAmJiBfc3RyZWFtLmdldFZpZGVvVHJhY2tzKCk7XG4gICAgICAgIGlmICh0cmFja3MgJiYgdHJhY2tzLmxlbmd0aCkge1xuICAgICAgICAgICAgdHJhY2tzWzBdLnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgICBfc3RyZWFtID0gbnVsbDtcbiAgICB9LFxuXG4gICAgYXN5bmMgZW51bWVyYXRlVmlkZW9EZXZpY2VzKCk6IFByb21pc2U8QXJyYXk8TWVkaWFEZXZpY2VJbmZvPj4ge1xuICAgICAgICBjb25zdCBkZXZpY2VzID0gYXdhaXQgZW51bWVyYXRlRGV2aWNlcygpO1xuICAgICAgICByZXR1cm4gZGV2aWNlcy5maWx0ZXIoKHsga2luZCB9KSA9PiBraW5kID09PSAndmlkZW9pbnB1dCcpO1xuICAgIH0sXG5cbiAgICBnZXRBY3RpdmVTdHJlYW1MYWJlbCgpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCB0cmFjayA9IENhbWVyYUFjY2Vzcy5nZXRBY3RpdmVUcmFjaygpO1xuICAgICAgICByZXR1cm4gdHJhY2sgPyB0cmFjay5sYWJlbCA6ICcnO1xuICAgIH0sXG5cbiAgICBnZXRBY3RpdmVUcmFjaygpIHtcbiAgICAgICAgY29uc3QgdHJhY2tzID0gX3N0cmVhbSAmJiBfc3RyZWFtLmdldFZpZGVvVHJhY2tzKCk7XG4gICAgICAgIGlmICh0cmFja3MgJiYgdHJhY2tzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHRyYWNrc1swXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH0sXG5cbiAgICBwaWNrQ29uc3RyYWludHModmlkZW9Db25zdHJhaW50czogTWVkaWFUcmFja0NvbnN0cmFpbnRzKTogTWVkaWFTdHJlYW1Db25zdHJhaW50cyB7XG4gICAgICAgIGxldCB7IHdpZHRoLCBoZWlnaHQsIGZhY2luZ01vZGUsIGFzcGVjdFJhdGlvLCBkZXZpY2VJZCB9ID0gdmlkZW9Db25zdHJhaW50cztcbiAgICAgICAgY29uc3QgeyBtaW5Bc3BlY3RSYXRpbywgZmFjaW5nIH0gPSB2aWRlb0NvbnN0cmFpbnRzIGFzIGFueTtcblxuICAgICAgICBpZiAodHlwZW9mIG1pbkFzcGVjdFJhdGlvICE9PSAndW5kZWZpbmVkJyAmJiBtaW5Bc3BlY3RSYXRpbyA+IDApIHtcbiAgICAgICAgICAgIGFzcGVjdFJhdGlvID0gbWluQXNwZWN0UmF0aW87XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgV0FSTklORzogQ29uc3RyYWludCAnbWluQXNwZWN0UmF0aW8nIGlzIGRlcHJlY2F0ZWQ7IFVzZSAnYXNwZWN0UmF0aW8nIGluc3RlYWRgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgZmFjaW5nICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgZmFjaW5nTW9kZSA9IGZhY2luZztcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBXQVJOSU5HOiBDb25zdHJhaW50ICdmYWNpbmcnIGlzIGRlcHJlY2F0ZWQuIFVzZSAnZmFjaW5nTW9kZScgaW5zdGVhZCdgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRDb25zdHJhaW50cyA9IGRldmljZUlkICYmIGZhY2luZ01vZGUgP1xuICAgICAgICAgICAgeyB3aWR0aCwgaGVpZ2h0LCBhc3BlY3RSYXRpbywgZGV2aWNlSWQgfSA6IHsgd2lkdGgsIGhlaWdodCwgZmFjaW5nTW9kZSwgYXNwZWN0UmF0aW8sIGRldmljZUlkIH07XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGF1ZGlvOiBmYWxzZSxcbiAgICAgICAgICAgIHZpZGVvOiBub3JtYWxpemVkQ29uc3RyYWludHNcbiAgICAgICAgfTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIF93YWl0Rm9yVmlkZW8oeyB2aWRlb1dpZHRoLCB2aWRlb0hlaWdodCB9KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgbGV0IGF0dGVtcHRzID0gMTA7XG5cbiAgICAgICAgZnVuY3Rpb24gY2hlY2tWaWRlbygpIHtcbiAgICAgICAgICAgIGlmIChhdHRlbXB0cyA+IDApIHtcbiAgICAgICAgICAgICAgICBpZiAodmlkZW9XaWR0aCA+IDEwICYmIHZpZGVvSGVpZ2h0ID4gMTApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3ZpZGVvV2lkdGh9cHggeCAke3ZpZGVvSGVpZ2h0fXB4YCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGNoZWNrVmlkZW8sIDUwMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZWplY3QoJ1VuYWJsZSB0byBwbGF5IHZpZGVvIHN0cmVhbS4gSXMgd2ViY2FtIHdvcmtpbmc/Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhdHRlbXB0cy0tO1xuICAgICAgICB9XG4gICAgICAgIGNoZWNrVmlkZW8oKTtcbiAgICB9KTtcbn1cbiIsIi8qKlxuICogQGJvcnJvd3MgaHR0cHM6Ly9naXRodWIuY29tL2V4aWYtanMvZXhpZi1qc1xuICovXG5cbmNvbnN0IEV4aWZUYWdzID0geyAweDAxMTI6ICdvcmllbnRhdGlvbicgfTtcbmV4cG9ydCBjb25zdCBBdmFpbGFibGVUYWdzOiBBcnJheTxzdHJpbmc+ID0gT2JqZWN0LmtleXMoRXhpZlRhZ3MpLm1hcChrZXkgPT4gRXhpZlRhZ3Nba2V5XSk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGFncyB7XG4gICAgW2tleTogc3RyaW5nXTogbnVtYmVyIHwgc3RyaW5nO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmluZFRhZ3NJbk9iamVjdFVSTChzcmM6IHN0cmluZywgdGFncyA9IEF2YWlsYWJsZVRhZ3MpOiBQcm9taXNlPFRhZ3M+IHtcbiAgICBpZiAoL15ibG9iOi9pLnRlc3Qoc3JjKSkge1xuICAgICAgICBjb25zdCBidWZmZXIgPSBhd2FpdCBvYmplY3RVUkxUb0Jsb2Ioc3JjKTtcbiAgICAgICAgcmV0dXJuIGZpbmRUYWdzSW5CdWZmZXIoYnVmZmVyLCB0YWdzKTtcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShudWxsKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRUYWdzSW5CdWZmZXIoZmlsZTogQXJyYXlCdWZmZXIsIHNlbGVjdGVkVGFnczogQXJyYXk8c3RyaW5nPiA9IEF2YWlsYWJsZVRhZ3MpOiBUYWdzIHtcbiAgICBjb25zdCBkYXRhVmlldyA9IG5ldyBEYXRhVmlldyhmaWxlKTtcbiAgICBjb25zdCBsZW5ndGggPSBmaWxlLmJ5dGVMZW5ndGg7XG4gICAgY29uc3QgZXhpZlRhZ3MgPSBzZWxlY3RlZFRhZ3MucmVkdWNlKChyZXN1bHQsIHNlbGVjdGVkVGFnKSA9PiB7XG4gICAgICAgIGNvbnN0IGV4aWZUYWcgPSBPYmplY3Qua2V5cyhFeGlmVGFncykuZmluZCh0YWcgPT4gRXhpZlRhZ3NbdGFnXSA9PT0gc2VsZWN0ZWRUYWcpO1xuICAgICAgICBpZiAoZXhpZlRhZykge1xuICAgICAgICAgICAgcmVzdWx0W2V4aWZUYWddID0gc2VsZWN0ZWRUYWc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9LCB7fSk7XG4gICAgbGV0IG9mZnNldCA9IDI7XG5cbiAgICBpZiAoKGRhdGFWaWV3LmdldFVpbnQ4KDApICE9PSAweEZGKSB8fCAoZGF0YVZpZXcuZ2V0VWludDgoMSkgIT09IDB4RDgpKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHdoaWxlIChvZmZzZXQgPCBsZW5ndGgpIHtcbiAgICAgICAgaWYgKGRhdGFWaWV3LmdldFVpbnQ4KG9mZnNldCkgIT09IDB4RkYpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbWFya2VyID0gZGF0YVZpZXcuZ2V0VWludDgob2Zmc2V0ICsgMSk7XG4gICAgICAgIGlmIChtYXJrZXIgPT09IDB4RTEpIHtcbiAgICAgICAgICAgIHJldHVybiByZWFkRVhJRkRhdGEoZGF0YVZpZXcsIG9mZnNldCArIDQsIGV4aWZUYWdzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9mZnNldCArPSAyICsgZGF0YVZpZXcuZ2V0VWludDE2KG9mZnNldCArIDIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIG9iamVjdFVSTFRvQmxvYih1cmw6IHN0cmluZyk6IFByb21pc2U8QXJyYXlCdWZmZXI+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5hcnJheUJ1ZmZlcigpO1xuICAgIH1cblxuICAgIHRocm93IG5ldyBFcnJvcignSFRUUCBFcnJvciAnICsgcmVzcG9uc2Uuc3RhdHVzKTtcbn1cblxuZnVuY3Rpb24gcmVhZEVYSUZEYXRhKGRhdGFWaWV3OiBEYXRhVmlldywgc3RhcnQ6IG51bWJlciwgZXhpZlRhZ3M6IHsgW2tleTogbnVtYmVyXTogc3RyaW5nIH0pOiBUYWdzIHtcbiAgICBpZiAoJ0V4aWYnLnNwbGl0KCcnKS5zb21lKChjaGFyLCBpbmRleCkgPT4gZGF0YVZpZXcuZ2V0VWludDgoc3RhcnQgKyBpbmRleCkgIT09IGNoYXIuY2hhckNvZGVBdCgwKSkpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgdGlmZk9mZnNldCA9IHN0YXJ0ICsgNjtcbiAgICBsZXQgYmlnRW5kOiBib29sZWFuO1xuXG4gICAgaWYgKGRhdGFWaWV3LmdldFVpbnQxNih0aWZmT2Zmc2V0KSA9PT0gMHg0OTQ5KSB7XG4gICAgICAgIGJpZ0VuZCA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoZGF0YVZpZXcuZ2V0VWludDE2KHRpZmZPZmZzZXQpID09PSAweDRENEQpIHtcbiAgICAgICAgYmlnRW5kID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoZGF0YVZpZXcuZ2V0VWludDE2KHRpZmZPZmZzZXQgKyAyLCAhYmlnRW5kKSAhPT0gMHgwMDJBKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGZpcnN0SUZET2Zmc2V0ID0gZGF0YVZpZXcuZ2V0VWludDMyKHRpZmZPZmZzZXQgKyA0LCAhYmlnRW5kKTtcbiAgICBpZiAoZmlyc3RJRkRPZmZzZXQgPCAweDAwMDAwMDA4KSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHRhZ3MgPSByZWFkVGFncyhkYXRhVmlldywgdGlmZk9mZnNldCArIGZpcnN0SUZET2Zmc2V0LCBleGlmVGFncywgYmlnRW5kKTtcbiAgICByZXR1cm4gdGFncztcbn1cblxuZnVuY3Rpb24gcmVhZFRhZ3MoZGF0YVZpZXc6IERhdGFWaWV3LCBkaXJTdGFydDogbnVtYmVyLCBzdHJpbmdzOiB7IFtrZXk6IG51bWJlcl06IHN0cmluZyB9LCBiaWdFbmQ6IGJvb2xlYW4pOiBUYWdzIHtcbiAgICBjb25zdCBlbnRyaWVzID0gZGF0YVZpZXcuZ2V0VWludDE2KGRpclN0YXJ0LCAhYmlnRW5kKTtcbiAgICBjb25zdCB0YWdzOiBUYWdzID0ge307XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVudHJpZXM7IGkrKykge1xuICAgICAgICBjb25zdCBlbnRyeU9mZnNldCA9IGRpclN0YXJ0ICsgaSAqIDEyICsgMjtcbiAgICAgICAgY29uc3QgdGFnID0gc3RyaW5nc1tkYXRhVmlldy5nZXRVaW50MTYoZW50cnlPZmZzZXQsICFiaWdFbmQpXTtcbiAgICAgICAgaWYgKHRhZykge1xuICAgICAgICAgICAgdGFnc1t0YWddID0gcmVhZFRhZ1ZhbHVlKGRhdGFWaWV3LCBlbnRyeU9mZnNldCwgYmlnRW5kKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YWdzO1xufVxuXG5mdW5jdGlvbiByZWFkVGFnVmFsdWUoZGF0YVZpZXc6IERhdGFWaWV3LCBlbnRyeU9mZnNldDogbnVtYmVyLCBiaWdFbmQ6IGJvb2xlYW4pOiBudW1iZXIgfCBzdHJpbmcge1xuICAgIGNvbnN0IHR5cGUgPSBkYXRhVmlldy5nZXRVaW50MTYoZW50cnlPZmZzZXQgKyAyLCAhYmlnRW5kKTtcbiAgICBjb25zdCBudW1WYWx1ZXMgPSBkYXRhVmlldy5nZXRVaW50MzIoZW50cnlPZmZzZXQgKyA0LCAhYmlnRW5kKTtcblxuICAgIHJldHVybiB0eXBlID09PSAzICYmIG51bVZhbHVlcyA9PT0gMSA/IGRhdGFWaWV3LmdldFVpbnQxNihlbnRyeU9mZnNldCArIDgsICFiaWdFbmQpIDogdW5kZWZpbmVkO1xufVxuIiwiaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuLi9jb21tb24vcG9pbnQnO1xuaW1wb3J0IHsgSW5wdXRTdHJlYW0gfSBmcm9tICcuL2lucHV0LXN0cmVhbSc7XG5pbXBvcnQgeyBJbnB1dFN0cmVhbUNvbmZpZyB9IGZyb20gJy4vaW5wdXQtc3RyZWFtLWNvbmZpZyc7XG5cbmNvbnN0IFFVQVRFUl9DSVJDTEUgPSBNYXRoLlBJIC8gMjtcblxuZXhwb3J0IGNsYXNzIEZyYW1lR3JhYmJlciB7XG4gICAgcHJpdmF0ZSBfaW5wdXRTdHJlYW06IElucHV0U3RyZWFtO1xuICAgIHByaXZhdGUgX3N0cmVhbUNvbmZpZzogSW5wdXRTdHJlYW1Db25maWc7XG4gICAgcHJpdmF0ZSBfY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICBwcml2YXRlIF9jb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4gICAgcHJpdmF0ZSBfZGF0YTogVWludDhBcnJheTtcbiAgICBwcml2YXRlIF9jYW52YXNIZWlnaHQ6IG51bWJlcjtcbiAgICBwcml2YXRlIF9jYW52YXNXaWR0aDogbnVtYmVyO1xuICAgIHByaXZhdGUgX2hlaWdodDogbnVtYmVyO1xuICAgIHByaXZhdGUgX3dpZHRoOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfdG9wTGVmdDogUG9pbnQ7XG5cbiAgICBjb25zdHJ1Y3RvcihpbnB1dFN0cmVhbTogSW5wdXRTdHJlYW0sIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5faW5wdXRTdHJlYW0gPSBpbnB1dFN0cmVhbTtcbiAgICAgICAgdGhpcy5fc3RyZWFtQ29uZmlnID0gaW5wdXRTdHJlYW0uY29uZmlnO1xuICAgICAgICB0aGlzLl9jYW52YXNXaWR0aCA9IGlucHV0U3RyZWFtLmNhbnZhc1dpZHRoO1xuICAgICAgICB0aGlzLl9jYW52YXNIZWlnaHQgPSBpbnB1dFN0cmVhbS5jYW52YXNIZWlnaHQ7XG4gICAgICAgIHRoaXMuX3dpZHRoID0gaW5wdXRTdHJlYW0ud2lkdGg7XG4gICAgICAgIHRoaXMuX2hlaWdodCA9IGlucHV0U3RyZWFtLmhlaWdodDtcbiAgICAgICAgdGhpcy5fdG9wTGVmdCA9IGlucHV0U3RyZWFtLnRvcExlZnQ7XG4gICAgICAgIHRoaXMuX2NhbnZhcyA9IGNhbnZhcyB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgdGhpcy5fY2FudmFzLndpZHRoID0gdGhpcy5fY2FudmFzV2lkdGg7XG4gICAgICAgIHRoaXMuX2NhbnZhcy5oZWlnaHQgPSB0aGlzLl9jYW52YXNIZWlnaHQ7XG4gICAgICAgIHRoaXMuX2NvbnRleHQgPSB0aGlzLl9jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgdGhpcy5fZGF0YSA9IG5ldyBVaW50OEFycmF5KHRoaXMuX3dpZHRoICogdGhpcy5faGVpZ2h0KTtcblxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0ZyYW1lR3JhYmJlcicsIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBzaXplOiB7XG4gICAgICAgICAgICAgICAgICAgIHg6IHRoaXMuX3dpZHRoLFxuICAgICAgICAgICAgICAgICAgICB5OiB0aGlzLl9oZWlnaHRcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRvcExlZnQ6IHRoaXMuX3RvcExlZnQsXG4gICAgICAgICAgICAgICAgdmlkZW9TaXplOiB7XG4gICAgICAgICAgICAgICAgICAgIHg6IGlucHV0U3RyZWFtLnJlYWxXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgeTogaW5wdXRTdHJlYW0ucmVhbEhlaWdodFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY2FudmFzU2l6ZToge1xuICAgICAgICAgICAgICAgICAgICB4OiB0aGlzLl9jYW52YXNXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgeTogdGhpcy5fY2FudmFzSGVpZ2h0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXNlcyB0aGUgZ2l2ZW4gYXJyYXkgYXMgZnJhbWUtYnVmZmVyXG4gICAgICovXG4gICAgYXR0YWNoRGF0YShkYXRhOiBVaW50OEFycmF5KTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZldGNoZXMgYSBmcmFtZSBmcm9tIHRoZSBpbnB1dC1zdHJlYW0gYW5kIHB1dHMgaW50byB0aGUgZnJhbWUtYnVmZmVyLlxuICAgICAqIFRoZSBpbWFnZS1kYXRhIGlzIGNvbnZlcnRlZCB0byBncmF5LXNjYWxlIGFuZCB0aGVuIGhhbGYtc2FtcGxlZCBpZiBjb25maWd1cmVkLlxuICAgICAqL1xuICAgIGdyYWIoKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IGZyYW1lID0gdGhpcy5faW5wdXRTdHJlYW0uZ2V0RnJhbWUoKTtcblxuICAgICAgICBpZiAoZnJhbWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2FkanVzdENhbnZhc1NpemUoKTtcblxuICAgICAgICAgICAgbGV0IGRyYXdhYmxlOiBIVE1MSW1hZ2VFbGVtZW50IHwgSFRNTFZpZGVvRWxlbWVudDtcbiAgICAgICAgICAgIGxldCBkcmF3QW5nbGUgPSAwO1xuXG4gICAgICAgICAgICBpZiAoZnJhbWUgaW5zdGFuY2VvZiBIVE1MVmlkZW9FbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgZHJhd2FibGUgPSBmcmFtZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZHJhd2FibGUgPSBmcmFtZS5pbWFnZTtcblxuICAgICAgICAgICAgICAgIGlmIChmcmFtZS50YWdzKSB7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoZnJhbWUudGFncy5vcmllbnRhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA2OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJhd0FuZ2xlID0gUVVBVEVSX0NJUkNMRTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgODoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyYXdBbmdsZSA9IC1RVUFURVJfQ0lSQ0xFO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZHJhd0FuZ2xlICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaGFsZldpZHRoID0gdGhpcy5fY2FudmFzV2lkdGggPj4gMTtcbiAgICAgICAgICAgICAgICBjb25zdCBoYWxmSGVpZ2h0ID0gdGhpcy5fY2FudmFzSGVpZ2h0ID4+IDE7XG5cbiAgICAgICAgICAgICAgICB0aGlzLl9jb250ZXh0LnRyYW5zbGF0ZShoYWxmV2lkdGgsIGhhbGZIZWlnaHQpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2NvbnRleHQucm90YXRlKGRyYXdBbmdsZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fY29udGV4dC5kcmF3SW1hZ2UoZHJhd2FibGUsIC1oYWxmSGVpZ2h0LCAtaGFsZldpZHRoLCB0aGlzLl9jYW52YXNIZWlnaHQsIHRoaXMuX2NhbnZhc1dpZHRoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9jb250ZXh0LnJvdGF0ZSgtZHJhd0FuZ2xlKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9jb250ZXh0LnRyYW5zbGF0ZSgtaGFsZldpZHRoLCAtaGFsZkhlaWdodCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NvbnRleHQuZHJhd0ltYWdlKGRyYXdhYmxlLCAwLCAwLCB0aGlzLl9jYW52YXNXaWR0aCwgdGhpcy5fY2FudmFzSGVpZ2h0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgaW1hZ2VEYXRhID0gdGhpcy5fY29udGV4dC5nZXRJbWFnZURhdGEodGhpcy5fdG9wTGVmdC54LCB0aGlzLl90b3BMZWZ0LnksIHRoaXMuX3dpZHRoLCB0aGlzLl9oZWlnaHQpLmRhdGE7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLl9zdHJlYW1Db25maWcuaGFsZlNhbXBsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2dyYXlBbmRIYWxmU2FtcGxlRnJvbUNhbnZhc0RhdGEoaW1hZ2VEYXRhKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY29tcHV0ZUdyYXkoaW1hZ2VEYXRhKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9hZGp1c3RDYW52YXNTaXplKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5fY2FudmFzLmhlaWdodCAhPT0gdGhpcy5fY2FudmFzSGVpZ2h0IHx8IHRoaXMuX2NhbnZhcy53aWR0aCAhPT0gdGhpcy5fY2FudmFzV2lkdGgpIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdDYW52YXMgc2l6ZSBuZWVkcyB0byBiZSBhZGp1c3RlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fY2FudmFzLmhlaWdodCA9IHRoaXMuX2NhbnZhc0hlaWdodDtcbiAgICAgICAgICAgIHRoaXMuX2NhbnZhcy53aWR0aCA9IHRoaXMuX2NhbnZhc1dpZHRoO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZ3JheUFuZEhhbGZTYW1wbGVGcm9tQ2FudmFzRGF0YShpbWFnZURhdGE6IFVpbnQ4Q2xhbXBlZEFycmF5KTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGVuZEluZGV4ID0gaW1hZ2VEYXRhLmxlbmd0aCA+PiAyO1xuICAgICAgICBjb25zdCBvdXRXaWR0aCA9IHRoaXMuX3dpZHRoID4+IDE7XG4gICAgICAgIGxldCB0b3BSb3dJbmRleCA9IDA7XG4gICAgICAgIGxldCBib3R0b21Sb3dJbmRleCA9IHRoaXMuX3dpZHRoO1xuICAgICAgICBsZXQgb3V0SW1hZ2VJbmRleCA9IDA7XG5cbiAgICAgICAgd2hpbGUgKGJvdHRvbVJvd0luZGV4IDwgZW5kSW5kZXgpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3V0V2lkdGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvcDQgPSB0b3BSb3dJbmRleCA8PCAyO1xuICAgICAgICAgICAgICAgIGNvbnN0IGJvdHRvbTQgPSBib3R0b21Sb3dJbmRleCA8PCAyO1xuICAgICAgICAgICAgICAgIHRoaXMuX2RhdGFbb3V0SW1hZ2VJbmRleF0gPSAoXG4gICAgICAgICAgICAgICAgICAgICgwLjI5OSAqIGltYWdlRGF0YVt0b3A0ICsgMF0gKyAwLjU4NyAqIGltYWdlRGF0YVt0b3A0ICsgMV0gKyAwLjExNCAqIGltYWdlRGF0YVt0b3A0ICsgMl0pICtcbiAgICAgICAgICAgICAgICAgICAgKDAuMjk5ICogaW1hZ2VEYXRhW3RvcDQgKyA0XSArIDAuNTg3ICogaW1hZ2VEYXRhW3RvcDQgKyA1XSArIDAuMTE0ICogaW1hZ2VEYXRhW3RvcDQgKyA2XSkgK1xuICAgICAgICAgICAgICAgICAgICAoMC4yOTkgKiBpbWFnZURhdGFbYm90dG9tNCArIDBdICsgMC41ODcgKiBpbWFnZURhdGFbYm90dG9tNCArIDFdICsgMC4xMTQgKiBpbWFnZURhdGFbYm90dG9tNCArIDJdKSArXG4gICAgICAgICAgICAgICAgICAgICgwLjI5OSAqIGltYWdlRGF0YVtib3R0b200ICsgNF0gKyAwLjU4NyAqIGltYWdlRGF0YVtib3R0b200ICsgNV0gKyAwLjExNCAqIGltYWdlRGF0YVtib3R0b200ICsgNl0pXG4gICAgICAgICAgICAgICAgKSAvIDQgfCAwO1xuICAgICAgICAgICAgICAgIG91dEltYWdlSW5kZXgrKztcbiAgICAgICAgICAgICAgICB0b3BSb3dJbmRleCArPSAyO1xuICAgICAgICAgICAgICAgIGJvdHRvbVJvd0luZGV4ICs9IDI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0b3BSb3dJbmRleCArPSB0aGlzLl93aWR0aDtcbiAgICAgICAgICAgIGJvdHRvbVJvd0luZGV4ICs9IHRoaXMuX3dpZHRoO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfY29tcHV0ZUdyYXkoaW1hZ2VEYXRhOiBVaW50OENsYW1wZWRBcnJheSk6IHZvaWQge1xuICAgICAgICBjb25zdCBpbWFnZURhdGFMZW5ndGggPSBpbWFnZURhdGEubGVuZ3RoO1xuXG4gICAgICAgIGlmICh0aGlzLl9zdHJlYW1Db25maWcgJiYgdGhpcy5fc3RyZWFtQ29uZmlnLnNpbmdsZUNoYW5uZWwpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBqID0gMDsgaSA8IGltYWdlRGF0YUxlbmd0aDsgaSArPSA0LCBqKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9kYXRhW2pdID0gaW1hZ2VEYXRhW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGogPSAwOyBpIDwgaW1hZ2VEYXRhTGVuZ3RoOyBpICs9IDQsIGorKykge1xuICAgICAgICAgICAgICAgIHRoaXMuX2RhdGFbal0gPSAwLjI5OSAqIGltYWdlRGF0YVtpXSArIDAuNTg3ICogaW1hZ2VEYXRhW2kgKyAxXSArIDAuMTE0ICogaW1hZ2VEYXRhW2kgKyAyXSB8IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBmaW5kVGFnc0luT2JqZWN0VVJMLCBUYWdzIH0gZnJvbSAnLi9leGlmLWhlbHBlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW1hZ2VJbmZvIHtcbiAgICBpbWFnZTogSFRNTEltYWdlRWxlbWVudDtcbiAgICB0YWdzPzogVGFncztcbn1cblxuZXhwb3J0IGNsYXNzIEltYWdlTG9hZGVyIHtcbiAgICBzdGF0aWMgYXN5bmMgbG9hZChcbiAgICAgICAgYmFzZVVyaTogc3RyaW5nLFxuICAgICAgICBjYWxsYmFjazogKF86IEFycmF5PEltYWdlSW5mbz4pID0+IHZvaWQsXG4gICAgICAgIG9mZnNldDogbnVtYmVyLFxuICAgICAgICBzaXplOiBudW1iZXIsXG4gICAgICAgIHNlcXVlbmNlOiBib29sZWFuXG4gICAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGNvbnN0IGltYWdlU3JjcyA9IG5ldyBBcnJheTxzdHJpbmc+KHNpemUpO1xuICAgICAgICBjb25zdCBsb2FkZWRJbWFnZXMgPSBuZXcgQXJyYXk8SW1hZ2VJbmZvPihzaXplKTtcbiAgICAgICAgY29uc3Qgbm90TG9hZGVkSW1hZ2VzID0gbmV3IEFycmF5PEhUTUxJbWFnZUVsZW1lbnQ+KCk7XG5cbiAgICAgICAgaWYgKHNlcXVlbmNlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgaW1hZ2VTcmNzWzBdID0gYmFzZVVyaTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaW1hZ2VTcmNzW2ldID0gYCR7YmFzZVVyaX1pbWFnZS0keygnMDAnICsgKG9mZnNldCArIGkpKS5zbGljZSgtMyl9LmpwZ2A7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpbWFnZVNyY3MuZm9yRWFjaChzcmMgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIG5vdExvYWRlZEltYWdlcy5wdXNoKGltYWdlKTtcbiAgICAgICAgICAgIGltYWdlLm9ubG9hZCA9ICgpID0+IGxvYWRlZChpbWFnZSk7XG4gICAgICAgICAgICBpbWFnZS5zcmMgPSBzcmM7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGxvYWRlZChsb2FkZWRJbWFnZTogSFRNTEltYWdlRWxlbWVudCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBub3RMb2FkZWRJbWFnZXMubGVuZ3RoOyB4KyspIHtcbiAgICAgICAgICAgICAgICBpZiAobm90TG9hZGVkSW1hZ2VzW3hdID09PSBsb2FkZWRJbWFnZSkge1xuICAgICAgICAgICAgICAgICAgICBub3RMb2FkZWRJbWFnZXMuc3BsaWNlKHgsIDEpO1xuICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBhc3N1bWUgdGhlIGluZGV4IGlzIHRoZSBzYW1lXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgaW1hZ2VTcmNzLmxlbmd0aDsgeSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbWFnZU5hbWUgPSBpbWFnZVNyY3NbeV0uc3Vic3RyKGltYWdlU3Jjc1t5XS5sYXN0SW5kZXhPZignLycpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsb2FkZWRJbWFnZS5zcmMubGFzdEluZGV4T2YoaW1hZ2VOYW1lKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkZWRJbWFnZXNbeV0gPSB7IGltYWdlOiBsb2FkZWRJbWFnZSB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChub3RMb2FkZWRJbWFnZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0ltYWdlcyBsb2FkZWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlcXVlbmNlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlyc3RJbWFnZSA9IGxvYWRlZEltYWdlc1swXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0SW1hZ2UudGFncyA9IGF3YWl0IGZpbmRUYWdzSW5PYmplY3RVUkwoYmFzZVVyaSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhleCk7XG4gICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sobG9hZGVkSW1hZ2VzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBJbWFnZUluZm8sIEltYWdlTG9hZGVyIH0gZnJvbSAnLi9pbWFnZS1sb2FkZXInO1xuaW1wb3J0IHsgSW5wdXRTdHJlYW0gfSBmcm9tICcuL2lucHV0LXN0cmVhbSc7XG5pbXBvcnQgeyBJbnB1dFN0cmVhbUNvbmZpZyB9IGZyb20gJy4vaW5wdXQtc3RyZWFtLWNvbmZpZyc7XG5cbmV4cG9ydCBjbGFzcyBJbWFnZVN0cmVhbSBleHRlbmRzIElucHV0U3RyZWFtIHtcbiAgICBwcml2YXRlIF9iYXNlVXJsOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfZW5kZWQ6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBfZnJhbWVJbmRleDogbnVtYmVyO1xuICAgIHByaXZhdGUgX2hlaWdodDogbnVtYmVyO1xuICAgIHByaXZhdGUgX2ltYWdlczogQXJyYXk8SW1hZ2VJbmZvPjtcbiAgICBwcml2YXRlIF9sb2FkZWQ6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBfb2Zmc2V0OiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfcGF1c2VkOiBib29sZWFuO1xuICAgIHByaXZhdGUgX3NpemU6IG51bWJlcjtcbiAgICBwcml2YXRlIF93aWR0aDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5fY2FudmFzSGVpZ2h0ID0gMDtcbiAgICAgICAgdGhpcy5fY2FudmFzV2lkdGggPSAwO1xuICAgICAgICB0aGlzLl9iYXNlVXJsID0gbnVsbDtcbiAgICAgICAgdGhpcy5fZW5kZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fZnJhbWVJbmRleCA9IDA7XG4gICAgICAgIHRoaXMuX2hlaWdodCA9IDA7XG4gICAgICAgIHRoaXMuX2ltYWdlcyA9IG51bGw7XG4gICAgICAgIHRoaXMuX2xvYWRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9vZmZzZXQgPSAxO1xuICAgICAgICB0aGlzLl9wYXVzZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLl9zaXplID0gMDtcbiAgICAgICAgdGhpcy5fd2lkdGggPSAwO1xuICAgIH1cblxuICAgIGdldCByZWFsSGVpZ2h0KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9oZWlnaHQ7XG4gICAgfVxuXG4gICAgZ2V0IHJlYWxXaWR0aCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fd2lkdGg7XG4gICAgfVxuXG4gICAgZ2V0IGNvbmZpZygpOiBJbnB1dFN0cmVhbUNvbmZpZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb25maWc7XG4gICAgfVxuXG4gICAgc2V0IGNvbmZpZyhjb25maWc6IElucHV0U3RyZWFtQ29uZmlnKSB7XG4gICAgICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcblxuICAgICAgICBpZiAoY29uZmlnLnNlcXVlbmNlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5fYmFzZVVybCA9IGNvbmZpZy5zcmM7XG4gICAgICAgICAgICB0aGlzLl9zaXplID0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2Jhc2VVcmwgPSBjb25maWcuc3JjO1xuICAgICAgICAgICAgdGhpcy5fc2l6ZSA9IGNvbmZpZy5sZW5ndGg7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9sb2FkSW1hZ2VzKCk7XG4gICAgfVxuXG4gICAgZ2V0IGVuZGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZW5kZWQ7XG4gICAgfVxuXG4gICAgc2V0QXR0cmlidXRlKCkgeyB9XG5cbiAgICBwYXVzZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fcGF1c2VkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwbGF5KCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9wYXVzZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBzZXQgY3VycmVudFRpbWUodGltZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX2ZyYW1lSW5kZXggPSB0aW1lO1xuICAgIH1cblxuICAgIGdldEZyYW1lKCk6IEhUTUxWaWRlb0VsZW1lbnQgfCBJbWFnZUluZm8ge1xuICAgICAgICBsZXQgZnJhbWU6IEltYWdlSW5mbyA9IG51bGw7XG5cbiAgICAgICAgaWYgKHRoaXMuX2xvYWRlZCAmJiAhdGhpcy5fcGF1c2VkKSB7XG4gICAgICAgICAgICBmcmFtZSA9IHRoaXMuX2ltYWdlc1t0aGlzLl9mcmFtZUluZGV4XTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuX2ZyYW1lSW5kZXggPCAodGhpcy5fc2l6ZSAtIDEpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZnJhbWVJbmRleCsrO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZW5kZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXIoJ2VuZGVkJywgW10pO1xuICAgICAgICAgICAgICAgIH0sIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZyYW1lO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2xvYWRJbWFnZXMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2xvYWRlZCA9IGZhbHNlO1xuICAgICAgICBJbWFnZUxvYWRlci5sb2FkKHRoaXMuX2Jhc2VVcmwsIGltYWdlcyA9PiB7XG4gICAgICAgICAgICB0aGlzLl9pbWFnZXMgPSBpbWFnZXM7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoaW1hZ2VzWzBdLnRhZ3MgJiYgaW1hZ2VzWzBdLnRhZ3Mub3JpZW50YXRpb24pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgY2FzZSA4OiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3dpZHRoID0gaW1hZ2VzWzBdLmltYWdlLmhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faGVpZ2h0ID0gaW1hZ2VzWzBdLmltYWdlLndpZHRoO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl93aWR0aCA9IGltYWdlc1swXS5pbWFnZS53aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faGVpZ2h0ID0gaW1hZ2VzWzBdLmltYWdlLmhlaWdodDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX2NhbnZhc1dpZHRoID0gdGhpcy5fY2FsY3VsYXRlZFdpZHRoID0gdGhpcy5fY29uZmlnLnNpemUgPyB0aGlzLl93aWR0aCA+IHRoaXMuX2hlaWdodCA/XG4gICAgICAgICAgICAgICAgdGhpcy5fY29uZmlnLnNpemUgOiB0aGlzLl93aWR0aCAqIHRoaXMuX2NvbmZpZy5zaXplIC8gdGhpcy5faGVpZ2h0IHwgMCA6IHRoaXMuX3dpZHRoO1xuICAgICAgICAgICAgdGhpcy5fY2FudmFzSGVpZ2h0ID0gdGhpcy5fY2FsY3VsYXRlZEhlaWdodCA9IHRoaXMuX2NvbmZpZy5zaXplID8gdGhpcy5fd2lkdGggPiB0aGlzLl9oZWlnaHQgP1xuICAgICAgICAgICAgICAgIHRoaXMuX2hlaWdodCAqIHRoaXMuX2NvbmZpZy5zaXplIC8gdGhpcy5fd2lkdGggfCAwIDogdGhpcy5fY29uZmlnLnNpemUgOiB0aGlzLl9oZWlnaHQ7XG4gICAgICAgICAgICB0aGlzLl9sb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5fZnJhbWVJbmRleCA9IDA7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMudHJpZ2dlcignY2FucmVjb3JkJywgW10pLCAwKTtcbiAgICAgICAgfSwgdGhpcy5fb2Zmc2V0LCB0aGlzLl9zaXplLCB0aGlzLl9jb25maWcuc2VxdWVuY2UpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi4vY29tbW9uL3BvaW50JztcbmltcG9ydCB7IEJhcmNvZGVMb2NhdG9yQ29uZmlnLCBQYXRjaFNpemVDb25maWcgfSBmcm9tICcuLi9sb2NhdG9yL2JhcmNvZGUtbG9jYXRvci1jb25maWcnO1xuaW1wb3J0IHsgSW5wdXRTdHJlYW0gfSBmcm9tICcuL2lucHV0LXN0cmVhbSc7XG5pbXBvcnQgeyBBcmVhQ29uZmlnIH0gZnJvbSAnLi9pbnB1dC1zdHJlYW0tY29uZmlnJztcblxuZXhwb3J0IGludGVyZmFjZSBEaW1lbnNpb24ge1xuICAgIHVuaXQ6ICclJyB8ICdweCcsXG4gICAgdmFsdWU6IG51bWJlcjtcbn1cblxuZnVuY3Rpb24gX2NvbXB1dGVEaXZpc29ycyhuOiBudW1iZXIpOiBBcnJheTxudW1iZXI+IHtcbiAgICBjb25zdCBkaXZpc29ycyA9IG5ldyBBcnJheTxudW1iZXI+KCk7XG4gICAgY29uc3QgbGFyZ2VEaXZpc29ycyA9IG5ldyBBcnJheTxudW1iZXI+KCk7XG5cbiAgICBmb3IgKGxldCBkaXZpc29yID0gMTsgZGl2aXNvciAqIGRpdmlzb3IgPD0gbjsgZGl2aXNvcisrKSB7XG4gICAgICAgIGlmIChuICUgZGl2aXNvciA9PT0gMCkge1xuICAgICAgICAgICAgZGl2aXNvcnMucHVzaChkaXZpc29yKTtcbiAgICAgICAgICAgIGlmIChkaXZpc29yICogZGl2aXNvciAhPT0gbikge1xuICAgICAgICAgICAgICAgIGxhcmdlRGl2aXNvcnMudW5zaGlmdChuIC8gZGl2aXNvciB8IDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpdmlzb3JzLmNvbmNhdChsYXJnZURpdmlzb3JzKTtcbn1cblxuZnVuY3Rpb24gX2NvbXB1dGVDb21tb25EaXZpc29ycyhtOiBudW1iZXIsIG46IG51bWJlcik6IEFycmF5PG51bWJlcj4ge1xuICAgIGlmIChtID09PSBuKSB7XG4gICAgICAgIHJldHVybiBfY29tcHV0ZURpdmlzb3JzKG0pO1xuICAgIH1cblxuICAgIGNvbnN0IG1heCA9IG0gPiBuID8gbSA6IG47XG4gICAgY29uc3QgbWluID0gbSA+IG4gPyBuIDogbTtcbiAgICBjb25zdCBkaXZpc29ycyA9IG5ldyBBcnJheTxudW1iZXI+KCk7XG4gICAgY29uc3QgbGFyZ2VEaXZpc29ycyA9IG5ldyBBcnJheTxudW1iZXI+KCk7XG5cbiAgICBmb3IgKGxldCBkaXZpc29yID0gMTsgZGl2aXNvciAqIGRpdmlzb3IgPD0gbWluOyBkaXZpc29yKyspIHtcbiAgICAgICAgaWYgKG1heCAlIGRpdmlzb3IgPT09IDAgJiYgbWluICUgZGl2aXNvciA9PT0gMCkge1xuICAgICAgICAgICAgZGl2aXNvcnMucHVzaChkaXZpc29yKTtcbiAgICAgICAgICAgIGNvbnN0IGxhcmdlRGl2aXNvciA9IG1pbiAvIGRpdmlzb3IgfCAwO1xuICAgICAgICAgICAgaWYgKGRpdmlzb3IgIT09IGxhcmdlRGl2aXNvciAmJiBtYXggJSBsYXJnZURpdmlzb3IgPT09IDApIHtcbiAgICAgICAgICAgICAgICBsYXJnZURpdmlzb3JzLnVuc2hpZnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkaXZpc29ycy5jb25jYXQobGFyZ2VEaXZpc29ycyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVQYXRjaFNpemUocGF0Y2hTaXplOiBQYXRjaFNpemVDb25maWcsIHsgeCwgeSB9OiBQb2ludCk6IFBvaW50IHtcbiAgICBjb25zdCB3aWRlU2lkZSA9IE1hdGgubWF4KHggfCAwLCB5IHwgMCkgfCAwO1xuICAgIGNvbnN0IG5yT2ZQYXRjaGVzTGlzdCA9IFs4LCAxMCwgMTUsIDIwLCAzMiwgNjAsIDgwXTtcbiAgICBjb25zdCBuck9mUGF0Y2hlc01hcCA9IHtcbiAgICAgICAgJ3gtc21hbGwnOiA1LFxuICAgICAgICBzbWFsbDogNCxcbiAgICAgICAgbWVkaXVtOiAzLFxuICAgICAgICBsYXJnZTogMixcbiAgICAgICAgJ3gtbGFyZ2UnOiAxXG4gICAgfTtcbiAgICBjb25zdCBuck9mUGF0Y2hlc0luZGV4ID0gbnJPZlBhdGNoZXNNYXBbcGF0Y2hTaXplXSB8fCBuck9mUGF0Y2hlc01hcC5tZWRpdW0gfCAwO1xuICAgIGNvbnN0IG5yT2ZQYXRjaGVzID0gbnJPZlBhdGNoZXNMaXN0W25yT2ZQYXRjaGVzSW5kZXhdIHwgMDtcbiAgICBjb25zdCBkZXNpcmVkUGF0Y2hTaXplID0gd2lkZVNpZGUgLyBuck9mUGF0Y2hlcyB8IDA7XG5cbiAgICBmdW5jdGlvbiBmaW5kUGF0Y2hTaXplRm9yRGl2aXNvcnMoZGl2aXNvcnM6IEFycmF5PG51bWJlcj4pOiBQb2ludCB7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgbGV0IGZvdW5kID0gZGl2aXNvcnNbZGl2aXNvcnMubGVuZ3RoID4+IDFdIHwgMDtcblxuICAgICAgICB3aGlsZSAoaSA8IChkaXZpc29ycy5sZW5ndGggLSAxKSAmJiBkaXZpc29yc1tpXSA8IGRlc2lyZWRQYXRjaFNpemUpIHtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgfVxuICAgICAgICBpZiAoaSA+IDApIHtcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhkaXZpc29yc1tpXSAtIGRlc2lyZWRQYXRjaFNpemUpID4gTWF0aC5hYnMoZGl2aXNvcnNbaSAtIDFdIC0gZGVzaXJlZFBhdGNoU2l6ZSkpIHtcbiAgICAgICAgICAgICAgICBmb3VuZCA9IGRpdmlzb3JzW2kgLSAxXSB8IDA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvdW5kID0gZGl2aXNvcnNbaV0gfCAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChkZXNpcmVkUGF0Y2hTaXplIC8gZm91bmQgPCBuck9mUGF0Y2hlc0xpc3RbbnJPZlBhdGNoZXNJbmRleCArIDFdIC8gbnJPZlBhdGNoZXNMaXN0W25yT2ZQYXRjaGVzSW5kZXhdICYmXG4gICAgICAgICAgICBkZXNpcmVkUGF0Y2hTaXplIC8gZm91bmQgPiBuck9mUGF0Y2hlc0xpc3RbbnJPZlBhdGNoZXNJbmRleCAtIDFdIC8gbnJPZlBhdGNoZXNMaXN0W25yT2ZQYXRjaGVzSW5kZXhdKSB7XG4gICAgICAgICAgICByZXR1cm4geyB4OiBmb3VuZCwgeTogZm91bmQgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBvcHRpbWFsUGF0Y2hTaXplID0gZmluZFBhdGNoU2l6ZUZvckRpdmlzb3JzKF9jb21wdXRlQ29tbW9uRGl2aXNvcnMoeCwgeSkpIHx8XG4gICAgICAgIGZpbmRQYXRjaFNpemVGb3JEaXZpc29ycyhfY29tcHV0ZURpdmlzb3JzKHdpZGVTaWRlKSkgfHxcbiAgICAgICAgZmluZFBhdGNoU2l6ZUZvckRpdmlzb3JzKF9jb21wdXRlRGl2aXNvcnMoZGVzaXJlZFBhdGNoU2l6ZSAqIG5yT2ZQYXRjaGVzKSk7XG5cbiAgICByZXR1cm4gb3B0aW1hbFBhdGNoU2l6ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrSW1hZ2VDb25zdHJhaW50cyhpbnB1dFN0cmVhbTogSW5wdXRTdHJlYW0sIGNvbmZpZzogQmFyY29kZUxvY2F0b3JDb25maWcpIHtcbiAgICBsZXQgd2lkdGggPSBpbnB1dFN0cmVhbS53aWR0aDtcbiAgICBsZXQgaGVpZ2h0ID0gaW5wdXRTdHJlYW0uaGVpZ2h0O1xuICAgIGNvbnN0IHNoaWZ0ID0gY29uZmlnLmhhbGZTYW1wbGUgPyAxIDogMCB8IDA7XG5cbiAgICAvLyBjYWxjdWxhdGUgd2lkdGggYW5kIGhlaWdodCBiYXNlZCBvbiBhcmVhXG4gICAgaWYgKGlucHV0U3RyZWFtLmNvbmZpZy5hcmVhKSB7XG4gICAgICAgIGNvbnN0IGFyZWEgPSBjb21wdXRlSW1hZ2VBcmVhKHdpZHRoLCBoZWlnaHQsIGlucHV0U3RyZWFtLmNvbmZpZy5hcmVhKTtcbiAgICAgICAgaW5wdXRTdHJlYW0udG9wTGVmdCA9IGFyZWEudG9wTGVmdDtcbiAgICAgICAgaW5wdXRTdHJlYW0uc2V0Q2FudmFzU2l6ZSh3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgd2lkdGggPSBhcmVhLndpZHRoO1xuICAgICAgICBoZWlnaHQgPSBhcmVhLmhlaWdodDtcbiAgICB9XG5cbiAgICBjb25zdCBzaXplID0ge1xuICAgICAgICB4OiB3aWR0aCA+PiBzaGlmdCxcbiAgICAgICAgeTogaGVpZ2h0ID4+IHNoaWZ0XG4gICAgfTtcblxuICAgIGNvbnN0IHBhdGNoU2l6ZSA9IGNhbGN1bGF0ZVBhdGNoU2l6ZShjb25maWcucGF0Y2hTaXplLCBzaXplKTtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zb2xlLmxvZygnUGF0Y2gtU2l6ZTonLCBKU09OLnN0cmluZ2lmeShwYXRjaFNpemUpKTtcbiAgICB9XG5cbiAgICBpbnB1dFN0cmVhbS53aWR0aCA9IChzaXplLnggLyBwYXRjaFNpemUueCA8PCBzaGlmdCkgKiBwYXRjaFNpemUueCB8IDA7XG4gICAgaW5wdXRTdHJlYW0uaGVpZ2h0ID0gKHNpemUueSAvIHBhdGNoU2l6ZS55IDw8IHNoaWZ0KSAqIHBhdGNoU2l6ZS55IHwgMDtcblxuICAgIGlmICgoaW5wdXRTdHJlYW0ud2lkdGggJSBwYXRjaFNpemUueCkgPT09IDAgJiYgKGlucHV0U3RyZWFtLmhlaWdodCAlIHBhdGNoU2l6ZS55KSA9PT0gMCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxuICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2UgZGltZW5zaW9ucyBkbyBub3QgY29tcGx5IHdpdGggdGhlIGN1cnJlbnQgc2V0dGluZ3M6IHdpZHRoICgke3dpZHRofSkgYW5kIGhlaWdodCAoJHtoZWlnaHR9KSBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgJHtwYXRjaFNpemUueH1gKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9wYXJzZUNzc0RpbWVuc2lvblZhbHVlcyh2YWx1ZTogc3RyaW5nKTogRGltZW5zaW9uIHtcbiAgICBjb25zdCBkaW1lbnNpb246IERpbWVuc2lvbiA9IHtcbiAgICAgICAgdmFsdWU6IHBhcnNlRmxvYXQodmFsdWUpLFxuICAgICAgICB1bml0OiB2YWx1ZS5pbmRleE9mKCclJykgPT09IHZhbHVlLmxlbmd0aCAtIDEgPyAnJScgOiB2YWx1ZS5pbmRleE9mKCdweCcpID09PSB2YWx1ZS5sZW5ndGggLSAyID8gJ3B4JyA6ICclJ1xuICAgIH07XG5cbiAgICByZXR1cm4gZGltZW5zaW9uO1xufVxuXG5leHBvcnQgY29uc3QgX2RpbWVuc2lvbnNDb252ZXJ0ZXJzID0ge1xuICAgIGJvdHRvbTogKGRpbWVuc2lvbjogRGltZW5zaW9uLCB7IGhlaWdodCB9KSA9PiBkaW1lbnNpb24udW5pdCA9PT0gJyUnID9cbiAgICAgICAgaGVpZ2h0IC0gaGVpZ2h0ICogZGltZW5zaW9uLnZhbHVlIC8gMTAwIHwgMCA6IGRpbWVuc2lvbi51bml0ID09PSAncHgnID8gaGVpZ2h0IC0gZGltZW5zaW9uLnZhbHVlIDogaGVpZ2h0LFxuICAgIGxlZnQ6IChkaW1lbnNpb246IERpbWVuc2lvbiwgeyB3aWR0aCB9KSA9PiBkaW1lbnNpb24udW5pdCA9PT0gJyUnID9cbiAgICAgICAgd2lkdGggKiBkaW1lbnNpb24udmFsdWUgLyAxMDAgfCAwIDogZGltZW5zaW9uLnVuaXQgPT09ICdweCcgPyBkaW1lbnNpb24udmFsdWUgOiAwLFxuICAgIHJpZ2h0OiAoZGltZW5zaW9uOiBEaW1lbnNpb24sIHsgd2lkdGggfSkgPT4gZGltZW5zaW9uLnVuaXQgPT09ICclJyA/XG4gICAgICAgIHdpZHRoIC0gd2lkdGggKiBkaW1lbnNpb24udmFsdWUgLyAxMDAgfCAwIDogZGltZW5zaW9uLnVuaXQgPT09ICdweCcgPyB3aWR0aCAtIGRpbWVuc2lvbi52YWx1ZSA6IHdpZHRoLFxuICAgIHRvcDogKGRpbWVuc2lvbjogRGltZW5zaW9uLCB7IGhlaWdodCB9KTogbnVtYmVyID0+IGRpbWVuc2lvbi51bml0ID09PSAnJScgP1xuICAgICAgICBoZWlnaHQgKiBkaW1lbnNpb24udmFsdWUgLyAxMDAgfCAwIDogZGltZW5zaW9uLnVuaXQgPT09ICdweCcgPyBkaW1lbnNpb24udmFsdWUgOiAwXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gY29tcHV0ZUltYWdlQXJlYShpbnB1dFdpZHRoOiBudW1iZXIsIGlucHV0SGVpZ2h0OiBudW1iZXIsIGFyZWE6IEFyZWFDb25maWcpIHtcbiAgICBjb25zdCBjb250ZXh0ID0geyB3aWR0aDogaW5wdXRXaWR0aCwgaGVpZ2h0OiBpbnB1dEhlaWdodCB9O1xuICAgIGNvbnN0IHBhcnNlZEFyZWE6IHtcbiAgICAgICAgYm90dG9tPzogbnVtYmVyO1xuICAgICAgICBsZWZ0PzogbnVtYmVyO1xuICAgICAgICByaWdodD86IG51bWJlcjtcbiAgICAgICAgdG9wPzogbnVtYmVyO1xuICAgIH0gPSBPYmplY3Qua2V5cyhhcmVhKS5yZWR1Y2UoKHJlc3VsdCwga2V5KSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gYXJlYVtrZXldO1xuICAgICAgICBjb25zdCBwYXJzZWQgPSBfcGFyc2VDc3NEaW1lbnNpb25WYWx1ZXModmFsdWUpO1xuICAgICAgICBjb25zdCBjYWxjdWxhdGVkID0gX2RpbWVuc2lvbnNDb252ZXJ0ZXJzW2tleV0ocGFyc2VkLCBjb250ZXh0KTtcblxuICAgICAgICByZXN1bHRba2V5XSA9IGNhbGN1bGF0ZWQ7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSwge30pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdG9wTGVmdDogeyB4OiBwYXJzZWRBcmVhLmxlZnQsIHk6IHBhcnNlZEFyZWEudG9wIH0sXG4gICAgICAgIHdpZHRoOiBwYXJzZWRBcmVhLnJpZ2h0IC0gcGFyc2VkQXJlYS5sZWZ0LFxuICAgICAgICBoZWlnaHQ6IHBhcnNlZEFyZWEuYm90dG9tIC0gcGFyc2VkQXJlYS50b3BcbiAgICB9O1xufVxuIiwiaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuLi9jb21tb24vcG9pbnQnO1xuaW1wb3J0IHsgSW1hZ2VJbmZvIH0gZnJvbSAnLi9pbWFnZS1sb2FkZXInO1xuaW1wb3J0IHsgSW5wdXRTdHJlYW1Db25maWcgfSBmcm9tICcuL2lucHV0LXN0cmVhbS1jb25maWcnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgSW5wdXRTdHJlYW0ge1xuICAgIHByb3RlY3RlZCBfY2FsY3VsYXRlZEhlaWdodDogbnVtYmVyO1xuICAgIHByb3RlY3RlZCBfY2FsY3VsYXRlZFdpZHRoOiBudW1iZXI7XG4gICAgcHJvdGVjdGVkIF9jYW52YXNIZWlnaHQ6IG51bWJlcjtcbiAgICBwcm90ZWN0ZWQgX2NhbnZhc1dpZHRoOiBudW1iZXI7XG4gICAgcHJvdGVjdGVkIF9jb25maWc6IElucHV0U3RyZWFtQ29uZmlnO1xuICAgIHByb3RlY3RlZCBfZXZlbnROYW1lczogQXJyYXk8c3RyaW5nPjtcbiAgICBwcm90ZWN0ZWQgX2V2ZW50SGFuZGxlcnM6IE1hcDxzdHJpbmcsIEFycmF5PEV2ZW50TGlzdGVuZXI+PjtcbiAgICBwcm90ZWN0ZWQgX3RvcExlZnQ6IFBvaW50O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX2NhbnZhc1dpZHRoID0gMDtcbiAgICAgICAgdGhpcy5fY2FudmFzSGVpZ2h0ID0gMDtcbiAgICAgICAgdGhpcy5fY29uZmlnID0gbnVsbDtcbiAgICAgICAgdGhpcy5fZXZlbnROYW1lcyA9IFsnY2FucmVjb3JkJywgJ2VuZGVkJ107XG4gICAgICAgIHRoaXMuX2V2ZW50SGFuZGxlcnMgPSBuZXcgTWFwPHN0cmluZywgQXJyYXk8RXZlbnRMaXN0ZW5lcj4+KCk7XG4gICAgICAgIHRoaXMuX3RvcExlZnQgPSB7IHg6IDAsIHk6IDAgfTtcbiAgICB9XG5cbiAgICBhYnN0cmFjdCBnZXQgcmVhbEhlaWdodCgpOiBudW1iZXI7XG5cbiAgICBhYnN0cmFjdCBnZXQgcmVhbFdpZHRoKCk6IG51bWJlcjtcblxuICAgIGdldCBoZWlnaHQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhbGN1bGF0ZWRIZWlnaHQ7XG4gICAgfVxuXG4gICAgc2V0IGhlaWdodChoZWlnaHQ6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9jYWxjdWxhdGVkSGVpZ2h0ID0gaGVpZ2h0O1xuICAgIH1cblxuICAgIGdldCB3aWR0aCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2FsY3VsYXRlZFdpZHRoO1xuICAgIH1cblxuICAgIHNldCB3aWR0aCh3aWR0aDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX2NhbGN1bGF0ZWRXaWR0aCA9IHdpZHRoO1xuICAgIH1cblxuICAgIGdldCB0b3BMZWZ0KCk6IFBvaW50IHtcbiAgICAgICAgcmV0dXJuIHsgLi4udGhpcy5fdG9wTGVmdCB9O1xuICAgIH1cblxuICAgIHNldCB0b3BMZWZ0KHRvcExlZnQ6IFBvaW50KSB7XG4gICAgICAgIHRoaXMuX3RvcExlZnQueCA9IHRvcExlZnQueDtcbiAgICAgICAgdGhpcy5fdG9wTGVmdC55ID0gdG9wTGVmdC55O1xuICAgIH1cblxuICAgIHNldENhbnZhc1NpemUod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fY2FudmFzV2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5fY2FudmFzSGVpZ2h0ID0gaGVpZ2h0O1xuICAgIH1cblxuICAgIGdldCBjYW52YXNIZWlnaHQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhbnZhc0hlaWdodDtcbiAgICB9XG5cbiAgICBnZXQgY2FudmFzV2lkdGgoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhbnZhc1dpZHRoO1xuICAgIH1cblxuICAgIGdldCBjb25maWcoKTogSW5wdXRTdHJlYW1Db25maWcge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29uZmlnO1xuICAgIH1cblxuICAgIHNldCBjb25maWcoY29uZmlnOiBJbnB1dFN0cmVhbUNvbmZpZykge1xuICAgICAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG4gICAgfVxuXG4gICAgYWJzdHJhY3QgZ2V0IGVuZGVkKCk6IGJvb2xlYW47XG5cbiAgICBhYnN0cmFjdCBzZXRBdHRyaWJ1dGUobmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZDtcblxuICAgIGFic3RyYWN0IHBhdXNlKCk6IHZvaWQ7XG5cbiAgICBhYnN0cmFjdCBwbGF5KCk6IHZvaWQ7XG5cbiAgICBhYnN0cmFjdCBzZXQgY3VycmVudFRpbWUodGltZTogbnVtYmVyKTtcblxuICAgIGFkZEV2ZW50TGlzdGVuZXIoZXZlbnQ6IHN0cmluZywgbGlzdGVuZXI6IEV2ZW50TGlzdGVuZXIsIF9vcHRpb25zPzogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5fZXZlbnROYW1lcy5pbmRleE9mKGV2ZW50KSAhPT0gLTEpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5fZXZlbnRIYW5kbGVycy5oYXMoZXZlbnQpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZXZlbnRIYW5kbGVycy5zZXQoZXZlbnQsIG5ldyBBcnJheTxFdmVudExpc3RlbmVyPigpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2V2ZW50SGFuZGxlcnMuZ2V0KGV2ZW50KS5wdXNoKGxpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsZWFyRXZlbnRIYW5kbGVycygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fZXZlbnRIYW5kbGVycy5jbGVhcigpO1xuICAgIH1cblxuICAgIHRyaWdnZXIoZXZlbnROYW1lOiBzdHJpbmcsIGFyZ0FycmF5PzogYW55KSB7XG4gICAgICAgIGNvbnN0IGhhbmRsZXJzID0gdGhpcy5fZXZlbnRIYW5kbGVycy5nZXQoZXZlbnROYW1lKTtcblxuICAgICAgICBpZiAoaGFuZGxlcnMgJiYgaGFuZGxlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBoYW5kbGVycy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGhhbmRsZXJzW2pdLmFwcGx5KHRoaXMsIGFyZ0FycmF5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFic3RyYWN0IGdldEZyYW1lKCk6IEhUTUxWaWRlb0VsZW1lbnQgfCBJbWFnZUluZm87XG59XG4iLCJpbXBvcnQgeyBWaWRlb1N0cmVhbSB9IGZyb20gJy4vdmlkZW8tc3RyZWFtJztcblxuZXhwb3J0IGNsYXNzIExpdmVTdHJlYW0gZXh0ZW5kcyBWaWRlb1N0cmVhbSB7XG4gICAgY29uc3RydWN0b3IodmlkZW86IEhUTUxWaWRlb0VsZW1lbnQpIHtcbiAgICAgICAgdmlkZW8uc2V0QXR0cmlidXRlKCdhdXRvcGxheScsICcnKTtcbiAgICAgICAgc3VwZXIodmlkZW8pO1xuICAgIH1cblxuICAgIGdldCBlbmRlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEltYWdlSW5mbyB9IGZyb20gJy4vaW1hZ2UtbG9hZGVyJztcbmltcG9ydCB7IElucHV0U3RyZWFtIH0gZnJvbSAnLi9pbnB1dC1zdHJlYW0nO1xuaW1wb3J0IHsgSW5wdXRTdHJlYW1Db25maWcgfSBmcm9tICcuL2lucHV0LXN0cmVhbS1jb25maWcnO1xuXG5leHBvcnQgY2xhc3MgVmlkZW9TdHJlYW0gZXh0ZW5kcyBJbnB1dFN0cmVhbSB7XG4gICAgcHJpdmF0ZSBfdmlkZW86IEhUTUxWaWRlb0VsZW1lbnQ7XG5cbiAgICBjb25zdHJ1Y3Rvcih2aWRlbzogSFRNTFZpZGVvRWxlbWVudCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuX3ZpZGVvID0gdmlkZW87XG4gICAgfVxuXG4gICAgZ2V0IHJlYWxIZWlnaHQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZpZGVvLnZpZGVvSGVpZ2h0O1xuICAgIH1cblxuICAgIGdldCByZWFsV2lkdGgoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZpZGVvLnZpZGVvV2lkdGg7XG4gICAgfVxuXG4gICAgc2V0IGNvbmZpZyhjb25maWc6IElucHV0U3RyZWFtQ29uZmlnKSB7XG4gICAgICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcbiAgICAgICAgdGhpcy5fdmlkZW8uc3JjID0gKHR5cGVvZiBjb25maWcuc3JjICE9PSAndW5kZWZpbmVkJykgPyBjb25maWcuc3JjIDogJyc7XG4gICAgfVxuXG4gICAgZ2V0IGVuZGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmlkZW8uZW5kZWQ7XG4gICAgfVxuXG4gICAgc2V0QXR0cmlidXRlKG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLl92aWRlby5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICAgIH1cblxuICAgIHBhdXNlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl92aWRlby5wYXVzZSgpO1xuICAgIH1cblxuICAgIHBsYXkoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3ZpZGVvLnBsYXkoKTtcbiAgICB9XG5cbiAgICBzZXQgY3VycmVudFRpbWUodGltZTogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLl9jb25maWcudHlwZSAhPT0gJ0xpdmVTdHJlYW0nKSB7XG4gICAgICAgICAgICB0aGlzLl92aWRlby5jdXJyZW50VGltZSA9IHRpbWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRFdmVudExpc3RlbmVyKGV2ZW50OiBzdHJpbmcsIGxpc3RlbmVyOiBFdmVudExpc3RlbmVyLCBvcHRpb25zPzogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICBzdXBlci5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lciwgb3B0aW9ucyk7XG5cbiAgICAgICAgaWYgKHRoaXMuX2V2ZW50TmFtZXMuaW5kZXhPZihldmVudCkgPT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLl92aWRlby5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lciwgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbGVhckV2ZW50SGFuZGxlcnMoKTogdm9pZCB7XG4gICAgICAgIC8vIFRPRE86IGNvbWUgdXAgd2l0aCBhIHdheSB0byByZW1vdmUgdmlkZW8gZXZlbnQgaGFuZGxlcnNcbiAgICAgICAgLy8gdGhpcy5fZXZlbnROYW1lcy5mb3JFYWNoKGV2ZW50TmFtZSA9PiB7XG4gICAgICAgIC8vICAgICBjb25zdCBoYW5kbGVycyA9IHRoaXMuX2V2ZW50SGFuZGxlcnMuZ2V0KGV2ZW50TmFtZSk7XG4gICAgICAgIC8vICAgICBpZiAoaGFuZGxlcnMgJiYgaGFuZGxlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAvLyAgICAgICAgIGhhbmRsZXJzLmZvckVhY2goaGFuZGxlciA9PiB0aGlzLl92aWRlby5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgaGFuZGxlcikpO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9KTtcbiAgICAgICAgc3VwZXIuY2xlYXJFdmVudEhhbmRsZXJzKCk7XG4gICAgfVxuXG4gICAgdHJpZ2dlcihldmVudE5hbWU6IHN0cmluZywgYXJnQXJyYXk/OiBhbnkpIHtcbiAgICAgICAgaWYgKGV2ZW50TmFtZSA9PT0gJ2NhbnJlY29yZCcpIHtcbiAgICAgICAgICAgIHRoaXMuX2luaXRTaXplKCk7XG4gICAgICAgIH1cblxuICAgICAgICBzdXBlci50cmlnZ2VyKGV2ZW50TmFtZSwgYXJnQXJyYXkpXG4gICAgfVxuXG4gICAgZ2V0RnJhbWUoKTogSFRNTFZpZGVvRWxlbWVudCB8IEltYWdlSW5mbyB7XG4gICAgICAgIHJldHVybiB0aGlzLl92aWRlbztcbiAgICB9XG5cbiAgICBwcml2YXRlIF9pbml0U2l6ZSgpIHtcbiAgICAgICAgY29uc3Qgd2lkdGggPSB0aGlzLl92aWRlby52aWRlb1dpZHRoO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLl92aWRlby52aWRlb0hlaWdodDtcblxuICAgICAgICB0aGlzLl9jYW52YXNXaWR0aCA9IHRoaXMuX2NhbGN1bGF0ZWRXaWR0aCA9XG4gICAgICAgICAgICB0aGlzLl9jb25maWcuc2l6ZSA/IHdpZHRoID4gaGVpZ2h0ID8gdGhpcy5fY29uZmlnLnNpemUgOiB3aWR0aCAqIHRoaXMuX2NvbmZpZy5zaXplIC8gaGVpZ2h0IHwgMCA6IHdpZHRoO1xuICAgICAgICB0aGlzLl9jYW52YXNIZWlnaHQgPSB0aGlzLl9jYWxjdWxhdGVkSGVpZ2h0ID1cbiAgICAgICAgICAgIHRoaXMuX2NvbmZpZy5zaXplID8gd2lkdGggPiBoZWlnaHQgPyBoZWlnaHQgKiB0aGlzLl9jb25maWcuc2l6ZSAvIHdpZHRoIHwgMCA6IHRoaXMuX2NvbmZpZy5zaXplIDogaGVpZ2h0O1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIExpdmVTdHJlYW0gZXh0ZW5kcyBWaWRlb1N0cmVhbSB7XG4gICAgY29uc3RydWN0b3IodmlkZW86IEhUTUxWaWRlb0VsZW1lbnQpIHtcbiAgICAgICAgdmlkZW8uc2V0QXR0cmlidXRlKCdhdXRvcGxheScsICcnKTtcbiAgICAgICAgc3VwZXIodmlkZW8pO1xuICAgIH1cblxuICAgIGdldCBlbmRlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEltYWdlV3JhcHBlciB9IGZyb20gJy4uL2NvbW1vbi9pbWFnZS13cmFwcGVyJztcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi4vY29tbW9uL3BvaW50JztcblxuLyoqXG4gKiBJbnZlcnQgbWF0cml4XG4gKiBAcGFyYW0gbWF0cml4IHRoZSBtYXRyaXggdG8gaW52ZXJ0XG4gKiBAcmV0dXJucyB0aGUgaW52ZXJ0ZWQgbWF0cml4XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbnZlcnQobWF0cml4OiBGbG9hdDMyQXJyYXkpOiBGbG9hdDMyQXJyYXkge1xuICAgIGNvbnN0IGEwID0gbWF0cml4WzBdO1xuICAgIGNvbnN0IGExID0gbWF0cml4WzFdO1xuICAgIGNvbnN0IGEyID0gbWF0cml4WzJdO1xuICAgIGNvbnN0IGEzID0gbWF0cml4WzNdO1xuICAgIGNvbnN0IGRldGVybWluYW50ID0gYTAgKiBhMyAtIGEyICogYTE7XG5cbiAgICBpZiAoIWRldGVybWluYW50KSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRmxvYXQzMkFycmF5KFthMyAvIGRldGVybWluYW50LCAtYTEgLyBkZXRlcm1pbmFudCwgLWEyIC8gZGV0ZXJtaW5hbnQsIGEwIC8gZGV0ZXJtaW5hbnRdKTtcbn1cblxuLyoqXG4gKiBUcmFuc2Zvcm1zIHRoZSB2ZWN0b3Igd2l0aCBhIG1hdHJpeFxuICogQHBhcmFtIHsgeCwgeSB9IHZlY3RvciB0byB0cmFuc2Zvcm1cbiAqIEBwYXJhbSBtYXRyaXggbWF0cml4IHRvIHRyYW5zZm9ybSB3aXRoXG4gKiBAcmV0dXJucyB0aGUgdHJhbnNmb3JtZWQgdmVjdG9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1XaXRoTWF0cml4KHsgeCwgeSB9OiBQb2ludCwgbWF0cml4OiBGbG9hdDMyQXJyYXkpOiBQb2ludCB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgeDogbWF0cml4WzBdICogeCArIG1hdHJpeFsyXSAqIHksXG4gICAgICAgIHk6IG1hdHJpeFsxXSAqIHggKyBtYXRyaXhbM10gKiB5XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gX2NvbXB1dGVIaXN0b2dyYW0oaW1hZ2VXcmFwcGVyOiBJbWFnZVdyYXBwZXIsIGJpdHNQZXJQaXhlbDogbnVtYmVyKTogSW50MzJBcnJheSB7XG4gICAgaWYgKCFiaXRzUGVyUGl4ZWwpIHtcbiAgICAgICAgYml0c1BlclBpeGVsID0gODtcbiAgICB9XG5cbiAgICBjb25zdCBpbWFnZURhdGEgPSBpbWFnZVdyYXBwZXIuZGF0YTtcbiAgICBjb25zdCBiaXRTaGlmdCA9IDggLSBiaXRzUGVyUGl4ZWw7XG4gICAgY29uc3QgYnVja2V0Q291bnQgPSAxIDw8IGJpdHNQZXJQaXhlbDtcbiAgICBjb25zdCBoaXN0b2dyYW0gPSBuZXcgSW50MzJBcnJheShidWNrZXRDb3VudCk7XG5cbiAgICBmb3IgKGxldCBpID0gaW1hZ2VEYXRhLmxlbmd0aDsgaS0tOykge1xuICAgICAgICBoaXN0b2dyYW1baW1hZ2VEYXRhW2ldID4+IGJpdFNoaWZ0XSsrO1xuICAgIH1cblxuICAgIHJldHVybiBoaXN0b2dyYW07XG59XG5cbmZ1bmN0aW9uIF9kZXRlcm1pbmVPdHN1VGhyZXNob2xkKGltYWdlV3JhcHBlcjogSW1hZ2VXcmFwcGVyLCBiaXRzUGVyUGl4ZWw/OiBudW1iZXIpOiBudW1iZXIge1xuICAgIGlmICghYml0c1BlclBpeGVsKSB7XG4gICAgICAgIGJpdHNQZXJQaXhlbCA9IDg7XG4gICAgfVxuXG4gICAgY29uc3QgYml0U2hpZnQgPSA4IC0gYml0c1BlclBpeGVsO1xuICAgIGNvbnN0IGhpc3QgPSBfY29tcHV0ZUhpc3RvZ3JhbShpbWFnZVdyYXBwZXIsIGJpdHNQZXJQaXhlbCk7XG4gICAgY29uc3QgdmV0ID0gWzBdO1xuICAgIGNvbnN0IG1heCA9ICgxIDw8IGJpdHNQZXJQaXhlbCkgLSAxO1xuXG4gICAgZnVuY3Rpb24gcHgoaW5pdDogbnVtYmVyLCBlbmQ6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIGxldCBzdW0gPSAwO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSBpbml0OyBpIDw9IGVuZDsgaSsrKSB7XG4gICAgICAgICAgICBzdW0gKz0gaGlzdFtpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdW07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbXgoaW5pdDogbnVtYmVyLCBlbmQ6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIGxldCBzdW0gPSAwO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSBpbml0OyBpIDw9IGVuZDsgaSsrKSB7XG4gICAgICAgICAgICBzdW0gKz0gaSAqIGhpc3RbaV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VtO1xuICAgIH1cblxuICAgIGZvciAobGV0IGsgPSAxOyBrIDwgbWF4OyBrKyspIHtcbiAgICAgICAgY29uc3QgcDEgPSBweCgwLCBrKTtcbiAgICAgICAgY29uc3QgcDIgPSBweChrICsgMSwgbWF4KTtcbiAgICAgICAgY29uc3QgcDEyID0gcDEgKiBwMiB8fCAxO1xuICAgICAgICBjb25zdCBtMSA9IG14KDAsIGspICogcDI7XG4gICAgICAgIGNvbnN0IG0yID0gbXgoayArIDEsIG1heCkgKiBwMTtcbiAgICAgICAgY29uc3QgbTEyID0gbTEgLSBtMjtcbiAgICAgICAgdmV0W2tdID0gbTEyICogbTEyIC8gcDEyO1xuICAgIH1cblxuICAgIC8vIGluZGV4IG9mIG1heCBlbGVtZW50XG4gICAgY29uc3QgdGhyZXNob2xkID0gdmV0LnJlZHVjZSgobWF4SW5kZXgsIGl0ZW0sIGluZGV4LCBhcnJheSkgPT4gaXRlbSA+IGFycmF5W21heEluZGV4XSA/IGluZGV4IDogbWF4SW5kZXgsIDApO1xuXG4gICAgcmV0dXJuIHRocmVzaG9sZCA8PCBiaXRTaGlmdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG90c3VUaHJlc2hvbGQoaW1hZ2VXcmFwcGVyOiBJbWFnZVdyYXBwZXIsIHRhcmdldFdyYXBwZXI6IEltYWdlV3JhcHBlcik6IG51bWJlciB7XG4gICAgY29uc3QgdGhyZXNob2xkID0gX2RldGVybWluZU90c3VUaHJlc2hvbGQoaW1hZ2VXcmFwcGVyKTtcbiAgICBjb25zdCB0YXJnZXREYXRhID0gdGFyZ2V0V3JhcHBlci5kYXRhO1xuXG4gICAgaW1hZ2VXcmFwcGVyLmRhdGEuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAgIHRhcmdldERhdGFbaW5kZXhdID0gdmFsdWUgPCB0aHJlc2hvbGQgPyAxIDogMDtcbiAgICB9KTtcblxuICAgIHJldHVybiB0aHJlc2hvbGQ7XG59XG5cbi8qKlxuICogQHBhcmFtIGltYWdlV3JhcHBlciBpbnB1dCBpbWFnZSB0byBiZSBzYW1wbGVkXG4gKiBAcGFyYW0gb3V0SW1hZ2VXcmFwcGVyIHtJbWFnZVdyYXBwZXJ9IHRvIGJlIHN0b3JlZCBpblxuICovXG5leHBvcnQgZnVuY3Rpb24gaGFsZlNhbXBsZShpbWFnZVdyYXBwZXI6IEltYWdlV3JhcHBlciwgb3V0SW1hZ2VXcmFwcGVyOiBJbWFnZVdyYXBwZXIpOiB2b2lkIHtcbiAgICBjb25zdCBpbWFnZSA9IGltYWdlV3JhcHBlci5kYXRhO1xuICAgIGNvbnN0IHdpZHRoID0gaW1hZ2VXcmFwcGVyLnNpemUueDtcbiAgICBjb25zdCBvdXRJbWFnZSA9IG91dEltYWdlV3JhcHBlci5kYXRhO1xuICAgIGNvbnN0IGVuZEluZGV4ID0gaW1hZ2UubGVuZ3RoO1xuICAgIGNvbnN0IG91dFdpZHRoID0gd2lkdGggPj4gMTtcbiAgICBsZXQgdG9wUm93SW5kZXggPSAwO1xuICAgIGxldCBib3R0b21Sb3dJbmRleCA9IHdpZHRoO1xuICAgIGxldCBvdXRJbWdJbmRleCA9IDA7XG5cbiAgICB3aGlsZSAoYm90dG9tUm93SW5kZXggPCBlbmRJbmRleCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG91dFdpZHRoOyBpKyspIHtcbiAgICAgICAgICAgIG91dEltYWdlW291dEltZ0luZGV4XSA9XG4gICAgICAgICAgICAgICAgKGltYWdlW3RvcFJvd0luZGV4XSArIGltYWdlW3RvcFJvd0luZGV4ICsgMV0gKyBpbWFnZVtib3R0b21Sb3dJbmRleF0gKyBpbWFnZVtib3R0b21Sb3dJbmRleCArIDFdKSA+PiAyO1xuICAgICAgICAgICAgb3V0SW1nSW5kZXgrKztcbiAgICAgICAgICAgIHRvcFJvd0luZGV4ICs9IDI7XG4gICAgICAgICAgICBib3R0b21Sb3dJbmRleCArPSAyO1xuICAgICAgICB9XG4gICAgICAgIHRvcFJvd0luZGV4ICs9IHdpZHRoO1xuICAgICAgICBib3R0b21Sb3dJbmRleCArPSB3aWR0aDtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBCb3ggfSBmcm9tICcuLi9jb21tb24vYm94JztcbmltcG9ydCB7IENsdXN0ZXIgfSBmcm9tICcuLi9jb21tb24vY2x1c3Rlcic7XG5pbXBvcnQgeyBIU1YsIGhzdjJyZ2IsIFJHQiB9IGZyb20gJy4uL2NvbW1vbi9oc3YycmdiJztcbmltcG9ydCB7IEltYWdlRGVidWcgfSBmcm9tICcuLi9jb21tb24vaW1hZ2UtZGVidWcnO1xuaW1wb3J0IHsgSW1hZ2VXcmFwcGVyIH0gZnJvbSAnLi4vY29tbW9uL2ltYWdlLXdyYXBwZXInO1xuaW1wb3J0IHsgTW9tZW50IH0gZnJvbSAnLi4vY29tbW9uL21vbWVudCc7XG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJy4uL2NvbW1vbi9wb2ludCc7XG5pbXBvcnQgeyBjYWxjdWxhdGVQYXRjaFNpemUgfSBmcm9tICcuLi9pbnB1dC9pbnB1dC1zdHJlYW0tdXRpbHMnO1xuaW1wb3J0IHsgQmFyY29kZUxvY2F0b3JDb25maWcgfSBmcm9tICcuL2JhcmNvZGUtbG9jYXRvci1jb25maWcnO1xuaW1wb3J0IHsgaGFsZlNhbXBsZSwgaW52ZXJ0LCBvdHN1VGhyZXNob2xkLCB0cmFuc2Zvcm1XaXRoTWF0cml4IH0gZnJvbSAnLi9iYXJjb2RlLWxvY2F0b3ItdXRpbHMnO1xuaW1wb3J0IHsgUmFzdGVyaXplciB9IGZyb20gJy4vcmFzdGVyaXplcic7XG5pbXBvcnQgc2tlbGV0b25pemVyIGZyb20gJy4vc2tlbGV0b25pemVyJztcbmltcG9ydCB7IFNlYXJjaERpcmVjdGlvbnMgfSBmcm9tICcuL3RyYWNlcic7XG5cbmludGVyZmFjZSBQYXRjaCB7XG4gICAgYm94OiBCb3g7XG4gICAgaW5kZXg6IG51bWJlcjtcbiAgICBtb21lbnRzOiBBcnJheTxNb21lbnQ+O1xuICAgIHBvczogUG9pbnQ7XG4gICAgcmFkOiBudW1iZXI7XG4gICAgeDogbnVtYmVyO1xuICAgIHk6IG51bWJlcjtcbn1cblxudHlwZSBTY2VsZXRvbml6ZXIgPSBhbnk7XG5cbmNvbnN0IE1vbWVudFNpbWlsYXJpdHlUaHJlc2hvbGQgPSAwLjk7XG5cbmV4cG9ydCBjbGFzcyBCYXJjb2RlTG9jYXRvciB7XG4gICAgcHJpdmF0ZSBfY29uZmlnOiBCYXJjb2RlTG9jYXRvckNvbmZpZztcbiAgICBwcml2YXRlIF9pbnB1dEltYWdlV3JhcHBlcjogSW1hZ2VXcmFwcGVyO1xuICAgIHByaXZhdGUgX2N1cnJlbnRJbWFnZVdyYXBwZXI6IEltYWdlV3JhcHBlcjtcbiAgICBwcml2YXRlIF9za2VsSW1hZ2VXcmFwcGVyOiBJbWFnZVdyYXBwZXI7XG4gICAgcHJpdmF0ZSBfc3ViSW1hZ2VXcmFwcGVyOiBJbWFnZVdyYXBwZXI7XG4gICAgcHJpdmF0ZSBfbGFiZWxJbWFnZVdyYXBwZXI6IEltYWdlV3JhcHBlcjxBcnJheTxudW1iZXI+PjtcbiAgICBwcml2YXRlIF9iaW5hcnlJbWFnZVdyYXBwZXI6IEltYWdlV3JhcHBlcjtcbiAgICBwcml2YXRlIF9wYXRjaEdyaWQ6IEltYWdlV3JhcHBlcjtcbiAgICBwcml2YXRlIF9wYXRjaExhYmVsR3JpZDogSW1hZ2VXcmFwcGVyPEludDMyQXJyYXk+O1xuICAgIHByaXZhdGUgX2ltYWdlVG9QYXRjaEdyaWQ6IEFycmF5PFBhdGNoPjtcbiAgICBwcml2YXRlIF9wYXRjaFNpemU6IFBvaW50O1xuICAgIHByaXZhdGUgX2JpbmFyeUNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcbiAgICBwcml2YXRlIF9udW1QYXRjaGVzOiBQb2ludDtcbiAgICBwcml2YXRlIF9za2VsZXRvbml6ZXI6IFNjZWxldG9uaXplcjtcblxuICAgIGNvbnN0cnVjdG9yKGlucHV0SW1hZ2VXcmFwcGVyOiBJbWFnZVdyYXBwZXIsIGNvbmZpZzogQmFyY29kZUxvY2F0b3JDb25maWcpIHtcbiAgICAgICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuICAgICAgICB0aGlzLl9pbnB1dEltYWdlV3JhcHBlciA9IGlucHV0SW1hZ2VXcmFwcGVyO1xuICAgICAgICB0aGlzLl9udW1QYXRjaGVzID0geyB4OiAwLCB5OiAwIH07XG5cbiAgICAgICAgdGhpcy5faW5pdEJ1ZmZlcnMoKTtcbiAgICAgICAgdGhpcy5faW5pdENhbnZhcygpO1xuICAgIH1cblxuICAgIGxvY2F0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy5oYWxmU2FtcGxlKSB7XG4gICAgICAgICAgICBoYWxmU2FtcGxlKHRoaXMuX2lucHV0SW1hZ2VXcmFwcGVyLCB0aGlzLl9jdXJyZW50SW1hZ2VXcmFwcGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2JpbmFyaXplSW1hZ2UoKTtcbiAgICAgICAgY29uc3QgcGF0Y2hlc0ZvdW5kID0gdGhpcy5fZmluZFBhdGNoZXMoKTtcbiAgICAgICAgLy8gcmV0dXJuIHVubGVzcyA1JSBvciBtb3JlIHBhdGNoZXMgYXJlIGZvdW5kXG4gICAgICAgIGlmIChwYXRjaGVzRm91bmQubGVuZ3RoIDwgdGhpcy5fbnVtUGF0Y2hlcy54ICogdGhpcy5fbnVtUGF0Y2hlcy55ICogMC4wNSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvLyByYXN0ZXJpemUgYXJlYSBieSBjb21wYXJpbmcgYW5ndWxhciBzaW1pbGFyaXR5O1xuICAgICAgICBjb25zdCBtYXhMYWJlbCA9IHRoaXMuX3Jhc3Rlcml6ZUFuZ3VsYXJTaW1pbGFyaXR5KHBhdGNoZXNGb3VuZCk7XG4gICAgICAgIGlmIChtYXhMYWJlbCA8IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc2VhcmNoIGZvciBhcmVhIHdpdGggdGhlIG1vc3QgcGF0Y2hlcyAoYmlnZ2VzdCBjb25uZWN0ZWQgYXJlYSlcbiAgICAgICAgY29uc3QgdG9wTGFiZWxzID0gdGhpcy5fZmluZEJpZ2dlc3RDb25uZWN0ZWRBcmVhcyhtYXhMYWJlbCk7XG4gICAgICAgIGlmICh0b3BMYWJlbHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGJveGVzID0gdGhpcy5fZmluZEJveGVzKHRvcExhYmVscywgbWF4TGFiZWwpO1xuICAgICAgICByZXR1cm4gYm94ZXM7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaW5pdEJ1ZmZlcnMoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLl9jb25maWcuaGFsZlNhbXBsZSkge1xuICAgICAgICAgICAgdGhpcy5fY3VycmVudEltYWdlV3JhcHBlciA9IG5ldyBJbWFnZVdyYXBwZXIoe1xuICAgICAgICAgICAgICAgIHg6IHRoaXMuX2lucHV0SW1hZ2VXcmFwcGVyLnNpemUueCAvIDIgfCAwLFxuICAgICAgICAgICAgICAgIHk6IHRoaXMuX2lucHV0SW1hZ2VXcmFwcGVyLnNpemUueSAvIDIgfCAwXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRJbWFnZVdyYXBwZXIgPSB0aGlzLl9pbnB1dEltYWdlV3JhcHBlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3BhdGNoU2l6ZSA9IGNhbGN1bGF0ZVBhdGNoU2l6ZSh0aGlzLl9jb25maWcucGF0Y2hTaXplLCB0aGlzLl9jdXJyZW50SW1hZ2VXcmFwcGVyLnNpemUpO1xuXG4gICAgICAgIHRoaXMuX251bVBhdGNoZXMueCA9IHRoaXMuX2N1cnJlbnRJbWFnZVdyYXBwZXIuc2l6ZS54IC8gdGhpcy5fcGF0Y2hTaXplLnggfCAwO1xuICAgICAgICB0aGlzLl9udW1QYXRjaGVzLnkgPSB0aGlzLl9jdXJyZW50SW1hZ2VXcmFwcGVyLnNpemUueSAvIHRoaXMuX3BhdGNoU2l6ZS55IHwgMDtcblxuICAgICAgICB0aGlzLl9iaW5hcnlJbWFnZVdyYXBwZXIgPSBuZXcgSW1hZ2VXcmFwcGVyKHRoaXMuX2N1cnJlbnRJbWFnZVdyYXBwZXIuc2l6ZSwgdW5kZWZpbmVkLCBVaW50OEFycmF5LCBmYWxzZSk7XG5cbiAgICAgICAgdGhpcy5fbGFiZWxJbWFnZVdyYXBwZXIgPSBuZXcgSW1hZ2VXcmFwcGVyKHRoaXMuX3BhdGNoU2l6ZSwgdW5kZWZpbmVkLCBBcnJheSwgdHJ1ZSk7XG5cbiAgICAgICAgY29uc3Qgc2tlbGV0b25JbWFnZURhdGEgPSBuZXcgQXJyYXlCdWZmZXIoNjQgKiAxMDI0KTtcbiAgICAgICAgdGhpcy5fc3ViSW1hZ2VXcmFwcGVyID0gbmV3IEltYWdlV3JhcHBlcih0aGlzLl9wYXRjaFNpemUsIG5ldyBVaW50OEFycmF5KHNrZWxldG9uSW1hZ2VEYXRhLCAwLCB0aGlzLl9wYXRjaFNpemUueCAqIHRoaXMuX3BhdGNoU2l6ZS55KSk7XG4gICAgICAgIHRoaXMuX3NrZWxJbWFnZVdyYXBwZXIgPSBuZXcgSW1hZ2VXcmFwcGVyKHRoaXMuX3BhdGNoU2l6ZSxcbiAgICAgICAgICAgIG5ldyBVaW50OEFycmF5KHNrZWxldG9uSW1hZ2VEYXRhLCB0aGlzLl9wYXRjaFNpemUueCAqIHRoaXMuX3BhdGNoU2l6ZS55ICogMywgdGhpcy5fcGF0Y2hTaXplLnggKiB0aGlzLl9wYXRjaFNpemUueSksXG4gICAgICAgICAgICB1bmRlZmluZWQsIHRydWUpO1xuICAgICAgICB0aGlzLl9za2VsZXRvbml6ZXIgPSBza2VsZXRvbml6ZXIoXG4gICAgICAgICAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpID8gd2luZG93IDogKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJykgPyBzZWxmIDogZ2xvYmFsLFxuICAgICAgICAgICAgeyBzaXplOiB0aGlzLl9wYXRjaFNpemUueCB9LFxuICAgICAgICAgICAgc2tlbGV0b25JbWFnZURhdGFcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBzaXplID0ge1xuICAgICAgICAgICAgeDogKHRoaXMuX2N1cnJlbnRJbWFnZVdyYXBwZXIuc2l6ZS54IC8gdGhpcy5fc3ViSW1hZ2VXcmFwcGVyLnNpemUueCkgfCAwLFxuICAgICAgICAgICAgeTogKHRoaXMuX2N1cnJlbnRJbWFnZVdyYXBwZXIuc2l6ZS55IC8gdGhpcy5fc3ViSW1hZ2VXcmFwcGVyLnNpemUueSkgfCAwXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX3BhdGNoTGFiZWxHcmlkID0gbmV3IEltYWdlV3JhcHBlcihzaXplLCB1bmRlZmluZWQsIEludDMyQXJyYXksIHRydWUpO1xuICAgICAgICB0aGlzLl9wYXRjaEdyaWQgPSBuZXcgSW1hZ2VXcmFwcGVyKHNpemUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0cnVlKTtcbiAgICAgICAgdGhpcy5faW1hZ2VUb1BhdGNoR3JpZCA9IG5ldyBBcnJheTxQYXRjaD4odGhpcy5fcGF0Y2hMYWJlbEdyaWQuZGF0YS5sZW5ndGgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2luaXRDYW52YXMoKSB7XG4gICAgICAgIGlmICh0aGlzLl9jb25maWcudXNlV29ya2VyIHx8IHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICBjYW52YXMuY2xhc3NOYW1lID0gJ2JpbmFyeUJ1ZmZlcic7XG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHRoaXMuX2JpbmFyeUltYWdlV3JhcHBlci5zaXplLng7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSB0aGlzLl9iaW5hcnlJbWFnZVdyYXBwZXIuc2l6ZS55O1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLl9jb25maWcuZGVidWcgJiYgdGhpcy5fY29uZmlnLmRlYnVnLnNob3dDYW52YXMpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZWJ1ZycpLmFwcGVuZENoaWxkKGNhbnZhcyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fYmluYXJ5Q29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBib3VuZGluZyBib3ggd2hpY2ggZW5jbG9zZXMgYWxsIHRoZSBnaXZlbiBwYXRjaGVzXG4gICAgICogQHJldHVybnMgVGhlIG1pbmltYWwgYm91bmRpbmcgYm94XG4gICAgICovXG4gICAgcHJpdmF0ZSBfYm94RnJvbVBhdGNoZXMocGF0Y2hlczogQXJyYXk8UGF0Y2g+KTogQm94IHtcbiAgICAgICAgY29uc3QgZGVidWcgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuX2NvbmZpZy5kZWJ1ZztcbiAgICAgICAgbGV0IGF2ZXJhZ2VSYWQgPSBwYXRjaGVzLnJlZHVjZSgoc3VtLCB7IHBvcywgcmFkIH0pID0+IHtcbiAgICAgICAgICAgIGlmIChkZWJ1ZyAmJiBkZWJ1Zy5zaG93UGF0Y2hlcykge1xuICAgICAgICAgICAgICAgIC8vIGRyYXcgYWxsIHBhdGNoZXMgd2hpY2ggYXJlIHRvIGJlIHRha2VuIGludG8gY29uc2lkZXJhdGlvblxuICAgICAgICAgICAgICAgIHRoaXMuX2RyYXdSZWN0KHBvcywgdGhpcy5fc3ViSW1hZ2VXcmFwcGVyLnNpemUsICdyZWQnLCAxKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHN1bSArIHJhZDtcbiAgICAgICAgfSwgMCkgLyBwYXRjaGVzLmxlbmd0aDtcblxuICAgICAgICBhdmVyYWdlUmFkID0gKGF2ZXJhZ2VSYWQgKiAxODAgLyBNYXRoLlBJICsgOTApICUgMTgwIC0gOTA7XG4gICAgICAgIGlmIChhdmVyYWdlUmFkIDwgMCkge1xuICAgICAgICAgICAgYXZlcmFnZVJhZCArPSAxODA7XG4gICAgICAgIH1cbiAgICAgICAgYXZlcmFnZVJhZCA9ICgxODAgLSBhdmVyYWdlUmFkKSAqIE1hdGguUEkgLyAxODA7XG5cbiAgICAgICAgY29uc3QgY29zID0gTWF0aC5jb3MoYXZlcmFnZVJhZCk7XG4gICAgICAgIGNvbnN0IHNpbiA9IE1hdGguc2luKGF2ZXJhZ2VSYWQpO1xuICAgICAgICBjb25zdCBtYXRyaXggPSBuZXcgRmxvYXQzMkFycmF5KFtjb3MsIHNpbiwgLXNpbiwgY29zXSk7XG4gICAgICAgIGNvbnN0IGludmVyc2VNYXRyaXggPSBpbnZlcnQobWF0cml4KTtcblxuICAgICAgICAvLyBpdGVyYXRlIG92ZXIgcGF0Y2hlcyBhbmQgcm90YXRlIGJ5IGFuZ2xlXG4gICAgICAgIHBhdGNoZXMuZm9yRWFjaCgoeyBib3ggfSkgPT4ge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA0OyBqKyspIHtcbiAgICAgICAgICAgICAgICBib3hbal0gPSB0cmFuc2Zvcm1XaXRoTWF0cml4KGJveFtqXSwgbWF0cml4KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGRlYnVnICYmIGRlYnVnLmJveEZyb21QYXRjaGVzLnNob3dUcmFuc2Zvcm1lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2RyYXdQYXRoKGJveCwgJyM5OWZmMDAnLCAyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IG1pblggPSB0aGlzLl9iaW5hcnlJbWFnZVdyYXBwZXIuc2l6ZS54O1xuICAgICAgICBsZXQgbWluWSA9IHRoaXMuX2JpbmFyeUltYWdlV3JhcHBlci5zaXplLnk7XG4gICAgICAgIGxldCBtYXhYID0gLW1pblg7XG4gICAgICAgIGxldCBtYXhZID0gLW1pblk7XG5cbiAgICAgICAgLy8gZmluZCBib3VuZGluZyBib3hcbiAgICAgICAgcGF0Y2hlcy5mb3JFYWNoKCh7IGJveCB9KSA9PiB7XG4gICAgICAgICAgICBib3guZm9yRWFjaCgoeyB4LCB5IH0pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoeCA8IG1pblgpIHtcbiAgICAgICAgICAgICAgICAgICAgbWluWCA9IHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh4ID4gbWF4WCkge1xuICAgICAgICAgICAgICAgICAgICBtYXhYID0geDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHkgPCBtaW5ZKSB7XG4gICAgICAgICAgICAgICAgICAgIG1pblkgPSB5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoeSA+IG1heFkpIHtcbiAgICAgICAgICAgICAgICAgICAgbWF4WSA9IHk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBib3g6IEJveCA9IFt7IHg6IG1pblgsIHk6IG1pblkgfSwgeyB4OiBtYXhYLCB5OiBtaW5ZIH0sIHsgeDogbWF4WCwgeTogbWF4WSB9LCB7IHg6IG1pblgsIHk6IG1heFkgfV07XG5cbiAgICAgICAgaWYgKGRlYnVnICYmIGRlYnVnLmJveEZyb21QYXRjaGVzLnNob3dUcmFuc2Zvcm1lZEJveCkge1xuICAgICAgICAgICAgdGhpcy5fZHJhd1BhdGgoYm94LCAnI2ZmMDAwMCcsIDIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcmV2ZXJzZSByb3RhdGlvblxuICAgICAgICBib3ggPSBib3gubWFwKHZlcnRleCA9PiB0cmFuc2Zvcm1XaXRoTWF0cml4KHZlcnRleCwgaW52ZXJzZU1hdHJpeCkpIGFzIEJveDtcblxuICAgICAgICBpZiAoZGVidWcgJiYgZGVidWcuYm94RnJvbVBhdGNoZXMuc2hvd0JCKSB7XG4gICAgICAgICAgICB0aGlzLl9kcmF3UGF0aChib3gsICcjZmYwMDAwJywgMik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fY29uZmlnLmhhbGZTYW1wbGUpIHtcbiAgICAgICAgICAgIC8vIHNjYWxlXG4gICAgICAgICAgICBib3ggPSBib3gubWFwKCh7IHgsIHkgfSkgPT4gKHsgeDogeCAqIDIsIHk6IHkgKj0gMiB9KSkgYXMgQm94O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGJveDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgYmluYXJ5IGltYWdlIG9mIHRoZSBjdXJyZW50IGltYWdlXG4gICAgICovXG4gICAgcHJpdmF0ZSBfYmluYXJpemVJbWFnZSgpOiB2b2lkIHtcbiAgICAgICAgb3RzdVRocmVzaG9sZCh0aGlzLl9jdXJyZW50SW1hZ2VXcmFwcGVyLCB0aGlzLl9iaW5hcnlJbWFnZVdyYXBwZXIpO1xuICAgICAgICB0aGlzLl9iaW5hcnlJbWFnZVdyYXBwZXIuemVyb0JvcmRlcigpO1xuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuX2NvbmZpZy5kZWJ1ZyAmJiB0aGlzLl9jb25maWcuZGVidWcuc2hvd0NhbnZhcykge1xuICAgICAgICAgICAgdGhpcy5fYmluYXJ5SW1hZ2VXcmFwcGVyLnNob3codGhpcy5fYmluYXJ5Q29udGV4dCwgMjU1KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEl0ZXJhdGUgb3ZlciB0aGUgZW50aXJlIGltYWdlLCBleHRyYWN0IHBhdGNoZXNcbiAgICAgKi9cbiAgICBwcml2YXRlIF9maW5kUGF0Y2hlcygpOiBBcnJheTxQYXRjaD4ge1xuICAgICAgICBjb25zdCBkZWJ1ZyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdGhpcy5fY29uZmlnLmRlYnVnO1xuICAgICAgICBsZXQgcGF0Y2hlc0ZvdW5kID0gbmV3IEFycmF5PFBhdGNoPigpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fbnVtUGF0Y2hlcy54OyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5fbnVtUGF0Y2hlcy55OyBqKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCB4ID0gdGhpcy5fc3ViSW1hZ2VXcmFwcGVyLnNpemUueCAqIGk7XG4gICAgICAgICAgICAgICAgY29uc3QgeSA9IHRoaXMuX3N1YkltYWdlV3JhcHBlci5zaXplLnkgKiBqO1xuXG4gICAgICAgICAgICAgICAgLy8gc2VwZXJhdGUgcGFydHNcbiAgICAgICAgICAgICAgICB0aGlzLl9za2VsZXRvbml6ZSh4LCB5KTtcblxuICAgICAgICAgICAgICAgIC8vIFJhc3Rlcml6ZSwgZmluZCBpbmRpdmlkdWFsIGJhcnNcbiAgICAgICAgICAgICAgICB0aGlzLl9za2VsSW1hZ2VXcmFwcGVyLnplcm9Cb3JkZXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9sYWJlbEltYWdlV3JhcHBlci5kYXRhLmZpbGwoMCk7XG4gICAgICAgICAgICAgICAgY29uc3QgcmFzdGVyaXplciA9IG5ldyBSYXN0ZXJpemVyKHRoaXMuX3NrZWxJbWFnZVdyYXBwZXIsIHRoaXMuX2xhYmVsSW1hZ2VXcmFwcGVyKTtcbiAgICAgICAgICAgICAgICBjb25zdCByYXN0ZXJSZXN1bHQgPSByYXN0ZXJpemVyLnJhc3Rlcml6ZSgwKTtcblxuICAgICAgICAgICAgICAgIGlmIChkZWJ1ZyAmJiBkZWJ1Zy5zaG93TGFiZWxzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2xhYmVsSW1hZ2VXcmFwcGVyLm92ZXJsYXkodGhpcy5fYmluYXJ5Q29udGV4dCwgMzYwIC8gcmFzdGVyUmVzdWx0LmNvdW50IHwgMCwgeCwgeSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gY2FsY3VsYXRlIG1vbWVudHMgZnJvbSB0aGUgc2tlbGV0b25pemVkIHBhdGNoXG4gICAgICAgICAgICAgICAgY29uc3QgbW9tZW50cyA9IHRoaXMuX2xhYmVsSW1hZ2VXcmFwcGVyLm1vbWVudHMocmFzdGVyUmVzdWx0LmNvdW50KTtcblxuICAgICAgICAgICAgICAgIC8vIGV4dHJhY3QgZWxpZ2libGUgcGF0Y2hlc1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhdGNoID0gdGhpcy5fZGVzY3JpYmVQYXRjaChtb21lbnRzLCBqICogdGhpcy5fbnVtUGF0Y2hlcy54ICsgaSwgeCwgeSk7XG4gICAgICAgICAgICAgICAgaWYgKHBhdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGNoZXNGb3VuZC5wdXNoKHBhdGNoKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoZGVidWcgJiYgZGVidWcuc2hvd0ZvdW5kUGF0Y2hlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZHJhd1JlY3QocGF0Y2gucG9zLCB0aGlzLl9zdWJJbWFnZVdyYXBwZXIuc2l6ZSwgJyM5OWZmMDAnLCAyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYXRjaGVzRm91bmQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmluZHMgdGhvc2UgY29ubmVjdGVkIGFyZWFzIHdoaWNoIGNvbnRhaW4gYXQgbGVhc3QgNiBwYXRjaGVzXG4gICAgICogYW5kIHJldHVybnMgdGhlbSBvcmRlcmVkIERFU0MgYnkgdGhlIG51bWJlciBvZiBjb250YWluZWQgcGF0Y2hlc1xuICAgICAqIEBwYXJhbSBtYXhMYWJlbFxuICAgICAqL1xuICAgIHByaXZhdGUgX2ZpbmRCaWdnZXN0Q29ubmVjdGVkQXJlYXMobWF4TGFiZWw6IG51bWJlcik6IEFycmF5PG51bWJlcj4ge1xuICAgICAgICBsZXQgbGFiZWxIaXN0ID0gbmV3IEFycmF5PG51bWJlcj4obWF4TGFiZWwpLmZpbGwoMCk7XG5cbiAgICAgICAgdGhpcy5fcGF0Y2hMYWJlbEdyaWQuZGF0YS5mb3JFYWNoKChkYXRhOiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIGlmIChkYXRhID4gMCkge1xuICAgICAgICAgICAgICAgIGxhYmVsSGlzdFtkYXRhIC0gMV0rKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gZXh0cmFjdCB0b3AgYXJlYXMgd2l0aCBhdCBsZWFzdCA2IHBhdGNoZXMgcHJlc2VudFxuICAgICAgICBjb25zdCB0b3BMYWJlbHMgPSBsYWJlbEhpc3QubWFwKCh2YWx1ZSwgaW5kZXgpID0+ICh7IHZhbHVlLCBpbmRleCB9KSlcbiAgICAgICAgICAgIC5maWx0ZXIoKHsgdmFsdWUgfSkgPT4gdmFsdWUgPj0gNSkuc29ydCgoYSwgYikgPT4gYi52YWx1ZSAtIGEudmFsdWUpLm1hcCgoeyBpbmRleCB9KSA9PiBpbmRleCArIDEpO1xuXG4gICAgICAgIHJldHVybiB0b3BMYWJlbHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBwcml2YXRlIF9maW5kQm94ZXModG9wTGFiZWxzOiBBcnJheTxudW1iZXI+LCBtYXhMYWJlbDogbnVtYmVyKTogQXJyYXk8Qm94PiB7XG4gICAgICAgIGNvbnN0IGJveGVzID0gbmV3IEFycmF5PEJveD4oKTtcbiAgICAgICAgY29uc3Qgc2hvd1JlbWFpbmluZ1BhdGNoTGFiZWxzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJlxuICAgICAgICAgICAgdGhpcy5fY29uZmlnLmRlYnVnICYmIHRoaXMuX2NvbmZpZy5kZWJ1Zy5zaG93UmVtYWluaW5nUGF0Y2hMYWJlbHM7XG5cbiAgICAgICAgdG9wTGFiZWxzLmZvckVhY2gobGFiZWwgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGF0Y2hlcyA9IG5ldyBBcnJheTxQYXRjaD4oKTtcblxuICAgICAgICAgICAgdGhpcy5fcGF0Y2hMYWJlbEdyaWQuZGF0YS5mb3JFYWNoKChkYXRhOiBudW1iZXIsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YSA9PT0gbGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0Y2hlcy5wdXNoKHRoaXMuX2ltYWdlVG9QYXRjaEdyaWRbaW5kZXhdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc3QgYm94ID0gdGhpcy5fYm94RnJvbVBhdGNoZXMocGF0Y2hlcyk7XG5cbiAgICAgICAgICAgIGlmIChib3gpIHtcbiAgICAgICAgICAgICAgICBib3hlcy5wdXNoKGJveCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoc2hvd1JlbWFpbmluZ1BhdGNoTGFiZWxzKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGRyYXcgcGF0Y2gtbGFiZWxzIGlmIHJlcXVlc3RlZFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBoc3Y6IEhTViA9IFsobGFiZWwgLyAobWF4TGFiZWwgKyAxKSkgKiAzNjAsIDEsIDFdO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZ2I6IFJHQiA9IFswLCAwLCAwXTtcbiAgICAgICAgICAgICAgICAgICAgaHN2MnJnYihoc3YsIHJnYik7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29sb3IgPSBgcmdiKCR7cmdiLmpvaW4oJywnKX0pYDtcblxuICAgICAgICAgICAgICAgICAgICBwYXRjaGVzLmZvckVhY2goKHsgcG9zIH0pID0+IHRoaXMuX2RyYXdSZWN0KHBvcywgdGhpcy5fc3ViSW1hZ2VXcmFwcGVyLnNpemUsIGNvbG9yLCAyKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gYm94ZXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmluZCBzaW1pbGFyIG1vbWVudHMgKHZpYSBjbHVzdGVyKVxuICAgICAqIEBwYXJhbSBtb21lbnRzXG4gICAgICovXG4gICAgcHJpdmF0ZSBfc2ltaWxhck1vbWVudHMobW9tZW50czogQXJyYXk8TW9tZW50Pik6IEFycmF5PE1vbWVudD4ge1xuICAgICAgICBjb25zdCBjbHVzdGVycyA9IENsdXN0ZXIuY2x1c3Rlcml6ZShtb21lbnRzLCBNb21lbnRTaW1pbGFyaXR5VGhyZXNob2xkKTtcbiAgICAgICAgY29uc3QgdG9wQ2x1c3RlciA9IGNsdXN0ZXJzLnJlZHVjZSgodG9wLCBpdGVtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb3VudCA9IGl0ZW0ubW9tZW50cy5sZW5ndGg7XG4gICAgICAgICAgICByZXR1cm4gY291bnQgPiB0b3AuY291bnQgPyB7IGl0ZW0sIGNvdW50IH0gOiB0b3A7XG4gICAgICAgIH0sIHsgaXRlbTogeyBtb21lbnRzOiBbXSB9LCBjb3VudDogMCB9KTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdG9wQ2x1c3Rlci5pdGVtLm1vbWVudHM7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9za2VsZXRvbml6ZSh4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLl9iaW5hcnlJbWFnZVdyYXBwZXIuc3ViSW1hZ2VBc0NvcHkodGhpcy5fc3ViSW1hZ2VXcmFwcGVyLCB4LCB5KTtcbiAgICAgICAgdGhpcy5fc2tlbGV0b25pemVyLnNrZWxldG9uaXplKCk7XG5cbiAgICAgICAgLy8gU2hvdyBza2VsZXRvbiBpZiByZXF1ZXN0ZWRcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdGhpcy5fY29uZmlnLmRlYnVnICYmIHRoaXMuX2NvbmZpZy5kZWJ1Zy5zaG93U2tlbGV0b24pIHtcbiAgICAgICAgICAgIHRoaXMuX3NrZWxJbWFnZVdyYXBwZXIub3ZlcmxheSh0aGlzLl9iaW5hcnlDb250ZXh0LCAzNjAsIHgsIHkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXh0cmFjdHMgYW5kIGRlc2NyaWJlcyB0aG9zZSBwYXRjaGVzIHdoaWNoIHNlZW0gdG8gY29udGFpbiBhIGJhcmNvZGUgcGF0dGVyblxuICAgICAqIEBwYXJhbSBtb21lbnRzXG4gICAgICogQHBhcmFtIGluZGV4XG4gICAgICogQHBhcmFtIHhcbiAgICAgKiBAcGFyYW0geVxuICAgICAqIEByZXR1cm5zIGxpc3Qgb2YgcGF0Y2hlc1xuICAgICAqL1xuICAgIHByaXZhdGUgX2Rlc2NyaWJlUGF0Y2gobW9tZW50czogQXJyYXk8TW9tZW50PiwgaW5kZXg6IG51bWJlciwgeDogbnVtYmVyLCB5OiBudW1iZXIpOiBQYXRjaCB7XG4gICAgICAgIGlmIChtb21lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IG1pbkNvbXBvbmVudFdlaWdodCA9IE1hdGguY2VpbCh0aGlzLl9wYXRjaFNpemUueCAvIDMpO1xuICAgICAgICAgICAgLy8gb25seSBjb2xsZWN0IG1vbWVudHMgd2hpY2ggYXJlYSBjb3ZlcnMgYXQgbGVhc3QgbWluQ29tcG9uZW50V2VpZ2h0IHBpeGVsc1xuICAgICAgICAgICAgY29uc3QgZWxpZ2libGVNb21lbnRzID0gbW9tZW50cy5maWx0ZXIobW9tZW50ID0+IG1vbWVudC5tMDAgPiBtaW5Db21wb25lbnRXZWlnaHQpO1xuXG4gICAgICAgICAgICAvLyBpZiBhdCBsZWFzdCAyIG1vbWVudHMgYXJlIGZvdW5kIHdoaWNoIGhhdmUgYXQgbGVhc3QgbWluQ29tcG9uZW50V2VpZ2h0cyBjb3ZlcmVkXG4gICAgICAgICAgICBpZiAoZWxpZ2libGVNb21lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtYXRjaGluZ01vbWVudHMgPSB0aGlzLl9zaW1pbGFyTW9tZW50cyhlbGlnaWJsZU1vbWVudHMpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxlbmd0aCA9IG1hdGNoaW5nTW9tZW50cy5sZW5ndGggfCAwO1xuXG4gICAgICAgICAgICAgICAgLy8gT25seSB0d28gb2YgdGhlIG1vbWVudHMgYXJlIGFsbG93ZWQgbm90IHRvIGZpdCBpbnRvIHRoZSBlcXVhdGlvblxuICAgICAgICAgICAgICAgIGlmIChsZW5ndGggPiAxICYmIChsZW5ndGggPDwgMikgPj0gZWxpZ2libGVNb21lbnRzLmxlbmd0aCAqIDMgJiYgKGxlbmd0aCA8PCAyKSA+IG1vbWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGRldGVybWluZSB0aGUgc2ltaWxhcml0eSBvZiB0aGUgbW9tZW50c1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByYWQgPSBtYXRjaGluZ01vbWVudHMucmVkdWNlKChzdW06IG51bWJlciwgbW9tZW50OiBNb21lbnQpID0+IHN1bSArIG1vbWVudC5yYWQsIDApIC8gbGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvczogeyB4LCB5IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBib3g6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHgsIHkgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHg6IHggKyB0aGlzLl9zdWJJbWFnZVdyYXBwZXIuc2l6ZS54LCB5IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB4OiB4ICsgdGhpcy5fc3ViSW1hZ2VXcmFwcGVyLnNpemUueCwgeTogeSArIHRoaXMuX3N1YkltYWdlV3JhcHBlci5zaXplLnkgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHgsIHk6IHkgKyB0aGlzLl9zdWJJbWFnZVdyYXBwZXIuc2l6ZS55IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtb21lbnRzOiBtYXRjaGluZ01vbWVudHMsXG4gICAgICAgICAgICAgICAgICAgICAgICByYWQsXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBNYXRoLmNvcyhyYWQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgeTogTWF0aC5zaW4ocmFkKVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHByaXZhdGUgX25vdFlldFByb2Nlc3NlZCgpOiBudW1iZXIge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX3BhdGNoTGFiZWxHcmlkLmRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9wYXRjaExhYmVsR3JpZC5kYXRhW2ldID09PSAwICYmIHRoaXMuX3BhdGNoR3JpZC5kYXRhW2ldID09PSAxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhdGNoTGFiZWxHcmlkLmRhdGEubGVuZ3RoO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3RyYWNlKGN1cnJlbnRJbmRleDogbnVtYmVyLCBsYWJlbDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHRocmVzaG9sZCA9IDAuOTU7XG4gICAgICAgIGNvbnN0IGN1cnJlbnQ6IFBvaW50ID0ge1xuICAgICAgICAgICAgeDogY3VycmVudEluZGV4ICUgdGhpcy5fcGF0Y2hMYWJlbEdyaWQuc2l6ZS54LFxuICAgICAgICAgICAgeTogKGN1cnJlbnRJbmRleCAvIHRoaXMuX3BhdGNoTGFiZWxHcmlkLnNpemUueCkgfCAwXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGN1cnJlbnRJbmRleCA8IHRoaXMuX3BhdGNoTGFiZWxHcmlkLmRhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50UGF0Y2ggPSB0aGlzLl9pbWFnZVRvUGF0Y2hHcmlkW2N1cnJlbnRJbmRleF07XG4gICAgICAgICAgICAvLyBhc3NpZ24gbGFiZWxcbiAgICAgICAgICAgIHRoaXMuX3BhdGNoTGFiZWxHcmlkLmRhdGFbY3VycmVudEluZGV4XSA9IGxhYmVsO1xuXG4gICAgICAgICAgICBTZWFyY2hEaXJlY3Rpb25zLmZvckVhY2goZGlyZWN0aW9uID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB5ID0gY3VycmVudC55ICsgZGlyZWN0aW9uWzBdO1xuICAgICAgICAgICAgICAgIGNvbnN0IHggPSBjdXJyZW50LnggKyBkaXJlY3Rpb25bMV07XG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSB5ICogdGhpcy5fcGF0Y2hMYWJlbEdyaWQuc2l6ZS54ICsgeDtcblxuICAgICAgICAgICAgICAgIC8vIGNvbnRpbnVlIGlmIHBhdGNoIGVtcHR5XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3BhdGNoR3JpZC5kYXRhW2luZGV4XSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wYXRjaExhYmVsR3JpZC5kYXRhW2luZGV4XSA9IE51bWJlci5NQVhfVkFMVUU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9wYXRjaExhYmVsR3JpZC5kYXRhW2luZGV4XSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXRjaCA9IHRoaXMuX2ltYWdlVG9QYXRjaEdyaWRbaW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzaW1pbGFyaXR5ID0gTWF0aC5hYnMocGF0Y2gueCAqIGN1cnJlbnRQYXRjaC54ICsgcGF0Y2gueSAqIGN1cnJlbnRQYXRjaC55KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNpbWlsYXJpdHkgPiB0aHJlc2hvbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3RyYWNlKGluZGV4LCBsYWJlbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZpbmRzIHBhdGNoZXMgd2hpY2ggYXJlIGNvbm5lY3RlZCBhbmQgc2hhcmUgdGhlIHNhbWUgb3JpZW50YXRpb25cbiAgICAgKiBAcGFyYW0gcGF0Y2hlc0ZvdW5kXG4gICAgICovXG4gICAgcHJpdmF0ZSBfcmFzdGVyaXplQW5ndWxhclNpbWlsYXJpdHkocGF0Y2hlc0ZvdW5kOiBBcnJheTxQYXRjaD4pOiBudW1iZXIge1xuICAgICAgICBsZXQgbGFiZWwgPSAwO1xuICAgICAgICBjb25zdCBoc3Y6IEhTViA9IFswLCAxLCAxXTtcbiAgICAgICAgY29uc3QgcmdiOiBSR0IgPSBbMCwgMCwgMF07XG5cbiAgICAgICAgLy8gcHJlcGFyZSBmb3IgZmluZGluZyB0aGUgcmlnaHQgcGF0Y2hlc1xuICAgICAgICB0aGlzLl9wYXRjaEdyaWQuZGF0YS5maWxsKDApO1xuICAgICAgICB0aGlzLl9wYXRjaExhYmVsR3JpZC5kYXRhLmZpbGwoMCk7XG4gICAgICAgIHRoaXMuX2ltYWdlVG9QYXRjaEdyaWQuZmlsbChudWxsKTtcblxuICAgICAgICBwYXRjaGVzRm91bmQuZm9yRWFjaChwYXRjaCA9PiB7XG4gICAgICAgICAgICB0aGlzLl9pbWFnZVRvUGF0Y2hHcmlkW3BhdGNoLmluZGV4XSA9IHBhdGNoO1xuICAgICAgICAgICAgdGhpcy5fcGF0Y2hHcmlkLmRhdGFbcGF0Y2guaW5kZXhdID0gMTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gcmFzdGVyaXplIHRoZSBwYXRjaGVzIGZvdW5kIHRvIGRldGVybWluZSBhcmVhXG4gICAgICAgIHRoaXMuX3BhdGNoR3JpZC56ZXJvQm9yZGVyKCk7XG5cbiAgICAgICAgbGV0IGN1cnJlbnRJbmRleCA9IDA7XG4gICAgICAgIHdoaWxlICgoY3VycmVudEluZGV4ID0gdGhpcy5fbm90WWV0UHJvY2Vzc2VkKCkpIDwgdGhpcy5fcGF0Y2hMYWJlbEdyaWQuZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGxhYmVsKys7XG4gICAgICAgICAgICB0aGlzLl90cmFjZShjdXJyZW50SW5kZXgsIGxhYmVsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGRyYXcgcGF0Y2gtbGFiZWxzIGlmIHJlcXVlc3RlZFxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLl9jb25maWcuZGVidWcgJiYgdGhpcy5fY29uZmlnLmRlYnVnLnNob3dQYXRjaExhYmVscykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLl9wYXRjaExhYmVsR3JpZC5kYXRhLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3BhdGNoTGFiZWxHcmlkLmRhdGFbal0gPiAwICYmIHRoaXMuX3BhdGNoTGFiZWxHcmlkLmRhdGFbal0gPD0gbGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGF0Y2ggPSB0aGlzLl9pbWFnZVRvUGF0Y2hHcmlkW2pdO1xuICAgICAgICAgICAgICAgICAgICBoc3ZbMF0gPSAodGhpcy5fcGF0Y2hMYWJlbEdyaWQuZGF0YVtqXSAvIChsYWJlbCArIDEpKSAqIDM2MDtcbiAgICAgICAgICAgICAgICAgICAgaHN2MnJnYihoc3YsIHJnYik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2RyYXdSZWN0KHBhdGNoLnBvcywgdGhpcy5fc3ViSW1hZ2VXcmFwcGVyLnNpemUsIGByZ2IoJHtyZ2Iuam9pbignLCcpfSlgLCAyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbGFiZWw7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZHJhd1JlY3QoeyB4LCB5IH06IFBvaW50LCBzaXplOiBQb2ludCwgY29sb3I6IHN0cmluZywgbGluZVdpZHRoOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fYmluYXJ5Q29udGV4dC5zdHJva2VTdHlsZSA9IGNvbG9yO1xuICAgICAgICB0aGlzLl9iaW5hcnlDb250ZXh0LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgICAgICB0aGlzLl9iaW5hcnlDb250ZXh0LmxpbmVXaWR0aCA9IGxpbmVXaWR0aCB8fCAxO1xuICAgICAgICB0aGlzLl9iaW5hcnlDb250ZXh0LnN0cm9rZVJlY3QoeCwgeSwgc2l6ZS54LCBzaXplLnkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2RyYXdQYXRoKHBhdGg6IEFycmF5PFBvaW50PiwgY29sb3I6IHN0cmluZywgbGluZVdpZHRoOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgSW1hZ2VEZWJ1Zy5kcmF3UGF0aChwYXRoLCB0aGlzLl9iaW5hcnlDb250ZXh0LCBjb2xvciwgbGluZVdpZHRoKTtcbiAgICB9XG59XG4iLCIvKipcbiAqIEBib3Jyb3dzIGh0dHA6Ly93d3cuY29kZXByb2plY3QuY29tL1RpcHMvNDA3MTcyL0Nvbm5lY3RlZC1Db21wb25lbnQtTGFiZWxpbmctYW5kLVZlY3Rvcml6YXRpb25cbiAqL1xuXG5pbXBvcnQgeyBJbWFnZVdyYXBwZXIgfSBmcm9tICcuLi9jb21tb24vaW1hZ2Utd3JhcHBlcic7XG5pbXBvcnQgeyBDb250b3VyVmVydGV4LCBUcmFjZXIgfSBmcm9tICcuL3RyYWNlcic7XG5cbmVudW0gRWRnZUxhYmVsIHtcbiAgICBPdXRzaWRlID0gLTMyNzY3LFxuICAgIEluc2lkZSA9IC0zMjc2NlxufTtcblxuZW51bSBDb250b3VyRGlyZWN0aW9uIHtcbiAgICBDVyA9IDAsXG4gICAgQ0NXID0gMSxcbiAgICBVbmtub3duID0gMlxufTtcblxuaW50ZXJmYWNlIENvbnRvdXIge1xuICAgIGRpcjogQ29udG91ckRpcmVjdGlvbjtcbiAgICBpbmRleDogbnVtYmVyO1xuICAgIGZpcnN0VmVydGV4OiBDb250b3VyVmVydGV4O1xuICAgIHByZXZpb3VzUGVlcj86IENvbnRvdXI7XG4gICAgbmV4dFBlZXI/OiBDb250b3VyO1xuICAgIGluc2lkZUNvbnRvdXJzOiBDb250b3VyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJhc3RlclJlc3VsdCB7XG4gICAgY2M6IENvbnRvdXI7XG4gICAgY291bnQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIFJhc3Rlcml6ZXIge1xuICAgIHByaXZhdGUgX3dpZHRoOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfaGVpZ2h0OiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfdHJhY2VyOiBUcmFjZXI7XG4gICAgcHJpdmF0ZSBfaW1hZ2VEYXRhOiBVaW50OEFycmF5O1xuICAgIHByaXZhdGUgX2xhYmVsRGF0YTogQXJyYXk8bnVtYmVyPjtcblxuICAgIGNvbnN0cnVjdG9yKGltYWdlV3JhcHBlcjogSW1hZ2VXcmFwcGVyPFVpbnQ4QXJyYXk+LCBsYWJlbFdyYXBwZXI6IEltYWdlV3JhcHBlcjxBcnJheTxudW1iZXI+Pikge1xuICAgICAgICB0aGlzLl9pbWFnZURhdGEgPSBpbWFnZVdyYXBwZXIuZGF0YTtcbiAgICAgICAgdGhpcy5fbGFiZWxEYXRhID0gbGFiZWxXcmFwcGVyLmRhdGEgYXMgQXJyYXk8bnVtYmVyPjtcbiAgICAgICAgdGhpcy5fd2lkdGggPSBpbWFnZVdyYXBwZXIuc2l6ZS54O1xuICAgICAgICB0aGlzLl9oZWlnaHQgPSBpbWFnZVdyYXBwZXIuc2l6ZS55O1xuICAgICAgICB0aGlzLl90cmFjZXIgPSBuZXcgVHJhY2VyKGltYWdlV3JhcHBlciwgbGFiZWxXcmFwcGVyKTtcbiAgICB9XG5cbiAgICByYXN0ZXJpemUoZGVwdGhMYWJlbDogbnVtYmVyKTogUmFzdGVyUmVzdWx0IHtcbiAgICAgICAgY29uc3QgY29sb3JNYXAgPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDAwOyBpKyspIHtcbiAgICAgICAgICAgIGNvbG9yTWFwW2ldID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbG9yTWFwWzBdID0gdGhpcy5faW1hZ2VEYXRhWzBdO1xuXG4gICAgICAgIGxldCBjYzogQ29udG91ciA9IG51bGw7XG4gICAgICAgIGxldCBzYzogQ29udG91cjtcbiAgICAgICAgbGV0IGNvbm5lY3RlZENvdW50ID0gMDtcblxuICAgICAgICBmb3IgKGxldCBjeSA9IDE7IGN5IDwgdGhpcy5faGVpZ2h0IC0gMTsgY3krKykge1xuICAgICAgICAgICAgbGV0IGxhYmVsSW5kZXggPSAwO1xuICAgICAgICAgICAgbGV0IGJjID0gY29sb3JNYXBbMF07XG5cbiAgICAgICAgICAgIGZvciAobGV0IGN4ID0gMTsgY3ggPCB0aGlzLl93aWR0aCAtIDE7IGN4KyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwb3MgPSBjeSAqIHRoaXMuX3dpZHRoICsgY3g7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fbGFiZWxEYXRhW3Bvc10gPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29sb3IgPSB0aGlzLl9pbWFnZURhdGFbcG9zXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbG9yICE9PSBiYykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhYmVsSW5kZXggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYyA9IGNvbm5lY3RlZENvdW50ICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvck1hcFtsY10gPSBjb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYyA9IGNvbG9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZlcnRleCA9IHRoaXMuX3RyYWNlci5jb250b3VyVHJhY2luZyhjeSwgY3gsIGxjLCBjb2xvciwgRWRnZUxhYmVsLk91dHNpZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2ZXJ0ZXggIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29ubmVjdGVkQ291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxJbmRleCA9IGxjO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwOiBDb250b3VyID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyOiBDb250b3VyRGlyZWN0aW9uLkNXLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGxhYmVsSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdFZlcnRleDogdmVydGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFBlZXI6IGNjLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zaWRlQ29udG91cnM6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNjICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5wcmV2aW91c1BlZXIgPSBwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjID0gcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZlcnRleCA9IHRoaXMuX3RyYWNlci5jb250b3VyVHJhY2luZyhjeSwgY3gsIEVkZ2VMYWJlbC5JbnNpZGUsIGNvbG9yLCBsYWJlbEluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmVydGV4ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHA6IENvbnRvdXIgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXI6IGRlcHRoTGFiZWwgPT09IDAgPyBDb250b3VyRGlyZWN0aW9uLkNDVyA6IENvbnRvdXJEaXJlY3Rpb24uQ1csXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdFZlcnRleDogdmVydGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGRlcHRoTGFiZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNpZGVDb250b3VyczogbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYyA9IGNjO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAoKHNjICE9PSBudWxsKSAmJiBzYy5pbmRleCAhPT0gbGFiZWxJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2MgPSBzYy5uZXh0UGVlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2MgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAubmV4dFBlZXIgPSBzYy5pbnNpZGVDb250b3VycztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzYy5pbnNpZGVDb250b3VycyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjLmluc2lkZUNvbnRvdXJzLnByZXZpb3VzUGVlciA9IHA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYy5pbnNpZGVDb250b3VycyA9IHA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9sYWJlbERhdGFbcG9zXSA9IGxhYmVsSW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2xhYmVsRGF0YVtwb3NdID09PSBFZGdlTGFiZWwuSW5zaWRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsSW5kZXggPSAwO1xuICAgICAgICAgICAgICAgICAgICBiYyA9IHRoaXMuX2ltYWdlRGF0YVtwb3NdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5fbGFiZWxEYXRhW3Bvc10gPT09IEVkZ2VMYWJlbC5PdXRzaWRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsSW5kZXggPSAwO1xuICAgICAgICAgICAgICAgICAgICBiYyA9IGNvbG9yTWFwWzBdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsSW5kZXggPSB0aGlzLl9sYWJlbERhdGFbcG9zXTtcbiAgICAgICAgICAgICAgICAgICAgYmMgPSBjb2xvck1hcFtsYWJlbEluZGV4XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBzYyA9IGNjO1xuICAgICAgICB3aGlsZSAoc2MgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHNjLmluZGV4ID0gZGVwdGhMYWJlbDtcbiAgICAgICAgICAgIHNjID0gc2MubmV4dFBlZXI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY2MsXG4gICAgICAgICAgICBjb3VudDogY29ubmVjdGVkQ291bnRcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBkcmF3Q29udG91cihjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBmaXJzdENvbnRvdXI6IENvbnRvdXIpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSAncmVkJztcbiAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSAncmVkJztcbiAgICAgICAgY29udGV4dC5saW5lV2lkdGggPSAxO1xuXG4gICAgICAgIGxldCBwcSA9IGZpcnN0Q29udG91cjtcbiAgICAgICAgbGV0IGlxID0gcHEgJiYgcHEuaW5zaWRlQ29udG91cnM7XG5cbiAgICAgICAgd2hpbGUgKHBxICE9PSBudWxsKSB7XG4gICAgICAgICAgICBsZXQgcSA9IGlxIHx8IHBxO1xuXG4gICAgICAgICAgICBpZiAoaXEgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpcSA9IGlxLm5leHRQZWVyO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcSA9IHBxLm5leHRQZWVyO1xuICAgICAgICAgICAgICAgIGlxID0gcHEgJiYgcHEuaW5zaWRlQ29udG91cnM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHN3aXRjaCAocS5kaXIpIHtcbiAgICAgICAgICAgICAgICBjYXNlIENvbnRvdXJEaXJlY3Rpb24uQ1c6IHtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9ICdyZWQnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBDb250b3VyRGlyZWN0aW9uLkNDVzoge1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gJ2JsdWUnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBDb250b3VyRGlyZWN0aW9uLlVua25vd246IHtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9ICdncmVlbic7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHAgPSBxLmZpcnN0VmVydGV4O1xuICAgICAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGNvbnRleHQubW92ZVRvKHAueCwgcC55KTtcblxuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgIHAgPSBwLm5leHQ7XG4gICAgICAgICAgICAgICAgY29udGV4dC5saW5lVG8ocC54LCBwLnkpO1xuICAgICAgICAgICAgfSB3aGlsZSAocCAhPT0gcS5maXJzdFZlcnRleCk7XG5cbiAgICAgICAgICAgIGNvbnRleHQuc3Ryb2tlKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBlcWVxZXEgKi9cbmZ1bmN0aW9uIFNrZWxldG9uaXplcihzdGRsaWIsIGZvcmVpZ24sIGJ1ZmZlcikge1xuICAgIFwidXNlIGFzbVwiO1xuXG4gICAgdmFyIGltYWdlcyA9IG5ldyBzdGRsaWIuVWludDhBcnJheShidWZmZXIpLFxuICAgICAgICBzaXplID0gZm9yZWlnbi5zaXplIHwgMCxcbiAgICAgICAgaW11bCA9IHN0ZGxpYi5NYXRoLmltdWw7XG5cbiAgICBmdW5jdGlvbiBlcm9kZShpbkltYWdlUHRyLCBvdXRJbWFnZVB0cikge1xuICAgICAgICBpbkltYWdlUHRyID0gaW5JbWFnZVB0ciB8IDA7XG4gICAgICAgIG91dEltYWdlUHRyID0gb3V0SW1hZ2VQdHIgfCAwO1xuXG4gICAgICAgIHZhciB2ID0gMCxcbiAgICAgICAgICAgIHUgPSAwLFxuICAgICAgICAgICAgc3VtID0gMCxcbiAgICAgICAgICAgIHlTdGFydDEgPSAwLFxuICAgICAgICAgICAgeVN0YXJ0MiA9IDAsXG4gICAgICAgICAgICB4U3RhcnQxID0gMCxcbiAgICAgICAgICAgIHhTdGFydDIgPSAwLFxuICAgICAgICAgICAgb2Zmc2V0ID0gMDtcblxuICAgICAgICBmb3IgKHYgPSAxOyAodiB8IDApIDwgKChzaXplIC0gMSkgfCAwKTsgdiA9ICh2ICsgMSkgfCAwKSB7XG4gICAgICAgICAgICBvZmZzZXQgPSAob2Zmc2V0ICsgc2l6ZSkgfCAwO1xuICAgICAgICAgICAgZm9yICh1ID0gMTsgKHUgfCAwKSA8ICgoc2l6ZSAtIDEpIHwgMCk7IHUgPSAodSArIDEpIHwgMCkge1xuICAgICAgICAgICAgICAgIHlTdGFydDEgPSAob2Zmc2V0IC0gc2l6ZSkgfCAwO1xuICAgICAgICAgICAgICAgIHlTdGFydDIgPSAob2Zmc2V0ICsgc2l6ZSkgfCAwO1xuICAgICAgICAgICAgICAgIHhTdGFydDEgPSAodSAtIDEpIHwgMDtcbiAgICAgICAgICAgICAgICB4U3RhcnQyID0gKHUgKyAxKSB8IDA7XG4gICAgICAgICAgICAgICAgc3VtID0gKChpbWFnZXNbKGluSW1hZ2VQdHIgKyB5U3RhcnQxICsgeFN0YXJ0MSkgfCAwXSB8IDApXG4gICAgICAgICAgICAgICAgICAgICsgKGltYWdlc1soaW5JbWFnZVB0ciArIHlTdGFydDEgKyB4U3RhcnQyKSB8IDBdIHwgMClcbiAgICAgICAgICAgICAgICAgICAgKyAoaW1hZ2VzWyhpbkltYWdlUHRyICsgb2Zmc2V0ICsgdSkgfCAwXSB8IDApXG4gICAgICAgICAgICAgICAgICAgICsgKGltYWdlc1soaW5JbWFnZVB0ciArIHlTdGFydDIgKyB4U3RhcnQxKSB8IDBdIHwgMClcbiAgICAgICAgICAgICAgICAgICAgKyAoaW1hZ2VzWyhpbkltYWdlUHRyICsgeVN0YXJ0MiArIHhTdGFydDIpIHwgMF0gfCAwKSkgfCAwO1xuICAgICAgICAgICAgICAgIGlmICgoc3VtIHwgMCkgPT0gKDUgfCAwKSkge1xuICAgICAgICAgICAgICAgICAgICBpbWFnZXNbKG91dEltYWdlUHRyICsgb2Zmc2V0ICsgdSkgfCAwXSA9IDE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VzWyhvdXRJbWFnZVB0ciArIG9mZnNldCArIHUpIHwgMF0gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3VidHJhY3QoYUltYWdlUHRyLCBiSW1hZ2VQdHIsIG91dEltYWdlUHRyKSB7XG4gICAgICAgIGFJbWFnZVB0ciA9IGFJbWFnZVB0ciB8IDA7XG4gICAgICAgIGJJbWFnZVB0ciA9IGJJbWFnZVB0ciB8IDA7XG4gICAgICAgIG91dEltYWdlUHRyID0gb3V0SW1hZ2VQdHIgfCAwO1xuXG4gICAgICAgIHZhciBsZW5ndGggPSAwO1xuXG4gICAgICAgIGxlbmd0aCA9IGltdWwoc2l6ZSwgc2l6ZSkgfCAwO1xuXG4gICAgICAgIHdoaWxlICgobGVuZ3RoIHwgMCkgPiAwKSB7XG4gICAgICAgICAgICBsZW5ndGggPSAobGVuZ3RoIC0gMSkgfCAwO1xuICAgICAgICAgICAgaW1hZ2VzWyhvdXRJbWFnZVB0ciArIGxlbmd0aCkgfCAwXSA9XG4gICAgICAgICAgICAgICAgKChpbWFnZXNbKGFJbWFnZVB0ciArIGxlbmd0aCkgfCAwXSB8IDApIC0gKGltYWdlc1soYkltYWdlUHRyICsgbGVuZ3RoKSB8IDBdIHwgMCkpIHwgMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGJpdHdpc2VPcihhSW1hZ2VQdHIsIGJJbWFnZVB0ciwgb3V0SW1hZ2VQdHIpIHtcbiAgICAgICAgYUltYWdlUHRyID0gYUltYWdlUHRyIHwgMDtcbiAgICAgICAgYkltYWdlUHRyID0gYkltYWdlUHRyIHwgMDtcbiAgICAgICAgb3V0SW1hZ2VQdHIgPSBvdXRJbWFnZVB0ciB8IDA7XG5cbiAgICAgICAgdmFyIGxlbmd0aCA9IDA7XG5cbiAgICAgICAgbGVuZ3RoID0gaW11bChzaXplLCBzaXplKSB8IDA7XG5cbiAgICAgICAgd2hpbGUgKChsZW5ndGggfCAwKSA+IDApIHtcbiAgICAgICAgICAgIGxlbmd0aCA9IChsZW5ndGggLSAxKSB8IDA7XG4gICAgICAgICAgICBpbWFnZXNbKG91dEltYWdlUHRyICsgbGVuZ3RoKSB8IDBdID1cbiAgICAgICAgICAgICAgICAoKGltYWdlc1soYUltYWdlUHRyICsgbGVuZ3RoKSB8IDBdIHwgMCkgfCAoaW1hZ2VzWyhiSW1hZ2VQdHIgKyBsZW5ndGgpIHwgMF0gfCAwKSkgfCAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY291bnROb25aZXJvKGltYWdlUHRyKSB7XG4gICAgICAgIGltYWdlUHRyID0gaW1hZ2VQdHIgfCAwO1xuXG4gICAgICAgIHZhciBzdW0gPSAwLFxuICAgICAgICAgICAgbGVuZ3RoID0gMDtcblxuICAgICAgICBsZW5ndGggPSBpbXVsKHNpemUsIHNpemUpIHwgMDtcblxuICAgICAgICB3aGlsZSAoKGxlbmd0aCB8IDApID4gMCkge1xuICAgICAgICAgICAgbGVuZ3RoID0gKGxlbmd0aCAtIDEpIHwgMDtcbiAgICAgICAgICAgIHN1bSA9ICgoc3VtIHwgMCkgKyAoaW1hZ2VzWyhpbWFnZVB0ciArIGxlbmd0aCkgfCAwXSB8IDApKSB8IDA7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKHN1bSB8IDApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluaXQoaW1hZ2VQdHIsIHZhbHVlKSB7XG4gICAgICAgIGltYWdlUHRyID0gaW1hZ2VQdHIgfCAwO1xuICAgICAgICB2YWx1ZSA9IHZhbHVlIHwgMDtcblxuICAgICAgICB2YXIgbGVuZ3RoID0gMDtcblxuICAgICAgICBsZW5ndGggPSBpbXVsKHNpemUsIHNpemUpIHwgMDtcblxuICAgICAgICB3aGlsZSAoKGxlbmd0aCB8IDApID4gMCkge1xuICAgICAgICAgICAgbGVuZ3RoID0gKGxlbmd0aCAtIDEpIHwgMDtcbiAgICAgICAgICAgIGltYWdlc1soaW1hZ2VQdHIgKyBsZW5ndGgpIHwgMF0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpbGF0ZShpbkltYWdlUHRyLCBvdXRJbWFnZVB0cikge1xuICAgICAgICBpbkltYWdlUHRyID0gaW5JbWFnZVB0ciB8IDA7XG4gICAgICAgIG91dEltYWdlUHRyID0gb3V0SW1hZ2VQdHIgfCAwO1xuXG4gICAgICAgIHZhciB2ID0gMCxcbiAgICAgICAgICAgIHUgPSAwLFxuICAgICAgICAgICAgc3VtID0gMCxcbiAgICAgICAgICAgIHlTdGFydDEgPSAwLFxuICAgICAgICAgICAgeVN0YXJ0MiA9IDAsXG4gICAgICAgICAgICB4U3RhcnQxID0gMCxcbiAgICAgICAgICAgIHhTdGFydDIgPSAwLFxuICAgICAgICAgICAgb2Zmc2V0ID0gMDtcblxuICAgICAgICBmb3IgKHYgPSAxOyAodiB8IDApIDwgKChzaXplIC0gMSkgfCAwKTsgdiA9ICh2ICsgMSkgfCAwKSB7XG4gICAgICAgICAgICBvZmZzZXQgPSAob2Zmc2V0ICsgc2l6ZSkgfCAwO1xuICAgICAgICAgICAgZm9yICh1ID0gMTsgKHUgfCAwKSA8ICgoc2l6ZSAtIDEpIHwgMCk7IHUgPSAodSArIDEpIHwgMCkge1xuICAgICAgICAgICAgICAgIHlTdGFydDEgPSAob2Zmc2V0IC0gc2l6ZSkgfCAwO1xuICAgICAgICAgICAgICAgIHlTdGFydDIgPSAob2Zmc2V0ICsgc2l6ZSkgfCAwO1xuICAgICAgICAgICAgICAgIHhTdGFydDEgPSAodSAtIDEpIHwgMDtcbiAgICAgICAgICAgICAgICB4U3RhcnQyID0gKHUgKyAxKSB8IDA7XG4gICAgICAgICAgICAgICAgc3VtID0gKChpbWFnZXNbKGluSW1hZ2VQdHIgKyB5U3RhcnQxICsgeFN0YXJ0MSkgfCAwXSB8IDApXG4gICAgICAgICAgICAgICAgICAgICsgKGltYWdlc1soaW5JbWFnZVB0ciArIHlTdGFydDEgKyB4U3RhcnQyKSB8IDBdIHwgMClcbiAgICAgICAgICAgICAgICAgICAgKyAoaW1hZ2VzWyhpbkltYWdlUHRyICsgb2Zmc2V0ICsgdSkgfCAwXSB8IDApXG4gICAgICAgICAgICAgICAgICAgICsgKGltYWdlc1soaW5JbWFnZVB0ciArIHlTdGFydDIgKyB4U3RhcnQxKSB8IDBdIHwgMClcbiAgICAgICAgICAgICAgICAgICAgKyAoaW1hZ2VzWyhpbkltYWdlUHRyICsgeVN0YXJ0MiArIHhTdGFydDIpIHwgMF0gfCAwKSkgfCAwO1xuICAgICAgICAgICAgICAgIGlmICgoc3VtIHwgMCkgPiAoMCB8IDApKSB7XG4gICAgICAgICAgICAgICAgICAgIGltYWdlc1sob3V0SW1hZ2VQdHIgKyBvZmZzZXQgKyB1KSB8IDBdID0gMTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpbWFnZXNbKG91dEltYWdlUHRyICsgb2Zmc2V0ICsgdSkgfCAwXSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtZW1jcHkoc3JjSW1hZ2VQdHIsIGRzdEltYWdlUHRyKSB7XG4gICAgICAgIHNyY0ltYWdlUHRyID0gc3JjSW1hZ2VQdHIgfCAwO1xuICAgICAgICBkc3RJbWFnZVB0ciA9IGRzdEltYWdlUHRyIHwgMDtcblxuICAgICAgICB2YXIgbGVuZ3RoID0gMDtcblxuICAgICAgICBsZW5ndGggPSBpbXVsKHNpemUsIHNpemUpIHwgMDtcblxuICAgICAgICB3aGlsZSAoKGxlbmd0aCB8IDApID4gMCkge1xuICAgICAgICAgICAgbGVuZ3RoID0gKGxlbmd0aCAtIDEpIHwgMDtcbiAgICAgICAgICAgIGltYWdlc1soZHN0SW1hZ2VQdHIgKyBsZW5ndGgpIHwgMF0gPSAoaW1hZ2VzWyhzcmNJbWFnZVB0ciArIGxlbmd0aCkgfCAwXSB8IDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gemVyb0JvcmRlcihpbWFnZVB0cikge1xuICAgICAgICBpbWFnZVB0ciA9IGltYWdlUHRyIHwgMDtcblxuICAgICAgICB2YXIgeCA9IDAsXG4gICAgICAgICAgICB5ID0gMDtcblxuICAgICAgICBmb3IgKHggPSAwOyAoeCB8IDApIDwgKChzaXplIC0gMSkgfCAwKTsgeCA9ICh4ICsgMSkgfCAwKSB7XG4gICAgICAgICAgICBpbWFnZXNbKGltYWdlUHRyICsgeCkgfCAwXSA9IDA7XG4gICAgICAgICAgICBpbWFnZXNbKGltYWdlUHRyICsgeSkgfCAwXSA9IDA7XG4gICAgICAgICAgICB5ID0gKCh5ICsgc2l6ZSkgLSAxKSB8IDA7XG4gICAgICAgICAgICBpbWFnZXNbKGltYWdlUHRyICsgeSkgfCAwXSA9IDA7XG4gICAgICAgICAgICB5ID0gKHkgKyAxKSB8IDA7XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh4ID0gMDsgKHggfCAwKSA8IChzaXplIHwgMCk7IHggPSAoeCArIDEpIHwgMCkge1xuICAgICAgICAgICAgaW1hZ2VzWyhpbWFnZVB0ciArIHkpIHwgMF0gPSAwO1xuICAgICAgICAgICAgeSA9ICh5ICsgMSkgfCAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2tlbGV0b25pemUoKSB7XG4gICAgICAgIHZhciBzdWJJbWFnZVB0ciA9IDAsXG4gICAgICAgICAgICBlcm9kZWRJbWFnZVB0ciA9IDAsXG4gICAgICAgICAgICB0ZW1wSW1hZ2VQdHIgPSAwLFxuICAgICAgICAgICAgc2tlbEltYWdlUHRyID0gMCxcbiAgICAgICAgICAgIHN1bSA9IDAsXG4gICAgICAgICAgICBkb25lID0gMDtcblxuICAgICAgICBlcm9kZWRJbWFnZVB0ciA9IGltdWwoc2l6ZSwgc2l6ZSkgfCAwO1xuICAgICAgICB0ZW1wSW1hZ2VQdHIgPSAoZXJvZGVkSW1hZ2VQdHIgKyBlcm9kZWRJbWFnZVB0cikgfCAwO1xuICAgICAgICBza2VsSW1hZ2VQdHIgPSAodGVtcEltYWdlUHRyICsgZXJvZGVkSW1hZ2VQdHIpIHwgMDtcblxuICAgICAgICAvLyBpbml0IHNrZWwtaW1hZ2VcbiAgICAgICAgaW5pdChza2VsSW1hZ2VQdHIsIDApO1xuICAgICAgICB6ZXJvQm9yZGVyKHN1YkltYWdlUHRyKTtcblxuICAgICAgICBkbyB7XG4gICAgICAgICAgICBlcm9kZShzdWJJbWFnZVB0ciwgZXJvZGVkSW1hZ2VQdHIpO1xuICAgICAgICAgICAgZGlsYXRlKGVyb2RlZEltYWdlUHRyLCB0ZW1wSW1hZ2VQdHIpO1xuICAgICAgICAgICAgc3VidHJhY3Qoc3ViSW1hZ2VQdHIsIHRlbXBJbWFnZVB0ciwgdGVtcEltYWdlUHRyKTtcbiAgICAgICAgICAgIGJpdHdpc2VPcihza2VsSW1hZ2VQdHIsIHRlbXBJbWFnZVB0ciwgc2tlbEltYWdlUHRyKTtcbiAgICAgICAgICAgIG1lbWNweShlcm9kZWRJbWFnZVB0ciwgc3ViSW1hZ2VQdHIpO1xuICAgICAgICAgICAgc3VtID0gY291bnROb25aZXJvKHN1YkltYWdlUHRyKSB8IDA7XG4gICAgICAgICAgICBkb25lID0gKChzdW0gfCAwKSA9PSAwIHwgMCk7XG4gICAgICAgIH0gd2hpbGUgKCFkb25lKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBza2VsZXRvbml6ZTogc2tlbGV0b25pemVcbiAgICB9O1xufVxuZXhwb3J0IGRlZmF1bHQgU2tlbGV0b25pemVyO1xuLyogZXNsaW50LWVuYWJsZSBlcWVxZXEgKi9cbiIsImltcG9ydCB7IEltYWdlV3JhcHBlciB9IGZyb20gXCIuLi9jb21tb24vaW1hZ2Utd3JhcHBlclwiO1xuXG4vKipcbiAqIEBib3Jyb3dzIGh0dHA6Ly93d3cuY29kZXByb2plY3QuY29tL1RpcHMvNDA3MTcyL0Nvbm5lY3RlZC1Db21wb25lbnQtTGFiZWxpbmctYW5kLVZlY3Rvcml6YXRpb25cbiAqL1xuXG50eXBlIERpcmVjdGlvbiA9IG51bWJlcjtcblxuZXhwb3J0IGNvbnN0IFNlYXJjaERpcmVjdGlvbnM6IEFycmF5PEFycmF5PERpcmVjdGlvbj4+ID0gW1swLCAxXSwgWzEsIDFdLCBbMSwgMF0sIFsxLCAtMV0sIFswLCAtMV0sIFstMSwgLTFdLCBbLTEsIDBdLCBbLTEsIDFdXTtcblxuZXhwb3J0IGludGVyZmFjZSBDb250b3VyVmVydGV4IHtcbiAgICB4OiBudW1iZXIsXG4gICAgeTogbnVtYmVyLFxuICAgIGRpcjogRGlyZWN0aW9uLFxuICAgIG5leHQ6IENvbnRvdXJWZXJ0ZXgsXG4gICAgcHJldjogQ29udG91clZlcnRleFxufVxuXG5pbnRlcmZhY2UgQ3VycmVudCB7XG4gICAgY3g6IG51bWJlcixcbiAgICBjeTogbnVtYmVyLFxuICAgIGRpcjogRGlyZWN0aW9uXG59XG5cbmV4cG9ydCBjbGFzcyBUcmFjZXIge1xuICAgIHByaXZhdGUgX2ltYWdlRGF0YTogVWludDhBcnJheTtcbiAgICBwcml2YXRlIF9sYWJlbERhdGE6IEFycmF5PG51bWJlcj47XG4gICAgcHJpdmF0ZSBfd2lkdGg6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGltYWdlV3JhcHBlcjogSW1hZ2VXcmFwcGVyLCBsYWJlbFdyYXBwZXI6IEltYWdlV3JhcHBlcjxBcnJheTxudW1iZXI+Pikge1xuICAgICAgICB0aGlzLl9pbWFnZURhdGEgPSBpbWFnZVdyYXBwZXIuZGF0YTtcbiAgICAgICAgdGhpcy5fbGFiZWxEYXRhID0gbGFiZWxXcmFwcGVyLmRhdGEgYXMgQXJyYXk8bnVtYmVyPjtcbiAgICAgICAgdGhpcy5fd2lkdGggPSBpbWFnZVdyYXBwZXIuc2l6ZS54O1xuICAgIH1cblxuICAgIHRyYWNlKGN1cnJlbnQ6IEN1cnJlbnQsIGNvbG9yOiBudW1iZXIsIGxhYmVsOiBudW1iZXIsIGVkZ2VMYWJlbDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCB5ID0gY3VycmVudC5jeSArIFNlYXJjaERpcmVjdGlvbnNbY3VycmVudC5kaXJdWzBdIHwgMDtcbiAgICAgICAgICAgIGNvbnN0IHggPSBjdXJyZW50LmN4ICsgU2VhcmNoRGlyZWN0aW9uc1tjdXJyZW50LmRpcl1bMV0gfCAwO1xuICAgICAgICAgICAgY29uc3QgcG9zID0geSAqIHRoaXMuX3dpZHRoICsgeCB8IDA7XG5cbiAgICAgICAgICAgIGlmICgodGhpcy5faW1hZ2VEYXRhW3Bvc10gPT09IGNvbG9yKSAmJiAoKHRoaXMuX2xhYmVsRGF0YVtwb3NdID09PSAwKSB8fCAodGhpcy5fbGFiZWxEYXRhW3Bvc10gPT09IGxhYmVsKSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9sYWJlbERhdGFbcG9zXSA9IGxhYmVsO1xuICAgICAgICAgICAgICAgIGN1cnJlbnQuY3ggPSB4O1xuICAgICAgICAgICAgICAgIGN1cnJlbnQuY3kgPSB5O1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9sYWJlbERhdGFbcG9zXSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9sYWJlbERhdGFbcG9zXSA9IGVkZ2VMYWJlbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY3VycmVudC5kaXIgPSAoY3VycmVudC5kaXIgKyAxKSAlIDg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29udG91clRyYWNpbmcoc3k6IG51bWJlciwgc3g6IG51bWJlciwgbGFiZWw6IG51bWJlciwgY29sb3I6IG51bWJlciwgZWRnZUxhYmVsOiBudW1iZXIpOiBDb250b3VyVmVydGV4IHtcbiAgICAgICAgbGV0IEZ2OiBDb250b3VyVmVydGV4ID0gbnVsbDtcbiAgICAgICAgY29uc3QgY3VycmVudDogQ3VycmVudCA9IHtcbiAgICAgICAgICAgIGN4OiBzeCxcbiAgICAgICAgICAgIGN5OiBzeSxcbiAgICAgICAgICAgIGRpcjogMFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmICh0aGlzLnRyYWNlKGN1cnJlbnQsIGNvbG9yLCBsYWJlbCwgZWRnZUxhYmVsKSkge1xuICAgICAgICAgICAgRnYgPSB7XG4gICAgICAgICAgICAgICAgeDogc3gsXG4gICAgICAgICAgICAgICAgeTogc3ksXG4gICAgICAgICAgICAgICAgZGlyOiBjdXJyZW50LmRpcixcbiAgICAgICAgICAgICAgICBuZXh0OiBudWxsLFxuICAgICAgICAgICAgICAgIHByZXY6IG51bGxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBsZXQgQ3YgPSBGdjtcbiAgICAgICAgICAgIGxldCBsZGlyID0gY3VycmVudC5kaXI7XG4gICAgICAgICAgICBsZXQgUCA9IHtcbiAgICAgICAgICAgICAgICB4OiBjdXJyZW50LmN4LFxuICAgICAgICAgICAgICAgIHk6IGN1cnJlbnQuY3ksXG4gICAgICAgICAgICAgICAgZGlyOiAwLFxuICAgICAgICAgICAgICAgIG5leHQ6IG51bGwsXG4gICAgICAgICAgICAgICAgcHJldjogQ3ZcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBDdi5uZXh0ID0gUDtcbiAgICAgICAgICAgIEN2ID0gUDtcblxuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgIGN1cnJlbnQuZGlyID0gKGN1cnJlbnQuZGlyICsgNikgJSA4O1xuXG4gICAgICAgICAgICAgICAgdGhpcy50cmFjZShjdXJyZW50LCBjb2xvciwgbGFiZWwsIGVkZ2VMYWJlbCk7XG5cbiAgICAgICAgICAgICAgICBpZiAobGRpciAhPT0gY3VycmVudC5kaXIpIHtcbiAgICAgICAgICAgICAgICAgICAgQ3YuZGlyID0gY3VycmVudC5kaXI7XG4gICAgICAgICAgICAgICAgICAgIFAgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBjdXJyZW50LmN4LFxuICAgICAgICAgICAgICAgICAgICAgICAgeTogY3VycmVudC5jeSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcjogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHQ6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2OiBDdlxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBDdi5uZXh0ID0gUDtcbiAgICAgICAgICAgICAgICAgICAgQ3YgPSBQO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIEN2LmRpciA9IGxkaXI7XG4gICAgICAgICAgICAgICAgICAgIEN2LnggPSBjdXJyZW50LmN4O1xuICAgICAgICAgICAgICAgICAgICBDdi55ID0gY3VycmVudC5jeTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBsZGlyID0gY3VycmVudC5kaXI7XG4gICAgICAgICAgICB9IHdoaWxlIChjdXJyZW50LmN4ICE9PSBzeCB8fCBjdXJyZW50LmN5ICE9PSBzeSk7XG5cbiAgICAgICAgICAgIEZ2LnByZXYgPSBDdi5wcmV2O1xuICAgICAgICAgICAgQ3YucHJldi5uZXh0ID0gRnY7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEZ2O1xuICAgIH1cbn1cbiIsImltcG9ydCBfcG9seWZpbGxzIGZyb20gJy4vY29tbW9uL3BvbHlmaWxscyc7XG5pbXBvcnQgeyBSZXN1bHRDb2xsZWN0b3IgfSBmcm9tICcuL2FuYWx5dGljcy9yZXN1bHQtY29sbGVjdG9yJztcbmltcG9ydCB7IEJveCB9IGZyb20gJy4vY29tbW9uL2JveCc7XG5pbXBvcnQgeyBFdmVudENhbGxiYWNrLCBFdmVudHMsIEV2ZW50U3Vic2NyaXB0aW9uIH0gZnJvbSAnLi9jb21tb24vZXZlbnRzJztcbmltcG9ydCB7IEltYWdlRGVidWcgfSBmcm9tICcuL2NvbW1vbi9pbWFnZS1kZWJ1Zyc7XG5pbXBvcnQgeyBJbWFnZVdyYXBwZXIgfSBmcm9tICcuL2NvbW1vbi9pbWFnZS13cmFwcGVyJztcbmltcG9ydCB7IG1lcmdlIH0gZnJvbSAnLi9jb21tb24vbWVyZ2UnO1xuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuL2NvbW1vbi9wb2ludCc7XG5pbXBvcnQgeyBjb25maWcgYXMgZGVmYXVsdENvbmZpZywgUXVhZ2dhQ29uZmlnIH0gZnJvbSAnLi9jb25maWcvY29uZmlnJztcbmltcG9ydCB7IEJhcmNvZGVEZWNvZGVyLCBRdWFnZ2FCYXJjb2RlIH0gZnJvbSAnLi9kZWNvZGVyL2JhcmNvZGUtZGVjb2Rlcic7XG5pbXBvcnQgeyBDYW1lcmFBY2Nlc3MgfSBmcm9tICcuL2lucHV0L2NhbWVyYS1hY2Nlc3MnO1xuaW1wb3J0IHsgRnJhbWVHcmFiYmVyIH0gZnJvbSAnLi9pbnB1dC9mcmFtZS1ncmFiYmVyJztcbmltcG9ydCB7IEltYWdlU3RyZWFtIH0gZnJvbSAnLi9pbnB1dC9pbWFnZS1zdHJlYW0nO1xuaW1wb3J0IHsgSW5wdXRTdHJlYW0gfSBmcm9tICcuL2lucHV0L2lucHV0LXN0cmVhbSc7XG5pbXBvcnQgeyBMaXZlU3RyZWFtIH0gZnJvbSAnLi9pbnB1dC9saXZlLXN0cmVhbSc7XG5pbXBvcnQgeyBWaWRlb1N0cmVhbSB9IGZyb20gJy4vaW5wdXQvdmlkZW8tc3RyZWFtJztcbmltcG9ydCB7IGNoZWNrSW1hZ2VDb25zdHJhaW50cyB9IGZyb20gJy4vaW5wdXQvaW5wdXQtc3RyZWFtLXV0aWxzJztcbmltcG9ydCB7IEJhcmNvZGVMb2NhdG9yIH0gZnJvbSAnLi9sb2NhdG9yL2JhcmNvZGUtbG9jYXRvcic7XG5pbXBvcnQgeyBCYXJjb2RlUmVhZGVyRGVjbGFyYXRpb24gfSBmcm9tICcuL3JlYWRlci9iYXJjb2RlLXJlYWRlcic7XG5cbmxldCBfX2ZhY3RvcnlTb3VyY2VfXzogc3RyaW5nO1xuXG5pbnRlcmZhY2UgV29ya2VyVGhyZWFkIHtcbiAgICB3b3JrZXI6IFdvcmtlcjtcbiAgICBpbWFnZURhdGE6IFVpbnQ4QXJyYXk7XG4gICAgYnVzeTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBRdWFnZ2FDYW52YXNDb250YWluZXIge1xuICAgIGN0eDoge1xuICAgICAgICBpbWFnZTogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELFxuICAgICAgICBvdmVybGF5OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkRcbiAgICB9LFxuICAgIGRvbToge1xuICAgICAgICBpbWFnZTogSFRNTENhbnZhc0VsZW1lbnQsXG4gICAgICAgIG92ZXJsYXk6IEhUTUxDYW52YXNFbGVtZW50XG4gICAgfVxufVxuXG5sZXQgX2lucHV0U3RyZWFtOiBJbnB1dFN0cmVhbTtcbmxldCBfZnJhbWVHcmFiYmVyOiBGcmFtZUdyYWJiZXI7XG5sZXQgX3N0b3BwZWQ6IGJvb2xlYW47XG5jb25zdCBfY2FudmFzQ29udGFpbmVyOiBRdWFnZ2FDYW52YXNDb250YWluZXIgPSB7XG4gICAgY3R4OiB7XG4gICAgICAgIGltYWdlOiBudWxsLFxuICAgICAgICBvdmVybGF5OiBudWxsXG4gICAgfSxcbiAgICBkb206IHtcbiAgICAgICAgaW1hZ2U6IG51bGwsXG4gICAgICAgIG92ZXJsYXk6IG51bGxcbiAgICB9XG59O1xubGV0IF9pbnB1dEltYWdlV3JhcHBlcjogSW1hZ2VXcmFwcGVyO1xubGV0IF9sb2NhdG9yOiBCYXJjb2RlTG9jYXRvcjtcbmxldCBfYm94U2l6ZTogQm94O1xubGV0IF9kZWNvZGVyOiBCYXJjb2RlRGVjb2RlcjtcbmxldCBfd29ya2VyUG9vbCA9IG5ldyBBcnJheTxXb3JrZXJUaHJlYWQ+KCk7XG5sZXQgX29uVUlUaHJlYWQ6IGJvb2xlYW47XG5sZXQgX3Jlc3VsdENvbGxlY3RvcjogUmVzdWx0Q29sbGVjdG9yO1xubGV0IF9jb25maWc6IFF1YWdnYUNvbmZpZztcblxuZXhwb3J0IGNvbnN0IFF1YWdnYSA9IHtcbiAgICBpbml0KGNvbmZpZzogUXVhZ2dhQ29uZmlnLCBjYjogKCkgPT4gdm9pZCwgaW1hZ2VXcmFwcGVyPzogSW1hZ2VXcmFwcGVyKSB7XG4gICAgICAgIF9vblVJVGhyZWFkID0gdHJ1ZTtcbiAgICAgICAgX2NvbmZpZyA9IG1lcmdlKGRlZmF1bHRDb25maWcsIGNvbmZpZyk7XG4gICAgICAgIGlmIChpbWFnZVdyYXBwZXIpIHtcbiAgICAgICAgICAgIF9vblVJVGhyZWFkID0gZmFsc2U7XG4gICAgICAgICAgICBfaW5pdGlhbGl6ZURhdGEoaW1hZ2VXcmFwcGVyKTtcbiAgICAgICAgICAgIGNiKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfaW5pdElucHV0U3RyZWFtKGNiKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBDYW1lcmFBY2Nlc3M6IENhbWVyYUFjY2VzcyxcblxuICAgIEltYWdlRGVidWc6IEltYWdlRGVidWcsXG5cbiAgICBJbWFnZVdyYXBwZXI6IEltYWdlV3JhcHBlcixcblxuICAgIFJlc3VsdENvbGxlY3RvcjogUmVzdWx0Q29sbGVjdG9yLFxuXG4gICAgZ2V0IGNhbnZhcygpOiBRdWFnZ2FDYW52YXNDb250YWluZXIge1xuICAgICAgICByZXR1cm4gX2NhbnZhc0NvbnRhaW5lcjtcbiAgICB9LFxuXG4gICAgc3RhcnQoKTogdm9pZCB7XG4gICAgICAgIGlmIChfb25VSVRocmVhZCAmJiBfY29uZmlnLmlucHV0U3RyZWFtLnR5cGUgPT09ICdMaXZlU3RyZWFtJykge1xuICAgICAgICAgICAgX3N0YXJ0Q29udGludW91c1VwZGF0ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX3VwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHN0b3AoKTogdm9pZCB7XG4gICAgICAgIF9zdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgX2FkanVzdFdvcmtlclBvb2woMCk7XG4gICAgICAgIGlmIChfY29uZmlnLmlucHV0U3RyZWFtLnR5cGUgPT09ICdMaXZlU3RyZWFtJykge1xuICAgICAgICAgICAgQ2FtZXJhQWNjZXNzLnJlbGVhc2UoKTtcbiAgICAgICAgICAgIF9pbnB1dFN0cmVhbS5jbGVhckV2ZW50SGFuZGxlcnMoKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBkZWNvZGVTaW5nbGUoY29uZmlnOiBRdWFnZ2FDb25maWcsIHJlc3VsdENhbGxiYWNrOiAoXzogUXVhZ2dhQmFyY29kZSkgPT4gdm9pZCk6IHZvaWQge1xuICAgICAgICBjb25maWcgPSBtZXJnZSh7XG4gICAgICAgICAgICBpbnB1dFN0cmVhbToge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdJbWFnZVN0cmVhbScsXG4gICAgICAgICAgICAgICAgc2VxdWVuY2U6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNpemU6IDgwMCxcbiAgICAgICAgICAgICAgICBzcmM6IGNvbmZpZy5zcmNcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBudW1PZldvcmtlcnM6IChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGNvbmZpZy5kZWJ1ZykgPyAwIDogMSxcbiAgICAgICAgICAgIGxvY2F0b3I6IHtcbiAgICAgICAgICAgICAgICBoYWxmU2FtcGxlOiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCBjb25maWcpO1xuXG4gICAgICAgIFF1YWdnYS5pbml0KGNvbmZpZywgKCkgPT4ge1xuICAgICAgICAgICAgRXZlbnRzLm9uY2UoJ3Byb2Nlc3NlZCcsIChyZXN1bHQ6IFF1YWdnYUJhcmNvZGUpID0+IHtcbiAgICAgICAgICAgICAgICBRdWFnZ2Euc3RvcCgpO1xuICAgICAgICAgICAgICAgIHJlc3VsdENhbGxiYWNrLmNhbGwobnVsbCwgcmVzdWx0KTtcbiAgICAgICAgICAgIH0sIHRydWUpO1xuICAgICAgICAgICAgUXVhZ2dhLnN0YXJ0KCk7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBwYXVzZSgpOiB2b2lkIHtcbiAgICAgICAgX3N0b3BwZWQgPSB0cnVlO1xuICAgIH0sXG5cbiAgICBvbkRldGVjdGVkKGNhbGxiYWNrOiBFdmVudFN1YnNjcmlwdGlvbiB8IEV2ZW50Q2FsbGJhY2spOiB2b2lkIHtcbiAgICAgICAgRXZlbnRzLnN1YnNjcmliZSgnZGV0ZWN0ZWQnLCBjYWxsYmFjayk7XG4gICAgfSxcblxuICAgIG9mZkRldGVjdGVkKGNhbGxiYWNrOiBFdmVudENhbGxiYWNrKTogdm9pZCB7XG4gICAgICAgIEV2ZW50cy51bnN1YnNjcmliZSgnZGV0ZWN0ZWQnLCBjYWxsYmFjayk7XG4gICAgfSxcblxuICAgIG9uUHJvY2Vzc2VkKGNhbGxiYWNrOiBFdmVudFN1YnNjcmlwdGlvbiB8IEV2ZW50Q2FsbGJhY2spOiB2b2lkIHtcbiAgICAgICAgRXZlbnRzLnN1YnNjcmliZSgncHJvY2Vzc2VkJywgY2FsbGJhY2spO1xuICAgIH0sXG5cbiAgICBvZmZQcm9jZXNzZWQoY2FsbGJhY2s6IEV2ZW50Q2FsbGJhY2spOiB2b2lkIHtcbiAgICAgICAgRXZlbnRzLnVuc3Vic2NyaWJlKCdwcm9jZXNzZWQnLCBjYWxsYmFjayk7XG4gICAgfSxcblxuICAgIHNldFJlYWRlcnMocmVhZGVyczogQXJyYXk8QmFyY29kZVJlYWRlckRlY2xhcmF0aW9uPik6IHZvaWQge1xuICAgICAgICBpZiAoX2RlY29kZXIpIHtcbiAgICAgICAgICAgIF9kZWNvZGVyLnNldFJlYWRlcnMocmVhZGVycyk7XG4gICAgICAgIH0gZWxzZSBpZiAoX29uVUlUaHJlYWQgJiYgX3dvcmtlclBvb2wubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgX3dvcmtlclBvb2wuZm9yRWFjaCgoeyB3b3JrZXIgfSkgPT4gd29ya2VyLnBvc3RNZXNzYWdlKHsgY21kOiAnc2V0UmVhZGVycycsIHJlYWRlcnMgfSkpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHJlZ2lzdGVyUmVzdWx0Q29sbGVjdG9yKHJlc3VsdENvbGxlY3RvcjogUmVzdWx0Q29sbGVjdG9yKTogdm9pZCB7XG4gICAgICAgIGlmIChyZXN1bHRDb2xsZWN0b3IgJiYgdHlwZW9mIHJlc3VsdENvbGxlY3Rvci5hZGRSZXN1bHQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIF9yZXN1bHRDb2xsZWN0b3IgPSByZXN1bHRDb2xsZWN0b3I7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5mdW5jdGlvbiBfaW5pdGlhbGl6ZURhdGEoaW1hZ2VXcmFwcGVyPzogSW1hZ2VXcmFwcGVyKTogdm9pZCB7XG4gICAgX2luaXRCdWZmZXJzKGltYWdlV3JhcHBlcik7XG4gICAgX2RlY29kZXIgPSBuZXcgQmFyY29kZURlY29kZXIoX2NvbmZpZy5kZWNvZGVyLCBfaW5wdXRJbWFnZVdyYXBwZXIpO1xufVxuXG5mdW5jdGlvbiBfaW5pdElucHV0U3RyZWFtKGNhbGxiYWNrOiAoZXJyPzogYW55KSA9PiB2b2lkKTogdm9pZCB7XG4gICAgbGV0IHZpZGVvOiBIVE1MVmlkZW9FbGVtZW50O1xuICAgIGlmIChfY29uZmlnLmlucHV0U3RyZWFtLnR5cGUgPT09ICdWaWRlb1N0cmVhbScpIHtcbiAgICAgICAgdmlkZW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2aWRlbycpO1xuICAgICAgICBfaW5wdXRTdHJlYW0gPSBuZXcgVmlkZW9TdHJlYW0odmlkZW8pO1xuICAgIH0gZWxzZSBpZiAoX2NvbmZpZy5pbnB1dFN0cmVhbS50eXBlID09PSAnSW1hZ2VTdHJlYW0nKSB7XG4gICAgICAgIF9pbnB1dFN0cmVhbSA9IG5ldyBJbWFnZVN0cmVhbSgpO1xuICAgIH0gZWxzZSBpZiAoX2NvbmZpZy5pbnB1dFN0cmVhbS50eXBlID09PSAnTGl2ZVN0cmVhbScpIHtcbiAgICAgICAgY29uc3Qgdmlld3BvcnQgPSBfZ2V0Vmlld1BvcnQoKTtcbiAgICAgICAgaWYgKHZpZXdwb3J0KSB7XG4gICAgICAgICAgICB2aWRlbyA9IHZpZXdwb3J0LnF1ZXJ5U2VsZWN0b3IoJ3ZpZGVvJyk7XG4gICAgICAgICAgICBpZiAoIXZpZGVvKSB7XG4gICAgICAgICAgICAgICAgdmlkZW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2aWRlbycpO1xuICAgICAgICAgICAgICAgIHZpZXdwb3J0LmFwcGVuZENoaWxkKHZpZGVvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBfaW5wdXRTdHJlYW0gPSBuZXcgTGl2ZVN0cmVhbSh2aWRlbyk7XG4gICAgICAgIENhbWVyYUFjY2Vzcy5yZXF1ZXN0KHZpZGVvLCBfY29uZmlnLmlucHV0U3RyZWFtLmNvbnN0cmFpbnRzKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gX2lucHV0U3RyZWFtLnRyaWdnZXIoJ2NhbnJlY29yZCcpLCBlcnIgPT4gY2FsbGJhY2soZXJyKSk7XG4gICAgfVxuXG4gICAgX2lucHV0U3RyZWFtLnNldEF0dHJpYnV0ZSgncHJlbG9hZCcsICdhdXRvJyk7XG4gICAgX2lucHV0U3RyZWFtLmNvbmZpZyA9IF9jb25maWcuaW5wdXRTdHJlYW07XG4gICAgX2lucHV0U3RyZWFtLmFkZEV2ZW50TGlzdGVuZXIoJ2NhbnJlY29yZCcsIF9jYW5SZWNvcmQuYmluZCh0aGlzLCBjYWxsYmFjaykpO1xufVxuXG5mdW5jdGlvbiBfZ2V0Vmlld1BvcnQoKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IHRhcmdldCA9IF9jb25maWcuaW5wdXRTdHJlYW0udGFyZ2V0O1xuICAgIC8vIENoZWNrIGlmIHRhcmdldCBpcyBhbHJlYWR5IGEgRE9NIGVsZW1lbnRcbiAgICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBVc2UgJyNpbnRlcmFjdGl2ZS52aWV3cG9ydCcgYXMgYSBmYWxsYmFjayBzZWxlY3RvciAoYmFja3dhcmRzIGNvbXBhdGliaWxpdHkpXG4gICAgICAgIGNvbnN0IHNlbGVjdG9yID0gdHlwZW9mIHRhcmdldCA9PT0gJ3N0cmluZycgPyB0YXJnZXQgOiAnI2ludGVyYWN0aXZlLnZpZXdwb3J0JztcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gX2NhblJlY29yZChjYjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIGNoZWNrSW1hZ2VDb25zdHJhaW50cyhfaW5wdXRTdHJlYW0sIF9jb25maWcubG9jYXRvcik7XG4gICAgX2luaXRDYW52YXMoKTtcbiAgICBfZnJhbWVHcmFiYmVyID0gbmV3IEZyYW1lR3JhYmJlcihfaW5wdXRTdHJlYW0sIF9jYW52YXNDb250YWluZXIuZG9tLmltYWdlKTtcblxuICAgIF9hZGp1c3RXb3JrZXJQb29sKF9jb25maWcubnVtT2ZXb3JrZXJzLCAoKSA9PiB7XG4gICAgICAgIGlmIChfY29uZmlnLm51bU9mV29ya2VycyA9PT0gMCkge1xuICAgICAgICAgICAgX2luaXRpYWxpemVEYXRhKCk7XG4gICAgICAgIH1cblxuICAgICAgICBfaW5wdXRTdHJlYW0ucGxheSgpO1xuICAgICAgICBjYigpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBfaW5pdENhbnZhcygpOiB2b2lkIHtcbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zdCB2aWV3cG9ydCA9IF9nZXRWaWV3UG9ydCgpO1xuICAgICAgICBfY2FudmFzQ29udGFpbmVyLmRvbS5pbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbnZhcy5pbWdCdWZmZXInKTtcbiAgICAgICAgaWYgKCFfY2FudmFzQ29udGFpbmVyLmRvbS5pbWFnZSkge1xuICAgICAgICAgICAgX2NhbnZhc0NvbnRhaW5lci5kb20uaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgICAgIF9jYW52YXNDb250YWluZXIuZG9tLmltYWdlLmNsYXNzTmFtZSA9ICdpbWdCdWZmZXInO1xuICAgICAgICAgICAgaWYgKHZpZXdwb3J0ICYmIF9jb25maWcuaW5wdXRTdHJlYW0udHlwZSA9PT0gJ0ltYWdlU3RyZWFtJykge1xuICAgICAgICAgICAgICAgIHZpZXdwb3J0LmFwcGVuZENoaWxkKF9jYW52YXNDb250YWluZXIuZG9tLmltYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBfY2FudmFzQ29udGFpbmVyLmN0eC5pbWFnZSA9IF9jYW52YXNDb250YWluZXIuZG9tLmltYWdlLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIF9jYW52YXNDb250YWluZXIuZG9tLmltYWdlLndpZHRoID0gX2lucHV0U3RyZWFtLmNhbnZhc1dpZHRoO1xuICAgICAgICBfY2FudmFzQ29udGFpbmVyLmRvbS5pbWFnZS5oZWlnaHQgPSBfaW5wdXRTdHJlYW0uY2FudmFzSGVpZ2h0O1xuXG4gICAgICAgIF9jYW52YXNDb250YWluZXIuZG9tLm92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjYW52YXMuZHJhd2luZ0J1ZmZlcicpO1xuICAgICAgICBpZiAoIV9jYW52YXNDb250YWluZXIuZG9tLm92ZXJsYXkpIHtcbiAgICAgICAgICAgIF9jYW52YXNDb250YWluZXIuZG9tLm92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgICAgIF9jYW52YXNDb250YWluZXIuZG9tLm92ZXJsYXkuY2xhc3NOYW1lID0gJ2RyYXdpbmdCdWZmZXInO1xuICAgICAgICAgICAgaWYgKHZpZXdwb3J0KSB7XG4gICAgICAgICAgICAgICAgdmlld3BvcnQuYXBwZW5kQ2hpbGQoX2NhbnZhc0NvbnRhaW5lci5kb20ub3ZlcmxheSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBjbGVhckZpeCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7XG4gICAgICAgICAgICBjbGVhckZpeC5zZXRBdHRyaWJ1dGUoJ2NsZWFyJywgJ2FsbCcpO1xuICAgICAgICAgICAgaWYgKHZpZXdwb3J0KSB7XG4gICAgICAgICAgICAgICAgdmlld3BvcnQuYXBwZW5kQ2hpbGQoY2xlYXJGaXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIF9jYW52YXNDb250YWluZXIuY3R4Lm92ZXJsYXkgPSBfY2FudmFzQ29udGFpbmVyLmRvbS5vdmVybGF5LmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIF9jYW52YXNDb250YWluZXIuZG9tLm92ZXJsYXkud2lkdGggPSBfaW5wdXRTdHJlYW0uY2FudmFzV2lkdGg7XG4gICAgICAgIF9jYW52YXNDb250YWluZXIuZG9tLm92ZXJsYXkuaGVpZ2h0ID0gX2lucHV0U3RyZWFtLmNhbnZhc0hlaWdodDtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIF9pbml0QnVmZmVycyhpbWFnZVdyYXBwZXI/OiBJbWFnZVdyYXBwZXIpOiB2b2lkIHtcbiAgICBpZiAoaW1hZ2VXcmFwcGVyKSB7XG4gICAgICAgIF9pbnB1dEltYWdlV3JhcHBlciA9IGltYWdlV3JhcHBlcjtcbiAgICB9IGVsc2Uge1xuICAgICAgICBfaW5wdXRJbWFnZVdyYXBwZXIgPSBuZXcgSW1hZ2VXcmFwcGVyKHtcbiAgICAgICAgICAgIHg6IF9pbnB1dFN0cmVhbS53aWR0aCxcbiAgICAgICAgICAgIHk6IF9pbnB1dFN0cmVhbS5oZWlnaHRcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc29sZS5sb2coX2lucHV0SW1hZ2VXcmFwcGVyLnNpemUpO1xuICAgIH1cbiAgICBfYm94U2l6ZSA9IFtcbiAgICAgICAgeyB4OiAwLCB5OiAwIH0sXG4gICAgICAgIHsgeDogMCwgeTogX2lucHV0SW1hZ2VXcmFwcGVyLnNpemUueSB9LFxuICAgICAgICB7IHg6IF9pbnB1dEltYWdlV3JhcHBlci5zaXplLngsIHk6IF9pbnB1dEltYWdlV3JhcHBlci5zaXplLnkgfSxcbiAgICAgICAgeyB4OiBfaW5wdXRJbWFnZVdyYXBwZXIuc2l6ZS54LCB5OiAwIH1cbiAgICBdO1xuICAgIF9sb2NhdG9yID0gbmV3IEJhcmNvZGVMb2NhdG9yKF9pbnB1dEltYWdlV3JhcHBlciwgX2NvbmZpZy5sb2NhdG9yKTtcbn1cblxuZnVuY3Rpb24gX2dldEJvdW5kaW5nQm94ZXMoKTogQXJyYXk8Qm94PiB7XG4gICAgaWYgKF9jb25maWcubG9jYXRlKSB7XG4gICAgICAgIHJldHVybiBfbG9jYXRvci5sb2NhdGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gW1tcbiAgICAgICAgICAgIF9ib3hTaXplWzBdLFxuICAgICAgICAgICAgX2JveFNpemVbMV0sXG4gICAgICAgICAgICBfYm94U2l6ZVsyXSxcbiAgICAgICAgICAgIF9ib3hTaXplWzNdXG4gICAgICAgIF1dO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gX3RyYW5zZm9ybShwb2x5Z29uOiBSZWFkb25seUFycmF5PFBvaW50Piwgb2Zmc2V0OiBQb2ludCk6IHZvaWQge1xuICAgIHBvbHlnb24uZm9yRWFjaCh2ZXJ0ZXggPT4ge1xuICAgICAgICB2ZXJ0ZXgueCArPSBvZmZzZXQueDtcbiAgICAgICAgdmVydGV4LnkgKz0gb2Zmc2V0Lnk7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gX3RyYW5zZm9ybVJlc3VsdChyZXN1bHQ6IFF1YWdnYUJhcmNvZGUsIG9mZnNldDogUG9pbnQpOiB2b2lkIHtcbiAgICBpZiAocmVzdWx0LmJhcmNvZGVzKSB7XG4gICAgICAgIHJlc3VsdC5iYXJjb2Rlcy5mb3JFYWNoKGJhcmNvZGUgPT4gX3RyYW5zZm9ybVJlc3VsdChiYXJjb2RlLCBvZmZzZXQpKTtcbiAgICB9XG5cbiAgICBpZiAocmVzdWx0LmxpbmUpIHtcbiAgICAgICAgX3RyYW5zZm9ybShyZXN1bHQubGluZSwgb2Zmc2V0KTtcbiAgICB9XG5cbiAgICBpZiAocmVzdWx0LmJveCkge1xuICAgICAgICBfdHJhbnNmb3JtKHJlc3VsdC5ib3gsIG9mZnNldCk7XG4gICAgfVxuXG4gICAgaWYgKHJlc3VsdC5ib3hlcykge1xuICAgICAgICByZXN1bHQuYm94ZXMuZm9yRWFjaChib3ggPT4gX3RyYW5zZm9ybShib3gsIG9mZnNldCkpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gX2FkZFJlc3VsdChyZXN1bHQ6IFF1YWdnYUJhcmNvZGUsIGltYWdlRGF0YTogVWludDhBcnJheSwgY2FudmFzV2lkdGg6IG51bWJlciwgY2FudmFzSGVpZ2h0OiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAoaW1hZ2VEYXRhICYmIF9yZXN1bHRDb2xsZWN0b3IpIHtcbiAgICAgICAgaWYgKHJlc3VsdC5iYXJjb2Rlcykge1xuICAgICAgICAgICAgcmVzdWx0LmJhcmNvZGVzLmZvckVhY2goKHsgY29kZVJlc3VsdCB9KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGNvZGVSZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgX3Jlc3VsdENvbGxlY3Rvci5hZGRSZXN1bHQoaW1hZ2VEYXRhLCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0LCBjb2RlUmVzdWx0KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5jb2RlUmVzdWx0KSB7XG4gICAgICAgICAgICBfcmVzdWx0Q29sbGVjdG9yLmFkZFJlc3VsdChpbWFnZURhdGEsIGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQsIHJlc3VsdC5jb2RlUmVzdWx0KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gX2hhc0NvZGVSZXN1bHQocmVzdWx0OiBRdWFnZ2FCYXJjb2RlKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHJlc3VsdCAmJiAoISFyZXN1bHQuY29kZVJlc3VsdCB8fCByZXN1bHQuYmFyY29kZXMgJiYgcmVzdWx0LmJhcmNvZGVzLnNvbWUoYmFyY29kZSA9PiAhIWJhcmNvZGUuY29kZVJlc3VsdCkpO1xufVxuXG5mdW5jdGlvbiBfcHVibGlzaFJlc3VsdChyZXN1bHQ/OiBRdWFnZ2FCYXJjb2RlLCBpbWFnZURhdGE/OiBVaW50OEFycmF5KTogdm9pZCB7XG4gICAgbGV0IHJlc3VsdFRvUHVibGlzaDogUXVhZ2dhQmFyY29kZSB8IEFycmF5PFF1YWdnYUJhcmNvZGU+ID0gcmVzdWx0O1xuXG4gICAgaWYgKHJlc3VsdCAmJiBfb25VSVRocmVhZCkge1xuICAgICAgICBjb25zdCBvZmZzZXQgPSBfaW5wdXRTdHJlYW0udG9wTGVmdDtcblxuICAgICAgICBpZiAob2Zmc2V0LnggIT09IDAgfHwgb2Zmc2V0LnkgIT09IDApIHtcbiAgICAgICAgICAgIF90cmFuc2Zvcm1SZXN1bHQocmVzdWx0LCBvZmZzZXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgX2FkZFJlc3VsdChyZXN1bHQsIGltYWdlRGF0YSwgX2lucHV0U3RyZWFtLmNhbnZhc1dpZHRoLCBfaW5wdXRTdHJlYW0uY2FudmFzSGVpZ2h0KTtcbiAgICAgICAgcmVzdWx0VG9QdWJsaXNoID0gcmVzdWx0LmJhcmNvZGVzIHx8IHJlc3VsdDtcbiAgICB9XG5cbiAgICBFdmVudHMucHVibGlzaCgncHJvY2Vzc2VkJywgcmVzdWx0VG9QdWJsaXNoKTtcbiAgICBpZiAoX2hhc0NvZGVSZXN1bHQocmVzdWx0KSkge1xuICAgICAgICBFdmVudHMucHVibGlzaCgnZGV0ZWN0ZWQnLCByZXN1bHRUb1B1Ymxpc2gpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gX2xvY2F0ZUFuZERlY29kZSgpOiB2b2lkIHtcbiAgICBjb25zdCBib3hlcyA9IF9nZXRCb3VuZGluZ0JveGVzKCk7XG5cbiAgICBpZiAoYm94ZXMpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gX2RlY29kZXIuZGVjb2RlRnJvbUJvdW5kaW5nQm94ZXMoYm94ZXMpIHx8IHt9O1xuICAgICAgICByZXN1bHQuYm94ZXMgPSBib3hlcztcbiAgICAgICAgX3B1Ymxpc2hSZXN1bHQocmVzdWx0LCBfaW5wdXRJbWFnZVdyYXBwZXIuZGF0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgX3B1Ymxpc2hSZXN1bHQoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIF91cGRhdGUoKTogdm9pZCB7XG4gICAgbGV0IGF2YWlsYWJsZVdvcmtlcjogV29ya2VyVGhyZWFkO1xuXG4gICAgaWYgKF9vblVJVGhyZWFkKSB7XG4gICAgICAgIGlmIChfd29ya2VyUG9vbC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBhdmFpbGFibGVXb3JrZXIgPSBfd29ya2VyUG9vbC5maW5kKHdvcmtlclRocmVhZCA9PiAhd29ya2VyVGhyZWFkLmJ1c3kpO1xuICAgICAgICAgICAgaWYgKGF2YWlsYWJsZVdvcmtlcikge1xuICAgICAgICAgICAgICAgIF9mcmFtZUdyYWJiZXIuYXR0YWNoRGF0YShhdmFpbGFibGVXb3JrZXIuaW1hZ2VEYXRhKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuOyAvLyBhbGwgd29ya2VycyBhcmUgYnVzeVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX2ZyYW1lR3JhYmJlci5hdHRhY2hEYXRhKF9pbnB1dEltYWdlV3JhcHBlci5kYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoX2ZyYW1lR3JhYmJlci5ncmFiKCkpIHtcbiAgICAgICAgICAgIGlmIChhdmFpbGFibGVXb3JrZXIpIHtcbiAgICAgICAgICAgICAgICBhdmFpbGFibGVXb3JrZXIuYnVzeSA9IHRydWU7XG4gICAgICAgICAgICAgICAgYXZhaWxhYmxlV29ya2VyLndvcmtlci5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgICAgIGNtZDogJ3Byb2Nlc3MnLFxuICAgICAgICAgICAgICAgICAgICBpbWFnZURhdGE6IGF2YWlsYWJsZVdvcmtlci5pbWFnZURhdGFcbiAgICAgICAgICAgICAgICB9LCBbYXZhaWxhYmxlV29ya2VyLmltYWdlRGF0YS5idWZmZXJdKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgX2xvY2F0ZUFuZERlY29kZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgX2xvY2F0ZUFuZERlY29kZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gX3N0YXJ0Q29udGludW91c1VwZGF0ZSgpOiB2b2lkIHtcbiAgICBjb25zdCBkZWxheSA9IDEwMDAgLyAoX2NvbmZpZy5mcmVxdWVuY3kgfHwgNjApO1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgIGxldCBuZXh0ID0gbnVsbDtcbiAgICBfc3RvcHBlZCA9IGZhbHNlO1xuXG4gICAgKGZ1bmN0aW9uIGZyYW1lKHRpbWVzdGFtcCk6IHZvaWQge1xuICAgICAgICBuZXh0ID0gbmV4dCB8fCB0aW1lc3RhbXA7XG4gICAgICAgIGlmICghdGhhdC5fc3RvcHBlZCkge1xuICAgICAgICAgICAgaWYgKHRpbWVzdGFtcCA+PSBuZXh0KSB7XG4gICAgICAgICAgICAgICAgbmV4dCArPSBkZWxheTtcbiAgICAgICAgICAgICAgICB0aGF0Ll91cGRhdGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnJhbWUpO1xuICAgICAgICB9XG4gICAgfShwZXJmb3JtYW5jZS5ub3coKSkpO1xufVxuXG5mdW5jdGlvbiBfaW5pdFdvcmtlcihjYjogKHdvcmtlclRocmVhZDogV29ya2VyVGhyZWFkKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgY29uc3QgYmxvYlVSTCA9IF9nZW5lcmF0ZVdvcmtlckJsb2IoKTtcbiAgICBjb25zdCB3b3JrZXJUaHJlYWQgPSB7XG4gICAgICAgIHdvcmtlcjogbmV3IFdvcmtlcihibG9iVVJMKSxcbiAgICAgICAgaW1hZ2VEYXRhOiBuZXcgVWludDhBcnJheShfaW5wdXRTdHJlYW0ud2lkdGggKiBfaW5wdXRTdHJlYW0uaGVpZ2h0KSxcbiAgICAgICAgYnVzeTogdHJ1ZVxuICAgIH07XG5cbiAgICB3b3JrZXJUaHJlYWQud29ya2VyLm9ubWVzc2FnZSA9ICh7IGRhdGEgfSkgPT4ge1xuICAgICAgICBpZiAoZGF0YS5ldmVudCA9PT0gJ2luaXRpYWxpemVkJykge1xuICAgICAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTChibG9iVVJMKTtcbiAgICAgICAgICAgIHdvcmtlclRocmVhZC5idXN5ID0gZmFsc2U7XG4gICAgICAgICAgICB3b3JrZXJUaHJlYWQuaW1hZ2VEYXRhID0gbmV3IFVpbnQ4QXJyYXkoZGF0YS5pbWFnZURhdGEpO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnV29ya2VyIGluaXRpYWxpemVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYih3b3JrZXJUaHJlYWQpO1xuICAgICAgICB9IGVsc2UgaWYgKGRhdGEuZXZlbnQgPT09ICdwcm9jZXNzZWQnKSB7XG4gICAgICAgICAgICB3b3JrZXJUaHJlYWQuYnVzeSA9IGZhbHNlO1xuICAgICAgICAgICAgd29ya2VyVGhyZWFkLmltYWdlRGF0YSA9IG5ldyBVaW50OEFycmF5KGRhdGEuaW1hZ2VEYXRhKTtcbiAgICAgICAgICAgIF9wdWJsaXNoUmVzdWx0KGRhdGEucmVzdWx0LCB3b3JrZXJUaHJlYWQuaW1hZ2VEYXRhKTtcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhLmV2ZW50ID09PSAnZXJyb3InKSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdXb3JrZXIgZXJyb3I6JywgZGF0YS5tZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB3b3JrZXJUaHJlYWQud29ya2VyLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgY21kOiAnaW5pdCcsXG4gICAgICAgIHNpemU6IHsgeDogX2lucHV0U3RyZWFtLndpZHRoLCB5OiBfaW5wdXRTdHJlYW0uaGVpZ2h0IH0sXG4gICAgICAgIGltYWdlRGF0YTogd29ya2VyVGhyZWFkLmltYWdlRGF0YSxcbiAgICAgICAgY29uZmlnOiBtZXJnZShfY29uZmlnLCB7IGlucHV0U3RyZWFtOiB7IHRhcmdldDogbnVsbCB9IH0pXG4gICAgfSwgW3dvcmtlclRocmVhZC5pbWFnZURhdGEuYnVmZmVyXSk7XG59XG5cbmZ1bmN0aW9uIF93b3JrZXJJbnRlcmZhY2UoZmFjdG9yeTogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICBjb25zdCBvcmlnaW4gPSAnKic7XG4gICAgbGV0IGltYWdlV3JhcHBlcjogSW1hZ2VXcmFwcGVyO1xuXG4gICAgaWYgKGZhY3RvcnkpIHtcbiAgICAgICAgKFF1YWdnYSBhcyBhbnkpID0gZmFjdG9yeSgpLmRlZmF1bHQ7XG4gICAgICAgIGlmICghUXVhZ2dhKSB7XG4gICAgICAgICAgICBzZWxmLnBvc3RNZXNzYWdlKHsgZXZlbnQ6ICdlcnJvcicsIG1lc3NhZ2U6ICdRdWFnZ2EgY291bGQgbm90IGJlIGNyZWF0ZWQnIH0sIG9yaWdpbik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZWxmLm9ubWVzc2FnZSA9ICh7IGRhdGEgfSkgPT4ge1xuICAgICAgICBpZiAoZGF0YS5jbWQgPT09ICdpbml0Jykge1xuICAgICAgICAgICAgY29uc3QgY29uZmlnOiBRdWFnZ2FDb25maWcgPSBkYXRhLmNvbmZpZztcbiAgICAgICAgICAgIGNvbmZpZy5udW1PZldvcmtlcnMgPSAwO1xuICAgICAgICAgICAgaW1hZ2VXcmFwcGVyID0gbmV3IEltYWdlV3JhcHBlcih7IHg6IGRhdGEuc2l6ZS54LCB5OiBkYXRhLnNpemUueSB9LCBuZXcgVWludDhBcnJheShkYXRhLmltYWdlRGF0YSkpO1xuICAgICAgICAgICAgUXVhZ2dhLmluaXQoY29uZmlnLCAoKSA9PiBzZWxmLnBvc3RNZXNzYWdlKFxuICAgICAgICAgICAgICAgIHsgZXZlbnQ6ICdpbml0aWFsaXplZCcsIGltYWdlRGF0YTogaW1hZ2VXcmFwcGVyLmRhdGEgfSwgb3JpZ2luLCBbaW1hZ2VXcmFwcGVyLmRhdGEuYnVmZmVyXSksXG4gICAgICAgICAgICAgICAgaW1hZ2VXcmFwcGVyXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgUXVhZ2dhLm9uUHJvY2Vzc2VkKChyZXN1bHQ6IFF1YWdnYUJhcmNvZGUpID0+IHNlbGYucG9zdE1lc3NhZ2UoXG4gICAgICAgICAgICAgICAgeyBldmVudDogJ3Byb2Nlc3NlZCcsIGltYWdlRGF0YTogaW1hZ2VXcmFwcGVyLmRhdGEsIHJlc3VsdCB9LCBvcmlnaW4sIFtpbWFnZVdyYXBwZXIuZGF0YS5idWZmZXJdXG4gICAgICAgICAgICApKTtcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhLmNtZCA9PT0gJ3Byb2Nlc3MnKSB7XG4gICAgICAgICAgICBpbWFnZVdyYXBwZXIuZGF0YSA9IG5ldyBVaW50OEFycmF5KGRhdGEuaW1hZ2VEYXRhKTtcbiAgICAgICAgICAgIFF1YWdnYS5zdGFydCgpO1xuICAgICAgICB9IGVsc2UgaWYgKGRhdGEuY21kID09PSAnc2V0UmVhZGVycycpIHtcbiAgICAgICAgICAgIFF1YWdnYS5zZXRSZWFkZXJzKGRhdGEucmVhZGVycyk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5mdW5jdGlvbiBfZ2VuZXJhdGVXb3JrZXJCbG9iKCk6IHN0cmluZyB7XG4gICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtgKCR7X3dvcmtlckludGVyZmFjZS50b1N0cmluZygpfSkoJHtfX2ZhY3RvcnlTb3VyY2VfXyB8fCAnJ30pO2BdLFxuICAgICAgICB7IHR5cGU6ICd0ZXh0L2phdmFzY3JpcHQnIH0pO1xuXG4gICAgcmV0dXJuIHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xufVxuXG5mdW5jdGlvbiBfYWRqdXN0V29ya2VyUG9vbChjYXBhY2l0eTogbnVtYmVyLCBjYj86ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICBjb25zdCBpbmNyZWFzZUJ5ID0gY2FwYWNpdHkgLSBfd29ya2VyUG9vbC5sZW5ndGg7XG4gICAgaWYgKGluY3JlYXNlQnkgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGNiICYmIGNiKCk7XG4gICAgfVxuICAgIGlmIChpbmNyZWFzZUJ5IDwgMCkge1xuICAgICAgICBfd29ya2VyUG9vbC5zbGljZShpbmNyZWFzZUJ5KS5mb3JFYWNoKCh7IHdvcmtlciB9KSA9PiB7XG4gICAgICAgICAgICB3b3JrZXIudGVybWluYXRlKCk7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdXb3JrZXIgdGVybWluYXRlZCEnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIF93b3JrZXJQb29sID0gX3dvcmtlclBvb2wuc2xpY2UoMCwgaW5jcmVhc2VCeSk7XG4gICAgICAgIHJldHVybiBjYiAmJiBjYigpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5jcmVhc2VCeTsgaSsrKSB7XG4gICAgICAgICAgICBfaW5pdFdvcmtlcih3b3JrZXJUaHJlYWQgPT4ge1xuICAgICAgICAgICAgICAgIF93b3JrZXJQb29sLnB1c2god29ya2VyVGhyZWFkKTtcbiAgICAgICAgICAgICAgICBpZiAoX3dvcmtlclBvb2wubGVuZ3RoID49IGNhcGFjaXR5ICYmIGNiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNiKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFF1YWdnYTsiLCJpbXBvcnQgeyBCYXJjb2RlLCBCYXJjb2RlSW5mbywgQmFyY29kZVJlYWRlciwgQmFyY29kZVJlYWRlckNvbmZpZyB9IGZyb20gJy4vYmFyY29kZS1yZWFkZXInO1xuXG5jb25zdCBOID0gMTtcbmNvbnN0IFcgPSAzO1xuY29uc3QgU1RBUlRfUEFUVEVSTiA9IFtXLCBOLCBXLCBOLCBOLCBOXTtcbmNvbnN0IFNUT1BfUEFUVEVSTiA9IFtXLCBOLCBOLCBOLCBXXTtcbmNvbnN0IENPREVfUEFUVEVSTiA9IFtcbiAgICBbTiwgTiwgVywgVywgTl0sXG4gICAgW1csIE4sIE4sIE4sIFddLFxuICAgIFtOLCBXLCBOLCBOLCBXXSxcbiAgICBbVywgVywgTiwgTiwgTl0sXG4gICAgW04sIE4sIFcsIE4sIFddLFxuICAgIFtXLCBOLCBXLCBOLCBOXSxcbiAgICBbTiwgVywgVywgTiwgTl0sXG4gICAgW04sIE4sIE4sIFcsIFddLFxuICAgIFtXLCBOLCBOLCBXLCBOXSxcbiAgICBbTiwgVywgTiwgVywgTl1cbl07XG5jb25zdCBzdGFydFBhdHRlcm5MZW5ndGggPSBTVEFSVF9QQVRURVJOLnJlZHVjZSgoc3VtLCB2YWwpID0+IHN1bSArIHZhbCwgMCk7XG5cbmV4cG9ydCBjbGFzcyBUd29PZkZpdmVSZWFkZXIgZXh0ZW5kcyBCYXJjb2RlUmVhZGVyIHtcbiAgICBwcml2YXRlIF9iYXJTcGFjZVJhdGlvOiBbbnVtYmVyLCBudW1iZXJdO1xuXG4gICAgY29uc3RydWN0b3IoY29uZmlnPzogQmFyY29kZVJlYWRlckNvbmZpZykge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuXG4gICAgICAgIHRoaXMuX2JhclNwYWNlUmF0aW8gPSBbMSwgMV07XG4gICAgICAgIHRoaXMuX2Zvcm1hdCA9ICcyb2Y1JztcbiAgICAgICAgdGhpcy5fc2luZ2xlQ29kZUVycm9yID0gMC43ODtcbiAgICAgICAgdGhpcy5fYXZlcmFnZUNvZGVFcnJvciA9IDAuMzA7XG4gICAgfVxuXG4gICAgZGVjb2RlKCk6IEJhcmNvZGUge1xuICAgICAgICBjb25zdCBzdGFydEluZm8gPSB0aGlzLl9maW5kU3RhcnQoKTtcblxuICAgICAgICBpZiAoIXN0YXJ0SW5mbykge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBlbmRJbmZvID0gdGhpcy5fZmluZEVuZCgpO1xuXG4gICAgICAgIGlmICghZW5kSW5mbykge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjb3VudGVycyA9IHRoaXMuX2ZpbGxDb3VudGVycyhzdGFydEluZm8uZW5kLCBlbmRJbmZvLnN0YXJ0LCAwKTtcblxuICAgICAgICBpZiAoY291bnRlcnMubGVuZ3RoICUgMTAgIT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEFycmF5PG51bWJlcj4oKTtcbiAgICAgICAgY29uc3QgZGVjb2RlZENvZGVzID0gbmV3IEFycmF5PEJhcmNvZGVJbmZvPigpO1xuXG4gICAgICAgIGRlY29kZWRDb2Rlcy5wdXNoKHN0YXJ0SW5mbyk7XG5cbiAgICAgICAgY29uc3QgY29kZSA9IHRoaXMuX2RlY29kZVBheWxvYWQoY291bnRlcnMsIHJlc3VsdCwgZGVjb2RlZENvZGVzKTtcblxuICAgICAgICBpZiAoIWNvZGUgfHwgcmVzdWx0Lmxlbmd0aCA8IDUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVjb2RlZENvZGVzLnB1c2goZW5kSW5mbyk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvZGU6IHJlc3VsdC5qb2luKCcnKSxcbiAgICAgICAgICAgIHN0YXJ0OiBzdGFydEluZm8uc3RhcnQsXG4gICAgICAgICAgICBlbmQ6IGVuZEluZm8uZW5kLFxuICAgICAgICAgICAgc3RhcnRJbmZvLFxuICAgICAgICAgICAgZGVjb2RlZENvZGVzXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9maW5kU3RhcnQoKTogQmFyY29kZUluZm8ge1xuICAgICAgICBsZXQgb2Zmc2V0ID0gdGhpcy5fbmV4dFNldCh0aGlzLl9yb3cpO1xuICAgICAgICBsZXQgbmFycm93QmFyV2lkdGggPSAxO1xuICAgICAgICBsZXQgc3RhcnRJbmZvOiBCYXJjb2RlSW5mbztcblxuICAgICAgICB3aGlsZSAoIXN0YXJ0SW5mbykge1xuICAgICAgICAgICAgc3RhcnRJbmZvID0gdGhpcy5fZmluZFBhdHRlcm4oU1RBUlRfUEFUVEVSTiwgb2Zmc2V0LCAwLCB0cnVlKTtcblxuICAgICAgICAgICAgaWYgKCFzdGFydEluZm8pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbmFycm93QmFyV2lkdGggPSAoc3RhcnRJbmZvLmVuZCAtIHN0YXJ0SW5mby5zdGFydCkgLyBzdGFydFBhdHRlcm5MZW5ndGggfCAwO1xuICAgICAgICAgICAgY29uc3QgbGVhZGluZ1doaXRlc3BhY2VTdGFydCA9IHN0YXJ0SW5mby5zdGFydCAtIG5hcnJvd0JhcldpZHRoICogNTtcblxuICAgICAgICAgICAgaWYgKGxlYWRpbmdXaGl0ZXNwYWNlU3RhcnQgPj0gMCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9tYXRjaFJhbmdlKGxlYWRpbmdXaGl0ZXNwYWNlU3RhcnQsIHN0YXJ0SW5mby5zdGFydCwgMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0YXJ0SW5mbztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG9mZnNldCA9IHN0YXJ0SW5mby5lbmQ7XG4gICAgICAgICAgICBzdGFydEluZm8gPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF92ZXJpZnlUcmFpbGluZ1doaXRlc3BhY2UoZW5kSW5mbzogQmFyY29kZUluZm8pOiBCYXJjb2RlSW5mbyB7XG4gICAgICAgIGNvbnN0IHRyYWlsaW5nV2hpdGVzcGFjZUVuZCA9IGVuZEluZm8uZW5kICsgKGVuZEluZm8uZW5kIC0gZW5kSW5mby5zdGFydCkgLyAyO1xuXG4gICAgICAgIGlmICh0cmFpbGluZ1doaXRlc3BhY2VFbmQgPCB0aGlzLl9yb3cubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fbWF0Y2hSYW5nZShlbmRJbmZvLmVuZCwgdHJhaWxpbmdXaGl0ZXNwYWNlRW5kLCAwKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbmRJbmZvO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9maW5kRW5kKCk6IEJhcmNvZGVJbmZvIHtcbiAgICAgICAgdGhpcy5fcm93LnJldmVyc2UoKTtcblxuICAgICAgICBjb25zdCBvZmZzZXQgPSB0aGlzLl9uZXh0U2V0KHRoaXMuX3Jvdyk7XG4gICAgICAgIGNvbnN0IGVuZEluZm8gPSB0aGlzLl9maW5kUGF0dGVybihTVE9QX1BBVFRFUk4sIG9mZnNldCwgMCwgdHJ1ZSk7XG5cbiAgICAgICAgdGhpcy5fcm93LnJldmVyc2UoKTtcblxuICAgICAgICBpZiAoZW5kSW5mbyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvLyByZXZlcnNlIG51bWJlcnNcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBlbmRJbmZvLnN0YXJ0O1xuICAgICAgICBlbmRJbmZvLnN0YXJ0ID0gdGhpcy5fcm93Lmxlbmd0aCAtIGVuZEluZm8uZW5kO1xuICAgICAgICBlbmRJbmZvLmVuZCA9IHRoaXMuX3Jvdy5sZW5ndGggLSBzdGFydDtcblxuICAgICAgICByZXR1cm4gZW5kSW5mbyAhPT0gbnVsbCA/IHRoaXMuX3ZlcmlmeVRyYWlsaW5nV2hpdGVzcGFjZShlbmRJbmZvKSA6IG51bGw7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9kZWNvZGVDb2RlKGNvdW50ZXI6IFJlYWRvbmx5QXJyYXk8bnVtYmVyPik6IEJhcmNvZGVJbmZvIHtcbiAgICAgICAgY29uc3QgYmVzdE1hdGNoOiBCYXJjb2RlSW5mbyA9IHtcbiAgICAgICAgICAgIGVycm9yOiBOdW1iZXIuTUFYX1ZBTFVFLFxuICAgICAgICAgICAgY29kZTogLTEsXG4gICAgICAgICAgICBzdGFydDogMCxcbiAgICAgICAgICAgIGVuZDogMFxuICAgICAgICB9O1xuXG4gICAgICAgIGZvciAobGV0IGNvZGUgPSAwOyBjb2RlIDwgQ09ERV9QQVRURVJOLmxlbmd0aDsgY29kZSsrKSB7XG4gICAgICAgICAgICBjb25zdCBlcnJvciA9IHRoaXMuX21hdGNoUGF0dGVybihjb3VudGVyLCBDT0RFX1BBVFRFUk5bY29kZV0pO1xuICAgICAgICAgICAgaWYgKGVycm9yIDwgYmVzdE1hdGNoLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgYmVzdE1hdGNoLmNvZGUgPSBjb2RlO1xuICAgICAgICAgICAgICAgIGJlc3RNYXRjaC5lcnJvciA9IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGJlc3RNYXRjaC5lcnJvciA8IHRoaXMuQVZFUkFHRV9DT0RFX0VSUk9SID8gYmVzdE1hdGNoIDogbnVsbDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2RlY29kZVBheWxvYWQoY291bnRlcnM6IFJlYWRvbmx5QXJyYXk8bnVtYmVyPiwgcmVzdWx0OiBBcnJheTxudW1iZXI+LCBkZWNvZGVkQ29kZXM6IEFycmF5PEJhcmNvZGVJbmZvPik6IEJhcmNvZGVJbmZvIHtcbiAgICAgICAgY29uc3QgY291bnRlckxlbmd0aCA9IGNvdW50ZXJzLmxlbmd0aDtcbiAgICAgICAgY29uc3QgY291bnRlciA9IFswLCAwLCAwLCAwLCAwXTtcbiAgICAgICAgbGV0IHBvcyA9IDA7XG4gICAgICAgIGxldCBjb2RlOiBCYXJjb2RlSW5mbztcblxuICAgICAgICB3aGlsZSAocG9zIDwgY291bnRlckxlbmd0aCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb3VudGVyW2ldID0gY291bnRlcnNbcG9zXSAqIHRoaXMuX2JhclNwYWNlUmF0aW9bMF07XG4gICAgICAgICAgICAgICAgcG9zICs9IDI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvZGUgPSB0aGlzLl9kZWNvZGVDb2RlKGNvdW50ZXIpO1xuXG4gICAgICAgICAgICBpZiAoIWNvZGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVzdWx0LnB1c2goY29kZS5jb2RlKTtcbiAgICAgICAgICAgIGRlY29kZWRDb2Rlcy5wdXNoKGNvZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvZGU7XG4gICAgfVxufVxuIiwiZXhwb3J0IGVudW0gQmFyY29kZURpcmVjdGlvbiB7XG4gICAgRm9yd2FyZCA9IDEsXG4gICAgUmV2ZXJzZSA9IC0xXG59O1xuXG5leHBvcnQgdHlwZSBCYXJjb2RlRm9ybWF0ID0gc3RyaW5nO1xuXG5leHBvcnQgdHlwZSBCYXJjb2RlUmVhZGVyVHlwZSA9IHN0cmluZztcblxuZXhwb3J0IHR5cGUgQmFyY29kZVJlYWRlckRlY2xhcmF0aW9uID0gQmFyY29kZVJlYWRlclR5cGUgfCB7IGZvcm1hdDogQmFyY29kZVJlYWRlclR5cGU7IGNvbmZpZzogQmFyY29kZVJlYWRlckNvbmZpZzsgfTtcblxuZXhwb3J0IGludGVyZmFjZSBCYXJjb2RlUmVhZGVyQ29uZmlnIHtcbiAgICBub3JtYWxpemVCYXJTcGFjZVdpZHRoPzogYm9vbGVhbjtcbiAgICBzdXBwbGVtZW50cz86IEFycmF5PEJhcmNvZGVSZWFkZXJUeXBlPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCYXJjb2RlQ29ycmVjdGlvbiB7XG4gICAgYmFyOiBudW1iZXI7XG4gICAgc3BhY2U6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCYXJjb2RlSW5mbyB7XG4gICAgY29kZT86IG51bWJlcjtcbiAgICBjb3JyZWN0aW9uPzogQmFyY29kZUNvcnJlY3Rpb247XG4gICAgZW5kPzogbnVtYmVyO1xuICAgIGVuZENvdW50ZXI/OiBudW1iZXI7XG4gICAgZXJyb3I/OiBudW1iZXI7XG4gICAgc3RhcnQ/OiBudW1iZXI7XG4gICAgc3RhcnRDb3VudGVyPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJhcmNvZGUge1xuICAgIGNvZGU/OiBzdHJpbmc7XG4gICAgY29kZXNldD86IG51bWJlcjtcbiAgICBjb3JyZWN0aW9uPzogQmFyY29kZUNvcnJlY3Rpb247XG4gICAgZGVjb2RlZENvZGVzPzogQXJyYXk8c3RyaW5nIHwgQmFyY29kZUluZm8+O1xuICAgIGRpcmVjdGlvbj86IEJhcmNvZGVEaXJlY3Rpb247XG4gICAgZW5kPzogbnVtYmVyO1xuICAgIGVuZEluZm8/OiBCYXJjb2RlSW5mbztcbiAgICBmb3JtYXQ/OiBCYXJjb2RlRm9ybWF0O1xuICAgIHN0YXJ0PzogbnVtYmVyO1xuICAgIHN0YXJ0SW5mbz86IEJhcmNvZGVJbmZvO1xuICAgIHN1cHBsZW1lbnQ/OiBCYXJjb2RlO1xufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFyY29kZVJlYWRlciB7XG4gICAgcHJvdGVjdGVkIF9zaW5nbGVDb2RlRXJyb3I6IG51bWJlcjtcbiAgICBwcm90ZWN0ZWQgX2F2ZXJhZ2VDb2RlRXJyb3I6IG51bWJlcjtcbiAgICBwcm90ZWN0ZWQgX2Zvcm1hdDogQmFyY29kZUZvcm1hdDtcbiAgICBwcm90ZWN0ZWQgX3JvdzogQXJyYXk8bnVtYmVyPjtcblxuICAgIGNvbmZpZzogQmFyY29kZVJlYWRlckNvbmZpZztcbiAgICBzdXBwbGVtZW50czogQXJyYXk8QmFyY29kZVJlYWRlcj47XG5cbiAgICBzdGF0aWMgZ2V0IEV4Y2VwdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIFN0YXJ0Tm90Rm91bmRFeGNlcHRpb246ICdTdGFydC1JbmZvIHdhcyBub3QgZm91bmQhJyxcbiAgICAgICAgICAgIENvZGVOb3RGb3VuZEV4Y2VwdGlvbjogJ0NvZGUgY291bGQgbm90IGJlIGZvdW5kIScsXG4gICAgICAgICAgICBQYXR0ZXJuTm90Rm91bmRFeGNlcHRpb246ICdQYXR0ZXJuIGNvdWxkIG5vdCBiZSBmb3VuZCEnXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZ2V0IFNJTkdMRV9DT0RFX0VSUk9SKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zaW5nbGVDb2RlRXJyb3I7XG4gICAgfVxuXG4gICAgZ2V0IEFWRVJBR0VfQ09ERV9FUlJPUigpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fYXZlcmFnZUNvZGVFcnJvcjtcbiAgICB9XG5cbiAgICBnZXQgRk9STUFUKCk6IEJhcmNvZGVGb3JtYXQge1xuICAgICAgICByZXR1cm4gdGhpcy5fZm9ybWF0O1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZz86IEJhcmNvZGVSZWFkZXJDb25maWcsIHN1cHBsZW1lbnRzPzogQXJyYXk8QmFyY29kZVJlYWRlcj4pIHtcbiAgICAgICAgdGhpcy5fZm9ybWF0ID0gJ3Vua25vd24nO1xuICAgICAgICB0aGlzLl9yb3cgPSBbXTtcbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWcgfHwge307XG4gICAgICAgIHRoaXMuc3VwcGxlbWVudHMgPSBzdXBwbGVtZW50cztcbiAgICB9XG5cbiAgICBhYnN0cmFjdCBkZWNvZGUocm93PzogQXJyYXk8bnVtYmVyPiwgc3RhcnQ/OiBudW1iZXIpOiBCYXJjb2RlO1xuXG4gICAgcHJvdGVjdGVkIF9maW5kUGF0dGVybihwYXR0ZXJuOiBSZWFkb25seUFycmF5PG51bWJlcj4sIG9mZnNldDogbnVtYmVyLCBpc1doaXRlOiAwIHwgMSwgdHJ5SGFyZGVyOiBib29sZWFuKTogQmFyY29kZUluZm8ge1xuICAgICAgICBjb25zdCBjb3VudGVyID0gbmV3IEFycmF5PG51bWJlcj4ocGF0dGVybi5sZW5ndGgpO1xuICAgICAgICBjb25zdCBiZXN0TWF0Y2g6IEJhcmNvZGVJbmZvID0ge1xuICAgICAgICAgICAgZXJyb3I6IE51bWJlci5NQVhfVkFMVUUsXG4gICAgICAgICAgICBjb2RlOiAtMSxcbiAgICAgICAgICAgIHN0YXJ0OiAwLFxuICAgICAgICAgICAgZW5kOiAwXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGVwc2lsb24gPSB0aGlzLkFWRVJBR0VfQ09ERV9FUlJPUjtcbiAgICAgICAgbGV0IGNvdW50ZXJQb3MgPSAwO1xuXG4gICAgICAgIGlmICghb2Zmc2V0KSB7XG4gICAgICAgICAgICBvZmZzZXQgPSB0aGlzLl9uZXh0U2V0KHRoaXMuX3Jvdyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb3VudGVyLmZpbGwoMCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IG9mZnNldDsgaSA8IHRoaXMuX3Jvdy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3Jvd1tpXSBeIGlzV2hpdGUpIHtcbiAgICAgICAgICAgICAgICBjb3VudGVyW2NvdW50ZXJQb3NdKys7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChjb3VudGVyUG9zID09PSBjb3VudGVyLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXJyb3IgPSB0aGlzLl9tYXRjaFBhdHRlcm4oY291bnRlciwgcGF0dGVybik7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yIDwgZXBzaWxvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmVzdE1hdGNoLmVycm9yID0gZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICBiZXN0TWF0Y2guc3RhcnQgPSBpIC0gY291bnRlci5yZWR1Y2UoKHN1bSwgdmFsdWUpID0+IHN1bSArIHZhbHVlLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlc3RNYXRjaC5lbmQgPSBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJlc3RNYXRjaDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0cnlIYXJkZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY291bnRlci5sZW5ndGggLSAyOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVyW2pdID0gY291bnRlcltqICsgMl07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVyW2NvdW50ZXIubGVuZ3RoIC0gMl0gPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgY291bnRlcltjb3VudGVyLmxlbmd0aCAtIDFdID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ZXJQb3MtLTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnRlclBvcysrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb3VudGVyW2NvdW50ZXJQb3NdID0gMTtcbiAgICAgICAgICAgICAgICBpc1doaXRlID0gaXNXaGl0ZSA/IDAgOiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfbmV4dFVuc2V0KGxpbmU6IFJlYWRvbmx5QXJyYXk8bnVtYmVyPiwgc3RhcnQ/OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICBmb3IgKGxldCBpID0gc3RhcnQgfHwgMDsgaSA8IGxpbmUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICghbGluZVtpXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsaW5lLmxlbmd0aDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX25leHRTZXQobGluZTogUmVhZG9ubHlBcnJheTxudW1iZXI+LCBzdGFydD86IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIGZvciAobGV0IGkgPSBzdGFydCB8fCAwOyBpIDwgbGluZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGxpbmVbaV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGluZS5sZW5ndGg7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9tYXRjaFJhbmdlKHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyLCB2YWx1ZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIGZvciAobGV0IGkgPSBzdGFydCA8IDAgPyAwIDogc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3Jvd1tpXSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9tYXRjaFBhdHRlcm4oY291bnRlcjogUmVhZG9ubHlBcnJheTxudW1iZXI+LCBjb2RlOiBSZWFkb25seUFycmF5PG51bWJlcj4sIG1heFNpbmdsZUVycm9yPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgbGV0IGVycm9yID0gMDtcbiAgICAgICAgbGV0IHN1bSA9IDA7XG4gICAgICAgIGxldCBtb2R1bG8gPSAwO1xuXG4gICAgICAgIG1heFNpbmdsZUVycm9yID0gbWF4U2luZ2xlRXJyb3IgfHwgdGhpcy5TSU5HTEVfQ09ERV9FUlJPUiB8fCAxO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnRlci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgc3VtICs9IGNvdW50ZXJbaV07XG4gICAgICAgICAgICBtb2R1bG8gKz0gY29kZVtpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdW0gPCBtb2R1bG8pIHtcbiAgICAgICAgICAgIHJldHVybiBOdW1iZXIuTUFYX1ZBTFVFO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYmFyV2lkdGggPSBzdW0gLyBtb2R1bG87XG4gICAgICAgIG1heFNpbmdsZUVycm9yICo9IGJhcldpZHRoO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnRlci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY291bnQgPSBjb3VudGVyW2ldO1xuICAgICAgICAgICAgY29uc3Qgc2NhbGVkID0gY29kZVtpXSAqIGJhcldpZHRoO1xuICAgICAgICAgICAgY29uc3Qgc2luZ2xlRXJyb3IgPSBNYXRoLmFicyhjb3VudCAtIHNjYWxlZCkgLyBzY2FsZWQ7XG5cbiAgICAgICAgICAgIGlmIChzaW5nbGVFcnJvciA+IG1heFNpbmdsZUVycm9yKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE51bWJlci5NQVhfVkFMVUU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGVycm9yICs9IHNpbmdsZUVycm9yO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGVycm9yIC8gbW9kdWxvO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfY29ycmVjdEJhcnMoY291bnRlcjogQXJyYXk8bnVtYmVyPiwgY29ycmVjdGlvbjogbnVtYmVyLCBpbmRpY2VzOiBBcnJheTxudW1iZXI+KSB7XG4gICAgICAgIGxldCBsZW5ndGggPSBpbmRpY2VzLmxlbmd0aDtcbiAgICAgICAgbGV0IHRtcCA9IDA7XG5cbiAgICAgICAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgICAgICAgICB0bXAgPSBjb3VudGVyW2luZGljZXNbbGVuZ3RoXV0gKiAoMSAtICgoMSAtIGNvcnJlY3Rpb24pIC8gMikpO1xuICAgICAgICAgICAgaWYgKHRtcCA+IDEpIHtcbiAgICAgICAgICAgICAgICBjb3VudGVyW2luZGljZXNbbGVuZ3RoXV0gPSB0bXA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZWNvZGVQYXR0ZXJuKHBhdHRlcm46IEFycmF5PG51bWJlcj4pOiBCYXJjb2RlIHtcbiAgICAgICAgdGhpcy5fcm93ID0gcGF0dGVybjtcbiAgICAgICAgbGV0IHJlc3VsdCA9IHRoaXMuZGVjb2RlKCk7XG5cbiAgICAgICAgaWYgKHJlc3VsdCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5fcm93LnJldmVyc2UoKTtcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZGVjb2RlKCk7XG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmRpcmVjdGlvbiA9IEJhcmNvZGVEaXJlY3Rpb24uUmV2ZXJzZTtcbiAgICAgICAgICAgICAgICByZXN1bHQuc3RhcnQgPSB0aGlzLl9yb3cubGVuZ3RoIC0gcmVzdWx0LnN0YXJ0O1xuICAgICAgICAgICAgICAgIHJlc3VsdC5lbmQgPSB0aGlzLl9yb3cubGVuZ3RoIC0gcmVzdWx0LmVuZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdC5kaXJlY3Rpb24gPSBCYXJjb2RlRGlyZWN0aW9uLkZvcndhcmQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICByZXN1bHQuZm9ybWF0ID0gdGhpcy5GT1JNQVQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIF9maWxsQ291bnRlcnMob2Zmc2V0OiBudW1iZXIsIGVuZDogbnVtYmVyLCBpc1doaXRlOiAwIHwgMSk6IEFycmF5PG51bWJlcj4ge1xuICAgICAgICBjb25zdCBjb3VudGVycyA9IG5ldyBBcnJheTxudW1iZXI+KCk7XG4gICAgICAgIGxldCBjb3VudGVyUG9zID0gMDtcblxuICAgICAgICBjb3VudGVyc1tjb3VudGVyUG9zXSA9IDA7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IG9mZnNldDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fcm93W2ldIF4gaXNXaGl0ZSkge1xuICAgICAgICAgICAgICAgIGNvdW50ZXJzW2NvdW50ZXJQb3NdKys7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvdW50ZXJQb3MrKztcbiAgICAgICAgICAgICAgICBjb3VudGVyc1tjb3VudGVyUG9zXSA9IDE7XG4gICAgICAgICAgICAgICAgaXNXaGl0ZSA9IGlzV2hpdGUgPyAwIDogMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb3VudGVycztcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX3RvQ291bnRlcnMoc3RhcnQ6IG51bWJlciwgY291bnRlcnM6IFVpbnQxNkFycmF5KTogVWludDE2QXJyYXkge1xuICAgICAgICBjb25zdCBudW1Db3VudGVycyA9IGNvdW50ZXJzLmxlbmd0aDtcbiAgICAgICAgY29uc3QgZW5kID0gdGhpcy5fcm93Lmxlbmd0aDtcbiAgICAgICAgbGV0IGlzV2hpdGU6IDAgfCAxID0gdGhpcy5fcm93W3N0YXJ0XSA/IDAgOiAxO1xuICAgICAgICBsZXQgY291bnRlclBvcyA9IDA7XG5cbiAgICAgICAgY291bnRlcnMuZmlsbCgwKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3Jvd1tpXSBeIGlzV2hpdGUpIHtcbiAgICAgICAgICAgICAgICBjb3VudGVyc1tjb3VudGVyUG9zXSsrO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb3VudGVyUG9zKys7XG4gICAgICAgICAgICAgICAgaWYgKGNvdW50ZXJQb3MgPT09IG51bUNvdW50ZXJzKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXJzW2NvdW50ZXJQb3NdID0gMTtcbiAgICAgICAgICAgICAgICAgICAgaXNXaGl0ZSA9IGlzV2hpdGUgPyAwIDogMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY291bnRlcnM7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQmFyY29kZSwgQmFyY29kZUluZm8sIEJhcmNvZGVSZWFkZXIgfSBmcm9tICcuL2JhcmNvZGUtcmVhZGVyJztcblxuY29uc3QgQUxQSEFCRVRIX1NUUklORyA9ICcwMTIzNDU2Nzg5LSQ6Ly4rQUJDRCc7XG5jb25zdCBBTFBIQUJFVCA9IFsuLi5BTFBIQUJFVEhfU1RSSU5HXS5tYXAoY2hhciA9PiBjaGFyLmNoYXJDb2RlQXQoMCkpO1xuLy8gY29uc3QgQUxQSEFCRVQgPSBbNDgsIDQ5LCA1MCwgNTEsIDUyLCA1MywgNTQsIDU1LCA1NiwgNTcsIDQ1LCAzNiwgNTgsIDQ3LCA0NiwgNDMsIDY1LCA2NiwgNjcsIDY4XTtcbmNvbnN0IENIQVJBQ1RFUl9FTkNPRElOR1MgPSBbMHgwMDMsIDB4MDA2LCAweDAwOSwgMHgwNjAsIDB4MDEyLCAweDA0MiwgMHgwMjEsIDB4MDI0LCAweDAzMCwgMHgwNDgsIDB4MDBjLCAweDAxOCwgMHgwNDUsXG4gICAgMHgwNTEsIDB4MDU0LCAweDAxNSwgMHgwMUEsIDB4MDI5LCAweDAwQiwgMHgwMEVdO1xuY29uc3QgU1RBUlRfRU5EID0gWzB4MDFBLCAweDAyOSwgMHgwMEIsIDB4MDBFXTtcbmNvbnN0IE1JTl9FTkNPREVEX0NIQVJTID0gNDtcbmNvbnN0IE1BWF9BQ0NFUFRBQkxFID0gMi4wO1xuY29uc3QgUEFERElORyA9IDEuNTtcblxuaW50ZXJmYWNlIFRocmVzaG9sZCB7XG4gICAgc3BhY2U6IHtcbiAgICAgICAgbmFycm93OiB7XG4gICAgICAgICAgICBzaXplOiBudW1iZXI7XG4gICAgICAgICAgICBjb3VudHM6IG51bWJlcjtcbiAgICAgICAgICAgIG1pbjogbnVtYmVyO1xuICAgICAgICAgICAgbWF4OiBudW1iZXI7XG4gICAgICAgIH07XG4gICAgICAgIHdpZGU6IHtcbiAgICAgICAgICAgIHNpemU6IG51bWJlcjtcbiAgICAgICAgICAgIGNvdW50czogbnVtYmVyO1xuICAgICAgICAgICAgbWluOiBudW1iZXI7XG4gICAgICAgICAgICBtYXg6IG51bWJlcjtcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIGJhcjoge1xuICAgICAgICBuYXJyb3c6IHtcbiAgICAgICAgICAgIHNpemU6IG51bWJlcjtcbiAgICAgICAgICAgIGNvdW50czogbnVtYmVyO1xuICAgICAgICAgICAgbWluOiBudW1iZXI7XG4gICAgICAgICAgICBtYXg6IG51bWJlcjtcbiAgICAgICAgfTtcbiAgICAgICAgd2lkZToge1xuICAgICAgICAgICAgc2l6ZTogbnVtYmVyO1xuICAgICAgICAgICAgY291bnRzOiBudW1iZXI7XG4gICAgICAgICAgICBtaW46IG51bWJlcjtcbiAgICAgICAgICAgIG1heDogbnVtYmVyO1xuICAgICAgICB9O1xuICAgIH07XG59XG5cbmV4cG9ydCBjbGFzcyBDb2RhYmFyUmVhZGVyIGV4dGVuZHMgQmFyY29kZVJlYWRlciB7XG4gICAgcHJpdmF0ZSBfY291bnRlcnM6IEFycmF5PG51bWJlcj47XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLl9mb3JtYXQgPSAnY29kYWJhcic7XG4gICAgICAgIHRoaXMuX2NvdW50ZXJzID0gW107XG4gICAgfVxuXG4gICAgZGVjb2RlKCk6IEJhcmNvZGUge1xuICAgICAgICB0aGlzLl9jb3VudGVycyA9IHRoaXMuX2ZpbGxDb3VudGVycyh0aGlzLl9uZXh0VW5zZXQodGhpcy5fcm93KSwgdGhpcy5fcm93Lmxlbmd0aCwgMSk7XG5cbiAgICAgICAgY29uc3Qgc3RhcnQgPSB0aGlzLl9maW5kU3RhcnQoKTtcbiAgICAgICAgaWYgKCFzdGFydCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xuICAgICAgICBsZXQgbmV4dFN0YXJ0ID0gc3RhcnQuc3RhcnRDb3VudGVyO1xuICAgICAgICBsZXQgcGF0dGVybjogbnVtYmVyO1xuXG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIHBhdHRlcm4gPSB0aGlzLl90b1BhdHRlcm4obmV4dFN0YXJ0KTtcbiAgICAgICAgICAgIGlmIChwYXR0ZXJuIDwgMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZGVjb2RlZENoYXIgPSB0aGlzLl9wYXR0ZXJuVG9DaGFyKHBhdHRlcm4pO1xuICAgICAgICAgICAgaWYgKGRlY29kZWRDaGFyID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaChkZWNvZGVkQ2hhcik7XG4gICAgICAgICAgICBuZXh0U3RhcnQgKz0gODtcbiAgICAgICAgICAgIGlmIChyZXN1bHQubGVuZ3RoID4gMSAmJiBTVEFSVF9FTkQuc29tZShjb2RlID0+IGNvZGUgPT09IHBhdHRlcm4pKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gd2hpbGUgKG5leHRTdGFydCA8IHRoaXMuX2NvdW50ZXJzLmxlbmd0aCk7XG5cbiAgICAgICAgLy8gdmVyaWZ5IGVuZFxuICAgICAgICBpZiAoKHJlc3VsdC5sZW5ndGggLSAyKSA8IE1JTl9FTkNPREVEX0NIQVJTIHx8ICFTVEFSVF9FTkQuc29tZShjb2RlID0+IGNvZGUgPT09IHBhdHRlcm4pKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHZlcmlmeSBlbmQgd2hpdGUgc3BhY2VcbiAgICAgICAgaWYgKCF0aGlzLl92ZXJpZnlXaGl0ZXNwYWNlKHN0YXJ0LnN0YXJ0Q291bnRlciwgbmV4dFN0YXJ0IC0gOCkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLl92YWxpZGF0ZVJlc3VsdChyZXN1bHQsIHN0YXJ0LnN0YXJ0Q291bnRlcikpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgbmV4dFN0YXJ0ID0gbmV4dFN0YXJ0ID4gdGhpcy5fY291bnRlcnMubGVuZ3RoID8gdGhpcy5fY291bnRlcnMubGVuZ3RoIDogbmV4dFN0YXJ0O1xuICAgICAgICBjb25zdCBlbmQgPSBzdGFydC5zdGFydCArIHRoaXMuX3N1bUNvdW50ZXJzKHN0YXJ0LnN0YXJ0Q291bnRlciwgbmV4dFN0YXJ0IC0gOCk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvZGU6IHJlc3VsdC5qb2luKCcnKSxcbiAgICAgICAgICAgIHN0YXJ0OiBzdGFydC5zdGFydCxcbiAgICAgICAgICAgIGVuZCxcbiAgICAgICAgICAgIHN0YXJ0SW5mbzogc3RhcnQsXG4gICAgICAgICAgICBkZWNvZGVkQ29kZXM6IHJlc3VsdFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfdmVyaWZ5V2hpdGVzcGFjZShzdGFydENvdW50ZXI6IG51bWJlciwgZW5kQ291bnRlcjogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICgoc3RhcnRDb3VudGVyIC0gMSA8PSAwKVxuICAgICAgICAgICAgfHwgdGhpcy5fY291bnRlcnNbc3RhcnRDb3VudGVyIC0gMV0gPj0gKHRoaXMuX2NhbGN1bGF0ZVBhdHRlcm5MZW5ndGgoc3RhcnRDb3VudGVyKSAvIDIuMCkpIHtcbiAgICAgICAgICAgIGlmICgoZW5kQ291bnRlciArIDggPj0gdGhpcy5fY291bnRlcnMubGVuZ3RoKVxuICAgICAgICAgICAgICAgIHx8IHRoaXMuX2NvdW50ZXJzW2VuZENvdW50ZXIgKyA3XSA+PSAodGhpcy5fY2FsY3VsYXRlUGF0dGVybkxlbmd0aChlbmRDb3VudGVyKSAvIDIuMCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9jYWxjdWxhdGVQYXR0ZXJuTGVuZ3RoKG9mZnNldDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgbGV0IHN1bSA9IDA7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IG9mZnNldDsgaSA8IG9mZnNldCArIDc7IGkrKykge1xuICAgICAgICAgICAgc3VtICs9IHRoaXMuX2NvdW50ZXJzW2ldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1bTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF90aHJlc2hvbGRSZXN1bHRQYXR0ZXJuKHJlc3VsdDogUmVhZG9ubHlBcnJheTxzdHJpbmc+LCBzdGFydENvdW50ZXI6IG51bWJlcik6IFRocmVzaG9sZCB7XG4gICAgICAgIGNvbnN0IGNhdGVnb3JpemF0aW9uOiBUaHJlc2hvbGQgPSB7XG4gICAgICAgICAgICBzcGFjZToge1xuICAgICAgICAgICAgICAgIG5hcnJvdzogeyBzaXplOiAwLCBjb3VudHM6IDAsIG1pbjogMCwgbWF4OiBOdW1iZXIuTUFYX1ZBTFVFIH0sXG4gICAgICAgICAgICAgICAgd2lkZTogeyBzaXplOiAwLCBjb3VudHM6IDAsIG1pbjogMCwgbWF4OiBOdW1iZXIuTUFYX1ZBTFVFIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiYXI6IHtcbiAgICAgICAgICAgICAgICBuYXJyb3c6IHsgc2l6ZTogMCwgY291bnRzOiAwLCBtaW46IDAsIG1heDogTnVtYmVyLk1BWF9WQUxVRSB9LFxuICAgICAgICAgICAgICAgIHdpZGU6IHsgc2l6ZTogMCwgY291bnRzOiAwLCBtaW46IDAsIG1heDogTnVtYmVyLk1BWF9WQUxVRSB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGxldCBwb3MgPSBzdGFydENvdW50ZXI7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBwYXR0ZXJuID0gdGhpcy5fY2hhclRvUGF0dGVybihyZXN1bHRbaV0pO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gNjsgaiA+PSAwOyBqLS0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBraW5kID0gKGogJiAxKSA9PT0gMiA/IGNhdGVnb3JpemF0aW9uLmJhciA6IGNhdGVnb3JpemF0aW9uLnNwYWNlO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhdCA9IChwYXR0ZXJuICYgMSkgPT09IDEgPyBraW5kLndpZGUgOiBraW5kLm5hcnJvdztcbiAgICAgICAgICAgICAgICBjYXQuc2l6ZSArPSB0aGlzLl9jb3VudGVyc1twb3MgKyBqXTtcbiAgICAgICAgICAgICAgICBjYXQuY291bnRzKys7XG4gICAgICAgICAgICAgICAgcGF0dGVybiA+Pj0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBvcyArPSA4O1xuICAgICAgICB9XG5cbiAgICAgICAgWydzcGFjZScsICdiYXInXS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBjb25zdCBraW5kID0gY2F0ZWdvcml6YXRpb25ba2V5XTtcbiAgICAgICAgICAgIGtpbmQud2lkZS5taW4gPSBNYXRoLmZsb29yKChraW5kLm5hcnJvdy5zaXplIC8ga2luZC5uYXJyb3cuY291bnRzICsga2luZC53aWRlLnNpemUgLyBraW5kLndpZGUuY291bnRzKSAvIDIpO1xuICAgICAgICAgICAga2luZC5uYXJyb3cubWF4ID0gTWF0aC5jZWlsKGtpbmQud2lkZS5taW4pO1xuICAgICAgICAgICAga2luZC53aWRlLm1heCA9IE1hdGguY2VpbCgoa2luZC53aWRlLnNpemUgKiBNQVhfQUNDRVBUQUJMRSArIFBBRERJTkcpIC8ga2luZC53aWRlLmNvdW50cyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBjYXRlZ29yaXphdGlvbjtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9jaGFyVG9QYXR0ZXJuKGNoYXI6IHN0cmluZyk6IG51bWJlciB7XG4gICAgICAgIGNvbnN0IGNoYXJDb2RlID0gY2hhci5jaGFyQ29kZUF0KDApO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQUxQSEFCRVQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChBTFBIQUJFVFtpXSA9PT0gY2hhckNvZGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gQ0hBUkFDVEVSX0VOQ09ESU5HU1tpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAweDA7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfdmFsaWRhdGVSZXN1bHQocmVzdWx0OiBSZWFkb25seUFycmF5PHN0cmluZz4sIHN0YXJ0Q291bnRlcjogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IHRocmVzaG9sZCA9IHRoaXMuX3RocmVzaG9sZFJlc3VsdFBhdHRlcm4ocmVzdWx0LCBzdGFydENvdW50ZXIpO1xuICAgICAgICBsZXQgcG9zID0gc3RhcnRDb3VudGVyO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzdWx0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcGF0dGVybiA9IHRoaXMuX2NoYXJUb1BhdHRlcm4ocmVzdWx0W2ldKTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDY7IGogPj0gMDsgai0tKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qga2luZCA9IChqICYgMSkgPT09IDAgPyB0aHJlc2hvbGQuYmFyIDogdGhyZXNob2xkLnNwYWNlO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhdCA9IChwYXR0ZXJuICYgMSkgPT09IDEgPyBraW5kLndpZGUgOiBraW5kLm5hcnJvdztcbiAgICAgICAgICAgICAgICBjb25zdCBzaXplID0gdGhpcy5fY291bnRlcnNbcG9zICsgal07XG4gICAgICAgICAgICAgICAgaWYgKHNpemUgPCBjYXQubWluIHx8IHNpemUgPiBjYXQubWF4KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0dGVybiA+Pj0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBvcyArPSA4O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfcGF0dGVyblRvQ2hhcihwYXR0ZXJuOiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IENIQVJBQ1RFUl9FTkNPRElOR1MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChDSEFSQUNURVJfRU5DT0RJTkdTW2ldID09PSBwYXR0ZXJuKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoQUxQSEFCRVRbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfY29tcHV0ZUFsdGVybmF0aW5nVGhyZXNob2xkKG9mZnNldDogbnVtYmVyLCBlbmQ6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIGxldCBtaW4gPSBOdW1iZXIuTUFYX1ZBTFVFO1xuICAgICAgICBsZXQgbWF4ID0gMDtcblxuICAgICAgICBmb3IgKGxldCBpID0gb2Zmc2V0OyBpIDwgZW5kOyBpICs9IDIpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvdW50ZXIgPSB0aGlzLl9jb3VudGVyc1tpXTtcbiAgICAgICAgICAgIGlmIChjb3VudGVyID4gbWF4KSB7XG4gICAgICAgICAgICAgICAgbWF4ID0gY291bnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb3VudGVyIDwgbWluKSB7XG4gICAgICAgICAgICAgICAgbWluID0gY291bnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoKG1pbiArIG1heCkgLyAyLjApIHwgMDtcbiAgICB9XG5cbiAgICBwcml2YXRlIF90b1BhdHRlcm4ob2Zmc2V0OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICBjb25zdCBudW1Db3VudGVycyA9IDc7XG4gICAgICAgIGNvbnN0IGVuZCA9IG9mZnNldCArIG51bUNvdW50ZXJzO1xuXG4gICAgICAgIGlmIChlbmQgPiB0aGlzLl9jb3VudGVycy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGJhclRocmVzaG9sZCA9IHRoaXMuX2NvbXB1dGVBbHRlcm5hdGluZ1RocmVzaG9sZChvZmZzZXQsIGVuZCk7XG4gICAgICAgIGNvbnN0IHNwYWNlVGhyZXNob2xkID0gdGhpcy5fY29tcHV0ZUFsdGVybmF0aW5nVGhyZXNob2xkKG9mZnNldCArIDEsIGVuZCk7XG4gICAgICAgIGxldCBiaXRtYXNrID0gMSA8PCAobnVtQ291bnRlcnMgLSAxKTtcbiAgICAgICAgbGV0IHBhdHRlcm4gPSAwO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtQ291bnRlcnM7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgdGhyZXNob2xkID0gKGkgJiAxKSA9PT0gMCA/IGJhclRocmVzaG9sZCA6IHNwYWNlVGhyZXNob2xkO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2NvdW50ZXJzW29mZnNldCArIGldID4gdGhyZXNob2xkKSB7XG4gICAgICAgICAgICAgICAgcGF0dGVybiB8PSBiaXRtYXNrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYml0bWFzayA+Pj0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYXR0ZXJuO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3N1bUNvdW50ZXJzKHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgbGV0IHN1bSA9IDA7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcbiAgICAgICAgICAgIHN1bSArPSB0aGlzLl9jb3VudGVyc1tpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdW07XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9maW5kU3RhcnQoKTogQmFyY29kZUluZm8ge1xuICAgICAgICBsZXQgc3RhcnQgPSB0aGlzLl9uZXh0VW5zZXQodGhpcy5fcm93KTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRoaXMuX2NvdW50ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBwYXR0ZXJuID0gdGhpcy5fdG9QYXR0ZXJuKGkpO1xuICAgICAgICAgICAgaWYgKHBhdHRlcm4gIT09IC0xICYmIFNUQVJUX0VORC5zb21lKGNvZGUgPT4gY29kZSA9PT0gcGF0dGVybikpIHtcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBMb29rIGZvciB3aGl0ZXNwYWNlIGFoZWFkXG4gICAgICAgICAgICAgICAgc3RhcnQgKz0gdGhpcy5fc3VtQ291bnRlcnMoMCwgaSk7XG4gICAgICAgICAgICAgICAgY29uc3QgZW5kID0gc3RhcnQgKyB0aGlzLl9zdW1Db3VudGVycyhpLCBpICsgOCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQsXG4gICAgICAgICAgICAgICAgICAgIGVuZCxcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRDb3VudGVyOiBpLFxuICAgICAgICAgICAgICAgICAgICBlbmRDb3VudGVyOiBpICsgOFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBCYXJjb2RlLCBCYXJjb2RlQ29ycmVjdGlvbiwgQmFyY29kZUluZm8sIEJhcmNvZGVSZWFkZXIgfSBmcm9tICcuL2JhcmNvZGUtcmVhZGVyJztcblxuY29uc3QgQ09ERV9TSElGVCA9IDk4O1xuY29uc3QgQ09ERV9DID0gOTk7XG5jb25zdCBDT0RFX0IgPSAxMDA7XG5jb25zdCBDT0RFX0EgPSAxMDE7XG5jb25zdCBTVEFSVF9DT0RFX0EgPSAxMDM7XG5jb25zdCBTVEFSVF9DT0RFX0IgPSAxMDQ7XG5jb25zdCBTVEFSVF9DT0RFX0MgPSAxMDU7XG5jb25zdCBTVE9QX0NPREUgPSAxMDY7XG5jb25zdCBDT0RFX1BBVFRFUk4gPSBbXG4gICAgWzIsIDEsIDIsIDIsIDIsIDJdLFxuICAgIFsyLCAyLCAyLCAxLCAyLCAyXSxcbiAgICBbMiwgMiwgMiwgMiwgMiwgMV0sXG4gICAgWzEsIDIsIDEsIDIsIDIsIDNdLFxuICAgIFsxLCAyLCAxLCAzLCAyLCAyXSxcbiAgICBbMSwgMywgMSwgMiwgMiwgMl0sXG4gICAgWzEsIDIsIDIsIDIsIDEsIDNdLFxuICAgIFsxLCAyLCAyLCAzLCAxLCAyXSxcbiAgICBbMSwgMywgMiwgMiwgMSwgMl0sXG4gICAgWzIsIDIsIDEsIDIsIDEsIDNdLFxuICAgIFsyLCAyLCAxLCAzLCAxLCAyXSxcbiAgICBbMiwgMywgMSwgMiwgMSwgMl0sXG4gICAgWzEsIDEsIDIsIDIsIDMsIDJdLFxuICAgIFsxLCAyLCAyLCAxLCAzLCAyXSxcbiAgICBbMSwgMiwgMiwgMiwgMywgMV0sXG4gICAgWzEsIDEsIDMsIDIsIDIsIDJdLFxuICAgIFsxLCAyLCAzLCAxLCAyLCAyXSxcbiAgICBbMSwgMiwgMywgMiwgMiwgMV0sXG4gICAgWzIsIDIsIDMsIDIsIDEsIDFdLFxuICAgIFsyLCAyLCAxLCAxLCAzLCAyXSxcbiAgICBbMiwgMiwgMSwgMiwgMywgMV0sXG4gICAgWzIsIDEsIDMsIDIsIDEsIDJdLFxuICAgIFsyLCAyLCAzLCAxLCAxLCAyXSxcbiAgICBbMywgMSwgMiwgMSwgMywgMV0sXG4gICAgWzMsIDEsIDEsIDIsIDIsIDJdLFxuICAgIFszLCAyLCAxLCAxLCAyLCAyXSxcbiAgICBbMywgMiwgMSwgMiwgMiwgMV0sXG4gICAgWzMsIDEsIDIsIDIsIDEsIDJdLFxuICAgIFszLCAyLCAyLCAxLCAxLCAyXSxcbiAgICBbMywgMiwgMiwgMiwgMSwgMV0sXG4gICAgWzIsIDEsIDIsIDEsIDIsIDNdLFxuICAgIFsyLCAxLCAyLCAzLCAyLCAxXSxcbiAgICBbMiwgMywgMiwgMSwgMiwgMV0sXG4gICAgWzEsIDEsIDEsIDMsIDIsIDNdLFxuICAgIFsxLCAzLCAxLCAxLCAyLCAzXSxcbiAgICBbMSwgMywgMSwgMywgMiwgMV0sXG4gICAgWzEsIDEsIDIsIDMsIDEsIDNdLFxuICAgIFsxLCAzLCAyLCAxLCAxLCAzXSxcbiAgICBbMSwgMywgMiwgMywgMSwgMV0sXG4gICAgWzIsIDEsIDEsIDMsIDEsIDNdLFxuICAgIFsyLCAzLCAxLCAxLCAxLCAzXSxcbiAgICBbMiwgMywgMSwgMywgMSwgMV0sXG4gICAgWzEsIDEsIDIsIDEsIDMsIDNdLFxuICAgIFsxLCAxLCAyLCAzLCAzLCAxXSxcbiAgICBbMSwgMywgMiwgMSwgMywgMV0sXG4gICAgWzEsIDEsIDMsIDEsIDIsIDNdLFxuICAgIFsxLCAxLCAzLCAzLCAyLCAxXSxcbiAgICBbMSwgMywgMywgMSwgMiwgMV0sXG4gICAgWzMsIDEsIDMsIDEsIDIsIDFdLFxuICAgIFsyLCAxLCAxLCAzLCAzLCAxXSxcbiAgICBbMiwgMywgMSwgMSwgMywgMV0sXG4gICAgWzIsIDEsIDMsIDEsIDEsIDNdLFxuICAgIFsyLCAxLCAzLCAzLCAxLCAxXSxcbiAgICBbMiwgMSwgMywgMSwgMywgMV0sXG4gICAgWzMsIDEsIDEsIDEsIDIsIDNdLFxuICAgIFszLCAxLCAxLCAzLCAyLCAxXSxcbiAgICBbMywgMywgMSwgMSwgMiwgMV0sXG4gICAgWzMsIDEsIDIsIDEsIDEsIDNdLFxuICAgIFszLCAxLCAyLCAzLCAxLCAxXSxcbiAgICBbMywgMywgMiwgMSwgMSwgMV0sXG4gICAgWzMsIDEsIDQsIDEsIDEsIDFdLFxuICAgIFsyLCAyLCAxLCA0LCAxLCAxXSxcbiAgICBbNCwgMywgMSwgMSwgMSwgMV0sXG4gICAgWzEsIDEsIDEsIDIsIDIsIDRdLFxuICAgIFsxLCAxLCAxLCA0LCAyLCAyXSxcbiAgICBbMSwgMiwgMSwgMSwgMiwgNF0sXG4gICAgWzEsIDIsIDEsIDQsIDIsIDFdLFxuICAgIFsxLCA0LCAxLCAxLCAyLCAyXSxcbiAgICBbMSwgNCwgMSwgMiwgMiwgMV0sXG4gICAgWzEsIDEsIDIsIDIsIDEsIDRdLFxuICAgIFsxLCAxLCAyLCA0LCAxLCAyXSxcbiAgICBbMSwgMiwgMiwgMSwgMSwgNF0sXG4gICAgWzEsIDIsIDIsIDQsIDEsIDFdLFxuICAgIFsxLCA0LCAyLCAxLCAxLCAyXSxcbiAgICBbMSwgNCwgMiwgMiwgMSwgMV0sXG4gICAgWzIsIDQsIDEsIDIsIDEsIDFdLFxuICAgIFsyLCAyLCAxLCAxLCAxLCA0XSxcbiAgICBbNCwgMSwgMywgMSwgMSwgMV0sXG4gICAgWzIsIDQsIDEsIDEsIDEsIDJdLFxuICAgIFsxLCAzLCA0LCAxLCAxLCAxXSxcbiAgICBbMSwgMSwgMSwgMiwgNCwgMl0sXG4gICAgWzEsIDIsIDEsIDEsIDQsIDJdLFxuICAgIFsxLCAyLCAxLCAyLCA0LCAxXSxcbiAgICBbMSwgMSwgNCwgMiwgMSwgMl0sXG4gICAgWzEsIDIsIDQsIDEsIDEsIDJdLFxuICAgIFsxLCAyLCA0LCAyLCAxLCAxXSxcbiAgICBbNCwgMSwgMSwgMiwgMSwgMl0sXG4gICAgWzQsIDIsIDEsIDEsIDEsIDJdLFxuICAgIFs0LCAyLCAxLCAyLCAxLCAxXSxcbiAgICBbMiwgMSwgMiwgMSwgNCwgMV0sXG4gICAgWzIsIDEsIDQsIDEsIDIsIDFdLFxuICAgIFs0LCAxLCAyLCAxLCAyLCAxXSxcbiAgICBbMSwgMSwgMSwgMSwgNCwgM10sXG4gICAgWzEsIDEsIDEsIDMsIDQsIDFdLFxuICAgIFsxLCAzLCAxLCAxLCA0LCAxXSxcbiAgICBbMSwgMSwgNCwgMSwgMSwgM10sXG4gICAgWzEsIDEsIDQsIDMsIDEsIDFdLFxuICAgIFs0LCAxLCAxLCAxLCAxLCAzXSxcbiAgICBbNCwgMSwgMSwgMywgMSwgMV0sXG4gICAgWzEsIDEsIDMsIDEsIDQsIDFdLFxuICAgIFsxLCAxLCA0LCAxLCAzLCAxXSxcbiAgICBbMywgMSwgMSwgMSwgNCwgMV0sXG4gICAgWzQsIDEsIDEsIDEsIDMsIDFdLFxuICAgIFsyLCAxLCAxLCA0LCAxLCAyXSxcbiAgICBbMiwgMSwgMSwgMiwgMSwgNF0sXG4gICAgWzIsIDEsIDEsIDIsIDMsIDJdLFxuICAgIFsyLCAzLCAzLCAxLCAxLCAxLCAyXVxuXTtcbmNvbnN0IE1PRFVMRV9JTkRJQ0VTID0geyBiYXI6IFswLCAyLCA0XSwgc3BhY2U6IFsxLCAzLCA1XSB9O1xuXG5leHBvcnQgY2xhc3MgQ29kZTEyOFJlYWRlciBleHRlbmRzIEJhcmNvZGVSZWFkZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuX2Zvcm1hdCA9ICdjb2RlXzEyOCc7XG4gICAgICAgIHRoaXMuX3NpbmdsZUNvZGVFcnJvciA9IDAuNjQ7XG4gICAgICAgIHRoaXMuX2F2ZXJhZ2VDb2RlRXJyb3IgPSAwLjMwO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZGVjb2RlQ29kZShzdGFydDogbnVtYmVyLCBjb3JyZWN0aW9uOiBCYXJjb2RlQ29ycmVjdGlvbik6IEJhcmNvZGVJbmZvIHtcbiAgICAgICAgY29uc3QgY291bnRlciA9IFswLCAwLCAwLCAwLCAwLCAwXTtcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gc3RhcnQ7XG4gICAgICAgIGNvbnN0IGJlc3RNYXRjaDogQmFyY29kZUluZm8gPSB7XG4gICAgICAgICAgICBlcnJvcjogTnVtYmVyLk1BWF9WQUxVRSxcbiAgICAgICAgICAgIGNvZGU6IC0xLFxuICAgICAgICAgICAgc3RhcnQ6IHN0YXJ0LFxuICAgICAgICAgICAgZW5kOiBzdGFydCxcbiAgICAgICAgICAgIGNvcnJlY3Rpb246IHtcbiAgICAgICAgICAgICAgICBiYXI6IDEsXG4gICAgICAgICAgICAgICAgc3BhY2U6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgZXBzaWxvbiA9IHRoaXMuQVZFUkFHRV9DT0RFX0VSUk9SO1xuICAgICAgICBsZXQgaXNXaGl0ZTogMCB8IDEgPSB0aGlzLl9yb3dbb2Zmc2V0XSA/IDAgOiAxO1xuICAgICAgICBsZXQgY291bnRlclBvcyA9IDA7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IG9mZnNldDsgaSA8IHRoaXMuX3Jvdy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3Jvd1tpXSBeIGlzV2hpdGUpIHtcbiAgICAgICAgICAgICAgICBjb3VudGVyW2NvdW50ZXJQb3NdKys7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChjb3VudGVyUG9zID09PSBjb3VudGVyLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvcnJlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NvcnJlY3QoY291bnRlciwgY29ycmVjdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBjb2RlID0gMDsgY29kZSA8IENPREVfUEFUVEVSTi5sZW5ndGg7IGNvZGUrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXJyb3IgPSB0aGlzLl9tYXRjaFBhdHRlcm4oY291bnRlciwgQ09ERV9QQVRURVJOW2NvZGVdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnJvciA8IGJlc3RNYXRjaC5lcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlc3RNYXRjaC5jb2RlID0gY29kZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZXN0TWF0Y2guZXJyb3IgPSBlcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGJlc3RNYXRjaC5lbmQgPSBpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChiZXN0TWF0Y2guY29kZSA9PT0gLTEgfHwgYmVzdE1hdGNoLmVycm9yID4gZXBzaWxvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBleHBlY3RlZCA9IENPREVfUEFUVEVSTltiZXN0TWF0Y2guY29kZV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChleHBlY3RlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmVzdE1hdGNoLmNvcnJlY3Rpb24uYmFyID0gdGhpcy5fY2FsY3VsYXRlQ29ycmVjdGlvbihleHBlY3RlZCwgY291bnRlciwgTU9EVUxFX0lORElDRVMuYmFyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlc3RNYXRjaC5jb3JyZWN0aW9uLnNwYWNlID0gdGhpcy5fY2FsY3VsYXRlQ29ycmVjdGlvbihleHBlY3RlZCwgY291bnRlciwgTU9EVUxFX0lORElDRVMuc3BhY2UpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJlc3RNYXRjaDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb3VudGVyUG9zKys7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY291bnRlcltjb3VudGVyUG9zXSA9IDE7XG4gICAgICAgICAgICAgICAgaXNXaGl0ZSA9IGlzV2hpdGUgPyAwIDogMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2NvcnJlY3QoY291bnRlcjogQXJyYXk8bnVtYmVyPiwgY29ycmVjdGlvbjogQmFyY29kZUNvcnJlY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fY29ycmVjdEJhcnMoY291bnRlciwgY29ycmVjdGlvbi5iYXIsIE1PRFVMRV9JTkRJQ0VTLmJhcik7XG4gICAgICAgIHRoaXMuX2NvcnJlY3RCYXJzKGNvdW50ZXIsIGNvcnJlY3Rpb24uc3BhY2UsIE1PRFVMRV9JTkRJQ0VTLnNwYWNlKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2ZpbmRTdGFydCgpIHtcbiAgICAgICAgY29uc3QgY291bnRlciA9IFswLCAwLCAwLCAwLCAwLCAwXTtcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gdGhpcy5fbmV4dFNldCh0aGlzLl9yb3cpO1xuICAgICAgICBjb25zdCBiZXN0TWF0Y2ggPSB7XG4gICAgICAgICAgICBlcnJvcjogTnVtYmVyLk1BWF9WQUxVRSxcbiAgICAgICAgICAgIGNvZGU6IC0xLFxuICAgICAgICAgICAgc3RhcnQ6IDAsXG4gICAgICAgICAgICBlbmQ6IDAsXG4gICAgICAgICAgICBjb3JyZWN0aW9uOiB7XG4gICAgICAgICAgICAgICAgYmFyOiAxLFxuICAgICAgICAgICAgICAgIHNwYWNlOiAxXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGVwc2lsb24gPSB0aGlzLkFWRVJBR0VfQ09ERV9FUlJPUjtcbiAgICAgICAgbGV0IGlzV2hpdGU6IDAgfCAxID0gMDtcbiAgICAgICAgbGV0IGNvdW50ZXJQb3MgPSAwO1xuICAgICAgICBsZXQgc3VtOiBudW1iZXI7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IG9mZnNldDsgaSA8IHRoaXMuX3Jvdy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3Jvd1tpXSBeIGlzV2hpdGUpIHtcbiAgICAgICAgICAgICAgICBjb3VudGVyW2NvdW50ZXJQb3NdKys7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChjb3VudGVyUG9zID09PSBjb3VudGVyLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgc3VtID0gMDtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb3VudGVyLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdW0gKz0gY291bnRlcltqXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBjb2RlID0gU1RBUlRfQ09ERV9BOyBjb2RlIDw9IFNUQVJUX0NPREVfQzsgY29kZSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlcnJvciA9IHRoaXMuX21hdGNoUGF0dGVybihjb3VudGVyLCBDT0RFX1BBVFRFUk5bY29kZV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yIDwgYmVzdE1hdGNoLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVzdE1hdGNoLmNvZGUgPSBjb2RlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlc3RNYXRjaC5lcnJvciA9IGVycm9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChiZXN0TWF0Y2guZXJyb3IgPCBlcHNpbG9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiZXN0TWF0Y2guc3RhcnQgPSBpIC0gc3VtO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmVzdE1hdGNoLmVuZCA9IGk7XG4gICAgICAgICAgICAgICAgICAgICAgICBiZXN0TWF0Y2guY29ycmVjdGlvbi5iYXIgPSB0aGlzLl9jYWxjdWxhdGVDb3JyZWN0aW9uKENPREVfUEFUVEVSTltiZXN0TWF0Y2guY29kZV0sIGNvdW50ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTU9EVUxFX0lORElDRVMuYmFyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlc3RNYXRjaC5jb3JyZWN0aW9uLnNwYWNlID0gdGhpcy5fY2FsY3VsYXRlQ29ycmVjdGlvbihDT0RFX1BBVFRFUk5bYmVzdE1hdGNoLmNvZGVdLCBjb3VudGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1PRFVMRV9JTkRJQ0VTLnNwYWNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBiZXN0TWF0Y2g7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDQ7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY291bnRlcltqXSA9IGNvdW50ZXJbaiArIDJdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXJbNF0gPSAwO1xuICAgICAgICAgICAgICAgICAgICBjb3VudGVyWzVdID0gMDtcbiAgICAgICAgICAgICAgICAgICAgY291bnRlclBvcy0tO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXJQb3MrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY291bnRlcltjb3VudGVyUG9zXSA9IDE7XG4gICAgICAgICAgICAgICAgaXNXaGl0ZSA9IGlzV2hpdGUgPyAwIDogMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGRlY29kZSgpOiBCYXJjb2RlIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEFycmF5PHN0cmluZyB8IG51bWJlcj4oKTtcbiAgICAgICAgY29uc3Qgc3RhcnRJbmZvID0gdGhpcy5fZmluZFN0YXJ0KCk7XG4gICAgICAgIGxldCBjb2RlOiBCYXJjb2RlSW5mbyA9IG51bGw7XG4gICAgICAgIGxldCBkb25lID0gZmFsc2U7XG4gICAgICAgIGxldCBtdWx0aXBsaWVyID0gMDtcbiAgICAgICAgbGV0IGNoZWNrc3VtID0gMDtcbiAgICAgICAgbGV0IGNvZGVzZXQ6IG51bWJlcjtcbiAgICAgICAgbGV0IHJhd1Jlc3VsdCA9IG5ldyBBcnJheTxudW1iZXI+KCk7XG4gICAgICAgIGxldCBkZWNvZGVkQ29kZXMgPSBuZXcgQXJyYXk8QmFyY29kZUluZm8+KCk7XG4gICAgICAgIGxldCBzaGlmdE5leHQgPSBmYWxzZTtcbiAgICAgICAgbGV0IHVuc2hpZnQ6IGJvb2xlYW47XG4gICAgICAgIGxldCByZW1vdmVMYXN0Q2hhcmFjdGVyID0gdHJ1ZTtcblxuICAgICAgICBpZiAoc3RhcnRJbmZvID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb2RlID0ge1xuICAgICAgICAgICAgY29kZTogc3RhcnRJbmZvLmNvZGUsXG4gICAgICAgICAgICBzdGFydDogc3RhcnRJbmZvLnN0YXJ0LFxuICAgICAgICAgICAgZW5kOiBzdGFydEluZm8uZW5kLFxuICAgICAgICAgICAgY29ycmVjdGlvbjoge1xuICAgICAgICAgICAgICAgIGJhcjogc3RhcnRJbmZvLmNvcnJlY3Rpb24uYmFyLFxuICAgICAgICAgICAgICAgIHNwYWNlOiBzdGFydEluZm8uY29ycmVjdGlvbi5zcGFjZVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBkZWNvZGVkQ29kZXMucHVzaChjb2RlKTtcbiAgICAgICAgY2hlY2tzdW0gPSBjb2RlLmNvZGU7XG5cbiAgICAgICAgc3dpdGNoIChjb2RlLmNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgU1RBUlRfQ09ERV9BOlxuICAgICAgICAgICAgICAgIGNvZGVzZXQgPSBDT0RFX0E7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFNUQVJUX0NPREVfQjpcbiAgICAgICAgICAgICAgICBjb2Rlc2V0ID0gQ09ERV9CO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBTVEFSVF9DT0RFX0M6XG4gICAgICAgICAgICAgICAgY29kZXNldCA9IENPREVfQztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICB3aGlsZSAoIWRvbmUpIHtcbiAgICAgICAgICAgIHVuc2hpZnQgPSBzaGlmdE5leHQ7XG4gICAgICAgICAgICBzaGlmdE5leHQgPSBmYWxzZTtcbiAgICAgICAgICAgIGNvZGUgPSB0aGlzLl9kZWNvZGVDb2RlKGNvZGUuZW5kLCBjb2RlLmNvcnJlY3Rpb24pO1xuICAgICAgICAgICAgaWYgKGNvZGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAoY29kZS5jb2RlICE9PSBTVE9QX0NPREUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlTGFzdENoYXJhY3RlciA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGNvZGUuY29kZSAhPT0gU1RPUF9DT0RFKSB7XG4gICAgICAgICAgICAgICAgICAgIHJhd1Jlc3VsdC5wdXNoKGNvZGUuY29kZSk7XG4gICAgICAgICAgICAgICAgICAgIG11bHRpcGxpZXIrKztcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tzdW0gKz0gbXVsdGlwbGllciAqIGNvZGUuY29kZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGVjb2RlZENvZGVzLnB1c2goY29kZSk7XG5cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGNvZGVzZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBDT0RFX0E6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2RlLmNvZGUgPCA2NCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUoMzIgKyBjb2RlLmNvZGUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY29kZS5jb2RlIDwgOTYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGUuY29kZSAtIDY0KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2RlLmNvZGUgIT09IFNUT1BfQ09ERSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVMYXN0Q2hhcmFjdGVyID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoY29kZS5jb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgQ09ERV9TSElGVDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaWZ0TmV4dCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2Rlc2V0ID0gQ09ERV9CO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgQ09ERV9COlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29kZXNldCA9IENPREVfQjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIENPREVfQzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvZGVzZXQgPSBDT0RFX0M7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBTVE9QX0NPREU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb25lID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgQ09ERV9COiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29kZS5jb2RlIDwgOTYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKDMyICsgY29kZS5jb2RlKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2RlLmNvZGUgIT09IFNUT1BfQ09ERSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVMYXN0Q2hhcmFjdGVyID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoY29kZS5jb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgQ09ERV9TSElGVDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaWZ0TmV4dCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2Rlc2V0ID0gQ09ERV9BO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgQ09ERV9BOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29kZXNldCA9IENPREVfQTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIENPREVfQzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvZGVzZXQgPSBDT0RFX0M7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBTVE9QX0NPREU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb25lID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgQ09ERV9DOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29kZS5jb2RlIDwgMTAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goY29kZS5jb2RlIDwgMTAgPyAnMCcgKyBjb2RlLmNvZGUgOiBjb2RlLmNvZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29kZS5jb2RlICE9PSBTVE9QX0NPREUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlTGFzdENoYXJhY3RlciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGNvZGUuY29kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIENPREVfQTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvZGVzZXQgPSBDT0RFX0E7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBDT0RFX0I6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2Rlc2V0ID0gQ09ERV9CO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgU1RPUF9DT0RFOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9uZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZG9uZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodW5zaGlmdCkge1xuICAgICAgICAgICAgICAgIGNvZGVzZXQgPSBjb2Rlc2V0ID09PSBDT0RFX0EgPyBDT0RFX0IgOiBDT0RFX0E7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29kZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb2RlLmVuZCA9IHRoaXMuX25leHRVbnNldCh0aGlzLl9yb3csIGNvZGUuZW5kKTtcbiAgICAgICAgaWYgKCF0aGlzLl92ZXJpZnlUcmFpbGluZ1doaXRlc3BhY2UoY29kZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY2hlY2tzdW0gLT0gbXVsdGlwbGllciAqIHJhd1Jlc3VsdFtyYXdSZXN1bHQubGVuZ3RoIC0gMV07XG4gICAgICAgIGlmIChjaGVja3N1bSAlIDEwMyAhPT0gcmF3UmVzdWx0W3Jhd1Jlc3VsdC5sZW5ndGggLSAxXSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXJlc3VsdC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcmVtb3ZlIGxhc3QgY29kZSBmcm9tIHJlc3VsdCAoY2hlY2tzdW0pXG4gICAgICAgIGlmIChyZW1vdmVMYXN0Q2hhcmFjdGVyKSB7XG4gICAgICAgICAgICByZXN1bHQuc3BsaWNlKHJlc3VsdC5sZW5ndGggLSAxLCAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb2RlOiByZXN1bHQuam9pbignJyksXG4gICAgICAgICAgICBzdGFydDogc3RhcnRJbmZvLnN0YXJ0LFxuICAgICAgICAgICAgZW5kOiBjb2RlLmVuZCxcbiAgICAgICAgICAgIGNvZGVzZXQsXG4gICAgICAgICAgICBzdGFydEluZm8sXG4gICAgICAgICAgICBkZWNvZGVkQ29kZXMsXG4gICAgICAgICAgICBlbmRJbmZvOiBjb2RlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF92ZXJpZnlUcmFpbGluZ1doaXRlc3BhY2UoZW5kSW5mbzogQmFyY29kZUluZm8pOiBCYXJjb2RlSW5mbyB7XG4gICAgICAgIGNvbnN0IHRyYWlsaW5nV2hpdGVzcGFjZUVuZCA9IGVuZEluZm8uZW5kICsgKGVuZEluZm8uZW5kIC0gZW5kSW5mby5zdGFydCkgLyAyO1xuXG4gICAgICAgIGlmICh0cmFpbGluZ1doaXRlc3BhY2VFbmQgPCB0aGlzLl9yb3cubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fbWF0Y2hSYW5nZShlbmRJbmZvLmVuZCwgdHJhaWxpbmdXaGl0ZXNwYWNlRW5kLCAwKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbmRJbmZvO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfY2FsY3VsYXRlQ29ycmVjdGlvbihcbiAgICAgICAgZXhwZWN0ZWQ6IFJlYWRvbmx5QXJyYXk8bnVtYmVyPixcbiAgICAgICAgbm9ybWFsaXplZDogUmVhZG9ubHlBcnJheTxudW1iZXI+LFxuICAgICAgICBpbmRpY2VzOiBSZWFkb25seUFycmF5PG51bWJlcj5cbiAgICApOiBudW1iZXIge1xuICAgICAgICBsZXQgc3VtTm9ybWFsaXplZCA9IDA7XG4gICAgICAgIGxldCBzdW1FeHBlY3RlZCA9IDA7XG5cbiAgICAgICAgZm9yIChsZXQgbGVuZ3RoID0gaW5kaWNlcy5sZW5ndGg7IGxlbmd0aC0tOykge1xuICAgICAgICAgICAgc3VtRXhwZWN0ZWQgKz0gZXhwZWN0ZWRbaW5kaWNlc1tsZW5ndGhdXTtcbiAgICAgICAgICAgIHN1bU5vcm1hbGl6ZWQgKz0gbm9ybWFsaXplZFtpbmRpY2VzW2xlbmd0aF1dO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1bUV4cGVjdGVkIC8gc3VtTm9ybWFsaXplZDtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBCYXJjb2RlLCBCYXJjb2RlSW5mbywgQmFyY29kZVJlYWRlciB9IGZyb20gJy4vYmFyY29kZS1yZWFkZXInO1xuXG5jb25zdCBBU1RFUklTSyA9IDB4MDk0O1xuY29uc3QgQUxQSEFCRVRIX1NUUklORyA9ICcwMTIzNDU2Nzg5QUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVotLiAqJC8rJSc7XG5jb25zdCBBTFBIQUJFVCA9IG5ldyBVaW50MTZBcnJheShbLi4uQUxQSEFCRVRIX1NUUklOR10ubWFwKGNoYXIgPT4gY2hhci5jaGFyQ29kZUF0KDApKSk7XG4vLyBjb25zdCBBTFBIQUJFVCA9IFs0OCwgNDksIDUwLCA1MSwgNTIsIDUzLCA1NCwgNTUsIDU2LCA1NywgNjUsIDY2LCA2NywgNjgsIDY5LCA3MCwgNzEsIDcyLCA3MywgNzQsIDc1LCA3NiwgNzcsIDc4LFxuLy8gICAgIDc5LCA4MCwgODEsIDgyLCA4MywgODQsIDg1LCA4NiwgODcsIDg4LCA4OSwgOTAsIDQ1LCA0NiwgMzIsIDQyLCAzNiwgNDcsIDQzLCAzN107XG5jb25zdCBDSEFSQUNURVJfRU5DT0RJTkdTID0gbmV3IFVpbnQxNkFycmF5KFtcbiAgICAweDAzNCwgMHgxMjEsIDB4MDYxLCAweDE2MCwgMHgwMzEsIDB4MTMwLCAweDA3MCwgMHgwMjUsIDB4MTI0LCAweDA2NCwgMHgxMDksIDB4MDQ5LCAweDE0OCwgMHgwMTksIDB4MTE4LCAweDA1OCxcbiAgICAweDAwRCwgMHgxMEMsIDB4MDRDLCAweDAxQywgMHgxMDMsIDB4MDQzLCAweDE0MiwgMHgwMTMsIDB4MTEyLCAweDA1MiwgMHgwMDcsIDB4MTA2LCAweDA0NiwgMHgwMTYsIDB4MTgxLCAweDBDMSxcbiAgICAweDFDMCwgMHgwOTEsIDB4MTkwLCAweDBEMCwgMHgwODUsIDB4MTg0LCAweDBDNCwgMHgwOTQsIDB4MEE4LCAweDBBMiwgMHgwOEEsIDB4MDJBXG5dKTtcblxuZXhwb3J0IGNsYXNzIENvZGUzOVJlYWRlciBleHRlbmRzIEJhcmNvZGVSZWFkZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuX2Zvcm1hdCA9ICdjb2RlXzM5JztcbiAgICB9XG5cbiAgICBkZWNvZGUoKTogQmFyY29kZSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy5fZmluZFN0YXJ0KCk7XG5cbiAgICAgICAgaWYgKCFzdGFydCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xuICAgICAgICBsZXQgY291bnRlcnMgPSBuZXcgVWludDE2QXJyYXkoOSk7XG4gICAgICAgIGxldCBkZWNvZGVkQ2hhcjogc3RyaW5nO1xuICAgICAgICBsZXQgbGFzdFN0YXJ0OiBudW1iZXI7XG4gICAgICAgIGxldCBuZXh0U3RhcnQgPSB0aGlzLl9uZXh0U2V0KHRoaXMuX3Jvdywgc3RhcnQuZW5kKTtcblxuICAgICAgICBkbyB7XG4gICAgICAgICAgICB0aGlzLl90b0NvdW50ZXJzKG5leHRTdGFydCwgY291bnRlcnMpO1xuICAgICAgICAgICAgY29uc3QgcGF0dGVybiA9IHRoaXMuX3RvUGF0dGVybihjb3VudGVycyk7XG4gICAgICAgICAgICBpZiAocGF0dGVybiA8IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlY29kZWRDaGFyID0gdGhpcy5fcGF0dGVyblRvQ2hhcihwYXR0ZXJuKTtcbiAgICAgICAgICAgIGlmIChkZWNvZGVkQ2hhciA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goZGVjb2RlZENoYXIpO1xuICAgICAgICAgICAgbGFzdFN0YXJ0ID0gbmV4dFN0YXJ0O1xuICAgICAgICAgICAgbmV4dFN0YXJ0ICs9IGNvdW50ZXJzLnJlZHVjZSgoc3VtLCBpdGVtKSA9PiBzdW0gKyBpdGVtLCAwKTtcbiAgICAgICAgICAgIG5leHRTdGFydCA9IHRoaXMuX25leHRTZXQodGhpcy5fcm93LCBuZXh0U3RhcnQpO1xuICAgICAgICB9IHdoaWxlIChkZWNvZGVkQ2hhciAhPT0gJyonKTtcbiAgICAgICAgcmVzdWx0LnBvcCgpO1xuXG4gICAgICAgIGlmICghcmVzdWx0Lmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuX3ZlcmlmeVRyYWlsaW5nV2hpdGVzcGFjZShsYXN0U3RhcnQsIG5leHRTdGFydCwgY291bnRlcnMpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb2RlOiByZXN1bHQuam9pbignJyksXG4gICAgICAgICAgICBzdGFydDogc3RhcnQuc3RhcnQsXG4gICAgICAgICAgICBlbmQ6IG5leHRTdGFydCxcbiAgICAgICAgICAgIHN0YXJ0SW5mbzogc3RhcnQsXG4gICAgICAgICAgICBkZWNvZGVkQ29kZXM6IHJlc3VsdFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfcGF0dGVyblRvQ2hhcihwYXR0ZXJuKTogc3RyaW5nIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBDSEFSQUNURVJfRU5DT0RJTkdTLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoQ0hBUkFDVEVSX0VOQ09ESU5HU1tpXSA9PT0gcGF0dGVybikge1xuICAgICAgICAgICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKEFMUEhBQkVUW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBwcml2YXRlIF92ZXJpZnlUcmFpbGluZ1doaXRlc3BhY2UobGFzdFN0YXJ0OiBudW1iZXIsIG5leHRTdGFydDogbnVtYmVyLCBjb3VudGVyczogVWludDE2QXJyYXkpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgcGF0dGVyblNpemUgPSBjb3VudGVycy5yZWR1Y2UoKHN1bSwgaXRlbSkgPT4gc3VtICsgaXRlbSwgMCk7XG4gICAgICAgIGNvbnN0IHRyYWlsaW5nV2hpdGVzcGFjZUVuZCA9IG5leHRTdGFydCAtIGxhc3RTdGFydCAtIHBhdHRlcm5TaXplO1xuICAgICAgICByZXR1cm4gKHRyYWlsaW5nV2hpdGVzcGFjZUVuZCAqIDMpID49IHBhdHRlcm5TaXplO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2ZpbmROZXh0V2lkdGgoY291bnRlcnM6IFVpbnQxNkFycmF5LCBjdXJyZW50OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICBsZXQgbWluV2lkdGggPSBOdW1iZXIuTUFYX1ZBTFVFO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnRlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChjb3VudGVyc1tpXSA8IG1pbldpZHRoICYmIGNvdW50ZXJzW2ldID4gY3VycmVudCkge1xuICAgICAgICAgICAgICAgIG1pbldpZHRoID0gY291bnRlcnNbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbWluV2lkdGg7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfdG9QYXR0ZXJuKGNvdW50ZXJzOiBVaW50MTZBcnJheSk6IG51bWJlciB7XG4gICAgICAgIGNvbnN0IG51bUNvdW50ZXJzID0gY291bnRlcnMubGVuZ3RoO1xuICAgICAgICBsZXQgbWF4TmFycm93V2lkdGggPSAwO1xuICAgICAgICBsZXQgbnVtV2lkZUJhcnMgPSBudW1Db3VudGVycztcbiAgICAgICAgbGV0IHdpZGVCYXJXaWR0aCA9IDA7XG4gICAgICAgIGxldCBwYXR0ZXJuOiBudW1iZXI7XG5cbiAgICAgICAgd2hpbGUgKG51bVdpZGVCYXJzID4gMykge1xuICAgICAgICAgICAgbWF4TmFycm93V2lkdGggPSB0aGlzLl9maW5kTmV4dFdpZHRoKGNvdW50ZXJzLCBtYXhOYXJyb3dXaWR0aCk7XG4gICAgICAgICAgICBudW1XaWRlQmFycyA9IDA7XG4gICAgICAgICAgICBwYXR0ZXJuID0gMDtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtQ291bnRlcnM7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChjb3VudGVyc1tpXSA+IG1heE5hcnJvd1dpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm4gfD0gMSA8PCAobnVtQ291bnRlcnMgLSAxIC0gaSk7XG4gICAgICAgICAgICAgICAgICAgIG51bVdpZGVCYXJzKys7XG4gICAgICAgICAgICAgICAgICAgIHdpZGVCYXJXaWR0aCArPSBjb3VudGVyc1tpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChudW1XaWRlQmFycyA9PT0gMykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtQ291bnRlcnMgJiYgbnVtV2lkZUJhcnMgPiAwOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ZXJzW2ldID4gbWF4TmFycm93V2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bVdpZGVCYXJzLS07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKGNvdW50ZXJzW2ldICogMikgPj0gd2lkZUJhcldpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBwYXR0ZXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2ZpbmRTdGFydCgpOiBCYXJjb2RlSW5mbyB7XG4gICAgICAgIGNvbnN0IG9mZnNldCA9IHRoaXMuX25leHRTZXQodGhpcy5fcm93KTtcbiAgICAgICAgbGV0IHBhdHRlcm5TdGFydCA9IG9mZnNldDtcbiAgICAgICAgY29uc3QgY291bnRlciA9IG5ldyBVaW50MTZBcnJheSg5KTtcbiAgICAgICAgbGV0IGNvdW50ZXJQb3MgPSAwO1xuICAgICAgICBsZXQgaXNXaGl0ZTogMCB8IDEgPSAwO1xuICAgICAgICBsZXQgd2hpdGVTcGFjZU11c3RTdGFydDogbnVtYmVyO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSBvZmZzZXQ7IGkgPCB0aGlzLl9yb3cubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9yb3dbaV0gXiBpc1doaXRlKSB7XG4gICAgICAgICAgICAgICAgY291bnRlcltjb3VudGVyUG9zXSsrO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoY291bnRlclBvcyA9PT0gY291bnRlci5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGZpbmQgc3RhcnQgcGF0dGVyblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fdG9QYXR0ZXJuKGNvdW50ZXIpID09PSBBU1RFUklTSykge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGVTcGFjZU11c3RTdGFydCA9IE1hdGgubWF4KDAsIHBhdHRlcm5TdGFydCAtICgoaSAtIHBhdHRlcm5TdGFydCkgLyA0KSkgfCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX21hdGNoUmFuZ2Uod2hpdGVTcGFjZU11c3RTdGFydCwgcGF0dGVyblN0YXJ0LCAwKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBwYXR0ZXJuU3RhcnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuU3RhcnQgKz0gY291bnRlclswXSArIGNvdW50ZXJbMV07XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgNzsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVyW2pdID0gY291bnRlcltqICsgMl07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY291bnRlcls3XSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXJbOF0gPSAwO1xuICAgICAgICAgICAgICAgICAgICBjb3VudGVyUG9zLS07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnRlclBvcysrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb3VudGVyW2NvdW50ZXJQb3NdID0gMTtcbiAgICAgICAgICAgICAgICBpc1doaXRlID0gaXNXaGl0ZSA/IDAgOiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQmFyY29kZSB9IGZyb20gJy4vYmFyY29kZS1yZWFkZXInO1xuaW1wb3J0IHsgQ29kZTM5UmVhZGVyIH0gZnJvbSAnLi9jb2RlLTM5LXJlYWRlcic7XG5cbmV4cG9ydCBjbGFzcyBDb2RlMzlWSU5SZWFkZXIgZXh0ZW5kcyBDb2RlMzlSZWFkZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuX2Zvcm1hdCA9ICdjb2RlXzM5X3Zpbic7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGJvcnJvd3NcbiAgICAgKiBodHRwczovL2dpdGh1Yi5jb20venhpbmcvenhpbmcvYmxvYi9tYXN0ZXIvY29yZS9zcmMvbWFpbi9qYXZhL2NvbS9nb29nbGUvenhpbmcvY2xpZW50L3Jlc3VsdC9WSU5SZXN1bHRQYXJzZXIuamF2YVxuICAgICAqL1xuICAgIGRlY29kZSgpOiBCYXJjb2RlIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuZGVjb2RlKCk7XG4gICAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjb2RlID0gcmVzdWx0LmNvZGU7XG5cbiAgICAgICAgaWYgKCFjb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvZGUgPSBjb2RlLnJlcGxhY2UoL1tJT1FdL2csICcnKTtcblxuICAgICAgICBpZiAoIS9bQS1aMC05XXsxN30vLnRlc3QoY29kZSkpIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0ZhaWxlZCBBWjA5IHBhdHRlcm4gY29kZTonLCBjb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLl9jaGVja0NoZWNrc3VtKGNvZGUpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc3VsdC5jb2RlID0gY29kZTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9jaGVja0NoZWNrc3VtKGNvZGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICAvLyBUT0RPXG4gICAgICAgIHJldHVybiAhIWNvZGU7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQmFyY29kZSwgQmFyY29kZUluZm8sIEJhcmNvZGVSZWFkZXIgfSBmcm9tICcuL2JhcmNvZGUtcmVhZGVyJztcblxuY29uc3QgQUxQSEFCRVRIX1NUUklORyA9ICcwMTIzNDU2Nzg5QUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVotLiAkLyslYWJjZConO1xuY29uc3QgQUxQSEFCRVQgPSBuZXcgVWludDE2QXJyYXkoWy4uLkFMUEhBQkVUSF9TVFJJTkddLm1hcChjaGFyID0+IGNoYXIuY2hhckNvZGVBdCgwKSkpO1xuY29uc3QgQ0hBUkFDVEVSX0VOQ09ESU5HUyA9IG5ldyBVaW50MTZBcnJheShbXG4gICAgMHgxMTQsIDB4MTQ4LCAweDE0NCwgMHgxNDIsIDB4MTI4LCAweDEyNCwgMHgxMjIsIDB4MTUwLCAweDExMiwgMHgxMEEsIDB4MUE4LCAweDFBNCwgMHgxQTIsIDB4MTk0LCAweDE5MiwgMHgxOEEsXG4gICAgMHgxNjgsIDB4MTY0LCAweDE2MiwgMHgxMzQsIDB4MTFBLCAweDE1OCwgMHgxNEMsIDB4MTQ2LCAweDEyQywgMHgxMTYsIDB4MUI0LCAweDFCMiwgMHgxQUMsIDB4MUE2LCAweDE5NiwgMHgxOUEsXG4gICAgMHgxNkMsIDB4MTY2LCAweDEzNiwgMHgxM0EsIDB4MTJFLCAweDFENCwgMHgxRDIsIDB4MUNBLCAweDE2RSwgMHgxNzYsIDB4MUFFLCAweDEyNiwgMHgxREEsIDB4MUQ2LCAweDEzMiwgMHgxNUVcbl0pO1xuY29uc3QgQVNURVJJU0sgPSAweDE1RTtcblxuZXhwb3J0IGNsYXNzIENvZGU5M1JlYWRlciBleHRlbmRzIEJhcmNvZGVSZWFkZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuX2Zvcm1hdCA9ICdjb2RlXzkzJztcbiAgICB9XG5cbiAgICBkZWNvZGUoKTogQmFyY29kZSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy5fZmluZFN0YXJ0KCk7XG5cbiAgICAgICAgaWYgKCFzdGFydCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmVzdWx0ID0gbmV3IEFycmF5PHN0cmluZz4oKTtcbiAgICAgICAgbGV0IGNvdW50ZXJzID0gbmV3IFVpbnQxNkFycmF5KDYpO1xuICAgICAgICBsZXQgZGVjb2RlZENoYXI6IHN0cmluZztcbiAgICAgICAgbGV0IGxhc3RTdGFydDogbnVtYmVyO1xuICAgICAgICBsZXQgbmV4dFN0YXJ0ID0gdGhpcy5fbmV4dFNldCh0aGlzLl9yb3csIHN0YXJ0LmVuZCk7XG5cbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgdGhpcy5fdG9Db3VudGVycyhuZXh0U3RhcnQsIGNvdW50ZXJzKTtcbiAgICAgICAgICAgIGNvbnN0IHBhdHRlcm4gPSB0aGlzLl90b1BhdHRlcm4oY291bnRlcnMpO1xuICAgICAgICAgICAgaWYgKHBhdHRlcm4gPCAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWNvZGVkQ2hhciA9IHRoaXMuX3BhdHRlcm5Ub0NoYXIocGF0dGVybik7XG4gICAgICAgICAgICBpZiAoZGVjb2RlZENoYXIgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGRlY29kZWRDaGFyKTtcbiAgICAgICAgICAgIGxhc3RTdGFydCA9IG5leHRTdGFydDtcbiAgICAgICAgICAgIG5leHRTdGFydCArPSBjb3VudGVycy5yZWR1Y2UoKHN1bSwgaXRlbSkgPT4gc3VtICsgaXRlbSwgMCk7XG4gICAgICAgICAgICBuZXh0U3RhcnQgPSB0aGlzLl9uZXh0U2V0KHRoaXMuX3JvdywgbmV4dFN0YXJ0KTtcbiAgICAgICAgfSB3aGlsZSAoZGVjb2RlZENoYXIgIT09ICcqJyk7XG4gICAgICAgIHJlc3VsdC5wb3AoKTtcblxuICAgICAgICBpZiAoIXJlc3VsdC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLl92ZXJpZnlFbmQobGFzdFN0YXJ0LCBuZXh0U3RhcnQpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5fdmVyaWZ5Q2hlY2tzdW1zKHJlc3VsdCkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0LnNsaWNlKDAsIHJlc3VsdC5sZW5ndGggLSAyKTtcbiAgICAgICAgaWYgKChyZXN1bHQgPSB0aGlzLl9kZWNvZGVFeHRlbmRlZChyZXN1bHQpKSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29kZTogcmVzdWx0LmpvaW4oJycpLFxuICAgICAgICAgICAgc3RhcnQ6IHN0YXJ0LnN0YXJ0LFxuICAgICAgICAgICAgZW5kOiBuZXh0U3RhcnQsXG4gICAgICAgICAgICBzdGFydEluZm86IHN0YXJ0LFxuICAgICAgICAgICAgZGVjb2RlZENvZGVzOiByZXN1bHRcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX3BhdHRlcm5Ub0NoYXIocGF0dGVybjogbnVtYmVyKTogc3RyaW5nIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBDSEFSQUNURVJfRU5DT0RJTkdTLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoQ0hBUkFDVEVSX0VOQ09ESU5HU1tpXSA9PT0gcGF0dGVybikge1xuICAgICAgICAgICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKEFMUEhBQkVUW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBwcml2YXRlIF92ZXJpZnlFbmQobGFzdFN0YXJ0OiBudW1iZXIsIG5leHRTdGFydDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIGlmIChsYXN0U3RhcnQgPT09IG5leHRTdGFydCB8fCAhdGhpcy5fcm93W25leHRTdGFydF0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF90b1BhdHRlcm4oY291bnRlcnM6IFVpbnQxNkFycmF5KTogbnVtYmVyIHtcbiAgICAgICAgY29uc3QgbnVtQ291bnRlcnMgPSBjb3VudGVycy5sZW5ndGg7XG4gICAgICAgIGxldCBwYXR0ZXJuID0gMDtcbiAgICAgICAgbGV0IHN1bSA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtQ291bnRlcnM7IGkrKykge1xuICAgICAgICAgICAgc3VtICs9IGNvdW50ZXJzW2ldO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1Db3VudGVyczsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbm9ybWFsaXplZCA9IE1hdGgucm91bmQoY291bnRlcnNbaV0gKiA5IC8gc3VtKTtcbiAgICAgICAgICAgIGlmIChub3JtYWxpemVkIDwgMSB8fCBub3JtYWxpemVkID4gNCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgoaSAmIDEpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBub3JtYWxpemVkOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybiA9IChwYXR0ZXJuIDw8IDEpIHwgMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhdHRlcm4gPDw9IG5vcm1hbGl6ZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGF0dGVybjtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9maW5kU3RhcnQoKTogQmFyY29kZUluZm8ge1xuICAgICAgICBjb25zdCBjb3VudGVyID0gbmV3IFVpbnQxNkFycmF5KDYpO1xuICAgICAgICBjb25zdCBvZmZzZXQgPSB0aGlzLl9uZXh0U2V0KHRoaXMuX3Jvdyk7XG4gICAgICAgIGxldCBwYXR0ZXJuU3RhcnQgPSBvZmZzZXQ7XG4gICAgICAgIGxldCBjb3VudGVyUG9zID0gMDtcbiAgICAgICAgbGV0IGlzV2hpdGU6IDAgfCAxID0gMDtcbiAgICAgICAgbGV0IHdoaXRlU3BhY2VNdXN0U3RhcnQ6IG51bWJlcjtcblxuICAgICAgICBmb3IgKGxldCBpID0gb2Zmc2V0OyBpIDwgdGhpcy5fcm93Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fcm93W2ldIF4gaXNXaGl0ZSkge1xuICAgICAgICAgICAgICAgIGNvdW50ZXJbY291bnRlclBvc10rKztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvdW50ZXJQb3MgPT09IGNvdW50ZXIubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBmaW5kIHN0YXJ0IHBhdHRlcm5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3RvUGF0dGVybihjb3VudGVyKSA9PT0gQVNURVJJU0spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlU3BhY2VNdXN0U3RhcnQgPSBNYXRoLm1heCgwLCBwYXR0ZXJuU3RhcnQgLSAoKGkgLSBwYXR0ZXJuU3RhcnQpIC8gNCkpIHwgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9tYXRjaFJhbmdlKHdoaXRlU3BhY2VNdXN0U3RhcnQsIHBhdHRlcm5TdGFydCwgMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydDogcGF0dGVyblN0YXJ0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcGF0dGVyblN0YXJ0ICs9IGNvdW50ZXJbMF0gKyBjb3VudGVyWzFdO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDQ7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY291bnRlcltqXSA9IGNvdW50ZXJbaiArIDJdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXJbNF0gPSAwO1xuICAgICAgICAgICAgICAgICAgICBjb3VudGVyWzVdID0gMDtcbiAgICAgICAgICAgICAgICAgICAgY291bnRlclBvcy0tO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXJQb3MrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY291bnRlcltjb3VudGVyUG9zXSA9IDE7XG4gICAgICAgICAgICAgICAgaXNXaGl0ZSA9IGlzV2hpdGUgPyAwIDogMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2RlY29kZUV4dGVuZGVkKGNoYXJBcnJheTogQXJyYXk8c3RyaW5nPik6IEFycmF5PHN0cmluZz4ge1xuICAgICAgICBjb25zdCBsZW5ndGggPSBjaGFyQXJyYXkubGVuZ3RoO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBjaGFyID0gY2hhckFycmF5W2ldO1xuICAgICAgICAgICAgaWYgKGNoYXIgPj0gJ2EnICYmIGNoYXIgPD0gJ2QnKSB7XG4gICAgICAgICAgICAgICAgaWYgKGkgPiAobGVuZ3RoIC0gMikpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IG5leHRDaGFyID0gY2hhckFycmF5WysraV07XG4gICAgICAgICAgICAgICAgY29uc3QgbmV4dENoYXJDb2RlID0gbmV4dENoYXIuY2hhckNvZGVBdCgwKTtcbiAgICAgICAgICAgICAgICBsZXQgZGVjb2RlZENoYXI6IHN0cmluZztcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGNoYXIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnYSc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXh0Q2hhciA+PSAnQScgJiYgbmV4dENoYXIgPD0gJ1onKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjb2RlZENoYXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKG5leHRDaGFyQ29kZSAtIDY0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXNlICdiJzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRDaGFyID49ICdBJyAmJiBuZXh0Q2hhciA8PSAnRScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNvZGVkQ2hhciA9IFN0cmluZy5mcm9tQ2hhckNvZGUobmV4dENoYXJDb2RlIC0gMzgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChuZXh0Q2hhciA+PSAnRicgJiYgbmV4dENoYXIgPD0gJ0onKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjb2RlZENoYXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKG5leHRDaGFyQ29kZSAtIDExKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobmV4dENoYXIgPj0gJ0snICYmIG5leHRDaGFyIDw9ICdPJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY29kZWRDaGFyID0gU3RyaW5nLmZyb21DaGFyQ29kZShuZXh0Q2hhckNvZGUgKyAxNik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG5leHRDaGFyID49ICdQJyAmJiBuZXh0Q2hhciA8PSAnUycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNvZGVkQ2hhciA9IFN0cmluZy5mcm9tQ2hhckNvZGUobmV4dENoYXJDb2RlICsgNDMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChuZXh0Q2hhciA+PSAnVCcgJiYgbmV4dENoYXIgPD0gJ1onKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjb2RlZENoYXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDEyNyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnYyc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXh0Q2hhciA+PSAnQScgJiYgbmV4dENoYXIgPD0gJ08nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjb2RlZENoYXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKG5leHRDaGFyQ29kZSAtIDMyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobmV4dENoYXIgPT09ICdaJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY29kZWRDaGFyID0gJzonO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2QnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV4dENoYXIgPj0gJ0EnICYmIG5leHRDaGFyIDw9ICdaJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY29kZWRDaGFyID0gU3RyaW5nLmZyb21DaGFyQ29kZShuZXh0Q2hhckNvZGUgKyAzMik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goZGVjb2RlZENoYXIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChjaGFyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHByaXZhdGUgX3ZlcmlmeUNoZWNrc3VtcyhjaGFyQXJyYXk6IEFycmF5PHN0cmluZz4pOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hdGNoQ2hlY2tDaGFyKGNoYXJBcnJheSwgY2hhckFycmF5Lmxlbmd0aCAtIDIsIDIwKVxuICAgICAgICAgICAgJiYgdGhpcy5fbWF0Y2hDaGVja0NoYXIoY2hhckFycmF5LCBjaGFyQXJyYXkubGVuZ3RoIC0gMSwgMTUpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX21hdGNoQ2hlY2tDaGFyKGNoYXJBcnJheTogQXJyYXk8c3RyaW5nPiwgaW5kZXg6IG51bWJlciwgbWF4V2VpZ2h0OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgYXJyYXlUb0NoZWNrID0gY2hhckFycmF5LnNsaWNlKDAsIGluZGV4KTtcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gYXJyYXlUb0NoZWNrLmxlbmd0aDtcbiAgICAgICAgY29uc3Qgd2VpZ2h0ZWRTdW1zID0gYXJyYXlUb0NoZWNrLnJlZHVjZSgoc3VtLCBjaGFyLCBpKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB3ZWlnaHQgPSAoKChpICogLTEpICsgKGxlbmd0aCAtIDEpKSAlIG1heFdlaWdodCkgKyAxO1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBBTFBIQUJFVC5pbmRleE9mKGNoYXIuY2hhckNvZGVBdCgwKSk7XG4gICAgICAgICAgICByZXR1cm4gc3VtICsgKHdlaWdodCAqIHZhbHVlKTtcbiAgICAgICAgfSwgMCk7XG5cbiAgICAgICAgY29uc3QgY2hlY2tDaGFyID0gQUxQSEFCRVRbKHdlaWdodGVkU3VtcyAlIDQ3KV07XG4gICAgICAgIHJldHVybiBjaGVja0NoYXIgPT09IGNoYXJBcnJheVtpbmRleF0uY2hhckNvZGVBdCgwKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBCYXJjb2RlLCBCYXJjb2RlSW5mbywgQmFyY29kZVJlYWRlciwgQmFyY29kZVJlYWRlckNvbmZpZyB9IGZyb20gJy4vYmFyY29kZS1yZWFkZXInO1xuaW1wb3J0IHsgRUFOUmVhZGVyIH0gZnJvbSAnLi9lYW4tcmVhZGVyJztcblxuZXhwb3J0IGNsYXNzIEVBTjJSZWFkZXIgZXh0ZW5kcyBFQU5SZWFkZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZz86IEJhcmNvZGVSZWFkZXJDb25maWcsIHN1cHBsZW1lbnRzPzogQXJyYXk8QmFyY29kZVJlYWRlcj4pIHtcbiAgICAgICAgc3VwZXIoY29uZmlnLCBzdXBwbGVtZW50cyk7XG5cbiAgICAgICAgdGhpcy5fZm9ybWF0ID0gJ2Vhbl8yJztcbiAgICB9XG5cbiAgICBkZWNvZGUocm93PzogQXJyYXk8bnVtYmVyPiwgc3RhcnQ/OiBudW1iZXIpOiBCYXJjb2RlIHtcbiAgICAgICAgY29uc3QgZW5kID0gcm93Lmxlbmd0aDtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEFycmF5PG51bWJlcj4oKTtcbiAgICAgICAgY29uc3QgZGVjb2RlZENvZGVzID0gbmV3IEFycmF5PEJhcmNvZGVJbmZvPigpO1xuICAgICAgICBsZXQgb2Zmc2V0ID0gc3RhcnQ7XG4gICAgICAgIGxldCBjb2RlRnJlcXVlbmN5ID0gMDtcbiAgICAgICAgbGV0IGNvZGU6IEJhcmNvZGVJbmZvO1xuXG4gICAgICAgIHRoaXMuX3JvdyA9IHJvdztcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDIgJiYgb2Zmc2V0IDwgZW5kOyBpKyspIHtcbiAgICAgICAgICAgIGNvZGUgPSB0aGlzLl9kZWNvZGVDb2RlKG9mZnNldCk7XG4gICAgICAgICAgICBpZiAoIWNvZGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlY29kZWRDb2Rlcy5wdXNoKGNvZGUpO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goY29kZS5jb2RlICUgMTApO1xuICAgICAgICAgICAgaWYgKGNvZGUuY29kZSA+PSB0aGlzLkNPREVfR19TVEFSVCkge1xuICAgICAgICAgICAgICAgIGNvZGVGcmVxdWVuY3kgfD0gMSA8PCAoMSAtIGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGkgIT09IDEpIHtcbiAgICAgICAgICAgICAgICBvZmZzZXQgPSB0aGlzLl9uZXh0U2V0KHRoaXMuX3JvdywgY29kZS5lbmQpO1xuICAgICAgICAgICAgICAgIG9mZnNldCA9IHRoaXMuX25leHRVbnNldCh0aGlzLl9yb3csIG9mZnNldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVzdWx0Lmxlbmd0aCAhPT0gMiB8fCAocGFyc2VJbnQocmVzdWx0LmpvaW4oJycpKSAlIDQpICE9PSBjb2RlRnJlcXVlbmN5KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb2RlOiByZXN1bHQuam9pbignJyksXG4gICAgICAgICAgICBkZWNvZGVkQ29kZXMsXG4gICAgICAgICAgICBlbmQ6IGNvZGUuZW5kXG4gICAgICAgIH07XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQmFyY29kZSwgQmFyY29kZUluZm8sIEJhcmNvZGVSZWFkZXIsIEJhcmNvZGVSZWFkZXJDb25maWcgfSBmcm9tICcuL2JhcmNvZGUtcmVhZGVyJztcbmltcG9ydCB7IEVBTlJlYWRlciB9IGZyb20gJy4vZWFuLXJlYWRlcic7XG5cbmV4cG9ydCBjbGFzcyBFQU41UmVhZGVyIGV4dGVuZHMgRUFOUmVhZGVyIHtcbiAgICBnZXQgQ0hFQ0tfRElHSVRfRU5DT0RJTkdTKCk6IEFycmF5PG51bWJlcj4ge1xuICAgICAgICByZXR1cm4gWzI0LCAyMCwgMTgsIDE3LCAxMiwgNiwgMywgMTAsIDksIDVdO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZz86IEJhcmNvZGVSZWFkZXJDb25maWcsIHN1cHBsZW1lbnRzPzogQXJyYXk8QmFyY29kZVJlYWRlcj4pIHtcbiAgICAgICAgc3VwZXIoY29uZmlnLCBzdXBwbGVtZW50cyk7XG5cbiAgICAgICAgdGhpcy5fZm9ybWF0ID0gJ2Vhbl81JztcbiAgICB9XG5cbiAgICBkZWNvZGUocm93PzogQXJyYXk8bnVtYmVyPiwgc3RhcnQ/OiBudW1iZXIpOiBCYXJjb2RlIHtcbiAgICAgICAgY29uc3QgZW5kID0gcm93Lmxlbmd0aDtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEFycmF5PG51bWJlcj4oKTtcbiAgICAgICAgY29uc3QgZGVjb2RlZENvZGVzID0gbmV3IEFycmF5PEJhcmNvZGVJbmZvPigpO1xuICAgICAgICBsZXQgY29kZUZyZXF1ZW5jeSA9IDA7XG4gICAgICAgIGxldCBvZmZzZXQgPSBzdGFydDtcbiAgICAgICAgbGV0IGNvZGU6IEJhcmNvZGVJbmZvO1xuXG4gICAgICAgIHRoaXMuX3JvdyA9IHJvdztcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDUgJiYgb2Zmc2V0IDwgZW5kOyBpKyspIHtcbiAgICAgICAgICAgIGNvZGUgPSB0aGlzLl9kZWNvZGVDb2RlKG9mZnNldCk7XG4gICAgICAgICAgICBpZiAoIWNvZGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlY29kZWRDb2Rlcy5wdXNoKGNvZGUpO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goY29kZS5jb2RlICUgMTApO1xuICAgICAgICAgICAgaWYgKGNvZGUuY29kZSA+PSB0aGlzLkNPREVfR19TVEFSVCkge1xuICAgICAgICAgICAgICAgIGNvZGVGcmVxdWVuY3kgfD0gMSA8PCAoNCAtIGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGkgIT09IDQpIHtcbiAgICAgICAgICAgICAgICBvZmZzZXQgPSB0aGlzLl9uZXh0U2V0KHRoaXMuX3JvdywgY29kZS5lbmQpO1xuICAgICAgICAgICAgICAgIG9mZnNldCA9IHRoaXMuX25leHRVbnNldCh0aGlzLl9yb3csIG9mZnNldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVzdWx0Lmxlbmd0aCAhPT0gNSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fZXh0ZW5zaW9uQ2hlY2tzdW0ocmVzdWx0KSAhPT0gdGhpcy5fZGV0ZXJtaW5lQ2hlY2tEaWdpdChjb2RlRnJlcXVlbmN5KSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29kZTogcmVzdWx0LmpvaW4oJycpLFxuICAgICAgICAgICAgZGVjb2RlZENvZGVzLFxuICAgICAgICAgICAgZW5kOiBjb2RlLmVuZFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHByaXZhdGUgX2RldGVybWluZUNoZWNrRGlnaXQoY29kZUZyZXF1ZW5jeTogbnVtYmVyKTogbnVtYmVyIHwgbnVsbCB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgaWYgKGNvZGVGcmVxdWVuY3kgPT09IHRoaXMuQ0hFQ0tfRElHSVRfRU5DT0RJTkdTW2ldKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZXh0ZW5zaW9uQ2hlY2tzdW0ocmVzdWx0OiBBcnJheTxudW1iZXI+KTogbnVtYmVyIHtcbiAgICAgICAgbGV0IGxlbmd0aCA9IHJlc3VsdC5sZW5ndGg7XG4gICAgICAgIGxldCBzdW0gPSAwO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSBsZW5ndGggLSAyOyBpID49IDA7IGkgLT0gMikge1xuICAgICAgICAgICAgc3VtICs9IHJlc3VsdFtpXTtcbiAgICAgICAgfVxuICAgICAgICBzdW0gKj0gMztcbiAgICAgICAgZm9yIChsZXQgaSA9IGxlbmd0aCAtIDE7IGkgPj0gMDsgaSAtPSAyKSB7XG4gICAgICAgICAgICBzdW0gKz0gcmVzdWx0W2ldO1xuICAgICAgICB9XG4gICAgICAgIHN1bSAqPSAzO1xuXG4gICAgICAgIHJldHVybiBzdW0gJSAxMDtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBCYXJjb2RlSW5mbywgQmFyY29kZVJlYWRlciwgQmFyY29kZVJlYWRlckNvbmZpZyB9IGZyb20gJy4vYmFyY29kZS1yZWFkZXInO1xuaW1wb3J0IHsgRUFOUmVhZGVyIH0gZnJvbSAnLi9lYW4tcmVhZGVyJztcblxuZXhwb3J0IGNsYXNzIEVBTjhSZWFkZXIgZXh0ZW5kcyBFQU5SZWFkZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZz86IEJhcmNvZGVSZWFkZXJDb25maWcsIHN1cHBsZW1lbnRzPzogQXJyYXk8QmFyY29kZVJlYWRlcj4pIHtcbiAgICAgICAgc3VwZXIoY29uZmlnLCBzdXBwbGVtZW50cyk7XG5cbiAgICAgICAgdGhpcy5fZm9ybWF0ID0gJ2Vhbl84JztcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2RlY29kZVBheWxvYWQoY29kZTogQmFyY29kZUluZm8sIHJlc3VsdDogQXJyYXk8bnVtYmVyPiwgZGVjb2RlZENvZGVzOiBBcnJheTxCYXJjb2RlSW5mbz4pOiBCYXJjb2RlSW5mbyB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgICAgICBjb2RlID0gdGhpcy5fZGVjb2RlQ29kZShjb2RlLmVuZCwgdGhpcy5DT0RFX0dfU1RBUlQpO1xuICAgICAgICAgICAgaWYgKCFjb2RlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaChjb2RlLmNvZGUpO1xuICAgICAgICAgICAgZGVjb2RlZENvZGVzLnB1c2goY29kZSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb2RlID0gdGhpcy5fZmluZFBhdHRlcm4odGhpcy5NSURETEVfUEFUVEVSTiwgY29kZS5lbmQsIDEsIGZhbHNlKTtcblxuICAgICAgICBpZiAoY29kZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBkZWNvZGVkQ29kZXMucHVzaChjb2RlKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICAgICAgY29kZSA9IHRoaXMuX2RlY29kZUNvZGUoY29kZS5lbmQsIHRoaXMuQ09ERV9HX1NUQVJUKTtcblxuICAgICAgICAgICAgaWYgKCFjb2RlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRlY29kZWRDb2Rlcy5wdXNoKGNvZGUpO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goY29kZS5jb2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb2RlO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IG1lcmdlIH0gZnJvbSAnLi4vY29tbW9uL21lcmdlJztcbmltcG9ydCB7IEJhcmNvZGUsIEJhcmNvZGVJbmZvLCBCYXJjb2RlUmVhZGVyLCBCYXJjb2RlUmVhZGVyQ29uZmlnIH0gZnJvbSAnLi9iYXJjb2RlLXJlYWRlcic7XG5cbmNvbnN0IEVYVEVOU0lPTl9TVEFSVF9QQVRURVJOID0gWzEsIDEsIDJdO1xuY29uc3QgQ09ERV9QQVRURVJOID0gW1xuICAgIFszLCAyLCAxLCAxXSxcbiAgICBbMiwgMiwgMiwgMV0sXG4gICAgWzIsIDEsIDIsIDJdLFxuICAgIFsxLCA0LCAxLCAxXSxcbiAgICBbMSwgMSwgMywgMl0sXG4gICAgWzEsIDIsIDMsIDFdLFxuICAgIFsxLCAxLCAxLCA0XSxcbiAgICBbMSwgMywgMSwgMl0sXG4gICAgWzEsIDIsIDEsIDNdLFxuICAgIFszLCAxLCAxLCAyXSxcbiAgICBbMSwgMSwgMiwgM10sXG4gICAgWzEsIDIsIDIsIDJdLFxuICAgIFsyLCAyLCAxLCAyXSxcbiAgICBbMSwgMSwgNCwgMV0sXG4gICAgWzIsIDMsIDEsIDFdLFxuICAgIFsxLCAzLCAyLCAxXSxcbiAgICBbNCwgMSwgMSwgMV0sXG4gICAgWzIsIDEsIDMsIDFdLFxuICAgIFszLCAxLCAyLCAxXSxcbiAgICBbMiwgMSwgMSwgM11cbl07XG5jb25zdCBDT0RFX0ZSRVFVRU5DWSA9IFswLCAxMSwgMTMsIDE0LCAxOSwgMjUsIDI4LCAyMSwgMjIsIDI2XTtcblxuZXhwb3J0IGNsYXNzIEVBTlJlYWRlciBleHRlbmRzIEJhcmNvZGVSZWFkZXIge1xuICAgIGdldCBDT0RFX0xfU1RBUlQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgZ2V0IENPREVfR19TVEFSVCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gMTA7XG4gICAgfVxuXG4gICAgZ2V0IFNUQVJUX1BBVFRFUk4oKTogQXJyYXk8bnVtYmVyPiB7XG4gICAgICAgIHJldHVybiBbMSwgMSwgMV07XG4gICAgfVxuXG4gICAgZ2V0IFNUT1BfUEFUVEVSTigpOiBBcnJheTxudW1iZXI+IHtcbiAgICAgICAgcmV0dXJuIFsxLCAxLCAxXTtcbiAgICB9XG5cbiAgICBnZXQgTUlERExFX1BBVFRFUk4oKTogQXJyYXk8bnVtYmVyPiB7XG4gICAgICAgIHJldHVybiBbMSwgMSwgMSwgMSwgMV07XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoY29uZmlnPzogQmFyY29kZVJlYWRlckNvbmZpZywgc3VwcGxlbWVudHM/OiBBcnJheTxCYXJjb2RlUmVhZGVyPikge1xuICAgICAgICBzdXBlcihtZXJnZSh7XG4gICAgICAgICAgICBzdXBwbGVtZW50czogW10gLy8gQWxsb3dlZCBleHRlbnNpb25zIHRvIGJlIGRlY29kZWQgKDIgYW5kL29yIDUpXG4gICAgICAgIH0sIGNvbmZpZyksIHN1cHBsZW1lbnRzKTtcblxuICAgICAgICB0aGlzLl9mb3JtYXQgPSAnZWFuXzEzJztcbiAgICAgICAgdGhpcy5fc2luZ2xlQ29kZUVycm9yID0gMC43MDtcbiAgICAgICAgdGhpcy5fYXZlcmFnZUNvZGVFcnJvciA9IDAuNDg7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9kZWNvZGVDb2RlKHN0YXJ0OiBudW1iZXIsIGNvZGVyYW5nZT86IG51bWJlcik6IEJhcmNvZGVJbmZvIHtcbiAgICAgICAgY29uc3QgY291bnRlciA9IFswLCAwLCAwLCAwXTtcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gc3RhcnQ7XG4gICAgICAgIGNvbnN0IGJlc3RNYXRjaDogQmFyY29kZUluZm8gPSB7XG4gICAgICAgICAgICBlcnJvcjogTnVtYmVyLk1BWF9WQUxVRSxcbiAgICAgICAgICAgIGNvZGU6IC0xLFxuICAgICAgICAgICAgc3RhcnQ6IHN0YXJ0LFxuICAgICAgICAgICAgZW5kOiBzdGFydFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBlcHNpbG9uID0gdGhpcy5BVkVSQUdFX0NPREVfRVJST1I7XG4gICAgICAgIGxldCBpc1doaXRlOiAwIHwgMSA9IHRoaXMuX3Jvd1tvZmZzZXRdID8gMCA6IDE7XG4gICAgICAgIGxldCBjb3VudGVyUG9zID0gMDtcblxuICAgICAgICBpZiAoIWNvZGVyYW5nZSkge1xuICAgICAgICAgICAgY29kZXJhbmdlID0gQ09ERV9QQVRURVJOLmxlbmd0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSBvZmZzZXQ7IGkgPCB0aGlzLl9yb3cubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9yb3dbaV0gXiBpc1doaXRlKSB7XG4gICAgICAgICAgICAgICAgY291bnRlcltjb3VudGVyUG9zXSsrO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoY291bnRlclBvcyA9PT0gY291bnRlci5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGNvZGUgPSAwOyBjb2RlIDwgY29kZXJhbmdlOyBjb2RlKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yID0gdGhpcy5fbWF0Y2hQYXR0ZXJuKGNvdW50ZXIsIENPREVfUEFUVEVSTltjb2RlXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IgPCBiZXN0TWF0Y2guZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZXN0TWF0Y2guY29kZSA9IGNvZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVzdE1hdGNoLmVycm9yID0gZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYmVzdE1hdGNoLmVuZCA9IGk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChiZXN0TWF0Y2guZXJyb3IgPiBlcHNpbG9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYmVzdE1hdGNoO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXJQb3MrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY291bnRlcltjb3VudGVyUG9zXSA9IDE7XG4gICAgICAgICAgICAgICAgaXNXaGl0ZSA9IGlzV2hpdGUgPyAwIDogMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZmluZFN0YXJ0KCk6IEJhcmNvZGVJbmZvIHtcbiAgICAgICAgbGV0IG9mZnNldCA9IHRoaXMuX25leHRTZXQodGhpcy5fcm93KTtcbiAgICAgICAgbGV0IHN0YXJ0SW5mbzogQmFyY29kZUluZm87XG5cbiAgICAgICAgd2hpbGUgKCFzdGFydEluZm8pIHtcbiAgICAgICAgICAgIHN0YXJ0SW5mbyA9IHRoaXMuX2ZpbmRQYXR0ZXJuKHRoaXMuU1RBUlRfUEFUVEVSTiwgb2Zmc2V0LCAwLCB0cnVlKTtcblxuICAgICAgICAgICAgaWYgKCFzdGFydEluZm8pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgbGVhZGluZ1doaXRlc3BhY2VTdGFydCA9IHN0YXJ0SW5mby5zdGFydCAtIChzdGFydEluZm8uZW5kIC0gc3RhcnRJbmZvLnN0YXJ0KTtcblxuICAgICAgICAgICAgaWYgKGxlYWRpbmdXaGl0ZXNwYWNlU3RhcnQgPj0gMCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9tYXRjaFJhbmdlKGxlYWRpbmdXaGl0ZXNwYWNlU3RhcnQsIHN0YXJ0SW5mby5zdGFydCwgMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0YXJ0SW5mbztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG9mZnNldCA9IHN0YXJ0SW5mby5lbmQ7XG4gICAgICAgICAgICBzdGFydEluZm8gPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF92ZXJpZnlUcmFpbGluZ1doaXRlc3BhY2UoZW5kSW5mbzogQmFyY29kZUluZm8pOiBCYXJjb2RlSW5mbyB7XG4gICAgICAgIGNvbnN0IHRyYWlsaW5nV2hpdGVzcGFjZUVuZCA9IGVuZEluZm8uZW5kICsgKGVuZEluZm8uZW5kIC0gZW5kSW5mby5zdGFydCk7XG5cbiAgICAgICAgaWYgKHRyYWlsaW5nV2hpdGVzcGFjZUVuZCA8IHRoaXMuX3Jvdy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9tYXRjaFJhbmdlKGVuZEluZm8uZW5kLCB0cmFpbGluZ1doaXRlc3BhY2VFbmQsIDApKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVuZEluZm87XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2ZpbmRFbmQob2Zmc2V0OiBudW1iZXIsIGlzV2hpdGU6IDAgfCAxKTogQmFyY29kZUluZm8ge1xuICAgICAgICBjb25zdCBlbmRJbmZvID0gdGhpcy5fZmluZFBhdHRlcm4odGhpcy5TVE9QX1BBVFRFUk4sIG9mZnNldCwgaXNXaGl0ZSwgZmFsc2UpO1xuXG4gICAgICAgIHJldHVybiBlbmRJbmZvICE9PSBudWxsID8gdGhpcy5fdmVyaWZ5VHJhaWxpbmdXaGl0ZXNwYWNlKGVuZEluZm8pIDogbnVsbDtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9jYWxjdWxhdGVGaXJzdERpZ2l0KGNvZGVGcmVxdWVuY3k6IG51bWJlcik6IG51bWJlciB8IG51bGwge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IENPREVfRlJFUVVFTkNZLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoY29kZUZyZXF1ZW5jeSA9PT0gQ09ERV9GUkVRVUVOQ1lbaV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2RlY29kZVBheWxvYWQoY29kZTogQmFyY29kZUluZm8sIHJlc3VsdDogQXJyYXk8bnVtYmVyPiwgZGVjb2RlZENvZGVzOiBBcnJheTxCYXJjb2RlSW5mbz4pOiBCYXJjb2RlSW5mbyB7XG4gICAgICAgIGxldCBjb2RlRnJlcXVlbmN5ID0gMHgwO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gICAgICAgICAgICBjb2RlID0gdGhpcy5fZGVjb2RlQ29kZShjb2RlLmVuZCk7XG4gICAgICAgICAgICBpZiAoIWNvZGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb2RlLmNvZGUgPj0gdGhpcy5DT0RFX0dfU1RBUlQpIHtcbiAgICAgICAgICAgICAgICBjb2RlLmNvZGUgLT0gdGhpcy5DT0RFX0dfU1RBUlQ7XG4gICAgICAgICAgICAgICAgY29kZUZyZXF1ZW5jeSB8PSAxIDw8ICg1IC0gaSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvZGVGcmVxdWVuY3kgfD0gMCA8PCAoNSAtIGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goY29kZS5jb2RlKTtcbiAgICAgICAgICAgIGRlY29kZWRDb2Rlcy5wdXNoKGNvZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZmlyc3REaWdpdCA9IHRoaXMuX2NhbGN1bGF0ZUZpcnN0RGlnaXQoY29kZUZyZXF1ZW5jeSk7XG5cbiAgICAgICAgaWYgKGZpcnN0RGlnaXQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzdWx0LnVuc2hpZnQoZmlyc3REaWdpdCk7XG5cbiAgICAgICAgY29kZSA9IHRoaXMuX2ZpbmRQYXR0ZXJuKHRoaXMuTUlERExFX1BBVFRFUk4sIGNvZGUuZW5kLCAxLCBmYWxzZSk7XG5cbiAgICAgICAgaWYgKGNvZGUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVjb2RlZENvZGVzLnB1c2goY29kZSk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICAgICAgICAgIGNvZGUgPSB0aGlzLl9kZWNvZGVDb2RlKGNvZGUuZW5kLCB0aGlzLkNPREVfR19TVEFSVCk7XG5cbiAgICAgICAgICAgIGlmICghY29kZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkZWNvZGVkQ29kZXMucHVzaChjb2RlKTtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGNvZGUuY29kZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29kZTtcbiAgICB9XG5cbiAgICBkZWNvZGUoKTogQmFyY29kZSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBBcnJheTxudW1iZXI+KCk7XG4gICAgICAgIGNvbnN0IGRlY29kZWRDb2RlcyA9IG5ldyBBcnJheTxCYXJjb2RlSW5mbz4oKTtcbiAgICAgICAgbGV0IHJlc3VsdEluZm86IEJhcmNvZGUgPSB7fTtcbiAgICAgICAgbGV0IHN0YXJ0SW5mbyA9IHRoaXMuX2ZpbmRTdGFydCgpO1xuXG4gICAgICAgIGlmICghc3RhcnRJbmZvKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjb2RlOiBCYXJjb2RlSW5mbyA9IHtcbiAgICAgICAgICAgIGNvZGU6IHN0YXJ0SW5mby5jb2RlLFxuICAgICAgICAgICAgc3RhcnQ6IHN0YXJ0SW5mby5zdGFydCxcbiAgICAgICAgICAgIGVuZDogc3RhcnRJbmZvLmVuZFxuICAgICAgICB9O1xuICAgICAgICBkZWNvZGVkQ29kZXMucHVzaChjb2RlKTtcblxuICAgICAgICBjb2RlID0gdGhpcy5fZGVjb2RlUGF5bG9hZChjb2RlLCByZXN1bHQsIGRlY29kZWRDb2Rlcyk7XG5cbiAgICAgICAgaWYgKCFjb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvZGUgPSB0aGlzLl9maW5kRW5kKGNvZGUuZW5kLCAwKTtcblxuICAgICAgICBpZiAoIWNvZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVjb2RlZENvZGVzLnB1c2goY29kZSk7XG5cbiAgICAgICAgLy8gQ2hlY2tzdW1cbiAgICAgICAgaWYgKCF0aGlzLl9jaGVja3N1bShyZXN1bHQpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnN1cHBsZW1lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHN1cHBsZW1lbnQgPSB0aGlzLl9kZWNvZGVFeHRlbnNpb25zKGNvZGUuZW5kKTtcbiAgICAgICAgICAgIGlmICghc3VwcGxlbWVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBsYXN0Q29kZSA9IHN1cHBsZW1lbnQuZGVjb2RlZENvZGVzW3N1cHBsZW1lbnQuZGVjb2RlZENvZGVzLmxlbmd0aCAtIDFdIGFzIEJhcmNvZGVJbmZvO1xuICAgICAgICAgICAgY29uc3QgZW5kSW5mbyA9IHtcbiAgICAgICAgICAgICAgICBzdGFydDogbGFzdENvZGUuc3RhcnQgKyAoKChsYXN0Q29kZS5lbmQgLSBsYXN0Q29kZS5zdGFydCkgLyAyKSB8IDApLFxuICAgICAgICAgICAgICAgIGVuZDogbGFzdENvZGUuZW5kXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpZiAoIXRoaXMuX3ZlcmlmeVRyYWlsaW5nV2hpdGVzcGFjZShlbmRJbmZvKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXN1bHRJbmZvID0ge1xuICAgICAgICAgICAgICAgIHN1cHBsZW1lbnQsXG4gICAgICAgICAgICAgICAgY29kZTogcmVzdWx0LmpvaW4oJycpICsgc3VwcGxlbWVudC5jb2RlXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvZGU6IHJlc3VsdC5qb2luKCcnKSxcbiAgICAgICAgICAgIHN0YXJ0OiBzdGFydEluZm8uc3RhcnQsXG4gICAgICAgICAgICBlbmQ6IGNvZGUuZW5kLFxuICAgICAgICAgICAgc3RhcnRJbmZvLFxuICAgICAgICAgICAgZGVjb2RlZENvZGVzLFxuICAgICAgICAgICAgLi4ucmVzdWx0SW5mb1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHByaXZhdGUgX2RlY29kZUV4dGVuc2lvbnMob2Zmc2V0OiBudW1iZXIpOiBCYXJjb2RlIHtcbiAgICAgICAgY29uc3Qgc3RhcnQgPSB0aGlzLl9uZXh0U2V0KHRoaXMuX3Jvdywgb2Zmc2V0KTtcbiAgICAgICAgY29uc3Qgc3RhcnRJbmZvID0gdGhpcy5fZmluZFBhdHRlcm4oRVhURU5TSU9OX1NUQVJUX1BBVFRFUk4sIHN0YXJ0LCAwLCBmYWxzZSk7XG5cbiAgICAgICAgaWYgKHN0YXJ0SW5mbyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3VwcGxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSB0aGlzLnN1cHBsZW1lbnRzW2ldLmRlY29kZSh0aGlzLl9yb3csIHN0YXJ0SW5mby5lbmQpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGNvZGU6IHJlc3VsdC5jb2RlLFxuICAgICAgICAgICAgICAgICAgICBzdGFydCxcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRJbmZvLFxuICAgICAgICAgICAgICAgICAgICBlbmQ6IHJlc3VsdC5lbmQsXG4gICAgICAgICAgICAgICAgICAgIGRlY29kZWRDb2RlczogcmVzdWx0LmRlY29kZWRDb2Rlc1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2NoZWNrc3VtKHJlc3VsdDogQXJyYXk8bnVtYmVyPik6IGJvb2xlYW4ge1xuICAgICAgICBsZXQgc3VtID0gMDtcblxuICAgICAgICBmb3IgKGxldCBpID0gcmVzdWx0Lmxlbmd0aCAtIDI7IGkgPj0gMDsgaSAtPSAyKSB7XG4gICAgICAgICAgICBzdW0gKz0gcmVzdWx0W2ldO1xuICAgICAgICB9XG5cbiAgICAgICAgc3VtICo9IDM7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IHJlc3VsdC5sZW5ndGggLSAxOyBpID49IDA7IGkgLT0gMikge1xuICAgICAgICAgICAgc3VtICs9IHJlc3VsdFtpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdW0gJSAxMCA9PT0gMDtcbiAgICB9XG59IiwiaW1wb3J0IHsgbWVyZ2UgfSBmcm9tICcuLi9jb21tb24vbWVyZ2UnO1xuaW1wb3J0IHsgQmFyY29kZSwgQmFyY29kZUluZm8sIEJhcmNvZGVSZWFkZXIsIEJhcmNvZGVSZWFkZXJDb25maWcgfSBmcm9tICcuL2JhcmNvZGUtcmVhZGVyJztcblxuY29uc3QgTiA9IDE7XG5jb25zdCBXID0gMztcbmNvbnN0IFNUQVJUX1BBVFRFUk4gPSBbTiwgTiwgTiwgTl07XG5jb25zdCBTVE9QX1BBVFRFUk4gPSBbTiwgTiwgV107XG5jb25zdCBDT0RFX1BBVFRFUk4gPSBbXG4gICAgW04sIE4sIFcsIFcsIE5dLFxuICAgIFtXLCBOLCBOLCBOLCBXXSxcbiAgICBbTiwgVywgTiwgTiwgV10sXG4gICAgW1csIFcsIE4sIE4sIE5dLFxuICAgIFtOLCBOLCBXLCBOLCBXXSxcbiAgICBbVywgTiwgVywgTiwgTl0sXG4gICAgW04sIFcsIFcsIE4sIE5dLFxuICAgIFtOLCBOLCBOLCBXLCBXXSxcbiAgICBbVywgTiwgTiwgVywgTl0sXG4gICAgW04sIFcsIE4sIFcsIE5dXG5dO1xuY29uc3QgTUFYX0NPUlJFQ1RJT05fRkFDVE9SID0gNTtcblxuZXhwb3J0IGNsYXNzIEkyb2Y1UmVhZGVyIGV4dGVuZHMgQmFyY29kZVJlYWRlciB7XG4gICAgcHJpdmF0ZSBfYmFyU3BhY2VSYXRpbzogW251bWJlciwgbnVtYmVyXTtcblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZz86IEJhcmNvZGVSZWFkZXJDb25maWcpIHtcbiAgICAgICAgc3VwZXIobWVyZ2Uoe1xuICAgICAgICAgICAgbm9ybWFsaXplQmFyU3BhY2VXaWR0aDogZmFsc2UgLy8gTm9ybWFsaXplIHRoZSB3aWR0aCBkaWZmZXJlbmNlIGJldHdlZW4gYmFycyBhbmQgc3BhY2VzXG4gICAgICAgIH0sIGNvbmZpZykpO1xuXG4gICAgICAgIHRoaXMuX2JhclNwYWNlUmF0aW8gPSBbMSwgMV07XG4gICAgICAgIHRoaXMuX2Zvcm1hdCA9ICdpMm9mNSc7XG5cbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLm5vcm1hbGl6ZUJhclNwYWNlV2lkdGgpIHtcbiAgICAgICAgICAgIHRoaXMuX3NpbmdsZUNvZGVFcnJvciA9IDAuMzg7XG4gICAgICAgICAgICB0aGlzLl9hdmVyYWdlQ29kZUVycm9yID0gMC4wOTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3NpbmdsZUNvZGVFcnJvciA9IDAuNzg7XG4gICAgICAgICAgICB0aGlzLl9hdmVyYWdlQ29kZUVycm9yID0gMC4zODtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRlY29kZSgpOiBCYXJjb2RlIHtcbiAgICAgICAgY29uc3Qgc3RhcnRJbmZvID0gdGhpcy5fZmluZFN0YXJ0KCk7XG5cbiAgICAgICAgaWYgKCFzdGFydEluZm8pIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZW5kSW5mbyA9IHRoaXMuX2ZpbmRFbmQoKTtcblxuICAgICAgICBpZiAoIWVuZEluZm8pIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY291bnRlcnMgPSB0aGlzLl9maWxsQ291bnRlcnMoc3RhcnRJbmZvLmVuZCwgZW5kSW5mby5zdGFydCwgMCk7XG5cbiAgICAgICAgaWYgKGNvdW50ZXJzLmxlbmd0aCAlIDEwICE9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBBcnJheTxudW1iZXI+KCk7XG4gICAgICAgIGNvbnN0IGRlY29kZWRDb2RlcyA9IG5ldyBBcnJheTxCYXJjb2RlSW5mbz4oKTtcblxuICAgICAgICBkZWNvZGVkQ29kZXMucHVzaChzdGFydEluZm8pO1xuXG4gICAgICAgIGNvbnN0IGNvZGUgPSB0aGlzLl9kZWNvZGVQYXlsb2FkKGNvdW50ZXJzLCByZXN1bHQsIGRlY29kZWRDb2Rlcyk7XG5cbiAgICAgICAgaWYgKCFjb2RlIHx8IHJlc3VsdC5sZW5ndGggJSAyICE9PSAwIHx8IHJlc3VsdC5sZW5ndGggPCA2KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlY29kZWRDb2Rlcy5wdXNoKGVuZEluZm8pO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb2RlOiByZXN1bHQuam9pbignJyksXG4gICAgICAgICAgICBzdGFydDogc3RhcnRJbmZvLnN0YXJ0LFxuICAgICAgICAgICAgZW5kOiBlbmRJbmZvLmVuZCxcbiAgICAgICAgICAgIHN0YXJ0SW5mbyxcbiAgICAgICAgICAgIGRlY29kZWRDb2Rlc1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfbWF0Y2hQYXR0ZXJuKGNvdW50ZXI6IEFycmF5PG51bWJlcj4sIGNvZGU6IFJlYWRvbmx5QXJyYXk8bnVtYmVyPik6IG51bWJlciB7XG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5ub3JtYWxpemVCYXJTcGFjZVdpZHRoKSB7XG4gICAgICAgICAgICBjb25zdCBjb3VudGVyU3VtOiBbbnVtYmVyLCBudW1iZXJdID0gWzAsIDBdO1xuICAgICAgICAgICAgY29uc3QgY29kZVN1bTogW251bWJlciwgbnVtYmVyXSA9IFswLCAwXTtcbiAgICAgICAgICAgIGNvbnN0IGNvcnJlY3Rpb246IFtudW1iZXIsIG51bWJlcl0gPSBbMCwgMF07XG4gICAgICAgICAgICBjb25zdCBjb3JyZWN0aW9uUmF0aW8gPSBNQVhfQ09SUkVDVElPTl9GQUNUT1I7XG4gICAgICAgICAgICBjb25zdCBjb3JyZWN0aW9uUmF0aW9JbnZlcnNlID0gMSAvIGNvcnJlY3Rpb25SYXRpbztcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY291bnRlclN1bVtpICUgMl0gKz0gY291bnRlcltpXTtcbiAgICAgICAgICAgICAgICBjb2RlU3VtW2kgJSAyXSArPSBjb2RlW2ldO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb3JyZWN0aW9uWzBdID0gY29kZVN1bVswXSAvIGNvdW50ZXJTdW1bMF07XG4gICAgICAgICAgICBjb3JyZWN0aW9uWzFdID0gY29kZVN1bVsxXSAvIGNvdW50ZXJTdW1bMV07XG5cbiAgICAgICAgICAgIGNvcnJlY3Rpb25bMF0gPSBNYXRoLm1heChNYXRoLm1pbihjb3JyZWN0aW9uWzBdLCBjb3JyZWN0aW9uUmF0aW8pLCBjb3JyZWN0aW9uUmF0aW9JbnZlcnNlKTtcbiAgICAgICAgICAgIGNvcnJlY3Rpb25bMV0gPSBNYXRoLm1heChNYXRoLm1pbihjb3JyZWN0aW9uWzFdLCBjb3JyZWN0aW9uUmF0aW8pLCBjb3JyZWN0aW9uUmF0aW9JbnZlcnNlKTtcbiAgICAgICAgICAgIHRoaXMuX2JhclNwYWNlUmF0aW8gPSBjb3JyZWN0aW9uO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50ZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb3VudGVyW2ldICo9IHRoaXMuX2JhclNwYWNlUmF0aW9baSAlIDJdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1cGVyLl9tYXRjaFBhdHRlcm4oY291bnRlciwgY29kZSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9maW5kU3RhcnQoKTogQmFyY29kZUluZm8ge1xuICAgICAgICBsZXQgb2Zmc2V0ID0gdGhpcy5fbmV4dFNldCh0aGlzLl9yb3cpO1xuICAgICAgICBsZXQgc3RhcnRJbmZvOiBCYXJjb2RlSW5mbztcblxuICAgICAgICB3aGlsZSAoIXN0YXJ0SW5mbykge1xuICAgICAgICAgICAgc3RhcnRJbmZvID0gdGhpcy5fZmluZFBhdHRlcm4oU1RBUlRfUEFUVEVSTiwgb2Zmc2V0LCAwLCB0cnVlKTtcbiAgICAgICAgICAgIGlmICghc3RhcnRJbmZvKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IG5hcnJvd0JhcldpZHRoID0gKHN0YXJ0SW5mby5lbmQgLSBzdGFydEluZm8uc3RhcnQpID4+IDI7XG4gICAgICAgICAgICBjb25zdCBsZWFkaW5nV2hpdGVzcGFjZVN0YXJ0ID0gc3RhcnRJbmZvLnN0YXJ0IC0gbmFycm93QmFyV2lkdGggKiAxMDtcblxuICAgICAgICAgICAgaWYgKGxlYWRpbmdXaGl0ZXNwYWNlU3RhcnQgPj0gMCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9tYXRjaFJhbmdlKGxlYWRpbmdXaGl0ZXNwYWNlU3RhcnQsIHN0YXJ0SW5mby5zdGFydCwgMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0YXJ0SW5mbztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG9mZnNldCA9IHN0YXJ0SW5mby5lbmQ7XG4gICAgICAgICAgICBzdGFydEluZm8gPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF92ZXJpZnlUcmFpbGluZ1doaXRlc3BhY2UoZW5kSW5mbzogQmFyY29kZUluZm8pOiBCYXJjb2RlSW5mbyB7XG4gICAgICAgIGNvbnN0IHRyYWlsaW5nV2hpdGVzcGFjZUVuZCA9IGVuZEluZm8uZW5kICsgKGVuZEluZm8uZW5kIC0gZW5kSW5mby5zdGFydCkgLyAyO1xuXG4gICAgICAgIGlmICh0cmFpbGluZ1doaXRlc3BhY2VFbmQgPCB0aGlzLl9yb3cubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fbWF0Y2hSYW5nZShlbmRJbmZvLmVuZCwgdHJhaWxpbmdXaGl0ZXNwYWNlRW5kLCAwKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbmRJbmZvO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9maW5kRW5kKCk6IEJhcmNvZGVJbmZvIHtcbiAgICAgICAgdGhpcy5fcm93LnJldmVyc2UoKTtcblxuICAgICAgICBjb25zdCBlbmRJbmZvID0gdGhpcy5fZmluZFBhdHRlcm4oU1RPUF9QQVRURVJOLCB1bmRlZmluZWQsIDAsIGZhbHNlKTtcblxuICAgICAgICB0aGlzLl9yb3cucmV2ZXJzZSgpO1xuXG4gICAgICAgIGlmIChlbmRJbmZvID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHJldmVyc2UgbnVtYmVyc1xuICAgICAgICBjb25zdCBzdGFydCA9IGVuZEluZm8uc3RhcnQ7XG4gICAgICAgIGVuZEluZm8uc3RhcnQgPSB0aGlzLl9yb3cubGVuZ3RoIC0gZW5kSW5mby5lbmQ7XG4gICAgICAgIGVuZEluZm8uZW5kID0gdGhpcy5fcm93Lmxlbmd0aCAtIHN0YXJ0O1xuXG4gICAgICAgIHJldHVybiBlbmRJbmZvICE9PSBudWxsID8gdGhpcy5fdmVyaWZ5VHJhaWxpbmdXaGl0ZXNwYWNlKGVuZEluZm8pIDogbnVsbDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2RlY29kZUNvZGUoY291bnRlcjogQXJyYXk8bnVtYmVyPik6IEJhcmNvZGVJbmZvIHtcbiAgICAgICAgY29uc3QgYmVzdE1hdGNoOiBCYXJjb2RlSW5mbyA9IHtcbiAgICAgICAgICAgIGVycm9yOiBOdW1iZXIuTUFYX1ZBTFVFLFxuICAgICAgICAgICAgY29kZTogLTEsXG4gICAgICAgICAgICBzdGFydDogMCxcbiAgICAgICAgICAgIGVuZDogMFxuICAgICAgICB9O1xuXG4gICAgICAgIGZvciAobGV0IGNvZGUgPSAwOyBjb2RlIDwgQ09ERV9QQVRURVJOLmxlbmd0aDsgY29kZSsrKSB7XG4gICAgICAgICAgICBjb25zdCBlcnJvciA9IHRoaXMuX21hdGNoUGF0dGVybihjb3VudGVyLCBDT0RFX1BBVFRFUk5bY29kZV0pO1xuICAgICAgICAgICAgaWYgKGVycm9yIDwgYmVzdE1hdGNoLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgYmVzdE1hdGNoLmNvZGUgPSBjb2RlO1xuICAgICAgICAgICAgICAgIGJlc3RNYXRjaC5lcnJvciA9IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGJlc3RNYXRjaC5lcnJvciA8IHRoaXMuQVZFUkFHRV9DT0RFX0VSUk9SID8gYmVzdE1hdGNoIDogbnVsbDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2RlY29kZVBheWxvYWQoY291bnRlcnM6IFJlYWRvbmx5QXJyYXk8bnVtYmVyPiwgcmVzdWx0OiBBcnJheTxudW1iZXI+LCBkZWNvZGVkQ29kZXM6IEFycmF5PEJhcmNvZGVJbmZvPik6IFtCYXJjb2RlSW5mbywgQmFyY29kZUluZm9dIHtcbiAgICAgICAgY29uc3QgY291bnRlckxlbmd0aCA9IGNvdW50ZXJzLmxlbmd0aDtcbiAgICAgICAgY29uc3QgY291bnRlcjAgPSBbMCwgMCwgMCwgMCwgMF07XG4gICAgICAgIGNvbnN0IGNvdW50ZXIxID0gWzAsIDAsIDAsIDAsIDBdO1xuICAgICAgICBsZXQgY29kZTA6IEJhcmNvZGVJbmZvO1xuICAgICAgICBsZXQgY29kZTE6IEJhcmNvZGVJbmZvO1xuICAgICAgICBsZXQgcG9zID0gMDtcblxuICAgICAgICB3aGlsZSAocG9zIDwgY291bnRlckxlbmd0aCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb3VudGVyMFtpXSA9IGNvdW50ZXJzW3Bvc10gKiB0aGlzLl9iYXJTcGFjZVJhdGlvWzBdO1xuICAgICAgICAgICAgICAgIGNvdW50ZXIxW2ldID0gY291bnRlcnNbcG9zICsgMV0gKiB0aGlzLl9iYXJTcGFjZVJhdGlvWzFdO1xuICAgICAgICAgICAgICAgIHBvcyArPSAyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb2RlMCA9IHRoaXMuX2RlY29kZUNvZGUoY291bnRlcjApO1xuICAgICAgICAgICAgaWYgKCFjb2RlMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb2RlMSA9IHRoaXMuX2RlY29kZUNvZGUoY291bnRlcjEpO1xuICAgICAgICAgICAgaWYgKCFjb2RlMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXN1bHQucHVzaChjb2RlMC5jb2RlLCBjb2RlMS5jb2RlKTtcbiAgICAgICAgICAgIGRlY29kZWRDb2Rlcy5wdXNoKGNvZGUwLCBjb2RlMSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gW2NvZGUwLCBjb2RlMV07XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29kZTEyOFJlYWRlciB9IGZyb20gJy4vY29kZS0xMjgtcmVhZGVyJztcbmltcG9ydCB7IENvZGUzOVJlYWRlciB9IGZyb20gJy4vY29kZS0zOS1yZWFkZXInO1xuaW1wb3J0IHsgQ29kZTM5VklOUmVhZGVyIH0gZnJvbSAnLi9jb2RlLTM5LXZpbi1yZWFkZXInO1xuaW1wb3J0IHsgQ29kYWJhclJlYWRlciB9IGZyb20gJy4vY29kYWJhci1yZWFkZXInO1xuaW1wb3J0IHsgRUFOUmVhZGVyIH0gZnJvbSAnLi9lYW4tcmVhZGVyJztcbmltcG9ydCB7IEVBTjhSZWFkZXIgfSBmcm9tICcuL2Vhbi04LXJlYWRlcic7XG5pbXBvcnQgeyBFQU4yUmVhZGVyIH0gZnJvbSAnLi9lYW4tMi1yZWFkZXInO1xuaW1wb3J0IHsgRUFONVJlYWRlciB9IGZyb20gJy4vZWFuLTUtcmVhZGVyJztcbmltcG9ydCB7IFVQQ1JlYWRlciB9IGZyb20gJy4vdXBjLXJlYWRlcic7XG5pbXBvcnQgeyBVUENFUmVhZGVyIH0gZnJvbSAnLi91cGMtZS1yZWFkZXInO1xuaW1wb3J0IHsgSTJvZjVSZWFkZXIgfSBmcm9tICcuL2kyb2Y1LXJlYWRlcic7XG5pbXBvcnQgeyBUd29PZkZpdmVSZWFkZXIgfSBmcm9tICcuLzJvZjUtcmVhZGVyJztcbmltcG9ydCB7IENvZGU5M1JlYWRlciB9IGZyb20gJy4vY29kZS05My1yZWFkZXInO1xuXG5leHBvcnQgY29uc3QgUmVhZGVycyA9IHtcbiAgICBjb2RlXzEyOF9yZWFkZXI6IENvZGUxMjhSZWFkZXIsXG4gICAgZWFuX3JlYWRlcjogRUFOUmVhZGVyLFxuICAgIGVhbl81X3JlYWRlcjogRUFONVJlYWRlcixcbiAgICBlYW5fMl9yZWFkZXI6IEVBTjJSZWFkZXIsXG4gICAgZWFuXzhfcmVhZGVyOiBFQU44UmVhZGVyLFxuICAgIGNvZGVfMzlfcmVhZGVyOiBDb2RlMzlSZWFkZXIsXG4gICAgY29kZV8zOV92aW5fcmVhZGVyOiBDb2RlMzlWSU5SZWFkZXIsXG4gICAgY29kYWJhcl9yZWFkZXI6IENvZGFiYXJSZWFkZXIsXG4gICAgdXBjX3JlYWRlcjogVVBDUmVhZGVyLFxuICAgIHVwY19lX3JlYWRlcjogVVBDRVJlYWRlcixcbiAgICBpMm9mNV9yZWFkZXI6IEkyb2Y1UmVhZGVyLFxuICAgICcyb2Y1X3JlYWRlcic6IFR3b09mRml2ZVJlYWRlcixcbiAgICBjb2RlXzkzX3JlYWRlcjogQ29kZTkzUmVhZGVyXG59O1xuIiwiaW1wb3J0IHsgQmFyY29kZUluZm8sIEJhcmNvZGVSZWFkZXIsIEJhcmNvZGVSZWFkZXJDb25maWcgfSBmcm9tICcuL2JhcmNvZGUtcmVhZGVyJztcbmltcG9ydCB7IEVBTlJlYWRlciB9IGZyb20gJy4vZWFuLXJlYWRlcic7XG5cbmNvbnN0IENPREVfRlJFUVVFTkNZID0gW1s1NiwgNTIsIDUwLCA0OSwgNDQsIDM4LCAzNSwgNDIsIDQxLCAzN10sIFs3LCAxMSwgMTMsIDE0LCAxOSwgMjUsIDI4LCAyMSwgMjIsIDI2XV07XG5cbmV4cG9ydCBjbGFzcyBVUENFUmVhZGVyIGV4dGVuZHMgRUFOUmVhZGVyIHtcbiAgICBnZXQgU1RPUF9QQVRURVJOKCkge1xuICAgICAgICByZXR1cm4gWzEgLyA2ICogNywgMSAvIDYgKiA3LCAxIC8gNiAqIDcsIDEgLyA2ICogNywgMSAvIDYgKiA3LCAxIC8gNiAqIDddO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZz86IEJhcmNvZGVSZWFkZXJDb25maWcsIHN1cHBsZW1lbnRzPzogQXJyYXk8QmFyY29kZVJlYWRlcj4pIHtcbiAgICAgICAgc3VwZXIoY29uZmlnLCBzdXBwbGVtZW50cyk7XG5cbiAgICAgICAgdGhpcy5fZm9ybWF0ID0gJ3VwY19lJztcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2RlY29kZVBheWxvYWQoY29kZTogQmFyY29kZUluZm8sIHJlc3VsdDogQXJyYXk8bnVtYmVyPiwgZGVjb2RlZENvZGVzOiBBcnJheTxCYXJjb2RlSW5mbz4pOiBCYXJjb2RlSW5mbyB7XG4gICAgICAgIGxldCBjb2RlRnJlcXVlbmN5ID0gMHgwO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gICAgICAgICAgICBjb2RlID0gdGhpcy5fZGVjb2RlQ29kZShjb2RlLmVuZCk7XG4gICAgICAgICAgICBpZiAoIWNvZGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb2RlLmNvZGUgPj0gdGhpcy5DT0RFX0dfU1RBUlQpIHtcbiAgICAgICAgICAgICAgICBjb2RlLmNvZGUgPSBjb2RlLmNvZGUgLSB0aGlzLkNPREVfR19TVEFSVDtcbiAgICAgICAgICAgICAgICBjb2RlRnJlcXVlbmN5IHw9IDEgPDwgKDUgLSBpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGNvZGUuY29kZSk7XG4gICAgICAgICAgICBkZWNvZGVkQ29kZXMucHVzaChjb2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5fZGV0ZXJtaW5lUGFyaXR5KGNvZGVGcmVxdWVuY3ksIHJlc3VsdCkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvZGU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZGV0ZXJtaW5lUGFyaXR5KGNvZGVGcmVxdWVuY3k6IG51bWJlciwgcmVzdWx0OiBBcnJheTxudW1iZXI+KTogYm9vbGVhbiB7XG4gICAgICAgIGZvciAobGV0IG5yU3lzdGVtID0gMDsgbnJTeXN0ZW0gPCBDT0RFX0ZSRVFVRU5DWS5sZW5ndGg7IG5yU3lzdGVtKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQ09ERV9GUkVRVUVOQ1lbbnJTeXN0ZW1dLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvZGVGcmVxdWVuY3kgPT09IENPREVfRlJFUVVFTkNZW25yU3lzdGVtXVtpXSkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQudW5zaGlmdChuclN5c3RlbSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGkpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2NvbnZlcnRUb1VQQ0EocmVzdWx0OiBBcnJheTxudW1iZXI+KTogQXJyYXk8bnVtYmVyPiB7XG4gICAgICAgIGNvbnN0IGxhc3REaWdpdCA9IHJlc3VsdFtyZXN1bHQubGVuZ3RoIC0gMl07XG4gICAgICAgIGxldCB1cGNhID0gW3Jlc3VsdFswXV07XG5cbiAgICAgICAgaWYgKGxhc3REaWdpdCA8PSAyKSB7XG4gICAgICAgICAgICB1cGNhID0gdXBjYS5jb25jYXQocmVzdWx0LnNsaWNlKDEsIDMpKS5jb25jYXQoW2xhc3REaWdpdCwgMCwgMCwgMCwgMF0pLmNvbmNhdChyZXN1bHQuc2xpY2UoMywgNikpO1xuICAgICAgICB9IGVsc2UgaWYgKGxhc3REaWdpdCA9PT0gMykge1xuICAgICAgICAgICAgdXBjYSA9IHVwY2EuY29uY2F0KHJlc3VsdC5zbGljZSgxLCA0KSkuY29uY2F0KFswLCAwLCAwLCAwLCAwXSkuY29uY2F0KHJlc3VsdC5zbGljZSg0LCA2KSk7XG4gICAgICAgIH0gZWxzZSBpZiAobGFzdERpZ2l0ID09PSA0KSB7XG4gICAgICAgICAgICB1cGNhID0gdXBjYS5jb25jYXQocmVzdWx0LnNsaWNlKDEsIDUpKS5jb25jYXQoWzAsIDAsIDAsIDAsIDAsIHJlc3VsdFs1XV0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdXBjYSA9IHVwY2EuY29uY2F0KHJlc3VsdC5zbGljZSgxLCA2KSkuY29uY2F0KFswLCAwLCAwLCAwLCBsYXN0RGlnaXRdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHVwY2EucHVzaChyZXN1bHRbcmVzdWx0Lmxlbmd0aCAtIDFdKTtcbiAgICAgICAgcmV0dXJuIHVwY2E7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9jaGVja3N1bShyZXN1bHQ6IEFycmF5PG51bWJlcj4pOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHN1cGVyLl9jaGVja3N1bSh0aGlzLl9jb252ZXJ0VG9VUENBKHJlc3VsdCkpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZmluZEVuZChvZmZzZXQ6IG51bWJlciwgaXNXaGl0ZTogMCB8IDEpIHtcbiAgICAgICAgaXNXaGl0ZSA9IDE7XG4gICAgICAgIHJldHVybiBzdXBlci5fZmluZEVuZChvZmZzZXQsIGlzV2hpdGUpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfdmVyaWZ5VHJhaWxpbmdXaGl0ZXNwYWNlKGVuZEluZm86IEJhcmNvZGVJbmZvKTogQmFyY29kZUluZm8ge1xuICAgICAgICBjb25zdCB0cmFpbGluZ1doaXRlc3BhY2VFbmQgPSBlbmRJbmZvLmVuZCArIChlbmRJbmZvLmVuZCAtIGVuZEluZm8uc3RhcnQpIC8gMjtcblxuICAgICAgICBpZiAodHJhaWxpbmdXaGl0ZXNwYWNlRW5kIDwgdGhpcy5fcm93Lmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX21hdGNoUmFuZ2UoZW5kSW5mby5lbmQsIHRyYWlsaW5nV2hpdGVzcGFjZUVuZCwgMCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZW5kSW5mbztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBCYXJjb2RlLCBCYXJjb2RlUmVhZGVyLCBCYXJjb2RlUmVhZGVyQ29uZmlnIH0gZnJvbSAnLi9iYXJjb2RlLXJlYWRlcic7XG5pbXBvcnQgeyBFQU5SZWFkZXIgfSBmcm9tICcuL2Vhbi1yZWFkZXInO1xuXG5leHBvcnQgY2xhc3MgVVBDUmVhZGVyIGV4dGVuZHMgRUFOUmVhZGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihjb25maWc/OiBCYXJjb2RlUmVhZGVyQ29uZmlnLCBzdXBwbGVtZW50cz86IEFycmF5PEJhcmNvZGVSZWFkZXI+KSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZywgc3VwcGxlbWVudHMpO1xuXG4gICAgICAgIHRoaXMuX2Zvcm1hdCA9ICd1cGNfYSc7XG4gICAgfVxuXG4gICAgZGVjb2RlKCk6IEJhcmNvZGUge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5kZWNvZGUoKTtcblxuICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5jb2RlICYmIHJlc3VsdC5jb2RlLmxlbmd0aCA9PT0gMTMgJiYgcmVzdWx0LmNvZGUuY2hhckF0KDApID09PSAnMCcpIHtcbiAgICAgICAgICAgIHJlc3VsdC5jb2RlID0gcmVzdWx0LmNvZGUuc3Vic3RyaW5nKDEpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9