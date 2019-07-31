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

var Quagga =
/*#__PURE__*/
function () {
  function Quagga() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Quagga);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Quagga, null, [{
    key: "init",
    value: function init(config, cb, imageWrapper) {
      _onUIThread = true;
      _config = Object(_common_merge__WEBPACK_IMPORTED_MODULE_5__["merge"])(_config_config__WEBPACK_IMPORTED_MODULE_6__["config"], config);

      if (imageWrapper) {
        _onUIThread = false;

        _initializeData(imageWrapper);

        cb();
      } else {
        _initInputStream(cb);
      }
    }
  }, {
    key: "start",
    value: function start() {
      if (_onUIThread && _config.inputStream.type === 'LiveStream') {
        _startContinuousUpdate();
      } else {
        _update();
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      _stopped = true;

      _adjustWorkerPool(0);

      if (_config.inputStream.type === 'LiveStream') {
        _input_camera_access__WEBPACK_IMPORTED_MODULE_8__["CameraAccess"].release();

        _inputStream.clearEventHandlers();
      }
    }
  }, {
    key: "decodeSingle",
    value: function decodeSingle(config, resultCallback) {
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
      Quagga.init(config, function () {
        _common_events__WEBPACK_IMPORTED_MODULE_3__["Events"].once('processed', function (result) {
          Quagga.stop();
          resultCallback.call(null, result);
        }, true);
        Quagga.start();
      });
    }
  }, {
    key: "pause",
    value: function pause() {
      _stopped = true;
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
  }, {
    key: "registerResultCollector",
    value: function registerResultCollector(resultCollector) {
      if (resultCollector && typeof resultCollector.addResult === 'function') {
        _resultCollector = resultCollector;
      }
    }
  }, {
    key: "canvas",
    get: function get() {
      return _canvasContainer;
    }
  }]);

  return Quagga;
}();

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(Quagga, "CameraAccess", void 0);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(Quagga, "ImageDebug", void 0);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(Quagga, "ImageWrapper", void 0);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(Quagga, "ResultCollector", void 0);

function _initializeData(imageWrapper) {
  _initBuffers(imageWrapper);

  _decoder = new _decoder_barcode_decoder__WEBPACK_IMPORTED_MODULE_7__["BarcodeDecoder"](_config.decoder, _inputImageWrapper);
}

function _initInputStream(callback) {
  var video;

  if (_config.inputStream.type === 'VideoStream') {
    video = document.createElement('video');
    _inputStream = new _input_video_stream__WEBPACK_IMPORTED_MODULE_12__["VideoStream"](video);
  } else if (_config.inputStream.type === 'ImageStream') {
    _inputStream = new _input_image_stream__WEBPACK_IMPORTED_MODULE_10__["ImageStream"]();
  } else if (_config.inputStream.type === 'LiveStream') {
    var viewport = _getViewPort();

    if (viewport) {
      video = viewport.querySelector('video');

      if (!video) {
        video = document.createElement('video');
        viewport.appendChild(video);
      }
    }

    _inputStream = new _input_live_stream__WEBPACK_IMPORTED_MODULE_11__["LiveStream"](video);
    _input_camera_access__WEBPACK_IMPORTED_MODULE_8__["CameraAccess"].request(video, _config.inputStream.constraints).then(function () {
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
  Object(_input_input_stream_utils__WEBPACK_IMPORTED_MODULE_13__["checkImageConstraints"])(_inputStream, _config.locator);

  _initCanvas();

  _frameGrabber = new _input_frame_grabber__WEBPACK_IMPORTED_MODULE_9__["FrameGrabber"](_inputStream, _canvasContainer.dom.image);

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
    _inputImageWrapper = new _common_image_wrapper__WEBPACK_IMPORTED_MODULE_4__["ImageWrapper"]({
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
  _locator = new _locator_barcode_locator__WEBPACK_IMPORTED_MODULE_14__["BarcodeLocator"](_inputImageWrapper, _config.locator);
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

  _common_events__WEBPACK_IMPORTED_MODULE_3__["Events"].publish('processed', resultToPublish);

  if (_hasCodeResult(result)) {
    _common_events__WEBPACK_IMPORTED_MODULE_3__["Events"].publish('detected', resultToPublish);
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
    config: Object(_common_merge__WEBPACK_IMPORTED_MODULE_5__["merge"])(_config, {
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
      imageWrapper = new _common_image_wrapper__WEBPACK_IMPORTED_MODULE_4__["ImageWrapper"]({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9RdWFnZ2Evd2VicGFjay9teU1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vUXVhZ2dhL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1F1YWdnYS8vVXNlcnMvYWRvbXJhdGNoZXYvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy9Vc2Vycy9hZG9tcmF0Y2hldi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy9Vc2Vycy9hZG9tcmF0Y2hldi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yLmpzIiwid2VicGFjazovL1F1YWdnYS8vVXNlcnMvYWRvbXJhdGNoZXYvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy9Vc2Vycy9hZG9tcmF0Y2hldi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly9RdWFnZ2EvL1VzZXJzL2Fkb21yYXRjaGV2L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL1F1YWdnYS8vVXNlcnMvYWRvbXJhdGNoZXYvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0LmpzIiwid2VicGFjazovL1F1YWdnYS8vVXNlcnMvYWRvbXJhdGNoZXYvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy9Vc2Vycy9hZG9tcmF0Y2hldi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly9RdWFnZ2EvL1VzZXJzL2Fkb21yYXRjaGV2L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9RdWFnZ2EvL1VzZXJzL2Fkb21yYXRjaGV2L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL1F1YWdnYS8vVXNlcnMvYWRvbXJhdGNoZXYvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly9RdWFnZ2EvL1VzZXJzL2Fkb21yYXRjaGV2L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL1F1YWdnYS8vVXNlcnMvYWRvbXJhdGNoZXYvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc3VwZXJQcm9wQmFzZS5qcyIsIndlYnBhY2s6Ly9RdWFnZ2EvL1VzZXJzL2Fkb21yYXRjaGV2L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovL1F1YWdnYS8vVXNlcnMvYWRvbXJhdGNoZXYvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL1F1YWdnYS8vVXNlcnMvYWRvbXJhdGNoZXYvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwid2VicGFjazovL1F1YWdnYS8vVXNlcnMvYWRvbXJhdGNoZXYvbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS1tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy9Vc2Vycy9hZG9tcmF0Y2hldi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovL1F1YWdnYS8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL2NvbW1vbi9jbHVzdGVyLnRzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9jb21tb24vZXZlbnRzLnRzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9jb21tb24vaHN2MnJnYi50cyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvY29tbW9uL2ltYWdlLWRlYnVnLnRzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9jb21tb24vaW1hZ2Utd3JhcHBlci50cyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvY29tbW9uL21lZGlhLWRldmljZXMudHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL2NvbW1vbi9tZXJnZS50cyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvY29uZmlnL2NvbmZpZy5kZXYudHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL2RlY29kZXIvYmFyY29kZS1kZWNvZGVyLnRzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9kZWNvZGVyL2JyZXNlbmhhbS50cyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvaW5wdXQvY2FtZXJhLWFjY2Vzcy50cyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvaW5wdXQvZXhpZi1oZWxwZXIudHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL2lucHV0L2ZyYW1lLWdyYWJiZXIudHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL2lucHV0L2ltYWdlLWxvYWRlci50cyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvaW5wdXQvaW1hZ2Utc3RyZWFtLnRzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9pbnB1dC9pbnB1dC1zdHJlYW0tdXRpbHMudHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL2lucHV0L2lucHV0LXN0cmVhbS50cyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvaW5wdXQvbGl2ZS1zdHJlYW0udHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL2lucHV0L3ZpZGVvLXN0cmVhbS50cyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvbG9jYXRvci9iYXJjb2RlLWxvY2F0b3ItdXRpbHMudHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL2xvY2F0b3IvYmFyY29kZS1sb2NhdG9yLnRzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9sb2NhdG9yL3Jhc3Rlcml6ZXIudHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL2xvY2F0b3Ivc2tlbGV0b25pemVyLmpzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9sb2NhdG9yL3RyYWNlci50cyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvcXVhZ2dhLnRzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9yZWFkZXIvMm9mNS1yZWFkZXIudHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL3JlYWRlci9iYXJjb2RlLXJlYWRlci50cyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvcmVhZGVyL2NvZGFiYXItcmVhZGVyLnRzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9yZWFkZXIvY29kZS0xMjgtcmVhZGVyLnRzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9yZWFkZXIvY29kZS0zOS1yZWFkZXIudHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL3JlYWRlci9jb2RlLTM5LXZpbi1yZWFkZXIudHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL3JlYWRlci9jb2RlLTkzLXJlYWRlci50cyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvcmVhZGVyL2Vhbi0yLXJlYWRlci50cyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvcmVhZGVyL2Vhbi01LXJlYWRlci50cyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvcmVhZGVyL2Vhbi04LXJlYWRlci50cyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvcmVhZGVyL2Vhbi1yZWFkZXIudHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL3JlYWRlci9pMm9mNS1yZWFkZXIudHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL3JlYWRlci9pbmRleC50cyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvcmVhZGVyL3VwYy1lLXJlYWRlci50cyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvcmVhZGVyL3VwYy1yZWFkZXIudHMiXSwibmFtZXMiOlsiQ2x1c3RlciIsIm1vbWVudHMiLCJ0aHJlc2hvbGQiLCJjbHVzdGVycyIsIkFycmF5IiwiZm9yRWFjaCIsIm1vbWVudCIsIm1hdGNoaW5nQ2x1c3RlciIsImZpbmQiLCJjbHVzdGVyIiwiZml0cyIsImFkZCIsInB1c2giLCJfdGhyZXNob2xkIiwiX21vbWVudHMiLCJfY2VudGVyIiwicmFkIiwieCIsInkiLCJwb2ludCIsInJlZHVjZSIsInN1bSIsInAiLCJsZW5ndGgiLCJNYXRoIiwiY29zIiwic2luIiwic2ltaWxhcml0eSIsImFicyIsImV2ZW50cyIsIkV2ZW50cyIsImV2ZW50IiwiY2FsbGJhY2siLCJhc3luYyIsInN1YnNjcmlwdGlvbiIsImdldEV2ZW50Iiwic3Vic2NyaXB0aW9ucyIsInR5cGUiLCJkYXRhIiwiZXZlbnRJdGVtIiwiZmlsdGVyIiwib25jZSIsInB1Ymxpc2hTdWJzY3JpcHRpb24iLCJzdWJzY3JpYmUiLCJldmVudE5hbWUiLCJzZXRUaW1lb3V0IiwiaHN2MnJnYiIsImhzdiIsInJnYiIsImgiLCJzIiwidiIsImMiLCJtIiwiciIsImciLCJiIiwiSW1hZ2VEZWJ1ZyIsInBhdGgiLCJjb250ZXh0IiwiY29sb3IiLCJsaW5lV2lkdGgiLCJzdHJva2VTdHlsZSIsImZpbGxTdHlsZSIsImJlZ2luUGF0aCIsIm1vdmVUbyIsInNsaWNlIiwibGluZVRvIiwiY2xvc2VQYXRoIiwic3Ryb2tlIiwiaW1hZ2VEYXRhIiwid2lkdGgiLCJoZWlnaHQiLCJjYW52YXNEYXRhIiwiZ2V0SW1hZ2VEYXRhIiwiaW1hZ2VJbmRleCIsImNhbnZhc0luZGV4IiwidmFsdWUiLCJwdXRJbWFnZURhdGEiLCJJbWFnZVdyYXBwZXIiLCJzaXplIiwiYXJyYXlUeXBlIiwiaW5pdGlhbGl6ZSIsIlVpbnQ4QXJyYXkiLCJmaWxsIiwiYm9yZGVyIiwiaW1hZ2VXcmFwcGVyIiwiZnJvbVgiLCJmcm9tWSIsInNpemVZIiwic2l6ZVgiLCJpIiwibGFiZWxDb3VudCIsImxhYmVsU3VtIiwicmVzdWx0IiwibTAwIiwibTAxIiwibTEwIiwibTExIiwibTAyIiwibTIwIiwidGhldGEiLCJ5c3EiLCJ2YWwiLCJsYWJlbCIsIlBJIiwiUElfNCIsImlzTmFOIiwieF8iLCJ5XyIsIm11MTEiLCJtdTAyIiwibXUyMCIsInRtcCIsImF0YW4iLCJzY2FsZSIsImZyYW1lIiwiY3VycmVudCIsInBpeGVsIiwiZ2V0Iiwid2hpdGVSZ2IiLCJibGFja1JnYiIsImVudW1lcmF0ZURldmljZXMiLCJuYXZpZ2F0b3IiLCJtZWRpYURldmljZXMiLCJQcm9taXNlIiwicmVqZWN0IiwiRXJyb3IiLCJnZXRVc2VyTWVkaWEiLCJjb25zdHJhaW50cyIsIm1lcmdlIiwiaXNPYmplY3QiLCJvYmoiLCJvYmplY3RzIiwicHJldiIsIk9iamVjdCIsImtleXMiLCJrZXkiLCJwVmFsIiwib1ZhbCIsImlzQXJyYXkiLCJjb25maWciLCJpbnB1dFN0cmVhbSIsIm5hbWUiLCJmYWNpbmdNb2RlIiwiYXJlYSIsInRvcCIsInJpZ2h0IiwibGVmdCIsImJvdHRvbSIsInNpbmdsZUNoYW5uZWwiLCJsb2NhdGUiLCJudW1PZldvcmtlcnMiLCJkZWNvZGVyIiwicmVhZGVycyIsImRlYnVnIiwiZHJhd0JvdW5kaW5nQm94Iiwic2hvd0ZyZXF1ZW5jeSIsImRyYXdTY2FubGluZSIsInNob3dQYXR0ZXJuIiwibG9jYXRvciIsImhhbGZTYW1wbGUiLCJwYXRjaFNpemUiLCJzaG93Q2FudmFzIiwic2hvd1BhdGNoZXMiLCJzaG93Rm91bmRQYXRjaGVzIiwic2hvd1NrZWxldG9uIiwic2hvd0xhYmVscyIsInNob3dQYXRjaExhYmVscyIsInNob3dSZW1haW5pbmdQYXRjaExhYmVscyIsImJveEZyb21QYXRjaGVzIiwic2hvd1RyYW5zZm9ybWVkIiwic2hvd1RyYW5zZm9ybWVkQm94Iiwic2hvd0JCIiwiQmFyY29kZURlY29kZXIiLCJpbnB1dEltYWdlV3JhcHBlciIsIl9jb25maWciLCJfaW5wdXRJbWFnZVdyYXBwZXIiLCJfYmFyY29kZVJlYWRlcnMiLCJwcm9jZXNzIiwiZG9jdW1lbnQiLCJkZWJ1Z0RpdiIsInF1ZXJ5U2VsZWN0b3IiLCJfZnJlcXVlbmN5Q2FudmFzIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImFwcGVuZENoaWxkIiwic3R5bGUiLCJkaXNwbGF5IiwiX3BhdHRlcm5DYW52YXMiLCJvdmVybGF5Q2FudmFzIiwiX292ZXJsYXlDb250ZXh0IiwiZ2V0Q29udGV4dCIsIl9pbml0UmVhZGVycyIsImJveGVzIiwiYmFyY29kZXMiLCJtdWx0aXBsZSIsImJveCIsImRlY29kZUZyb21Cb3VuZGluZ0JveCIsImNvZGVSZXN1bHQiLCJfZHJhd1BhdGgiLCJsaW5lIiwiX2dldExpbmUiLCJhbmdsZSIsImF0YW4yIiwiX2dldEV4dGVuZGVkTGluZSIsIl90cnlEZWNvZGUiLCJfdHJ5RGVjb2RlQnJ1dGVGb3JjZSIsInBhdHRlcm4iLCJiYXJjb2RlTGluZSIsInJlYWRlckNvbmZpZyIsInJlYWRlciIsImNvbmZpZ3VyYXRpb24iLCJzdXBwbGVtZW50cyIsImZvcm1hdCIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJzdXBwbGVtZW50IiwiUmVhZGVycyIsIkZPUk1BVCIsIkpTT04iLCJzdHJpbmdpZnkiLCJleHRlbmRMaW5lIiwiYW1vdW50IiwiZXh0ZW5zaW9uIiwibGluZUxlbmd0aCIsInNxcnQiLCJleHRlbnNpb25MZW5ndGgiLCJpbkltYWdlV2l0aEJvcmRlciIsIkJyZXNlbmhhbSIsImdldEJhcmNvZGVMaW5lIiwiX3ByaW50RnJlcXVlbmN5IiwidG9CaW5hcnlMaW5lIiwiX3ByaW50UGF0dGVybiIsImRlY29kZVBhdHRlcm4iLCJsaW5lQW5nbGUiLCJzaWRlTGVuZ3RoIiwic2xpY2VzIiwieGRpciIsInlkaXIiLCJkaXIiLCJmaWxsUmVjdCIsImRyYXdQYXRoIiwiU2xvcGUiLCJwMSIsInAyIiwieDAiLCJ5MCIsIngxIiwieTEiLCJzdGVlcCIsIm1pbiIsIm1heCIsInJlYWQiLCJhIiwiZGVsdGF4IiwiZGVsdGF5IiwiZXJyb3IiLCJ5c3RlcCIsImNlbnRlciIsImV4dHJlbWEiLCJyVGhyZXNob2xkIiwiY3VycmVudERpciIsIlVwIiwiRG93biIsInBvcyIsInNsb3BlIiwic2xvcGUyIiwiaiIsIl9zdHJlYW0iLCJDYW1lcmFBY2Nlc3MiLCJ2aWRlbyIsInZpZGVvQ29uc3RyYWludHMiLCJub3JtYWxpemVkQ29uc3RyYWludHMiLCJwaWNrQ29uc3RyYWludHMiLCJzcmNPYmplY3QiLCJzZXRBdHRyaWJ1dGUiLCJyZXNvbHZlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBsYXkiLCJ0aGVuIiwiX3dhaXRGb3JWaWRlbyIsImJpbmQiLCJ0cmFja3MiLCJnZXRWaWRlb1RyYWNrcyIsInN0b3AiLCJkZXZpY2VzIiwia2luZCIsInRyYWNrIiwiZ2V0QWN0aXZlVHJhY2siLCJhc3BlY3RSYXRpbyIsImRldmljZUlkIiwibWluQXNwZWN0UmF0aW8iLCJmYWNpbmciLCJhdWRpbyIsInZpZGVvV2lkdGgiLCJ2aWRlb0hlaWdodCIsImF0dGVtcHRzIiwiY2hlY2tWaWRlbyIsIndpbmRvdyIsIkV4aWZUYWdzIiwiQXZhaWxhYmxlVGFncyIsImZpbmRUYWdzSW5PYmplY3RVUkwiLCJzcmMiLCJ0YWdzIiwidGVzdCIsIm9iamVjdFVSTFRvQmxvYiIsImJ1ZmZlciIsImZpbmRUYWdzSW5CdWZmZXIiLCJmaWxlIiwic2VsZWN0ZWRUYWdzIiwiZGF0YVZpZXciLCJEYXRhVmlldyIsImJ5dGVMZW5ndGgiLCJleGlmVGFncyIsInNlbGVjdGVkVGFnIiwiZXhpZlRhZyIsInRhZyIsIm9mZnNldCIsImdldFVpbnQ4IiwibWFya2VyIiwicmVhZEVYSUZEYXRhIiwiZ2V0VWludDE2IiwidXJsIiwiZmV0Y2giLCJyZXNwb25zZSIsIm9rIiwiYXJyYXlCdWZmZXIiLCJzdGF0dXMiLCJzdGFydCIsInNwbGl0Iiwic29tZSIsImNoYXIiLCJpbmRleCIsImNoYXJDb2RlQXQiLCJ0aWZmT2Zmc2V0IiwiYmlnRW5kIiwiZmlyc3RJRkRPZmZzZXQiLCJnZXRVaW50MzIiLCJyZWFkVGFncyIsImRpclN0YXJ0Iiwic3RyaW5ncyIsImVudHJpZXMiLCJlbnRyeU9mZnNldCIsInJlYWRUYWdWYWx1ZSIsIm51bVZhbHVlcyIsInVuZGVmaW5lZCIsIlFVQVRFUl9DSVJDTEUiLCJGcmFtZUdyYWJiZXIiLCJjYW52YXMiLCJfaW5wdXRTdHJlYW0iLCJfc3RyZWFtQ29uZmlnIiwiX2NhbnZhc1dpZHRoIiwiY2FudmFzV2lkdGgiLCJfY2FudmFzSGVpZ2h0IiwiY2FudmFzSGVpZ2h0IiwiX3dpZHRoIiwiX2hlaWdodCIsIl90b3BMZWZ0IiwidG9wTGVmdCIsIl9jYW52YXMiLCJfY29udGV4dCIsIl9kYXRhIiwidmlkZW9TaXplIiwicmVhbFdpZHRoIiwicmVhbEhlaWdodCIsImNhbnZhc1NpemUiLCJnZXRGcmFtZSIsIl9hZGp1c3RDYW52YXNTaXplIiwiZHJhd2FibGUiLCJkcmF3QW5nbGUiLCJIVE1MVmlkZW9FbGVtZW50IiwiaW1hZ2UiLCJvcmllbnRhdGlvbiIsImhhbGZXaWR0aCIsImhhbGZIZWlnaHQiLCJ0cmFuc2xhdGUiLCJyb3RhdGUiLCJkcmF3SW1hZ2UiLCJfZ3JheUFuZEhhbGZTYW1wbGVGcm9tQ2FudmFzRGF0YSIsIl9jb21wdXRlR3JheSIsIndhcm4iLCJlbmRJbmRleCIsIm91dFdpZHRoIiwidG9wUm93SW5kZXgiLCJib3R0b21Sb3dJbmRleCIsIm91dEltYWdlSW5kZXgiLCJ0b3A0IiwiYm90dG9tNCIsImltYWdlRGF0YUxlbmd0aCIsIkltYWdlTG9hZGVyIiwiYmFzZVVyaSIsInNlcXVlbmNlIiwibG9hZGVkIiwibG9hZGVkSW1hZ2UiLCJub3RMb2FkZWRJbWFnZXMiLCJzcGxpY2UiLCJpbWFnZVNyY3MiLCJpbWFnZU5hbWUiLCJzdWJzdHIiLCJsYXN0SW5kZXhPZiIsImxvYWRlZEltYWdlcyIsImZpcnN0SW1hZ2UiLCJJbWFnZSIsIm9ubG9hZCIsIkltYWdlU3RyZWFtIiwiX2Jhc2VVcmwiLCJfZW5kZWQiLCJfZnJhbWVJbmRleCIsIl9pbWFnZXMiLCJfbG9hZGVkIiwiX29mZnNldCIsIl9wYXVzZWQiLCJfc2l6ZSIsInRyaWdnZXIiLCJsb2FkIiwiaW1hZ2VzIiwiX2NhbGN1bGF0ZWRXaWR0aCIsIl9jYWxjdWxhdGVkSGVpZ2h0IiwiX2xvYWRJbWFnZXMiLCJ0aW1lIiwiSW5wdXRTdHJlYW0iLCJfY29tcHV0ZURpdmlzb3JzIiwibiIsImRpdmlzb3JzIiwibGFyZ2VEaXZpc29ycyIsImRpdmlzb3IiLCJ1bnNoaWZ0IiwiY29uY2F0IiwiX2NvbXB1dGVDb21tb25EaXZpc29ycyIsImxhcmdlRGl2aXNvciIsImNhbGN1bGF0ZVBhdGNoU2l6ZSIsIndpZGVTaWRlIiwibnJPZlBhdGNoZXNMaXN0IiwibnJPZlBhdGNoZXNNYXAiLCJzbWFsbCIsIm1lZGl1bSIsImxhcmdlIiwibnJPZlBhdGNoZXNJbmRleCIsIm5yT2ZQYXRjaGVzIiwiZGVzaXJlZFBhdGNoU2l6ZSIsImZpbmRQYXRjaFNpemVGb3JEaXZpc29ycyIsImZvdW5kIiwib3B0aW1hbFBhdGNoU2l6ZSIsImNoZWNrSW1hZ2VDb25zdHJhaW50cyIsInNoaWZ0IiwiY29tcHV0ZUltYWdlQXJlYSIsInNldENhbnZhc1NpemUiLCJfcGFyc2VDc3NEaW1lbnNpb25WYWx1ZXMiLCJkaW1lbnNpb24iLCJwYXJzZUZsb2F0IiwidW5pdCIsImluZGV4T2YiLCJfZGltZW5zaW9uc0NvbnZlcnRlcnMiLCJpbnB1dFdpZHRoIiwiaW5wdXRIZWlnaHQiLCJwYXJzZWRBcmVhIiwicGFyc2VkIiwiY2FsY3VsYXRlZCIsIl9ldmVudE5hbWVzIiwiX2V2ZW50SGFuZGxlcnMiLCJNYXAiLCJsaXN0ZW5lciIsIl9vcHRpb25zIiwiaGFzIiwic2V0IiwiY2xlYXIiLCJhcmdBcnJheSIsImhhbmRsZXJzIiwiYXBwbHkiLCJMaXZlU3RyZWFtIiwiVmlkZW9TdHJlYW0iLCJfdmlkZW8iLCJwYXVzZSIsIm9wdGlvbnMiLCJfaW5pdFNpemUiLCJlbmRlZCIsImN1cnJlbnRUaW1lIiwiaW52ZXJ0IiwibWF0cml4IiwiYTAiLCJhMSIsImEyIiwiYTMiLCJkZXRlcm1pbmFudCIsIkZsb2F0MzJBcnJheSIsInRyYW5zZm9ybVdpdGhNYXRyaXgiLCJfY29tcHV0ZUhpc3RvZ3JhbSIsImJpdHNQZXJQaXhlbCIsImJpdFNoaWZ0IiwiYnVja2V0Q291bnQiLCJoaXN0b2dyYW0iLCJJbnQzMkFycmF5IiwiX2RldGVybWluZU90c3VUaHJlc2hvbGQiLCJoaXN0IiwidmV0IiwicHgiLCJpbml0IiwiZW5kIiwibXgiLCJrIiwicDEyIiwibTEiLCJtMiIsIm0xMiIsIm1heEluZGV4IiwiaXRlbSIsImFycmF5Iiwib3RzdVRocmVzaG9sZCIsInRhcmdldFdyYXBwZXIiLCJ0YXJnZXREYXRhIiwib3V0SW1hZ2VXcmFwcGVyIiwib3V0SW1hZ2UiLCJvdXRJbWdJbmRleCIsIk1vbWVudFNpbWlsYXJpdHlUaHJlc2hvbGQiLCJCYXJjb2RlTG9jYXRvciIsIl9udW1QYXRjaGVzIiwiX2luaXRCdWZmZXJzIiwiX2luaXRDYW52YXMiLCJfY3VycmVudEltYWdlV3JhcHBlciIsIl9iaW5hcml6ZUltYWdlIiwicGF0Y2hlc0ZvdW5kIiwiX2ZpbmRQYXRjaGVzIiwibWF4TGFiZWwiLCJfcmFzdGVyaXplQW5ndWxhclNpbWlsYXJpdHkiLCJ0b3BMYWJlbHMiLCJfZmluZEJpZ2dlc3RDb25uZWN0ZWRBcmVhcyIsIl9maW5kQm94ZXMiLCJfcGF0Y2hTaXplIiwiX2JpbmFyeUltYWdlV3JhcHBlciIsIl9sYWJlbEltYWdlV3JhcHBlciIsInNrZWxldG9uSW1hZ2VEYXRhIiwiQXJyYXlCdWZmZXIiLCJfc3ViSW1hZ2VXcmFwcGVyIiwiX3NrZWxJbWFnZVdyYXBwZXIiLCJfc2tlbGV0b25pemVyIiwic2tlbGV0b25pemVyIiwic2VsZiIsImdsb2JhbCIsIl9wYXRjaExhYmVsR3JpZCIsIl9wYXRjaEdyaWQiLCJfaW1hZ2VUb1BhdGNoR3JpZCIsInVzZVdvcmtlciIsIl9iaW5hcnlDb250ZXh0IiwicGF0Y2hlcyIsImF2ZXJhZ2VSYWQiLCJfZHJhd1JlY3QiLCJpbnZlcnNlTWF0cml4IiwibWluWCIsIm1pblkiLCJtYXhYIiwibWF4WSIsInZlcnRleCIsInplcm9Cb3JkZXIiLCJzaG93IiwiX3NrZWxldG9uaXplIiwicmFzdGVyaXplciIsIlJhc3Rlcml6ZXIiLCJyYXN0ZXJSZXN1bHQiLCJyYXN0ZXJpemUiLCJvdmVybGF5IiwiY291bnQiLCJwYXRjaCIsIl9kZXNjcmliZVBhdGNoIiwibGFiZWxIaXN0Iiwic29ydCIsIl9ib3hGcm9tUGF0Y2hlcyIsImpvaW4iLCJjbHVzdGVyaXplIiwidG9wQ2x1c3RlciIsInN1YkltYWdlQXNDb3B5Iiwic2tlbGV0b25pemUiLCJtaW5Db21wb25lbnRXZWlnaHQiLCJjZWlsIiwiZWxpZ2libGVNb21lbnRzIiwibWF0Y2hpbmdNb21lbnRzIiwiX3NpbWlsYXJNb21lbnRzIiwiY3VycmVudEluZGV4IiwiY3VycmVudFBhdGNoIiwiU2VhcmNoRGlyZWN0aW9ucyIsImRpcmVjdGlvbiIsIk51bWJlciIsIk1BWF9WQUxVRSIsIl90cmFjZSIsIl9ub3RZZXRQcm9jZXNzZWQiLCJzdHJva2VSZWN0IiwiRWRnZUxhYmVsIiwiQ29udG91ckRpcmVjdGlvbiIsImxhYmVsV3JhcHBlciIsIl9pbWFnZURhdGEiLCJfbGFiZWxEYXRhIiwiX3RyYWNlciIsIlRyYWNlciIsImRlcHRoTGFiZWwiLCJjb2xvck1hcCIsImNjIiwic2MiLCJjb25uZWN0ZWRDb3VudCIsImN5IiwibGFiZWxJbmRleCIsImJjIiwiY3giLCJsYyIsImNvbnRvdXJUcmFjaW5nIiwiT3V0c2lkZSIsIkNXIiwiZmlyc3RWZXJ0ZXgiLCJuZXh0UGVlciIsImluc2lkZUNvbnRvdXJzIiwicHJldmlvdXNQZWVyIiwiSW5zaWRlIiwiQ0NXIiwiZmlyc3RDb250b3VyIiwicHEiLCJpcSIsInEiLCJVbmtub3duIiwibmV4dCIsIlNrZWxldG9uaXplciIsInN0ZGxpYiIsImZvcmVpZ24iLCJpbXVsIiwiZXJvZGUiLCJpbkltYWdlUHRyIiwib3V0SW1hZ2VQdHIiLCJ1IiwieVN0YXJ0MSIsInlTdGFydDIiLCJ4U3RhcnQxIiwieFN0YXJ0MiIsInN1YnRyYWN0IiwiYUltYWdlUHRyIiwiYkltYWdlUHRyIiwiYml0d2lzZU9yIiwiY291bnROb25aZXJvIiwiaW1hZ2VQdHIiLCJkaWxhdGUiLCJtZW1jcHkiLCJzcmNJbWFnZVB0ciIsImRzdEltYWdlUHRyIiwic3ViSW1hZ2VQdHIiLCJlcm9kZWRJbWFnZVB0ciIsInRlbXBJbWFnZVB0ciIsInNrZWxJbWFnZVB0ciIsImRvbmUiLCJlZGdlTGFiZWwiLCJzeSIsInN4IiwiRnYiLCJ0cmFjZSIsIkN2IiwibGRpciIsIlAiLCJfX2ZhY3RvcnlTb3VyY2VfXyIsIl9mcmFtZUdyYWJiZXIiLCJfc3RvcHBlZCIsIl9jYW52YXNDb250YWluZXIiLCJjdHgiLCJkb20iLCJfbG9jYXRvciIsIl9ib3hTaXplIiwiX2RlY29kZXIiLCJfd29ya2VyUG9vbCIsIl9vblVJVGhyZWFkIiwiX3Jlc3VsdENvbGxlY3RvciIsIlF1YWdnYSIsImNiIiwiZGVmYXVsdENvbmZpZyIsIl9pbml0aWFsaXplRGF0YSIsIl9pbml0SW5wdXRTdHJlYW0iLCJfc3RhcnRDb250aW51b3VzVXBkYXRlIiwiX3VwZGF0ZSIsIl9hZGp1c3RXb3JrZXJQb29sIiwicmVsZWFzZSIsImNsZWFyRXZlbnRIYW5kbGVycyIsInJlc3VsdENhbGxiYWNrIiwiY2FsbCIsInVuc3Vic2NyaWJlIiwic2V0UmVhZGVycyIsIndvcmtlciIsInBvc3RNZXNzYWdlIiwiY21kIiwicmVzdWx0Q29sbGVjdG9yIiwiYWRkUmVzdWx0Iiwidmlld3BvcnQiLCJfZ2V0Vmlld1BvcnQiLCJyZXF1ZXN0IiwiZXJyIiwiX2NhblJlY29yZCIsInRhcmdldCIsIkhUTUxFbGVtZW50Iiwic2VsZWN0b3IiLCJjbGVhckZpeCIsIl9nZXRCb3VuZGluZ0JveGVzIiwiX3RyYW5zZm9ybSIsInBvbHlnb24iLCJfdHJhbnNmb3JtUmVzdWx0IiwiYmFyY29kZSIsIl9hZGRSZXN1bHQiLCJfaGFzQ29kZVJlc3VsdCIsIl9wdWJsaXNoUmVzdWx0IiwicmVzdWx0VG9QdWJsaXNoIiwicHVibGlzaCIsIl9sb2NhdGVBbmREZWNvZGUiLCJkZWNvZGVGcm9tQm91bmRpbmdCb3hlcyIsImF2YWlsYWJsZVdvcmtlciIsIndvcmtlclRocmVhZCIsImJ1c3kiLCJhdHRhY2hEYXRhIiwiZ3JhYiIsImRlbGF5IiwiZnJlcXVlbmN5IiwidGhhdCIsInRpbWVzdGFtcCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInBlcmZvcm1hbmNlIiwibm93IiwiX2luaXRXb3JrZXIiLCJibG9iVVJMIiwiX2dlbmVyYXRlV29ya2VyQmxvYiIsIldvcmtlciIsIm9ubWVzc2FnZSIsIlVSTCIsInJldm9rZU9iamVjdFVSTCIsIm1lc3NhZ2UiLCJfd29ya2VySW50ZXJmYWNlIiwiZmFjdG9yeSIsIm9yaWdpbiIsIm9uUHJvY2Vzc2VkIiwiYmxvYiIsIkJsb2IiLCJ0b1N0cmluZyIsImNyZWF0ZU9iamVjdFVSTCIsImNhcGFjaXR5IiwiaW5jcmVhc2VCeSIsInRlcm1pbmF0ZSIsIk4iLCJXIiwiU1RBUlRfUEFUVEVSTiIsIlNUT1BfUEFUVEVSTiIsIkNPREVfUEFUVEVSTiIsInN0YXJ0UGF0dGVybkxlbmd0aCIsIlR3b09mRml2ZVJlYWRlciIsIl9iYXJTcGFjZVJhdGlvIiwiX2Zvcm1hdCIsIl9zaW5nbGVDb2RlRXJyb3IiLCJfYXZlcmFnZUNvZGVFcnJvciIsInN0YXJ0SW5mbyIsIl9maW5kU3RhcnQiLCJlbmRJbmZvIiwiX2ZpbmRFbmQiLCJjb3VudGVycyIsIl9maWxsQ291bnRlcnMiLCJkZWNvZGVkQ29kZXMiLCJjb2RlIiwiX2RlY29kZVBheWxvYWQiLCJfbmV4dFNldCIsIl9yb3ciLCJuYXJyb3dCYXJXaWR0aCIsIl9maW5kUGF0dGVybiIsImxlYWRpbmdXaGl0ZXNwYWNlU3RhcnQiLCJfbWF0Y2hSYW5nZSIsInRyYWlsaW5nV2hpdGVzcGFjZUVuZCIsInJldmVyc2UiLCJfdmVyaWZ5VHJhaWxpbmdXaGl0ZXNwYWNlIiwiY291bnRlciIsImJlc3RNYXRjaCIsIl9tYXRjaFBhdHRlcm4iLCJBVkVSQUdFX0NPREVfRVJST1IiLCJjb3VudGVyTGVuZ3RoIiwiX2RlY29kZUNvZGUiLCJCYXJjb2RlUmVhZGVyIiwiQmFyY29kZURpcmVjdGlvbiIsIlN0YXJ0Tm90Rm91bmRFeGNlcHRpb24iLCJDb2RlTm90Rm91bmRFeGNlcHRpb24iLCJQYXR0ZXJuTm90Rm91bmRFeGNlcHRpb24iLCJpc1doaXRlIiwidHJ5SGFyZGVyIiwiZXBzaWxvbiIsImNvdW50ZXJQb3MiLCJtYXhTaW5nbGVFcnJvciIsIm1vZHVsbyIsIlNJTkdMRV9DT0RFX0VSUk9SIiwiYmFyV2lkdGgiLCJzY2FsZWQiLCJzaW5nbGVFcnJvciIsImNvcnJlY3Rpb24iLCJpbmRpY2VzIiwiZGVjb2RlIiwiUmV2ZXJzZSIsIkZvcndhcmQiLCJudW1Db3VudGVycyIsIkFMUEhBQkVUSF9TVFJJTkciLCJBTFBIQUJFVCIsIkNIQVJBQ1RFUl9FTkNPRElOR1MiLCJTVEFSVF9FTkQiLCJNSU5fRU5DT0RFRF9DSEFSUyIsIk1BWF9BQ0NFUFRBQkxFIiwiUEFERElORyIsIkNvZGFiYXJSZWFkZXIiLCJfY291bnRlcnMiLCJfbmV4dFVuc2V0IiwibmV4dFN0YXJ0Iiwic3RhcnRDb3VudGVyIiwiX3RvUGF0dGVybiIsImRlY29kZWRDaGFyIiwiX3BhdHRlcm5Ub0NoYXIiLCJfdmVyaWZ5V2hpdGVzcGFjZSIsIl92YWxpZGF0ZVJlc3VsdCIsIl9zdW1Db3VudGVycyIsImVuZENvdW50ZXIiLCJfY2FsY3VsYXRlUGF0dGVybkxlbmd0aCIsImNhdGVnb3JpemF0aW9uIiwic3BhY2UiLCJuYXJyb3ciLCJjb3VudHMiLCJ3aWRlIiwiYmFyIiwiX2NoYXJUb1BhdHRlcm4iLCJjYXQiLCJmbG9vciIsImNoYXJDb2RlIiwiX3RocmVzaG9sZFJlc3VsdFBhdHRlcm4iLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJiYXJUaHJlc2hvbGQiLCJfY29tcHV0ZUFsdGVybmF0aW5nVGhyZXNob2xkIiwic3BhY2VUaHJlc2hvbGQiLCJiaXRtYXNrIiwiQ09ERV9TSElGVCIsIkNPREVfQyIsIkNPREVfQiIsIkNPREVfQSIsIlNUQVJUX0NPREVfQSIsIlNUQVJUX0NPREVfQiIsIlNUQVJUX0NPREVfQyIsIlNUT1BfQ09ERSIsIk1PRFVMRV9JTkRJQ0VTIiwiQ29kZTEyOFJlYWRlciIsIl9jb3JyZWN0IiwiZXhwZWN0ZWQiLCJfY2FsY3VsYXRlQ29ycmVjdGlvbiIsIl9jb3JyZWN0QmFycyIsIm11bHRpcGxpZXIiLCJjaGVja3N1bSIsImNvZGVzZXQiLCJyYXdSZXN1bHQiLCJzaGlmdE5leHQiLCJyZW1vdmVMYXN0Q2hhcmFjdGVyIiwibm9ybWFsaXplZCIsInN1bU5vcm1hbGl6ZWQiLCJzdW1FeHBlY3RlZCIsIkFTVEVSSVNLIiwiVWludDE2QXJyYXkiLCJDb2RlMzlSZWFkZXIiLCJsYXN0U3RhcnQiLCJfdG9Db3VudGVycyIsInBvcCIsInBhdHRlcm5TaXplIiwibWluV2lkdGgiLCJtYXhOYXJyb3dXaWR0aCIsIm51bVdpZGVCYXJzIiwid2lkZUJhcldpZHRoIiwiX2ZpbmROZXh0V2lkdGgiLCJwYXR0ZXJuU3RhcnQiLCJ3aGl0ZVNwYWNlTXVzdFN0YXJ0IiwiQ29kZTM5VklOUmVhZGVyIiwicmVwbGFjZSIsIl9jaGVja0NoZWNrc3VtIiwiQ29kZTkzUmVhZGVyIiwiX3ZlcmlmeUVuZCIsIl92ZXJpZnlDaGVja3N1bXMiLCJfZGVjb2RlRXh0ZW5kZWQiLCJyb3VuZCIsImNoYXJBcnJheSIsIm5leHRDaGFyIiwibmV4dENoYXJDb2RlIiwiX21hdGNoQ2hlY2tDaGFyIiwibWF4V2VpZ2h0IiwiYXJyYXlUb0NoZWNrIiwid2VpZ2h0ZWRTdW1zIiwid2VpZ2h0IiwiY2hlY2tDaGFyIiwiRUFOMlJlYWRlciIsInJvdyIsImNvZGVGcmVxdWVuY3kiLCJDT0RFX0dfU1RBUlQiLCJwYXJzZUludCIsIkVBTlJlYWRlciIsIkVBTjVSZWFkZXIiLCJfZXh0ZW5zaW9uQ2hlY2tzdW0iLCJfZGV0ZXJtaW5lQ2hlY2tEaWdpdCIsIkNIRUNLX0RJR0lUX0VOQ09ESU5HUyIsIkVBTjhSZWFkZXIiLCJNSURETEVfUEFUVEVSTiIsIkVYVEVOU0lPTl9TVEFSVF9QQVRURVJOIiwiQ09ERV9GUkVRVUVOQ1kiLCJjb2RlcmFuZ2UiLCJmaXJzdERpZ2l0IiwiX2NhbGN1bGF0ZUZpcnN0RGlnaXQiLCJyZXN1bHRJbmZvIiwiX2NoZWNrc3VtIiwiX2RlY29kZUV4dGVuc2lvbnMiLCJsYXN0Q29kZSIsIk1BWF9DT1JSRUNUSU9OX0ZBQ1RPUiIsIkkyb2Y1UmVhZGVyIiwibm9ybWFsaXplQmFyU3BhY2VXaWR0aCIsImNvdW50ZXJTdW0iLCJjb2RlU3VtIiwiY29ycmVjdGlvblJhdGlvIiwiY29ycmVjdGlvblJhdGlvSW52ZXJzZSIsImNvdW50ZXIwIiwiY291bnRlcjEiLCJjb2RlMCIsImNvZGUxIiwiY29kZV8xMjhfcmVhZGVyIiwiZWFuX3JlYWRlciIsImVhbl81X3JlYWRlciIsImVhbl8yX3JlYWRlciIsImVhbl84X3JlYWRlciIsImNvZGVfMzlfcmVhZGVyIiwiY29kZV8zOV92aW5fcmVhZGVyIiwiY29kYWJhcl9yZWFkZXIiLCJ1cGNfcmVhZGVyIiwiVVBDUmVhZGVyIiwidXBjX2VfcmVhZGVyIiwiVVBDRVJlYWRlciIsImkyb2Y1X3JlYWRlciIsImNvZGVfOTNfcmVhZGVyIiwiX2RldGVybWluZVBhcml0eSIsIm5yU3lzdGVtIiwibGFzdERpZ2l0IiwidXBjYSIsIl9jb252ZXJ0VG9VUENBIiwiY2hhckF0Iiwic3Vic3RyaW5nIl0sIm1hcHBpbmdzIjoiOztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQztBQUNELFc7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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsY0FBYztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLGtCQUFrQjtBQUNuRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaUJBQWlCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztB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SUFBSUEsTUFBTSxDQUFDcXBCLElBQWpCLElBQXlCcnBCLE1BQU0sQ0FBQ3FwQixJQUFQLENBQVk1dEIsTUFBWixLQUF1QixFQUFoRCxJQUFzRHVFLE1BQU0sQ0FBQ3FwQixJQUFQLENBQVlvTCxNQUFaLENBQW1CLENBQW5CLE1BQTBCLEdBQXBGLEVBQXlGO0FBQ3JGejBCLGNBQU0sQ0FBQ3FwQixJQUFQLEdBQWNycEIsTUFBTSxDQUFDcXBCLElBQVAsQ0FBWXFMLFNBQVosQ0FBc0IsQ0FBdEIsQ0FBZDtBQUNBLGVBQU8xMEIsTUFBUDtBQUNIOztBQUVELGFBQU8sSUFBUDtBQUNIO0FBaEJMOztBQUFBO0FBQUEsRUFBK0IyeEIscURBQS9CLEUiLCJmaWxlIjoicXVhZ2dhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4oZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuICAgIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KGZhY3RvcnkudG9TdHJpbmcoKSkuZGVmYXVsdDtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuICAgICAgICBleHBvcnRzW1wiUXVhZ2dhXCJdID0gZmFjdG9yeShmYWN0b3J5LnRvU3RyaW5nKCkpLmRlZmF1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcm9vdFtcIlF1YWdnYVwiXSA9IGZhY3RvcnkoZmFjdG9yeS50b1N0cmluZygpKS5kZWZhdWx0O1xuICAgIH1cbn0pKHRoaXMsIGZ1bmN0aW9uKF9fZmFjdG9yeVNvdXJjZV9fKSB7XG4gICAgcmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9xdWFnZ2EudHNcIik7XG4iLCJmdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgYXJyMltpXSA9IGFycltpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyMjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhvdXRIb2xlczsiLCJmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQ7IiwiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FzeW5jVG9HZW5lcmF0b3I7IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2s7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzczsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7IiwidmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vZ2V0UHJvdG90eXBlT2ZcIik7XG5cbnZhciBzdXBlclByb3BCYXNlID0gcmVxdWlyZShcIi4vc3VwZXJQcm9wQmFzZVwiKTtcblxuZnVuY3Rpb24gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgIT09IFwidW5kZWZpbmVkXCIgJiYgUmVmbGVjdC5nZXQpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9nZXQgPSBSZWZsZWN0LmdldDtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9nZXQgPSBmdW5jdGlvbiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gICAgICB2YXIgYmFzZSA9IHN1cGVyUHJvcEJhc2UodGFyZ2V0LCBwcm9wZXJ0eSk7XG4gICAgICBpZiAoIWJhc2UpIHJldHVybjtcbiAgICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihiYXNlLCBwcm9wZXJ0eSk7XG5cbiAgICAgIGlmIChkZXNjLmdldCkge1xuICAgICAgICByZXR1cm4gZGVzYy5nZXQuY2FsbChyZWNlaXZlcik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkZXNjLnZhbHVlO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlciB8fCB0YXJnZXQpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9nZXQ7IiwiZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mOyIsInZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL3NldFByb3RvdHlwZU9mXCIpO1xuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2luaGVyaXRzOyIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaXRlcikgPT09IFwiW29iamVjdCBBcmd1bWVudHNdXCIpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXk7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2VcIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlU3ByZWFkOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG52YXIgYXNzZXJ0VGhpc0luaXRpYWxpemVkID0gcmVxdWlyZShcIi4vYXNzZXJ0VGhpc0luaXRpYWxpemVkXCIpO1xuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH1cblxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuOyIsImZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mOyIsInZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL2dldFByb3RvdHlwZU9mXCIpO1xuXG5mdW5jdGlvbiBfc3VwZXJQcm9wQmFzZShvYmplY3QsIHByb3BlcnR5KSB7XG4gIHdoaWxlICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpKSB7XG4gICAgb2JqZWN0ID0gZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTtcbiAgICBpZiAob2JqZWN0ID09PSBudWxsKSBicmVhaztcbiAgfVxuXG4gIHJldHVybiBvYmplY3Q7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3N1cGVyUHJvcEJhc2U7IiwidmFyIGFycmF5V2l0aG91dEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRob3V0SG9sZXNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXlcIik7XG5cbnZhciBub25JdGVyYWJsZVNwcmVhZCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlU3ByZWFkXCIpO1xuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3RvQ29uc3VtYWJsZUFycmF5OyIsImZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZjIgPSBmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YyID0gZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mMihvYmopOyB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgX3R5cGVvZjIoU3ltYm9sLml0ZXJhdG9yKSA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gX3R5cGVvZjIob2JqKTtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogX3R5cGVvZjIob2JqKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbi8vIFRoaXMgbWV0aG9kIG9mIG9idGFpbmluZyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdCBuZWVkcyB0byBiZVxuLy8ga2VwdCBpZGVudGljYWwgdG8gdGhlIHdheSBpdCBpcyBvYnRhaW5lZCBpbiBydW50aW1lLmpzXG52YXIgZyA9IChmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMgfHwgKHR5cGVvZiBzZWxmID09PSBcIm9iamVjdFwiICYmIHNlbGYpO1xufSkoKSB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG5cbi8vIFVzZSBgZ2V0T3duUHJvcGVydHlOYW1lc2AgYmVjYXVzZSBub3QgYWxsIGJyb3dzZXJzIHN1cHBvcnQgY2FsbGluZ1xuLy8gYGhhc093blByb3BlcnR5YCBvbiB0aGUgZ2xvYmFsIGBzZWxmYCBvYmplY3QgaW4gYSB3b3JrZXIuIFNlZSAjMTgzLlxudmFyIGhhZFJ1bnRpbWUgPSBnLnJlZ2VuZXJhdG9yUnVudGltZSAmJlxuICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhnKS5pbmRleE9mKFwicmVnZW5lcmF0b3JSdW50aW1lXCIpID49IDA7XG5cbi8vIFNhdmUgdGhlIG9sZCByZWdlbmVyYXRvclJ1bnRpbWUgaW4gY2FzZSBpdCBuZWVkcyB0byBiZSByZXN0b3JlZCBsYXRlci5cbnZhciBvbGRSdW50aW1lID0gaGFkUnVudGltZSAmJiBnLnJlZ2VuZXJhdG9yUnVudGltZTtcblxuLy8gRm9yY2UgcmVldmFsdXRhdGlvbiBvZiBydW50aW1lLmpzLlxuZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSB1bmRlZmluZWQ7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vcnVudGltZVwiKTtcblxuaWYgKGhhZFJ1bnRpbWUpIHtcbiAgLy8gUmVzdG9yZSB0aGUgb3JpZ2luYWwgcnVudGltZS5cbiAgZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSBvbGRSdW50aW1lO1xufSBlbHNlIHtcbiAgLy8gUmVtb3ZlIHRoZSBnbG9iYWwgcHJvcGVydHkgYWRkZWQgYnkgcnVudGltZS5qcy5cbiAgdHJ5IHtcbiAgICBkZWxldGUgZy5yZWdlbmVyYXRvclJ1bnRpbWU7XG4gIH0gY2F0Y2goZSkge1xuICAgIGcucmVnZW5lcmF0b3JSdW50aW1lID0gdW5kZWZpbmVkO1xuICB9XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbiEoZnVuY3Rpb24oZ2xvYmFsKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgdmFyIGluTW9kdWxlID0gdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIjtcbiAgdmFyIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lO1xuICBpZiAocnVudGltZSkge1xuICAgIGlmIChpbk1vZHVsZSkge1xuICAgICAgLy8gSWYgcmVnZW5lcmF0b3JSdW50aW1lIGlzIGRlZmluZWQgZ2xvYmFsbHkgYW5kIHdlJ3JlIGluIGEgbW9kdWxlLFxuICAgICAgLy8gbWFrZSB0aGUgZXhwb3J0cyBvYmplY3QgaWRlbnRpY2FsIHRvIHJlZ2VuZXJhdG9yUnVudGltZS5cbiAgICAgIG1vZHVsZS5leHBvcnRzID0gcnVudGltZTtcbiAgICB9XG4gICAgLy8gRG9uJ3QgYm90aGVyIGV2YWx1YXRpbmcgdGhlIHJlc3Qgb2YgdGhpcyBmaWxlIGlmIHRoZSBydW50aW1lIHdhc1xuICAgIC8vIGFscmVhZHkgZGVmaW5lZCBnbG9iYWxseS5cbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBEZWZpbmUgdGhlIHJ1bnRpbWUgZ2xvYmFsbHkgKGFzIGV4cGVjdGVkIGJ5IGdlbmVyYXRlZCBjb2RlKSBhcyBlaXRoZXJcbiAgLy8gbW9kdWxlLmV4cG9ydHMgKGlmIHdlJ3JlIGluIGEgbW9kdWxlKSBvciBhIG5ldywgZW1wdHkgb2JqZWN0LlxuICBydW50aW1lID0gZ2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZSA9IGluTW9kdWxlID8gbW9kdWxlLmV4cG9ydHMgOiB7fTtcblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBydW50aW1lLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZVt0b1N0cmluZ1RhZ1N5bWJvbF0gPVxuICAgIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIHByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIHJ1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIHJ1bnRpbWUubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgaWYgKCEodG9TdHJpbmdUYWdTeW1ib2wgaW4gZ2VuRnVuKSkge1xuICAgICAgICBnZW5GdW5bdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuICAgICAgfVxuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBydW50aW1lLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgcnVudGltZS5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgcnVudGltZS5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpXG4gICAgKTtcblxuICAgIHJldHVybiBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgR3BbdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JcIjtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBydW50aW1lLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgcnVudGltZS52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcbn0pKFxuICAvLyBJbiBzbG9wcHkgbW9kZSwgdW5ib3VuZCBgdGhpc2AgcmVmZXJzIHRvIHRoZSBnbG9iYWwgb2JqZWN0LCBmYWxsYmFjayB0b1xuICAvLyBGdW5jdGlvbiBjb25zdHJ1Y3RvciBpZiB3ZSdyZSBpbiBnbG9iYWwgc3RyaWN0IG1vZGUuIFRoYXQgaXMgc2FkbHkgYSBmb3JtXG4gIC8vIG9mIGluZGlyZWN0IGV2YWwgd2hpY2ggdmlvbGF0ZXMgQ29udGVudCBTZWN1cml0eSBQb2xpY3kuXG4gIChmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcyB8fCAodHlwZW9mIHNlbGYgPT09IFwib2JqZWN0XCIgJiYgc2VsZik7XG4gIH0pKCkgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpXG4pO1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiaW1wb3J0IHsgTW9tZW50IH0gZnJvbSAnLi9tb21lbnQnO1xuXG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsdXN0ZXIgZm9yIGdyb3VwaW5nIHNpbWlsYXIgb3JpZW50YXRpb25zIG9mIG1vbWVudHNcbiAqL1xuZXhwb3J0IGNsYXNzIENsdXN0ZXIge1xuICAgIHByaXZhdGUgX3RocmVzaG9sZDogbnVtYmVyO1xuICAgIHByaXZhdGUgX21vbWVudHM6IEFycmF5PE1vbWVudD47XG4gICAgcHJpdmF0ZSBfY2VudGVyOiBNb21lbnQ7XG5cbiAgICBzdGF0aWMgY2x1c3Rlcml6ZShtb21lbnRzOiBBcnJheTxNb21lbnQ+LCB0aHJlc2hvbGQ6IG51bWJlcik6IEFycmF5PENsdXN0ZXI+IHtcbiAgICAgICAgY29uc3QgY2x1c3RlcnMgPSBuZXcgQXJyYXk8Q2x1c3Rlcj4oKTtcblxuICAgICAgICBtb21lbnRzLmZvckVhY2gobW9tZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoaW5nQ2x1c3RlciA9IGNsdXN0ZXJzLmZpbmQoY2x1c3RlciA9PiBjbHVzdGVyLmZpdHMobW9tZW50KSk7XG5cbiAgICAgICAgICAgIGlmIChtYXRjaGluZ0NsdXN0ZXIpIHtcbiAgICAgICAgICAgICAgICBtYXRjaGluZ0NsdXN0ZXIuYWRkKG1vbWVudCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNsdXN0ZXJzLnB1c2gobmV3IENsdXN0ZXIodGhyZXNob2xkLCBtb21lbnQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGNsdXN0ZXJzO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHRocmVzaG9sZDogbnVtYmVyLCBtb21lbnQ6IE1vbWVudCkge1xuICAgICAgICB0aGlzLl90aHJlc2hvbGQgPSB0aHJlc2hvbGQ7XG4gICAgICAgIHRoaXMuX21vbWVudHMgPSBuZXcgQXJyYXk8TW9tZW50PigpO1xuICAgICAgICB0aGlzLl9jZW50ZXIgPSB7XG4gICAgICAgICAgICByYWQ6IDAsXG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogMFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChtb21lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkKG1vbWVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGQocG9pbnQ6IE1vbWVudCkge1xuICAgICAgICB0aGlzLl9tb21lbnRzLnB1c2gocG9pbnQpO1xuXG4gICAgICAgIC8vIFVwZGF0ZSBjZW50ZXJcbiAgICAgICAgdGhpcy5fY2VudGVyLnJhZCA9IHRoaXMuX21vbWVudHMucmVkdWNlKChzdW0sIHApID0+IHN1bSArIHAucmFkLCAwKSAvIHRoaXMuX21vbWVudHMubGVuZ3RoO1xuICAgICAgICB0aGlzLl9jZW50ZXIueCA9IE1hdGguY29zKHRoaXMuX2NlbnRlci5yYWQpO1xuICAgICAgICB0aGlzLl9jZW50ZXIueSA9IE1hdGguc2luKHRoaXMuX2NlbnRlci5yYWQpO1xuICAgIH1cblxuICAgIGZpdHMobW9tZW50OiBNb21lbnQpOiBib29sZWFuIHtcbiAgICAgICAgLy8gY2hlY2sgY29zaW5lIHNpbWlsYXJpdHkgdG8gY2VudGVyLWFuZ2xlXG4gICAgICAgIGNvbnN0IHNpbWlsYXJpdHkgPSBNYXRoLmFicyhtb21lbnQueCAqIHRoaXMuX2NlbnRlci54ICsgbW9tZW50LnkgKiB0aGlzLl9jZW50ZXIueSk7XG4gICAgICAgIHJldHVybiBzaW1pbGFyaXR5ID4gdGhpcy5fdGhyZXNob2xkO1xuICAgIH1cblxuICAgIGdldCBtb21lbnRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbW9tZW50cztcbiAgICB9XG59XG4iLCJleHBvcnQgaW50ZXJmYWNlIEV2ZW50Q2FsbGJhY2sge1xuICAgIChkYXRhOiBhbnkpOiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEV2ZW50U3Vic2NyaXB0aW9uIHtcbiAgICBjYWxsYmFjazogRXZlbnRDYWxsYmFjaztcbiAgICBhc3luYz86IGJvb2xlYW47XG4gICAgb25jZT86IGJvb2xlYW47XG59XG5cbmludGVyZmFjZSBFdmVudEl0ZW0ge1xuICAgIHN1YnNjcmlwdGlvbnM6IEFycmF5PEV2ZW50U3Vic2NyaXB0aW9uPlxufVxuXG5sZXQgZXZlbnRzOiB7IFtuYW1lOiBzdHJpbmddOiBFdmVudEl0ZW0gfSA9IHt9O1xuXG5leHBvcnQgY2xhc3MgRXZlbnRzIHtcbiAgICBzdGF0aWMgc3Vic2NyaWJlKGV2ZW50OiBzdHJpbmcsIGNhbGxiYWNrOiBFdmVudFN1YnNjcmlwdGlvbiB8IEV2ZW50Q2FsbGJhY2ssIGFzeW5jPzogYm9vbGVhbikge1xuICAgICAgICBsZXQgc3Vic2NyaXB0aW9uOiBFdmVudFN1YnNjcmlwdGlvbjtcblxuICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBzdWJzY3JpcHRpb24gPSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2ssXG4gICAgICAgICAgICAgICAgYXN5bmNcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdWJzY3JpcHRpb24gPSBjYWxsYmFjaztcbiAgICAgICAgICAgIGlmICghc3Vic2NyaXB0aW9uLmNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgJ0NhbGxiYWNrIHdhcyBub3Qgc3BlY2lmaWVkIG9uIG9wdGlvbnMnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZ2V0RXZlbnQoZXZlbnQpLnN1YnNjcmlwdGlvbnMucHVzaChzdWJzY3JpcHRpb24pO1xuICAgIH1cblxuICAgIHN0YXRpYyBwdWJsaXNoKHR5cGU6IHN0cmluZywgZGF0YT86IGFueSkge1xuICAgICAgICBjb25zdCBldmVudEl0ZW0gPSBnZXRFdmVudCh0eXBlKTtcbiAgICAgICAgY29uc3Qgc3Vic2NyaXB0aW9ucyA9IGV2ZW50SXRlbS5zdWJzY3JpcHRpb25zO1xuXG4gICAgICAgIC8vIFB1Ymxpc2ggb25lLXRpbWUgc3Vic2NyaXB0aW9uc1xuICAgICAgICBzdWJzY3JpcHRpb25zLmZpbHRlcigoeyBvbmNlIH0pID0+ICEhb25jZSkuZm9yRWFjaChzdWJzY3JpcHRpb24gPT4gcHVibGlzaFN1YnNjcmlwdGlvbihzdWJzY3JpcHRpb24sIGRhdGEpKTtcblxuICAgICAgICAvLyByZW1vdmUgdGhlbSBmcm9tIHRoZSBzdWJzY3JpcHRpb25cbiAgICAgICAgZXZlbnRJdGVtLnN1YnNjcmlwdGlvbnMgPSBzdWJzY3JpcHRpb25zLmZpbHRlcigoeyBvbmNlIH0pID0+ICFvbmNlKTtcblxuICAgICAgICAvLyBwdWJsaXNoIHRoZSByZXN0XG4gICAgICAgIGV2ZW50SXRlbS5zdWJzY3JpcHRpb25zLmZvckVhY2goc3Vic2NyaXB0aW9uID0+IHB1Ymxpc2hTdWJzY3JpcHRpb24oc3Vic2NyaXB0aW9uLCBkYXRhKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIG9uY2UoZXZlbnQ6IHN0cmluZywgY2FsbGJhY2s6IEV2ZW50Q2FsbGJhY2ssIGFzeW5jPzogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICBFdmVudHMuc3Vic2NyaWJlKGV2ZW50LCB7IGNhbGxiYWNrLCBhc3luYywgb25jZTogdHJ1ZSB9KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgdW5zdWJzY3JpYmUoZXZlbnROYW1lPzogc3RyaW5nLCBjYWxsYmFjaz86IEV2ZW50Q2FsbGJhY2spIHtcbiAgICAgICAgaWYgKGV2ZW50TmFtZSkge1xuICAgICAgICAgICAgY29uc3QgZXZlbnQgPSBnZXRFdmVudChldmVudE5hbWUpO1xuICAgICAgICAgICAgaWYgKGV2ZW50ICYmIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQuc3Vic2NyaXB0aW9ucyA9IGV2ZW50LnN1YnNjcmlwdGlvbnMuZmlsdGVyKHN1YnNjcmlwdGlvbiA9PiBzdWJzY3JpcHRpb24uY2FsbGJhY2sgIT09IGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZXZlbnQuc3Vic2NyaXB0aW9ucyA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXZlbnRzID0ge307XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldEV2ZW50KGV2ZW50TmFtZTogc3RyaW5nKTogRXZlbnRJdGVtIHtcbiAgICBpZiAoIWV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICAgIGV2ZW50c1tldmVudE5hbWVdID0ge1xuICAgICAgICAgICAgc3Vic2NyaXB0aW9uczogW11cbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIGV2ZW50c1tldmVudE5hbWVdO1xufVxuXG5mdW5jdGlvbiBwdWJsaXNoU3Vic2NyaXB0aW9uKHN1YnNjcmlwdGlvbjogRXZlbnRTdWJzY3JpcHRpb24sIGRhdGE6IGFueSk6IHZvaWQge1xuICAgIGlmIChzdWJzY3JpcHRpb24uYXN5bmMpIHtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzdWJzY3JpcHRpb24uY2FsbGJhY2soZGF0YSk7XG4gICAgICAgIH0sIDQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHN1YnNjcmlwdGlvbi5jYWxsYmFjayhkYXRhKTtcbiAgICB9XG59XG4iLCJleHBvcnQgdHlwZSBIU1YgPSBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl07XG5cbmV4cG9ydCB0eXBlIFJHQiA9IFtudW1iZXIsIG51bWJlciwgbnVtYmVyXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGhzdjJyZ2IoaHN2OiBIU1YsIHJnYj86IFJHQik6IFJHQiB7XG4gICAgY29uc3QgaCA9IGhzdlswXTtcbiAgICBjb25zdCBzID0gaHN2WzFdO1xuICAgIGNvbnN0IHYgPSBoc3ZbMl07XG4gICAgY29uc3QgYyA9IHYgKiBzO1xuICAgIGNvbnN0IHggPSBjICogKDEgLSBNYXRoLmFicygoaCAvIDYwKSAlIDIgLSAxKSk7XG4gICAgY29uc3QgbSA9IHYgLSBjO1xuICAgIGxldCByID0gMDtcbiAgICBsZXQgZyA9IDA7XG4gICAgbGV0IGIgPSAwO1xuXG4gICAgaWYgKGggPCA2MCkge1xuICAgICAgICByID0gYztcbiAgICAgICAgZyA9IHg7XG4gICAgfSBlbHNlIGlmIChoIDwgMTIwKSB7XG4gICAgICAgIHIgPSB4O1xuICAgICAgICBnID0gYztcbiAgICB9IGVsc2UgaWYgKGggPCAxODApIHtcbiAgICAgICAgZyA9IGM7XG4gICAgICAgIGIgPSB4O1xuICAgIH0gZWxzZSBpZiAoaCA8IDI0MCkge1xuICAgICAgICBnID0geDtcbiAgICAgICAgYiA9IGM7XG4gICAgfSBlbHNlIGlmIChoIDwgMzAwKSB7XG4gICAgICAgIHIgPSB4O1xuICAgICAgICBiID0gYztcbiAgICB9IGVsc2UgaWYgKGggPCAzNjApIHtcbiAgICAgICAgciA9IGM7XG4gICAgICAgIGIgPSB4O1xuICAgIH1cblxuICAgIHJnYiA9IHJnYiB8fCBbMCwgMCwgMF07XG5cbiAgICByZ2JbMF0gPSAociArIG0pICogMjU1IHwgMDtcbiAgICByZ2JbMV0gPSAoZyArIG0pICogMjU1IHwgMDtcbiAgICByZ2JbMl0gPSAoYiArIG0pICogMjU1IHwgMDtcblxuICAgIHJldHVybiByZ2I7XG59XG4iLCJpbXBvcnQgeyBQb2ludCB9IGZyb20gJy4vcG9pbnQnO1xuXG5leHBvcnQgY2xhc3MgSW1hZ2VEZWJ1ZyB7XG4gICAgc3RhdGljIGRyYXdQYXRoKHBhdGg6IEFycmF5PFBvaW50PiwgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBjb2xvcjogc3RyaW5nLCBsaW5lV2lkdGg6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAocGF0aCAmJiBwYXRoLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBjb2xvcjtcbiAgICAgICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gY29sb3I7XG4gICAgICAgICAgICBjb250ZXh0LmxpbmVXaWR0aCA9IGxpbmVXaWR0aDtcbiAgICAgICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjb250ZXh0Lm1vdmVUbyhwYXRoWzBdLngsIHBhdGhbMF0ueSk7XG4gICAgICAgICAgICBwYXRoLnNsaWNlKDEpLmZvckVhY2goKHsgeCwgeSB9KSA9PiBjb250ZXh0LmxpbmVUbyh4LCB5KSk7XG4gICAgICAgICAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgY29udGV4dC5zdHJva2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBkcmF3SW1hZ2UoaW1hZ2VEYXRhOiBVaW50OEFycmF5LCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IGNhbnZhc0RhdGEgPSBjb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGNhbnZhc0RhdGEuZGF0YTtcbiAgICAgICAgbGV0IGltYWdlSW5kZXggPSBpbWFnZURhdGEubGVuZ3RoIHwgMDtcbiAgICAgICAgbGV0IGNhbnZhc0luZGV4ID0gZGF0YS5sZW5ndGggfCAwO1xuXG4gICAgICAgIGlmIChjYW52YXNJbmRleCAvIGltYWdlSW5kZXggIT09IDQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHdoaWxlIChpbWFnZUluZGV4LS0pIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gaW1hZ2VEYXRhW2ltYWdlSW5kZXhdO1xuICAgICAgICAgICAgZGF0YVstLWNhbnZhc0luZGV4XSA9IDI1NTtcbiAgICAgICAgICAgIGRhdGFbLS1jYW52YXNJbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgICAgIGRhdGFbLS1jYW52YXNJbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgICAgIGRhdGFbLS1jYW52YXNJbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQucHV0SW1hZ2VEYXRhKGNhbnZhc0RhdGEsIDAsIDApO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IE1vbWVudCB9IGZyb20gJy4vbW9tZW50JztcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi9wb2ludCc7XG5pbXBvcnQgeyBIU1YsIGhzdjJyZ2IsIFJHQiB9IGZyb20gJy4vaHN2MnJnYic7XG5cbnR5cGUgQXJyYXlUeXBlID0gQXJyYXk8bnVtYmVyPiB8IFVpbnQ4QXJyYXkgfCBJbnQzMkFycmF5O1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBiYXNpYyBpbWFnZSBjb21iaW5pbmcgdGhlIGRhdGEgYW5kIHNpemUuXG4gKiBJbiBhZGRpdGlvbiwgc29tZSBtZXRob2RzIGZvciBtYW5pcHVsYXRpb24gYXJlIGNvbnRhaW5lZC5cbiAqL1xuZXhwb3J0IGNsYXNzIEltYWdlV3JhcHBlcjxUIGV4dGVuZHMgQXJyYXlUeXBlID0gVWludDhBcnJheT4ge1xuICAgIGRhdGE6IFQgfCBVaW50OEFycmF5O1xuICAgIHNpemU6IFBvaW50O1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHNpemUgVGhlIHNpemUgb2YgdGhlIGltYWdlIGluIHBpeGVsXG4gICAgICogQHBhcmFtIGRhdGEgSWYgZ2l2ZW4sIGEgZmxhdCBhcnJheSBjb250YWluaW5nIHRoZSBwaXhlbCBkYXRhXG4gICAgICogQHBhcmFtIGFycmF5VHlwZSBJZiBnaXZlbiwgdGhlIGRlc2lyZWQgRGF0YVR5cGUgb2YgdGhlIEFycmF5IChtYXkgYmUgdHlwZWQvbm9uLXR5cGVkKVxuICAgICAqIEBwYXJhbSBpbml0aWFsaXplIEluZGljYXRpbmcgaWYgdGhlIGFycmF5IHNob3VsZCBiZSBpbml0aWFsaXplZCBvbiBjcmVhdGlvbi5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzaXplOiBQb2ludCwgZGF0YT86IFQsIGFycmF5VHlwZT86IHsgbmV3KF86IG51bWJlcik6IFQgfCBVaW50OEFycmF5IH0sIGluaXRpYWxpemU/OiBib29sZWFuKSB7XG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgICAgdGhpcy5kYXRhID0gbmV3IChhcnJheVR5cGUgfHwgVWludDhBcnJheSkoc2l6ZS54ICogc2l6ZS55KTtcblxuICAgICAgICAgICAgaWYgKGluaXRpYWxpemUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEuZmlsbCgwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRlc3RzIGlmIGEgcG9zaXRpb24gaXMgd2l0aGluIHRoZSBpbWFnZSB3aXRoIGEgZ2l2ZW4gb2Zmc2V0XG4gICAgICogQHBhcmFtIHBvaW50IFRoZSBsb2NhdGlvbiB0byB0ZXN0XG4gICAgICogQHBhcmFtIGJvcmRlciBUaGUgcGFkZGluZyB2YWx1ZSBpbiBwaXhlbHNcbiAgICAgKiBAcmV0dXJucyB0cnVlIGlmIGxvY2F0aW9uIGluc2lkZSB0aGUgaW1hZ2UncyBib3JkZXIsIGZhbHNlIG90aGVyd2lzZVxuICAgICAqIEBzZWUgY3ZkL2ltYWdlLmhcbiAgICAgKi9cbiAgICBpbkltYWdlV2l0aEJvcmRlcihwb2ludDogUG9pbnQsIGJvcmRlcjogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAocG9pbnQueCA+PSBib3JkZXIpXG4gICAgICAgICAgICAmJiAocG9pbnQueSA+PSBib3JkZXIpXG4gICAgICAgICAgICAmJiAocG9pbnQueCA8ICh0aGlzLnNpemUueCAtIGJvcmRlcikpXG4gICAgICAgICAgICAmJiAocG9pbnQueSA8ICh0aGlzLnNpemUueSAtIGJvcmRlcikpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4ge0ltYWdlV3JhcHBlcikgYW5kIGNvcGllcyB0aGUgbmVlZGVkIHVuZGVybHlpbmcgaW1hZ2UtZGF0YSBhcmVhXG4gICAgICogQHBhcmFtIGltYWdlV3JhcHBlciBUaGUgdGFyZ2V0IHtJbWFnZVdyYXBwZXJ9IHdoZXJlIHRoZSBkYXRhIHNob3VsZCBiZSBjb3BpZWRcbiAgICAgKiBAcGFyYW0gZnJvbVggVGhlIGhvcml6b250YWwgcG9zaXRpb24gd2hlcmUgdG8gY29weSBmcm9tXG4gICAgICogQHBhcmFtIGZyb21ZIFRoZSB2ZXJ0aWNhbCBwb3NpdGlvbiB3aGVyZSB0byBjb3B5IGZyb21cbiAgICAqL1xuICAgIHN1YkltYWdlQXNDb3B5KGltYWdlV3JhcHBlcjogSW1hZ2VXcmFwcGVyLCBmcm9tWDogbnVtYmVyLCBmcm9tWTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHNpemVZID0gaW1hZ2VXcmFwcGVyLnNpemUueTtcbiAgICAgICAgY29uc3Qgc2l6ZVggPSBpbWFnZVdyYXBwZXIuc2l6ZS54O1xuXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgc2l6ZVg7IHgrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBzaXplWTsgeSsrKSB7XG4gICAgICAgICAgICAgICAgaW1hZ2VXcmFwcGVyLmRhdGFbeSAqIHNpemVYICsgeF0gPSB0aGlzLmRhdGFbKGZyb21ZICsgeSkgKiB0aGlzLnNpemUueCArIGZyb21YICsgeF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZXMgYSBnaXZlbiBwaXhlbCBwb3NpdGlvbiBmcm9tIHRoZSBpbWFnZVxuICAgICAqIEBwYXJhbSB4IFRoZSB4LXBvc2l0aW9uXG4gICAgICogQHBhcmFtIHkgVGhlIHktcG9zaXRpb25cbiAgICAgKiBAcmV0dXJucyBUaGUgZ3JheXNjYWxlIHZhbHVlIGF0IHRoZSBwaXhlbC1wb3NpdGlvblxuICAgICAqL1xuICAgIGdldCh4OiBudW1iZXIsIHk6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFbeSAqIHRoaXMuc2l6ZS54ICsgeF07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyBhIGdpdmVuIHBpeGVsIHBvc2l0aW9uIGluIHRoZSBpbWFnZVxuICAgICAqIEBwYXJhbSB4IFRoZSB4LXBvc2l0aW9uXG4gICAgICogQHBhcmFtIHkgVGhlIHktcG9zaXRpb25cbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIGdyYXlzY2FsZSB2YWx1ZSB0byBzZXRcbiAgICAgKiBAcmV0dXJucyBUaGUgSW1hZ2UgaXRzZWxmIChmb3IgcG9zc2libGUgY2hhaW5pbmcpXG4gICAgICovXG4gICAgc2V0KHg6IG51bWJlciwgeTogbnVtYmVyLCB2YWx1ZTogbnVtYmVyKTogSW1hZ2VXcmFwcGVyPFQ+IHtcbiAgICAgICAgdGhpcy5kYXRhW3kgKiB0aGlzLnNpemUueCArIHhdID0gdmFsdWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGJvcmRlciBvZiB0aGUgaW1hZ2UgKDEgcGl4ZWwpIHRvIHplcm9cbiAgICAgKi9cbiAgICB6ZXJvQm9yZGVyKCk6IHZvaWQge1xuICAgICAgICBjb25zdCB3aWR0aCA9IHRoaXMuc2l6ZS54O1xuICAgICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLnNpemUueTtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdpZHRoOyBpKyspIHtcbiAgICAgICAgICAgIGRhdGFbaV0gPSBkYXRhWyhoZWlnaHQgLSAxKSAqIHdpZHRoICsgaV0gPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBoZWlnaHQgLSAxOyBpKyspIHtcbiAgICAgICAgICAgIGRhdGFbaSAqIHdpZHRoXSA9IGRhdGFbaSAqIHdpZHRoICsgKHdpZHRoIC0gMSldID0gMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludmVydHMgYSBiaW5hcnkgaW1hZ2UgaW4gcGxhY2VcbiAgICAgKi9cbiAgICBpbnZlcnQoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGE7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IGRhdGEubGVuZ3RoOyBpLS07KSB7XG4gICAgICAgICAgICBkYXRhW2ldID0gZGF0YVtpXSA/IDAgOiAxO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbW9tZW50cyhsYWJlbENvdW50OiBudW1iZXIpOiBBcnJheTxNb21lbnQ+IHtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5zaXplLnk7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy5zaXplLng7XG4gICAgICAgIGNvbnN0IGxhYmVsU3VtID0gbmV3IEFycmF5PE1vbWVudD4oKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEFycmF5PE1vbWVudD4oKTtcblxuICAgICAgICBpZiAobGFiZWxDb3VudCA8PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsYWJlbENvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGxhYmVsU3VtW2ldID0ge1xuICAgICAgICAgICAgICAgIG0wMDogMCxcbiAgICAgICAgICAgICAgICBtMDE6IDAsXG4gICAgICAgICAgICAgICAgbTEwOiAwLFxuICAgICAgICAgICAgICAgIG0xMTogMCxcbiAgICAgICAgICAgICAgICBtMDI6IDAsXG4gICAgICAgICAgICAgICAgbTIwOiAwLFxuICAgICAgICAgICAgICAgIHRoZXRhOiAwLFxuICAgICAgICAgICAgICAgIHJhZDogMFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgaGVpZ2h0OyB5KyspIHtcbiAgICAgICAgICAgIGNvbnN0IHlzcSA9IHkgKiB5O1xuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB3aWR0aDsgeCsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsID0gdGhpcy5kYXRhW3kgKiB3aWR0aCArIHhdO1xuICAgICAgICAgICAgICAgIGlmICh2YWwgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gbGFiZWxTdW1bdmFsIC0gMV07XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsLm0wMCArPSAxO1xuICAgICAgICAgICAgICAgICAgICBsYWJlbC5tMDEgKz0geTtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwubTEwICs9IHg7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsLm0xMSArPSB4ICogeTtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwubTAyICs9IHlzcTtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwubTIwICs9IHggKiB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IFBJID0gTWF0aC5QSTtcbiAgICAgICAgY29uc3QgUElfNCA9IFBJIC8gNDtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxhYmVsQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBsYWJlbFN1bVtpXTtcbiAgICAgICAgICAgIGlmICghaXNOYU4obGFiZWwubTAwKSAmJiBsYWJlbC5tMDAgIT09IDApIHtcbiAgICAgICAgICAgICAgICBjb25zdCB4XyA9IGxhYmVsLm0xMCAvIGxhYmVsLm0wMDtcbiAgICAgICAgICAgICAgICBjb25zdCB5XyA9IGxhYmVsLm0wMSAvIGxhYmVsLm0wMDtcbiAgICAgICAgICAgICAgICBjb25zdCBtdTExID0gbGFiZWwubTExIC8gbGFiZWwubTAwIC0geF8gKiB5XztcbiAgICAgICAgICAgICAgICBjb25zdCBtdTAyID0gbGFiZWwubTAyIC8gbGFiZWwubTAwIC0geV8gKiB5XztcbiAgICAgICAgICAgICAgICBjb25zdCBtdTIwID0gbGFiZWwubTIwIC8gbGFiZWwubTAwIC0geF8gKiB4XztcbiAgICAgICAgICAgICAgICBjb25zdCB0bXAgPSAwLjUgKiBNYXRoLmF0YW4oKG11MDIgLSBtdTIwKSAvICgyICogbXUxMSkpICsgKG11MTEgPj0gMCA/IFBJXzQgOiAtUElfNCkgKyBQSTtcbiAgICAgICAgICAgICAgICBsYWJlbC50aGV0YSA9ICh0bXAgKiAxODAgLyBQSSArIDkwKSAlIDE4MCAtIDkwO1xuICAgICAgICAgICAgICAgIGlmIChsYWJlbC50aGV0YSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwudGhldGEgKz0gMTgwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsYWJlbC5yYWQgPSB0bXAgPiBQSSA/IHRtcCAtIFBJIDogdG1wO1xuICAgICAgICAgICAgICAgIGxhYmVsLnggPSBNYXRoLmNvcyh0bXApO1xuICAgICAgICAgICAgICAgIGxhYmVsLnkgPSBNYXRoLnNpbih0bXApO1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGxhYmVsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGlzcGxheXMgdGhlIHtJbWFnZVdyYXBwZXJ9IGluIGEgZ2l2ZW4gY2FudmFzXG4gICAgICogQHBhcmFtIGNvbnRleHQgVGhlIHJlbmRlcmluZyBjb250ZXh0IHRvIHdyaXRlIHRvXG4gICAgICogQHBhcmFtIHNjYWxlIFNjYWxlIHdoaWNoIGlzIGFwcGxpZWQgdG8gZWFjaCBwaXhlbC12YWx1ZVxuICAgICAqL1xuICAgIHNob3coY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBzY2FsZTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuc2l6ZS55O1xuICAgICAgICBjb25zdCB3aWR0aCA9IHRoaXMuc2l6ZS54O1xuICAgICAgICAvLyBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIC8vIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIC8vIGNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICBjb25zdCBmcmFtZSA9IGNvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICBjb25zdCBkYXRhID0gZnJhbWUuZGF0YTtcbiAgICAgICAgbGV0IGN1cnJlbnQgPSAwO1xuXG4gICAgICAgIGlmICghc2NhbGUpIHtcbiAgICAgICAgICAgIHNjYWxlID0gMS4wO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBoZWlnaHQ7IHkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB3aWR0aDsgeCsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGl4ZWwgPSB5ICogd2lkdGggKyB4O1xuICAgICAgICAgICAgICAgIGN1cnJlbnQgPSB0aGlzLmdldCh4LCB5KSAqIHNjYWxlO1xuICAgICAgICAgICAgICAgIGRhdGFbcGl4ZWwgKiA0ICsgMF0gPSBjdXJyZW50O1xuICAgICAgICAgICAgICAgIGRhdGFbcGl4ZWwgKiA0ICsgMV0gPSBjdXJyZW50O1xuICAgICAgICAgICAgICAgIGRhdGFbcGl4ZWwgKiA0ICsgMl0gPSBjdXJyZW50O1xuICAgICAgICAgICAgICAgIGRhdGFbcGl4ZWwgKiA0ICsgM10gPSAyNTU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvL2ZyYW1lLmRhdGEgPSBkYXRhO1xuICAgICAgICBjb250ZXh0LnB1dEltYWdlRGF0YShmcmFtZSwgMCwgMCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGlzcGxheXMgdGhlIHBhcnQgb2YgdGhlIGltYWdlIGluIGEgZ2l2ZW4gY2FudmFzXG4gICAgICogQHBhcmFtIGNvbnRleHQgVGhlIHJlbmRlcmluZyBjb250ZXh0IHRvIHdyaXRlIHRvXG4gICAgICogQHBhcmFtIHNjYWxlIFNjYWxlIHdoaWNoIGlzIGFwcGxpZWQgdG8gZWFjaCBwaXhlbC12YWx1ZVxuICAgICAqIEBwYXJhbSBmcm9tWCBUaGUgaG9yaXpvbnRhbCBwb3NpdGlvbiB3aGVyZSB0byBvdmVybGF5IGZyb21cbiAgICAgKiBAcGFyYW0gZnJvbVkgVGhlIHZlcnRpY2FsIHBvc2l0aW9uIHdoZXJlIHRvIG92ZXJsYXkgZnJvbVxuICAgICAqL1xuICAgIG92ZXJsYXkoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBzY2FsZTogbnVtYmVyLCBmcm9tWDogbnVtYmVyLCBmcm9tWTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGhzdjogSFNWID0gWzAsIDEsIDFdO1xuICAgICAgICBjb25zdCB3aGl0ZVJnYjogUkdCID0gWzI1NSwgMjU1LCAyNTVdO1xuICAgICAgICBjb25zdCBibGFja1JnYjogUkdCID0gWzAsIDAsIDBdO1xuICAgICAgICBjb25zdCBmcmFtZSA9IGNvbnRleHQuZ2V0SW1hZ2VEYXRhKGZyb21YLCBmcm9tWSwgdGhpcy5zaXplLngsIHRoaXMuc2l6ZS55KTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGZyYW1lLmRhdGE7XG5cbiAgICAgICAgaWYgKCFzY2FsZSB8fCBzY2FsZSA8IDAgfHwgc2NhbGUgPiAzNjApIHtcbiAgICAgICAgICAgIHNjYWxlID0gMzYwO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgbGVuZ3RoID0gdGhpcy5kYXRhLmxlbmd0aDsgbGVuZ3RoLS07KSB7XG4gICAgICAgICAgICBoc3ZbMF0gPSB0aGlzLmRhdGFbbGVuZ3RoXSAqIHNjYWxlO1xuICAgICAgICAgICAgY29uc3QgcmdiOiBSR0IgPSBoc3ZbMF0gPD0gMCA/IHdoaXRlUmdiIDogaHN2WzBdID49IDM2MCA/IGJsYWNrUmdiIDogaHN2MnJnYihoc3YpO1xuICAgICAgICAgICAgZGF0YVtsZW5ndGggKiA0ICsgMF0gPSByZ2JbMF07XG4gICAgICAgICAgICBkYXRhW2xlbmd0aCAqIDQgKyAxXSA9IHJnYlsxXTtcbiAgICAgICAgICAgIGRhdGFbbGVuZ3RoICogNCArIDJdID0gcmdiWzJdO1xuICAgICAgICAgICAgZGF0YVtsZW5ndGggKiA0ICsgM10gPSAyNTU7XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0LnB1dEltYWdlRGF0YShmcmFtZSwgZnJvbVgsIGZyb21ZKTtcbiAgICB9XG59XG4iLCJcbmV4cG9ydCBmdW5jdGlvbiBlbnVtZXJhdGVEZXZpY2VzKCk6IFByb21pc2U8QXJyYXk8TWVkaWFEZXZpY2VJbmZvPj4ge1xuICAgIGlmIChuYXZpZ2F0b3IubWVkaWFEZXZpY2VzICYmIHR5cGVvZiBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmVudW1lcmF0ZURldmljZXMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5hdmlnYXRvci5tZWRpYURldmljZXMuZW51bWVyYXRlRGV2aWNlcygpO1xuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdlbnVtZXJhdGVEZXZpY2VzIGlzIG5vdCBkZWZpbmVkJykpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXNlck1lZGlhKGNvbnN0cmFpbnRzOiBNZWRpYVN0cmVhbUNvbnN0cmFpbnRzKTogUHJvbWlzZTxNZWRpYVN0cmVhbT4ge1xuICAgIGlmIChuYXZpZ2F0b3IubWVkaWFEZXZpY2VzICYmIHR5cGVvZiBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoY29uc3RyYWludHMpO1xuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdnZXRVc2VyTWVkaWEgaXMgbm90IGRlZmluZWQnKSk7XG59XG4iLCIvKipcbiAqIFBlcmZvcm1zIGEgZGVlcCBtZXJnZSBvZiBvYmplY3RzIGFuZCByZXR1cm5zIG5ldyBvYmplY3QuXG4gKiBEb2VzIG5vdCBtb2RpZnkgb2JqZWN0cyAoaW1tdXRhYmxlKS5cbiAqIEBzZWUgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzQ4MjE4MjA5XG4gKlxuICogQHBhcmFtIG9iamVjdHMgLSBPYmplY3RzIHRvIG1lcmdlXG4gKiBAcmV0dXJucyBOZXcgb2JqZWN0IHdpdGggbWVyZ2VkIGtleS92YWx1ZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlKC4uLm9iamVjdHM6IFJlYWRvbmx5QXJyYXk8YW55Pik6IG9iamVjdCB7XG4gICAgY29uc3QgaXNPYmplY3QgPSAob2JqOiB1bmtub3duKSA9PiBvYmogJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCc7XG5cbiAgICByZXR1cm4gb2JqZWN0cy5yZWR1Y2UoKHByZXYsIG9iaikgPT4ge1xuICAgICAgICBpZiAob2JqKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwVmFsID0gcHJldltrZXldO1xuICAgICAgICAgICAgICAgIGNvbnN0IG9WYWwgPSBvYmpba2V5XTtcblxuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHBWYWwpICYmIEFycmF5LmlzQXJyYXkob1ZhbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gcHJldltrZXldID0gcFZhbC5jb25jYXQoLi4ub1ZhbCk7XG4gICAgICAgICAgICAgICAgICAgIHByZXZba2V5XSA9IG9WYWw7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpc09iamVjdChwVmFsKSAmJiBpc09iamVjdChvVmFsKSkge1xuICAgICAgICAgICAgICAgICAgICBwcmV2W2tleV0gPSBtZXJnZShwVmFsLCBvVmFsKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwcmV2W2tleV0gPSBvVmFsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHByZXY7XG4gICAgfSwge30pO1xufSIsImltcG9ydCB7IFF1YWdnYUNvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcblxuZXhwb3J0IGNvbnN0IGNvbmZpZzogUXVhZ2dhQ29uZmlnID0ge1xuICAgIGlucHV0U3RyZWFtOiB7XG4gICAgICAgIG5hbWU6ICdMaXZlJyxcbiAgICAgICAgdHlwZTogJ0xpdmVTdHJlYW0nLFxuICAgICAgICBjb25zdHJhaW50czoge1xuICAgICAgICAgICAgd2lkdGg6IDY0MCxcbiAgICAgICAgICAgIGhlaWdodDogNDgwLFxuICAgICAgICAgICAgLy8gYXNwZWN0UmF0aW86IDY0MC80ODAsIC8vIG9wdGlvbmFsXG4gICAgICAgICAgICBmYWNpbmdNb2RlOiAnZW52aXJvbm1lbnQnIC8vIG9yIHVzZXJcbiAgICAgICAgICAgIC8vIGRldmljZUlkOiAnMzg3NDU5ODM0NTczODc1OTgzNzU5ODM3NTk4MzQnXG4gICAgICAgIH0sXG4gICAgICAgIGFyZWE6IHtcbiAgICAgICAgICAgIHRvcDogJzAlJyxcbiAgICAgICAgICAgIHJpZ2h0OiAnMCUnLFxuICAgICAgICAgICAgbGVmdDogJzAlJyxcbiAgICAgICAgICAgIGJvdHRvbTogJzAlJ1xuICAgICAgICB9LFxuICAgICAgICBzaW5nbGVDaGFubmVsOiBmYWxzZSAvLyB0cnVlOiBvbmx5IHRoZSByZWQgY29sb3ItY2hhbm5lbCBpcyByZWFkXG4gICAgfSxcbiAgICBsb2NhdGU6IHRydWUsXG4gICAgbnVtT2ZXb3JrZXJzOiAwLFxuICAgIGRlY29kZXI6IHtcbiAgICAgICAgcmVhZGVyczogW1xuICAgICAgICAgICAgJ2NvZGVfMTI4X3JlYWRlcidcbiAgICAgICAgXSxcbiAgICAgICAgZGVidWc6IHtcbiAgICAgICAgICAgIGRyYXdCb3VuZGluZ0JveDogZmFsc2UsXG4gICAgICAgICAgICBzaG93RnJlcXVlbmN5OiBmYWxzZSxcbiAgICAgICAgICAgIGRyYXdTY2FubGluZTogZmFsc2UsXG4gICAgICAgICAgICBzaG93UGF0dGVybjogZmFsc2VcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbG9jYXRvcjoge1xuICAgICAgICBoYWxmU2FtcGxlOiB0cnVlLFxuICAgICAgICBwYXRjaFNpemU6ICdtZWRpdW0nLCAvLyB4LXNtYWxsLCBzbWFsbCwgbWVkaXVtLCBsYXJnZSwgeC1sYXJnZVxuICAgICAgICBkZWJ1Zzoge1xuICAgICAgICAgICAgc2hvd0NhbnZhczogZmFsc2UsXG4gICAgICAgICAgICBzaG93UGF0Y2hlczogZmFsc2UsXG4gICAgICAgICAgICBzaG93Rm91bmRQYXRjaGVzOiBmYWxzZSxcbiAgICAgICAgICAgIHNob3dTa2VsZXRvbjogZmFsc2UsXG4gICAgICAgICAgICBzaG93TGFiZWxzOiBmYWxzZSxcbiAgICAgICAgICAgIHNob3dQYXRjaExhYmVsczogZmFsc2UsXG4gICAgICAgICAgICBzaG93UmVtYWluaW5nUGF0Y2hMYWJlbHM6IGZhbHNlLFxuICAgICAgICAgICAgYm94RnJvbVBhdGNoZXM6IHtcbiAgICAgICAgICAgICAgICBzaG93VHJhbnNmb3JtZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNob3dUcmFuc2Zvcm1lZEJveDogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2hvd0JCOiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcbiIsImltcG9ydCB7IEJveCB9IGZyb20gJy4uL2NvbW1vbi9ib3gnO1xuaW1wb3J0IHsgSW1hZ2VXcmFwcGVyIH0gZnJvbSAnLi4vY29tbW9uL2ltYWdlLXdyYXBwZXInO1xuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuLi9jb21tb24vcG9pbnQnO1xuaW1wb3J0IHsgUmVhZGVycyB9IGZyb20gJy4uL3JlYWRlcic7XG5pbXBvcnQgeyBCYXJjb2RlLCBCYXJjb2RlUmVhZGVyLCBCYXJjb2RlUmVhZGVyQ29uZmlnLCBCYXJjb2RlUmVhZGVyRGVjbGFyYXRpb24sIEJhcmNvZGVSZWFkZXJUeXBlIH0gZnJvbSAnLi4vcmVhZGVyL2JhcmNvZGUtcmVhZGVyJztcbmltcG9ydCB7IEJhcmNvZGVMaW5lLCBCcmVzZW5oYW0gfSBmcm9tICcuL2JyZXNlbmhhbSc7XG5pbXBvcnQgeyBJbWFnZURlYnVnIH0gZnJvbSAnLi4vY29tbW9uL2ltYWdlLWRlYnVnJztcblxuZXhwb3J0IGludGVyZmFjZSBCYXJjb2RlRGVjb2RlckNvbmZpZyB7XG4gICAgZGVidWc/OiB7XG4gICAgICAgIGRyYXdCb3VuZGluZ0JveD86IGJvb2xlYW47XG4gICAgICAgIGRyYXdTY2FubGluZT86IGJvb2xlYW47XG4gICAgICAgIHNob3dGcmVxdWVuY3k/OiBib29sZWFuO1xuICAgICAgICBzaG93UGF0dGVybj86IGJvb2xlYW47XG4gICAgfTtcbiAgICBtdWx0aXBsZT86IGJvb2xlYW47XG4gICAgcmVhZGVycz86IEFycmF5PEJhcmNvZGVSZWFkZXJEZWNsYXJhdGlvbj47XG59XG5cbnR5cGUgTGluZSA9IFtQb2ludCwgUG9pbnRdO1xuXG5leHBvcnQgaW50ZXJmYWNlIFF1YWdnYUJhcmNvZGUge1xuICAgIGFuZ2xlPzogbnVtYmVyO1xuICAgIGJhcmNvZGVzPzogQXJyYXk8UXVhZ2dhQmFyY29kZT47IC8vIFRPT0Q6IGRlYWwgd2l0aCBtdWx0aXBsZSByZXN1bHRzXG4gICAgYm94PzogQm94O1xuICAgIGJveGVzPzogQXJyYXk8Qm94PjsgLy8gVE9PRDogZGVhbCB3aXRoIG11bHRpcGxlIHJlc3VsdHNcbiAgICBjb2RlUmVzdWx0PzogQmFyY29kZTtcbiAgICBmcmFtZT86IHN0cmluZztcbiAgICBsaW5lPzogTGluZTtcbiAgICBwYXR0ZXJuPzogQXJyYXk8bnVtYmVyPjtcbiAgICB0aHJlc2hvbGQ/OiBudW1iZXI7XG59O1xuXG5pbnRlcmZhY2UgQmFyY29kZUFuZEJhcmNvZGVMaW5lIHtcbiAgICBjb2RlUmVzdWx0OiBCYXJjb2RlO1xuICAgIGJhcmNvZGVMaW5lOiBCYXJjb2RlTGluZTtcbn1cblxuZXhwb3J0IGNsYXNzIEJhcmNvZGVEZWNvZGVyIHtcbiAgICBwcml2YXRlIF9jb25maWc6IEJhcmNvZGVEZWNvZGVyQ29uZmlnO1xuICAgIHByaXZhdGUgX2lucHV0SW1hZ2VXcmFwcGVyOiBJbWFnZVdyYXBwZXI8VWludDhBcnJheT47XG4gICAgcHJpdmF0ZSBfZnJlcXVlbmN5Q2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICBwcml2YXRlIF9wYXR0ZXJuQ2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICBwcml2YXRlIF9vdmVybGF5Q29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuICAgIHByaXZhdGUgX2JhcmNvZGVSZWFkZXJzOiBBcnJheTxCYXJjb2RlUmVhZGVyPjtcblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogQmFyY29kZURlY29kZXJDb25maWcsIGlucHV0SW1hZ2VXcmFwcGVyOiBJbWFnZVdyYXBwZXI8VWludDhBcnJheT4pIHtcbiAgICAgICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuICAgICAgICB0aGlzLl9pbnB1dEltYWdlV3JhcHBlciA9IGlucHV0SW1hZ2VXcmFwcGVyO1xuICAgICAgICB0aGlzLl9iYXJjb2RlUmVhZGVycyA9IFtdO1xuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuX2NvbmZpZy5kZWJ1ZyAmJiB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBjb25zdCBkZWJ1Z0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZWJ1Zy5kZXRlY3Rpb24nKTtcblxuICAgICAgICAgICAgdGhpcy5fZnJlcXVlbmN5Q2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FudmFzLmZyZXF1ZW5jeScpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9mcmVxdWVuY3lDYW52YXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9mcmVxdWVuY3lDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9mcmVxdWVuY3lDYW52YXMuY2xhc3NOYW1lID0gJ2ZyZXF1ZW5jeSc7XG4gICAgICAgICAgICAgICAgaWYgKGRlYnVnRGl2KSB7XG4gICAgICAgICAgICAgICAgICAgIGRlYnVnRGl2LmFwcGVuZENoaWxkKHRoaXMuX2ZyZXF1ZW5jeUNhbnZhcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fZnJlcXVlbmN5Q2FudmFzLnN0eWxlLmRpc3BsYXkgPSB0aGlzLl9jb25maWcuZGVidWcuc2hvd0ZyZXF1ZW5jeSA/ICdibG9jaycgOiAnbm9uZSc7XG5cbiAgICAgICAgICAgIHRoaXMuX3BhdHRlcm5DYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjYW52YXMucGF0dGVybkJ1ZmZlcicpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9wYXR0ZXJuQ2FudmFzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcGF0dGVybkNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3BhdHRlcm5DYW52YXMuY2xhc3NOYW1lID0gJ3BhdHRlcm5CdWZmZXInO1xuICAgICAgICAgICAgICAgIGlmIChkZWJ1Z0Rpdikge1xuICAgICAgICAgICAgICAgICAgICBkZWJ1Z0Rpdi5hcHBlbmRDaGlsZCh0aGlzLl9wYXR0ZXJuQ2FudmFzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9wYXR0ZXJuQ2FudmFzLnN0eWxlLmRpc3BsYXkgPSB0aGlzLl9jb25maWcuZGVidWcuc2hvd1BhdHRlcm4gPyAnYmxvY2snIDogJ25vbmUnO1xuXG4gICAgICAgICAgICBjb25zdCBvdmVybGF5Q2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MQ2FudmFzRWxlbWVudD4oJ2NhbnZhcy5kcmF3aW5nQnVmZmVyJyk7XG4gICAgICAgICAgICB0aGlzLl9vdmVybGF5Q29udGV4dCA9IG92ZXJsYXlDYW52YXMgPyBvdmVybGF5Q2FudmFzLmdldENvbnRleHQoJzJkJykgOiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5faW5pdFJlYWRlcnMoKTtcbiAgICB9XG5cbiAgICBkZWNvZGVGcm9tQm91bmRpbmdCb3hlcyhib3hlczogQXJyYXk8Qm94Pik6IFF1YWdnYUJhcmNvZGUge1xuICAgICAgICBjb25zdCBiYXJjb2RlcyA9IFtdO1xuICAgICAgICBjb25zdCBtdWx0aXBsZSA9IHRoaXMuX2NvbmZpZy5tdWx0aXBsZTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJveGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBib3ggPSBib3hlc1tpXTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuZGVjb2RlRnJvbUJvdW5kaW5nQm94KGJveCkgfHwge307XG4gICAgICAgICAgICByZXN1bHQuYm94ID0gYm94O1xuXG4gICAgICAgICAgICBpZiAobXVsdGlwbGUpIHtcbiAgICAgICAgICAgICAgICBiYXJjb2Rlcy5wdXNoKHJlc3VsdCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5jb2RlUmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtdWx0aXBsZSkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBiYXJjb2Rlc1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdpdGggdGhlIGhlbHAgb2YgdGhlIGNvbmZpZ3VyZWQgcmVhZGVycyB0aGlzIGZ1bmN0aW9uIHRyaWVzIHRvIGRldGVjdFxuICAgICAqIGEgdmFsaWQgYmFyY29kZSBwYXR0ZXJuIHdpdGhpbiB0aGUgZ2l2ZW4gYXJlYS5cbiAgICAgKiBAcGFyYW0gYm94IFRoZSBhcmVhIHRvIHNlYXJjaCBpblxuICAgICAqIEByZXR1cm5zIFRoZSByZXN1bHQge2NvZGVSZXN1bHQsIGxpbmUsIGFuZ2xlLCBwYXR0ZXJuLCB0aHJlc2hvbGR9XG4gICAgICovXG4gICAgZGVjb2RlRnJvbUJvdW5kaW5nQm94KGJveDogQm94KTogUXVhZ2dhQmFyY29kZSB7XG4gICAgICAgIGNvbnN0IGRlYnVnID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLl9vdmVybGF5Q29udGV4dCAmJiB0aGlzLl9jb25maWcuZGVidWc7XG5cbiAgICAgICAgaWYgKGRlYnVnICYmIGRlYnVnLmRyYXdCb3VuZGluZ0JveCkge1xuICAgICAgICAgICAgdGhpcy5fZHJhd1BhdGgoYm94LCAnYmx1ZScsIDIpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGxpbmUgPSB0aGlzLl9nZXRMaW5lKGJveCk7XG5cbiAgICAgICAgaWYgKGxpbmUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYW5nbGUgPSBNYXRoLmF0YW4yKGxpbmVbMV0ueSAtIGxpbmVbMF0ueSwgbGluZVsxXS54IC0gbGluZVswXS54KTtcbiAgICAgICAgbGluZSA9IHRoaXMuX2dldEV4dGVuZGVkTGluZShsaW5lLCBhbmdsZSk7XG5cbiAgICAgICAgbGV0IHJlc3VsdCA9IHRoaXMuX3RyeURlY29kZShsaW5lKTtcbiAgICAgICAgaWYgKHJlc3VsdCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5fdHJ5RGVjb2RlQnJ1dGVGb3JjZShib3gsIGxpbmUsIGFuZ2xlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXN1bHQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRlYnVnICYmIGRlYnVnLmRyYXdTY2FubGluZSkge1xuICAgICAgICAgICAgdGhpcy5fZHJhd1BhdGgobGluZSwgJ3JlZCcsIDMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvZGVSZXN1bHQ6IHJlc3VsdC5jb2RlUmVzdWx0LFxuICAgICAgICAgICAgbGluZSxcbiAgICAgICAgICAgIGFuZ2xlLFxuICAgICAgICAgICAgcGF0dGVybjogcmVzdWx0LmJhcmNvZGVMaW5lLmxpbmUsXG4gICAgICAgICAgICB0aHJlc2hvbGQ6IHJlc3VsdC5iYXJjb2RlTGluZS50aHJlc2hvbGRcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBzZXRSZWFkZXJzKHJlYWRlcnM6IEFycmF5PEJhcmNvZGVSZWFkZXJEZWNsYXJhdGlvbj4pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fY29uZmlnLnJlYWRlcnMgPSByZWFkZXJzO1xuICAgICAgICB0aGlzLl9iYXJjb2RlUmVhZGVycy5sZW5ndGggPSAwO1xuICAgICAgICB0aGlzLl9pbml0UmVhZGVycygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2luaXRSZWFkZXJzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9jb25maWcucmVhZGVycy5mb3JFYWNoKHJlYWRlckNvbmZpZyA9PiB7XG4gICAgICAgICAgICBsZXQgcmVhZGVyOiBCYXJjb2RlUmVhZGVyVHlwZTtcbiAgICAgICAgICAgIGxldCBjb25maWd1cmF0aW9uOiBCYXJjb2RlUmVhZGVyQ29uZmlnID0ge307XG4gICAgICAgICAgICBsZXQgc3VwcGxlbWVudHMgPSBbXTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiByZWFkZXJDb25maWcgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgcmVhZGVyID0gcmVhZGVyQ29uZmlnLmZvcm1hdDtcbiAgICAgICAgICAgICAgICBjb25maWd1cmF0aW9uID0gcmVhZGVyQ29uZmlnLmNvbmZpZyB8fCB7fTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHJlYWRlckNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICByZWFkZXIgPSByZWFkZXJDb25maWc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0JlZm9yZSByZWdpc3RlcmluZyByZWFkZXI6JywgcmVhZGVyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24uc3VwcGxlbWVudHMpIHtcbiAgICAgICAgICAgICAgICBzdXBwbGVtZW50cyA9IGNvbmZpZ3VyYXRpb24uc3VwcGxlbWVudHMubWFwKHN1cHBsZW1lbnQgPT4gbmV3IFJlYWRlcnNbc3VwcGxlbWVudF0oKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX2JhcmNvZGVSZWFkZXJzLnB1c2gobmV3IFJlYWRlcnNbcmVhZGVyXShjb25maWd1cmF0aW9uLCBzdXBwbGVtZW50cykpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1JlZ2lzdGVyZWQgUmVhZGVyczonLFxuICAgICAgICAgICAgICAgIC4uLnRoaXMuX2JhcmNvZGVSZWFkZXJzLm1hcCgoeyBjb25maWcsIEZPUk1BVCB9KSA9PiBKU09OLnN0cmluZ2lmeSh7IGNvbmZpZywgRk9STUFUIH0pKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBleHRlbmQgdGhlIGxpbmUgb24gYm90aCBlbmRzXG4gICAgICogQHBhcmFtIGxpbmVcbiAgICAgKiBAcGFyYW0gYW5nbGVcbiAgICAgKi9cbiAgICBwcml2YXRlIF9nZXRFeHRlbmRlZExpbmUobGluZTogTGluZSwgYW5nbGU6IG51bWJlcik6IExpbmUge1xuICAgICAgICBmdW5jdGlvbiBleHRlbmRMaW5lKGFtb3VudDogbnVtYmVyKSB7XG4gICAgICAgICAgICBjb25zdCBleHRlbnNpb24gPSB7XG4gICAgICAgICAgICAgICAgeTogYW1vdW50ICogTWF0aC5zaW4oYW5nbGUpLFxuICAgICAgICAgICAgICAgIHg6IGFtb3VudCAqIE1hdGguY29zKGFuZ2xlKVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgbGluZVswXS55IC09IGV4dGVuc2lvbi55O1xuICAgICAgICAgICAgbGluZVswXS54IC09IGV4dGVuc2lvbi54O1xuICAgICAgICAgICAgbGluZVsxXS55ICs9IGV4dGVuc2lvbi55O1xuICAgICAgICAgICAgbGluZVsxXS54ICs9IGV4dGVuc2lvbi54O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbGluZUxlbmd0aCA9IE1hdGguc3FydCgobGluZVsxXS55IC0gbGluZVswXS55KSAqKiAyICsgKGxpbmVbMV0ueCAtIGxpbmVbMF0ueCkgKiogMik7XG4gICAgICAgIGxldCBleHRlbnNpb25MZW5ndGggPSBsaW5lTGVuZ3RoICogMC4xIHwgMDtcblxuICAgICAgICBleHRlbmRMaW5lKGV4dGVuc2lvbkxlbmd0aCk7XG5cbiAgICAgICAgLy8gY2hlY2sgaWYgaW5zaWRlIGltYWdlXG4gICAgICAgIHdoaWxlIChleHRlbnNpb25MZW5ndGggPiAxICYmICghdGhpcy5faW5wdXRJbWFnZVdyYXBwZXIuaW5JbWFnZVdpdGhCb3JkZXIobGluZVswXSwgMClcbiAgICAgICAgICAgIHx8ICF0aGlzLl9pbnB1dEltYWdlV3JhcHBlci5pbkltYWdlV2l0aEJvcmRlcihsaW5lWzFdLCAwKSkpIHtcbiAgICAgICAgICAgIGV4dGVuc2lvbkxlbmd0aCA+Pj0gMTtcbiAgICAgICAgICAgIGV4dGVuZExpbmUoLWV4dGVuc2lvbkxlbmd0aCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbGluZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9nZXRMaW5lKGJveDogQm94KTogTGluZSB7XG4gICAgICAgIHJldHVybiBbe1xuICAgICAgICAgICAgeDogKGJveFsxXS54ICsgYm94WzBdLngpIC8gMixcbiAgICAgICAgICAgIHk6IChib3hbMV0ueSArIGJveFswXS55KSAvIDJcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgeDogKGJveFszXS54ICsgYm94WzJdLngpIC8gMixcbiAgICAgICAgICAgIHk6IChib3hbM10ueSArIGJveFsyXS55KSAvIDJcbiAgICAgICAgfV07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfdHJ5RGVjb2RlKGxpbmU6IExpbmUpOiBCYXJjb2RlQW5kQmFyY29kZUxpbmUge1xuICAgICAgICBjb25zdCBkZWJ1ZyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdGhpcy5fY29uZmlnLmRlYnVnO1xuXG4gICAgICAgIGlmIChkZWJ1ZyAmJiB0aGlzLl9vdmVybGF5Q29udGV4dCkge1xuICAgICAgICAgICAgdGhpcy5fZHJhd1BhdGgobGluZSwgJ3JlZCcsIDMpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGJhcmNvZGVMaW5lID0gQnJlc2VuaGFtLmdldEJhcmNvZGVMaW5lKHRoaXMuX2lucHV0SW1hZ2VXcmFwcGVyLCBsaW5lWzBdLCBsaW5lWzFdKTtcblxuICAgICAgICBpZiAoZGVidWcgJiYgZGVidWcuc2hvd0ZyZXF1ZW5jeSkge1xuICAgICAgICAgICAgdGhpcy5fcHJpbnRGcmVxdWVuY3koYmFyY29kZUxpbmUubGluZSk7XG4gICAgICAgIH1cblxuICAgICAgICBiYXJjb2RlTGluZSA9IEJyZXNlbmhhbS50b0JpbmFyeUxpbmUoYmFyY29kZUxpbmUpO1xuXG4gICAgICAgIGlmIChkZWJ1ZyAmJiBkZWJ1Zy5zaG93UGF0dGVybikge1xuICAgICAgICAgICAgdGhpcy5fcHJpbnRQYXR0ZXJuKGJhcmNvZGVMaW5lLmxpbmUpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9iYXJjb2RlUmVhZGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY29kZVJlc3VsdCA9IHRoaXMuX2JhcmNvZGVSZWFkZXJzW2ldLmRlY29kZVBhdHRlcm4oYmFyY29kZUxpbmUubGluZSk7XG4gICAgICAgICAgICBpZiAoY29kZVJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGNvZGVSZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgIGJhcmNvZGVMaW5lXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIHNsaWNlcyB0aGUgZ2l2ZW4gYXJlYSBhcGFydCBhbmQgdHJpZXMgdG8gZGV0ZWN0IGEgYmFyY29kZS1wYXR0ZXJuIGZvciBlYWNoIHNsaWNlLlxuICAgICAqIEl0IHJldHVybnMgdGhlIGRlY29kZWQgYmFyY29kZSwgb3IgbnVsbCBpZiBub3RoaW5nIHdhcyBmb3VuZFxuICAgICAqIEBwYXJhbSBib3hcbiAgICAgKiBAcGFyYW0gbGluZVxuICAgICAqIEBwYXJhbSBsaW5lQW5nbGVcbiAgICAgKi9cbiAgICBwcml2YXRlIF90cnlEZWNvZGVCcnV0ZUZvcmNlKGJveDogQm94LCBsaW5lOiBMaW5lLCBsaW5lQW5nbGU6IG51bWJlcik6IEJhcmNvZGVBbmRCYXJjb2RlTGluZSB7XG4gICAgICAgIGNvbnN0IHNpZGVMZW5ndGggPSBNYXRoLnNxcnQoKGJveFsxXS54IC0gYm94WzBdLngpICoqIDIgKyAoYm94WzFdLnkgLSBib3hbMF0ueSkgKiogMik7XG4gICAgICAgIGNvbnN0IHNsaWNlcyA9IDE2O1xuICAgICAgICBjb25zdCB4ZGlyID0gTWF0aC5zaW4obGluZUFuZ2xlKTtcbiAgICAgICAgY29uc3QgeWRpciA9IE1hdGguY29zKGxpbmVBbmdsZSk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBzbGljZXM7IGkrKykge1xuICAgICAgICAgICAgLy8gbW92ZSBsaW5lIHBlcnBlbmRpY3VsYXIgdG8gYW5nbGVcbiAgICAgICAgICAgIGNvbnN0IGRpciA9IHNpZGVMZW5ndGggLyBzbGljZXMgKiBpICogKGkgJSAyID09PSAwID8gLTEgOiAxKTtcbiAgICAgICAgICAgIGxpbmVbMF0ueSArPSBkaXIgKiB4ZGlyO1xuICAgICAgICAgICAgbGluZVswXS54IC09IGRpciAqIHlkaXI7XG4gICAgICAgICAgICBsaW5lWzFdLnkgKz0gZGlyICogeGRpcjtcbiAgICAgICAgICAgIGxpbmVbMV0ueCAtPSBkaXIgKiB5ZGlyO1xuXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLl90cnlEZWNvZGUobGluZSk7XG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVzZWQgZm9yIGRldmVsb3BtZW50IG9ubHlcbiAgICAgKi9cbiAgICBwcml2YXRlIF9wcmludEZyZXF1ZW5jeShsaW5lOiBBcnJheTxudW1iZXI+KTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLl9mcmVxdWVuY3lDYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgdGhpcy5fZnJlcXVlbmN5Q2FudmFzLndpZHRoID0gbGluZS5sZW5ndGg7XG4gICAgICAgIHRoaXMuX2ZyZXF1ZW5jeUNhbnZhcy5oZWlnaHQgPSAyNTY7XG5cbiAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9ICdibHVlJztcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnRleHQubW92ZVRvKGksIDI1NSk7XG4gICAgICAgICAgICBjb250ZXh0LmxpbmVUbyhpLCAyNTUgLSBsaW5lW2ldKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgICAgIGNvbnRleHQuc3Ryb2tlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXNlZCBmb3IgZGV2ZWxvcG1lbnQgb25seVxuICAgICAqL1xuICAgIHByaXZhdGUgX3ByaW50UGF0dGVybihsaW5lOiBBcnJheTxudW1iZXI+KTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLl9wYXR0ZXJuQ2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbiAgICAgICAgdGhpcy5fcGF0dGVybkNhbnZhcy53aWR0aCA9IGxpbmUubGVuZ3RoO1xuICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICdibGFjayc7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAobGluZVtpXSA9PT0gMSkge1xuICAgICAgICAgICAgICAgIGNvbnRleHQuZmlsbFJlY3QoaSwgMCwgMSwgMTAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX2RyYXdQYXRoKHBhdGg6IEFycmF5PFBvaW50PiwgY29sb3I6IHN0cmluZywgbGluZVdpZHRoOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgSW1hZ2VEZWJ1Zy5kcmF3UGF0aChwYXRoLCB0aGlzLl9vdmVybGF5Q29udGV4dCwgY29sb3IsIGxpbmVXaWR0aCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuLi9jb21tb24vcG9pbnQnO1xuaW1wb3J0IHsgSW1hZ2VXcmFwcGVyIH0gZnJvbSAnLi4vY29tbW9uL2ltYWdlLXdyYXBwZXInO1xuXG5lbnVtIFNsb3BlIHtcbiAgICBVcCA9IDEsXG4gICAgRG93biA9IC0xXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIEJhcmNvZGVMaW5lIHtcbiAgICBsaW5lOiBBcnJheTxudW1iZXI+O1xuICAgIG1heD86IG51bWJlcjtcbiAgICBtaW4/OiBudW1iZXI7XG4gICAgdGhyZXNob2xkPzogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgQnJlc2VuaGFtIHtcbiAgICAvKipcbiAgICAgKiBTY2FucyBhIGxpbmUgb2YgdGhlIGdpdmVuIGltYWdlIGZyb20gcG9pbnQgcDEgdG8gcDIgYW5kIHJldHVybnMgYSByZXN1bHQgb2JqZWN0IGNvbnRhaW5pbmdcbiAgICAgKiBncmF5LXNjYWxlIHZhbHVlcyAoMC0yNTUpIG9mIHRoZSB1bmRlcmx5aW5nIHBpeGVscyBpbiBhZGRpdGlvbiB0byB0aGUgbWluIGFuZCBtYXggdmFsdWVzLlxuICAgICAqIEBwYXJhbSBpbWFnZVdyYXBwZXJcbiAgICAgKiBAcGFyYW0gcDEgVGhlIHN0YXJ0IHBvaW50IHt4LHl9XG4gICAgICogQHBhcmFtIHAyIFRoZSBlbmQgcG9pbnQge3gseX1cbiAgICAgKiBAcmV0dXJucyB7bGluZSwgbWluLCBtYXh9XG4gICAgICovXG4gICAgc3RhdGljIGdldEJhcmNvZGVMaW5lKGltYWdlV3JhcHBlcjogSW1hZ2VXcmFwcGVyLCBwMTogUG9pbnQsIHAyOiBQb2ludCk6IEJhcmNvZGVMaW5lIHtcbiAgICAgICAgbGV0IHgwID0gcDEueCB8IDA7XG4gICAgICAgIGxldCB5MCA9IHAxLnkgfCAwO1xuICAgICAgICBsZXQgeDEgPSBwMi54IHwgMDtcbiAgICAgICAgbGV0IHkxID0gcDIueSB8IDA7XG4gICAgICAgIGNvbnN0IHN0ZWVwID0gTWF0aC5hYnMoeTEgLSB5MCkgPiBNYXRoLmFicyh4MSAtIHgwKTtcbiAgICAgICAgbGV0IHRtcDogbnVtYmVyO1xuICAgICAgICBjb25zdCBsaW5lID0gW107XG4gICAgICAgIGNvbnN0IGltYWdlRGF0YSA9IGltYWdlV3JhcHBlci5kYXRhO1xuICAgICAgICBjb25zdCB3aWR0aCA9IGltYWdlV3JhcHBlci5zaXplLng7XG4gICAgICAgIGxldCB2YWw6IG51bWJlcjtcbiAgICAgICAgbGV0IG1pbiA9IDI1NTtcbiAgICAgICAgbGV0IG1heCA9IDA7XG5cbiAgICAgICAgZnVuY3Rpb24gcmVhZChhOiBudW1iZXIsIGI6IG51bWJlcikge1xuICAgICAgICAgICAgdmFsID0gaW1hZ2VEYXRhW2IgKiB3aWR0aCArIGFdO1xuICAgICAgICAgICAgbWluID0gdmFsIDwgbWluID8gdmFsIDogbWluO1xuICAgICAgICAgICAgbWF4ID0gdmFsID4gbWF4ID8gdmFsIDogbWF4O1xuICAgICAgICAgICAgbGluZS5wdXNoKHZhbCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3RlZXApIHtcbiAgICAgICAgICAgIHRtcCA9IHgwO1xuICAgICAgICAgICAgeDAgPSB5MDtcbiAgICAgICAgICAgIHkwID0gdG1wO1xuXG4gICAgICAgICAgICB0bXAgPSB4MTtcbiAgICAgICAgICAgIHgxID0geTE7XG4gICAgICAgICAgICB5MSA9IHRtcDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoeDAgPiB4MSkge1xuICAgICAgICAgICAgdG1wID0geDA7XG4gICAgICAgICAgICB4MCA9IHgxO1xuICAgICAgICAgICAgeDEgPSB0bXA7XG5cbiAgICAgICAgICAgIHRtcCA9IHkwO1xuICAgICAgICAgICAgeTAgPSB5MTtcbiAgICAgICAgICAgIHkxID0gdG1wO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGRlbHRheCA9IHgxIC0geDA7XG4gICAgICAgIGxldCBkZWx0YXkgPSBNYXRoLmFicyh5MSAtIHkwKTtcbiAgICAgICAgbGV0IGVycm9yID0gKGRlbHRheCAvIDIpIHwgMDtcbiAgICAgICAgbGV0IHkgPSB5MDtcbiAgICAgICAgbGV0IHlzdGVwID0geTAgPCB5MSA/IDEgOiAtMTtcblxuICAgICAgICBmb3IgKGxldCB4ID0geDA7IHggPCB4MTsgeCsrKSB7XG4gICAgICAgICAgICBpZiAoc3RlZXApIHtcbiAgICAgICAgICAgICAgICByZWFkKHksIHgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZWFkKHgsIHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZXJyb3IgPSBlcnJvciAtIGRlbHRheTtcbiAgICAgICAgICAgIGlmIChlcnJvciA8IDApIHtcbiAgICAgICAgICAgICAgICB5ICs9IHlzdGVwO1xuICAgICAgICAgICAgICAgIGVycm9yID0gZXJyb3IgKyBkZWx0YXg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGluZSxcbiAgICAgICAgICAgIG1pbixcbiAgICAgICAgICAgIG1heFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIHRoZSByZXN1bHQgZnJvbSBnZXRCYXJjb2RlTGluZSBpbnRvIGEgYmluYXJ5IHJlcHJlc2VudGF0aW9uXG4gICAgICogYWxzbyBjb25zaWRlcmluZyB0aGUgZnJlcXVlbmN5IGFuZCBzbG9wZSBvZiB0aGUgc2lnbmFsIGZvciBtb3JlIHJvYnVzdCByZXN1bHRzXG4gICAgICogQHBhcmFtIHJlc3VsdCB7bGluZSwgbWluLCBtYXh9XG4gICAgICovXG4gICAgc3RhdGljIHRvQmluYXJ5TGluZShyZXN1bHQ6IEJhcmNvZGVMaW5lKTogQmFyY29kZUxpbmUge1xuICAgICAgICBjb25zdCBtaW4gPSByZXN1bHQubWluO1xuICAgICAgICBjb25zdCBtYXggPSByZXN1bHQubWF4O1xuICAgICAgICBjb25zdCBsaW5lID0gcmVzdWx0LmxpbmU7XG4gICAgICAgIGNvbnN0IGNlbnRlciA9IG1pbiArIChtYXggLSBtaW4pIC8gMjtcbiAgICAgICAgY29uc3QgZXh0cmVtYSA9IG5ldyBBcnJheTx7IHBvczogbnVtYmVyOyB2YWw6IG51bWJlcjsgfT4oKTtcbiAgICAgICAgbGV0IHRocmVzaG9sZCA9IChtYXggLSBtaW4pIC8gMTI7XG4gICAgICAgIGNvbnN0IHJUaHJlc2hvbGQgPSAtdGhyZXNob2xkO1xuXG4gICAgICAgIC8vIDEuIGZpbmQgZXh0cmVtYVxuICAgICAgICBsZXQgY3VycmVudERpciA9IGxpbmVbMF0gPiBjZW50ZXIgPyBTbG9wZS5VcCA6IFNsb3BlLkRvd247XG4gICAgICAgIGV4dHJlbWEucHVzaCh7XG4gICAgICAgICAgICBwb3M6IDAsXG4gICAgICAgICAgICB2YWw6IGxpbmVbMF1cbiAgICAgICAgfSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZS5sZW5ndGggLSAyOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHNsb3BlID0gKGxpbmVbaSArIDFdIC0gbGluZVtpXSk7XG4gICAgICAgICAgICBjb25zdCBzbG9wZTIgPSAobGluZVtpICsgMl0gLSBsaW5lW2kgKyAxXSk7XG4gICAgICAgICAgICBsZXQgZGlyOiBTbG9wZTtcbiAgICAgICAgICAgIGlmICgoc2xvcGUgKyBzbG9wZTIpIDwgclRocmVzaG9sZCAmJiBsaW5lW2kgKyAxXSA8IChjZW50ZXIgKiAxLjUpKSB7XG4gICAgICAgICAgICAgICAgZGlyID0gU2xvcGUuRG93bjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoKHNsb3BlICsgc2xvcGUyKSA+IHRocmVzaG9sZCAmJiBsaW5lW2kgKyAxXSA+IChjZW50ZXIgKiAwLjUpKSB7XG4gICAgICAgICAgICAgICAgZGlyID0gU2xvcGUuVXA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRpciA9IGN1cnJlbnREaXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjdXJyZW50RGlyICE9PSBkaXIpIHtcbiAgICAgICAgICAgICAgICBleHRyZW1hLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBwb3M6IGksXG4gICAgICAgICAgICAgICAgICAgIHZhbDogbGluZVtpXVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGN1cnJlbnREaXIgPSBkaXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZXh0cmVtYS5wdXNoKHtcbiAgICAgICAgICAgIHBvczogbGluZS5sZW5ndGgsXG4gICAgICAgICAgICB2YWw6IGxpbmVbbGluZS5sZW5ndGggLSAxXVxuICAgICAgICB9KTtcblxuICAgICAgICBmb3IgKGxldCBqID0gZXh0cmVtYVswXS5wb3M7IGogPCBleHRyZW1hWzFdLnBvczsgaisrKSB7XG4gICAgICAgICAgICBsaW5lW2pdID0gbGluZVtqXSA+IGNlbnRlciA/IDAgOiAxO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaXRlcmF0ZSBvdmVyIGV4dHJlbWEgYW5kIGNvbnZlcnQgdG8gYmluYXJ5IGJhc2VkIG9uIGF2ZyBiZXR3ZWVuIG1pbm1heFxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGV4dHJlbWEubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZXh0cmVtYVtpICsgMV0udmFsID4gZXh0cmVtYVtpXS52YWwpIHtcbiAgICAgICAgICAgICAgICB0aHJlc2hvbGQgPSAoZXh0cmVtYVtpXS52YWwgKyAoKGV4dHJlbWFbaSArIDFdLnZhbCAtIGV4dHJlbWFbaV0udmFsKSAvIDMpICogMikgfCAwO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJlc2hvbGQgPSAoZXh0cmVtYVtpICsgMV0udmFsICsgKChleHRyZW1hW2ldLnZhbCAtIGV4dHJlbWFbaSArIDFdLnZhbCkgLyAzKSkgfCAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gZXh0cmVtYVtpXS5wb3M7IGogPCBleHRyZW1hW2kgKyAxXS5wb3M7IGorKykge1xuICAgICAgICAgICAgICAgIGxpbmVbal0gPSBsaW5lW2pdID4gdGhyZXNob2xkID8gMCA6IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4ucmVzdWx0LFxuICAgICAgICAgICAgdGhyZXNob2xkXG4gICAgICAgIH07XG4gICAgfTtcbn1cbiIsImltcG9ydCB7IGdldFVzZXJNZWRpYSwgZW51bWVyYXRlRGV2aWNlcyB9IGZyb20gJy4uL2NvbW1vbi9tZWRpYS1kZXZpY2VzJztcblxubGV0IF9zdHJlYW06IE1lZGlhU3RyZWFtO1xuXG5leHBvcnQgY2xhc3MgQ2FtZXJhQWNjZXNzIHtcbiAgICAvKipcbiAgICAgKiBBdHRlbXB0cyB0byBhdHRhY2ggdGhlIGNhbWVyYS1zdHJlYW0gdG8gYSBnaXZlbiB2aWRlbyBlbGVtZW50XG4gICAgICogYW5kIGNhbGxzIHRoZSBjYWxsYmFjayBmdW5jdGlvbiB3aGVuIHRoZSBjb250ZW50IGlzIHJlYWR5XG4gICAgICogQHBhcmFtIHZpZGVvXG4gICAgICogQHBhcmFtIHZpZGVvQ29uc3RyYWludHNcbiAgICAgKi9cbiAgICBzdGF0aWMgYXN5bmMgcmVxdWVzdCh2aWRlbzogSFRNTFZpZGVvRWxlbWVudCwgdmlkZW9Db25zdHJhaW50czogTWVkaWFUcmFja0NvbnN0cmFpbnRzKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRDb25zdHJhaW50cyA9IENhbWVyYUFjY2Vzcy5waWNrQ29uc3RyYWludHModmlkZW9Db25zdHJhaW50cyk7XG4gICAgICAgIF9zdHJlYW0gPSBhd2FpdCBnZXRVc2VyTWVkaWEobm9ybWFsaXplZENvbnN0cmFpbnRzKTtcbiAgICAgICAgdmlkZW8uc3JjT2JqZWN0ID0gX3N0cmVhbTtcbiAgICAgICAgdmlkZW8uc2V0QXR0cmlidXRlKCdhdXRvcGxheScsICcnKTtcbiAgICAgICAgdmlkZW8uc2V0QXR0cmlidXRlKCdtdXRlZCcsICcnKTtcbiAgICAgICAgdmlkZW8uc2V0QXR0cmlidXRlKCdwbGF5c2lubGluZScsICcnKTtcblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB2aWRlby5hZGRFdmVudExpc3RlbmVyKCdsb2FkZWRtZXRhZGF0YScsICgpID0+IHtcbiAgICAgICAgICAgIHZpZGVvLnBsYXkoKTtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSkpLnRoZW4oX3dhaXRGb3JWaWRlby5iaW5kKG51bGwsIHZpZGVvKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIHJlbGVhc2UoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHRyYWNrcyA9IF9zdHJlYW0gJiYgX3N0cmVhbS5nZXRWaWRlb1RyYWNrcygpO1xuICAgICAgICBpZiAodHJhY2tzICYmIHRyYWNrcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRyYWNrc1swXS5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgICAgX3N0cmVhbSA9IG51bGw7XG4gICAgfVxuXG4gICAgc3RhdGljIGFzeW5jIGVudW1lcmF0ZVZpZGVvRGV2aWNlcygpOiBQcm9taXNlPEFycmF5PE1lZGlhRGV2aWNlSW5mbz4+IHtcbiAgICAgICAgY29uc3QgZGV2aWNlcyA9IGF3YWl0IGVudW1lcmF0ZURldmljZXMoKTtcbiAgICAgICAgcmV0dXJuIGRldmljZXMuZmlsdGVyKCh7IGtpbmQgfSkgPT4ga2luZCA9PT0gJ3ZpZGVvaW5wdXQnKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0QWN0aXZlU3RyZWFtTGFiZWwoKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgdHJhY2sgPSBDYW1lcmFBY2Nlc3MuZ2V0QWN0aXZlVHJhY2soKTtcbiAgICAgICAgcmV0dXJuIHRyYWNrID8gdHJhY2subGFiZWwgOiAnJztcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0QWN0aXZlVHJhY2soKSB7XG4gICAgICAgIGNvbnN0IHRyYWNrcyA9IF9zdHJlYW0gJiYgX3N0cmVhbS5nZXRWaWRlb1RyYWNrcygpO1xuICAgICAgICBpZiAodHJhY2tzICYmIHRyYWNrcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB0cmFja3NbMF07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBzdGF0aWMgcGlja0NvbnN0cmFpbnRzKHZpZGVvQ29uc3RyYWludHM6IE1lZGlhVHJhY2tDb25zdHJhaW50cyk6IE1lZGlhU3RyZWFtQ29uc3RyYWludHMge1xuICAgICAgICBsZXQgeyB3aWR0aCwgaGVpZ2h0LCBmYWNpbmdNb2RlLCBhc3BlY3RSYXRpbywgZGV2aWNlSWQgfSA9IHZpZGVvQ29uc3RyYWludHM7XG4gICAgICAgIGNvbnN0IHsgbWluQXNwZWN0UmF0aW8sIGZhY2luZyB9ID0gdmlkZW9Db25zdHJhaW50cyBhcyBhbnk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBtaW5Bc3BlY3RSYXRpbyAhPT0gJ3VuZGVmaW5lZCcgJiYgbWluQXNwZWN0UmF0aW8gPiAwKSB7XG4gICAgICAgICAgICBhc3BlY3RSYXRpbyA9IG1pbkFzcGVjdFJhdGlvO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYFdBUk5JTkc6IENvbnN0cmFpbnQgJ21pbkFzcGVjdFJhdGlvJyBpcyBkZXByZWNhdGVkOyBVc2UgJ2FzcGVjdFJhdGlvJyBpbnN0ZWFkYCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGZhY2luZyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGZhY2luZ01vZGUgPSBmYWNpbmc7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgV0FSTklORzogQ29uc3RyYWludCAnZmFjaW5nJyBpcyBkZXByZWNhdGVkLiBVc2UgJ2ZhY2luZ01vZGUnIGluc3RlYWQnYCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBub3JtYWxpemVkQ29uc3RyYWludHMgPSBkZXZpY2VJZCAmJiBmYWNpbmdNb2RlID9cbiAgICAgICAgICAgIHsgd2lkdGgsIGhlaWdodCwgYXNwZWN0UmF0aW8sIGRldmljZUlkIH0gOiB7IHdpZHRoLCBoZWlnaHQsIGZhY2luZ01vZGUsIGFzcGVjdFJhdGlvLCBkZXZpY2VJZCB9O1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhdWRpbzogZmFsc2UsXG4gICAgICAgICAgICB2aWRlbzogbm9ybWFsaXplZENvbnN0cmFpbnRzXG4gICAgICAgIH07XG4gICAgfVxufVxuXG5mdW5jdGlvbiBfd2FpdEZvclZpZGVvKHsgdmlkZW9XaWR0aCwgdmlkZW9IZWlnaHQgfSk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGxldCBhdHRlbXB0cyA9IDEwO1xuXG4gICAgICAgIGZ1bmN0aW9uIGNoZWNrVmlkZW8oKSB7XG4gICAgICAgICAgICBpZiAoYXR0ZW1wdHMgPiAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZpZGVvV2lkdGggPiAxMCAmJiB2aWRlb0hlaWdodCA+IDEwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHt2aWRlb1dpZHRofXB4IHggJHt2aWRlb0hlaWdodH1weGApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dChjaGVja1ZpZGVvLCA1MDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KCdVbmFibGUgdG8gcGxheSB2aWRlbyBzdHJlYW0uIElzIHdlYmNhbSB3b3JraW5nPycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXR0ZW1wdHMtLTtcbiAgICAgICAgfVxuICAgICAgICBjaGVja1ZpZGVvKCk7XG4gICAgfSk7XG59XG4iLCIvKipcbiAqIEBib3Jyb3dzIGh0dHBzOi8vZ2l0aHViLmNvbS9leGlmLWpzL2V4aWYtanNcbiAqL1xuXG5jb25zdCBFeGlmVGFncyA9IHsgMHgwMTEyOiAnb3JpZW50YXRpb24nIH07XG5leHBvcnQgY29uc3QgQXZhaWxhYmxlVGFnczogQXJyYXk8c3RyaW5nPiA9IE9iamVjdC5rZXlzKEV4aWZUYWdzKS5tYXAoa2V5ID0+IEV4aWZUYWdzW2tleV0pO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRhZ3Mge1xuICAgIFtrZXk6IHN0cmluZ106IG51bWJlciB8IHN0cmluZztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZpbmRUYWdzSW5PYmplY3RVUkwoc3JjOiBzdHJpbmcsIHRhZ3MgPSBBdmFpbGFibGVUYWdzKTogUHJvbWlzZTxUYWdzPiB7XG4gICAgaWYgKC9eYmxvYjovaS50ZXN0KHNyYykpIHtcbiAgICAgICAgY29uc3QgYnVmZmVyID0gYXdhaXQgb2JqZWN0VVJMVG9CbG9iKHNyYyk7XG4gICAgICAgIHJldHVybiBmaW5kVGFnc0luQnVmZmVyKGJ1ZmZlciwgdGFncyk7XG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobnVsbCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kVGFnc0luQnVmZmVyKGZpbGU6IEFycmF5QnVmZmVyLCBzZWxlY3RlZFRhZ3M6IEFycmF5PHN0cmluZz4gPSBBdmFpbGFibGVUYWdzKTogVGFncyB7XG4gICAgY29uc3QgZGF0YVZpZXcgPSBuZXcgRGF0YVZpZXcoZmlsZSk7XG4gICAgY29uc3QgbGVuZ3RoID0gZmlsZS5ieXRlTGVuZ3RoO1xuICAgIGNvbnN0IGV4aWZUYWdzID0gc2VsZWN0ZWRUYWdzLnJlZHVjZSgocmVzdWx0LCBzZWxlY3RlZFRhZykgPT4ge1xuICAgICAgICBjb25zdCBleGlmVGFnID0gT2JqZWN0LmtleXMoRXhpZlRhZ3MpLmZpbmQodGFnID0+IEV4aWZUYWdzW3RhZ10gPT09IHNlbGVjdGVkVGFnKTtcbiAgICAgICAgaWYgKGV4aWZUYWcpIHtcbiAgICAgICAgICAgIHJlc3VsdFtleGlmVGFnXSA9IHNlbGVjdGVkVGFnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSwge30pO1xuICAgIGxldCBvZmZzZXQgPSAyO1xuXG4gICAgaWYgKChkYXRhVmlldy5nZXRVaW50OCgwKSAhPT0gMHhGRikgfHwgKGRhdGFWaWV3LmdldFVpbnQ4KDEpICE9PSAweEQ4KSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB3aGlsZSAob2Zmc2V0IDwgbGVuZ3RoKSB7XG4gICAgICAgIGlmIChkYXRhVmlldy5nZXRVaW50OChvZmZzZXQpICE9PSAweEZGKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG1hcmtlciA9IGRhdGFWaWV3LmdldFVpbnQ4KG9mZnNldCArIDEpO1xuICAgICAgICBpZiAobWFya2VyID09PSAweEUxKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVhZEVYSUZEYXRhKGRhdGFWaWV3LCBvZmZzZXQgKyA0LCBleGlmVGFncyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvZmZzZXQgKz0gMiArIGRhdGFWaWV3LmdldFVpbnQxNihvZmZzZXQgKyAyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xufVxuXG5hc3luYyBmdW5jdGlvbiBvYmplY3RVUkxUb0Jsb2IodXJsOiBzdHJpbmcpOiBQcm9taXNlPEFycmF5QnVmZmVyPiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuYXJyYXlCdWZmZXIoKTtcbiAgICB9XG5cbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0hUVFAgRXJyb3IgJyArIHJlc3BvbnNlLnN0YXR1cyk7XG59XG5cbmZ1bmN0aW9uIHJlYWRFWElGRGF0YShkYXRhVmlldzogRGF0YVZpZXcsIHN0YXJ0OiBudW1iZXIsIGV4aWZUYWdzOiB7IFtrZXk6IG51bWJlcl06IHN0cmluZyB9KTogVGFncyB7XG4gICAgaWYgKCdFeGlmJy5zcGxpdCgnJykuc29tZSgoY2hhciwgaW5kZXgpID0+IGRhdGFWaWV3LmdldFVpbnQ4KHN0YXJ0ICsgaW5kZXgpICE9PSBjaGFyLmNoYXJDb2RlQXQoMCkpKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHRpZmZPZmZzZXQgPSBzdGFydCArIDY7XG4gICAgbGV0IGJpZ0VuZDogYm9vbGVhbjtcblxuICAgIGlmIChkYXRhVmlldy5nZXRVaW50MTYodGlmZk9mZnNldCkgPT09IDB4NDk0OSkge1xuICAgICAgICBiaWdFbmQgPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKGRhdGFWaWV3LmdldFVpbnQxNih0aWZmT2Zmc2V0KSA9PT0gMHg0RDREKSB7XG4gICAgICAgIGJpZ0VuZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKGRhdGFWaWV3LmdldFVpbnQxNih0aWZmT2Zmc2V0ICsgMiwgIWJpZ0VuZCkgIT09IDB4MDAyQSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBmaXJzdElGRE9mZnNldCA9IGRhdGFWaWV3LmdldFVpbnQzMih0aWZmT2Zmc2V0ICsgNCwgIWJpZ0VuZCk7XG4gICAgaWYgKGZpcnN0SUZET2Zmc2V0IDwgMHgwMDAwMDAwOCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCB0YWdzID0gcmVhZFRhZ3MoZGF0YVZpZXcsIHRpZmZPZmZzZXQgKyBmaXJzdElGRE9mZnNldCwgZXhpZlRhZ3MsIGJpZ0VuZCk7XG4gICAgcmV0dXJuIHRhZ3M7XG59XG5cbmZ1bmN0aW9uIHJlYWRUYWdzKGRhdGFWaWV3OiBEYXRhVmlldywgZGlyU3RhcnQ6IG51bWJlciwgc3RyaW5nczogeyBba2V5OiBudW1iZXJdOiBzdHJpbmcgfSwgYmlnRW5kOiBib29sZWFuKTogVGFncyB7XG4gICAgY29uc3QgZW50cmllcyA9IGRhdGFWaWV3LmdldFVpbnQxNihkaXJTdGFydCwgIWJpZ0VuZCk7XG4gICAgY29uc3QgdGFnczogVGFncyA9IHt9O1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbnRyaWVzOyBpKyspIHtcbiAgICAgICAgY29uc3QgZW50cnlPZmZzZXQgPSBkaXJTdGFydCArIGkgKiAxMiArIDI7XG4gICAgICAgIGNvbnN0IHRhZyA9IHN0cmluZ3NbZGF0YVZpZXcuZ2V0VWludDE2KGVudHJ5T2Zmc2V0LCAhYmlnRW5kKV07XG4gICAgICAgIGlmICh0YWcpIHtcbiAgICAgICAgICAgIHRhZ3NbdGFnXSA9IHJlYWRUYWdWYWx1ZShkYXRhVmlldywgZW50cnlPZmZzZXQsIGJpZ0VuZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFncztcbn1cblxuZnVuY3Rpb24gcmVhZFRhZ1ZhbHVlKGRhdGFWaWV3OiBEYXRhVmlldywgZW50cnlPZmZzZXQ6IG51bWJlciwgYmlnRW5kOiBib29sZWFuKTogbnVtYmVyIHwgc3RyaW5nIHtcbiAgICBjb25zdCB0eXBlID0gZGF0YVZpZXcuZ2V0VWludDE2KGVudHJ5T2Zmc2V0ICsgMiwgIWJpZ0VuZCk7XG4gICAgY29uc3QgbnVtVmFsdWVzID0gZGF0YVZpZXcuZ2V0VWludDMyKGVudHJ5T2Zmc2V0ICsgNCwgIWJpZ0VuZCk7XG5cbiAgICByZXR1cm4gdHlwZSA9PT0gMyAmJiBudW1WYWx1ZXMgPT09IDEgPyBkYXRhVmlldy5nZXRVaW50MTYoZW50cnlPZmZzZXQgKyA4LCAhYmlnRW5kKSA6IHVuZGVmaW5lZDtcbn1cbiIsImltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi4vY29tbW9uL3BvaW50JztcbmltcG9ydCB7IElucHV0U3RyZWFtIH0gZnJvbSAnLi9pbnB1dC1zdHJlYW0nO1xuaW1wb3J0IHsgSW5wdXRTdHJlYW1Db25maWcgfSBmcm9tICcuL2lucHV0LXN0cmVhbS1jb25maWcnO1xuXG5jb25zdCBRVUFURVJfQ0lSQ0xFID0gTWF0aC5QSSAvIDI7XG5cbmV4cG9ydCBjbGFzcyBGcmFtZUdyYWJiZXIge1xuICAgIHByaXZhdGUgX2lucHV0U3RyZWFtOiBJbnB1dFN0cmVhbTtcbiAgICBwcml2YXRlIF9zdHJlYW1Db25maWc6IElucHV0U3RyZWFtQ29uZmlnO1xuICAgIHByaXZhdGUgX2NhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG4gICAgcHJpdmF0ZSBfY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuICAgIHByaXZhdGUgX2RhdGE6IFVpbnQ4QXJyYXk7XG4gICAgcHJpdmF0ZSBfY2FudmFzSGVpZ2h0OiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfY2FudmFzV2lkdGg6IG51bWJlcjtcbiAgICBwcml2YXRlIF9oZWlnaHQ6IG51bWJlcjtcbiAgICBwcml2YXRlIF93aWR0aDogbnVtYmVyO1xuICAgIHByaXZhdGUgX3RvcExlZnQ6IFBvaW50O1xuXG4gICAgY29uc3RydWN0b3IoaW5wdXRTdHJlYW06IElucHV0U3RyZWFtLCBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuX2lucHV0U3RyZWFtID0gaW5wdXRTdHJlYW07XG4gICAgICAgIHRoaXMuX3N0cmVhbUNvbmZpZyA9IGlucHV0U3RyZWFtLmNvbmZpZztcbiAgICAgICAgdGhpcy5fY2FudmFzV2lkdGggPSBpbnB1dFN0cmVhbS5jYW52YXNXaWR0aDtcbiAgICAgICAgdGhpcy5fY2FudmFzSGVpZ2h0ID0gaW5wdXRTdHJlYW0uY2FudmFzSGVpZ2h0O1xuICAgICAgICB0aGlzLl93aWR0aCA9IGlucHV0U3RyZWFtLndpZHRoO1xuICAgICAgICB0aGlzLl9oZWlnaHQgPSBpbnB1dFN0cmVhbS5oZWlnaHQ7XG4gICAgICAgIHRoaXMuX3RvcExlZnQgPSBpbnB1dFN0cmVhbS50b3BMZWZ0O1xuICAgICAgICB0aGlzLl9jYW52YXMgPSBjYW52YXMgfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgIHRoaXMuX2NhbnZhcy53aWR0aCA9IHRoaXMuX2NhbnZhc1dpZHRoO1xuICAgICAgICB0aGlzLl9jYW52YXMuaGVpZ2h0ID0gdGhpcy5fY2FudmFzSGVpZ2h0O1xuICAgICAgICB0aGlzLl9jb250ZXh0ID0gdGhpcy5fY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIHRoaXMuX2RhdGEgPSBuZXcgVWludDhBcnJheSh0aGlzLl93aWR0aCAqIHRoaXMuX2hlaWdodCk7XG5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdGcmFtZUdyYWJiZXInLCBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgc2l6ZToge1xuICAgICAgICAgICAgICAgICAgICB4OiB0aGlzLl93aWR0aCxcbiAgICAgICAgICAgICAgICAgICAgeTogdGhpcy5faGVpZ2h0XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0b3BMZWZ0OiB0aGlzLl90b3BMZWZ0LFxuICAgICAgICAgICAgICAgIHZpZGVvU2l6ZToge1xuICAgICAgICAgICAgICAgICAgICB4OiBpbnB1dFN0cmVhbS5yZWFsV2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIHk6IGlucHV0U3RyZWFtLnJlYWxIZWlnaHRcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNhbnZhc1NpemU6IHtcbiAgICAgICAgICAgICAgICAgICAgeDogdGhpcy5fY2FudmFzV2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIHk6IHRoaXMuX2NhbnZhc0hlaWdodFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVzZXMgdGhlIGdpdmVuIGFycmF5IGFzIGZyYW1lLWJ1ZmZlclxuICAgICAqL1xuICAgIGF0dGFjaERhdGEoZGF0YTogVWludDhBcnJheSk6IHZvaWQge1xuICAgICAgICB0aGlzLl9kYXRhID0gZGF0YTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGZXRjaGVzIGEgZnJhbWUgZnJvbSB0aGUgaW5wdXQtc3RyZWFtIGFuZCBwdXRzIGludG8gdGhlIGZyYW1lLWJ1ZmZlci5cbiAgICAgKiBUaGUgaW1hZ2UtZGF0YSBpcyBjb252ZXJ0ZWQgdG8gZ3JheS1zY2FsZSBhbmQgdGhlbiBoYWxmLXNhbXBsZWQgaWYgY29uZmlndXJlZC5cbiAgICAgKi9cbiAgICBncmFiKCk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBmcmFtZSA9IHRoaXMuX2lucHV0U3RyZWFtLmdldEZyYW1lKCk7XG5cbiAgICAgICAgaWYgKGZyYW1lKSB7XG4gICAgICAgICAgICB0aGlzLl9hZGp1c3RDYW52YXNTaXplKCk7XG5cbiAgICAgICAgICAgIGxldCBkcmF3YWJsZTogSFRNTEltYWdlRWxlbWVudCB8IEhUTUxWaWRlb0VsZW1lbnQ7XG4gICAgICAgICAgICBsZXQgZHJhd0FuZ2xlID0gMDtcblxuICAgICAgICAgICAgaWYgKGZyYW1lIGluc3RhbmNlb2YgSFRNTFZpZGVvRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGRyYXdhYmxlID0gZnJhbWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRyYXdhYmxlID0gZnJhbWUuaW1hZ2U7XG5cbiAgICAgICAgICAgICAgICBpZiAoZnJhbWUudGFncykge1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGZyYW1lLnRhZ3Mub3JpZW50YXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyYXdBbmdsZSA9IFFVQVRFUl9DSVJDTEU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDg6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcmF3QW5nbGUgPSAtUVVBVEVSX0NJUkNMRTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGRyYXdBbmdsZSAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGhhbGZXaWR0aCA9IHRoaXMuX2NhbnZhc1dpZHRoID4+IDE7XG4gICAgICAgICAgICAgICAgY29uc3QgaGFsZkhlaWdodCA9IHRoaXMuX2NhbnZhc0hlaWdodCA+PiAxO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5fY29udGV4dC50cmFuc2xhdGUoaGFsZldpZHRoLCBoYWxmSGVpZ2h0KTtcbiAgICAgICAgICAgICAgICB0aGlzLl9jb250ZXh0LnJvdGF0ZShkcmF3QW5nbGUpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2NvbnRleHQuZHJhd0ltYWdlKGRyYXdhYmxlLCAtaGFsZkhlaWdodCwgLWhhbGZXaWR0aCwgdGhpcy5fY2FudmFzSGVpZ2h0LCB0aGlzLl9jYW52YXNXaWR0aCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fY29udGV4dC5yb3RhdGUoLWRyYXdBbmdsZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fY29udGV4dC50cmFuc2xhdGUoLWhhbGZXaWR0aCwgLWhhbGZIZWlnaHQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jb250ZXh0LmRyYXdJbWFnZShkcmF3YWJsZSwgMCwgMCwgdGhpcy5fY2FudmFzV2lkdGgsIHRoaXMuX2NhbnZhc0hlaWdodCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGltYWdlRGF0YSA9IHRoaXMuX2NvbnRleHQuZ2V0SW1hZ2VEYXRhKHRoaXMuX3RvcExlZnQueCwgdGhpcy5fdG9wTGVmdC55LCB0aGlzLl93aWR0aCwgdGhpcy5faGVpZ2h0KS5kYXRhO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5fc3RyZWFtQ29uZmlnLmhhbGZTYW1wbGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9ncmF5QW5kSGFsZlNhbXBsZUZyb21DYW52YXNEYXRhKGltYWdlRGF0YSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NvbXB1dGVHcmF5KGltYWdlRGF0YSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfYWRqdXN0Q2FudmFzU2l6ZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuX2NhbnZhcy5oZWlnaHQgIT09IHRoaXMuX2NhbnZhc0hlaWdodCB8fCB0aGlzLl9jYW52YXMud2lkdGggIT09IHRoaXMuX2NhbnZhc1dpZHRoKSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignQ2FudmFzIHNpemUgbmVlZHMgdG8gYmUgYWRqdXN0ZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2NhbnZhcy5oZWlnaHQgPSB0aGlzLl9jYW52YXNIZWlnaHQ7XG4gICAgICAgICAgICB0aGlzLl9jYW52YXMud2lkdGggPSB0aGlzLl9jYW52YXNXaWR0aDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX2dyYXlBbmRIYWxmU2FtcGxlRnJvbUNhbnZhc0RhdGEoaW1hZ2VEYXRhOiBVaW50OENsYW1wZWRBcnJheSk6IHZvaWQge1xuICAgICAgICBjb25zdCBlbmRJbmRleCA9IGltYWdlRGF0YS5sZW5ndGggPj4gMjtcbiAgICAgICAgY29uc3Qgb3V0V2lkdGggPSB0aGlzLl93aWR0aCA+PiAxO1xuICAgICAgICBsZXQgdG9wUm93SW5kZXggPSAwO1xuICAgICAgICBsZXQgYm90dG9tUm93SW5kZXggPSB0aGlzLl93aWR0aDtcbiAgICAgICAgbGV0IG91dEltYWdlSW5kZXggPSAwO1xuXG4gICAgICAgIHdoaWxlIChib3R0b21Sb3dJbmRleCA8IGVuZEluZGV4KSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG91dFdpZHRoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0b3A0ID0gdG9wUm93SW5kZXggPDwgMjtcbiAgICAgICAgICAgICAgICBjb25zdCBib3R0b200ID0gYm90dG9tUm93SW5kZXggPDwgMjtcbiAgICAgICAgICAgICAgICB0aGlzLl9kYXRhW291dEltYWdlSW5kZXhdID0gKFxuICAgICAgICAgICAgICAgICAgICAoMC4yOTkgKiBpbWFnZURhdGFbdG9wNCArIDBdICsgMC41ODcgKiBpbWFnZURhdGFbdG9wNCArIDFdICsgMC4xMTQgKiBpbWFnZURhdGFbdG9wNCArIDJdKSArXG4gICAgICAgICAgICAgICAgICAgICgwLjI5OSAqIGltYWdlRGF0YVt0b3A0ICsgNF0gKyAwLjU4NyAqIGltYWdlRGF0YVt0b3A0ICsgNV0gKyAwLjExNCAqIGltYWdlRGF0YVt0b3A0ICsgNl0pICtcbiAgICAgICAgICAgICAgICAgICAgKDAuMjk5ICogaW1hZ2VEYXRhW2JvdHRvbTQgKyAwXSArIDAuNTg3ICogaW1hZ2VEYXRhW2JvdHRvbTQgKyAxXSArIDAuMTE0ICogaW1hZ2VEYXRhW2JvdHRvbTQgKyAyXSkgK1xuICAgICAgICAgICAgICAgICAgICAoMC4yOTkgKiBpbWFnZURhdGFbYm90dG9tNCArIDRdICsgMC41ODcgKiBpbWFnZURhdGFbYm90dG9tNCArIDVdICsgMC4xMTQgKiBpbWFnZURhdGFbYm90dG9tNCArIDZdKVxuICAgICAgICAgICAgICAgICkgLyA0IHwgMDtcbiAgICAgICAgICAgICAgICBvdXRJbWFnZUluZGV4Kys7XG4gICAgICAgICAgICAgICAgdG9wUm93SW5kZXggKz0gMjtcbiAgICAgICAgICAgICAgICBib3R0b21Sb3dJbmRleCArPSAyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdG9wUm93SW5kZXggKz0gdGhpcy5fd2lkdGg7XG4gICAgICAgICAgICBib3R0b21Sb3dJbmRleCArPSB0aGlzLl93aWR0aDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX2NvbXB1dGVHcmF5KGltYWdlRGF0YTogVWludDhDbGFtcGVkQXJyYXkpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgaW1hZ2VEYXRhTGVuZ3RoID0gaW1hZ2VEYXRhLmxlbmd0aDtcblxuICAgICAgICBpZiAodGhpcy5fc3RyZWFtQ29uZmlnICYmIHRoaXMuX3N0cmVhbUNvbmZpZy5zaW5nbGVDaGFubmVsKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgaiA9IDA7IGkgPCBpbWFnZURhdGFMZW5ndGg7IGkgKz0gNCwgaisrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGF0YVtqXSA9IGltYWdlRGF0YVtpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBqID0gMDsgaSA8IGltYWdlRGF0YUxlbmd0aDsgaSArPSA0LCBqKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9kYXRhW2pdID0gMC4yOTkgKiBpbWFnZURhdGFbaV0gKyAwLjU4NyAqIGltYWdlRGF0YVtpICsgMV0gKyAwLjExNCAqIGltYWdlRGF0YVtpICsgMl0gfCAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgZmluZFRhZ3NJbk9iamVjdFVSTCwgVGFncyB9IGZyb20gJy4vZXhpZi1oZWxwZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEltYWdlSW5mbyB7XG4gICAgaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQ7XG4gICAgdGFncz86IFRhZ3M7XG59XG5cbmV4cG9ydCBjbGFzcyBJbWFnZUxvYWRlciB7XG4gICAgc3RhdGljIGFzeW5jIGxvYWQoXG4gICAgICAgIGJhc2VVcmk6IHN0cmluZyxcbiAgICAgICAgY2FsbGJhY2s6IChfOiBBcnJheTxJbWFnZUluZm8+KSA9PiB2b2lkLFxuICAgICAgICBvZmZzZXQ6IG51bWJlcixcbiAgICAgICAgc2l6ZTogbnVtYmVyLFxuICAgICAgICBzZXF1ZW5jZTogYm9vbGVhblxuICAgICk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBjb25zdCBpbWFnZVNyY3MgPSBuZXcgQXJyYXk8c3RyaW5nPihzaXplKTtcbiAgICAgICAgY29uc3QgbG9hZGVkSW1hZ2VzID0gbmV3IEFycmF5PEltYWdlSW5mbz4oc2l6ZSk7XG4gICAgICAgIGNvbnN0IG5vdExvYWRlZEltYWdlcyA9IG5ldyBBcnJheTxIVE1MSW1hZ2VFbGVtZW50PigpO1xuXG4gICAgICAgIGlmIChzZXF1ZW5jZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGltYWdlU3Jjc1swXSA9IGJhc2VVcmk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICAgICAgICAgIGltYWdlU3Jjc1tpXSA9IGAke2Jhc2VVcml9aW1hZ2UtJHsoJzAwJyArIChvZmZzZXQgKyBpKSkuc2xpY2UoLTMpfS5qcGdgO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaW1hZ2VTcmNzLmZvckVhY2goc3JjID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICBub3RMb2FkZWRJbWFnZXMucHVzaChpbWFnZSk7XG4gICAgICAgICAgICBpbWFnZS5vbmxvYWQgPSAoKSA9PiBsb2FkZWQoaW1hZ2UpO1xuICAgICAgICAgICAgaW1hZ2Uuc3JjID0gc3JjO1xuICAgICAgICB9KTtcblxuICAgICAgICBhc3luYyBmdW5jdGlvbiBsb2FkZWQobG9hZGVkSW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgbm90TG9hZGVkSW1hZ2VzLmxlbmd0aDsgeCsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5vdExvYWRlZEltYWdlc1t4XSA9PT0gbG9hZGVkSW1hZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgbm90TG9hZGVkSW1hZ2VzLnNwbGljZSh4LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogYXNzdW1lIHRoZSBpbmRleCBpcyB0aGUgc2FtZVxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGltYWdlU3Jjcy5sZW5ndGg7IHkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1hZ2VOYW1lID0gaW1hZ2VTcmNzW3ldLnN1YnN0cihpbWFnZVNyY3NbeV0ubGFzdEluZGV4T2YoJy8nKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobG9hZGVkSW1hZ2Uuc3JjLmxhc3RJbmRleE9mKGltYWdlTmFtZSkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGVkSW1hZ2VzW3ldID0geyBpbWFnZTogbG9hZGVkSW1hZ2UgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobm90TG9hZGVkSW1hZ2VzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdJbWFnZXMgbG9hZGVkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZXF1ZW5jZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpcnN0SW1hZ2UgPSBsb2FkZWRJbWFnZXNbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICBmaXJzdEltYWdlLnRhZ3MgPSBhd2FpdCBmaW5kVGFnc0luT2JqZWN0VVJMKGJhc2VVcmkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXgpO1xuICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGxvYWRlZEltYWdlcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgSW1hZ2VJbmZvLCBJbWFnZUxvYWRlciB9IGZyb20gJy4vaW1hZ2UtbG9hZGVyJztcbmltcG9ydCB7IElucHV0U3RyZWFtIH0gZnJvbSAnLi9pbnB1dC1zdHJlYW0nO1xuaW1wb3J0IHsgSW5wdXRTdHJlYW1Db25maWcgfSBmcm9tICcuL2lucHV0LXN0cmVhbS1jb25maWcnO1xuXG5leHBvcnQgY2xhc3MgSW1hZ2VTdHJlYW0gZXh0ZW5kcyBJbnB1dFN0cmVhbSB7XG4gICAgcHJpdmF0ZSBfYmFzZVVybDogc3RyaW5nO1xuICAgIHByaXZhdGUgX2VuZGVkOiBib29sZWFuO1xuICAgIHByaXZhdGUgX2ZyYW1lSW5kZXg6IG51bWJlcjtcbiAgICBwcml2YXRlIF9oZWlnaHQ6IG51bWJlcjtcbiAgICBwcml2YXRlIF9pbWFnZXM6IEFycmF5PEltYWdlSW5mbz47XG4gICAgcHJpdmF0ZSBfbG9hZGVkOiBib29sZWFuO1xuICAgIHByaXZhdGUgX29mZnNldDogbnVtYmVyO1xuICAgIHByaXZhdGUgX3BhdXNlZDogYm9vbGVhbjtcbiAgICBwcml2YXRlIF9zaXplOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfd2lkdGg6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuX2NhbnZhc0hlaWdodCA9IDA7XG4gICAgICAgIHRoaXMuX2NhbnZhc1dpZHRoID0gMDtcbiAgICAgICAgdGhpcy5fYmFzZVVybCA9IG51bGw7XG4gICAgICAgIHRoaXMuX2VuZGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2ZyYW1lSW5kZXggPSAwO1xuICAgICAgICB0aGlzLl9oZWlnaHQgPSAwO1xuICAgICAgICB0aGlzLl9pbWFnZXMgPSBudWxsO1xuICAgICAgICB0aGlzLl9sb2FkZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fb2Zmc2V0ID0gMTtcbiAgICAgICAgdGhpcy5fcGF1c2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fc2l6ZSA9IDA7XG4gICAgICAgIHRoaXMuX3dpZHRoID0gMDtcbiAgICB9XG5cbiAgICBnZXQgcmVhbEhlaWdodCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5faGVpZ2h0O1xuICAgIH1cblxuICAgIGdldCByZWFsV2lkdGgoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dpZHRoO1xuICAgIH1cblxuICAgIGdldCBjb25maWcoKTogSW5wdXRTdHJlYW1Db25maWcge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29uZmlnO1xuICAgIH1cblxuICAgIHNldCBjb25maWcoY29uZmlnOiBJbnB1dFN0cmVhbUNvbmZpZykge1xuICAgICAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG5cbiAgICAgICAgaWYgKGNvbmZpZy5zZXF1ZW5jZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRoaXMuX2Jhc2VVcmwgPSBjb25maWcuc3JjO1xuICAgICAgICAgICAgdGhpcy5fc2l6ZSA9IDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9iYXNlVXJsID0gY29uZmlnLnNyYztcbiAgICAgICAgICAgIHRoaXMuX3NpemUgPSBjb25maWcubGVuZ3RoO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fbG9hZEltYWdlcygpO1xuICAgIH1cblxuICAgIGdldCBlbmRlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VuZGVkO1xuICAgIH1cblxuICAgIHNldEF0dHJpYnV0ZSgpIHsgfVxuXG4gICAgcGF1c2UoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3BhdXNlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcGxheSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fcGF1c2VkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgc2V0IGN1cnJlbnRUaW1lKHRpbWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9mcmFtZUluZGV4ID0gdGltZTtcbiAgICB9XG5cbiAgICBnZXRGcmFtZSgpOiBIVE1MVmlkZW9FbGVtZW50IHwgSW1hZ2VJbmZvIHtcbiAgICAgICAgbGV0IGZyYW1lOiBJbWFnZUluZm8gPSBudWxsO1xuXG4gICAgICAgIGlmICh0aGlzLl9sb2FkZWQgJiYgIXRoaXMuX3BhdXNlZCkge1xuICAgICAgICAgICAgZnJhbWUgPSB0aGlzLl9pbWFnZXNbdGhpcy5fZnJhbWVJbmRleF07XG5cbiAgICAgICAgICAgIGlmICh0aGlzLl9mcmFtZUluZGV4IDwgKHRoaXMuX3NpemUgLSAxKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2ZyYW1lSW5kZXgrKztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2VuZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyKCdlbmRlZCcsIFtdKTtcbiAgICAgICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmcmFtZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9sb2FkSW1hZ2VzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9sb2FkZWQgPSBmYWxzZTtcbiAgICAgICAgSW1hZ2VMb2FkZXIubG9hZCh0aGlzLl9iYXNlVXJsLCBpbWFnZXMgPT4ge1xuICAgICAgICAgICAgdGhpcy5faW1hZ2VzID0gaW1hZ2VzO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKGltYWdlc1swXS50YWdzICYmIGltYWdlc1swXS50YWdzLm9yaWVudGF0aW9uKSB7XG4gICAgICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgIGNhc2UgODoge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl93aWR0aCA9IGltYWdlc1swXS5pbWFnZS5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2hlaWdodCA9IGltYWdlc1swXS5pbWFnZS53aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fd2lkdGggPSBpbWFnZXNbMF0uaW1hZ2Uud2lkdGg7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2hlaWdodCA9IGltYWdlc1swXS5pbWFnZS5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9jYW52YXNXaWR0aCA9IHRoaXMuX2NhbGN1bGF0ZWRXaWR0aCA9IHRoaXMuX2NvbmZpZy5zaXplID8gdGhpcy5fd2lkdGggPiB0aGlzLl9oZWlnaHQgP1xuICAgICAgICAgICAgICAgIHRoaXMuX2NvbmZpZy5zaXplIDogdGhpcy5fd2lkdGggKiB0aGlzLl9jb25maWcuc2l6ZSAvIHRoaXMuX2hlaWdodCB8IDAgOiB0aGlzLl93aWR0aDtcbiAgICAgICAgICAgIHRoaXMuX2NhbnZhc0hlaWdodCA9IHRoaXMuX2NhbGN1bGF0ZWRIZWlnaHQgPSB0aGlzLl9jb25maWcuc2l6ZSA/IHRoaXMuX3dpZHRoID4gdGhpcy5faGVpZ2h0ID9cbiAgICAgICAgICAgICAgICB0aGlzLl9oZWlnaHQgKiB0aGlzLl9jb25maWcuc2l6ZSAvIHRoaXMuX3dpZHRoIHwgMCA6IHRoaXMuX2NvbmZpZy5zaXplIDogdGhpcy5faGVpZ2h0O1xuICAgICAgICAgICAgdGhpcy5fbG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuX2ZyYW1lSW5kZXggPSAwO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnRyaWdnZXIoJ2NhbnJlY29yZCcsIFtdKSwgMCk7XG4gICAgICAgIH0sIHRoaXMuX29mZnNldCwgdGhpcy5fc2l6ZSwgdGhpcy5fY29uZmlnLnNlcXVlbmNlKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBQb2ludCB9IGZyb20gJy4uL2NvbW1vbi9wb2ludCc7XG5pbXBvcnQgeyBCYXJjb2RlTG9jYXRvckNvbmZpZywgUGF0Y2hTaXplQ29uZmlnIH0gZnJvbSAnLi4vbG9jYXRvci9iYXJjb2RlLWxvY2F0b3ItY29uZmlnJztcbmltcG9ydCB7IElucHV0U3RyZWFtIH0gZnJvbSAnLi9pbnB1dC1zdHJlYW0nO1xuaW1wb3J0IHsgQXJlYUNvbmZpZyB9IGZyb20gJy4vaW5wdXQtc3RyZWFtLWNvbmZpZyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGltZW5zaW9uIHtcbiAgICB1bml0OiAnJScgfCAncHgnLFxuICAgIHZhbHVlOiBudW1iZXI7XG59XG5cbmZ1bmN0aW9uIF9jb21wdXRlRGl2aXNvcnMobjogbnVtYmVyKTogQXJyYXk8bnVtYmVyPiB7XG4gICAgY29uc3QgZGl2aXNvcnMgPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xuICAgIGNvbnN0IGxhcmdlRGl2aXNvcnMgPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xuXG4gICAgZm9yIChsZXQgZGl2aXNvciA9IDE7IGRpdmlzb3IgKiBkaXZpc29yIDw9IG47IGRpdmlzb3IrKykge1xuICAgICAgICBpZiAobiAlIGRpdmlzb3IgPT09IDApIHtcbiAgICAgICAgICAgIGRpdmlzb3JzLnB1c2goZGl2aXNvcik7XG4gICAgICAgICAgICBpZiAoZGl2aXNvciAqIGRpdmlzb3IgIT09IG4pIHtcbiAgICAgICAgICAgICAgICBsYXJnZURpdmlzb3JzLnVuc2hpZnQobiAvIGRpdmlzb3IgfCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkaXZpc29ycy5jb25jYXQobGFyZ2VEaXZpc29ycyk7XG59XG5cbmZ1bmN0aW9uIF9jb21wdXRlQ29tbW9uRGl2aXNvcnMobTogbnVtYmVyLCBuOiBudW1iZXIpOiBBcnJheTxudW1iZXI+IHtcbiAgICBpZiAobSA9PT0gbikge1xuICAgICAgICByZXR1cm4gX2NvbXB1dGVEaXZpc29ycyhtKTtcbiAgICB9XG5cbiAgICBjb25zdCBtYXggPSBtID4gbiA/IG0gOiBuO1xuICAgIGNvbnN0IG1pbiA9IG0gPiBuID8gbiA6IG07XG4gICAgY29uc3QgZGl2aXNvcnMgPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xuICAgIGNvbnN0IGxhcmdlRGl2aXNvcnMgPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xuXG4gICAgZm9yIChsZXQgZGl2aXNvciA9IDE7IGRpdmlzb3IgKiBkaXZpc29yIDw9IG1pbjsgZGl2aXNvcisrKSB7XG4gICAgICAgIGlmIChtYXggJSBkaXZpc29yID09PSAwICYmIG1pbiAlIGRpdmlzb3IgPT09IDApIHtcbiAgICAgICAgICAgIGRpdmlzb3JzLnB1c2goZGl2aXNvcik7XG4gICAgICAgICAgICBjb25zdCBsYXJnZURpdmlzb3IgPSBtaW4gLyBkaXZpc29yIHwgMDtcbiAgICAgICAgICAgIGlmIChkaXZpc29yICE9PSBsYXJnZURpdmlzb3IgJiYgbWF4ICUgbGFyZ2VEaXZpc29yID09PSAwKSB7XG4gICAgICAgICAgICAgICAgbGFyZ2VEaXZpc29ycy51bnNoaWZ0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGl2aXNvcnMuY29uY2F0KGxhcmdlRGl2aXNvcnMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlUGF0Y2hTaXplKHBhdGNoU2l6ZTogUGF0Y2hTaXplQ29uZmlnLCB7IHgsIHkgfTogUG9pbnQpOiBQb2ludCB7XG4gICAgY29uc3Qgd2lkZVNpZGUgPSBNYXRoLm1heCh4IHwgMCwgeSB8IDApIHwgMDtcbiAgICBjb25zdCBuck9mUGF0Y2hlc0xpc3QgPSBbOCwgMTAsIDE1LCAyMCwgMzIsIDYwLCA4MF07XG4gICAgY29uc3QgbnJPZlBhdGNoZXNNYXAgPSB7XG4gICAgICAgICd4LXNtYWxsJzogNSxcbiAgICAgICAgc21hbGw6IDQsXG4gICAgICAgIG1lZGl1bTogMyxcbiAgICAgICAgbGFyZ2U6IDIsXG4gICAgICAgICd4LWxhcmdlJzogMVxuICAgIH07XG4gICAgY29uc3QgbnJPZlBhdGNoZXNJbmRleCA9IG5yT2ZQYXRjaGVzTWFwW3BhdGNoU2l6ZV0gfHwgbnJPZlBhdGNoZXNNYXAubWVkaXVtIHwgMDtcbiAgICBjb25zdCBuck9mUGF0Y2hlcyA9IG5yT2ZQYXRjaGVzTGlzdFtuck9mUGF0Y2hlc0luZGV4XSB8IDA7XG4gICAgY29uc3QgZGVzaXJlZFBhdGNoU2l6ZSA9IHdpZGVTaWRlIC8gbnJPZlBhdGNoZXMgfCAwO1xuXG4gICAgZnVuY3Rpb24gZmluZFBhdGNoU2l6ZUZvckRpdmlzb3JzKGRpdmlzb3JzOiBBcnJheTxudW1iZXI+KTogUG9pbnQge1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIGxldCBmb3VuZCA9IGRpdmlzb3JzW2Rpdmlzb3JzLmxlbmd0aCA+PiAxXSB8IDA7XG5cbiAgICAgICAgd2hpbGUgKGkgPCAoZGl2aXNvcnMubGVuZ3RoIC0gMSkgJiYgZGl2aXNvcnNbaV0gPCBkZXNpcmVkUGF0Y2hTaXplKSB7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGkgPiAwKSB7XG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoZGl2aXNvcnNbaV0gLSBkZXNpcmVkUGF0Y2hTaXplKSA+IE1hdGguYWJzKGRpdmlzb3JzW2kgLSAxXSAtIGRlc2lyZWRQYXRjaFNpemUpKSB7XG4gICAgICAgICAgICAgICAgZm91bmQgPSBkaXZpc29yc1tpIC0gMV0gfCAwO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3VuZCA9IGRpdmlzb3JzW2ldIHwgMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZGVzaXJlZFBhdGNoU2l6ZSAvIGZvdW5kIDwgbnJPZlBhdGNoZXNMaXN0W25yT2ZQYXRjaGVzSW5kZXggKyAxXSAvIG5yT2ZQYXRjaGVzTGlzdFtuck9mUGF0Y2hlc0luZGV4XSAmJlxuICAgICAgICAgICAgZGVzaXJlZFBhdGNoU2l6ZSAvIGZvdW5kID4gbnJPZlBhdGNoZXNMaXN0W25yT2ZQYXRjaGVzSW5kZXggLSAxXSAvIG5yT2ZQYXRjaGVzTGlzdFtuck9mUGF0Y2hlc0luZGV4XSkge1xuICAgICAgICAgICAgcmV0dXJuIHsgeDogZm91bmQsIHk6IGZvdW5kIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3Qgb3B0aW1hbFBhdGNoU2l6ZSA9IGZpbmRQYXRjaFNpemVGb3JEaXZpc29ycyhfY29tcHV0ZUNvbW1vbkRpdmlzb3JzKHgsIHkpKSB8fFxuICAgICAgICBmaW5kUGF0Y2hTaXplRm9yRGl2aXNvcnMoX2NvbXB1dGVEaXZpc29ycyh3aWRlU2lkZSkpIHx8XG4gICAgICAgIGZpbmRQYXRjaFNpemVGb3JEaXZpc29ycyhfY29tcHV0ZURpdmlzb3JzKGRlc2lyZWRQYXRjaFNpemUgKiBuck9mUGF0Y2hlcykpO1xuXG4gICAgcmV0dXJuIG9wdGltYWxQYXRjaFNpemU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0ltYWdlQ29uc3RyYWludHMoaW5wdXRTdHJlYW06IElucHV0U3RyZWFtLCBjb25maWc6IEJhcmNvZGVMb2NhdG9yQ29uZmlnKSB7XG4gICAgbGV0IHdpZHRoID0gaW5wdXRTdHJlYW0ud2lkdGg7XG4gICAgbGV0IGhlaWdodCA9IGlucHV0U3RyZWFtLmhlaWdodDtcbiAgICBjb25zdCBzaGlmdCA9IGNvbmZpZy5oYWxmU2FtcGxlID8gMSA6IDAgfCAwO1xuXG4gICAgLy8gY2FsY3VsYXRlIHdpZHRoIGFuZCBoZWlnaHQgYmFzZWQgb24gYXJlYVxuICAgIGlmIChpbnB1dFN0cmVhbS5jb25maWcuYXJlYSkge1xuICAgICAgICBjb25zdCBhcmVhID0gY29tcHV0ZUltYWdlQXJlYSh3aWR0aCwgaGVpZ2h0LCBpbnB1dFN0cmVhbS5jb25maWcuYXJlYSk7XG4gICAgICAgIGlucHV0U3RyZWFtLnRvcExlZnQgPSBhcmVhLnRvcExlZnQ7XG4gICAgICAgIGlucHV0U3RyZWFtLnNldENhbnZhc1NpemUod2lkdGgsIGhlaWdodCk7XG4gICAgICAgIHdpZHRoID0gYXJlYS53aWR0aDtcbiAgICAgICAgaGVpZ2h0ID0gYXJlYS5oZWlnaHQ7XG4gICAgfVxuXG4gICAgY29uc3Qgc2l6ZSA9IHtcbiAgICAgICAgeDogd2lkdGggPj4gc2hpZnQsXG4gICAgICAgIHk6IGhlaWdodCA+PiBzaGlmdFxuICAgIH07XG5cbiAgICBjb25zdCBwYXRjaFNpemUgPSBjYWxjdWxhdGVQYXRjaFNpemUoY29uZmlnLnBhdGNoU2l6ZSwgc2l6ZSk7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1BhdGNoLVNpemU6JywgSlNPTi5zdHJpbmdpZnkocGF0Y2hTaXplKSk7XG4gICAgfVxuXG4gICAgaW5wdXRTdHJlYW0ud2lkdGggPSAoc2l6ZS54IC8gcGF0Y2hTaXplLnggPDwgc2hpZnQpICogcGF0Y2hTaXplLnggfCAwO1xuICAgIGlucHV0U3RyZWFtLmhlaWdodCA9IChzaXplLnkgLyBwYXRjaFNpemUueSA8PCBzaGlmdCkgKiBwYXRjaFNpemUueSB8IDA7XG5cbiAgICBpZiAoKGlucHV0U3RyZWFtLndpZHRoICUgcGF0Y2hTaXplLngpID09PSAwICYmIChpbnB1dFN0cmVhbS5oZWlnaHQgJSBwYXRjaFNpemUueSkgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1sZW5cbiAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIGRpbWVuc2lvbnMgZG8gbm90IGNvbXBseSB3aXRoIHRoZSBjdXJyZW50IHNldHRpbmdzOiB3aWR0aCAoJHt3aWR0aH0pIGFuZCBoZWlnaHQgKCR7aGVpZ2h0fSkgbXVzdCBiZSBhIG11bHRpcGxlIG9mICR7cGF0Y2hTaXplLnh9YCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfcGFyc2VDc3NEaW1lbnNpb25WYWx1ZXModmFsdWU6IHN0cmluZyk6IERpbWVuc2lvbiB7XG4gICAgY29uc3QgZGltZW5zaW9uOiBEaW1lbnNpb24gPSB7XG4gICAgICAgIHZhbHVlOiBwYXJzZUZsb2F0KHZhbHVlKSxcbiAgICAgICAgdW5pdDogdmFsdWUuaW5kZXhPZignJScpID09PSB2YWx1ZS5sZW5ndGggLSAxID8gJyUnIDogdmFsdWUuaW5kZXhPZigncHgnKSA9PT0gdmFsdWUubGVuZ3RoIC0gMiA/ICdweCcgOiAnJSdcbiAgICB9O1xuXG4gICAgcmV0dXJuIGRpbWVuc2lvbjtcbn1cblxuZXhwb3J0IGNvbnN0IF9kaW1lbnNpb25zQ29udmVydGVycyA9IHtcbiAgICBib3R0b206IChkaW1lbnNpb246IERpbWVuc2lvbiwgeyBoZWlnaHQgfSkgPT4gZGltZW5zaW9uLnVuaXQgPT09ICclJyA/XG4gICAgICAgIGhlaWdodCAtIGhlaWdodCAqIGRpbWVuc2lvbi52YWx1ZSAvIDEwMCB8IDAgOiBkaW1lbnNpb24udW5pdCA9PT0gJ3B4JyA/IGhlaWdodCAtIGRpbWVuc2lvbi52YWx1ZSA6IGhlaWdodCxcbiAgICBsZWZ0OiAoZGltZW5zaW9uOiBEaW1lbnNpb24sIHsgd2lkdGggfSkgPT4gZGltZW5zaW9uLnVuaXQgPT09ICclJyA/XG4gICAgICAgIHdpZHRoICogZGltZW5zaW9uLnZhbHVlIC8gMTAwIHwgMCA6IGRpbWVuc2lvbi51bml0ID09PSAncHgnID8gZGltZW5zaW9uLnZhbHVlIDogMCxcbiAgICByaWdodDogKGRpbWVuc2lvbjogRGltZW5zaW9uLCB7IHdpZHRoIH0pID0+IGRpbWVuc2lvbi51bml0ID09PSAnJScgP1xuICAgICAgICB3aWR0aCAtIHdpZHRoICogZGltZW5zaW9uLnZhbHVlIC8gMTAwIHwgMCA6IGRpbWVuc2lvbi51bml0ID09PSAncHgnID8gd2lkdGggLSBkaW1lbnNpb24udmFsdWUgOiB3aWR0aCxcbiAgICB0b3A6IChkaW1lbnNpb246IERpbWVuc2lvbiwgeyBoZWlnaHQgfSk6IG51bWJlciA9PiBkaW1lbnNpb24udW5pdCA9PT0gJyUnID9cbiAgICAgICAgaGVpZ2h0ICogZGltZW5zaW9uLnZhbHVlIC8gMTAwIHwgMCA6IGRpbWVuc2lvbi51bml0ID09PSAncHgnID8gZGltZW5zaW9uLnZhbHVlIDogMFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGVJbWFnZUFyZWEoaW5wdXRXaWR0aDogbnVtYmVyLCBpbnB1dEhlaWdodDogbnVtYmVyLCBhcmVhOiBBcmVhQ29uZmlnKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHsgd2lkdGg6IGlucHV0V2lkdGgsIGhlaWdodDogaW5wdXRIZWlnaHQgfTtcbiAgICBjb25zdCBwYXJzZWRBcmVhOiB7XG4gICAgICAgIGJvdHRvbT86IG51bWJlcjtcbiAgICAgICAgbGVmdD86IG51bWJlcjtcbiAgICAgICAgcmlnaHQ/OiBudW1iZXI7XG4gICAgICAgIHRvcD86IG51bWJlcjtcbiAgICB9ID0gT2JqZWN0LmtleXMoYXJlYSkucmVkdWNlKChyZXN1bHQsIGtleSkgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGFyZWFba2V5XTtcbiAgICAgICAgY29uc3QgcGFyc2VkID0gX3BhcnNlQ3NzRGltZW5zaW9uVmFsdWVzKHZhbHVlKTtcbiAgICAgICAgY29uc3QgY2FsY3VsYXRlZCA9IF9kaW1lbnNpb25zQ29udmVydGVyc1trZXldKHBhcnNlZCwgY29udGV4dCk7XG5cbiAgICAgICAgcmVzdWx0W2tleV0gPSBjYWxjdWxhdGVkO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0sIHt9KTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHRvcExlZnQ6IHsgeDogcGFyc2VkQXJlYS5sZWZ0LCB5OiBwYXJzZWRBcmVhLnRvcCB9LFxuICAgICAgICB3aWR0aDogcGFyc2VkQXJlYS5yaWdodCAtIHBhcnNlZEFyZWEubGVmdCxcbiAgICAgICAgaGVpZ2h0OiBwYXJzZWRBcmVhLmJvdHRvbSAtIHBhcnNlZEFyZWEudG9wXG4gICAgfTtcbn1cbiIsImltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi4vY29tbW9uL3BvaW50JztcbmltcG9ydCB7IEltYWdlSW5mbyB9IGZyb20gJy4vaW1hZ2UtbG9hZGVyJztcbmltcG9ydCB7IElucHV0U3RyZWFtQ29uZmlnIH0gZnJvbSAnLi9pbnB1dC1zdHJlYW0tY29uZmlnJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIElucHV0U3RyZWFtIHtcbiAgICBwcm90ZWN0ZWQgX2NhbGN1bGF0ZWRIZWlnaHQ6IG51bWJlcjtcbiAgICBwcm90ZWN0ZWQgX2NhbGN1bGF0ZWRXaWR0aDogbnVtYmVyO1xuICAgIHByb3RlY3RlZCBfY2FudmFzSGVpZ2h0OiBudW1iZXI7XG4gICAgcHJvdGVjdGVkIF9jYW52YXNXaWR0aDogbnVtYmVyO1xuICAgIHByb3RlY3RlZCBfY29uZmlnOiBJbnB1dFN0cmVhbUNvbmZpZztcbiAgICBwcm90ZWN0ZWQgX2V2ZW50TmFtZXM6IEFycmF5PHN0cmluZz47XG4gICAgcHJvdGVjdGVkIF9ldmVudEhhbmRsZXJzOiBNYXA8c3RyaW5nLCBBcnJheTxFdmVudExpc3RlbmVyPj47XG4gICAgcHJvdGVjdGVkIF90b3BMZWZ0OiBQb2ludDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl9jYW52YXNXaWR0aCA9IDA7XG4gICAgICAgIHRoaXMuX2NhbnZhc0hlaWdodCA9IDA7XG4gICAgICAgIHRoaXMuX2NvbmZpZyA9IG51bGw7XG4gICAgICAgIHRoaXMuX2V2ZW50TmFtZXMgPSBbJ2NhbnJlY29yZCcsICdlbmRlZCddO1xuICAgICAgICB0aGlzLl9ldmVudEhhbmRsZXJzID0gbmV3IE1hcDxzdHJpbmcsIEFycmF5PEV2ZW50TGlzdGVuZXI+PigpO1xuICAgICAgICB0aGlzLl90b3BMZWZ0ID0geyB4OiAwLCB5OiAwIH07XG4gICAgfVxuXG4gICAgYWJzdHJhY3QgZ2V0IHJlYWxIZWlnaHQoKTogbnVtYmVyO1xuXG4gICAgYWJzdHJhY3QgZ2V0IHJlYWxXaWR0aCgpOiBudW1iZXI7XG5cbiAgICBnZXQgaGVpZ2h0KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jYWxjdWxhdGVkSGVpZ2h0O1xuICAgIH1cblxuICAgIHNldCBoZWlnaHQoaGVpZ2h0OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fY2FsY3VsYXRlZEhlaWdodCA9IGhlaWdodDtcbiAgICB9XG5cbiAgICBnZXQgd2lkdGgoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhbGN1bGF0ZWRXaWR0aDtcbiAgICB9XG5cbiAgICBzZXQgd2lkdGgod2lkdGg6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9jYWxjdWxhdGVkV2lkdGggPSB3aWR0aDtcbiAgICB9XG5cbiAgICBnZXQgdG9wTGVmdCgpOiBQb2ludCB7XG4gICAgICAgIHJldHVybiB7IC4uLnRoaXMuX3RvcExlZnQgfTtcbiAgICB9XG5cbiAgICBzZXQgdG9wTGVmdCh0b3BMZWZ0OiBQb2ludCkge1xuICAgICAgICB0aGlzLl90b3BMZWZ0LnggPSB0b3BMZWZ0Lng7XG4gICAgICAgIHRoaXMuX3RvcExlZnQueSA9IHRvcExlZnQueTtcbiAgICB9XG5cbiAgICBzZXRDYW52YXNTaXplKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2NhbnZhc1dpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMuX2NhbnZhc0hlaWdodCA9IGhlaWdodDtcbiAgICB9XG5cbiAgICBnZXQgY2FudmFzSGVpZ2h0KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jYW52YXNIZWlnaHQ7XG4gICAgfVxuXG4gICAgZ2V0IGNhbnZhc1dpZHRoKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jYW52YXNXaWR0aDtcbiAgICB9XG5cbiAgICBnZXQgY29uZmlnKCk6IElucHV0U3RyZWFtQ29uZmlnIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbmZpZztcbiAgICB9XG5cbiAgICBzZXQgY29uZmlnKGNvbmZpZzogSW5wdXRTdHJlYW1Db25maWcpIHtcbiAgICAgICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuICAgIH1cblxuICAgIGFic3RyYWN0IGdldCBlbmRlZCgpOiBib29sZWFuO1xuXG4gICAgYWJzdHJhY3Qgc2V0QXR0cmlidXRlKG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQ7XG5cbiAgICBhYnN0cmFjdCBwYXVzZSgpOiB2b2lkO1xuXG4gICAgYWJzdHJhY3QgcGxheSgpOiB2b2lkO1xuXG4gICAgYWJzdHJhY3Qgc2V0IGN1cnJlbnRUaW1lKHRpbWU6IG51bWJlcik7XG5cbiAgICBhZGRFdmVudExpc3RlbmVyKGV2ZW50OiBzdHJpbmcsIGxpc3RlbmVyOiBFdmVudExpc3RlbmVyLCBfb3B0aW9ucz86IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuX2V2ZW50TmFtZXMuaW5kZXhPZihldmVudCkgIT09IC0xKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX2V2ZW50SGFuZGxlcnMuaGFzKGV2ZW50KSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2V2ZW50SGFuZGxlcnMuc2V0KGV2ZW50LCBuZXcgQXJyYXk8RXZlbnRMaXN0ZW5lcj4oKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9ldmVudEhhbmRsZXJzLmdldChldmVudCkucHVzaChsaXN0ZW5lcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbGVhckV2ZW50SGFuZGxlcnMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2V2ZW50SGFuZGxlcnMuY2xlYXIoKTtcbiAgICB9XG5cbiAgICB0cmlnZ2VyKGV2ZW50TmFtZTogc3RyaW5nLCBhcmdBcnJheT86IGFueSkge1xuICAgICAgICBjb25zdCBoYW5kbGVycyA9IHRoaXMuX2V2ZW50SGFuZGxlcnMuZ2V0KGV2ZW50TmFtZSk7XG5cbiAgICAgICAgaWYgKGhhbmRsZXJzICYmIGhhbmRsZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgaGFuZGxlcnMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyc1tqXS5hcHBseSh0aGlzLCBhcmdBcnJheSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhYnN0cmFjdCBnZXRGcmFtZSgpOiBIVE1MVmlkZW9FbGVtZW50IHwgSW1hZ2VJbmZvO1xufVxuIiwiaW1wb3J0IHsgVmlkZW9TdHJlYW0gfSBmcm9tICcuL3ZpZGVvLXN0cmVhbSc7XG5cbmV4cG9ydCBjbGFzcyBMaXZlU3RyZWFtIGV4dGVuZHMgVmlkZW9TdHJlYW0ge1xuICAgIGNvbnN0cnVjdG9yKHZpZGVvOiBIVE1MVmlkZW9FbGVtZW50KSB7XG4gICAgICAgIHZpZGVvLnNldEF0dHJpYnV0ZSgnYXV0b3BsYXknLCAnJyk7XG4gICAgICAgIHN1cGVyKHZpZGVvKTtcbiAgICB9XG5cbiAgICBnZXQgZW5kZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBJbWFnZUluZm8gfSBmcm9tICcuL2ltYWdlLWxvYWRlcic7XG5pbXBvcnQgeyBJbnB1dFN0cmVhbSB9IGZyb20gJy4vaW5wdXQtc3RyZWFtJztcbmltcG9ydCB7IElucHV0U3RyZWFtQ29uZmlnIH0gZnJvbSAnLi9pbnB1dC1zdHJlYW0tY29uZmlnJztcblxuZXhwb3J0IGNsYXNzIFZpZGVvU3RyZWFtIGV4dGVuZHMgSW5wdXRTdHJlYW0ge1xuICAgIHByaXZhdGUgX3ZpZGVvOiBIVE1MVmlkZW9FbGVtZW50O1xuXG4gICAgY29uc3RydWN0b3IodmlkZW86IEhUTUxWaWRlb0VsZW1lbnQpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLl92aWRlbyA9IHZpZGVvO1xuICAgIH1cblxuICAgIGdldCByZWFsSGVpZ2h0KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl92aWRlby52aWRlb0hlaWdodDtcbiAgICB9XG5cbiAgICBnZXQgcmVhbFdpZHRoKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl92aWRlby52aWRlb1dpZHRoO1xuICAgIH1cblxuICAgIHNldCBjb25maWcoY29uZmlnOiBJbnB1dFN0cmVhbUNvbmZpZykge1xuICAgICAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG4gICAgICAgIHRoaXMuX3ZpZGVvLnNyYyA9ICh0eXBlb2YgY29uZmlnLnNyYyAhPT0gJ3VuZGVmaW5lZCcpID8gY29uZmlnLnNyYyA6ICcnO1xuICAgIH1cblxuICAgIGdldCBlbmRlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZpZGVvLmVuZGVkO1xuICAgIH1cblxuICAgIHNldEF0dHJpYnV0ZShuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fdmlkZW8uc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgICB9XG5cbiAgICBwYXVzZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fdmlkZW8ucGF1c2UoKTtcbiAgICB9XG5cbiAgICBwbGF5KCk6IHZvaWQge1xuICAgICAgICB0aGlzLl92aWRlby5wbGF5KCk7XG4gICAgfVxuXG4gICAgc2V0IGN1cnJlbnRUaW1lKHRpbWU6IG51bWJlcikge1xuICAgICAgICBpZiAodGhpcy5fY29uZmlnLnR5cGUgIT09ICdMaXZlU3RyZWFtJykge1xuICAgICAgICAgICAgdGhpcy5fdmlkZW8uY3VycmVudFRpbWUgPSB0aW1lO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcihldmVudDogc3RyaW5nLCBsaXN0ZW5lcjogRXZlbnRMaXN0ZW5lciwgb3B0aW9ucz86IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgc3VwZXIuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIsIG9wdGlvbnMpO1xuXG4gICAgICAgIGlmICh0aGlzLl9ldmVudE5hbWVzLmluZGV4T2YoZXZlbnQpID09PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5fdmlkZW8uYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIsIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xlYXJFdmVudEhhbmRsZXJzKCk6IHZvaWQge1xuICAgICAgICAvLyBUT0RPOiBjb21lIHVwIHdpdGggYSB3YXkgdG8gcmVtb3ZlIHZpZGVvIGV2ZW50IGhhbmRsZXJzXG4gICAgICAgIC8vIHRoaXMuX2V2ZW50TmFtZXMuZm9yRWFjaChldmVudE5hbWUgPT4ge1xuICAgICAgICAvLyAgICAgY29uc3QgaGFuZGxlcnMgPSB0aGlzLl9ldmVudEhhbmRsZXJzLmdldChldmVudE5hbWUpO1xuICAgICAgICAvLyAgICAgaWYgKGhhbmRsZXJzICYmIGhhbmRsZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgLy8gICAgICAgICBoYW5kbGVycy5mb3JFYWNoKGhhbmRsZXIgPT4gdGhpcy5fdmlkZW8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGhhbmRsZXIpKTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfSk7XG4gICAgICAgIHN1cGVyLmNsZWFyRXZlbnRIYW5kbGVycygpO1xuICAgIH1cblxuICAgIHRyaWdnZXIoZXZlbnROYW1lOiBzdHJpbmcsIGFyZ0FycmF5PzogYW55KSB7XG4gICAgICAgIGlmIChldmVudE5hbWUgPT09ICdjYW5yZWNvcmQnKSB7XG4gICAgICAgICAgICB0aGlzLl9pbml0U2l6ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3VwZXIudHJpZ2dlcihldmVudE5hbWUsIGFyZ0FycmF5KVxuICAgIH1cblxuICAgIGdldEZyYW1lKCk6IEhUTUxWaWRlb0VsZW1lbnQgfCBJbWFnZUluZm8ge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmlkZW87XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaW5pdFNpemUoKSB7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy5fdmlkZW8udmlkZW9XaWR0aDtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5fdmlkZW8udmlkZW9IZWlnaHQ7XG5cbiAgICAgICAgdGhpcy5fY2FudmFzV2lkdGggPSB0aGlzLl9jYWxjdWxhdGVkV2lkdGggPVxuICAgICAgICAgICAgdGhpcy5fY29uZmlnLnNpemUgPyB3aWR0aCA+IGhlaWdodCA/IHRoaXMuX2NvbmZpZy5zaXplIDogd2lkdGggKiB0aGlzLl9jb25maWcuc2l6ZSAvIGhlaWdodCB8IDAgOiB3aWR0aDtcbiAgICAgICAgdGhpcy5fY2FudmFzSGVpZ2h0ID0gdGhpcy5fY2FsY3VsYXRlZEhlaWdodCA9XG4gICAgICAgICAgICB0aGlzLl9jb25maWcuc2l6ZSA/IHdpZHRoID4gaGVpZ2h0ID8gaGVpZ2h0ICogdGhpcy5fY29uZmlnLnNpemUgLyB3aWR0aCB8IDAgOiB0aGlzLl9jb25maWcuc2l6ZSA6IGhlaWdodDtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMaXZlU3RyZWFtIGV4dGVuZHMgVmlkZW9TdHJlYW0ge1xuICAgIGNvbnN0cnVjdG9yKHZpZGVvOiBIVE1MVmlkZW9FbGVtZW50KSB7XG4gICAgICAgIHZpZGVvLnNldEF0dHJpYnV0ZSgnYXV0b3BsYXknLCAnJyk7XG4gICAgICAgIHN1cGVyKHZpZGVvKTtcbiAgICB9XG5cbiAgICBnZXQgZW5kZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBJbWFnZVdyYXBwZXIgfSBmcm9tICcuLi9jb21tb24vaW1hZ2Utd3JhcHBlcic7XG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJy4uL2NvbW1vbi9wb2ludCc7XG5cbi8qKlxuICogSW52ZXJ0IG1hdHJpeFxuICogQHBhcmFtIG1hdHJpeCB0aGUgbWF0cml4IHRvIGludmVydFxuICogQHJldHVybnMgdGhlIGludmVydGVkIG1hdHJpeFxuICovXG5leHBvcnQgZnVuY3Rpb24gaW52ZXJ0KG1hdHJpeDogRmxvYXQzMkFycmF5KTogRmxvYXQzMkFycmF5IHtcbiAgICBjb25zdCBhMCA9IG1hdHJpeFswXTtcbiAgICBjb25zdCBhMSA9IG1hdHJpeFsxXTtcbiAgICBjb25zdCBhMiA9IG1hdHJpeFsyXTtcbiAgICBjb25zdCBhMyA9IG1hdHJpeFszXTtcbiAgICBjb25zdCBkZXRlcm1pbmFudCA9IGEwICogYTMgLSBhMiAqIGExO1xuXG4gICAgaWYgKCFkZXRlcm1pbmFudCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IEZsb2F0MzJBcnJheShbYTMgLyBkZXRlcm1pbmFudCwgLWExIC8gZGV0ZXJtaW5hbnQsIC1hMiAvIGRldGVybWluYW50LCBhMCAvIGRldGVybWluYW50XSk7XG59XG5cbi8qKlxuICogVHJhbnNmb3JtcyB0aGUgdmVjdG9yIHdpdGggYSBtYXRyaXhcbiAqIEBwYXJhbSB7IHgsIHkgfSB2ZWN0b3IgdG8gdHJhbnNmb3JtXG4gKiBAcGFyYW0gbWF0cml4IG1hdHJpeCB0byB0cmFuc2Zvcm0gd2l0aFxuICogQHJldHVybnMgdGhlIHRyYW5zZm9ybWVkIHZlY3RvclxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtV2l0aE1hdHJpeCh7IHgsIHkgfTogUG9pbnQsIG1hdHJpeDogRmxvYXQzMkFycmF5KTogUG9pbnQge1xuICAgIHJldHVybiB7XG4gICAgICAgIHg6IG1hdHJpeFswXSAqIHggKyBtYXRyaXhbMl0gKiB5LFxuICAgICAgICB5OiBtYXRyaXhbMV0gKiB4ICsgbWF0cml4WzNdICogeVxuICAgIH07XG59XG5cbmZ1bmN0aW9uIF9jb21wdXRlSGlzdG9ncmFtKGltYWdlV3JhcHBlcjogSW1hZ2VXcmFwcGVyLCBiaXRzUGVyUGl4ZWw6IG51bWJlcik6IEludDMyQXJyYXkge1xuICAgIGlmICghYml0c1BlclBpeGVsKSB7XG4gICAgICAgIGJpdHNQZXJQaXhlbCA9IDg7XG4gICAgfVxuXG4gICAgY29uc3QgaW1hZ2VEYXRhID0gaW1hZ2VXcmFwcGVyLmRhdGE7XG4gICAgY29uc3QgYml0U2hpZnQgPSA4IC0gYml0c1BlclBpeGVsO1xuICAgIGNvbnN0IGJ1Y2tldENvdW50ID0gMSA8PCBiaXRzUGVyUGl4ZWw7XG4gICAgY29uc3QgaGlzdG9ncmFtID0gbmV3IEludDMyQXJyYXkoYnVja2V0Q291bnQpO1xuXG4gICAgZm9yIChsZXQgaSA9IGltYWdlRGF0YS5sZW5ndGg7IGktLTspIHtcbiAgICAgICAgaGlzdG9ncmFtW2ltYWdlRGF0YVtpXSA+PiBiaXRTaGlmdF0rKztcbiAgICB9XG5cbiAgICByZXR1cm4gaGlzdG9ncmFtO1xufVxuXG5mdW5jdGlvbiBfZGV0ZXJtaW5lT3RzdVRocmVzaG9sZChpbWFnZVdyYXBwZXI6IEltYWdlV3JhcHBlciwgYml0c1BlclBpeGVsPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBpZiAoIWJpdHNQZXJQaXhlbCkge1xuICAgICAgICBiaXRzUGVyUGl4ZWwgPSA4O1xuICAgIH1cblxuICAgIGNvbnN0IGJpdFNoaWZ0ID0gOCAtIGJpdHNQZXJQaXhlbDtcbiAgICBjb25zdCBoaXN0ID0gX2NvbXB1dGVIaXN0b2dyYW0oaW1hZ2VXcmFwcGVyLCBiaXRzUGVyUGl4ZWwpO1xuICAgIGNvbnN0IHZldCA9IFswXTtcbiAgICBjb25zdCBtYXggPSAoMSA8PCBiaXRzUGVyUGl4ZWwpIC0gMTtcblxuICAgIGZ1bmN0aW9uIHB4KGluaXQ6IG51bWJlciwgZW5kOiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICBsZXQgc3VtID0gMDtcblxuICAgICAgICBmb3IgKGxldCBpID0gaW5pdDsgaSA8PSBlbmQ7IGkrKykge1xuICAgICAgICAgICAgc3VtICs9IGhpc3RbaV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VtO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG14KGluaXQ6IG51bWJlciwgZW5kOiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICBsZXQgc3VtID0gMDtcblxuICAgICAgICBmb3IgKGxldCBpID0gaW5pdDsgaSA8PSBlbmQ7IGkrKykge1xuICAgICAgICAgICAgc3VtICs9IGkgKiBoaXN0W2ldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1bTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBrID0gMTsgayA8IG1heDsgaysrKSB7XG4gICAgICAgIGNvbnN0IHAxID0gcHgoMCwgayk7XG4gICAgICAgIGNvbnN0IHAyID0gcHgoayArIDEsIG1heCk7XG4gICAgICAgIGNvbnN0IHAxMiA9IHAxICogcDIgfHwgMTtcbiAgICAgICAgY29uc3QgbTEgPSBteCgwLCBrKSAqIHAyO1xuICAgICAgICBjb25zdCBtMiA9IG14KGsgKyAxLCBtYXgpICogcDE7XG4gICAgICAgIGNvbnN0IG0xMiA9IG0xIC0gbTI7XG4gICAgICAgIHZldFtrXSA9IG0xMiAqIG0xMiAvIHAxMjtcbiAgICB9XG5cbiAgICAvLyBpbmRleCBvZiBtYXggZWxlbWVudFxuICAgIGNvbnN0IHRocmVzaG9sZCA9IHZldC5yZWR1Y2UoKG1heEluZGV4LCBpdGVtLCBpbmRleCwgYXJyYXkpID0+IGl0ZW0gPiBhcnJheVttYXhJbmRleF0gPyBpbmRleCA6IG1heEluZGV4LCAwKTtcblxuICAgIHJldHVybiB0aHJlc2hvbGQgPDwgYml0U2hpZnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvdHN1VGhyZXNob2xkKGltYWdlV3JhcHBlcjogSW1hZ2VXcmFwcGVyLCB0YXJnZXRXcmFwcGVyOiBJbWFnZVdyYXBwZXIpOiBudW1iZXIge1xuICAgIGNvbnN0IHRocmVzaG9sZCA9IF9kZXRlcm1pbmVPdHN1VGhyZXNob2xkKGltYWdlV3JhcHBlcik7XG4gICAgY29uc3QgdGFyZ2V0RGF0YSA9IHRhcmdldFdyYXBwZXIuZGF0YTtcblxuICAgIGltYWdlV3JhcHBlci5kYXRhLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgICB0YXJnZXREYXRhW2luZGV4XSA9IHZhbHVlIDwgdGhyZXNob2xkID8gMSA6IDA7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhyZXNob2xkO1xufVxuXG4vKipcbiAqIEBwYXJhbSBpbWFnZVdyYXBwZXIgaW5wdXQgaW1hZ2UgdG8gYmUgc2FtcGxlZFxuICogQHBhcmFtIG91dEltYWdlV3JhcHBlciB7SW1hZ2VXcmFwcGVyfSB0byBiZSBzdG9yZWQgaW5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhhbGZTYW1wbGUoaW1hZ2VXcmFwcGVyOiBJbWFnZVdyYXBwZXIsIG91dEltYWdlV3JhcHBlcjogSW1hZ2VXcmFwcGVyKTogdm9pZCB7XG4gICAgY29uc3QgaW1hZ2UgPSBpbWFnZVdyYXBwZXIuZGF0YTtcbiAgICBjb25zdCB3aWR0aCA9IGltYWdlV3JhcHBlci5zaXplLng7XG4gICAgY29uc3Qgb3V0SW1hZ2UgPSBvdXRJbWFnZVdyYXBwZXIuZGF0YTtcbiAgICBjb25zdCBlbmRJbmRleCA9IGltYWdlLmxlbmd0aDtcbiAgICBjb25zdCBvdXRXaWR0aCA9IHdpZHRoID4+IDE7XG4gICAgbGV0IHRvcFJvd0luZGV4ID0gMDtcbiAgICBsZXQgYm90dG9tUm93SW5kZXggPSB3aWR0aDtcbiAgICBsZXQgb3V0SW1nSW5kZXggPSAwO1xuXG4gICAgd2hpbGUgKGJvdHRvbVJvd0luZGV4IDwgZW5kSW5kZXgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvdXRXaWR0aDsgaSsrKSB7XG4gICAgICAgICAgICBvdXRJbWFnZVtvdXRJbWdJbmRleF0gPVxuICAgICAgICAgICAgICAgIChpbWFnZVt0b3BSb3dJbmRleF0gKyBpbWFnZVt0b3BSb3dJbmRleCArIDFdICsgaW1hZ2VbYm90dG9tUm93SW5kZXhdICsgaW1hZ2VbYm90dG9tUm93SW5kZXggKyAxXSkgPj4gMjtcbiAgICAgICAgICAgIG91dEltZ0luZGV4Kys7XG4gICAgICAgICAgICB0b3BSb3dJbmRleCArPSAyO1xuICAgICAgICAgICAgYm90dG9tUm93SW5kZXggKz0gMjtcbiAgICAgICAgfVxuICAgICAgICB0b3BSb3dJbmRleCArPSB3aWR0aDtcbiAgICAgICAgYm90dG9tUm93SW5kZXggKz0gd2lkdGg7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQm94IH0gZnJvbSAnLi4vY29tbW9uL2JveCc7XG5pbXBvcnQgeyBDbHVzdGVyIH0gZnJvbSAnLi4vY29tbW9uL2NsdXN0ZXInO1xuaW1wb3J0IHsgSFNWLCBoc3YycmdiLCBSR0IgfSBmcm9tICcuLi9jb21tb24vaHN2MnJnYic7XG5pbXBvcnQgeyBJbWFnZURlYnVnIH0gZnJvbSAnLi4vY29tbW9uL2ltYWdlLWRlYnVnJztcbmltcG9ydCB7IEltYWdlV3JhcHBlciB9IGZyb20gJy4uL2NvbW1vbi9pbWFnZS13cmFwcGVyJztcbmltcG9ydCB7IE1vbWVudCB9IGZyb20gJy4uL2NvbW1vbi9tb21lbnQnO1xuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuLi9jb21tb24vcG9pbnQnO1xuaW1wb3J0IHsgY2FsY3VsYXRlUGF0Y2hTaXplIH0gZnJvbSAnLi4vaW5wdXQvaW5wdXQtc3RyZWFtLXV0aWxzJztcbmltcG9ydCB7IEJhcmNvZGVMb2NhdG9yQ29uZmlnIH0gZnJvbSAnLi9iYXJjb2RlLWxvY2F0b3ItY29uZmlnJztcbmltcG9ydCB7IGhhbGZTYW1wbGUsIGludmVydCwgb3RzdVRocmVzaG9sZCwgdHJhbnNmb3JtV2l0aE1hdHJpeCB9IGZyb20gJy4vYmFyY29kZS1sb2NhdG9yLXV0aWxzJztcbmltcG9ydCB7IFJhc3Rlcml6ZXIgfSBmcm9tICcuL3Jhc3Rlcml6ZXInO1xuaW1wb3J0IHNrZWxldG9uaXplciBmcm9tICcuL3NrZWxldG9uaXplcic7XG5pbXBvcnQgeyBTZWFyY2hEaXJlY3Rpb25zIH0gZnJvbSAnLi90cmFjZXInO1xuXG5pbnRlcmZhY2UgUGF0Y2gge1xuICAgIGJveDogQm94O1xuICAgIGluZGV4OiBudW1iZXI7XG4gICAgbW9tZW50czogQXJyYXk8TW9tZW50PjtcbiAgICBwb3M6IFBvaW50O1xuICAgIHJhZDogbnVtYmVyO1xuICAgIHg6IG51bWJlcjtcbiAgICB5OiBudW1iZXI7XG59XG5cbnR5cGUgU2NlbGV0b25pemVyID0gYW55O1xuXG5jb25zdCBNb21lbnRTaW1pbGFyaXR5VGhyZXNob2xkID0gMC45O1xuXG5leHBvcnQgY2xhc3MgQmFyY29kZUxvY2F0b3Ige1xuICAgIHByaXZhdGUgX2NvbmZpZzogQmFyY29kZUxvY2F0b3JDb25maWc7XG4gICAgcHJpdmF0ZSBfaW5wdXRJbWFnZVdyYXBwZXI6IEltYWdlV3JhcHBlcjtcbiAgICBwcml2YXRlIF9jdXJyZW50SW1hZ2VXcmFwcGVyOiBJbWFnZVdyYXBwZXI7XG4gICAgcHJpdmF0ZSBfc2tlbEltYWdlV3JhcHBlcjogSW1hZ2VXcmFwcGVyO1xuICAgIHByaXZhdGUgX3N1YkltYWdlV3JhcHBlcjogSW1hZ2VXcmFwcGVyO1xuICAgIHByaXZhdGUgX2xhYmVsSW1hZ2VXcmFwcGVyOiBJbWFnZVdyYXBwZXI8QXJyYXk8bnVtYmVyPj47XG4gICAgcHJpdmF0ZSBfYmluYXJ5SW1hZ2VXcmFwcGVyOiBJbWFnZVdyYXBwZXI7XG4gICAgcHJpdmF0ZSBfcGF0Y2hHcmlkOiBJbWFnZVdyYXBwZXI7XG4gICAgcHJpdmF0ZSBfcGF0Y2hMYWJlbEdyaWQ6IEltYWdlV3JhcHBlcjxJbnQzMkFycmF5PjtcbiAgICBwcml2YXRlIF9pbWFnZVRvUGF0Y2hHcmlkOiBBcnJheTxQYXRjaD47XG4gICAgcHJpdmF0ZSBfcGF0Y2hTaXplOiBQb2ludDtcbiAgICBwcml2YXRlIF9iaW5hcnlDb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4gICAgcHJpdmF0ZSBfbnVtUGF0Y2hlczogUG9pbnQ7XG4gICAgcHJpdmF0ZSBfc2tlbGV0b25pemVyOiBTY2VsZXRvbml6ZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihpbnB1dEltYWdlV3JhcHBlcjogSW1hZ2VXcmFwcGVyLCBjb25maWc6IEJhcmNvZGVMb2NhdG9yQ29uZmlnKSB7XG4gICAgICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcbiAgICAgICAgdGhpcy5faW5wdXRJbWFnZVdyYXBwZXIgPSBpbnB1dEltYWdlV3JhcHBlcjtcbiAgICAgICAgdGhpcy5fbnVtUGF0Y2hlcyA9IHsgeDogMCwgeTogMCB9O1xuXG4gICAgICAgIHRoaXMuX2luaXRCdWZmZXJzKCk7XG4gICAgICAgIHRoaXMuX2luaXRDYW52YXMoKTtcbiAgICB9XG5cbiAgICBsb2NhdGUoKSB7XG4gICAgICAgIGlmICh0aGlzLl9jb25maWcuaGFsZlNhbXBsZSkge1xuICAgICAgICAgICAgaGFsZlNhbXBsZSh0aGlzLl9pbnB1dEltYWdlV3JhcHBlciwgdGhpcy5fY3VycmVudEltYWdlV3JhcHBlcik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9iaW5hcml6ZUltYWdlKCk7XG4gICAgICAgIGNvbnN0IHBhdGNoZXNGb3VuZCA9IHRoaXMuX2ZpbmRQYXRjaGVzKCk7XG4gICAgICAgIC8vIHJldHVybiB1bmxlc3MgNSUgb3IgbW9yZSBwYXRjaGVzIGFyZSBmb3VuZFxuICAgICAgICBpZiAocGF0Y2hlc0ZvdW5kLmxlbmd0aCA8IHRoaXMuX251bVBhdGNoZXMueCAqIHRoaXMuX251bVBhdGNoZXMueSAqIDAuMDUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcmFzdGVyaXplIGFyZWEgYnkgY29tcGFyaW5nIGFuZ3VsYXIgc2ltaWxhcml0eTtcbiAgICAgICAgY29uc3QgbWF4TGFiZWwgPSB0aGlzLl9yYXN0ZXJpemVBbmd1bGFyU2ltaWxhcml0eShwYXRjaGVzRm91bmQpO1xuICAgICAgICBpZiAobWF4TGFiZWwgPCAxKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNlYXJjaCBmb3IgYXJlYSB3aXRoIHRoZSBtb3N0IHBhdGNoZXMgKGJpZ2dlc3QgY29ubmVjdGVkIGFyZWEpXG4gICAgICAgIGNvbnN0IHRvcExhYmVscyA9IHRoaXMuX2ZpbmRCaWdnZXN0Q29ubmVjdGVkQXJlYXMobWF4TGFiZWwpO1xuICAgICAgICBpZiAodG9wTGFiZWxzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBib3hlcyA9IHRoaXMuX2ZpbmRCb3hlcyh0b3BMYWJlbHMsIG1heExhYmVsKTtcbiAgICAgICAgcmV0dXJuIGJveGVzO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2luaXRCdWZmZXJzKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5fY29uZmlnLmhhbGZTYW1wbGUpIHtcbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRJbWFnZVdyYXBwZXIgPSBuZXcgSW1hZ2VXcmFwcGVyKHtcbiAgICAgICAgICAgICAgICB4OiB0aGlzLl9pbnB1dEltYWdlV3JhcHBlci5zaXplLnggLyAyIHwgMCxcbiAgICAgICAgICAgICAgICB5OiB0aGlzLl9pbnB1dEltYWdlV3JhcHBlci5zaXplLnkgLyAyIHwgMFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50SW1hZ2VXcmFwcGVyID0gdGhpcy5faW5wdXRJbWFnZVdyYXBwZXI7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9wYXRjaFNpemUgPSBjYWxjdWxhdGVQYXRjaFNpemUodGhpcy5fY29uZmlnLnBhdGNoU2l6ZSwgdGhpcy5fY3VycmVudEltYWdlV3JhcHBlci5zaXplKTtcblxuICAgICAgICB0aGlzLl9udW1QYXRjaGVzLnggPSB0aGlzLl9jdXJyZW50SW1hZ2VXcmFwcGVyLnNpemUueCAvIHRoaXMuX3BhdGNoU2l6ZS54IHwgMDtcbiAgICAgICAgdGhpcy5fbnVtUGF0Y2hlcy55ID0gdGhpcy5fY3VycmVudEltYWdlV3JhcHBlci5zaXplLnkgLyB0aGlzLl9wYXRjaFNpemUueSB8IDA7XG5cbiAgICAgICAgdGhpcy5fYmluYXJ5SW1hZ2VXcmFwcGVyID0gbmV3IEltYWdlV3JhcHBlcih0aGlzLl9jdXJyZW50SW1hZ2VXcmFwcGVyLnNpemUsIHVuZGVmaW5lZCwgVWludDhBcnJheSwgZmFsc2UpO1xuXG4gICAgICAgIHRoaXMuX2xhYmVsSW1hZ2VXcmFwcGVyID0gbmV3IEltYWdlV3JhcHBlcih0aGlzLl9wYXRjaFNpemUsIHVuZGVmaW5lZCwgQXJyYXksIHRydWUpO1xuXG4gICAgICAgIGNvbnN0IHNrZWxldG9uSW1hZ2VEYXRhID0gbmV3IEFycmF5QnVmZmVyKDY0ICogMTAyNCk7XG4gICAgICAgIHRoaXMuX3N1YkltYWdlV3JhcHBlciA9IG5ldyBJbWFnZVdyYXBwZXIodGhpcy5fcGF0Y2hTaXplLCBuZXcgVWludDhBcnJheShza2VsZXRvbkltYWdlRGF0YSwgMCwgdGhpcy5fcGF0Y2hTaXplLnggKiB0aGlzLl9wYXRjaFNpemUueSkpO1xuICAgICAgICB0aGlzLl9za2VsSW1hZ2VXcmFwcGVyID0gbmV3IEltYWdlV3JhcHBlcih0aGlzLl9wYXRjaFNpemUsXG4gICAgICAgICAgICBuZXcgVWludDhBcnJheShza2VsZXRvbkltYWdlRGF0YSwgdGhpcy5fcGF0Y2hTaXplLnggKiB0aGlzLl9wYXRjaFNpemUueSAqIDMsIHRoaXMuX3BhdGNoU2l6ZS54ICogdGhpcy5fcGF0Y2hTaXplLnkpLFxuICAgICAgICAgICAgdW5kZWZpbmVkLCB0cnVlKTtcbiAgICAgICAgdGhpcy5fc2tlbGV0b25pemVyID0gc2tlbGV0b25pemVyKFxuICAgICAgICAgICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSA/IHdpbmRvdyA6ICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcpID8gc2VsZiA6IGdsb2JhbCxcbiAgICAgICAgICAgIHsgc2l6ZTogdGhpcy5fcGF0Y2hTaXplLnggfSxcbiAgICAgICAgICAgIHNrZWxldG9uSW1hZ2VEYXRhXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3Qgc2l6ZSA9IHtcbiAgICAgICAgICAgIHg6ICh0aGlzLl9jdXJyZW50SW1hZ2VXcmFwcGVyLnNpemUueCAvIHRoaXMuX3N1YkltYWdlV3JhcHBlci5zaXplLngpIHwgMCxcbiAgICAgICAgICAgIHk6ICh0aGlzLl9jdXJyZW50SW1hZ2VXcmFwcGVyLnNpemUueSAvIHRoaXMuX3N1YkltYWdlV3JhcHBlci5zaXplLnkpIHwgMFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9wYXRjaExhYmVsR3JpZCA9IG5ldyBJbWFnZVdyYXBwZXIoc2l6ZSwgdW5kZWZpbmVkLCBJbnQzMkFycmF5LCB0cnVlKTtcbiAgICAgICAgdGhpcy5fcGF0Y2hHcmlkID0gbmV3IEltYWdlV3JhcHBlcihzaXplLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuX2ltYWdlVG9QYXRjaEdyaWQgPSBuZXcgQXJyYXk8UGF0Y2g+KHRoaXMuX3BhdGNoTGFiZWxHcmlkLmRhdGEubGVuZ3RoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9pbml0Q2FudmFzKCkge1xuICAgICAgICBpZiAodGhpcy5fY29uZmlnLnVzZVdvcmtlciB8fCB0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgY2FudmFzLmNsYXNzTmFtZSA9ICdiaW5hcnlCdWZmZXInO1xuICAgICAgICBjYW52YXMud2lkdGggPSB0aGlzLl9iaW5hcnlJbWFnZVdyYXBwZXIuc2l6ZS54O1xuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gdGhpcy5fYmluYXJ5SW1hZ2VXcmFwcGVyLnNpemUueTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdGhpcy5fY29uZmlnLmRlYnVnICYmIHRoaXMuX2NvbmZpZy5kZWJ1Zy5zaG93Q2FudmFzKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVidWcnKS5hcHBlbmRDaGlsZChjYW52YXMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2JpbmFyeUNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgYm91bmRpbmcgYm94IHdoaWNoIGVuY2xvc2VzIGFsbCB0aGUgZ2l2ZW4gcGF0Y2hlc1xuICAgICAqIEByZXR1cm5zIFRoZSBtaW5pbWFsIGJvdW5kaW5nIGJveFxuICAgICAqL1xuICAgIHByaXZhdGUgX2JveEZyb21QYXRjaGVzKHBhdGNoZXM6IEFycmF5PFBhdGNoPik6IEJveCB7XG4gICAgICAgIGNvbnN0IGRlYnVnID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLl9jb25maWcuZGVidWc7XG4gICAgICAgIGxldCBhdmVyYWdlUmFkID0gcGF0Y2hlcy5yZWR1Y2UoKHN1bSwgeyBwb3MsIHJhZCB9KSA9PiB7XG4gICAgICAgICAgICBpZiAoZGVidWcgJiYgZGVidWcuc2hvd1BhdGNoZXMpIHtcbiAgICAgICAgICAgICAgICAvLyBkcmF3IGFsbCBwYXRjaGVzIHdoaWNoIGFyZSB0byBiZSB0YWtlbiBpbnRvIGNvbnNpZGVyYXRpb25cbiAgICAgICAgICAgICAgICB0aGlzLl9kcmF3UmVjdChwb3MsIHRoaXMuX3N1YkltYWdlV3JhcHBlci5zaXplLCAncmVkJywgMSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBzdW0gKyByYWQ7XG4gICAgICAgIH0sIDApIC8gcGF0Y2hlcy5sZW5ndGg7XG5cbiAgICAgICAgYXZlcmFnZVJhZCA9IChhdmVyYWdlUmFkICogMTgwIC8gTWF0aC5QSSArIDkwKSAlIDE4MCAtIDkwO1xuICAgICAgICBpZiAoYXZlcmFnZVJhZCA8IDApIHtcbiAgICAgICAgICAgIGF2ZXJhZ2VSYWQgKz0gMTgwO1xuICAgICAgICB9XG4gICAgICAgIGF2ZXJhZ2VSYWQgPSAoMTgwIC0gYXZlcmFnZVJhZCkgKiBNYXRoLlBJIC8gMTgwO1xuXG4gICAgICAgIGNvbnN0IGNvcyA9IE1hdGguY29zKGF2ZXJhZ2VSYWQpO1xuICAgICAgICBjb25zdCBzaW4gPSBNYXRoLnNpbihhdmVyYWdlUmFkKTtcbiAgICAgICAgY29uc3QgbWF0cml4ID0gbmV3IEZsb2F0MzJBcnJheShbY29zLCBzaW4sIC1zaW4sIGNvc10pO1xuICAgICAgICBjb25zdCBpbnZlcnNlTWF0cml4ID0gaW52ZXJ0KG1hdHJpeCk7XG5cbiAgICAgICAgLy8gaXRlcmF0ZSBvdmVyIHBhdGNoZXMgYW5kIHJvdGF0ZSBieSBhbmdsZVxuICAgICAgICBwYXRjaGVzLmZvckVhY2goKHsgYm94IH0pID0+IHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgNDsgaisrKSB7XG4gICAgICAgICAgICAgICAgYm94W2pdID0gdHJhbnNmb3JtV2l0aE1hdHJpeChib3hbal0sIG1hdHJpeCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChkZWJ1ZyAmJiBkZWJ1Zy5ib3hGcm9tUGF0Y2hlcy5zaG93VHJhbnNmb3JtZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9kcmF3UGF0aChib3gsICcjOTlmZjAwJywgMik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBtaW5YID0gdGhpcy5fYmluYXJ5SW1hZ2VXcmFwcGVyLnNpemUueDtcbiAgICAgICAgbGV0IG1pblkgPSB0aGlzLl9iaW5hcnlJbWFnZVdyYXBwZXIuc2l6ZS55O1xuICAgICAgICBsZXQgbWF4WCA9IC1taW5YO1xuICAgICAgICBsZXQgbWF4WSA9IC1taW5ZO1xuXG4gICAgICAgIC8vIGZpbmQgYm91bmRpbmcgYm94XG4gICAgICAgIHBhdGNoZXMuZm9yRWFjaCgoeyBib3ggfSkgPT4ge1xuICAgICAgICAgICAgYm94LmZvckVhY2goKHsgeCwgeSB9KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHggPCBtaW5YKSB7XG4gICAgICAgICAgICAgICAgICAgIG1pblggPSB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoeCA+IG1heFgpIHtcbiAgICAgICAgICAgICAgICAgICAgbWF4WCA9IHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh5IDwgbWluWSkge1xuICAgICAgICAgICAgICAgICAgICBtaW5ZID0geTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHkgPiBtYXhZKSB7XG4gICAgICAgICAgICAgICAgICAgIG1heFkgPSB5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgYm94OiBCb3ggPSBbeyB4OiBtaW5YLCB5OiBtaW5ZIH0sIHsgeDogbWF4WCwgeTogbWluWSB9LCB7IHg6IG1heFgsIHk6IG1heFkgfSwgeyB4OiBtaW5YLCB5OiBtYXhZIH1dO1xuXG4gICAgICAgIGlmIChkZWJ1ZyAmJiBkZWJ1Zy5ib3hGcm9tUGF0Y2hlcy5zaG93VHJhbnNmb3JtZWRCb3gpIHtcbiAgICAgICAgICAgIHRoaXMuX2RyYXdQYXRoKGJveCwgJyNmZjAwMDAnLCAyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHJldmVyc2Ugcm90YXRpb25cbiAgICAgICAgYm94ID0gYm94Lm1hcCh2ZXJ0ZXggPT4gdHJhbnNmb3JtV2l0aE1hdHJpeCh2ZXJ0ZXgsIGludmVyc2VNYXRyaXgpKSBhcyBCb3g7XG5cbiAgICAgICAgaWYgKGRlYnVnICYmIGRlYnVnLmJveEZyb21QYXRjaGVzLnNob3dCQikge1xuICAgICAgICAgICAgdGhpcy5fZHJhd1BhdGgoYm94LCAnI2ZmMDAwMCcsIDIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy5oYWxmU2FtcGxlKSB7XG4gICAgICAgICAgICAvLyBzY2FsZVxuICAgICAgICAgICAgYm94ID0gYm94Lm1hcCgoeyB4LCB5IH0pID0+ICh7IHg6IHggKiAyLCB5OiB5ICo9IDIgfSkpIGFzIEJveDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBib3g7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIGJpbmFyeSBpbWFnZSBvZiB0aGUgY3VycmVudCBpbWFnZVxuICAgICAqL1xuICAgIHByaXZhdGUgX2JpbmFyaXplSW1hZ2UoKTogdm9pZCB7XG4gICAgICAgIG90c3VUaHJlc2hvbGQodGhpcy5fY3VycmVudEltYWdlV3JhcHBlciwgdGhpcy5fYmluYXJ5SW1hZ2VXcmFwcGVyKTtcbiAgICAgICAgdGhpcy5fYmluYXJ5SW1hZ2VXcmFwcGVyLnplcm9Cb3JkZXIoKTtcblxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLl9jb25maWcuZGVidWcgJiYgdGhpcy5fY29uZmlnLmRlYnVnLnNob3dDYW52YXMpIHtcbiAgICAgICAgICAgIHRoaXMuX2JpbmFyeUltYWdlV3JhcHBlci5zaG93KHRoaXMuX2JpbmFyeUNvbnRleHQsIDI1NSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJdGVyYXRlIG92ZXIgdGhlIGVudGlyZSBpbWFnZSwgZXh0cmFjdCBwYXRjaGVzXG4gICAgICovXG4gICAgcHJpdmF0ZSBfZmluZFBhdGNoZXMoKTogQXJyYXk8UGF0Y2g+IHtcbiAgICAgICAgY29uc3QgZGVidWcgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuX2NvbmZpZy5kZWJ1ZztcbiAgICAgICAgbGV0IHBhdGNoZXNGb3VuZCA9IG5ldyBBcnJheTxQYXRjaD4oKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX251bVBhdGNoZXMueDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuX251bVBhdGNoZXMueTsgaisrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeCA9IHRoaXMuX3N1YkltYWdlV3JhcHBlci5zaXplLnggKiBpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHkgPSB0aGlzLl9zdWJJbWFnZVdyYXBwZXIuc2l6ZS55ICogajtcblxuICAgICAgICAgICAgICAgIC8vIHNlcGVyYXRlIHBhcnRzXG4gICAgICAgICAgICAgICAgdGhpcy5fc2tlbGV0b25pemUoeCwgeSk7XG5cbiAgICAgICAgICAgICAgICAvLyBSYXN0ZXJpemUsIGZpbmQgaW5kaXZpZHVhbCBiYXJzXG4gICAgICAgICAgICAgICAgdGhpcy5fc2tlbEltYWdlV3JhcHBlci56ZXJvQm9yZGVyKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fbGFiZWxJbWFnZVdyYXBwZXIuZGF0YS5maWxsKDApO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJhc3Rlcml6ZXIgPSBuZXcgUmFzdGVyaXplcih0aGlzLl9za2VsSW1hZ2VXcmFwcGVyLCB0aGlzLl9sYWJlbEltYWdlV3JhcHBlcik7XG4gICAgICAgICAgICAgICAgY29uc3QgcmFzdGVyUmVzdWx0ID0gcmFzdGVyaXplci5yYXN0ZXJpemUoMCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoZGVidWcgJiYgZGVidWcuc2hvd0xhYmVscykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9sYWJlbEltYWdlV3JhcHBlci5vdmVybGF5KHRoaXMuX2JpbmFyeUNvbnRleHQsIDM2MCAvIHJhc3RlclJlc3VsdC5jb3VudCB8IDAsIHgsIHkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIGNhbGN1bGF0ZSBtb21lbnRzIGZyb20gdGhlIHNrZWxldG9uaXplZCBwYXRjaFxuICAgICAgICAgICAgICAgIGNvbnN0IG1vbWVudHMgPSB0aGlzLl9sYWJlbEltYWdlV3JhcHBlci5tb21lbnRzKHJhc3RlclJlc3VsdC5jb3VudCk7XG5cbiAgICAgICAgICAgICAgICAvLyBleHRyYWN0IGVsaWdpYmxlIHBhdGNoZXNcbiAgICAgICAgICAgICAgICBjb25zdCBwYXRjaCA9IHRoaXMuX2Rlc2NyaWJlUGF0Y2gobW9tZW50cywgaiAqIHRoaXMuX251bVBhdGNoZXMueCArIGksIHgsIHkpO1xuICAgICAgICAgICAgICAgIGlmIChwYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICBwYXRjaGVzRm91bmQucHVzaChwYXRjaCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlYnVnICYmIGRlYnVnLnNob3dGb3VuZFBhdGNoZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2RyYXdSZWN0KHBhdGNoLnBvcywgdGhpcy5fc3ViSW1hZ2VXcmFwcGVyLnNpemUsICcjOTlmZjAwJywgMik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGF0Y2hlc0ZvdW5kO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZpbmRzIHRob3NlIGNvbm5lY3RlZCBhcmVhcyB3aGljaCBjb250YWluIGF0IGxlYXN0IDYgcGF0Y2hlc1xuICAgICAqIGFuZCByZXR1cm5zIHRoZW0gb3JkZXJlZCBERVNDIGJ5IHRoZSBudW1iZXIgb2YgY29udGFpbmVkIHBhdGNoZXNcbiAgICAgKiBAcGFyYW0gbWF4TGFiZWxcbiAgICAgKi9cbiAgICBwcml2YXRlIF9maW5kQmlnZ2VzdENvbm5lY3RlZEFyZWFzKG1heExhYmVsOiBudW1iZXIpOiBBcnJheTxudW1iZXI+IHtcbiAgICAgICAgbGV0IGxhYmVsSGlzdCA9IG5ldyBBcnJheTxudW1iZXI+KG1heExhYmVsKS5maWxsKDApO1xuXG4gICAgICAgIHRoaXMuX3BhdGNoTGFiZWxHcmlkLmRhdGEuZm9yRWFjaCgoZGF0YTogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICBpZiAoZGF0YSA+IDApIHtcbiAgICAgICAgICAgICAgICBsYWJlbEhpc3RbZGF0YSAtIDFdKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGV4dHJhY3QgdG9wIGFyZWFzIHdpdGggYXQgbGVhc3QgNiBwYXRjaGVzIHByZXNlbnRcbiAgICAgICAgY29uc3QgdG9wTGFiZWxzID0gbGFiZWxIaXN0Lm1hcCgodmFsdWUsIGluZGV4KSA9PiAoeyB2YWx1ZSwgaW5kZXggfSkpXG4gICAgICAgICAgICAuZmlsdGVyKCh7IHZhbHVlIH0pID0+IHZhbHVlID49IDUpLnNvcnQoKGEsIGIpID0+IGIudmFsdWUgLSBhLnZhbHVlKS5tYXAoKHsgaW5kZXggfSkgPT4gaW5kZXggKyAxKTtcblxuICAgICAgICByZXR1cm4gdG9wTGFiZWxzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgcHJpdmF0ZSBfZmluZEJveGVzKHRvcExhYmVsczogQXJyYXk8bnVtYmVyPiwgbWF4TGFiZWw6IG51bWJlcik6IEFycmF5PEJveD4ge1xuICAgICAgICBjb25zdCBib3hlcyA9IG5ldyBBcnJheTxCb3g+KCk7XG4gICAgICAgIGNvbnN0IHNob3dSZW1haW5pbmdQYXRjaExhYmVscyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiZcbiAgICAgICAgICAgIHRoaXMuX2NvbmZpZy5kZWJ1ZyAmJiB0aGlzLl9jb25maWcuZGVidWcuc2hvd1JlbWFpbmluZ1BhdGNoTGFiZWxzO1xuXG4gICAgICAgIHRvcExhYmVscy5mb3JFYWNoKGxhYmVsID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhdGNoZXMgPSBuZXcgQXJyYXk8UGF0Y2g+KCk7XG5cbiAgICAgICAgICAgIHRoaXMuX3BhdGNoTGFiZWxHcmlkLmRhdGEuZm9yRWFjaCgoZGF0YTogbnVtYmVyLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEgPT09IGxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGNoZXMucHVzaCh0aGlzLl9pbWFnZVRvUGF0Y2hHcmlkW2luZGV4XSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGJveCA9IHRoaXMuX2JveEZyb21QYXRjaGVzKHBhdGNoZXMpO1xuXG4gICAgICAgICAgICBpZiAoYm94KSB7XG4gICAgICAgICAgICAgICAgYm94ZXMucHVzaChib3gpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHNob3dSZW1haW5pbmdQYXRjaExhYmVscykge1xuICAgICAgICAgICAgICAgICAgICAvLyBkcmF3IHBhdGNoLWxhYmVscyBpZiByZXF1ZXN0ZWRcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaHN2OiBIU1YgPSBbKGxhYmVsIC8gKG1heExhYmVsICsgMSkpICogMzYwLCAxLCAxXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmdiOiBSR0IgPSBbMCwgMCwgMF07XG4gICAgICAgICAgICAgICAgICAgIGhzdjJyZ2IoaHN2LCByZ2IpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gYHJnYigke3JnYi5qb2luKCcsJyl9KWA7XG5cbiAgICAgICAgICAgICAgICAgICAgcGF0Y2hlcy5mb3JFYWNoKCh7IHBvcyB9KSA9PiB0aGlzLl9kcmF3UmVjdChwb3MsIHRoaXMuX3N1YkltYWdlV3JhcHBlci5zaXplLCBjb2xvciwgMikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGJveGVzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZpbmQgc2ltaWxhciBtb21lbnRzICh2aWEgY2x1c3RlcilcbiAgICAgKiBAcGFyYW0gbW9tZW50c1xuICAgICAqL1xuICAgIHByaXZhdGUgX3NpbWlsYXJNb21lbnRzKG1vbWVudHM6IEFycmF5PE1vbWVudD4pOiBBcnJheTxNb21lbnQ+IHtcbiAgICAgICAgY29uc3QgY2x1c3RlcnMgPSBDbHVzdGVyLmNsdXN0ZXJpemUobW9tZW50cywgTW9tZW50U2ltaWxhcml0eVRocmVzaG9sZCk7XG4gICAgICAgIGNvbnN0IHRvcENsdXN0ZXIgPSBjbHVzdGVycy5yZWR1Y2UoKHRvcCwgaXRlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY291bnQgPSBpdGVtLm1vbWVudHMubGVuZ3RoO1xuICAgICAgICAgICAgcmV0dXJuIGNvdW50ID4gdG9wLmNvdW50ID8geyBpdGVtLCBjb3VudCB9IDogdG9wO1xuICAgICAgICB9LCB7IGl0ZW06IHsgbW9tZW50czogW10gfSwgY291bnQ6IDAgfSk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRvcENsdXN0ZXIuaXRlbS5tb21lbnRzO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfc2tlbGV0b25pemUoeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fYmluYXJ5SW1hZ2VXcmFwcGVyLnN1YkltYWdlQXNDb3B5KHRoaXMuX3N1YkltYWdlV3JhcHBlciwgeCwgeSk7XG4gICAgICAgIHRoaXMuX3NrZWxldG9uaXplci5za2VsZXRvbml6ZSgpO1xuXG4gICAgICAgIC8vIFNob3cgc2tlbGV0b24gaWYgcmVxdWVzdGVkXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuX2NvbmZpZy5kZWJ1ZyAmJiB0aGlzLl9jb25maWcuZGVidWcuc2hvd1NrZWxldG9uKSB7XG4gICAgICAgICAgICB0aGlzLl9za2VsSW1hZ2VXcmFwcGVyLm92ZXJsYXkodGhpcy5fYmluYXJ5Q29udGV4dCwgMzYwLCB4LCB5KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4dHJhY3RzIGFuZCBkZXNjcmliZXMgdGhvc2UgcGF0Y2hlcyB3aGljaCBzZWVtIHRvIGNvbnRhaW4gYSBiYXJjb2RlIHBhdHRlcm5cbiAgICAgKiBAcGFyYW0gbW9tZW50c1xuICAgICAqIEBwYXJhbSBpbmRleFxuICAgICAqIEBwYXJhbSB4XG4gICAgICogQHBhcmFtIHlcbiAgICAgKiBAcmV0dXJucyBsaXN0IG9mIHBhdGNoZXNcbiAgICAgKi9cbiAgICBwcml2YXRlIF9kZXNjcmliZVBhdGNoKG1vbWVudHM6IEFycmF5PE1vbWVudD4sIGluZGV4OiBudW1iZXIsIHg6IG51bWJlciwgeTogbnVtYmVyKTogUGF0Y2gge1xuICAgICAgICBpZiAobW9tZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBjb25zdCBtaW5Db21wb25lbnRXZWlnaHQgPSBNYXRoLmNlaWwodGhpcy5fcGF0Y2hTaXplLnggLyAzKTtcbiAgICAgICAgICAgIC8vIG9ubHkgY29sbGVjdCBtb21lbnRzIHdoaWNoIGFyZWEgY292ZXJzIGF0IGxlYXN0IG1pbkNvbXBvbmVudFdlaWdodCBwaXhlbHNcbiAgICAgICAgICAgIGNvbnN0IGVsaWdpYmxlTW9tZW50cyA9IG1vbWVudHMuZmlsdGVyKG1vbWVudCA9PiBtb21lbnQubTAwID4gbWluQ29tcG9uZW50V2VpZ2h0KTtcblxuICAgICAgICAgICAgLy8gaWYgYXQgbGVhc3QgMiBtb21lbnRzIGFyZSBmb3VuZCB3aGljaCBoYXZlIGF0IGxlYXN0IG1pbkNvbXBvbmVudFdlaWdodHMgY292ZXJlZFxuICAgICAgICAgICAgaWYgKGVsaWdpYmxlTW9tZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWF0Y2hpbmdNb21lbnRzID0gdGhpcy5fc2ltaWxhck1vbWVudHMoZWxpZ2libGVNb21lbnRzKTtcbiAgICAgICAgICAgICAgICBjb25zdCBsZW5ndGggPSBtYXRjaGluZ01vbWVudHMubGVuZ3RoIHwgMDtcblxuICAgICAgICAgICAgICAgIC8vIE9ubHkgdHdvIG9mIHRoZSBtb21lbnRzIGFyZSBhbGxvd2VkIG5vdCB0byBmaXQgaW50byB0aGUgZXF1YXRpb25cbiAgICAgICAgICAgICAgICBpZiAobGVuZ3RoID4gMSAmJiAobGVuZ3RoIDw8IDIpID49IGVsaWdpYmxlTW9tZW50cy5sZW5ndGggKiAzICYmIChsZW5ndGggPDwgMikgPiBtb21lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBkZXRlcm1pbmUgdGhlIHNpbWlsYXJpdHkgb2YgdGhlIG1vbWVudHNcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmFkID0gbWF0Y2hpbmdNb21lbnRzLnJlZHVjZSgoc3VtOiBudW1iZXIsIG1vbWVudDogTW9tZW50KSA9PiBzdW0gKyBtb21lbnQucmFkLCAwKSAvIGxlbmd0aDtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3M6IHsgeCwgeSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgYm94OiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB4LCB5IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB4OiB4ICsgdGhpcy5fc3ViSW1hZ2VXcmFwcGVyLnNpemUueCwgeSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgeDogeCArIHRoaXMuX3N1YkltYWdlV3JhcHBlci5zaXplLngsIHk6IHkgKyB0aGlzLl9zdWJJbWFnZVdyYXBwZXIuc2l6ZS55IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB4LCB5OiB5ICsgdGhpcy5fc3ViSW1hZ2VXcmFwcGVyLnNpemUueSB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9tZW50czogbWF0Y2hpbmdNb21lbnRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmFkLFxuICAgICAgICAgICAgICAgICAgICAgICAgeDogTWF0aC5jb3MocmFkKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IE1hdGguc2luKHJhZClcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9ub3RZZXRQcm9jZXNzZWQoKTogbnVtYmVyIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9wYXRjaExhYmVsR3JpZC5kYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fcGF0Y2hMYWJlbEdyaWQuZGF0YVtpXSA9PT0gMCAmJiB0aGlzLl9wYXRjaEdyaWQuZGF0YVtpXSA9PT0gMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9wYXRjaExhYmVsR3JpZC5kYXRhLmxlbmd0aDtcbiAgICB9XG5cbiAgICBwcml2YXRlIF90cmFjZShjdXJyZW50SW5kZXg6IG51bWJlciwgbGFiZWw6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBjb25zdCB0aHJlc2hvbGQgPSAwLjk1O1xuICAgICAgICBjb25zdCBjdXJyZW50OiBQb2ludCA9IHtcbiAgICAgICAgICAgIHg6IGN1cnJlbnRJbmRleCAlIHRoaXMuX3BhdGNoTGFiZWxHcmlkLnNpemUueCxcbiAgICAgICAgICAgIHk6IChjdXJyZW50SW5kZXggLyB0aGlzLl9wYXRjaExhYmVsR3JpZC5zaXplLngpIHwgMFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChjdXJyZW50SW5kZXggPCB0aGlzLl9wYXRjaExhYmVsR3JpZC5kYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFBhdGNoID0gdGhpcy5faW1hZ2VUb1BhdGNoR3JpZFtjdXJyZW50SW5kZXhdO1xuICAgICAgICAgICAgLy8gYXNzaWduIGxhYmVsXG4gICAgICAgICAgICB0aGlzLl9wYXRjaExhYmVsR3JpZC5kYXRhW2N1cnJlbnRJbmRleF0gPSBsYWJlbDtcblxuICAgICAgICAgICAgU2VhcmNoRGlyZWN0aW9ucy5mb3JFYWNoKGRpcmVjdGlvbiA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgeSA9IGN1cnJlbnQueSArIGRpcmVjdGlvblswXTtcbiAgICAgICAgICAgICAgICBjb25zdCB4ID0gY3VycmVudC54ICsgZGlyZWN0aW9uWzFdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0geSAqIHRoaXMuX3BhdGNoTGFiZWxHcmlkLnNpemUueCArIHg7XG5cbiAgICAgICAgICAgICAgICAvLyBjb250aW51ZSBpZiBwYXRjaCBlbXB0eVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9wYXRjaEdyaWQuZGF0YVtpbmRleF0gPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGF0Y2hMYWJlbEdyaWQuZGF0YVtpbmRleF0gPSBOdW1iZXIuTUFYX1ZBTFVFO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5fcGF0Y2hMYWJlbEdyaWQuZGF0YVtpbmRleF0gPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGF0Y2ggPSB0aGlzLl9pbWFnZVRvUGF0Y2hHcmlkW2luZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2ltaWxhcml0eSA9IE1hdGguYWJzKHBhdGNoLnggKiBjdXJyZW50UGF0Y2gueCArIHBhdGNoLnkgKiBjdXJyZW50UGF0Y2gueSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzaW1pbGFyaXR5ID4gdGhyZXNob2xkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl90cmFjZShpbmRleCwgbGFiZWwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGaW5kcyBwYXRjaGVzIHdoaWNoIGFyZSBjb25uZWN0ZWQgYW5kIHNoYXJlIHRoZSBzYW1lIG9yaWVudGF0aW9uXG4gICAgICogQHBhcmFtIHBhdGNoZXNGb3VuZFxuICAgICAqL1xuICAgIHByaXZhdGUgX3Jhc3Rlcml6ZUFuZ3VsYXJTaW1pbGFyaXR5KHBhdGNoZXNGb3VuZDogQXJyYXk8UGF0Y2g+KTogbnVtYmVyIHtcbiAgICAgICAgbGV0IGxhYmVsID0gMDtcbiAgICAgICAgY29uc3QgaHN2OiBIU1YgPSBbMCwgMSwgMV07XG4gICAgICAgIGNvbnN0IHJnYjogUkdCID0gWzAsIDAsIDBdO1xuXG4gICAgICAgIC8vIHByZXBhcmUgZm9yIGZpbmRpbmcgdGhlIHJpZ2h0IHBhdGNoZXNcbiAgICAgICAgdGhpcy5fcGF0Y2hHcmlkLmRhdGEuZmlsbCgwKTtcbiAgICAgICAgdGhpcy5fcGF0Y2hMYWJlbEdyaWQuZGF0YS5maWxsKDApO1xuICAgICAgICB0aGlzLl9pbWFnZVRvUGF0Y2hHcmlkLmZpbGwobnVsbCk7XG5cbiAgICAgICAgcGF0Y2hlc0ZvdW5kLmZvckVhY2gocGF0Y2ggPT4ge1xuICAgICAgICAgICAgdGhpcy5faW1hZ2VUb1BhdGNoR3JpZFtwYXRjaC5pbmRleF0gPSBwYXRjaDtcbiAgICAgICAgICAgIHRoaXMuX3BhdGNoR3JpZC5kYXRhW3BhdGNoLmluZGV4XSA9IDE7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIHJhc3Rlcml6ZSB0aGUgcGF0Y2hlcyBmb3VuZCB0byBkZXRlcm1pbmUgYXJlYVxuICAgICAgICB0aGlzLl9wYXRjaEdyaWQuemVyb0JvcmRlcigpO1xuXG4gICAgICAgIGxldCBjdXJyZW50SW5kZXggPSAwO1xuICAgICAgICB3aGlsZSAoKGN1cnJlbnRJbmRleCA9IHRoaXMuX25vdFlldFByb2Nlc3NlZCgpKSA8IHRoaXMuX3BhdGNoTGFiZWxHcmlkLmRhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICBsYWJlbCsrO1xuICAgICAgICAgICAgdGhpcy5fdHJhY2UoY3VycmVudEluZGV4LCBsYWJlbCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBkcmF3IHBhdGNoLWxhYmVscyBpZiByZXF1ZXN0ZWRcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdGhpcy5fY29uZmlnLmRlYnVnICYmIHRoaXMuX2NvbmZpZy5kZWJ1Zy5zaG93UGF0Y2hMYWJlbHMpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5fcGF0Y2hMYWJlbEdyaWQuZGF0YS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9wYXRjaExhYmVsR3JpZC5kYXRhW2pdID4gMCAmJiB0aGlzLl9wYXRjaExhYmVsR3JpZC5kYXRhW2pdIDw9IGxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhdGNoID0gdGhpcy5faW1hZ2VUb1BhdGNoR3JpZFtqXTtcbiAgICAgICAgICAgICAgICAgICAgaHN2WzBdID0gKHRoaXMuX3BhdGNoTGFiZWxHcmlkLmRhdGFbal0gLyAobGFiZWwgKyAxKSkgKiAzNjA7XG4gICAgICAgICAgICAgICAgICAgIGhzdjJyZ2IoaHN2LCByZ2IpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9kcmF3UmVjdChwYXRjaC5wb3MsIHRoaXMuX3N1YkltYWdlV3JhcHBlci5zaXplLCBgcmdiKCR7cmdiLmpvaW4oJywnKX0pYCwgMik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGxhYmVsO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2RyYXdSZWN0KHsgeCwgeSB9OiBQb2ludCwgc2l6ZTogUG9pbnQsIGNvbG9yOiBzdHJpbmcsIGxpbmVXaWR0aDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2JpbmFyeUNvbnRleHQuc3Ryb2tlU3R5bGUgPSBjb2xvcjtcbiAgICAgICAgdGhpcy5fYmluYXJ5Q29udGV4dC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICAgICAgdGhpcy5fYmluYXJ5Q29udGV4dC5saW5lV2lkdGggPSBsaW5lV2lkdGggfHwgMTtcbiAgICAgICAgdGhpcy5fYmluYXJ5Q29udGV4dC5zdHJva2VSZWN0KHgsIHksIHNpemUueCwgc2l6ZS55KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9kcmF3UGF0aChwYXRoOiBBcnJheTxQb2ludD4sIGNvbG9yOiBzdHJpbmcsIGxpbmVXaWR0aDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIEltYWdlRGVidWcuZHJhd1BhdGgocGF0aCwgdGhpcy5fYmluYXJ5Q29udGV4dCwgY29sb3IsIGxpbmVXaWR0aCk7XG4gICAgfVxufVxuIiwiLyoqXG4gKiBAYm9ycm93cyBodHRwOi8vd3d3LmNvZGVwcm9qZWN0LmNvbS9UaXBzLzQwNzE3Mi9Db25uZWN0ZWQtQ29tcG9uZW50LUxhYmVsaW5nLWFuZC1WZWN0b3JpemF0aW9uXG4gKi9cblxuaW1wb3J0IHsgSW1hZ2VXcmFwcGVyIH0gZnJvbSAnLi4vY29tbW9uL2ltYWdlLXdyYXBwZXInO1xuaW1wb3J0IHsgQ29udG91clZlcnRleCwgVHJhY2VyIH0gZnJvbSAnLi90cmFjZXInO1xuXG5lbnVtIEVkZ2VMYWJlbCB7XG4gICAgT3V0c2lkZSA9IC0zMjc2NyxcbiAgICBJbnNpZGUgPSAtMzI3NjZcbn07XG5cbmVudW0gQ29udG91ckRpcmVjdGlvbiB7XG4gICAgQ1cgPSAwLFxuICAgIENDVyA9IDEsXG4gICAgVW5rbm93biA9IDJcbn07XG5cbmludGVyZmFjZSBDb250b3VyIHtcbiAgICBkaXI6IENvbnRvdXJEaXJlY3Rpb247XG4gICAgaW5kZXg6IG51bWJlcjtcbiAgICBmaXJzdFZlcnRleDogQ29udG91clZlcnRleDtcbiAgICBwcmV2aW91c1BlZXI/OiBDb250b3VyO1xuICAgIG5leHRQZWVyPzogQ29udG91cjtcbiAgICBpbnNpZGVDb250b3VyczogQ29udG91cjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSYXN0ZXJSZXN1bHQge1xuICAgIGNjOiBDb250b3VyO1xuICAgIGNvdW50OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBSYXN0ZXJpemVyIHtcbiAgICBwcml2YXRlIF93aWR0aDogbnVtYmVyO1xuICAgIHByaXZhdGUgX2hlaWdodDogbnVtYmVyO1xuICAgIHByaXZhdGUgX3RyYWNlcjogVHJhY2VyO1xuICAgIHByaXZhdGUgX2ltYWdlRGF0YTogVWludDhBcnJheTtcbiAgICBwcml2YXRlIF9sYWJlbERhdGE6IEFycmF5PG51bWJlcj47XG5cbiAgICBjb25zdHJ1Y3RvcihpbWFnZVdyYXBwZXI6IEltYWdlV3JhcHBlcjxVaW50OEFycmF5PiwgbGFiZWxXcmFwcGVyOiBJbWFnZVdyYXBwZXI8QXJyYXk8bnVtYmVyPj4pIHtcbiAgICAgICAgdGhpcy5faW1hZ2VEYXRhID0gaW1hZ2VXcmFwcGVyLmRhdGE7XG4gICAgICAgIHRoaXMuX2xhYmVsRGF0YSA9IGxhYmVsV3JhcHBlci5kYXRhIGFzIEFycmF5PG51bWJlcj47XG4gICAgICAgIHRoaXMuX3dpZHRoID0gaW1hZ2VXcmFwcGVyLnNpemUueDtcbiAgICAgICAgdGhpcy5faGVpZ2h0ID0gaW1hZ2VXcmFwcGVyLnNpemUueTtcbiAgICAgICAgdGhpcy5fdHJhY2VyID0gbmV3IFRyYWNlcihpbWFnZVdyYXBwZXIsIGxhYmVsV3JhcHBlcik7XG4gICAgfVxuXG4gICAgcmFzdGVyaXplKGRlcHRoTGFiZWw6IG51bWJlcik6IFJhc3RlclJlc3VsdCB7XG4gICAgICAgIGNvbnN0IGNvbG9yTWFwID0gbmV3IEFycmF5PG51bWJlcj4oKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQwMDsgaSsrKSB7XG4gICAgICAgICAgICBjb2xvck1hcFtpXSA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBjb2xvck1hcFswXSA9IHRoaXMuX2ltYWdlRGF0YVswXTtcblxuICAgICAgICBsZXQgY2M6IENvbnRvdXIgPSBudWxsO1xuICAgICAgICBsZXQgc2M6IENvbnRvdXI7XG4gICAgICAgIGxldCBjb25uZWN0ZWRDb3VudCA9IDA7XG5cbiAgICAgICAgZm9yIChsZXQgY3kgPSAxOyBjeSA8IHRoaXMuX2hlaWdodCAtIDE7IGN5KyspIHtcbiAgICAgICAgICAgIGxldCBsYWJlbEluZGV4ID0gMDtcbiAgICAgICAgICAgIGxldCBiYyA9IGNvbG9yTWFwWzBdO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBjeCA9IDE7IGN4IDwgdGhpcy5fd2lkdGggLSAxOyBjeCsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcG9zID0gY3kgKiB0aGlzLl93aWR0aCArIGN4O1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2xhYmVsRGF0YVtwb3NdID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gdGhpcy5faW1hZ2VEYXRhW3Bvc107XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb2xvciAhPT0gYmMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYWJlbEluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGMgPSBjb25uZWN0ZWRDb3VudCArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JNYXBbbGNdID0gY29sb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmMgPSBjb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2ZXJ0ZXggPSB0aGlzLl90cmFjZXIuY29udG91clRyYWNpbmcoY3ksIGN4LCBsYywgY29sb3IsIEVkZ2VMYWJlbC5PdXRzaWRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmVydGV4ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbm5lY3RlZENvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsSW5kZXggPSBsYztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcDogQ29udG91ciA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcjogQ29udG91ckRpcmVjdGlvbi5DVyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4OiBsYWJlbEluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3RWZXJ0ZXg6IHZlcnRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRQZWVyOiBjYyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc2lkZUNvbnRvdXJzOiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MucHJldmlvdXNQZWVyID0gcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYyA9IHA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2ZXJ0ZXggPSB0aGlzLl90cmFjZXIuY29udG91clRyYWNpbmcoY3ksIGN4LCBFZGdlTGFiZWwuSW5zaWRlLCBjb2xvciwgbGFiZWxJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZlcnRleCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwOiBDb250b3VyID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyOiBkZXB0aExhYmVsID09PSAwID8gQ29udG91ckRpcmVjdGlvbi5DQ1cgOiBDb250b3VyRGlyZWN0aW9uLkNXLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3RWZXJ0ZXg6IHZlcnRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4OiBkZXB0aExhYmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zaWRlQ29udG91cnM6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2MgPSBjYztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKChzYyAhPT0gbnVsbCkgJiYgc2MuaW5kZXggIT09IGxhYmVsSW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjID0gc2MubmV4dFBlZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNjICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwLm5leHRQZWVyID0gc2MuaW5zaWRlQ29udG91cnM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2MuaW5zaWRlQ29udG91cnMgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYy5pbnNpZGVDb250b3Vycy5wcmV2aW91c1BlZXIgPSBwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2MuaW5zaWRlQ29udG91cnMgPSBwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbGFiZWxEYXRhW3Bvc10gPSBsYWJlbEluZGV4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9sYWJlbERhdGFbcG9zXSA9PT0gRWRnZUxhYmVsLkluc2lkZSkge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbEluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgYmMgPSB0aGlzLl9pbWFnZURhdGFbcG9zXTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2xhYmVsRGF0YVtwb3NdID09PSBFZGdlTGFiZWwuT3V0c2lkZSkge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbEluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgYmMgPSBjb2xvck1hcFswXTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbEluZGV4ID0gdGhpcy5fbGFiZWxEYXRhW3Bvc107XG4gICAgICAgICAgICAgICAgICAgIGJjID0gY29sb3JNYXBbbGFiZWxJbmRleF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgc2MgPSBjYztcbiAgICAgICAgd2hpbGUgKHNjICE9PSBudWxsKSB7XG4gICAgICAgICAgICBzYy5pbmRleCA9IGRlcHRoTGFiZWw7XG4gICAgICAgICAgICBzYyA9IHNjLm5leHRQZWVyO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNjLFxuICAgICAgICAgICAgY291bnQ6IGNvbm5lY3RlZENvdW50XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZHJhd0NvbnRvdXIoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgZmlyc3RDb250b3VyOiBDb250b3VyKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gJ3JlZCc7XG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gJ3JlZCc7XG4gICAgICAgIGNvbnRleHQubGluZVdpZHRoID0gMTtcblxuICAgICAgICBsZXQgcHEgPSBmaXJzdENvbnRvdXI7XG4gICAgICAgIGxldCBpcSA9IHBxICYmIHBxLmluc2lkZUNvbnRvdXJzO1xuXG4gICAgICAgIHdoaWxlIChwcSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgbGV0IHEgPSBpcSB8fCBwcTtcblxuICAgICAgICAgICAgaWYgKGlxICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaXEgPSBpcS5uZXh0UGVlcjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcHEgPSBwcS5uZXh0UGVlcjtcbiAgICAgICAgICAgICAgICBpcSA9IHBxICYmIHBxLmluc2lkZUNvbnRvdXJzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzd2l0Y2ggKHEuZGlyKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBDb250b3VyRGlyZWN0aW9uLkNXOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSAncmVkJztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgQ29udG91ckRpcmVjdGlvbi5DQ1c6IHtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9ICdibHVlJztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgQ29udG91ckRpcmVjdGlvbi5Vbmtub3duOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSAnZ3JlZW4nO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBwID0gcS5maXJzdFZlcnRleDtcbiAgICAgICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjb250ZXh0Lm1vdmVUbyhwLngsIHAueSk7XG5cbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICBwID0gcC5uZXh0O1xuICAgICAgICAgICAgICAgIGNvbnRleHQubGluZVRvKHAueCwgcC55KTtcbiAgICAgICAgICAgIH0gd2hpbGUgKHAgIT09IHEuZmlyc3RWZXJ0ZXgpO1xuXG4gICAgICAgICAgICBjb250ZXh0LnN0cm9rZSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgZXFlcWVxICovXG5mdW5jdGlvbiBTa2VsZXRvbml6ZXIoc3RkbGliLCBmb3JlaWduLCBidWZmZXIpIHtcbiAgICBcInVzZSBhc21cIjtcblxuICAgIHZhciBpbWFnZXMgPSBuZXcgc3RkbGliLlVpbnQ4QXJyYXkoYnVmZmVyKSxcbiAgICAgICAgc2l6ZSA9IGZvcmVpZ24uc2l6ZSB8IDAsXG4gICAgICAgIGltdWwgPSBzdGRsaWIuTWF0aC5pbXVsO1xuXG4gICAgZnVuY3Rpb24gZXJvZGUoaW5JbWFnZVB0ciwgb3V0SW1hZ2VQdHIpIHtcbiAgICAgICAgaW5JbWFnZVB0ciA9IGluSW1hZ2VQdHIgfCAwO1xuICAgICAgICBvdXRJbWFnZVB0ciA9IG91dEltYWdlUHRyIHwgMDtcblxuICAgICAgICB2YXIgdiA9IDAsXG4gICAgICAgICAgICB1ID0gMCxcbiAgICAgICAgICAgIHN1bSA9IDAsXG4gICAgICAgICAgICB5U3RhcnQxID0gMCxcbiAgICAgICAgICAgIHlTdGFydDIgPSAwLFxuICAgICAgICAgICAgeFN0YXJ0MSA9IDAsXG4gICAgICAgICAgICB4U3RhcnQyID0gMCxcbiAgICAgICAgICAgIG9mZnNldCA9IDA7XG5cbiAgICAgICAgZm9yICh2ID0gMTsgKHYgfCAwKSA8ICgoc2l6ZSAtIDEpIHwgMCk7IHYgPSAodiArIDEpIHwgMCkge1xuICAgICAgICAgICAgb2Zmc2V0ID0gKG9mZnNldCArIHNpemUpIHwgMDtcbiAgICAgICAgICAgIGZvciAodSA9IDE7ICh1IHwgMCkgPCAoKHNpemUgLSAxKSB8IDApOyB1ID0gKHUgKyAxKSB8IDApIHtcbiAgICAgICAgICAgICAgICB5U3RhcnQxID0gKG9mZnNldCAtIHNpemUpIHwgMDtcbiAgICAgICAgICAgICAgICB5U3RhcnQyID0gKG9mZnNldCArIHNpemUpIHwgMDtcbiAgICAgICAgICAgICAgICB4U3RhcnQxID0gKHUgLSAxKSB8IDA7XG4gICAgICAgICAgICAgICAgeFN0YXJ0MiA9ICh1ICsgMSkgfCAwO1xuICAgICAgICAgICAgICAgIHN1bSA9ICgoaW1hZ2VzWyhpbkltYWdlUHRyICsgeVN0YXJ0MSArIHhTdGFydDEpIHwgMF0gfCAwKVxuICAgICAgICAgICAgICAgICAgICArIChpbWFnZXNbKGluSW1hZ2VQdHIgKyB5U3RhcnQxICsgeFN0YXJ0MikgfCAwXSB8IDApXG4gICAgICAgICAgICAgICAgICAgICsgKGltYWdlc1soaW5JbWFnZVB0ciArIG9mZnNldCArIHUpIHwgMF0gfCAwKVxuICAgICAgICAgICAgICAgICAgICArIChpbWFnZXNbKGluSW1hZ2VQdHIgKyB5U3RhcnQyICsgeFN0YXJ0MSkgfCAwXSB8IDApXG4gICAgICAgICAgICAgICAgICAgICsgKGltYWdlc1soaW5JbWFnZVB0ciArIHlTdGFydDIgKyB4U3RhcnQyKSB8IDBdIHwgMCkpIHwgMDtcbiAgICAgICAgICAgICAgICBpZiAoKHN1bSB8IDApID09ICg1IHwgMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VzWyhvdXRJbWFnZVB0ciArIG9mZnNldCArIHUpIHwgMF0gPSAxO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGltYWdlc1sob3V0SW1hZ2VQdHIgKyBvZmZzZXQgKyB1KSB8IDBdID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN1YnRyYWN0KGFJbWFnZVB0ciwgYkltYWdlUHRyLCBvdXRJbWFnZVB0cikge1xuICAgICAgICBhSW1hZ2VQdHIgPSBhSW1hZ2VQdHIgfCAwO1xuICAgICAgICBiSW1hZ2VQdHIgPSBiSW1hZ2VQdHIgfCAwO1xuICAgICAgICBvdXRJbWFnZVB0ciA9IG91dEltYWdlUHRyIHwgMDtcblxuICAgICAgICB2YXIgbGVuZ3RoID0gMDtcblxuICAgICAgICBsZW5ndGggPSBpbXVsKHNpemUsIHNpemUpIHwgMDtcblxuICAgICAgICB3aGlsZSAoKGxlbmd0aCB8IDApID4gMCkge1xuICAgICAgICAgICAgbGVuZ3RoID0gKGxlbmd0aCAtIDEpIHwgMDtcbiAgICAgICAgICAgIGltYWdlc1sob3V0SW1hZ2VQdHIgKyBsZW5ndGgpIHwgMF0gPVxuICAgICAgICAgICAgICAgICgoaW1hZ2VzWyhhSW1hZ2VQdHIgKyBsZW5ndGgpIHwgMF0gfCAwKSAtIChpbWFnZXNbKGJJbWFnZVB0ciArIGxlbmd0aCkgfCAwXSB8IDApKSB8IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBiaXR3aXNlT3IoYUltYWdlUHRyLCBiSW1hZ2VQdHIsIG91dEltYWdlUHRyKSB7XG4gICAgICAgIGFJbWFnZVB0ciA9IGFJbWFnZVB0ciB8IDA7XG4gICAgICAgIGJJbWFnZVB0ciA9IGJJbWFnZVB0ciB8IDA7XG4gICAgICAgIG91dEltYWdlUHRyID0gb3V0SW1hZ2VQdHIgfCAwO1xuXG4gICAgICAgIHZhciBsZW5ndGggPSAwO1xuXG4gICAgICAgIGxlbmd0aCA9IGltdWwoc2l6ZSwgc2l6ZSkgfCAwO1xuXG4gICAgICAgIHdoaWxlICgobGVuZ3RoIHwgMCkgPiAwKSB7XG4gICAgICAgICAgICBsZW5ndGggPSAobGVuZ3RoIC0gMSkgfCAwO1xuICAgICAgICAgICAgaW1hZ2VzWyhvdXRJbWFnZVB0ciArIGxlbmd0aCkgfCAwXSA9XG4gICAgICAgICAgICAgICAgKChpbWFnZXNbKGFJbWFnZVB0ciArIGxlbmd0aCkgfCAwXSB8IDApIHwgKGltYWdlc1soYkltYWdlUHRyICsgbGVuZ3RoKSB8IDBdIHwgMCkpIHwgMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvdW50Tm9uWmVybyhpbWFnZVB0cikge1xuICAgICAgICBpbWFnZVB0ciA9IGltYWdlUHRyIHwgMDtcblxuICAgICAgICB2YXIgc3VtID0gMCxcbiAgICAgICAgICAgIGxlbmd0aCA9IDA7XG5cbiAgICAgICAgbGVuZ3RoID0gaW11bChzaXplLCBzaXplKSB8IDA7XG5cbiAgICAgICAgd2hpbGUgKChsZW5ndGggfCAwKSA+IDApIHtcbiAgICAgICAgICAgIGxlbmd0aCA9IChsZW5ndGggLSAxKSB8IDA7XG4gICAgICAgICAgICBzdW0gPSAoKHN1bSB8IDApICsgKGltYWdlc1soaW1hZ2VQdHIgKyBsZW5ndGgpIHwgMF0gfCAwKSkgfCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChzdW0gfCAwKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbml0KGltYWdlUHRyLCB2YWx1ZSkge1xuICAgICAgICBpbWFnZVB0ciA9IGltYWdlUHRyIHwgMDtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZSB8IDA7XG5cbiAgICAgICAgdmFyIGxlbmd0aCA9IDA7XG5cbiAgICAgICAgbGVuZ3RoID0gaW11bChzaXplLCBzaXplKSB8IDA7XG5cbiAgICAgICAgd2hpbGUgKChsZW5ndGggfCAwKSA+IDApIHtcbiAgICAgICAgICAgIGxlbmd0aCA9IChsZW5ndGggLSAxKSB8IDA7XG4gICAgICAgICAgICBpbWFnZXNbKGltYWdlUHRyICsgbGVuZ3RoKSB8IDBdID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaWxhdGUoaW5JbWFnZVB0ciwgb3V0SW1hZ2VQdHIpIHtcbiAgICAgICAgaW5JbWFnZVB0ciA9IGluSW1hZ2VQdHIgfCAwO1xuICAgICAgICBvdXRJbWFnZVB0ciA9IG91dEltYWdlUHRyIHwgMDtcblxuICAgICAgICB2YXIgdiA9IDAsXG4gICAgICAgICAgICB1ID0gMCxcbiAgICAgICAgICAgIHN1bSA9IDAsXG4gICAgICAgICAgICB5U3RhcnQxID0gMCxcbiAgICAgICAgICAgIHlTdGFydDIgPSAwLFxuICAgICAgICAgICAgeFN0YXJ0MSA9IDAsXG4gICAgICAgICAgICB4U3RhcnQyID0gMCxcbiAgICAgICAgICAgIG9mZnNldCA9IDA7XG5cbiAgICAgICAgZm9yICh2ID0gMTsgKHYgfCAwKSA8ICgoc2l6ZSAtIDEpIHwgMCk7IHYgPSAodiArIDEpIHwgMCkge1xuICAgICAgICAgICAgb2Zmc2V0ID0gKG9mZnNldCArIHNpemUpIHwgMDtcbiAgICAgICAgICAgIGZvciAodSA9IDE7ICh1IHwgMCkgPCAoKHNpemUgLSAxKSB8IDApOyB1ID0gKHUgKyAxKSB8IDApIHtcbiAgICAgICAgICAgICAgICB5U3RhcnQxID0gKG9mZnNldCAtIHNpemUpIHwgMDtcbiAgICAgICAgICAgICAgICB5U3RhcnQyID0gKG9mZnNldCArIHNpemUpIHwgMDtcbiAgICAgICAgICAgICAgICB4U3RhcnQxID0gKHUgLSAxKSB8IDA7XG4gICAgICAgICAgICAgICAgeFN0YXJ0MiA9ICh1ICsgMSkgfCAwO1xuICAgICAgICAgICAgICAgIHN1bSA9ICgoaW1hZ2VzWyhpbkltYWdlUHRyICsgeVN0YXJ0MSArIHhTdGFydDEpIHwgMF0gfCAwKVxuICAgICAgICAgICAgICAgICAgICArIChpbWFnZXNbKGluSW1hZ2VQdHIgKyB5U3RhcnQxICsgeFN0YXJ0MikgfCAwXSB8IDApXG4gICAgICAgICAgICAgICAgICAgICsgKGltYWdlc1soaW5JbWFnZVB0ciArIG9mZnNldCArIHUpIHwgMF0gfCAwKVxuICAgICAgICAgICAgICAgICAgICArIChpbWFnZXNbKGluSW1hZ2VQdHIgKyB5U3RhcnQyICsgeFN0YXJ0MSkgfCAwXSB8IDApXG4gICAgICAgICAgICAgICAgICAgICsgKGltYWdlc1soaW5JbWFnZVB0ciArIHlTdGFydDIgKyB4U3RhcnQyKSB8IDBdIHwgMCkpIHwgMDtcbiAgICAgICAgICAgICAgICBpZiAoKHN1bSB8IDApID4gKDAgfCAwKSkge1xuICAgICAgICAgICAgICAgICAgICBpbWFnZXNbKG91dEltYWdlUHRyICsgb2Zmc2V0ICsgdSkgfCAwXSA9IDE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VzWyhvdXRJbWFnZVB0ciArIG9mZnNldCArIHUpIHwgMF0gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWVtY3B5KHNyY0ltYWdlUHRyLCBkc3RJbWFnZVB0cikge1xuICAgICAgICBzcmNJbWFnZVB0ciA9IHNyY0ltYWdlUHRyIHwgMDtcbiAgICAgICAgZHN0SW1hZ2VQdHIgPSBkc3RJbWFnZVB0ciB8IDA7XG5cbiAgICAgICAgdmFyIGxlbmd0aCA9IDA7XG5cbiAgICAgICAgbGVuZ3RoID0gaW11bChzaXplLCBzaXplKSB8IDA7XG5cbiAgICAgICAgd2hpbGUgKChsZW5ndGggfCAwKSA+IDApIHtcbiAgICAgICAgICAgIGxlbmd0aCA9IChsZW5ndGggLSAxKSB8IDA7XG4gICAgICAgICAgICBpbWFnZXNbKGRzdEltYWdlUHRyICsgbGVuZ3RoKSB8IDBdID0gKGltYWdlc1soc3JjSW1hZ2VQdHIgKyBsZW5ndGgpIHwgMF0gfCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHplcm9Cb3JkZXIoaW1hZ2VQdHIpIHtcbiAgICAgICAgaW1hZ2VQdHIgPSBpbWFnZVB0ciB8IDA7XG5cbiAgICAgICAgdmFyIHggPSAwLFxuICAgICAgICAgICAgeSA9IDA7XG5cbiAgICAgICAgZm9yICh4ID0gMDsgKHggfCAwKSA8ICgoc2l6ZSAtIDEpIHwgMCk7IHggPSAoeCArIDEpIHwgMCkge1xuICAgICAgICAgICAgaW1hZ2VzWyhpbWFnZVB0ciArIHgpIHwgMF0gPSAwO1xuICAgICAgICAgICAgaW1hZ2VzWyhpbWFnZVB0ciArIHkpIHwgMF0gPSAwO1xuICAgICAgICAgICAgeSA9ICgoeSArIHNpemUpIC0gMSkgfCAwO1xuICAgICAgICAgICAgaW1hZ2VzWyhpbWFnZVB0ciArIHkpIHwgMF0gPSAwO1xuICAgICAgICAgICAgeSA9ICh5ICsgMSkgfCAwO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoeCA9IDA7ICh4IHwgMCkgPCAoc2l6ZSB8IDApOyB4ID0gKHggKyAxKSB8IDApIHtcbiAgICAgICAgICAgIGltYWdlc1soaW1hZ2VQdHIgKyB5KSB8IDBdID0gMDtcbiAgICAgICAgICAgIHkgPSAoeSArIDEpIHwgMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNrZWxldG9uaXplKCkge1xuICAgICAgICB2YXIgc3ViSW1hZ2VQdHIgPSAwLFxuICAgICAgICAgICAgZXJvZGVkSW1hZ2VQdHIgPSAwLFxuICAgICAgICAgICAgdGVtcEltYWdlUHRyID0gMCxcbiAgICAgICAgICAgIHNrZWxJbWFnZVB0ciA9IDAsXG4gICAgICAgICAgICBzdW0gPSAwLFxuICAgICAgICAgICAgZG9uZSA9IDA7XG5cbiAgICAgICAgZXJvZGVkSW1hZ2VQdHIgPSBpbXVsKHNpemUsIHNpemUpIHwgMDtcbiAgICAgICAgdGVtcEltYWdlUHRyID0gKGVyb2RlZEltYWdlUHRyICsgZXJvZGVkSW1hZ2VQdHIpIHwgMDtcbiAgICAgICAgc2tlbEltYWdlUHRyID0gKHRlbXBJbWFnZVB0ciArIGVyb2RlZEltYWdlUHRyKSB8IDA7XG5cbiAgICAgICAgLy8gaW5pdCBza2VsLWltYWdlXG4gICAgICAgIGluaXQoc2tlbEltYWdlUHRyLCAwKTtcbiAgICAgICAgemVyb0JvcmRlcihzdWJJbWFnZVB0cik7XG5cbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgZXJvZGUoc3ViSW1hZ2VQdHIsIGVyb2RlZEltYWdlUHRyKTtcbiAgICAgICAgICAgIGRpbGF0ZShlcm9kZWRJbWFnZVB0ciwgdGVtcEltYWdlUHRyKTtcbiAgICAgICAgICAgIHN1YnRyYWN0KHN1YkltYWdlUHRyLCB0ZW1wSW1hZ2VQdHIsIHRlbXBJbWFnZVB0cik7XG4gICAgICAgICAgICBiaXR3aXNlT3Ioc2tlbEltYWdlUHRyLCB0ZW1wSW1hZ2VQdHIsIHNrZWxJbWFnZVB0cik7XG4gICAgICAgICAgICBtZW1jcHkoZXJvZGVkSW1hZ2VQdHIsIHN1YkltYWdlUHRyKTtcbiAgICAgICAgICAgIHN1bSA9IGNvdW50Tm9uWmVybyhzdWJJbWFnZVB0cikgfCAwO1xuICAgICAgICAgICAgZG9uZSA9ICgoc3VtIHwgMCkgPT0gMCB8IDApO1xuICAgICAgICB9IHdoaWxlICghZG9uZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2tlbGV0b25pemU6IHNrZWxldG9uaXplXG4gICAgfTtcbn1cbmV4cG9ydCBkZWZhdWx0IFNrZWxldG9uaXplcjtcbi8qIGVzbGludC1lbmFibGUgZXFlcWVxICovXG4iLCJpbXBvcnQgeyBJbWFnZVdyYXBwZXIgfSBmcm9tIFwiLi4vY29tbW9uL2ltYWdlLXdyYXBwZXJcIjtcblxuLyoqXG4gKiBAYm9ycm93cyBodHRwOi8vd3d3LmNvZGVwcm9qZWN0LmNvbS9UaXBzLzQwNzE3Mi9Db25uZWN0ZWQtQ29tcG9uZW50LUxhYmVsaW5nLWFuZC1WZWN0b3JpemF0aW9uXG4gKi9cblxudHlwZSBEaXJlY3Rpb24gPSBudW1iZXI7XG5cbmV4cG9ydCBjb25zdCBTZWFyY2hEaXJlY3Rpb25zOiBBcnJheTxBcnJheTxEaXJlY3Rpb24+PiA9IFtbMCwgMV0sIFsxLCAxXSwgWzEsIDBdLCBbMSwgLTFdLCBbMCwgLTFdLCBbLTEsIC0xXSwgWy0xLCAwXSwgWy0xLCAxXV07XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29udG91clZlcnRleCB7XG4gICAgeDogbnVtYmVyLFxuICAgIHk6IG51bWJlcixcbiAgICBkaXI6IERpcmVjdGlvbixcbiAgICBuZXh0OiBDb250b3VyVmVydGV4LFxuICAgIHByZXY6IENvbnRvdXJWZXJ0ZXhcbn1cblxuaW50ZXJmYWNlIEN1cnJlbnQge1xuICAgIGN4OiBudW1iZXIsXG4gICAgY3k6IG51bWJlcixcbiAgICBkaXI6IERpcmVjdGlvblxufVxuXG5leHBvcnQgY2xhc3MgVHJhY2VyIHtcbiAgICBwcml2YXRlIF9pbWFnZURhdGE6IFVpbnQ4QXJyYXk7XG4gICAgcHJpdmF0ZSBfbGFiZWxEYXRhOiBBcnJheTxudW1iZXI+O1xuICAgIHByaXZhdGUgX3dpZHRoOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihpbWFnZVdyYXBwZXI6IEltYWdlV3JhcHBlciwgbGFiZWxXcmFwcGVyOiBJbWFnZVdyYXBwZXI8QXJyYXk8bnVtYmVyPj4pIHtcbiAgICAgICAgdGhpcy5faW1hZ2VEYXRhID0gaW1hZ2VXcmFwcGVyLmRhdGE7XG4gICAgICAgIHRoaXMuX2xhYmVsRGF0YSA9IGxhYmVsV3JhcHBlci5kYXRhIGFzIEFycmF5PG51bWJlcj47XG4gICAgICAgIHRoaXMuX3dpZHRoID0gaW1hZ2VXcmFwcGVyLnNpemUueDtcbiAgICB9XG5cbiAgICB0cmFjZShjdXJyZW50OiBDdXJyZW50LCBjb2xvcjogbnVtYmVyLCBsYWJlbDogbnVtYmVyLCBlZGdlTGFiZWw6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgeSA9IGN1cnJlbnQuY3kgKyBTZWFyY2hEaXJlY3Rpb25zW2N1cnJlbnQuZGlyXVswXSB8IDA7XG4gICAgICAgICAgICBjb25zdCB4ID0gY3VycmVudC5jeCArIFNlYXJjaERpcmVjdGlvbnNbY3VycmVudC5kaXJdWzFdIHwgMDtcbiAgICAgICAgICAgIGNvbnN0IHBvcyA9IHkgKiB0aGlzLl93aWR0aCArIHggfCAwO1xuXG4gICAgICAgICAgICBpZiAoKHRoaXMuX2ltYWdlRGF0YVtwb3NdID09PSBjb2xvcikgJiYgKCh0aGlzLl9sYWJlbERhdGFbcG9zXSA9PT0gMCkgfHwgKHRoaXMuX2xhYmVsRGF0YVtwb3NdID09PSBsYWJlbCkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbGFiZWxEYXRhW3Bvc10gPSBsYWJlbDtcbiAgICAgICAgICAgICAgICBjdXJyZW50LmN4ID0geDtcbiAgICAgICAgICAgICAgICBjdXJyZW50LmN5ID0geTtcblxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fbGFiZWxEYXRhW3Bvc10gPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbGFiZWxEYXRhW3Bvc10gPSBlZGdlTGFiZWw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGN1cnJlbnQuZGlyID0gKGN1cnJlbnQuZGlyICsgMSkgJSA4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnRvdXJUcmFjaW5nKHN5OiBudW1iZXIsIHN4OiBudW1iZXIsIGxhYmVsOiBudW1iZXIsIGNvbG9yOiBudW1iZXIsIGVkZ2VMYWJlbDogbnVtYmVyKTogQ29udG91clZlcnRleCB7XG4gICAgICAgIGxldCBGdjogQ29udG91clZlcnRleCA9IG51bGw7XG4gICAgICAgIGNvbnN0IGN1cnJlbnQ6IEN1cnJlbnQgPSB7XG4gICAgICAgICAgICBjeDogc3gsXG4gICAgICAgICAgICBjeTogc3ksXG4gICAgICAgICAgICBkaXI6IDBcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAodGhpcy50cmFjZShjdXJyZW50LCBjb2xvciwgbGFiZWwsIGVkZ2VMYWJlbCkpIHtcbiAgICAgICAgICAgIEZ2ID0ge1xuICAgICAgICAgICAgICAgIHg6IHN4LFxuICAgICAgICAgICAgICAgIHk6IHN5LFxuICAgICAgICAgICAgICAgIGRpcjogY3VycmVudC5kaXIsXG4gICAgICAgICAgICAgICAgbmV4dDogbnVsbCxcbiAgICAgICAgICAgICAgICBwcmV2OiBudWxsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgbGV0IEN2ID0gRnY7XG4gICAgICAgICAgICBsZXQgbGRpciA9IGN1cnJlbnQuZGlyO1xuICAgICAgICAgICAgbGV0IFAgPSB7XG4gICAgICAgICAgICAgICAgeDogY3VycmVudC5jeCxcbiAgICAgICAgICAgICAgICB5OiBjdXJyZW50LmN5LFxuICAgICAgICAgICAgICAgIGRpcjogMCxcbiAgICAgICAgICAgICAgICBuZXh0OiBudWxsLFxuICAgICAgICAgICAgICAgIHByZXY6IEN2XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgQ3YubmV4dCA9IFA7XG4gICAgICAgICAgICBDdiA9IFA7XG5cbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50LmRpciA9IChjdXJyZW50LmRpciArIDYpICUgODtcblxuICAgICAgICAgICAgICAgIHRoaXMudHJhY2UoY3VycmVudCwgY29sb3IsIGxhYmVsLCBlZGdlTGFiZWwpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGxkaXIgIT09IGN1cnJlbnQuZGlyKSB7XG4gICAgICAgICAgICAgICAgICAgIEN2LmRpciA9IGN1cnJlbnQuZGlyO1xuICAgICAgICAgICAgICAgICAgICBQID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgeDogY3VycmVudC5jeCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IGN1cnJlbnQuY3ksXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXI6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0OiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJldjogQ3ZcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgQ3YubmV4dCA9IFA7XG4gICAgICAgICAgICAgICAgICAgIEN2ID0gUDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBDdi5kaXIgPSBsZGlyO1xuICAgICAgICAgICAgICAgICAgICBDdi54ID0gY3VycmVudC5jeDtcbiAgICAgICAgICAgICAgICAgICAgQ3YueSA9IGN1cnJlbnQuY3k7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbGRpciA9IGN1cnJlbnQuZGlyO1xuICAgICAgICAgICAgfSB3aGlsZSAoY3VycmVudC5jeCAhPT0gc3ggfHwgY3VycmVudC5jeSAhPT0gc3kpO1xuXG4gICAgICAgICAgICBGdi5wcmV2ID0gQ3YucHJldjtcbiAgICAgICAgICAgIEN2LnByZXYubmV4dCA9IEZ2O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBGdjtcbiAgICB9XG59XG4iLCJpbXBvcnQgX3BvbHlmaWxscyBmcm9tICcuL2NvbW1vbi9wb2x5ZmlsbHMnO1xuaW1wb3J0IHsgUmVzdWx0Q29sbGVjdG9yIH0gZnJvbSAnLi9hbmFseXRpY3MvcmVzdWx0LWNvbGxlY3Rvcic7XG5pbXBvcnQgeyBCb3ggfSBmcm9tICcuL2NvbW1vbi9ib3gnO1xuaW1wb3J0IHsgRXZlbnRDYWxsYmFjaywgRXZlbnRzLCBFdmVudFN1YnNjcmlwdGlvbiB9IGZyb20gJy4vY29tbW9uL2V2ZW50cyc7XG5pbXBvcnQgeyBJbWFnZURlYnVnIH0gZnJvbSAnLi9jb21tb24vaW1hZ2UtZGVidWcnO1xuaW1wb3J0IHsgSW1hZ2VXcmFwcGVyIH0gZnJvbSAnLi9jb21tb24vaW1hZ2Utd3JhcHBlcic7XG5pbXBvcnQgeyBtZXJnZSB9IGZyb20gJy4vY29tbW9uL21lcmdlJztcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi9jb21tb24vcG9pbnQnO1xuaW1wb3J0IHsgY29uZmlnIGFzIGRlZmF1bHRDb25maWcsIFF1YWdnYUNvbmZpZyB9IGZyb20gJy4vY29uZmlnL2NvbmZpZyc7XG5pbXBvcnQgeyBCYXJjb2RlRGVjb2RlciwgUXVhZ2dhQmFyY29kZSB9IGZyb20gJy4vZGVjb2Rlci9iYXJjb2RlLWRlY29kZXInO1xuaW1wb3J0IHsgQ2FtZXJhQWNjZXNzIH0gZnJvbSAnLi9pbnB1dC9jYW1lcmEtYWNjZXNzJztcbmltcG9ydCB7IEZyYW1lR3JhYmJlciB9IGZyb20gJy4vaW5wdXQvZnJhbWUtZ3JhYmJlcic7XG5pbXBvcnQgeyBJbWFnZVN0cmVhbSB9IGZyb20gJy4vaW5wdXQvaW1hZ2Utc3RyZWFtJztcbmltcG9ydCB7IElucHV0U3RyZWFtIH0gZnJvbSAnLi9pbnB1dC9pbnB1dC1zdHJlYW0nO1xuaW1wb3J0IHsgTGl2ZVN0cmVhbSB9IGZyb20gJy4vaW5wdXQvbGl2ZS1zdHJlYW0nO1xuaW1wb3J0IHsgVmlkZW9TdHJlYW0gfSBmcm9tICcuL2lucHV0L3ZpZGVvLXN0cmVhbSc7XG5pbXBvcnQgeyBjaGVja0ltYWdlQ29uc3RyYWludHMgfSBmcm9tICcuL2lucHV0L2lucHV0LXN0cmVhbS11dGlscyc7XG5pbXBvcnQgeyBCYXJjb2RlTG9jYXRvciB9IGZyb20gJy4vbG9jYXRvci9iYXJjb2RlLWxvY2F0b3InO1xuaW1wb3J0IHsgQmFyY29kZVJlYWRlckRlY2xhcmF0aW9uIH0gZnJvbSAnLi9yZWFkZXIvYmFyY29kZS1yZWFkZXInO1xuXG5sZXQgX19mYWN0b3J5U291cmNlX186IHN0cmluZztcblxuaW50ZXJmYWNlIFdvcmtlclRocmVhZCB7XG4gICAgd29ya2VyOiBXb3JrZXI7XG4gICAgaW1hZ2VEYXRhOiBVaW50OEFycmF5O1xuICAgIGJ1c3k6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUXVhZ2dhQ2FudmFzQ29udGFpbmVyIHtcbiAgICBjdHg6IHtcbiAgICAgICAgaW1hZ2U6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCxcbiAgICAgICAgb3ZlcmxheTogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEXG4gICAgfSxcbiAgICBkb206IHtcbiAgICAgICAgaW1hZ2U6IEhUTUxDYW52YXNFbGVtZW50LFxuICAgICAgICBvdmVybGF5OiBIVE1MQ2FudmFzRWxlbWVudFxuICAgIH1cbn1cblxubGV0IF9pbnB1dFN0cmVhbTogSW5wdXRTdHJlYW07XG5sZXQgX2ZyYW1lR3JhYmJlcjogRnJhbWVHcmFiYmVyO1xubGV0IF9zdG9wcGVkOiBib29sZWFuO1xuY29uc3QgX2NhbnZhc0NvbnRhaW5lcjogUXVhZ2dhQ2FudmFzQ29udGFpbmVyID0ge1xuICAgIGN0eDoge1xuICAgICAgICBpbWFnZTogbnVsbCxcbiAgICAgICAgb3ZlcmxheTogbnVsbFxuICAgIH0sXG4gICAgZG9tOiB7XG4gICAgICAgIGltYWdlOiBudWxsLFxuICAgICAgICBvdmVybGF5OiBudWxsXG4gICAgfVxufTtcbmxldCBfaW5wdXRJbWFnZVdyYXBwZXI6IEltYWdlV3JhcHBlcjtcbmxldCBfbG9jYXRvcjogQmFyY29kZUxvY2F0b3I7XG5sZXQgX2JveFNpemU6IEJveDtcbmxldCBfZGVjb2RlcjogQmFyY29kZURlY29kZXI7XG5sZXQgX3dvcmtlclBvb2wgPSBuZXcgQXJyYXk8V29ya2VyVGhyZWFkPigpO1xubGV0IF9vblVJVGhyZWFkOiBib29sZWFuO1xubGV0IF9yZXN1bHRDb2xsZWN0b3I6IFJlc3VsdENvbGxlY3RvcjtcbmxldCBfY29uZmlnOiBRdWFnZ2FDb25maWc7XG5cbmV4cG9ydCBjbGFzcyBRdWFnZ2Ege1xuICAgIHN0YXRpYyBpbml0KGNvbmZpZzogUXVhZ2dhQ29uZmlnLCBjYjogKCkgPT4gdm9pZCwgaW1hZ2VXcmFwcGVyPzogSW1hZ2VXcmFwcGVyKSB7XG4gICAgICAgIF9vblVJVGhyZWFkID0gdHJ1ZTtcbiAgICAgICAgX2NvbmZpZyA9IG1lcmdlKGRlZmF1bHRDb25maWcsIGNvbmZpZyk7XG4gICAgICAgIGlmIChpbWFnZVdyYXBwZXIpIHtcbiAgICAgICAgICAgIF9vblVJVGhyZWFkID0gZmFsc2U7XG4gICAgICAgICAgICBfaW5pdGlhbGl6ZURhdGEoaW1hZ2VXcmFwcGVyKTtcbiAgICAgICAgICAgIGNiKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfaW5pdElucHV0U3RyZWFtKGNiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBDYW1lcmFBY2Nlc3M6IENhbWVyYUFjY2VzcztcblxuICAgIHN0YXRpYyBJbWFnZURlYnVnOiBJbWFnZURlYnVnO1xuXG4gICAgc3RhdGljIEltYWdlV3JhcHBlcjogSW1hZ2VXcmFwcGVyO1xuXG4gICAgc3RhdGljIFJlc3VsdENvbGxlY3RvcjogUmVzdWx0Q29sbGVjdG9yO1xuXG4gICAgc3RhdGljIGdldCBjYW52YXMoKTogUXVhZ2dhQ2FudmFzQ29udGFpbmVyIHtcbiAgICAgICAgcmV0dXJuIF9jYW52YXNDb250YWluZXI7XG4gICAgfVxuXG4gICAgc3RhdGljIHN0YXJ0KCk6IHZvaWQge1xuICAgICAgICBpZiAoX29uVUlUaHJlYWQgJiYgX2NvbmZpZy5pbnB1dFN0cmVhbS50eXBlID09PSAnTGl2ZVN0cmVhbScpIHtcbiAgICAgICAgICAgIF9zdGFydENvbnRpbnVvdXNVcGRhdGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF91cGRhdGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBzdG9wKCk6IHZvaWQge1xuICAgICAgICBfc3RvcHBlZCA9IHRydWU7XG4gICAgICAgIF9hZGp1c3RXb3JrZXJQb29sKDApO1xuICAgICAgICBpZiAoX2NvbmZpZy5pbnB1dFN0cmVhbS50eXBlID09PSAnTGl2ZVN0cmVhbScpIHtcbiAgICAgICAgICAgIENhbWVyYUFjY2Vzcy5yZWxlYXNlKCk7XG4gICAgICAgICAgICBfaW5wdXRTdHJlYW0uY2xlYXJFdmVudEhhbmRsZXJzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgZGVjb2RlU2luZ2xlKGNvbmZpZzogUXVhZ2dhQ29uZmlnLCByZXN1bHRDYWxsYmFjazogKF86IFF1YWdnYUJhcmNvZGUpID0+IHZvaWQpOiB2b2lkIHtcbiAgICAgICAgY29uZmlnID0gbWVyZ2Uoe1xuICAgICAgICAgICAgaW5wdXRTdHJlYW06IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnSW1hZ2VTdHJlYW0nLFxuICAgICAgICAgICAgICAgIHNlcXVlbmNlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzaXplOiA4MDAsXG4gICAgICAgICAgICAgICAgc3JjOiBjb25maWcuc3JjXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbnVtT2ZXb3JrZXJzOiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBjb25maWcuZGVidWcpID8gMCA6IDEsXG4gICAgICAgICAgICBsb2NhdG9yOiB7XG4gICAgICAgICAgICAgICAgaGFsZlNhbXBsZTogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgY29uZmlnKTtcblxuICAgICAgICBRdWFnZ2EuaW5pdChjb25maWcsICgpID0+IHtcbiAgICAgICAgICAgIEV2ZW50cy5vbmNlKCdwcm9jZXNzZWQnLCAocmVzdWx0OiBRdWFnZ2FCYXJjb2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgUXVhZ2dhLnN0b3AoKTtcbiAgICAgICAgICAgICAgICByZXN1bHRDYWxsYmFjay5jYWxsKG51bGwsIHJlc3VsdCk7XG4gICAgICAgICAgICB9LCB0cnVlKTtcbiAgICAgICAgICAgIFF1YWdnYS5zdGFydCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcGF1c2UoKTogdm9pZCB7XG4gICAgICAgIF9zdG9wcGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBzdGF0aWMgb25EZXRlY3RlZChjYWxsYmFjazogRXZlbnRTdWJzY3JpcHRpb24gfCBFdmVudENhbGxiYWNrKTogdm9pZCB7XG4gICAgICAgIEV2ZW50cy5zdWJzY3JpYmUoJ2RldGVjdGVkJywgY2FsbGJhY2spO1xuICAgIH1cblxuICAgIHN0YXRpYyBvZmZEZXRlY3RlZChjYWxsYmFjazogRXZlbnRDYWxsYmFjayk6IHZvaWQge1xuICAgICAgICBFdmVudHMudW5zdWJzY3JpYmUoJ2RldGVjdGVkJywgY2FsbGJhY2spO1xuICAgIH1cblxuICAgIHN0YXRpYyBvblByb2Nlc3NlZChjYWxsYmFjazogRXZlbnRTdWJzY3JpcHRpb24gfCBFdmVudENhbGxiYWNrKTogdm9pZCB7XG4gICAgICAgIEV2ZW50cy5zdWJzY3JpYmUoJ3Byb2Nlc3NlZCcsIGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgb2ZmUHJvY2Vzc2VkKGNhbGxiYWNrOiBFdmVudENhbGxiYWNrKTogdm9pZCB7XG4gICAgICAgIEV2ZW50cy51bnN1YnNjcmliZSgncHJvY2Vzc2VkJywgY2FsbGJhY2spO1xuICAgIH1cblxuICAgIHN0YXRpYyBzZXRSZWFkZXJzKHJlYWRlcnM6IEFycmF5PEJhcmNvZGVSZWFkZXJEZWNsYXJhdGlvbj4pOiB2b2lkIHtcbiAgICAgICAgaWYgKF9kZWNvZGVyKSB7XG4gICAgICAgICAgICBfZGVjb2Rlci5zZXRSZWFkZXJzKHJlYWRlcnMpO1xuICAgICAgICB9IGVsc2UgaWYgKF9vblVJVGhyZWFkICYmIF93b3JrZXJQb29sLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIF93b3JrZXJQb29sLmZvckVhY2goKHsgd29ya2VyIH0pID0+IHdvcmtlci5wb3N0TWVzc2FnZSh7IGNtZDogJ3NldFJlYWRlcnMnLCByZWFkZXJzIH0pKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyByZWdpc3RlclJlc3VsdENvbGxlY3RvcihyZXN1bHRDb2xsZWN0b3I6IFJlc3VsdENvbGxlY3Rvcik6IHZvaWQge1xuICAgICAgICBpZiAocmVzdWx0Q29sbGVjdG9yICYmIHR5cGVvZiByZXN1bHRDb2xsZWN0b3IuYWRkUmVzdWx0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBfcmVzdWx0Q29sbGVjdG9yID0gcmVzdWx0Q29sbGVjdG9yO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBfaW5pdGlhbGl6ZURhdGEoaW1hZ2VXcmFwcGVyPzogSW1hZ2VXcmFwcGVyKTogdm9pZCB7XG4gICAgX2luaXRCdWZmZXJzKGltYWdlV3JhcHBlcik7XG4gICAgX2RlY29kZXIgPSBuZXcgQmFyY29kZURlY29kZXIoX2NvbmZpZy5kZWNvZGVyLCBfaW5wdXRJbWFnZVdyYXBwZXIpO1xufVxuXG5mdW5jdGlvbiBfaW5pdElucHV0U3RyZWFtKGNhbGxiYWNrOiAoZXJyPzogYW55KSA9PiB2b2lkKTogdm9pZCB7XG4gICAgbGV0IHZpZGVvOiBIVE1MVmlkZW9FbGVtZW50O1xuICAgIGlmIChfY29uZmlnLmlucHV0U3RyZWFtLnR5cGUgPT09ICdWaWRlb1N0cmVhbScpIHtcbiAgICAgICAgdmlkZW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2aWRlbycpO1xuICAgICAgICBfaW5wdXRTdHJlYW0gPSBuZXcgVmlkZW9TdHJlYW0odmlkZW8pO1xuICAgIH0gZWxzZSBpZiAoX2NvbmZpZy5pbnB1dFN0cmVhbS50eXBlID09PSAnSW1hZ2VTdHJlYW0nKSB7XG4gICAgICAgIF9pbnB1dFN0cmVhbSA9IG5ldyBJbWFnZVN0cmVhbSgpO1xuICAgIH0gZWxzZSBpZiAoX2NvbmZpZy5pbnB1dFN0cmVhbS50eXBlID09PSAnTGl2ZVN0cmVhbScpIHtcbiAgICAgICAgY29uc3Qgdmlld3BvcnQgPSBfZ2V0Vmlld1BvcnQoKTtcbiAgICAgICAgaWYgKHZpZXdwb3J0KSB7XG4gICAgICAgICAgICB2aWRlbyA9IHZpZXdwb3J0LnF1ZXJ5U2VsZWN0b3IoJ3ZpZGVvJyk7XG4gICAgICAgICAgICBpZiAoIXZpZGVvKSB7XG4gICAgICAgICAgICAgICAgdmlkZW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2aWRlbycpO1xuICAgICAgICAgICAgICAgIHZpZXdwb3J0LmFwcGVuZENoaWxkKHZpZGVvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBfaW5wdXRTdHJlYW0gPSBuZXcgTGl2ZVN0cmVhbSh2aWRlbyk7XG4gICAgICAgIENhbWVyYUFjY2Vzcy5yZXF1ZXN0KHZpZGVvLCBfY29uZmlnLmlucHV0U3RyZWFtLmNvbnN0cmFpbnRzKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gX2lucHV0U3RyZWFtLnRyaWdnZXIoJ2NhbnJlY29yZCcpLCBlcnIgPT4gY2FsbGJhY2soZXJyKSk7XG4gICAgfVxuXG4gICAgX2lucHV0U3RyZWFtLnNldEF0dHJpYnV0ZSgncHJlbG9hZCcsICdhdXRvJyk7XG4gICAgX2lucHV0U3RyZWFtLmNvbmZpZyA9IF9jb25maWcuaW5wdXRTdHJlYW07XG4gICAgX2lucHV0U3RyZWFtLmFkZEV2ZW50TGlzdGVuZXIoJ2NhbnJlY29yZCcsIF9jYW5SZWNvcmQuYmluZCh0aGlzLCBjYWxsYmFjaykpO1xufVxuXG5mdW5jdGlvbiBfZ2V0Vmlld1BvcnQoKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IHRhcmdldCA9IF9jb25maWcuaW5wdXRTdHJlYW0udGFyZ2V0O1xuICAgIC8vIENoZWNrIGlmIHRhcmdldCBpcyBhbHJlYWR5IGEgRE9NIGVsZW1lbnRcbiAgICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBVc2UgJyNpbnRlcmFjdGl2ZS52aWV3cG9ydCcgYXMgYSBmYWxsYmFjayBzZWxlY3RvciAoYmFja3dhcmRzIGNvbXBhdGliaWxpdHkpXG4gICAgICAgIGNvbnN0IHNlbGVjdG9yID0gdHlwZW9mIHRhcmdldCA9PT0gJ3N0cmluZycgPyB0YXJnZXQgOiAnI2ludGVyYWN0aXZlLnZpZXdwb3J0JztcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gX2NhblJlY29yZChjYjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIGNoZWNrSW1hZ2VDb25zdHJhaW50cyhfaW5wdXRTdHJlYW0sIF9jb25maWcubG9jYXRvcik7XG4gICAgX2luaXRDYW52YXMoKTtcbiAgICBfZnJhbWVHcmFiYmVyID0gbmV3IEZyYW1lR3JhYmJlcihfaW5wdXRTdHJlYW0sIF9jYW52YXNDb250YWluZXIuZG9tLmltYWdlKTtcblxuICAgIF9hZGp1c3RXb3JrZXJQb29sKF9jb25maWcubnVtT2ZXb3JrZXJzLCAoKSA9PiB7XG4gICAgICAgIGlmIChfY29uZmlnLm51bU9mV29ya2VycyA9PT0gMCkge1xuICAgICAgICAgICAgX2luaXRpYWxpemVEYXRhKCk7XG4gICAgICAgIH1cblxuICAgICAgICBfaW5wdXRTdHJlYW0ucGxheSgpO1xuICAgICAgICBjYigpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBfaW5pdENhbnZhcygpOiB2b2lkIHtcbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zdCB2aWV3cG9ydCA9IF9nZXRWaWV3UG9ydCgpO1xuICAgICAgICBfY2FudmFzQ29udGFpbmVyLmRvbS5pbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbnZhcy5pbWdCdWZmZXInKTtcbiAgICAgICAgaWYgKCFfY2FudmFzQ29udGFpbmVyLmRvbS5pbWFnZSkge1xuICAgICAgICAgICAgX2NhbnZhc0NvbnRhaW5lci5kb20uaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgICAgIF9jYW52YXNDb250YWluZXIuZG9tLmltYWdlLmNsYXNzTmFtZSA9ICdpbWdCdWZmZXInO1xuICAgICAgICAgICAgaWYgKHZpZXdwb3J0ICYmIF9jb25maWcuaW5wdXRTdHJlYW0udHlwZSA9PT0gJ0ltYWdlU3RyZWFtJykge1xuICAgICAgICAgICAgICAgIHZpZXdwb3J0LmFwcGVuZENoaWxkKF9jYW52YXNDb250YWluZXIuZG9tLmltYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBfY2FudmFzQ29udGFpbmVyLmN0eC5pbWFnZSA9IF9jYW52YXNDb250YWluZXIuZG9tLmltYWdlLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIF9jYW52YXNDb250YWluZXIuZG9tLmltYWdlLndpZHRoID0gX2lucHV0U3RyZWFtLmNhbnZhc1dpZHRoO1xuICAgICAgICBfY2FudmFzQ29udGFpbmVyLmRvbS5pbWFnZS5oZWlnaHQgPSBfaW5wdXRTdHJlYW0uY2FudmFzSGVpZ2h0O1xuXG4gICAgICAgIF9jYW52YXNDb250YWluZXIuZG9tLm92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjYW52YXMuZHJhd2luZ0J1ZmZlcicpO1xuICAgICAgICBpZiAoIV9jYW52YXNDb250YWluZXIuZG9tLm92ZXJsYXkpIHtcbiAgICAgICAgICAgIF9jYW52YXNDb250YWluZXIuZG9tLm92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgICAgIF9jYW52YXNDb250YWluZXIuZG9tLm92ZXJsYXkuY2xhc3NOYW1lID0gJ2RyYXdpbmdCdWZmZXInO1xuICAgICAgICAgICAgaWYgKHZpZXdwb3J0KSB7XG4gICAgICAgICAgICAgICAgdmlld3BvcnQuYXBwZW5kQ2hpbGQoX2NhbnZhc0NvbnRhaW5lci5kb20ub3ZlcmxheSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBjbGVhckZpeCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7XG4gICAgICAgICAgICBjbGVhckZpeC5zZXRBdHRyaWJ1dGUoJ2NsZWFyJywgJ2FsbCcpO1xuICAgICAgICAgICAgaWYgKHZpZXdwb3J0KSB7XG4gICAgICAgICAgICAgICAgdmlld3BvcnQuYXBwZW5kQ2hpbGQoY2xlYXJGaXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIF9jYW52YXNDb250YWluZXIuY3R4Lm92ZXJsYXkgPSBfY2FudmFzQ29udGFpbmVyLmRvbS5vdmVybGF5LmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIF9jYW52YXNDb250YWluZXIuZG9tLm92ZXJsYXkud2lkdGggPSBfaW5wdXRTdHJlYW0uY2FudmFzV2lkdGg7XG4gICAgICAgIF9jYW52YXNDb250YWluZXIuZG9tLm92ZXJsYXkuaGVpZ2h0ID0gX2lucHV0U3RyZWFtLmNhbnZhc0hlaWdodDtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIF9pbml0QnVmZmVycyhpbWFnZVdyYXBwZXI/OiBJbWFnZVdyYXBwZXIpOiB2b2lkIHtcbiAgICBpZiAoaW1hZ2VXcmFwcGVyKSB7XG4gICAgICAgIF9pbnB1dEltYWdlV3JhcHBlciA9IGltYWdlV3JhcHBlcjtcbiAgICB9IGVsc2Uge1xuICAgICAgICBfaW5wdXRJbWFnZVdyYXBwZXIgPSBuZXcgSW1hZ2VXcmFwcGVyKHtcbiAgICAgICAgICAgIHg6IF9pbnB1dFN0cmVhbS53aWR0aCxcbiAgICAgICAgICAgIHk6IF9pbnB1dFN0cmVhbS5oZWlnaHRcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc29sZS5sb2coX2lucHV0SW1hZ2VXcmFwcGVyLnNpemUpO1xuICAgIH1cbiAgICBfYm94U2l6ZSA9IFtcbiAgICAgICAgeyB4OiAwLCB5OiAwIH0sXG4gICAgICAgIHsgeDogMCwgeTogX2lucHV0SW1hZ2VXcmFwcGVyLnNpemUueSB9LFxuICAgICAgICB7IHg6IF9pbnB1dEltYWdlV3JhcHBlci5zaXplLngsIHk6IF9pbnB1dEltYWdlV3JhcHBlci5zaXplLnkgfSxcbiAgICAgICAgeyB4OiBfaW5wdXRJbWFnZVdyYXBwZXIuc2l6ZS54LCB5OiAwIH1cbiAgICBdO1xuICAgIF9sb2NhdG9yID0gbmV3IEJhcmNvZGVMb2NhdG9yKF9pbnB1dEltYWdlV3JhcHBlciwgX2NvbmZpZy5sb2NhdG9yKTtcbn1cblxuZnVuY3Rpb24gX2dldEJvdW5kaW5nQm94ZXMoKTogQXJyYXk8Qm94PiB7XG4gICAgaWYgKF9jb25maWcubG9jYXRlKSB7XG4gICAgICAgIHJldHVybiBfbG9jYXRvci5sb2NhdGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gW1tcbiAgICAgICAgICAgIF9ib3hTaXplWzBdLFxuICAgICAgICAgICAgX2JveFNpemVbMV0sXG4gICAgICAgICAgICBfYm94U2l6ZVsyXSxcbiAgICAgICAgICAgIF9ib3hTaXplWzNdXG4gICAgICAgIF1dO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gX3RyYW5zZm9ybShwb2x5Z29uOiBSZWFkb25seUFycmF5PFBvaW50Piwgb2Zmc2V0OiBQb2ludCk6IHZvaWQge1xuICAgIHBvbHlnb24uZm9yRWFjaCh2ZXJ0ZXggPT4ge1xuICAgICAgICB2ZXJ0ZXgueCArPSBvZmZzZXQueDtcbiAgICAgICAgdmVydGV4LnkgKz0gb2Zmc2V0Lnk7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gX3RyYW5zZm9ybVJlc3VsdChyZXN1bHQ6IFF1YWdnYUJhcmNvZGUsIG9mZnNldDogUG9pbnQpOiB2b2lkIHtcbiAgICBpZiAocmVzdWx0LmJhcmNvZGVzKSB7XG4gICAgICAgIHJlc3VsdC5iYXJjb2Rlcy5mb3JFYWNoKGJhcmNvZGUgPT4gX3RyYW5zZm9ybVJlc3VsdChiYXJjb2RlLCBvZmZzZXQpKTtcbiAgICB9XG5cbiAgICBpZiAocmVzdWx0LmxpbmUpIHtcbiAgICAgICAgX3RyYW5zZm9ybShyZXN1bHQubGluZSwgb2Zmc2V0KTtcbiAgICB9XG5cbiAgICBpZiAocmVzdWx0LmJveCkge1xuICAgICAgICBfdHJhbnNmb3JtKHJlc3VsdC5ib3gsIG9mZnNldCk7XG4gICAgfVxuXG4gICAgaWYgKHJlc3VsdC5ib3hlcykge1xuICAgICAgICByZXN1bHQuYm94ZXMuZm9yRWFjaChib3ggPT4gX3RyYW5zZm9ybShib3gsIG9mZnNldCkpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gX2FkZFJlc3VsdChyZXN1bHQ6IFF1YWdnYUJhcmNvZGUsIGltYWdlRGF0YTogVWludDhBcnJheSwgY2FudmFzV2lkdGg6IG51bWJlciwgY2FudmFzSGVpZ2h0OiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAoaW1hZ2VEYXRhICYmIF9yZXN1bHRDb2xsZWN0b3IpIHtcbiAgICAgICAgaWYgKHJlc3VsdC5iYXJjb2Rlcykge1xuICAgICAgICAgICAgcmVzdWx0LmJhcmNvZGVzLmZvckVhY2goKHsgY29kZVJlc3VsdCB9KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGNvZGVSZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgX3Jlc3VsdENvbGxlY3Rvci5hZGRSZXN1bHQoaW1hZ2VEYXRhLCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0LCBjb2RlUmVzdWx0KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5jb2RlUmVzdWx0KSB7XG4gICAgICAgICAgICBfcmVzdWx0Q29sbGVjdG9yLmFkZFJlc3VsdChpbWFnZURhdGEsIGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQsIHJlc3VsdC5jb2RlUmVzdWx0KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gX2hhc0NvZGVSZXN1bHQocmVzdWx0OiBRdWFnZ2FCYXJjb2RlKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHJlc3VsdCAmJiAoISFyZXN1bHQuY29kZVJlc3VsdCB8fCByZXN1bHQuYmFyY29kZXMgJiYgcmVzdWx0LmJhcmNvZGVzLnNvbWUoYmFyY29kZSA9PiAhIWJhcmNvZGUuY29kZVJlc3VsdCkpO1xufVxuXG5mdW5jdGlvbiBfcHVibGlzaFJlc3VsdChyZXN1bHQ/OiBRdWFnZ2FCYXJjb2RlLCBpbWFnZURhdGE/OiBVaW50OEFycmF5KTogdm9pZCB7XG4gICAgbGV0IHJlc3VsdFRvUHVibGlzaDogUXVhZ2dhQmFyY29kZSB8IEFycmF5PFF1YWdnYUJhcmNvZGU+ID0gcmVzdWx0O1xuXG4gICAgaWYgKHJlc3VsdCAmJiBfb25VSVRocmVhZCkge1xuICAgICAgICBjb25zdCBvZmZzZXQgPSBfaW5wdXRTdHJlYW0udG9wTGVmdDtcblxuICAgICAgICBpZiAob2Zmc2V0LnggIT09IDAgfHwgb2Zmc2V0LnkgIT09IDApIHtcbiAgICAgICAgICAgIF90cmFuc2Zvcm1SZXN1bHQocmVzdWx0LCBvZmZzZXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgX2FkZFJlc3VsdChyZXN1bHQsIGltYWdlRGF0YSwgX2lucHV0U3RyZWFtLmNhbnZhc1dpZHRoLCBfaW5wdXRTdHJlYW0uY2FudmFzSGVpZ2h0KTtcbiAgICAgICAgcmVzdWx0VG9QdWJsaXNoID0gcmVzdWx0LmJhcmNvZGVzIHx8IHJlc3VsdDtcbiAgICB9XG5cbiAgICBFdmVudHMucHVibGlzaCgncHJvY2Vzc2VkJywgcmVzdWx0VG9QdWJsaXNoKTtcbiAgICBpZiAoX2hhc0NvZGVSZXN1bHQocmVzdWx0KSkge1xuICAgICAgICBFdmVudHMucHVibGlzaCgnZGV0ZWN0ZWQnLCByZXN1bHRUb1B1Ymxpc2gpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gX2xvY2F0ZUFuZERlY29kZSgpOiB2b2lkIHtcbiAgICBjb25zdCBib3hlcyA9IF9nZXRCb3VuZGluZ0JveGVzKCk7XG5cbiAgICBpZiAoYm94ZXMpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gX2RlY29kZXIuZGVjb2RlRnJvbUJvdW5kaW5nQm94ZXMoYm94ZXMpIHx8IHt9O1xuICAgICAgICByZXN1bHQuYm94ZXMgPSBib3hlcztcbiAgICAgICAgX3B1Ymxpc2hSZXN1bHQocmVzdWx0LCBfaW5wdXRJbWFnZVdyYXBwZXIuZGF0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgX3B1Ymxpc2hSZXN1bHQoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIF91cGRhdGUoKTogdm9pZCB7XG4gICAgbGV0IGF2YWlsYWJsZVdvcmtlcjogV29ya2VyVGhyZWFkO1xuXG4gICAgaWYgKF9vblVJVGhyZWFkKSB7XG4gICAgICAgIGlmIChfd29ya2VyUG9vbC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBhdmFpbGFibGVXb3JrZXIgPSBfd29ya2VyUG9vbC5maW5kKHdvcmtlclRocmVhZCA9PiAhd29ya2VyVGhyZWFkLmJ1c3kpO1xuICAgICAgICAgICAgaWYgKGF2YWlsYWJsZVdvcmtlcikge1xuICAgICAgICAgICAgICAgIF9mcmFtZUdyYWJiZXIuYXR0YWNoRGF0YShhdmFpbGFibGVXb3JrZXIuaW1hZ2VEYXRhKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuOyAvLyBhbGwgd29ya2VycyBhcmUgYnVzeVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX2ZyYW1lR3JhYmJlci5hdHRhY2hEYXRhKF9pbnB1dEltYWdlV3JhcHBlci5kYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoX2ZyYW1lR3JhYmJlci5ncmFiKCkpIHtcbiAgICAgICAgICAgIGlmIChhdmFpbGFibGVXb3JrZXIpIHtcbiAgICAgICAgICAgICAgICBhdmFpbGFibGVXb3JrZXIuYnVzeSA9IHRydWU7XG4gICAgICAgICAgICAgICAgYXZhaWxhYmxlV29ya2VyLndvcmtlci5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgICAgIGNtZDogJ3Byb2Nlc3MnLFxuICAgICAgICAgICAgICAgICAgICBpbWFnZURhdGE6IGF2YWlsYWJsZVdvcmtlci5pbWFnZURhdGFcbiAgICAgICAgICAgICAgICB9LCBbYXZhaWxhYmxlV29ya2VyLmltYWdlRGF0YS5idWZmZXJdKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgX2xvY2F0ZUFuZERlY29kZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgX2xvY2F0ZUFuZERlY29kZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gX3N0YXJ0Q29udGludW91c1VwZGF0ZSgpOiB2b2lkIHtcbiAgICBjb25zdCBkZWxheSA9IDEwMDAgLyAoX2NvbmZpZy5mcmVxdWVuY3kgfHwgNjApO1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgIGxldCBuZXh0ID0gbnVsbDtcbiAgICBfc3RvcHBlZCA9IGZhbHNlO1xuXG4gICAgKGZ1bmN0aW9uIGZyYW1lKHRpbWVzdGFtcCk6IHZvaWQge1xuICAgICAgICBuZXh0ID0gbmV4dCB8fCB0aW1lc3RhbXA7XG4gICAgICAgIGlmICghdGhhdC5fc3RvcHBlZCkge1xuICAgICAgICAgICAgaWYgKHRpbWVzdGFtcCA+PSBuZXh0KSB7XG4gICAgICAgICAgICAgICAgbmV4dCArPSBkZWxheTtcbiAgICAgICAgICAgICAgICB0aGF0Ll91cGRhdGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnJhbWUpO1xuICAgICAgICB9XG4gICAgfShwZXJmb3JtYW5jZS5ub3coKSkpO1xufVxuXG5mdW5jdGlvbiBfaW5pdFdvcmtlcihjYjogKHdvcmtlclRocmVhZDogV29ya2VyVGhyZWFkKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgY29uc3QgYmxvYlVSTCA9IF9nZW5lcmF0ZVdvcmtlckJsb2IoKTtcbiAgICBjb25zdCB3b3JrZXJUaHJlYWQgPSB7XG4gICAgICAgIHdvcmtlcjogbmV3IFdvcmtlcihibG9iVVJMKSxcbiAgICAgICAgaW1hZ2VEYXRhOiBuZXcgVWludDhBcnJheShfaW5wdXRTdHJlYW0ud2lkdGggKiBfaW5wdXRTdHJlYW0uaGVpZ2h0KSxcbiAgICAgICAgYnVzeTogdHJ1ZVxuICAgIH07XG5cbiAgICB3b3JrZXJUaHJlYWQud29ya2VyLm9ubWVzc2FnZSA9ICh7IGRhdGEgfSkgPT4ge1xuICAgICAgICBpZiAoZGF0YS5ldmVudCA9PT0gJ2luaXRpYWxpemVkJykge1xuICAgICAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTChibG9iVVJMKTtcbiAgICAgICAgICAgIHdvcmtlclRocmVhZC5idXN5ID0gZmFsc2U7XG4gICAgICAgICAgICB3b3JrZXJUaHJlYWQuaW1hZ2VEYXRhID0gbmV3IFVpbnQ4QXJyYXkoZGF0YS5pbWFnZURhdGEpO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnV29ya2VyIGluaXRpYWxpemVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYih3b3JrZXJUaHJlYWQpO1xuICAgICAgICB9IGVsc2UgaWYgKGRhdGEuZXZlbnQgPT09ICdwcm9jZXNzZWQnKSB7XG4gICAgICAgICAgICB3b3JrZXJUaHJlYWQuYnVzeSA9IGZhbHNlO1xuICAgICAgICAgICAgd29ya2VyVGhyZWFkLmltYWdlRGF0YSA9IG5ldyBVaW50OEFycmF5KGRhdGEuaW1hZ2VEYXRhKTtcbiAgICAgICAgICAgIF9wdWJsaXNoUmVzdWx0KGRhdGEucmVzdWx0LCB3b3JrZXJUaHJlYWQuaW1hZ2VEYXRhKTtcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhLmV2ZW50ID09PSAnZXJyb3InKSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdXb3JrZXIgZXJyb3I6JywgZGF0YS5tZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB3b3JrZXJUaHJlYWQud29ya2VyLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgY21kOiAnaW5pdCcsXG4gICAgICAgIHNpemU6IHsgeDogX2lucHV0U3RyZWFtLndpZHRoLCB5OiBfaW5wdXRTdHJlYW0uaGVpZ2h0IH0sXG4gICAgICAgIGltYWdlRGF0YTogd29ya2VyVGhyZWFkLmltYWdlRGF0YSxcbiAgICAgICAgY29uZmlnOiBtZXJnZShfY29uZmlnLCB7IGlucHV0U3RyZWFtOiB7IHRhcmdldDogbnVsbCB9IH0pXG4gICAgfSwgW3dvcmtlclRocmVhZC5pbWFnZURhdGEuYnVmZmVyXSk7XG59XG5cbmZ1bmN0aW9uIF93b3JrZXJJbnRlcmZhY2UoZmFjdG9yeTogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICBjb25zdCBvcmlnaW4gPSAnKic7XG4gICAgbGV0IGltYWdlV3JhcHBlcjogSW1hZ2VXcmFwcGVyO1xuXG4gICAgaWYgKGZhY3RvcnkpIHtcbiAgICAgICAgKFF1YWdnYSBhcyBhbnkpID0gZmFjdG9yeSgpLmRlZmF1bHQ7XG4gICAgICAgIGlmICghUXVhZ2dhKSB7XG4gICAgICAgICAgICBzZWxmLnBvc3RNZXNzYWdlKHsgZXZlbnQ6ICdlcnJvcicsIG1lc3NhZ2U6ICdRdWFnZ2EgY291bGQgbm90IGJlIGNyZWF0ZWQnIH0sIG9yaWdpbik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZWxmLm9ubWVzc2FnZSA9ICh7IGRhdGEgfSkgPT4ge1xuICAgICAgICBpZiAoZGF0YS5jbWQgPT09ICdpbml0Jykge1xuICAgICAgICAgICAgY29uc3QgY29uZmlnOiBRdWFnZ2FDb25maWcgPSBkYXRhLmNvbmZpZztcbiAgICAgICAgICAgIGNvbmZpZy5udW1PZldvcmtlcnMgPSAwO1xuICAgICAgICAgICAgaW1hZ2VXcmFwcGVyID0gbmV3IEltYWdlV3JhcHBlcih7IHg6IGRhdGEuc2l6ZS54LCB5OiBkYXRhLnNpemUueSB9LCBuZXcgVWludDhBcnJheShkYXRhLmltYWdlRGF0YSkpO1xuICAgICAgICAgICAgUXVhZ2dhLmluaXQoY29uZmlnLCAoKSA9PiBzZWxmLnBvc3RNZXNzYWdlKFxuICAgICAgICAgICAgICAgIHsgZXZlbnQ6ICdpbml0aWFsaXplZCcsIGltYWdlRGF0YTogaW1hZ2VXcmFwcGVyLmRhdGEgfSwgb3JpZ2luLCBbaW1hZ2VXcmFwcGVyLmRhdGEuYnVmZmVyXSksXG4gICAgICAgICAgICAgICAgaW1hZ2VXcmFwcGVyXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgUXVhZ2dhLm9uUHJvY2Vzc2VkKChyZXN1bHQ6IFF1YWdnYUJhcmNvZGUpID0+IHNlbGYucG9zdE1lc3NhZ2UoXG4gICAgICAgICAgICAgICAgeyBldmVudDogJ3Byb2Nlc3NlZCcsIGltYWdlRGF0YTogaW1hZ2VXcmFwcGVyLmRhdGEsIHJlc3VsdCB9LCBvcmlnaW4sIFtpbWFnZVdyYXBwZXIuZGF0YS5idWZmZXJdXG4gICAgICAgICAgICApKTtcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhLmNtZCA9PT0gJ3Byb2Nlc3MnKSB7XG4gICAgICAgICAgICBpbWFnZVdyYXBwZXIuZGF0YSA9IG5ldyBVaW50OEFycmF5KGRhdGEuaW1hZ2VEYXRhKTtcbiAgICAgICAgICAgIFF1YWdnYS5zdGFydCgpO1xuICAgICAgICB9IGVsc2UgaWYgKGRhdGEuY21kID09PSAnc2V0UmVhZGVycycpIHtcbiAgICAgICAgICAgIFF1YWdnYS5zZXRSZWFkZXJzKGRhdGEucmVhZGVycyk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5mdW5jdGlvbiBfZ2VuZXJhdGVXb3JrZXJCbG9iKCk6IHN0cmluZyB7XG4gICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtgKCR7X3dvcmtlckludGVyZmFjZS50b1N0cmluZygpfSkoJHtfX2ZhY3RvcnlTb3VyY2VfXyB8fCAnJ30pO2BdLFxuICAgICAgICB7IHR5cGU6ICd0ZXh0L2phdmFzY3JpcHQnIH0pO1xuXG4gICAgcmV0dXJuIHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xufVxuXG5mdW5jdGlvbiBfYWRqdXN0V29ya2VyUG9vbChjYXBhY2l0eTogbnVtYmVyLCBjYj86ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICBjb25zdCBpbmNyZWFzZUJ5ID0gY2FwYWNpdHkgLSBfd29ya2VyUG9vbC5sZW5ndGg7XG4gICAgaWYgKGluY3JlYXNlQnkgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGNiICYmIGNiKCk7XG4gICAgfVxuICAgIGlmIChpbmNyZWFzZUJ5IDwgMCkge1xuICAgICAgICBfd29ya2VyUG9vbC5zbGljZShpbmNyZWFzZUJ5KS5mb3JFYWNoKCh7IHdvcmtlciB9KSA9PiB7XG4gICAgICAgICAgICB3b3JrZXIudGVybWluYXRlKCk7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdXb3JrZXIgdGVybWluYXRlZCEnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIF93b3JrZXJQb29sID0gX3dvcmtlclBvb2wuc2xpY2UoMCwgaW5jcmVhc2VCeSk7XG4gICAgICAgIHJldHVybiBjYiAmJiBjYigpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5jcmVhc2VCeTsgaSsrKSB7XG4gICAgICAgICAgICBfaW5pdFdvcmtlcih3b3JrZXJUaHJlYWQgPT4ge1xuICAgICAgICAgICAgICAgIF93b3JrZXJQb29sLnB1c2god29ya2VyVGhyZWFkKTtcbiAgICAgICAgICAgICAgICBpZiAoX3dvcmtlclBvb2wubGVuZ3RoID49IGNhcGFjaXR5ICYmIGNiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNiKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFF1YWdnYTsiLCJpbXBvcnQgeyBCYXJjb2RlLCBCYXJjb2RlSW5mbywgQmFyY29kZVJlYWRlciwgQmFyY29kZVJlYWRlckNvbmZpZyB9IGZyb20gJy4vYmFyY29kZS1yZWFkZXInO1xuXG5jb25zdCBOID0gMTtcbmNvbnN0IFcgPSAzO1xuY29uc3QgU1RBUlRfUEFUVEVSTiA9IFtXLCBOLCBXLCBOLCBOLCBOXTtcbmNvbnN0IFNUT1BfUEFUVEVSTiA9IFtXLCBOLCBOLCBOLCBXXTtcbmNvbnN0IENPREVfUEFUVEVSTiA9IFtcbiAgICBbTiwgTiwgVywgVywgTl0sXG4gICAgW1csIE4sIE4sIE4sIFddLFxuICAgIFtOLCBXLCBOLCBOLCBXXSxcbiAgICBbVywgVywgTiwgTiwgTl0sXG4gICAgW04sIE4sIFcsIE4sIFddLFxuICAgIFtXLCBOLCBXLCBOLCBOXSxcbiAgICBbTiwgVywgVywgTiwgTl0sXG4gICAgW04sIE4sIE4sIFcsIFddLFxuICAgIFtXLCBOLCBOLCBXLCBOXSxcbiAgICBbTiwgVywgTiwgVywgTl1cbl07XG5jb25zdCBzdGFydFBhdHRlcm5MZW5ndGggPSBTVEFSVF9QQVRURVJOLnJlZHVjZSgoc3VtLCB2YWwpID0+IHN1bSArIHZhbCwgMCk7XG5cbmV4cG9ydCBjbGFzcyBUd29PZkZpdmVSZWFkZXIgZXh0ZW5kcyBCYXJjb2RlUmVhZGVyIHtcbiAgICBwcml2YXRlIF9iYXJTcGFjZVJhdGlvOiBbbnVtYmVyLCBudW1iZXJdO1xuXG4gICAgY29uc3RydWN0b3IoY29uZmlnPzogQmFyY29kZVJlYWRlckNvbmZpZykge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuXG4gICAgICAgIHRoaXMuX2JhclNwYWNlUmF0aW8gPSBbMSwgMV07XG4gICAgICAgIHRoaXMuX2Zvcm1hdCA9ICcyb2Y1JztcbiAgICAgICAgdGhpcy5fc2luZ2xlQ29kZUVycm9yID0gMC43ODtcbiAgICAgICAgdGhpcy5fYXZlcmFnZUNvZGVFcnJvciA9IDAuMzA7XG4gICAgfVxuXG4gICAgZGVjb2RlKCk6IEJhcmNvZGUge1xuICAgICAgICBjb25zdCBzdGFydEluZm8gPSB0aGlzLl9maW5kU3RhcnQoKTtcblxuICAgICAgICBpZiAoIXN0YXJ0SW5mbykge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBlbmRJbmZvID0gdGhpcy5fZmluZEVuZCgpO1xuXG4gICAgICAgIGlmICghZW5kSW5mbykge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjb3VudGVycyA9IHRoaXMuX2ZpbGxDb3VudGVycyhzdGFydEluZm8uZW5kLCBlbmRJbmZvLnN0YXJ0LCAwKTtcblxuICAgICAgICBpZiAoY291bnRlcnMubGVuZ3RoICUgMTAgIT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEFycmF5PG51bWJlcj4oKTtcbiAgICAgICAgY29uc3QgZGVjb2RlZENvZGVzID0gbmV3IEFycmF5PEJhcmNvZGVJbmZvPigpO1xuXG4gICAgICAgIGRlY29kZWRDb2Rlcy5wdXNoKHN0YXJ0SW5mbyk7XG5cbiAgICAgICAgY29uc3QgY29kZSA9IHRoaXMuX2RlY29kZVBheWxvYWQoY291bnRlcnMsIHJlc3VsdCwgZGVjb2RlZENvZGVzKTtcblxuICAgICAgICBpZiAoIWNvZGUgfHwgcmVzdWx0Lmxlbmd0aCA8IDUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVjb2RlZENvZGVzLnB1c2goZW5kSW5mbyk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvZGU6IHJlc3VsdC5qb2luKCcnKSxcbiAgICAgICAgICAgIHN0YXJ0OiBzdGFydEluZm8uc3RhcnQsXG4gICAgICAgICAgICBlbmQ6IGVuZEluZm8uZW5kLFxuICAgICAgICAgICAgc3RhcnRJbmZvLFxuICAgICAgICAgICAgZGVjb2RlZENvZGVzXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9maW5kU3RhcnQoKTogQmFyY29kZUluZm8ge1xuICAgICAgICBsZXQgb2Zmc2V0ID0gdGhpcy5fbmV4dFNldCh0aGlzLl9yb3cpO1xuICAgICAgICBsZXQgbmFycm93QmFyV2lkdGggPSAxO1xuICAgICAgICBsZXQgc3RhcnRJbmZvOiBCYXJjb2RlSW5mbztcblxuICAgICAgICB3aGlsZSAoIXN0YXJ0SW5mbykge1xuICAgICAgICAgICAgc3RhcnRJbmZvID0gdGhpcy5fZmluZFBhdHRlcm4oU1RBUlRfUEFUVEVSTiwgb2Zmc2V0LCAwLCB0cnVlKTtcblxuICAgICAgICAgICAgaWYgKCFzdGFydEluZm8pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbmFycm93QmFyV2lkdGggPSAoc3RhcnRJbmZvLmVuZCAtIHN0YXJ0SW5mby5zdGFydCkgLyBzdGFydFBhdHRlcm5MZW5ndGggfCAwO1xuICAgICAgICAgICAgY29uc3QgbGVhZGluZ1doaXRlc3BhY2VTdGFydCA9IHN0YXJ0SW5mby5zdGFydCAtIG5hcnJvd0JhcldpZHRoICogNTtcblxuICAgICAgICAgICAgaWYgKGxlYWRpbmdXaGl0ZXNwYWNlU3RhcnQgPj0gMCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9tYXRjaFJhbmdlKGxlYWRpbmdXaGl0ZXNwYWNlU3RhcnQsIHN0YXJ0SW5mby5zdGFydCwgMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0YXJ0SW5mbztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG9mZnNldCA9IHN0YXJ0SW5mby5lbmQ7XG4gICAgICAgICAgICBzdGFydEluZm8gPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF92ZXJpZnlUcmFpbGluZ1doaXRlc3BhY2UoZW5kSW5mbzogQmFyY29kZUluZm8pOiBCYXJjb2RlSW5mbyB7XG4gICAgICAgIGNvbnN0IHRyYWlsaW5nV2hpdGVzcGFjZUVuZCA9IGVuZEluZm8uZW5kICsgKGVuZEluZm8uZW5kIC0gZW5kSW5mby5zdGFydCkgLyAyO1xuXG4gICAgICAgIGlmICh0cmFpbGluZ1doaXRlc3BhY2VFbmQgPCB0aGlzLl9yb3cubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fbWF0Y2hSYW5nZShlbmRJbmZvLmVuZCwgdHJhaWxpbmdXaGl0ZXNwYWNlRW5kLCAwKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbmRJbmZvO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9maW5kRW5kKCk6IEJhcmNvZGVJbmZvIHtcbiAgICAgICAgdGhpcy5fcm93LnJldmVyc2UoKTtcblxuICAgICAgICBjb25zdCBvZmZzZXQgPSB0aGlzLl9uZXh0U2V0KHRoaXMuX3Jvdyk7XG4gICAgICAgIGNvbnN0IGVuZEluZm8gPSB0aGlzLl9maW5kUGF0dGVybihTVE9QX1BBVFRFUk4sIG9mZnNldCwgMCwgdHJ1ZSk7XG5cbiAgICAgICAgdGhpcy5fcm93LnJldmVyc2UoKTtcblxuICAgICAgICBpZiAoZW5kSW5mbyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvLyByZXZlcnNlIG51bWJlcnNcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBlbmRJbmZvLnN0YXJ0O1xuICAgICAgICBlbmRJbmZvLnN0YXJ0ID0gdGhpcy5fcm93Lmxlbmd0aCAtIGVuZEluZm8uZW5kO1xuICAgICAgICBlbmRJbmZvLmVuZCA9IHRoaXMuX3Jvdy5sZW5ndGggLSBzdGFydDtcblxuICAgICAgICByZXR1cm4gZW5kSW5mbyAhPT0gbnVsbCA/IHRoaXMuX3ZlcmlmeVRyYWlsaW5nV2hpdGVzcGFjZShlbmRJbmZvKSA6IG51bGw7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9kZWNvZGVDb2RlKGNvdW50ZXI6IFJlYWRvbmx5QXJyYXk8bnVtYmVyPik6IEJhcmNvZGVJbmZvIHtcbiAgICAgICAgY29uc3QgYmVzdE1hdGNoOiBCYXJjb2RlSW5mbyA9IHtcbiAgICAgICAgICAgIGVycm9yOiBOdW1iZXIuTUFYX1ZBTFVFLFxuICAgICAgICAgICAgY29kZTogLTEsXG4gICAgICAgICAgICBzdGFydDogMCxcbiAgICAgICAgICAgIGVuZDogMFxuICAgICAgICB9O1xuXG4gICAgICAgIGZvciAobGV0IGNvZGUgPSAwOyBjb2RlIDwgQ09ERV9QQVRURVJOLmxlbmd0aDsgY29kZSsrKSB7XG4gICAgICAgICAgICBjb25zdCBlcnJvciA9IHRoaXMuX21hdGNoUGF0dGVybihjb3VudGVyLCBDT0RFX1BBVFRFUk5bY29kZV0pO1xuICAgICAgICAgICAgaWYgKGVycm9yIDwgYmVzdE1hdGNoLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgYmVzdE1hdGNoLmNvZGUgPSBjb2RlO1xuICAgICAgICAgICAgICAgIGJlc3RNYXRjaC5lcnJvciA9IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGJlc3RNYXRjaC5lcnJvciA8IHRoaXMuQVZFUkFHRV9DT0RFX0VSUk9SID8gYmVzdE1hdGNoIDogbnVsbDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2RlY29kZVBheWxvYWQoY291bnRlcnM6IFJlYWRvbmx5QXJyYXk8bnVtYmVyPiwgcmVzdWx0OiBBcnJheTxudW1iZXI+LCBkZWNvZGVkQ29kZXM6IEFycmF5PEJhcmNvZGVJbmZvPik6IEJhcmNvZGVJbmZvIHtcbiAgICAgICAgY29uc3QgY291bnRlckxlbmd0aCA9IGNvdW50ZXJzLmxlbmd0aDtcbiAgICAgICAgY29uc3QgY291bnRlciA9IFswLCAwLCAwLCAwLCAwXTtcbiAgICAgICAgbGV0IHBvcyA9IDA7XG4gICAgICAgIGxldCBjb2RlOiBCYXJjb2RlSW5mbztcblxuICAgICAgICB3aGlsZSAocG9zIDwgY291bnRlckxlbmd0aCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb3VudGVyW2ldID0gY291bnRlcnNbcG9zXSAqIHRoaXMuX2JhclNwYWNlUmF0aW9bMF07XG4gICAgICAgICAgICAgICAgcG9zICs9IDI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvZGUgPSB0aGlzLl9kZWNvZGVDb2RlKGNvdW50ZXIpO1xuXG4gICAgICAgICAgICBpZiAoIWNvZGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVzdWx0LnB1c2goY29kZS5jb2RlKTtcbiAgICAgICAgICAgIGRlY29kZWRDb2Rlcy5wdXNoKGNvZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvZGU7XG4gICAgfVxufVxuIiwiZXhwb3J0IGVudW0gQmFyY29kZURpcmVjdGlvbiB7XG4gICAgRm9yd2FyZCA9IDEsXG4gICAgUmV2ZXJzZSA9IC0xXG59O1xuXG5leHBvcnQgdHlwZSBCYXJjb2RlRm9ybWF0ID0gc3RyaW5nO1xuXG5leHBvcnQgdHlwZSBCYXJjb2RlUmVhZGVyVHlwZSA9IHN0cmluZztcblxuZXhwb3J0IHR5cGUgQmFyY29kZVJlYWRlckRlY2xhcmF0aW9uID0gQmFyY29kZVJlYWRlclR5cGUgfCB7IGZvcm1hdDogQmFyY29kZVJlYWRlclR5cGU7IGNvbmZpZzogQmFyY29kZVJlYWRlckNvbmZpZzsgfTtcblxuZXhwb3J0IGludGVyZmFjZSBCYXJjb2RlUmVhZGVyQ29uZmlnIHtcbiAgICBub3JtYWxpemVCYXJTcGFjZVdpZHRoPzogYm9vbGVhbjtcbiAgICBzdXBwbGVtZW50cz86IEFycmF5PEJhcmNvZGVSZWFkZXJUeXBlPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCYXJjb2RlQ29ycmVjdGlvbiB7XG4gICAgYmFyOiBudW1iZXI7XG4gICAgc3BhY2U6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCYXJjb2RlSW5mbyB7XG4gICAgY29kZT86IG51bWJlcjtcbiAgICBjb3JyZWN0aW9uPzogQmFyY29kZUNvcnJlY3Rpb247XG4gICAgZW5kPzogbnVtYmVyO1xuICAgIGVuZENvdW50ZXI/OiBudW1iZXI7XG4gICAgZXJyb3I/OiBudW1iZXI7XG4gICAgc3RhcnQ/OiBudW1iZXI7XG4gICAgc3RhcnRDb3VudGVyPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJhcmNvZGUge1xuICAgIGNvZGU/OiBzdHJpbmc7XG4gICAgY29kZXNldD86IG51bWJlcjtcbiAgICBjb3JyZWN0aW9uPzogQmFyY29kZUNvcnJlY3Rpb247XG4gICAgZGVjb2RlZENvZGVzPzogQXJyYXk8c3RyaW5nIHwgQmFyY29kZUluZm8+O1xuICAgIGRpcmVjdGlvbj86IEJhcmNvZGVEaXJlY3Rpb247XG4gICAgZW5kPzogbnVtYmVyO1xuICAgIGVuZEluZm8/OiBCYXJjb2RlSW5mbztcbiAgICBmb3JtYXQ/OiBCYXJjb2RlRm9ybWF0O1xuICAgIHN0YXJ0PzogbnVtYmVyO1xuICAgIHN0YXJ0SW5mbz86IEJhcmNvZGVJbmZvO1xuICAgIHN1cHBsZW1lbnQ/OiBCYXJjb2RlO1xufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFyY29kZVJlYWRlciB7XG4gICAgcHJvdGVjdGVkIF9zaW5nbGVDb2RlRXJyb3I6IG51bWJlcjtcbiAgICBwcm90ZWN0ZWQgX2F2ZXJhZ2VDb2RlRXJyb3I6IG51bWJlcjtcbiAgICBwcm90ZWN0ZWQgX2Zvcm1hdDogQmFyY29kZUZvcm1hdDtcbiAgICBwcm90ZWN0ZWQgX3JvdzogQXJyYXk8bnVtYmVyPjtcblxuICAgIGNvbmZpZzogQmFyY29kZVJlYWRlckNvbmZpZztcbiAgICBzdXBwbGVtZW50czogQXJyYXk8QmFyY29kZVJlYWRlcj47XG5cbiAgICBzdGF0aWMgZ2V0IEV4Y2VwdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIFN0YXJ0Tm90Rm91bmRFeGNlcHRpb246ICdTdGFydC1JbmZvIHdhcyBub3QgZm91bmQhJyxcbiAgICAgICAgICAgIENvZGVOb3RGb3VuZEV4Y2VwdGlvbjogJ0NvZGUgY291bGQgbm90IGJlIGZvdW5kIScsXG4gICAgICAgICAgICBQYXR0ZXJuTm90Rm91bmRFeGNlcHRpb246ICdQYXR0ZXJuIGNvdWxkIG5vdCBiZSBmb3VuZCEnXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZ2V0IFNJTkdMRV9DT0RFX0VSUk9SKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zaW5nbGVDb2RlRXJyb3I7XG4gICAgfVxuXG4gICAgZ2V0IEFWRVJBR0VfQ09ERV9FUlJPUigpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fYXZlcmFnZUNvZGVFcnJvcjtcbiAgICB9XG5cbiAgICBnZXQgRk9STUFUKCk6IEJhcmNvZGVGb3JtYXQge1xuICAgICAgICByZXR1cm4gdGhpcy5fZm9ybWF0O1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZz86IEJhcmNvZGVSZWFkZXJDb25maWcsIHN1cHBsZW1lbnRzPzogQXJyYXk8QmFyY29kZVJlYWRlcj4pIHtcbiAgICAgICAgdGhpcy5fZm9ybWF0ID0gJ3Vua25vd24nO1xuICAgICAgICB0aGlzLl9yb3cgPSBbXTtcbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWcgfHwge307XG4gICAgICAgIHRoaXMuc3VwcGxlbWVudHMgPSBzdXBwbGVtZW50cztcbiAgICB9XG5cbiAgICBhYnN0cmFjdCBkZWNvZGUocm93PzogQXJyYXk8bnVtYmVyPiwgc3RhcnQ/OiBudW1iZXIpOiBCYXJjb2RlO1xuXG4gICAgcHJvdGVjdGVkIF9maW5kUGF0dGVybihwYXR0ZXJuOiBSZWFkb25seUFycmF5PG51bWJlcj4sIG9mZnNldDogbnVtYmVyLCBpc1doaXRlOiAwIHwgMSwgdHJ5SGFyZGVyOiBib29sZWFuKTogQmFyY29kZUluZm8ge1xuICAgICAgICBjb25zdCBjb3VudGVyID0gbmV3IEFycmF5PG51bWJlcj4ocGF0dGVybi5sZW5ndGgpO1xuICAgICAgICBjb25zdCBiZXN0TWF0Y2g6IEJhcmNvZGVJbmZvID0ge1xuICAgICAgICAgICAgZXJyb3I6IE51bWJlci5NQVhfVkFMVUUsXG4gICAgICAgICAgICBjb2RlOiAtMSxcbiAgICAgICAgICAgIHN0YXJ0OiAwLFxuICAgICAgICAgICAgZW5kOiAwXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGVwc2lsb24gPSB0aGlzLkFWRVJBR0VfQ09ERV9FUlJPUjtcbiAgICAgICAgbGV0IGNvdW50ZXJQb3MgPSAwO1xuXG4gICAgICAgIGlmICghb2Zmc2V0KSB7XG4gICAgICAgICAgICBvZmZzZXQgPSB0aGlzLl9uZXh0U2V0KHRoaXMuX3Jvdyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb3VudGVyLmZpbGwoMCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IG9mZnNldDsgaSA8IHRoaXMuX3Jvdy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3Jvd1tpXSBeIGlzV2hpdGUpIHtcbiAgICAgICAgICAgICAgICBjb3VudGVyW2NvdW50ZXJQb3NdKys7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChjb3VudGVyUG9zID09PSBjb3VudGVyLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXJyb3IgPSB0aGlzLl9tYXRjaFBhdHRlcm4oY291bnRlciwgcGF0dGVybik7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yIDwgZXBzaWxvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmVzdE1hdGNoLmVycm9yID0gZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICBiZXN0TWF0Y2guc3RhcnQgPSBpIC0gY291bnRlci5yZWR1Y2UoKHN1bSwgdmFsdWUpID0+IHN1bSArIHZhbHVlLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlc3RNYXRjaC5lbmQgPSBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJlc3RNYXRjaDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0cnlIYXJkZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY291bnRlci5sZW5ndGggLSAyOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVyW2pdID0gY291bnRlcltqICsgMl07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVyW2NvdW50ZXIubGVuZ3RoIC0gMl0gPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgY291bnRlcltjb3VudGVyLmxlbmd0aCAtIDFdID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ZXJQb3MtLTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnRlclBvcysrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb3VudGVyW2NvdW50ZXJQb3NdID0gMTtcbiAgICAgICAgICAgICAgICBpc1doaXRlID0gaXNXaGl0ZSA/IDAgOiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfbmV4dFVuc2V0KGxpbmU6IFJlYWRvbmx5QXJyYXk8bnVtYmVyPiwgc3RhcnQ/OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICBmb3IgKGxldCBpID0gc3RhcnQgfHwgMDsgaSA8IGxpbmUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICghbGluZVtpXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsaW5lLmxlbmd0aDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX25leHRTZXQobGluZTogUmVhZG9ubHlBcnJheTxudW1iZXI+LCBzdGFydD86IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIGZvciAobGV0IGkgPSBzdGFydCB8fCAwOyBpIDwgbGluZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGxpbmVbaV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGluZS5sZW5ndGg7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9tYXRjaFJhbmdlKHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyLCB2YWx1ZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIGZvciAobGV0IGkgPSBzdGFydCA8IDAgPyAwIDogc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3Jvd1tpXSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9tYXRjaFBhdHRlcm4oY291bnRlcjogUmVhZG9ubHlBcnJheTxudW1iZXI+LCBjb2RlOiBSZWFkb25seUFycmF5PG51bWJlcj4sIG1heFNpbmdsZUVycm9yPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgbGV0IGVycm9yID0gMDtcbiAgICAgICAgbGV0IHN1bSA9IDA7XG4gICAgICAgIGxldCBtb2R1bG8gPSAwO1xuXG4gICAgICAgIG1heFNpbmdsZUVycm9yID0gbWF4U2luZ2xlRXJyb3IgfHwgdGhpcy5TSU5HTEVfQ09ERV9FUlJPUiB8fCAxO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnRlci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgc3VtICs9IGNvdW50ZXJbaV07XG4gICAgICAgICAgICBtb2R1bG8gKz0gY29kZVtpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdW0gPCBtb2R1bG8pIHtcbiAgICAgICAgICAgIHJldHVybiBOdW1iZXIuTUFYX1ZBTFVFO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYmFyV2lkdGggPSBzdW0gLyBtb2R1bG87XG4gICAgICAgIG1heFNpbmdsZUVycm9yICo9IGJhcldpZHRoO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnRlci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY291bnQgPSBjb3VudGVyW2ldO1xuICAgICAgICAgICAgY29uc3Qgc2NhbGVkID0gY29kZVtpXSAqIGJhcldpZHRoO1xuICAgICAgICAgICAgY29uc3Qgc2luZ2xlRXJyb3IgPSBNYXRoLmFicyhjb3VudCAtIHNjYWxlZCkgLyBzY2FsZWQ7XG5cbiAgICAgICAgICAgIGlmIChzaW5nbGVFcnJvciA+IG1heFNpbmdsZUVycm9yKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE51bWJlci5NQVhfVkFMVUU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGVycm9yICs9IHNpbmdsZUVycm9yO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGVycm9yIC8gbW9kdWxvO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfY29ycmVjdEJhcnMoY291bnRlcjogQXJyYXk8bnVtYmVyPiwgY29ycmVjdGlvbjogbnVtYmVyLCBpbmRpY2VzOiBBcnJheTxudW1iZXI+KSB7XG4gICAgICAgIGxldCBsZW5ndGggPSBpbmRpY2VzLmxlbmd0aDtcbiAgICAgICAgbGV0IHRtcCA9IDA7XG5cbiAgICAgICAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgICAgICAgICB0bXAgPSBjb3VudGVyW2luZGljZXNbbGVuZ3RoXV0gKiAoMSAtICgoMSAtIGNvcnJlY3Rpb24pIC8gMikpO1xuICAgICAgICAgICAgaWYgKHRtcCA+IDEpIHtcbiAgICAgICAgICAgICAgICBjb3VudGVyW2luZGljZXNbbGVuZ3RoXV0gPSB0bXA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZWNvZGVQYXR0ZXJuKHBhdHRlcm46IEFycmF5PG51bWJlcj4pOiBCYXJjb2RlIHtcbiAgICAgICAgdGhpcy5fcm93ID0gcGF0dGVybjtcbiAgICAgICAgbGV0IHJlc3VsdCA9IHRoaXMuZGVjb2RlKCk7XG5cbiAgICAgICAgaWYgKHJlc3VsdCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5fcm93LnJldmVyc2UoKTtcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZGVjb2RlKCk7XG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmRpcmVjdGlvbiA9IEJhcmNvZGVEaXJlY3Rpb24uUmV2ZXJzZTtcbiAgICAgICAgICAgICAgICByZXN1bHQuc3RhcnQgPSB0aGlzLl9yb3cubGVuZ3RoIC0gcmVzdWx0LnN0YXJ0O1xuICAgICAgICAgICAgICAgIHJlc3VsdC5lbmQgPSB0aGlzLl9yb3cubGVuZ3RoIC0gcmVzdWx0LmVuZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdC5kaXJlY3Rpb24gPSBCYXJjb2RlRGlyZWN0aW9uLkZvcndhcmQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICByZXN1bHQuZm9ybWF0ID0gdGhpcy5GT1JNQVQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIF9maWxsQ291bnRlcnMob2Zmc2V0OiBudW1iZXIsIGVuZDogbnVtYmVyLCBpc1doaXRlOiAwIHwgMSk6IEFycmF5PG51bWJlcj4ge1xuICAgICAgICBjb25zdCBjb3VudGVycyA9IG5ldyBBcnJheTxudW1iZXI+KCk7XG4gICAgICAgIGxldCBjb3VudGVyUG9zID0gMDtcblxuICAgICAgICBjb3VudGVyc1tjb3VudGVyUG9zXSA9IDA7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IG9mZnNldDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fcm93W2ldIF4gaXNXaGl0ZSkge1xuICAgICAgICAgICAgICAgIGNvdW50ZXJzW2NvdW50ZXJQb3NdKys7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvdW50ZXJQb3MrKztcbiAgICAgICAgICAgICAgICBjb3VudGVyc1tjb3VudGVyUG9zXSA9IDE7XG4gICAgICAgICAgICAgICAgaXNXaGl0ZSA9IGlzV2hpdGUgPyAwIDogMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb3VudGVycztcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX3RvQ291bnRlcnMoc3RhcnQ6IG51bWJlciwgY291bnRlcnM6IFVpbnQxNkFycmF5KTogVWludDE2QXJyYXkge1xuICAgICAgICBjb25zdCBudW1Db3VudGVycyA9IGNvdW50ZXJzLmxlbmd0aDtcbiAgICAgICAgY29uc3QgZW5kID0gdGhpcy5fcm93Lmxlbmd0aDtcbiAgICAgICAgbGV0IGlzV2hpdGU6IDAgfCAxID0gdGhpcy5fcm93W3N0YXJ0XSA/IDAgOiAxO1xuICAgICAgICBsZXQgY291bnRlclBvcyA9IDA7XG5cbiAgICAgICAgY291bnRlcnMuZmlsbCgwKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3Jvd1tpXSBeIGlzV2hpdGUpIHtcbiAgICAgICAgICAgICAgICBjb3VudGVyc1tjb3VudGVyUG9zXSsrO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb3VudGVyUG9zKys7XG4gICAgICAgICAgICAgICAgaWYgKGNvdW50ZXJQb3MgPT09IG51bUNvdW50ZXJzKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXJzW2NvdW50ZXJQb3NdID0gMTtcbiAgICAgICAgICAgICAgICAgICAgaXNXaGl0ZSA9IGlzV2hpdGUgPyAwIDogMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY291bnRlcnM7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQmFyY29kZSwgQmFyY29kZUluZm8sIEJhcmNvZGVSZWFkZXIgfSBmcm9tICcuL2JhcmNvZGUtcmVhZGVyJztcblxuY29uc3QgQUxQSEFCRVRIX1NUUklORyA9ICcwMTIzNDU2Nzg5LSQ6Ly4rQUJDRCc7XG5jb25zdCBBTFBIQUJFVCA9IFsuLi5BTFBIQUJFVEhfU1RSSU5HXS5tYXAoY2hhciA9PiBjaGFyLmNoYXJDb2RlQXQoMCkpO1xuLy8gY29uc3QgQUxQSEFCRVQgPSBbNDgsIDQ5LCA1MCwgNTEsIDUyLCA1MywgNTQsIDU1LCA1NiwgNTcsIDQ1LCAzNiwgNTgsIDQ3LCA0NiwgNDMsIDY1LCA2NiwgNjcsIDY4XTtcbmNvbnN0IENIQVJBQ1RFUl9FTkNPRElOR1MgPSBbMHgwMDMsIDB4MDA2LCAweDAwOSwgMHgwNjAsIDB4MDEyLCAweDA0MiwgMHgwMjEsIDB4MDI0LCAweDAzMCwgMHgwNDgsIDB4MDBjLCAweDAxOCwgMHgwNDUsXG4gICAgMHgwNTEsIDB4MDU0LCAweDAxNSwgMHgwMUEsIDB4MDI5LCAweDAwQiwgMHgwMEVdO1xuY29uc3QgU1RBUlRfRU5EID0gWzB4MDFBLCAweDAyOSwgMHgwMEIsIDB4MDBFXTtcbmNvbnN0IE1JTl9FTkNPREVEX0NIQVJTID0gNDtcbmNvbnN0IE1BWF9BQ0NFUFRBQkxFID0gMi4wO1xuY29uc3QgUEFERElORyA9IDEuNTtcblxuaW50ZXJmYWNlIFRocmVzaG9sZCB7XG4gICAgc3BhY2U6IHtcbiAgICAgICAgbmFycm93OiB7XG4gICAgICAgICAgICBzaXplOiBudW1iZXI7XG4gICAgICAgICAgICBjb3VudHM6IG51bWJlcjtcbiAgICAgICAgICAgIG1pbjogbnVtYmVyO1xuICAgICAgICAgICAgbWF4OiBudW1iZXI7XG4gICAgICAgIH07XG4gICAgICAgIHdpZGU6IHtcbiAgICAgICAgICAgIHNpemU6IG51bWJlcjtcbiAgICAgICAgICAgIGNvdW50czogbnVtYmVyO1xuICAgICAgICAgICAgbWluOiBudW1iZXI7XG4gICAgICAgICAgICBtYXg6IG51bWJlcjtcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIGJhcjoge1xuICAgICAgICBuYXJyb3c6IHtcbiAgICAgICAgICAgIHNpemU6IG51bWJlcjtcbiAgICAgICAgICAgIGNvdW50czogbnVtYmVyO1xuICAgICAgICAgICAgbWluOiBudW1iZXI7XG4gICAgICAgICAgICBtYXg6IG51bWJlcjtcbiAgICAgICAgfTtcbiAgICAgICAgd2lkZToge1xuICAgICAgICAgICAgc2l6ZTogbnVtYmVyO1xuICAgICAgICAgICAgY291bnRzOiBudW1iZXI7XG4gICAgICAgICAgICBtaW46IG51bWJlcjtcbiAgICAgICAgICAgIG1heDogbnVtYmVyO1xuICAgICAgICB9O1xuICAgIH07XG59XG5cbmV4cG9ydCBjbGFzcyBDb2RhYmFyUmVhZGVyIGV4dGVuZHMgQmFyY29kZVJlYWRlciB7XG4gICAgcHJpdmF0ZSBfY291bnRlcnM6IEFycmF5PG51bWJlcj47XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLl9mb3JtYXQgPSAnY29kYWJhcic7XG4gICAgICAgIHRoaXMuX2NvdW50ZXJzID0gW107XG4gICAgfVxuXG4gICAgZGVjb2RlKCk6IEJhcmNvZGUge1xuICAgICAgICB0aGlzLl9jb3VudGVycyA9IHRoaXMuX2ZpbGxDb3VudGVycyh0aGlzLl9uZXh0VW5zZXQodGhpcy5fcm93KSwgdGhpcy5fcm93Lmxlbmd0aCwgMSk7XG5cbiAgICAgICAgY29uc3Qgc3RhcnQgPSB0aGlzLl9maW5kU3RhcnQoKTtcbiAgICAgICAgaWYgKCFzdGFydCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xuICAgICAgICBsZXQgbmV4dFN0YXJ0ID0gc3RhcnQuc3RhcnRDb3VudGVyO1xuICAgICAgICBsZXQgcGF0dGVybjogbnVtYmVyO1xuXG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIHBhdHRlcm4gPSB0aGlzLl90b1BhdHRlcm4obmV4dFN0YXJ0KTtcbiAgICAgICAgICAgIGlmIChwYXR0ZXJuIDwgMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZGVjb2RlZENoYXIgPSB0aGlzLl9wYXR0ZXJuVG9DaGFyKHBhdHRlcm4pO1xuICAgICAgICAgICAgaWYgKGRlY29kZWRDaGFyID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaChkZWNvZGVkQ2hhcik7XG4gICAgICAgICAgICBuZXh0U3RhcnQgKz0gODtcbiAgICAgICAgICAgIGlmIChyZXN1bHQubGVuZ3RoID4gMSAmJiBTVEFSVF9FTkQuc29tZShjb2RlID0+IGNvZGUgPT09IHBhdHRlcm4pKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gd2hpbGUgKG5leHRTdGFydCA8IHRoaXMuX2NvdW50ZXJzLmxlbmd0aCk7XG5cbiAgICAgICAgLy8gdmVyaWZ5IGVuZFxuICAgICAgICBpZiAoKHJlc3VsdC5sZW5ndGggLSAyKSA8IE1JTl9FTkNPREVEX0NIQVJTIHx8ICFTVEFSVF9FTkQuc29tZShjb2RlID0+IGNvZGUgPT09IHBhdHRlcm4pKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHZlcmlmeSBlbmQgd2hpdGUgc3BhY2VcbiAgICAgICAgaWYgKCF0aGlzLl92ZXJpZnlXaGl0ZXNwYWNlKHN0YXJ0LnN0YXJ0Q291bnRlciwgbmV4dFN0YXJ0IC0gOCkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLl92YWxpZGF0ZVJlc3VsdChyZXN1bHQsIHN0YXJ0LnN0YXJ0Q291bnRlcikpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgbmV4dFN0YXJ0ID0gbmV4dFN0YXJ0ID4gdGhpcy5fY291bnRlcnMubGVuZ3RoID8gdGhpcy5fY291bnRlcnMubGVuZ3RoIDogbmV4dFN0YXJ0O1xuICAgICAgICBjb25zdCBlbmQgPSBzdGFydC5zdGFydCArIHRoaXMuX3N1bUNvdW50ZXJzKHN0YXJ0LnN0YXJ0Q291bnRlciwgbmV4dFN0YXJ0IC0gOCk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvZGU6IHJlc3VsdC5qb2luKCcnKSxcbiAgICAgICAgICAgIHN0YXJ0OiBzdGFydC5zdGFydCxcbiAgICAgICAgICAgIGVuZCxcbiAgICAgICAgICAgIHN0YXJ0SW5mbzogc3RhcnQsXG4gICAgICAgICAgICBkZWNvZGVkQ29kZXM6IHJlc3VsdFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfdmVyaWZ5V2hpdGVzcGFjZShzdGFydENvdW50ZXI6IG51bWJlciwgZW5kQ291bnRlcjogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICgoc3RhcnRDb3VudGVyIC0gMSA8PSAwKVxuICAgICAgICAgICAgfHwgdGhpcy5fY291bnRlcnNbc3RhcnRDb3VudGVyIC0gMV0gPj0gKHRoaXMuX2NhbGN1bGF0ZVBhdHRlcm5MZW5ndGgoc3RhcnRDb3VudGVyKSAvIDIuMCkpIHtcbiAgICAgICAgICAgIGlmICgoZW5kQ291bnRlciArIDggPj0gdGhpcy5fY291bnRlcnMubGVuZ3RoKVxuICAgICAgICAgICAgICAgIHx8IHRoaXMuX2NvdW50ZXJzW2VuZENvdW50ZXIgKyA3XSA+PSAodGhpcy5fY2FsY3VsYXRlUGF0dGVybkxlbmd0aChlbmRDb3VudGVyKSAvIDIuMCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9jYWxjdWxhdGVQYXR0ZXJuTGVuZ3RoKG9mZnNldDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgbGV0IHN1bSA9IDA7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IG9mZnNldDsgaSA8IG9mZnNldCArIDc7IGkrKykge1xuICAgICAgICAgICAgc3VtICs9IHRoaXMuX2NvdW50ZXJzW2ldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1bTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF90aHJlc2hvbGRSZXN1bHRQYXR0ZXJuKHJlc3VsdDogUmVhZG9ubHlBcnJheTxzdHJpbmc+LCBzdGFydENvdW50ZXI6IG51bWJlcik6IFRocmVzaG9sZCB7XG4gICAgICAgIGNvbnN0IGNhdGVnb3JpemF0aW9uOiBUaHJlc2hvbGQgPSB7XG4gICAgICAgICAgICBzcGFjZToge1xuICAgICAgICAgICAgICAgIG5hcnJvdzogeyBzaXplOiAwLCBjb3VudHM6IDAsIG1pbjogMCwgbWF4OiBOdW1iZXIuTUFYX1ZBTFVFIH0sXG4gICAgICAgICAgICAgICAgd2lkZTogeyBzaXplOiAwLCBjb3VudHM6IDAsIG1pbjogMCwgbWF4OiBOdW1iZXIuTUFYX1ZBTFVFIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiYXI6IHtcbiAgICAgICAgICAgICAgICBuYXJyb3c6IHsgc2l6ZTogMCwgY291bnRzOiAwLCBtaW46IDAsIG1heDogTnVtYmVyLk1BWF9WQUxVRSB9LFxuICAgICAgICAgICAgICAgIHdpZGU6IHsgc2l6ZTogMCwgY291bnRzOiAwLCBtaW46IDAsIG1heDogTnVtYmVyLk1BWF9WQUxVRSB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGxldCBwb3MgPSBzdGFydENvdW50ZXI7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBwYXR0ZXJuID0gdGhpcy5fY2hhclRvUGF0dGVybihyZXN1bHRbaV0pO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gNjsgaiA+PSAwOyBqLS0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBraW5kID0gKGogJiAxKSA9PT0gMiA/IGNhdGVnb3JpemF0aW9uLmJhciA6IGNhdGVnb3JpemF0aW9uLnNwYWNlO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhdCA9IChwYXR0ZXJuICYgMSkgPT09IDEgPyBraW5kLndpZGUgOiBraW5kLm5hcnJvdztcbiAgICAgICAgICAgICAgICBjYXQuc2l6ZSArPSB0aGlzLl9jb3VudGVyc1twb3MgKyBqXTtcbiAgICAgICAgICAgICAgICBjYXQuY291bnRzKys7XG4gICAgICAgICAgICAgICAgcGF0dGVybiA+Pj0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBvcyArPSA4O1xuICAgICAgICB9XG5cbiAgICAgICAgWydzcGFjZScsICdiYXInXS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBjb25zdCBraW5kID0gY2F0ZWdvcml6YXRpb25ba2V5XTtcbiAgICAgICAgICAgIGtpbmQud2lkZS5taW4gPSBNYXRoLmZsb29yKChraW5kLm5hcnJvdy5zaXplIC8ga2luZC5uYXJyb3cuY291bnRzICsga2luZC53aWRlLnNpemUgLyBraW5kLndpZGUuY291bnRzKSAvIDIpO1xuICAgICAgICAgICAga2luZC5uYXJyb3cubWF4ID0gTWF0aC5jZWlsKGtpbmQud2lkZS5taW4pO1xuICAgICAgICAgICAga2luZC53aWRlLm1heCA9IE1hdGguY2VpbCgoa2luZC53aWRlLnNpemUgKiBNQVhfQUNDRVBUQUJMRSArIFBBRERJTkcpIC8ga2luZC53aWRlLmNvdW50cyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBjYXRlZ29yaXphdGlvbjtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9jaGFyVG9QYXR0ZXJuKGNoYXI6IHN0cmluZyk6IG51bWJlciB7XG4gICAgICAgIGNvbnN0IGNoYXJDb2RlID0gY2hhci5jaGFyQ29kZUF0KDApO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQUxQSEFCRVQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChBTFBIQUJFVFtpXSA9PT0gY2hhckNvZGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gQ0hBUkFDVEVSX0VOQ09ESU5HU1tpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAweDA7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfdmFsaWRhdGVSZXN1bHQocmVzdWx0OiBSZWFkb25seUFycmF5PHN0cmluZz4sIHN0YXJ0Q291bnRlcjogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IHRocmVzaG9sZCA9IHRoaXMuX3RocmVzaG9sZFJlc3VsdFBhdHRlcm4ocmVzdWx0LCBzdGFydENvdW50ZXIpO1xuICAgICAgICBsZXQgcG9zID0gc3RhcnRDb3VudGVyO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzdWx0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcGF0dGVybiA9IHRoaXMuX2NoYXJUb1BhdHRlcm4ocmVzdWx0W2ldKTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDY7IGogPj0gMDsgai0tKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qga2luZCA9IChqICYgMSkgPT09IDAgPyB0aHJlc2hvbGQuYmFyIDogdGhyZXNob2xkLnNwYWNlO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhdCA9IChwYXR0ZXJuICYgMSkgPT09IDEgPyBraW5kLndpZGUgOiBraW5kLm5hcnJvdztcbiAgICAgICAgICAgICAgICBjb25zdCBzaXplID0gdGhpcy5fY291bnRlcnNbcG9zICsgal07XG4gICAgICAgICAgICAgICAgaWYgKHNpemUgPCBjYXQubWluIHx8IHNpemUgPiBjYXQubWF4KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0dGVybiA+Pj0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBvcyArPSA4O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfcGF0dGVyblRvQ2hhcihwYXR0ZXJuOiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IENIQVJBQ1RFUl9FTkNPRElOR1MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChDSEFSQUNURVJfRU5DT0RJTkdTW2ldID09PSBwYXR0ZXJuKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoQUxQSEFCRVRbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfY29tcHV0ZUFsdGVybmF0aW5nVGhyZXNob2xkKG9mZnNldDogbnVtYmVyLCBlbmQ6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIGxldCBtaW4gPSBOdW1iZXIuTUFYX1ZBTFVFO1xuICAgICAgICBsZXQgbWF4ID0gMDtcblxuICAgICAgICBmb3IgKGxldCBpID0gb2Zmc2V0OyBpIDwgZW5kOyBpICs9IDIpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvdW50ZXIgPSB0aGlzLl9jb3VudGVyc1tpXTtcbiAgICAgICAgICAgIGlmIChjb3VudGVyID4gbWF4KSB7XG4gICAgICAgICAgICAgICAgbWF4ID0gY291bnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb3VudGVyIDwgbWluKSB7XG4gICAgICAgICAgICAgICAgbWluID0gY291bnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoKG1pbiArIG1heCkgLyAyLjApIHwgMDtcbiAgICB9XG5cbiAgICBwcml2YXRlIF90b1BhdHRlcm4ob2Zmc2V0OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICBjb25zdCBudW1Db3VudGVycyA9IDc7XG4gICAgICAgIGNvbnN0IGVuZCA9IG9mZnNldCArIG51bUNvdW50ZXJzO1xuXG4gICAgICAgIGlmIChlbmQgPiB0aGlzLl9jb3VudGVycy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGJhclRocmVzaG9sZCA9IHRoaXMuX2NvbXB1dGVBbHRlcm5hdGluZ1RocmVzaG9sZChvZmZzZXQsIGVuZCk7XG4gICAgICAgIGNvbnN0IHNwYWNlVGhyZXNob2xkID0gdGhpcy5fY29tcHV0ZUFsdGVybmF0aW5nVGhyZXNob2xkKG9mZnNldCArIDEsIGVuZCk7XG4gICAgICAgIGxldCBiaXRtYXNrID0gMSA8PCAobnVtQ291bnRlcnMgLSAxKTtcbiAgICAgICAgbGV0IHBhdHRlcm4gPSAwO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtQ291bnRlcnM7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgdGhyZXNob2xkID0gKGkgJiAxKSA9PT0gMCA/IGJhclRocmVzaG9sZCA6IHNwYWNlVGhyZXNob2xkO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2NvdW50ZXJzW29mZnNldCArIGldID4gdGhyZXNob2xkKSB7XG4gICAgICAgICAgICAgICAgcGF0dGVybiB8PSBiaXRtYXNrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYml0bWFzayA+Pj0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYXR0ZXJuO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3N1bUNvdW50ZXJzKHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgbGV0IHN1bSA9IDA7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcbiAgICAgICAgICAgIHN1bSArPSB0aGlzLl9jb3VudGVyc1tpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdW07XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9maW5kU3RhcnQoKTogQmFyY29kZUluZm8ge1xuICAgICAgICBsZXQgc3RhcnQgPSB0aGlzLl9uZXh0VW5zZXQodGhpcy5fcm93KTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRoaXMuX2NvdW50ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBwYXR0ZXJuID0gdGhpcy5fdG9QYXR0ZXJuKGkpO1xuICAgICAgICAgICAgaWYgKHBhdHRlcm4gIT09IC0xICYmIFNUQVJUX0VORC5zb21lKGNvZGUgPT4gY29kZSA9PT0gcGF0dGVybikpIHtcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBMb29rIGZvciB3aGl0ZXNwYWNlIGFoZWFkXG4gICAgICAgICAgICAgICAgc3RhcnQgKz0gdGhpcy5fc3VtQ291bnRlcnMoMCwgaSk7XG4gICAgICAgICAgICAgICAgY29uc3QgZW5kID0gc3RhcnQgKyB0aGlzLl9zdW1Db3VudGVycyhpLCBpICsgOCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQsXG4gICAgICAgICAgICAgICAgICAgIGVuZCxcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRDb3VudGVyOiBpLFxuICAgICAgICAgICAgICAgICAgICBlbmRDb3VudGVyOiBpICsgOFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBCYXJjb2RlLCBCYXJjb2RlQ29ycmVjdGlvbiwgQmFyY29kZUluZm8sIEJhcmNvZGVSZWFkZXIgfSBmcm9tICcuL2JhcmNvZGUtcmVhZGVyJztcblxuY29uc3QgQ09ERV9TSElGVCA9IDk4O1xuY29uc3QgQ09ERV9DID0gOTk7XG5jb25zdCBDT0RFX0IgPSAxMDA7XG5jb25zdCBDT0RFX0EgPSAxMDE7XG5jb25zdCBTVEFSVF9DT0RFX0EgPSAxMDM7XG5jb25zdCBTVEFSVF9DT0RFX0IgPSAxMDQ7XG5jb25zdCBTVEFSVF9DT0RFX0MgPSAxMDU7XG5jb25zdCBTVE9QX0NPREUgPSAxMDY7XG5jb25zdCBDT0RFX1BBVFRFUk4gPSBbXG4gICAgWzIsIDEsIDIsIDIsIDIsIDJdLFxuICAgIFsyLCAyLCAyLCAxLCAyLCAyXSxcbiAgICBbMiwgMiwgMiwgMiwgMiwgMV0sXG4gICAgWzEsIDIsIDEsIDIsIDIsIDNdLFxuICAgIFsxLCAyLCAxLCAzLCAyLCAyXSxcbiAgICBbMSwgMywgMSwgMiwgMiwgMl0sXG4gICAgWzEsIDIsIDIsIDIsIDEsIDNdLFxuICAgIFsxLCAyLCAyLCAzLCAxLCAyXSxcbiAgICBbMSwgMywgMiwgMiwgMSwgMl0sXG4gICAgWzIsIDIsIDEsIDIsIDEsIDNdLFxuICAgIFsyLCAyLCAxLCAzLCAxLCAyXSxcbiAgICBbMiwgMywgMSwgMiwgMSwgMl0sXG4gICAgWzEsIDEsIDIsIDIsIDMsIDJdLFxuICAgIFsxLCAyLCAyLCAxLCAzLCAyXSxcbiAgICBbMSwgMiwgMiwgMiwgMywgMV0sXG4gICAgWzEsIDEsIDMsIDIsIDIsIDJdLFxuICAgIFsxLCAyLCAzLCAxLCAyLCAyXSxcbiAgICBbMSwgMiwgMywgMiwgMiwgMV0sXG4gICAgWzIsIDIsIDMsIDIsIDEsIDFdLFxuICAgIFsyLCAyLCAxLCAxLCAzLCAyXSxcbiAgICBbMiwgMiwgMSwgMiwgMywgMV0sXG4gICAgWzIsIDEsIDMsIDIsIDEsIDJdLFxuICAgIFsyLCAyLCAzLCAxLCAxLCAyXSxcbiAgICBbMywgMSwgMiwgMSwgMywgMV0sXG4gICAgWzMsIDEsIDEsIDIsIDIsIDJdLFxuICAgIFszLCAyLCAxLCAxLCAyLCAyXSxcbiAgICBbMywgMiwgMSwgMiwgMiwgMV0sXG4gICAgWzMsIDEsIDIsIDIsIDEsIDJdLFxuICAgIFszLCAyLCAyLCAxLCAxLCAyXSxcbiAgICBbMywgMiwgMiwgMiwgMSwgMV0sXG4gICAgWzIsIDEsIDIsIDEsIDIsIDNdLFxuICAgIFsyLCAxLCAyLCAzLCAyLCAxXSxcbiAgICBbMiwgMywgMiwgMSwgMiwgMV0sXG4gICAgWzEsIDEsIDEsIDMsIDIsIDNdLFxuICAgIFsxLCAzLCAxLCAxLCAyLCAzXSxcbiAgICBbMSwgMywgMSwgMywgMiwgMV0sXG4gICAgWzEsIDEsIDIsIDMsIDEsIDNdLFxuICAgIFsxLCAzLCAyLCAxLCAxLCAzXSxcbiAgICBbMSwgMywgMiwgMywgMSwgMV0sXG4gICAgWzIsIDEsIDEsIDMsIDEsIDNdLFxuICAgIFsyLCAzLCAxLCAxLCAxLCAzXSxcbiAgICBbMiwgMywgMSwgMywgMSwgMV0sXG4gICAgWzEsIDEsIDIsIDEsIDMsIDNdLFxuICAgIFsxLCAxLCAyLCAzLCAzLCAxXSxcbiAgICBbMSwgMywgMiwgMSwgMywgMV0sXG4gICAgWzEsIDEsIDMsIDEsIDIsIDNdLFxuICAgIFsxLCAxLCAzLCAzLCAyLCAxXSxcbiAgICBbMSwgMywgMywgMSwgMiwgMV0sXG4gICAgWzMsIDEsIDMsIDEsIDIsIDFdLFxuICAgIFsyLCAxLCAxLCAzLCAzLCAxXSxcbiAgICBbMiwgMywgMSwgMSwgMywgMV0sXG4gICAgWzIsIDEsIDMsIDEsIDEsIDNdLFxuICAgIFsyLCAxLCAzLCAzLCAxLCAxXSxcbiAgICBbMiwgMSwgMywgMSwgMywgMV0sXG4gICAgWzMsIDEsIDEsIDEsIDIsIDNdLFxuICAgIFszLCAxLCAxLCAzLCAyLCAxXSxcbiAgICBbMywgMywgMSwgMSwgMiwgMV0sXG4gICAgWzMsIDEsIDIsIDEsIDEsIDNdLFxuICAgIFszLCAxLCAyLCAzLCAxLCAxXSxcbiAgICBbMywgMywgMiwgMSwgMSwgMV0sXG4gICAgWzMsIDEsIDQsIDEsIDEsIDFdLFxuICAgIFsyLCAyLCAxLCA0LCAxLCAxXSxcbiAgICBbNCwgMywgMSwgMSwgMSwgMV0sXG4gICAgWzEsIDEsIDEsIDIsIDIsIDRdLFxuICAgIFsxLCAxLCAxLCA0LCAyLCAyXSxcbiAgICBbMSwgMiwgMSwgMSwgMiwgNF0sXG4gICAgWzEsIDIsIDEsIDQsIDIsIDFdLFxuICAgIFsxLCA0LCAxLCAxLCAyLCAyXSxcbiAgICBbMSwgNCwgMSwgMiwgMiwgMV0sXG4gICAgWzEsIDEsIDIsIDIsIDEsIDRdLFxuICAgIFsxLCAxLCAyLCA0LCAxLCAyXSxcbiAgICBbMSwgMiwgMiwgMSwgMSwgNF0sXG4gICAgWzEsIDIsIDIsIDQsIDEsIDFdLFxuICAgIFsxLCA0LCAyLCAxLCAxLCAyXSxcbiAgICBbMSwgNCwgMiwgMiwgMSwgMV0sXG4gICAgWzIsIDQsIDEsIDIsIDEsIDFdLFxuICAgIFsyLCAyLCAxLCAxLCAxLCA0XSxcbiAgICBbNCwgMSwgMywgMSwgMSwgMV0sXG4gICAgWzIsIDQsIDEsIDEsIDEsIDJdLFxuICAgIFsxLCAzLCA0LCAxLCAxLCAxXSxcbiAgICBbMSwgMSwgMSwgMiwgNCwgMl0sXG4gICAgWzEsIDIsIDEsIDEsIDQsIDJdLFxuICAgIFsxLCAyLCAxLCAyLCA0LCAxXSxcbiAgICBbMSwgMSwgNCwgMiwgMSwgMl0sXG4gICAgWzEsIDIsIDQsIDEsIDEsIDJdLFxuICAgIFsxLCAyLCA0LCAyLCAxLCAxXSxcbiAgICBbNCwgMSwgMSwgMiwgMSwgMl0sXG4gICAgWzQsIDIsIDEsIDEsIDEsIDJdLFxuICAgIFs0LCAyLCAxLCAyLCAxLCAxXSxcbiAgICBbMiwgMSwgMiwgMSwgNCwgMV0sXG4gICAgWzIsIDEsIDQsIDEsIDIsIDFdLFxuICAgIFs0LCAxLCAyLCAxLCAyLCAxXSxcbiAgICBbMSwgMSwgMSwgMSwgNCwgM10sXG4gICAgWzEsIDEsIDEsIDMsIDQsIDFdLFxuICAgIFsxLCAzLCAxLCAxLCA0LCAxXSxcbiAgICBbMSwgMSwgNCwgMSwgMSwgM10sXG4gICAgWzEsIDEsIDQsIDMsIDEsIDFdLFxuICAgIFs0LCAxLCAxLCAxLCAxLCAzXSxcbiAgICBbNCwgMSwgMSwgMywgMSwgMV0sXG4gICAgWzEsIDEsIDMsIDEsIDQsIDFdLFxuICAgIFsxLCAxLCA0LCAxLCAzLCAxXSxcbiAgICBbMywgMSwgMSwgMSwgNCwgMV0sXG4gICAgWzQsIDEsIDEsIDEsIDMsIDFdLFxuICAgIFsyLCAxLCAxLCA0LCAxLCAyXSxcbiAgICBbMiwgMSwgMSwgMiwgMSwgNF0sXG4gICAgWzIsIDEsIDEsIDIsIDMsIDJdLFxuICAgIFsyLCAzLCAzLCAxLCAxLCAxLCAyXVxuXTtcbmNvbnN0IE1PRFVMRV9JTkRJQ0VTID0geyBiYXI6IFswLCAyLCA0XSwgc3BhY2U6IFsxLCAzLCA1XSB9O1xuXG5leHBvcnQgY2xhc3MgQ29kZTEyOFJlYWRlciBleHRlbmRzIEJhcmNvZGVSZWFkZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuX2Zvcm1hdCA9ICdjb2RlXzEyOCc7XG4gICAgICAgIHRoaXMuX3NpbmdsZUNvZGVFcnJvciA9IDAuNjQ7XG4gICAgICAgIHRoaXMuX2F2ZXJhZ2VDb2RlRXJyb3IgPSAwLjMwO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZGVjb2RlQ29kZShzdGFydDogbnVtYmVyLCBjb3JyZWN0aW9uOiBCYXJjb2RlQ29ycmVjdGlvbik6IEJhcmNvZGVJbmZvIHtcbiAgICAgICAgY29uc3QgY291bnRlciA9IFswLCAwLCAwLCAwLCAwLCAwXTtcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gc3RhcnQ7XG4gICAgICAgIGNvbnN0IGJlc3RNYXRjaDogQmFyY29kZUluZm8gPSB7XG4gICAgICAgICAgICBlcnJvcjogTnVtYmVyLk1BWF9WQUxVRSxcbiAgICAgICAgICAgIGNvZGU6IC0xLFxuICAgICAgICAgICAgc3RhcnQ6IHN0YXJ0LFxuICAgICAgICAgICAgZW5kOiBzdGFydCxcbiAgICAgICAgICAgIGNvcnJlY3Rpb246IHtcbiAgICAgICAgICAgICAgICBiYXI6IDEsXG4gICAgICAgICAgICAgICAgc3BhY2U6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgZXBzaWxvbiA9IHRoaXMuQVZFUkFHRV9DT0RFX0VSUk9SO1xuICAgICAgICBsZXQgaXNXaGl0ZTogMCB8IDEgPSB0aGlzLl9yb3dbb2Zmc2V0XSA/IDAgOiAxO1xuICAgICAgICBsZXQgY291bnRlclBvcyA9IDA7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IG9mZnNldDsgaSA8IHRoaXMuX3Jvdy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3Jvd1tpXSBeIGlzV2hpdGUpIHtcbiAgICAgICAgICAgICAgICBjb3VudGVyW2NvdW50ZXJQb3NdKys7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChjb3VudGVyUG9zID09PSBjb3VudGVyLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvcnJlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NvcnJlY3QoY291bnRlciwgY29ycmVjdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBjb2RlID0gMDsgY29kZSA8IENPREVfUEFUVEVSTi5sZW5ndGg7IGNvZGUrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXJyb3IgPSB0aGlzLl9tYXRjaFBhdHRlcm4oY291bnRlciwgQ09ERV9QQVRURVJOW2NvZGVdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnJvciA8IGJlc3RNYXRjaC5lcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlc3RNYXRjaC5jb2RlID0gY29kZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZXN0TWF0Y2guZXJyb3IgPSBlcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGJlc3RNYXRjaC5lbmQgPSBpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChiZXN0TWF0Y2guY29kZSA9PT0gLTEgfHwgYmVzdE1hdGNoLmVycm9yID4gZXBzaWxvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBleHBlY3RlZCA9IENPREVfUEFUVEVSTltiZXN0TWF0Y2guY29kZV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChleHBlY3RlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmVzdE1hdGNoLmNvcnJlY3Rpb24uYmFyID0gdGhpcy5fY2FsY3VsYXRlQ29ycmVjdGlvbihleHBlY3RlZCwgY291bnRlciwgTU9EVUxFX0lORElDRVMuYmFyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlc3RNYXRjaC5jb3JyZWN0aW9uLnNwYWNlID0gdGhpcy5fY2FsY3VsYXRlQ29ycmVjdGlvbihleHBlY3RlZCwgY291bnRlciwgTU9EVUxFX0lORElDRVMuc3BhY2UpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJlc3RNYXRjaDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb3VudGVyUG9zKys7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY291bnRlcltjb3VudGVyUG9zXSA9IDE7XG4gICAgICAgICAgICAgICAgaXNXaGl0ZSA9IGlzV2hpdGUgPyAwIDogMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2NvcnJlY3QoY291bnRlcjogQXJyYXk8bnVtYmVyPiwgY29ycmVjdGlvbjogQmFyY29kZUNvcnJlY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fY29ycmVjdEJhcnMoY291bnRlciwgY29ycmVjdGlvbi5iYXIsIE1PRFVMRV9JTkRJQ0VTLmJhcik7XG4gICAgICAgIHRoaXMuX2NvcnJlY3RCYXJzKGNvdW50ZXIsIGNvcnJlY3Rpb24uc3BhY2UsIE1PRFVMRV9JTkRJQ0VTLnNwYWNlKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2ZpbmRTdGFydCgpIHtcbiAgICAgICAgY29uc3QgY291bnRlciA9IFswLCAwLCAwLCAwLCAwLCAwXTtcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gdGhpcy5fbmV4dFNldCh0aGlzLl9yb3cpO1xuICAgICAgICBjb25zdCBiZXN0TWF0Y2ggPSB7XG4gICAgICAgICAgICBlcnJvcjogTnVtYmVyLk1BWF9WQUxVRSxcbiAgICAgICAgICAgIGNvZGU6IC0xLFxuICAgICAgICAgICAgc3RhcnQ6IDAsXG4gICAgICAgICAgICBlbmQ6IDAsXG4gICAgICAgICAgICBjb3JyZWN0aW9uOiB7XG4gICAgICAgICAgICAgICAgYmFyOiAxLFxuICAgICAgICAgICAgICAgIHNwYWNlOiAxXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGVwc2lsb24gPSB0aGlzLkFWRVJBR0VfQ09ERV9FUlJPUjtcbiAgICAgICAgbGV0IGlzV2hpdGU6IDAgfCAxID0gMDtcbiAgICAgICAgbGV0IGNvdW50ZXJQb3MgPSAwO1xuICAgICAgICBsZXQgc3VtOiBudW1iZXI7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IG9mZnNldDsgaSA8IHRoaXMuX3Jvdy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3Jvd1tpXSBeIGlzV2hpdGUpIHtcbiAgICAgICAgICAgICAgICBjb3VudGVyW2NvdW50ZXJQb3NdKys7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChjb3VudGVyUG9zID09PSBjb3VudGVyLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgc3VtID0gMDtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb3VudGVyLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdW0gKz0gY291bnRlcltqXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBjb2RlID0gU1RBUlRfQ09ERV9BOyBjb2RlIDw9IFNUQVJUX0NPREVfQzsgY29kZSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlcnJvciA9IHRoaXMuX21hdGNoUGF0dGVybihjb3VudGVyLCBDT0RFX1BBVFRFUk5bY29kZV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yIDwgYmVzdE1hdGNoLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVzdE1hdGNoLmNvZGUgPSBjb2RlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlc3RNYXRjaC5lcnJvciA9IGVycm9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChiZXN0TWF0Y2guZXJyb3IgPCBlcHNpbG9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiZXN0TWF0Y2guc3RhcnQgPSBpIC0gc3VtO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmVzdE1hdGNoLmVuZCA9IGk7XG4gICAgICAgICAgICAgICAgICAgICAgICBiZXN0TWF0Y2guY29ycmVjdGlvbi5iYXIgPSB0aGlzLl9jYWxjdWxhdGVDb3JyZWN0aW9uKENPREVfUEFUVEVSTltiZXN0TWF0Y2guY29kZV0sIGNvdW50ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTU9EVUxFX0lORElDRVMuYmFyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlc3RNYXRjaC5jb3JyZWN0aW9uLnNwYWNlID0gdGhpcy5fY2FsY3VsYXRlQ29ycmVjdGlvbihDT0RFX1BBVFRFUk5bYmVzdE1hdGNoLmNvZGVdLCBjb3VudGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1PRFVMRV9JTkRJQ0VTLnNwYWNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBiZXN0TWF0Y2g7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDQ7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY291bnRlcltqXSA9IGNvdW50ZXJbaiArIDJdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXJbNF0gPSAwO1xuICAgICAgICAgICAgICAgICAgICBjb3VudGVyWzVdID0gMDtcbiAgICAgICAgICAgICAgICAgICAgY291bnRlclBvcy0tO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXJQb3MrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY291bnRlcltjb3VudGVyUG9zXSA9IDE7XG4gICAgICAgICAgICAgICAgaXNXaGl0ZSA9IGlzV2hpdGUgPyAwIDogMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGRlY29kZSgpOiBCYXJjb2RlIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEFycmF5PHN0cmluZyB8IG51bWJlcj4oKTtcbiAgICAgICAgY29uc3Qgc3RhcnRJbmZvID0gdGhpcy5fZmluZFN0YXJ0KCk7XG4gICAgICAgIGxldCBjb2RlOiBCYXJjb2RlSW5mbyA9IG51bGw7XG4gICAgICAgIGxldCBkb25lID0gZmFsc2U7XG4gICAgICAgIGxldCBtdWx0aXBsaWVyID0gMDtcbiAgICAgICAgbGV0IGNoZWNrc3VtID0gMDtcbiAgICAgICAgbGV0IGNvZGVzZXQ6IG51bWJlcjtcbiAgICAgICAgbGV0IHJhd1Jlc3VsdCA9IG5ldyBBcnJheTxudW1iZXI+KCk7XG4gICAgICAgIGxldCBkZWNvZGVkQ29kZXMgPSBuZXcgQXJyYXk8QmFyY29kZUluZm8+KCk7XG4gICAgICAgIGxldCBzaGlmdE5leHQgPSBmYWxzZTtcbiAgICAgICAgbGV0IHVuc2hpZnQ6IGJvb2xlYW47XG4gICAgICAgIGxldCByZW1vdmVMYXN0Q2hhcmFjdGVyID0gdHJ1ZTtcblxuICAgICAgICBpZiAoc3RhcnRJbmZvID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb2RlID0ge1xuICAgICAgICAgICAgY29kZTogc3RhcnRJbmZvLmNvZGUsXG4gICAgICAgICAgICBzdGFydDogc3RhcnRJbmZvLnN0YXJ0LFxuICAgICAgICAgICAgZW5kOiBzdGFydEluZm8uZW5kLFxuICAgICAgICAgICAgY29ycmVjdGlvbjoge1xuICAgICAgICAgICAgICAgIGJhcjogc3RhcnRJbmZvLmNvcnJlY3Rpb24uYmFyLFxuICAgICAgICAgICAgICAgIHNwYWNlOiBzdGFydEluZm8uY29ycmVjdGlvbi5zcGFjZVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBkZWNvZGVkQ29kZXMucHVzaChjb2RlKTtcbiAgICAgICAgY2hlY2tzdW0gPSBjb2RlLmNvZGU7XG5cbiAgICAgICAgc3dpdGNoIChjb2RlLmNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgU1RBUlRfQ09ERV9BOlxuICAgICAgICAgICAgICAgIGNvZGVzZXQgPSBDT0RFX0E7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFNUQVJUX0NPREVfQjpcbiAgICAgICAgICAgICAgICBjb2Rlc2V0ID0gQ09ERV9CO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBTVEFSVF9DT0RFX0M6XG4gICAgICAgICAgICAgICAgY29kZXNldCA9IENPREVfQztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICB3aGlsZSAoIWRvbmUpIHtcbiAgICAgICAgICAgIHVuc2hpZnQgPSBzaGlmdE5leHQ7XG4gICAgICAgICAgICBzaGlmdE5leHQgPSBmYWxzZTtcbiAgICAgICAgICAgIGNvZGUgPSB0aGlzLl9kZWNvZGVDb2RlKGNvZGUuZW5kLCBjb2RlLmNvcnJlY3Rpb24pO1xuICAgICAgICAgICAgaWYgKGNvZGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAoY29kZS5jb2RlICE9PSBTVE9QX0NPREUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlTGFzdENoYXJhY3RlciA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGNvZGUuY29kZSAhPT0gU1RPUF9DT0RFKSB7XG4gICAgICAgICAgICAgICAgICAgIHJhd1Jlc3VsdC5wdXNoKGNvZGUuY29kZSk7XG4gICAgICAgICAgICAgICAgICAgIG11bHRpcGxpZXIrKztcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tzdW0gKz0gbXVsdGlwbGllciAqIGNvZGUuY29kZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGVjb2RlZENvZGVzLnB1c2goY29kZSk7XG5cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGNvZGVzZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBDT0RFX0E6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2RlLmNvZGUgPCA2NCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUoMzIgKyBjb2RlLmNvZGUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY29kZS5jb2RlIDwgOTYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGUuY29kZSAtIDY0KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2RlLmNvZGUgIT09IFNUT1BfQ09ERSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVMYXN0Q2hhcmFjdGVyID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoY29kZS5jb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgQ09ERV9TSElGVDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaWZ0TmV4dCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2Rlc2V0ID0gQ09ERV9CO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgQ09ERV9COlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29kZXNldCA9IENPREVfQjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIENPREVfQzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvZGVzZXQgPSBDT0RFX0M7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBTVE9QX0NPREU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb25lID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgQ09ERV9COiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29kZS5jb2RlIDwgOTYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKDMyICsgY29kZS5jb2RlKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2RlLmNvZGUgIT09IFNUT1BfQ09ERSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVMYXN0Q2hhcmFjdGVyID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoY29kZS5jb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgQ09ERV9TSElGVDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaWZ0TmV4dCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2Rlc2V0ID0gQ09ERV9BO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgQ09ERV9BOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29kZXNldCA9IENPREVfQTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIENPREVfQzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvZGVzZXQgPSBDT0RFX0M7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBTVE9QX0NPREU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb25lID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgQ09ERV9DOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29kZS5jb2RlIDwgMTAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goY29kZS5jb2RlIDwgMTAgPyAnMCcgKyBjb2RlLmNvZGUgOiBjb2RlLmNvZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29kZS5jb2RlICE9PSBTVE9QX0NPREUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlTGFzdENoYXJhY3RlciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGNvZGUuY29kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIENPREVfQTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvZGVzZXQgPSBDT0RFX0E7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBDT0RFX0I6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2Rlc2V0ID0gQ09ERV9CO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgU1RPUF9DT0RFOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9uZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZG9uZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodW5zaGlmdCkge1xuICAgICAgICAgICAgICAgIGNvZGVzZXQgPSBjb2Rlc2V0ID09PSBDT0RFX0EgPyBDT0RFX0IgOiBDT0RFX0E7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29kZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb2RlLmVuZCA9IHRoaXMuX25leHRVbnNldCh0aGlzLl9yb3csIGNvZGUuZW5kKTtcbiAgICAgICAgaWYgKCF0aGlzLl92ZXJpZnlUcmFpbGluZ1doaXRlc3BhY2UoY29kZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY2hlY2tzdW0gLT0gbXVsdGlwbGllciAqIHJhd1Jlc3VsdFtyYXdSZXN1bHQubGVuZ3RoIC0gMV07XG4gICAgICAgIGlmIChjaGVja3N1bSAlIDEwMyAhPT0gcmF3UmVzdWx0W3Jhd1Jlc3VsdC5sZW5ndGggLSAxXSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXJlc3VsdC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcmVtb3ZlIGxhc3QgY29kZSBmcm9tIHJlc3VsdCAoY2hlY2tzdW0pXG4gICAgICAgIGlmIChyZW1vdmVMYXN0Q2hhcmFjdGVyKSB7XG4gICAgICAgICAgICByZXN1bHQuc3BsaWNlKHJlc3VsdC5sZW5ndGggLSAxLCAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb2RlOiByZXN1bHQuam9pbignJyksXG4gICAgICAgICAgICBzdGFydDogc3RhcnRJbmZvLnN0YXJ0LFxuICAgICAgICAgICAgZW5kOiBjb2RlLmVuZCxcbiAgICAgICAgICAgIGNvZGVzZXQsXG4gICAgICAgICAgICBzdGFydEluZm8sXG4gICAgICAgICAgICBkZWNvZGVkQ29kZXMsXG4gICAgICAgICAgICBlbmRJbmZvOiBjb2RlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF92ZXJpZnlUcmFpbGluZ1doaXRlc3BhY2UoZW5kSW5mbzogQmFyY29kZUluZm8pOiBCYXJjb2RlSW5mbyB7XG4gICAgICAgIGNvbnN0IHRyYWlsaW5nV2hpdGVzcGFjZUVuZCA9IGVuZEluZm8uZW5kICsgKGVuZEluZm8uZW5kIC0gZW5kSW5mby5zdGFydCkgLyAyO1xuXG4gICAgICAgIGlmICh0cmFpbGluZ1doaXRlc3BhY2VFbmQgPCB0aGlzLl9yb3cubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fbWF0Y2hSYW5nZShlbmRJbmZvLmVuZCwgdHJhaWxpbmdXaGl0ZXNwYWNlRW5kLCAwKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbmRJbmZvO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfY2FsY3VsYXRlQ29ycmVjdGlvbihcbiAgICAgICAgZXhwZWN0ZWQ6IFJlYWRvbmx5QXJyYXk8bnVtYmVyPixcbiAgICAgICAgbm9ybWFsaXplZDogUmVhZG9ubHlBcnJheTxudW1iZXI+LFxuICAgICAgICBpbmRpY2VzOiBSZWFkb25seUFycmF5PG51bWJlcj5cbiAgICApOiBudW1iZXIge1xuICAgICAgICBsZXQgc3VtTm9ybWFsaXplZCA9IDA7XG4gICAgICAgIGxldCBzdW1FeHBlY3RlZCA9IDA7XG5cbiAgICAgICAgZm9yIChsZXQgbGVuZ3RoID0gaW5kaWNlcy5sZW5ndGg7IGxlbmd0aC0tOykge1xuICAgICAgICAgICAgc3VtRXhwZWN0ZWQgKz0gZXhwZWN0ZWRbaW5kaWNlc1tsZW5ndGhdXTtcbiAgICAgICAgICAgIHN1bU5vcm1hbGl6ZWQgKz0gbm9ybWFsaXplZFtpbmRpY2VzW2xlbmd0aF1dO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1bUV4cGVjdGVkIC8gc3VtTm9ybWFsaXplZDtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBCYXJjb2RlLCBCYXJjb2RlSW5mbywgQmFyY29kZVJlYWRlciB9IGZyb20gJy4vYmFyY29kZS1yZWFkZXInO1xuXG5jb25zdCBBU1RFUklTSyA9IDB4MDk0O1xuY29uc3QgQUxQSEFCRVRIX1NUUklORyA9ICcwMTIzNDU2Nzg5QUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVotLiAqJC8rJSc7XG5jb25zdCBBTFBIQUJFVCA9IG5ldyBVaW50MTZBcnJheShbLi4uQUxQSEFCRVRIX1NUUklOR10ubWFwKGNoYXIgPT4gY2hhci5jaGFyQ29kZUF0KDApKSk7XG4vLyBjb25zdCBBTFBIQUJFVCA9IFs0OCwgNDksIDUwLCA1MSwgNTIsIDUzLCA1NCwgNTUsIDU2LCA1NywgNjUsIDY2LCA2NywgNjgsIDY5LCA3MCwgNzEsIDcyLCA3MywgNzQsIDc1LCA3NiwgNzcsIDc4LFxuLy8gICAgIDc5LCA4MCwgODEsIDgyLCA4MywgODQsIDg1LCA4NiwgODcsIDg4LCA4OSwgOTAsIDQ1LCA0NiwgMzIsIDQyLCAzNiwgNDcsIDQzLCAzN107XG5jb25zdCBDSEFSQUNURVJfRU5DT0RJTkdTID0gbmV3IFVpbnQxNkFycmF5KFtcbiAgICAweDAzNCwgMHgxMjEsIDB4MDYxLCAweDE2MCwgMHgwMzEsIDB4MTMwLCAweDA3MCwgMHgwMjUsIDB4MTI0LCAweDA2NCwgMHgxMDksIDB4MDQ5LCAweDE0OCwgMHgwMTksIDB4MTE4LCAweDA1OCxcbiAgICAweDAwRCwgMHgxMEMsIDB4MDRDLCAweDAxQywgMHgxMDMsIDB4MDQzLCAweDE0MiwgMHgwMTMsIDB4MTEyLCAweDA1MiwgMHgwMDcsIDB4MTA2LCAweDA0NiwgMHgwMTYsIDB4MTgxLCAweDBDMSxcbiAgICAweDFDMCwgMHgwOTEsIDB4MTkwLCAweDBEMCwgMHgwODUsIDB4MTg0LCAweDBDNCwgMHgwOTQsIDB4MEE4LCAweDBBMiwgMHgwOEEsIDB4MDJBXG5dKTtcblxuZXhwb3J0IGNsYXNzIENvZGUzOVJlYWRlciBleHRlbmRzIEJhcmNvZGVSZWFkZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuX2Zvcm1hdCA9ICdjb2RlXzM5JztcbiAgICB9XG5cbiAgICBkZWNvZGUoKTogQmFyY29kZSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy5fZmluZFN0YXJ0KCk7XG5cbiAgICAgICAgaWYgKCFzdGFydCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xuICAgICAgICBsZXQgY291bnRlcnMgPSBuZXcgVWludDE2QXJyYXkoOSk7XG4gICAgICAgIGxldCBkZWNvZGVkQ2hhcjogc3RyaW5nO1xuICAgICAgICBsZXQgbGFzdFN0YXJ0OiBudW1iZXI7XG4gICAgICAgIGxldCBuZXh0U3RhcnQgPSB0aGlzLl9uZXh0U2V0KHRoaXMuX3Jvdywgc3RhcnQuZW5kKTtcblxuICAgICAgICBkbyB7XG4gICAgICAgICAgICB0aGlzLl90b0NvdW50ZXJzKG5leHRTdGFydCwgY291bnRlcnMpO1xuICAgICAgICAgICAgY29uc3QgcGF0dGVybiA9IHRoaXMuX3RvUGF0dGVybihjb3VudGVycyk7XG4gICAgICAgICAgICBpZiAocGF0dGVybiA8IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlY29kZWRDaGFyID0gdGhpcy5fcGF0dGVyblRvQ2hhcihwYXR0ZXJuKTtcbiAgICAgICAgICAgIGlmIChkZWNvZGVkQ2hhciA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goZGVjb2RlZENoYXIpO1xuICAgICAgICAgICAgbGFzdFN0YXJ0ID0gbmV4dFN0YXJ0O1xuICAgICAgICAgICAgbmV4dFN0YXJ0ICs9IGNvdW50ZXJzLnJlZHVjZSgoc3VtLCBpdGVtKSA9PiBzdW0gKyBpdGVtLCAwKTtcbiAgICAgICAgICAgIG5leHRTdGFydCA9IHRoaXMuX25leHRTZXQodGhpcy5fcm93LCBuZXh0U3RhcnQpO1xuICAgICAgICB9IHdoaWxlIChkZWNvZGVkQ2hhciAhPT0gJyonKTtcbiAgICAgICAgcmVzdWx0LnBvcCgpO1xuXG4gICAgICAgIGlmICghcmVzdWx0Lmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuX3ZlcmlmeVRyYWlsaW5nV2hpdGVzcGFjZShsYXN0U3RhcnQsIG5leHRTdGFydCwgY291bnRlcnMpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb2RlOiByZXN1bHQuam9pbignJyksXG4gICAgICAgICAgICBzdGFydDogc3RhcnQuc3RhcnQsXG4gICAgICAgICAgICBlbmQ6IG5leHRTdGFydCxcbiAgICAgICAgICAgIHN0YXJ0SW5mbzogc3RhcnQsXG4gICAgICAgICAgICBkZWNvZGVkQ29kZXM6IHJlc3VsdFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfcGF0dGVyblRvQ2hhcihwYXR0ZXJuKTogc3RyaW5nIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBDSEFSQUNURVJfRU5DT0RJTkdTLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoQ0hBUkFDVEVSX0VOQ09ESU5HU1tpXSA9PT0gcGF0dGVybikge1xuICAgICAgICAgICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKEFMUEhBQkVUW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBwcml2YXRlIF92ZXJpZnlUcmFpbGluZ1doaXRlc3BhY2UobGFzdFN0YXJ0OiBudW1iZXIsIG5leHRTdGFydDogbnVtYmVyLCBjb3VudGVyczogVWludDE2QXJyYXkpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgcGF0dGVyblNpemUgPSBjb3VudGVycy5yZWR1Y2UoKHN1bSwgaXRlbSkgPT4gc3VtICsgaXRlbSwgMCk7XG4gICAgICAgIGNvbnN0IHRyYWlsaW5nV2hpdGVzcGFjZUVuZCA9IG5leHRTdGFydCAtIGxhc3RTdGFydCAtIHBhdHRlcm5TaXplO1xuICAgICAgICByZXR1cm4gKHRyYWlsaW5nV2hpdGVzcGFjZUVuZCAqIDMpID49IHBhdHRlcm5TaXplO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2ZpbmROZXh0V2lkdGgoY291bnRlcnM6IFVpbnQxNkFycmF5LCBjdXJyZW50OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICBsZXQgbWluV2lkdGggPSBOdW1iZXIuTUFYX1ZBTFVFO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnRlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChjb3VudGVyc1tpXSA8IG1pbldpZHRoICYmIGNvdW50ZXJzW2ldID4gY3VycmVudCkge1xuICAgICAgICAgICAgICAgIG1pbldpZHRoID0gY291bnRlcnNbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbWluV2lkdGg7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfdG9QYXR0ZXJuKGNvdW50ZXJzOiBVaW50MTZBcnJheSk6IG51bWJlciB7XG4gICAgICAgIGNvbnN0IG51bUNvdW50ZXJzID0gY291bnRlcnMubGVuZ3RoO1xuICAgICAgICBsZXQgbWF4TmFycm93V2lkdGggPSAwO1xuICAgICAgICBsZXQgbnVtV2lkZUJhcnMgPSBudW1Db3VudGVycztcbiAgICAgICAgbGV0IHdpZGVCYXJXaWR0aCA9IDA7XG4gICAgICAgIGxldCBwYXR0ZXJuOiBudW1iZXI7XG5cbiAgICAgICAgd2hpbGUgKG51bVdpZGVCYXJzID4gMykge1xuICAgICAgICAgICAgbWF4TmFycm93V2lkdGggPSB0aGlzLl9maW5kTmV4dFdpZHRoKGNvdW50ZXJzLCBtYXhOYXJyb3dXaWR0aCk7XG4gICAgICAgICAgICBudW1XaWRlQmFycyA9IDA7XG4gICAgICAgICAgICBwYXR0ZXJuID0gMDtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtQ291bnRlcnM7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChjb3VudGVyc1tpXSA+IG1heE5hcnJvd1dpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm4gfD0gMSA8PCAobnVtQ291bnRlcnMgLSAxIC0gaSk7XG4gICAgICAgICAgICAgICAgICAgIG51bVdpZGVCYXJzKys7XG4gICAgICAgICAgICAgICAgICAgIHdpZGVCYXJXaWR0aCArPSBjb3VudGVyc1tpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChudW1XaWRlQmFycyA9PT0gMykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtQ291bnRlcnMgJiYgbnVtV2lkZUJhcnMgPiAwOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ZXJzW2ldID4gbWF4TmFycm93V2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bVdpZGVCYXJzLS07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKGNvdW50ZXJzW2ldICogMikgPj0gd2lkZUJhcldpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBwYXR0ZXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2ZpbmRTdGFydCgpOiBCYXJjb2RlSW5mbyB7XG4gICAgICAgIGNvbnN0IG9mZnNldCA9IHRoaXMuX25leHRTZXQodGhpcy5fcm93KTtcbiAgICAgICAgbGV0IHBhdHRlcm5TdGFydCA9IG9mZnNldDtcbiAgICAgICAgY29uc3QgY291bnRlciA9IG5ldyBVaW50MTZBcnJheSg5KTtcbiAgICAgICAgbGV0IGNvdW50ZXJQb3MgPSAwO1xuICAgICAgICBsZXQgaXNXaGl0ZTogMCB8IDEgPSAwO1xuICAgICAgICBsZXQgd2hpdGVTcGFjZU11c3RTdGFydDogbnVtYmVyO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSBvZmZzZXQ7IGkgPCB0aGlzLl9yb3cubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9yb3dbaV0gXiBpc1doaXRlKSB7XG4gICAgICAgICAgICAgICAgY291bnRlcltjb3VudGVyUG9zXSsrO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoY291bnRlclBvcyA9PT0gY291bnRlci5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGZpbmQgc3RhcnQgcGF0dGVyblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fdG9QYXR0ZXJuKGNvdW50ZXIpID09PSBBU1RFUklTSykge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGVTcGFjZU11c3RTdGFydCA9IE1hdGgubWF4KDAsIHBhdHRlcm5TdGFydCAtICgoaSAtIHBhdHRlcm5TdGFydCkgLyA0KSkgfCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX21hdGNoUmFuZ2Uod2hpdGVTcGFjZU11c3RTdGFydCwgcGF0dGVyblN0YXJ0LCAwKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBwYXR0ZXJuU3RhcnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuU3RhcnQgKz0gY291bnRlclswXSArIGNvdW50ZXJbMV07XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgNzsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVyW2pdID0gY291bnRlcltqICsgMl07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY291bnRlcls3XSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXJbOF0gPSAwO1xuICAgICAgICAgICAgICAgICAgICBjb3VudGVyUG9zLS07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnRlclBvcysrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb3VudGVyW2NvdW50ZXJQb3NdID0gMTtcbiAgICAgICAgICAgICAgICBpc1doaXRlID0gaXNXaGl0ZSA/IDAgOiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQmFyY29kZSB9IGZyb20gJy4vYmFyY29kZS1yZWFkZXInO1xuaW1wb3J0IHsgQ29kZTM5UmVhZGVyIH0gZnJvbSAnLi9jb2RlLTM5LXJlYWRlcic7XG5cbmV4cG9ydCBjbGFzcyBDb2RlMzlWSU5SZWFkZXIgZXh0ZW5kcyBDb2RlMzlSZWFkZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuX2Zvcm1hdCA9ICdjb2RlXzM5X3Zpbic7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGJvcnJvd3NcbiAgICAgKiBodHRwczovL2dpdGh1Yi5jb20venhpbmcvenhpbmcvYmxvYi9tYXN0ZXIvY29yZS9zcmMvbWFpbi9qYXZhL2NvbS9nb29nbGUvenhpbmcvY2xpZW50L3Jlc3VsdC9WSU5SZXN1bHRQYXJzZXIuamF2YVxuICAgICAqL1xuICAgIGRlY29kZSgpOiBCYXJjb2RlIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuZGVjb2RlKCk7XG4gICAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjb2RlID0gcmVzdWx0LmNvZGU7XG5cbiAgICAgICAgaWYgKCFjb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvZGUgPSBjb2RlLnJlcGxhY2UoL1tJT1FdL2csICcnKTtcblxuICAgICAgICBpZiAoIS9bQS1aMC05XXsxN30vLnRlc3QoY29kZSkpIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0ZhaWxlZCBBWjA5IHBhdHRlcm4gY29kZTonLCBjb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLl9jaGVja0NoZWNrc3VtKGNvZGUpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc3VsdC5jb2RlID0gY29kZTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9jaGVja0NoZWNrc3VtKGNvZGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICAvLyBUT0RPXG4gICAgICAgIHJldHVybiAhIWNvZGU7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQmFyY29kZSwgQmFyY29kZUluZm8sIEJhcmNvZGVSZWFkZXIgfSBmcm9tICcuL2JhcmNvZGUtcmVhZGVyJztcblxuY29uc3QgQUxQSEFCRVRIX1NUUklORyA9ICcwMTIzNDU2Nzg5QUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVotLiAkLyslYWJjZConO1xuY29uc3QgQUxQSEFCRVQgPSBuZXcgVWludDE2QXJyYXkoWy4uLkFMUEhBQkVUSF9TVFJJTkddLm1hcChjaGFyID0+IGNoYXIuY2hhckNvZGVBdCgwKSkpO1xuY29uc3QgQ0hBUkFDVEVSX0VOQ09ESU5HUyA9IG5ldyBVaW50MTZBcnJheShbXG4gICAgMHgxMTQsIDB4MTQ4LCAweDE0NCwgMHgxNDIsIDB4MTI4LCAweDEyNCwgMHgxMjIsIDB4MTUwLCAweDExMiwgMHgxMEEsIDB4MUE4LCAweDFBNCwgMHgxQTIsIDB4MTk0LCAweDE5MiwgMHgxOEEsXG4gICAgMHgxNjgsIDB4MTY0LCAweDE2MiwgMHgxMzQsIDB4MTFBLCAweDE1OCwgMHgxNEMsIDB4MTQ2LCAweDEyQywgMHgxMTYsIDB4MUI0LCAweDFCMiwgMHgxQUMsIDB4MUE2LCAweDE5NiwgMHgxOUEsXG4gICAgMHgxNkMsIDB4MTY2LCAweDEzNiwgMHgxM0EsIDB4MTJFLCAweDFENCwgMHgxRDIsIDB4MUNBLCAweDE2RSwgMHgxNzYsIDB4MUFFLCAweDEyNiwgMHgxREEsIDB4MUQ2LCAweDEzMiwgMHgxNUVcbl0pO1xuY29uc3QgQVNURVJJU0sgPSAweDE1RTtcblxuZXhwb3J0IGNsYXNzIENvZGU5M1JlYWRlciBleHRlbmRzIEJhcmNvZGVSZWFkZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuX2Zvcm1hdCA9ICdjb2RlXzkzJztcbiAgICB9XG5cbiAgICBkZWNvZGUoKTogQmFyY29kZSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy5fZmluZFN0YXJ0KCk7XG5cbiAgICAgICAgaWYgKCFzdGFydCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmVzdWx0ID0gbmV3IEFycmF5PHN0cmluZz4oKTtcbiAgICAgICAgbGV0IGNvdW50ZXJzID0gbmV3IFVpbnQxNkFycmF5KDYpO1xuICAgICAgICBsZXQgZGVjb2RlZENoYXI6IHN0cmluZztcbiAgICAgICAgbGV0IGxhc3RTdGFydDogbnVtYmVyO1xuICAgICAgICBsZXQgbmV4dFN0YXJ0ID0gdGhpcy5fbmV4dFNldCh0aGlzLl9yb3csIHN0YXJ0LmVuZCk7XG5cbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgdGhpcy5fdG9Db3VudGVycyhuZXh0U3RhcnQsIGNvdW50ZXJzKTtcbiAgICAgICAgICAgIGNvbnN0IHBhdHRlcm4gPSB0aGlzLl90b1BhdHRlcm4oY291bnRlcnMpO1xuICAgICAgICAgICAgaWYgKHBhdHRlcm4gPCAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWNvZGVkQ2hhciA9IHRoaXMuX3BhdHRlcm5Ub0NoYXIocGF0dGVybik7XG4gICAgICAgICAgICBpZiAoZGVjb2RlZENoYXIgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGRlY29kZWRDaGFyKTtcbiAgICAgICAgICAgIGxhc3RTdGFydCA9IG5leHRTdGFydDtcbiAgICAgICAgICAgIG5leHRTdGFydCArPSBjb3VudGVycy5yZWR1Y2UoKHN1bSwgaXRlbSkgPT4gc3VtICsgaXRlbSwgMCk7XG4gICAgICAgICAgICBuZXh0U3RhcnQgPSB0aGlzLl9uZXh0U2V0KHRoaXMuX3JvdywgbmV4dFN0YXJ0KTtcbiAgICAgICAgfSB3aGlsZSAoZGVjb2RlZENoYXIgIT09ICcqJyk7XG4gICAgICAgIHJlc3VsdC5wb3AoKTtcblxuICAgICAgICBpZiAoIXJlc3VsdC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLl92ZXJpZnlFbmQobGFzdFN0YXJ0LCBuZXh0U3RhcnQpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5fdmVyaWZ5Q2hlY2tzdW1zKHJlc3VsdCkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0LnNsaWNlKDAsIHJlc3VsdC5sZW5ndGggLSAyKTtcbiAgICAgICAgaWYgKChyZXN1bHQgPSB0aGlzLl9kZWNvZGVFeHRlbmRlZChyZXN1bHQpKSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29kZTogcmVzdWx0LmpvaW4oJycpLFxuICAgICAgICAgICAgc3RhcnQ6IHN0YXJ0LnN0YXJ0LFxuICAgICAgICAgICAgZW5kOiBuZXh0U3RhcnQsXG4gICAgICAgICAgICBzdGFydEluZm86IHN0YXJ0LFxuICAgICAgICAgICAgZGVjb2RlZENvZGVzOiByZXN1bHRcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX3BhdHRlcm5Ub0NoYXIocGF0dGVybjogbnVtYmVyKTogc3RyaW5nIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBDSEFSQUNURVJfRU5DT0RJTkdTLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoQ0hBUkFDVEVSX0VOQ09ESU5HU1tpXSA9PT0gcGF0dGVybikge1xuICAgICAgICAgICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKEFMUEhBQkVUW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBwcml2YXRlIF92ZXJpZnlFbmQobGFzdFN0YXJ0OiBudW1iZXIsIG5leHRTdGFydDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIGlmIChsYXN0U3RhcnQgPT09IG5leHRTdGFydCB8fCAhdGhpcy5fcm93W25leHRTdGFydF0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF90b1BhdHRlcm4oY291bnRlcnM6IFVpbnQxNkFycmF5KTogbnVtYmVyIHtcbiAgICAgICAgY29uc3QgbnVtQ291bnRlcnMgPSBjb3VudGVycy5sZW5ndGg7XG4gICAgICAgIGxldCBwYXR0ZXJuID0gMDtcbiAgICAgICAgbGV0IHN1bSA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtQ291bnRlcnM7IGkrKykge1xuICAgICAgICAgICAgc3VtICs9IGNvdW50ZXJzW2ldO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1Db3VudGVyczsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbm9ybWFsaXplZCA9IE1hdGgucm91bmQoY291bnRlcnNbaV0gKiA5IC8gc3VtKTtcbiAgICAgICAgICAgIGlmIChub3JtYWxpemVkIDwgMSB8fCBub3JtYWxpemVkID4gNCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgoaSAmIDEpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBub3JtYWxpemVkOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybiA9IChwYXR0ZXJuIDw8IDEpIHwgMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhdHRlcm4gPDw9IG5vcm1hbGl6ZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGF0dGVybjtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9maW5kU3RhcnQoKTogQmFyY29kZUluZm8ge1xuICAgICAgICBjb25zdCBjb3VudGVyID0gbmV3IFVpbnQxNkFycmF5KDYpO1xuICAgICAgICBjb25zdCBvZmZzZXQgPSB0aGlzLl9uZXh0U2V0KHRoaXMuX3Jvdyk7XG4gICAgICAgIGxldCBwYXR0ZXJuU3RhcnQgPSBvZmZzZXQ7XG4gICAgICAgIGxldCBjb3VudGVyUG9zID0gMDtcbiAgICAgICAgbGV0IGlzV2hpdGU6IDAgfCAxID0gMDtcbiAgICAgICAgbGV0IHdoaXRlU3BhY2VNdXN0U3RhcnQ6IG51bWJlcjtcblxuICAgICAgICBmb3IgKGxldCBpID0gb2Zmc2V0OyBpIDwgdGhpcy5fcm93Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fcm93W2ldIF4gaXNXaGl0ZSkge1xuICAgICAgICAgICAgICAgIGNvdW50ZXJbY291bnRlclBvc10rKztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvdW50ZXJQb3MgPT09IGNvdW50ZXIubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBmaW5kIHN0YXJ0IHBhdHRlcm5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3RvUGF0dGVybihjb3VudGVyKSA9PT0gQVNURVJJU0spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlU3BhY2VNdXN0U3RhcnQgPSBNYXRoLm1heCgwLCBwYXR0ZXJuU3RhcnQgLSAoKGkgLSBwYXR0ZXJuU3RhcnQpIC8gNCkpIHwgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9tYXRjaFJhbmdlKHdoaXRlU3BhY2VNdXN0U3RhcnQsIHBhdHRlcm5TdGFydCwgMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydDogcGF0dGVyblN0YXJ0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcGF0dGVyblN0YXJ0ICs9IGNvdW50ZXJbMF0gKyBjb3VudGVyWzFdO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDQ7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY291bnRlcltqXSA9IGNvdW50ZXJbaiArIDJdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXJbNF0gPSAwO1xuICAgICAgICAgICAgICAgICAgICBjb3VudGVyWzVdID0gMDtcbiAgICAgICAgICAgICAgICAgICAgY291bnRlclBvcy0tO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXJQb3MrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY291bnRlcltjb3VudGVyUG9zXSA9IDE7XG4gICAgICAgICAgICAgICAgaXNXaGl0ZSA9IGlzV2hpdGUgPyAwIDogMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2RlY29kZUV4dGVuZGVkKGNoYXJBcnJheTogQXJyYXk8c3RyaW5nPik6IEFycmF5PHN0cmluZz4ge1xuICAgICAgICBjb25zdCBsZW5ndGggPSBjaGFyQXJyYXkubGVuZ3RoO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBjaGFyID0gY2hhckFycmF5W2ldO1xuICAgICAgICAgICAgaWYgKGNoYXIgPj0gJ2EnICYmIGNoYXIgPD0gJ2QnKSB7XG4gICAgICAgICAgICAgICAgaWYgKGkgPiAobGVuZ3RoIC0gMikpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IG5leHRDaGFyID0gY2hhckFycmF5WysraV07XG4gICAgICAgICAgICAgICAgY29uc3QgbmV4dENoYXJDb2RlID0gbmV4dENoYXIuY2hhckNvZGVBdCgwKTtcbiAgICAgICAgICAgICAgICBsZXQgZGVjb2RlZENoYXI6IHN0cmluZztcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGNoYXIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnYSc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXh0Q2hhciA+PSAnQScgJiYgbmV4dENoYXIgPD0gJ1onKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjb2RlZENoYXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKG5leHRDaGFyQ29kZSAtIDY0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXNlICdiJzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRDaGFyID49ICdBJyAmJiBuZXh0Q2hhciA8PSAnRScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNvZGVkQ2hhciA9IFN0cmluZy5mcm9tQ2hhckNvZGUobmV4dENoYXJDb2RlIC0gMzgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChuZXh0Q2hhciA+PSAnRicgJiYgbmV4dENoYXIgPD0gJ0onKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjb2RlZENoYXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKG5leHRDaGFyQ29kZSAtIDExKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobmV4dENoYXIgPj0gJ0snICYmIG5leHRDaGFyIDw9ICdPJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY29kZWRDaGFyID0gU3RyaW5nLmZyb21DaGFyQ29kZShuZXh0Q2hhckNvZGUgKyAxNik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG5leHRDaGFyID49ICdQJyAmJiBuZXh0Q2hhciA8PSAnUycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNvZGVkQ2hhciA9IFN0cmluZy5mcm9tQ2hhckNvZGUobmV4dENoYXJDb2RlICsgNDMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChuZXh0Q2hhciA+PSAnVCcgJiYgbmV4dENoYXIgPD0gJ1onKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjb2RlZENoYXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDEyNyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnYyc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXh0Q2hhciA+PSAnQScgJiYgbmV4dENoYXIgPD0gJ08nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjb2RlZENoYXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKG5leHRDaGFyQ29kZSAtIDMyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobmV4dENoYXIgPT09ICdaJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY29kZWRDaGFyID0gJzonO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2QnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV4dENoYXIgPj0gJ0EnICYmIG5leHRDaGFyIDw9ICdaJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY29kZWRDaGFyID0gU3RyaW5nLmZyb21DaGFyQ29kZShuZXh0Q2hhckNvZGUgKyAzMik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goZGVjb2RlZENoYXIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChjaGFyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHByaXZhdGUgX3ZlcmlmeUNoZWNrc3VtcyhjaGFyQXJyYXk6IEFycmF5PHN0cmluZz4pOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hdGNoQ2hlY2tDaGFyKGNoYXJBcnJheSwgY2hhckFycmF5Lmxlbmd0aCAtIDIsIDIwKVxuICAgICAgICAgICAgJiYgdGhpcy5fbWF0Y2hDaGVja0NoYXIoY2hhckFycmF5LCBjaGFyQXJyYXkubGVuZ3RoIC0gMSwgMTUpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX21hdGNoQ2hlY2tDaGFyKGNoYXJBcnJheTogQXJyYXk8c3RyaW5nPiwgaW5kZXg6IG51bWJlciwgbWF4V2VpZ2h0OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgYXJyYXlUb0NoZWNrID0gY2hhckFycmF5LnNsaWNlKDAsIGluZGV4KTtcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gYXJyYXlUb0NoZWNrLmxlbmd0aDtcbiAgICAgICAgY29uc3Qgd2VpZ2h0ZWRTdW1zID0gYXJyYXlUb0NoZWNrLnJlZHVjZSgoc3VtLCBjaGFyLCBpKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB3ZWlnaHQgPSAoKChpICogLTEpICsgKGxlbmd0aCAtIDEpKSAlIG1heFdlaWdodCkgKyAxO1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBBTFBIQUJFVC5pbmRleE9mKGNoYXIuY2hhckNvZGVBdCgwKSk7XG4gICAgICAgICAgICByZXR1cm4gc3VtICsgKHdlaWdodCAqIHZhbHVlKTtcbiAgICAgICAgfSwgMCk7XG5cbiAgICAgICAgY29uc3QgY2hlY2tDaGFyID0gQUxQSEFCRVRbKHdlaWdodGVkU3VtcyAlIDQ3KV07XG4gICAgICAgIHJldHVybiBjaGVja0NoYXIgPT09IGNoYXJBcnJheVtpbmRleF0uY2hhckNvZGVBdCgwKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBCYXJjb2RlLCBCYXJjb2RlSW5mbywgQmFyY29kZVJlYWRlciwgQmFyY29kZVJlYWRlckNvbmZpZyB9IGZyb20gJy4vYmFyY29kZS1yZWFkZXInO1xuaW1wb3J0IHsgRUFOUmVhZGVyIH0gZnJvbSAnLi9lYW4tcmVhZGVyJztcblxuZXhwb3J0IGNsYXNzIEVBTjJSZWFkZXIgZXh0ZW5kcyBFQU5SZWFkZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZz86IEJhcmNvZGVSZWFkZXJDb25maWcsIHN1cHBsZW1lbnRzPzogQXJyYXk8QmFyY29kZVJlYWRlcj4pIHtcbiAgICAgICAgc3VwZXIoY29uZmlnLCBzdXBwbGVtZW50cyk7XG5cbiAgICAgICAgdGhpcy5fZm9ybWF0ID0gJ2Vhbl8yJztcbiAgICB9XG5cbiAgICBkZWNvZGUocm93PzogQXJyYXk8bnVtYmVyPiwgc3RhcnQ/OiBudW1iZXIpOiBCYXJjb2RlIHtcbiAgICAgICAgY29uc3QgZW5kID0gcm93Lmxlbmd0aDtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEFycmF5PG51bWJlcj4oKTtcbiAgICAgICAgY29uc3QgZGVjb2RlZENvZGVzID0gbmV3IEFycmF5PEJhcmNvZGVJbmZvPigpO1xuICAgICAgICBsZXQgb2Zmc2V0ID0gc3RhcnQ7XG4gICAgICAgIGxldCBjb2RlRnJlcXVlbmN5ID0gMDtcbiAgICAgICAgbGV0IGNvZGU6IEJhcmNvZGVJbmZvO1xuXG4gICAgICAgIHRoaXMuX3JvdyA9IHJvdztcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDIgJiYgb2Zmc2V0IDwgZW5kOyBpKyspIHtcbiAgICAgICAgICAgIGNvZGUgPSB0aGlzLl9kZWNvZGVDb2RlKG9mZnNldCk7XG4gICAgICAgICAgICBpZiAoIWNvZGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlY29kZWRDb2Rlcy5wdXNoKGNvZGUpO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goY29kZS5jb2RlICUgMTApO1xuICAgICAgICAgICAgaWYgKGNvZGUuY29kZSA+PSB0aGlzLkNPREVfR19TVEFSVCkge1xuICAgICAgICAgICAgICAgIGNvZGVGcmVxdWVuY3kgfD0gMSA8PCAoMSAtIGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGkgIT09IDEpIHtcbiAgICAgICAgICAgICAgICBvZmZzZXQgPSB0aGlzLl9uZXh0U2V0KHRoaXMuX3JvdywgY29kZS5lbmQpO1xuICAgICAgICAgICAgICAgIG9mZnNldCA9IHRoaXMuX25leHRVbnNldCh0aGlzLl9yb3csIG9mZnNldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVzdWx0Lmxlbmd0aCAhPT0gMiB8fCAocGFyc2VJbnQocmVzdWx0LmpvaW4oJycpKSAlIDQpICE9PSBjb2RlRnJlcXVlbmN5KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb2RlOiByZXN1bHQuam9pbignJyksXG4gICAgICAgICAgICBkZWNvZGVkQ29kZXMsXG4gICAgICAgICAgICBlbmQ6IGNvZGUuZW5kXG4gICAgICAgIH07XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQmFyY29kZSwgQmFyY29kZUluZm8sIEJhcmNvZGVSZWFkZXIsIEJhcmNvZGVSZWFkZXJDb25maWcgfSBmcm9tICcuL2JhcmNvZGUtcmVhZGVyJztcbmltcG9ydCB7IEVBTlJlYWRlciB9IGZyb20gJy4vZWFuLXJlYWRlcic7XG5cbmV4cG9ydCBjbGFzcyBFQU41UmVhZGVyIGV4dGVuZHMgRUFOUmVhZGVyIHtcbiAgICBnZXQgQ0hFQ0tfRElHSVRfRU5DT0RJTkdTKCk6IEFycmF5PG51bWJlcj4ge1xuICAgICAgICByZXR1cm4gWzI0LCAyMCwgMTgsIDE3LCAxMiwgNiwgMywgMTAsIDksIDVdO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZz86IEJhcmNvZGVSZWFkZXJDb25maWcsIHN1cHBsZW1lbnRzPzogQXJyYXk8QmFyY29kZVJlYWRlcj4pIHtcbiAgICAgICAgc3VwZXIoY29uZmlnLCBzdXBwbGVtZW50cyk7XG5cbiAgICAgICAgdGhpcy5fZm9ybWF0ID0gJ2Vhbl81JztcbiAgICB9XG5cbiAgICBkZWNvZGUocm93PzogQXJyYXk8bnVtYmVyPiwgc3RhcnQ/OiBudW1iZXIpOiBCYXJjb2RlIHtcbiAgICAgICAgY29uc3QgZW5kID0gcm93Lmxlbmd0aDtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEFycmF5PG51bWJlcj4oKTtcbiAgICAgICAgY29uc3QgZGVjb2RlZENvZGVzID0gbmV3IEFycmF5PEJhcmNvZGVJbmZvPigpO1xuICAgICAgICBsZXQgY29kZUZyZXF1ZW5jeSA9IDA7XG4gICAgICAgIGxldCBvZmZzZXQgPSBzdGFydDtcbiAgICAgICAgbGV0IGNvZGU6IEJhcmNvZGVJbmZvO1xuXG4gICAgICAgIHRoaXMuX3JvdyA9IHJvdztcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDUgJiYgb2Zmc2V0IDwgZW5kOyBpKyspIHtcbiAgICAgICAgICAgIGNvZGUgPSB0aGlzLl9kZWNvZGVDb2RlKG9mZnNldCk7XG4gICAgICAgICAgICBpZiAoIWNvZGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlY29kZWRDb2Rlcy5wdXNoKGNvZGUpO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goY29kZS5jb2RlICUgMTApO1xuICAgICAgICAgICAgaWYgKGNvZGUuY29kZSA+PSB0aGlzLkNPREVfR19TVEFSVCkge1xuICAgICAgICAgICAgICAgIGNvZGVGcmVxdWVuY3kgfD0gMSA8PCAoNCAtIGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGkgIT09IDQpIHtcbiAgICAgICAgICAgICAgICBvZmZzZXQgPSB0aGlzLl9uZXh0U2V0KHRoaXMuX3JvdywgY29kZS5lbmQpO1xuICAgICAgICAgICAgICAgIG9mZnNldCA9IHRoaXMuX25leHRVbnNldCh0aGlzLl9yb3csIG9mZnNldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVzdWx0Lmxlbmd0aCAhPT0gNSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fZXh0ZW5zaW9uQ2hlY2tzdW0ocmVzdWx0KSAhPT0gdGhpcy5fZGV0ZXJtaW5lQ2hlY2tEaWdpdChjb2RlRnJlcXVlbmN5KSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29kZTogcmVzdWx0LmpvaW4oJycpLFxuICAgICAgICAgICAgZGVjb2RlZENvZGVzLFxuICAgICAgICAgICAgZW5kOiBjb2RlLmVuZFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHByaXZhdGUgX2RldGVybWluZUNoZWNrRGlnaXQoY29kZUZyZXF1ZW5jeTogbnVtYmVyKTogbnVtYmVyIHwgbnVsbCB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgaWYgKGNvZGVGcmVxdWVuY3kgPT09IHRoaXMuQ0hFQ0tfRElHSVRfRU5DT0RJTkdTW2ldKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZXh0ZW5zaW9uQ2hlY2tzdW0ocmVzdWx0OiBBcnJheTxudW1iZXI+KTogbnVtYmVyIHtcbiAgICAgICAgbGV0IGxlbmd0aCA9IHJlc3VsdC5sZW5ndGg7XG4gICAgICAgIGxldCBzdW0gPSAwO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSBsZW5ndGggLSAyOyBpID49IDA7IGkgLT0gMikge1xuICAgICAgICAgICAgc3VtICs9IHJlc3VsdFtpXTtcbiAgICAgICAgfVxuICAgICAgICBzdW0gKj0gMztcbiAgICAgICAgZm9yIChsZXQgaSA9IGxlbmd0aCAtIDE7IGkgPj0gMDsgaSAtPSAyKSB7XG4gICAgICAgICAgICBzdW0gKz0gcmVzdWx0W2ldO1xuICAgICAgICB9XG4gICAgICAgIHN1bSAqPSAzO1xuXG4gICAgICAgIHJldHVybiBzdW0gJSAxMDtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBCYXJjb2RlSW5mbywgQmFyY29kZVJlYWRlciwgQmFyY29kZVJlYWRlckNvbmZpZyB9IGZyb20gJy4vYmFyY29kZS1yZWFkZXInO1xuaW1wb3J0IHsgRUFOUmVhZGVyIH0gZnJvbSAnLi9lYW4tcmVhZGVyJztcblxuZXhwb3J0IGNsYXNzIEVBTjhSZWFkZXIgZXh0ZW5kcyBFQU5SZWFkZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZz86IEJhcmNvZGVSZWFkZXJDb25maWcsIHN1cHBsZW1lbnRzPzogQXJyYXk8QmFyY29kZVJlYWRlcj4pIHtcbiAgICAgICAgc3VwZXIoY29uZmlnLCBzdXBwbGVtZW50cyk7XG5cbiAgICAgICAgdGhpcy5fZm9ybWF0ID0gJ2Vhbl84JztcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2RlY29kZVBheWxvYWQoY29kZTogQmFyY29kZUluZm8sIHJlc3VsdDogQXJyYXk8bnVtYmVyPiwgZGVjb2RlZENvZGVzOiBBcnJheTxCYXJjb2RlSW5mbz4pOiBCYXJjb2RlSW5mbyB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgICAgICBjb2RlID0gdGhpcy5fZGVjb2RlQ29kZShjb2RlLmVuZCwgdGhpcy5DT0RFX0dfU1RBUlQpO1xuICAgICAgICAgICAgaWYgKCFjb2RlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaChjb2RlLmNvZGUpO1xuICAgICAgICAgICAgZGVjb2RlZENvZGVzLnB1c2goY29kZSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb2RlID0gdGhpcy5fZmluZFBhdHRlcm4odGhpcy5NSURETEVfUEFUVEVSTiwgY29kZS5lbmQsIDEsIGZhbHNlKTtcblxuICAgICAgICBpZiAoY29kZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBkZWNvZGVkQ29kZXMucHVzaChjb2RlKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICAgICAgY29kZSA9IHRoaXMuX2RlY29kZUNvZGUoY29kZS5lbmQsIHRoaXMuQ09ERV9HX1NUQVJUKTtcblxuICAgICAgICAgICAgaWYgKCFjb2RlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRlY29kZWRDb2Rlcy5wdXNoKGNvZGUpO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goY29kZS5jb2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb2RlO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IG1lcmdlIH0gZnJvbSAnLi4vY29tbW9uL21lcmdlJztcbmltcG9ydCB7IEJhcmNvZGUsIEJhcmNvZGVJbmZvLCBCYXJjb2RlUmVhZGVyLCBCYXJjb2RlUmVhZGVyQ29uZmlnIH0gZnJvbSAnLi9iYXJjb2RlLXJlYWRlcic7XG5cbmNvbnN0IEVYVEVOU0lPTl9TVEFSVF9QQVRURVJOID0gWzEsIDEsIDJdO1xuY29uc3QgQ09ERV9QQVRURVJOID0gW1xuICAgIFszLCAyLCAxLCAxXSxcbiAgICBbMiwgMiwgMiwgMV0sXG4gICAgWzIsIDEsIDIsIDJdLFxuICAgIFsxLCA0LCAxLCAxXSxcbiAgICBbMSwgMSwgMywgMl0sXG4gICAgWzEsIDIsIDMsIDFdLFxuICAgIFsxLCAxLCAxLCA0XSxcbiAgICBbMSwgMywgMSwgMl0sXG4gICAgWzEsIDIsIDEsIDNdLFxuICAgIFszLCAxLCAxLCAyXSxcbiAgICBbMSwgMSwgMiwgM10sXG4gICAgWzEsIDIsIDIsIDJdLFxuICAgIFsyLCAyLCAxLCAyXSxcbiAgICBbMSwgMSwgNCwgMV0sXG4gICAgWzIsIDMsIDEsIDFdLFxuICAgIFsxLCAzLCAyLCAxXSxcbiAgICBbNCwgMSwgMSwgMV0sXG4gICAgWzIsIDEsIDMsIDFdLFxuICAgIFszLCAxLCAyLCAxXSxcbiAgICBbMiwgMSwgMSwgM11cbl07XG5jb25zdCBDT0RFX0ZSRVFVRU5DWSA9IFswLCAxMSwgMTMsIDE0LCAxOSwgMjUsIDI4LCAyMSwgMjIsIDI2XTtcblxuZXhwb3J0IGNsYXNzIEVBTlJlYWRlciBleHRlbmRzIEJhcmNvZGVSZWFkZXIge1xuICAgIGdldCBDT0RFX0xfU1RBUlQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgZ2V0IENPREVfR19TVEFSVCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gMTA7XG4gICAgfVxuXG4gICAgZ2V0IFNUQVJUX1BBVFRFUk4oKTogQXJyYXk8bnVtYmVyPiB7XG4gICAgICAgIHJldHVybiBbMSwgMSwgMV07XG4gICAgfVxuXG4gICAgZ2V0IFNUT1BfUEFUVEVSTigpOiBBcnJheTxudW1iZXI+IHtcbiAgICAgICAgcmV0dXJuIFsxLCAxLCAxXTtcbiAgICB9XG5cbiAgICBnZXQgTUlERExFX1BBVFRFUk4oKTogQXJyYXk8bnVtYmVyPiB7XG4gICAgICAgIHJldHVybiBbMSwgMSwgMSwgMSwgMV07XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoY29uZmlnPzogQmFyY29kZVJlYWRlckNvbmZpZywgc3VwcGxlbWVudHM/OiBBcnJheTxCYXJjb2RlUmVhZGVyPikge1xuICAgICAgICBzdXBlcihtZXJnZSh7XG4gICAgICAgICAgICBzdXBwbGVtZW50czogW10gLy8gQWxsb3dlZCBleHRlbnNpb25zIHRvIGJlIGRlY29kZWQgKDIgYW5kL29yIDUpXG4gICAgICAgIH0sIGNvbmZpZyksIHN1cHBsZW1lbnRzKTtcblxuICAgICAgICB0aGlzLl9mb3JtYXQgPSAnZWFuXzEzJztcbiAgICAgICAgdGhpcy5fc2luZ2xlQ29kZUVycm9yID0gMC43MDtcbiAgICAgICAgdGhpcy5fYXZlcmFnZUNvZGVFcnJvciA9IDAuNDg7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9kZWNvZGVDb2RlKHN0YXJ0OiBudW1iZXIsIGNvZGVyYW5nZT86IG51bWJlcik6IEJhcmNvZGVJbmZvIHtcbiAgICAgICAgY29uc3QgY291bnRlciA9IFswLCAwLCAwLCAwXTtcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gc3RhcnQ7XG4gICAgICAgIGNvbnN0IGJlc3RNYXRjaDogQmFyY29kZUluZm8gPSB7XG4gICAgICAgICAgICBlcnJvcjogTnVtYmVyLk1BWF9WQUxVRSxcbiAgICAgICAgICAgIGNvZGU6IC0xLFxuICAgICAgICAgICAgc3RhcnQ6IHN0YXJ0LFxuICAgICAgICAgICAgZW5kOiBzdGFydFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBlcHNpbG9uID0gdGhpcy5BVkVSQUdFX0NPREVfRVJST1I7XG4gICAgICAgIGxldCBpc1doaXRlOiAwIHwgMSA9IHRoaXMuX3Jvd1tvZmZzZXRdID8gMCA6IDE7XG4gICAgICAgIGxldCBjb3VudGVyUG9zID0gMDtcblxuICAgICAgICBpZiAoIWNvZGVyYW5nZSkge1xuICAgICAgICAgICAgY29kZXJhbmdlID0gQ09ERV9QQVRURVJOLmxlbmd0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSBvZmZzZXQ7IGkgPCB0aGlzLl9yb3cubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9yb3dbaV0gXiBpc1doaXRlKSB7XG4gICAgICAgICAgICAgICAgY291bnRlcltjb3VudGVyUG9zXSsrO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoY291bnRlclBvcyA9PT0gY291bnRlci5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGNvZGUgPSAwOyBjb2RlIDwgY29kZXJhbmdlOyBjb2RlKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yID0gdGhpcy5fbWF0Y2hQYXR0ZXJuKGNvdW50ZXIsIENPREVfUEFUVEVSTltjb2RlXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IgPCBiZXN0TWF0Y2guZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZXN0TWF0Y2guY29kZSA9IGNvZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVzdE1hdGNoLmVycm9yID0gZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYmVzdE1hdGNoLmVuZCA9IGk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChiZXN0TWF0Y2guZXJyb3IgPiBlcHNpbG9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYmVzdE1hdGNoO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXJQb3MrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY291bnRlcltjb3VudGVyUG9zXSA9IDE7XG4gICAgICAgICAgICAgICAgaXNXaGl0ZSA9IGlzV2hpdGUgPyAwIDogMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZmluZFN0YXJ0KCk6IEJhcmNvZGVJbmZvIHtcbiAgICAgICAgbGV0IG9mZnNldCA9IHRoaXMuX25leHRTZXQodGhpcy5fcm93KTtcbiAgICAgICAgbGV0IHN0YXJ0SW5mbzogQmFyY29kZUluZm87XG5cbiAgICAgICAgd2hpbGUgKCFzdGFydEluZm8pIHtcbiAgICAgICAgICAgIHN0YXJ0SW5mbyA9IHRoaXMuX2ZpbmRQYXR0ZXJuKHRoaXMuU1RBUlRfUEFUVEVSTiwgb2Zmc2V0LCAwLCB0cnVlKTtcblxuICAgICAgICAgICAgaWYgKCFzdGFydEluZm8pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgbGVhZGluZ1doaXRlc3BhY2VTdGFydCA9IHN0YXJ0SW5mby5zdGFydCAtIChzdGFydEluZm8uZW5kIC0gc3RhcnRJbmZvLnN0YXJ0KTtcblxuICAgICAgICAgICAgaWYgKGxlYWRpbmdXaGl0ZXNwYWNlU3RhcnQgPj0gMCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9tYXRjaFJhbmdlKGxlYWRpbmdXaGl0ZXNwYWNlU3RhcnQsIHN0YXJ0SW5mby5zdGFydCwgMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0YXJ0SW5mbztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG9mZnNldCA9IHN0YXJ0SW5mby5lbmQ7XG4gICAgICAgICAgICBzdGFydEluZm8gPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF92ZXJpZnlUcmFpbGluZ1doaXRlc3BhY2UoZW5kSW5mbzogQmFyY29kZUluZm8pOiBCYXJjb2RlSW5mbyB7XG4gICAgICAgIGNvbnN0IHRyYWlsaW5nV2hpdGVzcGFjZUVuZCA9IGVuZEluZm8uZW5kICsgKGVuZEluZm8uZW5kIC0gZW5kSW5mby5zdGFydCk7XG5cbiAgICAgICAgaWYgKHRyYWlsaW5nV2hpdGVzcGFjZUVuZCA8IHRoaXMuX3Jvdy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9tYXRjaFJhbmdlKGVuZEluZm8uZW5kLCB0cmFpbGluZ1doaXRlc3BhY2VFbmQsIDApKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVuZEluZm87XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2ZpbmRFbmQob2Zmc2V0OiBudW1iZXIsIGlzV2hpdGU6IDAgfCAxKTogQmFyY29kZUluZm8ge1xuICAgICAgICBjb25zdCBlbmRJbmZvID0gdGhpcy5fZmluZFBhdHRlcm4odGhpcy5TVE9QX1BBVFRFUk4sIG9mZnNldCwgaXNXaGl0ZSwgZmFsc2UpO1xuXG4gICAgICAgIHJldHVybiBlbmRJbmZvICE9PSBudWxsID8gdGhpcy5fdmVyaWZ5VHJhaWxpbmdXaGl0ZXNwYWNlKGVuZEluZm8pIDogbnVsbDtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9jYWxjdWxhdGVGaXJzdERpZ2l0KGNvZGVGcmVxdWVuY3k6IG51bWJlcik6IG51bWJlciB8IG51bGwge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IENPREVfRlJFUVVFTkNZLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoY29kZUZyZXF1ZW5jeSA9PT0gQ09ERV9GUkVRVUVOQ1lbaV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2RlY29kZVBheWxvYWQoY29kZTogQmFyY29kZUluZm8sIHJlc3VsdDogQXJyYXk8bnVtYmVyPiwgZGVjb2RlZENvZGVzOiBBcnJheTxCYXJjb2RlSW5mbz4pOiBCYXJjb2RlSW5mbyB7XG4gICAgICAgIGxldCBjb2RlRnJlcXVlbmN5ID0gMHgwO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gICAgICAgICAgICBjb2RlID0gdGhpcy5fZGVjb2RlQ29kZShjb2RlLmVuZCk7XG4gICAgICAgICAgICBpZiAoIWNvZGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb2RlLmNvZGUgPj0gdGhpcy5DT0RFX0dfU1RBUlQpIHtcbiAgICAgICAgICAgICAgICBjb2RlLmNvZGUgLT0gdGhpcy5DT0RFX0dfU1RBUlQ7XG4gICAgICAgICAgICAgICAgY29kZUZyZXF1ZW5jeSB8PSAxIDw8ICg1IC0gaSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvZGVGcmVxdWVuY3kgfD0gMCA8PCAoNSAtIGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goY29kZS5jb2RlKTtcbiAgICAgICAgICAgIGRlY29kZWRDb2Rlcy5wdXNoKGNvZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZmlyc3REaWdpdCA9IHRoaXMuX2NhbGN1bGF0ZUZpcnN0RGlnaXQoY29kZUZyZXF1ZW5jeSk7XG5cbiAgICAgICAgaWYgKGZpcnN0RGlnaXQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzdWx0LnVuc2hpZnQoZmlyc3REaWdpdCk7XG5cbiAgICAgICAgY29kZSA9IHRoaXMuX2ZpbmRQYXR0ZXJuKHRoaXMuTUlERExFX1BBVFRFUk4sIGNvZGUuZW5kLCAxLCBmYWxzZSk7XG5cbiAgICAgICAgaWYgKGNvZGUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVjb2RlZENvZGVzLnB1c2goY29kZSk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICAgICAgICAgIGNvZGUgPSB0aGlzLl9kZWNvZGVDb2RlKGNvZGUuZW5kLCB0aGlzLkNPREVfR19TVEFSVCk7XG5cbiAgICAgICAgICAgIGlmICghY29kZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkZWNvZGVkQ29kZXMucHVzaChjb2RlKTtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGNvZGUuY29kZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29kZTtcbiAgICB9XG5cbiAgICBkZWNvZGUoKTogQmFyY29kZSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBBcnJheTxudW1iZXI+KCk7XG4gICAgICAgIGNvbnN0IGRlY29kZWRDb2RlcyA9IG5ldyBBcnJheTxCYXJjb2RlSW5mbz4oKTtcbiAgICAgICAgbGV0IHJlc3VsdEluZm86IEJhcmNvZGUgPSB7fTtcbiAgICAgICAgbGV0IHN0YXJ0SW5mbyA9IHRoaXMuX2ZpbmRTdGFydCgpO1xuXG4gICAgICAgIGlmICghc3RhcnRJbmZvKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjb2RlOiBCYXJjb2RlSW5mbyA9IHtcbiAgICAgICAgICAgIGNvZGU6IHN0YXJ0SW5mby5jb2RlLFxuICAgICAgICAgICAgc3RhcnQ6IHN0YXJ0SW5mby5zdGFydCxcbiAgICAgICAgICAgIGVuZDogc3RhcnRJbmZvLmVuZFxuICAgICAgICB9O1xuICAgICAgICBkZWNvZGVkQ29kZXMucHVzaChjb2RlKTtcblxuICAgICAgICBjb2RlID0gdGhpcy5fZGVjb2RlUGF5bG9hZChjb2RlLCByZXN1bHQsIGRlY29kZWRDb2Rlcyk7XG5cbiAgICAgICAgaWYgKCFjb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvZGUgPSB0aGlzLl9maW5kRW5kKGNvZGUuZW5kLCAwKTtcblxuICAgICAgICBpZiAoIWNvZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVjb2RlZENvZGVzLnB1c2goY29kZSk7XG5cbiAgICAgICAgLy8gQ2hlY2tzdW1cbiAgICAgICAgaWYgKCF0aGlzLl9jaGVja3N1bShyZXN1bHQpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnN1cHBsZW1lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHN1cHBsZW1lbnQgPSB0aGlzLl9kZWNvZGVFeHRlbnNpb25zKGNvZGUuZW5kKTtcbiAgICAgICAgICAgIGlmICghc3VwcGxlbWVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBsYXN0Q29kZSA9IHN1cHBsZW1lbnQuZGVjb2RlZENvZGVzW3N1cHBsZW1lbnQuZGVjb2RlZENvZGVzLmxlbmd0aCAtIDFdIGFzIEJhcmNvZGVJbmZvO1xuICAgICAgICAgICAgY29uc3QgZW5kSW5mbyA9IHtcbiAgICAgICAgICAgICAgICBzdGFydDogbGFzdENvZGUuc3RhcnQgKyAoKChsYXN0Q29kZS5lbmQgLSBsYXN0Q29kZS5zdGFydCkgLyAyKSB8IDApLFxuICAgICAgICAgICAgICAgIGVuZDogbGFzdENvZGUuZW5kXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpZiAoIXRoaXMuX3ZlcmlmeVRyYWlsaW5nV2hpdGVzcGFjZShlbmRJbmZvKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXN1bHRJbmZvID0ge1xuICAgICAgICAgICAgICAgIHN1cHBsZW1lbnQsXG4gICAgICAgICAgICAgICAgY29kZTogcmVzdWx0LmpvaW4oJycpICsgc3VwcGxlbWVudC5jb2RlXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvZGU6IHJlc3VsdC5qb2luKCcnKSxcbiAgICAgICAgICAgIHN0YXJ0OiBzdGFydEluZm8uc3RhcnQsXG4gICAgICAgICAgICBlbmQ6IGNvZGUuZW5kLFxuICAgICAgICAgICAgc3RhcnRJbmZvLFxuICAgICAgICAgICAgZGVjb2RlZENvZGVzLFxuICAgICAgICAgICAgLi4ucmVzdWx0SW5mb1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHByaXZhdGUgX2RlY29kZUV4dGVuc2lvbnMob2Zmc2V0OiBudW1iZXIpOiBCYXJjb2RlIHtcbiAgICAgICAgY29uc3Qgc3RhcnQgPSB0aGlzLl9uZXh0U2V0KHRoaXMuX3Jvdywgb2Zmc2V0KTtcbiAgICAgICAgY29uc3Qgc3RhcnRJbmZvID0gdGhpcy5fZmluZFBhdHRlcm4oRVhURU5TSU9OX1NUQVJUX1BBVFRFUk4sIHN0YXJ0LCAwLCBmYWxzZSk7XG5cbiAgICAgICAgaWYgKHN0YXJ0SW5mbyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3VwcGxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSB0aGlzLnN1cHBsZW1lbnRzW2ldLmRlY29kZSh0aGlzLl9yb3csIHN0YXJ0SW5mby5lbmQpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGNvZGU6IHJlc3VsdC5jb2RlLFxuICAgICAgICAgICAgICAgICAgICBzdGFydCxcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRJbmZvLFxuICAgICAgICAgICAgICAgICAgICBlbmQ6IHJlc3VsdC5lbmQsXG4gICAgICAgICAgICAgICAgICAgIGRlY29kZWRDb2RlczogcmVzdWx0LmRlY29kZWRDb2Rlc1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2NoZWNrc3VtKHJlc3VsdDogQXJyYXk8bnVtYmVyPik6IGJvb2xlYW4ge1xuICAgICAgICBsZXQgc3VtID0gMDtcblxuICAgICAgICBmb3IgKGxldCBpID0gcmVzdWx0Lmxlbmd0aCAtIDI7IGkgPj0gMDsgaSAtPSAyKSB7XG4gICAgICAgICAgICBzdW0gKz0gcmVzdWx0W2ldO1xuICAgICAgICB9XG5cbiAgICAgICAgc3VtICo9IDM7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IHJlc3VsdC5sZW5ndGggLSAxOyBpID49IDA7IGkgLT0gMikge1xuICAgICAgICAgICAgc3VtICs9IHJlc3VsdFtpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdW0gJSAxMCA9PT0gMDtcbiAgICB9XG59IiwiaW1wb3J0IHsgbWVyZ2UgfSBmcm9tICcuLi9jb21tb24vbWVyZ2UnO1xuaW1wb3J0IHsgQmFyY29kZSwgQmFyY29kZUluZm8sIEJhcmNvZGVSZWFkZXIsIEJhcmNvZGVSZWFkZXJDb25maWcgfSBmcm9tICcuL2JhcmNvZGUtcmVhZGVyJztcblxuY29uc3QgTiA9IDE7XG5jb25zdCBXID0gMztcbmNvbnN0IFNUQVJUX1BBVFRFUk4gPSBbTiwgTiwgTiwgTl07XG5jb25zdCBTVE9QX1BBVFRFUk4gPSBbTiwgTiwgV107XG5jb25zdCBDT0RFX1BBVFRFUk4gPSBbXG4gICAgW04sIE4sIFcsIFcsIE5dLFxuICAgIFtXLCBOLCBOLCBOLCBXXSxcbiAgICBbTiwgVywgTiwgTiwgV10sXG4gICAgW1csIFcsIE4sIE4sIE5dLFxuICAgIFtOLCBOLCBXLCBOLCBXXSxcbiAgICBbVywgTiwgVywgTiwgTl0sXG4gICAgW04sIFcsIFcsIE4sIE5dLFxuICAgIFtOLCBOLCBOLCBXLCBXXSxcbiAgICBbVywgTiwgTiwgVywgTl0sXG4gICAgW04sIFcsIE4sIFcsIE5dXG5dO1xuY29uc3QgTUFYX0NPUlJFQ1RJT05fRkFDVE9SID0gNTtcblxuZXhwb3J0IGNsYXNzIEkyb2Y1UmVhZGVyIGV4dGVuZHMgQmFyY29kZVJlYWRlciB7XG4gICAgcHJpdmF0ZSBfYmFyU3BhY2VSYXRpbzogW251bWJlciwgbnVtYmVyXTtcblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZz86IEJhcmNvZGVSZWFkZXJDb25maWcpIHtcbiAgICAgICAgc3VwZXIobWVyZ2Uoe1xuICAgICAgICAgICAgbm9ybWFsaXplQmFyU3BhY2VXaWR0aDogZmFsc2UgLy8gTm9ybWFsaXplIHRoZSB3aWR0aCBkaWZmZXJlbmNlIGJldHdlZW4gYmFycyBhbmQgc3BhY2VzXG4gICAgICAgIH0sIGNvbmZpZykpO1xuXG4gICAgICAgIHRoaXMuX2JhclNwYWNlUmF0aW8gPSBbMSwgMV07XG4gICAgICAgIHRoaXMuX2Zvcm1hdCA9ICdpMm9mNSc7XG5cbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLm5vcm1hbGl6ZUJhclNwYWNlV2lkdGgpIHtcbiAgICAgICAgICAgIHRoaXMuX3NpbmdsZUNvZGVFcnJvciA9IDAuMzg7XG4gICAgICAgICAgICB0aGlzLl9hdmVyYWdlQ29kZUVycm9yID0gMC4wOTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3NpbmdsZUNvZGVFcnJvciA9IDAuNzg7XG4gICAgICAgICAgICB0aGlzLl9hdmVyYWdlQ29kZUVycm9yID0gMC4zODtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRlY29kZSgpOiBCYXJjb2RlIHtcbiAgICAgICAgY29uc3Qgc3RhcnRJbmZvID0gdGhpcy5fZmluZFN0YXJ0KCk7XG5cbiAgICAgICAgaWYgKCFzdGFydEluZm8pIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZW5kSW5mbyA9IHRoaXMuX2ZpbmRFbmQoKTtcblxuICAgICAgICBpZiAoIWVuZEluZm8pIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY291bnRlcnMgPSB0aGlzLl9maWxsQ291bnRlcnMoc3RhcnRJbmZvLmVuZCwgZW5kSW5mby5zdGFydCwgMCk7XG5cbiAgICAgICAgaWYgKGNvdW50ZXJzLmxlbmd0aCAlIDEwICE9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBBcnJheTxudW1iZXI+KCk7XG4gICAgICAgIGNvbnN0IGRlY29kZWRDb2RlcyA9IG5ldyBBcnJheTxCYXJjb2RlSW5mbz4oKTtcblxuICAgICAgICBkZWNvZGVkQ29kZXMucHVzaChzdGFydEluZm8pO1xuXG4gICAgICAgIGNvbnN0IGNvZGUgPSB0aGlzLl9kZWNvZGVQYXlsb2FkKGNvdW50ZXJzLCByZXN1bHQsIGRlY29kZWRDb2Rlcyk7XG5cbiAgICAgICAgaWYgKCFjb2RlIHx8IHJlc3VsdC5sZW5ndGggJSAyICE9PSAwIHx8IHJlc3VsdC5sZW5ndGggPCA2KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlY29kZWRDb2Rlcy5wdXNoKGVuZEluZm8pO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb2RlOiByZXN1bHQuam9pbignJyksXG4gICAgICAgICAgICBzdGFydDogc3RhcnRJbmZvLnN0YXJ0LFxuICAgICAgICAgICAgZW5kOiBlbmRJbmZvLmVuZCxcbiAgICAgICAgICAgIHN0YXJ0SW5mbyxcbiAgICAgICAgICAgIGRlY29kZWRDb2Rlc1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfbWF0Y2hQYXR0ZXJuKGNvdW50ZXI6IEFycmF5PG51bWJlcj4sIGNvZGU6IFJlYWRvbmx5QXJyYXk8bnVtYmVyPik6IG51bWJlciB7XG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5ub3JtYWxpemVCYXJTcGFjZVdpZHRoKSB7XG4gICAgICAgICAgICBjb25zdCBjb3VudGVyU3VtOiBbbnVtYmVyLCBudW1iZXJdID0gWzAsIDBdO1xuICAgICAgICAgICAgY29uc3QgY29kZVN1bTogW251bWJlciwgbnVtYmVyXSA9IFswLCAwXTtcbiAgICAgICAgICAgIGNvbnN0IGNvcnJlY3Rpb246IFtudW1iZXIsIG51bWJlcl0gPSBbMCwgMF07XG4gICAgICAgICAgICBjb25zdCBjb3JyZWN0aW9uUmF0aW8gPSBNQVhfQ09SUkVDVElPTl9GQUNUT1I7XG4gICAgICAgICAgICBjb25zdCBjb3JyZWN0aW9uUmF0aW9JbnZlcnNlID0gMSAvIGNvcnJlY3Rpb25SYXRpbztcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY291bnRlclN1bVtpICUgMl0gKz0gY291bnRlcltpXTtcbiAgICAgICAgICAgICAgICBjb2RlU3VtW2kgJSAyXSArPSBjb2RlW2ldO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb3JyZWN0aW9uWzBdID0gY29kZVN1bVswXSAvIGNvdW50ZXJTdW1bMF07XG4gICAgICAgICAgICBjb3JyZWN0aW9uWzFdID0gY29kZVN1bVsxXSAvIGNvdW50ZXJTdW1bMV07XG5cbiAgICAgICAgICAgIGNvcnJlY3Rpb25bMF0gPSBNYXRoLm1heChNYXRoLm1pbihjb3JyZWN0aW9uWzBdLCBjb3JyZWN0aW9uUmF0aW8pLCBjb3JyZWN0aW9uUmF0aW9JbnZlcnNlKTtcbiAgICAgICAgICAgIGNvcnJlY3Rpb25bMV0gPSBNYXRoLm1heChNYXRoLm1pbihjb3JyZWN0aW9uWzFdLCBjb3JyZWN0aW9uUmF0aW8pLCBjb3JyZWN0aW9uUmF0aW9JbnZlcnNlKTtcbiAgICAgICAgICAgIHRoaXMuX2JhclNwYWNlUmF0aW8gPSBjb3JyZWN0aW9uO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50ZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb3VudGVyW2ldICo9IHRoaXMuX2JhclNwYWNlUmF0aW9baSAlIDJdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1cGVyLl9tYXRjaFBhdHRlcm4oY291bnRlciwgY29kZSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9maW5kU3RhcnQoKTogQmFyY29kZUluZm8ge1xuICAgICAgICBsZXQgb2Zmc2V0ID0gdGhpcy5fbmV4dFNldCh0aGlzLl9yb3cpO1xuICAgICAgICBsZXQgc3RhcnRJbmZvOiBCYXJjb2RlSW5mbztcblxuICAgICAgICB3aGlsZSAoIXN0YXJ0SW5mbykge1xuICAgICAgICAgICAgc3RhcnRJbmZvID0gdGhpcy5fZmluZFBhdHRlcm4oU1RBUlRfUEFUVEVSTiwgb2Zmc2V0LCAwLCB0cnVlKTtcbiAgICAgICAgICAgIGlmICghc3RhcnRJbmZvKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IG5hcnJvd0JhcldpZHRoID0gKHN0YXJ0SW5mby5lbmQgLSBzdGFydEluZm8uc3RhcnQpID4+IDI7XG4gICAgICAgICAgICBjb25zdCBsZWFkaW5nV2hpdGVzcGFjZVN0YXJ0ID0gc3RhcnRJbmZvLnN0YXJ0IC0gbmFycm93QmFyV2lkdGggKiAxMDtcblxuICAgICAgICAgICAgaWYgKGxlYWRpbmdXaGl0ZXNwYWNlU3RhcnQgPj0gMCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9tYXRjaFJhbmdlKGxlYWRpbmdXaGl0ZXNwYWNlU3RhcnQsIHN0YXJ0SW5mby5zdGFydCwgMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0YXJ0SW5mbztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG9mZnNldCA9IHN0YXJ0SW5mby5lbmQ7XG4gICAgICAgICAgICBzdGFydEluZm8gPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF92ZXJpZnlUcmFpbGluZ1doaXRlc3BhY2UoZW5kSW5mbzogQmFyY29kZUluZm8pOiBCYXJjb2RlSW5mbyB7XG4gICAgICAgIGNvbnN0IHRyYWlsaW5nV2hpdGVzcGFjZUVuZCA9IGVuZEluZm8uZW5kICsgKGVuZEluZm8uZW5kIC0gZW5kSW5mby5zdGFydCkgLyAyO1xuXG4gICAgICAgIGlmICh0cmFpbGluZ1doaXRlc3BhY2VFbmQgPCB0aGlzLl9yb3cubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fbWF0Y2hSYW5nZShlbmRJbmZvLmVuZCwgdHJhaWxpbmdXaGl0ZXNwYWNlRW5kLCAwKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbmRJbmZvO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9maW5kRW5kKCk6IEJhcmNvZGVJbmZvIHtcbiAgICAgICAgdGhpcy5fcm93LnJldmVyc2UoKTtcblxuICAgICAgICBjb25zdCBlbmRJbmZvID0gdGhpcy5fZmluZFBhdHRlcm4oU1RPUF9QQVRURVJOLCB1bmRlZmluZWQsIDAsIGZhbHNlKTtcblxuICAgICAgICB0aGlzLl9yb3cucmV2ZXJzZSgpO1xuXG4gICAgICAgIGlmIChlbmRJbmZvID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHJldmVyc2UgbnVtYmVyc1xuICAgICAgICBjb25zdCBzdGFydCA9IGVuZEluZm8uc3RhcnQ7XG4gICAgICAgIGVuZEluZm8uc3RhcnQgPSB0aGlzLl9yb3cubGVuZ3RoIC0gZW5kSW5mby5lbmQ7XG4gICAgICAgIGVuZEluZm8uZW5kID0gdGhpcy5fcm93Lmxlbmd0aCAtIHN0YXJ0O1xuXG4gICAgICAgIHJldHVybiBlbmRJbmZvICE9PSBudWxsID8gdGhpcy5fdmVyaWZ5VHJhaWxpbmdXaGl0ZXNwYWNlKGVuZEluZm8pIDogbnVsbDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2RlY29kZUNvZGUoY291bnRlcjogQXJyYXk8bnVtYmVyPik6IEJhcmNvZGVJbmZvIHtcbiAgICAgICAgY29uc3QgYmVzdE1hdGNoOiBCYXJjb2RlSW5mbyA9IHtcbiAgICAgICAgICAgIGVycm9yOiBOdW1iZXIuTUFYX1ZBTFVFLFxuICAgICAgICAgICAgY29kZTogLTEsXG4gICAgICAgICAgICBzdGFydDogMCxcbiAgICAgICAgICAgIGVuZDogMFxuICAgICAgICB9O1xuXG4gICAgICAgIGZvciAobGV0IGNvZGUgPSAwOyBjb2RlIDwgQ09ERV9QQVRURVJOLmxlbmd0aDsgY29kZSsrKSB7XG4gICAgICAgICAgICBjb25zdCBlcnJvciA9IHRoaXMuX21hdGNoUGF0dGVybihjb3VudGVyLCBDT0RFX1BBVFRFUk5bY29kZV0pO1xuICAgICAgICAgICAgaWYgKGVycm9yIDwgYmVzdE1hdGNoLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgYmVzdE1hdGNoLmNvZGUgPSBjb2RlO1xuICAgICAgICAgICAgICAgIGJlc3RNYXRjaC5lcnJvciA9IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGJlc3RNYXRjaC5lcnJvciA8IHRoaXMuQVZFUkFHRV9DT0RFX0VSUk9SID8gYmVzdE1hdGNoIDogbnVsbDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2RlY29kZVBheWxvYWQoY291bnRlcnM6IFJlYWRvbmx5QXJyYXk8bnVtYmVyPiwgcmVzdWx0OiBBcnJheTxudW1iZXI+LCBkZWNvZGVkQ29kZXM6IEFycmF5PEJhcmNvZGVJbmZvPik6IFtCYXJjb2RlSW5mbywgQmFyY29kZUluZm9dIHtcbiAgICAgICAgY29uc3QgY291bnRlckxlbmd0aCA9IGNvdW50ZXJzLmxlbmd0aDtcbiAgICAgICAgY29uc3QgY291bnRlcjAgPSBbMCwgMCwgMCwgMCwgMF07XG4gICAgICAgIGNvbnN0IGNvdW50ZXIxID0gWzAsIDAsIDAsIDAsIDBdO1xuICAgICAgICBsZXQgY29kZTA6IEJhcmNvZGVJbmZvO1xuICAgICAgICBsZXQgY29kZTE6IEJhcmNvZGVJbmZvO1xuICAgICAgICBsZXQgcG9zID0gMDtcblxuICAgICAgICB3aGlsZSAocG9zIDwgY291bnRlckxlbmd0aCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb3VudGVyMFtpXSA9IGNvdW50ZXJzW3Bvc10gKiB0aGlzLl9iYXJTcGFjZVJhdGlvWzBdO1xuICAgICAgICAgICAgICAgIGNvdW50ZXIxW2ldID0gY291bnRlcnNbcG9zICsgMV0gKiB0aGlzLl9iYXJTcGFjZVJhdGlvWzFdO1xuICAgICAgICAgICAgICAgIHBvcyArPSAyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb2RlMCA9IHRoaXMuX2RlY29kZUNvZGUoY291bnRlcjApO1xuICAgICAgICAgICAgaWYgKCFjb2RlMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb2RlMSA9IHRoaXMuX2RlY29kZUNvZGUoY291bnRlcjEpO1xuICAgICAgICAgICAgaWYgKCFjb2RlMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXN1bHQucHVzaChjb2RlMC5jb2RlLCBjb2RlMS5jb2RlKTtcbiAgICAgICAgICAgIGRlY29kZWRDb2Rlcy5wdXNoKGNvZGUwLCBjb2RlMSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gW2NvZGUwLCBjb2RlMV07XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29kZTEyOFJlYWRlciB9IGZyb20gJy4vY29kZS0xMjgtcmVhZGVyJztcbmltcG9ydCB7IENvZGUzOVJlYWRlciB9IGZyb20gJy4vY29kZS0zOS1yZWFkZXInO1xuaW1wb3J0IHsgQ29kZTM5VklOUmVhZGVyIH0gZnJvbSAnLi9jb2RlLTM5LXZpbi1yZWFkZXInO1xuaW1wb3J0IHsgQ29kYWJhclJlYWRlciB9IGZyb20gJy4vY29kYWJhci1yZWFkZXInO1xuaW1wb3J0IHsgRUFOUmVhZGVyIH0gZnJvbSAnLi9lYW4tcmVhZGVyJztcbmltcG9ydCB7IEVBTjhSZWFkZXIgfSBmcm9tICcuL2Vhbi04LXJlYWRlcic7XG5pbXBvcnQgeyBFQU4yUmVhZGVyIH0gZnJvbSAnLi9lYW4tMi1yZWFkZXInO1xuaW1wb3J0IHsgRUFONVJlYWRlciB9IGZyb20gJy4vZWFuLTUtcmVhZGVyJztcbmltcG9ydCB7IFVQQ1JlYWRlciB9IGZyb20gJy4vdXBjLXJlYWRlcic7XG5pbXBvcnQgeyBVUENFUmVhZGVyIH0gZnJvbSAnLi91cGMtZS1yZWFkZXInO1xuaW1wb3J0IHsgSTJvZjVSZWFkZXIgfSBmcm9tICcuL2kyb2Y1LXJlYWRlcic7XG5pbXBvcnQgeyBUd29PZkZpdmVSZWFkZXIgfSBmcm9tICcuLzJvZjUtcmVhZGVyJztcbmltcG9ydCB7IENvZGU5M1JlYWRlciB9IGZyb20gJy4vY29kZS05My1yZWFkZXInO1xuXG5leHBvcnQgY29uc3QgUmVhZGVycyA9IHtcbiAgICBjb2RlXzEyOF9yZWFkZXI6IENvZGUxMjhSZWFkZXIsXG4gICAgZWFuX3JlYWRlcjogRUFOUmVhZGVyLFxuICAgIGVhbl81X3JlYWRlcjogRUFONVJlYWRlcixcbiAgICBlYW5fMl9yZWFkZXI6IEVBTjJSZWFkZXIsXG4gICAgZWFuXzhfcmVhZGVyOiBFQU44UmVhZGVyLFxuICAgIGNvZGVfMzlfcmVhZGVyOiBDb2RlMzlSZWFkZXIsXG4gICAgY29kZV8zOV92aW5fcmVhZGVyOiBDb2RlMzlWSU5SZWFkZXIsXG4gICAgY29kYWJhcl9yZWFkZXI6IENvZGFiYXJSZWFkZXIsXG4gICAgdXBjX3JlYWRlcjogVVBDUmVhZGVyLFxuICAgIHVwY19lX3JlYWRlcjogVVBDRVJlYWRlcixcbiAgICBpMm9mNV9yZWFkZXI6IEkyb2Y1UmVhZGVyLFxuICAgICcyb2Y1X3JlYWRlcic6IFR3b09mRml2ZVJlYWRlcixcbiAgICBjb2RlXzkzX3JlYWRlcjogQ29kZTkzUmVhZGVyXG59O1xuIiwiaW1wb3J0IHsgQmFyY29kZUluZm8sIEJhcmNvZGVSZWFkZXIsIEJhcmNvZGVSZWFkZXJDb25maWcgfSBmcm9tICcuL2JhcmNvZGUtcmVhZGVyJztcbmltcG9ydCB7IEVBTlJlYWRlciB9IGZyb20gJy4vZWFuLXJlYWRlcic7XG5cbmNvbnN0IENPREVfRlJFUVVFTkNZID0gW1s1NiwgNTIsIDUwLCA0OSwgNDQsIDM4LCAzNSwgNDIsIDQxLCAzN10sIFs3LCAxMSwgMTMsIDE0LCAxOSwgMjUsIDI4LCAyMSwgMjIsIDI2XV07XG5cbmV4cG9ydCBjbGFzcyBVUENFUmVhZGVyIGV4dGVuZHMgRUFOUmVhZGVyIHtcbiAgICBnZXQgU1RPUF9QQVRURVJOKCkge1xuICAgICAgICByZXR1cm4gWzEgLyA2ICogNywgMSAvIDYgKiA3LCAxIC8gNiAqIDcsIDEgLyA2ICogNywgMSAvIDYgKiA3LCAxIC8gNiAqIDddO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZz86IEJhcmNvZGVSZWFkZXJDb25maWcsIHN1cHBsZW1lbnRzPzogQXJyYXk8QmFyY29kZVJlYWRlcj4pIHtcbiAgICAgICAgc3VwZXIoY29uZmlnLCBzdXBwbGVtZW50cyk7XG5cbiAgICAgICAgdGhpcy5fZm9ybWF0ID0gJ3VwY19lJztcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2RlY29kZVBheWxvYWQoY29kZTogQmFyY29kZUluZm8sIHJlc3VsdDogQXJyYXk8bnVtYmVyPiwgZGVjb2RlZENvZGVzOiBBcnJheTxCYXJjb2RlSW5mbz4pOiBCYXJjb2RlSW5mbyB7XG4gICAgICAgIGxldCBjb2RlRnJlcXVlbmN5ID0gMHgwO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gICAgICAgICAgICBjb2RlID0gdGhpcy5fZGVjb2RlQ29kZShjb2RlLmVuZCk7XG4gICAgICAgICAgICBpZiAoIWNvZGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb2RlLmNvZGUgPj0gdGhpcy5DT0RFX0dfU1RBUlQpIHtcbiAgICAgICAgICAgICAgICBjb2RlLmNvZGUgPSBjb2RlLmNvZGUgLSB0aGlzLkNPREVfR19TVEFSVDtcbiAgICAgICAgICAgICAgICBjb2RlRnJlcXVlbmN5IHw9IDEgPDwgKDUgLSBpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGNvZGUuY29kZSk7XG4gICAgICAgICAgICBkZWNvZGVkQ29kZXMucHVzaChjb2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5fZGV0ZXJtaW5lUGFyaXR5KGNvZGVGcmVxdWVuY3ksIHJlc3VsdCkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvZGU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZGV0ZXJtaW5lUGFyaXR5KGNvZGVGcmVxdWVuY3k6IG51bWJlciwgcmVzdWx0OiBBcnJheTxudW1iZXI+KTogYm9vbGVhbiB7XG4gICAgICAgIGZvciAobGV0IG5yU3lzdGVtID0gMDsgbnJTeXN0ZW0gPCBDT0RFX0ZSRVFVRU5DWS5sZW5ndGg7IG5yU3lzdGVtKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQ09ERV9GUkVRVUVOQ1lbbnJTeXN0ZW1dLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvZGVGcmVxdWVuY3kgPT09IENPREVfRlJFUVVFTkNZW25yU3lzdGVtXVtpXSkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQudW5zaGlmdChuclN5c3RlbSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGkpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2NvbnZlcnRUb1VQQ0EocmVzdWx0OiBBcnJheTxudW1iZXI+KTogQXJyYXk8bnVtYmVyPiB7XG4gICAgICAgIGNvbnN0IGxhc3REaWdpdCA9IHJlc3VsdFtyZXN1bHQubGVuZ3RoIC0gMl07XG4gICAgICAgIGxldCB1cGNhID0gW3Jlc3VsdFswXV07XG5cbiAgICAgICAgaWYgKGxhc3REaWdpdCA8PSAyKSB7XG4gICAgICAgICAgICB1cGNhID0gdXBjYS5jb25jYXQocmVzdWx0LnNsaWNlKDEsIDMpKS5jb25jYXQoW2xhc3REaWdpdCwgMCwgMCwgMCwgMF0pLmNvbmNhdChyZXN1bHQuc2xpY2UoMywgNikpO1xuICAgICAgICB9IGVsc2UgaWYgKGxhc3REaWdpdCA9PT0gMykge1xuICAgICAgICAgICAgdXBjYSA9IHVwY2EuY29uY2F0KHJlc3VsdC5zbGljZSgxLCA0KSkuY29uY2F0KFswLCAwLCAwLCAwLCAwXSkuY29uY2F0KHJlc3VsdC5zbGljZSg0LCA2KSk7XG4gICAgICAgIH0gZWxzZSBpZiAobGFzdERpZ2l0ID09PSA0KSB7XG4gICAgICAgICAgICB1cGNhID0gdXBjYS5jb25jYXQocmVzdWx0LnNsaWNlKDEsIDUpKS5jb25jYXQoWzAsIDAsIDAsIDAsIDAsIHJlc3VsdFs1XV0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdXBjYSA9IHVwY2EuY29uY2F0KHJlc3VsdC5zbGljZSgxLCA2KSkuY29uY2F0KFswLCAwLCAwLCAwLCBsYXN0RGlnaXRdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHVwY2EucHVzaChyZXN1bHRbcmVzdWx0Lmxlbmd0aCAtIDFdKTtcbiAgICAgICAgcmV0dXJuIHVwY2E7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9jaGVja3N1bShyZXN1bHQ6IEFycmF5PG51bWJlcj4pOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHN1cGVyLl9jaGVja3N1bSh0aGlzLl9jb252ZXJ0VG9VUENBKHJlc3VsdCkpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZmluZEVuZChvZmZzZXQ6IG51bWJlciwgaXNXaGl0ZTogMCB8IDEpIHtcbiAgICAgICAgaXNXaGl0ZSA9IDE7XG4gICAgICAgIHJldHVybiBzdXBlci5fZmluZEVuZChvZmZzZXQsIGlzV2hpdGUpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfdmVyaWZ5VHJhaWxpbmdXaGl0ZXNwYWNlKGVuZEluZm86IEJhcmNvZGVJbmZvKTogQmFyY29kZUluZm8ge1xuICAgICAgICBjb25zdCB0cmFpbGluZ1doaXRlc3BhY2VFbmQgPSBlbmRJbmZvLmVuZCArIChlbmRJbmZvLmVuZCAtIGVuZEluZm8uc3RhcnQpIC8gMjtcblxuICAgICAgICBpZiAodHJhaWxpbmdXaGl0ZXNwYWNlRW5kIDwgdGhpcy5fcm93Lmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX21hdGNoUmFuZ2UoZW5kSW5mby5lbmQsIHRyYWlsaW5nV2hpdGVzcGFjZUVuZCwgMCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZW5kSW5mbztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBCYXJjb2RlLCBCYXJjb2RlUmVhZGVyLCBCYXJjb2RlUmVhZGVyQ29uZmlnIH0gZnJvbSAnLi9iYXJjb2RlLXJlYWRlcic7XG5pbXBvcnQgeyBFQU5SZWFkZXIgfSBmcm9tICcuL2Vhbi1yZWFkZXInO1xuXG5leHBvcnQgY2xhc3MgVVBDUmVhZGVyIGV4dGVuZHMgRUFOUmVhZGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihjb25maWc/OiBCYXJjb2RlUmVhZGVyQ29uZmlnLCBzdXBwbGVtZW50cz86IEFycmF5PEJhcmNvZGVSZWFkZXI+KSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZywgc3VwcGxlbWVudHMpO1xuXG4gICAgICAgIHRoaXMuX2Zvcm1hdCA9ICd1cGNfYSc7XG4gICAgfVxuXG4gICAgZGVjb2RlKCk6IEJhcmNvZGUge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5kZWNvZGUoKTtcblxuICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5jb2RlICYmIHJlc3VsdC5jb2RlLmxlbmd0aCA9PT0gMTMgJiYgcmVzdWx0LmNvZGUuY2hhckF0KDApID09PSAnMCcpIHtcbiAgICAgICAgICAgIHJlc3VsdC5jb2RlID0gcmVzdWx0LmNvZGUuc3Vic3RyaW5nKDEpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9