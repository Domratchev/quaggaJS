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
/*! exports provided: Quagga */
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
;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9RdWFnZ2Evd2VicGFjay9teU1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vUXVhZ2dhL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1F1YWdnYS8vVXNlcnMvYWRvbXJhdGNoZXYvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy9Vc2Vycy9hZG9tcmF0Y2hldi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy9Vc2Vycy9hZG9tcmF0Y2hldi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yLmpzIiwid2VicGFjazovL1F1YWdnYS8vVXNlcnMvYWRvbXJhdGNoZXYvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy9Vc2Vycy9hZG9tcmF0Y2hldi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly9RdWFnZ2EvL1VzZXJzL2Fkb21yYXRjaGV2L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL1F1YWdnYS8vVXNlcnMvYWRvbXJhdGNoZXYvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0LmpzIiwid2VicGFjazovL1F1YWdnYS8vVXNlcnMvYWRvbXJhdGNoZXYvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy9Vc2Vycy9hZG9tcmF0Y2hldi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly9RdWFnZ2EvL1VzZXJzL2Fkb21yYXRjaGV2L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9RdWFnZ2EvL1VzZXJzL2Fkb21yYXRjaGV2L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL1F1YWdnYS8vVXNlcnMvYWRvbXJhdGNoZXYvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly9RdWFnZ2EvL1VzZXJzL2Fkb21yYXRjaGV2L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL1F1YWdnYS8vVXNlcnMvYWRvbXJhdGNoZXYvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc3VwZXJQcm9wQmFzZS5qcyIsIndlYnBhY2s6Ly9RdWFnZ2EvL1VzZXJzL2Fkb21yYXRjaGV2L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovL1F1YWdnYS8vVXNlcnMvYWRvbXJhdGNoZXYvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL1F1YWdnYS8vVXNlcnMvYWRvbXJhdGNoZXYvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwid2VicGFjazovL1F1YWdnYS8vVXNlcnMvYWRvbXJhdGNoZXYvbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS1tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy9Vc2Vycy9hZG9tcmF0Y2hldi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovL1F1YWdnYS8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL2NvbW1vbi9jbHVzdGVyLnRzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9jb21tb24vZXZlbnRzLnRzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9jb21tb24vaHN2MnJnYi50cyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvY29tbW9uL2ltYWdlLWRlYnVnLnRzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9jb21tb24vaW1hZ2Utd3JhcHBlci50cyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvY29tbW9uL21lZGlhLWRldmljZXMudHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL2NvbW1vbi9tZXJnZS50cyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvY29uZmlnL2NvbmZpZy5kZXYudHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL2RlY29kZXIvYmFyY29kZS1kZWNvZGVyLnRzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9kZWNvZGVyL2JyZXNlbmhhbS50cyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvaW5wdXQvY2FtZXJhLWFjY2Vzcy50cyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvaW5wdXQvZXhpZi1oZWxwZXIudHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL2lucHV0L2ZyYW1lLWdyYWJiZXIudHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL2lucHV0L2ltYWdlLWxvYWRlci50cyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvaW5wdXQvaW1hZ2Utc3RyZWFtLnRzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9pbnB1dC9pbnB1dC1zdHJlYW0tdXRpbHMudHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL2lucHV0L2lucHV0LXN0cmVhbS50cyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvaW5wdXQvbGl2ZS1zdHJlYW0udHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL2lucHV0L3ZpZGVvLXN0cmVhbS50cyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvbG9jYXRvci9iYXJjb2RlLWxvY2F0b3ItdXRpbHMudHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL2xvY2F0b3IvYmFyY29kZS1sb2NhdG9yLnRzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9sb2NhdG9yL3Jhc3Rlcml6ZXIudHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL2xvY2F0b3Ivc2tlbGV0b25pemVyLmpzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9sb2NhdG9yL3RyYWNlci50cyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvcXVhZ2dhLnRzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9yZWFkZXIvMm9mNS1yZWFkZXIudHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL3JlYWRlci9iYXJjb2RlLXJlYWRlci50cyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvcmVhZGVyL2NvZGFiYXItcmVhZGVyLnRzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9yZWFkZXIvY29kZS0xMjgtcmVhZGVyLnRzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9yZWFkZXIvY29kZS0zOS1yZWFkZXIudHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL3JlYWRlci9jb2RlLTM5LXZpbi1yZWFkZXIudHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL3JlYWRlci9jb2RlLTkzLXJlYWRlci50cyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvcmVhZGVyL2Vhbi0yLXJlYWRlci50cyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvcmVhZGVyL2Vhbi01LXJlYWRlci50cyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvcmVhZGVyL2Vhbi04LXJlYWRlci50cyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvcmVhZGVyL2Vhbi1yZWFkZXIudHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL3JlYWRlci9pMm9mNS1yZWFkZXIudHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL3JlYWRlci9pbmRleC50cyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvcmVhZGVyL3VwYy1lLXJlYWRlci50cyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvcmVhZGVyL3VwYy1yZWFkZXIudHMiXSwibmFtZXMiOlsiQ2x1c3RlciIsIm1vbWVudHMiLCJ0aHJlc2hvbGQiLCJjbHVzdGVycyIsIkFycmF5IiwiZm9yRWFjaCIsIm1vbWVudCIsIm1hdGNoaW5nQ2x1c3RlciIsImZpbmQiLCJjbHVzdGVyIiwiZml0cyIsImFkZCIsInB1c2giLCJfdGhyZXNob2xkIiwiX21vbWVudHMiLCJfY2VudGVyIiwicmFkIiwieCIsInkiLCJwb2ludCIsInJlZHVjZSIsInN1bSIsInAiLCJsZW5ndGgiLCJNYXRoIiwiY29zIiwic2luIiwic2ltaWxhcml0eSIsImFicyIsImV2ZW50cyIsIkV2ZW50cyIsImV2ZW50IiwiY2FsbGJhY2siLCJhc3luYyIsInN1YnNjcmlwdGlvbiIsImdldEV2ZW50Iiwic3Vic2NyaXB0aW9ucyIsInR5cGUiLCJkYXRhIiwiZXZlbnRJdGVtIiwiZmlsdGVyIiwib25jZSIsInB1Ymxpc2hTdWJzY3JpcHRpb24iLCJzdWJzY3JpYmUiLCJldmVudE5hbWUiLCJzZXRUaW1lb3V0IiwiaHN2MnJnYiIsImhzdiIsInJnYiIsImgiLCJzIiwidiIsImMiLCJtIiwiciIsImciLCJiIiwiSW1hZ2VEZWJ1ZyIsInBhdGgiLCJjb250ZXh0IiwiY29sb3IiLCJsaW5lV2lkdGgiLCJzdHJva2VTdHlsZSIsImZpbGxTdHlsZSIsImJlZ2luUGF0aCIsIm1vdmVUbyIsInNsaWNlIiwibGluZVRvIiwiY2xvc2VQYXRoIiwic3Ryb2tlIiwiaW1hZ2VEYXRhIiwid2lkdGgiLCJoZWlnaHQiLCJjYW52YXNEYXRhIiwiZ2V0SW1hZ2VEYXRhIiwiaW1hZ2VJbmRleCIsImNhbnZhc0luZGV4IiwidmFsdWUiLCJwdXRJbWFnZURhdGEiLCJJbWFnZVdyYXBwZXIiLCJzaXplIiwiYXJyYXlUeXBlIiwiaW5pdGlhbGl6ZSIsIlVpbnQ4QXJyYXkiLCJmaWxsIiwiYm9yZGVyIiwiaW1hZ2VXcmFwcGVyIiwiZnJvbVgiLCJmcm9tWSIsInNpemVZIiwic2l6ZVgiLCJpIiwibGFiZWxDb3VudCIsImxhYmVsU3VtIiwicmVzdWx0IiwibTAwIiwibTAxIiwibTEwIiwibTExIiwibTAyIiwibTIwIiwidGhldGEiLCJ5c3EiLCJ2YWwiLCJsYWJlbCIsIlBJIiwiUElfNCIsImlzTmFOIiwieF8iLCJ5XyIsIm11MTEiLCJtdTAyIiwibXUyMCIsInRtcCIsImF0YW4iLCJzY2FsZSIsImZyYW1lIiwiY3VycmVudCIsInBpeGVsIiwiZ2V0Iiwid2hpdGVSZ2IiLCJibGFja1JnYiIsImVudW1lcmF0ZURldmljZXMiLCJuYXZpZ2F0b3IiLCJtZWRpYURldmljZXMiLCJQcm9taXNlIiwicmVqZWN0IiwiRXJyb3IiLCJnZXRVc2VyTWVkaWEiLCJjb25zdHJhaW50cyIsIm1lcmdlIiwiaXNPYmplY3QiLCJvYmoiLCJvYmplY3RzIiwicHJldiIsIk9iamVjdCIsImtleXMiLCJrZXkiLCJwVmFsIiwib1ZhbCIsImlzQXJyYXkiLCJjb25maWciLCJpbnB1dFN0cmVhbSIsIm5hbWUiLCJmYWNpbmdNb2RlIiwiYXJlYSIsInRvcCIsInJpZ2h0IiwibGVmdCIsImJvdHRvbSIsInNpbmdsZUNoYW5uZWwiLCJsb2NhdGUiLCJudW1PZldvcmtlcnMiLCJkZWNvZGVyIiwicmVhZGVycyIsImRlYnVnIiwiZHJhd0JvdW5kaW5nQm94Iiwic2hvd0ZyZXF1ZW5jeSIsImRyYXdTY2FubGluZSIsInNob3dQYXR0ZXJuIiwibG9jYXRvciIsImhhbGZTYW1wbGUiLCJwYXRjaFNpemUiLCJzaG93Q2FudmFzIiwic2hvd1BhdGNoZXMiLCJzaG93Rm91bmRQYXRjaGVzIiwic2hvd1NrZWxldG9uIiwic2hvd0xhYmVscyIsInNob3dQYXRjaExhYmVscyIsInNob3dSZW1haW5pbmdQYXRjaExhYmVscyIsImJveEZyb21QYXRjaGVzIiwic2hvd1RyYW5zZm9ybWVkIiwic2hvd1RyYW5zZm9ybWVkQm94Iiwic2hvd0JCIiwiQmFyY29kZURlY29kZXIiLCJpbnB1dEltYWdlV3JhcHBlciIsIl9jb25maWciLCJfaW5wdXRJbWFnZVdyYXBwZXIiLCJfYmFyY29kZVJlYWRlcnMiLCJwcm9jZXNzIiwiZG9jdW1lbnQiLCJkZWJ1Z0RpdiIsInF1ZXJ5U2VsZWN0b3IiLCJfZnJlcXVlbmN5Q2FudmFzIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImFwcGVuZENoaWxkIiwic3R5bGUiLCJkaXNwbGF5IiwiX3BhdHRlcm5DYW52YXMiLCJvdmVybGF5Q2FudmFzIiwiX292ZXJsYXlDb250ZXh0IiwiZ2V0Q29udGV4dCIsIl9pbml0UmVhZGVycyIsImJveGVzIiwiYmFyY29kZXMiLCJtdWx0aXBsZSIsImJveCIsImRlY29kZUZyb21Cb3VuZGluZ0JveCIsImNvZGVSZXN1bHQiLCJfZHJhd1BhdGgiLCJsaW5lIiwiX2dldExpbmUiLCJhbmdsZSIsImF0YW4yIiwiX2dldEV4dGVuZGVkTGluZSIsIl90cnlEZWNvZGUiLCJfdHJ5RGVjb2RlQnJ1dGVGb3JjZSIsInBhdHRlcm4iLCJiYXJjb2RlTGluZSIsInJlYWRlckNvbmZpZyIsInJlYWRlciIsImNvbmZpZ3VyYXRpb24iLCJzdXBwbGVtZW50cyIsImZvcm1hdCIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJzdXBwbGVtZW50IiwiUmVhZGVycyIsIkZPUk1BVCIsIkpTT04iLCJzdHJpbmdpZnkiLCJleHRlbmRMaW5lIiwiYW1vdW50IiwiZXh0ZW5zaW9uIiwibGluZUxlbmd0aCIsInNxcnQiLCJleHRlbnNpb25MZW5ndGgiLCJpbkltYWdlV2l0aEJvcmRlciIsIkJyZXNlbmhhbSIsImdldEJhcmNvZGVMaW5lIiwiX3ByaW50RnJlcXVlbmN5IiwidG9CaW5hcnlMaW5lIiwiX3ByaW50UGF0dGVybiIsImRlY29kZVBhdHRlcm4iLCJsaW5lQW5nbGUiLCJzaWRlTGVuZ3RoIiwic2xpY2VzIiwieGRpciIsInlkaXIiLCJkaXIiLCJmaWxsUmVjdCIsImRyYXdQYXRoIiwiU2xvcGUiLCJwMSIsInAyIiwieDAiLCJ5MCIsIngxIiwieTEiLCJzdGVlcCIsIm1pbiIsIm1heCIsInJlYWQiLCJhIiwiZGVsdGF4IiwiZGVsdGF5IiwiZXJyb3IiLCJ5c3RlcCIsImNlbnRlciIsImV4dHJlbWEiLCJyVGhyZXNob2xkIiwiY3VycmVudERpciIsIlVwIiwiRG93biIsInBvcyIsInNsb3BlIiwic2xvcGUyIiwiaiIsIl9zdHJlYW0iLCJDYW1lcmFBY2Nlc3MiLCJ2aWRlbyIsInZpZGVvQ29uc3RyYWludHMiLCJub3JtYWxpemVkQ29uc3RyYWludHMiLCJwaWNrQ29uc3RyYWludHMiLCJzcmNPYmplY3QiLCJzZXRBdHRyaWJ1dGUiLCJyZXNvbHZlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBsYXkiLCJ0aGVuIiwiX3dhaXRGb3JWaWRlbyIsImJpbmQiLCJ0cmFja3MiLCJnZXRWaWRlb1RyYWNrcyIsInN0b3AiLCJkZXZpY2VzIiwia2luZCIsInRyYWNrIiwiZ2V0QWN0aXZlVHJhY2siLCJhc3BlY3RSYXRpbyIsImRldmljZUlkIiwibWluQXNwZWN0UmF0aW8iLCJmYWNpbmciLCJhdWRpbyIsInZpZGVvV2lkdGgiLCJ2aWRlb0hlaWdodCIsImF0dGVtcHRzIiwiY2hlY2tWaWRlbyIsIndpbmRvdyIsIkV4aWZUYWdzIiwiQXZhaWxhYmxlVGFncyIsImZpbmRUYWdzSW5PYmplY3RVUkwiLCJzcmMiLCJ0YWdzIiwidGVzdCIsIm9iamVjdFVSTFRvQmxvYiIsImJ1ZmZlciIsImZpbmRUYWdzSW5CdWZmZXIiLCJmaWxlIiwic2VsZWN0ZWRUYWdzIiwiZGF0YVZpZXciLCJEYXRhVmlldyIsImJ5dGVMZW5ndGgiLCJleGlmVGFncyIsInNlbGVjdGVkVGFnIiwiZXhpZlRhZyIsInRhZyIsIm9mZnNldCIsImdldFVpbnQ4IiwibWFya2VyIiwicmVhZEVYSUZEYXRhIiwiZ2V0VWludDE2IiwidXJsIiwiZmV0Y2giLCJyZXNwb25zZSIsIm9rIiwiYXJyYXlCdWZmZXIiLCJzdGF0dXMiLCJzdGFydCIsInNwbGl0Iiwic29tZSIsImNoYXIiLCJpbmRleCIsImNoYXJDb2RlQXQiLCJ0aWZmT2Zmc2V0IiwiYmlnRW5kIiwiZmlyc3RJRkRPZmZzZXQiLCJnZXRVaW50MzIiLCJyZWFkVGFncyIsImRpclN0YXJ0Iiwic3RyaW5ncyIsImVudHJpZXMiLCJlbnRyeU9mZnNldCIsInJlYWRUYWdWYWx1ZSIsIm51bVZhbHVlcyIsInVuZGVmaW5lZCIsIlFVQVRFUl9DSVJDTEUiLCJGcmFtZUdyYWJiZXIiLCJjYW52YXMiLCJfaW5wdXRTdHJlYW0iLCJfc3RyZWFtQ29uZmlnIiwiX2NhbnZhc1dpZHRoIiwiY2FudmFzV2lkdGgiLCJfY2FudmFzSGVpZ2h0IiwiY2FudmFzSGVpZ2h0IiwiX3dpZHRoIiwiX2hlaWdodCIsIl90b3BMZWZ0IiwidG9wTGVmdCIsIl9jYW52YXMiLCJfY29udGV4dCIsIl9kYXRhIiwidmlkZW9TaXplIiwicmVhbFdpZHRoIiwicmVhbEhlaWdodCIsImNhbnZhc1NpemUiLCJnZXRGcmFtZSIsIl9hZGp1c3RDYW52YXNTaXplIiwiZHJhd2FibGUiLCJkcmF3QW5nbGUiLCJIVE1MVmlkZW9FbGVtZW50IiwiaW1hZ2UiLCJvcmllbnRhdGlvbiIsImhhbGZXaWR0aCIsImhhbGZIZWlnaHQiLCJ0cmFuc2xhdGUiLCJyb3RhdGUiLCJkcmF3SW1hZ2UiLCJfZ3JheUFuZEhhbGZTYW1wbGVGcm9tQ2FudmFzRGF0YSIsIl9jb21wdXRlR3JheSIsIndhcm4iLCJlbmRJbmRleCIsIm91dFdpZHRoIiwidG9wUm93SW5kZXgiLCJib3R0b21Sb3dJbmRleCIsIm91dEltYWdlSW5kZXgiLCJ0b3A0IiwiYm90dG9tNCIsImltYWdlRGF0YUxlbmd0aCIsIkltYWdlTG9hZGVyIiwiYmFzZVVyaSIsInNlcXVlbmNlIiwibG9hZGVkIiwibG9hZGVkSW1hZ2UiLCJub3RMb2FkZWRJbWFnZXMiLCJzcGxpY2UiLCJpbWFnZVNyY3MiLCJpbWFnZU5hbWUiLCJzdWJzdHIiLCJsYXN0SW5kZXhPZiIsImxvYWRlZEltYWdlcyIsImZpcnN0SW1hZ2UiLCJJbWFnZSIsIm9ubG9hZCIsIkltYWdlU3RyZWFtIiwiX2Jhc2VVcmwiLCJfZW5kZWQiLCJfZnJhbWVJbmRleCIsIl9pbWFnZXMiLCJfbG9hZGVkIiwiX29mZnNldCIsIl9wYXVzZWQiLCJfc2l6ZSIsInRyaWdnZXIiLCJsb2FkIiwiaW1hZ2VzIiwiX2NhbGN1bGF0ZWRXaWR0aCIsIl9jYWxjdWxhdGVkSGVpZ2h0IiwiX2xvYWRJbWFnZXMiLCJ0aW1lIiwiSW5wdXRTdHJlYW0iLCJfY29tcHV0ZURpdmlzb3JzIiwibiIsImRpdmlzb3JzIiwibGFyZ2VEaXZpc29ycyIsImRpdmlzb3IiLCJ1bnNoaWZ0IiwiY29uY2F0IiwiX2NvbXB1dGVDb21tb25EaXZpc29ycyIsImxhcmdlRGl2aXNvciIsImNhbGN1bGF0ZVBhdGNoU2l6ZSIsIndpZGVTaWRlIiwibnJPZlBhdGNoZXNMaXN0IiwibnJPZlBhdGNoZXNNYXAiLCJzbWFsbCIsIm1lZGl1bSIsImxhcmdlIiwibnJPZlBhdGNoZXNJbmRleCIsIm5yT2ZQYXRjaGVzIiwiZGVzaXJlZFBhdGNoU2l6ZSIsImZpbmRQYXRjaFNpemVGb3JEaXZpc29ycyIsImZvdW5kIiwib3B0aW1hbFBhdGNoU2l6ZSIsImNoZWNrSW1hZ2VDb25zdHJhaW50cyIsInNoaWZ0IiwiY29tcHV0ZUltYWdlQXJlYSIsInNldENhbnZhc1NpemUiLCJfcGFyc2VDc3NEaW1lbnNpb25WYWx1ZXMiLCJkaW1lbnNpb24iLCJwYXJzZUZsb2F0IiwidW5pdCIsImluZGV4T2YiLCJfZGltZW5zaW9uc0NvbnZlcnRlcnMiLCJpbnB1dFdpZHRoIiwiaW5wdXRIZWlnaHQiLCJwYXJzZWRBcmVhIiwicGFyc2VkIiwiY2FsY3VsYXRlZCIsIl9ldmVudE5hbWVzIiwiX2V2ZW50SGFuZGxlcnMiLCJNYXAiLCJsaXN0ZW5lciIsIl9vcHRpb25zIiwiaGFzIiwic2V0IiwiY2xlYXIiLCJhcmdBcnJheSIsImhhbmRsZXJzIiwiYXBwbHkiLCJMaXZlU3RyZWFtIiwiVmlkZW9TdHJlYW0iLCJfdmlkZW8iLCJwYXVzZSIsIm9wdGlvbnMiLCJfaW5pdFNpemUiLCJlbmRlZCIsImN1cnJlbnRUaW1lIiwiaW52ZXJ0IiwibWF0cml4IiwiYTAiLCJhMSIsImEyIiwiYTMiLCJkZXRlcm1pbmFudCIsIkZsb2F0MzJBcnJheSIsInRyYW5zZm9ybVdpdGhNYXRyaXgiLCJfY29tcHV0ZUhpc3RvZ3JhbSIsImJpdHNQZXJQaXhlbCIsImJpdFNoaWZ0IiwiYnVja2V0Q291bnQiLCJoaXN0b2dyYW0iLCJJbnQzMkFycmF5IiwiX2RldGVybWluZU90c3VUaHJlc2hvbGQiLCJoaXN0IiwidmV0IiwicHgiLCJpbml0IiwiZW5kIiwibXgiLCJrIiwicDEyIiwibTEiLCJtMiIsIm0xMiIsIm1heEluZGV4IiwiaXRlbSIsImFycmF5Iiwib3RzdVRocmVzaG9sZCIsInRhcmdldFdyYXBwZXIiLCJ0YXJnZXREYXRhIiwib3V0SW1hZ2VXcmFwcGVyIiwib3V0SW1hZ2UiLCJvdXRJbWdJbmRleCIsIk1vbWVudFNpbWlsYXJpdHlUaHJlc2hvbGQiLCJCYXJjb2RlTG9jYXRvciIsIl9udW1QYXRjaGVzIiwiX2luaXRCdWZmZXJzIiwiX2luaXRDYW52YXMiLCJfY3VycmVudEltYWdlV3JhcHBlciIsIl9iaW5hcml6ZUltYWdlIiwicGF0Y2hlc0ZvdW5kIiwiX2ZpbmRQYXRjaGVzIiwibWF4TGFiZWwiLCJfcmFzdGVyaXplQW5ndWxhclNpbWlsYXJpdHkiLCJ0b3BMYWJlbHMiLCJfZmluZEJpZ2dlc3RDb25uZWN0ZWRBcmVhcyIsIl9maW5kQm94ZXMiLCJfcGF0Y2hTaXplIiwiX2JpbmFyeUltYWdlV3JhcHBlciIsIl9sYWJlbEltYWdlV3JhcHBlciIsInNrZWxldG9uSW1hZ2VEYXRhIiwiQXJyYXlCdWZmZXIiLCJfc3ViSW1hZ2VXcmFwcGVyIiwiX3NrZWxJbWFnZVdyYXBwZXIiLCJfc2tlbGV0b25pemVyIiwic2tlbGV0b25pemVyIiwic2VsZiIsImdsb2JhbCIsIl9wYXRjaExhYmVsR3JpZCIsIl9wYXRjaEdyaWQiLCJfaW1hZ2VUb1BhdGNoR3JpZCIsInVzZVdvcmtlciIsIl9iaW5hcnlDb250ZXh0IiwicGF0Y2hlcyIsImF2ZXJhZ2VSYWQiLCJfZHJhd1JlY3QiLCJpbnZlcnNlTWF0cml4IiwibWluWCIsIm1pblkiLCJtYXhYIiwibWF4WSIsInZlcnRleCIsInplcm9Cb3JkZXIiLCJzaG93IiwiX3NrZWxldG9uaXplIiwicmFzdGVyaXplciIsIlJhc3Rlcml6ZXIiLCJyYXN0ZXJSZXN1bHQiLCJyYXN0ZXJpemUiLCJvdmVybGF5IiwiY291bnQiLCJwYXRjaCIsIl9kZXNjcmliZVBhdGNoIiwibGFiZWxIaXN0Iiwic29ydCIsIl9ib3hGcm9tUGF0Y2hlcyIsImpvaW4iLCJjbHVzdGVyaXplIiwidG9wQ2x1c3RlciIsInN1YkltYWdlQXNDb3B5Iiwic2tlbGV0b25pemUiLCJtaW5Db21wb25lbnRXZWlnaHQiLCJjZWlsIiwiZWxpZ2libGVNb21lbnRzIiwibWF0Y2hpbmdNb21lbnRzIiwiX3NpbWlsYXJNb21lbnRzIiwiY3VycmVudEluZGV4IiwiY3VycmVudFBhdGNoIiwiU2VhcmNoRGlyZWN0aW9ucyIsImRpcmVjdGlvbiIsIk51bWJlciIsIk1BWF9WQUxVRSIsIl90cmFjZSIsIl9ub3RZZXRQcm9jZXNzZWQiLCJzdHJva2VSZWN0IiwiRWRnZUxhYmVsIiwiQ29udG91ckRpcmVjdGlvbiIsImxhYmVsV3JhcHBlciIsIl9pbWFnZURhdGEiLCJfbGFiZWxEYXRhIiwiX3RyYWNlciIsIlRyYWNlciIsImRlcHRoTGFiZWwiLCJjb2xvck1hcCIsImNjIiwic2MiLCJjb25uZWN0ZWRDb3VudCIsImN5IiwibGFiZWxJbmRleCIsImJjIiwiY3giLCJsYyIsImNvbnRvdXJUcmFjaW5nIiwiT3V0c2lkZSIsIkNXIiwiZmlyc3RWZXJ0ZXgiLCJuZXh0UGVlciIsImluc2lkZUNvbnRvdXJzIiwicHJldmlvdXNQZWVyIiwiSW5zaWRlIiwiQ0NXIiwiZmlyc3RDb250b3VyIiwiY3R4IiwicHEiLCJpcSIsInEiLCJVbmtub3duIiwibmV4dCIsIlNrZWxldG9uaXplciIsInN0ZGxpYiIsImZvcmVpZ24iLCJpbXVsIiwiZXJvZGUiLCJpbkltYWdlUHRyIiwib3V0SW1hZ2VQdHIiLCJ1IiwieVN0YXJ0MSIsInlTdGFydDIiLCJ4U3RhcnQxIiwieFN0YXJ0MiIsInN1YnRyYWN0IiwiYUltYWdlUHRyIiwiYkltYWdlUHRyIiwiYml0d2lzZU9yIiwiY291bnROb25aZXJvIiwiaW1hZ2VQdHIiLCJkaWxhdGUiLCJtZW1jcHkiLCJzcmNJbWFnZVB0ciIsImRzdEltYWdlUHRyIiwic3ViSW1hZ2VQdHIiLCJlcm9kZWRJbWFnZVB0ciIsInRlbXBJbWFnZVB0ciIsInNrZWxJbWFnZVB0ciIsImRvbmUiLCJlZGdlTGFiZWwiLCJzeSIsInN4IiwiRnYiLCJ0cmFjZSIsIkN2IiwibGRpciIsIlAiLCJfX2ZhY3RvcnlTb3VyY2VfXyIsIlF1YWdnYSIsInJlc3VsdENhbGxiYWNrIiwicXVhZ2dhIiwiY2FsbCIsImNiIiwiX29uVUlUaHJlYWQiLCJfY2FudmFzQ29udGFpbmVyIiwiZG9tIiwiX3dvcmtlclBvb2wiLCJfaW5pdGlhbGl6ZURhdGEiLCJfaW5pdElucHV0U3RyZWFtIiwiX3N0YXJ0Q29udGludW91c1VwZGF0ZSIsIl91cGRhdGUiLCJfc3RvcHBlZCIsIl9hZGp1c3RXb3JrZXJQb29sIiwicmVsZWFzZSIsImNsZWFyRXZlbnRIYW5kbGVycyIsInVuc3Vic2NyaWJlIiwiX2RlY29kZXIiLCJzZXRSZWFkZXJzIiwid29ya2VyIiwicG9zdE1lc3NhZ2UiLCJjbWQiLCJyZXN1bHRDb2xsZWN0b3IiLCJhZGRSZXN1bHQiLCJfcmVzdWx0Q29sbGVjdG9yIiwidmlld3BvcnQiLCJfZ2V0Vmlld1BvcnQiLCJyZXF1ZXN0IiwiZXJyIiwiX2NhblJlY29yZCIsInRhcmdldCIsIkhUTUxFbGVtZW50Iiwic2VsZWN0b3IiLCJfZnJhbWVHcmFiYmVyIiwiY2xlYXJGaXgiLCJfYm94U2l6ZSIsIl9sb2NhdG9yIiwicG9seWdvbiIsImJhcmNvZGUiLCJfdHJhbnNmb3JtUmVzdWx0IiwiX3RyYW5zZm9ybSIsInJlc3VsdFRvUHVibGlzaCIsIl9hZGRSZXN1bHQiLCJwdWJsaXNoIiwiX2hhc0NvZGVSZXN1bHQiLCJfZ2V0Qm91bmRpbmdCb3hlcyIsImRlY29kZUZyb21Cb3VuZGluZ0JveGVzIiwiX3B1Ymxpc2hSZXN1bHQiLCJhdmFpbGFibGVXb3JrZXIiLCJ3b3JrZXJUaHJlYWQiLCJidXN5IiwiYXR0YWNoRGF0YSIsImdyYWIiLCJfbG9jYXRlQW5kRGVjb2RlIiwiZGVsYXkiLCJmcmVxdWVuY3kiLCJ0aGF0IiwidGltZXN0YW1wIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicGVyZm9ybWFuY2UiLCJub3ciLCJibG9iVVJMIiwiX2dlbmVyYXRlV29ya2VyQmxvYiIsIldvcmtlciIsIm9ubWVzc2FnZSIsIlVSTCIsInJldm9rZU9iamVjdFVSTCIsIm1lc3NhZ2UiLCJmYWN0b3J5Iiwib3JpZ2luIiwib25Qcm9jZXNzZWQiLCJibG9iIiwiQmxvYiIsIl93b3JrZXJJbnRlcmZhY2UiLCJ0b1N0cmluZyIsImNyZWF0ZU9iamVjdFVSTCIsImNhcGFjaXR5IiwiaW5jcmVhc2VCeSIsInRlcm1pbmF0ZSIsIl9pbml0V29ya2VyIiwiTiIsIlciLCJTVEFSVF9QQVRURVJOIiwiU1RPUF9QQVRURVJOIiwiQ09ERV9QQVRURVJOIiwic3RhcnRQYXR0ZXJuTGVuZ3RoIiwiVHdvT2ZGaXZlUmVhZGVyIiwiX2JhclNwYWNlUmF0aW8iLCJfZm9ybWF0IiwiX3NpbmdsZUNvZGVFcnJvciIsIl9hdmVyYWdlQ29kZUVycm9yIiwic3RhcnRJbmZvIiwiX2ZpbmRTdGFydCIsImVuZEluZm8iLCJfZmluZEVuZCIsImNvdW50ZXJzIiwiX2ZpbGxDb3VudGVycyIsImRlY29kZWRDb2RlcyIsImNvZGUiLCJfZGVjb2RlUGF5bG9hZCIsIl9uZXh0U2V0IiwiX3JvdyIsIm5hcnJvd0JhcldpZHRoIiwiX2ZpbmRQYXR0ZXJuIiwibGVhZGluZ1doaXRlc3BhY2VTdGFydCIsIl9tYXRjaFJhbmdlIiwidHJhaWxpbmdXaGl0ZXNwYWNlRW5kIiwicmV2ZXJzZSIsIl92ZXJpZnlUcmFpbGluZ1doaXRlc3BhY2UiLCJjb3VudGVyIiwiYmVzdE1hdGNoIiwiX21hdGNoUGF0dGVybiIsIkFWRVJBR0VfQ09ERV9FUlJPUiIsImNvdW50ZXJMZW5ndGgiLCJfZGVjb2RlQ29kZSIsIkJhcmNvZGVSZWFkZXIiLCJCYXJjb2RlRGlyZWN0aW9uIiwiU3RhcnROb3RGb3VuZEV4Y2VwdGlvbiIsIkNvZGVOb3RGb3VuZEV4Y2VwdGlvbiIsIlBhdHRlcm5Ob3RGb3VuZEV4Y2VwdGlvbiIsImlzV2hpdGUiLCJ0cnlIYXJkZXIiLCJlcHNpbG9uIiwiY291bnRlclBvcyIsIm1heFNpbmdsZUVycm9yIiwibW9kdWxvIiwiU0lOR0xFX0NPREVfRVJST1IiLCJiYXJXaWR0aCIsInNjYWxlZCIsInNpbmdsZUVycm9yIiwiY29ycmVjdGlvbiIsImluZGljZXMiLCJkZWNvZGUiLCJSZXZlcnNlIiwiRm9yd2FyZCIsIm51bUNvdW50ZXJzIiwiQUxQSEFCRVRIX1NUUklORyIsIkFMUEhBQkVUIiwiQ0hBUkFDVEVSX0VOQ09ESU5HUyIsIlNUQVJUX0VORCIsIk1JTl9FTkNPREVEX0NIQVJTIiwiTUFYX0FDQ0VQVEFCTEUiLCJQQURESU5HIiwiQ29kYWJhclJlYWRlciIsIl9jb3VudGVycyIsIl9uZXh0VW5zZXQiLCJuZXh0U3RhcnQiLCJzdGFydENvdW50ZXIiLCJfdG9QYXR0ZXJuIiwiZGVjb2RlZENoYXIiLCJfcGF0dGVyblRvQ2hhciIsIl92ZXJpZnlXaGl0ZXNwYWNlIiwiX3ZhbGlkYXRlUmVzdWx0IiwiX3N1bUNvdW50ZXJzIiwiZW5kQ291bnRlciIsIl9jYWxjdWxhdGVQYXR0ZXJuTGVuZ3RoIiwiY2F0ZWdvcml6YXRpb24iLCJzcGFjZSIsIm5hcnJvdyIsImNvdW50cyIsIndpZGUiLCJiYXIiLCJfY2hhclRvUGF0dGVybiIsImNhdCIsImZsb29yIiwiY2hhckNvZGUiLCJfdGhyZXNob2xkUmVzdWx0UGF0dGVybiIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsImJhclRocmVzaG9sZCIsIl9jb21wdXRlQWx0ZXJuYXRpbmdUaHJlc2hvbGQiLCJzcGFjZVRocmVzaG9sZCIsImJpdG1hc2siLCJDT0RFX1NISUZUIiwiQ09ERV9DIiwiQ09ERV9CIiwiQ09ERV9BIiwiU1RBUlRfQ09ERV9BIiwiU1RBUlRfQ09ERV9CIiwiU1RBUlRfQ09ERV9DIiwiU1RPUF9DT0RFIiwiTU9EVUxFX0lORElDRVMiLCJDb2RlMTI4UmVhZGVyIiwiX2NvcnJlY3QiLCJleHBlY3RlZCIsIl9jYWxjdWxhdGVDb3JyZWN0aW9uIiwiX2NvcnJlY3RCYXJzIiwibXVsdGlwbGllciIsImNoZWNrc3VtIiwiY29kZXNldCIsInJhd1Jlc3VsdCIsInNoaWZ0TmV4dCIsInJlbW92ZUxhc3RDaGFyYWN0ZXIiLCJub3JtYWxpemVkIiwic3VtTm9ybWFsaXplZCIsInN1bUV4cGVjdGVkIiwiQVNURVJJU0siLCJVaW50MTZBcnJheSIsIkNvZGUzOVJlYWRlciIsImxhc3RTdGFydCIsIl90b0NvdW50ZXJzIiwicG9wIiwicGF0dGVyblNpemUiLCJtaW5XaWR0aCIsIm1heE5hcnJvd1dpZHRoIiwibnVtV2lkZUJhcnMiLCJ3aWRlQmFyV2lkdGgiLCJfZmluZE5leHRXaWR0aCIsInBhdHRlcm5TdGFydCIsIndoaXRlU3BhY2VNdXN0U3RhcnQiLCJDb2RlMzlWSU5SZWFkZXIiLCJyZXBsYWNlIiwiX2NoZWNrQ2hlY2tzdW0iLCJDb2RlOTNSZWFkZXIiLCJfdmVyaWZ5RW5kIiwiX3ZlcmlmeUNoZWNrc3VtcyIsIl9kZWNvZGVFeHRlbmRlZCIsInJvdW5kIiwiY2hhckFycmF5IiwibmV4dENoYXIiLCJuZXh0Q2hhckNvZGUiLCJfbWF0Y2hDaGVja0NoYXIiLCJtYXhXZWlnaHQiLCJhcnJheVRvQ2hlY2siLCJ3ZWlnaHRlZFN1bXMiLCJ3ZWlnaHQiLCJjaGVja0NoYXIiLCJFQU4yUmVhZGVyIiwicm93IiwiY29kZUZyZXF1ZW5jeSIsIkNPREVfR19TVEFSVCIsInBhcnNlSW50IiwiRUFOUmVhZGVyIiwiRUFONVJlYWRlciIsIl9leHRlbnNpb25DaGVja3N1bSIsIl9kZXRlcm1pbmVDaGVja0RpZ2l0IiwiQ0hFQ0tfRElHSVRfRU5DT0RJTkdTIiwiRUFOOFJlYWRlciIsIk1JRERMRV9QQVRURVJOIiwiRVhURU5TSU9OX1NUQVJUX1BBVFRFUk4iLCJDT0RFX0ZSRVFVRU5DWSIsImNvZGVyYW5nZSIsImZpcnN0RGlnaXQiLCJfY2FsY3VsYXRlRmlyc3REaWdpdCIsInJlc3VsdEluZm8iLCJfY2hlY2tzdW0iLCJfZGVjb2RlRXh0ZW5zaW9ucyIsImxhc3RDb2RlIiwiTUFYX0NPUlJFQ1RJT05fRkFDVE9SIiwiSTJvZjVSZWFkZXIiLCJub3JtYWxpemVCYXJTcGFjZVdpZHRoIiwiY291bnRlclN1bSIsImNvZGVTdW0iLCJjb3JyZWN0aW9uUmF0aW8iLCJjb3JyZWN0aW9uUmF0aW9JbnZlcnNlIiwiY291bnRlcjAiLCJjb3VudGVyMSIsImNvZGUwIiwiY29kZTEiLCJjb2RlXzEyOF9yZWFkZXIiLCJlYW5fcmVhZGVyIiwiZWFuXzVfcmVhZGVyIiwiZWFuXzJfcmVhZGVyIiwiZWFuXzhfcmVhZGVyIiwiY29kZV8zOV9yZWFkZXIiLCJjb2RlXzM5X3Zpbl9yZWFkZXIiLCJjb2RhYmFyX3JlYWRlciIsInVwY19yZWFkZXIiLCJVUENSZWFkZXIiLCJ1cGNfZV9yZWFkZXIiLCJVUENFUmVhZGVyIiwiaTJvZjVfcmVhZGVyIiwiY29kZV85M19yZWFkZXIiLCJfZGV0ZXJtaW5lUGFyaXR5IiwibnJTeXN0ZW0iLCJsYXN0RGlnaXQiLCJ1cGNhIiwiX2NvbnZlcnRUb1VQQ0EiLCJjaGFyQXQiLCJzdWJzdHJpbmciXSwibWFwcGluZ3MiOiI7O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsVztBQ1ZBO0FB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O0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBLHdDQUF3QyxXQUFXO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFD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QU0sQ0FBQ3FwQixJQUFQLEdBQWNycEIsTUFBTSxDQUFDcXBCLElBQVAsQ0FBWXFMLFNBQVosQ0FBc0IsQ0FBdEIsQ0FBZDtBQUNBLGVBQU8xMEIsTUFBUDtBQUNIOztBQUVELGFBQU8sSUFBUDtBQUNIO0FBaEJMOztBQUFBO0FBQUEsRUFBK0IyeEIscURBQS9CLEUiLCJmaWxlIjoicXVhZ2dhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4oZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuICAgIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KGZhY3RvcnkudG9TdHJpbmcoKSkuZGVmYXVsdDtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuICAgICAgICBleHBvcnRzW1wiUXVhZ2dhXCJdID0gZmFjdG9yeShmYWN0b3J5LnRvU3RyaW5nKCkpLmRlZmF1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcm9vdFtcIlF1YWdnYVwiXSA9IGZhY3RvcnkoZmFjdG9yeS50b1N0cmluZygpKS5kZWZhdWx0O1xuICAgIH1cbn0pKHRoaXMsIGZ1bmN0aW9uKF9fZmFjdG9yeVNvdXJjZV9fKSB7XG4gICAgcmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9xdWFnZ2EudHNcIik7XG4iLCJmdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgYXJyMltpXSA9IGFycltpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyMjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhvdXRIb2xlczsiLCJmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQ7IiwiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FzeW5jVG9HZW5lcmF0b3I7IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2s7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzczsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7IiwidmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vZ2V0UHJvdG90eXBlT2ZcIik7XG5cbnZhciBzdXBlclByb3BCYXNlID0gcmVxdWlyZShcIi4vc3VwZXJQcm9wQmFzZVwiKTtcblxuZnVuY3Rpb24gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgIT09IFwidW5kZWZpbmVkXCIgJiYgUmVmbGVjdC5nZXQpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9nZXQgPSBSZWZsZWN0LmdldDtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9nZXQgPSBmdW5jdGlvbiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gICAgICB2YXIgYmFzZSA9IHN1cGVyUHJvcEJhc2UodGFyZ2V0LCBwcm9wZXJ0eSk7XG4gICAgICBpZiAoIWJhc2UpIHJldHVybjtcbiAgICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihiYXNlLCBwcm9wZXJ0eSk7XG5cbiAgICAgIGlmIChkZXNjLmdldCkge1xuICAgICAgICByZXR1cm4gZGVzYy5nZXQuY2FsbChyZWNlaXZlcik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkZXNjLnZhbHVlO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlciB8fCB0YXJnZXQpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9nZXQ7IiwiZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mOyIsInZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL3NldFByb3RvdHlwZU9mXCIpO1xuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2luaGVyaXRzOyIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaXRlcikgPT09IFwiW29iamVjdCBBcmd1bWVudHNdXCIpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXk7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2VcIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlU3ByZWFkOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG52YXIgYXNzZXJ0VGhpc0luaXRpYWxpemVkID0gcmVxdWlyZShcIi4vYXNzZXJ0VGhpc0luaXRpYWxpemVkXCIpO1xuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH1cblxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuOyIsImZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mOyIsInZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL2dldFByb3RvdHlwZU9mXCIpO1xuXG5mdW5jdGlvbiBfc3VwZXJQcm9wQmFzZShvYmplY3QsIHByb3BlcnR5KSB7XG4gIHdoaWxlICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpKSB7XG4gICAgb2JqZWN0ID0gZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTtcbiAgICBpZiAob2JqZWN0ID09PSBudWxsKSBicmVhaztcbiAgfVxuXG4gIHJldHVybiBvYmplY3Q7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3N1cGVyUHJvcEJhc2U7IiwidmFyIGFycmF5V2l0aG91dEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRob3V0SG9sZXNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXlcIik7XG5cbnZhciBub25JdGVyYWJsZVNwcmVhZCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlU3ByZWFkXCIpO1xuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3RvQ29uc3VtYWJsZUFycmF5OyIsImZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZjIgPSBmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YyID0gZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mMihvYmopOyB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgX3R5cGVvZjIoU3ltYm9sLml0ZXJhdG9yKSA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gX3R5cGVvZjIob2JqKTtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogX3R5cGVvZjIob2JqKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbi8vIFRoaXMgbWV0aG9kIG9mIG9idGFpbmluZyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdCBuZWVkcyB0byBiZVxuLy8ga2VwdCBpZGVudGljYWwgdG8gdGhlIHdheSBpdCBpcyBvYnRhaW5lZCBpbiBydW50aW1lLmpzXG52YXIgZyA9IChmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMgfHwgKHR5cGVvZiBzZWxmID09PSBcIm9iamVjdFwiICYmIHNlbGYpO1xufSkoKSB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG5cbi8vIFVzZSBgZ2V0T3duUHJvcGVydHlOYW1lc2AgYmVjYXVzZSBub3QgYWxsIGJyb3dzZXJzIHN1cHBvcnQgY2FsbGluZ1xuLy8gYGhhc093blByb3BlcnR5YCBvbiB0aGUgZ2xvYmFsIGBzZWxmYCBvYmplY3QgaW4gYSB3b3JrZXIuIFNlZSAjMTgzLlxudmFyIGhhZFJ1bnRpbWUgPSBnLnJlZ2VuZXJhdG9yUnVudGltZSAmJlxuICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhnKS5pbmRleE9mKFwicmVnZW5lcmF0b3JSdW50aW1lXCIpID49IDA7XG5cbi8vIFNhdmUgdGhlIG9sZCByZWdlbmVyYXRvclJ1bnRpbWUgaW4gY2FzZSBpdCBuZWVkcyB0byBiZSByZXN0b3JlZCBsYXRlci5cbnZhciBvbGRSdW50aW1lID0gaGFkUnVudGltZSAmJiBnLnJlZ2VuZXJhdG9yUnVudGltZTtcblxuLy8gRm9yY2UgcmVldmFsdXRhdGlvbiBvZiBydW50aW1lLmpzLlxuZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSB1bmRlZmluZWQ7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vcnVudGltZVwiKTtcblxuaWYgKGhhZFJ1bnRpbWUpIHtcbiAgLy8gUmVzdG9yZSB0aGUgb3JpZ2luYWwgcnVudGltZS5cbiAgZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSBvbGRSdW50aW1lO1xufSBlbHNlIHtcbiAgLy8gUmVtb3ZlIHRoZSBnbG9iYWwgcHJvcGVydHkgYWRkZWQgYnkgcnVudGltZS5qcy5cbiAgdHJ5IHtcbiAgICBkZWxldGUgZy5yZWdlbmVyYXRvclJ1bnRpbWU7XG4gIH0gY2F0Y2goZSkge1xuICAgIGcucmVnZW5lcmF0b3JSdW50aW1lID0gdW5kZWZpbmVkO1xuICB9XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbiEoZnVuY3Rpb24oZ2xvYmFsKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgdmFyIGluTW9kdWxlID0gdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIjtcbiAgdmFyIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lO1xuICBpZiAocnVudGltZSkge1xuICAgIGlmIChpbk1vZHVsZSkge1xuICAgICAgLy8gSWYgcmVnZW5lcmF0b3JSdW50aW1lIGlzIGRlZmluZWQgZ2xvYmFsbHkgYW5kIHdlJ3JlIGluIGEgbW9kdWxlLFxuICAgICAgLy8gbWFrZSB0aGUgZXhwb3J0cyBvYmplY3QgaWRlbnRpY2FsIHRvIHJlZ2VuZXJhdG9yUnVudGltZS5cbiAgICAgIG1vZHVsZS5leHBvcnRzID0gcnVudGltZTtcbiAgICB9XG4gICAgLy8gRG9uJ3QgYm90aGVyIGV2YWx1YXRpbmcgdGhlIHJlc3Qgb2YgdGhpcyBmaWxlIGlmIHRoZSBydW50aW1lIHdhc1xuICAgIC8vIGFscmVhZHkgZGVmaW5lZCBnbG9iYWxseS5cbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBEZWZpbmUgdGhlIHJ1bnRpbWUgZ2xvYmFsbHkgKGFzIGV4cGVjdGVkIGJ5IGdlbmVyYXRlZCBjb2RlKSBhcyBlaXRoZXJcbiAgLy8gbW9kdWxlLmV4cG9ydHMgKGlmIHdlJ3JlIGluIGEgbW9kdWxlKSBvciBhIG5ldywgZW1wdHkgb2JqZWN0LlxuICBydW50aW1lID0gZ2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZSA9IGluTW9kdWxlID8gbW9kdWxlLmV4cG9ydHMgOiB7fTtcblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBydW50aW1lLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZVt0b1N0cmluZ1RhZ1N5bWJvbF0gPVxuICAgIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIHByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIHJ1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIHJ1bnRpbWUubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgaWYgKCEodG9TdHJpbmdUYWdTeW1ib2wgaW4gZ2VuRnVuKSkge1xuICAgICAgICBnZW5GdW5bdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuICAgICAgfVxuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBydW50aW1lLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgcnVudGltZS5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgcnVudGltZS5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpXG4gICAgKTtcblxuICAgIHJldHVybiBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgR3BbdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JcIjtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBydW50aW1lLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgcnVudGltZS52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcbn0pKFxuICAvLyBJbiBzbG9wcHkgbW9kZSwgdW5ib3VuZCBgdGhpc2AgcmVmZXJzIHRvIHRoZSBnbG9iYWwgb2JqZWN0LCBmYWxsYmFjayB0b1xuICAvLyBGdW5jdGlvbiBjb25zdHJ1Y3RvciBpZiB3ZSdyZSBpbiBnbG9iYWwgc3RyaWN0IG1vZGUuIFRoYXQgaXMgc2FkbHkgYSBmb3JtXG4gIC8vIG9mIGluZGlyZWN0IGV2YWwgd2hpY2ggdmlvbGF0ZXMgQ29udGVudCBTZWN1cml0eSBQb2xpY3kuXG4gIChmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcyB8fCAodHlwZW9mIHNlbGYgPT09IFwib2JqZWN0XCIgJiYgc2VsZik7XG4gIH0pKCkgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpXG4pO1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiaW1wb3J0IHsgTW9tZW50IH0gZnJvbSAnLi9tb21lbnQnO1xuXG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsdXN0ZXIgZm9yIGdyb3VwaW5nIHNpbWlsYXIgb3JpZW50YXRpb25zIG9mIG1vbWVudHNcbiAqL1xuZXhwb3J0IGNsYXNzIENsdXN0ZXIge1xuICAgIHByaXZhdGUgX3RocmVzaG9sZDogbnVtYmVyO1xuICAgIHByaXZhdGUgX21vbWVudHM6IEFycmF5PE1vbWVudD47XG4gICAgcHJpdmF0ZSBfY2VudGVyOiBNb21lbnQ7XG5cbiAgICBzdGF0aWMgY2x1c3Rlcml6ZShtb21lbnRzOiBBcnJheTxNb21lbnQ+LCB0aHJlc2hvbGQ6IG51bWJlcik6IEFycmF5PENsdXN0ZXI+IHtcbiAgICAgICAgY29uc3QgY2x1c3RlcnMgPSBuZXcgQXJyYXk8Q2x1c3Rlcj4oKTtcblxuICAgICAgICBtb21lbnRzLmZvckVhY2gobW9tZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoaW5nQ2x1c3RlciA9IGNsdXN0ZXJzLmZpbmQoY2x1c3RlciA9PiBjbHVzdGVyLmZpdHMobW9tZW50KSk7XG5cbiAgICAgICAgICAgIGlmIChtYXRjaGluZ0NsdXN0ZXIpIHtcbiAgICAgICAgICAgICAgICBtYXRjaGluZ0NsdXN0ZXIuYWRkKG1vbWVudCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNsdXN0ZXJzLnB1c2gobmV3IENsdXN0ZXIodGhyZXNob2xkLCBtb21lbnQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGNsdXN0ZXJzO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHRocmVzaG9sZDogbnVtYmVyLCBtb21lbnQ6IE1vbWVudCkge1xuICAgICAgICB0aGlzLl90aHJlc2hvbGQgPSB0aHJlc2hvbGQ7XG4gICAgICAgIHRoaXMuX21vbWVudHMgPSBuZXcgQXJyYXk8TW9tZW50PigpO1xuICAgICAgICB0aGlzLl9jZW50ZXIgPSB7XG4gICAgICAgICAgICByYWQ6IDAsXG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogMFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChtb21lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkKG1vbWVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGQocG9pbnQ6IE1vbWVudCkge1xuICAgICAgICB0aGlzLl9tb21lbnRzLnB1c2gocG9pbnQpO1xuXG4gICAgICAgIC8vIFVwZGF0ZSBjZW50ZXJcbiAgICAgICAgdGhpcy5fY2VudGVyLnJhZCA9IHRoaXMuX21vbWVudHMucmVkdWNlKChzdW0sIHApID0+IHN1bSArIHAucmFkLCAwKSAvIHRoaXMuX21vbWVudHMubGVuZ3RoO1xuICAgICAgICB0aGlzLl9jZW50ZXIueCA9IE1hdGguY29zKHRoaXMuX2NlbnRlci5yYWQpO1xuICAgICAgICB0aGlzLl9jZW50ZXIueSA9IE1hdGguc2luKHRoaXMuX2NlbnRlci5yYWQpO1xuICAgIH1cblxuICAgIGZpdHMobW9tZW50OiBNb21lbnQpOiBib29sZWFuIHtcbiAgICAgICAgLy8gY2hlY2sgY29zaW5lIHNpbWlsYXJpdHkgdG8gY2VudGVyLWFuZ2xlXG4gICAgICAgIGNvbnN0IHNpbWlsYXJpdHkgPSBNYXRoLmFicyhtb21lbnQueCAqIHRoaXMuX2NlbnRlci54ICsgbW9tZW50LnkgKiB0aGlzLl9jZW50ZXIueSk7XG4gICAgICAgIHJldHVybiBzaW1pbGFyaXR5ID4gdGhpcy5fdGhyZXNob2xkO1xuICAgIH1cblxuICAgIGdldCBtb21lbnRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbW9tZW50cztcbiAgICB9XG59XG4iLCJleHBvcnQgaW50ZXJmYWNlIEV2ZW50Q2FsbGJhY2sge1xuICAgIChkYXRhOiBhbnkpOiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEV2ZW50U3Vic2NyaXB0aW9uIHtcbiAgICBjYWxsYmFjazogRXZlbnRDYWxsYmFjaztcbiAgICBhc3luYz86IGJvb2xlYW47XG4gICAgb25jZT86IGJvb2xlYW47XG59XG5cbmludGVyZmFjZSBFdmVudEl0ZW0ge1xuICAgIHN1YnNjcmlwdGlvbnM6IEFycmF5PEV2ZW50U3Vic2NyaXB0aW9uPlxufVxuXG5sZXQgZXZlbnRzOiB7IFtuYW1lOiBzdHJpbmddOiBFdmVudEl0ZW0gfSA9IHt9O1xuXG5leHBvcnQgY2xhc3MgRXZlbnRzIHtcbiAgICBzdGF0aWMgc3Vic2NyaWJlKGV2ZW50OiBzdHJpbmcsIGNhbGxiYWNrOiBFdmVudFN1YnNjcmlwdGlvbiB8IEV2ZW50Q2FsbGJhY2ssIGFzeW5jPzogYm9vbGVhbikge1xuICAgICAgICBsZXQgc3Vic2NyaXB0aW9uOiBFdmVudFN1YnNjcmlwdGlvbjtcblxuICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBzdWJzY3JpcHRpb24gPSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2ssXG4gICAgICAgICAgICAgICAgYXN5bmNcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdWJzY3JpcHRpb24gPSBjYWxsYmFjaztcbiAgICAgICAgICAgIGlmICghc3Vic2NyaXB0aW9uLmNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgJ0NhbGxiYWNrIHdhcyBub3Qgc3BlY2lmaWVkIG9uIG9wdGlvbnMnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZ2V0RXZlbnQoZXZlbnQpLnN1YnNjcmlwdGlvbnMucHVzaChzdWJzY3JpcHRpb24pO1xuICAgIH1cblxuICAgIHN0YXRpYyBwdWJsaXNoKHR5cGU6IHN0cmluZywgZGF0YT86IGFueSkge1xuICAgICAgICBjb25zdCBldmVudEl0ZW0gPSBnZXRFdmVudCh0eXBlKTtcbiAgICAgICAgY29uc3Qgc3Vic2NyaXB0aW9ucyA9IGV2ZW50SXRlbS5zdWJzY3JpcHRpb25zO1xuXG4gICAgICAgIC8vIFB1Ymxpc2ggb25lLXRpbWUgc3Vic2NyaXB0aW9uc1xuICAgICAgICBzdWJzY3JpcHRpb25zLmZpbHRlcigoeyBvbmNlIH0pID0+ICEhb25jZSkuZm9yRWFjaChzdWJzY3JpcHRpb24gPT4gcHVibGlzaFN1YnNjcmlwdGlvbihzdWJzY3JpcHRpb24sIGRhdGEpKTtcblxuICAgICAgICAvLyByZW1vdmUgdGhlbSBmcm9tIHRoZSBzdWJzY3JpcHRpb25cbiAgICAgICAgZXZlbnRJdGVtLnN1YnNjcmlwdGlvbnMgPSBzdWJzY3JpcHRpb25zLmZpbHRlcigoeyBvbmNlIH0pID0+ICFvbmNlKTtcblxuICAgICAgICAvLyBwdWJsaXNoIHRoZSByZXN0XG4gICAgICAgIGV2ZW50SXRlbS5zdWJzY3JpcHRpb25zLmZvckVhY2goc3Vic2NyaXB0aW9uID0+IHB1Ymxpc2hTdWJzY3JpcHRpb24oc3Vic2NyaXB0aW9uLCBkYXRhKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIG9uY2UoZXZlbnQ6IHN0cmluZywgY2FsbGJhY2s6IEV2ZW50Q2FsbGJhY2ssIGFzeW5jPzogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICBFdmVudHMuc3Vic2NyaWJlKGV2ZW50LCB7IGNhbGxiYWNrLCBhc3luYywgb25jZTogdHJ1ZSB9KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgdW5zdWJzY3JpYmUoZXZlbnROYW1lPzogc3RyaW5nLCBjYWxsYmFjaz86IEV2ZW50Q2FsbGJhY2spIHtcbiAgICAgICAgaWYgKGV2ZW50TmFtZSkge1xuICAgICAgICAgICAgY29uc3QgZXZlbnQgPSBnZXRFdmVudChldmVudE5hbWUpO1xuICAgICAgICAgICAgaWYgKGV2ZW50ICYmIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQuc3Vic2NyaXB0aW9ucyA9IGV2ZW50LnN1YnNjcmlwdGlvbnMuZmlsdGVyKHN1YnNjcmlwdGlvbiA9PiBzdWJzY3JpcHRpb24uY2FsbGJhY2sgIT09IGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZXZlbnQuc3Vic2NyaXB0aW9ucyA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXZlbnRzID0ge307XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldEV2ZW50KGV2ZW50TmFtZTogc3RyaW5nKTogRXZlbnRJdGVtIHtcbiAgICBpZiAoIWV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICAgIGV2ZW50c1tldmVudE5hbWVdID0ge1xuICAgICAgICAgICAgc3Vic2NyaXB0aW9uczogW11cbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIGV2ZW50c1tldmVudE5hbWVdO1xufVxuXG5mdW5jdGlvbiBwdWJsaXNoU3Vic2NyaXB0aW9uKHN1YnNjcmlwdGlvbjogRXZlbnRTdWJzY3JpcHRpb24sIGRhdGE6IGFueSk6IHZvaWQge1xuICAgIGlmIChzdWJzY3JpcHRpb24uYXN5bmMpIHtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzdWJzY3JpcHRpb24uY2FsbGJhY2soZGF0YSk7XG4gICAgICAgIH0sIDQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHN1YnNjcmlwdGlvbi5jYWxsYmFjayhkYXRhKTtcbiAgICB9XG59XG4iLCJleHBvcnQgdHlwZSBIU1YgPSBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl07XG5cbmV4cG9ydCB0eXBlIFJHQiA9IFtudW1iZXIsIG51bWJlciwgbnVtYmVyXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGhzdjJyZ2IoaHN2OiBIU1YsIHJnYj86IFJHQik6IFJHQiB7XG4gICAgY29uc3QgaCA9IGhzdlswXTtcbiAgICBjb25zdCBzID0gaHN2WzFdO1xuICAgIGNvbnN0IHYgPSBoc3ZbMl07XG4gICAgY29uc3QgYyA9IHYgKiBzO1xuICAgIGNvbnN0IHggPSBjICogKDEgLSBNYXRoLmFicygoaCAvIDYwKSAlIDIgLSAxKSk7XG4gICAgY29uc3QgbSA9IHYgLSBjO1xuICAgIGxldCByID0gMDtcbiAgICBsZXQgZyA9IDA7XG4gICAgbGV0IGIgPSAwO1xuXG4gICAgaWYgKGggPCA2MCkge1xuICAgICAgICByID0gYztcbiAgICAgICAgZyA9IHg7XG4gICAgfSBlbHNlIGlmIChoIDwgMTIwKSB7XG4gICAgICAgIHIgPSB4O1xuICAgICAgICBnID0gYztcbiAgICB9IGVsc2UgaWYgKGggPCAxODApIHtcbiAgICAgICAgZyA9IGM7XG4gICAgICAgIGIgPSB4O1xuICAgIH0gZWxzZSBpZiAoaCA8IDI0MCkge1xuICAgICAgICBnID0geDtcbiAgICAgICAgYiA9IGM7XG4gICAgfSBlbHNlIGlmIChoIDwgMzAwKSB7XG4gICAgICAgIHIgPSB4O1xuICAgICAgICBiID0gYztcbiAgICB9IGVsc2UgaWYgKGggPCAzNjApIHtcbiAgICAgICAgciA9IGM7XG4gICAgICAgIGIgPSB4O1xuICAgIH1cblxuICAgIHJnYiA9IHJnYiB8fCBbMCwgMCwgMF07XG5cbiAgICByZ2JbMF0gPSAociArIG0pICogMjU1IHwgMDtcbiAgICByZ2JbMV0gPSAoZyArIG0pICogMjU1IHwgMDtcbiAgICByZ2JbMl0gPSAoYiArIG0pICogMjU1IHwgMDtcblxuICAgIHJldHVybiByZ2I7XG59XG4iLCJpbXBvcnQgeyBQb2ludCB9IGZyb20gJy4vcG9pbnQnO1xuXG5leHBvcnQgY2xhc3MgSW1hZ2VEZWJ1ZyB7XG4gICAgc3RhdGljIGRyYXdQYXRoKHBhdGg6IEFycmF5PFBvaW50PiwgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBjb2xvcjogc3RyaW5nLCBsaW5lV2lkdGg6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAocGF0aCAmJiBwYXRoLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBjb2xvcjtcbiAgICAgICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gY29sb3I7XG4gICAgICAgICAgICBjb250ZXh0LmxpbmVXaWR0aCA9IGxpbmVXaWR0aDtcbiAgICAgICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjb250ZXh0Lm1vdmVUbyhwYXRoWzBdLngsIHBhdGhbMF0ueSk7XG4gICAgICAgICAgICBwYXRoLnNsaWNlKDEpLmZvckVhY2goKHsgeCwgeSB9KSA9PiBjb250ZXh0LmxpbmVUbyh4LCB5KSk7XG4gICAgICAgICAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgY29udGV4dC5zdHJva2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBkcmF3SW1hZ2UoaW1hZ2VEYXRhOiBVaW50OEFycmF5LCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IGNhbnZhc0RhdGEgPSBjb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGNhbnZhc0RhdGEuZGF0YTtcbiAgICAgICAgbGV0IGltYWdlSW5kZXggPSBpbWFnZURhdGEubGVuZ3RoIHwgMDtcbiAgICAgICAgbGV0IGNhbnZhc0luZGV4ID0gZGF0YS5sZW5ndGggfCAwO1xuXG4gICAgICAgIGlmIChjYW52YXNJbmRleCAvIGltYWdlSW5kZXggIT09IDQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHdoaWxlIChpbWFnZUluZGV4LS0pIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gaW1hZ2VEYXRhW2ltYWdlSW5kZXhdO1xuICAgICAgICAgICAgZGF0YVstLWNhbnZhc0luZGV4XSA9IDI1NTtcbiAgICAgICAgICAgIGRhdGFbLS1jYW52YXNJbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgICAgIGRhdGFbLS1jYW52YXNJbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgICAgIGRhdGFbLS1jYW52YXNJbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQucHV0SW1hZ2VEYXRhKGNhbnZhc0RhdGEsIDAsIDApO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IE1vbWVudCB9IGZyb20gJy4vbW9tZW50JztcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi9wb2ludCc7XG5pbXBvcnQgeyBIU1YsIGhzdjJyZ2IsIFJHQiB9IGZyb20gJy4vaHN2MnJnYic7XG5cbnR5cGUgQXJyYXlUeXBlID0gQXJyYXk8bnVtYmVyPiB8IFVpbnQ4QXJyYXkgfCBJbnQzMkFycmF5O1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBiYXNpYyBpbWFnZSBjb21iaW5pbmcgdGhlIGRhdGEgYW5kIHNpemUuXG4gKiBJbiBhZGRpdGlvbiwgc29tZSBtZXRob2RzIGZvciBtYW5pcHVsYXRpb24gYXJlIGNvbnRhaW5lZC5cbiAqL1xuZXhwb3J0IGNsYXNzIEltYWdlV3JhcHBlcjxUIGV4dGVuZHMgQXJyYXlUeXBlID0gVWludDhBcnJheT4ge1xuICAgIGRhdGE6IFQgfCBVaW50OEFycmF5O1xuICAgIHNpemU6IFBvaW50O1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHNpemUgVGhlIHNpemUgb2YgdGhlIGltYWdlIGluIHBpeGVsXG4gICAgICogQHBhcmFtIGRhdGEgSWYgZ2l2ZW4sIGEgZmxhdCBhcnJheSBjb250YWluaW5nIHRoZSBwaXhlbCBkYXRhXG4gICAgICogQHBhcmFtIGFycmF5VHlwZSBJZiBnaXZlbiwgdGhlIGRlc2lyZWQgRGF0YVR5cGUgb2YgdGhlIEFycmF5IChtYXkgYmUgdHlwZWQvbm9uLXR5cGVkKVxuICAgICAqIEBwYXJhbSBpbml0aWFsaXplIEluZGljYXRpbmcgaWYgdGhlIGFycmF5IHNob3VsZCBiZSBpbml0aWFsaXplZCBvbiBjcmVhdGlvbi5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzaXplOiBQb2ludCwgZGF0YT86IFQsIGFycmF5VHlwZT86IHsgbmV3KF86IG51bWJlcik6IFQgfCBVaW50OEFycmF5IH0sIGluaXRpYWxpemU/OiBib29sZWFuKSB7XG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgICAgdGhpcy5kYXRhID0gbmV3IChhcnJheVR5cGUgfHwgVWludDhBcnJheSkoc2l6ZS54ICogc2l6ZS55KTtcblxuICAgICAgICAgICAgaWYgKGluaXRpYWxpemUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEuZmlsbCgwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRlc3RzIGlmIGEgcG9zaXRpb24gaXMgd2l0aGluIHRoZSBpbWFnZSB3aXRoIGEgZ2l2ZW4gb2Zmc2V0XG4gICAgICogQHBhcmFtIHBvaW50IFRoZSBsb2NhdGlvbiB0byB0ZXN0XG4gICAgICogQHBhcmFtIGJvcmRlciBUaGUgcGFkZGluZyB2YWx1ZSBpbiBwaXhlbHNcbiAgICAgKiBAcmV0dXJucyB0cnVlIGlmIGxvY2F0aW9uIGluc2lkZSB0aGUgaW1hZ2UncyBib3JkZXIsIGZhbHNlIG90aGVyd2lzZVxuICAgICAqIEBzZWUgY3ZkL2ltYWdlLmhcbiAgICAgKi9cbiAgICBpbkltYWdlV2l0aEJvcmRlcihwb2ludDogUG9pbnQsIGJvcmRlcjogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAocG9pbnQueCA+PSBib3JkZXIpXG4gICAgICAgICAgICAmJiAocG9pbnQueSA+PSBib3JkZXIpXG4gICAgICAgICAgICAmJiAocG9pbnQueCA8ICh0aGlzLnNpemUueCAtIGJvcmRlcikpXG4gICAgICAgICAgICAmJiAocG9pbnQueSA8ICh0aGlzLnNpemUueSAtIGJvcmRlcikpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4ge0ltYWdlV3JhcHBlcikgYW5kIGNvcGllcyB0aGUgbmVlZGVkIHVuZGVybHlpbmcgaW1hZ2UtZGF0YSBhcmVhXG4gICAgICogQHBhcmFtIGltYWdlV3JhcHBlciBUaGUgdGFyZ2V0IHtJbWFnZVdyYXBwZXJ9IHdoZXJlIHRoZSBkYXRhIHNob3VsZCBiZSBjb3BpZWRcbiAgICAgKiBAcGFyYW0gZnJvbVggVGhlIGhvcml6b250YWwgcG9zaXRpb24gd2hlcmUgdG8gY29weSBmcm9tXG4gICAgICogQHBhcmFtIGZyb21ZIFRoZSB2ZXJ0aWNhbCBwb3NpdGlvbiB3aGVyZSB0byBjb3B5IGZyb21cbiAgICAqL1xuICAgIHN1YkltYWdlQXNDb3B5KGltYWdlV3JhcHBlcjogSW1hZ2VXcmFwcGVyLCBmcm9tWDogbnVtYmVyLCBmcm9tWTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHNpemVZID0gaW1hZ2VXcmFwcGVyLnNpemUueTtcbiAgICAgICAgY29uc3Qgc2l6ZVggPSBpbWFnZVdyYXBwZXIuc2l6ZS54O1xuXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgc2l6ZVg7IHgrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBzaXplWTsgeSsrKSB7XG4gICAgICAgICAgICAgICAgaW1hZ2VXcmFwcGVyLmRhdGFbeSAqIHNpemVYICsgeF0gPSB0aGlzLmRhdGFbKGZyb21ZICsgeSkgKiB0aGlzLnNpemUueCArIGZyb21YICsgeF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZXMgYSBnaXZlbiBwaXhlbCBwb3NpdGlvbiBmcm9tIHRoZSBpbWFnZVxuICAgICAqIEBwYXJhbSB4IFRoZSB4LXBvc2l0aW9uXG4gICAgICogQHBhcmFtIHkgVGhlIHktcG9zaXRpb25cbiAgICAgKiBAcmV0dXJucyBUaGUgZ3JheXNjYWxlIHZhbHVlIGF0IHRoZSBwaXhlbC1wb3NpdGlvblxuICAgICAqL1xuICAgIGdldCh4OiBudW1iZXIsIHk6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFbeSAqIHRoaXMuc2l6ZS54ICsgeF07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyBhIGdpdmVuIHBpeGVsIHBvc2l0aW9uIGluIHRoZSBpbWFnZVxuICAgICAqIEBwYXJhbSB4IFRoZSB4LXBvc2l0aW9uXG4gICAgICogQHBhcmFtIHkgVGhlIHktcG9zaXRpb25cbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIGdyYXlzY2FsZSB2YWx1ZSB0byBzZXRcbiAgICAgKiBAcmV0dXJucyBUaGUgSW1hZ2UgaXRzZWxmIChmb3IgcG9zc2libGUgY2hhaW5pbmcpXG4gICAgICovXG4gICAgc2V0KHg6IG51bWJlciwgeTogbnVtYmVyLCB2YWx1ZTogbnVtYmVyKTogSW1hZ2VXcmFwcGVyPFQ+IHtcbiAgICAgICAgdGhpcy5kYXRhW3kgKiB0aGlzLnNpemUueCArIHhdID0gdmFsdWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGJvcmRlciBvZiB0aGUgaW1hZ2UgKDEgcGl4ZWwpIHRvIHplcm9cbiAgICAgKi9cbiAgICB6ZXJvQm9yZGVyKCk6IHZvaWQge1xuICAgICAgICBjb25zdCB3aWR0aCA9IHRoaXMuc2l6ZS54O1xuICAgICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLnNpemUueTtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdpZHRoOyBpKyspIHtcbiAgICAgICAgICAgIGRhdGFbaV0gPSBkYXRhWyhoZWlnaHQgLSAxKSAqIHdpZHRoICsgaV0gPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBoZWlnaHQgLSAxOyBpKyspIHtcbiAgICAgICAgICAgIGRhdGFbaSAqIHdpZHRoXSA9IGRhdGFbaSAqIHdpZHRoICsgKHdpZHRoIC0gMSldID0gMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludmVydHMgYSBiaW5hcnkgaW1hZ2UgaW4gcGxhY2VcbiAgICAgKi9cbiAgICBpbnZlcnQoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGE7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IGRhdGEubGVuZ3RoOyBpLS07KSB7XG4gICAgICAgICAgICBkYXRhW2ldID0gZGF0YVtpXSA/IDAgOiAxO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbW9tZW50cyhsYWJlbENvdW50OiBudW1iZXIpOiBBcnJheTxNb21lbnQ+IHtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5zaXplLnk7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy5zaXplLng7XG4gICAgICAgIGNvbnN0IGxhYmVsU3VtID0gbmV3IEFycmF5PE1vbWVudD4oKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEFycmF5PE1vbWVudD4oKTtcblxuICAgICAgICBpZiAobGFiZWxDb3VudCA8PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsYWJlbENvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGxhYmVsU3VtW2ldID0ge1xuICAgICAgICAgICAgICAgIG0wMDogMCxcbiAgICAgICAgICAgICAgICBtMDE6IDAsXG4gICAgICAgICAgICAgICAgbTEwOiAwLFxuICAgICAgICAgICAgICAgIG0xMTogMCxcbiAgICAgICAgICAgICAgICBtMDI6IDAsXG4gICAgICAgICAgICAgICAgbTIwOiAwLFxuICAgICAgICAgICAgICAgIHRoZXRhOiAwLFxuICAgICAgICAgICAgICAgIHJhZDogMFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgaGVpZ2h0OyB5KyspIHtcbiAgICAgICAgICAgIGNvbnN0IHlzcSA9IHkgKiB5O1xuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB3aWR0aDsgeCsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsID0gdGhpcy5kYXRhW3kgKiB3aWR0aCArIHhdO1xuICAgICAgICAgICAgICAgIGlmICh2YWwgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gbGFiZWxTdW1bdmFsIC0gMV07XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsLm0wMCArPSAxO1xuICAgICAgICAgICAgICAgICAgICBsYWJlbC5tMDEgKz0geTtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwubTEwICs9IHg7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsLm0xMSArPSB4ICogeTtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwubTAyICs9IHlzcTtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwubTIwICs9IHggKiB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IFBJID0gTWF0aC5QSTtcbiAgICAgICAgY29uc3QgUElfNCA9IFBJIC8gNDtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxhYmVsQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBsYWJlbFN1bVtpXTtcbiAgICAgICAgICAgIGlmICghaXNOYU4obGFiZWwubTAwKSAmJiBsYWJlbC5tMDAgIT09IDApIHtcbiAgICAgICAgICAgICAgICBjb25zdCB4XyA9IGxhYmVsLm0xMCAvIGxhYmVsLm0wMDtcbiAgICAgICAgICAgICAgICBjb25zdCB5XyA9IGxhYmVsLm0wMSAvIGxhYmVsLm0wMDtcbiAgICAgICAgICAgICAgICBjb25zdCBtdTExID0gbGFiZWwubTExIC8gbGFiZWwubTAwIC0geF8gKiB5XztcbiAgICAgICAgICAgICAgICBjb25zdCBtdTAyID0gbGFiZWwubTAyIC8gbGFiZWwubTAwIC0geV8gKiB5XztcbiAgICAgICAgICAgICAgICBjb25zdCBtdTIwID0gbGFiZWwubTIwIC8gbGFiZWwubTAwIC0geF8gKiB4XztcbiAgICAgICAgICAgICAgICBjb25zdCB0bXAgPSAwLjUgKiBNYXRoLmF0YW4oKG11MDIgLSBtdTIwKSAvICgyICogbXUxMSkpICsgKG11MTEgPj0gMCA/IFBJXzQgOiAtUElfNCkgKyBQSTtcbiAgICAgICAgICAgICAgICBsYWJlbC50aGV0YSA9ICh0bXAgKiAxODAgLyBQSSArIDkwKSAlIDE4MCAtIDkwO1xuICAgICAgICAgICAgICAgIGlmIChsYWJlbC50aGV0YSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwudGhldGEgKz0gMTgwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsYWJlbC5yYWQgPSB0bXAgPiBQSSA/IHRtcCAtIFBJIDogdG1wO1xuICAgICAgICAgICAgICAgIGxhYmVsLnggPSBNYXRoLmNvcyh0bXApO1xuICAgICAgICAgICAgICAgIGxhYmVsLnkgPSBNYXRoLnNpbih0bXApO1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGxhYmVsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGlzcGxheXMgdGhlIHtJbWFnZVdyYXBwZXJ9IGluIGEgZ2l2ZW4gY2FudmFzXG4gICAgICogQHBhcmFtIGNvbnRleHQgVGhlIHJlbmRlcmluZyBjb250ZXh0IHRvIHdyaXRlIHRvXG4gICAgICogQHBhcmFtIHNjYWxlIFNjYWxlIHdoaWNoIGlzIGFwcGxpZWQgdG8gZWFjaCBwaXhlbC12YWx1ZVxuICAgICAqL1xuICAgIHNob3coY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBzY2FsZTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuc2l6ZS55O1xuICAgICAgICBjb25zdCB3aWR0aCA9IHRoaXMuc2l6ZS54O1xuICAgICAgICAvLyBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIC8vIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIC8vIGNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICBjb25zdCBmcmFtZSA9IGNvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICBjb25zdCBkYXRhID0gZnJhbWUuZGF0YTtcbiAgICAgICAgbGV0IGN1cnJlbnQgPSAwO1xuXG4gICAgICAgIGlmICghc2NhbGUpIHtcbiAgICAgICAgICAgIHNjYWxlID0gMS4wO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBoZWlnaHQ7IHkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB3aWR0aDsgeCsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGl4ZWwgPSB5ICogd2lkdGggKyB4O1xuICAgICAgICAgICAgICAgIGN1cnJlbnQgPSB0aGlzLmdldCh4LCB5KSAqIHNjYWxlO1xuICAgICAgICAgICAgICAgIGRhdGFbcGl4ZWwgKiA0ICsgMF0gPSBjdXJyZW50O1xuICAgICAgICAgICAgICAgIGRhdGFbcGl4ZWwgKiA0ICsgMV0gPSBjdXJyZW50O1xuICAgICAgICAgICAgICAgIGRhdGFbcGl4ZWwgKiA0ICsgMl0gPSBjdXJyZW50O1xuICAgICAgICAgICAgICAgIGRhdGFbcGl4ZWwgKiA0ICsgM10gPSAyNTU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvL2ZyYW1lLmRhdGEgPSBkYXRhO1xuICAgICAgICBjb250ZXh0LnB1dEltYWdlRGF0YShmcmFtZSwgMCwgMCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGlzcGxheXMgdGhlIHBhcnQgb2YgdGhlIGltYWdlIGluIGEgZ2l2ZW4gY2FudmFzXG4gICAgICogQHBhcmFtIGNvbnRleHQgVGhlIHJlbmRlcmluZyBjb250ZXh0IHRvIHdyaXRlIHRvXG4gICAgICogQHBhcmFtIHNjYWxlIFNjYWxlIHdoaWNoIGlzIGFwcGxpZWQgdG8gZWFjaCBwaXhlbC12YWx1ZVxuICAgICAqIEBwYXJhbSBmcm9tWCBUaGUgaG9yaXpvbnRhbCBwb3NpdGlvbiB3aGVyZSB0byBvdmVybGF5IGZyb21cbiAgICAgKiBAcGFyYW0gZnJvbVkgVGhlIHZlcnRpY2FsIHBvc2l0aW9uIHdoZXJlIHRvIG92ZXJsYXkgZnJvbVxuICAgICAqL1xuICAgIG92ZXJsYXkoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBzY2FsZTogbnVtYmVyLCBmcm9tWDogbnVtYmVyLCBmcm9tWTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGhzdjogSFNWID0gWzAsIDEsIDFdO1xuICAgICAgICBjb25zdCB3aGl0ZVJnYjogUkdCID0gWzI1NSwgMjU1LCAyNTVdO1xuICAgICAgICBjb25zdCBibGFja1JnYjogUkdCID0gWzAsIDAsIDBdO1xuICAgICAgICBjb25zdCBmcmFtZSA9IGNvbnRleHQuZ2V0SW1hZ2VEYXRhKGZyb21YLCBmcm9tWSwgdGhpcy5zaXplLngsIHRoaXMuc2l6ZS55KTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGZyYW1lLmRhdGE7XG5cbiAgICAgICAgaWYgKCFzY2FsZSB8fCBzY2FsZSA8IDAgfHwgc2NhbGUgPiAzNjApIHtcbiAgICAgICAgICAgIHNjYWxlID0gMzYwO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgbGVuZ3RoID0gdGhpcy5kYXRhLmxlbmd0aDsgbGVuZ3RoLS07KSB7XG4gICAgICAgICAgICBoc3ZbMF0gPSB0aGlzLmRhdGFbbGVuZ3RoXSAqIHNjYWxlO1xuICAgICAgICAgICAgY29uc3QgcmdiOiBSR0IgPSBoc3ZbMF0gPD0gMCA/IHdoaXRlUmdiIDogaHN2WzBdID49IDM2MCA/IGJsYWNrUmdiIDogaHN2MnJnYihoc3YpO1xuICAgICAgICAgICAgZGF0YVtsZW5ndGggKiA0ICsgMF0gPSByZ2JbMF07XG4gICAgICAgICAgICBkYXRhW2xlbmd0aCAqIDQgKyAxXSA9IHJnYlsxXTtcbiAgICAgICAgICAgIGRhdGFbbGVuZ3RoICogNCArIDJdID0gcmdiWzJdO1xuICAgICAgICAgICAgZGF0YVtsZW5ndGggKiA0ICsgM10gPSAyNTU7XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0LnB1dEltYWdlRGF0YShmcmFtZSwgZnJvbVgsIGZyb21ZKTtcbiAgICB9XG59XG4iLCJcbmV4cG9ydCBmdW5jdGlvbiBlbnVtZXJhdGVEZXZpY2VzKCk6IFByb21pc2U8QXJyYXk8TWVkaWFEZXZpY2VJbmZvPj4ge1xuICAgIGlmIChuYXZpZ2F0b3IubWVkaWFEZXZpY2VzICYmIHR5cGVvZiBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmVudW1lcmF0ZURldmljZXMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5hdmlnYXRvci5tZWRpYURldmljZXMuZW51bWVyYXRlRGV2aWNlcygpO1xuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdlbnVtZXJhdGVEZXZpY2VzIGlzIG5vdCBkZWZpbmVkJykpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXNlck1lZGlhKGNvbnN0cmFpbnRzOiBNZWRpYVN0cmVhbUNvbnN0cmFpbnRzKTogUHJvbWlzZTxNZWRpYVN0cmVhbT4ge1xuICAgIGlmIChuYXZpZ2F0b3IubWVkaWFEZXZpY2VzICYmIHR5cGVvZiBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoY29uc3RyYWludHMpO1xuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdnZXRVc2VyTWVkaWEgaXMgbm90IGRlZmluZWQnKSk7XG59XG4iLCIvKipcbiAqIFBlcmZvcm1zIGEgZGVlcCBtZXJnZSBvZiBvYmplY3RzIGFuZCByZXR1cm5zIG5ldyBvYmplY3QuXG4gKiBEb2VzIG5vdCBtb2RpZnkgb2JqZWN0cyAoaW1tdXRhYmxlKS5cbiAqIEBzZWUgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzQ4MjE4MjA5XG4gKlxuICogQHBhcmFtIG9iamVjdHMgLSBPYmplY3RzIHRvIG1lcmdlXG4gKiBAcmV0dXJucyBOZXcgb2JqZWN0IHdpdGggbWVyZ2VkIGtleS92YWx1ZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlKC4uLm9iamVjdHM6IFJlYWRvbmx5QXJyYXk8YW55Pik6IG9iamVjdCB7XG4gICAgY29uc3QgaXNPYmplY3QgPSAob2JqOiB1bmtub3duKSA9PiBvYmogJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCc7XG5cbiAgICByZXR1cm4gb2JqZWN0cy5yZWR1Y2UoKHByZXYsIG9iaikgPT4ge1xuICAgICAgICBpZiAob2JqKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwVmFsID0gcHJldltrZXldO1xuICAgICAgICAgICAgICAgIGNvbnN0IG9WYWwgPSBvYmpba2V5XTtcblxuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHBWYWwpICYmIEFycmF5LmlzQXJyYXkob1ZhbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gcHJldltrZXldID0gcFZhbC5jb25jYXQoLi4ub1ZhbCk7XG4gICAgICAgICAgICAgICAgICAgIHByZXZba2V5XSA9IG9WYWw7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpc09iamVjdChwVmFsKSAmJiBpc09iamVjdChvVmFsKSkge1xuICAgICAgICAgICAgICAgICAgICBwcmV2W2tleV0gPSBtZXJnZShwVmFsLCBvVmFsKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwcmV2W2tleV0gPSBvVmFsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHByZXY7XG4gICAgfSwge30pO1xufSIsImltcG9ydCB7IFF1YWdnYUNvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcblxuZXhwb3J0IGNvbnN0IGNvbmZpZzogUXVhZ2dhQ29uZmlnID0ge1xuICAgIGlucHV0U3RyZWFtOiB7XG4gICAgICAgIG5hbWU6ICdMaXZlJyxcbiAgICAgICAgdHlwZTogJ0xpdmVTdHJlYW0nLFxuICAgICAgICBjb25zdHJhaW50czoge1xuICAgICAgICAgICAgd2lkdGg6IDY0MCxcbiAgICAgICAgICAgIGhlaWdodDogNDgwLFxuICAgICAgICAgICAgLy8gYXNwZWN0UmF0aW86IDY0MC80ODAsIC8vIG9wdGlvbmFsXG4gICAgICAgICAgICBmYWNpbmdNb2RlOiAnZW52aXJvbm1lbnQnIC8vIG9yIHVzZXJcbiAgICAgICAgICAgIC8vIGRldmljZUlkOiAnMzg3NDU5ODM0NTczODc1OTgzNzU5ODM3NTk4MzQnXG4gICAgICAgIH0sXG4gICAgICAgIGFyZWE6IHtcbiAgICAgICAgICAgIHRvcDogJzAlJyxcbiAgICAgICAgICAgIHJpZ2h0OiAnMCUnLFxuICAgICAgICAgICAgbGVmdDogJzAlJyxcbiAgICAgICAgICAgIGJvdHRvbTogJzAlJ1xuICAgICAgICB9LFxuICAgICAgICBzaW5nbGVDaGFubmVsOiBmYWxzZSAvLyB0cnVlOiBvbmx5IHRoZSByZWQgY29sb3ItY2hhbm5lbCBpcyByZWFkXG4gICAgfSxcbiAgICBsb2NhdGU6IHRydWUsXG4gICAgbnVtT2ZXb3JrZXJzOiAwLFxuICAgIGRlY29kZXI6IHtcbiAgICAgICAgcmVhZGVyczogW1xuICAgICAgICAgICAgJ2NvZGVfMTI4X3JlYWRlcidcbiAgICAgICAgXSxcbiAgICAgICAgZGVidWc6IHtcbiAgICAgICAgICAgIGRyYXdCb3VuZGluZ0JveDogZmFsc2UsXG4gICAgICAgICAgICBzaG93RnJlcXVlbmN5OiBmYWxzZSxcbiAgICAgICAgICAgIGRyYXdTY2FubGluZTogZmFsc2UsXG4gICAgICAgICAgICBzaG93UGF0dGVybjogZmFsc2VcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbG9jYXRvcjoge1xuICAgICAgICBoYWxmU2FtcGxlOiB0cnVlLFxuICAgICAgICBwYXRjaFNpemU6ICdtZWRpdW0nLCAvLyB4LXNtYWxsLCBzbWFsbCwgbWVkaXVtLCBsYXJnZSwgeC1sYXJnZVxuICAgICAgICBkZWJ1Zzoge1xuICAgICAgICAgICAgc2hvd0NhbnZhczogZmFsc2UsXG4gICAgICAgICAgICBzaG93UGF0Y2hlczogZmFsc2UsXG4gICAgICAgICAgICBzaG93Rm91bmRQYXRjaGVzOiBmYWxzZSxcbiAgICAgICAgICAgIHNob3dTa2VsZXRvbjogZmFsc2UsXG4gICAgICAgICAgICBzaG93TGFiZWxzOiBmYWxzZSxcbiAgICAgICAgICAgIHNob3dQYXRjaExhYmVsczogZmFsc2UsXG4gICAgICAgICAgICBzaG93UmVtYWluaW5nUGF0Y2hMYWJlbHM6IGZhbHNlLFxuICAgICAgICAgICAgYm94RnJvbVBhdGNoZXM6IHtcbiAgICAgICAgICAgICAgICBzaG93VHJhbnNmb3JtZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNob3dUcmFuc2Zvcm1lZEJveDogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2hvd0JCOiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcbiIsImltcG9ydCB7IEJveCB9IGZyb20gJy4uL2NvbW1vbi9ib3gnO1xuaW1wb3J0IHsgSW1hZ2VXcmFwcGVyIH0gZnJvbSAnLi4vY29tbW9uL2ltYWdlLXdyYXBwZXInO1xuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuLi9jb21tb24vcG9pbnQnO1xuaW1wb3J0IHsgUmVhZGVycyB9IGZyb20gJy4uL3JlYWRlcic7XG5pbXBvcnQgeyBCYXJjb2RlLCBCYXJjb2RlUmVhZGVyLCBCYXJjb2RlUmVhZGVyQ29uZmlnLCBCYXJjb2RlUmVhZGVyRGVjbGFyYXRpb24sIEJhcmNvZGVSZWFkZXJUeXBlIH0gZnJvbSAnLi4vcmVhZGVyL2JhcmNvZGUtcmVhZGVyJztcbmltcG9ydCB7IEJhcmNvZGVMaW5lLCBCcmVzZW5oYW0gfSBmcm9tICcuL2JyZXNlbmhhbSc7XG5pbXBvcnQgeyBJbWFnZURlYnVnIH0gZnJvbSAnLi4vY29tbW9uL2ltYWdlLWRlYnVnJztcblxuZXhwb3J0IGludGVyZmFjZSBCYXJjb2RlRGVjb2RlckNvbmZpZyB7XG4gICAgZGVidWc/OiB7XG4gICAgICAgIGRyYXdCb3VuZGluZ0JveD86IGJvb2xlYW47XG4gICAgICAgIGRyYXdTY2FubGluZT86IGJvb2xlYW47XG4gICAgICAgIHNob3dGcmVxdWVuY3k/OiBib29sZWFuO1xuICAgICAgICBzaG93UGF0dGVybj86IGJvb2xlYW47XG4gICAgfTtcbiAgICBtdWx0aXBsZT86IGJvb2xlYW47XG4gICAgcmVhZGVycz86IEFycmF5PEJhcmNvZGVSZWFkZXJEZWNsYXJhdGlvbj47XG59XG5cbnR5cGUgTGluZSA9IFtQb2ludCwgUG9pbnRdO1xuXG5leHBvcnQgaW50ZXJmYWNlIFF1YWdnYUJhcmNvZGUge1xuICAgIGFuZ2xlPzogbnVtYmVyO1xuICAgIGJhcmNvZGVzPzogQXJyYXk8UXVhZ2dhQmFyY29kZT47IC8vIFRPT0Q6IGRlYWwgd2l0aCBtdWx0aXBsZSByZXN1bHRzXG4gICAgYm94PzogQm94O1xuICAgIGJveGVzPzogQXJyYXk8Qm94PjsgLy8gVE9PRDogZGVhbCB3aXRoIG11bHRpcGxlIHJlc3VsdHNcbiAgICBjb2RlUmVzdWx0PzogQmFyY29kZTtcbiAgICBmcmFtZT86IHN0cmluZztcbiAgICBsaW5lPzogTGluZTtcbiAgICBwYXR0ZXJuPzogQXJyYXk8bnVtYmVyPjtcbiAgICB0aHJlc2hvbGQ/OiBudW1iZXI7XG59O1xuXG5pbnRlcmZhY2UgQmFyY29kZUFuZEJhcmNvZGVMaW5lIHtcbiAgICBjb2RlUmVzdWx0OiBCYXJjb2RlO1xuICAgIGJhcmNvZGVMaW5lOiBCYXJjb2RlTGluZTtcbn1cblxuZXhwb3J0IGNsYXNzIEJhcmNvZGVEZWNvZGVyIHtcbiAgICBwcml2YXRlIF9jb25maWc6IEJhcmNvZGVEZWNvZGVyQ29uZmlnO1xuICAgIHByaXZhdGUgX2lucHV0SW1hZ2VXcmFwcGVyOiBJbWFnZVdyYXBwZXI8VWludDhBcnJheT47XG4gICAgcHJpdmF0ZSBfZnJlcXVlbmN5Q2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICBwcml2YXRlIF9wYXR0ZXJuQ2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICBwcml2YXRlIF9vdmVybGF5Q29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuICAgIHByaXZhdGUgX2JhcmNvZGVSZWFkZXJzOiBBcnJheTxCYXJjb2RlUmVhZGVyPjtcblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogQmFyY29kZURlY29kZXJDb25maWcsIGlucHV0SW1hZ2VXcmFwcGVyOiBJbWFnZVdyYXBwZXI8VWludDhBcnJheT4pIHtcbiAgICAgICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuICAgICAgICB0aGlzLl9pbnB1dEltYWdlV3JhcHBlciA9IGlucHV0SW1hZ2VXcmFwcGVyO1xuICAgICAgICB0aGlzLl9iYXJjb2RlUmVhZGVycyA9IFtdO1xuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuX2NvbmZpZy5kZWJ1ZyAmJiB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBjb25zdCBkZWJ1Z0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZWJ1Zy5kZXRlY3Rpb24nKTtcblxuICAgICAgICAgICAgdGhpcy5fZnJlcXVlbmN5Q2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FudmFzLmZyZXF1ZW5jeScpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9mcmVxdWVuY3lDYW52YXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9mcmVxdWVuY3lDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9mcmVxdWVuY3lDYW52YXMuY2xhc3NOYW1lID0gJ2ZyZXF1ZW5jeSc7XG4gICAgICAgICAgICAgICAgaWYgKGRlYnVnRGl2KSB7XG4gICAgICAgICAgICAgICAgICAgIGRlYnVnRGl2LmFwcGVuZENoaWxkKHRoaXMuX2ZyZXF1ZW5jeUNhbnZhcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fZnJlcXVlbmN5Q2FudmFzLnN0eWxlLmRpc3BsYXkgPSB0aGlzLl9jb25maWcuZGVidWcuc2hvd0ZyZXF1ZW5jeSA/ICdibG9jaycgOiAnbm9uZSc7XG5cbiAgICAgICAgICAgIHRoaXMuX3BhdHRlcm5DYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjYW52YXMucGF0dGVybkJ1ZmZlcicpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9wYXR0ZXJuQ2FudmFzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcGF0dGVybkNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3BhdHRlcm5DYW52YXMuY2xhc3NOYW1lID0gJ3BhdHRlcm5CdWZmZXInO1xuICAgICAgICAgICAgICAgIGlmIChkZWJ1Z0Rpdikge1xuICAgICAgICAgICAgICAgICAgICBkZWJ1Z0Rpdi5hcHBlbmRDaGlsZCh0aGlzLl9wYXR0ZXJuQ2FudmFzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9wYXR0ZXJuQ2FudmFzLnN0eWxlLmRpc3BsYXkgPSB0aGlzLl9jb25maWcuZGVidWcuc2hvd1BhdHRlcm4gPyAnYmxvY2snIDogJ25vbmUnO1xuXG4gICAgICAgICAgICBjb25zdCBvdmVybGF5Q2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MQ2FudmFzRWxlbWVudD4oJ2NhbnZhcy5kcmF3aW5nQnVmZmVyJyk7XG4gICAgICAgICAgICB0aGlzLl9vdmVybGF5Q29udGV4dCA9IG92ZXJsYXlDYW52YXMgPyBvdmVybGF5Q2FudmFzLmdldENvbnRleHQoJzJkJykgOiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5faW5pdFJlYWRlcnMoKTtcbiAgICB9XG5cbiAgICBkZWNvZGVGcm9tQm91bmRpbmdCb3hlcyhib3hlczogQXJyYXk8Qm94Pik6IFF1YWdnYUJhcmNvZGUge1xuICAgICAgICBjb25zdCBiYXJjb2RlcyA9IFtdO1xuICAgICAgICBjb25zdCBtdWx0aXBsZSA9IHRoaXMuX2NvbmZpZy5tdWx0aXBsZTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJveGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBib3ggPSBib3hlc1tpXTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuZGVjb2RlRnJvbUJvdW5kaW5nQm94KGJveCkgfHwge307XG4gICAgICAgICAgICByZXN1bHQuYm94ID0gYm94O1xuXG4gICAgICAgICAgICBpZiAobXVsdGlwbGUpIHtcbiAgICAgICAgICAgICAgICBiYXJjb2Rlcy5wdXNoKHJlc3VsdCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5jb2RlUmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtdWx0aXBsZSkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBiYXJjb2Rlc1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdpdGggdGhlIGhlbHAgb2YgdGhlIGNvbmZpZ3VyZWQgcmVhZGVycyB0aGlzIGZ1bmN0aW9uIHRyaWVzIHRvIGRldGVjdFxuICAgICAqIGEgdmFsaWQgYmFyY29kZSBwYXR0ZXJuIHdpdGhpbiB0aGUgZ2l2ZW4gYXJlYS5cbiAgICAgKiBAcGFyYW0gYm94IFRoZSBhcmVhIHRvIHNlYXJjaCBpblxuICAgICAqIEByZXR1cm5zIFRoZSByZXN1bHQge2NvZGVSZXN1bHQsIGxpbmUsIGFuZ2xlLCBwYXR0ZXJuLCB0aHJlc2hvbGR9XG4gICAgICovXG4gICAgZGVjb2RlRnJvbUJvdW5kaW5nQm94KGJveDogQm94KTogUXVhZ2dhQmFyY29kZSB7XG4gICAgICAgIGNvbnN0IGRlYnVnID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLl9vdmVybGF5Q29udGV4dCAmJiB0aGlzLl9jb25maWcuZGVidWc7XG5cbiAgICAgICAgaWYgKGRlYnVnICYmIGRlYnVnLmRyYXdCb3VuZGluZ0JveCkge1xuICAgICAgICAgICAgdGhpcy5fZHJhd1BhdGgoYm94LCAnYmx1ZScsIDIpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGxpbmUgPSB0aGlzLl9nZXRMaW5lKGJveCk7XG5cbiAgICAgICAgaWYgKGxpbmUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYW5nbGUgPSBNYXRoLmF0YW4yKGxpbmVbMV0ueSAtIGxpbmVbMF0ueSwgbGluZVsxXS54IC0gbGluZVswXS54KTtcbiAgICAgICAgbGluZSA9IHRoaXMuX2dldEV4dGVuZGVkTGluZShsaW5lLCBhbmdsZSk7XG5cbiAgICAgICAgbGV0IHJlc3VsdCA9IHRoaXMuX3RyeURlY29kZShsaW5lKTtcbiAgICAgICAgaWYgKHJlc3VsdCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5fdHJ5RGVjb2RlQnJ1dGVGb3JjZShib3gsIGxpbmUsIGFuZ2xlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXN1bHQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRlYnVnICYmIGRlYnVnLmRyYXdTY2FubGluZSkge1xuICAgICAgICAgICAgdGhpcy5fZHJhd1BhdGgobGluZSwgJ3JlZCcsIDMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvZGVSZXN1bHQ6IHJlc3VsdC5jb2RlUmVzdWx0LFxuICAgICAgICAgICAgbGluZSxcbiAgICAgICAgICAgIGFuZ2xlLFxuICAgICAgICAgICAgcGF0dGVybjogcmVzdWx0LmJhcmNvZGVMaW5lLmxpbmUsXG4gICAgICAgICAgICB0aHJlc2hvbGQ6IHJlc3VsdC5iYXJjb2RlTGluZS50aHJlc2hvbGRcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBzZXRSZWFkZXJzKHJlYWRlcnM6IEFycmF5PEJhcmNvZGVSZWFkZXJEZWNsYXJhdGlvbj4pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fY29uZmlnLnJlYWRlcnMgPSByZWFkZXJzO1xuICAgICAgICB0aGlzLl9iYXJjb2RlUmVhZGVycy5sZW5ndGggPSAwO1xuICAgICAgICB0aGlzLl9pbml0UmVhZGVycygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2luaXRSZWFkZXJzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9jb25maWcucmVhZGVycy5mb3JFYWNoKHJlYWRlckNvbmZpZyA9PiB7XG4gICAgICAgICAgICBsZXQgcmVhZGVyOiBCYXJjb2RlUmVhZGVyVHlwZTtcbiAgICAgICAgICAgIGxldCBjb25maWd1cmF0aW9uOiBCYXJjb2RlUmVhZGVyQ29uZmlnID0ge307XG4gICAgICAgICAgICBsZXQgc3VwcGxlbWVudHMgPSBbXTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiByZWFkZXJDb25maWcgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgcmVhZGVyID0gcmVhZGVyQ29uZmlnLmZvcm1hdDtcbiAgICAgICAgICAgICAgICBjb25maWd1cmF0aW9uID0gcmVhZGVyQ29uZmlnLmNvbmZpZyB8fCB7fTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHJlYWRlckNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICByZWFkZXIgPSByZWFkZXJDb25maWc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0JlZm9yZSByZWdpc3RlcmluZyByZWFkZXI6JywgcmVhZGVyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24uc3VwcGxlbWVudHMpIHtcbiAgICAgICAgICAgICAgICBzdXBwbGVtZW50cyA9IGNvbmZpZ3VyYXRpb24uc3VwcGxlbWVudHMubWFwKHN1cHBsZW1lbnQgPT4gbmV3IFJlYWRlcnNbc3VwcGxlbWVudF0oKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX2JhcmNvZGVSZWFkZXJzLnB1c2gobmV3IFJlYWRlcnNbcmVhZGVyXShjb25maWd1cmF0aW9uLCBzdXBwbGVtZW50cykpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1JlZ2lzdGVyZWQgUmVhZGVyczonLFxuICAgICAgICAgICAgICAgIC4uLnRoaXMuX2JhcmNvZGVSZWFkZXJzLm1hcCgoeyBjb25maWcsIEZPUk1BVCB9KSA9PiBKU09OLnN0cmluZ2lmeSh7IGNvbmZpZywgRk9STUFUIH0pKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBleHRlbmQgdGhlIGxpbmUgb24gYm90aCBlbmRzXG4gICAgICogQHBhcmFtIGxpbmVcbiAgICAgKiBAcGFyYW0gYW5nbGVcbiAgICAgKi9cbiAgICBwcml2YXRlIF9nZXRFeHRlbmRlZExpbmUobGluZTogTGluZSwgYW5nbGU6IG51bWJlcik6IExpbmUge1xuICAgICAgICBmdW5jdGlvbiBleHRlbmRMaW5lKGFtb3VudDogbnVtYmVyKSB7XG4gICAgICAgICAgICBjb25zdCBleHRlbnNpb24gPSB7XG4gICAgICAgICAgICAgICAgeTogYW1vdW50ICogTWF0aC5zaW4oYW5nbGUpLFxuICAgICAgICAgICAgICAgIHg6IGFtb3VudCAqIE1hdGguY29zKGFuZ2xlKVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgbGluZVswXS55IC09IGV4dGVuc2lvbi55O1xuICAgICAgICAgICAgbGluZVswXS54IC09IGV4dGVuc2lvbi54O1xuICAgICAgICAgICAgbGluZVsxXS55ICs9IGV4dGVuc2lvbi55O1xuICAgICAgICAgICAgbGluZVsxXS54ICs9IGV4dGVuc2lvbi54O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbGluZUxlbmd0aCA9IE1hdGguc3FydCgobGluZVsxXS55IC0gbGluZVswXS55KSAqKiAyICsgKGxpbmVbMV0ueCAtIGxpbmVbMF0ueCkgKiogMik7XG4gICAgICAgIGxldCBleHRlbnNpb25MZW5ndGggPSBsaW5lTGVuZ3RoICogMC4xIHwgMDtcblxuICAgICAgICBleHRlbmRMaW5lKGV4dGVuc2lvbkxlbmd0aCk7XG5cbiAgICAgICAgLy8gY2hlY2sgaWYgaW5zaWRlIGltYWdlXG4gICAgICAgIHdoaWxlIChleHRlbnNpb25MZW5ndGggPiAxICYmICghdGhpcy5faW5wdXRJbWFnZVdyYXBwZXIuaW5JbWFnZVdpdGhCb3JkZXIobGluZVswXSwgMClcbiAgICAgICAgICAgIHx8ICF0aGlzLl9pbnB1dEltYWdlV3JhcHBlci5pbkltYWdlV2l0aEJvcmRlcihsaW5lWzFdLCAwKSkpIHtcbiAgICAgICAgICAgIGV4dGVuc2lvbkxlbmd0aCA+Pj0gMTtcbiAgICAgICAgICAgIGV4dGVuZExpbmUoLWV4dGVuc2lvbkxlbmd0aCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbGluZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9nZXRMaW5lKGJveDogQm94KTogTGluZSB7XG4gICAgICAgIHJldHVybiBbe1xuICAgICAgICAgICAgeDogKGJveFsxXS54ICsgYm94WzBdLngpIC8gMixcbiAgICAgICAgICAgIHk6IChib3hbMV0ueSArIGJveFswXS55KSAvIDJcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgeDogKGJveFszXS54ICsgYm94WzJdLngpIC8gMixcbiAgICAgICAgICAgIHk6IChib3hbM10ueSArIGJveFsyXS55KSAvIDJcbiAgICAgICAgfV07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfdHJ5RGVjb2RlKGxpbmU6IExpbmUpOiBCYXJjb2RlQW5kQmFyY29kZUxpbmUge1xuICAgICAgICBjb25zdCBkZWJ1ZyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdGhpcy5fY29uZmlnLmRlYnVnO1xuXG4gICAgICAgIGlmIChkZWJ1ZyAmJiB0aGlzLl9vdmVybGF5Q29udGV4dCkge1xuICAgICAgICAgICAgdGhpcy5fZHJhd1BhdGgobGluZSwgJ3JlZCcsIDMpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGJhcmNvZGVMaW5lID0gQnJlc2VuaGFtLmdldEJhcmNvZGVMaW5lKHRoaXMuX2lucHV0SW1hZ2VXcmFwcGVyLCBsaW5lWzBdLCBsaW5lWzFdKTtcblxuICAgICAgICBpZiAoZGVidWcgJiYgZGVidWcuc2hvd0ZyZXF1ZW5jeSkge1xuICAgICAgICAgICAgdGhpcy5fcHJpbnRGcmVxdWVuY3koYmFyY29kZUxpbmUubGluZSk7XG4gICAgICAgIH1cblxuICAgICAgICBiYXJjb2RlTGluZSA9IEJyZXNlbmhhbS50b0JpbmFyeUxpbmUoYmFyY29kZUxpbmUpO1xuXG4gICAgICAgIGlmIChkZWJ1ZyAmJiBkZWJ1Zy5zaG93UGF0dGVybikge1xuICAgICAgICAgICAgdGhpcy5fcHJpbnRQYXR0ZXJuKGJhcmNvZGVMaW5lLmxpbmUpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9iYXJjb2RlUmVhZGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY29kZVJlc3VsdCA9IHRoaXMuX2JhcmNvZGVSZWFkZXJzW2ldLmRlY29kZVBhdHRlcm4oYmFyY29kZUxpbmUubGluZSk7XG4gICAgICAgICAgICBpZiAoY29kZVJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGNvZGVSZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgIGJhcmNvZGVMaW5lXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIHNsaWNlcyB0aGUgZ2l2ZW4gYXJlYSBhcGFydCBhbmQgdHJpZXMgdG8gZGV0ZWN0IGEgYmFyY29kZS1wYXR0ZXJuIGZvciBlYWNoIHNsaWNlLlxuICAgICAqIEl0IHJldHVybnMgdGhlIGRlY29kZWQgYmFyY29kZSwgb3IgbnVsbCBpZiBub3RoaW5nIHdhcyBmb3VuZFxuICAgICAqIEBwYXJhbSBib3hcbiAgICAgKiBAcGFyYW0gbGluZVxuICAgICAqIEBwYXJhbSBsaW5lQW5nbGVcbiAgICAgKi9cbiAgICBwcml2YXRlIF90cnlEZWNvZGVCcnV0ZUZvcmNlKGJveDogQm94LCBsaW5lOiBMaW5lLCBsaW5lQW5nbGU6IG51bWJlcik6IEJhcmNvZGVBbmRCYXJjb2RlTGluZSB7XG4gICAgICAgIGNvbnN0IHNpZGVMZW5ndGggPSBNYXRoLnNxcnQoKGJveFsxXS54IC0gYm94WzBdLngpICoqIDIgKyAoYm94WzFdLnkgLSBib3hbMF0ueSkgKiogMik7XG4gICAgICAgIGNvbnN0IHNsaWNlcyA9IDE2O1xuICAgICAgICBjb25zdCB4ZGlyID0gTWF0aC5zaW4obGluZUFuZ2xlKTtcbiAgICAgICAgY29uc3QgeWRpciA9IE1hdGguY29zKGxpbmVBbmdsZSk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBzbGljZXM7IGkrKykge1xuICAgICAgICAgICAgLy8gbW92ZSBsaW5lIHBlcnBlbmRpY3VsYXIgdG8gYW5nbGVcbiAgICAgICAgICAgIGNvbnN0IGRpciA9IHNpZGVMZW5ndGggLyBzbGljZXMgKiBpICogKGkgJSAyID09PSAwID8gLTEgOiAxKTtcbiAgICAgICAgICAgIGxpbmVbMF0ueSArPSBkaXIgKiB4ZGlyO1xuICAgICAgICAgICAgbGluZVswXS54IC09IGRpciAqIHlkaXI7XG4gICAgICAgICAgICBsaW5lWzFdLnkgKz0gZGlyICogeGRpcjtcbiAgICAgICAgICAgIGxpbmVbMV0ueCAtPSBkaXIgKiB5ZGlyO1xuXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLl90cnlEZWNvZGUobGluZSk7XG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVzZWQgZm9yIGRldmVsb3BtZW50IG9ubHlcbiAgICAgKi9cbiAgICBwcml2YXRlIF9wcmludEZyZXF1ZW5jeShsaW5lOiBBcnJheTxudW1iZXI+KTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLl9mcmVxdWVuY3lDYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgdGhpcy5fZnJlcXVlbmN5Q2FudmFzLndpZHRoID0gbGluZS5sZW5ndGg7XG4gICAgICAgIHRoaXMuX2ZyZXF1ZW5jeUNhbnZhcy5oZWlnaHQgPSAyNTY7XG5cbiAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9ICdibHVlJztcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnRleHQubW92ZVRvKGksIDI1NSk7XG4gICAgICAgICAgICBjb250ZXh0LmxpbmVUbyhpLCAyNTUgLSBsaW5lW2ldKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgICAgIGNvbnRleHQuc3Ryb2tlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXNlZCBmb3IgZGV2ZWxvcG1lbnQgb25seVxuICAgICAqL1xuICAgIHByaXZhdGUgX3ByaW50UGF0dGVybihsaW5lOiBBcnJheTxudW1iZXI+KTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLl9wYXR0ZXJuQ2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbiAgICAgICAgdGhpcy5fcGF0dGVybkNhbnZhcy53aWR0aCA9IGxpbmUubGVuZ3RoO1xuICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICdibGFjayc7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAobGluZVtpXSA9PT0gMSkge1xuICAgICAgICAgICAgICAgIGNvbnRleHQuZmlsbFJlY3QoaSwgMCwgMSwgMTAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX2RyYXdQYXRoKHBhdGg6IEFycmF5PFBvaW50PiwgY29sb3I6IHN0cmluZywgbGluZVdpZHRoOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgSW1hZ2VEZWJ1Zy5kcmF3UGF0aChwYXRoLCB0aGlzLl9vdmVybGF5Q29udGV4dCwgY29sb3IsIGxpbmVXaWR0aCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuLi9jb21tb24vcG9pbnQnO1xuaW1wb3J0IHsgSW1hZ2VXcmFwcGVyIH0gZnJvbSAnLi4vY29tbW9uL2ltYWdlLXdyYXBwZXInO1xuXG5lbnVtIFNsb3BlIHtcbiAgICBVcCA9IDEsXG4gICAgRG93biA9IC0xXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIEJhcmNvZGVMaW5lIHtcbiAgICBsaW5lOiBBcnJheTxudW1iZXI+O1xuICAgIG1heD86IG51bWJlcjtcbiAgICBtaW4/OiBudW1iZXI7XG4gICAgdGhyZXNob2xkPzogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgQnJlc2VuaGFtIHtcbiAgICAvKipcbiAgICAgKiBTY2FucyBhIGxpbmUgb2YgdGhlIGdpdmVuIGltYWdlIGZyb20gcG9pbnQgcDEgdG8gcDIgYW5kIHJldHVybnMgYSByZXN1bHQgb2JqZWN0IGNvbnRhaW5pbmdcbiAgICAgKiBncmF5LXNjYWxlIHZhbHVlcyAoMC0yNTUpIG9mIHRoZSB1bmRlcmx5aW5nIHBpeGVscyBpbiBhZGRpdGlvbiB0byB0aGUgbWluIGFuZCBtYXggdmFsdWVzLlxuICAgICAqIEBwYXJhbSBpbWFnZVdyYXBwZXJcbiAgICAgKiBAcGFyYW0gcDEgVGhlIHN0YXJ0IHBvaW50IHt4LHl9XG4gICAgICogQHBhcmFtIHAyIFRoZSBlbmQgcG9pbnQge3gseX1cbiAgICAgKiBAcmV0dXJucyB7bGluZSwgbWluLCBtYXh9XG4gICAgICovXG4gICAgc3RhdGljIGdldEJhcmNvZGVMaW5lKGltYWdlV3JhcHBlcjogSW1hZ2VXcmFwcGVyLCBwMTogUG9pbnQsIHAyOiBQb2ludCk6IEJhcmNvZGVMaW5lIHtcbiAgICAgICAgbGV0IHgwID0gcDEueCB8IDA7XG4gICAgICAgIGxldCB5MCA9IHAxLnkgfCAwO1xuICAgICAgICBsZXQgeDEgPSBwMi54IHwgMDtcbiAgICAgICAgbGV0IHkxID0gcDIueSB8IDA7XG4gICAgICAgIGNvbnN0IHN0ZWVwID0gTWF0aC5hYnMoeTEgLSB5MCkgPiBNYXRoLmFicyh4MSAtIHgwKTtcbiAgICAgICAgbGV0IHRtcDogbnVtYmVyO1xuICAgICAgICBjb25zdCBsaW5lID0gW107XG4gICAgICAgIGNvbnN0IGltYWdlRGF0YSA9IGltYWdlV3JhcHBlci5kYXRhO1xuICAgICAgICBjb25zdCB3aWR0aCA9IGltYWdlV3JhcHBlci5zaXplLng7XG4gICAgICAgIGxldCB2YWw6IG51bWJlcjtcbiAgICAgICAgbGV0IG1pbiA9IDI1NTtcbiAgICAgICAgbGV0IG1heCA9IDA7XG5cbiAgICAgICAgZnVuY3Rpb24gcmVhZChhOiBudW1iZXIsIGI6IG51bWJlcikge1xuICAgICAgICAgICAgdmFsID0gaW1hZ2VEYXRhW2IgKiB3aWR0aCArIGFdO1xuICAgICAgICAgICAgbWluID0gdmFsIDwgbWluID8gdmFsIDogbWluO1xuICAgICAgICAgICAgbWF4ID0gdmFsID4gbWF4ID8gdmFsIDogbWF4O1xuICAgICAgICAgICAgbGluZS5wdXNoKHZhbCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3RlZXApIHtcbiAgICAgICAgICAgIHRtcCA9IHgwO1xuICAgICAgICAgICAgeDAgPSB5MDtcbiAgICAgICAgICAgIHkwID0gdG1wO1xuXG4gICAgICAgICAgICB0bXAgPSB4MTtcbiAgICAgICAgICAgIHgxID0geTE7XG4gICAgICAgICAgICB5MSA9IHRtcDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoeDAgPiB4MSkge1xuICAgICAgICAgICAgdG1wID0geDA7XG4gICAgICAgICAgICB4MCA9IHgxO1xuICAgICAgICAgICAgeDEgPSB0bXA7XG5cbiAgICAgICAgICAgIHRtcCA9IHkwO1xuICAgICAgICAgICAgeTAgPSB5MTtcbiAgICAgICAgICAgIHkxID0gdG1wO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGRlbHRheCA9IHgxIC0geDA7XG4gICAgICAgIGxldCBkZWx0YXkgPSBNYXRoLmFicyh5MSAtIHkwKTtcbiAgICAgICAgbGV0IGVycm9yID0gKGRlbHRheCAvIDIpIHwgMDtcbiAgICAgICAgbGV0IHkgPSB5MDtcbiAgICAgICAgbGV0IHlzdGVwID0geTAgPCB5MSA/IDEgOiAtMTtcblxuICAgICAgICBmb3IgKGxldCB4ID0geDA7IHggPCB4MTsgeCsrKSB7XG4gICAgICAgICAgICBpZiAoc3RlZXApIHtcbiAgICAgICAgICAgICAgICByZWFkKHksIHgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZWFkKHgsIHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZXJyb3IgPSBlcnJvciAtIGRlbHRheTtcbiAgICAgICAgICAgIGlmIChlcnJvciA8IDApIHtcbiAgICAgICAgICAgICAgICB5ICs9IHlzdGVwO1xuICAgICAgICAgICAgICAgIGVycm9yID0gZXJyb3IgKyBkZWx0YXg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGluZSxcbiAgICAgICAgICAgIG1pbixcbiAgICAgICAgICAgIG1heFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIHRoZSByZXN1bHQgZnJvbSBnZXRCYXJjb2RlTGluZSBpbnRvIGEgYmluYXJ5IHJlcHJlc2VudGF0aW9uXG4gICAgICogYWxzbyBjb25zaWRlcmluZyB0aGUgZnJlcXVlbmN5IGFuZCBzbG9wZSBvZiB0aGUgc2lnbmFsIGZvciBtb3JlIHJvYnVzdCByZXN1bHRzXG4gICAgICogQHBhcmFtIHJlc3VsdCB7bGluZSwgbWluLCBtYXh9XG4gICAgICovXG4gICAgc3RhdGljIHRvQmluYXJ5TGluZShyZXN1bHQ6IEJhcmNvZGVMaW5lKTogQmFyY29kZUxpbmUge1xuICAgICAgICBjb25zdCBtaW4gPSByZXN1bHQubWluO1xuICAgICAgICBjb25zdCBtYXggPSByZXN1bHQubWF4O1xuICAgICAgICBjb25zdCBsaW5lID0gcmVzdWx0LmxpbmU7XG4gICAgICAgIGNvbnN0IGNlbnRlciA9IG1pbiArIChtYXggLSBtaW4pIC8gMjtcbiAgICAgICAgY29uc3QgZXh0cmVtYSA9IG5ldyBBcnJheTx7IHBvczogbnVtYmVyOyB2YWw6IG51bWJlcjsgfT4oKTtcbiAgICAgICAgbGV0IHRocmVzaG9sZCA9IChtYXggLSBtaW4pIC8gMTI7XG4gICAgICAgIGNvbnN0IHJUaHJlc2hvbGQgPSAtdGhyZXNob2xkO1xuXG4gICAgICAgIC8vIDEuIGZpbmQgZXh0cmVtYVxuICAgICAgICBsZXQgY3VycmVudERpciA9IGxpbmVbMF0gPiBjZW50ZXIgPyBTbG9wZS5VcCA6IFNsb3BlLkRvd247XG4gICAgICAgIGV4dHJlbWEucHVzaCh7XG4gICAgICAgICAgICBwb3M6IDAsXG4gICAgICAgICAgICB2YWw6IGxpbmVbMF1cbiAgICAgICAgfSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZS5sZW5ndGggLSAyOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHNsb3BlID0gKGxpbmVbaSArIDFdIC0gbGluZVtpXSk7XG4gICAgICAgICAgICBjb25zdCBzbG9wZTIgPSAobGluZVtpICsgMl0gLSBsaW5lW2kgKyAxXSk7XG4gICAgICAgICAgICBsZXQgZGlyOiBTbG9wZTtcbiAgICAgICAgICAgIGlmICgoc2xvcGUgKyBzbG9wZTIpIDwgclRocmVzaG9sZCAmJiBsaW5lW2kgKyAxXSA8IChjZW50ZXIgKiAxLjUpKSB7XG4gICAgICAgICAgICAgICAgZGlyID0gU2xvcGUuRG93bjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoKHNsb3BlICsgc2xvcGUyKSA+IHRocmVzaG9sZCAmJiBsaW5lW2kgKyAxXSA+IChjZW50ZXIgKiAwLjUpKSB7XG4gICAgICAgICAgICAgICAgZGlyID0gU2xvcGUuVXA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRpciA9IGN1cnJlbnREaXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjdXJyZW50RGlyICE9PSBkaXIpIHtcbiAgICAgICAgICAgICAgICBleHRyZW1hLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBwb3M6IGksXG4gICAgICAgICAgICAgICAgICAgIHZhbDogbGluZVtpXVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGN1cnJlbnREaXIgPSBkaXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZXh0cmVtYS5wdXNoKHtcbiAgICAgICAgICAgIHBvczogbGluZS5sZW5ndGgsXG4gICAgICAgICAgICB2YWw6IGxpbmVbbGluZS5sZW5ndGggLSAxXVxuICAgICAgICB9KTtcblxuICAgICAgICBmb3IgKGxldCBqID0gZXh0cmVtYVswXS5wb3M7IGogPCBleHRyZW1hWzFdLnBvczsgaisrKSB7XG4gICAgICAgICAgICBsaW5lW2pdID0gbGluZVtqXSA+IGNlbnRlciA/IDAgOiAxO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaXRlcmF0ZSBvdmVyIGV4dHJlbWEgYW5kIGNvbnZlcnQgdG8gYmluYXJ5IGJhc2VkIG9uIGF2ZyBiZXR3ZWVuIG1pbm1heFxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGV4dHJlbWEubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZXh0cmVtYVtpICsgMV0udmFsID4gZXh0cmVtYVtpXS52YWwpIHtcbiAgICAgICAgICAgICAgICB0aHJlc2hvbGQgPSAoZXh0cmVtYVtpXS52YWwgKyAoKGV4dHJlbWFbaSArIDFdLnZhbCAtIGV4dHJlbWFbaV0udmFsKSAvIDMpICogMikgfCAwO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJlc2hvbGQgPSAoZXh0cmVtYVtpICsgMV0udmFsICsgKChleHRyZW1hW2ldLnZhbCAtIGV4dHJlbWFbaSArIDFdLnZhbCkgLyAzKSkgfCAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gZXh0cmVtYVtpXS5wb3M7IGogPCBleHRyZW1hW2kgKyAxXS5wb3M7IGorKykge1xuICAgICAgICAgICAgICAgIGxpbmVbal0gPSBsaW5lW2pdID4gdGhyZXNob2xkID8gMCA6IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4ucmVzdWx0LFxuICAgICAgICAgICAgdGhyZXNob2xkXG4gICAgICAgIH07XG4gICAgfTtcbn1cbiIsImltcG9ydCB7IGdldFVzZXJNZWRpYSwgZW51bWVyYXRlRGV2aWNlcyB9IGZyb20gJy4uL2NvbW1vbi9tZWRpYS1kZXZpY2VzJztcblxubGV0IF9zdHJlYW06IE1lZGlhU3RyZWFtO1xuXG5leHBvcnQgY2xhc3MgQ2FtZXJhQWNjZXNzIHtcbiAgICAvKipcbiAgICAgKiBBdHRlbXB0cyB0byBhdHRhY2ggdGhlIGNhbWVyYS1zdHJlYW0gdG8gYSBnaXZlbiB2aWRlbyBlbGVtZW50XG4gICAgICogYW5kIGNhbGxzIHRoZSBjYWxsYmFjayBmdW5jdGlvbiB3aGVuIHRoZSBjb250ZW50IGlzIHJlYWR5XG4gICAgICogQHBhcmFtIHZpZGVvXG4gICAgICogQHBhcmFtIHZpZGVvQ29uc3RyYWludHNcbiAgICAgKi9cbiAgICBzdGF0aWMgYXN5bmMgcmVxdWVzdCh2aWRlbzogSFRNTFZpZGVvRWxlbWVudCwgdmlkZW9Db25zdHJhaW50czogTWVkaWFUcmFja0NvbnN0cmFpbnRzKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRDb25zdHJhaW50cyA9IENhbWVyYUFjY2Vzcy5waWNrQ29uc3RyYWludHModmlkZW9Db25zdHJhaW50cyk7XG4gICAgICAgIF9zdHJlYW0gPSBhd2FpdCBnZXRVc2VyTWVkaWEobm9ybWFsaXplZENvbnN0cmFpbnRzKTtcbiAgICAgICAgdmlkZW8uc3JjT2JqZWN0ID0gX3N0cmVhbTtcbiAgICAgICAgdmlkZW8uc2V0QXR0cmlidXRlKCdhdXRvcGxheScsICcnKTtcbiAgICAgICAgdmlkZW8uc2V0QXR0cmlidXRlKCdtdXRlZCcsICcnKTtcbiAgICAgICAgdmlkZW8uc2V0QXR0cmlidXRlKCdwbGF5c2lubGluZScsICcnKTtcblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB2aWRlby5hZGRFdmVudExpc3RlbmVyKCdsb2FkZWRtZXRhZGF0YScsICgpID0+IHtcbiAgICAgICAgICAgIHZpZGVvLnBsYXkoKTtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSkpLnRoZW4oX3dhaXRGb3JWaWRlby5iaW5kKG51bGwsIHZpZGVvKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIHJlbGVhc2UoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHRyYWNrcyA9IF9zdHJlYW0gJiYgX3N0cmVhbS5nZXRWaWRlb1RyYWNrcygpO1xuICAgICAgICBpZiAodHJhY2tzICYmIHRyYWNrcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRyYWNrc1swXS5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgICAgX3N0cmVhbSA9IG51bGw7XG4gICAgfVxuXG4gICAgc3RhdGljIGFzeW5jIGVudW1lcmF0ZVZpZGVvRGV2aWNlcygpOiBQcm9taXNlPEFycmF5PE1lZGlhRGV2aWNlSW5mbz4+IHtcbiAgICAgICAgY29uc3QgZGV2aWNlcyA9IGF3YWl0IGVudW1lcmF0ZURldmljZXMoKTtcbiAgICAgICAgcmV0dXJuIGRldmljZXMuZmlsdGVyKCh7IGtpbmQgfSkgPT4ga2luZCA9PT0gJ3ZpZGVvaW5wdXQnKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0QWN0aXZlU3RyZWFtTGFiZWwoKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgdHJhY2sgPSBDYW1lcmFBY2Nlc3MuZ2V0QWN0aXZlVHJhY2soKTtcbiAgICAgICAgcmV0dXJuIHRyYWNrID8gdHJhY2subGFiZWwgOiAnJztcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0QWN0aXZlVHJhY2soKSB7XG4gICAgICAgIGNvbnN0IHRyYWNrcyA9IF9zdHJlYW0gJiYgX3N0cmVhbS5nZXRWaWRlb1RyYWNrcygpO1xuICAgICAgICBpZiAodHJhY2tzICYmIHRyYWNrcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB0cmFja3NbMF07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBzdGF0aWMgcGlja0NvbnN0cmFpbnRzKHZpZGVvQ29uc3RyYWludHM6IE1lZGlhVHJhY2tDb25zdHJhaW50cyk6IE1lZGlhU3RyZWFtQ29uc3RyYWludHMge1xuICAgICAgICBsZXQgeyB3aWR0aCwgaGVpZ2h0LCBmYWNpbmdNb2RlLCBhc3BlY3RSYXRpbywgZGV2aWNlSWQgfSA9IHZpZGVvQ29uc3RyYWludHM7XG4gICAgICAgIGNvbnN0IHsgbWluQXNwZWN0UmF0aW8sIGZhY2luZyB9ID0gdmlkZW9Db25zdHJhaW50cyBhcyBhbnk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBtaW5Bc3BlY3RSYXRpbyAhPT0gJ3VuZGVmaW5lZCcgJiYgbWluQXNwZWN0UmF0aW8gPiAwKSB7XG4gICAgICAgICAgICBhc3BlY3RSYXRpbyA9IG1pbkFzcGVjdFJhdGlvO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYFdBUk5JTkc6IENvbnN0cmFpbnQgJ21pbkFzcGVjdFJhdGlvJyBpcyBkZXByZWNhdGVkOyBVc2UgJ2FzcGVjdFJhdGlvJyBpbnN0ZWFkYCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGZhY2luZyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGZhY2luZ01vZGUgPSBmYWNpbmc7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgV0FSTklORzogQ29uc3RyYWludCAnZmFjaW5nJyBpcyBkZXByZWNhdGVkLiBVc2UgJ2ZhY2luZ01vZGUnIGluc3RlYWQnYCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBub3JtYWxpemVkQ29uc3RyYWludHMgPSBkZXZpY2VJZCAmJiBmYWNpbmdNb2RlID9cbiAgICAgICAgICAgIHsgd2lkdGgsIGhlaWdodCwgYXNwZWN0UmF0aW8sIGRldmljZUlkIH0gOiB7IHdpZHRoLCBoZWlnaHQsIGZhY2luZ01vZGUsIGFzcGVjdFJhdGlvLCBkZXZpY2VJZCB9O1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhdWRpbzogZmFsc2UsXG4gICAgICAgICAgICB2aWRlbzogbm9ybWFsaXplZENvbnN0cmFpbnRzXG4gICAgICAgIH07XG4gICAgfVxufVxuXG5mdW5jdGlvbiBfd2FpdEZvclZpZGVvKHsgdmlkZW9XaWR0aCwgdmlkZW9IZWlnaHQgfSk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGxldCBhdHRlbXB0cyA9IDEwO1xuXG4gICAgICAgIGZ1bmN0aW9uIGNoZWNrVmlkZW8oKSB7XG4gICAgICAgICAgICBpZiAoYXR0ZW1wdHMgPiAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZpZGVvV2lkdGggPiAxMCAmJiB2aWRlb0hlaWdodCA+IDEwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHt2aWRlb1dpZHRofXB4IHggJHt2aWRlb0hlaWdodH1weGApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dChjaGVja1ZpZGVvLCA1MDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KCdVbmFibGUgdG8gcGxheSB2aWRlbyBzdHJlYW0uIElzIHdlYmNhbSB3b3JraW5nPycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXR0ZW1wdHMtLTtcbiAgICAgICAgfVxuICAgICAgICBjaGVja1ZpZGVvKCk7XG4gICAgfSk7XG59XG4iLCIvKipcbiAqIEBib3Jyb3dzIGh0dHBzOi8vZ2l0aHViLmNvbS9leGlmLWpzL2V4aWYtanNcbiAqL1xuXG5jb25zdCBFeGlmVGFncyA9IHsgMHgwMTEyOiAnb3JpZW50YXRpb24nIH07XG5leHBvcnQgY29uc3QgQXZhaWxhYmxlVGFnczogQXJyYXk8c3RyaW5nPiA9IE9iamVjdC5rZXlzKEV4aWZUYWdzKS5tYXAoa2V5ID0+IEV4aWZUYWdzW2tleV0pO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRhZ3Mge1xuICAgIFtrZXk6IHN0cmluZ106IG51bWJlciB8IHN0cmluZztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZpbmRUYWdzSW5PYmplY3RVUkwoc3JjOiBzdHJpbmcsIHRhZ3MgPSBBdmFpbGFibGVUYWdzKTogUHJvbWlzZTxUYWdzPiB7XG4gICAgaWYgKC9eYmxvYjovaS50ZXN0KHNyYykpIHtcbiAgICAgICAgY29uc3QgYnVmZmVyID0gYXdhaXQgb2JqZWN0VVJMVG9CbG9iKHNyYyk7XG4gICAgICAgIHJldHVybiBmaW5kVGFnc0luQnVmZmVyKGJ1ZmZlciwgdGFncyk7XG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobnVsbCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kVGFnc0luQnVmZmVyKGZpbGU6IEFycmF5QnVmZmVyLCBzZWxlY3RlZFRhZ3M6IEFycmF5PHN0cmluZz4gPSBBdmFpbGFibGVUYWdzKTogVGFncyB7XG4gICAgY29uc3QgZGF0YVZpZXcgPSBuZXcgRGF0YVZpZXcoZmlsZSk7XG4gICAgY29uc3QgbGVuZ3RoID0gZmlsZS5ieXRlTGVuZ3RoO1xuICAgIGNvbnN0IGV4aWZUYWdzID0gc2VsZWN0ZWRUYWdzLnJlZHVjZSgocmVzdWx0LCBzZWxlY3RlZFRhZykgPT4ge1xuICAgICAgICBjb25zdCBleGlmVGFnID0gT2JqZWN0LmtleXMoRXhpZlRhZ3MpLmZpbmQodGFnID0+IEV4aWZUYWdzW3RhZ10gPT09IHNlbGVjdGVkVGFnKTtcbiAgICAgICAgaWYgKGV4aWZUYWcpIHtcbiAgICAgICAgICAgIHJlc3VsdFtleGlmVGFnXSA9IHNlbGVjdGVkVGFnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSwge30pO1xuICAgIGxldCBvZmZzZXQgPSAyO1xuXG4gICAgaWYgKChkYXRhVmlldy5nZXRVaW50OCgwKSAhPT0gMHhGRikgfHwgKGRhdGFWaWV3LmdldFVpbnQ4KDEpICE9PSAweEQ4KSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB3aGlsZSAob2Zmc2V0IDwgbGVuZ3RoKSB7XG4gICAgICAgIGlmIChkYXRhVmlldy5nZXRVaW50OChvZmZzZXQpICE9PSAweEZGKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG1hcmtlciA9IGRhdGFWaWV3LmdldFVpbnQ4KG9mZnNldCArIDEpO1xuICAgICAgICBpZiAobWFya2VyID09PSAweEUxKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVhZEVYSUZEYXRhKGRhdGFWaWV3LCBvZmZzZXQgKyA0LCBleGlmVGFncyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvZmZzZXQgKz0gMiArIGRhdGFWaWV3LmdldFVpbnQxNihvZmZzZXQgKyAyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xufVxuXG5hc3luYyBmdW5jdGlvbiBvYmplY3RVUkxUb0Jsb2IodXJsOiBzdHJpbmcpOiBQcm9taXNlPEFycmF5QnVmZmVyPiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuYXJyYXlCdWZmZXIoKTtcbiAgICB9XG5cbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0hUVFAgRXJyb3IgJyArIHJlc3BvbnNlLnN0YXR1cyk7XG59XG5cbmZ1bmN0aW9uIHJlYWRFWElGRGF0YShkYXRhVmlldzogRGF0YVZpZXcsIHN0YXJ0OiBudW1iZXIsIGV4aWZUYWdzOiB7IFtrZXk6IG51bWJlcl06IHN0cmluZyB9KTogVGFncyB7XG4gICAgaWYgKCdFeGlmJy5zcGxpdCgnJykuc29tZSgoY2hhciwgaW5kZXgpID0+IGRhdGFWaWV3LmdldFVpbnQ4KHN0YXJ0ICsgaW5kZXgpICE9PSBjaGFyLmNoYXJDb2RlQXQoMCkpKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHRpZmZPZmZzZXQgPSBzdGFydCArIDY7XG4gICAgbGV0IGJpZ0VuZDogYm9vbGVhbjtcblxuICAgIGlmIChkYXRhVmlldy5nZXRVaW50MTYodGlmZk9mZnNldCkgPT09IDB4NDk0OSkge1xuICAgICAgICBiaWdFbmQgPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKGRhdGFWaWV3LmdldFVpbnQxNih0aWZmT2Zmc2V0KSA9PT0gMHg0RDREKSB7XG4gICAgICAgIGJpZ0VuZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKGRhdGFWaWV3LmdldFVpbnQxNih0aWZmT2Zmc2V0ICsgMiwgIWJpZ0VuZCkgIT09IDB4MDAyQSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBmaXJzdElGRE9mZnNldCA9IGRhdGFWaWV3LmdldFVpbnQzMih0aWZmT2Zmc2V0ICsgNCwgIWJpZ0VuZCk7XG4gICAgaWYgKGZpcnN0SUZET2Zmc2V0IDwgMHgwMDAwMDAwOCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCB0YWdzID0gcmVhZFRhZ3MoZGF0YVZpZXcsIHRpZmZPZmZzZXQgKyBmaXJzdElGRE9mZnNldCwgZXhpZlRhZ3MsIGJpZ0VuZCk7XG4gICAgcmV0dXJuIHRhZ3M7XG59XG5cbmZ1bmN0aW9uIHJlYWRUYWdzKGRhdGFWaWV3OiBEYXRhVmlldywgZGlyU3RhcnQ6IG51bWJlciwgc3RyaW5nczogeyBba2V5OiBudW1iZXJdOiBzdHJpbmcgfSwgYmlnRW5kOiBib29sZWFuKTogVGFncyB7XG4gICAgY29uc3QgZW50cmllcyA9IGRhdGFWaWV3LmdldFVpbnQxNihkaXJTdGFydCwgIWJpZ0VuZCk7XG4gICAgY29uc3QgdGFnczogVGFncyA9IHt9O1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbnRyaWVzOyBpKyspIHtcbiAgICAgICAgY29uc3QgZW50cnlPZmZzZXQgPSBkaXJTdGFydCArIGkgKiAxMiArIDI7XG4gICAgICAgIGNvbnN0IHRhZyA9IHN0cmluZ3NbZGF0YVZpZXcuZ2V0VWludDE2KGVudHJ5T2Zmc2V0LCAhYmlnRW5kKV07XG4gICAgICAgIGlmICh0YWcpIHtcbiAgICAgICAgICAgIHRhZ3NbdGFnXSA9IHJlYWRUYWdWYWx1ZShkYXRhVmlldywgZW50cnlPZmZzZXQsIGJpZ0VuZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFncztcbn1cblxuZnVuY3Rpb24gcmVhZFRhZ1ZhbHVlKGRhdGFWaWV3OiBEYXRhVmlldywgZW50cnlPZmZzZXQ6IG51bWJlciwgYmlnRW5kOiBib29sZWFuKTogbnVtYmVyIHwgc3RyaW5nIHtcbiAgICBjb25zdCB0eXBlID0gZGF0YVZpZXcuZ2V0VWludDE2KGVudHJ5T2Zmc2V0ICsgMiwgIWJpZ0VuZCk7XG4gICAgY29uc3QgbnVtVmFsdWVzID0gZGF0YVZpZXcuZ2V0VWludDMyKGVudHJ5T2Zmc2V0ICsgNCwgIWJpZ0VuZCk7XG5cbiAgICByZXR1cm4gdHlwZSA9PT0gMyAmJiBudW1WYWx1ZXMgPT09IDEgPyBkYXRhVmlldy5nZXRVaW50MTYoZW50cnlPZmZzZXQgKyA4LCAhYmlnRW5kKSA6IHVuZGVmaW5lZDtcbn1cbiIsImltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi4vY29tbW9uL3BvaW50JztcbmltcG9ydCB7IElucHV0U3RyZWFtIH0gZnJvbSAnLi9pbnB1dC1zdHJlYW0nO1xuaW1wb3J0IHsgSW5wdXRTdHJlYW1Db25maWcgfSBmcm9tICcuL2lucHV0LXN0cmVhbS1jb25maWcnO1xuXG5jb25zdCBRVUFURVJfQ0lSQ0xFID0gTWF0aC5QSSAvIDI7XG5cbmV4cG9ydCBjbGFzcyBGcmFtZUdyYWJiZXIge1xuICAgIHByaXZhdGUgX2lucHV0U3RyZWFtOiBJbnB1dFN0cmVhbTtcbiAgICBwcml2YXRlIF9zdHJlYW1Db25maWc6IElucHV0U3RyZWFtQ29uZmlnO1xuICAgIHByaXZhdGUgX2NhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG4gICAgcHJpdmF0ZSBfY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuICAgIHByaXZhdGUgX2RhdGE6IFVpbnQ4QXJyYXk7XG4gICAgcHJpdmF0ZSBfY2FudmFzSGVpZ2h0OiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfY2FudmFzV2lkdGg6IG51bWJlcjtcbiAgICBwcml2YXRlIF9oZWlnaHQ6IG51bWJlcjtcbiAgICBwcml2YXRlIF93aWR0aDogbnVtYmVyO1xuICAgIHByaXZhdGUgX3RvcExlZnQ6IFBvaW50O1xuXG4gICAgY29uc3RydWN0b3IoaW5wdXRTdHJlYW06IElucHV0U3RyZWFtLCBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuX2lucHV0U3RyZWFtID0gaW5wdXRTdHJlYW07XG4gICAgICAgIHRoaXMuX3N0cmVhbUNvbmZpZyA9IGlucHV0U3RyZWFtLmNvbmZpZztcbiAgICAgICAgdGhpcy5fY2FudmFzV2lkdGggPSBpbnB1dFN0cmVhbS5jYW52YXNXaWR0aDtcbiAgICAgICAgdGhpcy5fY2FudmFzSGVpZ2h0ID0gaW5wdXRTdHJlYW0uY2FudmFzSGVpZ2h0O1xuICAgICAgICB0aGlzLl93aWR0aCA9IGlucHV0U3RyZWFtLndpZHRoO1xuICAgICAgICB0aGlzLl9oZWlnaHQgPSBpbnB1dFN0cmVhbS5oZWlnaHQ7XG4gICAgICAgIHRoaXMuX3RvcExlZnQgPSBpbnB1dFN0cmVhbS50b3BMZWZ0O1xuICAgICAgICB0aGlzLl9jYW52YXMgPSBjYW52YXMgfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgIHRoaXMuX2NhbnZhcy53aWR0aCA9IHRoaXMuX2NhbnZhc1dpZHRoO1xuICAgICAgICB0aGlzLl9jYW52YXMuaGVpZ2h0ID0gdGhpcy5fY2FudmFzSGVpZ2h0O1xuICAgICAgICB0aGlzLl9jb250ZXh0ID0gdGhpcy5fY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIHRoaXMuX2RhdGEgPSBuZXcgVWludDhBcnJheSh0aGlzLl93aWR0aCAqIHRoaXMuX2hlaWdodCk7XG5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdGcmFtZUdyYWJiZXInLCBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgc2l6ZToge1xuICAgICAgICAgICAgICAgICAgICB4OiB0aGlzLl93aWR0aCxcbiAgICAgICAgICAgICAgICAgICAgeTogdGhpcy5faGVpZ2h0XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0b3BMZWZ0OiB0aGlzLl90b3BMZWZ0LFxuICAgICAgICAgICAgICAgIHZpZGVvU2l6ZToge1xuICAgICAgICAgICAgICAgICAgICB4OiBpbnB1dFN0cmVhbS5yZWFsV2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIHk6IGlucHV0U3RyZWFtLnJlYWxIZWlnaHRcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNhbnZhc1NpemU6IHtcbiAgICAgICAgICAgICAgICAgICAgeDogdGhpcy5fY2FudmFzV2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIHk6IHRoaXMuX2NhbnZhc0hlaWdodFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVzZXMgdGhlIGdpdmVuIGFycmF5IGFzIGZyYW1lLWJ1ZmZlclxuICAgICAqL1xuICAgIGF0dGFjaERhdGEoZGF0YTogVWludDhBcnJheSk6IHZvaWQge1xuICAgICAgICB0aGlzLl9kYXRhID0gZGF0YTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGZXRjaGVzIGEgZnJhbWUgZnJvbSB0aGUgaW5wdXQtc3RyZWFtIGFuZCBwdXRzIGludG8gdGhlIGZyYW1lLWJ1ZmZlci5cbiAgICAgKiBUaGUgaW1hZ2UtZGF0YSBpcyBjb252ZXJ0ZWQgdG8gZ3JheS1zY2FsZSBhbmQgdGhlbiBoYWxmLXNhbXBsZWQgaWYgY29uZmlndXJlZC5cbiAgICAgKi9cbiAgICBncmFiKCk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBmcmFtZSA9IHRoaXMuX2lucHV0U3RyZWFtLmdldEZyYW1lKCk7XG5cbiAgICAgICAgaWYgKGZyYW1lKSB7XG4gICAgICAgICAgICB0aGlzLl9hZGp1c3RDYW52YXNTaXplKCk7XG5cbiAgICAgICAgICAgIGxldCBkcmF3YWJsZTogSFRNTEltYWdlRWxlbWVudCB8IEhUTUxWaWRlb0VsZW1lbnQ7XG4gICAgICAgICAgICBsZXQgZHJhd0FuZ2xlID0gMDtcblxuICAgICAgICAgICAgaWYgKGZyYW1lIGluc3RhbmNlb2YgSFRNTFZpZGVvRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGRyYXdhYmxlID0gZnJhbWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRyYXdhYmxlID0gZnJhbWUuaW1hZ2U7XG5cbiAgICAgICAgICAgICAgICBpZiAoZnJhbWUudGFncykge1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGZyYW1lLnRhZ3Mub3JpZW50YXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyYXdBbmdsZSA9IFFVQVRFUl9DSVJDTEU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDg6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcmF3QW5nbGUgPSAtUVVBVEVSX0NJUkNMRTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGRyYXdBbmdsZSAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGhhbGZXaWR0aCA9IHRoaXMuX2NhbnZhc1dpZHRoID4+IDE7XG4gICAgICAgICAgICAgICAgY29uc3QgaGFsZkhlaWdodCA9IHRoaXMuX2NhbnZhc0hlaWdodCA+PiAxO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5fY29udGV4dC50cmFuc2xhdGUoaGFsZldpZHRoLCBoYWxmSGVpZ2h0KTtcbiAgICAgICAgICAgICAgICB0aGlzLl9jb250ZXh0LnJvdGF0ZShkcmF3QW5nbGUpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2NvbnRleHQuZHJhd0ltYWdlKGRyYXdhYmxlLCAtaGFsZkhlaWdodCwgLWhhbGZXaWR0aCwgdGhpcy5fY2FudmFzSGVpZ2h0LCB0aGlzLl9jYW52YXNXaWR0aCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fY29udGV4dC5yb3RhdGUoLWRyYXdBbmdsZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fY29udGV4dC50cmFuc2xhdGUoLWhhbGZXaWR0aCwgLWhhbGZIZWlnaHQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jb250ZXh0LmRyYXdJbWFnZShkcmF3YWJsZSwgMCwgMCwgdGhpcy5fY2FudmFzV2lkdGgsIHRoaXMuX2NhbnZhc0hlaWdodCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGltYWdlRGF0YSA9IHRoaXMuX2NvbnRleHQuZ2V0SW1hZ2VEYXRhKHRoaXMuX3RvcExlZnQueCwgdGhpcy5fdG9wTGVmdC55LCB0aGlzLl93aWR0aCwgdGhpcy5faGVpZ2h0KS5kYXRhO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5fc3RyZWFtQ29uZmlnLmhhbGZTYW1wbGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9ncmF5QW5kSGFsZlNhbXBsZUZyb21DYW52YXNEYXRhKGltYWdlRGF0YSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NvbXB1dGVHcmF5KGltYWdlRGF0YSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfYWRqdXN0Q2FudmFzU2l6ZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuX2NhbnZhcy5oZWlnaHQgIT09IHRoaXMuX2NhbnZhc0hlaWdodCB8fCB0aGlzLl9jYW52YXMud2lkdGggIT09IHRoaXMuX2NhbnZhc1dpZHRoKSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignQ2FudmFzIHNpemUgbmVlZHMgdG8gYmUgYWRqdXN0ZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2NhbnZhcy5oZWlnaHQgPSB0aGlzLl9jYW52YXNIZWlnaHQ7XG4gICAgICAgICAgICB0aGlzLl9jYW52YXMud2lkdGggPSB0aGlzLl9jYW52YXNXaWR0aDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX2dyYXlBbmRIYWxmU2FtcGxlRnJvbUNhbnZhc0RhdGEoaW1hZ2VEYXRhOiBVaW50OENsYW1wZWRBcnJheSk6IHZvaWQge1xuICAgICAgICBjb25zdCBlbmRJbmRleCA9IGltYWdlRGF0YS5sZW5ndGggPj4gMjtcbiAgICAgICAgY29uc3Qgb3V0V2lkdGggPSB0aGlzLl93aWR0aCA+PiAxO1xuICAgICAgICBsZXQgdG9wUm93SW5kZXggPSAwO1xuICAgICAgICBsZXQgYm90dG9tUm93SW5kZXggPSB0aGlzLl93aWR0aDtcbiAgICAgICAgbGV0IG91dEltYWdlSW5kZXggPSAwO1xuXG4gICAgICAgIHdoaWxlIChib3R0b21Sb3dJbmRleCA8IGVuZEluZGV4KSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG91dFdpZHRoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0b3A0ID0gdG9wUm93SW5kZXggPDwgMjtcbiAgICAgICAgICAgICAgICBjb25zdCBib3R0b200ID0gYm90dG9tUm93SW5kZXggPDwgMjtcbiAgICAgICAgICAgICAgICB0aGlzLl9kYXRhW291dEltYWdlSW5kZXhdID0gKFxuICAgICAgICAgICAgICAgICAgICAoMC4yOTkgKiBpbWFnZURhdGFbdG9wNCArIDBdICsgMC41ODcgKiBpbWFnZURhdGFbdG9wNCArIDFdICsgMC4xMTQgKiBpbWFnZURhdGFbdG9wNCArIDJdKSArXG4gICAgICAgICAgICAgICAgICAgICgwLjI5OSAqIGltYWdlRGF0YVt0b3A0ICsgNF0gKyAwLjU4NyAqIGltYWdlRGF0YVt0b3A0ICsgNV0gKyAwLjExNCAqIGltYWdlRGF0YVt0b3A0ICsgNl0pICtcbiAgICAgICAgICAgICAgICAgICAgKDAuMjk5ICogaW1hZ2VEYXRhW2JvdHRvbTQgKyAwXSArIDAuNTg3ICogaW1hZ2VEYXRhW2JvdHRvbTQgKyAxXSArIDAuMTE0ICogaW1hZ2VEYXRhW2JvdHRvbTQgKyAyXSkgK1xuICAgICAgICAgICAgICAgICAgICAoMC4yOTkgKiBpbWFnZURhdGFbYm90dG9tNCArIDRdICsgMC41ODcgKiBpbWFnZURhdGFbYm90dG9tNCArIDVdICsgMC4xMTQgKiBpbWFnZURhdGFbYm90dG9tNCArIDZdKVxuICAgICAgICAgICAgICAgICkgLyA0IHwgMDtcbiAgICAgICAgICAgICAgICBvdXRJbWFnZUluZGV4Kys7XG4gICAgICAgICAgICAgICAgdG9wUm93SW5kZXggKz0gMjtcbiAgICAgICAgICAgICAgICBib3R0b21Sb3dJbmRleCArPSAyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdG9wUm93SW5kZXggKz0gdGhpcy5fd2lkdGg7XG4gICAgICAgICAgICBib3R0b21Sb3dJbmRleCArPSB0aGlzLl93aWR0aDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX2NvbXB1dGVHcmF5KGltYWdlRGF0YTogVWludDhDbGFtcGVkQXJyYXkpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgaW1hZ2VEYXRhTGVuZ3RoID0gaW1hZ2VEYXRhLmxlbmd0aDtcblxuICAgICAgICBpZiAodGhpcy5fc3RyZWFtQ29uZmlnICYmIHRoaXMuX3N0cmVhbUNvbmZpZy5zaW5nbGVDaGFubmVsKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgaiA9IDA7IGkgPCBpbWFnZURhdGFMZW5ndGg7IGkgKz0gNCwgaisrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGF0YVtqXSA9IGltYWdlRGF0YVtpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBqID0gMDsgaSA8IGltYWdlRGF0YUxlbmd0aDsgaSArPSA0LCBqKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9kYXRhW2pdID0gMC4yOTkgKiBpbWFnZURhdGFbaV0gKyAwLjU4NyAqIGltYWdlRGF0YVtpICsgMV0gKyAwLjExNCAqIGltYWdlRGF0YVtpICsgMl0gfCAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgZmluZFRhZ3NJbk9iamVjdFVSTCwgVGFncyB9IGZyb20gJy4vZXhpZi1oZWxwZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEltYWdlSW5mbyB7XG4gICAgaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQ7XG4gICAgdGFncz86IFRhZ3M7XG59XG5cbmV4cG9ydCBjbGFzcyBJbWFnZUxvYWRlciB7XG4gICAgc3RhdGljIGFzeW5jIGxvYWQoXG4gICAgICAgIGJhc2VVcmk6IHN0cmluZyxcbiAgICAgICAgY2FsbGJhY2s6IChfOiBBcnJheTxJbWFnZUluZm8+KSA9PiB2b2lkLFxuICAgICAgICBvZmZzZXQ6IG51bWJlcixcbiAgICAgICAgc2l6ZTogbnVtYmVyLFxuICAgICAgICBzZXF1ZW5jZTogYm9vbGVhblxuICAgICk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBjb25zdCBpbWFnZVNyY3MgPSBuZXcgQXJyYXk8c3RyaW5nPihzaXplKTtcbiAgICAgICAgY29uc3QgbG9hZGVkSW1hZ2VzID0gbmV3IEFycmF5PEltYWdlSW5mbz4oc2l6ZSk7XG4gICAgICAgIGNvbnN0IG5vdExvYWRlZEltYWdlcyA9IG5ldyBBcnJheTxIVE1MSW1hZ2VFbGVtZW50PigpO1xuXG4gICAgICAgIGlmIChzZXF1ZW5jZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGltYWdlU3Jjc1swXSA9IGJhc2VVcmk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICAgICAgICAgIGltYWdlU3Jjc1tpXSA9IGAke2Jhc2VVcml9aW1hZ2UtJHsoJzAwJyArIChvZmZzZXQgKyBpKSkuc2xpY2UoLTMpfS5qcGdgO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaW1hZ2VTcmNzLmZvckVhY2goc3JjID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICBub3RMb2FkZWRJbWFnZXMucHVzaChpbWFnZSk7XG4gICAgICAgICAgICBpbWFnZS5vbmxvYWQgPSAoKSA9PiBsb2FkZWQoaW1hZ2UpO1xuICAgICAgICAgICAgaW1hZ2Uuc3JjID0gc3JjO1xuICAgICAgICB9KTtcblxuICAgICAgICBhc3luYyBmdW5jdGlvbiBsb2FkZWQobG9hZGVkSW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgbm90TG9hZGVkSW1hZ2VzLmxlbmd0aDsgeCsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5vdExvYWRlZEltYWdlc1t4XSA9PT0gbG9hZGVkSW1hZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgbm90TG9hZGVkSW1hZ2VzLnNwbGljZSh4LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogYXNzdW1lIHRoZSBpbmRleCBpcyB0aGUgc2FtZVxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGltYWdlU3Jjcy5sZW5ndGg7IHkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1hZ2VOYW1lID0gaW1hZ2VTcmNzW3ldLnN1YnN0cihpbWFnZVNyY3NbeV0ubGFzdEluZGV4T2YoJy8nKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobG9hZGVkSW1hZ2Uuc3JjLmxhc3RJbmRleE9mKGltYWdlTmFtZSkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGVkSW1hZ2VzW3ldID0geyBpbWFnZTogbG9hZGVkSW1hZ2UgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobm90TG9hZGVkSW1hZ2VzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdJbWFnZXMgbG9hZGVkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZXF1ZW5jZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpcnN0SW1hZ2UgPSBsb2FkZWRJbWFnZXNbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICBmaXJzdEltYWdlLnRhZ3MgPSBhd2FpdCBmaW5kVGFnc0luT2JqZWN0VVJMKGJhc2VVcmkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXgpO1xuICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGxvYWRlZEltYWdlcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgSW1hZ2VJbmZvLCBJbWFnZUxvYWRlciB9IGZyb20gJy4vaW1hZ2UtbG9hZGVyJztcbmltcG9ydCB7IElucHV0U3RyZWFtIH0gZnJvbSAnLi9pbnB1dC1zdHJlYW0nO1xuaW1wb3J0IHsgSW5wdXRTdHJlYW1Db25maWcgfSBmcm9tICcuL2lucHV0LXN0cmVhbS1jb25maWcnO1xuXG5leHBvcnQgY2xhc3MgSW1hZ2VTdHJlYW0gZXh0ZW5kcyBJbnB1dFN0cmVhbSB7XG4gICAgcHJpdmF0ZSBfYmFzZVVybDogc3RyaW5nO1xuICAgIHByaXZhdGUgX2VuZGVkOiBib29sZWFuO1xuICAgIHByaXZhdGUgX2ZyYW1lSW5kZXg6IG51bWJlcjtcbiAgICBwcml2YXRlIF9oZWlnaHQ6IG51bWJlcjtcbiAgICBwcml2YXRlIF9pbWFnZXM6IEFycmF5PEltYWdlSW5mbz47XG4gICAgcHJpdmF0ZSBfbG9hZGVkOiBib29sZWFuO1xuICAgIHByaXZhdGUgX29mZnNldDogbnVtYmVyO1xuICAgIHByaXZhdGUgX3BhdXNlZDogYm9vbGVhbjtcbiAgICBwcml2YXRlIF9zaXplOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfd2lkdGg6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuX2NhbnZhc0hlaWdodCA9IDA7XG4gICAgICAgIHRoaXMuX2NhbnZhc1dpZHRoID0gMDtcbiAgICAgICAgdGhpcy5fYmFzZVVybCA9IG51bGw7XG4gICAgICAgIHRoaXMuX2VuZGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2ZyYW1lSW5kZXggPSAwO1xuICAgICAgICB0aGlzLl9oZWlnaHQgPSAwO1xuICAgICAgICB0aGlzLl9pbWFnZXMgPSBudWxsO1xuICAgICAgICB0aGlzLl9sb2FkZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fb2Zmc2V0ID0gMTtcbiAgICAgICAgdGhpcy5fcGF1c2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fc2l6ZSA9IDA7XG4gICAgICAgIHRoaXMuX3dpZHRoID0gMDtcbiAgICB9XG5cbiAgICBnZXQgcmVhbEhlaWdodCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5faGVpZ2h0O1xuICAgIH1cblxuICAgIGdldCByZWFsV2lkdGgoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dpZHRoO1xuICAgIH1cblxuICAgIGdldCBjb25maWcoKTogSW5wdXRTdHJlYW1Db25maWcge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29uZmlnO1xuICAgIH1cblxuICAgIHNldCBjb25maWcoY29uZmlnOiBJbnB1dFN0cmVhbUNvbmZpZykge1xuICAgICAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG5cbiAgICAgICAgaWYgKGNvbmZpZy5zZXF1ZW5jZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRoaXMuX2Jhc2VVcmwgPSBjb25maWcuc3JjO1xuICAgICAgICAgICAgdGhpcy5fc2l6ZSA9IDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9iYXNlVXJsID0gY29uZmlnLnNyYztcbiAgICAgICAgICAgIHRoaXMuX3NpemUgPSBjb25maWcubGVuZ3RoO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fbG9hZEltYWdlcygpO1xuICAgIH1cblxuICAgIGdldCBlbmRlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VuZGVkO1xuICAgIH1cblxuICAgIHNldEF0dHJpYnV0ZSgpIHsgfVxuXG4gICAgcGF1c2UoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3BhdXNlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcGxheSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fcGF1c2VkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgc2V0IGN1cnJlbnRUaW1lKHRpbWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9mcmFtZUluZGV4ID0gdGltZTtcbiAgICB9XG5cbiAgICBnZXRGcmFtZSgpOiBIVE1MVmlkZW9FbGVtZW50IHwgSW1hZ2VJbmZvIHtcbiAgICAgICAgbGV0IGZyYW1lOiBJbWFnZUluZm8gPSBudWxsO1xuXG4gICAgICAgIGlmICh0aGlzLl9sb2FkZWQgJiYgIXRoaXMuX3BhdXNlZCkge1xuICAgICAgICAgICAgZnJhbWUgPSB0aGlzLl9pbWFnZXNbdGhpcy5fZnJhbWVJbmRleF07XG5cbiAgICAgICAgICAgIGlmICh0aGlzLl9mcmFtZUluZGV4IDwgKHRoaXMuX3NpemUgLSAxKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2ZyYW1lSW5kZXgrKztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2VuZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyKCdlbmRlZCcsIFtdKTtcbiAgICAgICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmcmFtZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9sb2FkSW1hZ2VzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9sb2FkZWQgPSBmYWxzZTtcbiAgICAgICAgSW1hZ2VMb2FkZXIubG9hZCh0aGlzLl9iYXNlVXJsLCBpbWFnZXMgPT4ge1xuICAgICAgICAgICAgdGhpcy5faW1hZ2VzID0gaW1hZ2VzO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKGltYWdlc1swXS50YWdzICYmIGltYWdlc1swXS50YWdzLm9yaWVudGF0aW9uKSB7XG4gICAgICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgIGNhc2UgODoge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl93aWR0aCA9IGltYWdlc1swXS5pbWFnZS5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2hlaWdodCA9IGltYWdlc1swXS5pbWFnZS53aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fd2lkdGggPSBpbWFnZXNbMF0uaW1hZ2Uud2lkdGg7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2hlaWdodCA9IGltYWdlc1swXS5pbWFnZS5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9jYW52YXNXaWR0aCA9IHRoaXMuX2NhbGN1bGF0ZWRXaWR0aCA9IHRoaXMuX2NvbmZpZy5zaXplID8gdGhpcy5fd2lkdGggPiB0aGlzLl9oZWlnaHQgP1xuICAgICAgICAgICAgICAgIHRoaXMuX2NvbmZpZy5zaXplIDogdGhpcy5fd2lkdGggKiB0aGlzLl9jb25maWcuc2l6ZSAvIHRoaXMuX2hlaWdodCB8IDAgOiB0aGlzLl93aWR0aDtcbiAgICAgICAgICAgIHRoaXMuX2NhbnZhc0hlaWdodCA9IHRoaXMuX2NhbGN1bGF0ZWRIZWlnaHQgPSB0aGlzLl9jb25maWcuc2l6ZSA/IHRoaXMuX3dpZHRoID4gdGhpcy5faGVpZ2h0ID9cbiAgICAgICAgICAgICAgICB0aGlzLl9oZWlnaHQgKiB0aGlzLl9jb25maWcuc2l6ZSAvIHRoaXMuX3dpZHRoIHwgMCA6IHRoaXMuX2NvbmZpZy5zaXplIDogdGhpcy5faGVpZ2h0O1xuICAgICAgICAgICAgdGhpcy5fbG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuX2ZyYW1lSW5kZXggPSAwO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnRyaWdnZXIoJ2NhbnJlY29yZCcsIFtdKSwgMCk7XG4gICAgICAgIH0sIHRoaXMuX29mZnNldCwgdGhpcy5fc2l6ZSwgdGhpcy5fY29uZmlnLnNlcXVlbmNlKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBQb2ludCB9IGZyb20gJy4uL2NvbW1vbi9wb2ludCc7XG5pbXBvcnQgeyBCYXJjb2RlTG9jYXRvckNvbmZpZywgUGF0Y2hTaXplQ29uZmlnIH0gZnJvbSAnLi4vbG9jYXRvci9iYXJjb2RlLWxvY2F0b3ItY29uZmlnJztcbmltcG9ydCB7IElucHV0U3RyZWFtIH0gZnJvbSAnLi9pbnB1dC1zdHJlYW0nO1xuaW1wb3J0IHsgQXJlYUNvbmZpZyB9IGZyb20gJy4vaW5wdXQtc3RyZWFtLWNvbmZpZyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGltZW5zaW9uIHtcbiAgICB1bml0OiAnJScgfCAncHgnLFxuICAgIHZhbHVlOiBudW1iZXI7XG59XG5cbmZ1bmN0aW9uIF9jb21wdXRlRGl2aXNvcnMobjogbnVtYmVyKTogQXJyYXk8bnVtYmVyPiB7XG4gICAgY29uc3QgZGl2aXNvcnMgPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xuICAgIGNvbnN0IGxhcmdlRGl2aXNvcnMgPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xuXG4gICAgZm9yIChsZXQgZGl2aXNvciA9IDE7IGRpdmlzb3IgKiBkaXZpc29yIDw9IG47IGRpdmlzb3IrKykge1xuICAgICAgICBpZiAobiAlIGRpdmlzb3IgPT09IDApIHtcbiAgICAgICAgICAgIGRpdmlzb3JzLnB1c2goZGl2aXNvcik7XG4gICAgICAgICAgICBpZiAoZGl2aXNvciAqIGRpdmlzb3IgIT09IG4pIHtcbiAgICAgICAgICAgICAgICBsYXJnZURpdmlzb3JzLnVuc2hpZnQobiAvIGRpdmlzb3IgfCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkaXZpc29ycy5jb25jYXQobGFyZ2VEaXZpc29ycyk7XG59XG5cbmZ1bmN0aW9uIF9jb21wdXRlQ29tbW9uRGl2aXNvcnMobTogbnVtYmVyLCBuOiBudW1iZXIpOiBBcnJheTxudW1iZXI+IHtcbiAgICBpZiAobSA9PT0gbikge1xuICAgICAgICByZXR1cm4gX2NvbXB1dGVEaXZpc29ycyhtKTtcbiAgICB9XG5cbiAgICBjb25zdCBtYXggPSBtID4gbiA/IG0gOiBuO1xuICAgIGNvbnN0IG1pbiA9IG0gPiBuID8gbiA6IG07XG4gICAgY29uc3QgZGl2aXNvcnMgPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xuICAgIGNvbnN0IGxhcmdlRGl2aXNvcnMgPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xuXG4gICAgZm9yIChsZXQgZGl2aXNvciA9IDE7IGRpdmlzb3IgKiBkaXZpc29yIDw9IG1pbjsgZGl2aXNvcisrKSB7XG4gICAgICAgIGlmIChtYXggJSBkaXZpc29yID09PSAwICYmIG1pbiAlIGRpdmlzb3IgPT09IDApIHtcbiAgICAgICAgICAgIGRpdmlzb3JzLnB1c2goZGl2aXNvcik7XG4gICAgICAgICAgICBjb25zdCBsYXJnZURpdmlzb3IgPSBtaW4gLyBkaXZpc29yIHwgMDtcbiAgICAgICAgICAgIGlmIChkaXZpc29yICE9PSBsYXJnZURpdmlzb3IgJiYgbWF4ICUgbGFyZ2VEaXZpc29yID09PSAwKSB7XG4gICAgICAgICAgICAgICAgbGFyZ2VEaXZpc29ycy51bnNoaWZ0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGl2aXNvcnMuY29uY2F0KGxhcmdlRGl2aXNvcnMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlUGF0Y2hTaXplKHBhdGNoU2l6ZTogUGF0Y2hTaXplQ29uZmlnLCB7IHgsIHkgfTogUG9pbnQpOiBQb2ludCB7XG4gICAgY29uc3Qgd2lkZVNpZGUgPSBNYXRoLm1heCh4IHwgMCwgeSB8IDApIHwgMDtcbiAgICBjb25zdCBuck9mUGF0Y2hlc0xpc3QgPSBbOCwgMTAsIDE1LCAyMCwgMzIsIDYwLCA4MF07XG4gICAgY29uc3QgbnJPZlBhdGNoZXNNYXAgPSB7XG4gICAgICAgICd4LXNtYWxsJzogNSxcbiAgICAgICAgc21hbGw6IDQsXG4gICAgICAgIG1lZGl1bTogMyxcbiAgICAgICAgbGFyZ2U6IDIsXG4gICAgICAgICd4LWxhcmdlJzogMVxuICAgIH07XG4gICAgY29uc3QgbnJPZlBhdGNoZXNJbmRleCA9IG5yT2ZQYXRjaGVzTWFwW3BhdGNoU2l6ZV0gfHwgbnJPZlBhdGNoZXNNYXAubWVkaXVtIHwgMDtcbiAgICBjb25zdCBuck9mUGF0Y2hlcyA9IG5yT2ZQYXRjaGVzTGlzdFtuck9mUGF0Y2hlc0luZGV4XSB8IDA7XG4gICAgY29uc3QgZGVzaXJlZFBhdGNoU2l6ZSA9IHdpZGVTaWRlIC8gbnJPZlBhdGNoZXMgfCAwO1xuXG4gICAgZnVuY3Rpb24gZmluZFBhdGNoU2l6ZUZvckRpdmlzb3JzKGRpdmlzb3JzOiBBcnJheTxudW1iZXI+KTogUG9pbnQge1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIGxldCBmb3VuZCA9IGRpdmlzb3JzW2Rpdmlzb3JzLmxlbmd0aCA+PiAxXSB8IDA7XG5cbiAgICAgICAgd2hpbGUgKGkgPCAoZGl2aXNvcnMubGVuZ3RoIC0gMSkgJiYgZGl2aXNvcnNbaV0gPCBkZXNpcmVkUGF0Y2hTaXplKSB7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGkgPiAwKSB7XG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoZGl2aXNvcnNbaV0gLSBkZXNpcmVkUGF0Y2hTaXplKSA+IE1hdGguYWJzKGRpdmlzb3JzW2kgLSAxXSAtIGRlc2lyZWRQYXRjaFNpemUpKSB7XG4gICAgICAgICAgICAgICAgZm91bmQgPSBkaXZpc29yc1tpIC0gMV0gfCAwO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3VuZCA9IGRpdmlzb3JzW2ldIHwgMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZGVzaXJlZFBhdGNoU2l6ZSAvIGZvdW5kIDwgbnJPZlBhdGNoZXNMaXN0W25yT2ZQYXRjaGVzSW5kZXggKyAxXSAvIG5yT2ZQYXRjaGVzTGlzdFtuck9mUGF0Y2hlc0luZGV4XSAmJlxuICAgICAgICAgICAgZGVzaXJlZFBhdGNoU2l6ZSAvIGZvdW5kID4gbnJPZlBhdGNoZXNMaXN0W25yT2ZQYXRjaGVzSW5kZXggLSAxXSAvIG5yT2ZQYXRjaGVzTGlzdFtuck9mUGF0Y2hlc0luZGV4XSkge1xuICAgICAgICAgICAgcmV0dXJuIHsgeDogZm91bmQsIHk6IGZvdW5kIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3Qgb3B0aW1hbFBhdGNoU2l6ZSA9IGZpbmRQYXRjaFNpemVGb3JEaXZpc29ycyhfY29tcHV0ZUNvbW1vbkRpdmlzb3JzKHgsIHkpKSB8fFxuICAgICAgICBmaW5kUGF0Y2hTaXplRm9yRGl2aXNvcnMoX2NvbXB1dGVEaXZpc29ycyh3aWRlU2lkZSkpIHx8XG4gICAgICAgIGZpbmRQYXRjaFNpemVGb3JEaXZpc29ycyhfY29tcHV0ZURpdmlzb3JzKGRlc2lyZWRQYXRjaFNpemUgKiBuck9mUGF0Y2hlcykpO1xuXG4gICAgcmV0dXJuIG9wdGltYWxQYXRjaFNpemU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0ltYWdlQ29uc3RyYWludHMoaW5wdXRTdHJlYW06IElucHV0U3RyZWFtLCBjb25maWc6IEJhcmNvZGVMb2NhdG9yQ29uZmlnKSB7XG4gICAgbGV0IHdpZHRoID0gaW5wdXRTdHJlYW0ud2lkdGg7XG4gICAgbGV0IGhlaWdodCA9IGlucHV0U3RyZWFtLmhlaWdodDtcbiAgICBjb25zdCBzaGlmdCA9IGNvbmZpZy5oYWxmU2FtcGxlID8gMSA6IDAgfCAwO1xuXG4gICAgLy8gY2FsY3VsYXRlIHdpZHRoIGFuZCBoZWlnaHQgYmFzZWQgb24gYXJlYVxuICAgIGlmIChpbnB1dFN0cmVhbS5jb25maWcuYXJlYSkge1xuICAgICAgICBjb25zdCBhcmVhID0gY29tcHV0ZUltYWdlQXJlYSh3aWR0aCwgaGVpZ2h0LCBpbnB1dFN0cmVhbS5jb25maWcuYXJlYSk7XG4gICAgICAgIGlucHV0U3RyZWFtLnRvcExlZnQgPSBhcmVhLnRvcExlZnQ7XG4gICAgICAgIGlucHV0U3RyZWFtLnNldENhbnZhc1NpemUod2lkdGgsIGhlaWdodCk7XG4gICAgICAgIHdpZHRoID0gYXJlYS53aWR0aDtcbiAgICAgICAgaGVpZ2h0ID0gYXJlYS5oZWlnaHQ7XG4gICAgfVxuXG4gICAgY29uc3Qgc2l6ZSA9IHtcbiAgICAgICAgeDogd2lkdGggPj4gc2hpZnQsXG4gICAgICAgIHk6IGhlaWdodCA+PiBzaGlmdFxuICAgIH07XG5cbiAgICBjb25zdCBwYXRjaFNpemUgPSBjYWxjdWxhdGVQYXRjaFNpemUoY29uZmlnLnBhdGNoU2l6ZSwgc2l6ZSk7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1BhdGNoLVNpemU6JywgSlNPTi5zdHJpbmdpZnkocGF0Y2hTaXplKSk7XG4gICAgfVxuXG4gICAgaW5wdXRTdHJlYW0ud2lkdGggPSAoc2l6ZS54IC8gcGF0Y2hTaXplLnggPDwgc2hpZnQpICogcGF0Y2hTaXplLnggfCAwO1xuICAgIGlucHV0U3RyZWFtLmhlaWdodCA9IChzaXplLnkgLyBwYXRjaFNpemUueSA8PCBzaGlmdCkgKiBwYXRjaFNpemUueSB8IDA7XG5cbiAgICBpZiAoKGlucHV0U3RyZWFtLndpZHRoICUgcGF0Y2hTaXplLngpID09PSAwICYmIChpbnB1dFN0cmVhbS5oZWlnaHQgJSBwYXRjaFNpemUueSkgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1sZW5cbiAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIGRpbWVuc2lvbnMgZG8gbm90IGNvbXBseSB3aXRoIHRoZSBjdXJyZW50IHNldHRpbmdzOiB3aWR0aCAoJHt3aWR0aH0pIGFuZCBoZWlnaHQgKCR7aGVpZ2h0fSkgbXVzdCBiZSBhIG11bHRpcGxlIG9mICR7cGF0Y2hTaXplLnh9YCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfcGFyc2VDc3NEaW1lbnNpb25WYWx1ZXModmFsdWU6IHN0cmluZyk6IERpbWVuc2lvbiB7XG4gICAgY29uc3QgZGltZW5zaW9uOiBEaW1lbnNpb24gPSB7XG4gICAgICAgIHZhbHVlOiBwYXJzZUZsb2F0KHZhbHVlKSxcbiAgICAgICAgdW5pdDogdmFsdWUuaW5kZXhPZignJScpID09PSB2YWx1ZS5sZW5ndGggLSAxID8gJyUnIDogdmFsdWUuaW5kZXhPZigncHgnKSA9PT0gdmFsdWUubGVuZ3RoIC0gMiA/ICdweCcgOiAnJSdcbiAgICB9O1xuXG4gICAgcmV0dXJuIGRpbWVuc2lvbjtcbn1cblxuZXhwb3J0IGNvbnN0IF9kaW1lbnNpb25zQ29udmVydGVycyA9IHtcbiAgICBib3R0b206IChkaW1lbnNpb246IERpbWVuc2lvbiwgeyBoZWlnaHQgfSkgPT4gZGltZW5zaW9uLnVuaXQgPT09ICclJyA/XG4gICAgICAgIGhlaWdodCAtIGhlaWdodCAqIGRpbWVuc2lvbi52YWx1ZSAvIDEwMCB8IDAgOiBkaW1lbnNpb24udW5pdCA9PT0gJ3B4JyA/IGhlaWdodCAtIGRpbWVuc2lvbi52YWx1ZSA6IGhlaWdodCxcbiAgICBsZWZ0OiAoZGltZW5zaW9uOiBEaW1lbnNpb24sIHsgd2lkdGggfSkgPT4gZGltZW5zaW9uLnVuaXQgPT09ICclJyA/XG4gICAgICAgIHdpZHRoICogZGltZW5zaW9uLnZhbHVlIC8gMTAwIHwgMCA6IGRpbWVuc2lvbi51bml0ID09PSAncHgnID8gZGltZW5zaW9uLnZhbHVlIDogMCxcbiAgICByaWdodDogKGRpbWVuc2lvbjogRGltZW5zaW9uLCB7IHdpZHRoIH0pID0+IGRpbWVuc2lvbi51bml0ID09PSAnJScgP1xuICAgICAgICB3aWR0aCAtIHdpZHRoICogZGltZW5zaW9uLnZhbHVlIC8gMTAwIHwgMCA6IGRpbWVuc2lvbi51bml0ID09PSAncHgnID8gd2lkdGggLSBkaW1lbnNpb24udmFsdWUgOiB3aWR0aCxcbiAgICB0b3A6IChkaW1lbnNpb246IERpbWVuc2lvbiwgeyBoZWlnaHQgfSk6IG51bWJlciA9PiBkaW1lbnNpb24udW5pdCA9PT0gJyUnID9cbiAgICAgICAgaGVpZ2h0ICogZGltZW5zaW9uLnZhbHVlIC8gMTAwIHwgMCA6IGRpbWVuc2lvbi51bml0ID09PSAncHgnID8gZGltZW5zaW9uLnZhbHVlIDogMFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGVJbWFnZUFyZWEoaW5wdXRXaWR0aDogbnVtYmVyLCBpbnB1dEhlaWdodDogbnVtYmVyLCBhcmVhOiBBcmVhQ29uZmlnKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHsgd2lkdGg6IGlucHV0V2lkdGgsIGhlaWdodDogaW5wdXRIZWlnaHQgfTtcbiAgICBjb25zdCBwYXJzZWRBcmVhOiB7XG4gICAgICAgIGJvdHRvbT86IG51bWJlcjtcbiAgICAgICAgbGVmdD86IG51bWJlcjtcbiAgICAgICAgcmlnaHQ/OiBudW1iZXI7XG4gICAgICAgIHRvcD86IG51bWJlcjtcbiAgICB9ID0gT2JqZWN0LmtleXMoYXJlYSkucmVkdWNlKChyZXN1bHQsIGtleSkgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGFyZWFba2V5XTtcbiAgICAgICAgY29uc3QgcGFyc2VkID0gX3BhcnNlQ3NzRGltZW5zaW9uVmFsdWVzKHZhbHVlKTtcbiAgICAgICAgY29uc3QgY2FsY3VsYXRlZCA9IF9kaW1lbnNpb25zQ29udmVydGVyc1trZXldKHBhcnNlZCwgY29udGV4dCk7XG5cbiAgICAgICAgcmVzdWx0W2tleV0gPSBjYWxjdWxhdGVkO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0sIHt9KTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHRvcExlZnQ6IHsgeDogcGFyc2VkQXJlYS5sZWZ0LCB5OiBwYXJzZWRBcmVhLnRvcCB9LFxuICAgICAgICB3aWR0aDogcGFyc2VkQXJlYS5yaWdodCAtIHBhcnNlZEFyZWEubGVmdCxcbiAgICAgICAgaGVpZ2h0OiBwYXJzZWRBcmVhLmJvdHRvbSAtIHBhcnNlZEFyZWEudG9wXG4gICAgfTtcbn1cbiIsImltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi4vY29tbW9uL3BvaW50JztcbmltcG9ydCB7IEltYWdlSW5mbyB9IGZyb20gJy4vaW1hZ2UtbG9hZGVyJztcbmltcG9ydCB7IElucHV0U3RyZWFtQ29uZmlnIH0gZnJvbSAnLi9pbnB1dC1zdHJlYW0tY29uZmlnJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIElucHV0U3RyZWFtIHtcbiAgICBwcm90ZWN0ZWQgX2NhbGN1bGF0ZWRIZWlnaHQ6IG51bWJlcjtcbiAgICBwcm90ZWN0ZWQgX2NhbGN1bGF0ZWRXaWR0aDogbnVtYmVyO1xuICAgIHByb3RlY3RlZCBfY2FudmFzSGVpZ2h0OiBudW1iZXI7XG4gICAgcHJvdGVjdGVkIF9jYW52YXNXaWR0aDogbnVtYmVyO1xuICAgIHByb3RlY3RlZCBfY29uZmlnOiBJbnB1dFN0cmVhbUNvbmZpZztcbiAgICBwcm90ZWN0ZWQgX2V2ZW50TmFtZXM6IEFycmF5PHN0cmluZz47XG4gICAgcHJvdGVjdGVkIF9ldmVudEhhbmRsZXJzOiBNYXA8c3RyaW5nLCBBcnJheTxFdmVudExpc3RlbmVyPj47XG4gICAgcHJvdGVjdGVkIF90b3BMZWZ0OiBQb2ludDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl9jYW52YXNXaWR0aCA9IDA7XG4gICAgICAgIHRoaXMuX2NhbnZhc0hlaWdodCA9IDA7XG4gICAgICAgIHRoaXMuX2NvbmZpZyA9IG51bGw7XG4gICAgICAgIHRoaXMuX2V2ZW50TmFtZXMgPSBbJ2NhbnJlY29yZCcsICdlbmRlZCddO1xuICAgICAgICB0aGlzLl9ldmVudEhhbmRsZXJzID0gbmV3IE1hcDxzdHJpbmcsIEFycmF5PEV2ZW50TGlzdGVuZXI+PigpO1xuICAgICAgICB0aGlzLl90b3BMZWZ0ID0geyB4OiAwLCB5OiAwIH07XG4gICAgfVxuXG4gICAgYWJzdHJhY3QgZ2V0IHJlYWxIZWlnaHQoKTogbnVtYmVyO1xuXG4gICAgYWJzdHJhY3QgZ2V0IHJlYWxXaWR0aCgpOiBudW1iZXI7XG5cbiAgICBnZXQgaGVpZ2h0KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jYWxjdWxhdGVkSGVpZ2h0O1xuICAgIH1cblxuICAgIHNldCBoZWlnaHQoaGVpZ2h0OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fY2FsY3VsYXRlZEhlaWdodCA9IGhlaWdodDtcbiAgICB9XG5cbiAgICBnZXQgd2lkdGgoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhbGN1bGF0ZWRXaWR0aDtcbiAgICB9XG5cbiAgICBzZXQgd2lkdGgod2lkdGg6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9jYWxjdWxhdGVkV2lkdGggPSB3aWR0aDtcbiAgICB9XG5cbiAgICBnZXQgdG9wTGVmdCgpOiBQb2ludCB7XG4gICAgICAgIHJldHVybiB7IC4uLnRoaXMuX3RvcExlZnQgfTtcbiAgICB9XG5cbiAgICBzZXQgdG9wTGVmdCh0b3BMZWZ0OiBQb2ludCkge1xuICAgICAgICB0aGlzLl90b3BMZWZ0LnggPSB0b3BMZWZ0Lng7XG4gICAgICAgIHRoaXMuX3RvcExlZnQueSA9IHRvcExlZnQueTtcbiAgICB9XG5cbiAgICBzZXRDYW52YXNTaXplKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2NhbnZhc1dpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMuX2NhbnZhc0hlaWdodCA9IGhlaWdodDtcbiAgICB9XG5cbiAgICBnZXQgY2FudmFzSGVpZ2h0KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jYW52YXNIZWlnaHQ7XG4gICAgfVxuXG4gICAgZ2V0IGNhbnZhc1dpZHRoKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jYW52YXNXaWR0aDtcbiAgICB9XG5cbiAgICBnZXQgY29uZmlnKCk6IElucHV0U3RyZWFtQ29uZmlnIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbmZpZztcbiAgICB9XG5cbiAgICBzZXQgY29uZmlnKGNvbmZpZzogSW5wdXRTdHJlYW1Db25maWcpIHtcbiAgICAgICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuICAgIH1cblxuICAgIGFic3RyYWN0IGdldCBlbmRlZCgpOiBib29sZWFuO1xuXG4gICAgYWJzdHJhY3Qgc2V0QXR0cmlidXRlKG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQ7XG5cbiAgICBhYnN0cmFjdCBwYXVzZSgpOiB2b2lkO1xuXG4gICAgYWJzdHJhY3QgcGxheSgpOiB2b2lkO1xuXG4gICAgYWJzdHJhY3Qgc2V0IGN1cnJlbnRUaW1lKHRpbWU6IG51bWJlcik7XG5cbiAgICBhZGRFdmVudExpc3RlbmVyKGV2ZW50OiBzdHJpbmcsIGxpc3RlbmVyOiBFdmVudExpc3RlbmVyLCBfb3B0aW9ucz86IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuX2V2ZW50TmFtZXMuaW5kZXhPZihldmVudCkgIT09IC0xKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX2V2ZW50SGFuZGxlcnMuaGFzKGV2ZW50KSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2V2ZW50SGFuZGxlcnMuc2V0KGV2ZW50LCBuZXcgQXJyYXk8RXZlbnRMaXN0ZW5lcj4oKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9ldmVudEhhbmRsZXJzLmdldChldmVudCkucHVzaChsaXN0ZW5lcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbGVhckV2ZW50SGFuZGxlcnMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2V2ZW50SGFuZGxlcnMuY2xlYXIoKTtcbiAgICB9XG5cbiAgICB0cmlnZ2VyKGV2ZW50TmFtZTogc3RyaW5nLCBhcmdBcnJheT86IGFueSkge1xuICAgICAgICBjb25zdCBoYW5kbGVycyA9IHRoaXMuX2V2ZW50SGFuZGxlcnMuZ2V0KGV2ZW50TmFtZSk7XG5cbiAgICAgICAgaWYgKGhhbmRsZXJzICYmIGhhbmRsZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgaGFuZGxlcnMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyc1tqXS5hcHBseSh0aGlzLCBhcmdBcnJheSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhYnN0cmFjdCBnZXRGcmFtZSgpOiBIVE1MVmlkZW9FbGVtZW50IHwgSW1hZ2VJbmZvO1xufVxuIiwiaW1wb3J0IHsgVmlkZW9TdHJlYW0gfSBmcm9tICcuL3ZpZGVvLXN0cmVhbSc7XG5cbmV4cG9ydCBjbGFzcyBMaXZlU3RyZWFtIGV4dGVuZHMgVmlkZW9TdHJlYW0ge1xuICAgIGNvbnN0cnVjdG9yKHZpZGVvOiBIVE1MVmlkZW9FbGVtZW50KSB7XG4gICAgICAgIHZpZGVvLnNldEF0dHJpYnV0ZSgnYXV0b3BsYXknLCAnJyk7XG4gICAgICAgIHN1cGVyKHZpZGVvKTtcbiAgICB9XG5cbiAgICBnZXQgZW5kZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBJbWFnZUluZm8gfSBmcm9tICcuL2ltYWdlLWxvYWRlcic7XG5pbXBvcnQgeyBJbnB1dFN0cmVhbSB9IGZyb20gJy4vaW5wdXQtc3RyZWFtJztcbmltcG9ydCB7IElucHV0U3RyZWFtQ29uZmlnIH0gZnJvbSAnLi9pbnB1dC1zdHJlYW0tY29uZmlnJztcblxuZXhwb3J0IGNsYXNzIFZpZGVvU3RyZWFtIGV4dGVuZHMgSW5wdXRTdHJlYW0ge1xuICAgIHByaXZhdGUgX3ZpZGVvOiBIVE1MVmlkZW9FbGVtZW50O1xuXG4gICAgY29uc3RydWN0b3IodmlkZW86IEhUTUxWaWRlb0VsZW1lbnQpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLl92aWRlbyA9IHZpZGVvO1xuICAgIH1cblxuICAgIGdldCByZWFsSGVpZ2h0KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl92aWRlby52aWRlb0hlaWdodDtcbiAgICB9XG5cbiAgICBnZXQgcmVhbFdpZHRoKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl92aWRlby52aWRlb1dpZHRoO1xuICAgIH1cblxuICAgIHNldCBjb25maWcoY29uZmlnOiBJbnB1dFN0cmVhbUNvbmZpZykge1xuICAgICAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG4gICAgICAgIHRoaXMuX3ZpZGVvLnNyYyA9ICh0eXBlb2YgY29uZmlnLnNyYyAhPT0gJ3VuZGVmaW5lZCcpID8gY29uZmlnLnNyYyA6ICcnO1xuICAgIH1cblxuICAgIGdldCBlbmRlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZpZGVvLmVuZGVkO1xuICAgIH1cblxuICAgIHNldEF0dHJpYnV0ZShuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fdmlkZW8uc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgICB9XG5cbiAgICBwYXVzZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fdmlkZW8ucGF1c2UoKTtcbiAgICB9XG5cbiAgICBwbGF5KCk6IHZvaWQge1xuICAgICAgICB0aGlzLl92aWRlby5wbGF5KCk7XG4gICAgfVxuXG4gICAgc2V0IGN1cnJlbnRUaW1lKHRpbWU6IG51bWJlcikge1xuICAgICAgICBpZiAodGhpcy5fY29uZmlnLnR5cGUgIT09ICdMaXZlU3RyZWFtJykge1xuICAgICAgICAgICAgdGhpcy5fdmlkZW8uY3VycmVudFRpbWUgPSB0aW1lO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcihldmVudDogc3RyaW5nLCBsaXN0ZW5lcjogRXZlbnRMaXN0ZW5lciwgb3B0aW9ucz86IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgc3VwZXIuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIsIG9wdGlvbnMpO1xuXG4gICAgICAgIGlmICh0aGlzLl9ldmVudE5hbWVzLmluZGV4T2YoZXZlbnQpID09PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5fdmlkZW8uYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIsIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xlYXJFdmVudEhhbmRsZXJzKCk6IHZvaWQge1xuICAgICAgICAvLyBUT0RPOiBjb21lIHVwIHdpdGggYSB3YXkgdG8gcmVtb3ZlIHZpZGVvIGV2ZW50IGhhbmRsZXJzXG4gICAgICAgIC8vIHRoaXMuX2V2ZW50TmFtZXMuZm9yRWFjaChldmVudE5hbWUgPT4ge1xuICAgICAgICAvLyAgICAgY29uc3QgaGFuZGxlcnMgPSB0aGlzLl9ldmVudEhhbmRsZXJzLmdldChldmVudE5hbWUpO1xuICAgICAgICAvLyAgICAgaWYgKGhhbmRsZXJzICYmIGhhbmRsZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgLy8gICAgICAgICBoYW5kbGVycy5mb3JFYWNoKGhhbmRsZXIgPT4gdGhpcy5fdmlkZW8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGhhbmRsZXIpKTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfSk7XG4gICAgICAgIHN1cGVyLmNsZWFyRXZlbnRIYW5kbGVycygpO1xuICAgIH1cblxuICAgIHRyaWdnZXIoZXZlbnROYW1lOiBzdHJpbmcsIGFyZ0FycmF5PzogYW55KSB7XG4gICAgICAgIGlmIChldmVudE5hbWUgPT09ICdjYW5yZWNvcmQnKSB7XG4gICAgICAgICAgICB0aGlzLl9pbml0U2l6ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3VwZXIudHJpZ2dlcihldmVudE5hbWUsIGFyZ0FycmF5KVxuICAgIH1cblxuICAgIGdldEZyYW1lKCk6IEhUTUxWaWRlb0VsZW1lbnQgfCBJbWFnZUluZm8ge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmlkZW87XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaW5pdFNpemUoKSB7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy5fdmlkZW8udmlkZW9XaWR0aDtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5fdmlkZW8udmlkZW9IZWlnaHQ7XG5cbiAgICAgICAgdGhpcy5fY2FudmFzV2lkdGggPSB0aGlzLl9jYWxjdWxhdGVkV2lkdGggPVxuICAgICAgICAgICAgdGhpcy5fY29uZmlnLnNpemUgPyB3aWR0aCA+IGhlaWdodCA/IHRoaXMuX2NvbmZpZy5zaXplIDogd2lkdGggKiB0aGlzLl9jb25maWcuc2l6ZSAvIGhlaWdodCB8IDAgOiB3aWR0aDtcbiAgICAgICAgdGhpcy5fY2FudmFzSGVpZ2h0ID0gdGhpcy5fY2FsY3VsYXRlZEhlaWdodCA9XG4gICAgICAgICAgICB0aGlzLl9jb25maWcuc2l6ZSA/IHdpZHRoID4gaGVpZ2h0ID8gaGVpZ2h0ICogdGhpcy5fY29uZmlnLnNpemUgLyB3aWR0aCB8IDAgOiB0aGlzLl9jb25maWcuc2l6ZSA6IGhlaWdodDtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMaXZlU3RyZWFtIGV4dGVuZHMgVmlkZW9TdHJlYW0ge1xuICAgIGNvbnN0cnVjdG9yKHZpZGVvOiBIVE1MVmlkZW9FbGVtZW50KSB7XG4gICAgICAgIHZpZGVvLnNldEF0dHJpYnV0ZSgnYXV0b3BsYXknLCAnJyk7XG4gICAgICAgIHN1cGVyKHZpZGVvKTtcbiAgICB9XG5cbiAgICBnZXQgZW5kZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBJbWFnZVdyYXBwZXIgfSBmcm9tICcuLi9jb21tb24vaW1hZ2Utd3JhcHBlcic7XG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJy4uL2NvbW1vbi9wb2ludCc7XG5cbi8qKlxuICogSW52ZXJ0IG1hdHJpeFxuICogQHBhcmFtIG1hdHJpeCB0aGUgbWF0cml4IHRvIGludmVydFxuICogQHJldHVybnMgdGhlIGludmVydGVkIG1hdHJpeFxuICovXG5leHBvcnQgZnVuY3Rpb24gaW52ZXJ0KG1hdHJpeDogRmxvYXQzMkFycmF5KTogRmxvYXQzMkFycmF5IHtcbiAgICBjb25zdCBhMCA9IG1hdHJpeFswXTtcbiAgICBjb25zdCBhMSA9IG1hdHJpeFsxXTtcbiAgICBjb25zdCBhMiA9IG1hdHJpeFsyXTtcbiAgICBjb25zdCBhMyA9IG1hdHJpeFszXTtcbiAgICBjb25zdCBkZXRlcm1pbmFudCA9IGEwICogYTMgLSBhMiAqIGExO1xuXG4gICAgaWYgKCFkZXRlcm1pbmFudCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IEZsb2F0MzJBcnJheShbYTMgLyBkZXRlcm1pbmFudCwgLWExIC8gZGV0ZXJtaW5hbnQsIC1hMiAvIGRldGVybWluYW50LCBhMCAvIGRldGVybWluYW50XSk7XG59XG5cbi8qKlxuICogVHJhbnNmb3JtcyB0aGUgdmVjdG9yIHdpdGggYSBtYXRyaXhcbiAqIEBwYXJhbSB7IHgsIHkgfSB2ZWN0b3IgdG8gdHJhbnNmb3JtXG4gKiBAcGFyYW0gbWF0cml4IG1hdHJpeCB0byB0cmFuc2Zvcm0gd2l0aFxuICogQHJldHVybnMgdGhlIHRyYW5zZm9ybWVkIHZlY3RvclxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtV2l0aE1hdHJpeCh7IHgsIHkgfTogUG9pbnQsIG1hdHJpeDogRmxvYXQzMkFycmF5KTogUG9pbnQge1xuICAgIHJldHVybiB7XG4gICAgICAgIHg6IG1hdHJpeFswXSAqIHggKyBtYXRyaXhbMl0gKiB5LFxuICAgICAgICB5OiBtYXRyaXhbMV0gKiB4ICsgbWF0cml4WzNdICogeVxuICAgIH07XG59XG5cbmZ1bmN0aW9uIF9jb21wdXRlSGlzdG9ncmFtKGltYWdlV3JhcHBlcjogSW1hZ2VXcmFwcGVyLCBiaXRzUGVyUGl4ZWw6IG51bWJlcik6IEludDMyQXJyYXkge1xuICAgIGlmICghYml0c1BlclBpeGVsKSB7XG4gICAgICAgIGJpdHNQZXJQaXhlbCA9IDg7XG4gICAgfVxuXG4gICAgY29uc3QgaW1hZ2VEYXRhID0gaW1hZ2VXcmFwcGVyLmRhdGE7XG4gICAgY29uc3QgYml0U2hpZnQgPSA4IC0gYml0c1BlclBpeGVsO1xuICAgIGNvbnN0IGJ1Y2tldENvdW50ID0gMSA8PCBiaXRzUGVyUGl4ZWw7XG4gICAgY29uc3QgaGlzdG9ncmFtID0gbmV3IEludDMyQXJyYXkoYnVja2V0Q291bnQpO1xuXG4gICAgZm9yIChsZXQgaSA9IGltYWdlRGF0YS5sZW5ndGg7IGktLTspIHtcbiAgICAgICAgaGlzdG9ncmFtW2ltYWdlRGF0YVtpXSA+PiBiaXRTaGlmdF0rKztcbiAgICB9XG5cbiAgICByZXR1cm4gaGlzdG9ncmFtO1xufVxuXG5mdW5jdGlvbiBfZGV0ZXJtaW5lT3RzdVRocmVzaG9sZChpbWFnZVdyYXBwZXI6IEltYWdlV3JhcHBlciwgYml0c1BlclBpeGVsPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBpZiAoIWJpdHNQZXJQaXhlbCkge1xuICAgICAgICBiaXRzUGVyUGl4ZWwgPSA4O1xuICAgIH1cblxuICAgIGNvbnN0IGJpdFNoaWZ0ID0gOCAtIGJpdHNQZXJQaXhlbDtcbiAgICBjb25zdCBoaXN0ID0gX2NvbXB1dGVIaXN0b2dyYW0oaW1hZ2VXcmFwcGVyLCBiaXRzUGVyUGl4ZWwpO1xuICAgIGNvbnN0IHZldCA9IFswXTtcbiAgICBjb25zdCBtYXggPSAoMSA8PCBiaXRzUGVyUGl4ZWwpIC0gMTtcblxuICAgIGZ1bmN0aW9uIHB4KGluaXQ6IG51bWJlciwgZW5kOiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICBsZXQgc3VtID0gMDtcblxuICAgICAgICBmb3IgKGxldCBpID0gaW5pdDsgaSA8PSBlbmQ7IGkrKykge1xuICAgICAgICAgICAgc3VtICs9IGhpc3RbaV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VtO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG14KGluaXQ6IG51bWJlciwgZW5kOiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICBsZXQgc3VtID0gMDtcblxuICAgICAgICBmb3IgKGxldCBpID0gaW5pdDsgaSA8PSBlbmQ7IGkrKykge1xuICAgICAgICAgICAgc3VtICs9IGkgKiBoaXN0W2ldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1bTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBrID0gMTsgayA8IG1heDsgaysrKSB7XG4gICAgICAgIGNvbnN0IHAxID0gcHgoMCwgayk7XG4gICAgICAgIGNvbnN0IHAyID0gcHgoayArIDEsIG1heCk7XG4gICAgICAgIGNvbnN0IHAxMiA9IHAxICogcDIgfHwgMTtcbiAgICAgICAgY29uc3QgbTEgPSBteCgwLCBrKSAqIHAyO1xuICAgICAgICBjb25zdCBtMiA9IG14KGsgKyAxLCBtYXgpICogcDE7XG4gICAgICAgIGNvbnN0IG0xMiA9IG0xIC0gbTI7XG4gICAgICAgIHZldFtrXSA9IG0xMiAqIG0xMiAvIHAxMjtcbiAgICB9XG5cbiAgICAvLyBpbmRleCBvZiBtYXggZWxlbWVudFxuICAgIGNvbnN0IHRocmVzaG9sZCA9IHZldC5yZWR1Y2UoKG1heEluZGV4LCBpdGVtLCBpbmRleCwgYXJyYXkpID0+IGl0ZW0gPiBhcnJheVttYXhJbmRleF0gPyBpbmRleCA6IG1heEluZGV4LCAwKTtcblxuICAgIHJldHVybiB0aHJlc2hvbGQgPDwgYml0U2hpZnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvdHN1VGhyZXNob2xkKGltYWdlV3JhcHBlcjogSW1hZ2VXcmFwcGVyLCB0YXJnZXRXcmFwcGVyOiBJbWFnZVdyYXBwZXIpOiBudW1iZXIge1xuICAgIGNvbnN0IHRocmVzaG9sZCA9IF9kZXRlcm1pbmVPdHN1VGhyZXNob2xkKGltYWdlV3JhcHBlcik7XG4gICAgY29uc3QgdGFyZ2V0RGF0YSA9IHRhcmdldFdyYXBwZXIuZGF0YTtcblxuICAgIGltYWdlV3JhcHBlci5kYXRhLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgICB0YXJnZXREYXRhW2luZGV4XSA9IHZhbHVlIDwgdGhyZXNob2xkID8gMSA6IDA7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhyZXNob2xkO1xufVxuXG4vKipcbiAqIEBwYXJhbSBpbWFnZVdyYXBwZXIgaW5wdXQgaW1hZ2UgdG8gYmUgc2FtcGxlZFxuICogQHBhcmFtIG91dEltYWdlV3JhcHBlciB7SW1hZ2VXcmFwcGVyfSB0byBiZSBzdG9yZWQgaW5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhhbGZTYW1wbGUoaW1hZ2VXcmFwcGVyOiBJbWFnZVdyYXBwZXIsIG91dEltYWdlV3JhcHBlcjogSW1hZ2VXcmFwcGVyKTogdm9pZCB7XG4gICAgY29uc3QgaW1hZ2UgPSBpbWFnZVdyYXBwZXIuZGF0YTtcbiAgICBjb25zdCB3aWR0aCA9IGltYWdlV3JhcHBlci5zaXplLng7XG4gICAgY29uc3Qgb3V0SW1hZ2UgPSBvdXRJbWFnZVdyYXBwZXIuZGF0YTtcbiAgICBjb25zdCBlbmRJbmRleCA9IGltYWdlLmxlbmd0aDtcbiAgICBjb25zdCBvdXRXaWR0aCA9IHdpZHRoID4+IDE7XG4gICAgbGV0IHRvcFJvd0luZGV4ID0gMDtcbiAgICBsZXQgYm90dG9tUm93SW5kZXggPSB3aWR0aDtcbiAgICBsZXQgb3V0SW1nSW5kZXggPSAwO1xuXG4gICAgd2hpbGUgKGJvdHRvbVJvd0luZGV4IDwgZW5kSW5kZXgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvdXRXaWR0aDsgaSsrKSB7XG4gICAgICAgICAgICBvdXRJbWFnZVtvdXRJbWdJbmRleF0gPVxuICAgICAgICAgICAgICAgIChpbWFnZVt0b3BSb3dJbmRleF0gKyBpbWFnZVt0b3BSb3dJbmRleCArIDFdICsgaW1hZ2VbYm90dG9tUm93SW5kZXhdICsgaW1hZ2VbYm90dG9tUm93SW5kZXggKyAxXSkgPj4gMjtcbiAgICAgICAgICAgIG91dEltZ0luZGV4Kys7XG4gICAgICAgICAgICB0b3BSb3dJbmRleCArPSAyO1xuICAgICAgICAgICAgYm90dG9tUm93SW5kZXggKz0gMjtcbiAgICAgICAgfVxuICAgICAgICB0b3BSb3dJbmRleCArPSB3aWR0aDtcbiAgICAgICAgYm90dG9tUm93SW5kZXggKz0gd2lkdGg7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQm94IH0gZnJvbSAnLi4vY29tbW9uL2JveCc7XG5pbXBvcnQgeyBDbHVzdGVyIH0gZnJvbSAnLi4vY29tbW9uL2NsdXN0ZXInO1xuaW1wb3J0IHsgSFNWLCBoc3YycmdiLCBSR0IgfSBmcm9tICcuLi9jb21tb24vaHN2MnJnYic7XG5pbXBvcnQgeyBJbWFnZURlYnVnIH0gZnJvbSAnLi4vY29tbW9uL2ltYWdlLWRlYnVnJztcbmltcG9ydCB7IEltYWdlV3JhcHBlciB9IGZyb20gJy4uL2NvbW1vbi9pbWFnZS13cmFwcGVyJztcbmltcG9ydCB7IE1vbWVudCB9IGZyb20gJy4uL2NvbW1vbi9tb21lbnQnO1xuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuLi9jb21tb24vcG9pbnQnO1xuaW1wb3J0IHsgY2FsY3VsYXRlUGF0Y2hTaXplIH0gZnJvbSAnLi4vaW5wdXQvaW5wdXQtc3RyZWFtLXV0aWxzJztcbmltcG9ydCB7IEJhcmNvZGVMb2NhdG9yQ29uZmlnIH0gZnJvbSAnLi9iYXJjb2RlLWxvY2F0b3ItY29uZmlnJztcbmltcG9ydCB7IGhhbGZTYW1wbGUsIGludmVydCwgb3RzdVRocmVzaG9sZCwgdHJhbnNmb3JtV2l0aE1hdHJpeCB9IGZyb20gJy4vYmFyY29kZS1sb2NhdG9yLXV0aWxzJztcbmltcG9ydCB7IFJhc3Rlcml6ZXIgfSBmcm9tICcuL3Jhc3Rlcml6ZXInO1xuaW1wb3J0IHNrZWxldG9uaXplciBmcm9tICcuL3NrZWxldG9uaXplcic7XG5pbXBvcnQgeyBTZWFyY2hEaXJlY3Rpb25zIH0gZnJvbSAnLi90cmFjZXInO1xuXG5pbnRlcmZhY2UgUGF0Y2gge1xuICAgIGJveDogQm94O1xuICAgIGluZGV4OiBudW1iZXI7XG4gICAgbW9tZW50czogQXJyYXk8TW9tZW50PjtcbiAgICBwb3M6IFBvaW50O1xuICAgIHJhZDogbnVtYmVyO1xuICAgIHg6IG51bWJlcjtcbiAgICB5OiBudW1iZXI7XG59XG5cbnR5cGUgU2NlbGV0b25pemVyID0gYW55O1xuXG5jb25zdCBNb21lbnRTaW1pbGFyaXR5VGhyZXNob2xkID0gMC45O1xuXG5leHBvcnQgY2xhc3MgQmFyY29kZUxvY2F0b3Ige1xuICAgIHByaXZhdGUgX2NvbmZpZzogQmFyY29kZUxvY2F0b3JDb25maWc7XG4gICAgcHJpdmF0ZSBfaW5wdXRJbWFnZVdyYXBwZXI6IEltYWdlV3JhcHBlcjtcbiAgICBwcml2YXRlIF9jdXJyZW50SW1hZ2VXcmFwcGVyOiBJbWFnZVdyYXBwZXI7XG4gICAgcHJpdmF0ZSBfc2tlbEltYWdlV3JhcHBlcjogSW1hZ2VXcmFwcGVyO1xuICAgIHByaXZhdGUgX3N1YkltYWdlV3JhcHBlcjogSW1hZ2VXcmFwcGVyO1xuICAgIHByaXZhdGUgX2xhYmVsSW1hZ2VXcmFwcGVyOiBJbWFnZVdyYXBwZXI8QXJyYXk8bnVtYmVyPj47XG4gICAgcHJpdmF0ZSBfYmluYXJ5SW1hZ2VXcmFwcGVyOiBJbWFnZVdyYXBwZXI7XG4gICAgcHJpdmF0ZSBfcGF0Y2hHcmlkOiBJbWFnZVdyYXBwZXI7XG4gICAgcHJpdmF0ZSBfcGF0Y2hMYWJlbEdyaWQ6IEltYWdlV3JhcHBlcjxJbnQzMkFycmF5PjtcbiAgICBwcml2YXRlIF9pbWFnZVRvUGF0Y2hHcmlkOiBBcnJheTxQYXRjaD47XG4gICAgcHJpdmF0ZSBfcGF0Y2hTaXplOiBQb2ludDtcbiAgICBwcml2YXRlIF9iaW5hcnlDb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4gICAgcHJpdmF0ZSBfbnVtUGF0Y2hlczogUG9pbnQ7XG4gICAgcHJpdmF0ZSBfc2tlbGV0b25pemVyOiBTY2VsZXRvbml6ZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihpbnB1dEltYWdlV3JhcHBlcjogSW1hZ2VXcmFwcGVyLCBjb25maWc6IEJhcmNvZGVMb2NhdG9yQ29uZmlnKSB7XG4gICAgICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcbiAgICAgICAgdGhpcy5faW5wdXRJbWFnZVdyYXBwZXIgPSBpbnB1dEltYWdlV3JhcHBlcjtcbiAgICAgICAgdGhpcy5fbnVtUGF0Y2hlcyA9IHsgeDogMCwgeTogMCB9O1xuXG4gICAgICAgIHRoaXMuX2luaXRCdWZmZXJzKCk7XG4gICAgICAgIHRoaXMuX2luaXRDYW52YXMoKTtcbiAgICB9XG5cbiAgICBsb2NhdGUoKSB7XG4gICAgICAgIGlmICh0aGlzLl9jb25maWcuaGFsZlNhbXBsZSkge1xuICAgICAgICAgICAgaGFsZlNhbXBsZSh0aGlzLl9pbnB1dEltYWdlV3JhcHBlciwgdGhpcy5fY3VycmVudEltYWdlV3JhcHBlcik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9iaW5hcml6ZUltYWdlKCk7XG4gICAgICAgIGNvbnN0IHBhdGNoZXNGb3VuZCA9IHRoaXMuX2ZpbmRQYXRjaGVzKCk7XG4gICAgICAgIC8vIHJldHVybiB1bmxlc3MgNSUgb3IgbW9yZSBwYXRjaGVzIGFyZSBmb3VuZFxuICAgICAgICBpZiAocGF0Y2hlc0ZvdW5kLmxlbmd0aCA8IHRoaXMuX251bVBhdGNoZXMueCAqIHRoaXMuX251bVBhdGNoZXMueSAqIDAuMDUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcmFzdGVyaXplIGFyZWEgYnkgY29tcGFyaW5nIGFuZ3VsYXIgc2ltaWxhcml0eTtcbiAgICAgICAgY29uc3QgbWF4TGFiZWwgPSB0aGlzLl9yYXN0ZXJpemVBbmd1bGFyU2ltaWxhcml0eShwYXRjaGVzRm91bmQpO1xuICAgICAgICBpZiAobWF4TGFiZWwgPCAxKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNlYXJjaCBmb3IgYXJlYSB3aXRoIHRoZSBtb3N0IHBhdGNoZXMgKGJpZ2dlc3QgY29ubmVjdGVkIGFyZWEpXG4gICAgICAgIGNvbnN0IHRvcExhYmVscyA9IHRoaXMuX2ZpbmRCaWdnZXN0Q29ubmVjdGVkQXJlYXMobWF4TGFiZWwpO1xuICAgICAgICBpZiAodG9wTGFiZWxzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBib3hlcyA9IHRoaXMuX2ZpbmRCb3hlcyh0b3BMYWJlbHMsIG1heExhYmVsKTtcbiAgICAgICAgcmV0dXJuIGJveGVzO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2luaXRCdWZmZXJzKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5fY29uZmlnLmhhbGZTYW1wbGUpIHtcbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRJbWFnZVdyYXBwZXIgPSBuZXcgSW1hZ2VXcmFwcGVyKHtcbiAgICAgICAgICAgICAgICB4OiB0aGlzLl9pbnB1dEltYWdlV3JhcHBlci5zaXplLnggLyAyIHwgMCxcbiAgICAgICAgICAgICAgICB5OiB0aGlzLl9pbnB1dEltYWdlV3JhcHBlci5zaXplLnkgLyAyIHwgMFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50SW1hZ2VXcmFwcGVyID0gdGhpcy5faW5wdXRJbWFnZVdyYXBwZXI7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9wYXRjaFNpemUgPSBjYWxjdWxhdGVQYXRjaFNpemUodGhpcy5fY29uZmlnLnBhdGNoU2l6ZSwgdGhpcy5fY3VycmVudEltYWdlV3JhcHBlci5zaXplKTtcblxuICAgICAgICB0aGlzLl9udW1QYXRjaGVzLnggPSB0aGlzLl9jdXJyZW50SW1hZ2VXcmFwcGVyLnNpemUueCAvIHRoaXMuX3BhdGNoU2l6ZS54IHwgMDtcbiAgICAgICAgdGhpcy5fbnVtUGF0Y2hlcy55ID0gdGhpcy5fY3VycmVudEltYWdlV3JhcHBlci5zaXplLnkgLyB0aGlzLl9wYXRjaFNpemUueSB8IDA7XG5cbiAgICAgICAgdGhpcy5fYmluYXJ5SW1hZ2VXcmFwcGVyID0gbmV3IEltYWdlV3JhcHBlcih0aGlzLl9jdXJyZW50SW1hZ2VXcmFwcGVyLnNpemUsIHVuZGVmaW5lZCwgVWludDhBcnJheSwgZmFsc2UpO1xuXG4gICAgICAgIHRoaXMuX2xhYmVsSW1hZ2VXcmFwcGVyID0gbmV3IEltYWdlV3JhcHBlcih0aGlzLl9wYXRjaFNpemUsIHVuZGVmaW5lZCwgQXJyYXksIHRydWUpO1xuXG4gICAgICAgIGNvbnN0IHNrZWxldG9uSW1hZ2VEYXRhID0gbmV3IEFycmF5QnVmZmVyKDY0ICogMTAyNCk7XG4gICAgICAgIHRoaXMuX3N1YkltYWdlV3JhcHBlciA9IG5ldyBJbWFnZVdyYXBwZXIodGhpcy5fcGF0Y2hTaXplLCBuZXcgVWludDhBcnJheShza2VsZXRvbkltYWdlRGF0YSwgMCwgdGhpcy5fcGF0Y2hTaXplLnggKiB0aGlzLl9wYXRjaFNpemUueSkpO1xuICAgICAgICB0aGlzLl9za2VsSW1hZ2VXcmFwcGVyID0gbmV3IEltYWdlV3JhcHBlcih0aGlzLl9wYXRjaFNpemUsXG4gICAgICAgICAgICBuZXcgVWludDhBcnJheShza2VsZXRvbkltYWdlRGF0YSwgdGhpcy5fcGF0Y2hTaXplLnggKiB0aGlzLl9wYXRjaFNpemUueSAqIDMsIHRoaXMuX3BhdGNoU2l6ZS54ICogdGhpcy5fcGF0Y2hTaXplLnkpLFxuICAgICAgICAgICAgdW5kZWZpbmVkLCB0cnVlKTtcbiAgICAgICAgdGhpcy5fc2tlbGV0b25pemVyID0gc2tlbGV0b25pemVyKFxuICAgICAgICAgICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSA/IHdpbmRvdyA6ICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcpID8gc2VsZiA6IGdsb2JhbCxcbiAgICAgICAgICAgIHsgc2l6ZTogdGhpcy5fcGF0Y2hTaXplLnggfSxcbiAgICAgICAgICAgIHNrZWxldG9uSW1hZ2VEYXRhXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3Qgc2l6ZSA9IHtcbiAgICAgICAgICAgIHg6ICh0aGlzLl9jdXJyZW50SW1hZ2VXcmFwcGVyLnNpemUueCAvIHRoaXMuX3N1YkltYWdlV3JhcHBlci5zaXplLngpIHwgMCxcbiAgICAgICAgICAgIHk6ICh0aGlzLl9jdXJyZW50SW1hZ2VXcmFwcGVyLnNpemUueSAvIHRoaXMuX3N1YkltYWdlV3JhcHBlci5zaXplLnkpIHwgMFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9wYXRjaExhYmVsR3JpZCA9IG5ldyBJbWFnZVdyYXBwZXIoc2l6ZSwgdW5kZWZpbmVkLCBJbnQzMkFycmF5LCB0cnVlKTtcbiAgICAgICAgdGhpcy5fcGF0Y2hHcmlkID0gbmV3IEltYWdlV3JhcHBlcihzaXplLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuX2ltYWdlVG9QYXRjaEdyaWQgPSBuZXcgQXJyYXk8UGF0Y2g+KHRoaXMuX3BhdGNoTGFiZWxHcmlkLmRhdGEubGVuZ3RoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9pbml0Q2FudmFzKCkge1xuICAgICAgICBpZiAodGhpcy5fY29uZmlnLnVzZVdvcmtlciB8fCB0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgY2FudmFzLmNsYXNzTmFtZSA9ICdiaW5hcnlCdWZmZXInO1xuICAgICAgICBjYW52YXMud2lkdGggPSB0aGlzLl9iaW5hcnlJbWFnZVdyYXBwZXIuc2l6ZS54O1xuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gdGhpcy5fYmluYXJ5SW1hZ2VXcmFwcGVyLnNpemUueTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdGhpcy5fY29uZmlnLmRlYnVnICYmIHRoaXMuX2NvbmZpZy5kZWJ1Zy5zaG93Q2FudmFzKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVidWcnKS5hcHBlbmRDaGlsZChjYW52YXMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2JpbmFyeUNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgYm91bmRpbmcgYm94IHdoaWNoIGVuY2xvc2VzIGFsbCB0aGUgZ2l2ZW4gcGF0Y2hlc1xuICAgICAqIEByZXR1cm5zIFRoZSBtaW5pbWFsIGJvdW5kaW5nIGJveFxuICAgICAqL1xuICAgIHByaXZhdGUgX2JveEZyb21QYXRjaGVzKHBhdGNoZXM6IEFycmF5PFBhdGNoPik6IEJveCB7XG4gICAgICAgIGNvbnN0IGRlYnVnID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLl9jb25maWcuZGVidWc7XG4gICAgICAgIGxldCBhdmVyYWdlUmFkID0gcGF0Y2hlcy5yZWR1Y2UoKHN1bSwgeyBwb3MsIHJhZCB9KSA9PiB7XG4gICAgICAgICAgICBpZiAoZGVidWcgJiYgZGVidWcuc2hvd1BhdGNoZXMpIHtcbiAgICAgICAgICAgICAgICAvLyBkcmF3IGFsbCBwYXRjaGVzIHdoaWNoIGFyZSB0byBiZSB0YWtlbiBpbnRvIGNvbnNpZGVyYXRpb25cbiAgICAgICAgICAgICAgICB0aGlzLl9kcmF3UmVjdChwb3MsIHRoaXMuX3N1YkltYWdlV3JhcHBlci5zaXplLCAncmVkJywgMSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBzdW0gKyByYWQ7XG4gICAgICAgIH0sIDApIC8gcGF0Y2hlcy5sZW5ndGg7XG5cbiAgICAgICAgYXZlcmFnZVJhZCA9IChhdmVyYWdlUmFkICogMTgwIC8gTWF0aC5QSSArIDkwKSAlIDE4MCAtIDkwO1xuICAgICAgICBpZiAoYXZlcmFnZVJhZCA8IDApIHtcbiAgICAgICAgICAgIGF2ZXJhZ2VSYWQgKz0gMTgwO1xuICAgICAgICB9XG4gICAgICAgIGF2ZXJhZ2VSYWQgPSAoMTgwIC0gYXZlcmFnZVJhZCkgKiBNYXRoLlBJIC8gMTgwO1xuXG4gICAgICAgIGNvbnN0IGNvcyA9IE1hdGguY29zKGF2ZXJhZ2VSYWQpO1xuICAgICAgICBjb25zdCBzaW4gPSBNYXRoLnNpbihhdmVyYWdlUmFkKTtcbiAgICAgICAgY29uc3QgbWF0cml4ID0gbmV3IEZsb2F0MzJBcnJheShbY29zLCBzaW4sIC1zaW4sIGNvc10pO1xuICAgICAgICBjb25zdCBpbnZlcnNlTWF0cml4ID0gaW52ZXJ0KG1hdHJpeCk7XG5cbiAgICAgICAgLy8gaXRlcmF0ZSBvdmVyIHBhdGNoZXMgYW5kIHJvdGF0ZSBieSBhbmdsZVxuICAgICAgICBwYXRjaGVzLmZvckVhY2goKHsgYm94IH0pID0+IHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgNDsgaisrKSB7XG4gICAgICAgICAgICAgICAgYm94W2pdID0gdHJhbnNmb3JtV2l0aE1hdHJpeChib3hbal0sIG1hdHJpeCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChkZWJ1ZyAmJiBkZWJ1Zy5ib3hGcm9tUGF0Y2hlcy5zaG93VHJhbnNmb3JtZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9kcmF3UGF0aChib3gsICcjOTlmZjAwJywgMik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBtaW5YID0gdGhpcy5fYmluYXJ5SW1hZ2VXcmFwcGVyLnNpemUueDtcbiAgICAgICAgbGV0IG1pblkgPSB0aGlzLl9iaW5hcnlJbWFnZVdyYXBwZXIuc2l6ZS55O1xuICAgICAgICBsZXQgbWF4WCA9IC1taW5YO1xuICAgICAgICBsZXQgbWF4WSA9IC1taW5ZO1xuXG4gICAgICAgIC8vIGZpbmQgYm91bmRpbmcgYm94XG4gICAgICAgIHBhdGNoZXMuZm9yRWFjaCgoeyBib3ggfSkgPT4ge1xuICAgICAgICAgICAgYm94LmZvckVhY2goKHsgeCwgeSB9KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHggPCBtaW5YKSB7XG4gICAgICAgICAgICAgICAgICAgIG1pblggPSB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoeCA+IG1heFgpIHtcbiAgICAgICAgICAgICAgICAgICAgbWF4WCA9IHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh5IDwgbWluWSkge1xuICAgICAgICAgICAgICAgICAgICBtaW5ZID0geTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHkgPiBtYXhZKSB7XG4gICAgICAgICAgICAgICAgICAgIG1heFkgPSB5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgYm94OiBCb3ggPSBbeyB4OiBtaW5YLCB5OiBtaW5ZIH0sIHsgeDogbWF4WCwgeTogbWluWSB9LCB7IHg6IG1heFgsIHk6IG1heFkgfSwgeyB4OiBtaW5YLCB5OiBtYXhZIH1dO1xuXG4gICAgICAgIGlmIChkZWJ1ZyAmJiBkZWJ1Zy5ib3hGcm9tUGF0Y2hlcy5zaG93VHJhbnNmb3JtZWRCb3gpIHtcbiAgICAgICAgICAgIHRoaXMuX2RyYXdQYXRoKGJveCwgJyNmZjAwMDAnLCAyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHJldmVyc2Ugcm90YXRpb25cbiAgICAgICAgYm94ID0gYm94Lm1hcCh2ZXJ0ZXggPT4gdHJhbnNmb3JtV2l0aE1hdHJpeCh2ZXJ0ZXgsIGludmVyc2VNYXRyaXgpKSBhcyBCb3g7XG5cbiAgICAgICAgaWYgKGRlYnVnICYmIGRlYnVnLmJveEZyb21QYXRjaGVzLnNob3dCQikge1xuICAgICAgICAgICAgdGhpcy5fZHJhd1BhdGgoYm94LCAnI2ZmMDAwMCcsIDIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy5oYWxmU2FtcGxlKSB7XG4gICAgICAgICAgICAvLyBzY2FsZVxuICAgICAgICAgICAgYm94ID0gYm94Lm1hcCgoeyB4LCB5IH0pID0+ICh7IHg6IHggKiAyLCB5OiB5ICo9IDIgfSkpIGFzIEJveDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBib3g7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIGJpbmFyeSBpbWFnZSBvZiB0aGUgY3VycmVudCBpbWFnZVxuICAgICAqL1xuICAgIHByaXZhdGUgX2JpbmFyaXplSW1hZ2UoKTogdm9pZCB7XG4gICAgICAgIG90c3VUaHJlc2hvbGQodGhpcy5fY3VycmVudEltYWdlV3JhcHBlciwgdGhpcy5fYmluYXJ5SW1hZ2VXcmFwcGVyKTtcbiAgICAgICAgdGhpcy5fYmluYXJ5SW1hZ2VXcmFwcGVyLnplcm9Cb3JkZXIoKTtcblxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLl9jb25maWcuZGVidWcgJiYgdGhpcy5fY29uZmlnLmRlYnVnLnNob3dDYW52YXMpIHtcbiAgICAgICAgICAgIHRoaXMuX2JpbmFyeUltYWdlV3JhcHBlci5zaG93KHRoaXMuX2JpbmFyeUNvbnRleHQsIDI1NSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJdGVyYXRlIG92ZXIgdGhlIGVudGlyZSBpbWFnZSwgZXh0cmFjdCBwYXRjaGVzXG4gICAgICovXG4gICAgcHJpdmF0ZSBfZmluZFBhdGNoZXMoKTogQXJyYXk8UGF0Y2g+IHtcbiAgICAgICAgY29uc3QgZGVidWcgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuX2NvbmZpZy5kZWJ1ZztcbiAgICAgICAgbGV0IHBhdGNoZXNGb3VuZCA9IG5ldyBBcnJheTxQYXRjaD4oKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX251bVBhdGNoZXMueDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuX251bVBhdGNoZXMueTsgaisrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeCA9IHRoaXMuX3N1YkltYWdlV3JhcHBlci5zaXplLnggKiBpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHkgPSB0aGlzLl9zdWJJbWFnZVdyYXBwZXIuc2l6ZS55ICogajtcblxuICAgICAgICAgICAgICAgIC8vIHNlcGVyYXRlIHBhcnRzXG4gICAgICAgICAgICAgICAgdGhpcy5fc2tlbGV0b25pemUoeCwgeSk7XG5cbiAgICAgICAgICAgICAgICAvLyBSYXN0ZXJpemUsIGZpbmQgaW5kaXZpZHVhbCBiYXJzXG4gICAgICAgICAgICAgICAgdGhpcy5fc2tlbEltYWdlV3JhcHBlci56ZXJvQm9yZGVyKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fbGFiZWxJbWFnZVdyYXBwZXIuZGF0YS5maWxsKDApO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJhc3Rlcml6ZXIgPSBuZXcgUmFzdGVyaXplcih0aGlzLl9za2VsSW1hZ2VXcmFwcGVyLCB0aGlzLl9sYWJlbEltYWdlV3JhcHBlcik7XG4gICAgICAgICAgICAgICAgY29uc3QgcmFzdGVyUmVzdWx0ID0gcmFzdGVyaXplci5yYXN0ZXJpemUoMCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoZGVidWcgJiYgZGVidWcuc2hvd0xhYmVscykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9sYWJlbEltYWdlV3JhcHBlci5vdmVybGF5KHRoaXMuX2JpbmFyeUNvbnRleHQsIDM2MCAvIHJhc3RlclJlc3VsdC5jb3VudCB8IDAsIHgsIHkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIGNhbGN1bGF0ZSBtb21lbnRzIGZyb20gdGhlIHNrZWxldG9uaXplZCBwYXRjaFxuICAgICAgICAgICAgICAgIGNvbnN0IG1vbWVudHMgPSB0aGlzLl9sYWJlbEltYWdlV3JhcHBlci5tb21lbnRzKHJhc3RlclJlc3VsdC5jb3VudCk7XG5cbiAgICAgICAgICAgICAgICAvLyBleHRyYWN0IGVsaWdpYmxlIHBhdGNoZXNcbiAgICAgICAgICAgICAgICBjb25zdCBwYXRjaCA9IHRoaXMuX2Rlc2NyaWJlUGF0Y2gobW9tZW50cywgaiAqIHRoaXMuX251bVBhdGNoZXMueCArIGksIHgsIHkpO1xuICAgICAgICAgICAgICAgIGlmIChwYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICBwYXRjaGVzRm91bmQucHVzaChwYXRjaCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlYnVnICYmIGRlYnVnLnNob3dGb3VuZFBhdGNoZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2RyYXdSZWN0KHBhdGNoLnBvcywgdGhpcy5fc3ViSW1hZ2VXcmFwcGVyLnNpemUsICcjOTlmZjAwJywgMik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGF0Y2hlc0ZvdW5kO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZpbmRzIHRob3NlIGNvbm5lY3RlZCBhcmVhcyB3aGljaCBjb250YWluIGF0IGxlYXN0IDYgcGF0Y2hlc1xuICAgICAqIGFuZCByZXR1cm5zIHRoZW0gb3JkZXJlZCBERVNDIGJ5IHRoZSBudW1iZXIgb2YgY29udGFpbmVkIHBhdGNoZXNcbiAgICAgKiBAcGFyYW0gbWF4TGFiZWxcbiAgICAgKi9cbiAgICBwcml2YXRlIF9maW5kQmlnZ2VzdENvbm5lY3RlZEFyZWFzKG1heExhYmVsOiBudW1iZXIpOiBBcnJheTxudW1iZXI+IHtcbiAgICAgICAgbGV0IGxhYmVsSGlzdCA9IG5ldyBBcnJheTxudW1iZXI+KG1heExhYmVsKS5maWxsKDApO1xuXG4gICAgICAgIHRoaXMuX3BhdGNoTGFiZWxHcmlkLmRhdGEuZm9yRWFjaCgoZGF0YTogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICBpZiAoZGF0YSA+IDApIHtcbiAgICAgICAgICAgICAgICBsYWJlbEhpc3RbZGF0YSAtIDFdKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGV4dHJhY3QgdG9wIGFyZWFzIHdpdGggYXQgbGVhc3QgNiBwYXRjaGVzIHByZXNlbnRcbiAgICAgICAgY29uc3QgdG9wTGFiZWxzID0gbGFiZWxIaXN0Lm1hcCgodmFsdWUsIGluZGV4KSA9PiAoeyB2YWx1ZSwgaW5kZXggfSkpXG4gICAgICAgICAgICAuZmlsdGVyKCh7IHZhbHVlIH0pID0+IHZhbHVlID49IDUpLnNvcnQoKGEsIGIpID0+IGIudmFsdWUgLSBhLnZhbHVlKS5tYXAoKHsgaW5kZXggfSkgPT4gaW5kZXggKyAxKTtcblxuICAgICAgICByZXR1cm4gdG9wTGFiZWxzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgcHJpdmF0ZSBfZmluZEJveGVzKHRvcExhYmVsczogQXJyYXk8bnVtYmVyPiwgbWF4TGFiZWw6IG51bWJlcik6IEFycmF5PEJveD4ge1xuICAgICAgICBjb25zdCBib3hlcyA9IG5ldyBBcnJheTxCb3g+KCk7XG4gICAgICAgIGNvbnN0IHNob3dSZW1haW5pbmdQYXRjaExhYmVscyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiZcbiAgICAgICAgICAgIHRoaXMuX2NvbmZpZy5kZWJ1ZyAmJiB0aGlzLl9jb25maWcuZGVidWcuc2hvd1JlbWFpbmluZ1BhdGNoTGFiZWxzO1xuXG4gICAgICAgIHRvcExhYmVscy5mb3JFYWNoKGxhYmVsID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhdGNoZXMgPSBuZXcgQXJyYXk8UGF0Y2g+KCk7XG5cbiAgICAgICAgICAgIHRoaXMuX3BhdGNoTGFiZWxHcmlkLmRhdGEuZm9yRWFjaCgoZGF0YTogbnVtYmVyLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEgPT09IGxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGNoZXMucHVzaCh0aGlzLl9pbWFnZVRvUGF0Y2hHcmlkW2luZGV4XSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGJveCA9IHRoaXMuX2JveEZyb21QYXRjaGVzKHBhdGNoZXMpO1xuXG4gICAgICAgICAgICBpZiAoYm94KSB7XG4gICAgICAgICAgICAgICAgYm94ZXMucHVzaChib3gpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHNob3dSZW1haW5pbmdQYXRjaExhYmVscykge1xuICAgICAgICAgICAgICAgICAgICAvLyBkcmF3IHBhdGNoLWxhYmVscyBpZiByZXF1ZXN0ZWRcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaHN2OiBIU1YgPSBbKGxhYmVsIC8gKG1heExhYmVsICsgMSkpICogMzYwLCAxLCAxXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmdiOiBSR0IgPSBbMCwgMCwgMF07XG4gICAgICAgICAgICAgICAgICAgIGhzdjJyZ2IoaHN2LCByZ2IpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gYHJnYigke3JnYi5qb2luKCcsJyl9KWA7XG5cbiAgICAgICAgICAgICAgICAgICAgcGF0Y2hlcy5mb3JFYWNoKCh7IHBvcyB9KSA9PiB0aGlzLl9kcmF3UmVjdChwb3MsIHRoaXMuX3N1YkltYWdlV3JhcHBlci5zaXplLCBjb2xvciwgMikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGJveGVzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZpbmQgc2ltaWxhciBtb21lbnRzICh2aWEgY2x1c3RlcilcbiAgICAgKiBAcGFyYW0gbW9tZW50c1xuICAgICAqL1xuICAgIHByaXZhdGUgX3NpbWlsYXJNb21lbnRzKG1vbWVudHM6IEFycmF5PE1vbWVudD4pOiBBcnJheTxNb21lbnQ+IHtcbiAgICAgICAgY29uc3QgY2x1c3RlcnMgPSBDbHVzdGVyLmNsdXN0ZXJpemUobW9tZW50cywgTW9tZW50U2ltaWxhcml0eVRocmVzaG9sZCk7XG4gICAgICAgIGNvbnN0IHRvcENsdXN0ZXIgPSBjbHVzdGVycy5yZWR1Y2UoKHRvcCwgaXRlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY291bnQgPSBpdGVtLm1vbWVudHMubGVuZ3RoO1xuICAgICAgICAgICAgcmV0dXJuIGNvdW50ID4gdG9wLmNvdW50ID8geyBpdGVtLCBjb3VudCB9IDogdG9wO1xuICAgICAgICB9LCB7IGl0ZW06IHsgbW9tZW50czogW10gfSwgY291bnQ6IDAgfSk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRvcENsdXN0ZXIuaXRlbS5tb21lbnRzO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfc2tlbGV0b25pemUoeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fYmluYXJ5SW1hZ2VXcmFwcGVyLnN1YkltYWdlQXNDb3B5KHRoaXMuX3N1YkltYWdlV3JhcHBlciwgeCwgeSk7XG4gICAgICAgIHRoaXMuX3NrZWxldG9uaXplci5za2VsZXRvbml6ZSgpO1xuXG4gICAgICAgIC8vIFNob3cgc2tlbGV0b24gaWYgcmVxdWVzdGVkXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuX2NvbmZpZy5kZWJ1ZyAmJiB0aGlzLl9jb25maWcuZGVidWcuc2hvd1NrZWxldG9uKSB7XG4gICAgICAgICAgICB0aGlzLl9za2VsSW1hZ2VXcmFwcGVyLm92ZXJsYXkodGhpcy5fYmluYXJ5Q29udGV4dCwgMzYwLCB4LCB5KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4dHJhY3RzIGFuZCBkZXNjcmliZXMgdGhvc2UgcGF0Y2hlcyB3aGljaCBzZWVtIHRvIGNvbnRhaW4gYSBiYXJjb2RlIHBhdHRlcm5cbiAgICAgKiBAcGFyYW0gbW9tZW50c1xuICAgICAqIEBwYXJhbSBpbmRleFxuICAgICAqIEBwYXJhbSB4XG4gICAgICogQHBhcmFtIHlcbiAgICAgKiBAcmV0dXJucyBsaXN0IG9mIHBhdGNoZXNcbiAgICAgKi9cbiAgICBwcml2YXRlIF9kZXNjcmliZVBhdGNoKG1vbWVudHM6IEFycmF5PE1vbWVudD4sIGluZGV4OiBudW1iZXIsIHg6IG51bWJlciwgeTogbnVtYmVyKTogUGF0Y2gge1xuICAgICAgICBpZiAobW9tZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBjb25zdCBtaW5Db21wb25lbnRXZWlnaHQgPSBNYXRoLmNlaWwodGhpcy5fcGF0Y2hTaXplLnggLyAzKTtcbiAgICAgICAgICAgIC8vIG9ubHkgY29sbGVjdCBtb21lbnRzIHdoaWNoIGFyZWEgY292ZXJzIGF0IGxlYXN0IG1pbkNvbXBvbmVudFdlaWdodCBwaXhlbHNcbiAgICAgICAgICAgIGNvbnN0IGVsaWdpYmxlTW9tZW50cyA9IG1vbWVudHMuZmlsdGVyKG1vbWVudCA9PiBtb21lbnQubTAwID4gbWluQ29tcG9uZW50V2VpZ2h0KTtcblxuICAgICAgICAgICAgLy8gaWYgYXQgbGVhc3QgMiBtb21lbnRzIGFyZSBmb3VuZCB3aGljaCBoYXZlIGF0IGxlYXN0IG1pbkNvbXBvbmVudFdlaWdodHMgY292ZXJlZFxuICAgICAgICAgICAgaWYgKGVsaWdpYmxlTW9tZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWF0Y2hpbmdNb21lbnRzID0gdGhpcy5fc2ltaWxhck1vbWVudHMoZWxpZ2libGVNb21lbnRzKTtcbiAgICAgICAgICAgICAgICBjb25zdCBsZW5ndGggPSBtYXRjaGluZ01vbWVudHMubGVuZ3RoIHwgMDtcblxuICAgICAgICAgICAgICAgIC8vIE9ubHkgdHdvIG9mIHRoZSBtb21lbnRzIGFyZSBhbGxvd2VkIG5vdCB0byBmaXQgaW50byB0aGUgZXF1YXRpb25cbiAgICAgICAgICAgICAgICBpZiAobGVuZ3RoID4gMSAmJiAobGVuZ3RoIDw8IDIpID49IGVsaWdpYmxlTW9tZW50cy5sZW5ndGggKiAzICYmIChsZW5ndGggPDwgMikgPiBtb21lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBkZXRlcm1pbmUgdGhlIHNpbWlsYXJpdHkgb2YgdGhlIG1vbWVudHNcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmFkID0gbWF0Y2hpbmdNb21lbnRzLnJlZHVjZSgoc3VtOiBudW1iZXIsIG1vbWVudDogTW9tZW50KSA9PiBzdW0gKyBtb21lbnQucmFkLCAwKSAvIGxlbmd0aDtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3M6IHsgeCwgeSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgYm94OiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB4LCB5IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB4OiB4ICsgdGhpcy5fc3ViSW1hZ2VXcmFwcGVyLnNpemUueCwgeSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgeDogeCArIHRoaXMuX3N1YkltYWdlV3JhcHBlci5zaXplLngsIHk6IHkgKyB0aGlzLl9zdWJJbWFnZVdyYXBwZXIuc2l6ZS55IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB4LCB5OiB5ICsgdGhpcy5fc3ViSW1hZ2VXcmFwcGVyLnNpemUueSB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9tZW50czogbWF0Y2hpbmdNb21lbnRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmFkLFxuICAgICAgICAgICAgICAgICAgICAgICAgeDogTWF0aC5jb3MocmFkKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IE1hdGguc2luKHJhZClcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9ub3RZZXRQcm9jZXNzZWQoKTogbnVtYmVyIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9wYXRjaExhYmVsR3JpZC5kYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fcGF0Y2hMYWJlbEdyaWQuZGF0YVtpXSA9PT0gMCAmJiB0aGlzLl9wYXRjaEdyaWQuZGF0YVtpXSA9PT0gMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9wYXRjaExhYmVsR3JpZC5kYXRhLmxlbmd0aDtcbiAgICB9XG5cbiAgICBwcml2YXRlIF90cmFjZShjdXJyZW50SW5kZXg6IG51bWJlciwgbGFiZWw6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBjb25zdCB0aHJlc2hvbGQgPSAwLjk1O1xuICAgICAgICBjb25zdCBjdXJyZW50OiBQb2ludCA9IHtcbiAgICAgICAgICAgIHg6IGN1cnJlbnRJbmRleCAlIHRoaXMuX3BhdGNoTGFiZWxHcmlkLnNpemUueCxcbiAgICAgICAgICAgIHk6IChjdXJyZW50SW5kZXggLyB0aGlzLl9wYXRjaExhYmVsR3JpZC5zaXplLngpIHwgMFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChjdXJyZW50SW5kZXggPCB0aGlzLl9wYXRjaExhYmVsR3JpZC5kYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFBhdGNoID0gdGhpcy5faW1hZ2VUb1BhdGNoR3JpZFtjdXJyZW50SW5kZXhdO1xuICAgICAgICAgICAgLy8gYXNzaWduIGxhYmVsXG4gICAgICAgICAgICB0aGlzLl9wYXRjaExhYmVsR3JpZC5kYXRhW2N1cnJlbnRJbmRleF0gPSBsYWJlbDtcblxuICAgICAgICAgICAgU2VhcmNoRGlyZWN0aW9ucy5mb3JFYWNoKGRpcmVjdGlvbiA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgeSA9IGN1cnJlbnQueSArIGRpcmVjdGlvblswXTtcbiAgICAgICAgICAgICAgICBjb25zdCB4ID0gY3VycmVudC54ICsgZGlyZWN0aW9uWzFdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0geSAqIHRoaXMuX3BhdGNoTGFiZWxHcmlkLnNpemUueCArIHg7XG5cbiAgICAgICAgICAgICAgICAvLyBjb250aW51ZSBpZiBwYXRjaCBlbXB0eVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9wYXRjaEdyaWQuZGF0YVtpbmRleF0gPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGF0Y2hMYWJlbEdyaWQuZGF0YVtpbmRleF0gPSBOdW1iZXIuTUFYX1ZBTFVFO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5fcGF0Y2hMYWJlbEdyaWQuZGF0YVtpbmRleF0gPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGF0Y2ggPSB0aGlzLl9pbWFnZVRvUGF0Y2hHcmlkW2luZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2ltaWxhcml0eSA9IE1hdGguYWJzKHBhdGNoLnggKiBjdXJyZW50UGF0Y2gueCArIHBhdGNoLnkgKiBjdXJyZW50UGF0Y2gueSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzaW1pbGFyaXR5ID4gdGhyZXNob2xkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl90cmFjZShpbmRleCwgbGFiZWwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGaW5kcyBwYXRjaGVzIHdoaWNoIGFyZSBjb25uZWN0ZWQgYW5kIHNoYXJlIHRoZSBzYW1lIG9yaWVudGF0aW9uXG4gICAgICogQHBhcmFtIHBhdGNoZXNGb3VuZFxuICAgICAqL1xuICAgIHByaXZhdGUgX3Jhc3Rlcml6ZUFuZ3VsYXJTaW1pbGFyaXR5KHBhdGNoZXNGb3VuZDogQXJyYXk8UGF0Y2g+KTogbnVtYmVyIHtcbiAgICAgICAgbGV0IGxhYmVsID0gMDtcbiAgICAgICAgY29uc3QgaHN2OiBIU1YgPSBbMCwgMSwgMV07XG4gICAgICAgIGNvbnN0IHJnYjogUkdCID0gWzAsIDAsIDBdO1xuXG4gICAgICAgIC8vIHByZXBhcmUgZm9yIGZpbmRpbmcgdGhlIHJpZ2h0IHBhdGNoZXNcbiAgICAgICAgdGhpcy5fcGF0Y2hHcmlkLmRhdGEuZmlsbCgwKTtcbiAgICAgICAgdGhpcy5fcGF0Y2hMYWJlbEdyaWQuZGF0YS5maWxsKDApO1xuICAgICAgICB0aGlzLl9pbWFnZVRvUGF0Y2hHcmlkLmZpbGwobnVsbCk7XG5cbiAgICAgICAgcGF0Y2hlc0ZvdW5kLmZvckVhY2gocGF0Y2ggPT4ge1xuICAgICAgICAgICAgdGhpcy5faW1hZ2VUb1BhdGNoR3JpZFtwYXRjaC5pbmRleF0gPSBwYXRjaDtcbiAgICAgICAgICAgIHRoaXMuX3BhdGNoR3JpZC5kYXRhW3BhdGNoLmluZGV4XSA9IDE7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIHJhc3Rlcml6ZSB0aGUgcGF0Y2hlcyBmb3VuZCB0byBkZXRlcm1pbmUgYXJlYVxuICAgICAgICB0aGlzLl9wYXRjaEdyaWQuemVyb0JvcmRlcigpO1xuXG4gICAgICAgIGxldCBjdXJyZW50SW5kZXggPSAwO1xuICAgICAgICB3aGlsZSAoKGN1cnJlbnRJbmRleCA9IHRoaXMuX25vdFlldFByb2Nlc3NlZCgpKSA8IHRoaXMuX3BhdGNoTGFiZWxHcmlkLmRhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICBsYWJlbCsrO1xuICAgICAgICAgICAgdGhpcy5fdHJhY2UoY3VycmVudEluZGV4LCBsYWJlbCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBkcmF3IHBhdGNoLWxhYmVscyBpZiByZXF1ZXN0ZWRcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdGhpcy5fY29uZmlnLmRlYnVnICYmIHRoaXMuX2NvbmZpZy5kZWJ1Zy5zaG93UGF0Y2hMYWJlbHMpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5fcGF0Y2hMYWJlbEdyaWQuZGF0YS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9wYXRjaExhYmVsR3JpZC5kYXRhW2pdID4gMCAmJiB0aGlzLl9wYXRjaExhYmVsR3JpZC5kYXRhW2pdIDw9IGxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhdGNoID0gdGhpcy5faW1hZ2VUb1BhdGNoR3JpZFtqXTtcbiAgICAgICAgICAgICAgICAgICAgaHN2WzBdID0gKHRoaXMuX3BhdGNoTGFiZWxHcmlkLmRhdGFbal0gLyAobGFiZWwgKyAxKSkgKiAzNjA7XG4gICAgICAgICAgICAgICAgICAgIGhzdjJyZ2IoaHN2LCByZ2IpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9kcmF3UmVjdChwYXRjaC5wb3MsIHRoaXMuX3N1YkltYWdlV3JhcHBlci5zaXplLCBgcmdiKCR7cmdiLmpvaW4oJywnKX0pYCwgMik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGxhYmVsO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2RyYXdSZWN0KHsgeCwgeSB9OiBQb2ludCwgc2l6ZTogUG9pbnQsIGNvbG9yOiBzdHJpbmcsIGxpbmVXaWR0aDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2JpbmFyeUNvbnRleHQuc3Ryb2tlU3R5bGUgPSBjb2xvcjtcbiAgICAgICAgdGhpcy5fYmluYXJ5Q29udGV4dC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICAgICAgdGhpcy5fYmluYXJ5Q29udGV4dC5saW5lV2lkdGggPSBsaW5lV2lkdGggfHwgMTtcbiAgICAgICAgdGhpcy5fYmluYXJ5Q29udGV4dC5zdHJva2VSZWN0KHgsIHksIHNpemUueCwgc2l6ZS55KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9kcmF3UGF0aChwYXRoOiBBcnJheTxQb2ludD4sIGNvbG9yOiBzdHJpbmcsIGxpbmVXaWR0aDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIEltYWdlRGVidWcuZHJhd1BhdGgocGF0aCwgdGhpcy5fYmluYXJ5Q29udGV4dCwgY29sb3IsIGxpbmVXaWR0aCk7XG4gICAgfVxufVxuIiwiLyoqXG4gKiBAYm9ycm93cyBodHRwOi8vd3d3LmNvZGVwcm9qZWN0LmNvbS9UaXBzLzQwNzE3Mi9Db25uZWN0ZWQtQ29tcG9uZW50LUxhYmVsaW5nLWFuZC1WZWN0b3JpemF0aW9uXG4gKi9cblxuaW1wb3J0IHsgSW1hZ2VXcmFwcGVyIH0gZnJvbSAnLi4vY29tbW9uL2ltYWdlLXdyYXBwZXInO1xuaW1wb3J0IHsgQ29udG91clZlcnRleCwgVHJhY2VyIH0gZnJvbSAnLi90cmFjZXInO1xuXG5lbnVtIEVkZ2VMYWJlbCB7XG4gICAgT3V0c2lkZSA9IC0zMjc2NyxcbiAgICBJbnNpZGUgPSAtMzI3NjZcbn07XG5cbmVudW0gQ29udG91ckRpcmVjdGlvbiB7XG4gICAgQ1cgPSAwLFxuICAgIENDVyA9IDEsXG4gICAgVW5rbm93biA9IDJcbn07XG5cbmludGVyZmFjZSBDb250b3VyIHtcbiAgICBkaXI6IENvbnRvdXJEaXJlY3Rpb247XG4gICAgaW5kZXg6IG51bWJlcjtcbiAgICBmaXJzdFZlcnRleDogQ29udG91clZlcnRleDtcbiAgICBwcmV2aW91c1BlZXI/OiBDb250b3VyO1xuICAgIG5leHRQZWVyPzogQ29udG91cjtcbiAgICBpbnNpZGVDb250b3VyczogQ29udG91cjtcbn1cblxuaW50ZXJmYWNlIFJhc3RlclJlc3VsdCB7XG4gICAgY2M6IENvbnRvdXI7XG4gICAgY291bnQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIFJhc3Rlcml6ZXIge1xuICAgIHByaXZhdGUgX3dpZHRoOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfaGVpZ2h0OiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfdHJhY2VyOiBUcmFjZXI7XG4gICAgcHJpdmF0ZSBfaW1hZ2VEYXRhOiBVaW50OEFycmF5O1xuICAgIHByaXZhdGUgX2xhYmVsRGF0YTogQXJyYXk8bnVtYmVyPjtcblxuICAgIGNvbnN0cnVjdG9yKGltYWdlV3JhcHBlcjogSW1hZ2VXcmFwcGVyPFVpbnQ4QXJyYXk+LCBsYWJlbFdyYXBwZXI6IEltYWdlV3JhcHBlcjxBcnJheTxudW1iZXI+Pikge1xuICAgICAgICB0aGlzLl9pbWFnZURhdGEgPSBpbWFnZVdyYXBwZXIuZGF0YTtcbiAgICAgICAgdGhpcy5fbGFiZWxEYXRhID0gbGFiZWxXcmFwcGVyLmRhdGEgYXMgQXJyYXk8bnVtYmVyPjtcbiAgICAgICAgdGhpcy5fd2lkdGggPSBpbWFnZVdyYXBwZXIuc2l6ZS54O1xuICAgICAgICB0aGlzLl9oZWlnaHQgPSBpbWFnZVdyYXBwZXIuc2l6ZS55O1xuICAgICAgICB0aGlzLl90cmFjZXIgPSBuZXcgVHJhY2VyKGltYWdlV3JhcHBlciwgbGFiZWxXcmFwcGVyKTtcbiAgICB9XG5cbiAgICByYXN0ZXJpemUoZGVwdGhMYWJlbDogbnVtYmVyKTogUmFzdGVyUmVzdWx0IHtcbiAgICAgICAgY29uc3QgY29sb3JNYXAgPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDAwOyBpKyspIHtcbiAgICAgICAgICAgIGNvbG9yTWFwW2ldID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbG9yTWFwWzBdID0gdGhpcy5faW1hZ2VEYXRhWzBdO1xuXG4gICAgICAgIGxldCBjYzogQ29udG91ciA9IG51bGw7XG4gICAgICAgIGxldCBzYzogQ29udG91cjtcbiAgICAgICAgbGV0IGNvbm5lY3RlZENvdW50ID0gMDtcblxuICAgICAgICBmb3IgKGxldCBjeSA9IDE7IGN5IDwgdGhpcy5faGVpZ2h0IC0gMTsgY3krKykge1xuICAgICAgICAgICAgbGV0IGxhYmVsSW5kZXggPSAwO1xuICAgICAgICAgICAgbGV0IGJjID0gY29sb3JNYXBbMF07XG5cbiAgICAgICAgICAgIGZvciAobGV0IGN4ID0gMTsgY3ggPCB0aGlzLl93aWR0aCAtIDE7IGN4KyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwb3MgPSBjeSAqIHRoaXMuX3dpZHRoICsgY3g7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fbGFiZWxEYXRhW3Bvc10gPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29sb3IgPSB0aGlzLl9pbWFnZURhdGFbcG9zXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbG9yICE9PSBiYykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhYmVsSW5kZXggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYyA9IGNvbm5lY3RlZENvdW50ICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvck1hcFtsY10gPSBjb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYyA9IGNvbG9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZlcnRleCA9IHRoaXMuX3RyYWNlci5jb250b3VyVHJhY2luZyhjeSwgY3gsIGxjLCBjb2xvciwgRWRnZUxhYmVsLk91dHNpZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2ZXJ0ZXggIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29ubmVjdGVkQ291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxJbmRleCA9IGxjO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwOiBDb250b3VyID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyOiBDb250b3VyRGlyZWN0aW9uLkNXLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGxhYmVsSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdFZlcnRleDogdmVydGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFBlZXI6IGNjLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zaWRlQ29udG91cnM6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNjICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5wcmV2aW91c1BlZXIgPSBwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjID0gcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZlcnRleCA9IHRoaXMuX3RyYWNlci5jb250b3VyVHJhY2luZyhjeSwgY3gsIEVkZ2VMYWJlbC5JbnNpZGUsIGNvbG9yLCBsYWJlbEluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmVydGV4ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHA6IENvbnRvdXIgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXI6IGRlcHRoTGFiZWwgPT09IDAgPyBDb250b3VyRGlyZWN0aW9uLkNDVyA6IENvbnRvdXJEaXJlY3Rpb24uQ1csXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdFZlcnRleDogdmVydGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGRlcHRoTGFiZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNpZGVDb250b3VyczogbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYyA9IGNjO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAoKHNjICE9PSBudWxsKSAmJiBzYy5pbmRleCAhPT0gbGFiZWxJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2MgPSBzYy5uZXh0UGVlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2MgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAubmV4dFBlZXIgPSBzYy5pbnNpZGVDb250b3VycztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzYy5pbnNpZGVDb250b3VycyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjLmluc2lkZUNvbnRvdXJzLnByZXZpb3VzUGVlciA9IHA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYy5pbnNpZGVDb250b3VycyA9IHA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9sYWJlbERhdGFbcG9zXSA9IGxhYmVsSW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2xhYmVsRGF0YVtwb3NdID09PSBFZGdlTGFiZWwuSW5zaWRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsSW5kZXggPSAwO1xuICAgICAgICAgICAgICAgICAgICBiYyA9IHRoaXMuX2ltYWdlRGF0YVtwb3NdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5fbGFiZWxEYXRhW3Bvc10gPT09IEVkZ2VMYWJlbC5PdXRzaWRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsSW5kZXggPSAwO1xuICAgICAgICAgICAgICAgICAgICBiYyA9IGNvbG9yTWFwWzBdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsSW5kZXggPSB0aGlzLl9sYWJlbERhdGFbcG9zXTtcbiAgICAgICAgICAgICAgICAgICAgYmMgPSBjb2xvck1hcFtsYWJlbEluZGV4XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBzYyA9IGNjO1xuICAgICAgICB3aGlsZSAoc2MgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHNjLmluZGV4ID0gZGVwdGhMYWJlbDtcbiAgICAgICAgICAgIHNjID0gc2MubmV4dFBlZXI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY2MsXG4gICAgICAgICAgICBjb3VudDogY29ubmVjdGVkQ291bnRcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBkcmF3Q29udG91cihjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBmaXJzdENvbnRvdXI6IENvbnRvdXIpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJ3JlZCc7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSAncmVkJztcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDE7XG5cbiAgICAgICAgbGV0IHBxID0gZmlyc3RDb250b3VyO1xuICAgICAgICBsZXQgaXEgPSBwcSAmJiBwcS5pbnNpZGVDb250b3VycztcblxuICAgICAgICB3aGlsZSAocHEgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGxldCBxID0gaXEgfHwgcHE7XG5cbiAgICAgICAgICAgIGlmIChpcSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlxID0gaXEubmV4dFBlZXI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBxID0gcHEubmV4dFBlZXI7XG4gICAgICAgICAgICAgICAgaXEgPSBwcSAmJiBwcS5pbnNpZGVDb250b3VycztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3dpdGNoIChxLmRpcikge1xuICAgICAgICAgICAgICAgIGNhc2UgQ29udG91ckRpcmVjdGlvbi5DVzoge1xuICAgICAgICAgICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSAncmVkJztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgQ29udG91ckRpcmVjdGlvbi5DQ1c6IHtcbiAgICAgICAgICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJ2JsdWUnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBDb250b3VyRGlyZWN0aW9uLlVua25vd246IHtcbiAgICAgICAgICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJ2dyZWVuJztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgcCA9IHEuZmlyc3RWZXJ0ZXg7XG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHgubW92ZVRvKHAueCwgcC55KTtcblxuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgIHAgPSBwLm5leHQ7XG4gICAgICAgICAgICAgICAgY3R4LmxpbmVUbyhwLngsIHAueSk7XG4gICAgICAgICAgICB9IHdoaWxlIChwICE9PSBxLmZpcnN0VmVydGV4KTtcblxuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgZXFlcWVxICovXG5mdW5jdGlvbiBTa2VsZXRvbml6ZXIoc3RkbGliLCBmb3JlaWduLCBidWZmZXIpIHtcbiAgICBcInVzZSBhc21cIjtcblxuICAgIHZhciBpbWFnZXMgPSBuZXcgc3RkbGliLlVpbnQ4QXJyYXkoYnVmZmVyKSxcbiAgICAgICAgc2l6ZSA9IGZvcmVpZ24uc2l6ZSB8IDAsXG4gICAgICAgIGltdWwgPSBzdGRsaWIuTWF0aC5pbXVsO1xuXG4gICAgZnVuY3Rpb24gZXJvZGUoaW5JbWFnZVB0ciwgb3V0SW1hZ2VQdHIpIHtcbiAgICAgICAgaW5JbWFnZVB0ciA9IGluSW1hZ2VQdHIgfCAwO1xuICAgICAgICBvdXRJbWFnZVB0ciA9IG91dEltYWdlUHRyIHwgMDtcblxuICAgICAgICB2YXIgdiA9IDAsXG4gICAgICAgICAgICB1ID0gMCxcbiAgICAgICAgICAgIHN1bSA9IDAsXG4gICAgICAgICAgICB5U3RhcnQxID0gMCxcbiAgICAgICAgICAgIHlTdGFydDIgPSAwLFxuICAgICAgICAgICAgeFN0YXJ0MSA9IDAsXG4gICAgICAgICAgICB4U3RhcnQyID0gMCxcbiAgICAgICAgICAgIG9mZnNldCA9IDA7XG5cbiAgICAgICAgZm9yICh2ID0gMTsgKHYgfCAwKSA8ICgoc2l6ZSAtIDEpIHwgMCk7IHYgPSAodiArIDEpIHwgMCkge1xuICAgICAgICAgICAgb2Zmc2V0ID0gKG9mZnNldCArIHNpemUpIHwgMDtcbiAgICAgICAgICAgIGZvciAodSA9IDE7ICh1IHwgMCkgPCAoKHNpemUgLSAxKSB8IDApOyB1ID0gKHUgKyAxKSB8IDApIHtcbiAgICAgICAgICAgICAgICB5U3RhcnQxID0gKG9mZnNldCAtIHNpemUpIHwgMDtcbiAgICAgICAgICAgICAgICB5U3RhcnQyID0gKG9mZnNldCArIHNpemUpIHwgMDtcbiAgICAgICAgICAgICAgICB4U3RhcnQxID0gKHUgLSAxKSB8IDA7XG4gICAgICAgICAgICAgICAgeFN0YXJ0MiA9ICh1ICsgMSkgfCAwO1xuICAgICAgICAgICAgICAgIHN1bSA9ICgoaW1hZ2VzWyhpbkltYWdlUHRyICsgeVN0YXJ0MSArIHhTdGFydDEpIHwgMF0gfCAwKVxuICAgICAgICAgICAgICAgICAgICArIChpbWFnZXNbKGluSW1hZ2VQdHIgKyB5U3RhcnQxICsgeFN0YXJ0MikgfCAwXSB8IDApXG4gICAgICAgICAgICAgICAgICAgICsgKGltYWdlc1soaW5JbWFnZVB0ciArIG9mZnNldCArIHUpIHwgMF0gfCAwKVxuICAgICAgICAgICAgICAgICAgICArIChpbWFnZXNbKGluSW1hZ2VQdHIgKyB5U3RhcnQyICsgeFN0YXJ0MSkgfCAwXSB8IDApXG4gICAgICAgICAgICAgICAgICAgICsgKGltYWdlc1soaW5JbWFnZVB0ciArIHlTdGFydDIgKyB4U3RhcnQyKSB8IDBdIHwgMCkpIHwgMDtcbiAgICAgICAgICAgICAgICBpZiAoKHN1bSB8IDApID09ICg1IHwgMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VzWyhvdXRJbWFnZVB0ciArIG9mZnNldCArIHUpIHwgMF0gPSAxO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGltYWdlc1sob3V0SW1hZ2VQdHIgKyBvZmZzZXQgKyB1KSB8IDBdID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN1YnRyYWN0KGFJbWFnZVB0ciwgYkltYWdlUHRyLCBvdXRJbWFnZVB0cikge1xuICAgICAgICBhSW1hZ2VQdHIgPSBhSW1hZ2VQdHIgfCAwO1xuICAgICAgICBiSW1hZ2VQdHIgPSBiSW1hZ2VQdHIgfCAwO1xuICAgICAgICBvdXRJbWFnZVB0ciA9IG91dEltYWdlUHRyIHwgMDtcblxuICAgICAgICB2YXIgbGVuZ3RoID0gMDtcblxuICAgICAgICBsZW5ndGggPSBpbXVsKHNpemUsIHNpemUpIHwgMDtcblxuICAgICAgICB3aGlsZSAoKGxlbmd0aCB8IDApID4gMCkge1xuICAgICAgICAgICAgbGVuZ3RoID0gKGxlbmd0aCAtIDEpIHwgMDtcbiAgICAgICAgICAgIGltYWdlc1sob3V0SW1hZ2VQdHIgKyBsZW5ndGgpIHwgMF0gPVxuICAgICAgICAgICAgICAgICgoaW1hZ2VzWyhhSW1hZ2VQdHIgKyBsZW5ndGgpIHwgMF0gfCAwKSAtIChpbWFnZXNbKGJJbWFnZVB0ciArIGxlbmd0aCkgfCAwXSB8IDApKSB8IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBiaXR3aXNlT3IoYUltYWdlUHRyLCBiSW1hZ2VQdHIsIG91dEltYWdlUHRyKSB7XG4gICAgICAgIGFJbWFnZVB0ciA9IGFJbWFnZVB0ciB8IDA7XG4gICAgICAgIGJJbWFnZVB0ciA9IGJJbWFnZVB0ciB8IDA7XG4gICAgICAgIG91dEltYWdlUHRyID0gb3V0SW1hZ2VQdHIgfCAwO1xuXG4gICAgICAgIHZhciBsZW5ndGggPSAwO1xuXG4gICAgICAgIGxlbmd0aCA9IGltdWwoc2l6ZSwgc2l6ZSkgfCAwO1xuXG4gICAgICAgIHdoaWxlICgobGVuZ3RoIHwgMCkgPiAwKSB7XG4gICAgICAgICAgICBsZW5ndGggPSAobGVuZ3RoIC0gMSkgfCAwO1xuICAgICAgICAgICAgaW1hZ2VzWyhvdXRJbWFnZVB0ciArIGxlbmd0aCkgfCAwXSA9XG4gICAgICAgICAgICAgICAgKChpbWFnZXNbKGFJbWFnZVB0ciArIGxlbmd0aCkgfCAwXSB8IDApIHwgKGltYWdlc1soYkltYWdlUHRyICsgbGVuZ3RoKSB8IDBdIHwgMCkpIHwgMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvdW50Tm9uWmVybyhpbWFnZVB0cikge1xuICAgICAgICBpbWFnZVB0ciA9IGltYWdlUHRyIHwgMDtcblxuICAgICAgICB2YXIgc3VtID0gMCxcbiAgICAgICAgICAgIGxlbmd0aCA9IDA7XG5cbiAgICAgICAgbGVuZ3RoID0gaW11bChzaXplLCBzaXplKSB8IDA7XG5cbiAgICAgICAgd2hpbGUgKChsZW5ndGggfCAwKSA+IDApIHtcbiAgICAgICAgICAgIGxlbmd0aCA9IChsZW5ndGggLSAxKSB8IDA7XG4gICAgICAgICAgICBzdW0gPSAoKHN1bSB8IDApICsgKGltYWdlc1soaW1hZ2VQdHIgKyBsZW5ndGgpIHwgMF0gfCAwKSkgfCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChzdW0gfCAwKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbml0KGltYWdlUHRyLCB2YWx1ZSkge1xuICAgICAgICBpbWFnZVB0ciA9IGltYWdlUHRyIHwgMDtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZSB8IDA7XG5cbiAgICAgICAgdmFyIGxlbmd0aCA9IDA7XG5cbiAgICAgICAgbGVuZ3RoID0gaW11bChzaXplLCBzaXplKSB8IDA7XG5cbiAgICAgICAgd2hpbGUgKChsZW5ndGggfCAwKSA+IDApIHtcbiAgICAgICAgICAgIGxlbmd0aCA9IChsZW5ndGggLSAxKSB8IDA7XG4gICAgICAgICAgICBpbWFnZXNbKGltYWdlUHRyICsgbGVuZ3RoKSB8IDBdID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaWxhdGUoaW5JbWFnZVB0ciwgb3V0SW1hZ2VQdHIpIHtcbiAgICAgICAgaW5JbWFnZVB0ciA9IGluSW1hZ2VQdHIgfCAwO1xuICAgICAgICBvdXRJbWFnZVB0ciA9IG91dEltYWdlUHRyIHwgMDtcblxuICAgICAgICB2YXIgdiA9IDAsXG4gICAgICAgICAgICB1ID0gMCxcbiAgICAgICAgICAgIHN1bSA9IDAsXG4gICAgICAgICAgICB5U3RhcnQxID0gMCxcbiAgICAgICAgICAgIHlTdGFydDIgPSAwLFxuICAgICAgICAgICAgeFN0YXJ0MSA9IDAsXG4gICAgICAgICAgICB4U3RhcnQyID0gMCxcbiAgICAgICAgICAgIG9mZnNldCA9IDA7XG5cbiAgICAgICAgZm9yICh2ID0gMTsgKHYgfCAwKSA8ICgoc2l6ZSAtIDEpIHwgMCk7IHYgPSAodiArIDEpIHwgMCkge1xuICAgICAgICAgICAgb2Zmc2V0ID0gKG9mZnNldCArIHNpemUpIHwgMDtcbiAgICAgICAgICAgIGZvciAodSA9IDE7ICh1IHwgMCkgPCAoKHNpemUgLSAxKSB8IDApOyB1ID0gKHUgKyAxKSB8IDApIHtcbiAgICAgICAgICAgICAgICB5U3RhcnQxID0gKG9mZnNldCAtIHNpemUpIHwgMDtcbiAgICAgICAgICAgICAgICB5U3RhcnQyID0gKG9mZnNldCArIHNpemUpIHwgMDtcbiAgICAgICAgICAgICAgICB4U3RhcnQxID0gKHUgLSAxKSB8IDA7XG4gICAgICAgICAgICAgICAgeFN0YXJ0MiA9ICh1ICsgMSkgfCAwO1xuICAgICAgICAgICAgICAgIHN1bSA9ICgoaW1hZ2VzWyhpbkltYWdlUHRyICsgeVN0YXJ0MSArIHhTdGFydDEpIHwgMF0gfCAwKVxuICAgICAgICAgICAgICAgICAgICArIChpbWFnZXNbKGluSW1hZ2VQdHIgKyB5U3RhcnQxICsgeFN0YXJ0MikgfCAwXSB8IDApXG4gICAgICAgICAgICAgICAgICAgICsgKGltYWdlc1soaW5JbWFnZVB0ciArIG9mZnNldCArIHUpIHwgMF0gfCAwKVxuICAgICAgICAgICAgICAgICAgICArIChpbWFnZXNbKGluSW1hZ2VQdHIgKyB5U3RhcnQyICsgeFN0YXJ0MSkgfCAwXSB8IDApXG4gICAgICAgICAgICAgICAgICAgICsgKGltYWdlc1soaW5JbWFnZVB0ciArIHlTdGFydDIgKyB4U3RhcnQyKSB8IDBdIHwgMCkpIHwgMDtcbiAgICAgICAgICAgICAgICBpZiAoKHN1bSB8IDApID4gKDAgfCAwKSkge1xuICAgICAgICAgICAgICAgICAgICBpbWFnZXNbKG91dEltYWdlUHRyICsgb2Zmc2V0ICsgdSkgfCAwXSA9IDE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VzWyhvdXRJbWFnZVB0ciArIG9mZnNldCArIHUpIHwgMF0gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWVtY3B5KHNyY0ltYWdlUHRyLCBkc3RJbWFnZVB0cikge1xuICAgICAgICBzcmNJbWFnZVB0ciA9IHNyY0ltYWdlUHRyIHwgMDtcbiAgICAgICAgZHN0SW1hZ2VQdHIgPSBkc3RJbWFnZVB0ciB8IDA7XG5cbiAgICAgICAgdmFyIGxlbmd0aCA9IDA7XG5cbiAgICAgICAgbGVuZ3RoID0gaW11bChzaXplLCBzaXplKSB8IDA7XG5cbiAgICAgICAgd2hpbGUgKChsZW5ndGggfCAwKSA+IDApIHtcbiAgICAgICAgICAgIGxlbmd0aCA9IChsZW5ndGggLSAxKSB8IDA7XG4gICAgICAgICAgICBpbWFnZXNbKGRzdEltYWdlUHRyICsgbGVuZ3RoKSB8IDBdID0gKGltYWdlc1soc3JjSW1hZ2VQdHIgKyBsZW5ndGgpIHwgMF0gfCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHplcm9Cb3JkZXIoaW1hZ2VQdHIpIHtcbiAgICAgICAgaW1hZ2VQdHIgPSBpbWFnZVB0ciB8IDA7XG5cbiAgICAgICAgdmFyIHggPSAwLFxuICAgICAgICAgICAgeSA9IDA7XG5cbiAgICAgICAgZm9yICh4ID0gMDsgKHggfCAwKSA8ICgoc2l6ZSAtIDEpIHwgMCk7IHggPSAoeCArIDEpIHwgMCkge1xuICAgICAgICAgICAgaW1hZ2VzWyhpbWFnZVB0ciArIHgpIHwgMF0gPSAwO1xuICAgICAgICAgICAgaW1hZ2VzWyhpbWFnZVB0ciArIHkpIHwgMF0gPSAwO1xuICAgICAgICAgICAgeSA9ICgoeSArIHNpemUpIC0gMSkgfCAwO1xuICAgICAgICAgICAgaW1hZ2VzWyhpbWFnZVB0ciArIHkpIHwgMF0gPSAwO1xuICAgICAgICAgICAgeSA9ICh5ICsgMSkgfCAwO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoeCA9IDA7ICh4IHwgMCkgPCAoc2l6ZSB8IDApOyB4ID0gKHggKyAxKSB8IDApIHtcbiAgICAgICAgICAgIGltYWdlc1soaW1hZ2VQdHIgKyB5KSB8IDBdID0gMDtcbiAgICAgICAgICAgIHkgPSAoeSArIDEpIHwgMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNrZWxldG9uaXplKCkge1xuICAgICAgICB2YXIgc3ViSW1hZ2VQdHIgPSAwLFxuICAgICAgICAgICAgZXJvZGVkSW1hZ2VQdHIgPSAwLFxuICAgICAgICAgICAgdGVtcEltYWdlUHRyID0gMCxcbiAgICAgICAgICAgIHNrZWxJbWFnZVB0ciA9IDAsXG4gICAgICAgICAgICBzdW0gPSAwLFxuICAgICAgICAgICAgZG9uZSA9IDA7XG5cbiAgICAgICAgZXJvZGVkSW1hZ2VQdHIgPSBpbXVsKHNpemUsIHNpemUpIHwgMDtcbiAgICAgICAgdGVtcEltYWdlUHRyID0gKGVyb2RlZEltYWdlUHRyICsgZXJvZGVkSW1hZ2VQdHIpIHwgMDtcbiAgICAgICAgc2tlbEltYWdlUHRyID0gKHRlbXBJbWFnZVB0ciArIGVyb2RlZEltYWdlUHRyKSB8IDA7XG5cbiAgICAgICAgLy8gaW5pdCBza2VsLWltYWdlXG4gICAgICAgIGluaXQoc2tlbEltYWdlUHRyLCAwKTtcbiAgICAgICAgemVyb0JvcmRlcihzdWJJbWFnZVB0cik7XG5cbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgZXJvZGUoc3ViSW1hZ2VQdHIsIGVyb2RlZEltYWdlUHRyKTtcbiAgICAgICAgICAgIGRpbGF0ZShlcm9kZWRJbWFnZVB0ciwgdGVtcEltYWdlUHRyKTtcbiAgICAgICAgICAgIHN1YnRyYWN0KHN1YkltYWdlUHRyLCB0ZW1wSW1hZ2VQdHIsIHRlbXBJbWFnZVB0cik7XG4gICAgICAgICAgICBiaXR3aXNlT3Ioc2tlbEltYWdlUHRyLCB0ZW1wSW1hZ2VQdHIsIHNrZWxJbWFnZVB0cik7XG4gICAgICAgICAgICBtZW1jcHkoZXJvZGVkSW1hZ2VQdHIsIHN1YkltYWdlUHRyKTtcbiAgICAgICAgICAgIHN1bSA9IGNvdW50Tm9uWmVybyhzdWJJbWFnZVB0cikgfCAwO1xuICAgICAgICAgICAgZG9uZSA9ICgoc3VtIHwgMCkgPT0gMCB8IDApO1xuICAgICAgICB9IHdoaWxlICghZG9uZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2tlbGV0b25pemU6IHNrZWxldG9uaXplXG4gICAgfTtcbn1cbmV4cG9ydCBkZWZhdWx0IFNrZWxldG9uaXplcjtcbi8qIGVzbGludC1lbmFibGUgZXFlcWVxICovXG4iLCJpbXBvcnQgeyBJbWFnZVdyYXBwZXIgfSBmcm9tIFwiLi4vY29tbW9uL2ltYWdlLXdyYXBwZXJcIjtcblxuLyoqXG4gKiBAYm9ycm93cyBodHRwOi8vd3d3LmNvZGVwcm9qZWN0LmNvbS9UaXBzLzQwNzE3Mi9Db25uZWN0ZWQtQ29tcG9uZW50LUxhYmVsaW5nLWFuZC1WZWN0b3JpemF0aW9uXG4gKi9cblxudHlwZSBEaXJlY3Rpb24gPSBudW1iZXI7XG5cbmV4cG9ydCBjb25zdCBTZWFyY2hEaXJlY3Rpb25zOiBBcnJheTxBcnJheTxEaXJlY3Rpb24+PiA9IFtbMCwgMV0sIFsxLCAxXSwgWzEsIDBdLCBbMSwgLTFdLCBbMCwgLTFdLCBbLTEsIC0xXSwgWy0xLCAwXSwgWy0xLCAxXV07XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29udG91clZlcnRleCB7XG4gICAgeDogbnVtYmVyLFxuICAgIHk6IG51bWJlcixcbiAgICBkaXI6IERpcmVjdGlvbixcbiAgICBuZXh0OiBDb250b3VyVmVydGV4LFxuICAgIHByZXY6IENvbnRvdXJWZXJ0ZXhcbn1cblxuaW50ZXJmYWNlIEN1cnJlbnQge1xuICAgIGN4OiBudW1iZXIsXG4gICAgY3k6IG51bWJlcixcbiAgICBkaXI6IERpcmVjdGlvblxufVxuXG5leHBvcnQgY2xhc3MgVHJhY2VyIHtcbiAgICBwcml2YXRlIF9pbWFnZURhdGE6IFVpbnQ4QXJyYXk7XG4gICAgcHJpdmF0ZSBfbGFiZWxEYXRhOiBBcnJheTxudW1iZXI+O1xuICAgIHByaXZhdGUgX3dpZHRoOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihpbWFnZVdyYXBwZXI6IEltYWdlV3JhcHBlciwgbGFiZWxXcmFwcGVyOiBJbWFnZVdyYXBwZXI8QXJyYXk8bnVtYmVyPj4pIHtcbiAgICAgICAgdGhpcy5faW1hZ2VEYXRhID0gaW1hZ2VXcmFwcGVyLmRhdGE7XG4gICAgICAgIHRoaXMuX2xhYmVsRGF0YSA9IGxhYmVsV3JhcHBlci5kYXRhIGFzIEFycmF5PG51bWJlcj47XG4gICAgICAgIHRoaXMuX3dpZHRoID0gaW1hZ2VXcmFwcGVyLnNpemUueDtcbiAgICB9XG5cbiAgICB0cmFjZShjdXJyZW50OiBDdXJyZW50LCBjb2xvcjogbnVtYmVyLCBsYWJlbDogbnVtYmVyLCBlZGdlTGFiZWw6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgeSA9IGN1cnJlbnQuY3kgKyBTZWFyY2hEaXJlY3Rpb25zW2N1cnJlbnQuZGlyXVswXSB8IDA7XG4gICAgICAgICAgICBjb25zdCB4ID0gY3VycmVudC5jeCArIFNlYXJjaERpcmVjdGlvbnNbY3VycmVudC5kaXJdWzFdIHwgMDtcbiAgICAgICAgICAgIGNvbnN0IHBvcyA9IHkgKiB0aGlzLl93aWR0aCArIHggfCAwO1xuXG4gICAgICAgICAgICBpZiAoKHRoaXMuX2ltYWdlRGF0YVtwb3NdID09PSBjb2xvcikgJiYgKCh0aGlzLl9sYWJlbERhdGFbcG9zXSA9PT0gMCkgfHwgKHRoaXMuX2xhYmVsRGF0YVtwb3NdID09PSBsYWJlbCkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbGFiZWxEYXRhW3Bvc10gPSBsYWJlbDtcbiAgICAgICAgICAgICAgICBjdXJyZW50LmN4ID0geDtcbiAgICAgICAgICAgICAgICBjdXJyZW50LmN5ID0geTtcblxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fbGFiZWxEYXRhW3Bvc10gPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbGFiZWxEYXRhW3Bvc10gPSBlZGdlTGFiZWw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGN1cnJlbnQuZGlyID0gKGN1cnJlbnQuZGlyICsgMSkgJSA4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnRvdXJUcmFjaW5nKHN5OiBudW1iZXIsIHN4OiBudW1iZXIsIGxhYmVsOiBudW1iZXIsIGNvbG9yOiBudW1iZXIsIGVkZ2VMYWJlbDogbnVtYmVyKTogQ29udG91clZlcnRleCB7XG4gICAgICAgIGxldCBGdjogQ29udG91clZlcnRleCA9IG51bGw7XG4gICAgICAgIGNvbnN0IGN1cnJlbnQ6IEN1cnJlbnQgPSB7XG4gICAgICAgICAgICBjeDogc3gsXG4gICAgICAgICAgICBjeTogc3ksXG4gICAgICAgICAgICBkaXI6IDBcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAodGhpcy50cmFjZShjdXJyZW50LCBjb2xvciwgbGFiZWwsIGVkZ2VMYWJlbCkpIHtcbiAgICAgICAgICAgIEZ2ID0ge1xuICAgICAgICAgICAgICAgIHg6IHN4LFxuICAgICAgICAgICAgICAgIHk6IHN5LFxuICAgICAgICAgICAgICAgIGRpcjogY3VycmVudC5kaXIsXG4gICAgICAgICAgICAgICAgbmV4dDogbnVsbCxcbiAgICAgICAgICAgICAgICBwcmV2OiBudWxsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgbGV0IEN2ID0gRnY7XG4gICAgICAgICAgICBsZXQgbGRpciA9IGN1cnJlbnQuZGlyO1xuICAgICAgICAgICAgbGV0IFAgPSB7XG4gICAgICAgICAgICAgICAgeDogY3VycmVudC5jeCxcbiAgICAgICAgICAgICAgICB5OiBjdXJyZW50LmN5LFxuICAgICAgICAgICAgICAgIGRpcjogMCxcbiAgICAgICAgICAgICAgICBuZXh0OiBudWxsLFxuICAgICAgICAgICAgICAgIHByZXY6IEN2XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgQ3YubmV4dCA9IFA7XG4gICAgICAgICAgICBDdiA9IFA7XG5cbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50LmRpciA9IChjdXJyZW50LmRpciArIDYpICUgODtcblxuICAgICAgICAgICAgICAgIHRoaXMudHJhY2UoY3VycmVudCwgY29sb3IsIGxhYmVsLCBlZGdlTGFiZWwpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGxkaXIgIT09IGN1cnJlbnQuZGlyKSB7XG4gICAgICAgICAgICAgICAgICAgIEN2LmRpciA9IGN1cnJlbnQuZGlyO1xuICAgICAgICAgICAgICAgICAgICBQID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgeDogY3VycmVudC5jeCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IGN1cnJlbnQuY3ksXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXI6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0OiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJldjogQ3ZcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgQ3YubmV4dCA9IFA7XG4gICAgICAgICAgICAgICAgICAgIEN2ID0gUDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBDdi5kaXIgPSBsZGlyO1xuICAgICAgICAgICAgICAgICAgICBDdi54ID0gY3VycmVudC5jeDtcbiAgICAgICAgICAgICAgICAgICAgQ3YueSA9IGN1cnJlbnQuY3k7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbGRpciA9IGN1cnJlbnQuZGlyO1xuICAgICAgICAgICAgfSB3aGlsZSAoY3VycmVudC5jeCAhPT0gc3ggfHwgY3VycmVudC5jeSAhPT0gc3kpO1xuXG4gICAgICAgICAgICBGdi5wcmV2ID0gQ3YucHJldjtcbiAgICAgICAgICAgIEN2LnByZXYubmV4dCA9IEZ2O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBGdjtcbiAgICB9XG59XG4iLCJpbXBvcnQgX3BvbHlmaWxscyBmcm9tICcuL2NvbW1vbi9wb2x5ZmlsbHMnO1xuaW1wb3J0IHsgUmVzdWx0Q29sbGVjdG9yIH0gZnJvbSAnLi9hbmFseXRpY3MvcmVzdWx0LWNvbGxlY3Rvcic7XG5pbXBvcnQgeyBCb3ggfSBmcm9tICcuL2NvbW1vbi9ib3gnO1xuaW1wb3J0IHsgRXZlbnRDYWxsYmFjaywgRXZlbnRzLCBFdmVudFN1YnNjcmlwdGlvbiB9IGZyb20gJy4vY29tbW9uL2V2ZW50cyc7XG5pbXBvcnQgeyBJbWFnZURlYnVnIH0gZnJvbSAnLi9jb21tb24vaW1hZ2UtZGVidWcnO1xuaW1wb3J0IHsgSW1hZ2VXcmFwcGVyIH0gZnJvbSAnLi9jb21tb24vaW1hZ2Utd3JhcHBlcic7XG5pbXBvcnQgeyBtZXJnZSB9IGZyb20gJy4vY29tbW9uL21lcmdlJztcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi9jb21tb24vcG9pbnQnO1xuaW1wb3J0IHsgY29uZmlnLCBRdWFnZ2FDb25maWcgfSBmcm9tICcuL2NvbmZpZy9jb25maWcnO1xuaW1wb3J0IHsgQmFyY29kZURlY29kZXIsIFF1YWdnYUJhcmNvZGUgfSBmcm9tICcuL2RlY29kZXIvYmFyY29kZS1kZWNvZGVyJztcbmltcG9ydCB7IENhbWVyYUFjY2VzcyB9IGZyb20gJy4vaW5wdXQvY2FtZXJhLWFjY2Vzcyc7XG5pbXBvcnQgeyBGcmFtZUdyYWJiZXIgfSBmcm9tICcuL2lucHV0L2ZyYW1lLWdyYWJiZXInO1xuaW1wb3J0IHsgSW1hZ2VTdHJlYW0gfSBmcm9tICcuL2lucHV0L2ltYWdlLXN0cmVhbSc7XG5pbXBvcnQgeyBJbnB1dFN0cmVhbSB9IGZyb20gJy4vaW5wdXQvaW5wdXQtc3RyZWFtJztcbmltcG9ydCB7IExpdmVTdHJlYW0gfSBmcm9tICcuL2lucHV0L2xpdmUtc3RyZWFtJztcbmltcG9ydCB7IFZpZGVvU3RyZWFtIH0gZnJvbSAnLi9pbnB1dC92aWRlby1zdHJlYW0nO1xuaW1wb3J0IHsgY2hlY2tJbWFnZUNvbnN0cmFpbnRzIH0gZnJvbSAnLi9pbnB1dC9pbnB1dC1zdHJlYW0tdXRpbHMnO1xuaW1wb3J0IHsgQmFyY29kZUxvY2F0b3IgfSBmcm9tICcuL2xvY2F0b3IvYmFyY29kZS1sb2NhdG9yJztcbmltcG9ydCB7IEJhcmNvZGVSZWFkZXJEZWNsYXJhdGlvbiB9IGZyb20gJy4vcmVhZGVyL2JhcmNvZGUtcmVhZGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBXb3JrZXJUaHJlYWQge1xuICAgIHdvcmtlcjogV29ya2VyO1xuICAgIGltYWdlRGF0YTogVWludDhBcnJheTtcbiAgICBidXN5OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFF1YWdnYUNhbnZhc0NvbnRhaW5lciB7XG4gICAgY3R4OiB7XG4gICAgICAgIGltYWdlOiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsXG4gICAgICAgIG92ZXJsYXk6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRFxuICAgIH0sXG4gICAgZG9tOiB7XG4gICAgICAgIGltYWdlOiBIVE1MQ2FudmFzRWxlbWVudCxcbiAgICAgICAgb3ZlcmxheTogSFRNTENhbnZhc0VsZW1lbnRcbiAgICB9XG59XG5cbmxldCBfX2ZhY3RvcnlTb3VyY2VfXzogc3RyaW5nO1xuXG5leHBvcnQgY2xhc3MgUXVhZ2dhIHtcbiAgICBwcml2YXRlIF9pbnB1dFN0cmVhbTogSW5wdXRTdHJlYW07XG4gICAgcHJpdmF0ZSBfZnJhbWVHcmFiYmVyOiBGcmFtZUdyYWJiZXI7XG4gICAgcHJpdmF0ZSBfc3RvcHBlZDogYm9vbGVhbjtcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9jYW52YXNDb250YWluZXI6IFF1YWdnYUNhbnZhc0NvbnRhaW5lcjtcbiAgICBwcml2YXRlIF9pbnB1dEltYWdlV3JhcHBlcjogSW1hZ2VXcmFwcGVyO1xuICAgIHByaXZhdGUgX2xvY2F0b3I6IEJhcmNvZGVMb2NhdG9yO1xuICAgIHByaXZhdGUgX2JveFNpemU6IEJveDtcbiAgICBwcml2YXRlIF9kZWNvZGVyOiBCYXJjb2RlRGVjb2RlcjtcbiAgICBwcml2YXRlIF93b3JrZXJQb29sOiBBcnJheTxXb3JrZXJUaHJlYWQ+O1xuICAgIHByaXZhdGUgX29uVUlUaHJlYWQ6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBfcmVzdWx0Q29sbGVjdG9yOiBSZXN1bHRDb2xsZWN0b3I7XG4gICAgcHJpdmF0ZSBfY29uZmlnOiBRdWFnZ2FDb25maWc7XG5cbiAgICBzdGF0aWMgZGVjb2RlU2luZ2xlKF9jb25maWc6IFF1YWdnYUNvbmZpZywgcmVzdWx0Q2FsbGJhY2s6IChfOiBRdWFnZ2FCYXJjb2RlKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgICAgIF9jb25maWcgPSBtZXJnZSh7XG4gICAgICAgICAgICBpbnB1dFN0cmVhbToge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdJbWFnZVN0cmVhbScsXG4gICAgICAgICAgICAgICAgc2VxdWVuY2U6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNpemU6IDgwMCxcbiAgICAgICAgICAgICAgICBzcmM6IF9jb25maWcuc3JjXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbnVtT2ZXb3JrZXJzOiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBfY29uZmlnLmRlYnVnKSA/IDAgOiAxLFxuICAgICAgICAgICAgbG9jYXRvcjoge1xuICAgICAgICAgICAgICAgIGhhbGZTYW1wbGU6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIF9jb25maWcpO1xuXG4gICAgICAgIGNvbnN0IHF1YWdnYSA9IG5ldyBRdWFnZ2EoX2NvbmZpZywgKCkgPT4ge1xuICAgICAgICAgICAgRXZlbnRzLm9uY2UoJ3Byb2Nlc3NlZCcsIChyZXN1bHQ6IFF1YWdnYUJhcmNvZGUpID0+IHtcbiAgICAgICAgICAgICAgICBxdWFnZ2Euc3RvcCgpO1xuICAgICAgICAgICAgICAgIHJlc3VsdENhbGxiYWNrLmNhbGwobnVsbCwgcmVzdWx0KTtcbiAgICAgICAgICAgIH0sIHRydWUpO1xuICAgICAgICAgICAgcXVhZ2dhLnN0YXJ0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKF9jb25maWc6IFF1YWdnYUNvbmZpZywgY2I6ICgpID0+IHZvaWQsIGltYWdlV3JhcHBlcj86IEltYWdlV3JhcHBlcikge1xuICAgICAgICB0aGlzLl9vblVJVGhyZWFkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fY2FudmFzQ29udGFpbmVyID0ge1xuICAgICAgICAgICAgY3R4OiB7XG4gICAgICAgICAgICAgICAgaW1hZ2U6IG51bGwsXG4gICAgICAgICAgICAgICAgb3ZlcmxheTogbnVsbFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRvbToge1xuICAgICAgICAgICAgICAgIGltYWdlOiBudWxsLFxuICAgICAgICAgICAgICAgIG92ZXJsYXk6IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fd29ya2VyUG9vbCA9IG5ldyBBcnJheTxXb3JrZXJUaHJlYWQ+KCk7XG4gICAgICAgIHRoaXMuX2NvbmZpZyA9IG1lcmdlKGNvbmZpZywgX2NvbmZpZyk7XG4gICAgICAgIGlmIChpbWFnZVdyYXBwZXIpIHtcbiAgICAgICAgICAgIHRoaXMuX29uVUlUaHJlYWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuX2luaXRpYWxpemVEYXRhKGltYWdlV3JhcHBlcik7XG4gICAgICAgICAgICBjYigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5faW5pdElucHV0U3RyZWFtKGNiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBjYW52YXMoKTogUXVhZ2dhQ2FudmFzQ29udGFpbmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhbnZhc0NvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBzdGFydCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuX29uVUlUaHJlYWQgJiYgdGhpcy5fY29uZmlnLmlucHV0U3RyZWFtLnR5cGUgPT09ICdMaXZlU3RyZWFtJykge1xuICAgICAgICAgICAgdGhpcy5fc3RhcnRDb250aW51b3VzVXBkYXRlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl91cGRhdGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0b3AoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3N0b3BwZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLl9hZGp1c3RXb3JrZXJQb29sKDApO1xuICAgICAgICBpZiAodGhpcy5fY29uZmlnLmlucHV0U3RyZWFtLnR5cGUgPT09ICdMaXZlU3RyZWFtJykge1xuICAgICAgICAgICAgQ2FtZXJhQWNjZXNzLnJlbGVhc2UoKTtcbiAgICAgICAgICAgIHRoaXMuX2lucHV0U3RyZWFtLmNsZWFyRXZlbnRIYW5kbGVycygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcGF1c2UoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3N0b3BwZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIG9uRGV0ZWN0ZWQoY2FsbGJhY2s6IEV2ZW50U3Vic2NyaXB0aW9uIHwgRXZlbnRDYWxsYmFjayk6IHZvaWQge1xuICAgICAgICBFdmVudHMuc3Vic2NyaWJlKCdkZXRlY3RlZCcsIGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICBvZmZEZXRlY3RlZChjYWxsYmFjazogRXZlbnRDYWxsYmFjayk6IHZvaWQge1xuICAgICAgICBFdmVudHMudW5zdWJzY3JpYmUoJ2RldGVjdGVkJywgY2FsbGJhY2spO1xuICAgIH1cblxuICAgIG9uUHJvY2Vzc2VkKGNhbGxiYWNrOiBFdmVudFN1YnNjcmlwdGlvbiB8IEV2ZW50Q2FsbGJhY2spOiB2b2lkIHtcbiAgICAgICAgRXZlbnRzLnN1YnNjcmliZSgncHJvY2Vzc2VkJywgY2FsbGJhY2spO1xuICAgIH1cblxuICAgIG9mZlByb2Nlc3NlZChjYWxsYmFjazogRXZlbnRDYWxsYmFjayk6IHZvaWQge1xuICAgICAgICBFdmVudHMudW5zdWJzY3JpYmUoJ3Byb2Nlc3NlZCcsIGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICBzZXRSZWFkZXJzKHJlYWRlcnM6IEFycmF5PEJhcmNvZGVSZWFkZXJEZWNsYXJhdGlvbj4pOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuX2RlY29kZXIpIHtcbiAgICAgICAgICAgIHRoaXMuX2RlY29kZXIuc2V0UmVhZGVycyhyZWFkZXJzKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9vblVJVGhyZWFkICYmIHRoaXMuX3dvcmtlclBvb2wubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5fd29ya2VyUG9vbC5mb3JFYWNoKCh7IHdvcmtlciB9KSA9PiB3b3JrZXIucG9zdE1lc3NhZ2UoeyBjbWQ6ICdzZXRSZWFkZXJzJywgcmVhZGVycyB9KSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZWdpc3RlclJlc3VsdENvbGxlY3RvcihyZXN1bHRDb2xsZWN0b3I6IFJlc3VsdENvbGxlY3Rvcik6IHZvaWQge1xuICAgICAgICBpZiAocmVzdWx0Q29sbGVjdG9yICYmIHR5cGVvZiByZXN1bHRDb2xsZWN0b3IuYWRkUmVzdWx0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aGlzLl9yZXN1bHRDb2xsZWN0b3IgPSByZXN1bHRDb2xsZWN0b3I7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBDYW1lcmFBY2Nlc3M6IENhbWVyYUFjY2VzcztcbiAgICBJbWFnZURlYnVnOiBJbWFnZURlYnVnO1xuICAgIEltYWdlV3JhcHBlcjogSW1hZ2VXcmFwcGVyO1xuICAgIFJlc3VsdENvbGxlY3RvcjogUmVzdWx0Q29sbGVjdG9yO1xuXG4gICAgcHJpdmF0ZSBfaW5pdGlhbGl6ZURhdGEoaW1hZ2VXcmFwcGVyPzogSW1hZ2VXcmFwcGVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2luaXRCdWZmZXJzKGltYWdlV3JhcHBlcik7XG4gICAgICAgIHRoaXMuX2RlY29kZXIgPSBuZXcgQmFyY29kZURlY29kZXIodGhpcy5fY29uZmlnLmRlY29kZXIsIHRoaXMuX2lucHV0SW1hZ2VXcmFwcGVyKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9pbml0SW5wdXRTdHJlYW0oY2FsbGJhY2s6IChlcnI/OiBhbnkpID0+IHZvaWQpOiB2b2lkIHtcbiAgICAgICAgbGV0IHZpZGVvOiBIVE1MVmlkZW9FbGVtZW50O1xuICAgICAgICBpZiAodGhpcy5fY29uZmlnLmlucHV0U3RyZWFtLnR5cGUgPT09ICdWaWRlb1N0cmVhbScpIHtcbiAgICAgICAgICAgIHZpZGVvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndmlkZW8nKTtcbiAgICAgICAgICAgIHRoaXMuX2lucHV0U3RyZWFtID0gbmV3IFZpZGVvU3RyZWFtKHZpZGVvKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9jb25maWcuaW5wdXRTdHJlYW0udHlwZSA9PT0gJ0ltYWdlU3RyZWFtJykge1xuICAgICAgICAgICAgdGhpcy5faW5wdXRTdHJlYW0gPSBuZXcgSW1hZ2VTdHJlYW0oKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9jb25maWcuaW5wdXRTdHJlYW0udHlwZSA9PT0gJ0xpdmVTdHJlYW0nKSB7XG4gICAgICAgICAgICBjb25zdCB2aWV3cG9ydCA9IHRoaXMuX2dldFZpZXdQb3J0KCk7XG4gICAgICAgICAgICBpZiAodmlld3BvcnQpIHtcbiAgICAgICAgICAgICAgICB2aWRlbyA9IHZpZXdwb3J0LnF1ZXJ5U2VsZWN0b3IoJ3ZpZGVvJyk7XG4gICAgICAgICAgICAgICAgaWYgKCF2aWRlbykge1xuICAgICAgICAgICAgICAgICAgICB2aWRlbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZpZGVvJyk7XG4gICAgICAgICAgICAgICAgICAgIHZpZXdwb3J0LmFwcGVuZENoaWxkKHZpZGVvKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9pbnB1dFN0cmVhbSA9IG5ldyBMaXZlU3RyZWFtKHZpZGVvKTtcbiAgICAgICAgICAgIENhbWVyYUFjY2Vzcy5yZXF1ZXN0KHZpZGVvLCB0aGlzLl9jb25maWcuaW5wdXRTdHJlYW0uY29uc3RyYWludHMpXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5faW5wdXRTdHJlYW0udHJpZ2dlcignY2FucmVjb3JkJyksIGVyciA9PiBjYWxsYmFjayhlcnIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2lucHV0U3RyZWFtLnNldEF0dHJpYnV0ZSgncHJlbG9hZCcsICdhdXRvJyk7XG4gICAgICAgIHRoaXMuX2lucHV0U3RyZWFtLmNvbmZpZyA9IHRoaXMuX2NvbmZpZy5pbnB1dFN0cmVhbTtcbiAgICAgICAgdGhpcy5faW5wdXRTdHJlYW0uYWRkRXZlbnRMaXN0ZW5lcignY2FucmVjb3JkJywgdGhpcy5fY2FuUmVjb3JkLmJpbmQodGhpcywgY2FsbGJhY2spKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9nZXRWaWV3UG9ydCgpOiBIVE1MRWxlbWVudCB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuX2NvbmZpZy5pbnB1dFN0cmVhbS50YXJnZXQ7XG4gICAgICAgIC8vIENoZWNrIGlmIHRhcmdldCBpcyBhbHJlYWR5IGEgRE9NIGVsZW1lbnRcbiAgICAgICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gVXNlICcjaW50ZXJhY3RpdmUudmlld3BvcnQnIGFzIGEgZmFsbGJhY2sgc2VsZWN0b3IgKGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5KVxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0b3IgPSB0eXBlb2YgdGFyZ2V0ID09PSAnc3RyaW5nJyA/IHRhcmdldCA6ICcjaW50ZXJhY3RpdmUudmlld3BvcnQnO1xuICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfY2FuUmVjb3JkKGNiOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgICAgIGNoZWNrSW1hZ2VDb25zdHJhaW50cyh0aGlzLl9pbnB1dFN0cmVhbSwgdGhpcy5fY29uZmlnLmxvY2F0b3IpO1xuICAgICAgICB0aGlzLl9pbml0Q2FudmFzKCk7XG4gICAgICAgIHRoaXMuX2ZyYW1lR3JhYmJlciA9IG5ldyBGcmFtZUdyYWJiZXIodGhpcy5faW5wdXRTdHJlYW0sIHRoaXMuX2NhbnZhc0NvbnRhaW5lci5kb20uaW1hZ2UpO1xuXG4gICAgICAgIHRoaXMuX2FkanVzdFdvcmtlclBvb2wodGhpcy5fY29uZmlnLm51bU9mV29ya2VycywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy5udW1PZldvcmtlcnMgPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9pbml0aWFsaXplRGF0YSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9pbnB1dFN0cmVhbS5wbGF5KCk7XG4gICAgICAgICAgICBjYigpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9pbml0Q2FudmFzKCk6IHZvaWQge1xuICAgICAgICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgY29uc3Qgdmlld3BvcnQgPSB0aGlzLl9nZXRWaWV3UG9ydCgpO1xuICAgICAgICAgICAgdGhpcy5fY2FudmFzQ29udGFpbmVyLmRvbS5pbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbnZhcy5pbWdCdWZmZXInKTtcbiAgICAgICAgICAgIGlmICghdGhpcy5fY2FudmFzQ29udGFpbmVyLmRvbS5pbWFnZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NhbnZhc0NvbnRhaW5lci5kb20uaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9jYW52YXNDb250YWluZXIuZG9tLmltYWdlLmNsYXNzTmFtZSA9ICdpbWdCdWZmZXInO1xuICAgICAgICAgICAgICAgIGlmICh2aWV3cG9ydCAmJiB0aGlzLl9jb25maWcuaW5wdXRTdHJlYW0udHlwZSA9PT0gJ0ltYWdlU3RyZWFtJykge1xuICAgICAgICAgICAgICAgICAgICB2aWV3cG9ydC5hcHBlbmRDaGlsZCh0aGlzLl9jYW52YXNDb250YWluZXIuZG9tLmltYWdlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9jYW52YXNDb250YWluZXIuY3R4LmltYWdlID0gdGhpcy5fY2FudmFzQ29udGFpbmVyLmRvbS5pbWFnZS5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICAgICAgdGhpcy5fY2FudmFzQ29udGFpbmVyLmRvbS5pbWFnZS53aWR0aCA9IHRoaXMuX2lucHV0U3RyZWFtLmNhbnZhc1dpZHRoO1xuICAgICAgICAgICAgdGhpcy5fY2FudmFzQ29udGFpbmVyLmRvbS5pbWFnZS5oZWlnaHQgPSB0aGlzLl9pbnB1dFN0cmVhbS5jYW52YXNIZWlnaHQ7XG5cbiAgICAgICAgICAgIHRoaXMuX2NhbnZhc0NvbnRhaW5lci5kb20ub3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbnZhcy5kcmF3aW5nQnVmZmVyJyk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX2NhbnZhc0NvbnRhaW5lci5kb20ub3ZlcmxheSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NhbnZhc0NvbnRhaW5lci5kb20ub3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2NhbnZhc0NvbnRhaW5lci5kb20ub3ZlcmxheS5jbGFzc05hbWUgPSAnZHJhd2luZ0J1ZmZlcic7XG4gICAgICAgICAgICAgICAgaWYgKHZpZXdwb3J0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZpZXdwb3J0LmFwcGVuZENoaWxkKHRoaXMuX2NhbnZhc0NvbnRhaW5lci5kb20ub3ZlcmxheSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IGNsZWFyRml4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKTtcbiAgICAgICAgICAgICAgICBjbGVhckZpeC5zZXRBdHRyaWJ1dGUoJ2NsZWFyJywgJ2FsbCcpO1xuICAgICAgICAgICAgICAgIGlmICh2aWV3cG9ydCkge1xuICAgICAgICAgICAgICAgICAgICB2aWV3cG9ydC5hcHBlbmRDaGlsZChjbGVhckZpeCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fY2FudmFzQ29udGFpbmVyLmN0eC5vdmVybGF5ID0gdGhpcy5fY2FudmFzQ29udGFpbmVyLmRvbS5vdmVybGF5LmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgICAgICB0aGlzLl9jYW52YXNDb250YWluZXIuZG9tLm92ZXJsYXkud2lkdGggPSB0aGlzLl9pbnB1dFN0cmVhbS5jYW52YXNXaWR0aDtcbiAgICAgICAgICAgIHRoaXMuX2NhbnZhc0NvbnRhaW5lci5kb20ub3ZlcmxheS5oZWlnaHQgPSB0aGlzLl9pbnB1dFN0cmVhbS5jYW52YXNIZWlnaHQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9pbml0QnVmZmVycyhpbWFnZVdyYXBwZXI/OiBJbWFnZVdyYXBwZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKGltYWdlV3JhcHBlcikge1xuICAgICAgICAgICAgdGhpcy5faW5wdXRJbWFnZVdyYXBwZXIgPSBpbWFnZVdyYXBwZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9pbnB1dEltYWdlV3JhcHBlciA9IG5ldyBJbWFnZVdyYXBwZXIoe1xuICAgICAgICAgICAgICAgIHg6IHRoaXMuX2lucHV0U3RyZWFtLndpZHRoLFxuICAgICAgICAgICAgICAgIHk6IHRoaXMuX2lucHV0U3RyZWFtLmhlaWdodFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5faW5wdXRJbWFnZVdyYXBwZXIuc2l6ZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fYm94U2l6ZSA9IFtcbiAgICAgICAgICAgIHsgeDogMCwgeTogMCB9LFxuICAgICAgICAgICAgeyB4OiAwLCB5OiB0aGlzLl9pbnB1dEltYWdlV3JhcHBlci5zaXplLnkgfSxcbiAgICAgICAgICAgIHsgeDogdGhpcy5faW5wdXRJbWFnZVdyYXBwZXIuc2l6ZS54LCB5OiB0aGlzLl9pbnB1dEltYWdlV3JhcHBlci5zaXplLnkgfSxcbiAgICAgICAgICAgIHsgeDogdGhpcy5faW5wdXRJbWFnZVdyYXBwZXIuc2l6ZS54LCB5OiAwIH1cbiAgICAgICAgXTtcbiAgICAgICAgdGhpcy5fbG9jYXRvciA9IG5ldyBCYXJjb2RlTG9jYXRvcih0aGlzLl9pbnB1dEltYWdlV3JhcHBlciwgdGhpcy5fY29uZmlnLmxvY2F0b3IpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2dldEJvdW5kaW5nQm94ZXMoKTogQXJyYXk8Qm94PiB7XG4gICAgICAgIGlmICh0aGlzLl9jb25maWcubG9jYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbG9jYXRvci5sb2NhdGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBbW1xuICAgICAgICAgICAgICAgIHRoaXMuX2JveFNpemVbMF0sXG4gICAgICAgICAgICAgICAgdGhpcy5fYm94U2l6ZVsxXSxcbiAgICAgICAgICAgICAgICB0aGlzLl9ib3hTaXplWzJdLFxuICAgICAgICAgICAgICAgIHRoaXMuX2JveFNpemVbM11cbiAgICAgICAgICAgIF1dO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfdHJhbnNmb3JtKHBvbHlnb246IFJlYWRvbmx5QXJyYXk8UG9pbnQ+LCBvZmZzZXQ6IFBvaW50KTogdm9pZCB7XG4gICAgICAgIHBvbHlnb24uZm9yRWFjaCh2ZXJ0ZXggPT4ge1xuICAgICAgICAgICAgdmVydGV4LnggKz0gb2Zmc2V0Lng7XG4gICAgICAgICAgICB2ZXJ0ZXgueSArPSBvZmZzZXQueTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwcml2YXRlIF90cmFuc2Zvcm1SZXN1bHQocmVzdWx0OiBRdWFnZ2FCYXJjb2RlLCBvZmZzZXQ6IFBvaW50KTogdm9pZCB7XG4gICAgICAgIGlmIChyZXN1bHQuYmFyY29kZXMpIHtcbiAgICAgICAgICAgIHJlc3VsdC5iYXJjb2Rlcy5mb3JFYWNoKGJhcmNvZGUgPT4gdGhpcy5fdHJhbnNmb3JtUmVzdWx0KGJhcmNvZGUsIG9mZnNldCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlc3VsdC5saW5lKSB7XG4gICAgICAgICAgICB0aGlzLl90cmFuc2Zvcm0ocmVzdWx0LmxpbmUsIG9mZnNldCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVzdWx0LmJveCkge1xuICAgICAgICAgICAgdGhpcy5fdHJhbnNmb3JtKHJlc3VsdC5ib3gsIG9mZnNldCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVzdWx0LmJveGVzKSB7XG4gICAgICAgICAgICByZXN1bHQuYm94ZXMuZm9yRWFjaChib3ggPT4gdGhpcy5fdHJhbnNmb3JtKGJveCwgb2Zmc2V0KSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9hZGRSZXN1bHQocmVzdWx0OiBRdWFnZ2FCYXJjb2RlLCBpbWFnZURhdGE6IFVpbnQ4QXJyYXksIGNhbnZhc1dpZHRoOiBudW1iZXIsIGNhbnZhc0hlaWdodDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmIChpbWFnZURhdGEgJiYgdGhpcy5fcmVzdWx0Q29sbGVjdG9yKSB7XG4gICAgICAgICAgICBpZiAocmVzdWx0LmJhcmNvZGVzKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmJhcmNvZGVzLmZvckVhY2goKHsgY29kZVJlc3VsdCB9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb2RlUmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZXN1bHRDb2xsZWN0b3IuYWRkUmVzdWx0KGltYWdlRGF0YSwgY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCwgY29kZVJlc3VsdClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuY29kZVJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3Jlc3VsdENvbGxlY3Rvci5hZGRSZXN1bHQoaW1hZ2VEYXRhLCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0LCByZXN1bHQuY29kZVJlc3VsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9oYXNDb2RlUmVzdWx0KHJlc3VsdDogUXVhZ2dhQmFyY29kZSk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gcmVzdWx0ICYmICghIXJlc3VsdC5jb2RlUmVzdWx0IHx8IHJlc3VsdC5iYXJjb2RlcyAmJiByZXN1bHQuYmFyY29kZXMuc29tZShiYXJjb2RlID0+ICEhYmFyY29kZS5jb2RlUmVzdWx0KSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfcHVibGlzaFJlc3VsdChyZXN1bHQ/OiBRdWFnZ2FCYXJjb2RlLCBpbWFnZURhdGE/OiBVaW50OEFycmF5KTogdm9pZCB7XG4gICAgICAgIGxldCByZXN1bHRUb1B1Ymxpc2g6IFF1YWdnYUJhcmNvZGUgfCBBcnJheTxRdWFnZ2FCYXJjb2RlPiA9IHJlc3VsdDtcblxuICAgICAgICBpZiAocmVzdWx0ICYmIHRoaXMuX29uVUlUaHJlYWQpIHtcbiAgICAgICAgICAgIGNvbnN0IG9mZnNldCA9IHRoaXMuX2lucHV0U3RyZWFtLnRvcExlZnQ7XG5cbiAgICAgICAgICAgIGlmIChvZmZzZXQueCAhPT0gMCB8fCBvZmZzZXQueSAhPT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3RyYW5zZm9ybVJlc3VsdChyZXN1bHQsIG9mZnNldCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX2FkZFJlc3VsdChyZXN1bHQsIGltYWdlRGF0YSwgdGhpcy5faW5wdXRTdHJlYW0uY2FudmFzV2lkdGgsIHRoaXMuX2lucHV0U3RyZWFtLmNhbnZhc0hlaWdodCk7XG4gICAgICAgICAgICByZXN1bHRUb1B1Ymxpc2ggPSByZXN1bHQuYmFyY29kZXMgfHwgcmVzdWx0O1xuICAgICAgICB9XG5cbiAgICAgICAgRXZlbnRzLnB1Ymxpc2goJ3Byb2Nlc3NlZCcsIHJlc3VsdFRvUHVibGlzaCk7XG4gICAgICAgIGlmICh0aGlzLl9oYXNDb2RlUmVzdWx0KHJlc3VsdCkpIHtcbiAgICAgICAgICAgIEV2ZW50cy5wdWJsaXNoKCdkZXRlY3RlZCcsIHJlc3VsdFRvUHVibGlzaCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9sb2NhdGVBbmREZWNvZGUoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGJveGVzID0gdGhpcy5fZ2V0Qm91bmRpbmdCb3hlcygpO1xuXG4gICAgICAgIGlmIChib3hlcykge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5fZGVjb2Rlci5kZWNvZGVGcm9tQm91bmRpbmdCb3hlcyhib3hlcykgfHwge307XG4gICAgICAgICAgICByZXN1bHQuYm94ZXMgPSBib3hlcztcbiAgICAgICAgICAgIHRoaXMuX3B1Ymxpc2hSZXN1bHQocmVzdWx0LCB0aGlzLl9pbnB1dEltYWdlV3JhcHBlci5kYXRhKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3B1Ymxpc2hSZXN1bHQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX3VwZGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgbGV0IGF2YWlsYWJsZVdvcmtlcjtcblxuICAgICAgICBpZiAodGhpcy5fb25VSVRocmVhZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3dvcmtlclBvb2wubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGF2YWlsYWJsZVdvcmtlciA9IHRoaXMuX3dvcmtlclBvb2wuZmluZCh3b3JrZXJUaHJlYWQgPT4gIXdvcmtlclRocmVhZC5idXN5KTtcbiAgICAgICAgICAgICAgICBpZiAoYXZhaWxhYmxlV29ya2VyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2ZyYW1lR3JhYmJlci5hdHRhY2hEYXRhKGF2YWlsYWJsZVdvcmtlci5pbWFnZURhdGEpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjsgLy8gYWxsIHdvcmtlcnMgYXJlIGJ1c3lcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX2ZyYW1lR3JhYmJlci5hdHRhY2hEYXRhKHRoaXMuX2lucHV0SW1hZ2VXcmFwcGVyLmRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuX2ZyYW1lR3JhYmJlci5ncmFiKCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoYXZhaWxhYmxlV29ya2VyKSB7XG4gICAgICAgICAgICAgICAgICAgIGF2YWlsYWJsZVdvcmtlci5idXN5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYXZhaWxhYmxlV29ya2VyLndvcmtlci5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbWQ6ICdwcm9jZXNzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlRGF0YTogYXZhaWxhYmxlV29ya2VyLmltYWdlRGF0YVxuICAgICAgICAgICAgICAgICAgICB9LCBbYXZhaWxhYmxlV29ya2VyLmltYWdlRGF0YS5idWZmZXJdKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9sb2NhdGVBbmREZWNvZGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9sb2NhdGVBbmREZWNvZGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX3N0YXJ0Q29udGludW91c1VwZGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgZGVsYXkgPSAxMDAwIC8gKHRoaXMuX2NvbmZpZy5mcmVxdWVuY3kgfHwgNjApO1xuICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICAgICAgbGV0IG5leHQgPSBudWxsO1xuICAgICAgICB0aGlzLl9zdG9wcGVkID0gZmFsc2U7XG5cbiAgICAgICAgKGZ1bmN0aW9uIGZyYW1lKHRpbWVzdGFtcCk6IHZvaWQge1xuICAgICAgICAgICAgbmV4dCA9IG5leHQgfHwgdGltZXN0YW1wO1xuICAgICAgICAgICAgaWYgKCF0aGF0Ll9zdG9wcGVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRpbWVzdGFtcCA+PSBuZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHQgKz0gZGVsYXk7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQuX3VwZGF0ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZyYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfShwZXJmb3JtYW5jZS5ub3coKSkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2luaXRXb3JrZXIoY2I6ICh3b3JrZXJUaHJlYWQ6IFdvcmtlclRocmVhZCkgPT4gdm9pZCk6IHZvaWQge1xuICAgICAgICBjb25zdCBibG9iVVJMID0gdGhpcy5fZ2VuZXJhdGVXb3JrZXJCbG9iKCk7XG4gICAgICAgIGNvbnN0IHdvcmtlclRocmVhZCA9IHtcbiAgICAgICAgICAgIHdvcmtlcjogbmV3IFdvcmtlcihibG9iVVJMKSxcbiAgICAgICAgICAgIGltYWdlRGF0YTogbmV3IFVpbnQ4QXJyYXkodGhpcy5faW5wdXRTdHJlYW0ud2lkdGggKiB0aGlzLl9pbnB1dFN0cmVhbS5oZWlnaHQpLFxuICAgICAgICAgICAgYnVzeTogdHJ1ZVxuICAgICAgICB9O1xuXG4gICAgICAgIHdvcmtlclRocmVhZC53b3JrZXIub25tZXNzYWdlID0gKHsgZGF0YSB9KSA9PiB7XG4gICAgICAgICAgICBpZiAoZGF0YS5ldmVudCA9PT0gJ2luaXRpYWxpemVkJykge1xuICAgICAgICAgICAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwoYmxvYlVSTCk7XG4gICAgICAgICAgICAgICAgd29ya2VyVGhyZWFkLmJ1c3kgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB3b3JrZXJUaHJlYWQuaW1hZ2VEYXRhID0gbmV3IFVpbnQ4QXJyYXkoZGF0YS5pbWFnZURhdGEpO1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdXb3JrZXIgaW5pdGlhbGl6ZWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2Iod29ya2VyVGhyZWFkKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS5ldmVudCA9PT0gJ3Byb2Nlc3NlZCcpIHtcbiAgICAgICAgICAgICAgICB3b3JrZXJUaHJlYWQuYnVzeSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHdvcmtlclRocmVhZC5pbWFnZURhdGEgPSBuZXcgVWludDhBcnJheShkYXRhLmltYWdlRGF0YSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fcHVibGlzaFJlc3VsdChkYXRhLnJlc3VsdCwgd29ya2VyVGhyZWFkLmltYWdlRGF0YSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEuZXZlbnQgPT09ICdlcnJvcicpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnV29ya2VyIGVycm9yOicsIGRhdGEubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHdvcmtlclRocmVhZC53b3JrZXIucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgY21kOiAnaW5pdCcsXG4gICAgICAgICAgICBzaXplOiB7IHg6IHRoaXMuX2lucHV0U3RyZWFtLndpZHRoLCB5OiB0aGlzLl9pbnB1dFN0cmVhbS5oZWlnaHQgfSxcbiAgICAgICAgICAgIGltYWdlRGF0YTogd29ya2VyVGhyZWFkLmltYWdlRGF0YSxcbiAgICAgICAgICAgIGNvbmZpZzogbWVyZ2UodGhpcy5fY29uZmlnLCB7IGlucHV0U3RyZWFtOiB7IHRhcmdldDogbnVsbCB9IH0pXG4gICAgICAgIH0sIFt3b3JrZXJUaHJlYWQuaW1hZ2VEYXRhLmJ1ZmZlcl0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3dvcmtlckludGVyZmFjZShmYWN0b3J5OiBGdW5jdGlvbik6IHZvaWQge1xuICAgICAgICBjb25zdCBvcmlnaW4gPSAnKic7XG4gICAgICAgIGxldCBxdWFnZ2E6IFF1YWdnYTtcbiAgICAgICAgbGV0IGltYWdlV3JhcHBlcjogSW1hZ2VXcmFwcGVyO1xuXG4gICAgICAgIGlmIChmYWN0b3J5KSB7XG4gICAgICAgICAgICBxdWFnZ2EgPSBmYWN0b3J5KCkuZGVmYXVsdDtcbiAgICAgICAgICAgIGlmICghcXVhZ2dhKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5wb3N0TWVzc2FnZSh7IGV2ZW50OiAnZXJyb3InLCBtZXNzYWdlOiAnUXVhZ2dhIGNvdWxkIG5vdCBiZSBjcmVhdGVkJyB9LCBvcmlnaW4pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHNlbGYub25tZXNzYWdlID0gKHsgZGF0YSB9KSA9PiB7XG4gICAgICAgICAgICBpZiAoZGF0YS5jbWQgPT09ICdpbml0Jykge1xuICAgICAgICAgICAgICAgIGNvbnN0IF9jb25maWc6IFF1YWdnYUNvbmZpZyA9IGRhdGEuY29uZmlnO1xuICAgICAgICAgICAgICAgIF9jb25maWcubnVtT2ZXb3JrZXJzID0gMDtcbiAgICAgICAgICAgICAgICBpbWFnZVdyYXBwZXIgPSBuZXcgSW1hZ2VXcmFwcGVyKHsgeDogZGF0YS5zaXplLngsIHk6IGRhdGEuc2l6ZS55IH0sIG5ldyBVaW50OEFycmF5KGRhdGEuaW1hZ2VEYXRhKSk7XG4gICAgICAgICAgICAgICAgcXVhZ2dhID0gbmV3IFF1YWdnYShfY29uZmlnLCAoKSA9PiBzZWxmLnBvc3RNZXNzYWdlKFxuICAgICAgICAgICAgICAgICAgICB7IGV2ZW50OiAnaW5pdGlhbGl6ZWQnLCBpbWFnZURhdGE6IGltYWdlV3JhcHBlci5kYXRhIH0sIG9yaWdpbiwgW2ltYWdlV3JhcHBlci5kYXRhLmJ1ZmZlcl0pLFxuICAgICAgICAgICAgICAgICAgICBpbWFnZVdyYXBwZXJcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHF1YWdnYS5vblByb2Nlc3NlZCgocmVzdWx0OiBRdWFnZ2FCYXJjb2RlKSA9PiBzZWxmLnBvc3RNZXNzYWdlKFxuICAgICAgICAgICAgICAgICAgICB7IGV2ZW50OiAncHJvY2Vzc2VkJywgaW1hZ2VEYXRhOiBpbWFnZVdyYXBwZXIuZGF0YSwgcmVzdWx0IH0sIG9yaWdpbiwgW2ltYWdlV3JhcHBlci5kYXRhLmJ1ZmZlcl1cbiAgICAgICAgICAgICAgICApKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS5jbWQgPT09ICdwcm9jZXNzJykge1xuICAgICAgICAgICAgICAgIGltYWdlV3JhcHBlci5kYXRhID0gbmV3IFVpbnQ4QXJyYXkoZGF0YS5pbWFnZURhdGEpO1xuICAgICAgICAgICAgICAgIHF1YWdnYS5zdGFydCgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRhLmNtZCA9PT0gJ3NldFJlYWRlcnMnKSB7XG4gICAgICAgICAgICAgICAgcXVhZ2dhLnNldFJlYWRlcnMoZGF0YS5yZWFkZXJzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9nZW5lcmF0ZVdvcmtlckJsb2IoKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtgKCR7dGhpcy5fd29ya2VySW50ZXJmYWNlLnRvU3RyaW5nKCl9KSgke19fZmFjdG9yeVNvdXJjZV9fIHx8ICcnfSk7YF0sXG4gICAgICAgICAgICB7IHR5cGU6ICd0ZXh0L2phdmFzY3JpcHQnIH0pO1xuXG4gICAgICAgIHJldHVybiB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9hZGp1c3RXb3JrZXJQb29sKGNhcGFjaXR5OiBudW1iZXIsIGNiPzogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgICAgICBjb25zdCBpbmNyZWFzZUJ5ID0gY2FwYWNpdHkgLSB0aGlzLl93b3JrZXJQb29sLmxlbmd0aDtcbiAgICAgICAgaWYgKGluY3JlYXNlQnkgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBjYiAmJiBjYigpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbmNyZWFzZUJ5IDwgMCkge1xuICAgICAgICAgICAgdGhpcy5fd29ya2VyUG9vbC5zbGljZShpbmNyZWFzZUJ5KS5mb3JFYWNoKCh7IHdvcmtlciB9KSA9PiB7XG4gICAgICAgICAgICAgICAgd29ya2VyLnRlcm1pbmF0ZSgpO1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdXb3JrZXIgdGVybWluYXRlZCEnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuX3dvcmtlclBvb2wgPSB0aGlzLl93b3JrZXJQb29sLnNsaWNlKDAsIGluY3JlYXNlQnkpO1xuICAgICAgICAgICAgcmV0dXJuIGNiICYmIGNiKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluY3JlYXNlQnk7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuX2luaXRXb3JrZXIod29ya2VyVGhyZWFkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fd29ya2VyUG9vbC5wdXNoKHdvcmtlclRocmVhZCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl93b3JrZXJQb29sLmxlbmd0aCA+PSBjYXBhY2l0eSAmJiBjYikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2IoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcbiIsImltcG9ydCB7IEJhcmNvZGUsIEJhcmNvZGVJbmZvLCBCYXJjb2RlUmVhZGVyLCBCYXJjb2RlUmVhZGVyQ29uZmlnIH0gZnJvbSAnLi9iYXJjb2RlLXJlYWRlcic7XG5cbmNvbnN0IE4gPSAxO1xuY29uc3QgVyA9IDM7XG5jb25zdCBTVEFSVF9QQVRURVJOID0gW1csIE4sIFcsIE4sIE4sIE5dO1xuY29uc3QgU1RPUF9QQVRURVJOID0gW1csIE4sIE4sIE4sIFddO1xuY29uc3QgQ09ERV9QQVRURVJOID0gW1xuICAgIFtOLCBOLCBXLCBXLCBOXSxcbiAgICBbVywgTiwgTiwgTiwgV10sXG4gICAgW04sIFcsIE4sIE4sIFddLFxuICAgIFtXLCBXLCBOLCBOLCBOXSxcbiAgICBbTiwgTiwgVywgTiwgV10sXG4gICAgW1csIE4sIFcsIE4sIE5dLFxuICAgIFtOLCBXLCBXLCBOLCBOXSxcbiAgICBbTiwgTiwgTiwgVywgV10sXG4gICAgW1csIE4sIE4sIFcsIE5dLFxuICAgIFtOLCBXLCBOLCBXLCBOXVxuXTtcbmNvbnN0IHN0YXJ0UGF0dGVybkxlbmd0aCA9IFNUQVJUX1BBVFRFUk4ucmVkdWNlKChzdW0sIHZhbCkgPT4gc3VtICsgdmFsLCAwKTtcblxuZXhwb3J0IGNsYXNzIFR3b09mRml2ZVJlYWRlciBleHRlbmRzIEJhcmNvZGVSZWFkZXIge1xuICAgIHByaXZhdGUgX2JhclNwYWNlUmF0aW86IFtudW1iZXIsIG51bWJlcl07XG5cbiAgICBjb25zdHJ1Y3Rvcihjb25maWc/OiBCYXJjb2RlUmVhZGVyQ29uZmlnKSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICAgICAgdGhpcy5fYmFyU3BhY2VSYXRpbyA9IFsxLCAxXTtcbiAgICAgICAgdGhpcy5fZm9ybWF0ID0gJzJvZjUnO1xuICAgICAgICB0aGlzLl9zaW5nbGVDb2RlRXJyb3IgPSAwLjc4O1xuICAgICAgICB0aGlzLl9hdmVyYWdlQ29kZUVycm9yID0gMC4zMDtcbiAgICB9XG5cbiAgICBkZWNvZGUoKTogQmFyY29kZSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0SW5mbyA9IHRoaXMuX2ZpbmRTdGFydCgpO1xuXG4gICAgICAgIGlmICghc3RhcnRJbmZvKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGVuZEluZm8gPSB0aGlzLl9maW5kRW5kKCk7XG5cbiAgICAgICAgaWYgKCFlbmRJbmZvKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvdW50ZXJzID0gdGhpcy5fZmlsbENvdW50ZXJzKHN0YXJ0SW5mby5lbmQsIGVuZEluZm8uc3RhcnQsIDApO1xuXG4gICAgICAgIGlmIChjb3VudGVycy5sZW5ndGggJSAxMCAhPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xuICAgICAgICBjb25zdCBkZWNvZGVkQ29kZXMgPSBuZXcgQXJyYXk8QmFyY29kZUluZm8+KCk7XG5cbiAgICAgICAgZGVjb2RlZENvZGVzLnB1c2goc3RhcnRJbmZvKTtcblxuICAgICAgICBjb25zdCBjb2RlID0gdGhpcy5fZGVjb2RlUGF5bG9hZChjb3VudGVycywgcmVzdWx0LCBkZWNvZGVkQ29kZXMpO1xuXG4gICAgICAgIGlmICghY29kZSB8fCByZXN1bHQubGVuZ3RoIDwgNSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBkZWNvZGVkQ29kZXMucHVzaChlbmRJbmZvKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29kZTogcmVzdWx0LmpvaW4oJycpLFxuICAgICAgICAgICAgc3RhcnQ6IHN0YXJ0SW5mby5zdGFydCxcbiAgICAgICAgICAgIGVuZDogZW5kSW5mby5lbmQsXG4gICAgICAgICAgICBzdGFydEluZm8sXG4gICAgICAgICAgICBkZWNvZGVkQ29kZXNcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2ZpbmRTdGFydCgpOiBCYXJjb2RlSW5mbyB7XG4gICAgICAgIGxldCBvZmZzZXQgPSB0aGlzLl9uZXh0U2V0KHRoaXMuX3Jvdyk7XG4gICAgICAgIGxldCBuYXJyb3dCYXJXaWR0aCA9IDE7XG4gICAgICAgIGxldCBzdGFydEluZm86IEJhcmNvZGVJbmZvO1xuXG4gICAgICAgIHdoaWxlICghc3RhcnRJbmZvKSB7XG4gICAgICAgICAgICBzdGFydEluZm8gPSB0aGlzLl9maW5kUGF0dGVybihTVEFSVF9QQVRURVJOLCBvZmZzZXQsIDAsIHRydWUpO1xuXG4gICAgICAgICAgICBpZiAoIXN0YXJ0SW5mbykge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBuYXJyb3dCYXJXaWR0aCA9IChzdGFydEluZm8uZW5kIC0gc3RhcnRJbmZvLnN0YXJ0KSAvIHN0YXJ0UGF0dGVybkxlbmd0aCB8IDA7XG4gICAgICAgICAgICBjb25zdCBsZWFkaW5nV2hpdGVzcGFjZVN0YXJ0ID0gc3RhcnRJbmZvLnN0YXJ0IC0gbmFycm93QmFyV2lkdGggKiA1O1xuXG4gICAgICAgICAgICBpZiAobGVhZGluZ1doaXRlc3BhY2VTdGFydCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX21hdGNoUmFuZ2UobGVhZGluZ1doaXRlc3BhY2VTdGFydCwgc3RhcnRJbmZvLnN0YXJ0LCAwKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RhcnRJbmZvO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgb2Zmc2V0ID0gc3RhcnRJbmZvLmVuZDtcbiAgICAgICAgICAgIHN0YXJ0SW5mbyA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX3ZlcmlmeVRyYWlsaW5nV2hpdGVzcGFjZShlbmRJbmZvOiBCYXJjb2RlSW5mbyk6IEJhcmNvZGVJbmZvIHtcbiAgICAgICAgY29uc3QgdHJhaWxpbmdXaGl0ZXNwYWNlRW5kID0gZW5kSW5mby5lbmQgKyAoZW5kSW5mby5lbmQgLSBlbmRJbmZvLnN0YXJ0KSAvIDI7XG5cbiAgICAgICAgaWYgKHRyYWlsaW5nV2hpdGVzcGFjZUVuZCA8IHRoaXMuX3Jvdy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9tYXRjaFJhbmdlKGVuZEluZm8uZW5kLCB0cmFpbGluZ1doaXRlc3BhY2VFbmQsIDApKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVuZEluZm87XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2ZpbmRFbmQoKTogQmFyY29kZUluZm8ge1xuICAgICAgICB0aGlzLl9yb3cucmV2ZXJzZSgpO1xuXG4gICAgICAgIGNvbnN0IG9mZnNldCA9IHRoaXMuX25leHRTZXQodGhpcy5fcm93KTtcbiAgICAgICAgY29uc3QgZW5kSW5mbyA9IHRoaXMuX2ZpbmRQYXR0ZXJuKFNUT1BfUEFUVEVSTiwgb2Zmc2V0LCAwLCB0cnVlKTtcblxuICAgICAgICB0aGlzLl9yb3cucmV2ZXJzZSgpO1xuXG4gICAgICAgIGlmIChlbmRJbmZvID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHJldmVyc2UgbnVtYmVyc1xuICAgICAgICBjb25zdCBzdGFydCA9IGVuZEluZm8uc3RhcnQ7XG4gICAgICAgIGVuZEluZm8uc3RhcnQgPSB0aGlzLl9yb3cubGVuZ3RoIC0gZW5kSW5mby5lbmQ7XG4gICAgICAgIGVuZEluZm8uZW5kID0gdGhpcy5fcm93Lmxlbmd0aCAtIHN0YXJ0O1xuXG4gICAgICAgIHJldHVybiBlbmRJbmZvICE9PSBudWxsID8gdGhpcy5fdmVyaWZ5VHJhaWxpbmdXaGl0ZXNwYWNlKGVuZEluZm8pIDogbnVsbDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2RlY29kZUNvZGUoY291bnRlcjogUmVhZG9ubHlBcnJheTxudW1iZXI+KTogQmFyY29kZUluZm8ge1xuICAgICAgICBjb25zdCBiZXN0TWF0Y2g6IEJhcmNvZGVJbmZvID0ge1xuICAgICAgICAgICAgZXJyb3I6IE51bWJlci5NQVhfVkFMVUUsXG4gICAgICAgICAgICBjb2RlOiAtMSxcbiAgICAgICAgICAgIHN0YXJ0OiAwLFxuICAgICAgICAgICAgZW5kOiAwXG4gICAgICAgIH07XG5cbiAgICAgICAgZm9yIChsZXQgY29kZSA9IDA7IGNvZGUgPCBDT0RFX1BBVFRFUk4ubGVuZ3RoOyBjb2RlKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGVycm9yID0gdGhpcy5fbWF0Y2hQYXR0ZXJuKGNvdW50ZXIsIENPREVfUEFUVEVSTltjb2RlXSk7XG4gICAgICAgICAgICBpZiAoZXJyb3IgPCBiZXN0TWF0Y2guZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBiZXN0TWF0Y2guY29kZSA9IGNvZGU7XG4gICAgICAgICAgICAgICAgYmVzdE1hdGNoLmVycm9yID0gZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYmVzdE1hdGNoLmVycm9yIDwgdGhpcy5BVkVSQUdFX0NPREVfRVJST1IgPyBiZXN0TWF0Y2ggOiBudWxsO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZGVjb2RlUGF5bG9hZChjb3VudGVyczogUmVhZG9ubHlBcnJheTxudW1iZXI+LCByZXN1bHQ6IEFycmF5PG51bWJlcj4sIGRlY29kZWRDb2RlczogQXJyYXk8QmFyY29kZUluZm8+KTogQmFyY29kZUluZm8ge1xuICAgICAgICBjb25zdCBjb3VudGVyTGVuZ3RoID0gY291bnRlcnMubGVuZ3RoO1xuICAgICAgICBjb25zdCBjb3VudGVyID0gWzAsIDAsIDAsIDAsIDBdO1xuICAgICAgICBsZXQgcG9zID0gMDtcbiAgICAgICAgbGV0IGNvZGU6IEJhcmNvZGVJbmZvO1xuXG4gICAgICAgIHdoaWxlIChwb3MgPCBjb3VudGVyTGVuZ3RoKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvdW50ZXJbaV0gPSBjb3VudGVyc1twb3NdICogdGhpcy5fYmFyU3BhY2VSYXRpb1swXTtcbiAgICAgICAgICAgICAgICBwb3MgKz0gMjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29kZSA9IHRoaXMuX2RlY29kZUNvZGUoY291bnRlcik7XG5cbiAgICAgICAgICAgIGlmICghY29kZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXN1bHQucHVzaChjb2RlLmNvZGUpO1xuICAgICAgICAgICAgZGVjb2RlZENvZGVzLnB1c2goY29kZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29kZTtcbiAgICB9XG59XG4iLCJleHBvcnQgZW51bSBCYXJjb2RlRGlyZWN0aW9uIHtcbiAgICBGb3J3YXJkID0gMSxcbiAgICBSZXZlcnNlID0gLTFcbn07XG5cbmV4cG9ydCB0eXBlIEJhcmNvZGVGb3JtYXQgPSBzdHJpbmc7XG5cbmV4cG9ydCB0eXBlIEJhcmNvZGVSZWFkZXJUeXBlID0gc3RyaW5nO1xuXG5leHBvcnQgdHlwZSBCYXJjb2RlUmVhZGVyRGVjbGFyYXRpb24gPSBCYXJjb2RlUmVhZGVyVHlwZSB8IHsgZm9ybWF0OiBCYXJjb2RlUmVhZGVyVHlwZTsgY29uZmlnOiBCYXJjb2RlUmVhZGVyQ29uZmlnOyB9O1xuXG5leHBvcnQgaW50ZXJmYWNlIEJhcmNvZGVSZWFkZXJDb25maWcge1xuICAgIG5vcm1hbGl6ZUJhclNwYWNlV2lkdGg/OiBib29sZWFuO1xuICAgIHN1cHBsZW1lbnRzPzogQXJyYXk8QmFyY29kZVJlYWRlclR5cGU+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJhcmNvZGVDb3JyZWN0aW9uIHtcbiAgICBiYXI6IG51bWJlcjtcbiAgICBzcGFjZTogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJhcmNvZGVJbmZvIHtcbiAgICBjb2RlPzogbnVtYmVyO1xuICAgIGNvcnJlY3Rpb24/OiBCYXJjb2RlQ29ycmVjdGlvbjtcbiAgICBlbmQ/OiBudW1iZXI7XG4gICAgZW5kQ291bnRlcj86IG51bWJlcjtcbiAgICBlcnJvcj86IG51bWJlcjtcbiAgICBzdGFydD86IG51bWJlcjtcbiAgICBzdGFydENvdW50ZXI/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmFyY29kZSB7XG4gICAgY29kZT86IHN0cmluZztcbiAgICBjb2Rlc2V0PzogbnVtYmVyO1xuICAgIGNvcnJlY3Rpb24/OiBCYXJjb2RlQ29ycmVjdGlvbjtcbiAgICBkZWNvZGVkQ29kZXM/OiBBcnJheTxzdHJpbmcgfCBCYXJjb2RlSW5mbz47XG4gICAgZGlyZWN0aW9uPzogQmFyY29kZURpcmVjdGlvbjtcbiAgICBlbmQ/OiBudW1iZXI7XG4gICAgZW5kSW5mbz86IEJhcmNvZGVJbmZvO1xuICAgIGZvcm1hdD86IEJhcmNvZGVGb3JtYXQ7XG4gICAgc3RhcnQ/OiBudW1iZXI7XG4gICAgc3RhcnRJbmZvPzogQmFyY29kZUluZm87XG4gICAgc3VwcGxlbWVudD86IEJhcmNvZGU7XG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXJjb2RlUmVhZGVyIHtcbiAgICBwcm90ZWN0ZWQgX3NpbmdsZUNvZGVFcnJvcjogbnVtYmVyO1xuICAgIHByb3RlY3RlZCBfYXZlcmFnZUNvZGVFcnJvcjogbnVtYmVyO1xuICAgIHByb3RlY3RlZCBfZm9ybWF0OiBCYXJjb2RlRm9ybWF0O1xuICAgIHByb3RlY3RlZCBfcm93OiBBcnJheTxudW1iZXI+O1xuXG4gICAgY29uZmlnOiBCYXJjb2RlUmVhZGVyQ29uZmlnO1xuICAgIHN1cHBsZW1lbnRzOiBBcnJheTxCYXJjb2RlUmVhZGVyPjtcblxuICAgIHN0YXRpYyBnZXQgRXhjZXB0aW9uKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgU3RhcnROb3RGb3VuZEV4Y2VwdGlvbjogJ1N0YXJ0LUluZm8gd2FzIG5vdCBmb3VuZCEnLFxuICAgICAgICAgICAgQ29kZU5vdEZvdW5kRXhjZXB0aW9uOiAnQ29kZSBjb3VsZCBub3QgYmUgZm91bmQhJyxcbiAgICAgICAgICAgIFBhdHRlcm5Ob3RGb3VuZEV4Y2VwdGlvbjogJ1BhdHRlcm4gY291bGQgbm90IGJlIGZvdW5kISdcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBnZXQgU0lOR0xFX0NPREVfRVJST1IoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpbmdsZUNvZGVFcnJvcjtcbiAgICB9XG5cbiAgICBnZXQgQVZFUkFHRV9DT0RFX0VSUk9SKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hdmVyYWdlQ29kZUVycm9yO1xuICAgIH1cblxuICAgIGdldCBGT1JNQVQoKTogQmFyY29kZUZvcm1hdCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9mb3JtYXQ7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoY29uZmlnPzogQmFyY29kZVJlYWRlckNvbmZpZywgc3VwcGxlbWVudHM/OiBBcnJheTxCYXJjb2RlUmVhZGVyPikge1xuICAgICAgICB0aGlzLl9mb3JtYXQgPSAndW5rbm93bic7XG4gICAgICAgIHRoaXMuX3JvdyA9IFtdO1xuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcbiAgICAgICAgdGhpcy5zdXBwbGVtZW50cyA9IHN1cHBsZW1lbnRzO1xuICAgIH1cblxuICAgIGFic3RyYWN0IGRlY29kZShyb3c/OiBBcnJheTxudW1iZXI+LCBzdGFydD86IG51bWJlcik6IEJhcmNvZGU7XG5cbiAgICBwcm90ZWN0ZWQgX2ZpbmRQYXR0ZXJuKHBhdHRlcm46IFJlYWRvbmx5QXJyYXk8bnVtYmVyPiwgb2Zmc2V0OiBudW1iZXIsIGlzV2hpdGU6IDAgfCAxLCB0cnlIYXJkZXI6IGJvb2xlYW4pOiBCYXJjb2RlSW5mbyB7XG4gICAgICAgIGNvbnN0IGNvdW50ZXIgPSBuZXcgQXJyYXk8bnVtYmVyPihwYXR0ZXJuLmxlbmd0aCk7XG4gICAgICAgIGNvbnN0IGJlc3RNYXRjaDogQmFyY29kZUluZm8gPSB7XG4gICAgICAgICAgICBlcnJvcjogTnVtYmVyLk1BWF9WQUxVRSxcbiAgICAgICAgICAgIGNvZGU6IC0xLFxuICAgICAgICAgICAgc3RhcnQ6IDAsXG4gICAgICAgICAgICBlbmQ6IDBcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgZXBzaWxvbiA9IHRoaXMuQVZFUkFHRV9DT0RFX0VSUk9SO1xuICAgICAgICBsZXQgY291bnRlclBvcyA9IDA7XG5cbiAgICAgICAgaWYgKCFvZmZzZXQpIHtcbiAgICAgICAgICAgIG9mZnNldCA9IHRoaXMuX25leHRTZXQodGhpcy5fcm93KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvdW50ZXIuZmlsbCgwKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gb2Zmc2V0OyBpIDwgdGhpcy5fcm93Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fcm93W2ldIF4gaXNXaGl0ZSkge1xuICAgICAgICAgICAgICAgIGNvdW50ZXJbY291bnRlclBvc10rKztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvdW50ZXJQb3MgPT09IGNvdW50ZXIubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlcnJvciA9IHRoaXMuX21hdGNoUGF0dGVybihjb3VudGVyLCBwYXR0ZXJuKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IgPCBlcHNpbG9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiZXN0TWF0Y2guZXJyb3IgPSBlcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlc3RNYXRjaC5zdGFydCA9IGkgLSBjb3VudGVyLnJlZHVjZSgoc3VtLCB2YWx1ZSkgPT4gc3VtICsgdmFsdWUsIDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmVzdE1hdGNoLmVuZCA9IGk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYmVzdE1hdGNoO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRyeUhhcmRlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb3VudGVyLmxlbmd0aCAtIDI7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ZXJbal0gPSBjb3VudGVyW2ogKyAyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ZXJbY291bnRlci5sZW5ndGggLSAyXSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVyW2NvdW50ZXIubGVuZ3RoIC0gMV0gPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgY291bnRlclBvcy0tO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb3VudGVyUG9zKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvdW50ZXJbY291bnRlclBvc10gPSAxO1xuICAgICAgICAgICAgICAgIGlzV2hpdGUgPSBpc1doaXRlID8gMCA6IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9uZXh0VW5zZXQobGluZTogUmVhZG9ubHlBcnJheTxudW1iZXI+LCBzdGFydD86IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIGZvciAobGV0IGkgPSBzdGFydCB8fCAwOyBpIDwgbGluZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKCFsaW5lW2ldKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxpbmUubGVuZ3RoO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfbmV4dFNldChsaW5lOiBSZWFkb25seUFycmF5PG51bWJlcj4sIHN0YXJ0PzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0IHx8IDA7IGkgPCBsaW5lLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAobGluZVtpXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsaW5lLmxlbmd0aDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX21hdGNoUmFuZ2Uoc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIsIHZhbHVlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0IDwgMCA/IDAgOiBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fcm93W2ldICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX21hdGNoUGF0dGVybihjb3VudGVyOiBSZWFkb25seUFycmF5PG51bWJlcj4sIGNvZGU6IFJlYWRvbmx5QXJyYXk8bnVtYmVyPiwgbWF4U2luZ2xlRXJyb3I/OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICBsZXQgZXJyb3IgPSAwO1xuICAgICAgICBsZXQgc3VtID0gMDtcbiAgICAgICAgbGV0IG1vZHVsbyA9IDA7XG5cbiAgICAgICAgbWF4U2luZ2xlRXJyb3IgPSBtYXhTaW5nbGVFcnJvciB8fCB0aGlzLlNJTkdMRV9DT0RFX0VSUk9SIHx8IDE7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBzdW0gKz0gY291bnRlcltpXTtcbiAgICAgICAgICAgIG1vZHVsbyArPSBjb2RlW2ldO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN1bSA8IG1vZHVsbykge1xuICAgICAgICAgICAgcmV0dXJuIE51bWJlci5NQVhfVkFMVUU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBiYXJXaWR0aCA9IHN1bSAvIG1vZHVsbztcbiAgICAgICAgbWF4U2luZ2xlRXJyb3IgKj0gYmFyV2lkdGg7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBjb3VudCA9IGNvdW50ZXJbaV07XG4gICAgICAgICAgICBjb25zdCBzY2FsZWQgPSBjb2RlW2ldICogYmFyV2lkdGg7XG4gICAgICAgICAgICBjb25zdCBzaW5nbGVFcnJvciA9IE1hdGguYWJzKGNvdW50IC0gc2NhbGVkKSAvIHNjYWxlZDtcblxuICAgICAgICAgICAgaWYgKHNpbmdsZUVycm9yID4gbWF4U2luZ2xlRXJyb3IpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gTnVtYmVyLk1BWF9WQUxVRTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZXJyb3IgKz0gc2luZ2xlRXJyb3I7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZXJyb3IgLyBtb2R1bG87XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9jb3JyZWN0QmFycyhjb3VudGVyOiBBcnJheTxudW1iZXI+LCBjb3JyZWN0aW9uOiBudW1iZXIsIGluZGljZXM6IEFycmF5PG51bWJlcj4pIHtcbiAgICAgICAgbGV0IGxlbmd0aCA9IGluZGljZXMubGVuZ3RoO1xuICAgICAgICBsZXQgdG1wID0gMDtcblxuICAgICAgICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICAgICAgICAgIHRtcCA9IGNvdW50ZXJbaW5kaWNlc1tsZW5ndGhdXSAqICgxIC0gKCgxIC0gY29ycmVjdGlvbikgLyAyKSk7XG4gICAgICAgICAgICBpZiAodG1wID4gMSkge1xuICAgICAgICAgICAgICAgIGNvdW50ZXJbaW5kaWNlc1tsZW5ndGhdXSA9IHRtcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRlY29kZVBhdHRlcm4ocGF0dGVybjogQXJyYXk8bnVtYmVyPik6IEJhcmNvZGUge1xuICAgICAgICB0aGlzLl9yb3cgPSBwYXR0ZXJuO1xuICAgICAgICBsZXQgcmVzdWx0ID0gdGhpcy5kZWNvZGUoKTtcblxuICAgICAgICBpZiAocmVzdWx0ID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLl9yb3cucmV2ZXJzZSgpO1xuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5kZWNvZGUoKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuZGlyZWN0aW9uID0gQmFyY29kZURpcmVjdGlvbi5SZXZlcnNlO1xuICAgICAgICAgICAgICAgIHJlc3VsdC5zdGFydCA9IHRoaXMuX3Jvdy5sZW5ndGggLSByZXN1bHQuc3RhcnQ7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmVuZCA9IHRoaXMuX3Jvdy5sZW5ndGggLSByZXN1bHQuZW5kO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0LmRpcmVjdGlvbiA9IEJhcmNvZGVEaXJlY3Rpb24uRm9yd2FyZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgIHJlc3VsdC5mb3JtYXQgPSB0aGlzLkZPUk1BVDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgX2ZpbGxDb3VudGVycyhvZmZzZXQ6IG51bWJlciwgZW5kOiBudW1iZXIsIGlzV2hpdGU6IDAgfCAxKTogQXJyYXk8bnVtYmVyPiB7XG4gICAgICAgIGNvbnN0IGNvdW50ZXJzID0gbmV3IEFycmF5PG51bWJlcj4oKTtcbiAgICAgICAgbGV0IGNvdW50ZXJQb3MgPSAwO1xuXG4gICAgICAgIGNvdW50ZXJzW2NvdW50ZXJQb3NdID0gMDtcblxuICAgICAgICBmb3IgKGxldCBpID0gb2Zmc2V0OyBpIDwgZW5kOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9yb3dbaV0gXiBpc1doaXRlKSB7XG4gICAgICAgICAgICAgICAgY291bnRlcnNbY291bnRlclBvc10rKztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY291bnRlclBvcysrO1xuICAgICAgICAgICAgICAgIGNvdW50ZXJzW2NvdW50ZXJQb3NdID0gMTtcbiAgICAgICAgICAgICAgICBpc1doaXRlID0gaXNXaGl0ZSA/IDAgOiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvdW50ZXJzO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfdG9Db3VudGVycyhzdGFydDogbnVtYmVyLCBjb3VudGVyczogVWludDE2QXJyYXkpOiBVaW50MTZBcnJheSB7XG4gICAgICAgIGNvbnN0IG51bUNvdW50ZXJzID0gY291bnRlcnMubGVuZ3RoO1xuICAgICAgICBjb25zdCBlbmQgPSB0aGlzLl9yb3cubGVuZ3RoO1xuICAgICAgICBsZXQgaXNXaGl0ZTogMCB8IDEgPSB0aGlzLl9yb3dbc3RhcnRdID8gMCA6IDE7XG4gICAgICAgIGxldCBjb3VudGVyUG9zID0gMDtcblxuICAgICAgICBjb3VudGVycy5maWxsKDApO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fcm93W2ldIF4gaXNXaGl0ZSkge1xuICAgICAgICAgICAgICAgIGNvdW50ZXJzW2NvdW50ZXJQb3NdKys7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvdW50ZXJQb3MrKztcbiAgICAgICAgICAgICAgICBpZiAoY291bnRlclBvcyA9PT0gbnVtQ291bnRlcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnRlcnNbY291bnRlclBvc10gPSAxO1xuICAgICAgICAgICAgICAgICAgICBpc1doaXRlID0gaXNXaGl0ZSA/IDAgOiAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb3VudGVycztcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBCYXJjb2RlLCBCYXJjb2RlSW5mbywgQmFyY29kZVJlYWRlciB9IGZyb20gJy4vYmFyY29kZS1yZWFkZXInO1xuXG5jb25zdCBBTFBIQUJFVEhfU1RSSU5HID0gJzAxMjM0NTY3ODktJDovLitBQkNEJztcbmNvbnN0IEFMUEhBQkVUID0gWy4uLkFMUEhBQkVUSF9TVFJJTkddLm1hcChjaGFyID0+IGNoYXIuY2hhckNvZGVBdCgwKSk7XG4vLyBjb25zdCBBTFBIQUJFVCA9IFs0OCwgNDksIDUwLCA1MSwgNTIsIDUzLCA1NCwgNTUsIDU2LCA1NywgNDUsIDM2LCA1OCwgNDcsIDQ2LCA0MywgNjUsIDY2LCA2NywgNjhdO1xuY29uc3QgQ0hBUkFDVEVSX0VOQ09ESU5HUyA9IFsweDAwMywgMHgwMDYsIDB4MDA5LCAweDA2MCwgMHgwMTIsIDB4MDQyLCAweDAyMSwgMHgwMjQsIDB4MDMwLCAweDA0OCwgMHgwMGMsIDB4MDE4LCAweDA0NSxcbiAgICAweDA1MSwgMHgwNTQsIDB4MDE1LCAweDAxQSwgMHgwMjksIDB4MDBCLCAweDAwRV07XG5jb25zdCBTVEFSVF9FTkQgPSBbMHgwMUEsIDB4MDI5LCAweDAwQiwgMHgwMEVdO1xuY29uc3QgTUlOX0VOQ09ERURfQ0hBUlMgPSA0O1xuY29uc3QgTUFYX0FDQ0VQVEFCTEUgPSAyLjA7XG5jb25zdCBQQURESU5HID0gMS41O1xuXG5pbnRlcmZhY2UgVGhyZXNob2xkIHtcbiAgICBzcGFjZToge1xuICAgICAgICBuYXJyb3c6IHtcbiAgICAgICAgICAgIHNpemU6IG51bWJlcjtcbiAgICAgICAgICAgIGNvdW50czogbnVtYmVyO1xuICAgICAgICAgICAgbWluOiBudW1iZXI7XG4gICAgICAgICAgICBtYXg6IG51bWJlcjtcbiAgICAgICAgfTtcbiAgICAgICAgd2lkZToge1xuICAgICAgICAgICAgc2l6ZTogbnVtYmVyO1xuICAgICAgICAgICAgY291bnRzOiBudW1iZXI7XG4gICAgICAgICAgICBtaW46IG51bWJlcjtcbiAgICAgICAgICAgIG1heDogbnVtYmVyO1xuICAgICAgICB9O1xuICAgIH07XG4gICAgYmFyOiB7XG4gICAgICAgIG5hcnJvdzoge1xuICAgICAgICAgICAgc2l6ZTogbnVtYmVyO1xuICAgICAgICAgICAgY291bnRzOiBudW1iZXI7XG4gICAgICAgICAgICBtaW46IG51bWJlcjtcbiAgICAgICAgICAgIG1heDogbnVtYmVyO1xuICAgICAgICB9O1xuICAgICAgICB3aWRlOiB7XG4gICAgICAgICAgICBzaXplOiBudW1iZXI7XG4gICAgICAgICAgICBjb3VudHM6IG51bWJlcjtcbiAgICAgICAgICAgIG1pbjogbnVtYmVyO1xuICAgICAgICAgICAgbWF4OiBudW1iZXI7XG4gICAgICAgIH07XG4gICAgfTtcbn1cblxuZXhwb3J0IGNsYXNzIENvZGFiYXJSZWFkZXIgZXh0ZW5kcyBCYXJjb2RlUmVhZGVyIHtcbiAgICBwcml2YXRlIF9jb3VudGVyczogQXJyYXk8bnVtYmVyPjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuX2Zvcm1hdCA9ICdjb2RhYmFyJztcbiAgICAgICAgdGhpcy5fY291bnRlcnMgPSBbXTtcbiAgICB9XG5cbiAgICBkZWNvZGUoKTogQmFyY29kZSB7XG4gICAgICAgIHRoaXMuX2NvdW50ZXJzID0gdGhpcy5fZmlsbENvdW50ZXJzKHRoaXMuX25leHRVbnNldCh0aGlzLl9yb3cpLCB0aGlzLl9yb3cubGVuZ3RoLCAxKTtcblxuICAgICAgICBjb25zdCBzdGFydCA9IHRoaXMuX2ZpbmRTdGFydCgpO1xuICAgICAgICBpZiAoIXN0YXJ0KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBBcnJheTxzdHJpbmc+KCk7XG4gICAgICAgIGxldCBuZXh0U3RhcnQgPSBzdGFydC5zdGFydENvdW50ZXI7XG4gICAgICAgIGxldCBwYXR0ZXJuOiBudW1iZXI7XG5cbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgcGF0dGVybiA9IHRoaXMuX3RvUGF0dGVybihuZXh0U3RhcnQpO1xuICAgICAgICAgICAgaWYgKHBhdHRlcm4gPCAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBkZWNvZGVkQ2hhciA9IHRoaXMuX3BhdHRlcm5Ub0NoYXIocGF0dGVybik7XG4gICAgICAgICAgICBpZiAoZGVjb2RlZENoYXIgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGRlY29kZWRDaGFyKTtcbiAgICAgICAgICAgIG5leHRTdGFydCArPSA4O1xuICAgICAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGggPiAxICYmIFNUQVJUX0VORC5zb21lKGNvZGUgPT4gY29kZSA9PT0gcGF0dGVybikpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSB3aGlsZSAobmV4dFN0YXJ0IDwgdGhpcy5fY291bnRlcnMubGVuZ3RoKTtcblxuICAgICAgICAvLyB2ZXJpZnkgZW5kXG4gICAgICAgIGlmICgocmVzdWx0Lmxlbmd0aCAtIDIpIDwgTUlOX0VOQ09ERURfQ0hBUlMgfHwgIVNUQVJUX0VORC5zb21lKGNvZGUgPT4gY29kZSA9PT0gcGF0dGVybikpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdmVyaWZ5IGVuZCB3aGl0ZSBzcGFjZVxuICAgICAgICBpZiAoIXRoaXMuX3ZlcmlmeVdoaXRlc3BhY2Uoc3RhcnQuc3RhcnRDb3VudGVyLCBuZXh0U3RhcnQgLSA4KSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuX3ZhbGlkYXRlUmVzdWx0KHJlc3VsdCwgc3RhcnQuc3RhcnRDb3VudGVyKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBuZXh0U3RhcnQgPSBuZXh0U3RhcnQgPiB0aGlzLl9jb3VudGVycy5sZW5ndGggPyB0aGlzLl9jb3VudGVycy5sZW5ndGggOiBuZXh0U3RhcnQ7XG4gICAgICAgIGNvbnN0IGVuZCA9IHN0YXJ0LnN0YXJ0ICsgdGhpcy5fc3VtQ291bnRlcnMoc3RhcnQuc3RhcnRDb3VudGVyLCBuZXh0U3RhcnQgLSA4KTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29kZTogcmVzdWx0LmpvaW4oJycpLFxuICAgICAgICAgICAgc3RhcnQ6IHN0YXJ0LnN0YXJ0LFxuICAgICAgICAgICAgZW5kLFxuICAgICAgICAgICAgc3RhcnRJbmZvOiBzdGFydCxcbiAgICAgICAgICAgIGRlY29kZWRDb2RlczogcmVzdWx0XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF92ZXJpZnlXaGl0ZXNwYWNlKHN0YXJ0Q291bnRlcjogbnVtYmVyLCBlbmRDb3VudGVyOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKChzdGFydENvdW50ZXIgLSAxIDw9IDApXG4gICAgICAgICAgICB8fCB0aGlzLl9jb3VudGVyc1tzdGFydENvdW50ZXIgLSAxXSA+PSAodGhpcy5fY2FsY3VsYXRlUGF0dGVybkxlbmd0aChzdGFydENvdW50ZXIpIC8gMi4wKSkge1xuICAgICAgICAgICAgaWYgKChlbmRDb3VudGVyICsgOCA+PSB0aGlzLl9jb3VudGVycy5sZW5ndGgpXG4gICAgICAgICAgICAgICAgfHwgdGhpcy5fY291bnRlcnNbZW5kQ291bnRlciArIDddID49ICh0aGlzLl9jYWxjdWxhdGVQYXR0ZXJuTGVuZ3RoKGVuZENvdW50ZXIpIC8gMi4wKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2NhbGN1bGF0ZVBhdHRlcm5MZW5ndGgob2Zmc2V0OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICBsZXQgc3VtID0gMDtcblxuICAgICAgICBmb3IgKGxldCBpID0gb2Zmc2V0OyBpIDwgb2Zmc2V0ICsgNzsgaSsrKSB7XG4gICAgICAgICAgICBzdW0gKz0gdGhpcy5fY291bnRlcnNbaV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VtO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3RocmVzaG9sZFJlc3VsdFBhdHRlcm4ocmVzdWx0OiBSZWFkb25seUFycmF5PHN0cmluZz4sIHN0YXJ0Q291bnRlcjogbnVtYmVyKTogVGhyZXNob2xkIHtcbiAgICAgICAgY29uc3QgY2F0ZWdvcml6YXRpb246IFRocmVzaG9sZCA9IHtcbiAgICAgICAgICAgIHNwYWNlOiB7XG4gICAgICAgICAgICAgICAgbmFycm93OiB7IHNpemU6IDAsIGNvdW50czogMCwgbWluOiAwLCBtYXg6IE51bWJlci5NQVhfVkFMVUUgfSxcbiAgICAgICAgICAgICAgICB3aWRlOiB7IHNpemU6IDAsIGNvdW50czogMCwgbWluOiAwLCBtYXg6IE51bWJlci5NQVhfVkFMVUUgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJhcjoge1xuICAgICAgICAgICAgICAgIG5hcnJvdzogeyBzaXplOiAwLCBjb3VudHM6IDAsIG1pbjogMCwgbWF4OiBOdW1iZXIuTUFYX1ZBTFVFIH0sXG4gICAgICAgICAgICAgICAgd2lkZTogeyBzaXplOiAwLCBjb3VudHM6IDAsIG1pbjogMCwgbWF4OiBOdW1iZXIuTUFYX1ZBTFVFIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgbGV0IHBvcyA9IHN0YXJ0Q291bnRlcjtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHBhdHRlcm4gPSB0aGlzLl9jaGFyVG9QYXR0ZXJuKHJlc3VsdFtpXSk7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGogPSA2OyBqID49IDA7IGotLSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGtpbmQgPSAoaiAmIDEpID09PSAyID8gY2F0ZWdvcml6YXRpb24uYmFyIDogY2F0ZWdvcml6YXRpb24uc3BhY2U7XG4gICAgICAgICAgICAgICAgY29uc3QgY2F0ID0gKHBhdHRlcm4gJiAxKSA9PT0gMSA/IGtpbmQud2lkZSA6IGtpbmQubmFycm93O1xuICAgICAgICAgICAgICAgIGNhdC5zaXplICs9IHRoaXMuX2NvdW50ZXJzW3BvcyArIGpdO1xuICAgICAgICAgICAgICAgIGNhdC5jb3VudHMrKztcbiAgICAgICAgICAgICAgICBwYXR0ZXJuID4+PSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcG9zICs9IDg7XG4gICAgICAgIH1cblxuICAgICAgICBbJ3NwYWNlJywgJ2JhciddLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGtpbmQgPSBjYXRlZ29yaXphdGlvbltrZXldO1xuICAgICAgICAgICAga2luZC53aWRlLm1pbiA9IE1hdGguZmxvb3IoKGtpbmQubmFycm93LnNpemUgLyBraW5kLm5hcnJvdy5jb3VudHMgKyBraW5kLndpZGUuc2l6ZSAvIGtpbmQud2lkZS5jb3VudHMpIC8gMik7XG4gICAgICAgICAgICBraW5kLm5hcnJvdy5tYXggPSBNYXRoLmNlaWwoa2luZC53aWRlLm1pbik7XG4gICAgICAgICAgICBraW5kLndpZGUubWF4ID0gTWF0aC5jZWlsKChraW5kLndpZGUuc2l6ZSAqIE1BWF9BQ0NFUFRBQkxFICsgUEFERElORykgLyBraW5kLndpZGUuY291bnRzKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGNhdGVnb3JpemF0aW9uO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2NoYXJUb1BhdHRlcm4oY2hhcjogc3RyaW5nKTogbnVtYmVyIHtcbiAgICAgICAgY29uc3QgY2hhckNvZGUgPSBjaGFyLmNoYXJDb2RlQXQoMCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBBTFBIQUJFVC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKEFMUEhBQkVUW2ldID09PSBjaGFyQ29kZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBDSEFSQUNURVJfRU5DT0RJTkdTW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIDB4MDtcbiAgICB9XG5cbiAgICBwcml2YXRlIF92YWxpZGF0ZVJlc3VsdChyZXN1bHQ6IFJlYWRvbmx5QXJyYXk8c3RyaW5nPiwgc3RhcnRDb3VudGVyOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgdGhyZXNob2xkID0gdGhpcy5fdGhyZXNob2xkUmVzdWx0UGF0dGVybihyZXN1bHQsIHN0YXJ0Q291bnRlcik7XG4gICAgICAgIGxldCBwb3MgPSBzdGFydENvdW50ZXI7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBwYXR0ZXJuID0gdGhpcy5fY2hhclRvUGF0dGVybihyZXN1bHRbaV0pO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gNjsgaiA+PSAwOyBqLS0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBraW5kID0gKGogJiAxKSA9PT0gMCA/IHRocmVzaG9sZC5iYXIgOiB0aHJlc2hvbGQuc3BhY2U7XG4gICAgICAgICAgICAgICAgY29uc3QgY2F0ID0gKHBhdHRlcm4gJiAxKSA9PT0gMSA/IGtpbmQud2lkZSA6IGtpbmQubmFycm93O1xuICAgICAgICAgICAgICAgIGNvbnN0IHNpemUgPSB0aGlzLl9jb3VudGVyc1twb3MgKyBqXTtcbiAgICAgICAgICAgICAgICBpZiAoc2l6ZSA8IGNhdC5taW4gfHwgc2l6ZSA+IGNhdC5tYXgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXR0ZXJuID4+PSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcG9zICs9IDg7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9wYXR0ZXJuVG9DaGFyKHBhdHRlcm46IG51bWJlcik6IHN0cmluZyB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQ0hBUkFDVEVSX0VOQ09ESU5HUy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKENIQVJBQ1RFUl9FTkNPRElOR1NbaV0gPT09IHBhdHRlcm4pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShBTFBIQUJFVFtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9jb21wdXRlQWx0ZXJuYXRpbmdUaHJlc2hvbGQob2Zmc2V0OiBudW1iZXIsIGVuZDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgbGV0IG1pbiA9IE51bWJlci5NQVhfVkFMVUU7XG4gICAgICAgIGxldCBtYXggPSAwO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSBvZmZzZXQ7IGkgPCBlbmQ7IGkgKz0gMikge1xuICAgICAgICAgICAgY29uc3QgY291bnRlciA9IHRoaXMuX2NvdW50ZXJzW2ldO1xuICAgICAgICAgICAgaWYgKGNvdW50ZXIgPiBtYXgpIHtcbiAgICAgICAgICAgICAgICBtYXggPSBjb3VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvdW50ZXIgPCBtaW4pIHtcbiAgICAgICAgICAgICAgICBtaW4gPSBjb3VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICgobWluICsgbWF4KSAvIDIuMCkgfCAwO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3RvUGF0dGVybihvZmZzZXQ6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIGNvbnN0IG51bUNvdW50ZXJzID0gNztcbiAgICAgICAgY29uc3QgZW5kID0gb2Zmc2V0ICsgbnVtQ291bnRlcnM7XG5cbiAgICAgICAgaWYgKGVuZCA+IHRoaXMuX2NvdW50ZXJzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYmFyVGhyZXNob2xkID0gdGhpcy5fY29tcHV0ZUFsdGVybmF0aW5nVGhyZXNob2xkKG9mZnNldCwgZW5kKTtcbiAgICAgICAgY29uc3Qgc3BhY2VUaHJlc2hvbGQgPSB0aGlzLl9jb21wdXRlQWx0ZXJuYXRpbmdUaHJlc2hvbGQob2Zmc2V0ICsgMSwgZW5kKTtcbiAgICAgICAgbGV0IGJpdG1hc2sgPSAxIDw8IChudW1Db3VudGVycyAtIDEpO1xuICAgICAgICBsZXQgcGF0dGVybiA9IDA7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1Db3VudGVyczsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCB0aHJlc2hvbGQgPSAoaSAmIDEpID09PSAwID8gYmFyVGhyZXNob2xkIDogc3BhY2VUaHJlc2hvbGQ7XG4gICAgICAgICAgICBpZiAodGhpcy5fY291bnRlcnNbb2Zmc2V0ICsgaV0gPiB0aHJlc2hvbGQpIHtcbiAgICAgICAgICAgICAgICBwYXR0ZXJuIHw9IGJpdG1hc2s7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBiaXRtYXNrID4+PSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhdHRlcm47XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfc3VtQ291bnRlcnMoc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICBsZXQgc3VtID0gMDtcblxuICAgICAgICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xuICAgICAgICAgICAgc3VtICs9IHRoaXMuX2NvdW50ZXJzW2ldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1bTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2ZpbmRTdGFydCgpOiBCYXJjb2RlSW5mbyB7XG4gICAgICAgIGxldCBzdGFydCA9IHRoaXMuX25leHRVbnNldCh0aGlzLl9yb3cpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdGhpcy5fY291bnRlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHBhdHRlcm4gPSB0aGlzLl90b1BhdHRlcm4oaSk7XG4gICAgICAgICAgICBpZiAocGF0dGVybiAhPT0gLTEgJiYgU1RBUlRfRU5ELnNvbWUoY29kZSA9PiBjb2RlID09PSBwYXR0ZXJuKSkge1xuICAgICAgICAgICAgICAgIC8vIFRPRE86IExvb2sgZm9yIHdoaXRlc3BhY2UgYWhlYWRcbiAgICAgICAgICAgICAgICBzdGFydCArPSB0aGlzLl9zdW1Db3VudGVycygwLCBpKTtcbiAgICAgICAgICAgICAgICBjb25zdCBlbmQgPSBzdGFydCArIHRoaXMuX3N1bUNvdW50ZXJzKGksIGkgKyA4KTtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBzdGFydCxcbiAgICAgICAgICAgICAgICAgICAgZW5kLFxuICAgICAgICAgICAgICAgICAgICBzdGFydENvdW50ZXI6IGksXG4gICAgICAgICAgICAgICAgICAgIGVuZENvdW50ZXI6IGkgKyA4XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEJhcmNvZGUsIEJhcmNvZGVDb3JyZWN0aW9uLCBCYXJjb2RlSW5mbywgQmFyY29kZVJlYWRlciB9IGZyb20gJy4vYmFyY29kZS1yZWFkZXInO1xuXG5jb25zdCBDT0RFX1NISUZUID0gOTg7XG5jb25zdCBDT0RFX0MgPSA5OTtcbmNvbnN0IENPREVfQiA9IDEwMDtcbmNvbnN0IENPREVfQSA9IDEwMTtcbmNvbnN0IFNUQVJUX0NPREVfQSA9IDEwMztcbmNvbnN0IFNUQVJUX0NPREVfQiA9IDEwNDtcbmNvbnN0IFNUQVJUX0NPREVfQyA9IDEwNTtcbmNvbnN0IFNUT1BfQ09ERSA9IDEwNjtcbmNvbnN0IENPREVfUEFUVEVSTiA9IFtcbiAgICBbMiwgMSwgMiwgMiwgMiwgMl0sXG4gICAgWzIsIDIsIDIsIDEsIDIsIDJdLFxuICAgIFsyLCAyLCAyLCAyLCAyLCAxXSxcbiAgICBbMSwgMiwgMSwgMiwgMiwgM10sXG4gICAgWzEsIDIsIDEsIDMsIDIsIDJdLFxuICAgIFsxLCAzLCAxLCAyLCAyLCAyXSxcbiAgICBbMSwgMiwgMiwgMiwgMSwgM10sXG4gICAgWzEsIDIsIDIsIDMsIDEsIDJdLFxuICAgIFsxLCAzLCAyLCAyLCAxLCAyXSxcbiAgICBbMiwgMiwgMSwgMiwgMSwgM10sXG4gICAgWzIsIDIsIDEsIDMsIDEsIDJdLFxuICAgIFsyLCAzLCAxLCAyLCAxLCAyXSxcbiAgICBbMSwgMSwgMiwgMiwgMywgMl0sXG4gICAgWzEsIDIsIDIsIDEsIDMsIDJdLFxuICAgIFsxLCAyLCAyLCAyLCAzLCAxXSxcbiAgICBbMSwgMSwgMywgMiwgMiwgMl0sXG4gICAgWzEsIDIsIDMsIDEsIDIsIDJdLFxuICAgIFsxLCAyLCAzLCAyLCAyLCAxXSxcbiAgICBbMiwgMiwgMywgMiwgMSwgMV0sXG4gICAgWzIsIDIsIDEsIDEsIDMsIDJdLFxuICAgIFsyLCAyLCAxLCAyLCAzLCAxXSxcbiAgICBbMiwgMSwgMywgMiwgMSwgMl0sXG4gICAgWzIsIDIsIDMsIDEsIDEsIDJdLFxuICAgIFszLCAxLCAyLCAxLCAzLCAxXSxcbiAgICBbMywgMSwgMSwgMiwgMiwgMl0sXG4gICAgWzMsIDIsIDEsIDEsIDIsIDJdLFxuICAgIFszLCAyLCAxLCAyLCAyLCAxXSxcbiAgICBbMywgMSwgMiwgMiwgMSwgMl0sXG4gICAgWzMsIDIsIDIsIDEsIDEsIDJdLFxuICAgIFszLCAyLCAyLCAyLCAxLCAxXSxcbiAgICBbMiwgMSwgMiwgMSwgMiwgM10sXG4gICAgWzIsIDEsIDIsIDMsIDIsIDFdLFxuICAgIFsyLCAzLCAyLCAxLCAyLCAxXSxcbiAgICBbMSwgMSwgMSwgMywgMiwgM10sXG4gICAgWzEsIDMsIDEsIDEsIDIsIDNdLFxuICAgIFsxLCAzLCAxLCAzLCAyLCAxXSxcbiAgICBbMSwgMSwgMiwgMywgMSwgM10sXG4gICAgWzEsIDMsIDIsIDEsIDEsIDNdLFxuICAgIFsxLCAzLCAyLCAzLCAxLCAxXSxcbiAgICBbMiwgMSwgMSwgMywgMSwgM10sXG4gICAgWzIsIDMsIDEsIDEsIDEsIDNdLFxuICAgIFsyLCAzLCAxLCAzLCAxLCAxXSxcbiAgICBbMSwgMSwgMiwgMSwgMywgM10sXG4gICAgWzEsIDEsIDIsIDMsIDMsIDFdLFxuICAgIFsxLCAzLCAyLCAxLCAzLCAxXSxcbiAgICBbMSwgMSwgMywgMSwgMiwgM10sXG4gICAgWzEsIDEsIDMsIDMsIDIsIDFdLFxuICAgIFsxLCAzLCAzLCAxLCAyLCAxXSxcbiAgICBbMywgMSwgMywgMSwgMiwgMV0sXG4gICAgWzIsIDEsIDEsIDMsIDMsIDFdLFxuICAgIFsyLCAzLCAxLCAxLCAzLCAxXSxcbiAgICBbMiwgMSwgMywgMSwgMSwgM10sXG4gICAgWzIsIDEsIDMsIDMsIDEsIDFdLFxuICAgIFsyLCAxLCAzLCAxLCAzLCAxXSxcbiAgICBbMywgMSwgMSwgMSwgMiwgM10sXG4gICAgWzMsIDEsIDEsIDMsIDIsIDFdLFxuICAgIFszLCAzLCAxLCAxLCAyLCAxXSxcbiAgICBbMywgMSwgMiwgMSwgMSwgM10sXG4gICAgWzMsIDEsIDIsIDMsIDEsIDFdLFxuICAgIFszLCAzLCAyLCAxLCAxLCAxXSxcbiAgICBbMywgMSwgNCwgMSwgMSwgMV0sXG4gICAgWzIsIDIsIDEsIDQsIDEsIDFdLFxuICAgIFs0LCAzLCAxLCAxLCAxLCAxXSxcbiAgICBbMSwgMSwgMSwgMiwgMiwgNF0sXG4gICAgWzEsIDEsIDEsIDQsIDIsIDJdLFxuICAgIFsxLCAyLCAxLCAxLCAyLCA0XSxcbiAgICBbMSwgMiwgMSwgNCwgMiwgMV0sXG4gICAgWzEsIDQsIDEsIDEsIDIsIDJdLFxuICAgIFsxLCA0LCAxLCAyLCAyLCAxXSxcbiAgICBbMSwgMSwgMiwgMiwgMSwgNF0sXG4gICAgWzEsIDEsIDIsIDQsIDEsIDJdLFxuICAgIFsxLCAyLCAyLCAxLCAxLCA0XSxcbiAgICBbMSwgMiwgMiwgNCwgMSwgMV0sXG4gICAgWzEsIDQsIDIsIDEsIDEsIDJdLFxuICAgIFsxLCA0LCAyLCAyLCAxLCAxXSxcbiAgICBbMiwgNCwgMSwgMiwgMSwgMV0sXG4gICAgWzIsIDIsIDEsIDEsIDEsIDRdLFxuICAgIFs0LCAxLCAzLCAxLCAxLCAxXSxcbiAgICBbMiwgNCwgMSwgMSwgMSwgMl0sXG4gICAgWzEsIDMsIDQsIDEsIDEsIDFdLFxuICAgIFsxLCAxLCAxLCAyLCA0LCAyXSxcbiAgICBbMSwgMiwgMSwgMSwgNCwgMl0sXG4gICAgWzEsIDIsIDEsIDIsIDQsIDFdLFxuICAgIFsxLCAxLCA0LCAyLCAxLCAyXSxcbiAgICBbMSwgMiwgNCwgMSwgMSwgMl0sXG4gICAgWzEsIDIsIDQsIDIsIDEsIDFdLFxuICAgIFs0LCAxLCAxLCAyLCAxLCAyXSxcbiAgICBbNCwgMiwgMSwgMSwgMSwgMl0sXG4gICAgWzQsIDIsIDEsIDIsIDEsIDFdLFxuICAgIFsyLCAxLCAyLCAxLCA0LCAxXSxcbiAgICBbMiwgMSwgNCwgMSwgMiwgMV0sXG4gICAgWzQsIDEsIDIsIDEsIDIsIDFdLFxuICAgIFsxLCAxLCAxLCAxLCA0LCAzXSxcbiAgICBbMSwgMSwgMSwgMywgNCwgMV0sXG4gICAgWzEsIDMsIDEsIDEsIDQsIDFdLFxuICAgIFsxLCAxLCA0LCAxLCAxLCAzXSxcbiAgICBbMSwgMSwgNCwgMywgMSwgMV0sXG4gICAgWzQsIDEsIDEsIDEsIDEsIDNdLFxuICAgIFs0LCAxLCAxLCAzLCAxLCAxXSxcbiAgICBbMSwgMSwgMywgMSwgNCwgMV0sXG4gICAgWzEsIDEsIDQsIDEsIDMsIDFdLFxuICAgIFszLCAxLCAxLCAxLCA0LCAxXSxcbiAgICBbNCwgMSwgMSwgMSwgMywgMV0sXG4gICAgWzIsIDEsIDEsIDQsIDEsIDJdLFxuICAgIFsyLCAxLCAxLCAyLCAxLCA0XSxcbiAgICBbMiwgMSwgMSwgMiwgMywgMl0sXG4gICAgWzIsIDMsIDMsIDEsIDEsIDEsIDJdXG5dO1xuY29uc3QgTU9EVUxFX0lORElDRVMgPSB7IGJhcjogWzAsIDIsIDRdLCBzcGFjZTogWzEsIDMsIDVdIH07XG5cbmV4cG9ydCBjbGFzcyBDb2RlMTI4UmVhZGVyIGV4dGVuZHMgQmFyY29kZVJlYWRlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5fZm9ybWF0ID0gJ2NvZGVfMTI4JztcbiAgICAgICAgdGhpcy5fc2luZ2xlQ29kZUVycm9yID0gMC42NDtcbiAgICAgICAgdGhpcy5fYXZlcmFnZUNvZGVFcnJvciA9IDAuMzA7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9kZWNvZGVDb2RlKHN0YXJ0OiBudW1iZXIsIGNvcnJlY3Rpb246IEJhcmNvZGVDb3JyZWN0aW9uKTogQmFyY29kZUluZm8ge1xuICAgICAgICBjb25zdCBjb3VudGVyID0gWzAsIDAsIDAsIDAsIDAsIDBdO1xuICAgICAgICBjb25zdCBvZmZzZXQgPSBzdGFydDtcbiAgICAgICAgY29uc3QgYmVzdE1hdGNoOiBCYXJjb2RlSW5mbyA9IHtcbiAgICAgICAgICAgIGVycm9yOiBOdW1iZXIuTUFYX1ZBTFVFLFxuICAgICAgICAgICAgY29kZTogLTEsXG4gICAgICAgICAgICBzdGFydDogc3RhcnQsXG4gICAgICAgICAgICBlbmQ6IHN0YXJ0LFxuICAgICAgICAgICAgY29ycmVjdGlvbjoge1xuICAgICAgICAgICAgICAgIGJhcjogMSxcbiAgICAgICAgICAgICAgICBzcGFjZTogMVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBlcHNpbG9uID0gdGhpcy5BVkVSQUdFX0NPREVfRVJST1I7XG4gICAgICAgIGxldCBpc1doaXRlOiAwIHwgMSA9IHRoaXMuX3Jvd1tvZmZzZXRdID8gMCA6IDE7XG4gICAgICAgIGxldCBjb3VudGVyUG9zID0gMDtcblxuICAgICAgICBmb3IgKGxldCBpID0gb2Zmc2V0OyBpIDwgdGhpcy5fcm93Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fcm93W2ldIF4gaXNXaGl0ZSkge1xuICAgICAgICAgICAgICAgIGNvdW50ZXJbY291bnRlclBvc10rKztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvdW50ZXJQb3MgPT09IGNvdW50ZXIubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29ycmVjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY29ycmVjdChjb3VudGVyLCBjb3JyZWN0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGNvZGUgPSAwOyBjb2RlIDwgQ09ERV9QQVRURVJOLmxlbmd0aDsgY29kZSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlcnJvciA9IHRoaXMuX21hdGNoUGF0dGVybihjb3VudGVyLCBDT0RFX1BBVFRFUk5bY29kZV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yIDwgYmVzdE1hdGNoLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVzdE1hdGNoLmNvZGUgPSBjb2RlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlc3RNYXRjaC5lcnJvciA9IGVycm9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYmVzdE1hdGNoLmVuZCA9IGk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGJlc3RNYXRjaC5jb2RlID09PSAtMSB8fCBiZXN0TWF0Y2guZXJyb3IgPiBlcHNpbG9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGV4cGVjdGVkID0gQ09ERV9QQVRURVJOW2Jlc3RNYXRjaC5jb2RlXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV4cGVjdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiZXN0TWF0Y2guY29ycmVjdGlvbi5iYXIgPSB0aGlzLl9jYWxjdWxhdGVDb3JyZWN0aW9uKGV4cGVjdGVkLCBjb3VudGVyLCBNT0RVTEVfSU5ESUNFUy5iYXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmVzdE1hdGNoLmNvcnJlY3Rpb24uc3BhY2UgPSB0aGlzLl9jYWxjdWxhdGVDb3JyZWN0aW9uKGV4cGVjdGVkLCBjb3VudGVyLCBNT0RVTEVfSU5ESUNFUy5zcGFjZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYmVzdE1hdGNoO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXJQb3MrKztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb3VudGVyW2NvdW50ZXJQb3NdID0gMTtcbiAgICAgICAgICAgICAgICBpc1doaXRlID0gaXNXaGl0ZSA/IDAgOiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfY29ycmVjdChjb3VudGVyOiBBcnJheTxudW1iZXI+LCBjb3JyZWN0aW9uOiBCYXJjb2RlQ29ycmVjdGlvbik6IHZvaWQge1xuICAgICAgICB0aGlzLl9jb3JyZWN0QmFycyhjb3VudGVyLCBjb3JyZWN0aW9uLmJhciwgTU9EVUxFX0lORElDRVMuYmFyKTtcbiAgICAgICAgdGhpcy5fY29ycmVjdEJhcnMoY291bnRlciwgY29ycmVjdGlvbi5zcGFjZSwgTU9EVUxFX0lORElDRVMuc3BhY2UpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZmluZFN0YXJ0KCkge1xuICAgICAgICBjb25zdCBjb3VudGVyID0gWzAsIDAsIDAsIDAsIDAsIDBdO1xuICAgICAgICBjb25zdCBvZmZzZXQgPSB0aGlzLl9uZXh0U2V0KHRoaXMuX3Jvdyk7XG4gICAgICAgIGNvbnN0IGJlc3RNYXRjaCA9IHtcbiAgICAgICAgICAgIGVycm9yOiBOdW1iZXIuTUFYX1ZBTFVFLFxuICAgICAgICAgICAgY29kZTogLTEsXG4gICAgICAgICAgICBzdGFydDogMCxcbiAgICAgICAgICAgIGVuZDogMCxcbiAgICAgICAgICAgIGNvcnJlY3Rpb246IHtcbiAgICAgICAgICAgICAgICBiYXI6IDEsXG4gICAgICAgICAgICAgICAgc3BhY2U6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgZXBzaWxvbiA9IHRoaXMuQVZFUkFHRV9DT0RFX0VSUk9SO1xuICAgICAgICBsZXQgaXNXaGl0ZTogMCB8IDEgPSAwO1xuICAgICAgICBsZXQgY291bnRlclBvcyA9IDA7XG4gICAgICAgIGxldCBzdW06IG51bWJlcjtcblxuICAgICAgICBmb3IgKGxldCBpID0gb2Zmc2V0OyBpIDwgdGhpcy5fcm93Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fcm93W2ldIF4gaXNXaGl0ZSkge1xuICAgICAgICAgICAgICAgIGNvdW50ZXJbY291bnRlclBvc10rKztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvdW50ZXJQb3MgPT09IGNvdW50ZXIubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICBzdW0gPSAwO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvdW50ZXIubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1bSArPSBjb3VudGVyW2pdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGNvZGUgPSBTVEFSVF9DT0RFX0E7IGNvZGUgPD0gU1RBUlRfQ09ERV9DOyBjb2RlKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yID0gdGhpcy5fbWF0Y2hQYXR0ZXJuKGNvdW50ZXIsIENPREVfUEFUVEVSTltjb2RlXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IgPCBiZXN0TWF0Y2guZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZXN0TWF0Y2guY29kZSA9IGNvZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVzdE1hdGNoLmVycm9yID0gZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGJlc3RNYXRjaC5lcnJvciA8IGVwc2lsb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlc3RNYXRjaC5zdGFydCA9IGkgLSBzdW07XG4gICAgICAgICAgICAgICAgICAgICAgICBiZXN0TWF0Y2guZW5kID0gaTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlc3RNYXRjaC5jb3JyZWN0aW9uLmJhciA9IHRoaXMuX2NhbGN1bGF0ZUNvcnJlY3Rpb24oQ09ERV9QQVRURVJOW2Jlc3RNYXRjaC5jb2RlXSwgY291bnRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNT0RVTEVfSU5ESUNFUy5iYXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmVzdE1hdGNoLmNvcnJlY3Rpb24uc3BhY2UgPSB0aGlzLl9jYWxjdWxhdGVDb3JyZWN0aW9uKENPREVfUEFUVEVSTltiZXN0TWF0Y2guY29kZV0sIGNvdW50ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTU9EVUxFX0lORElDRVMuc3BhY2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJlc3RNYXRjaDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgNDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVyW2pdID0gY291bnRlcltqICsgMl07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY291bnRlcls0XSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXJbNV0gPSAwO1xuICAgICAgICAgICAgICAgICAgICBjb3VudGVyUG9zLS07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnRlclBvcysrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb3VudGVyW2NvdW50ZXJQb3NdID0gMTtcbiAgICAgICAgICAgICAgICBpc1doaXRlID0gaXNXaGl0ZSA/IDAgOiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgZGVjb2RlKCk6IEJhcmNvZGUge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgQXJyYXk8c3RyaW5nIHwgbnVtYmVyPigpO1xuICAgICAgICBjb25zdCBzdGFydEluZm8gPSB0aGlzLl9maW5kU3RhcnQoKTtcbiAgICAgICAgbGV0IGNvZGU6IEJhcmNvZGVJbmZvID0gbnVsbDtcbiAgICAgICAgbGV0IGRvbmUgPSBmYWxzZTtcbiAgICAgICAgbGV0IG11bHRpcGxpZXIgPSAwO1xuICAgICAgICBsZXQgY2hlY2tzdW0gPSAwO1xuICAgICAgICBsZXQgY29kZXNldDogbnVtYmVyO1xuICAgICAgICBsZXQgcmF3UmVzdWx0ID0gbmV3IEFycmF5PG51bWJlcj4oKTtcbiAgICAgICAgbGV0IGRlY29kZWRDb2RlcyA9IG5ldyBBcnJheTxCYXJjb2RlSW5mbz4oKTtcbiAgICAgICAgbGV0IHNoaWZ0TmV4dCA9IGZhbHNlO1xuICAgICAgICBsZXQgdW5zaGlmdDogYm9vbGVhbjtcbiAgICAgICAgbGV0IHJlbW92ZUxhc3RDaGFyYWN0ZXIgPSB0cnVlO1xuXG4gICAgICAgIGlmIChzdGFydEluZm8gPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvZGUgPSB7XG4gICAgICAgICAgICBjb2RlOiBzdGFydEluZm8uY29kZSxcbiAgICAgICAgICAgIHN0YXJ0OiBzdGFydEluZm8uc3RhcnQsXG4gICAgICAgICAgICBlbmQ6IHN0YXJ0SW5mby5lbmQsXG4gICAgICAgICAgICBjb3JyZWN0aW9uOiB7XG4gICAgICAgICAgICAgICAgYmFyOiBzdGFydEluZm8uY29ycmVjdGlvbi5iYXIsXG4gICAgICAgICAgICAgICAgc3BhY2U6IHN0YXJ0SW5mby5jb3JyZWN0aW9uLnNwYWNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGRlY29kZWRDb2Rlcy5wdXNoKGNvZGUpO1xuICAgICAgICBjaGVja3N1bSA9IGNvZGUuY29kZTtcblxuICAgICAgICBzd2l0Y2ggKGNvZGUuY29kZSkge1xuICAgICAgICAgICAgY2FzZSBTVEFSVF9DT0RFX0E6XG4gICAgICAgICAgICAgICAgY29kZXNldCA9IENPREVfQTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgU1RBUlRfQ09ERV9COlxuICAgICAgICAgICAgICAgIGNvZGVzZXQgPSBDT0RFX0I7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFNUQVJUX0NPREVfQzpcbiAgICAgICAgICAgICAgICBjb2Rlc2V0ID0gQ09ERV9DO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHdoaWxlICghZG9uZSkge1xuICAgICAgICAgICAgdW5zaGlmdCA9IHNoaWZ0TmV4dDtcbiAgICAgICAgICAgIHNoaWZ0TmV4dCA9IGZhbHNlO1xuICAgICAgICAgICAgY29kZSA9IHRoaXMuX2RlY29kZUNvZGUoY29kZS5lbmQsIGNvZGUuY29ycmVjdGlvbik7XG4gICAgICAgICAgICBpZiAoY29kZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmIChjb2RlLmNvZGUgIT09IFNUT1BfQ09ERSkge1xuICAgICAgICAgICAgICAgICAgICByZW1vdmVMYXN0Q2hhcmFjdGVyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoY29kZS5jb2RlICE9PSBTVE9QX0NPREUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmF3UmVzdWx0LnB1c2goY29kZS5jb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGllcisrO1xuICAgICAgICAgICAgICAgICAgICBjaGVja3N1bSArPSBtdWx0aXBsaWVyICogY29kZS5jb2RlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkZWNvZGVkQ29kZXMucHVzaChjb2RlKTtcblxuICAgICAgICAgICAgICAgIHN3aXRjaCAoY29kZXNldCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIENPREVfQToge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvZGUuY29kZSA8IDY0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZSgzMiArIGNvZGUuY29kZSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjb2RlLmNvZGUgPCA5Nikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZS5jb2RlIC0gNjQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvZGUuY29kZSAhPT0gU1RPUF9DT0RFKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZUxhc3RDaGFyYWN0ZXIgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChjb2RlLmNvZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBDT0RFX1NISUZUOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpZnROZXh0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvZGVzZXQgPSBDT0RFX0I7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBDT0RFX0I6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2Rlc2V0ID0gQ09ERV9CO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgQ09ERV9DOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29kZXNldCA9IENPREVfQztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFNUT1BfQ09ERTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBDT0RFX0I6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2RlLmNvZGUgPCA5Nikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUoMzIgKyBjb2RlLmNvZGUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvZGUuY29kZSAhPT0gU1RPUF9DT0RFKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZUxhc3RDaGFyYWN0ZXIgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChjb2RlLmNvZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBDT0RFX1NISUZUOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpZnROZXh0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvZGVzZXQgPSBDT0RFX0E7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBDT0RFX0E6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2Rlc2V0ID0gQ09ERV9BO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgQ09ERV9DOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29kZXNldCA9IENPREVfQztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFNUT1BfQ09ERTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBDT0RFX0M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2RlLmNvZGUgPCAxMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChjb2RlLmNvZGUgPCAxMCA/ICcwJyArIGNvZGUuY29kZSA6IGNvZGUuY29kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2RlLmNvZGUgIT09IFNUT1BfQ09ERSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVMYXN0Q2hhcmFjdGVyID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoY29kZS5jb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgQ09ERV9BOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29kZXNldCA9IENPREVfQTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIENPREVfQjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvZGVzZXQgPSBDT0RFX0I7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBTVE9QX0NPREU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb25lID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkb25lID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh1bnNoaWZ0KSB7XG4gICAgICAgICAgICAgICAgY29kZXNldCA9IGNvZGVzZXQgPT09IENPREVfQSA/IENPREVfQiA6IENPREVfQTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb2RlID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvZGUuZW5kID0gdGhpcy5fbmV4dFVuc2V0KHRoaXMuX3JvdywgY29kZS5lbmQpO1xuICAgICAgICBpZiAoIXRoaXMuX3ZlcmlmeVRyYWlsaW5nV2hpdGVzcGFjZShjb2RlKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjaGVja3N1bSAtPSBtdWx0aXBsaWVyICogcmF3UmVzdWx0W3Jhd1Jlc3VsdC5sZW5ndGggLSAxXTtcbiAgICAgICAgaWYgKGNoZWNrc3VtICUgMTAzICE9PSByYXdSZXN1bHRbcmF3UmVzdWx0Lmxlbmd0aCAtIDFdKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghcmVzdWx0Lmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvLyByZW1vdmUgbGFzdCBjb2RlIGZyb20gcmVzdWx0IChjaGVja3N1bSlcbiAgICAgICAgaWYgKHJlbW92ZUxhc3RDaGFyYWN0ZXIpIHtcbiAgICAgICAgICAgIHJlc3VsdC5zcGxpY2UocmVzdWx0Lmxlbmd0aCAtIDEsIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvZGU6IHJlc3VsdC5qb2luKCcnKSxcbiAgICAgICAgICAgIHN0YXJ0OiBzdGFydEluZm8uc3RhcnQsXG4gICAgICAgICAgICBlbmQ6IGNvZGUuZW5kLFxuICAgICAgICAgICAgY29kZXNldCxcbiAgICAgICAgICAgIHN0YXJ0SW5mbyxcbiAgICAgICAgICAgIGRlY29kZWRDb2RlcyxcbiAgICAgICAgICAgIGVuZEluZm86IGNvZGVcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX3ZlcmlmeVRyYWlsaW5nV2hpdGVzcGFjZShlbmRJbmZvOiBCYXJjb2RlSW5mbyk6IEJhcmNvZGVJbmZvIHtcbiAgICAgICAgY29uc3QgdHJhaWxpbmdXaGl0ZXNwYWNlRW5kID0gZW5kSW5mby5lbmQgKyAoZW5kSW5mby5lbmQgLSBlbmRJbmZvLnN0YXJ0KSAvIDI7XG5cbiAgICAgICAgaWYgKHRyYWlsaW5nV2hpdGVzcGFjZUVuZCA8IHRoaXMuX3Jvdy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9tYXRjaFJhbmdlKGVuZEluZm8uZW5kLCB0cmFpbGluZ1doaXRlc3BhY2VFbmQsIDApKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVuZEluZm87XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9jYWxjdWxhdGVDb3JyZWN0aW9uKFxuICAgICAgICBleHBlY3RlZDogUmVhZG9ubHlBcnJheTxudW1iZXI+LFxuICAgICAgICBub3JtYWxpemVkOiBSZWFkb25seUFycmF5PG51bWJlcj4sXG4gICAgICAgIGluZGljZXM6IFJlYWRvbmx5QXJyYXk8bnVtYmVyPlxuICAgICk6IG51bWJlciB7XG4gICAgICAgIGxldCBzdW1Ob3JtYWxpemVkID0gMDtcbiAgICAgICAgbGV0IHN1bUV4cGVjdGVkID0gMDtcblxuICAgICAgICBmb3IgKGxldCBsZW5ndGggPSBpbmRpY2VzLmxlbmd0aDsgbGVuZ3RoLS07KSB7XG4gICAgICAgICAgICBzdW1FeHBlY3RlZCArPSBleHBlY3RlZFtpbmRpY2VzW2xlbmd0aF1dO1xuICAgICAgICAgICAgc3VtTm9ybWFsaXplZCArPSBub3JtYWxpemVkW2luZGljZXNbbGVuZ3RoXV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VtRXhwZWN0ZWQgLyBzdW1Ob3JtYWxpemVkO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEJhcmNvZGUsIEJhcmNvZGVJbmZvLCBCYXJjb2RlUmVhZGVyIH0gZnJvbSAnLi9iYXJjb2RlLXJlYWRlcic7XG5cbmNvbnN0IEFTVEVSSVNLID0gMHgwOTQ7XG5jb25zdCBBTFBIQUJFVEhfU1RSSU5HID0gJzAxMjM0NTY3ODlBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWi0uICokLyslJztcbmNvbnN0IEFMUEhBQkVUID0gbmV3IFVpbnQxNkFycmF5KFsuLi5BTFBIQUJFVEhfU1RSSU5HXS5tYXAoY2hhciA9PiBjaGFyLmNoYXJDb2RlQXQoMCkpKTtcbi8vIGNvbnN0IEFMUEhBQkVUID0gWzQ4LCA0OSwgNTAsIDUxLCA1MiwgNTMsIDU0LCA1NSwgNTYsIDU3LCA2NSwgNjYsIDY3LCA2OCwgNjksIDcwLCA3MSwgNzIsIDczLCA3NCwgNzUsIDc2LCA3NywgNzgsXG4vLyAgICAgNzksIDgwLCA4MSwgODIsIDgzLCA4NCwgODUsIDg2LCA4NywgODgsIDg5LCA5MCwgNDUsIDQ2LCAzMiwgNDIsIDM2LCA0NywgNDMsIDM3XTtcbmNvbnN0IENIQVJBQ1RFUl9FTkNPRElOR1MgPSBuZXcgVWludDE2QXJyYXkoW1xuICAgIDB4MDM0LCAweDEyMSwgMHgwNjEsIDB4MTYwLCAweDAzMSwgMHgxMzAsIDB4MDcwLCAweDAyNSwgMHgxMjQsIDB4MDY0LCAweDEwOSwgMHgwNDksIDB4MTQ4LCAweDAxOSwgMHgxMTgsIDB4MDU4LFxuICAgIDB4MDBELCAweDEwQywgMHgwNEMsIDB4MDFDLCAweDEwMywgMHgwNDMsIDB4MTQyLCAweDAxMywgMHgxMTIsIDB4MDUyLCAweDAwNywgMHgxMDYsIDB4MDQ2LCAweDAxNiwgMHgxODEsIDB4MEMxLFxuICAgIDB4MUMwLCAweDA5MSwgMHgxOTAsIDB4MEQwLCAweDA4NSwgMHgxODQsIDB4MEM0LCAweDA5NCwgMHgwQTgsIDB4MEEyLCAweDA4QSwgMHgwMkFcbl0pO1xuXG5leHBvcnQgY2xhc3MgQ29kZTM5UmVhZGVyIGV4dGVuZHMgQmFyY29kZVJlYWRlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5fZm9ybWF0ID0gJ2NvZGVfMzknO1xuICAgIH1cblxuICAgIGRlY29kZSgpOiBCYXJjb2RlIHtcbiAgICAgICAgY29uc3Qgc3RhcnQgPSB0aGlzLl9maW5kU3RhcnQoKTtcblxuICAgICAgICBpZiAoIXN0YXJ0KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBBcnJheTxzdHJpbmc+KCk7XG4gICAgICAgIGxldCBjb3VudGVycyA9IG5ldyBVaW50MTZBcnJheSg5KTtcbiAgICAgICAgbGV0IGRlY29kZWRDaGFyOiBzdHJpbmc7XG4gICAgICAgIGxldCBsYXN0U3RhcnQ6IG51bWJlcjtcbiAgICAgICAgbGV0IG5leHRTdGFydCA9IHRoaXMuX25leHRTZXQodGhpcy5fcm93LCBzdGFydC5lbmQpO1xuXG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIHRoaXMuX3RvQ291bnRlcnMobmV4dFN0YXJ0LCBjb3VudGVycyk7XG4gICAgICAgICAgICBjb25zdCBwYXR0ZXJuID0gdGhpcy5fdG9QYXR0ZXJuKGNvdW50ZXJzKTtcbiAgICAgICAgICAgIGlmIChwYXR0ZXJuIDwgMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVjb2RlZENoYXIgPSB0aGlzLl9wYXR0ZXJuVG9DaGFyKHBhdHRlcm4pO1xuICAgICAgICAgICAgaWYgKGRlY29kZWRDaGFyID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaChkZWNvZGVkQ2hhcik7XG4gICAgICAgICAgICBsYXN0U3RhcnQgPSBuZXh0U3RhcnQ7XG4gICAgICAgICAgICBuZXh0U3RhcnQgKz0gY291bnRlcnMucmVkdWNlKChzdW0sIGl0ZW0pID0+IHN1bSArIGl0ZW0sIDApO1xuICAgICAgICAgICAgbmV4dFN0YXJ0ID0gdGhpcy5fbmV4dFNldCh0aGlzLl9yb3csIG5leHRTdGFydCk7XG4gICAgICAgIH0gd2hpbGUgKGRlY29kZWRDaGFyICE9PSAnKicpO1xuICAgICAgICByZXN1bHQucG9wKCk7XG5cbiAgICAgICAgaWYgKCFyZXN1bHQubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5fdmVyaWZ5VHJhaWxpbmdXaGl0ZXNwYWNlKGxhc3RTdGFydCwgbmV4dFN0YXJ0LCBjb3VudGVycykpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvZGU6IHJlc3VsdC5qb2luKCcnKSxcbiAgICAgICAgICAgIHN0YXJ0OiBzdGFydC5zdGFydCxcbiAgICAgICAgICAgIGVuZDogbmV4dFN0YXJ0LFxuICAgICAgICAgICAgc3RhcnRJbmZvOiBzdGFydCxcbiAgICAgICAgICAgIGRlY29kZWRDb2RlczogcmVzdWx0XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9wYXR0ZXJuVG9DaGFyKHBhdHRlcm4pOiBzdHJpbmcge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IENIQVJBQ1RFUl9FTkNPRElOR1MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChDSEFSQUNURVJfRU5DT0RJTkdTW2ldID09PSBwYXR0ZXJuKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoQUxQSEFCRVRbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3ZlcmlmeVRyYWlsaW5nV2hpdGVzcGFjZShsYXN0U3RhcnQ6IG51bWJlciwgbmV4dFN0YXJ0OiBudW1iZXIsIGNvdW50ZXJzOiBVaW50MTZBcnJheSk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBwYXR0ZXJuU2l6ZSA9IGNvdW50ZXJzLnJlZHVjZSgoc3VtLCBpdGVtKSA9PiBzdW0gKyBpdGVtLCAwKTtcbiAgICAgICAgY29uc3QgdHJhaWxpbmdXaGl0ZXNwYWNlRW5kID0gbmV4dFN0YXJ0IC0gbGFzdFN0YXJ0IC0gcGF0dGVyblNpemU7XG4gICAgICAgIHJldHVybiAodHJhaWxpbmdXaGl0ZXNwYWNlRW5kICogMykgPj0gcGF0dGVyblNpemU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZmluZE5leHRXaWR0aChjb3VudGVyczogVWludDE2QXJyYXksIGN1cnJlbnQ6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIGxldCBtaW5XaWR0aCA9IE51bWJlci5NQVhfVkFMVUU7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGNvdW50ZXJzW2ldIDwgbWluV2lkdGggJiYgY291bnRlcnNbaV0gPiBjdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgbWluV2lkdGggPSBjb3VudGVyc1tpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtaW5XaWR0aDtcbiAgICB9XG5cbiAgICBwcml2YXRlIF90b1BhdHRlcm4oY291bnRlcnM6IFVpbnQxNkFycmF5KTogbnVtYmVyIHtcbiAgICAgICAgY29uc3QgbnVtQ291bnRlcnMgPSBjb3VudGVycy5sZW5ndGg7XG4gICAgICAgIGxldCBtYXhOYXJyb3dXaWR0aCA9IDA7XG4gICAgICAgIGxldCBudW1XaWRlQmFycyA9IG51bUNvdW50ZXJzO1xuICAgICAgICBsZXQgd2lkZUJhcldpZHRoID0gMDtcbiAgICAgICAgbGV0IHBhdHRlcm46IG51bWJlcjtcblxuICAgICAgICB3aGlsZSAobnVtV2lkZUJhcnMgPiAzKSB7XG4gICAgICAgICAgICBtYXhOYXJyb3dXaWR0aCA9IHRoaXMuX2ZpbmROZXh0V2lkdGgoY291bnRlcnMsIG1heE5hcnJvd1dpZHRoKTtcbiAgICAgICAgICAgIG51bVdpZGVCYXJzID0gMDtcbiAgICAgICAgICAgIHBhdHRlcm4gPSAwO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1Db3VudGVyczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvdW50ZXJzW2ldID4gbWF4TmFycm93V2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybiB8PSAxIDw8IChudW1Db3VudGVycyAtIDEgLSBpKTtcbiAgICAgICAgICAgICAgICAgICAgbnVtV2lkZUJhcnMrKztcbiAgICAgICAgICAgICAgICAgICAgd2lkZUJhcldpZHRoICs9IGNvdW50ZXJzW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG51bVdpZGVCYXJzID09PSAzKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1Db3VudGVycyAmJiBudW1XaWRlQmFycyA+IDA7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnRlcnNbaV0gPiBtYXhOYXJyb3dXaWR0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbnVtV2lkZUJhcnMtLTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoY291bnRlcnNbaV0gKiAyKSA+PSB3aWRlQmFyV2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhdHRlcm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZmluZFN0YXJ0KCk6IEJhcmNvZGVJbmZvIHtcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gdGhpcy5fbmV4dFNldCh0aGlzLl9yb3cpO1xuICAgICAgICBsZXQgcGF0dGVyblN0YXJ0ID0gb2Zmc2V0O1xuICAgICAgICBjb25zdCBjb3VudGVyID0gbmV3IFVpbnQxNkFycmF5KDkpO1xuICAgICAgICBsZXQgY291bnRlclBvcyA9IDA7XG4gICAgICAgIGxldCBpc1doaXRlOiAwIHwgMSA9IDA7XG4gICAgICAgIGxldCB3aGl0ZVNwYWNlTXVzdFN0YXJ0OiBudW1iZXI7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IG9mZnNldDsgaSA8IHRoaXMuX3Jvdy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3Jvd1tpXSBeIGlzV2hpdGUpIHtcbiAgICAgICAgICAgICAgICBjb3VudGVyW2NvdW50ZXJQb3NdKys7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChjb3VudGVyUG9zID09PSBjb3VudGVyLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZmluZCBzdGFydCBwYXR0ZXJuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl90b1BhdHRlcm4oY291bnRlcikgPT09IEFTVEVSSVNLKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZVNwYWNlTXVzdFN0YXJ0ID0gTWF0aC5tYXgoMCwgcGF0dGVyblN0YXJ0IC0gKChpIC0gcGF0dGVyblN0YXJ0KSAvIDQpKSB8IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fbWF0Y2hSYW5nZSh3aGl0ZVNwYWNlTXVzdFN0YXJ0LCBwYXR0ZXJuU3RhcnQsIDApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IHBhdHRlcm5TdGFydCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kOiBpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm5TdGFydCArPSBjb3VudGVyWzBdICsgY291bnRlclsxXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA3OyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ZXJbal0gPSBjb3VudGVyW2ogKyAyXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb3VudGVyWzddID0gMDtcbiAgICAgICAgICAgICAgICAgICAgY291bnRlcls4XSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXJQb3MtLTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb3VudGVyUG9zKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvdW50ZXJbY291bnRlclBvc10gPSAxO1xuICAgICAgICAgICAgICAgIGlzV2hpdGUgPSBpc1doaXRlID8gMCA6IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBCYXJjb2RlIH0gZnJvbSAnLi9iYXJjb2RlLXJlYWRlcic7XG5pbXBvcnQgeyBDb2RlMzlSZWFkZXIgfSBmcm9tICcuL2NvZGUtMzktcmVhZGVyJztcblxuZXhwb3J0IGNsYXNzIENvZGUzOVZJTlJlYWRlciBleHRlbmRzIENvZGUzOVJlYWRlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5fZm9ybWF0ID0gJ2NvZGVfMzlfdmluJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAYm9ycm93c1xuICAgICAqIGh0dHBzOi8vZ2l0aHViLmNvbS96eGluZy96eGluZy9ibG9iL21hc3Rlci9jb3JlL3NyYy9tYWluL2phdmEvY29tL2dvb2dsZS96eGluZy9jbGllbnQvcmVzdWx0L1ZJTlJlc3VsdFBhcnNlci5qYXZhXG4gICAgICovXG4gICAgZGVjb2RlKCk6IEJhcmNvZGUge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5kZWNvZGUoKTtcbiAgICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNvZGUgPSByZXN1bHQuY29kZTtcblxuICAgICAgICBpZiAoIWNvZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29kZSA9IGNvZGUucmVwbGFjZSgvW0lPUV0vZywgJycpO1xuXG4gICAgICAgIGlmICghL1tBLVowLTldezE3fS8udGVzdChjb2RlKSkge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRmFpbGVkIEFaMDkgcGF0dGVybiBjb2RlOicsIGNvZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuX2NoZWNrQ2hlY2tzdW0oY29kZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzdWx0LmNvZGUgPSBjb2RlO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHByaXZhdGUgX2NoZWNrQ2hlY2tzdW0oY29kZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIC8vIFRPRE9cbiAgICAgICAgcmV0dXJuICEhY29kZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBCYXJjb2RlLCBCYXJjb2RlSW5mbywgQmFyY29kZVJlYWRlciB9IGZyb20gJy4vYmFyY29kZS1yZWFkZXInO1xuXG5jb25zdCBBTFBIQUJFVEhfU1RSSU5HID0gJzAxMjM0NTY3ODlBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWi0uICQvKyVhYmNkKic7XG5jb25zdCBBTFBIQUJFVCA9IG5ldyBVaW50MTZBcnJheShbLi4uQUxQSEFCRVRIX1NUUklOR10ubWFwKGNoYXIgPT4gY2hhci5jaGFyQ29kZUF0KDApKSk7XG5jb25zdCBDSEFSQUNURVJfRU5DT0RJTkdTID0gbmV3IFVpbnQxNkFycmF5KFtcbiAgICAweDExNCwgMHgxNDgsIDB4MTQ0LCAweDE0MiwgMHgxMjgsIDB4MTI0LCAweDEyMiwgMHgxNTAsIDB4MTEyLCAweDEwQSwgMHgxQTgsIDB4MUE0LCAweDFBMiwgMHgxOTQsIDB4MTkyLCAweDE4QSxcbiAgICAweDE2OCwgMHgxNjQsIDB4MTYyLCAweDEzNCwgMHgxMUEsIDB4MTU4LCAweDE0QywgMHgxNDYsIDB4MTJDLCAweDExNiwgMHgxQjQsIDB4MUIyLCAweDFBQywgMHgxQTYsIDB4MTk2LCAweDE5QSxcbiAgICAweDE2QywgMHgxNjYsIDB4MTM2LCAweDEzQSwgMHgxMkUsIDB4MUQ0LCAweDFEMiwgMHgxQ0EsIDB4MTZFLCAweDE3NiwgMHgxQUUsIDB4MTI2LCAweDFEQSwgMHgxRDYsIDB4MTMyLCAweDE1RVxuXSk7XG5jb25zdCBBU1RFUklTSyA9IDB4MTVFO1xuXG5leHBvcnQgY2xhc3MgQ29kZTkzUmVhZGVyIGV4dGVuZHMgQmFyY29kZVJlYWRlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5fZm9ybWF0ID0gJ2NvZGVfOTMnO1xuICAgIH1cblxuICAgIGRlY29kZSgpOiBCYXJjb2RlIHtcbiAgICAgICAgY29uc3Qgc3RhcnQgPSB0aGlzLl9maW5kU3RhcnQoKTtcblxuICAgICAgICBpZiAoIXN0YXJ0KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZXN1bHQgPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xuICAgICAgICBsZXQgY291bnRlcnMgPSBuZXcgVWludDE2QXJyYXkoNik7XG4gICAgICAgIGxldCBkZWNvZGVkQ2hhcjogc3RyaW5nO1xuICAgICAgICBsZXQgbGFzdFN0YXJ0OiBudW1iZXI7XG4gICAgICAgIGxldCBuZXh0U3RhcnQgPSB0aGlzLl9uZXh0U2V0KHRoaXMuX3Jvdywgc3RhcnQuZW5kKTtcblxuICAgICAgICBkbyB7XG4gICAgICAgICAgICB0aGlzLl90b0NvdW50ZXJzKG5leHRTdGFydCwgY291bnRlcnMpO1xuICAgICAgICAgICAgY29uc3QgcGF0dGVybiA9IHRoaXMuX3RvUGF0dGVybihjb3VudGVycyk7XG4gICAgICAgICAgICBpZiAocGF0dGVybiA8IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlY29kZWRDaGFyID0gdGhpcy5fcGF0dGVyblRvQ2hhcihwYXR0ZXJuKTtcbiAgICAgICAgICAgIGlmIChkZWNvZGVkQ2hhciA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goZGVjb2RlZENoYXIpO1xuICAgICAgICAgICAgbGFzdFN0YXJ0ID0gbmV4dFN0YXJ0O1xuICAgICAgICAgICAgbmV4dFN0YXJ0ICs9IGNvdW50ZXJzLnJlZHVjZSgoc3VtLCBpdGVtKSA9PiBzdW0gKyBpdGVtLCAwKTtcbiAgICAgICAgICAgIG5leHRTdGFydCA9IHRoaXMuX25leHRTZXQodGhpcy5fcm93LCBuZXh0U3RhcnQpO1xuICAgICAgICB9IHdoaWxlIChkZWNvZGVkQ2hhciAhPT0gJyonKTtcbiAgICAgICAgcmVzdWx0LnBvcCgpO1xuXG4gICAgICAgIGlmICghcmVzdWx0Lmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuX3ZlcmlmeUVuZChsYXN0U3RhcnQsIG5leHRTdGFydCkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLl92ZXJpZnlDaGVja3N1bXMocmVzdWx0KSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXN1bHQgPSByZXN1bHQuc2xpY2UoMCwgcmVzdWx0Lmxlbmd0aCAtIDIpO1xuICAgICAgICBpZiAoKHJlc3VsdCA9IHRoaXMuX2RlY29kZUV4dGVuZGVkKHJlc3VsdCkpID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb2RlOiByZXN1bHQuam9pbignJyksXG4gICAgICAgICAgICBzdGFydDogc3RhcnQuc3RhcnQsXG4gICAgICAgICAgICBlbmQ6IG5leHRTdGFydCxcbiAgICAgICAgICAgIHN0YXJ0SW5mbzogc3RhcnQsXG4gICAgICAgICAgICBkZWNvZGVkQ29kZXM6IHJlc3VsdFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfcGF0dGVyblRvQ2hhcihwYXR0ZXJuOiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IENIQVJBQ1RFUl9FTkNPRElOR1MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChDSEFSQUNURVJfRU5DT0RJTkdTW2ldID09PSBwYXR0ZXJuKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoQUxQSEFCRVRbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3ZlcmlmeUVuZChsYXN0U3RhcnQ6IG51bWJlciwgbmV4dFN0YXJ0OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKGxhc3RTdGFydCA9PT0gbmV4dFN0YXJ0IHx8ICF0aGlzLl9yb3dbbmV4dFN0YXJ0XSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3RvUGF0dGVybihjb3VudGVyczogVWludDE2QXJyYXkpOiBudW1iZXIge1xuICAgICAgICBjb25zdCBudW1Db3VudGVycyA9IGNvdW50ZXJzLmxlbmd0aDtcbiAgICAgICAgbGV0IHBhdHRlcm4gPSAwO1xuICAgICAgICBsZXQgc3VtID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1Db3VudGVyczsgaSsrKSB7XG4gICAgICAgICAgICBzdW0gKz0gY291bnRlcnNbaV07XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bUNvdW50ZXJzOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBub3JtYWxpemVkID0gTWF0aC5yb3VuZChjb3VudGVyc1tpXSAqIDkgLyBzdW0pO1xuICAgICAgICAgICAgaWYgKG5vcm1hbGl6ZWQgPCAxIHx8IG5vcm1hbGl6ZWQgPiA0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKChpICYgMSkgPT09IDApIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG5vcm1hbGl6ZWQ7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuID0gKHBhdHRlcm4gPDwgMSkgfCAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGF0dGVybiA8PD0gbm9ybWFsaXplZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYXR0ZXJuO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2ZpbmRTdGFydCgpOiBCYXJjb2RlSW5mbyB7XG4gICAgICAgIGNvbnN0IGNvdW50ZXIgPSBuZXcgVWludDE2QXJyYXkoNik7XG4gICAgICAgIGNvbnN0IG9mZnNldCA9IHRoaXMuX25leHRTZXQodGhpcy5fcm93KTtcbiAgICAgICAgbGV0IHBhdHRlcm5TdGFydCA9IG9mZnNldDtcbiAgICAgICAgbGV0IGNvdW50ZXJQb3MgPSAwO1xuICAgICAgICBsZXQgaXNXaGl0ZTogMCB8IDEgPSAwO1xuICAgICAgICBsZXQgd2hpdGVTcGFjZU11c3RTdGFydDogbnVtYmVyO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSBvZmZzZXQ7IGkgPCB0aGlzLl9yb3cubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9yb3dbaV0gXiBpc1doaXRlKSB7XG4gICAgICAgICAgICAgICAgY291bnRlcltjb3VudGVyUG9zXSsrO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoY291bnRlclBvcyA9PT0gY291bnRlci5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGZpbmQgc3RhcnQgcGF0dGVyblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fdG9QYXR0ZXJuKGNvdW50ZXIpID09PSBBU1RFUklTSykge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGVTcGFjZU11c3RTdGFydCA9IE1hdGgubWF4KDAsIHBhdHRlcm5TdGFydCAtICgoaSAtIHBhdHRlcm5TdGFydCkgLyA0KSkgfCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX21hdGNoUmFuZ2Uod2hpdGVTcGFjZU11c3RTdGFydCwgcGF0dGVyblN0YXJ0LCAwKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBwYXR0ZXJuU3RhcnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuU3RhcnQgKz0gY291bnRlclswXSArIGNvdW50ZXJbMV07XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgNDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVyW2pdID0gY291bnRlcltqICsgMl07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY291bnRlcls0XSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXJbNV0gPSAwO1xuICAgICAgICAgICAgICAgICAgICBjb3VudGVyUG9zLS07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnRlclBvcysrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb3VudGVyW2NvdW50ZXJQb3NdID0gMTtcbiAgICAgICAgICAgICAgICBpc1doaXRlID0gaXNXaGl0ZSA/IDAgOiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZGVjb2RlRXh0ZW5kZWQoY2hhckFycmF5OiBBcnJheTxzdHJpbmc+KTogQXJyYXk8c3RyaW5nPiB7XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IGNoYXJBcnJheS5sZW5ndGg7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBBcnJheTxzdHJpbmc+KCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNoYXIgPSBjaGFyQXJyYXlbaV07XG4gICAgICAgICAgICBpZiAoY2hhciA+PSAnYScgJiYgY2hhciA8PSAnZCcpIHtcbiAgICAgICAgICAgICAgICBpZiAoaSA+IChsZW5ndGggLSAyKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgbmV4dENoYXIgPSBjaGFyQXJyYXlbKytpXTtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXh0Q2hhckNvZGUgPSBuZXh0Q2hhci5jaGFyQ29kZUF0KDApO1xuICAgICAgICAgICAgICAgIGxldCBkZWNvZGVkQ2hhcjogc3RyaW5nO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoY2hhcikge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdhJzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRDaGFyID49ICdBJyAmJiBuZXh0Q2hhciA8PSAnWicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNvZGVkQ2hhciA9IFN0cmluZy5mcm9tQ2hhckNvZGUobmV4dENoYXJDb2RlIC0gNjQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2InOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV4dENoYXIgPj0gJ0EnICYmIG5leHRDaGFyIDw9ICdFJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY29kZWRDaGFyID0gU3RyaW5nLmZyb21DaGFyQ29kZShuZXh0Q2hhckNvZGUgLSAzOCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG5leHRDaGFyID49ICdGJyAmJiBuZXh0Q2hhciA8PSAnSicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNvZGVkQ2hhciA9IFN0cmluZy5mcm9tQ2hhckNvZGUobmV4dENoYXJDb2RlIC0gMTEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChuZXh0Q2hhciA+PSAnSycgJiYgbmV4dENoYXIgPD0gJ08nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjb2RlZENoYXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKG5leHRDaGFyQ29kZSArIDE2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobmV4dENoYXIgPj0gJ1AnICYmIG5leHRDaGFyIDw9ICdTJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY29kZWRDaGFyID0gU3RyaW5nLmZyb21DaGFyQ29kZShuZXh0Q2hhckNvZGUgKyA0Myk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG5leHRDaGFyID49ICdUJyAmJiBuZXh0Q2hhciA8PSAnWicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNvZGVkQ2hhciA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMTI3KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXNlICdjJzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRDaGFyID49ICdBJyAmJiBuZXh0Q2hhciA8PSAnTycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNvZGVkQ2hhciA9IFN0cmluZy5mcm9tQ2hhckNvZGUobmV4dENoYXJDb2RlIC0gMzIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChuZXh0Q2hhciA9PT0gJ1onKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjb2RlZENoYXIgPSAnOic7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZCc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXh0Q2hhciA+PSAnQScgJiYgbmV4dENoYXIgPD0gJ1onKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjb2RlZENoYXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKG5leHRDaGFyQ29kZSArIDMyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChkZWNvZGVkQ2hhcik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGNoYXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfdmVyaWZ5Q2hlY2tzdW1zKGNoYXJBcnJheTogQXJyYXk8c3RyaW5nPik6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWF0Y2hDaGVja0NoYXIoY2hhckFycmF5LCBjaGFyQXJyYXkubGVuZ3RoIC0gMiwgMjApXG4gICAgICAgICAgICAmJiB0aGlzLl9tYXRjaENoZWNrQ2hhcihjaGFyQXJyYXksIGNoYXJBcnJheS5sZW5ndGggLSAxLCAxNSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfbWF0Y2hDaGVja0NoYXIoY2hhckFycmF5OiBBcnJheTxzdHJpbmc+LCBpbmRleDogbnVtYmVyLCBtYXhXZWlnaHQ6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBhcnJheVRvQ2hlY2sgPSBjaGFyQXJyYXkuc2xpY2UoMCwgaW5kZXgpO1xuICAgICAgICBjb25zdCBsZW5ndGggPSBhcnJheVRvQ2hlY2subGVuZ3RoO1xuICAgICAgICBjb25zdCB3ZWlnaHRlZFN1bXMgPSBhcnJheVRvQ2hlY2sucmVkdWNlKChzdW0sIGNoYXIsIGkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHdlaWdodCA9ICgoKGkgKiAtMSkgKyAobGVuZ3RoIC0gMSkpICUgbWF4V2VpZ2h0KSArIDE7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IEFMUEhBQkVULmluZGV4T2YoY2hhci5jaGFyQ29kZUF0KDApKTtcbiAgICAgICAgICAgIHJldHVybiBzdW0gKyAod2VpZ2h0ICogdmFsdWUpO1xuICAgICAgICB9LCAwKTtcblxuICAgICAgICBjb25zdCBjaGVja0NoYXIgPSBBTFBIQUJFVFsod2VpZ2h0ZWRTdW1zICUgNDcpXTtcbiAgICAgICAgcmV0dXJuIGNoZWNrQ2hhciA9PT0gY2hhckFycmF5W2luZGV4XS5jaGFyQ29kZUF0KDApO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEJhcmNvZGUsIEJhcmNvZGVJbmZvLCBCYXJjb2RlUmVhZGVyLCBCYXJjb2RlUmVhZGVyQ29uZmlnIH0gZnJvbSAnLi9iYXJjb2RlLXJlYWRlcic7XG5pbXBvcnQgeyBFQU5SZWFkZXIgfSBmcm9tICcuL2Vhbi1yZWFkZXInO1xuXG5leHBvcnQgY2xhc3MgRUFOMlJlYWRlciBleHRlbmRzIEVBTlJlYWRlciB7XG4gICAgY29uc3RydWN0b3IoY29uZmlnPzogQmFyY29kZVJlYWRlckNvbmZpZywgc3VwcGxlbWVudHM/OiBBcnJheTxCYXJjb2RlUmVhZGVyPikge1xuICAgICAgICBzdXBlcihjb25maWcsIHN1cHBsZW1lbnRzKTtcblxuICAgICAgICB0aGlzLl9mb3JtYXQgPSAnZWFuXzInO1xuICAgIH1cblxuICAgIGRlY29kZShyb3c/OiBBcnJheTxudW1iZXI+LCBzdGFydD86IG51bWJlcik6IEJhcmNvZGUge1xuICAgICAgICBjb25zdCBlbmQgPSByb3cubGVuZ3RoO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xuICAgICAgICBjb25zdCBkZWNvZGVkQ29kZXMgPSBuZXcgQXJyYXk8QmFyY29kZUluZm8+KCk7XG4gICAgICAgIGxldCBvZmZzZXQgPSBzdGFydDtcbiAgICAgICAgbGV0IGNvZGVGcmVxdWVuY3kgPSAwO1xuICAgICAgICBsZXQgY29kZTogQmFyY29kZUluZm87XG5cbiAgICAgICAgdGhpcy5fcm93ID0gcm93O1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMiAmJiBvZmZzZXQgPCBlbmQ7IGkrKykge1xuICAgICAgICAgICAgY29kZSA9IHRoaXMuX2RlY29kZUNvZGUob2Zmc2V0KTtcbiAgICAgICAgICAgIGlmICghY29kZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVjb2RlZENvZGVzLnB1c2goY29kZSk7XG4gICAgICAgICAgICByZXN1bHQucHVzaChjb2RlLmNvZGUgJSAxMCk7XG4gICAgICAgICAgICBpZiAoY29kZS5jb2RlID49IHRoaXMuQ09ERV9HX1NUQVJUKSB7XG4gICAgICAgICAgICAgICAgY29kZUZyZXF1ZW5jeSB8PSAxIDw8ICgxIC0gaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaSAhPT0gMSkge1xuICAgICAgICAgICAgICAgIG9mZnNldCA9IHRoaXMuX25leHRTZXQodGhpcy5fcm93LCBjb2RlLmVuZCk7XG4gICAgICAgICAgICAgICAgb2Zmc2V0ID0gdGhpcy5fbmV4dFVuc2V0KHRoaXMuX3Jvdywgb2Zmc2V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXN1bHQubGVuZ3RoICE9PSAyIHx8IChwYXJzZUludChyZXN1bHQuam9pbignJykpICUgNCkgIT09IGNvZGVGcmVxdWVuY3kpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvZGU6IHJlc3VsdC5qb2luKCcnKSxcbiAgICAgICAgICAgIGRlY29kZWRDb2RlcyxcbiAgICAgICAgICAgIGVuZDogY29kZS5lbmRcbiAgICAgICAgfTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBCYXJjb2RlLCBCYXJjb2RlSW5mbywgQmFyY29kZVJlYWRlciwgQmFyY29kZVJlYWRlckNvbmZpZyB9IGZyb20gJy4vYmFyY29kZS1yZWFkZXInO1xuaW1wb3J0IHsgRUFOUmVhZGVyIH0gZnJvbSAnLi9lYW4tcmVhZGVyJztcblxuZXhwb3J0IGNsYXNzIEVBTjVSZWFkZXIgZXh0ZW5kcyBFQU5SZWFkZXIge1xuICAgIGdldCBDSEVDS19ESUdJVF9FTkNPRElOR1MoKTogQXJyYXk8bnVtYmVyPiB7XG4gICAgICAgIHJldHVybiBbMjQsIDIwLCAxOCwgMTcsIDEyLCA2LCAzLCAxMCwgOSwgNV07XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoY29uZmlnPzogQmFyY29kZVJlYWRlckNvbmZpZywgc3VwcGxlbWVudHM/OiBBcnJheTxCYXJjb2RlUmVhZGVyPikge1xuICAgICAgICBzdXBlcihjb25maWcsIHN1cHBsZW1lbnRzKTtcblxuICAgICAgICB0aGlzLl9mb3JtYXQgPSAnZWFuXzUnO1xuICAgIH1cblxuICAgIGRlY29kZShyb3c/OiBBcnJheTxudW1iZXI+LCBzdGFydD86IG51bWJlcik6IEJhcmNvZGUge1xuICAgICAgICBjb25zdCBlbmQgPSByb3cubGVuZ3RoO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xuICAgICAgICBjb25zdCBkZWNvZGVkQ29kZXMgPSBuZXcgQXJyYXk8QmFyY29kZUluZm8+KCk7XG4gICAgICAgIGxldCBjb2RlRnJlcXVlbmN5ID0gMDtcbiAgICAgICAgbGV0IG9mZnNldCA9IHN0YXJ0O1xuICAgICAgICBsZXQgY29kZTogQmFyY29kZUluZm87XG5cbiAgICAgICAgdGhpcy5fcm93ID0gcm93O1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNSAmJiBvZmZzZXQgPCBlbmQ7IGkrKykge1xuICAgICAgICAgICAgY29kZSA9IHRoaXMuX2RlY29kZUNvZGUob2Zmc2V0KTtcbiAgICAgICAgICAgIGlmICghY29kZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVjb2RlZENvZGVzLnB1c2goY29kZSk7XG4gICAgICAgICAgICByZXN1bHQucHVzaChjb2RlLmNvZGUgJSAxMCk7XG4gICAgICAgICAgICBpZiAoY29kZS5jb2RlID49IHRoaXMuQ09ERV9HX1NUQVJUKSB7XG4gICAgICAgICAgICAgICAgY29kZUZyZXF1ZW5jeSB8PSAxIDw8ICg0IC0gaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaSAhPT0gNCkge1xuICAgICAgICAgICAgICAgIG9mZnNldCA9IHRoaXMuX25leHRTZXQodGhpcy5fcm93LCBjb2RlLmVuZCk7XG4gICAgICAgICAgICAgICAgb2Zmc2V0ID0gdGhpcy5fbmV4dFVuc2V0KHRoaXMuX3Jvdywgb2Zmc2V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXN1bHQubGVuZ3RoICE9PSA1KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9leHRlbnNpb25DaGVja3N1bShyZXN1bHQpICE9PSB0aGlzLl9kZXRlcm1pbmVDaGVja0RpZ2l0KGNvZGVGcmVxdWVuY3kpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb2RlOiByZXN1bHQuam9pbignJyksXG4gICAgICAgICAgICBkZWNvZGVkQ29kZXMsXG4gICAgICAgICAgICBlbmQ6IGNvZGUuZW5kXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZGV0ZXJtaW5lQ2hlY2tEaWdpdChjb2RlRnJlcXVlbmN5OiBudW1iZXIpOiBudW1iZXIgfCBudWxsIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoY29kZUZyZXF1ZW5jeSA9PT0gdGhpcy5DSEVDS19ESUdJVF9FTkNPRElOR1NbaV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9leHRlbnNpb25DaGVja3N1bShyZXN1bHQ6IEFycmF5PG51bWJlcj4pOiBudW1iZXIge1xuICAgICAgICBsZXQgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aDtcbiAgICAgICAgbGV0IHN1bSA9IDA7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IGxlbmd0aCAtIDI7IGkgPj0gMDsgaSAtPSAyKSB7XG4gICAgICAgICAgICBzdW0gKz0gcmVzdWx0W2ldO1xuICAgICAgICB9XG4gICAgICAgIHN1bSAqPSAzO1xuICAgICAgICBmb3IgKGxldCBpID0gbGVuZ3RoIC0gMTsgaSA+PSAwOyBpIC09IDIpIHtcbiAgICAgICAgICAgIHN1bSArPSByZXN1bHRbaV07XG4gICAgICAgIH1cbiAgICAgICAgc3VtICo9IDM7XG5cbiAgICAgICAgcmV0dXJuIHN1bSAlIDEwO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEJhcmNvZGVJbmZvLCBCYXJjb2RlUmVhZGVyLCBCYXJjb2RlUmVhZGVyQ29uZmlnIH0gZnJvbSAnLi9iYXJjb2RlLXJlYWRlcic7XG5pbXBvcnQgeyBFQU5SZWFkZXIgfSBmcm9tICcuL2Vhbi1yZWFkZXInO1xuXG5leHBvcnQgY2xhc3MgRUFOOFJlYWRlciBleHRlbmRzIEVBTlJlYWRlciB7XG4gICAgY29uc3RydWN0b3IoY29uZmlnPzogQmFyY29kZVJlYWRlckNvbmZpZywgc3VwcGxlbWVudHM/OiBBcnJheTxCYXJjb2RlUmVhZGVyPikge1xuICAgICAgICBzdXBlcihjb25maWcsIHN1cHBsZW1lbnRzKTtcblxuICAgICAgICB0aGlzLl9mb3JtYXQgPSAnZWFuXzgnO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZGVjb2RlUGF5bG9hZChjb2RlOiBCYXJjb2RlSW5mbywgcmVzdWx0OiBBcnJheTxudW1iZXI+LCBkZWNvZGVkQ29kZXM6IEFycmF5PEJhcmNvZGVJbmZvPik6IEJhcmNvZGVJbmZvIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgICAgIGNvZGUgPSB0aGlzLl9kZWNvZGVDb2RlKGNvZGUuZW5kLCB0aGlzLkNPREVfR19TVEFSVCk7XG4gICAgICAgICAgICBpZiAoIWNvZGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGNvZGUuY29kZSk7XG4gICAgICAgICAgICBkZWNvZGVkQ29kZXMucHVzaChjb2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvZGUgPSB0aGlzLl9maW5kUGF0dGVybih0aGlzLk1JRERMRV9QQVRURVJOLCBjb2RlLmVuZCwgMSwgZmFsc2UpO1xuXG4gICAgICAgIGlmIChjb2RlID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlY29kZWRDb2Rlcy5wdXNoKGNvZGUpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgICAgICBjb2RlID0gdGhpcy5fZGVjb2RlQ29kZShjb2RlLmVuZCwgdGhpcy5DT0RFX0dfU1RBUlQpO1xuXG4gICAgICAgICAgICBpZiAoIWNvZGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGVjb2RlZENvZGVzLnB1c2goY29kZSk7XG4gICAgICAgICAgICByZXN1bHQucHVzaChjb2RlLmNvZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvZGU7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgbWVyZ2UgfSBmcm9tICcuLi9jb21tb24vbWVyZ2UnO1xuaW1wb3J0IHsgQmFyY29kZSwgQmFyY29kZUluZm8sIEJhcmNvZGVSZWFkZXIsIEJhcmNvZGVSZWFkZXJDb25maWcgfSBmcm9tICcuL2JhcmNvZGUtcmVhZGVyJztcblxuY29uc3QgRVhURU5TSU9OX1NUQVJUX1BBVFRFUk4gPSBbMSwgMSwgMl07XG5jb25zdCBDT0RFX1BBVFRFUk4gPSBbXG4gICAgWzMsIDIsIDEsIDFdLFxuICAgIFsyLCAyLCAyLCAxXSxcbiAgICBbMiwgMSwgMiwgMl0sXG4gICAgWzEsIDQsIDEsIDFdLFxuICAgIFsxLCAxLCAzLCAyXSxcbiAgICBbMSwgMiwgMywgMV0sXG4gICAgWzEsIDEsIDEsIDRdLFxuICAgIFsxLCAzLCAxLCAyXSxcbiAgICBbMSwgMiwgMSwgM10sXG4gICAgWzMsIDEsIDEsIDJdLFxuICAgIFsxLCAxLCAyLCAzXSxcbiAgICBbMSwgMiwgMiwgMl0sXG4gICAgWzIsIDIsIDEsIDJdLFxuICAgIFsxLCAxLCA0LCAxXSxcbiAgICBbMiwgMywgMSwgMV0sXG4gICAgWzEsIDMsIDIsIDFdLFxuICAgIFs0LCAxLCAxLCAxXSxcbiAgICBbMiwgMSwgMywgMV0sXG4gICAgWzMsIDEsIDIsIDFdLFxuICAgIFsyLCAxLCAxLCAzXVxuXTtcbmNvbnN0IENPREVfRlJFUVVFTkNZID0gWzAsIDExLCAxMywgMTQsIDE5LCAyNSwgMjgsIDIxLCAyMiwgMjZdO1xuXG5leHBvcnQgY2xhc3MgRUFOUmVhZGVyIGV4dGVuZHMgQmFyY29kZVJlYWRlciB7XG4gICAgZ2V0IENPREVfTF9TVEFSVCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICBnZXQgQ09ERV9HX1NUQVJUKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiAxMDtcbiAgICB9XG5cbiAgICBnZXQgU1RBUlRfUEFUVEVSTigpOiBBcnJheTxudW1iZXI+IHtcbiAgICAgICAgcmV0dXJuIFsxLCAxLCAxXTtcbiAgICB9XG5cbiAgICBnZXQgU1RPUF9QQVRURVJOKCk6IEFycmF5PG51bWJlcj4ge1xuICAgICAgICByZXR1cm4gWzEsIDEsIDFdO1xuICAgIH1cblxuICAgIGdldCBNSURETEVfUEFUVEVSTigpOiBBcnJheTxudW1iZXI+IHtcbiAgICAgICAgcmV0dXJuIFsxLCAxLCAxLCAxLCAxXTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihjb25maWc/OiBCYXJjb2RlUmVhZGVyQ29uZmlnLCBzdXBwbGVtZW50cz86IEFycmF5PEJhcmNvZGVSZWFkZXI+KSB7XG4gICAgICAgIHN1cGVyKG1lcmdlKHtcbiAgICAgICAgICAgIHN1cHBsZW1lbnRzOiBbXSAvLyBBbGxvd2VkIGV4dGVuc2lvbnMgdG8gYmUgZGVjb2RlZCAoMiBhbmQvb3IgNSlcbiAgICAgICAgfSwgY29uZmlnKSwgc3VwcGxlbWVudHMpO1xuXG4gICAgICAgIHRoaXMuX2Zvcm1hdCA9ICdlYW5fMTMnO1xuICAgICAgICB0aGlzLl9zaW5nbGVDb2RlRXJyb3IgPSAwLjcwO1xuICAgICAgICB0aGlzLl9hdmVyYWdlQ29kZUVycm9yID0gMC40ODtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2RlY29kZUNvZGUoc3RhcnQ6IG51bWJlciwgY29kZXJhbmdlPzogbnVtYmVyKTogQmFyY29kZUluZm8ge1xuICAgICAgICBjb25zdCBjb3VudGVyID0gWzAsIDAsIDAsIDBdO1xuICAgICAgICBjb25zdCBvZmZzZXQgPSBzdGFydDtcbiAgICAgICAgY29uc3QgYmVzdE1hdGNoOiBCYXJjb2RlSW5mbyA9IHtcbiAgICAgICAgICAgIGVycm9yOiBOdW1iZXIuTUFYX1ZBTFVFLFxuICAgICAgICAgICAgY29kZTogLTEsXG4gICAgICAgICAgICBzdGFydDogc3RhcnQsXG4gICAgICAgICAgICBlbmQ6IHN0YXJ0XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGVwc2lsb24gPSB0aGlzLkFWRVJBR0VfQ09ERV9FUlJPUjtcbiAgICAgICAgbGV0IGlzV2hpdGU6IDAgfCAxID0gdGhpcy5fcm93W29mZnNldF0gPyAwIDogMTtcbiAgICAgICAgbGV0IGNvdW50ZXJQb3MgPSAwO1xuXG4gICAgICAgIGlmICghY29kZXJhbmdlKSB7XG4gICAgICAgICAgICBjb2RlcmFuZ2UgPSBDT0RFX1BBVFRFUk4ubGVuZ3RoO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IG9mZnNldDsgaSA8IHRoaXMuX3Jvdy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3Jvd1tpXSBeIGlzV2hpdGUpIHtcbiAgICAgICAgICAgICAgICBjb3VudGVyW2NvdW50ZXJQb3NdKys7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChjb3VudGVyUG9zID09PSBjb3VudGVyLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgY29kZSA9IDA7IGNvZGUgPCBjb2RlcmFuZ2U7IGNvZGUrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXJyb3IgPSB0aGlzLl9tYXRjaFBhdHRlcm4oY291bnRlciwgQ09ERV9QQVRURVJOW2NvZGVdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnJvciA8IGJlc3RNYXRjaC5lcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlc3RNYXRjaC5jb2RlID0gY29kZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZXN0TWF0Y2guZXJyb3IgPSBlcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBiZXN0TWF0Y2guZW5kID0gaTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJlc3RNYXRjaC5lcnJvciA+IGVwc2lsb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBiZXN0TWF0Y2g7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnRlclBvcysrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb3VudGVyW2NvdW50ZXJQb3NdID0gMTtcbiAgICAgICAgICAgICAgICBpc1doaXRlID0gaXNXaGl0ZSA/IDAgOiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9maW5kU3RhcnQoKTogQmFyY29kZUluZm8ge1xuICAgICAgICBsZXQgb2Zmc2V0ID0gdGhpcy5fbmV4dFNldCh0aGlzLl9yb3cpO1xuICAgICAgICBsZXQgc3RhcnRJbmZvOiBCYXJjb2RlSW5mbztcblxuICAgICAgICB3aGlsZSAoIXN0YXJ0SW5mbykge1xuICAgICAgICAgICAgc3RhcnRJbmZvID0gdGhpcy5fZmluZFBhdHRlcm4odGhpcy5TVEFSVF9QQVRURVJOLCBvZmZzZXQsIDAsIHRydWUpO1xuXG4gICAgICAgICAgICBpZiAoIXN0YXJ0SW5mbykge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBsZWFkaW5nV2hpdGVzcGFjZVN0YXJ0ID0gc3RhcnRJbmZvLnN0YXJ0IC0gKHN0YXJ0SW5mby5lbmQgLSBzdGFydEluZm8uc3RhcnQpO1xuXG4gICAgICAgICAgICBpZiAobGVhZGluZ1doaXRlc3BhY2VTdGFydCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX21hdGNoUmFuZ2UobGVhZGluZ1doaXRlc3BhY2VTdGFydCwgc3RhcnRJbmZvLnN0YXJ0LCAwKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RhcnRJbmZvO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgb2Zmc2V0ID0gc3RhcnRJbmZvLmVuZDtcbiAgICAgICAgICAgIHN0YXJ0SW5mbyA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX3ZlcmlmeVRyYWlsaW5nV2hpdGVzcGFjZShlbmRJbmZvOiBCYXJjb2RlSW5mbyk6IEJhcmNvZGVJbmZvIHtcbiAgICAgICAgY29uc3QgdHJhaWxpbmdXaGl0ZXNwYWNlRW5kID0gZW5kSW5mby5lbmQgKyAoZW5kSW5mby5lbmQgLSBlbmRJbmZvLnN0YXJ0KTtcblxuICAgICAgICBpZiAodHJhaWxpbmdXaGl0ZXNwYWNlRW5kIDwgdGhpcy5fcm93Lmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX21hdGNoUmFuZ2UoZW5kSW5mby5lbmQsIHRyYWlsaW5nV2hpdGVzcGFjZUVuZCwgMCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZW5kSW5mbztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZmluZEVuZChvZmZzZXQ6IG51bWJlciwgaXNXaGl0ZTogMCB8IDEpOiBCYXJjb2RlSW5mbyB7XG4gICAgICAgIGNvbnN0IGVuZEluZm8gPSB0aGlzLl9maW5kUGF0dGVybih0aGlzLlNUT1BfUEFUVEVSTiwgb2Zmc2V0LCBpc1doaXRlLCBmYWxzZSk7XG5cbiAgICAgICAgcmV0dXJuIGVuZEluZm8gIT09IG51bGwgPyB0aGlzLl92ZXJpZnlUcmFpbGluZ1doaXRlc3BhY2UoZW5kSW5mbykgOiBudWxsO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2NhbGN1bGF0ZUZpcnN0RGlnaXQoY29kZUZyZXF1ZW5jeTogbnVtYmVyKTogbnVtYmVyIHwgbnVsbCB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQ09ERV9GUkVRVUVOQ1kubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChjb2RlRnJlcXVlbmN5ID09PSBDT0RFX0ZSRVFVRU5DWVtpXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZGVjb2RlUGF5bG9hZChjb2RlOiBCYXJjb2RlSW5mbywgcmVzdWx0OiBBcnJheTxudW1iZXI+LCBkZWNvZGVkQ29kZXM6IEFycmF5PEJhcmNvZGVJbmZvPik6IEJhcmNvZGVJbmZvIHtcbiAgICAgICAgbGV0IGNvZGVGcmVxdWVuY3kgPSAweDA7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICAgICAgICAgIGNvZGUgPSB0aGlzLl9kZWNvZGVDb2RlKGNvZGUuZW5kKTtcbiAgICAgICAgICAgIGlmICghY29kZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvZGUuY29kZSA+PSB0aGlzLkNPREVfR19TVEFSVCkge1xuICAgICAgICAgICAgICAgIGNvZGUuY29kZSAtPSB0aGlzLkNPREVfR19TVEFSVDtcbiAgICAgICAgICAgICAgICBjb2RlRnJlcXVlbmN5IHw9IDEgPDwgKDUgLSBpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29kZUZyZXF1ZW5jeSB8PSAwIDw8ICg1IC0gaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaChjb2RlLmNvZGUpO1xuICAgICAgICAgICAgZGVjb2RlZENvZGVzLnB1c2goY29kZSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBmaXJzdERpZ2l0ID0gdGhpcy5fY2FsY3VsYXRlRmlyc3REaWdpdChjb2RlRnJlcXVlbmN5KTtcblxuICAgICAgICBpZiAoZmlyc3REaWdpdCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXN1bHQudW5zaGlmdChmaXJzdERpZ2l0KTtcblxuICAgICAgICBjb2RlID0gdGhpcy5fZmluZFBhdHRlcm4odGhpcy5NSURETEVfUEFUVEVSTiwgY29kZS5lbmQsIDEsIGZhbHNlKTtcblxuICAgICAgICBpZiAoY29kZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBkZWNvZGVkQ29kZXMucHVzaChjb2RlKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgICAgICAgICAgY29kZSA9IHRoaXMuX2RlY29kZUNvZGUoY29kZS5lbmQsIHRoaXMuQ09ERV9HX1NUQVJUKTtcblxuICAgICAgICAgICAgaWYgKCFjb2RlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRlY29kZWRDb2Rlcy5wdXNoKGNvZGUpO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goY29kZS5jb2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb2RlO1xuICAgIH1cblxuICAgIGRlY29kZSgpOiBCYXJjb2RlIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEFycmF5PG51bWJlcj4oKTtcbiAgICAgICAgY29uc3QgZGVjb2RlZENvZGVzID0gbmV3IEFycmF5PEJhcmNvZGVJbmZvPigpO1xuICAgICAgICBsZXQgcmVzdWx0SW5mbzogQmFyY29kZSA9IHt9O1xuICAgICAgICBsZXQgc3RhcnRJbmZvID0gdGhpcy5fZmluZFN0YXJ0KCk7XG5cbiAgICAgICAgaWYgKCFzdGFydEluZm8pIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNvZGU6IEJhcmNvZGVJbmZvID0ge1xuICAgICAgICAgICAgY29kZTogc3RhcnRJbmZvLmNvZGUsXG4gICAgICAgICAgICBzdGFydDogc3RhcnRJbmZvLnN0YXJ0LFxuICAgICAgICAgICAgZW5kOiBzdGFydEluZm8uZW5kXG4gICAgICAgIH07XG4gICAgICAgIGRlY29kZWRDb2Rlcy5wdXNoKGNvZGUpO1xuXG4gICAgICAgIGNvZGUgPSB0aGlzLl9kZWNvZGVQYXlsb2FkKGNvZGUsIHJlc3VsdCwgZGVjb2RlZENvZGVzKTtcblxuICAgICAgICBpZiAoIWNvZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29kZSA9IHRoaXMuX2ZpbmRFbmQoY29kZS5lbmQsIDApO1xuXG4gICAgICAgIGlmICghY29kZSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBkZWNvZGVkQ29kZXMucHVzaChjb2RlKTtcblxuICAgICAgICAvLyBDaGVja3N1bVxuICAgICAgICBpZiAoIXRoaXMuX2NoZWNrc3VtKHJlc3VsdCkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc3VwcGxlbWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc3Qgc3VwcGxlbWVudCA9IHRoaXMuX2RlY29kZUV4dGVuc2lvbnMoY29kZS5lbmQpO1xuICAgICAgICAgICAgaWYgKCFzdXBwbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGxhc3RDb2RlID0gc3VwcGxlbWVudC5kZWNvZGVkQ29kZXNbc3VwcGxlbWVudC5kZWNvZGVkQ29kZXMubGVuZ3RoIC0gMV0gYXMgQmFyY29kZUluZm87XG4gICAgICAgICAgICBjb25zdCBlbmRJbmZvID0ge1xuICAgICAgICAgICAgICAgIHN0YXJ0OiBsYXN0Q29kZS5zdGFydCArICgoKGxhc3RDb2RlLmVuZCAtIGxhc3RDb2RlLnN0YXJ0KSAvIDIpIHwgMCksXG4gICAgICAgICAgICAgICAgZW5kOiBsYXN0Q29kZS5lbmRcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5fdmVyaWZ5VHJhaWxpbmdXaGl0ZXNwYWNlKGVuZEluZm8pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlc3VsdEluZm8gPSB7XG4gICAgICAgICAgICAgICAgc3VwcGxlbWVudCxcbiAgICAgICAgICAgICAgICBjb2RlOiByZXN1bHQuam9pbignJykgKyBzdXBwbGVtZW50LmNvZGVcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29kZTogcmVzdWx0LmpvaW4oJycpLFxuICAgICAgICAgICAgc3RhcnQ6IHN0YXJ0SW5mby5zdGFydCxcbiAgICAgICAgICAgIGVuZDogY29kZS5lbmQsXG4gICAgICAgICAgICBzdGFydEluZm8sXG4gICAgICAgICAgICBkZWNvZGVkQ29kZXMsXG4gICAgICAgICAgICAuLi5yZXN1bHRJbmZvXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZGVjb2RlRXh0ZW5zaW9ucyhvZmZzZXQ6IG51bWJlcik6IEJhcmNvZGUge1xuICAgICAgICBjb25zdCBzdGFydCA9IHRoaXMuX25leHRTZXQodGhpcy5fcm93LCBvZmZzZXQpO1xuICAgICAgICBjb25zdCBzdGFydEluZm8gPSB0aGlzLl9maW5kUGF0dGVybihFWFRFTlNJT05fU1RBUlRfUEFUVEVSTiwgc3RhcnQsIDAsIGZhbHNlKTtcblxuICAgICAgICBpZiAoc3RhcnRJbmZvID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdXBwbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHRoaXMuc3VwcGxlbWVudHNbaV0uZGVjb2RlKHRoaXMuX3Jvdywgc3RhcnRJbmZvLmVuZCk7XG4gICAgICAgICAgICBpZiAocmVzdWx0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgY29kZTogcmVzdWx0LmNvZGUsXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0LFxuICAgICAgICAgICAgICAgICAgICBzdGFydEluZm8sXG4gICAgICAgICAgICAgICAgICAgIGVuZDogcmVzdWx0LmVuZCxcbiAgICAgICAgICAgICAgICAgICAgZGVjb2RlZENvZGVzOiByZXN1bHQuZGVjb2RlZENvZGVzXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfY2hlY2tzdW0ocmVzdWx0OiBBcnJheTxudW1iZXI+KTogYm9vbGVhbiB7XG4gICAgICAgIGxldCBzdW0gPSAwO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSByZXN1bHQubGVuZ3RoIC0gMjsgaSA+PSAwOyBpIC09IDIpIHtcbiAgICAgICAgICAgIHN1bSArPSByZXN1bHRbaV07XG4gICAgICAgIH1cblxuICAgICAgICBzdW0gKj0gMztcblxuICAgICAgICBmb3IgKGxldCBpID0gcmVzdWx0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaSAtPSAyKSB7XG4gICAgICAgICAgICBzdW0gKz0gcmVzdWx0W2ldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1bSAlIDEwID09PSAwO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBtZXJnZSB9IGZyb20gJy4uL2NvbW1vbi9tZXJnZSc7XG5pbXBvcnQgeyBCYXJjb2RlLCBCYXJjb2RlSW5mbywgQmFyY29kZVJlYWRlciwgQmFyY29kZVJlYWRlckNvbmZpZyB9IGZyb20gJy4vYmFyY29kZS1yZWFkZXInO1xuXG5jb25zdCBOID0gMTtcbmNvbnN0IFcgPSAzO1xuY29uc3QgU1RBUlRfUEFUVEVSTiA9IFtOLCBOLCBOLCBOXTtcbmNvbnN0IFNUT1BfUEFUVEVSTiA9IFtOLCBOLCBXXTtcbmNvbnN0IENPREVfUEFUVEVSTiA9IFtcbiAgICBbTiwgTiwgVywgVywgTl0sXG4gICAgW1csIE4sIE4sIE4sIFddLFxuICAgIFtOLCBXLCBOLCBOLCBXXSxcbiAgICBbVywgVywgTiwgTiwgTl0sXG4gICAgW04sIE4sIFcsIE4sIFddLFxuICAgIFtXLCBOLCBXLCBOLCBOXSxcbiAgICBbTiwgVywgVywgTiwgTl0sXG4gICAgW04sIE4sIE4sIFcsIFddLFxuICAgIFtXLCBOLCBOLCBXLCBOXSxcbiAgICBbTiwgVywgTiwgVywgTl1cbl07XG5jb25zdCBNQVhfQ09SUkVDVElPTl9GQUNUT1IgPSA1O1xuXG5leHBvcnQgY2xhc3MgSTJvZjVSZWFkZXIgZXh0ZW5kcyBCYXJjb2RlUmVhZGVyIHtcbiAgICBwcml2YXRlIF9iYXJTcGFjZVJhdGlvOiBbbnVtYmVyLCBudW1iZXJdO1xuXG4gICAgY29uc3RydWN0b3IoY29uZmlnPzogQmFyY29kZVJlYWRlckNvbmZpZykge1xuICAgICAgICBzdXBlcihtZXJnZSh7XG4gICAgICAgICAgICBub3JtYWxpemVCYXJTcGFjZVdpZHRoOiBmYWxzZSAvLyBOb3JtYWxpemUgdGhlIHdpZHRoIGRpZmZlcmVuY2UgYmV0d2VlbiBiYXJzIGFuZCBzcGFjZXNcbiAgICAgICAgfSwgY29uZmlnKSk7XG5cbiAgICAgICAgdGhpcy5fYmFyU3BhY2VSYXRpbyA9IFsxLCAxXTtcbiAgICAgICAgdGhpcy5fZm9ybWF0ID0gJ2kyb2Y1JztcblxuICAgICAgICBpZiAodGhpcy5jb25maWcubm9ybWFsaXplQmFyU3BhY2VXaWR0aCkge1xuICAgICAgICAgICAgdGhpcy5fc2luZ2xlQ29kZUVycm9yID0gMC4zODtcbiAgICAgICAgICAgIHRoaXMuX2F2ZXJhZ2VDb2RlRXJyb3IgPSAwLjA5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fc2luZ2xlQ29kZUVycm9yID0gMC43ODtcbiAgICAgICAgICAgIHRoaXMuX2F2ZXJhZ2VDb2RlRXJyb3IgPSAwLjM4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGVjb2RlKCk6IEJhcmNvZGUge1xuICAgICAgICBjb25zdCBzdGFydEluZm8gPSB0aGlzLl9maW5kU3RhcnQoKTtcblxuICAgICAgICBpZiAoIXN0YXJ0SW5mbykge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBlbmRJbmZvID0gdGhpcy5fZmluZEVuZCgpO1xuXG4gICAgICAgIGlmICghZW5kSW5mbykge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjb3VudGVycyA9IHRoaXMuX2ZpbGxDb3VudGVycyhzdGFydEluZm8uZW5kLCBlbmRJbmZvLnN0YXJ0LCAwKTtcblxuICAgICAgICBpZiAoY291bnRlcnMubGVuZ3RoICUgMTAgIT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEFycmF5PG51bWJlcj4oKTtcbiAgICAgICAgY29uc3QgZGVjb2RlZENvZGVzID0gbmV3IEFycmF5PEJhcmNvZGVJbmZvPigpO1xuXG4gICAgICAgIGRlY29kZWRDb2Rlcy5wdXNoKHN0YXJ0SW5mbyk7XG5cbiAgICAgICAgY29uc3QgY29kZSA9IHRoaXMuX2RlY29kZVBheWxvYWQoY291bnRlcnMsIHJlc3VsdCwgZGVjb2RlZENvZGVzKTtcblxuICAgICAgICBpZiAoIWNvZGUgfHwgcmVzdWx0Lmxlbmd0aCAlIDIgIT09IDAgfHwgcmVzdWx0Lmxlbmd0aCA8IDYpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVjb2RlZENvZGVzLnB1c2goZW5kSW5mbyk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvZGU6IHJlc3VsdC5qb2luKCcnKSxcbiAgICAgICAgICAgIHN0YXJ0OiBzdGFydEluZm8uc3RhcnQsXG4gICAgICAgICAgICBlbmQ6IGVuZEluZm8uZW5kLFxuICAgICAgICAgICAgc3RhcnRJbmZvLFxuICAgICAgICAgICAgZGVjb2RlZENvZGVzXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9tYXRjaFBhdHRlcm4oY291bnRlcjogQXJyYXk8bnVtYmVyPiwgY29kZTogUmVhZG9ubHlBcnJheTxudW1iZXI+KTogbnVtYmVyIHtcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLm5vcm1hbGl6ZUJhclNwYWNlV2lkdGgpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvdW50ZXJTdW06IFtudW1iZXIsIG51bWJlcl0gPSBbMCwgMF07XG4gICAgICAgICAgICBjb25zdCBjb2RlU3VtOiBbbnVtYmVyLCBudW1iZXJdID0gWzAsIDBdO1xuICAgICAgICAgICAgY29uc3QgY29ycmVjdGlvbjogW251bWJlciwgbnVtYmVyXSA9IFswLCAwXTtcbiAgICAgICAgICAgIGNvbnN0IGNvcnJlY3Rpb25SYXRpbyA9IE1BWF9DT1JSRUNUSU9OX0ZBQ1RPUjtcbiAgICAgICAgICAgIGNvbnN0IGNvcnJlY3Rpb25SYXRpb0ludmVyc2UgPSAxIC8gY29ycmVjdGlvblJhdGlvO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50ZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb3VudGVyU3VtW2kgJSAyXSArPSBjb3VudGVyW2ldO1xuICAgICAgICAgICAgICAgIGNvZGVTdW1baSAlIDJdICs9IGNvZGVbaV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvcnJlY3Rpb25bMF0gPSBjb2RlU3VtWzBdIC8gY291bnRlclN1bVswXTtcbiAgICAgICAgICAgIGNvcnJlY3Rpb25bMV0gPSBjb2RlU3VtWzFdIC8gY291bnRlclN1bVsxXTtcblxuICAgICAgICAgICAgY29ycmVjdGlvblswXSA9IE1hdGgubWF4KE1hdGgubWluKGNvcnJlY3Rpb25bMF0sIGNvcnJlY3Rpb25SYXRpbyksIGNvcnJlY3Rpb25SYXRpb0ludmVyc2UpO1xuICAgICAgICAgICAgY29ycmVjdGlvblsxXSA9IE1hdGgubWF4KE1hdGgubWluKGNvcnJlY3Rpb25bMV0sIGNvcnJlY3Rpb25SYXRpbyksIGNvcnJlY3Rpb25SYXRpb0ludmVyc2UpO1xuICAgICAgICAgICAgdGhpcy5fYmFyU3BhY2VSYXRpbyA9IGNvcnJlY3Rpb247XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnRlci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvdW50ZXJbaV0gKj0gdGhpcy5fYmFyU3BhY2VSYXRpb1tpICUgMl07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VwZXIuX21hdGNoUGF0dGVybihjb3VudGVyLCBjb2RlKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2ZpbmRTdGFydCgpOiBCYXJjb2RlSW5mbyB7XG4gICAgICAgIGxldCBvZmZzZXQgPSB0aGlzLl9uZXh0U2V0KHRoaXMuX3Jvdyk7XG4gICAgICAgIGxldCBzdGFydEluZm86IEJhcmNvZGVJbmZvO1xuXG4gICAgICAgIHdoaWxlICghc3RhcnRJbmZvKSB7XG4gICAgICAgICAgICBzdGFydEluZm8gPSB0aGlzLl9maW5kUGF0dGVybihTVEFSVF9QQVRURVJOLCBvZmZzZXQsIDAsIHRydWUpO1xuICAgICAgICAgICAgaWYgKCFzdGFydEluZm8pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgbmFycm93QmFyV2lkdGggPSAoc3RhcnRJbmZvLmVuZCAtIHN0YXJ0SW5mby5zdGFydCkgPj4gMjtcbiAgICAgICAgICAgIGNvbnN0IGxlYWRpbmdXaGl0ZXNwYWNlU3RhcnQgPSBzdGFydEluZm8uc3RhcnQgLSBuYXJyb3dCYXJXaWR0aCAqIDEwO1xuXG4gICAgICAgICAgICBpZiAobGVhZGluZ1doaXRlc3BhY2VTdGFydCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX21hdGNoUmFuZ2UobGVhZGluZ1doaXRlc3BhY2VTdGFydCwgc3RhcnRJbmZvLnN0YXJ0LCAwKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RhcnRJbmZvO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgb2Zmc2V0ID0gc3RhcnRJbmZvLmVuZDtcbiAgICAgICAgICAgIHN0YXJ0SW5mbyA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX3ZlcmlmeVRyYWlsaW5nV2hpdGVzcGFjZShlbmRJbmZvOiBCYXJjb2RlSW5mbyk6IEJhcmNvZGVJbmZvIHtcbiAgICAgICAgY29uc3QgdHJhaWxpbmdXaGl0ZXNwYWNlRW5kID0gZW5kSW5mby5lbmQgKyAoZW5kSW5mby5lbmQgLSBlbmRJbmZvLnN0YXJ0KSAvIDI7XG5cbiAgICAgICAgaWYgKHRyYWlsaW5nV2hpdGVzcGFjZUVuZCA8IHRoaXMuX3Jvdy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9tYXRjaFJhbmdlKGVuZEluZm8uZW5kLCB0cmFpbGluZ1doaXRlc3BhY2VFbmQsIDApKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVuZEluZm87XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2ZpbmRFbmQoKTogQmFyY29kZUluZm8ge1xuICAgICAgICB0aGlzLl9yb3cucmV2ZXJzZSgpO1xuXG4gICAgICAgIGNvbnN0IGVuZEluZm8gPSB0aGlzLl9maW5kUGF0dGVybihTVE9QX1BBVFRFUk4sIHVuZGVmaW5lZCwgMCwgZmFsc2UpO1xuXG4gICAgICAgIHRoaXMuX3Jvdy5yZXZlcnNlKCk7XG5cbiAgICAgICAgaWYgKGVuZEluZm8gPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcmV2ZXJzZSBudW1iZXJzXG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gZW5kSW5mby5zdGFydDtcbiAgICAgICAgZW5kSW5mby5zdGFydCA9IHRoaXMuX3Jvdy5sZW5ndGggLSBlbmRJbmZvLmVuZDtcbiAgICAgICAgZW5kSW5mby5lbmQgPSB0aGlzLl9yb3cubGVuZ3RoIC0gc3RhcnQ7XG5cbiAgICAgICAgcmV0dXJuIGVuZEluZm8gIT09IG51bGwgPyB0aGlzLl92ZXJpZnlUcmFpbGluZ1doaXRlc3BhY2UoZW5kSW5mbykgOiBudWxsO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZGVjb2RlQ29kZShjb3VudGVyOiBBcnJheTxudW1iZXI+KTogQmFyY29kZUluZm8ge1xuICAgICAgICBjb25zdCBiZXN0TWF0Y2g6IEJhcmNvZGVJbmZvID0ge1xuICAgICAgICAgICAgZXJyb3I6IE51bWJlci5NQVhfVkFMVUUsXG4gICAgICAgICAgICBjb2RlOiAtMSxcbiAgICAgICAgICAgIHN0YXJ0OiAwLFxuICAgICAgICAgICAgZW5kOiAwXG4gICAgICAgIH07XG5cbiAgICAgICAgZm9yIChsZXQgY29kZSA9IDA7IGNvZGUgPCBDT0RFX1BBVFRFUk4ubGVuZ3RoOyBjb2RlKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGVycm9yID0gdGhpcy5fbWF0Y2hQYXR0ZXJuKGNvdW50ZXIsIENPREVfUEFUVEVSTltjb2RlXSk7XG4gICAgICAgICAgICBpZiAoZXJyb3IgPCBiZXN0TWF0Y2guZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBiZXN0TWF0Y2guY29kZSA9IGNvZGU7XG4gICAgICAgICAgICAgICAgYmVzdE1hdGNoLmVycm9yID0gZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYmVzdE1hdGNoLmVycm9yIDwgdGhpcy5BVkVSQUdFX0NPREVfRVJST1IgPyBiZXN0TWF0Y2ggOiBudWxsO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZGVjb2RlUGF5bG9hZChjb3VudGVyczogUmVhZG9ubHlBcnJheTxudW1iZXI+LCByZXN1bHQ6IEFycmF5PG51bWJlcj4sIGRlY29kZWRDb2RlczogQXJyYXk8QmFyY29kZUluZm8+KTogW0JhcmNvZGVJbmZvLCBCYXJjb2RlSW5mb10ge1xuICAgICAgICBjb25zdCBjb3VudGVyTGVuZ3RoID0gY291bnRlcnMubGVuZ3RoO1xuICAgICAgICBjb25zdCBjb3VudGVyMCA9IFswLCAwLCAwLCAwLCAwXTtcbiAgICAgICAgY29uc3QgY291bnRlcjEgPSBbMCwgMCwgMCwgMCwgMF07XG4gICAgICAgIGxldCBjb2RlMDogQmFyY29kZUluZm87XG4gICAgICAgIGxldCBjb2RlMTogQmFyY29kZUluZm87XG4gICAgICAgIGxldCBwb3MgPSAwO1xuXG4gICAgICAgIHdoaWxlIChwb3MgPCBjb3VudGVyTGVuZ3RoKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvdW50ZXIwW2ldID0gY291bnRlcnNbcG9zXSAqIHRoaXMuX2JhclNwYWNlUmF0aW9bMF07XG4gICAgICAgICAgICAgICAgY291bnRlcjFbaV0gPSBjb3VudGVyc1twb3MgKyAxXSAqIHRoaXMuX2JhclNwYWNlUmF0aW9bMV07XG4gICAgICAgICAgICAgICAgcG9zICs9IDI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvZGUwID0gdGhpcy5fZGVjb2RlQ29kZShjb3VudGVyMCk7XG4gICAgICAgICAgICBpZiAoIWNvZGUwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvZGUxID0gdGhpcy5fZGVjb2RlQ29kZShjb3VudGVyMSk7XG4gICAgICAgICAgICBpZiAoIWNvZGUxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGNvZGUwLmNvZGUsIGNvZGUxLmNvZGUpO1xuICAgICAgICAgICAgZGVjb2RlZENvZGVzLnB1c2goY29kZTAsIGNvZGUxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBbY29kZTAsIGNvZGUxXTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb2RlMTI4UmVhZGVyIH0gZnJvbSAnLi9jb2RlLTEyOC1yZWFkZXInO1xuaW1wb3J0IHsgQ29kZTM5UmVhZGVyIH0gZnJvbSAnLi9jb2RlLTM5LXJlYWRlcic7XG5pbXBvcnQgeyBDb2RlMzlWSU5SZWFkZXIgfSBmcm9tICcuL2NvZGUtMzktdmluLXJlYWRlcic7XG5pbXBvcnQgeyBDb2RhYmFyUmVhZGVyIH0gZnJvbSAnLi9jb2RhYmFyLXJlYWRlcic7XG5pbXBvcnQgeyBFQU5SZWFkZXIgfSBmcm9tICcuL2Vhbi1yZWFkZXInO1xuaW1wb3J0IHsgRUFOOFJlYWRlciB9IGZyb20gJy4vZWFuLTgtcmVhZGVyJztcbmltcG9ydCB7IEVBTjJSZWFkZXIgfSBmcm9tICcuL2Vhbi0yLXJlYWRlcic7XG5pbXBvcnQgeyBFQU41UmVhZGVyIH0gZnJvbSAnLi9lYW4tNS1yZWFkZXInO1xuaW1wb3J0IHsgVVBDUmVhZGVyIH0gZnJvbSAnLi91cGMtcmVhZGVyJztcbmltcG9ydCB7IFVQQ0VSZWFkZXIgfSBmcm9tICcuL3VwYy1lLXJlYWRlcic7XG5pbXBvcnQgeyBJMm9mNVJlYWRlciB9IGZyb20gJy4vaTJvZjUtcmVhZGVyJztcbmltcG9ydCB7IFR3b09mRml2ZVJlYWRlciB9IGZyb20gJy4vMm9mNS1yZWFkZXInO1xuaW1wb3J0IHsgQ29kZTkzUmVhZGVyIH0gZnJvbSAnLi9jb2RlLTkzLXJlYWRlcic7XG5cbmV4cG9ydCBjb25zdCBSZWFkZXJzID0ge1xuICAgIGNvZGVfMTI4X3JlYWRlcjogQ29kZTEyOFJlYWRlcixcbiAgICBlYW5fcmVhZGVyOiBFQU5SZWFkZXIsXG4gICAgZWFuXzVfcmVhZGVyOiBFQU41UmVhZGVyLFxuICAgIGVhbl8yX3JlYWRlcjogRUFOMlJlYWRlcixcbiAgICBlYW5fOF9yZWFkZXI6IEVBTjhSZWFkZXIsXG4gICAgY29kZV8zOV9yZWFkZXI6IENvZGUzOVJlYWRlcixcbiAgICBjb2RlXzM5X3Zpbl9yZWFkZXI6IENvZGUzOVZJTlJlYWRlcixcbiAgICBjb2RhYmFyX3JlYWRlcjogQ29kYWJhclJlYWRlcixcbiAgICB1cGNfcmVhZGVyOiBVUENSZWFkZXIsXG4gICAgdXBjX2VfcmVhZGVyOiBVUENFUmVhZGVyLFxuICAgIGkyb2Y1X3JlYWRlcjogSTJvZjVSZWFkZXIsXG4gICAgJzJvZjVfcmVhZGVyJzogVHdvT2ZGaXZlUmVhZGVyLFxuICAgIGNvZGVfOTNfcmVhZGVyOiBDb2RlOTNSZWFkZXJcbn07XG4iLCJpbXBvcnQgeyBCYXJjb2RlSW5mbywgQmFyY29kZVJlYWRlciwgQmFyY29kZVJlYWRlckNvbmZpZyB9IGZyb20gJy4vYmFyY29kZS1yZWFkZXInO1xuaW1wb3J0IHsgRUFOUmVhZGVyIH0gZnJvbSAnLi9lYW4tcmVhZGVyJztcblxuY29uc3QgQ09ERV9GUkVRVUVOQ1kgPSBbWzU2LCA1MiwgNTAsIDQ5LCA0NCwgMzgsIDM1LCA0MiwgNDEsIDM3XSwgWzcsIDExLCAxMywgMTQsIDE5LCAyNSwgMjgsIDIxLCAyMiwgMjZdXTtcblxuZXhwb3J0IGNsYXNzIFVQQ0VSZWFkZXIgZXh0ZW5kcyBFQU5SZWFkZXIge1xuICAgIGdldCBTVE9QX1BBVFRFUk4oKSB7XG4gICAgICAgIHJldHVybiBbMSAvIDYgKiA3LCAxIC8gNiAqIDcsIDEgLyA2ICogNywgMSAvIDYgKiA3LCAxIC8gNiAqIDcsIDEgLyA2ICogN107XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoY29uZmlnPzogQmFyY29kZVJlYWRlckNvbmZpZywgc3VwcGxlbWVudHM/OiBBcnJheTxCYXJjb2RlUmVhZGVyPikge1xuICAgICAgICBzdXBlcihjb25maWcsIHN1cHBsZW1lbnRzKTtcblxuICAgICAgICB0aGlzLl9mb3JtYXQgPSAndXBjX2UnO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZGVjb2RlUGF5bG9hZChjb2RlOiBCYXJjb2RlSW5mbywgcmVzdWx0OiBBcnJheTxudW1iZXI+LCBkZWNvZGVkQ29kZXM6IEFycmF5PEJhcmNvZGVJbmZvPik6IEJhcmNvZGVJbmZvIHtcbiAgICAgICAgbGV0IGNvZGVGcmVxdWVuY3kgPSAweDA7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICAgICAgICAgIGNvZGUgPSB0aGlzLl9kZWNvZGVDb2RlKGNvZGUuZW5kKTtcbiAgICAgICAgICAgIGlmICghY29kZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvZGUuY29kZSA+PSB0aGlzLkNPREVfR19TVEFSVCkge1xuICAgICAgICAgICAgICAgIGNvZGUuY29kZSA9IGNvZGUuY29kZSAtIHRoaXMuQ09ERV9HX1NUQVJUO1xuICAgICAgICAgICAgICAgIGNvZGVGcmVxdWVuY3kgfD0gMSA8PCAoNSAtIGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goY29kZS5jb2RlKTtcbiAgICAgICAgICAgIGRlY29kZWRDb2Rlcy5wdXNoKGNvZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLl9kZXRlcm1pbmVQYXJpdHkoY29kZUZyZXF1ZW5jeSwgcmVzdWx0KSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29kZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9kZXRlcm1pbmVQYXJpdHkoY29kZUZyZXF1ZW5jeTogbnVtYmVyLCByZXN1bHQ6IEFycmF5PG51bWJlcj4pOiBib29sZWFuIHtcbiAgICAgICAgZm9yIChsZXQgbnJTeXN0ZW0gPSAwOyBuclN5c3RlbSA8IENPREVfRlJFUVVFTkNZLmxlbmd0aDsgbnJTeXN0ZW0rKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBDT0RFX0ZSRVFVRU5DWVtuclN5c3RlbV0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoY29kZUZyZXF1ZW5jeSA9PT0gQ09ERV9GUkVRVUVOQ1lbbnJTeXN0ZW1dW2ldKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC51bnNoaWZ0KG5yU3lzdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goaSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfY29udmVydFRvVVBDQShyZXN1bHQ6IEFycmF5PG51bWJlcj4pOiBBcnJheTxudW1iZXI+IHtcbiAgICAgICAgY29uc3QgbGFzdERpZ2l0ID0gcmVzdWx0W3Jlc3VsdC5sZW5ndGggLSAyXTtcbiAgICAgICAgbGV0IHVwY2EgPSBbcmVzdWx0WzBdXTtcblxuICAgICAgICBpZiAobGFzdERpZ2l0IDw9IDIpIHtcbiAgICAgICAgICAgIHVwY2EgPSB1cGNhLmNvbmNhdChyZXN1bHQuc2xpY2UoMSwgMykpLmNvbmNhdChbbGFzdERpZ2l0LCAwLCAwLCAwLCAwXSkuY29uY2F0KHJlc3VsdC5zbGljZSgzLCA2KSk7XG4gICAgICAgIH0gZWxzZSBpZiAobGFzdERpZ2l0ID09PSAzKSB7XG4gICAgICAgICAgICB1cGNhID0gdXBjYS5jb25jYXQocmVzdWx0LnNsaWNlKDEsIDQpKS5jb25jYXQoWzAsIDAsIDAsIDAsIDBdKS5jb25jYXQocmVzdWx0LnNsaWNlKDQsIDYpKTtcbiAgICAgICAgfSBlbHNlIGlmIChsYXN0RGlnaXQgPT09IDQpIHtcbiAgICAgICAgICAgIHVwY2EgPSB1cGNhLmNvbmNhdChyZXN1bHQuc2xpY2UoMSwgNSkpLmNvbmNhdChbMCwgMCwgMCwgMCwgMCwgcmVzdWx0WzVdXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB1cGNhID0gdXBjYS5jb25jYXQocmVzdWx0LnNsaWNlKDEsIDYpKS5jb25jYXQoWzAsIDAsIDAsIDAsIGxhc3REaWdpdF0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdXBjYS5wdXNoKHJlc3VsdFtyZXN1bHQubGVuZ3RoIC0gMV0pO1xuICAgICAgICByZXR1cm4gdXBjYTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2NoZWNrc3VtKHJlc3VsdDogQXJyYXk8bnVtYmVyPik6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gc3VwZXIuX2NoZWNrc3VtKHRoaXMuX2NvbnZlcnRUb1VQQ0EocmVzdWx0KSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9maW5kRW5kKG9mZnNldDogbnVtYmVyLCBpc1doaXRlOiAwIHwgMSkge1xuICAgICAgICBpc1doaXRlID0gMTtcbiAgICAgICAgcmV0dXJuIHN1cGVyLl9maW5kRW5kKG9mZnNldCwgaXNXaGl0ZSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF92ZXJpZnlUcmFpbGluZ1doaXRlc3BhY2UoZW5kSW5mbzogQmFyY29kZUluZm8pOiBCYXJjb2RlSW5mbyB7XG4gICAgICAgIGNvbnN0IHRyYWlsaW5nV2hpdGVzcGFjZUVuZCA9IGVuZEluZm8uZW5kICsgKGVuZEluZm8uZW5kIC0gZW5kSW5mby5zdGFydCkgLyAyO1xuXG4gICAgICAgIGlmICh0cmFpbGluZ1doaXRlc3BhY2VFbmQgPCB0aGlzLl9yb3cubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fbWF0Y2hSYW5nZShlbmRJbmZvLmVuZCwgdHJhaWxpbmdXaGl0ZXNwYWNlRW5kLCAwKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbmRJbmZvO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufSIsImltcG9ydCB7IEJhcmNvZGUsIEJhcmNvZGVSZWFkZXIsIEJhcmNvZGVSZWFkZXJDb25maWcgfSBmcm9tICcuL2JhcmNvZGUtcmVhZGVyJztcbmltcG9ydCB7IEVBTlJlYWRlciB9IGZyb20gJy4vZWFuLXJlYWRlcic7XG5cbmV4cG9ydCBjbGFzcyBVUENSZWFkZXIgZXh0ZW5kcyBFQU5SZWFkZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZz86IEJhcmNvZGVSZWFkZXJDb25maWcsIHN1cHBsZW1lbnRzPzogQXJyYXk8QmFyY29kZVJlYWRlcj4pIHtcbiAgICAgICAgc3VwZXIoY29uZmlnLCBzdXBwbGVtZW50cyk7XG5cbiAgICAgICAgdGhpcy5fZm9ybWF0ID0gJ3VwY19hJztcbiAgICB9XG5cbiAgICBkZWNvZGUoKTogQmFyY29kZSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLmRlY29kZSgpO1xuXG4gICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LmNvZGUgJiYgcmVzdWx0LmNvZGUubGVuZ3RoID09PSAxMyAmJiByZXN1bHQuY29kZS5jaGFyQXQoMCkgPT09ICcwJykge1xuICAgICAgICAgICAgcmVzdWx0LmNvZGUgPSByZXN1bHQuY29kZS5zdWJzdHJpbmcoMSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=