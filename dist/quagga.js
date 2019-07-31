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
  // @ts-ignore
  var factorySource = __factorySource__ || '';
  var blob = new Blob(["(".concat(_workerInterface.toString(), ")(").concat(factorySource, ");")], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9RdWFnZ2Evd2VicGFjay9teU1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vUXVhZ2dhL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1F1YWdnYS8vVXNlcnMvYWRvbXJhdGNoZXYvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy9Vc2Vycy9hZG9tcmF0Y2hldi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy9Vc2Vycy9hZG9tcmF0Y2hldi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yLmpzIiwid2VicGFjazovL1F1YWdnYS8vVXNlcnMvYWRvbXJhdGNoZXYvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy9Vc2Vycy9hZG9tcmF0Y2hldi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly9RdWFnZ2EvL1VzZXJzL2Fkb21yYXRjaGV2L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL1F1YWdnYS8vVXNlcnMvYWRvbXJhdGNoZXYvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0LmpzIiwid2VicGFjazovL1F1YWdnYS8vVXNlcnMvYWRvbXJhdGNoZXYvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy9Vc2Vycy9hZG9tcmF0Y2hldi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly9RdWFnZ2EvL1VzZXJzL2Fkb21yYXRjaGV2L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9RdWFnZ2EvL1VzZXJzL2Fkb21yYXRjaGV2L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL1F1YWdnYS8vVXNlcnMvYWRvbXJhdGNoZXYvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly9RdWFnZ2EvL1VzZXJzL2Fkb21yYXRjaGV2L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL1F1YWdnYS8vVXNlcnMvYWRvbXJhdGNoZXYvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc3VwZXJQcm9wQmFzZS5qcyIsIndlYnBhY2s6Ly9RdWFnZ2EvL1VzZXJzL2Fkb21yYXRjaGV2L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovL1F1YWdnYS8vVXNlcnMvYWRvbXJhdGNoZXYvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL1F1YWdnYS8vVXNlcnMvYWRvbXJhdGNoZXYvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwid2VicGFjazovL1F1YWdnYS8vVXNlcnMvYWRvbXJhdGNoZXYvbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS1tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy9Vc2Vycy9hZG9tcmF0Y2hldi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovL1F1YWdnYS8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL2FuYWx5dGljcy9yZXN1bHQtY29sbGVjdG9yLnRzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9jb21tb24vY2x1c3Rlci50cyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvY29tbW9uL2V2ZW50cy50cyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvY29tbW9uL2hzdjJyZ2IudHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL2NvbW1vbi9pbWFnZS1kZWJ1Zy50cyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvY29tbW9uL2ltYWdlLXdyYXBwZXIudHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL2NvbW1vbi9tZWRpYS1kZXZpY2VzLnRzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9jb21tb24vbWVyZ2UudHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL2NvbmZpZy9jb25maWcuZGV2LnRzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9kZWNvZGVyL2JhcmNvZGUtZGVjb2Rlci50cyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvZGVjb2Rlci9icmVzZW5oYW0udHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL2lucHV0L2NhbWVyYS1hY2Nlc3MudHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL2lucHV0L2V4aWYtaGVscGVyLnRzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9pbnB1dC9mcmFtZS1ncmFiYmVyLnRzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9pbnB1dC9pbWFnZS1sb2FkZXIudHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL2lucHV0L2ltYWdlLXN0cmVhbS50cyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvaW5wdXQvaW5wdXQtc3RyZWFtLXV0aWxzLnRzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9pbnB1dC9pbnB1dC1zdHJlYW0udHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL2lucHV0L2xpdmUtc3RyZWFtLnRzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9pbnB1dC92aWRlby1zdHJlYW0udHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL2xvY2F0b3IvYmFyY29kZS1sb2NhdG9yLXV0aWxzLnRzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9sb2NhdG9yL2JhcmNvZGUtbG9jYXRvci50cyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvbG9jYXRvci9yYXN0ZXJpemVyLnRzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9sb2NhdG9yL3NrZWxldG9uaXplci5qcyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvbG9jYXRvci90cmFjZXIudHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL3F1YWdnYS50cyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvcmVhZGVyLzJvZjUtcmVhZGVyLnRzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9yZWFkZXIvYmFyY29kZS1yZWFkZXIudHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL3JlYWRlci9jb2RhYmFyLXJlYWRlci50cyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvcmVhZGVyL2NvZGUtMTI4LXJlYWRlci50cyIsIndlYnBhY2s6Ly9RdWFnZ2EvLi9zcmMvcmVhZGVyL2NvZGUtMzktcmVhZGVyLnRzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9yZWFkZXIvY29kZS0zOS12aW4tcmVhZGVyLnRzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9yZWFkZXIvY29kZS05My1yZWFkZXIudHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL3JlYWRlci9lYW4tMi1yZWFkZXIudHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL3JlYWRlci9lYW4tNS1yZWFkZXIudHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL3JlYWRlci9lYW4tOC1yZWFkZXIudHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL3JlYWRlci9lYW4tcmVhZGVyLnRzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9yZWFkZXIvaTJvZjUtcmVhZGVyLnRzIiwid2VicGFjazovL1F1YWdnYS8uL3NyYy9yZWFkZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL3JlYWRlci91cGMtZS1yZWFkZXIudHMiLCJ3ZWJwYWNrOi8vUXVhZ2dhLy4vc3JjL3JlYWRlci91cGMtcmVhZGVyLnRzIl0sIm5hbWVzIjpbIlJlc3VsdENvbGxlY3RvciIsImNvbmZpZyIsIl9yZXN1bHRzIiwiQXJyYXkiLCJfY29uZmlnIiwiX2NhcGFjaXR5IiwiY2FwYWNpdHkiLCJfY2FwdHVyZSIsImNhcHR1cmUiLCJfY2FudmFzIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiX2NvbnRleHQiLCJnZXRDb250ZXh0IiwiZGF0YSIsImltYWdlV2lkdGgiLCJpbWFnZUhlaWdodCIsImNvZGVSZXN1bHQiLCJfY29udGFpbnMiLCJfcGFzc2VzRmlsdGVyIiwicmVzdWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJJbWFnZURlYnVnIiwiZHJhd0ltYWdlIiwiZnJhbWUiLCJ0b0RhdGFVUkwiLCJwdXNoIiwiYmxhY2tsaXN0Iiwic29tZSIsIml0ZW0iLCJPYmplY3QiLCJrZXlzIiwiZXZlcnkiLCJrZXkiLCJmaWx0ZXIiLCJDbHVzdGVyIiwibW9tZW50cyIsInRocmVzaG9sZCIsImNsdXN0ZXJzIiwiZm9yRWFjaCIsIm1vbWVudCIsIm1hdGNoaW5nQ2x1c3RlciIsImZpbmQiLCJjbHVzdGVyIiwiZml0cyIsImFkZCIsIl90aHJlc2hvbGQiLCJfbW9tZW50cyIsIl9jZW50ZXIiLCJyYWQiLCJ4IiwieSIsInBvaW50IiwicmVkdWNlIiwic3VtIiwicCIsImxlbmd0aCIsIk1hdGgiLCJjb3MiLCJzaW4iLCJzaW1pbGFyaXR5IiwiYWJzIiwiZXZlbnRzIiwiRXZlbnRzIiwiZXZlbnQiLCJjYWxsYmFjayIsImFzeW5jIiwic3Vic2NyaXB0aW9uIiwiZ2V0RXZlbnQiLCJzdWJzY3JpcHRpb25zIiwidHlwZSIsImV2ZW50SXRlbSIsIm9uY2UiLCJwdWJsaXNoU3Vic2NyaXB0aW9uIiwic3Vic2NyaWJlIiwiZXZlbnROYW1lIiwic2V0VGltZW91dCIsImhzdjJyZ2IiLCJoc3YiLCJyZ2IiLCJoIiwicyIsInYiLCJjIiwibSIsInIiLCJnIiwiYiIsImRyYXdQYXRoIiwicGF0aCIsImNvbnRleHQiLCJjb2xvciIsImxpbmVXaWR0aCIsInN0cm9rZVN0eWxlIiwiZmlsbFN0eWxlIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwic2xpY2UiLCJsaW5lVG8iLCJjbG9zZVBhdGgiLCJzdHJva2UiLCJpbWFnZURhdGEiLCJjYW52YXNEYXRhIiwiZ2V0SW1hZ2VEYXRhIiwiaW1hZ2VJbmRleCIsImNhbnZhc0luZGV4IiwidmFsdWUiLCJwdXRJbWFnZURhdGEiLCJJbWFnZVdyYXBwZXIiLCJzaXplIiwiYXJyYXlUeXBlIiwiaW5pdGlhbGl6ZSIsIlVpbnQ4QXJyYXkiLCJmaWxsIiwiYm9yZGVyIiwiaW1hZ2VXcmFwcGVyIiwiZnJvbVgiLCJmcm9tWSIsInNpemVZIiwic2l6ZVgiLCJpIiwibGFiZWxDb3VudCIsImxhYmVsU3VtIiwibTAwIiwibTAxIiwibTEwIiwibTExIiwibTAyIiwibTIwIiwidGhldGEiLCJ5c3EiLCJ2YWwiLCJsYWJlbCIsIlBJIiwiUElfNCIsImlzTmFOIiwieF8iLCJ5XyIsIm11MTEiLCJtdTAyIiwibXUyMCIsInRtcCIsImF0YW4iLCJzY2FsZSIsImN1cnJlbnQiLCJwaXhlbCIsImdldCIsIndoaXRlUmdiIiwiYmxhY2tSZ2IiLCJlbnVtZXJhdGVEZXZpY2VzIiwibmF2aWdhdG9yIiwibWVkaWFEZXZpY2VzIiwiUHJvbWlzZSIsInJlamVjdCIsIkVycm9yIiwiZ2V0VXNlck1lZGlhIiwiY29uc3RyYWludHMiLCJtZXJnZSIsImlzT2JqZWN0Iiwib2JqIiwib2JqZWN0cyIsInByZXYiLCJwVmFsIiwib1ZhbCIsImlzQXJyYXkiLCJpbnB1dFN0cmVhbSIsIm5hbWUiLCJmYWNpbmdNb2RlIiwiYXJlYSIsInRvcCIsInJpZ2h0IiwibGVmdCIsImJvdHRvbSIsInNpbmdsZUNoYW5uZWwiLCJsb2NhdGUiLCJudW1PZldvcmtlcnMiLCJkZWNvZGVyIiwicmVhZGVycyIsImRlYnVnIiwiZHJhd0JvdW5kaW5nQm94Iiwic2hvd0ZyZXF1ZW5jeSIsImRyYXdTY2FubGluZSIsInNob3dQYXR0ZXJuIiwibG9jYXRvciIsImhhbGZTYW1wbGUiLCJwYXRjaFNpemUiLCJzaG93Q2FudmFzIiwic2hvd1BhdGNoZXMiLCJzaG93Rm91bmRQYXRjaGVzIiwic2hvd1NrZWxldG9uIiwic2hvd0xhYmVscyIsInNob3dQYXRjaExhYmVscyIsInNob3dSZW1haW5pbmdQYXRjaExhYmVscyIsImJveEZyb21QYXRjaGVzIiwic2hvd1RyYW5zZm9ybWVkIiwic2hvd1RyYW5zZm9ybWVkQm94Iiwic2hvd0JCIiwiQmFyY29kZURlY29kZXIiLCJpbnB1dEltYWdlV3JhcHBlciIsIl9pbnB1dEltYWdlV3JhcHBlciIsIl9iYXJjb2RlUmVhZGVycyIsInByb2Nlc3MiLCJkZWJ1Z0RpdiIsInF1ZXJ5U2VsZWN0b3IiLCJfZnJlcXVlbmN5Q2FudmFzIiwiY2xhc3NOYW1lIiwiYXBwZW5kQ2hpbGQiLCJzdHlsZSIsImRpc3BsYXkiLCJfcGF0dGVybkNhbnZhcyIsIm92ZXJsYXlDYW52YXMiLCJfb3ZlcmxheUNvbnRleHQiLCJfaW5pdFJlYWRlcnMiLCJib3hlcyIsImJhcmNvZGVzIiwibXVsdGlwbGUiLCJib3giLCJkZWNvZGVGcm9tQm91bmRpbmdCb3giLCJfZHJhd1BhdGgiLCJsaW5lIiwiX2dldExpbmUiLCJhbmdsZSIsImF0YW4yIiwiX2dldEV4dGVuZGVkTGluZSIsIl90cnlEZWNvZGUiLCJfdHJ5RGVjb2RlQnJ1dGVGb3JjZSIsInBhdHRlcm4iLCJiYXJjb2RlTGluZSIsInJlYWRlckNvbmZpZyIsInJlYWRlciIsImNvbmZpZ3VyYXRpb24iLCJzdXBwbGVtZW50cyIsImZvcm1hdCIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJzdXBwbGVtZW50IiwiUmVhZGVycyIsIkZPUk1BVCIsIkpTT04iLCJzdHJpbmdpZnkiLCJleHRlbmRMaW5lIiwiYW1vdW50IiwiZXh0ZW5zaW9uIiwibGluZUxlbmd0aCIsInNxcnQiLCJleHRlbnNpb25MZW5ndGgiLCJpbkltYWdlV2l0aEJvcmRlciIsIkJyZXNlbmhhbSIsImdldEJhcmNvZGVMaW5lIiwiX3ByaW50RnJlcXVlbmN5IiwidG9CaW5hcnlMaW5lIiwiX3ByaW50UGF0dGVybiIsImRlY29kZVBhdHRlcm4iLCJsaW5lQW5nbGUiLCJzaWRlTGVuZ3RoIiwic2xpY2VzIiwieGRpciIsInlkaXIiLCJkaXIiLCJmaWxsUmVjdCIsIlNsb3BlIiwicDEiLCJwMiIsIngwIiwieTAiLCJ4MSIsInkxIiwic3RlZXAiLCJtaW4iLCJtYXgiLCJyZWFkIiwiYSIsImRlbHRheCIsImRlbHRheSIsImVycm9yIiwieXN0ZXAiLCJjZW50ZXIiLCJleHRyZW1hIiwiclRocmVzaG9sZCIsImN1cnJlbnREaXIiLCJVcCIsIkRvd24iLCJwb3MiLCJzbG9wZSIsInNsb3BlMiIsImoiLCJfc3RyZWFtIiwiQ2FtZXJhQWNjZXNzIiwicmVxdWVzdCIsInZpZGVvIiwidmlkZW9Db25zdHJhaW50cyIsIm5vcm1hbGl6ZWRDb25zdHJhaW50cyIsInBpY2tDb25zdHJhaW50cyIsInNyY09iamVjdCIsInNldEF0dHJpYnV0ZSIsInJlc29sdmUiLCJhZGRFdmVudExpc3RlbmVyIiwicGxheSIsInRoZW4iLCJfd2FpdEZvclZpZGVvIiwiYmluZCIsInJlbGVhc2UiLCJ0cmFja3MiLCJnZXRWaWRlb1RyYWNrcyIsInN0b3AiLCJlbnVtZXJhdGVWaWRlb0RldmljZXMiLCJkZXZpY2VzIiwia2luZCIsImdldEFjdGl2ZVN0cmVhbUxhYmVsIiwidHJhY2siLCJnZXRBY3RpdmVUcmFjayIsImFzcGVjdFJhdGlvIiwiZGV2aWNlSWQiLCJtaW5Bc3BlY3RSYXRpbyIsImZhY2luZyIsImF1ZGlvIiwidmlkZW9XaWR0aCIsInZpZGVvSGVpZ2h0IiwiYXR0ZW1wdHMiLCJjaGVja1ZpZGVvIiwid2luZG93IiwiRXhpZlRhZ3MiLCJBdmFpbGFibGVUYWdzIiwiZmluZFRhZ3NJbk9iamVjdFVSTCIsInNyYyIsInRhZ3MiLCJ0ZXN0Iiwib2JqZWN0VVJMVG9CbG9iIiwiYnVmZmVyIiwiZmluZFRhZ3NJbkJ1ZmZlciIsImZpbGUiLCJzZWxlY3RlZFRhZ3MiLCJkYXRhVmlldyIsIkRhdGFWaWV3IiwiYnl0ZUxlbmd0aCIsImV4aWZUYWdzIiwic2VsZWN0ZWRUYWciLCJleGlmVGFnIiwidGFnIiwib2Zmc2V0IiwiZ2V0VWludDgiLCJtYXJrZXIiLCJyZWFkRVhJRkRhdGEiLCJnZXRVaW50MTYiLCJ1cmwiLCJmZXRjaCIsInJlc3BvbnNlIiwib2siLCJhcnJheUJ1ZmZlciIsInN0YXR1cyIsInN0YXJ0Iiwic3BsaXQiLCJjaGFyIiwiaW5kZXgiLCJjaGFyQ29kZUF0IiwidGlmZk9mZnNldCIsImJpZ0VuZCIsImZpcnN0SUZET2Zmc2V0IiwiZ2V0VWludDMyIiwicmVhZFRhZ3MiLCJkaXJTdGFydCIsInN0cmluZ3MiLCJlbnRyaWVzIiwiZW50cnlPZmZzZXQiLCJyZWFkVGFnVmFsdWUiLCJudW1WYWx1ZXMiLCJ1bmRlZmluZWQiLCJRVUFURVJfQ0lSQ0xFIiwiRnJhbWVHcmFiYmVyIiwiY2FudmFzIiwiX2lucHV0U3RyZWFtIiwiX3N0cmVhbUNvbmZpZyIsIl9jYW52YXNXaWR0aCIsImNhbnZhc1dpZHRoIiwiX2NhbnZhc0hlaWdodCIsImNhbnZhc0hlaWdodCIsIl93aWR0aCIsIl9oZWlnaHQiLCJfdG9wTGVmdCIsInRvcExlZnQiLCJfZGF0YSIsInZpZGVvU2l6ZSIsInJlYWxXaWR0aCIsInJlYWxIZWlnaHQiLCJjYW52YXNTaXplIiwiZ2V0RnJhbWUiLCJfYWRqdXN0Q2FudmFzU2l6ZSIsImRyYXdhYmxlIiwiZHJhd0FuZ2xlIiwiSFRNTFZpZGVvRWxlbWVudCIsImltYWdlIiwib3JpZW50YXRpb24iLCJoYWxmV2lkdGgiLCJoYWxmSGVpZ2h0IiwidHJhbnNsYXRlIiwicm90YXRlIiwiX2dyYXlBbmRIYWxmU2FtcGxlRnJvbUNhbnZhc0RhdGEiLCJfY29tcHV0ZUdyYXkiLCJ3YXJuIiwiZW5kSW5kZXgiLCJvdXRXaWR0aCIsInRvcFJvd0luZGV4IiwiYm90dG9tUm93SW5kZXgiLCJvdXRJbWFnZUluZGV4IiwidG9wNCIsImJvdHRvbTQiLCJpbWFnZURhdGFMZW5ndGgiLCJJbWFnZUxvYWRlciIsImJhc2VVcmkiLCJzZXF1ZW5jZSIsImxvYWRlZCIsImxvYWRlZEltYWdlIiwibm90TG9hZGVkSW1hZ2VzIiwic3BsaWNlIiwiaW1hZ2VTcmNzIiwiaW1hZ2VOYW1lIiwic3Vic3RyIiwibGFzdEluZGV4T2YiLCJsb2FkZWRJbWFnZXMiLCJmaXJzdEltYWdlIiwiSW1hZ2UiLCJvbmxvYWQiLCJJbWFnZVN0cmVhbSIsIl9iYXNlVXJsIiwiX2VuZGVkIiwiX2ZyYW1lSW5kZXgiLCJfaW1hZ2VzIiwiX2xvYWRlZCIsIl9vZmZzZXQiLCJfcGF1c2VkIiwiX3NpemUiLCJ0cmlnZ2VyIiwibG9hZCIsImltYWdlcyIsIl9jYWxjdWxhdGVkV2lkdGgiLCJfY2FsY3VsYXRlZEhlaWdodCIsIl9sb2FkSW1hZ2VzIiwidGltZSIsIklucHV0U3RyZWFtIiwiX2NvbXB1dGVEaXZpc29ycyIsIm4iLCJkaXZpc29ycyIsImxhcmdlRGl2aXNvcnMiLCJkaXZpc29yIiwidW5zaGlmdCIsImNvbmNhdCIsIl9jb21wdXRlQ29tbW9uRGl2aXNvcnMiLCJsYXJnZURpdmlzb3IiLCJjYWxjdWxhdGVQYXRjaFNpemUiLCJ3aWRlU2lkZSIsIm5yT2ZQYXRjaGVzTGlzdCIsIm5yT2ZQYXRjaGVzTWFwIiwic21hbGwiLCJtZWRpdW0iLCJsYXJnZSIsIm5yT2ZQYXRjaGVzSW5kZXgiLCJuck9mUGF0Y2hlcyIsImRlc2lyZWRQYXRjaFNpemUiLCJmaW5kUGF0Y2hTaXplRm9yRGl2aXNvcnMiLCJmb3VuZCIsIm9wdGltYWxQYXRjaFNpemUiLCJjaGVja0ltYWdlQ29uc3RyYWludHMiLCJzaGlmdCIsImlucHV0U3RyZWFtQ29uZmlnIiwiY29tcHV0ZUltYWdlQXJlYSIsInNldENhbnZhc1NpemUiLCJfcGFyc2VDc3NEaW1lbnNpb25WYWx1ZXMiLCJkaW1lbnNpb24iLCJwYXJzZUZsb2F0IiwidW5pdCIsImluZGV4T2YiLCJfZGltZW5zaW9uc0NvbnZlcnRlcnMiLCJpbnB1dFdpZHRoIiwiaW5wdXRIZWlnaHQiLCJwYXJzZWRBcmVhIiwicGFyc2VkIiwiY2FsY3VsYXRlZCIsIl9ldmVudE5hbWVzIiwiX2V2ZW50SGFuZGxlcnMiLCJNYXAiLCJsaXN0ZW5lciIsIl9vcHRpb25zIiwiaGFzIiwic2V0IiwiY2xlYXIiLCJhcmdBcnJheSIsImhhbmRsZXJzIiwiYXBwbHkiLCJMaXZlU3RyZWFtIiwiVmlkZW9TdHJlYW0iLCJfdmlkZW8iLCJwYXVzZSIsIm9wdGlvbnMiLCJfaW5pdFNpemUiLCJlbmRlZCIsImN1cnJlbnRUaW1lIiwiaW52ZXJ0IiwibWF0cml4IiwiYTAiLCJhMSIsImEyIiwiYTMiLCJkZXRlcm1pbmFudCIsIkZsb2F0MzJBcnJheSIsInRyYW5zZm9ybVdpdGhNYXRyaXgiLCJfY29tcHV0ZUhpc3RvZ3JhbSIsImJpdHNQZXJQaXhlbCIsImJpdFNoaWZ0IiwiYnVja2V0Q291bnQiLCJoaXN0b2dyYW0iLCJJbnQzMkFycmF5IiwiX2RldGVybWluZU90c3VUaHJlc2hvbGQiLCJoaXN0IiwidmV0IiwicHgiLCJpbml0IiwiZW5kIiwibXgiLCJrIiwicDEyIiwibTEiLCJtMiIsIm0xMiIsIm1heEluZGV4IiwiYXJyYXkiLCJvdHN1VGhyZXNob2xkIiwidGFyZ2V0V3JhcHBlciIsInRhcmdldERhdGEiLCJvdXRJbWFnZVdyYXBwZXIiLCJvdXRJbWFnZSIsIm91dEltZ0luZGV4IiwiTW9tZW50U2ltaWxhcml0eVRocmVzaG9sZCIsIkJhcmNvZGVMb2NhdG9yIiwiX251bVBhdGNoZXMiLCJfaW5pdEJ1ZmZlcnMiLCJfaW5pdENhbnZhcyIsIl9jdXJyZW50SW1hZ2VXcmFwcGVyIiwiX2JpbmFyaXplSW1hZ2UiLCJwYXRjaGVzRm91bmQiLCJfZmluZFBhdGNoZXMiLCJtYXhMYWJlbCIsIl9yYXN0ZXJpemVBbmd1bGFyU2ltaWxhcml0eSIsInRvcExhYmVscyIsIl9maW5kQmlnZ2VzdENvbm5lY3RlZEFyZWFzIiwiX2ZpbmRCb3hlcyIsIl9wYXRjaFNpemUiLCJfYmluYXJ5SW1hZ2VXcmFwcGVyIiwiX2xhYmVsSW1hZ2VXcmFwcGVyIiwic2tlbGV0b25JbWFnZURhdGEiLCJBcnJheUJ1ZmZlciIsIl9zdWJJbWFnZVdyYXBwZXIiLCJfc2tlbEltYWdlV3JhcHBlciIsIl9za2VsZXRvbml6ZXIiLCJza2VsZXRvbml6ZXIiLCJzZWxmIiwiZ2xvYmFsIiwiX3BhdGNoTGFiZWxHcmlkIiwiX3BhdGNoR3JpZCIsIl9pbWFnZVRvUGF0Y2hHcmlkIiwidXNlV29ya2VyIiwiX2JpbmFyeUNvbnRleHQiLCJwYXRjaGVzIiwiYXZlcmFnZVJhZCIsIl9kcmF3UmVjdCIsImludmVyc2VNYXRyaXgiLCJtaW5YIiwibWluWSIsIm1heFgiLCJtYXhZIiwidmVydGV4IiwiemVyb0JvcmRlciIsInNob3ciLCJfc2tlbGV0b25pemUiLCJyYXN0ZXJpemVyIiwiUmFzdGVyaXplciIsInJhc3RlclJlc3VsdCIsInJhc3Rlcml6ZSIsIm92ZXJsYXkiLCJjb3VudCIsInBhdGNoIiwiX2Rlc2NyaWJlUGF0Y2giLCJsYWJlbEhpc3QiLCJzb3J0IiwiX2JveEZyb21QYXRjaGVzIiwiam9pbiIsImNsdXN0ZXJpemUiLCJ0b3BDbHVzdGVyIiwic3ViSW1hZ2VBc0NvcHkiLCJza2VsZXRvbml6ZSIsIm1pbkNvbXBvbmVudFdlaWdodCIsImNlaWwiLCJlbGlnaWJsZU1vbWVudHMiLCJtYXRjaGluZ01vbWVudHMiLCJfc2ltaWxhck1vbWVudHMiLCJjdXJyZW50SW5kZXgiLCJjdXJyZW50UGF0Y2giLCJTZWFyY2hEaXJlY3Rpb25zIiwiZGlyZWN0aW9uIiwiTnVtYmVyIiwiTUFYX1ZBTFVFIiwiX3RyYWNlIiwiX25vdFlldFByb2Nlc3NlZCIsInN0cm9rZVJlY3QiLCJFZGdlTGFiZWwiLCJDb250b3VyRGlyZWN0aW9uIiwibGFiZWxXcmFwcGVyIiwiX2ltYWdlRGF0YSIsIl9sYWJlbERhdGEiLCJfdHJhY2VyIiwiVHJhY2VyIiwiZGVwdGhMYWJlbCIsImNvbG9yTWFwIiwiY2MiLCJzYyIsImNvbm5lY3RlZENvdW50IiwiY3kiLCJsYWJlbEluZGV4IiwiYmMiLCJjeCIsImxjIiwiY29udG91clRyYWNpbmciLCJPdXRzaWRlIiwiQ1ciLCJmaXJzdFZlcnRleCIsIm5leHRQZWVyIiwiaW5zaWRlQ29udG91cnMiLCJwcmV2aW91c1BlZXIiLCJJbnNpZGUiLCJDQ1ciLCJmaXJzdENvbnRvdXIiLCJwcSIsImlxIiwicSIsIlVua25vd24iLCJuZXh0IiwiU2tlbGV0b25pemVyIiwic3RkbGliIiwiZm9yZWlnbiIsImltdWwiLCJlcm9kZSIsImluSW1hZ2VQdHIiLCJvdXRJbWFnZVB0ciIsInUiLCJ5U3RhcnQxIiwieVN0YXJ0MiIsInhTdGFydDEiLCJ4U3RhcnQyIiwic3VidHJhY3QiLCJhSW1hZ2VQdHIiLCJiSW1hZ2VQdHIiLCJiaXR3aXNlT3IiLCJjb3VudE5vblplcm8iLCJpbWFnZVB0ciIsImRpbGF0ZSIsIm1lbWNweSIsInNyY0ltYWdlUHRyIiwiZHN0SW1hZ2VQdHIiLCJzdWJJbWFnZVB0ciIsImVyb2RlZEltYWdlUHRyIiwidGVtcEltYWdlUHRyIiwic2tlbEltYWdlUHRyIiwiZG9uZSIsImVkZ2VMYWJlbCIsInN5Iiwic3giLCJGdiIsInRyYWNlIiwiQ3YiLCJsZGlyIiwiUCIsIl9mcmFtZUdyYWJiZXIiLCJfc3RvcHBlZCIsIl9jYW52YXNDb250YWluZXIiLCJjdHgiLCJkb20iLCJfbG9jYXRvciIsIl9ib3hTaXplIiwiX2RlY29kZXIiLCJfd29ya2VyUG9vbCIsIl9vblVJVGhyZWFkIiwiX3Jlc3VsdENvbGxlY3RvciIsImNiIiwiZGVmYXVsdENvbmZpZyIsIl9pbml0aWFsaXplRGF0YSIsIl9pbml0SW5wdXRTdHJlYW0iLCJfc3RhcnRDb250aW51b3VzVXBkYXRlIiwiX3VwZGF0ZSIsIl9hZGp1c3RXb3JrZXJQb29sIiwiY2xlYXJFdmVudEhhbmRsZXJzIiwiZGVjb2RlU2luZ2xlIiwicmVzdWx0Q2FsbGJhY2siLCJjYWxsIiwib25EZXRlY3RlZCIsIm9mZkRldGVjdGVkIiwidW5zdWJzY3JpYmUiLCJvblByb2Nlc3NlZCIsIm9mZlByb2Nlc3NlZCIsInNldFJlYWRlcnMiLCJ3b3JrZXIiLCJwb3N0TWVzc2FnZSIsImNtZCIsInJlZ2lzdGVyUmVzdWx0Q29sbGVjdG9yIiwicmVzdWx0Q29sbGVjdG9yIiwiYWRkUmVzdWx0Iiwidmlld3BvcnQiLCJfZ2V0Vmlld1BvcnQiLCJlcnIiLCJfY2FuUmVjb3JkIiwidGFyZ2V0IiwiSFRNTEVsZW1lbnQiLCJzZWxlY3RvciIsImNsZWFyRml4IiwiX2dldEJvdW5kaW5nQm94ZXMiLCJfdHJhbnNmb3JtIiwicG9seWdvbiIsIl90cmFuc2Zvcm1SZXN1bHQiLCJiYXJjb2RlIiwiX2FkZFJlc3VsdCIsIl9oYXNDb2RlUmVzdWx0IiwiX3B1Ymxpc2hSZXN1bHQiLCJyZXN1bHRUb1B1Ymxpc2giLCJwdWJsaXNoIiwiX2xvY2F0ZUFuZERlY29kZSIsImRlY29kZUZyb21Cb3VuZGluZ0JveGVzIiwiYXZhaWxhYmxlV29ya2VyIiwid29ya2VyVGhyZWFkIiwiYnVzeSIsImF0dGFjaERhdGEiLCJncmFiIiwiZGVsYXkiLCJmcmVxdWVuY3kiLCJ0aW1lc3RhbXAiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJwZXJmb3JtYW5jZSIsIm5vdyIsIl9pbml0V29ya2VyIiwiYmxvYlVSTCIsIl9nZW5lcmF0ZVdvcmtlckJsb2IiLCJXb3JrZXIiLCJvbm1lc3NhZ2UiLCJVUkwiLCJyZXZva2VPYmplY3RVUkwiLCJtZXNzYWdlIiwiX3dvcmtlckludGVyZmFjZSIsImZhY3RvcnkiLCJRdWFnZ2EiLCJmYWN0b3J5U291cmNlIiwiX19mYWN0b3J5U291cmNlX18iLCJibG9iIiwiQmxvYiIsInRvU3RyaW5nIiwiY3JlYXRlT2JqZWN0VVJMIiwiaW5jcmVhc2VCeSIsInRlcm1pbmF0ZSIsIk4iLCJXIiwiU1RBUlRfUEFUVEVSTiIsIlNUT1BfUEFUVEVSTiIsIkNPREVfUEFUVEVSTiIsInN0YXJ0UGF0dGVybkxlbmd0aCIsIlR3b09mRml2ZVJlYWRlciIsIl9iYXJTcGFjZVJhdGlvIiwiX2Zvcm1hdCIsIl9zaW5nbGVDb2RlRXJyb3IiLCJfYXZlcmFnZUNvZGVFcnJvciIsInN0YXJ0SW5mbyIsIl9maW5kU3RhcnQiLCJlbmRJbmZvIiwiX2ZpbmRFbmQiLCJjb3VudGVycyIsIl9maWxsQ291bnRlcnMiLCJkZWNvZGVkQ29kZXMiLCJjb2RlIiwiX2RlY29kZVBheWxvYWQiLCJfbmV4dFNldCIsIl9yb3ciLCJuYXJyb3dCYXJXaWR0aCIsIl9maW5kUGF0dGVybiIsImxlYWRpbmdXaGl0ZXNwYWNlU3RhcnQiLCJfbWF0Y2hSYW5nZSIsInRyYWlsaW5nV2hpdGVzcGFjZUVuZCIsInJldmVyc2UiLCJfdmVyaWZ5VHJhaWxpbmdXaGl0ZXNwYWNlIiwiY291bnRlciIsImJlc3RNYXRjaCIsIl9tYXRjaFBhdHRlcm4iLCJBVkVSQUdFX0NPREVfRVJST1IiLCJjb3VudGVyTGVuZ3RoIiwiX2RlY29kZUNvZGUiLCJCYXJjb2RlUmVhZGVyIiwiQmFyY29kZURpcmVjdGlvbiIsIlN0YXJ0Tm90Rm91bmRFeGNlcHRpb24iLCJDb2RlTm90Rm91bmRFeGNlcHRpb24iLCJQYXR0ZXJuTm90Rm91bmRFeGNlcHRpb24iLCJpc1doaXRlIiwidHJ5SGFyZGVyIiwiZXBzaWxvbiIsImNvdW50ZXJQb3MiLCJtYXhTaW5nbGVFcnJvciIsIm1vZHVsbyIsIlNJTkdMRV9DT0RFX0VSUk9SIiwiYmFyV2lkdGgiLCJzY2FsZWQiLCJzaW5nbGVFcnJvciIsImNvcnJlY3Rpb24iLCJpbmRpY2VzIiwiZGVjb2RlIiwiUmV2ZXJzZSIsIkZvcndhcmQiLCJudW1Db3VudGVycyIsIkFMUEhBQkVUSF9TVFJJTkciLCJBTFBIQUJFVCIsIkNIQVJBQ1RFUl9FTkNPRElOR1MiLCJTVEFSVF9FTkQiLCJNSU5fRU5DT0RFRF9DSEFSUyIsIk1BWF9BQ0NFUFRBQkxFIiwiUEFERElORyIsIkNvZGFiYXJSZWFkZXIiLCJfY291bnRlcnMiLCJfbmV4dFVuc2V0IiwibmV4dFN0YXJ0Iiwic3RhcnRDb3VudGVyIiwiX3RvUGF0dGVybiIsImRlY29kZWRDaGFyIiwiX3BhdHRlcm5Ub0NoYXIiLCJfdmVyaWZ5V2hpdGVzcGFjZSIsIl92YWxpZGF0ZVJlc3VsdCIsIl9zdW1Db3VudGVycyIsImVuZENvdW50ZXIiLCJfY2FsY3VsYXRlUGF0dGVybkxlbmd0aCIsImNhdGVnb3JpemF0aW9uIiwic3BhY2UiLCJuYXJyb3ciLCJjb3VudHMiLCJ3aWRlIiwiYmFyIiwiX2NoYXJUb1BhdHRlcm4iLCJjYXQiLCJmbG9vciIsImNoYXJDb2RlIiwiX3RocmVzaG9sZFJlc3VsdFBhdHRlcm4iLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJiYXJUaHJlc2hvbGQiLCJfY29tcHV0ZUFsdGVybmF0aW5nVGhyZXNob2xkIiwic3BhY2VUaHJlc2hvbGQiLCJiaXRtYXNrIiwiQ09ERV9TSElGVCIsIkNPREVfQyIsIkNPREVfQiIsIkNPREVfQSIsIlNUQVJUX0NPREVfQSIsIlNUQVJUX0NPREVfQiIsIlNUQVJUX0NPREVfQyIsIlNUT1BfQ09ERSIsIk1PRFVMRV9JTkRJQ0VTIiwiQ29kZTEyOFJlYWRlciIsIl9jb3JyZWN0IiwiZXhwZWN0ZWQiLCJfY2FsY3VsYXRlQ29ycmVjdGlvbiIsIl9jb3JyZWN0QmFycyIsIm11bHRpcGxpZXIiLCJjaGVja3N1bSIsImNvZGVzZXQiLCJyYXdSZXN1bHQiLCJzaGlmdE5leHQiLCJyZW1vdmVMYXN0Q2hhcmFjdGVyIiwibm9ybWFsaXplZCIsInN1bU5vcm1hbGl6ZWQiLCJzdW1FeHBlY3RlZCIsIkFTVEVSSVNLIiwiVWludDE2QXJyYXkiLCJDb2RlMzlSZWFkZXIiLCJsYXN0U3RhcnQiLCJfdG9Db3VudGVycyIsInBvcCIsInBhdHRlcm5TaXplIiwibWluV2lkdGgiLCJtYXhOYXJyb3dXaWR0aCIsIm51bVdpZGVCYXJzIiwid2lkZUJhcldpZHRoIiwiX2ZpbmROZXh0V2lkdGgiLCJwYXR0ZXJuU3RhcnQiLCJ3aGl0ZVNwYWNlTXVzdFN0YXJ0IiwiQ29kZTM5VklOUmVhZGVyIiwicmVwbGFjZSIsIl9jaGVja0NoZWNrc3VtIiwiQ29kZTkzUmVhZGVyIiwiX3ZlcmlmeUVuZCIsIl92ZXJpZnlDaGVja3N1bXMiLCJfZGVjb2RlRXh0ZW5kZWQiLCJyb3VuZCIsImNoYXJBcnJheSIsIm5leHRDaGFyIiwibmV4dENoYXJDb2RlIiwiX21hdGNoQ2hlY2tDaGFyIiwibWF4V2VpZ2h0IiwiYXJyYXlUb0NoZWNrIiwid2VpZ2h0ZWRTdW1zIiwid2VpZ2h0IiwiY2hlY2tDaGFyIiwiRUFOMlJlYWRlciIsInJvdyIsImNvZGVGcmVxdWVuY3kiLCJDT0RFX0dfU1RBUlQiLCJwYXJzZUludCIsIkVBTlJlYWRlciIsIkVBTjVSZWFkZXIiLCJfZXh0ZW5zaW9uQ2hlY2tzdW0iLCJfZGV0ZXJtaW5lQ2hlY2tEaWdpdCIsIkNIRUNLX0RJR0lUX0VOQ09ESU5HUyIsIkVBTjhSZWFkZXIiLCJNSURETEVfUEFUVEVSTiIsIkVYVEVOU0lPTl9TVEFSVF9QQVRURVJOIiwiQ09ERV9GUkVRVUVOQ1kiLCJjb2RlcmFuZ2UiLCJmaXJzdERpZ2l0IiwiX2NhbGN1bGF0ZUZpcnN0RGlnaXQiLCJyZXN1bHRJbmZvIiwiX2NoZWNrc3VtIiwiX2RlY29kZUV4dGVuc2lvbnMiLCJsYXN0Q29kZSIsIk1BWF9DT1JSRUNUSU9OX0ZBQ1RPUiIsIkkyb2Y1UmVhZGVyIiwibm9ybWFsaXplQmFyU3BhY2VXaWR0aCIsImNvdW50ZXJTdW0iLCJjb2RlU3VtIiwiY29ycmVjdGlvblJhdGlvIiwiY29ycmVjdGlvblJhdGlvSW52ZXJzZSIsImNvdW50ZXIwIiwiY291bnRlcjEiLCJjb2RlMCIsImNvZGUxIiwiY29kZV8xMjhfcmVhZGVyIiwiZWFuX3JlYWRlciIsImVhbl81X3JlYWRlciIsImVhbl8yX3JlYWRlciIsImVhbl84X3JlYWRlciIsImNvZGVfMzlfcmVhZGVyIiwiY29kZV8zOV92aW5fcmVhZGVyIiwiY29kYWJhcl9yZWFkZXIiLCJ1cGNfcmVhZGVyIiwiVVBDUmVhZGVyIiwidXBjX2VfcmVhZGVyIiwiVVBDRVJlYWRlciIsImkyb2Y1X3JlYWRlciIsImNvZGVfOTNfcmVhZGVyIiwiX2RldGVybWluZVBhcml0eSIsIm5yU3lzdGVtIiwibGFzdERpZ2l0IiwidXBjYSIsIl9jb252ZXJ0VG9VUENBIiwiY2hhckF0Iiwic3Vic3RyaW5nIl0sIm1hcHBpbmdzIjoiOztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQztBQUNELFc7QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0EsaURBQWlELGdCQUFnQjtBQUNqRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkLEtBQUs7QUFDTCxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsY0FBYztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFD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QUFMTDtBQUFBO0FBQUEsNkJBT3NCO0FBQ2QsVUFBTXh1QixNQUFNLEdBQUcsK0xBQWY7O0FBRUEsVUFBSUEsTUFBTSxJQUFJQSxNQUFNLENBQUNrdkIsSUFBakIsSUFBeUJsdkIsTUFBTSxDQUFDa3ZCLElBQVAsQ0FBWTdzQixNQUFaLEtBQXVCLEVBQWhELElBQXNEckMsTUFBTSxDQUFDa3ZCLElBQVAsQ0FBWW9MLE1BQVosQ0FBbUIsQ0FBbkIsTUFBMEIsR0FBcEYsRUFBeUY7QUFDckZ0NkIsY0FBTSxDQUFDa3ZCLElBQVAsR0FBY2x2QixNQUFNLENBQUNrdkIsSUFBUCxDQUFZcUwsU0FBWixDQUFzQixDQUF0QixDQUFkO0FBQ0EsZUFBT3Y2QixNQUFQO0FBQ0g7O0FBRUQsYUFBTyxJQUFQO0FBQ0g7QUFoQkw7O0FBQUE7QUFBQSxFQUErQnczQixxREFBL0IsRSIsImZpbGUiOiJxdWFnZ2EuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG4gICAgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jykge1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoZmFjdG9yeS50b1N0cmluZygpKS5kZWZhdWx0O1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGV4cG9ydHNbXCJRdWFnZ2FcIl0gPSBmYWN0b3J5KGZhY3RvcnkudG9TdHJpbmcoKSkuZGVmYXVsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgICByb290W1wiUXVhZ2dhXCJdID0gZmFjdG9yeShmYWN0b3J5LnRvU3RyaW5nKCkpLmRlZmF1bHQ7XG4gICAgfVxufSkodGhpcywgZnVuY3Rpb24oX19mYWN0b3J5U291cmNlX18pIHtcbiAgICByZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3F1YWdnYS50c1wiKTtcbiIsImZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcnIyW2ldID0gYXJyW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBhcnIyO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aG91dEhvbGVzOyIsImZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZDsiLCJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cblxuICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXN5bmNUb0dlbmVyYXRvcjsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjazsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eTsiLCJ2YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9nZXRQcm90b3R5cGVPZlwiKTtcblxudmFyIHN1cGVyUHJvcEJhc2UgPSByZXF1aXJlKFwiLi9zdXBlclByb3BCYXNlXCIpO1xuXG5mdW5jdGlvbiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBSZWZsZWN0LmdldCkge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX2dldCA9IFJlZmxlY3QuZ2V0O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX2dldCA9IGZ1bmN0aW9uIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHtcbiAgICAgIHZhciBiYXNlID0gc3VwZXJQcm9wQmFzZSh0YXJnZXQsIHByb3BlcnR5KTtcbiAgICAgIGlmICghYmFzZSkgcmV0dXJuO1xuICAgICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGJhc2UsIHByb3BlcnR5KTtcblxuICAgICAgaWYgKGRlc2MuZ2V0KSB7XG4gICAgICAgIHJldHVybiBkZXNjLmdldC5jYWxsKHJlY2VpdmVyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRlc2MudmFsdWU7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyIHx8IHRhcmdldCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2dldDsiLCJmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfTtcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2Y7IiwidmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vc2V0UHJvdG90eXBlT2ZcIik7XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW5oZXJpdHM7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmIChTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpdGVyKSA9PT0gXCJbb2JqZWN0IEFyZ3VtZW50c11cIikgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheTsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVTcHJlYWQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbnZhciBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgPSByZXF1aXJlKFwiLi9hc3NlcnRUaGlzSW5pdGlhbGl6ZWRcIik7XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfVxuXG4gIHJldHVybiBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm47IiwiZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG5cbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2Y7IiwidmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vZ2V0UHJvdG90eXBlT2ZcIik7XG5cbmZ1bmN0aW9uIF9zdXBlclByb3BCYXNlKG9iamVjdCwgcHJvcGVydHkpIHtcbiAgd2hpbGUgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSkpIHtcbiAgICBvYmplY3QgPSBnZXRQcm90b3R5cGVPZihvYmplY3QpO1xuICAgIGlmIChvYmplY3QgPT09IG51bGwpIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIG9iamVjdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc3VwZXJQcm9wQmFzZTsiLCJ2YXIgYXJyYXlXaXRob3V0SG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhvdXRIb2xlc1wiKTtcblxudmFyIGl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheVwiKTtcblxudmFyIG5vbkl0ZXJhYmxlU3ByZWFkID0gcmVxdWlyZShcIi4vbm9uSXRlcmFibGVTcHJlYWRcIik7XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdG9Db25zdW1hYmxlQXJyYXk7IiwiZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mMiA9IGZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZjIgPSBmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2YyKG9iaik7IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBfdHlwZW9mMihTeW1ib2wuaXRlcmF0b3IpID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBfdHlwZW9mMihvYmopO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiBfdHlwZW9mMihvYmopO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuLy8gVGhpcyBtZXRob2Qgb2Ygb2J0YWluaW5nIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0IG5lZWRzIHRvIGJlXG4vLyBrZXB0IGlkZW50aWNhbCB0byB0aGUgd2F5IGl0IGlzIG9idGFpbmVkIGluIHJ1bnRpbWUuanNcbnZhciBnID0gKGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcyB8fCAodHlwZW9mIHNlbGYgPT09IFwib2JqZWN0XCIgJiYgc2VsZik7XG59KSgpIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcblxuLy8gVXNlIGBnZXRPd25Qcm9wZXJ0eU5hbWVzYCBiZWNhdXNlIG5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCBjYWxsaW5nXG4vLyBgaGFzT3duUHJvcGVydHlgIG9uIHRoZSBnbG9iYWwgYHNlbGZgIG9iamVjdCBpbiBhIHdvcmtlci4gU2VlICMxODMuXG52YXIgaGFkUnVudGltZSA9IGcucmVnZW5lcmF0b3JSdW50aW1lICYmXG4gIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGcpLmluZGV4T2YoXCJyZWdlbmVyYXRvclJ1bnRpbWVcIikgPj0gMDtcblxuLy8gU2F2ZSB0aGUgb2xkIHJlZ2VuZXJhdG9yUnVudGltZSBpbiBjYXNlIGl0IG5lZWRzIHRvIGJlIHJlc3RvcmVkIGxhdGVyLlxudmFyIG9sZFJ1bnRpbWUgPSBoYWRSdW50aW1lICYmIGcucmVnZW5lcmF0b3JSdW50aW1lO1xuXG4vLyBGb3JjZSByZWV2YWx1dGF0aW9uIG9mIHJ1bnRpbWUuanMuXG5nLnJlZ2VuZXJhdG9yUnVudGltZSA9IHVuZGVmaW5lZDtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9ydW50aW1lXCIpO1xuXG5pZiAoaGFkUnVudGltZSkge1xuICAvLyBSZXN0b3JlIHRoZSBvcmlnaW5hbCBydW50aW1lLlxuICBnLnJlZ2VuZXJhdG9yUnVudGltZSA9IG9sZFJ1bnRpbWU7XG59IGVsc2Uge1xuICAvLyBSZW1vdmUgdGhlIGdsb2JhbCBwcm9wZXJ0eSBhZGRlZCBieSBydW50aW1lLmpzLlxuICB0cnkge1xuICAgIGRlbGV0ZSBnLnJlZ2VuZXJhdG9yUnVudGltZTtcbiAgfSBjYXRjaChlKSB7XG4gICAgZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSB1bmRlZmluZWQ7XG4gIH1cbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuIShmdW5jdGlvbihnbG9iYWwpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICB2YXIgaW5Nb2R1bGUgPSB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiO1xuICB2YXIgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWU7XG4gIGlmIChydW50aW1lKSB7XG4gICAgaWYgKGluTW9kdWxlKSB7XG4gICAgICAvLyBJZiByZWdlbmVyYXRvclJ1bnRpbWUgaXMgZGVmaW5lZCBnbG9iYWxseSBhbmQgd2UncmUgaW4gYSBtb2R1bGUsXG4gICAgICAvLyBtYWtlIHRoZSBleHBvcnRzIG9iamVjdCBpZGVudGljYWwgdG8gcmVnZW5lcmF0b3JSdW50aW1lLlxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBydW50aW1lO1xuICAgIH1cbiAgICAvLyBEb24ndCBib3RoZXIgZXZhbHVhdGluZyB0aGUgcmVzdCBvZiB0aGlzIGZpbGUgaWYgdGhlIHJ1bnRpbWUgd2FzXG4gICAgLy8gYWxyZWFkeSBkZWZpbmVkIGdsb2JhbGx5LlxuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIERlZmluZSB0aGUgcnVudGltZSBnbG9iYWxseSAoYXMgZXhwZWN0ZWQgYnkgZ2VuZXJhdGVkIGNvZGUpIGFzIGVpdGhlclxuICAvLyBtb2R1bGUuZXhwb3J0cyAoaWYgd2UncmUgaW4gYSBtb2R1bGUpIG9yIGEgbmV3LCBlbXB0eSBvYmplY3QuXG4gIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lID0gaW5Nb2R1bGUgPyBtb2R1bGUuZXhwb3J0cyA6IHt9O1xuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIHJ1bnRpbWUud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlW3RvU3RyaW5nVGFnU3ltYm9sXSA9XG4gICAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgcHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgcnVudGltZS5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBpZiAoISh0b1N0cmluZ1RhZ1N5bWJvbCBpbiBnZW5GdW4pKSB7XG4gICAgICAgIGdlbkZ1blt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG4gICAgICB9XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIHJ1bnRpbWUuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGhhbmRsZWQgdGhlcmUuXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIEFzeW5jSXRlcmF0b3IucHJvdG90eXBlW2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBydW50aW1lLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBydW50aW1lLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdClcbiAgICApO1xuXG4gICAgcmV0dXJuIHJ1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvci5yZXR1cm4pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBHcFt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvclwiO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIHJ1bnRpbWUua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBydW50aW1lLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xufSkoXG4gIC8vIEluIHNsb3BweSBtb2RlLCB1bmJvdW5kIGB0aGlzYCByZWZlcnMgdG8gdGhlIGdsb2JhbCBvYmplY3QsIGZhbGxiYWNrIHRvXG4gIC8vIEZ1bmN0aW9uIGNvbnN0cnVjdG9yIGlmIHdlJ3JlIGluIGdsb2JhbCBzdHJpY3QgbW9kZS4gVGhhdCBpcyBzYWRseSBhIGZvcm1cbiAgLy8gb2YgaW5kaXJlY3QgZXZhbCB3aGljaCB2aW9sYXRlcyBDb250ZW50IFNlY3VyaXR5IFBvbGljeS5cbiAgKGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzIHx8ICh0eXBlb2Ygc2VsZiA9PT0gXCJvYmplY3RcIiAmJiBzZWxmKTtcbiAgfSkoKSB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKClcbik7XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJpbXBvcnQgeyBJbWFnZURlYnVnIH0gZnJvbSAnLi4vY29tbW9uL2ltYWdlLWRlYnVnJztcbmltcG9ydCB7IFF1YWdnYUJhcmNvZGUgfSBmcm9tICcuLi9kZWNvZGVyL2JhcmNvZGUtZGVjb2Rlcic7XG5pbXBvcnQgeyBCYXJjb2RlIH0gZnJvbSAnLi4vcmVhZGVyL2JhcmNvZGUtcmVhZGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBSZXN1bHRDb2xsZWN0b3JDb25maWcge1xuICAgIGNhcGFjaXR5PzogbnVtYmVyO1xuICAgIGNhcHR1cmU/OiBib29sZWFuO1xuICAgIGJsYWNrbGlzdD86IEFycmF5PEJhcmNvZGU+O1xuICAgIGZpbHRlcj86IChpdGVtOiBCYXJjb2RlKSA9PiBib29sZWFuO1xufVxuXG5leHBvcnQgY2xhc3MgUmVzdWx0Q29sbGVjdG9yIHtcbiAgICBwcml2YXRlIF9jYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICAgIHByaXZhdGUgX2NvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcbiAgICBwcml2YXRlIF9jb25maWc6IFJlc3VsdENvbGxlY3RvckNvbmZpZztcbiAgICBwcml2YXRlIF9jYXBhY2l0eTogbnVtYmVyO1xuICAgIHByaXZhdGUgX2NhcHR1cmU6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBfcmVzdWx0czogQXJyYXk8UXVhZ2dhQmFyY29kZT47XG5cbiAgICBjb25zdHJ1Y3Rvcihjb25maWc6IFJlc3VsdENvbGxlY3RvckNvbmZpZykge1xuICAgICAgICB0aGlzLl9yZXN1bHRzID0gbmV3IEFycmF5PFF1YWdnYUJhcmNvZGU+KCk7XG4gICAgICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcbiAgICAgICAgdGhpcy5fY2FwYWNpdHkgPSBjb25maWcuY2FwYWNpdHkgfHwgMjA7XG4gICAgICAgIHRoaXMuX2NhcHR1cmUgPSBjb25maWcuY2FwdHVyZSA9PT0gdHJ1ZTtcblxuICAgICAgICBpZiAodGhpcy5fY2FwdHVyZSkge1xuICAgICAgICAgICAgdGhpcy5fY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgICAgICB0aGlzLl9jb250ZXh0ID0gdGhpcy5fY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRSZXN1bHQoZGF0YTogVWludDhBcnJheSwgaW1hZ2VXaWR0aDogbnVtYmVyLCBpbWFnZUhlaWdodDogbnVtYmVyLCBjb2RlUmVzdWx0OiBCYXJjb2RlKTogdm9pZCB7XG4gICAgICAgIGlmIChjb2RlUmVzdWx0ICYmIHRoaXMuX2NhcGFjaXR5ICYmICF0aGlzLl9jb250YWlucyhjb2RlUmVzdWx0KSAmJiB0aGlzLl9wYXNzZXNGaWx0ZXIoY29kZVJlc3VsdCkpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdDogUXVhZ2dhQmFyY29kZSA9IHsgY29kZVJlc3VsdCB9O1xuXG4gICAgICAgICAgICB0aGlzLl9jYXBhY2l0eS0tO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5fY2FwdHVyZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NhbnZhcy53aWR0aCA9IGltYWdlV2lkdGg7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2FudmFzLmhlaWdodCA9IGltYWdlSGVpZ2h0O1xuXG4gICAgICAgICAgICAgICAgSW1hZ2VEZWJ1Zy5kcmF3SW1hZ2UoZGF0YSwgaW1hZ2VXaWR0aCwgaW1hZ2VIZWlnaHQsIHRoaXMuX2NvbnRleHQpO1xuXG4gICAgICAgICAgICAgICAgcmVzdWx0LmZyYW1lID0gdGhpcy5fY2FudmFzLnRvRGF0YVVSTCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9yZXN1bHRzLnB1c2gocmVzdWx0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFJlc3VsdHMoKTogQXJyYXk8UXVhZ2dhQmFyY29kZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVzdWx0cztcbiAgICB9XG5cbiAgICBwcml2YXRlIF9jb250YWlucyhjb2RlUmVzdWx0OiBCYXJjb2RlKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb25maWcuYmxhY2tsaXN0ICYmXG4gICAgICAgICAgICB0aGlzLl9jb25maWcuYmxhY2tsaXN0LnNvbWUoaXRlbSA9PiBPYmplY3Qua2V5cyhpdGVtKS5ldmVyeShrZXkgPT4gaXRlbVtrZXldID09PSBjb2RlUmVzdWx0W2tleV0pKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9wYXNzZXNGaWx0ZXIoY29kZVJlc3VsdDogQmFyY29kZSk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdHlwZW9mIHRoaXMuX2NvbmZpZy5maWx0ZXIgIT09ICdmdW5jdGlvbicgfHwgdGhpcy5fY29uZmlnLmZpbHRlcihjb2RlUmVzdWx0KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBNb21lbnQgfSBmcm9tICcuL21vbWVudCc7XG5cblxuLyoqXG4gKiBDcmVhdGVzIGEgY2x1c3RlciBmb3IgZ3JvdXBpbmcgc2ltaWxhciBvcmllbnRhdGlvbnMgb2YgbW9tZW50c1xuICovXG5leHBvcnQgY2xhc3MgQ2x1c3RlciB7XG4gICAgcHJpdmF0ZSBfdGhyZXNob2xkOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfbW9tZW50czogQXJyYXk8TW9tZW50PjtcbiAgICBwcml2YXRlIF9jZW50ZXI6IE1vbWVudDtcblxuICAgIHN0YXRpYyBjbHVzdGVyaXplKG1vbWVudHM6IEFycmF5PE1vbWVudD4sIHRocmVzaG9sZDogbnVtYmVyKTogQXJyYXk8Q2x1c3Rlcj4ge1xuICAgICAgICBjb25zdCBjbHVzdGVycyA9IG5ldyBBcnJheTxDbHVzdGVyPigpO1xuXG4gICAgICAgIG1vbWVudHMuZm9yRWFjaChtb21lbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWF0Y2hpbmdDbHVzdGVyID0gY2x1c3RlcnMuZmluZChjbHVzdGVyID0+IGNsdXN0ZXIuZml0cyhtb21lbnQpKTtcblxuICAgICAgICAgICAgaWYgKG1hdGNoaW5nQ2x1c3Rlcikge1xuICAgICAgICAgICAgICAgIG1hdGNoaW5nQ2x1c3Rlci5hZGQobW9tZW50KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2x1c3RlcnMucHVzaChuZXcgQ2x1c3Rlcih0aHJlc2hvbGQsIG1vbWVudCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gY2x1c3RlcnM7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IodGhyZXNob2xkOiBudW1iZXIsIG1vbWVudDogTW9tZW50KSB7XG4gICAgICAgIHRoaXMuX3RocmVzaG9sZCA9IHRocmVzaG9sZDtcbiAgICAgICAgdGhpcy5fbW9tZW50cyA9IG5ldyBBcnJheTxNb21lbnQ+KCk7XG4gICAgICAgIHRoaXMuX2NlbnRlciA9IHtcbiAgICAgICAgICAgIHJhZDogMCxcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiAwXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKG1vbWVudCkge1xuICAgICAgICAgICAgdGhpcy5hZGQobW9tZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZChwb2ludDogTW9tZW50KSB7XG4gICAgICAgIHRoaXMuX21vbWVudHMucHVzaChwb2ludCk7XG5cbiAgICAgICAgLy8gVXBkYXRlIGNlbnRlclxuICAgICAgICB0aGlzLl9jZW50ZXIucmFkID0gdGhpcy5fbW9tZW50cy5yZWR1Y2UoKHN1bSwgcCkgPT4gc3VtICsgcC5yYWQsIDApIC8gdGhpcy5fbW9tZW50cy5sZW5ndGg7XG4gICAgICAgIHRoaXMuX2NlbnRlci54ID0gTWF0aC5jb3ModGhpcy5fY2VudGVyLnJhZCk7XG4gICAgICAgIHRoaXMuX2NlbnRlci55ID0gTWF0aC5zaW4odGhpcy5fY2VudGVyLnJhZCk7XG4gICAgfVxuXG4gICAgZml0cyhtb21lbnQ6IE1vbWVudCk6IGJvb2xlYW4ge1xuICAgICAgICAvLyBjaGVjayBjb3NpbmUgc2ltaWxhcml0eSB0byBjZW50ZXItYW5nbGVcbiAgICAgICAgY29uc3Qgc2ltaWxhcml0eSA9IE1hdGguYWJzKG1vbWVudC54ICogdGhpcy5fY2VudGVyLnggKyBtb21lbnQueSAqIHRoaXMuX2NlbnRlci55KTtcbiAgICAgICAgcmV0dXJuIHNpbWlsYXJpdHkgPiB0aGlzLl90aHJlc2hvbGQ7XG4gICAgfVxuXG4gICAgZ2V0IG1vbWVudHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tb21lbnRzO1xuICAgIH1cbn1cbiIsImV4cG9ydCBpbnRlcmZhY2UgRXZlbnRDYWxsYmFjayB7XG4gICAgKGRhdGE6IGFueSk6IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXZlbnRTdWJzY3JpcHRpb24ge1xuICAgIGNhbGxiYWNrOiBFdmVudENhbGxiYWNrO1xuICAgIGFzeW5jPzogYm9vbGVhbjtcbiAgICBvbmNlPzogYm9vbGVhbjtcbn1cblxuaW50ZXJmYWNlIEV2ZW50SXRlbSB7XG4gICAgc3Vic2NyaXB0aW9uczogQXJyYXk8RXZlbnRTdWJzY3JpcHRpb24+XG59XG5cbmxldCBldmVudHM6IHsgW25hbWU6IHN0cmluZ106IEV2ZW50SXRlbSB9ID0ge307XG5cbmV4cG9ydCBjbGFzcyBFdmVudHMge1xuICAgIHN0YXRpYyBzdWJzY3JpYmUoZXZlbnQ6IHN0cmluZywgY2FsbGJhY2s6IEV2ZW50U3Vic2NyaXB0aW9uIHwgRXZlbnRDYWxsYmFjaywgYXN5bmM/OiBib29sZWFuKSB7XG4gICAgICAgIGxldCBzdWJzY3JpcHRpb246IEV2ZW50U3Vic2NyaXB0aW9uO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbiA9IHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayxcbiAgICAgICAgICAgICAgICBhc3luY1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbiA9IGNhbGxiYWNrO1xuICAgICAgICAgICAgaWYgKCFzdWJzY3JpcHRpb24uY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICB0aHJvdyAnQ2FsbGJhY2sgd2FzIG5vdCBzcGVjaWZpZWQgb24gb3B0aW9ucyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBnZXRFdmVudChldmVudCkuc3Vic2NyaXB0aW9ucy5wdXNoKHN1YnNjcmlwdGlvbik7XG4gICAgfVxuXG4gICAgc3RhdGljIHB1Ymxpc2godHlwZTogc3RyaW5nLCBkYXRhPzogYW55KSB7XG4gICAgICAgIGNvbnN0IGV2ZW50SXRlbSA9IGdldEV2ZW50KHR5cGUpO1xuICAgICAgICBjb25zdCBzdWJzY3JpcHRpb25zID0gZXZlbnRJdGVtLnN1YnNjcmlwdGlvbnM7XG5cbiAgICAgICAgLy8gUHVibGlzaCBvbmUtdGltZSBzdWJzY3JpcHRpb25zXG4gICAgICAgIHN1YnNjcmlwdGlvbnMuZmlsdGVyKCh7IG9uY2UgfSkgPT4gISFvbmNlKS5mb3JFYWNoKHN1YnNjcmlwdGlvbiA9PiBwdWJsaXNoU3Vic2NyaXB0aW9uKHN1YnNjcmlwdGlvbiwgZGF0YSkpO1xuXG4gICAgICAgIC8vIHJlbW92ZSB0aGVtIGZyb20gdGhlIHN1YnNjcmlwdGlvblxuICAgICAgICBldmVudEl0ZW0uc3Vic2NyaXB0aW9ucyA9IHN1YnNjcmlwdGlvbnMuZmlsdGVyKCh7IG9uY2UgfSkgPT4gIW9uY2UpO1xuXG4gICAgICAgIC8vIHB1Ymxpc2ggdGhlIHJlc3RcbiAgICAgICAgZXZlbnRJdGVtLnN1YnNjcmlwdGlvbnMuZm9yRWFjaChzdWJzY3JpcHRpb24gPT4gcHVibGlzaFN1YnNjcmlwdGlvbihzdWJzY3JpcHRpb24sIGRhdGEpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgb25jZShldmVudDogc3RyaW5nLCBjYWxsYmFjazogRXZlbnRDYWxsYmFjaywgYXN5bmM/OiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIEV2ZW50cy5zdWJzY3JpYmUoZXZlbnQsIHsgY2FsbGJhY2ssIGFzeW5jLCBvbmNlOiB0cnVlIH0pO1xuICAgIH1cblxuICAgIHN0YXRpYyB1bnN1YnNjcmliZShldmVudE5hbWU/OiBzdHJpbmcsIGNhbGxiYWNrPzogRXZlbnRDYWxsYmFjaykge1xuICAgICAgICBpZiAoZXZlbnROYW1lKSB7XG4gICAgICAgICAgICBjb25zdCBldmVudCA9IGdldEV2ZW50KGV2ZW50TmFtZSk7XG4gICAgICAgICAgICBpZiAoZXZlbnQgJiYgY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBldmVudC5zdWJzY3JpcHRpb25zID0gZXZlbnQuc3Vic2NyaXB0aW9ucy5maWx0ZXIoc3Vic2NyaXB0aW9uID0+IHN1YnNjcmlwdGlvbi5jYWxsYmFjayAhPT0gY2FsbGJhY2spO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBldmVudC5zdWJzY3JpcHRpb25zID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBldmVudHMgPSB7fTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0RXZlbnQoZXZlbnROYW1lOiBzdHJpbmcpOiBFdmVudEl0ZW0ge1xuICAgIGlmICghZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgICAgZXZlbnRzW2V2ZW50TmFtZV0gPSB7XG4gICAgICAgICAgICBzdWJzY3JpcHRpb25zOiBbXVxuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gZXZlbnRzW2V2ZW50TmFtZV07XG59XG5cbmZ1bmN0aW9uIHB1Ymxpc2hTdWJzY3JpcHRpb24oc3Vic2NyaXB0aW9uOiBFdmVudFN1YnNjcmlwdGlvbiwgZGF0YTogYW55KTogdm9pZCB7XG4gICAgaWYgKHN1YnNjcmlwdGlvbi5hc3luYykge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbi5jYWxsYmFjayhkYXRhKTtcbiAgICAgICAgfSwgNCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc3Vic2NyaXB0aW9uLmNhbGxiYWNrKGRhdGEpO1xuICAgIH1cbn1cbiIsImV4cG9ydCB0eXBlIEhTViA9IFtudW1iZXIsIG51bWJlciwgbnVtYmVyXTtcblxuZXhwb3J0IHR5cGUgUkdCID0gW251bWJlciwgbnVtYmVyLCBudW1iZXJdO1xuXG5leHBvcnQgZnVuY3Rpb24gaHN2MnJnYihoc3Y6IEhTViwgcmdiPzogUkdCKTogUkdCIHtcbiAgICBjb25zdCBoID0gaHN2WzBdO1xuICAgIGNvbnN0IHMgPSBoc3ZbMV07XG4gICAgY29uc3QgdiA9IGhzdlsyXTtcbiAgICBjb25zdCBjID0gdiAqIHM7XG4gICAgY29uc3QgeCA9IGMgKiAoMSAtIE1hdGguYWJzKChoIC8gNjApICUgMiAtIDEpKTtcbiAgICBjb25zdCBtID0gdiAtIGM7XG4gICAgbGV0IHIgPSAwO1xuICAgIGxldCBnID0gMDtcbiAgICBsZXQgYiA9IDA7XG5cbiAgICBpZiAoaCA8IDYwKSB7XG4gICAgICAgIHIgPSBjO1xuICAgICAgICBnID0geDtcbiAgICB9IGVsc2UgaWYgKGggPCAxMjApIHtcbiAgICAgICAgciA9IHg7XG4gICAgICAgIGcgPSBjO1xuICAgIH0gZWxzZSBpZiAoaCA8IDE4MCkge1xuICAgICAgICBnID0gYztcbiAgICAgICAgYiA9IHg7XG4gICAgfSBlbHNlIGlmIChoIDwgMjQwKSB7XG4gICAgICAgIGcgPSB4O1xuICAgICAgICBiID0gYztcbiAgICB9IGVsc2UgaWYgKGggPCAzMDApIHtcbiAgICAgICAgciA9IHg7XG4gICAgICAgIGIgPSBjO1xuICAgIH0gZWxzZSBpZiAoaCA8IDM2MCkge1xuICAgICAgICByID0gYztcbiAgICAgICAgYiA9IHg7XG4gICAgfVxuXG4gICAgcmdiID0gcmdiIHx8IFswLCAwLCAwXTtcblxuICAgIHJnYlswXSA9IChyICsgbSkgKiAyNTUgfCAwO1xuICAgIHJnYlsxXSA9IChnICsgbSkgKiAyNTUgfCAwO1xuICAgIHJnYlsyXSA9IChiICsgbSkgKiAyNTUgfCAwO1xuXG4gICAgcmV0dXJuIHJnYjtcbn1cbiIsImltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi9wb2ludCc7XG5cbmV4cG9ydCBjb25zdCBJbWFnZURlYnVnID0ge1xuICAgIGRyYXdQYXRoKHBhdGg6IEFycmF5PFBvaW50PiwgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBjb2xvcjogc3RyaW5nLCBsaW5lV2lkdGg6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAocGF0aCAmJiBwYXRoLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBjb2xvcjtcbiAgICAgICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gY29sb3I7XG4gICAgICAgICAgICBjb250ZXh0LmxpbmVXaWR0aCA9IGxpbmVXaWR0aDtcbiAgICAgICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjb250ZXh0Lm1vdmVUbyhwYXRoWzBdLngsIHBhdGhbMF0ueSk7XG4gICAgICAgICAgICBwYXRoLnNsaWNlKDEpLmZvckVhY2goKHsgeCwgeSB9KSA9PiBjb250ZXh0LmxpbmVUbyh4LCB5KSk7XG4gICAgICAgICAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgY29udGV4dC5zdHJva2UoKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBkcmF3SW1hZ2UoaW1hZ2VEYXRhOiBVaW50OEFycmF5LCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IGNhbnZhc0RhdGEgPSBjb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGNhbnZhc0RhdGEuZGF0YTtcbiAgICAgICAgbGV0IGltYWdlSW5kZXggPSBpbWFnZURhdGEubGVuZ3RoIHwgMDtcbiAgICAgICAgbGV0IGNhbnZhc0luZGV4ID0gZGF0YS5sZW5ndGggfCAwO1xuXG4gICAgICAgIGlmIChjYW52YXNJbmRleCAvIGltYWdlSW5kZXggIT09IDQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHdoaWxlIChpbWFnZUluZGV4LS0pIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gaW1hZ2VEYXRhW2ltYWdlSW5kZXhdO1xuICAgICAgICAgICAgZGF0YVstLWNhbnZhc0luZGV4XSA9IDI1NTtcbiAgICAgICAgICAgIGRhdGFbLS1jYW52YXNJbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgICAgIGRhdGFbLS1jYW52YXNJbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgICAgIGRhdGFbLS1jYW52YXNJbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQucHV0SW1hZ2VEYXRhKGNhbnZhc0RhdGEsIDAsIDApO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IE1vbWVudCB9IGZyb20gJy4vbW9tZW50JztcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi9wb2ludCc7XG5pbXBvcnQgeyBIU1YsIGhzdjJyZ2IsIFJHQiB9IGZyb20gJy4vaHN2MnJnYic7XG5cbnR5cGUgQXJyYXlUeXBlID0gQXJyYXk8bnVtYmVyPiB8IFVpbnQ4QXJyYXkgfCBJbnQzMkFycmF5O1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBiYXNpYyBpbWFnZSBjb21iaW5pbmcgdGhlIGRhdGEgYW5kIHNpemUuXG4gKiBJbiBhZGRpdGlvbiwgc29tZSBtZXRob2RzIGZvciBtYW5pcHVsYXRpb24gYXJlIGNvbnRhaW5lZC5cbiAqL1xuZXhwb3J0IGNsYXNzIEltYWdlV3JhcHBlcjxUIGV4dGVuZHMgQXJyYXlUeXBlID0gVWludDhBcnJheT4ge1xuICAgIGRhdGE6IFQgfCBVaW50OEFycmF5O1xuICAgIHNpemU6IFBvaW50O1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHNpemUgVGhlIHNpemUgb2YgdGhlIGltYWdlIGluIHBpeGVsXG4gICAgICogQHBhcmFtIGRhdGEgSWYgZ2l2ZW4sIGEgZmxhdCBhcnJheSBjb250YWluaW5nIHRoZSBwaXhlbCBkYXRhXG4gICAgICogQHBhcmFtIGFycmF5VHlwZSBJZiBnaXZlbiwgdGhlIGRlc2lyZWQgRGF0YVR5cGUgb2YgdGhlIEFycmF5IChtYXkgYmUgdHlwZWQvbm9uLXR5cGVkKVxuICAgICAqIEBwYXJhbSBpbml0aWFsaXplIEluZGljYXRpbmcgaWYgdGhlIGFycmF5IHNob3VsZCBiZSBpbml0aWFsaXplZCBvbiBjcmVhdGlvbi5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzaXplOiBQb2ludCwgZGF0YT86IFQsIGFycmF5VHlwZT86IHsgbmV3KF86IG51bWJlcik6IFQgfCBVaW50OEFycmF5IH0sIGluaXRpYWxpemU/OiBib29sZWFuKSB7XG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgICAgdGhpcy5kYXRhID0gbmV3IChhcnJheVR5cGUgfHwgVWludDhBcnJheSkoc2l6ZS54ICogc2l6ZS55KTtcblxuICAgICAgICAgICAgaWYgKGluaXRpYWxpemUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEuZmlsbCgwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRlc3RzIGlmIGEgcG9zaXRpb24gaXMgd2l0aGluIHRoZSBpbWFnZSB3aXRoIGEgZ2l2ZW4gb2Zmc2V0XG4gICAgICogQHBhcmFtIHBvaW50IFRoZSBsb2NhdGlvbiB0byB0ZXN0XG4gICAgICogQHBhcmFtIGJvcmRlciBUaGUgcGFkZGluZyB2YWx1ZSBpbiBwaXhlbHNcbiAgICAgKiBAcmV0dXJucyB0cnVlIGlmIGxvY2F0aW9uIGluc2lkZSB0aGUgaW1hZ2UncyBib3JkZXIsIGZhbHNlIG90aGVyd2lzZVxuICAgICAqIEBzZWUgY3ZkL2ltYWdlLmhcbiAgICAgKi9cbiAgICBpbkltYWdlV2l0aEJvcmRlcihwb2ludDogUG9pbnQsIGJvcmRlcjogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAocG9pbnQueCA+PSBib3JkZXIpXG4gICAgICAgICAgICAmJiAocG9pbnQueSA+PSBib3JkZXIpXG4gICAgICAgICAgICAmJiAocG9pbnQueCA8ICh0aGlzLnNpemUueCAtIGJvcmRlcikpXG4gICAgICAgICAgICAmJiAocG9pbnQueSA8ICh0aGlzLnNpemUueSAtIGJvcmRlcikpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4ge0ltYWdlV3JhcHBlcikgYW5kIGNvcGllcyB0aGUgbmVlZGVkIHVuZGVybHlpbmcgaW1hZ2UtZGF0YSBhcmVhXG4gICAgICogQHBhcmFtIGltYWdlV3JhcHBlciBUaGUgdGFyZ2V0IHtJbWFnZVdyYXBwZXJ9IHdoZXJlIHRoZSBkYXRhIHNob3VsZCBiZSBjb3BpZWRcbiAgICAgKiBAcGFyYW0gZnJvbVggVGhlIGhvcml6b250YWwgcG9zaXRpb24gd2hlcmUgdG8gY29weSBmcm9tXG4gICAgICogQHBhcmFtIGZyb21ZIFRoZSB2ZXJ0aWNhbCBwb3NpdGlvbiB3aGVyZSB0byBjb3B5IGZyb21cbiAgICAqL1xuICAgIHN1YkltYWdlQXNDb3B5KGltYWdlV3JhcHBlcjogSW1hZ2VXcmFwcGVyLCBmcm9tWDogbnVtYmVyLCBmcm9tWTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHNpemVZID0gaW1hZ2VXcmFwcGVyLnNpemUueTtcbiAgICAgICAgY29uc3Qgc2l6ZVggPSBpbWFnZVdyYXBwZXIuc2l6ZS54O1xuXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgc2l6ZVg7IHgrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBzaXplWTsgeSsrKSB7XG4gICAgICAgICAgICAgICAgaW1hZ2VXcmFwcGVyLmRhdGFbeSAqIHNpemVYICsgeF0gPSB0aGlzLmRhdGFbKGZyb21ZICsgeSkgKiB0aGlzLnNpemUueCArIGZyb21YICsgeF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZXMgYSBnaXZlbiBwaXhlbCBwb3NpdGlvbiBmcm9tIHRoZSBpbWFnZVxuICAgICAqIEBwYXJhbSB4IFRoZSB4LXBvc2l0aW9uXG4gICAgICogQHBhcmFtIHkgVGhlIHktcG9zaXRpb25cbiAgICAgKiBAcmV0dXJucyBUaGUgZ3JheXNjYWxlIHZhbHVlIGF0IHRoZSBwaXhlbC1wb3NpdGlvblxuICAgICAqL1xuICAgIGdldCh4OiBudW1iZXIsIHk6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFbeSAqIHRoaXMuc2l6ZS54ICsgeF07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyBhIGdpdmVuIHBpeGVsIHBvc2l0aW9uIGluIHRoZSBpbWFnZVxuICAgICAqIEBwYXJhbSB4IFRoZSB4LXBvc2l0aW9uXG4gICAgICogQHBhcmFtIHkgVGhlIHktcG9zaXRpb25cbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIGdyYXlzY2FsZSB2YWx1ZSB0byBzZXRcbiAgICAgKiBAcmV0dXJucyBUaGUgSW1hZ2UgaXRzZWxmIChmb3IgcG9zc2libGUgY2hhaW5pbmcpXG4gICAgICovXG4gICAgc2V0KHg6IG51bWJlciwgeTogbnVtYmVyLCB2YWx1ZTogbnVtYmVyKTogSW1hZ2VXcmFwcGVyPFQ+IHtcbiAgICAgICAgdGhpcy5kYXRhW3kgKiB0aGlzLnNpemUueCArIHhdID0gdmFsdWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGJvcmRlciBvZiB0aGUgaW1hZ2UgKDEgcGl4ZWwpIHRvIHplcm9cbiAgICAgKi9cbiAgICB6ZXJvQm9yZGVyKCk6IHZvaWQge1xuICAgICAgICBjb25zdCB3aWR0aCA9IHRoaXMuc2l6ZS54O1xuICAgICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLnNpemUueTtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdpZHRoOyBpKyspIHtcbiAgICAgICAgICAgIGRhdGFbaV0gPSBkYXRhWyhoZWlnaHQgLSAxKSAqIHdpZHRoICsgaV0gPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBoZWlnaHQgLSAxOyBpKyspIHtcbiAgICAgICAgICAgIGRhdGFbaSAqIHdpZHRoXSA9IGRhdGFbaSAqIHdpZHRoICsgKHdpZHRoIC0gMSldID0gMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludmVydHMgYSBiaW5hcnkgaW1hZ2UgaW4gcGxhY2VcbiAgICAgKi9cbiAgICBpbnZlcnQoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGE7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IGRhdGEubGVuZ3RoOyBpLS07KSB7XG4gICAgICAgICAgICBkYXRhW2ldID0gZGF0YVtpXSA/IDAgOiAxO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbW9tZW50cyhsYWJlbENvdW50OiBudW1iZXIpOiBBcnJheTxNb21lbnQ+IHtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5zaXplLnk7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy5zaXplLng7XG4gICAgICAgIGNvbnN0IGxhYmVsU3VtID0gbmV3IEFycmF5PE1vbWVudD4oKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEFycmF5PE1vbWVudD4oKTtcblxuICAgICAgICBpZiAobGFiZWxDb3VudCA8PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsYWJlbENvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGxhYmVsU3VtW2ldID0ge1xuICAgICAgICAgICAgICAgIG0wMDogMCxcbiAgICAgICAgICAgICAgICBtMDE6IDAsXG4gICAgICAgICAgICAgICAgbTEwOiAwLFxuICAgICAgICAgICAgICAgIG0xMTogMCxcbiAgICAgICAgICAgICAgICBtMDI6IDAsXG4gICAgICAgICAgICAgICAgbTIwOiAwLFxuICAgICAgICAgICAgICAgIHRoZXRhOiAwLFxuICAgICAgICAgICAgICAgIHJhZDogMFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgaGVpZ2h0OyB5KyspIHtcbiAgICAgICAgICAgIGNvbnN0IHlzcSA9IHkgKiB5O1xuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB3aWR0aDsgeCsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsID0gdGhpcy5kYXRhW3kgKiB3aWR0aCArIHhdO1xuICAgICAgICAgICAgICAgIGlmICh2YWwgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gbGFiZWxTdW1bdmFsIC0gMV07XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsLm0wMCArPSAxO1xuICAgICAgICAgICAgICAgICAgICBsYWJlbC5tMDEgKz0geTtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwubTEwICs9IHg7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsLm0xMSArPSB4ICogeTtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwubTAyICs9IHlzcTtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwubTIwICs9IHggKiB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IFBJID0gTWF0aC5QSTtcbiAgICAgICAgY29uc3QgUElfNCA9IFBJIC8gNDtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxhYmVsQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBsYWJlbFN1bVtpXTtcbiAgICAgICAgICAgIGlmICghaXNOYU4obGFiZWwubTAwKSAmJiBsYWJlbC5tMDAgIT09IDApIHtcbiAgICAgICAgICAgICAgICBjb25zdCB4XyA9IGxhYmVsLm0xMCAvIGxhYmVsLm0wMDtcbiAgICAgICAgICAgICAgICBjb25zdCB5XyA9IGxhYmVsLm0wMSAvIGxhYmVsLm0wMDtcbiAgICAgICAgICAgICAgICBjb25zdCBtdTExID0gbGFiZWwubTExIC8gbGFiZWwubTAwIC0geF8gKiB5XztcbiAgICAgICAgICAgICAgICBjb25zdCBtdTAyID0gbGFiZWwubTAyIC8gbGFiZWwubTAwIC0geV8gKiB5XztcbiAgICAgICAgICAgICAgICBjb25zdCBtdTIwID0gbGFiZWwubTIwIC8gbGFiZWwubTAwIC0geF8gKiB4XztcbiAgICAgICAgICAgICAgICBjb25zdCB0bXAgPSAwLjUgKiBNYXRoLmF0YW4oKG11MDIgLSBtdTIwKSAvICgyICogbXUxMSkpICsgKG11MTEgPj0gMCA/IFBJXzQgOiAtUElfNCkgKyBQSTtcbiAgICAgICAgICAgICAgICBsYWJlbC50aGV0YSA9ICh0bXAgKiAxODAgLyBQSSArIDkwKSAlIDE4MCAtIDkwO1xuICAgICAgICAgICAgICAgIGlmIChsYWJlbC50aGV0YSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwudGhldGEgKz0gMTgwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsYWJlbC5yYWQgPSB0bXAgPiBQSSA/IHRtcCAtIFBJIDogdG1wO1xuICAgICAgICAgICAgICAgIGxhYmVsLnggPSBNYXRoLmNvcyh0bXApO1xuICAgICAgICAgICAgICAgIGxhYmVsLnkgPSBNYXRoLnNpbih0bXApO1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGxhYmVsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGlzcGxheXMgdGhlIHtJbWFnZVdyYXBwZXJ9IGluIGEgZ2l2ZW4gY2FudmFzXG4gICAgICogQHBhcmFtIGNvbnRleHQgVGhlIHJlbmRlcmluZyBjb250ZXh0IHRvIHdyaXRlIHRvXG4gICAgICogQHBhcmFtIHNjYWxlIFNjYWxlIHdoaWNoIGlzIGFwcGxpZWQgdG8gZWFjaCBwaXhlbC12YWx1ZVxuICAgICAqL1xuICAgIHNob3coY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBzY2FsZTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuc2l6ZS55O1xuICAgICAgICBjb25zdCB3aWR0aCA9IHRoaXMuc2l6ZS54O1xuICAgICAgICAvLyBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIC8vIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIC8vIGNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICBjb25zdCBmcmFtZSA9IGNvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICBjb25zdCBkYXRhID0gZnJhbWUuZGF0YTtcbiAgICAgICAgbGV0IGN1cnJlbnQgPSAwO1xuXG4gICAgICAgIGlmICghc2NhbGUpIHtcbiAgICAgICAgICAgIHNjYWxlID0gMS4wO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBoZWlnaHQ7IHkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB3aWR0aDsgeCsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGl4ZWwgPSB5ICogd2lkdGggKyB4O1xuICAgICAgICAgICAgICAgIGN1cnJlbnQgPSB0aGlzLmdldCh4LCB5KSAqIHNjYWxlO1xuICAgICAgICAgICAgICAgIGRhdGFbcGl4ZWwgKiA0ICsgMF0gPSBjdXJyZW50O1xuICAgICAgICAgICAgICAgIGRhdGFbcGl4ZWwgKiA0ICsgMV0gPSBjdXJyZW50O1xuICAgICAgICAgICAgICAgIGRhdGFbcGl4ZWwgKiA0ICsgMl0gPSBjdXJyZW50O1xuICAgICAgICAgICAgICAgIGRhdGFbcGl4ZWwgKiA0ICsgM10gPSAyNTU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvL2ZyYW1lLmRhdGEgPSBkYXRhO1xuICAgICAgICBjb250ZXh0LnB1dEltYWdlRGF0YShmcmFtZSwgMCwgMCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGlzcGxheXMgdGhlIHBhcnQgb2YgdGhlIGltYWdlIGluIGEgZ2l2ZW4gY2FudmFzXG4gICAgICogQHBhcmFtIGNvbnRleHQgVGhlIHJlbmRlcmluZyBjb250ZXh0IHRvIHdyaXRlIHRvXG4gICAgICogQHBhcmFtIHNjYWxlIFNjYWxlIHdoaWNoIGlzIGFwcGxpZWQgdG8gZWFjaCBwaXhlbC12YWx1ZVxuICAgICAqIEBwYXJhbSBmcm9tWCBUaGUgaG9yaXpvbnRhbCBwb3NpdGlvbiB3aGVyZSB0byBvdmVybGF5IGZyb21cbiAgICAgKiBAcGFyYW0gZnJvbVkgVGhlIHZlcnRpY2FsIHBvc2l0aW9uIHdoZXJlIHRvIG92ZXJsYXkgZnJvbVxuICAgICAqL1xuICAgIG92ZXJsYXkoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBzY2FsZTogbnVtYmVyLCBmcm9tWDogbnVtYmVyLCBmcm9tWTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGhzdjogSFNWID0gWzAsIDEsIDFdO1xuICAgICAgICBjb25zdCB3aGl0ZVJnYjogUkdCID0gWzI1NSwgMjU1LCAyNTVdO1xuICAgICAgICBjb25zdCBibGFja1JnYjogUkdCID0gWzAsIDAsIDBdO1xuICAgICAgICBjb25zdCBmcmFtZSA9IGNvbnRleHQuZ2V0SW1hZ2VEYXRhKGZyb21YLCBmcm9tWSwgdGhpcy5zaXplLngsIHRoaXMuc2l6ZS55KTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGZyYW1lLmRhdGE7XG5cbiAgICAgICAgaWYgKCFzY2FsZSB8fCBzY2FsZSA8IDAgfHwgc2NhbGUgPiAzNjApIHtcbiAgICAgICAgICAgIHNjYWxlID0gMzYwO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgbGVuZ3RoID0gdGhpcy5kYXRhLmxlbmd0aDsgbGVuZ3RoLS07KSB7XG4gICAgICAgICAgICBoc3ZbMF0gPSB0aGlzLmRhdGFbbGVuZ3RoXSAqIHNjYWxlO1xuICAgICAgICAgICAgY29uc3QgcmdiOiBSR0IgPSBoc3ZbMF0gPD0gMCA/IHdoaXRlUmdiIDogaHN2WzBdID49IDM2MCA/IGJsYWNrUmdiIDogaHN2MnJnYihoc3YpO1xuICAgICAgICAgICAgZGF0YVtsZW5ndGggKiA0ICsgMF0gPSByZ2JbMF07XG4gICAgICAgICAgICBkYXRhW2xlbmd0aCAqIDQgKyAxXSA9IHJnYlsxXTtcbiAgICAgICAgICAgIGRhdGFbbGVuZ3RoICogNCArIDJdID0gcmdiWzJdO1xuICAgICAgICAgICAgZGF0YVtsZW5ndGggKiA0ICsgM10gPSAyNTU7XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0LnB1dEltYWdlRGF0YShmcmFtZSwgZnJvbVgsIGZyb21ZKTtcbiAgICB9XG59XG4iLCJcbmV4cG9ydCBmdW5jdGlvbiBlbnVtZXJhdGVEZXZpY2VzKCk6IFByb21pc2U8QXJyYXk8TWVkaWFEZXZpY2VJbmZvPj4ge1xuICAgIGlmIChuYXZpZ2F0b3IubWVkaWFEZXZpY2VzICYmIHR5cGVvZiBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmVudW1lcmF0ZURldmljZXMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5hdmlnYXRvci5tZWRpYURldmljZXMuZW51bWVyYXRlRGV2aWNlcygpO1xuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdlbnVtZXJhdGVEZXZpY2VzIGlzIG5vdCBkZWZpbmVkJykpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXNlck1lZGlhKGNvbnN0cmFpbnRzOiBNZWRpYVN0cmVhbUNvbnN0cmFpbnRzKTogUHJvbWlzZTxNZWRpYVN0cmVhbT4ge1xuICAgIGlmIChuYXZpZ2F0b3IubWVkaWFEZXZpY2VzICYmIHR5cGVvZiBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoY29uc3RyYWludHMpO1xuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdnZXRVc2VyTWVkaWEgaXMgbm90IGRlZmluZWQnKSk7XG59XG4iLCIvKipcbiAqIFBlcmZvcm1zIGEgZGVlcCBtZXJnZSBvZiBvYmplY3RzIGFuZCByZXR1cm5zIG5ldyBvYmplY3QuXG4gKiBEb2VzIG5vdCBtb2RpZnkgb2JqZWN0cyAoaW1tdXRhYmxlKS5cbiAqIEBzZWUgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzQ4MjE4MjA5XG4gKlxuICogQHBhcmFtIG9iamVjdHMgLSBPYmplY3RzIHRvIG1lcmdlXG4gKiBAcmV0dXJucyBOZXcgb2JqZWN0IHdpdGggbWVyZ2VkIGtleS92YWx1ZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlKC4uLm9iamVjdHM6IFJlYWRvbmx5QXJyYXk8YW55Pik6IG9iamVjdCB7XG4gICAgY29uc3QgaXNPYmplY3QgPSAob2JqOiB1bmtub3duKSA9PiBvYmogJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCc7XG5cbiAgICByZXR1cm4gb2JqZWN0cy5yZWR1Y2UoKHByZXYsIG9iaikgPT4ge1xuICAgICAgICBpZiAob2JqKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwVmFsID0gcHJldltrZXldO1xuICAgICAgICAgICAgICAgIGNvbnN0IG9WYWwgPSBvYmpba2V5XTtcblxuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHBWYWwpICYmIEFycmF5LmlzQXJyYXkob1ZhbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gcHJldltrZXldID0gcFZhbC5jb25jYXQoLi4ub1ZhbCk7XG4gICAgICAgICAgICAgICAgICAgIHByZXZba2V5XSA9IG9WYWw7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpc09iamVjdChwVmFsKSAmJiBpc09iamVjdChvVmFsKSkge1xuICAgICAgICAgICAgICAgICAgICBwcmV2W2tleV0gPSBtZXJnZShwVmFsLCBvVmFsKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwcmV2W2tleV0gPSBvVmFsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHByZXY7XG4gICAgfSwge30pO1xufSIsImltcG9ydCB7IFF1YWdnYUNvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcblxuZXhwb3J0IGNvbnN0IGNvbmZpZzogUXVhZ2dhQ29uZmlnID0ge1xuICAgIGlucHV0U3RyZWFtOiB7XG4gICAgICAgIG5hbWU6ICdMaXZlJyxcbiAgICAgICAgdHlwZTogJ0xpdmVTdHJlYW0nLFxuICAgICAgICBjb25zdHJhaW50czoge1xuICAgICAgICAgICAgd2lkdGg6IDY0MCxcbiAgICAgICAgICAgIGhlaWdodDogNDgwLFxuICAgICAgICAgICAgLy8gYXNwZWN0UmF0aW86IDY0MC80ODAsIC8vIG9wdGlvbmFsXG4gICAgICAgICAgICBmYWNpbmdNb2RlOiAnZW52aXJvbm1lbnQnIC8vIG9yIHVzZXJcbiAgICAgICAgICAgIC8vIGRldmljZUlkOiAnMzg3NDU5ODM0NTczODc1OTgzNzU5ODM3NTk4MzQnXG4gICAgICAgIH0sXG4gICAgICAgIGFyZWE6IHtcbiAgICAgICAgICAgIHRvcDogJzAlJyxcbiAgICAgICAgICAgIHJpZ2h0OiAnMCUnLFxuICAgICAgICAgICAgbGVmdDogJzAlJyxcbiAgICAgICAgICAgIGJvdHRvbTogJzAlJ1xuICAgICAgICB9LFxuICAgICAgICBzaW5nbGVDaGFubmVsOiBmYWxzZSAvLyB0cnVlOiBvbmx5IHRoZSByZWQgY29sb3ItY2hhbm5lbCBpcyByZWFkXG4gICAgfSxcbiAgICBsb2NhdGU6IHRydWUsXG4gICAgbnVtT2ZXb3JrZXJzOiAwLFxuICAgIGRlY29kZXI6IHtcbiAgICAgICAgcmVhZGVyczogW1xuICAgICAgICAgICAgJ2NvZGVfMTI4X3JlYWRlcidcbiAgICAgICAgXSxcbiAgICAgICAgZGVidWc6IHtcbiAgICAgICAgICAgIGRyYXdCb3VuZGluZ0JveDogZmFsc2UsXG4gICAgICAgICAgICBzaG93RnJlcXVlbmN5OiBmYWxzZSxcbiAgICAgICAgICAgIGRyYXdTY2FubGluZTogZmFsc2UsXG4gICAgICAgICAgICBzaG93UGF0dGVybjogZmFsc2VcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbG9jYXRvcjoge1xuICAgICAgICBoYWxmU2FtcGxlOiB0cnVlLFxuICAgICAgICBwYXRjaFNpemU6ICdtZWRpdW0nLCAvLyB4LXNtYWxsLCBzbWFsbCwgbWVkaXVtLCBsYXJnZSwgeC1sYXJnZVxuICAgICAgICBkZWJ1Zzoge1xuICAgICAgICAgICAgc2hvd0NhbnZhczogZmFsc2UsXG4gICAgICAgICAgICBzaG93UGF0Y2hlczogZmFsc2UsXG4gICAgICAgICAgICBzaG93Rm91bmRQYXRjaGVzOiBmYWxzZSxcbiAgICAgICAgICAgIHNob3dTa2VsZXRvbjogZmFsc2UsXG4gICAgICAgICAgICBzaG93TGFiZWxzOiBmYWxzZSxcbiAgICAgICAgICAgIHNob3dQYXRjaExhYmVsczogZmFsc2UsXG4gICAgICAgICAgICBzaG93UmVtYWluaW5nUGF0Y2hMYWJlbHM6IGZhbHNlLFxuICAgICAgICAgICAgYm94RnJvbVBhdGNoZXM6IHtcbiAgICAgICAgICAgICAgICBzaG93VHJhbnNmb3JtZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNob3dUcmFuc2Zvcm1lZEJveDogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2hvd0JCOiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcbiIsImltcG9ydCB7IEJveCB9IGZyb20gJy4uL2NvbW1vbi9ib3gnO1xuaW1wb3J0IHsgSW1hZ2VXcmFwcGVyIH0gZnJvbSAnLi4vY29tbW9uL2ltYWdlLXdyYXBwZXInO1xuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuLi9jb21tb24vcG9pbnQnO1xuaW1wb3J0IHsgUmVhZGVycyB9IGZyb20gJy4uL3JlYWRlci9pbmRleCc7XG5pbXBvcnQgeyBCYXJjb2RlLCBCYXJjb2RlUmVhZGVyLCBCYXJjb2RlUmVhZGVyQ29uZmlnLCBCYXJjb2RlUmVhZGVyRGVjbGFyYXRpb24sIEJhcmNvZGVSZWFkZXJUeXBlIH0gZnJvbSAnLi4vcmVhZGVyL2JhcmNvZGUtcmVhZGVyJztcbmltcG9ydCB7IEJhcmNvZGVMaW5lLCBCcmVzZW5oYW0gfSBmcm9tICcuL2JyZXNlbmhhbSc7XG5pbXBvcnQgeyBJbWFnZURlYnVnIH0gZnJvbSAnLi4vY29tbW9uL2ltYWdlLWRlYnVnJztcblxuZXhwb3J0IGludGVyZmFjZSBCYXJjb2RlRGVjb2RlckNvbmZpZyB7XG4gICAgZGVidWc/OiB7XG4gICAgICAgIGRyYXdCb3VuZGluZ0JveD86IGJvb2xlYW47XG4gICAgICAgIGRyYXdTY2FubGluZT86IGJvb2xlYW47XG4gICAgICAgIHNob3dGcmVxdWVuY3k/OiBib29sZWFuO1xuICAgICAgICBzaG93UGF0dGVybj86IGJvb2xlYW47XG4gICAgfTtcbiAgICBtdWx0aXBsZT86IGJvb2xlYW47XG4gICAgcmVhZGVycz86IEFycmF5PEJhcmNvZGVSZWFkZXJEZWNsYXJhdGlvbj47XG59XG5cbnR5cGUgTGluZSA9IFtQb2ludCwgUG9pbnRdO1xuXG5leHBvcnQgaW50ZXJmYWNlIFF1YWdnYUJhcmNvZGUge1xuICAgIGFuZ2xlPzogbnVtYmVyO1xuICAgIGJhcmNvZGVzPzogQXJyYXk8UXVhZ2dhQmFyY29kZT47IC8vIFRPT0Q6IGRlYWwgd2l0aCBtdWx0aXBsZSByZXN1bHRzXG4gICAgYm94PzogQm94O1xuICAgIGJveGVzPzogQXJyYXk8Qm94PjsgLy8gVE9PRDogZGVhbCB3aXRoIG11bHRpcGxlIHJlc3VsdHNcbiAgICBjb2RlUmVzdWx0PzogQmFyY29kZTtcbiAgICBmcmFtZT86IHN0cmluZztcbiAgICBsaW5lPzogTGluZTtcbiAgICBwYXR0ZXJuPzogQXJyYXk8bnVtYmVyPjtcbiAgICB0aHJlc2hvbGQ/OiBudW1iZXI7XG59O1xuXG5pbnRlcmZhY2UgQmFyY29kZUFuZEJhcmNvZGVMaW5lIHtcbiAgICBjb2RlUmVzdWx0OiBCYXJjb2RlO1xuICAgIGJhcmNvZGVMaW5lOiBCYXJjb2RlTGluZTtcbn1cblxuZXhwb3J0IGNsYXNzIEJhcmNvZGVEZWNvZGVyIHtcbiAgICBwcml2YXRlIF9jb25maWc6IEJhcmNvZGVEZWNvZGVyQ29uZmlnO1xuICAgIHByaXZhdGUgX2lucHV0SW1hZ2VXcmFwcGVyOiBJbWFnZVdyYXBwZXI8VWludDhBcnJheT47XG4gICAgcHJpdmF0ZSBfZnJlcXVlbmN5Q2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICBwcml2YXRlIF9wYXR0ZXJuQ2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICBwcml2YXRlIF9vdmVybGF5Q29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuICAgIHByaXZhdGUgX2JhcmNvZGVSZWFkZXJzOiBBcnJheTxCYXJjb2RlUmVhZGVyPjtcblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogQmFyY29kZURlY29kZXJDb25maWcsIGlucHV0SW1hZ2VXcmFwcGVyOiBJbWFnZVdyYXBwZXI8VWludDhBcnJheT4pIHtcbiAgICAgICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuICAgICAgICB0aGlzLl9pbnB1dEltYWdlV3JhcHBlciA9IGlucHV0SW1hZ2VXcmFwcGVyO1xuICAgICAgICB0aGlzLl9iYXJjb2RlUmVhZGVycyA9IFtdO1xuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuX2NvbmZpZy5kZWJ1ZyAmJiB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBjb25zdCBkZWJ1Z0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZWJ1Zy5kZXRlY3Rpb24nKTtcblxuICAgICAgICAgICAgdGhpcy5fZnJlcXVlbmN5Q2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FudmFzLmZyZXF1ZW5jeScpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9mcmVxdWVuY3lDYW52YXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9mcmVxdWVuY3lDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9mcmVxdWVuY3lDYW52YXMuY2xhc3NOYW1lID0gJ2ZyZXF1ZW5jeSc7XG4gICAgICAgICAgICAgICAgaWYgKGRlYnVnRGl2KSB7XG4gICAgICAgICAgICAgICAgICAgIGRlYnVnRGl2LmFwcGVuZENoaWxkKHRoaXMuX2ZyZXF1ZW5jeUNhbnZhcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fZnJlcXVlbmN5Q2FudmFzLnN0eWxlLmRpc3BsYXkgPSB0aGlzLl9jb25maWcuZGVidWcuc2hvd0ZyZXF1ZW5jeSA/ICdibG9jaycgOiAnbm9uZSc7XG5cbiAgICAgICAgICAgIHRoaXMuX3BhdHRlcm5DYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjYW52YXMucGF0dGVybkJ1ZmZlcicpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9wYXR0ZXJuQ2FudmFzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcGF0dGVybkNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3BhdHRlcm5DYW52YXMuY2xhc3NOYW1lID0gJ3BhdHRlcm5CdWZmZXInO1xuICAgICAgICAgICAgICAgIGlmIChkZWJ1Z0Rpdikge1xuICAgICAgICAgICAgICAgICAgICBkZWJ1Z0Rpdi5hcHBlbmRDaGlsZCh0aGlzLl9wYXR0ZXJuQ2FudmFzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9wYXR0ZXJuQ2FudmFzLnN0eWxlLmRpc3BsYXkgPSB0aGlzLl9jb25maWcuZGVidWcuc2hvd1BhdHRlcm4gPyAnYmxvY2snIDogJ25vbmUnO1xuXG4gICAgICAgICAgICBjb25zdCBvdmVybGF5Q2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MQ2FudmFzRWxlbWVudD4oJ2NhbnZhcy5kcmF3aW5nQnVmZmVyJyk7XG4gICAgICAgICAgICB0aGlzLl9vdmVybGF5Q29udGV4dCA9IG92ZXJsYXlDYW52YXMgPyBvdmVybGF5Q2FudmFzLmdldENvbnRleHQoJzJkJykgOiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5faW5pdFJlYWRlcnMoKTtcbiAgICB9XG5cbiAgICBkZWNvZGVGcm9tQm91bmRpbmdCb3hlcyhib3hlczogQXJyYXk8Qm94Pik6IFF1YWdnYUJhcmNvZGUge1xuICAgICAgICBjb25zdCBiYXJjb2RlcyA9IFtdO1xuICAgICAgICBjb25zdCBtdWx0aXBsZSA9IHRoaXMuX2NvbmZpZy5tdWx0aXBsZTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJveGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBib3ggPSBib3hlc1tpXTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuZGVjb2RlRnJvbUJvdW5kaW5nQm94KGJveCkgfHwge307XG4gICAgICAgICAgICByZXN1bHQuYm94ID0gYm94O1xuXG4gICAgICAgICAgICBpZiAobXVsdGlwbGUpIHtcbiAgICAgICAgICAgICAgICBiYXJjb2Rlcy5wdXNoKHJlc3VsdCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5jb2RlUmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtdWx0aXBsZSkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBiYXJjb2Rlc1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdpdGggdGhlIGhlbHAgb2YgdGhlIGNvbmZpZ3VyZWQgcmVhZGVycyB0aGlzIGZ1bmN0aW9uIHRyaWVzIHRvIGRldGVjdFxuICAgICAqIGEgdmFsaWQgYmFyY29kZSBwYXR0ZXJuIHdpdGhpbiB0aGUgZ2l2ZW4gYXJlYS5cbiAgICAgKiBAcGFyYW0gYm94IFRoZSBhcmVhIHRvIHNlYXJjaCBpblxuICAgICAqIEByZXR1cm5zIFRoZSByZXN1bHQge2NvZGVSZXN1bHQsIGxpbmUsIGFuZ2xlLCBwYXR0ZXJuLCB0aHJlc2hvbGR9XG4gICAgICovXG4gICAgZGVjb2RlRnJvbUJvdW5kaW5nQm94KGJveDogQm94KTogUXVhZ2dhQmFyY29kZSB7XG4gICAgICAgIGNvbnN0IGRlYnVnID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLl9vdmVybGF5Q29udGV4dCAmJiB0aGlzLl9jb25maWcuZGVidWc7XG5cbiAgICAgICAgaWYgKGRlYnVnICYmIGRlYnVnLmRyYXdCb3VuZGluZ0JveCkge1xuICAgICAgICAgICAgdGhpcy5fZHJhd1BhdGgoYm94LCAnYmx1ZScsIDIpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGxpbmUgPSB0aGlzLl9nZXRMaW5lKGJveCk7XG5cbiAgICAgICAgaWYgKGxpbmUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYW5nbGUgPSBNYXRoLmF0YW4yKGxpbmVbMV0ueSAtIGxpbmVbMF0ueSwgbGluZVsxXS54IC0gbGluZVswXS54KTtcbiAgICAgICAgbGluZSA9IHRoaXMuX2dldEV4dGVuZGVkTGluZShsaW5lLCBhbmdsZSk7XG5cbiAgICAgICAgbGV0IHJlc3VsdCA9IHRoaXMuX3RyeURlY29kZShsaW5lKTtcbiAgICAgICAgaWYgKHJlc3VsdCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5fdHJ5RGVjb2RlQnJ1dGVGb3JjZShib3gsIGxpbmUsIGFuZ2xlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXN1bHQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRlYnVnICYmIGRlYnVnLmRyYXdTY2FubGluZSkge1xuICAgICAgICAgICAgdGhpcy5fZHJhd1BhdGgobGluZSwgJ3JlZCcsIDMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvZGVSZXN1bHQ6IHJlc3VsdC5jb2RlUmVzdWx0LFxuICAgICAgICAgICAgbGluZSxcbiAgICAgICAgICAgIGFuZ2xlLFxuICAgICAgICAgICAgcGF0dGVybjogcmVzdWx0LmJhcmNvZGVMaW5lLmxpbmUsXG4gICAgICAgICAgICB0aHJlc2hvbGQ6IHJlc3VsdC5iYXJjb2RlTGluZS50aHJlc2hvbGRcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBzZXRSZWFkZXJzKHJlYWRlcnM6IEFycmF5PEJhcmNvZGVSZWFkZXJEZWNsYXJhdGlvbj4pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fY29uZmlnLnJlYWRlcnMgPSByZWFkZXJzO1xuICAgICAgICB0aGlzLl9iYXJjb2RlUmVhZGVycy5sZW5ndGggPSAwO1xuICAgICAgICB0aGlzLl9pbml0UmVhZGVycygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2luaXRSZWFkZXJzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9jb25maWcucmVhZGVycy5mb3JFYWNoKHJlYWRlckNvbmZpZyA9PiB7XG4gICAgICAgICAgICBsZXQgcmVhZGVyOiBCYXJjb2RlUmVhZGVyVHlwZTtcbiAgICAgICAgICAgIGxldCBjb25maWd1cmF0aW9uOiBCYXJjb2RlUmVhZGVyQ29uZmlnID0ge307XG4gICAgICAgICAgICBsZXQgc3VwcGxlbWVudHMgPSBbXTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiByZWFkZXJDb25maWcgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgcmVhZGVyID0gcmVhZGVyQ29uZmlnLmZvcm1hdDtcbiAgICAgICAgICAgICAgICBjb25maWd1cmF0aW9uID0gcmVhZGVyQ29uZmlnLmNvbmZpZyB8fCB7fTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHJlYWRlckNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICByZWFkZXIgPSByZWFkZXJDb25maWc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0JlZm9yZSByZWdpc3RlcmluZyByZWFkZXI6JywgcmVhZGVyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24uc3VwcGxlbWVudHMpIHtcbiAgICAgICAgICAgICAgICBzdXBwbGVtZW50cyA9IGNvbmZpZ3VyYXRpb24uc3VwcGxlbWVudHMubWFwKHN1cHBsZW1lbnQgPT4gbmV3IFJlYWRlcnNbc3VwcGxlbWVudF0oKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX2JhcmNvZGVSZWFkZXJzLnB1c2gobmV3IFJlYWRlcnNbcmVhZGVyXShjb25maWd1cmF0aW9uLCBzdXBwbGVtZW50cykpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1JlZ2lzdGVyZWQgUmVhZGVyczonLFxuICAgICAgICAgICAgICAgIC4uLnRoaXMuX2JhcmNvZGVSZWFkZXJzLm1hcCgoeyBjb25maWcsIEZPUk1BVCB9KSA9PiBKU09OLnN0cmluZ2lmeSh7IGNvbmZpZywgRk9STUFUIH0pKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBleHRlbmQgdGhlIGxpbmUgb24gYm90aCBlbmRzXG4gICAgICogQHBhcmFtIGxpbmVcbiAgICAgKiBAcGFyYW0gYW5nbGVcbiAgICAgKi9cbiAgICBwcml2YXRlIF9nZXRFeHRlbmRlZExpbmUobGluZTogTGluZSwgYW5nbGU6IG51bWJlcik6IExpbmUge1xuICAgICAgICBmdW5jdGlvbiBleHRlbmRMaW5lKGFtb3VudDogbnVtYmVyKSB7XG4gICAgICAgICAgICBjb25zdCBleHRlbnNpb24gPSB7XG4gICAgICAgICAgICAgICAgeTogYW1vdW50ICogTWF0aC5zaW4oYW5nbGUpLFxuICAgICAgICAgICAgICAgIHg6IGFtb3VudCAqIE1hdGguY29zKGFuZ2xlKVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgbGluZVswXS55IC09IGV4dGVuc2lvbi55O1xuICAgICAgICAgICAgbGluZVswXS54IC09IGV4dGVuc2lvbi54O1xuICAgICAgICAgICAgbGluZVsxXS55ICs9IGV4dGVuc2lvbi55O1xuICAgICAgICAgICAgbGluZVsxXS54ICs9IGV4dGVuc2lvbi54O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbGluZUxlbmd0aCA9IE1hdGguc3FydCgobGluZVsxXS55IC0gbGluZVswXS55KSAqKiAyICsgKGxpbmVbMV0ueCAtIGxpbmVbMF0ueCkgKiogMik7XG4gICAgICAgIGxldCBleHRlbnNpb25MZW5ndGggPSBsaW5lTGVuZ3RoICogMC4xIHwgMDtcblxuICAgICAgICBleHRlbmRMaW5lKGV4dGVuc2lvbkxlbmd0aCk7XG5cbiAgICAgICAgLy8gY2hlY2sgaWYgaW5zaWRlIGltYWdlXG4gICAgICAgIHdoaWxlIChleHRlbnNpb25MZW5ndGggPiAxICYmICghdGhpcy5faW5wdXRJbWFnZVdyYXBwZXIuaW5JbWFnZVdpdGhCb3JkZXIobGluZVswXSwgMClcbiAgICAgICAgICAgIHx8ICF0aGlzLl9pbnB1dEltYWdlV3JhcHBlci5pbkltYWdlV2l0aEJvcmRlcihsaW5lWzFdLCAwKSkpIHtcbiAgICAgICAgICAgIGV4dGVuc2lvbkxlbmd0aCA+Pj0gMTtcbiAgICAgICAgICAgIGV4dGVuZExpbmUoLWV4dGVuc2lvbkxlbmd0aCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbGluZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9nZXRMaW5lKGJveDogQm94KTogTGluZSB7XG4gICAgICAgIHJldHVybiBbe1xuICAgICAgICAgICAgeDogKGJveFsxXS54ICsgYm94WzBdLngpIC8gMixcbiAgICAgICAgICAgIHk6IChib3hbMV0ueSArIGJveFswXS55KSAvIDJcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgeDogKGJveFszXS54ICsgYm94WzJdLngpIC8gMixcbiAgICAgICAgICAgIHk6IChib3hbM10ueSArIGJveFsyXS55KSAvIDJcbiAgICAgICAgfV07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfdHJ5RGVjb2RlKGxpbmU6IExpbmUpOiBCYXJjb2RlQW5kQmFyY29kZUxpbmUge1xuICAgICAgICBjb25zdCBkZWJ1ZyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdGhpcy5fY29uZmlnLmRlYnVnO1xuXG4gICAgICAgIGlmIChkZWJ1ZyAmJiB0aGlzLl9vdmVybGF5Q29udGV4dCkge1xuICAgICAgICAgICAgdGhpcy5fZHJhd1BhdGgobGluZSwgJ3JlZCcsIDMpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGJhcmNvZGVMaW5lID0gQnJlc2VuaGFtLmdldEJhcmNvZGVMaW5lKHRoaXMuX2lucHV0SW1hZ2VXcmFwcGVyLCBsaW5lWzBdLCBsaW5lWzFdKTtcblxuICAgICAgICBpZiAoZGVidWcgJiYgZGVidWcuc2hvd0ZyZXF1ZW5jeSkge1xuICAgICAgICAgICAgdGhpcy5fcHJpbnRGcmVxdWVuY3koYmFyY29kZUxpbmUubGluZSk7XG4gICAgICAgIH1cblxuICAgICAgICBiYXJjb2RlTGluZSA9IEJyZXNlbmhhbS50b0JpbmFyeUxpbmUoYmFyY29kZUxpbmUpO1xuXG4gICAgICAgIGlmIChkZWJ1ZyAmJiBkZWJ1Zy5zaG93UGF0dGVybikge1xuICAgICAgICAgICAgdGhpcy5fcHJpbnRQYXR0ZXJuKGJhcmNvZGVMaW5lLmxpbmUpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9iYXJjb2RlUmVhZGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY29kZVJlc3VsdCA9IHRoaXMuX2JhcmNvZGVSZWFkZXJzW2ldLmRlY29kZVBhdHRlcm4oYmFyY29kZUxpbmUubGluZSk7XG4gICAgICAgICAgICBpZiAoY29kZVJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGNvZGVSZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgIGJhcmNvZGVMaW5lXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIHNsaWNlcyB0aGUgZ2l2ZW4gYXJlYSBhcGFydCBhbmQgdHJpZXMgdG8gZGV0ZWN0IGEgYmFyY29kZS1wYXR0ZXJuIGZvciBlYWNoIHNsaWNlLlxuICAgICAqIEl0IHJldHVybnMgdGhlIGRlY29kZWQgYmFyY29kZSwgb3IgbnVsbCBpZiBub3RoaW5nIHdhcyBmb3VuZFxuICAgICAqIEBwYXJhbSBib3hcbiAgICAgKiBAcGFyYW0gbGluZVxuICAgICAqIEBwYXJhbSBsaW5lQW5nbGVcbiAgICAgKi9cbiAgICBwcml2YXRlIF90cnlEZWNvZGVCcnV0ZUZvcmNlKGJveDogQm94LCBsaW5lOiBMaW5lLCBsaW5lQW5nbGU6IG51bWJlcik6IEJhcmNvZGVBbmRCYXJjb2RlTGluZSB7XG4gICAgICAgIGNvbnN0IHNpZGVMZW5ndGggPSBNYXRoLnNxcnQoKGJveFsxXS54IC0gYm94WzBdLngpICoqIDIgKyAoYm94WzFdLnkgLSBib3hbMF0ueSkgKiogMik7XG4gICAgICAgIGNvbnN0IHNsaWNlcyA9IDE2O1xuICAgICAgICBjb25zdCB4ZGlyID0gTWF0aC5zaW4obGluZUFuZ2xlKTtcbiAgICAgICAgY29uc3QgeWRpciA9IE1hdGguY29zKGxpbmVBbmdsZSk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBzbGljZXM7IGkrKykge1xuICAgICAgICAgICAgLy8gbW92ZSBsaW5lIHBlcnBlbmRpY3VsYXIgdG8gYW5nbGVcbiAgICAgICAgICAgIGNvbnN0IGRpciA9IHNpZGVMZW5ndGggLyBzbGljZXMgKiBpICogKGkgJSAyID09PSAwID8gLTEgOiAxKTtcbiAgICAgICAgICAgIGxpbmVbMF0ueSArPSBkaXIgKiB4ZGlyO1xuICAgICAgICAgICAgbGluZVswXS54IC09IGRpciAqIHlkaXI7XG4gICAgICAgICAgICBsaW5lWzFdLnkgKz0gZGlyICogeGRpcjtcbiAgICAgICAgICAgIGxpbmVbMV0ueCAtPSBkaXIgKiB5ZGlyO1xuXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLl90cnlEZWNvZGUobGluZSk7XG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVzZWQgZm9yIGRldmVsb3BtZW50IG9ubHlcbiAgICAgKi9cbiAgICBwcml2YXRlIF9wcmludEZyZXF1ZW5jeShsaW5lOiBBcnJheTxudW1iZXI+KTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLl9mcmVxdWVuY3lDYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgdGhpcy5fZnJlcXVlbmN5Q2FudmFzLndpZHRoID0gbGluZS5sZW5ndGg7XG4gICAgICAgIHRoaXMuX2ZyZXF1ZW5jeUNhbnZhcy5oZWlnaHQgPSAyNTY7XG5cbiAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9ICdibHVlJztcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnRleHQubW92ZVRvKGksIDI1NSk7XG4gICAgICAgICAgICBjb250ZXh0LmxpbmVUbyhpLCAyNTUgLSBsaW5lW2ldKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgICAgIGNvbnRleHQuc3Ryb2tlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXNlZCBmb3IgZGV2ZWxvcG1lbnQgb25seVxuICAgICAqL1xuICAgIHByaXZhdGUgX3ByaW50UGF0dGVybihsaW5lOiBBcnJheTxudW1iZXI+KTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLl9wYXR0ZXJuQ2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbiAgICAgICAgdGhpcy5fcGF0dGVybkNhbnZhcy53aWR0aCA9IGxpbmUubGVuZ3RoO1xuICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICdibGFjayc7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAobGluZVtpXSA9PT0gMSkge1xuICAgICAgICAgICAgICAgIGNvbnRleHQuZmlsbFJlY3QoaSwgMCwgMSwgMTAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX2RyYXdQYXRoKHBhdGg6IEFycmF5PFBvaW50PiwgY29sb3I6IHN0cmluZywgbGluZVdpZHRoOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgSW1hZ2VEZWJ1Zy5kcmF3UGF0aChwYXRoLCB0aGlzLl9vdmVybGF5Q29udGV4dCwgY29sb3IsIGxpbmVXaWR0aCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuLi9jb21tb24vcG9pbnQnO1xuaW1wb3J0IHsgSW1hZ2VXcmFwcGVyIH0gZnJvbSAnLi4vY29tbW9uL2ltYWdlLXdyYXBwZXInO1xuXG5lbnVtIFNsb3BlIHtcbiAgICBVcCA9IDEsXG4gICAgRG93biA9IC0xXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIEJhcmNvZGVMaW5lIHtcbiAgICBsaW5lOiBBcnJheTxudW1iZXI+O1xuICAgIG1heD86IG51bWJlcjtcbiAgICBtaW4/OiBudW1iZXI7XG4gICAgdGhyZXNob2xkPzogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgQnJlc2VuaGFtIHtcbiAgICAvKipcbiAgICAgKiBTY2FucyBhIGxpbmUgb2YgdGhlIGdpdmVuIGltYWdlIGZyb20gcG9pbnQgcDEgdG8gcDIgYW5kIHJldHVybnMgYSByZXN1bHQgb2JqZWN0IGNvbnRhaW5pbmdcbiAgICAgKiBncmF5LXNjYWxlIHZhbHVlcyAoMC0yNTUpIG9mIHRoZSB1bmRlcmx5aW5nIHBpeGVscyBpbiBhZGRpdGlvbiB0byB0aGUgbWluIGFuZCBtYXggdmFsdWVzLlxuICAgICAqIEBwYXJhbSBpbWFnZVdyYXBwZXJcbiAgICAgKiBAcGFyYW0gcDEgVGhlIHN0YXJ0IHBvaW50IHt4LHl9XG4gICAgICogQHBhcmFtIHAyIFRoZSBlbmQgcG9pbnQge3gseX1cbiAgICAgKiBAcmV0dXJucyB7bGluZSwgbWluLCBtYXh9XG4gICAgICovXG4gICAgc3RhdGljIGdldEJhcmNvZGVMaW5lKGltYWdlV3JhcHBlcjogSW1hZ2VXcmFwcGVyLCBwMTogUG9pbnQsIHAyOiBQb2ludCk6IEJhcmNvZGVMaW5lIHtcbiAgICAgICAgbGV0IHgwID0gcDEueCB8IDA7XG4gICAgICAgIGxldCB5MCA9IHAxLnkgfCAwO1xuICAgICAgICBsZXQgeDEgPSBwMi54IHwgMDtcbiAgICAgICAgbGV0IHkxID0gcDIueSB8IDA7XG4gICAgICAgIGNvbnN0IHN0ZWVwID0gTWF0aC5hYnMoeTEgLSB5MCkgPiBNYXRoLmFicyh4MSAtIHgwKTtcbiAgICAgICAgbGV0IHRtcDogbnVtYmVyO1xuICAgICAgICBjb25zdCBsaW5lID0gW107XG4gICAgICAgIGNvbnN0IGltYWdlRGF0YSA9IGltYWdlV3JhcHBlci5kYXRhO1xuICAgICAgICBjb25zdCB3aWR0aCA9IGltYWdlV3JhcHBlci5zaXplLng7XG4gICAgICAgIGxldCB2YWw6IG51bWJlcjtcbiAgICAgICAgbGV0IG1pbiA9IDI1NTtcbiAgICAgICAgbGV0IG1heCA9IDA7XG5cbiAgICAgICAgZnVuY3Rpb24gcmVhZChhOiBudW1iZXIsIGI6IG51bWJlcikge1xuICAgICAgICAgICAgdmFsID0gaW1hZ2VEYXRhW2IgKiB3aWR0aCArIGFdO1xuICAgICAgICAgICAgbWluID0gdmFsIDwgbWluID8gdmFsIDogbWluO1xuICAgICAgICAgICAgbWF4ID0gdmFsID4gbWF4ID8gdmFsIDogbWF4O1xuICAgICAgICAgICAgbGluZS5wdXNoKHZhbCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3RlZXApIHtcbiAgICAgICAgICAgIHRtcCA9IHgwO1xuICAgICAgICAgICAgeDAgPSB5MDtcbiAgICAgICAgICAgIHkwID0gdG1wO1xuXG4gICAgICAgICAgICB0bXAgPSB4MTtcbiAgICAgICAgICAgIHgxID0geTE7XG4gICAgICAgICAgICB5MSA9IHRtcDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoeDAgPiB4MSkge1xuICAgICAgICAgICAgdG1wID0geDA7XG4gICAgICAgICAgICB4MCA9IHgxO1xuICAgICAgICAgICAgeDEgPSB0bXA7XG5cbiAgICAgICAgICAgIHRtcCA9IHkwO1xuICAgICAgICAgICAgeTAgPSB5MTtcbiAgICAgICAgICAgIHkxID0gdG1wO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGRlbHRheCA9IHgxIC0geDA7XG4gICAgICAgIGxldCBkZWx0YXkgPSBNYXRoLmFicyh5MSAtIHkwKTtcbiAgICAgICAgbGV0IGVycm9yID0gKGRlbHRheCAvIDIpIHwgMDtcbiAgICAgICAgbGV0IHkgPSB5MDtcbiAgICAgICAgbGV0IHlzdGVwID0geTAgPCB5MSA/IDEgOiAtMTtcblxuICAgICAgICBmb3IgKGxldCB4ID0geDA7IHggPCB4MTsgeCsrKSB7XG4gICAgICAgICAgICBpZiAoc3RlZXApIHtcbiAgICAgICAgICAgICAgICByZWFkKHksIHgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZWFkKHgsIHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZXJyb3IgPSBlcnJvciAtIGRlbHRheTtcbiAgICAgICAgICAgIGlmIChlcnJvciA8IDApIHtcbiAgICAgICAgICAgICAgICB5ICs9IHlzdGVwO1xuICAgICAgICAgICAgICAgIGVycm9yID0gZXJyb3IgKyBkZWx0YXg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGluZSxcbiAgICAgICAgICAgIG1pbixcbiAgICAgICAgICAgIG1heFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIHRoZSByZXN1bHQgZnJvbSBnZXRCYXJjb2RlTGluZSBpbnRvIGEgYmluYXJ5IHJlcHJlc2VudGF0aW9uXG4gICAgICogYWxzbyBjb25zaWRlcmluZyB0aGUgZnJlcXVlbmN5IGFuZCBzbG9wZSBvZiB0aGUgc2lnbmFsIGZvciBtb3JlIHJvYnVzdCByZXN1bHRzXG4gICAgICogQHBhcmFtIHJlc3VsdCB7bGluZSwgbWluLCBtYXh9XG4gICAgICovXG4gICAgc3RhdGljIHRvQmluYXJ5TGluZShyZXN1bHQ6IEJhcmNvZGVMaW5lKTogQmFyY29kZUxpbmUge1xuICAgICAgICBjb25zdCBtaW4gPSByZXN1bHQubWluO1xuICAgICAgICBjb25zdCBtYXggPSByZXN1bHQubWF4O1xuICAgICAgICBjb25zdCBsaW5lID0gcmVzdWx0LmxpbmU7XG4gICAgICAgIGNvbnN0IGNlbnRlciA9IG1pbiArIChtYXggLSBtaW4pIC8gMjtcbiAgICAgICAgY29uc3QgZXh0cmVtYSA9IG5ldyBBcnJheTx7IHBvczogbnVtYmVyOyB2YWw6IG51bWJlcjsgfT4oKTtcbiAgICAgICAgbGV0IHRocmVzaG9sZCA9IChtYXggLSBtaW4pIC8gMTI7XG4gICAgICAgIGNvbnN0IHJUaHJlc2hvbGQgPSAtdGhyZXNob2xkO1xuXG4gICAgICAgIC8vIDEuIGZpbmQgZXh0cmVtYVxuICAgICAgICBsZXQgY3VycmVudERpciA9IGxpbmVbMF0gPiBjZW50ZXIgPyBTbG9wZS5VcCA6IFNsb3BlLkRvd247XG4gICAgICAgIGV4dHJlbWEucHVzaCh7XG4gICAgICAgICAgICBwb3M6IDAsXG4gICAgICAgICAgICB2YWw6IGxpbmVbMF1cbiAgICAgICAgfSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZS5sZW5ndGggLSAyOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHNsb3BlID0gKGxpbmVbaSArIDFdIC0gbGluZVtpXSk7XG4gICAgICAgICAgICBjb25zdCBzbG9wZTIgPSAobGluZVtpICsgMl0gLSBsaW5lW2kgKyAxXSk7XG4gICAgICAgICAgICBsZXQgZGlyOiBTbG9wZTtcbiAgICAgICAgICAgIGlmICgoc2xvcGUgKyBzbG9wZTIpIDwgclRocmVzaG9sZCAmJiBsaW5lW2kgKyAxXSA8IChjZW50ZXIgKiAxLjUpKSB7XG4gICAgICAgICAgICAgICAgZGlyID0gU2xvcGUuRG93bjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoKHNsb3BlICsgc2xvcGUyKSA+IHRocmVzaG9sZCAmJiBsaW5lW2kgKyAxXSA+IChjZW50ZXIgKiAwLjUpKSB7XG4gICAgICAgICAgICAgICAgZGlyID0gU2xvcGUuVXA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRpciA9IGN1cnJlbnREaXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjdXJyZW50RGlyICE9PSBkaXIpIHtcbiAgICAgICAgICAgICAgICBleHRyZW1hLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBwb3M6IGksXG4gICAgICAgICAgICAgICAgICAgIHZhbDogbGluZVtpXVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGN1cnJlbnREaXIgPSBkaXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZXh0cmVtYS5wdXNoKHtcbiAgICAgICAgICAgIHBvczogbGluZS5sZW5ndGgsXG4gICAgICAgICAgICB2YWw6IGxpbmVbbGluZS5sZW5ndGggLSAxXVxuICAgICAgICB9KTtcblxuICAgICAgICBmb3IgKGxldCBqID0gZXh0cmVtYVswXS5wb3M7IGogPCBleHRyZW1hWzFdLnBvczsgaisrKSB7XG4gICAgICAgICAgICBsaW5lW2pdID0gbGluZVtqXSA+IGNlbnRlciA/IDAgOiAxO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaXRlcmF0ZSBvdmVyIGV4dHJlbWEgYW5kIGNvbnZlcnQgdG8gYmluYXJ5IGJhc2VkIG9uIGF2ZyBiZXR3ZWVuIG1pbm1heFxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGV4dHJlbWEubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZXh0cmVtYVtpICsgMV0udmFsID4gZXh0cmVtYVtpXS52YWwpIHtcbiAgICAgICAgICAgICAgICB0aHJlc2hvbGQgPSAoZXh0cmVtYVtpXS52YWwgKyAoKGV4dHJlbWFbaSArIDFdLnZhbCAtIGV4dHJlbWFbaV0udmFsKSAvIDMpICogMikgfCAwO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJlc2hvbGQgPSAoZXh0cmVtYVtpICsgMV0udmFsICsgKChleHRyZW1hW2ldLnZhbCAtIGV4dHJlbWFbaSArIDFdLnZhbCkgLyAzKSkgfCAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gZXh0cmVtYVtpXS5wb3M7IGogPCBleHRyZW1hW2kgKyAxXS5wb3M7IGorKykge1xuICAgICAgICAgICAgICAgIGxpbmVbal0gPSBsaW5lW2pdID4gdGhyZXNob2xkID8gMCA6IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4ucmVzdWx0LFxuICAgICAgICAgICAgdGhyZXNob2xkXG4gICAgICAgIH07XG4gICAgfTtcbn1cbiIsImltcG9ydCB7IGdldFVzZXJNZWRpYSwgZW51bWVyYXRlRGV2aWNlcyB9IGZyb20gJy4uL2NvbW1vbi9tZWRpYS1kZXZpY2VzJztcblxubGV0IF9zdHJlYW06IE1lZGlhU3RyZWFtO1xuXG5leHBvcnQgY29uc3QgQ2FtZXJhQWNjZXNzID0ge1xuICAgIC8qKlxuICAgICAqIEF0dGVtcHRzIHRvIGF0dGFjaCB0aGUgY2FtZXJhLXN0cmVhbSB0byBhIGdpdmVuIHZpZGVvIGVsZW1lbnRcbiAgICAgKiBhbmQgY2FsbHMgdGhlIGNhbGxiYWNrIGZ1bmN0aW9uIHdoZW4gdGhlIGNvbnRlbnQgaXMgcmVhZHlcbiAgICAgKiBAcGFyYW0gdmlkZW9cbiAgICAgKiBAcGFyYW0gdmlkZW9Db25zdHJhaW50c1xuICAgICAqL1xuICAgIGFzeW5jIHJlcXVlc3QodmlkZW86IEhUTUxWaWRlb0VsZW1lbnQsIHZpZGVvQ29uc3RyYWludHM6IE1lZGlhVHJhY2tDb25zdHJhaW50cyk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBjb25zdCBub3JtYWxpemVkQ29uc3RyYWludHMgPSBDYW1lcmFBY2Nlc3MucGlja0NvbnN0cmFpbnRzKHZpZGVvQ29uc3RyYWludHMpO1xuICAgICAgICBfc3RyZWFtID0gYXdhaXQgZ2V0VXNlck1lZGlhKG5vcm1hbGl6ZWRDb25zdHJhaW50cyk7XG4gICAgICAgIHZpZGVvLnNyY09iamVjdCA9IF9zdHJlYW07XG4gICAgICAgIHZpZGVvLnNldEF0dHJpYnV0ZSgnYXV0b3BsYXknLCAnJyk7XG4gICAgICAgIHZpZGVvLnNldEF0dHJpYnV0ZSgnbXV0ZWQnLCAnJyk7XG4gICAgICAgIHZpZGVvLnNldEF0dHJpYnV0ZSgncGxheXNpbmxpbmUnLCAnJyk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gdmlkZW8uYWRkRXZlbnRMaXN0ZW5lcignbG9hZGVkbWV0YWRhdGEnLCAoKSA9PiB7XG4gICAgICAgICAgICB2aWRlby5wbGF5KCk7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0pKS50aGVuKF93YWl0Rm9yVmlkZW8uYmluZChudWxsLCB2aWRlbykpO1xuICAgIH0sXG5cbiAgICByZWxlYXNlKCk6IHZvaWQge1xuICAgICAgICBjb25zdCB0cmFja3MgPSBfc3RyZWFtICYmIF9zdHJlYW0uZ2V0VmlkZW9UcmFja3MoKTtcbiAgICAgICAgaWYgKHRyYWNrcyAmJiB0cmFja3MubGVuZ3RoKSB7XG4gICAgICAgICAgICB0cmFja3NbMF0uc3RvcCgpO1xuICAgICAgICB9XG4gICAgICAgIF9zdHJlYW0gPSBudWxsO1xuICAgIH0sXG5cbiAgICBhc3luYyBlbnVtZXJhdGVWaWRlb0RldmljZXMoKTogUHJvbWlzZTxBcnJheTxNZWRpYURldmljZUluZm8+PiB7XG4gICAgICAgIGNvbnN0IGRldmljZXMgPSBhd2FpdCBlbnVtZXJhdGVEZXZpY2VzKCk7XG4gICAgICAgIHJldHVybiBkZXZpY2VzLmZpbHRlcigoeyBraW5kIH0pID0+IGtpbmQgPT09ICd2aWRlb2lucHV0Jyk7XG4gICAgfSxcblxuICAgIGdldEFjdGl2ZVN0cmVhbUxhYmVsKCk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IHRyYWNrID0gQ2FtZXJhQWNjZXNzLmdldEFjdGl2ZVRyYWNrKCk7XG4gICAgICAgIHJldHVybiB0cmFjayA/IHRyYWNrLmxhYmVsIDogJyc7XG4gICAgfSxcblxuICAgIGdldEFjdGl2ZVRyYWNrKCkge1xuICAgICAgICBjb25zdCB0cmFja3MgPSBfc3RyZWFtICYmIF9zdHJlYW0uZ2V0VmlkZW9UcmFja3MoKTtcbiAgICAgICAgaWYgKHRyYWNrcyAmJiB0cmFja3MubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJhY2tzWzBdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSxcblxuICAgIHBpY2tDb25zdHJhaW50cyh2aWRlb0NvbnN0cmFpbnRzOiBNZWRpYVRyYWNrQ29uc3RyYWludHMpOiBNZWRpYVN0cmVhbUNvbnN0cmFpbnRzIHtcbiAgICAgICAgbGV0IHsgd2lkdGgsIGhlaWdodCwgZmFjaW5nTW9kZSwgYXNwZWN0UmF0aW8sIGRldmljZUlkIH0gPSB2aWRlb0NvbnN0cmFpbnRzO1xuICAgICAgICBjb25zdCB7IG1pbkFzcGVjdFJhdGlvLCBmYWNpbmcgfSA9IHZpZGVvQ29uc3RyYWludHMgYXMgYW55O1xuXG4gICAgICAgIGlmICh0eXBlb2YgbWluQXNwZWN0UmF0aW8gIT09ICd1bmRlZmluZWQnICYmIG1pbkFzcGVjdFJhdGlvID4gMCkge1xuICAgICAgICAgICAgYXNwZWN0UmF0aW8gPSBtaW5Bc3BlY3RSYXRpbztcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBXQVJOSU5HOiBDb25zdHJhaW50ICdtaW5Bc3BlY3RSYXRpbycgaXMgZGVwcmVjYXRlZDsgVXNlICdhc3BlY3RSYXRpbycgaW5zdGVhZGApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBmYWNpbmcgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBmYWNpbmdNb2RlID0gZmFjaW5nO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYFdBUk5JTkc6IENvbnN0cmFpbnQgJ2ZhY2luZycgaXMgZGVwcmVjYXRlZC4gVXNlICdmYWNpbmdNb2RlJyBpbnN0ZWFkJ2ApO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZENvbnN0cmFpbnRzID0gZGV2aWNlSWQgJiYgZmFjaW5nTW9kZSA/XG4gICAgICAgICAgICB7IHdpZHRoLCBoZWlnaHQsIGFzcGVjdFJhdGlvLCBkZXZpY2VJZCB9IDogeyB3aWR0aCwgaGVpZ2h0LCBmYWNpbmdNb2RlLCBhc3BlY3RSYXRpbywgZGV2aWNlSWQgfTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYXVkaW86IGZhbHNlLFxuICAgICAgICAgICAgdmlkZW86IG5vcm1hbGl6ZWRDb25zdHJhaW50c1xuICAgICAgICB9O1xuICAgIH1cbn1cblxuZnVuY3Rpb24gX3dhaXRGb3JWaWRlbyh7IHZpZGVvV2lkdGgsIHZpZGVvSGVpZ2h0IH0pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBsZXQgYXR0ZW1wdHMgPSAxMDtcblxuICAgICAgICBmdW5jdGlvbiBjaGVja1ZpZGVvKCkge1xuICAgICAgICAgICAgaWYgKGF0dGVtcHRzID4gMCkge1xuICAgICAgICAgICAgICAgIGlmICh2aWRlb1dpZHRoID4gMTAgJiYgdmlkZW9IZWlnaHQgPiAxMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCR7dmlkZW9XaWR0aH1weCB4ICR7dmlkZW9IZWlnaHR9cHhgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoY2hlY2tWaWRlbywgNTAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlamVjdCgnVW5hYmxlIHRvIHBsYXkgdmlkZW8gc3RyZWFtLiBJcyB3ZWJjYW0gd29ya2luZz8nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGF0dGVtcHRzLS07XG4gICAgICAgIH1cbiAgICAgICAgY2hlY2tWaWRlbygpO1xuICAgIH0pO1xufVxuIiwiLyoqXG4gKiBAYm9ycm93cyBodHRwczovL2dpdGh1Yi5jb20vZXhpZi1qcy9leGlmLWpzXG4gKi9cblxuY29uc3QgRXhpZlRhZ3MgPSB7IDB4MDExMjogJ29yaWVudGF0aW9uJyB9O1xuZXhwb3J0IGNvbnN0IEF2YWlsYWJsZVRhZ3M6IEFycmF5PHN0cmluZz4gPSBPYmplY3Qua2V5cyhFeGlmVGFncykubWFwKGtleSA9PiBFeGlmVGFnc1trZXldKTtcblxuZXhwb3J0IGludGVyZmFjZSBUYWdzIHtcbiAgICBba2V5OiBzdHJpbmddOiBudW1iZXIgfCBzdHJpbmc7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmaW5kVGFnc0luT2JqZWN0VVJMKHNyYzogc3RyaW5nLCB0YWdzID0gQXZhaWxhYmxlVGFncyk6IFByb21pc2U8VGFncz4ge1xuICAgIGlmICgvXmJsb2I6L2kudGVzdChzcmMpKSB7XG4gICAgICAgIGNvbnN0IGJ1ZmZlciA9IGF3YWl0IG9iamVjdFVSTFRvQmxvYihzcmMpO1xuICAgICAgICByZXR1cm4gZmluZFRhZ3NJbkJ1ZmZlcihidWZmZXIsIHRhZ3MpO1xuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG51bGwpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZFRhZ3NJbkJ1ZmZlcihmaWxlOiBBcnJheUJ1ZmZlciwgc2VsZWN0ZWRUYWdzOiBBcnJheTxzdHJpbmc+ID0gQXZhaWxhYmxlVGFncyk6IFRhZ3Mge1xuICAgIGNvbnN0IGRhdGFWaWV3ID0gbmV3IERhdGFWaWV3KGZpbGUpO1xuICAgIGNvbnN0IGxlbmd0aCA9IGZpbGUuYnl0ZUxlbmd0aDtcbiAgICBjb25zdCBleGlmVGFncyA9IHNlbGVjdGVkVGFncy5yZWR1Y2UoKHJlc3VsdCwgc2VsZWN0ZWRUYWcpID0+IHtcbiAgICAgICAgY29uc3QgZXhpZlRhZyA9IE9iamVjdC5rZXlzKEV4aWZUYWdzKS5maW5kKHRhZyA9PiBFeGlmVGFnc1t0YWddID09PSBzZWxlY3RlZFRhZyk7XG4gICAgICAgIGlmIChleGlmVGFnKSB7XG4gICAgICAgICAgICByZXN1bHRbZXhpZlRhZ10gPSBzZWxlY3RlZFRhZztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0sIHt9KTtcbiAgICBsZXQgb2Zmc2V0ID0gMjtcblxuICAgIGlmICgoZGF0YVZpZXcuZ2V0VWludDgoMCkgIT09IDB4RkYpIHx8IChkYXRhVmlldy5nZXRVaW50OCgxKSAhPT0gMHhEOCkpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgd2hpbGUgKG9mZnNldCA8IGxlbmd0aCkge1xuICAgICAgICBpZiAoZGF0YVZpZXcuZ2V0VWludDgob2Zmc2V0KSAhPT0gMHhGRikge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBtYXJrZXIgPSBkYXRhVmlldy5nZXRVaW50OChvZmZzZXQgKyAxKTtcbiAgICAgICAgaWYgKG1hcmtlciA9PT0gMHhFMSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlYWRFWElGRGF0YShkYXRhVmlldywgb2Zmc2V0ICsgNCwgZXhpZlRhZ3MpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb2Zmc2V0ICs9IDIgKyBkYXRhVmlldy5nZXRVaW50MTYob2Zmc2V0ICsgMik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbn1cblxuYXN5bmMgZnVuY3Rpb24gb2JqZWN0VVJMVG9CbG9iKHVybDogc3RyaW5nKTogUHJvbWlzZTxBcnJheUJ1ZmZlcj4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmFycmF5QnVmZmVyKCk7XG4gICAgfVxuXG4gICAgdGhyb3cgbmV3IEVycm9yKCdIVFRQIEVycm9yICcgKyByZXNwb25zZS5zdGF0dXMpO1xufVxuXG5mdW5jdGlvbiByZWFkRVhJRkRhdGEoZGF0YVZpZXc6IERhdGFWaWV3LCBzdGFydDogbnVtYmVyLCBleGlmVGFnczogeyBba2V5OiBudW1iZXJdOiBzdHJpbmcgfSk6IFRhZ3Mge1xuICAgIGlmICgnRXhpZicuc3BsaXQoJycpLnNvbWUoKGNoYXIsIGluZGV4KSA9PiBkYXRhVmlldy5nZXRVaW50OChzdGFydCArIGluZGV4KSAhPT0gY2hhci5jaGFyQ29kZUF0KDApKSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCB0aWZmT2Zmc2V0ID0gc3RhcnQgKyA2O1xuICAgIGxldCBiaWdFbmQ6IGJvb2xlYW47XG5cbiAgICBpZiAoZGF0YVZpZXcuZ2V0VWludDE2KHRpZmZPZmZzZXQpID09PSAweDQ5NDkpIHtcbiAgICAgICAgYmlnRW5kID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChkYXRhVmlldy5nZXRVaW50MTYodGlmZk9mZnNldCkgPT09IDB4NEQ0RCkge1xuICAgICAgICBiaWdFbmQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmIChkYXRhVmlldy5nZXRVaW50MTYodGlmZk9mZnNldCArIDIsICFiaWdFbmQpICE9PSAweDAwMkEpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgZmlyc3RJRkRPZmZzZXQgPSBkYXRhVmlldy5nZXRVaW50MzIodGlmZk9mZnNldCArIDQsICFiaWdFbmQpO1xuICAgIGlmIChmaXJzdElGRE9mZnNldCA8IDB4MDAwMDAwMDgpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgdGFncyA9IHJlYWRUYWdzKGRhdGFWaWV3LCB0aWZmT2Zmc2V0ICsgZmlyc3RJRkRPZmZzZXQsIGV4aWZUYWdzLCBiaWdFbmQpO1xuICAgIHJldHVybiB0YWdzO1xufVxuXG5mdW5jdGlvbiByZWFkVGFncyhkYXRhVmlldzogRGF0YVZpZXcsIGRpclN0YXJ0OiBudW1iZXIsIHN0cmluZ3M6IHsgW2tleTogbnVtYmVyXTogc3RyaW5nIH0sIGJpZ0VuZDogYm9vbGVhbik6IFRhZ3Mge1xuICAgIGNvbnN0IGVudHJpZXMgPSBkYXRhVmlldy5nZXRVaW50MTYoZGlyU3RhcnQsICFiaWdFbmQpO1xuICAgIGNvbnN0IHRhZ3M6IFRhZ3MgPSB7fTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZW50cmllczsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGVudHJ5T2Zmc2V0ID0gZGlyU3RhcnQgKyBpICogMTIgKyAyO1xuICAgICAgICBjb25zdCB0YWcgPSBzdHJpbmdzW2RhdGFWaWV3LmdldFVpbnQxNihlbnRyeU9mZnNldCwgIWJpZ0VuZCldO1xuICAgICAgICBpZiAodGFnKSB7XG4gICAgICAgICAgICB0YWdzW3RhZ10gPSByZWFkVGFnVmFsdWUoZGF0YVZpZXcsIGVudHJ5T2Zmc2V0LCBiaWdFbmQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhZ3M7XG59XG5cbmZ1bmN0aW9uIHJlYWRUYWdWYWx1ZShkYXRhVmlldzogRGF0YVZpZXcsIGVudHJ5T2Zmc2V0OiBudW1iZXIsIGJpZ0VuZDogYm9vbGVhbik6IG51bWJlciB8IHN0cmluZyB7XG4gICAgY29uc3QgdHlwZSA9IGRhdGFWaWV3LmdldFVpbnQxNihlbnRyeU9mZnNldCArIDIsICFiaWdFbmQpO1xuICAgIGNvbnN0IG51bVZhbHVlcyA9IGRhdGFWaWV3LmdldFVpbnQzMihlbnRyeU9mZnNldCArIDQsICFiaWdFbmQpO1xuXG4gICAgcmV0dXJuIHR5cGUgPT09IDMgJiYgbnVtVmFsdWVzID09PSAxID8gZGF0YVZpZXcuZ2V0VWludDE2KGVudHJ5T2Zmc2V0ICsgOCwgIWJpZ0VuZCkgOiB1bmRlZmluZWQ7XG59XG4iLCJpbXBvcnQgeyBQb2ludCB9IGZyb20gJy4uL2NvbW1vbi9wb2ludCc7XG5pbXBvcnQgeyBJbnB1dFN0cmVhbSB9IGZyb20gJy4vaW5wdXQtc3RyZWFtJztcbmltcG9ydCB7IElucHV0U3RyZWFtQ29uZmlnIH0gZnJvbSAnLi9pbnB1dC1zdHJlYW0tY29uZmlnJztcblxuY29uc3QgUVVBVEVSX0NJUkNMRSA9IE1hdGguUEkgLyAyO1xuXG5leHBvcnQgY2xhc3MgRnJhbWVHcmFiYmVyIHtcbiAgICBwcml2YXRlIF9pbnB1dFN0cmVhbTogSW5wdXRTdHJlYW07XG4gICAgcHJpdmF0ZSBfc3RyZWFtQ29uZmlnOiBJbnB1dFN0cmVhbUNvbmZpZztcbiAgICBwcml2YXRlIF9jYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICAgIHByaXZhdGUgX2NvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcbiAgICBwcml2YXRlIF9kYXRhOiBVaW50OEFycmF5O1xuICAgIHByaXZhdGUgX2NhbnZhc0hlaWdodDogbnVtYmVyO1xuICAgIHByaXZhdGUgX2NhbnZhc1dpZHRoOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfaGVpZ2h0OiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfd2lkdGg6IG51bWJlcjtcbiAgICBwcml2YXRlIF90b3BMZWZ0OiBQb2ludDtcblxuICAgIGNvbnN0cnVjdG9yKGlucHV0U3RyZWFtOiBJbnB1dFN0cmVhbSwgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCkge1xuICAgICAgICB0aGlzLl9pbnB1dFN0cmVhbSA9IGlucHV0U3RyZWFtO1xuICAgICAgICB0aGlzLl9zdHJlYW1Db25maWcgPSBpbnB1dFN0cmVhbS5jb25maWc7XG4gICAgICAgIHRoaXMuX2NhbnZhc1dpZHRoID0gaW5wdXRTdHJlYW0uY2FudmFzV2lkdGg7XG4gICAgICAgIHRoaXMuX2NhbnZhc0hlaWdodCA9IGlucHV0U3RyZWFtLmNhbnZhc0hlaWdodDtcbiAgICAgICAgdGhpcy5fd2lkdGggPSBpbnB1dFN0cmVhbS53aWR0aDtcbiAgICAgICAgdGhpcy5faGVpZ2h0ID0gaW5wdXRTdHJlYW0uaGVpZ2h0O1xuICAgICAgICB0aGlzLl90b3BMZWZ0ID0gaW5wdXRTdHJlYW0udG9wTGVmdDtcbiAgICAgICAgdGhpcy5fY2FudmFzID0gY2FudmFzIHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICB0aGlzLl9jYW52YXMud2lkdGggPSB0aGlzLl9jYW52YXNXaWR0aDtcbiAgICAgICAgdGhpcy5fY2FudmFzLmhlaWdodCA9IHRoaXMuX2NhbnZhc0hlaWdodDtcbiAgICAgICAgdGhpcy5fY29udGV4dCA9IHRoaXMuX2NhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICB0aGlzLl9kYXRhID0gbmV3IFVpbnQ4QXJyYXkodGhpcy5fd2lkdGggKiB0aGlzLl9oZWlnaHQpO1xuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRnJhbWVHcmFiYmVyJywgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIHNpemU6IHtcbiAgICAgICAgICAgICAgICAgICAgeDogdGhpcy5fd2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIHk6IHRoaXMuX2hlaWdodFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdG9wTGVmdDogdGhpcy5fdG9wTGVmdCxcbiAgICAgICAgICAgICAgICB2aWRlb1NpemU6IHtcbiAgICAgICAgICAgICAgICAgICAgeDogaW5wdXRTdHJlYW0ucmVhbFdpZHRoLFxuICAgICAgICAgICAgICAgICAgICB5OiBpbnB1dFN0cmVhbS5yZWFsSGVpZ2h0XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjYW52YXNTaXplOiB7XG4gICAgICAgICAgICAgICAgICAgIHg6IHRoaXMuX2NhbnZhc1dpZHRoLFxuICAgICAgICAgICAgICAgICAgICB5OiB0aGlzLl9jYW52YXNIZWlnaHRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVc2VzIHRoZSBnaXZlbiBhcnJheSBhcyBmcmFtZS1idWZmZXJcbiAgICAgKi9cbiAgICBhdHRhY2hEYXRhKGRhdGE6IFVpbnQ4QXJyYXkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fZGF0YSA9IGRhdGE7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmV0Y2hlcyBhIGZyYW1lIGZyb20gdGhlIGlucHV0LXN0cmVhbSBhbmQgcHV0cyBpbnRvIHRoZSBmcmFtZS1idWZmZXIuXG4gICAgICogVGhlIGltYWdlLWRhdGEgaXMgY29udmVydGVkIHRvIGdyYXktc2NhbGUgYW5kIHRoZW4gaGFsZi1zYW1wbGVkIGlmIGNvbmZpZ3VyZWQuXG4gICAgICovXG4gICAgZ3JhYigpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgZnJhbWUgPSB0aGlzLl9pbnB1dFN0cmVhbS5nZXRGcmFtZSgpO1xuXG4gICAgICAgIGlmIChmcmFtZSkge1xuICAgICAgICAgICAgdGhpcy5fYWRqdXN0Q2FudmFzU2l6ZSgpO1xuXG4gICAgICAgICAgICBsZXQgZHJhd2FibGU6IEhUTUxJbWFnZUVsZW1lbnQgfCBIVE1MVmlkZW9FbGVtZW50O1xuICAgICAgICAgICAgbGV0IGRyYXdBbmdsZSA9IDA7XG5cbiAgICAgICAgICAgIGlmIChmcmFtZSBpbnN0YW5jZW9mIEhUTUxWaWRlb0VsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBkcmF3YWJsZSA9IGZyYW1lO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkcmF3YWJsZSA9IGZyYW1lLmltYWdlO1xuXG4gICAgICAgICAgICAgICAgaWYgKGZyYW1lLnRhZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChmcmFtZS50YWdzLm9yaWVudGF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDY6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcmF3QW5nbGUgPSBRVUFURVJfQ0lSQ0xFO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA4OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJhd0FuZ2xlID0gLVFVQVRFUl9DSVJDTEU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChkcmF3QW5nbGUgIT09IDApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBoYWxmV2lkdGggPSB0aGlzLl9jYW52YXNXaWR0aCA+PiAxO1xuICAgICAgICAgICAgICAgIGNvbnN0IGhhbGZIZWlnaHQgPSB0aGlzLl9jYW52YXNIZWlnaHQgPj4gMTtcblxuICAgICAgICAgICAgICAgIHRoaXMuX2NvbnRleHQudHJhbnNsYXRlKGhhbGZXaWR0aCwgaGFsZkhlaWdodCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fY29udGV4dC5yb3RhdGUoZHJhd0FuZ2xlKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9jb250ZXh0LmRyYXdJbWFnZShkcmF3YWJsZSwgLWhhbGZIZWlnaHQsIC1oYWxmV2lkdGgsIHRoaXMuX2NhbnZhc0hlaWdodCwgdGhpcy5fY2FudmFzV2lkdGgpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2NvbnRleHQucm90YXRlKC1kcmF3QW5nbGUpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2NvbnRleHQudHJhbnNsYXRlKC1oYWxmV2lkdGgsIC1oYWxmSGVpZ2h0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY29udGV4dC5kcmF3SW1hZ2UoZHJhd2FibGUsIDAsIDAsIHRoaXMuX2NhbnZhc1dpZHRoLCB0aGlzLl9jYW52YXNIZWlnaHQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBpbWFnZURhdGEgPSB0aGlzLl9jb250ZXh0LmdldEltYWdlRGF0YSh0aGlzLl90b3BMZWZ0LngsIHRoaXMuX3RvcExlZnQueSwgdGhpcy5fd2lkdGgsIHRoaXMuX2hlaWdodCkuZGF0YTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuX3N0cmVhbUNvbmZpZy5oYWxmU2FtcGxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZ3JheUFuZEhhbGZTYW1wbGVGcm9tQ2FudmFzRGF0YShpbWFnZURhdGEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jb21wdXRlR3JheShpbWFnZURhdGEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX2FkanVzdENhbnZhc1NpemUoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLl9jYW52YXMuaGVpZ2h0ICE9PSB0aGlzLl9jYW52YXNIZWlnaHQgfHwgdGhpcy5fY2FudmFzLndpZHRoICE9PSB0aGlzLl9jYW52YXNXaWR0aCkge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ0NhbnZhcyBzaXplIG5lZWRzIHRvIGJlIGFkanVzdGVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9jYW52YXMuaGVpZ2h0ID0gdGhpcy5fY2FudmFzSGVpZ2h0O1xuICAgICAgICAgICAgdGhpcy5fY2FudmFzLndpZHRoID0gdGhpcy5fY2FudmFzV2lkdGg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9ncmF5QW5kSGFsZlNhbXBsZUZyb21DYW52YXNEYXRhKGltYWdlRGF0YTogVWludDhDbGFtcGVkQXJyYXkpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgZW5kSW5kZXggPSBpbWFnZURhdGEubGVuZ3RoID4+IDI7XG4gICAgICAgIGNvbnN0IG91dFdpZHRoID0gdGhpcy5fd2lkdGggPj4gMTtcbiAgICAgICAgbGV0IHRvcFJvd0luZGV4ID0gMDtcbiAgICAgICAgbGV0IGJvdHRvbVJvd0luZGV4ID0gdGhpcy5fd2lkdGg7XG4gICAgICAgIGxldCBvdXRJbWFnZUluZGV4ID0gMDtcblxuICAgICAgICB3aGlsZSAoYm90dG9tUm93SW5kZXggPCBlbmRJbmRleCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvdXRXaWR0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9wNCA9IHRvcFJvd0luZGV4IDw8IDI7XG4gICAgICAgICAgICAgICAgY29uc3QgYm90dG9tNCA9IGJvdHRvbVJvd0luZGV4IDw8IDI7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGF0YVtvdXRJbWFnZUluZGV4XSA9IChcbiAgICAgICAgICAgICAgICAgICAgKDAuMjk5ICogaW1hZ2VEYXRhW3RvcDQgKyAwXSArIDAuNTg3ICogaW1hZ2VEYXRhW3RvcDQgKyAxXSArIDAuMTE0ICogaW1hZ2VEYXRhW3RvcDQgKyAyXSkgK1xuICAgICAgICAgICAgICAgICAgICAoMC4yOTkgKiBpbWFnZURhdGFbdG9wNCArIDRdICsgMC41ODcgKiBpbWFnZURhdGFbdG9wNCArIDVdICsgMC4xMTQgKiBpbWFnZURhdGFbdG9wNCArIDZdKSArXG4gICAgICAgICAgICAgICAgICAgICgwLjI5OSAqIGltYWdlRGF0YVtib3R0b200ICsgMF0gKyAwLjU4NyAqIGltYWdlRGF0YVtib3R0b200ICsgMV0gKyAwLjExNCAqIGltYWdlRGF0YVtib3R0b200ICsgMl0pICtcbiAgICAgICAgICAgICAgICAgICAgKDAuMjk5ICogaW1hZ2VEYXRhW2JvdHRvbTQgKyA0XSArIDAuNTg3ICogaW1hZ2VEYXRhW2JvdHRvbTQgKyA1XSArIDAuMTE0ICogaW1hZ2VEYXRhW2JvdHRvbTQgKyA2XSlcbiAgICAgICAgICAgICAgICApIC8gNCB8IDA7XG4gICAgICAgICAgICAgICAgb3V0SW1hZ2VJbmRleCsrO1xuICAgICAgICAgICAgICAgIHRvcFJvd0luZGV4ICs9IDI7XG4gICAgICAgICAgICAgICAgYm90dG9tUm93SW5kZXggKz0gMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRvcFJvd0luZGV4ICs9IHRoaXMuX3dpZHRoO1xuICAgICAgICAgICAgYm90dG9tUm93SW5kZXggKz0gdGhpcy5fd2lkdGg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9jb21wdXRlR3JheShpbWFnZURhdGE6IFVpbnQ4Q2xhbXBlZEFycmF5KTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGltYWdlRGF0YUxlbmd0aCA9IGltYWdlRGF0YS5sZW5ndGg7XG5cbiAgICAgICAgaWYgKHRoaXMuX3N0cmVhbUNvbmZpZyAmJiB0aGlzLl9zdHJlYW1Db25maWcuc2luZ2xlQ2hhbm5lbCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGogPSAwOyBpIDwgaW1hZ2VEYXRhTGVuZ3RoOyBpICs9IDQsIGorKykge1xuICAgICAgICAgICAgICAgIHRoaXMuX2RhdGFbal0gPSBpbWFnZURhdGFbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgaiA9IDA7IGkgPCBpbWFnZURhdGFMZW5ndGg7IGkgKz0gNCwgaisrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGF0YVtqXSA9IDAuMjk5ICogaW1hZ2VEYXRhW2ldICsgMC41ODcgKiBpbWFnZURhdGFbaSArIDFdICsgMC4xMTQgKiBpbWFnZURhdGFbaSArIDJdIHwgMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IGZpbmRUYWdzSW5PYmplY3RVUkwsIFRhZ3MgfSBmcm9tICcuL2V4aWYtaGVscGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBJbWFnZUluZm8ge1xuICAgIGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50O1xuICAgIHRhZ3M/OiBUYWdzO1xufVxuXG5leHBvcnQgY2xhc3MgSW1hZ2VMb2FkZXIge1xuICAgIHN0YXRpYyBhc3luYyBsb2FkKFxuICAgICAgICBiYXNlVXJpOiBzdHJpbmcsXG4gICAgICAgIGNhbGxiYWNrOiAoXzogQXJyYXk8SW1hZ2VJbmZvPikgPT4gdm9pZCxcbiAgICAgICAgb2Zmc2V0OiBudW1iZXIsXG4gICAgICAgIHNpemU6IG51bWJlcixcbiAgICAgICAgc2VxdWVuY2U6IGJvb2xlYW5cbiAgICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgY29uc3QgaW1hZ2VTcmNzID0gbmV3IEFycmF5PHN0cmluZz4oc2l6ZSk7XG4gICAgICAgIGNvbnN0IGxvYWRlZEltYWdlcyA9IG5ldyBBcnJheTxJbWFnZUluZm8+KHNpemUpO1xuICAgICAgICBjb25zdCBub3RMb2FkZWRJbWFnZXMgPSBuZXcgQXJyYXk8SFRNTEltYWdlRWxlbWVudD4oKTtcblxuICAgICAgICBpZiAoc2VxdWVuY2UgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBpbWFnZVNyY3NbMF0gPSBiYXNlVXJpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpbWFnZVNyY3NbaV0gPSBgJHtiYXNlVXJpfWltYWdlLSR7KCcwMCcgKyAob2Zmc2V0ICsgaSkpLnNsaWNlKC0zKX0uanBnYDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGltYWdlU3Jjcy5mb3JFYWNoKHNyYyA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgbm90TG9hZGVkSW1hZ2VzLnB1c2goaW1hZ2UpO1xuICAgICAgICAgICAgaW1hZ2Uub25sb2FkID0gKCkgPT4gbG9hZGVkKGltYWdlKTtcbiAgICAgICAgICAgIGltYWdlLnNyYyA9IHNyYztcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gbG9hZGVkKGxvYWRlZEltYWdlOiBIVE1MSW1hZ2VFbGVtZW50KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IG5vdExvYWRlZEltYWdlcy5sZW5ndGg7IHgrKykge1xuICAgICAgICAgICAgICAgIGlmIChub3RMb2FkZWRJbWFnZXNbeF0gPT09IGxvYWRlZEltYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vdExvYWRlZEltYWdlcy5zcGxpY2UoeCwgMSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IGFzc3VtZSB0aGUgaW5kZXggaXMgdGhlIHNhbWVcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBpbWFnZVNyY3MubGVuZ3RoOyB5KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlTmFtZSA9IGltYWdlU3Jjc1t5XS5zdWJzdHIoaW1hZ2VTcmNzW3ldLmxhc3RJbmRleE9mKCcvJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxvYWRlZEltYWdlLnNyYy5sYXN0SW5kZXhPZihpbWFnZU5hbWUpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRlZEltYWdlc1t5XSA9IHsgaW1hZ2U6IGxvYWRlZEltYWdlIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG5vdExvYWRlZEltYWdlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnSW1hZ2VzIGxvYWRlZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VxdWVuY2UgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmaXJzdEltYWdlID0gbG9hZGVkSW1hZ2VzWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3RJbWFnZS50YWdzID0gYXdhaXQgZmluZFRhZ3NJbk9iamVjdFVSTChiYXNlVXJpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV4KTtcbiAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhsb2FkZWRJbWFnZXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IEltYWdlSW5mbywgSW1hZ2VMb2FkZXIgfSBmcm9tICcuL2ltYWdlLWxvYWRlcic7XG5pbXBvcnQgeyBJbnB1dFN0cmVhbSB9IGZyb20gJy4vaW5wdXQtc3RyZWFtJztcbmltcG9ydCB7IElucHV0U3RyZWFtQ29uZmlnIH0gZnJvbSAnLi9pbnB1dC1zdHJlYW0tY29uZmlnJztcblxuZXhwb3J0IGNsYXNzIEltYWdlU3RyZWFtIGV4dGVuZHMgSW5wdXRTdHJlYW0ge1xuICAgIHByaXZhdGUgX2Jhc2VVcmw6IHN0cmluZztcbiAgICBwcml2YXRlIF9lbmRlZDogYm9vbGVhbjtcbiAgICBwcml2YXRlIF9mcmFtZUluZGV4OiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfaGVpZ2h0OiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfaW1hZ2VzOiBBcnJheTxJbWFnZUluZm8+O1xuICAgIHByaXZhdGUgX2xvYWRlZDogYm9vbGVhbjtcbiAgICBwcml2YXRlIF9vZmZzZXQ6IG51bWJlcjtcbiAgICBwcml2YXRlIF9wYXVzZWQ6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBfc2l6ZTogbnVtYmVyO1xuICAgIHByaXZhdGUgX3dpZHRoOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLl9jYW52YXNIZWlnaHQgPSAwO1xuICAgICAgICB0aGlzLl9jYW52YXNXaWR0aCA9IDA7XG4gICAgICAgIHRoaXMuX2Jhc2VVcmwgPSBudWxsO1xuICAgICAgICB0aGlzLl9lbmRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9mcmFtZUluZGV4ID0gMDtcbiAgICAgICAgdGhpcy5faGVpZ2h0ID0gMDtcbiAgICAgICAgdGhpcy5faW1hZ2VzID0gbnVsbDtcbiAgICAgICAgdGhpcy5fbG9hZGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX29mZnNldCA9IDE7XG4gICAgICAgIHRoaXMuX3BhdXNlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuX3NpemUgPSAwO1xuICAgICAgICB0aGlzLl93aWR0aCA9IDA7XG4gICAgfVxuXG4gICAgZ2V0IHJlYWxIZWlnaHQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hlaWdodDtcbiAgICB9XG5cbiAgICBnZXQgcmVhbFdpZHRoKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl93aWR0aDtcbiAgICB9XG5cbiAgICBnZXQgY29uZmlnKCk6IElucHV0U3RyZWFtQ29uZmlnIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbmZpZztcbiAgICB9XG5cbiAgICBzZXQgY29uZmlnKGNvbmZpZzogSW5wdXRTdHJlYW1Db25maWcpIHtcbiAgICAgICAgdGhpcy5fY29uZmlnID0geyAuLi5jb25maWcgfTtcbiAgICAgICAgdGhpcy5fYmFzZVVybCA9IGNvbmZpZy5zcmM7XG4gICAgICAgIHRoaXMuX3NpemUgPSBjb25maWcuc2VxdWVuY2UgJiYgY29uZmlnLmxlbmd0aCA/IGNvbmZpZy5sZW5ndGggOiAxO1xuXG4gICAgICAgIHRoaXMuX2xvYWRJbWFnZXMoKTtcbiAgICB9XG5cbiAgICBnZXQgZW5kZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9lbmRlZDtcbiAgICB9XG5cbiAgICBzZXRBdHRyaWJ1dGUoKSB7IH1cblxuICAgIHBhdXNlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9wYXVzZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHBsYXkoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3BhdXNlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHNldCBjdXJyZW50VGltZSh0aW1lOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fZnJhbWVJbmRleCA9IHRpbWU7XG4gICAgfVxuXG4gICAgZ2V0RnJhbWUoKTogSFRNTFZpZGVvRWxlbWVudCB8IEltYWdlSW5mbyB7XG4gICAgICAgIGxldCBmcmFtZTogSW1hZ2VJbmZvID0gbnVsbDtcblxuICAgICAgICBpZiAodGhpcy5fbG9hZGVkICYmICF0aGlzLl9wYXVzZWQpIHtcbiAgICAgICAgICAgIGZyYW1lID0gdGhpcy5faW1hZ2VzW3RoaXMuX2ZyYW1lSW5kZXhdO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5fZnJhbWVJbmRleCA8ICh0aGlzLl9zaXplIC0gMSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9mcmFtZUluZGV4Kys7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9lbmRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJpZ2dlcignZW5kZWQnLCBbXSk7XG4gICAgICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZnJhbWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfbG9hZEltYWdlcygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fbG9hZGVkID0gZmFsc2U7XG4gICAgICAgIEltYWdlTG9hZGVyLmxvYWQodGhpcy5fYmFzZVVybCwgaW1hZ2VzID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2ltYWdlcyA9IGltYWdlcztcblxuICAgICAgICAgICAgc3dpdGNoIChpbWFnZXNbMF0udGFncyAmJiBpbWFnZXNbMF0udGFncy5vcmllbnRhdGlvbikge1xuICAgICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICBjYXNlIDg6IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fd2lkdGggPSBpbWFnZXNbMF0uaW1hZ2UuaGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9oZWlnaHQgPSBpbWFnZXNbMF0uaW1hZ2Uud2lkdGg7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3dpZHRoID0gaW1hZ2VzWzBdLmltYWdlLndpZHRoO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9oZWlnaHQgPSBpbWFnZXNbMF0uaW1hZ2UuaGVpZ2h0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fY2FudmFzV2lkdGggPSB0aGlzLl9jYWxjdWxhdGVkV2lkdGggPSB0aGlzLl9jb25maWcuc2l6ZSA/IHRoaXMuX3dpZHRoID4gdGhpcy5faGVpZ2h0ID9cbiAgICAgICAgICAgICAgICB0aGlzLl9jb25maWcuc2l6ZSA6IHRoaXMuX3dpZHRoICogdGhpcy5fY29uZmlnLnNpemUgLyB0aGlzLl9oZWlnaHQgfCAwIDogdGhpcy5fd2lkdGg7XG4gICAgICAgICAgICB0aGlzLl9jYW52YXNIZWlnaHQgPSB0aGlzLl9jYWxjdWxhdGVkSGVpZ2h0ID0gdGhpcy5fY29uZmlnLnNpemUgPyB0aGlzLl93aWR0aCA+IHRoaXMuX2hlaWdodCA/XG4gICAgICAgICAgICAgICAgdGhpcy5faGVpZ2h0ICogdGhpcy5fY29uZmlnLnNpemUgLyB0aGlzLl93aWR0aCB8IDAgOiB0aGlzLl9jb25maWcuc2l6ZSA6IHRoaXMuX2hlaWdodDtcbiAgICAgICAgICAgIHRoaXMuX2xvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl9mcmFtZUluZGV4ID0gMDtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy50cmlnZ2VyKCdjYW5yZWNvcmQnLCBbXSksIDApO1xuICAgICAgICB9LCB0aGlzLl9vZmZzZXQsIHRoaXMuX3NpemUsIHRoaXMuX2NvbmZpZy5zZXF1ZW5jZSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuLi9jb21tb24vcG9pbnQnO1xuaW1wb3J0IHsgQmFyY29kZUxvY2F0b3JDb25maWcsIFBhdGNoU2l6ZUNvbmZpZyB9IGZyb20gJy4uL2xvY2F0b3IvYmFyY29kZS1sb2NhdG9yLWNvbmZpZyc7XG5pbXBvcnQgeyBJbnB1dFN0cmVhbSB9IGZyb20gJy4vaW5wdXQtc3RyZWFtJztcbmltcG9ydCB7IEFyZWFDb25maWcgfSBmcm9tICcuL2lucHV0LXN0cmVhbS1jb25maWcnO1xuXG5leHBvcnQgaW50ZXJmYWNlIERpbWVuc2lvbiB7XG4gICAgdW5pdDogJyUnIHwgJ3B4JyxcbiAgICB2YWx1ZTogbnVtYmVyO1xufVxuXG5mdW5jdGlvbiBfY29tcHV0ZURpdmlzb3JzKG46IG51bWJlcik6IEFycmF5PG51bWJlcj4ge1xuICAgIGNvbnN0IGRpdmlzb3JzID0gbmV3IEFycmF5PG51bWJlcj4oKTtcbiAgICBjb25zdCBsYXJnZURpdmlzb3JzID0gbmV3IEFycmF5PG51bWJlcj4oKTtcblxuICAgIGZvciAobGV0IGRpdmlzb3IgPSAxOyBkaXZpc29yICogZGl2aXNvciA8PSBuOyBkaXZpc29yKyspIHtcbiAgICAgICAgaWYgKG4gJSBkaXZpc29yID09PSAwKSB7XG4gICAgICAgICAgICBkaXZpc29ycy5wdXNoKGRpdmlzb3IpO1xuICAgICAgICAgICAgaWYgKGRpdmlzb3IgKiBkaXZpc29yICE9PSBuKSB7XG4gICAgICAgICAgICAgICAgbGFyZ2VEaXZpc29ycy51bnNoaWZ0KG4gLyBkaXZpc29yIHwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGl2aXNvcnMuY29uY2F0KGxhcmdlRGl2aXNvcnMpO1xufVxuXG5mdW5jdGlvbiBfY29tcHV0ZUNvbW1vbkRpdmlzb3JzKG06IG51bWJlciwgbjogbnVtYmVyKTogQXJyYXk8bnVtYmVyPiB7XG4gICAgaWYgKG0gPT09IG4pIHtcbiAgICAgICAgcmV0dXJuIF9jb21wdXRlRGl2aXNvcnMobSk7XG4gICAgfVxuXG4gICAgY29uc3QgbWF4ID0gbSA+IG4gPyBtIDogbjtcbiAgICBjb25zdCBtaW4gPSBtID4gbiA/IG4gOiBtO1xuICAgIGNvbnN0IGRpdmlzb3JzID0gbmV3IEFycmF5PG51bWJlcj4oKTtcbiAgICBjb25zdCBsYXJnZURpdmlzb3JzID0gbmV3IEFycmF5PG51bWJlcj4oKTtcblxuICAgIGZvciAobGV0IGRpdmlzb3IgPSAxOyBkaXZpc29yICogZGl2aXNvciA8PSBtaW47IGRpdmlzb3IrKykge1xuICAgICAgICBpZiAobWF4ICUgZGl2aXNvciA9PT0gMCAmJiBtaW4gJSBkaXZpc29yID09PSAwKSB7XG4gICAgICAgICAgICBkaXZpc29ycy5wdXNoKGRpdmlzb3IpO1xuICAgICAgICAgICAgY29uc3QgbGFyZ2VEaXZpc29yID0gbWluIC8gZGl2aXNvciB8IDA7XG4gICAgICAgICAgICBpZiAoZGl2aXNvciAhPT0gbGFyZ2VEaXZpc29yICYmIG1heCAlIGxhcmdlRGl2aXNvciA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGxhcmdlRGl2aXNvcnMudW5zaGlmdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpdmlzb3JzLmNvbmNhdChsYXJnZURpdmlzb3JzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZVBhdGNoU2l6ZShwYXRjaFNpemU6IFBhdGNoU2l6ZUNvbmZpZywgeyB4LCB5IH06IFBvaW50KTogUG9pbnQge1xuICAgIGNvbnN0IHdpZGVTaWRlID0gTWF0aC5tYXgoeCB8IDAsIHkgfCAwKSB8IDA7XG4gICAgY29uc3QgbnJPZlBhdGNoZXNMaXN0ID0gWzgsIDEwLCAxNSwgMjAsIDMyLCA2MCwgODBdO1xuICAgIGNvbnN0IG5yT2ZQYXRjaGVzTWFwID0ge1xuICAgICAgICAneC1zbWFsbCc6IDUsXG4gICAgICAgIHNtYWxsOiA0LFxuICAgICAgICBtZWRpdW06IDMsXG4gICAgICAgIGxhcmdlOiAyLFxuICAgICAgICAneC1sYXJnZSc6IDFcbiAgICB9O1xuICAgIGNvbnN0IG5yT2ZQYXRjaGVzSW5kZXggPSBuck9mUGF0Y2hlc01hcFtwYXRjaFNpemVdIHx8IG5yT2ZQYXRjaGVzTWFwLm1lZGl1bSB8IDA7XG4gICAgY29uc3QgbnJPZlBhdGNoZXMgPSBuck9mUGF0Y2hlc0xpc3RbbnJPZlBhdGNoZXNJbmRleF0gfCAwO1xuICAgIGNvbnN0IGRlc2lyZWRQYXRjaFNpemUgPSB3aWRlU2lkZSAvIG5yT2ZQYXRjaGVzIHwgMDtcblxuICAgIGZ1bmN0aW9uIGZpbmRQYXRjaFNpemVGb3JEaXZpc29ycyhkaXZpc29yczogQXJyYXk8bnVtYmVyPik6IFBvaW50IHtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBsZXQgZm91bmQgPSBkaXZpc29yc1tkaXZpc29ycy5sZW5ndGggPj4gMV0gfCAwO1xuXG4gICAgICAgIHdoaWxlIChpIDwgKGRpdmlzb3JzLmxlbmd0aCAtIDEpICYmIGRpdmlzb3JzW2ldIDwgZGVzaXJlZFBhdGNoU2l6ZSkge1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpID4gMCkge1xuICAgICAgICAgICAgaWYgKE1hdGguYWJzKGRpdmlzb3JzW2ldIC0gZGVzaXJlZFBhdGNoU2l6ZSkgPiBNYXRoLmFicyhkaXZpc29yc1tpIC0gMV0gLSBkZXNpcmVkUGF0Y2hTaXplKSkge1xuICAgICAgICAgICAgICAgIGZvdW5kID0gZGl2aXNvcnNbaSAtIDFdIHwgMDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZm91bmQgPSBkaXZpc29yc1tpXSB8IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRlc2lyZWRQYXRjaFNpemUgLyBmb3VuZCA8IG5yT2ZQYXRjaGVzTGlzdFtuck9mUGF0Y2hlc0luZGV4ICsgMV0gLyBuck9mUGF0Y2hlc0xpc3RbbnJPZlBhdGNoZXNJbmRleF0gJiZcbiAgICAgICAgICAgIGRlc2lyZWRQYXRjaFNpemUgLyBmb3VuZCA+IG5yT2ZQYXRjaGVzTGlzdFtuck9mUGF0Y2hlc0luZGV4IC0gMV0gLyBuck9mUGF0Y2hlc0xpc3RbbnJPZlBhdGNoZXNJbmRleF0pIHtcbiAgICAgICAgICAgIHJldHVybiB7IHg6IGZvdW5kLCB5OiBmb3VuZCB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IG9wdGltYWxQYXRjaFNpemUgPSBmaW5kUGF0Y2hTaXplRm9yRGl2aXNvcnMoX2NvbXB1dGVDb21tb25EaXZpc29ycyh4LCB5KSkgfHxcbiAgICAgICAgZmluZFBhdGNoU2l6ZUZvckRpdmlzb3JzKF9jb21wdXRlRGl2aXNvcnMod2lkZVNpZGUpKSB8fFxuICAgICAgICBmaW5kUGF0Y2hTaXplRm9yRGl2aXNvcnMoX2NvbXB1dGVEaXZpc29ycyhkZXNpcmVkUGF0Y2hTaXplICogbnJPZlBhdGNoZXMpKTtcblxuICAgIHJldHVybiBvcHRpbWFsUGF0Y2hTaXplO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tJbWFnZUNvbnN0cmFpbnRzKGlucHV0U3RyZWFtOiBJbnB1dFN0cmVhbSwgY29uZmlnOiBCYXJjb2RlTG9jYXRvckNvbmZpZykge1xuICAgIGxldCB3aWR0aCA9IGlucHV0U3RyZWFtLndpZHRoO1xuICAgIGxldCBoZWlnaHQgPSBpbnB1dFN0cmVhbS5oZWlnaHQ7XG4gICAgY29uc3Qgc2hpZnQgPSBjb25maWcuaGFsZlNhbXBsZSA/IDEgOiAwIHwgMDtcbiAgICBjb25zdCBpbnB1dFN0cmVhbUNvbmZpZyA9IGlucHV0U3RyZWFtLmNvbmZpZztcblxuICAgIC8vIGNhbGN1bGF0ZSB3aWR0aCBhbmQgaGVpZ2h0IGJhc2VkIG9uIGFyZWFcbiAgICBpZiAoaW5wdXRTdHJlYW1Db25maWcgJiYgaW5wdXRTdHJlYW1Db25maWcuYXJlYSkge1xuICAgICAgICBjb25zdCBhcmVhID0gY29tcHV0ZUltYWdlQXJlYSh3aWR0aCwgaGVpZ2h0LCBpbnB1dFN0cmVhbUNvbmZpZy5hcmVhKTtcbiAgICAgICAgaW5wdXRTdHJlYW0udG9wTGVmdCA9IGFyZWEudG9wTGVmdDtcbiAgICAgICAgaW5wdXRTdHJlYW0uc2V0Q2FudmFzU2l6ZSh3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgd2lkdGggPSBhcmVhLndpZHRoO1xuICAgICAgICBoZWlnaHQgPSBhcmVhLmhlaWdodDtcbiAgICB9XG5cbiAgICBjb25zdCBzaXplID0ge1xuICAgICAgICB4OiB3aWR0aCA+PiBzaGlmdCxcbiAgICAgICAgeTogaGVpZ2h0ID4+IHNoaWZ0XG4gICAgfTtcblxuICAgIGNvbnN0IHBhdGNoU2l6ZSA9IGNhbGN1bGF0ZVBhdGNoU2l6ZShjb25maWcucGF0Y2hTaXplLCBzaXplKTtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zb2xlLmxvZygnUGF0Y2gtU2l6ZTonLCBKU09OLnN0cmluZ2lmeShwYXRjaFNpemUpKTtcbiAgICB9XG5cbiAgICBpbnB1dFN0cmVhbS53aWR0aCA9IChzaXplLnggLyBwYXRjaFNpemUueCA8PCBzaGlmdCkgKiBwYXRjaFNpemUueCB8IDA7XG4gICAgaW5wdXRTdHJlYW0uaGVpZ2h0ID0gKHNpemUueSAvIHBhdGNoU2l6ZS55IDw8IHNoaWZ0KSAqIHBhdGNoU2l6ZS55IHwgMDtcblxuICAgIGlmICgoaW5wdXRTdHJlYW0ud2lkdGggJSBwYXRjaFNpemUueCkgPT09IDAgJiYgKGlucHV0U3RyZWFtLmhlaWdodCAlIHBhdGNoU2l6ZS55KSA9PT0gMCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxuICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2UgZGltZW5zaW9ucyBkbyBub3QgY29tcGx5IHdpdGggdGhlIGN1cnJlbnQgc2V0dGluZ3M6IHdpZHRoICgke3dpZHRofSkgYW5kIGhlaWdodCAoJHtoZWlnaHR9KSBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgJHtwYXRjaFNpemUueH1gKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9wYXJzZUNzc0RpbWVuc2lvblZhbHVlcyh2YWx1ZTogc3RyaW5nKTogRGltZW5zaW9uIHtcbiAgICBjb25zdCBkaW1lbnNpb246IERpbWVuc2lvbiA9IHtcbiAgICAgICAgdmFsdWU6IHBhcnNlRmxvYXQodmFsdWUpLFxuICAgICAgICB1bml0OiB2YWx1ZS5pbmRleE9mKCclJykgPT09IHZhbHVlLmxlbmd0aCAtIDEgPyAnJScgOiB2YWx1ZS5pbmRleE9mKCdweCcpID09PSB2YWx1ZS5sZW5ndGggLSAyID8gJ3B4JyA6ICclJ1xuICAgIH07XG5cbiAgICByZXR1cm4gZGltZW5zaW9uO1xufVxuXG5leHBvcnQgY29uc3QgX2RpbWVuc2lvbnNDb252ZXJ0ZXJzID0ge1xuICAgIGJvdHRvbTogKGRpbWVuc2lvbjogRGltZW5zaW9uLCB7IGhlaWdodCB9KSA9PiBkaW1lbnNpb24udW5pdCA9PT0gJyUnID9cbiAgICAgICAgaGVpZ2h0IC0gaGVpZ2h0ICogZGltZW5zaW9uLnZhbHVlIC8gMTAwIHwgMCA6IGRpbWVuc2lvbi51bml0ID09PSAncHgnID8gaGVpZ2h0IC0gZGltZW5zaW9uLnZhbHVlIDogaGVpZ2h0LFxuICAgIGxlZnQ6IChkaW1lbnNpb246IERpbWVuc2lvbiwgeyB3aWR0aCB9KSA9PiBkaW1lbnNpb24udW5pdCA9PT0gJyUnID9cbiAgICAgICAgd2lkdGggKiBkaW1lbnNpb24udmFsdWUgLyAxMDAgfCAwIDogZGltZW5zaW9uLnVuaXQgPT09ICdweCcgPyBkaW1lbnNpb24udmFsdWUgOiAwLFxuICAgIHJpZ2h0OiAoZGltZW5zaW9uOiBEaW1lbnNpb24sIHsgd2lkdGggfSkgPT4gZGltZW5zaW9uLnVuaXQgPT09ICclJyA/XG4gICAgICAgIHdpZHRoIC0gd2lkdGggKiBkaW1lbnNpb24udmFsdWUgLyAxMDAgfCAwIDogZGltZW5zaW9uLnVuaXQgPT09ICdweCcgPyB3aWR0aCAtIGRpbWVuc2lvbi52YWx1ZSA6IHdpZHRoLFxuICAgIHRvcDogKGRpbWVuc2lvbjogRGltZW5zaW9uLCB7IGhlaWdodCB9KTogbnVtYmVyID0+IGRpbWVuc2lvbi51bml0ID09PSAnJScgP1xuICAgICAgICBoZWlnaHQgKiBkaW1lbnNpb24udmFsdWUgLyAxMDAgfCAwIDogZGltZW5zaW9uLnVuaXQgPT09ICdweCcgPyBkaW1lbnNpb24udmFsdWUgOiAwXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gY29tcHV0ZUltYWdlQXJlYShpbnB1dFdpZHRoOiBudW1iZXIsIGlucHV0SGVpZ2h0OiBudW1iZXIsIGFyZWE6IEFyZWFDb25maWcpIHtcbiAgICBjb25zdCBjb250ZXh0ID0geyB3aWR0aDogaW5wdXRXaWR0aCwgaGVpZ2h0OiBpbnB1dEhlaWdodCB9O1xuICAgIGNvbnN0IHBhcnNlZEFyZWE6IHtcbiAgICAgICAgYm90dG9tPzogbnVtYmVyO1xuICAgICAgICBsZWZ0PzogbnVtYmVyO1xuICAgICAgICByaWdodD86IG51bWJlcjtcbiAgICAgICAgdG9wPzogbnVtYmVyO1xuICAgIH0gPSBPYmplY3Qua2V5cyhhcmVhKS5yZWR1Y2UoKHJlc3VsdCwga2V5KSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gYXJlYVtrZXldO1xuICAgICAgICBjb25zdCBwYXJzZWQgPSBfcGFyc2VDc3NEaW1lbnNpb25WYWx1ZXModmFsdWUpO1xuICAgICAgICBjb25zdCBjYWxjdWxhdGVkID0gX2RpbWVuc2lvbnNDb252ZXJ0ZXJzW2tleV0ocGFyc2VkLCBjb250ZXh0KTtcblxuICAgICAgICByZXN1bHRba2V5XSA9IGNhbGN1bGF0ZWQ7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSwge30pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdG9wTGVmdDogeyB4OiBwYXJzZWRBcmVhLmxlZnQsIHk6IHBhcnNlZEFyZWEudG9wIH0sXG4gICAgICAgIHdpZHRoOiBwYXJzZWRBcmVhLnJpZ2h0IC0gcGFyc2VkQXJlYS5sZWZ0LFxuICAgICAgICBoZWlnaHQ6IHBhcnNlZEFyZWEuYm90dG9tIC0gcGFyc2VkQXJlYS50b3BcbiAgICB9O1xufVxuIiwiaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuLi9jb21tb24vcG9pbnQnO1xuaW1wb3J0IHsgSW1hZ2VJbmZvIH0gZnJvbSAnLi9pbWFnZS1sb2FkZXInO1xuaW1wb3J0IHsgSW5wdXRTdHJlYW1Db25maWcgfSBmcm9tICcuL2lucHV0LXN0cmVhbS1jb25maWcnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgSW5wdXRTdHJlYW0ge1xuICAgIHByb3RlY3RlZCBfY2FsY3VsYXRlZEhlaWdodDogbnVtYmVyO1xuICAgIHByb3RlY3RlZCBfY2FsY3VsYXRlZFdpZHRoOiBudW1iZXI7XG4gICAgcHJvdGVjdGVkIF9jYW52YXNIZWlnaHQ6IG51bWJlcjtcbiAgICBwcm90ZWN0ZWQgX2NhbnZhc1dpZHRoOiBudW1iZXI7XG4gICAgcHJvdGVjdGVkIF9jb25maWc6IElucHV0U3RyZWFtQ29uZmlnO1xuICAgIHByb3RlY3RlZCBfZXZlbnROYW1lczogQXJyYXk8c3RyaW5nPjtcbiAgICBwcm90ZWN0ZWQgX2V2ZW50SGFuZGxlcnM6IE1hcDxzdHJpbmcsIEFycmF5PEV2ZW50TGlzdGVuZXI+PjtcbiAgICBwcm90ZWN0ZWQgX3RvcExlZnQ6IFBvaW50O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX2NhbnZhc1dpZHRoID0gMDtcbiAgICAgICAgdGhpcy5fY2FudmFzSGVpZ2h0ID0gMDtcbiAgICAgICAgdGhpcy5fY29uZmlnID0gbnVsbDtcbiAgICAgICAgdGhpcy5fZXZlbnROYW1lcyA9IFsnY2FucmVjb3JkJywgJ2VuZGVkJ107XG4gICAgICAgIHRoaXMuX2V2ZW50SGFuZGxlcnMgPSBuZXcgTWFwPHN0cmluZywgQXJyYXk8RXZlbnRMaXN0ZW5lcj4+KCk7XG4gICAgICAgIHRoaXMuX3RvcExlZnQgPSB7IHg6IDAsIHk6IDAgfTtcbiAgICB9XG5cbiAgICBhYnN0cmFjdCBnZXQgcmVhbEhlaWdodCgpOiBudW1iZXI7XG5cbiAgICBhYnN0cmFjdCBnZXQgcmVhbFdpZHRoKCk6IG51bWJlcjtcblxuICAgIGdldCBoZWlnaHQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhbGN1bGF0ZWRIZWlnaHQ7XG4gICAgfVxuXG4gICAgc2V0IGhlaWdodChoZWlnaHQ6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9jYWxjdWxhdGVkSGVpZ2h0ID0gaGVpZ2h0O1xuICAgIH1cblxuICAgIGdldCB3aWR0aCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2FsY3VsYXRlZFdpZHRoO1xuICAgIH1cblxuICAgIHNldCB3aWR0aCh3aWR0aDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX2NhbGN1bGF0ZWRXaWR0aCA9IHdpZHRoO1xuICAgIH1cblxuICAgIGdldCB0b3BMZWZ0KCk6IFBvaW50IHtcbiAgICAgICAgcmV0dXJuIHsgLi4udGhpcy5fdG9wTGVmdCB9O1xuICAgIH1cblxuICAgIHNldCB0b3BMZWZ0KHRvcExlZnQ6IFBvaW50KSB7XG4gICAgICAgIHRoaXMuX3RvcExlZnQueCA9IHRvcExlZnQueDtcbiAgICAgICAgdGhpcy5fdG9wTGVmdC55ID0gdG9wTGVmdC55O1xuICAgIH1cblxuICAgIHNldENhbnZhc1NpemUod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fY2FudmFzV2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5fY2FudmFzSGVpZ2h0ID0gaGVpZ2h0O1xuICAgIH1cblxuICAgIGdldCBjYW52YXNIZWlnaHQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhbnZhc0hlaWdodDtcbiAgICB9XG5cbiAgICBnZXQgY2FudmFzV2lkdGgoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhbnZhc1dpZHRoO1xuICAgIH1cblxuICAgIGFic3RyYWN0IGdldCBjb25maWcoKTogSW5wdXRTdHJlYW1Db25maWc7XG5cbiAgICBhYnN0cmFjdCBzZXQgY29uZmlnKGNvbmZpZzogSW5wdXRTdHJlYW1Db25maWcpO1xuXG4gICAgYWJzdHJhY3QgZ2V0IGVuZGVkKCk6IGJvb2xlYW47XG5cbiAgICBhYnN0cmFjdCBzZXRBdHRyaWJ1dGUobmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZDtcblxuICAgIGFic3RyYWN0IHBhdXNlKCk6IHZvaWQ7XG5cbiAgICBhYnN0cmFjdCBwbGF5KCk6IHZvaWQ7XG5cbiAgICBhYnN0cmFjdCBzZXQgY3VycmVudFRpbWUodGltZTogbnVtYmVyKTtcblxuICAgIGFkZEV2ZW50TGlzdGVuZXIoZXZlbnQ6IHN0cmluZywgbGlzdGVuZXI6IEV2ZW50TGlzdGVuZXIsIF9vcHRpb25zPzogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5fZXZlbnROYW1lcy5pbmRleE9mKGV2ZW50KSAhPT0gLTEpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5fZXZlbnRIYW5kbGVycy5oYXMoZXZlbnQpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZXZlbnRIYW5kbGVycy5zZXQoZXZlbnQsIG5ldyBBcnJheTxFdmVudExpc3RlbmVyPigpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2V2ZW50SGFuZGxlcnMuZ2V0KGV2ZW50KS5wdXNoKGxpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsZWFyRXZlbnRIYW5kbGVycygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fZXZlbnRIYW5kbGVycy5jbGVhcigpO1xuICAgIH1cblxuICAgIHRyaWdnZXIoZXZlbnROYW1lOiBzdHJpbmcsIGFyZ0FycmF5PzogYW55KSB7XG4gICAgICAgIGNvbnN0IGhhbmRsZXJzID0gdGhpcy5fZXZlbnRIYW5kbGVycy5nZXQoZXZlbnROYW1lKTtcblxuICAgICAgICBpZiAoaGFuZGxlcnMgJiYgaGFuZGxlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBoYW5kbGVycy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGhhbmRsZXJzW2pdLmFwcGx5KHRoaXMsIGFyZ0FycmF5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFic3RyYWN0IGdldEZyYW1lKCk6IEhUTUxWaWRlb0VsZW1lbnQgfCBJbWFnZUluZm87XG59XG4iLCJpbXBvcnQgeyBWaWRlb1N0cmVhbSB9IGZyb20gJy4vdmlkZW8tc3RyZWFtJztcblxuZXhwb3J0IGNsYXNzIExpdmVTdHJlYW0gZXh0ZW5kcyBWaWRlb1N0cmVhbSB7XG4gICAgY29uc3RydWN0b3IodmlkZW86IEhUTUxWaWRlb0VsZW1lbnQpIHtcbiAgICAgICAgdmlkZW8uc2V0QXR0cmlidXRlKCdhdXRvcGxheScsICcnKTtcbiAgICAgICAgc3VwZXIodmlkZW8pO1xuICAgIH1cblxuICAgIGdldCBlbmRlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEltYWdlSW5mbyB9IGZyb20gJy4vaW1hZ2UtbG9hZGVyJztcbmltcG9ydCB7IElucHV0U3RyZWFtIH0gZnJvbSAnLi9pbnB1dC1zdHJlYW0nO1xuaW1wb3J0IHsgSW5wdXRTdHJlYW1Db25maWcgfSBmcm9tICcuL2lucHV0LXN0cmVhbS1jb25maWcnO1xuXG5leHBvcnQgY2xhc3MgVmlkZW9TdHJlYW0gZXh0ZW5kcyBJbnB1dFN0cmVhbSB7XG4gICAgcHJpdmF0ZSBfdmlkZW86IEhUTUxWaWRlb0VsZW1lbnQ7XG5cbiAgICBjb25zdHJ1Y3Rvcih2aWRlbzogSFRNTFZpZGVvRWxlbWVudCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuX3ZpZGVvID0gdmlkZW87XG4gICAgfVxuXG4gICAgZ2V0IHJlYWxIZWlnaHQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZpZGVvLnZpZGVvSGVpZ2h0O1xuICAgIH1cblxuICAgIGdldCByZWFsV2lkdGgoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZpZGVvLnZpZGVvV2lkdGg7XG4gICAgfVxuXG4gICAgZ2V0IGNvbmZpZygpOiBJbnB1dFN0cmVhbUNvbmZpZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb25maWc7XG4gICAgfVxuXG4gICAgc2V0IGNvbmZpZyhjb25maWc6IElucHV0U3RyZWFtQ29uZmlnKSB7XG4gICAgICAgIHRoaXMuX2NvbmZpZyA9IHsgLi4uY29uZmlnIH07XG4gICAgICAgIHRoaXMuX3ZpZGVvLnNyYyA9IGNvbmZpZy5zcmMgfHwgJyc7XG4gICAgfVxuXG4gICAgZ2V0IGVuZGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmlkZW8uZW5kZWQ7XG4gICAgfVxuXG4gICAgc2V0QXR0cmlidXRlKG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLl92aWRlby5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICAgIH1cblxuICAgIHBhdXNlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl92aWRlby5wYXVzZSgpO1xuICAgIH1cblxuICAgIHBsYXkoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3ZpZGVvLnBsYXkoKTtcbiAgICB9XG5cbiAgICBzZXQgY3VycmVudFRpbWUodGltZTogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLl9jb25maWcudHlwZSAhPT0gJ0xpdmVTdHJlYW0nKSB7XG4gICAgICAgICAgICB0aGlzLl92aWRlby5jdXJyZW50VGltZSA9IHRpbWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRFdmVudExpc3RlbmVyKGV2ZW50OiBzdHJpbmcsIGxpc3RlbmVyOiBFdmVudExpc3RlbmVyLCBvcHRpb25zPzogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICBzdXBlci5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lciwgb3B0aW9ucyk7XG5cbiAgICAgICAgaWYgKHRoaXMuX2V2ZW50TmFtZXMuaW5kZXhPZihldmVudCkgPT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLl92aWRlby5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lciwgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbGVhckV2ZW50SGFuZGxlcnMoKTogdm9pZCB7XG4gICAgICAgIC8vIFRPRE86IGNvbWUgdXAgd2l0aCBhIHdheSB0byByZW1vdmUgdmlkZW8gZXZlbnQgaGFuZGxlcnNcbiAgICAgICAgLy8gdGhpcy5fZXZlbnROYW1lcy5mb3JFYWNoKGV2ZW50TmFtZSA9PiB7XG4gICAgICAgIC8vICAgICBjb25zdCBoYW5kbGVycyA9IHRoaXMuX2V2ZW50SGFuZGxlcnMuZ2V0KGV2ZW50TmFtZSk7XG4gICAgICAgIC8vICAgICBpZiAoaGFuZGxlcnMgJiYgaGFuZGxlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAvLyAgICAgICAgIGhhbmRsZXJzLmZvckVhY2goaGFuZGxlciA9PiB0aGlzLl92aWRlby5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgaGFuZGxlcikpO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9KTtcbiAgICAgICAgc3VwZXIuY2xlYXJFdmVudEhhbmRsZXJzKCk7XG4gICAgfVxuXG4gICAgdHJpZ2dlcihldmVudE5hbWU6IHN0cmluZywgYXJnQXJyYXk/OiBhbnkpIHtcbiAgICAgICAgaWYgKGV2ZW50TmFtZSA9PT0gJ2NhbnJlY29yZCcpIHtcbiAgICAgICAgICAgIHRoaXMuX2luaXRTaXplKCk7XG4gICAgICAgIH1cblxuICAgICAgICBzdXBlci50cmlnZ2VyKGV2ZW50TmFtZSwgYXJnQXJyYXkpXG4gICAgfVxuXG4gICAgZ2V0RnJhbWUoKTogSFRNTFZpZGVvRWxlbWVudCB8IEltYWdlSW5mbyB7XG4gICAgICAgIHJldHVybiB0aGlzLl92aWRlbztcbiAgICB9XG5cbiAgICBwcml2YXRlIF9pbml0U2l6ZSgpIHtcbiAgICAgICAgY29uc3Qgd2lkdGggPSB0aGlzLl92aWRlby52aWRlb1dpZHRoO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLl92aWRlby52aWRlb0hlaWdodDtcblxuICAgICAgICB0aGlzLl9jYW52YXNXaWR0aCA9IHRoaXMuX2NhbGN1bGF0ZWRXaWR0aCA9XG4gICAgICAgICAgICB0aGlzLl9jb25maWcuc2l6ZSA/IHdpZHRoID4gaGVpZ2h0ID8gdGhpcy5fY29uZmlnLnNpemUgOiB3aWR0aCAqIHRoaXMuX2NvbmZpZy5zaXplIC8gaGVpZ2h0IHwgMCA6IHdpZHRoO1xuICAgICAgICB0aGlzLl9jYW52YXNIZWlnaHQgPSB0aGlzLl9jYWxjdWxhdGVkSGVpZ2h0ID1cbiAgICAgICAgICAgIHRoaXMuX2NvbmZpZy5zaXplID8gd2lkdGggPiBoZWlnaHQgPyBoZWlnaHQgKiB0aGlzLl9jb25maWcuc2l6ZSAvIHdpZHRoIHwgMCA6IHRoaXMuX2NvbmZpZy5zaXplIDogaGVpZ2h0O1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIExpdmVTdHJlYW0gZXh0ZW5kcyBWaWRlb1N0cmVhbSB7XG4gICAgY29uc3RydWN0b3IodmlkZW86IEhUTUxWaWRlb0VsZW1lbnQpIHtcbiAgICAgICAgdmlkZW8uc2V0QXR0cmlidXRlKCdhdXRvcGxheScsICcnKTtcbiAgICAgICAgc3VwZXIodmlkZW8pO1xuICAgIH1cblxuICAgIGdldCBlbmRlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEltYWdlV3JhcHBlciB9IGZyb20gJy4uL2NvbW1vbi9pbWFnZS13cmFwcGVyJztcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi4vY29tbW9uL3BvaW50JztcblxuLyoqXG4gKiBJbnZlcnQgbWF0cml4XG4gKiBAcGFyYW0gbWF0cml4IHRoZSBtYXRyaXggdG8gaW52ZXJ0XG4gKiBAcmV0dXJucyB0aGUgaW52ZXJ0ZWQgbWF0cml4XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbnZlcnQobWF0cml4OiBGbG9hdDMyQXJyYXkpOiBGbG9hdDMyQXJyYXkge1xuICAgIGNvbnN0IGEwID0gbWF0cml4WzBdO1xuICAgIGNvbnN0IGExID0gbWF0cml4WzFdO1xuICAgIGNvbnN0IGEyID0gbWF0cml4WzJdO1xuICAgIGNvbnN0IGEzID0gbWF0cml4WzNdO1xuICAgIGNvbnN0IGRldGVybWluYW50ID0gYTAgKiBhMyAtIGEyICogYTE7XG5cbiAgICBpZiAoIWRldGVybWluYW50KSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRmxvYXQzMkFycmF5KFthMyAvIGRldGVybWluYW50LCAtYTEgLyBkZXRlcm1pbmFudCwgLWEyIC8gZGV0ZXJtaW5hbnQsIGEwIC8gZGV0ZXJtaW5hbnRdKTtcbn1cblxuLyoqXG4gKiBUcmFuc2Zvcm1zIHRoZSB2ZWN0b3Igd2l0aCBhIG1hdHJpeFxuICogQHBhcmFtIHsgeCwgeSB9IHZlY3RvciB0byB0cmFuc2Zvcm1cbiAqIEBwYXJhbSBtYXRyaXggbWF0cml4IHRvIHRyYW5zZm9ybSB3aXRoXG4gKiBAcmV0dXJucyB0aGUgdHJhbnNmb3JtZWQgdmVjdG9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1XaXRoTWF0cml4KHsgeCwgeSB9OiBQb2ludCwgbWF0cml4OiBGbG9hdDMyQXJyYXkpOiBQb2ludCB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgeDogbWF0cml4WzBdICogeCArIG1hdHJpeFsyXSAqIHksXG4gICAgICAgIHk6IG1hdHJpeFsxXSAqIHggKyBtYXRyaXhbM10gKiB5XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gX2NvbXB1dGVIaXN0b2dyYW0oaW1hZ2VXcmFwcGVyOiBJbWFnZVdyYXBwZXIsIGJpdHNQZXJQaXhlbDogbnVtYmVyKTogSW50MzJBcnJheSB7XG4gICAgaWYgKCFiaXRzUGVyUGl4ZWwpIHtcbiAgICAgICAgYml0c1BlclBpeGVsID0gODtcbiAgICB9XG5cbiAgICBjb25zdCBpbWFnZURhdGEgPSBpbWFnZVdyYXBwZXIuZGF0YTtcbiAgICBjb25zdCBiaXRTaGlmdCA9IDggLSBiaXRzUGVyUGl4ZWw7XG4gICAgY29uc3QgYnVja2V0Q291bnQgPSAxIDw8IGJpdHNQZXJQaXhlbDtcbiAgICBjb25zdCBoaXN0b2dyYW0gPSBuZXcgSW50MzJBcnJheShidWNrZXRDb3VudCk7XG5cbiAgICBmb3IgKGxldCBpID0gaW1hZ2VEYXRhLmxlbmd0aDsgaS0tOykge1xuICAgICAgICBoaXN0b2dyYW1baW1hZ2VEYXRhW2ldID4+IGJpdFNoaWZ0XSsrO1xuICAgIH1cblxuICAgIHJldHVybiBoaXN0b2dyYW07XG59XG5cbmZ1bmN0aW9uIF9kZXRlcm1pbmVPdHN1VGhyZXNob2xkKGltYWdlV3JhcHBlcjogSW1hZ2VXcmFwcGVyLCBiaXRzUGVyUGl4ZWw/OiBudW1iZXIpOiBudW1iZXIge1xuICAgIGlmICghYml0c1BlclBpeGVsKSB7XG4gICAgICAgIGJpdHNQZXJQaXhlbCA9IDg7XG4gICAgfVxuXG4gICAgY29uc3QgYml0U2hpZnQgPSA4IC0gYml0c1BlclBpeGVsO1xuICAgIGNvbnN0IGhpc3QgPSBfY29tcHV0ZUhpc3RvZ3JhbShpbWFnZVdyYXBwZXIsIGJpdHNQZXJQaXhlbCk7XG4gICAgY29uc3QgdmV0ID0gWzBdO1xuICAgIGNvbnN0IG1heCA9ICgxIDw8IGJpdHNQZXJQaXhlbCkgLSAxO1xuXG4gICAgZnVuY3Rpb24gcHgoaW5pdDogbnVtYmVyLCBlbmQ6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIGxldCBzdW0gPSAwO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSBpbml0OyBpIDw9IGVuZDsgaSsrKSB7XG4gICAgICAgICAgICBzdW0gKz0gaGlzdFtpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdW07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbXgoaW5pdDogbnVtYmVyLCBlbmQ6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIGxldCBzdW0gPSAwO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSBpbml0OyBpIDw9IGVuZDsgaSsrKSB7XG4gICAgICAgICAgICBzdW0gKz0gaSAqIGhpc3RbaV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VtO1xuICAgIH1cblxuICAgIGZvciAobGV0IGsgPSAxOyBrIDwgbWF4OyBrKyspIHtcbiAgICAgICAgY29uc3QgcDEgPSBweCgwLCBrKTtcbiAgICAgICAgY29uc3QgcDIgPSBweChrICsgMSwgbWF4KTtcbiAgICAgICAgY29uc3QgcDEyID0gcDEgKiBwMiB8fCAxO1xuICAgICAgICBjb25zdCBtMSA9IG14KDAsIGspICogcDI7XG4gICAgICAgIGNvbnN0IG0yID0gbXgoayArIDEsIG1heCkgKiBwMTtcbiAgICAgICAgY29uc3QgbTEyID0gbTEgLSBtMjtcbiAgICAgICAgdmV0W2tdID0gbTEyICogbTEyIC8gcDEyO1xuICAgIH1cblxuICAgIC8vIGluZGV4IG9mIG1heCBlbGVtZW50XG4gICAgY29uc3QgdGhyZXNob2xkID0gdmV0LnJlZHVjZSgobWF4SW5kZXgsIGl0ZW0sIGluZGV4LCBhcnJheSkgPT4gaXRlbSA+IGFycmF5W21heEluZGV4XSA/IGluZGV4IDogbWF4SW5kZXgsIDApO1xuXG4gICAgcmV0dXJuIHRocmVzaG9sZCA8PCBiaXRTaGlmdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG90c3VUaHJlc2hvbGQoaW1hZ2VXcmFwcGVyOiBJbWFnZVdyYXBwZXIsIHRhcmdldFdyYXBwZXI6IEltYWdlV3JhcHBlcik6IG51bWJlciB7XG4gICAgY29uc3QgdGhyZXNob2xkID0gX2RldGVybWluZU90c3VUaHJlc2hvbGQoaW1hZ2VXcmFwcGVyKTtcbiAgICBjb25zdCB0YXJnZXREYXRhID0gdGFyZ2V0V3JhcHBlci5kYXRhO1xuXG4gICAgaW1hZ2VXcmFwcGVyLmRhdGEuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAgIHRhcmdldERhdGFbaW5kZXhdID0gdmFsdWUgPCB0aHJlc2hvbGQgPyAxIDogMDtcbiAgICB9KTtcblxuICAgIHJldHVybiB0aHJlc2hvbGQ7XG59XG5cbi8qKlxuICogQHBhcmFtIGltYWdlV3JhcHBlciBpbnB1dCBpbWFnZSB0byBiZSBzYW1wbGVkXG4gKiBAcGFyYW0gb3V0SW1hZ2VXcmFwcGVyIHtJbWFnZVdyYXBwZXJ9IHRvIGJlIHN0b3JlZCBpblxuICovXG5leHBvcnQgZnVuY3Rpb24gaGFsZlNhbXBsZShpbWFnZVdyYXBwZXI6IEltYWdlV3JhcHBlciwgb3V0SW1hZ2VXcmFwcGVyOiBJbWFnZVdyYXBwZXIpOiB2b2lkIHtcbiAgICBjb25zdCBpbWFnZSA9IGltYWdlV3JhcHBlci5kYXRhO1xuICAgIGNvbnN0IHdpZHRoID0gaW1hZ2VXcmFwcGVyLnNpemUueDtcbiAgICBjb25zdCBvdXRJbWFnZSA9IG91dEltYWdlV3JhcHBlci5kYXRhO1xuICAgIGNvbnN0IGVuZEluZGV4ID0gaW1hZ2UubGVuZ3RoO1xuICAgIGNvbnN0IG91dFdpZHRoID0gd2lkdGggPj4gMTtcbiAgICBsZXQgdG9wUm93SW5kZXggPSAwO1xuICAgIGxldCBib3R0b21Sb3dJbmRleCA9IHdpZHRoO1xuICAgIGxldCBvdXRJbWdJbmRleCA9IDA7XG5cbiAgICB3aGlsZSAoYm90dG9tUm93SW5kZXggPCBlbmRJbmRleCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG91dFdpZHRoOyBpKyspIHtcbiAgICAgICAgICAgIG91dEltYWdlW291dEltZ0luZGV4XSA9XG4gICAgICAgICAgICAgICAgKGltYWdlW3RvcFJvd0luZGV4XSArIGltYWdlW3RvcFJvd0luZGV4ICsgMV0gKyBpbWFnZVtib3R0b21Sb3dJbmRleF0gKyBpbWFnZVtib3R0b21Sb3dJbmRleCArIDFdKSA+PiAyO1xuICAgICAgICAgICAgb3V0SW1nSW5kZXgrKztcbiAgICAgICAgICAgIHRvcFJvd0luZGV4ICs9IDI7XG4gICAgICAgICAgICBib3R0b21Sb3dJbmRleCArPSAyO1xuICAgICAgICB9XG4gICAgICAgIHRvcFJvd0luZGV4ICs9IHdpZHRoO1xuICAgICAgICBib3R0b21Sb3dJbmRleCArPSB3aWR0aDtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBCb3ggfSBmcm9tICcuLi9jb21tb24vYm94JztcbmltcG9ydCB7IENsdXN0ZXIgfSBmcm9tICcuLi9jb21tb24vY2x1c3Rlcic7XG5pbXBvcnQgeyBIU1YsIGhzdjJyZ2IsIFJHQiB9IGZyb20gJy4uL2NvbW1vbi9oc3YycmdiJztcbmltcG9ydCB7IEltYWdlRGVidWcgfSBmcm9tICcuLi9jb21tb24vaW1hZ2UtZGVidWcnO1xuaW1wb3J0IHsgSW1hZ2VXcmFwcGVyIH0gZnJvbSAnLi4vY29tbW9uL2ltYWdlLXdyYXBwZXInO1xuaW1wb3J0IHsgTW9tZW50IH0gZnJvbSAnLi4vY29tbW9uL21vbWVudCc7XG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJy4uL2NvbW1vbi9wb2ludCc7XG5pbXBvcnQgeyBjYWxjdWxhdGVQYXRjaFNpemUgfSBmcm9tICcuLi9pbnB1dC9pbnB1dC1zdHJlYW0tdXRpbHMnO1xuaW1wb3J0IHsgQmFyY29kZUxvY2F0b3JDb25maWcgfSBmcm9tICcuL2JhcmNvZGUtbG9jYXRvci1jb25maWcnO1xuaW1wb3J0IHsgaGFsZlNhbXBsZSwgaW52ZXJ0LCBvdHN1VGhyZXNob2xkLCB0cmFuc2Zvcm1XaXRoTWF0cml4IH0gZnJvbSAnLi9iYXJjb2RlLWxvY2F0b3ItdXRpbHMnO1xuaW1wb3J0IHsgUmFzdGVyaXplciB9IGZyb20gJy4vcmFzdGVyaXplcic7XG5pbXBvcnQgc2tlbGV0b25pemVyIGZyb20gJy4vc2tlbGV0b25pemVyJztcbmltcG9ydCB7IFNlYXJjaERpcmVjdGlvbnMgfSBmcm9tICcuL3RyYWNlcic7XG5cbmludGVyZmFjZSBQYXRjaCB7XG4gICAgYm94OiBCb3g7XG4gICAgaW5kZXg6IG51bWJlcjtcbiAgICBtb21lbnRzOiBBcnJheTxNb21lbnQ+O1xuICAgIHBvczogUG9pbnQ7XG4gICAgcmFkOiBudW1iZXI7XG4gICAgeDogbnVtYmVyO1xuICAgIHk6IG51bWJlcjtcbn1cblxudHlwZSBTY2VsZXRvbml6ZXIgPSBhbnk7XG5cbmNvbnN0IE1vbWVudFNpbWlsYXJpdHlUaHJlc2hvbGQgPSAwLjk7XG5cbmV4cG9ydCBjbGFzcyBCYXJjb2RlTG9jYXRvciB7XG4gICAgcHJpdmF0ZSBfY29uZmlnOiBCYXJjb2RlTG9jYXRvckNvbmZpZztcbiAgICBwcml2YXRlIF9pbnB1dEltYWdlV3JhcHBlcjogSW1hZ2VXcmFwcGVyO1xuICAgIHByaXZhdGUgX2N1cnJlbnRJbWFnZVdyYXBwZXI6IEltYWdlV3JhcHBlcjtcbiAgICBwcml2YXRlIF9za2VsSW1hZ2VXcmFwcGVyOiBJbWFnZVdyYXBwZXI7XG4gICAgcHJpdmF0ZSBfc3ViSW1hZ2VXcmFwcGVyOiBJbWFnZVdyYXBwZXI7XG4gICAgcHJpdmF0ZSBfbGFiZWxJbWFnZVdyYXBwZXI6IEltYWdlV3JhcHBlcjxBcnJheTxudW1iZXI+PjtcbiAgICBwcml2YXRlIF9iaW5hcnlJbWFnZVdyYXBwZXI6IEltYWdlV3JhcHBlcjtcbiAgICBwcml2YXRlIF9wYXRjaEdyaWQ6IEltYWdlV3JhcHBlcjtcbiAgICBwcml2YXRlIF9wYXRjaExhYmVsR3JpZDogSW1hZ2VXcmFwcGVyPEludDMyQXJyYXk+O1xuICAgIHByaXZhdGUgX2ltYWdlVG9QYXRjaEdyaWQ6IEFycmF5PFBhdGNoPjtcbiAgICBwcml2YXRlIF9wYXRjaFNpemU6IFBvaW50O1xuICAgIHByaXZhdGUgX2JpbmFyeUNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcbiAgICBwcml2YXRlIF9udW1QYXRjaGVzOiBQb2ludDtcbiAgICBwcml2YXRlIF9za2VsZXRvbml6ZXI6IFNjZWxldG9uaXplcjtcblxuICAgIGNvbnN0cnVjdG9yKGlucHV0SW1hZ2VXcmFwcGVyOiBJbWFnZVdyYXBwZXIsIGNvbmZpZzogQmFyY29kZUxvY2F0b3JDb25maWcpIHtcbiAgICAgICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuICAgICAgICB0aGlzLl9pbnB1dEltYWdlV3JhcHBlciA9IGlucHV0SW1hZ2VXcmFwcGVyO1xuICAgICAgICB0aGlzLl9udW1QYXRjaGVzID0geyB4OiAwLCB5OiAwIH07XG5cbiAgICAgICAgdGhpcy5faW5pdEJ1ZmZlcnMoKTtcbiAgICAgICAgdGhpcy5faW5pdENhbnZhcygpO1xuICAgIH1cblxuICAgIGxvY2F0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy5oYWxmU2FtcGxlKSB7XG4gICAgICAgICAgICBoYWxmU2FtcGxlKHRoaXMuX2lucHV0SW1hZ2VXcmFwcGVyLCB0aGlzLl9jdXJyZW50SW1hZ2VXcmFwcGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2JpbmFyaXplSW1hZ2UoKTtcbiAgICAgICAgY29uc3QgcGF0Y2hlc0ZvdW5kID0gdGhpcy5fZmluZFBhdGNoZXMoKTtcbiAgICAgICAgLy8gcmV0dXJuIHVubGVzcyA1JSBvciBtb3JlIHBhdGNoZXMgYXJlIGZvdW5kXG4gICAgICAgIGlmIChwYXRjaGVzRm91bmQubGVuZ3RoIDwgdGhpcy5fbnVtUGF0Y2hlcy54ICogdGhpcy5fbnVtUGF0Y2hlcy55ICogMC4wNSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvLyByYXN0ZXJpemUgYXJlYSBieSBjb21wYXJpbmcgYW5ndWxhciBzaW1pbGFyaXR5O1xuICAgICAgICBjb25zdCBtYXhMYWJlbCA9IHRoaXMuX3Jhc3Rlcml6ZUFuZ3VsYXJTaW1pbGFyaXR5KHBhdGNoZXNGb3VuZCk7XG4gICAgICAgIGlmIChtYXhMYWJlbCA8IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc2VhcmNoIGZvciBhcmVhIHdpdGggdGhlIG1vc3QgcGF0Y2hlcyAoYmlnZ2VzdCBjb25uZWN0ZWQgYXJlYSlcbiAgICAgICAgY29uc3QgdG9wTGFiZWxzID0gdGhpcy5fZmluZEJpZ2dlc3RDb25uZWN0ZWRBcmVhcyhtYXhMYWJlbCk7XG4gICAgICAgIGlmICh0b3BMYWJlbHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGJveGVzID0gdGhpcy5fZmluZEJveGVzKHRvcExhYmVscywgbWF4TGFiZWwpO1xuICAgICAgICByZXR1cm4gYm94ZXM7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaW5pdEJ1ZmZlcnMoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLl9jb25maWcuaGFsZlNhbXBsZSkge1xuICAgICAgICAgICAgdGhpcy5fY3VycmVudEltYWdlV3JhcHBlciA9IG5ldyBJbWFnZVdyYXBwZXIoe1xuICAgICAgICAgICAgICAgIHg6IHRoaXMuX2lucHV0SW1hZ2VXcmFwcGVyLnNpemUueCAvIDIgfCAwLFxuICAgICAgICAgICAgICAgIHk6IHRoaXMuX2lucHV0SW1hZ2VXcmFwcGVyLnNpemUueSAvIDIgfCAwXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRJbWFnZVdyYXBwZXIgPSB0aGlzLl9pbnB1dEltYWdlV3JhcHBlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3BhdGNoU2l6ZSA9IGNhbGN1bGF0ZVBhdGNoU2l6ZSh0aGlzLl9jb25maWcucGF0Y2hTaXplLCB0aGlzLl9jdXJyZW50SW1hZ2VXcmFwcGVyLnNpemUpO1xuXG4gICAgICAgIHRoaXMuX251bVBhdGNoZXMueCA9IHRoaXMuX2N1cnJlbnRJbWFnZVdyYXBwZXIuc2l6ZS54IC8gdGhpcy5fcGF0Y2hTaXplLnggfCAwO1xuICAgICAgICB0aGlzLl9udW1QYXRjaGVzLnkgPSB0aGlzLl9jdXJyZW50SW1hZ2VXcmFwcGVyLnNpemUueSAvIHRoaXMuX3BhdGNoU2l6ZS55IHwgMDtcblxuICAgICAgICB0aGlzLl9iaW5hcnlJbWFnZVdyYXBwZXIgPSBuZXcgSW1hZ2VXcmFwcGVyKHRoaXMuX2N1cnJlbnRJbWFnZVdyYXBwZXIuc2l6ZSwgdW5kZWZpbmVkLCBVaW50OEFycmF5LCBmYWxzZSk7XG5cbiAgICAgICAgdGhpcy5fbGFiZWxJbWFnZVdyYXBwZXIgPSBuZXcgSW1hZ2VXcmFwcGVyKHRoaXMuX3BhdGNoU2l6ZSwgdW5kZWZpbmVkLCBBcnJheSwgdHJ1ZSk7XG5cbiAgICAgICAgY29uc3Qgc2tlbGV0b25JbWFnZURhdGEgPSBuZXcgQXJyYXlCdWZmZXIoNjQgKiAxMDI0KTtcbiAgICAgICAgdGhpcy5fc3ViSW1hZ2VXcmFwcGVyID0gbmV3IEltYWdlV3JhcHBlcih0aGlzLl9wYXRjaFNpemUsIG5ldyBVaW50OEFycmF5KHNrZWxldG9uSW1hZ2VEYXRhLCAwLCB0aGlzLl9wYXRjaFNpemUueCAqIHRoaXMuX3BhdGNoU2l6ZS55KSk7XG4gICAgICAgIHRoaXMuX3NrZWxJbWFnZVdyYXBwZXIgPSBuZXcgSW1hZ2VXcmFwcGVyKHRoaXMuX3BhdGNoU2l6ZSxcbiAgICAgICAgICAgIG5ldyBVaW50OEFycmF5KHNrZWxldG9uSW1hZ2VEYXRhLCB0aGlzLl9wYXRjaFNpemUueCAqIHRoaXMuX3BhdGNoU2l6ZS55ICogMywgdGhpcy5fcGF0Y2hTaXplLnggKiB0aGlzLl9wYXRjaFNpemUueSksXG4gICAgICAgICAgICB1bmRlZmluZWQsIHRydWUpO1xuICAgICAgICB0aGlzLl9za2VsZXRvbml6ZXIgPSBza2VsZXRvbml6ZXIoXG4gICAgICAgICAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpID8gd2luZG93IDogKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJykgPyBzZWxmIDogZ2xvYmFsLFxuICAgICAgICAgICAgeyBzaXplOiB0aGlzLl9wYXRjaFNpemUueCB9LFxuICAgICAgICAgICAgc2tlbGV0b25JbWFnZURhdGFcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBzaXplID0ge1xuICAgICAgICAgICAgeDogKHRoaXMuX2N1cnJlbnRJbWFnZVdyYXBwZXIuc2l6ZS54IC8gdGhpcy5fc3ViSW1hZ2VXcmFwcGVyLnNpemUueCkgfCAwLFxuICAgICAgICAgICAgeTogKHRoaXMuX2N1cnJlbnRJbWFnZVdyYXBwZXIuc2l6ZS55IC8gdGhpcy5fc3ViSW1hZ2VXcmFwcGVyLnNpemUueSkgfCAwXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX3BhdGNoTGFiZWxHcmlkID0gbmV3IEltYWdlV3JhcHBlcihzaXplLCB1bmRlZmluZWQsIEludDMyQXJyYXksIHRydWUpO1xuICAgICAgICB0aGlzLl9wYXRjaEdyaWQgPSBuZXcgSW1hZ2VXcmFwcGVyKHNpemUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0cnVlKTtcbiAgICAgICAgdGhpcy5faW1hZ2VUb1BhdGNoR3JpZCA9IG5ldyBBcnJheTxQYXRjaD4odGhpcy5fcGF0Y2hMYWJlbEdyaWQuZGF0YS5sZW5ndGgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2luaXRDYW52YXMoKSB7XG4gICAgICAgIGlmICh0aGlzLl9jb25maWcudXNlV29ya2VyIHx8IHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICBjYW52YXMuY2xhc3NOYW1lID0gJ2JpbmFyeUJ1ZmZlcic7XG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHRoaXMuX2JpbmFyeUltYWdlV3JhcHBlci5zaXplLng7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSB0aGlzLl9iaW5hcnlJbWFnZVdyYXBwZXIuc2l6ZS55O1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLl9jb25maWcuZGVidWcgJiYgdGhpcy5fY29uZmlnLmRlYnVnLnNob3dDYW52YXMpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZWJ1ZycpLmFwcGVuZENoaWxkKGNhbnZhcyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fYmluYXJ5Q29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBib3VuZGluZyBib3ggd2hpY2ggZW5jbG9zZXMgYWxsIHRoZSBnaXZlbiBwYXRjaGVzXG4gICAgICogQHJldHVybnMgVGhlIG1pbmltYWwgYm91bmRpbmcgYm94XG4gICAgICovXG4gICAgcHJpdmF0ZSBfYm94RnJvbVBhdGNoZXMocGF0Y2hlczogQXJyYXk8UGF0Y2g+KTogQm94IHtcbiAgICAgICAgY29uc3QgZGVidWcgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuX2NvbmZpZy5kZWJ1ZztcbiAgICAgICAgbGV0IGF2ZXJhZ2VSYWQgPSBwYXRjaGVzLnJlZHVjZSgoc3VtLCB7IHBvcywgcmFkIH0pID0+IHtcbiAgICAgICAgICAgIGlmIChkZWJ1ZyAmJiBkZWJ1Zy5zaG93UGF0Y2hlcykge1xuICAgICAgICAgICAgICAgIC8vIGRyYXcgYWxsIHBhdGNoZXMgd2hpY2ggYXJlIHRvIGJlIHRha2VuIGludG8gY29uc2lkZXJhdGlvblxuICAgICAgICAgICAgICAgIHRoaXMuX2RyYXdSZWN0KHBvcywgdGhpcy5fc3ViSW1hZ2VXcmFwcGVyLnNpemUsICdyZWQnLCAxKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHN1bSArIHJhZDtcbiAgICAgICAgfSwgMCkgLyBwYXRjaGVzLmxlbmd0aDtcblxuICAgICAgICBhdmVyYWdlUmFkID0gKGF2ZXJhZ2VSYWQgKiAxODAgLyBNYXRoLlBJICsgOTApICUgMTgwIC0gOTA7XG4gICAgICAgIGlmIChhdmVyYWdlUmFkIDwgMCkge1xuICAgICAgICAgICAgYXZlcmFnZVJhZCArPSAxODA7XG4gICAgICAgIH1cbiAgICAgICAgYXZlcmFnZVJhZCA9ICgxODAgLSBhdmVyYWdlUmFkKSAqIE1hdGguUEkgLyAxODA7XG5cbiAgICAgICAgY29uc3QgY29zID0gTWF0aC5jb3MoYXZlcmFnZVJhZCk7XG4gICAgICAgIGNvbnN0IHNpbiA9IE1hdGguc2luKGF2ZXJhZ2VSYWQpO1xuICAgICAgICBjb25zdCBtYXRyaXggPSBuZXcgRmxvYXQzMkFycmF5KFtjb3MsIHNpbiwgLXNpbiwgY29zXSk7XG4gICAgICAgIGNvbnN0IGludmVyc2VNYXRyaXggPSBpbnZlcnQobWF0cml4KTtcblxuICAgICAgICAvLyBpdGVyYXRlIG92ZXIgcGF0Y2hlcyBhbmQgcm90YXRlIGJ5IGFuZ2xlXG4gICAgICAgIHBhdGNoZXMuZm9yRWFjaCgoeyBib3ggfSkgPT4ge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA0OyBqKyspIHtcbiAgICAgICAgICAgICAgICBib3hbal0gPSB0cmFuc2Zvcm1XaXRoTWF0cml4KGJveFtqXSwgbWF0cml4KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGRlYnVnICYmIGRlYnVnLmJveEZyb21QYXRjaGVzLnNob3dUcmFuc2Zvcm1lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2RyYXdQYXRoKGJveCwgJyM5OWZmMDAnLCAyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IG1pblggPSB0aGlzLl9iaW5hcnlJbWFnZVdyYXBwZXIuc2l6ZS54O1xuICAgICAgICBsZXQgbWluWSA9IHRoaXMuX2JpbmFyeUltYWdlV3JhcHBlci5zaXplLnk7XG4gICAgICAgIGxldCBtYXhYID0gLW1pblg7XG4gICAgICAgIGxldCBtYXhZID0gLW1pblk7XG5cbiAgICAgICAgLy8gZmluZCBib3VuZGluZyBib3hcbiAgICAgICAgcGF0Y2hlcy5mb3JFYWNoKCh7IGJveCB9KSA9PiB7XG4gICAgICAgICAgICBib3guZm9yRWFjaCgoeyB4LCB5IH0pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoeCA8IG1pblgpIHtcbiAgICAgICAgICAgICAgICAgICAgbWluWCA9IHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh4ID4gbWF4WCkge1xuICAgICAgICAgICAgICAgICAgICBtYXhYID0geDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHkgPCBtaW5ZKSB7XG4gICAgICAgICAgICAgICAgICAgIG1pblkgPSB5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoeSA+IG1heFkpIHtcbiAgICAgICAgICAgICAgICAgICAgbWF4WSA9IHk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBib3g6IEJveCA9IFt7IHg6IG1pblgsIHk6IG1pblkgfSwgeyB4OiBtYXhYLCB5OiBtaW5ZIH0sIHsgeDogbWF4WCwgeTogbWF4WSB9LCB7IHg6IG1pblgsIHk6IG1heFkgfV07XG5cbiAgICAgICAgaWYgKGRlYnVnICYmIGRlYnVnLmJveEZyb21QYXRjaGVzLnNob3dUcmFuc2Zvcm1lZEJveCkge1xuICAgICAgICAgICAgdGhpcy5fZHJhd1BhdGgoYm94LCAnI2ZmMDAwMCcsIDIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcmV2ZXJzZSByb3RhdGlvblxuICAgICAgICBib3ggPSBib3gubWFwKHZlcnRleCA9PiB0cmFuc2Zvcm1XaXRoTWF0cml4KHZlcnRleCwgaW52ZXJzZU1hdHJpeCkpIGFzIEJveDtcblxuICAgICAgICBpZiAoZGVidWcgJiYgZGVidWcuYm94RnJvbVBhdGNoZXMuc2hvd0JCKSB7XG4gICAgICAgICAgICB0aGlzLl9kcmF3UGF0aChib3gsICcjZmYwMDAwJywgMik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fY29uZmlnLmhhbGZTYW1wbGUpIHtcbiAgICAgICAgICAgIC8vIHNjYWxlXG4gICAgICAgICAgICBib3ggPSBib3gubWFwKCh7IHgsIHkgfSkgPT4gKHsgeDogeCAqIDIsIHk6IHkgKj0gMiB9KSkgYXMgQm94O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGJveDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgYmluYXJ5IGltYWdlIG9mIHRoZSBjdXJyZW50IGltYWdlXG4gICAgICovXG4gICAgcHJpdmF0ZSBfYmluYXJpemVJbWFnZSgpOiB2b2lkIHtcbiAgICAgICAgb3RzdVRocmVzaG9sZCh0aGlzLl9jdXJyZW50SW1hZ2VXcmFwcGVyLCB0aGlzLl9iaW5hcnlJbWFnZVdyYXBwZXIpO1xuICAgICAgICB0aGlzLl9iaW5hcnlJbWFnZVdyYXBwZXIuemVyb0JvcmRlcigpO1xuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuX2NvbmZpZy5kZWJ1ZyAmJiB0aGlzLl9jb25maWcuZGVidWcuc2hvd0NhbnZhcykge1xuICAgICAgICAgICAgdGhpcy5fYmluYXJ5SW1hZ2VXcmFwcGVyLnNob3codGhpcy5fYmluYXJ5Q29udGV4dCwgMjU1KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEl0ZXJhdGUgb3ZlciB0aGUgZW50aXJlIGltYWdlLCBleHRyYWN0IHBhdGNoZXNcbiAgICAgKi9cbiAgICBwcml2YXRlIF9maW5kUGF0Y2hlcygpOiBBcnJheTxQYXRjaD4ge1xuICAgICAgICBjb25zdCBkZWJ1ZyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdGhpcy5fY29uZmlnLmRlYnVnO1xuICAgICAgICBsZXQgcGF0Y2hlc0ZvdW5kID0gbmV3IEFycmF5PFBhdGNoPigpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fbnVtUGF0Y2hlcy54OyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5fbnVtUGF0Y2hlcy55OyBqKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCB4ID0gdGhpcy5fc3ViSW1hZ2VXcmFwcGVyLnNpemUueCAqIGk7XG4gICAgICAgICAgICAgICAgY29uc3QgeSA9IHRoaXMuX3N1YkltYWdlV3JhcHBlci5zaXplLnkgKiBqO1xuXG4gICAgICAgICAgICAgICAgLy8gc2VwZXJhdGUgcGFydHNcbiAgICAgICAgICAgICAgICB0aGlzLl9za2VsZXRvbml6ZSh4LCB5KTtcblxuICAgICAgICAgICAgICAgIC8vIFJhc3Rlcml6ZSwgZmluZCBpbmRpdmlkdWFsIGJhcnNcbiAgICAgICAgICAgICAgICB0aGlzLl9za2VsSW1hZ2VXcmFwcGVyLnplcm9Cb3JkZXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9sYWJlbEltYWdlV3JhcHBlci5kYXRhLmZpbGwoMCk7XG4gICAgICAgICAgICAgICAgY29uc3QgcmFzdGVyaXplciA9IG5ldyBSYXN0ZXJpemVyKHRoaXMuX3NrZWxJbWFnZVdyYXBwZXIsIHRoaXMuX2xhYmVsSW1hZ2VXcmFwcGVyKTtcbiAgICAgICAgICAgICAgICBjb25zdCByYXN0ZXJSZXN1bHQgPSByYXN0ZXJpemVyLnJhc3Rlcml6ZSgwKTtcblxuICAgICAgICAgICAgICAgIGlmIChkZWJ1ZyAmJiBkZWJ1Zy5zaG93TGFiZWxzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2xhYmVsSW1hZ2VXcmFwcGVyLm92ZXJsYXkodGhpcy5fYmluYXJ5Q29udGV4dCwgMzYwIC8gcmFzdGVyUmVzdWx0LmNvdW50IHwgMCwgeCwgeSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gY2FsY3VsYXRlIG1vbWVudHMgZnJvbSB0aGUgc2tlbGV0b25pemVkIHBhdGNoXG4gICAgICAgICAgICAgICAgY29uc3QgbW9tZW50cyA9IHRoaXMuX2xhYmVsSW1hZ2VXcmFwcGVyLm1vbWVudHMocmFzdGVyUmVzdWx0LmNvdW50KTtcblxuICAgICAgICAgICAgICAgIC8vIGV4dHJhY3QgZWxpZ2libGUgcGF0Y2hlc1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhdGNoID0gdGhpcy5fZGVzY3JpYmVQYXRjaChtb21lbnRzLCBqICogdGhpcy5fbnVtUGF0Y2hlcy54ICsgaSwgeCwgeSk7XG4gICAgICAgICAgICAgICAgaWYgKHBhdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGNoZXNGb3VuZC5wdXNoKHBhdGNoKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoZGVidWcgJiYgZGVidWcuc2hvd0ZvdW5kUGF0Y2hlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZHJhd1JlY3QocGF0Y2gucG9zLCB0aGlzLl9zdWJJbWFnZVdyYXBwZXIuc2l6ZSwgJyM5OWZmMDAnLCAyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYXRjaGVzRm91bmQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmluZHMgdGhvc2UgY29ubmVjdGVkIGFyZWFzIHdoaWNoIGNvbnRhaW4gYXQgbGVhc3QgNiBwYXRjaGVzXG4gICAgICogYW5kIHJldHVybnMgdGhlbSBvcmRlcmVkIERFU0MgYnkgdGhlIG51bWJlciBvZiBjb250YWluZWQgcGF0Y2hlc1xuICAgICAqIEBwYXJhbSBtYXhMYWJlbFxuICAgICAqL1xuICAgIHByaXZhdGUgX2ZpbmRCaWdnZXN0Q29ubmVjdGVkQXJlYXMobWF4TGFiZWw6IG51bWJlcik6IEFycmF5PG51bWJlcj4ge1xuICAgICAgICBsZXQgbGFiZWxIaXN0ID0gbmV3IEFycmF5PG51bWJlcj4obWF4TGFiZWwpLmZpbGwoMCk7XG5cbiAgICAgICAgdGhpcy5fcGF0Y2hMYWJlbEdyaWQuZGF0YS5mb3JFYWNoKChkYXRhOiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIGlmIChkYXRhID4gMCkge1xuICAgICAgICAgICAgICAgIGxhYmVsSGlzdFtkYXRhIC0gMV0rKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gZXh0cmFjdCB0b3AgYXJlYXMgd2l0aCBhdCBsZWFzdCA2IHBhdGNoZXMgcHJlc2VudFxuICAgICAgICBjb25zdCB0b3BMYWJlbHMgPSBsYWJlbEhpc3QubWFwKCh2YWx1ZSwgaW5kZXgpID0+ICh7IHZhbHVlLCBpbmRleCB9KSlcbiAgICAgICAgICAgIC5maWx0ZXIoKHsgdmFsdWUgfSkgPT4gdmFsdWUgPj0gNSkuc29ydCgoYSwgYikgPT4gYi52YWx1ZSAtIGEudmFsdWUpLm1hcCgoeyBpbmRleCB9KSA9PiBpbmRleCArIDEpO1xuXG4gICAgICAgIHJldHVybiB0b3BMYWJlbHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBwcml2YXRlIF9maW5kQm94ZXModG9wTGFiZWxzOiBBcnJheTxudW1iZXI+LCBtYXhMYWJlbDogbnVtYmVyKTogQXJyYXk8Qm94PiB7XG4gICAgICAgIGNvbnN0IGJveGVzID0gbmV3IEFycmF5PEJveD4oKTtcbiAgICAgICAgY29uc3Qgc2hvd1JlbWFpbmluZ1BhdGNoTGFiZWxzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJlxuICAgICAgICAgICAgdGhpcy5fY29uZmlnLmRlYnVnICYmIHRoaXMuX2NvbmZpZy5kZWJ1Zy5zaG93UmVtYWluaW5nUGF0Y2hMYWJlbHM7XG5cbiAgICAgICAgdG9wTGFiZWxzLmZvckVhY2gobGFiZWwgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGF0Y2hlcyA9IG5ldyBBcnJheTxQYXRjaD4oKTtcblxuICAgICAgICAgICAgdGhpcy5fcGF0Y2hMYWJlbEdyaWQuZGF0YS5mb3JFYWNoKChkYXRhOiBudW1iZXIsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YSA9PT0gbGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0Y2hlcy5wdXNoKHRoaXMuX2ltYWdlVG9QYXRjaEdyaWRbaW5kZXhdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc3QgYm94ID0gdGhpcy5fYm94RnJvbVBhdGNoZXMocGF0Y2hlcyk7XG5cbiAgICAgICAgICAgIGlmIChib3gpIHtcbiAgICAgICAgICAgICAgICBib3hlcy5wdXNoKGJveCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoc2hvd1JlbWFpbmluZ1BhdGNoTGFiZWxzKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGRyYXcgcGF0Y2gtbGFiZWxzIGlmIHJlcXVlc3RlZFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBoc3Y6IEhTViA9IFsobGFiZWwgLyAobWF4TGFiZWwgKyAxKSkgKiAzNjAsIDEsIDFdO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZ2I6IFJHQiA9IFswLCAwLCAwXTtcbiAgICAgICAgICAgICAgICAgICAgaHN2MnJnYihoc3YsIHJnYik7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29sb3IgPSBgcmdiKCR7cmdiLmpvaW4oJywnKX0pYDtcblxuICAgICAgICAgICAgICAgICAgICBwYXRjaGVzLmZvckVhY2goKHsgcG9zIH0pID0+IHRoaXMuX2RyYXdSZWN0KHBvcywgdGhpcy5fc3ViSW1hZ2VXcmFwcGVyLnNpemUsIGNvbG9yLCAyKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gYm94ZXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmluZCBzaW1pbGFyIG1vbWVudHMgKHZpYSBjbHVzdGVyKVxuICAgICAqIEBwYXJhbSBtb21lbnRzXG4gICAgICovXG4gICAgcHJpdmF0ZSBfc2ltaWxhck1vbWVudHMobW9tZW50czogQXJyYXk8TW9tZW50Pik6IEFycmF5PE1vbWVudD4ge1xuICAgICAgICBjb25zdCBjbHVzdGVycyA9IENsdXN0ZXIuY2x1c3Rlcml6ZShtb21lbnRzLCBNb21lbnRTaW1pbGFyaXR5VGhyZXNob2xkKTtcbiAgICAgICAgY29uc3QgdG9wQ2x1c3RlciA9IGNsdXN0ZXJzLnJlZHVjZSgodG9wLCBpdGVtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb3VudCA9IGl0ZW0ubW9tZW50cy5sZW5ndGg7XG4gICAgICAgICAgICByZXR1cm4gY291bnQgPiB0b3AuY291bnQgPyB7IGl0ZW0sIGNvdW50IH0gOiB0b3A7XG4gICAgICAgIH0sIHsgaXRlbTogeyBtb21lbnRzOiBbXSB9LCBjb3VudDogMCB9KTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdG9wQ2x1c3Rlci5pdGVtLm1vbWVudHM7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9za2VsZXRvbml6ZSh4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLl9iaW5hcnlJbWFnZVdyYXBwZXIuc3ViSW1hZ2VBc0NvcHkodGhpcy5fc3ViSW1hZ2VXcmFwcGVyLCB4LCB5KTtcbiAgICAgICAgdGhpcy5fc2tlbGV0b25pemVyLnNrZWxldG9uaXplKCk7XG5cbiAgICAgICAgLy8gU2hvdyBza2VsZXRvbiBpZiByZXF1ZXN0ZWRcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdGhpcy5fY29uZmlnLmRlYnVnICYmIHRoaXMuX2NvbmZpZy5kZWJ1Zy5zaG93U2tlbGV0b24pIHtcbiAgICAgICAgICAgIHRoaXMuX3NrZWxJbWFnZVdyYXBwZXIub3ZlcmxheSh0aGlzLl9iaW5hcnlDb250ZXh0LCAzNjAsIHgsIHkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXh0cmFjdHMgYW5kIGRlc2NyaWJlcyB0aG9zZSBwYXRjaGVzIHdoaWNoIHNlZW0gdG8gY29udGFpbiBhIGJhcmNvZGUgcGF0dGVyblxuICAgICAqIEBwYXJhbSBtb21lbnRzXG4gICAgICogQHBhcmFtIGluZGV4XG4gICAgICogQHBhcmFtIHhcbiAgICAgKiBAcGFyYW0geVxuICAgICAqIEByZXR1cm5zIGxpc3Qgb2YgcGF0Y2hlc1xuICAgICAqL1xuICAgIHByaXZhdGUgX2Rlc2NyaWJlUGF0Y2gobW9tZW50czogQXJyYXk8TW9tZW50PiwgaW5kZXg6IG51bWJlciwgeDogbnVtYmVyLCB5OiBudW1iZXIpOiBQYXRjaCB7XG4gICAgICAgIGlmIChtb21lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IG1pbkNvbXBvbmVudFdlaWdodCA9IE1hdGguY2VpbCh0aGlzLl9wYXRjaFNpemUueCAvIDMpO1xuICAgICAgICAgICAgLy8gb25seSBjb2xsZWN0IG1vbWVudHMgd2hpY2ggYXJlYSBjb3ZlcnMgYXQgbGVhc3QgbWluQ29tcG9uZW50V2VpZ2h0IHBpeGVsc1xuICAgICAgICAgICAgY29uc3QgZWxpZ2libGVNb21lbnRzID0gbW9tZW50cy5maWx0ZXIobW9tZW50ID0+IG1vbWVudC5tMDAgPiBtaW5Db21wb25lbnRXZWlnaHQpO1xuXG4gICAgICAgICAgICAvLyBpZiBhdCBsZWFzdCAyIG1vbWVudHMgYXJlIGZvdW5kIHdoaWNoIGhhdmUgYXQgbGVhc3QgbWluQ29tcG9uZW50V2VpZ2h0cyBjb3ZlcmVkXG4gICAgICAgICAgICBpZiAoZWxpZ2libGVNb21lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtYXRjaGluZ01vbWVudHMgPSB0aGlzLl9zaW1pbGFyTW9tZW50cyhlbGlnaWJsZU1vbWVudHMpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxlbmd0aCA9IG1hdGNoaW5nTW9tZW50cy5sZW5ndGggfCAwO1xuXG4gICAgICAgICAgICAgICAgLy8gT25seSB0d28gb2YgdGhlIG1vbWVudHMgYXJlIGFsbG93ZWQgbm90IHRvIGZpdCBpbnRvIHRoZSBlcXVhdGlvblxuICAgICAgICAgICAgICAgIGlmIChsZW5ndGggPiAxICYmIChsZW5ndGggPDwgMikgPj0gZWxpZ2libGVNb21lbnRzLmxlbmd0aCAqIDMgJiYgKGxlbmd0aCA8PCAyKSA+IG1vbWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGRldGVybWluZSB0aGUgc2ltaWxhcml0eSBvZiB0aGUgbW9tZW50c1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByYWQgPSBtYXRjaGluZ01vbWVudHMucmVkdWNlKChzdW06IG51bWJlciwgbW9tZW50OiBNb21lbnQpID0+IHN1bSArIG1vbWVudC5yYWQsIDApIC8gbGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvczogeyB4LCB5IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBib3g6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHgsIHkgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHg6IHggKyB0aGlzLl9zdWJJbWFnZVdyYXBwZXIuc2l6ZS54LCB5IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB4OiB4ICsgdGhpcy5fc3ViSW1hZ2VXcmFwcGVyLnNpemUueCwgeTogeSArIHRoaXMuX3N1YkltYWdlV3JhcHBlci5zaXplLnkgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHgsIHk6IHkgKyB0aGlzLl9zdWJJbWFnZVdyYXBwZXIuc2l6ZS55IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtb21lbnRzOiBtYXRjaGluZ01vbWVudHMsXG4gICAgICAgICAgICAgICAgICAgICAgICByYWQsXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBNYXRoLmNvcyhyYWQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgeTogTWF0aC5zaW4ocmFkKVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHByaXZhdGUgX25vdFlldFByb2Nlc3NlZCgpOiBudW1iZXIge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX3BhdGNoTGFiZWxHcmlkLmRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9wYXRjaExhYmVsR3JpZC5kYXRhW2ldID09PSAwICYmIHRoaXMuX3BhdGNoR3JpZC5kYXRhW2ldID09PSAxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhdGNoTGFiZWxHcmlkLmRhdGEubGVuZ3RoO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3RyYWNlKGN1cnJlbnRJbmRleDogbnVtYmVyLCBsYWJlbDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHRocmVzaG9sZCA9IDAuOTU7XG4gICAgICAgIGNvbnN0IGN1cnJlbnQ6IFBvaW50ID0ge1xuICAgICAgICAgICAgeDogY3VycmVudEluZGV4ICUgdGhpcy5fcGF0Y2hMYWJlbEdyaWQuc2l6ZS54LFxuICAgICAgICAgICAgeTogKGN1cnJlbnRJbmRleCAvIHRoaXMuX3BhdGNoTGFiZWxHcmlkLnNpemUueCkgfCAwXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGN1cnJlbnRJbmRleCA8IHRoaXMuX3BhdGNoTGFiZWxHcmlkLmRhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50UGF0Y2ggPSB0aGlzLl9pbWFnZVRvUGF0Y2hHcmlkW2N1cnJlbnRJbmRleF07XG4gICAgICAgICAgICAvLyBhc3NpZ24gbGFiZWxcbiAgICAgICAgICAgIHRoaXMuX3BhdGNoTGFiZWxHcmlkLmRhdGFbY3VycmVudEluZGV4XSA9IGxhYmVsO1xuXG4gICAgICAgICAgICBTZWFyY2hEaXJlY3Rpb25zLmZvckVhY2goZGlyZWN0aW9uID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB5ID0gY3VycmVudC55ICsgZGlyZWN0aW9uWzBdO1xuICAgICAgICAgICAgICAgIGNvbnN0IHggPSBjdXJyZW50LnggKyBkaXJlY3Rpb25bMV07XG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSB5ICogdGhpcy5fcGF0Y2hMYWJlbEdyaWQuc2l6ZS54ICsgeDtcblxuICAgICAgICAgICAgICAgIC8vIGNvbnRpbnVlIGlmIHBhdGNoIGVtcHR5XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3BhdGNoR3JpZC5kYXRhW2luZGV4XSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wYXRjaExhYmVsR3JpZC5kYXRhW2luZGV4XSA9IE51bWJlci5NQVhfVkFMVUU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9wYXRjaExhYmVsR3JpZC5kYXRhW2luZGV4XSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXRjaCA9IHRoaXMuX2ltYWdlVG9QYXRjaEdyaWRbaW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzaW1pbGFyaXR5ID0gTWF0aC5hYnMocGF0Y2gueCAqIGN1cnJlbnRQYXRjaC54ICsgcGF0Y2gueSAqIGN1cnJlbnRQYXRjaC55KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNpbWlsYXJpdHkgPiB0aHJlc2hvbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3RyYWNlKGluZGV4LCBsYWJlbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZpbmRzIHBhdGNoZXMgd2hpY2ggYXJlIGNvbm5lY3RlZCBhbmQgc2hhcmUgdGhlIHNhbWUgb3JpZW50YXRpb25cbiAgICAgKiBAcGFyYW0gcGF0Y2hlc0ZvdW5kXG4gICAgICovXG4gICAgcHJpdmF0ZSBfcmFzdGVyaXplQW5ndWxhclNpbWlsYXJpdHkocGF0Y2hlc0ZvdW5kOiBBcnJheTxQYXRjaD4pOiBudW1iZXIge1xuICAgICAgICBsZXQgbGFiZWwgPSAwO1xuICAgICAgICBjb25zdCBoc3Y6IEhTViA9IFswLCAxLCAxXTtcbiAgICAgICAgY29uc3QgcmdiOiBSR0IgPSBbMCwgMCwgMF07XG5cbiAgICAgICAgLy8gcHJlcGFyZSBmb3IgZmluZGluZyB0aGUgcmlnaHQgcGF0Y2hlc1xuICAgICAgICB0aGlzLl9wYXRjaEdyaWQuZGF0YS5maWxsKDApO1xuICAgICAgICB0aGlzLl9wYXRjaExhYmVsR3JpZC5kYXRhLmZpbGwoMCk7XG4gICAgICAgIHRoaXMuX2ltYWdlVG9QYXRjaEdyaWQuZmlsbChudWxsKTtcblxuICAgICAgICBwYXRjaGVzRm91bmQuZm9yRWFjaChwYXRjaCA9PiB7XG4gICAgICAgICAgICB0aGlzLl9pbWFnZVRvUGF0Y2hHcmlkW3BhdGNoLmluZGV4XSA9IHBhdGNoO1xuICAgICAgICAgICAgdGhpcy5fcGF0Y2hHcmlkLmRhdGFbcGF0Y2guaW5kZXhdID0gMTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gcmFzdGVyaXplIHRoZSBwYXRjaGVzIGZvdW5kIHRvIGRldGVybWluZSBhcmVhXG4gICAgICAgIHRoaXMuX3BhdGNoR3JpZC56ZXJvQm9yZGVyKCk7XG5cbiAgICAgICAgbGV0IGN1cnJlbnRJbmRleCA9IDA7XG4gICAgICAgIHdoaWxlICgoY3VycmVudEluZGV4ID0gdGhpcy5fbm90WWV0UHJvY2Vzc2VkKCkpIDwgdGhpcy5fcGF0Y2hMYWJlbEdyaWQuZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGxhYmVsKys7XG4gICAgICAgICAgICB0aGlzLl90cmFjZShjdXJyZW50SW5kZXgsIGxhYmVsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGRyYXcgcGF0Y2gtbGFiZWxzIGlmIHJlcXVlc3RlZFxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLl9jb25maWcuZGVidWcgJiYgdGhpcy5fY29uZmlnLmRlYnVnLnNob3dQYXRjaExhYmVscykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLl9wYXRjaExhYmVsR3JpZC5kYXRhLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3BhdGNoTGFiZWxHcmlkLmRhdGFbal0gPiAwICYmIHRoaXMuX3BhdGNoTGFiZWxHcmlkLmRhdGFbal0gPD0gbGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGF0Y2ggPSB0aGlzLl9pbWFnZVRvUGF0Y2hHcmlkW2pdO1xuICAgICAgICAgICAgICAgICAgICBoc3ZbMF0gPSAodGhpcy5fcGF0Y2hMYWJlbEdyaWQuZGF0YVtqXSAvIChsYWJlbCArIDEpKSAqIDM2MDtcbiAgICAgICAgICAgICAgICAgICAgaHN2MnJnYihoc3YsIHJnYik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2RyYXdSZWN0KHBhdGNoLnBvcywgdGhpcy5fc3ViSW1hZ2VXcmFwcGVyLnNpemUsIGByZ2IoJHtyZ2Iuam9pbignLCcpfSlgLCAyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbGFiZWw7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZHJhd1JlY3QoeyB4LCB5IH06IFBvaW50LCBzaXplOiBQb2ludCwgY29sb3I6IHN0cmluZywgbGluZVdpZHRoOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fYmluYXJ5Q29udGV4dC5zdHJva2VTdHlsZSA9IGNvbG9yO1xuICAgICAgICB0aGlzLl9iaW5hcnlDb250ZXh0LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgICAgICB0aGlzLl9iaW5hcnlDb250ZXh0LmxpbmVXaWR0aCA9IGxpbmVXaWR0aCB8fCAxO1xuICAgICAgICB0aGlzLl9iaW5hcnlDb250ZXh0LnN0cm9rZVJlY3QoeCwgeSwgc2l6ZS54LCBzaXplLnkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2RyYXdQYXRoKHBhdGg6IEFycmF5PFBvaW50PiwgY29sb3I6IHN0cmluZywgbGluZVdpZHRoOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgSW1hZ2VEZWJ1Zy5kcmF3UGF0aChwYXRoLCB0aGlzLl9iaW5hcnlDb250ZXh0LCBjb2xvciwgbGluZVdpZHRoKTtcbiAgICB9XG59XG4iLCIvKipcbiAqIEBib3Jyb3dzIGh0dHA6Ly93d3cuY29kZXByb2plY3QuY29tL1RpcHMvNDA3MTcyL0Nvbm5lY3RlZC1Db21wb25lbnQtTGFiZWxpbmctYW5kLVZlY3Rvcml6YXRpb25cbiAqL1xuXG5pbXBvcnQgeyBJbWFnZVdyYXBwZXIgfSBmcm9tICcuLi9jb21tb24vaW1hZ2Utd3JhcHBlcic7XG5pbXBvcnQgeyBDb250b3VyVmVydGV4LCBUcmFjZXIgfSBmcm9tICcuL3RyYWNlcic7XG5cbmVudW0gRWRnZUxhYmVsIHtcbiAgICBPdXRzaWRlID0gLTMyNzY3LFxuICAgIEluc2lkZSA9IC0zMjc2NlxufTtcblxuZW51bSBDb250b3VyRGlyZWN0aW9uIHtcbiAgICBDVyA9IDAsXG4gICAgQ0NXID0gMSxcbiAgICBVbmtub3duID0gMlxufTtcblxuaW50ZXJmYWNlIENvbnRvdXIge1xuICAgIGRpcjogQ29udG91ckRpcmVjdGlvbjtcbiAgICBpbmRleDogbnVtYmVyO1xuICAgIGZpcnN0VmVydGV4OiBDb250b3VyVmVydGV4O1xuICAgIHByZXZpb3VzUGVlcj86IENvbnRvdXI7XG4gICAgbmV4dFBlZXI/OiBDb250b3VyO1xuICAgIGluc2lkZUNvbnRvdXJzOiBDb250b3VyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJhc3RlclJlc3VsdCB7XG4gICAgY2M6IENvbnRvdXI7XG4gICAgY291bnQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIFJhc3Rlcml6ZXIge1xuICAgIHByaXZhdGUgX3dpZHRoOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfaGVpZ2h0OiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfdHJhY2VyOiBUcmFjZXI7XG4gICAgcHJpdmF0ZSBfaW1hZ2VEYXRhOiBVaW50OEFycmF5O1xuICAgIHByaXZhdGUgX2xhYmVsRGF0YTogQXJyYXk8bnVtYmVyPjtcblxuICAgIGNvbnN0cnVjdG9yKGltYWdlV3JhcHBlcjogSW1hZ2VXcmFwcGVyPFVpbnQ4QXJyYXk+LCBsYWJlbFdyYXBwZXI6IEltYWdlV3JhcHBlcjxBcnJheTxudW1iZXI+Pikge1xuICAgICAgICB0aGlzLl9pbWFnZURhdGEgPSBpbWFnZVdyYXBwZXIuZGF0YTtcbiAgICAgICAgdGhpcy5fbGFiZWxEYXRhID0gbGFiZWxXcmFwcGVyLmRhdGEgYXMgQXJyYXk8bnVtYmVyPjtcbiAgICAgICAgdGhpcy5fd2lkdGggPSBpbWFnZVdyYXBwZXIuc2l6ZS54O1xuICAgICAgICB0aGlzLl9oZWlnaHQgPSBpbWFnZVdyYXBwZXIuc2l6ZS55O1xuICAgICAgICB0aGlzLl90cmFjZXIgPSBuZXcgVHJhY2VyKGltYWdlV3JhcHBlciwgbGFiZWxXcmFwcGVyKTtcbiAgICB9XG5cbiAgICByYXN0ZXJpemUoZGVwdGhMYWJlbDogbnVtYmVyKTogUmFzdGVyUmVzdWx0IHtcbiAgICAgICAgY29uc3QgY29sb3JNYXAgPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDAwOyBpKyspIHtcbiAgICAgICAgICAgIGNvbG9yTWFwW2ldID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbG9yTWFwWzBdID0gdGhpcy5faW1hZ2VEYXRhWzBdO1xuXG4gICAgICAgIGxldCBjYzogQ29udG91ciA9IG51bGw7XG4gICAgICAgIGxldCBzYzogQ29udG91cjtcbiAgICAgICAgbGV0IGNvbm5lY3RlZENvdW50ID0gMDtcblxuICAgICAgICBmb3IgKGxldCBjeSA9IDE7IGN5IDwgdGhpcy5faGVpZ2h0IC0gMTsgY3krKykge1xuICAgICAgICAgICAgbGV0IGxhYmVsSW5kZXggPSAwO1xuICAgICAgICAgICAgbGV0IGJjID0gY29sb3JNYXBbMF07XG5cbiAgICAgICAgICAgIGZvciAobGV0IGN4ID0gMTsgY3ggPCB0aGlzLl93aWR0aCAtIDE7IGN4KyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwb3MgPSBjeSAqIHRoaXMuX3dpZHRoICsgY3g7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fbGFiZWxEYXRhW3Bvc10gPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29sb3IgPSB0aGlzLl9pbWFnZURhdGFbcG9zXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbG9yICE9PSBiYykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhYmVsSW5kZXggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYyA9IGNvbm5lY3RlZENvdW50ICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvck1hcFtsY10gPSBjb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYyA9IGNvbG9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZlcnRleCA9IHRoaXMuX3RyYWNlci5jb250b3VyVHJhY2luZyhjeSwgY3gsIGxjLCBjb2xvciwgRWRnZUxhYmVsLk91dHNpZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2ZXJ0ZXggIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29ubmVjdGVkQ291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxJbmRleCA9IGxjO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwOiBDb250b3VyID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyOiBDb250b3VyRGlyZWN0aW9uLkNXLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGxhYmVsSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdFZlcnRleDogdmVydGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFBlZXI6IGNjLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zaWRlQ29udG91cnM6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNjICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5wcmV2aW91c1BlZXIgPSBwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjID0gcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZlcnRleCA9IHRoaXMuX3RyYWNlci5jb250b3VyVHJhY2luZyhjeSwgY3gsIEVkZ2VMYWJlbC5JbnNpZGUsIGNvbG9yLCBsYWJlbEluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmVydGV4ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHA6IENvbnRvdXIgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXI6IGRlcHRoTGFiZWwgPT09IDAgPyBDb250b3VyRGlyZWN0aW9uLkNDVyA6IENvbnRvdXJEaXJlY3Rpb24uQ1csXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdFZlcnRleDogdmVydGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGRlcHRoTGFiZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNpZGVDb250b3VyczogbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYyA9IGNjO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAoKHNjICE9PSBudWxsKSAmJiBzYy5pbmRleCAhPT0gbGFiZWxJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2MgPSBzYy5uZXh0UGVlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2MgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAubmV4dFBlZXIgPSBzYy5pbnNpZGVDb250b3VycztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzYy5pbnNpZGVDb250b3VycyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjLmluc2lkZUNvbnRvdXJzLnByZXZpb3VzUGVlciA9IHA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYy5pbnNpZGVDb250b3VycyA9IHA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9sYWJlbERhdGFbcG9zXSA9IGxhYmVsSW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2xhYmVsRGF0YVtwb3NdID09PSBFZGdlTGFiZWwuSW5zaWRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsSW5kZXggPSAwO1xuICAgICAgICAgICAgICAgICAgICBiYyA9IHRoaXMuX2ltYWdlRGF0YVtwb3NdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5fbGFiZWxEYXRhW3Bvc10gPT09IEVkZ2VMYWJlbC5PdXRzaWRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsSW5kZXggPSAwO1xuICAgICAgICAgICAgICAgICAgICBiYyA9IGNvbG9yTWFwWzBdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsSW5kZXggPSB0aGlzLl9sYWJlbERhdGFbcG9zXTtcbiAgICAgICAgICAgICAgICAgICAgYmMgPSBjb2xvck1hcFtsYWJlbEluZGV4XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBzYyA9IGNjO1xuICAgICAgICB3aGlsZSAoc2MgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHNjLmluZGV4ID0gZGVwdGhMYWJlbDtcbiAgICAgICAgICAgIHNjID0gc2MubmV4dFBlZXI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY2MsXG4gICAgICAgICAgICBjb3VudDogY29ubmVjdGVkQ291bnRcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBkcmF3Q29udG91cihjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBmaXJzdENvbnRvdXI6IENvbnRvdXIpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSAncmVkJztcbiAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSAncmVkJztcbiAgICAgICAgY29udGV4dC5saW5lV2lkdGggPSAxO1xuXG4gICAgICAgIGxldCBwcSA9IGZpcnN0Q29udG91cjtcbiAgICAgICAgbGV0IGlxID0gcHEgJiYgcHEuaW5zaWRlQ29udG91cnM7XG5cbiAgICAgICAgd2hpbGUgKHBxICE9PSBudWxsKSB7XG4gICAgICAgICAgICBsZXQgcSA9IGlxIHx8IHBxO1xuXG4gICAgICAgICAgICBpZiAoaXEgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpcSA9IGlxLm5leHRQZWVyO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcSA9IHBxLm5leHRQZWVyO1xuICAgICAgICAgICAgICAgIGlxID0gcHEgJiYgcHEuaW5zaWRlQ29udG91cnM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHN3aXRjaCAocS5kaXIpIHtcbiAgICAgICAgICAgICAgICBjYXNlIENvbnRvdXJEaXJlY3Rpb24uQ1c6IHtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9ICdyZWQnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBDb250b3VyRGlyZWN0aW9uLkNDVzoge1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gJ2JsdWUnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBDb250b3VyRGlyZWN0aW9uLlVua25vd246IHtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9ICdncmVlbic7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHAgPSBxLmZpcnN0VmVydGV4O1xuICAgICAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGNvbnRleHQubW92ZVRvKHAueCwgcC55KTtcblxuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgIHAgPSBwLm5leHQ7XG4gICAgICAgICAgICAgICAgY29udGV4dC5saW5lVG8ocC54LCBwLnkpO1xuICAgICAgICAgICAgfSB3aGlsZSAocCAhPT0gcS5maXJzdFZlcnRleCk7XG5cbiAgICAgICAgICAgIGNvbnRleHQuc3Ryb2tlKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBlcWVxZXEgKi9cbmZ1bmN0aW9uIFNrZWxldG9uaXplcihzdGRsaWIsIGZvcmVpZ24sIGJ1ZmZlcikge1xuICAgIFwidXNlIGFzbVwiO1xuXG4gICAgdmFyIGltYWdlcyA9IG5ldyBzdGRsaWIuVWludDhBcnJheShidWZmZXIpLFxuICAgICAgICBzaXplID0gZm9yZWlnbi5zaXplIHwgMCxcbiAgICAgICAgaW11bCA9IHN0ZGxpYi5NYXRoLmltdWw7XG5cbiAgICBmdW5jdGlvbiBlcm9kZShpbkltYWdlUHRyLCBvdXRJbWFnZVB0cikge1xuICAgICAgICBpbkltYWdlUHRyID0gaW5JbWFnZVB0ciB8IDA7XG4gICAgICAgIG91dEltYWdlUHRyID0gb3V0SW1hZ2VQdHIgfCAwO1xuXG4gICAgICAgIHZhciB2ID0gMCxcbiAgICAgICAgICAgIHUgPSAwLFxuICAgICAgICAgICAgc3VtID0gMCxcbiAgICAgICAgICAgIHlTdGFydDEgPSAwLFxuICAgICAgICAgICAgeVN0YXJ0MiA9IDAsXG4gICAgICAgICAgICB4U3RhcnQxID0gMCxcbiAgICAgICAgICAgIHhTdGFydDIgPSAwLFxuICAgICAgICAgICAgb2Zmc2V0ID0gMDtcblxuICAgICAgICBmb3IgKHYgPSAxOyAodiB8IDApIDwgKChzaXplIC0gMSkgfCAwKTsgdiA9ICh2ICsgMSkgfCAwKSB7XG4gICAgICAgICAgICBvZmZzZXQgPSAob2Zmc2V0ICsgc2l6ZSkgfCAwO1xuICAgICAgICAgICAgZm9yICh1ID0gMTsgKHUgfCAwKSA8ICgoc2l6ZSAtIDEpIHwgMCk7IHUgPSAodSArIDEpIHwgMCkge1xuICAgICAgICAgICAgICAgIHlTdGFydDEgPSAob2Zmc2V0IC0gc2l6ZSkgfCAwO1xuICAgICAgICAgICAgICAgIHlTdGFydDIgPSAob2Zmc2V0ICsgc2l6ZSkgfCAwO1xuICAgICAgICAgICAgICAgIHhTdGFydDEgPSAodSAtIDEpIHwgMDtcbiAgICAgICAgICAgICAgICB4U3RhcnQyID0gKHUgKyAxKSB8IDA7XG4gICAgICAgICAgICAgICAgc3VtID0gKChpbWFnZXNbKGluSW1hZ2VQdHIgKyB5U3RhcnQxICsgeFN0YXJ0MSkgfCAwXSB8IDApXG4gICAgICAgICAgICAgICAgICAgICsgKGltYWdlc1soaW5JbWFnZVB0ciArIHlTdGFydDEgKyB4U3RhcnQyKSB8IDBdIHwgMClcbiAgICAgICAgICAgICAgICAgICAgKyAoaW1hZ2VzWyhpbkltYWdlUHRyICsgb2Zmc2V0ICsgdSkgfCAwXSB8IDApXG4gICAgICAgICAgICAgICAgICAgICsgKGltYWdlc1soaW5JbWFnZVB0ciArIHlTdGFydDIgKyB4U3RhcnQxKSB8IDBdIHwgMClcbiAgICAgICAgICAgICAgICAgICAgKyAoaW1hZ2VzWyhpbkltYWdlUHRyICsgeVN0YXJ0MiArIHhTdGFydDIpIHwgMF0gfCAwKSkgfCAwO1xuICAgICAgICAgICAgICAgIGlmICgoc3VtIHwgMCkgPT0gKDUgfCAwKSkge1xuICAgICAgICAgICAgICAgICAgICBpbWFnZXNbKG91dEltYWdlUHRyICsgb2Zmc2V0ICsgdSkgfCAwXSA9IDE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VzWyhvdXRJbWFnZVB0ciArIG9mZnNldCArIHUpIHwgMF0gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3VidHJhY3QoYUltYWdlUHRyLCBiSW1hZ2VQdHIsIG91dEltYWdlUHRyKSB7XG4gICAgICAgIGFJbWFnZVB0ciA9IGFJbWFnZVB0ciB8IDA7XG4gICAgICAgIGJJbWFnZVB0ciA9IGJJbWFnZVB0ciB8IDA7XG4gICAgICAgIG91dEltYWdlUHRyID0gb3V0SW1hZ2VQdHIgfCAwO1xuXG4gICAgICAgIHZhciBsZW5ndGggPSAwO1xuXG4gICAgICAgIGxlbmd0aCA9IGltdWwoc2l6ZSwgc2l6ZSkgfCAwO1xuXG4gICAgICAgIHdoaWxlICgobGVuZ3RoIHwgMCkgPiAwKSB7XG4gICAgICAgICAgICBsZW5ndGggPSAobGVuZ3RoIC0gMSkgfCAwO1xuICAgICAgICAgICAgaW1hZ2VzWyhvdXRJbWFnZVB0ciArIGxlbmd0aCkgfCAwXSA9XG4gICAgICAgICAgICAgICAgKChpbWFnZXNbKGFJbWFnZVB0ciArIGxlbmd0aCkgfCAwXSB8IDApIC0gKGltYWdlc1soYkltYWdlUHRyICsgbGVuZ3RoKSB8IDBdIHwgMCkpIHwgMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGJpdHdpc2VPcihhSW1hZ2VQdHIsIGJJbWFnZVB0ciwgb3V0SW1hZ2VQdHIpIHtcbiAgICAgICAgYUltYWdlUHRyID0gYUltYWdlUHRyIHwgMDtcbiAgICAgICAgYkltYWdlUHRyID0gYkltYWdlUHRyIHwgMDtcbiAgICAgICAgb3V0SW1hZ2VQdHIgPSBvdXRJbWFnZVB0ciB8IDA7XG5cbiAgICAgICAgdmFyIGxlbmd0aCA9IDA7XG5cbiAgICAgICAgbGVuZ3RoID0gaW11bChzaXplLCBzaXplKSB8IDA7XG5cbiAgICAgICAgd2hpbGUgKChsZW5ndGggfCAwKSA+IDApIHtcbiAgICAgICAgICAgIGxlbmd0aCA9IChsZW5ndGggLSAxKSB8IDA7XG4gICAgICAgICAgICBpbWFnZXNbKG91dEltYWdlUHRyICsgbGVuZ3RoKSB8IDBdID1cbiAgICAgICAgICAgICAgICAoKGltYWdlc1soYUltYWdlUHRyICsgbGVuZ3RoKSB8IDBdIHwgMCkgfCAoaW1hZ2VzWyhiSW1hZ2VQdHIgKyBsZW5ndGgpIHwgMF0gfCAwKSkgfCAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY291bnROb25aZXJvKGltYWdlUHRyKSB7XG4gICAgICAgIGltYWdlUHRyID0gaW1hZ2VQdHIgfCAwO1xuXG4gICAgICAgIHZhciBzdW0gPSAwLFxuICAgICAgICAgICAgbGVuZ3RoID0gMDtcblxuICAgICAgICBsZW5ndGggPSBpbXVsKHNpemUsIHNpemUpIHwgMDtcblxuICAgICAgICB3aGlsZSAoKGxlbmd0aCB8IDApID4gMCkge1xuICAgICAgICAgICAgbGVuZ3RoID0gKGxlbmd0aCAtIDEpIHwgMDtcbiAgICAgICAgICAgIHN1bSA9ICgoc3VtIHwgMCkgKyAoaW1hZ2VzWyhpbWFnZVB0ciArIGxlbmd0aCkgfCAwXSB8IDApKSB8IDA7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKHN1bSB8IDApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluaXQoaW1hZ2VQdHIsIHZhbHVlKSB7XG4gICAgICAgIGltYWdlUHRyID0gaW1hZ2VQdHIgfCAwO1xuICAgICAgICB2YWx1ZSA9IHZhbHVlIHwgMDtcblxuICAgICAgICB2YXIgbGVuZ3RoID0gMDtcblxuICAgICAgICBsZW5ndGggPSBpbXVsKHNpemUsIHNpemUpIHwgMDtcblxuICAgICAgICB3aGlsZSAoKGxlbmd0aCB8IDApID4gMCkge1xuICAgICAgICAgICAgbGVuZ3RoID0gKGxlbmd0aCAtIDEpIHwgMDtcbiAgICAgICAgICAgIGltYWdlc1soaW1hZ2VQdHIgKyBsZW5ndGgpIHwgMF0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpbGF0ZShpbkltYWdlUHRyLCBvdXRJbWFnZVB0cikge1xuICAgICAgICBpbkltYWdlUHRyID0gaW5JbWFnZVB0ciB8IDA7XG4gICAgICAgIG91dEltYWdlUHRyID0gb3V0SW1hZ2VQdHIgfCAwO1xuXG4gICAgICAgIHZhciB2ID0gMCxcbiAgICAgICAgICAgIHUgPSAwLFxuICAgICAgICAgICAgc3VtID0gMCxcbiAgICAgICAgICAgIHlTdGFydDEgPSAwLFxuICAgICAgICAgICAgeVN0YXJ0MiA9IDAsXG4gICAgICAgICAgICB4U3RhcnQxID0gMCxcbiAgICAgICAgICAgIHhTdGFydDIgPSAwLFxuICAgICAgICAgICAgb2Zmc2V0ID0gMDtcblxuICAgICAgICBmb3IgKHYgPSAxOyAodiB8IDApIDwgKChzaXplIC0gMSkgfCAwKTsgdiA9ICh2ICsgMSkgfCAwKSB7XG4gICAgICAgICAgICBvZmZzZXQgPSAob2Zmc2V0ICsgc2l6ZSkgfCAwO1xuICAgICAgICAgICAgZm9yICh1ID0gMTsgKHUgfCAwKSA8ICgoc2l6ZSAtIDEpIHwgMCk7IHUgPSAodSArIDEpIHwgMCkge1xuICAgICAgICAgICAgICAgIHlTdGFydDEgPSAob2Zmc2V0IC0gc2l6ZSkgfCAwO1xuICAgICAgICAgICAgICAgIHlTdGFydDIgPSAob2Zmc2V0ICsgc2l6ZSkgfCAwO1xuICAgICAgICAgICAgICAgIHhTdGFydDEgPSAodSAtIDEpIHwgMDtcbiAgICAgICAgICAgICAgICB4U3RhcnQyID0gKHUgKyAxKSB8IDA7XG4gICAgICAgICAgICAgICAgc3VtID0gKChpbWFnZXNbKGluSW1hZ2VQdHIgKyB5U3RhcnQxICsgeFN0YXJ0MSkgfCAwXSB8IDApXG4gICAgICAgICAgICAgICAgICAgICsgKGltYWdlc1soaW5JbWFnZVB0ciArIHlTdGFydDEgKyB4U3RhcnQyKSB8IDBdIHwgMClcbiAgICAgICAgICAgICAgICAgICAgKyAoaW1hZ2VzWyhpbkltYWdlUHRyICsgb2Zmc2V0ICsgdSkgfCAwXSB8IDApXG4gICAgICAgICAgICAgICAgICAgICsgKGltYWdlc1soaW5JbWFnZVB0ciArIHlTdGFydDIgKyB4U3RhcnQxKSB8IDBdIHwgMClcbiAgICAgICAgICAgICAgICAgICAgKyAoaW1hZ2VzWyhpbkltYWdlUHRyICsgeVN0YXJ0MiArIHhTdGFydDIpIHwgMF0gfCAwKSkgfCAwO1xuICAgICAgICAgICAgICAgIGlmICgoc3VtIHwgMCkgPiAoMCB8IDApKSB7XG4gICAgICAgICAgICAgICAgICAgIGltYWdlc1sob3V0SW1hZ2VQdHIgKyBvZmZzZXQgKyB1KSB8IDBdID0gMTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpbWFnZXNbKG91dEltYWdlUHRyICsgb2Zmc2V0ICsgdSkgfCAwXSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtZW1jcHkoc3JjSW1hZ2VQdHIsIGRzdEltYWdlUHRyKSB7XG4gICAgICAgIHNyY0ltYWdlUHRyID0gc3JjSW1hZ2VQdHIgfCAwO1xuICAgICAgICBkc3RJbWFnZVB0ciA9IGRzdEltYWdlUHRyIHwgMDtcblxuICAgICAgICB2YXIgbGVuZ3RoID0gMDtcblxuICAgICAgICBsZW5ndGggPSBpbXVsKHNpemUsIHNpemUpIHwgMDtcblxuICAgICAgICB3aGlsZSAoKGxlbmd0aCB8IDApID4gMCkge1xuICAgICAgICAgICAgbGVuZ3RoID0gKGxlbmd0aCAtIDEpIHwgMDtcbiAgICAgICAgICAgIGltYWdlc1soZHN0SW1hZ2VQdHIgKyBsZW5ndGgpIHwgMF0gPSAoaW1hZ2VzWyhzcmNJbWFnZVB0ciArIGxlbmd0aCkgfCAwXSB8IDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gemVyb0JvcmRlcihpbWFnZVB0cikge1xuICAgICAgICBpbWFnZVB0ciA9IGltYWdlUHRyIHwgMDtcblxuICAgICAgICB2YXIgeCA9IDAsXG4gICAgICAgICAgICB5ID0gMDtcblxuICAgICAgICBmb3IgKHggPSAwOyAoeCB8IDApIDwgKChzaXplIC0gMSkgfCAwKTsgeCA9ICh4ICsgMSkgfCAwKSB7XG4gICAgICAgICAgICBpbWFnZXNbKGltYWdlUHRyICsgeCkgfCAwXSA9IDA7XG4gICAgICAgICAgICBpbWFnZXNbKGltYWdlUHRyICsgeSkgfCAwXSA9IDA7XG4gICAgICAgICAgICB5ID0gKCh5ICsgc2l6ZSkgLSAxKSB8IDA7XG4gICAgICAgICAgICBpbWFnZXNbKGltYWdlUHRyICsgeSkgfCAwXSA9IDA7XG4gICAgICAgICAgICB5ID0gKHkgKyAxKSB8IDA7XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh4ID0gMDsgKHggfCAwKSA8IChzaXplIHwgMCk7IHggPSAoeCArIDEpIHwgMCkge1xuICAgICAgICAgICAgaW1hZ2VzWyhpbWFnZVB0ciArIHkpIHwgMF0gPSAwO1xuICAgICAgICAgICAgeSA9ICh5ICsgMSkgfCAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2tlbGV0b25pemUoKSB7XG4gICAgICAgIHZhciBzdWJJbWFnZVB0ciA9IDAsXG4gICAgICAgICAgICBlcm9kZWRJbWFnZVB0ciA9IDAsXG4gICAgICAgICAgICB0ZW1wSW1hZ2VQdHIgPSAwLFxuICAgICAgICAgICAgc2tlbEltYWdlUHRyID0gMCxcbiAgICAgICAgICAgIHN1bSA9IDAsXG4gICAgICAgICAgICBkb25lID0gMDtcblxuICAgICAgICBlcm9kZWRJbWFnZVB0ciA9IGltdWwoc2l6ZSwgc2l6ZSkgfCAwO1xuICAgICAgICB0ZW1wSW1hZ2VQdHIgPSAoZXJvZGVkSW1hZ2VQdHIgKyBlcm9kZWRJbWFnZVB0cikgfCAwO1xuICAgICAgICBza2VsSW1hZ2VQdHIgPSAodGVtcEltYWdlUHRyICsgZXJvZGVkSW1hZ2VQdHIpIHwgMDtcblxuICAgICAgICAvLyBpbml0IHNrZWwtaW1hZ2VcbiAgICAgICAgaW5pdChza2VsSW1hZ2VQdHIsIDApO1xuICAgICAgICB6ZXJvQm9yZGVyKHN1YkltYWdlUHRyKTtcblxuICAgICAgICBkbyB7XG4gICAgICAgICAgICBlcm9kZShzdWJJbWFnZVB0ciwgZXJvZGVkSW1hZ2VQdHIpO1xuICAgICAgICAgICAgZGlsYXRlKGVyb2RlZEltYWdlUHRyLCB0ZW1wSW1hZ2VQdHIpO1xuICAgICAgICAgICAgc3VidHJhY3Qoc3ViSW1hZ2VQdHIsIHRlbXBJbWFnZVB0ciwgdGVtcEltYWdlUHRyKTtcbiAgICAgICAgICAgIGJpdHdpc2VPcihza2VsSW1hZ2VQdHIsIHRlbXBJbWFnZVB0ciwgc2tlbEltYWdlUHRyKTtcbiAgICAgICAgICAgIG1lbWNweShlcm9kZWRJbWFnZVB0ciwgc3ViSW1hZ2VQdHIpO1xuICAgICAgICAgICAgc3VtID0gY291bnROb25aZXJvKHN1YkltYWdlUHRyKSB8IDA7XG4gICAgICAgICAgICBkb25lID0gKChzdW0gfCAwKSA9PSAwIHwgMCk7XG4gICAgICAgIH0gd2hpbGUgKCFkb25lKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBza2VsZXRvbml6ZTogc2tlbGV0b25pemVcbiAgICB9O1xufVxuZXhwb3J0IGRlZmF1bHQgU2tlbGV0b25pemVyO1xuLyogZXNsaW50LWVuYWJsZSBlcWVxZXEgKi9cbiIsImltcG9ydCB7IEltYWdlV3JhcHBlciB9IGZyb20gXCIuLi9jb21tb24vaW1hZ2Utd3JhcHBlclwiO1xuXG4vKipcbiAqIEBib3Jyb3dzIGh0dHA6Ly93d3cuY29kZXByb2plY3QuY29tL1RpcHMvNDA3MTcyL0Nvbm5lY3RlZC1Db21wb25lbnQtTGFiZWxpbmctYW5kLVZlY3Rvcml6YXRpb25cbiAqL1xuXG50eXBlIERpcmVjdGlvbiA9IG51bWJlcjtcblxuZXhwb3J0IGNvbnN0IFNlYXJjaERpcmVjdGlvbnM6IEFycmF5PEFycmF5PERpcmVjdGlvbj4+ID0gW1swLCAxXSwgWzEsIDFdLCBbMSwgMF0sIFsxLCAtMV0sIFswLCAtMV0sIFstMSwgLTFdLCBbLTEsIDBdLCBbLTEsIDFdXTtcblxuZXhwb3J0IGludGVyZmFjZSBDb250b3VyVmVydGV4IHtcbiAgICB4OiBudW1iZXIsXG4gICAgeTogbnVtYmVyLFxuICAgIGRpcjogRGlyZWN0aW9uLFxuICAgIG5leHQ6IENvbnRvdXJWZXJ0ZXgsXG4gICAgcHJldjogQ29udG91clZlcnRleFxufVxuXG5pbnRlcmZhY2UgQ3VycmVudCB7XG4gICAgY3g6IG51bWJlcixcbiAgICBjeTogbnVtYmVyLFxuICAgIGRpcjogRGlyZWN0aW9uXG59XG5cbmV4cG9ydCBjbGFzcyBUcmFjZXIge1xuICAgIHByaXZhdGUgX2ltYWdlRGF0YTogVWludDhBcnJheTtcbiAgICBwcml2YXRlIF9sYWJlbERhdGE6IEFycmF5PG51bWJlcj47XG4gICAgcHJpdmF0ZSBfd2lkdGg6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGltYWdlV3JhcHBlcjogSW1hZ2VXcmFwcGVyLCBsYWJlbFdyYXBwZXI6IEltYWdlV3JhcHBlcjxBcnJheTxudW1iZXI+Pikge1xuICAgICAgICB0aGlzLl9pbWFnZURhdGEgPSBpbWFnZVdyYXBwZXIuZGF0YTtcbiAgICAgICAgdGhpcy5fbGFiZWxEYXRhID0gbGFiZWxXcmFwcGVyLmRhdGEgYXMgQXJyYXk8bnVtYmVyPjtcbiAgICAgICAgdGhpcy5fd2lkdGggPSBpbWFnZVdyYXBwZXIuc2l6ZS54O1xuICAgIH1cblxuICAgIHRyYWNlKGN1cnJlbnQ6IEN1cnJlbnQsIGNvbG9yOiBudW1iZXIsIGxhYmVsOiBudW1iZXIsIGVkZ2VMYWJlbDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCB5ID0gY3VycmVudC5jeSArIFNlYXJjaERpcmVjdGlvbnNbY3VycmVudC5kaXJdWzBdIHwgMDtcbiAgICAgICAgICAgIGNvbnN0IHggPSBjdXJyZW50LmN4ICsgU2VhcmNoRGlyZWN0aW9uc1tjdXJyZW50LmRpcl1bMV0gfCAwO1xuICAgICAgICAgICAgY29uc3QgcG9zID0geSAqIHRoaXMuX3dpZHRoICsgeCB8IDA7XG5cbiAgICAgICAgICAgIGlmICgodGhpcy5faW1hZ2VEYXRhW3Bvc10gPT09IGNvbG9yKSAmJiAoKHRoaXMuX2xhYmVsRGF0YVtwb3NdID09PSAwKSB8fCAodGhpcy5fbGFiZWxEYXRhW3Bvc10gPT09IGxhYmVsKSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9sYWJlbERhdGFbcG9zXSA9IGxhYmVsO1xuICAgICAgICAgICAgICAgIGN1cnJlbnQuY3ggPSB4O1xuICAgICAgICAgICAgICAgIGN1cnJlbnQuY3kgPSB5O1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9sYWJlbERhdGFbcG9zXSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9sYWJlbERhdGFbcG9zXSA9IGVkZ2VMYWJlbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY3VycmVudC5kaXIgPSAoY3VycmVudC5kaXIgKyAxKSAlIDg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29udG91clRyYWNpbmcoc3k6IG51bWJlciwgc3g6IG51bWJlciwgbGFiZWw6IG51bWJlciwgY29sb3I6IG51bWJlciwgZWRnZUxhYmVsOiBudW1iZXIpOiBDb250b3VyVmVydGV4IHtcbiAgICAgICAgbGV0IEZ2OiBDb250b3VyVmVydGV4ID0gbnVsbDtcbiAgICAgICAgY29uc3QgY3VycmVudDogQ3VycmVudCA9IHtcbiAgICAgICAgICAgIGN4OiBzeCxcbiAgICAgICAgICAgIGN5OiBzeSxcbiAgICAgICAgICAgIGRpcjogMFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmICh0aGlzLnRyYWNlKGN1cnJlbnQsIGNvbG9yLCBsYWJlbCwgZWRnZUxhYmVsKSkge1xuICAgICAgICAgICAgRnYgPSB7XG4gICAgICAgICAgICAgICAgeDogc3gsXG4gICAgICAgICAgICAgICAgeTogc3ksXG4gICAgICAgICAgICAgICAgZGlyOiBjdXJyZW50LmRpcixcbiAgICAgICAgICAgICAgICBuZXh0OiBudWxsLFxuICAgICAgICAgICAgICAgIHByZXY6IG51bGxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBsZXQgQ3YgPSBGdjtcbiAgICAgICAgICAgIGxldCBsZGlyID0gY3VycmVudC5kaXI7XG4gICAgICAgICAgICBsZXQgUCA9IHtcbiAgICAgICAgICAgICAgICB4OiBjdXJyZW50LmN4LFxuICAgICAgICAgICAgICAgIHk6IGN1cnJlbnQuY3ksXG4gICAgICAgICAgICAgICAgZGlyOiAwLFxuICAgICAgICAgICAgICAgIG5leHQ6IG51bGwsXG4gICAgICAgICAgICAgICAgcHJldjogQ3ZcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBDdi5uZXh0ID0gUDtcbiAgICAgICAgICAgIEN2ID0gUDtcblxuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgIGN1cnJlbnQuZGlyID0gKGN1cnJlbnQuZGlyICsgNikgJSA4O1xuXG4gICAgICAgICAgICAgICAgdGhpcy50cmFjZShjdXJyZW50LCBjb2xvciwgbGFiZWwsIGVkZ2VMYWJlbCk7XG5cbiAgICAgICAgICAgICAgICBpZiAobGRpciAhPT0gY3VycmVudC5kaXIpIHtcbiAgICAgICAgICAgICAgICAgICAgQ3YuZGlyID0gY3VycmVudC5kaXI7XG4gICAgICAgICAgICAgICAgICAgIFAgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBjdXJyZW50LmN4LFxuICAgICAgICAgICAgICAgICAgICAgICAgeTogY3VycmVudC5jeSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcjogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHQ6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2OiBDdlxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBDdi5uZXh0ID0gUDtcbiAgICAgICAgICAgICAgICAgICAgQ3YgPSBQO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIEN2LmRpciA9IGxkaXI7XG4gICAgICAgICAgICAgICAgICAgIEN2LnggPSBjdXJyZW50LmN4O1xuICAgICAgICAgICAgICAgICAgICBDdi55ID0gY3VycmVudC5jeTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBsZGlyID0gY3VycmVudC5kaXI7XG4gICAgICAgICAgICB9IHdoaWxlIChjdXJyZW50LmN4ICE9PSBzeCB8fCBjdXJyZW50LmN5ICE9PSBzeSk7XG5cbiAgICAgICAgICAgIEZ2LnByZXYgPSBDdi5wcmV2O1xuICAgICAgICAgICAgQ3YucHJldi5uZXh0ID0gRnY7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEZ2O1xuICAgIH1cbn1cbiIsImltcG9ydCBfcG9seWZpbGxzIGZyb20gJy4vY29tbW9uL3BvbHlmaWxscyc7XG5pbXBvcnQgeyBSZXN1bHRDb2xsZWN0b3IgfSBmcm9tICcuL2FuYWx5dGljcy9yZXN1bHQtY29sbGVjdG9yJztcbmltcG9ydCB7IEJveCB9IGZyb20gJy4vY29tbW9uL2JveCc7XG5pbXBvcnQgeyBFdmVudENhbGxiYWNrLCBFdmVudHMsIEV2ZW50U3Vic2NyaXB0aW9uIH0gZnJvbSAnLi9jb21tb24vZXZlbnRzJztcbmltcG9ydCB7IEltYWdlRGVidWcgfSBmcm9tICcuL2NvbW1vbi9pbWFnZS1kZWJ1Zyc7XG5pbXBvcnQgeyBJbWFnZVdyYXBwZXIgfSBmcm9tICcuL2NvbW1vbi9pbWFnZS13cmFwcGVyJztcbmltcG9ydCB7IG1lcmdlIH0gZnJvbSAnLi9jb21tb24vbWVyZ2UnO1xuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuL2NvbW1vbi9wb2ludCc7XG5pbXBvcnQgeyBjb25maWcgYXMgZGVmYXVsdENvbmZpZywgUXVhZ2dhQ29uZmlnIH0gZnJvbSAnLi9jb25maWcvY29uZmlnJztcbmltcG9ydCB7IEJhcmNvZGVEZWNvZGVyLCBRdWFnZ2FCYXJjb2RlIH0gZnJvbSAnLi9kZWNvZGVyL2JhcmNvZGUtZGVjb2Rlcic7XG5pbXBvcnQgeyBDYW1lcmFBY2Nlc3MgfSBmcm9tICcuL2lucHV0L2NhbWVyYS1hY2Nlc3MnO1xuaW1wb3J0IHsgRnJhbWVHcmFiYmVyIH0gZnJvbSAnLi9pbnB1dC9mcmFtZS1ncmFiYmVyJztcbmltcG9ydCB7IEltYWdlU3RyZWFtIH0gZnJvbSAnLi9pbnB1dC9pbWFnZS1zdHJlYW0nO1xuaW1wb3J0IHsgSW5wdXRTdHJlYW0gfSBmcm9tICcuL2lucHV0L2lucHV0LXN0cmVhbSc7XG5pbXBvcnQgeyBMaXZlU3RyZWFtIH0gZnJvbSAnLi9pbnB1dC9saXZlLXN0cmVhbSc7XG5pbXBvcnQgeyBWaWRlb1N0cmVhbSB9IGZyb20gJy4vaW5wdXQvdmlkZW8tc3RyZWFtJztcbmltcG9ydCB7IGNoZWNrSW1hZ2VDb25zdHJhaW50cyB9IGZyb20gJy4vaW5wdXQvaW5wdXQtc3RyZWFtLXV0aWxzJztcbmltcG9ydCB7IEJhcmNvZGVMb2NhdG9yIH0gZnJvbSAnLi9sb2NhdG9yL2JhcmNvZGUtbG9jYXRvcic7XG5pbXBvcnQgeyBCYXJjb2RlUmVhZGVyRGVjbGFyYXRpb24gfSBmcm9tICcuL3JlYWRlci9iYXJjb2RlLXJlYWRlcic7XG5cbmludGVyZmFjZSBXb3JrZXJUaHJlYWQge1xuICAgIHdvcmtlcjogV29ya2VyO1xuICAgIGltYWdlRGF0YTogVWludDhBcnJheTtcbiAgICBidXN5OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFF1YWdnYUNhbnZhc0NvbnRhaW5lciB7XG4gICAgY3R4OiB7XG4gICAgICAgIGltYWdlOiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsXG4gICAgICAgIG92ZXJsYXk6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRFxuICAgIH0sXG4gICAgZG9tOiB7XG4gICAgICAgIGltYWdlOiBIVE1MQ2FudmFzRWxlbWVudCxcbiAgICAgICAgb3ZlcmxheTogSFRNTENhbnZhc0VsZW1lbnRcbiAgICB9XG59XG5cbmxldCBfaW5wdXRTdHJlYW06IElucHV0U3RyZWFtO1xubGV0IF9mcmFtZUdyYWJiZXI6IEZyYW1lR3JhYmJlcjtcbmxldCBfc3RvcHBlZDogYm9vbGVhbjtcbmNvbnN0IF9jYW52YXNDb250YWluZXI6IFF1YWdnYUNhbnZhc0NvbnRhaW5lciA9IHtcbiAgICBjdHg6IHtcbiAgICAgICAgaW1hZ2U6IG51bGwsXG4gICAgICAgIG92ZXJsYXk6IG51bGxcbiAgICB9LFxuICAgIGRvbToge1xuICAgICAgICBpbWFnZTogbnVsbCxcbiAgICAgICAgb3ZlcmxheTogbnVsbFxuICAgIH1cbn07XG5sZXQgX2lucHV0SW1hZ2VXcmFwcGVyOiBJbWFnZVdyYXBwZXI7XG5sZXQgX2xvY2F0b3I6IEJhcmNvZGVMb2NhdG9yO1xubGV0IF9ib3hTaXplOiBCb3g7XG5sZXQgX2RlY29kZXI6IEJhcmNvZGVEZWNvZGVyO1xubGV0IF93b3JrZXJQb29sID0gbmV3IEFycmF5PFdvcmtlclRocmVhZD4oKTtcbmxldCBfb25VSVRocmVhZDogYm9vbGVhbjtcbmxldCBfcmVzdWx0Q29sbGVjdG9yOiBSZXN1bHRDb2xsZWN0b3I7XG5sZXQgX2NvbmZpZzogUXVhZ2dhQ29uZmlnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgaW5pdChjb25maWc6IFF1YWdnYUNvbmZpZywgY2I6ICgpID0+IHZvaWQsIGltYWdlV3JhcHBlcj86IEltYWdlV3JhcHBlcikge1xuICAgICAgICBfb25VSVRocmVhZCA9IHRydWU7XG4gICAgICAgIF9jb25maWcgPSBtZXJnZShkZWZhdWx0Q29uZmlnLCBjb25maWcpO1xuICAgICAgICBpZiAoaW1hZ2VXcmFwcGVyKSB7XG4gICAgICAgICAgICBfb25VSVRocmVhZCA9IGZhbHNlO1xuICAgICAgICAgICAgX2luaXRpYWxpemVEYXRhKGltYWdlV3JhcHBlcik7XG4gICAgICAgICAgICBjYigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX2luaXRJbnB1dFN0cmVhbShjYik7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgQ2FtZXJhQWNjZXNzOiBDYW1lcmFBY2Nlc3MsXG5cbiAgICBJbWFnZURlYnVnOiBJbWFnZURlYnVnLFxuXG4gICAgSW1hZ2VXcmFwcGVyOiBJbWFnZVdyYXBwZXIsXG5cbiAgICBSZXN1bHRDb2xsZWN0b3I6IFJlc3VsdENvbGxlY3RvcixcblxuICAgIGdldCBjYW52YXMoKTogUXVhZ2dhQ2FudmFzQ29udGFpbmVyIHtcbiAgICAgICAgcmV0dXJuIF9jYW52YXNDb250YWluZXI7XG4gICAgfSxcblxuICAgIHN0YXJ0KCk6IHZvaWQge1xuICAgICAgICBpZiAoX29uVUlUaHJlYWQgJiYgX2NvbmZpZy5pbnB1dFN0cmVhbS50eXBlID09PSAnTGl2ZVN0cmVhbScpIHtcbiAgICAgICAgICAgIF9zdGFydENvbnRpbnVvdXNVcGRhdGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF91cGRhdGUoKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wKCk6IHZvaWQge1xuICAgICAgICBfc3RvcHBlZCA9IHRydWU7XG4gICAgICAgIF9hZGp1c3RXb3JrZXJQb29sKDApO1xuICAgICAgICBpZiAoX2NvbmZpZy5pbnB1dFN0cmVhbS50eXBlID09PSAnTGl2ZVN0cmVhbScpIHtcbiAgICAgICAgICAgIENhbWVyYUFjY2Vzcy5yZWxlYXNlKCk7XG4gICAgICAgICAgICBfaW5wdXRTdHJlYW0uY2xlYXJFdmVudEhhbmRsZXJzKCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgZGVjb2RlU2luZ2xlKGNvbmZpZzogUXVhZ2dhQ29uZmlnLCByZXN1bHRDYWxsYmFjazogKF86IFF1YWdnYUJhcmNvZGUpID0+IHZvaWQpOiB2b2lkIHtcbiAgICAgICAgY29uZmlnID0gbWVyZ2Uoe1xuICAgICAgICAgICAgaW5wdXRTdHJlYW06IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnSW1hZ2VTdHJlYW0nLFxuICAgICAgICAgICAgICAgIHNlcXVlbmNlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzaXplOiA4MDAsXG4gICAgICAgICAgICAgICAgc3JjOiBjb25maWcuc3JjXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbnVtT2ZXb3JrZXJzOiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBjb25maWcuZGVidWcpID8gMCA6IDEsXG4gICAgICAgICAgICBsb2NhdG9yOiB7XG4gICAgICAgICAgICAgICAgaGFsZlNhbXBsZTogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgY29uZmlnKTtcblxuICAgICAgICB0aGlzLmluaXQoY29uZmlnLCAoKSA9PiB7XG4gICAgICAgICAgICBFdmVudHMub25jZSgncHJvY2Vzc2VkJywgKHJlc3VsdDogUXVhZ2dhQmFyY29kZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICAgICAgICAgIHJlc3VsdENhbGxiYWNrLmNhbGwobnVsbCwgcmVzdWx0KTtcbiAgICAgICAgICAgIH0sIHRydWUpO1xuICAgICAgICAgICAgdGhpcy5zdGFydCgpO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgcGF1c2UoKTogdm9pZCB7XG4gICAgICAgIF9zdG9wcGVkID0gdHJ1ZTtcbiAgICB9LFxuXG4gICAgb25EZXRlY3RlZChjYWxsYmFjazogRXZlbnRTdWJzY3JpcHRpb24gfCBFdmVudENhbGxiYWNrKTogdm9pZCB7XG4gICAgICAgIEV2ZW50cy5zdWJzY3JpYmUoJ2RldGVjdGVkJywgY2FsbGJhY2spO1xuICAgIH0sXG5cbiAgICBvZmZEZXRlY3RlZChjYWxsYmFjazogRXZlbnRDYWxsYmFjayk6IHZvaWQge1xuICAgICAgICBFdmVudHMudW5zdWJzY3JpYmUoJ2RldGVjdGVkJywgY2FsbGJhY2spO1xuICAgIH0sXG5cbiAgICBvblByb2Nlc3NlZChjYWxsYmFjazogRXZlbnRTdWJzY3JpcHRpb24gfCBFdmVudENhbGxiYWNrKTogdm9pZCB7XG4gICAgICAgIEV2ZW50cy5zdWJzY3JpYmUoJ3Byb2Nlc3NlZCcsIGNhbGxiYWNrKTtcbiAgICB9LFxuXG4gICAgb2ZmUHJvY2Vzc2VkKGNhbGxiYWNrOiBFdmVudENhbGxiYWNrKTogdm9pZCB7XG4gICAgICAgIEV2ZW50cy51bnN1YnNjcmliZSgncHJvY2Vzc2VkJywgY2FsbGJhY2spO1xuICAgIH0sXG5cbiAgICBzZXRSZWFkZXJzKHJlYWRlcnM6IEFycmF5PEJhcmNvZGVSZWFkZXJEZWNsYXJhdGlvbj4pOiB2b2lkIHtcbiAgICAgICAgaWYgKF9kZWNvZGVyKSB7XG4gICAgICAgICAgICBfZGVjb2Rlci5zZXRSZWFkZXJzKHJlYWRlcnMpO1xuICAgICAgICB9IGVsc2UgaWYgKF9vblVJVGhyZWFkICYmIF93b3JrZXJQb29sLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIF93b3JrZXJQb29sLmZvckVhY2goKHsgd29ya2VyIH0pID0+IHdvcmtlci5wb3N0TWVzc2FnZSh7IGNtZDogJ3NldFJlYWRlcnMnLCByZWFkZXJzIH0pKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICByZWdpc3RlclJlc3VsdENvbGxlY3RvcihyZXN1bHRDb2xsZWN0b3I6IFJlc3VsdENvbGxlY3Rvcik6IHZvaWQge1xuICAgICAgICBpZiAocmVzdWx0Q29sbGVjdG9yICYmIHR5cGVvZiByZXN1bHRDb2xsZWN0b3IuYWRkUmVzdWx0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBfcmVzdWx0Q29sbGVjdG9yID0gcmVzdWx0Q29sbGVjdG9yO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuZnVuY3Rpb24gX2luaXRpYWxpemVEYXRhKGltYWdlV3JhcHBlcj86IEltYWdlV3JhcHBlcik6IHZvaWQge1xuICAgIF9pbml0QnVmZmVycyhpbWFnZVdyYXBwZXIpO1xuICAgIF9kZWNvZGVyID0gbmV3IEJhcmNvZGVEZWNvZGVyKF9jb25maWcuZGVjb2RlciwgX2lucHV0SW1hZ2VXcmFwcGVyKTtcbn1cblxuZnVuY3Rpb24gX2luaXRJbnB1dFN0cmVhbShjYWxsYmFjazogKGVycj86IGFueSkgPT4gdm9pZCk6IHZvaWQge1xuICAgIGxldCB2aWRlbzogSFRNTFZpZGVvRWxlbWVudDtcbiAgICBpZiAoX2NvbmZpZy5pbnB1dFN0cmVhbS50eXBlID09PSAnVmlkZW9TdHJlYW0nKSB7XG4gICAgICAgIHZpZGVvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndmlkZW8nKTtcbiAgICAgICAgX2lucHV0U3RyZWFtID0gbmV3IFZpZGVvU3RyZWFtKHZpZGVvKTtcbiAgICB9IGVsc2UgaWYgKF9jb25maWcuaW5wdXRTdHJlYW0udHlwZSA9PT0gJ0ltYWdlU3RyZWFtJykge1xuICAgICAgICBfaW5wdXRTdHJlYW0gPSBuZXcgSW1hZ2VTdHJlYW0oKTtcbiAgICB9IGVsc2UgaWYgKF9jb25maWcuaW5wdXRTdHJlYW0udHlwZSA9PT0gJ0xpdmVTdHJlYW0nKSB7XG4gICAgICAgIGNvbnN0IHZpZXdwb3J0ID0gX2dldFZpZXdQb3J0KCk7XG4gICAgICAgIGlmICh2aWV3cG9ydCkge1xuICAgICAgICAgICAgdmlkZW8gPSB2aWV3cG9ydC5xdWVyeVNlbGVjdG9yKCd2aWRlbycpO1xuICAgICAgICAgICAgaWYgKCF2aWRlbykge1xuICAgICAgICAgICAgICAgIHZpZGVvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndmlkZW8nKTtcbiAgICAgICAgICAgICAgICB2aWV3cG9ydC5hcHBlbmRDaGlsZCh2aWRlbyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgX2lucHV0U3RyZWFtID0gbmV3IExpdmVTdHJlYW0odmlkZW8pO1xuICAgICAgICBDYW1lcmFBY2Nlc3MucmVxdWVzdCh2aWRlbywgX2NvbmZpZy5pbnB1dFN0cmVhbS5jb25zdHJhaW50cylcbiAgICAgICAgICAgIC50aGVuKCgpID0+IF9pbnB1dFN0cmVhbS50cmlnZ2VyKCdjYW5yZWNvcmQnKSwgZXJyID0+IGNhbGxiYWNrKGVycikpO1xuICAgIH1cblxuICAgIF9pbnB1dFN0cmVhbS5zZXRBdHRyaWJ1dGUoJ3ByZWxvYWQnLCAnYXV0bycpO1xuICAgIF9pbnB1dFN0cmVhbS5jb25maWcgPSBfY29uZmlnLmlucHV0U3RyZWFtO1xuICAgIF9pbnB1dFN0cmVhbS5hZGRFdmVudExpc3RlbmVyKCdjYW5yZWNvcmQnLCBfY2FuUmVjb3JkLmJpbmQodGhpcywgY2FsbGJhY2spKTtcbn1cblxuZnVuY3Rpb24gX2dldFZpZXdQb3J0KCk6IEhUTUxFbGVtZW50IHtcbiAgICBjb25zdCB0YXJnZXQgPSBfY29uZmlnLmlucHV0U3RyZWFtLnRhcmdldDtcbiAgICAvLyBDaGVjayBpZiB0YXJnZXQgaXMgYWxyZWFkeSBhIERPTSBlbGVtZW50XG4gICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVXNlICcjaW50ZXJhY3RpdmUudmlld3BvcnQnIGFzIGEgZmFsbGJhY2sgc2VsZWN0b3IgKGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5KVxuICAgICAgICBjb25zdCBzZWxlY3RvciA9IHR5cGVvZiB0YXJnZXQgPT09ICdzdHJpbmcnID8gdGFyZ2V0IDogJyNpbnRlcmFjdGl2ZS52aWV3cG9ydCc7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIF9jYW5SZWNvcmQoY2I6ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICBjaGVja0ltYWdlQ29uc3RyYWludHMoX2lucHV0U3RyZWFtLCBfY29uZmlnLmxvY2F0b3IpO1xuICAgIF9pbml0Q2FudmFzKCk7XG4gICAgX2ZyYW1lR3JhYmJlciA9IG5ldyBGcmFtZUdyYWJiZXIoX2lucHV0U3RyZWFtLCBfY2FudmFzQ29udGFpbmVyLmRvbS5pbWFnZSk7XG5cbiAgICBfYWRqdXN0V29ya2VyUG9vbChfY29uZmlnLm51bU9mV29ya2VycywgKCkgPT4ge1xuICAgICAgICBpZiAoX2NvbmZpZy5udW1PZldvcmtlcnMgPT09IDApIHtcbiAgICAgICAgICAgIF9pbml0aWFsaXplRGF0YSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgX2lucHV0U3RyZWFtLnBsYXkoKTtcbiAgICAgICAgY2IoKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gX2luaXRDYW52YXMoKTogdm9pZCB7XG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc3Qgdmlld3BvcnQgPSBfZ2V0Vmlld1BvcnQoKTtcbiAgICAgICAgX2NhbnZhc0NvbnRhaW5lci5kb20uaW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjYW52YXMuaW1nQnVmZmVyJyk7XG4gICAgICAgIGlmICghX2NhbnZhc0NvbnRhaW5lci5kb20uaW1hZ2UpIHtcbiAgICAgICAgICAgIF9jYW52YXNDb250YWluZXIuZG9tLmltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgICAgICBfY2FudmFzQ29udGFpbmVyLmRvbS5pbWFnZS5jbGFzc05hbWUgPSAnaW1nQnVmZmVyJztcbiAgICAgICAgICAgIGlmICh2aWV3cG9ydCAmJiBfY29uZmlnLmlucHV0U3RyZWFtLnR5cGUgPT09ICdJbWFnZVN0cmVhbScpIHtcbiAgICAgICAgICAgICAgICB2aWV3cG9ydC5hcHBlbmRDaGlsZChfY2FudmFzQ29udGFpbmVyLmRvbS5pbWFnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgX2NhbnZhc0NvbnRhaW5lci5jdHguaW1hZ2UgPSBfY2FudmFzQ29udGFpbmVyLmRvbS5pbWFnZS5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICBfY2FudmFzQ29udGFpbmVyLmRvbS5pbWFnZS53aWR0aCA9IF9pbnB1dFN0cmVhbS5jYW52YXNXaWR0aDtcbiAgICAgICAgX2NhbnZhc0NvbnRhaW5lci5kb20uaW1hZ2UuaGVpZ2h0ID0gX2lucHV0U3RyZWFtLmNhbnZhc0hlaWdodDtcblxuICAgICAgICBfY2FudmFzQ29udGFpbmVyLmRvbS5vdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FudmFzLmRyYXdpbmdCdWZmZXInKTtcbiAgICAgICAgaWYgKCFfY2FudmFzQ29udGFpbmVyLmRvbS5vdmVybGF5KSB7XG4gICAgICAgICAgICBfY2FudmFzQ29udGFpbmVyLmRvbS5vdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgICAgICBfY2FudmFzQ29udGFpbmVyLmRvbS5vdmVybGF5LmNsYXNzTmFtZSA9ICdkcmF3aW5nQnVmZmVyJztcbiAgICAgICAgICAgIGlmICh2aWV3cG9ydCkge1xuICAgICAgICAgICAgICAgIHZpZXdwb3J0LmFwcGVuZENoaWxkKF9jYW52YXNDb250YWluZXIuZG9tLm92ZXJsYXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgY2xlYXJGaXggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuICAgICAgICAgICAgY2xlYXJGaXguc2V0QXR0cmlidXRlKCdjbGVhcicsICdhbGwnKTtcbiAgICAgICAgICAgIGlmICh2aWV3cG9ydCkge1xuICAgICAgICAgICAgICAgIHZpZXdwb3J0LmFwcGVuZENoaWxkKGNsZWFyRml4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBfY2FudmFzQ29udGFpbmVyLmN0eC5vdmVybGF5ID0gX2NhbnZhc0NvbnRhaW5lci5kb20ub3ZlcmxheS5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICBfY2FudmFzQ29udGFpbmVyLmRvbS5vdmVybGF5LndpZHRoID0gX2lucHV0U3RyZWFtLmNhbnZhc1dpZHRoO1xuICAgICAgICBfY2FudmFzQ29udGFpbmVyLmRvbS5vdmVybGF5LmhlaWdodCA9IF9pbnB1dFN0cmVhbS5jYW52YXNIZWlnaHQ7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBfaW5pdEJ1ZmZlcnMoaW1hZ2VXcmFwcGVyPzogSW1hZ2VXcmFwcGVyKTogdm9pZCB7XG4gICAgaWYgKGltYWdlV3JhcHBlcikge1xuICAgICAgICBfaW5wdXRJbWFnZVdyYXBwZXIgPSBpbWFnZVdyYXBwZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgX2lucHV0SW1hZ2VXcmFwcGVyID0gbmV3IEltYWdlV3JhcHBlcih7XG4gICAgICAgICAgICB4OiBfaW5wdXRTdHJlYW0ud2lkdGgsXG4gICAgICAgICAgICB5OiBfaW5wdXRTdHJlYW0uaGVpZ2h0XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKF9pbnB1dEltYWdlV3JhcHBlci5zaXplKTtcbiAgICB9XG4gICAgX2JveFNpemUgPSBbXG4gICAgICAgIHsgeDogMCwgeTogMCB9LFxuICAgICAgICB7IHg6IDAsIHk6IF9pbnB1dEltYWdlV3JhcHBlci5zaXplLnkgfSxcbiAgICAgICAgeyB4OiBfaW5wdXRJbWFnZVdyYXBwZXIuc2l6ZS54LCB5OiBfaW5wdXRJbWFnZVdyYXBwZXIuc2l6ZS55IH0sXG4gICAgICAgIHsgeDogX2lucHV0SW1hZ2VXcmFwcGVyLnNpemUueCwgeTogMCB9XG4gICAgXTtcbiAgICBfbG9jYXRvciA9IG5ldyBCYXJjb2RlTG9jYXRvcihfaW5wdXRJbWFnZVdyYXBwZXIsIF9jb25maWcubG9jYXRvcik7XG59XG5cbmZ1bmN0aW9uIF9nZXRCb3VuZGluZ0JveGVzKCk6IEFycmF5PEJveD4ge1xuICAgIGlmIChfY29uZmlnLmxvY2F0ZSkge1xuICAgICAgICByZXR1cm4gX2xvY2F0b3IubG9jYXRlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFtbXG4gICAgICAgICAgICBfYm94U2l6ZVswXSxcbiAgICAgICAgICAgIF9ib3hTaXplWzFdLFxuICAgICAgICAgICAgX2JveFNpemVbMl0sXG4gICAgICAgICAgICBfYm94U2l6ZVszXVxuICAgICAgICBdXTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIF90cmFuc2Zvcm0ocG9seWdvbjogUmVhZG9ubHlBcnJheTxQb2ludD4sIG9mZnNldDogUG9pbnQpOiB2b2lkIHtcbiAgICBwb2x5Z29uLmZvckVhY2godmVydGV4ID0+IHtcbiAgICAgICAgdmVydGV4LnggKz0gb2Zmc2V0Lng7XG4gICAgICAgIHZlcnRleC55ICs9IG9mZnNldC55O1xuICAgIH0pXG59XG5cbmZ1bmN0aW9uIF90cmFuc2Zvcm1SZXN1bHQocmVzdWx0OiBRdWFnZ2FCYXJjb2RlLCBvZmZzZXQ6IFBvaW50KTogdm9pZCB7XG4gICAgaWYgKHJlc3VsdC5iYXJjb2Rlcykge1xuICAgICAgICByZXN1bHQuYmFyY29kZXMuZm9yRWFjaChiYXJjb2RlID0+IF90cmFuc2Zvcm1SZXN1bHQoYmFyY29kZSwgb2Zmc2V0KSk7XG4gICAgfVxuXG4gICAgaWYgKHJlc3VsdC5saW5lKSB7XG4gICAgICAgIF90cmFuc2Zvcm0ocmVzdWx0LmxpbmUsIG9mZnNldCk7XG4gICAgfVxuXG4gICAgaWYgKHJlc3VsdC5ib3gpIHtcbiAgICAgICAgX3RyYW5zZm9ybShyZXN1bHQuYm94LCBvZmZzZXQpO1xuICAgIH1cblxuICAgIGlmIChyZXN1bHQuYm94ZXMpIHtcbiAgICAgICAgcmVzdWx0LmJveGVzLmZvckVhY2goYm94ID0+IF90cmFuc2Zvcm0oYm94LCBvZmZzZXQpKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIF9hZGRSZXN1bHQocmVzdWx0OiBRdWFnZ2FCYXJjb2RlLCBpbWFnZURhdGE6IFVpbnQ4QXJyYXksIGNhbnZhc1dpZHRoOiBudW1iZXIsIGNhbnZhc0hlaWdodDogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKGltYWdlRGF0YSAmJiBfcmVzdWx0Q29sbGVjdG9yKSB7XG4gICAgICAgIGlmIChyZXN1bHQuYmFyY29kZXMpIHtcbiAgICAgICAgICAgIHJlc3VsdC5iYXJjb2Rlcy5mb3JFYWNoKCh7IGNvZGVSZXN1bHQgfSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjb2RlUmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIF9yZXN1bHRDb2xsZWN0b3IuYWRkUmVzdWx0KGltYWdlRGF0YSwgY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCwgY29kZVJlc3VsdClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuY29kZVJlc3VsdCkge1xuICAgICAgICAgICAgX3Jlc3VsdENvbGxlY3Rvci5hZGRSZXN1bHQoaW1hZ2VEYXRhLCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0LCByZXN1bHQuY29kZVJlc3VsdCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIF9oYXNDb2RlUmVzdWx0KHJlc3VsdDogUXVhZ2dhQmFyY29kZSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiByZXN1bHQgJiYgKCEhcmVzdWx0LmNvZGVSZXN1bHQgfHwgcmVzdWx0LmJhcmNvZGVzICYmIHJlc3VsdC5iYXJjb2Rlcy5zb21lKGJhcmNvZGUgPT4gISFiYXJjb2RlLmNvZGVSZXN1bHQpKTtcbn1cblxuZnVuY3Rpb24gX3B1Ymxpc2hSZXN1bHQocmVzdWx0PzogUXVhZ2dhQmFyY29kZSwgaW1hZ2VEYXRhPzogVWludDhBcnJheSk6IHZvaWQge1xuICAgIGxldCByZXN1bHRUb1B1Ymxpc2g6IFF1YWdnYUJhcmNvZGUgfCBBcnJheTxRdWFnZ2FCYXJjb2RlPiA9IHJlc3VsdDtcblxuICAgIGlmIChyZXN1bHQgJiYgX29uVUlUaHJlYWQpIHtcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gX2lucHV0U3RyZWFtLnRvcExlZnQ7XG5cbiAgICAgICAgaWYgKG9mZnNldC54ICE9PSAwIHx8IG9mZnNldC55ICE9PSAwKSB7XG4gICAgICAgICAgICBfdHJhbnNmb3JtUmVzdWx0KHJlc3VsdCwgb2Zmc2V0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIF9hZGRSZXN1bHQocmVzdWx0LCBpbWFnZURhdGEsIF9pbnB1dFN0cmVhbS5jYW52YXNXaWR0aCwgX2lucHV0U3RyZWFtLmNhbnZhc0hlaWdodCk7XG4gICAgICAgIHJlc3VsdFRvUHVibGlzaCA9IHJlc3VsdC5iYXJjb2RlcyB8fCByZXN1bHQ7XG4gICAgfVxuXG4gICAgRXZlbnRzLnB1Ymxpc2goJ3Byb2Nlc3NlZCcsIHJlc3VsdFRvUHVibGlzaCk7XG4gICAgaWYgKF9oYXNDb2RlUmVzdWx0KHJlc3VsdCkpIHtcbiAgICAgICAgRXZlbnRzLnB1Ymxpc2goJ2RldGVjdGVkJywgcmVzdWx0VG9QdWJsaXNoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIF9sb2NhdGVBbmREZWNvZGUoKTogdm9pZCB7XG4gICAgY29uc3QgYm94ZXMgPSBfZ2V0Qm91bmRpbmdCb3hlcygpO1xuXG4gICAgaWYgKGJveGVzKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IF9kZWNvZGVyLmRlY29kZUZyb21Cb3VuZGluZ0JveGVzKGJveGVzKSB8fCB7fTtcbiAgICAgICAgcmVzdWx0LmJveGVzID0gYm94ZXM7XG4gICAgICAgIF9wdWJsaXNoUmVzdWx0KHJlc3VsdCwgX2lucHV0SW1hZ2VXcmFwcGVyLmRhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIF9wdWJsaXNoUmVzdWx0KCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBfdXBkYXRlKCk6IHZvaWQge1xuICAgIGxldCBhdmFpbGFibGVXb3JrZXI6IFdvcmtlclRocmVhZDtcblxuICAgIGlmIChfb25VSVRocmVhZCkge1xuICAgICAgICBpZiAoX3dvcmtlclBvb2wubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgYXZhaWxhYmxlV29ya2VyID0gX3dvcmtlclBvb2wuZmluZCh3b3JrZXJUaHJlYWQgPT4gIXdvcmtlclRocmVhZC5idXN5KTtcbiAgICAgICAgICAgIGlmIChhdmFpbGFibGVXb3JrZXIpIHtcbiAgICAgICAgICAgICAgICBfZnJhbWVHcmFiYmVyLmF0dGFjaERhdGEoYXZhaWxhYmxlV29ya2VyLmltYWdlRGF0YSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybjsgLy8gYWxsIHdvcmtlcnMgYXJlIGJ1c3lcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF9mcmFtZUdyYWJiZXIuYXR0YWNoRGF0YShfaW5wdXRJbWFnZVdyYXBwZXIuZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF9mcmFtZUdyYWJiZXIuZ3JhYigpKSB7XG4gICAgICAgICAgICBpZiAoYXZhaWxhYmxlV29ya2VyKSB7XG4gICAgICAgICAgICAgICAgYXZhaWxhYmxlV29ya2VyLmJ1c3kgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGF2YWlsYWJsZVdvcmtlci53b3JrZXIucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgICAgICBjbWQ6ICdwcm9jZXNzJyxcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VEYXRhOiBhdmFpbGFibGVXb3JrZXIuaW1hZ2VEYXRhXG4gICAgICAgICAgICAgICAgfSwgW2F2YWlsYWJsZVdvcmtlci5pbWFnZURhdGEuYnVmZmVyXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF9sb2NhdGVBbmREZWNvZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIF9sb2NhdGVBbmREZWNvZGUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIF9zdGFydENvbnRpbnVvdXNVcGRhdGUoKTogdm9pZCB7XG4gICAgY29uc3QgZGVsYXkgPSAxMDAwIC8gKF9jb25maWcuZnJlcXVlbmN5IHx8IDYwKTtcbiAgICBsZXQgbmV4dCA9IG51bGw7XG4gICAgX3N0b3BwZWQgPSBmYWxzZTtcblxuICAgIChmdW5jdGlvbiBmcmFtZSh0aW1lc3RhbXApOiB2b2lkIHtcbiAgICAgICAgbmV4dCA9IG5leHQgfHwgdGltZXN0YW1wO1xuICAgICAgICBpZiAoIV9zdG9wcGVkKSB7XG4gICAgICAgICAgICBpZiAodGltZXN0YW1wID49IG5leHQpIHtcbiAgICAgICAgICAgICAgICBuZXh0ICs9IGRlbGF5O1xuICAgICAgICAgICAgICAgIF91cGRhdGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnJhbWUpO1xuICAgICAgICB9XG4gICAgfShwZXJmb3JtYW5jZS5ub3coKSkpO1xufVxuXG5mdW5jdGlvbiBfaW5pdFdvcmtlcihjYjogKHdvcmtlclRocmVhZDogV29ya2VyVGhyZWFkKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgY29uc3QgYmxvYlVSTCA9IF9nZW5lcmF0ZVdvcmtlckJsb2IoKTtcbiAgICBjb25zdCB3b3JrZXJUaHJlYWQgPSB7XG4gICAgICAgIHdvcmtlcjogbmV3IFdvcmtlcihibG9iVVJMKSxcbiAgICAgICAgaW1hZ2VEYXRhOiBuZXcgVWludDhBcnJheShfaW5wdXRTdHJlYW0ud2lkdGggKiBfaW5wdXRTdHJlYW0uaGVpZ2h0KSxcbiAgICAgICAgYnVzeTogdHJ1ZVxuICAgIH07XG5cbiAgICB3b3JrZXJUaHJlYWQud29ya2VyLm9ubWVzc2FnZSA9ICh7IGRhdGEgfSkgPT4ge1xuICAgICAgICBpZiAoZGF0YS5ldmVudCA9PT0gJ2luaXRpYWxpemVkJykge1xuICAgICAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTChibG9iVVJMKTtcbiAgICAgICAgICAgIHdvcmtlclRocmVhZC5idXN5ID0gZmFsc2U7XG4gICAgICAgICAgICB3b3JrZXJUaHJlYWQuaW1hZ2VEYXRhID0gbmV3IFVpbnQ4QXJyYXkoZGF0YS5pbWFnZURhdGEpO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnV29ya2VyIGluaXRpYWxpemVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYih3b3JrZXJUaHJlYWQpO1xuICAgICAgICB9IGVsc2UgaWYgKGRhdGEuZXZlbnQgPT09ICdwcm9jZXNzZWQnKSB7XG4gICAgICAgICAgICB3b3JrZXJUaHJlYWQuYnVzeSA9IGZhbHNlO1xuICAgICAgICAgICAgd29ya2VyVGhyZWFkLmltYWdlRGF0YSA9IG5ldyBVaW50OEFycmF5KGRhdGEuaW1hZ2VEYXRhKTtcbiAgICAgICAgICAgIF9wdWJsaXNoUmVzdWx0KGRhdGEucmVzdWx0LCB3b3JrZXJUaHJlYWQuaW1hZ2VEYXRhKTtcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhLmV2ZW50ID09PSAnZXJyb3InKSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdXb3JrZXIgZXJyb3I6JywgZGF0YS5tZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB3b3JrZXJUaHJlYWQud29ya2VyLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgY21kOiAnaW5pdCcsXG4gICAgICAgIHNpemU6IHsgeDogX2lucHV0U3RyZWFtLndpZHRoLCB5OiBfaW5wdXRTdHJlYW0uaGVpZ2h0IH0sXG4gICAgICAgIGltYWdlRGF0YTogd29ya2VyVGhyZWFkLmltYWdlRGF0YSxcbiAgICAgICAgY29uZmlnOiBtZXJnZShfY29uZmlnLCB7IGlucHV0U3RyZWFtOiB7IHRhcmdldDogbnVsbCB9IH0pXG4gICAgfSwgW3dvcmtlclRocmVhZC5pbWFnZURhdGEuYnVmZmVyXSk7XG59XG5cbmZ1bmN0aW9uIF93b3JrZXJJbnRlcmZhY2UoZmFjdG9yeTogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICBsZXQgUXVhZ2dhOiBhbnk7XG4gICAgY29uc3Qgd29ya2VyOiBhbnkgPSBzZWxmO1xuICAgIGxldCBpbWFnZVdyYXBwZXI6IEltYWdlV3JhcHBlcjtcblxuICAgIGlmIChmYWN0b3J5KSB7XG4gICAgICAgIFF1YWdnYSA9IGZhY3RvcnkoKS5kZWZhdWx0O1xuICAgICAgICBpZiAoIVF1YWdnYSkge1xuICAgICAgICAgICAgd29ya2VyLnBvc3RNZXNzYWdlKHsgZXZlbnQ6ICdlcnJvcicsIG1lc3NhZ2U6ICdRdWFnZ2EgY291bGQgbm90IGJlIGNyZWF0ZWQnIH0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2VsZi5vbm1lc3NhZ2UgPSAoeyBkYXRhIH0pID0+IHtcbiAgICAgICAgaWYgKGRhdGEuY21kID09PSAnaW5pdCcpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbmZpZzogUXVhZ2dhQ29uZmlnID0gZGF0YS5jb25maWc7XG4gICAgICAgICAgICBjb25maWcubnVtT2ZXb3JrZXJzID0gMDtcbiAgICAgICAgICAgIGltYWdlV3JhcHBlciA9IG5ldyBRdWFnZ2EuSW1hZ2VXcmFwcGVyKHsgeDogZGF0YS5zaXplLngsIHk6IGRhdGEuc2l6ZS55IH0sIG5ldyBVaW50OEFycmF5KGRhdGEuaW1hZ2VEYXRhKSk7XG4gICAgICAgICAgICBjb25zdCBpbWFnZURhdGEgPSBpbWFnZVdyYXBwZXIuZGF0YTtcbiAgICAgICAgICAgIFF1YWdnYS5pbml0KFxuICAgICAgICAgICAgICAgIGNvbmZpZyxcbiAgICAgICAgICAgICAgICAoKSA9PiB3b3JrZXIucG9zdE1lc3NhZ2UoeyBldmVudDogJ2luaXRpYWxpemVkJywgaW1hZ2VEYXRhIH0sIFtpbWFnZURhdGEuYnVmZmVyXSksXG4gICAgICAgICAgICAgICAgaW1hZ2VXcmFwcGVyXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgUXVhZ2dhLm9uUHJvY2Vzc2VkKChyZXN1bHQ6IFF1YWdnYUJhcmNvZGUpID0+XG4gICAgICAgICAgICAgICAgd29ya2VyLnBvc3RNZXNzYWdlKHsgZXZlbnQ6ICdwcm9jZXNzZWQnLCBpbWFnZURhdGEsIHJlc3VsdCB9LCBbaW1hZ2VEYXRhLmJ1ZmZlcl0pXG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2UgaWYgKGRhdGEuY21kID09PSAncHJvY2VzcycpIHtcbiAgICAgICAgICAgIGltYWdlV3JhcHBlci5kYXRhID0gbmV3IFVpbnQ4QXJyYXkoZGF0YS5pbWFnZURhdGEpO1xuICAgICAgICAgICAgUXVhZ2dhLnN0YXJ0KCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YS5jbWQgPT09ICdzZXRSZWFkZXJzJykge1xuICAgICAgICAgICAgUXVhZ2dhLnNldFJlYWRlcnMoZGF0YS5yZWFkZXJzKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmZ1bmN0aW9uIF9nZW5lcmF0ZVdvcmtlckJsb2IoKTogc3RyaW5nIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgbGV0IGZhY3RvcnlTb3VyY2U6IHN0cmluZyA9IF9fZmFjdG9yeVNvdXJjZV9fIHx8ICcnO1xuICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbYCgke193b3JrZXJJbnRlcmZhY2UudG9TdHJpbmcoKX0pKCR7ZmFjdG9yeVNvdXJjZX0pO2BdLCB7IHR5cGU6ICd0ZXh0L2phdmFzY3JpcHQnIH0pO1xuXG4gICAgcmV0dXJuIHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xufVxuXG5mdW5jdGlvbiBfYWRqdXN0V29ya2VyUG9vbChjYXBhY2l0eTogbnVtYmVyLCBjYj86ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICBjb25zdCBpbmNyZWFzZUJ5ID0gY2FwYWNpdHkgLSBfd29ya2VyUG9vbC5sZW5ndGg7XG4gICAgaWYgKGluY3JlYXNlQnkgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGNiICYmIGNiKCk7XG4gICAgfVxuICAgIGlmIChpbmNyZWFzZUJ5IDwgMCkge1xuICAgICAgICBfd29ya2VyUG9vbC5zbGljZShpbmNyZWFzZUJ5KS5mb3JFYWNoKCh7IHdvcmtlciB9KSA9PiB7XG4gICAgICAgICAgICB3b3JrZXIudGVybWluYXRlKCk7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdXb3JrZXIgdGVybWluYXRlZCEnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIF93b3JrZXJQb29sID0gX3dvcmtlclBvb2wuc2xpY2UoMCwgaW5jcmVhc2VCeSk7XG4gICAgICAgIHJldHVybiBjYiAmJiBjYigpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5jcmVhc2VCeTsgaSsrKSB7XG4gICAgICAgICAgICBfaW5pdFdvcmtlcih3b3JrZXJUaHJlYWQgPT4ge1xuICAgICAgICAgICAgICAgIF93b3JrZXJQb29sLnB1c2god29ya2VyVGhyZWFkKTtcbiAgICAgICAgICAgICAgICBpZiAoX3dvcmtlclBvb2wubGVuZ3RoID49IGNhcGFjaXR5ICYmIGNiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNiKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBCYXJjb2RlLCBCYXJjb2RlSW5mbywgQmFyY29kZVJlYWRlciwgQmFyY29kZVJlYWRlckNvbmZpZyB9IGZyb20gJy4vYmFyY29kZS1yZWFkZXInO1xuXG5jb25zdCBOID0gMTtcbmNvbnN0IFcgPSAzO1xuY29uc3QgU1RBUlRfUEFUVEVSTiA9IFtXLCBOLCBXLCBOLCBOLCBOXTtcbmNvbnN0IFNUT1BfUEFUVEVSTiA9IFtXLCBOLCBOLCBOLCBXXTtcbmNvbnN0IENPREVfUEFUVEVSTiA9IFtcbiAgICBbTiwgTiwgVywgVywgTl0sXG4gICAgW1csIE4sIE4sIE4sIFddLFxuICAgIFtOLCBXLCBOLCBOLCBXXSxcbiAgICBbVywgVywgTiwgTiwgTl0sXG4gICAgW04sIE4sIFcsIE4sIFddLFxuICAgIFtXLCBOLCBXLCBOLCBOXSxcbiAgICBbTiwgVywgVywgTiwgTl0sXG4gICAgW04sIE4sIE4sIFcsIFddLFxuICAgIFtXLCBOLCBOLCBXLCBOXSxcbiAgICBbTiwgVywgTiwgVywgTl1cbl07XG5jb25zdCBzdGFydFBhdHRlcm5MZW5ndGggPSBTVEFSVF9QQVRURVJOLnJlZHVjZSgoc3VtLCB2YWwpID0+IHN1bSArIHZhbCwgMCk7XG5cbmV4cG9ydCBjbGFzcyBUd29PZkZpdmVSZWFkZXIgZXh0ZW5kcyBCYXJjb2RlUmVhZGVyIHtcbiAgICBwcml2YXRlIF9iYXJTcGFjZVJhdGlvOiBbbnVtYmVyLCBudW1iZXJdO1xuXG4gICAgY29uc3RydWN0b3IoY29uZmlnPzogQmFyY29kZVJlYWRlckNvbmZpZykge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuXG4gICAgICAgIHRoaXMuX2JhclNwYWNlUmF0aW8gPSBbMSwgMV07XG4gICAgICAgIHRoaXMuX2Zvcm1hdCA9ICcyb2Y1JztcbiAgICAgICAgdGhpcy5fc2luZ2xlQ29kZUVycm9yID0gMC43ODtcbiAgICAgICAgdGhpcy5fYXZlcmFnZUNvZGVFcnJvciA9IDAuMzA7XG4gICAgfVxuXG4gICAgZGVjb2RlKCk6IEJhcmNvZGUge1xuICAgICAgICBjb25zdCBzdGFydEluZm8gPSB0aGlzLl9maW5kU3RhcnQoKTtcblxuICAgICAgICBpZiAoIXN0YXJ0SW5mbykge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBlbmRJbmZvID0gdGhpcy5fZmluZEVuZCgpO1xuXG4gICAgICAgIGlmICghZW5kSW5mbykge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjb3VudGVycyA9IHRoaXMuX2ZpbGxDb3VudGVycyhzdGFydEluZm8uZW5kLCBlbmRJbmZvLnN0YXJ0LCAwKTtcblxuICAgICAgICBpZiAoY291bnRlcnMubGVuZ3RoICUgMTAgIT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEFycmF5PG51bWJlcj4oKTtcbiAgICAgICAgY29uc3QgZGVjb2RlZENvZGVzID0gbmV3IEFycmF5PEJhcmNvZGVJbmZvPigpO1xuXG4gICAgICAgIGRlY29kZWRDb2Rlcy5wdXNoKHN0YXJ0SW5mbyk7XG5cbiAgICAgICAgY29uc3QgY29kZSA9IHRoaXMuX2RlY29kZVBheWxvYWQoY291bnRlcnMsIHJlc3VsdCwgZGVjb2RlZENvZGVzKTtcblxuICAgICAgICBpZiAoIWNvZGUgfHwgcmVzdWx0Lmxlbmd0aCA8IDUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVjb2RlZENvZGVzLnB1c2goZW5kSW5mbyk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvZGU6IHJlc3VsdC5qb2luKCcnKSxcbiAgICAgICAgICAgIHN0YXJ0OiBzdGFydEluZm8uc3RhcnQsXG4gICAgICAgICAgICBlbmQ6IGVuZEluZm8uZW5kLFxuICAgICAgICAgICAgc3RhcnRJbmZvLFxuICAgICAgICAgICAgZGVjb2RlZENvZGVzXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9maW5kU3RhcnQoKTogQmFyY29kZUluZm8ge1xuICAgICAgICBsZXQgb2Zmc2V0ID0gdGhpcy5fbmV4dFNldCh0aGlzLl9yb3cpO1xuICAgICAgICBsZXQgbmFycm93QmFyV2lkdGggPSAxO1xuICAgICAgICBsZXQgc3RhcnRJbmZvOiBCYXJjb2RlSW5mbztcblxuICAgICAgICB3aGlsZSAoIXN0YXJ0SW5mbykge1xuICAgICAgICAgICAgc3RhcnRJbmZvID0gdGhpcy5fZmluZFBhdHRlcm4oU1RBUlRfUEFUVEVSTiwgb2Zmc2V0LCAwLCB0cnVlKTtcblxuICAgICAgICAgICAgaWYgKCFzdGFydEluZm8pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbmFycm93QmFyV2lkdGggPSAoc3RhcnRJbmZvLmVuZCAtIHN0YXJ0SW5mby5zdGFydCkgLyBzdGFydFBhdHRlcm5MZW5ndGggfCAwO1xuICAgICAgICAgICAgY29uc3QgbGVhZGluZ1doaXRlc3BhY2VTdGFydCA9IHN0YXJ0SW5mby5zdGFydCAtIG5hcnJvd0JhcldpZHRoICogNTtcblxuICAgICAgICAgICAgaWYgKGxlYWRpbmdXaGl0ZXNwYWNlU3RhcnQgPj0gMCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9tYXRjaFJhbmdlKGxlYWRpbmdXaGl0ZXNwYWNlU3RhcnQsIHN0YXJ0SW5mby5zdGFydCwgMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0YXJ0SW5mbztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG9mZnNldCA9IHN0YXJ0SW5mby5lbmQ7XG4gICAgICAgICAgICBzdGFydEluZm8gPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF92ZXJpZnlUcmFpbGluZ1doaXRlc3BhY2UoZW5kSW5mbzogQmFyY29kZUluZm8pOiBCYXJjb2RlSW5mbyB7XG4gICAgICAgIGNvbnN0IHRyYWlsaW5nV2hpdGVzcGFjZUVuZCA9IGVuZEluZm8uZW5kICsgKGVuZEluZm8uZW5kIC0gZW5kSW5mby5zdGFydCkgLyAyO1xuXG4gICAgICAgIGlmICh0cmFpbGluZ1doaXRlc3BhY2VFbmQgPCB0aGlzLl9yb3cubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fbWF0Y2hSYW5nZShlbmRJbmZvLmVuZCwgdHJhaWxpbmdXaGl0ZXNwYWNlRW5kLCAwKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbmRJbmZvO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9maW5kRW5kKCk6IEJhcmNvZGVJbmZvIHtcbiAgICAgICAgdGhpcy5fcm93LnJldmVyc2UoKTtcblxuICAgICAgICBjb25zdCBvZmZzZXQgPSB0aGlzLl9uZXh0U2V0KHRoaXMuX3Jvdyk7XG4gICAgICAgIGNvbnN0IGVuZEluZm8gPSB0aGlzLl9maW5kUGF0dGVybihTVE9QX1BBVFRFUk4sIG9mZnNldCwgMCwgdHJ1ZSk7XG5cbiAgICAgICAgdGhpcy5fcm93LnJldmVyc2UoKTtcblxuICAgICAgICBpZiAoZW5kSW5mbyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvLyByZXZlcnNlIG51bWJlcnNcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBlbmRJbmZvLnN0YXJ0O1xuICAgICAgICBlbmRJbmZvLnN0YXJ0ID0gdGhpcy5fcm93Lmxlbmd0aCAtIGVuZEluZm8uZW5kO1xuICAgICAgICBlbmRJbmZvLmVuZCA9IHRoaXMuX3Jvdy5sZW5ndGggLSBzdGFydDtcblxuICAgICAgICByZXR1cm4gZW5kSW5mbyAhPT0gbnVsbCA/IHRoaXMuX3ZlcmlmeVRyYWlsaW5nV2hpdGVzcGFjZShlbmRJbmZvKSA6IG51bGw7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9kZWNvZGVDb2RlKGNvdW50ZXI6IFJlYWRvbmx5QXJyYXk8bnVtYmVyPik6IEJhcmNvZGVJbmZvIHtcbiAgICAgICAgY29uc3QgYmVzdE1hdGNoOiBCYXJjb2RlSW5mbyA9IHtcbiAgICAgICAgICAgIGVycm9yOiBOdW1iZXIuTUFYX1ZBTFVFLFxuICAgICAgICAgICAgY29kZTogLTEsXG4gICAgICAgICAgICBzdGFydDogMCxcbiAgICAgICAgICAgIGVuZDogMFxuICAgICAgICB9O1xuXG4gICAgICAgIGZvciAobGV0IGNvZGUgPSAwOyBjb2RlIDwgQ09ERV9QQVRURVJOLmxlbmd0aDsgY29kZSsrKSB7XG4gICAgICAgICAgICBjb25zdCBlcnJvciA9IHRoaXMuX21hdGNoUGF0dGVybihjb3VudGVyLCBDT0RFX1BBVFRFUk5bY29kZV0pO1xuICAgICAgICAgICAgaWYgKGVycm9yIDwgYmVzdE1hdGNoLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgYmVzdE1hdGNoLmNvZGUgPSBjb2RlO1xuICAgICAgICAgICAgICAgIGJlc3RNYXRjaC5lcnJvciA9IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGJlc3RNYXRjaC5lcnJvciA8IHRoaXMuQVZFUkFHRV9DT0RFX0VSUk9SID8gYmVzdE1hdGNoIDogbnVsbDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2RlY29kZVBheWxvYWQoY291bnRlcnM6IFJlYWRvbmx5QXJyYXk8bnVtYmVyPiwgcmVzdWx0OiBBcnJheTxudW1iZXI+LCBkZWNvZGVkQ29kZXM6IEFycmF5PEJhcmNvZGVJbmZvPik6IEJhcmNvZGVJbmZvIHtcbiAgICAgICAgY29uc3QgY291bnRlckxlbmd0aCA9IGNvdW50ZXJzLmxlbmd0aDtcbiAgICAgICAgY29uc3QgY291bnRlciA9IFswLCAwLCAwLCAwLCAwXTtcbiAgICAgICAgbGV0IHBvcyA9IDA7XG4gICAgICAgIGxldCBjb2RlOiBCYXJjb2RlSW5mbztcblxuICAgICAgICB3aGlsZSAocG9zIDwgY291bnRlckxlbmd0aCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb3VudGVyW2ldID0gY291bnRlcnNbcG9zXSAqIHRoaXMuX2JhclNwYWNlUmF0aW9bMF07XG4gICAgICAgICAgICAgICAgcG9zICs9IDI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvZGUgPSB0aGlzLl9kZWNvZGVDb2RlKGNvdW50ZXIpO1xuXG4gICAgICAgICAgICBpZiAoIWNvZGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVzdWx0LnB1c2goY29kZS5jb2RlKTtcbiAgICAgICAgICAgIGRlY29kZWRDb2Rlcy5wdXNoKGNvZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvZGU7XG4gICAgfVxufVxuIiwiZXhwb3J0IGVudW0gQmFyY29kZURpcmVjdGlvbiB7XG4gICAgRm9yd2FyZCA9IDEsXG4gICAgUmV2ZXJzZSA9IC0xXG59O1xuXG5leHBvcnQgdHlwZSBCYXJjb2RlRm9ybWF0ID0gc3RyaW5nO1xuXG5leHBvcnQgdHlwZSBCYXJjb2RlUmVhZGVyVHlwZSA9IHN0cmluZztcblxuZXhwb3J0IHR5cGUgQmFyY29kZVJlYWRlckRlY2xhcmF0aW9uID0gQmFyY29kZVJlYWRlclR5cGUgfCB7IGZvcm1hdDogQmFyY29kZVJlYWRlclR5cGU7IGNvbmZpZzogQmFyY29kZVJlYWRlckNvbmZpZzsgfTtcblxuZXhwb3J0IGludGVyZmFjZSBCYXJjb2RlUmVhZGVyQ29uZmlnIHtcbiAgICBub3JtYWxpemVCYXJTcGFjZVdpZHRoPzogYm9vbGVhbjtcbiAgICBzdXBwbGVtZW50cz86IEFycmF5PEJhcmNvZGVSZWFkZXJUeXBlPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCYXJjb2RlQ29ycmVjdGlvbiB7XG4gICAgYmFyOiBudW1iZXI7XG4gICAgc3BhY2U6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCYXJjb2RlSW5mbyB7XG4gICAgY29kZT86IG51bWJlcjtcbiAgICBjb3JyZWN0aW9uPzogQmFyY29kZUNvcnJlY3Rpb247XG4gICAgZW5kPzogbnVtYmVyO1xuICAgIGVuZENvdW50ZXI/OiBudW1iZXI7XG4gICAgZXJyb3I/OiBudW1iZXI7XG4gICAgc3RhcnQ/OiBudW1iZXI7XG4gICAgc3RhcnRDb3VudGVyPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJhcmNvZGUge1xuICAgIGNvZGU/OiBzdHJpbmc7XG4gICAgY29kZXNldD86IG51bWJlcjtcbiAgICBjb3JyZWN0aW9uPzogQmFyY29kZUNvcnJlY3Rpb247XG4gICAgZGVjb2RlZENvZGVzPzogQXJyYXk8c3RyaW5nIHwgQmFyY29kZUluZm8+O1xuICAgIGRpcmVjdGlvbj86IEJhcmNvZGVEaXJlY3Rpb247XG4gICAgZW5kPzogbnVtYmVyO1xuICAgIGVuZEluZm8/OiBCYXJjb2RlSW5mbztcbiAgICBmb3JtYXQ/OiBCYXJjb2RlRm9ybWF0O1xuICAgIHN0YXJ0PzogbnVtYmVyO1xuICAgIHN0YXJ0SW5mbz86IEJhcmNvZGVJbmZvO1xuICAgIHN1cHBsZW1lbnQ/OiBCYXJjb2RlO1xufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFyY29kZVJlYWRlciB7XG4gICAgcHJvdGVjdGVkIF9zaW5nbGVDb2RlRXJyb3I6IG51bWJlcjtcbiAgICBwcm90ZWN0ZWQgX2F2ZXJhZ2VDb2RlRXJyb3I6IG51bWJlcjtcbiAgICBwcm90ZWN0ZWQgX2Zvcm1hdDogQmFyY29kZUZvcm1hdDtcbiAgICBwcm90ZWN0ZWQgX3JvdzogQXJyYXk8bnVtYmVyPjtcblxuICAgIGNvbmZpZzogQmFyY29kZVJlYWRlckNvbmZpZztcbiAgICBzdXBwbGVtZW50czogQXJyYXk8QmFyY29kZVJlYWRlcj47XG5cbiAgICBzdGF0aWMgZ2V0IEV4Y2VwdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIFN0YXJ0Tm90Rm91bmRFeGNlcHRpb246ICdTdGFydC1JbmZvIHdhcyBub3QgZm91bmQhJyxcbiAgICAgICAgICAgIENvZGVOb3RGb3VuZEV4Y2VwdGlvbjogJ0NvZGUgY291bGQgbm90IGJlIGZvdW5kIScsXG4gICAgICAgICAgICBQYXR0ZXJuTm90Rm91bmRFeGNlcHRpb246ICdQYXR0ZXJuIGNvdWxkIG5vdCBiZSBmb3VuZCEnXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZ2V0IFNJTkdMRV9DT0RFX0VSUk9SKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zaW5nbGVDb2RlRXJyb3I7XG4gICAgfVxuXG4gICAgZ2V0IEFWRVJBR0VfQ09ERV9FUlJPUigpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fYXZlcmFnZUNvZGVFcnJvcjtcbiAgICB9XG5cbiAgICBnZXQgRk9STUFUKCk6IEJhcmNvZGVGb3JtYXQge1xuICAgICAgICByZXR1cm4gdGhpcy5fZm9ybWF0O1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZz86IEJhcmNvZGVSZWFkZXJDb25maWcsIHN1cHBsZW1lbnRzPzogQXJyYXk8QmFyY29kZVJlYWRlcj4pIHtcbiAgICAgICAgdGhpcy5fZm9ybWF0ID0gJ3Vua25vd24nO1xuICAgICAgICB0aGlzLl9yb3cgPSBbXTtcbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWcgfHwge307XG4gICAgICAgIHRoaXMuc3VwcGxlbWVudHMgPSBzdXBwbGVtZW50cztcbiAgICB9XG5cbiAgICBhYnN0cmFjdCBkZWNvZGUocm93PzogQXJyYXk8bnVtYmVyPiwgc3RhcnQ/OiBudW1iZXIpOiBCYXJjb2RlO1xuXG4gICAgcHJvdGVjdGVkIF9maW5kUGF0dGVybihwYXR0ZXJuOiBSZWFkb25seUFycmF5PG51bWJlcj4sIG9mZnNldDogbnVtYmVyLCBpc1doaXRlOiAwIHwgMSwgdHJ5SGFyZGVyOiBib29sZWFuKTogQmFyY29kZUluZm8ge1xuICAgICAgICBjb25zdCBjb3VudGVyID0gbmV3IEFycmF5PG51bWJlcj4ocGF0dGVybi5sZW5ndGgpO1xuICAgICAgICBjb25zdCBiZXN0TWF0Y2g6IEJhcmNvZGVJbmZvID0ge1xuICAgICAgICAgICAgZXJyb3I6IE51bWJlci5NQVhfVkFMVUUsXG4gICAgICAgICAgICBjb2RlOiAtMSxcbiAgICAgICAgICAgIHN0YXJ0OiAwLFxuICAgICAgICAgICAgZW5kOiAwXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGVwc2lsb24gPSB0aGlzLkFWRVJBR0VfQ09ERV9FUlJPUjtcbiAgICAgICAgbGV0IGNvdW50ZXJQb3MgPSAwO1xuXG4gICAgICAgIGlmICghb2Zmc2V0KSB7XG4gICAgICAgICAgICBvZmZzZXQgPSB0aGlzLl9uZXh0U2V0KHRoaXMuX3Jvdyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb3VudGVyLmZpbGwoMCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IG9mZnNldDsgaSA8IHRoaXMuX3Jvdy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3Jvd1tpXSBeIGlzV2hpdGUpIHtcbiAgICAgICAgICAgICAgICBjb3VudGVyW2NvdW50ZXJQb3NdKys7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChjb3VudGVyUG9zID09PSBjb3VudGVyLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXJyb3IgPSB0aGlzLl9tYXRjaFBhdHRlcm4oY291bnRlciwgcGF0dGVybik7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yIDwgZXBzaWxvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmVzdE1hdGNoLmVycm9yID0gZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICBiZXN0TWF0Y2guc3RhcnQgPSBpIC0gY291bnRlci5yZWR1Y2UoKHN1bSwgdmFsdWUpID0+IHN1bSArIHZhbHVlLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlc3RNYXRjaC5lbmQgPSBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJlc3RNYXRjaDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0cnlIYXJkZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY291bnRlci5sZW5ndGggLSAyOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVyW2pdID0gY291bnRlcltqICsgMl07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVyW2NvdW50ZXIubGVuZ3RoIC0gMl0gPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgY291bnRlcltjb3VudGVyLmxlbmd0aCAtIDFdID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ZXJQb3MtLTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnRlclBvcysrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb3VudGVyW2NvdW50ZXJQb3NdID0gMTtcbiAgICAgICAgICAgICAgICBpc1doaXRlID0gaXNXaGl0ZSA/IDAgOiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfbmV4dFVuc2V0KGxpbmU6IFJlYWRvbmx5QXJyYXk8bnVtYmVyPiwgc3RhcnQ/OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICBmb3IgKGxldCBpID0gc3RhcnQgfHwgMDsgaSA8IGxpbmUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICghbGluZVtpXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsaW5lLmxlbmd0aDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX25leHRTZXQobGluZTogUmVhZG9ubHlBcnJheTxudW1iZXI+LCBzdGFydD86IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIGZvciAobGV0IGkgPSBzdGFydCB8fCAwOyBpIDwgbGluZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGxpbmVbaV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGluZS5sZW5ndGg7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9tYXRjaFJhbmdlKHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyLCB2YWx1ZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIGZvciAobGV0IGkgPSBzdGFydCA8IDAgPyAwIDogc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3Jvd1tpXSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9tYXRjaFBhdHRlcm4oY291bnRlcjogUmVhZG9ubHlBcnJheTxudW1iZXI+LCBjb2RlOiBSZWFkb25seUFycmF5PG51bWJlcj4sIG1heFNpbmdsZUVycm9yPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgbGV0IGVycm9yID0gMDtcbiAgICAgICAgbGV0IHN1bSA9IDA7XG4gICAgICAgIGxldCBtb2R1bG8gPSAwO1xuXG4gICAgICAgIG1heFNpbmdsZUVycm9yID0gbWF4U2luZ2xlRXJyb3IgfHwgdGhpcy5TSU5HTEVfQ09ERV9FUlJPUiB8fCAxO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnRlci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgc3VtICs9IGNvdW50ZXJbaV07XG4gICAgICAgICAgICBtb2R1bG8gKz0gY29kZVtpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdW0gPCBtb2R1bG8pIHtcbiAgICAgICAgICAgIHJldHVybiBOdW1iZXIuTUFYX1ZBTFVFO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYmFyV2lkdGggPSBzdW0gLyBtb2R1bG87XG4gICAgICAgIG1heFNpbmdsZUVycm9yICo9IGJhcldpZHRoO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnRlci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY291bnQgPSBjb3VudGVyW2ldO1xuICAgICAgICAgICAgY29uc3Qgc2NhbGVkID0gY29kZVtpXSAqIGJhcldpZHRoO1xuICAgICAgICAgICAgY29uc3Qgc2luZ2xlRXJyb3IgPSBNYXRoLmFicyhjb3VudCAtIHNjYWxlZCkgLyBzY2FsZWQ7XG5cbiAgICAgICAgICAgIGlmIChzaW5nbGVFcnJvciA+IG1heFNpbmdsZUVycm9yKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE51bWJlci5NQVhfVkFMVUU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGVycm9yICs9IHNpbmdsZUVycm9yO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGVycm9yIC8gbW9kdWxvO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfY29ycmVjdEJhcnMoY291bnRlcjogQXJyYXk8bnVtYmVyPiwgY29ycmVjdGlvbjogbnVtYmVyLCBpbmRpY2VzOiBBcnJheTxudW1iZXI+KSB7XG4gICAgICAgIGxldCBsZW5ndGggPSBpbmRpY2VzLmxlbmd0aDtcbiAgICAgICAgbGV0IHRtcCA9IDA7XG5cbiAgICAgICAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgICAgICAgICB0bXAgPSBjb3VudGVyW2luZGljZXNbbGVuZ3RoXV0gKiAoMSAtICgoMSAtIGNvcnJlY3Rpb24pIC8gMikpO1xuICAgICAgICAgICAgaWYgKHRtcCA+IDEpIHtcbiAgICAgICAgICAgICAgICBjb3VudGVyW2luZGljZXNbbGVuZ3RoXV0gPSB0bXA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZWNvZGVQYXR0ZXJuKHBhdHRlcm46IEFycmF5PG51bWJlcj4pOiBCYXJjb2RlIHtcbiAgICAgICAgdGhpcy5fcm93ID0gcGF0dGVybjtcbiAgICAgICAgbGV0IHJlc3VsdCA9IHRoaXMuZGVjb2RlKCk7XG5cbiAgICAgICAgaWYgKHJlc3VsdCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5fcm93LnJldmVyc2UoKTtcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZGVjb2RlKCk7XG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmRpcmVjdGlvbiA9IEJhcmNvZGVEaXJlY3Rpb24uUmV2ZXJzZTtcbiAgICAgICAgICAgICAgICByZXN1bHQuc3RhcnQgPSB0aGlzLl9yb3cubGVuZ3RoIC0gcmVzdWx0LnN0YXJ0O1xuICAgICAgICAgICAgICAgIHJlc3VsdC5lbmQgPSB0aGlzLl9yb3cubGVuZ3RoIC0gcmVzdWx0LmVuZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdC5kaXJlY3Rpb24gPSBCYXJjb2RlRGlyZWN0aW9uLkZvcndhcmQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICByZXN1bHQuZm9ybWF0ID0gdGhpcy5GT1JNQVQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIF9maWxsQ291bnRlcnMob2Zmc2V0OiBudW1iZXIsIGVuZDogbnVtYmVyLCBpc1doaXRlOiAwIHwgMSk6IEFycmF5PG51bWJlcj4ge1xuICAgICAgICBjb25zdCBjb3VudGVycyA9IG5ldyBBcnJheTxudW1iZXI+KCk7XG4gICAgICAgIGxldCBjb3VudGVyUG9zID0gMDtcblxuICAgICAgICBjb3VudGVyc1tjb3VudGVyUG9zXSA9IDA7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IG9mZnNldDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fcm93W2ldIF4gaXNXaGl0ZSkge1xuICAgICAgICAgICAgICAgIGNvdW50ZXJzW2NvdW50ZXJQb3NdKys7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvdW50ZXJQb3MrKztcbiAgICAgICAgICAgICAgICBjb3VudGVyc1tjb3VudGVyUG9zXSA9IDE7XG4gICAgICAgICAgICAgICAgaXNXaGl0ZSA9IGlzV2hpdGUgPyAwIDogMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb3VudGVycztcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX3RvQ291bnRlcnMoc3RhcnQ6IG51bWJlciwgY291bnRlcnM6IFVpbnQxNkFycmF5KTogVWludDE2QXJyYXkge1xuICAgICAgICBjb25zdCBudW1Db3VudGVycyA9IGNvdW50ZXJzLmxlbmd0aDtcbiAgICAgICAgY29uc3QgZW5kID0gdGhpcy5fcm93Lmxlbmd0aDtcbiAgICAgICAgbGV0IGlzV2hpdGU6IDAgfCAxID0gdGhpcy5fcm93W3N0YXJ0XSA/IDAgOiAxO1xuICAgICAgICBsZXQgY291bnRlclBvcyA9IDA7XG5cbiAgICAgICAgY291bnRlcnMuZmlsbCgwKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3Jvd1tpXSBeIGlzV2hpdGUpIHtcbiAgICAgICAgICAgICAgICBjb3VudGVyc1tjb3VudGVyUG9zXSsrO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb3VudGVyUG9zKys7XG4gICAgICAgICAgICAgICAgaWYgKGNvdW50ZXJQb3MgPT09IG51bUNvdW50ZXJzKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXJzW2NvdW50ZXJQb3NdID0gMTtcbiAgICAgICAgICAgICAgICAgICAgaXNXaGl0ZSA9IGlzV2hpdGUgPyAwIDogMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY291bnRlcnM7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQmFyY29kZSwgQmFyY29kZUluZm8sIEJhcmNvZGVSZWFkZXIgfSBmcm9tICcuL2JhcmNvZGUtcmVhZGVyJztcblxuY29uc3QgQUxQSEFCRVRIX1NUUklORyA9ICcwMTIzNDU2Nzg5LSQ6Ly4rQUJDRCc7XG5jb25zdCBBTFBIQUJFVCA9IFsuLi5BTFBIQUJFVEhfU1RSSU5HXS5tYXAoY2hhciA9PiBjaGFyLmNoYXJDb2RlQXQoMCkpO1xuLy8gY29uc3QgQUxQSEFCRVQgPSBbNDgsIDQ5LCA1MCwgNTEsIDUyLCA1MywgNTQsIDU1LCA1NiwgNTcsIDQ1LCAzNiwgNTgsIDQ3LCA0NiwgNDMsIDY1LCA2NiwgNjcsIDY4XTtcbmNvbnN0IENIQVJBQ1RFUl9FTkNPRElOR1MgPSBbMHgwMDMsIDB4MDA2LCAweDAwOSwgMHgwNjAsIDB4MDEyLCAweDA0MiwgMHgwMjEsIDB4MDI0LCAweDAzMCwgMHgwNDgsIDB4MDBjLCAweDAxOCwgMHgwNDUsXG4gICAgMHgwNTEsIDB4MDU0LCAweDAxNSwgMHgwMUEsIDB4MDI5LCAweDAwQiwgMHgwMEVdO1xuY29uc3QgU1RBUlRfRU5EID0gWzB4MDFBLCAweDAyOSwgMHgwMEIsIDB4MDBFXTtcbmNvbnN0IE1JTl9FTkNPREVEX0NIQVJTID0gNDtcbmNvbnN0IE1BWF9BQ0NFUFRBQkxFID0gMi4wO1xuY29uc3QgUEFERElORyA9IDEuNTtcblxuaW50ZXJmYWNlIFRocmVzaG9sZCB7XG4gICAgc3BhY2U6IHtcbiAgICAgICAgbmFycm93OiB7XG4gICAgICAgICAgICBzaXplOiBudW1iZXI7XG4gICAgICAgICAgICBjb3VudHM6IG51bWJlcjtcbiAgICAgICAgICAgIG1pbjogbnVtYmVyO1xuICAgICAgICAgICAgbWF4OiBudW1iZXI7XG4gICAgICAgIH07XG4gICAgICAgIHdpZGU6IHtcbiAgICAgICAgICAgIHNpemU6IG51bWJlcjtcbiAgICAgICAgICAgIGNvdW50czogbnVtYmVyO1xuICAgICAgICAgICAgbWluOiBudW1iZXI7XG4gICAgICAgICAgICBtYXg6IG51bWJlcjtcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIGJhcjoge1xuICAgICAgICBuYXJyb3c6IHtcbiAgICAgICAgICAgIHNpemU6IG51bWJlcjtcbiAgICAgICAgICAgIGNvdW50czogbnVtYmVyO1xuICAgICAgICAgICAgbWluOiBudW1iZXI7XG4gICAgICAgICAgICBtYXg6IG51bWJlcjtcbiAgICAgICAgfTtcbiAgICAgICAgd2lkZToge1xuICAgICAgICAgICAgc2l6ZTogbnVtYmVyO1xuICAgICAgICAgICAgY291bnRzOiBudW1iZXI7XG4gICAgICAgICAgICBtaW46IG51bWJlcjtcbiAgICAgICAgICAgIG1heDogbnVtYmVyO1xuICAgICAgICB9O1xuICAgIH07XG59XG5cbmV4cG9ydCBjbGFzcyBDb2RhYmFyUmVhZGVyIGV4dGVuZHMgQmFyY29kZVJlYWRlciB7XG4gICAgcHJpdmF0ZSBfY291bnRlcnM6IEFycmF5PG51bWJlcj47XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLl9mb3JtYXQgPSAnY29kYWJhcic7XG4gICAgICAgIHRoaXMuX2NvdW50ZXJzID0gW107XG4gICAgfVxuXG4gICAgZGVjb2RlKCk6IEJhcmNvZGUge1xuICAgICAgICB0aGlzLl9jb3VudGVycyA9IHRoaXMuX2ZpbGxDb3VudGVycyh0aGlzLl9uZXh0VW5zZXQodGhpcy5fcm93KSwgdGhpcy5fcm93Lmxlbmd0aCwgMSk7XG5cbiAgICAgICAgY29uc3Qgc3RhcnQgPSB0aGlzLl9maW5kU3RhcnQoKTtcbiAgICAgICAgaWYgKCFzdGFydCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xuICAgICAgICBsZXQgbmV4dFN0YXJ0ID0gc3RhcnQuc3RhcnRDb3VudGVyO1xuICAgICAgICBsZXQgcGF0dGVybjogbnVtYmVyO1xuXG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIHBhdHRlcm4gPSB0aGlzLl90b1BhdHRlcm4obmV4dFN0YXJ0KTtcbiAgICAgICAgICAgIGlmIChwYXR0ZXJuIDwgMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZGVjb2RlZENoYXIgPSB0aGlzLl9wYXR0ZXJuVG9DaGFyKHBhdHRlcm4pO1xuICAgICAgICAgICAgaWYgKGRlY29kZWRDaGFyID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaChkZWNvZGVkQ2hhcik7XG4gICAgICAgICAgICBuZXh0U3RhcnQgKz0gODtcbiAgICAgICAgICAgIGlmIChyZXN1bHQubGVuZ3RoID4gMSAmJiBTVEFSVF9FTkQuc29tZShjb2RlID0+IGNvZGUgPT09IHBhdHRlcm4pKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gd2hpbGUgKG5leHRTdGFydCA8IHRoaXMuX2NvdW50ZXJzLmxlbmd0aCk7XG5cbiAgICAgICAgLy8gdmVyaWZ5IGVuZFxuICAgICAgICBpZiAoKHJlc3VsdC5sZW5ndGggLSAyKSA8IE1JTl9FTkNPREVEX0NIQVJTIHx8ICFTVEFSVF9FTkQuc29tZShjb2RlID0+IGNvZGUgPT09IHBhdHRlcm4pKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHZlcmlmeSBlbmQgd2hpdGUgc3BhY2VcbiAgICAgICAgaWYgKCF0aGlzLl92ZXJpZnlXaGl0ZXNwYWNlKHN0YXJ0LnN0YXJ0Q291bnRlciwgbmV4dFN0YXJ0IC0gOCkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLl92YWxpZGF0ZVJlc3VsdChyZXN1bHQsIHN0YXJ0LnN0YXJ0Q291bnRlcikpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgbmV4dFN0YXJ0ID0gbmV4dFN0YXJ0ID4gdGhpcy5fY291bnRlcnMubGVuZ3RoID8gdGhpcy5fY291bnRlcnMubGVuZ3RoIDogbmV4dFN0YXJ0O1xuICAgICAgICBjb25zdCBlbmQgPSBzdGFydC5zdGFydCArIHRoaXMuX3N1bUNvdW50ZXJzKHN0YXJ0LnN0YXJ0Q291bnRlciwgbmV4dFN0YXJ0IC0gOCk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvZGU6IHJlc3VsdC5qb2luKCcnKSxcbiAgICAgICAgICAgIHN0YXJ0OiBzdGFydC5zdGFydCxcbiAgICAgICAgICAgIGVuZCxcbiAgICAgICAgICAgIHN0YXJ0SW5mbzogc3RhcnQsXG4gICAgICAgICAgICBkZWNvZGVkQ29kZXM6IHJlc3VsdFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfdmVyaWZ5V2hpdGVzcGFjZShzdGFydENvdW50ZXI6IG51bWJlciwgZW5kQ291bnRlcjogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICgoc3RhcnRDb3VudGVyIC0gMSA8PSAwKVxuICAgICAgICAgICAgfHwgdGhpcy5fY291bnRlcnNbc3RhcnRDb3VudGVyIC0gMV0gPj0gKHRoaXMuX2NhbGN1bGF0ZVBhdHRlcm5MZW5ndGgoc3RhcnRDb3VudGVyKSAvIDIuMCkpIHtcbiAgICAgICAgICAgIGlmICgoZW5kQ291bnRlciArIDggPj0gdGhpcy5fY291bnRlcnMubGVuZ3RoKVxuICAgICAgICAgICAgICAgIHx8IHRoaXMuX2NvdW50ZXJzW2VuZENvdW50ZXIgKyA3XSA+PSAodGhpcy5fY2FsY3VsYXRlUGF0dGVybkxlbmd0aChlbmRDb3VudGVyKSAvIDIuMCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9jYWxjdWxhdGVQYXR0ZXJuTGVuZ3RoKG9mZnNldDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgbGV0IHN1bSA9IDA7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IG9mZnNldDsgaSA8IG9mZnNldCArIDc7IGkrKykge1xuICAgICAgICAgICAgc3VtICs9IHRoaXMuX2NvdW50ZXJzW2ldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1bTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF90aHJlc2hvbGRSZXN1bHRQYXR0ZXJuKHJlc3VsdDogUmVhZG9ubHlBcnJheTxzdHJpbmc+LCBzdGFydENvdW50ZXI6IG51bWJlcik6IFRocmVzaG9sZCB7XG4gICAgICAgIGNvbnN0IGNhdGVnb3JpemF0aW9uOiBUaHJlc2hvbGQgPSB7XG4gICAgICAgICAgICBzcGFjZToge1xuICAgICAgICAgICAgICAgIG5hcnJvdzogeyBzaXplOiAwLCBjb3VudHM6IDAsIG1pbjogMCwgbWF4OiBOdW1iZXIuTUFYX1ZBTFVFIH0sXG4gICAgICAgICAgICAgICAgd2lkZTogeyBzaXplOiAwLCBjb3VudHM6IDAsIG1pbjogMCwgbWF4OiBOdW1iZXIuTUFYX1ZBTFVFIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiYXI6IHtcbiAgICAgICAgICAgICAgICBuYXJyb3c6IHsgc2l6ZTogMCwgY291bnRzOiAwLCBtaW46IDAsIG1heDogTnVtYmVyLk1BWF9WQUxVRSB9LFxuICAgICAgICAgICAgICAgIHdpZGU6IHsgc2l6ZTogMCwgY291bnRzOiAwLCBtaW46IDAsIG1heDogTnVtYmVyLk1BWF9WQUxVRSB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGxldCBwb3MgPSBzdGFydENvdW50ZXI7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBwYXR0ZXJuID0gdGhpcy5fY2hhclRvUGF0dGVybihyZXN1bHRbaV0pO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gNjsgaiA+PSAwOyBqLS0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBraW5kID0gKGogJiAxKSA9PT0gMiA/IGNhdGVnb3JpemF0aW9uLmJhciA6IGNhdGVnb3JpemF0aW9uLnNwYWNlO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhdCA9IChwYXR0ZXJuICYgMSkgPT09IDEgPyBraW5kLndpZGUgOiBraW5kLm5hcnJvdztcbiAgICAgICAgICAgICAgICBjYXQuc2l6ZSArPSB0aGlzLl9jb3VudGVyc1twb3MgKyBqXTtcbiAgICAgICAgICAgICAgICBjYXQuY291bnRzKys7XG4gICAgICAgICAgICAgICAgcGF0dGVybiA+Pj0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBvcyArPSA4O1xuICAgICAgICB9XG5cbiAgICAgICAgWydzcGFjZScsICdiYXInXS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBjb25zdCBraW5kID0gY2F0ZWdvcml6YXRpb25ba2V5XTtcbiAgICAgICAgICAgIGtpbmQud2lkZS5taW4gPSBNYXRoLmZsb29yKChraW5kLm5hcnJvdy5zaXplIC8ga2luZC5uYXJyb3cuY291bnRzICsga2luZC53aWRlLnNpemUgLyBraW5kLndpZGUuY291bnRzKSAvIDIpO1xuICAgICAgICAgICAga2luZC5uYXJyb3cubWF4ID0gTWF0aC5jZWlsKGtpbmQud2lkZS5taW4pO1xuICAgICAgICAgICAga2luZC53aWRlLm1heCA9IE1hdGguY2VpbCgoa2luZC53aWRlLnNpemUgKiBNQVhfQUNDRVBUQUJMRSArIFBBRERJTkcpIC8ga2luZC53aWRlLmNvdW50cyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBjYXRlZ29yaXphdGlvbjtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9jaGFyVG9QYXR0ZXJuKGNoYXI6IHN0cmluZyk6IG51bWJlciB7XG4gICAgICAgIGNvbnN0IGNoYXJDb2RlID0gY2hhci5jaGFyQ29kZUF0KDApO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQUxQSEFCRVQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChBTFBIQUJFVFtpXSA9PT0gY2hhckNvZGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gQ0hBUkFDVEVSX0VOQ09ESU5HU1tpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAweDA7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfdmFsaWRhdGVSZXN1bHQocmVzdWx0OiBSZWFkb25seUFycmF5PHN0cmluZz4sIHN0YXJ0Q291bnRlcjogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IHRocmVzaG9sZCA9IHRoaXMuX3RocmVzaG9sZFJlc3VsdFBhdHRlcm4ocmVzdWx0LCBzdGFydENvdW50ZXIpO1xuICAgICAgICBsZXQgcG9zID0gc3RhcnRDb3VudGVyO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzdWx0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcGF0dGVybiA9IHRoaXMuX2NoYXJUb1BhdHRlcm4ocmVzdWx0W2ldKTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDY7IGogPj0gMDsgai0tKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qga2luZCA9IChqICYgMSkgPT09IDAgPyB0aHJlc2hvbGQuYmFyIDogdGhyZXNob2xkLnNwYWNlO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhdCA9IChwYXR0ZXJuICYgMSkgPT09IDEgPyBraW5kLndpZGUgOiBraW5kLm5hcnJvdztcbiAgICAgICAgICAgICAgICBjb25zdCBzaXplID0gdGhpcy5fY291bnRlcnNbcG9zICsgal07XG4gICAgICAgICAgICAgICAgaWYgKHNpemUgPCBjYXQubWluIHx8IHNpemUgPiBjYXQubWF4KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0dGVybiA+Pj0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBvcyArPSA4O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfcGF0dGVyblRvQ2hhcihwYXR0ZXJuOiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IENIQVJBQ1RFUl9FTkNPRElOR1MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChDSEFSQUNURVJfRU5DT0RJTkdTW2ldID09PSBwYXR0ZXJuKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoQUxQSEFCRVRbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfY29tcHV0ZUFsdGVybmF0aW5nVGhyZXNob2xkKG9mZnNldDogbnVtYmVyLCBlbmQ6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIGxldCBtaW4gPSBOdW1iZXIuTUFYX1ZBTFVFO1xuICAgICAgICBsZXQgbWF4ID0gMDtcblxuICAgICAgICBmb3IgKGxldCBpID0gb2Zmc2V0OyBpIDwgZW5kOyBpICs9IDIpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvdW50ZXIgPSB0aGlzLl9jb3VudGVyc1tpXTtcbiAgICAgICAgICAgIGlmIChjb3VudGVyID4gbWF4KSB7XG4gICAgICAgICAgICAgICAgbWF4ID0gY291bnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb3VudGVyIDwgbWluKSB7XG4gICAgICAgICAgICAgICAgbWluID0gY291bnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoKG1pbiArIG1heCkgLyAyLjApIHwgMDtcbiAgICB9XG5cbiAgICBwcml2YXRlIF90b1BhdHRlcm4ob2Zmc2V0OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICBjb25zdCBudW1Db3VudGVycyA9IDc7XG4gICAgICAgIGNvbnN0IGVuZCA9IG9mZnNldCArIG51bUNvdW50ZXJzO1xuXG4gICAgICAgIGlmIChlbmQgPiB0aGlzLl9jb3VudGVycy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGJhclRocmVzaG9sZCA9IHRoaXMuX2NvbXB1dGVBbHRlcm5hdGluZ1RocmVzaG9sZChvZmZzZXQsIGVuZCk7XG4gICAgICAgIGNvbnN0IHNwYWNlVGhyZXNob2xkID0gdGhpcy5fY29tcHV0ZUFsdGVybmF0aW5nVGhyZXNob2xkKG9mZnNldCArIDEsIGVuZCk7XG4gICAgICAgIGxldCBiaXRtYXNrID0gMSA8PCAobnVtQ291bnRlcnMgLSAxKTtcbiAgICAgICAgbGV0IHBhdHRlcm4gPSAwO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtQ291bnRlcnM7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgdGhyZXNob2xkID0gKGkgJiAxKSA9PT0gMCA/IGJhclRocmVzaG9sZCA6IHNwYWNlVGhyZXNob2xkO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2NvdW50ZXJzW29mZnNldCArIGldID4gdGhyZXNob2xkKSB7XG4gICAgICAgICAgICAgICAgcGF0dGVybiB8PSBiaXRtYXNrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYml0bWFzayA+Pj0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYXR0ZXJuO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3N1bUNvdW50ZXJzKHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgbGV0IHN1bSA9IDA7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcbiAgICAgICAgICAgIHN1bSArPSB0aGlzLl9jb3VudGVyc1tpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdW07XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9maW5kU3RhcnQoKTogQmFyY29kZUluZm8ge1xuICAgICAgICBsZXQgc3RhcnQgPSB0aGlzLl9uZXh0VW5zZXQodGhpcy5fcm93KTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRoaXMuX2NvdW50ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBwYXR0ZXJuID0gdGhpcy5fdG9QYXR0ZXJuKGkpO1xuICAgICAgICAgICAgaWYgKHBhdHRlcm4gIT09IC0xICYmIFNUQVJUX0VORC5zb21lKGNvZGUgPT4gY29kZSA9PT0gcGF0dGVybikpIHtcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBMb29rIGZvciB3aGl0ZXNwYWNlIGFoZWFkXG4gICAgICAgICAgICAgICAgc3RhcnQgKz0gdGhpcy5fc3VtQ291bnRlcnMoMCwgaSk7XG4gICAgICAgICAgICAgICAgY29uc3QgZW5kID0gc3RhcnQgKyB0aGlzLl9zdW1Db3VudGVycyhpLCBpICsgOCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQsXG4gICAgICAgICAgICAgICAgICAgIGVuZCxcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRDb3VudGVyOiBpLFxuICAgICAgICAgICAgICAgICAgICBlbmRDb3VudGVyOiBpICsgOFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBCYXJjb2RlLCBCYXJjb2RlQ29ycmVjdGlvbiwgQmFyY29kZUluZm8sIEJhcmNvZGVSZWFkZXIgfSBmcm9tICcuL2JhcmNvZGUtcmVhZGVyJztcblxuY29uc3QgQ09ERV9TSElGVCA9IDk4O1xuY29uc3QgQ09ERV9DID0gOTk7XG5jb25zdCBDT0RFX0IgPSAxMDA7XG5jb25zdCBDT0RFX0EgPSAxMDE7XG5jb25zdCBTVEFSVF9DT0RFX0EgPSAxMDM7XG5jb25zdCBTVEFSVF9DT0RFX0IgPSAxMDQ7XG5jb25zdCBTVEFSVF9DT0RFX0MgPSAxMDU7XG5jb25zdCBTVE9QX0NPREUgPSAxMDY7XG5jb25zdCBDT0RFX1BBVFRFUk4gPSBbXG4gICAgWzIsIDEsIDIsIDIsIDIsIDJdLFxuICAgIFsyLCAyLCAyLCAxLCAyLCAyXSxcbiAgICBbMiwgMiwgMiwgMiwgMiwgMV0sXG4gICAgWzEsIDIsIDEsIDIsIDIsIDNdLFxuICAgIFsxLCAyLCAxLCAzLCAyLCAyXSxcbiAgICBbMSwgMywgMSwgMiwgMiwgMl0sXG4gICAgWzEsIDIsIDIsIDIsIDEsIDNdLFxuICAgIFsxLCAyLCAyLCAzLCAxLCAyXSxcbiAgICBbMSwgMywgMiwgMiwgMSwgMl0sXG4gICAgWzIsIDIsIDEsIDIsIDEsIDNdLFxuICAgIFsyLCAyLCAxLCAzLCAxLCAyXSxcbiAgICBbMiwgMywgMSwgMiwgMSwgMl0sXG4gICAgWzEsIDEsIDIsIDIsIDMsIDJdLFxuICAgIFsxLCAyLCAyLCAxLCAzLCAyXSxcbiAgICBbMSwgMiwgMiwgMiwgMywgMV0sXG4gICAgWzEsIDEsIDMsIDIsIDIsIDJdLFxuICAgIFsxLCAyLCAzLCAxLCAyLCAyXSxcbiAgICBbMSwgMiwgMywgMiwgMiwgMV0sXG4gICAgWzIsIDIsIDMsIDIsIDEsIDFdLFxuICAgIFsyLCAyLCAxLCAxLCAzLCAyXSxcbiAgICBbMiwgMiwgMSwgMiwgMywgMV0sXG4gICAgWzIsIDEsIDMsIDIsIDEsIDJdLFxuICAgIFsyLCAyLCAzLCAxLCAxLCAyXSxcbiAgICBbMywgMSwgMiwgMSwgMywgMV0sXG4gICAgWzMsIDEsIDEsIDIsIDIsIDJdLFxuICAgIFszLCAyLCAxLCAxLCAyLCAyXSxcbiAgICBbMywgMiwgMSwgMiwgMiwgMV0sXG4gICAgWzMsIDEsIDIsIDIsIDEsIDJdLFxuICAgIFszLCAyLCAyLCAxLCAxLCAyXSxcbiAgICBbMywgMiwgMiwgMiwgMSwgMV0sXG4gICAgWzIsIDEsIDIsIDEsIDIsIDNdLFxuICAgIFsyLCAxLCAyLCAzLCAyLCAxXSxcbiAgICBbMiwgMywgMiwgMSwgMiwgMV0sXG4gICAgWzEsIDEsIDEsIDMsIDIsIDNdLFxuICAgIFsxLCAzLCAxLCAxLCAyLCAzXSxcbiAgICBbMSwgMywgMSwgMywgMiwgMV0sXG4gICAgWzEsIDEsIDIsIDMsIDEsIDNdLFxuICAgIFsxLCAzLCAyLCAxLCAxLCAzXSxcbiAgICBbMSwgMywgMiwgMywgMSwgMV0sXG4gICAgWzIsIDEsIDEsIDMsIDEsIDNdLFxuICAgIFsyLCAzLCAxLCAxLCAxLCAzXSxcbiAgICBbMiwgMywgMSwgMywgMSwgMV0sXG4gICAgWzEsIDEsIDIsIDEsIDMsIDNdLFxuICAgIFsxLCAxLCAyLCAzLCAzLCAxXSxcbiAgICBbMSwgMywgMiwgMSwgMywgMV0sXG4gICAgWzEsIDEsIDMsIDEsIDIsIDNdLFxuICAgIFsxLCAxLCAzLCAzLCAyLCAxXSxcbiAgICBbMSwgMywgMywgMSwgMiwgMV0sXG4gICAgWzMsIDEsIDMsIDEsIDIsIDFdLFxuICAgIFsyLCAxLCAxLCAzLCAzLCAxXSxcbiAgICBbMiwgMywgMSwgMSwgMywgMV0sXG4gICAgWzIsIDEsIDMsIDEsIDEsIDNdLFxuICAgIFsyLCAxLCAzLCAzLCAxLCAxXSxcbiAgICBbMiwgMSwgMywgMSwgMywgMV0sXG4gICAgWzMsIDEsIDEsIDEsIDIsIDNdLFxuICAgIFszLCAxLCAxLCAzLCAyLCAxXSxcbiAgICBbMywgMywgMSwgMSwgMiwgMV0sXG4gICAgWzMsIDEsIDIsIDEsIDEsIDNdLFxuICAgIFszLCAxLCAyLCAzLCAxLCAxXSxcbiAgICBbMywgMywgMiwgMSwgMSwgMV0sXG4gICAgWzMsIDEsIDQsIDEsIDEsIDFdLFxuICAgIFsyLCAyLCAxLCA0LCAxLCAxXSxcbiAgICBbNCwgMywgMSwgMSwgMSwgMV0sXG4gICAgWzEsIDEsIDEsIDIsIDIsIDRdLFxuICAgIFsxLCAxLCAxLCA0LCAyLCAyXSxcbiAgICBbMSwgMiwgMSwgMSwgMiwgNF0sXG4gICAgWzEsIDIsIDEsIDQsIDIsIDFdLFxuICAgIFsxLCA0LCAxLCAxLCAyLCAyXSxcbiAgICBbMSwgNCwgMSwgMiwgMiwgMV0sXG4gICAgWzEsIDEsIDIsIDIsIDEsIDRdLFxuICAgIFsxLCAxLCAyLCA0LCAxLCAyXSxcbiAgICBbMSwgMiwgMiwgMSwgMSwgNF0sXG4gICAgWzEsIDIsIDIsIDQsIDEsIDFdLFxuICAgIFsxLCA0LCAyLCAxLCAxLCAyXSxcbiAgICBbMSwgNCwgMiwgMiwgMSwgMV0sXG4gICAgWzIsIDQsIDEsIDIsIDEsIDFdLFxuICAgIFsyLCAyLCAxLCAxLCAxLCA0XSxcbiAgICBbNCwgMSwgMywgMSwgMSwgMV0sXG4gICAgWzIsIDQsIDEsIDEsIDEsIDJdLFxuICAgIFsxLCAzLCA0LCAxLCAxLCAxXSxcbiAgICBbMSwgMSwgMSwgMiwgNCwgMl0sXG4gICAgWzEsIDIsIDEsIDEsIDQsIDJdLFxuICAgIFsxLCAyLCAxLCAyLCA0LCAxXSxcbiAgICBbMSwgMSwgNCwgMiwgMSwgMl0sXG4gICAgWzEsIDIsIDQsIDEsIDEsIDJdLFxuICAgIFsxLCAyLCA0LCAyLCAxLCAxXSxcbiAgICBbNCwgMSwgMSwgMiwgMSwgMl0sXG4gICAgWzQsIDIsIDEsIDEsIDEsIDJdLFxuICAgIFs0LCAyLCAxLCAyLCAxLCAxXSxcbiAgICBbMiwgMSwgMiwgMSwgNCwgMV0sXG4gICAgWzIsIDEsIDQsIDEsIDIsIDFdLFxuICAgIFs0LCAxLCAyLCAxLCAyLCAxXSxcbiAgICBbMSwgMSwgMSwgMSwgNCwgM10sXG4gICAgWzEsIDEsIDEsIDMsIDQsIDFdLFxuICAgIFsxLCAzLCAxLCAxLCA0LCAxXSxcbiAgICBbMSwgMSwgNCwgMSwgMSwgM10sXG4gICAgWzEsIDEsIDQsIDMsIDEsIDFdLFxuICAgIFs0LCAxLCAxLCAxLCAxLCAzXSxcbiAgICBbNCwgMSwgMSwgMywgMSwgMV0sXG4gICAgWzEsIDEsIDMsIDEsIDQsIDFdLFxuICAgIFsxLCAxLCA0LCAxLCAzLCAxXSxcbiAgICBbMywgMSwgMSwgMSwgNCwgMV0sXG4gICAgWzQsIDEsIDEsIDEsIDMsIDFdLFxuICAgIFsyLCAxLCAxLCA0LCAxLCAyXSxcbiAgICBbMiwgMSwgMSwgMiwgMSwgNF0sXG4gICAgWzIsIDEsIDEsIDIsIDMsIDJdLFxuICAgIFsyLCAzLCAzLCAxLCAxLCAxLCAyXVxuXTtcbmNvbnN0IE1PRFVMRV9JTkRJQ0VTID0geyBiYXI6IFswLCAyLCA0XSwgc3BhY2U6IFsxLCAzLCA1XSB9O1xuXG5leHBvcnQgY2xhc3MgQ29kZTEyOFJlYWRlciBleHRlbmRzIEJhcmNvZGVSZWFkZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuX2Zvcm1hdCA9ICdjb2RlXzEyOCc7XG4gICAgICAgIHRoaXMuX3NpbmdsZUNvZGVFcnJvciA9IDAuNjQ7XG4gICAgICAgIHRoaXMuX2F2ZXJhZ2VDb2RlRXJyb3IgPSAwLjMwO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZGVjb2RlQ29kZShzdGFydDogbnVtYmVyLCBjb3JyZWN0aW9uOiBCYXJjb2RlQ29ycmVjdGlvbik6IEJhcmNvZGVJbmZvIHtcbiAgICAgICAgY29uc3QgY291bnRlciA9IFswLCAwLCAwLCAwLCAwLCAwXTtcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gc3RhcnQ7XG4gICAgICAgIGNvbnN0IGJlc3RNYXRjaDogQmFyY29kZUluZm8gPSB7XG4gICAgICAgICAgICBlcnJvcjogTnVtYmVyLk1BWF9WQUxVRSxcbiAgICAgICAgICAgIGNvZGU6IC0xLFxuICAgICAgICAgICAgc3RhcnQ6IHN0YXJ0LFxuICAgICAgICAgICAgZW5kOiBzdGFydCxcbiAgICAgICAgICAgIGNvcnJlY3Rpb246IHtcbiAgICAgICAgICAgICAgICBiYXI6IDEsXG4gICAgICAgICAgICAgICAgc3BhY2U6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgZXBzaWxvbiA9IHRoaXMuQVZFUkFHRV9DT0RFX0VSUk9SO1xuICAgICAgICBsZXQgaXNXaGl0ZTogMCB8IDEgPSB0aGlzLl9yb3dbb2Zmc2V0XSA/IDAgOiAxO1xuICAgICAgICBsZXQgY291bnRlclBvcyA9IDA7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IG9mZnNldDsgaSA8IHRoaXMuX3Jvdy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3Jvd1tpXSBeIGlzV2hpdGUpIHtcbiAgICAgICAgICAgICAgICBjb3VudGVyW2NvdW50ZXJQb3NdKys7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChjb3VudGVyUG9zID09PSBjb3VudGVyLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvcnJlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NvcnJlY3QoY291bnRlciwgY29ycmVjdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBjb2RlID0gMDsgY29kZSA8IENPREVfUEFUVEVSTi5sZW5ndGg7IGNvZGUrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXJyb3IgPSB0aGlzLl9tYXRjaFBhdHRlcm4oY291bnRlciwgQ09ERV9QQVRURVJOW2NvZGVdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnJvciA8IGJlc3RNYXRjaC5lcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlc3RNYXRjaC5jb2RlID0gY29kZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZXN0TWF0Y2guZXJyb3IgPSBlcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGJlc3RNYXRjaC5lbmQgPSBpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChiZXN0TWF0Y2guY29kZSA9PT0gLTEgfHwgYmVzdE1hdGNoLmVycm9yID4gZXBzaWxvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBleHBlY3RlZCA9IENPREVfUEFUVEVSTltiZXN0TWF0Y2guY29kZV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChleHBlY3RlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmVzdE1hdGNoLmNvcnJlY3Rpb24uYmFyID0gdGhpcy5fY2FsY3VsYXRlQ29ycmVjdGlvbihleHBlY3RlZCwgY291bnRlciwgTU9EVUxFX0lORElDRVMuYmFyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlc3RNYXRjaC5jb3JyZWN0aW9uLnNwYWNlID0gdGhpcy5fY2FsY3VsYXRlQ29ycmVjdGlvbihleHBlY3RlZCwgY291bnRlciwgTU9EVUxFX0lORElDRVMuc3BhY2UpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJlc3RNYXRjaDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb3VudGVyUG9zKys7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY291bnRlcltjb3VudGVyUG9zXSA9IDE7XG4gICAgICAgICAgICAgICAgaXNXaGl0ZSA9IGlzV2hpdGUgPyAwIDogMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2NvcnJlY3QoY291bnRlcjogQXJyYXk8bnVtYmVyPiwgY29ycmVjdGlvbjogQmFyY29kZUNvcnJlY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fY29ycmVjdEJhcnMoY291bnRlciwgY29ycmVjdGlvbi5iYXIsIE1PRFVMRV9JTkRJQ0VTLmJhcik7XG4gICAgICAgIHRoaXMuX2NvcnJlY3RCYXJzKGNvdW50ZXIsIGNvcnJlY3Rpb24uc3BhY2UsIE1PRFVMRV9JTkRJQ0VTLnNwYWNlKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2ZpbmRTdGFydCgpIHtcbiAgICAgICAgY29uc3QgY291bnRlciA9IFswLCAwLCAwLCAwLCAwLCAwXTtcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gdGhpcy5fbmV4dFNldCh0aGlzLl9yb3cpO1xuICAgICAgICBjb25zdCBiZXN0TWF0Y2ggPSB7XG4gICAgICAgICAgICBlcnJvcjogTnVtYmVyLk1BWF9WQUxVRSxcbiAgICAgICAgICAgIGNvZGU6IC0xLFxuICAgICAgICAgICAgc3RhcnQ6IDAsXG4gICAgICAgICAgICBlbmQ6IDAsXG4gICAgICAgICAgICBjb3JyZWN0aW9uOiB7XG4gICAgICAgICAgICAgICAgYmFyOiAxLFxuICAgICAgICAgICAgICAgIHNwYWNlOiAxXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGVwc2lsb24gPSB0aGlzLkFWRVJBR0VfQ09ERV9FUlJPUjtcbiAgICAgICAgbGV0IGlzV2hpdGU6IDAgfCAxID0gMDtcbiAgICAgICAgbGV0IGNvdW50ZXJQb3MgPSAwO1xuICAgICAgICBsZXQgc3VtOiBudW1iZXI7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IG9mZnNldDsgaSA8IHRoaXMuX3Jvdy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3Jvd1tpXSBeIGlzV2hpdGUpIHtcbiAgICAgICAgICAgICAgICBjb3VudGVyW2NvdW50ZXJQb3NdKys7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChjb3VudGVyUG9zID09PSBjb3VudGVyLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgc3VtID0gMDtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb3VudGVyLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdW0gKz0gY291bnRlcltqXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBjb2RlID0gU1RBUlRfQ09ERV9BOyBjb2RlIDw9IFNUQVJUX0NPREVfQzsgY29kZSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlcnJvciA9IHRoaXMuX21hdGNoUGF0dGVybihjb3VudGVyLCBDT0RFX1BBVFRFUk5bY29kZV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yIDwgYmVzdE1hdGNoLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVzdE1hdGNoLmNvZGUgPSBjb2RlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlc3RNYXRjaC5lcnJvciA9IGVycm9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChiZXN0TWF0Y2guZXJyb3IgPCBlcHNpbG9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiZXN0TWF0Y2guc3RhcnQgPSBpIC0gc3VtO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmVzdE1hdGNoLmVuZCA9IGk7XG4gICAgICAgICAgICAgICAgICAgICAgICBiZXN0TWF0Y2guY29ycmVjdGlvbi5iYXIgPSB0aGlzLl9jYWxjdWxhdGVDb3JyZWN0aW9uKENPREVfUEFUVEVSTltiZXN0TWF0Y2guY29kZV0sIGNvdW50ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTU9EVUxFX0lORElDRVMuYmFyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlc3RNYXRjaC5jb3JyZWN0aW9uLnNwYWNlID0gdGhpcy5fY2FsY3VsYXRlQ29ycmVjdGlvbihDT0RFX1BBVFRFUk5bYmVzdE1hdGNoLmNvZGVdLCBjb3VudGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1PRFVMRV9JTkRJQ0VTLnNwYWNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBiZXN0TWF0Y2g7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDQ7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY291bnRlcltqXSA9IGNvdW50ZXJbaiArIDJdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXJbNF0gPSAwO1xuICAgICAgICAgICAgICAgICAgICBjb3VudGVyWzVdID0gMDtcbiAgICAgICAgICAgICAgICAgICAgY291bnRlclBvcy0tO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXJQb3MrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY291bnRlcltjb3VudGVyUG9zXSA9IDE7XG4gICAgICAgICAgICAgICAgaXNXaGl0ZSA9IGlzV2hpdGUgPyAwIDogMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGRlY29kZSgpOiBCYXJjb2RlIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEFycmF5PHN0cmluZyB8IG51bWJlcj4oKTtcbiAgICAgICAgY29uc3Qgc3RhcnRJbmZvID0gdGhpcy5fZmluZFN0YXJ0KCk7XG4gICAgICAgIGxldCBjb2RlOiBCYXJjb2RlSW5mbyA9IG51bGw7XG4gICAgICAgIGxldCBkb25lID0gZmFsc2U7XG4gICAgICAgIGxldCBtdWx0aXBsaWVyID0gMDtcbiAgICAgICAgbGV0IGNoZWNrc3VtID0gMDtcbiAgICAgICAgbGV0IGNvZGVzZXQ6IG51bWJlcjtcbiAgICAgICAgbGV0IHJhd1Jlc3VsdCA9IG5ldyBBcnJheTxudW1iZXI+KCk7XG4gICAgICAgIGxldCBkZWNvZGVkQ29kZXMgPSBuZXcgQXJyYXk8QmFyY29kZUluZm8+KCk7XG4gICAgICAgIGxldCBzaGlmdE5leHQgPSBmYWxzZTtcbiAgICAgICAgbGV0IHVuc2hpZnQ6IGJvb2xlYW47XG4gICAgICAgIGxldCByZW1vdmVMYXN0Q2hhcmFjdGVyID0gdHJ1ZTtcblxuICAgICAgICBpZiAoc3RhcnRJbmZvID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb2RlID0ge1xuICAgICAgICAgICAgY29kZTogc3RhcnRJbmZvLmNvZGUsXG4gICAgICAgICAgICBzdGFydDogc3RhcnRJbmZvLnN0YXJ0LFxuICAgICAgICAgICAgZW5kOiBzdGFydEluZm8uZW5kLFxuICAgICAgICAgICAgY29ycmVjdGlvbjoge1xuICAgICAgICAgICAgICAgIGJhcjogc3RhcnRJbmZvLmNvcnJlY3Rpb24uYmFyLFxuICAgICAgICAgICAgICAgIHNwYWNlOiBzdGFydEluZm8uY29ycmVjdGlvbi5zcGFjZVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBkZWNvZGVkQ29kZXMucHVzaChjb2RlKTtcbiAgICAgICAgY2hlY2tzdW0gPSBjb2RlLmNvZGU7XG5cbiAgICAgICAgc3dpdGNoIChjb2RlLmNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgU1RBUlRfQ09ERV9BOlxuICAgICAgICAgICAgICAgIGNvZGVzZXQgPSBDT0RFX0E7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFNUQVJUX0NPREVfQjpcbiAgICAgICAgICAgICAgICBjb2Rlc2V0ID0gQ09ERV9CO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBTVEFSVF9DT0RFX0M6XG4gICAgICAgICAgICAgICAgY29kZXNldCA9IENPREVfQztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICB3aGlsZSAoIWRvbmUpIHtcbiAgICAgICAgICAgIHVuc2hpZnQgPSBzaGlmdE5leHQ7XG4gICAgICAgICAgICBzaGlmdE5leHQgPSBmYWxzZTtcbiAgICAgICAgICAgIGNvZGUgPSB0aGlzLl9kZWNvZGVDb2RlKGNvZGUuZW5kLCBjb2RlLmNvcnJlY3Rpb24pO1xuICAgICAgICAgICAgaWYgKGNvZGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAoY29kZS5jb2RlICE9PSBTVE9QX0NPREUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlTGFzdENoYXJhY3RlciA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGNvZGUuY29kZSAhPT0gU1RPUF9DT0RFKSB7XG4gICAgICAgICAgICAgICAgICAgIHJhd1Jlc3VsdC5wdXNoKGNvZGUuY29kZSk7XG4gICAgICAgICAgICAgICAgICAgIG11bHRpcGxpZXIrKztcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tzdW0gKz0gbXVsdGlwbGllciAqIGNvZGUuY29kZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGVjb2RlZENvZGVzLnB1c2goY29kZSk7XG5cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGNvZGVzZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBDT0RFX0E6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2RlLmNvZGUgPCA2NCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUoMzIgKyBjb2RlLmNvZGUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY29kZS5jb2RlIDwgOTYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGUuY29kZSAtIDY0KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2RlLmNvZGUgIT09IFNUT1BfQ09ERSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVMYXN0Q2hhcmFjdGVyID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoY29kZS5jb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgQ09ERV9TSElGVDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaWZ0TmV4dCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2Rlc2V0ID0gQ09ERV9CO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgQ09ERV9COlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29kZXNldCA9IENPREVfQjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIENPREVfQzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvZGVzZXQgPSBDT0RFX0M7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBTVE9QX0NPREU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb25lID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgQ09ERV9COiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29kZS5jb2RlIDwgOTYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKDMyICsgY29kZS5jb2RlKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2RlLmNvZGUgIT09IFNUT1BfQ09ERSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVMYXN0Q2hhcmFjdGVyID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoY29kZS5jb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgQ09ERV9TSElGVDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaWZ0TmV4dCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2Rlc2V0ID0gQ09ERV9BO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgQ09ERV9BOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29kZXNldCA9IENPREVfQTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIENPREVfQzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvZGVzZXQgPSBDT0RFX0M7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBTVE9QX0NPREU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb25lID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgQ09ERV9DOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29kZS5jb2RlIDwgMTAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goY29kZS5jb2RlIDwgMTAgPyAnMCcgKyBjb2RlLmNvZGUgOiBjb2RlLmNvZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29kZS5jb2RlICE9PSBTVE9QX0NPREUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlTGFzdENoYXJhY3RlciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGNvZGUuY29kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIENPREVfQTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvZGVzZXQgPSBDT0RFX0E7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBDT0RFX0I6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2Rlc2V0ID0gQ09ERV9CO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgU1RPUF9DT0RFOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9uZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZG9uZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodW5zaGlmdCkge1xuICAgICAgICAgICAgICAgIGNvZGVzZXQgPSBjb2Rlc2V0ID09PSBDT0RFX0EgPyBDT0RFX0IgOiBDT0RFX0E7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29kZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb2RlLmVuZCA9IHRoaXMuX25leHRVbnNldCh0aGlzLl9yb3csIGNvZGUuZW5kKTtcbiAgICAgICAgaWYgKCF0aGlzLl92ZXJpZnlUcmFpbGluZ1doaXRlc3BhY2UoY29kZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY2hlY2tzdW0gLT0gbXVsdGlwbGllciAqIHJhd1Jlc3VsdFtyYXdSZXN1bHQubGVuZ3RoIC0gMV07XG4gICAgICAgIGlmIChjaGVja3N1bSAlIDEwMyAhPT0gcmF3UmVzdWx0W3Jhd1Jlc3VsdC5sZW5ndGggLSAxXSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXJlc3VsdC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcmVtb3ZlIGxhc3QgY29kZSBmcm9tIHJlc3VsdCAoY2hlY2tzdW0pXG4gICAgICAgIGlmIChyZW1vdmVMYXN0Q2hhcmFjdGVyKSB7XG4gICAgICAgICAgICByZXN1bHQuc3BsaWNlKHJlc3VsdC5sZW5ndGggLSAxLCAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb2RlOiByZXN1bHQuam9pbignJyksXG4gICAgICAgICAgICBzdGFydDogc3RhcnRJbmZvLnN0YXJ0LFxuICAgICAgICAgICAgZW5kOiBjb2RlLmVuZCxcbiAgICAgICAgICAgIGNvZGVzZXQsXG4gICAgICAgICAgICBzdGFydEluZm8sXG4gICAgICAgICAgICBkZWNvZGVkQ29kZXMsXG4gICAgICAgICAgICBlbmRJbmZvOiBjb2RlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF92ZXJpZnlUcmFpbGluZ1doaXRlc3BhY2UoZW5kSW5mbzogQmFyY29kZUluZm8pOiBCYXJjb2RlSW5mbyB7XG4gICAgICAgIGNvbnN0IHRyYWlsaW5nV2hpdGVzcGFjZUVuZCA9IGVuZEluZm8uZW5kICsgKGVuZEluZm8uZW5kIC0gZW5kSW5mby5zdGFydCkgLyAyO1xuXG4gICAgICAgIGlmICh0cmFpbGluZ1doaXRlc3BhY2VFbmQgPCB0aGlzLl9yb3cubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fbWF0Y2hSYW5nZShlbmRJbmZvLmVuZCwgdHJhaWxpbmdXaGl0ZXNwYWNlRW5kLCAwKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbmRJbmZvO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfY2FsY3VsYXRlQ29ycmVjdGlvbihcbiAgICAgICAgZXhwZWN0ZWQ6IFJlYWRvbmx5QXJyYXk8bnVtYmVyPixcbiAgICAgICAgbm9ybWFsaXplZDogUmVhZG9ubHlBcnJheTxudW1iZXI+LFxuICAgICAgICBpbmRpY2VzOiBSZWFkb25seUFycmF5PG51bWJlcj5cbiAgICApOiBudW1iZXIge1xuICAgICAgICBsZXQgc3VtTm9ybWFsaXplZCA9IDA7XG4gICAgICAgIGxldCBzdW1FeHBlY3RlZCA9IDA7XG5cbiAgICAgICAgZm9yIChsZXQgbGVuZ3RoID0gaW5kaWNlcy5sZW5ndGg7IGxlbmd0aC0tOykge1xuICAgICAgICAgICAgc3VtRXhwZWN0ZWQgKz0gZXhwZWN0ZWRbaW5kaWNlc1tsZW5ndGhdXTtcbiAgICAgICAgICAgIHN1bU5vcm1hbGl6ZWQgKz0gbm9ybWFsaXplZFtpbmRpY2VzW2xlbmd0aF1dO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1bUV4cGVjdGVkIC8gc3VtTm9ybWFsaXplZDtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBCYXJjb2RlLCBCYXJjb2RlSW5mbywgQmFyY29kZVJlYWRlciB9IGZyb20gJy4vYmFyY29kZS1yZWFkZXInO1xuXG5jb25zdCBBU1RFUklTSyA9IDB4MDk0O1xuY29uc3QgQUxQSEFCRVRIX1NUUklORyA9ICcwMTIzNDU2Nzg5QUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVotLiAqJC8rJSc7XG5jb25zdCBBTFBIQUJFVCA9IG5ldyBVaW50MTZBcnJheShbLi4uQUxQSEFCRVRIX1NUUklOR10ubWFwKGNoYXIgPT4gY2hhci5jaGFyQ29kZUF0KDApKSk7XG4vLyBjb25zdCBBTFBIQUJFVCA9IFs0OCwgNDksIDUwLCA1MSwgNTIsIDUzLCA1NCwgNTUsIDU2LCA1NywgNjUsIDY2LCA2NywgNjgsIDY5LCA3MCwgNzEsIDcyLCA3MywgNzQsIDc1LCA3NiwgNzcsIDc4LFxuLy8gICAgIDc5LCA4MCwgODEsIDgyLCA4MywgODQsIDg1LCA4NiwgODcsIDg4LCA4OSwgOTAsIDQ1LCA0NiwgMzIsIDQyLCAzNiwgNDcsIDQzLCAzN107XG5jb25zdCBDSEFSQUNURVJfRU5DT0RJTkdTID0gbmV3IFVpbnQxNkFycmF5KFtcbiAgICAweDAzNCwgMHgxMjEsIDB4MDYxLCAweDE2MCwgMHgwMzEsIDB4MTMwLCAweDA3MCwgMHgwMjUsIDB4MTI0LCAweDA2NCwgMHgxMDksIDB4MDQ5LCAweDE0OCwgMHgwMTksIDB4MTE4LCAweDA1OCxcbiAgICAweDAwRCwgMHgxMEMsIDB4MDRDLCAweDAxQywgMHgxMDMsIDB4MDQzLCAweDE0MiwgMHgwMTMsIDB4MTEyLCAweDA1MiwgMHgwMDcsIDB4MTA2LCAweDA0NiwgMHgwMTYsIDB4MTgxLCAweDBDMSxcbiAgICAweDFDMCwgMHgwOTEsIDB4MTkwLCAweDBEMCwgMHgwODUsIDB4MTg0LCAweDBDNCwgMHgwOTQsIDB4MEE4LCAweDBBMiwgMHgwOEEsIDB4MDJBXG5dKTtcblxuZXhwb3J0IGNsYXNzIENvZGUzOVJlYWRlciBleHRlbmRzIEJhcmNvZGVSZWFkZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuX2Zvcm1hdCA9ICdjb2RlXzM5JztcbiAgICB9XG5cbiAgICBkZWNvZGUoKTogQmFyY29kZSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy5fZmluZFN0YXJ0KCk7XG5cbiAgICAgICAgaWYgKCFzdGFydCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xuICAgICAgICBsZXQgY291bnRlcnMgPSBuZXcgVWludDE2QXJyYXkoOSk7XG4gICAgICAgIGxldCBkZWNvZGVkQ2hhcjogc3RyaW5nO1xuICAgICAgICBsZXQgbGFzdFN0YXJ0OiBudW1iZXI7XG4gICAgICAgIGxldCBuZXh0U3RhcnQgPSB0aGlzLl9uZXh0U2V0KHRoaXMuX3Jvdywgc3RhcnQuZW5kKTtcblxuICAgICAgICBkbyB7XG4gICAgICAgICAgICB0aGlzLl90b0NvdW50ZXJzKG5leHRTdGFydCwgY291bnRlcnMpO1xuICAgICAgICAgICAgY29uc3QgcGF0dGVybiA9IHRoaXMuX3RvUGF0dGVybihjb3VudGVycyk7XG4gICAgICAgICAgICBpZiAocGF0dGVybiA8IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlY29kZWRDaGFyID0gdGhpcy5fcGF0dGVyblRvQ2hhcihwYXR0ZXJuKTtcbiAgICAgICAgICAgIGlmIChkZWNvZGVkQ2hhciA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goZGVjb2RlZENoYXIpO1xuICAgICAgICAgICAgbGFzdFN0YXJ0ID0gbmV4dFN0YXJ0O1xuICAgICAgICAgICAgbmV4dFN0YXJ0ICs9IGNvdW50ZXJzLnJlZHVjZSgoc3VtLCBpdGVtKSA9PiBzdW0gKyBpdGVtLCAwKTtcbiAgICAgICAgICAgIG5leHRTdGFydCA9IHRoaXMuX25leHRTZXQodGhpcy5fcm93LCBuZXh0U3RhcnQpO1xuICAgICAgICB9IHdoaWxlIChkZWNvZGVkQ2hhciAhPT0gJyonKTtcbiAgICAgICAgcmVzdWx0LnBvcCgpO1xuXG4gICAgICAgIGlmICghcmVzdWx0Lmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuX3ZlcmlmeVRyYWlsaW5nV2hpdGVzcGFjZShsYXN0U3RhcnQsIG5leHRTdGFydCwgY291bnRlcnMpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb2RlOiByZXN1bHQuam9pbignJyksXG4gICAgICAgICAgICBzdGFydDogc3RhcnQuc3RhcnQsXG4gICAgICAgICAgICBlbmQ6IG5leHRTdGFydCxcbiAgICAgICAgICAgIHN0YXJ0SW5mbzogc3RhcnQsXG4gICAgICAgICAgICBkZWNvZGVkQ29kZXM6IHJlc3VsdFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfcGF0dGVyblRvQ2hhcihwYXR0ZXJuKTogc3RyaW5nIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBDSEFSQUNURVJfRU5DT0RJTkdTLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoQ0hBUkFDVEVSX0VOQ09ESU5HU1tpXSA9PT0gcGF0dGVybikge1xuICAgICAgICAgICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKEFMUEhBQkVUW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBwcml2YXRlIF92ZXJpZnlUcmFpbGluZ1doaXRlc3BhY2UobGFzdFN0YXJ0OiBudW1iZXIsIG5leHRTdGFydDogbnVtYmVyLCBjb3VudGVyczogVWludDE2QXJyYXkpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgcGF0dGVyblNpemUgPSBjb3VudGVycy5yZWR1Y2UoKHN1bSwgaXRlbSkgPT4gc3VtICsgaXRlbSwgMCk7XG4gICAgICAgIGNvbnN0IHRyYWlsaW5nV2hpdGVzcGFjZUVuZCA9IG5leHRTdGFydCAtIGxhc3RTdGFydCAtIHBhdHRlcm5TaXplO1xuICAgICAgICByZXR1cm4gKHRyYWlsaW5nV2hpdGVzcGFjZUVuZCAqIDMpID49IHBhdHRlcm5TaXplO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2ZpbmROZXh0V2lkdGgoY291bnRlcnM6IFVpbnQxNkFycmF5LCBjdXJyZW50OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICBsZXQgbWluV2lkdGggPSBOdW1iZXIuTUFYX1ZBTFVFO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnRlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChjb3VudGVyc1tpXSA8IG1pbldpZHRoICYmIGNvdW50ZXJzW2ldID4gY3VycmVudCkge1xuICAgICAgICAgICAgICAgIG1pbldpZHRoID0gY291bnRlcnNbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbWluV2lkdGg7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfdG9QYXR0ZXJuKGNvdW50ZXJzOiBVaW50MTZBcnJheSk6IG51bWJlciB7XG4gICAgICAgIGNvbnN0IG51bUNvdW50ZXJzID0gY291bnRlcnMubGVuZ3RoO1xuICAgICAgICBsZXQgbWF4TmFycm93V2lkdGggPSAwO1xuICAgICAgICBsZXQgbnVtV2lkZUJhcnMgPSBudW1Db3VudGVycztcbiAgICAgICAgbGV0IHdpZGVCYXJXaWR0aCA9IDA7XG4gICAgICAgIGxldCBwYXR0ZXJuOiBudW1iZXI7XG5cbiAgICAgICAgd2hpbGUgKG51bVdpZGVCYXJzID4gMykge1xuICAgICAgICAgICAgbWF4TmFycm93V2lkdGggPSB0aGlzLl9maW5kTmV4dFdpZHRoKGNvdW50ZXJzLCBtYXhOYXJyb3dXaWR0aCk7XG4gICAgICAgICAgICBudW1XaWRlQmFycyA9IDA7XG4gICAgICAgICAgICBwYXR0ZXJuID0gMDtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtQ291bnRlcnM7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChjb3VudGVyc1tpXSA+IG1heE5hcnJvd1dpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm4gfD0gMSA8PCAobnVtQ291bnRlcnMgLSAxIC0gaSk7XG4gICAgICAgICAgICAgICAgICAgIG51bVdpZGVCYXJzKys7XG4gICAgICAgICAgICAgICAgICAgIHdpZGVCYXJXaWR0aCArPSBjb3VudGVyc1tpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChudW1XaWRlQmFycyA9PT0gMykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtQ291bnRlcnMgJiYgbnVtV2lkZUJhcnMgPiAwOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ZXJzW2ldID4gbWF4TmFycm93V2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bVdpZGVCYXJzLS07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKGNvdW50ZXJzW2ldICogMikgPj0gd2lkZUJhcldpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBwYXR0ZXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2ZpbmRTdGFydCgpOiBCYXJjb2RlSW5mbyB7XG4gICAgICAgIGNvbnN0IG9mZnNldCA9IHRoaXMuX25leHRTZXQodGhpcy5fcm93KTtcbiAgICAgICAgbGV0IHBhdHRlcm5TdGFydCA9IG9mZnNldDtcbiAgICAgICAgY29uc3QgY291bnRlciA9IG5ldyBVaW50MTZBcnJheSg5KTtcbiAgICAgICAgbGV0IGNvdW50ZXJQb3MgPSAwO1xuICAgICAgICBsZXQgaXNXaGl0ZTogMCB8IDEgPSAwO1xuICAgICAgICBsZXQgd2hpdGVTcGFjZU11c3RTdGFydDogbnVtYmVyO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSBvZmZzZXQ7IGkgPCB0aGlzLl9yb3cubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9yb3dbaV0gXiBpc1doaXRlKSB7XG4gICAgICAgICAgICAgICAgY291bnRlcltjb3VudGVyUG9zXSsrO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoY291bnRlclBvcyA9PT0gY291bnRlci5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGZpbmQgc3RhcnQgcGF0dGVyblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fdG9QYXR0ZXJuKGNvdW50ZXIpID09PSBBU1RFUklTSykge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGVTcGFjZU11c3RTdGFydCA9IE1hdGgubWF4KDAsIHBhdHRlcm5TdGFydCAtICgoaSAtIHBhdHRlcm5TdGFydCkgLyA0KSkgfCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX21hdGNoUmFuZ2Uod2hpdGVTcGFjZU11c3RTdGFydCwgcGF0dGVyblN0YXJ0LCAwKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBwYXR0ZXJuU3RhcnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuU3RhcnQgKz0gY291bnRlclswXSArIGNvdW50ZXJbMV07XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgNzsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVyW2pdID0gY291bnRlcltqICsgMl07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY291bnRlcls3XSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXJbOF0gPSAwO1xuICAgICAgICAgICAgICAgICAgICBjb3VudGVyUG9zLS07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnRlclBvcysrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb3VudGVyW2NvdW50ZXJQb3NdID0gMTtcbiAgICAgICAgICAgICAgICBpc1doaXRlID0gaXNXaGl0ZSA/IDAgOiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQmFyY29kZSB9IGZyb20gJy4vYmFyY29kZS1yZWFkZXInO1xuaW1wb3J0IHsgQ29kZTM5UmVhZGVyIH0gZnJvbSAnLi9jb2RlLTM5LXJlYWRlcic7XG5cbmV4cG9ydCBjbGFzcyBDb2RlMzlWSU5SZWFkZXIgZXh0ZW5kcyBDb2RlMzlSZWFkZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuX2Zvcm1hdCA9ICdjb2RlXzM5X3Zpbic7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGJvcnJvd3NcbiAgICAgKiBodHRwczovL2dpdGh1Yi5jb20venhpbmcvenhpbmcvYmxvYi9tYXN0ZXIvY29yZS9zcmMvbWFpbi9qYXZhL2NvbS9nb29nbGUvenhpbmcvY2xpZW50L3Jlc3VsdC9WSU5SZXN1bHRQYXJzZXIuamF2YVxuICAgICAqL1xuICAgIGRlY29kZSgpOiBCYXJjb2RlIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuZGVjb2RlKCk7XG4gICAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjb2RlID0gcmVzdWx0LmNvZGU7XG5cbiAgICAgICAgaWYgKCFjb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvZGUgPSBjb2RlLnJlcGxhY2UoL1tJT1FdL2csICcnKTtcblxuICAgICAgICBpZiAoIS9bQS1aMC05XXsxN30vLnRlc3QoY29kZSkpIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0ZhaWxlZCBBWjA5IHBhdHRlcm4gY29kZTonLCBjb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLl9jaGVja0NoZWNrc3VtKGNvZGUpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc3VsdC5jb2RlID0gY29kZTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9jaGVja0NoZWNrc3VtKGNvZGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICAvLyBUT0RPXG4gICAgICAgIHJldHVybiAhIWNvZGU7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQmFyY29kZSwgQmFyY29kZUluZm8sIEJhcmNvZGVSZWFkZXIgfSBmcm9tICcuL2JhcmNvZGUtcmVhZGVyJztcblxuY29uc3QgQUxQSEFCRVRIX1NUUklORyA9ICcwMTIzNDU2Nzg5QUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVotLiAkLyslYWJjZConO1xuY29uc3QgQUxQSEFCRVQgPSBuZXcgVWludDE2QXJyYXkoWy4uLkFMUEhBQkVUSF9TVFJJTkddLm1hcChjaGFyID0+IGNoYXIuY2hhckNvZGVBdCgwKSkpO1xuY29uc3QgQ0hBUkFDVEVSX0VOQ09ESU5HUyA9IG5ldyBVaW50MTZBcnJheShbXG4gICAgMHgxMTQsIDB4MTQ4LCAweDE0NCwgMHgxNDIsIDB4MTI4LCAweDEyNCwgMHgxMjIsIDB4MTUwLCAweDExMiwgMHgxMEEsIDB4MUE4LCAweDFBNCwgMHgxQTIsIDB4MTk0LCAweDE5MiwgMHgxOEEsXG4gICAgMHgxNjgsIDB4MTY0LCAweDE2MiwgMHgxMzQsIDB4MTFBLCAweDE1OCwgMHgxNEMsIDB4MTQ2LCAweDEyQywgMHgxMTYsIDB4MUI0LCAweDFCMiwgMHgxQUMsIDB4MUE2LCAweDE5NiwgMHgxOUEsXG4gICAgMHgxNkMsIDB4MTY2LCAweDEzNiwgMHgxM0EsIDB4MTJFLCAweDFENCwgMHgxRDIsIDB4MUNBLCAweDE2RSwgMHgxNzYsIDB4MUFFLCAweDEyNiwgMHgxREEsIDB4MUQ2LCAweDEzMiwgMHgxNUVcbl0pO1xuY29uc3QgQVNURVJJU0sgPSAweDE1RTtcblxuZXhwb3J0IGNsYXNzIENvZGU5M1JlYWRlciBleHRlbmRzIEJhcmNvZGVSZWFkZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuX2Zvcm1hdCA9ICdjb2RlXzkzJztcbiAgICB9XG5cbiAgICBkZWNvZGUoKTogQmFyY29kZSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy5fZmluZFN0YXJ0KCk7XG5cbiAgICAgICAgaWYgKCFzdGFydCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmVzdWx0ID0gbmV3IEFycmF5PHN0cmluZz4oKTtcbiAgICAgICAgbGV0IGNvdW50ZXJzID0gbmV3IFVpbnQxNkFycmF5KDYpO1xuICAgICAgICBsZXQgZGVjb2RlZENoYXI6IHN0cmluZztcbiAgICAgICAgbGV0IGxhc3RTdGFydDogbnVtYmVyO1xuICAgICAgICBsZXQgbmV4dFN0YXJ0ID0gdGhpcy5fbmV4dFNldCh0aGlzLl9yb3csIHN0YXJ0LmVuZCk7XG5cbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgdGhpcy5fdG9Db3VudGVycyhuZXh0U3RhcnQsIGNvdW50ZXJzKTtcbiAgICAgICAgICAgIGNvbnN0IHBhdHRlcm4gPSB0aGlzLl90b1BhdHRlcm4oY291bnRlcnMpO1xuICAgICAgICAgICAgaWYgKHBhdHRlcm4gPCAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWNvZGVkQ2hhciA9IHRoaXMuX3BhdHRlcm5Ub0NoYXIocGF0dGVybik7XG4gICAgICAgICAgICBpZiAoZGVjb2RlZENoYXIgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGRlY29kZWRDaGFyKTtcbiAgICAgICAgICAgIGxhc3RTdGFydCA9IG5leHRTdGFydDtcbiAgICAgICAgICAgIG5leHRTdGFydCArPSBjb3VudGVycy5yZWR1Y2UoKHN1bSwgaXRlbSkgPT4gc3VtICsgaXRlbSwgMCk7XG4gICAgICAgICAgICBuZXh0U3RhcnQgPSB0aGlzLl9uZXh0U2V0KHRoaXMuX3JvdywgbmV4dFN0YXJ0KTtcbiAgICAgICAgfSB3aGlsZSAoZGVjb2RlZENoYXIgIT09ICcqJyk7XG4gICAgICAgIHJlc3VsdC5wb3AoKTtcblxuICAgICAgICBpZiAoIXJlc3VsdC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLl92ZXJpZnlFbmQobGFzdFN0YXJ0LCBuZXh0U3RhcnQpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5fdmVyaWZ5Q2hlY2tzdW1zKHJlc3VsdCkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0LnNsaWNlKDAsIHJlc3VsdC5sZW5ndGggLSAyKTtcbiAgICAgICAgaWYgKChyZXN1bHQgPSB0aGlzLl9kZWNvZGVFeHRlbmRlZChyZXN1bHQpKSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29kZTogcmVzdWx0LmpvaW4oJycpLFxuICAgICAgICAgICAgc3RhcnQ6IHN0YXJ0LnN0YXJ0LFxuICAgICAgICAgICAgZW5kOiBuZXh0U3RhcnQsXG4gICAgICAgICAgICBzdGFydEluZm86IHN0YXJ0LFxuICAgICAgICAgICAgZGVjb2RlZENvZGVzOiByZXN1bHRcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX3BhdHRlcm5Ub0NoYXIocGF0dGVybjogbnVtYmVyKTogc3RyaW5nIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBDSEFSQUNURVJfRU5DT0RJTkdTLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoQ0hBUkFDVEVSX0VOQ09ESU5HU1tpXSA9PT0gcGF0dGVybikge1xuICAgICAgICAgICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKEFMUEhBQkVUW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBwcml2YXRlIF92ZXJpZnlFbmQobGFzdFN0YXJ0OiBudW1iZXIsIG5leHRTdGFydDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIGlmIChsYXN0U3RhcnQgPT09IG5leHRTdGFydCB8fCAhdGhpcy5fcm93W25leHRTdGFydF0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF90b1BhdHRlcm4oY291bnRlcnM6IFVpbnQxNkFycmF5KTogbnVtYmVyIHtcbiAgICAgICAgY29uc3QgbnVtQ291bnRlcnMgPSBjb3VudGVycy5sZW5ndGg7XG4gICAgICAgIGxldCBwYXR0ZXJuID0gMDtcbiAgICAgICAgbGV0IHN1bSA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtQ291bnRlcnM7IGkrKykge1xuICAgICAgICAgICAgc3VtICs9IGNvdW50ZXJzW2ldO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1Db3VudGVyczsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbm9ybWFsaXplZCA9IE1hdGgucm91bmQoY291bnRlcnNbaV0gKiA5IC8gc3VtKTtcbiAgICAgICAgICAgIGlmIChub3JtYWxpemVkIDwgMSB8fCBub3JtYWxpemVkID4gNCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgoaSAmIDEpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBub3JtYWxpemVkOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybiA9IChwYXR0ZXJuIDw8IDEpIHwgMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhdHRlcm4gPDw9IG5vcm1hbGl6ZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGF0dGVybjtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9maW5kU3RhcnQoKTogQmFyY29kZUluZm8ge1xuICAgICAgICBjb25zdCBjb3VudGVyID0gbmV3IFVpbnQxNkFycmF5KDYpO1xuICAgICAgICBjb25zdCBvZmZzZXQgPSB0aGlzLl9uZXh0U2V0KHRoaXMuX3Jvdyk7XG4gICAgICAgIGxldCBwYXR0ZXJuU3RhcnQgPSBvZmZzZXQ7XG4gICAgICAgIGxldCBjb3VudGVyUG9zID0gMDtcbiAgICAgICAgbGV0IGlzV2hpdGU6IDAgfCAxID0gMDtcbiAgICAgICAgbGV0IHdoaXRlU3BhY2VNdXN0U3RhcnQ6IG51bWJlcjtcblxuICAgICAgICBmb3IgKGxldCBpID0gb2Zmc2V0OyBpIDwgdGhpcy5fcm93Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fcm93W2ldIF4gaXNXaGl0ZSkge1xuICAgICAgICAgICAgICAgIGNvdW50ZXJbY291bnRlclBvc10rKztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvdW50ZXJQb3MgPT09IGNvdW50ZXIubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBmaW5kIHN0YXJ0IHBhdHRlcm5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3RvUGF0dGVybihjb3VudGVyKSA9PT0gQVNURVJJU0spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlU3BhY2VNdXN0U3RhcnQgPSBNYXRoLm1heCgwLCBwYXR0ZXJuU3RhcnQgLSAoKGkgLSBwYXR0ZXJuU3RhcnQpIC8gNCkpIHwgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9tYXRjaFJhbmdlKHdoaXRlU3BhY2VNdXN0U3RhcnQsIHBhdHRlcm5TdGFydCwgMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydDogcGF0dGVyblN0YXJ0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcGF0dGVyblN0YXJ0ICs9IGNvdW50ZXJbMF0gKyBjb3VudGVyWzFdO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDQ7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY291bnRlcltqXSA9IGNvdW50ZXJbaiArIDJdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXJbNF0gPSAwO1xuICAgICAgICAgICAgICAgICAgICBjb3VudGVyWzVdID0gMDtcbiAgICAgICAgICAgICAgICAgICAgY291bnRlclBvcy0tO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXJQb3MrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY291bnRlcltjb3VudGVyUG9zXSA9IDE7XG4gICAgICAgICAgICAgICAgaXNXaGl0ZSA9IGlzV2hpdGUgPyAwIDogMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2RlY29kZUV4dGVuZGVkKGNoYXJBcnJheTogQXJyYXk8c3RyaW5nPik6IEFycmF5PHN0cmluZz4ge1xuICAgICAgICBjb25zdCBsZW5ndGggPSBjaGFyQXJyYXkubGVuZ3RoO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBjaGFyID0gY2hhckFycmF5W2ldO1xuICAgICAgICAgICAgaWYgKGNoYXIgPj0gJ2EnICYmIGNoYXIgPD0gJ2QnKSB7XG4gICAgICAgICAgICAgICAgaWYgKGkgPiAobGVuZ3RoIC0gMikpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IG5leHRDaGFyID0gY2hhckFycmF5WysraV07XG4gICAgICAgICAgICAgICAgY29uc3QgbmV4dENoYXJDb2RlID0gbmV4dENoYXIuY2hhckNvZGVBdCgwKTtcbiAgICAgICAgICAgICAgICBsZXQgZGVjb2RlZENoYXI6IHN0cmluZztcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGNoYXIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnYSc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXh0Q2hhciA+PSAnQScgJiYgbmV4dENoYXIgPD0gJ1onKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjb2RlZENoYXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKG5leHRDaGFyQ29kZSAtIDY0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXNlICdiJzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRDaGFyID49ICdBJyAmJiBuZXh0Q2hhciA8PSAnRScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNvZGVkQ2hhciA9IFN0cmluZy5mcm9tQ2hhckNvZGUobmV4dENoYXJDb2RlIC0gMzgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChuZXh0Q2hhciA+PSAnRicgJiYgbmV4dENoYXIgPD0gJ0onKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjb2RlZENoYXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKG5leHRDaGFyQ29kZSAtIDExKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobmV4dENoYXIgPj0gJ0snICYmIG5leHRDaGFyIDw9ICdPJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY29kZWRDaGFyID0gU3RyaW5nLmZyb21DaGFyQ29kZShuZXh0Q2hhckNvZGUgKyAxNik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG5leHRDaGFyID49ICdQJyAmJiBuZXh0Q2hhciA8PSAnUycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNvZGVkQ2hhciA9IFN0cmluZy5mcm9tQ2hhckNvZGUobmV4dENoYXJDb2RlICsgNDMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChuZXh0Q2hhciA+PSAnVCcgJiYgbmV4dENoYXIgPD0gJ1onKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjb2RlZENoYXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDEyNyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnYyc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXh0Q2hhciA+PSAnQScgJiYgbmV4dENoYXIgPD0gJ08nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjb2RlZENoYXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKG5leHRDaGFyQ29kZSAtIDMyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobmV4dENoYXIgPT09ICdaJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY29kZWRDaGFyID0gJzonO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2QnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV4dENoYXIgPj0gJ0EnICYmIG5leHRDaGFyIDw9ICdaJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY29kZWRDaGFyID0gU3RyaW5nLmZyb21DaGFyQ29kZShuZXh0Q2hhckNvZGUgKyAzMik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goZGVjb2RlZENoYXIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChjaGFyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHByaXZhdGUgX3ZlcmlmeUNoZWNrc3VtcyhjaGFyQXJyYXk6IEFycmF5PHN0cmluZz4pOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hdGNoQ2hlY2tDaGFyKGNoYXJBcnJheSwgY2hhckFycmF5Lmxlbmd0aCAtIDIsIDIwKVxuICAgICAgICAgICAgJiYgdGhpcy5fbWF0Y2hDaGVja0NoYXIoY2hhckFycmF5LCBjaGFyQXJyYXkubGVuZ3RoIC0gMSwgMTUpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX21hdGNoQ2hlY2tDaGFyKGNoYXJBcnJheTogQXJyYXk8c3RyaW5nPiwgaW5kZXg6IG51bWJlciwgbWF4V2VpZ2h0OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgYXJyYXlUb0NoZWNrID0gY2hhckFycmF5LnNsaWNlKDAsIGluZGV4KTtcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gYXJyYXlUb0NoZWNrLmxlbmd0aDtcbiAgICAgICAgY29uc3Qgd2VpZ2h0ZWRTdW1zID0gYXJyYXlUb0NoZWNrLnJlZHVjZSgoc3VtLCBjaGFyLCBpKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB3ZWlnaHQgPSAoKChpICogLTEpICsgKGxlbmd0aCAtIDEpKSAlIG1heFdlaWdodCkgKyAxO1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBBTFBIQUJFVC5pbmRleE9mKGNoYXIuY2hhckNvZGVBdCgwKSk7XG4gICAgICAgICAgICByZXR1cm4gc3VtICsgKHdlaWdodCAqIHZhbHVlKTtcbiAgICAgICAgfSwgMCk7XG5cbiAgICAgICAgY29uc3QgY2hlY2tDaGFyID0gQUxQSEFCRVRbKHdlaWdodGVkU3VtcyAlIDQ3KV07XG4gICAgICAgIHJldHVybiBjaGVja0NoYXIgPT09IGNoYXJBcnJheVtpbmRleF0uY2hhckNvZGVBdCgwKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBCYXJjb2RlLCBCYXJjb2RlSW5mbywgQmFyY29kZVJlYWRlciwgQmFyY29kZVJlYWRlckNvbmZpZyB9IGZyb20gJy4vYmFyY29kZS1yZWFkZXInO1xuaW1wb3J0IHsgRUFOUmVhZGVyIH0gZnJvbSAnLi9lYW4tcmVhZGVyJztcblxuZXhwb3J0IGNsYXNzIEVBTjJSZWFkZXIgZXh0ZW5kcyBFQU5SZWFkZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZz86IEJhcmNvZGVSZWFkZXJDb25maWcsIHN1cHBsZW1lbnRzPzogQXJyYXk8QmFyY29kZVJlYWRlcj4pIHtcbiAgICAgICAgc3VwZXIoY29uZmlnLCBzdXBwbGVtZW50cyk7XG5cbiAgICAgICAgdGhpcy5fZm9ybWF0ID0gJ2Vhbl8yJztcbiAgICB9XG5cbiAgICBkZWNvZGUocm93PzogQXJyYXk8bnVtYmVyPiwgc3RhcnQ/OiBudW1iZXIpOiBCYXJjb2RlIHtcbiAgICAgICAgY29uc3QgZW5kID0gcm93Lmxlbmd0aDtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEFycmF5PG51bWJlcj4oKTtcbiAgICAgICAgY29uc3QgZGVjb2RlZENvZGVzID0gbmV3IEFycmF5PEJhcmNvZGVJbmZvPigpO1xuICAgICAgICBsZXQgb2Zmc2V0ID0gc3RhcnQ7XG4gICAgICAgIGxldCBjb2RlRnJlcXVlbmN5ID0gMDtcbiAgICAgICAgbGV0IGNvZGU6IEJhcmNvZGVJbmZvO1xuXG4gICAgICAgIHRoaXMuX3JvdyA9IHJvdztcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDIgJiYgb2Zmc2V0IDwgZW5kOyBpKyspIHtcbiAgICAgICAgICAgIGNvZGUgPSB0aGlzLl9kZWNvZGVDb2RlKG9mZnNldCk7XG4gICAgICAgICAgICBpZiAoIWNvZGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlY29kZWRDb2Rlcy5wdXNoKGNvZGUpO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goY29kZS5jb2RlICUgMTApO1xuICAgICAgICAgICAgaWYgKGNvZGUuY29kZSA+PSB0aGlzLkNPREVfR19TVEFSVCkge1xuICAgICAgICAgICAgICAgIGNvZGVGcmVxdWVuY3kgfD0gMSA8PCAoMSAtIGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGkgIT09IDEpIHtcbiAgICAgICAgICAgICAgICBvZmZzZXQgPSB0aGlzLl9uZXh0U2V0KHRoaXMuX3JvdywgY29kZS5lbmQpO1xuICAgICAgICAgICAgICAgIG9mZnNldCA9IHRoaXMuX25leHRVbnNldCh0aGlzLl9yb3csIG9mZnNldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVzdWx0Lmxlbmd0aCAhPT0gMiB8fCAocGFyc2VJbnQocmVzdWx0LmpvaW4oJycpKSAlIDQpICE9PSBjb2RlRnJlcXVlbmN5KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb2RlOiByZXN1bHQuam9pbignJyksXG4gICAgICAgICAgICBkZWNvZGVkQ29kZXMsXG4gICAgICAgICAgICBlbmQ6IGNvZGUuZW5kXG4gICAgICAgIH07XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQmFyY29kZSwgQmFyY29kZUluZm8sIEJhcmNvZGVSZWFkZXIsIEJhcmNvZGVSZWFkZXJDb25maWcgfSBmcm9tICcuL2JhcmNvZGUtcmVhZGVyJztcbmltcG9ydCB7IEVBTlJlYWRlciB9IGZyb20gJy4vZWFuLXJlYWRlcic7XG5cbmV4cG9ydCBjbGFzcyBFQU41UmVhZGVyIGV4dGVuZHMgRUFOUmVhZGVyIHtcbiAgICBnZXQgQ0hFQ0tfRElHSVRfRU5DT0RJTkdTKCk6IEFycmF5PG51bWJlcj4ge1xuICAgICAgICByZXR1cm4gWzI0LCAyMCwgMTgsIDE3LCAxMiwgNiwgMywgMTAsIDksIDVdO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZz86IEJhcmNvZGVSZWFkZXJDb25maWcsIHN1cHBsZW1lbnRzPzogQXJyYXk8QmFyY29kZVJlYWRlcj4pIHtcbiAgICAgICAgc3VwZXIoY29uZmlnLCBzdXBwbGVtZW50cyk7XG5cbiAgICAgICAgdGhpcy5fZm9ybWF0ID0gJ2Vhbl81JztcbiAgICB9XG5cbiAgICBkZWNvZGUocm93PzogQXJyYXk8bnVtYmVyPiwgc3RhcnQ/OiBudW1iZXIpOiBCYXJjb2RlIHtcbiAgICAgICAgY29uc3QgZW5kID0gcm93Lmxlbmd0aDtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEFycmF5PG51bWJlcj4oKTtcbiAgICAgICAgY29uc3QgZGVjb2RlZENvZGVzID0gbmV3IEFycmF5PEJhcmNvZGVJbmZvPigpO1xuICAgICAgICBsZXQgY29kZUZyZXF1ZW5jeSA9IDA7XG4gICAgICAgIGxldCBvZmZzZXQgPSBzdGFydDtcbiAgICAgICAgbGV0IGNvZGU6IEJhcmNvZGVJbmZvO1xuXG4gICAgICAgIHRoaXMuX3JvdyA9IHJvdztcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDUgJiYgb2Zmc2V0IDwgZW5kOyBpKyspIHtcbiAgICAgICAgICAgIGNvZGUgPSB0aGlzLl9kZWNvZGVDb2RlKG9mZnNldCk7XG4gICAgICAgICAgICBpZiAoIWNvZGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlY29kZWRDb2Rlcy5wdXNoKGNvZGUpO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goY29kZS5jb2RlICUgMTApO1xuICAgICAgICAgICAgaWYgKGNvZGUuY29kZSA+PSB0aGlzLkNPREVfR19TVEFSVCkge1xuICAgICAgICAgICAgICAgIGNvZGVGcmVxdWVuY3kgfD0gMSA8PCAoNCAtIGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGkgIT09IDQpIHtcbiAgICAgICAgICAgICAgICBvZmZzZXQgPSB0aGlzLl9uZXh0U2V0KHRoaXMuX3JvdywgY29kZS5lbmQpO1xuICAgICAgICAgICAgICAgIG9mZnNldCA9IHRoaXMuX25leHRVbnNldCh0aGlzLl9yb3csIG9mZnNldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVzdWx0Lmxlbmd0aCAhPT0gNSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fZXh0ZW5zaW9uQ2hlY2tzdW0ocmVzdWx0KSAhPT0gdGhpcy5fZGV0ZXJtaW5lQ2hlY2tEaWdpdChjb2RlRnJlcXVlbmN5KSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29kZTogcmVzdWx0LmpvaW4oJycpLFxuICAgICAgICAgICAgZGVjb2RlZENvZGVzLFxuICAgICAgICAgICAgZW5kOiBjb2RlLmVuZFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHByaXZhdGUgX2RldGVybWluZUNoZWNrRGlnaXQoY29kZUZyZXF1ZW5jeTogbnVtYmVyKTogbnVtYmVyIHwgbnVsbCB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgaWYgKGNvZGVGcmVxdWVuY3kgPT09IHRoaXMuQ0hFQ0tfRElHSVRfRU5DT0RJTkdTW2ldKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZXh0ZW5zaW9uQ2hlY2tzdW0ocmVzdWx0OiBBcnJheTxudW1iZXI+KTogbnVtYmVyIHtcbiAgICAgICAgbGV0IGxlbmd0aCA9IHJlc3VsdC5sZW5ndGg7XG4gICAgICAgIGxldCBzdW0gPSAwO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSBsZW5ndGggLSAyOyBpID49IDA7IGkgLT0gMikge1xuICAgICAgICAgICAgc3VtICs9IHJlc3VsdFtpXTtcbiAgICAgICAgfVxuICAgICAgICBzdW0gKj0gMztcbiAgICAgICAgZm9yIChsZXQgaSA9IGxlbmd0aCAtIDE7IGkgPj0gMDsgaSAtPSAyKSB7XG4gICAgICAgICAgICBzdW0gKz0gcmVzdWx0W2ldO1xuICAgICAgICB9XG4gICAgICAgIHN1bSAqPSAzO1xuXG4gICAgICAgIHJldHVybiBzdW0gJSAxMDtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBCYXJjb2RlSW5mbywgQmFyY29kZVJlYWRlciwgQmFyY29kZVJlYWRlckNvbmZpZyB9IGZyb20gJy4vYmFyY29kZS1yZWFkZXInO1xuaW1wb3J0IHsgRUFOUmVhZGVyIH0gZnJvbSAnLi9lYW4tcmVhZGVyJztcblxuZXhwb3J0IGNsYXNzIEVBTjhSZWFkZXIgZXh0ZW5kcyBFQU5SZWFkZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZz86IEJhcmNvZGVSZWFkZXJDb25maWcsIHN1cHBsZW1lbnRzPzogQXJyYXk8QmFyY29kZVJlYWRlcj4pIHtcbiAgICAgICAgc3VwZXIoY29uZmlnLCBzdXBwbGVtZW50cyk7XG5cbiAgICAgICAgdGhpcy5fZm9ybWF0ID0gJ2Vhbl84JztcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2RlY29kZVBheWxvYWQoY29kZTogQmFyY29kZUluZm8sIHJlc3VsdDogQXJyYXk8bnVtYmVyPiwgZGVjb2RlZENvZGVzOiBBcnJheTxCYXJjb2RlSW5mbz4pOiBCYXJjb2RlSW5mbyB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgICAgICBjb2RlID0gdGhpcy5fZGVjb2RlQ29kZShjb2RlLmVuZCwgdGhpcy5DT0RFX0dfU1RBUlQpO1xuICAgICAgICAgICAgaWYgKCFjb2RlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaChjb2RlLmNvZGUpO1xuICAgICAgICAgICAgZGVjb2RlZENvZGVzLnB1c2goY29kZSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb2RlID0gdGhpcy5fZmluZFBhdHRlcm4odGhpcy5NSURETEVfUEFUVEVSTiwgY29kZS5lbmQsIDEsIGZhbHNlKTtcblxuICAgICAgICBpZiAoY29kZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBkZWNvZGVkQ29kZXMucHVzaChjb2RlKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICAgICAgY29kZSA9IHRoaXMuX2RlY29kZUNvZGUoY29kZS5lbmQsIHRoaXMuQ09ERV9HX1NUQVJUKTtcblxuICAgICAgICAgICAgaWYgKCFjb2RlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRlY29kZWRDb2Rlcy5wdXNoKGNvZGUpO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goY29kZS5jb2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb2RlO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IG1lcmdlIH0gZnJvbSAnLi4vY29tbW9uL21lcmdlJztcbmltcG9ydCB7IEJhcmNvZGUsIEJhcmNvZGVJbmZvLCBCYXJjb2RlUmVhZGVyLCBCYXJjb2RlUmVhZGVyQ29uZmlnIH0gZnJvbSAnLi9iYXJjb2RlLXJlYWRlcic7XG5cbmNvbnN0IEVYVEVOU0lPTl9TVEFSVF9QQVRURVJOID0gWzEsIDEsIDJdO1xuY29uc3QgQ09ERV9QQVRURVJOID0gW1xuICAgIFszLCAyLCAxLCAxXSxcbiAgICBbMiwgMiwgMiwgMV0sXG4gICAgWzIsIDEsIDIsIDJdLFxuICAgIFsxLCA0LCAxLCAxXSxcbiAgICBbMSwgMSwgMywgMl0sXG4gICAgWzEsIDIsIDMsIDFdLFxuICAgIFsxLCAxLCAxLCA0XSxcbiAgICBbMSwgMywgMSwgMl0sXG4gICAgWzEsIDIsIDEsIDNdLFxuICAgIFszLCAxLCAxLCAyXSxcbiAgICBbMSwgMSwgMiwgM10sXG4gICAgWzEsIDIsIDIsIDJdLFxuICAgIFsyLCAyLCAxLCAyXSxcbiAgICBbMSwgMSwgNCwgMV0sXG4gICAgWzIsIDMsIDEsIDFdLFxuICAgIFsxLCAzLCAyLCAxXSxcbiAgICBbNCwgMSwgMSwgMV0sXG4gICAgWzIsIDEsIDMsIDFdLFxuICAgIFszLCAxLCAyLCAxXSxcbiAgICBbMiwgMSwgMSwgM11cbl07XG5jb25zdCBDT0RFX0ZSRVFVRU5DWSA9IFswLCAxMSwgMTMsIDE0LCAxOSwgMjUsIDI4LCAyMSwgMjIsIDI2XTtcblxuZXhwb3J0IGNsYXNzIEVBTlJlYWRlciBleHRlbmRzIEJhcmNvZGVSZWFkZXIge1xuICAgIGdldCBDT0RFX0xfU1RBUlQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgZ2V0IENPREVfR19TVEFSVCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gMTA7XG4gICAgfVxuXG4gICAgZ2V0IFNUQVJUX1BBVFRFUk4oKTogQXJyYXk8bnVtYmVyPiB7XG4gICAgICAgIHJldHVybiBbMSwgMSwgMV07XG4gICAgfVxuXG4gICAgZ2V0IFNUT1BfUEFUVEVSTigpOiBBcnJheTxudW1iZXI+IHtcbiAgICAgICAgcmV0dXJuIFsxLCAxLCAxXTtcbiAgICB9XG5cbiAgICBnZXQgTUlERExFX1BBVFRFUk4oKTogQXJyYXk8bnVtYmVyPiB7XG4gICAgICAgIHJldHVybiBbMSwgMSwgMSwgMSwgMV07XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoY29uZmlnPzogQmFyY29kZVJlYWRlckNvbmZpZywgc3VwcGxlbWVudHM/OiBBcnJheTxCYXJjb2RlUmVhZGVyPikge1xuICAgICAgICBzdXBlcihtZXJnZSh7XG4gICAgICAgICAgICBzdXBwbGVtZW50czogW10gLy8gQWxsb3dlZCBleHRlbnNpb25zIHRvIGJlIGRlY29kZWQgKDIgYW5kL29yIDUpXG4gICAgICAgIH0sIGNvbmZpZyksIHN1cHBsZW1lbnRzKTtcblxuICAgICAgICB0aGlzLl9mb3JtYXQgPSAnZWFuXzEzJztcbiAgICAgICAgdGhpcy5fc2luZ2xlQ29kZUVycm9yID0gMC43MDtcbiAgICAgICAgdGhpcy5fYXZlcmFnZUNvZGVFcnJvciA9IDAuNDg7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9kZWNvZGVDb2RlKHN0YXJ0OiBudW1iZXIsIGNvZGVyYW5nZT86IG51bWJlcik6IEJhcmNvZGVJbmZvIHtcbiAgICAgICAgY29uc3QgY291bnRlciA9IFswLCAwLCAwLCAwXTtcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gc3RhcnQ7XG4gICAgICAgIGNvbnN0IGJlc3RNYXRjaDogQmFyY29kZUluZm8gPSB7XG4gICAgICAgICAgICBlcnJvcjogTnVtYmVyLk1BWF9WQUxVRSxcbiAgICAgICAgICAgIGNvZGU6IC0xLFxuICAgICAgICAgICAgc3RhcnQ6IHN0YXJ0LFxuICAgICAgICAgICAgZW5kOiBzdGFydFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBlcHNpbG9uID0gdGhpcy5BVkVSQUdFX0NPREVfRVJST1I7XG4gICAgICAgIGxldCBpc1doaXRlOiAwIHwgMSA9IHRoaXMuX3Jvd1tvZmZzZXRdID8gMCA6IDE7XG4gICAgICAgIGxldCBjb3VudGVyUG9zID0gMDtcblxuICAgICAgICBpZiAoIWNvZGVyYW5nZSkge1xuICAgICAgICAgICAgY29kZXJhbmdlID0gQ09ERV9QQVRURVJOLmxlbmd0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSBvZmZzZXQ7IGkgPCB0aGlzLl9yb3cubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9yb3dbaV0gXiBpc1doaXRlKSB7XG4gICAgICAgICAgICAgICAgY291bnRlcltjb3VudGVyUG9zXSsrO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoY291bnRlclBvcyA9PT0gY291bnRlci5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGNvZGUgPSAwOyBjb2RlIDwgY29kZXJhbmdlOyBjb2RlKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yID0gdGhpcy5fbWF0Y2hQYXR0ZXJuKGNvdW50ZXIsIENPREVfUEFUVEVSTltjb2RlXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IgPCBiZXN0TWF0Y2guZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZXN0TWF0Y2guY29kZSA9IGNvZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVzdE1hdGNoLmVycm9yID0gZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYmVzdE1hdGNoLmVuZCA9IGk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChiZXN0TWF0Y2guZXJyb3IgPiBlcHNpbG9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYmVzdE1hdGNoO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXJQb3MrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY291bnRlcltjb3VudGVyUG9zXSA9IDE7XG4gICAgICAgICAgICAgICAgaXNXaGl0ZSA9IGlzV2hpdGUgPyAwIDogMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZmluZFN0YXJ0KCk6IEJhcmNvZGVJbmZvIHtcbiAgICAgICAgbGV0IG9mZnNldCA9IHRoaXMuX25leHRTZXQodGhpcy5fcm93KTtcbiAgICAgICAgbGV0IHN0YXJ0SW5mbzogQmFyY29kZUluZm87XG5cbiAgICAgICAgd2hpbGUgKCFzdGFydEluZm8pIHtcbiAgICAgICAgICAgIHN0YXJ0SW5mbyA9IHRoaXMuX2ZpbmRQYXR0ZXJuKHRoaXMuU1RBUlRfUEFUVEVSTiwgb2Zmc2V0LCAwLCB0cnVlKTtcblxuICAgICAgICAgICAgaWYgKCFzdGFydEluZm8pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgbGVhZGluZ1doaXRlc3BhY2VTdGFydCA9IHN0YXJ0SW5mby5zdGFydCAtIChzdGFydEluZm8uZW5kIC0gc3RhcnRJbmZvLnN0YXJ0KTtcblxuICAgICAgICAgICAgaWYgKGxlYWRpbmdXaGl0ZXNwYWNlU3RhcnQgPj0gMCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9tYXRjaFJhbmdlKGxlYWRpbmdXaGl0ZXNwYWNlU3RhcnQsIHN0YXJ0SW5mby5zdGFydCwgMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0YXJ0SW5mbztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG9mZnNldCA9IHN0YXJ0SW5mby5lbmQ7XG4gICAgICAgICAgICBzdGFydEluZm8gPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF92ZXJpZnlUcmFpbGluZ1doaXRlc3BhY2UoZW5kSW5mbzogQmFyY29kZUluZm8pOiBCYXJjb2RlSW5mbyB7XG4gICAgICAgIGNvbnN0IHRyYWlsaW5nV2hpdGVzcGFjZUVuZCA9IGVuZEluZm8uZW5kICsgKGVuZEluZm8uZW5kIC0gZW5kSW5mby5zdGFydCk7XG5cbiAgICAgICAgaWYgKHRyYWlsaW5nV2hpdGVzcGFjZUVuZCA8IHRoaXMuX3Jvdy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9tYXRjaFJhbmdlKGVuZEluZm8uZW5kLCB0cmFpbGluZ1doaXRlc3BhY2VFbmQsIDApKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVuZEluZm87XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2ZpbmRFbmQob2Zmc2V0OiBudW1iZXIsIGlzV2hpdGU6IDAgfCAxKTogQmFyY29kZUluZm8ge1xuICAgICAgICBjb25zdCBlbmRJbmZvID0gdGhpcy5fZmluZFBhdHRlcm4odGhpcy5TVE9QX1BBVFRFUk4sIG9mZnNldCwgaXNXaGl0ZSwgZmFsc2UpO1xuXG4gICAgICAgIHJldHVybiBlbmRJbmZvICE9PSBudWxsID8gdGhpcy5fdmVyaWZ5VHJhaWxpbmdXaGl0ZXNwYWNlKGVuZEluZm8pIDogbnVsbDtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9jYWxjdWxhdGVGaXJzdERpZ2l0KGNvZGVGcmVxdWVuY3k6IG51bWJlcik6IG51bWJlciB8IG51bGwge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IENPREVfRlJFUVVFTkNZLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoY29kZUZyZXF1ZW5jeSA9PT0gQ09ERV9GUkVRVUVOQ1lbaV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2RlY29kZVBheWxvYWQoY29kZTogQmFyY29kZUluZm8sIHJlc3VsdDogQXJyYXk8bnVtYmVyPiwgZGVjb2RlZENvZGVzOiBBcnJheTxCYXJjb2RlSW5mbz4pOiBCYXJjb2RlSW5mbyB7XG4gICAgICAgIGxldCBjb2RlRnJlcXVlbmN5ID0gMHgwO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gICAgICAgICAgICBjb2RlID0gdGhpcy5fZGVjb2RlQ29kZShjb2RlLmVuZCk7XG4gICAgICAgICAgICBpZiAoIWNvZGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb2RlLmNvZGUgPj0gdGhpcy5DT0RFX0dfU1RBUlQpIHtcbiAgICAgICAgICAgICAgICBjb2RlLmNvZGUgLT0gdGhpcy5DT0RFX0dfU1RBUlQ7XG4gICAgICAgICAgICAgICAgY29kZUZyZXF1ZW5jeSB8PSAxIDw8ICg1IC0gaSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvZGVGcmVxdWVuY3kgfD0gMCA8PCAoNSAtIGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goY29kZS5jb2RlKTtcbiAgICAgICAgICAgIGRlY29kZWRDb2Rlcy5wdXNoKGNvZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZmlyc3REaWdpdCA9IHRoaXMuX2NhbGN1bGF0ZUZpcnN0RGlnaXQoY29kZUZyZXF1ZW5jeSk7XG5cbiAgICAgICAgaWYgKGZpcnN0RGlnaXQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzdWx0LnVuc2hpZnQoZmlyc3REaWdpdCk7XG5cbiAgICAgICAgY29kZSA9IHRoaXMuX2ZpbmRQYXR0ZXJuKHRoaXMuTUlERExFX1BBVFRFUk4sIGNvZGUuZW5kLCAxLCBmYWxzZSk7XG5cbiAgICAgICAgaWYgKGNvZGUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVjb2RlZENvZGVzLnB1c2goY29kZSk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICAgICAgICAgIGNvZGUgPSB0aGlzLl9kZWNvZGVDb2RlKGNvZGUuZW5kLCB0aGlzLkNPREVfR19TVEFSVCk7XG5cbiAgICAgICAgICAgIGlmICghY29kZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkZWNvZGVkQ29kZXMucHVzaChjb2RlKTtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGNvZGUuY29kZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29kZTtcbiAgICB9XG5cbiAgICBkZWNvZGUoKTogQmFyY29kZSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBBcnJheTxudW1iZXI+KCk7XG4gICAgICAgIGNvbnN0IGRlY29kZWRDb2RlcyA9IG5ldyBBcnJheTxCYXJjb2RlSW5mbz4oKTtcbiAgICAgICAgbGV0IHJlc3VsdEluZm86IEJhcmNvZGUgPSB7fTtcbiAgICAgICAgbGV0IHN0YXJ0SW5mbyA9IHRoaXMuX2ZpbmRTdGFydCgpO1xuXG4gICAgICAgIGlmICghc3RhcnRJbmZvKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjb2RlOiBCYXJjb2RlSW5mbyA9IHtcbiAgICAgICAgICAgIGNvZGU6IHN0YXJ0SW5mby5jb2RlLFxuICAgICAgICAgICAgc3RhcnQ6IHN0YXJ0SW5mby5zdGFydCxcbiAgICAgICAgICAgIGVuZDogc3RhcnRJbmZvLmVuZFxuICAgICAgICB9O1xuICAgICAgICBkZWNvZGVkQ29kZXMucHVzaChjb2RlKTtcblxuICAgICAgICBjb2RlID0gdGhpcy5fZGVjb2RlUGF5bG9hZChjb2RlLCByZXN1bHQsIGRlY29kZWRDb2Rlcyk7XG5cbiAgICAgICAgaWYgKCFjb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvZGUgPSB0aGlzLl9maW5kRW5kKGNvZGUuZW5kLCAwKTtcblxuICAgICAgICBpZiAoIWNvZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVjb2RlZENvZGVzLnB1c2goY29kZSk7XG5cbiAgICAgICAgLy8gQ2hlY2tzdW1cbiAgICAgICAgaWYgKCF0aGlzLl9jaGVja3N1bShyZXN1bHQpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnN1cHBsZW1lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHN1cHBsZW1lbnQgPSB0aGlzLl9kZWNvZGVFeHRlbnNpb25zKGNvZGUuZW5kKTtcbiAgICAgICAgICAgIGlmICghc3VwcGxlbWVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBsYXN0Q29kZSA9IHN1cHBsZW1lbnQuZGVjb2RlZENvZGVzW3N1cHBsZW1lbnQuZGVjb2RlZENvZGVzLmxlbmd0aCAtIDFdIGFzIEJhcmNvZGVJbmZvO1xuICAgICAgICAgICAgY29uc3QgZW5kSW5mbyA9IHtcbiAgICAgICAgICAgICAgICBzdGFydDogbGFzdENvZGUuc3RhcnQgKyAoKChsYXN0Q29kZS5lbmQgLSBsYXN0Q29kZS5zdGFydCkgLyAyKSB8IDApLFxuICAgICAgICAgICAgICAgIGVuZDogbGFzdENvZGUuZW5kXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpZiAoIXRoaXMuX3ZlcmlmeVRyYWlsaW5nV2hpdGVzcGFjZShlbmRJbmZvKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXN1bHRJbmZvID0ge1xuICAgICAgICAgICAgICAgIHN1cHBsZW1lbnQsXG4gICAgICAgICAgICAgICAgY29kZTogcmVzdWx0LmpvaW4oJycpICsgc3VwcGxlbWVudC5jb2RlXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvZGU6IHJlc3VsdC5qb2luKCcnKSxcbiAgICAgICAgICAgIHN0YXJ0OiBzdGFydEluZm8uc3RhcnQsXG4gICAgICAgICAgICBlbmQ6IGNvZGUuZW5kLFxuICAgICAgICAgICAgc3RhcnRJbmZvLFxuICAgICAgICAgICAgZGVjb2RlZENvZGVzLFxuICAgICAgICAgICAgLi4ucmVzdWx0SW5mb1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHByaXZhdGUgX2RlY29kZUV4dGVuc2lvbnMob2Zmc2V0OiBudW1iZXIpOiBCYXJjb2RlIHtcbiAgICAgICAgY29uc3Qgc3RhcnQgPSB0aGlzLl9uZXh0U2V0KHRoaXMuX3Jvdywgb2Zmc2V0KTtcbiAgICAgICAgY29uc3Qgc3RhcnRJbmZvID0gdGhpcy5fZmluZFBhdHRlcm4oRVhURU5TSU9OX1NUQVJUX1BBVFRFUk4sIHN0YXJ0LCAwLCBmYWxzZSk7XG5cbiAgICAgICAgaWYgKHN0YXJ0SW5mbyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3VwcGxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSB0aGlzLnN1cHBsZW1lbnRzW2ldLmRlY29kZSh0aGlzLl9yb3csIHN0YXJ0SW5mby5lbmQpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGNvZGU6IHJlc3VsdC5jb2RlLFxuICAgICAgICAgICAgICAgICAgICBzdGFydCxcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRJbmZvLFxuICAgICAgICAgICAgICAgICAgICBlbmQ6IHJlc3VsdC5lbmQsXG4gICAgICAgICAgICAgICAgICAgIGRlY29kZWRDb2RlczogcmVzdWx0LmRlY29kZWRDb2Rlc1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2NoZWNrc3VtKHJlc3VsdDogQXJyYXk8bnVtYmVyPik6IGJvb2xlYW4ge1xuICAgICAgICBsZXQgc3VtID0gMDtcblxuICAgICAgICBmb3IgKGxldCBpID0gcmVzdWx0Lmxlbmd0aCAtIDI7IGkgPj0gMDsgaSAtPSAyKSB7XG4gICAgICAgICAgICBzdW0gKz0gcmVzdWx0W2ldO1xuICAgICAgICB9XG5cbiAgICAgICAgc3VtICo9IDM7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IHJlc3VsdC5sZW5ndGggLSAxOyBpID49IDA7IGkgLT0gMikge1xuICAgICAgICAgICAgc3VtICs9IHJlc3VsdFtpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdW0gJSAxMCA9PT0gMDtcbiAgICB9XG59IiwiaW1wb3J0IHsgbWVyZ2UgfSBmcm9tICcuLi9jb21tb24vbWVyZ2UnO1xuaW1wb3J0IHsgQmFyY29kZSwgQmFyY29kZUluZm8sIEJhcmNvZGVSZWFkZXIsIEJhcmNvZGVSZWFkZXJDb25maWcgfSBmcm9tICcuL2JhcmNvZGUtcmVhZGVyJztcblxuY29uc3QgTiA9IDE7XG5jb25zdCBXID0gMztcbmNvbnN0IFNUQVJUX1BBVFRFUk4gPSBbTiwgTiwgTiwgTl07XG5jb25zdCBTVE9QX1BBVFRFUk4gPSBbTiwgTiwgV107XG5jb25zdCBDT0RFX1BBVFRFUk4gPSBbXG4gICAgW04sIE4sIFcsIFcsIE5dLFxuICAgIFtXLCBOLCBOLCBOLCBXXSxcbiAgICBbTiwgVywgTiwgTiwgV10sXG4gICAgW1csIFcsIE4sIE4sIE5dLFxuICAgIFtOLCBOLCBXLCBOLCBXXSxcbiAgICBbVywgTiwgVywgTiwgTl0sXG4gICAgW04sIFcsIFcsIE4sIE5dLFxuICAgIFtOLCBOLCBOLCBXLCBXXSxcbiAgICBbVywgTiwgTiwgVywgTl0sXG4gICAgW04sIFcsIE4sIFcsIE5dXG5dO1xuY29uc3QgTUFYX0NPUlJFQ1RJT05fRkFDVE9SID0gNTtcblxuZXhwb3J0IGNsYXNzIEkyb2Y1UmVhZGVyIGV4dGVuZHMgQmFyY29kZVJlYWRlciB7XG4gICAgcHJpdmF0ZSBfYmFyU3BhY2VSYXRpbzogW251bWJlciwgbnVtYmVyXTtcblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZz86IEJhcmNvZGVSZWFkZXJDb25maWcpIHtcbiAgICAgICAgc3VwZXIobWVyZ2Uoe1xuICAgICAgICAgICAgbm9ybWFsaXplQmFyU3BhY2VXaWR0aDogZmFsc2UgLy8gTm9ybWFsaXplIHRoZSB3aWR0aCBkaWZmZXJlbmNlIGJldHdlZW4gYmFycyBhbmQgc3BhY2VzXG4gICAgICAgIH0sIGNvbmZpZykpO1xuXG4gICAgICAgIHRoaXMuX2JhclNwYWNlUmF0aW8gPSBbMSwgMV07XG4gICAgICAgIHRoaXMuX2Zvcm1hdCA9ICdpMm9mNSc7XG5cbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLm5vcm1hbGl6ZUJhclNwYWNlV2lkdGgpIHtcbiAgICAgICAgICAgIHRoaXMuX3NpbmdsZUNvZGVFcnJvciA9IDAuMzg7XG4gICAgICAgICAgICB0aGlzLl9hdmVyYWdlQ29kZUVycm9yID0gMC4wOTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3NpbmdsZUNvZGVFcnJvciA9IDAuNzg7XG4gICAgICAgICAgICB0aGlzLl9hdmVyYWdlQ29kZUVycm9yID0gMC4zODtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRlY29kZSgpOiBCYXJjb2RlIHtcbiAgICAgICAgY29uc3Qgc3RhcnRJbmZvID0gdGhpcy5fZmluZFN0YXJ0KCk7XG5cbiAgICAgICAgaWYgKCFzdGFydEluZm8pIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZW5kSW5mbyA9IHRoaXMuX2ZpbmRFbmQoKTtcblxuICAgICAgICBpZiAoIWVuZEluZm8pIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY291bnRlcnMgPSB0aGlzLl9maWxsQ291bnRlcnMoc3RhcnRJbmZvLmVuZCwgZW5kSW5mby5zdGFydCwgMCk7XG5cbiAgICAgICAgaWYgKGNvdW50ZXJzLmxlbmd0aCAlIDEwICE9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBBcnJheTxudW1iZXI+KCk7XG4gICAgICAgIGNvbnN0IGRlY29kZWRDb2RlcyA9IG5ldyBBcnJheTxCYXJjb2RlSW5mbz4oKTtcblxuICAgICAgICBkZWNvZGVkQ29kZXMucHVzaChzdGFydEluZm8pO1xuXG4gICAgICAgIGNvbnN0IGNvZGUgPSB0aGlzLl9kZWNvZGVQYXlsb2FkKGNvdW50ZXJzLCByZXN1bHQsIGRlY29kZWRDb2Rlcyk7XG5cbiAgICAgICAgaWYgKCFjb2RlIHx8IHJlc3VsdC5sZW5ndGggJSAyICE9PSAwIHx8IHJlc3VsdC5sZW5ndGggPCA2KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlY29kZWRDb2Rlcy5wdXNoKGVuZEluZm8pO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb2RlOiByZXN1bHQuam9pbignJyksXG4gICAgICAgICAgICBzdGFydDogc3RhcnRJbmZvLnN0YXJ0LFxuICAgICAgICAgICAgZW5kOiBlbmRJbmZvLmVuZCxcbiAgICAgICAgICAgIHN0YXJ0SW5mbyxcbiAgICAgICAgICAgIGRlY29kZWRDb2Rlc1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfbWF0Y2hQYXR0ZXJuKGNvdW50ZXI6IEFycmF5PG51bWJlcj4sIGNvZGU6IFJlYWRvbmx5QXJyYXk8bnVtYmVyPik6IG51bWJlciB7XG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5ub3JtYWxpemVCYXJTcGFjZVdpZHRoKSB7XG4gICAgICAgICAgICBjb25zdCBjb3VudGVyU3VtOiBbbnVtYmVyLCBudW1iZXJdID0gWzAsIDBdO1xuICAgICAgICAgICAgY29uc3QgY29kZVN1bTogW251bWJlciwgbnVtYmVyXSA9IFswLCAwXTtcbiAgICAgICAgICAgIGNvbnN0IGNvcnJlY3Rpb246IFtudW1iZXIsIG51bWJlcl0gPSBbMCwgMF07XG4gICAgICAgICAgICBjb25zdCBjb3JyZWN0aW9uUmF0aW8gPSBNQVhfQ09SUkVDVElPTl9GQUNUT1I7XG4gICAgICAgICAgICBjb25zdCBjb3JyZWN0aW9uUmF0aW9JbnZlcnNlID0gMSAvIGNvcnJlY3Rpb25SYXRpbztcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY291bnRlclN1bVtpICUgMl0gKz0gY291bnRlcltpXTtcbiAgICAgICAgICAgICAgICBjb2RlU3VtW2kgJSAyXSArPSBjb2RlW2ldO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb3JyZWN0aW9uWzBdID0gY29kZVN1bVswXSAvIGNvdW50ZXJTdW1bMF07XG4gICAgICAgICAgICBjb3JyZWN0aW9uWzFdID0gY29kZVN1bVsxXSAvIGNvdW50ZXJTdW1bMV07XG5cbiAgICAgICAgICAgIGNvcnJlY3Rpb25bMF0gPSBNYXRoLm1heChNYXRoLm1pbihjb3JyZWN0aW9uWzBdLCBjb3JyZWN0aW9uUmF0aW8pLCBjb3JyZWN0aW9uUmF0aW9JbnZlcnNlKTtcbiAgICAgICAgICAgIGNvcnJlY3Rpb25bMV0gPSBNYXRoLm1heChNYXRoLm1pbihjb3JyZWN0aW9uWzFdLCBjb3JyZWN0aW9uUmF0aW8pLCBjb3JyZWN0aW9uUmF0aW9JbnZlcnNlKTtcbiAgICAgICAgICAgIHRoaXMuX2JhclNwYWNlUmF0aW8gPSBjb3JyZWN0aW9uO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50ZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb3VudGVyW2ldICo9IHRoaXMuX2JhclNwYWNlUmF0aW9baSAlIDJdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1cGVyLl9tYXRjaFBhdHRlcm4oY291bnRlciwgY29kZSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9maW5kU3RhcnQoKTogQmFyY29kZUluZm8ge1xuICAgICAgICBsZXQgb2Zmc2V0ID0gdGhpcy5fbmV4dFNldCh0aGlzLl9yb3cpO1xuICAgICAgICBsZXQgc3RhcnRJbmZvOiBCYXJjb2RlSW5mbztcblxuICAgICAgICB3aGlsZSAoIXN0YXJ0SW5mbykge1xuICAgICAgICAgICAgc3RhcnRJbmZvID0gdGhpcy5fZmluZFBhdHRlcm4oU1RBUlRfUEFUVEVSTiwgb2Zmc2V0LCAwLCB0cnVlKTtcbiAgICAgICAgICAgIGlmICghc3RhcnRJbmZvKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IG5hcnJvd0JhcldpZHRoID0gKHN0YXJ0SW5mby5lbmQgLSBzdGFydEluZm8uc3RhcnQpID4+IDI7XG4gICAgICAgICAgICBjb25zdCBsZWFkaW5nV2hpdGVzcGFjZVN0YXJ0ID0gc3RhcnRJbmZvLnN0YXJ0IC0gbmFycm93QmFyV2lkdGggKiAxMDtcblxuICAgICAgICAgICAgaWYgKGxlYWRpbmdXaGl0ZXNwYWNlU3RhcnQgPj0gMCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9tYXRjaFJhbmdlKGxlYWRpbmdXaGl0ZXNwYWNlU3RhcnQsIHN0YXJ0SW5mby5zdGFydCwgMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0YXJ0SW5mbztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG9mZnNldCA9IHN0YXJ0SW5mby5lbmQ7XG4gICAgICAgICAgICBzdGFydEluZm8gPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF92ZXJpZnlUcmFpbGluZ1doaXRlc3BhY2UoZW5kSW5mbzogQmFyY29kZUluZm8pOiBCYXJjb2RlSW5mbyB7XG4gICAgICAgIGNvbnN0IHRyYWlsaW5nV2hpdGVzcGFjZUVuZCA9IGVuZEluZm8uZW5kICsgKGVuZEluZm8uZW5kIC0gZW5kSW5mby5zdGFydCkgLyAyO1xuXG4gICAgICAgIGlmICh0cmFpbGluZ1doaXRlc3BhY2VFbmQgPCB0aGlzLl9yb3cubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fbWF0Y2hSYW5nZShlbmRJbmZvLmVuZCwgdHJhaWxpbmdXaGl0ZXNwYWNlRW5kLCAwKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbmRJbmZvO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9maW5kRW5kKCk6IEJhcmNvZGVJbmZvIHtcbiAgICAgICAgdGhpcy5fcm93LnJldmVyc2UoKTtcblxuICAgICAgICBjb25zdCBlbmRJbmZvID0gdGhpcy5fZmluZFBhdHRlcm4oU1RPUF9QQVRURVJOLCB1bmRlZmluZWQsIDAsIGZhbHNlKTtcblxuICAgICAgICB0aGlzLl9yb3cucmV2ZXJzZSgpO1xuXG4gICAgICAgIGlmIChlbmRJbmZvID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHJldmVyc2UgbnVtYmVyc1xuICAgICAgICBjb25zdCBzdGFydCA9IGVuZEluZm8uc3RhcnQ7XG4gICAgICAgIGVuZEluZm8uc3RhcnQgPSB0aGlzLl9yb3cubGVuZ3RoIC0gZW5kSW5mby5lbmQ7XG4gICAgICAgIGVuZEluZm8uZW5kID0gdGhpcy5fcm93Lmxlbmd0aCAtIHN0YXJ0O1xuXG4gICAgICAgIHJldHVybiBlbmRJbmZvICE9PSBudWxsID8gdGhpcy5fdmVyaWZ5VHJhaWxpbmdXaGl0ZXNwYWNlKGVuZEluZm8pIDogbnVsbDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2RlY29kZUNvZGUoY291bnRlcjogQXJyYXk8bnVtYmVyPik6IEJhcmNvZGVJbmZvIHtcbiAgICAgICAgY29uc3QgYmVzdE1hdGNoOiBCYXJjb2RlSW5mbyA9IHtcbiAgICAgICAgICAgIGVycm9yOiBOdW1iZXIuTUFYX1ZBTFVFLFxuICAgICAgICAgICAgY29kZTogLTEsXG4gICAgICAgICAgICBzdGFydDogMCxcbiAgICAgICAgICAgIGVuZDogMFxuICAgICAgICB9O1xuXG4gICAgICAgIGZvciAobGV0IGNvZGUgPSAwOyBjb2RlIDwgQ09ERV9QQVRURVJOLmxlbmd0aDsgY29kZSsrKSB7XG4gICAgICAgICAgICBjb25zdCBlcnJvciA9IHRoaXMuX21hdGNoUGF0dGVybihjb3VudGVyLCBDT0RFX1BBVFRFUk5bY29kZV0pO1xuICAgICAgICAgICAgaWYgKGVycm9yIDwgYmVzdE1hdGNoLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgYmVzdE1hdGNoLmNvZGUgPSBjb2RlO1xuICAgICAgICAgICAgICAgIGJlc3RNYXRjaC5lcnJvciA9IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGJlc3RNYXRjaC5lcnJvciA8IHRoaXMuQVZFUkFHRV9DT0RFX0VSUk9SID8gYmVzdE1hdGNoIDogbnVsbDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2RlY29kZVBheWxvYWQoY291bnRlcnM6IFJlYWRvbmx5QXJyYXk8bnVtYmVyPiwgcmVzdWx0OiBBcnJheTxudW1iZXI+LCBkZWNvZGVkQ29kZXM6IEFycmF5PEJhcmNvZGVJbmZvPik6IFtCYXJjb2RlSW5mbywgQmFyY29kZUluZm9dIHtcbiAgICAgICAgY29uc3QgY291bnRlckxlbmd0aCA9IGNvdW50ZXJzLmxlbmd0aDtcbiAgICAgICAgY29uc3QgY291bnRlcjAgPSBbMCwgMCwgMCwgMCwgMF07XG4gICAgICAgIGNvbnN0IGNvdW50ZXIxID0gWzAsIDAsIDAsIDAsIDBdO1xuICAgICAgICBsZXQgY29kZTA6IEJhcmNvZGVJbmZvO1xuICAgICAgICBsZXQgY29kZTE6IEJhcmNvZGVJbmZvO1xuICAgICAgICBsZXQgcG9zID0gMDtcblxuICAgICAgICB3aGlsZSAocG9zIDwgY291bnRlckxlbmd0aCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb3VudGVyMFtpXSA9IGNvdW50ZXJzW3Bvc10gKiB0aGlzLl9iYXJTcGFjZVJhdGlvWzBdO1xuICAgICAgICAgICAgICAgIGNvdW50ZXIxW2ldID0gY291bnRlcnNbcG9zICsgMV0gKiB0aGlzLl9iYXJTcGFjZVJhdGlvWzFdO1xuICAgICAgICAgICAgICAgIHBvcyArPSAyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb2RlMCA9IHRoaXMuX2RlY29kZUNvZGUoY291bnRlcjApO1xuICAgICAgICAgICAgaWYgKCFjb2RlMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb2RlMSA9IHRoaXMuX2RlY29kZUNvZGUoY291bnRlcjEpO1xuICAgICAgICAgICAgaWYgKCFjb2RlMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXN1bHQucHVzaChjb2RlMC5jb2RlLCBjb2RlMS5jb2RlKTtcbiAgICAgICAgICAgIGRlY29kZWRDb2Rlcy5wdXNoKGNvZGUwLCBjb2RlMSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gW2NvZGUwLCBjb2RlMV07XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29kZTEyOFJlYWRlciB9IGZyb20gJy4vY29kZS0xMjgtcmVhZGVyJztcbmltcG9ydCB7IENvZGUzOVJlYWRlciB9IGZyb20gJy4vY29kZS0zOS1yZWFkZXInO1xuaW1wb3J0IHsgQ29kZTM5VklOUmVhZGVyIH0gZnJvbSAnLi9jb2RlLTM5LXZpbi1yZWFkZXInO1xuaW1wb3J0IHsgQ29kYWJhclJlYWRlciB9IGZyb20gJy4vY29kYWJhci1yZWFkZXInO1xuaW1wb3J0IHsgRUFOUmVhZGVyIH0gZnJvbSAnLi9lYW4tcmVhZGVyJztcbmltcG9ydCB7IEVBTjhSZWFkZXIgfSBmcm9tICcuL2Vhbi04LXJlYWRlcic7XG5pbXBvcnQgeyBFQU4yUmVhZGVyIH0gZnJvbSAnLi9lYW4tMi1yZWFkZXInO1xuaW1wb3J0IHsgRUFONVJlYWRlciB9IGZyb20gJy4vZWFuLTUtcmVhZGVyJztcbmltcG9ydCB7IFVQQ1JlYWRlciB9IGZyb20gJy4vdXBjLXJlYWRlcic7XG5pbXBvcnQgeyBVUENFUmVhZGVyIH0gZnJvbSAnLi91cGMtZS1yZWFkZXInO1xuaW1wb3J0IHsgSTJvZjVSZWFkZXIgfSBmcm9tICcuL2kyb2Y1LXJlYWRlcic7XG5pbXBvcnQgeyBUd29PZkZpdmVSZWFkZXIgfSBmcm9tICcuLzJvZjUtcmVhZGVyJztcbmltcG9ydCB7IENvZGU5M1JlYWRlciB9IGZyb20gJy4vY29kZS05My1yZWFkZXInO1xuXG5leHBvcnQgY29uc3QgUmVhZGVycyA9IHtcbiAgICBjb2RlXzEyOF9yZWFkZXI6IENvZGUxMjhSZWFkZXIsXG4gICAgZWFuX3JlYWRlcjogRUFOUmVhZGVyLFxuICAgIGVhbl81X3JlYWRlcjogRUFONVJlYWRlcixcbiAgICBlYW5fMl9yZWFkZXI6IEVBTjJSZWFkZXIsXG4gICAgZWFuXzhfcmVhZGVyOiBFQU44UmVhZGVyLFxuICAgIGNvZGVfMzlfcmVhZGVyOiBDb2RlMzlSZWFkZXIsXG4gICAgY29kZV8zOV92aW5fcmVhZGVyOiBDb2RlMzlWSU5SZWFkZXIsXG4gICAgY29kYWJhcl9yZWFkZXI6IENvZGFiYXJSZWFkZXIsXG4gICAgdXBjX3JlYWRlcjogVVBDUmVhZGVyLFxuICAgIHVwY19lX3JlYWRlcjogVVBDRVJlYWRlcixcbiAgICBpMm9mNV9yZWFkZXI6IEkyb2Y1UmVhZGVyLFxuICAgICcyb2Y1X3JlYWRlcic6IFR3b09mRml2ZVJlYWRlcixcbiAgICBjb2RlXzkzX3JlYWRlcjogQ29kZTkzUmVhZGVyXG59O1xuIiwiaW1wb3J0IHsgQmFyY29kZUluZm8sIEJhcmNvZGVSZWFkZXIsIEJhcmNvZGVSZWFkZXJDb25maWcgfSBmcm9tICcuL2JhcmNvZGUtcmVhZGVyJztcbmltcG9ydCB7IEVBTlJlYWRlciB9IGZyb20gJy4vZWFuLXJlYWRlcic7XG5cbmNvbnN0IENPREVfRlJFUVVFTkNZID0gW1s1NiwgNTIsIDUwLCA0OSwgNDQsIDM4LCAzNSwgNDIsIDQxLCAzN10sIFs3LCAxMSwgMTMsIDE0LCAxOSwgMjUsIDI4LCAyMSwgMjIsIDI2XV07XG5cbmV4cG9ydCBjbGFzcyBVUENFUmVhZGVyIGV4dGVuZHMgRUFOUmVhZGVyIHtcbiAgICBnZXQgU1RPUF9QQVRURVJOKCkge1xuICAgICAgICByZXR1cm4gWzEgLyA2ICogNywgMSAvIDYgKiA3LCAxIC8gNiAqIDcsIDEgLyA2ICogNywgMSAvIDYgKiA3LCAxIC8gNiAqIDddO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZz86IEJhcmNvZGVSZWFkZXJDb25maWcsIHN1cHBsZW1lbnRzPzogQXJyYXk8QmFyY29kZVJlYWRlcj4pIHtcbiAgICAgICAgc3VwZXIoY29uZmlnLCBzdXBwbGVtZW50cyk7XG5cbiAgICAgICAgdGhpcy5fZm9ybWF0ID0gJ3VwY19lJztcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2RlY29kZVBheWxvYWQoY29kZTogQmFyY29kZUluZm8sIHJlc3VsdDogQXJyYXk8bnVtYmVyPiwgZGVjb2RlZENvZGVzOiBBcnJheTxCYXJjb2RlSW5mbz4pOiBCYXJjb2RlSW5mbyB7XG4gICAgICAgIGxldCBjb2RlRnJlcXVlbmN5ID0gMHgwO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gICAgICAgICAgICBjb2RlID0gdGhpcy5fZGVjb2RlQ29kZShjb2RlLmVuZCk7XG4gICAgICAgICAgICBpZiAoIWNvZGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb2RlLmNvZGUgPj0gdGhpcy5DT0RFX0dfU1RBUlQpIHtcbiAgICAgICAgICAgICAgICBjb2RlLmNvZGUgPSBjb2RlLmNvZGUgLSB0aGlzLkNPREVfR19TVEFSVDtcbiAgICAgICAgICAgICAgICBjb2RlRnJlcXVlbmN5IHw9IDEgPDwgKDUgLSBpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGNvZGUuY29kZSk7XG4gICAgICAgICAgICBkZWNvZGVkQ29kZXMucHVzaChjb2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5fZGV0ZXJtaW5lUGFyaXR5KGNvZGVGcmVxdWVuY3ksIHJlc3VsdCkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvZGU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZGV0ZXJtaW5lUGFyaXR5KGNvZGVGcmVxdWVuY3k6IG51bWJlciwgcmVzdWx0OiBBcnJheTxudW1iZXI+KTogYm9vbGVhbiB7XG4gICAgICAgIGZvciAobGV0IG5yU3lzdGVtID0gMDsgbnJTeXN0ZW0gPCBDT0RFX0ZSRVFVRU5DWS5sZW5ndGg7IG5yU3lzdGVtKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQ09ERV9GUkVRVUVOQ1lbbnJTeXN0ZW1dLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvZGVGcmVxdWVuY3kgPT09IENPREVfRlJFUVVFTkNZW25yU3lzdGVtXVtpXSkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQudW5zaGlmdChuclN5c3RlbSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGkpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2NvbnZlcnRUb1VQQ0EocmVzdWx0OiBBcnJheTxudW1iZXI+KTogQXJyYXk8bnVtYmVyPiB7XG4gICAgICAgIGNvbnN0IGxhc3REaWdpdCA9IHJlc3VsdFtyZXN1bHQubGVuZ3RoIC0gMl07XG4gICAgICAgIGxldCB1cGNhID0gW3Jlc3VsdFswXV07XG5cbiAgICAgICAgaWYgKGxhc3REaWdpdCA8PSAyKSB7XG4gICAgICAgICAgICB1cGNhID0gdXBjYS5jb25jYXQocmVzdWx0LnNsaWNlKDEsIDMpKS5jb25jYXQoW2xhc3REaWdpdCwgMCwgMCwgMCwgMF0pLmNvbmNhdChyZXN1bHQuc2xpY2UoMywgNikpO1xuICAgICAgICB9IGVsc2UgaWYgKGxhc3REaWdpdCA9PT0gMykge1xuICAgICAgICAgICAgdXBjYSA9IHVwY2EuY29uY2F0KHJlc3VsdC5zbGljZSgxLCA0KSkuY29uY2F0KFswLCAwLCAwLCAwLCAwXSkuY29uY2F0KHJlc3VsdC5zbGljZSg0LCA2KSk7XG4gICAgICAgIH0gZWxzZSBpZiAobGFzdERpZ2l0ID09PSA0KSB7XG4gICAgICAgICAgICB1cGNhID0gdXBjYS5jb25jYXQocmVzdWx0LnNsaWNlKDEsIDUpKS5jb25jYXQoWzAsIDAsIDAsIDAsIDAsIHJlc3VsdFs1XV0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdXBjYSA9IHVwY2EuY29uY2F0KHJlc3VsdC5zbGljZSgxLCA2KSkuY29uY2F0KFswLCAwLCAwLCAwLCBsYXN0RGlnaXRdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHVwY2EucHVzaChyZXN1bHRbcmVzdWx0Lmxlbmd0aCAtIDFdKTtcbiAgICAgICAgcmV0dXJuIHVwY2E7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9jaGVja3N1bShyZXN1bHQ6IEFycmF5PG51bWJlcj4pOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHN1cGVyLl9jaGVja3N1bSh0aGlzLl9jb252ZXJ0VG9VUENBKHJlc3VsdCkpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZmluZEVuZChvZmZzZXQ6IG51bWJlciwgaXNXaGl0ZTogMCB8IDEpIHtcbiAgICAgICAgaXNXaGl0ZSA9IDE7XG4gICAgICAgIHJldHVybiBzdXBlci5fZmluZEVuZChvZmZzZXQsIGlzV2hpdGUpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfdmVyaWZ5VHJhaWxpbmdXaGl0ZXNwYWNlKGVuZEluZm86IEJhcmNvZGVJbmZvKTogQmFyY29kZUluZm8ge1xuICAgICAgICBjb25zdCB0cmFpbGluZ1doaXRlc3BhY2VFbmQgPSBlbmRJbmZvLmVuZCArIChlbmRJbmZvLmVuZCAtIGVuZEluZm8uc3RhcnQpIC8gMjtcblxuICAgICAgICBpZiAodHJhaWxpbmdXaGl0ZXNwYWNlRW5kIDwgdGhpcy5fcm93Lmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX21hdGNoUmFuZ2UoZW5kSW5mby5lbmQsIHRyYWlsaW5nV2hpdGVzcGFjZUVuZCwgMCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZW5kSW5mbztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBCYXJjb2RlLCBCYXJjb2RlUmVhZGVyLCBCYXJjb2RlUmVhZGVyQ29uZmlnIH0gZnJvbSAnLi9iYXJjb2RlLXJlYWRlcic7XG5pbXBvcnQgeyBFQU5SZWFkZXIgfSBmcm9tICcuL2Vhbi1yZWFkZXInO1xuXG5leHBvcnQgY2xhc3MgVVBDUmVhZGVyIGV4dGVuZHMgRUFOUmVhZGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihjb25maWc/OiBCYXJjb2RlUmVhZGVyQ29uZmlnLCBzdXBwbGVtZW50cz86IEFycmF5PEJhcmNvZGVSZWFkZXI+KSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZywgc3VwcGxlbWVudHMpO1xuXG4gICAgICAgIHRoaXMuX2Zvcm1hdCA9ICd1cGNfYSc7XG4gICAgfVxuXG4gICAgZGVjb2RlKCk6IEJhcmNvZGUge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5kZWNvZGUoKTtcblxuICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5jb2RlICYmIHJlc3VsdC5jb2RlLmxlbmd0aCA9PT0gMTMgJiYgcmVzdWx0LmNvZGUuY2hhckF0KDApID09PSAnMCcpIHtcbiAgICAgICAgICAgIHJlc3VsdC5jb2RlID0gcmVzdWx0LmNvZGUuc3Vic3RyaW5nKDEpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9