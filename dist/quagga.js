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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9RdWFnZ2Evd2VicGFjay9teU1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vUXVhZ2dhL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1F1YWdnYS8vVXNlcnMvYWRvbXJhdGNoZXYvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy9Vc2Vycy9hZG9tcmF0Y2hldi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy9Vc2Vycy9hZG9tcmF0Y2hldi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yLmpzIiwid2VicGFjazovL1F1YWdnYS8vVXNlcnMvYWRvbXJhdGNoZXYvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy9Vc2Vycy9hZG9tcmF0Y2hldi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly9RdWFnZ2EvL1VzZXJzL2Fkb21yYXRjaGV2L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL1F1YWdnYS8vVXNlcnMvYWRvbXJhdGNoZXYvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0LmpzIiwid2VicGFjazovL1F1YWdnYS8vVXNlcnMvYWRvbXJhdGNoZXYvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy9Vc2Vycy9hZG9tcmF0Y2hldi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly9RdWFnZ2EvL1VzZXJzL2Fkb21yYXRjaGV2L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9RdWFnZ2EvL1VzZXJzL2Fkb21yYXRjaGV2L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL1F1YWdnYS8vVXNlcnMvYWRvbXJhdGNoZXYvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly9RdWFnZ2EvL1VzZXJzL2Fkb21yYXRjaGV2L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL1F1YWdnYS8vVXNlcnMvYWRvbXJhdGNoZXYvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc3VwZXJQcm9wQmFzZS5qcyIsIndlYnBhY2s6Ly9RdWFnZ2EvL1VzZXJzL2Fkb21yYXRjaGV2L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovL1F1YWdnYS8vVXNlcnMvYWRvbXJhdGNoZXYvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL1F1YWdnYS8vVXNlcnMvYWRvbXJhdGNoZXYvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwid2VicGFjazovL1F1YWdnYS8vVXNlcnMvYWRvbXJhdGNoZXYvbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS1tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy9Vc2Vycy9hZG9tcmF0Y2hldi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovL1F1YWdnYS8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL2FuYWx5dGljcy9yZXN1bHQtY29sbGVjdG9yLnRzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9jb21tb24vY2x1c3Rlci50cyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvY29tbW9uL2V2ZW50cy50cyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvY29tbW9uL2hzdjJyZ2IudHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL2NvbW1vbi9pbWFnZS1kZWJ1Zy50cyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvY29tbW9uL2ltYWdlLXdyYXBwZXIudHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL2NvbW1vbi9tZWRpYS1kZXZpY2VzLnRzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9jb21tb24vbWVyZ2UudHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL2NvbmZpZy9jb25maWcuZGV2LnRzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9kZWNvZGVyL2JhcmNvZGUtZGVjb2Rlci50cyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvZGVjb2Rlci9icmVzZW5oYW0udHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL2lucHV0L2NhbWVyYS1hY2Nlc3MudHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL2lucHV0L2V4aWYtaGVscGVyLnRzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9pbnB1dC9mcmFtZS1ncmFiYmVyLnRzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9pbnB1dC9pbWFnZS1sb2FkZXIudHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL2lucHV0L2ltYWdlLXN0cmVhbS50cyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvaW5wdXQvaW5wdXQtc3RyZWFtLXV0aWxzLnRzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9pbnB1dC9pbnB1dC1zdHJlYW0udHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL2lucHV0L2xpdmUtc3RyZWFtLnRzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9pbnB1dC92aWRlby1zdHJlYW0udHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL2xvY2F0b3IvYmFyY29kZS1sb2NhdG9yLXV0aWxzLnRzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9sb2NhdG9yL2JhcmNvZGUtbG9jYXRvci50cyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvbG9jYXRvci9yYXN0ZXJpemVyLnRzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9sb2NhdG9yL3NrZWxldG9uaXplci5qcyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvbG9jYXRvci90cmFjZXIudHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL3F1YWdnYS50cyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvcmVhZGVyLzJvZjUtcmVhZGVyLnRzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9yZWFkZXIvYmFyY29kZS1yZWFkZXIudHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL3JlYWRlci9jb2RhYmFyLXJlYWRlci50cyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvcmVhZGVyL2NvZGUtMTI4LXJlYWRlci50cyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvcmVhZGVyL2NvZGUtMzktcmVhZGVyLnRzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9yZWFkZXIvY29kZS0zOS12aW4tcmVhZGVyLnRzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9yZWFkZXIvY29kZS05My1yZWFkZXIudHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL3JlYWRlci9lYW4tMi1yZWFkZXIudHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL3JlYWRlci9lYW4tNS1yZWFkZXIudHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL3JlYWRlci9lYW4tOC1yZWFkZXIudHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL3JlYWRlci9lYW4tcmVhZGVyLnRzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9yZWFkZXIvaTJvZjUtcmVhZGVyLnRzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9yZWFkZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL3JlYWRlci91cGMtZS1yZWFkZXIudHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL3JlYWRlci91cGMtcmVhZGVyLnRzIl0sIm5hbWVzIjpbIlJlc3VsdENvbGxlY3RvciIsImNvbmZpZyIsIl9yZXN1bHRzIiwiQXJyYXkiLCJfY29uZmlnIiwiX2NhcGFjaXR5IiwiY2FwYWNpdHkiLCJfY2FwdHVyZSIsImNhcHR1cmUiLCJfY2FudmFzIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiX2NvbnRleHQiLCJnZXRDb250ZXh0IiwiZGF0YSIsImltYWdlV2lkdGgiLCJpbWFnZUhlaWdodCIsImNvZGVSZXN1bHQiLCJfY29udGFpbnMiLCJfcGFzc2VzRmlsdGVyIiwicmVzdWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJJbWFnZURlYnVnIiwiZHJhd0ltYWdlIiwiZnJhbWUiLCJ0b0RhdGFVUkwiLCJwdXNoIiwiYmxhY2tsaXN0Iiwic29tZSIsIml0ZW0iLCJPYmplY3QiLCJrZXlzIiwiZXZlcnkiLCJrZXkiLCJmaWx0ZXIiLCJDbHVzdGVyIiwibW9tZW50cyIsInRocmVzaG9sZCIsImNsdXN0ZXJzIiwiZm9yRWFjaCIsIm1vbWVudCIsIm1hdGNoaW5nQ2x1c3RlciIsImZpbmQiLCJjbHVzdGVyIiwiZml0cyIsImFkZCIsIl90aHJlc2hvbGQiLCJfbW9tZW50cyIsIl9jZW50ZXIiLCJyYWQiLCJ4IiwieSIsInBvaW50IiwicmVkdWNlIiwic3VtIiwicCIsImxlbmd0aCIsIk1hdGgiLCJjb3MiLCJzaW4iLCJzaW1pbGFyaXR5IiwiYWJzIiwiZXZlbnRzIiwiRXZlbnRzIiwiZXZlbnQiLCJjYWxsYmFjayIsImFzeW5jIiwic3Vic2NyaXB0aW9uIiwiZ2V0RXZlbnQiLCJzdWJzY3JpcHRpb25zIiwidHlwZSIsImV2ZW50SXRlbSIsIm9uY2UiLCJwdWJsaXNoU3Vic2NyaXB0aW9uIiwic3Vic2NyaWJlIiwiZXZlbnROYW1lIiwic2V0VGltZW91dCIsImhzdjJyZ2IiLCJoc3YiLCJyZ2IiLCJoIiwicyIsInYiLCJjIiwibSIsInIiLCJnIiwiYiIsImRyYXdQYXRoIiwicGF0aCIsImNvbnRleHQiLCJjb2xvciIsImxpbmVXaWR0aCIsInN0cm9rZVN0eWxlIiwiZmlsbFN0eWxlIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwic2xpY2UiLCJsaW5lVG8iLCJjbG9zZVBhdGgiLCJzdHJva2UiLCJpbWFnZURhdGEiLCJjYW52YXNEYXRhIiwiZ2V0SW1hZ2VEYXRhIiwiaW1hZ2VJbmRleCIsImNhbnZhc0luZGV4IiwidmFsdWUiLCJwdXRJbWFnZURhdGEiLCJJbWFnZVdyYXBwZXIiLCJzaXplIiwiYXJyYXlUeXBlIiwiaW5pdGlhbGl6ZSIsIlVpbnQ4QXJyYXkiLCJmaWxsIiwiYm9yZGVyIiwiaW1hZ2VXcmFwcGVyIiwiZnJvbVgiLCJmcm9tWSIsInNpemVZIiwic2l6ZVgiLCJpIiwibGFiZWxDb3VudCIsImxhYmVsU3VtIiwibTAwIiwibTAxIiwibTEwIiwibTExIiwibTAyIiwibTIwIiwidGhldGEiLCJ5c3EiLCJ2YWwiLCJsYWJlbCIsIlBJIiwiUElfNCIsImlzTmFOIiwieF8iLCJ5XyIsIm11MTEiLCJtdTAyIiwibXUyMCIsInRtcCIsImF0YW4iLCJzY2FsZSIsImN1cnJlbnQiLCJwaXhlbCIsImdldCIsIndoaXRlUmdiIiwiYmxhY2tSZ2IiLCJlbnVtZXJhdGVEZXZpY2VzIiwibmF2aWdhdG9yIiwibWVkaWFEZXZpY2VzIiwiUHJvbWlzZSIsInJlamVjdCIsIkVycm9yIiwiZ2V0VXNlck1lZGlhIiwiY29uc3RyYWludHMiLCJtZXJnZSIsImlzT2JqZWN0Iiwib2JqIiwib2JqZWN0cyIsInByZXYiLCJwVmFsIiwib1ZhbCIsImlzQXJyYXkiLCJpbnB1dFN0cmVhbSIsIm5hbWUiLCJmYWNpbmdNb2RlIiwiYXJlYSIsInRvcCIsInJpZ2h0IiwibGVmdCIsImJvdHRvbSIsInNpbmdsZUNoYW5uZWwiLCJsb2NhdGUiLCJudW1PZldvcmtlcnMiLCJkZWNvZGVyIiwicmVhZGVycyIsImRlYnVnIiwiZHJhd0JvdW5kaW5nQm94Iiwic2hvd0ZyZXF1ZW5jeSIsImRyYXdTY2FubGluZSIsInNob3dQYXR0ZXJuIiwibG9jYXRvciIsImhhbGZTYW1wbGUiLCJwYXRjaFNpemUiLCJzaG93Q2FudmFzIiwic2hvd1BhdGNoZXMiLCJzaG93Rm91bmRQYXRjaGVzIiwic2hvd1NrZWxldG9uIiwic2hvd0xhYmVscyIsInNob3dQYXRjaExhYmVscyIsInNob3dSZW1haW5pbmdQYXRjaExhYmVscyIsImJveEZyb21QYXRjaGVzIiwic2hvd1RyYW5zZm9ybWVkIiwic2hvd1RyYW5zZm9ybWVkQm94Iiwic2hvd0JCIiwiQmFyY29kZURlY29kZXIiLCJpbnB1dEltYWdlV3JhcHBlciIsIl9pbnB1dEltYWdlV3JhcHBlciIsIl9iYXJjb2RlUmVhZGVycyIsInByb2Nlc3MiLCJkZWJ1Z0RpdiIsInF1ZXJ5U2VsZWN0b3IiLCJfZnJlcXVlbmN5Q2FudmFzIiwiY2xhc3NOYW1lIiwiYXBwZW5kQ2hpbGQiLCJzdHlsZSIsImRpc3BsYXkiLCJfcGF0dGVybkNhbnZhcyIsIm92ZXJsYXlDYW52YXMiLCJfb3ZlcmxheUNvbnRleHQiLCJfaW5pdFJlYWRlcnMiLCJib3hlcyIsImJhcmNvZGVzIiwibXVsdGlwbGUiLCJib3giLCJkZWNvZGVGcm9tQm91bmRpbmdCb3giLCJfZHJhd1BhdGgiLCJsaW5lIiwiX2dldExpbmUiLCJhbmdsZSIsImF0YW4yIiwiX2dldEV4dGVuZGVkTGluZSIsIl90cnlEZWNvZGUiLCJfdHJ5RGVjb2RlQnJ1dGVGb3JjZSIsInBhdHRlcm4iLCJiYXJjb2RlTGluZSIsInJlYWRlckNvbmZpZyIsInJlYWRlciIsImNvbmZpZ3VyYXRpb24iLCJzdXBwbGVtZW50cyIsImZvcm1hdCIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJzdXBwbGVtZW50IiwiUmVhZGVycyIsIkZPUk1BVCIsIkpTT04iLCJzdHJpbmdpZnkiLCJleHRlbmRMaW5lIiwiYW1vdW50IiwiZXh0ZW5zaW9uIiwibGluZUxlbmd0aCIsInNxcnQiLCJleHRlbnNpb25MZW5ndGgiLCJpbkltYWdlV2l0aEJvcmRlciIsIkJyZXNlbmhhbSIsImdldEJhcmNvZGVMaW5lIiwiX3ByaW50RnJlcXVlbmN5IiwidG9CaW5hcnlMaW5lIiwiX3ByaW50UGF0dGVybiIsImRlY29kZVBhdHRlcm4iLCJsaW5lQW5nbGUiLCJzaWRlTGVuZ3RoIiwic2xpY2VzIiwieGRpciIsInlkaXIiLCJkaXIiLCJmaWxsUmVjdCIsIlNsb3BlIiwicDEiLCJwMiIsIngwIiwieTAiLCJ4MSIsInkxIiwic3RlZXAiLCJtaW4iLCJtYXgiLCJyZWFkIiwiYSIsImRlbHRheCIsImRlbHRheSIsImVycm9yIiwieXN0ZXAiLCJjZW50ZXIiLCJleHRyZW1hIiwiclRocmVzaG9sZCIsImN1cnJlbnREaXIiLCJVcCIsIkRvd24iLCJwb3MiLCJzbG9wZSIsInNsb3BlMiIsImoiLCJfc3RyZWFtIiwiQ2FtZXJhQWNjZXNzIiwicmVxdWVzdCIsInZpZGVvIiwidmlkZW9Db25zdHJhaW50cyIsIm5vcm1hbGl6ZWRDb25zdHJhaW50cyIsInBpY2tDb25zdHJhaW50cyIsInNyY09iamVjdCIsInNldEF0dHJpYnV0ZSIsInJlc29sdmUiLCJhZGRFdmVudExpc3RlbmVyIiwicGxheSIsInRoZW4iLCJfd2FpdEZvclZpZGVvIiwiYmluZCIsInJlbGVhc2UiLCJ0cmFja3MiLCJnZXRWaWRlb1RyYWNrcyIsInN0b3AiLCJlbnVtZXJhdGVWaWRlb0RldmljZXMiLCJkZXZpY2VzIiwia2luZCIsImdldEFjdGl2ZVN0cmVhbUxhYmVsIiwidHJhY2siLCJnZXRBY3RpdmVUcmFjayIsImFzcGVjdFJhdGlvIiwiZGV2aWNlSWQiLCJtaW5Bc3BlY3RSYXRpbyIsImZhY2luZyIsImF1ZGlvIiwidmlkZW9XaWR0aCIsInZpZGVvSGVpZ2h0IiwiYXR0ZW1wdHMiLCJjaGVja1ZpZGVvIiwid2luZG93IiwiRXhpZlRhZ3MiLCJBdmFpbGFibGVUYWdzIiwiZmluZFRhZ3NJbk9iamVjdFVSTCIsInNyYyIsInRhZ3MiLCJ0ZXN0Iiwib2JqZWN0VVJMVG9CbG9iIiwiYnVmZmVyIiwiZmluZFRhZ3NJbkJ1ZmZlciIsImZpbGUiLCJzZWxlY3RlZFRhZ3MiLCJkYXRhVmlldyIsIkRhdGFWaWV3IiwiYnl0ZUxlbmd0aCIsImV4aWZUYWdzIiwic2VsZWN0ZWRUYWciLCJleGlmVGFnIiwidGFnIiwib2Zmc2V0IiwiZ2V0VWludDgiLCJtYXJrZXIiLCJyZWFkRVhJRkRhdGEiLCJnZXRVaW50MTYiLCJ1cmwiLCJmZXRjaCIsInJlc3BvbnNlIiwib2siLCJhcnJheUJ1ZmZlciIsInN0YXR1cyIsInN0YXJ0Iiwic3BsaXQiLCJjaGFyIiwiaW5kZXgiLCJjaGFyQ29kZUF0IiwidGlmZk9mZnNldCIsImJpZ0VuZCIsImZpcnN0SUZET2Zmc2V0IiwiZ2V0VWludDMyIiwicmVhZFRhZ3MiLCJkaXJTdGFydCIsInN0cmluZ3MiLCJlbnRyaWVzIiwiZW50cnlPZmZzZXQiLCJyZWFkVGFnVmFsdWUiLCJudW1WYWx1ZXMiLCJ1bmRlZmluZWQiLCJRVUFURVJfQ0lSQ0xFIiwiRnJhbWVHcmFiYmVyIiwiY2FudmFzIiwiX2lucHV0U3RyZWFtIiwiX3N0cmVhbUNvbmZpZyIsIl9jYW52YXNXaWR0aCIsImNhbnZhc1dpZHRoIiwiX2NhbnZhc0hlaWdodCIsImNhbnZhc0hlaWdodCIsIl93aWR0aCIsIl9oZWlnaHQiLCJfdG9wTGVmdCIsInRvcExlZnQiLCJfZGF0YSIsInZpZGVvU2l6ZSIsInJlYWxXaWR0aCIsInJlYWxIZWlnaHQiLCJjYW52YXNTaXplIiwiZ2V0RnJhbWUiLCJfYWRqdXN0Q2FudmFzU2l6ZSIsImRyYXdhYmxlIiwiZHJhd0FuZ2xlIiwiSFRNTFZpZGVvRWxlbWVudCIsImltYWdlIiwib3JpZW50YXRpb24iLCJoYWxmV2lkdGgiLCJoYWxmSGVpZ2h0IiwidHJhbnNsYXRlIiwicm90YXRlIiwiX2dyYXlBbmRIYWxmU2FtcGxlRnJvbUNhbnZhc0RhdGEiLCJfY29tcHV0ZUdyYXkiLCJ3YXJuIiwiZW5kSW5kZXgiLCJvdXRXaWR0aCIsInRvcFJvd0luZGV4IiwiYm90dG9tUm93SW5kZXgiLCJvdXRJbWFnZUluZGV4IiwidG9wNCIsImJvdHRvbTQiLCJpbWFnZURhdGFMZW5ndGgiLCJJbWFnZUxvYWRlciIsImJhc2VVcmkiLCJzZXF1ZW5jZSIsImxvYWRlZCIsImxvYWRlZEltYWdlIiwibm90TG9hZGVkSW1hZ2VzIiwic3BsaWNlIiwiaW1hZ2VTcmNzIiwiaW1hZ2VOYW1lIiwic3Vic3RyIiwibGFzdEluZGV4T2YiLCJsb2FkZWRJbWFnZXMiLCJmaXJzdEltYWdlIiwiSW1hZ2UiLCJvbmxvYWQiLCJJbWFnZVN0cmVhbSIsIl9iYXNlVXJsIiwiX2VuZGVkIiwiX2ZyYW1lSW5kZXgiLCJfaW1hZ2VzIiwiX2xvYWRlZCIsIl9vZmZzZXQiLCJfcGF1c2VkIiwiX3NpemUiLCJ0cmlnZ2VyIiwibG9hZCIsImltYWdlcyIsIl9jYWxjdWxhdGVkV2lkdGgiLCJfY2FsY3VsYXRlZEhlaWdodCIsIl9sb2FkSW1hZ2VzIiwidGltZSIsIklucHV0U3RyZWFtIiwiX2NvbXB1dGVEaXZpc29ycyIsIm4iLCJkaXZpc29ycyIsImxhcmdlRGl2aXNvcnMiLCJkaXZpc29yIiwidW5zaGlmdCIsImNvbmNhdCIsIl9jb21wdXRlQ29tbW9uRGl2aXNvcnMiLCJsYXJnZURpdmlzb3IiLCJjYWxjdWxhdGVQYXRjaFNpemUiLCJ3aWRlU2lkZSIsIm5yT2ZQYXRjaGVzTGlzdCIsIm5yT2ZQYXRjaGVzTWFwIiwic21hbGwiLCJtZWRpdW0iLCJsYXJnZSIsIm5yT2ZQYXRjaGVzSW5kZXgiLCJuck9mUGF0Y2hlcyIsImRlc2lyZWRQYXRjaFNpemUiLCJmaW5kUGF0Y2hTaXplRm9yRGl2aXNvcnMiLCJmb3VuZCIsIm9wdGltYWxQYXRjaFNpemUiLCJjaGVja0ltYWdlQ29uc3RyYWludHMiLCJzaGlmdCIsImlucHV0U3RyZWFtQ29uZmlnIiwiY29tcHV0ZUltYWdlQXJlYSIsInNldENhbnZhc1NpemUiLCJfcGFyc2VDc3NEaW1lbnNpb25WYWx1ZXMiLCJkaW1lbnNpb24iLCJwYXJzZUZsb2F0IiwidW5pdCIsImluZGV4T2YiLCJfZGltZW5zaW9uc0NvbnZlcnRlcnMiLCJpbnB1dFdpZHRoIiwiaW5wdXRIZWlnaHQiLCJwYXJzZWRBcmVhIiwicGFyc2VkIiwiY2FsY3VsYXRlZCIsIl9ldmVudE5hbWVzIiwiX2V2ZW50SGFuZGxlcnMiLCJNYXAiLCJsaXN0ZW5lciIsIl9vcHRpb25zIiwiaGFzIiwic2V0IiwiY2xlYXIiLCJhcmdBcnJheSIsImhhbmRsZXJzIiwiYXBwbHkiLCJMaXZlU3RyZWFtIiwiVmlkZW9TdHJlYW0iLCJfdmlkZW8iLCJwYXVzZSIsIm9wdGlvbnMiLCJfaW5pdFNpemUiLCJlbmRlZCIsImN1cnJlbnRUaW1lIiwiaW52ZXJ0IiwibWF0cml4IiwiYTAiLCJhMSIsImEyIiwiYTMiLCJkZXRlcm1pbmFudCIsIkZsb2F0MzJBcnJheSIsInRyYW5zZm9ybVdpdGhNYXRyaXgiLCJfY29tcHV0ZUhpc3RvZ3JhbSIsImJpdHNQZXJQaXhlbCIsImJpdFNoaWZ0IiwiYnVja2V0Q291bnQiLCJoaXN0b2dyYW0iLCJJbnQzMkFycmF5IiwiX2RldGVybWluZU90c3VUaHJlc2hvbGQiLCJoaXN0IiwidmV0IiwicHgiLCJpbml0IiwiZW5kIiwibXgiLCJrIiwicDEyIiwibTEiLCJtMiIsIm0xMiIsIm1heEluZGV4IiwiYXJyYXkiLCJvdHN1VGhyZXNob2xkIiwidGFyZ2V0V3JhcHBlciIsInRhcmdldERhdGEiLCJvdXRJbWFnZVdyYXBwZXIiLCJvdXRJbWFnZSIsIm91dEltZ0luZGV4IiwiTW9tZW50U2ltaWxhcml0eVRocmVzaG9sZCIsIkJhcmNvZGVMb2NhdG9yIiwiX251bVBhdGNoZXMiLCJfaW5pdEJ1ZmZlcnMiLCJfaW5pdENhbnZhcyIsIl9jdXJyZW50SW1hZ2VXcmFwcGVyIiwiX2JpbmFyaXplSW1hZ2UiLCJwYXRjaGVzRm91bmQiLCJfZmluZFBhdGNoZXMiLCJtYXhMYWJlbCIsIl9yYXN0ZXJpemVBbmd1bGFyU2ltaWxhcml0eSIsInRvcExhYmVscyIsIl9maW5kQmlnZ2VzdENvbm5lY3RlZEFyZWFzIiwiX2ZpbmRCb3hlcyIsIl9wYXRjaFNpemUiLCJfYmluYXJ5SW1hZ2VXcmFwcGVyIiwiX2xhYmVsSW1hZ2VXcmFwcGVyIiwic2tlbGV0b25JbWFnZURhdGEiLCJBcnJheUJ1ZmZlciIsIl9zdWJJbWFnZVdyYXBwZXIiLCJfc2tlbEltYWdlV3JhcHBlciIsIl9za2VsZXRvbml6ZXIiLCJza2VsZXRvbml6ZXIiLCJzZWxmIiwiZ2xvYmFsIiwiX3BhdGNoTGFiZWxHcmlkIiwiX3BhdGNoR3JpZCIsIl9pbWFnZVRvUGF0Y2hHcmlkIiwidXNlV29ya2VyIiwiX2JpbmFyeUNvbnRleHQiLCJwYXRjaGVzIiwiYXZlcmFnZVJhZCIsIl9kcmF3UmVjdCIsImludmVyc2VNYXRyaXgiLCJtaW5YIiwibWluWSIsIm1heFgiLCJtYXhZIiwidmVydGV4IiwiemVyb0JvcmRlciIsInNob3ciLCJfc2tlbGV0b25pemUiLCJyYXN0ZXJpemVyIiwiUmFzdGVyaXplciIsInJhc3RlclJlc3VsdCIsInJhc3Rlcml6ZSIsIm92ZXJsYXkiLCJjb3VudCIsInBhdGNoIiwiX2Rlc2NyaWJlUGF0Y2giLCJsYWJlbEhpc3QiLCJzb3J0IiwiX2JveEZyb21QYXRjaGVzIiwiam9pbiIsImNsdXN0ZXJpemUiLCJ0b3BDbHVzdGVyIiwic3ViSW1hZ2VBc0NvcHkiLCJza2VsZXRvbml6ZSIsIm1pbkNvbXBvbmVudFdlaWdodCIsImNlaWwiLCJlbGlnaWJsZU1vbWVudHMiLCJtYXRjaGluZ01vbWVudHMiLCJfc2ltaWxhck1vbWVudHMiLCJjdXJyZW50SW5kZXgiLCJjdXJyZW50UGF0Y2giLCJTZWFyY2hEaXJlY3Rpb25zIiwiZGlyZWN0aW9uIiwiTnVtYmVyIiwiTUFYX1ZBTFVFIiwiX3RyYWNlIiwiX25vdFlldFByb2Nlc3NlZCIsInN0cm9rZVJlY3QiLCJFZGdlTGFiZWwiLCJDb250b3VyRGlyZWN0aW9uIiwibGFiZWxXcmFwcGVyIiwiX2ltYWdlRGF0YSIsIl9sYWJlbERhdGEiLCJfdHJhY2VyIiwiVHJhY2VyIiwiZGVwdGhMYWJlbCIsImNvbG9yTWFwIiwiY2MiLCJzYyIsImNvbm5lY3RlZENvdW50IiwiY3kiLCJsYWJlbEluZGV4IiwiYmMiLCJjeCIsImxjIiwiY29udG91clRyYWNpbmciLCJPdXRzaWRlIiwiQ1ciLCJmaXJzdFZlcnRleCIsIm5leHRQZWVyIiwiaW5zaWRlQ29udG91cnMiLCJwcmV2aW91c1BlZXIiLCJJbnNpZGUiLCJDQ1ciLCJmaXJzdENvbnRvdXIiLCJwcSIsImlxIiwicSIsIlVua25vd24iLCJuZXh0IiwiU2tlbGV0b25pemVyIiwic3RkbGliIiwiZm9yZWlnbiIsImltdWwiLCJlcm9kZSIsImluSW1hZ2VQdHIiLCJvdXRJbWFnZVB0ciIsInUiLCJ5U3RhcnQxIiwieVN0YXJ0MiIsInhTdGFydDEiLCJ4U3RhcnQyIiwic3VidHJhY3QiLCJhSW1hZ2VQdHIiLCJiSW1hZ2VQdHIiLCJiaXR3aXNlT3IiLCJjb3VudE5vblplcm8iLCJpbWFnZVB0ciIsImRpbGF0ZSIsIm1lbWNweSIsInNyY0ltYWdlUHRyIiwiZHN0SW1hZ2VQdHIiLCJzdWJJbWFnZVB0ciIsImVyb2RlZEltYWdlUHRyIiwidGVtcEltYWdlUHRyIiwic2tlbEltYWdlUHRyIiwiZG9uZSIsImVkZ2VMYWJlbCIsInN5Iiwic3giLCJGdiIsInRyYWNlIiwiQ3YiLCJsZGlyIiwiUCIsIl9fZmFjdG9yeVNvdXJjZV9fIiwiX2ZyYW1lR3JhYmJlciIsIl9zdG9wcGVkIiwiX2NhbnZhc0NvbnRhaW5lciIsImN0eCIsImRvbSIsIl9sb2NhdG9yIiwiX2JveFNpemUiLCJfZGVjb2RlciIsIl93b3JrZXJQb29sIiwiX29uVUlUaHJlYWQiLCJfcmVzdWx0Q29sbGVjdG9yIiwiUXVhZ2dhIiwiY2IiLCJkZWZhdWx0Q29uZmlnIiwiX2luaXRpYWxpemVEYXRhIiwiX2luaXRJbnB1dFN0cmVhbSIsIl9zdGFydENvbnRpbnVvdXNVcGRhdGUiLCJfdXBkYXRlIiwiX2FkanVzdFdvcmtlclBvb2wiLCJjbGVhckV2ZW50SGFuZGxlcnMiLCJkZWNvZGVTaW5nbGUiLCJyZXN1bHRDYWxsYmFjayIsImNhbGwiLCJvbkRldGVjdGVkIiwib2ZmRGV0ZWN0ZWQiLCJ1bnN1YnNjcmliZSIsIm9uUHJvY2Vzc2VkIiwib2ZmUHJvY2Vzc2VkIiwic2V0UmVhZGVycyIsIndvcmtlciIsInBvc3RNZXNzYWdlIiwiY21kIiwicmVnaXN0ZXJSZXN1bHRDb2xsZWN0b3IiLCJyZXN1bHRDb2xsZWN0b3IiLCJhZGRSZXN1bHQiLCJ2aWV3cG9ydCIsIl9nZXRWaWV3UG9ydCIsImVyciIsIl9jYW5SZWNvcmQiLCJ0YXJnZXQiLCJIVE1MRWxlbWVudCIsInNlbGVjdG9yIiwiY2xlYXJGaXgiLCJfZ2V0Qm91bmRpbmdCb3hlcyIsIl90cmFuc2Zvcm0iLCJwb2x5Z29uIiwiX3RyYW5zZm9ybVJlc3VsdCIsImJhcmNvZGUiLCJfYWRkUmVzdWx0IiwiX2hhc0NvZGVSZXN1bHQiLCJfcHVibGlzaFJlc3VsdCIsInJlc3VsdFRvUHVibGlzaCIsInB1Ymxpc2giLCJfbG9jYXRlQW5kRGVjb2RlIiwiZGVjb2RlRnJvbUJvdW5kaW5nQm94ZXMiLCJhdmFpbGFibGVXb3JrZXIiLCJ3b3JrZXJUaHJlYWQiLCJidXN5IiwiYXR0YWNoRGF0YSIsImdyYWIiLCJkZWxheSIsImZyZXF1ZW5jeSIsInRoYXQiLCJ0aW1lc3RhbXAiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJwZXJmb3JtYW5jZSIsIm5vdyIsIl9pbml0V29ya2VyIiwiYmxvYlVSTCIsIl9nZW5lcmF0ZVdvcmtlckJsb2IiLCJXb3JrZXIiLCJvbm1lc3NhZ2UiLCJVUkwiLCJyZXZva2VPYmplY3RVUkwiLCJtZXNzYWdlIiwiX3dvcmtlckludGVyZmFjZSIsImZhY3RvcnkiLCJvcmlnaW4iLCJibG9iIiwiQmxvYiIsInRvU3RyaW5nIiwiY3JlYXRlT2JqZWN0VVJMIiwiaW5jcmVhc2VCeSIsInRlcm1pbmF0ZSIsIk4iLCJXIiwiU1RBUlRfUEFUVEVSTiIsIlNUT1BfUEFUVEVSTiIsIkNPREVfUEFUVEVSTiIsInN0YXJ0UGF0dGVybkxlbmd0aCIsIlR3b09mRml2ZVJlYWRlciIsIl9iYXJTcGFjZVJhdGlvIiwiX2Zvcm1hdCIsIl9zaW5nbGVDb2RlRXJyb3IiLCJfYXZlcmFnZUNvZGVFcnJvciIsInN0YXJ0SW5mbyIsIl9maW5kU3RhcnQiLCJlbmRJbmZvIiwiX2ZpbmRFbmQiLCJjb3VudGVycyIsIl9maWxsQ291bnRlcnMiLCJkZWNvZGVkQ29kZXMiLCJjb2RlIiwiX2RlY29kZVBheWxvYWQiLCJfbmV4dFNldCIsIl9yb3ciLCJuYXJyb3dCYXJXaWR0aCIsIl9maW5kUGF0dGVybiIsImxlYWRpbmdXaGl0ZXNwYWNlU3RhcnQiLCJfbWF0Y2hSYW5nZSIsInRyYWlsaW5nV2hpdGVzcGFjZUVuZCIsInJldmVyc2UiLCJfdmVyaWZ5VHJhaWxpbmdXaGl0ZXNwYWNlIiwiY291bnRlciIsImJlc3RNYXRjaCIsIl9tYXRjaFBhdHRlcm4iLCJBVkVSQUdFX0NPREVfRVJST1IiLCJjb3VudGVyTGVuZ3RoIiwiX2RlY29kZUNvZGUiLCJCYXJjb2RlUmVhZGVyIiwiQmFyY29kZURpcmVjdGlvbiIsIlN0YXJ0Tm90Rm91bmRFeGNlcHRpb24iLCJDb2RlTm90Rm91bmRFeGNlcHRpb24iLCJQYXR0ZXJuTm90Rm91bmRFeGNlcHRpb24iLCJpc1doaXRlIiwidHJ5SGFyZGVyIiwiZXBzaWxvbiIsImNvdW50ZXJQb3MiLCJtYXhTaW5nbGVFcnJvciIsIm1vZHVsbyIsIlNJTkdMRV9DT0RFX0VSUk9SIiwiYmFyV2lkdGgiLCJzY2FsZWQiLCJzaW5nbGVFcnJvciIsImNvcnJlY3Rpb24iLCJpbmRpY2VzIiwiZGVjb2RlIiwiUmV2ZXJzZSIsIkZvcndhcmQiLCJudW1Db3VudGVycyIsIkFMUEhBQkVUSF9TVFJJTkciLCJBTFBIQUJFVCIsIkNIQVJBQ1RFUl9FTkNPRElOR1MiLCJTVEFSVF9FTkQiLCJNSU5fRU5DT0RFRF9DSEFSUyIsIk1BWF9BQ0NFUFRBQkxFIiwiUEFERElORyIsIkNvZGFiYXJSZWFkZXIiLCJfY291bnRlcnMiLCJfbmV4dFVuc2V0IiwibmV4dFN0YXJ0Iiwic3RhcnRDb3VudGVyIiwiX3RvUGF0dGVybiIsImRlY29kZWRDaGFyIiwiX3BhdHRlcm5Ub0NoYXIiLCJfdmVyaWZ5V2hpdGVzcGFjZSIsIl92YWxpZGF0ZVJlc3VsdCIsIl9zdW1Db3VudGVycyIsImVuZENvdW50ZXIiLCJfY2FsY3VsYXRlUGF0dGVybkxlbmd0aCIsImNhdGVnb3JpemF0aW9uIiwic3BhY2UiLCJuYXJyb3ciLCJjb3VudHMiLCJ3aWRlIiwiYmFyIiwiX2NoYXJUb1BhdHRlcm4iLCJjYXQiLCJmbG9vciIsImNoYXJDb2RlIiwiX3RocmVzaG9sZFJlc3VsdFBhdHRlcm4iLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJiYXJUaHJlc2hvbGQiLCJfY29tcHV0ZUFsdGVybmF0aW5nVGhyZXNob2xkIiwic3BhY2VUaHJlc2hvbGQiLCJiaXRtYXNrIiwiQ09ERV9TSElGVCIsIkNPREVfQyIsIkNPREVfQiIsIkNPREVfQSIsIlNUQVJUX0NPREVfQSIsIlNUQVJUX0NPREVfQiIsIlNUQVJUX0NPREVfQyIsIlNUT1BfQ09ERSIsIk1PRFVMRV9JTkRJQ0VTIiwiQ29kZTEyOFJlYWRlciIsIl9jb3JyZWN0IiwiZXhwZWN0ZWQiLCJfY2FsY3VsYXRlQ29ycmVjdGlvbiIsIl9jb3JyZWN0QmFycyIsIm11bHRpcGxpZXIiLCJjaGVja3N1bSIsImNvZGVzZXQiLCJyYXdSZXN1bHQiLCJzaGlmdE5leHQiLCJyZW1vdmVMYXN0Q2hhcmFjdGVyIiwibm9ybWFsaXplZCIsInN1bU5vcm1hbGl6ZWQiLCJzdW1FeHBlY3RlZCIsIkFTVEVSSVNLIiwiVWludDE2QXJyYXkiLCJDb2RlMzlSZWFkZXIiLCJsYXN0U3RhcnQiLCJfdG9Db3VudGVycyIsInBvcCIsInBhdHRlcm5TaXplIiwibWluV2lkdGgiLCJtYXhOYXJyb3dXaWR0aCIsIm51bVdpZGVCYXJzIiwid2lkZUJhcldpZHRoIiwiX2ZpbmROZXh0V2lkdGgiLCJwYXR0ZXJuU3RhcnQiLCJ3aGl0ZVNwYWNlTXVzdFN0YXJ0IiwiQ29kZTM5VklOUmVhZGVyIiwicmVwbGFjZSIsIl9jaGVja0NoZWNrc3VtIiwiQ29kZTkzUmVhZGVyIiwiX3ZlcmlmeUVuZCIsIl92ZXJpZnlDaGVja3N1bXMiLCJfZGVjb2RlRXh0ZW5kZWQiLCJyb3VuZCIsImNoYXJBcnJheSIsIm5leHRDaGFyIiwibmV4dENoYXJDb2RlIiwiX21hdGNoQ2hlY2tDaGFyIiwibWF4V2VpZ2h0IiwiYXJyYXlUb0NoZWNrIiwid2VpZ2h0ZWRTdW1zIiwid2VpZ2h0IiwiY2hlY2tDaGFyIiwiRUFOMlJlYWRlciIsInJvdyIsImNvZGVGcmVxdWVuY3kiLCJDT0RFX0dfU1RBUlQiLCJwYXJzZUludCIsIkVBTlJlYWRlciIsIkVBTjVSZWFkZXIiLCJfZXh0ZW5zaW9uQ2hlY2tzdW0iLCJfZGV0ZXJtaW5lQ2hlY2tEaWdpdCIsIkNIRUNLX0RJR0lUX0VOQ09ESU5HUyIsIkVBTjhSZWFkZXIiLCJNSURETEVfUEFUVEVSTiIsIkVYVEVOU0lPTl9TVEFSVF9QQVRURVJOIiwiQ09ERV9GUkVRVUVOQ1kiLCJjb2RlcmFuZ2UiLCJmaXJzdERpZ2l0IiwiX2NhbGN1bGF0ZUZpcnN0RGlnaXQiLCJyZXN1bHRJbmZvIiwiX2NoZWNrc3VtIiwiX2RlY29kZUV4dGVuc2lvbnMiLCJsYXN0Q29kZSIsIk1BWF9DT1JSRUNUSU9OX0ZBQ1RPUiIsIkkyb2Y1UmVhZGVyIiwibm9ybWFsaXplQmFyU3BhY2VXaWR0aCIsImNvdW50ZXJTdW0iLCJjb2RlU3VtIiwiY29ycmVjdGlvblJhdGlvIiwiY29ycmVjdGlvblJhdGlvSW52ZXJzZSIsImNvdW50ZXIwIiwiY291bnRlcjEiLCJjb2RlMCIsImNvZGUxIiwiY29kZV8xMjhfcmVhZGVyIiwiZWFuX3JlYWRlciIsImVhbl81X3JlYWRlciIsImVhbl8yX3JlYWRlciIsImVhbl84X3JlYWRlciIsImNvZGVfMzlfcmVhZGVyIiwiY29kZV8zOV92aW5fcmVhZGVyIiwiY29kYWJhcl9yZWFkZXIiLCJ1cGNfcmVhZGVyIiwiVVBDUmVhZGVyIiwidXBjX2VfcmVhZGVyIiwiVVBDRVJlYWRlciIsImkyb2Y1X3JlYWRlciIsImNvZGVfOTNfcmVhZGVyIiwiX2RldGVybWluZVBhcml0eSIsIm5yU3lzdGVtIiwibGFzdERpZ2l0IiwidXBjYSIsIl9jb252ZXJ0VG9VUENBIiwiY2hhckF0Iiwic3Vic3RyaW5nIl0sIm1hcHBpbmdzIjoiOztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQztBQUNELFc7QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0EsaURBQWlELGdCQUFnQjtBQUNqRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkLEtBQUs7QUFDTCxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsY0FBYztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFD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LElBQU1vQyxTQUFiO0FBQUE7QUFBQTtBQUFBOztBQUNJLHFCQUFZaDdCLE1BQVosRUFBMEN1TyxXQUExQyxFQUE4RTtBQUFBOztBQUFBOztBQUMxRSw2TUFBTXZPLE1BQU4sRUFBY3VPLFdBQWQ7QUFFQSxVQUFLcWhCLE9BQUwsR0FBZSxPQUFmO0FBSDBFO0FBSTdFOztBQUxMO0FBQUE7QUFBQSw2QkFPc0I7QUFDZCxVQUFNenVCLE1BQU0sR0FBRywrTEFBZjs7QUFFQSxVQUFJQSxNQUFNLElBQUlBLE1BQU0sQ0FBQ212QixJQUFqQixJQUF5Qm52QixNQUFNLENBQUNtdkIsSUFBUCxDQUFZOXNCLE1BQVosS0FBdUIsRUFBaEQsSUFBc0RyQyxNQUFNLENBQUNtdkIsSUFBUCxDQUFZb0wsTUFBWixDQUFtQixDQUFuQixNQUEwQixHQUFwRixFQUF5RjtBQUNyRnY2QixjQUFNLENBQUNtdkIsSUFBUCxHQUFjbnZCLE1BQU0sQ0FBQ212QixJQUFQLENBQVlxTCxTQUFaLENBQXNCLENBQXRCLENBQWQ7QUFDQSxlQUFPeDZCLE1BQVA7QUFDSDs7QUFFRCxhQUFPLElBQVA7QUFDSDtBQWhCTDs7QUFBQTtBQUFBLEVBQStCeTNCLHFEQUEvQixFIiwiZmlsZSI6InF1YWdnYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcbiAgICBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShmYWN0b3J5LnRvU3RyaW5nKCkpLmRlZmF1bHQ7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXhwb3J0c1tcIlF1YWdnYVwiXSA9IGZhY3RvcnkoZmFjdG9yeS50b1N0cmluZygpKS5kZWZhdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJvb3RbXCJRdWFnZ2FcIl0gPSBmYWN0b3J5KGZhY3RvcnkudG9TdHJpbmcoKSkuZGVmYXVsdDtcbiAgICB9XG59KSh0aGlzLCBmdW5jdGlvbihfX2ZhY3RvcnlTb3VyY2VfXykge1xuICAgIHJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcXVhZ2dhLnRzXCIpO1xuIiwiZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFycjJbaV0gPSBhcnJbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycjI7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRob3V0SG9sZXM7IiwiZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkOyIsImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpbmZvLmRvbmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcblxuICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuXG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3luY1RvR2VuZXJhdG9yOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3M7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5OyIsInZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL2dldFByb3RvdHlwZU9mXCIpO1xuXG52YXIgc3VwZXJQcm9wQmFzZSA9IHJlcXVpcmUoXCIuL3N1cGVyUHJvcEJhc2VcIik7XG5cbmZ1bmN0aW9uIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ICE9PSBcInVuZGVmaW5lZFwiICYmIFJlZmxlY3QuZ2V0KSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0ID0gUmVmbGVjdC5nZXQ7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0ID0gZnVuY3Rpb24gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICAgICAgdmFyIGJhc2UgPSBzdXBlclByb3BCYXNlKHRhcmdldCwgcHJvcGVydHkpO1xuICAgICAgaWYgKCFiYXNlKSByZXR1cm47XG4gICAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYmFzZSwgcHJvcGVydHkpO1xuXG4gICAgICBpZiAoZGVzYy5nZXQpIHtcbiAgICAgICAgcmV0dXJuIGRlc2MuZ2V0LmNhbGwocmVjZWl2ZXIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGVzYy52YWx1ZTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIgfHwgdGFyZ2V0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0OyIsImZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9O1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZjsiLCJ2YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9zZXRQcm90b3R5cGVPZlwiKTtcblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbmhlcml0czsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGl0ZXIpID09PSBcIltvYmplY3QgQXJndW1lbnRzXVwiKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5OyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVNwcmVhZDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxudmFyIGFzc2VydFRoaXNJbml0aWFsaXplZCA9IHJlcXVpcmUoXCIuL2Fzc2VydFRoaXNJbml0aWFsaXplZFwiKTtcblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9XG5cbiAgcmV0dXJuIGFzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjsiLCJmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcblxuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZjsiLCJ2YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9nZXRQcm90b3R5cGVPZlwiKTtcblxuZnVuY3Rpb24gX3N1cGVyUHJvcEJhc2Uob2JqZWN0LCBwcm9wZXJ0eSkge1xuICB3aGlsZSAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KSkge1xuICAgIG9iamVjdCA9IGdldFByb3RvdHlwZU9mKG9iamVjdCk7XG4gICAgaWYgKG9iamVjdCA9PT0gbnVsbCkgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gb2JqZWN0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zdXBlclByb3BCYXNlOyIsInZhciBhcnJheVdpdGhvdXRIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aG91dEhvbGVzXCIpO1xuXG52YXIgaXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5XCIpO1xuXG52YXIgbm9uSXRlcmFibGVTcHJlYWQgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVNwcmVhZFwiKTtcblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90b0NvbnN1bWFibGVBcnJheTsiLCJmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YyID0gZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mMiA9IGZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZjIob2JqKTsgfVxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIF90eXBlb2YyKFN5bWJvbC5pdGVyYXRvcikgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIF90eXBlb2YyKG9iaik7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IF90eXBlb2YyKG9iaik7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4vLyBUaGlzIG1ldGhvZCBvZiBvYnRhaW5pbmcgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QgbmVlZHMgdG8gYmVcbi8vIGtlcHQgaWRlbnRpY2FsIHRvIHRoZSB3YXkgaXQgaXMgb2J0YWluZWQgaW4gcnVudGltZS5qc1xudmFyIGcgPSAoZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzIHx8ICh0eXBlb2Ygc2VsZiA9PT0gXCJvYmplY3RcIiAmJiBzZWxmKTtcbn0pKCkgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xuXG4vLyBVc2UgYGdldE93blByb3BlcnR5TmFtZXNgIGJlY2F1c2Ugbm90IGFsbCBicm93c2VycyBzdXBwb3J0IGNhbGxpbmdcbi8vIGBoYXNPd25Qcm9wZXJ0eWAgb24gdGhlIGdsb2JhbCBgc2VsZmAgb2JqZWN0IGluIGEgd29ya2VyLiBTZWUgIzE4My5cbnZhciBoYWRSdW50aW1lID0gZy5yZWdlbmVyYXRvclJ1bnRpbWUgJiZcbiAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZykuaW5kZXhPZihcInJlZ2VuZXJhdG9yUnVudGltZVwiKSA+PSAwO1xuXG4vLyBTYXZlIHRoZSBvbGQgcmVnZW5lcmF0b3JSdW50aW1lIGluIGNhc2UgaXQgbmVlZHMgdG8gYmUgcmVzdG9yZWQgbGF0ZXIuXG52YXIgb2xkUnVudGltZSA9IGhhZFJ1bnRpbWUgJiYgZy5yZWdlbmVyYXRvclJ1bnRpbWU7XG5cbi8vIEZvcmNlIHJlZXZhbHV0YXRpb24gb2YgcnVudGltZS5qcy5cbmcucmVnZW5lcmF0b3JSdW50aW1lID0gdW5kZWZpbmVkO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL3J1bnRpbWVcIik7XG5cbmlmIChoYWRSdW50aW1lKSB7XG4gIC8vIFJlc3RvcmUgdGhlIG9yaWdpbmFsIHJ1bnRpbWUuXG4gIGcucmVnZW5lcmF0b3JSdW50aW1lID0gb2xkUnVudGltZTtcbn0gZWxzZSB7XG4gIC8vIFJlbW92ZSB0aGUgZ2xvYmFsIHByb3BlcnR5IGFkZGVkIGJ5IHJ1bnRpbWUuanMuXG4gIHRyeSB7XG4gICAgZGVsZXRlIGcucmVnZW5lcmF0b3JSdW50aW1lO1xuICB9IGNhdGNoKGUpIHtcbiAgICBnLnJlZ2VuZXJhdG9yUnVudGltZSA9IHVuZGVmaW5lZDtcbiAgfVxufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4hKGZ1bmN0aW9uKGdsb2JhbCkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIHZhciBpbk1vZHVsZSA9IHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCI7XG4gIHZhciBydW50aW1lID0gZ2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZTtcbiAgaWYgKHJ1bnRpbWUpIHtcbiAgICBpZiAoaW5Nb2R1bGUpIHtcbiAgICAgIC8vIElmIHJlZ2VuZXJhdG9yUnVudGltZSBpcyBkZWZpbmVkIGdsb2JhbGx5IGFuZCB3ZSdyZSBpbiBhIG1vZHVsZSxcbiAgICAgIC8vIG1ha2UgdGhlIGV4cG9ydHMgb2JqZWN0IGlkZW50aWNhbCB0byByZWdlbmVyYXRvclJ1bnRpbWUuXG4gICAgICBtb2R1bGUuZXhwb3J0cyA9IHJ1bnRpbWU7XG4gICAgfVxuICAgIC8vIERvbid0IGJvdGhlciBldmFsdWF0aW5nIHRoZSByZXN0IG9mIHRoaXMgZmlsZSBpZiB0aGUgcnVudGltZSB3YXNcbiAgICAvLyBhbHJlYWR5IGRlZmluZWQgZ2xvYmFsbHkuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRGVmaW5lIHRoZSBydW50aW1lIGdsb2JhbGx5IChhcyBleHBlY3RlZCBieSBnZW5lcmF0ZWQgY29kZSkgYXMgZWl0aGVyXG4gIC8vIG1vZHVsZS5leHBvcnRzIChpZiB3ZSdyZSBpbiBhIG1vZHVsZSkgb3IgYSBuZXcsIGVtcHR5IG9iamVjdC5cbiAgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWUgPSBpbk1vZHVsZSA/IG1vZHVsZS5leHBvcnRzIDoge307XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgcnVudGltZS53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGVbdG9TdHJpbmdUYWdTeW1ib2xdID1cbiAgICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBwcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBydW50aW1lLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGlmICghKHRvU3RyaW5nVGFnU3ltYm9sIGluIGdlbkZ1bikpIHtcbiAgICAgICAgZ2VuRnVuW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcbiAgICAgIH1cbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgcnVudGltZS5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIHJ1bnRpbWUuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIHJ1bnRpbWUuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KVxuICAgICk7XG5cbiAgICByZXR1cm4gcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yLnJldHVybikge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIEdwW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yXCI7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgcnVudGltZS5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIHJ1bnRpbWUudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG59KShcbiAgLy8gSW4gc2xvcHB5IG1vZGUsIHVuYm91bmQgYHRoaXNgIHJlZmVycyB0byB0aGUgZ2xvYmFsIG9iamVjdCwgZmFsbGJhY2sgdG9cbiAgLy8gRnVuY3Rpb24gY29uc3RydWN0b3IgaWYgd2UncmUgaW4gZ2xvYmFsIHN0cmljdCBtb2RlLiBUaGF0IGlzIHNhZGx5IGEgZm9ybVxuICAvLyBvZiBpbmRpcmVjdCBldmFsIHdoaWNoIHZpb2xhdGVzIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5LlxuICAoZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMgfHwgKHR5cGVvZiBzZWxmID09PSBcIm9iamVjdFwiICYmIHNlbGYpO1xuICB9KSgpIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKVxuKTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsImltcG9ydCB7IEltYWdlRGVidWcgfSBmcm9tICcuLi9jb21tb24vaW1hZ2UtZGVidWcnO1xuaW1wb3J0IHsgUXVhZ2dhQmFyY29kZSB9IGZyb20gJy4uL2RlY29kZXIvYmFyY29kZS1kZWNvZGVyJztcbmltcG9ydCB7IEJhcmNvZGUgfSBmcm9tICcuLi9yZWFkZXIvYmFyY29kZS1yZWFkZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJlc3VsdENvbGxlY3RvckNvbmZpZyB7XG4gICAgY2FwYWNpdHk/OiBudW1iZXI7XG4gICAgY2FwdHVyZT86IGJvb2xlYW47XG4gICAgYmxhY2tsaXN0PzogQXJyYXk8QmFyY29kZT47XG4gICAgZmlsdGVyPzogKGl0ZW06IEJhcmNvZGUpID0+IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjbGFzcyBSZXN1bHRDb2xsZWN0b3Ige1xuICAgIHByaXZhdGUgX2NhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG4gICAgcHJpdmF0ZSBfY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuICAgIHByaXZhdGUgX2NvbmZpZzogUmVzdWx0Q29sbGVjdG9yQ29uZmlnO1xuICAgIHByaXZhdGUgX2NhcGFjaXR5OiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfY2FwdHVyZTogYm9vbGVhbjtcbiAgICBwcml2YXRlIF9yZXN1bHRzOiBBcnJheTxRdWFnZ2FCYXJjb2RlPjtcblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogUmVzdWx0Q29sbGVjdG9yQ29uZmlnKSB7XG4gICAgICAgIHRoaXMuX3Jlc3VsdHMgPSBuZXcgQXJyYXk8UXVhZ2dhQmFyY29kZT4oKTtcbiAgICAgICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuICAgICAgICB0aGlzLl9jYXBhY2l0eSA9IGNvbmZpZy5jYXBhY2l0eSB8fCAyMDtcbiAgICAgICAgdGhpcy5fY2FwdHVyZSA9IGNvbmZpZy5jYXB0dXJlID09PSB0cnVlO1xuXG4gICAgICAgIGlmICh0aGlzLl9jYXB0dXJlKSB7XG4gICAgICAgICAgICB0aGlzLl9jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgICAgIHRoaXMuX2NvbnRleHQgPSB0aGlzLl9jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZFJlc3VsdChkYXRhOiBVaW50OEFycmF5LCBpbWFnZVdpZHRoOiBudW1iZXIsIGltYWdlSGVpZ2h0OiBudW1iZXIsIGNvZGVSZXN1bHQ6IEJhcmNvZGUpOiB2b2lkIHtcbiAgICAgICAgaWYgKGNvZGVSZXN1bHQgJiYgdGhpcy5fY2FwYWNpdHkgJiYgIXRoaXMuX2NvbnRhaW5zKGNvZGVSZXN1bHQpICYmIHRoaXMuX3Bhc3Nlc0ZpbHRlcihjb2RlUmVzdWx0KSkge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0OiBRdWFnZ2FCYXJjb2RlID0geyBjb2RlUmVzdWx0IH07XG5cbiAgICAgICAgICAgIHRoaXMuX2NhcGFjaXR5LS07XG5cbiAgICAgICAgICAgIGlmICh0aGlzLl9jYXB0dXJlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2FudmFzLndpZHRoID0gaW1hZ2VXaWR0aDtcbiAgICAgICAgICAgICAgICB0aGlzLl9jYW52YXMuaGVpZ2h0ID0gaW1hZ2VIZWlnaHQ7XG5cbiAgICAgICAgICAgICAgICBJbWFnZURlYnVnLmRyYXdJbWFnZShkYXRhLCBpbWFnZVdpZHRoLCBpbWFnZUhlaWdodCwgdGhpcy5fY29udGV4dCk7XG5cbiAgICAgICAgICAgICAgICByZXN1bHQuZnJhbWUgPSB0aGlzLl9jYW52YXMudG9EYXRhVVJMKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX3Jlc3VsdHMucHVzaChyZXN1bHQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0UmVzdWx0cygpOiBBcnJheTxRdWFnZ2FCYXJjb2RlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZXN1bHRzO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2NvbnRhaW5zKGNvZGVSZXN1bHQ6IEJhcmNvZGUpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbmZpZy5ibGFja2xpc3QgJiZcbiAgICAgICAgICAgIHRoaXMuX2NvbmZpZy5ibGFja2xpc3Quc29tZShpdGVtID0+IE9iamVjdC5rZXlzKGl0ZW0pLmV2ZXJ5KGtleSA9PiBpdGVtW2tleV0gPT09IGNvZGVSZXN1bHRba2V5XSkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3Bhc3Nlc0ZpbHRlcihjb2RlUmVzdWx0OiBCYXJjb2RlKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgdGhpcy5fY29uZmlnLmZpbHRlciAhPT0gJ2Z1bmN0aW9uJyB8fCB0aGlzLl9jb25maWcuZmlsdGVyKGNvZGVSZXN1bHQpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IE1vbWVudCB9IGZyb20gJy4vbW9tZW50JztcblxuXG4vKipcbiAqIENyZWF0ZXMgYSBjbHVzdGVyIGZvciBncm91cGluZyBzaW1pbGFyIG9yaWVudGF0aW9ucyBvZiBtb21lbnRzXG4gKi9cbmV4cG9ydCBjbGFzcyBDbHVzdGVyIHtcbiAgICBwcml2YXRlIF90aHJlc2hvbGQ6IG51bWJlcjtcbiAgICBwcml2YXRlIF9tb21lbnRzOiBBcnJheTxNb21lbnQ+O1xuICAgIHByaXZhdGUgX2NlbnRlcjogTW9tZW50O1xuXG4gICAgc3RhdGljIGNsdXN0ZXJpemUobW9tZW50czogQXJyYXk8TW9tZW50PiwgdGhyZXNob2xkOiBudW1iZXIpOiBBcnJheTxDbHVzdGVyPiB7XG4gICAgICAgIGNvbnN0IGNsdXN0ZXJzID0gbmV3IEFycmF5PENsdXN0ZXI+KCk7XG5cbiAgICAgICAgbW9tZW50cy5mb3JFYWNoKG1vbWVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBtYXRjaGluZ0NsdXN0ZXIgPSBjbHVzdGVycy5maW5kKGNsdXN0ZXIgPT4gY2x1c3Rlci5maXRzKG1vbWVudCkpO1xuXG4gICAgICAgICAgICBpZiAobWF0Y2hpbmdDbHVzdGVyKSB7XG4gICAgICAgICAgICAgICAgbWF0Y2hpbmdDbHVzdGVyLmFkZChtb21lbnQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjbHVzdGVycy5wdXNoKG5ldyBDbHVzdGVyKHRocmVzaG9sZCwgbW9tZW50KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBjbHVzdGVycztcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcih0aHJlc2hvbGQ6IG51bWJlciwgbW9tZW50OiBNb21lbnQpIHtcbiAgICAgICAgdGhpcy5fdGhyZXNob2xkID0gdGhyZXNob2xkO1xuICAgICAgICB0aGlzLl9tb21lbnRzID0gbmV3IEFycmF5PE1vbWVudD4oKTtcbiAgICAgICAgdGhpcy5fY2VudGVyID0ge1xuICAgICAgICAgICAgcmFkOiAwLFxuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IDBcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAobW9tZW50KSB7XG4gICAgICAgICAgICB0aGlzLmFkZChtb21lbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkKHBvaW50OiBNb21lbnQpIHtcbiAgICAgICAgdGhpcy5fbW9tZW50cy5wdXNoKHBvaW50KTtcblxuICAgICAgICAvLyBVcGRhdGUgY2VudGVyXG4gICAgICAgIHRoaXMuX2NlbnRlci5yYWQgPSB0aGlzLl9tb21lbnRzLnJlZHVjZSgoc3VtLCBwKSA9PiBzdW0gKyBwLnJhZCwgMCkgLyB0aGlzLl9tb21lbnRzLmxlbmd0aDtcbiAgICAgICAgdGhpcy5fY2VudGVyLnggPSBNYXRoLmNvcyh0aGlzLl9jZW50ZXIucmFkKTtcbiAgICAgICAgdGhpcy5fY2VudGVyLnkgPSBNYXRoLnNpbih0aGlzLl9jZW50ZXIucmFkKTtcbiAgICB9XG5cbiAgICBmaXRzKG1vbWVudDogTW9tZW50KTogYm9vbGVhbiB7XG4gICAgICAgIC8vIGNoZWNrIGNvc2luZSBzaW1pbGFyaXR5IHRvIGNlbnRlci1hbmdsZVxuICAgICAgICBjb25zdCBzaW1pbGFyaXR5ID0gTWF0aC5hYnMobW9tZW50LnggKiB0aGlzLl9jZW50ZXIueCArIG1vbWVudC55ICogdGhpcy5fY2VudGVyLnkpO1xuICAgICAgICByZXR1cm4gc2ltaWxhcml0eSA+IHRoaXMuX3RocmVzaG9sZDtcbiAgICB9XG5cbiAgICBnZXQgbW9tZW50cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21vbWVudHM7XG4gICAgfVxufVxuIiwiZXhwb3J0IGludGVyZmFjZSBFdmVudENhbGxiYWNrIHtcbiAgICAoZGF0YTogYW55KTogdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFdmVudFN1YnNjcmlwdGlvbiB7XG4gICAgY2FsbGJhY2s6IEV2ZW50Q2FsbGJhY2s7XG4gICAgYXN5bmM/OiBib29sZWFuO1xuICAgIG9uY2U/OiBib29sZWFuO1xufVxuXG5pbnRlcmZhY2UgRXZlbnRJdGVtIHtcbiAgICBzdWJzY3JpcHRpb25zOiBBcnJheTxFdmVudFN1YnNjcmlwdGlvbj5cbn1cblxubGV0IGV2ZW50czogeyBbbmFtZTogc3RyaW5nXTogRXZlbnRJdGVtIH0gPSB7fTtcblxuZXhwb3J0IGNsYXNzIEV2ZW50cyB7XG4gICAgc3RhdGljIHN1YnNjcmliZShldmVudDogc3RyaW5nLCBjYWxsYmFjazogRXZlbnRTdWJzY3JpcHRpb24gfCBFdmVudENhbGxiYWNrLCBhc3luYz86IGJvb2xlYW4pIHtcbiAgICAgICAgbGV0IHN1YnNjcmlwdGlvbjogRXZlbnRTdWJzY3JpcHRpb247XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgc3Vic2NyaXB0aW9uID0ge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrLFxuICAgICAgICAgICAgICAgIGFzeW5jXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3Vic2NyaXB0aW9uID0gY2FsbGJhY2s7XG4gICAgICAgICAgICBpZiAoIXN1YnNjcmlwdGlvbi5jYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIHRocm93ICdDYWxsYmFjayB3YXMgbm90IHNwZWNpZmllZCBvbiBvcHRpb25zJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGdldEV2ZW50KGV2ZW50KS5zdWJzY3JpcHRpb25zLnB1c2goc3Vic2NyaXB0aW9uKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcHVibGlzaCh0eXBlOiBzdHJpbmcsIGRhdGE/OiBhbnkpIHtcbiAgICAgICAgY29uc3QgZXZlbnRJdGVtID0gZ2V0RXZlbnQodHlwZSk7XG4gICAgICAgIGNvbnN0IHN1YnNjcmlwdGlvbnMgPSBldmVudEl0ZW0uc3Vic2NyaXB0aW9ucztcblxuICAgICAgICAvLyBQdWJsaXNoIG9uZS10aW1lIHN1YnNjcmlwdGlvbnNcbiAgICAgICAgc3Vic2NyaXB0aW9ucy5maWx0ZXIoKHsgb25jZSB9KSA9PiAhIW9uY2UpLmZvckVhY2goc3Vic2NyaXB0aW9uID0+IHB1Ymxpc2hTdWJzY3JpcHRpb24oc3Vic2NyaXB0aW9uLCBkYXRhKSk7XG5cbiAgICAgICAgLy8gcmVtb3ZlIHRoZW0gZnJvbSB0aGUgc3Vic2NyaXB0aW9uXG4gICAgICAgIGV2ZW50SXRlbS5zdWJzY3JpcHRpb25zID0gc3Vic2NyaXB0aW9ucy5maWx0ZXIoKHsgb25jZSB9KSA9PiAhb25jZSk7XG5cbiAgICAgICAgLy8gcHVibGlzaCB0aGUgcmVzdFxuICAgICAgICBldmVudEl0ZW0uc3Vic2NyaXB0aW9ucy5mb3JFYWNoKHN1YnNjcmlwdGlvbiA9PiBwdWJsaXNoU3Vic2NyaXB0aW9uKHN1YnNjcmlwdGlvbiwgZGF0YSkpO1xuICAgIH1cblxuICAgIHN0YXRpYyBvbmNlKGV2ZW50OiBzdHJpbmcsIGNhbGxiYWNrOiBFdmVudENhbGxiYWNrLCBhc3luYz86IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgRXZlbnRzLnN1YnNjcmliZShldmVudCwgeyBjYWxsYmFjaywgYXN5bmMsIG9uY2U6IHRydWUgfSk7XG4gICAgfVxuXG4gICAgc3RhdGljIHVuc3Vic2NyaWJlKGV2ZW50TmFtZT86IHN0cmluZywgY2FsbGJhY2s/OiBFdmVudENhbGxiYWNrKSB7XG4gICAgICAgIGlmIChldmVudE5hbWUpIHtcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0gZ2V0RXZlbnQoZXZlbnROYW1lKTtcbiAgICAgICAgICAgIGlmIChldmVudCAmJiBjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIGV2ZW50LnN1YnNjcmlwdGlvbnMgPSBldmVudC5zdWJzY3JpcHRpb25zLmZpbHRlcihzdWJzY3JpcHRpb24gPT4gc3Vic2NyaXB0aW9uLmNhbGxiYWNrICE9PSBjYWxsYmFjayk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGV2ZW50LnN1YnNjcmlwdGlvbnMgPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGV2ZW50cyA9IHt9O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXRFdmVudChldmVudE5hbWU6IHN0cmluZyk6IEV2ZW50SXRlbSB7XG4gICAgaWYgKCFldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgICBldmVudHNbZXZlbnROYW1lXSA9IHtcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbnM6IFtdXG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBldmVudHNbZXZlbnROYW1lXTtcbn1cblxuZnVuY3Rpb24gcHVibGlzaFN1YnNjcmlwdGlvbihzdWJzY3JpcHRpb246IEV2ZW50U3Vic2NyaXB0aW9uLCBkYXRhOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAoc3Vic2NyaXB0aW9uLmFzeW5jKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc3Vic2NyaXB0aW9uLmNhbGxiYWNrKGRhdGEpO1xuICAgICAgICB9LCA0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBzdWJzY3JpcHRpb24uY2FsbGJhY2soZGF0YSk7XG4gICAgfVxufVxuIiwiZXhwb3J0IHR5cGUgSFNWID0gW251bWJlciwgbnVtYmVyLCBudW1iZXJdO1xuXG5leHBvcnQgdHlwZSBSR0IgPSBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl07XG5cbmV4cG9ydCBmdW5jdGlvbiBoc3YycmdiKGhzdjogSFNWLCByZ2I/OiBSR0IpOiBSR0Ige1xuICAgIGNvbnN0IGggPSBoc3ZbMF07XG4gICAgY29uc3QgcyA9IGhzdlsxXTtcbiAgICBjb25zdCB2ID0gaHN2WzJdO1xuICAgIGNvbnN0IGMgPSB2ICogcztcbiAgICBjb25zdCB4ID0gYyAqICgxIC0gTWF0aC5hYnMoKGggLyA2MCkgJSAyIC0gMSkpO1xuICAgIGNvbnN0IG0gPSB2IC0gYztcbiAgICBsZXQgciA9IDA7XG4gICAgbGV0IGcgPSAwO1xuICAgIGxldCBiID0gMDtcblxuICAgIGlmIChoIDwgNjApIHtcbiAgICAgICAgciA9IGM7XG4gICAgICAgIGcgPSB4O1xuICAgIH0gZWxzZSBpZiAoaCA8IDEyMCkge1xuICAgICAgICByID0geDtcbiAgICAgICAgZyA9IGM7XG4gICAgfSBlbHNlIGlmIChoIDwgMTgwKSB7XG4gICAgICAgIGcgPSBjO1xuICAgICAgICBiID0geDtcbiAgICB9IGVsc2UgaWYgKGggPCAyNDApIHtcbiAgICAgICAgZyA9IHg7XG4gICAgICAgIGIgPSBjO1xuICAgIH0gZWxzZSBpZiAoaCA8IDMwMCkge1xuICAgICAgICByID0geDtcbiAgICAgICAgYiA9IGM7XG4gICAgfSBlbHNlIGlmIChoIDwgMzYwKSB7XG4gICAgICAgIHIgPSBjO1xuICAgICAgICBiID0geDtcbiAgICB9XG5cbiAgICByZ2IgPSByZ2IgfHwgWzAsIDAsIDBdO1xuXG4gICAgcmdiWzBdID0gKHIgKyBtKSAqIDI1NSB8IDA7XG4gICAgcmdiWzFdID0gKGcgKyBtKSAqIDI1NSB8IDA7XG4gICAgcmdiWzJdID0gKGIgKyBtKSAqIDI1NSB8IDA7XG5cbiAgICByZXR1cm4gcmdiO1xufVxuIiwiaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuL3BvaW50JztcblxuZXhwb3J0IGNvbnN0IEltYWdlRGVidWcgPSB7XG4gICAgZHJhd1BhdGgocGF0aDogQXJyYXk8UG9pbnQ+LCBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIGNvbG9yOiBzdHJpbmcsIGxpbmVXaWR0aDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmIChwYXRoICYmIHBhdGgubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9IGNvbG9yO1xuICAgICAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICAgICAgICAgIGNvbnRleHQubGluZVdpZHRoID0gbGluZVdpZHRoO1xuICAgICAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGNvbnRleHQubW92ZVRvKHBhdGhbMF0ueCwgcGF0aFswXS55KTtcbiAgICAgICAgICAgIHBhdGguc2xpY2UoMSkuZm9yRWFjaCgoeyB4LCB5IH0pID0+IGNvbnRleHQubGluZVRvKHgsIHkpKTtcbiAgICAgICAgICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICBjb250ZXh0LnN0cm9rZSgpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGRyYXdJbWFnZShpbWFnZURhdGE6IFVpbnQ4QXJyYXksIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgY2FudmFzRGF0YSA9IGNvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICBjb25zdCBkYXRhID0gY2FudmFzRGF0YS5kYXRhO1xuICAgICAgICBsZXQgaW1hZ2VJbmRleCA9IGltYWdlRGF0YS5sZW5ndGggfCAwO1xuICAgICAgICBsZXQgY2FudmFzSW5kZXggPSBkYXRhLmxlbmd0aCB8IDA7XG5cbiAgICAgICAgaWYgKGNhbnZhc0luZGV4IC8gaW1hZ2VJbmRleCAhPT0gNCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgd2hpbGUgKGltYWdlSW5kZXgtLSkge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBpbWFnZURhdGFbaW1hZ2VJbmRleF07XG4gICAgICAgICAgICBkYXRhWy0tY2FudmFzSW5kZXhdID0gMjU1O1xuICAgICAgICAgICAgZGF0YVstLWNhbnZhc0luZGV4XSA9IHZhbHVlO1xuICAgICAgICAgICAgZGF0YVstLWNhbnZhc0luZGV4XSA9IHZhbHVlO1xuICAgICAgICAgICAgZGF0YVstLWNhbnZhc0luZGV4XSA9IHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5wdXRJbWFnZURhdGEoY2FudmFzRGF0YSwgMCwgMCk7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTW9tZW50IH0gZnJvbSAnLi9tb21lbnQnO1xuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuL3BvaW50JztcbmltcG9ydCB7IEhTViwgaHN2MnJnYiwgUkdCIH0gZnJvbSAnLi9oc3YycmdiJztcblxudHlwZSBBcnJheVR5cGUgPSBBcnJheTxudW1iZXI+IHwgVWludDhBcnJheSB8IEludDMyQXJyYXk7XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIGJhc2ljIGltYWdlIGNvbWJpbmluZyB0aGUgZGF0YSBhbmQgc2l6ZS5cbiAqIEluIGFkZGl0aW9uLCBzb21lIG1ldGhvZHMgZm9yIG1hbmlwdWxhdGlvbiBhcmUgY29udGFpbmVkLlxuICovXG5leHBvcnQgY2xhc3MgSW1hZ2VXcmFwcGVyPFQgZXh0ZW5kcyBBcnJheVR5cGUgPSBVaW50OEFycmF5PiB7XG4gICAgZGF0YTogVCB8IFVpbnQ4QXJyYXk7XG4gICAgc2l6ZTogUG9pbnQ7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2l6ZSBUaGUgc2l6ZSBvZiB0aGUgaW1hZ2UgaW4gcGl4ZWxcbiAgICAgKiBAcGFyYW0gZGF0YSBJZiBnaXZlbiwgYSBmbGF0IGFycmF5IGNvbnRhaW5pbmcgdGhlIHBpeGVsIGRhdGFcbiAgICAgKiBAcGFyYW0gYXJyYXlUeXBlIElmIGdpdmVuLCB0aGUgZGVzaXJlZCBEYXRhVHlwZSBvZiB0aGUgQXJyYXkgKG1heSBiZSB0eXBlZC9ub24tdHlwZWQpXG4gICAgICogQHBhcmFtIGluaXRpYWxpemUgSW5kaWNhdGluZyBpZiB0aGUgYXJyYXkgc2hvdWxkIGJlIGluaXRpYWxpemVkIG9uIGNyZWF0aW9uLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNpemU6IFBvaW50LCBkYXRhPzogVCwgYXJyYXlUeXBlPzogeyBuZXcoXzogbnVtYmVyKTogVCB8IFVpbnQ4QXJyYXkgfSwgaW5pdGlhbGl6ZT86IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGEgPSBuZXcgKGFycmF5VHlwZSB8fCBVaW50OEFycmF5KShzaXplLnggKiBzaXplLnkpO1xuXG4gICAgICAgICAgICBpZiAoaW5pdGlhbGl6ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5maWxsKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGVzdHMgaWYgYSBwb3NpdGlvbiBpcyB3aXRoaW4gdGhlIGltYWdlIHdpdGggYSBnaXZlbiBvZmZzZXRcbiAgICAgKiBAcGFyYW0gcG9pbnQgVGhlIGxvY2F0aW9uIHRvIHRlc3RcbiAgICAgKiBAcGFyYW0gYm9yZGVyIFRoZSBwYWRkaW5nIHZhbHVlIGluIHBpeGVsc1xuICAgICAqIEByZXR1cm5zIHRydWUgaWYgbG9jYXRpb24gaW5zaWRlIHRoZSBpbWFnZSdzIGJvcmRlciwgZmFsc2Ugb3RoZXJ3aXNlXG4gICAgICogQHNlZSBjdmQvaW1hZ2UuaFxuICAgICAqL1xuICAgIGluSW1hZ2VXaXRoQm9yZGVyKHBvaW50OiBQb2ludCwgYm9yZGVyOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIChwb2ludC54ID49IGJvcmRlcilcbiAgICAgICAgICAgICYmIChwb2ludC55ID49IGJvcmRlcilcbiAgICAgICAgICAgICYmIChwb2ludC54IDwgKHRoaXMuc2l6ZS54IC0gYm9yZGVyKSlcbiAgICAgICAgICAgICYmIChwb2ludC55IDwgKHRoaXMuc2l6ZS55IC0gYm9yZGVyKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiB7SW1hZ2VXcmFwcGVyKSBhbmQgY29waWVzIHRoZSBuZWVkZWQgdW5kZXJseWluZyBpbWFnZS1kYXRhIGFyZWFcbiAgICAgKiBAcGFyYW0gaW1hZ2VXcmFwcGVyIFRoZSB0YXJnZXQge0ltYWdlV3JhcHBlcn0gd2hlcmUgdGhlIGRhdGEgc2hvdWxkIGJlIGNvcGllZFxuICAgICAqIEBwYXJhbSBmcm9tWCBUaGUgaG9yaXpvbnRhbCBwb3NpdGlvbiB3aGVyZSB0byBjb3B5IGZyb21cbiAgICAgKiBAcGFyYW0gZnJvbVkgVGhlIHZlcnRpY2FsIHBvc2l0aW9uIHdoZXJlIHRvIGNvcHkgZnJvbVxuICAgICovXG4gICAgc3ViSW1hZ2VBc0NvcHkoaW1hZ2VXcmFwcGVyOiBJbWFnZVdyYXBwZXIsIGZyb21YOiBudW1iZXIsIGZyb21ZOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgc2l6ZVkgPSBpbWFnZVdyYXBwZXIuc2l6ZS55O1xuICAgICAgICBjb25zdCBzaXplWCA9IGltYWdlV3JhcHBlci5zaXplLng7XG5cbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBzaXplWDsgeCsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHNpemVZOyB5KyspIHtcbiAgICAgICAgICAgICAgICBpbWFnZVdyYXBwZXIuZGF0YVt5ICogc2l6ZVggKyB4XSA9IHRoaXMuZGF0YVsoZnJvbVkgKyB5KSAqIHRoaXMuc2l6ZS54ICsgZnJvbVggKyB4XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHJpZXZlcyBhIGdpdmVuIHBpeGVsIHBvc2l0aW9uIGZyb20gdGhlIGltYWdlXG4gICAgICogQHBhcmFtIHggVGhlIHgtcG9zaXRpb25cbiAgICAgKiBAcGFyYW0geSBUaGUgeS1wb3NpdGlvblxuICAgICAqIEByZXR1cm5zIFRoZSBncmF5c2NhbGUgdmFsdWUgYXQgdGhlIHBpeGVsLXBvc2l0aW9uXG4gICAgICovXG4gICAgZ2V0KHg6IG51bWJlciwgeTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVt5ICogdGhpcy5zaXplLnggKyB4XTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIGEgZ2l2ZW4gcGl4ZWwgcG9zaXRpb24gaW4gdGhlIGltYWdlXG4gICAgICogQHBhcmFtIHggVGhlIHgtcG9zaXRpb25cbiAgICAgKiBAcGFyYW0geSBUaGUgeS1wb3NpdGlvblxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgZ3JheXNjYWxlIHZhbHVlIHRvIHNldFxuICAgICAqIEByZXR1cm5zIFRoZSBJbWFnZSBpdHNlbGYgKGZvciBwb3NzaWJsZSBjaGFpbmluZylcbiAgICAgKi9cbiAgICBzZXQoeDogbnVtYmVyLCB5OiBudW1iZXIsIHZhbHVlOiBudW1iZXIpOiBJbWFnZVdyYXBwZXI8VD4ge1xuICAgICAgICB0aGlzLmRhdGFbeSAqIHRoaXMuc2l6ZS54ICsgeF0gPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgYm9yZGVyIG9mIHRoZSBpbWFnZSAoMSBwaXhlbCkgdG8gemVyb1xuICAgICAqL1xuICAgIHplcm9Cb3JkZXIoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy5zaXplLng7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuc2l6ZS55O1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd2lkdGg7IGkrKykge1xuICAgICAgICAgICAgZGF0YVtpXSA9IGRhdGFbKGhlaWdodCAtIDEpICogd2lkdGggKyBpXSA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGhlaWdodCAtIDE7IGkrKykge1xuICAgICAgICAgICAgZGF0YVtpICogd2lkdGhdID0gZGF0YVtpICogd2lkdGggKyAod2lkdGggLSAxKV0gPSAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW52ZXJ0cyBhIGJpbmFyeSBpbWFnZSBpbiBwbGFjZVxuICAgICAqL1xuICAgIGludmVydCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YTtcblxuICAgICAgICBmb3IgKGxldCBpID0gZGF0YS5sZW5ndGg7IGktLTspIHtcbiAgICAgICAgICAgIGRhdGFbaV0gPSBkYXRhW2ldID8gMCA6IDE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtb21lbnRzKGxhYmVsQ291bnQ6IG51bWJlcik6IEFycmF5PE1vbWVudD4ge1xuICAgICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLnNpemUueTtcbiAgICAgICAgY29uc3Qgd2lkdGggPSB0aGlzLnNpemUueDtcbiAgICAgICAgY29uc3QgbGFiZWxTdW0gPSBuZXcgQXJyYXk8TW9tZW50PigpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgQXJyYXk8TW9tZW50PigpO1xuXG4gICAgICAgIGlmIChsYWJlbENvdW50IDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxhYmVsQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgbGFiZWxTdW1baV0gPSB7XG4gICAgICAgICAgICAgICAgbTAwOiAwLFxuICAgICAgICAgICAgICAgIG0wMTogMCxcbiAgICAgICAgICAgICAgICBtMTA6IDAsXG4gICAgICAgICAgICAgICAgbTExOiAwLFxuICAgICAgICAgICAgICAgIG0wMjogMCxcbiAgICAgICAgICAgICAgICBtMjA6IDAsXG4gICAgICAgICAgICAgICAgdGhldGE6IDAsXG4gICAgICAgICAgICAgICAgcmFkOiAwXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBoZWlnaHQ7IHkrKykge1xuICAgICAgICAgICAgY29uc3QgeXNxID0geSAqIHk7XG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHdpZHRoOyB4KyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWwgPSB0aGlzLmRhdGFbeSAqIHdpZHRoICsgeF07XG4gICAgICAgICAgICAgICAgaWYgKHZhbCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBsYWJlbFN1bVt2YWwgLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwubTAwICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsLm0wMSArPSB5O1xuICAgICAgICAgICAgICAgICAgICBsYWJlbC5tMTAgKz0geDtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwubTExICs9IHggKiB5O1xuICAgICAgICAgICAgICAgICAgICBsYWJlbC5tMDIgKz0geXNxO1xuICAgICAgICAgICAgICAgICAgICBsYWJlbC5tMjAgKz0geCAqIHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgUEkgPSBNYXRoLlBJO1xuICAgICAgICBjb25zdCBQSV80ID0gUEkgLyA0O1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGFiZWxDb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBsYWJlbCA9IGxhYmVsU3VtW2ldO1xuICAgICAgICAgICAgaWYgKCFpc05hTihsYWJlbC5tMDApICYmIGxhYmVsLm0wMCAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHhfID0gbGFiZWwubTEwIC8gbGFiZWwubTAwO1xuICAgICAgICAgICAgICAgIGNvbnN0IHlfID0gbGFiZWwubTAxIC8gbGFiZWwubTAwO1xuICAgICAgICAgICAgICAgIGNvbnN0IG11MTEgPSBsYWJlbC5tMTEgLyBsYWJlbC5tMDAgLSB4XyAqIHlfO1xuICAgICAgICAgICAgICAgIGNvbnN0IG11MDIgPSBsYWJlbC5tMDIgLyBsYWJlbC5tMDAgLSB5XyAqIHlfO1xuICAgICAgICAgICAgICAgIGNvbnN0IG11MjAgPSBsYWJlbC5tMjAgLyBsYWJlbC5tMDAgLSB4XyAqIHhfO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRtcCA9IDAuNSAqIE1hdGguYXRhbigobXUwMiAtIG11MjApIC8gKDIgKiBtdTExKSkgKyAobXUxMSA+PSAwID8gUElfNCA6IC1QSV80KSArIFBJO1xuICAgICAgICAgICAgICAgIGxhYmVsLnRoZXRhID0gKHRtcCAqIDE4MCAvIFBJICsgOTApICUgMTgwIC0gOTA7XG4gICAgICAgICAgICAgICAgaWYgKGxhYmVsLnRoZXRhIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbC50aGV0YSArPSAxODA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxhYmVsLnJhZCA9IHRtcCA+IFBJID8gdG1wIC0gUEkgOiB0bXA7XG4gICAgICAgICAgICAgICAgbGFiZWwueCA9IE1hdGguY29zKHRtcCk7XG4gICAgICAgICAgICAgICAgbGFiZWwueSA9IE1hdGguc2luKHRtcCk7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gobGFiZWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEaXNwbGF5cyB0aGUge0ltYWdlV3JhcHBlcn0gaW4gYSBnaXZlbiBjYW52YXNcbiAgICAgKiBAcGFyYW0gY29udGV4dCBUaGUgcmVuZGVyaW5nIGNvbnRleHQgdG8gd3JpdGUgdG9cbiAgICAgKiBAcGFyYW0gc2NhbGUgU2NhbGUgd2hpY2ggaXMgYXBwbGllZCB0byBlYWNoIHBpeGVsLXZhbHVlXG4gICAgICovXG4gICAgc2hvdyhjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHNjYWxlOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5zaXplLnk7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy5zaXplLng7XG4gICAgICAgIC8vIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgLy8gY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgLy8gY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIGNvbnN0IGZyYW1lID0gY29udGV4dC5nZXRJbWFnZURhdGEoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBmcmFtZS5kYXRhO1xuICAgICAgICBsZXQgY3VycmVudCA9IDA7XG5cbiAgICAgICAgaWYgKCFzY2FsZSkge1xuICAgICAgICAgICAgc2NhbGUgPSAxLjA7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGhlaWdodDsgeSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHdpZHRoOyB4KyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwaXhlbCA9IHkgKiB3aWR0aCArIHg7XG4gICAgICAgICAgICAgICAgY3VycmVudCA9IHRoaXMuZ2V0KHgsIHkpICogc2NhbGU7XG4gICAgICAgICAgICAgICAgZGF0YVtwaXhlbCAqIDQgKyAwXSA9IGN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgZGF0YVtwaXhlbCAqIDQgKyAxXSA9IGN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgZGF0YVtwaXhlbCAqIDQgKyAyXSA9IGN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgZGF0YVtwaXhlbCAqIDQgKyAzXSA9IDI1NTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vZnJhbWUuZGF0YSA9IGRhdGE7XG4gICAgICAgIGNvbnRleHQucHV0SW1hZ2VEYXRhKGZyYW1lLCAwLCAwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEaXNwbGF5cyB0aGUgcGFydCBvZiB0aGUgaW1hZ2UgaW4gYSBnaXZlbiBjYW52YXNcbiAgICAgKiBAcGFyYW0gY29udGV4dCBUaGUgcmVuZGVyaW5nIGNvbnRleHQgdG8gd3JpdGUgdG9cbiAgICAgKiBAcGFyYW0gc2NhbGUgU2NhbGUgd2hpY2ggaXMgYXBwbGllZCB0byBlYWNoIHBpeGVsLXZhbHVlXG4gICAgICogQHBhcmFtIGZyb21YIFRoZSBob3Jpem9udGFsIHBvc2l0aW9uIHdoZXJlIHRvIG92ZXJsYXkgZnJvbVxuICAgICAqIEBwYXJhbSBmcm9tWSBUaGUgdmVydGljYWwgcG9zaXRpb24gd2hlcmUgdG8gb3ZlcmxheSBmcm9tXG4gICAgICovXG4gICAgb3ZlcmxheShjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHNjYWxlOiBudW1iZXIsIGZyb21YOiBudW1iZXIsIGZyb21ZOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgaHN2OiBIU1YgPSBbMCwgMSwgMV07XG4gICAgICAgIGNvbnN0IHdoaXRlUmdiOiBSR0IgPSBbMjU1LCAyNTUsIDI1NV07XG4gICAgICAgIGNvbnN0IGJsYWNrUmdiOiBSR0IgPSBbMCwgMCwgMF07XG4gICAgICAgIGNvbnN0IGZyYW1lID0gY29udGV4dC5nZXRJbWFnZURhdGEoZnJvbVgsIGZyb21ZLCB0aGlzLnNpemUueCwgdGhpcy5zaXplLnkpO1xuICAgICAgICBjb25zdCBkYXRhID0gZnJhbWUuZGF0YTtcblxuICAgICAgICBpZiAoIXNjYWxlIHx8IHNjYWxlIDwgMCB8fCBzY2FsZSA+IDM2MCkge1xuICAgICAgICAgICAgc2NhbGUgPSAzNjA7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBsZW5ndGggPSB0aGlzLmRhdGEubGVuZ3RoOyBsZW5ndGgtLTspIHtcbiAgICAgICAgICAgIGhzdlswXSA9IHRoaXMuZGF0YVtsZW5ndGhdICogc2NhbGU7XG4gICAgICAgICAgICBjb25zdCByZ2I6IFJHQiA9IGhzdlswXSA8PSAwID8gd2hpdGVSZ2IgOiBoc3ZbMF0gPj0gMzYwID8gYmxhY2tSZ2IgOiBoc3YycmdiKGhzdik7XG4gICAgICAgICAgICBkYXRhW2xlbmd0aCAqIDQgKyAwXSA9IHJnYlswXTtcbiAgICAgICAgICAgIGRhdGFbbGVuZ3RoICogNCArIDFdID0gcmdiWzFdO1xuICAgICAgICAgICAgZGF0YVtsZW5ndGggKiA0ICsgMl0gPSByZ2JbMl07XG4gICAgICAgICAgICBkYXRhW2xlbmd0aCAqIDQgKyAzXSA9IDI1NTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQucHV0SW1hZ2VEYXRhKGZyYW1lLCBmcm9tWCwgZnJvbVkpO1xuICAgIH1cbn1cbiIsIlxuZXhwb3J0IGZ1bmN0aW9uIGVudW1lcmF0ZURldmljZXMoKTogUHJvbWlzZTxBcnJheTxNZWRpYURldmljZUluZm8+PiB7XG4gICAgaWYgKG5hdmlnYXRvci5tZWRpYURldmljZXMgJiYgdHlwZW9mIG5hdmlnYXRvci5tZWRpYURldmljZXMuZW51bWVyYXRlRGV2aWNlcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5lbnVtZXJhdGVEZXZpY2VzKCk7XG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ2VudW1lcmF0ZURldmljZXMgaXMgbm90IGRlZmluZWQnKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVc2VyTWVkaWEoY29uc3RyYWludHM6IE1lZGlhU3RyZWFtQ29uc3RyYWludHMpOiBQcm9taXNlPE1lZGlhU3RyZWFtPiB7XG4gICAgaWYgKG5hdmlnYXRvci5tZWRpYURldmljZXMgJiYgdHlwZW9mIG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYShjb25zdHJhaW50cyk7XG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ2dldFVzZXJNZWRpYSBpcyBub3QgZGVmaW5lZCcpKTtcbn1cbiIsIi8qKlxuICogUGVyZm9ybXMgYSBkZWVwIG1lcmdlIG9mIG9iamVjdHMgYW5kIHJldHVybnMgbmV3IG9iamVjdC5cbiAqIERvZXMgbm90IG1vZGlmeSBvYmplY3RzIChpbW11dGFibGUpLlxuICogQHNlZSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNDgyMTgyMDlcbiAqXG4gKiBAcGFyYW0gb2JqZWN0cyAtIE9iamVjdHMgdG8gbWVyZ2VcbiAqIEByZXR1cm5zIE5ldyBvYmplY3Qgd2l0aCBtZXJnZWQga2V5L3ZhbHVlc1xuICovXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2UoLi4ub2JqZWN0czogUmVhZG9ubHlBcnJheTxhbnk+KTogb2JqZWN0IHtcbiAgICBjb25zdCBpc09iamVjdCA9IChvYmo6IHVua25vd24pID0+IG9iaiAmJiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JztcblxuICAgIHJldHVybiBvYmplY3RzLnJlZHVjZSgocHJldiwgb2JqKSA9PiB7XG4gICAgICAgIGlmIChvYmopIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBWYWwgPSBwcmV2W2tleV07XG4gICAgICAgICAgICAgICAgY29uc3Qgb1ZhbCA9IG9ialtrZXldO1xuXG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocFZhbCkgJiYgQXJyYXkuaXNBcnJheShvVmFsKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBwcmV2W2tleV0gPSBwVmFsLmNvbmNhdCguLi5vVmFsKTtcbiAgICAgICAgICAgICAgICAgICAgcHJldltrZXldID0gb1ZhbDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGlzT2JqZWN0KHBWYWwpICYmIGlzT2JqZWN0KG9WYWwpKSB7XG4gICAgICAgICAgICAgICAgICAgIHByZXZba2V5XSA9IG1lcmdlKHBWYWwsIG9WYWwpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHByZXZba2V5XSA9IG9WYWw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcHJldjtcbiAgICB9LCB7fSk7XG59IiwiaW1wb3J0IHsgUXVhZ2dhQ29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuXG5leHBvcnQgY29uc3QgY29uZmlnOiBRdWFnZ2FDb25maWcgPSB7XG4gICAgaW5wdXRTdHJlYW06IHtcbiAgICAgICAgbmFtZTogJ0xpdmUnLFxuICAgICAgICB0eXBlOiAnTGl2ZVN0cmVhbScsXG4gICAgICAgIGNvbnN0cmFpbnRzOiB7XG4gICAgICAgICAgICB3aWR0aDogNjQwLFxuICAgICAgICAgICAgaGVpZ2h0OiA0ODAsXG4gICAgICAgICAgICAvLyBhc3BlY3RSYXRpbzogNjQwLzQ4MCwgLy8gb3B0aW9uYWxcbiAgICAgICAgICAgIGZhY2luZ01vZGU6ICdlbnZpcm9ubWVudCcgLy8gb3IgdXNlclxuICAgICAgICAgICAgLy8gZGV2aWNlSWQ6ICczODc0NTk4MzQ1NzM4NzU5ODM3NTk4Mzc1OTgzNCdcbiAgICAgICAgfSxcbiAgICAgICAgYXJlYToge1xuICAgICAgICAgICAgdG9wOiAnMCUnLFxuICAgICAgICAgICAgcmlnaHQ6ICcwJScsXG4gICAgICAgICAgICBsZWZ0OiAnMCUnLFxuICAgICAgICAgICAgYm90dG9tOiAnMCUnXG4gICAgICAgIH0sXG4gICAgICAgIHNpbmdsZUNoYW5uZWw6IGZhbHNlIC8vIHRydWU6IG9ubHkgdGhlIHJlZCBjb2xvci1jaGFubmVsIGlzIHJlYWRcbiAgICB9LFxuICAgIGxvY2F0ZTogdHJ1ZSxcbiAgICBudW1PZldvcmtlcnM6IDAsXG4gICAgZGVjb2Rlcjoge1xuICAgICAgICByZWFkZXJzOiBbXG4gICAgICAgICAgICAnY29kZV8xMjhfcmVhZGVyJ1xuICAgICAgICBdLFxuICAgICAgICBkZWJ1Zzoge1xuICAgICAgICAgICAgZHJhd0JvdW5kaW5nQm94OiBmYWxzZSxcbiAgICAgICAgICAgIHNob3dGcmVxdWVuY3k6IGZhbHNlLFxuICAgICAgICAgICAgZHJhd1NjYW5saW5lOiBmYWxzZSxcbiAgICAgICAgICAgIHNob3dQYXR0ZXJuOiBmYWxzZVxuICAgICAgICB9XG4gICAgfSxcbiAgICBsb2NhdG9yOiB7XG4gICAgICAgIGhhbGZTYW1wbGU6IHRydWUsXG4gICAgICAgIHBhdGNoU2l6ZTogJ21lZGl1bScsIC8vIHgtc21hbGwsIHNtYWxsLCBtZWRpdW0sIGxhcmdlLCB4LWxhcmdlXG4gICAgICAgIGRlYnVnOiB7XG4gICAgICAgICAgICBzaG93Q2FudmFzOiBmYWxzZSxcbiAgICAgICAgICAgIHNob3dQYXRjaGVzOiBmYWxzZSxcbiAgICAgICAgICAgIHNob3dGb3VuZFBhdGNoZXM6IGZhbHNlLFxuICAgICAgICAgICAgc2hvd1NrZWxldG9uOiBmYWxzZSxcbiAgICAgICAgICAgIHNob3dMYWJlbHM6IGZhbHNlLFxuICAgICAgICAgICAgc2hvd1BhdGNoTGFiZWxzOiBmYWxzZSxcbiAgICAgICAgICAgIHNob3dSZW1haW5pbmdQYXRjaExhYmVsczogZmFsc2UsXG4gICAgICAgICAgICBib3hGcm9tUGF0Y2hlczoge1xuICAgICAgICAgICAgICAgIHNob3dUcmFuc2Zvcm1lZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2hvd1RyYW5zZm9ybWVkQm94OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzaG93QkI6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuIiwiaW1wb3J0IHsgQm94IH0gZnJvbSAnLi4vY29tbW9uL2JveCc7XG5pbXBvcnQgeyBJbWFnZVdyYXBwZXIgfSBmcm9tICcuLi9jb21tb24vaW1hZ2Utd3JhcHBlcic7XG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJy4uL2NvbW1vbi9wb2ludCc7XG5pbXBvcnQgeyBSZWFkZXJzIH0gZnJvbSAnLi4vcmVhZGVyL2luZGV4JztcbmltcG9ydCB7IEJhcmNvZGUsIEJhcmNvZGVSZWFkZXIsIEJhcmNvZGVSZWFkZXJDb25maWcsIEJhcmNvZGVSZWFkZXJEZWNsYXJhdGlvbiwgQmFyY29kZVJlYWRlclR5cGUgfSBmcm9tICcuLi9yZWFkZXIvYmFyY29kZS1yZWFkZXInO1xuaW1wb3J0IHsgQmFyY29kZUxpbmUsIEJyZXNlbmhhbSB9IGZyb20gJy4vYnJlc2VuaGFtJztcbmltcG9ydCB7IEltYWdlRGVidWcgfSBmcm9tICcuLi9jb21tb24vaW1hZ2UtZGVidWcnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEJhcmNvZGVEZWNvZGVyQ29uZmlnIHtcbiAgICBkZWJ1Zz86IHtcbiAgICAgICAgZHJhd0JvdW5kaW5nQm94PzogYm9vbGVhbjtcbiAgICAgICAgZHJhd1NjYW5saW5lPzogYm9vbGVhbjtcbiAgICAgICAgc2hvd0ZyZXF1ZW5jeT86IGJvb2xlYW47XG4gICAgICAgIHNob3dQYXR0ZXJuPzogYm9vbGVhbjtcbiAgICB9O1xuICAgIG11bHRpcGxlPzogYm9vbGVhbjtcbiAgICByZWFkZXJzPzogQXJyYXk8QmFyY29kZVJlYWRlckRlY2xhcmF0aW9uPjtcbn1cblxudHlwZSBMaW5lID0gW1BvaW50LCBQb2ludF07XG5cbmV4cG9ydCBpbnRlcmZhY2UgUXVhZ2dhQmFyY29kZSB7XG4gICAgYW5nbGU/OiBudW1iZXI7XG4gICAgYmFyY29kZXM/OiBBcnJheTxRdWFnZ2FCYXJjb2RlPjsgLy8gVE9PRDogZGVhbCB3aXRoIG11bHRpcGxlIHJlc3VsdHNcbiAgICBib3g/OiBCb3g7XG4gICAgYm94ZXM/OiBBcnJheTxCb3g+OyAvLyBUT09EOiBkZWFsIHdpdGggbXVsdGlwbGUgcmVzdWx0c1xuICAgIGNvZGVSZXN1bHQ/OiBCYXJjb2RlO1xuICAgIGZyYW1lPzogc3RyaW5nO1xuICAgIGxpbmU/OiBMaW5lO1xuICAgIHBhdHRlcm4/OiBBcnJheTxudW1iZXI+O1xuICAgIHRocmVzaG9sZD86IG51bWJlcjtcbn07XG5cbmludGVyZmFjZSBCYXJjb2RlQW5kQmFyY29kZUxpbmUge1xuICAgIGNvZGVSZXN1bHQ6IEJhcmNvZGU7XG4gICAgYmFyY29kZUxpbmU6IEJhcmNvZGVMaW5lO1xufVxuXG5leHBvcnQgY2xhc3MgQmFyY29kZURlY29kZXIge1xuICAgIHByaXZhdGUgX2NvbmZpZzogQmFyY29kZURlY29kZXJDb25maWc7XG4gICAgcHJpdmF0ZSBfaW5wdXRJbWFnZVdyYXBwZXI6IEltYWdlV3JhcHBlcjxVaW50OEFycmF5PjtcbiAgICBwcml2YXRlIF9mcmVxdWVuY3lDYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICAgIHByaXZhdGUgX3BhdHRlcm5DYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICAgIHByaXZhdGUgX292ZXJsYXlDb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4gICAgcHJpdmF0ZSBfYmFyY29kZVJlYWRlcnM6IEFycmF5PEJhcmNvZGVSZWFkZXI+O1xuXG4gICAgY29uc3RydWN0b3IoY29uZmlnOiBCYXJjb2RlRGVjb2RlckNvbmZpZywgaW5wdXRJbWFnZVdyYXBwZXI6IEltYWdlV3JhcHBlcjxVaW50OEFycmF5Pikge1xuICAgICAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG4gICAgICAgIHRoaXMuX2lucHV0SW1hZ2VXcmFwcGVyID0gaW5wdXRJbWFnZVdyYXBwZXI7XG4gICAgICAgIHRoaXMuX2JhcmNvZGVSZWFkZXJzID0gW107XG5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdGhpcy5fY29uZmlnLmRlYnVnICYmIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGNvbnN0IGRlYnVnRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RlYnVnLmRldGVjdGlvbicpO1xuXG4gICAgICAgICAgICB0aGlzLl9mcmVxdWVuY3lDYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjYW52YXMuZnJlcXVlbmN5Jyk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX2ZyZXF1ZW5jeUNhbnZhcykge1xuICAgICAgICAgICAgICAgIHRoaXMuX2ZyZXF1ZW5jeUNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2ZyZXF1ZW5jeUNhbnZhcy5jbGFzc05hbWUgPSAnZnJlcXVlbmN5JztcbiAgICAgICAgICAgICAgICBpZiAoZGVidWdEaXYpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVidWdEaXYuYXBwZW5kQ2hpbGQodGhpcy5fZnJlcXVlbmN5Q2FudmFzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9mcmVxdWVuY3lDYW52YXMuc3R5bGUuZGlzcGxheSA9IHRoaXMuX2NvbmZpZy5kZWJ1Zy5zaG93RnJlcXVlbmN5ID8gJ2Jsb2NrJyA6ICdub25lJztcblxuICAgICAgICAgICAgdGhpcy5fcGF0dGVybkNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbnZhcy5wYXR0ZXJuQnVmZmVyJyk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX3BhdHRlcm5DYW52YXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9wYXR0ZXJuQ2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5fcGF0dGVybkNhbnZhcy5jbGFzc05hbWUgPSAncGF0dGVybkJ1ZmZlcic7XG4gICAgICAgICAgICAgICAgaWYgKGRlYnVnRGl2KSB7XG4gICAgICAgICAgICAgICAgICAgIGRlYnVnRGl2LmFwcGVuZENoaWxkKHRoaXMuX3BhdHRlcm5DYW52YXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX3BhdHRlcm5DYW52YXMuc3R5bGUuZGlzcGxheSA9IHRoaXMuX2NvbmZpZy5kZWJ1Zy5zaG93UGF0dGVybiA/ICdibG9jaycgOiAnbm9uZSc7XG5cbiAgICAgICAgICAgIGNvbnN0IG92ZXJsYXlDYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxDYW52YXNFbGVtZW50PignY2FudmFzLmRyYXdpbmdCdWZmZXInKTtcbiAgICAgICAgICAgIHRoaXMuX292ZXJsYXlDb250ZXh0ID0gb3ZlcmxheUNhbnZhcyA/IG92ZXJsYXlDYW52YXMuZ2V0Q29udGV4dCgnMmQnKSA6IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9pbml0UmVhZGVycygpO1xuICAgIH1cblxuICAgIGRlY29kZUZyb21Cb3VuZGluZ0JveGVzKGJveGVzOiBBcnJheTxCb3g+KTogUXVhZ2dhQmFyY29kZSB7XG4gICAgICAgIGNvbnN0IGJhcmNvZGVzID0gW107XG4gICAgICAgIGNvbnN0IG11bHRpcGxlID0gdGhpcy5fY29uZmlnLm11bHRpcGxlO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm94ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGJveCA9IGJveGVzW2ldO1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5kZWNvZGVGcm9tQm91bmRpbmdCb3goYm94KSB8fCB7fTtcbiAgICAgICAgICAgIHJlc3VsdC5ib3ggPSBib3g7XG5cbiAgICAgICAgICAgIGlmIChtdWx0aXBsZSkge1xuICAgICAgICAgICAgICAgIGJhcmNvZGVzLnB1c2gocmVzdWx0KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmNvZGVSZXN1bHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG11bHRpcGxlKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGJhcmNvZGVzXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV2l0aCB0aGUgaGVscCBvZiB0aGUgY29uZmlndXJlZCByZWFkZXJzIHRoaXMgZnVuY3Rpb24gdHJpZXMgdG8gZGV0ZWN0XG4gICAgICogYSB2YWxpZCBiYXJjb2RlIHBhdHRlcm4gd2l0aGluIHRoZSBnaXZlbiBhcmVhLlxuICAgICAqIEBwYXJhbSBib3ggVGhlIGFyZWEgdG8gc2VhcmNoIGluXG4gICAgICogQHJldHVybnMgVGhlIHJlc3VsdCB7Y29kZVJlc3VsdCwgbGluZSwgYW5nbGUsIHBhdHRlcm4sIHRocmVzaG9sZH1cbiAgICAgKi9cbiAgICBkZWNvZGVGcm9tQm91bmRpbmdCb3goYm94OiBCb3gpOiBRdWFnZ2FCYXJjb2RlIHtcbiAgICAgICAgY29uc3QgZGVidWcgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuX292ZXJsYXlDb250ZXh0ICYmIHRoaXMuX2NvbmZpZy5kZWJ1ZztcblxuICAgICAgICBpZiAoZGVidWcgJiYgZGVidWcuZHJhd0JvdW5kaW5nQm94KSB7XG4gICAgICAgICAgICB0aGlzLl9kcmF3UGF0aChib3gsICdibHVlJywgMik7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbGluZSA9IHRoaXMuX2dldExpbmUoYm94KTtcblxuICAgICAgICBpZiAobGluZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhbmdsZSA9IE1hdGguYXRhbjIobGluZVsxXS55IC0gbGluZVswXS55LCBsaW5lWzFdLnggLSBsaW5lWzBdLngpO1xuICAgICAgICBsaW5lID0gdGhpcy5fZ2V0RXh0ZW5kZWRMaW5lKGxpbmUsIGFuZ2xlKTtcblxuICAgICAgICBsZXQgcmVzdWx0ID0gdGhpcy5fdHJ5RGVjb2RlKGxpbmUpO1xuICAgICAgICBpZiAocmVzdWx0ID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLl90cnlEZWNvZGVCcnV0ZUZvcmNlKGJveCwgbGluZSwgYW5nbGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlc3VsdCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGVidWcgJiYgZGVidWcuZHJhd1NjYW5saW5lKSB7XG4gICAgICAgICAgICB0aGlzLl9kcmF3UGF0aChsaW5lLCAncmVkJywgMyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29kZVJlc3VsdDogcmVzdWx0LmNvZGVSZXN1bHQsXG4gICAgICAgICAgICBsaW5lLFxuICAgICAgICAgICAgYW5nbGUsXG4gICAgICAgICAgICBwYXR0ZXJuOiByZXN1bHQuYmFyY29kZUxpbmUubGluZSxcbiAgICAgICAgICAgIHRocmVzaG9sZDogcmVzdWx0LmJhcmNvZGVMaW5lLnRocmVzaG9sZFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHNldFJlYWRlcnMocmVhZGVyczogQXJyYXk8QmFyY29kZVJlYWRlckRlY2xhcmF0aW9uPik6IHZvaWQge1xuICAgICAgICB0aGlzLl9jb25maWcucmVhZGVycyA9IHJlYWRlcnM7XG4gICAgICAgIHRoaXMuX2JhcmNvZGVSZWFkZXJzLmxlbmd0aCA9IDA7XG4gICAgICAgIHRoaXMuX2luaXRSZWFkZXJzKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaW5pdFJlYWRlcnMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2NvbmZpZy5yZWFkZXJzLmZvckVhY2gocmVhZGVyQ29uZmlnID0+IHtcbiAgICAgICAgICAgIGxldCByZWFkZXI6IEJhcmNvZGVSZWFkZXJUeXBlO1xuICAgICAgICAgICAgbGV0IGNvbmZpZ3VyYXRpb246IEJhcmNvZGVSZWFkZXJDb25maWcgPSB7fTtcbiAgICAgICAgICAgIGxldCBzdXBwbGVtZW50cyA9IFtdO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIHJlYWRlckNvbmZpZyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICByZWFkZXIgPSByZWFkZXJDb25maWcuZm9ybWF0O1xuICAgICAgICAgICAgICAgIGNvbmZpZ3VyYXRpb24gPSByZWFkZXJDb25maWcuY29uZmlnIHx8IHt9O1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgcmVhZGVyQ29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHJlYWRlciA9IHJlYWRlckNvbmZpZztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQmVmb3JlIHJlZ2lzdGVyaW5nIHJlYWRlcjonLCByZWFkZXIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbi5zdXBwbGVtZW50cykge1xuICAgICAgICAgICAgICAgIHN1cHBsZW1lbnRzID0gY29uZmlndXJhdGlvbi5zdXBwbGVtZW50cy5tYXAoc3VwcGxlbWVudCA9PiBuZXcgUmVhZGVyc1tzdXBwbGVtZW50XSgpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fYmFyY29kZVJlYWRlcnMucHVzaChuZXcgUmVhZGVyc1tyZWFkZXJdKGNvbmZpZ3VyYXRpb24sIHN1cHBsZW1lbnRzKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUmVnaXN0ZXJlZCBSZWFkZXJzOicsXG4gICAgICAgICAgICAgICAgLi4udGhpcy5fYmFyY29kZVJlYWRlcnMubWFwKCh7IGNvbmZpZywgRk9STUFUIH0pID0+IEpTT04uc3RyaW5naWZ5KHsgY29uZmlnLCBGT1JNQVQgfSkpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGV4dGVuZCB0aGUgbGluZSBvbiBib3RoIGVuZHNcbiAgICAgKiBAcGFyYW0gbGluZVxuICAgICAqIEBwYXJhbSBhbmdsZVxuICAgICAqL1xuICAgIHByaXZhdGUgX2dldEV4dGVuZGVkTGluZShsaW5lOiBMaW5lLCBhbmdsZTogbnVtYmVyKTogTGluZSB7XG4gICAgICAgIGZ1bmN0aW9uIGV4dGVuZExpbmUoYW1vdW50OiBudW1iZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IGV4dGVuc2lvbiA9IHtcbiAgICAgICAgICAgICAgICB5OiBhbW91bnQgKiBNYXRoLnNpbihhbmdsZSksXG4gICAgICAgICAgICAgICAgeDogYW1vdW50ICogTWF0aC5jb3MoYW5nbGUpXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBsaW5lWzBdLnkgLT0gZXh0ZW5zaW9uLnk7XG4gICAgICAgICAgICBsaW5lWzBdLnggLT0gZXh0ZW5zaW9uLng7XG4gICAgICAgICAgICBsaW5lWzFdLnkgKz0gZXh0ZW5zaW9uLnk7XG4gICAgICAgICAgICBsaW5lWzFdLnggKz0gZXh0ZW5zaW9uLng7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBsaW5lTGVuZ3RoID0gTWF0aC5zcXJ0KChsaW5lWzFdLnkgLSBsaW5lWzBdLnkpICoqIDIgKyAobGluZVsxXS54IC0gbGluZVswXS54KSAqKiAyKTtcbiAgICAgICAgbGV0IGV4dGVuc2lvbkxlbmd0aCA9IGxpbmVMZW5ndGggKiAwLjEgfCAwO1xuXG4gICAgICAgIGV4dGVuZExpbmUoZXh0ZW5zaW9uTGVuZ3RoKTtcblxuICAgICAgICAvLyBjaGVjayBpZiBpbnNpZGUgaW1hZ2VcbiAgICAgICAgd2hpbGUgKGV4dGVuc2lvbkxlbmd0aCA+IDEgJiYgKCF0aGlzLl9pbnB1dEltYWdlV3JhcHBlci5pbkltYWdlV2l0aEJvcmRlcihsaW5lWzBdLCAwKVxuICAgICAgICAgICAgfHwgIXRoaXMuX2lucHV0SW1hZ2VXcmFwcGVyLmluSW1hZ2VXaXRoQm9yZGVyKGxpbmVbMV0sIDApKSkge1xuICAgICAgICAgICAgZXh0ZW5zaW9uTGVuZ3RoID4+PSAxO1xuICAgICAgICAgICAgZXh0ZW5kTGluZSgtZXh0ZW5zaW9uTGVuZ3RoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBsaW5lO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2dldExpbmUoYm94OiBCb3gpOiBMaW5lIHtcbiAgICAgICAgcmV0dXJuIFt7XG4gICAgICAgICAgICB4OiAoYm94WzFdLnggKyBib3hbMF0ueCkgLyAyLFxuICAgICAgICAgICAgeTogKGJveFsxXS55ICsgYm94WzBdLnkpIC8gMlxuICAgICAgICB9LCB7XG4gICAgICAgICAgICB4OiAoYm94WzNdLnggKyBib3hbMl0ueCkgLyAyLFxuICAgICAgICAgICAgeTogKGJveFszXS55ICsgYm94WzJdLnkpIC8gMlxuICAgICAgICB9XTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF90cnlEZWNvZGUobGluZTogTGluZSk6IEJhcmNvZGVBbmRCYXJjb2RlTGluZSB7XG4gICAgICAgIGNvbnN0IGRlYnVnID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLl9jb25maWcuZGVidWc7XG5cbiAgICAgICAgaWYgKGRlYnVnICYmIHRoaXMuX292ZXJsYXlDb250ZXh0KSB7XG4gICAgICAgICAgICB0aGlzLl9kcmF3UGF0aChsaW5lLCAncmVkJywgMyk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgYmFyY29kZUxpbmUgPSBCcmVzZW5oYW0uZ2V0QmFyY29kZUxpbmUodGhpcy5faW5wdXRJbWFnZVdyYXBwZXIsIGxpbmVbMF0sIGxpbmVbMV0pO1xuXG4gICAgICAgIGlmIChkZWJ1ZyAmJiBkZWJ1Zy5zaG93RnJlcXVlbmN5KSB7XG4gICAgICAgICAgICB0aGlzLl9wcmludEZyZXF1ZW5jeShiYXJjb2RlTGluZS5saW5lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJhcmNvZGVMaW5lID0gQnJlc2VuaGFtLnRvQmluYXJ5TGluZShiYXJjb2RlTGluZSk7XG5cbiAgICAgICAgaWYgKGRlYnVnICYmIGRlYnVnLnNob3dQYXR0ZXJuKSB7XG4gICAgICAgICAgICB0aGlzLl9wcmludFBhdHRlcm4oYmFyY29kZUxpbmUubGluZSk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2JhcmNvZGVSZWFkZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBjb2RlUmVzdWx0ID0gdGhpcy5fYmFyY29kZVJlYWRlcnNbaV0uZGVjb2RlUGF0dGVybihiYXJjb2RlTGluZS5saW5lKTtcbiAgICAgICAgICAgIGlmIChjb2RlUmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgY29kZVJlc3VsdCxcbiAgICAgICAgICAgICAgICAgICAgYmFyY29kZUxpbmVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2Qgc2xpY2VzIHRoZSBnaXZlbiBhcmVhIGFwYXJ0IGFuZCB0cmllcyB0byBkZXRlY3QgYSBiYXJjb2RlLXBhdHRlcm4gZm9yIGVhY2ggc2xpY2UuXG4gICAgICogSXQgcmV0dXJucyB0aGUgZGVjb2RlZCBiYXJjb2RlLCBvciBudWxsIGlmIG5vdGhpbmcgd2FzIGZvdW5kXG4gICAgICogQHBhcmFtIGJveFxuICAgICAqIEBwYXJhbSBsaW5lXG4gICAgICogQHBhcmFtIGxpbmVBbmdsZVxuICAgICAqL1xuICAgIHByaXZhdGUgX3RyeURlY29kZUJydXRlRm9yY2UoYm94OiBCb3gsIGxpbmU6IExpbmUsIGxpbmVBbmdsZTogbnVtYmVyKTogQmFyY29kZUFuZEJhcmNvZGVMaW5lIHtcbiAgICAgICAgY29uc3Qgc2lkZUxlbmd0aCA9IE1hdGguc3FydCgoYm94WzFdLnggLSBib3hbMF0ueCkgKiogMiArIChib3hbMV0ueSAtIGJveFswXS55KSAqKiAyKTtcbiAgICAgICAgY29uc3Qgc2xpY2VzID0gMTY7XG4gICAgICAgIGNvbnN0IHhkaXIgPSBNYXRoLnNpbihsaW5lQW5nbGUpO1xuICAgICAgICBjb25zdCB5ZGlyID0gTWF0aC5jb3MobGluZUFuZ2xlKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHNsaWNlczsgaSsrKSB7XG4gICAgICAgICAgICAvLyBtb3ZlIGxpbmUgcGVycGVuZGljdWxhciB0byBhbmdsZVxuICAgICAgICAgICAgY29uc3QgZGlyID0gc2lkZUxlbmd0aCAvIHNsaWNlcyAqIGkgKiAoaSAlIDIgPT09IDAgPyAtMSA6IDEpO1xuICAgICAgICAgICAgbGluZVswXS55ICs9IGRpciAqIHhkaXI7XG4gICAgICAgICAgICBsaW5lWzBdLnggLT0gZGlyICogeWRpcjtcbiAgICAgICAgICAgIGxpbmVbMV0ueSArPSBkaXIgKiB4ZGlyO1xuICAgICAgICAgICAgbGluZVsxXS54IC09IGRpciAqIHlkaXI7XG5cbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuX3RyeURlY29kZShsaW5lKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXNlZCBmb3IgZGV2ZWxvcG1lbnQgb25seVxuICAgICAqL1xuICAgIHByaXZhdGUgX3ByaW50RnJlcXVlbmN5KGxpbmU6IEFycmF5PG51bWJlcj4pOiB2b2lkIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuX2ZyZXF1ZW5jeUNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICB0aGlzLl9mcmVxdWVuY3lDYW52YXMud2lkdGggPSBsaW5lLmxlbmd0aDtcbiAgICAgICAgdGhpcy5fZnJlcXVlbmN5Q2FudmFzLmhlaWdodCA9IDI1NjtcblxuICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gJ2JsdWUnO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29udGV4dC5tb3ZlVG8oaSwgMjU1KTtcbiAgICAgICAgICAgIGNvbnRleHQubGluZVRvKGksIDI1NSAtIGxpbmVbaV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgICAgICAgY29udGV4dC5zdHJva2UoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVc2VkIGZvciBkZXZlbG9wbWVudCBvbmx5XG4gICAgICovXG4gICAgcHJpdmF0ZSBfcHJpbnRQYXR0ZXJuKGxpbmU6IEFycmF5PG51bWJlcj4pOiB2b2lkIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuX3BhdHRlcm5DYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAgICAgICB0aGlzLl9wYXR0ZXJuQ2FudmFzLndpZHRoID0gbGluZS5sZW5ndGg7XG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gJ2JsYWNrJztcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChsaW5lW2ldID09PSAxKSB7XG4gICAgICAgICAgICAgICAgY29udGV4dC5maWxsUmVjdChpLCAwLCAxLCAxMDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZHJhd1BhdGgocGF0aDogQXJyYXk8UG9pbnQ+LCBjb2xvcjogc3RyaW5nLCBsaW5lV2lkdGg6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBJbWFnZURlYnVnLmRyYXdQYXRoKHBhdGgsIHRoaXMuX292ZXJsYXlDb250ZXh0LCBjb2xvciwgbGluZVdpZHRoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBQb2ludCB9IGZyb20gJy4uL2NvbW1vbi9wb2ludCc7XG5pbXBvcnQgeyBJbWFnZVdyYXBwZXIgfSBmcm9tICcuLi9jb21tb24vaW1hZ2Utd3JhcHBlcic7XG5cbmVudW0gU2xvcGUge1xuICAgIFVwID0gMSxcbiAgICBEb3duID0gLTFcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmFyY29kZUxpbmUge1xuICAgIGxpbmU6IEFycmF5PG51bWJlcj47XG4gICAgbWF4PzogbnVtYmVyO1xuICAgIG1pbj86IG51bWJlcjtcbiAgICB0aHJlc2hvbGQ/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBCcmVzZW5oYW0ge1xuICAgIC8qKlxuICAgICAqIFNjYW5zIGEgbGluZSBvZiB0aGUgZ2l2ZW4gaW1hZ2UgZnJvbSBwb2ludCBwMSB0byBwMiBhbmQgcmV0dXJucyBhIHJlc3VsdCBvYmplY3QgY29udGFpbmluZ1xuICAgICAqIGdyYXktc2NhbGUgdmFsdWVzICgwLTI1NSkgb2YgdGhlIHVuZGVybHlpbmcgcGl4ZWxzIGluIGFkZGl0aW9uIHRvIHRoZSBtaW4gYW5kIG1heCB2YWx1ZXMuXG4gICAgICogQHBhcmFtIGltYWdlV3JhcHBlclxuICAgICAqIEBwYXJhbSBwMSBUaGUgc3RhcnQgcG9pbnQge3gseX1cbiAgICAgKiBAcGFyYW0gcDIgVGhlIGVuZCBwb2ludCB7eCx5fVxuICAgICAqIEByZXR1cm5zIHtsaW5lLCBtaW4sIG1heH1cbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0QmFyY29kZUxpbmUoaW1hZ2VXcmFwcGVyOiBJbWFnZVdyYXBwZXIsIHAxOiBQb2ludCwgcDI6IFBvaW50KTogQmFyY29kZUxpbmUge1xuICAgICAgICBsZXQgeDAgPSBwMS54IHwgMDtcbiAgICAgICAgbGV0IHkwID0gcDEueSB8IDA7XG4gICAgICAgIGxldCB4MSA9IHAyLnggfCAwO1xuICAgICAgICBsZXQgeTEgPSBwMi55IHwgMDtcbiAgICAgICAgY29uc3Qgc3RlZXAgPSBNYXRoLmFicyh5MSAtIHkwKSA+IE1hdGguYWJzKHgxIC0geDApO1xuICAgICAgICBsZXQgdG1wOiBudW1iZXI7XG4gICAgICAgIGNvbnN0IGxpbmUgPSBbXTtcbiAgICAgICAgY29uc3QgaW1hZ2VEYXRhID0gaW1hZ2VXcmFwcGVyLmRhdGE7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gaW1hZ2VXcmFwcGVyLnNpemUueDtcbiAgICAgICAgbGV0IHZhbDogbnVtYmVyO1xuICAgICAgICBsZXQgbWluID0gMjU1O1xuICAgICAgICBsZXQgbWF4ID0gMDtcblxuICAgICAgICBmdW5jdGlvbiByZWFkKGE6IG51bWJlciwgYjogbnVtYmVyKSB7XG4gICAgICAgICAgICB2YWwgPSBpbWFnZURhdGFbYiAqIHdpZHRoICsgYV07XG4gICAgICAgICAgICBtaW4gPSB2YWwgPCBtaW4gPyB2YWwgOiBtaW47XG4gICAgICAgICAgICBtYXggPSB2YWwgPiBtYXggPyB2YWwgOiBtYXg7XG4gICAgICAgICAgICBsaW5lLnB1c2godmFsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdGVlcCkge1xuICAgICAgICAgICAgdG1wID0geDA7XG4gICAgICAgICAgICB4MCA9IHkwO1xuICAgICAgICAgICAgeTAgPSB0bXA7XG5cbiAgICAgICAgICAgIHRtcCA9IHgxO1xuICAgICAgICAgICAgeDEgPSB5MTtcbiAgICAgICAgICAgIHkxID0gdG1wO1xuICAgICAgICB9XG4gICAgICAgIGlmICh4MCA+IHgxKSB7XG4gICAgICAgICAgICB0bXAgPSB4MDtcbiAgICAgICAgICAgIHgwID0geDE7XG4gICAgICAgICAgICB4MSA9IHRtcDtcblxuICAgICAgICAgICAgdG1wID0geTA7XG4gICAgICAgICAgICB5MCA9IHkxO1xuICAgICAgICAgICAgeTEgPSB0bXA7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZGVsdGF4ID0geDEgLSB4MDtcbiAgICAgICAgbGV0IGRlbHRheSA9IE1hdGguYWJzKHkxIC0geTApO1xuICAgICAgICBsZXQgZXJyb3IgPSAoZGVsdGF4IC8gMikgfCAwO1xuICAgICAgICBsZXQgeSA9IHkwO1xuICAgICAgICBsZXQgeXN0ZXAgPSB5MCA8IHkxID8gMSA6IC0xO1xuXG4gICAgICAgIGZvciAobGV0IHggPSB4MDsgeCA8IHgxOyB4KyspIHtcbiAgICAgICAgICAgIGlmIChzdGVlcCkge1xuICAgICAgICAgICAgICAgIHJlYWQoeSwgeCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlYWQoeCwgeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlcnJvciA9IGVycm9yIC0gZGVsdGF5O1xuICAgICAgICAgICAgaWYgKGVycm9yIDwgMCkge1xuICAgICAgICAgICAgICAgIHkgKz0geXN0ZXA7XG4gICAgICAgICAgICAgICAgZXJyb3IgPSBlcnJvciArIGRlbHRheDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsaW5lLFxuICAgICAgICAgICAgbWluLFxuICAgICAgICAgICAgbWF4XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29udmVydHMgdGhlIHJlc3VsdCBmcm9tIGdldEJhcmNvZGVMaW5lIGludG8gYSBiaW5hcnkgcmVwcmVzZW50YXRpb25cbiAgICAgKiBhbHNvIGNvbnNpZGVyaW5nIHRoZSBmcmVxdWVuY3kgYW5kIHNsb3BlIG9mIHRoZSBzaWduYWwgZm9yIG1vcmUgcm9idXN0IHJlc3VsdHNcbiAgICAgKiBAcGFyYW0gcmVzdWx0IHtsaW5lLCBtaW4sIG1heH1cbiAgICAgKi9cbiAgICBzdGF0aWMgdG9CaW5hcnlMaW5lKHJlc3VsdDogQmFyY29kZUxpbmUpOiBCYXJjb2RlTGluZSB7XG4gICAgICAgIGNvbnN0IG1pbiA9IHJlc3VsdC5taW47XG4gICAgICAgIGNvbnN0IG1heCA9IHJlc3VsdC5tYXg7XG4gICAgICAgIGNvbnN0IGxpbmUgPSByZXN1bHQubGluZTtcbiAgICAgICAgY29uc3QgY2VudGVyID0gbWluICsgKG1heCAtIG1pbikgLyAyO1xuICAgICAgICBjb25zdCBleHRyZW1hID0gbmV3IEFycmF5PHsgcG9zOiBudW1iZXI7IHZhbDogbnVtYmVyOyB9PigpO1xuICAgICAgICBsZXQgdGhyZXNob2xkID0gKG1heCAtIG1pbikgLyAxMjtcbiAgICAgICAgY29uc3QgclRocmVzaG9sZCA9IC10aHJlc2hvbGQ7XG5cbiAgICAgICAgLy8gMS4gZmluZCBleHRyZW1hXG4gICAgICAgIGxldCBjdXJyZW50RGlyID0gbGluZVswXSA+IGNlbnRlciA/IFNsb3BlLlVwIDogU2xvcGUuRG93bjtcbiAgICAgICAgZXh0cmVtYS5wdXNoKHtcbiAgICAgICAgICAgIHBvczogMCxcbiAgICAgICAgICAgIHZhbDogbGluZVswXVxuICAgICAgICB9KTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lLmxlbmd0aCAtIDI7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgc2xvcGUgPSAobGluZVtpICsgMV0gLSBsaW5lW2ldKTtcbiAgICAgICAgICAgIGNvbnN0IHNsb3BlMiA9IChsaW5lW2kgKyAyXSAtIGxpbmVbaSArIDFdKTtcbiAgICAgICAgICAgIGxldCBkaXI6IFNsb3BlO1xuICAgICAgICAgICAgaWYgKChzbG9wZSArIHNsb3BlMikgPCByVGhyZXNob2xkICYmIGxpbmVbaSArIDFdIDwgKGNlbnRlciAqIDEuNSkpIHtcbiAgICAgICAgICAgICAgICBkaXIgPSBTbG9wZS5Eb3duO1xuICAgICAgICAgICAgfSBlbHNlIGlmICgoc2xvcGUgKyBzbG9wZTIpID4gdGhyZXNob2xkICYmIGxpbmVbaSArIDFdID4gKGNlbnRlciAqIDAuNSkpIHtcbiAgICAgICAgICAgICAgICBkaXIgPSBTbG9wZS5VcDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGlyID0gY3VycmVudERpcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGN1cnJlbnREaXIgIT09IGRpcikge1xuICAgICAgICAgICAgICAgIGV4dHJlbWEucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHBvczogaSxcbiAgICAgICAgICAgICAgICAgICAgdmFsOiBsaW5lW2ldXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY3VycmVudERpciA9IGRpcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBleHRyZW1hLnB1c2goe1xuICAgICAgICAgICAgcG9zOiBsaW5lLmxlbmd0aCxcbiAgICAgICAgICAgIHZhbDogbGluZVtsaW5lLmxlbmd0aCAtIDFdXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZvciAobGV0IGogPSBleHRyZW1hWzBdLnBvczsgaiA8IGV4dHJlbWFbMV0ucG9zOyBqKyspIHtcbiAgICAgICAgICAgIGxpbmVbal0gPSBsaW5lW2pdID4gY2VudGVyID8gMCA6IDE7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpdGVyYXRlIG92ZXIgZXh0cmVtYSBhbmQgY29udmVydCB0byBiaW5hcnkgYmFzZWQgb24gYXZnIGJldHdlZW4gbWlubWF4XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgZXh0cmVtYS5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChleHRyZW1hW2kgKyAxXS52YWwgPiBleHRyZW1hW2ldLnZhbCkge1xuICAgICAgICAgICAgICAgIHRocmVzaG9sZCA9IChleHRyZW1hW2ldLnZhbCArICgoZXh0cmVtYVtpICsgMV0udmFsIC0gZXh0cmVtYVtpXS52YWwpIC8gMykgKiAyKSB8IDA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocmVzaG9sZCA9IChleHRyZW1hW2kgKyAxXS52YWwgKyAoKGV4dHJlbWFbaV0udmFsIC0gZXh0cmVtYVtpICsgMV0udmFsKSAvIDMpKSB8IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAobGV0IGogPSBleHRyZW1hW2ldLnBvczsgaiA8IGV4dHJlbWFbaSArIDFdLnBvczsgaisrKSB7XG4gICAgICAgICAgICAgICAgbGluZVtqXSA9IGxpbmVbal0gPiB0aHJlc2hvbGQgPyAwIDogMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5yZXN1bHQsXG4gICAgICAgICAgICB0aHJlc2hvbGRcbiAgICAgICAgfTtcbiAgICB9O1xufVxuIiwiaW1wb3J0IHsgZ2V0VXNlck1lZGlhLCBlbnVtZXJhdGVEZXZpY2VzIH0gZnJvbSAnLi4vY29tbW9uL21lZGlhLWRldmljZXMnO1xuXG5sZXQgX3N0cmVhbTogTWVkaWFTdHJlYW07XG5cbmV4cG9ydCBjb25zdCBDYW1lcmFBY2Nlc3MgPSB7XG4gICAgLyoqXG4gICAgICogQXR0ZW1wdHMgdG8gYXR0YWNoIHRoZSBjYW1lcmEtc3RyZWFtIHRvIGEgZ2l2ZW4gdmlkZW8gZWxlbWVudFxuICAgICAqIGFuZCBjYWxscyB0aGUgY2FsbGJhY2sgZnVuY3Rpb24gd2hlbiB0aGUgY29udGVudCBpcyByZWFkeVxuICAgICAqIEBwYXJhbSB2aWRlb1xuICAgICAqIEBwYXJhbSB2aWRlb0NvbnN0cmFpbnRzXG4gICAgICovXG4gICAgYXN5bmMgcmVxdWVzdCh2aWRlbzogSFRNTFZpZGVvRWxlbWVudCwgdmlkZW9Db25zdHJhaW50czogTWVkaWFUcmFja0NvbnN0cmFpbnRzKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRDb25zdHJhaW50cyA9IENhbWVyYUFjY2Vzcy5waWNrQ29uc3RyYWludHModmlkZW9Db25zdHJhaW50cyk7XG4gICAgICAgIF9zdHJlYW0gPSBhd2FpdCBnZXRVc2VyTWVkaWEobm9ybWFsaXplZENvbnN0cmFpbnRzKTtcbiAgICAgICAgdmlkZW8uc3JjT2JqZWN0ID0gX3N0cmVhbTtcbiAgICAgICAgdmlkZW8uc2V0QXR0cmlidXRlKCdhdXRvcGxheScsICcnKTtcbiAgICAgICAgdmlkZW8uc2V0QXR0cmlidXRlKCdtdXRlZCcsICcnKTtcbiAgICAgICAgdmlkZW8uc2V0QXR0cmlidXRlKCdwbGF5c2lubGluZScsICcnKTtcblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB2aWRlby5hZGRFdmVudExpc3RlbmVyKCdsb2FkZWRtZXRhZGF0YScsICgpID0+IHtcbiAgICAgICAgICAgIHZpZGVvLnBsYXkoKTtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSkpLnRoZW4oX3dhaXRGb3JWaWRlby5iaW5kKG51bGwsIHZpZGVvKSk7XG4gICAgfSxcblxuICAgIHJlbGVhc2UoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHRyYWNrcyA9IF9zdHJlYW0gJiYgX3N0cmVhbS5nZXRWaWRlb1RyYWNrcygpO1xuICAgICAgICBpZiAodHJhY2tzICYmIHRyYWNrcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRyYWNrc1swXS5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgICAgX3N0cmVhbSA9IG51bGw7XG4gICAgfSxcblxuICAgIGFzeW5jIGVudW1lcmF0ZVZpZGVvRGV2aWNlcygpOiBQcm9taXNlPEFycmF5PE1lZGlhRGV2aWNlSW5mbz4+IHtcbiAgICAgICAgY29uc3QgZGV2aWNlcyA9IGF3YWl0IGVudW1lcmF0ZURldmljZXMoKTtcbiAgICAgICAgcmV0dXJuIGRldmljZXMuZmlsdGVyKCh7IGtpbmQgfSkgPT4ga2luZCA9PT0gJ3ZpZGVvaW5wdXQnKTtcbiAgICB9LFxuXG4gICAgZ2V0QWN0aXZlU3RyZWFtTGFiZWwoKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgdHJhY2sgPSBDYW1lcmFBY2Nlc3MuZ2V0QWN0aXZlVHJhY2soKTtcbiAgICAgICAgcmV0dXJuIHRyYWNrID8gdHJhY2subGFiZWwgOiAnJztcbiAgICB9LFxuXG4gICAgZ2V0QWN0aXZlVHJhY2soKSB7XG4gICAgICAgIGNvbnN0IHRyYWNrcyA9IF9zdHJlYW0gJiYgX3N0cmVhbS5nZXRWaWRlb1RyYWNrcygpO1xuICAgICAgICBpZiAodHJhY2tzICYmIHRyYWNrcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB0cmFja3NbMF07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9LFxuXG4gICAgcGlja0NvbnN0cmFpbnRzKHZpZGVvQ29uc3RyYWludHM6IE1lZGlhVHJhY2tDb25zdHJhaW50cyk6IE1lZGlhU3RyZWFtQ29uc3RyYWludHMge1xuICAgICAgICBsZXQgeyB3aWR0aCwgaGVpZ2h0LCBmYWNpbmdNb2RlLCBhc3BlY3RSYXRpbywgZGV2aWNlSWQgfSA9IHZpZGVvQ29uc3RyYWludHM7XG4gICAgICAgIGNvbnN0IHsgbWluQXNwZWN0UmF0aW8sIGZhY2luZyB9ID0gdmlkZW9Db25zdHJhaW50cyBhcyBhbnk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBtaW5Bc3BlY3RSYXRpbyAhPT0gJ3VuZGVmaW5lZCcgJiYgbWluQXNwZWN0UmF0aW8gPiAwKSB7XG4gICAgICAgICAgICBhc3BlY3RSYXRpbyA9IG1pbkFzcGVjdFJhdGlvO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYFdBUk5JTkc6IENvbnN0cmFpbnQgJ21pbkFzcGVjdFJhdGlvJyBpcyBkZXByZWNhdGVkOyBVc2UgJ2FzcGVjdFJhdGlvJyBpbnN0ZWFkYCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGZhY2luZyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGZhY2luZ01vZGUgPSBmYWNpbmc7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgV0FSTklORzogQ29uc3RyYWludCAnZmFjaW5nJyBpcyBkZXByZWNhdGVkLiBVc2UgJ2ZhY2luZ01vZGUnIGluc3RlYWQnYCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBub3JtYWxpemVkQ29uc3RyYWludHMgPSBkZXZpY2VJZCAmJiBmYWNpbmdNb2RlID9cbiAgICAgICAgICAgIHsgd2lkdGgsIGhlaWdodCwgYXNwZWN0UmF0aW8sIGRldmljZUlkIH0gOiB7IHdpZHRoLCBoZWlnaHQsIGZhY2luZ01vZGUsIGFzcGVjdFJhdGlvLCBkZXZpY2VJZCB9O1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhdWRpbzogZmFsc2UsXG4gICAgICAgICAgICB2aWRlbzogbm9ybWFsaXplZENvbnN0cmFpbnRzXG4gICAgICAgIH07XG4gICAgfVxufVxuXG5mdW5jdGlvbiBfd2FpdEZvclZpZGVvKHsgdmlkZW9XaWR0aCwgdmlkZW9IZWlnaHQgfSk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGxldCBhdHRlbXB0cyA9IDEwO1xuXG4gICAgICAgIGZ1bmN0aW9uIGNoZWNrVmlkZW8oKSB7XG4gICAgICAgICAgICBpZiAoYXR0ZW1wdHMgPiAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZpZGVvV2lkdGggPiAxMCAmJiB2aWRlb0hlaWdodCA+IDEwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHt2aWRlb1dpZHRofXB4IHggJHt2aWRlb0hlaWdodH1weGApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dChjaGVja1ZpZGVvLCA1MDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KCdVbmFibGUgdG8gcGxheSB2aWRlbyBzdHJlYW0uIElzIHdlYmNhbSB3b3JraW5nPycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXR0ZW1wdHMtLTtcbiAgICAgICAgfVxuICAgICAgICBjaGVja1ZpZGVvKCk7XG4gICAgfSk7XG59XG4iLCIvKipcbiAqIEBib3Jyb3dzIGh0dHBzOi8vZ2l0aHViLmNvbS9leGlmLWpzL2V4aWYtanNcbiAqL1xuXG5jb25zdCBFeGlmVGFncyA9IHsgMHgwMTEyOiAnb3JpZW50YXRpb24nIH07XG5leHBvcnQgY29uc3QgQXZhaWxhYmxlVGFnczogQXJyYXk8c3RyaW5nPiA9IE9iamVjdC5rZXlzKEV4aWZUYWdzKS5tYXAoa2V5ID0+IEV4aWZUYWdzW2tleV0pO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRhZ3Mge1xuICAgIFtrZXk6IHN0cmluZ106IG51bWJlciB8IHN0cmluZztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZpbmRUYWdzSW5PYmplY3RVUkwoc3JjOiBzdHJpbmcsIHRhZ3MgPSBBdmFpbGFibGVUYWdzKTogUHJvbWlzZTxUYWdzPiB7XG4gICAgaWYgKC9eYmxvYjovaS50ZXN0KHNyYykpIHtcbiAgICAgICAgY29uc3QgYnVmZmVyID0gYXdhaXQgb2JqZWN0VVJMVG9CbG9iKHNyYyk7XG4gICAgICAgIHJldHVybiBmaW5kVGFnc0luQnVmZmVyKGJ1ZmZlciwgdGFncyk7XG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobnVsbCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kVGFnc0luQnVmZmVyKGZpbGU6IEFycmF5QnVmZmVyLCBzZWxlY3RlZFRhZ3M6IEFycmF5PHN0cmluZz4gPSBBdmFpbGFibGVUYWdzKTogVGFncyB7XG4gICAgY29uc3QgZGF0YVZpZXcgPSBuZXcgRGF0YVZpZXcoZmlsZSk7XG4gICAgY29uc3QgbGVuZ3RoID0gZmlsZS5ieXRlTGVuZ3RoO1xuICAgIGNvbnN0IGV4aWZUYWdzID0gc2VsZWN0ZWRUYWdzLnJlZHVjZSgocmVzdWx0LCBzZWxlY3RlZFRhZykgPT4ge1xuICAgICAgICBjb25zdCBleGlmVGFnID0gT2JqZWN0LmtleXMoRXhpZlRhZ3MpLmZpbmQodGFnID0+IEV4aWZUYWdzW3RhZ10gPT09IHNlbGVjdGVkVGFnKTtcbiAgICAgICAgaWYgKGV4aWZUYWcpIHtcbiAgICAgICAgICAgIHJlc3VsdFtleGlmVGFnXSA9IHNlbGVjdGVkVGFnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSwge30pO1xuICAgIGxldCBvZmZzZXQgPSAyO1xuXG4gICAgaWYgKChkYXRhVmlldy5nZXRVaW50OCgwKSAhPT0gMHhGRikgfHwgKGRhdGFWaWV3LmdldFVpbnQ4KDEpICE9PSAweEQ4KSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB3aGlsZSAob2Zmc2V0IDwgbGVuZ3RoKSB7XG4gICAgICAgIGlmIChkYXRhVmlldy5nZXRVaW50OChvZmZzZXQpICE9PSAweEZGKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG1hcmtlciA9IGRhdGFWaWV3LmdldFVpbnQ4KG9mZnNldCArIDEpO1xuICAgICAgICBpZiAobWFya2VyID09PSAweEUxKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVhZEVYSUZEYXRhKGRhdGFWaWV3LCBvZmZzZXQgKyA0LCBleGlmVGFncyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvZmZzZXQgKz0gMiArIGRhdGFWaWV3LmdldFVpbnQxNihvZmZzZXQgKyAyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xufVxuXG5hc3luYyBmdW5jdGlvbiBvYmplY3RVUkxUb0Jsb2IodXJsOiBzdHJpbmcpOiBQcm9taXNlPEFycmF5QnVmZmVyPiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuYXJyYXlCdWZmZXIoKTtcbiAgICB9XG5cbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0hUVFAgRXJyb3IgJyArIHJlc3BvbnNlLnN0YXR1cyk7XG59XG5cbmZ1bmN0aW9uIHJlYWRFWElGRGF0YShkYXRhVmlldzogRGF0YVZpZXcsIHN0YXJ0OiBudW1iZXIsIGV4aWZUYWdzOiB7IFtrZXk6IG51bWJlcl06IHN0cmluZyB9KTogVGFncyB7XG4gICAgaWYgKCdFeGlmJy5zcGxpdCgnJykuc29tZSgoY2hhciwgaW5kZXgpID0+IGRhdGFWaWV3LmdldFVpbnQ4KHN0YXJ0ICsgaW5kZXgpICE9PSBjaGFyLmNoYXJDb2RlQXQoMCkpKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHRpZmZPZmZzZXQgPSBzdGFydCArIDY7XG4gICAgbGV0IGJpZ0VuZDogYm9vbGVhbjtcblxuICAgIGlmIChkYXRhVmlldy5nZXRVaW50MTYodGlmZk9mZnNldCkgPT09IDB4NDk0OSkge1xuICAgICAgICBiaWdFbmQgPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKGRhdGFWaWV3LmdldFVpbnQxNih0aWZmT2Zmc2V0KSA9PT0gMHg0RDREKSB7XG4gICAgICAgIGJpZ0VuZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKGRhdGFWaWV3LmdldFVpbnQxNih0aWZmT2Zmc2V0ICsgMiwgIWJpZ0VuZCkgIT09IDB4MDAyQSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBmaXJzdElGRE9mZnNldCA9IGRhdGFWaWV3LmdldFVpbnQzMih0aWZmT2Zmc2V0ICsgNCwgIWJpZ0VuZCk7XG4gICAgaWYgKGZpcnN0SUZET2Zmc2V0IDwgMHgwMDAwMDAwOCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCB0YWdzID0gcmVhZFRhZ3MoZGF0YVZpZXcsIHRpZmZPZmZzZXQgKyBmaXJzdElGRE9mZnNldCwgZXhpZlRhZ3MsIGJpZ0VuZCk7XG4gICAgcmV0dXJuIHRhZ3M7XG59XG5cbmZ1bmN0aW9uIHJlYWRUYWdzKGRhdGFWaWV3OiBEYXRhVmlldywgZGlyU3RhcnQ6IG51bWJlciwgc3RyaW5nczogeyBba2V5OiBudW1iZXJdOiBzdHJpbmcgfSwgYmlnRW5kOiBib29sZWFuKTogVGFncyB7XG4gICAgY29uc3QgZW50cmllcyA9IGRhdGFWaWV3LmdldFVpbnQxNihkaXJTdGFydCwgIWJpZ0VuZCk7XG4gICAgY29uc3QgdGFnczogVGFncyA9IHt9O1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbnRyaWVzOyBpKyspIHtcbiAgICAgICAgY29uc3QgZW50cnlPZmZzZXQgPSBkaXJTdGFydCArIGkgKiAxMiArIDI7XG4gICAgICAgIGNvbnN0IHRhZyA9IHN0cmluZ3NbZGF0YVZpZXcuZ2V0VWludDE2KGVudHJ5T2Zmc2V0LCAhYmlnRW5kKV07XG4gICAgICAgIGlmICh0YWcpIHtcbiAgICAgICAgICAgIHRhZ3NbdGFnXSA9IHJlYWRUYWdWYWx1ZShkYXRhVmlldywgZW50cnlPZmZzZXQsIGJpZ0VuZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFncztcbn1cblxuZnVuY3Rpb24gcmVhZFRhZ1ZhbHVlKGRhdGFWaWV3OiBEYXRhVmlldywgZW50cnlPZmZzZXQ6IG51bWJlciwgYmlnRW5kOiBib29sZWFuKTogbnVtYmVyIHwgc3RyaW5nIHtcbiAgICBjb25zdCB0eXBlID0gZGF0YVZpZXcuZ2V0VWludDE2KGVudHJ5T2Zmc2V0ICsgMiwgIWJpZ0VuZCk7XG4gICAgY29uc3QgbnVtVmFsdWVzID0gZGF0YVZpZXcuZ2V0VWludDMyKGVudHJ5T2Zmc2V0ICsgNCwgIWJpZ0VuZCk7XG5cbiAgICByZXR1cm4gdHlwZSA9PT0gMyAmJiBudW1WYWx1ZXMgPT09IDEgPyBkYXRhVmlldy5nZXRVaW50MTYoZW50cnlPZmZzZXQgKyA4LCAhYmlnRW5kKSA6IHVuZGVmaW5lZDtcbn1cbiIsImltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi4vY29tbW9uL3BvaW50JztcbmltcG9ydCB7IElucHV0U3RyZWFtIH0gZnJvbSAnLi9pbnB1dC1zdHJlYW0nO1xuaW1wb3J0IHsgSW5wdXRTdHJlYW1Db25maWcgfSBmcm9tICcuL2lucHV0LXN0cmVhbS1jb25maWcnO1xuXG5jb25zdCBRVUFURVJfQ0lSQ0xFID0gTWF0aC5QSSAvIDI7XG5cbmV4cG9ydCBjbGFzcyBGcmFtZUdyYWJiZXIge1xuICAgIHByaXZhdGUgX2lucHV0U3RyZWFtOiBJbnB1dFN0cmVhbTtcbiAgICBwcml2YXRlIF9zdHJlYW1Db25maWc6IElucHV0U3RyZWFtQ29uZmlnO1xuICAgIHByaXZhdGUgX2NhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG4gICAgcHJpdmF0ZSBfY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuICAgIHByaXZhdGUgX2RhdGE6IFVpbnQ4QXJyYXk7XG4gICAgcHJpdmF0ZSBfY2FudmFzSGVpZ2h0OiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfY2FudmFzV2lkdGg6IG51bWJlcjtcbiAgICBwcml2YXRlIF9oZWlnaHQ6IG51bWJlcjtcbiAgICBwcml2YXRlIF93aWR0aDogbnVtYmVyO1xuICAgIHByaXZhdGUgX3RvcExlZnQ6IFBvaW50O1xuXG4gICAgY29uc3RydWN0b3IoaW5wdXRTdHJlYW06IElucHV0U3RyZWFtLCBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuX2lucHV0U3RyZWFtID0gaW5wdXRTdHJlYW07XG4gICAgICAgIHRoaXMuX3N0cmVhbUNvbmZpZyA9IGlucHV0U3RyZWFtLmNvbmZpZztcbiAgICAgICAgdGhpcy5fY2FudmFzV2lkdGggPSBpbnB1dFN0cmVhbS5jYW52YXNXaWR0aDtcbiAgICAgICAgdGhpcy5fY2FudmFzSGVpZ2h0ID0gaW5wdXRTdHJlYW0uY2FudmFzSGVpZ2h0O1xuICAgICAgICB0aGlzLl93aWR0aCA9IGlucHV0U3RyZWFtLndpZHRoO1xuICAgICAgICB0aGlzLl9oZWlnaHQgPSBpbnB1dFN0cmVhbS5oZWlnaHQ7XG4gICAgICAgIHRoaXMuX3RvcExlZnQgPSBpbnB1dFN0cmVhbS50b3BMZWZ0O1xuICAgICAgICB0aGlzLl9jYW52YXMgPSBjYW52YXMgfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgIHRoaXMuX2NhbnZhcy53aWR0aCA9IHRoaXMuX2NhbnZhc1dpZHRoO1xuICAgICAgICB0aGlzLl9jYW52YXMuaGVpZ2h0ID0gdGhpcy5fY2FudmFzSGVpZ2h0O1xuICAgICAgICB0aGlzLl9jb250ZXh0ID0gdGhpcy5fY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIHRoaXMuX2RhdGEgPSBuZXcgVWludDhBcnJheSh0aGlzLl93aWR0aCAqIHRoaXMuX2hlaWdodCk7XG5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdGcmFtZUdyYWJiZXInLCBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgc2l6ZToge1xuICAgICAgICAgICAgICAgICAgICB4OiB0aGlzLl93aWR0aCxcbiAgICAgICAgICAgICAgICAgICAgeTogdGhpcy5faGVpZ2h0XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0b3BMZWZ0OiB0aGlzLl90b3BMZWZ0LFxuICAgICAgICAgICAgICAgIHZpZGVvU2l6ZToge1xuICAgICAgICAgICAgICAgICAgICB4OiBpbnB1dFN0cmVhbS5yZWFsV2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIHk6IGlucHV0U3RyZWFtLnJlYWxIZWlnaHRcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNhbnZhc1NpemU6IHtcbiAgICAgICAgICAgICAgICAgICAgeDogdGhpcy5fY2FudmFzV2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIHk6IHRoaXMuX2NhbnZhc0hlaWdodFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVzZXMgdGhlIGdpdmVuIGFycmF5IGFzIGZyYW1lLWJ1ZmZlclxuICAgICAqL1xuICAgIGF0dGFjaERhdGEoZGF0YTogVWludDhBcnJheSk6IHZvaWQge1xuICAgICAgICB0aGlzLl9kYXRhID0gZGF0YTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGZXRjaGVzIGEgZnJhbWUgZnJvbSB0aGUgaW5wdXQtc3RyZWFtIGFuZCBwdXRzIGludG8gdGhlIGZyYW1lLWJ1ZmZlci5cbiAgICAgKiBUaGUgaW1hZ2UtZGF0YSBpcyBjb252ZXJ0ZWQgdG8gZ3JheS1zY2FsZSBhbmQgdGhlbiBoYWxmLXNhbXBsZWQgaWYgY29uZmlndXJlZC5cbiAgICAgKi9cbiAgICBncmFiKCk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBmcmFtZSA9IHRoaXMuX2lucHV0U3RyZWFtLmdldEZyYW1lKCk7XG5cbiAgICAgICAgaWYgKGZyYW1lKSB7XG4gICAgICAgICAgICB0aGlzLl9hZGp1c3RDYW52YXNTaXplKCk7XG5cbiAgICAgICAgICAgIGxldCBkcmF3YWJsZTogSFRNTEltYWdlRWxlbWVudCB8IEhUTUxWaWRlb0VsZW1lbnQ7XG4gICAgICAgICAgICBsZXQgZHJhd0FuZ2xlID0gMDtcblxuICAgICAgICAgICAgaWYgKGZyYW1lIGluc3RhbmNlb2YgSFRNTFZpZGVvRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGRyYXdhYmxlID0gZnJhbWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRyYXdhYmxlID0gZnJhbWUuaW1hZ2U7XG5cbiAgICAgICAgICAgICAgICBpZiAoZnJhbWUudGFncykge1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGZyYW1lLnRhZ3Mub3JpZW50YXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyYXdBbmdsZSA9IFFVQVRFUl9DSVJDTEU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDg6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcmF3QW5nbGUgPSAtUVVBVEVSX0NJUkNMRTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGRyYXdBbmdsZSAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGhhbGZXaWR0aCA9IHRoaXMuX2NhbnZhc1dpZHRoID4+IDE7XG4gICAgICAgICAgICAgICAgY29uc3QgaGFsZkhlaWdodCA9IHRoaXMuX2NhbnZhc0hlaWdodCA+PiAxO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5fY29udGV4dC50cmFuc2xhdGUoaGFsZldpZHRoLCBoYWxmSGVpZ2h0KTtcbiAgICAgICAgICAgICAgICB0aGlzLl9jb250ZXh0LnJvdGF0ZShkcmF3QW5nbGUpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2NvbnRleHQuZHJhd0ltYWdlKGRyYXdhYmxlLCAtaGFsZkhlaWdodCwgLWhhbGZXaWR0aCwgdGhpcy5fY2FudmFzSGVpZ2h0LCB0aGlzLl9jYW52YXNXaWR0aCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fY29udGV4dC5yb3RhdGUoLWRyYXdBbmdsZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fY29udGV4dC50cmFuc2xhdGUoLWhhbGZXaWR0aCwgLWhhbGZIZWlnaHQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jb250ZXh0LmRyYXdJbWFnZShkcmF3YWJsZSwgMCwgMCwgdGhpcy5fY2FudmFzV2lkdGgsIHRoaXMuX2NhbnZhc0hlaWdodCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGltYWdlRGF0YSA9IHRoaXMuX2NvbnRleHQuZ2V0SW1hZ2VEYXRhKHRoaXMuX3RvcExlZnQueCwgdGhpcy5fdG9wTGVmdC55LCB0aGlzLl93aWR0aCwgdGhpcy5faGVpZ2h0KS5kYXRhO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5fc3RyZWFtQ29uZmlnLmhhbGZTYW1wbGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9ncmF5QW5kSGFsZlNhbXBsZUZyb21DYW52YXNEYXRhKGltYWdlRGF0YSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NvbXB1dGVHcmF5KGltYWdlRGF0YSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfYWRqdXN0Q2FudmFzU2l6ZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuX2NhbnZhcy5oZWlnaHQgIT09IHRoaXMuX2NhbnZhc0hlaWdodCB8fCB0aGlzLl9jYW52YXMud2lkdGggIT09IHRoaXMuX2NhbnZhc1dpZHRoKSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignQ2FudmFzIHNpemUgbmVlZHMgdG8gYmUgYWRqdXN0ZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2NhbnZhcy5oZWlnaHQgPSB0aGlzLl9jYW52YXNIZWlnaHQ7XG4gICAgICAgICAgICB0aGlzLl9jYW52YXMud2lkdGggPSB0aGlzLl9jYW52YXNXaWR0aDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX2dyYXlBbmRIYWxmU2FtcGxlRnJvbUNhbnZhc0RhdGEoaW1hZ2VEYXRhOiBVaW50OENsYW1wZWRBcnJheSk6IHZvaWQge1xuICAgICAgICBjb25zdCBlbmRJbmRleCA9IGltYWdlRGF0YS5sZW5ndGggPj4gMjtcbiAgICAgICAgY29uc3Qgb3V0V2lkdGggPSB0aGlzLl93aWR0aCA+PiAxO1xuICAgICAgICBsZXQgdG9wUm93SW5kZXggPSAwO1xuICAgICAgICBsZXQgYm90dG9tUm93SW5kZXggPSB0aGlzLl93aWR0aDtcbiAgICAgICAgbGV0IG91dEltYWdlSW5kZXggPSAwO1xuXG4gICAgICAgIHdoaWxlIChib3R0b21Sb3dJbmRleCA8IGVuZEluZGV4KSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG91dFdpZHRoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0b3A0ID0gdG9wUm93SW5kZXggPDwgMjtcbiAgICAgICAgICAgICAgICBjb25zdCBib3R0b200ID0gYm90dG9tUm93SW5kZXggPDwgMjtcbiAgICAgICAgICAgICAgICB0aGlzLl9kYXRhW291dEltYWdlSW5kZXhdID0gKFxuICAgICAgICAgICAgICAgICAgICAoMC4yOTkgKiBpbWFnZURhdGFbdG9wNCArIDBdICsgMC41ODcgKiBpbWFnZURhdGFbdG9wNCArIDFdICsgMC4xMTQgKiBpbWFnZURhdGFbdG9wNCArIDJdKSArXG4gICAgICAgICAgICAgICAgICAgICgwLjI5OSAqIGltYWdlRGF0YVt0b3A0ICsgNF0gKyAwLjU4NyAqIGltYWdlRGF0YVt0b3A0ICsgNV0gKyAwLjExNCAqIGltYWdlRGF0YVt0b3A0ICsgNl0pICtcbiAgICAgICAgICAgICAgICAgICAgKDAuMjk5ICogaW1hZ2VEYXRhW2JvdHRvbTQgKyAwXSArIDAuNTg3ICogaW1hZ2VEYXRhW2JvdHRvbTQgKyAxXSArIDAuMTE0ICogaW1hZ2VEYXRhW2JvdHRvbTQgKyAyXSkgK1xuICAgICAgICAgICAgICAgICAgICAoMC4yOTkgKiBpbWFnZURhdGFbYm90dG9tNCArIDRdICsgMC41ODcgKiBpbWFnZURhdGFbYm90dG9tNCArIDVdICsgMC4xMTQgKiBpbWFnZURhdGFbYm90dG9tNCArIDZdKVxuICAgICAgICAgICAgICAgICkgLyA0IHwgMDtcbiAgICAgICAgICAgICAgICBvdXRJbWFnZUluZGV4Kys7XG4gICAgICAgICAgICAgICAgdG9wUm93SW5kZXggKz0gMjtcbiAgICAgICAgICAgICAgICBib3R0b21Sb3dJbmRleCArPSAyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdG9wUm93SW5kZXggKz0gdGhpcy5fd2lkdGg7XG4gICAgICAgICAgICBib3R0b21Sb3dJbmRleCArPSB0aGlzLl93aWR0aDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX2NvbXB1dGVHcmF5KGltYWdlRGF0YTogVWludDhDbGFtcGVkQXJyYXkpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgaW1hZ2VEYXRhTGVuZ3RoID0gaW1hZ2VEYXRhLmxlbmd0aDtcblxuICAgICAgICBpZiAodGhpcy5fc3RyZWFtQ29uZmlnICYmIHRoaXMuX3N0cmVhbUNvbmZpZy5zaW5nbGVDaGFubmVsKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgaiA9IDA7IGkgPCBpbWFnZURhdGFMZW5ndGg7IGkgKz0gNCwgaisrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGF0YVtqXSA9IGltYWdlRGF0YVtpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBqID0gMDsgaSA8IGltYWdlRGF0YUxlbmd0aDsgaSArPSA0LCBqKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9kYXRhW2pdID0gMC4yOTkgKiBpbWFnZURhdGFbaV0gKyAwLjU4NyAqIGltYWdlRGF0YVtpICsgMV0gKyAwLjExNCAqIGltYWdlRGF0YVtpICsgMl0gfCAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgZmluZFRhZ3NJbk9iamVjdFVSTCwgVGFncyB9IGZyb20gJy4vZXhpZi1oZWxwZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEltYWdlSW5mbyB7XG4gICAgaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQ7XG4gICAgdGFncz86IFRhZ3M7XG59XG5cbmV4cG9ydCBjbGFzcyBJbWFnZUxvYWRlciB7XG4gICAgc3RhdGljIGFzeW5jIGxvYWQoXG4gICAgICAgIGJhc2VVcmk6IHN0cmluZyxcbiAgICAgICAgY2FsbGJhY2s6IChfOiBBcnJheTxJbWFnZUluZm8+KSA9PiB2b2lkLFxuICAgICAgICBvZmZzZXQ6IG51bWJlcixcbiAgICAgICAgc2l6ZTogbnVtYmVyLFxuICAgICAgICBzZXF1ZW5jZTogYm9vbGVhblxuICAgICk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBjb25zdCBpbWFnZVNyY3MgPSBuZXcgQXJyYXk8c3RyaW5nPihzaXplKTtcbiAgICAgICAgY29uc3QgbG9hZGVkSW1hZ2VzID0gbmV3IEFycmF5PEltYWdlSW5mbz4oc2l6ZSk7XG4gICAgICAgIGNvbnN0IG5vdExvYWRlZEltYWdlcyA9IG5ldyBBcnJheTxIVE1MSW1hZ2VFbGVtZW50PigpO1xuXG4gICAgICAgIGlmIChzZXF1ZW5jZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGltYWdlU3Jjc1swXSA9IGJhc2VVcmk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICAgICAgICAgIGltYWdlU3Jjc1tpXSA9IGAke2Jhc2VVcml9aW1hZ2UtJHsoJzAwJyArIChvZmZzZXQgKyBpKSkuc2xpY2UoLTMpfS5qcGdgO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaW1hZ2VTcmNzLmZvckVhY2goc3JjID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICBub3RMb2FkZWRJbWFnZXMucHVzaChpbWFnZSk7XG4gICAgICAgICAgICBpbWFnZS5vbmxvYWQgPSAoKSA9PiBsb2FkZWQoaW1hZ2UpO1xuICAgICAgICAgICAgaW1hZ2Uuc3JjID0gc3JjO1xuICAgICAgICB9KTtcblxuICAgICAgICBhc3luYyBmdW5jdGlvbiBsb2FkZWQobG9hZGVkSW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgbm90TG9hZGVkSW1hZ2VzLmxlbmd0aDsgeCsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5vdExvYWRlZEltYWdlc1t4XSA9PT0gbG9hZGVkSW1hZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgbm90TG9hZGVkSW1hZ2VzLnNwbGljZSh4LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogYXNzdW1lIHRoZSBpbmRleCBpcyB0aGUgc2FtZVxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGltYWdlU3Jjcy5sZW5ndGg7IHkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1hZ2VOYW1lID0gaW1hZ2VTcmNzW3ldLnN1YnN0cihpbWFnZVNyY3NbeV0ubGFzdEluZGV4T2YoJy8nKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobG9hZGVkSW1hZ2Uuc3JjLmxhc3RJbmRleE9mKGltYWdlTmFtZSkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGVkSW1hZ2VzW3ldID0geyBpbWFnZTogbG9hZGVkSW1hZ2UgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobm90TG9hZGVkSW1hZ2VzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdJbWFnZXMgbG9hZGVkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZXF1ZW5jZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpcnN0SW1hZ2UgPSBsb2FkZWRJbWFnZXNbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICBmaXJzdEltYWdlLnRhZ3MgPSBhd2FpdCBmaW5kVGFnc0luT2JqZWN0VVJMKGJhc2VVcmkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXgpO1xuICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGxvYWRlZEltYWdlcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgSW1hZ2VJbmZvLCBJbWFnZUxvYWRlciB9IGZyb20gJy4vaW1hZ2UtbG9hZGVyJztcbmltcG9ydCB7IElucHV0U3RyZWFtIH0gZnJvbSAnLi9pbnB1dC1zdHJlYW0nO1xuaW1wb3J0IHsgSW5wdXRTdHJlYW1Db25maWcgfSBmcm9tICcuL2lucHV0LXN0cmVhbS1jb25maWcnO1xuXG5leHBvcnQgY2xhc3MgSW1hZ2VTdHJlYW0gZXh0ZW5kcyBJbnB1dFN0cmVhbSB7XG4gICAgcHJpdmF0ZSBfYmFzZVVybDogc3RyaW5nO1xuICAgIHByaXZhdGUgX2VuZGVkOiBib29sZWFuO1xuICAgIHByaXZhdGUgX2ZyYW1lSW5kZXg6IG51bWJlcjtcbiAgICBwcml2YXRlIF9oZWlnaHQ6IG51bWJlcjtcbiAgICBwcml2YXRlIF9pbWFnZXM6IEFycmF5PEltYWdlSW5mbz47XG4gICAgcHJpdmF0ZSBfbG9hZGVkOiBib29sZWFuO1xuICAgIHByaXZhdGUgX29mZnNldDogbnVtYmVyO1xuICAgIHByaXZhdGUgX3BhdXNlZDogYm9vbGVhbjtcbiAgICBwcml2YXRlIF9zaXplOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfd2lkdGg6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuX2NhbnZhc0hlaWdodCA9IDA7XG4gICAgICAgIHRoaXMuX2NhbnZhc1dpZHRoID0gMDtcbiAgICAgICAgdGhpcy5fYmFzZVVybCA9IG51bGw7XG4gICAgICAgIHRoaXMuX2VuZGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2ZyYW1lSW5kZXggPSAwO1xuICAgICAgICB0aGlzLl9oZWlnaHQgPSAwO1xuICAgICAgICB0aGlzLl9pbWFnZXMgPSBudWxsO1xuICAgICAgICB0aGlzLl9sb2FkZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fb2Zmc2V0ID0gMTtcbiAgICAgICAgdGhpcy5fcGF1c2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fc2l6ZSA9IDA7XG4gICAgICAgIHRoaXMuX3dpZHRoID0gMDtcbiAgICB9XG5cbiAgICBnZXQgcmVhbEhlaWdodCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5faGVpZ2h0O1xuICAgIH1cblxuICAgIGdldCByZWFsV2lkdGgoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dpZHRoO1xuICAgIH1cblxuICAgIGdldCBjb25maWcoKTogSW5wdXRTdHJlYW1Db25maWcge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29uZmlnO1xuICAgIH1cblxuICAgIHNldCBjb25maWcoY29uZmlnOiBJbnB1dFN0cmVhbUNvbmZpZykge1xuICAgICAgICB0aGlzLl9jb25maWcgPSB7IC4uLmNvbmZpZyB9O1xuICAgICAgICB0aGlzLl9iYXNlVXJsID0gY29uZmlnLnNyYztcbiAgICAgICAgdGhpcy5fc2l6ZSA9IGNvbmZpZy5zZXF1ZW5jZSAmJiBjb25maWcubGVuZ3RoID8gY29uZmlnLmxlbmd0aCA6IDE7XG5cbiAgICAgICAgdGhpcy5fbG9hZEltYWdlcygpO1xuICAgIH1cblxuICAgIGdldCBlbmRlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VuZGVkO1xuICAgIH1cblxuICAgIHNldEF0dHJpYnV0ZSgpIHsgfVxuXG4gICAgcGF1c2UoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3BhdXNlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcGxheSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fcGF1c2VkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgc2V0IGN1cnJlbnRUaW1lKHRpbWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9mcmFtZUluZGV4ID0gdGltZTtcbiAgICB9XG5cbiAgICBnZXRGcmFtZSgpOiBIVE1MVmlkZW9FbGVtZW50IHwgSW1hZ2VJbmZvIHtcbiAgICAgICAgbGV0IGZyYW1lOiBJbWFnZUluZm8gPSBudWxsO1xuXG4gICAgICAgIGlmICh0aGlzLl9sb2FkZWQgJiYgIXRoaXMuX3BhdXNlZCkge1xuICAgICAgICAgICAgZnJhbWUgPSB0aGlzLl9pbWFnZXNbdGhpcy5fZnJhbWVJbmRleF07XG5cbiAgICAgICAgICAgIGlmICh0aGlzLl9mcmFtZUluZGV4IDwgKHRoaXMuX3NpemUgLSAxKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2ZyYW1lSW5kZXgrKztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2VuZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyKCdlbmRlZCcsIFtdKTtcbiAgICAgICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmcmFtZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9sb2FkSW1hZ2VzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9sb2FkZWQgPSBmYWxzZTtcbiAgICAgICAgSW1hZ2VMb2FkZXIubG9hZCh0aGlzLl9iYXNlVXJsLCBpbWFnZXMgPT4ge1xuICAgICAgICAgICAgdGhpcy5faW1hZ2VzID0gaW1hZ2VzO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKGltYWdlc1swXS50YWdzICYmIGltYWdlc1swXS50YWdzLm9yaWVudGF0aW9uKSB7XG4gICAgICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgIGNhc2UgODoge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl93aWR0aCA9IGltYWdlc1swXS5pbWFnZS5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2hlaWdodCA9IGltYWdlc1swXS5pbWFnZS53aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fd2lkdGggPSBpbWFnZXNbMF0uaW1hZ2Uud2lkdGg7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2hlaWdodCA9IGltYWdlc1swXS5pbWFnZS5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9jYW52YXNXaWR0aCA9IHRoaXMuX2NhbGN1bGF0ZWRXaWR0aCA9IHRoaXMuX2NvbmZpZy5zaXplID8gdGhpcy5fd2lkdGggPiB0aGlzLl9oZWlnaHQgP1xuICAgICAgICAgICAgICAgIHRoaXMuX2NvbmZpZy5zaXplIDogdGhpcy5fd2lkdGggKiB0aGlzLl9jb25maWcuc2l6ZSAvIHRoaXMuX2hlaWdodCB8IDAgOiB0aGlzLl93aWR0aDtcbiAgICAgICAgICAgIHRoaXMuX2NhbnZhc0hlaWdodCA9IHRoaXMuX2NhbGN1bGF0ZWRIZWlnaHQgPSB0aGlzLl9jb25maWcuc2l6ZSA/IHRoaXMuX3dpZHRoID4gdGhpcy5faGVpZ2h0ID9cbiAgICAgICAgICAgICAgICB0aGlzLl9oZWlnaHQgKiB0aGlzLl9jb25maWcuc2l6ZSAvIHRoaXMuX3dpZHRoIHwgMCA6IHRoaXMuX2NvbmZpZy5zaXplIDogdGhpcy5faGVpZ2h0O1xuICAgICAgICAgICAgdGhpcy5fbG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuX2ZyYW1lSW5kZXggPSAwO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnRyaWdnZXIoJ2NhbnJlY29yZCcsIFtdKSwgMCk7XG4gICAgICAgIH0sIHRoaXMuX29mZnNldCwgdGhpcy5fc2l6ZSwgdGhpcy5fY29uZmlnLnNlcXVlbmNlKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBQb2ludCB9IGZyb20gJy4uL2NvbW1vbi9wb2ludCc7XG5pbXBvcnQgeyBCYXJjb2RlTG9jYXRvckNvbmZpZywgUGF0Y2hTaXplQ29uZmlnIH0gZnJvbSAnLi4vbG9jYXRvci9iYXJjb2RlLWxvY2F0b3ItY29uZmlnJztcbmltcG9ydCB7IElucHV0U3RyZWFtIH0gZnJvbSAnLi9pbnB1dC1zdHJlYW0nO1xuaW1wb3J0IHsgQXJlYUNvbmZpZyB9IGZyb20gJy4vaW5wdXQtc3RyZWFtLWNvbmZpZyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGltZW5zaW9uIHtcbiAgICB1bml0OiAnJScgfCAncHgnLFxuICAgIHZhbHVlOiBudW1iZXI7XG59XG5cbmZ1bmN0aW9uIF9jb21wdXRlRGl2aXNvcnMobjogbnVtYmVyKTogQXJyYXk8bnVtYmVyPiB7XG4gICAgY29uc3QgZGl2aXNvcnMgPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xuICAgIGNvbnN0IGxhcmdlRGl2aXNvcnMgPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xuXG4gICAgZm9yIChsZXQgZGl2aXNvciA9IDE7IGRpdmlzb3IgKiBkaXZpc29yIDw9IG47IGRpdmlzb3IrKykge1xuICAgICAgICBpZiAobiAlIGRpdmlzb3IgPT09IDApIHtcbiAgICAgICAgICAgIGRpdmlzb3JzLnB1c2goZGl2aXNvcik7XG4gICAgICAgICAgICBpZiAoZGl2aXNvciAqIGRpdmlzb3IgIT09IG4pIHtcbiAgICAgICAgICAgICAgICBsYXJnZURpdmlzb3JzLnVuc2hpZnQobiAvIGRpdmlzb3IgfCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkaXZpc29ycy5jb25jYXQobGFyZ2VEaXZpc29ycyk7XG59XG5cbmZ1bmN0aW9uIF9jb21wdXRlQ29tbW9uRGl2aXNvcnMobTogbnVtYmVyLCBuOiBudW1iZXIpOiBBcnJheTxudW1iZXI+IHtcbiAgICBpZiAobSA9PT0gbikge1xuICAgICAgICByZXR1cm4gX2NvbXB1dGVEaXZpc29ycyhtKTtcbiAgICB9XG5cbiAgICBjb25zdCBtYXggPSBtID4gbiA/IG0gOiBuO1xuICAgIGNvbnN0IG1pbiA9IG0gPiBuID8gbiA6IG07XG4gICAgY29uc3QgZGl2aXNvcnMgPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xuICAgIGNvbnN0IGxhcmdlRGl2aXNvcnMgPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xuXG4gICAgZm9yIChsZXQgZGl2aXNvciA9IDE7IGRpdmlzb3IgKiBkaXZpc29yIDw9IG1pbjsgZGl2aXNvcisrKSB7XG4gICAgICAgIGlmIChtYXggJSBkaXZpc29yID09PSAwICYmIG1pbiAlIGRpdmlzb3IgPT09IDApIHtcbiAgICAgICAgICAgIGRpdmlzb3JzLnB1c2goZGl2aXNvcik7XG4gICAgICAgICAgICBjb25zdCBsYXJnZURpdmlzb3IgPSBtaW4gLyBkaXZpc29yIHwgMDtcbiAgICAgICAgICAgIGlmIChkaXZpc29yICE9PSBsYXJnZURpdmlzb3IgJiYgbWF4ICUgbGFyZ2VEaXZpc29yID09PSAwKSB7XG4gICAgICAgICAgICAgICAgbGFyZ2VEaXZpc29ycy51bnNoaWZ0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGl2aXNvcnMuY29uY2F0KGxhcmdlRGl2aXNvcnMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlUGF0Y2hTaXplKHBhdGNoU2l6ZTogUGF0Y2hTaXplQ29uZmlnLCB7IHgsIHkgfTogUG9pbnQpOiBQb2ludCB7XG4gICAgY29uc3Qgd2lkZVNpZGUgPSBNYXRoLm1heCh4IHwgMCwgeSB8IDApIHwgMDtcbiAgICBjb25zdCBuck9mUGF0Y2hlc0xpc3QgPSBbOCwgMTAsIDE1LCAyMCwgMzIsIDYwLCA4MF07XG4gICAgY29uc3QgbnJPZlBhdGNoZXNNYXAgPSB7XG4gICAgICAgICd4LXNtYWxsJzogNSxcbiAgICAgICAgc21hbGw6IDQsXG4gICAgICAgIG1lZGl1bTogMyxcbiAgICAgICAgbGFyZ2U6IDIsXG4gICAgICAgICd4LWxhcmdlJzogMVxuICAgIH07XG4gICAgY29uc3QgbnJPZlBhdGNoZXNJbmRleCA9IG5yT2ZQYXRjaGVzTWFwW3BhdGNoU2l6ZV0gfHwgbnJPZlBhdGNoZXNNYXAubWVkaXVtIHwgMDtcbiAgICBjb25zdCBuck9mUGF0Y2hlcyA9IG5yT2ZQYXRjaGVzTGlzdFtuck9mUGF0Y2hlc0luZGV4XSB8IDA7XG4gICAgY29uc3QgZGVzaXJlZFBhdGNoU2l6ZSA9IHdpZGVTaWRlIC8gbnJPZlBhdGNoZXMgfCAwO1xuXG4gICAgZnVuY3Rpb24gZmluZFBhdGNoU2l6ZUZvckRpdmlzb3JzKGRpdmlzb3JzOiBBcnJheTxudW1iZXI+KTogUG9pbnQge1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIGxldCBmb3VuZCA9IGRpdmlzb3JzW2Rpdmlzb3JzLmxlbmd0aCA+PiAxXSB8IDA7XG5cbiAgICAgICAgd2hpbGUgKGkgPCAoZGl2aXNvcnMubGVuZ3RoIC0gMSkgJiYgZGl2aXNvcnNbaV0gPCBkZXNpcmVkUGF0Y2hTaXplKSB7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGkgPiAwKSB7XG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoZGl2aXNvcnNbaV0gLSBkZXNpcmVkUGF0Y2hTaXplKSA+IE1hdGguYWJzKGRpdmlzb3JzW2kgLSAxXSAtIGRlc2lyZWRQYXRjaFNpemUpKSB7XG4gICAgICAgICAgICAgICAgZm91bmQgPSBkaXZpc29yc1tpIC0gMV0gfCAwO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3VuZCA9IGRpdmlzb3JzW2ldIHwgMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZGVzaXJlZFBhdGNoU2l6ZSAvIGZvdW5kIDwgbnJPZlBhdGNoZXNMaXN0W25yT2ZQYXRjaGVzSW5kZXggKyAxXSAvIG5yT2ZQYXRjaGVzTGlzdFtuck9mUGF0Y2hlc0luZGV4XSAmJlxuICAgICAgICAgICAgZGVzaXJlZFBhdGNoU2l6ZSAvIGZvdW5kID4gbnJPZlBhdGNoZXNMaXN0W25yT2ZQYXRjaGVzSW5kZXggLSAxXSAvIG5yT2ZQYXRjaGVzTGlzdFtuck9mUGF0Y2hlc0luZGV4XSkge1xuICAgICAgICAgICAgcmV0dXJuIHsgeDogZm91bmQsIHk6IGZvdW5kIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3Qgb3B0aW1hbFBhdGNoU2l6ZSA9IGZpbmRQYXRjaFNpemVGb3JEaXZpc29ycyhfY29tcHV0ZUNvbW1vbkRpdmlzb3JzKHgsIHkpKSB8fFxuICAgICAgICBmaW5kUGF0Y2hTaXplRm9yRGl2aXNvcnMoX2NvbXB1dGVEaXZpc29ycyh3aWRlU2lkZSkpIHx8XG4gICAgICAgIGZpbmRQYXRjaFNpemVGb3JEaXZpc29ycyhfY29tcHV0ZURpdmlzb3JzKGRlc2lyZWRQYXRjaFNpemUgKiBuck9mUGF0Y2hlcykpO1xuXG4gICAgcmV0dXJuIG9wdGltYWxQYXRjaFNpemU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0ltYWdlQ29uc3RyYWludHMoaW5wdXRTdHJlYW06IElucHV0U3RyZWFtLCBjb25maWc6IEJhcmNvZGVMb2NhdG9yQ29uZmlnKSB7XG4gICAgbGV0IHdpZHRoID0gaW5wdXRTdHJlYW0ud2lkdGg7XG4gICAgbGV0IGhlaWdodCA9IGlucHV0U3RyZWFtLmhlaWdodDtcbiAgICBjb25zdCBzaGlmdCA9IGNvbmZpZy5oYWxmU2FtcGxlID8gMSA6IDAgfCAwO1xuICAgIGNvbnN0IGlucHV0U3RyZWFtQ29uZmlnID0gaW5wdXRTdHJlYW0uY29uZmlnO1xuXG4gICAgLy8gY2FsY3VsYXRlIHdpZHRoIGFuZCBoZWlnaHQgYmFzZWQgb24gYXJlYVxuICAgIGlmIChpbnB1dFN0cmVhbUNvbmZpZyAmJiBpbnB1dFN0cmVhbUNvbmZpZy5hcmVhKSB7XG4gICAgICAgIGNvbnN0IGFyZWEgPSBjb21wdXRlSW1hZ2VBcmVhKHdpZHRoLCBoZWlnaHQsIGlucHV0U3RyZWFtQ29uZmlnLmFyZWEpO1xuICAgICAgICBpbnB1dFN0cmVhbS50b3BMZWZ0ID0gYXJlYS50b3BMZWZ0O1xuICAgICAgICBpbnB1dFN0cmVhbS5zZXRDYW52YXNTaXplKHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICB3aWR0aCA9IGFyZWEud2lkdGg7XG4gICAgICAgIGhlaWdodCA9IGFyZWEuaGVpZ2h0O1xuICAgIH1cblxuICAgIGNvbnN0IHNpemUgPSB7XG4gICAgICAgIHg6IHdpZHRoID4+IHNoaWZ0LFxuICAgICAgICB5OiBoZWlnaHQgPj4gc2hpZnRcbiAgICB9O1xuXG4gICAgY29uc3QgcGF0Y2hTaXplID0gY2FsY3VsYXRlUGF0Y2hTaXplKGNvbmZpZy5wYXRjaFNpemUsIHNpemUpO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdQYXRjaC1TaXplOicsIEpTT04uc3RyaW5naWZ5KHBhdGNoU2l6ZSkpO1xuICAgIH1cblxuICAgIGlucHV0U3RyZWFtLndpZHRoID0gKHNpemUueCAvIHBhdGNoU2l6ZS54IDw8IHNoaWZ0KSAqIHBhdGNoU2l6ZS54IHwgMDtcbiAgICBpbnB1dFN0cmVhbS5oZWlnaHQgPSAoc2l6ZS55IC8gcGF0Y2hTaXplLnkgPDwgc2hpZnQpICogcGF0Y2hTaXplLnkgfCAwO1xuXG4gICAgaWYgKChpbnB1dFN0cmVhbS53aWR0aCAlIHBhdGNoU2l6ZS54KSA9PT0gMCAmJiAoaW5wdXRTdHJlYW0uaGVpZ2h0ICUgcGF0Y2hTaXplLnkpID09PSAwKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXG4gICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSBkaW1lbnNpb25zIGRvIG5vdCBjb21wbHkgd2l0aCB0aGUgY3VycmVudCBzZXR0aW5nczogd2lkdGggKCR7d2lkdGh9KSBhbmQgaGVpZ2h0ICgke2hlaWdodH0pIG11c3QgYmUgYSBtdWx0aXBsZSBvZiAke3BhdGNoU2l6ZS54fWApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX3BhcnNlQ3NzRGltZW5zaW9uVmFsdWVzKHZhbHVlOiBzdHJpbmcpOiBEaW1lbnNpb24ge1xuICAgIGNvbnN0IGRpbWVuc2lvbjogRGltZW5zaW9uID0ge1xuICAgICAgICB2YWx1ZTogcGFyc2VGbG9hdCh2YWx1ZSksXG4gICAgICAgIHVuaXQ6IHZhbHVlLmluZGV4T2YoJyUnKSA9PT0gdmFsdWUubGVuZ3RoIC0gMSA/ICclJyA6IHZhbHVlLmluZGV4T2YoJ3B4JykgPT09IHZhbHVlLmxlbmd0aCAtIDIgPyAncHgnIDogJyUnXG4gICAgfTtcblxuICAgIHJldHVybiBkaW1lbnNpb247XG59XG5cbmV4cG9ydCBjb25zdCBfZGltZW5zaW9uc0NvbnZlcnRlcnMgPSB7XG4gICAgYm90dG9tOiAoZGltZW5zaW9uOiBEaW1lbnNpb24sIHsgaGVpZ2h0IH0pID0+IGRpbWVuc2lvbi51bml0ID09PSAnJScgP1xuICAgICAgICBoZWlnaHQgLSBoZWlnaHQgKiBkaW1lbnNpb24udmFsdWUgLyAxMDAgfCAwIDogZGltZW5zaW9uLnVuaXQgPT09ICdweCcgPyBoZWlnaHQgLSBkaW1lbnNpb24udmFsdWUgOiBoZWlnaHQsXG4gICAgbGVmdDogKGRpbWVuc2lvbjogRGltZW5zaW9uLCB7IHdpZHRoIH0pID0+IGRpbWVuc2lvbi51bml0ID09PSAnJScgP1xuICAgICAgICB3aWR0aCAqIGRpbWVuc2lvbi52YWx1ZSAvIDEwMCB8IDAgOiBkaW1lbnNpb24udW5pdCA9PT0gJ3B4JyA/IGRpbWVuc2lvbi52YWx1ZSA6IDAsXG4gICAgcmlnaHQ6IChkaW1lbnNpb246IERpbWVuc2lvbiwgeyB3aWR0aCB9KSA9PiBkaW1lbnNpb24udW5pdCA9PT0gJyUnID9cbiAgICAgICAgd2lkdGggLSB3aWR0aCAqIGRpbWVuc2lvbi52YWx1ZSAvIDEwMCB8IDAgOiBkaW1lbnNpb24udW5pdCA9PT0gJ3B4JyA/IHdpZHRoIC0gZGltZW5zaW9uLnZhbHVlIDogd2lkdGgsXG4gICAgdG9wOiAoZGltZW5zaW9uOiBEaW1lbnNpb24sIHsgaGVpZ2h0IH0pOiBudW1iZXIgPT4gZGltZW5zaW9uLnVuaXQgPT09ICclJyA/XG4gICAgICAgIGhlaWdodCAqIGRpbWVuc2lvbi52YWx1ZSAvIDEwMCB8IDAgOiBkaW1lbnNpb24udW5pdCA9PT0gJ3B4JyA/IGRpbWVuc2lvbi52YWx1ZSA6IDBcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wdXRlSW1hZ2VBcmVhKGlucHV0V2lkdGg6IG51bWJlciwgaW5wdXRIZWlnaHQ6IG51bWJlciwgYXJlYTogQXJlYUNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRleHQgPSB7IHdpZHRoOiBpbnB1dFdpZHRoLCBoZWlnaHQ6IGlucHV0SGVpZ2h0IH07XG4gICAgY29uc3QgcGFyc2VkQXJlYToge1xuICAgICAgICBib3R0b20/OiBudW1iZXI7XG4gICAgICAgIGxlZnQ/OiBudW1iZXI7XG4gICAgICAgIHJpZ2h0PzogbnVtYmVyO1xuICAgICAgICB0b3A/OiBudW1iZXI7XG4gICAgfSA9IE9iamVjdC5rZXlzKGFyZWEpLnJlZHVjZSgocmVzdWx0LCBrZXkpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBhcmVhW2tleV07XG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IF9wYXJzZUNzc0RpbWVuc2lvblZhbHVlcyh2YWx1ZSk7XG4gICAgICAgIGNvbnN0IGNhbGN1bGF0ZWQgPSBfZGltZW5zaW9uc0NvbnZlcnRlcnNba2V5XShwYXJzZWQsIGNvbnRleHQpO1xuXG4gICAgICAgIHJlc3VsdFtrZXldID0gY2FsY3VsYXRlZDtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9LCB7fSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB0b3BMZWZ0OiB7IHg6IHBhcnNlZEFyZWEubGVmdCwgeTogcGFyc2VkQXJlYS50b3AgfSxcbiAgICAgICAgd2lkdGg6IHBhcnNlZEFyZWEucmlnaHQgLSBwYXJzZWRBcmVhLmxlZnQsXG4gICAgICAgIGhlaWdodDogcGFyc2VkQXJlYS5ib3R0b20gLSBwYXJzZWRBcmVhLnRvcFxuICAgIH07XG59XG4iLCJpbXBvcnQgeyBQb2ludCB9IGZyb20gJy4uL2NvbW1vbi9wb2ludCc7XG5pbXBvcnQgeyBJbWFnZUluZm8gfSBmcm9tICcuL2ltYWdlLWxvYWRlcic7XG5pbXBvcnQgeyBJbnB1dFN0cmVhbUNvbmZpZyB9IGZyb20gJy4vaW5wdXQtc3RyZWFtLWNvbmZpZyc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBJbnB1dFN0cmVhbSB7XG4gICAgcHJvdGVjdGVkIF9jYWxjdWxhdGVkSGVpZ2h0OiBudW1iZXI7XG4gICAgcHJvdGVjdGVkIF9jYWxjdWxhdGVkV2lkdGg6IG51bWJlcjtcbiAgICBwcm90ZWN0ZWQgX2NhbnZhc0hlaWdodDogbnVtYmVyO1xuICAgIHByb3RlY3RlZCBfY2FudmFzV2lkdGg6IG51bWJlcjtcbiAgICBwcm90ZWN0ZWQgX2NvbmZpZzogSW5wdXRTdHJlYW1Db25maWc7XG4gICAgcHJvdGVjdGVkIF9ldmVudE5hbWVzOiBBcnJheTxzdHJpbmc+O1xuICAgIHByb3RlY3RlZCBfZXZlbnRIYW5kbGVyczogTWFwPHN0cmluZywgQXJyYXk8RXZlbnRMaXN0ZW5lcj4+O1xuICAgIHByb3RlY3RlZCBfdG9wTGVmdDogUG9pbnQ7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fY2FudmFzV2lkdGggPSAwO1xuICAgICAgICB0aGlzLl9jYW52YXNIZWlnaHQgPSAwO1xuICAgICAgICB0aGlzLl9jb25maWcgPSBudWxsO1xuICAgICAgICB0aGlzLl9ldmVudE5hbWVzID0gWydjYW5yZWNvcmQnLCAnZW5kZWQnXTtcbiAgICAgICAgdGhpcy5fZXZlbnRIYW5kbGVycyA9IG5ldyBNYXA8c3RyaW5nLCBBcnJheTxFdmVudExpc3RlbmVyPj4oKTtcbiAgICAgICAgdGhpcy5fdG9wTGVmdCA9IHsgeDogMCwgeTogMCB9O1xuICAgIH1cblxuICAgIGFic3RyYWN0IGdldCByZWFsSGVpZ2h0KCk6IG51bWJlcjtcblxuICAgIGFic3RyYWN0IGdldCByZWFsV2lkdGgoKTogbnVtYmVyO1xuXG4gICAgZ2V0IGhlaWdodCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2FsY3VsYXRlZEhlaWdodDtcbiAgICB9XG5cbiAgICBzZXQgaGVpZ2h0KGhlaWdodDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX2NhbGN1bGF0ZWRIZWlnaHQgPSBoZWlnaHQ7XG4gICAgfVxuXG4gICAgZ2V0IHdpZHRoKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jYWxjdWxhdGVkV2lkdGg7XG4gICAgfVxuXG4gICAgc2V0IHdpZHRoKHdpZHRoOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fY2FsY3VsYXRlZFdpZHRoID0gd2lkdGg7XG4gICAgfVxuXG4gICAgZ2V0IHRvcExlZnQoKTogUG9pbnQge1xuICAgICAgICByZXR1cm4geyAuLi50aGlzLl90b3BMZWZ0IH07XG4gICAgfVxuXG4gICAgc2V0IHRvcExlZnQodG9wTGVmdDogUG9pbnQpIHtcbiAgICAgICAgdGhpcy5fdG9wTGVmdC54ID0gdG9wTGVmdC54O1xuICAgICAgICB0aGlzLl90b3BMZWZ0LnkgPSB0b3BMZWZ0Lnk7XG4gICAgfVxuXG4gICAgc2V0Q2FudmFzU2l6ZSh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLl9jYW52YXNXaWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLl9jYW52YXNIZWlnaHQgPSBoZWlnaHQ7XG4gICAgfVxuXG4gICAgZ2V0IGNhbnZhc0hlaWdodCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2FudmFzSGVpZ2h0O1xuICAgIH1cblxuICAgIGdldCBjYW52YXNXaWR0aCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2FudmFzV2lkdGg7XG4gICAgfVxuXG4gICAgYWJzdHJhY3QgZ2V0IGNvbmZpZygpOiBJbnB1dFN0cmVhbUNvbmZpZztcblxuICAgIGFic3RyYWN0IHNldCBjb25maWcoY29uZmlnOiBJbnB1dFN0cmVhbUNvbmZpZyk7XG5cbiAgICBhYnN0cmFjdCBnZXQgZW5kZWQoKTogYm9vbGVhbjtcblxuICAgIGFic3RyYWN0IHNldEF0dHJpYnV0ZShuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkO1xuXG4gICAgYWJzdHJhY3QgcGF1c2UoKTogdm9pZDtcblxuICAgIGFic3RyYWN0IHBsYXkoKTogdm9pZDtcblxuICAgIGFic3RyYWN0IHNldCBjdXJyZW50VGltZSh0aW1lOiBudW1iZXIpO1xuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcihldmVudDogc3RyaW5nLCBsaXN0ZW5lcjogRXZlbnRMaXN0ZW5lciwgX29wdGlvbnM/OiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLl9ldmVudE5hbWVzLmluZGV4T2YoZXZlbnQpICE9PSAtMSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9ldmVudEhhbmRsZXJzLmhhcyhldmVudCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9ldmVudEhhbmRsZXJzLnNldChldmVudCwgbmV3IEFycmF5PEV2ZW50TGlzdGVuZXI+KCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fZXZlbnRIYW5kbGVycy5nZXQoZXZlbnQpLnB1c2gobGlzdGVuZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xlYXJFdmVudEhhbmRsZXJzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9ldmVudEhhbmRsZXJzLmNsZWFyKCk7XG4gICAgfVxuXG4gICAgdHJpZ2dlcihldmVudE5hbWU6IHN0cmluZywgYXJnQXJyYXk/OiBhbnkpIHtcbiAgICAgICAgY29uc3QgaGFuZGxlcnMgPSB0aGlzLl9ldmVudEhhbmRsZXJzLmdldChldmVudE5hbWUpO1xuXG4gICAgICAgIGlmIChoYW5kbGVycyAmJiBoYW5kbGVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGhhbmRsZXJzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlcnNbal0uYXBwbHkodGhpcywgYXJnQXJyYXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWJzdHJhY3QgZ2V0RnJhbWUoKTogSFRNTFZpZGVvRWxlbWVudCB8IEltYWdlSW5mbztcbn1cbiIsImltcG9ydCB7IFZpZGVvU3RyZWFtIH0gZnJvbSAnLi92aWRlby1zdHJlYW0nO1xuXG5leHBvcnQgY2xhc3MgTGl2ZVN0cmVhbSBleHRlbmRzIFZpZGVvU3RyZWFtIHtcbiAgICBjb25zdHJ1Y3Rvcih2aWRlbzogSFRNTFZpZGVvRWxlbWVudCkge1xuICAgICAgICB2aWRlby5zZXRBdHRyaWJ1dGUoJ2F1dG9wbGF5JywgJycpO1xuICAgICAgICBzdXBlcih2aWRlbyk7XG4gICAgfVxuXG4gICAgZ2V0IGVuZGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgSW1hZ2VJbmZvIH0gZnJvbSAnLi9pbWFnZS1sb2FkZXInO1xuaW1wb3J0IHsgSW5wdXRTdHJlYW0gfSBmcm9tICcuL2lucHV0LXN0cmVhbSc7XG5pbXBvcnQgeyBJbnB1dFN0cmVhbUNvbmZpZyB9IGZyb20gJy4vaW5wdXQtc3RyZWFtLWNvbmZpZyc7XG5cbmV4cG9ydCBjbGFzcyBWaWRlb1N0cmVhbSBleHRlbmRzIElucHV0U3RyZWFtIHtcbiAgICBwcml2YXRlIF92aWRlbzogSFRNTFZpZGVvRWxlbWVudDtcblxuICAgIGNvbnN0cnVjdG9yKHZpZGVvOiBIVE1MVmlkZW9FbGVtZW50KSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5fdmlkZW8gPSB2aWRlbztcbiAgICB9XG5cbiAgICBnZXQgcmVhbEhlaWdodCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmlkZW8udmlkZW9IZWlnaHQ7XG4gICAgfVxuXG4gICAgZ2V0IHJlYWxXaWR0aCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmlkZW8udmlkZW9XaWR0aDtcbiAgICB9XG5cbiAgICBnZXQgY29uZmlnKCk6IElucHV0U3RyZWFtQ29uZmlnIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbmZpZztcbiAgICB9XG5cbiAgICBzZXQgY29uZmlnKGNvbmZpZzogSW5wdXRTdHJlYW1Db25maWcpIHtcbiAgICAgICAgdGhpcy5fY29uZmlnID0geyAuLi5jb25maWcgfTtcbiAgICAgICAgdGhpcy5fdmlkZW8uc3JjID0gY29uZmlnLnNyYyB8fCAnJztcbiAgICB9XG5cbiAgICBnZXQgZW5kZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl92aWRlby5lbmRlZDtcbiAgICB9XG5cbiAgICBzZXRBdHRyaWJ1dGUobmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3ZpZGVvLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgcGF1c2UoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3ZpZGVvLnBhdXNlKCk7XG4gICAgfVxuXG4gICAgcGxheSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fdmlkZW8ucGxheSgpO1xuICAgIH1cblxuICAgIHNldCBjdXJyZW50VGltZSh0aW1lOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy50eXBlICE9PSAnTGl2ZVN0cmVhbScpIHtcbiAgICAgICAgICAgIHRoaXMuX3ZpZGVvLmN1cnJlbnRUaW1lID0gdGltZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZEV2ZW50TGlzdGVuZXIoZXZlbnQ6IHN0cmluZywgbGlzdGVuZXI6IEV2ZW50TGlzdGVuZXIsIG9wdGlvbnM/OiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIHN1cGVyLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyLCBvcHRpb25zKTtcblxuICAgICAgICBpZiAodGhpcy5fZXZlbnROYW1lcy5pbmRleE9mKGV2ZW50KSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuX3ZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyLCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsZWFyRXZlbnRIYW5kbGVycygpOiB2b2lkIHtcbiAgICAgICAgLy8gVE9ETzogY29tZSB1cCB3aXRoIGEgd2F5IHRvIHJlbW92ZSB2aWRlbyBldmVudCBoYW5kbGVyc1xuICAgICAgICAvLyB0aGlzLl9ldmVudE5hbWVzLmZvckVhY2goZXZlbnROYW1lID0+IHtcbiAgICAgICAgLy8gICAgIGNvbnN0IGhhbmRsZXJzID0gdGhpcy5fZXZlbnRIYW5kbGVycy5nZXQoZXZlbnROYW1lKTtcbiAgICAgICAgLy8gICAgIGlmIChoYW5kbGVycyAmJiBoYW5kbGVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgIC8vICAgICAgICAgaGFuZGxlcnMuZm9yRWFjaChoYW5kbGVyID0+IHRoaXMuX3ZpZGVvLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBoYW5kbGVyKSk7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH0pO1xuICAgICAgICBzdXBlci5jbGVhckV2ZW50SGFuZGxlcnMoKTtcbiAgICB9XG5cbiAgICB0cmlnZ2VyKGV2ZW50TmFtZTogc3RyaW5nLCBhcmdBcnJheT86IGFueSkge1xuICAgICAgICBpZiAoZXZlbnROYW1lID09PSAnY2FucmVjb3JkJykge1xuICAgICAgICAgICAgdGhpcy5faW5pdFNpemUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN1cGVyLnRyaWdnZXIoZXZlbnROYW1lLCBhcmdBcnJheSlcbiAgICB9XG5cbiAgICBnZXRGcmFtZSgpOiBIVE1MVmlkZW9FbGVtZW50IHwgSW1hZ2VJbmZvIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZpZGVvO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2luaXRTaXplKCkge1xuICAgICAgICBjb25zdCB3aWR0aCA9IHRoaXMuX3ZpZGVvLnZpZGVvV2lkdGg7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuX3ZpZGVvLnZpZGVvSGVpZ2h0O1xuXG4gICAgICAgIHRoaXMuX2NhbnZhc1dpZHRoID0gdGhpcy5fY2FsY3VsYXRlZFdpZHRoID1cbiAgICAgICAgICAgIHRoaXMuX2NvbmZpZy5zaXplID8gd2lkdGggPiBoZWlnaHQgPyB0aGlzLl9jb25maWcuc2l6ZSA6IHdpZHRoICogdGhpcy5fY29uZmlnLnNpemUgLyBoZWlnaHQgfCAwIDogd2lkdGg7XG4gICAgICAgIHRoaXMuX2NhbnZhc0hlaWdodCA9IHRoaXMuX2NhbGN1bGF0ZWRIZWlnaHQgPVxuICAgICAgICAgICAgdGhpcy5fY29uZmlnLnNpemUgPyB3aWR0aCA+IGhlaWdodCA/IGhlaWdodCAqIHRoaXMuX2NvbmZpZy5zaXplIC8gd2lkdGggfCAwIDogdGhpcy5fY29uZmlnLnNpemUgOiBoZWlnaHQ7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgTGl2ZVN0cmVhbSBleHRlbmRzIFZpZGVvU3RyZWFtIHtcbiAgICBjb25zdHJ1Y3Rvcih2aWRlbzogSFRNTFZpZGVvRWxlbWVudCkge1xuICAgICAgICB2aWRlby5zZXRBdHRyaWJ1dGUoJ2F1dG9wbGF5JywgJycpO1xuICAgICAgICBzdXBlcih2aWRlbyk7XG4gICAgfVxuXG4gICAgZ2V0IGVuZGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgSW1hZ2VXcmFwcGVyIH0gZnJvbSAnLi4vY29tbW9uL2ltYWdlLXdyYXBwZXInO1xuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuLi9jb21tb24vcG9pbnQnO1xuXG4vKipcbiAqIEludmVydCBtYXRyaXhcbiAqIEBwYXJhbSBtYXRyaXggdGhlIG1hdHJpeCB0byBpbnZlcnRcbiAqIEByZXR1cm5zIHRoZSBpbnZlcnRlZCBtYXRyaXhcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGludmVydChtYXRyaXg6IEZsb2F0MzJBcnJheSk6IEZsb2F0MzJBcnJheSB7XG4gICAgY29uc3QgYTAgPSBtYXRyaXhbMF07XG4gICAgY29uc3QgYTEgPSBtYXRyaXhbMV07XG4gICAgY29uc3QgYTIgPSBtYXRyaXhbMl07XG4gICAgY29uc3QgYTMgPSBtYXRyaXhbM107XG4gICAgY29uc3QgZGV0ZXJtaW5hbnQgPSBhMCAqIGEzIC0gYTIgKiBhMTtcblxuICAgIGlmICghZGV0ZXJtaW5hbnQpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBGbG9hdDMyQXJyYXkoW2EzIC8gZGV0ZXJtaW5hbnQsIC1hMSAvIGRldGVybWluYW50LCAtYTIgLyBkZXRlcm1pbmFudCwgYTAgLyBkZXRlcm1pbmFudF0pO1xufVxuXG4vKipcbiAqIFRyYW5zZm9ybXMgdGhlIHZlY3RvciB3aXRoIGEgbWF0cml4XG4gKiBAcGFyYW0geyB4LCB5IH0gdmVjdG9yIHRvIHRyYW5zZm9ybVxuICogQHBhcmFtIG1hdHJpeCBtYXRyaXggdG8gdHJhbnNmb3JtIHdpdGhcbiAqIEByZXR1cm5zIHRoZSB0cmFuc2Zvcm1lZCB2ZWN0b3JcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybVdpdGhNYXRyaXgoeyB4LCB5IH06IFBvaW50LCBtYXRyaXg6IEZsb2F0MzJBcnJheSk6IFBvaW50IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB4OiBtYXRyaXhbMF0gKiB4ICsgbWF0cml4WzJdICogeSxcbiAgICAgICAgeTogbWF0cml4WzFdICogeCArIG1hdHJpeFszXSAqIHlcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBfY29tcHV0ZUhpc3RvZ3JhbShpbWFnZVdyYXBwZXI6IEltYWdlV3JhcHBlciwgYml0c1BlclBpeGVsOiBudW1iZXIpOiBJbnQzMkFycmF5IHtcbiAgICBpZiAoIWJpdHNQZXJQaXhlbCkge1xuICAgICAgICBiaXRzUGVyUGl4ZWwgPSA4O1xuICAgIH1cblxuICAgIGNvbnN0IGltYWdlRGF0YSA9IGltYWdlV3JhcHBlci5kYXRhO1xuICAgIGNvbnN0IGJpdFNoaWZ0ID0gOCAtIGJpdHNQZXJQaXhlbDtcbiAgICBjb25zdCBidWNrZXRDb3VudCA9IDEgPDwgYml0c1BlclBpeGVsO1xuICAgIGNvbnN0IGhpc3RvZ3JhbSA9IG5ldyBJbnQzMkFycmF5KGJ1Y2tldENvdW50KTtcblxuICAgIGZvciAobGV0IGkgPSBpbWFnZURhdGEubGVuZ3RoOyBpLS07KSB7XG4gICAgICAgIGhpc3RvZ3JhbVtpbWFnZURhdGFbaV0gPj4gYml0U2hpZnRdKys7XG4gICAgfVxuXG4gICAgcmV0dXJuIGhpc3RvZ3JhbTtcbn1cblxuZnVuY3Rpb24gX2RldGVybWluZU90c3VUaHJlc2hvbGQoaW1hZ2VXcmFwcGVyOiBJbWFnZVdyYXBwZXIsIGJpdHNQZXJQaXhlbD86IG51bWJlcik6IG51bWJlciB7XG4gICAgaWYgKCFiaXRzUGVyUGl4ZWwpIHtcbiAgICAgICAgYml0c1BlclBpeGVsID0gODtcbiAgICB9XG5cbiAgICBjb25zdCBiaXRTaGlmdCA9IDggLSBiaXRzUGVyUGl4ZWw7XG4gICAgY29uc3QgaGlzdCA9IF9jb21wdXRlSGlzdG9ncmFtKGltYWdlV3JhcHBlciwgYml0c1BlclBpeGVsKTtcbiAgICBjb25zdCB2ZXQgPSBbMF07XG4gICAgY29uc3QgbWF4ID0gKDEgPDwgYml0c1BlclBpeGVsKSAtIDE7XG5cbiAgICBmdW5jdGlvbiBweChpbml0OiBudW1iZXIsIGVuZDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgbGV0IHN1bSA9IDA7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IGluaXQ7IGkgPD0gZW5kOyBpKyspIHtcbiAgICAgICAgICAgIHN1bSArPSBoaXN0W2ldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1bTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBteChpbml0OiBudW1iZXIsIGVuZDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgbGV0IHN1bSA9IDA7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IGluaXQ7IGkgPD0gZW5kOyBpKyspIHtcbiAgICAgICAgICAgIHN1bSArPSBpICogaGlzdFtpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdW07XG4gICAgfVxuXG4gICAgZm9yIChsZXQgayA9IDE7IGsgPCBtYXg7IGsrKykge1xuICAgICAgICBjb25zdCBwMSA9IHB4KDAsIGspO1xuICAgICAgICBjb25zdCBwMiA9IHB4KGsgKyAxLCBtYXgpO1xuICAgICAgICBjb25zdCBwMTIgPSBwMSAqIHAyIHx8IDE7XG4gICAgICAgIGNvbnN0IG0xID0gbXgoMCwgaykgKiBwMjtcbiAgICAgICAgY29uc3QgbTIgPSBteChrICsgMSwgbWF4KSAqIHAxO1xuICAgICAgICBjb25zdCBtMTIgPSBtMSAtIG0yO1xuICAgICAgICB2ZXRba10gPSBtMTIgKiBtMTIgLyBwMTI7XG4gICAgfVxuXG4gICAgLy8gaW5kZXggb2YgbWF4IGVsZW1lbnRcbiAgICBjb25zdCB0aHJlc2hvbGQgPSB2ZXQucmVkdWNlKChtYXhJbmRleCwgaXRlbSwgaW5kZXgsIGFycmF5KSA9PiBpdGVtID4gYXJyYXlbbWF4SW5kZXhdID8gaW5kZXggOiBtYXhJbmRleCwgMCk7XG5cbiAgICByZXR1cm4gdGhyZXNob2xkIDw8IGJpdFNoaWZ0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb3RzdVRocmVzaG9sZChpbWFnZVdyYXBwZXI6IEltYWdlV3JhcHBlciwgdGFyZ2V0V3JhcHBlcjogSW1hZ2VXcmFwcGVyKTogbnVtYmVyIHtcbiAgICBjb25zdCB0aHJlc2hvbGQgPSBfZGV0ZXJtaW5lT3RzdVRocmVzaG9sZChpbWFnZVdyYXBwZXIpO1xuICAgIGNvbnN0IHRhcmdldERhdGEgPSB0YXJnZXRXcmFwcGVyLmRhdGE7XG5cbiAgICBpbWFnZVdyYXBwZXIuZGF0YS5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgICAgdGFyZ2V0RGF0YVtpbmRleF0gPSB2YWx1ZSA8IHRocmVzaG9sZCA/IDEgOiAwO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRocmVzaG9sZDtcbn1cblxuLyoqXG4gKiBAcGFyYW0gaW1hZ2VXcmFwcGVyIGlucHV0IGltYWdlIHRvIGJlIHNhbXBsZWRcbiAqIEBwYXJhbSBvdXRJbWFnZVdyYXBwZXIge0ltYWdlV3JhcHBlcn0gdG8gYmUgc3RvcmVkIGluXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoYWxmU2FtcGxlKGltYWdlV3JhcHBlcjogSW1hZ2VXcmFwcGVyLCBvdXRJbWFnZVdyYXBwZXI6IEltYWdlV3JhcHBlcik6IHZvaWQge1xuICAgIGNvbnN0IGltYWdlID0gaW1hZ2VXcmFwcGVyLmRhdGE7XG4gICAgY29uc3Qgd2lkdGggPSBpbWFnZVdyYXBwZXIuc2l6ZS54O1xuICAgIGNvbnN0IG91dEltYWdlID0gb3V0SW1hZ2VXcmFwcGVyLmRhdGE7XG4gICAgY29uc3QgZW5kSW5kZXggPSBpbWFnZS5sZW5ndGg7XG4gICAgY29uc3Qgb3V0V2lkdGggPSB3aWR0aCA+PiAxO1xuICAgIGxldCB0b3BSb3dJbmRleCA9IDA7XG4gICAgbGV0IGJvdHRvbVJvd0luZGV4ID0gd2lkdGg7XG4gICAgbGV0IG91dEltZ0luZGV4ID0gMDtcblxuICAgIHdoaWxlIChib3R0b21Sb3dJbmRleCA8IGVuZEluZGV4KSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3V0V2lkdGg7IGkrKykge1xuICAgICAgICAgICAgb3V0SW1hZ2Vbb3V0SW1nSW5kZXhdID1cbiAgICAgICAgICAgICAgICAoaW1hZ2VbdG9wUm93SW5kZXhdICsgaW1hZ2VbdG9wUm93SW5kZXggKyAxXSArIGltYWdlW2JvdHRvbVJvd0luZGV4XSArIGltYWdlW2JvdHRvbVJvd0luZGV4ICsgMV0pID4+IDI7XG4gICAgICAgICAgICBvdXRJbWdJbmRleCsrO1xuICAgICAgICAgICAgdG9wUm93SW5kZXggKz0gMjtcbiAgICAgICAgICAgIGJvdHRvbVJvd0luZGV4ICs9IDI7XG4gICAgICAgIH1cbiAgICAgICAgdG9wUm93SW5kZXggKz0gd2lkdGg7XG4gICAgICAgIGJvdHRvbVJvd0luZGV4ICs9IHdpZHRoO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEJveCB9IGZyb20gJy4uL2NvbW1vbi9ib3gnO1xuaW1wb3J0IHsgQ2x1c3RlciB9IGZyb20gJy4uL2NvbW1vbi9jbHVzdGVyJztcbmltcG9ydCB7IEhTViwgaHN2MnJnYiwgUkdCIH0gZnJvbSAnLi4vY29tbW9uL2hzdjJyZ2InO1xuaW1wb3J0IHsgSW1hZ2VEZWJ1ZyB9IGZyb20gJy4uL2NvbW1vbi9pbWFnZS1kZWJ1Zyc7XG5pbXBvcnQgeyBJbWFnZVdyYXBwZXIgfSBmcm9tICcuLi9jb21tb24vaW1hZ2Utd3JhcHBlcic7XG5pbXBvcnQgeyBNb21lbnQgfSBmcm9tICcuLi9jb21tb24vbW9tZW50JztcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi4vY29tbW9uL3BvaW50JztcbmltcG9ydCB7IGNhbGN1bGF0ZVBhdGNoU2l6ZSB9IGZyb20gJy4uL2lucHV0L2lucHV0LXN0cmVhbS11dGlscyc7XG5pbXBvcnQgeyBCYXJjb2RlTG9jYXRvckNvbmZpZyB9IGZyb20gJy4vYmFyY29kZS1sb2NhdG9yLWNvbmZpZyc7XG5pbXBvcnQgeyBoYWxmU2FtcGxlLCBpbnZlcnQsIG90c3VUaHJlc2hvbGQsIHRyYW5zZm9ybVdpdGhNYXRyaXggfSBmcm9tICcuL2JhcmNvZGUtbG9jYXRvci11dGlscyc7XG5pbXBvcnQgeyBSYXN0ZXJpemVyIH0gZnJvbSAnLi9yYXN0ZXJpemVyJztcbmltcG9ydCBza2VsZXRvbml6ZXIgZnJvbSAnLi9za2VsZXRvbml6ZXInO1xuaW1wb3J0IHsgU2VhcmNoRGlyZWN0aW9ucyB9IGZyb20gJy4vdHJhY2VyJztcblxuaW50ZXJmYWNlIFBhdGNoIHtcbiAgICBib3g6IEJveDtcbiAgICBpbmRleDogbnVtYmVyO1xuICAgIG1vbWVudHM6IEFycmF5PE1vbWVudD47XG4gICAgcG9zOiBQb2ludDtcbiAgICByYWQ6IG51bWJlcjtcbiAgICB4OiBudW1iZXI7XG4gICAgeTogbnVtYmVyO1xufVxuXG50eXBlIFNjZWxldG9uaXplciA9IGFueTtcblxuY29uc3QgTW9tZW50U2ltaWxhcml0eVRocmVzaG9sZCA9IDAuOTtcblxuZXhwb3J0IGNsYXNzIEJhcmNvZGVMb2NhdG9yIHtcbiAgICBwcml2YXRlIF9jb25maWc6IEJhcmNvZGVMb2NhdG9yQ29uZmlnO1xuICAgIHByaXZhdGUgX2lucHV0SW1hZ2VXcmFwcGVyOiBJbWFnZVdyYXBwZXI7XG4gICAgcHJpdmF0ZSBfY3VycmVudEltYWdlV3JhcHBlcjogSW1hZ2VXcmFwcGVyO1xuICAgIHByaXZhdGUgX3NrZWxJbWFnZVdyYXBwZXI6IEltYWdlV3JhcHBlcjtcbiAgICBwcml2YXRlIF9zdWJJbWFnZVdyYXBwZXI6IEltYWdlV3JhcHBlcjtcbiAgICBwcml2YXRlIF9sYWJlbEltYWdlV3JhcHBlcjogSW1hZ2VXcmFwcGVyPEFycmF5PG51bWJlcj4+O1xuICAgIHByaXZhdGUgX2JpbmFyeUltYWdlV3JhcHBlcjogSW1hZ2VXcmFwcGVyO1xuICAgIHByaXZhdGUgX3BhdGNoR3JpZDogSW1hZ2VXcmFwcGVyO1xuICAgIHByaXZhdGUgX3BhdGNoTGFiZWxHcmlkOiBJbWFnZVdyYXBwZXI8SW50MzJBcnJheT47XG4gICAgcHJpdmF0ZSBfaW1hZ2VUb1BhdGNoR3JpZDogQXJyYXk8UGF0Y2g+O1xuICAgIHByaXZhdGUgX3BhdGNoU2l6ZTogUG9pbnQ7XG4gICAgcHJpdmF0ZSBfYmluYXJ5Q29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuICAgIHByaXZhdGUgX251bVBhdGNoZXM6IFBvaW50O1xuICAgIHByaXZhdGUgX3NrZWxldG9uaXplcjogU2NlbGV0b25pemVyO1xuXG4gICAgY29uc3RydWN0b3IoaW5wdXRJbWFnZVdyYXBwZXI6IEltYWdlV3JhcHBlciwgY29uZmlnOiBCYXJjb2RlTG9jYXRvckNvbmZpZykge1xuICAgICAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG4gICAgICAgIHRoaXMuX2lucHV0SW1hZ2VXcmFwcGVyID0gaW5wdXRJbWFnZVdyYXBwZXI7XG4gICAgICAgIHRoaXMuX251bVBhdGNoZXMgPSB7IHg6IDAsIHk6IDAgfTtcblxuICAgICAgICB0aGlzLl9pbml0QnVmZmVycygpO1xuICAgICAgICB0aGlzLl9pbml0Q2FudmFzKCk7XG4gICAgfVxuXG4gICAgbG9jYXRlKCkge1xuICAgICAgICBpZiAodGhpcy5fY29uZmlnLmhhbGZTYW1wbGUpIHtcbiAgICAgICAgICAgIGhhbGZTYW1wbGUodGhpcy5faW5wdXRJbWFnZVdyYXBwZXIsIHRoaXMuX2N1cnJlbnRJbWFnZVdyYXBwZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fYmluYXJpemVJbWFnZSgpO1xuICAgICAgICBjb25zdCBwYXRjaGVzRm91bmQgPSB0aGlzLl9maW5kUGF0Y2hlcygpO1xuICAgICAgICAvLyByZXR1cm4gdW5sZXNzIDUlIG9yIG1vcmUgcGF0Y2hlcyBhcmUgZm91bmRcbiAgICAgICAgaWYgKHBhdGNoZXNGb3VuZC5sZW5ndGggPCB0aGlzLl9udW1QYXRjaGVzLnggKiB0aGlzLl9udW1QYXRjaGVzLnkgKiAwLjA1KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHJhc3Rlcml6ZSBhcmVhIGJ5IGNvbXBhcmluZyBhbmd1bGFyIHNpbWlsYXJpdHk7XG4gICAgICAgIGNvbnN0IG1heExhYmVsID0gdGhpcy5fcmFzdGVyaXplQW5ndWxhclNpbWlsYXJpdHkocGF0Y2hlc0ZvdW5kKTtcbiAgICAgICAgaWYgKG1heExhYmVsIDwgMSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzZWFyY2ggZm9yIGFyZWEgd2l0aCB0aGUgbW9zdCBwYXRjaGVzIChiaWdnZXN0IGNvbm5lY3RlZCBhcmVhKVxuICAgICAgICBjb25zdCB0b3BMYWJlbHMgPSB0aGlzLl9maW5kQmlnZ2VzdENvbm5lY3RlZEFyZWFzKG1heExhYmVsKTtcbiAgICAgICAgaWYgKHRvcExhYmVscy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYm94ZXMgPSB0aGlzLl9maW5kQm94ZXModG9wTGFiZWxzLCBtYXhMYWJlbCk7XG4gICAgICAgIHJldHVybiBib3hlcztcbiAgICB9XG5cbiAgICBwcml2YXRlIF9pbml0QnVmZmVycygpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy5oYWxmU2FtcGxlKSB7XG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50SW1hZ2VXcmFwcGVyID0gbmV3IEltYWdlV3JhcHBlcih7XG4gICAgICAgICAgICAgICAgeDogdGhpcy5faW5wdXRJbWFnZVdyYXBwZXIuc2l6ZS54IC8gMiB8IDAsXG4gICAgICAgICAgICAgICAgeTogdGhpcy5faW5wdXRJbWFnZVdyYXBwZXIuc2l6ZS55IC8gMiB8IDBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fY3VycmVudEltYWdlV3JhcHBlciA9IHRoaXMuX2lucHV0SW1hZ2VXcmFwcGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fcGF0Y2hTaXplID0gY2FsY3VsYXRlUGF0Y2hTaXplKHRoaXMuX2NvbmZpZy5wYXRjaFNpemUsIHRoaXMuX2N1cnJlbnRJbWFnZVdyYXBwZXIuc2l6ZSk7XG5cbiAgICAgICAgdGhpcy5fbnVtUGF0Y2hlcy54ID0gdGhpcy5fY3VycmVudEltYWdlV3JhcHBlci5zaXplLnggLyB0aGlzLl9wYXRjaFNpemUueCB8IDA7XG4gICAgICAgIHRoaXMuX251bVBhdGNoZXMueSA9IHRoaXMuX2N1cnJlbnRJbWFnZVdyYXBwZXIuc2l6ZS55IC8gdGhpcy5fcGF0Y2hTaXplLnkgfCAwO1xuXG4gICAgICAgIHRoaXMuX2JpbmFyeUltYWdlV3JhcHBlciA9IG5ldyBJbWFnZVdyYXBwZXIodGhpcy5fY3VycmVudEltYWdlV3JhcHBlci5zaXplLCB1bmRlZmluZWQsIFVpbnQ4QXJyYXksIGZhbHNlKTtcblxuICAgICAgICB0aGlzLl9sYWJlbEltYWdlV3JhcHBlciA9IG5ldyBJbWFnZVdyYXBwZXIodGhpcy5fcGF0Y2hTaXplLCB1bmRlZmluZWQsIEFycmF5LCB0cnVlKTtcblxuICAgICAgICBjb25zdCBza2VsZXRvbkltYWdlRGF0YSA9IG5ldyBBcnJheUJ1ZmZlcig2NCAqIDEwMjQpO1xuICAgICAgICB0aGlzLl9zdWJJbWFnZVdyYXBwZXIgPSBuZXcgSW1hZ2VXcmFwcGVyKHRoaXMuX3BhdGNoU2l6ZSwgbmV3IFVpbnQ4QXJyYXkoc2tlbGV0b25JbWFnZURhdGEsIDAsIHRoaXMuX3BhdGNoU2l6ZS54ICogdGhpcy5fcGF0Y2hTaXplLnkpKTtcbiAgICAgICAgdGhpcy5fc2tlbEltYWdlV3JhcHBlciA9IG5ldyBJbWFnZVdyYXBwZXIodGhpcy5fcGF0Y2hTaXplLFxuICAgICAgICAgICAgbmV3IFVpbnQ4QXJyYXkoc2tlbGV0b25JbWFnZURhdGEsIHRoaXMuX3BhdGNoU2l6ZS54ICogdGhpcy5fcGF0Y2hTaXplLnkgKiAzLCB0aGlzLl9wYXRjaFNpemUueCAqIHRoaXMuX3BhdGNoU2l6ZS55KSxcbiAgICAgICAgICAgIHVuZGVmaW5lZCwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuX3NrZWxldG9uaXplciA9IHNrZWxldG9uaXplcihcbiAgICAgICAgICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykgPyB3aW5kb3cgOiAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnKSA/IHNlbGYgOiBnbG9iYWwsXG4gICAgICAgICAgICB7IHNpemU6IHRoaXMuX3BhdGNoU2l6ZS54IH0sXG4gICAgICAgICAgICBza2VsZXRvbkltYWdlRGF0YVxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IHNpemUgPSB7XG4gICAgICAgICAgICB4OiAodGhpcy5fY3VycmVudEltYWdlV3JhcHBlci5zaXplLnggLyB0aGlzLl9zdWJJbWFnZVdyYXBwZXIuc2l6ZS54KSB8IDAsXG4gICAgICAgICAgICB5OiAodGhpcy5fY3VycmVudEltYWdlV3JhcHBlci5zaXplLnkgLyB0aGlzLl9zdWJJbWFnZVdyYXBwZXIuc2l6ZS55KSB8IDBcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fcGF0Y2hMYWJlbEdyaWQgPSBuZXcgSW1hZ2VXcmFwcGVyKHNpemUsIHVuZGVmaW5lZCwgSW50MzJBcnJheSwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuX3BhdGNoR3JpZCA9IG5ldyBJbWFnZVdyYXBwZXIoc2l6ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRydWUpO1xuICAgICAgICB0aGlzLl9pbWFnZVRvUGF0Y2hHcmlkID0gbmV3IEFycmF5PFBhdGNoPih0aGlzLl9wYXRjaExhYmVsR3JpZC5kYXRhLmxlbmd0aCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaW5pdENhbnZhcygpIHtcbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy51c2VXb3JrZXIgfHwgdHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgIGNhbnZhcy5jbGFzc05hbWUgPSAnYmluYXJ5QnVmZmVyJztcbiAgICAgICAgY2FudmFzLndpZHRoID0gdGhpcy5fYmluYXJ5SW1hZ2VXcmFwcGVyLnNpemUueDtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IHRoaXMuX2JpbmFyeUltYWdlV3JhcHBlci5zaXplLnk7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuX2NvbmZpZy5kZWJ1ZyAmJiB0aGlzLl9jb25maWcuZGVidWcuc2hvd0NhbnZhcykge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RlYnVnJykuYXBwZW5kQ2hpbGQoY2FudmFzKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9iaW5hcnlDb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIGJvdW5kaW5nIGJveCB3aGljaCBlbmNsb3NlcyBhbGwgdGhlIGdpdmVuIHBhdGNoZXNcbiAgICAgKiBAcmV0dXJucyBUaGUgbWluaW1hbCBib3VuZGluZyBib3hcbiAgICAgKi9cbiAgICBwcml2YXRlIF9ib3hGcm9tUGF0Y2hlcyhwYXRjaGVzOiBBcnJheTxQYXRjaD4pOiBCb3gge1xuICAgICAgICBjb25zdCBkZWJ1ZyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdGhpcy5fY29uZmlnLmRlYnVnO1xuICAgICAgICBsZXQgYXZlcmFnZVJhZCA9IHBhdGNoZXMucmVkdWNlKChzdW0sIHsgcG9zLCByYWQgfSkgPT4ge1xuICAgICAgICAgICAgaWYgKGRlYnVnICYmIGRlYnVnLnNob3dQYXRjaGVzKSB7XG4gICAgICAgICAgICAgICAgLy8gZHJhdyBhbGwgcGF0Y2hlcyB3aGljaCBhcmUgdG8gYmUgdGFrZW4gaW50byBjb25zaWRlcmF0aW9uXG4gICAgICAgICAgICAgICAgdGhpcy5fZHJhd1JlY3QocG9zLCB0aGlzLl9zdWJJbWFnZVdyYXBwZXIuc2l6ZSwgJ3JlZCcsIDEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gc3VtICsgcmFkO1xuICAgICAgICB9LCAwKSAvIHBhdGNoZXMubGVuZ3RoO1xuXG4gICAgICAgIGF2ZXJhZ2VSYWQgPSAoYXZlcmFnZVJhZCAqIDE4MCAvIE1hdGguUEkgKyA5MCkgJSAxODAgLSA5MDtcbiAgICAgICAgaWYgKGF2ZXJhZ2VSYWQgPCAwKSB7XG4gICAgICAgICAgICBhdmVyYWdlUmFkICs9IDE4MDtcbiAgICAgICAgfVxuICAgICAgICBhdmVyYWdlUmFkID0gKDE4MCAtIGF2ZXJhZ2VSYWQpICogTWF0aC5QSSAvIDE4MDtcblxuICAgICAgICBjb25zdCBjb3MgPSBNYXRoLmNvcyhhdmVyYWdlUmFkKTtcbiAgICAgICAgY29uc3Qgc2luID0gTWF0aC5zaW4oYXZlcmFnZVJhZCk7XG4gICAgICAgIGNvbnN0IG1hdHJpeCA9IG5ldyBGbG9hdDMyQXJyYXkoW2Nvcywgc2luLCAtc2luLCBjb3NdKTtcbiAgICAgICAgY29uc3QgaW52ZXJzZU1hdHJpeCA9IGludmVydChtYXRyaXgpO1xuXG4gICAgICAgIC8vIGl0ZXJhdGUgb3ZlciBwYXRjaGVzIGFuZCByb3RhdGUgYnkgYW5nbGVcbiAgICAgICAgcGF0Y2hlcy5mb3JFYWNoKCh7IGJveCB9KSA9PiB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDQ7IGorKykge1xuICAgICAgICAgICAgICAgIGJveFtqXSA9IHRyYW5zZm9ybVdpdGhNYXRyaXgoYm94W2pdLCBtYXRyaXgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZGVidWcgJiYgZGVidWcuYm94RnJvbVBhdGNoZXMuc2hvd1RyYW5zZm9ybWVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZHJhd1BhdGgoYm94LCAnIzk5ZmYwMCcsIDIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgbWluWCA9IHRoaXMuX2JpbmFyeUltYWdlV3JhcHBlci5zaXplLng7XG4gICAgICAgIGxldCBtaW5ZID0gdGhpcy5fYmluYXJ5SW1hZ2VXcmFwcGVyLnNpemUueTtcbiAgICAgICAgbGV0IG1heFggPSAtbWluWDtcbiAgICAgICAgbGV0IG1heFkgPSAtbWluWTtcblxuICAgICAgICAvLyBmaW5kIGJvdW5kaW5nIGJveFxuICAgICAgICBwYXRjaGVzLmZvckVhY2goKHsgYm94IH0pID0+IHtcbiAgICAgICAgICAgIGJveC5mb3JFYWNoKCh7IHgsIHkgfSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh4IDwgbWluWCkge1xuICAgICAgICAgICAgICAgICAgICBtaW5YID0geDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHggPiBtYXhYKSB7XG4gICAgICAgICAgICAgICAgICAgIG1heFggPSB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoeSA8IG1pblkpIHtcbiAgICAgICAgICAgICAgICAgICAgbWluWSA9IHk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh5ID4gbWF4WSkge1xuICAgICAgICAgICAgICAgICAgICBtYXhZID0geTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IGJveDogQm94ID0gW3sgeDogbWluWCwgeTogbWluWSB9LCB7IHg6IG1heFgsIHk6IG1pblkgfSwgeyB4OiBtYXhYLCB5OiBtYXhZIH0sIHsgeDogbWluWCwgeTogbWF4WSB9XTtcblxuICAgICAgICBpZiAoZGVidWcgJiYgZGVidWcuYm94RnJvbVBhdGNoZXMuc2hvd1RyYW5zZm9ybWVkQm94KSB7XG4gICAgICAgICAgICB0aGlzLl9kcmF3UGF0aChib3gsICcjZmYwMDAwJywgMik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyByZXZlcnNlIHJvdGF0aW9uXG4gICAgICAgIGJveCA9IGJveC5tYXAodmVydGV4ID0+IHRyYW5zZm9ybVdpdGhNYXRyaXgodmVydGV4LCBpbnZlcnNlTWF0cml4KSkgYXMgQm94O1xuXG4gICAgICAgIGlmIChkZWJ1ZyAmJiBkZWJ1Zy5ib3hGcm9tUGF0Y2hlcy5zaG93QkIpIHtcbiAgICAgICAgICAgIHRoaXMuX2RyYXdQYXRoKGJveCwgJyNmZjAwMDAnLCAyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9jb25maWcuaGFsZlNhbXBsZSkge1xuICAgICAgICAgICAgLy8gc2NhbGVcbiAgICAgICAgICAgIGJveCA9IGJveC5tYXAoKHsgeCwgeSB9KSA9PiAoeyB4OiB4ICogMiwgeTogeSAqPSAyIH0pKSBhcyBCb3g7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYm94O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBiaW5hcnkgaW1hZ2Ugb2YgdGhlIGN1cnJlbnQgaW1hZ2VcbiAgICAgKi9cbiAgICBwcml2YXRlIF9iaW5hcml6ZUltYWdlKCk6IHZvaWQge1xuICAgICAgICBvdHN1VGhyZXNob2xkKHRoaXMuX2N1cnJlbnRJbWFnZVdyYXBwZXIsIHRoaXMuX2JpbmFyeUltYWdlV3JhcHBlcik7XG4gICAgICAgIHRoaXMuX2JpbmFyeUltYWdlV3JhcHBlci56ZXJvQm9yZGVyKCk7XG5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdGhpcy5fY29uZmlnLmRlYnVnICYmIHRoaXMuX2NvbmZpZy5kZWJ1Zy5zaG93Q2FudmFzKSB7XG4gICAgICAgICAgICB0aGlzLl9iaW5hcnlJbWFnZVdyYXBwZXIuc2hvdyh0aGlzLl9iaW5hcnlDb250ZXh0LCAyNTUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSXRlcmF0ZSBvdmVyIHRoZSBlbnRpcmUgaW1hZ2UsIGV4dHJhY3QgcGF0Y2hlc1xuICAgICAqL1xuICAgIHByaXZhdGUgX2ZpbmRQYXRjaGVzKCk6IEFycmF5PFBhdGNoPiB7XG4gICAgICAgIGNvbnN0IGRlYnVnID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLl9jb25maWcuZGVidWc7XG4gICAgICAgIGxldCBwYXRjaGVzRm91bmQgPSBuZXcgQXJyYXk8UGF0Y2g+KCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9udW1QYXRjaGVzLng7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLl9udW1QYXRjaGVzLnk7IGorKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHggPSB0aGlzLl9zdWJJbWFnZVdyYXBwZXIuc2l6ZS54ICogaTtcbiAgICAgICAgICAgICAgICBjb25zdCB5ID0gdGhpcy5fc3ViSW1hZ2VXcmFwcGVyLnNpemUueSAqIGo7XG5cbiAgICAgICAgICAgICAgICAvLyBzZXBlcmF0ZSBwYXJ0c1xuICAgICAgICAgICAgICAgIHRoaXMuX3NrZWxldG9uaXplKHgsIHkpO1xuXG4gICAgICAgICAgICAgICAgLy8gUmFzdGVyaXplLCBmaW5kIGluZGl2aWR1YWwgYmFyc1xuICAgICAgICAgICAgICAgIHRoaXMuX3NrZWxJbWFnZVdyYXBwZXIuemVyb0JvcmRlcigpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2xhYmVsSW1hZ2VXcmFwcGVyLmRhdGEuZmlsbCgwKTtcbiAgICAgICAgICAgICAgICBjb25zdCByYXN0ZXJpemVyID0gbmV3IFJhc3Rlcml6ZXIodGhpcy5fc2tlbEltYWdlV3JhcHBlciwgdGhpcy5fbGFiZWxJbWFnZVdyYXBwZXIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJhc3RlclJlc3VsdCA9IHJhc3Rlcml6ZXIucmFzdGVyaXplKDApO1xuXG4gICAgICAgICAgICAgICAgaWYgKGRlYnVnICYmIGRlYnVnLnNob3dMYWJlbHMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbGFiZWxJbWFnZVdyYXBwZXIub3ZlcmxheSh0aGlzLl9iaW5hcnlDb250ZXh0LCAzNjAgLyByYXN0ZXJSZXN1bHQuY291bnQgfCAwLCB4LCB5KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBjYWxjdWxhdGUgbW9tZW50cyBmcm9tIHRoZSBza2VsZXRvbml6ZWQgcGF0Y2hcbiAgICAgICAgICAgICAgICBjb25zdCBtb21lbnRzID0gdGhpcy5fbGFiZWxJbWFnZVdyYXBwZXIubW9tZW50cyhyYXN0ZXJSZXN1bHQuY291bnQpO1xuXG4gICAgICAgICAgICAgICAgLy8gZXh0cmFjdCBlbGlnaWJsZSBwYXRjaGVzXG4gICAgICAgICAgICAgICAgY29uc3QgcGF0Y2ggPSB0aGlzLl9kZXNjcmliZVBhdGNoKG1vbWVudHMsIGogKiB0aGlzLl9udW1QYXRjaGVzLnggKyBpLCB4LCB5KTtcbiAgICAgICAgICAgICAgICBpZiAocGF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0Y2hlc0ZvdW5kLnB1c2gocGF0Y2gpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChkZWJ1ZyAmJiBkZWJ1Zy5zaG93Rm91bmRQYXRjaGVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9kcmF3UmVjdChwYXRjaC5wb3MsIHRoaXMuX3N1YkltYWdlV3JhcHBlci5zaXplLCAnIzk5ZmYwMCcsIDIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhdGNoZXNGb3VuZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGaW5kcyB0aG9zZSBjb25uZWN0ZWQgYXJlYXMgd2hpY2ggY29udGFpbiBhdCBsZWFzdCA2IHBhdGNoZXNcbiAgICAgKiBhbmQgcmV0dXJucyB0aGVtIG9yZGVyZWQgREVTQyBieSB0aGUgbnVtYmVyIG9mIGNvbnRhaW5lZCBwYXRjaGVzXG4gICAgICogQHBhcmFtIG1heExhYmVsXG4gICAgICovXG4gICAgcHJpdmF0ZSBfZmluZEJpZ2dlc3RDb25uZWN0ZWRBcmVhcyhtYXhMYWJlbDogbnVtYmVyKTogQXJyYXk8bnVtYmVyPiB7XG4gICAgICAgIGxldCBsYWJlbEhpc3QgPSBuZXcgQXJyYXk8bnVtYmVyPihtYXhMYWJlbCkuZmlsbCgwKTtcblxuICAgICAgICB0aGlzLl9wYXRjaExhYmVsR3JpZC5kYXRhLmZvckVhY2goKGRhdGE6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgaWYgKGRhdGEgPiAwKSB7XG4gICAgICAgICAgICAgICAgbGFiZWxIaXN0W2RhdGEgLSAxXSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBleHRyYWN0IHRvcCBhcmVhcyB3aXRoIGF0IGxlYXN0IDYgcGF0Y2hlcyBwcmVzZW50XG4gICAgICAgIGNvbnN0IHRvcExhYmVscyA9IGxhYmVsSGlzdC5tYXAoKHZhbHVlLCBpbmRleCkgPT4gKHsgdmFsdWUsIGluZGV4IH0pKVxuICAgICAgICAgICAgLmZpbHRlcigoeyB2YWx1ZSB9KSA9PiB2YWx1ZSA+PSA1KS5zb3J0KChhLCBiKSA9PiBiLnZhbHVlIC0gYS52YWx1ZSkubWFwKCh7IGluZGV4IH0pID0+IGluZGV4ICsgMSk7XG5cbiAgICAgICAgcmV0dXJuIHRvcExhYmVscztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIHByaXZhdGUgX2ZpbmRCb3hlcyh0b3BMYWJlbHM6IEFycmF5PG51bWJlcj4sIG1heExhYmVsOiBudW1iZXIpOiBBcnJheTxCb3g+IHtcbiAgICAgICAgY29uc3QgYm94ZXMgPSBuZXcgQXJyYXk8Qm94PigpO1xuICAgICAgICBjb25zdCBzaG93UmVtYWluaW5nUGF0Y2hMYWJlbHMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgICAgICAgICB0aGlzLl9jb25maWcuZGVidWcgJiYgdGhpcy5fY29uZmlnLmRlYnVnLnNob3dSZW1haW5pbmdQYXRjaExhYmVscztcblxuICAgICAgICB0b3BMYWJlbHMuZm9yRWFjaChsYWJlbCA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXRjaGVzID0gbmV3IEFycmF5PFBhdGNoPigpO1xuXG4gICAgICAgICAgICB0aGlzLl9wYXRjaExhYmVsR3JpZC5kYXRhLmZvckVhY2goKGRhdGE6IG51bWJlciwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhID09PSBsYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBwYXRjaGVzLnB1c2godGhpcy5faW1hZ2VUb1BhdGNoR3JpZFtpbmRleF0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25zdCBib3ggPSB0aGlzLl9ib3hGcm9tUGF0Y2hlcyhwYXRjaGVzKTtcblxuICAgICAgICAgICAgaWYgKGJveCkge1xuICAgICAgICAgICAgICAgIGJveGVzLnB1c2goYm94KTtcblxuICAgICAgICAgICAgICAgIGlmIChzaG93UmVtYWluaW5nUGF0Y2hMYWJlbHMpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZHJhdyBwYXRjaC1sYWJlbHMgaWYgcmVxdWVzdGVkXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGhzdjogSFNWID0gWyhsYWJlbCAvIChtYXhMYWJlbCArIDEpKSAqIDM2MCwgMSwgMV07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJnYjogUkdCID0gWzAsIDAsIDBdO1xuICAgICAgICAgICAgICAgICAgICBoc3YycmdiKGhzdiwgcmdiKTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb2xvciA9IGByZ2IoJHtyZ2Iuam9pbignLCcpfSlgO1xuXG4gICAgICAgICAgICAgICAgICAgIHBhdGNoZXMuZm9yRWFjaCgoeyBwb3MgfSkgPT4gdGhpcy5fZHJhd1JlY3QocG9zLCB0aGlzLl9zdWJJbWFnZVdyYXBwZXIuc2l6ZSwgY29sb3IsIDIpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBib3hlcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGaW5kIHNpbWlsYXIgbW9tZW50cyAodmlhIGNsdXN0ZXIpXG4gICAgICogQHBhcmFtIG1vbWVudHNcbiAgICAgKi9cbiAgICBwcml2YXRlIF9zaW1pbGFyTW9tZW50cyhtb21lbnRzOiBBcnJheTxNb21lbnQ+KTogQXJyYXk8TW9tZW50PiB7XG4gICAgICAgIGNvbnN0IGNsdXN0ZXJzID0gQ2x1c3Rlci5jbHVzdGVyaXplKG1vbWVudHMsIE1vbWVudFNpbWlsYXJpdHlUaHJlc2hvbGQpO1xuICAgICAgICBjb25zdCB0b3BDbHVzdGVyID0gY2x1c3RlcnMucmVkdWNlKCh0b3AsIGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvdW50ID0gaXRlbS5tb21lbnRzLmxlbmd0aDtcbiAgICAgICAgICAgIHJldHVybiBjb3VudCA+IHRvcC5jb3VudCA/IHsgaXRlbSwgY291bnQgfSA6IHRvcDtcbiAgICAgICAgfSwgeyBpdGVtOiB7IG1vbWVudHM6IFtdIH0sIGNvdW50OiAwIH0pO1xuICAgICAgICBjb25zdCByZXN1bHQgPSB0b3BDbHVzdGVyLml0ZW0ubW9tZW50cztcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHByaXZhdGUgX3NrZWxldG9uaXplKHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2JpbmFyeUltYWdlV3JhcHBlci5zdWJJbWFnZUFzQ29weSh0aGlzLl9zdWJJbWFnZVdyYXBwZXIsIHgsIHkpO1xuICAgICAgICB0aGlzLl9za2VsZXRvbml6ZXIuc2tlbGV0b25pemUoKTtcblxuICAgICAgICAvLyBTaG93IHNrZWxldG9uIGlmIHJlcXVlc3RlZFxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLl9jb25maWcuZGVidWcgJiYgdGhpcy5fY29uZmlnLmRlYnVnLnNob3dTa2VsZXRvbikge1xuICAgICAgICAgICAgdGhpcy5fc2tlbEltYWdlV3JhcHBlci5vdmVybGF5KHRoaXMuX2JpbmFyeUNvbnRleHQsIDM2MCwgeCwgeSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFeHRyYWN0cyBhbmQgZGVzY3JpYmVzIHRob3NlIHBhdGNoZXMgd2hpY2ggc2VlbSB0byBjb250YWluIGEgYmFyY29kZSBwYXR0ZXJuXG4gICAgICogQHBhcmFtIG1vbWVudHNcbiAgICAgKiBAcGFyYW0gaW5kZXhcbiAgICAgKiBAcGFyYW0geFxuICAgICAqIEBwYXJhbSB5XG4gICAgICogQHJldHVybnMgbGlzdCBvZiBwYXRjaGVzXG4gICAgICovXG4gICAgcHJpdmF0ZSBfZGVzY3JpYmVQYXRjaChtb21lbnRzOiBBcnJheTxNb21lbnQ+LCBpbmRleDogbnVtYmVyLCB4OiBudW1iZXIsIHk6IG51bWJlcik6IFBhdGNoIHtcbiAgICAgICAgaWYgKG1vbWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgY29uc3QgbWluQ29tcG9uZW50V2VpZ2h0ID0gTWF0aC5jZWlsKHRoaXMuX3BhdGNoU2l6ZS54IC8gMyk7XG4gICAgICAgICAgICAvLyBvbmx5IGNvbGxlY3QgbW9tZW50cyB3aGljaCBhcmVhIGNvdmVycyBhdCBsZWFzdCBtaW5Db21wb25lbnRXZWlnaHQgcGl4ZWxzXG4gICAgICAgICAgICBjb25zdCBlbGlnaWJsZU1vbWVudHMgPSBtb21lbnRzLmZpbHRlcihtb21lbnQgPT4gbW9tZW50Lm0wMCA+IG1pbkNvbXBvbmVudFdlaWdodCk7XG5cbiAgICAgICAgICAgIC8vIGlmIGF0IGxlYXN0IDIgbW9tZW50cyBhcmUgZm91bmQgd2hpY2ggaGF2ZSBhdCBsZWFzdCBtaW5Db21wb25lbnRXZWlnaHRzIGNvdmVyZWRcbiAgICAgICAgICAgIGlmIChlbGlnaWJsZU1vbWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1hdGNoaW5nTW9tZW50cyA9IHRoaXMuX3NpbWlsYXJNb21lbnRzKGVsaWdpYmxlTW9tZW50cyk7XG4gICAgICAgICAgICAgICAgY29uc3QgbGVuZ3RoID0gbWF0Y2hpbmdNb21lbnRzLmxlbmd0aCB8IDA7XG5cbiAgICAgICAgICAgICAgICAvLyBPbmx5IHR3byBvZiB0aGUgbW9tZW50cyBhcmUgYWxsb3dlZCBub3QgdG8gZml0IGludG8gdGhlIGVxdWF0aW9uXG4gICAgICAgICAgICAgICAgaWYgKGxlbmd0aCA+IDEgJiYgKGxlbmd0aCA8PCAyKSA+PSBlbGlnaWJsZU1vbWVudHMubGVuZ3RoICogMyAmJiAobGVuZ3RoIDw8IDIpID4gbW9tZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZGV0ZXJtaW5lIHRoZSBzaW1pbGFyaXR5IG9mIHRoZSBtb21lbnRzXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJhZCA9IG1hdGNoaW5nTW9tZW50cy5yZWR1Y2UoKHN1bTogbnVtYmVyLCBtb21lbnQ6IE1vbWVudCkgPT4gc3VtICsgbW9tZW50LnJhZCwgMCkgLyBsZW5ndGg7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zOiB7IHgsIHkgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveDogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgeCwgeSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgeDogeCArIHRoaXMuX3N1YkltYWdlV3JhcHBlci5zaXplLngsIHkgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHg6IHggKyB0aGlzLl9zdWJJbWFnZVdyYXBwZXIuc2l6ZS54LCB5OiB5ICsgdGhpcy5fc3ViSW1hZ2VXcmFwcGVyLnNpemUueSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgeCwgeTogeSArIHRoaXMuX3N1YkltYWdlV3JhcHBlci5zaXplLnkgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vbWVudHM6IG1hdGNoaW5nTW9tZW50cyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IE1hdGguY29zKHJhZCksXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBNYXRoLnNpbihyYWQpXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfbm90WWV0UHJvY2Vzc2VkKCk6IG51bWJlciB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fcGF0Y2hMYWJlbEdyaWQuZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3BhdGNoTGFiZWxHcmlkLmRhdGFbaV0gPT09IDAgJiYgdGhpcy5fcGF0Y2hHcmlkLmRhdGFbaV0gPT09IDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fcGF0Y2hMYWJlbEdyaWQuZGF0YS5sZW5ndGg7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfdHJhY2UoY3VycmVudEluZGV4OiBudW1iZXIsIGxhYmVsOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgdGhyZXNob2xkID0gMC45NTtcbiAgICAgICAgY29uc3QgY3VycmVudDogUG9pbnQgPSB7XG4gICAgICAgICAgICB4OiBjdXJyZW50SW5kZXggJSB0aGlzLl9wYXRjaExhYmVsR3JpZC5zaXplLngsXG4gICAgICAgICAgICB5OiAoY3VycmVudEluZGV4IC8gdGhpcy5fcGF0Y2hMYWJlbEdyaWQuc2l6ZS54KSB8IDBcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoY3VycmVudEluZGV4IDwgdGhpcy5fcGF0Y2hMYWJlbEdyaWQuZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRQYXRjaCA9IHRoaXMuX2ltYWdlVG9QYXRjaEdyaWRbY3VycmVudEluZGV4XTtcbiAgICAgICAgICAgIC8vIGFzc2lnbiBsYWJlbFxuICAgICAgICAgICAgdGhpcy5fcGF0Y2hMYWJlbEdyaWQuZGF0YVtjdXJyZW50SW5kZXhdID0gbGFiZWw7XG5cbiAgICAgICAgICAgIFNlYXJjaERpcmVjdGlvbnMuZm9yRWFjaChkaXJlY3Rpb24gPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHkgPSBjdXJyZW50LnkgKyBkaXJlY3Rpb25bMF07XG4gICAgICAgICAgICAgICAgY29uc3QgeCA9IGN1cnJlbnQueCArIGRpcmVjdGlvblsxXTtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IHkgKiB0aGlzLl9wYXRjaExhYmVsR3JpZC5zaXplLnggKyB4O1xuXG4gICAgICAgICAgICAgICAgLy8gY29udGludWUgaWYgcGF0Y2ggZW1wdHlcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fcGF0Y2hHcmlkLmRhdGFbaW5kZXhdID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BhdGNoTGFiZWxHcmlkLmRhdGFbaW5kZXhdID0gTnVtYmVyLk1BWF9WQUxVRTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3BhdGNoTGFiZWxHcmlkLmRhdGFbaW5kZXhdID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhdGNoID0gdGhpcy5faW1hZ2VUb1BhdGNoR3JpZFtpbmRleF07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNpbWlsYXJpdHkgPSBNYXRoLmFicyhwYXRjaC54ICogY3VycmVudFBhdGNoLnggKyBwYXRjaC55ICogY3VycmVudFBhdGNoLnkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2ltaWxhcml0eSA+IHRocmVzaG9sZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdHJhY2UoaW5kZXgsIGxhYmVsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmluZHMgcGF0Y2hlcyB3aGljaCBhcmUgY29ubmVjdGVkIGFuZCBzaGFyZSB0aGUgc2FtZSBvcmllbnRhdGlvblxuICAgICAqIEBwYXJhbSBwYXRjaGVzRm91bmRcbiAgICAgKi9cbiAgICBwcml2YXRlIF9yYXN0ZXJpemVBbmd1bGFyU2ltaWxhcml0eShwYXRjaGVzRm91bmQ6IEFycmF5PFBhdGNoPik6IG51bWJlciB7XG4gICAgICAgIGxldCBsYWJlbCA9IDA7XG4gICAgICAgIGNvbnN0IGhzdjogSFNWID0gWzAsIDEsIDFdO1xuICAgICAgICBjb25zdCByZ2I6IFJHQiA9IFswLCAwLCAwXTtcblxuICAgICAgICAvLyBwcmVwYXJlIGZvciBmaW5kaW5nIHRoZSByaWdodCBwYXRjaGVzXG4gICAgICAgIHRoaXMuX3BhdGNoR3JpZC5kYXRhLmZpbGwoMCk7XG4gICAgICAgIHRoaXMuX3BhdGNoTGFiZWxHcmlkLmRhdGEuZmlsbCgwKTtcbiAgICAgICAgdGhpcy5faW1hZ2VUb1BhdGNoR3JpZC5maWxsKG51bGwpO1xuXG4gICAgICAgIHBhdGNoZXNGb3VuZC5mb3JFYWNoKHBhdGNoID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2ltYWdlVG9QYXRjaEdyaWRbcGF0Y2guaW5kZXhdID0gcGF0Y2g7XG4gICAgICAgICAgICB0aGlzLl9wYXRjaEdyaWQuZGF0YVtwYXRjaC5pbmRleF0gPSAxO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyByYXN0ZXJpemUgdGhlIHBhdGNoZXMgZm91bmQgdG8gZGV0ZXJtaW5lIGFyZWFcbiAgICAgICAgdGhpcy5fcGF0Y2hHcmlkLnplcm9Cb3JkZXIoKTtcblxuICAgICAgICBsZXQgY3VycmVudEluZGV4ID0gMDtcbiAgICAgICAgd2hpbGUgKChjdXJyZW50SW5kZXggPSB0aGlzLl9ub3RZZXRQcm9jZXNzZWQoKSkgPCB0aGlzLl9wYXRjaExhYmVsR3JpZC5kYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgbGFiZWwrKztcbiAgICAgICAgICAgIHRoaXMuX3RyYWNlKGN1cnJlbnRJbmRleCwgbGFiZWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZHJhdyBwYXRjaC1sYWJlbHMgaWYgcmVxdWVzdGVkXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuX2NvbmZpZy5kZWJ1ZyAmJiB0aGlzLl9jb25maWcuZGVidWcuc2hvd1BhdGNoTGFiZWxzKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuX3BhdGNoTGFiZWxHcmlkLmRhdGEubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fcGF0Y2hMYWJlbEdyaWQuZGF0YVtqXSA+IDAgJiYgdGhpcy5fcGF0Y2hMYWJlbEdyaWQuZGF0YVtqXSA8PSBsYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXRjaCA9IHRoaXMuX2ltYWdlVG9QYXRjaEdyaWRbal07XG4gICAgICAgICAgICAgICAgICAgIGhzdlswXSA9ICh0aGlzLl9wYXRjaExhYmVsR3JpZC5kYXRhW2pdIC8gKGxhYmVsICsgMSkpICogMzYwO1xuICAgICAgICAgICAgICAgICAgICBoc3YycmdiKGhzdiwgcmdiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZHJhd1JlY3QocGF0Y2gucG9zLCB0aGlzLl9zdWJJbWFnZVdyYXBwZXIuc2l6ZSwgYHJnYigke3JnYi5qb2luKCcsJyl9KWAsIDIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBsYWJlbDtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9kcmF3UmVjdCh7IHgsIHkgfTogUG9pbnQsIHNpemU6IFBvaW50LCBjb2xvcjogc3RyaW5nLCBsaW5lV2lkdGg6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLl9iaW5hcnlDb250ZXh0LnN0cm9rZVN0eWxlID0gY29sb3I7XG4gICAgICAgIHRoaXMuX2JpbmFyeUNvbnRleHQuZmlsbFN0eWxlID0gY29sb3I7XG4gICAgICAgIHRoaXMuX2JpbmFyeUNvbnRleHQubGluZVdpZHRoID0gbGluZVdpZHRoIHx8IDE7XG4gICAgICAgIHRoaXMuX2JpbmFyeUNvbnRleHQuc3Ryb2tlUmVjdCh4LCB5LCBzaXplLngsIHNpemUueSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZHJhd1BhdGgocGF0aDogQXJyYXk8UG9pbnQ+LCBjb2xvcjogc3RyaW5nLCBsaW5lV2lkdGg6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBJbWFnZURlYnVnLmRyYXdQYXRoKHBhdGgsIHRoaXMuX2JpbmFyeUNvbnRleHQsIGNvbG9yLCBsaW5lV2lkdGgpO1xuICAgIH1cbn1cbiIsIi8qKlxuICogQGJvcnJvd3MgaHR0cDovL3d3dy5jb2RlcHJvamVjdC5jb20vVGlwcy80MDcxNzIvQ29ubmVjdGVkLUNvbXBvbmVudC1MYWJlbGluZy1hbmQtVmVjdG9yaXphdGlvblxuICovXG5cbmltcG9ydCB7IEltYWdlV3JhcHBlciB9IGZyb20gJy4uL2NvbW1vbi9pbWFnZS13cmFwcGVyJztcbmltcG9ydCB7IENvbnRvdXJWZXJ0ZXgsIFRyYWNlciB9IGZyb20gJy4vdHJhY2VyJztcblxuZW51bSBFZGdlTGFiZWwge1xuICAgIE91dHNpZGUgPSAtMzI3NjcsXG4gICAgSW5zaWRlID0gLTMyNzY2XG59O1xuXG5lbnVtIENvbnRvdXJEaXJlY3Rpb24ge1xuICAgIENXID0gMCxcbiAgICBDQ1cgPSAxLFxuICAgIFVua25vd24gPSAyXG59O1xuXG5pbnRlcmZhY2UgQ29udG91ciB7XG4gICAgZGlyOiBDb250b3VyRGlyZWN0aW9uO1xuICAgIGluZGV4OiBudW1iZXI7XG4gICAgZmlyc3RWZXJ0ZXg6IENvbnRvdXJWZXJ0ZXg7XG4gICAgcHJldmlvdXNQZWVyPzogQ29udG91cjtcbiAgICBuZXh0UGVlcj86IENvbnRvdXI7XG4gICAgaW5zaWRlQ29udG91cnM6IENvbnRvdXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmFzdGVyUmVzdWx0IHtcbiAgICBjYzogQ29udG91cjtcbiAgICBjb3VudDogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgUmFzdGVyaXplciB7XG4gICAgcHJpdmF0ZSBfd2lkdGg6IG51bWJlcjtcbiAgICBwcml2YXRlIF9oZWlnaHQ6IG51bWJlcjtcbiAgICBwcml2YXRlIF90cmFjZXI6IFRyYWNlcjtcbiAgICBwcml2YXRlIF9pbWFnZURhdGE6IFVpbnQ4QXJyYXk7XG4gICAgcHJpdmF0ZSBfbGFiZWxEYXRhOiBBcnJheTxudW1iZXI+O1xuXG4gICAgY29uc3RydWN0b3IoaW1hZ2VXcmFwcGVyOiBJbWFnZVdyYXBwZXI8VWludDhBcnJheT4sIGxhYmVsV3JhcHBlcjogSW1hZ2VXcmFwcGVyPEFycmF5PG51bWJlcj4+KSB7XG4gICAgICAgIHRoaXMuX2ltYWdlRGF0YSA9IGltYWdlV3JhcHBlci5kYXRhO1xuICAgICAgICB0aGlzLl9sYWJlbERhdGEgPSBsYWJlbFdyYXBwZXIuZGF0YSBhcyBBcnJheTxudW1iZXI+O1xuICAgICAgICB0aGlzLl93aWR0aCA9IGltYWdlV3JhcHBlci5zaXplLng7XG4gICAgICAgIHRoaXMuX2hlaWdodCA9IGltYWdlV3JhcHBlci5zaXplLnk7XG4gICAgICAgIHRoaXMuX3RyYWNlciA9IG5ldyBUcmFjZXIoaW1hZ2VXcmFwcGVyLCBsYWJlbFdyYXBwZXIpO1xuICAgIH1cblxuICAgIHJhc3Rlcml6ZShkZXB0aExhYmVsOiBudW1iZXIpOiBSYXN0ZXJSZXN1bHQge1xuICAgICAgICBjb25zdCBjb2xvck1hcCA9IG5ldyBBcnJheTxudW1iZXI+KCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0MDA7IGkrKykge1xuICAgICAgICAgICAgY29sb3JNYXBbaV0gPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgY29sb3JNYXBbMF0gPSB0aGlzLl9pbWFnZURhdGFbMF07XG5cbiAgICAgICAgbGV0IGNjOiBDb250b3VyID0gbnVsbDtcbiAgICAgICAgbGV0IHNjOiBDb250b3VyO1xuICAgICAgICBsZXQgY29ubmVjdGVkQ291bnQgPSAwO1xuXG4gICAgICAgIGZvciAobGV0IGN5ID0gMTsgY3kgPCB0aGlzLl9oZWlnaHQgLSAxOyBjeSsrKSB7XG4gICAgICAgICAgICBsZXQgbGFiZWxJbmRleCA9IDA7XG4gICAgICAgICAgICBsZXQgYmMgPSBjb2xvck1hcFswXTtcblxuICAgICAgICAgICAgZm9yIChsZXQgY3ggPSAxOyBjeCA8IHRoaXMuX3dpZHRoIC0gMTsgY3grKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBvcyA9IGN5ICogdGhpcy5fd2lkdGggKyBjeDtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9sYWJlbERhdGFbcG9zXSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb2xvciA9IHRoaXMuX2ltYWdlRGF0YVtwb3NdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29sb3IgIT09IGJjKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFiZWxJbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxjID0gY29ubmVjdGVkQ291bnQgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yTWFwW2xjXSA9IGNvbG9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJjID0gY29sb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmVydGV4ID0gdGhpcy5fdHJhY2VyLmNvbnRvdXJUcmFjaW5nKGN5LCBjeCwgbGMsIGNvbG9yLCBFZGdlTGFiZWwuT3V0c2lkZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZlcnRleCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25uZWN0ZWRDb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbEluZGV4ID0gbGM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHA6IENvbnRvdXIgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXI6IENvbnRvdXJEaXJlY3Rpb24uQ1csXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleDogbGFiZWxJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0VmVydGV4OiB2ZXJ0ZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0UGVlcjogY2MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNpZGVDb250b3VyczogbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2MgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnByZXZpb3VzUGVlciA9IHA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MgPSBwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmVydGV4ID0gdGhpcy5fdHJhY2VyLmNvbnRvdXJUcmFjaW5nKGN5LCBjeCwgRWRnZUxhYmVsLkluc2lkZSwgY29sb3IsIGxhYmVsSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2ZXJ0ZXggIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcDogQ29udG91ciA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcjogZGVwdGhMYWJlbCA9PT0gMCA/IENvbnRvdXJEaXJlY3Rpb24uQ0NXIDogQ29udG91ckRpcmVjdGlvbi5DVyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0VmVydGV4OiB2ZXJ0ZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleDogZGVwdGhMYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc2lkZUNvbnRvdXJzOiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjID0gY2M7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlICgoc2MgIT09IG51bGwpICYmIHNjLmluZGV4ICE9PSBsYWJlbEluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYyA9IHNjLm5leHRQZWVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzYyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcC5uZXh0UGVlciA9IHNjLmluc2lkZUNvbnRvdXJzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNjLmluc2lkZUNvbnRvdXJzICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2MuaW5zaWRlQ29udG91cnMucHJldmlvdXNQZWVyID0gcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjLmluc2lkZUNvbnRvdXJzID0gcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2xhYmVsRGF0YVtwb3NdID0gbGFiZWxJbmRleDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5fbGFiZWxEYXRhW3Bvc10gPT09IEVkZ2VMYWJlbC5JbnNpZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxJbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGJjID0gdGhpcy5faW1hZ2VEYXRhW3Bvc107XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9sYWJlbERhdGFbcG9zXSA9PT0gRWRnZUxhYmVsLk91dHNpZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxJbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGJjID0gY29sb3JNYXBbMF07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxJbmRleCA9IHRoaXMuX2xhYmVsRGF0YVtwb3NdO1xuICAgICAgICAgICAgICAgICAgICBiYyA9IGNvbG9yTWFwW2xhYmVsSW5kZXhdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHNjID0gY2M7XG4gICAgICAgIHdoaWxlIChzYyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgc2MuaW5kZXggPSBkZXB0aExhYmVsO1xuICAgICAgICAgICAgc2MgPSBzYy5uZXh0UGVlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjYyxcbiAgICAgICAgICAgIGNvdW50OiBjb25uZWN0ZWRDb3VudFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGRyYXdDb250b3VyKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIGZpcnN0Q29udG91cjogQ29udG91cik6IHZvaWQge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbiAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9ICdyZWQnO1xuICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICdyZWQnO1xuICAgICAgICBjb250ZXh0LmxpbmVXaWR0aCA9IDE7XG5cbiAgICAgICAgbGV0IHBxID0gZmlyc3RDb250b3VyO1xuICAgICAgICBsZXQgaXEgPSBwcSAmJiBwcS5pbnNpZGVDb250b3VycztcblxuICAgICAgICB3aGlsZSAocHEgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGxldCBxID0gaXEgfHwgcHE7XG5cbiAgICAgICAgICAgIGlmIChpcSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlxID0gaXEubmV4dFBlZXI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBxID0gcHEubmV4dFBlZXI7XG4gICAgICAgICAgICAgICAgaXEgPSBwcSAmJiBwcS5pbnNpZGVDb250b3VycztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3dpdGNoIChxLmRpcikge1xuICAgICAgICAgICAgICAgIGNhc2UgQ29udG91ckRpcmVjdGlvbi5DVzoge1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gJ3JlZCc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIENvbnRvdXJEaXJlY3Rpb24uQ0NXOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSAnYmx1ZSc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIENvbnRvdXJEaXJlY3Rpb24uVW5rbm93bjoge1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gJ2dyZWVuJztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgcCA9IHEuZmlyc3RWZXJ0ZXg7XG4gICAgICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY29udGV4dC5tb3ZlVG8ocC54LCBwLnkpO1xuXG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgcCA9IHAubmV4dDtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmxpbmVUbyhwLngsIHAueSk7XG4gICAgICAgICAgICB9IHdoaWxlIChwICE9PSBxLmZpcnN0VmVydGV4KTtcblxuICAgICAgICAgICAgY29udGV4dC5zdHJva2UoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIGVxZXFlcSAqL1xuZnVuY3Rpb24gU2tlbGV0b25pemVyKHN0ZGxpYiwgZm9yZWlnbiwgYnVmZmVyKSB7XG4gICAgXCJ1c2UgYXNtXCI7XG5cbiAgICB2YXIgaW1hZ2VzID0gbmV3IHN0ZGxpYi5VaW50OEFycmF5KGJ1ZmZlciksXG4gICAgICAgIHNpemUgPSBmb3JlaWduLnNpemUgfCAwLFxuICAgICAgICBpbXVsID0gc3RkbGliLk1hdGguaW11bDtcblxuICAgIGZ1bmN0aW9uIGVyb2RlKGluSW1hZ2VQdHIsIG91dEltYWdlUHRyKSB7XG4gICAgICAgIGluSW1hZ2VQdHIgPSBpbkltYWdlUHRyIHwgMDtcbiAgICAgICAgb3V0SW1hZ2VQdHIgPSBvdXRJbWFnZVB0ciB8IDA7XG5cbiAgICAgICAgdmFyIHYgPSAwLFxuICAgICAgICAgICAgdSA9IDAsXG4gICAgICAgICAgICBzdW0gPSAwLFxuICAgICAgICAgICAgeVN0YXJ0MSA9IDAsXG4gICAgICAgICAgICB5U3RhcnQyID0gMCxcbiAgICAgICAgICAgIHhTdGFydDEgPSAwLFxuICAgICAgICAgICAgeFN0YXJ0MiA9IDAsXG4gICAgICAgICAgICBvZmZzZXQgPSAwO1xuXG4gICAgICAgIGZvciAodiA9IDE7ICh2IHwgMCkgPCAoKHNpemUgLSAxKSB8IDApOyB2ID0gKHYgKyAxKSB8IDApIHtcbiAgICAgICAgICAgIG9mZnNldCA9IChvZmZzZXQgKyBzaXplKSB8IDA7XG4gICAgICAgICAgICBmb3IgKHUgPSAxOyAodSB8IDApIDwgKChzaXplIC0gMSkgfCAwKTsgdSA9ICh1ICsgMSkgfCAwKSB7XG4gICAgICAgICAgICAgICAgeVN0YXJ0MSA9IChvZmZzZXQgLSBzaXplKSB8IDA7XG4gICAgICAgICAgICAgICAgeVN0YXJ0MiA9IChvZmZzZXQgKyBzaXplKSB8IDA7XG4gICAgICAgICAgICAgICAgeFN0YXJ0MSA9ICh1IC0gMSkgfCAwO1xuICAgICAgICAgICAgICAgIHhTdGFydDIgPSAodSArIDEpIHwgMDtcbiAgICAgICAgICAgICAgICBzdW0gPSAoKGltYWdlc1soaW5JbWFnZVB0ciArIHlTdGFydDEgKyB4U3RhcnQxKSB8IDBdIHwgMClcbiAgICAgICAgICAgICAgICAgICAgKyAoaW1hZ2VzWyhpbkltYWdlUHRyICsgeVN0YXJ0MSArIHhTdGFydDIpIHwgMF0gfCAwKVxuICAgICAgICAgICAgICAgICAgICArIChpbWFnZXNbKGluSW1hZ2VQdHIgKyBvZmZzZXQgKyB1KSB8IDBdIHwgMClcbiAgICAgICAgICAgICAgICAgICAgKyAoaW1hZ2VzWyhpbkltYWdlUHRyICsgeVN0YXJ0MiArIHhTdGFydDEpIHwgMF0gfCAwKVxuICAgICAgICAgICAgICAgICAgICArIChpbWFnZXNbKGluSW1hZ2VQdHIgKyB5U3RhcnQyICsgeFN0YXJ0MikgfCAwXSB8IDApKSB8IDA7XG4gICAgICAgICAgICAgICAgaWYgKChzdW0gfCAwKSA9PSAoNSB8IDApKSB7XG4gICAgICAgICAgICAgICAgICAgIGltYWdlc1sob3V0SW1hZ2VQdHIgKyBvZmZzZXQgKyB1KSB8IDBdID0gMTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpbWFnZXNbKG91dEltYWdlUHRyICsgb2Zmc2V0ICsgdSkgfCAwXSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdWJ0cmFjdChhSW1hZ2VQdHIsIGJJbWFnZVB0ciwgb3V0SW1hZ2VQdHIpIHtcbiAgICAgICAgYUltYWdlUHRyID0gYUltYWdlUHRyIHwgMDtcbiAgICAgICAgYkltYWdlUHRyID0gYkltYWdlUHRyIHwgMDtcbiAgICAgICAgb3V0SW1hZ2VQdHIgPSBvdXRJbWFnZVB0ciB8IDA7XG5cbiAgICAgICAgdmFyIGxlbmd0aCA9IDA7XG5cbiAgICAgICAgbGVuZ3RoID0gaW11bChzaXplLCBzaXplKSB8IDA7XG5cbiAgICAgICAgd2hpbGUgKChsZW5ndGggfCAwKSA+IDApIHtcbiAgICAgICAgICAgIGxlbmd0aCA9IChsZW5ndGggLSAxKSB8IDA7XG4gICAgICAgICAgICBpbWFnZXNbKG91dEltYWdlUHRyICsgbGVuZ3RoKSB8IDBdID1cbiAgICAgICAgICAgICAgICAoKGltYWdlc1soYUltYWdlUHRyICsgbGVuZ3RoKSB8IDBdIHwgMCkgLSAoaW1hZ2VzWyhiSW1hZ2VQdHIgKyBsZW5ndGgpIHwgMF0gfCAwKSkgfCAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYml0d2lzZU9yKGFJbWFnZVB0ciwgYkltYWdlUHRyLCBvdXRJbWFnZVB0cikge1xuICAgICAgICBhSW1hZ2VQdHIgPSBhSW1hZ2VQdHIgfCAwO1xuICAgICAgICBiSW1hZ2VQdHIgPSBiSW1hZ2VQdHIgfCAwO1xuICAgICAgICBvdXRJbWFnZVB0ciA9IG91dEltYWdlUHRyIHwgMDtcblxuICAgICAgICB2YXIgbGVuZ3RoID0gMDtcblxuICAgICAgICBsZW5ndGggPSBpbXVsKHNpemUsIHNpemUpIHwgMDtcblxuICAgICAgICB3aGlsZSAoKGxlbmd0aCB8IDApID4gMCkge1xuICAgICAgICAgICAgbGVuZ3RoID0gKGxlbmd0aCAtIDEpIHwgMDtcbiAgICAgICAgICAgIGltYWdlc1sob3V0SW1hZ2VQdHIgKyBsZW5ndGgpIHwgMF0gPVxuICAgICAgICAgICAgICAgICgoaW1hZ2VzWyhhSW1hZ2VQdHIgKyBsZW5ndGgpIHwgMF0gfCAwKSB8IChpbWFnZXNbKGJJbWFnZVB0ciArIGxlbmd0aCkgfCAwXSB8IDApKSB8IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb3VudE5vblplcm8oaW1hZ2VQdHIpIHtcbiAgICAgICAgaW1hZ2VQdHIgPSBpbWFnZVB0ciB8IDA7XG5cbiAgICAgICAgdmFyIHN1bSA9IDAsXG4gICAgICAgICAgICBsZW5ndGggPSAwO1xuXG4gICAgICAgIGxlbmd0aCA9IGltdWwoc2l6ZSwgc2l6ZSkgfCAwO1xuXG4gICAgICAgIHdoaWxlICgobGVuZ3RoIHwgMCkgPiAwKSB7XG4gICAgICAgICAgICBsZW5ndGggPSAobGVuZ3RoIC0gMSkgfCAwO1xuICAgICAgICAgICAgc3VtID0gKChzdW0gfCAwKSArIChpbWFnZXNbKGltYWdlUHRyICsgbGVuZ3RoKSB8IDBdIHwgMCkpIHwgMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoc3VtIHwgMCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5pdChpbWFnZVB0ciwgdmFsdWUpIHtcbiAgICAgICAgaW1hZ2VQdHIgPSBpbWFnZVB0ciB8IDA7XG4gICAgICAgIHZhbHVlID0gdmFsdWUgfCAwO1xuXG4gICAgICAgIHZhciBsZW5ndGggPSAwO1xuXG4gICAgICAgIGxlbmd0aCA9IGltdWwoc2l6ZSwgc2l6ZSkgfCAwO1xuXG4gICAgICAgIHdoaWxlICgobGVuZ3RoIHwgMCkgPiAwKSB7XG4gICAgICAgICAgICBsZW5ndGggPSAobGVuZ3RoIC0gMSkgfCAwO1xuICAgICAgICAgICAgaW1hZ2VzWyhpbWFnZVB0ciArIGxlbmd0aCkgfCAwXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlsYXRlKGluSW1hZ2VQdHIsIG91dEltYWdlUHRyKSB7XG4gICAgICAgIGluSW1hZ2VQdHIgPSBpbkltYWdlUHRyIHwgMDtcbiAgICAgICAgb3V0SW1hZ2VQdHIgPSBvdXRJbWFnZVB0ciB8IDA7XG5cbiAgICAgICAgdmFyIHYgPSAwLFxuICAgICAgICAgICAgdSA9IDAsXG4gICAgICAgICAgICBzdW0gPSAwLFxuICAgICAgICAgICAgeVN0YXJ0MSA9IDAsXG4gICAgICAgICAgICB5U3RhcnQyID0gMCxcbiAgICAgICAgICAgIHhTdGFydDEgPSAwLFxuICAgICAgICAgICAgeFN0YXJ0MiA9IDAsXG4gICAgICAgICAgICBvZmZzZXQgPSAwO1xuXG4gICAgICAgIGZvciAodiA9IDE7ICh2IHwgMCkgPCAoKHNpemUgLSAxKSB8IDApOyB2ID0gKHYgKyAxKSB8IDApIHtcbiAgICAgICAgICAgIG9mZnNldCA9IChvZmZzZXQgKyBzaXplKSB8IDA7XG4gICAgICAgICAgICBmb3IgKHUgPSAxOyAodSB8IDApIDwgKChzaXplIC0gMSkgfCAwKTsgdSA9ICh1ICsgMSkgfCAwKSB7XG4gICAgICAgICAgICAgICAgeVN0YXJ0MSA9IChvZmZzZXQgLSBzaXplKSB8IDA7XG4gICAgICAgICAgICAgICAgeVN0YXJ0MiA9IChvZmZzZXQgKyBzaXplKSB8IDA7XG4gICAgICAgICAgICAgICAgeFN0YXJ0MSA9ICh1IC0gMSkgfCAwO1xuICAgICAgICAgICAgICAgIHhTdGFydDIgPSAodSArIDEpIHwgMDtcbiAgICAgICAgICAgICAgICBzdW0gPSAoKGltYWdlc1soaW5JbWFnZVB0ciArIHlTdGFydDEgKyB4U3RhcnQxKSB8IDBdIHwgMClcbiAgICAgICAgICAgICAgICAgICAgKyAoaW1hZ2VzWyhpbkltYWdlUHRyICsgeVN0YXJ0MSArIHhTdGFydDIpIHwgMF0gfCAwKVxuICAgICAgICAgICAgICAgICAgICArIChpbWFnZXNbKGluSW1hZ2VQdHIgKyBvZmZzZXQgKyB1KSB8IDBdIHwgMClcbiAgICAgICAgICAgICAgICAgICAgKyAoaW1hZ2VzWyhpbkltYWdlUHRyICsgeVN0YXJ0MiArIHhTdGFydDEpIHwgMF0gfCAwKVxuICAgICAgICAgICAgICAgICAgICArIChpbWFnZXNbKGluSW1hZ2VQdHIgKyB5U3RhcnQyICsgeFN0YXJ0MikgfCAwXSB8IDApKSB8IDA7XG4gICAgICAgICAgICAgICAgaWYgKChzdW0gfCAwKSA+ICgwIHwgMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VzWyhvdXRJbWFnZVB0ciArIG9mZnNldCArIHUpIHwgMF0gPSAxO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGltYWdlc1sob3V0SW1hZ2VQdHIgKyBvZmZzZXQgKyB1KSB8IDBdID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1lbWNweShzcmNJbWFnZVB0ciwgZHN0SW1hZ2VQdHIpIHtcbiAgICAgICAgc3JjSW1hZ2VQdHIgPSBzcmNJbWFnZVB0ciB8IDA7XG4gICAgICAgIGRzdEltYWdlUHRyID0gZHN0SW1hZ2VQdHIgfCAwO1xuXG4gICAgICAgIHZhciBsZW5ndGggPSAwO1xuXG4gICAgICAgIGxlbmd0aCA9IGltdWwoc2l6ZSwgc2l6ZSkgfCAwO1xuXG4gICAgICAgIHdoaWxlICgobGVuZ3RoIHwgMCkgPiAwKSB7XG4gICAgICAgICAgICBsZW5ndGggPSAobGVuZ3RoIC0gMSkgfCAwO1xuICAgICAgICAgICAgaW1hZ2VzWyhkc3RJbWFnZVB0ciArIGxlbmd0aCkgfCAwXSA9IChpbWFnZXNbKHNyY0ltYWdlUHRyICsgbGVuZ3RoKSB8IDBdIHwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB6ZXJvQm9yZGVyKGltYWdlUHRyKSB7XG4gICAgICAgIGltYWdlUHRyID0gaW1hZ2VQdHIgfCAwO1xuXG4gICAgICAgIHZhciB4ID0gMCxcbiAgICAgICAgICAgIHkgPSAwO1xuXG4gICAgICAgIGZvciAoeCA9IDA7ICh4IHwgMCkgPCAoKHNpemUgLSAxKSB8IDApOyB4ID0gKHggKyAxKSB8IDApIHtcbiAgICAgICAgICAgIGltYWdlc1soaW1hZ2VQdHIgKyB4KSB8IDBdID0gMDtcbiAgICAgICAgICAgIGltYWdlc1soaW1hZ2VQdHIgKyB5KSB8IDBdID0gMDtcbiAgICAgICAgICAgIHkgPSAoKHkgKyBzaXplKSAtIDEpIHwgMDtcbiAgICAgICAgICAgIGltYWdlc1soaW1hZ2VQdHIgKyB5KSB8IDBdID0gMDtcbiAgICAgICAgICAgIHkgPSAoeSArIDEpIHwgMDtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHggPSAwOyAoeCB8IDApIDwgKHNpemUgfCAwKTsgeCA9ICh4ICsgMSkgfCAwKSB7XG4gICAgICAgICAgICBpbWFnZXNbKGltYWdlUHRyICsgeSkgfCAwXSA9IDA7XG4gICAgICAgICAgICB5ID0gKHkgKyAxKSB8IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBza2VsZXRvbml6ZSgpIHtcbiAgICAgICAgdmFyIHN1YkltYWdlUHRyID0gMCxcbiAgICAgICAgICAgIGVyb2RlZEltYWdlUHRyID0gMCxcbiAgICAgICAgICAgIHRlbXBJbWFnZVB0ciA9IDAsXG4gICAgICAgICAgICBza2VsSW1hZ2VQdHIgPSAwLFxuICAgICAgICAgICAgc3VtID0gMCxcbiAgICAgICAgICAgIGRvbmUgPSAwO1xuXG4gICAgICAgIGVyb2RlZEltYWdlUHRyID0gaW11bChzaXplLCBzaXplKSB8IDA7XG4gICAgICAgIHRlbXBJbWFnZVB0ciA9IChlcm9kZWRJbWFnZVB0ciArIGVyb2RlZEltYWdlUHRyKSB8IDA7XG4gICAgICAgIHNrZWxJbWFnZVB0ciA9ICh0ZW1wSW1hZ2VQdHIgKyBlcm9kZWRJbWFnZVB0cikgfCAwO1xuXG4gICAgICAgIC8vIGluaXQgc2tlbC1pbWFnZVxuICAgICAgICBpbml0KHNrZWxJbWFnZVB0ciwgMCk7XG4gICAgICAgIHplcm9Cb3JkZXIoc3ViSW1hZ2VQdHIpO1xuXG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIGVyb2RlKHN1YkltYWdlUHRyLCBlcm9kZWRJbWFnZVB0cik7XG4gICAgICAgICAgICBkaWxhdGUoZXJvZGVkSW1hZ2VQdHIsIHRlbXBJbWFnZVB0cik7XG4gICAgICAgICAgICBzdWJ0cmFjdChzdWJJbWFnZVB0ciwgdGVtcEltYWdlUHRyLCB0ZW1wSW1hZ2VQdHIpO1xuICAgICAgICAgICAgYml0d2lzZU9yKHNrZWxJbWFnZVB0ciwgdGVtcEltYWdlUHRyLCBza2VsSW1hZ2VQdHIpO1xuICAgICAgICAgICAgbWVtY3B5KGVyb2RlZEltYWdlUHRyLCBzdWJJbWFnZVB0cik7XG4gICAgICAgICAgICBzdW0gPSBjb3VudE5vblplcm8oc3ViSW1hZ2VQdHIpIHwgMDtcbiAgICAgICAgICAgIGRvbmUgPSAoKHN1bSB8IDApID09IDAgfCAwKTtcbiAgICAgICAgfSB3aGlsZSAoIWRvbmUpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHNrZWxldG9uaXplOiBza2VsZXRvbml6ZVxuICAgIH07XG59XG5leHBvcnQgZGVmYXVsdCBTa2VsZXRvbml6ZXI7XG4vKiBlc2xpbnQtZW5hYmxlIGVxZXFlcSAqL1xuIiwiaW1wb3J0IHsgSW1hZ2VXcmFwcGVyIH0gZnJvbSBcIi4uL2NvbW1vbi9pbWFnZS13cmFwcGVyXCI7XG5cbi8qKlxuICogQGJvcnJvd3MgaHR0cDovL3d3dy5jb2RlcHJvamVjdC5jb20vVGlwcy80MDcxNzIvQ29ubmVjdGVkLUNvbXBvbmVudC1MYWJlbGluZy1hbmQtVmVjdG9yaXphdGlvblxuICovXG5cbnR5cGUgRGlyZWN0aW9uID0gbnVtYmVyO1xuXG5leHBvcnQgY29uc3QgU2VhcmNoRGlyZWN0aW9uczogQXJyYXk8QXJyYXk8RGlyZWN0aW9uPj4gPSBbWzAsIDFdLCBbMSwgMV0sIFsxLCAwXSwgWzEsIC0xXSwgWzAsIC0xXSwgWy0xLCAtMV0sIFstMSwgMF0sIFstMSwgMV1dO1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbnRvdXJWZXJ0ZXgge1xuICAgIHg6IG51bWJlcixcbiAgICB5OiBudW1iZXIsXG4gICAgZGlyOiBEaXJlY3Rpb24sXG4gICAgbmV4dDogQ29udG91clZlcnRleCxcbiAgICBwcmV2OiBDb250b3VyVmVydGV4XG59XG5cbmludGVyZmFjZSBDdXJyZW50IHtcbiAgICBjeDogbnVtYmVyLFxuICAgIGN5OiBudW1iZXIsXG4gICAgZGlyOiBEaXJlY3Rpb25cbn1cblxuZXhwb3J0IGNsYXNzIFRyYWNlciB7XG4gICAgcHJpdmF0ZSBfaW1hZ2VEYXRhOiBVaW50OEFycmF5O1xuICAgIHByaXZhdGUgX2xhYmVsRGF0YTogQXJyYXk8bnVtYmVyPjtcbiAgICBwcml2YXRlIF93aWR0aDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoaW1hZ2VXcmFwcGVyOiBJbWFnZVdyYXBwZXIsIGxhYmVsV3JhcHBlcjogSW1hZ2VXcmFwcGVyPEFycmF5PG51bWJlcj4+KSB7XG4gICAgICAgIHRoaXMuX2ltYWdlRGF0YSA9IGltYWdlV3JhcHBlci5kYXRhO1xuICAgICAgICB0aGlzLl9sYWJlbERhdGEgPSBsYWJlbFdyYXBwZXIuZGF0YSBhcyBBcnJheTxudW1iZXI+O1xuICAgICAgICB0aGlzLl93aWR0aCA9IGltYWdlV3JhcHBlci5zaXplLng7XG4gICAgfVxuXG4gICAgdHJhY2UoY3VycmVudDogQ3VycmVudCwgY29sb3I6IG51bWJlciwgbGFiZWw6IG51bWJlciwgZWRnZUxhYmVsOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHkgPSBjdXJyZW50LmN5ICsgU2VhcmNoRGlyZWN0aW9uc1tjdXJyZW50LmRpcl1bMF0gfCAwO1xuICAgICAgICAgICAgY29uc3QgeCA9IGN1cnJlbnQuY3ggKyBTZWFyY2hEaXJlY3Rpb25zW2N1cnJlbnQuZGlyXVsxXSB8IDA7XG4gICAgICAgICAgICBjb25zdCBwb3MgPSB5ICogdGhpcy5fd2lkdGggKyB4IHwgMDtcblxuICAgICAgICAgICAgaWYgKCh0aGlzLl9pbWFnZURhdGFbcG9zXSA9PT0gY29sb3IpICYmICgodGhpcy5fbGFiZWxEYXRhW3Bvc10gPT09IDApIHx8ICh0aGlzLl9sYWJlbERhdGFbcG9zXSA9PT0gbGFiZWwpKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2xhYmVsRGF0YVtwb3NdID0gbGFiZWw7XG4gICAgICAgICAgICAgICAgY3VycmVudC5jeCA9IHg7XG4gICAgICAgICAgICAgICAgY3VycmVudC5jeSA9IHk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2xhYmVsRGF0YVtwb3NdID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2xhYmVsRGF0YVtwb3NdID0gZWRnZUxhYmVsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjdXJyZW50LmRpciA9IChjdXJyZW50LmRpciArIDEpICUgODtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb250b3VyVHJhY2luZyhzeTogbnVtYmVyLCBzeDogbnVtYmVyLCBsYWJlbDogbnVtYmVyLCBjb2xvcjogbnVtYmVyLCBlZGdlTGFiZWw6IG51bWJlcik6IENvbnRvdXJWZXJ0ZXgge1xuICAgICAgICBsZXQgRnY6IENvbnRvdXJWZXJ0ZXggPSBudWxsO1xuICAgICAgICBjb25zdCBjdXJyZW50OiBDdXJyZW50ID0ge1xuICAgICAgICAgICAgY3g6IHN4LFxuICAgICAgICAgICAgY3k6IHN5LFxuICAgICAgICAgICAgZGlyOiAwXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHRoaXMudHJhY2UoY3VycmVudCwgY29sb3IsIGxhYmVsLCBlZGdlTGFiZWwpKSB7XG4gICAgICAgICAgICBGdiA9IHtcbiAgICAgICAgICAgICAgICB4OiBzeCxcbiAgICAgICAgICAgICAgICB5OiBzeSxcbiAgICAgICAgICAgICAgICBkaXI6IGN1cnJlbnQuZGlyLFxuICAgICAgICAgICAgICAgIG5leHQ6IG51bGwsXG4gICAgICAgICAgICAgICAgcHJldjogbnVsbFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGxldCBDdiA9IEZ2O1xuICAgICAgICAgICAgbGV0IGxkaXIgPSBjdXJyZW50LmRpcjtcbiAgICAgICAgICAgIGxldCBQID0ge1xuICAgICAgICAgICAgICAgIHg6IGN1cnJlbnQuY3gsXG4gICAgICAgICAgICAgICAgeTogY3VycmVudC5jeSxcbiAgICAgICAgICAgICAgICBkaXI6IDAsXG4gICAgICAgICAgICAgICAgbmV4dDogbnVsbCxcbiAgICAgICAgICAgICAgICBwcmV2OiBDdlxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIEN2Lm5leHQgPSBQO1xuICAgICAgICAgICAgQ3YgPSBQO1xuXG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgY3VycmVudC5kaXIgPSAoY3VycmVudC5kaXIgKyA2KSAlIDg7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnRyYWNlKGN1cnJlbnQsIGNvbG9yLCBsYWJlbCwgZWRnZUxhYmVsKTtcblxuICAgICAgICAgICAgICAgIGlmIChsZGlyICE9PSBjdXJyZW50LmRpcikge1xuICAgICAgICAgICAgICAgICAgICBDdi5kaXIgPSBjdXJyZW50LmRpcjtcbiAgICAgICAgICAgICAgICAgICAgUCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IGN1cnJlbnQuY3gsXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBjdXJyZW50LmN5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlyOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXY6IEN2XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIEN2Lm5leHQgPSBQO1xuICAgICAgICAgICAgICAgICAgICBDdiA9IFA7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgQ3YuZGlyID0gbGRpcjtcbiAgICAgICAgICAgICAgICAgICAgQ3YueCA9IGN1cnJlbnQuY3g7XG4gICAgICAgICAgICAgICAgICAgIEN2LnkgPSBjdXJyZW50LmN5O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGxkaXIgPSBjdXJyZW50LmRpcjtcbiAgICAgICAgICAgIH0gd2hpbGUgKGN1cnJlbnQuY3ggIT09IHN4IHx8IGN1cnJlbnQuY3kgIT09IHN5KTtcblxuICAgICAgICAgICAgRnYucHJldiA9IEN2LnByZXY7XG4gICAgICAgICAgICBDdi5wcmV2Lm5leHQgPSBGdjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gRnY7XG4gICAgfVxufVxuIiwiaW1wb3J0IF9wb2x5ZmlsbHMgZnJvbSAnLi9jb21tb24vcG9seWZpbGxzJztcbmltcG9ydCB7IFJlc3VsdENvbGxlY3RvciB9IGZyb20gJy4vYW5hbHl0aWNzL3Jlc3VsdC1jb2xsZWN0b3InO1xuaW1wb3J0IHsgQm94IH0gZnJvbSAnLi9jb21tb24vYm94JztcbmltcG9ydCB7IEV2ZW50Q2FsbGJhY2ssIEV2ZW50cywgRXZlbnRTdWJzY3JpcHRpb24gfSBmcm9tICcuL2NvbW1vbi9ldmVudHMnO1xuaW1wb3J0IHsgSW1hZ2VEZWJ1ZyB9IGZyb20gJy4vY29tbW9uL2ltYWdlLWRlYnVnJztcbmltcG9ydCB7IEltYWdlV3JhcHBlciB9IGZyb20gJy4vY29tbW9uL2ltYWdlLXdyYXBwZXInO1xuaW1wb3J0IHsgbWVyZ2UgfSBmcm9tICcuL2NvbW1vbi9tZXJnZSc7XG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJy4vY29tbW9uL3BvaW50JztcbmltcG9ydCB7IGNvbmZpZyBhcyBkZWZhdWx0Q29uZmlnLCBRdWFnZ2FDb25maWcgfSBmcm9tICcuL2NvbmZpZy9jb25maWcnO1xuaW1wb3J0IHsgQmFyY29kZURlY29kZXIsIFF1YWdnYUJhcmNvZGUgfSBmcm9tICcuL2RlY29kZXIvYmFyY29kZS1kZWNvZGVyJztcbmltcG9ydCB7IENhbWVyYUFjY2VzcyB9IGZyb20gJy4vaW5wdXQvY2FtZXJhLWFjY2Vzcyc7XG5pbXBvcnQgeyBGcmFtZUdyYWJiZXIgfSBmcm9tICcuL2lucHV0L2ZyYW1lLWdyYWJiZXInO1xuaW1wb3J0IHsgSW1hZ2VTdHJlYW0gfSBmcm9tICcuL2lucHV0L2ltYWdlLXN0cmVhbSc7XG5pbXBvcnQgeyBJbnB1dFN0cmVhbSB9IGZyb20gJy4vaW5wdXQvaW5wdXQtc3RyZWFtJztcbmltcG9ydCB7IExpdmVTdHJlYW0gfSBmcm9tICcuL2lucHV0L2xpdmUtc3RyZWFtJztcbmltcG9ydCB7IFZpZGVvU3RyZWFtIH0gZnJvbSAnLi9pbnB1dC92aWRlby1zdHJlYW0nO1xuaW1wb3J0IHsgY2hlY2tJbWFnZUNvbnN0cmFpbnRzIH0gZnJvbSAnLi9pbnB1dC9pbnB1dC1zdHJlYW0tdXRpbHMnO1xuaW1wb3J0IHsgQmFyY29kZUxvY2F0b3IgfSBmcm9tICcuL2xvY2F0b3IvYmFyY29kZS1sb2NhdG9yJztcbmltcG9ydCB7IEJhcmNvZGVSZWFkZXJEZWNsYXJhdGlvbiB9IGZyb20gJy4vcmVhZGVyL2JhcmNvZGUtcmVhZGVyJztcblxubGV0IF9fZmFjdG9yeVNvdXJjZV9fOiBzdHJpbmc7XG5cbmludGVyZmFjZSBXb3JrZXJUaHJlYWQge1xuICAgIHdvcmtlcjogV29ya2VyO1xuICAgIGltYWdlRGF0YTogVWludDhBcnJheTtcbiAgICBidXN5OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFF1YWdnYUNhbnZhc0NvbnRhaW5lciB7XG4gICAgY3R4OiB7XG4gICAgICAgIGltYWdlOiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsXG4gICAgICAgIG92ZXJsYXk6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRFxuICAgIH0sXG4gICAgZG9tOiB7XG4gICAgICAgIGltYWdlOiBIVE1MQ2FudmFzRWxlbWVudCxcbiAgICAgICAgb3ZlcmxheTogSFRNTENhbnZhc0VsZW1lbnRcbiAgICB9XG59XG5cbmxldCBfaW5wdXRTdHJlYW06IElucHV0U3RyZWFtO1xubGV0IF9mcmFtZUdyYWJiZXI6IEZyYW1lR3JhYmJlcjtcbmxldCBfc3RvcHBlZDogYm9vbGVhbjtcbmNvbnN0IF9jYW52YXNDb250YWluZXI6IFF1YWdnYUNhbnZhc0NvbnRhaW5lciA9IHtcbiAgICBjdHg6IHtcbiAgICAgICAgaW1hZ2U6IG51bGwsXG4gICAgICAgIG92ZXJsYXk6IG51bGxcbiAgICB9LFxuICAgIGRvbToge1xuICAgICAgICBpbWFnZTogbnVsbCxcbiAgICAgICAgb3ZlcmxheTogbnVsbFxuICAgIH1cbn07XG5sZXQgX2lucHV0SW1hZ2VXcmFwcGVyOiBJbWFnZVdyYXBwZXI7XG5sZXQgX2xvY2F0b3I6IEJhcmNvZGVMb2NhdG9yO1xubGV0IF9ib3hTaXplOiBCb3g7XG5sZXQgX2RlY29kZXI6IEJhcmNvZGVEZWNvZGVyO1xubGV0IF93b3JrZXJQb29sID0gbmV3IEFycmF5PFdvcmtlclRocmVhZD4oKTtcbmxldCBfb25VSVRocmVhZDogYm9vbGVhbjtcbmxldCBfcmVzdWx0Q29sbGVjdG9yOiBSZXN1bHRDb2xsZWN0b3I7XG5sZXQgX2NvbmZpZzogUXVhZ2dhQ29uZmlnO1xuXG5leHBvcnQgY29uc3QgUXVhZ2dhID0ge1xuICAgIGluaXQoY29uZmlnOiBRdWFnZ2FDb25maWcsIGNiOiAoKSA9PiB2b2lkLCBpbWFnZVdyYXBwZXI/OiBJbWFnZVdyYXBwZXIpIHtcbiAgICAgICAgX29uVUlUaHJlYWQgPSB0cnVlO1xuICAgICAgICBfY29uZmlnID0gbWVyZ2UoZGVmYXVsdENvbmZpZywgY29uZmlnKTtcbiAgICAgICAgaWYgKGltYWdlV3JhcHBlcikge1xuICAgICAgICAgICAgX29uVUlUaHJlYWQgPSBmYWxzZTtcbiAgICAgICAgICAgIF9pbml0aWFsaXplRGF0YShpbWFnZVdyYXBwZXIpO1xuICAgICAgICAgICAgY2IoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF9pbml0SW5wdXRTdHJlYW0oY2IpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIENhbWVyYUFjY2VzczogQ2FtZXJhQWNjZXNzLFxuXG4gICAgSW1hZ2VEZWJ1ZzogSW1hZ2VEZWJ1ZyxcblxuICAgIEltYWdlV3JhcHBlcjogSW1hZ2VXcmFwcGVyLFxuXG4gICAgUmVzdWx0Q29sbGVjdG9yOiBSZXN1bHRDb2xsZWN0b3IsXG5cbiAgICBnZXQgY2FudmFzKCk6IFF1YWdnYUNhbnZhc0NvbnRhaW5lciB7XG4gICAgICAgIHJldHVybiBfY2FudmFzQ29udGFpbmVyO1xuICAgIH0sXG5cbiAgICBzdGFydCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKF9vblVJVGhyZWFkICYmIF9jb25maWcuaW5wdXRTdHJlYW0udHlwZSA9PT0gJ0xpdmVTdHJlYW0nKSB7XG4gICAgICAgICAgICBfc3RhcnRDb250aW51b3VzVXBkYXRlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfdXBkYXRlKCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcCgpOiB2b2lkIHtcbiAgICAgICAgX3N0b3BwZWQgPSB0cnVlO1xuICAgICAgICBfYWRqdXN0V29ya2VyUG9vbCgwKTtcbiAgICAgICAgaWYgKF9jb25maWcuaW5wdXRTdHJlYW0udHlwZSA9PT0gJ0xpdmVTdHJlYW0nKSB7XG4gICAgICAgICAgICBDYW1lcmFBY2Nlc3MucmVsZWFzZSgpO1xuICAgICAgICAgICAgX2lucHV0U3RyZWFtLmNsZWFyRXZlbnRIYW5kbGVycygpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGRlY29kZVNpbmdsZShjb25maWc6IFF1YWdnYUNvbmZpZywgcmVzdWx0Q2FsbGJhY2s6IChfOiBRdWFnZ2FCYXJjb2RlKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgICAgIGNvbmZpZyA9IG1lcmdlKHtcbiAgICAgICAgICAgIGlucHV0U3RyZWFtOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ0ltYWdlU3RyZWFtJyxcbiAgICAgICAgICAgICAgICBzZXF1ZW5jZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2l6ZTogODAwLFxuICAgICAgICAgICAgICAgIHNyYzogY29uZmlnLnNyY1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG51bU9mV29ya2VyczogKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgY29uZmlnLmRlYnVnKSA/IDAgOiAxLFxuICAgICAgICAgICAgbG9jYXRvcjoge1xuICAgICAgICAgICAgICAgIGhhbGZTYW1wbGU6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIGNvbmZpZyk7XG5cbiAgICAgICAgUXVhZ2dhLmluaXQoY29uZmlnLCAoKSA9PiB7XG4gICAgICAgICAgICBFdmVudHMub25jZSgncHJvY2Vzc2VkJywgKHJlc3VsdDogUXVhZ2dhQmFyY29kZSkgPT4ge1xuICAgICAgICAgICAgICAgIFF1YWdnYS5zdG9wKCk7XG4gICAgICAgICAgICAgICAgcmVzdWx0Q2FsbGJhY2suY2FsbChudWxsLCByZXN1bHQpO1xuICAgICAgICAgICAgfSwgdHJ1ZSk7XG4gICAgICAgICAgICBRdWFnZ2Euc3RhcnQoKTtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIHBhdXNlKCk6IHZvaWQge1xuICAgICAgICBfc3RvcHBlZCA9IHRydWU7XG4gICAgfSxcblxuICAgIG9uRGV0ZWN0ZWQoY2FsbGJhY2s6IEV2ZW50U3Vic2NyaXB0aW9uIHwgRXZlbnRDYWxsYmFjayk6IHZvaWQge1xuICAgICAgICBFdmVudHMuc3Vic2NyaWJlKCdkZXRlY3RlZCcsIGNhbGxiYWNrKTtcbiAgICB9LFxuXG4gICAgb2ZmRGV0ZWN0ZWQoY2FsbGJhY2s6IEV2ZW50Q2FsbGJhY2spOiB2b2lkIHtcbiAgICAgICAgRXZlbnRzLnVuc3Vic2NyaWJlKCdkZXRlY3RlZCcsIGNhbGxiYWNrKTtcbiAgICB9LFxuXG4gICAgb25Qcm9jZXNzZWQoY2FsbGJhY2s6IEV2ZW50U3Vic2NyaXB0aW9uIHwgRXZlbnRDYWxsYmFjayk6IHZvaWQge1xuICAgICAgICBFdmVudHMuc3Vic2NyaWJlKCdwcm9jZXNzZWQnLCBjYWxsYmFjayk7XG4gICAgfSxcblxuICAgIG9mZlByb2Nlc3NlZChjYWxsYmFjazogRXZlbnRDYWxsYmFjayk6IHZvaWQge1xuICAgICAgICBFdmVudHMudW5zdWJzY3JpYmUoJ3Byb2Nlc3NlZCcsIGNhbGxiYWNrKTtcbiAgICB9LFxuXG4gICAgc2V0UmVhZGVycyhyZWFkZXJzOiBBcnJheTxCYXJjb2RlUmVhZGVyRGVjbGFyYXRpb24+KTogdm9pZCB7XG4gICAgICAgIGlmIChfZGVjb2Rlcikge1xuICAgICAgICAgICAgX2RlY29kZXIuc2V0UmVhZGVycyhyZWFkZXJzKTtcbiAgICAgICAgfSBlbHNlIGlmIChfb25VSVRocmVhZCAmJiBfd29ya2VyUG9vbC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBfd29ya2VyUG9vbC5mb3JFYWNoKCh7IHdvcmtlciB9KSA9PiB3b3JrZXIucG9zdE1lc3NhZ2UoeyBjbWQ6ICdzZXRSZWFkZXJzJywgcmVhZGVycyB9KSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgcmVnaXN0ZXJSZXN1bHRDb2xsZWN0b3IocmVzdWx0Q29sbGVjdG9yOiBSZXN1bHRDb2xsZWN0b3IpOiB2b2lkIHtcbiAgICAgICAgaWYgKHJlc3VsdENvbGxlY3RvciAmJiB0eXBlb2YgcmVzdWx0Q29sbGVjdG9yLmFkZFJlc3VsdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgX3Jlc3VsdENvbGxlY3RvciA9IHJlc3VsdENvbGxlY3RvcjtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmZ1bmN0aW9uIF9pbml0aWFsaXplRGF0YShpbWFnZVdyYXBwZXI/OiBJbWFnZVdyYXBwZXIpOiB2b2lkIHtcbiAgICBfaW5pdEJ1ZmZlcnMoaW1hZ2VXcmFwcGVyKTtcbiAgICBfZGVjb2RlciA9IG5ldyBCYXJjb2RlRGVjb2RlcihfY29uZmlnLmRlY29kZXIsIF9pbnB1dEltYWdlV3JhcHBlcik7XG59XG5cbmZ1bmN0aW9uIF9pbml0SW5wdXRTdHJlYW0oY2FsbGJhY2s6IChlcnI/OiBhbnkpID0+IHZvaWQpOiB2b2lkIHtcbiAgICBsZXQgdmlkZW86IEhUTUxWaWRlb0VsZW1lbnQ7XG4gICAgaWYgKF9jb25maWcuaW5wdXRTdHJlYW0udHlwZSA9PT0gJ1ZpZGVvU3RyZWFtJykge1xuICAgICAgICB2aWRlbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZpZGVvJyk7XG4gICAgICAgIF9pbnB1dFN0cmVhbSA9IG5ldyBWaWRlb1N0cmVhbSh2aWRlbyk7XG4gICAgfSBlbHNlIGlmIChfY29uZmlnLmlucHV0U3RyZWFtLnR5cGUgPT09ICdJbWFnZVN0cmVhbScpIHtcbiAgICAgICAgX2lucHV0U3RyZWFtID0gbmV3IEltYWdlU3RyZWFtKCk7XG4gICAgfSBlbHNlIGlmIChfY29uZmlnLmlucHV0U3RyZWFtLnR5cGUgPT09ICdMaXZlU3RyZWFtJykge1xuICAgICAgICBjb25zdCB2aWV3cG9ydCA9IF9nZXRWaWV3UG9ydCgpO1xuICAgICAgICBpZiAodmlld3BvcnQpIHtcbiAgICAgICAgICAgIHZpZGVvID0gdmlld3BvcnQucXVlcnlTZWxlY3RvcigndmlkZW8nKTtcbiAgICAgICAgICAgIGlmICghdmlkZW8pIHtcbiAgICAgICAgICAgICAgICB2aWRlbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZpZGVvJyk7XG4gICAgICAgICAgICAgICAgdmlld3BvcnQuYXBwZW5kQ2hpbGQodmlkZW8pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIF9pbnB1dFN0cmVhbSA9IG5ldyBMaXZlU3RyZWFtKHZpZGVvKTtcbiAgICAgICAgQ2FtZXJhQWNjZXNzLnJlcXVlc3QodmlkZW8sIF9jb25maWcuaW5wdXRTdHJlYW0uY29uc3RyYWludHMpXG4gICAgICAgICAgICAudGhlbigoKSA9PiBfaW5wdXRTdHJlYW0udHJpZ2dlcignY2FucmVjb3JkJyksIGVyciA9PiBjYWxsYmFjayhlcnIpKTtcbiAgICB9XG5cbiAgICBfaW5wdXRTdHJlYW0uc2V0QXR0cmlidXRlKCdwcmVsb2FkJywgJ2F1dG8nKTtcbiAgICBfaW5wdXRTdHJlYW0uY29uZmlnID0gX2NvbmZpZy5pbnB1dFN0cmVhbTtcbiAgICBfaW5wdXRTdHJlYW0uYWRkRXZlbnRMaXN0ZW5lcignY2FucmVjb3JkJywgX2NhblJlY29yZC5iaW5kKHRoaXMsIGNhbGxiYWNrKSk7XG59XG5cbmZ1bmN0aW9uIF9nZXRWaWV3UG9ydCgpOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3QgdGFyZ2V0ID0gX2NvbmZpZy5pbnB1dFN0cmVhbS50YXJnZXQ7XG4gICAgLy8gQ2hlY2sgaWYgdGFyZ2V0IGlzIGFscmVhZHkgYSBET00gZWxlbWVudFxuICAgIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFVzZSAnI2ludGVyYWN0aXZlLnZpZXdwb3J0JyBhcyBhIGZhbGxiYWNrIHNlbGVjdG9yIChiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSlcbiAgICAgICAgY29uc3Qgc2VsZWN0b3IgPSB0eXBlb2YgdGFyZ2V0ID09PSAnc3RyaW5nJyA/IHRhcmdldCA6ICcjaW50ZXJhY3RpdmUudmlld3BvcnQnO1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBfY2FuUmVjb3JkKGNiOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgY2hlY2tJbWFnZUNvbnN0cmFpbnRzKF9pbnB1dFN0cmVhbSwgX2NvbmZpZy5sb2NhdG9yKTtcbiAgICBfaW5pdENhbnZhcygpO1xuICAgIF9mcmFtZUdyYWJiZXIgPSBuZXcgRnJhbWVHcmFiYmVyKF9pbnB1dFN0cmVhbSwgX2NhbnZhc0NvbnRhaW5lci5kb20uaW1hZ2UpO1xuXG4gICAgX2FkanVzdFdvcmtlclBvb2woX2NvbmZpZy5udW1PZldvcmtlcnMsICgpID0+IHtcbiAgICAgICAgaWYgKF9jb25maWcubnVtT2ZXb3JrZXJzID09PSAwKSB7XG4gICAgICAgICAgICBfaW5pdGlhbGl6ZURhdGEoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF9pbnB1dFN0cmVhbS5wbGF5KCk7XG4gICAgICAgIGNiKCk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIF9pbml0Q2FudmFzKCk6IHZvaWQge1xuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnN0IHZpZXdwb3J0ID0gX2dldFZpZXdQb3J0KCk7XG4gICAgICAgIF9jYW52YXNDb250YWluZXIuZG9tLmltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FudmFzLmltZ0J1ZmZlcicpO1xuICAgICAgICBpZiAoIV9jYW52YXNDb250YWluZXIuZG9tLmltYWdlKSB7XG4gICAgICAgICAgICBfY2FudmFzQ29udGFpbmVyLmRvbS5pbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICAgICAgX2NhbnZhc0NvbnRhaW5lci5kb20uaW1hZ2UuY2xhc3NOYW1lID0gJ2ltZ0J1ZmZlcic7XG4gICAgICAgICAgICBpZiAodmlld3BvcnQgJiYgX2NvbmZpZy5pbnB1dFN0cmVhbS50eXBlID09PSAnSW1hZ2VTdHJlYW0nKSB7XG4gICAgICAgICAgICAgICAgdmlld3BvcnQuYXBwZW5kQ2hpbGQoX2NhbnZhc0NvbnRhaW5lci5kb20uaW1hZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIF9jYW52YXNDb250YWluZXIuY3R4LmltYWdlID0gX2NhbnZhc0NvbnRhaW5lci5kb20uaW1hZ2UuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgX2NhbnZhc0NvbnRhaW5lci5kb20uaW1hZ2Uud2lkdGggPSBfaW5wdXRTdHJlYW0uY2FudmFzV2lkdGg7XG4gICAgICAgIF9jYW52YXNDb250YWluZXIuZG9tLmltYWdlLmhlaWdodCA9IF9pbnB1dFN0cmVhbS5jYW52YXNIZWlnaHQ7XG5cbiAgICAgICAgX2NhbnZhc0NvbnRhaW5lci5kb20ub3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbnZhcy5kcmF3aW5nQnVmZmVyJyk7XG4gICAgICAgIGlmICghX2NhbnZhc0NvbnRhaW5lci5kb20ub3ZlcmxheSkge1xuICAgICAgICAgICAgX2NhbnZhc0NvbnRhaW5lci5kb20ub3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICAgICAgX2NhbnZhc0NvbnRhaW5lci5kb20ub3ZlcmxheS5jbGFzc05hbWUgPSAnZHJhd2luZ0J1ZmZlcic7XG4gICAgICAgICAgICBpZiAodmlld3BvcnQpIHtcbiAgICAgICAgICAgICAgICB2aWV3cG9ydC5hcHBlbmRDaGlsZChfY2FudmFzQ29udGFpbmVyLmRvbS5vdmVybGF5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGNsZWFyRml4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKTtcbiAgICAgICAgICAgIGNsZWFyRml4LnNldEF0dHJpYnV0ZSgnY2xlYXInLCAnYWxsJyk7XG4gICAgICAgICAgICBpZiAodmlld3BvcnQpIHtcbiAgICAgICAgICAgICAgICB2aWV3cG9ydC5hcHBlbmRDaGlsZChjbGVhckZpeCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgX2NhbnZhc0NvbnRhaW5lci5jdHgub3ZlcmxheSA9IF9jYW52YXNDb250YWluZXIuZG9tLm92ZXJsYXkuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgX2NhbnZhc0NvbnRhaW5lci5kb20ub3ZlcmxheS53aWR0aCA9IF9pbnB1dFN0cmVhbS5jYW52YXNXaWR0aDtcbiAgICAgICAgX2NhbnZhc0NvbnRhaW5lci5kb20ub3ZlcmxheS5oZWlnaHQgPSBfaW5wdXRTdHJlYW0uY2FudmFzSGVpZ2h0O1xuICAgIH1cbn1cblxuZnVuY3Rpb24gX2luaXRCdWZmZXJzKGltYWdlV3JhcHBlcj86IEltYWdlV3JhcHBlcik6IHZvaWQge1xuICAgIGlmIChpbWFnZVdyYXBwZXIpIHtcbiAgICAgICAgX2lucHV0SW1hZ2VXcmFwcGVyID0gaW1hZ2VXcmFwcGVyO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIF9pbnB1dEltYWdlV3JhcHBlciA9IG5ldyBJbWFnZVdyYXBwZXIoe1xuICAgICAgICAgICAgeDogX2lucHV0U3RyZWFtLndpZHRoLFxuICAgICAgICAgICAgeTogX2lucHV0U3RyZWFtLmhlaWdodFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zb2xlLmxvZyhfaW5wdXRJbWFnZVdyYXBwZXIuc2l6ZSk7XG4gICAgfVxuICAgIF9ib3hTaXplID0gW1xuICAgICAgICB7IHg6IDAsIHk6IDAgfSxcbiAgICAgICAgeyB4OiAwLCB5OiBfaW5wdXRJbWFnZVdyYXBwZXIuc2l6ZS55IH0sXG4gICAgICAgIHsgeDogX2lucHV0SW1hZ2VXcmFwcGVyLnNpemUueCwgeTogX2lucHV0SW1hZ2VXcmFwcGVyLnNpemUueSB9LFxuICAgICAgICB7IHg6IF9pbnB1dEltYWdlV3JhcHBlci5zaXplLngsIHk6IDAgfVxuICAgIF07XG4gICAgX2xvY2F0b3IgPSBuZXcgQmFyY29kZUxvY2F0b3IoX2lucHV0SW1hZ2VXcmFwcGVyLCBfY29uZmlnLmxvY2F0b3IpO1xufVxuXG5mdW5jdGlvbiBfZ2V0Qm91bmRpbmdCb3hlcygpOiBBcnJheTxCb3g+IHtcbiAgICBpZiAoX2NvbmZpZy5sb2NhdGUpIHtcbiAgICAgICAgcmV0dXJuIF9sb2NhdG9yLmxvY2F0ZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBbW1xuICAgICAgICAgICAgX2JveFNpemVbMF0sXG4gICAgICAgICAgICBfYm94U2l6ZVsxXSxcbiAgICAgICAgICAgIF9ib3hTaXplWzJdLFxuICAgICAgICAgICAgX2JveFNpemVbM11cbiAgICAgICAgXV07XG4gICAgfVxufVxuXG5mdW5jdGlvbiBfdHJhbnNmb3JtKHBvbHlnb246IFJlYWRvbmx5QXJyYXk8UG9pbnQ+LCBvZmZzZXQ6IFBvaW50KTogdm9pZCB7XG4gICAgcG9seWdvbi5mb3JFYWNoKHZlcnRleCA9PiB7XG4gICAgICAgIHZlcnRleC54ICs9IG9mZnNldC54O1xuICAgICAgICB2ZXJ0ZXgueSArPSBvZmZzZXQueTtcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBfdHJhbnNmb3JtUmVzdWx0KHJlc3VsdDogUXVhZ2dhQmFyY29kZSwgb2Zmc2V0OiBQb2ludCk6IHZvaWQge1xuICAgIGlmIChyZXN1bHQuYmFyY29kZXMpIHtcbiAgICAgICAgcmVzdWx0LmJhcmNvZGVzLmZvckVhY2goYmFyY29kZSA9PiBfdHJhbnNmb3JtUmVzdWx0KGJhcmNvZGUsIG9mZnNldCkpO1xuICAgIH1cblxuICAgIGlmIChyZXN1bHQubGluZSkge1xuICAgICAgICBfdHJhbnNmb3JtKHJlc3VsdC5saW5lLCBvZmZzZXQpO1xuICAgIH1cblxuICAgIGlmIChyZXN1bHQuYm94KSB7XG4gICAgICAgIF90cmFuc2Zvcm0ocmVzdWx0LmJveCwgb2Zmc2V0KTtcbiAgICB9XG5cbiAgICBpZiAocmVzdWx0LmJveGVzKSB7XG4gICAgICAgIHJlc3VsdC5ib3hlcy5mb3JFYWNoKGJveCA9PiBfdHJhbnNmb3JtKGJveCwgb2Zmc2V0KSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBfYWRkUmVzdWx0KHJlc3VsdDogUXVhZ2dhQmFyY29kZSwgaW1hZ2VEYXRhOiBVaW50OEFycmF5LCBjYW52YXNXaWR0aDogbnVtYmVyLCBjYW52YXNIZWlnaHQ6IG51bWJlcik6IHZvaWQge1xuICAgIGlmIChpbWFnZURhdGEgJiYgX3Jlc3VsdENvbGxlY3Rvcikge1xuICAgICAgICBpZiAocmVzdWx0LmJhcmNvZGVzKSB7XG4gICAgICAgICAgICByZXN1bHQuYmFyY29kZXMuZm9yRWFjaCgoeyBjb2RlUmVzdWx0IH0pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY29kZVJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICBfcmVzdWx0Q29sbGVjdG9yLmFkZFJlc3VsdChpbWFnZURhdGEsIGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQsIGNvZGVSZXN1bHQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmNvZGVSZXN1bHQpIHtcbiAgICAgICAgICAgIF9yZXN1bHRDb2xsZWN0b3IuYWRkUmVzdWx0KGltYWdlRGF0YSwgY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCwgcmVzdWx0LmNvZGVSZXN1bHQpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBfaGFzQ29kZVJlc3VsdChyZXN1bHQ6IFF1YWdnYUJhcmNvZGUpOiBib29sZWFuIHtcbiAgICByZXR1cm4gcmVzdWx0ICYmICghIXJlc3VsdC5jb2RlUmVzdWx0IHx8IHJlc3VsdC5iYXJjb2RlcyAmJiByZXN1bHQuYmFyY29kZXMuc29tZShiYXJjb2RlID0+ICEhYmFyY29kZS5jb2RlUmVzdWx0KSk7XG59XG5cbmZ1bmN0aW9uIF9wdWJsaXNoUmVzdWx0KHJlc3VsdD86IFF1YWdnYUJhcmNvZGUsIGltYWdlRGF0YT86IFVpbnQ4QXJyYXkpOiB2b2lkIHtcbiAgICBsZXQgcmVzdWx0VG9QdWJsaXNoOiBRdWFnZ2FCYXJjb2RlIHwgQXJyYXk8UXVhZ2dhQmFyY29kZT4gPSByZXN1bHQ7XG5cbiAgICBpZiAocmVzdWx0ICYmIF9vblVJVGhyZWFkKSB7XG4gICAgICAgIGNvbnN0IG9mZnNldCA9IF9pbnB1dFN0cmVhbS50b3BMZWZ0O1xuXG4gICAgICAgIGlmIChvZmZzZXQueCAhPT0gMCB8fCBvZmZzZXQueSAhPT0gMCkge1xuICAgICAgICAgICAgX3RyYW5zZm9ybVJlc3VsdChyZXN1bHQsIG9mZnNldCk7XG4gICAgICAgIH1cblxuICAgICAgICBfYWRkUmVzdWx0KHJlc3VsdCwgaW1hZ2VEYXRhLCBfaW5wdXRTdHJlYW0uY2FudmFzV2lkdGgsIF9pbnB1dFN0cmVhbS5jYW52YXNIZWlnaHQpO1xuICAgICAgICByZXN1bHRUb1B1Ymxpc2ggPSByZXN1bHQuYmFyY29kZXMgfHwgcmVzdWx0O1xuICAgIH1cblxuICAgIEV2ZW50cy5wdWJsaXNoKCdwcm9jZXNzZWQnLCByZXN1bHRUb1B1Ymxpc2gpO1xuICAgIGlmIChfaGFzQ29kZVJlc3VsdChyZXN1bHQpKSB7XG4gICAgICAgIEV2ZW50cy5wdWJsaXNoKCdkZXRlY3RlZCcsIHJlc3VsdFRvUHVibGlzaCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBfbG9jYXRlQW5kRGVjb2RlKCk6IHZvaWQge1xuICAgIGNvbnN0IGJveGVzID0gX2dldEJvdW5kaW5nQm94ZXMoKTtcblxuICAgIGlmIChib3hlcykge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBfZGVjb2Rlci5kZWNvZGVGcm9tQm91bmRpbmdCb3hlcyhib3hlcykgfHwge307XG4gICAgICAgIHJlc3VsdC5ib3hlcyA9IGJveGVzO1xuICAgICAgICBfcHVibGlzaFJlc3VsdChyZXN1bHQsIF9pbnB1dEltYWdlV3JhcHBlci5kYXRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBfcHVibGlzaFJlc3VsdCgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gX3VwZGF0ZSgpOiB2b2lkIHtcbiAgICBsZXQgYXZhaWxhYmxlV29ya2VyOiBXb3JrZXJUaHJlYWQ7XG5cbiAgICBpZiAoX29uVUlUaHJlYWQpIHtcbiAgICAgICAgaWYgKF93b3JrZXJQb29sLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGF2YWlsYWJsZVdvcmtlciA9IF93b3JrZXJQb29sLmZpbmQod29ya2VyVGhyZWFkID0+ICF3b3JrZXJUaHJlYWQuYnVzeSk7XG4gICAgICAgICAgICBpZiAoYXZhaWxhYmxlV29ya2VyKSB7XG4gICAgICAgICAgICAgICAgX2ZyYW1lR3JhYmJlci5hdHRhY2hEYXRhKGF2YWlsYWJsZVdvcmtlci5pbWFnZURhdGEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm47IC8vIGFsbCB3b3JrZXJzIGFyZSBidXN5XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfZnJhbWVHcmFiYmVyLmF0dGFjaERhdGEoX2lucHV0SW1hZ2VXcmFwcGVyLmRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChfZnJhbWVHcmFiYmVyLmdyYWIoKSkge1xuICAgICAgICAgICAgaWYgKGF2YWlsYWJsZVdvcmtlcikge1xuICAgICAgICAgICAgICAgIGF2YWlsYWJsZVdvcmtlci5idXN5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBhdmFpbGFibGVXb3JrZXIud29ya2VyLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICAgICAgY21kOiAncHJvY2VzcycsXG4gICAgICAgICAgICAgICAgICAgIGltYWdlRGF0YTogYXZhaWxhYmxlV29ya2VyLmltYWdlRGF0YVxuICAgICAgICAgICAgICAgIH0sIFthdmFpbGFibGVXb3JrZXIuaW1hZ2VEYXRhLmJ1ZmZlcl0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfbG9jYXRlQW5kRGVjb2RlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBfbG9jYXRlQW5kRGVjb2RlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBfc3RhcnRDb250aW51b3VzVXBkYXRlKCk6IHZvaWQge1xuICAgIGNvbnN0IGRlbGF5ID0gMTAwMCAvIChfY29uZmlnLmZyZXF1ZW5jeSB8fCA2MCk7XG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgbGV0IG5leHQgPSBudWxsO1xuICAgIF9zdG9wcGVkID0gZmFsc2U7XG5cbiAgICAoZnVuY3Rpb24gZnJhbWUodGltZXN0YW1wKTogdm9pZCB7XG4gICAgICAgIG5leHQgPSBuZXh0IHx8IHRpbWVzdGFtcDtcbiAgICAgICAgaWYgKCF0aGF0Ll9zdG9wcGVkKSB7XG4gICAgICAgICAgICBpZiAodGltZXN0YW1wID49IG5leHQpIHtcbiAgICAgICAgICAgICAgICBuZXh0ICs9IGRlbGF5O1xuICAgICAgICAgICAgICAgIHRoYXQuX3VwZGF0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShmcmFtZSk7XG4gICAgICAgIH1cbiAgICB9KHBlcmZvcm1hbmNlLm5vdygpKSk7XG59XG5cbmZ1bmN0aW9uIF9pbml0V29ya2VyKGNiOiAod29ya2VyVGhyZWFkOiBXb3JrZXJUaHJlYWQpID0+IHZvaWQpOiB2b2lkIHtcbiAgICBjb25zdCBibG9iVVJMID0gX2dlbmVyYXRlV29ya2VyQmxvYigpO1xuICAgIGNvbnN0IHdvcmtlclRocmVhZCA9IHtcbiAgICAgICAgd29ya2VyOiBuZXcgV29ya2VyKGJsb2JVUkwpLFxuICAgICAgICBpbWFnZURhdGE6IG5ldyBVaW50OEFycmF5KF9pbnB1dFN0cmVhbS53aWR0aCAqIF9pbnB1dFN0cmVhbS5oZWlnaHQpLFxuICAgICAgICBidXN5OiB0cnVlXG4gICAgfTtcblxuICAgIHdvcmtlclRocmVhZC53b3JrZXIub25tZXNzYWdlID0gKHsgZGF0YSB9KSA9PiB7XG4gICAgICAgIGlmIChkYXRhLmV2ZW50ID09PSAnaW5pdGlhbGl6ZWQnKSB7XG4gICAgICAgICAgICBVUkwucmV2b2tlT2JqZWN0VVJMKGJsb2JVUkwpO1xuICAgICAgICAgICAgd29ya2VyVGhyZWFkLmJ1c3kgPSBmYWxzZTtcbiAgICAgICAgICAgIHdvcmtlclRocmVhZC5pbWFnZURhdGEgPSBuZXcgVWludDhBcnJheShkYXRhLmltYWdlRGF0YSk7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdXb3JrZXIgaW5pdGlhbGl6ZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNiKHdvcmtlclRocmVhZCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YS5ldmVudCA9PT0gJ3Byb2Nlc3NlZCcpIHtcbiAgICAgICAgICAgIHdvcmtlclRocmVhZC5idXN5ID0gZmFsc2U7XG4gICAgICAgICAgICB3b3JrZXJUaHJlYWQuaW1hZ2VEYXRhID0gbmV3IFVpbnQ4QXJyYXkoZGF0YS5pbWFnZURhdGEpO1xuICAgICAgICAgICAgX3B1Ymxpc2hSZXN1bHQoZGF0YS5yZXN1bHQsIHdvcmtlclRocmVhZC5pbWFnZURhdGEpO1xuICAgICAgICB9IGVsc2UgaWYgKGRhdGEuZXZlbnQgPT09ICdlcnJvcicpIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1dvcmtlciBlcnJvcjonLCBkYXRhLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIHdvcmtlclRocmVhZC53b3JrZXIucG9zdE1lc3NhZ2Uoe1xuICAgICAgICBjbWQ6ICdpbml0JyxcbiAgICAgICAgc2l6ZTogeyB4OiBfaW5wdXRTdHJlYW0ud2lkdGgsIHk6IF9pbnB1dFN0cmVhbS5oZWlnaHQgfSxcbiAgICAgICAgaW1hZ2VEYXRhOiB3b3JrZXJUaHJlYWQuaW1hZ2VEYXRhLFxuICAgICAgICBjb25maWc6IG1lcmdlKF9jb25maWcsIHsgaW5wdXRTdHJlYW06IHsgdGFyZ2V0OiBudWxsIH0gfSlcbiAgICB9LCBbd29ya2VyVGhyZWFkLmltYWdlRGF0YS5idWZmZXJdKTtcbn1cblxuZnVuY3Rpb24gX3dvcmtlckludGVyZmFjZShmYWN0b3J5OiBGdW5jdGlvbik6IHZvaWQge1xuICAgIGNvbnN0IG9yaWdpbiA9ICcqJztcbiAgICBsZXQgaW1hZ2VXcmFwcGVyOiBJbWFnZVdyYXBwZXI7XG5cbiAgICBpZiAoZmFjdG9yeSkge1xuICAgICAgICAoUXVhZ2dhIGFzIGFueSkgPSBmYWN0b3J5KCkuZGVmYXVsdDtcbiAgICAgICAgaWYgKCFRdWFnZ2EpIHtcbiAgICAgICAgICAgIHNlbGYucG9zdE1lc3NhZ2UoeyBldmVudDogJ2Vycm9yJywgbWVzc2FnZTogJ1F1YWdnYSBjb3VsZCBub3QgYmUgY3JlYXRlZCcgfSwgb3JpZ2luKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNlbGYub25tZXNzYWdlID0gKHsgZGF0YSB9KSA9PiB7XG4gICAgICAgIGlmIChkYXRhLmNtZCA9PT0gJ2luaXQnKSB7XG4gICAgICAgICAgICBjb25zdCBjb25maWc6IFF1YWdnYUNvbmZpZyA9IGRhdGEuY29uZmlnO1xuICAgICAgICAgICAgY29uZmlnLm51bU9mV29ya2VycyA9IDA7XG4gICAgICAgICAgICBpbWFnZVdyYXBwZXIgPSBuZXcgSW1hZ2VXcmFwcGVyKHsgeDogZGF0YS5zaXplLngsIHk6IGRhdGEuc2l6ZS55IH0sIG5ldyBVaW50OEFycmF5KGRhdGEuaW1hZ2VEYXRhKSk7XG4gICAgICAgICAgICBRdWFnZ2EuaW5pdChjb25maWcsICgpID0+IHNlbGYucG9zdE1lc3NhZ2UoXG4gICAgICAgICAgICAgICAgeyBldmVudDogJ2luaXRpYWxpemVkJywgaW1hZ2VEYXRhOiBpbWFnZVdyYXBwZXIuZGF0YSB9LCBvcmlnaW4sIFtpbWFnZVdyYXBwZXIuZGF0YS5idWZmZXJdKSxcbiAgICAgICAgICAgICAgICBpbWFnZVdyYXBwZXJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBRdWFnZ2Eub25Qcm9jZXNzZWQoKHJlc3VsdDogUXVhZ2dhQmFyY29kZSkgPT4gc2VsZi5wb3N0TWVzc2FnZShcbiAgICAgICAgICAgICAgICB7IGV2ZW50OiAncHJvY2Vzc2VkJywgaW1hZ2VEYXRhOiBpbWFnZVdyYXBwZXIuZGF0YSwgcmVzdWx0IH0sIG9yaWdpbiwgW2ltYWdlV3JhcHBlci5kYXRhLmJ1ZmZlcl1cbiAgICAgICAgICAgICkpO1xuICAgICAgICB9IGVsc2UgaWYgKGRhdGEuY21kID09PSAncHJvY2VzcycpIHtcbiAgICAgICAgICAgIGltYWdlV3JhcHBlci5kYXRhID0gbmV3IFVpbnQ4QXJyYXkoZGF0YS5pbWFnZURhdGEpO1xuICAgICAgICAgICAgUXVhZ2dhLnN0YXJ0KCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YS5jbWQgPT09ICdzZXRSZWFkZXJzJykge1xuICAgICAgICAgICAgUXVhZ2dhLnNldFJlYWRlcnMoZGF0YS5yZWFkZXJzKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmZ1bmN0aW9uIF9nZW5lcmF0ZVdvcmtlckJsb2IoKTogc3RyaW5nIHtcbiAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW2AoJHtfd29ya2VySW50ZXJmYWNlLnRvU3RyaW5nKCl9KSgke19fZmFjdG9yeVNvdXJjZV9fIHx8ICcnfSk7YF0sXG4gICAgICAgIHsgdHlwZTogJ3RleHQvamF2YXNjcmlwdCcgfSk7XG5cbiAgICByZXR1cm4gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG59XG5cbmZ1bmN0aW9uIF9hZGp1c3RXb3JrZXJQb29sKGNhcGFjaXR5OiBudW1iZXIsIGNiPzogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIGNvbnN0IGluY3JlYXNlQnkgPSBjYXBhY2l0eSAtIF93b3JrZXJQb29sLmxlbmd0aDtcbiAgICBpZiAoaW5jcmVhc2VCeSA9PT0gMCkge1xuICAgICAgICByZXR1cm4gY2IgJiYgY2IoKTtcbiAgICB9XG4gICAgaWYgKGluY3JlYXNlQnkgPCAwKSB7XG4gICAgICAgIF93b3JrZXJQb29sLnNsaWNlKGluY3JlYXNlQnkpLmZvckVhY2goKHsgd29ya2VyIH0pID0+IHtcbiAgICAgICAgICAgIHdvcmtlci50ZXJtaW5hdGUoKTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1dvcmtlciB0ZXJtaW5hdGVkIScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgX3dvcmtlclBvb2wgPSBfd29ya2VyUG9vbC5zbGljZSgwLCBpbmNyZWFzZUJ5KTtcbiAgICAgICAgcmV0dXJuIGNiICYmIGNiKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbmNyZWFzZUJ5OyBpKyspIHtcbiAgICAgICAgICAgIF9pbml0V29ya2VyKHdvcmtlclRocmVhZCA9PiB7XG4gICAgICAgICAgICAgICAgX3dvcmtlclBvb2wucHVzaCh3b3JrZXJUaHJlYWQpO1xuICAgICAgICAgICAgICAgIGlmIChfd29ya2VyUG9vbC5sZW5ndGggPj0gY2FwYWNpdHkgJiYgY2IpIHtcbiAgICAgICAgICAgICAgICAgICAgY2IoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUXVhZ2dhOyIsImltcG9ydCB7IEJhcmNvZGUsIEJhcmNvZGVJbmZvLCBCYXJjb2RlUmVhZGVyLCBCYXJjb2RlUmVhZGVyQ29uZmlnIH0gZnJvbSAnLi9iYXJjb2RlLXJlYWRlcic7XG5cbmNvbnN0IE4gPSAxO1xuY29uc3QgVyA9IDM7XG5jb25zdCBTVEFSVF9QQVRURVJOID0gW1csIE4sIFcsIE4sIE4sIE5dO1xuY29uc3QgU1RPUF9QQVRURVJOID0gW1csIE4sIE4sIE4sIFddO1xuY29uc3QgQ09ERV9QQVRURVJOID0gW1xuICAgIFtOLCBOLCBXLCBXLCBOXSxcbiAgICBbVywgTiwgTiwgTiwgV10sXG4gICAgW04sIFcsIE4sIE4sIFddLFxuICAgIFtXLCBXLCBOLCBOLCBOXSxcbiAgICBbTiwgTiwgVywgTiwgV10sXG4gICAgW1csIE4sIFcsIE4sIE5dLFxuICAgIFtOLCBXLCBXLCBOLCBOXSxcbiAgICBbTiwgTiwgTiwgVywgV10sXG4gICAgW1csIE4sIE4sIFcsIE5dLFxuICAgIFtOLCBXLCBOLCBXLCBOXVxuXTtcbmNvbnN0IHN0YXJ0UGF0dGVybkxlbmd0aCA9IFNUQVJUX1BBVFRFUk4ucmVkdWNlKChzdW0sIHZhbCkgPT4gc3VtICsgdmFsLCAwKTtcblxuZXhwb3J0IGNsYXNzIFR3b09mRml2ZVJlYWRlciBleHRlbmRzIEJhcmNvZGVSZWFkZXIge1xuICAgIHByaXZhdGUgX2JhclNwYWNlUmF0aW86IFtudW1iZXIsIG51bWJlcl07XG5cbiAgICBjb25zdHJ1Y3Rvcihjb25maWc/OiBCYXJjb2RlUmVhZGVyQ29uZmlnKSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICAgICAgdGhpcy5fYmFyU3BhY2VSYXRpbyA9IFsxLCAxXTtcbiAgICAgICAgdGhpcy5fZm9ybWF0ID0gJzJvZjUnO1xuICAgICAgICB0aGlzLl9zaW5nbGVDb2RlRXJyb3IgPSAwLjc4O1xuICAgICAgICB0aGlzLl9hdmVyYWdlQ29kZUVycm9yID0gMC4zMDtcbiAgICB9XG5cbiAgICBkZWNvZGUoKTogQmFyY29kZSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0SW5mbyA9IHRoaXMuX2ZpbmRTdGFydCgpO1xuXG4gICAgICAgIGlmICghc3RhcnRJbmZvKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGVuZEluZm8gPSB0aGlzLl9maW5kRW5kKCk7XG5cbiAgICAgICAgaWYgKCFlbmRJbmZvKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvdW50ZXJzID0gdGhpcy5fZmlsbENvdW50ZXJzKHN0YXJ0SW5mby5lbmQsIGVuZEluZm8uc3RhcnQsIDApO1xuXG4gICAgICAgIGlmIChjb3VudGVycy5sZW5ndGggJSAxMCAhPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xuICAgICAgICBjb25zdCBkZWNvZGVkQ29kZXMgPSBuZXcgQXJyYXk8QmFyY29kZUluZm8+KCk7XG5cbiAgICAgICAgZGVjb2RlZENvZGVzLnB1c2goc3RhcnRJbmZvKTtcblxuICAgICAgICBjb25zdCBjb2RlID0gdGhpcy5fZGVjb2RlUGF5bG9hZChjb3VudGVycywgcmVzdWx0LCBkZWNvZGVkQ29kZXMpO1xuXG4gICAgICAgIGlmICghY29kZSB8fCByZXN1bHQubGVuZ3RoIDwgNSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBkZWNvZGVkQ29kZXMucHVzaChlbmRJbmZvKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29kZTogcmVzdWx0LmpvaW4oJycpLFxuICAgICAgICAgICAgc3RhcnQ6IHN0YXJ0SW5mby5zdGFydCxcbiAgICAgICAgICAgIGVuZDogZW5kSW5mby5lbmQsXG4gICAgICAgICAgICBzdGFydEluZm8sXG4gICAgICAgICAgICBkZWNvZGVkQ29kZXNcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2ZpbmRTdGFydCgpOiBCYXJjb2RlSW5mbyB7XG4gICAgICAgIGxldCBvZmZzZXQgPSB0aGlzLl9uZXh0U2V0KHRoaXMuX3Jvdyk7XG4gICAgICAgIGxldCBuYXJyb3dCYXJXaWR0aCA9IDE7XG4gICAgICAgIGxldCBzdGFydEluZm86IEJhcmNvZGVJbmZvO1xuXG4gICAgICAgIHdoaWxlICghc3RhcnRJbmZvKSB7XG4gICAgICAgICAgICBzdGFydEluZm8gPSB0aGlzLl9maW5kUGF0dGVybihTVEFSVF9QQVRURVJOLCBvZmZzZXQsIDAsIHRydWUpO1xuXG4gICAgICAgICAgICBpZiAoIXN0YXJ0SW5mbykge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBuYXJyb3dCYXJXaWR0aCA9IChzdGFydEluZm8uZW5kIC0gc3RhcnRJbmZvLnN0YXJ0KSAvIHN0YXJ0UGF0dGVybkxlbmd0aCB8IDA7XG4gICAgICAgICAgICBjb25zdCBsZWFkaW5nV2hpdGVzcGFjZVN0YXJ0ID0gc3RhcnRJbmZvLnN0YXJ0IC0gbmFycm93QmFyV2lkdGggKiA1O1xuXG4gICAgICAgICAgICBpZiAobGVhZGluZ1doaXRlc3BhY2VTdGFydCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX21hdGNoUmFuZ2UobGVhZGluZ1doaXRlc3BhY2VTdGFydCwgc3RhcnRJbmZvLnN0YXJ0LCAwKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RhcnRJbmZvO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgb2Zmc2V0ID0gc3RhcnRJbmZvLmVuZDtcbiAgICAgICAgICAgIHN0YXJ0SW5mbyA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX3ZlcmlmeVRyYWlsaW5nV2hpdGVzcGFjZShlbmRJbmZvOiBCYXJjb2RlSW5mbyk6IEJhcmNvZGVJbmZvIHtcbiAgICAgICAgY29uc3QgdHJhaWxpbmdXaGl0ZXNwYWNlRW5kID0gZW5kSW5mby5lbmQgKyAoZW5kSW5mby5lbmQgLSBlbmRJbmZvLnN0YXJ0KSAvIDI7XG5cbiAgICAgICAgaWYgKHRyYWlsaW5nV2hpdGVzcGFjZUVuZCA8IHRoaXMuX3Jvdy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9tYXRjaFJhbmdlKGVuZEluZm8uZW5kLCB0cmFpbGluZ1doaXRlc3BhY2VFbmQsIDApKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVuZEluZm87XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2ZpbmRFbmQoKTogQmFyY29kZUluZm8ge1xuICAgICAgICB0aGlzLl9yb3cucmV2ZXJzZSgpO1xuXG4gICAgICAgIGNvbnN0IG9mZnNldCA9IHRoaXMuX25leHRTZXQodGhpcy5fcm93KTtcbiAgICAgICAgY29uc3QgZW5kSW5mbyA9IHRoaXMuX2ZpbmRQYXR0ZXJuKFNUT1BfUEFUVEVSTiwgb2Zmc2V0LCAwLCB0cnVlKTtcblxuICAgICAgICB0aGlzLl9yb3cucmV2ZXJzZSgpO1xuXG4gICAgICAgIGlmIChlbmRJbmZvID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHJldmVyc2UgbnVtYmVyc1xuICAgICAgICBjb25zdCBzdGFydCA9IGVuZEluZm8uc3RhcnQ7XG4gICAgICAgIGVuZEluZm8uc3RhcnQgPSB0aGlzLl9yb3cubGVuZ3RoIC0gZW5kSW5mby5lbmQ7XG4gICAgICAgIGVuZEluZm8uZW5kID0gdGhpcy5fcm93Lmxlbmd0aCAtIHN0YXJ0O1xuXG4gICAgICAgIHJldHVybiBlbmRJbmZvICE9PSBudWxsID8gdGhpcy5fdmVyaWZ5VHJhaWxpbmdXaGl0ZXNwYWNlKGVuZEluZm8pIDogbnVsbDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2RlY29kZUNvZGUoY291bnRlcjogUmVhZG9ubHlBcnJheTxudW1iZXI+KTogQmFyY29kZUluZm8ge1xuICAgICAgICBjb25zdCBiZXN0TWF0Y2g6IEJhcmNvZGVJbmZvID0ge1xuICAgICAgICAgICAgZXJyb3I6IE51bWJlci5NQVhfVkFMVUUsXG4gICAgICAgICAgICBjb2RlOiAtMSxcbiAgICAgICAgICAgIHN0YXJ0OiAwLFxuICAgICAgICAgICAgZW5kOiAwXG4gICAgICAgIH07XG5cbiAgICAgICAgZm9yIChsZXQgY29kZSA9IDA7IGNvZGUgPCBDT0RFX1BBVFRFUk4ubGVuZ3RoOyBjb2RlKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGVycm9yID0gdGhpcy5fbWF0Y2hQYXR0ZXJuKGNvdW50ZXIsIENPREVfUEFUVEVSTltjb2RlXSk7XG4gICAgICAgICAgICBpZiAoZXJyb3IgPCBiZXN0TWF0Y2guZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBiZXN0TWF0Y2guY29kZSA9IGNvZGU7XG4gICAgICAgICAgICAgICAgYmVzdE1hdGNoLmVycm9yID0gZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYmVzdE1hdGNoLmVycm9yIDwgdGhpcy5BVkVSQUdFX0NPREVfRVJST1IgPyBiZXN0TWF0Y2ggOiBudWxsO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZGVjb2RlUGF5bG9hZChjb3VudGVyczogUmVhZG9ubHlBcnJheTxudW1iZXI+LCByZXN1bHQ6IEFycmF5PG51bWJlcj4sIGRlY29kZWRDb2RlczogQXJyYXk8QmFyY29kZUluZm8+KTogQmFyY29kZUluZm8ge1xuICAgICAgICBjb25zdCBjb3VudGVyTGVuZ3RoID0gY291bnRlcnMubGVuZ3RoO1xuICAgICAgICBjb25zdCBjb3VudGVyID0gWzAsIDAsIDAsIDAsIDBdO1xuICAgICAgICBsZXQgcG9zID0gMDtcbiAgICAgICAgbGV0IGNvZGU6IEJhcmNvZGVJbmZvO1xuXG4gICAgICAgIHdoaWxlIChwb3MgPCBjb3VudGVyTGVuZ3RoKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvdW50ZXJbaV0gPSBjb3VudGVyc1twb3NdICogdGhpcy5fYmFyU3BhY2VSYXRpb1swXTtcbiAgICAgICAgICAgICAgICBwb3MgKz0gMjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29kZSA9IHRoaXMuX2RlY29kZUNvZGUoY291bnRlcik7XG5cbiAgICAgICAgICAgIGlmICghY29kZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXN1bHQucHVzaChjb2RlLmNvZGUpO1xuICAgICAgICAgICAgZGVjb2RlZENvZGVzLnB1c2goY29kZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29kZTtcbiAgICB9XG59XG4iLCJleHBvcnQgZW51bSBCYXJjb2RlRGlyZWN0aW9uIHtcbiAgICBGb3J3YXJkID0gMSxcbiAgICBSZXZlcnNlID0gLTFcbn07XG5cbmV4cG9ydCB0eXBlIEJhcmNvZGVGb3JtYXQgPSBzdHJpbmc7XG5cbmV4cG9ydCB0eXBlIEJhcmNvZGVSZWFkZXJUeXBlID0gc3RyaW5nO1xuXG5leHBvcnQgdHlwZSBCYXJjb2RlUmVhZGVyRGVjbGFyYXRpb24gPSBCYXJjb2RlUmVhZGVyVHlwZSB8IHsgZm9ybWF0OiBCYXJjb2RlUmVhZGVyVHlwZTsgY29uZmlnOiBCYXJjb2RlUmVhZGVyQ29uZmlnOyB9O1xuXG5leHBvcnQgaW50ZXJmYWNlIEJhcmNvZGVSZWFkZXJDb25maWcge1xuICAgIG5vcm1hbGl6ZUJhclNwYWNlV2lkdGg/OiBib29sZWFuO1xuICAgIHN1cHBsZW1lbnRzPzogQXJyYXk8QmFyY29kZVJlYWRlclR5cGU+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJhcmNvZGVDb3JyZWN0aW9uIHtcbiAgICBiYXI6IG51bWJlcjtcbiAgICBzcGFjZTogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJhcmNvZGVJbmZvIHtcbiAgICBjb2RlPzogbnVtYmVyO1xuICAgIGNvcnJlY3Rpb24/OiBCYXJjb2RlQ29ycmVjdGlvbjtcbiAgICBlbmQ/OiBudW1iZXI7XG4gICAgZW5kQ291bnRlcj86IG51bWJlcjtcbiAgICBlcnJvcj86IG51bWJlcjtcbiAgICBzdGFydD86IG51bWJlcjtcbiAgICBzdGFydENvdW50ZXI/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmFyY29kZSB7XG4gICAgY29kZT86IHN0cmluZztcbiAgICBjb2Rlc2V0PzogbnVtYmVyO1xuICAgIGNvcnJlY3Rpb24/OiBCYXJjb2RlQ29ycmVjdGlvbjtcbiAgICBkZWNvZGVkQ29kZXM/OiBBcnJheTxzdHJpbmcgfCBCYXJjb2RlSW5mbz47XG4gICAgZGlyZWN0aW9uPzogQmFyY29kZURpcmVjdGlvbjtcbiAgICBlbmQ/OiBudW1iZXI7XG4gICAgZW5kSW5mbz86IEJhcmNvZGVJbmZvO1xuICAgIGZvcm1hdD86IEJhcmNvZGVGb3JtYXQ7XG4gICAgc3RhcnQ/OiBudW1iZXI7XG4gICAgc3RhcnRJbmZvPzogQmFyY29kZUluZm87XG4gICAgc3VwcGxlbWVudD86IEJhcmNvZGU7XG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXJjb2RlUmVhZGVyIHtcbiAgICBwcm90ZWN0ZWQgX3NpbmdsZUNvZGVFcnJvcjogbnVtYmVyO1xuICAgIHByb3RlY3RlZCBfYXZlcmFnZUNvZGVFcnJvcjogbnVtYmVyO1xuICAgIHByb3RlY3RlZCBfZm9ybWF0OiBCYXJjb2RlRm9ybWF0O1xuICAgIHByb3RlY3RlZCBfcm93OiBBcnJheTxudW1iZXI+O1xuXG4gICAgY29uZmlnOiBCYXJjb2RlUmVhZGVyQ29uZmlnO1xuICAgIHN1cHBsZW1lbnRzOiBBcnJheTxCYXJjb2RlUmVhZGVyPjtcblxuICAgIHN0YXRpYyBnZXQgRXhjZXB0aW9uKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgU3RhcnROb3RGb3VuZEV4Y2VwdGlvbjogJ1N0YXJ0LUluZm8gd2FzIG5vdCBmb3VuZCEnLFxuICAgICAgICAgICAgQ29kZU5vdEZvdW5kRXhjZXB0aW9uOiAnQ29kZSBjb3VsZCBub3QgYmUgZm91bmQhJyxcbiAgICAgICAgICAgIFBhdHRlcm5Ob3RGb3VuZEV4Y2VwdGlvbjogJ1BhdHRlcm4gY291bGQgbm90IGJlIGZvdW5kISdcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBnZXQgU0lOR0xFX0NPREVfRVJST1IoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpbmdsZUNvZGVFcnJvcjtcbiAgICB9XG5cbiAgICBnZXQgQVZFUkFHRV9DT0RFX0VSUk9SKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hdmVyYWdlQ29kZUVycm9yO1xuICAgIH1cblxuICAgIGdldCBGT1JNQVQoKTogQmFyY29kZUZvcm1hdCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9mb3JtYXQ7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoY29uZmlnPzogQmFyY29kZVJlYWRlckNvbmZpZywgc3VwcGxlbWVudHM/OiBBcnJheTxCYXJjb2RlUmVhZGVyPikge1xuICAgICAgICB0aGlzLl9mb3JtYXQgPSAndW5rbm93bic7XG4gICAgICAgIHRoaXMuX3JvdyA9IFtdO1xuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcbiAgICAgICAgdGhpcy5zdXBwbGVtZW50cyA9IHN1cHBsZW1lbnRzO1xuICAgIH1cblxuICAgIGFic3RyYWN0IGRlY29kZShyb3c/OiBBcnJheTxudW1iZXI+LCBzdGFydD86IG51bWJlcik6IEJhcmNvZGU7XG5cbiAgICBwcm90ZWN0ZWQgX2ZpbmRQYXR0ZXJuKHBhdHRlcm46IFJlYWRvbmx5QXJyYXk8bnVtYmVyPiwgb2Zmc2V0OiBudW1iZXIsIGlzV2hpdGU6IDAgfCAxLCB0cnlIYXJkZXI6IGJvb2xlYW4pOiBCYXJjb2RlSW5mbyB7XG4gICAgICAgIGNvbnN0IGNvdW50ZXIgPSBuZXcgQXJyYXk8bnVtYmVyPihwYXR0ZXJuLmxlbmd0aCk7XG4gICAgICAgIGNvbnN0IGJlc3RNYXRjaDogQmFyY29kZUluZm8gPSB7XG4gICAgICAgICAgICBlcnJvcjogTnVtYmVyLk1BWF9WQUxVRSxcbiAgICAgICAgICAgIGNvZGU6IC0xLFxuICAgICAgICAgICAgc3RhcnQ6IDAsXG4gICAgICAgICAgICBlbmQ6IDBcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgZXBzaWxvbiA9IHRoaXMuQVZFUkFHRV9DT0RFX0VSUk9SO1xuICAgICAgICBsZXQgY291bnRlclBvcyA9IDA7XG5cbiAgICAgICAgaWYgKCFvZmZzZXQpIHtcbiAgICAgICAgICAgIG9mZnNldCA9IHRoaXMuX25leHRTZXQodGhpcy5fcm93KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvdW50ZXIuZmlsbCgwKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gb2Zmc2V0OyBpIDwgdGhpcy5fcm93Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fcm93W2ldIF4gaXNXaGl0ZSkge1xuICAgICAgICAgICAgICAgIGNvdW50ZXJbY291bnRlclBvc10rKztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvdW50ZXJQb3MgPT09IGNvdW50ZXIubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlcnJvciA9IHRoaXMuX21hdGNoUGF0dGVybihjb3VudGVyLCBwYXR0ZXJuKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IgPCBlcHNpbG9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiZXN0TWF0Y2guZXJyb3IgPSBlcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlc3RNYXRjaC5zdGFydCA9IGkgLSBjb3VudGVyLnJlZHVjZSgoc3VtLCB2YWx1ZSkgPT4gc3VtICsgdmFsdWUsIDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmVzdE1hdGNoLmVuZCA9IGk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYmVzdE1hdGNoO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRyeUhhcmRlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb3VudGVyLmxlbmd0aCAtIDI7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ZXJbal0gPSBjb3VudGVyW2ogKyAyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ZXJbY291bnRlci5sZW5ndGggLSAyXSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVyW2NvdW50ZXIubGVuZ3RoIC0gMV0gPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgY291bnRlclBvcy0tO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb3VudGVyUG9zKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvdW50ZXJbY291bnRlclBvc10gPSAxO1xuICAgICAgICAgICAgICAgIGlzV2hpdGUgPSBpc1doaXRlID8gMCA6IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9uZXh0VW5zZXQobGluZTogUmVhZG9ubHlBcnJheTxudW1iZXI+LCBzdGFydD86IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIGZvciAobGV0IGkgPSBzdGFydCB8fCAwOyBpIDwgbGluZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKCFsaW5lW2ldKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxpbmUubGVuZ3RoO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfbmV4dFNldChsaW5lOiBSZWFkb25seUFycmF5PG51bWJlcj4sIHN0YXJ0PzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0IHx8IDA7IGkgPCBsaW5lLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAobGluZVtpXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsaW5lLmxlbmd0aDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX21hdGNoUmFuZ2Uoc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIsIHZhbHVlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0IDwgMCA/IDAgOiBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fcm93W2ldICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX21hdGNoUGF0dGVybihjb3VudGVyOiBSZWFkb25seUFycmF5PG51bWJlcj4sIGNvZGU6IFJlYWRvbmx5QXJyYXk8bnVtYmVyPiwgbWF4U2luZ2xlRXJyb3I/OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICBsZXQgZXJyb3IgPSAwO1xuICAgICAgICBsZXQgc3VtID0gMDtcbiAgICAgICAgbGV0IG1vZHVsbyA9IDA7XG5cbiAgICAgICAgbWF4U2luZ2xlRXJyb3IgPSBtYXhTaW5nbGVFcnJvciB8fCB0aGlzLlNJTkdMRV9DT0RFX0VSUk9SIHx8IDE7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBzdW0gKz0gY291bnRlcltpXTtcbiAgICAgICAgICAgIG1vZHVsbyArPSBjb2RlW2ldO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN1bSA8IG1vZHVsbykge1xuICAgICAgICAgICAgcmV0dXJuIE51bWJlci5NQVhfVkFMVUU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBiYXJXaWR0aCA9IHN1bSAvIG1vZHVsbztcbiAgICAgICAgbWF4U2luZ2xlRXJyb3IgKj0gYmFyV2lkdGg7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBjb3VudCA9IGNvdW50ZXJbaV07XG4gICAgICAgICAgICBjb25zdCBzY2FsZWQgPSBjb2RlW2ldICogYmFyV2lkdGg7XG4gICAgICAgICAgICBjb25zdCBzaW5nbGVFcnJvciA9IE1hdGguYWJzKGNvdW50IC0gc2NhbGVkKSAvIHNjYWxlZDtcblxuICAgICAgICAgICAgaWYgKHNpbmdsZUVycm9yID4gbWF4U2luZ2xlRXJyb3IpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gTnVtYmVyLk1BWF9WQUxVRTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZXJyb3IgKz0gc2luZ2xlRXJyb3I7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZXJyb3IgLyBtb2R1bG87XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9jb3JyZWN0QmFycyhjb3VudGVyOiBBcnJheTxudW1iZXI+LCBjb3JyZWN0aW9uOiBudW1iZXIsIGluZGljZXM6IEFycmF5PG51bWJlcj4pIHtcbiAgICAgICAgbGV0IGxlbmd0aCA9IGluZGljZXMubGVuZ3RoO1xuICAgICAgICBsZXQgdG1wID0gMDtcblxuICAgICAgICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICAgICAgICAgIHRtcCA9IGNvdW50ZXJbaW5kaWNlc1tsZW5ndGhdXSAqICgxIC0gKCgxIC0gY29ycmVjdGlvbikgLyAyKSk7XG4gICAgICAgICAgICBpZiAodG1wID4gMSkge1xuICAgICAgICAgICAgICAgIGNvdW50ZXJbaW5kaWNlc1tsZW5ndGhdXSA9IHRtcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRlY29kZVBhdHRlcm4ocGF0dGVybjogQXJyYXk8bnVtYmVyPik6IEJhcmNvZGUge1xuICAgICAgICB0aGlzLl9yb3cgPSBwYXR0ZXJuO1xuICAgICAgICBsZXQgcmVzdWx0ID0gdGhpcy5kZWNvZGUoKTtcblxuICAgICAgICBpZiAocmVzdWx0ID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLl9yb3cucmV2ZXJzZSgpO1xuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5kZWNvZGUoKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuZGlyZWN0aW9uID0gQmFyY29kZURpcmVjdGlvbi5SZXZlcnNlO1xuICAgICAgICAgICAgICAgIHJlc3VsdC5zdGFydCA9IHRoaXMuX3Jvdy5sZW5ndGggLSByZXN1bHQuc3RhcnQ7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmVuZCA9IHRoaXMuX3Jvdy5sZW5ndGggLSByZXN1bHQuZW5kO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0LmRpcmVjdGlvbiA9IEJhcmNvZGVEaXJlY3Rpb24uRm9yd2FyZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgIHJlc3VsdC5mb3JtYXQgPSB0aGlzLkZPUk1BVDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgX2ZpbGxDb3VudGVycyhvZmZzZXQ6IG51bWJlciwgZW5kOiBudW1iZXIsIGlzV2hpdGU6IDAgfCAxKTogQXJyYXk8bnVtYmVyPiB7XG4gICAgICAgIGNvbnN0IGNvdW50ZXJzID0gbmV3IEFycmF5PG51bWJlcj4oKTtcbiAgICAgICAgbGV0IGNvdW50ZXJQb3MgPSAwO1xuXG4gICAgICAgIGNvdW50ZXJzW2NvdW50ZXJQb3NdID0gMDtcblxuICAgICAgICBmb3IgKGxldCBpID0gb2Zmc2V0OyBpIDwgZW5kOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9yb3dbaV0gXiBpc1doaXRlKSB7XG4gICAgICAgICAgICAgICAgY291bnRlcnNbY291bnRlclBvc10rKztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY291bnRlclBvcysrO1xuICAgICAgICAgICAgICAgIGNvdW50ZXJzW2NvdW50ZXJQb3NdID0gMTtcbiAgICAgICAgICAgICAgICBpc1doaXRlID0gaXNXaGl0ZSA/IDAgOiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvdW50ZXJzO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfdG9Db3VudGVycyhzdGFydDogbnVtYmVyLCBjb3VudGVyczogVWludDE2QXJyYXkpOiBVaW50MTZBcnJheSB7XG4gICAgICAgIGNvbnN0IG51bUNvdW50ZXJzID0gY291bnRlcnMubGVuZ3RoO1xuICAgICAgICBjb25zdCBlbmQgPSB0aGlzLl9yb3cubGVuZ3RoO1xuICAgICAgICBsZXQgaXNXaGl0ZTogMCB8IDEgPSB0aGlzLl9yb3dbc3RhcnRdID8gMCA6IDE7XG4gICAgICAgIGxldCBjb3VudGVyUG9zID0gMDtcblxuICAgICAgICBjb3VudGVycy5maWxsKDApO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fcm93W2ldIF4gaXNXaGl0ZSkge1xuICAgICAgICAgICAgICAgIGNvdW50ZXJzW2NvdW50ZXJQb3NdKys7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvdW50ZXJQb3MrKztcbiAgICAgICAgICAgICAgICBpZiAoY291bnRlclBvcyA9PT0gbnVtQ291bnRlcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnRlcnNbY291bnRlclBvc10gPSAxO1xuICAgICAgICAgICAgICAgICAgICBpc1doaXRlID0gaXNXaGl0ZSA/IDAgOiAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb3VudGVycztcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBCYXJjb2RlLCBCYXJjb2RlSW5mbywgQmFyY29kZVJlYWRlciB9IGZyb20gJy4vYmFyY29kZS1yZWFkZXInO1xuXG5jb25zdCBBTFBIQUJFVEhfU1RSSU5HID0gJzAxMjM0NTY3ODktJDovLitBQkNEJztcbmNvbnN0IEFMUEhBQkVUID0gWy4uLkFMUEhBQkVUSF9TVFJJTkddLm1hcChjaGFyID0+IGNoYXIuY2hhckNvZGVBdCgwKSk7XG4vLyBjb25zdCBBTFBIQUJFVCA9IFs0OCwgNDksIDUwLCA1MSwgNTIsIDUzLCA1NCwgNTUsIDU2LCA1NywgNDUsIDM2LCA1OCwgNDcsIDQ2LCA0MywgNjUsIDY2LCA2NywgNjhdO1xuY29uc3QgQ0hBUkFDVEVSX0VOQ09ESU5HUyA9IFsweDAwMywgMHgwMDYsIDB4MDA5LCAweDA2MCwgMHgwMTIsIDB4MDQyLCAweDAyMSwgMHgwMjQsIDB4MDMwLCAweDA0OCwgMHgwMGMsIDB4MDE4LCAweDA0NSxcbiAgICAweDA1MSwgMHgwNTQsIDB4MDE1LCAweDAxQSwgMHgwMjksIDB4MDBCLCAweDAwRV07XG5jb25zdCBTVEFSVF9FTkQgPSBbMHgwMUEsIDB4MDI5LCAweDAwQiwgMHgwMEVdO1xuY29uc3QgTUlOX0VOQ09ERURfQ0hBUlMgPSA0O1xuY29uc3QgTUFYX0FDQ0VQVEFCTEUgPSAyLjA7XG5jb25zdCBQQURESU5HID0gMS41O1xuXG5pbnRlcmZhY2UgVGhyZXNob2xkIHtcbiAgICBzcGFjZToge1xuICAgICAgICBuYXJyb3c6IHtcbiAgICAgICAgICAgIHNpemU6IG51bWJlcjtcbiAgICAgICAgICAgIGNvdW50czogbnVtYmVyO1xuICAgICAgICAgICAgbWluOiBudW1iZXI7XG4gICAgICAgICAgICBtYXg6IG51bWJlcjtcbiAgICAgICAgfTtcbiAgICAgICAgd2lkZToge1xuICAgICAgICAgICAgc2l6ZTogbnVtYmVyO1xuICAgICAgICAgICAgY291bnRzOiBudW1iZXI7XG4gICAgICAgICAgICBtaW46IG51bWJlcjtcbiAgICAgICAgICAgIG1heDogbnVtYmVyO1xuICAgICAgICB9O1xuICAgIH07XG4gICAgYmFyOiB7XG4gICAgICAgIG5hcnJvdzoge1xuICAgICAgICAgICAgc2l6ZTogbnVtYmVyO1xuICAgICAgICAgICAgY291bnRzOiBudW1iZXI7XG4gICAgICAgICAgICBtaW46IG51bWJlcjtcbiAgICAgICAgICAgIG1heDogbnVtYmVyO1xuICAgICAgICB9O1xuICAgICAgICB3aWRlOiB7XG4gICAgICAgICAgICBzaXplOiBudW1iZXI7XG4gICAgICAgICAgICBjb3VudHM6IG51bWJlcjtcbiAgICAgICAgICAgIG1pbjogbnVtYmVyO1xuICAgICAgICAgICAgbWF4OiBudW1iZXI7XG4gICAgICAgIH07XG4gICAgfTtcbn1cblxuZXhwb3J0IGNsYXNzIENvZGFiYXJSZWFkZXIgZXh0ZW5kcyBCYXJjb2RlUmVhZGVyIHtcbiAgICBwcml2YXRlIF9jb3VudGVyczogQXJyYXk8bnVtYmVyPjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuX2Zvcm1hdCA9ICdjb2RhYmFyJztcbiAgICAgICAgdGhpcy5fY291bnRlcnMgPSBbXTtcbiAgICB9XG5cbiAgICBkZWNvZGUoKTogQmFyY29kZSB7XG4gICAgICAgIHRoaXMuX2NvdW50ZXJzID0gdGhpcy5fZmlsbENvdW50ZXJzKHRoaXMuX25leHRVbnNldCh0aGlzLl9yb3cpLCB0aGlzLl9yb3cubGVuZ3RoLCAxKTtcblxuICAgICAgICBjb25zdCBzdGFydCA9IHRoaXMuX2ZpbmRTdGFydCgpO1xuICAgICAgICBpZiAoIXN0YXJ0KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBBcnJheTxzdHJpbmc+KCk7XG4gICAgICAgIGxldCBuZXh0U3RhcnQgPSBzdGFydC5zdGFydENvdW50ZXI7XG4gICAgICAgIGxldCBwYXR0ZXJuOiBudW1iZXI7XG5cbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgcGF0dGVybiA9IHRoaXMuX3RvUGF0dGVybihuZXh0U3RhcnQpO1xuICAgICAgICAgICAgaWYgKHBhdHRlcm4gPCAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBkZWNvZGVkQ2hhciA9IHRoaXMuX3BhdHRlcm5Ub0NoYXIocGF0dGVybik7XG4gICAgICAgICAgICBpZiAoZGVjb2RlZENoYXIgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGRlY29kZWRDaGFyKTtcbiAgICAgICAgICAgIG5leHRTdGFydCArPSA4O1xuICAgICAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGggPiAxICYmIFNUQVJUX0VORC5zb21lKGNvZGUgPT4gY29kZSA9PT0gcGF0dGVybikpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSB3aGlsZSAobmV4dFN0YXJ0IDwgdGhpcy5fY291bnRlcnMubGVuZ3RoKTtcblxuICAgICAgICAvLyB2ZXJpZnkgZW5kXG4gICAgICAgIGlmICgocmVzdWx0Lmxlbmd0aCAtIDIpIDwgTUlOX0VOQ09ERURfQ0hBUlMgfHwgIVNUQVJUX0VORC5zb21lKGNvZGUgPT4gY29kZSA9PT0gcGF0dGVybikpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdmVyaWZ5IGVuZCB3aGl0ZSBzcGFjZVxuICAgICAgICBpZiAoIXRoaXMuX3ZlcmlmeVdoaXRlc3BhY2Uoc3RhcnQuc3RhcnRDb3VudGVyLCBuZXh0U3RhcnQgLSA4KSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuX3ZhbGlkYXRlUmVzdWx0KHJlc3VsdCwgc3RhcnQuc3RhcnRDb3VudGVyKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBuZXh0U3RhcnQgPSBuZXh0U3RhcnQgPiB0aGlzLl9jb3VudGVycy5sZW5ndGggPyB0aGlzLl9jb3VudGVycy5sZW5ndGggOiBuZXh0U3RhcnQ7XG4gICAgICAgIGNvbnN0IGVuZCA9IHN0YXJ0LnN0YXJ0ICsgdGhpcy5fc3VtQ291bnRlcnMoc3RhcnQuc3RhcnRDb3VudGVyLCBuZXh0U3RhcnQgLSA4KTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29kZTogcmVzdWx0LmpvaW4oJycpLFxuICAgICAgICAgICAgc3RhcnQ6IHN0YXJ0LnN0YXJ0LFxuICAgICAgICAgICAgZW5kLFxuICAgICAgICAgICAgc3RhcnRJbmZvOiBzdGFydCxcbiAgICAgICAgICAgIGRlY29kZWRDb2RlczogcmVzdWx0XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF92ZXJpZnlXaGl0ZXNwYWNlKHN0YXJ0Q291bnRlcjogbnVtYmVyLCBlbmRDb3VudGVyOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKChzdGFydENvdW50ZXIgLSAxIDw9IDApXG4gICAgICAgICAgICB8fCB0aGlzLl9jb3VudGVyc1tzdGFydENvdW50ZXIgLSAxXSA+PSAodGhpcy5fY2FsY3VsYXRlUGF0dGVybkxlbmd0aChzdGFydENvdW50ZXIpIC8gMi4wKSkge1xuICAgICAgICAgICAgaWYgKChlbmRDb3VudGVyICsgOCA+PSB0aGlzLl9jb3VudGVycy5sZW5ndGgpXG4gICAgICAgICAgICAgICAgfHwgdGhpcy5fY291bnRlcnNbZW5kQ291bnRlciArIDddID49ICh0aGlzLl9jYWxjdWxhdGVQYXR0ZXJuTGVuZ3RoKGVuZENvdW50ZXIpIC8gMi4wKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2NhbGN1bGF0ZVBhdHRlcm5MZW5ndGgob2Zmc2V0OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICBsZXQgc3VtID0gMDtcblxuICAgICAgICBmb3IgKGxldCBpID0gb2Zmc2V0OyBpIDwgb2Zmc2V0ICsgNzsgaSsrKSB7XG4gICAgICAgICAgICBzdW0gKz0gdGhpcy5fY291bnRlcnNbaV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VtO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3RocmVzaG9sZFJlc3VsdFBhdHRlcm4ocmVzdWx0OiBSZWFkb25seUFycmF5PHN0cmluZz4sIHN0YXJ0Q291bnRlcjogbnVtYmVyKTogVGhyZXNob2xkIHtcbiAgICAgICAgY29uc3QgY2F0ZWdvcml6YXRpb246IFRocmVzaG9sZCA9IHtcbiAgICAgICAgICAgIHNwYWNlOiB7XG4gICAgICAgICAgICAgICAgbmFycm93OiB7IHNpemU6IDAsIGNvdW50czogMCwgbWluOiAwLCBtYXg6IE51bWJlci5NQVhfVkFMVUUgfSxcbiAgICAgICAgICAgICAgICB3aWRlOiB7IHNpemU6IDAsIGNvdW50czogMCwgbWluOiAwLCBtYXg6IE51bWJlci5NQVhfVkFMVUUgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJhcjoge1xuICAgICAgICAgICAgICAgIG5hcnJvdzogeyBzaXplOiAwLCBjb3VudHM6IDAsIG1pbjogMCwgbWF4OiBOdW1iZXIuTUFYX1ZBTFVFIH0sXG4gICAgICAgICAgICAgICAgd2lkZTogeyBzaXplOiAwLCBjb3VudHM6IDAsIG1pbjogMCwgbWF4OiBOdW1iZXIuTUFYX1ZBTFVFIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgbGV0IHBvcyA9IHN0YXJ0Q291bnRlcjtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHBhdHRlcm4gPSB0aGlzLl9jaGFyVG9QYXR0ZXJuKHJlc3VsdFtpXSk7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGogPSA2OyBqID49IDA7IGotLSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGtpbmQgPSAoaiAmIDEpID09PSAyID8gY2F0ZWdvcml6YXRpb24uYmFyIDogY2F0ZWdvcml6YXRpb24uc3BhY2U7XG4gICAgICAgICAgICAgICAgY29uc3QgY2F0ID0gKHBhdHRlcm4gJiAxKSA9PT0gMSA/IGtpbmQud2lkZSA6IGtpbmQubmFycm93O1xuICAgICAgICAgICAgICAgIGNhdC5zaXplICs9IHRoaXMuX2NvdW50ZXJzW3BvcyArIGpdO1xuICAgICAgICAgICAgICAgIGNhdC5jb3VudHMrKztcbiAgICAgICAgICAgICAgICBwYXR0ZXJuID4+PSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcG9zICs9IDg7XG4gICAgICAgIH1cblxuICAgICAgICBbJ3NwYWNlJywgJ2JhciddLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGtpbmQgPSBjYXRlZ29yaXphdGlvbltrZXldO1xuICAgICAgICAgICAga2luZC53aWRlLm1pbiA9IE1hdGguZmxvb3IoKGtpbmQubmFycm93LnNpemUgLyBraW5kLm5hcnJvdy5jb3VudHMgKyBraW5kLndpZGUuc2l6ZSAvIGtpbmQud2lkZS5jb3VudHMpIC8gMik7XG4gICAgICAgICAgICBraW5kLm5hcnJvdy5tYXggPSBNYXRoLmNlaWwoa2luZC53aWRlLm1pbik7XG4gICAgICAgICAgICBraW5kLndpZGUubWF4ID0gTWF0aC5jZWlsKChraW5kLndpZGUuc2l6ZSAqIE1BWF9BQ0NFUFRBQkxFICsgUEFERElORykgLyBraW5kLndpZGUuY291bnRzKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGNhdGVnb3JpemF0aW9uO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2NoYXJUb1BhdHRlcm4oY2hhcjogc3RyaW5nKTogbnVtYmVyIHtcbiAgICAgICAgY29uc3QgY2hhckNvZGUgPSBjaGFyLmNoYXJDb2RlQXQoMCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBBTFBIQUJFVC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKEFMUEhBQkVUW2ldID09PSBjaGFyQ29kZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBDSEFSQUNURVJfRU5DT0RJTkdTW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIDB4MDtcbiAgICB9XG5cbiAgICBwcml2YXRlIF92YWxpZGF0ZVJlc3VsdChyZXN1bHQ6IFJlYWRvbmx5QXJyYXk8c3RyaW5nPiwgc3RhcnRDb3VudGVyOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgdGhyZXNob2xkID0gdGhpcy5fdGhyZXNob2xkUmVzdWx0UGF0dGVybihyZXN1bHQsIHN0YXJ0Q291bnRlcik7XG4gICAgICAgIGxldCBwb3MgPSBzdGFydENvdW50ZXI7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBwYXR0ZXJuID0gdGhpcy5fY2hhclRvUGF0dGVybihyZXN1bHRbaV0pO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gNjsgaiA+PSAwOyBqLS0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBraW5kID0gKGogJiAxKSA9PT0gMCA/IHRocmVzaG9sZC5iYXIgOiB0aHJlc2hvbGQuc3BhY2U7XG4gICAgICAgICAgICAgICAgY29uc3QgY2F0ID0gKHBhdHRlcm4gJiAxKSA9PT0gMSA/IGtpbmQud2lkZSA6IGtpbmQubmFycm93O1xuICAgICAgICAgICAgICAgIGNvbnN0IHNpemUgPSB0aGlzLl9jb3VudGVyc1twb3MgKyBqXTtcbiAgICAgICAgICAgICAgICBpZiAoc2l6ZSA8IGNhdC5taW4gfHwgc2l6ZSA+IGNhdC5tYXgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXR0ZXJuID4+PSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcG9zICs9IDg7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9wYXR0ZXJuVG9DaGFyKHBhdHRlcm46IG51bWJlcik6IHN0cmluZyB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQ0hBUkFDVEVSX0VOQ09ESU5HUy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKENIQVJBQ1RFUl9FTkNPRElOR1NbaV0gPT09IHBhdHRlcm4pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShBTFBIQUJFVFtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9jb21wdXRlQWx0ZXJuYXRpbmdUaHJlc2hvbGQob2Zmc2V0OiBudW1iZXIsIGVuZDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgbGV0IG1pbiA9IE51bWJlci5NQVhfVkFMVUU7XG4gICAgICAgIGxldCBtYXggPSAwO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSBvZmZzZXQ7IGkgPCBlbmQ7IGkgKz0gMikge1xuICAgICAgICAgICAgY29uc3QgY291bnRlciA9IHRoaXMuX2NvdW50ZXJzW2ldO1xuICAgICAgICAgICAgaWYgKGNvdW50ZXIgPiBtYXgpIHtcbiAgICAgICAgICAgICAgICBtYXggPSBjb3VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvdW50ZXIgPCBtaW4pIHtcbiAgICAgICAgICAgICAgICBtaW4gPSBjb3VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICgobWluICsgbWF4KSAvIDIuMCkgfCAwO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3RvUGF0dGVybihvZmZzZXQ6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIGNvbnN0IG51bUNvdW50ZXJzID0gNztcbiAgICAgICAgY29uc3QgZW5kID0gb2Zmc2V0ICsgbnVtQ291bnRlcnM7XG5cbiAgICAgICAgaWYgKGVuZCA+IHRoaXMuX2NvdW50ZXJzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYmFyVGhyZXNob2xkID0gdGhpcy5fY29tcHV0ZUFsdGVybmF0aW5nVGhyZXNob2xkKG9mZnNldCwgZW5kKTtcbiAgICAgICAgY29uc3Qgc3BhY2VUaHJlc2hvbGQgPSB0aGlzLl9jb21wdXRlQWx0ZXJuYXRpbmdUaHJlc2hvbGQob2Zmc2V0ICsgMSwgZW5kKTtcbiAgICAgICAgbGV0IGJpdG1hc2sgPSAxIDw8IChudW1Db3VudGVycyAtIDEpO1xuICAgICAgICBsZXQgcGF0dGVybiA9IDA7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1Db3VudGVyczsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCB0aHJlc2hvbGQgPSAoaSAmIDEpID09PSAwID8gYmFyVGhyZXNob2xkIDogc3BhY2VUaHJlc2hvbGQ7XG4gICAgICAgICAgICBpZiAodGhpcy5fY291bnRlcnNbb2Zmc2V0ICsgaV0gPiB0aHJlc2hvbGQpIHtcbiAgICAgICAgICAgICAgICBwYXR0ZXJuIHw9IGJpdG1hc2s7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBiaXRtYXNrID4+PSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhdHRlcm47XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfc3VtQ291bnRlcnMoc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICBsZXQgc3VtID0gMDtcblxuICAgICAgICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xuICAgICAgICAgICAgc3VtICs9IHRoaXMuX2NvdW50ZXJzW2ldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1bTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2ZpbmRTdGFydCgpOiBCYXJjb2RlSW5mbyB7XG4gICAgICAgIGxldCBzdGFydCA9IHRoaXMuX25leHRVbnNldCh0aGlzLl9yb3cpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdGhpcy5fY291bnRlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHBhdHRlcm4gPSB0aGlzLl90b1BhdHRlcm4oaSk7XG4gICAgICAgICAgICBpZiAocGF0dGVybiAhPT0gLTEgJiYgU1RBUlRfRU5ELnNvbWUoY29kZSA9PiBjb2RlID09PSBwYXR0ZXJuKSkge1xuICAgICAgICAgICAgICAgIC8vIFRPRE86IExvb2sgZm9yIHdoaXRlc3BhY2UgYWhlYWRcbiAgICAgICAgICAgICAgICBzdGFydCArPSB0aGlzLl9zdW1Db3VudGVycygwLCBpKTtcbiAgICAgICAgICAgICAgICBjb25zdCBlbmQgPSBzdGFydCArIHRoaXMuX3N1bUNvdW50ZXJzKGksIGkgKyA4KTtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBzdGFydCxcbiAgICAgICAgICAgICAgICAgICAgZW5kLFxuICAgICAgICAgICAgICAgICAgICBzdGFydENvdW50ZXI6IGksXG4gICAgICAgICAgICAgICAgICAgIGVuZENvdW50ZXI6IGkgKyA4XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEJhcmNvZGUsIEJhcmNvZGVDb3JyZWN0aW9uLCBCYXJjb2RlSW5mbywgQmFyY29kZVJlYWRlciB9IGZyb20gJy4vYmFyY29kZS1yZWFkZXInO1xuXG5jb25zdCBDT0RFX1NISUZUID0gOTg7XG5jb25zdCBDT0RFX0MgPSA5OTtcbmNvbnN0IENPREVfQiA9IDEwMDtcbmNvbnN0IENPREVfQSA9IDEwMTtcbmNvbnN0IFNUQVJUX0NPREVfQSA9IDEwMztcbmNvbnN0IFNUQVJUX0NPREVfQiA9IDEwNDtcbmNvbnN0IFNUQVJUX0NPREVfQyA9IDEwNTtcbmNvbnN0IFNUT1BfQ09ERSA9IDEwNjtcbmNvbnN0IENPREVfUEFUVEVSTiA9IFtcbiAgICBbMiwgMSwgMiwgMiwgMiwgMl0sXG4gICAgWzIsIDIsIDIsIDEsIDIsIDJdLFxuICAgIFsyLCAyLCAyLCAyLCAyLCAxXSxcbiAgICBbMSwgMiwgMSwgMiwgMiwgM10sXG4gICAgWzEsIDIsIDEsIDMsIDIsIDJdLFxuICAgIFsxLCAzLCAxLCAyLCAyLCAyXSxcbiAgICBbMSwgMiwgMiwgMiwgMSwgM10sXG4gICAgWzEsIDIsIDIsIDMsIDEsIDJdLFxuICAgIFsxLCAzLCAyLCAyLCAxLCAyXSxcbiAgICBbMiwgMiwgMSwgMiwgMSwgM10sXG4gICAgWzIsIDIsIDEsIDMsIDEsIDJdLFxuICAgIFsyLCAzLCAxLCAyLCAxLCAyXSxcbiAgICBbMSwgMSwgMiwgMiwgMywgMl0sXG4gICAgWzEsIDIsIDIsIDEsIDMsIDJdLFxuICAgIFsxLCAyLCAyLCAyLCAzLCAxXSxcbiAgICBbMSwgMSwgMywgMiwgMiwgMl0sXG4gICAgWzEsIDIsIDMsIDEsIDIsIDJdLFxuICAgIFsxLCAyLCAzLCAyLCAyLCAxXSxcbiAgICBbMiwgMiwgMywgMiwgMSwgMV0sXG4gICAgWzIsIDIsIDEsIDEsIDMsIDJdLFxuICAgIFsyLCAyLCAxLCAyLCAzLCAxXSxcbiAgICBbMiwgMSwgMywgMiwgMSwgMl0sXG4gICAgWzIsIDIsIDMsIDEsIDEsIDJdLFxuICAgIFszLCAxLCAyLCAxLCAzLCAxXSxcbiAgICBbMywgMSwgMSwgMiwgMiwgMl0sXG4gICAgWzMsIDIsIDEsIDEsIDIsIDJdLFxuICAgIFszLCAyLCAxLCAyLCAyLCAxXSxcbiAgICBbMywgMSwgMiwgMiwgMSwgMl0sXG4gICAgWzMsIDIsIDIsIDEsIDEsIDJdLFxuICAgIFszLCAyLCAyLCAyLCAxLCAxXSxcbiAgICBbMiwgMSwgMiwgMSwgMiwgM10sXG4gICAgWzIsIDEsIDIsIDMsIDIsIDFdLFxuICAgIFsyLCAzLCAyLCAxLCAyLCAxXSxcbiAgICBbMSwgMSwgMSwgMywgMiwgM10sXG4gICAgWzEsIDMsIDEsIDEsIDIsIDNdLFxuICAgIFsxLCAzLCAxLCAzLCAyLCAxXSxcbiAgICBbMSwgMSwgMiwgMywgMSwgM10sXG4gICAgWzEsIDMsIDIsIDEsIDEsIDNdLFxuICAgIFsxLCAzLCAyLCAzLCAxLCAxXSxcbiAgICBbMiwgMSwgMSwgMywgMSwgM10sXG4gICAgWzIsIDMsIDEsIDEsIDEsIDNdLFxuICAgIFsyLCAzLCAxLCAzLCAxLCAxXSxcbiAgICBbMSwgMSwgMiwgMSwgMywgM10sXG4gICAgWzEsIDEsIDIsIDMsIDMsIDFdLFxuICAgIFsxLCAzLCAyLCAxLCAzLCAxXSxcbiAgICBbMSwgMSwgMywgMSwgMiwgM10sXG4gICAgWzEsIDEsIDMsIDMsIDIsIDFdLFxuICAgIFsxLCAzLCAzLCAxLCAyLCAxXSxcbiAgICBbMywgMSwgMywgMSwgMiwgMV0sXG4gICAgWzIsIDEsIDEsIDMsIDMsIDFdLFxuICAgIFsyLCAzLCAxLCAxLCAzLCAxXSxcbiAgICBbMiwgMSwgMywgMSwgMSwgM10sXG4gICAgWzIsIDEsIDMsIDMsIDEsIDFdLFxuICAgIFsyLCAxLCAzLCAxLCAzLCAxXSxcbiAgICBbMywgMSwgMSwgMSwgMiwgM10sXG4gICAgWzMsIDEsIDEsIDMsIDIsIDFdLFxuICAgIFszLCAzLCAxLCAxLCAyLCAxXSxcbiAgICBbMywgMSwgMiwgMSwgMSwgM10sXG4gICAgWzMsIDEsIDIsIDMsIDEsIDFdLFxuICAgIFszLCAzLCAyLCAxLCAxLCAxXSxcbiAgICBbMywgMSwgNCwgMSwgMSwgMV0sXG4gICAgWzIsIDIsIDEsIDQsIDEsIDFdLFxuICAgIFs0LCAzLCAxLCAxLCAxLCAxXSxcbiAgICBbMSwgMSwgMSwgMiwgMiwgNF0sXG4gICAgWzEsIDEsIDEsIDQsIDIsIDJdLFxuICAgIFsxLCAyLCAxLCAxLCAyLCA0XSxcbiAgICBbMSwgMiwgMSwgNCwgMiwgMV0sXG4gICAgWzEsIDQsIDEsIDEsIDIsIDJdLFxuICAgIFsxLCA0LCAxLCAyLCAyLCAxXSxcbiAgICBbMSwgMSwgMiwgMiwgMSwgNF0sXG4gICAgWzEsIDEsIDIsIDQsIDEsIDJdLFxuICAgIFsxLCAyLCAyLCAxLCAxLCA0XSxcbiAgICBbMSwgMiwgMiwgNCwgMSwgMV0sXG4gICAgWzEsIDQsIDIsIDEsIDEsIDJdLFxuICAgIFsxLCA0LCAyLCAyLCAxLCAxXSxcbiAgICBbMiwgNCwgMSwgMiwgMSwgMV0sXG4gICAgWzIsIDIsIDEsIDEsIDEsIDRdLFxuICAgIFs0LCAxLCAzLCAxLCAxLCAxXSxcbiAgICBbMiwgNCwgMSwgMSwgMSwgMl0sXG4gICAgWzEsIDMsIDQsIDEsIDEsIDFdLFxuICAgIFsxLCAxLCAxLCAyLCA0LCAyXSxcbiAgICBbMSwgMiwgMSwgMSwgNCwgMl0sXG4gICAgWzEsIDIsIDEsIDIsIDQsIDFdLFxuICAgIFsxLCAxLCA0LCAyLCAxLCAyXSxcbiAgICBbMSwgMiwgNCwgMSwgMSwgMl0sXG4gICAgWzEsIDIsIDQsIDIsIDEsIDFdLFxuICAgIFs0LCAxLCAxLCAyLCAxLCAyXSxcbiAgICBbNCwgMiwgMSwgMSwgMSwgMl0sXG4gICAgWzQsIDIsIDEsIDIsIDEsIDFdLFxuICAgIFsyLCAxLCAyLCAxLCA0LCAxXSxcbiAgICBbMiwgMSwgNCwgMSwgMiwgMV0sXG4gICAgWzQsIDEsIDIsIDEsIDIsIDFdLFxuICAgIFsxLCAxLCAxLCAxLCA0LCAzXSxcbiAgICBbMSwgMSwgMSwgMywgNCwgMV0sXG4gICAgWzEsIDMsIDEsIDEsIDQsIDFdLFxuICAgIFsxLCAxLCA0LCAxLCAxLCAzXSxcbiAgICBbMSwgMSwgNCwgMywgMSwgMV0sXG4gICAgWzQsIDEsIDEsIDEsIDEsIDNdLFxuICAgIFs0LCAxLCAxLCAzLCAxLCAxXSxcbiAgICBbMSwgMSwgMywgMSwgNCwgMV0sXG4gICAgWzEsIDEsIDQsIDEsIDMsIDFdLFxuICAgIFszLCAxLCAxLCAxLCA0LCAxXSxcbiAgICBbNCwgMSwgMSwgMSwgMywgMV0sXG4gICAgWzIsIDEsIDEsIDQsIDEsIDJdLFxuICAgIFsyLCAxLCAxLCAyLCAxLCA0XSxcbiAgICBbMiwgMSwgMSwgMiwgMywgMl0sXG4gICAgWzIsIDMsIDMsIDEsIDEsIDEsIDJdXG5dO1xuY29uc3QgTU9EVUxFX0lORElDRVMgPSB7IGJhcjogWzAsIDIsIDRdLCBzcGFjZTogWzEsIDMsIDVdIH07XG5cbmV4cG9ydCBjbGFzcyBDb2RlMTI4UmVhZGVyIGV4dGVuZHMgQmFyY29kZVJlYWRlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5fZm9ybWF0ID0gJ2NvZGVfMTI4JztcbiAgICAgICAgdGhpcy5fc2luZ2xlQ29kZUVycm9yID0gMC42NDtcbiAgICAgICAgdGhpcy5fYXZlcmFnZUNvZGVFcnJvciA9IDAuMzA7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9kZWNvZGVDb2RlKHN0YXJ0OiBudW1iZXIsIGNvcnJlY3Rpb246IEJhcmNvZGVDb3JyZWN0aW9uKTogQmFyY29kZUluZm8ge1xuICAgICAgICBjb25zdCBjb3VudGVyID0gWzAsIDAsIDAsIDAsIDAsIDBdO1xuICAgICAgICBjb25zdCBvZmZzZXQgPSBzdGFydDtcbiAgICAgICAgY29uc3QgYmVzdE1hdGNoOiBCYXJjb2RlSW5mbyA9IHtcbiAgICAgICAgICAgIGVycm9yOiBOdW1iZXIuTUFYX1ZBTFVFLFxuICAgICAgICAgICAgY29kZTogLTEsXG4gICAgICAgICAgICBzdGFydDogc3RhcnQsXG4gICAgICAgICAgICBlbmQ6IHN0YXJ0LFxuICAgICAgICAgICAgY29ycmVjdGlvbjoge1xuICAgICAgICAgICAgICAgIGJhcjogMSxcbiAgICAgICAgICAgICAgICBzcGFjZTogMVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBlcHNpbG9uID0gdGhpcy5BVkVSQUdFX0NPREVfRVJST1I7XG4gICAgICAgIGxldCBpc1doaXRlOiAwIHwgMSA9IHRoaXMuX3Jvd1tvZmZzZXRdID8gMCA6IDE7XG4gICAgICAgIGxldCBjb3VudGVyUG9zID0gMDtcblxuICAgICAgICBmb3IgKGxldCBpID0gb2Zmc2V0OyBpIDwgdGhpcy5fcm93Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fcm93W2ldIF4gaXNXaGl0ZSkge1xuICAgICAgICAgICAgICAgIGNvdW50ZXJbY291bnRlclBvc10rKztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvdW50ZXJQb3MgPT09IGNvdW50ZXIubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29ycmVjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY29ycmVjdChjb3VudGVyLCBjb3JyZWN0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGNvZGUgPSAwOyBjb2RlIDwgQ09ERV9QQVRURVJOLmxlbmd0aDsgY29kZSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlcnJvciA9IHRoaXMuX21hdGNoUGF0dGVybihjb3VudGVyLCBDT0RFX1BBVFRFUk5bY29kZV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yIDwgYmVzdE1hdGNoLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVzdE1hdGNoLmNvZGUgPSBjb2RlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlc3RNYXRjaC5lcnJvciA9IGVycm9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYmVzdE1hdGNoLmVuZCA9IGk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGJlc3RNYXRjaC5jb2RlID09PSAtMSB8fCBiZXN0TWF0Y2guZXJyb3IgPiBlcHNpbG9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGV4cGVjdGVkID0gQ09ERV9QQVRURVJOW2Jlc3RNYXRjaC5jb2RlXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV4cGVjdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiZXN0TWF0Y2guY29ycmVjdGlvbi5iYXIgPSB0aGlzLl9jYWxjdWxhdGVDb3JyZWN0aW9uKGV4cGVjdGVkLCBjb3VudGVyLCBNT0RVTEVfSU5ESUNFUy5iYXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmVzdE1hdGNoLmNvcnJlY3Rpb24uc3BhY2UgPSB0aGlzLl9jYWxjdWxhdGVDb3JyZWN0aW9uKGV4cGVjdGVkLCBjb3VudGVyLCBNT0RVTEVfSU5ESUNFUy5zcGFjZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYmVzdE1hdGNoO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXJQb3MrKztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb3VudGVyW2NvdW50ZXJQb3NdID0gMTtcbiAgICAgICAgICAgICAgICBpc1doaXRlID0gaXNXaGl0ZSA/IDAgOiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfY29ycmVjdChjb3VudGVyOiBBcnJheTxudW1iZXI+LCBjb3JyZWN0aW9uOiBCYXJjb2RlQ29ycmVjdGlvbik6IHZvaWQge1xuICAgICAgICB0aGlzLl9jb3JyZWN0QmFycyhjb3VudGVyLCBjb3JyZWN0aW9uLmJhciwgTU9EVUxFX0lORElDRVMuYmFyKTtcbiAgICAgICAgdGhpcy5fY29ycmVjdEJhcnMoY291bnRlciwgY29ycmVjdGlvbi5zcGFjZSwgTU9EVUxFX0lORElDRVMuc3BhY2UpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZmluZFN0YXJ0KCkge1xuICAgICAgICBjb25zdCBjb3VudGVyID0gWzAsIDAsIDAsIDAsIDAsIDBdO1xuICAgICAgICBjb25zdCBvZmZzZXQgPSB0aGlzLl9uZXh0U2V0KHRoaXMuX3Jvdyk7XG4gICAgICAgIGNvbnN0IGJlc3RNYXRjaCA9IHtcbiAgICAgICAgICAgIGVycm9yOiBOdW1iZXIuTUFYX1ZBTFVFLFxuICAgICAgICAgICAgY29kZTogLTEsXG4gICAgICAgICAgICBzdGFydDogMCxcbiAgICAgICAgICAgIGVuZDogMCxcbiAgICAgICAgICAgIGNvcnJlY3Rpb246IHtcbiAgICAgICAgICAgICAgICBiYXI6IDEsXG4gICAgICAgICAgICAgICAgc3BhY2U6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgZXBzaWxvbiA9IHRoaXMuQVZFUkFHRV9DT0RFX0VSUk9SO1xuICAgICAgICBsZXQgaXNXaGl0ZTogMCB8IDEgPSAwO1xuICAgICAgICBsZXQgY291bnRlclBvcyA9IDA7XG4gICAgICAgIGxldCBzdW06IG51bWJlcjtcblxuICAgICAgICBmb3IgKGxldCBpID0gb2Zmc2V0OyBpIDwgdGhpcy5fcm93Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fcm93W2ldIF4gaXNXaGl0ZSkge1xuICAgICAgICAgICAgICAgIGNvdW50ZXJbY291bnRlclBvc10rKztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvdW50ZXJQb3MgPT09IGNvdW50ZXIubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICBzdW0gPSAwO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvdW50ZXIubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1bSArPSBjb3VudGVyW2pdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGNvZGUgPSBTVEFSVF9DT0RFX0E7IGNvZGUgPD0gU1RBUlRfQ09ERV9DOyBjb2RlKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yID0gdGhpcy5fbWF0Y2hQYXR0ZXJuKGNvdW50ZXIsIENPREVfUEFUVEVSTltjb2RlXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IgPCBiZXN0TWF0Y2guZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZXN0TWF0Y2guY29kZSA9IGNvZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVzdE1hdGNoLmVycm9yID0gZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGJlc3RNYXRjaC5lcnJvciA8IGVwc2lsb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlc3RNYXRjaC5zdGFydCA9IGkgLSBzdW07XG4gICAgICAgICAgICAgICAgICAgICAgICBiZXN0TWF0Y2guZW5kID0gaTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlc3RNYXRjaC5jb3JyZWN0aW9uLmJhciA9IHRoaXMuX2NhbGN1bGF0ZUNvcnJlY3Rpb24oQ09ERV9QQVRURVJOW2Jlc3RNYXRjaC5jb2RlXSwgY291bnRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNT0RVTEVfSU5ESUNFUy5iYXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmVzdE1hdGNoLmNvcnJlY3Rpb24uc3BhY2UgPSB0aGlzLl9jYWxjdWxhdGVDb3JyZWN0aW9uKENPREVfUEFUVEVSTltiZXN0TWF0Y2guY29kZV0sIGNvdW50ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTU9EVUxFX0lORElDRVMuc3BhY2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJlc3RNYXRjaDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgNDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVyW2pdID0gY291bnRlcltqICsgMl07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY291bnRlcls0XSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXJbNV0gPSAwO1xuICAgICAgICAgICAgICAgICAgICBjb3VudGVyUG9zLS07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnRlclBvcysrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb3VudGVyW2NvdW50ZXJQb3NdID0gMTtcbiAgICAgICAgICAgICAgICBpc1doaXRlID0gaXNXaGl0ZSA/IDAgOiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgZGVjb2RlKCk6IEJhcmNvZGUge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgQXJyYXk8c3RyaW5nIHwgbnVtYmVyPigpO1xuICAgICAgICBjb25zdCBzdGFydEluZm8gPSB0aGlzLl9maW5kU3RhcnQoKTtcbiAgICAgICAgbGV0IGNvZGU6IEJhcmNvZGVJbmZvID0gbnVsbDtcbiAgICAgICAgbGV0IGRvbmUgPSBmYWxzZTtcbiAgICAgICAgbGV0IG11bHRpcGxpZXIgPSAwO1xuICAgICAgICBsZXQgY2hlY2tzdW0gPSAwO1xuICAgICAgICBsZXQgY29kZXNldDogbnVtYmVyO1xuICAgICAgICBsZXQgcmF3UmVzdWx0ID0gbmV3IEFycmF5PG51bWJlcj4oKTtcbiAgICAgICAgbGV0IGRlY29kZWRDb2RlcyA9IG5ldyBBcnJheTxCYXJjb2RlSW5mbz4oKTtcbiAgICAgICAgbGV0IHNoaWZ0TmV4dCA9IGZhbHNlO1xuICAgICAgICBsZXQgdW5zaGlmdDogYm9vbGVhbjtcbiAgICAgICAgbGV0IHJlbW92ZUxhc3RDaGFyYWN0ZXIgPSB0cnVlO1xuXG4gICAgICAgIGlmIChzdGFydEluZm8gPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvZGUgPSB7XG4gICAgICAgICAgICBjb2RlOiBzdGFydEluZm8uY29kZSxcbiAgICAgICAgICAgIHN0YXJ0OiBzdGFydEluZm8uc3RhcnQsXG4gICAgICAgICAgICBlbmQ6IHN0YXJ0SW5mby5lbmQsXG4gICAgICAgICAgICBjb3JyZWN0aW9uOiB7XG4gICAgICAgICAgICAgICAgYmFyOiBzdGFydEluZm8uY29ycmVjdGlvbi5iYXIsXG4gICAgICAgICAgICAgICAgc3BhY2U6IHN0YXJ0SW5mby5jb3JyZWN0aW9uLnNwYWNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGRlY29kZWRDb2Rlcy5wdXNoKGNvZGUpO1xuICAgICAgICBjaGVja3N1bSA9IGNvZGUuY29kZTtcblxuICAgICAgICBzd2l0Y2ggKGNvZGUuY29kZSkge1xuICAgICAgICAgICAgY2FzZSBTVEFSVF9DT0RFX0E6XG4gICAgICAgICAgICAgICAgY29kZXNldCA9IENPREVfQTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgU1RBUlRfQ09ERV9COlxuICAgICAgICAgICAgICAgIGNvZGVzZXQgPSBDT0RFX0I7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFNUQVJUX0NPREVfQzpcbiAgICAgICAgICAgICAgICBjb2Rlc2V0ID0gQ09ERV9DO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHdoaWxlICghZG9uZSkge1xuICAgICAgICAgICAgdW5zaGlmdCA9IHNoaWZ0TmV4dDtcbiAgICAgICAgICAgIHNoaWZ0TmV4dCA9IGZhbHNlO1xuICAgICAgICAgICAgY29kZSA9IHRoaXMuX2RlY29kZUNvZGUoY29kZS5lbmQsIGNvZGUuY29ycmVjdGlvbik7XG4gICAgICAgICAgICBpZiAoY29kZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmIChjb2RlLmNvZGUgIT09IFNUT1BfQ09ERSkge1xuICAgICAgICAgICAgICAgICAgICByZW1vdmVMYXN0Q2hhcmFjdGVyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoY29kZS5jb2RlICE9PSBTVE9QX0NPREUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmF3UmVzdWx0LnB1c2goY29kZS5jb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGllcisrO1xuICAgICAgICAgICAgICAgICAgICBjaGVja3N1bSArPSBtdWx0aXBsaWVyICogY29kZS5jb2RlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkZWNvZGVkQ29kZXMucHVzaChjb2RlKTtcblxuICAgICAgICAgICAgICAgIHN3aXRjaCAoY29kZXNldCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIENPREVfQToge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvZGUuY29kZSA8IDY0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZSgzMiArIGNvZGUuY29kZSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjb2RlLmNvZGUgPCA5Nikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZS5jb2RlIC0gNjQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvZGUuY29kZSAhPT0gU1RPUF9DT0RFKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZUxhc3RDaGFyYWN0ZXIgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChjb2RlLmNvZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBDT0RFX1NISUZUOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpZnROZXh0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvZGVzZXQgPSBDT0RFX0I7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBDT0RFX0I6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2Rlc2V0ID0gQ09ERV9CO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgQ09ERV9DOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29kZXNldCA9IENPREVfQztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFNUT1BfQ09ERTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBDT0RFX0I6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2RlLmNvZGUgPCA5Nikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUoMzIgKyBjb2RlLmNvZGUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvZGUuY29kZSAhPT0gU1RPUF9DT0RFKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZUxhc3RDaGFyYWN0ZXIgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChjb2RlLmNvZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBDT0RFX1NISUZUOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpZnROZXh0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvZGVzZXQgPSBDT0RFX0E7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBDT0RFX0E6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2Rlc2V0ID0gQ09ERV9BO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgQ09ERV9DOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29kZXNldCA9IENPREVfQztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFNUT1BfQ09ERTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBDT0RFX0M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2RlLmNvZGUgPCAxMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChjb2RlLmNvZGUgPCAxMCA/ICcwJyArIGNvZGUuY29kZSA6IGNvZGUuY29kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2RlLmNvZGUgIT09IFNUT1BfQ09ERSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVMYXN0Q2hhcmFjdGVyID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoY29kZS5jb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgQ09ERV9BOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29kZXNldCA9IENPREVfQTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIENPREVfQjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvZGVzZXQgPSBDT0RFX0I7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBTVE9QX0NPREU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb25lID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkb25lID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh1bnNoaWZ0KSB7XG4gICAgICAgICAgICAgICAgY29kZXNldCA9IGNvZGVzZXQgPT09IENPREVfQSA/IENPREVfQiA6IENPREVfQTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb2RlID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvZGUuZW5kID0gdGhpcy5fbmV4dFVuc2V0KHRoaXMuX3JvdywgY29kZS5lbmQpO1xuICAgICAgICBpZiAoIXRoaXMuX3ZlcmlmeVRyYWlsaW5nV2hpdGVzcGFjZShjb2RlKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjaGVja3N1bSAtPSBtdWx0aXBsaWVyICogcmF3UmVzdWx0W3Jhd1Jlc3VsdC5sZW5ndGggLSAxXTtcbiAgICAgICAgaWYgKGNoZWNrc3VtICUgMTAzICE9PSByYXdSZXN1bHRbcmF3UmVzdWx0Lmxlbmd0aCAtIDFdKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghcmVzdWx0Lmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvLyByZW1vdmUgbGFzdCBjb2RlIGZyb20gcmVzdWx0IChjaGVja3N1bSlcbiAgICAgICAgaWYgKHJlbW92ZUxhc3RDaGFyYWN0ZXIpIHtcbiAgICAgICAgICAgIHJlc3VsdC5zcGxpY2UocmVzdWx0Lmxlbmd0aCAtIDEsIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvZGU6IHJlc3VsdC5qb2luKCcnKSxcbiAgICAgICAgICAgIHN0YXJ0OiBzdGFydEluZm8uc3RhcnQsXG4gICAgICAgICAgICBlbmQ6IGNvZGUuZW5kLFxuICAgICAgICAgICAgY29kZXNldCxcbiAgICAgICAgICAgIHN0YXJ0SW5mbyxcbiAgICAgICAgICAgIGRlY29kZWRDb2RlcyxcbiAgICAgICAgICAgIGVuZEluZm86IGNvZGVcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX3ZlcmlmeVRyYWlsaW5nV2hpdGVzcGFjZShlbmRJbmZvOiBCYXJjb2RlSW5mbyk6IEJhcmNvZGVJbmZvIHtcbiAgICAgICAgY29uc3QgdHJhaWxpbmdXaGl0ZXNwYWNlRW5kID0gZW5kSW5mby5lbmQgKyAoZW5kSW5mby5lbmQgLSBlbmRJbmZvLnN0YXJ0KSAvIDI7XG5cbiAgICAgICAgaWYgKHRyYWlsaW5nV2hpdGVzcGFjZUVuZCA8IHRoaXMuX3Jvdy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9tYXRjaFJhbmdlKGVuZEluZm8uZW5kLCB0cmFpbGluZ1doaXRlc3BhY2VFbmQsIDApKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVuZEluZm87XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9jYWxjdWxhdGVDb3JyZWN0aW9uKFxuICAgICAgICBleHBlY3RlZDogUmVhZG9ubHlBcnJheTxudW1iZXI+LFxuICAgICAgICBub3JtYWxpemVkOiBSZWFkb25seUFycmF5PG51bWJlcj4sXG4gICAgICAgIGluZGljZXM6IFJlYWRvbmx5QXJyYXk8bnVtYmVyPlxuICAgICk6IG51bWJlciB7XG4gICAgICAgIGxldCBzdW1Ob3JtYWxpemVkID0gMDtcbiAgICAgICAgbGV0IHN1bUV4cGVjdGVkID0gMDtcblxuICAgICAgICBmb3IgKGxldCBsZW5ndGggPSBpbmRpY2VzLmxlbmd0aDsgbGVuZ3RoLS07KSB7XG4gICAgICAgICAgICBzdW1FeHBlY3RlZCArPSBleHBlY3RlZFtpbmRpY2VzW2xlbmd0aF1dO1xuICAgICAgICAgICAgc3VtTm9ybWFsaXplZCArPSBub3JtYWxpemVkW2luZGljZXNbbGVuZ3RoXV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VtRXhwZWN0ZWQgLyBzdW1Ob3JtYWxpemVkO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEJhcmNvZGUsIEJhcmNvZGVJbmZvLCBCYXJjb2RlUmVhZGVyIH0gZnJvbSAnLi9iYXJjb2RlLXJlYWRlcic7XG5cbmNvbnN0IEFTVEVSSVNLID0gMHgwOTQ7XG5jb25zdCBBTFBIQUJFVEhfU1RSSU5HID0gJzAxMjM0NTY3ODlBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWi0uICokLyslJztcbmNvbnN0IEFMUEhBQkVUID0gbmV3IFVpbnQxNkFycmF5KFsuLi5BTFBIQUJFVEhfU1RSSU5HXS5tYXAoY2hhciA9PiBjaGFyLmNoYXJDb2RlQXQoMCkpKTtcbi8vIGNvbnN0IEFMUEhBQkVUID0gWzQ4LCA0OSwgNTAsIDUxLCA1MiwgNTMsIDU0LCA1NSwgNTYsIDU3LCA2NSwgNjYsIDY3LCA2OCwgNjksIDcwLCA3MSwgNzIsIDczLCA3NCwgNzUsIDc2LCA3NywgNzgsXG4vLyAgICAgNzksIDgwLCA4MSwgODIsIDgzLCA4NCwgODUsIDg2LCA4NywgODgsIDg5LCA5MCwgNDUsIDQ2LCAzMiwgNDIsIDM2LCA0NywgNDMsIDM3XTtcbmNvbnN0IENIQVJBQ1RFUl9FTkNPRElOR1MgPSBuZXcgVWludDE2QXJyYXkoW1xuICAgIDB4MDM0LCAweDEyMSwgMHgwNjEsIDB4MTYwLCAweDAzMSwgMHgxMzAsIDB4MDcwLCAweDAyNSwgMHgxMjQsIDB4MDY0LCAweDEwOSwgMHgwNDksIDB4MTQ4LCAweDAxOSwgMHgxMTgsIDB4MDU4LFxuICAgIDB4MDBELCAweDEwQywgMHgwNEMsIDB4MDFDLCAweDEwMywgMHgwNDMsIDB4MTQyLCAweDAxMywgMHgxMTIsIDB4MDUyLCAweDAwNywgMHgxMDYsIDB4MDQ2LCAweDAxNiwgMHgxODEsIDB4MEMxLFxuICAgIDB4MUMwLCAweDA5MSwgMHgxOTAsIDB4MEQwLCAweDA4NSwgMHgxODQsIDB4MEM0LCAweDA5NCwgMHgwQTgsIDB4MEEyLCAweDA4QSwgMHgwMkFcbl0pO1xuXG5leHBvcnQgY2xhc3MgQ29kZTM5UmVhZGVyIGV4dGVuZHMgQmFyY29kZVJlYWRlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5fZm9ybWF0ID0gJ2NvZGVfMzknO1xuICAgIH1cblxuICAgIGRlY29kZSgpOiBCYXJjb2RlIHtcbiAgICAgICAgY29uc3Qgc3RhcnQgPSB0aGlzLl9maW5kU3RhcnQoKTtcblxuICAgICAgICBpZiAoIXN0YXJ0KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBBcnJheTxzdHJpbmc+KCk7XG4gICAgICAgIGxldCBjb3VudGVycyA9IG5ldyBVaW50MTZBcnJheSg5KTtcbiAgICAgICAgbGV0IGRlY29kZWRDaGFyOiBzdHJpbmc7XG4gICAgICAgIGxldCBsYXN0U3RhcnQ6IG51bWJlcjtcbiAgICAgICAgbGV0IG5leHRTdGFydCA9IHRoaXMuX25leHRTZXQodGhpcy5fcm93LCBzdGFydC5lbmQpO1xuXG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIHRoaXMuX3RvQ291bnRlcnMobmV4dFN0YXJ0LCBjb3VudGVycyk7XG4gICAgICAgICAgICBjb25zdCBwYXR0ZXJuID0gdGhpcy5fdG9QYXR0ZXJuKGNvdW50ZXJzKTtcbiAgICAgICAgICAgIGlmIChwYXR0ZXJuIDwgMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVjb2RlZENoYXIgPSB0aGlzLl9wYXR0ZXJuVG9DaGFyKHBhdHRlcm4pO1xuICAgICAgICAgICAgaWYgKGRlY29kZWRDaGFyID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaChkZWNvZGVkQ2hhcik7XG4gICAgICAgICAgICBsYXN0U3RhcnQgPSBuZXh0U3RhcnQ7XG4gICAgICAgICAgICBuZXh0U3RhcnQgKz0gY291bnRlcnMucmVkdWNlKChzdW0sIGl0ZW0pID0+IHN1bSArIGl0ZW0sIDApO1xuICAgICAgICAgICAgbmV4dFN0YXJ0ID0gdGhpcy5fbmV4dFNldCh0aGlzLl9yb3csIG5leHRTdGFydCk7XG4gICAgICAgIH0gd2hpbGUgKGRlY29kZWRDaGFyICE9PSAnKicpO1xuICAgICAgICByZXN1bHQucG9wKCk7XG5cbiAgICAgICAgaWYgKCFyZXN1bHQubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5fdmVyaWZ5VHJhaWxpbmdXaGl0ZXNwYWNlKGxhc3RTdGFydCwgbmV4dFN0YXJ0LCBjb3VudGVycykpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvZGU6IHJlc3VsdC5qb2luKCcnKSxcbiAgICAgICAgICAgIHN0YXJ0OiBzdGFydC5zdGFydCxcbiAgICAgICAgICAgIGVuZDogbmV4dFN0YXJ0LFxuICAgICAgICAgICAgc3RhcnRJbmZvOiBzdGFydCxcbiAgICAgICAgICAgIGRlY29kZWRDb2RlczogcmVzdWx0XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9wYXR0ZXJuVG9DaGFyKHBhdHRlcm4pOiBzdHJpbmcge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IENIQVJBQ1RFUl9FTkNPRElOR1MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChDSEFSQUNURVJfRU5DT0RJTkdTW2ldID09PSBwYXR0ZXJuKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoQUxQSEFCRVRbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3ZlcmlmeVRyYWlsaW5nV2hpdGVzcGFjZShsYXN0U3RhcnQ6IG51bWJlciwgbmV4dFN0YXJ0OiBudW1iZXIsIGNvdW50ZXJzOiBVaW50MTZBcnJheSk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBwYXR0ZXJuU2l6ZSA9IGNvdW50ZXJzLnJlZHVjZSgoc3VtLCBpdGVtKSA9PiBzdW0gKyBpdGVtLCAwKTtcbiAgICAgICAgY29uc3QgdHJhaWxpbmdXaGl0ZXNwYWNlRW5kID0gbmV4dFN0YXJ0IC0gbGFzdFN0YXJ0IC0gcGF0dGVyblNpemU7XG4gICAgICAgIHJldHVybiAodHJhaWxpbmdXaGl0ZXNwYWNlRW5kICogMykgPj0gcGF0dGVyblNpemU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZmluZE5leHRXaWR0aChjb3VudGVyczogVWludDE2QXJyYXksIGN1cnJlbnQ6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIGxldCBtaW5XaWR0aCA9IE51bWJlci5NQVhfVkFMVUU7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGNvdW50ZXJzW2ldIDwgbWluV2lkdGggJiYgY291bnRlcnNbaV0gPiBjdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgbWluV2lkdGggPSBjb3VudGVyc1tpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtaW5XaWR0aDtcbiAgICB9XG5cbiAgICBwcml2YXRlIF90b1BhdHRlcm4oY291bnRlcnM6IFVpbnQxNkFycmF5KTogbnVtYmVyIHtcbiAgICAgICAgY29uc3QgbnVtQ291bnRlcnMgPSBjb3VudGVycy5sZW5ndGg7XG4gICAgICAgIGxldCBtYXhOYXJyb3dXaWR0aCA9IDA7XG4gICAgICAgIGxldCBudW1XaWRlQmFycyA9IG51bUNvdW50ZXJzO1xuICAgICAgICBsZXQgd2lkZUJhcldpZHRoID0gMDtcbiAgICAgICAgbGV0IHBhdHRlcm46IG51bWJlcjtcblxuICAgICAgICB3aGlsZSAobnVtV2lkZUJhcnMgPiAzKSB7XG4gICAgICAgICAgICBtYXhOYXJyb3dXaWR0aCA9IHRoaXMuX2ZpbmROZXh0V2lkdGgoY291bnRlcnMsIG1heE5hcnJvd1dpZHRoKTtcbiAgICAgICAgICAgIG51bVdpZGVCYXJzID0gMDtcbiAgICAgICAgICAgIHBhdHRlcm4gPSAwO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1Db3VudGVyczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvdW50ZXJzW2ldID4gbWF4TmFycm93V2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybiB8PSAxIDw8IChudW1Db3VudGVycyAtIDEgLSBpKTtcbiAgICAgICAgICAgICAgICAgICAgbnVtV2lkZUJhcnMrKztcbiAgICAgICAgICAgICAgICAgICAgd2lkZUJhcldpZHRoICs9IGNvdW50ZXJzW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG51bVdpZGVCYXJzID09PSAzKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1Db3VudGVycyAmJiBudW1XaWRlQmFycyA+IDA7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnRlcnNbaV0gPiBtYXhOYXJyb3dXaWR0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbnVtV2lkZUJhcnMtLTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoY291bnRlcnNbaV0gKiAyKSA+PSB3aWRlQmFyV2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhdHRlcm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZmluZFN0YXJ0KCk6IEJhcmNvZGVJbmZvIHtcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gdGhpcy5fbmV4dFNldCh0aGlzLl9yb3cpO1xuICAgICAgICBsZXQgcGF0dGVyblN0YXJ0ID0gb2Zmc2V0O1xuICAgICAgICBjb25zdCBjb3VudGVyID0gbmV3IFVpbnQxNkFycmF5KDkpO1xuICAgICAgICBsZXQgY291bnRlclBvcyA9IDA7XG4gICAgICAgIGxldCBpc1doaXRlOiAwIHwgMSA9IDA7XG4gICAgICAgIGxldCB3aGl0ZVNwYWNlTXVzdFN0YXJ0OiBudW1iZXI7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IG9mZnNldDsgaSA8IHRoaXMuX3Jvdy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3Jvd1tpXSBeIGlzV2hpdGUpIHtcbiAgICAgICAgICAgICAgICBjb3VudGVyW2NvdW50ZXJQb3NdKys7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChjb3VudGVyUG9zID09PSBjb3VudGVyLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZmluZCBzdGFydCBwYXR0ZXJuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl90b1BhdHRlcm4oY291bnRlcikgPT09IEFTVEVSSVNLKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZVNwYWNlTXVzdFN0YXJ0ID0gTWF0aC5tYXgoMCwgcGF0dGVyblN0YXJ0IC0gKChpIC0gcGF0dGVyblN0YXJ0KSAvIDQpKSB8IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fbWF0Y2hSYW5nZSh3aGl0ZVNwYWNlTXVzdFN0YXJ0LCBwYXR0ZXJuU3RhcnQsIDApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IHBhdHRlcm5TdGFydCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kOiBpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm5TdGFydCArPSBjb3VudGVyWzBdICsgY291bnRlclsxXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA3OyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ZXJbal0gPSBjb3VudGVyW2ogKyAyXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb3VudGVyWzddID0gMDtcbiAgICAgICAgICAgICAgICAgICAgY291bnRlcls4XSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXJQb3MtLTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb3VudGVyUG9zKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvdW50ZXJbY291bnRlclBvc10gPSAxO1xuICAgICAgICAgICAgICAgIGlzV2hpdGUgPSBpc1doaXRlID8gMCA6IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBCYXJjb2RlIH0gZnJvbSAnLi9iYXJjb2RlLXJlYWRlcic7XG5pbXBvcnQgeyBDb2RlMzlSZWFkZXIgfSBmcm9tICcuL2NvZGUtMzktcmVhZGVyJztcblxuZXhwb3J0IGNsYXNzIENvZGUzOVZJTlJlYWRlciBleHRlbmRzIENvZGUzOVJlYWRlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5fZm9ybWF0ID0gJ2NvZGVfMzlfdmluJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAYm9ycm93c1xuICAgICAqIGh0dHBzOi8vZ2l0aHViLmNvbS96eGluZy96eGluZy9ibG9iL21hc3Rlci9jb3JlL3NyYy9tYWluL2phdmEvY29tL2dvb2dsZS96eGluZy9jbGllbnQvcmVzdWx0L1ZJTlJlc3VsdFBhcnNlci5qYXZhXG4gICAgICovXG4gICAgZGVjb2RlKCk6IEJhcmNvZGUge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5kZWNvZGUoKTtcbiAgICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNvZGUgPSByZXN1bHQuY29kZTtcblxuICAgICAgICBpZiAoIWNvZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29kZSA9IGNvZGUucmVwbGFjZSgvW0lPUV0vZywgJycpO1xuXG4gICAgICAgIGlmICghL1tBLVowLTldezE3fS8udGVzdChjb2RlKSkge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRmFpbGVkIEFaMDkgcGF0dGVybiBjb2RlOicsIGNvZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuX2NoZWNrQ2hlY2tzdW0oY29kZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzdWx0LmNvZGUgPSBjb2RlO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHByaXZhdGUgX2NoZWNrQ2hlY2tzdW0oY29kZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIC8vIFRPRE9cbiAgICAgICAgcmV0dXJuICEhY29kZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBCYXJjb2RlLCBCYXJjb2RlSW5mbywgQmFyY29kZVJlYWRlciB9IGZyb20gJy4vYmFyY29kZS1yZWFkZXInO1xuXG5jb25zdCBBTFBIQUJFVEhfU1RSSU5HID0gJzAxMjM0NTY3ODlBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWi0uICQvKyVhYmNkKic7XG5jb25zdCBBTFBIQUJFVCA9IG5ldyBVaW50MTZBcnJheShbLi4uQUxQSEFCRVRIX1NUUklOR10ubWFwKGNoYXIgPT4gY2hhci5jaGFyQ29kZUF0KDApKSk7XG5jb25zdCBDSEFSQUNURVJfRU5DT0RJTkdTID0gbmV3IFVpbnQxNkFycmF5KFtcbiAgICAweDExNCwgMHgxNDgsIDB4MTQ0LCAweDE0MiwgMHgxMjgsIDB4MTI0LCAweDEyMiwgMHgxNTAsIDB4MTEyLCAweDEwQSwgMHgxQTgsIDB4MUE0LCAweDFBMiwgMHgxOTQsIDB4MTkyLCAweDE4QSxcbiAgICAweDE2OCwgMHgxNjQsIDB4MTYyLCAweDEzNCwgMHgxMUEsIDB4MTU4LCAweDE0QywgMHgxNDYsIDB4MTJDLCAweDExNiwgMHgxQjQsIDB4MUIyLCAweDFBQywgMHgxQTYsIDB4MTk2LCAweDE5QSxcbiAgICAweDE2QywgMHgxNjYsIDB4MTM2LCAweDEzQSwgMHgxMkUsIDB4MUQ0LCAweDFEMiwgMHgxQ0EsIDB4MTZFLCAweDE3NiwgMHgxQUUsIDB4MTI2LCAweDFEQSwgMHgxRDYsIDB4MTMyLCAweDE1RVxuXSk7XG5jb25zdCBBU1RFUklTSyA9IDB4MTVFO1xuXG5leHBvcnQgY2xhc3MgQ29kZTkzUmVhZGVyIGV4dGVuZHMgQmFyY29kZVJlYWRlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5fZm9ybWF0ID0gJ2NvZGVfOTMnO1xuICAgIH1cblxuICAgIGRlY29kZSgpOiBCYXJjb2RlIHtcbiAgICAgICAgY29uc3Qgc3RhcnQgPSB0aGlzLl9maW5kU3RhcnQoKTtcblxuICAgICAgICBpZiAoIXN0YXJ0KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZXN1bHQgPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xuICAgICAgICBsZXQgY291bnRlcnMgPSBuZXcgVWludDE2QXJyYXkoNik7XG4gICAgICAgIGxldCBkZWNvZGVkQ2hhcjogc3RyaW5nO1xuICAgICAgICBsZXQgbGFzdFN0YXJ0OiBudW1iZXI7XG4gICAgICAgIGxldCBuZXh0U3RhcnQgPSB0aGlzLl9uZXh0U2V0KHRoaXMuX3Jvdywgc3RhcnQuZW5kKTtcblxuICAgICAgICBkbyB7XG4gICAgICAgICAgICB0aGlzLl90b0NvdW50ZXJzKG5leHRTdGFydCwgY291bnRlcnMpO1xuICAgICAgICAgICAgY29uc3QgcGF0dGVybiA9IHRoaXMuX3RvUGF0dGVybihjb3VudGVycyk7XG4gICAgICAgICAgICBpZiAocGF0dGVybiA8IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlY29kZWRDaGFyID0gdGhpcy5fcGF0dGVyblRvQ2hhcihwYXR0ZXJuKTtcbiAgICAgICAgICAgIGlmIChkZWNvZGVkQ2hhciA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goZGVjb2RlZENoYXIpO1xuICAgICAgICAgICAgbGFzdFN0YXJ0ID0gbmV4dFN0YXJ0O1xuICAgICAgICAgICAgbmV4dFN0YXJ0ICs9IGNvdW50ZXJzLnJlZHVjZSgoc3VtLCBpdGVtKSA9PiBzdW0gKyBpdGVtLCAwKTtcbiAgICAgICAgICAgIG5leHRTdGFydCA9IHRoaXMuX25leHRTZXQodGhpcy5fcm93LCBuZXh0U3RhcnQpO1xuICAgICAgICB9IHdoaWxlIChkZWNvZGVkQ2hhciAhPT0gJyonKTtcbiAgICAgICAgcmVzdWx0LnBvcCgpO1xuXG4gICAgICAgIGlmICghcmVzdWx0Lmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuX3ZlcmlmeUVuZChsYXN0U3RhcnQsIG5leHRTdGFydCkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLl92ZXJpZnlDaGVja3N1bXMocmVzdWx0KSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXN1bHQgPSByZXN1bHQuc2xpY2UoMCwgcmVzdWx0Lmxlbmd0aCAtIDIpO1xuICAgICAgICBpZiAoKHJlc3VsdCA9IHRoaXMuX2RlY29kZUV4dGVuZGVkKHJlc3VsdCkpID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb2RlOiByZXN1bHQuam9pbignJyksXG4gICAgICAgICAgICBzdGFydDogc3RhcnQuc3RhcnQsXG4gICAgICAgICAgICBlbmQ6IG5leHRTdGFydCxcbiAgICAgICAgICAgIHN0YXJ0SW5mbzogc3RhcnQsXG4gICAgICAgICAgICBkZWNvZGVkQ29kZXM6IHJlc3VsdFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfcGF0dGVyblRvQ2hhcihwYXR0ZXJuOiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IENIQVJBQ1RFUl9FTkNPRElOR1MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChDSEFSQUNURVJfRU5DT0RJTkdTW2ldID09PSBwYXR0ZXJuKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoQUxQSEFCRVRbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3ZlcmlmeUVuZChsYXN0U3RhcnQ6IG51bWJlciwgbmV4dFN0YXJ0OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKGxhc3RTdGFydCA9PT0gbmV4dFN0YXJ0IHx8ICF0aGlzLl9yb3dbbmV4dFN0YXJ0XSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3RvUGF0dGVybihjb3VudGVyczogVWludDE2QXJyYXkpOiBudW1iZXIge1xuICAgICAgICBjb25zdCBudW1Db3VudGVycyA9IGNvdW50ZXJzLmxlbmd0aDtcbiAgICAgICAgbGV0IHBhdHRlcm4gPSAwO1xuICAgICAgICBsZXQgc3VtID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1Db3VudGVyczsgaSsrKSB7XG4gICAgICAgICAgICBzdW0gKz0gY291bnRlcnNbaV07XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bUNvdW50ZXJzOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBub3JtYWxpemVkID0gTWF0aC5yb3VuZChjb3VudGVyc1tpXSAqIDkgLyBzdW0pO1xuICAgICAgICAgICAgaWYgKG5vcm1hbGl6ZWQgPCAxIHx8IG5vcm1hbGl6ZWQgPiA0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKChpICYgMSkgPT09IDApIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG5vcm1hbGl6ZWQ7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuID0gKHBhdHRlcm4gPDwgMSkgfCAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGF0dGVybiA8PD0gbm9ybWFsaXplZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYXR0ZXJuO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2ZpbmRTdGFydCgpOiBCYXJjb2RlSW5mbyB7XG4gICAgICAgIGNvbnN0IGNvdW50ZXIgPSBuZXcgVWludDE2QXJyYXkoNik7XG4gICAgICAgIGNvbnN0IG9mZnNldCA9IHRoaXMuX25leHRTZXQodGhpcy5fcm93KTtcbiAgICAgICAgbGV0IHBhdHRlcm5TdGFydCA9IG9mZnNldDtcbiAgICAgICAgbGV0IGNvdW50ZXJQb3MgPSAwO1xuICAgICAgICBsZXQgaXNXaGl0ZTogMCB8IDEgPSAwO1xuICAgICAgICBsZXQgd2hpdGVTcGFjZU11c3RTdGFydDogbnVtYmVyO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSBvZmZzZXQ7IGkgPCB0aGlzLl9yb3cubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9yb3dbaV0gXiBpc1doaXRlKSB7XG4gICAgICAgICAgICAgICAgY291bnRlcltjb3VudGVyUG9zXSsrO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoY291bnRlclBvcyA9PT0gY291bnRlci5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGZpbmQgc3RhcnQgcGF0dGVyblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fdG9QYXR0ZXJuKGNvdW50ZXIpID09PSBBU1RFUklTSykge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGVTcGFjZU11c3RTdGFydCA9IE1hdGgubWF4KDAsIHBhdHRlcm5TdGFydCAtICgoaSAtIHBhdHRlcm5TdGFydCkgLyA0KSkgfCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX21hdGNoUmFuZ2Uod2hpdGVTcGFjZU11c3RTdGFydCwgcGF0dGVyblN0YXJ0LCAwKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBwYXR0ZXJuU3RhcnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuU3RhcnQgKz0gY291bnRlclswXSArIGNvdW50ZXJbMV07XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgNDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVyW2pdID0gY291bnRlcltqICsgMl07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY291bnRlcls0XSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXJbNV0gPSAwO1xuICAgICAgICAgICAgICAgICAgICBjb3VudGVyUG9zLS07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnRlclBvcysrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb3VudGVyW2NvdW50ZXJQb3NdID0gMTtcbiAgICAgICAgICAgICAgICBpc1doaXRlID0gaXNXaGl0ZSA/IDAgOiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZGVjb2RlRXh0ZW5kZWQoY2hhckFycmF5OiBBcnJheTxzdHJpbmc+KTogQXJyYXk8c3RyaW5nPiB7XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IGNoYXJBcnJheS5sZW5ndGg7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBBcnJheTxzdHJpbmc+KCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNoYXIgPSBjaGFyQXJyYXlbaV07XG4gICAgICAgICAgICBpZiAoY2hhciA+PSAnYScgJiYgY2hhciA8PSAnZCcpIHtcbiAgICAgICAgICAgICAgICBpZiAoaSA+IChsZW5ndGggLSAyKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgbmV4dENoYXIgPSBjaGFyQXJyYXlbKytpXTtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXh0Q2hhckNvZGUgPSBuZXh0Q2hhci5jaGFyQ29kZUF0KDApO1xuICAgICAgICAgICAgICAgIGxldCBkZWNvZGVkQ2hhcjogc3RyaW5nO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoY2hhcikge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdhJzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRDaGFyID49ICdBJyAmJiBuZXh0Q2hhciA8PSAnWicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNvZGVkQ2hhciA9IFN0cmluZy5mcm9tQ2hhckNvZGUobmV4dENoYXJDb2RlIC0gNjQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2InOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV4dENoYXIgPj0gJ0EnICYmIG5leHRDaGFyIDw9ICdFJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY29kZWRDaGFyID0gU3RyaW5nLmZyb21DaGFyQ29kZShuZXh0Q2hhckNvZGUgLSAzOCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG5leHRDaGFyID49ICdGJyAmJiBuZXh0Q2hhciA8PSAnSicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNvZGVkQ2hhciA9IFN0cmluZy5mcm9tQ2hhckNvZGUobmV4dENoYXJDb2RlIC0gMTEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChuZXh0Q2hhciA+PSAnSycgJiYgbmV4dENoYXIgPD0gJ08nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjb2RlZENoYXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKG5leHRDaGFyQ29kZSArIDE2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobmV4dENoYXIgPj0gJ1AnICYmIG5leHRDaGFyIDw9ICdTJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY29kZWRDaGFyID0gU3RyaW5nLmZyb21DaGFyQ29kZShuZXh0Q2hhckNvZGUgKyA0Myk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG5leHRDaGFyID49ICdUJyAmJiBuZXh0Q2hhciA8PSAnWicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNvZGVkQ2hhciA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMTI3KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXNlICdjJzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRDaGFyID49ICdBJyAmJiBuZXh0Q2hhciA8PSAnTycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNvZGVkQ2hhciA9IFN0cmluZy5mcm9tQ2hhckNvZGUobmV4dENoYXJDb2RlIC0gMzIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChuZXh0Q2hhciA9PT0gJ1onKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjb2RlZENoYXIgPSAnOic7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZCc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXh0Q2hhciA+PSAnQScgJiYgbmV4dENoYXIgPD0gJ1onKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjb2RlZENoYXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKG5leHRDaGFyQ29kZSArIDMyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChkZWNvZGVkQ2hhcik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGNoYXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfdmVyaWZ5Q2hlY2tzdW1zKGNoYXJBcnJheTogQXJyYXk8c3RyaW5nPik6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWF0Y2hDaGVja0NoYXIoY2hhckFycmF5LCBjaGFyQXJyYXkubGVuZ3RoIC0gMiwgMjApXG4gICAgICAgICAgICAmJiB0aGlzLl9tYXRjaENoZWNrQ2hhcihjaGFyQXJyYXksIGNoYXJBcnJheS5sZW5ndGggLSAxLCAxNSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfbWF0Y2hDaGVja0NoYXIoY2hhckFycmF5OiBBcnJheTxzdHJpbmc+LCBpbmRleDogbnVtYmVyLCBtYXhXZWlnaHQ6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBhcnJheVRvQ2hlY2sgPSBjaGFyQXJyYXkuc2xpY2UoMCwgaW5kZXgpO1xuICAgICAgICBjb25zdCBsZW5ndGggPSBhcnJheVRvQ2hlY2subGVuZ3RoO1xuICAgICAgICBjb25zdCB3ZWlnaHRlZFN1bXMgPSBhcnJheVRvQ2hlY2sucmVkdWNlKChzdW0sIGNoYXIsIGkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHdlaWdodCA9ICgoKGkgKiAtMSkgKyAobGVuZ3RoIC0gMSkpICUgbWF4V2VpZ2h0KSArIDE7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IEFMUEhBQkVULmluZGV4T2YoY2hhci5jaGFyQ29kZUF0KDApKTtcbiAgICAgICAgICAgIHJldHVybiBzdW0gKyAod2VpZ2h0ICogdmFsdWUpO1xuICAgICAgICB9LCAwKTtcblxuICAgICAgICBjb25zdCBjaGVja0NoYXIgPSBBTFBIQUJFVFsod2VpZ2h0ZWRTdW1zICUgNDcpXTtcbiAgICAgICAgcmV0dXJuIGNoZWNrQ2hhciA9PT0gY2hhckFycmF5W2luZGV4XS5jaGFyQ29kZUF0KDApO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEJhcmNvZGUsIEJhcmNvZGVJbmZvLCBCYXJjb2RlUmVhZGVyLCBCYXJjb2RlUmVhZGVyQ29uZmlnIH0gZnJvbSAnLi9iYXJjb2RlLXJlYWRlcic7XG5pbXBvcnQgeyBFQU5SZWFkZXIgfSBmcm9tICcuL2Vhbi1yZWFkZXInO1xuXG5leHBvcnQgY2xhc3MgRUFOMlJlYWRlciBleHRlbmRzIEVBTlJlYWRlciB7XG4gICAgY29uc3RydWN0b3IoY29uZmlnPzogQmFyY29kZVJlYWRlckNvbmZpZywgc3VwcGxlbWVudHM/OiBBcnJheTxCYXJjb2RlUmVhZGVyPikge1xuICAgICAgICBzdXBlcihjb25maWcsIHN1cHBsZW1lbnRzKTtcblxuICAgICAgICB0aGlzLl9mb3JtYXQgPSAnZWFuXzInO1xuICAgIH1cblxuICAgIGRlY29kZShyb3c/OiBBcnJheTxudW1iZXI+LCBzdGFydD86IG51bWJlcik6IEJhcmNvZGUge1xuICAgICAgICBjb25zdCBlbmQgPSByb3cubGVuZ3RoO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xuICAgICAgICBjb25zdCBkZWNvZGVkQ29kZXMgPSBuZXcgQXJyYXk8QmFyY29kZUluZm8+KCk7XG4gICAgICAgIGxldCBvZmZzZXQgPSBzdGFydDtcbiAgICAgICAgbGV0IGNvZGVGcmVxdWVuY3kgPSAwO1xuICAgICAgICBsZXQgY29kZTogQmFyY29kZUluZm87XG5cbiAgICAgICAgdGhpcy5fcm93ID0gcm93O1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMiAmJiBvZmZzZXQgPCBlbmQ7IGkrKykge1xuICAgICAgICAgICAgY29kZSA9IHRoaXMuX2RlY29kZUNvZGUob2Zmc2V0KTtcbiAgICAgICAgICAgIGlmICghY29kZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVjb2RlZENvZGVzLnB1c2goY29kZSk7XG4gICAgICAgICAgICByZXN1bHQucHVzaChjb2RlLmNvZGUgJSAxMCk7XG4gICAgICAgICAgICBpZiAoY29kZS5jb2RlID49IHRoaXMuQ09ERV9HX1NUQVJUKSB7XG4gICAgICAgICAgICAgICAgY29kZUZyZXF1ZW5jeSB8PSAxIDw8ICgxIC0gaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaSAhPT0gMSkge1xuICAgICAgICAgICAgICAgIG9mZnNldCA9IHRoaXMuX25leHRTZXQodGhpcy5fcm93LCBjb2RlLmVuZCk7XG4gICAgICAgICAgICAgICAgb2Zmc2V0ID0gdGhpcy5fbmV4dFVuc2V0KHRoaXMuX3Jvdywgb2Zmc2V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXN1bHQubGVuZ3RoICE9PSAyIHx8IChwYXJzZUludChyZXN1bHQuam9pbignJykpICUgNCkgIT09IGNvZGVGcmVxdWVuY3kpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvZGU6IHJlc3VsdC5qb2luKCcnKSxcbiAgICAgICAgICAgIGRlY29kZWRDb2RlcyxcbiAgICAgICAgICAgIGVuZDogY29kZS5lbmRcbiAgICAgICAgfTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBCYXJjb2RlLCBCYXJjb2RlSW5mbywgQmFyY29kZVJlYWRlciwgQmFyY29kZVJlYWRlckNvbmZpZyB9IGZyb20gJy4vYmFyY29kZS1yZWFkZXInO1xuaW1wb3J0IHsgRUFOUmVhZGVyIH0gZnJvbSAnLi9lYW4tcmVhZGVyJztcblxuZXhwb3J0IGNsYXNzIEVBTjVSZWFkZXIgZXh0ZW5kcyBFQU5SZWFkZXIge1xuICAgIGdldCBDSEVDS19ESUdJVF9FTkNPRElOR1MoKTogQXJyYXk8bnVtYmVyPiB7XG4gICAgICAgIHJldHVybiBbMjQsIDIwLCAxOCwgMTcsIDEyLCA2LCAzLCAxMCwgOSwgNV07XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoY29uZmlnPzogQmFyY29kZVJlYWRlckNvbmZpZywgc3VwcGxlbWVudHM/OiBBcnJheTxCYXJjb2RlUmVhZGVyPikge1xuICAgICAgICBzdXBlcihjb25maWcsIHN1cHBsZW1lbnRzKTtcblxuICAgICAgICB0aGlzLl9mb3JtYXQgPSAnZWFuXzUnO1xuICAgIH1cblxuICAgIGRlY29kZShyb3c/OiBBcnJheTxudW1iZXI+LCBzdGFydD86IG51bWJlcik6IEJhcmNvZGUge1xuICAgICAgICBjb25zdCBlbmQgPSByb3cubGVuZ3RoO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xuICAgICAgICBjb25zdCBkZWNvZGVkQ29kZXMgPSBuZXcgQXJyYXk8QmFyY29kZUluZm8+KCk7XG4gICAgICAgIGxldCBjb2RlRnJlcXVlbmN5ID0gMDtcbiAgICAgICAgbGV0IG9mZnNldCA9IHN0YXJ0O1xuICAgICAgICBsZXQgY29kZTogQmFyY29kZUluZm87XG5cbiAgICAgICAgdGhpcy5fcm93ID0gcm93O1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNSAmJiBvZmZzZXQgPCBlbmQ7IGkrKykge1xuICAgICAgICAgICAgY29kZSA9IHRoaXMuX2RlY29kZUNvZGUob2Zmc2V0KTtcbiAgICAgICAgICAgIGlmICghY29kZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVjb2RlZENvZGVzLnB1c2goY29kZSk7XG4gICAgICAgICAgICByZXN1bHQucHVzaChjb2RlLmNvZGUgJSAxMCk7XG4gICAgICAgICAgICBpZiAoY29kZS5jb2RlID49IHRoaXMuQ09ERV9HX1NUQVJUKSB7XG4gICAgICAgICAgICAgICAgY29kZUZyZXF1ZW5jeSB8PSAxIDw8ICg0IC0gaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaSAhPT0gNCkge1xuICAgICAgICAgICAgICAgIG9mZnNldCA9IHRoaXMuX25leHRTZXQodGhpcy5fcm93LCBjb2RlLmVuZCk7XG4gICAgICAgICAgICAgICAgb2Zmc2V0ID0gdGhpcy5fbmV4dFVuc2V0KHRoaXMuX3Jvdywgb2Zmc2V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXN1bHQubGVuZ3RoICE9PSA1KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9leHRlbnNpb25DaGVja3N1bShyZXN1bHQpICE9PSB0aGlzLl9kZXRlcm1pbmVDaGVja0RpZ2l0KGNvZGVGcmVxdWVuY3kpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb2RlOiByZXN1bHQuam9pbignJyksXG4gICAgICAgICAgICBkZWNvZGVkQ29kZXMsXG4gICAgICAgICAgICBlbmQ6IGNvZGUuZW5kXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZGV0ZXJtaW5lQ2hlY2tEaWdpdChjb2RlRnJlcXVlbmN5OiBudW1iZXIpOiBudW1iZXIgfCBudWxsIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoY29kZUZyZXF1ZW5jeSA9PT0gdGhpcy5DSEVDS19ESUdJVF9FTkNPRElOR1NbaV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9leHRlbnNpb25DaGVja3N1bShyZXN1bHQ6IEFycmF5PG51bWJlcj4pOiBudW1iZXIge1xuICAgICAgICBsZXQgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aDtcbiAgICAgICAgbGV0IHN1bSA9IDA7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IGxlbmd0aCAtIDI7IGkgPj0gMDsgaSAtPSAyKSB7XG4gICAgICAgICAgICBzdW0gKz0gcmVzdWx0W2ldO1xuICAgICAgICB9XG4gICAgICAgIHN1bSAqPSAzO1xuICAgICAgICBmb3IgKGxldCBpID0gbGVuZ3RoIC0gMTsgaSA+PSAwOyBpIC09IDIpIHtcbiAgICAgICAgICAgIHN1bSArPSByZXN1bHRbaV07XG4gICAgICAgIH1cbiAgICAgICAgc3VtICo9IDM7XG5cbiAgICAgICAgcmV0dXJuIHN1bSAlIDEwO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEJhcmNvZGVJbmZvLCBCYXJjb2RlUmVhZGVyLCBCYXJjb2RlUmVhZGVyQ29uZmlnIH0gZnJvbSAnLi9iYXJjb2RlLXJlYWRlcic7XG5pbXBvcnQgeyBFQU5SZWFkZXIgfSBmcm9tICcuL2Vhbi1yZWFkZXInO1xuXG5leHBvcnQgY2xhc3MgRUFOOFJlYWRlciBleHRlbmRzIEVBTlJlYWRlciB7XG4gICAgY29uc3RydWN0b3IoY29uZmlnPzogQmFyY29kZVJlYWRlckNvbmZpZywgc3VwcGxlbWVudHM/OiBBcnJheTxCYXJjb2RlUmVhZGVyPikge1xuICAgICAgICBzdXBlcihjb25maWcsIHN1cHBsZW1lbnRzKTtcblxuICAgICAgICB0aGlzLl9mb3JtYXQgPSAnZWFuXzgnO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZGVjb2RlUGF5bG9hZChjb2RlOiBCYXJjb2RlSW5mbywgcmVzdWx0OiBBcnJheTxudW1iZXI+LCBkZWNvZGVkQ29kZXM6IEFycmF5PEJhcmNvZGVJbmZvPik6IEJhcmNvZGVJbmZvIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgICAgIGNvZGUgPSB0aGlzLl9kZWNvZGVDb2RlKGNvZGUuZW5kLCB0aGlzLkNPREVfR19TVEFSVCk7XG4gICAgICAgICAgICBpZiAoIWNvZGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGNvZGUuY29kZSk7XG4gICAgICAgICAgICBkZWNvZGVkQ29kZXMucHVzaChjb2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvZGUgPSB0aGlzLl9maW5kUGF0dGVybih0aGlzLk1JRERMRV9QQVRURVJOLCBjb2RlLmVuZCwgMSwgZmFsc2UpO1xuXG4gICAgICAgIGlmIChjb2RlID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlY29kZWRDb2Rlcy5wdXNoKGNvZGUpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgICAgICBjb2RlID0gdGhpcy5fZGVjb2RlQ29kZShjb2RlLmVuZCwgdGhpcy5DT0RFX0dfU1RBUlQpO1xuXG4gICAgICAgICAgICBpZiAoIWNvZGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGVjb2RlZENvZGVzLnB1c2goY29kZSk7XG4gICAgICAgICAgICByZXN1bHQucHVzaChjb2RlLmNvZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvZGU7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgbWVyZ2UgfSBmcm9tICcuLi9jb21tb24vbWVyZ2UnO1xuaW1wb3J0IHsgQmFyY29kZSwgQmFyY29kZUluZm8sIEJhcmNvZGVSZWFkZXIsIEJhcmNvZGVSZWFkZXJDb25maWcgfSBmcm9tICcuL2JhcmNvZGUtcmVhZGVyJztcblxuY29uc3QgRVhURU5TSU9OX1NUQVJUX1BBVFRFUk4gPSBbMSwgMSwgMl07XG5jb25zdCBDT0RFX1BBVFRFUk4gPSBbXG4gICAgWzMsIDIsIDEsIDFdLFxuICAgIFsyLCAyLCAyLCAxXSxcbiAgICBbMiwgMSwgMiwgMl0sXG4gICAgWzEsIDQsIDEsIDFdLFxuICAgIFsxLCAxLCAzLCAyXSxcbiAgICBbMSwgMiwgMywgMV0sXG4gICAgWzEsIDEsIDEsIDRdLFxuICAgIFsxLCAzLCAxLCAyXSxcbiAgICBbMSwgMiwgMSwgM10sXG4gICAgWzMsIDEsIDEsIDJdLFxuICAgIFsxLCAxLCAyLCAzXSxcbiAgICBbMSwgMiwgMiwgMl0sXG4gICAgWzIsIDIsIDEsIDJdLFxuICAgIFsxLCAxLCA0LCAxXSxcbiAgICBbMiwgMywgMSwgMV0sXG4gICAgWzEsIDMsIDIsIDFdLFxuICAgIFs0LCAxLCAxLCAxXSxcbiAgICBbMiwgMSwgMywgMV0sXG4gICAgWzMsIDEsIDIsIDFdLFxuICAgIFsyLCAxLCAxLCAzXVxuXTtcbmNvbnN0IENPREVfRlJFUVVFTkNZID0gWzAsIDExLCAxMywgMTQsIDE5LCAyNSwgMjgsIDIxLCAyMiwgMjZdO1xuXG5leHBvcnQgY2xhc3MgRUFOUmVhZGVyIGV4dGVuZHMgQmFyY29kZVJlYWRlciB7XG4gICAgZ2V0IENPREVfTF9TVEFSVCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICBnZXQgQ09ERV9HX1NUQVJUKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiAxMDtcbiAgICB9XG5cbiAgICBnZXQgU1RBUlRfUEFUVEVSTigpOiBBcnJheTxudW1iZXI+IHtcbiAgICAgICAgcmV0dXJuIFsxLCAxLCAxXTtcbiAgICB9XG5cbiAgICBnZXQgU1RPUF9QQVRURVJOKCk6IEFycmF5PG51bWJlcj4ge1xuICAgICAgICByZXR1cm4gWzEsIDEsIDFdO1xuICAgIH1cblxuICAgIGdldCBNSURETEVfUEFUVEVSTigpOiBBcnJheTxudW1iZXI+IHtcbiAgICAgICAgcmV0dXJuIFsxLCAxLCAxLCAxLCAxXTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihjb25maWc/OiBCYXJjb2RlUmVhZGVyQ29uZmlnLCBzdXBwbGVtZW50cz86IEFycmF5PEJhcmNvZGVSZWFkZXI+KSB7XG4gICAgICAgIHN1cGVyKG1lcmdlKHtcbiAgICAgICAgICAgIHN1cHBsZW1lbnRzOiBbXSAvLyBBbGxvd2VkIGV4dGVuc2lvbnMgdG8gYmUgZGVjb2RlZCAoMiBhbmQvb3IgNSlcbiAgICAgICAgfSwgY29uZmlnKSwgc3VwcGxlbWVudHMpO1xuXG4gICAgICAgIHRoaXMuX2Zvcm1hdCA9ICdlYW5fMTMnO1xuICAgICAgICB0aGlzLl9zaW5nbGVDb2RlRXJyb3IgPSAwLjcwO1xuICAgICAgICB0aGlzLl9hdmVyYWdlQ29kZUVycm9yID0gMC40ODtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2RlY29kZUNvZGUoc3RhcnQ6IG51bWJlciwgY29kZXJhbmdlPzogbnVtYmVyKTogQmFyY29kZUluZm8ge1xuICAgICAgICBjb25zdCBjb3VudGVyID0gWzAsIDAsIDAsIDBdO1xuICAgICAgICBjb25zdCBvZmZzZXQgPSBzdGFydDtcbiAgICAgICAgY29uc3QgYmVzdE1hdGNoOiBCYXJjb2RlSW5mbyA9IHtcbiAgICAgICAgICAgIGVycm9yOiBOdW1iZXIuTUFYX1ZBTFVFLFxuICAgICAgICAgICAgY29kZTogLTEsXG4gICAgICAgICAgICBzdGFydDogc3RhcnQsXG4gICAgICAgICAgICBlbmQ6IHN0YXJ0XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGVwc2lsb24gPSB0aGlzLkFWRVJBR0VfQ09ERV9FUlJPUjtcbiAgICAgICAgbGV0IGlzV2hpdGU6IDAgfCAxID0gdGhpcy5fcm93W29mZnNldF0gPyAwIDogMTtcbiAgICAgICAgbGV0IGNvdW50ZXJQb3MgPSAwO1xuXG4gICAgICAgIGlmICghY29kZXJhbmdlKSB7XG4gICAgICAgICAgICBjb2RlcmFuZ2UgPSBDT0RFX1BBVFRFUk4ubGVuZ3RoO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IG9mZnNldDsgaSA8IHRoaXMuX3Jvdy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3Jvd1tpXSBeIGlzV2hpdGUpIHtcbiAgICAgICAgICAgICAgICBjb3VudGVyW2NvdW50ZXJQb3NdKys7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChjb3VudGVyUG9zID09PSBjb3VudGVyLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgY29kZSA9IDA7IGNvZGUgPCBjb2RlcmFuZ2U7IGNvZGUrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXJyb3IgPSB0aGlzLl9tYXRjaFBhdHRlcm4oY291bnRlciwgQ09ERV9QQVRURVJOW2NvZGVdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnJvciA8IGJlc3RNYXRjaC5lcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlc3RNYXRjaC5jb2RlID0gY29kZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZXN0TWF0Y2guZXJyb3IgPSBlcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBiZXN0TWF0Y2guZW5kID0gaTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJlc3RNYXRjaC5lcnJvciA+IGVwc2lsb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBiZXN0TWF0Y2g7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnRlclBvcysrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb3VudGVyW2NvdW50ZXJQb3NdID0gMTtcbiAgICAgICAgICAgICAgICBpc1doaXRlID0gaXNXaGl0ZSA/IDAgOiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9maW5kU3RhcnQoKTogQmFyY29kZUluZm8ge1xuICAgICAgICBsZXQgb2Zmc2V0ID0gdGhpcy5fbmV4dFNldCh0aGlzLl9yb3cpO1xuICAgICAgICBsZXQgc3RhcnRJbmZvOiBCYXJjb2RlSW5mbztcblxuICAgICAgICB3aGlsZSAoIXN0YXJ0SW5mbykge1xuICAgICAgICAgICAgc3RhcnRJbmZvID0gdGhpcy5fZmluZFBhdHRlcm4odGhpcy5TVEFSVF9QQVRURVJOLCBvZmZzZXQsIDAsIHRydWUpO1xuXG4gICAgICAgICAgICBpZiAoIXN0YXJ0SW5mbykge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBsZWFkaW5nV2hpdGVzcGFjZVN0YXJ0ID0gc3RhcnRJbmZvLnN0YXJ0IC0gKHN0YXJ0SW5mby5lbmQgLSBzdGFydEluZm8uc3RhcnQpO1xuXG4gICAgICAgICAgICBpZiAobGVhZGluZ1doaXRlc3BhY2VTdGFydCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX21hdGNoUmFuZ2UobGVhZGluZ1doaXRlc3BhY2VTdGFydCwgc3RhcnRJbmZvLnN0YXJ0LCAwKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RhcnRJbmZvO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgb2Zmc2V0ID0gc3RhcnRJbmZvLmVuZDtcbiAgICAgICAgICAgIHN0YXJ0SW5mbyA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX3ZlcmlmeVRyYWlsaW5nV2hpdGVzcGFjZShlbmRJbmZvOiBCYXJjb2RlSW5mbyk6IEJhcmNvZGVJbmZvIHtcbiAgICAgICAgY29uc3QgdHJhaWxpbmdXaGl0ZXNwYWNlRW5kID0gZW5kSW5mby5lbmQgKyAoZW5kSW5mby5lbmQgLSBlbmRJbmZvLnN0YXJ0KTtcblxuICAgICAgICBpZiAodHJhaWxpbmdXaGl0ZXNwYWNlRW5kIDwgdGhpcy5fcm93Lmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX21hdGNoUmFuZ2UoZW5kSW5mby5lbmQsIHRyYWlsaW5nV2hpdGVzcGFjZUVuZCwgMCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZW5kSW5mbztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZmluZEVuZChvZmZzZXQ6IG51bWJlciwgaXNXaGl0ZTogMCB8IDEpOiBCYXJjb2RlSW5mbyB7XG4gICAgICAgIGNvbnN0IGVuZEluZm8gPSB0aGlzLl9maW5kUGF0dGVybih0aGlzLlNUT1BfUEFUVEVSTiwgb2Zmc2V0LCBpc1doaXRlLCBmYWxzZSk7XG5cbiAgICAgICAgcmV0dXJuIGVuZEluZm8gIT09IG51bGwgPyB0aGlzLl92ZXJpZnlUcmFpbGluZ1doaXRlc3BhY2UoZW5kSW5mbykgOiBudWxsO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2NhbGN1bGF0ZUZpcnN0RGlnaXQoY29kZUZyZXF1ZW5jeTogbnVtYmVyKTogbnVtYmVyIHwgbnVsbCB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQ09ERV9GUkVRVUVOQ1kubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChjb2RlRnJlcXVlbmN5ID09PSBDT0RFX0ZSRVFVRU5DWVtpXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZGVjb2RlUGF5bG9hZChjb2RlOiBCYXJjb2RlSW5mbywgcmVzdWx0OiBBcnJheTxudW1iZXI+LCBkZWNvZGVkQ29kZXM6IEFycmF5PEJhcmNvZGVJbmZvPik6IEJhcmNvZGVJbmZvIHtcbiAgICAgICAgbGV0IGNvZGVGcmVxdWVuY3kgPSAweDA7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICAgICAgICAgIGNvZGUgPSB0aGlzLl9kZWNvZGVDb2RlKGNvZGUuZW5kKTtcbiAgICAgICAgICAgIGlmICghY29kZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvZGUuY29kZSA+PSB0aGlzLkNPREVfR19TVEFSVCkge1xuICAgICAgICAgICAgICAgIGNvZGUuY29kZSAtPSB0aGlzLkNPREVfR19TVEFSVDtcbiAgICAgICAgICAgICAgICBjb2RlRnJlcXVlbmN5IHw9IDEgPDwgKDUgLSBpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29kZUZyZXF1ZW5jeSB8PSAwIDw8ICg1IC0gaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaChjb2RlLmNvZGUpO1xuICAgICAgICAgICAgZGVjb2RlZENvZGVzLnB1c2goY29kZSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBmaXJzdERpZ2l0ID0gdGhpcy5fY2FsY3VsYXRlRmlyc3REaWdpdChjb2RlRnJlcXVlbmN5KTtcblxuICAgICAgICBpZiAoZmlyc3REaWdpdCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXN1bHQudW5zaGlmdChmaXJzdERpZ2l0KTtcblxuICAgICAgICBjb2RlID0gdGhpcy5fZmluZFBhdHRlcm4odGhpcy5NSURETEVfUEFUVEVSTiwgY29kZS5lbmQsIDEsIGZhbHNlKTtcblxuICAgICAgICBpZiAoY29kZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBkZWNvZGVkQ29kZXMucHVzaChjb2RlKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgICAgICAgICAgY29kZSA9IHRoaXMuX2RlY29kZUNvZGUoY29kZS5lbmQsIHRoaXMuQ09ERV9HX1NUQVJUKTtcblxuICAgICAgICAgICAgaWYgKCFjb2RlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRlY29kZWRDb2Rlcy5wdXNoKGNvZGUpO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goY29kZS5jb2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb2RlO1xuICAgIH1cblxuICAgIGRlY29kZSgpOiBCYXJjb2RlIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEFycmF5PG51bWJlcj4oKTtcbiAgICAgICAgY29uc3QgZGVjb2RlZENvZGVzID0gbmV3IEFycmF5PEJhcmNvZGVJbmZvPigpO1xuICAgICAgICBsZXQgcmVzdWx0SW5mbzogQmFyY29kZSA9IHt9O1xuICAgICAgICBsZXQgc3RhcnRJbmZvID0gdGhpcy5fZmluZFN0YXJ0KCk7XG5cbiAgICAgICAgaWYgKCFzdGFydEluZm8pIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNvZGU6IEJhcmNvZGVJbmZvID0ge1xuICAgICAgICAgICAgY29kZTogc3RhcnRJbmZvLmNvZGUsXG4gICAgICAgICAgICBzdGFydDogc3RhcnRJbmZvLnN0YXJ0LFxuICAgICAgICAgICAgZW5kOiBzdGFydEluZm8uZW5kXG4gICAgICAgIH07XG4gICAgICAgIGRlY29kZWRDb2Rlcy5wdXNoKGNvZGUpO1xuXG4gICAgICAgIGNvZGUgPSB0aGlzLl9kZWNvZGVQYXlsb2FkKGNvZGUsIHJlc3VsdCwgZGVjb2RlZENvZGVzKTtcblxuICAgICAgICBpZiAoIWNvZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29kZSA9IHRoaXMuX2ZpbmRFbmQoY29kZS5lbmQsIDApO1xuXG4gICAgICAgIGlmICghY29kZSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBkZWNvZGVkQ29kZXMucHVzaChjb2RlKTtcblxuICAgICAgICAvLyBDaGVja3N1bVxuICAgICAgICBpZiAoIXRoaXMuX2NoZWNrc3VtKHJlc3VsdCkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc3VwcGxlbWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc3Qgc3VwcGxlbWVudCA9IHRoaXMuX2RlY29kZUV4dGVuc2lvbnMoY29kZS5lbmQpO1xuICAgICAgICAgICAgaWYgKCFzdXBwbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGxhc3RDb2RlID0gc3VwcGxlbWVudC5kZWNvZGVkQ29kZXNbc3VwcGxlbWVudC5kZWNvZGVkQ29kZXMubGVuZ3RoIC0gMV0gYXMgQmFyY29kZUluZm87XG4gICAgICAgICAgICBjb25zdCBlbmRJbmZvID0ge1xuICAgICAgICAgICAgICAgIHN0YXJ0OiBsYXN0Q29kZS5zdGFydCArICgoKGxhc3RDb2RlLmVuZCAtIGxhc3RDb2RlLnN0YXJ0KSAvIDIpIHwgMCksXG4gICAgICAgICAgICAgICAgZW5kOiBsYXN0Q29kZS5lbmRcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5fdmVyaWZ5VHJhaWxpbmdXaGl0ZXNwYWNlKGVuZEluZm8pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlc3VsdEluZm8gPSB7XG4gICAgICAgICAgICAgICAgc3VwcGxlbWVudCxcbiAgICAgICAgICAgICAgICBjb2RlOiByZXN1bHQuam9pbignJykgKyBzdXBwbGVtZW50LmNvZGVcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29kZTogcmVzdWx0LmpvaW4oJycpLFxuICAgICAgICAgICAgc3RhcnQ6IHN0YXJ0SW5mby5zdGFydCxcbiAgICAgICAgICAgIGVuZDogY29kZS5lbmQsXG4gICAgICAgICAgICBzdGFydEluZm8sXG4gICAgICAgICAgICBkZWNvZGVkQ29kZXMsXG4gICAgICAgICAgICAuLi5yZXN1bHRJbmZvXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZGVjb2RlRXh0ZW5zaW9ucyhvZmZzZXQ6IG51bWJlcik6IEJhcmNvZGUge1xuICAgICAgICBjb25zdCBzdGFydCA9IHRoaXMuX25leHRTZXQodGhpcy5fcm93LCBvZmZzZXQpO1xuICAgICAgICBjb25zdCBzdGFydEluZm8gPSB0aGlzLl9maW5kUGF0dGVybihFWFRFTlNJT05fU1RBUlRfUEFUVEVSTiwgc3RhcnQsIDAsIGZhbHNlKTtcblxuICAgICAgICBpZiAoc3RhcnRJbmZvID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdXBwbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHRoaXMuc3VwcGxlbWVudHNbaV0uZGVjb2RlKHRoaXMuX3Jvdywgc3RhcnRJbmZvLmVuZCk7XG4gICAgICAgICAgICBpZiAocmVzdWx0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgY29kZTogcmVzdWx0LmNvZGUsXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0LFxuICAgICAgICAgICAgICAgICAgICBzdGFydEluZm8sXG4gICAgICAgICAgICAgICAgICAgIGVuZDogcmVzdWx0LmVuZCxcbiAgICAgICAgICAgICAgICAgICAgZGVjb2RlZENvZGVzOiByZXN1bHQuZGVjb2RlZENvZGVzXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfY2hlY2tzdW0ocmVzdWx0OiBBcnJheTxudW1iZXI+KTogYm9vbGVhbiB7XG4gICAgICAgIGxldCBzdW0gPSAwO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSByZXN1bHQubGVuZ3RoIC0gMjsgaSA+PSAwOyBpIC09IDIpIHtcbiAgICAgICAgICAgIHN1bSArPSByZXN1bHRbaV07XG4gICAgICAgIH1cblxuICAgICAgICBzdW0gKj0gMztcblxuICAgICAgICBmb3IgKGxldCBpID0gcmVzdWx0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaSAtPSAyKSB7XG4gICAgICAgICAgICBzdW0gKz0gcmVzdWx0W2ldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1bSAlIDEwID09PSAwO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBtZXJnZSB9IGZyb20gJy4uL2NvbW1vbi9tZXJnZSc7XG5pbXBvcnQgeyBCYXJjb2RlLCBCYXJjb2RlSW5mbywgQmFyY29kZVJlYWRlciwgQmFyY29kZVJlYWRlckNvbmZpZyB9IGZyb20gJy4vYmFyY29kZS1yZWFkZXInO1xuXG5jb25zdCBOID0gMTtcbmNvbnN0IFcgPSAzO1xuY29uc3QgU1RBUlRfUEFUVEVSTiA9IFtOLCBOLCBOLCBOXTtcbmNvbnN0IFNUT1BfUEFUVEVSTiA9IFtOLCBOLCBXXTtcbmNvbnN0IENPREVfUEFUVEVSTiA9IFtcbiAgICBbTiwgTiwgVywgVywgTl0sXG4gICAgW1csIE4sIE4sIE4sIFddLFxuICAgIFtOLCBXLCBOLCBOLCBXXSxcbiAgICBbVywgVywgTiwgTiwgTl0sXG4gICAgW04sIE4sIFcsIE4sIFddLFxuICAgIFtXLCBOLCBXLCBOLCBOXSxcbiAgICBbTiwgVywgVywgTiwgTl0sXG4gICAgW04sIE4sIE4sIFcsIFddLFxuICAgIFtXLCBOLCBOLCBXLCBOXSxcbiAgICBbTiwgVywgTiwgVywgTl1cbl07XG5jb25zdCBNQVhfQ09SUkVDVElPTl9GQUNUT1IgPSA1O1xuXG5leHBvcnQgY2xhc3MgSTJvZjVSZWFkZXIgZXh0ZW5kcyBCYXJjb2RlUmVhZGVyIHtcbiAgICBwcml2YXRlIF9iYXJTcGFjZVJhdGlvOiBbbnVtYmVyLCBudW1iZXJdO1xuXG4gICAgY29uc3RydWN0b3IoY29uZmlnPzogQmFyY29kZVJlYWRlckNvbmZpZykge1xuICAgICAgICBzdXBlcihtZXJnZSh7XG4gICAgICAgICAgICBub3JtYWxpemVCYXJTcGFjZVdpZHRoOiBmYWxzZSAvLyBOb3JtYWxpemUgdGhlIHdpZHRoIGRpZmZlcmVuY2UgYmV0d2VlbiBiYXJzIGFuZCBzcGFjZXNcbiAgICAgICAgfSwgY29uZmlnKSk7XG5cbiAgICAgICAgdGhpcy5fYmFyU3BhY2VSYXRpbyA9IFsxLCAxXTtcbiAgICAgICAgdGhpcy5fZm9ybWF0ID0gJ2kyb2Y1JztcblxuICAgICAgICBpZiAodGhpcy5jb25maWcubm9ybWFsaXplQmFyU3BhY2VXaWR0aCkge1xuICAgICAgICAgICAgdGhpcy5fc2luZ2xlQ29kZUVycm9yID0gMC4zODtcbiAgICAgICAgICAgIHRoaXMuX2F2ZXJhZ2VDb2RlRXJyb3IgPSAwLjA5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fc2luZ2xlQ29kZUVycm9yID0gMC43ODtcbiAgICAgICAgICAgIHRoaXMuX2F2ZXJhZ2VDb2RlRXJyb3IgPSAwLjM4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGVjb2RlKCk6IEJhcmNvZGUge1xuICAgICAgICBjb25zdCBzdGFydEluZm8gPSB0aGlzLl9maW5kU3RhcnQoKTtcblxuICAgICAgICBpZiAoIXN0YXJ0SW5mbykge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBlbmRJbmZvID0gdGhpcy5fZmluZEVuZCgpO1xuXG4gICAgICAgIGlmICghZW5kSW5mbykge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjb3VudGVycyA9IHRoaXMuX2ZpbGxDb3VudGVycyhzdGFydEluZm8uZW5kLCBlbmRJbmZvLnN0YXJ0LCAwKTtcblxuICAgICAgICBpZiAoY291bnRlcnMubGVuZ3RoICUgMTAgIT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEFycmF5PG51bWJlcj4oKTtcbiAgICAgICAgY29uc3QgZGVjb2RlZENvZGVzID0gbmV3IEFycmF5PEJhcmNvZGVJbmZvPigpO1xuXG4gICAgICAgIGRlY29kZWRDb2Rlcy5wdXNoKHN0YXJ0SW5mbyk7XG5cbiAgICAgICAgY29uc3QgY29kZSA9IHRoaXMuX2RlY29kZVBheWxvYWQoY291bnRlcnMsIHJlc3VsdCwgZGVjb2RlZENvZGVzKTtcblxuICAgICAgICBpZiAoIWNvZGUgfHwgcmVzdWx0Lmxlbmd0aCAlIDIgIT09IDAgfHwgcmVzdWx0Lmxlbmd0aCA8IDYpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVjb2RlZENvZGVzLnB1c2goZW5kSW5mbyk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvZGU6IHJlc3VsdC5qb2luKCcnKSxcbiAgICAgICAgICAgIHN0YXJ0OiBzdGFydEluZm8uc3RhcnQsXG4gICAgICAgICAgICBlbmQ6IGVuZEluZm8uZW5kLFxuICAgICAgICAgICAgc3RhcnRJbmZvLFxuICAgICAgICAgICAgZGVjb2RlZENvZGVzXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9tYXRjaFBhdHRlcm4oY291bnRlcjogQXJyYXk8bnVtYmVyPiwgY29kZTogUmVhZG9ubHlBcnJheTxudW1iZXI+KTogbnVtYmVyIHtcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLm5vcm1hbGl6ZUJhclNwYWNlV2lkdGgpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvdW50ZXJTdW06IFtudW1iZXIsIG51bWJlcl0gPSBbMCwgMF07XG4gICAgICAgICAgICBjb25zdCBjb2RlU3VtOiBbbnVtYmVyLCBudW1iZXJdID0gWzAsIDBdO1xuICAgICAgICAgICAgY29uc3QgY29ycmVjdGlvbjogW251bWJlciwgbnVtYmVyXSA9IFswLCAwXTtcbiAgICAgICAgICAgIGNvbnN0IGNvcnJlY3Rpb25SYXRpbyA9IE1BWF9DT1JSRUNUSU9OX0ZBQ1RPUjtcbiAgICAgICAgICAgIGNvbnN0IGNvcnJlY3Rpb25SYXRpb0ludmVyc2UgPSAxIC8gY29ycmVjdGlvblJhdGlvO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50ZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb3VudGVyU3VtW2kgJSAyXSArPSBjb3VudGVyW2ldO1xuICAgICAgICAgICAgICAgIGNvZGVTdW1baSAlIDJdICs9IGNvZGVbaV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvcnJlY3Rpb25bMF0gPSBjb2RlU3VtWzBdIC8gY291bnRlclN1bVswXTtcbiAgICAgICAgICAgIGNvcnJlY3Rpb25bMV0gPSBjb2RlU3VtWzFdIC8gY291bnRlclN1bVsxXTtcblxuICAgICAgICAgICAgY29ycmVjdGlvblswXSA9IE1hdGgubWF4KE1hdGgubWluKGNvcnJlY3Rpb25bMF0sIGNvcnJlY3Rpb25SYXRpbyksIGNvcnJlY3Rpb25SYXRpb0ludmVyc2UpO1xuICAgICAgICAgICAgY29ycmVjdGlvblsxXSA9IE1hdGgubWF4KE1hdGgubWluKGNvcnJlY3Rpb25bMV0sIGNvcnJlY3Rpb25SYXRpbyksIGNvcnJlY3Rpb25SYXRpb0ludmVyc2UpO1xuICAgICAgICAgICAgdGhpcy5fYmFyU3BhY2VSYXRpbyA9IGNvcnJlY3Rpb247XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnRlci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvdW50ZXJbaV0gKj0gdGhpcy5fYmFyU3BhY2VSYXRpb1tpICUgMl07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VwZXIuX21hdGNoUGF0dGVybihjb3VudGVyLCBjb2RlKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2ZpbmRTdGFydCgpOiBCYXJjb2RlSW5mbyB7XG4gICAgICAgIGxldCBvZmZzZXQgPSB0aGlzLl9uZXh0U2V0KHRoaXMuX3Jvdyk7XG4gICAgICAgIGxldCBzdGFydEluZm86IEJhcmNvZGVJbmZvO1xuXG4gICAgICAgIHdoaWxlICghc3RhcnRJbmZvKSB7XG4gICAgICAgICAgICBzdGFydEluZm8gPSB0aGlzLl9maW5kUGF0dGVybihTVEFSVF9QQVRURVJOLCBvZmZzZXQsIDAsIHRydWUpO1xuICAgICAgICAgICAgaWYgKCFzdGFydEluZm8pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgbmFycm93QmFyV2lkdGggPSAoc3RhcnRJbmZvLmVuZCAtIHN0YXJ0SW5mby5zdGFydCkgPj4gMjtcbiAgICAgICAgICAgIGNvbnN0IGxlYWRpbmdXaGl0ZXNwYWNlU3RhcnQgPSBzdGFydEluZm8uc3RhcnQgLSBuYXJyb3dCYXJXaWR0aCAqIDEwO1xuXG4gICAgICAgICAgICBpZiAobGVhZGluZ1doaXRlc3BhY2VTdGFydCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX21hdGNoUmFuZ2UobGVhZGluZ1doaXRlc3BhY2VTdGFydCwgc3RhcnRJbmZvLnN0YXJ0LCAwKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RhcnRJbmZvO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgb2Zmc2V0ID0gc3RhcnRJbmZvLmVuZDtcbiAgICAgICAgICAgIHN0YXJ0SW5mbyA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX3ZlcmlmeVRyYWlsaW5nV2hpdGVzcGFjZShlbmRJbmZvOiBCYXJjb2RlSW5mbyk6IEJhcmNvZGVJbmZvIHtcbiAgICAgICAgY29uc3QgdHJhaWxpbmdXaGl0ZXNwYWNlRW5kID0gZW5kSW5mby5lbmQgKyAoZW5kSW5mby5lbmQgLSBlbmRJbmZvLnN0YXJ0KSAvIDI7XG5cbiAgICAgICAgaWYgKHRyYWlsaW5nV2hpdGVzcGFjZUVuZCA8IHRoaXMuX3Jvdy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9tYXRjaFJhbmdlKGVuZEluZm8uZW5kLCB0cmFpbGluZ1doaXRlc3BhY2VFbmQsIDApKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVuZEluZm87XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2ZpbmRFbmQoKTogQmFyY29kZUluZm8ge1xuICAgICAgICB0aGlzLl9yb3cucmV2ZXJzZSgpO1xuXG4gICAgICAgIGNvbnN0IGVuZEluZm8gPSB0aGlzLl9maW5kUGF0dGVybihTVE9QX1BBVFRFUk4sIHVuZGVmaW5lZCwgMCwgZmFsc2UpO1xuXG4gICAgICAgIHRoaXMuX3Jvdy5yZXZlcnNlKCk7XG5cbiAgICAgICAgaWYgKGVuZEluZm8gPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcmV2ZXJzZSBudW1iZXJzXG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gZW5kSW5mby5zdGFydDtcbiAgICAgICAgZW5kSW5mby5zdGFydCA9IHRoaXMuX3Jvdy5sZW5ndGggLSBlbmRJbmZvLmVuZDtcbiAgICAgICAgZW5kSW5mby5lbmQgPSB0aGlzLl9yb3cubGVuZ3RoIC0gc3RhcnQ7XG5cbiAgICAgICAgcmV0dXJuIGVuZEluZm8gIT09IG51bGwgPyB0aGlzLl92ZXJpZnlUcmFpbGluZ1doaXRlc3BhY2UoZW5kSW5mbykgOiBudWxsO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZGVjb2RlQ29kZShjb3VudGVyOiBBcnJheTxudW1iZXI+KTogQmFyY29kZUluZm8ge1xuICAgICAgICBjb25zdCBiZXN0TWF0Y2g6IEJhcmNvZGVJbmZvID0ge1xuICAgICAgICAgICAgZXJyb3I6IE51bWJlci5NQVhfVkFMVUUsXG4gICAgICAgICAgICBjb2RlOiAtMSxcbiAgICAgICAgICAgIHN0YXJ0OiAwLFxuICAgICAgICAgICAgZW5kOiAwXG4gICAgICAgIH07XG5cbiAgICAgICAgZm9yIChsZXQgY29kZSA9IDA7IGNvZGUgPCBDT0RFX1BBVFRFUk4ubGVuZ3RoOyBjb2RlKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGVycm9yID0gdGhpcy5fbWF0Y2hQYXR0ZXJuKGNvdW50ZXIsIENPREVfUEFUVEVSTltjb2RlXSk7XG4gICAgICAgICAgICBpZiAoZXJyb3IgPCBiZXN0TWF0Y2guZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBiZXN0TWF0Y2guY29kZSA9IGNvZGU7XG4gICAgICAgICAgICAgICAgYmVzdE1hdGNoLmVycm9yID0gZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYmVzdE1hdGNoLmVycm9yIDwgdGhpcy5BVkVSQUdFX0NPREVfRVJST1IgPyBiZXN0TWF0Y2ggOiBudWxsO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZGVjb2RlUGF5bG9hZChjb3VudGVyczogUmVhZG9ubHlBcnJheTxudW1iZXI+LCByZXN1bHQ6IEFycmF5PG51bWJlcj4sIGRlY29kZWRDb2RlczogQXJyYXk8QmFyY29kZUluZm8+KTogW0JhcmNvZGVJbmZvLCBCYXJjb2RlSW5mb10ge1xuICAgICAgICBjb25zdCBjb3VudGVyTGVuZ3RoID0gY291bnRlcnMubGVuZ3RoO1xuICAgICAgICBjb25zdCBjb3VudGVyMCA9IFswLCAwLCAwLCAwLCAwXTtcbiAgICAgICAgY29uc3QgY291bnRlcjEgPSBbMCwgMCwgMCwgMCwgMF07XG4gICAgICAgIGxldCBjb2RlMDogQmFyY29kZUluZm87XG4gICAgICAgIGxldCBjb2RlMTogQmFyY29kZUluZm87XG4gICAgICAgIGxldCBwb3MgPSAwO1xuXG4gICAgICAgIHdoaWxlIChwb3MgPCBjb3VudGVyTGVuZ3RoKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvdW50ZXIwW2ldID0gY291bnRlcnNbcG9zXSAqIHRoaXMuX2JhclNwYWNlUmF0aW9bMF07XG4gICAgICAgICAgICAgICAgY291bnRlcjFbaV0gPSBjb3VudGVyc1twb3MgKyAxXSAqIHRoaXMuX2JhclNwYWNlUmF0aW9bMV07XG4gICAgICAgICAgICAgICAgcG9zICs9IDI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvZGUwID0gdGhpcy5fZGVjb2RlQ29kZShjb3VudGVyMCk7XG4gICAgICAgICAgICBpZiAoIWNvZGUwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvZGUxID0gdGhpcy5fZGVjb2RlQ29kZShjb3VudGVyMSk7XG4gICAgICAgICAgICBpZiAoIWNvZGUxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGNvZGUwLmNvZGUsIGNvZGUxLmNvZGUpO1xuICAgICAgICAgICAgZGVjb2RlZENvZGVzLnB1c2goY29kZTAsIGNvZGUxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBbY29kZTAsIGNvZGUxXTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb2RlMTI4UmVhZGVyIH0gZnJvbSAnLi9jb2RlLTEyOC1yZWFkZXInO1xuaW1wb3J0IHsgQ29kZTM5UmVhZGVyIH0gZnJvbSAnLi9jb2RlLTM5LXJlYWRlcic7XG5pbXBvcnQgeyBDb2RlMzlWSU5SZWFkZXIgfSBmcm9tICcuL2NvZGUtMzktdmluLXJlYWRlcic7XG5pbXBvcnQgeyBDb2RhYmFyUmVhZGVyIH0gZnJvbSAnLi9jb2RhYmFyLXJlYWRlcic7XG5pbXBvcnQgeyBFQU5SZWFkZXIgfSBmcm9tICcuL2Vhbi1yZWFkZXInO1xuaW1wb3J0IHsgRUFOOFJlYWRlciB9IGZyb20gJy4vZWFuLTgtcmVhZGVyJztcbmltcG9ydCB7IEVBTjJSZWFkZXIgfSBmcm9tICcuL2Vhbi0yLXJlYWRlcic7XG5pbXBvcnQgeyBFQU41UmVhZGVyIH0gZnJvbSAnLi9lYW4tNS1yZWFkZXInO1xuaW1wb3J0IHsgVVBDUmVhZGVyIH0gZnJvbSAnLi91cGMtcmVhZGVyJztcbmltcG9ydCB7IFVQQ0VSZWFkZXIgfSBmcm9tICcuL3VwYy1lLXJlYWRlcic7XG5pbXBvcnQgeyBJMm9mNVJlYWRlciB9IGZyb20gJy4vaTJvZjUtcmVhZGVyJztcbmltcG9ydCB7IFR3b09mRml2ZVJlYWRlciB9IGZyb20gJy4vMm9mNS1yZWFkZXInO1xuaW1wb3J0IHsgQ29kZTkzUmVhZGVyIH0gZnJvbSAnLi9jb2RlLTkzLXJlYWRlcic7XG5cbmV4cG9ydCBjb25zdCBSZWFkZXJzID0ge1xuICAgIGNvZGVfMTI4X3JlYWRlcjogQ29kZTEyOFJlYWRlcixcbiAgICBlYW5fcmVhZGVyOiBFQU5SZWFkZXIsXG4gICAgZWFuXzVfcmVhZGVyOiBFQU41UmVhZGVyLFxuICAgIGVhbl8yX3JlYWRlcjogRUFOMlJlYWRlcixcbiAgICBlYW5fOF9yZWFkZXI6IEVBTjhSZWFkZXIsXG4gICAgY29kZV8zOV9yZWFkZXI6IENvZGUzOVJlYWRlcixcbiAgICBjb2RlXzM5X3Zpbl9yZWFkZXI6IENvZGUzOVZJTlJlYWRlcixcbiAgICBjb2RhYmFyX3JlYWRlcjogQ29kYWJhclJlYWRlcixcbiAgICB1cGNfcmVhZGVyOiBVUENSZWFkZXIsXG4gICAgdXBjX2VfcmVhZGVyOiBVUENFUmVhZGVyLFxuICAgIGkyb2Y1X3JlYWRlcjogSTJvZjVSZWFkZXIsXG4gICAgJzJvZjVfcmVhZGVyJzogVHdvT2ZGaXZlUmVhZGVyLFxuICAgIGNvZGVfOTNfcmVhZGVyOiBDb2RlOTNSZWFkZXJcbn07XG4iLCJpbXBvcnQgeyBCYXJjb2RlSW5mbywgQmFyY29kZVJlYWRlciwgQmFyY29kZVJlYWRlckNvbmZpZyB9IGZyb20gJy4vYmFyY29kZS1yZWFkZXInO1xuaW1wb3J0IHsgRUFOUmVhZGVyIH0gZnJvbSAnLi9lYW4tcmVhZGVyJztcblxuY29uc3QgQ09ERV9GUkVRVUVOQ1kgPSBbWzU2LCA1MiwgNTAsIDQ5LCA0NCwgMzgsIDM1LCA0MiwgNDEsIDM3XSwgWzcsIDExLCAxMywgMTQsIDE5LCAyNSwgMjgsIDIxLCAyMiwgMjZdXTtcblxuZXhwb3J0IGNsYXNzIFVQQ0VSZWFkZXIgZXh0ZW5kcyBFQU5SZWFkZXIge1xuICAgIGdldCBTVE9QX1BBVFRFUk4oKSB7XG4gICAgICAgIHJldHVybiBbMSAvIDYgKiA3LCAxIC8gNiAqIDcsIDEgLyA2ICogNywgMSAvIDYgKiA3LCAxIC8gNiAqIDcsIDEgLyA2ICogN107XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoY29uZmlnPzogQmFyY29kZVJlYWRlckNvbmZpZywgc3VwcGxlbWVudHM/OiBBcnJheTxCYXJjb2RlUmVhZGVyPikge1xuICAgICAgICBzdXBlcihjb25maWcsIHN1cHBsZW1lbnRzKTtcblxuICAgICAgICB0aGlzLl9mb3JtYXQgPSAndXBjX2UnO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZGVjb2RlUGF5bG9hZChjb2RlOiBCYXJjb2RlSW5mbywgcmVzdWx0OiBBcnJheTxudW1iZXI+LCBkZWNvZGVkQ29kZXM6IEFycmF5PEJhcmNvZGVJbmZvPik6IEJhcmNvZGVJbmZvIHtcbiAgICAgICAgbGV0IGNvZGVGcmVxdWVuY3kgPSAweDA7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICAgICAgICAgIGNvZGUgPSB0aGlzLl9kZWNvZGVDb2RlKGNvZGUuZW5kKTtcbiAgICAgICAgICAgIGlmICghY29kZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvZGUuY29kZSA+PSB0aGlzLkNPREVfR19TVEFSVCkge1xuICAgICAgICAgICAgICAgIGNvZGUuY29kZSA9IGNvZGUuY29kZSAtIHRoaXMuQ09ERV9HX1NUQVJUO1xuICAgICAgICAgICAgICAgIGNvZGVGcmVxdWVuY3kgfD0gMSA8PCAoNSAtIGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goY29kZS5jb2RlKTtcbiAgICAgICAgICAgIGRlY29kZWRDb2Rlcy5wdXNoKGNvZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLl9kZXRlcm1pbmVQYXJpdHkoY29kZUZyZXF1ZW5jeSwgcmVzdWx0KSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29kZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9kZXRlcm1pbmVQYXJpdHkoY29kZUZyZXF1ZW5jeTogbnVtYmVyLCByZXN1bHQ6IEFycmF5PG51bWJlcj4pOiBib29sZWFuIHtcbiAgICAgICAgZm9yIChsZXQgbnJTeXN0ZW0gPSAwOyBuclN5c3RlbSA8IENPREVfRlJFUVVFTkNZLmxlbmd0aDsgbnJTeXN0ZW0rKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBDT0RFX0ZSRVFVRU5DWVtuclN5c3RlbV0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoY29kZUZyZXF1ZW5jeSA9PT0gQ09ERV9GUkVRVUVOQ1lbbnJTeXN0ZW1dW2ldKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC51bnNoaWZ0KG5yU3lzdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goaSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfY29udmVydFRvVVBDQShyZXN1bHQ6IEFycmF5PG51bWJlcj4pOiBBcnJheTxudW1iZXI+IHtcbiAgICAgICAgY29uc3QgbGFzdERpZ2l0ID0gcmVzdWx0W3Jlc3VsdC5sZW5ndGggLSAyXTtcbiAgICAgICAgbGV0IHVwY2EgPSBbcmVzdWx0WzBdXTtcblxuICAgICAgICBpZiAobGFzdERpZ2l0IDw9IDIpIHtcbiAgICAgICAgICAgIHVwY2EgPSB1cGNhLmNvbmNhdChyZXN1bHQuc2xpY2UoMSwgMykpLmNvbmNhdChbbGFzdERpZ2l0LCAwLCAwLCAwLCAwXSkuY29uY2F0KHJlc3VsdC5zbGljZSgzLCA2KSk7XG4gICAgICAgIH0gZWxzZSBpZiAobGFzdERpZ2l0ID09PSAzKSB7XG4gICAgICAgICAgICB1cGNhID0gdXBjYS5jb25jYXQocmVzdWx0LnNsaWNlKDEsIDQpKS5jb25jYXQoWzAsIDAsIDAsIDAsIDBdKS5jb25jYXQocmVzdWx0LnNsaWNlKDQsIDYpKTtcbiAgICAgICAgfSBlbHNlIGlmIChsYXN0RGlnaXQgPT09IDQpIHtcbiAgICAgICAgICAgIHVwY2EgPSB1cGNhLmNvbmNhdChyZXN1bHQuc2xpY2UoMSwgNSkpLmNvbmNhdChbMCwgMCwgMCwgMCwgMCwgcmVzdWx0WzVdXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB1cGNhID0gdXBjYS5jb25jYXQocmVzdWx0LnNsaWNlKDEsIDYpKS5jb25jYXQoWzAsIDAsIDAsIDAsIGxhc3REaWdpdF0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdXBjYS5wdXNoKHJlc3VsdFtyZXN1bHQubGVuZ3RoIC0gMV0pO1xuICAgICAgICByZXR1cm4gdXBjYTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2NoZWNrc3VtKHJlc3VsdDogQXJyYXk8bnVtYmVyPik6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gc3VwZXIuX2NoZWNrc3VtKHRoaXMuX2NvbnZlcnRUb1VQQ0EocmVzdWx0KSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9maW5kRW5kKG9mZnNldDogbnVtYmVyLCBpc1doaXRlOiAwIHwgMSkge1xuICAgICAgICBpc1doaXRlID0gMTtcbiAgICAgICAgcmV0dXJuIHN1cGVyLl9maW5kRW5kKG9mZnNldCwgaXNXaGl0ZSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF92ZXJpZnlUcmFpbGluZ1doaXRlc3BhY2UoZW5kSW5mbzogQmFyY29kZUluZm8pOiBCYXJjb2RlSW5mbyB7XG4gICAgICAgIGNvbnN0IHRyYWlsaW5nV2hpdGVzcGFjZUVuZCA9IGVuZEluZm8uZW5kICsgKGVuZEluZm8uZW5kIC0gZW5kSW5mby5zdGFydCkgLyAyO1xuXG4gICAgICAgIGlmICh0cmFpbGluZ1doaXRlc3BhY2VFbmQgPCB0aGlzLl9yb3cubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fbWF0Y2hSYW5nZShlbmRJbmZvLmVuZCwgdHJhaWxpbmdXaGl0ZXNwYWNlRW5kLCAwKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbmRJbmZvO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufSIsImltcG9ydCB7IEJhcmNvZGUsIEJhcmNvZGVSZWFkZXIsIEJhcmNvZGVSZWFkZXJDb25maWcgfSBmcm9tICcuL2JhcmNvZGUtcmVhZGVyJztcbmltcG9ydCB7IEVBTlJlYWRlciB9IGZyb20gJy4vZWFuLXJlYWRlcic7XG5cbmV4cG9ydCBjbGFzcyBVUENSZWFkZXIgZXh0ZW5kcyBFQU5SZWFkZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZz86IEJhcmNvZGVSZWFkZXJDb25maWcsIHN1cHBsZW1lbnRzPzogQXJyYXk8QmFyY29kZVJlYWRlcj4pIHtcbiAgICAgICAgc3VwZXIoY29uZmlnLCBzdXBwbGVtZW50cyk7XG5cbiAgICAgICAgdGhpcy5fZm9ybWF0ID0gJ3VwY19hJztcbiAgICB9XG5cbiAgICBkZWNvZGUoKTogQmFyY29kZSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLmRlY29kZSgpO1xuXG4gICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LmNvZGUgJiYgcmVzdWx0LmNvZGUubGVuZ3RoID09PSAxMyAmJiByZXN1bHQuY29kZS5jaGFyQXQoMCkgPT09ICcwJykge1xuICAgICAgICAgICAgcmVzdWx0LmNvZGUgPSByZXN1bHQuY29kZS5zdWJzdHJpbmcoMSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=