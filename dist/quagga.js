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








function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



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
      this._config = _objectSpread({}, config);
      this._baseUrl = config.src;
      this._size = config.sequence && config.length ? config.length : 1;

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
  var shift = config.halfSample ? 1 : 0 | 0;
  var inputStreamConfig = inputStream.config; // calculate width and height based on area

  if (inputStreamConfig && inputStreamConfig.area) {
    var area = computeImageArea(width, height, inputStreamConfig.area);
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









function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


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
    get: function get() {
      return this._config;
    },
    set: function set(config) {
      this._config = _objectSpread({}, config);
      this._video.src = config.src || '';
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/* harmony default export */ __webpack_exports__["default"] = ({
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
    var _this = this;

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
    this.init(config, function () {
      _common_events__WEBPACK_IMPORTED_MODULE_1__["Events"].once('processed', function (result) {
        _this.stop();

        resultCallback.call(null, result);
      }, true);

      _this.start();
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
});

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
  var next = null;
  _stopped = false;

  (function frame(timestamp) {
    next = next || timestamp;

    if (!_stopped) {
      if (timestamp >= next) {
        next += delay;

        _update();
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
  var Quagga;
  var worker = self;
  var imageWrapper;

  if (factory) {
    Quagga = factory()["default"];

    if (!Quagga) {
      worker.postMessage({
        event: 'error',
        message: 'Quagga could not be created'
      });
      return;
    }
  }

  self.onmessage = function (_ref4) {
    var data = _ref4.data;

    if (data.cmd === 'init') {
      var config = data.config;
      config.numOfWorkers = 0;
      imageWrapper = new Quagga.ImageWrapper({
        x: data.size.x,
        y: data.size.y
      }, new Uint8Array(data.imageData));
      var imageData = imageWrapper.data;
      Quagga.init(config, function () {
        return worker.postMessage({
          event: 'initialized',
          imageData: imageData
        }, [imageData.buffer]);
      }, imageWrapper);
      Quagga.onProcessed(function (result) {
        return worker.postMessage({
          event: 'processed',
          imageData: imageData,
          result: result
        }, [imageData.buffer]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9RdWFnZ2Evd2VicGFjay9teU1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vUXVhZ2dhL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1F1YWdnYS8vVXNlcnMvYWRvbXJhdGNoZXYvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy9Vc2Vycy9hZG9tcmF0Y2hldi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy9Vc2Vycy9hZG9tcmF0Y2hldi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yLmpzIiwid2VicGFjazovL1F1YWdnYS8vVXNlcnMvYWRvbXJhdGNoZXYvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy9Vc2Vycy9hZG9tcmF0Y2hldi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly9RdWFnZ2EvL1VzZXJzL2Fkb21yYXRjaGV2L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL1F1YWdnYS8vVXNlcnMvYWRvbXJhdGNoZXYvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0LmpzIiwid2VicGFjazovL1F1YWdnYS8vVXNlcnMvYWRvbXJhdGNoZXYvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy9Vc2Vycy9hZG9tcmF0Y2hldi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly9RdWFnZ2EvL1VzZXJzL2Fkb21yYXRjaGV2L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9RdWFnZ2EvL1VzZXJzL2Fkb21yYXRjaGV2L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL1F1YWdnYS8vVXNlcnMvYWRvbXJhdGNoZXYvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly9RdWFnZ2EvL1VzZXJzL2Fkb21yYXRjaGV2L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL1F1YWdnYS8vVXNlcnMvYWRvbXJhdGNoZXYvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc3VwZXJQcm9wQmFzZS5qcyIsIndlYnBhY2s6Ly9RdWFnZ2EvL1VzZXJzL2Fkb21yYXRjaGV2L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovL1F1YWdnYS8vVXNlcnMvYWRvbXJhdGNoZXYvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL1F1YWdnYS8vVXNlcnMvYWRvbXJhdGNoZXYvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwid2VicGFjazovL1F1YWdnYS8vVXNlcnMvYWRvbXJhdGNoZXYvbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS1tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy9Vc2Vycy9hZG9tcmF0Y2hldi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovL1F1YWdnYS8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL2FuYWx5dGljcy9yZXN1bHQtY29sbGVjdG9yLnRzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9jb21tb24vY2x1c3Rlci50cyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvY29tbW9uL2V2ZW50cy50cyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvY29tbW9uL2hzdjJyZ2IudHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL2NvbW1vbi9pbWFnZS1kZWJ1Zy50cyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvY29tbW9uL2ltYWdlLXdyYXBwZXIudHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL2NvbW1vbi9tZWRpYS1kZXZpY2VzLnRzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9jb21tb24vbWVyZ2UudHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL2NvbmZpZy9jb25maWcuZGV2LnRzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9kZWNvZGVyL2JhcmNvZGUtZGVjb2Rlci50cyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvZGVjb2Rlci9icmVzZW5oYW0udHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL2lucHV0L2NhbWVyYS1hY2Nlc3MudHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL2lucHV0L2V4aWYtaGVscGVyLnRzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9pbnB1dC9mcmFtZS1ncmFiYmVyLnRzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9pbnB1dC9pbWFnZS1sb2FkZXIudHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL2lucHV0L2ltYWdlLXN0cmVhbS50cyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvaW5wdXQvaW5wdXQtc3RyZWFtLXV0aWxzLnRzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9pbnB1dC9pbnB1dC1zdHJlYW0udHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL2lucHV0L2xpdmUtc3RyZWFtLnRzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9pbnB1dC92aWRlby1zdHJlYW0udHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL2xvY2F0b3IvYmFyY29kZS1sb2NhdG9yLXV0aWxzLnRzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9sb2NhdG9yL2JhcmNvZGUtbG9jYXRvci50cyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvbG9jYXRvci9yYXN0ZXJpemVyLnRzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9sb2NhdG9yL3NrZWxldG9uaXplci5qcyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvbG9jYXRvci90cmFjZXIudHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL3F1YWdnYS50cyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvcmVhZGVyLzJvZjUtcmVhZGVyLnRzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9yZWFkZXIvYmFyY29kZS1yZWFkZXIudHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL3JlYWRlci9jb2RhYmFyLXJlYWRlci50cyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvcmVhZGVyL2NvZGUtMTI4LXJlYWRlci50cyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvcmVhZGVyL2NvZGUtMzktcmVhZGVyLnRzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9yZWFkZXIvY29kZS0zOS12aW4tcmVhZGVyLnRzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9yZWFkZXIvY29kZS05My1yZWFkZXIudHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL3JlYWRlci9lYW4tMi1yZWFkZXIudHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL3JlYWRlci9lYW4tNS1yZWFkZXIudHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL3JlYWRlci9lYW4tOC1yZWFkZXIudHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL3JlYWRlci9lYW4tcmVhZGVyLnRzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9yZWFkZXIvaTJvZjUtcmVhZGVyLnRzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9yZWFkZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL3JlYWRlci91cGMtZS1yZWFkZXIudHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL3JlYWRlci91cGMtcmVhZGVyLnRzIl0sIm5hbWVzIjpbIlJlc3VsdENvbGxlY3RvciIsImNvbmZpZyIsIl9yZXN1bHRzIiwiQXJyYXkiLCJfY29uZmlnIiwiX2NhcGFjaXR5IiwiY2FwYWNpdHkiLCJfY2FwdHVyZSIsImNhcHR1cmUiLCJfY2FudmFzIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiX2NvbnRleHQiLCJnZXRDb250ZXh0IiwiZGF0YSIsImltYWdlV2lkdGgiLCJpbWFnZUhlaWdodCIsImNvZGVSZXN1bHQiLCJfY29udGFpbnMiLCJfcGFzc2VzRmlsdGVyIiwicmVzdWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJJbWFnZURlYnVnIiwiZHJhd0ltYWdlIiwiZnJhbWUiLCJ0b0RhdGFVUkwiLCJwdXNoIiwiYmxhY2tsaXN0Iiwic29tZSIsIml0ZW0iLCJPYmplY3QiLCJrZXlzIiwiZXZlcnkiLCJrZXkiLCJmaWx0ZXIiLCJDbHVzdGVyIiwibW9tZW50cyIsInRocmVzaG9sZCIsImNsdXN0ZXJzIiwiZm9yRWFjaCIsIm1vbWVudCIsIm1hdGNoaW5nQ2x1c3RlciIsImZpbmQiLCJjbHVzdGVyIiwiZml0cyIsImFkZCIsIl90aHJlc2hvbGQiLCJfbW9tZW50cyIsIl9jZW50ZXIiLCJyYWQiLCJ4IiwieSIsInBvaW50IiwicmVkdWNlIiwic3VtIiwicCIsImxlbmd0aCIsIk1hdGgiLCJjb3MiLCJzaW4iLCJzaW1pbGFyaXR5IiwiYWJzIiwiZXZlbnRzIiwiRXZlbnRzIiwiZXZlbnQiLCJjYWxsYmFjayIsImFzeW5jIiwic3Vic2NyaXB0aW9uIiwiZ2V0RXZlbnQiLCJzdWJzY3JpcHRpb25zIiwidHlwZSIsImV2ZW50SXRlbSIsIm9uY2UiLCJwdWJsaXNoU3Vic2NyaXB0aW9uIiwic3Vic2NyaWJlIiwiZXZlbnROYW1lIiwic2V0VGltZW91dCIsImhzdjJyZ2IiLCJoc3YiLCJyZ2IiLCJoIiwicyIsInYiLCJjIiwibSIsInIiLCJnIiwiYiIsImRyYXdQYXRoIiwicGF0aCIsImNvbnRleHQiLCJjb2xvciIsImxpbmVXaWR0aCIsInN0cm9rZVN0eWxlIiwiZmlsbFN0eWxlIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwic2xpY2UiLCJsaW5lVG8iLCJjbG9zZVBhdGgiLCJzdHJva2UiLCJpbWFnZURhdGEiLCJjYW52YXNEYXRhIiwiZ2V0SW1hZ2VEYXRhIiwiaW1hZ2VJbmRleCIsImNhbnZhc0luZGV4IiwidmFsdWUiLCJwdXRJbWFnZURhdGEiLCJJbWFnZVdyYXBwZXIiLCJzaXplIiwiYXJyYXlUeXBlIiwiaW5pdGlhbGl6ZSIsIlVpbnQ4QXJyYXkiLCJmaWxsIiwiYm9yZGVyIiwiaW1hZ2VXcmFwcGVyIiwiZnJvbVgiLCJmcm9tWSIsInNpemVZIiwic2l6ZVgiLCJpIiwibGFiZWxDb3VudCIsImxhYmVsU3VtIiwibTAwIiwibTAxIiwibTEwIiwibTExIiwibTAyIiwibTIwIiwidGhldGEiLCJ5c3EiLCJ2YWwiLCJsYWJlbCIsIlBJIiwiUElfNCIsImlzTmFOIiwieF8iLCJ5XyIsIm11MTEiLCJtdTAyIiwibXUyMCIsInRtcCIsImF0YW4iLCJzY2FsZSIsImN1cnJlbnQiLCJwaXhlbCIsImdldCIsIndoaXRlUmdiIiwiYmxhY2tSZ2IiLCJlbnVtZXJhdGVEZXZpY2VzIiwibmF2aWdhdG9yIiwibWVkaWFEZXZpY2VzIiwiUHJvbWlzZSIsInJlamVjdCIsIkVycm9yIiwiZ2V0VXNlck1lZGlhIiwiY29uc3RyYWludHMiLCJtZXJnZSIsImlzT2JqZWN0Iiwib2JqIiwib2JqZWN0cyIsInByZXYiLCJwVmFsIiwib1ZhbCIsImlzQXJyYXkiLCJpbnB1dFN0cmVhbSIsIm5hbWUiLCJmYWNpbmdNb2RlIiwiYXJlYSIsInRvcCIsInJpZ2h0IiwibGVmdCIsImJvdHRvbSIsInNpbmdsZUNoYW5uZWwiLCJsb2NhdGUiLCJudW1PZldvcmtlcnMiLCJkZWNvZGVyIiwicmVhZGVycyIsImRlYnVnIiwiZHJhd0JvdW5kaW5nQm94Iiwic2hvd0ZyZXF1ZW5jeSIsImRyYXdTY2FubGluZSIsInNob3dQYXR0ZXJuIiwibG9jYXRvciIsImhhbGZTYW1wbGUiLCJwYXRjaFNpemUiLCJzaG93Q2FudmFzIiwic2hvd1BhdGNoZXMiLCJzaG93Rm91bmRQYXRjaGVzIiwic2hvd1NrZWxldG9uIiwic2hvd0xhYmVscyIsInNob3dQYXRjaExhYmVscyIsInNob3dSZW1haW5pbmdQYXRjaExhYmVscyIsImJveEZyb21QYXRjaGVzIiwic2hvd1RyYW5zZm9ybWVkIiwic2hvd1RyYW5zZm9ybWVkQm94Iiwic2hvd0JCIiwiQmFyY29kZURlY29kZXIiLCJpbnB1dEltYWdlV3JhcHBlciIsIl9pbnB1dEltYWdlV3JhcHBlciIsIl9iYXJjb2RlUmVhZGVycyIsInByb2Nlc3MiLCJkZWJ1Z0RpdiIsInF1ZXJ5U2VsZWN0b3IiLCJfZnJlcXVlbmN5Q2FudmFzIiwiY2xhc3NOYW1lIiwiYXBwZW5kQ2hpbGQiLCJzdHlsZSIsImRpc3BsYXkiLCJfcGF0dGVybkNhbnZhcyIsIm92ZXJsYXlDYW52YXMiLCJfb3ZlcmxheUNvbnRleHQiLCJfaW5pdFJlYWRlcnMiLCJib3hlcyIsImJhcmNvZGVzIiwibXVsdGlwbGUiLCJib3giLCJkZWNvZGVGcm9tQm91bmRpbmdCb3giLCJfZHJhd1BhdGgiLCJsaW5lIiwiX2dldExpbmUiLCJhbmdsZSIsImF0YW4yIiwiX2dldEV4dGVuZGVkTGluZSIsIl90cnlEZWNvZGUiLCJfdHJ5RGVjb2RlQnJ1dGVGb3JjZSIsInBhdHRlcm4iLCJiYXJjb2RlTGluZSIsInJlYWRlckNvbmZpZyIsInJlYWRlciIsImNvbmZpZ3VyYXRpb24iLCJzdXBwbGVtZW50cyIsImZvcm1hdCIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJzdXBwbGVtZW50IiwiUmVhZGVycyIsIkZPUk1BVCIsIkpTT04iLCJzdHJpbmdpZnkiLCJleHRlbmRMaW5lIiwiYW1vdW50IiwiZXh0ZW5zaW9uIiwibGluZUxlbmd0aCIsInNxcnQiLCJleHRlbnNpb25MZW5ndGgiLCJpbkltYWdlV2l0aEJvcmRlciIsIkJyZXNlbmhhbSIsImdldEJhcmNvZGVMaW5lIiwiX3ByaW50RnJlcXVlbmN5IiwidG9CaW5hcnlMaW5lIiwiX3ByaW50UGF0dGVybiIsImRlY29kZVBhdHRlcm4iLCJsaW5lQW5nbGUiLCJzaWRlTGVuZ3RoIiwic2xpY2VzIiwieGRpciIsInlkaXIiLCJkaXIiLCJmaWxsUmVjdCIsIlNsb3BlIiwicDEiLCJwMiIsIngwIiwieTAiLCJ4MSIsInkxIiwic3RlZXAiLCJtaW4iLCJtYXgiLCJyZWFkIiwiYSIsImRlbHRheCIsImRlbHRheSIsImVycm9yIiwieXN0ZXAiLCJjZW50ZXIiLCJleHRyZW1hIiwiclRocmVzaG9sZCIsImN1cnJlbnREaXIiLCJVcCIsIkRvd24iLCJwb3MiLCJzbG9wZSIsInNsb3BlMiIsImoiLCJfc3RyZWFtIiwiQ2FtZXJhQWNjZXNzIiwicmVxdWVzdCIsInZpZGVvIiwidmlkZW9Db25zdHJhaW50cyIsIm5vcm1hbGl6ZWRDb25zdHJhaW50cyIsInBpY2tDb25zdHJhaW50cyIsInNyY09iamVjdCIsInNldEF0dHJpYnV0ZSIsInJlc29sdmUiLCJhZGRFdmVudExpc3RlbmVyIiwicGxheSIsInRoZW4iLCJfd2FpdEZvclZpZGVvIiwiYmluZCIsInJlbGVhc2UiLCJ0cmFja3MiLCJnZXRWaWRlb1RyYWNrcyIsInN0b3AiLCJlbnVtZXJhdGVWaWRlb0RldmljZXMiLCJkZXZpY2VzIiwia2luZCIsImdldEFjdGl2ZVN0cmVhbUxhYmVsIiwidHJhY2siLCJnZXRBY3RpdmVUcmFjayIsImFzcGVjdFJhdGlvIiwiZGV2aWNlSWQiLCJtaW5Bc3BlY3RSYXRpbyIsImZhY2luZyIsImF1ZGlvIiwidmlkZW9XaWR0aCIsInZpZGVvSGVpZ2h0IiwiYXR0ZW1wdHMiLCJjaGVja1ZpZGVvIiwid2luZG93IiwiRXhpZlRhZ3MiLCJBdmFpbGFibGVUYWdzIiwiZmluZFRhZ3NJbk9iamVjdFVSTCIsInNyYyIsInRhZ3MiLCJ0ZXN0Iiwib2JqZWN0VVJMVG9CbG9iIiwiYnVmZmVyIiwiZmluZFRhZ3NJbkJ1ZmZlciIsImZpbGUiLCJzZWxlY3RlZFRhZ3MiLCJkYXRhVmlldyIsIkRhdGFWaWV3IiwiYnl0ZUxlbmd0aCIsImV4aWZUYWdzIiwic2VsZWN0ZWRUYWciLCJleGlmVGFnIiwidGFnIiwib2Zmc2V0IiwiZ2V0VWludDgiLCJtYXJrZXIiLCJyZWFkRVhJRkRhdGEiLCJnZXRVaW50MTYiLCJ1cmwiLCJmZXRjaCIsInJlc3BvbnNlIiwib2siLCJhcnJheUJ1ZmZlciIsInN0YXR1cyIsInN0YXJ0Iiwic3BsaXQiLCJjaGFyIiwiaW5kZXgiLCJjaGFyQ29kZUF0IiwidGlmZk9mZnNldCIsImJpZ0VuZCIsImZpcnN0SUZET2Zmc2V0IiwiZ2V0VWludDMyIiwicmVhZFRhZ3MiLCJkaXJTdGFydCIsInN0cmluZ3MiLCJlbnRyaWVzIiwiZW50cnlPZmZzZXQiLCJyZWFkVGFnVmFsdWUiLCJudW1WYWx1ZXMiLCJ1bmRlZmluZWQiLCJRVUFURVJfQ0lSQ0xFIiwiRnJhbWVHcmFiYmVyIiwiY2FudmFzIiwiX2lucHV0U3RyZWFtIiwiX3N0cmVhbUNvbmZpZyIsIl9jYW52YXNXaWR0aCIsImNhbnZhc1dpZHRoIiwiX2NhbnZhc0hlaWdodCIsImNhbnZhc0hlaWdodCIsIl93aWR0aCIsIl9oZWlnaHQiLCJfdG9wTGVmdCIsInRvcExlZnQiLCJfZGF0YSIsInZpZGVvU2l6ZSIsInJlYWxXaWR0aCIsInJlYWxIZWlnaHQiLCJjYW52YXNTaXplIiwiZ2V0RnJhbWUiLCJfYWRqdXN0Q2FudmFzU2l6ZSIsImRyYXdhYmxlIiwiZHJhd0FuZ2xlIiwiSFRNTFZpZGVvRWxlbWVudCIsImltYWdlIiwib3JpZW50YXRpb24iLCJoYWxmV2lkdGgiLCJoYWxmSGVpZ2h0IiwidHJhbnNsYXRlIiwicm90YXRlIiwiX2dyYXlBbmRIYWxmU2FtcGxlRnJvbUNhbnZhc0RhdGEiLCJfY29tcHV0ZUdyYXkiLCJ3YXJuIiwiZW5kSW5kZXgiLCJvdXRXaWR0aCIsInRvcFJvd0luZGV4IiwiYm90dG9tUm93SW5kZXgiLCJvdXRJbWFnZUluZGV4IiwidG9wNCIsImJvdHRvbTQiLCJpbWFnZURhdGFMZW5ndGgiLCJJbWFnZUxvYWRlciIsImJhc2VVcmkiLCJzZXF1ZW5jZSIsImxvYWRlZCIsImxvYWRlZEltYWdlIiwibm90TG9hZGVkSW1hZ2VzIiwic3BsaWNlIiwiaW1hZ2VTcmNzIiwiaW1hZ2VOYW1lIiwic3Vic3RyIiwibGFzdEluZGV4T2YiLCJsb2FkZWRJbWFnZXMiLCJmaXJzdEltYWdlIiwiSW1hZ2UiLCJvbmxvYWQiLCJJbWFnZVN0cmVhbSIsIl9iYXNlVXJsIiwiX2VuZGVkIiwiX2ZyYW1lSW5kZXgiLCJfaW1hZ2VzIiwiX2xvYWRlZCIsIl9vZmZzZXQiLCJfcGF1c2VkIiwiX3NpemUiLCJ0cmlnZ2VyIiwibG9hZCIsImltYWdlcyIsIl9jYWxjdWxhdGVkV2lkdGgiLCJfY2FsY3VsYXRlZEhlaWdodCIsIl9sb2FkSW1hZ2VzIiwidGltZSIsIklucHV0U3RyZWFtIiwiX2NvbXB1dGVEaXZpc29ycyIsIm4iLCJkaXZpc29ycyIsImxhcmdlRGl2aXNvcnMiLCJkaXZpc29yIiwidW5zaGlmdCIsImNvbmNhdCIsIl9jb21wdXRlQ29tbW9uRGl2aXNvcnMiLCJsYXJnZURpdmlzb3IiLCJjYWxjdWxhdGVQYXRjaFNpemUiLCJ3aWRlU2lkZSIsIm5yT2ZQYXRjaGVzTGlzdCIsIm5yT2ZQYXRjaGVzTWFwIiwic21hbGwiLCJtZWRpdW0iLCJsYXJnZSIsIm5yT2ZQYXRjaGVzSW5kZXgiLCJuck9mUGF0Y2hlcyIsImRlc2lyZWRQYXRjaFNpemUiLCJmaW5kUGF0Y2hTaXplRm9yRGl2aXNvcnMiLCJmb3VuZCIsIm9wdGltYWxQYXRjaFNpemUiLCJjaGVja0ltYWdlQ29uc3RyYWludHMiLCJzaGlmdCIsImlucHV0U3RyZWFtQ29uZmlnIiwiY29tcHV0ZUltYWdlQXJlYSIsInNldENhbnZhc1NpemUiLCJfcGFyc2VDc3NEaW1lbnNpb25WYWx1ZXMiLCJkaW1lbnNpb24iLCJwYXJzZUZsb2F0IiwidW5pdCIsImluZGV4T2YiLCJfZGltZW5zaW9uc0NvbnZlcnRlcnMiLCJpbnB1dFdpZHRoIiwiaW5wdXRIZWlnaHQiLCJwYXJzZWRBcmVhIiwicGFyc2VkIiwiY2FsY3VsYXRlZCIsIl9ldmVudE5hbWVzIiwiX2V2ZW50SGFuZGxlcnMiLCJNYXAiLCJsaXN0ZW5lciIsIl9vcHRpb25zIiwiaGFzIiwic2V0IiwiY2xlYXIiLCJhcmdBcnJheSIsImhhbmRsZXJzIiwiYXBwbHkiLCJMaXZlU3RyZWFtIiwiVmlkZW9TdHJlYW0iLCJfdmlkZW8iLCJwYXVzZSIsIm9wdGlvbnMiLCJfaW5pdFNpemUiLCJlbmRlZCIsImN1cnJlbnRUaW1lIiwiaW52ZXJ0IiwibWF0cml4IiwiYTAiLCJhMSIsImEyIiwiYTMiLCJkZXRlcm1pbmFudCIsIkZsb2F0MzJBcnJheSIsInRyYW5zZm9ybVdpdGhNYXRyaXgiLCJfY29tcHV0ZUhpc3RvZ3JhbSIsImJpdHNQZXJQaXhlbCIsImJpdFNoaWZ0IiwiYnVja2V0Q291bnQiLCJoaXN0b2dyYW0iLCJJbnQzMkFycmF5IiwiX2RldGVybWluZU90c3VUaHJlc2hvbGQiLCJoaXN0IiwidmV0IiwicHgiLCJpbml0IiwiZW5kIiwibXgiLCJrIiwicDEyIiwibTEiLCJtMiIsIm0xMiIsIm1heEluZGV4IiwiYXJyYXkiLCJvdHN1VGhyZXNob2xkIiwidGFyZ2V0V3JhcHBlciIsInRhcmdldERhdGEiLCJvdXRJbWFnZVdyYXBwZXIiLCJvdXRJbWFnZSIsIm91dEltZ0luZGV4IiwiTW9tZW50U2ltaWxhcml0eVRocmVzaG9sZCIsIkJhcmNvZGVMb2NhdG9yIiwiX251bVBhdGNoZXMiLCJfaW5pdEJ1ZmZlcnMiLCJfaW5pdENhbnZhcyIsIl9jdXJyZW50SW1hZ2VXcmFwcGVyIiwiX2JpbmFyaXplSW1hZ2UiLCJwYXRjaGVzRm91bmQiLCJfZmluZFBhdGNoZXMiLCJtYXhMYWJlbCIsIl9yYXN0ZXJpemVBbmd1bGFyU2ltaWxhcml0eSIsInRvcExhYmVscyIsIl9maW5kQmlnZ2VzdENvbm5lY3RlZEFyZWFzIiwiX2ZpbmRCb3hlcyIsIl9wYXRjaFNpemUiLCJfYmluYXJ5SW1hZ2VXcmFwcGVyIiwiX2xhYmVsSW1hZ2VXcmFwcGVyIiwic2tlbGV0b25JbWFnZURhdGEiLCJBcnJheUJ1ZmZlciIsIl9zdWJJbWFnZVdyYXBwZXIiLCJfc2tlbEltYWdlV3JhcHBlciIsIl9za2VsZXRvbml6ZXIiLCJza2VsZXRvbml6ZXIiLCJzZWxmIiwiZ2xvYmFsIiwiX3BhdGNoTGFiZWxHcmlkIiwiX3BhdGNoR3JpZCIsIl9pbWFnZVRvUGF0Y2hHcmlkIiwidXNlV29ya2VyIiwiX2JpbmFyeUNvbnRleHQiLCJwYXRjaGVzIiwiYXZlcmFnZVJhZCIsIl9kcmF3UmVjdCIsImludmVyc2VNYXRyaXgiLCJtaW5YIiwibWluWSIsIm1heFgiLCJtYXhZIiwidmVydGV4IiwiemVyb0JvcmRlciIsInNob3ciLCJfc2tlbGV0b25pemUiLCJyYXN0ZXJpemVyIiwiUmFzdGVyaXplciIsInJhc3RlclJlc3VsdCIsInJhc3Rlcml6ZSIsIm92ZXJsYXkiLCJjb3VudCIsInBhdGNoIiwiX2Rlc2NyaWJlUGF0Y2giLCJsYWJlbEhpc3QiLCJzb3J0IiwiX2JveEZyb21QYXRjaGVzIiwiam9pbiIsImNsdXN0ZXJpemUiLCJ0b3BDbHVzdGVyIiwic3ViSW1hZ2VBc0NvcHkiLCJza2VsZXRvbml6ZSIsIm1pbkNvbXBvbmVudFdlaWdodCIsImNlaWwiLCJlbGlnaWJsZU1vbWVudHMiLCJtYXRjaGluZ01vbWVudHMiLCJfc2ltaWxhck1vbWVudHMiLCJjdXJyZW50SW5kZXgiLCJjdXJyZW50UGF0Y2giLCJTZWFyY2hEaXJlY3Rpb25zIiwiZGlyZWN0aW9uIiwiTnVtYmVyIiwiTUFYX1ZBTFVFIiwiX3RyYWNlIiwiX25vdFlldFByb2Nlc3NlZCIsInN0cm9rZVJlY3QiLCJFZGdlTGFiZWwiLCJDb250b3VyRGlyZWN0aW9uIiwibGFiZWxXcmFwcGVyIiwiX2ltYWdlRGF0YSIsIl9sYWJlbERhdGEiLCJfdHJhY2VyIiwiVHJhY2VyIiwiZGVwdGhMYWJlbCIsImNvbG9yTWFwIiwiY2MiLCJzYyIsImNvbm5lY3RlZENvdW50IiwiY3kiLCJsYWJlbEluZGV4IiwiYmMiLCJjeCIsImxjIiwiY29udG91clRyYWNpbmciLCJPdXRzaWRlIiwiQ1ciLCJmaXJzdFZlcnRleCIsIm5leHRQZWVyIiwiaW5zaWRlQ29udG91cnMiLCJwcmV2aW91c1BlZXIiLCJJbnNpZGUiLCJDQ1ciLCJmaXJzdENvbnRvdXIiLCJwcSIsImlxIiwicSIsIlVua25vd24iLCJuZXh0IiwiU2tlbGV0b25pemVyIiwic3RkbGliIiwiZm9yZWlnbiIsImltdWwiLCJlcm9kZSIsImluSW1hZ2VQdHIiLCJvdXRJbWFnZVB0ciIsInUiLCJ5U3RhcnQxIiwieVN0YXJ0MiIsInhTdGFydDEiLCJ4U3RhcnQyIiwic3VidHJhY3QiLCJhSW1hZ2VQdHIiLCJiSW1hZ2VQdHIiLCJiaXR3aXNlT3IiLCJjb3VudE5vblplcm8iLCJpbWFnZVB0ciIsImRpbGF0ZSIsIm1lbWNweSIsInNyY0ltYWdlUHRyIiwiZHN0SW1hZ2VQdHIiLCJzdWJJbWFnZVB0ciIsImVyb2RlZEltYWdlUHRyIiwidGVtcEltYWdlUHRyIiwic2tlbEltYWdlUHRyIiwiZG9uZSIsImVkZ2VMYWJlbCIsInN5Iiwic3giLCJGdiIsInRyYWNlIiwiQ3YiLCJsZGlyIiwiUCIsIl9fZmFjdG9yeVNvdXJjZV9fIiwiX2ZyYW1lR3JhYmJlciIsIl9zdG9wcGVkIiwiX2NhbnZhc0NvbnRhaW5lciIsImN0eCIsImRvbSIsIl9sb2NhdG9yIiwiX2JveFNpemUiLCJfZGVjb2RlciIsIl93b3JrZXJQb29sIiwiX29uVUlUaHJlYWQiLCJfcmVzdWx0Q29sbGVjdG9yIiwiY2IiLCJkZWZhdWx0Q29uZmlnIiwiX2luaXRpYWxpemVEYXRhIiwiX2luaXRJbnB1dFN0cmVhbSIsIl9zdGFydENvbnRpbnVvdXNVcGRhdGUiLCJfdXBkYXRlIiwiX2FkanVzdFdvcmtlclBvb2wiLCJjbGVhckV2ZW50SGFuZGxlcnMiLCJkZWNvZGVTaW5nbGUiLCJyZXN1bHRDYWxsYmFjayIsImNhbGwiLCJvbkRldGVjdGVkIiwib2ZmRGV0ZWN0ZWQiLCJ1bnN1YnNjcmliZSIsIm9uUHJvY2Vzc2VkIiwib2ZmUHJvY2Vzc2VkIiwic2V0UmVhZGVycyIsIndvcmtlciIsInBvc3RNZXNzYWdlIiwiY21kIiwicmVnaXN0ZXJSZXN1bHRDb2xsZWN0b3IiLCJyZXN1bHRDb2xsZWN0b3IiLCJhZGRSZXN1bHQiLCJ2aWV3cG9ydCIsIl9nZXRWaWV3UG9ydCIsImVyciIsIl9jYW5SZWNvcmQiLCJ0YXJnZXQiLCJIVE1MRWxlbWVudCIsInNlbGVjdG9yIiwiY2xlYXJGaXgiLCJfZ2V0Qm91bmRpbmdCb3hlcyIsIl90cmFuc2Zvcm0iLCJwb2x5Z29uIiwiX3RyYW5zZm9ybVJlc3VsdCIsImJhcmNvZGUiLCJfYWRkUmVzdWx0IiwiX2hhc0NvZGVSZXN1bHQiLCJfcHVibGlzaFJlc3VsdCIsInJlc3VsdFRvUHVibGlzaCIsInB1Ymxpc2giLCJfbG9jYXRlQW5kRGVjb2RlIiwiZGVjb2RlRnJvbUJvdW5kaW5nQm94ZXMiLCJhdmFpbGFibGVXb3JrZXIiLCJ3b3JrZXJUaHJlYWQiLCJidXN5IiwiYXR0YWNoRGF0YSIsImdyYWIiLCJkZWxheSIsImZyZXF1ZW5jeSIsInRpbWVzdGFtcCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInBlcmZvcm1hbmNlIiwibm93IiwiX2luaXRXb3JrZXIiLCJibG9iVVJMIiwiX2dlbmVyYXRlV29ya2VyQmxvYiIsIldvcmtlciIsIm9ubWVzc2FnZSIsIlVSTCIsInJldm9rZU9iamVjdFVSTCIsIm1lc3NhZ2UiLCJfd29ya2VySW50ZXJmYWNlIiwiZmFjdG9yeSIsIlF1YWdnYSIsImJsb2IiLCJCbG9iIiwidG9TdHJpbmciLCJjcmVhdGVPYmplY3RVUkwiLCJpbmNyZWFzZUJ5IiwidGVybWluYXRlIiwiTiIsIlciLCJTVEFSVF9QQVRURVJOIiwiU1RPUF9QQVRURVJOIiwiQ09ERV9QQVRURVJOIiwic3RhcnRQYXR0ZXJuTGVuZ3RoIiwiVHdvT2ZGaXZlUmVhZGVyIiwiX2JhclNwYWNlUmF0aW8iLCJfZm9ybWF0IiwiX3NpbmdsZUNvZGVFcnJvciIsIl9hdmVyYWdlQ29kZUVycm9yIiwic3RhcnRJbmZvIiwiX2ZpbmRTdGFydCIsImVuZEluZm8iLCJfZmluZEVuZCIsImNvdW50ZXJzIiwiX2ZpbGxDb3VudGVycyIsImRlY29kZWRDb2RlcyIsImNvZGUiLCJfZGVjb2RlUGF5bG9hZCIsIl9uZXh0U2V0IiwiX3JvdyIsIm5hcnJvd0JhcldpZHRoIiwiX2ZpbmRQYXR0ZXJuIiwibGVhZGluZ1doaXRlc3BhY2VTdGFydCIsIl9tYXRjaFJhbmdlIiwidHJhaWxpbmdXaGl0ZXNwYWNlRW5kIiwicmV2ZXJzZSIsIl92ZXJpZnlUcmFpbGluZ1doaXRlc3BhY2UiLCJjb3VudGVyIiwiYmVzdE1hdGNoIiwiX21hdGNoUGF0dGVybiIsIkFWRVJBR0VfQ09ERV9FUlJPUiIsImNvdW50ZXJMZW5ndGgiLCJfZGVjb2RlQ29kZSIsIkJhcmNvZGVSZWFkZXIiLCJCYXJjb2RlRGlyZWN0aW9uIiwiU3RhcnROb3RGb3VuZEV4Y2VwdGlvbiIsIkNvZGVOb3RGb3VuZEV4Y2VwdGlvbiIsIlBhdHRlcm5Ob3RGb3VuZEV4Y2VwdGlvbiIsImlzV2hpdGUiLCJ0cnlIYXJkZXIiLCJlcHNpbG9uIiwiY291bnRlclBvcyIsIm1heFNpbmdsZUVycm9yIiwibW9kdWxvIiwiU0lOR0xFX0NPREVfRVJST1IiLCJiYXJXaWR0aCIsInNjYWxlZCIsInNpbmdsZUVycm9yIiwiY29ycmVjdGlvbiIsImluZGljZXMiLCJkZWNvZGUiLCJSZXZlcnNlIiwiRm9yd2FyZCIsIm51bUNvdW50ZXJzIiwiQUxQSEFCRVRIX1NUUklORyIsIkFMUEhBQkVUIiwiQ0hBUkFDVEVSX0VOQ09ESU5HUyIsIlNUQVJUX0VORCIsIk1JTl9FTkNPREVEX0NIQVJTIiwiTUFYX0FDQ0VQVEFCTEUiLCJQQURESU5HIiwiQ29kYWJhclJlYWRlciIsIl9jb3VudGVycyIsIl9uZXh0VW5zZXQiLCJuZXh0U3RhcnQiLCJzdGFydENvdW50ZXIiLCJfdG9QYXR0ZXJuIiwiZGVjb2RlZENoYXIiLCJfcGF0dGVyblRvQ2hhciIsIl92ZXJpZnlXaGl0ZXNwYWNlIiwiX3ZhbGlkYXRlUmVzdWx0IiwiX3N1bUNvdW50ZXJzIiwiZW5kQ291bnRlciIsIl9jYWxjdWxhdGVQYXR0ZXJuTGVuZ3RoIiwiY2F0ZWdvcml6YXRpb24iLCJzcGFjZSIsIm5hcnJvdyIsImNvdW50cyIsIndpZGUiLCJiYXIiLCJfY2hhclRvUGF0dGVybiIsImNhdCIsImZsb29yIiwiY2hhckNvZGUiLCJfdGhyZXNob2xkUmVzdWx0UGF0dGVybiIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsImJhclRocmVzaG9sZCIsIl9jb21wdXRlQWx0ZXJuYXRpbmdUaHJlc2hvbGQiLCJzcGFjZVRocmVzaG9sZCIsImJpdG1hc2siLCJDT0RFX1NISUZUIiwiQ09ERV9DIiwiQ09ERV9CIiwiQ09ERV9BIiwiU1RBUlRfQ09ERV9BIiwiU1RBUlRfQ09ERV9CIiwiU1RBUlRfQ09ERV9DIiwiU1RPUF9DT0RFIiwiTU9EVUxFX0lORElDRVMiLCJDb2RlMTI4UmVhZGVyIiwiX2NvcnJlY3QiLCJleHBlY3RlZCIsIl9jYWxjdWxhdGVDb3JyZWN0aW9uIiwiX2NvcnJlY3RCYXJzIiwibXVsdGlwbGllciIsImNoZWNrc3VtIiwiY29kZXNldCIsInJhd1Jlc3VsdCIsInNoaWZ0TmV4dCIsInJlbW92ZUxhc3RDaGFyYWN0ZXIiLCJub3JtYWxpemVkIiwic3VtTm9ybWFsaXplZCIsInN1bUV4cGVjdGVkIiwiQVNURVJJU0siLCJVaW50MTZBcnJheSIsIkNvZGUzOVJlYWRlciIsImxhc3RTdGFydCIsIl90b0NvdW50ZXJzIiwicG9wIiwicGF0dGVyblNpemUiLCJtaW5XaWR0aCIsIm1heE5hcnJvd1dpZHRoIiwibnVtV2lkZUJhcnMiLCJ3aWRlQmFyV2lkdGgiLCJfZmluZE5leHRXaWR0aCIsInBhdHRlcm5TdGFydCIsIndoaXRlU3BhY2VNdXN0U3RhcnQiLCJDb2RlMzlWSU5SZWFkZXIiLCJyZXBsYWNlIiwiX2NoZWNrQ2hlY2tzdW0iLCJDb2RlOTNSZWFkZXIiLCJfdmVyaWZ5RW5kIiwiX3ZlcmlmeUNoZWNrc3VtcyIsIl9kZWNvZGVFeHRlbmRlZCIsInJvdW5kIiwiY2hhckFycmF5IiwibmV4dENoYXIiLCJuZXh0Q2hhckNvZGUiLCJfbWF0Y2hDaGVja0NoYXIiLCJtYXhXZWlnaHQiLCJhcnJheVRvQ2hlY2siLCJ3ZWlnaHRlZFN1bXMiLCJ3ZWlnaHQiLCJjaGVja0NoYXIiLCJFQU4yUmVhZGVyIiwicm93IiwiY29kZUZyZXF1ZW5jeSIsIkNPREVfR19TVEFSVCIsInBhcnNlSW50IiwiRUFOUmVhZGVyIiwiRUFONVJlYWRlciIsIl9leHRlbnNpb25DaGVja3N1bSIsIl9kZXRlcm1pbmVDaGVja0RpZ2l0IiwiQ0hFQ0tfRElHSVRfRU5DT0RJTkdTIiwiRUFOOFJlYWRlciIsIk1JRERMRV9QQVRURVJOIiwiRVhURU5TSU9OX1NUQVJUX1BBVFRFUk4iLCJDT0RFX0ZSRVFVRU5DWSIsImNvZGVyYW5nZSIsImZpcnN0RGlnaXQiLCJfY2FsY3VsYXRlRmlyc3REaWdpdCIsInJlc3VsdEluZm8iLCJfY2hlY2tzdW0iLCJfZGVjb2RlRXh0ZW5zaW9ucyIsImxhc3RDb2RlIiwiTUFYX0NPUlJFQ1RJT05fRkFDVE9SIiwiSTJvZjVSZWFkZXIiLCJub3JtYWxpemVCYXJTcGFjZVdpZHRoIiwiY291bnRlclN1bSIsImNvZGVTdW0iLCJjb3JyZWN0aW9uUmF0aW8iLCJjb3JyZWN0aW9uUmF0aW9JbnZlcnNlIiwiY291bnRlcjAiLCJjb3VudGVyMSIsImNvZGUwIiwiY29kZTEiLCJjb2RlXzEyOF9yZWFkZXIiLCJlYW5fcmVhZGVyIiwiZWFuXzVfcmVhZGVyIiwiZWFuXzJfcmVhZGVyIiwiZWFuXzhfcmVhZGVyIiwiY29kZV8zOV9yZWFkZXIiLCJjb2RlXzM5X3Zpbl9yZWFkZXIiLCJjb2RhYmFyX3JlYWRlciIsInVwY19yZWFkZXIiLCJVUENSZWFkZXIiLCJ1cGNfZV9yZWFkZXIiLCJVUENFUmVhZGVyIiwiaTJvZjVfcmVhZGVyIiwiY29kZV85M19yZWFkZXIiLCJfZGV0ZXJtaW5lUGFyaXR5IiwibnJTeXN0ZW0iLCJsYXN0RGlnaXQiLCJ1cGNhIiwiX2NvbnZlcnRUb1VQQ0EiLCJjaGFyQXQiLCJzdWJzdHJpbmciXSwibWFwcGluZ3MiOiI7O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsVztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQSxpREFBaUQsZ0JBQWdCO0FBQ2pFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG9DOzs7Ozs7Ozs7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2QsS0FBSztBQUNMLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBLHdDQUF3QyxXQUFXO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxjQUFjO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFF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LE1BQU0sR0FBRywrTEFBZjs7QUFFQSxVQUFJQSxNQUFNLElBQUlBLE1BQU0sQ0FBQ2l2QixJQUFqQixJQUF5Qmp2QixNQUFNLENBQUNpdkIsSUFBUCxDQUFZNXNCLE1BQVosS0FBdUIsRUFBaEQsSUFBc0RyQyxNQUFNLENBQUNpdkIsSUFBUCxDQUFZb0wsTUFBWixDQUFtQixDQUFuQixNQUEwQixHQUFwRixFQUF5RjtBQUNyRnI2QixjQUFNLENBQUNpdkIsSUFBUCxHQUFjanZCLE1BQU0sQ0FBQ2l2QixJQUFQLENBQVlxTCxTQUFaLENBQXNCLENBQXRCLENBQWQ7QUFDQSxlQUFPdDZCLE1BQVA7QUFDSDs7QUFFRCxhQUFPLElBQVA7QUFDSDtBQWhCTDs7QUFBQTtBQUFBLEVBQStCdTNCLHFEQUEvQixFIiwiZmlsZSI6InF1YWdnYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcbiAgICBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShmYWN0b3J5LnRvU3RyaW5nKCkpLmRlZmF1bHQ7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXhwb3J0c1tcIlF1YWdnYVwiXSA9IGZhY3RvcnkoZmFjdG9yeS50b1N0cmluZygpKS5kZWZhdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJvb3RbXCJRdWFnZ2FcIl0gPSBmYWN0b3J5KGZhY3RvcnkudG9TdHJpbmcoKSkuZGVmYXVsdDtcbiAgICB9XG59KSh0aGlzLCBmdW5jdGlvbihfX2ZhY3RvcnlTb3VyY2VfXykge1xuICAgIHJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcXVhZ2dhLnRzXCIpO1xuIiwiZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFycjJbaV0gPSBhcnJbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycjI7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRob3V0SG9sZXM7IiwiZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkOyIsImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpbmZvLmRvbmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcblxuICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuXG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3luY1RvR2VuZXJhdG9yOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3M7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5OyIsInZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL2dldFByb3RvdHlwZU9mXCIpO1xuXG52YXIgc3VwZXJQcm9wQmFzZSA9IHJlcXVpcmUoXCIuL3N1cGVyUHJvcEJhc2VcIik7XG5cbmZ1bmN0aW9uIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ICE9PSBcInVuZGVmaW5lZFwiICYmIFJlZmxlY3QuZ2V0KSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0ID0gUmVmbGVjdC5nZXQ7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0ID0gZnVuY3Rpb24gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICAgICAgdmFyIGJhc2UgPSBzdXBlclByb3BCYXNlKHRhcmdldCwgcHJvcGVydHkpO1xuICAgICAgaWYgKCFiYXNlKSByZXR1cm47XG4gICAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYmFzZSwgcHJvcGVydHkpO1xuXG4gICAgICBpZiAoZGVzYy5nZXQpIHtcbiAgICAgICAgcmV0dXJuIGRlc2MuZ2V0LmNhbGwocmVjZWl2ZXIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGVzYy52YWx1ZTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIgfHwgdGFyZ2V0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0OyIsImZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9O1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZjsiLCJ2YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9zZXRQcm90b3R5cGVPZlwiKTtcblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbmhlcml0czsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGl0ZXIpID09PSBcIltvYmplY3QgQXJndW1lbnRzXVwiKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5OyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVNwcmVhZDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxudmFyIGFzc2VydFRoaXNJbml0aWFsaXplZCA9IHJlcXVpcmUoXCIuL2Fzc2VydFRoaXNJbml0aWFsaXplZFwiKTtcblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9XG5cbiAgcmV0dXJuIGFzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjsiLCJmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcblxuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZjsiLCJ2YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9nZXRQcm90b3R5cGVPZlwiKTtcblxuZnVuY3Rpb24gX3N1cGVyUHJvcEJhc2Uob2JqZWN0LCBwcm9wZXJ0eSkge1xuICB3aGlsZSAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KSkge1xuICAgIG9iamVjdCA9IGdldFByb3RvdHlwZU9mKG9iamVjdCk7XG4gICAgaWYgKG9iamVjdCA9PT0gbnVsbCkgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gb2JqZWN0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zdXBlclByb3BCYXNlOyIsInZhciBhcnJheVdpdGhvdXRIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aG91dEhvbGVzXCIpO1xuXG52YXIgaXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5XCIpO1xuXG52YXIgbm9uSXRlcmFibGVTcHJlYWQgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVNwcmVhZFwiKTtcblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90b0NvbnN1bWFibGVBcnJheTsiLCJmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YyID0gZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mMiA9IGZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZjIob2JqKTsgfVxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIF90eXBlb2YyKFN5bWJvbC5pdGVyYXRvcikgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIF90eXBlb2YyKG9iaik7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IF90eXBlb2YyKG9iaik7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4vLyBUaGlzIG1ldGhvZCBvZiBvYnRhaW5pbmcgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QgbmVlZHMgdG8gYmVcbi8vIGtlcHQgaWRlbnRpY2FsIHRvIHRoZSB3YXkgaXQgaXMgb2J0YWluZWQgaW4gcnVudGltZS5qc1xudmFyIGcgPSAoZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzIHx8ICh0eXBlb2Ygc2VsZiA9PT0gXCJvYmplY3RcIiAmJiBzZWxmKTtcbn0pKCkgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xuXG4vLyBVc2UgYGdldE93blByb3BlcnR5TmFtZXNgIGJlY2F1c2Ugbm90IGFsbCBicm93c2VycyBzdXBwb3J0IGNhbGxpbmdcbi8vIGBoYXNPd25Qcm9wZXJ0eWAgb24gdGhlIGdsb2JhbCBgc2VsZmAgb2JqZWN0IGluIGEgd29ya2VyLiBTZWUgIzE4My5cbnZhciBoYWRSdW50aW1lID0gZy5yZWdlbmVyYXRvclJ1bnRpbWUgJiZcbiAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZykuaW5kZXhPZihcInJlZ2VuZXJhdG9yUnVudGltZVwiKSA+PSAwO1xuXG4vLyBTYXZlIHRoZSBvbGQgcmVnZW5lcmF0b3JSdW50aW1lIGluIGNhc2UgaXQgbmVlZHMgdG8gYmUgcmVzdG9yZWQgbGF0ZXIuXG52YXIgb2xkUnVudGltZSA9IGhhZFJ1bnRpbWUgJiYgZy5yZWdlbmVyYXRvclJ1bnRpbWU7XG5cbi8vIEZvcmNlIHJlZXZhbHV0YXRpb24gb2YgcnVudGltZS5qcy5cbmcucmVnZW5lcmF0b3JSdW50aW1lID0gdW5kZWZpbmVkO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL3J1bnRpbWVcIik7XG5cbmlmIChoYWRSdW50aW1lKSB7XG4gIC8vIFJlc3RvcmUgdGhlIG9yaWdpbmFsIHJ1bnRpbWUuXG4gIGcucmVnZW5lcmF0b3JSdW50aW1lID0gb2xkUnVudGltZTtcbn0gZWxzZSB7XG4gIC8vIFJlbW92ZSB0aGUgZ2xvYmFsIHByb3BlcnR5IGFkZGVkIGJ5IHJ1bnRpbWUuanMuXG4gIHRyeSB7XG4gICAgZGVsZXRlIGcucmVnZW5lcmF0b3JSdW50aW1lO1xuICB9IGNhdGNoKGUpIHtcbiAgICBnLnJlZ2VuZXJhdG9yUnVudGltZSA9IHVuZGVmaW5lZDtcbiAgfVxufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4hKGZ1bmN0aW9uKGdsb2JhbCkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIHZhciBpbk1vZHVsZSA9IHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCI7XG4gIHZhciBydW50aW1lID0gZ2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZTtcbiAgaWYgKHJ1bnRpbWUpIHtcbiAgICBpZiAoaW5Nb2R1bGUpIHtcbiAgICAgIC8vIElmIHJlZ2VuZXJhdG9yUnVudGltZSBpcyBkZWZpbmVkIGdsb2JhbGx5IGFuZCB3ZSdyZSBpbiBhIG1vZHVsZSxcbiAgICAgIC8vIG1ha2UgdGhlIGV4cG9ydHMgb2JqZWN0IGlkZW50aWNhbCB0byByZWdlbmVyYXRvclJ1bnRpbWUuXG4gICAgICBtb2R1bGUuZXhwb3J0cyA9IHJ1bnRpbWU7XG4gICAgfVxuICAgIC8vIERvbid0IGJvdGhlciBldmFsdWF0aW5nIHRoZSByZXN0IG9mIHRoaXMgZmlsZSBpZiB0aGUgcnVudGltZSB3YXNcbiAgICAvLyBhbHJlYWR5IGRlZmluZWQgZ2xvYmFsbHkuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRGVmaW5lIHRoZSBydW50aW1lIGdsb2JhbGx5IChhcyBleHBlY3RlZCBieSBnZW5lcmF0ZWQgY29kZSkgYXMgZWl0aGVyXG4gIC8vIG1vZHVsZS5leHBvcnRzIChpZiB3ZSdyZSBpbiBhIG1vZHVsZSkgb3IgYSBuZXcsIGVtcHR5IG9iamVjdC5cbiAgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWUgPSBpbk1vZHVsZSA/IG1vZHVsZS5leHBvcnRzIDoge307XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgcnVudGltZS53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGVbdG9TdHJpbmdUYWdTeW1ib2xdID1cbiAgICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBwcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBydW50aW1lLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGlmICghKHRvU3RyaW5nVGFnU3ltYm9sIGluIGdlbkZ1bikpIHtcbiAgICAgICAgZ2VuRnVuW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcbiAgICAgIH1cbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgcnVudGltZS5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIHJ1bnRpbWUuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIHJ1bnRpbWUuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KVxuICAgICk7XG5cbiAgICByZXR1cm4gcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yLnJldHVybikge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIEdwW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yXCI7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgcnVudGltZS5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIHJ1bnRpbWUudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG59KShcbiAgLy8gSW4gc2xvcHB5IG1vZGUsIHVuYm91bmQgYHRoaXNgIHJlZmVycyB0byB0aGUgZ2xvYmFsIG9iamVjdCwgZmFsbGJhY2sgdG9cbiAgLy8gRnVuY3Rpb24gY29uc3RydWN0b3IgaWYgd2UncmUgaW4gZ2xvYmFsIHN0cmljdCBtb2RlLiBUaGF0IGlzIHNhZGx5IGEgZm9ybVxuICAvLyBvZiBpbmRpcmVjdCBldmFsIHdoaWNoIHZpb2xhdGVzIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5LlxuICAoZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMgfHwgKHR5cGVvZiBzZWxmID09PSBcIm9iamVjdFwiICYmIHNlbGYpO1xuICB9KSgpIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKVxuKTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsImltcG9ydCB7IEltYWdlRGVidWcgfSBmcm9tICcuLi9jb21tb24vaW1hZ2UtZGVidWcnO1xuaW1wb3J0IHsgUXVhZ2dhQmFyY29kZSB9IGZyb20gJy4uL2RlY29kZXIvYmFyY29kZS1kZWNvZGVyJztcbmltcG9ydCB7IEJhcmNvZGUgfSBmcm9tICcuLi9yZWFkZXIvYmFyY29kZS1yZWFkZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJlc3VsdENvbGxlY3RvckNvbmZpZyB7XG4gICAgY2FwYWNpdHk/OiBudW1iZXI7XG4gICAgY2FwdHVyZT86IGJvb2xlYW47XG4gICAgYmxhY2tsaXN0PzogQXJyYXk8QmFyY29kZT47XG4gICAgZmlsdGVyPzogKGl0ZW06IEJhcmNvZGUpID0+IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjbGFzcyBSZXN1bHRDb2xsZWN0b3Ige1xuICAgIHByaXZhdGUgX2NhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG4gICAgcHJpdmF0ZSBfY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuICAgIHByaXZhdGUgX2NvbmZpZzogUmVzdWx0Q29sbGVjdG9yQ29uZmlnO1xuICAgIHByaXZhdGUgX2NhcGFjaXR5OiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfY2FwdHVyZTogYm9vbGVhbjtcbiAgICBwcml2YXRlIF9yZXN1bHRzOiBBcnJheTxRdWFnZ2FCYXJjb2RlPjtcblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogUmVzdWx0Q29sbGVjdG9yQ29uZmlnKSB7XG4gICAgICAgIHRoaXMuX3Jlc3VsdHMgPSBuZXcgQXJyYXk8UXVhZ2dhQmFyY29kZT4oKTtcbiAgICAgICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuICAgICAgICB0aGlzLl9jYXBhY2l0eSA9IGNvbmZpZy5jYXBhY2l0eSB8fCAyMDtcbiAgICAgICAgdGhpcy5fY2FwdHVyZSA9IGNvbmZpZy5jYXB0dXJlID09PSB0cnVlO1xuXG4gICAgICAgIGlmICh0aGlzLl9jYXB0dXJlKSB7XG4gICAgICAgICAgICB0aGlzLl9jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgICAgIHRoaXMuX2NvbnRleHQgPSB0aGlzLl9jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZFJlc3VsdChkYXRhOiBVaW50OEFycmF5LCBpbWFnZVdpZHRoOiBudW1iZXIsIGltYWdlSGVpZ2h0OiBudW1iZXIsIGNvZGVSZXN1bHQ6IEJhcmNvZGUpOiB2b2lkIHtcbiAgICAgICAgaWYgKGNvZGVSZXN1bHQgJiYgdGhpcy5fY2FwYWNpdHkgJiYgIXRoaXMuX2NvbnRhaW5zKGNvZGVSZXN1bHQpICYmIHRoaXMuX3Bhc3Nlc0ZpbHRlcihjb2RlUmVzdWx0KSkge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0OiBRdWFnZ2FCYXJjb2RlID0geyBjb2RlUmVzdWx0IH07XG5cbiAgICAgICAgICAgIHRoaXMuX2NhcGFjaXR5LS07XG5cbiAgICAgICAgICAgIGlmICh0aGlzLl9jYXB0dXJlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2FudmFzLndpZHRoID0gaW1hZ2VXaWR0aDtcbiAgICAgICAgICAgICAgICB0aGlzLl9jYW52YXMuaGVpZ2h0ID0gaW1hZ2VIZWlnaHQ7XG5cbiAgICAgICAgICAgICAgICBJbWFnZURlYnVnLmRyYXdJbWFnZShkYXRhLCBpbWFnZVdpZHRoLCBpbWFnZUhlaWdodCwgdGhpcy5fY29udGV4dCk7XG5cbiAgICAgICAgICAgICAgICByZXN1bHQuZnJhbWUgPSB0aGlzLl9jYW52YXMudG9EYXRhVVJMKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX3Jlc3VsdHMucHVzaChyZXN1bHQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0UmVzdWx0cygpOiBBcnJheTxRdWFnZ2FCYXJjb2RlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZXN1bHRzO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2NvbnRhaW5zKGNvZGVSZXN1bHQ6IEJhcmNvZGUpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbmZpZy5ibGFja2xpc3QgJiZcbiAgICAgICAgICAgIHRoaXMuX2NvbmZpZy5ibGFja2xpc3Quc29tZShpdGVtID0+IE9iamVjdC5rZXlzKGl0ZW0pLmV2ZXJ5KGtleSA9PiBpdGVtW2tleV0gPT09IGNvZGVSZXN1bHRba2V5XSkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3Bhc3Nlc0ZpbHRlcihjb2RlUmVzdWx0OiBCYXJjb2RlKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgdGhpcy5fY29uZmlnLmZpbHRlciAhPT0gJ2Z1bmN0aW9uJyB8fCB0aGlzLl9jb25maWcuZmlsdGVyKGNvZGVSZXN1bHQpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IE1vbWVudCB9IGZyb20gJy4vbW9tZW50JztcblxuXG4vKipcbiAqIENyZWF0ZXMgYSBjbHVzdGVyIGZvciBncm91cGluZyBzaW1pbGFyIG9yaWVudGF0aW9ucyBvZiBtb21lbnRzXG4gKi9cbmV4cG9ydCBjbGFzcyBDbHVzdGVyIHtcbiAgICBwcml2YXRlIF90aHJlc2hvbGQ6IG51bWJlcjtcbiAgICBwcml2YXRlIF9tb21lbnRzOiBBcnJheTxNb21lbnQ+O1xuICAgIHByaXZhdGUgX2NlbnRlcjogTW9tZW50O1xuXG4gICAgc3RhdGljIGNsdXN0ZXJpemUobW9tZW50czogQXJyYXk8TW9tZW50PiwgdGhyZXNob2xkOiBudW1iZXIpOiBBcnJheTxDbHVzdGVyPiB7XG4gICAgICAgIGNvbnN0IGNsdXN0ZXJzID0gbmV3IEFycmF5PENsdXN0ZXI+KCk7XG5cbiAgICAgICAgbW9tZW50cy5mb3JFYWNoKG1vbWVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBtYXRjaGluZ0NsdXN0ZXIgPSBjbHVzdGVycy5maW5kKGNsdXN0ZXIgPT4gY2x1c3Rlci5maXRzKG1vbWVudCkpO1xuXG4gICAgICAgICAgICBpZiAobWF0Y2hpbmdDbHVzdGVyKSB7XG4gICAgICAgICAgICAgICAgbWF0Y2hpbmdDbHVzdGVyLmFkZChtb21lbnQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjbHVzdGVycy5wdXNoKG5ldyBDbHVzdGVyKHRocmVzaG9sZCwgbW9tZW50KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBjbHVzdGVycztcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcih0aHJlc2hvbGQ6IG51bWJlciwgbW9tZW50OiBNb21lbnQpIHtcbiAgICAgICAgdGhpcy5fdGhyZXNob2xkID0gdGhyZXNob2xkO1xuICAgICAgICB0aGlzLl9tb21lbnRzID0gbmV3IEFycmF5PE1vbWVudD4oKTtcbiAgICAgICAgdGhpcy5fY2VudGVyID0ge1xuICAgICAgICAgICAgcmFkOiAwLFxuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IDBcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAobW9tZW50KSB7XG4gICAgICAgICAgICB0aGlzLmFkZChtb21lbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkKHBvaW50OiBNb21lbnQpIHtcbiAgICAgICAgdGhpcy5fbW9tZW50cy5wdXNoKHBvaW50KTtcblxuICAgICAgICAvLyBVcGRhdGUgY2VudGVyXG4gICAgICAgIHRoaXMuX2NlbnRlci5yYWQgPSB0aGlzLl9tb21lbnRzLnJlZHVjZSgoc3VtLCBwKSA9PiBzdW0gKyBwLnJhZCwgMCkgLyB0aGlzLl9tb21lbnRzLmxlbmd0aDtcbiAgICAgICAgdGhpcy5fY2VudGVyLnggPSBNYXRoLmNvcyh0aGlzLl9jZW50ZXIucmFkKTtcbiAgICAgICAgdGhpcy5fY2VudGVyLnkgPSBNYXRoLnNpbih0aGlzLl9jZW50ZXIucmFkKTtcbiAgICB9XG5cbiAgICBmaXRzKG1vbWVudDogTW9tZW50KTogYm9vbGVhbiB7XG4gICAgICAgIC8vIGNoZWNrIGNvc2luZSBzaW1pbGFyaXR5IHRvIGNlbnRlci1hbmdsZVxuICAgICAgICBjb25zdCBzaW1pbGFyaXR5ID0gTWF0aC5hYnMobW9tZW50LnggKiB0aGlzLl9jZW50ZXIueCArIG1vbWVudC55ICogdGhpcy5fY2VudGVyLnkpO1xuICAgICAgICByZXR1cm4gc2ltaWxhcml0eSA+IHRoaXMuX3RocmVzaG9sZDtcbiAgICB9XG5cbiAgICBnZXQgbW9tZW50cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21vbWVudHM7XG4gICAgfVxufVxuIiwiZXhwb3J0IGludGVyZmFjZSBFdmVudENhbGxiYWNrIHtcbiAgICAoZGF0YTogYW55KTogdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFdmVudFN1YnNjcmlwdGlvbiB7XG4gICAgY2FsbGJhY2s6IEV2ZW50Q2FsbGJhY2s7XG4gICAgYXN5bmM/OiBib29sZWFuO1xuICAgIG9uY2U/OiBib29sZWFuO1xufVxuXG5pbnRlcmZhY2UgRXZlbnRJdGVtIHtcbiAgICBzdWJzY3JpcHRpb25zOiBBcnJheTxFdmVudFN1YnNjcmlwdGlvbj5cbn1cblxubGV0IGV2ZW50czogeyBbbmFtZTogc3RyaW5nXTogRXZlbnRJdGVtIH0gPSB7fTtcblxuZXhwb3J0IGNsYXNzIEV2ZW50cyB7XG4gICAgc3RhdGljIHN1YnNjcmliZShldmVudDogc3RyaW5nLCBjYWxsYmFjazogRXZlbnRTdWJzY3JpcHRpb24gfCBFdmVudENhbGxiYWNrLCBhc3luYz86IGJvb2xlYW4pIHtcbiAgICAgICAgbGV0IHN1YnNjcmlwdGlvbjogRXZlbnRTdWJzY3JpcHRpb247XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgc3Vic2NyaXB0aW9uID0ge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrLFxuICAgICAgICAgICAgICAgIGFzeW5jXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3Vic2NyaXB0aW9uID0gY2FsbGJhY2s7XG4gICAgICAgICAgICBpZiAoIXN1YnNjcmlwdGlvbi5jYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIHRocm93ICdDYWxsYmFjayB3YXMgbm90IHNwZWNpZmllZCBvbiBvcHRpb25zJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGdldEV2ZW50KGV2ZW50KS5zdWJzY3JpcHRpb25zLnB1c2goc3Vic2NyaXB0aW9uKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcHVibGlzaCh0eXBlOiBzdHJpbmcsIGRhdGE/OiBhbnkpIHtcbiAgICAgICAgY29uc3QgZXZlbnRJdGVtID0gZ2V0RXZlbnQodHlwZSk7XG4gICAgICAgIGNvbnN0IHN1YnNjcmlwdGlvbnMgPSBldmVudEl0ZW0uc3Vic2NyaXB0aW9ucztcblxuICAgICAgICAvLyBQdWJsaXNoIG9uZS10aW1lIHN1YnNjcmlwdGlvbnNcbiAgICAgICAgc3Vic2NyaXB0aW9ucy5maWx0ZXIoKHsgb25jZSB9KSA9PiAhIW9uY2UpLmZvckVhY2goc3Vic2NyaXB0aW9uID0+IHB1Ymxpc2hTdWJzY3JpcHRpb24oc3Vic2NyaXB0aW9uLCBkYXRhKSk7XG5cbiAgICAgICAgLy8gcmVtb3ZlIHRoZW0gZnJvbSB0aGUgc3Vic2NyaXB0aW9uXG4gICAgICAgIGV2ZW50SXRlbS5zdWJzY3JpcHRpb25zID0gc3Vic2NyaXB0aW9ucy5maWx0ZXIoKHsgb25jZSB9KSA9PiAhb25jZSk7XG5cbiAgICAgICAgLy8gcHVibGlzaCB0aGUgcmVzdFxuICAgICAgICBldmVudEl0ZW0uc3Vic2NyaXB0aW9ucy5mb3JFYWNoKHN1YnNjcmlwdGlvbiA9PiBwdWJsaXNoU3Vic2NyaXB0aW9uKHN1YnNjcmlwdGlvbiwgZGF0YSkpO1xuICAgIH1cblxuICAgIHN0YXRpYyBvbmNlKGV2ZW50OiBzdHJpbmcsIGNhbGxiYWNrOiBFdmVudENhbGxiYWNrLCBhc3luYz86IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgRXZlbnRzLnN1YnNjcmliZShldmVudCwgeyBjYWxsYmFjaywgYXN5bmMsIG9uY2U6IHRydWUgfSk7XG4gICAgfVxuXG4gICAgc3RhdGljIHVuc3Vic2NyaWJlKGV2ZW50TmFtZT86IHN0cmluZywgY2FsbGJhY2s/OiBFdmVudENhbGxiYWNrKSB7XG4gICAgICAgIGlmIChldmVudE5hbWUpIHtcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0gZ2V0RXZlbnQoZXZlbnROYW1lKTtcbiAgICAgICAgICAgIGlmIChldmVudCAmJiBjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIGV2ZW50LnN1YnNjcmlwdGlvbnMgPSBldmVudC5zdWJzY3JpcHRpb25zLmZpbHRlcihzdWJzY3JpcHRpb24gPT4gc3Vic2NyaXB0aW9uLmNhbGxiYWNrICE9PSBjYWxsYmFjayk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGV2ZW50LnN1YnNjcmlwdGlvbnMgPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGV2ZW50cyA9IHt9O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXRFdmVudChldmVudE5hbWU6IHN0cmluZyk6IEV2ZW50SXRlbSB7XG4gICAgaWYgKCFldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgICBldmVudHNbZXZlbnROYW1lXSA9IHtcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbnM6IFtdXG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBldmVudHNbZXZlbnROYW1lXTtcbn1cblxuZnVuY3Rpb24gcHVibGlzaFN1YnNjcmlwdGlvbihzdWJzY3JpcHRpb246IEV2ZW50U3Vic2NyaXB0aW9uLCBkYXRhOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAoc3Vic2NyaXB0aW9uLmFzeW5jKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc3Vic2NyaXB0aW9uLmNhbGxiYWNrKGRhdGEpO1xuICAgICAgICB9LCA0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBzdWJzY3JpcHRpb24uY2FsbGJhY2soZGF0YSk7XG4gICAgfVxufVxuIiwiZXhwb3J0IHR5cGUgSFNWID0gW251bWJlciwgbnVtYmVyLCBudW1iZXJdO1xuXG5leHBvcnQgdHlwZSBSR0IgPSBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl07XG5cbmV4cG9ydCBmdW5jdGlvbiBoc3YycmdiKGhzdjogSFNWLCByZ2I/OiBSR0IpOiBSR0Ige1xuICAgIGNvbnN0IGggPSBoc3ZbMF07XG4gICAgY29uc3QgcyA9IGhzdlsxXTtcbiAgICBjb25zdCB2ID0gaHN2WzJdO1xuICAgIGNvbnN0IGMgPSB2ICogcztcbiAgICBjb25zdCB4ID0gYyAqICgxIC0gTWF0aC5hYnMoKGggLyA2MCkgJSAyIC0gMSkpO1xuICAgIGNvbnN0IG0gPSB2IC0gYztcbiAgICBsZXQgciA9IDA7XG4gICAgbGV0IGcgPSAwO1xuICAgIGxldCBiID0gMDtcblxuICAgIGlmIChoIDwgNjApIHtcbiAgICAgICAgciA9IGM7XG4gICAgICAgIGcgPSB4O1xuICAgIH0gZWxzZSBpZiAoaCA8IDEyMCkge1xuICAgICAgICByID0geDtcbiAgICAgICAgZyA9IGM7XG4gICAgfSBlbHNlIGlmIChoIDwgMTgwKSB7XG4gICAgICAgIGcgPSBjO1xuICAgICAgICBiID0geDtcbiAgICB9IGVsc2UgaWYgKGggPCAyNDApIHtcbiAgICAgICAgZyA9IHg7XG4gICAgICAgIGIgPSBjO1xuICAgIH0gZWxzZSBpZiAoaCA8IDMwMCkge1xuICAgICAgICByID0geDtcbiAgICAgICAgYiA9IGM7XG4gICAgfSBlbHNlIGlmIChoIDwgMzYwKSB7XG4gICAgICAgIHIgPSBjO1xuICAgICAgICBiID0geDtcbiAgICB9XG5cbiAgICByZ2IgPSByZ2IgfHwgWzAsIDAsIDBdO1xuXG4gICAgcmdiWzBdID0gKHIgKyBtKSAqIDI1NSB8IDA7XG4gICAgcmdiWzFdID0gKGcgKyBtKSAqIDI1NSB8IDA7XG4gICAgcmdiWzJdID0gKGIgKyBtKSAqIDI1NSB8IDA7XG5cbiAgICByZXR1cm4gcmdiO1xufVxuIiwiaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuL3BvaW50JztcblxuZXhwb3J0IGNvbnN0IEltYWdlRGVidWcgPSB7XG4gICAgZHJhd1BhdGgocGF0aDogQXJyYXk8UG9pbnQ+LCBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIGNvbG9yOiBzdHJpbmcsIGxpbmVXaWR0aDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmIChwYXRoICYmIHBhdGgubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9IGNvbG9yO1xuICAgICAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICAgICAgICAgIGNvbnRleHQubGluZVdpZHRoID0gbGluZVdpZHRoO1xuICAgICAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGNvbnRleHQubW92ZVRvKHBhdGhbMF0ueCwgcGF0aFswXS55KTtcbiAgICAgICAgICAgIHBhdGguc2xpY2UoMSkuZm9yRWFjaCgoeyB4LCB5IH0pID0+IGNvbnRleHQubGluZVRvKHgsIHkpKTtcbiAgICAgICAgICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICBjb250ZXh0LnN0cm9rZSgpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGRyYXdJbWFnZShpbWFnZURhdGE6IFVpbnQ4QXJyYXksIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgY2FudmFzRGF0YSA9IGNvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICBjb25zdCBkYXRhID0gY2FudmFzRGF0YS5kYXRhO1xuICAgICAgICBsZXQgaW1hZ2VJbmRleCA9IGltYWdlRGF0YS5sZW5ndGggfCAwO1xuICAgICAgICBsZXQgY2FudmFzSW5kZXggPSBkYXRhLmxlbmd0aCB8IDA7XG5cbiAgICAgICAgaWYgKGNhbnZhc0luZGV4IC8gaW1hZ2VJbmRleCAhPT0gNCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgd2hpbGUgKGltYWdlSW5kZXgtLSkge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBpbWFnZURhdGFbaW1hZ2VJbmRleF07XG4gICAgICAgICAgICBkYXRhWy0tY2FudmFzSW5kZXhdID0gMjU1O1xuICAgICAgICAgICAgZGF0YVstLWNhbnZhc0luZGV4XSA9IHZhbHVlO1xuICAgICAgICAgICAgZGF0YVstLWNhbnZhc0luZGV4XSA9IHZhbHVlO1xuICAgICAgICAgICAgZGF0YVstLWNhbnZhc0luZGV4XSA9IHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5wdXRJbWFnZURhdGEoY2FudmFzRGF0YSwgMCwgMCk7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTW9tZW50IH0gZnJvbSAnLi9tb21lbnQnO1xuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuL3BvaW50JztcbmltcG9ydCB7IEhTViwgaHN2MnJnYiwgUkdCIH0gZnJvbSAnLi9oc3YycmdiJztcblxudHlwZSBBcnJheVR5cGUgPSBBcnJheTxudW1iZXI+IHwgVWludDhBcnJheSB8IEludDMyQXJyYXk7XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIGJhc2ljIGltYWdlIGNvbWJpbmluZyB0aGUgZGF0YSBhbmQgc2l6ZS5cbiAqIEluIGFkZGl0aW9uLCBzb21lIG1ldGhvZHMgZm9yIG1hbmlwdWxhdGlvbiBhcmUgY29udGFpbmVkLlxuICovXG5leHBvcnQgY2xhc3MgSW1hZ2VXcmFwcGVyPFQgZXh0ZW5kcyBBcnJheVR5cGUgPSBVaW50OEFycmF5PiB7XG4gICAgZGF0YTogVCB8IFVpbnQ4QXJyYXk7XG4gICAgc2l6ZTogUG9pbnQ7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2l6ZSBUaGUgc2l6ZSBvZiB0aGUgaW1hZ2UgaW4gcGl4ZWxcbiAgICAgKiBAcGFyYW0gZGF0YSBJZiBnaXZlbiwgYSBmbGF0IGFycmF5IGNvbnRhaW5pbmcgdGhlIHBpeGVsIGRhdGFcbiAgICAgKiBAcGFyYW0gYXJyYXlUeXBlIElmIGdpdmVuLCB0aGUgZGVzaXJlZCBEYXRhVHlwZSBvZiB0aGUgQXJyYXkgKG1heSBiZSB0eXBlZC9ub24tdHlwZWQpXG4gICAgICogQHBhcmFtIGluaXRpYWxpemUgSW5kaWNhdGluZyBpZiB0aGUgYXJyYXkgc2hvdWxkIGJlIGluaXRpYWxpemVkIG9uIGNyZWF0aW9uLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNpemU6IFBvaW50LCBkYXRhPzogVCwgYXJyYXlUeXBlPzogeyBuZXcoXzogbnVtYmVyKTogVCB8IFVpbnQ4QXJyYXkgfSwgaW5pdGlhbGl6ZT86IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGEgPSBuZXcgKGFycmF5VHlwZSB8fCBVaW50OEFycmF5KShzaXplLnggKiBzaXplLnkpO1xuXG4gICAgICAgICAgICBpZiAoaW5pdGlhbGl6ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5maWxsKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGVzdHMgaWYgYSBwb3NpdGlvbiBpcyB3aXRoaW4gdGhlIGltYWdlIHdpdGggYSBnaXZlbiBvZmZzZXRcbiAgICAgKiBAcGFyYW0gcG9pbnQgVGhlIGxvY2F0aW9uIHRvIHRlc3RcbiAgICAgKiBAcGFyYW0gYm9yZGVyIFRoZSBwYWRkaW5nIHZhbHVlIGluIHBpeGVsc1xuICAgICAqIEByZXR1cm5zIHRydWUgaWYgbG9jYXRpb24gaW5zaWRlIHRoZSBpbWFnZSdzIGJvcmRlciwgZmFsc2Ugb3RoZXJ3aXNlXG4gICAgICogQHNlZSBjdmQvaW1hZ2UuaFxuICAgICAqL1xuICAgIGluSW1hZ2VXaXRoQm9yZGVyKHBvaW50OiBQb2ludCwgYm9yZGVyOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIChwb2ludC54ID49IGJvcmRlcilcbiAgICAgICAgICAgICYmIChwb2ludC55ID49IGJvcmRlcilcbiAgICAgICAgICAgICYmIChwb2ludC54IDwgKHRoaXMuc2l6ZS54IC0gYm9yZGVyKSlcbiAgICAgICAgICAgICYmIChwb2ludC55IDwgKHRoaXMuc2l6ZS55IC0gYm9yZGVyKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiB7SW1hZ2VXcmFwcGVyKSBhbmQgY29waWVzIHRoZSBuZWVkZWQgdW5kZXJseWluZyBpbWFnZS1kYXRhIGFyZWFcbiAgICAgKiBAcGFyYW0gaW1hZ2VXcmFwcGVyIFRoZSB0YXJnZXQge0ltYWdlV3JhcHBlcn0gd2hlcmUgdGhlIGRhdGEgc2hvdWxkIGJlIGNvcGllZFxuICAgICAqIEBwYXJhbSBmcm9tWCBUaGUgaG9yaXpvbnRhbCBwb3NpdGlvbiB3aGVyZSB0byBjb3B5IGZyb21cbiAgICAgKiBAcGFyYW0gZnJvbVkgVGhlIHZlcnRpY2FsIHBvc2l0aW9uIHdoZXJlIHRvIGNvcHkgZnJvbVxuICAgICovXG4gICAgc3ViSW1hZ2VBc0NvcHkoaW1hZ2VXcmFwcGVyOiBJbWFnZVdyYXBwZXIsIGZyb21YOiBudW1iZXIsIGZyb21ZOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgc2l6ZVkgPSBpbWFnZVdyYXBwZXIuc2l6ZS55O1xuICAgICAgICBjb25zdCBzaXplWCA9IGltYWdlV3JhcHBlci5zaXplLng7XG5cbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBzaXplWDsgeCsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHNpemVZOyB5KyspIHtcbiAgICAgICAgICAgICAgICBpbWFnZVdyYXBwZXIuZGF0YVt5ICogc2l6ZVggKyB4XSA9IHRoaXMuZGF0YVsoZnJvbVkgKyB5KSAqIHRoaXMuc2l6ZS54ICsgZnJvbVggKyB4XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHJpZXZlcyBhIGdpdmVuIHBpeGVsIHBvc2l0aW9uIGZyb20gdGhlIGltYWdlXG4gICAgICogQHBhcmFtIHggVGhlIHgtcG9zaXRpb25cbiAgICAgKiBAcGFyYW0geSBUaGUgeS1wb3NpdGlvblxuICAgICAqIEByZXR1cm5zIFRoZSBncmF5c2NhbGUgdmFsdWUgYXQgdGhlIHBpeGVsLXBvc2l0aW9uXG4gICAgICovXG4gICAgZ2V0KHg6IG51bWJlciwgeTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVt5ICogdGhpcy5zaXplLnggKyB4XTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIGEgZ2l2ZW4gcGl4ZWwgcG9zaXRpb24gaW4gdGhlIGltYWdlXG4gICAgICogQHBhcmFtIHggVGhlIHgtcG9zaXRpb25cbiAgICAgKiBAcGFyYW0geSBUaGUgeS1wb3NpdGlvblxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgZ3JheXNjYWxlIHZhbHVlIHRvIHNldFxuICAgICAqIEByZXR1cm5zIFRoZSBJbWFnZSBpdHNlbGYgKGZvciBwb3NzaWJsZSBjaGFpbmluZylcbiAgICAgKi9cbiAgICBzZXQoeDogbnVtYmVyLCB5OiBudW1iZXIsIHZhbHVlOiBudW1iZXIpOiBJbWFnZVdyYXBwZXI8VD4ge1xuICAgICAgICB0aGlzLmRhdGFbeSAqIHRoaXMuc2l6ZS54ICsgeF0gPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgYm9yZGVyIG9mIHRoZSBpbWFnZSAoMSBwaXhlbCkgdG8gemVyb1xuICAgICAqL1xuICAgIHplcm9Cb3JkZXIoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy5zaXplLng7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuc2l6ZS55O1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd2lkdGg7IGkrKykge1xuICAgICAgICAgICAgZGF0YVtpXSA9IGRhdGFbKGhlaWdodCAtIDEpICogd2lkdGggKyBpXSA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGhlaWdodCAtIDE7IGkrKykge1xuICAgICAgICAgICAgZGF0YVtpICogd2lkdGhdID0gZGF0YVtpICogd2lkdGggKyAod2lkdGggLSAxKV0gPSAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW52ZXJ0cyBhIGJpbmFyeSBpbWFnZSBpbiBwbGFjZVxuICAgICAqL1xuICAgIGludmVydCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YTtcblxuICAgICAgICBmb3IgKGxldCBpID0gZGF0YS5sZW5ndGg7IGktLTspIHtcbiAgICAgICAgICAgIGRhdGFbaV0gPSBkYXRhW2ldID8gMCA6IDE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtb21lbnRzKGxhYmVsQ291bnQ6IG51bWJlcik6IEFycmF5PE1vbWVudD4ge1xuICAgICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLnNpemUueTtcbiAgICAgICAgY29uc3Qgd2lkdGggPSB0aGlzLnNpemUueDtcbiAgICAgICAgY29uc3QgbGFiZWxTdW0gPSBuZXcgQXJyYXk8TW9tZW50PigpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgQXJyYXk8TW9tZW50PigpO1xuXG4gICAgICAgIGlmIChsYWJlbENvdW50IDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxhYmVsQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgbGFiZWxTdW1baV0gPSB7XG4gICAgICAgICAgICAgICAgbTAwOiAwLFxuICAgICAgICAgICAgICAgIG0wMTogMCxcbiAgICAgICAgICAgICAgICBtMTA6IDAsXG4gICAgICAgICAgICAgICAgbTExOiAwLFxuICAgICAgICAgICAgICAgIG0wMjogMCxcbiAgICAgICAgICAgICAgICBtMjA6IDAsXG4gICAgICAgICAgICAgICAgdGhldGE6IDAsXG4gICAgICAgICAgICAgICAgcmFkOiAwXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBoZWlnaHQ7IHkrKykge1xuICAgICAgICAgICAgY29uc3QgeXNxID0geSAqIHk7XG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHdpZHRoOyB4KyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWwgPSB0aGlzLmRhdGFbeSAqIHdpZHRoICsgeF07XG4gICAgICAgICAgICAgICAgaWYgKHZhbCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBsYWJlbFN1bVt2YWwgLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwubTAwICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsLm0wMSArPSB5O1xuICAgICAgICAgICAgICAgICAgICBsYWJlbC5tMTAgKz0geDtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwubTExICs9IHggKiB5O1xuICAgICAgICAgICAgICAgICAgICBsYWJlbC5tMDIgKz0geXNxO1xuICAgICAgICAgICAgICAgICAgICBsYWJlbC5tMjAgKz0geCAqIHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgUEkgPSBNYXRoLlBJO1xuICAgICAgICBjb25zdCBQSV80ID0gUEkgLyA0O1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGFiZWxDb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBsYWJlbCA9IGxhYmVsU3VtW2ldO1xuICAgICAgICAgICAgaWYgKCFpc05hTihsYWJlbC5tMDApICYmIGxhYmVsLm0wMCAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHhfID0gbGFiZWwubTEwIC8gbGFiZWwubTAwO1xuICAgICAgICAgICAgICAgIGNvbnN0IHlfID0gbGFiZWwubTAxIC8gbGFiZWwubTAwO1xuICAgICAgICAgICAgICAgIGNvbnN0IG11MTEgPSBsYWJlbC5tMTEgLyBsYWJlbC5tMDAgLSB4XyAqIHlfO1xuICAgICAgICAgICAgICAgIGNvbnN0IG11MDIgPSBsYWJlbC5tMDIgLyBsYWJlbC5tMDAgLSB5XyAqIHlfO1xuICAgICAgICAgICAgICAgIGNvbnN0IG11MjAgPSBsYWJlbC5tMjAgLyBsYWJlbC5tMDAgLSB4XyAqIHhfO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRtcCA9IDAuNSAqIE1hdGguYXRhbigobXUwMiAtIG11MjApIC8gKDIgKiBtdTExKSkgKyAobXUxMSA+PSAwID8gUElfNCA6IC1QSV80KSArIFBJO1xuICAgICAgICAgICAgICAgIGxhYmVsLnRoZXRhID0gKHRtcCAqIDE4MCAvIFBJICsgOTApICUgMTgwIC0gOTA7XG4gICAgICAgICAgICAgICAgaWYgKGxhYmVsLnRoZXRhIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbC50aGV0YSArPSAxODA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxhYmVsLnJhZCA9IHRtcCA+IFBJID8gdG1wIC0gUEkgOiB0bXA7XG4gICAgICAgICAgICAgICAgbGFiZWwueCA9IE1hdGguY29zKHRtcCk7XG4gICAgICAgICAgICAgICAgbGFiZWwueSA9IE1hdGguc2luKHRtcCk7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gobGFiZWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEaXNwbGF5cyB0aGUge0ltYWdlV3JhcHBlcn0gaW4gYSBnaXZlbiBjYW52YXNcbiAgICAgKiBAcGFyYW0gY29udGV4dCBUaGUgcmVuZGVyaW5nIGNvbnRleHQgdG8gd3JpdGUgdG9cbiAgICAgKiBAcGFyYW0gc2NhbGUgU2NhbGUgd2hpY2ggaXMgYXBwbGllZCB0byBlYWNoIHBpeGVsLXZhbHVlXG4gICAgICovXG4gICAgc2hvdyhjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHNjYWxlOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5zaXplLnk7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy5zaXplLng7XG4gICAgICAgIC8vIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgLy8gY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgLy8gY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIGNvbnN0IGZyYW1lID0gY29udGV4dC5nZXRJbWFnZURhdGEoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBmcmFtZS5kYXRhO1xuICAgICAgICBsZXQgY3VycmVudCA9IDA7XG5cbiAgICAgICAgaWYgKCFzY2FsZSkge1xuICAgICAgICAgICAgc2NhbGUgPSAxLjA7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGhlaWdodDsgeSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHdpZHRoOyB4KyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwaXhlbCA9IHkgKiB3aWR0aCArIHg7XG4gICAgICAgICAgICAgICAgY3VycmVudCA9IHRoaXMuZ2V0KHgsIHkpICogc2NhbGU7XG4gICAgICAgICAgICAgICAgZGF0YVtwaXhlbCAqIDQgKyAwXSA9IGN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgZGF0YVtwaXhlbCAqIDQgKyAxXSA9IGN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgZGF0YVtwaXhlbCAqIDQgKyAyXSA9IGN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgZGF0YVtwaXhlbCAqIDQgKyAzXSA9IDI1NTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vZnJhbWUuZGF0YSA9IGRhdGE7XG4gICAgICAgIGNvbnRleHQucHV0SW1hZ2VEYXRhKGZyYW1lLCAwLCAwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEaXNwbGF5cyB0aGUgcGFydCBvZiB0aGUgaW1hZ2UgaW4gYSBnaXZlbiBjYW52YXNcbiAgICAgKiBAcGFyYW0gY29udGV4dCBUaGUgcmVuZGVyaW5nIGNvbnRleHQgdG8gd3JpdGUgdG9cbiAgICAgKiBAcGFyYW0gc2NhbGUgU2NhbGUgd2hpY2ggaXMgYXBwbGllZCB0byBlYWNoIHBpeGVsLXZhbHVlXG4gICAgICogQHBhcmFtIGZyb21YIFRoZSBob3Jpem9udGFsIHBvc2l0aW9uIHdoZXJlIHRvIG92ZXJsYXkgZnJvbVxuICAgICAqIEBwYXJhbSBmcm9tWSBUaGUgdmVydGljYWwgcG9zaXRpb24gd2hlcmUgdG8gb3ZlcmxheSBmcm9tXG4gICAgICovXG4gICAgb3ZlcmxheShjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHNjYWxlOiBudW1iZXIsIGZyb21YOiBudW1iZXIsIGZyb21ZOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgaHN2OiBIU1YgPSBbMCwgMSwgMV07XG4gICAgICAgIGNvbnN0IHdoaXRlUmdiOiBSR0IgPSBbMjU1LCAyNTUsIDI1NV07XG4gICAgICAgIGNvbnN0IGJsYWNrUmdiOiBSR0IgPSBbMCwgMCwgMF07XG4gICAgICAgIGNvbnN0IGZyYW1lID0gY29udGV4dC5nZXRJbWFnZURhdGEoZnJvbVgsIGZyb21ZLCB0aGlzLnNpemUueCwgdGhpcy5zaXplLnkpO1xuICAgICAgICBjb25zdCBkYXRhID0gZnJhbWUuZGF0YTtcblxuICAgICAgICBpZiAoIXNjYWxlIHx8IHNjYWxlIDwgMCB8fCBzY2FsZSA+IDM2MCkge1xuICAgICAgICAgICAgc2NhbGUgPSAzNjA7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBsZW5ndGggPSB0aGlzLmRhdGEubGVuZ3RoOyBsZW5ndGgtLTspIHtcbiAgICAgICAgICAgIGhzdlswXSA9IHRoaXMuZGF0YVtsZW5ndGhdICogc2NhbGU7XG4gICAgICAgICAgICBjb25zdCByZ2I6IFJHQiA9IGhzdlswXSA8PSAwID8gd2hpdGVSZ2IgOiBoc3ZbMF0gPj0gMzYwID8gYmxhY2tSZ2IgOiBoc3YycmdiKGhzdik7XG4gICAgICAgICAgICBkYXRhW2xlbmd0aCAqIDQgKyAwXSA9IHJnYlswXTtcbiAgICAgICAgICAgIGRhdGFbbGVuZ3RoICogNCArIDFdID0gcmdiWzFdO1xuICAgICAgICAgICAgZGF0YVtsZW5ndGggKiA0ICsgMl0gPSByZ2JbMl07XG4gICAgICAgICAgICBkYXRhW2xlbmd0aCAqIDQgKyAzXSA9IDI1NTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQucHV0SW1hZ2VEYXRhKGZyYW1lLCBmcm9tWCwgZnJvbVkpO1xuICAgIH1cbn1cbiIsIlxuZXhwb3J0IGZ1bmN0aW9uIGVudW1lcmF0ZURldmljZXMoKTogUHJvbWlzZTxBcnJheTxNZWRpYURldmljZUluZm8+PiB7XG4gICAgaWYgKG5hdmlnYXRvci5tZWRpYURldmljZXMgJiYgdHlwZW9mIG5hdmlnYXRvci5tZWRpYURldmljZXMuZW51bWVyYXRlRGV2aWNlcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5lbnVtZXJhdGVEZXZpY2VzKCk7XG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ2VudW1lcmF0ZURldmljZXMgaXMgbm90IGRlZmluZWQnKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVc2VyTWVkaWEoY29uc3RyYWludHM6IE1lZGlhU3RyZWFtQ29uc3RyYWludHMpOiBQcm9taXNlPE1lZGlhU3RyZWFtPiB7XG4gICAgaWYgKG5hdmlnYXRvci5tZWRpYURldmljZXMgJiYgdHlwZW9mIG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYShjb25zdHJhaW50cyk7XG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ2dldFVzZXJNZWRpYSBpcyBub3QgZGVmaW5lZCcpKTtcbn1cbiIsIi8qKlxuICogUGVyZm9ybXMgYSBkZWVwIG1lcmdlIG9mIG9iamVjdHMgYW5kIHJldHVybnMgbmV3IG9iamVjdC5cbiAqIERvZXMgbm90IG1vZGlmeSBvYmplY3RzIChpbW11dGFibGUpLlxuICogQHNlZSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNDgyMTgyMDlcbiAqXG4gKiBAcGFyYW0gb2JqZWN0cyAtIE9iamVjdHMgdG8gbWVyZ2VcbiAqIEByZXR1cm5zIE5ldyBvYmplY3Qgd2l0aCBtZXJnZWQga2V5L3ZhbHVlc1xuICovXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2UoLi4ub2JqZWN0czogUmVhZG9ubHlBcnJheTxhbnk+KTogb2JqZWN0IHtcbiAgICBjb25zdCBpc09iamVjdCA9IChvYmo6IHVua25vd24pID0+IG9iaiAmJiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JztcblxuICAgIHJldHVybiBvYmplY3RzLnJlZHVjZSgocHJldiwgb2JqKSA9PiB7XG4gICAgICAgIGlmIChvYmopIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBWYWwgPSBwcmV2W2tleV07XG4gICAgICAgICAgICAgICAgY29uc3Qgb1ZhbCA9IG9ialtrZXldO1xuXG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocFZhbCkgJiYgQXJyYXkuaXNBcnJheShvVmFsKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBwcmV2W2tleV0gPSBwVmFsLmNvbmNhdCguLi5vVmFsKTtcbiAgICAgICAgICAgICAgICAgICAgcHJldltrZXldID0gb1ZhbDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGlzT2JqZWN0KHBWYWwpICYmIGlzT2JqZWN0KG9WYWwpKSB7XG4gICAgICAgICAgICAgICAgICAgIHByZXZba2V5XSA9IG1lcmdlKHBWYWwsIG9WYWwpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHByZXZba2V5XSA9IG9WYWw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcHJldjtcbiAgICB9LCB7fSk7XG59IiwiaW1wb3J0IHsgUXVhZ2dhQ29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuXG5leHBvcnQgY29uc3QgY29uZmlnOiBRdWFnZ2FDb25maWcgPSB7XG4gICAgaW5wdXRTdHJlYW06IHtcbiAgICAgICAgbmFtZTogJ0xpdmUnLFxuICAgICAgICB0eXBlOiAnTGl2ZVN0cmVhbScsXG4gICAgICAgIGNvbnN0cmFpbnRzOiB7XG4gICAgICAgICAgICB3aWR0aDogNjQwLFxuICAgICAgICAgICAgaGVpZ2h0OiA0ODAsXG4gICAgICAgICAgICAvLyBhc3BlY3RSYXRpbzogNjQwLzQ4MCwgLy8gb3B0aW9uYWxcbiAgICAgICAgICAgIGZhY2luZ01vZGU6ICdlbnZpcm9ubWVudCcgLy8gb3IgdXNlclxuICAgICAgICAgICAgLy8gZGV2aWNlSWQ6ICczODc0NTk4MzQ1NzM4NzU5ODM3NTk4Mzc1OTgzNCdcbiAgICAgICAgfSxcbiAgICAgICAgYXJlYToge1xuICAgICAgICAgICAgdG9wOiAnMCUnLFxuICAgICAgICAgICAgcmlnaHQ6ICcwJScsXG4gICAgICAgICAgICBsZWZ0OiAnMCUnLFxuICAgICAgICAgICAgYm90dG9tOiAnMCUnXG4gICAgICAgIH0sXG4gICAgICAgIHNpbmdsZUNoYW5uZWw6IGZhbHNlIC8vIHRydWU6IG9ubHkgdGhlIHJlZCBjb2xvci1jaGFubmVsIGlzIHJlYWRcbiAgICB9LFxuICAgIGxvY2F0ZTogdHJ1ZSxcbiAgICBudW1PZldvcmtlcnM6IDAsXG4gICAgZGVjb2Rlcjoge1xuICAgICAgICByZWFkZXJzOiBbXG4gICAgICAgICAgICAnY29kZV8xMjhfcmVhZGVyJ1xuICAgICAgICBdLFxuICAgICAgICBkZWJ1Zzoge1xuICAgICAgICAgICAgZHJhd0JvdW5kaW5nQm94OiBmYWxzZSxcbiAgICAgICAgICAgIHNob3dGcmVxdWVuY3k6IGZhbHNlLFxuICAgICAgICAgICAgZHJhd1NjYW5saW5lOiBmYWxzZSxcbiAgICAgICAgICAgIHNob3dQYXR0ZXJuOiBmYWxzZVxuICAgICAgICB9XG4gICAgfSxcbiAgICBsb2NhdG9yOiB7XG4gICAgICAgIGhhbGZTYW1wbGU6IHRydWUsXG4gICAgICAgIHBhdGNoU2l6ZTogJ21lZGl1bScsIC8vIHgtc21hbGwsIHNtYWxsLCBtZWRpdW0sIGxhcmdlLCB4LWxhcmdlXG4gICAgICAgIGRlYnVnOiB7XG4gICAgICAgICAgICBzaG93Q2FudmFzOiBmYWxzZSxcbiAgICAgICAgICAgIHNob3dQYXRjaGVzOiBmYWxzZSxcbiAgICAgICAgICAgIHNob3dGb3VuZFBhdGNoZXM6IGZhbHNlLFxuICAgICAgICAgICAgc2hvd1NrZWxldG9uOiBmYWxzZSxcbiAgICAgICAgICAgIHNob3dMYWJlbHM6IGZhbHNlLFxuICAgICAgICAgICAgc2hvd1BhdGNoTGFiZWxzOiBmYWxzZSxcbiAgICAgICAgICAgIHNob3dSZW1haW5pbmdQYXRjaExhYmVsczogZmFsc2UsXG4gICAgICAgICAgICBib3hGcm9tUGF0Y2hlczoge1xuICAgICAgICAgICAgICAgIHNob3dUcmFuc2Zvcm1lZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2hvd1RyYW5zZm9ybWVkQm94OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzaG93QkI6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuIiwiaW1wb3J0IHsgQm94IH0gZnJvbSAnLi4vY29tbW9uL2JveCc7XG5pbXBvcnQgeyBJbWFnZVdyYXBwZXIgfSBmcm9tICcuLi9jb21tb24vaW1hZ2Utd3JhcHBlcic7XG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJy4uL2NvbW1vbi9wb2ludCc7XG5pbXBvcnQgeyBSZWFkZXJzIH0gZnJvbSAnLi4vcmVhZGVyL2luZGV4JztcbmltcG9ydCB7IEJhcmNvZGUsIEJhcmNvZGVSZWFkZXIsIEJhcmNvZGVSZWFkZXJDb25maWcsIEJhcmNvZGVSZWFkZXJEZWNsYXJhdGlvbiwgQmFyY29kZVJlYWRlclR5cGUgfSBmcm9tICcuLi9yZWFkZXIvYmFyY29kZS1yZWFkZXInO1xuaW1wb3J0IHsgQmFyY29kZUxpbmUsIEJyZXNlbmhhbSB9IGZyb20gJy4vYnJlc2VuaGFtJztcbmltcG9ydCB7IEltYWdlRGVidWcgfSBmcm9tICcuLi9jb21tb24vaW1hZ2UtZGVidWcnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEJhcmNvZGVEZWNvZGVyQ29uZmlnIHtcbiAgICBkZWJ1Zz86IHtcbiAgICAgICAgZHJhd0JvdW5kaW5nQm94PzogYm9vbGVhbjtcbiAgICAgICAgZHJhd1NjYW5saW5lPzogYm9vbGVhbjtcbiAgICAgICAgc2hvd0ZyZXF1ZW5jeT86IGJvb2xlYW47XG4gICAgICAgIHNob3dQYXR0ZXJuPzogYm9vbGVhbjtcbiAgICB9O1xuICAgIG11bHRpcGxlPzogYm9vbGVhbjtcbiAgICByZWFkZXJzPzogQXJyYXk8QmFyY29kZVJlYWRlckRlY2xhcmF0aW9uPjtcbn1cblxudHlwZSBMaW5lID0gW1BvaW50LCBQb2ludF07XG5cbmV4cG9ydCBpbnRlcmZhY2UgUXVhZ2dhQmFyY29kZSB7XG4gICAgYW5nbGU/OiBudW1iZXI7XG4gICAgYmFyY29kZXM/OiBBcnJheTxRdWFnZ2FCYXJjb2RlPjsgLy8gVE9PRDogZGVhbCB3aXRoIG11bHRpcGxlIHJlc3VsdHNcbiAgICBib3g/OiBCb3g7XG4gICAgYm94ZXM/OiBBcnJheTxCb3g+OyAvLyBUT09EOiBkZWFsIHdpdGggbXVsdGlwbGUgcmVzdWx0c1xuICAgIGNvZGVSZXN1bHQ/OiBCYXJjb2RlO1xuICAgIGZyYW1lPzogc3RyaW5nO1xuICAgIGxpbmU/OiBMaW5lO1xuICAgIHBhdHRlcm4/OiBBcnJheTxudW1iZXI+O1xuICAgIHRocmVzaG9sZD86IG51bWJlcjtcbn07XG5cbmludGVyZmFjZSBCYXJjb2RlQW5kQmFyY29kZUxpbmUge1xuICAgIGNvZGVSZXN1bHQ6IEJhcmNvZGU7XG4gICAgYmFyY29kZUxpbmU6IEJhcmNvZGVMaW5lO1xufVxuXG5leHBvcnQgY2xhc3MgQmFyY29kZURlY29kZXIge1xuICAgIHByaXZhdGUgX2NvbmZpZzogQmFyY29kZURlY29kZXJDb25maWc7XG4gICAgcHJpdmF0ZSBfaW5wdXRJbWFnZVdyYXBwZXI6IEltYWdlV3JhcHBlcjxVaW50OEFycmF5PjtcbiAgICBwcml2YXRlIF9mcmVxdWVuY3lDYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICAgIHByaXZhdGUgX3BhdHRlcm5DYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICAgIHByaXZhdGUgX292ZXJsYXlDb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4gICAgcHJpdmF0ZSBfYmFyY29kZVJlYWRlcnM6IEFycmF5PEJhcmNvZGVSZWFkZXI+O1xuXG4gICAgY29uc3RydWN0b3IoY29uZmlnOiBCYXJjb2RlRGVjb2RlckNvbmZpZywgaW5wdXRJbWFnZVdyYXBwZXI6IEltYWdlV3JhcHBlcjxVaW50OEFycmF5Pikge1xuICAgICAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG4gICAgICAgIHRoaXMuX2lucHV0SW1hZ2VXcmFwcGVyID0gaW5wdXRJbWFnZVdyYXBwZXI7XG4gICAgICAgIHRoaXMuX2JhcmNvZGVSZWFkZXJzID0gW107XG5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdGhpcy5fY29uZmlnLmRlYnVnICYmIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGNvbnN0IGRlYnVnRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RlYnVnLmRldGVjdGlvbicpO1xuXG4gICAgICAgICAgICB0aGlzLl9mcmVxdWVuY3lDYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjYW52YXMuZnJlcXVlbmN5Jyk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX2ZyZXF1ZW5jeUNhbnZhcykge1xuICAgICAgICAgICAgICAgIHRoaXMuX2ZyZXF1ZW5jeUNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2ZyZXF1ZW5jeUNhbnZhcy5jbGFzc05hbWUgPSAnZnJlcXVlbmN5JztcbiAgICAgICAgICAgICAgICBpZiAoZGVidWdEaXYpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVidWdEaXYuYXBwZW5kQ2hpbGQodGhpcy5fZnJlcXVlbmN5Q2FudmFzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9mcmVxdWVuY3lDYW52YXMuc3R5bGUuZGlzcGxheSA9IHRoaXMuX2NvbmZpZy5kZWJ1Zy5zaG93RnJlcXVlbmN5ID8gJ2Jsb2NrJyA6ICdub25lJztcblxuICAgICAgICAgICAgdGhpcy5fcGF0dGVybkNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbnZhcy5wYXR0ZXJuQnVmZmVyJyk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX3BhdHRlcm5DYW52YXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9wYXR0ZXJuQ2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5fcGF0dGVybkNhbnZhcy5jbGFzc05hbWUgPSAncGF0dGVybkJ1ZmZlcic7XG4gICAgICAgICAgICAgICAgaWYgKGRlYnVnRGl2KSB7XG4gICAgICAgICAgICAgICAgICAgIGRlYnVnRGl2LmFwcGVuZENoaWxkKHRoaXMuX3BhdHRlcm5DYW52YXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX3BhdHRlcm5DYW52YXMuc3R5bGUuZGlzcGxheSA9IHRoaXMuX2NvbmZpZy5kZWJ1Zy5zaG93UGF0dGVybiA/ICdibG9jaycgOiAnbm9uZSc7XG5cbiAgICAgICAgICAgIGNvbnN0IG92ZXJsYXlDYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxDYW52YXNFbGVtZW50PignY2FudmFzLmRyYXdpbmdCdWZmZXInKTtcbiAgICAgICAgICAgIHRoaXMuX292ZXJsYXlDb250ZXh0ID0gb3ZlcmxheUNhbnZhcyA/IG92ZXJsYXlDYW52YXMuZ2V0Q29udGV4dCgnMmQnKSA6IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9pbml0UmVhZGVycygpO1xuICAgIH1cblxuICAgIGRlY29kZUZyb21Cb3VuZGluZ0JveGVzKGJveGVzOiBBcnJheTxCb3g+KTogUXVhZ2dhQmFyY29kZSB7XG4gICAgICAgIGNvbnN0IGJhcmNvZGVzID0gW107XG4gICAgICAgIGNvbnN0IG11bHRpcGxlID0gdGhpcy5fY29uZmlnLm11bHRpcGxlO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm94ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGJveCA9IGJveGVzW2ldO1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5kZWNvZGVGcm9tQm91bmRpbmdCb3goYm94KSB8fCB7fTtcbiAgICAgICAgICAgIHJlc3VsdC5ib3ggPSBib3g7XG5cbiAgICAgICAgICAgIGlmIChtdWx0aXBsZSkge1xuICAgICAgICAgICAgICAgIGJhcmNvZGVzLnB1c2gocmVzdWx0KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmNvZGVSZXN1bHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG11bHRpcGxlKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGJhcmNvZGVzXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV2l0aCB0aGUgaGVscCBvZiB0aGUgY29uZmlndXJlZCByZWFkZXJzIHRoaXMgZnVuY3Rpb24gdHJpZXMgdG8gZGV0ZWN0XG4gICAgICogYSB2YWxpZCBiYXJjb2RlIHBhdHRlcm4gd2l0aGluIHRoZSBnaXZlbiBhcmVhLlxuICAgICAqIEBwYXJhbSBib3ggVGhlIGFyZWEgdG8gc2VhcmNoIGluXG4gICAgICogQHJldHVybnMgVGhlIHJlc3VsdCB7Y29kZVJlc3VsdCwgbGluZSwgYW5nbGUsIHBhdHRlcm4sIHRocmVzaG9sZH1cbiAgICAgKi9cbiAgICBkZWNvZGVGcm9tQm91bmRpbmdCb3goYm94OiBCb3gpOiBRdWFnZ2FCYXJjb2RlIHtcbiAgICAgICAgY29uc3QgZGVidWcgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuX292ZXJsYXlDb250ZXh0ICYmIHRoaXMuX2NvbmZpZy5kZWJ1ZztcblxuICAgICAgICBpZiAoZGVidWcgJiYgZGVidWcuZHJhd0JvdW5kaW5nQm94KSB7XG4gICAgICAgICAgICB0aGlzLl9kcmF3UGF0aChib3gsICdibHVlJywgMik7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbGluZSA9IHRoaXMuX2dldExpbmUoYm94KTtcblxuICAgICAgICBpZiAobGluZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhbmdsZSA9IE1hdGguYXRhbjIobGluZVsxXS55IC0gbGluZVswXS55LCBsaW5lWzFdLnggLSBsaW5lWzBdLngpO1xuICAgICAgICBsaW5lID0gdGhpcy5fZ2V0RXh0ZW5kZWRMaW5lKGxpbmUsIGFuZ2xlKTtcblxuICAgICAgICBsZXQgcmVzdWx0ID0gdGhpcy5fdHJ5RGVjb2RlKGxpbmUpO1xuICAgICAgICBpZiAocmVzdWx0ID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLl90cnlEZWNvZGVCcnV0ZUZvcmNlKGJveCwgbGluZSwgYW5nbGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlc3VsdCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGVidWcgJiYgZGVidWcuZHJhd1NjYW5saW5lKSB7XG4gICAgICAgICAgICB0aGlzLl9kcmF3UGF0aChsaW5lLCAncmVkJywgMyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29kZVJlc3VsdDogcmVzdWx0LmNvZGVSZXN1bHQsXG4gICAgICAgICAgICBsaW5lLFxuICAgICAgICAgICAgYW5nbGUsXG4gICAgICAgICAgICBwYXR0ZXJuOiByZXN1bHQuYmFyY29kZUxpbmUubGluZSxcbiAgICAgICAgICAgIHRocmVzaG9sZDogcmVzdWx0LmJhcmNvZGVMaW5lLnRocmVzaG9sZFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHNldFJlYWRlcnMocmVhZGVyczogQXJyYXk8QmFyY29kZVJlYWRlckRlY2xhcmF0aW9uPik6IHZvaWQge1xuICAgICAgICB0aGlzLl9jb25maWcucmVhZGVycyA9IHJlYWRlcnM7XG4gICAgICAgIHRoaXMuX2JhcmNvZGVSZWFkZXJzLmxlbmd0aCA9IDA7XG4gICAgICAgIHRoaXMuX2luaXRSZWFkZXJzKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaW5pdFJlYWRlcnMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2NvbmZpZy5yZWFkZXJzLmZvckVhY2gocmVhZGVyQ29uZmlnID0+IHtcbiAgICAgICAgICAgIGxldCByZWFkZXI6IEJhcmNvZGVSZWFkZXJUeXBlO1xuICAgICAgICAgICAgbGV0IGNvbmZpZ3VyYXRpb246IEJhcmNvZGVSZWFkZXJDb25maWcgPSB7fTtcbiAgICAgICAgICAgIGxldCBzdXBwbGVtZW50cyA9IFtdO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIHJlYWRlckNvbmZpZyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICByZWFkZXIgPSByZWFkZXJDb25maWcuZm9ybWF0O1xuICAgICAgICAgICAgICAgIGNvbmZpZ3VyYXRpb24gPSByZWFkZXJDb25maWcuY29uZmlnIHx8IHt9O1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgcmVhZGVyQ29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHJlYWRlciA9IHJlYWRlckNvbmZpZztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQmVmb3JlIHJlZ2lzdGVyaW5nIHJlYWRlcjonLCByZWFkZXIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbi5zdXBwbGVtZW50cykge1xuICAgICAgICAgICAgICAgIHN1cHBsZW1lbnRzID0gY29uZmlndXJhdGlvbi5zdXBwbGVtZW50cy5tYXAoc3VwcGxlbWVudCA9PiBuZXcgUmVhZGVyc1tzdXBwbGVtZW50XSgpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fYmFyY29kZVJlYWRlcnMucHVzaChuZXcgUmVhZGVyc1tyZWFkZXJdKGNvbmZpZ3VyYXRpb24sIHN1cHBsZW1lbnRzKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUmVnaXN0ZXJlZCBSZWFkZXJzOicsXG4gICAgICAgICAgICAgICAgLi4udGhpcy5fYmFyY29kZVJlYWRlcnMubWFwKCh7IGNvbmZpZywgRk9STUFUIH0pID0+IEpTT04uc3RyaW5naWZ5KHsgY29uZmlnLCBGT1JNQVQgfSkpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGV4dGVuZCB0aGUgbGluZSBvbiBib3RoIGVuZHNcbiAgICAgKiBAcGFyYW0gbGluZVxuICAgICAqIEBwYXJhbSBhbmdsZVxuICAgICAqL1xuICAgIHByaXZhdGUgX2dldEV4dGVuZGVkTGluZShsaW5lOiBMaW5lLCBhbmdsZTogbnVtYmVyKTogTGluZSB7XG4gICAgICAgIGZ1bmN0aW9uIGV4dGVuZExpbmUoYW1vdW50OiBudW1iZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IGV4dGVuc2lvbiA9IHtcbiAgICAgICAgICAgICAgICB5OiBhbW91bnQgKiBNYXRoLnNpbihhbmdsZSksXG4gICAgICAgICAgICAgICAgeDogYW1vdW50ICogTWF0aC5jb3MoYW5nbGUpXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBsaW5lWzBdLnkgLT0gZXh0ZW5zaW9uLnk7XG4gICAgICAgICAgICBsaW5lWzBdLnggLT0gZXh0ZW5zaW9uLng7XG4gICAgICAgICAgICBsaW5lWzFdLnkgKz0gZXh0ZW5zaW9uLnk7XG4gICAgICAgICAgICBsaW5lWzFdLnggKz0gZXh0ZW5zaW9uLng7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBsaW5lTGVuZ3RoID0gTWF0aC5zcXJ0KChsaW5lWzFdLnkgLSBsaW5lWzBdLnkpICoqIDIgKyAobGluZVsxXS54IC0gbGluZVswXS54KSAqKiAyKTtcbiAgICAgICAgbGV0IGV4dGVuc2lvbkxlbmd0aCA9IGxpbmVMZW5ndGggKiAwLjEgfCAwO1xuXG4gICAgICAgIGV4dGVuZExpbmUoZXh0ZW5zaW9uTGVuZ3RoKTtcblxuICAgICAgICAvLyBjaGVjayBpZiBpbnNpZGUgaW1hZ2VcbiAgICAgICAgd2hpbGUgKGV4dGVuc2lvbkxlbmd0aCA+IDEgJiYgKCF0aGlzLl9pbnB1dEltYWdlV3JhcHBlci5pbkltYWdlV2l0aEJvcmRlcihsaW5lWzBdLCAwKVxuICAgICAgICAgICAgfHwgIXRoaXMuX2lucHV0SW1hZ2VXcmFwcGVyLmluSW1hZ2VXaXRoQm9yZGVyKGxpbmVbMV0sIDApKSkge1xuICAgICAgICAgICAgZXh0ZW5zaW9uTGVuZ3RoID4+PSAxO1xuICAgICAgICAgICAgZXh0ZW5kTGluZSgtZXh0ZW5zaW9uTGVuZ3RoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBsaW5lO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2dldExpbmUoYm94OiBCb3gpOiBMaW5lIHtcbiAgICAgICAgcmV0dXJuIFt7XG4gICAgICAgICAgICB4OiAoYm94WzFdLnggKyBib3hbMF0ueCkgLyAyLFxuICAgICAgICAgICAgeTogKGJveFsxXS55ICsgYm94WzBdLnkpIC8gMlxuICAgICAgICB9LCB7XG4gICAgICAgICAgICB4OiAoYm94WzNdLnggKyBib3hbMl0ueCkgLyAyLFxuICAgICAgICAgICAgeTogKGJveFszXS55ICsgYm94WzJdLnkpIC8gMlxuICAgICAgICB9XTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF90cnlEZWNvZGUobGluZTogTGluZSk6IEJhcmNvZGVBbmRCYXJjb2RlTGluZSB7XG4gICAgICAgIGNvbnN0IGRlYnVnID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLl9jb25maWcuZGVidWc7XG5cbiAgICAgICAgaWYgKGRlYnVnICYmIHRoaXMuX292ZXJsYXlDb250ZXh0KSB7XG4gICAgICAgICAgICB0aGlzLl9kcmF3UGF0aChsaW5lLCAncmVkJywgMyk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgYmFyY29kZUxpbmUgPSBCcmVzZW5oYW0uZ2V0QmFyY29kZUxpbmUodGhpcy5faW5wdXRJbWFnZVdyYXBwZXIsIGxpbmVbMF0sIGxpbmVbMV0pO1xuXG4gICAgICAgIGlmIChkZWJ1ZyAmJiBkZWJ1Zy5zaG93RnJlcXVlbmN5KSB7XG4gICAgICAgICAgICB0aGlzLl9wcmludEZyZXF1ZW5jeShiYXJjb2RlTGluZS5saW5lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJhcmNvZGVMaW5lID0gQnJlc2VuaGFtLnRvQmluYXJ5TGluZShiYXJjb2RlTGluZSk7XG5cbiAgICAgICAgaWYgKGRlYnVnICYmIGRlYnVnLnNob3dQYXR0ZXJuKSB7XG4gICAgICAgICAgICB0aGlzLl9wcmludFBhdHRlcm4oYmFyY29kZUxpbmUubGluZSk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2JhcmNvZGVSZWFkZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBjb2RlUmVzdWx0ID0gdGhpcy5fYmFyY29kZVJlYWRlcnNbaV0uZGVjb2RlUGF0dGVybihiYXJjb2RlTGluZS5saW5lKTtcbiAgICAgICAgICAgIGlmIChjb2RlUmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgY29kZVJlc3VsdCxcbiAgICAgICAgICAgICAgICAgICAgYmFyY29kZUxpbmVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2Qgc2xpY2VzIHRoZSBnaXZlbiBhcmVhIGFwYXJ0IGFuZCB0cmllcyB0byBkZXRlY3QgYSBiYXJjb2RlLXBhdHRlcm4gZm9yIGVhY2ggc2xpY2UuXG4gICAgICogSXQgcmV0dXJucyB0aGUgZGVjb2RlZCBiYXJjb2RlLCBvciBudWxsIGlmIG5vdGhpbmcgd2FzIGZvdW5kXG4gICAgICogQHBhcmFtIGJveFxuICAgICAqIEBwYXJhbSBsaW5lXG4gICAgICogQHBhcmFtIGxpbmVBbmdsZVxuICAgICAqL1xuICAgIHByaXZhdGUgX3RyeURlY29kZUJydXRlRm9yY2UoYm94OiBCb3gsIGxpbmU6IExpbmUsIGxpbmVBbmdsZTogbnVtYmVyKTogQmFyY29kZUFuZEJhcmNvZGVMaW5lIHtcbiAgICAgICAgY29uc3Qgc2lkZUxlbmd0aCA9IE1hdGguc3FydCgoYm94WzFdLnggLSBib3hbMF0ueCkgKiogMiArIChib3hbMV0ueSAtIGJveFswXS55KSAqKiAyKTtcbiAgICAgICAgY29uc3Qgc2xpY2VzID0gMTY7XG4gICAgICAgIGNvbnN0IHhkaXIgPSBNYXRoLnNpbihsaW5lQW5nbGUpO1xuICAgICAgICBjb25zdCB5ZGlyID0gTWF0aC5jb3MobGluZUFuZ2xlKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHNsaWNlczsgaSsrKSB7XG4gICAgICAgICAgICAvLyBtb3ZlIGxpbmUgcGVycGVuZGljdWxhciB0byBhbmdsZVxuICAgICAgICAgICAgY29uc3QgZGlyID0gc2lkZUxlbmd0aCAvIHNsaWNlcyAqIGkgKiAoaSAlIDIgPT09IDAgPyAtMSA6IDEpO1xuICAgICAgICAgICAgbGluZVswXS55ICs9IGRpciAqIHhkaXI7XG4gICAgICAgICAgICBsaW5lWzBdLnggLT0gZGlyICogeWRpcjtcbiAgICAgICAgICAgIGxpbmVbMV0ueSArPSBkaXIgKiB4ZGlyO1xuICAgICAgICAgICAgbGluZVsxXS54IC09IGRpciAqIHlkaXI7XG5cbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuX3RyeURlY29kZShsaW5lKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXNlZCBmb3IgZGV2ZWxvcG1lbnQgb25seVxuICAgICAqL1xuICAgIHByaXZhdGUgX3ByaW50RnJlcXVlbmN5KGxpbmU6IEFycmF5PG51bWJlcj4pOiB2b2lkIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuX2ZyZXF1ZW5jeUNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICB0aGlzLl9mcmVxdWVuY3lDYW52YXMud2lkdGggPSBsaW5lLmxlbmd0aDtcbiAgICAgICAgdGhpcy5fZnJlcXVlbmN5Q2FudmFzLmhlaWdodCA9IDI1NjtcblxuICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gJ2JsdWUnO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29udGV4dC5tb3ZlVG8oaSwgMjU1KTtcbiAgICAgICAgICAgIGNvbnRleHQubGluZVRvKGksIDI1NSAtIGxpbmVbaV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgICAgICAgY29udGV4dC5zdHJva2UoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVc2VkIGZvciBkZXZlbG9wbWVudCBvbmx5XG4gICAgICovXG4gICAgcHJpdmF0ZSBfcHJpbnRQYXR0ZXJuKGxpbmU6IEFycmF5PG51bWJlcj4pOiB2b2lkIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuX3BhdHRlcm5DYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAgICAgICB0aGlzLl9wYXR0ZXJuQ2FudmFzLndpZHRoID0gbGluZS5sZW5ndGg7XG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gJ2JsYWNrJztcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChsaW5lW2ldID09PSAxKSB7XG4gICAgICAgICAgICAgICAgY29udGV4dC5maWxsUmVjdChpLCAwLCAxLCAxMDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZHJhd1BhdGgocGF0aDogQXJyYXk8UG9pbnQ+LCBjb2xvcjogc3RyaW5nLCBsaW5lV2lkdGg6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBJbWFnZURlYnVnLmRyYXdQYXRoKHBhdGgsIHRoaXMuX292ZXJsYXlDb250ZXh0LCBjb2xvciwgbGluZVdpZHRoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBQb2ludCB9IGZyb20gJy4uL2NvbW1vbi9wb2ludCc7XG5pbXBvcnQgeyBJbWFnZVdyYXBwZXIgfSBmcm9tICcuLi9jb21tb24vaW1hZ2Utd3JhcHBlcic7XG5cbmVudW0gU2xvcGUge1xuICAgIFVwID0gMSxcbiAgICBEb3duID0gLTFcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmFyY29kZUxpbmUge1xuICAgIGxpbmU6IEFycmF5PG51bWJlcj47XG4gICAgbWF4PzogbnVtYmVyO1xuICAgIG1pbj86IG51bWJlcjtcbiAgICB0aHJlc2hvbGQ/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBCcmVzZW5oYW0ge1xuICAgIC8qKlxuICAgICAqIFNjYW5zIGEgbGluZSBvZiB0aGUgZ2l2ZW4gaW1hZ2UgZnJvbSBwb2ludCBwMSB0byBwMiBhbmQgcmV0dXJucyBhIHJlc3VsdCBvYmplY3QgY29udGFpbmluZ1xuICAgICAqIGdyYXktc2NhbGUgdmFsdWVzICgwLTI1NSkgb2YgdGhlIHVuZGVybHlpbmcgcGl4ZWxzIGluIGFkZGl0aW9uIHRvIHRoZSBtaW4gYW5kIG1heCB2YWx1ZXMuXG4gICAgICogQHBhcmFtIGltYWdlV3JhcHBlclxuICAgICAqIEBwYXJhbSBwMSBUaGUgc3RhcnQgcG9pbnQge3gseX1cbiAgICAgKiBAcGFyYW0gcDIgVGhlIGVuZCBwb2ludCB7eCx5fVxuICAgICAqIEByZXR1cm5zIHtsaW5lLCBtaW4sIG1heH1cbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0QmFyY29kZUxpbmUoaW1hZ2VXcmFwcGVyOiBJbWFnZVdyYXBwZXIsIHAxOiBQb2ludCwgcDI6IFBvaW50KTogQmFyY29kZUxpbmUge1xuICAgICAgICBsZXQgeDAgPSBwMS54IHwgMDtcbiAgICAgICAgbGV0IHkwID0gcDEueSB8IDA7XG4gICAgICAgIGxldCB4MSA9IHAyLnggfCAwO1xuICAgICAgICBsZXQgeTEgPSBwMi55IHwgMDtcbiAgICAgICAgY29uc3Qgc3RlZXAgPSBNYXRoLmFicyh5MSAtIHkwKSA+IE1hdGguYWJzKHgxIC0geDApO1xuICAgICAgICBsZXQgdG1wOiBudW1iZXI7XG4gICAgICAgIGNvbnN0IGxpbmUgPSBbXTtcbiAgICAgICAgY29uc3QgaW1hZ2VEYXRhID0gaW1hZ2VXcmFwcGVyLmRhdGE7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gaW1hZ2VXcmFwcGVyLnNpemUueDtcbiAgICAgICAgbGV0IHZhbDogbnVtYmVyO1xuICAgICAgICBsZXQgbWluID0gMjU1O1xuICAgICAgICBsZXQgbWF4ID0gMDtcblxuICAgICAgICBmdW5jdGlvbiByZWFkKGE6IG51bWJlciwgYjogbnVtYmVyKSB7XG4gICAgICAgICAgICB2YWwgPSBpbWFnZURhdGFbYiAqIHdpZHRoICsgYV07XG4gICAgICAgICAgICBtaW4gPSB2YWwgPCBtaW4gPyB2YWwgOiBtaW47XG4gICAgICAgICAgICBtYXggPSB2YWwgPiBtYXggPyB2YWwgOiBtYXg7XG4gICAgICAgICAgICBsaW5lLnB1c2godmFsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdGVlcCkge1xuICAgICAgICAgICAgdG1wID0geDA7XG4gICAgICAgICAgICB4MCA9IHkwO1xuICAgICAgICAgICAgeTAgPSB0bXA7XG5cbiAgICAgICAgICAgIHRtcCA9IHgxO1xuICAgICAgICAgICAgeDEgPSB5MTtcbiAgICAgICAgICAgIHkxID0gdG1wO1xuICAgICAgICB9XG4gICAgICAgIGlmICh4MCA+IHgxKSB7XG4gICAgICAgICAgICB0bXAgPSB4MDtcbiAgICAgICAgICAgIHgwID0geDE7XG4gICAgICAgICAgICB4MSA9IHRtcDtcblxuICAgICAgICAgICAgdG1wID0geTA7XG4gICAgICAgICAgICB5MCA9IHkxO1xuICAgICAgICAgICAgeTEgPSB0bXA7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZGVsdGF4ID0geDEgLSB4MDtcbiAgICAgICAgbGV0IGRlbHRheSA9IE1hdGguYWJzKHkxIC0geTApO1xuICAgICAgICBsZXQgZXJyb3IgPSAoZGVsdGF4IC8gMikgfCAwO1xuICAgICAgICBsZXQgeSA9IHkwO1xuICAgICAgICBsZXQgeXN0ZXAgPSB5MCA8IHkxID8gMSA6IC0xO1xuXG4gICAgICAgIGZvciAobGV0IHggPSB4MDsgeCA8IHgxOyB4KyspIHtcbiAgICAgICAgICAgIGlmIChzdGVlcCkge1xuICAgICAgICAgICAgICAgIHJlYWQoeSwgeCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlYWQoeCwgeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlcnJvciA9IGVycm9yIC0gZGVsdGF5O1xuICAgICAgICAgICAgaWYgKGVycm9yIDwgMCkge1xuICAgICAgICAgICAgICAgIHkgKz0geXN0ZXA7XG4gICAgICAgICAgICAgICAgZXJyb3IgPSBlcnJvciArIGRlbHRheDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsaW5lLFxuICAgICAgICAgICAgbWluLFxuICAgICAgICAgICAgbWF4XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29udmVydHMgdGhlIHJlc3VsdCBmcm9tIGdldEJhcmNvZGVMaW5lIGludG8gYSBiaW5hcnkgcmVwcmVzZW50YXRpb25cbiAgICAgKiBhbHNvIGNvbnNpZGVyaW5nIHRoZSBmcmVxdWVuY3kgYW5kIHNsb3BlIG9mIHRoZSBzaWduYWwgZm9yIG1vcmUgcm9idXN0IHJlc3VsdHNcbiAgICAgKiBAcGFyYW0gcmVzdWx0IHtsaW5lLCBtaW4sIG1heH1cbiAgICAgKi9cbiAgICBzdGF0aWMgdG9CaW5hcnlMaW5lKHJlc3VsdDogQmFyY29kZUxpbmUpOiBCYXJjb2RlTGluZSB7XG4gICAgICAgIGNvbnN0IG1pbiA9IHJlc3VsdC5taW47XG4gICAgICAgIGNvbnN0IG1heCA9IHJlc3VsdC5tYXg7XG4gICAgICAgIGNvbnN0IGxpbmUgPSByZXN1bHQubGluZTtcbiAgICAgICAgY29uc3QgY2VudGVyID0gbWluICsgKG1heCAtIG1pbikgLyAyO1xuICAgICAgICBjb25zdCBleHRyZW1hID0gbmV3IEFycmF5PHsgcG9zOiBudW1iZXI7IHZhbDogbnVtYmVyOyB9PigpO1xuICAgICAgICBsZXQgdGhyZXNob2xkID0gKG1heCAtIG1pbikgLyAxMjtcbiAgICAgICAgY29uc3QgclRocmVzaG9sZCA9IC10aHJlc2hvbGQ7XG5cbiAgICAgICAgLy8gMS4gZmluZCBleHRyZW1hXG4gICAgICAgIGxldCBjdXJyZW50RGlyID0gbGluZVswXSA+IGNlbnRlciA/IFNsb3BlLlVwIDogU2xvcGUuRG93bjtcbiAgICAgICAgZXh0cmVtYS5wdXNoKHtcbiAgICAgICAgICAgIHBvczogMCxcbiAgICAgICAgICAgIHZhbDogbGluZVswXVxuICAgICAgICB9KTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lLmxlbmd0aCAtIDI7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgc2xvcGUgPSAobGluZVtpICsgMV0gLSBsaW5lW2ldKTtcbiAgICAgICAgICAgIGNvbnN0IHNsb3BlMiA9IChsaW5lW2kgKyAyXSAtIGxpbmVbaSArIDFdKTtcbiAgICAgICAgICAgIGxldCBkaXI6IFNsb3BlO1xuICAgICAgICAgICAgaWYgKChzbG9wZSArIHNsb3BlMikgPCByVGhyZXNob2xkICYmIGxpbmVbaSArIDFdIDwgKGNlbnRlciAqIDEuNSkpIHtcbiAgICAgICAgICAgICAgICBkaXIgPSBTbG9wZS5Eb3duO1xuICAgICAgICAgICAgfSBlbHNlIGlmICgoc2xvcGUgKyBzbG9wZTIpID4gdGhyZXNob2xkICYmIGxpbmVbaSArIDFdID4gKGNlbnRlciAqIDAuNSkpIHtcbiAgICAgICAgICAgICAgICBkaXIgPSBTbG9wZS5VcDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGlyID0gY3VycmVudERpcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGN1cnJlbnREaXIgIT09IGRpcikge1xuICAgICAgICAgICAgICAgIGV4dHJlbWEucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHBvczogaSxcbiAgICAgICAgICAgICAgICAgICAgdmFsOiBsaW5lW2ldXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY3VycmVudERpciA9IGRpcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBleHRyZW1hLnB1c2goe1xuICAgICAgICAgICAgcG9zOiBsaW5lLmxlbmd0aCxcbiAgICAgICAgICAgIHZhbDogbGluZVtsaW5lLmxlbmd0aCAtIDFdXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZvciAobGV0IGogPSBleHRyZW1hWzBdLnBvczsgaiA8IGV4dHJlbWFbMV0ucG9zOyBqKyspIHtcbiAgICAgICAgICAgIGxpbmVbal0gPSBsaW5lW2pdID4gY2VudGVyID8gMCA6IDE7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpdGVyYXRlIG92ZXIgZXh0cmVtYSBhbmQgY29udmVydCB0byBiaW5hcnkgYmFzZWQgb24gYXZnIGJldHdlZW4gbWlubWF4XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgZXh0cmVtYS5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChleHRyZW1hW2kgKyAxXS52YWwgPiBleHRyZW1hW2ldLnZhbCkge1xuICAgICAgICAgICAgICAgIHRocmVzaG9sZCA9IChleHRyZW1hW2ldLnZhbCArICgoZXh0cmVtYVtpICsgMV0udmFsIC0gZXh0cmVtYVtpXS52YWwpIC8gMykgKiAyKSB8IDA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocmVzaG9sZCA9IChleHRyZW1hW2kgKyAxXS52YWwgKyAoKGV4dHJlbWFbaV0udmFsIC0gZXh0cmVtYVtpICsgMV0udmFsKSAvIDMpKSB8IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAobGV0IGogPSBleHRyZW1hW2ldLnBvczsgaiA8IGV4dHJlbWFbaSArIDFdLnBvczsgaisrKSB7XG4gICAgICAgICAgICAgICAgbGluZVtqXSA9IGxpbmVbal0gPiB0aHJlc2hvbGQgPyAwIDogMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5yZXN1bHQsXG4gICAgICAgICAgICB0aHJlc2hvbGRcbiAgICAgICAgfTtcbiAgICB9O1xufVxuIiwiaW1wb3J0IHsgZ2V0VXNlck1lZGlhLCBlbnVtZXJhdGVEZXZpY2VzIH0gZnJvbSAnLi4vY29tbW9uL21lZGlhLWRldmljZXMnO1xuXG5sZXQgX3N0cmVhbTogTWVkaWFTdHJlYW07XG5cbmV4cG9ydCBjb25zdCBDYW1lcmFBY2Nlc3MgPSB7XG4gICAgLyoqXG4gICAgICogQXR0ZW1wdHMgdG8gYXR0YWNoIHRoZSBjYW1lcmEtc3RyZWFtIHRvIGEgZ2l2ZW4gdmlkZW8gZWxlbWVudFxuICAgICAqIGFuZCBjYWxscyB0aGUgY2FsbGJhY2sgZnVuY3Rpb24gd2hlbiB0aGUgY29udGVudCBpcyByZWFkeVxuICAgICAqIEBwYXJhbSB2aWRlb1xuICAgICAqIEBwYXJhbSB2aWRlb0NvbnN0cmFpbnRzXG4gICAgICovXG4gICAgYXN5bmMgcmVxdWVzdCh2aWRlbzogSFRNTFZpZGVvRWxlbWVudCwgdmlkZW9Db25zdHJhaW50czogTWVkaWFUcmFja0NvbnN0cmFpbnRzKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRDb25zdHJhaW50cyA9IENhbWVyYUFjY2Vzcy5waWNrQ29uc3RyYWludHModmlkZW9Db25zdHJhaW50cyk7XG4gICAgICAgIF9zdHJlYW0gPSBhd2FpdCBnZXRVc2VyTWVkaWEobm9ybWFsaXplZENvbnN0cmFpbnRzKTtcbiAgICAgICAgdmlkZW8uc3JjT2JqZWN0ID0gX3N0cmVhbTtcbiAgICAgICAgdmlkZW8uc2V0QXR0cmlidXRlKCdhdXRvcGxheScsICcnKTtcbiAgICAgICAgdmlkZW8uc2V0QXR0cmlidXRlKCdtdXRlZCcsICcnKTtcbiAgICAgICAgdmlkZW8uc2V0QXR0cmlidXRlKCdwbGF5c2lubGluZScsICcnKTtcblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB2aWRlby5hZGRFdmVudExpc3RlbmVyKCdsb2FkZWRtZXRhZGF0YScsICgpID0+IHtcbiAgICAgICAgICAgIHZpZGVvLnBsYXkoKTtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSkpLnRoZW4oX3dhaXRGb3JWaWRlby5iaW5kKG51bGwsIHZpZGVvKSk7XG4gICAgfSxcblxuICAgIHJlbGVhc2UoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHRyYWNrcyA9IF9zdHJlYW0gJiYgX3N0cmVhbS5nZXRWaWRlb1RyYWNrcygpO1xuICAgICAgICBpZiAodHJhY2tzICYmIHRyYWNrcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRyYWNrc1swXS5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgICAgX3N0cmVhbSA9IG51bGw7XG4gICAgfSxcblxuICAgIGFzeW5jIGVudW1lcmF0ZVZpZGVvRGV2aWNlcygpOiBQcm9taXNlPEFycmF5PE1lZGlhRGV2aWNlSW5mbz4+IHtcbiAgICAgICAgY29uc3QgZGV2aWNlcyA9IGF3YWl0IGVudW1lcmF0ZURldmljZXMoKTtcbiAgICAgICAgcmV0dXJuIGRldmljZXMuZmlsdGVyKCh7IGtpbmQgfSkgPT4ga2luZCA9PT0gJ3ZpZGVvaW5wdXQnKTtcbiAgICB9LFxuXG4gICAgZ2V0QWN0aXZlU3RyZWFtTGFiZWwoKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgdHJhY2sgPSBDYW1lcmFBY2Nlc3MuZ2V0QWN0aXZlVHJhY2soKTtcbiAgICAgICAgcmV0dXJuIHRyYWNrID8gdHJhY2subGFiZWwgOiAnJztcbiAgICB9LFxuXG4gICAgZ2V0QWN0aXZlVHJhY2soKSB7XG4gICAgICAgIGNvbnN0IHRyYWNrcyA9IF9zdHJlYW0gJiYgX3N0cmVhbS5nZXRWaWRlb1RyYWNrcygpO1xuICAgICAgICBpZiAodHJhY2tzICYmIHRyYWNrcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB0cmFja3NbMF07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9LFxuXG4gICAgcGlja0NvbnN0cmFpbnRzKHZpZGVvQ29uc3RyYWludHM6IE1lZGlhVHJhY2tDb25zdHJhaW50cyk6IE1lZGlhU3RyZWFtQ29uc3RyYWludHMge1xuICAgICAgICBsZXQgeyB3aWR0aCwgaGVpZ2h0LCBmYWNpbmdNb2RlLCBhc3BlY3RSYXRpbywgZGV2aWNlSWQgfSA9IHZpZGVvQ29uc3RyYWludHM7XG4gICAgICAgIGNvbnN0IHsgbWluQXNwZWN0UmF0aW8sIGZhY2luZyB9ID0gdmlkZW9Db25zdHJhaW50cyBhcyBhbnk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBtaW5Bc3BlY3RSYXRpbyAhPT0gJ3VuZGVmaW5lZCcgJiYgbWluQXNwZWN0UmF0aW8gPiAwKSB7XG4gICAgICAgICAgICBhc3BlY3RSYXRpbyA9IG1pbkFzcGVjdFJhdGlvO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYFdBUk5JTkc6IENvbnN0cmFpbnQgJ21pbkFzcGVjdFJhdGlvJyBpcyBkZXByZWNhdGVkOyBVc2UgJ2FzcGVjdFJhdGlvJyBpbnN0ZWFkYCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGZhY2luZyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGZhY2luZ01vZGUgPSBmYWNpbmc7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgV0FSTklORzogQ29uc3RyYWludCAnZmFjaW5nJyBpcyBkZXByZWNhdGVkLiBVc2UgJ2ZhY2luZ01vZGUnIGluc3RlYWQnYCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBub3JtYWxpemVkQ29uc3RyYWludHMgPSBkZXZpY2VJZCAmJiBmYWNpbmdNb2RlID9cbiAgICAgICAgICAgIHsgd2lkdGgsIGhlaWdodCwgYXNwZWN0UmF0aW8sIGRldmljZUlkIH0gOiB7IHdpZHRoLCBoZWlnaHQsIGZhY2luZ01vZGUsIGFzcGVjdFJhdGlvLCBkZXZpY2VJZCB9O1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhdWRpbzogZmFsc2UsXG4gICAgICAgICAgICB2aWRlbzogbm9ybWFsaXplZENvbnN0cmFpbnRzXG4gICAgICAgIH07XG4gICAgfVxufVxuXG5mdW5jdGlvbiBfd2FpdEZvclZpZGVvKHsgdmlkZW9XaWR0aCwgdmlkZW9IZWlnaHQgfSk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGxldCBhdHRlbXB0cyA9IDEwO1xuXG4gICAgICAgIGZ1bmN0aW9uIGNoZWNrVmlkZW8oKSB7XG4gICAgICAgICAgICBpZiAoYXR0ZW1wdHMgPiAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZpZGVvV2lkdGggPiAxMCAmJiB2aWRlb0hlaWdodCA+IDEwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHt2aWRlb1dpZHRofXB4IHggJHt2aWRlb0hlaWdodH1weGApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dChjaGVja1ZpZGVvLCA1MDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KCdVbmFibGUgdG8gcGxheSB2aWRlbyBzdHJlYW0uIElzIHdlYmNhbSB3b3JraW5nPycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXR0ZW1wdHMtLTtcbiAgICAgICAgfVxuICAgICAgICBjaGVja1ZpZGVvKCk7XG4gICAgfSk7XG59XG4iLCIvKipcbiAqIEBib3Jyb3dzIGh0dHBzOi8vZ2l0aHViLmNvbS9leGlmLWpzL2V4aWYtanNcbiAqL1xuXG5jb25zdCBFeGlmVGFncyA9IHsgMHgwMTEyOiAnb3JpZW50YXRpb24nIH07XG5leHBvcnQgY29uc3QgQXZhaWxhYmxlVGFnczogQXJyYXk8c3RyaW5nPiA9IE9iamVjdC5rZXlzKEV4aWZUYWdzKS5tYXAoa2V5ID0+IEV4aWZUYWdzW2tleV0pO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRhZ3Mge1xuICAgIFtrZXk6IHN0cmluZ106IG51bWJlciB8IHN0cmluZztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZpbmRUYWdzSW5PYmplY3RVUkwoc3JjOiBzdHJpbmcsIHRhZ3MgPSBBdmFpbGFibGVUYWdzKTogUHJvbWlzZTxUYWdzPiB7XG4gICAgaWYgKC9eYmxvYjovaS50ZXN0KHNyYykpIHtcbiAgICAgICAgY29uc3QgYnVmZmVyID0gYXdhaXQgb2JqZWN0VVJMVG9CbG9iKHNyYyk7XG4gICAgICAgIHJldHVybiBmaW5kVGFnc0luQnVmZmVyKGJ1ZmZlciwgdGFncyk7XG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobnVsbCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kVGFnc0luQnVmZmVyKGZpbGU6IEFycmF5QnVmZmVyLCBzZWxlY3RlZFRhZ3M6IEFycmF5PHN0cmluZz4gPSBBdmFpbGFibGVUYWdzKTogVGFncyB7XG4gICAgY29uc3QgZGF0YVZpZXcgPSBuZXcgRGF0YVZpZXcoZmlsZSk7XG4gICAgY29uc3QgbGVuZ3RoID0gZmlsZS5ieXRlTGVuZ3RoO1xuICAgIGNvbnN0IGV4aWZUYWdzID0gc2VsZWN0ZWRUYWdzLnJlZHVjZSgocmVzdWx0LCBzZWxlY3RlZFRhZykgPT4ge1xuICAgICAgICBjb25zdCBleGlmVGFnID0gT2JqZWN0LmtleXMoRXhpZlRhZ3MpLmZpbmQodGFnID0+IEV4aWZUYWdzW3RhZ10gPT09IHNlbGVjdGVkVGFnKTtcbiAgICAgICAgaWYgKGV4aWZUYWcpIHtcbiAgICAgICAgICAgIHJlc3VsdFtleGlmVGFnXSA9IHNlbGVjdGVkVGFnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSwge30pO1xuICAgIGxldCBvZmZzZXQgPSAyO1xuXG4gICAgaWYgKChkYXRhVmlldy5nZXRVaW50OCgwKSAhPT0gMHhGRikgfHwgKGRhdGFWaWV3LmdldFVpbnQ4KDEpICE9PSAweEQ4KSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB3aGlsZSAob2Zmc2V0IDwgbGVuZ3RoKSB7XG4gICAgICAgIGlmIChkYXRhVmlldy5nZXRVaW50OChvZmZzZXQpICE9PSAweEZGKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG1hcmtlciA9IGRhdGFWaWV3LmdldFVpbnQ4KG9mZnNldCArIDEpO1xuICAgICAgICBpZiAobWFya2VyID09PSAweEUxKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVhZEVYSUZEYXRhKGRhdGFWaWV3LCBvZmZzZXQgKyA0LCBleGlmVGFncyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvZmZzZXQgKz0gMiArIGRhdGFWaWV3LmdldFVpbnQxNihvZmZzZXQgKyAyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xufVxuXG5hc3luYyBmdW5jdGlvbiBvYmplY3RVUkxUb0Jsb2IodXJsOiBzdHJpbmcpOiBQcm9taXNlPEFycmF5QnVmZmVyPiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuYXJyYXlCdWZmZXIoKTtcbiAgICB9XG5cbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0hUVFAgRXJyb3IgJyArIHJlc3BvbnNlLnN0YXR1cyk7XG59XG5cbmZ1bmN0aW9uIHJlYWRFWElGRGF0YShkYXRhVmlldzogRGF0YVZpZXcsIHN0YXJ0OiBudW1iZXIsIGV4aWZUYWdzOiB7IFtrZXk6IG51bWJlcl06IHN0cmluZyB9KTogVGFncyB7XG4gICAgaWYgKCdFeGlmJy5zcGxpdCgnJykuc29tZSgoY2hhciwgaW5kZXgpID0+IGRhdGFWaWV3LmdldFVpbnQ4KHN0YXJ0ICsgaW5kZXgpICE9PSBjaGFyLmNoYXJDb2RlQXQoMCkpKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHRpZmZPZmZzZXQgPSBzdGFydCArIDY7XG4gICAgbGV0IGJpZ0VuZDogYm9vbGVhbjtcblxuICAgIGlmIChkYXRhVmlldy5nZXRVaW50MTYodGlmZk9mZnNldCkgPT09IDB4NDk0OSkge1xuICAgICAgICBiaWdFbmQgPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKGRhdGFWaWV3LmdldFVpbnQxNih0aWZmT2Zmc2V0KSA9PT0gMHg0RDREKSB7XG4gICAgICAgIGJpZ0VuZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKGRhdGFWaWV3LmdldFVpbnQxNih0aWZmT2Zmc2V0ICsgMiwgIWJpZ0VuZCkgIT09IDB4MDAyQSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBmaXJzdElGRE9mZnNldCA9IGRhdGFWaWV3LmdldFVpbnQzMih0aWZmT2Zmc2V0ICsgNCwgIWJpZ0VuZCk7XG4gICAgaWYgKGZpcnN0SUZET2Zmc2V0IDwgMHgwMDAwMDAwOCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCB0YWdzID0gcmVhZFRhZ3MoZGF0YVZpZXcsIHRpZmZPZmZzZXQgKyBmaXJzdElGRE9mZnNldCwgZXhpZlRhZ3MsIGJpZ0VuZCk7XG4gICAgcmV0dXJuIHRhZ3M7XG59XG5cbmZ1bmN0aW9uIHJlYWRUYWdzKGRhdGFWaWV3OiBEYXRhVmlldywgZGlyU3RhcnQ6IG51bWJlciwgc3RyaW5nczogeyBba2V5OiBudW1iZXJdOiBzdHJpbmcgfSwgYmlnRW5kOiBib29sZWFuKTogVGFncyB7XG4gICAgY29uc3QgZW50cmllcyA9IGRhdGFWaWV3LmdldFVpbnQxNihkaXJTdGFydCwgIWJpZ0VuZCk7XG4gICAgY29uc3QgdGFnczogVGFncyA9IHt9O1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbnRyaWVzOyBpKyspIHtcbiAgICAgICAgY29uc3QgZW50cnlPZmZzZXQgPSBkaXJTdGFydCArIGkgKiAxMiArIDI7XG4gICAgICAgIGNvbnN0IHRhZyA9IHN0cmluZ3NbZGF0YVZpZXcuZ2V0VWludDE2KGVudHJ5T2Zmc2V0LCAhYmlnRW5kKV07XG4gICAgICAgIGlmICh0YWcpIHtcbiAgICAgICAgICAgIHRhZ3NbdGFnXSA9IHJlYWRUYWdWYWx1ZShkYXRhVmlldywgZW50cnlPZmZzZXQsIGJpZ0VuZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFncztcbn1cblxuZnVuY3Rpb24gcmVhZFRhZ1ZhbHVlKGRhdGFWaWV3OiBEYXRhVmlldywgZW50cnlPZmZzZXQ6IG51bWJlciwgYmlnRW5kOiBib29sZWFuKTogbnVtYmVyIHwgc3RyaW5nIHtcbiAgICBjb25zdCB0eXBlID0gZGF0YVZpZXcuZ2V0VWludDE2KGVudHJ5T2Zmc2V0ICsgMiwgIWJpZ0VuZCk7XG4gICAgY29uc3QgbnVtVmFsdWVzID0gZGF0YVZpZXcuZ2V0VWludDMyKGVudHJ5T2Zmc2V0ICsgNCwgIWJpZ0VuZCk7XG5cbiAgICByZXR1cm4gdHlwZSA9PT0gMyAmJiBudW1WYWx1ZXMgPT09IDEgPyBkYXRhVmlldy5nZXRVaW50MTYoZW50cnlPZmZzZXQgKyA4LCAhYmlnRW5kKSA6IHVuZGVmaW5lZDtcbn1cbiIsImltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi4vY29tbW9uL3BvaW50JztcbmltcG9ydCB7IElucHV0U3RyZWFtIH0gZnJvbSAnLi9pbnB1dC1zdHJlYW0nO1xuaW1wb3J0IHsgSW5wdXRTdHJlYW1Db25maWcgfSBmcm9tICcuL2lucHV0LXN0cmVhbS1jb25maWcnO1xuXG5jb25zdCBRVUFURVJfQ0lSQ0xFID0gTWF0aC5QSSAvIDI7XG5cbmV4cG9ydCBjbGFzcyBGcmFtZUdyYWJiZXIge1xuICAgIHByaXZhdGUgX2lucHV0U3RyZWFtOiBJbnB1dFN0cmVhbTtcbiAgICBwcml2YXRlIF9zdHJlYW1Db25maWc6IElucHV0U3RyZWFtQ29uZmlnO1xuICAgIHByaXZhdGUgX2NhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG4gICAgcHJpdmF0ZSBfY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuICAgIHByaXZhdGUgX2RhdGE6IFVpbnQ4QXJyYXk7XG4gICAgcHJpdmF0ZSBfY2FudmFzSGVpZ2h0OiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfY2FudmFzV2lkdGg6IG51bWJlcjtcbiAgICBwcml2YXRlIF9oZWlnaHQ6IG51bWJlcjtcbiAgICBwcml2YXRlIF93aWR0aDogbnVtYmVyO1xuICAgIHByaXZhdGUgX3RvcExlZnQ6IFBvaW50O1xuXG4gICAgY29uc3RydWN0b3IoaW5wdXRTdHJlYW06IElucHV0U3RyZWFtLCBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuX2lucHV0U3RyZWFtID0gaW5wdXRTdHJlYW07XG4gICAgICAgIHRoaXMuX3N0cmVhbUNvbmZpZyA9IGlucHV0U3RyZWFtLmNvbmZpZztcbiAgICAgICAgdGhpcy5fY2FudmFzV2lkdGggPSBpbnB1dFN0cmVhbS5jYW52YXNXaWR0aDtcbiAgICAgICAgdGhpcy5fY2FudmFzSGVpZ2h0ID0gaW5wdXRTdHJlYW0uY2FudmFzSGVpZ2h0O1xuICAgICAgICB0aGlzLl93aWR0aCA9IGlucHV0U3RyZWFtLndpZHRoO1xuICAgICAgICB0aGlzLl9oZWlnaHQgPSBpbnB1dFN0cmVhbS5oZWlnaHQ7XG4gICAgICAgIHRoaXMuX3RvcExlZnQgPSBpbnB1dFN0cmVhbS50b3BMZWZ0O1xuICAgICAgICB0aGlzLl9jYW52YXMgPSBjYW52YXMgfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgIHRoaXMuX2NhbnZhcy53aWR0aCA9IHRoaXMuX2NhbnZhc1dpZHRoO1xuICAgICAgICB0aGlzLl9jYW52YXMuaGVpZ2h0ID0gdGhpcy5fY2FudmFzSGVpZ2h0O1xuICAgICAgICB0aGlzLl9jb250ZXh0ID0gdGhpcy5fY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIHRoaXMuX2RhdGEgPSBuZXcgVWludDhBcnJheSh0aGlzLl93aWR0aCAqIHRoaXMuX2hlaWdodCk7XG5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdGcmFtZUdyYWJiZXInLCBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgc2l6ZToge1xuICAgICAgICAgICAgICAgICAgICB4OiB0aGlzLl93aWR0aCxcbiAgICAgICAgICAgICAgICAgICAgeTogdGhpcy5faGVpZ2h0XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0b3BMZWZ0OiB0aGlzLl90b3BMZWZ0LFxuICAgICAgICAgICAgICAgIHZpZGVvU2l6ZToge1xuICAgICAgICAgICAgICAgICAgICB4OiBpbnB1dFN0cmVhbS5yZWFsV2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIHk6IGlucHV0U3RyZWFtLnJlYWxIZWlnaHRcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNhbnZhc1NpemU6IHtcbiAgICAgICAgICAgICAgICAgICAgeDogdGhpcy5fY2FudmFzV2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIHk6IHRoaXMuX2NhbnZhc0hlaWdodFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVzZXMgdGhlIGdpdmVuIGFycmF5IGFzIGZyYW1lLWJ1ZmZlclxuICAgICAqL1xuICAgIGF0dGFjaERhdGEoZGF0YTogVWludDhBcnJheSk6IHZvaWQge1xuICAgICAgICB0aGlzLl9kYXRhID0gZGF0YTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGZXRjaGVzIGEgZnJhbWUgZnJvbSB0aGUgaW5wdXQtc3RyZWFtIGFuZCBwdXRzIGludG8gdGhlIGZyYW1lLWJ1ZmZlci5cbiAgICAgKiBUaGUgaW1hZ2UtZGF0YSBpcyBjb252ZXJ0ZWQgdG8gZ3JheS1zY2FsZSBhbmQgdGhlbiBoYWxmLXNhbXBsZWQgaWYgY29uZmlndXJlZC5cbiAgICAgKi9cbiAgICBncmFiKCk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBmcmFtZSA9IHRoaXMuX2lucHV0U3RyZWFtLmdldEZyYW1lKCk7XG5cbiAgICAgICAgaWYgKGZyYW1lKSB7XG4gICAgICAgICAgICB0aGlzLl9hZGp1c3RDYW52YXNTaXplKCk7XG5cbiAgICAgICAgICAgIGxldCBkcmF3YWJsZTogSFRNTEltYWdlRWxlbWVudCB8IEhUTUxWaWRlb0VsZW1lbnQ7XG4gICAgICAgICAgICBsZXQgZHJhd0FuZ2xlID0gMDtcblxuICAgICAgICAgICAgaWYgKGZyYW1lIGluc3RhbmNlb2YgSFRNTFZpZGVvRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGRyYXdhYmxlID0gZnJhbWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRyYXdhYmxlID0gZnJhbWUuaW1hZ2U7XG5cbiAgICAgICAgICAgICAgICBpZiAoZnJhbWUudGFncykge1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGZyYW1lLnRhZ3Mub3JpZW50YXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyYXdBbmdsZSA9IFFVQVRFUl9DSVJDTEU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDg6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcmF3QW5nbGUgPSAtUVVBVEVSX0NJUkNMRTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGRyYXdBbmdsZSAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGhhbGZXaWR0aCA9IHRoaXMuX2NhbnZhc1dpZHRoID4+IDE7XG4gICAgICAgICAgICAgICAgY29uc3QgaGFsZkhlaWdodCA9IHRoaXMuX2NhbnZhc0hlaWdodCA+PiAxO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5fY29udGV4dC50cmFuc2xhdGUoaGFsZldpZHRoLCBoYWxmSGVpZ2h0KTtcbiAgICAgICAgICAgICAgICB0aGlzLl9jb250ZXh0LnJvdGF0ZShkcmF3QW5nbGUpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2NvbnRleHQuZHJhd0ltYWdlKGRyYXdhYmxlLCAtaGFsZkhlaWdodCwgLWhhbGZXaWR0aCwgdGhpcy5fY2FudmFzSGVpZ2h0LCB0aGlzLl9jYW52YXNXaWR0aCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fY29udGV4dC5yb3RhdGUoLWRyYXdBbmdsZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fY29udGV4dC50cmFuc2xhdGUoLWhhbGZXaWR0aCwgLWhhbGZIZWlnaHQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jb250ZXh0LmRyYXdJbWFnZShkcmF3YWJsZSwgMCwgMCwgdGhpcy5fY2FudmFzV2lkdGgsIHRoaXMuX2NhbnZhc0hlaWdodCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGltYWdlRGF0YSA9IHRoaXMuX2NvbnRleHQuZ2V0SW1hZ2VEYXRhKHRoaXMuX3RvcExlZnQueCwgdGhpcy5fdG9wTGVmdC55LCB0aGlzLl93aWR0aCwgdGhpcy5faGVpZ2h0KS5kYXRhO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5fc3RyZWFtQ29uZmlnLmhhbGZTYW1wbGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9ncmF5QW5kSGFsZlNhbXBsZUZyb21DYW52YXNEYXRhKGltYWdlRGF0YSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NvbXB1dGVHcmF5KGltYWdlRGF0YSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfYWRqdXN0Q2FudmFzU2l6ZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuX2NhbnZhcy5oZWlnaHQgIT09IHRoaXMuX2NhbnZhc0hlaWdodCB8fCB0aGlzLl9jYW52YXMud2lkdGggIT09IHRoaXMuX2NhbnZhc1dpZHRoKSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignQ2FudmFzIHNpemUgbmVlZHMgdG8gYmUgYWRqdXN0ZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2NhbnZhcy5oZWlnaHQgPSB0aGlzLl9jYW52YXNIZWlnaHQ7XG4gICAgICAgICAgICB0aGlzLl9jYW52YXMud2lkdGggPSB0aGlzLl9jYW52YXNXaWR0aDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX2dyYXlBbmRIYWxmU2FtcGxlRnJvbUNhbnZhc0RhdGEoaW1hZ2VEYXRhOiBVaW50OENsYW1wZWRBcnJheSk6IHZvaWQge1xuICAgICAgICBjb25zdCBlbmRJbmRleCA9IGltYWdlRGF0YS5sZW5ndGggPj4gMjtcbiAgICAgICAgY29uc3Qgb3V0V2lkdGggPSB0aGlzLl93aWR0aCA+PiAxO1xuICAgICAgICBsZXQgdG9wUm93SW5kZXggPSAwO1xuICAgICAgICBsZXQgYm90dG9tUm93SW5kZXggPSB0aGlzLl93aWR0aDtcbiAgICAgICAgbGV0IG91dEltYWdlSW5kZXggPSAwO1xuXG4gICAgICAgIHdoaWxlIChib3R0b21Sb3dJbmRleCA8IGVuZEluZGV4KSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG91dFdpZHRoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0b3A0ID0gdG9wUm93SW5kZXggPDwgMjtcbiAgICAgICAgICAgICAgICBjb25zdCBib3R0b200ID0gYm90dG9tUm93SW5kZXggPDwgMjtcbiAgICAgICAgICAgICAgICB0aGlzLl9kYXRhW291dEltYWdlSW5kZXhdID0gKFxuICAgICAgICAgICAgICAgICAgICAoMC4yOTkgKiBpbWFnZURhdGFbdG9wNCArIDBdICsgMC41ODcgKiBpbWFnZURhdGFbdG9wNCArIDFdICsgMC4xMTQgKiBpbWFnZURhdGFbdG9wNCArIDJdKSArXG4gICAgICAgICAgICAgICAgICAgICgwLjI5OSAqIGltYWdlRGF0YVt0b3A0ICsgNF0gKyAwLjU4NyAqIGltYWdlRGF0YVt0b3A0ICsgNV0gKyAwLjExNCAqIGltYWdlRGF0YVt0b3A0ICsgNl0pICtcbiAgICAgICAgICAgICAgICAgICAgKDAuMjk5ICogaW1hZ2VEYXRhW2JvdHRvbTQgKyAwXSArIDAuNTg3ICogaW1hZ2VEYXRhW2JvdHRvbTQgKyAxXSArIDAuMTE0ICogaW1hZ2VEYXRhW2JvdHRvbTQgKyAyXSkgK1xuICAgICAgICAgICAgICAgICAgICAoMC4yOTkgKiBpbWFnZURhdGFbYm90dG9tNCArIDRdICsgMC41ODcgKiBpbWFnZURhdGFbYm90dG9tNCArIDVdICsgMC4xMTQgKiBpbWFnZURhdGFbYm90dG9tNCArIDZdKVxuICAgICAgICAgICAgICAgICkgLyA0IHwgMDtcbiAgICAgICAgICAgICAgICBvdXRJbWFnZUluZGV4Kys7XG4gICAgICAgICAgICAgICAgdG9wUm93SW5kZXggKz0gMjtcbiAgICAgICAgICAgICAgICBib3R0b21Sb3dJbmRleCArPSAyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdG9wUm93SW5kZXggKz0gdGhpcy5fd2lkdGg7XG4gICAgICAgICAgICBib3R0b21Sb3dJbmRleCArPSB0aGlzLl93aWR0aDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX2NvbXB1dGVHcmF5KGltYWdlRGF0YTogVWludDhDbGFtcGVkQXJyYXkpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgaW1hZ2VEYXRhTGVuZ3RoID0gaW1hZ2VEYXRhLmxlbmd0aDtcblxuICAgICAgICBpZiAodGhpcy5fc3RyZWFtQ29uZmlnICYmIHRoaXMuX3N0cmVhbUNvbmZpZy5zaW5nbGVDaGFubmVsKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgaiA9IDA7IGkgPCBpbWFnZURhdGFMZW5ndGg7IGkgKz0gNCwgaisrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGF0YVtqXSA9IGltYWdlRGF0YVtpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBqID0gMDsgaSA8IGltYWdlRGF0YUxlbmd0aDsgaSArPSA0LCBqKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9kYXRhW2pdID0gMC4yOTkgKiBpbWFnZURhdGFbaV0gKyAwLjU4NyAqIGltYWdlRGF0YVtpICsgMV0gKyAwLjExNCAqIGltYWdlRGF0YVtpICsgMl0gfCAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgZmluZFRhZ3NJbk9iamVjdFVSTCwgVGFncyB9IGZyb20gJy4vZXhpZi1oZWxwZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEltYWdlSW5mbyB7XG4gICAgaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQ7XG4gICAgdGFncz86IFRhZ3M7XG59XG5cbmV4cG9ydCBjbGFzcyBJbWFnZUxvYWRlciB7XG4gICAgc3RhdGljIGFzeW5jIGxvYWQoXG4gICAgICAgIGJhc2VVcmk6IHN0cmluZyxcbiAgICAgICAgY2FsbGJhY2s6IChfOiBBcnJheTxJbWFnZUluZm8+KSA9PiB2b2lkLFxuICAgICAgICBvZmZzZXQ6IG51bWJlcixcbiAgICAgICAgc2l6ZTogbnVtYmVyLFxuICAgICAgICBzZXF1ZW5jZTogYm9vbGVhblxuICAgICk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBjb25zdCBpbWFnZVNyY3MgPSBuZXcgQXJyYXk8c3RyaW5nPihzaXplKTtcbiAgICAgICAgY29uc3QgbG9hZGVkSW1hZ2VzID0gbmV3IEFycmF5PEltYWdlSW5mbz4oc2l6ZSk7XG4gICAgICAgIGNvbnN0IG5vdExvYWRlZEltYWdlcyA9IG5ldyBBcnJheTxIVE1MSW1hZ2VFbGVtZW50PigpO1xuXG4gICAgICAgIGlmIChzZXF1ZW5jZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGltYWdlU3Jjc1swXSA9IGJhc2VVcmk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICAgICAgICAgIGltYWdlU3Jjc1tpXSA9IGAke2Jhc2VVcml9aW1hZ2UtJHsoJzAwJyArIChvZmZzZXQgKyBpKSkuc2xpY2UoLTMpfS5qcGdgO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaW1hZ2VTcmNzLmZvckVhY2goc3JjID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICBub3RMb2FkZWRJbWFnZXMucHVzaChpbWFnZSk7XG4gICAgICAgICAgICBpbWFnZS5vbmxvYWQgPSAoKSA9PiBsb2FkZWQoaW1hZ2UpO1xuICAgICAgICAgICAgaW1hZ2Uuc3JjID0gc3JjO1xuICAgICAgICB9KTtcblxuICAgICAgICBhc3luYyBmdW5jdGlvbiBsb2FkZWQobG9hZGVkSW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgbm90TG9hZGVkSW1hZ2VzLmxlbmd0aDsgeCsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5vdExvYWRlZEltYWdlc1t4XSA9PT0gbG9hZGVkSW1hZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgbm90TG9hZGVkSW1hZ2VzLnNwbGljZSh4LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogYXNzdW1lIHRoZSBpbmRleCBpcyB0aGUgc2FtZVxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGltYWdlU3Jjcy5sZW5ndGg7IHkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1hZ2VOYW1lID0gaW1hZ2VTcmNzW3ldLnN1YnN0cihpbWFnZVNyY3NbeV0ubGFzdEluZGV4T2YoJy8nKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobG9hZGVkSW1hZ2Uuc3JjLmxhc3RJbmRleE9mKGltYWdlTmFtZSkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGVkSW1hZ2VzW3ldID0geyBpbWFnZTogbG9hZGVkSW1hZ2UgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobm90TG9hZGVkSW1hZ2VzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdJbWFnZXMgbG9hZGVkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZXF1ZW5jZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpcnN0SW1hZ2UgPSBsb2FkZWRJbWFnZXNbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICBmaXJzdEltYWdlLnRhZ3MgPSBhd2FpdCBmaW5kVGFnc0luT2JqZWN0VVJMKGJhc2VVcmkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXgpO1xuICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGxvYWRlZEltYWdlcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgSW1hZ2VJbmZvLCBJbWFnZUxvYWRlciB9IGZyb20gJy4vaW1hZ2UtbG9hZGVyJztcbmltcG9ydCB7IElucHV0U3RyZWFtIH0gZnJvbSAnLi9pbnB1dC1zdHJlYW0nO1xuaW1wb3J0IHsgSW5wdXRTdHJlYW1Db25maWcgfSBmcm9tICcuL2lucHV0LXN0cmVhbS1jb25maWcnO1xuXG5leHBvcnQgY2xhc3MgSW1hZ2VTdHJlYW0gZXh0ZW5kcyBJbnB1dFN0cmVhbSB7XG4gICAgcHJpdmF0ZSBfYmFzZVVybDogc3RyaW5nO1xuICAgIHByaXZhdGUgX2VuZGVkOiBib29sZWFuO1xuICAgIHByaXZhdGUgX2ZyYW1lSW5kZXg6IG51bWJlcjtcbiAgICBwcml2YXRlIF9oZWlnaHQ6IG51bWJlcjtcbiAgICBwcml2YXRlIF9pbWFnZXM6IEFycmF5PEltYWdlSW5mbz47XG4gICAgcHJpdmF0ZSBfbG9hZGVkOiBib29sZWFuO1xuICAgIHByaXZhdGUgX29mZnNldDogbnVtYmVyO1xuICAgIHByaXZhdGUgX3BhdXNlZDogYm9vbGVhbjtcbiAgICBwcml2YXRlIF9zaXplOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfd2lkdGg6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuX2NhbnZhc0hlaWdodCA9IDA7XG4gICAgICAgIHRoaXMuX2NhbnZhc1dpZHRoID0gMDtcbiAgICAgICAgdGhpcy5fYmFzZVVybCA9IG51bGw7XG4gICAgICAgIHRoaXMuX2VuZGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2ZyYW1lSW5kZXggPSAwO1xuICAgICAgICB0aGlzLl9oZWlnaHQgPSAwO1xuICAgICAgICB0aGlzLl9pbWFnZXMgPSBudWxsO1xuICAgICAgICB0aGlzLl9sb2FkZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fb2Zmc2V0ID0gMTtcbiAgICAgICAgdGhpcy5fcGF1c2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fc2l6ZSA9IDA7XG4gICAgICAgIHRoaXMuX3dpZHRoID0gMDtcbiAgICB9XG5cbiAgICBnZXQgcmVhbEhlaWdodCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5faGVpZ2h0O1xuICAgIH1cblxuICAgIGdldCByZWFsV2lkdGgoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dpZHRoO1xuICAgIH1cblxuICAgIGdldCBjb25maWcoKTogSW5wdXRTdHJlYW1Db25maWcge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29uZmlnO1xuICAgIH1cblxuICAgIHNldCBjb25maWcoY29uZmlnOiBJbnB1dFN0cmVhbUNvbmZpZykge1xuICAgICAgICB0aGlzLl9jb25maWcgPSB7IC4uLmNvbmZpZyB9O1xuICAgICAgICB0aGlzLl9iYXNlVXJsID0gY29uZmlnLnNyYztcbiAgICAgICAgdGhpcy5fc2l6ZSA9IGNvbmZpZy5zZXF1ZW5jZSAmJiBjb25maWcubGVuZ3RoID8gY29uZmlnLmxlbmd0aCA6IDE7XG5cbiAgICAgICAgdGhpcy5fbG9hZEltYWdlcygpO1xuICAgIH1cblxuICAgIGdldCBlbmRlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VuZGVkO1xuICAgIH1cblxuICAgIHNldEF0dHJpYnV0ZSgpIHsgfVxuXG4gICAgcGF1c2UoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3BhdXNlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcGxheSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fcGF1c2VkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgc2V0IGN1cnJlbnRUaW1lKHRpbWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9mcmFtZUluZGV4ID0gdGltZTtcbiAgICB9XG5cbiAgICBnZXRGcmFtZSgpOiBIVE1MVmlkZW9FbGVtZW50IHwgSW1hZ2VJbmZvIHtcbiAgICAgICAgbGV0IGZyYW1lOiBJbWFnZUluZm8gPSBudWxsO1xuXG4gICAgICAgIGlmICh0aGlzLl9sb2FkZWQgJiYgIXRoaXMuX3BhdXNlZCkge1xuICAgICAgICAgICAgZnJhbWUgPSB0aGlzLl9pbWFnZXNbdGhpcy5fZnJhbWVJbmRleF07XG5cbiAgICAgICAgICAgIGlmICh0aGlzLl9mcmFtZUluZGV4IDwgKHRoaXMuX3NpemUgLSAxKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2ZyYW1lSW5kZXgrKztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2VuZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyKCdlbmRlZCcsIFtdKTtcbiAgICAgICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmcmFtZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9sb2FkSW1hZ2VzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9sb2FkZWQgPSBmYWxzZTtcbiAgICAgICAgSW1hZ2VMb2FkZXIubG9hZCh0aGlzLl9iYXNlVXJsLCBpbWFnZXMgPT4ge1xuICAgICAgICAgICAgdGhpcy5faW1hZ2VzID0gaW1hZ2VzO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKGltYWdlc1swXS50YWdzICYmIGltYWdlc1swXS50YWdzLm9yaWVudGF0aW9uKSB7XG4gICAgICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgIGNhc2UgODoge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl93aWR0aCA9IGltYWdlc1swXS5pbWFnZS5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2hlaWdodCA9IGltYWdlc1swXS5pbWFnZS53aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fd2lkdGggPSBpbWFnZXNbMF0uaW1hZ2Uud2lkdGg7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2hlaWdodCA9IGltYWdlc1swXS5pbWFnZS5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9jYW52YXNXaWR0aCA9IHRoaXMuX2NhbGN1bGF0ZWRXaWR0aCA9IHRoaXMuX2NvbmZpZy5zaXplID8gdGhpcy5fd2lkdGggPiB0aGlzLl9oZWlnaHQgP1xuICAgICAgICAgICAgICAgIHRoaXMuX2NvbmZpZy5zaXplIDogdGhpcy5fd2lkdGggKiB0aGlzLl9jb25maWcuc2l6ZSAvIHRoaXMuX2hlaWdodCB8IDAgOiB0aGlzLl93aWR0aDtcbiAgICAgICAgICAgIHRoaXMuX2NhbnZhc0hlaWdodCA9IHRoaXMuX2NhbGN1bGF0ZWRIZWlnaHQgPSB0aGlzLl9jb25maWcuc2l6ZSA/IHRoaXMuX3dpZHRoID4gdGhpcy5faGVpZ2h0ID9cbiAgICAgICAgICAgICAgICB0aGlzLl9oZWlnaHQgKiB0aGlzLl9jb25maWcuc2l6ZSAvIHRoaXMuX3dpZHRoIHwgMCA6IHRoaXMuX2NvbmZpZy5zaXplIDogdGhpcy5faGVpZ2h0O1xuICAgICAgICAgICAgdGhpcy5fbG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuX2ZyYW1lSW5kZXggPSAwO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnRyaWdnZXIoJ2NhbnJlY29yZCcsIFtdKSwgMCk7XG4gICAgICAgIH0sIHRoaXMuX29mZnNldCwgdGhpcy5fc2l6ZSwgdGhpcy5fY29uZmlnLnNlcXVlbmNlKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBQb2ludCB9IGZyb20gJy4uL2NvbW1vbi9wb2ludCc7XG5pbXBvcnQgeyBCYXJjb2RlTG9jYXRvckNvbmZpZywgUGF0Y2hTaXplQ29uZmlnIH0gZnJvbSAnLi4vbG9jYXRvci9iYXJjb2RlLWxvY2F0b3ItY29uZmlnJztcbmltcG9ydCB7IElucHV0U3RyZWFtIH0gZnJvbSAnLi9pbnB1dC1zdHJlYW0nO1xuaW1wb3J0IHsgQXJlYUNvbmZpZyB9IGZyb20gJy4vaW5wdXQtc3RyZWFtLWNvbmZpZyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGltZW5zaW9uIHtcbiAgICB1bml0OiAnJScgfCAncHgnLFxuICAgIHZhbHVlOiBudW1iZXI7XG59XG5cbmZ1bmN0aW9uIF9jb21wdXRlRGl2aXNvcnMobjogbnVtYmVyKTogQXJyYXk8bnVtYmVyPiB7XG4gICAgY29uc3QgZGl2aXNvcnMgPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xuICAgIGNvbnN0IGxhcmdlRGl2aXNvcnMgPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xuXG4gICAgZm9yIChsZXQgZGl2aXNvciA9IDE7IGRpdmlzb3IgKiBkaXZpc29yIDw9IG47IGRpdmlzb3IrKykge1xuICAgICAgICBpZiAobiAlIGRpdmlzb3IgPT09IDApIHtcbiAgICAgICAgICAgIGRpdmlzb3JzLnB1c2goZGl2aXNvcik7XG4gICAgICAgICAgICBpZiAoZGl2aXNvciAqIGRpdmlzb3IgIT09IG4pIHtcbiAgICAgICAgICAgICAgICBsYXJnZURpdmlzb3JzLnVuc2hpZnQobiAvIGRpdmlzb3IgfCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkaXZpc29ycy5jb25jYXQobGFyZ2VEaXZpc29ycyk7XG59XG5cbmZ1bmN0aW9uIF9jb21wdXRlQ29tbW9uRGl2aXNvcnMobTogbnVtYmVyLCBuOiBudW1iZXIpOiBBcnJheTxudW1iZXI+IHtcbiAgICBpZiAobSA9PT0gbikge1xuICAgICAgICByZXR1cm4gX2NvbXB1dGVEaXZpc29ycyhtKTtcbiAgICB9XG5cbiAgICBjb25zdCBtYXggPSBtID4gbiA/IG0gOiBuO1xuICAgIGNvbnN0IG1pbiA9IG0gPiBuID8gbiA6IG07XG4gICAgY29uc3QgZGl2aXNvcnMgPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xuICAgIGNvbnN0IGxhcmdlRGl2aXNvcnMgPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xuXG4gICAgZm9yIChsZXQgZGl2aXNvciA9IDE7IGRpdmlzb3IgKiBkaXZpc29yIDw9IG1pbjsgZGl2aXNvcisrKSB7XG4gICAgICAgIGlmIChtYXggJSBkaXZpc29yID09PSAwICYmIG1pbiAlIGRpdmlzb3IgPT09IDApIHtcbiAgICAgICAgICAgIGRpdmlzb3JzLnB1c2goZGl2aXNvcik7XG4gICAgICAgICAgICBjb25zdCBsYXJnZURpdmlzb3IgPSBtaW4gLyBkaXZpc29yIHwgMDtcbiAgICAgICAgICAgIGlmIChkaXZpc29yICE9PSBsYXJnZURpdmlzb3IgJiYgbWF4ICUgbGFyZ2VEaXZpc29yID09PSAwKSB7XG4gICAgICAgICAgICAgICAgbGFyZ2VEaXZpc29ycy51bnNoaWZ0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGl2aXNvcnMuY29uY2F0KGxhcmdlRGl2aXNvcnMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlUGF0Y2hTaXplKHBhdGNoU2l6ZTogUGF0Y2hTaXplQ29uZmlnLCB7IHgsIHkgfTogUG9pbnQpOiBQb2ludCB7XG4gICAgY29uc3Qgd2lkZVNpZGUgPSBNYXRoLm1heCh4IHwgMCwgeSB8IDApIHwgMDtcbiAgICBjb25zdCBuck9mUGF0Y2hlc0xpc3QgPSBbOCwgMTAsIDE1LCAyMCwgMzIsIDYwLCA4MF07XG4gICAgY29uc3QgbnJPZlBhdGNoZXNNYXAgPSB7XG4gICAgICAgICd4LXNtYWxsJzogNSxcbiAgICAgICAgc21hbGw6IDQsXG4gICAgICAgIG1lZGl1bTogMyxcbiAgICAgICAgbGFyZ2U6IDIsXG4gICAgICAgICd4LWxhcmdlJzogMVxuICAgIH07XG4gICAgY29uc3QgbnJPZlBhdGNoZXNJbmRleCA9IG5yT2ZQYXRjaGVzTWFwW3BhdGNoU2l6ZV0gfHwgbnJPZlBhdGNoZXNNYXAubWVkaXVtIHwgMDtcbiAgICBjb25zdCBuck9mUGF0Y2hlcyA9IG5yT2ZQYXRjaGVzTGlzdFtuck9mUGF0Y2hlc0luZGV4XSB8IDA7XG4gICAgY29uc3QgZGVzaXJlZFBhdGNoU2l6ZSA9IHdpZGVTaWRlIC8gbnJPZlBhdGNoZXMgfCAwO1xuXG4gICAgZnVuY3Rpb24gZmluZFBhdGNoU2l6ZUZvckRpdmlzb3JzKGRpdmlzb3JzOiBBcnJheTxudW1iZXI+KTogUG9pbnQge1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIGxldCBmb3VuZCA9IGRpdmlzb3JzW2Rpdmlzb3JzLmxlbmd0aCA+PiAxXSB8IDA7XG5cbiAgICAgICAgd2hpbGUgKGkgPCAoZGl2aXNvcnMubGVuZ3RoIC0gMSkgJiYgZGl2aXNvcnNbaV0gPCBkZXNpcmVkUGF0Y2hTaXplKSB7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGkgPiAwKSB7XG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoZGl2aXNvcnNbaV0gLSBkZXNpcmVkUGF0Y2hTaXplKSA+IE1hdGguYWJzKGRpdmlzb3JzW2kgLSAxXSAtIGRlc2lyZWRQYXRjaFNpemUpKSB7XG4gICAgICAgICAgICAgICAgZm91bmQgPSBkaXZpc29yc1tpIC0gMV0gfCAwO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3VuZCA9IGRpdmlzb3JzW2ldIHwgMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZGVzaXJlZFBhdGNoU2l6ZSAvIGZvdW5kIDwgbnJPZlBhdGNoZXNMaXN0W25yT2ZQYXRjaGVzSW5kZXggKyAxXSAvIG5yT2ZQYXRjaGVzTGlzdFtuck9mUGF0Y2hlc0luZGV4XSAmJlxuICAgICAgICAgICAgZGVzaXJlZFBhdGNoU2l6ZSAvIGZvdW5kID4gbnJPZlBhdGNoZXNMaXN0W25yT2ZQYXRjaGVzSW5kZXggLSAxXSAvIG5yT2ZQYXRjaGVzTGlzdFtuck9mUGF0Y2hlc0luZGV4XSkge1xuICAgICAgICAgICAgcmV0dXJuIHsgeDogZm91bmQsIHk6IGZvdW5kIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3Qgb3B0aW1hbFBhdGNoU2l6ZSA9IGZpbmRQYXRjaFNpemVGb3JEaXZpc29ycyhfY29tcHV0ZUNvbW1vbkRpdmlzb3JzKHgsIHkpKSB8fFxuICAgICAgICBmaW5kUGF0Y2hTaXplRm9yRGl2aXNvcnMoX2NvbXB1dGVEaXZpc29ycyh3aWRlU2lkZSkpIHx8XG4gICAgICAgIGZpbmRQYXRjaFNpemVGb3JEaXZpc29ycyhfY29tcHV0ZURpdmlzb3JzKGRlc2lyZWRQYXRjaFNpemUgKiBuck9mUGF0Y2hlcykpO1xuXG4gICAgcmV0dXJuIG9wdGltYWxQYXRjaFNpemU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0ltYWdlQ29uc3RyYWludHMoaW5wdXRTdHJlYW06IElucHV0U3RyZWFtLCBjb25maWc6IEJhcmNvZGVMb2NhdG9yQ29uZmlnKSB7XG4gICAgbGV0IHdpZHRoID0gaW5wdXRTdHJlYW0ud2lkdGg7XG4gICAgbGV0IGhlaWdodCA9IGlucHV0U3RyZWFtLmhlaWdodDtcbiAgICBjb25zdCBzaGlmdCA9IGNvbmZpZy5oYWxmU2FtcGxlID8gMSA6IDAgfCAwO1xuICAgIGNvbnN0IGlucHV0U3RyZWFtQ29uZmlnID0gaW5wdXRTdHJlYW0uY29uZmlnO1xuXG4gICAgLy8gY2FsY3VsYXRlIHdpZHRoIGFuZCBoZWlnaHQgYmFzZWQgb24gYXJlYVxuICAgIGlmIChpbnB1dFN0cmVhbUNvbmZpZyAmJiBpbnB1dFN0cmVhbUNvbmZpZy5hcmVhKSB7XG4gICAgICAgIGNvbnN0IGFyZWEgPSBjb21wdXRlSW1hZ2VBcmVhKHdpZHRoLCBoZWlnaHQsIGlucHV0U3RyZWFtQ29uZmlnLmFyZWEpO1xuICAgICAgICBpbnB1dFN0cmVhbS50b3BMZWZ0ID0gYXJlYS50b3BMZWZ0O1xuICAgICAgICBpbnB1dFN0cmVhbS5zZXRDYW52YXNTaXplKHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICB3aWR0aCA9IGFyZWEud2lkdGg7XG4gICAgICAgIGhlaWdodCA9IGFyZWEuaGVpZ2h0O1xuICAgIH1cblxuICAgIGNvbnN0IHNpemUgPSB7XG4gICAgICAgIHg6IHdpZHRoID4+IHNoaWZ0LFxuICAgICAgICB5OiBoZWlnaHQgPj4gc2hpZnRcbiAgICB9O1xuXG4gICAgY29uc3QgcGF0Y2hTaXplID0gY2FsY3VsYXRlUGF0Y2hTaXplKGNvbmZpZy5wYXRjaFNpemUsIHNpemUpO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdQYXRjaC1TaXplOicsIEpTT04uc3RyaW5naWZ5KHBhdGNoU2l6ZSkpO1xuICAgIH1cblxuICAgIGlucHV0U3RyZWFtLndpZHRoID0gKHNpemUueCAvIHBhdGNoU2l6ZS54IDw8IHNoaWZ0KSAqIHBhdGNoU2l6ZS54IHwgMDtcbiAgICBpbnB1dFN0cmVhbS5oZWlnaHQgPSAoc2l6ZS55IC8gcGF0Y2hTaXplLnkgPDwgc2hpZnQpICogcGF0Y2hTaXplLnkgfCAwO1xuXG4gICAgaWYgKChpbnB1dFN0cmVhbS53aWR0aCAlIHBhdGNoU2l6ZS54KSA9PT0gMCAmJiAoaW5wdXRTdHJlYW0uaGVpZ2h0ICUgcGF0Y2hTaXplLnkpID09PSAwKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXG4gICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSBkaW1lbnNpb25zIGRvIG5vdCBjb21wbHkgd2l0aCB0aGUgY3VycmVudCBzZXR0aW5nczogd2lkdGggKCR7d2lkdGh9KSBhbmQgaGVpZ2h0ICgke2hlaWdodH0pIG11c3QgYmUgYSBtdWx0aXBsZSBvZiAke3BhdGNoU2l6ZS54fWApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX3BhcnNlQ3NzRGltZW5zaW9uVmFsdWVzKHZhbHVlOiBzdHJpbmcpOiBEaW1lbnNpb24ge1xuICAgIGNvbnN0IGRpbWVuc2lvbjogRGltZW5zaW9uID0ge1xuICAgICAgICB2YWx1ZTogcGFyc2VGbG9hdCh2YWx1ZSksXG4gICAgICAgIHVuaXQ6IHZhbHVlLmluZGV4T2YoJyUnKSA9PT0gdmFsdWUubGVuZ3RoIC0gMSA/ICclJyA6IHZhbHVlLmluZGV4T2YoJ3B4JykgPT09IHZhbHVlLmxlbmd0aCAtIDIgPyAncHgnIDogJyUnXG4gICAgfTtcblxuICAgIHJldHVybiBkaW1lbnNpb247XG59XG5cbmV4cG9ydCBjb25zdCBfZGltZW5zaW9uc0NvbnZlcnRlcnMgPSB7XG4gICAgYm90dG9tOiAoZGltZW5zaW9uOiBEaW1lbnNpb24sIHsgaGVpZ2h0IH0pID0+IGRpbWVuc2lvbi51bml0ID09PSAnJScgP1xuICAgICAgICBoZWlnaHQgLSBoZWlnaHQgKiBkaW1lbnNpb24udmFsdWUgLyAxMDAgfCAwIDogZGltZW5zaW9uLnVuaXQgPT09ICdweCcgPyBoZWlnaHQgLSBkaW1lbnNpb24udmFsdWUgOiBoZWlnaHQsXG4gICAgbGVmdDogKGRpbWVuc2lvbjogRGltZW5zaW9uLCB7IHdpZHRoIH0pID0+IGRpbWVuc2lvbi51bml0ID09PSAnJScgP1xuICAgICAgICB3aWR0aCAqIGRpbWVuc2lvbi52YWx1ZSAvIDEwMCB8IDAgOiBkaW1lbnNpb24udW5pdCA9PT0gJ3B4JyA/IGRpbWVuc2lvbi52YWx1ZSA6IDAsXG4gICAgcmlnaHQ6IChkaW1lbnNpb246IERpbWVuc2lvbiwgeyB3aWR0aCB9KSA9PiBkaW1lbnNpb24udW5pdCA9PT0gJyUnID9cbiAgICAgICAgd2lkdGggLSB3aWR0aCAqIGRpbWVuc2lvbi52YWx1ZSAvIDEwMCB8IDAgOiBkaW1lbnNpb24udW5pdCA9PT0gJ3B4JyA/IHdpZHRoIC0gZGltZW5zaW9uLnZhbHVlIDogd2lkdGgsXG4gICAgdG9wOiAoZGltZW5zaW9uOiBEaW1lbnNpb24sIHsgaGVpZ2h0IH0pOiBudW1iZXIgPT4gZGltZW5zaW9uLnVuaXQgPT09ICclJyA/XG4gICAgICAgIGhlaWdodCAqIGRpbWVuc2lvbi52YWx1ZSAvIDEwMCB8IDAgOiBkaW1lbnNpb24udW5pdCA9PT0gJ3B4JyA/IGRpbWVuc2lvbi52YWx1ZSA6IDBcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wdXRlSW1hZ2VBcmVhKGlucHV0V2lkdGg6IG51bWJlciwgaW5wdXRIZWlnaHQ6IG51bWJlciwgYXJlYTogQXJlYUNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRleHQgPSB7IHdpZHRoOiBpbnB1dFdpZHRoLCBoZWlnaHQ6IGlucHV0SGVpZ2h0IH07XG4gICAgY29uc3QgcGFyc2VkQXJlYToge1xuICAgICAgICBib3R0b20/OiBudW1iZXI7XG4gICAgICAgIGxlZnQ/OiBudW1iZXI7XG4gICAgICAgIHJpZ2h0PzogbnVtYmVyO1xuICAgICAgICB0b3A/OiBudW1iZXI7XG4gICAgfSA9IE9iamVjdC5rZXlzKGFyZWEpLnJlZHVjZSgocmVzdWx0LCBrZXkpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBhcmVhW2tleV07XG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IF9wYXJzZUNzc0RpbWVuc2lvblZhbHVlcyh2YWx1ZSk7XG4gICAgICAgIGNvbnN0IGNhbGN1bGF0ZWQgPSBfZGltZW5zaW9uc0NvbnZlcnRlcnNba2V5XShwYXJzZWQsIGNvbnRleHQpO1xuXG4gICAgICAgIHJlc3VsdFtrZXldID0gY2FsY3VsYXRlZDtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9LCB7fSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB0b3BMZWZ0OiB7IHg6IHBhcnNlZEFyZWEubGVmdCwgeTogcGFyc2VkQXJlYS50b3AgfSxcbiAgICAgICAgd2lkdGg6IHBhcnNlZEFyZWEucmlnaHQgLSBwYXJzZWRBcmVhLmxlZnQsXG4gICAgICAgIGhlaWdodDogcGFyc2VkQXJlYS5ib3R0b20gLSBwYXJzZWRBcmVhLnRvcFxuICAgIH07XG59XG4iLCJpbXBvcnQgeyBQb2ludCB9IGZyb20gJy4uL2NvbW1vbi9wb2ludCc7XG5pbXBvcnQgeyBJbWFnZUluZm8gfSBmcm9tICcuL2ltYWdlLWxvYWRlcic7XG5pbXBvcnQgeyBJbnB1dFN0cmVhbUNvbmZpZyB9IGZyb20gJy4vaW5wdXQtc3RyZWFtLWNvbmZpZyc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBJbnB1dFN0cmVhbSB7XG4gICAgcHJvdGVjdGVkIF9jYWxjdWxhdGVkSGVpZ2h0OiBudW1iZXI7XG4gICAgcHJvdGVjdGVkIF9jYWxjdWxhdGVkV2lkdGg6IG51bWJlcjtcbiAgICBwcm90ZWN0ZWQgX2NhbnZhc0hlaWdodDogbnVtYmVyO1xuICAgIHByb3RlY3RlZCBfY2FudmFzV2lkdGg6IG51bWJlcjtcbiAgICBwcm90ZWN0ZWQgX2NvbmZpZzogSW5wdXRTdHJlYW1Db25maWc7XG4gICAgcHJvdGVjdGVkIF9ldmVudE5hbWVzOiBBcnJheTxzdHJpbmc+O1xuICAgIHByb3RlY3RlZCBfZXZlbnRIYW5kbGVyczogTWFwPHN0cmluZywgQXJyYXk8RXZlbnRMaXN0ZW5lcj4+O1xuICAgIHByb3RlY3RlZCBfdG9wTGVmdDogUG9pbnQ7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fY2FudmFzV2lkdGggPSAwO1xuICAgICAgICB0aGlzLl9jYW52YXNIZWlnaHQgPSAwO1xuICAgICAgICB0aGlzLl9jb25maWcgPSBudWxsO1xuICAgICAgICB0aGlzLl9ldmVudE5hbWVzID0gWydjYW5yZWNvcmQnLCAnZW5kZWQnXTtcbiAgICAgICAgdGhpcy5fZXZlbnRIYW5kbGVycyA9IG5ldyBNYXA8c3RyaW5nLCBBcnJheTxFdmVudExpc3RlbmVyPj4oKTtcbiAgICAgICAgdGhpcy5fdG9wTGVmdCA9IHsgeDogMCwgeTogMCB9O1xuICAgIH1cblxuICAgIGFic3RyYWN0IGdldCByZWFsSGVpZ2h0KCk6IG51bWJlcjtcblxuICAgIGFic3RyYWN0IGdldCByZWFsV2lkdGgoKTogbnVtYmVyO1xuXG4gICAgZ2V0IGhlaWdodCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2FsY3VsYXRlZEhlaWdodDtcbiAgICB9XG5cbiAgICBzZXQgaGVpZ2h0KGhlaWdodDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX2NhbGN1bGF0ZWRIZWlnaHQgPSBoZWlnaHQ7XG4gICAgfVxuXG4gICAgZ2V0IHdpZHRoKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jYWxjdWxhdGVkV2lkdGg7XG4gICAgfVxuXG4gICAgc2V0IHdpZHRoKHdpZHRoOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fY2FsY3VsYXRlZFdpZHRoID0gd2lkdGg7XG4gICAgfVxuXG4gICAgZ2V0IHRvcExlZnQoKTogUG9pbnQge1xuICAgICAgICByZXR1cm4geyAuLi50aGlzLl90b3BMZWZ0IH07XG4gICAgfVxuXG4gICAgc2V0IHRvcExlZnQodG9wTGVmdDogUG9pbnQpIHtcbiAgICAgICAgdGhpcy5fdG9wTGVmdC54ID0gdG9wTGVmdC54O1xuICAgICAgICB0aGlzLl90b3BMZWZ0LnkgPSB0b3BMZWZ0Lnk7XG4gICAgfVxuXG4gICAgc2V0Q2FudmFzU2l6ZSh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLl9jYW52YXNXaWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLl9jYW52YXNIZWlnaHQgPSBoZWlnaHQ7XG4gICAgfVxuXG4gICAgZ2V0IGNhbnZhc0hlaWdodCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2FudmFzSGVpZ2h0O1xuICAgIH1cblxuICAgIGdldCBjYW52YXNXaWR0aCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2FudmFzV2lkdGg7XG4gICAgfVxuXG4gICAgYWJzdHJhY3QgZ2V0IGNvbmZpZygpOiBJbnB1dFN0cmVhbUNvbmZpZztcblxuICAgIGFic3RyYWN0IHNldCBjb25maWcoY29uZmlnOiBJbnB1dFN0cmVhbUNvbmZpZyk7XG5cbiAgICBhYnN0cmFjdCBnZXQgZW5kZWQoKTogYm9vbGVhbjtcblxuICAgIGFic3RyYWN0IHNldEF0dHJpYnV0ZShuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkO1xuXG4gICAgYWJzdHJhY3QgcGF1c2UoKTogdm9pZDtcblxuICAgIGFic3RyYWN0IHBsYXkoKTogdm9pZDtcblxuICAgIGFic3RyYWN0IHNldCBjdXJyZW50VGltZSh0aW1lOiBudW1iZXIpO1xuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcihldmVudDogc3RyaW5nLCBsaXN0ZW5lcjogRXZlbnRMaXN0ZW5lciwgX29wdGlvbnM/OiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLl9ldmVudE5hbWVzLmluZGV4T2YoZXZlbnQpICE9PSAtMSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9ldmVudEhhbmRsZXJzLmhhcyhldmVudCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9ldmVudEhhbmRsZXJzLnNldChldmVudCwgbmV3IEFycmF5PEV2ZW50TGlzdGVuZXI+KCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fZXZlbnRIYW5kbGVycy5nZXQoZXZlbnQpLnB1c2gobGlzdGVuZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xlYXJFdmVudEhhbmRsZXJzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9ldmVudEhhbmRsZXJzLmNsZWFyKCk7XG4gICAgfVxuXG4gICAgdHJpZ2dlcihldmVudE5hbWU6IHN0cmluZywgYXJnQXJyYXk/OiBhbnkpIHtcbiAgICAgICAgY29uc3QgaGFuZGxlcnMgPSB0aGlzLl9ldmVudEhhbmRsZXJzLmdldChldmVudE5hbWUpO1xuXG4gICAgICAgIGlmIChoYW5kbGVycyAmJiBoYW5kbGVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGhhbmRsZXJzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlcnNbal0uYXBwbHkodGhpcywgYXJnQXJyYXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWJzdHJhY3QgZ2V0RnJhbWUoKTogSFRNTFZpZGVvRWxlbWVudCB8IEltYWdlSW5mbztcbn1cbiIsImltcG9ydCB7IFZpZGVvU3RyZWFtIH0gZnJvbSAnLi92aWRlby1zdHJlYW0nO1xuXG5leHBvcnQgY2xhc3MgTGl2ZVN0cmVhbSBleHRlbmRzIFZpZGVvU3RyZWFtIHtcbiAgICBjb25zdHJ1Y3Rvcih2aWRlbzogSFRNTFZpZGVvRWxlbWVudCkge1xuICAgICAgICB2aWRlby5zZXRBdHRyaWJ1dGUoJ2F1dG9wbGF5JywgJycpO1xuICAgICAgICBzdXBlcih2aWRlbyk7XG4gICAgfVxuXG4gICAgZ2V0IGVuZGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgSW1hZ2VJbmZvIH0gZnJvbSAnLi9pbWFnZS1sb2FkZXInO1xuaW1wb3J0IHsgSW5wdXRTdHJlYW0gfSBmcm9tICcuL2lucHV0LXN0cmVhbSc7XG5pbXBvcnQgeyBJbnB1dFN0cmVhbUNvbmZpZyB9IGZyb20gJy4vaW5wdXQtc3RyZWFtLWNvbmZpZyc7XG5cbmV4cG9ydCBjbGFzcyBWaWRlb1N0cmVhbSBleHRlbmRzIElucHV0U3RyZWFtIHtcbiAgICBwcml2YXRlIF92aWRlbzogSFRNTFZpZGVvRWxlbWVudDtcblxuICAgIGNvbnN0cnVjdG9yKHZpZGVvOiBIVE1MVmlkZW9FbGVtZW50KSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5fdmlkZW8gPSB2aWRlbztcbiAgICB9XG5cbiAgICBnZXQgcmVhbEhlaWdodCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmlkZW8udmlkZW9IZWlnaHQ7XG4gICAgfVxuXG4gICAgZ2V0IHJlYWxXaWR0aCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmlkZW8udmlkZW9XaWR0aDtcbiAgICB9XG5cbiAgICBnZXQgY29uZmlnKCk6IElucHV0U3RyZWFtQ29uZmlnIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbmZpZztcbiAgICB9XG5cbiAgICBzZXQgY29uZmlnKGNvbmZpZzogSW5wdXRTdHJlYW1Db25maWcpIHtcbiAgICAgICAgdGhpcy5fY29uZmlnID0geyAuLi5jb25maWcgfTtcbiAgICAgICAgdGhpcy5fdmlkZW8uc3JjID0gY29uZmlnLnNyYyB8fCAnJztcbiAgICB9XG5cbiAgICBnZXQgZW5kZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl92aWRlby5lbmRlZDtcbiAgICB9XG5cbiAgICBzZXRBdHRyaWJ1dGUobmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3ZpZGVvLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgcGF1c2UoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3ZpZGVvLnBhdXNlKCk7XG4gICAgfVxuXG4gICAgcGxheSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fdmlkZW8ucGxheSgpO1xuICAgIH1cblxuICAgIHNldCBjdXJyZW50VGltZSh0aW1lOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy50eXBlICE9PSAnTGl2ZVN0cmVhbScpIHtcbiAgICAgICAgICAgIHRoaXMuX3ZpZGVvLmN1cnJlbnRUaW1lID0gdGltZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZEV2ZW50TGlzdGVuZXIoZXZlbnQ6IHN0cmluZywgbGlzdGVuZXI6IEV2ZW50TGlzdGVuZXIsIG9wdGlvbnM/OiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIHN1cGVyLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyLCBvcHRpb25zKTtcblxuICAgICAgICBpZiAodGhpcy5fZXZlbnROYW1lcy5pbmRleE9mKGV2ZW50KSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuX3ZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyLCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsZWFyRXZlbnRIYW5kbGVycygpOiB2b2lkIHtcbiAgICAgICAgLy8gVE9ETzogY29tZSB1cCB3aXRoIGEgd2F5IHRvIHJlbW92ZSB2aWRlbyBldmVudCBoYW5kbGVyc1xuICAgICAgICAvLyB0aGlzLl9ldmVudE5hbWVzLmZvckVhY2goZXZlbnROYW1lID0+IHtcbiAgICAgICAgLy8gICAgIGNvbnN0IGhhbmRsZXJzID0gdGhpcy5fZXZlbnRIYW5kbGVycy5nZXQoZXZlbnROYW1lKTtcbiAgICAgICAgLy8gICAgIGlmIChoYW5kbGVycyAmJiBoYW5kbGVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgIC8vICAgICAgICAgaGFuZGxlcnMuZm9yRWFjaChoYW5kbGVyID0+IHRoaXMuX3ZpZGVvLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBoYW5kbGVyKSk7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH0pO1xuICAgICAgICBzdXBlci5jbGVhckV2ZW50SGFuZGxlcnMoKTtcbiAgICB9XG5cbiAgICB0cmlnZ2VyKGV2ZW50TmFtZTogc3RyaW5nLCBhcmdBcnJheT86IGFueSkge1xuICAgICAgICBpZiAoZXZlbnROYW1lID09PSAnY2FucmVjb3JkJykge1xuICAgICAgICAgICAgdGhpcy5faW5pdFNpemUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN1cGVyLnRyaWdnZXIoZXZlbnROYW1lLCBhcmdBcnJheSlcbiAgICB9XG5cbiAgICBnZXRGcmFtZSgpOiBIVE1MVmlkZW9FbGVtZW50IHwgSW1hZ2VJbmZvIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZpZGVvO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2luaXRTaXplKCkge1xuICAgICAgICBjb25zdCB3aWR0aCA9IHRoaXMuX3ZpZGVvLnZpZGVvV2lkdGg7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuX3ZpZGVvLnZpZGVvSGVpZ2h0O1xuXG4gICAgICAgIHRoaXMuX2NhbnZhc1dpZHRoID0gdGhpcy5fY2FsY3VsYXRlZFdpZHRoID1cbiAgICAgICAgICAgIHRoaXMuX2NvbmZpZy5zaXplID8gd2lkdGggPiBoZWlnaHQgPyB0aGlzLl9jb25maWcuc2l6ZSA6IHdpZHRoICogdGhpcy5fY29uZmlnLnNpemUgLyBoZWlnaHQgfCAwIDogd2lkdGg7XG4gICAgICAgIHRoaXMuX2NhbnZhc0hlaWdodCA9IHRoaXMuX2NhbGN1bGF0ZWRIZWlnaHQgPVxuICAgICAgICAgICAgdGhpcy5fY29uZmlnLnNpemUgPyB3aWR0aCA+IGhlaWdodCA/IGhlaWdodCAqIHRoaXMuX2NvbmZpZy5zaXplIC8gd2lkdGggfCAwIDogdGhpcy5fY29uZmlnLnNpemUgOiBoZWlnaHQ7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgTGl2ZVN0cmVhbSBleHRlbmRzIFZpZGVvU3RyZWFtIHtcbiAgICBjb25zdHJ1Y3Rvcih2aWRlbzogSFRNTFZpZGVvRWxlbWVudCkge1xuICAgICAgICB2aWRlby5zZXRBdHRyaWJ1dGUoJ2F1dG9wbGF5JywgJycpO1xuICAgICAgICBzdXBlcih2aWRlbyk7XG4gICAgfVxuXG4gICAgZ2V0IGVuZGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgSW1hZ2VXcmFwcGVyIH0gZnJvbSAnLi4vY29tbW9uL2ltYWdlLXdyYXBwZXInO1xuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuLi9jb21tb24vcG9pbnQnO1xuXG4vKipcbiAqIEludmVydCBtYXRyaXhcbiAqIEBwYXJhbSBtYXRyaXggdGhlIG1hdHJpeCB0byBpbnZlcnRcbiAqIEByZXR1cm5zIHRoZSBpbnZlcnRlZCBtYXRyaXhcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGludmVydChtYXRyaXg6IEZsb2F0MzJBcnJheSk6IEZsb2F0MzJBcnJheSB7XG4gICAgY29uc3QgYTAgPSBtYXRyaXhbMF07XG4gICAgY29uc3QgYTEgPSBtYXRyaXhbMV07XG4gICAgY29uc3QgYTIgPSBtYXRyaXhbMl07XG4gICAgY29uc3QgYTMgPSBtYXRyaXhbM107XG4gICAgY29uc3QgZGV0ZXJtaW5hbnQgPSBhMCAqIGEzIC0gYTIgKiBhMTtcblxuICAgIGlmICghZGV0ZXJtaW5hbnQpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBGbG9hdDMyQXJyYXkoW2EzIC8gZGV0ZXJtaW5hbnQsIC1hMSAvIGRldGVybWluYW50LCAtYTIgLyBkZXRlcm1pbmFudCwgYTAgLyBkZXRlcm1pbmFudF0pO1xufVxuXG4vKipcbiAqIFRyYW5zZm9ybXMgdGhlIHZlY3RvciB3aXRoIGEgbWF0cml4XG4gKiBAcGFyYW0geyB4LCB5IH0gdmVjdG9yIHRvIHRyYW5zZm9ybVxuICogQHBhcmFtIG1hdHJpeCBtYXRyaXggdG8gdHJhbnNmb3JtIHdpdGhcbiAqIEByZXR1cm5zIHRoZSB0cmFuc2Zvcm1lZCB2ZWN0b3JcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybVdpdGhNYXRyaXgoeyB4LCB5IH06IFBvaW50LCBtYXRyaXg6IEZsb2F0MzJBcnJheSk6IFBvaW50IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB4OiBtYXRyaXhbMF0gKiB4ICsgbWF0cml4WzJdICogeSxcbiAgICAgICAgeTogbWF0cml4WzFdICogeCArIG1hdHJpeFszXSAqIHlcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBfY29tcHV0ZUhpc3RvZ3JhbShpbWFnZVdyYXBwZXI6IEltYWdlV3JhcHBlciwgYml0c1BlclBpeGVsOiBudW1iZXIpOiBJbnQzMkFycmF5IHtcbiAgICBpZiAoIWJpdHNQZXJQaXhlbCkge1xuICAgICAgICBiaXRzUGVyUGl4ZWwgPSA4O1xuICAgIH1cblxuICAgIGNvbnN0IGltYWdlRGF0YSA9IGltYWdlV3JhcHBlci5kYXRhO1xuICAgIGNvbnN0IGJpdFNoaWZ0ID0gOCAtIGJpdHNQZXJQaXhlbDtcbiAgICBjb25zdCBidWNrZXRDb3VudCA9IDEgPDwgYml0c1BlclBpeGVsO1xuICAgIGNvbnN0IGhpc3RvZ3JhbSA9IG5ldyBJbnQzMkFycmF5KGJ1Y2tldENvdW50KTtcblxuICAgIGZvciAobGV0IGkgPSBpbWFnZURhdGEubGVuZ3RoOyBpLS07KSB7XG4gICAgICAgIGhpc3RvZ3JhbVtpbWFnZURhdGFbaV0gPj4gYml0U2hpZnRdKys7XG4gICAgfVxuXG4gICAgcmV0dXJuIGhpc3RvZ3JhbTtcbn1cblxuZnVuY3Rpb24gX2RldGVybWluZU90c3VUaHJlc2hvbGQoaW1hZ2VXcmFwcGVyOiBJbWFnZVdyYXBwZXIsIGJpdHNQZXJQaXhlbD86IG51bWJlcik6IG51bWJlciB7XG4gICAgaWYgKCFiaXRzUGVyUGl4ZWwpIHtcbiAgICAgICAgYml0c1BlclBpeGVsID0gODtcbiAgICB9XG5cbiAgICBjb25zdCBiaXRTaGlmdCA9IDggLSBiaXRzUGVyUGl4ZWw7XG4gICAgY29uc3QgaGlzdCA9IF9jb21wdXRlSGlzdG9ncmFtKGltYWdlV3JhcHBlciwgYml0c1BlclBpeGVsKTtcbiAgICBjb25zdCB2ZXQgPSBbMF07XG4gICAgY29uc3QgbWF4ID0gKDEgPDwgYml0c1BlclBpeGVsKSAtIDE7XG5cbiAgICBmdW5jdGlvbiBweChpbml0OiBudW1iZXIsIGVuZDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgbGV0IHN1bSA9IDA7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IGluaXQ7IGkgPD0gZW5kOyBpKyspIHtcbiAgICAgICAgICAgIHN1bSArPSBoaXN0W2ldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1bTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBteChpbml0OiBudW1iZXIsIGVuZDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgbGV0IHN1bSA9IDA7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IGluaXQ7IGkgPD0gZW5kOyBpKyspIHtcbiAgICAgICAgICAgIHN1bSArPSBpICogaGlzdFtpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdW07XG4gICAgfVxuXG4gICAgZm9yIChsZXQgayA9IDE7IGsgPCBtYXg7IGsrKykge1xuICAgICAgICBjb25zdCBwMSA9IHB4KDAsIGspO1xuICAgICAgICBjb25zdCBwMiA9IHB4KGsgKyAxLCBtYXgpO1xuICAgICAgICBjb25zdCBwMTIgPSBwMSAqIHAyIHx8IDE7XG4gICAgICAgIGNvbnN0IG0xID0gbXgoMCwgaykgKiBwMjtcbiAgICAgICAgY29uc3QgbTIgPSBteChrICsgMSwgbWF4KSAqIHAxO1xuICAgICAgICBjb25zdCBtMTIgPSBtMSAtIG0yO1xuICAgICAgICB2ZXRba10gPSBtMTIgKiBtMTIgLyBwMTI7XG4gICAgfVxuXG4gICAgLy8gaW5kZXggb2YgbWF4IGVsZW1lbnRcbiAgICBjb25zdCB0aHJlc2hvbGQgPSB2ZXQucmVkdWNlKChtYXhJbmRleCwgaXRlbSwgaW5kZXgsIGFycmF5KSA9PiBpdGVtID4gYXJyYXlbbWF4SW5kZXhdID8gaW5kZXggOiBtYXhJbmRleCwgMCk7XG5cbiAgICByZXR1cm4gdGhyZXNob2xkIDw8IGJpdFNoaWZ0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb3RzdVRocmVzaG9sZChpbWFnZVdyYXBwZXI6IEltYWdlV3JhcHBlciwgdGFyZ2V0V3JhcHBlcjogSW1hZ2VXcmFwcGVyKTogbnVtYmVyIHtcbiAgICBjb25zdCB0aHJlc2hvbGQgPSBfZGV0ZXJtaW5lT3RzdVRocmVzaG9sZChpbWFnZVdyYXBwZXIpO1xuICAgIGNvbnN0IHRhcmdldERhdGEgPSB0YXJnZXRXcmFwcGVyLmRhdGE7XG5cbiAgICBpbWFnZVdyYXBwZXIuZGF0YS5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgICAgdGFyZ2V0RGF0YVtpbmRleF0gPSB2YWx1ZSA8IHRocmVzaG9sZCA/IDEgOiAwO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRocmVzaG9sZDtcbn1cblxuLyoqXG4gKiBAcGFyYW0gaW1hZ2VXcmFwcGVyIGlucHV0IGltYWdlIHRvIGJlIHNhbXBsZWRcbiAqIEBwYXJhbSBvdXRJbWFnZVdyYXBwZXIge0ltYWdlV3JhcHBlcn0gdG8gYmUgc3RvcmVkIGluXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoYWxmU2FtcGxlKGltYWdlV3JhcHBlcjogSW1hZ2VXcmFwcGVyLCBvdXRJbWFnZVdyYXBwZXI6IEltYWdlV3JhcHBlcik6IHZvaWQge1xuICAgIGNvbnN0IGltYWdlID0gaW1hZ2VXcmFwcGVyLmRhdGE7XG4gICAgY29uc3Qgd2lkdGggPSBpbWFnZVdyYXBwZXIuc2l6ZS54O1xuICAgIGNvbnN0IG91dEltYWdlID0gb3V0SW1hZ2VXcmFwcGVyLmRhdGE7XG4gICAgY29uc3QgZW5kSW5kZXggPSBpbWFnZS5sZW5ndGg7XG4gICAgY29uc3Qgb3V0V2lkdGggPSB3aWR0aCA+PiAxO1xuICAgIGxldCB0b3BSb3dJbmRleCA9IDA7XG4gICAgbGV0IGJvdHRvbVJvd0luZGV4ID0gd2lkdGg7XG4gICAgbGV0IG91dEltZ0luZGV4ID0gMDtcblxuICAgIHdoaWxlIChib3R0b21Sb3dJbmRleCA8IGVuZEluZGV4KSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3V0V2lkdGg7IGkrKykge1xuICAgICAgICAgICAgb3V0SW1hZ2Vbb3V0SW1nSW5kZXhdID1cbiAgICAgICAgICAgICAgICAoaW1hZ2VbdG9wUm93SW5kZXhdICsgaW1hZ2VbdG9wUm93SW5kZXggKyAxXSArIGltYWdlW2JvdHRvbVJvd0luZGV4XSArIGltYWdlW2JvdHRvbVJvd0luZGV4ICsgMV0pID4+IDI7XG4gICAgICAgICAgICBvdXRJbWdJbmRleCsrO1xuICAgICAgICAgICAgdG9wUm93SW5kZXggKz0gMjtcbiAgICAgICAgICAgIGJvdHRvbVJvd0luZGV4ICs9IDI7XG4gICAgICAgIH1cbiAgICAgICAgdG9wUm93SW5kZXggKz0gd2lkdGg7XG4gICAgICAgIGJvdHRvbVJvd0luZGV4ICs9IHdpZHRoO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEJveCB9IGZyb20gJy4uL2NvbW1vbi9ib3gnO1xuaW1wb3J0IHsgQ2x1c3RlciB9IGZyb20gJy4uL2NvbW1vbi9jbHVzdGVyJztcbmltcG9ydCB7IEhTViwgaHN2MnJnYiwgUkdCIH0gZnJvbSAnLi4vY29tbW9uL2hzdjJyZ2InO1xuaW1wb3J0IHsgSW1hZ2VEZWJ1ZyB9IGZyb20gJy4uL2NvbW1vbi9pbWFnZS1kZWJ1Zyc7XG5pbXBvcnQgeyBJbWFnZVdyYXBwZXIgfSBmcm9tICcuLi9jb21tb24vaW1hZ2Utd3JhcHBlcic7XG5pbXBvcnQgeyBNb21lbnQgfSBmcm9tICcuLi9jb21tb24vbW9tZW50JztcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi4vY29tbW9uL3BvaW50JztcbmltcG9ydCB7IGNhbGN1bGF0ZVBhdGNoU2l6ZSB9IGZyb20gJy4uL2lucHV0L2lucHV0LXN0cmVhbS11dGlscyc7XG5pbXBvcnQgeyBCYXJjb2RlTG9jYXRvckNvbmZpZyB9IGZyb20gJy4vYmFyY29kZS1sb2NhdG9yLWNvbmZpZyc7XG5pbXBvcnQgeyBoYWxmU2FtcGxlLCBpbnZlcnQsIG90c3VUaHJlc2hvbGQsIHRyYW5zZm9ybVdpdGhNYXRyaXggfSBmcm9tICcuL2JhcmNvZGUtbG9jYXRvci11dGlscyc7XG5pbXBvcnQgeyBSYXN0ZXJpemVyIH0gZnJvbSAnLi9yYXN0ZXJpemVyJztcbmltcG9ydCBza2VsZXRvbml6ZXIgZnJvbSAnLi9za2VsZXRvbml6ZXInO1xuaW1wb3J0IHsgU2VhcmNoRGlyZWN0aW9ucyB9IGZyb20gJy4vdHJhY2VyJztcblxuaW50ZXJmYWNlIFBhdGNoIHtcbiAgICBib3g6IEJveDtcbiAgICBpbmRleDogbnVtYmVyO1xuICAgIG1vbWVudHM6IEFycmF5PE1vbWVudD47XG4gICAgcG9zOiBQb2ludDtcbiAgICByYWQ6IG51bWJlcjtcbiAgICB4OiBudW1iZXI7XG4gICAgeTogbnVtYmVyO1xufVxuXG50eXBlIFNjZWxldG9uaXplciA9IGFueTtcblxuY29uc3QgTW9tZW50U2ltaWxhcml0eVRocmVzaG9sZCA9IDAuOTtcblxuZXhwb3J0IGNsYXNzIEJhcmNvZGVMb2NhdG9yIHtcbiAgICBwcml2YXRlIF9jb25maWc6IEJhcmNvZGVMb2NhdG9yQ29uZmlnO1xuICAgIHByaXZhdGUgX2lucHV0SW1hZ2VXcmFwcGVyOiBJbWFnZVdyYXBwZXI7XG4gICAgcHJpdmF0ZSBfY3VycmVudEltYWdlV3JhcHBlcjogSW1hZ2VXcmFwcGVyO1xuICAgIHByaXZhdGUgX3NrZWxJbWFnZVdyYXBwZXI6IEltYWdlV3JhcHBlcjtcbiAgICBwcml2YXRlIF9zdWJJbWFnZVdyYXBwZXI6IEltYWdlV3JhcHBlcjtcbiAgICBwcml2YXRlIF9sYWJlbEltYWdlV3JhcHBlcjogSW1hZ2VXcmFwcGVyPEFycmF5PG51bWJlcj4+O1xuICAgIHByaXZhdGUgX2JpbmFyeUltYWdlV3JhcHBlcjogSW1hZ2VXcmFwcGVyO1xuICAgIHByaXZhdGUgX3BhdGNoR3JpZDogSW1hZ2VXcmFwcGVyO1xuICAgIHByaXZhdGUgX3BhdGNoTGFiZWxHcmlkOiBJbWFnZVdyYXBwZXI8SW50MzJBcnJheT47XG4gICAgcHJpdmF0ZSBfaW1hZ2VUb1BhdGNoR3JpZDogQXJyYXk8UGF0Y2g+O1xuICAgIHByaXZhdGUgX3BhdGNoU2l6ZTogUG9pbnQ7XG4gICAgcHJpdmF0ZSBfYmluYXJ5Q29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuICAgIHByaXZhdGUgX251bVBhdGNoZXM6IFBvaW50O1xuICAgIHByaXZhdGUgX3NrZWxldG9uaXplcjogU2NlbGV0b25pemVyO1xuXG4gICAgY29uc3RydWN0b3IoaW5wdXRJbWFnZVdyYXBwZXI6IEltYWdlV3JhcHBlciwgY29uZmlnOiBCYXJjb2RlTG9jYXRvckNvbmZpZykge1xuICAgICAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG4gICAgICAgIHRoaXMuX2lucHV0SW1hZ2VXcmFwcGVyID0gaW5wdXRJbWFnZVdyYXBwZXI7XG4gICAgICAgIHRoaXMuX251bVBhdGNoZXMgPSB7IHg6IDAsIHk6IDAgfTtcblxuICAgICAgICB0aGlzLl9pbml0QnVmZmVycygpO1xuICAgICAgICB0aGlzLl9pbml0Q2FudmFzKCk7XG4gICAgfVxuXG4gICAgbG9jYXRlKCkge1xuICAgICAgICBpZiAodGhpcy5fY29uZmlnLmhhbGZTYW1wbGUpIHtcbiAgICAgICAgICAgIGhhbGZTYW1wbGUodGhpcy5faW5wdXRJbWFnZVdyYXBwZXIsIHRoaXMuX2N1cnJlbnRJbWFnZVdyYXBwZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fYmluYXJpemVJbWFnZSgpO1xuICAgICAgICBjb25zdCBwYXRjaGVzRm91bmQgPSB0aGlzLl9maW5kUGF0Y2hlcygpO1xuICAgICAgICAvLyByZXR1cm4gdW5sZXNzIDUlIG9yIG1vcmUgcGF0Y2hlcyBhcmUgZm91bmRcbiAgICAgICAgaWYgKHBhdGNoZXNGb3VuZC5sZW5ndGggPCB0aGlzLl9udW1QYXRjaGVzLnggKiB0aGlzLl9udW1QYXRjaGVzLnkgKiAwLjA1KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHJhc3Rlcml6ZSBhcmVhIGJ5IGNvbXBhcmluZyBhbmd1bGFyIHNpbWlsYXJpdHk7XG4gICAgICAgIGNvbnN0IG1heExhYmVsID0gdGhpcy5fcmFzdGVyaXplQW5ndWxhclNpbWlsYXJpdHkocGF0Y2hlc0ZvdW5kKTtcbiAgICAgICAgaWYgKG1heExhYmVsIDwgMSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzZWFyY2ggZm9yIGFyZWEgd2l0aCB0aGUgbW9zdCBwYXRjaGVzIChiaWdnZXN0IGNvbm5lY3RlZCBhcmVhKVxuICAgICAgICBjb25zdCB0b3BMYWJlbHMgPSB0aGlzLl9maW5kQmlnZ2VzdENvbm5lY3RlZEFyZWFzKG1heExhYmVsKTtcbiAgICAgICAgaWYgKHRvcExhYmVscy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYm94ZXMgPSB0aGlzLl9maW5kQm94ZXModG9wTGFiZWxzLCBtYXhMYWJlbCk7XG4gICAgICAgIHJldHVybiBib3hlcztcbiAgICB9XG5cbiAgICBwcml2YXRlIF9pbml0QnVmZmVycygpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy5oYWxmU2FtcGxlKSB7XG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50SW1hZ2VXcmFwcGVyID0gbmV3IEltYWdlV3JhcHBlcih7XG4gICAgICAgICAgICAgICAgeDogdGhpcy5faW5wdXRJbWFnZVdyYXBwZXIuc2l6ZS54IC8gMiB8IDAsXG4gICAgICAgICAgICAgICAgeTogdGhpcy5faW5wdXRJbWFnZVdyYXBwZXIuc2l6ZS55IC8gMiB8IDBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fY3VycmVudEltYWdlV3JhcHBlciA9IHRoaXMuX2lucHV0SW1hZ2VXcmFwcGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fcGF0Y2hTaXplID0gY2FsY3VsYXRlUGF0Y2hTaXplKHRoaXMuX2NvbmZpZy5wYXRjaFNpemUsIHRoaXMuX2N1cnJlbnRJbWFnZVdyYXBwZXIuc2l6ZSk7XG5cbiAgICAgICAgdGhpcy5fbnVtUGF0Y2hlcy54ID0gdGhpcy5fY3VycmVudEltYWdlV3JhcHBlci5zaXplLnggLyB0aGlzLl9wYXRjaFNpemUueCB8IDA7XG4gICAgICAgIHRoaXMuX251bVBhdGNoZXMueSA9IHRoaXMuX2N1cnJlbnRJbWFnZVdyYXBwZXIuc2l6ZS55IC8gdGhpcy5fcGF0Y2hTaXplLnkgfCAwO1xuXG4gICAgICAgIHRoaXMuX2JpbmFyeUltYWdlV3JhcHBlciA9IG5ldyBJbWFnZVdyYXBwZXIodGhpcy5fY3VycmVudEltYWdlV3JhcHBlci5zaXplLCB1bmRlZmluZWQsIFVpbnQ4QXJyYXksIGZhbHNlKTtcblxuICAgICAgICB0aGlzLl9sYWJlbEltYWdlV3JhcHBlciA9IG5ldyBJbWFnZVdyYXBwZXIodGhpcy5fcGF0Y2hTaXplLCB1bmRlZmluZWQsIEFycmF5LCB0cnVlKTtcblxuICAgICAgICBjb25zdCBza2VsZXRvbkltYWdlRGF0YSA9IG5ldyBBcnJheUJ1ZmZlcig2NCAqIDEwMjQpO1xuICAgICAgICB0aGlzLl9zdWJJbWFnZVdyYXBwZXIgPSBuZXcgSW1hZ2VXcmFwcGVyKHRoaXMuX3BhdGNoU2l6ZSwgbmV3IFVpbnQ4QXJyYXkoc2tlbGV0b25JbWFnZURhdGEsIDAsIHRoaXMuX3BhdGNoU2l6ZS54ICogdGhpcy5fcGF0Y2hTaXplLnkpKTtcbiAgICAgICAgdGhpcy5fc2tlbEltYWdlV3JhcHBlciA9IG5ldyBJbWFnZVdyYXBwZXIodGhpcy5fcGF0Y2hTaXplLFxuICAgICAgICAgICAgbmV3IFVpbnQ4QXJyYXkoc2tlbGV0b25JbWFnZURhdGEsIHRoaXMuX3BhdGNoU2l6ZS54ICogdGhpcy5fcGF0Y2hTaXplLnkgKiAzLCB0aGlzLl9wYXRjaFNpemUueCAqIHRoaXMuX3BhdGNoU2l6ZS55KSxcbiAgICAgICAgICAgIHVuZGVmaW5lZCwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuX3NrZWxldG9uaXplciA9IHNrZWxldG9uaXplcihcbiAgICAgICAgICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykgPyB3aW5kb3cgOiAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnKSA/IHNlbGYgOiBnbG9iYWwsXG4gICAgICAgICAgICB7IHNpemU6IHRoaXMuX3BhdGNoU2l6ZS54IH0sXG4gICAgICAgICAgICBza2VsZXRvbkltYWdlRGF0YVxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IHNpemUgPSB7XG4gICAgICAgICAgICB4OiAodGhpcy5fY3VycmVudEltYWdlV3JhcHBlci5zaXplLnggLyB0aGlzLl9zdWJJbWFnZVdyYXBwZXIuc2l6ZS54KSB8IDAsXG4gICAgICAgICAgICB5OiAodGhpcy5fY3VycmVudEltYWdlV3JhcHBlci5zaXplLnkgLyB0aGlzLl9zdWJJbWFnZVdyYXBwZXIuc2l6ZS55KSB8IDBcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fcGF0Y2hMYWJlbEdyaWQgPSBuZXcgSW1hZ2VXcmFwcGVyKHNpemUsIHVuZGVmaW5lZCwgSW50MzJBcnJheSwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuX3BhdGNoR3JpZCA9IG5ldyBJbWFnZVdyYXBwZXIoc2l6ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRydWUpO1xuICAgICAgICB0aGlzLl9pbWFnZVRvUGF0Y2hHcmlkID0gbmV3IEFycmF5PFBhdGNoPih0aGlzLl9wYXRjaExhYmVsR3JpZC5kYXRhLmxlbmd0aCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaW5pdENhbnZhcygpIHtcbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy51c2VXb3JrZXIgfHwgdHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgIGNhbnZhcy5jbGFzc05hbWUgPSAnYmluYXJ5QnVmZmVyJztcbiAgICAgICAgY2FudmFzLndpZHRoID0gdGhpcy5fYmluYXJ5SW1hZ2VXcmFwcGVyLnNpemUueDtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IHRoaXMuX2JpbmFyeUltYWdlV3JhcHBlci5zaXplLnk7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuX2NvbmZpZy5kZWJ1ZyAmJiB0aGlzLl9jb25maWcuZGVidWcuc2hvd0NhbnZhcykge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RlYnVnJykuYXBwZW5kQ2hpbGQoY2FudmFzKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9iaW5hcnlDb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIGJvdW5kaW5nIGJveCB3aGljaCBlbmNsb3NlcyBhbGwgdGhlIGdpdmVuIHBhdGNoZXNcbiAgICAgKiBAcmV0dXJucyBUaGUgbWluaW1hbCBib3VuZGluZyBib3hcbiAgICAgKi9cbiAgICBwcml2YXRlIF9ib3hGcm9tUGF0Y2hlcyhwYXRjaGVzOiBBcnJheTxQYXRjaD4pOiBCb3gge1xuICAgICAgICBjb25zdCBkZWJ1ZyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdGhpcy5fY29uZmlnLmRlYnVnO1xuICAgICAgICBsZXQgYXZlcmFnZVJhZCA9IHBhdGNoZXMucmVkdWNlKChzdW0sIHsgcG9zLCByYWQgfSkgPT4ge1xuICAgICAgICAgICAgaWYgKGRlYnVnICYmIGRlYnVnLnNob3dQYXRjaGVzKSB7XG4gICAgICAgICAgICAgICAgLy8gZHJhdyBhbGwgcGF0Y2hlcyB3aGljaCBhcmUgdG8gYmUgdGFrZW4gaW50byBjb25zaWRlcmF0aW9uXG4gICAgICAgICAgICAgICAgdGhpcy5fZHJhd1JlY3QocG9zLCB0aGlzLl9zdWJJbWFnZVdyYXBwZXIuc2l6ZSwgJ3JlZCcsIDEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gc3VtICsgcmFkO1xuICAgICAgICB9LCAwKSAvIHBhdGNoZXMubGVuZ3RoO1xuXG4gICAgICAgIGF2ZXJhZ2VSYWQgPSAoYXZlcmFnZVJhZCAqIDE4MCAvIE1hdGguUEkgKyA5MCkgJSAxODAgLSA5MDtcbiAgICAgICAgaWYgKGF2ZXJhZ2VSYWQgPCAwKSB7XG4gICAgICAgICAgICBhdmVyYWdlUmFkICs9IDE4MDtcbiAgICAgICAgfVxuICAgICAgICBhdmVyYWdlUmFkID0gKDE4MCAtIGF2ZXJhZ2VSYWQpICogTWF0aC5QSSAvIDE4MDtcblxuICAgICAgICBjb25zdCBjb3MgPSBNYXRoLmNvcyhhdmVyYWdlUmFkKTtcbiAgICAgICAgY29uc3Qgc2luID0gTWF0aC5zaW4oYXZlcmFnZVJhZCk7XG4gICAgICAgIGNvbnN0IG1hdHJpeCA9IG5ldyBGbG9hdDMyQXJyYXkoW2Nvcywgc2luLCAtc2luLCBjb3NdKTtcbiAgICAgICAgY29uc3QgaW52ZXJzZU1hdHJpeCA9IGludmVydChtYXRyaXgpO1xuXG4gICAgICAgIC8vIGl0ZXJhdGUgb3ZlciBwYXRjaGVzIGFuZCByb3RhdGUgYnkgYW5nbGVcbiAgICAgICAgcGF0Y2hlcy5mb3JFYWNoKCh7IGJveCB9KSA9PiB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDQ7IGorKykge1xuICAgICAgICAgICAgICAgIGJveFtqXSA9IHRyYW5zZm9ybVdpdGhNYXRyaXgoYm94W2pdLCBtYXRyaXgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZGVidWcgJiYgZGVidWcuYm94RnJvbVBhdGNoZXMuc2hvd1RyYW5zZm9ybWVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZHJhd1BhdGgoYm94LCAnIzk5ZmYwMCcsIDIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgbWluWCA9IHRoaXMuX2JpbmFyeUltYWdlV3JhcHBlci5zaXplLng7XG4gICAgICAgIGxldCBtaW5ZID0gdGhpcy5fYmluYXJ5SW1hZ2VXcmFwcGVyLnNpemUueTtcbiAgICAgICAgbGV0IG1heFggPSAtbWluWDtcbiAgICAgICAgbGV0IG1heFkgPSAtbWluWTtcblxuICAgICAgICAvLyBmaW5kIGJvdW5kaW5nIGJveFxuICAgICAgICBwYXRjaGVzLmZvckVhY2goKHsgYm94IH0pID0+IHtcbiAgICAgICAgICAgIGJveC5mb3JFYWNoKCh7IHgsIHkgfSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh4IDwgbWluWCkge1xuICAgICAgICAgICAgICAgICAgICBtaW5YID0geDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHggPiBtYXhYKSB7XG4gICAgICAgICAgICAgICAgICAgIG1heFggPSB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoeSA8IG1pblkpIHtcbiAgICAgICAgICAgICAgICAgICAgbWluWSA9IHk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh5ID4gbWF4WSkge1xuICAgICAgICAgICAgICAgICAgICBtYXhZID0geTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IGJveDogQm94ID0gW3sgeDogbWluWCwgeTogbWluWSB9LCB7IHg6IG1heFgsIHk6IG1pblkgfSwgeyB4OiBtYXhYLCB5OiBtYXhZIH0sIHsgeDogbWluWCwgeTogbWF4WSB9XTtcblxuICAgICAgICBpZiAoZGVidWcgJiYgZGVidWcuYm94RnJvbVBhdGNoZXMuc2hvd1RyYW5zZm9ybWVkQm94KSB7XG4gICAgICAgICAgICB0aGlzLl9kcmF3UGF0aChib3gsICcjZmYwMDAwJywgMik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyByZXZlcnNlIHJvdGF0aW9uXG4gICAgICAgIGJveCA9IGJveC5tYXAodmVydGV4ID0+IHRyYW5zZm9ybVdpdGhNYXRyaXgodmVydGV4LCBpbnZlcnNlTWF0cml4KSkgYXMgQm94O1xuXG4gICAgICAgIGlmIChkZWJ1ZyAmJiBkZWJ1Zy5ib3hGcm9tUGF0Y2hlcy5zaG93QkIpIHtcbiAgICAgICAgICAgIHRoaXMuX2RyYXdQYXRoKGJveCwgJyNmZjAwMDAnLCAyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9jb25maWcuaGFsZlNhbXBsZSkge1xuICAgICAgICAgICAgLy8gc2NhbGVcbiAgICAgICAgICAgIGJveCA9IGJveC5tYXAoKHsgeCwgeSB9KSA9PiAoeyB4OiB4ICogMiwgeTogeSAqPSAyIH0pKSBhcyBCb3g7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYm94O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBiaW5hcnkgaW1hZ2Ugb2YgdGhlIGN1cnJlbnQgaW1hZ2VcbiAgICAgKi9cbiAgICBwcml2YXRlIF9iaW5hcml6ZUltYWdlKCk6IHZvaWQge1xuICAgICAgICBvdHN1VGhyZXNob2xkKHRoaXMuX2N1cnJlbnRJbWFnZVdyYXBwZXIsIHRoaXMuX2JpbmFyeUltYWdlV3JhcHBlcik7XG4gICAgICAgIHRoaXMuX2JpbmFyeUltYWdlV3JhcHBlci56ZXJvQm9yZGVyKCk7XG5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdGhpcy5fY29uZmlnLmRlYnVnICYmIHRoaXMuX2NvbmZpZy5kZWJ1Zy5zaG93Q2FudmFzKSB7XG4gICAgICAgICAgICB0aGlzLl9iaW5hcnlJbWFnZVdyYXBwZXIuc2hvdyh0aGlzLl9iaW5hcnlDb250ZXh0LCAyNTUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSXRlcmF0ZSBvdmVyIHRoZSBlbnRpcmUgaW1hZ2UsIGV4dHJhY3QgcGF0Y2hlc1xuICAgICAqL1xuICAgIHByaXZhdGUgX2ZpbmRQYXRjaGVzKCk6IEFycmF5PFBhdGNoPiB7XG4gICAgICAgIGNvbnN0IGRlYnVnID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLl9jb25maWcuZGVidWc7XG4gICAgICAgIGxldCBwYXRjaGVzRm91bmQgPSBuZXcgQXJyYXk8UGF0Y2g+KCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9udW1QYXRjaGVzLng7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLl9udW1QYXRjaGVzLnk7IGorKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHggPSB0aGlzLl9zdWJJbWFnZVdyYXBwZXIuc2l6ZS54ICogaTtcbiAgICAgICAgICAgICAgICBjb25zdCB5ID0gdGhpcy5fc3ViSW1hZ2VXcmFwcGVyLnNpemUueSAqIGo7XG5cbiAgICAgICAgICAgICAgICAvLyBzZXBlcmF0ZSBwYXJ0c1xuICAgICAgICAgICAgICAgIHRoaXMuX3NrZWxldG9uaXplKHgsIHkpO1xuXG4gICAgICAgICAgICAgICAgLy8gUmFzdGVyaXplLCBmaW5kIGluZGl2aWR1YWwgYmFyc1xuICAgICAgICAgICAgICAgIHRoaXMuX3NrZWxJbWFnZVdyYXBwZXIuemVyb0JvcmRlcigpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2xhYmVsSW1hZ2VXcmFwcGVyLmRhdGEuZmlsbCgwKTtcbiAgICAgICAgICAgICAgICBjb25zdCByYXN0ZXJpemVyID0gbmV3IFJhc3Rlcml6ZXIodGhpcy5fc2tlbEltYWdlV3JhcHBlciwgdGhpcy5fbGFiZWxJbWFnZVdyYXBwZXIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJhc3RlclJlc3VsdCA9IHJhc3Rlcml6ZXIucmFzdGVyaXplKDApO1xuXG4gICAgICAgICAgICAgICAgaWYgKGRlYnVnICYmIGRlYnVnLnNob3dMYWJlbHMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbGFiZWxJbWFnZVdyYXBwZXIub3ZlcmxheSh0aGlzLl9iaW5hcnlDb250ZXh0LCAzNjAgLyByYXN0ZXJSZXN1bHQuY291bnQgfCAwLCB4LCB5KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBjYWxjdWxhdGUgbW9tZW50cyBmcm9tIHRoZSBza2VsZXRvbml6ZWQgcGF0Y2hcbiAgICAgICAgICAgICAgICBjb25zdCBtb21lbnRzID0gdGhpcy5fbGFiZWxJbWFnZVdyYXBwZXIubW9tZW50cyhyYXN0ZXJSZXN1bHQuY291bnQpO1xuXG4gICAgICAgICAgICAgICAgLy8gZXh0cmFjdCBlbGlnaWJsZSBwYXRjaGVzXG4gICAgICAgICAgICAgICAgY29uc3QgcGF0Y2ggPSB0aGlzLl9kZXNjcmliZVBhdGNoKG1vbWVudHMsIGogKiB0aGlzLl9udW1QYXRjaGVzLnggKyBpLCB4LCB5KTtcbiAgICAgICAgICAgICAgICBpZiAocGF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0Y2hlc0ZvdW5kLnB1c2gocGF0Y2gpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChkZWJ1ZyAmJiBkZWJ1Zy5zaG93Rm91bmRQYXRjaGVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9kcmF3UmVjdChwYXRjaC5wb3MsIHRoaXMuX3N1YkltYWdlV3JhcHBlci5zaXplLCAnIzk5ZmYwMCcsIDIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhdGNoZXNGb3VuZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGaW5kcyB0aG9zZSBjb25uZWN0ZWQgYXJlYXMgd2hpY2ggY29udGFpbiBhdCBsZWFzdCA2IHBhdGNoZXNcbiAgICAgKiBhbmQgcmV0dXJucyB0aGVtIG9yZGVyZWQgREVTQyBieSB0aGUgbnVtYmVyIG9mIGNvbnRhaW5lZCBwYXRjaGVzXG4gICAgICogQHBhcmFtIG1heExhYmVsXG4gICAgICovXG4gICAgcHJpdmF0ZSBfZmluZEJpZ2dlc3RDb25uZWN0ZWRBcmVhcyhtYXhMYWJlbDogbnVtYmVyKTogQXJyYXk8bnVtYmVyPiB7XG4gICAgICAgIGxldCBsYWJlbEhpc3QgPSBuZXcgQXJyYXk8bnVtYmVyPihtYXhMYWJlbCkuZmlsbCgwKTtcblxuICAgICAgICB0aGlzLl9wYXRjaExhYmVsR3JpZC5kYXRhLmZvckVhY2goKGRhdGE6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgaWYgKGRhdGEgPiAwKSB7XG4gICAgICAgICAgICAgICAgbGFiZWxIaXN0W2RhdGEgLSAxXSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBleHRyYWN0IHRvcCBhcmVhcyB3aXRoIGF0IGxlYXN0IDYgcGF0Y2hlcyBwcmVzZW50XG4gICAgICAgIGNvbnN0IHRvcExhYmVscyA9IGxhYmVsSGlzdC5tYXAoKHZhbHVlLCBpbmRleCkgPT4gKHsgdmFsdWUsIGluZGV4IH0pKVxuICAgICAgICAgICAgLmZpbHRlcigoeyB2YWx1ZSB9KSA9PiB2YWx1ZSA+PSA1KS5zb3J0KChhLCBiKSA9PiBiLnZhbHVlIC0gYS52YWx1ZSkubWFwKCh7IGluZGV4IH0pID0+IGluZGV4ICsgMSk7XG5cbiAgICAgICAgcmV0dXJuIHRvcExhYmVscztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIHByaXZhdGUgX2ZpbmRCb3hlcyh0b3BMYWJlbHM6IEFycmF5PG51bWJlcj4sIG1heExhYmVsOiBudW1iZXIpOiBBcnJheTxCb3g+IHtcbiAgICAgICAgY29uc3QgYm94ZXMgPSBuZXcgQXJyYXk8Qm94PigpO1xuICAgICAgICBjb25zdCBzaG93UmVtYWluaW5nUGF0Y2hMYWJlbHMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgICAgICAgICB0aGlzLl9jb25maWcuZGVidWcgJiYgdGhpcy5fY29uZmlnLmRlYnVnLnNob3dSZW1haW5pbmdQYXRjaExhYmVscztcblxuICAgICAgICB0b3BMYWJlbHMuZm9yRWFjaChsYWJlbCA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXRjaGVzID0gbmV3IEFycmF5PFBhdGNoPigpO1xuXG4gICAgICAgICAgICB0aGlzLl9wYXRjaExhYmVsR3JpZC5kYXRhLmZvckVhY2goKGRhdGE6IG51bWJlciwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhID09PSBsYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBwYXRjaGVzLnB1c2godGhpcy5faW1hZ2VUb1BhdGNoR3JpZFtpbmRleF0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25zdCBib3ggPSB0aGlzLl9ib3hGcm9tUGF0Y2hlcyhwYXRjaGVzKTtcblxuICAgICAgICAgICAgaWYgKGJveCkge1xuICAgICAgICAgICAgICAgIGJveGVzLnB1c2goYm94KTtcblxuICAgICAgICAgICAgICAgIGlmIChzaG93UmVtYWluaW5nUGF0Y2hMYWJlbHMpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZHJhdyBwYXRjaC1sYWJlbHMgaWYgcmVxdWVzdGVkXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGhzdjogSFNWID0gWyhsYWJlbCAvIChtYXhMYWJlbCArIDEpKSAqIDM2MCwgMSwgMV07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJnYjogUkdCID0gWzAsIDAsIDBdO1xuICAgICAgICAgICAgICAgICAgICBoc3YycmdiKGhzdiwgcmdiKTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb2xvciA9IGByZ2IoJHtyZ2Iuam9pbignLCcpfSlgO1xuXG4gICAgICAgICAgICAgICAgICAgIHBhdGNoZXMuZm9yRWFjaCgoeyBwb3MgfSkgPT4gdGhpcy5fZHJhd1JlY3QocG9zLCB0aGlzLl9zdWJJbWFnZVdyYXBwZXIuc2l6ZSwgY29sb3IsIDIpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBib3hlcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGaW5kIHNpbWlsYXIgbW9tZW50cyAodmlhIGNsdXN0ZXIpXG4gICAgICogQHBhcmFtIG1vbWVudHNcbiAgICAgKi9cbiAgICBwcml2YXRlIF9zaW1pbGFyTW9tZW50cyhtb21lbnRzOiBBcnJheTxNb21lbnQ+KTogQXJyYXk8TW9tZW50PiB7XG4gICAgICAgIGNvbnN0IGNsdXN0ZXJzID0gQ2x1c3Rlci5jbHVzdGVyaXplKG1vbWVudHMsIE1vbWVudFNpbWlsYXJpdHlUaHJlc2hvbGQpO1xuICAgICAgICBjb25zdCB0b3BDbHVzdGVyID0gY2x1c3RlcnMucmVkdWNlKCh0b3AsIGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvdW50ID0gaXRlbS5tb21lbnRzLmxlbmd0aDtcbiAgICAgICAgICAgIHJldHVybiBjb3VudCA+IHRvcC5jb3VudCA/IHsgaXRlbSwgY291bnQgfSA6IHRvcDtcbiAgICAgICAgfSwgeyBpdGVtOiB7IG1vbWVudHM6IFtdIH0sIGNvdW50OiAwIH0pO1xuICAgICAgICBjb25zdCByZXN1bHQgPSB0b3BDbHVzdGVyLml0ZW0ubW9tZW50cztcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHByaXZhdGUgX3NrZWxldG9uaXplKHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2JpbmFyeUltYWdlV3JhcHBlci5zdWJJbWFnZUFzQ29weSh0aGlzLl9zdWJJbWFnZVdyYXBwZXIsIHgsIHkpO1xuICAgICAgICB0aGlzLl9za2VsZXRvbml6ZXIuc2tlbGV0b25pemUoKTtcblxuICAgICAgICAvLyBTaG93IHNrZWxldG9uIGlmIHJlcXVlc3RlZFxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLl9jb25maWcuZGVidWcgJiYgdGhpcy5fY29uZmlnLmRlYnVnLnNob3dTa2VsZXRvbikge1xuICAgICAgICAgICAgdGhpcy5fc2tlbEltYWdlV3JhcHBlci5vdmVybGF5KHRoaXMuX2JpbmFyeUNvbnRleHQsIDM2MCwgeCwgeSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFeHRyYWN0cyBhbmQgZGVzY3JpYmVzIHRob3NlIHBhdGNoZXMgd2hpY2ggc2VlbSB0byBjb250YWluIGEgYmFyY29kZSBwYXR0ZXJuXG4gICAgICogQHBhcmFtIG1vbWVudHNcbiAgICAgKiBAcGFyYW0gaW5kZXhcbiAgICAgKiBAcGFyYW0geFxuICAgICAqIEBwYXJhbSB5XG4gICAgICogQHJldHVybnMgbGlzdCBvZiBwYXRjaGVzXG4gICAgICovXG4gICAgcHJpdmF0ZSBfZGVzY3JpYmVQYXRjaChtb21lbnRzOiBBcnJheTxNb21lbnQ+LCBpbmRleDogbnVtYmVyLCB4OiBudW1iZXIsIHk6IG51bWJlcik6IFBhdGNoIHtcbiAgICAgICAgaWYgKG1vbWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgY29uc3QgbWluQ29tcG9uZW50V2VpZ2h0ID0gTWF0aC5jZWlsKHRoaXMuX3BhdGNoU2l6ZS54IC8gMyk7XG4gICAgICAgICAgICAvLyBvbmx5IGNvbGxlY3QgbW9tZW50cyB3aGljaCBhcmVhIGNvdmVycyBhdCBsZWFzdCBtaW5Db21wb25lbnRXZWlnaHQgcGl4ZWxzXG4gICAgICAgICAgICBjb25zdCBlbGlnaWJsZU1vbWVudHMgPSBtb21lbnRzLmZpbHRlcihtb21lbnQgPT4gbW9tZW50Lm0wMCA+IG1pbkNvbXBvbmVudFdlaWdodCk7XG5cbiAgICAgICAgICAgIC8vIGlmIGF0IGxlYXN0IDIgbW9tZW50cyBhcmUgZm91bmQgd2hpY2ggaGF2ZSBhdCBsZWFzdCBtaW5Db21wb25lbnRXZWlnaHRzIGNvdmVyZWRcbiAgICAgICAgICAgIGlmIChlbGlnaWJsZU1vbWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1hdGNoaW5nTW9tZW50cyA9IHRoaXMuX3NpbWlsYXJNb21lbnRzKGVsaWdpYmxlTW9tZW50cyk7XG4gICAgICAgICAgICAgICAgY29uc3QgbGVuZ3RoID0gbWF0Y2hpbmdNb21lbnRzLmxlbmd0aCB8IDA7XG5cbiAgICAgICAgICAgICAgICAvLyBPbmx5IHR3byBvZiB0aGUgbW9tZW50cyBhcmUgYWxsb3dlZCBub3QgdG8gZml0IGludG8gdGhlIGVxdWF0aW9uXG4gICAgICAgICAgICAgICAgaWYgKGxlbmd0aCA+IDEgJiYgKGxlbmd0aCA8PCAyKSA+PSBlbGlnaWJsZU1vbWVudHMubGVuZ3RoICogMyAmJiAobGVuZ3RoIDw8IDIpID4gbW9tZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZGV0ZXJtaW5lIHRoZSBzaW1pbGFyaXR5IG9mIHRoZSBtb21lbnRzXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJhZCA9IG1hdGNoaW5nTW9tZW50cy5yZWR1Y2UoKHN1bTogbnVtYmVyLCBtb21lbnQ6IE1vbWVudCkgPT4gc3VtICsgbW9tZW50LnJhZCwgMCkgLyBsZW5ndGg7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zOiB7IHgsIHkgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveDogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgeCwgeSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgeDogeCArIHRoaXMuX3N1YkltYWdlV3JhcHBlci5zaXplLngsIHkgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHg6IHggKyB0aGlzLl9zdWJJbWFnZVdyYXBwZXIuc2l6ZS54LCB5OiB5ICsgdGhpcy5fc3ViSW1hZ2VXcmFwcGVyLnNpemUueSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgeCwgeTogeSArIHRoaXMuX3N1YkltYWdlV3JhcHBlci5zaXplLnkgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vbWVudHM6IG1hdGNoaW5nTW9tZW50cyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IE1hdGguY29zKHJhZCksXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBNYXRoLnNpbihyYWQpXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfbm90WWV0UHJvY2Vzc2VkKCk6IG51bWJlciB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fcGF0Y2hMYWJlbEdyaWQuZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3BhdGNoTGFiZWxHcmlkLmRhdGFbaV0gPT09IDAgJiYgdGhpcy5fcGF0Y2hHcmlkLmRhdGFbaV0gPT09IDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fcGF0Y2hMYWJlbEdyaWQuZGF0YS5sZW5ndGg7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfdHJhY2UoY3VycmVudEluZGV4OiBudW1iZXIsIGxhYmVsOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgdGhyZXNob2xkID0gMC45NTtcbiAgICAgICAgY29uc3QgY3VycmVudDogUG9pbnQgPSB7XG4gICAgICAgICAgICB4OiBjdXJyZW50SW5kZXggJSB0aGlzLl9wYXRjaExhYmVsR3JpZC5zaXplLngsXG4gICAgICAgICAgICB5OiAoY3VycmVudEluZGV4IC8gdGhpcy5fcGF0Y2hMYWJlbEdyaWQuc2l6ZS54KSB8IDBcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoY3VycmVudEluZGV4IDwgdGhpcy5fcGF0Y2hMYWJlbEdyaWQuZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRQYXRjaCA9IHRoaXMuX2ltYWdlVG9QYXRjaEdyaWRbY3VycmVudEluZGV4XTtcbiAgICAgICAgICAgIC8vIGFzc2lnbiBsYWJlbFxuICAgICAgICAgICAgdGhpcy5fcGF0Y2hMYWJlbEdyaWQuZGF0YVtjdXJyZW50SW5kZXhdID0gbGFiZWw7XG5cbiAgICAgICAgICAgIFNlYXJjaERpcmVjdGlvbnMuZm9yRWFjaChkaXJlY3Rpb24gPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHkgPSBjdXJyZW50LnkgKyBkaXJlY3Rpb25bMF07XG4gICAgICAgICAgICAgICAgY29uc3QgeCA9IGN1cnJlbnQueCArIGRpcmVjdGlvblsxXTtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IHkgKiB0aGlzLl9wYXRjaExhYmVsR3JpZC5zaXplLnggKyB4O1xuXG4gICAgICAgICAgICAgICAgLy8gY29udGludWUgaWYgcGF0Y2ggZW1wdHlcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fcGF0Y2hHcmlkLmRhdGFbaW5kZXhdID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BhdGNoTGFiZWxHcmlkLmRhdGFbaW5kZXhdID0gTnVtYmVyLk1BWF9WQUxVRTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3BhdGNoTGFiZWxHcmlkLmRhdGFbaW5kZXhdID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhdGNoID0gdGhpcy5faW1hZ2VUb1BhdGNoR3JpZFtpbmRleF07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNpbWlsYXJpdHkgPSBNYXRoLmFicyhwYXRjaC54ICogY3VycmVudFBhdGNoLnggKyBwYXRjaC55ICogY3VycmVudFBhdGNoLnkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2ltaWxhcml0eSA+IHRocmVzaG9sZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdHJhY2UoaW5kZXgsIGxhYmVsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmluZHMgcGF0Y2hlcyB3aGljaCBhcmUgY29ubmVjdGVkIGFuZCBzaGFyZSB0aGUgc2FtZSBvcmllbnRhdGlvblxuICAgICAqIEBwYXJhbSBwYXRjaGVzRm91bmRcbiAgICAgKi9cbiAgICBwcml2YXRlIF9yYXN0ZXJpemVBbmd1bGFyU2ltaWxhcml0eShwYXRjaGVzRm91bmQ6IEFycmF5PFBhdGNoPik6IG51bWJlciB7XG4gICAgICAgIGxldCBsYWJlbCA9IDA7XG4gICAgICAgIGNvbnN0IGhzdjogSFNWID0gWzAsIDEsIDFdO1xuICAgICAgICBjb25zdCByZ2I6IFJHQiA9IFswLCAwLCAwXTtcblxuICAgICAgICAvLyBwcmVwYXJlIGZvciBmaW5kaW5nIHRoZSByaWdodCBwYXRjaGVzXG4gICAgICAgIHRoaXMuX3BhdGNoR3JpZC5kYXRhLmZpbGwoMCk7XG4gICAgICAgIHRoaXMuX3BhdGNoTGFiZWxHcmlkLmRhdGEuZmlsbCgwKTtcbiAgICAgICAgdGhpcy5faW1hZ2VUb1BhdGNoR3JpZC5maWxsKG51bGwpO1xuXG4gICAgICAgIHBhdGNoZXNGb3VuZC5mb3JFYWNoKHBhdGNoID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2ltYWdlVG9QYXRjaEdyaWRbcGF0Y2guaW5kZXhdID0gcGF0Y2g7XG4gICAgICAgICAgICB0aGlzLl9wYXRjaEdyaWQuZGF0YVtwYXRjaC5pbmRleF0gPSAxO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyByYXN0ZXJpemUgdGhlIHBhdGNoZXMgZm91bmQgdG8gZGV0ZXJtaW5lIGFyZWFcbiAgICAgICAgdGhpcy5fcGF0Y2hHcmlkLnplcm9Cb3JkZXIoKTtcblxuICAgICAgICBsZXQgY3VycmVudEluZGV4ID0gMDtcbiAgICAgICAgd2hpbGUgKChjdXJyZW50SW5kZXggPSB0aGlzLl9ub3RZZXRQcm9jZXNzZWQoKSkgPCB0aGlzLl9wYXRjaExhYmVsR3JpZC5kYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgbGFiZWwrKztcbiAgICAgICAgICAgIHRoaXMuX3RyYWNlKGN1cnJlbnRJbmRleCwgbGFiZWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZHJhdyBwYXRjaC1sYWJlbHMgaWYgcmVxdWVzdGVkXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuX2NvbmZpZy5kZWJ1ZyAmJiB0aGlzLl9jb25maWcuZGVidWcuc2hvd1BhdGNoTGFiZWxzKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuX3BhdGNoTGFiZWxHcmlkLmRhdGEubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fcGF0Y2hMYWJlbEdyaWQuZGF0YVtqXSA+IDAgJiYgdGhpcy5fcGF0Y2hMYWJlbEdyaWQuZGF0YVtqXSA8PSBsYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXRjaCA9IHRoaXMuX2ltYWdlVG9QYXRjaEdyaWRbal07XG4gICAgICAgICAgICAgICAgICAgIGhzdlswXSA9ICh0aGlzLl9wYXRjaExhYmVsR3JpZC5kYXRhW2pdIC8gKGxhYmVsICsgMSkpICogMzYwO1xuICAgICAgICAgICAgICAgICAgICBoc3YycmdiKGhzdiwgcmdiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZHJhd1JlY3QocGF0Y2gucG9zLCB0aGlzLl9zdWJJbWFnZVdyYXBwZXIuc2l6ZSwgYHJnYigke3JnYi5qb2luKCcsJyl9KWAsIDIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBsYWJlbDtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9kcmF3UmVjdCh7IHgsIHkgfTogUG9pbnQsIHNpemU6IFBvaW50LCBjb2xvcjogc3RyaW5nLCBsaW5lV2lkdGg6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLl9iaW5hcnlDb250ZXh0LnN0cm9rZVN0eWxlID0gY29sb3I7XG4gICAgICAgIHRoaXMuX2JpbmFyeUNvbnRleHQuZmlsbFN0eWxlID0gY29sb3I7XG4gICAgICAgIHRoaXMuX2JpbmFyeUNvbnRleHQubGluZVdpZHRoID0gbGluZVdpZHRoIHx8IDE7XG4gICAgICAgIHRoaXMuX2JpbmFyeUNvbnRleHQuc3Ryb2tlUmVjdCh4LCB5LCBzaXplLngsIHNpemUueSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZHJhd1BhdGgocGF0aDogQXJyYXk8UG9pbnQ+LCBjb2xvcjogc3RyaW5nLCBsaW5lV2lkdGg6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBJbWFnZURlYnVnLmRyYXdQYXRoKHBhdGgsIHRoaXMuX2JpbmFyeUNvbnRleHQsIGNvbG9yLCBsaW5lV2lkdGgpO1xuICAgIH1cbn1cbiIsIi8qKlxuICogQGJvcnJvd3MgaHR0cDovL3d3dy5jb2RlcHJvamVjdC5jb20vVGlwcy80MDcxNzIvQ29ubmVjdGVkLUNvbXBvbmVudC1MYWJlbGluZy1hbmQtVmVjdG9yaXphdGlvblxuICovXG5cbmltcG9ydCB7IEltYWdlV3JhcHBlciB9IGZyb20gJy4uL2NvbW1vbi9pbWFnZS13cmFwcGVyJztcbmltcG9ydCB7IENvbnRvdXJWZXJ0ZXgsIFRyYWNlciB9IGZyb20gJy4vdHJhY2VyJztcblxuZW51bSBFZGdlTGFiZWwge1xuICAgIE91dHNpZGUgPSAtMzI3NjcsXG4gICAgSW5zaWRlID0gLTMyNzY2XG59O1xuXG5lbnVtIENvbnRvdXJEaXJlY3Rpb24ge1xuICAgIENXID0gMCxcbiAgICBDQ1cgPSAxLFxuICAgIFVua25vd24gPSAyXG59O1xuXG5pbnRlcmZhY2UgQ29udG91ciB7XG4gICAgZGlyOiBDb250b3VyRGlyZWN0aW9uO1xuICAgIGluZGV4OiBudW1iZXI7XG4gICAgZmlyc3RWZXJ0ZXg6IENvbnRvdXJWZXJ0ZXg7XG4gICAgcHJldmlvdXNQZWVyPzogQ29udG91cjtcbiAgICBuZXh0UGVlcj86IENvbnRvdXI7XG4gICAgaW5zaWRlQ29udG91cnM6IENvbnRvdXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmFzdGVyUmVzdWx0IHtcbiAgICBjYzogQ29udG91cjtcbiAgICBjb3VudDogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgUmFzdGVyaXplciB7XG4gICAgcHJpdmF0ZSBfd2lkdGg6IG51bWJlcjtcbiAgICBwcml2YXRlIF9oZWlnaHQ6IG51bWJlcjtcbiAgICBwcml2YXRlIF90cmFjZXI6IFRyYWNlcjtcbiAgICBwcml2YXRlIF9pbWFnZURhdGE6IFVpbnQ4QXJyYXk7XG4gICAgcHJpdmF0ZSBfbGFiZWxEYXRhOiBBcnJheTxudW1iZXI+O1xuXG4gICAgY29uc3RydWN0b3IoaW1hZ2VXcmFwcGVyOiBJbWFnZVdyYXBwZXI8VWludDhBcnJheT4sIGxhYmVsV3JhcHBlcjogSW1hZ2VXcmFwcGVyPEFycmF5PG51bWJlcj4+KSB7XG4gICAgICAgIHRoaXMuX2ltYWdlRGF0YSA9IGltYWdlV3JhcHBlci5kYXRhO1xuICAgICAgICB0aGlzLl9sYWJlbERhdGEgPSBsYWJlbFdyYXBwZXIuZGF0YSBhcyBBcnJheTxudW1iZXI+O1xuICAgICAgICB0aGlzLl93aWR0aCA9IGltYWdlV3JhcHBlci5zaXplLng7XG4gICAgICAgIHRoaXMuX2hlaWdodCA9IGltYWdlV3JhcHBlci5zaXplLnk7XG4gICAgICAgIHRoaXMuX3RyYWNlciA9IG5ldyBUcmFjZXIoaW1hZ2VXcmFwcGVyLCBsYWJlbFdyYXBwZXIpO1xuICAgIH1cblxuICAgIHJhc3Rlcml6ZShkZXB0aExhYmVsOiBudW1iZXIpOiBSYXN0ZXJSZXN1bHQge1xuICAgICAgICBjb25zdCBjb2xvck1hcCA9IG5ldyBBcnJheTxudW1iZXI+KCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0MDA7IGkrKykge1xuICAgICAgICAgICAgY29sb3JNYXBbaV0gPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgY29sb3JNYXBbMF0gPSB0aGlzLl9pbWFnZURhdGFbMF07XG5cbiAgICAgICAgbGV0IGNjOiBDb250b3VyID0gbnVsbDtcbiAgICAgICAgbGV0IHNjOiBDb250b3VyO1xuICAgICAgICBsZXQgY29ubmVjdGVkQ291bnQgPSAwO1xuXG4gICAgICAgIGZvciAobGV0IGN5ID0gMTsgY3kgPCB0aGlzLl9oZWlnaHQgLSAxOyBjeSsrKSB7XG4gICAgICAgICAgICBsZXQgbGFiZWxJbmRleCA9IDA7XG4gICAgICAgICAgICBsZXQgYmMgPSBjb2xvck1hcFswXTtcblxuICAgICAgICAgICAgZm9yIChsZXQgY3ggPSAxOyBjeCA8IHRoaXMuX3dpZHRoIC0gMTsgY3grKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBvcyA9IGN5ICogdGhpcy5fd2lkdGggKyBjeDtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9sYWJlbERhdGFbcG9zXSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb2xvciA9IHRoaXMuX2ltYWdlRGF0YVtwb3NdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29sb3IgIT09IGJjKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFiZWxJbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxjID0gY29ubmVjdGVkQ291bnQgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yTWFwW2xjXSA9IGNvbG9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJjID0gY29sb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmVydGV4ID0gdGhpcy5fdHJhY2VyLmNvbnRvdXJUcmFjaW5nKGN5LCBjeCwgbGMsIGNvbG9yLCBFZGdlTGFiZWwuT3V0c2lkZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZlcnRleCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25uZWN0ZWRDb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbEluZGV4ID0gbGM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHA6IENvbnRvdXIgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXI6IENvbnRvdXJEaXJlY3Rpb24uQ1csXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleDogbGFiZWxJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0VmVydGV4OiB2ZXJ0ZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0UGVlcjogY2MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNpZGVDb250b3VyczogbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2MgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnByZXZpb3VzUGVlciA9IHA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MgPSBwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmVydGV4ID0gdGhpcy5fdHJhY2VyLmNvbnRvdXJUcmFjaW5nKGN5LCBjeCwgRWRnZUxhYmVsLkluc2lkZSwgY29sb3IsIGxhYmVsSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2ZXJ0ZXggIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcDogQ29udG91ciA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcjogZGVwdGhMYWJlbCA9PT0gMCA/IENvbnRvdXJEaXJlY3Rpb24uQ0NXIDogQ29udG91ckRpcmVjdGlvbi5DVyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0VmVydGV4OiB2ZXJ0ZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleDogZGVwdGhMYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc2lkZUNvbnRvdXJzOiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjID0gY2M7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlICgoc2MgIT09IG51bGwpICYmIHNjLmluZGV4ICE9PSBsYWJlbEluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYyA9IHNjLm5leHRQZWVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzYyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcC5uZXh0UGVlciA9IHNjLmluc2lkZUNvbnRvdXJzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNjLmluc2lkZUNvbnRvdXJzICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2MuaW5zaWRlQ29udG91cnMucHJldmlvdXNQZWVyID0gcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjLmluc2lkZUNvbnRvdXJzID0gcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2xhYmVsRGF0YVtwb3NdID0gbGFiZWxJbmRleDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5fbGFiZWxEYXRhW3Bvc10gPT09IEVkZ2VMYWJlbC5JbnNpZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxJbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGJjID0gdGhpcy5faW1hZ2VEYXRhW3Bvc107XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9sYWJlbERhdGFbcG9zXSA9PT0gRWRnZUxhYmVsLk91dHNpZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxJbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGJjID0gY29sb3JNYXBbMF07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxJbmRleCA9IHRoaXMuX2xhYmVsRGF0YVtwb3NdO1xuICAgICAgICAgICAgICAgICAgICBiYyA9IGNvbG9yTWFwW2xhYmVsSW5kZXhdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHNjID0gY2M7XG4gICAgICAgIHdoaWxlIChzYyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgc2MuaW5kZXggPSBkZXB0aExhYmVsO1xuICAgICAgICAgICAgc2MgPSBzYy5uZXh0UGVlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjYyxcbiAgICAgICAgICAgIGNvdW50OiBjb25uZWN0ZWRDb3VudFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGRyYXdDb250b3VyKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIGZpcnN0Q29udG91cjogQ29udG91cik6IHZvaWQge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbiAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9ICdyZWQnO1xuICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICdyZWQnO1xuICAgICAgICBjb250ZXh0LmxpbmVXaWR0aCA9IDE7XG5cbiAgICAgICAgbGV0IHBxID0gZmlyc3RDb250b3VyO1xuICAgICAgICBsZXQgaXEgPSBwcSAmJiBwcS5pbnNpZGVDb250b3VycztcblxuICAgICAgICB3aGlsZSAocHEgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGxldCBxID0gaXEgfHwgcHE7XG5cbiAgICAgICAgICAgIGlmIChpcSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlxID0gaXEubmV4dFBlZXI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBxID0gcHEubmV4dFBlZXI7XG4gICAgICAgICAgICAgICAgaXEgPSBwcSAmJiBwcS5pbnNpZGVDb250b3VycztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3dpdGNoIChxLmRpcikge1xuICAgICAgICAgICAgICAgIGNhc2UgQ29udG91ckRpcmVjdGlvbi5DVzoge1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gJ3JlZCc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIENvbnRvdXJEaXJlY3Rpb24uQ0NXOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSAnYmx1ZSc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIENvbnRvdXJEaXJlY3Rpb24uVW5rbm93bjoge1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gJ2dyZWVuJztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgcCA9IHEuZmlyc3RWZXJ0ZXg7XG4gICAgICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY29udGV4dC5tb3ZlVG8ocC54LCBwLnkpO1xuXG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgcCA9IHAubmV4dDtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmxpbmVUbyhwLngsIHAueSk7XG4gICAgICAgICAgICB9IHdoaWxlIChwICE9PSBxLmZpcnN0VmVydGV4KTtcblxuICAgICAgICAgICAgY29udGV4dC5zdHJva2UoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIGVxZXFlcSAqL1xuZnVuY3Rpb24gU2tlbGV0b25pemVyKHN0ZGxpYiwgZm9yZWlnbiwgYnVmZmVyKSB7XG4gICAgXCJ1c2UgYXNtXCI7XG5cbiAgICB2YXIgaW1hZ2VzID0gbmV3IHN0ZGxpYi5VaW50OEFycmF5KGJ1ZmZlciksXG4gICAgICAgIHNpemUgPSBmb3JlaWduLnNpemUgfCAwLFxuICAgICAgICBpbXVsID0gc3RkbGliLk1hdGguaW11bDtcblxuICAgIGZ1bmN0aW9uIGVyb2RlKGluSW1hZ2VQdHIsIG91dEltYWdlUHRyKSB7XG4gICAgICAgIGluSW1hZ2VQdHIgPSBpbkltYWdlUHRyIHwgMDtcbiAgICAgICAgb3V0SW1hZ2VQdHIgPSBvdXRJbWFnZVB0ciB8IDA7XG5cbiAgICAgICAgdmFyIHYgPSAwLFxuICAgICAgICAgICAgdSA9IDAsXG4gICAgICAgICAgICBzdW0gPSAwLFxuICAgICAgICAgICAgeVN0YXJ0MSA9IDAsXG4gICAgICAgICAgICB5U3RhcnQyID0gMCxcbiAgICAgICAgICAgIHhTdGFydDEgPSAwLFxuICAgICAgICAgICAgeFN0YXJ0MiA9IDAsXG4gICAgICAgICAgICBvZmZzZXQgPSAwO1xuXG4gICAgICAgIGZvciAodiA9IDE7ICh2IHwgMCkgPCAoKHNpemUgLSAxKSB8IDApOyB2ID0gKHYgKyAxKSB8IDApIHtcbiAgICAgICAgICAgIG9mZnNldCA9IChvZmZzZXQgKyBzaXplKSB8IDA7XG4gICAgICAgICAgICBmb3IgKHUgPSAxOyAodSB8IDApIDwgKChzaXplIC0gMSkgfCAwKTsgdSA9ICh1ICsgMSkgfCAwKSB7XG4gICAgICAgICAgICAgICAgeVN0YXJ0MSA9IChvZmZzZXQgLSBzaXplKSB8IDA7XG4gICAgICAgICAgICAgICAgeVN0YXJ0MiA9IChvZmZzZXQgKyBzaXplKSB8IDA7XG4gICAgICAgICAgICAgICAgeFN0YXJ0MSA9ICh1IC0gMSkgfCAwO1xuICAgICAgICAgICAgICAgIHhTdGFydDIgPSAodSArIDEpIHwgMDtcbiAgICAgICAgICAgICAgICBzdW0gPSAoKGltYWdlc1soaW5JbWFnZVB0ciArIHlTdGFydDEgKyB4U3RhcnQxKSB8IDBdIHwgMClcbiAgICAgICAgICAgICAgICAgICAgKyAoaW1hZ2VzWyhpbkltYWdlUHRyICsgeVN0YXJ0MSArIHhTdGFydDIpIHwgMF0gfCAwKVxuICAgICAgICAgICAgICAgICAgICArIChpbWFnZXNbKGluSW1hZ2VQdHIgKyBvZmZzZXQgKyB1KSB8IDBdIHwgMClcbiAgICAgICAgICAgICAgICAgICAgKyAoaW1hZ2VzWyhpbkltYWdlUHRyICsgeVN0YXJ0MiArIHhTdGFydDEpIHwgMF0gfCAwKVxuICAgICAgICAgICAgICAgICAgICArIChpbWFnZXNbKGluSW1hZ2VQdHIgKyB5U3RhcnQyICsgeFN0YXJ0MikgfCAwXSB8IDApKSB8IDA7XG4gICAgICAgICAgICAgICAgaWYgKChzdW0gfCAwKSA9PSAoNSB8IDApKSB7XG4gICAgICAgICAgICAgICAgICAgIGltYWdlc1sob3V0SW1hZ2VQdHIgKyBvZmZzZXQgKyB1KSB8IDBdID0gMTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpbWFnZXNbKG91dEltYWdlUHRyICsgb2Zmc2V0ICsgdSkgfCAwXSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdWJ0cmFjdChhSW1hZ2VQdHIsIGJJbWFnZVB0ciwgb3V0SW1hZ2VQdHIpIHtcbiAgICAgICAgYUltYWdlUHRyID0gYUltYWdlUHRyIHwgMDtcbiAgICAgICAgYkltYWdlUHRyID0gYkltYWdlUHRyIHwgMDtcbiAgICAgICAgb3V0SW1hZ2VQdHIgPSBvdXRJbWFnZVB0ciB8IDA7XG5cbiAgICAgICAgdmFyIGxlbmd0aCA9IDA7XG5cbiAgICAgICAgbGVuZ3RoID0gaW11bChzaXplLCBzaXplKSB8IDA7XG5cbiAgICAgICAgd2hpbGUgKChsZW5ndGggfCAwKSA+IDApIHtcbiAgICAgICAgICAgIGxlbmd0aCA9IChsZW5ndGggLSAxKSB8IDA7XG4gICAgICAgICAgICBpbWFnZXNbKG91dEltYWdlUHRyICsgbGVuZ3RoKSB8IDBdID1cbiAgICAgICAgICAgICAgICAoKGltYWdlc1soYUltYWdlUHRyICsgbGVuZ3RoKSB8IDBdIHwgMCkgLSAoaW1hZ2VzWyhiSW1hZ2VQdHIgKyBsZW5ndGgpIHwgMF0gfCAwKSkgfCAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYml0d2lzZU9yKGFJbWFnZVB0ciwgYkltYWdlUHRyLCBvdXRJbWFnZVB0cikge1xuICAgICAgICBhSW1hZ2VQdHIgPSBhSW1hZ2VQdHIgfCAwO1xuICAgICAgICBiSW1hZ2VQdHIgPSBiSW1hZ2VQdHIgfCAwO1xuICAgICAgICBvdXRJbWFnZVB0ciA9IG91dEltYWdlUHRyIHwgMDtcblxuICAgICAgICB2YXIgbGVuZ3RoID0gMDtcblxuICAgICAgICBsZW5ndGggPSBpbXVsKHNpemUsIHNpemUpIHwgMDtcblxuICAgICAgICB3aGlsZSAoKGxlbmd0aCB8IDApID4gMCkge1xuICAgICAgICAgICAgbGVuZ3RoID0gKGxlbmd0aCAtIDEpIHwgMDtcbiAgICAgICAgICAgIGltYWdlc1sob3V0SW1hZ2VQdHIgKyBsZW5ndGgpIHwgMF0gPVxuICAgICAgICAgICAgICAgICgoaW1hZ2VzWyhhSW1hZ2VQdHIgKyBsZW5ndGgpIHwgMF0gfCAwKSB8IChpbWFnZXNbKGJJbWFnZVB0ciArIGxlbmd0aCkgfCAwXSB8IDApKSB8IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb3VudE5vblplcm8oaW1hZ2VQdHIpIHtcbiAgICAgICAgaW1hZ2VQdHIgPSBpbWFnZVB0ciB8IDA7XG5cbiAgICAgICAgdmFyIHN1bSA9IDAsXG4gICAgICAgICAgICBsZW5ndGggPSAwO1xuXG4gICAgICAgIGxlbmd0aCA9IGltdWwoc2l6ZSwgc2l6ZSkgfCAwO1xuXG4gICAgICAgIHdoaWxlICgobGVuZ3RoIHwgMCkgPiAwKSB7XG4gICAgICAgICAgICBsZW5ndGggPSAobGVuZ3RoIC0gMSkgfCAwO1xuICAgICAgICAgICAgc3VtID0gKChzdW0gfCAwKSArIChpbWFnZXNbKGltYWdlUHRyICsgbGVuZ3RoKSB8IDBdIHwgMCkpIHwgMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoc3VtIHwgMCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5pdChpbWFnZVB0ciwgdmFsdWUpIHtcbiAgICAgICAgaW1hZ2VQdHIgPSBpbWFnZVB0ciB8IDA7XG4gICAgICAgIHZhbHVlID0gdmFsdWUgfCAwO1xuXG4gICAgICAgIHZhciBsZW5ndGggPSAwO1xuXG4gICAgICAgIGxlbmd0aCA9IGltdWwoc2l6ZSwgc2l6ZSkgfCAwO1xuXG4gICAgICAgIHdoaWxlICgobGVuZ3RoIHwgMCkgPiAwKSB7XG4gICAgICAgICAgICBsZW5ndGggPSAobGVuZ3RoIC0gMSkgfCAwO1xuICAgICAgICAgICAgaW1hZ2VzWyhpbWFnZVB0ciArIGxlbmd0aCkgfCAwXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlsYXRlKGluSW1hZ2VQdHIsIG91dEltYWdlUHRyKSB7XG4gICAgICAgIGluSW1hZ2VQdHIgPSBpbkltYWdlUHRyIHwgMDtcbiAgICAgICAgb3V0SW1hZ2VQdHIgPSBvdXRJbWFnZVB0ciB8IDA7XG5cbiAgICAgICAgdmFyIHYgPSAwLFxuICAgICAgICAgICAgdSA9IDAsXG4gICAgICAgICAgICBzdW0gPSAwLFxuICAgICAgICAgICAgeVN0YXJ0MSA9IDAsXG4gICAgICAgICAgICB5U3RhcnQyID0gMCxcbiAgICAgICAgICAgIHhTdGFydDEgPSAwLFxuICAgICAgICAgICAgeFN0YXJ0MiA9IDAsXG4gICAgICAgICAgICBvZmZzZXQgPSAwO1xuXG4gICAgICAgIGZvciAodiA9IDE7ICh2IHwgMCkgPCAoKHNpemUgLSAxKSB8IDApOyB2ID0gKHYgKyAxKSB8IDApIHtcbiAgICAgICAgICAgIG9mZnNldCA9IChvZmZzZXQgKyBzaXplKSB8IDA7XG4gICAgICAgICAgICBmb3IgKHUgPSAxOyAodSB8IDApIDwgKChzaXplIC0gMSkgfCAwKTsgdSA9ICh1ICsgMSkgfCAwKSB7XG4gICAgICAgICAgICAgICAgeVN0YXJ0MSA9IChvZmZzZXQgLSBzaXplKSB8IDA7XG4gICAgICAgICAgICAgICAgeVN0YXJ0MiA9IChvZmZzZXQgKyBzaXplKSB8IDA7XG4gICAgICAgICAgICAgICAgeFN0YXJ0MSA9ICh1IC0gMSkgfCAwO1xuICAgICAgICAgICAgICAgIHhTdGFydDIgPSAodSArIDEpIHwgMDtcbiAgICAgICAgICAgICAgICBzdW0gPSAoKGltYWdlc1soaW5JbWFnZVB0ciArIHlTdGFydDEgKyB4U3RhcnQxKSB8IDBdIHwgMClcbiAgICAgICAgICAgICAgICAgICAgKyAoaW1hZ2VzWyhpbkltYWdlUHRyICsgeVN0YXJ0MSArIHhTdGFydDIpIHwgMF0gfCAwKVxuICAgICAgICAgICAgICAgICAgICArIChpbWFnZXNbKGluSW1hZ2VQdHIgKyBvZmZzZXQgKyB1KSB8IDBdIHwgMClcbiAgICAgICAgICAgICAgICAgICAgKyAoaW1hZ2VzWyhpbkltYWdlUHRyICsgeVN0YXJ0MiArIHhTdGFydDEpIHwgMF0gfCAwKVxuICAgICAgICAgICAgICAgICAgICArIChpbWFnZXNbKGluSW1hZ2VQdHIgKyB5U3RhcnQyICsgeFN0YXJ0MikgfCAwXSB8IDApKSB8IDA7XG4gICAgICAgICAgICAgICAgaWYgKChzdW0gfCAwKSA+ICgwIHwgMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VzWyhvdXRJbWFnZVB0ciArIG9mZnNldCArIHUpIHwgMF0gPSAxO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGltYWdlc1sob3V0SW1hZ2VQdHIgKyBvZmZzZXQgKyB1KSB8IDBdID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1lbWNweShzcmNJbWFnZVB0ciwgZHN0SW1hZ2VQdHIpIHtcbiAgICAgICAgc3JjSW1hZ2VQdHIgPSBzcmNJbWFnZVB0ciB8IDA7XG4gICAgICAgIGRzdEltYWdlUHRyID0gZHN0SW1hZ2VQdHIgfCAwO1xuXG4gICAgICAgIHZhciBsZW5ndGggPSAwO1xuXG4gICAgICAgIGxlbmd0aCA9IGltdWwoc2l6ZSwgc2l6ZSkgfCAwO1xuXG4gICAgICAgIHdoaWxlICgobGVuZ3RoIHwgMCkgPiAwKSB7XG4gICAgICAgICAgICBsZW5ndGggPSAobGVuZ3RoIC0gMSkgfCAwO1xuICAgICAgICAgICAgaW1hZ2VzWyhkc3RJbWFnZVB0ciArIGxlbmd0aCkgfCAwXSA9IChpbWFnZXNbKHNyY0ltYWdlUHRyICsgbGVuZ3RoKSB8IDBdIHwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB6ZXJvQm9yZGVyKGltYWdlUHRyKSB7XG4gICAgICAgIGltYWdlUHRyID0gaW1hZ2VQdHIgfCAwO1xuXG4gICAgICAgIHZhciB4ID0gMCxcbiAgICAgICAgICAgIHkgPSAwO1xuXG4gICAgICAgIGZvciAoeCA9IDA7ICh4IHwgMCkgPCAoKHNpemUgLSAxKSB8IDApOyB4ID0gKHggKyAxKSB8IDApIHtcbiAgICAgICAgICAgIGltYWdlc1soaW1hZ2VQdHIgKyB4KSB8IDBdID0gMDtcbiAgICAgICAgICAgIGltYWdlc1soaW1hZ2VQdHIgKyB5KSB8IDBdID0gMDtcbiAgICAgICAgICAgIHkgPSAoKHkgKyBzaXplKSAtIDEpIHwgMDtcbiAgICAgICAgICAgIGltYWdlc1soaW1hZ2VQdHIgKyB5KSB8IDBdID0gMDtcbiAgICAgICAgICAgIHkgPSAoeSArIDEpIHwgMDtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHggPSAwOyAoeCB8IDApIDwgKHNpemUgfCAwKTsgeCA9ICh4ICsgMSkgfCAwKSB7XG4gICAgICAgICAgICBpbWFnZXNbKGltYWdlUHRyICsgeSkgfCAwXSA9IDA7XG4gICAgICAgICAgICB5ID0gKHkgKyAxKSB8IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBza2VsZXRvbml6ZSgpIHtcbiAgICAgICAgdmFyIHN1YkltYWdlUHRyID0gMCxcbiAgICAgICAgICAgIGVyb2RlZEltYWdlUHRyID0gMCxcbiAgICAgICAgICAgIHRlbXBJbWFnZVB0ciA9IDAsXG4gICAgICAgICAgICBza2VsSW1hZ2VQdHIgPSAwLFxuICAgICAgICAgICAgc3VtID0gMCxcbiAgICAgICAgICAgIGRvbmUgPSAwO1xuXG4gICAgICAgIGVyb2RlZEltYWdlUHRyID0gaW11bChzaXplLCBzaXplKSB8IDA7XG4gICAgICAgIHRlbXBJbWFnZVB0ciA9IChlcm9kZWRJbWFnZVB0ciArIGVyb2RlZEltYWdlUHRyKSB8IDA7XG4gICAgICAgIHNrZWxJbWFnZVB0ciA9ICh0ZW1wSW1hZ2VQdHIgKyBlcm9kZWRJbWFnZVB0cikgfCAwO1xuXG4gICAgICAgIC8vIGluaXQgc2tlbC1pbWFnZVxuICAgICAgICBpbml0KHNrZWxJbWFnZVB0ciwgMCk7XG4gICAgICAgIHplcm9Cb3JkZXIoc3ViSW1hZ2VQdHIpO1xuXG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIGVyb2RlKHN1YkltYWdlUHRyLCBlcm9kZWRJbWFnZVB0cik7XG4gICAgICAgICAgICBkaWxhdGUoZXJvZGVkSW1hZ2VQdHIsIHRlbXBJbWFnZVB0cik7XG4gICAgICAgICAgICBzdWJ0cmFjdChzdWJJbWFnZVB0ciwgdGVtcEltYWdlUHRyLCB0ZW1wSW1hZ2VQdHIpO1xuICAgICAgICAgICAgYml0d2lzZU9yKHNrZWxJbWFnZVB0ciwgdGVtcEltYWdlUHRyLCBza2VsSW1hZ2VQdHIpO1xuICAgICAgICAgICAgbWVtY3B5KGVyb2RlZEltYWdlUHRyLCBzdWJJbWFnZVB0cik7XG4gICAgICAgICAgICBzdW0gPSBjb3VudE5vblplcm8oc3ViSW1hZ2VQdHIpIHwgMDtcbiAgICAgICAgICAgIGRvbmUgPSAoKHN1bSB8IDApID09IDAgfCAwKTtcbiAgICAgICAgfSB3aGlsZSAoIWRvbmUpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHNrZWxldG9uaXplOiBza2VsZXRvbml6ZVxuICAgIH07XG59XG5leHBvcnQgZGVmYXVsdCBTa2VsZXRvbml6ZXI7XG4vKiBlc2xpbnQtZW5hYmxlIGVxZXFlcSAqL1xuIiwiaW1wb3J0IHsgSW1hZ2VXcmFwcGVyIH0gZnJvbSBcIi4uL2NvbW1vbi9pbWFnZS13cmFwcGVyXCI7XG5cbi8qKlxuICogQGJvcnJvd3MgaHR0cDovL3d3dy5jb2RlcHJvamVjdC5jb20vVGlwcy80MDcxNzIvQ29ubmVjdGVkLUNvbXBvbmVudC1MYWJlbGluZy1hbmQtVmVjdG9yaXphdGlvblxuICovXG5cbnR5cGUgRGlyZWN0aW9uID0gbnVtYmVyO1xuXG5leHBvcnQgY29uc3QgU2VhcmNoRGlyZWN0aW9uczogQXJyYXk8QXJyYXk8RGlyZWN0aW9uPj4gPSBbWzAsIDFdLCBbMSwgMV0sIFsxLCAwXSwgWzEsIC0xXSwgWzAsIC0xXSwgWy0xLCAtMV0sIFstMSwgMF0sIFstMSwgMV1dO1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbnRvdXJWZXJ0ZXgge1xuICAgIHg6IG51bWJlcixcbiAgICB5OiBudW1iZXIsXG4gICAgZGlyOiBEaXJlY3Rpb24sXG4gICAgbmV4dDogQ29udG91clZlcnRleCxcbiAgICBwcmV2OiBDb250b3VyVmVydGV4XG59XG5cbmludGVyZmFjZSBDdXJyZW50IHtcbiAgICBjeDogbnVtYmVyLFxuICAgIGN5OiBudW1iZXIsXG4gICAgZGlyOiBEaXJlY3Rpb25cbn1cblxuZXhwb3J0IGNsYXNzIFRyYWNlciB7XG4gICAgcHJpdmF0ZSBfaW1hZ2VEYXRhOiBVaW50OEFycmF5O1xuICAgIHByaXZhdGUgX2xhYmVsRGF0YTogQXJyYXk8bnVtYmVyPjtcbiAgICBwcml2YXRlIF93aWR0aDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoaW1hZ2VXcmFwcGVyOiBJbWFnZVdyYXBwZXIsIGxhYmVsV3JhcHBlcjogSW1hZ2VXcmFwcGVyPEFycmF5PG51bWJlcj4+KSB7XG4gICAgICAgIHRoaXMuX2ltYWdlRGF0YSA9IGltYWdlV3JhcHBlci5kYXRhO1xuICAgICAgICB0aGlzLl9sYWJlbERhdGEgPSBsYWJlbFdyYXBwZXIuZGF0YSBhcyBBcnJheTxudW1iZXI+O1xuICAgICAgICB0aGlzLl93aWR0aCA9IGltYWdlV3JhcHBlci5zaXplLng7XG4gICAgfVxuXG4gICAgdHJhY2UoY3VycmVudDogQ3VycmVudCwgY29sb3I6IG51bWJlciwgbGFiZWw6IG51bWJlciwgZWRnZUxhYmVsOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHkgPSBjdXJyZW50LmN5ICsgU2VhcmNoRGlyZWN0aW9uc1tjdXJyZW50LmRpcl1bMF0gfCAwO1xuICAgICAgICAgICAgY29uc3QgeCA9IGN1cnJlbnQuY3ggKyBTZWFyY2hEaXJlY3Rpb25zW2N1cnJlbnQuZGlyXVsxXSB8IDA7XG4gICAgICAgICAgICBjb25zdCBwb3MgPSB5ICogdGhpcy5fd2lkdGggKyB4IHwgMDtcblxuICAgICAgICAgICAgaWYgKCh0aGlzLl9pbWFnZURhdGFbcG9zXSA9PT0gY29sb3IpICYmICgodGhpcy5fbGFiZWxEYXRhW3Bvc10gPT09IDApIHx8ICh0aGlzLl9sYWJlbERhdGFbcG9zXSA9PT0gbGFiZWwpKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2xhYmVsRGF0YVtwb3NdID0gbGFiZWw7XG4gICAgICAgICAgICAgICAgY3VycmVudC5jeCA9IHg7XG4gICAgICAgICAgICAgICAgY3VycmVudC5jeSA9IHk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2xhYmVsRGF0YVtwb3NdID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2xhYmVsRGF0YVtwb3NdID0gZWRnZUxhYmVsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjdXJyZW50LmRpciA9IChjdXJyZW50LmRpciArIDEpICUgODtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb250b3VyVHJhY2luZyhzeTogbnVtYmVyLCBzeDogbnVtYmVyLCBsYWJlbDogbnVtYmVyLCBjb2xvcjogbnVtYmVyLCBlZGdlTGFiZWw6IG51bWJlcik6IENvbnRvdXJWZXJ0ZXgge1xuICAgICAgICBsZXQgRnY6IENvbnRvdXJWZXJ0ZXggPSBudWxsO1xuICAgICAgICBjb25zdCBjdXJyZW50OiBDdXJyZW50ID0ge1xuICAgICAgICAgICAgY3g6IHN4LFxuICAgICAgICAgICAgY3k6IHN5LFxuICAgICAgICAgICAgZGlyOiAwXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHRoaXMudHJhY2UoY3VycmVudCwgY29sb3IsIGxhYmVsLCBlZGdlTGFiZWwpKSB7XG4gICAgICAgICAgICBGdiA9IHtcbiAgICAgICAgICAgICAgICB4OiBzeCxcbiAgICAgICAgICAgICAgICB5OiBzeSxcbiAgICAgICAgICAgICAgICBkaXI6IGN1cnJlbnQuZGlyLFxuICAgICAgICAgICAgICAgIG5leHQ6IG51bGwsXG4gICAgICAgICAgICAgICAgcHJldjogbnVsbFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGxldCBDdiA9IEZ2O1xuICAgICAgICAgICAgbGV0IGxkaXIgPSBjdXJyZW50LmRpcjtcbiAgICAgICAgICAgIGxldCBQID0ge1xuICAgICAgICAgICAgICAgIHg6IGN1cnJlbnQuY3gsXG4gICAgICAgICAgICAgICAgeTogY3VycmVudC5jeSxcbiAgICAgICAgICAgICAgICBkaXI6IDAsXG4gICAgICAgICAgICAgICAgbmV4dDogbnVsbCxcbiAgICAgICAgICAgICAgICBwcmV2OiBDdlxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIEN2Lm5leHQgPSBQO1xuICAgICAgICAgICAgQ3YgPSBQO1xuXG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgY3VycmVudC5kaXIgPSAoY3VycmVudC5kaXIgKyA2KSAlIDg7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnRyYWNlKGN1cnJlbnQsIGNvbG9yLCBsYWJlbCwgZWRnZUxhYmVsKTtcblxuICAgICAgICAgICAgICAgIGlmIChsZGlyICE9PSBjdXJyZW50LmRpcikge1xuICAgICAgICAgICAgICAgICAgICBDdi5kaXIgPSBjdXJyZW50LmRpcjtcbiAgICAgICAgICAgICAgICAgICAgUCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IGN1cnJlbnQuY3gsXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBjdXJyZW50LmN5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlyOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXY6IEN2XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIEN2Lm5leHQgPSBQO1xuICAgICAgICAgICAgICAgICAgICBDdiA9IFA7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgQ3YuZGlyID0gbGRpcjtcbiAgICAgICAgICAgICAgICAgICAgQ3YueCA9IGN1cnJlbnQuY3g7XG4gICAgICAgICAgICAgICAgICAgIEN2LnkgPSBjdXJyZW50LmN5O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGxkaXIgPSBjdXJyZW50LmRpcjtcbiAgICAgICAgICAgIH0gd2hpbGUgKGN1cnJlbnQuY3ggIT09IHN4IHx8IGN1cnJlbnQuY3kgIT09IHN5KTtcblxuICAgICAgICAgICAgRnYucHJldiA9IEN2LnByZXY7XG4gICAgICAgICAgICBDdi5wcmV2Lm5leHQgPSBGdjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gRnY7XG4gICAgfVxufVxuIiwiaW1wb3J0IF9wb2x5ZmlsbHMgZnJvbSAnLi9jb21tb24vcG9seWZpbGxzJztcbmltcG9ydCB7IFJlc3VsdENvbGxlY3RvciB9IGZyb20gJy4vYW5hbHl0aWNzL3Jlc3VsdC1jb2xsZWN0b3InO1xuaW1wb3J0IHsgQm94IH0gZnJvbSAnLi9jb21tb24vYm94JztcbmltcG9ydCB7IEV2ZW50Q2FsbGJhY2ssIEV2ZW50cywgRXZlbnRTdWJzY3JpcHRpb24gfSBmcm9tICcuL2NvbW1vbi9ldmVudHMnO1xuaW1wb3J0IHsgSW1hZ2VEZWJ1ZyB9IGZyb20gJy4vY29tbW9uL2ltYWdlLWRlYnVnJztcbmltcG9ydCB7IEltYWdlV3JhcHBlciB9IGZyb20gJy4vY29tbW9uL2ltYWdlLXdyYXBwZXInO1xuaW1wb3J0IHsgbWVyZ2UgfSBmcm9tICcuL2NvbW1vbi9tZXJnZSc7XG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJy4vY29tbW9uL3BvaW50JztcbmltcG9ydCB7IGNvbmZpZyBhcyBkZWZhdWx0Q29uZmlnLCBRdWFnZ2FDb25maWcgfSBmcm9tICcuL2NvbmZpZy9jb25maWcnO1xuaW1wb3J0IHsgQmFyY29kZURlY29kZXIsIFF1YWdnYUJhcmNvZGUgfSBmcm9tICcuL2RlY29kZXIvYmFyY29kZS1kZWNvZGVyJztcbmltcG9ydCB7IENhbWVyYUFjY2VzcyB9IGZyb20gJy4vaW5wdXQvY2FtZXJhLWFjY2Vzcyc7XG5pbXBvcnQgeyBGcmFtZUdyYWJiZXIgfSBmcm9tICcuL2lucHV0L2ZyYW1lLWdyYWJiZXInO1xuaW1wb3J0IHsgSW1hZ2VTdHJlYW0gfSBmcm9tICcuL2lucHV0L2ltYWdlLXN0cmVhbSc7XG5pbXBvcnQgeyBJbnB1dFN0cmVhbSB9IGZyb20gJy4vaW5wdXQvaW5wdXQtc3RyZWFtJztcbmltcG9ydCB7IExpdmVTdHJlYW0gfSBmcm9tICcuL2lucHV0L2xpdmUtc3RyZWFtJztcbmltcG9ydCB7IFZpZGVvU3RyZWFtIH0gZnJvbSAnLi9pbnB1dC92aWRlby1zdHJlYW0nO1xuaW1wb3J0IHsgY2hlY2tJbWFnZUNvbnN0cmFpbnRzIH0gZnJvbSAnLi9pbnB1dC9pbnB1dC1zdHJlYW0tdXRpbHMnO1xuaW1wb3J0IHsgQmFyY29kZUxvY2F0b3IgfSBmcm9tICcuL2xvY2F0b3IvYmFyY29kZS1sb2NhdG9yJztcbmltcG9ydCB7IEJhcmNvZGVSZWFkZXJEZWNsYXJhdGlvbiB9IGZyb20gJy4vcmVhZGVyL2JhcmNvZGUtcmVhZGVyJztcblxubGV0IF9fZmFjdG9yeVNvdXJjZV9fOiBzdHJpbmc7XG5cbmludGVyZmFjZSBXb3JrZXJUaHJlYWQge1xuICAgIHdvcmtlcjogV29ya2VyO1xuICAgIGltYWdlRGF0YTogVWludDhBcnJheTtcbiAgICBidXN5OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFF1YWdnYUNhbnZhc0NvbnRhaW5lciB7XG4gICAgY3R4OiB7XG4gICAgICAgIGltYWdlOiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsXG4gICAgICAgIG92ZXJsYXk6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRFxuICAgIH0sXG4gICAgZG9tOiB7XG4gICAgICAgIGltYWdlOiBIVE1MQ2FudmFzRWxlbWVudCxcbiAgICAgICAgb3ZlcmxheTogSFRNTENhbnZhc0VsZW1lbnRcbiAgICB9XG59XG5cbmxldCBfaW5wdXRTdHJlYW06IElucHV0U3RyZWFtO1xubGV0IF9mcmFtZUdyYWJiZXI6IEZyYW1lR3JhYmJlcjtcbmxldCBfc3RvcHBlZDogYm9vbGVhbjtcbmNvbnN0IF9jYW52YXNDb250YWluZXI6IFF1YWdnYUNhbnZhc0NvbnRhaW5lciA9IHtcbiAgICBjdHg6IHtcbiAgICAgICAgaW1hZ2U6IG51bGwsXG4gICAgICAgIG92ZXJsYXk6IG51bGxcbiAgICB9LFxuICAgIGRvbToge1xuICAgICAgICBpbWFnZTogbnVsbCxcbiAgICAgICAgb3ZlcmxheTogbnVsbFxuICAgIH1cbn07XG5sZXQgX2lucHV0SW1hZ2VXcmFwcGVyOiBJbWFnZVdyYXBwZXI7XG5sZXQgX2xvY2F0b3I6IEJhcmNvZGVMb2NhdG9yO1xubGV0IF9ib3hTaXplOiBCb3g7XG5sZXQgX2RlY29kZXI6IEJhcmNvZGVEZWNvZGVyO1xubGV0IF93b3JrZXJQb29sID0gbmV3IEFycmF5PFdvcmtlclRocmVhZD4oKTtcbmxldCBfb25VSVRocmVhZDogYm9vbGVhbjtcbmxldCBfcmVzdWx0Q29sbGVjdG9yOiBSZXN1bHRDb2xsZWN0b3I7XG5sZXQgX2NvbmZpZzogUXVhZ2dhQ29uZmlnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgaW5pdChjb25maWc6IFF1YWdnYUNvbmZpZywgY2I6ICgpID0+IHZvaWQsIGltYWdlV3JhcHBlcj86IEltYWdlV3JhcHBlcikge1xuICAgICAgICBfb25VSVRocmVhZCA9IHRydWU7XG4gICAgICAgIF9jb25maWcgPSBtZXJnZShkZWZhdWx0Q29uZmlnLCBjb25maWcpO1xuICAgICAgICBpZiAoaW1hZ2VXcmFwcGVyKSB7XG4gICAgICAgICAgICBfb25VSVRocmVhZCA9IGZhbHNlO1xuICAgICAgICAgICAgX2luaXRpYWxpemVEYXRhKGltYWdlV3JhcHBlcik7XG4gICAgICAgICAgICBjYigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX2luaXRJbnB1dFN0cmVhbShjYik7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgQ2FtZXJhQWNjZXNzOiBDYW1lcmFBY2Nlc3MsXG5cbiAgICBJbWFnZURlYnVnOiBJbWFnZURlYnVnLFxuXG4gICAgSW1hZ2VXcmFwcGVyOiBJbWFnZVdyYXBwZXIsXG5cbiAgICBSZXN1bHRDb2xsZWN0b3I6IFJlc3VsdENvbGxlY3RvcixcblxuICAgIGdldCBjYW52YXMoKTogUXVhZ2dhQ2FudmFzQ29udGFpbmVyIHtcbiAgICAgICAgcmV0dXJuIF9jYW52YXNDb250YWluZXI7XG4gICAgfSxcblxuICAgIHN0YXJ0KCk6IHZvaWQge1xuICAgICAgICBpZiAoX29uVUlUaHJlYWQgJiYgX2NvbmZpZy5pbnB1dFN0cmVhbS50eXBlID09PSAnTGl2ZVN0cmVhbScpIHtcbiAgICAgICAgICAgIF9zdGFydENvbnRpbnVvdXNVcGRhdGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF91cGRhdGUoKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wKCk6IHZvaWQge1xuICAgICAgICBfc3RvcHBlZCA9IHRydWU7XG4gICAgICAgIF9hZGp1c3RXb3JrZXJQb29sKDApO1xuICAgICAgICBpZiAoX2NvbmZpZy5pbnB1dFN0cmVhbS50eXBlID09PSAnTGl2ZVN0cmVhbScpIHtcbiAgICAgICAgICAgIENhbWVyYUFjY2Vzcy5yZWxlYXNlKCk7XG4gICAgICAgICAgICBfaW5wdXRTdHJlYW0uY2xlYXJFdmVudEhhbmRsZXJzKCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgZGVjb2RlU2luZ2xlKGNvbmZpZzogUXVhZ2dhQ29uZmlnLCByZXN1bHRDYWxsYmFjazogKF86IFF1YWdnYUJhcmNvZGUpID0+IHZvaWQpOiB2b2lkIHtcbiAgICAgICAgY29uZmlnID0gbWVyZ2Uoe1xuICAgICAgICAgICAgaW5wdXRTdHJlYW06IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnSW1hZ2VTdHJlYW0nLFxuICAgICAgICAgICAgICAgIHNlcXVlbmNlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzaXplOiA4MDAsXG4gICAgICAgICAgICAgICAgc3JjOiBjb25maWcuc3JjXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbnVtT2ZXb3JrZXJzOiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBjb25maWcuZGVidWcpID8gMCA6IDEsXG4gICAgICAgICAgICBsb2NhdG9yOiB7XG4gICAgICAgICAgICAgICAgaGFsZlNhbXBsZTogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgY29uZmlnKTtcblxuICAgICAgICB0aGlzLmluaXQoY29uZmlnLCAoKSA9PiB7XG4gICAgICAgICAgICBFdmVudHMub25jZSgncHJvY2Vzc2VkJywgKHJlc3VsdDogUXVhZ2dhQmFyY29kZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICAgICAgICAgIHJlc3VsdENhbGxiYWNrLmNhbGwobnVsbCwgcmVzdWx0KTtcbiAgICAgICAgICAgIH0sIHRydWUpO1xuICAgICAgICAgICAgdGhpcy5zdGFydCgpO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgcGF1c2UoKTogdm9pZCB7XG4gICAgICAgIF9zdG9wcGVkID0gdHJ1ZTtcbiAgICB9LFxuXG4gICAgb25EZXRlY3RlZChjYWxsYmFjazogRXZlbnRTdWJzY3JpcHRpb24gfCBFdmVudENhbGxiYWNrKTogdm9pZCB7XG4gICAgICAgIEV2ZW50cy5zdWJzY3JpYmUoJ2RldGVjdGVkJywgY2FsbGJhY2spO1xuICAgIH0sXG5cbiAgICBvZmZEZXRlY3RlZChjYWxsYmFjazogRXZlbnRDYWxsYmFjayk6IHZvaWQge1xuICAgICAgICBFdmVudHMudW5zdWJzY3JpYmUoJ2RldGVjdGVkJywgY2FsbGJhY2spO1xuICAgIH0sXG5cbiAgICBvblByb2Nlc3NlZChjYWxsYmFjazogRXZlbnRTdWJzY3JpcHRpb24gfCBFdmVudENhbGxiYWNrKTogdm9pZCB7XG4gICAgICAgIEV2ZW50cy5zdWJzY3JpYmUoJ3Byb2Nlc3NlZCcsIGNhbGxiYWNrKTtcbiAgICB9LFxuXG4gICAgb2ZmUHJvY2Vzc2VkKGNhbGxiYWNrOiBFdmVudENhbGxiYWNrKTogdm9pZCB7XG4gICAgICAgIEV2ZW50cy51bnN1YnNjcmliZSgncHJvY2Vzc2VkJywgY2FsbGJhY2spO1xuICAgIH0sXG5cbiAgICBzZXRSZWFkZXJzKHJlYWRlcnM6IEFycmF5PEJhcmNvZGVSZWFkZXJEZWNsYXJhdGlvbj4pOiB2b2lkIHtcbiAgICAgICAgaWYgKF9kZWNvZGVyKSB7XG4gICAgICAgICAgICBfZGVjb2Rlci5zZXRSZWFkZXJzKHJlYWRlcnMpO1xuICAgICAgICB9IGVsc2UgaWYgKF9vblVJVGhyZWFkICYmIF93b3JrZXJQb29sLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIF93b3JrZXJQb29sLmZvckVhY2goKHsgd29ya2VyIH0pID0+IHdvcmtlci5wb3N0TWVzc2FnZSh7IGNtZDogJ3NldFJlYWRlcnMnLCByZWFkZXJzIH0pKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICByZWdpc3RlclJlc3VsdENvbGxlY3RvcihyZXN1bHRDb2xsZWN0b3I6IFJlc3VsdENvbGxlY3Rvcik6IHZvaWQge1xuICAgICAgICBpZiAocmVzdWx0Q29sbGVjdG9yICYmIHR5cGVvZiByZXN1bHRDb2xsZWN0b3IuYWRkUmVzdWx0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBfcmVzdWx0Q29sbGVjdG9yID0gcmVzdWx0Q29sbGVjdG9yO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuZnVuY3Rpb24gX2luaXRpYWxpemVEYXRhKGltYWdlV3JhcHBlcj86IEltYWdlV3JhcHBlcik6IHZvaWQge1xuICAgIF9pbml0QnVmZmVycyhpbWFnZVdyYXBwZXIpO1xuICAgIF9kZWNvZGVyID0gbmV3IEJhcmNvZGVEZWNvZGVyKF9jb25maWcuZGVjb2RlciwgX2lucHV0SW1hZ2VXcmFwcGVyKTtcbn1cblxuZnVuY3Rpb24gX2luaXRJbnB1dFN0cmVhbShjYWxsYmFjazogKGVycj86IGFueSkgPT4gdm9pZCk6IHZvaWQge1xuICAgIGxldCB2aWRlbzogSFRNTFZpZGVvRWxlbWVudDtcbiAgICBpZiAoX2NvbmZpZy5pbnB1dFN0cmVhbS50eXBlID09PSAnVmlkZW9TdHJlYW0nKSB7XG4gICAgICAgIHZpZGVvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndmlkZW8nKTtcbiAgICAgICAgX2lucHV0U3RyZWFtID0gbmV3IFZpZGVvU3RyZWFtKHZpZGVvKTtcbiAgICB9IGVsc2UgaWYgKF9jb25maWcuaW5wdXRTdHJlYW0udHlwZSA9PT0gJ0ltYWdlU3RyZWFtJykge1xuICAgICAgICBfaW5wdXRTdHJlYW0gPSBuZXcgSW1hZ2VTdHJlYW0oKTtcbiAgICB9IGVsc2UgaWYgKF9jb25maWcuaW5wdXRTdHJlYW0udHlwZSA9PT0gJ0xpdmVTdHJlYW0nKSB7XG4gICAgICAgIGNvbnN0IHZpZXdwb3J0ID0gX2dldFZpZXdQb3J0KCk7XG4gICAgICAgIGlmICh2aWV3cG9ydCkge1xuICAgICAgICAgICAgdmlkZW8gPSB2aWV3cG9ydC5xdWVyeVNlbGVjdG9yKCd2aWRlbycpO1xuICAgICAgICAgICAgaWYgKCF2aWRlbykge1xuICAgICAgICAgICAgICAgIHZpZGVvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndmlkZW8nKTtcbiAgICAgICAgICAgICAgICB2aWV3cG9ydC5hcHBlbmRDaGlsZCh2aWRlbyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgX2lucHV0U3RyZWFtID0gbmV3IExpdmVTdHJlYW0odmlkZW8pO1xuICAgICAgICBDYW1lcmFBY2Nlc3MucmVxdWVzdCh2aWRlbywgX2NvbmZpZy5pbnB1dFN0cmVhbS5jb25zdHJhaW50cylcbiAgICAgICAgICAgIC50aGVuKCgpID0+IF9pbnB1dFN0cmVhbS50cmlnZ2VyKCdjYW5yZWNvcmQnKSwgZXJyID0+IGNhbGxiYWNrKGVycikpO1xuICAgIH1cblxuICAgIF9pbnB1dFN0cmVhbS5zZXRBdHRyaWJ1dGUoJ3ByZWxvYWQnLCAnYXV0bycpO1xuICAgIF9pbnB1dFN0cmVhbS5jb25maWcgPSBfY29uZmlnLmlucHV0U3RyZWFtO1xuICAgIF9pbnB1dFN0cmVhbS5hZGRFdmVudExpc3RlbmVyKCdjYW5yZWNvcmQnLCBfY2FuUmVjb3JkLmJpbmQodGhpcywgY2FsbGJhY2spKTtcbn1cblxuZnVuY3Rpb24gX2dldFZpZXdQb3J0KCk6IEhUTUxFbGVtZW50IHtcbiAgICBjb25zdCB0YXJnZXQgPSBfY29uZmlnLmlucHV0U3RyZWFtLnRhcmdldDtcbiAgICAvLyBDaGVjayBpZiB0YXJnZXQgaXMgYWxyZWFkeSBhIERPTSBlbGVtZW50XG4gICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVXNlICcjaW50ZXJhY3RpdmUudmlld3BvcnQnIGFzIGEgZmFsbGJhY2sgc2VsZWN0b3IgKGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5KVxuICAgICAgICBjb25zdCBzZWxlY3RvciA9IHR5cGVvZiB0YXJnZXQgPT09ICdzdHJpbmcnID8gdGFyZ2V0IDogJyNpbnRlcmFjdGl2ZS52aWV3cG9ydCc7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIF9jYW5SZWNvcmQoY2I6ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICBjaGVja0ltYWdlQ29uc3RyYWludHMoX2lucHV0U3RyZWFtLCBfY29uZmlnLmxvY2F0b3IpO1xuICAgIF9pbml0Q2FudmFzKCk7XG4gICAgX2ZyYW1lR3JhYmJlciA9IG5ldyBGcmFtZUdyYWJiZXIoX2lucHV0U3RyZWFtLCBfY2FudmFzQ29udGFpbmVyLmRvbS5pbWFnZSk7XG5cbiAgICBfYWRqdXN0V29ya2VyUG9vbChfY29uZmlnLm51bU9mV29ya2VycywgKCkgPT4ge1xuICAgICAgICBpZiAoX2NvbmZpZy5udW1PZldvcmtlcnMgPT09IDApIHtcbiAgICAgICAgICAgIF9pbml0aWFsaXplRGF0YSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgX2lucHV0U3RyZWFtLnBsYXkoKTtcbiAgICAgICAgY2IoKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gX2luaXRDYW52YXMoKTogdm9pZCB7XG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc3Qgdmlld3BvcnQgPSBfZ2V0Vmlld1BvcnQoKTtcbiAgICAgICAgX2NhbnZhc0NvbnRhaW5lci5kb20uaW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjYW52YXMuaW1nQnVmZmVyJyk7XG4gICAgICAgIGlmICghX2NhbnZhc0NvbnRhaW5lci5kb20uaW1hZ2UpIHtcbiAgICAgICAgICAgIF9jYW52YXNDb250YWluZXIuZG9tLmltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgICAgICBfY2FudmFzQ29udGFpbmVyLmRvbS5pbWFnZS5jbGFzc05hbWUgPSAnaW1nQnVmZmVyJztcbiAgICAgICAgICAgIGlmICh2aWV3cG9ydCAmJiBfY29uZmlnLmlucHV0U3RyZWFtLnR5cGUgPT09ICdJbWFnZVN0cmVhbScpIHtcbiAgICAgICAgICAgICAgICB2aWV3cG9ydC5hcHBlbmRDaGlsZChfY2FudmFzQ29udGFpbmVyLmRvbS5pbWFnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgX2NhbnZhc0NvbnRhaW5lci5jdHguaW1hZ2UgPSBfY2FudmFzQ29udGFpbmVyLmRvbS5pbWFnZS5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICBfY2FudmFzQ29udGFpbmVyLmRvbS5pbWFnZS53aWR0aCA9IF9pbnB1dFN0cmVhbS5jYW52YXNXaWR0aDtcbiAgICAgICAgX2NhbnZhc0NvbnRhaW5lci5kb20uaW1hZ2UuaGVpZ2h0ID0gX2lucHV0U3RyZWFtLmNhbnZhc0hlaWdodDtcblxuICAgICAgICBfY2FudmFzQ29udGFpbmVyLmRvbS5vdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FudmFzLmRyYXdpbmdCdWZmZXInKTtcbiAgICAgICAgaWYgKCFfY2FudmFzQ29udGFpbmVyLmRvbS5vdmVybGF5KSB7XG4gICAgICAgICAgICBfY2FudmFzQ29udGFpbmVyLmRvbS5vdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgICAgICBfY2FudmFzQ29udGFpbmVyLmRvbS5vdmVybGF5LmNsYXNzTmFtZSA9ICdkcmF3aW5nQnVmZmVyJztcbiAgICAgICAgICAgIGlmICh2aWV3cG9ydCkge1xuICAgICAgICAgICAgICAgIHZpZXdwb3J0LmFwcGVuZENoaWxkKF9jYW52YXNDb250YWluZXIuZG9tLm92ZXJsYXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgY2xlYXJGaXggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuICAgICAgICAgICAgY2xlYXJGaXguc2V0QXR0cmlidXRlKCdjbGVhcicsICdhbGwnKTtcbiAgICAgICAgICAgIGlmICh2aWV3cG9ydCkge1xuICAgICAgICAgICAgICAgIHZpZXdwb3J0LmFwcGVuZENoaWxkKGNsZWFyRml4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBfY2FudmFzQ29udGFpbmVyLmN0eC5vdmVybGF5ID0gX2NhbnZhc0NvbnRhaW5lci5kb20ub3ZlcmxheS5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICBfY2FudmFzQ29udGFpbmVyLmRvbS5vdmVybGF5LndpZHRoID0gX2lucHV0U3RyZWFtLmNhbnZhc1dpZHRoO1xuICAgICAgICBfY2FudmFzQ29udGFpbmVyLmRvbS5vdmVybGF5LmhlaWdodCA9IF9pbnB1dFN0cmVhbS5jYW52YXNIZWlnaHQ7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBfaW5pdEJ1ZmZlcnMoaW1hZ2VXcmFwcGVyPzogSW1hZ2VXcmFwcGVyKTogdm9pZCB7XG4gICAgaWYgKGltYWdlV3JhcHBlcikge1xuICAgICAgICBfaW5wdXRJbWFnZVdyYXBwZXIgPSBpbWFnZVdyYXBwZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgX2lucHV0SW1hZ2VXcmFwcGVyID0gbmV3IEltYWdlV3JhcHBlcih7XG4gICAgICAgICAgICB4OiBfaW5wdXRTdHJlYW0ud2lkdGgsXG4gICAgICAgICAgICB5OiBfaW5wdXRTdHJlYW0uaGVpZ2h0XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKF9pbnB1dEltYWdlV3JhcHBlci5zaXplKTtcbiAgICB9XG4gICAgX2JveFNpemUgPSBbXG4gICAgICAgIHsgeDogMCwgeTogMCB9LFxuICAgICAgICB7IHg6IDAsIHk6IF9pbnB1dEltYWdlV3JhcHBlci5zaXplLnkgfSxcbiAgICAgICAgeyB4OiBfaW5wdXRJbWFnZVdyYXBwZXIuc2l6ZS54LCB5OiBfaW5wdXRJbWFnZVdyYXBwZXIuc2l6ZS55IH0sXG4gICAgICAgIHsgeDogX2lucHV0SW1hZ2VXcmFwcGVyLnNpemUueCwgeTogMCB9XG4gICAgXTtcbiAgICBfbG9jYXRvciA9IG5ldyBCYXJjb2RlTG9jYXRvcihfaW5wdXRJbWFnZVdyYXBwZXIsIF9jb25maWcubG9jYXRvcik7XG59XG5cbmZ1bmN0aW9uIF9nZXRCb3VuZGluZ0JveGVzKCk6IEFycmF5PEJveD4ge1xuICAgIGlmIChfY29uZmlnLmxvY2F0ZSkge1xuICAgICAgICByZXR1cm4gX2xvY2F0b3IubG9jYXRlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFtbXG4gICAgICAgICAgICBfYm94U2l6ZVswXSxcbiAgICAgICAgICAgIF9ib3hTaXplWzFdLFxuICAgICAgICAgICAgX2JveFNpemVbMl0sXG4gICAgICAgICAgICBfYm94U2l6ZVszXVxuICAgICAgICBdXTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIF90cmFuc2Zvcm0ocG9seWdvbjogUmVhZG9ubHlBcnJheTxQb2ludD4sIG9mZnNldDogUG9pbnQpOiB2b2lkIHtcbiAgICBwb2x5Z29uLmZvckVhY2godmVydGV4ID0+IHtcbiAgICAgICAgdmVydGV4LnggKz0gb2Zmc2V0Lng7XG4gICAgICAgIHZlcnRleC55ICs9IG9mZnNldC55O1xuICAgIH0pXG59XG5cbmZ1bmN0aW9uIF90cmFuc2Zvcm1SZXN1bHQocmVzdWx0OiBRdWFnZ2FCYXJjb2RlLCBvZmZzZXQ6IFBvaW50KTogdm9pZCB7XG4gICAgaWYgKHJlc3VsdC5iYXJjb2Rlcykge1xuICAgICAgICByZXN1bHQuYmFyY29kZXMuZm9yRWFjaChiYXJjb2RlID0+IF90cmFuc2Zvcm1SZXN1bHQoYmFyY29kZSwgb2Zmc2V0KSk7XG4gICAgfVxuXG4gICAgaWYgKHJlc3VsdC5saW5lKSB7XG4gICAgICAgIF90cmFuc2Zvcm0ocmVzdWx0LmxpbmUsIG9mZnNldCk7XG4gICAgfVxuXG4gICAgaWYgKHJlc3VsdC5ib3gpIHtcbiAgICAgICAgX3RyYW5zZm9ybShyZXN1bHQuYm94LCBvZmZzZXQpO1xuICAgIH1cblxuICAgIGlmIChyZXN1bHQuYm94ZXMpIHtcbiAgICAgICAgcmVzdWx0LmJveGVzLmZvckVhY2goYm94ID0+IF90cmFuc2Zvcm0oYm94LCBvZmZzZXQpKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIF9hZGRSZXN1bHQocmVzdWx0OiBRdWFnZ2FCYXJjb2RlLCBpbWFnZURhdGE6IFVpbnQ4QXJyYXksIGNhbnZhc1dpZHRoOiBudW1iZXIsIGNhbnZhc0hlaWdodDogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKGltYWdlRGF0YSAmJiBfcmVzdWx0Q29sbGVjdG9yKSB7XG4gICAgICAgIGlmIChyZXN1bHQuYmFyY29kZXMpIHtcbiAgICAgICAgICAgIHJlc3VsdC5iYXJjb2Rlcy5mb3JFYWNoKCh7IGNvZGVSZXN1bHQgfSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjb2RlUmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIF9yZXN1bHRDb2xsZWN0b3IuYWRkUmVzdWx0KGltYWdlRGF0YSwgY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCwgY29kZVJlc3VsdClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuY29kZVJlc3VsdCkge1xuICAgICAgICAgICAgX3Jlc3VsdENvbGxlY3Rvci5hZGRSZXN1bHQoaW1hZ2VEYXRhLCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0LCByZXN1bHQuY29kZVJlc3VsdCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIF9oYXNDb2RlUmVzdWx0KHJlc3VsdDogUXVhZ2dhQmFyY29kZSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiByZXN1bHQgJiYgKCEhcmVzdWx0LmNvZGVSZXN1bHQgfHwgcmVzdWx0LmJhcmNvZGVzICYmIHJlc3VsdC5iYXJjb2Rlcy5zb21lKGJhcmNvZGUgPT4gISFiYXJjb2RlLmNvZGVSZXN1bHQpKTtcbn1cblxuZnVuY3Rpb24gX3B1Ymxpc2hSZXN1bHQocmVzdWx0PzogUXVhZ2dhQmFyY29kZSwgaW1hZ2VEYXRhPzogVWludDhBcnJheSk6IHZvaWQge1xuICAgIGxldCByZXN1bHRUb1B1Ymxpc2g6IFF1YWdnYUJhcmNvZGUgfCBBcnJheTxRdWFnZ2FCYXJjb2RlPiA9IHJlc3VsdDtcblxuICAgIGlmIChyZXN1bHQgJiYgX29uVUlUaHJlYWQpIHtcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gX2lucHV0U3RyZWFtLnRvcExlZnQ7XG5cbiAgICAgICAgaWYgKG9mZnNldC54ICE9PSAwIHx8IG9mZnNldC55ICE9PSAwKSB7XG4gICAgICAgICAgICBfdHJhbnNmb3JtUmVzdWx0KHJlc3VsdCwgb2Zmc2V0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIF9hZGRSZXN1bHQocmVzdWx0LCBpbWFnZURhdGEsIF9pbnB1dFN0cmVhbS5jYW52YXNXaWR0aCwgX2lucHV0U3RyZWFtLmNhbnZhc0hlaWdodCk7XG4gICAgICAgIHJlc3VsdFRvUHVibGlzaCA9IHJlc3VsdC5iYXJjb2RlcyB8fCByZXN1bHQ7XG4gICAgfVxuXG4gICAgRXZlbnRzLnB1Ymxpc2goJ3Byb2Nlc3NlZCcsIHJlc3VsdFRvUHVibGlzaCk7XG4gICAgaWYgKF9oYXNDb2RlUmVzdWx0KHJlc3VsdCkpIHtcbiAgICAgICAgRXZlbnRzLnB1Ymxpc2goJ2RldGVjdGVkJywgcmVzdWx0VG9QdWJsaXNoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIF9sb2NhdGVBbmREZWNvZGUoKTogdm9pZCB7XG4gICAgY29uc3QgYm94ZXMgPSBfZ2V0Qm91bmRpbmdCb3hlcygpO1xuXG4gICAgaWYgKGJveGVzKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IF9kZWNvZGVyLmRlY29kZUZyb21Cb3VuZGluZ0JveGVzKGJveGVzKSB8fCB7fTtcbiAgICAgICAgcmVzdWx0LmJveGVzID0gYm94ZXM7XG4gICAgICAgIF9wdWJsaXNoUmVzdWx0KHJlc3VsdCwgX2lucHV0SW1hZ2VXcmFwcGVyLmRhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIF9wdWJsaXNoUmVzdWx0KCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBfdXBkYXRlKCk6IHZvaWQge1xuICAgIGxldCBhdmFpbGFibGVXb3JrZXI6IFdvcmtlclRocmVhZDtcblxuICAgIGlmIChfb25VSVRocmVhZCkge1xuICAgICAgICBpZiAoX3dvcmtlclBvb2wubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgYXZhaWxhYmxlV29ya2VyID0gX3dvcmtlclBvb2wuZmluZCh3b3JrZXJUaHJlYWQgPT4gIXdvcmtlclRocmVhZC5idXN5KTtcbiAgICAgICAgICAgIGlmIChhdmFpbGFibGVXb3JrZXIpIHtcbiAgICAgICAgICAgICAgICBfZnJhbWVHcmFiYmVyLmF0dGFjaERhdGEoYXZhaWxhYmxlV29ya2VyLmltYWdlRGF0YSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybjsgLy8gYWxsIHdvcmtlcnMgYXJlIGJ1c3lcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF9mcmFtZUdyYWJiZXIuYXR0YWNoRGF0YShfaW5wdXRJbWFnZVdyYXBwZXIuZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF9mcmFtZUdyYWJiZXIuZ3JhYigpKSB7XG4gICAgICAgICAgICBpZiAoYXZhaWxhYmxlV29ya2VyKSB7XG4gICAgICAgICAgICAgICAgYXZhaWxhYmxlV29ya2VyLmJ1c3kgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGF2YWlsYWJsZVdvcmtlci53b3JrZXIucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgICAgICBjbWQ6ICdwcm9jZXNzJyxcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VEYXRhOiBhdmFpbGFibGVXb3JrZXIuaW1hZ2VEYXRhXG4gICAgICAgICAgICAgICAgfSwgW2F2YWlsYWJsZVdvcmtlci5pbWFnZURhdGEuYnVmZmVyXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF9sb2NhdGVBbmREZWNvZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIF9sb2NhdGVBbmREZWNvZGUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIF9zdGFydENvbnRpbnVvdXNVcGRhdGUoKTogdm9pZCB7XG4gICAgY29uc3QgZGVsYXkgPSAxMDAwIC8gKF9jb25maWcuZnJlcXVlbmN5IHx8IDYwKTtcbiAgICBsZXQgbmV4dCA9IG51bGw7XG4gICAgX3N0b3BwZWQgPSBmYWxzZTtcblxuICAgIChmdW5jdGlvbiBmcmFtZSh0aW1lc3RhbXApOiB2b2lkIHtcbiAgICAgICAgbmV4dCA9IG5leHQgfHwgdGltZXN0YW1wO1xuICAgICAgICBpZiAoIV9zdG9wcGVkKSB7XG4gICAgICAgICAgICBpZiAodGltZXN0YW1wID49IG5leHQpIHtcbiAgICAgICAgICAgICAgICBuZXh0ICs9IGRlbGF5O1xuICAgICAgICAgICAgICAgIF91cGRhdGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnJhbWUpO1xuICAgICAgICB9XG4gICAgfShwZXJmb3JtYW5jZS5ub3coKSkpO1xufVxuXG5mdW5jdGlvbiBfaW5pdFdvcmtlcihjYjogKHdvcmtlclRocmVhZDogV29ya2VyVGhyZWFkKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgY29uc3QgYmxvYlVSTCA9IF9nZW5lcmF0ZVdvcmtlckJsb2IoKTtcbiAgICBjb25zdCB3b3JrZXJUaHJlYWQgPSB7XG4gICAgICAgIHdvcmtlcjogbmV3IFdvcmtlcihibG9iVVJMKSxcbiAgICAgICAgaW1hZ2VEYXRhOiBuZXcgVWludDhBcnJheShfaW5wdXRTdHJlYW0ud2lkdGggKiBfaW5wdXRTdHJlYW0uaGVpZ2h0KSxcbiAgICAgICAgYnVzeTogdHJ1ZVxuICAgIH07XG5cbiAgICB3b3JrZXJUaHJlYWQud29ya2VyLm9ubWVzc2FnZSA9ICh7IGRhdGEgfSkgPT4ge1xuICAgICAgICBpZiAoZGF0YS5ldmVudCA9PT0gJ2luaXRpYWxpemVkJykge1xuICAgICAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTChibG9iVVJMKTtcbiAgICAgICAgICAgIHdvcmtlclRocmVhZC5idXN5ID0gZmFsc2U7XG4gICAgICAgICAgICB3b3JrZXJUaHJlYWQuaW1hZ2VEYXRhID0gbmV3IFVpbnQ4QXJyYXkoZGF0YS5pbWFnZURhdGEpO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnV29ya2VyIGluaXRpYWxpemVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYih3b3JrZXJUaHJlYWQpO1xuICAgICAgICB9IGVsc2UgaWYgKGRhdGEuZXZlbnQgPT09ICdwcm9jZXNzZWQnKSB7XG4gICAgICAgICAgICB3b3JrZXJUaHJlYWQuYnVzeSA9IGZhbHNlO1xuICAgICAgICAgICAgd29ya2VyVGhyZWFkLmltYWdlRGF0YSA9IG5ldyBVaW50OEFycmF5KGRhdGEuaW1hZ2VEYXRhKTtcbiAgICAgICAgICAgIF9wdWJsaXNoUmVzdWx0KGRhdGEucmVzdWx0LCB3b3JrZXJUaHJlYWQuaW1hZ2VEYXRhKTtcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhLmV2ZW50ID09PSAnZXJyb3InKSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdXb3JrZXIgZXJyb3I6JywgZGF0YS5tZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB3b3JrZXJUaHJlYWQud29ya2VyLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgY21kOiAnaW5pdCcsXG4gICAgICAgIHNpemU6IHsgeDogX2lucHV0U3RyZWFtLndpZHRoLCB5OiBfaW5wdXRTdHJlYW0uaGVpZ2h0IH0sXG4gICAgICAgIGltYWdlRGF0YTogd29ya2VyVGhyZWFkLmltYWdlRGF0YSxcbiAgICAgICAgY29uZmlnOiBtZXJnZShfY29uZmlnLCB7IGlucHV0U3RyZWFtOiB7IHRhcmdldDogbnVsbCB9IH0pXG4gICAgfSwgW3dvcmtlclRocmVhZC5pbWFnZURhdGEuYnVmZmVyXSk7XG59XG5cbmZ1bmN0aW9uIF93b3JrZXJJbnRlcmZhY2UoZmFjdG9yeTogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICBsZXQgUXVhZ2dhOiBhbnk7XG4gICAgY29uc3Qgd29ya2VyOiBhbnkgPSBzZWxmO1xuICAgIGxldCBpbWFnZVdyYXBwZXI6IEltYWdlV3JhcHBlcjtcblxuICAgIGlmIChmYWN0b3J5KSB7XG4gICAgICAgIFF1YWdnYSA9IGZhY3RvcnkoKS5kZWZhdWx0O1xuICAgICAgICBpZiAoIVF1YWdnYSkge1xuICAgICAgICAgICAgd29ya2VyLnBvc3RNZXNzYWdlKHsgZXZlbnQ6ICdlcnJvcicsIG1lc3NhZ2U6ICdRdWFnZ2EgY291bGQgbm90IGJlIGNyZWF0ZWQnIH0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2VsZi5vbm1lc3NhZ2UgPSAoeyBkYXRhIH0pID0+IHtcbiAgICAgICAgaWYgKGRhdGEuY21kID09PSAnaW5pdCcpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbmZpZzogUXVhZ2dhQ29uZmlnID0gZGF0YS5jb25maWc7XG4gICAgICAgICAgICBjb25maWcubnVtT2ZXb3JrZXJzID0gMDtcbiAgICAgICAgICAgIGltYWdlV3JhcHBlciA9IG5ldyBRdWFnZ2EuSW1hZ2VXcmFwcGVyKHsgeDogZGF0YS5zaXplLngsIHk6IGRhdGEuc2l6ZS55IH0sIG5ldyBVaW50OEFycmF5KGRhdGEuaW1hZ2VEYXRhKSk7XG4gICAgICAgICAgICBjb25zdCBpbWFnZURhdGEgPSBpbWFnZVdyYXBwZXIuZGF0YTtcbiAgICAgICAgICAgIFF1YWdnYS5pbml0KFxuICAgICAgICAgICAgICAgIGNvbmZpZyxcbiAgICAgICAgICAgICAgICAoKSA9PiB3b3JrZXIucG9zdE1lc3NhZ2UoeyBldmVudDogJ2luaXRpYWxpemVkJywgaW1hZ2VEYXRhIH0sIFtpbWFnZURhdGEuYnVmZmVyXSksXG4gICAgICAgICAgICAgICAgaW1hZ2VXcmFwcGVyXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgUXVhZ2dhLm9uUHJvY2Vzc2VkKChyZXN1bHQ6IFF1YWdnYUJhcmNvZGUpID0+XG4gICAgICAgICAgICAgICAgd29ya2VyLnBvc3RNZXNzYWdlKHsgZXZlbnQ6ICdwcm9jZXNzZWQnLCBpbWFnZURhdGEsIHJlc3VsdCB9LCBbaW1hZ2VEYXRhLmJ1ZmZlcl0pXG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2UgaWYgKGRhdGEuY21kID09PSAncHJvY2VzcycpIHtcbiAgICAgICAgICAgIGltYWdlV3JhcHBlci5kYXRhID0gbmV3IFVpbnQ4QXJyYXkoZGF0YS5pbWFnZURhdGEpO1xuICAgICAgICAgICAgUXVhZ2dhLnN0YXJ0KCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YS5jbWQgPT09ICdzZXRSZWFkZXJzJykge1xuICAgICAgICAgICAgUXVhZ2dhLnNldFJlYWRlcnMoZGF0YS5yZWFkZXJzKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmZ1bmN0aW9uIF9nZW5lcmF0ZVdvcmtlckJsb2IoKTogc3RyaW5nIHtcbiAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW2AoJHtfd29ya2VySW50ZXJmYWNlLnRvU3RyaW5nKCl9KSgke19fZmFjdG9yeVNvdXJjZV9fIHx8ICcnfSk7YF0sXG4gICAgICAgIHsgdHlwZTogJ3RleHQvamF2YXNjcmlwdCcgfSk7XG5cbiAgICByZXR1cm4gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG59XG5cbmZ1bmN0aW9uIF9hZGp1c3RXb3JrZXJQb29sKGNhcGFjaXR5OiBudW1iZXIsIGNiPzogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIGNvbnN0IGluY3JlYXNlQnkgPSBjYXBhY2l0eSAtIF93b3JrZXJQb29sLmxlbmd0aDtcbiAgICBpZiAoaW5jcmVhc2VCeSA9PT0gMCkge1xuICAgICAgICByZXR1cm4gY2IgJiYgY2IoKTtcbiAgICB9XG4gICAgaWYgKGluY3JlYXNlQnkgPCAwKSB7XG4gICAgICAgIF93b3JrZXJQb29sLnNsaWNlKGluY3JlYXNlQnkpLmZvckVhY2goKHsgd29ya2VyIH0pID0+IHtcbiAgICAgICAgICAgIHdvcmtlci50ZXJtaW5hdGUoKTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1dvcmtlciB0ZXJtaW5hdGVkIScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgX3dvcmtlclBvb2wgPSBfd29ya2VyUG9vbC5zbGljZSgwLCBpbmNyZWFzZUJ5KTtcbiAgICAgICAgcmV0dXJuIGNiICYmIGNiKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbmNyZWFzZUJ5OyBpKyspIHtcbiAgICAgICAgICAgIF9pbml0V29ya2VyKHdvcmtlclRocmVhZCA9PiB7XG4gICAgICAgICAgICAgICAgX3dvcmtlclBvb2wucHVzaCh3b3JrZXJUaHJlYWQpO1xuICAgICAgICAgICAgICAgIGlmIChfd29ya2VyUG9vbC5sZW5ndGggPj0gY2FwYWNpdHkgJiYgY2IpIHtcbiAgICAgICAgICAgICAgICAgICAgY2IoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IEJhcmNvZGUsIEJhcmNvZGVJbmZvLCBCYXJjb2RlUmVhZGVyLCBCYXJjb2RlUmVhZGVyQ29uZmlnIH0gZnJvbSAnLi9iYXJjb2RlLXJlYWRlcic7XG5cbmNvbnN0IE4gPSAxO1xuY29uc3QgVyA9IDM7XG5jb25zdCBTVEFSVF9QQVRURVJOID0gW1csIE4sIFcsIE4sIE4sIE5dO1xuY29uc3QgU1RPUF9QQVRURVJOID0gW1csIE4sIE4sIE4sIFddO1xuY29uc3QgQ09ERV9QQVRURVJOID0gW1xuICAgIFtOLCBOLCBXLCBXLCBOXSxcbiAgICBbVywgTiwgTiwgTiwgV10sXG4gICAgW04sIFcsIE4sIE4sIFddLFxuICAgIFtXLCBXLCBOLCBOLCBOXSxcbiAgICBbTiwgTiwgVywgTiwgV10sXG4gICAgW1csIE4sIFcsIE4sIE5dLFxuICAgIFtOLCBXLCBXLCBOLCBOXSxcbiAgICBbTiwgTiwgTiwgVywgV10sXG4gICAgW1csIE4sIE4sIFcsIE5dLFxuICAgIFtOLCBXLCBOLCBXLCBOXVxuXTtcbmNvbnN0IHN0YXJ0UGF0dGVybkxlbmd0aCA9IFNUQVJUX1BBVFRFUk4ucmVkdWNlKChzdW0sIHZhbCkgPT4gc3VtICsgdmFsLCAwKTtcblxuZXhwb3J0IGNsYXNzIFR3b09mRml2ZVJlYWRlciBleHRlbmRzIEJhcmNvZGVSZWFkZXIge1xuICAgIHByaXZhdGUgX2JhclNwYWNlUmF0aW86IFtudW1iZXIsIG51bWJlcl07XG5cbiAgICBjb25zdHJ1Y3Rvcihjb25maWc/OiBCYXJjb2RlUmVhZGVyQ29uZmlnKSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICAgICAgdGhpcy5fYmFyU3BhY2VSYXRpbyA9IFsxLCAxXTtcbiAgICAgICAgdGhpcy5fZm9ybWF0ID0gJzJvZjUnO1xuICAgICAgICB0aGlzLl9zaW5nbGVDb2RlRXJyb3IgPSAwLjc4O1xuICAgICAgICB0aGlzLl9hdmVyYWdlQ29kZUVycm9yID0gMC4zMDtcbiAgICB9XG5cbiAgICBkZWNvZGUoKTogQmFyY29kZSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0SW5mbyA9IHRoaXMuX2ZpbmRTdGFydCgpO1xuXG4gICAgICAgIGlmICghc3RhcnRJbmZvKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGVuZEluZm8gPSB0aGlzLl9maW5kRW5kKCk7XG5cbiAgICAgICAgaWYgKCFlbmRJbmZvKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvdW50ZXJzID0gdGhpcy5fZmlsbENvdW50ZXJzKHN0YXJ0SW5mby5lbmQsIGVuZEluZm8uc3RhcnQsIDApO1xuXG4gICAgICAgIGlmIChjb3VudGVycy5sZW5ndGggJSAxMCAhPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xuICAgICAgICBjb25zdCBkZWNvZGVkQ29kZXMgPSBuZXcgQXJyYXk8QmFyY29kZUluZm8+KCk7XG5cbiAgICAgICAgZGVjb2RlZENvZGVzLnB1c2goc3RhcnRJbmZvKTtcblxuICAgICAgICBjb25zdCBjb2RlID0gdGhpcy5fZGVjb2RlUGF5bG9hZChjb3VudGVycywgcmVzdWx0LCBkZWNvZGVkQ29kZXMpO1xuXG4gICAgICAgIGlmICghY29kZSB8fCByZXN1bHQubGVuZ3RoIDwgNSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBkZWNvZGVkQ29kZXMucHVzaChlbmRJbmZvKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29kZTogcmVzdWx0LmpvaW4oJycpLFxuICAgICAgICAgICAgc3RhcnQ6IHN0YXJ0SW5mby5zdGFydCxcbiAgICAgICAgICAgIGVuZDogZW5kSW5mby5lbmQsXG4gICAgICAgICAgICBzdGFydEluZm8sXG4gICAgICAgICAgICBkZWNvZGVkQ29kZXNcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2ZpbmRTdGFydCgpOiBCYXJjb2RlSW5mbyB7XG4gICAgICAgIGxldCBvZmZzZXQgPSB0aGlzLl9uZXh0U2V0KHRoaXMuX3Jvdyk7XG4gICAgICAgIGxldCBuYXJyb3dCYXJXaWR0aCA9IDE7XG4gICAgICAgIGxldCBzdGFydEluZm86IEJhcmNvZGVJbmZvO1xuXG4gICAgICAgIHdoaWxlICghc3RhcnRJbmZvKSB7XG4gICAgICAgICAgICBzdGFydEluZm8gPSB0aGlzLl9maW5kUGF0dGVybihTVEFSVF9QQVRURVJOLCBvZmZzZXQsIDAsIHRydWUpO1xuXG4gICAgICAgICAgICBpZiAoIXN0YXJ0SW5mbykge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBuYXJyb3dCYXJXaWR0aCA9IChzdGFydEluZm8uZW5kIC0gc3RhcnRJbmZvLnN0YXJ0KSAvIHN0YXJ0UGF0dGVybkxlbmd0aCB8IDA7XG4gICAgICAgICAgICBjb25zdCBsZWFkaW5nV2hpdGVzcGFjZVN0YXJ0ID0gc3RhcnRJbmZvLnN0YXJ0IC0gbmFycm93QmFyV2lkdGggKiA1O1xuXG4gICAgICAgICAgICBpZiAobGVhZGluZ1doaXRlc3BhY2VTdGFydCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX21hdGNoUmFuZ2UobGVhZGluZ1doaXRlc3BhY2VTdGFydCwgc3RhcnRJbmZvLnN0YXJ0LCAwKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RhcnRJbmZvO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgb2Zmc2V0ID0gc3RhcnRJbmZvLmVuZDtcbiAgICAgICAgICAgIHN0YXJ0SW5mbyA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX3ZlcmlmeVRyYWlsaW5nV2hpdGVzcGFjZShlbmRJbmZvOiBCYXJjb2RlSW5mbyk6IEJhcmNvZGVJbmZvIHtcbiAgICAgICAgY29uc3QgdHJhaWxpbmdXaGl0ZXNwYWNlRW5kID0gZW5kSW5mby5lbmQgKyAoZW5kSW5mby5lbmQgLSBlbmRJbmZvLnN0YXJ0KSAvIDI7XG5cbiAgICAgICAgaWYgKHRyYWlsaW5nV2hpdGVzcGFjZUVuZCA8IHRoaXMuX3Jvdy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9tYXRjaFJhbmdlKGVuZEluZm8uZW5kLCB0cmFpbGluZ1doaXRlc3BhY2VFbmQsIDApKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVuZEluZm87XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2ZpbmRFbmQoKTogQmFyY29kZUluZm8ge1xuICAgICAgICB0aGlzLl9yb3cucmV2ZXJzZSgpO1xuXG4gICAgICAgIGNvbnN0IG9mZnNldCA9IHRoaXMuX25leHRTZXQodGhpcy5fcm93KTtcbiAgICAgICAgY29uc3QgZW5kSW5mbyA9IHRoaXMuX2ZpbmRQYXR0ZXJuKFNUT1BfUEFUVEVSTiwgb2Zmc2V0LCAwLCB0cnVlKTtcblxuICAgICAgICB0aGlzLl9yb3cucmV2ZXJzZSgpO1xuXG4gICAgICAgIGlmIChlbmRJbmZvID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHJldmVyc2UgbnVtYmVyc1xuICAgICAgICBjb25zdCBzdGFydCA9IGVuZEluZm8uc3RhcnQ7XG4gICAgICAgIGVuZEluZm8uc3RhcnQgPSB0aGlzLl9yb3cubGVuZ3RoIC0gZW5kSW5mby5lbmQ7XG4gICAgICAgIGVuZEluZm8uZW5kID0gdGhpcy5fcm93Lmxlbmd0aCAtIHN0YXJ0O1xuXG4gICAgICAgIHJldHVybiBlbmRJbmZvICE9PSBudWxsID8gdGhpcy5fdmVyaWZ5VHJhaWxpbmdXaGl0ZXNwYWNlKGVuZEluZm8pIDogbnVsbDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2RlY29kZUNvZGUoY291bnRlcjogUmVhZG9ubHlBcnJheTxudW1iZXI+KTogQmFyY29kZUluZm8ge1xuICAgICAgICBjb25zdCBiZXN0TWF0Y2g6IEJhcmNvZGVJbmZvID0ge1xuICAgICAgICAgICAgZXJyb3I6IE51bWJlci5NQVhfVkFMVUUsXG4gICAgICAgICAgICBjb2RlOiAtMSxcbiAgICAgICAgICAgIHN0YXJ0OiAwLFxuICAgICAgICAgICAgZW5kOiAwXG4gICAgICAgIH07XG5cbiAgICAgICAgZm9yIChsZXQgY29kZSA9IDA7IGNvZGUgPCBDT0RFX1BBVFRFUk4ubGVuZ3RoOyBjb2RlKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGVycm9yID0gdGhpcy5fbWF0Y2hQYXR0ZXJuKGNvdW50ZXIsIENPREVfUEFUVEVSTltjb2RlXSk7XG4gICAgICAgICAgICBpZiAoZXJyb3IgPCBiZXN0TWF0Y2guZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBiZXN0TWF0Y2guY29kZSA9IGNvZGU7XG4gICAgICAgICAgICAgICAgYmVzdE1hdGNoLmVycm9yID0gZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYmVzdE1hdGNoLmVycm9yIDwgdGhpcy5BVkVSQUdFX0NPREVfRVJST1IgPyBiZXN0TWF0Y2ggOiBudWxsO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZGVjb2RlUGF5bG9hZChjb3VudGVyczogUmVhZG9ubHlBcnJheTxudW1iZXI+LCByZXN1bHQ6IEFycmF5PG51bWJlcj4sIGRlY29kZWRDb2RlczogQXJyYXk8QmFyY29kZUluZm8+KTogQmFyY29kZUluZm8ge1xuICAgICAgICBjb25zdCBjb3VudGVyTGVuZ3RoID0gY291bnRlcnMubGVuZ3RoO1xuICAgICAgICBjb25zdCBjb3VudGVyID0gWzAsIDAsIDAsIDAsIDBdO1xuICAgICAgICBsZXQgcG9zID0gMDtcbiAgICAgICAgbGV0IGNvZGU6IEJhcmNvZGVJbmZvO1xuXG4gICAgICAgIHdoaWxlIChwb3MgPCBjb3VudGVyTGVuZ3RoKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvdW50ZXJbaV0gPSBjb3VudGVyc1twb3NdICogdGhpcy5fYmFyU3BhY2VSYXRpb1swXTtcbiAgICAgICAgICAgICAgICBwb3MgKz0gMjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29kZSA9IHRoaXMuX2RlY29kZUNvZGUoY291bnRlcik7XG5cbiAgICAgICAgICAgIGlmICghY29kZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXN1bHQucHVzaChjb2RlLmNvZGUpO1xuICAgICAgICAgICAgZGVjb2RlZENvZGVzLnB1c2goY29kZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29kZTtcbiAgICB9XG59XG4iLCJleHBvcnQgZW51bSBCYXJjb2RlRGlyZWN0aW9uIHtcbiAgICBGb3J3YXJkID0gMSxcbiAgICBSZXZlcnNlID0gLTFcbn07XG5cbmV4cG9ydCB0eXBlIEJhcmNvZGVGb3JtYXQgPSBzdHJpbmc7XG5cbmV4cG9ydCB0eXBlIEJhcmNvZGVSZWFkZXJUeXBlID0gc3RyaW5nO1xuXG5leHBvcnQgdHlwZSBCYXJjb2RlUmVhZGVyRGVjbGFyYXRpb24gPSBCYXJjb2RlUmVhZGVyVHlwZSB8IHsgZm9ybWF0OiBCYXJjb2RlUmVhZGVyVHlwZTsgY29uZmlnOiBCYXJjb2RlUmVhZGVyQ29uZmlnOyB9O1xuXG5leHBvcnQgaW50ZXJmYWNlIEJhcmNvZGVSZWFkZXJDb25maWcge1xuICAgIG5vcm1hbGl6ZUJhclNwYWNlV2lkdGg/OiBib29sZWFuO1xuICAgIHN1cHBsZW1lbnRzPzogQXJyYXk8QmFyY29kZVJlYWRlclR5cGU+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJhcmNvZGVDb3JyZWN0aW9uIHtcbiAgICBiYXI6IG51bWJlcjtcbiAgICBzcGFjZTogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJhcmNvZGVJbmZvIHtcbiAgICBjb2RlPzogbnVtYmVyO1xuICAgIGNvcnJlY3Rpb24/OiBCYXJjb2RlQ29ycmVjdGlvbjtcbiAgICBlbmQ/OiBudW1iZXI7XG4gICAgZW5kQ291bnRlcj86IG51bWJlcjtcbiAgICBlcnJvcj86IG51bWJlcjtcbiAgICBzdGFydD86IG51bWJlcjtcbiAgICBzdGFydENvdW50ZXI/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmFyY29kZSB7XG4gICAgY29kZT86IHN0cmluZztcbiAgICBjb2Rlc2V0PzogbnVtYmVyO1xuICAgIGNvcnJlY3Rpb24/OiBCYXJjb2RlQ29ycmVjdGlvbjtcbiAgICBkZWNvZGVkQ29kZXM/OiBBcnJheTxzdHJpbmcgfCBCYXJjb2RlSW5mbz47XG4gICAgZGlyZWN0aW9uPzogQmFyY29kZURpcmVjdGlvbjtcbiAgICBlbmQ/OiBudW1iZXI7XG4gICAgZW5kSW5mbz86IEJhcmNvZGVJbmZvO1xuICAgIGZvcm1hdD86IEJhcmNvZGVGb3JtYXQ7XG4gICAgc3RhcnQ/OiBudW1iZXI7XG4gICAgc3RhcnRJbmZvPzogQmFyY29kZUluZm87XG4gICAgc3VwcGxlbWVudD86IEJhcmNvZGU7XG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXJjb2RlUmVhZGVyIHtcbiAgICBwcm90ZWN0ZWQgX3NpbmdsZUNvZGVFcnJvcjogbnVtYmVyO1xuICAgIHByb3RlY3RlZCBfYXZlcmFnZUNvZGVFcnJvcjogbnVtYmVyO1xuICAgIHByb3RlY3RlZCBfZm9ybWF0OiBCYXJjb2RlRm9ybWF0O1xuICAgIHByb3RlY3RlZCBfcm93OiBBcnJheTxudW1iZXI+O1xuXG4gICAgY29uZmlnOiBCYXJjb2RlUmVhZGVyQ29uZmlnO1xuICAgIHN1cHBsZW1lbnRzOiBBcnJheTxCYXJjb2RlUmVhZGVyPjtcblxuICAgIHN0YXRpYyBnZXQgRXhjZXB0aW9uKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgU3RhcnROb3RGb3VuZEV4Y2VwdGlvbjogJ1N0YXJ0LUluZm8gd2FzIG5vdCBmb3VuZCEnLFxuICAgICAgICAgICAgQ29kZU5vdEZvdW5kRXhjZXB0aW9uOiAnQ29kZSBjb3VsZCBub3QgYmUgZm91bmQhJyxcbiAgICAgICAgICAgIFBhdHRlcm5Ob3RGb3VuZEV4Y2VwdGlvbjogJ1BhdHRlcm4gY291bGQgbm90IGJlIGZvdW5kISdcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBnZXQgU0lOR0xFX0NPREVfRVJST1IoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpbmdsZUNvZGVFcnJvcjtcbiAgICB9XG5cbiAgICBnZXQgQVZFUkFHRV9DT0RFX0VSUk9SKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hdmVyYWdlQ29kZUVycm9yO1xuICAgIH1cblxuICAgIGdldCBGT1JNQVQoKTogQmFyY29kZUZvcm1hdCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9mb3JtYXQ7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoY29uZmlnPzogQmFyY29kZVJlYWRlckNvbmZpZywgc3VwcGxlbWVudHM/OiBBcnJheTxCYXJjb2RlUmVhZGVyPikge1xuICAgICAgICB0aGlzLl9mb3JtYXQgPSAndW5rbm93bic7XG4gICAgICAgIHRoaXMuX3JvdyA9IFtdO1xuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcbiAgICAgICAgdGhpcy5zdXBwbGVtZW50cyA9IHN1cHBsZW1lbnRzO1xuICAgIH1cblxuICAgIGFic3RyYWN0IGRlY29kZShyb3c/OiBBcnJheTxudW1iZXI+LCBzdGFydD86IG51bWJlcik6IEJhcmNvZGU7XG5cbiAgICBwcm90ZWN0ZWQgX2ZpbmRQYXR0ZXJuKHBhdHRlcm46IFJlYWRvbmx5QXJyYXk8bnVtYmVyPiwgb2Zmc2V0OiBudW1iZXIsIGlzV2hpdGU6IDAgfCAxLCB0cnlIYXJkZXI6IGJvb2xlYW4pOiBCYXJjb2RlSW5mbyB7XG4gICAgICAgIGNvbnN0IGNvdW50ZXIgPSBuZXcgQXJyYXk8bnVtYmVyPihwYXR0ZXJuLmxlbmd0aCk7XG4gICAgICAgIGNvbnN0IGJlc3RNYXRjaDogQmFyY29kZUluZm8gPSB7XG4gICAgICAgICAgICBlcnJvcjogTnVtYmVyLk1BWF9WQUxVRSxcbiAgICAgICAgICAgIGNvZGU6IC0xLFxuICAgICAgICAgICAgc3RhcnQ6IDAsXG4gICAgICAgICAgICBlbmQ6IDBcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgZXBzaWxvbiA9IHRoaXMuQVZFUkFHRV9DT0RFX0VSUk9SO1xuICAgICAgICBsZXQgY291bnRlclBvcyA9IDA7XG5cbiAgICAgICAgaWYgKCFvZmZzZXQpIHtcbiAgICAgICAgICAgIG9mZnNldCA9IHRoaXMuX25leHRTZXQodGhpcy5fcm93KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvdW50ZXIuZmlsbCgwKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gb2Zmc2V0OyBpIDwgdGhpcy5fcm93Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fcm93W2ldIF4gaXNXaGl0ZSkge1xuICAgICAgICAgICAgICAgIGNvdW50ZXJbY291bnRlclBvc10rKztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvdW50ZXJQb3MgPT09IGNvdW50ZXIubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlcnJvciA9IHRoaXMuX21hdGNoUGF0dGVybihjb3VudGVyLCBwYXR0ZXJuKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IgPCBlcHNpbG9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiZXN0TWF0Y2guZXJyb3IgPSBlcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlc3RNYXRjaC5zdGFydCA9IGkgLSBjb3VudGVyLnJlZHVjZSgoc3VtLCB2YWx1ZSkgPT4gc3VtICsgdmFsdWUsIDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmVzdE1hdGNoLmVuZCA9IGk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYmVzdE1hdGNoO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRyeUhhcmRlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb3VudGVyLmxlbmd0aCAtIDI7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ZXJbal0gPSBjb3VudGVyW2ogKyAyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ZXJbY291bnRlci5sZW5ndGggLSAyXSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVyW2NvdW50ZXIubGVuZ3RoIC0gMV0gPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgY291bnRlclBvcy0tO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb3VudGVyUG9zKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvdW50ZXJbY291bnRlclBvc10gPSAxO1xuICAgICAgICAgICAgICAgIGlzV2hpdGUgPSBpc1doaXRlID8gMCA6IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9uZXh0VW5zZXQobGluZTogUmVhZG9ubHlBcnJheTxudW1iZXI+LCBzdGFydD86IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIGZvciAobGV0IGkgPSBzdGFydCB8fCAwOyBpIDwgbGluZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKCFsaW5lW2ldKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxpbmUubGVuZ3RoO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfbmV4dFNldChsaW5lOiBSZWFkb25seUFycmF5PG51bWJlcj4sIHN0YXJ0PzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0IHx8IDA7IGkgPCBsaW5lLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAobGluZVtpXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsaW5lLmxlbmd0aDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX21hdGNoUmFuZ2Uoc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIsIHZhbHVlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0IDwgMCA/IDAgOiBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fcm93W2ldICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX21hdGNoUGF0dGVybihjb3VudGVyOiBSZWFkb25seUFycmF5PG51bWJlcj4sIGNvZGU6IFJlYWRvbmx5QXJyYXk8bnVtYmVyPiwgbWF4U2luZ2xlRXJyb3I/OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICBsZXQgZXJyb3IgPSAwO1xuICAgICAgICBsZXQgc3VtID0gMDtcbiAgICAgICAgbGV0IG1vZHVsbyA9IDA7XG5cbiAgICAgICAgbWF4U2luZ2xlRXJyb3IgPSBtYXhTaW5nbGVFcnJvciB8fCB0aGlzLlNJTkdMRV9DT0RFX0VSUk9SIHx8IDE7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBzdW0gKz0gY291bnRlcltpXTtcbiAgICAgICAgICAgIG1vZHVsbyArPSBjb2RlW2ldO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN1bSA8IG1vZHVsbykge1xuICAgICAgICAgICAgcmV0dXJuIE51bWJlci5NQVhfVkFMVUU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBiYXJXaWR0aCA9IHN1bSAvIG1vZHVsbztcbiAgICAgICAgbWF4U2luZ2xlRXJyb3IgKj0gYmFyV2lkdGg7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBjb3VudCA9IGNvdW50ZXJbaV07XG4gICAgICAgICAgICBjb25zdCBzY2FsZWQgPSBjb2RlW2ldICogYmFyV2lkdGg7XG4gICAgICAgICAgICBjb25zdCBzaW5nbGVFcnJvciA9IE1hdGguYWJzKGNvdW50IC0gc2NhbGVkKSAvIHNjYWxlZDtcblxuICAgICAgICAgICAgaWYgKHNpbmdsZUVycm9yID4gbWF4U2luZ2xlRXJyb3IpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gTnVtYmVyLk1BWF9WQUxVRTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZXJyb3IgKz0gc2luZ2xlRXJyb3I7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZXJyb3IgLyBtb2R1bG87XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9jb3JyZWN0QmFycyhjb3VudGVyOiBBcnJheTxudW1iZXI+LCBjb3JyZWN0aW9uOiBudW1iZXIsIGluZGljZXM6IEFycmF5PG51bWJlcj4pIHtcbiAgICAgICAgbGV0IGxlbmd0aCA9IGluZGljZXMubGVuZ3RoO1xuICAgICAgICBsZXQgdG1wID0gMDtcblxuICAgICAgICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICAgICAgICAgIHRtcCA9IGNvdW50ZXJbaW5kaWNlc1tsZW5ndGhdXSAqICgxIC0gKCgxIC0gY29ycmVjdGlvbikgLyAyKSk7XG4gICAgICAgICAgICBpZiAodG1wID4gMSkge1xuICAgICAgICAgICAgICAgIGNvdW50ZXJbaW5kaWNlc1tsZW5ndGhdXSA9IHRtcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRlY29kZVBhdHRlcm4ocGF0dGVybjogQXJyYXk8bnVtYmVyPik6IEJhcmNvZGUge1xuICAgICAgICB0aGlzLl9yb3cgPSBwYXR0ZXJuO1xuICAgICAgICBsZXQgcmVzdWx0ID0gdGhpcy5kZWNvZGUoKTtcblxuICAgICAgICBpZiAocmVzdWx0ID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLl9yb3cucmV2ZXJzZSgpO1xuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5kZWNvZGUoKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuZGlyZWN0aW9uID0gQmFyY29kZURpcmVjdGlvbi5SZXZlcnNlO1xuICAgICAgICAgICAgICAgIHJlc3VsdC5zdGFydCA9IHRoaXMuX3Jvdy5sZW5ndGggLSByZXN1bHQuc3RhcnQ7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmVuZCA9IHRoaXMuX3Jvdy5sZW5ndGggLSByZXN1bHQuZW5kO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0LmRpcmVjdGlvbiA9IEJhcmNvZGVEaXJlY3Rpb24uRm9yd2FyZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgIHJlc3VsdC5mb3JtYXQgPSB0aGlzLkZPUk1BVDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgX2ZpbGxDb3VudGVycyhvZmZzZXQ6IG51bWJlciwgZW5kOiBudW1iZXIsIGlzV2hpdGU6IDAgfCAxKTogQXJyYXk8bnVtYmVyPiB7XG4gICAgICAgIGNvbnN0IGNvdW50ZXJzID0gbmV3IEFycmF5PG51bWJlcj4oKTtcbiAgICAgICAgbGV0IGNvdW50ZXJQb3MgPSAwO1xuXG4gICAgICAgIGNvdW50ZXJzW2NvdW50ZXJQb3NdID0gMDtcblxuICAgICAgICBmb3IgKGxldCBpID0gb2Zmc2V0OyBpIDwgZW5kOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9yb3dbaV0gXiBpc1doaXRlKSB7XG4gICAgICAgICAgICAgICAgY291bnRlcnNbY291bnRlclBvc10rKztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY291bnRlclBvcysrO1xuICAgICAgICAgICAgICAgIGNvdW50ZXJzW2NvdW50ZXJQb3NdID0gMTtcbiAgICAgICAgICAgICAgICBpc1doaXRlID0gaXNXaGl0ZSA/IDAgOiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvdW50ZXJzO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfdG9Db3VudGVycyhzdGFydDogbnVtYmVyLCBjb3VudGVyczogVWludDE2QXJyYXkpOiBVaW50MTZBcnJheSB7XG4gICAgICAgIGNvbnN0IG51bUNvdW50ZXJzID0gY291bnRlcnMubGVuZ3RoO1xuICAgICAgICBjb25zdCBlbmQgPSB0aGlzLl9yb3cubGVuZ3RoO1xuICAgICAgICBsZXQgaXNXaGl0ZTogMCB8IDEgPSB0aGlzLl9yb3dbc3RhcnRdID8gMCA6IDE7XG4gICAgICAgIGxldCBjb3VudGVyUG9zID0gMDtcblxuICAgICAgICBjb3VudGVycy5maWxsKDApO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fcm93W2ldIF4gaXNXaGl0ZSkge1xuICAgICAgICAgICAgICAgIGNvdW50ZXJzW2NvdW50ZXJQb3NdKys7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvdW50ZXJQb3MrKztcbiAgICAgICAgICAgICAgICBpZiAoY291bnRlclBvcyA9PT0gbnVtQ291bnRlcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnRlcnNbY291bnRlclBvc10gPSAxO1xuICAgICAgICAgICAgICAgICAgICBpc1doaXRlID0gaXNXaGl0ZSA/IDAgOiAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb3VudGVycztcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBCYXJjb2RlLCBCYXJjb2RlSW5mbywgQmFyY29kZVJlYWRlciB9IGZyb20gJy4vYmFyY29kZS1yZWFkZXInO1xuXG5jb25zdCBBTFBIQUJFVEhfU1RSSU5HID0gJzAxMjM0NTY3ODktJDovLitBQkNEJztcbmNvbnN0IEFMUEhBQkVUID0gWy4uLkFMUEhBQkVUSF9TVFJJTkddLm1hcChjaGFyID0+IGNoYXIuY2hhckNvZGVBdCgwKSk7XG4vLyBjb25zdCBBTFBIQUJFVCA9IFs0OCwgNDksIDUwLCA1MSwgNTIsIDUzLCA1NCwgNTUsIDU2LCA1NywgNDUsIDM2LCA1OCwgNDcsIDQ2LCA0MywgNjUsIDY2LCA2NywgNjhdO1xuY29uc3QgQ0hBUkFDVEVSX0VOQ09ESU5HUyA9IFsweDAwMywgMHgwMDYsIDB4MDA5LCAweDA2MCwgMHgwMTIsIDB4MDQyLCAweDAyMSwgMHgwMjQsIDB4MDMwLCAweDA0OCwgMHgwMGMsIDB4MDE4LCAweDA0NSxcbiAgICAweDA1MSwgMHgwNTQsIDB4MDE1LCAweDAxQSwgMHgwMjksIDB4MDBCLCAweDAwRV07XG5jb25zdCBTVEFSVF9FTkQgPSBbMHgwMUEsIDB4MDI5LCAweDAwQiwgMHgwMEVdO1xuY29uc3QgTUlOX0VOQ09ERURfQ0hBUlMgPSA0O1xuY29uc3QgTUFYX0FDQ0VQVEFCTEUgPSAyLjA7XG5jb25zdCBQQURESU5HID0gMS41O1xuXG5pbnRlcmZhY2UgVGhyZXNob2xkIHtcbiAgICBzcGFjZToge1xuICAgICAgICBuYXJyb3c6IHtcbiAgICAgICAgICAgIHNpemU6IG51bWJlcjtcbiAgICAgICAgICAgIGNvdW50czogbnVtYmVyO1xuICAgICAgICAgICAgbWluOiBudW1iZXI7XG4gICAgICAgICAgICBtYXg6IG51bWJlcjtcbiAgICAgICAgfTtcbiAgICAgICAgd2lkZToge1xuICAgICAgICAgICAgc2l6ZTogbnVtYmVyO1xuICAgICAgICAgICAgY291bnRzOiBudW1iZXI7XG4gICAgICAgICAgICBtaW46IG51bWJlcjtcbiAgICAgICAgICAgIG1heDogbnVtYmVyO1xuICAgICAgICB9O1xuICAgIH07XG4gICAgYmFyOiB7XG4gICAgICAgIG5hcnJvdzoge1xuICAgICAgICAgICAgc2l6ZTogbnVtYmVyO1xuICAgICAgICAgICAgY291bnRzOiBudW1iZXI7XG4gICAgICAgICAgICBtaW46IG51bWJlcjtcbiAgICAgICAgICAgIG1heDogbnVtYmVyO1xuICAgICAgICB9O1xuICAgICAgICB3aWRlOiB7XG4gICAgICAgICAgICBzaXplOiBudW1iZXI7XG4gICAgICAgICAgICBjb3VudHM6IG51bWJlcjtcbiAgICAgICAgICAgIG1pbjogbnVtYmVyO1xuICAgICAgICAgICAgbWF4OiBudW1iZXI7XG4gICAgICAgIH07XG4gICAgfTtcbn1cblxuZXhwb3J0IGNsYXNzIENvZGFiYXJSZWFkZXIgZXh0ZW5kcyBCYXJjb2RlUmVhZGVyIHtcbiAgICBwcml2YXRlIF9jb3VudGVyczogQXJyYXk8bnVtYmVyPjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuX2Zvcm1hdCA9ICdjb2RhYmFyJztcbiAgICAgICAgdGhpcy5fY291bnRlcnMgPSBbXTtcbiAgICB9XG5cbiAgICBkZWNvZGUoKTogQmFyY29kZSB7XG4gICAgICAgIHRoaXMuX2NvdW50ZXJzID0gdGhpcy5fZmlsbENvdW50ZXJzKHRoaXMuX25leHRVbnNldCh0aGlzLl9yb3cpLCB0aGlzLl9yb3cubGVuZ3RoLCAxKTtcblxuICAgICAgICBjb25zdCBzdGFydCA9IHRoaXMuX2ZpbmRTdGFydCgpO1xuICAgICAgICBpZiAoIXN0YXJ0KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBBcnJheTxzdHJpbmc+KCk7XG4gICAgICAgIGxldCBuZXh0U3RhcnQgPSBzdGFydC5zdGFydENvdW50ZXI7XG4gICAgICAgIGxldCBwYXR0ZXJuOiBudW1iZXI7XG5cbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgcGF0dGVybiA9IHRoaXMuX3RvUGF0dGVybihuZXh0U3RhcnQpO1xuICAgICAgICAgICAgaWYgKHBhdHRlcm4gPCAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBkZWNvZGVkQ2hhciA9IHRoaXMuX3BhdHRlcm5Ub0NoYXIocGF0dGVybik7XG4gICAgICAgICAgICBpZiAoZGVjb2RlZENoYXIgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGRlY29kZWRDaGFyKTtcbiAgICAgICAgICAgIG5leHRTdGFydCArPSA4O1xuICAgICAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGggPiAxICYmIFNUQVJUX0VORC5zb21lKGNvZGUgPT4gY29kZSA9PT0gcGF0dGVybikpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSB3aGlsZSAobmV4dFN0YXJ0IDwgdGhpcy5fY291bnRlcnMubGVuZ3RoKTtcblxuICAgICAgICAvLyB2ZXJpZnkgZW5kXG4gICAgICAgIGlmICgocmVzdWx0Lmxlbmd0aCAtIDIpIDwgTUlOX0VOQ09ERURfQ0hBUlMgfHwgIVNUQVJUX0VORC5zb21lKGNvZGUgPT4gY29kZSA9PT0gcGF0dGVybikpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdmVyaWZ5IGVuZCB3aGl0ZSBzcGFjZVxuICAgICAgICBpZiAoIXRoaXMuX3ZlcmlmeVdoaXRlc3BhY2Uoc3RhcnQuc3RhcnRDb3VudGVyLCBuZXh0U3RhcnQgLSA4KSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuX3ZhbGlkYXRlUmVzdWx0KHJlc3VsdCwgc3RhcnQuc3RhcnRDb3VudGVyKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBuZXh0U3RhcnQgPSBuZXh0U3RhcnQgPiB0aGlzLl9jb3VudGVycy5sZW5ndGggPyB0aGlzLl9jb3VudGVycy5sZW5ndGggOiBuZXh0U3RhcnQ7XG4gICAgICAgIGNvbnN0IGVuZCA9IHN0YXJ0LnN0YXJ0ICsgdGhpcy5fc3VtQ291bnRlcnMoc3RhcnQuc3RhcnRDb3VudGVyLCBuZXh0U3RhcnQgLSA4KTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29kZTogcmVzdWx0LmpvaW4oJycpLFxuICAgICAgICAgICAgc3RhcnQ6IHN0YXJ0LnN0YXJ0LFxuICAgICAgICAgICAgZW5kLFxuICAgICAgICAgICAgc3RhcnRJbmZvOiBzdGFydCxcbiAgICAgICAgICAgIGRlY29kZWRDb2RlczogcmVzdWx0XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF92ZXJpZnlXaGl0ZXNwYWNlKHN0YXJ0Q291bnRlcjogbnVtYmVyLCBlbmRDb3VudGVyOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKChzdGFydENvdW50ZXIgLSAxIDw9IDApXG4gICAgICAgICAgICB8fCB0aGlzLl9jb3VudGVyc1tzdGFydENvdW50ZXIgLSAxXSA+PSAodGhpcy5fY2FsY3VsYXRlUGF0dGVybkxlbmd0aChzdGFydENvdW50ZXIpIC8gMi4wKSkge1xuICAgICAgICAgICAgaWYgKChlbmRDb3VudGVyICsgOCA+PSB0aGlzLl9jb3VudGVycy5sZW5ndGgpXG4gICAgICAgICAgICAgICAgfHwgdGhpcy5fY291bnRlcnNbZW5kQ291bnRlciArIDddID49ICh0aGlzLl9jYWxjdWxhdGVQYXR0ZXJuTGVuZ3RoKGVuZENvdW50ZXIpIC8gMi4wKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2NhbGN1bGF0ZVBhdHRlcm5MZW5ndGgob2Zmc2V0OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICBsZXQgc3VtID0gMDtcblxuICAgICAgICBmb3IgKGxldCBpID0gb2Zmc2V0OyBpIDwgb2Zmc2V0ICsgNzsgaSsrKSB7XG4gICAgICAgICAgICBzdW0gKz0gdGhpcy5fY291bnRlcnNbaV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VtO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3RocmVzaG9sZFJlc3VsdFBhdHRlcm4ocmVzdWx0OiBSZWFkb25seUFycmF5PHN0cmluZz4sIHN0YXJ0Q291bnRlcjogbnVtYmVyKTogVGhyZXNob2xkIHtcbiAgICAgICAgY29uc3QgY2F0ZWdvcml6YXRpb246IFRocmVzaG9sZCA9IHtcbiAgICAgICAgICAgIHNwYWNlOiB7XG4gICAgICAgICAgICAgICAgbmFycm93OiB7IHNpemU6IDAsIGNvdW50czogMCwgbWluOiAwLCBtYXg6IE51bWJlci5NQVhfVkFMVUUgfSxcbiAgICAgICAgICAgICAgICB3aWRlOiB7IHNpemU6IDAsIGNvdW50czogMCwgbWluOiAwLCBtYXg6IE51bWJlci5NQVhfVkFMVUUgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJhcjoge1xuICAgICAgICAgICAgICAgIG5hcnJvdzogeyBzaXplOiAwLCBjb3VudHM6IDAsIG1pbjogMCwgbWF4OiBOdW1iZXIuTUFYX1ZBTFVFIH0sXG4gICAgICAgICAgICAgICAgd2lkZTogeyBzaXplOiAwLCBjb3VudHM6IDAsIG1pbjogMCwgbWF4OiBOdW1iZXIuTUFYX1ZBTFVFIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgbGV0IHBvcyA9IHN0YXJ0Q291bnRlcjtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHBhdHRlcm4gPSB0aGlzLl9jaGFyVG9QYXR0ZXJuKHJlc3VsdFtpXSk7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGogPSA2OyBqID49IDA7IGotLSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGtpbmQgPSAoaiAmIDEpID09PSAyID8gY2F0ZWdvcml6YXRpb24uYmFyIDogY2F0ZWdvcml6YXRpb24uc3BhY2U7XG4gICAgICAgICAgICAgICAgY29uc3QgY2F0ID0gKHBhdHRlcm4gJiAxKSA9PT0gMSA/IGtpbmQud2lkZSA6IGtpbmQubmFycm93O1xuICAgICAgICAgICAgICAgIGNhdC5zaXplICs9IHRoaXMuX2NvdW50ZXJzW3BvcyArIGpdO1xuICAgICAgICAgICAgICAgIGNhdC5jb3VudHMrKztcbiAgICAgICAgICAgICAgICBwYXR0ZXJuID4+PSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcG9zICs9IDg7XG4gICAgICAgIH1cblxuICAgICAgICBbJ3NwYWNlJywgJ2JhciddLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGtpbmQgPSBjYXRlZ29yaXphdGlvbltrZXldO1xuICAgICAgICAgICAga2luZC53aWRlLm1pbiA9IE1hdGguZmxvb3IoKGtpbmQubmFycm93LnNpemUgLyBraW5kLm5hcnJvdy5jb3VudHMgKyBraW5kLndpZGUuc2l6ZSAvIGtpbmQud2lkZS5jb3VudHMpIC8gMik7XG4gICAgICAgICAgICBraW5kLm5hcnJvdy5tYXggPSBNYXRoLmNlaWwoa2luZC53aWRlLm1pbik7XG4gICAgICAgICAgICBraW5kLndpZGUubWF4ID0gTWF0aC5jZWlsKChraW5kLndpZGUuc2l6ZSAqIE1BWF9BQ0NFUFRBQkxFICsgUEFERElORykgLyBraW5kLndpZGUuY291bnRzKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGNhdGVnb3JpemF0aW9uO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2NoYXJUb1BhdHRlcm4oY2hhcjogc3RyaW5nKTogbnVtYmVyIHtcbiAgICAgICAgY29uc3QgY2hhckNvZGUgPSBjaGFyLmNoYXJDb2RlQXQoMCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBBTFBIQUJFVC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKEFMUEhBQkVUW2ldID09PSBjaGFyQ29kZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBDSEFSQUNURVJfRU5DT0RJTkdTW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIDB4MDtcbiAgICB9XG5cbiAgICBwcml2YXRlIF92YWxpZGF0ZVJlc3VsdChyZXN1bHQ6IFJlYWRvbmx5QXJyYXk8c3RyaW5nPiwgc3RhcnRDb3VudGVyOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgdGhyZXNob2xkID0gdGhpcy5fdGhyZXNob2xkUmVzdWx0UGF0dGVybihyZXN1bHQsIHN0YXJ0Q291bnRlcik7XG4gICAgICAgIGxldCBwb3MgPSBzdGFydENvdW50ZXI7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBwYXR0ZXJuID0gdGhpcy5fY2hhclRvUGF0dGVybihyZXN1bHRbaV0pO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gNjsgaiA+PSAwOyBqLS0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBraW5kID0gKGogJiAxKSA9PT0gMCA/IHRocmVzaG9sZC5iYXIgOiB0aHJlc2hvbGQuc3BhY2U7XG4gICAgICAgICAgICAgICAgY29uc3QgY2F0ID0gKHBhdHRlcm4gJiAxKSA9PT0gMSA/IGtpbmQud2lkZSA6IGtpbmQubmFycm93O1xuICAgICAgICAgICAgICAgIGNvbnN0IHNpemUgPSB0aGlzLl9jb3VudGVyc1twb3MgKyBqXTtcbiAgICAgICAgICAgICAgICBpZiAoc2l6ZSA8IGNhdC5taW4gfHwgc2l6ZSA+IGNhdC5tYXgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXR0ZXJuID4+PSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcG9zICs9IDg7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9wYXR0ZXJuVG9DaGFyKHBhdHRlcm46IG51bWJlcik6IHN0cmluZyB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQ0hBUkFDVEVSX0VOQ09ESU5HUy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKENIQVJBQ1RFUl9FTkNPRElOR1NbaV0gPT09IHBhdHRlcm4pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShBTFBIQUJFVFtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9jb21wdXRlQWx0ZXJuYXRpbmdUaHJlc2hvbGQob2Zmc2V0OiBudW1iZXIsIGVuZDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgbGV0IG1pbiA9IE51bWJlci5NQVhfVkFMVUU7XG4gICAgICAgIGxldCBtYXggPSAwO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSBvZmZzZXQ7IGkgPCBlbmQ7IGkgKz0gMikge1xuICAgICAgICAgICAgY29uc3QgY291bnRlciA9IHRoaXMuX2NvdW50ZXJzW2ldO1xuICAgICAgICAgICAgaWYgKGNvdW50ZXIgPiBtYXgpIHtcbiAgICAgICAgICAgICAgICBtYXggPSBjb3VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvdW50ZXIgPCBtaW4pIHtcbiAgICAgICAgICAgICAgICBtaW4gPSBjb3VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICgobWluICsgbWF4KSAvIDIuMCkgfCAwO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3RvUGF0dGVybihvZmZzZXQ6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIGNvbnN0IG51bUNvdW50ZXJzID0gNztcbiAgICAgICAgY29uc3QgZW5kID0gb2Zmc2V0ICsgbnVtQ291bnRlcnM7XG5cbiAgICAgICAgaWYgKGVuZCA+IHRoaXMuX2NvdW50ZXJzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYmFyVGhyZXNob2xkID0gdGhpcy5fY29tcHV0ZUFsdGVybmF0aW5nVGhyZXNob2xkKG9mZnNldCwgZW5kKTtcbiAgICAgICAgY29uc3Qgc3BhY2VUaHJlc2hvbGQgPSB0aGlzLl9jb21wdXRlQWx0ZXJuYXRpbmdUaHJlc2hvbGQob2Zmc2V0ICsgMSwgZW5kKTtcbiAgICAgICAgbGV0IGJpdG1hc2sgPSAxIDw8IChudW1Db3VudGVycyAtIDEpO1xuICAgICAgICBsZXQgcGF0dGVybiA9IDA7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1Db3VudGVyczsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCB0aHJlc2hvbGQgPSAoaSAmIDEpID09PSAwID8gYmFyVGhyZXNob2xkIDogc3BhY2VUaHJlc2hvbGQ7XG4gICAgICAgICAgICBpZiAodGhpcy5fY291bnRlcnNbb2Zmc2V0ICsgaV0gPiB0aHJlc2hvbGQpIHtcbiAgICAgICAgICAgICAgICBwYXR0ZXJuIHw9IGJpdG1hc2s7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBiaXRtYXNrID4+PSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhdHRlcm47XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfc3VtQ291bnRlcnMoc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICBsZXQgc3VtID0gMDtcblxuICAgICAgICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xuICAgICAgICAgICAgc3VtICs9IHRoaXMuX2NvdW50ZXJzW2ldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1bTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2ZpbmRTdGFydCgpOiBCYXJjb2RlSW5mbyB7XG4gICAgICAgIGxldCBzdGFydCA9IHRoaXMuX25leHRVbnNldCh0aGlzLl9yb3cpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdGhpcy5fY291bnRlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHBhdHRlcm4gPSB0aGlzLl90b1BhdHRlcm4oaSk7XG4gICAgICAgICAgICBpZiAocGF0dGVybiAhPT0gLTEgJiYgU1RBUlRfRU5ELnNvbWUoY29kZSA9PiBjb2RlID09PSBwYXR0ZXJuKSkge1xuICAgICAgICAgICAgICAgIC8vIFRPRE86IExvb2sgZm9yIHdoaXRlc3BhY2UgYWhlYWRcbiAgICAgICAgICAgICAgICBzdGFydCArPSB0aGlzLl9zdW1Db3VudGVycygwLCBpKTtcbiAgICAgICAgICAgICAgICBjb25zdCBlbmQgPSBzdGFydCArIHRoaXMuX3N1bUNvdW50ZXJzKGksIGkgKyA4KTtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBzdGFydCxcbiAgICAgICAgICAgICAgICAgICAgZW5kLFxuICAgICAgICAgICAgICAgICAgICBzdGFydENvdW50ZXI6IGksXG4gICAgICAgICAgICAgICAgICAgIGVuZENvdW50ZXI6IGkgKyA4XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEJhcmNvZGUsIEJhcmNvZGVDb3JyZWN0aW9uLCBCYXJjb2RlSW5mbywgQmFyY29kZVJlYWRlciB9IGZyb20gJy4vYmFyY29kZS1yZWFkZXInO1xuXG5jb25zdCBDT0RFX1NISUZUID0gOTg7XG5jb25zdCBDT0RFX0MgPSA5OTtcbmNvbnN0IENPREVfQiA9IDEwMDtcbmNvbnN0IENPREVfQSA9IDEwMTtcbmNvbnN0IFNUQVJUX0NPREVfQSA9IDEwMztcbmNvbnN0IFNUQVJUX0NPREVfQiA9IDEwNDtcbmNvbnN0IFNUQVJUX0NPREVfQyA9IDEwNTtcbmNvbnN0IFNUT1BfQ09ERSA9IDEwNjtcbmNvbnN0IENPREVfUEFUVEVSTiA9IFtcbiAgICBbMiwgMSwgMiwgMiwgMiwgMl0sXG4gICAgWzIsIDIsIDIsIDEsIDIsIDJdLFxuICAgIFsyLCAyLCAyLCAyLCAyLCAxXSxcbiAgICBbMSwgMiwgMSwgMiwgMiwgM10sXG4gICAgWzEsIDIsIDEsIDMsIDIsIDJdLFxuICAgIFsxLCAzLCAxLCAyLCAyLCAyXSxcbiAgICBbMSwgMiwgMiwgMiwgMSwgM10sXG4gICAgWzEsIDIsIDIsIDMsIDEsIDJdLFxuICAgIFsxLCAzLCAyLCAyLCAxLCAyXSxcbiAgICBbMiwgMiwgMSwgMiwgMSwgM10sXG4gICAgWzIsIDIsIDEsIDMsIDEsIDJdLFxuICAgIFsyLCAzLCAxLCAyLCAxLCAyXSxcbiAgICBbMSwgMSwgMiwgMiwgMywgMl0sXG4gICAgWzEsIDIsIDIsIDEsIDMsIDJdLFxuICAgIFsxLCAyLCAyLCAyLCAzLCAxXSxcbiAgICBbMSwgMSwgMywgMiwgMiwgMl0sXG4gICAgWzEsIDIsIDMsIDEsIDIsIDJdLFxuICAgIFsxLCAyLCAzLCAyLCAyLCAxXSxcbiAgICBbMiwgMiwgMywgMiwgMSwgMV0sXG4gICAgWzIsIDIsIDEsIDEsIDMsIDJdLFxuICAgIFsyLCAyLCAxLCAyLCAzLCAxXSxcbiAgICBbMiwgMSwgMywgMiwgMSwgMl0sXG4gICAgWzIsIDIsIDMsIDEsIDEsIDJdLFxuICAgIFszLCAxLCAyLCAxLCAzLCAxXSxcbiAgICBbMywgMSwgMSwgMiwgMiwgMl0sXG4gICAgWzMsIDIsIDEsIDEsIDIsIDJdLFxuICAgIFszLCAyLCAxLCAyLCAyLCAxXSxcbiAgICBbMywgMSwgMiwgMiwgMSwgMl0sXG4gICAgWzMsIDIsIDIsIDEsIDEsIDJdLFxuICAgIFszLCAyLCAyLCAyLCAxLCAxXSxcbiAgICBbMiwgMSwgMiwgMSwgMiwgM10sXG4gICAgWzIsIDEsIDIsIDMsIDIsIDFdLFxuICAgIFsyLCAzLCAyLCAxLCAyLCAxXSxcbiAgICBbMSwgMSwgMSwgMywgMiwgM10sXG4gICAgWzEsIDMsIDEsIDEsIDIsIDNdLFxuICAgIFsxLCAzLCAxLCAzLCAyLCAxXSxcbiAgICBbMSwgMSwgMiwgMywgMSwgM10sXG4gICAgWzEsIDMsIDIsIDEsIDEsIDNdLFxuICAgIFsxLCAzLCAyLCAzLCAxLCAxXSxcbiAgICBbMiwgMSwgMSwgMywgMSwgM10sXG4gICAgWzIsIDMsIDEsIDEsIDEsIDNdLFxuICAgIFsyLCAzLCAxLCAzLCAxLCAxXSxcbiAgICBbMSwgMSwgMiwgMSwgMywgM10sXG4gICAgWzEsIDEsIDIsIDMsIDMsIDFdLFxuICAgIFsxLCAzLCAyLCAxLCAzLCAxXSxcbiAgICBbMSwgMSwgMywgMSwgMiwgM10sXG4gICAgWzEsIDEsIDMsIDMsIDIsIDFdLFxuICAgIFsxLCAzLCAzLCAxLCAyLCAxXSxcbiAgICBbMywgMSwgMywgMSwgMiwgMV0sXG4gICAgWzIsIDEsIDEsIDMsIDMsIDFdLFxuICAgIFsyLCAzLCAxLCAxLCAzLCAxXSxcbiAgICBbMiwgMSwgMywgMSwgMSwgM10sXG4gICAgWzIsIDEsIDMsIDMsIDEsIDFdLFxuICAgIFsyLCAxLCAzLCAxLCAzLCAxXSxcbiAgICBbMywgMSwgMSwgMSwgMiwgM10sXG4gICAgWzMsIDEsIDEsIDMsIDIsIDFdLFxuICAgIFszLCAzLCAxLCAxLCAyLCAxXSxcbiAgICBbMywgMSwgMiwgMSwgMSwgM10sXG4gICAgWzMsIDEsIDIsIDMsIDEsIDFdLFxuICAgIFszLCAzLCAyLCAxLCAxLCAxXSxcbiAgICBbMywgMSwgNCwgMSwgMSwgMV0sXG4gICAgWzIsIDIsIDEsIDQsIDEsIDFdLFxuICAgIFs0LCAzLCAxLCAxLCAxLCAxXSxcbiAgICBbMSwgMSwgMSwgMiwgMiwgNF0sXG4gICAgWzEsIDEsIDEsIDQsIDIsIDJdLFxuICAgIFsxLCAyLCAxLCAxLCAyLCA0XSxcbiAgICBbMSwgMiwgMSwgNCwgMiwgMV0sXG4gICAgWzEsIDQsIDEsIDEsIDIsIDJdLFxuICAgIFsxLCA0LCAxLCAyLCAyLCAxXSxcbiAgICBbMSwgMSwgMiwgMiwgMSwgNF0sXG4gICAgWzEsIDEsIDIsIDQsIDEsIDJdLFxuICAgIFsxLCAyLCAyLCAxLCAxLCA0XSxcbiAgICBbMSwgMiwgMiwgNCwgMSwgMV0sXG4gICAgWzEsIDQsIDIsIDEsIDEsIDJdLFxuICAgIFsxLCA0LCAyLCAyLCAxLCAxXSxcbiAgICBbMiwgNCwgMSwgMiwgMSwgMV0sXG4gICAgWzIsIDIsIDEsIDEsIDEsIDRdLFxuICAgIFs0LCAxLCAzLCAxLCAxLCAxXSxcbiAgICBbMiwgNCwgMSwgMSwgMSwgMl0sXG4gICAgWzEsIDMsIDQsIDEsIDEsIDFdLFxuICAgIFsxLCAxLCAxLCAyLCA0LCAyXSxcbiAgICBbMSwgMiwgMSwgMSwgNCwgMl0sXG4gICAgWzEsIDIsIDEsIDIsIDQsIDFdLFxuICAgIFsxLCAxLCA0LCAyLCAxLCAyXSxcbiAgICBbMSwgMiwgNCwgMSwgMSwgMl0sXG4gICAgWzEsIDIsIDQsIDIsIDEsIDFdLFxuICAgIFs0LCAxLCAxLCAyLCAxLCAyXSxcbiAgICBbNCwgMiwgMSwgMSwgMSwgMl0sXG4gICAgWzQsIDIsIDEsIDIsIDEsIDFdLFxuICAgIFsyLCAxLCAyLCAxLCA0LCAxXSxcbiAgICBbMiwgMSwgNCwgMSwgMiwgMV0sXG4gICAgWzQsIDEsIDIsIDEsIDIsIDFdLFxuICAgIFsxLCAxLCAxLCAxLCA0LCAzXSxcbiAgICBbMSwgMSwgMSwgMywgNCwgMV0sXG4gICAgWzEsIDMsIDEsIDEsIDQsIDFdLFxuICAgIFsxLCAxLCA0LCAxLCAxLCAzXSxcbiAgICBbMSwgMSwgNCwgMywgMSwgMV0sXG4gICAgWzQsIDEsIDEsIDEsIDEsIDNdLFxuICAgIFs0LCAxLCAxLCAzLCAxLCAxXSxcbiAgICBbMSwgMSwgMywgMSwgNCwgMV0sXG4gICAgWzEsIDEsIDQsIDEsIDMsIDFdLFxuICAgIFszLCAxLCAxLCAxLCA0LCAxXSxcbiAgICBbNCwgMSwgMSwgMSwgMywgMV0sXG4gICAgWzIsIDEsIDEsIDQsIDEsIDJdLFxuICAgIFsyLCAxLCAxLCAyLCAxLCA0XSxcbiAgICBbMiwgMSwgMSwgMiwgMywgMl0sXG4gICAgWzIsIDMsIDMsIDEsIDEsIDEsIDJdXG5dO1xuY29uc3QgTU9EVUxFX0lORElDRVMgPSB7IGJhcjogWzAsIDIsIDRdLCBzcGFjZTogWzEsIDMsIDVdIH07XG5cbmV4cG9ydCBjbGFzcyBDb2RlMTI4UmVhZGVyIGV4dGVuZHMgQmFyY29kZVJlYWRlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5fZm9ybWF0ID0gJ2NvZGVfMTI4JztcbiAgICAgICAgdGhpcy5fc2luZ2xlQ29kZUVycm9yID0gMC42NDtcbiAgICAgICAgdGhpcy5fYXZlcmFnZUNvZGVFcnJvciA9IDAuMzA7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9kZWNvZGVDb2RlKHN0YXJ0OiBudW1iZXIsIGNvcnJlY3Rpb246IEJhcmNvZGVDb3JyZWN0aW9uKTogQmFyY29kZUluZm8ge1xuICAgICAgICBjb25zdCBjb3VudGVyID0gWzAsIDAsIDAsIDAsIDAsIDBdO1xuICAgICAgICBjb25zdCBvZmZzZXQgPSBzdGFydDtcbiAgICAgICAgY29uc3QgYmVzdE1hdGNoOiBCYXJjb2RlSW5mbyA9IHtcbiAgICAgICAgICAgIGVycm9yOiBOdW1iZXIuTUFYX1ZBTFVFLFxuICAgICAgICAgICAgY29kZTogLTEsXG4gICAgICAgICAgICBzdGFydDogc3RhcnQsXG4gICAgICAgICAgICBlbmQ6IHN0YXJ0LFxuICAgICAgICAgICAgY29ycmVjdGlvbjoge1xuICAgICAgICAgICAgICAgIGJhcjogMSxcbiAgICAgICAgICAgICAgICBzcGFjZTogMVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBlcHNpbG9uID0gdGhpcy5BVkVSQUdFX0NPREVfRVJST1I7XG4gICAgICAgIGxldCBpc1doaXRlOiAwIHwgMSA9IHRoaXMuX3Jvd1tvZmZzZXRdID8gMCA6IDE7XG4gICAgICAgIGxldCBjb3VudGVyUG9zID0gMDtcblxuICAgICAgICBmb3IgKGxldCBpID0gb2Zmc2V0OyBpIDwgdGhpcy5fcm93Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fcm93W2ldIF4gaXNXaGl0ZSkge1xuICAgICAgICAgICAgICAgIGNvdW50ZXJbY291bnRlclBvc10rKztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvdW50ZXJQb3MgPT09IGNvdW50ZXIubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29ycmVjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY29ycmVjdChjb3VudGVyLCBjb3JyZWN0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGNvZGUgPSAwOyBjb2RlIDwgQ09ERV9QQVRURVJOLmxlbmd0aDsgY29kZSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlcnJvciA9IHRoaXMuX21hdGNoUGF0dGVybihjb3VudGVyLCBDT0RFX1BBVFRFUk5bY29kZV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yIDwgYmVzdE1hdGNoLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVzdE1hdGNoLmNvZGUgPSBjb2RlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlc3RNYXRjaC5lcnJvciA9IGVycm9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYmVzdE1hdGNoLmVuZCA9IGk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGJlc3RNYXRjaC5jb2RlID09PSAtMSB8fCBiZXN0TWF0Y2guZXJyb3IgPiBlcHNpbG9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGV4cGVjdGVkID0gQ09ERV9QQVRURVJOW2Jlc3RNYXRjaC5jb2RlXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV4cGVjdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiZXN0TWF0Y2guY29ycmVjdGlvbi5iYXIgPSB0aGlzLl9jYWxjdWxhdGVDb3JyZWN0aW9uKGV4cGVjdGVkLCBjb3VudGVyLCBNT0RVTEVfSU5ESUNFUy5iYXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmVzdE1hdGNoLmNvcnJlY3Rpb24uc3BhY2UgPSB0aGlzLl9jYWxjdWxhdGVDb3JyZWN0aW9uKGV4cGVjdGVkLCBjb3VudGVyLCBNT0RVTEVfSU5ESUNFUy5zcGFjZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYmVzdE1hdGNoO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXJQb3MrKztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb3VudGVyW2NvdW50ZXJQb3NdID0gMTtcbiAgICAgICAgICAgICAgICBpc1doaXRlID0gaXNXaGl0ZSA/IDAgOiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfY29ycmVjdChjb3VudGVyOiBBcnJheTxudW1iZXI+LCBjb3JyZWN0aW9uOiBCYXJjb2RlQ29ycmVjdGlvbik6IHZvaWQge1xuICAgICAgICB0aGlzLl9jb3JyZWN0QmFycyhjb3VudGVyLCBjb3JyZWN0aW9uLmJhciwgTU9EVUxFX0lORElDRVMuYmFyKTtcbiAgICAgICAgdGhpcy5fY29ycmVjdEJhcnMoY291bnRlciwgY29ycmVjdGlvbi5zcGFjZSwgTU9EVUxFX0lORElDRVMuc3BhY2UpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZmluZFN0YXJ0KCkge1xuICAgICAgICBjb25zdCBjb3VudGVyID0gWzAsIDAsIDAsIDAsIDAsIDBdO1xuICAgICAgICBjb25zdCBvZmZzZXQgPSB0aGlzLl9uZXh0U2V0KHRoaXMuX3Jvdyk7XG4gICAgICAgIGNvbnN0IGJlc3RNYXRjaCA9IHtcbiAgICAgICAgICAgIGVycm9yOiBOdW1iZXIuTUFYX1ZBTFVFLFxuICAgICAgICAgICAgY29kZTogLTEsXG4gICAgICAgICAgICBzdGFydDogMCxcbiAgICAgICAgICAgIGVuZDogMCxcbiAgICAgICAgICAgIGNvcnJlY3Rpb246IHtcbiAgICAgICAgICAgICAgICBiYXI6IDEsXG4gICAgICAgICAgICAgICAgc3BhY2U6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgZXBzaWxvbiA9IHRoaXMuQVZFUkFHRV9DT0RFX0VSUk9SO1xuICAgICAgICBsZXQgaXNXaGl0ZTogMCB8IDEgPSAwO1xuICAgICAgICBsZXQgY291bnRlclBvcyA9IDA7XG4gICAgICAgIGxldCBzdW06IG51bWJlcjtcblxuICAgICAgICBmb3IgKGxldCBpID0gb2Zmc2V0OyBpIDwgdGhpcy5fcm93Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fcm93W2ldIF4gaXNXaGl0ZSkge1xuICAgICAgICAgICAgICAgIGNvdW50ZXJbY291bnRlclBvc10rKztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvdW50ZXJQb3MgPT09IGNvdW50ZXIubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICBzdW0gPSAwO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvdW50ZXIubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1bSArPSBjb3VudGVyW2pdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGNvZGUgPSBTVEFSVF9DT0RFX0E7IGNvZGUgPD0gU1RBUlRfQ09ERV9DOyBjb2RlKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yID0gdGhpcy5fbWF0Y2hQYXR0ZXJuKGNvdW50ZXIsIENPREVfUEFUVEVSTltjb2RlXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IgPCBiZXN0TWF0Y2guZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZXN0TWF0Y2guY29kZSA9IGNvZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVzdE1hdGNoLmVycm9yID0gZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGJlc3RNYXRjaC5lcnJvciA8IGVwc2lsb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlc3RNYXRjaC5zdGFydCA9IGkgLSBzdW07XG4gICAgICAgICAgICAgICAgICAgICAgICBiZXN0TWF0Y2guZW5kID0gaTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlc3RNYXRjaC5jb3JyZWN0aW9uLmJhciA9IHRoaXMuX2NhbGN1bGF0ZUNvcnJlY3Rpb24oQ09ERV9QQVRURVJOW2Jlc3RNYXRjaC5jb2RlXSwgY291bnRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNT0RVTEVfSU5ESUNFUy5iYXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmVzdE1hdGNoLmNvcnJlY3Rpb24uc3BhY2UgPSB0aGlzLl9jYWxjdWxhdGVDb3JyZWN0aW9uKENPREVfUEFUVEVSTltiZXN0TWF0Y2guY29kZV0sIGNvdW50ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTU9EVUxFX0lORElDRVMuc3BhY2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJlc3RNYXRjaDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgNDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVyW2pdID0gY291bnRlcltqICsgMl07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY291bnRlcls0XSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXJbNV0gPSAwO1xuICAgICAgICAgICAgICAgICAgICBjb3VudGVyUG9zLS07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnRlclBvcysrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb3VudGVyW2NvdW50ZXJQb3NdID0gMTtcbiAgICAgICAgICAgICAgICBpc1doaXRlID0gaXNXaGl0ZSA/IDAgOiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgZGVjb2RlKCk6IEJhcmNvZGUge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgQXJyYXk8c3RyaW5nIHwgbnVtYmVyPigpO1xuICAgICAgICBjb25zdCBzdGFydEluZm8gPSB0aGlzLl9maW5kU3RhcnQoKTtcbiAgICAgICAgbGV0IGNvZGU6IEJhcmNvZGVJbmZvID0gbnVsbDtcbiAgICAgICAgbGV0IGRvbmUgPSBmYWxzZTtcbiAgICAgICAgbGV0IG11bHRpcGxpZXIgPSAwO1xuICAgICAgICBsZXQgY2hlY2tzdW0gPSAwO1xuICAgICAgICBsZXQgY29kZXNldDogbnVtYmVyO1xuICAgICAgICBsZXQgcmF3UmVzdWx0ID0gbmV3IEFycmF5PG51bWJlcj4oKTtcbiAgICAgICAgbGV0IGRlY29kZWRDb2RlcyA9IG5ldyBBcnJheTxCYXJjb2RlSW5mbz4oKTtcbiAgICAgICAgbGV0IHNoaWZ0TmV4dCA9IGZhbHNlO1xuICAgICAgICBsZXQgdW5zaGlmdDogYm9vbGVhbjtcbiAgICAgICAgbGV0IHJlbW92ZUxhc3RDaGFyYWN0ZXIgPSB0cnVlO1xuXG4gICAgICAgIGlmIChzdGFydEluZm8gPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvZGUgPSB7XG4gICAgICAgICAgICBjb2RlOiBzdGFydEluZm8uY29kZSxcbiAgICAgICAgICAgIHN0YXJ0OiBzdGFydEluZm8uc3RhcnQsXG4gICAgICAgICAgICBlbmQ6IHN0YXJ0SW5mby5lbmQsXG4gICAgICAgICAgICBjb3JyZWN0aW9uOiB7XG4gICAgICAgICAgICAgICAgYmFyOiBzdGFydEluZm8uY29ycmVjdGlvbi5iYXIsXG4gICAgICAgICAgICAgICAgc3BhY2U6IHN0YXJ0SW5mby5jb3JyZWN0aW9uLnNwYWNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGRlY29kZWRDb2Rlcy5wdXNoKGNvZGUpO1xuICAgICAgICBjaGVja3N1bSA9IGNvZGUuY29kZTtcblxuICAgICAgICBzd2l0Y2ggKGNvZGUuY29kZSkge1xuICAgICAgICAgICAgY2FzZSBTVEFSVF9DT0RFX0E6XG4gICAgICAgICAgICAgICAgY29kZXNldCA9IENPREVfQTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgU1RBUlRfQ09ERV9COlxuICAgICAgICAgICAgICAgIGNvZGVzZXQgPSBDT0RFX0I7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFNUQVJUX0NPREVfQzpcbiAgICAgICAgICAgICAgICBjb2Rlc2V0ID0gQ09ERV9DO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHdoaWxlICghZG9uZSkge1xuICAgICAgICAgICAgdW5zaGlmdCA9IHNoaWZ0TmV4dDtcbiAgICAgICAgICAgIHNoaWZ0TmV4dCA9IGZhbHNlO1xuICAgICAgICAgICAgY29kZSA9IHRoaXMuX2RlY29kZUNvZGUoY29kZS5lbmQsIGNvZGUuY29ycmVjdGlvbik7XG4gICAgICAgICAgICBpZiAoY29kZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmIChjb2RlLmNvZGUgIT09IFNUT1BfQ09ERSkge1xuICAgICAgICAgICAgICAgICAgICByZW1vdmVMYXN0Q2hhcmFjdGVyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoY29kZS5jb2RlICE9PSBTVE9QX0NPREUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmF3UmVzdWx0LnB1c2goY29kZS5jb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGllcisrO1xuICAgICAgICAgICAgICAgICAgICBjaGVja3N1bSArPSBtdWx0aXBsaWVyICogY29kZS5jb2RlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkZWNvZGVkQ29kZXMucHVzaChjb2RlKTtcblxuICAgICAgICAgICAgICAgIHN3aXRjaCAoY29kZXNldCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIENPREVfQToge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvZGUuY29kZSA8IDY0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZSgzMiArIGNvZGUuY29kZSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjb2RlLmNvZGUgPCA5Nikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZS5jb2RlIC0gNjQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvZGUuY29kZSAhPT0gU1RPUF9DT0RFKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZUxhc3RDaGFyYWN0ZXIgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChjb2RlLmNvZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBDT0RFX1NISUZUOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpZnROZXh0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvZGVzZXQgPSBDT0RFX0I7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBDT0RFX0I6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2Rlc2V0ID0gQ09ERV9CO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgQ09ERV9DOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29kZXNldCA9IENPREVfQztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFNUT1BfQ09ERTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBDT0RFX0I6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2RlLmNvZGUgPCA5Nikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUoMzIgKyBjb2RlLmNvZGUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvZGUuY29kZSAhPT0gU1RPUF9DT0RFKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZUxhc3RDaGFyYWN0ZXIgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChjb2RlLmNvZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBDT0RFX1NISUZUOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpZnROZXh0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvZGVzZXQgPSBDT0RFX0E7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBDT0RFX0E6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2Rlc2V0ID0gQ09ERV9BO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgQ09ERV9DOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29kZXNldCA9IENPREVfQztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFNUT1BfQ09ERTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBDT0RFX0M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2RlLmNvZGUgPCAxMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChjb2RlLmNvZGUgPCAxMCA/ICcwJyArIGNvZGUuY29kZSA6IGNvZGUuY29kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2RlLmNvZGUgIT09IFNUT1BfQ09ERSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVMYXN0Q2hhcmFjdGVyID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoY29kZS5jb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgQ09ERV9BOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29kZXNldCA9IENPREVfQTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIENPREVfQjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvZGVzZXQgPSBDT0RFX0I7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBTVE9QX0NPREU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb25lID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkb25lID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh1bnNoaWZ0KSB7XG4gICAgICAgICAgICAgICAgY29kZXNldCA9IGNvZGVzZXQgPT09IENPREVfQSA/IENPREVfQiA6IENPREVfQTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb2RlID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvZGUuZW5kID0gdGhpcy5fbmV4dFVuc2V0KHRoaXMuX3JvdywgY29kZS5lbmQpO1xuICAgICAgICBpZiAoIXRoaXMuX3ZlcmlmeVRyYWlsaW5nV2hpdGVzcGFjZShjb2RlKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjaGVja3N1bSAtPSBtdWx0aXBsaWVyICogcmF3UmVzdWx0W3Jhd1Jlc3VsdC5sZW5ndGggLSAxXTtcbiAgICAgICAgaWYgKGNoZWNrc3VtICUgMTAzICE9PSByYXdSZXN1bHRbcmF3UmVzdWx0Lmxlbmd0aCAtIDFdKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghcmVzdWx0Lmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvLyByZW1vdmUgbGFzdCBjb2RlIGZyb20gcmVzdWx0IChjaGVja3N1bSlcbiAgICAgICAgaWYgKHJlbW92ZUxhc3RDaGFyYWN0ZXIpIHtcbiAgICAgICAgICAgIHJlc3VsdC5zcGxpY2UocmVzdWx0Lmxlbmd0aCAtIDEsIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvZGU6IHJlc3VsdC5qb2luKCcnKSxcbiAgICAgICAgICAgIHN0YXJ0OiBzdGFydEluZm8uc3RhcnQsXG4gICAgICAgICAgICBlbmQ6IGNvZGUuZW5kLFxuICAgICAgICAgICAgY29kZXNldCxcbiAgICAgICAgICAgIHN0YXJ0SW5mbyxcbiAgICAgICAgICAgIGRlY29kZWRDb2RlcyxcbiAgICAgICAgICAgIGVuZEluZm86IGNvZGVcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX3ZlcmlmeVRyYWlsaW5nV2hpdGVzcGFjZShlbmRJbmZvOiBCYXJjb2RlSW5mbyk6IEJhcmNvZGVJbmZvIHtcbiAgICAgICAgY29uc3QgdHJhaWxpbmdXaGl0ZXNwYWNlRW5kID0gZW5kSW5mby5lbmQgKyAoZW5kSW5mby5lbmQgLSBlbmRJbmZvLnN0YXJ0KSAvIDI7XG5cbiAgICAgICAgaWYgKHRyYWlsaW5nV2hpdGVzcGFjZUVuZCA8IHRoaXMuX3Jvdy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9tYXRjaFJhbmdlKGVuZEluZm8uZW5kLCB0cmFpbGluZ1doaXRlc3BhY2VFbmQsIDApKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVuZEluZm87XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9jYWxjdWxhdGVDb3JyZWN0aW9uKFxuICAgICAgICBleHBlY3RlZDogUmVhZG9ubHlBcnJheTxudW1iZXI+LFxuICAgICAgICBub3JtYWxpemVkOiBSZWFkb25seUFycmF5PG51bWJlcj4sXG4gICAgICAgIGluZGljZXM6IFJlYWRvbmx5QXJyYXk8bnVtYmVyPlxuICAgICk6IG51bWJlciB7XG4gICAgICAgIGxldCBzdW1Ob3JtYWxpemVkID0gMDtcbiAgICAgICAgbGV0IHN1bUV4cGVjdGVkID0gMDtcblxuICAgICAgICBmb3IgKGxldCBsZW5ndGggPSBpbmRpY2VzLmxlbmd0aDsgbGVuZ3RoLS07KSB7XG4gICAgICAgICAgICBzdW1FeHBlY3RlZCArPSBleHBlY3RlZFtpbmRpY2VzW2xlbmd0aF1dO1xuICAgICAgICAgICAgc3VtTm9ybWFsaXplZCArPSBub3JtYWxpemVkW2luZGljZXNbbGVuZ3RoXV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VtRXhwZWN0ZWQgLyBzdW1Ob3JtYWxpemVkO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEJhcmNvZGUsIEJhcmNvZGVJbmZvLCBCYXJjb2RlUmVhZGVyIH0gZnJvbSAnLi9iYXJjb2RlLXJlYWRlcic7XG5cbmNvbnN0IEFTVEVSSVNLID0gMHgwOTQ7XG5jb25zdCBBTFBIQUJFVEhfU1RSSU5HID0gJzAxMjM0NTY3ODlBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWi0uICokLyslJztcbmNvbnN0IEFMUEhBQkVUID0gbmV3IFVpbnQxNkFycmF5KFsuLi5BTFBIQUJFVEhfU1RSSU5HXS5tYXAoY2hhciA9PiBjaGFyLmNoYXJDb2RlQXQoMCkpKTtcbi8vIGNvbnN0IEFMUEhBQkVUID0gWzQ4LCA0OSwgNTAsIDUxLCA1MiwgNTMsIDU0LCA1NSwgNTYsIDU3LCA2NSwgNjYsIDY3LCA2OCwgNjksIDcwLCA3MSwgNzIsIDczLCA3NCwgNzUsIDc2LCA3NywgNzgsXG4vLyAgICAgNzksIDgwLCA4MSwgODIsIDgzLCA4NCwgODUsIDg2LCA4NywgODgsIDg5LCA5MCwgNDUsIDQ2LCAzMiwgNDIsIDM2LCA0NywgNDMsIDM3XTtcbmNvbnN0IENIQVJBQ1RFUl9FTkNPRElOR1MgPSBuZXcgVWludDE2QXJyYXkoW1xuICAgIDB4MDM0LCAweDEyMSwgMHgwNjEsIDB4MTYwLCAweDAzMSwgMHgxMzAsIDB4MDcwLCAweDAyNSwgMHgxMjQsIDB4MDY0LCAweDEwOSwgMHgwNDksIDB4MTQ4LCAweDAxOSwgMHgxMTgsIDB4MDU4LFxuICAgIDB4MDBELCAweDEwQywgMHgwNEMsIDB4MDFDLCAweDEwMywgMHgwNDMsIDB4MTQyLCAweDAxMywgMHgxMTIsIDB4MDUyLCAweDAwNywgMHgxMDYsIDB4MDQ2LCAweDAxNiwgMHgxODEsIDB4MEMxLFxuICAgIDB4MUMwLCAweDA5MSwgMHgxOTAsIDB4MEQwLCAweDA4NSwgMHgxODQsIDB4MEM0LCAweDA5NCwgMHgwQTgsIDB4MEEyLCAweDA4QSwgMHgwMkFcbl0pO1xuXG5leHBvcnQgY2xhc3MgQ29kZTM5UmVhZGVyIGV4dGVuZHMgQmFyY29kZVJlYWRlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5fZm9ybWF0ID0gJ2NvZGVfMzknO1xuICAgIH1cblxuICAgIGRlY29kZSgpOiBCYXJjb2RlIHtcbiAgICAgICAgY29uc3Qgc3RhcnQgPSB0aGlzLl9maW5kU3RhcnQoKTtcblxuICAgICAgICBpZiAoIXN0YXJ0KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBBcnJheTxzdHJpbmc+KCk7XG4gICAgICAgIGxldCBjb3VudGVycyA9IG5ldyBVaW50MTZBcnJheSg5KTtcbiAgICAgICAgbGV0IGRlY29kZWRDaGFyOiBzdHJpbmc7XG4gICAgICAgIGxldCBsYXN0U3RhcnQ6IG51bWJlcjtcbiAgICAgICAgbGV0IG5leHRTdGFydCA9IHRoaXMuX25leHRTZXQodGhpcy5fcm93LCBzdGFydC5lbmQpO1xuXG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIHRoaXMuX3RvQ291bnRlcnMobmV4dFN0YXJ0LCBjb3VudGVycyk7XG4gICAgICAgICAgICBjb25zdCBwYXR0ZXJuID0gdGhpcy5fdG9QYXR0ZXJuKGNvdW50ZXJzKTtcbiAgICAgICAgICAgIGlmIChwYXR0ZXJuIDwgMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVjb2RlZENoYXIgPSB0aGlzLl9wYXR0ZXJuVG9DaGFyKHBhdHRlcm4pO1xuICAgICAgICAgICAgaWYgKGRlY29kZWRDaGFyID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaChkZWNvZGVkQ2hhcik7XG4gICAgICAgICAgICBsYXN0U3RhcnQgPSBuZXh0U3RhcnQ7XG4gICAgICAgICAgICBuZXh0U3RhcnQgKz0gY291bnRlcnMucmVkdWNlKChzdW0sIGl0ZW0pID0+IHN1bSArIGl0ZW0sIDApO1xuICAgICAgICAgICAgbmV4dFN0YXJ0ID0gdGhpcy5fbmV4dFNldCh0aGlzLl9yb3csIG5leHRTdGFydCk7XG4gICAgICAgIH0gd2hpbGUgKGRlY29kZWRDaGFyICE9PSAnKicpO1xuICAgICAgICByZXN1bHQucG9wKCk7XG5cbiAgICAgICAgaWYgKCFyZXN1bHQubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5fdmVyaWZ5VHJhaWxpbmdXaGl0ZXNwYWNlKGxhc3RTdGFydCwgbmV4dFN0YXJ0LCBjb3VudGVycykpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvZGU6IHJlc3VsdC5qb2luKCcnKSxcbiAgICAgICAgICAgIHN0YXJ0OiBzdGFydC5zdGFydCxcbiAgICAgICAgICAgIGVuZDogbmV4dFN0YXJ0LFxuICAgICAgICAgICAgc3RhcnRJbmZvOiBzdGFydCxcbiAgICAgICAgICAgIGRlY29kZWRDb2RlczogcmVzdWx0XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9wYXR0ZXJuVG9DaGFyKHBhdHRlcm4pOiBzdHJpbmcge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IENIQVJBQ1RFUl9FTkNPRElOR1MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChDSEFSQUNURVJfRU5DT0RJTkdTW2ldID09PSBwYXR0ZXJuKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoQUxQSEFCRVRbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3ZlcmlmeVRyYWlsaW5nV2hpdGVzcGFjZShsYXN0U3RhcnQ6IG51bWJlciwgbmV4dFN0YXJ0OiBudW1iZXIsIGNvdW50ZXJzOiBVaW50MTZBcnJheSk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBwYXR0ZXJuU2l6ZSA9IGNvdW50ZXJzLnJlZHVjZSgoc3VtLCBpdGVtKSA9PiBzdW0gKyBpdGVtLCAwKTtcbiAgICAgICAgY29uc3QgdHJhaWxpbmdXaGl0ZXNwYWNlRW5kID0gbmV4dFN0YXJ0IC0gbGFzdFN0YXJ0IC0gcGF0dGVyblNpemU7XG4gICAgICAgIHJldHVybiAodHJhaWxpbmdXaGl0ZXNwYWNlRW5kICogMykgPj0gcGF0dGVyblNpemU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZmluZE5leHRXaWR0aChjb3VudGVyczogVWludDE2QXJyYXksIGN1cnJlbnQ6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIGxldCBtaW5XaWR0aCA9IE51bWJlci5NQVhfVkFMVUU7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGNvdW50ZXJzW2ldIDwgbWluV2lkdGggJiYgY291bnRlcnNbaV0gPiBjdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgbWluV2lkdGggPSBjb3VudGVyc1tpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtaW5XaWR0aDtcbiAgICB9XG5cbiAgICBwcml2YXRlIF90b1BhdHRlcm4oY291bnRlcnM6IFVpbnQxNkFycmF5KTogbnVtYmVyIHtcbiAgICAgICAgY29uc3QgbnVtQ291bnRlcnMgPSBjb3VudGVycy5sZW5ndGg7XG4gICAgICAgIGxldCBtYXhOYXJyb3dXaWR0aCA9IDA7XG4gICAgICAgIGxldCBudW1XaWRlQmFycyA9IG51bUNvdW50ZXJzO1xuICAgICAgICBsZXQgd2lkZUJhcldpZHRoID0gMDtcbiAgICAgICAgbGV0IHBhdHRlcm46IG51bWJlcjtcblxuICAgICAgICB3aGlsZSAobnVtV2lkZUJhcnMgPiAzKSB7XG4gICAgICAgICAgICBtYXhOYXJyb3dXaWR0aCA9IHRoaXMuX2ZpbmROZXh0V2lkdGgoY291bnRlcnMsIG1heE5hcnJvd1dpZHRoKTtcbiAgICAgICAgICAgIG51bVdpZGVCYXJzID0gMDtcbiAgICAgICAgICAgIHBhdHRlcm4gPSAwO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1Db3VudGVyczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvdW50ZXJzW2ldID4gbWF4TmFycm93V2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybiB8PSAxIDw8IChudW1Db3VudGVycyAtIDEgLSBpKTtcbiAgICAgICAgICAgICAgICAgICAgbnVtV2lkZUJhcnMrKztcbiAgICAgICAgICAgICAgICAgICAgd2lkZUJhcldpZHRoICs9IGNvdW50ZXJzW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG51bVdpZGVCYXJzID09PSAzKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1Db3VudGVycyAmJiBudW1XaWRlQmFycyA+IDA7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnRlcnNbaV0gPiBtYXhOYXJyb3dXaWR0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbnVtV2lkZUJhcnMtLTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoY291bnRlcnNbaV0gKiAyKSA+PSB3aWRlQmFyV2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhdHRlcm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZmluZFN0YXJ0KCk6IEJhcmNvZGVJbmZvIHtcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gdGhpcy5fbmV4dFNldCh0aGlzLl9yb3cpO1xuICAgICAgICBsZXQgcGF0dGVyblN0YXJ0ID0gb2Zmc2V0O1xuICAgICAgICBjb25zdCBjb3VudGVyID0gbmV3IFVpbnQxNkFycmF5KDkpO1xuICAgICAgICBsZXQgY291bnRlclBvcyA9IDA7XG4gICAgICAgIGxldCBpc1doaXRlOiAwIHwgMSA9IDA7XG4gICAgICAgIGxldCB3aGl0ZVNwYWNlTXVzdFN0YXJ0OiBudW1iZXI7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IG9mZnNldDsgaSA8IHRoaXMuX3Jvdy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3Jvd1tpXSBeIGlzV2hpdGUpIHtcbiAgICAgICAgICAgICAgICBjb3VudGVyW2NvdW50ZXJQb3NdKys7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChjb3VudGVyUG9zID09PSBjb3VudGVyLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZmluZCBzdGFydCBwYXR0ZXJuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl90b1BhdHRlcm4oY291bnRlcikgPT09IEFTVEVSSVNLKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZVNwYWNlTXVzdFN0YXJ0ID0gTWF0aC5tYXgoMCwgcGF0dGVyblN0YXJ0IC0gKChpIC0gcGF0dGVyblN0YXJ0KSAvIDQpKSB8IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fbWF0Y2hSYW5nZSh3aGl0ZVNwYWNlTXVzdFN0YXJ0LCBwYXR0ZXJuU3RhcnQsIDApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IHBhdHRlcm5TdGFydCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kOiBpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm5TdGFydCArPSBjb3VudGVyWzBdICsgY291bnRlclsxXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA3OyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ZXJbal0gPSBjb3VudGVyW2ogKyAyXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb3VudGVyWzddID0gMDtcbiAgICAgICAgICAgICAgICAgICAgY291bnRlcls4XSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXJQb3MtLTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb3VudGVyUG9zKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvdW50ZXJbY291bnRlclBvc10gPSAxO1xuICAgICAgICAgICAgICAgIGlzV2hpdGUgPSBpc1doaXRlID8gMCA6IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBCYXJjb2RlIH0gZnJvbSAnLi9iYXJjb2RlLXJlYWRlcic7XG5pbXBvcnQgeyBDb2RlMzlSZWFkZXIgfSBmcm9tICcuL2NvZGUtMzktcmVhZGVyJztcblxuZXhwb3J0IGNsYXNzIENvZGUzOVZJTlJlYWRlciBleHRlbmRzIENvZGUzOVJlYWRlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5fZm9ybWF0ID0gJ2NvZGVfMzlfdmluJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAYm9ycm93c1xuICAgICAqIGh0dHBzOi8vZ2l0aHViLmNvbS96eGluZy96eGluZy9ibG9iL21hc3Rlci9jb3JlL3NyYy9tYWluL2phdmEvY29tL2dvb2dsZS96eGluZy9jbGllbnQvcmVzdWx0L1ZJTlJlc3VsdFBhcnNlci5qYXZhXG4gICAgICovXG4gICAgZGVjb2RlKCk6IEJhcmNvZGUge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5kZWNvZGUoKTtcbiAgICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNvZGUgPSByZXN1bHQuY29kZTtcblxuICAgICAgICBpZiAoIWNvZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29kZSA9IGNvZGUucmVwbGFjZSgvW0lPUV0vZywgJycpO1xuXG4gICAgICAgIGlmICghL1tBLVowLTldezE3fS8udGVzdChjb2RlKSkge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRmFpbGVkIEFaMDkgcGF0dGVybiBjb2RlOicsIGNvZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuX2NoZWNrQ2hlY2tzdW0oY29kZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzdWx0LmNvZGUgPSBjb2RlO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHByaXZhdGUgX2NoZWNrQ2hlY2tzdW0oY29kZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIC8vIFRPRE9cbiAgICAgICAgcmV0dXJuICEhY29kZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBCYXJjb2RlLCBCYXJjb2RlSW5mbywgQmFyY29kZVJlYWRlciB9IGZyb20gJy4vYmFyY29kZS1yZWFkZXInO1xuXG5jb25zdCBBTFBIQUJFVEhfU1RSSU5HID0gJzAxMjM0NTY3ODlBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWi0uICQvKyVhYmNkKic7XG5jb25zdCBBTFBIQUJFVCA9IG5ldyBVaW50MTZBcnJheShbLi4uQUxQSEFCRVRIX1NUUklOR10ubWFwKGNoYXIgPT4gY2hhci5jaGFyQ29kZUF0KDApKSk7XG5jb25zdCBDSEFSQUNURVJfRU5DT0RJTkdTID0gbmV3IFVpbnQxNkFycmF5KFtcbiAgICAweDExNCwgMHgxNDgsIDB4MTQ0LCAweDE0MiwgMHgxMjgsIDB4MTI0LCAweDEyMiwgMHgxNTAsIDB4MTEyLCAweDEwQSwgMHgxQTgsIDB4MUE0LCAweDFBMiwgMHgxOTQsIDB4MTkyLCAweDE4QSxcbiAgICAweDE2OCwgMHgxNjQsIDB4MTYyLCAweDEzNCwgMHgxMUEsIDB4MTU4LCAweDE0QywgMHgxNDYsIDB4MTJDLCAweDExNiwgMHgxQjQsIDB4MUIyLCAweDFBQywgMHgxQTYsIDB4MTk2LCAweDE5QSxcbiAgICAweDE2QywgMHgxNjYsIDB4MTM2LCAweDEzQSwgMHgxMkUsIDB4MUQ0LCAweDFEMiwgMHgxQ0EsIDB4MTZFLCAweDE3NiwgMHgxQUUsIDB4MTI2LCAweDFEQSwgMHgxRDYsIDB4MTMyLCAweDE1RVxuXSk7XG5jb25zdCBBU1RFUklTSyA9IDB4MTVFO1xuXG5leHBvcnQgY2xhc3MgQ29kZTkzUmVhZGVyIGV4dGVuZHMgQmFyY29kZVJlYWRlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5fZm9ybWF0ID0gJ2NvZGVfOTMnO1xuICAgIH1cblxuICAgIGRlY29kZSgpOiBCYXJjb2RlIHtcbiAgICAgICAgY29uc3Qgc3RhcnQgPSB0aGlzLl9maW5kU3RhcnQoKTtcblxuICAgICAgICBpZiAoIXN0YXJ0KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZXN1bHQgPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xuICAgICAgICBsZXQgY291bnRlcnMgPSBuZXcgVWludDE2QXJyYXkoNik7XG4gICAgICAgIGxldCBkZWNvZGVkQ2hhcjogc3RyaW5nO1xuICAgICAgICBsZXQgbGFzdFN0YXJ0OiBudW1iZXI7XG4gICAgICAgIGxldCBuZXh0U3RhcnQgPSB0aGlzLl9uZXh0U2V0KHRoaXMuX3Jvdywgc3RhcnQuZW5kKTtcblxuICAgICAgICBkbyB7XG4gICAgICAgICAgICB0aGlzLl90b0NvdW50ZXJzKG5leHRTdGFydCwgY291bnRlcnMpO1xuICAgICAgICAgICAgY29uc3QgcGF0dGVybiA9IHRoaXMuX3RvUGF0dGVybihjb3VudGVycyk7XG4gICAgICAgICAgICBpZiAocGF0dGVybiA8IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlY29kZWRDaGFyID0gdGhpcy5fcGF0dGVyblRvQ2hhcihwYXR0ZXJuKTtcbiAgICAgICAgICAgIGlmIChkZWNvZGVkQ2hhciA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goZGVjb2RlZENoYXIpO1xuICAgICAgICAgICAgbGFzdFN0YXJ0ID0gbmV4dFN0YXJ0O1xuICAgICAgICAgICAgbmV4dFN0YXJ0ICs9IGNvdW50ZXJzLnJlZHVjZSgoc3VtLCBpdGVtKSA9PiBzdW0gKyBpdGVtLCAwKTtcbiAgICAgICAgICAgIG5leHRTdGFydCA9IHRoaXMuX25leHRTZXQodGhpcy5fcm93LCBuZXh0U3RhcnQpO1xuICAgICAgICB9IHdoaWxlIChkZWNvZGVkQ2hhciAhPT0gJyonKTtcbiAgICAgICAgcmVzdWx0LnBvcCgpO1xuXG4gICAgICAgIGlmICghcmVzdWx0Lmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuX3ZlcmlmeUVuZChsYXN0U3RhcnQsIG5leHRTdGFydCkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLl92ZXJpZnlDaGVja3N1bXMocmVzdWx0KSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXN1bHQgPSByZXN1bHQuc2xpY2UoMCwgcmVzdWx0Lmxlbmd0aCAtIDIpO1xuICAgICAgICBpZiAoKHJlc3VsdCA9IHRoaXMuX2RlY29kZUV4dGVuZGVkKHJlc3VsdCkpID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb2RlOiByZXN1bHQuam9pbignJyksXG4gICAgICAgICAgICBzdGFydDogc3RhcnQuc3RhcnQsXG4gICAgICAgICAgICBlbmQ6IG5leHRTdGFydCxcbiAgICAgICAgICAgIHN0YXJ0SW5mbzogc3RhcnQsXG4gICAgICAgICAgICBkZWNvZGVkQ29kZXM6IHJlc3VsdFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfcGF0dGVyblRvQ2hhcihwYXR0ZXJuOiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IENIQVJBQ1RFUl9FTkNPRElOR1MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChDSEFSQUNURVJfRU5DT0RJTkdTW2ldID09PSBwYXR0ZXJuKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoQUxQSEFCRVRbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3ZlcmlmeUVuZChsYXN0U3RhcnQ6IG51bWJlciwgbmV4dFN0YXJ0OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKGxhc3RTdGFydCA9PT0gbmV4dFN0YXJ0IHx8ICF0aGlzLl9yb3dbbmV4dFN0YXJ0XSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3RvUGF0dGVybihjb3VudGVyczogVWludDE2QXJyYXkpOiBudW1iZXIge1xuICAgICAgICBjb25zdCBudW1Db3VudGVycyA9IGNvdW50ZXJzLmxlbmd0aDtcbiAgICAgICAgbGV0IHBhdHRlcm4gPSAwO1xuICAgICAgICBsZXQgc3VtID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1Db3VudGVyczsgaSsrKSB7XG4gICAgICAgICAgICBzdW0gKz0gY291bnRlcnNbaV07XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bUNvdW50ZXJzOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBub3JtYWxpemVkID0gTWF0aC5yb3VuZChjb3VudGVyc1tpXSAqIDkgLyBzdW0pO1xuICAgICAgICAgICAgaWYgKG5vcm1hbGl6ZWQgPCAxIHx8IG5vcm1hbGl6ZWQgPiA0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKChpICYgMSkgPT09IDApIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG5vcm1hbGl6ZWQ7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuID0gKHBhdHRlcm4gPDwgMSkgfCAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGF0dGVybiA8PD0gbm9ybWFsaXplZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYXR0ZXJuO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2ZpbmRTdGFydCgpOiBCYXJjb2RlSW5mbyB7XG4gICAgICAgIGNvbnN0IGNvdW50ZXIgPSBuZXcgVWludDE2QXJyYXkoNik7XG4gICAgICAgIGNvbnN0IG9mZnNldCA9IHRoaXMuX25leHRTZXQodGhpcy5fcm93KTtcbiAgICAgICAgbGV0IHBhdHRlcm5TdGFydCA9IG9mZnNldDtcbiAgICAgICAgbGV0IGNvdW50ZXJQb3MgPSAwO1xuICAgICAgICBsZXQgaXNXaGl0ZTogMCB8IDEgPSAwO1xuICAgICAgICBsZXQgd2hpdGVTcGFjZU11c3RTdGFydDogbnVtYmVyO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSBvZmZzZXQ7IGkgPCB0aGlzLl9yb3cubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9yb3dbaV0gXiBpc1doaXRlKSB7XG4gICAgICAgICAgICAgICAgY291bnRlcltjb3VudGVyUG9zXSsrO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoY291bnRlclBvcyA9PT0gY291bnRlci5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGZpbmQgc3RhcnQgcGF0dGVyblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fdG9QYXR0ZXJuKGNvdW50ZXIpID09PSBBU1RFUklTSykge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGVTcGFjZU11c3RTdGFydCA9IE1hdGgubWF4KDAsIHBhdHRlcm5TdGFydCAtICgoaSAtIHBhdHRlcm5TdGFydCkgLyA0KSkgfCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX21hdGNoUmFuZ2Uod2hpdGVTcGFjZU11c3RTdGFydCwgcGF0dGVyblN0YXJ0LCAwKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBwYXR0ZXJuU3RhcnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuU3RhcnQgKz0gY291bnRlclswXSArIGNvdW50ZXJbMV07XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgNDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVyW2pdID0gY291bnRlcltqICsgMl07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY291bnRlcls0XSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXJbNV0gPSAwO1xuICAgICAgICAgICAgICAgICAgICBjb3VudGVyUG9zLS07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnRlclBvcysrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb3VudGVyW2NvdW50ZXJQb3NdID0gMTtcbiAgICAgICAgICAgICAgICBpc1doaXRlID0gaXNXaGl0ZSA/IDAgOiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZGVjb2RlRXh0ZW5kZWQoY2hhckFycmF5OiBBcnJheTxzdHJpbmc+KTogQXJyYXk8c3RyaW5nPiB7XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IGNoYXJBcnJheS5sZW5ndGg7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBBcnJheTxzdHJpbmc+KCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNoYXIgPSBjaGFyQXJyYXlbaV07XG4gICAgICAgICAgICBpZiAoY2hhciA+PSAnYScgJiYgY2hhciA8PSAnZCcpIHtcbiAgICAgICAgICAgICAgICBpZiAoaSA+IChsZW5ndGggLSAyKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgbmV4dENoYXIgPSBjaGFyQXJyYXlbKytpXTtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXh0Q2hhckNvZGUgPSBuZXh0Q2hhci5jaGFyQ29kZUF0KDApO1xuICAgICAgICAgICAgICAgIGxldCBkZWNvZGVkQ2hhcjogc3RyaW5nO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoY2hhcikge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdhJzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRDaGFyID49ICdBJyAmJiBuZXh0Q2hhciA8PSAnWicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNvZGVkQ2hhciA9IFN0cmluZy5mcm9tQ2hhckNvZGUobmV4dENoYXJDb2RlIC0gNjQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2InOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV4dENoYXIgPj0gJ0EnICYmIG5leHRDaGFyIDw9ICdFJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY29kZWRDaGFyID0gU3RyaW5nLmZyb21DaGFyQ29kZShuZXh0Q2hhckNvZGUgLSAzOCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG5leHRDaGFyID49ICdGJyAmJiBuZXh0Q2hhciA8PSAnSicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNvZGVkQ2hhciA9IFN0cmluZy5mcm9tQ2hhckNvZGUobmV4dENoYXJDb2RlIC0gMTEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChuZXh0Q2hhciA+PSAnSycgJiYgbmV4dENoYXIgPD0gJ08nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjb2RlZENoYXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKG5leHRDaGFyQ29kZSArIDE2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobmV4dENoYXIgPj0gJ1AnICYmIG5leHRDaGFyIDw9ICdTJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY29kZWRDaGFyID0gU3RyaW5nLmZyb21DaGFyQ29kZShuZXh0Q2hhckNvZGUgKyA0Myk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG5leHRDaGFyID49ICdUJyAmJiBuZXh0Q2hhciA8PSAnWicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNvZGVkQ2hhciA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMTI3KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXNlICdjJzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRDaGFyID49ICdBJyAmJiBuZXh0Q2hhciA8PSAnTycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNvZGVkQ2hhciA9IFN0cmluZy5mcm9tQ2hhckNvZGUobmV4dENoYXJDb2RlIC0gMzIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChuZXh0Q2hhciA9PT0gJ1onKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjb2RlZENoYXIgPSAnOic7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZCc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXh0Q2hhciA+PSAnQScgJiYgbmV4dENoYXIgPD0gJ1onKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjb2RlZENoYXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKG5leHRDaGFyQ29kZSArIDMyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChkZWNvZGVkQ2hhcik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGNoYXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfdmVyaWZ5Q2hlY2tzdW1zKGNoYXJBcnJheTogQXJyYXk8c3RyaW5nPik6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWF0Y2hDaGVja0NoYXIoY2hhckFycmF5LCBjaGFyQXJyYXkubGVuZ3RoIC0gMiwgMjApXG4gICAgICAgICAgICAmJiB0aGlzLl9tYXRjaENoZWNrQ2hhcihjaGFyQXJyYXksIGNoYXJBcnJheS5sZW5ndGggLSAxLCAxNSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfbWF0Y2hDaGVja0NoYXIoY2hhckFycmF5OiBBcnJheTxzdHJpbmc+LCBpbmRleDogbnVtYmVyLCBtYXhXZWlnaHQ6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBhcnJheVRvQ2hlY2sgPSBjaGFyQXJyYXkuc2xpY2UoMCwgaW5kZXgpO1xuICAgICAgICBjb25zdCBsZW5ndGggPSBhcnJheVRvQ2hlY2subGVuZ3RoO1xuICAgICAgICBjb25zdCB3ZWlnaHRlZFN1bXMgPSBhcnJheVRvQ2hlY2sucmVkdWNlKChzdW0sIGNoYXIsIGkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHdlaWdodCA9ICgoKGkgKiAtMSkgKyAobGVuZ3RoIC0gMSkpICUgbWF4V2VpZ2h0KSArIDE7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IEFMUEhBQkVULmluZGV4T2YoY2hhci5jaGFyQ29kZUF0KDApKTtcbiAgICAgICAgICAgIHJldHVybiBzdW0gKyAod2VpZ2h0ICogdmFsdWUpO1xuICAgICAgICB9LCAwKTtcblxuICAgICAgICBjb25zdCBjaGVja0NoYXIgPSBBTFBIQUJFVFsod2VpZ2h0ZWRTdW1zICUgNDcpXTtcbiAgICAgICAgcmV0dXJuIGNoZWNrQ2hhciA9PT0gY2hhckFycmF5W2luZGV4XS5jaGFyQ29kZUF0KDApO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEJhcmNvZGUsIEJhcmNvZGVJbmZvLCBCYXJjb2RlUmVhZGVyLCBCYXJjb2RlUmVhZGVyQ29uZmlnIH0gZnJvbSAnLi9iYXJjb2RlLXJlYWRlcic7XG5pbXBvcnQgeyBFQU5SZWFkZXIgfSBmcm9tICcuL2Vhbi1yZWFkZXInO1xuXG5leHBvcnQgY2xhc3MgRUFOMlJlYWRlciBleHRlbmRzIEVBTlJlYWRlciB7XG4gICAgY29uc3RydWN0b3IoY29uZmlnPzogQmFyY29kZVJlYWRlckNvbmZpZywgc3VwcGxlbWVudHM/OiBBcnJheTxCYXJjb2RlUmVhZGVyPikge1xuICAgICAgICBzdXBlcihjb25maWcsIHN1cHBsZW1lbnRzKTtcblxuICAgICAgICB0aGlzLl9mb3JtYXQgPSAnZWFuXzInO1xuICAgIH1cblxuICAgIGRlY29kZShyb3c/OiBBcnJheTxudW1iZXI+LCBzdGFydD86IG51bWJlcik6IEJhcmNvZGUge1xuICAgICAgICBjb25zdCBlbmQgPSByb3cubGVuZ3RoO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xuICAgICAgICBjb25zdCBkZWNvZGVkQ29kZXMgPSBuZXcgQXJyYXk8QmFyY29kZUluZm8+KCk7XG4gICAgICAgIGxldCBvZmZzZXQgPSBzdGFydDtcbiAgICAgICAgbGV0IGNvZGVGcmVxdWVuY3kgPSAwO1xuICAgICAgICBsZXQgY29kZTogQmFyY29kZUluZm87XG5cbiAgICAgICAgdGhpcy5fcm93ID0gcm93O1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMiAmJiBvZmZzZXQgPCBlbmQ7IGkrKykge1xuICAgICAgICAgICAgY29kZSA9IHRoaXMuX2RlY29kZUNvZGUob2Zmc2V0KTtcbiAgICAgICAgICAgIGlmICghY29kZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVjb2RlZENvZGVzLnB1c2goY29kZSk7XG4gICAgICAgICAgICByZXN1bHQucHVzaChjb2RlLmNvZGUgJSAxMCk7XG4gICAgICAgICAgICBpZiAoY29kZS5jb2RlID49IHRoaXMuQ09ERV9HX1NUQVJUKSB7XG4gICAgICAgICAgICAgICAgY29kZUZyZXF1ZW5jeSB8PSAxIDw8ICgxIC0gaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaSAhPT0gMSkge1xuICAgICAgICAgICAgICAgIG9mZnNldCA9IHRoaXMuX25leHRTZXQodGhpcy5fcm93LCBjb2RlLmVuZCk7XG4gICAgICAgICAgICAgICAgb2Zmc2V0ID0gdGhpcy5fbmV4dFVuc2V0KHRoaXMuX3Jvdywgb2Zmc2V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXN1bHQubGVuZ3RoICE9PSAyIHx8IChwYXJzZUludChyZXN1bHQuam9pbignJykpICUgNCkgIT09IGNvZGVGcmVxdWVuY3kpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvZGU6IHJlc3VsdC5qb2luKCcnKSxcbiAgICAgICAgICAgIGRlY29kZWRDb2RlcyxcbiAgICAgICAgICAgIGVuZDogY29kZS5lbmRcbiAgICAgICAgfTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBCYXJjb2RlLCBCYXJjb2RlSW5mbywgQmFyY29kZVJlYWRlciwgQmFyY29kZVJlYWRlckNvbmZpZyB9IGZyb20gJy4vYmFyY29kZS1yZWFkZXInO1xuaW1wb3J0IHsgRUFOUmVhZGVyIH0gZnJvbSAnLi9lYW4tcmVhZGVyJztcblxuZXhwb3J0IGNsYXNzIEVBTjVSZWFkZXIgZXh0ZW5kcyBFQU5SZWFkZXIge1xuICAgIGdldCBDSEVDS19ESUdJVF9FTkNPRElOR1MoKTogQXJyYXk8bnVtYmVyPiB7XG4gICAgICAgIHJldHVybiBbMjQsIDIwLCAxOCwgMTcsIDEyLCA2LCAzLCAxMCwgOSwgNV07XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoY29uZmlnPzogQmFyY29kZVJlYWRlckNvbmZpZywgc3VwcGxlbWVudHM/OiBBcnJheTxCYXJjb2RlUmVhZGVyPikge1xuICAgICAgICBzdXBlcihjb25maWcsIHN1cHBsZW1lbnRzKTtcblxuICAgICAgICB0aGlzLl9mb3JtYXQgPSAnZWFuXzUnO1xuICAgIH1cblxuICAgIGRlY29kZShyb3c/OiBBcnJheTxudW1iZXI+LCBzdGFydD86IG51bWJlcik6IEJhcmNvZGUge1xuICAgICAgICBjb25zdCBlbmQgPSByb3cubGVuZ3RoO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xuICAgICAgICBjb25zdCBkZWNvZGVkQ29kZXMgPSBuZXcgQXJyYXk8QmFyY29kZUluZm8+KCk7XG4gICAgICAgIGxldCBjb2RlRnJlcXVlbmN5ID0gMDtcbiAgICAgICAgbGV0IG9mZnNldCA9IHN0YXJ0O1xuICAgICAgICBsZXQgY29kZTogQmFyY29kZUluZm87XG5cbiAgICAgICAgdGhpcy5fcm93ID0gcm93O1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNSAmJiBvZmZzZXQgPCBlbmQ7IGkrKykge1xuICAgICAgICAgICAgY29kZSA9IHRoaXMuX2RlY29kZUNvZGUob2Zmc2V0KTtcbiAgICAgICAgICAgIGlmICghY29kZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVjb2RlZENvZGVzLnB1c2goY29kZSk7XG4gICAgICAgICAgICByZXN1bHQucHVzaChjb2RlLmNvZGUgJSAxMCk7XG4gICAgICAgICAgICBpZiAoY29kZS5jb2RlID49IHRoaXMuQ09ERV9HX1NUQVJUKSB7XG4gICAgICAgICAgICAgICAgY29kZUZyZXF1ZW5jeSB8PSAxIDw8ICg0IC0gaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaSAhPT0gNCkge1xuICAgICAgICAgICAgICAgIG9mZnNldCA9IHRoaXMuX25leHRTZXQodGhpcy5fcm93LCBjb2RlLmVuZCk7XG4gICAgICAgICAgICAgICAgb2Zmc2V0ID0gdGhpcy5fbmV4dFVuc2V0KHRoaXMuX3Jvdywgb2Zmc2V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXN1bHQubGVuZ3RoICE9PSA1KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9leHRlbnNpb25DaGVja3N1bShyZXN1bHQpICE9PSB0aGlzLl9kZXRlcm1pbmVDaGVja0RpZ2l0KGNvZGVGcmVxdWVuY3kpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb2RlOiByZXN1bHQuam9pbignJyksXG4gICAgICAgICAgICBkZWNvZGVkQ29kZXMsXG4gICAgICAgICAgICBlbmQ6IGNvZGUuZW5kXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZGV0ZXJtaW5lQ2hlY2tEaWdpdChjb2RlRnJlcXVlbmN5OiBudW1iZXIpOiBudW1iZXIgfCBudWxsIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoY29kZUZyZXF1ZW5jeSA9PT0gdGhpcy5DSEVDS19ESUdJVF9FTkNPRElOR1NbaV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9leHRlbnNpb25DaGVja3N1bShyZXN1bHQ6IEFycmF5PG51bWJlcj4pOiBudW1iZXIge1xuICAgICAgICBsZXQgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aDtcbiAgICAgICAgbGV0IHN1bSA9IDA7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IGxlbmd0aCAtIDI7IGkgPj0gMDsgaSAtPSAyKSB7XG4gICAgICAgICAgICBzdW0gKz0gcmVzdWx0W2ldO1xuICAgICAgICB9XG4gICAgICAgIHN1bSAqPSAzO1xuICAgICAgICBmb3IgKGxldCBpID0gbGVuZ3RoIC0gMTsgaSA+PSAwOyBpIC09IDIpIHtcbiAgICAgICAgICAgIHN1bSArPSByZXN1bHRbaV07XG4gICAgICAgIH1cbiAgICAgICAgc3VtICo9IDM7XG5cbiAgICAgICAgcmV0dXJuIHN1bSAlIDEwO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEJhcmNvZGVJbmZvLCBCYXJjb2RlUmVhZGVyLCBCYXJjb2RlUmVhZGVyQ29uZmlnIH0gZnJvbSAnLi9iYXJjb2RlLXJlYWRlcic7XG5pbXBvcnQgeyBFQU5SZWFkZXIgfSBmcm9tICcuL2Vhbi1yZWFkZXInO1xuXG5leHBvcnQgY2xhc3MgRUFOOFJlYWRlciBleHRlbmRzIEVBTlJlYWRlciB7XG4gICAgY29uc3RydWN0b3IoY29uZmlnPzogQmFyY29kZVJlYWRlckNvbmZpZywgc3VwcGxlbWVudHM/OiBBcnJheTxCYXJjb2RlUmVhZGVyPikge1xuICAgICAgICBzdXBlcihjb25maWcsIHN1cHBsZW1lbnRzKTtcblxuICAgICAgICB0aGlzLl9mb3JtYXQgPSAnZWFuXzgnO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZGVjb2RlUGF5bG9hZChjb2RlOiBCYXJjb2RlSW5mbywgcmVzdWx0OiBBcnJheTxudW1iZXI+LCBkZWNvZGVkQ29kZXM6IEFycmF5PEJhcmNvZGVJbmZvPik6IEJhcmNvZGVJbmZvIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgICAgIGNvZGUgPSB0aGlzLl9kZWNvZGVDb2RlKGNvZGUuZW5kLCB0aGlzLkNPREVfR19TVEFSVCk7XG4gICAgICAgICAgICBpZiAoIWNvZGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGNvZGUuY29kZSk7XG4gICAgICAgICAgICBkZWNvZGVkQ29kZXMucHVzaChjb2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvZGUgPSB0aGlzLl9maW5kUGF0dGVybih0aGlzLk1JRERMRV9QQVRURVJOLCBjb2RlLmVuZCwgMSwgZmFsc2UpO1xuXG4gICAgICAgIGlmIChjb2RlID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlY29kZWRDb2Rlcy5wdXNoKGNvZGUpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgICAgICBjb2RlID0gdGhpcy5fZGVjb2RlQ29kZShjb2RlLmVuZCwgdGhpcy5DT0RFX0dfU1RBUlQpO1xuXG4gICAgICAgICAgICBpZiAoIWNvZGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGVjb2RlZENvZGVzLnB1c2goY29kZSk7XG4gICAgICAgICAgICByZXN1bHQucHVzaChjb2RlLmNvZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvZGU7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgbWVyZ2UgfSBmcm9tICcuLi9jb21tb24vbWVyZ2UnO1xuaW1wb3J0IHsgQmFyY29kZSwgQmFyY29kZUluZm8sIEJhcmNvZGVSZWFkZXIsIEJhcmNvZGVSZWFkZXJDb25maWcgfSBmcm9tICcuL2JhcmNvZGUtcmVhZGVyJztcblxuY29uc3QgRVhURU5TSU9OX1NUQVJUX1BBVFRFUk4gPSBbMSwgMSwgMl07XG5jb25zdCBDT0RFX1BBVFRFUk4gPSBbXG4gICAgWzMsIDIsIDEsIDFdLFxuICAgIFsyLCAyLCAyLCAxXSxcbiAgICBbMiwgMSwgMiwgMl0sXG4gICAgWzEsIDQsIDEsIDFdLFxuICAgIFsxLCAxLCAzLCAyXSxcbiAgICBbMSwgMiwgMywgMV0sXG4gICAgWzEsIDEsIDEsIDRdLFxuICAgIFsxLCAzLCAxLCAyXSxcbiAgICBbMSwgMiwgMSwgM10sXG4gICAgWzMsIDEsIDEsIDJdLFxuICAgIFsxLCAxLCAyLCAzXSxcbiAgICBbMSwgMiwgMiwgMl0sXG4gICAgWzIsIDIsIDEsIDJdLFxuICAgIFsxLCAxLCA0LCAxXSxcbiAgICBbMiwgMywgMSwgMV0sXG4gICAgWzEsIDMsIDIsIDFdLFxuICAgIFs0LCAxLCAxLCAxXSxcbiAgICBbMiwgMSwgMywgMV0sXG4gICAgWzMsIDEsIDIsIDFdLFxuICAgIFsyLCAxLCAxLCAzXVxuXTtcbmNvbnN0IENPREVfRlJFUVVFTkNZID0gWzAsIDExLCAxMywgMTQsIDE5LCAyNSwgMjgsIDIxLCAyMiwgMjZdO1xuXG5leHBvcnQgY2xhc3MgRUFOUmVhZGVyIGV4dGVuZHMgQmFyY29kZVJlYWRlciB7XG4gICAgZ2V0IENPREVfTF9TVEFSVCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICBnZXQgQ09ERV9HX1NUQVJUKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiAxMDtcbiAgICB9XG5cbiAgICBnZXQgU1RBUlRfUEFUVEVSTigpOiBBcnJheTxudW1iZXI+IHtcbiAgICAgICAgcmV0dXJuIFsxLCAxLCAxXTtcbiAgICB9XG5cbiAgICBnZXQgU1RPUF9QQVRURVJOKCk6IEFycmF5PG51bWJlcj4ge1xuICAgICAgICByZXR1cm4gWzEsIDEsIDFdO1xuICAgIH1cblxuICAgIGdldCBNSURETEVfUEFUVEVSTigpOiBBcnJheTxudW1iZXI+IHtcbiAgICAgICAgcmV0dXJuIFsxLCAxLCAxLCAxLCAxXTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihjb25maWc/OiBCYXJjb2RlUmVhZGVyQ29uZmlnLCBzdXBwbGVtZW50cz86IEFycmF5PEJhcmNvZGVSZWFkZXI+KSB7XG4gICAgICAgIHN1cGVyKG1lcmdlKHtcbiAgICAgICAgICAgIHN1cHBsZW1lbnRzOiBbXSAvLyBBbGxvd2VkIGV4dGVuc2lvbnMgdG8gYmUgZGVjb2RlZCAoMiBhbmQvb3IgNSlcbiAgICAgICAgfSwgY29uZmlnKSwgc3VwcGxlbWVudHMpO1xuXG4gICAgICAgIHRoaXMuX2Zvcm1hdCA9ICdlYW5fMTMnO1xuICAgICAgICB0aGlzLl9zaW5nbGVDb2RlRXJyb3IgPSAwLjcwO1xuICAgICAgICB0aGlzLl9hdmVyYWdlQ29kZUVycm9yID0gMC40ODtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2RlY29kZUNvZGUoc3RhcnQ6IG51bWJlciwgY29kZXJhbmdlPzogbnVtYmVyKTogQmFyY29kZUluZm8ge1xuICAgICAgICBjb25zdCBjb3VudGVyID0gWzAsIDAsIDAsIDBdO1xuICAgICAgICBjb25zdCBvZmZzZXQgPSBzdGFydDtcbiAgICAgICAgY29uc3QgYmVzdE1hdGNoOiBCYXJjb2RlSW5mbyA9IHtcbiAgICAgICAgICAgIGVycm9yOiBOdW1iZXIuTUFYX1ZBTFVFLFxuICAgICAgICAgICAgY29kZTogLTEsXG4gICAgICAgICAgICBzdGFydDogc3RhcnQsXG4gICAgICAgICAgICBlbmQ6IHN0YXJ0XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGVwc2lsb24gPSB0aGlzLkFWRVJBR0VfQ09ERV9FUlJPUjtcbiAgICAgICAgbGV0IGlzV2hpdGU6IDAgfCAxID0gdGhpcy5fcm93W29mZnNldF0gPyAwIDogMTtcbiAgICAgICAgbGV0IGNvdW50ZXJQb3MgPSAwO1xuXG4gICAgICAgIGlmICghY29kZXJhbmdlKSB7XG4gICAgICAgICAgICBjb2RlcmFuZ2UgPSBDT0RFX1BBVFRFUk4ubGVuZ3RoO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IG9mZnNldDsgaSA8IHRoaXMuX3Jvdy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3Jvd1tpXSBeIGlzV2hpdGUpIHtcbiAgICAgICAgICAgICAgICBjb3VudGVyW2NvdW50ZXJQb3NdKys7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChjb3VudGVyUG9zID09PSBjb3VudGVyLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgY29kZSA9IDA7IGNvZGUgPCBjb2RlcmFuZ2U7IGNvZGUrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXJyb3IgPSB0aGlzLl9tYXRjaFBhdHRlcm4oY291bnRlciwgQ09ERV9QQVRURVJOW2NvZGVdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnJvciA8IGJlc3RNYXRjaC5lcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlc3RNYXRjaC5jb2RlID0gY29kZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZXN0TWF0Y2guZXJyb3IgPSBlcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBiZXN0TWF0Y2guZW5kID0gaTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJlc3RNYXRjaC5lcnJvciA+IGVwc2lsb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBiZXN0TWF0Y2g7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnRlclBvcysrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb3VudGVyW2NvdW50ZXJQb3NdID0gMTtcbiAgICAgICAgICAgICAgICBpc1doaXRlID0gaXNXaGl0ZSA/IDAgOiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9maW5kU3RhcnQoKTogQmFyY29kZUluZm8ge1xuICAgICAgICBsZXQgb2Zmc2V0ID0gdGhpcy5fbmV4dFNldCh0aGlzLl9yb3cpO1xuICAgICAgICBsZXQgc3RhcnRJbmZvOiBCYXJjb2RlSW5mbztcblxuICAgICAgICB3aGlsZSAoIXN0YXJ0SW5mbykge1xuICAgICAgICAgICAgc3RhcnRJbmZvID0gdGhpcy5fZmluZFBhdHRlcm4odGhpcy5TVEFSVF9QQVRURVJOLCBvZmZzZXQsIDAsIHRydWUpO1xuXG4gICAgICAgICAgICBpZiAoIXN0YXJ0SW5mbykge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBsZWFkaW5nV2hpdGVzcGFjZVN0YXJ0ID0gc3RhcnRJbmZvLnN0YXJ0IC0gKHN0YXJ0SW5mby5lbmQgLSBzdGFydEluZm8uc3RhcnQpO1xuXG4gICAgICAgICAgICBpZiAobGVhZGluZ1doaXRlc3BhY2VTdGFydCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX21hdGNoUmFuZ2UobGVhZGluZ1doaXRlc3BhY2VTdGFydCwgc3RhcnRJbmZvLnN0YXJ0LCAwKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RhcnRJbmZvO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgb2Zmc2V0ID0gc3RhcnRJbmZvLmVuZDtcbiAgICAgICAgICAgIHN0YXJ0SW5mbyA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX3ZlcmlmeVRyYWlsaW5nV2hpdGVzcGFjZShlbmRJbmZvOiBCYXJjb2RlSW5mbyk6IEJhcmNvZGVJbmZvIHtcbiAgICAgICAgY29uc3QgdHJhaWxpbmdXaGl0ZXNwYWNlRW5kID0gZW5kSW5mby5lbmQgKyAoZW5kSW5mby5lbmQgLSBlbmRJbmZvLnN0YXJ0KTtcblxuICAgICAgICBpZiAodHJhaWxpbmdXaGl0ZXNwYWNlRW5kIDwgdGhpcy5fcm93Lmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX21hdGNoUmFuZ2UoZW5kSW5mby5lbmQsIHRyYWlsaW5nV2hpdGVzcGFjZUVuZCwgMCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZW5kSW5mbztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZmluZEVuZChvZmZzZXQ6IG51bWJlciwgaXNXaGl0ZTogMCB8IDEpOiBCYXJjb2RlSW5mbyB7XG4gICAgICAgIGNvbnN0IGVuZEluZm8gPSB0aGlzLl9maW5kUGF0dGVybih0aGlzLlNUT1BfUEFUVEVSTiwgb2Zmc2V0LCBpc1doaXRlLCBmYWxzZSk7XG5cbiAgICAgICAgcmV0dXJuIGVuZEluZm8gIT09IG51bGwgPyB0aGlzLl92ZXJpZnlUcmFpbGluZ1doaXRlc3BhY2UoZW5kSW5mbykgOiBudWxsO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2NhbGN1bGF0ZUZpcnN0RGlnaXQoY29kZUZyZXF1ZW5jeTogbnVtYmVyKTogbnVtYmVyIHwgbnVsbCB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQ09ERV9GUkVRVUVOQ1kubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChjb2RlRnJlcXVlbmN5ID09PSBDT0RFX0ZSRVFVRU5DWVtpXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZGVjb2RlUGF5bG9hZChjb2RlOiBCYXJjb2RlSW5mbywgcmVzdWx0OiBBcnJheTxudW1iZXI+LCBkZWNvZGVkQ29kZXM6IEFycmF5PEJhcmNvZGVJbmZvPik6IEJhcmNvZGVJbmZvIHtcbiAgICAgICAgbGV0IGNvZGVGcmVxdWVuY3kgPSAweDA7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICAgICAgICAgIGNvZGUgPSB0aGlzLl9kZWNvZGVDb2RlKGNvZGUuZW5kKTtcbiAgICAgICAgICAgIGlmICghY29kZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvZGUuY29kZSA+PSB0aGlzLkNPREVfR19TVEFSVCkge1xuICAgICAgICAgICAgICAgIGNvZGUuY29kZSAtPSB0aGlzLkNPREVfR19TVEFSVDtcbiAgICAgICAgICAgICAgICBjb2RlRnJlcXVlbmN5IHw9IDEgPDwgKDUgLSBpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29kZUZyZXF1ZW5jeSB8PSAwIDw8ICg1IC0gaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaChjb2RlLmNvZGUpO1xuICAgICAgICAgICAgZGVjb2RlZENvZGVzLnB1c2goY29kZSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBmaXJzdERpZ2l0ID0gdGhpcy5fY2FsY3VsYXRlRmlyc3REaWdpdChjb2RlRnJlcXVlbmN5KTtcblxuICAgICAgICBpZiAoZmlyc3REaWdpdCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXN1bHQudW5zaGlmdChmaXJzdERpZ2l0KTtcblxuICAgICAgICBjb2RlID0gdGhpcy5fZmluZFBhdHRlcm4odGhpcy5NSURETEVfUEFUVEVSTiwgY29kZS5lbmQsIDEsIGZhbHNlKTtcblxuICAgICAgICBpZiAoY29kZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBkZWNvZGVkQ29kZXMucHVzaChjb2RlKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgICAgICAgICAgY29kZSA9IHRoaXMuX2RlY29kZUNvZGUoY29kZS5lbmQsIHRoaXMuQ09ERV9HX1NUQVJUKTtcblxuICAgICAgICAgICAgaWYgKCFjb2RlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRlY29kZWRDb2Rlcy5wdXNoKGNvZGUpO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goY29kZS5jb2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb2RlO1xuICAgIH1cblxuICAgIGRlY29kZSgpOiBCYXJjb2RlIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEFycmF5PG51bWJlcj4oKTtcbiAgICAgICAgY29uc3QgZGVjb2RlZENvZGVzID0gbmV3IEFycmF5PEJhcmNvZGVJbmZvPigpO1xuICAgICAgICBsZXQgcmVzdWx0SW5mbzogQmFyY29kZSA9IHt9O1xuICAgICAgICBsZXQgc3RhcnRJbmZvID0gdGhpcy5fZmluZFN0YXJ0KCk7XG5cbiAgICAgICAgaWYgKCFzdGFydEluZm8pIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNvZGU6IEJhcmNvZGVJbmZvID0ge1xuICAgICAgICAgICAgY29kZTogc3RhcnRJbmZvLmNvZGUsXG4gICAgICAgICAgICBzdGFydDogc3RhcnRJbmZvLnN0YXJ0LFxuICAgICAgICAgICAgZW5kOiBzdGFydEluZm8uZW5kXG4gICAgICAgIH07XG4gICAgICAgIGRlY29kZWRDb2Rlcy5wdXNoKGNvZGUpO1xuXG4gICAgICAgIGNvZGUgPSB0aGlzLl9kZWNvZGVQYXlsb2FkKGNvZGUsIHJlc3VsdCwgZGVjb2RlZENvZGVzKTtcblxuICAgICAgICBpZiAoIWNvZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29kZSA9IHRoaXMuX2ZpbmRFbmQoY29kZS5lbmQsIDApO1xuXG4gICAgICAgIGlmICghY29kZSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBkZWNvZGVkQ29kZXMucHVzaChjb2RlKTtcblxuICAgICAgICAvLyBDaGVja3N1bVxuICAgICAgICBpZiAoIXRoaXMuX2NoZWNrc3VtKHJlc3VsdCkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc3VwcGxlbWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc3Qgc3VwcGxlbWVudCA9IHRoaXMuX2RlY29kZUV4dGVuc2lvbnMoY29kZS5lbmQpO1xuICAgICAgICAgICAgaWYgKCFzdXBwbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGxhc3RDb2RlID0gc3VwcGxlbWVudC5kZWNvZGVkQ29kZXNbc3VwcGxlbWVudC5kZWNvZGVkQ29kZXMubGVuZ3RoIC0gMV0gYXMgQmFyY29kZUluZm87XG4gICAgICAgICAgICBjb25zdCBlbmRJbmZvID0ge1xuICAgICAgICAgICAgICAgIHN0YXJ0OiBsYXN0Q29kZS5zdGFydCArICgoKGxhc3RDb2RlLmVuZCAtIGxhc3RDb2RlLnN0YXJ0KSAvIDIpIHwgMCksXG4gICAgICAgICAgICAgICAgZW5kOiBsYXN0Q29kZS5lbmRcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5fdmVyaWZ5VHJhaWxpbmdXaGl0ZXNwYWNlKGVuZEluZm8pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlc3VsdEluZm8gPSB7XG4gICAgICAgICAgICAgICAgc3VwcGxlbWVudCxcbiAgICAgICAgICAgICAgICBjb2RlOiByZXN1bHQuam9pbignJykgKyBzdXBwbGVtZW50LmNvZGVcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29kZTogcmVzdWx0LmpvaW4oJycpLFxuICAgICAgICAgICAgc3RhcnQ6IHN0YXJ0SW5mby5zdGFydCxcbiAgICAgICAgICAgIGVuZDogY29kZS5lbmQsXG4gICAgICAgICAgICBzdGFydEluZm8sXG4gICAgICAgICAgICBkZWNvZGVkQ29kZXMsXG4gICAgICAgICAgICAuLi5yZXN1bHRJbmZvXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZGVjb2RlRXh0ZW5zaW9ucyhvZmZzZXQ6IG51bWJlcik6IEJhcmNvZGUge1xuICAgICAgICBjb25zdCBzdGFydCA9IHRoaXMuX25leHRTZXQodGhpcy5fcm93LCBvZmZzZXQpO1xuICAgICAgICBjb25zdCBzdGFydEluZm8gPSB0aGlzLl9maW5kUGF0dGVybihFWFRFTlNJT05fU1RBUlRfUEFUVEVSTiwgc3RhcnQsIDAsIGZhbHNlKTtcblxuICAgICAgICBpZiAoc3RhcnRJbmZvID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdXBwbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHRoaXMuc3VwcGxlbWVudHNbaV0uZGVjb2RlKHRoaXMuX3Jvdywgc3RhcnRJbmZvLmVuZCk7XG4gICAgICAgICAgICBpZiAocmVzdWx0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgY29kZTogcmVzdWx0LmNvZGUsXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0LFxuICAgICAgICAgICAgICAgICAgICBzdGFydEluZm8sXG4gICAgICAgICAgICAgICAgICAgIGVuZDogcmVzdWx0LmVuZCxcbiAgICAgICAgICAgICAgICAgICAgZGVjb2RlZENvZGVzOiByZXN1bHQuZGVjb2RlZENvZGVzXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfY2hlY2tzdW0ocmVzdWx0OiBBcnJheTxudW1iZXI+KTogYm9vbGVhbiB7XG4gICAgICAgIGxldCBzdW0gPSAwO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSByZXN1bHQubGVuZ3RoIC0gMjsgaSA+PSAwOyBpIC09IDIpIHtcbiAgICAgICAgICAgIHN1bSArPSByZXN1bHRbaV07XG4gICAgICAgIH1cblxuICAgICAgICBzdW0gKj0gMztcblxuICAgICAgICBmb3IgKGxldCBpID0gcmVzdWx0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaSAtPSAyKSB7XG4gICAgICAgICAgICBzdW0gKz0gcmVzdWx0W2ldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1bSAlIDEwID09PSAwO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBtZXJnZSB9IGZyb20gJy4uL2NvbW1vbi9tZXJnZSc7XG5pbXBvcnQgeyBCYXJjb2RlLCBCYXJjb2RlSW5mbywgQmFyY29kZVJlYWRlciwgQmFyY29kZVJlYWRlckNvbmZpZyB9IGZyb20gJy4vYmFyY29kZS1yZWFkZXInO1xuXG5jb25zdCBOID0gMTtcbmNvbnN0IFcgPSAzO1xuY29uc3QgU1RBUlRfUEFUVEVSTiA9IFtOLCBOLCBOLCBOXTtcbmNvbnN0IFNUT1BfUEFUVEVSTiA9IFtOLCBOLCBXXTtcbmNvbnN0IENPREVfUEFUVEVSTiA9IFtcbiAgICBbTiwgTiwgVywgVywgTl0sXG4gICAgW1csIE4sIE4sIE4sIFddLFxuICAgIFtOLCBXLCBOLCBOLCBXXSxcbiAgICBbVywgVywgTiwgTiwgTl0sXG4gICAgW04sIE4sIFcsIE4sIFddLFxuICAgIFtXLCBOLCBXLCBOLCBOXSxcbiAgICBbTiwgVywgVywgTiwgTl0sXG4gICAgW04sIE4sIE4sIFcsIFddLFxuICAgIFtXLCBOLCBOLCBXLCBOXSxcbiAgICBbTiwgVywgTiwgVywgTl1cbl07XG5jb25zdCBNQVhfQ09SUkVDVElPTl9GQUNUT1IgPSA1O1xuXG5leHBvcnQgY2xhc3MgSTJvZjVSZWFkZXIgZXh0ZW5kcyBCYXJjb2RlUmVhZGVyIHtcbiAgICBwcml2YXRlIF9iYXJTcGFjZVJhdGlvOiBbbnVtYmVyLCBudW1iZXJdO1xuXG4gICAgY29uc3RydWN0b3IoY29uZmlnPzogQmFyY29kZVJlYWRlckNvbmZpZykge1xuICAgICAgICBzdXBlcihtZXJnZSh7XG4gICAgICAgICAgICBub3JtYWxpemVCYXJTcGFjZVdpZHRoOiBmYWxzZSAvLyBOb3JtYWxpemUgdGhlIHdpZHRoIGRpZmZlcmVuY2UgYmV0d2VlbiBiYXJzIGFuZCBzcGFjZXNcbiAgICAgICAgfSwgY29uZmlnKSk7XG5cbiAgICAgICAgdGhpcy5fYmFyU3BhY2VSYXRpbyA9IFsxLCAxXTtcbiAgICAgICAgdGhpcy5fZm9ybWF0ID0gJ2kyb2Y1JztcblxuICAgICAgICBpZiAodGhpcy5jb25maWcubm9ybWFsaXplQmFyU3BhY2VXaWR0aCkge1xuICAgICAgICAgICAgdGhpcy5fc2luZ2xlQ29kZUVycm9yID0gMC4zODtcbiAgICAgICAgICAgIHRoaXMuX2F2ZXJhZ2VDb2RlRXJyb3IgPSAwLjA5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fc2luZ2xlQ29kZUVycm9yID0gMC43ODtcbiAgICAgICAgICAgIHRoaXMuX2F2ZXJhZ2VDb2RlRXJyb3IgPSAwLjM4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGVjb2RlKCk6IEJhcmNvZGUge1xuICAgICAgICBjb25zdCBzdGFydEluZm8gPSB0aGlzLl9maW5kU3RhcnQoKTtcblxuICAgICAgICBpZiAoIXN0YXJ0SW5mbykge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBlbmRJbmZvID0gdGhpcy5fZmluZEVuZCgpO1xuXG4gICAgICAgIGlmICghZW5kSW5mbykge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjb3VudGVycyA9IHRoaXMuX2ZpbGxDb3VudGVycyhzdGFydEluZm8uZW5kLCBlbmRJbmZvLnN0YXJ0LCAwKTtcblxuICAgICAgICBpZiAoY291bnRlcnMubGVuZ3RoICUgMTAgIT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEFycmF5PG51bWJlcj4oKTtcbiAgICAgICAgY29uc3QgZGVjb2RlZENvZGVzID0gbmV3IEFycmF5PEJhcmNvZGVJbmZvPigpO1xuXG4gICAgICAgIGRlY29kZWRDb2Rlcy5wdXNoKHN0YXJ0SW5mbyk7XG5cbiAgICAgICAgY29uc3QgY29kZSA9IHRoaXMuX2RlY29kZVBheWxvYWQoY291bnRlcnMsIHJlc3VsdCwgZGVjb2RlZENvZGVzKTtcblxuICAgICAgICBpZiAoIWNvZGUgfHwgcmVzdWx0Lmxlbmd0aCAlIDIgIT09IDAgfHwgcmVzdWx0Lmxlbmd0aCA8IDYpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVjb2RlZENvZGVzLnB1c2goZW5kSW5mbyk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvZGU6IHJlc3VsdC5qb2luKCcnKSxcbiAgICAgICAgICAgIHN0YXJ0OiBzdGFydEluZm8uc3RhcnQsXG4gICAgICAgICAgICBlbmQ6IGVuZEluZm8uZW5kLFxuICAgICAgICAgICAgc3RhcnRJbmZvLFxuICAgICAgICAgICAgZGVjb2RlZENvZGVzXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9tYXRjaFBhdHRlcm4oY291bnRlcjogQXJyYXk8bnVtYmVyPiwgY29kZTogUmVhZG9ubHlBcnJheTxudW1iZXI+KTogbnVtYmVyIHtcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLm5vcm1hbGl6ZUJhclNwYWNlV2lkdGgpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvdW50ZXJTdW06IFtudW1iZXIsIG51bWJlcl0gPSBbMCwgMF07XG4gICAgICAgICAgICBjb25zdCBjb2RlU3VtOiBbbnVtYmVyLCBudW1iZXJdID0gWzAsIDBdO1xuICAgICAgICAgICAgY29uc3QgY29ycmVjdGlvbjogW251bWJlciwgbnVtYmVyXSA9IFswLCAwXTtcbiAgICAgICAgICAgIGNvbnN0IGNvcnJlY3Rpb25SYXRpbyA9IE1BWF9DT1JSRUNUSU9OX0ZBQ1RPUjtcbiAgICAgICAgICAgIGNvbnN0IGNvcnJlY3Rpb25SYXRpb0ludmVyc2UgPSAxIC8gY29ycmVjdGlvblJhdGlvO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50ZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb3VudGVyU3VtW2kgJSAyXSArPSBjb3VudGVyW2ldO1xuICAgICAgICAgICAgICAgIGNvZGVTdW1baSAlIDJdICs9IGNvZGVbaV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvcnJlY3Rpb25bMF0gPSBjb2RlU3VtWzBdIC8gY291bnRlclN1bVswXTtcbiAgICAgICAgICAgIGNvcnJlY3Rpb25bMV0gPSBjb2RlU3VtWzFdIC8gY291bnRlclN1bVsxXTtcblxuICAgICAgICAgICAgY29ycmVjdGlvblswXSA9IE1hdGgubWF4KE1hdGgubWluKGNvcnJlY3Rpb25bMF0sIGNvcnJlY3Rpb25SYXRpbyksIGNvcnJlY3Rpb25SYXRpb0ludmVyc2UpO1xuICAgICAgICAgICAgY29ycmVjdGlvblsxXSA9IE1hdGgubWF4KE1hdGgubWluKGNvcnJlY3Rpb25bMV0sIGNvcnJlY3Rpb25SYXRpbyksIGNvcnJlY3Rpb25SYXRpb0ludmVyc2UpO1xuICAgICAgICAgICAgdGhpcy5fYmFyU3BhY2VSYXRpbyA9IGNvcnJlY3Rpb247XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnRlci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvdW50ZXJbaV0gKj0gdGhpcy5fYmFyU3BhY2VSYXRpb1tpICUgMl07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VwZXIuX21hdGNoUGF0dGVybihjb3VudGVyLCBjb2RlKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2ZpbmRTdGFydCgpOiBCYXJjb2RlSW5mbyB7XG4gICAgICAgIGxldCBvZmZzZXQgPSB0aGlzLl9uZXh0U2V0KHRoaXMuX3Jvdyk7XG4gICAgICAgIGxldCBzdGFydEluZm86IEJhcmNvZGVJbmZvO1xuXG4gICAgICAgIHdoaWxlICghc3RhcnRJbmZvKSB7XG4gICAgICAgICAgICBzdGFydEluZm8gPSB0aGlzLl9maW5kUGF0dGVybihTVEFSVF9QQVRURVJOLCBvZmZzZXQsIDAsIHRydWUpO1xuICAgICAgICAgICAgaWYgKCFzdGFydEluZm8pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgbmFycm93QmFyV2lkdGggPSAoc3RhcnRJbmZvLmVuZCAtIHN0YXJ0SW5mby5zdGFydCkgPj4gMjtcbiAgICAgICAgICAgIGNvbnN0IGxlYWRpbmdXaGl0ZXNwYWNlU3RhcnQgPSBzdGFydEluZm8uc3RhcnQgLSBuYXJyb3dCYXJXaWR0aCAqIDEwO1xuXG4gICAgICAgICAgICBpZiAobGVhZGluZ1doaXRlc3BhY2VTdGFydCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX21hdGNoUmFuZ2UobGVhZGluZ1doaXRlc3BhY2VTdGFydCwgc3RhcnRJbmZvLnN0YXJ0LCAwKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RhcnRJbmZvO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgb2Zmc2V0ID0gc3RhcnRJbmZvLmVuZDtcbiAgICAgICAgICAgIHN0YXJ0SW5mbyA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX3ZlcmlmeVRyYWlsaW5nV2hpdGVzcGFjZShlbmRJbmZvOiBCYXJjb2RlSW5mbyk6IEJhcmNvZGVJbmZvIHtcbiAgICAgICAgY29uc3QgdHJhaWxpbmdXaGl0ZXNwYWNlRW5kID0gZW5kSW5mby5lbmQgKyAoZW5kSW5mby5lbmQgLSBlbmRJbmZvLnN0YXJ0KSAvIDI7XG5cbiAgICAgICAgaWYgKHRyYWlsaW5nV2hpdGVzcGFjZUVuZCA8IHRoaXMuX3Jvdy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9tYXRjaFJhbmdlKGVuZEluZm8uZW5kLCB0cmFpbGluZ1doaXRlc3BhY2VFbmQsIDApKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVuZEluZm87XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2ZpbmRFbmQoKTogQmFyY29kZUluZm8ge1xuICAgICAgICB0aGlzLl9yb3cucmV2ZXJzZSgpO1xuXG4gICAgICAgIGNvbnN0IGVuZEluZm8gPSB0aGlzLl9maW5kUGF0dGVybihTVE9QX1BBVFRFUk4sIHVuZGVmaW5lZCwgMCwgZmFsc2UpO1xuXG4gICAgICAgIHRoaXMuX3Jvdy5yZXZlcnNlKCk7XG5cbiAgICAgICAgaWYgKGVuZEluZm8gPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcmV2ZXJzZSBudW1iZXJzXG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gZW5kSW5mby5zdGFydDtcbiAgICAgICAgZW5kSW5mby5zdGFydCA9IHRoaXMuX3Jvdy5sZW5ndGggLSBlbmRJbmZvLmVuZDtcbiAgICAgICAgZW5kSW5mby5lbmQgPSB0aGlzLl9yb3cubGVuZ3RoIC0gc3RhcnQ7XG5cbiAgICAgICAgcmV0dXJuIGVuZEluZm8gIT09IG51bGwgPyB0aGlzLl92ZXJpZnlUcmFpbGluZ1doaXRlc3BhY2UoZW5kSW5mbykgOiBudWxsO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZGVjb2RlQ29kZShjb3VudGVyOiBBcnJheTxudW1iZXI+KTogQmFyY29kZUluZm8ge1xuICAgICAgICBjb25zdCBiZXN0TWF0Y2g6IEJhcmNvZGVJbmZvID0ge1xuICAgICAgICAgICAgZXJyb3I6IE51bWJlci5NQVhfVkFMVUUsXG4gICAgICAgICAgICBjb2RlOiAtMSxcbiAgICAgICAgICAgIHN0YXJ0OiAwLFxuICAgICAgICAgICAgZW5kOiAwXG4gICAgICAgIH07XG5cbiAgICAgICAgZm9yIChsZXQgY29kZSA9IDA7IGNvZGUgPCBDT0RFX1BBVFRFUk4ubGVuZ3RoOyBjb2RlKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGVycm9yID0gdGhpcy5fbWF0Y2hQYXR0ZXJuKGNvdW50ZXIsIENPREVfUEFUVEVSTltjb2RlXSk7XG4gICAgICAgICAgICBpZiAoZXJyb3IgPCBiZXN0TWF0Y2guZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBiZXN0TWF0Y2guY29kZSA9IGNvZGU7XG4gICAgICAgICAgICAgICAgYmVzdE1hdGNoLmVycm9yID0gZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYmVzdE1hdGNoLmVycm9yIDwgdGhpcy5BVkVSQUdFX0NPREVfRVJST1IgPyBiZXN0TWF0Y2ggOiBudWxsO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZGVjb2RlUGF5bG9hZChjb3VudGVyczogUmVhZG9ubHlBcnJheTxudW1iZXI+LCByZXN1bHQ6IEFycmF5PG51bWJlcj4sIGRlY29kZWRDb2RlczogQXJyYXk8QmFyY29kZUluZm8+KTogW0JhcmNvZGVJbmZvLCBCYXJjb2RlSW5mb10ge1xuICAgICAgICBjb25zdCBjb3VudGVyTGVuZ3RoID0gY291bnRlcnMubGVuZ3RoO1xuICAgICAgICBjb25zdCBjb3VudGVyMCA9IFswLCAwLCAwLCAwLCAwXTtcbiAgICAgICAgY29uc3QgY291bnRlcjEgPSBbMCwgMCwgMCwgMCwgMF07XG4gICAgICAgIGxldCBjb2RlMDogQmFyY29kZUluZm87XG4gICAgICAgIGxldCBjb2RlMTogQmFyY29kZUluZm87XG4gICAgICAgIGxldCBwb3MgPSAwO1xuXG4gICAgICAgIHdoaWxlIChwb3MgPCBjb3VudGVyTGVuZ3RoKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvdW50ZXIwW2ldID0gY291bnRlcnNbcG9zXSAqIHRoaXMuX2JhclNwYWNlUmF0aW9bMF07XG4gICAgICAgICAgICAgICAgY291bnRlcjFbaV0gPSBjb3VudGVyc1twb3MgKyAxXSAqIHRoaXMuX2JhclNwYWNlUmF0aW9bMV07XG4gICAgICAgICAgICAgICAgcG9zICs9IDI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvZGUwID0gdGhpcy5fZGVjb2RlQ29kZShjb3VudGVyMCk7XG4gICAgICAgICAgICBpZiAoIWNvZGUwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvZGUxID0gdGhpcy5fZGVjb2RlQ29kZShjb3VudGVyMSk7XG4gICAgICAgICAgICBpZiAoIWNvZGUxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGNvZGUwLmNvZGUsIGNvZGUxLmNvZGUpO1xuICAgICAgICAgICAgZGVjb2RlZENvZGVzLnB1c2goY29kZTAsIGNvZGUxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBbY29kZTAsIGNvZGUxXTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb2RlMTI4UmVhZGVyIH0gZnJvbSAnLi9jb2RlLTEyOC1yZWFkZXInO1xuaW1wb3J0IHsgQ29kZTM5UmVhZGVyIH0gZnJvbSAnLi9jb2RlLTM5LXJlYWRlcic7XG5pbXBvcnQgeyBDb2RlMzlWSU5SZWFkZXIgfSBmcm9tICcuL2NvZGUtMzktdmluLXJlYWRlcic7XG5pbXBvcnQgeyBDb2RhYmFyUmVhZGVyIH0gZnJvbSAnLi9jb2RhYmFyLXJlYWRlcic7XG5pbXBvcnQgeyBFQU5SZWFkZXIgfSBmcm9tICcuL2Vhbi1yZWFkZXInO1xuaW1wb3J0IHsgRUFOOFJlYWRlciB9IGZyb20gJy4vZWFuLTgtcmVhZGVyJztcbmltcG9ydCB7IEVBTjJSZWFkZXIgfSBmcm9tICcuL2Vhbi0yLXJlYWRlcic7XG5pbXBvcnQgeyBFQU41UmVhZGVyIH0gZnJvbSAnLi9lYW4tNS1yZWFkZXInO1xuaW1wb3J0IHsgVVBDUmVhZGVyIH0gZnJvbSAnLi91cGMtcmVhZGVyJztcbmltcG9ydCB7IFVQQ0VSZWFkZXIgfSBmcm9tICcuL3VwYy1lLXJlYWRlcic7XG5pbXBvcnQgeyBJMm9mNVJlYWRlciB9IGZyb20gJy4vaTJvZjUtcmVhZGVyJztcbmltcG9ydCB7IFR3b09mRml2ZVJlYWRlciB9IGZyb20gJy4vMm9mNS1yZWFkZXInO1xuaW1wb3J0IHsgQ29kZTkzUmVhZGVyIH0gZnJvbSAnLi9jb2RlLTkzLXJlYWRlcic7XG5cbmV4cG9ydCBjb25zdCBSZWFkZXJzID0ge1xuICAgIGNvZGVfMTI4X3JlYWRlcjogQ29kZTEyOFJlYWRlcixcbiAgICBlYW5fcmVhZGVyOiBFQU5SZWFkZXIsXG4gICAgZWFuXzVfcmVhZGVyOiBFQU41UmVhZGVyLFxuICAgIGVhbl8yX3JlYWRlcjogRUFOMlJlYWRlcixcbiAgICBlYW5fOF9yZWFkZXI6IEVBTjhSZWFkZXIsXG4gICAgY29kZV8zOV9yZWFkZXI6IENvZGUzOVJlYWRlcixcbiAgICBjb2RlXzM5X3Zpbl9yZWFkZXI6IENvZGUzOVZJTlJlYWRlcixcbiAgICBjb2RhYmFyX3JlYWRlcjogQ29kYWJhclJlYWRlcixcbiAgICB1cGNfcmVhZGVyOiBVUENSZWFkZXIsXG4gICAgdXBjX2VfcmVhZGVyOiBVUENFUmVhZGVyLFxuICAgIGkyb2Y1X3JlYWRlcjogSTJvZjVSZWFkZXIsXG4gICAgJzJvZjVfcmVhZGVyJzogVHdvT2ZGaXZlUmVhZGVyLFxuICAgIGNvZGVfOTNfcmVhZGVyOiBDb2RlOTNSZWFkZXJcbn07XG4iLCJpbXBvcnQgeyBCYXJjb2RlSW5mbywgQmFyY29kZVJlYWRlciwgQmFyY29kZVJlYWRlckNvbmZpZyB9IGZyb20gJy4vYmFyY29kZS1yZWFkZXInO1xuaW1wb3J0IHsgRUFOUmVhZGVyIH0gZnJvbSAnLi9lYW4tcmVhZGVyJztcblxuY29uc3QgQ09ERV9GUkVRVUVOQ1kgPSBbWzU2LCA1MiwgNTAsIDQ5LCA0NCwgMzgsIDM1LCA0MiwgNDEsIDM3XSwgWzcsIDExLCAxMywgMTQsIDE5LCAyNSwgMjgsIDIxLCAyMiwgMjZdXTtcblxuZXhwb3J0IGNsYXNzIFVQQ0VSZWFkZXIgZXh0ZW5kcyBFQU5SZWFkZXIge1xuICAgIGdldCBTVE9QX1BBVFRFUk4oKSB7XG4gICAgICAgIHJldHVybiBbMSAvIDYgKiA3LCAxIC8gNiAqIDcsIDEgLyA2ICogNywgMSAvIDYgKiA3LCAxIC8gNiAqIDcsIDEgLyA2ICogN107XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoY29uZmlnPzogQmFyY29kZVJlYWRlckNvbmZpZywgc3VwcGxlbWVudHM/OiBBcnJheTxCYXJjb2RlUmVhZGVyPikge1xuICAgICAgICBzdXBlcihjb25maWcsIHN1cHBsZW1lbnRzKTtcblxuICAgICAgICB0aGlzLl9mb3JtYXQgPSAndXBjX2UnO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZGVjb2RlUGF5bG9hZChjb2RlOiBCYXJjb2RlSW5mbywgcmVzdWx0OiBBcnJheTxudW1iZXI+LCBkZWNvZGVkQ29kZXM6IEFycmF5PEJhcmNvZGVJbmZvPik6IEJhcmNvZGVJbmZvIHtcbiAgICAgICAgbGV0IGNvZGVGcmVxdWVuY3kgPSAweDA7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICAgICAgICAgIGNvZGUgPSB0aGlzLl9kZWNvZGVDb2RlKGNvZGUuZW5kKTtcbiAgICAgICAgICAgIGlmICghY29kZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvZGUuY29kZSA+PSB0aGlzLkNPREVfR19TVEFSVCkge1xuICAgICAgICAgICAgICAgIGNvZGUuY29kZSA9IGNvZGUuY29kZSAtIHRoaXMuQ09ERV9HX1NUQVJUO1xuICAgICAgICAgICAgICAgIGNvZGVGcmVxdWVuY3kgfD0gMSA8PCAoNSAtIGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goY29kZS5jb2RlKTtcbiAgICAgICAgICAgIGRlY29kZWRDb2Rlcy5wdXNoKGNvZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLl9kZXRlcm1pbmVQYXJpdHkoY29kZUZyZXF1ZW5jeSwgcmVzdWx0KSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29kZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9kZXRlcm1pbmVQYXJpdHkoY29kZUZyZXF1ZW5jeTogbnVtYmVyLCByZXN1bHQ6IEFycmF5PG51bWJlcj4pOiBib29sZWFuIHtcbiAgICAgICAgZm9yIChsZXQgbnJTeXN0ZW0gPSAwOyBuclN5c3RlbSA8IENPREVfRlJFUVVFTkNZLmxlbmd0aDsgbnJTeXN0ZW0rKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBDT0RFX0ZSRVFVRU5DWVtuclN5c3RlbV0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoY29kZUZyZXF1ZW5jeSA9PT0gQ09ERV9GUkVRVUVOQ1lbbnJTeXN0ZW1dW2ldKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC51bnNoaWZ0KG5yU3lzdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goaSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfY29udmVydFRvVVBDQShyZXN1bHQ6IEFycmF5PG51bWJlcj4pOiBBcnJheTxudW1iZXI+IHtcbiAgICAgICAgY29uc3QgbGFzdERpZ2l0ID0gcmVzdWx0W3Jlc3VsdC5sZW5ndGggLSAyXTtcbiAgICAgICAgbGV0IHVwY2EgPSBbcmVzdWx0WzBdXTtcblxuICAgICAgICBpZiAobGFzdERpZ2l0IDw9IDIpIHtcbiAgICAgICAgICAgIHVwY2EgPSB1cGNhLmNvbmNhdChyZXN1bHQuc2xpY2UoMSwgMykpLmNvbmNhdChbbGFzdERpZ2l0LCAwLCAwLCAwLCAwXSkuY29uY2F0KHJlc3VsdC5zbGljZSgzLCA2KSk7XG4gICAgICAgIH0gZWxzZSBpZiAobGFzdERpZ2l0ID09PSAzKSB7XG4gICAgICAgICAgICB1cGNhID0gdXBjYS5jb25jYXQocmVzdWx0LnNsaWNlKDEsIDQpKS5jb25jYXQoWzAsIDAsIDAsIDAsIDBdKS5jb25jYXQocmVzdWx0LnNsaWNlKDQsIDYpKTtcbiAgICAgICAgfSBlbHNlIGlmIChsYXN0RGlnaXQgPT09IDQpIHtcbiAgICAgICAgICAgIHVwY2EgPSB1cGNhLmNvbmNhdChyZXN1bHQuc2xpY2UoMSwgNSkpLmNvbmNhdChbMCwgMCwgMCwgMCwgMCwgcmVzdWx0WzVdXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB1cGNhID0gdXBjYS5jb25jYXQocmVzdWx0LnNsaWNlKDEsIDYpKS5jb25jYXQoWzAsIDAsIDAsIDAsIGxhc3REaWdpdF0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdXBjYS5wdXNoKHJlc3VsdFtyZXN1bHQubGVuZ3RoIC0gMV0pO1xuICAgICAgICByZXR1cm4gdXBjYTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2NoZWNrc3VtKHJlc3VsdDogQXJyYXk8bnVtYmVyPik6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gc3VwZXIuX2NoZWNrc3VtKHRoaXMuX2NvbnZlcnRUb1VQQ0EocmVzdWx0KSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9maW5kRW5kKG9mZnNldDogbnVtYmVyLCBpc1doaXRlOiAwIHwgMSkge1xuICAgICAgICBpc1doaXRlID0gMTtcbiAgICAgICAgcmV0dXJuIHN1cGVyLl9maW5kRW5kKG9mZnNldCwgaXNXaGl0ZSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF92ZXJpZnlUcmFpbGluZ1doaXRlc3BhY2UoZW5kSW5mbzogQmFyY29kZUluZm8pOiBCYXJjb2RlSW5mbyB7XG4gICAgICAgIGNvbnN0IHRyYWlsaW5nV2hpdGVzcGFjZUVuZCA9IGVuZEluZm8uZW5kICsgKGVuZEluZm8uZW5kIC0gZW5kSW5mby5zdGFydCkgLyAyO1xuXG4gICAgICAgIGlmICh0cmFpbGluZ1doaXRlc3BhY2VFbmQgPCB0aGlzLl9yb3cubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fbWF0Y2hSYW5nZShlbmRJbmZvLmVuZCwgdHJhaWxpbmdXaGl0ZXNwYWNlRW5kLCAwKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbmRJbmZvO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufSIsImltcG9ydCB7IEJhcmNvZGUsIEJhcmNvZGVSZWFkZXIsIEJhcmNvZGVSZWFkZXJDb25maWcgfSBmcm9tICcuL2JhcmNvZGUtcmVhZGVyJztcbmltcG9ydCB7IEVBTlJlYWRlciB9IGZyb20gJy4vZWFuLXJlYWRlcic7XG5cbmV4cG9ydCBjbGFzcyBVUENSZWFkZXIgZXh0ZW5kcyBFQU5SZWFkZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZz86IEJhcmNvZGVSZWFkZXJDb25maWcsIHN1cHBsZW1lbnRzPzogQXJyYXk8QmFyY29kZVJlYWRlcj4pIHtcbiAgICAgICAgc3VwZXIoY29uZmlnLCBzdXBwbGVtZW50cyk7XG5cbiAgICAgICAgdGhpcy5fZm9ybWF0ID0gJ3VwY19hJztcbiAgICB9XG5cbiAgICBkZWNvZGUoKTogQmFyY29kZSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLmRlY29kZSgpO1xuXG4gICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LmNvZGUgJiYgcmVzdWx0LmNvZGUubGVuZ3RoID09PSAxMyAmJiByZXN1bHQuY29kZS5jaGFyQXQoMCkgPT09ICcwJykge1xuICAgICAgICAgICAgcmVzdWx0LmNvZGUgPSByZXN1bHQuY29kZS5zdWJzdHJpbmcoMSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=