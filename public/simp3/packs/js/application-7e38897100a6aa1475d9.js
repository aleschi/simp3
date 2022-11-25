/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/simp3/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/application.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/channels sync recursive _channel\\.js$":
/*!****************************************************!*\
  !*** ./app/javascript/channels sync _channel\.js$ ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./app/javascript/channels sync recursive _channel\\.js$";

/***/ }),

/***/ "./app/javascript/channels/index.js":
/*!******************************************!*\
  !*** ./app/javascript/channels/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Load all the channels within this directory and all subdirectories.
// Channel files must be named *_channel.js.
var channels = __webpack_require__("./app/javascript/channels sync recursive _channel\\.js$");

channels.keys().forEach(channels);

/***/ }),

/***/ "./app/javascript/packs/application.js":
/*!*********************************************!*\
  !*** ./app/javascript/packs/application.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rails_ujs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rails/ujs */ "./node_modules/@rails/ujs/lib/assets/compiled/rails-ujs.js");
/* harmony import */ var _rails_ujs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rails_ujs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var turbolinks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! turbolinks */ "./node_modules/turbolinks/dist/turbolinks.js");
/* harmony import */ var turbolinks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(turbolinks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _rails_activestorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rails/activestorage */ "./node_modules/@rails/activestorage/app/assets/javascripts/activestorage.esm.js");
/* harmony import */ var channels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! channels */ "./app/javascript/channels/index.js");
/* harmony import */ var channels__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(channels__WEBPACK_IMPORTED_MODULE_3__);
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.





__webpack_require__(/*! packs/dsfr.module */ "./app/javascript/packs/dsfr.module.js");

_rails_ujs__WEBPACK_IMPORTED_MODULE_0___default.a.start();
turbolinks__WEBPACK_IMPORTED_MODULE_1___default.a.start();
_rails_activestorage__WEBPACK_IMPORTED_MODULE_2__["start"]();

/***/ }),

/***/ "./app/javascript/packs/dsfr.module.js":
/*!*********************************************!*\
  !*** ./app/javascript/packs/dsfr.module.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function set(target, property, value, receiver) { if (typeof Reflect !== "undefined" && Reflect.set) { set = Reflect.set; } else { set = function set(target, property, value, receiver) { var base = _superPropBase(target, property); var desc; if (base) { desc = Object.getOwnPropertyDescriptor(base, property); if (desc.set) { desc.set.call(receiver, value); return true; } else if (!desc.writable) { return false; } } desc = Object.getOwnPropertyDescriptor(receiver, property); if (desc) { if (!desc.writable) { return false; } desc.value = value; Object.defineProperty(receiver, property, desc); } else { _defineProperty(receiver, property, value); } return true; }; } return set(target, property, value, receiver); }

function _set(target, property, value, receiver, isStrict) { var s = set(target, property, value, receiver || target); if (!s && isStrict) { throw new Error('failed to set property'); } return value; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/*! DSFR v1.8.4 | SPDX-License-Identifier: MIT | License-Filename: LICENSE.md | restricted use (see terms and conditions) */
var State = /*#__PURE__*/function () {
  function State() {
    _classCallCheck(this, State);

    this.modules = {};
  }

  _createClass(State, [{
    key: "create",
    value: function create(ModuleClass) {
      var module = new ModuleClass();
      this.modules[module.type] = module;
    }
  }, {
    key: "getModule",
    value: function getModule(type) {
      return this.modules[type];
    }
  }, {
    key: "add",
    value: function add(type, item) {
      this.modules[type].add(item);
    }
  }, {
    key: "remove",
    value: function remove(type, item) {
      this.modules[type].remove(item);
    }
  }, {
    key: "isActive",
    get: function get() {
      return this._isActive;
    },
    set: function set(value) {
      var _this = this;

      if (value === this._isActive) return;
      this._isActive = value;
      var values = Object.keys(this.modules).map(function (e) {
        return _this.modules[e];
      });

      if (value) {
        var _iterator = _createForOfIteratorHelper(values),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var module = _step.value;
            module.activate();
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      } else {
        var _iterator2 = _createForOfIteratorHelper(values),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _module = _step2.value;

            _module.deactivate();
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
    }
  }, {
    key: "isLegacy",
    get: function get() {
      return this._isLegacy;
    },
    set: function set(value) {
      if (value === this._isLegacy) return;
      this._isLegacy = value;
    }
  }]);

  return State;
}();

var _state = new State();

var config = {
  prefix: 'fr',
  namespace: 'dsfr',
  organisation: '@gouvfr',
  version: '1.8.4'
};

var LogLevel = /*#__PURE__*/function () {
  function LogLevel(level, light, dark, logger) {
    _classCallCheck(this, LogLevel);

    this.level = level;
    this.light = light;
    this.dark = dark;

    switch (logger) {
      case 'warn':
        this.logger = console.warn;
        break;

      case 'error':
        this.logger = console.error;
        break;

      default:
        this.logger = console.log;
    }
  }

  _createClass(LogLevel, [{
    key: "log",
    value: function log() {
      var message = new Message(config.namespace);

      for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
        values[_key] = arguments[_key];
      }

      for (var _i = 0, _values = values; _i < _values.length; _i++) {
        var value = _values[_i];
        message.add(value);
      }

      this.print(message);
    }
  }, {
    key: "print",
    value: function print(message) {
      message.setColor(this.color);
      this.logger.apply(console, message.getMessage());
    }
  }, {
    key: "color",
    get: function get() {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? this.dark : this.light;
    }
  }]);

  return LogLevel;
}();

var Message = /*#__PURE__*/function () {
  function Message(domain) {
    _classCallCheck(this, Message);

    this.inputs = ['%c'];
    this.styles = ['font-family:Marianne', 'line-height: 1.5'];
    this.objects = [];
    if (domain) this.add("".concat(domain, " :"));
  }

  _createClass(Message, [{
    key: "add",
    value: function add(value) {
      switch (typeof value) {
        case 'object':
        case 'function':
          this.inputs.push('%o ');
          this.objects.push(value);
          break;

        default:
          this.inputs.push("".concat(value, " "));
      }
    }
  }, {
    key: "setColor",
    value: function setColor(color) {
      this.styles.push("color:".concat(color));
    }
  }, {
    key: "getMessage",
    value: function getMessage() {
      return [this.inputs.join(''), this.styles.join(';')].concat(_toConsumableArray(this.objects));
    }
  }]);

  return Message;
}();

var LEVELS = {
  trace: new LogLevel(0, '#616161', '#989898'),
  debug: new LogLevel(1, '#000091', '#8B8BFF'),
  info: new LogLevel(2, '#007c3b', '#00ed70'),
  warn: new LogLevel(3, '#ba4500', '#fa5c00', 'warn'),
  error: new LogLevel(4, '#D80600', '#FF4641', 'error')
};

var Inspector = /*#__PURE__*/function () {
  function Inspector() {
    var _this2 = this;

    _classCallCheck(this, Inspector);

    this.level = 2;

    var _loop = function _loop(id) {
      var level = LEVELS[id];

      _this2[id] = function () {
        for (var _len2 = arguments.length, msgs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          msgs[_key2] = arguments[_key2];
        }

        if (_this2.level <= level.level) level.log.apply(level, msgs);
      };

      _this2[id].print = level.print.bind(level);
    };

    for (var id in LEVELS) {
      _loop(id);
    }
  }

  _createClass(Inspector, [{
    key: "state",
    value: function state() {
      var message = new Message();
      message.add(_state);
      this.trace.print(message);
    }
  }, {
    key: "tree",
    value: function tree() {
      var stage = _state.getModule('stage');

      if (!stage) return;
      var message = new Message();

      this._branch(stage.root, 0, message);

      this.trace.print(message);
    }
  }, {
    key: "_branch",
    value: function _branch(element, space, message) {
      var branch = '';

      if (space > 0) {
        var indent = '';

        for (var i = 0; i < space; i++) {
          indent += '    ';
        } // branch += indent + '|\n';


        branch += indent + '└─ ';
      }

      branch += "[".concat(element.id, "] ").concat(element.html);
      message.add(branch);
      message.add({
        '@': element
      });
      message.add('\n');

      var _iterator3 = _createForOfIteratorHelper(element.children),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var child = _step3.value;
          branch += this._branch(child, space + 1, message);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
  }]);

  return Inspector;
}();

var inspector = new Inspector();

var startAtDomContentLoaded = function startAtDomContentLoaded(callback) {
  if (document.readyState !== 'loading') window.requestAnimationFrame(callback);else document.addEventListener('DOMContentLoaded', callback);
};

var startAuto = function startAuto(callback) {
  // detect
  startAtDomContentLoaded(callback);
};

var Modes = {
  AUTO: 'auto',
  MANUAL: 'manual',
  RUNTIME: 'runtime',
  LOADED: 'loaded',
  VUE: 'vue',
  ANGULAR: 'angular',
  REACT: 'react'
};

var Options = /*#__PURE__*/function () {
  function Options() {
    _classCallCheck(this, Options);

    this._mode = Modes.AUTO;
    this.isStarted = false;
    this.starting = this.start.bind(this);
    this.preventManipulation = false;
  }

  _createClass(Options, [{
    key: "configure",
    value: function configure() {
      var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var start = arguments.length > 1 ? arguments[1] : undefined;
      this.startCallback = start;
      if (settings.verbose === true) inspector.level = 0;
      this.mode = settings.mode || Modes.AUTO;
    }
  }, {
    key: "mode",
    get: function get() {
      return this._mode;
    },
    set: function set(value) {
      switch (value) {
        case Modes.AUTO:
          this.preventManipulation = false;
          startAuto(this.starting);
          break;

        case Modes.LOADED:
          this.preventManipulation = false;
          startAtDomContentLoaded(this.starting);
          break;

        case Modes.RUNTIME:
          this.preventManipulation = false;
          this.start();
          break;

        case Modes.MANUAL:
          this.preventManipulation = false;
          break;

        case Modes.VUE:
          this.preventManipulation = true;
          break;

        case Modes.ANGULAR:
          this.preventManipulation = true;
          break;

        case Modes.REACT:
          this.preventManipulation = true;
          break;

        default:
          inspector.error('Illegal mode');
          return;
      }

      this._mode = value;
      inspector.info("mode set to ".concat(value));
    }
  }, {
    key: "start",
    value: function start() {
      inspector.info('start');
      this.startCallback();
    }
  }]);

  return Options;
}();

var options = new Options();

var Collection = /*#__PURE__*/function () {
  function Collection() {
    _classCallCheck(this, Collection);

    this._collection = [];
  }

  _createClass(Collection, [{
    key: "forEach",
    value: function forEach(callback) {
      this._collection.forEach(callback);
    }
  }, {
    key: "map",
    value: function map(callback) {
      return this._collection.map(callback);
    }
  }, {
    key: "length",
    get: function get() {
      return this._collection.length;
    }
  }, {
    key: "add",
    value: function add(collectable) {
      if (this._collection.indexOf(collectable) > -1) return false;

      this._collection.push(collectable);

      if (this.onAdd) this.onAdd();
      if (this.onPopulate && this._collection.length === 1) this.onPopulate();
      return true;
    }
  }, {
    key: "remove",
    value: function remove(collectable) {
      var index = this._collection.indexOf(collectable);

      if (index === -1) return false;

      this._collection.splice(index, 1);

      if (this.onRemove) this.onRemove();
      if (this.onEmpty && this._collection.length === 0) this.onEmpty();
    }
  }, {
    key: "execute",
    value: function execute() {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      var _iterator4 = _createForOfIteratorHelper(this._collection),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var collectable = _step4.value;
          if (collectable) collectable.apply(null, args);
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    }
  }, {
    key: "clear",
    value: function clear() {
      this._collection.length = 0;
    }
  }, {
    key: "clone",
    value: function clone() {
      var clone = new Collection();
      clone._collection = this._collection.slice();
      return clone;
    }
  }, {
    key: "collection",
    get: function get() {
      return this._collection;
    }
  }]);

  return Collection;
}();

var Module = /*#__PURE__*/function (_Collection) {
  _inherits(Module, _Collection);

  var _super = _createSuper(Module);

  function Module(type) {
    var _this3;

    _classCallCheck(this, Module);

    _this3 = _super.call(this);
    _this3.type = type;
    _this3.isActive = false;
    return _this3;
  }

  _createClass(Module, [{
    key: "activate",
    value: function activate() {}
  }, {
    key: "deactivate",
    value: function deactivate() {}
  }]);

  return Module;
}(Collection);

var ns = function ns(name) {
  return "".concat(config.prefix, "-").concat(name);
};

ns.selector = function (name, notation) {
  if (notation === undefined) notation = '.';
  return "".concat(notation).concat(ns(name));
};

ns.attr = function (name) {
  return "data-".concat(ns(name));
};

ns.attr.selector = function (name, value) {
  var result = ns.attr(name);
  if (value !== undefined) result += "=\"".concat(value, "\"");
  return "[".concat(result, "]");
};

ns.event = function (type) {
  return "".concat(config.namespace, ".").concat(type);
};

ns.emission = function (domain, type) {
  return "emission:".concat(domain, ".").concat(type);
};

var querySelectorAllArray = function querySelectorAllArray(element, selectors) {
  return Array.prototype.slice.call(element.querySelectorAll(selectors));
};

var _queryParentSelector = function queryParentSelector(element, selectors) {
  var parent = element.parentElement;
  if (parent.matches(selectors)) return parent;
  if (parent === document.documentElement) return null;
  return _queryParentSelector(parent, selectors);
};

var Registration = /*#__PURE__*/function () {
  function Registration(selector, InstanceClass, creator) {
    _classCallCheck(this, Registration);

    this.selector = selector;
    this.InstanceClass = InstanceClass;
    this.creator = creator;
    this.instances = new Collection();
    this.isIntroduced = false;
    this._instanceClassName = this.InstanceClass.instanceClassName;
    this._instanceClassNames = this.getInstanceClassNames(this.InstanceClass);
    this._property = this._instanceClassName.substring(0, 1).toLowerCase() + this._instanceClassName.substring(1);

    var dashed = this._instanceClassName.replace(/[^a-zA-Z0-9]+/g, '-').replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2').replace(/([a-z])([A-Z])/g, '$1-$2').replace(/([0-9])([^0-9])/g, '$1-$2').replace(/([^0-9])([0-9])/g, '$1-$2').toLowerCase();

    this._attribute = ns.attr("js-".concat(dashed));
  }

  _createClass(Registration, [{
    key: "getInstanceClassNames",
    value: function getInstanceClassNames(InstanceClass) {
      var prototype = Object.getPrototypeOf(InstanceClass);
      if (!prototype || prototype.instanceClassName === 'Instance') return [InstanceClass.instanceClassName];
      return [].concat(_toConsumableArray(this.getInstanceClassNames(prototype)), [InstanceClass.instanceClassName]);
    }
  }, {
    key: "hasInstanceClassName",
    value: function hasInstanceClassName(instanceClassName) {
      return this._instanceClassNames.indexOf(instanceClassName) > -1;
    }
  }, {
    key: "introduce",
    value: function introduce() {
      if (this.isIntroduced) return;
      this.isIntroduced = true;

      _state.getModule('stage').parse(document.documentElement, this);
    }
  }, {
    key: "parse",
    value: function parse(node, nonRecursive) {
      var nodes = [];
      if (node.matches && node.matches(this.selector)) nodes.push(node); // eslint-disable-next-line no-useless-call

      if (!nonRecursive && node.querySelectorAll && node.querySelector(this.selector)) nodes.push.apply(nodes, querySelectorAllArray(node, this.selector));
      return nodes;
    }
  }, {
    key: "create",
    value: function create(element) {
      if (!element.node.matches(this.selector)) return;
      var instance = new this.InstanceClass();
      this.instances.add(instance);
      return instance;
    }
  }, {
    key: "remove",
    value: function remove(instance) {
      this.instances.remove(instance);
    }
  }, {
    key: "dispose",
    value: function dispose() {
      var instances = this.instances.collection;

      for (var i = instances.length - 1; i > -1; i--) {
        instances[i]._dispose();
      }

      this.creator = null;
    }
  }, {
    key: "instanceClassName",
    get: function get() {
      return this._instanceClassName;
    }
  }, {
    key: "instanceClassNames",
    get: function get() {
      return this._instanceClassNames;
    }
  }, {
    key: "property",
    get: function get() {
      return this._property;
    }
  }, {
    key: "attribute",
    get: function get() {
      return this._attribute;
    }
  }]);

  return Registration;
}();

var Register = /*#__PURE__*/function (_Module) {
  _inherits(Register, _Module);

  var _super2 = _createSuper(Register);

  function Register() {
    _classCallCheck(this, Register);

    return _super2.call(this, 'register');
  }

  _createClass(Register, [{
    key: "register",
    value: function register(selector, InstanceClass, creator) {
      var registration = new Registration(selector, InstanceClass, creator);
      this.add(registration);
      if (_state.isActive) registration.introduce();
      return registration;
    }
  }, {
    key: "activate",
    value: function activate() {
      var _iterator5 = _createForOfIteratorHelper(this.collection),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var registration = _step5.value;
          registration.introduce();
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
    }
  }, {
    key: "remove",
    value: function remove(registration) {
      registration.dispose();

      _get(_getPrototypeOf(Register.prototype), "remove", this).call(this, registration);
    }
  }]);

  return Register;
}(Module);

var count = 0;

var Element$1 = /*#__PURE__*/function () {
  function Element$1(node, id) {
    _classCallCheck(this, Element$1);

    if (!id) {
      count++;
      this.id = count;
    } else this.id = id;

    this.node = node;
    this.attributeNames = [];
    this.instances = [];
    this._children = [];
    this._parent = null;
    this._projects = [];
  }

  _createClass(Element$1, [{
    key: "proxy",
    get: function get() {
      var scope = this;

      if (!this._proxy) {
        this._proxy = {
          id: this.id,

          get parent() {
            return scope.parent ? scope.parent.proxy : null;
          },

          get children() {
            return scope.children.map(function (child) {
              return child.proxy;
            });
          }

        };

        var _iterator6 = _createForOfIteratorHelper(this.instances),
            _step6;

        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
            var instance = _step6.value;
            this._proxy[instance.registration.property] = instance.proxy;
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }
      }

      return this._proxy;
    }
  }, {
    key: "html",
    get: function get() {
      if (!this.node || !this.node.outerHTML) return '';
      var end = this.node.outerHTML.indexOf('>');
      return this.node.outerHTML.substring(0, end + 1);
    }
  }, {
    key: "project",
    value: function project(registration) {
      if (this._projects.indexOf(registration) === -1) this._projects.push(registration);
    }
  }, {
    key: "populate",
    value: function populate() {
      var projects = this._projects.slice();

      this._projects.length = 0;

      var _iterator7 = _createForOfIteratorHelper(projects),
          _step7;

      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var registration = _step7.value;
          this.create(registration);
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }
    }
  }, {
    key: "create",
    value: function create(registration) {
      if (this.hasInstance(registration.instanceClassName)) {
        // inspector.debug(`failed creation, instance of ${registration.instanceClassName} already exists on element [${this.id}]`);
        return;
      }

      inspector.debug("create instance of ".concat(registration.instanceClassName, " on element [").concat(this.id, "]"));
      var instance = registration.create(this);
      this.instances.push(instance);

      instance._config(this, registration);

      if (this._proxy) this._proxy[registration.property] = instance.proxy;
    }
  }, {
    key: "remove",
    value: function remove(instance) {
      var index = this.instances.indexOf(instance);
      if (index > -1) this.instances.splice(index, 1);
      if (this._proxy) delete this._proxy[instance.registration.property];
    }
  }, {
    key: "parent",
    get: function get() {
      return this._parent;
    }
  }, {
    key: "ascendants",
    get: function get() {
      return [this.parent].concat(_toConsumableArray(this.parent.ascendants));
    }
  }, {
    key: "children",
    get: function get() {
      return this._children;
    }
  }, {
    key: "descendants",
    get: function get() {
      var descendants = _toConsumableArray(this._children);

      this._children.forEach(function (child) {
        return descendants.push.apply(descendants, _toConsumableArray(child.descendants));
      });

      return descendants;
    } // TODO : emit ascendant et descendant de changement ?

  }, {
    key: "addChild",
    value: function addChild(child, index) {
      if (this._children.indexOf(child) > -1) return null;
      child._parent = this;
      if (!isNaN(index) && index > -1 && index < this._children.length) this._children.splice(index, 0, child);else this._children.push(child);
      return child;
    }
  }, {
    key: "removeChild",
    value: function removeChild(child) {
      var index = this._children.indexOf(child);

      if (index === -1) return null;
      child._parent = null;

      this._children.splice(index, 1);
    }
  }, {
    key: "emit",
    value: function emit(type, data) {
      var elements = _state.getModule('stage').collection;

      var response = [];

      var _iterator8 = _createForOfIteratorHelper(elements),
          _step8;

      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var element = _step8.value;
          response.push.apply(response, _toConsumableArray(element._emit(type, data)));
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }

      return response;
    }
  }, {
    key: "_emit",
    value: function _emit(type, data) {
      var response = [];

      var _iterator9 = _createForOfIteratorHelper(this.instances),
          _step9;

      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var instance = _step9.value;
          response.push.apply(response, _toConsumableArray(instance._emitter.emit(type, data)));
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }

      return response;
    }
  }, {
    key: "ascend",
    value: function ascend(type, data) {
      if (this._parent) return this._parent._ascend(type, data);
      return [];
    }
  }, {
    key: "_ascend",
    value: function _ascend(type, data) {
      var response = [];

      var _iterator10 = _createForOfIteratorHelper(this.instances),
          _step10;

      try {
        for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
          var instance = _step10.value;
          response.push.apply(response, _toConsumableArray(instance._ascent.emit(type, data)));
        }
      } catch (err) {
        _iterator10.e(err);
      } finally {
        _iterator10.f();
      }

      if (this._parent) response.push.apply(response, _toConsumableArray(this._parent._ascend(type, data)));
      return response;
    }
  }, {
    key: "descend",
    value: function descend(type, data) {
      var response = [];

      var _iterator11 = _createForOfIteratorHelper(this._children),
          _step11;

      try {
        for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
          var child = _step11.value;
          response.push.apply(response, _toConsumableArray(child._descend(type, data)));
        }
      } catch (err) {
        _iterator11.e(err);
      } finally {
        _iterator11.f();
      }

      return response;
    }
  }, {
    key: "_descend",
    value: function _descend(type, data) {
      var response = [];

      var _iterator12 = _createForOfIteratorHelper(this.instances),
          _step12;

      try {
        for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
          var instance = _step12.value;
          response.push.apply(response, _toConsumableArray(instance._descent.emit(type, data)));
        }
      } catch (err) {
        _iterator12.e(err);
      } finally {
        _iterator12.f();
      }

      var _iterator13 = _createForOfIteratorHelper(this._children),
          _step13;

      try {
        for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
          var child = _step13.value;
          response.push.apply(response, _toConsumableArray(child._descend(type, data)));
        }
      } catch (err) {
        _iterator13.e(err);
      } finally {
        _iterator13.f();
      }

      return response;
    }
  }, {
    key: "getInstance",
    value: function getInstance(instanceClassName) {
      var _iterator14 = _createForOfIteratorHelper(this.instances),
          _step14;

      try {
        for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
          var instance = _step14.value;
          if (instance.registration.hasInstanceClassName(instanceClassName)) return instance;
        }
      } catch (err) {
        _iterator14.e(err);
      } finally {
        _iterator14.f();
      }

      return null;
    }
  }, {
    key: "hasInstance",
    value: function hasInstance(instanceClassName) {
      return this.getInstance(instanceClassName) !== null;
    }
  }, {
    key: "getDescendantInstances",
    value: function getDescendantInstances(instanceClassName, stopAtInstanceClassName, stopAtFirstInstance) {
      if (!instanceClassName) return [];
      var instances = [];

      var _iterator15 = _createForOfIteratorHelper(this._children),
          _step15;

      try {
        for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
          var child = _step15.value;
          var instance = child.getInstance(instanceClassName);

          if (instance) {
            instances.push(instance);
            if (stopAtFirstInstance) continue;
          }

          if ((!stopAtInstanceClassName || !child.hasInstance(stopAtInstanceClassName)) && child.children.length) instances.push.apply(instances, child.getDescendantInstances(instanceClassName, stopAtInstanceClassName, stopAtFirstInstance));
        }
      } catch (err) {
        _iterator15.e(err);
      } finally {
        _iterator15.f();
      }

      return instances;
    }
  }, {
    key: "getAscendantInstance",
    value: function getAscendantInstance(instanceClassName, stopAtInstanceClassName) {
      if (!instanceClassName || !this._parent) return null;

      var instance = this._parent.getInstance(instanceClassName);

      if (instance) return instance;
      if (stopAtInstanceClassName && this._parent.hasInstance(stopAtInstanceClassName)) return null;
      return this._parent.getAscendantInstance(instanceClassName, stopAtInstanceClassName);
    }
  }, {
    key: "dispose",
    value: function dispose() {
      var _iterator16 = _createForOfIteratorHelper(this.instances),
          _step16;

      try {
        for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
          var instance = _step16.value;

          instance._dispose();
        }
      } catch (err) {
        _iterator16.e(err);
      } finally {
        _iterator16.f();
      }

      this.instances.length = 0;

      _state.remove('stage', this);

      this.parent.removeChild(this);
      this._children.length = 0;
      inspector.debug("remove element [".concat(this.id, "] ").concat(this.html));
    }
  }, {
    key: "prepare",
    value: function prepare(attributeName) {
      if (this.attributeNames.indexOf(attributeName) === -1) this.attributeNames.push(attributeName);
    }
  }, {
    key: "examine",
    value: function examine() {
      var attributeNames = this.attributeNames.slice();
      this.attributeNames.length = 0;

      for (var i = this.instances.length - 1; i > -1; i--) {
        this.instances[i].examine(attributeNames);
      }
    }
  }]);

  return Element$1;
}();

var Root = /*#__PURE__*/function (_Element$) {
  _inherits(Root, _Element$);

  var _super3 = _createSuper(Root);

  function Root() {
    var _this4;

    _classCallCheck(this, Root);

    _this4 = _super3.call(this, document.documentElement, 'root');

    _this4.node.setAttribute(ns.attr('js'), true);

    return _this4;
  }

  return _createClass(Root);
}(Element$1);

var RootSelector = {
  ROOT: ':root'
};

var Stage = /*#__PURE__*/function (_Module2) {
  _inherits(Stage, _Module2);

  var _super4 = _createSuper(Stage);

  function Stage() {
    var _thisSuper, _this5;

    _classCallCheck(this, Stage);

    _this5 = _super4.call(this, 'stage');
    _this5.root = new Root();

    _get((_thisSuper = _assertThisInitialized(_this5), _getPrototypeOf(Stage.prototype)), "add", _thisSuper).call(_thisSuper, _this5.root);

    _this5.observer = new MutationObserver(_this5.mutate.bind(_assertThisInitialized(_this5)));
    _this5.modifications = [];
    _this5.willModify = false;
    _this5.modifying = _this5.modify.bind(_assertThisInitialized(_this5));
    return _this5;
  }

  _createClass(Stage, [{
    key: "hasElement",
    value: function hasElement(node) {
      var _iterator17 = _createForOfIteratorHelper(this.collection),
          _step17;

      try {
        for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
          var element = _step17.value;
          if (element.node === node) return true;
        }
      } catch (err) {
        _iterator17.e(err);
      } finally {
        _iterator17.f();
      }

      return false;
    }
  }, {
    key: "getElement",
    value: function getElement(node) {
      var _iterator18 = _createForOfIteratorHelper(this.collection),
          _step18;

      try {
        for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
          var _element = _step18.value;
          if (_element.node === node) return _element;
        }
      } catch (err) {
        _iterator18.e(err);
      } finally {
        _iterator18.f();
      }

      var element = new Element$1(node);
      this.add(element);
      inspector.debug("add element [".concat(element.id, "] ").concat(element.html));
      return element;
    }
  }, {
    key: "getProxy",
    value: function getProxy(node) {
      if (!this.hasElement(node)) return null;
      var element = this.getElement(node);
      return element.proxy;
    }
  }, {
    key: "add",
    value: function add(element) {
      _get(_getPrototypeOf(Stage.prototype), "add", this).call(this, element);

      this.put(element, this.root);
    }
  }, {
    key: "put",
    value: function put(element, branch) {
      var index = 0;

      for (var i = branch.children.length - 1; i > -1; i--) {
        var child = branch.children[i];
        var position = element.node.compareDocumentPosition(child.node);

        if (position & Node.DOCUMENT_POSITION_CONTAINS) {
          this.put(element, child);
          return;
        } else if (position & Node.DOCUMENT_POSITION_CONTAINED_BY) {
          branch.removeChild(child);
          element.addChild(child, 0);
        } else if (position & Node.DOCUMENT_POSITION_PRECEDING) {
          index = i + 1;
          break;
        }
      }

      branch.addChild(element, index);
    }
  }, {
    key: "activate",
    value: function activate() {
      this.observer.observe(document.documentElement, {
        childList: true,
        subtree: true,
        attributes: true
      });
    }
  }, {
    key: "deactivate",
    value: function deactivate() {
      this.observer.disconnect();
    }
  }, {
    key: "mutate",
    value: function mutate(mutations) {
      var _this6 = this;

      var examinations = [];
      mutations.forEach(function (mutation) {
        switch (mutation.type) {
          case 'childList':
            mutation.removedNodes.forEach(function (node) {
              return _this6.dispose(node);
            });
            mutation.addedNodes.forEach(function (node) {
              return _this6.parse(node);
            });
            break;

          case 'attributes':
            if (_this6.hasElement(mutation.target)) {
              var element = _this6.getElement(mutation.target);

              element.prepare(mutation.attributeName);
              if (examinations.indexOf(element) === -1) examinations.push(element);

              var _iterator19 = _createForOfIteratorHelper(element.descendants),
                  _step19;

              try {
                for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
                  var descendant = _step19.value;
                  if (examinations.indexOf(descendant) === -1) examinations.push(descendant);
                }
              } catch (err) {
                _iterator19.e(err);
              } finally {
                _iterator19.f();
              }
            }

            if (_this6.modifications.indexOf(mutation.target) === -1) _this6.modifications.push(mutation.target);
            break;
        }
      });
      examinations.forEach(function (element) {
        return element.examine();
      });

      if (this.modifications.length && !this.willModify) {
        this.willModify = true;
        window.requestAnimationFrame(this.modifying);
      }
    }
  }, {
    key: "modify",
    value: function modify() {
      this.willModify = false;
      var targets = this.modifications.slice();
      this.modifications.length = 0;

      var _iterator20 = _createForOfIteratorHelper(targets),
          _step20;

      try {
        for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
          var target = _step20.value;
          if (document.documentElement.contains(target)) this.parse(target);
        }
      } catch (err) {
        _iterator20.e(err);
      } finally {
        _iterator20.f();
      }
    }
  }, {
    key: "dispose",
    value: function dispose(node) {
      var disposables = [];
      this.forEach(function (element) {
        if (node.contains(element.node)) disposables.push(element);
      });

      for (var _i2 = 0, _disposables = disposables; _i2 < _disposables.length; _i2++) {
        var disposable = _disposables[_i2];
        disposable.dispose();
        this.remove(disposable);
      }
    }
  }, {
    key: "parse",
    value: function parse(node, registration, nonRecursive) {
      var registrations = registration ? [registration] : _state.getModule('register').collection;
      var creations = [];

      var _iterator21 = _createForOfIteratorHelper(registrations),
          _step21;

      try {
        for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
          var _registration = _step21.value;

          var nodes = _registration.parse(node, nonRecursive);

          var _iterator22 = _createForOfIteratorHelper(nodes),
              _step22;

          try {
            for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
              var n = _step22.value;

              var _element2 = this.getElement(n);

              _element2.project(_registration);

              if (creations.indexOf(_element2) === -1) creations.push(_element2);
            }
          } catch (err) {
            _iterator22.e(err);
          } finally {
            _iterator22.f();
          }
        }
      } catch (err) {
        _iterator21.e(err);
      } finally {
        _iterator21.f();
      }

      for (var _i3 = 0, _creations = creations; _i3 < _creations.length; _i3++) {
        var element = _creations[_i3];
        element.populate();
      }
    }
  }]);

  return Stage;
}(Module);

var Renderer = /*#__PURE__*/function (_Module3) {
  _inherits(Renderer, _Module3);

  var _super5 = _createSuper(Renderer);

  function Renderer() {
    var _this7;

    _classCallCheck(this, Renderer);

    _this7 = _super5.call(this, 'render');
    _this7.rendering = _this7.render.bind(_assertThisInitialized(_this7));
    _this7.nexts = new Collection();
    return _this7;
  }

  _createClass(Renderer, [{
    key: "activate",
    value: function activate() {
      window.requestAnimationFrame(this.rendering);
    }
  }, {
    key: "request",
    value: function request(instance) {
      this.nexts.add(instance);
    }
  }, {
    key: "render",
    value: function render() {
      if (!_state.isActive) return;
      window.requestAnimationFrame(this.rendering);
      this.forEach(function (instance) {
        return instance.render();
      });
      if (!this.nexts.length) return;
      var nexts = this.nexts.clone();
      this.nexts.clear();
      nexts.forEach(function (instance) {
        return instance.next();
      });
    }
  }]);

  return Renderer;
}(Module);

var Resizer = /*#__PURE__*/function (_Module4) {
  _inherits(Resizer, _Module4);

  var _super6 = _createSuper(Resizer);

  function Resizer() {
    var _this8;

    _classCallCheck(this, Resizer);

    _this8 = _super6.call(this, 'resize');
    _this8.requireResize = false;
    _this8.resizing = _this8.resize.bind(_assertThisInitialized(_this8));

    var requesting = _this8.request.bind(_assertThisInitialized(_this8));

    if (document.fonts) {
      document.fonts.ready.then(requesting);
    }

    window.addEventListener('resize', requesting);
    window.addEventListener('orientationchange', requesting);
    return _this8;
  }

  _createClass(Resizer, [{
    key: "activate",
    value: function activate() {
      this.request();
    }
  }, {
    key: "request",
    value: function request() {
      if (this.requireResize) return;
      this.requireResize = true;
      window.requestAnimationFrame(this.resizing);
    }
  }, {
    key: "resize",
    value: function resize() {
      if (!this.requireResize) return;
      this.forEach(function (instance) {
        return instance.resize();
      });
      this.requireResize = false;
    }
  }]);

  return Resizer;
}(Module);

var ScrollLocker = /*#__PURE__*/function (_Module5) {
  _inherits(ScrollLocker, _Module5);

  var _super7 = _createSuper(ScrollLocker);

  function ScrollLocker() {
    var _this9;

    _classCallCheck(this, ScrollLocker);

    _this9 = _super7.call(this, 'lock');
    _this9._isLocked = false;
    _this9._scrollY = 0;
    _this9.onPopulate = _this9.lock.bind(_assertThisInitialized(_this9));
    _this9.onEmpty = _this9.unlock.bind(_assertThisInitialized(_this9));
    return _this9;
  }

  _createClass(ScrollLocker, [{
    key: "isLocked",
    get: function get() {
      return this._isLocked;
    }
  }, {
    key: "lock",
    value: function lock() {
      if (!this._isLocked) {
        this._isLocked = true;
        this._scrollY = window.scrollY;
        if (this.isLegacy) document.body.style.top = this._scrollY * -1 + 'px';else document.body.style.setProperty('--scroll-top', this._scrollY * -1 + 'px');
        document.documentElement.setAttribute(ns.attr('scrolling'), 'false');
      }
    }
  }, {
    key: "unlock",
    value: function unlock() {
      if (this._isLocked) {
        this._isLocked = false;
        document.documentElement.removeAttribute(ns.attr('scrolling'));
        if (this.isLegacy) document.body.style.top = '';else document.body.style.removeProperty('--scroll-top');
        window.scroll(0, this._scrollY);
      }
    }
  }]);

  return ScrollLocker;
}(Module);

var Load = /*#__PURE__*/function (_Module6) {
  _inherits(Load, _Module6);

  var _super8 = _createSuper(Load);

  function Load() {
    var _this10;

    _classCallCheck(this, Load);

    _this10 = _super8.call(this, 'load');
    _this10.loading = _this10.load.bind(_assertThisInitialized(_this10));
    return _this10;
  }

  _createClass(Load, [{
    key: "activate",
    value: function activate() {
      window.addEventListener('load', this.loading);
    }
  }, {
    key: "load",
    value: function load() {
      this.forEach(function (instance) {
        return instance.load();
      });
    }
  }]);

  return Load;
}(Module);

var FONT_FAMILIES = ['Marianne', 'Spectral'];

var FontSwap = /*#__PURE__*/function (_Module7) {
  _inherits(FontSwap, _Module7);

  var _super9 = _createSuper(FontSwap);

  function FontSwap() {
    var _this11;

    _classCallCheck(this, FontSwap);

    _this11 = _super9.call(this, 'font-swap');
    _this11.swapping = _this11.swap.bind(_assertThisInitialized(_this11));
    return _this11;
  }

  _createClass(FontSwap, [{
    key: "activate",
    value: function activate() {
      if (document.fonts) {
        document.fonts.addEventListener('loadingdone', this.swapping);
      }
    }
  }, {
    key: "swap",
    value: function swap() {
      var families = FONT_FAMILIES.filter(function (family) {
        return document.fonts.check("16px ".concat(family));
      });
      this.forEach(function (instance) {
        return instance.swapFont(families);
      });
    }
  }]);

  return FontSwap;
}(Module);

var MouseMove = /*#__PURE__*/function (_Module8) {
  _inherits(MouseMove, _Module8);

  var _super10 = _createSuper(MouseMove);

  function MouseMove() {
    var _this12;

    _classCallCheck(this, MouseMove);

    _this12 = _super10.call(this, 'mouse-move');
    _this12.requireMove = false;
    _this12._isMoving = false;
    _this12.moving = _this12.move.bind(_assertThisInitialized(_this12));
    _this12.requesting = _this12.request.bind(_assertThisInitialized(_this12));
    _this12.onPopulate = _this12.listen.bind(_assertThisInitialized(_this12));
    _this12.onEmpty = _this12.unlisten.bind(_assertThisInitialized(_this12));
    return _this12;
  }

  _createClass(MouseMove, [{
    key: "listen",
    value: function listen() {
      if (this._isMoving) return;
      this._isMoving = true;
      this.requireMove = false;
      document.documentElement.addEventListener('mousemove', this.requesting);
    }
  }, {
    key: "unlisten",
    value: function unlisten() {
      if (!this._isMoving) return;
      this._isMoving = false;
      this.requireMove = false;
      document.documentElement.removeEventListener('mousemove', this.requesting);
    }
  }, {
    key: "request",
    value: function request(e) {
      if (!this._isMoving) return;
      this.point = {
        x: e.clientX,
        y: e.clientY
      };
      if (this.requireMove) return;
      this.requireMove = true;
      window.requestAnimationFrame(this.moving);
    }
  }, {
    key: "move",
    value: function move() {
      var _this13 = this;

      if (!this.requireMove) return;
      this.forEach(function (instance) {
        return instance.mouseMove(_this13.point);
      });
      this.requireMove = false;
    }
  }]);

  return MouseMove;
}(Module);

var Engine = /*#__PURE__*/function () {
  function Engine() {
    _classCallCheck(this, Engine);

    _state.create(Register);

    _state.create(Stage);

    _state.create(Renderer);

    _state.create(Resizer);

    _state.create(ScrollLocker);

    _state.create(Load);

    _state.create(FontSwap);

    _state.create(MouseMove);

    var registerModule = _state.getModule('register');

    this.register = registerModule.register.bind(registerModule);
  }

  _createClass(Engine, [{
    key: "isActive",
    get: function get() {
      return _state.isActive;
    }
  }, {
    key: "start",
    value: function start() {
      inspector.debug('START');
      _state.isActive = true;
    }
  }, {
    key: "stop",
    value: function stop() {
      inspector.debug('STOP');
      _state.isActive = false;
    }
  }]);

  return Engine;
}();

var engine = new Engine();

var Colors = /*#__PURE__*/function () {
  function Colors() {
    _classCallCheck(this, Colors);
  }

  _createClass(Colors, [{
    key: "getColor",
    value: function getColor(context, use, tint) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var option = getOption(options);
      var decision = "--".concat(context, "-").concat(use, "-").concat(tint).concat(option);
      return getComputedStyle(document.documentElement).getPropertyValue(decision).trim() || null;
    }
  }]);

  return Colors;
}();

var getOption = function getOption(options) {
  switch (true) {
    case options.hover:
      return '-hover';

    case options.active:
      return '-active';

    default:
      return '';
  }
};

var colors = new Colors();

var sanitize = function sanitize(className) {
  return className.charAt(0) === '.' ? className.substr(1) : className;
};

var getClassNames = function getClassNames(element) {
  return element.className ? element.className.split(' ') : [];
};

var modifyClass = function modifyClass(element, className, remove) {
  className = sanitize(className);
  var classNames = getClassNames(element);
  var index = classNames.indexOf(className);

  if (remove === true) {
    if (index > -1) classNames.splice(index, 1);
  } else if (index === -1) classNames.push(className);

  element.className = classNames.join(' ');
};

var _addClass = function addClass(element, className) {
  return modifyClass(element, className);
};

var _removeClass = function removeClass(element, className) {
  return modifyClass(element, className, true);
};

var _hasClass = function hasClass(element, className) {
  return getClassNames(element).indexOf(sanitize(className)) > -1;
};

var ACTIONS = ['[tabindex]:not([tabindex="-1"])', 'a[href]', 'button:not([disabled])', 'input:not([disabled])', 'select:not([disabled])', 'textarea:not([disabled])', 'audio[controls]', 'video[controls]', '[contenteditable]:not([contenteditable="false"])', 'details>summary:first-of-type', 'details', 'iframe'];
var ACTIONS_SELECTOR = ACTIONS.join();

var queryActions = function queryActions(element) {
  return element.querySelectorAll(ACTIONS_SELECTOR);
};

var dom = {};
dom.addClass = _addClass;
dom.hasClass = _hasClass;
dom.removeClass = _removeClass;
dom.queryParentSelector = _queryParentSelector;
dom.querySelectorAllArray = querySelectorAllArray;
dom.queryActions = queryActions;

var supportLocalStorage = function supportLocalStorage() {
  try {
    return 'localStorage' in window && window.localStorage !== null;
  } catch (e) {
    return false;
  }
};

var supportAspectRatio = function supportAspectRatio() {
  if (!window.CSS) return false;
  return CSS.supports('aspect-ratio: 16 / 9');
};

var support = {};
support.supportLocalStorage = supportLocalStorage;
support.supportAspectRatio = supportAspectRatio;
var TransitionSelector = {
  NONE: ns.selector('transition-none')
};
var selector = {};
selector.TransitionSelector = TransitionSelector;
/**
 * Copy properties from multiple sources including accessors.
 * source : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#copier_des_accesseurs
 *
 * @param {object} [target] - Target object to copy into
 * @param {...objects} [sources] - Multiple objects
 * @return {object} A new object
 *
 * @example
 *
 *     const obj1 = {
 *        key: 'value'
 *     };
 *     const obj2 = {
 *        get function01 () {
 *          return a-value;
 *        }
 *        set function01 () {
 *          return a-value;
 *        }
 *     };
 *     completeAssign(obj1, obj2)
 */

var completeAssign = function completeAssign(target) {
  for (var _len4 = arguments.length, sources = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
    sources[_key4 - 1] = arguments[_key4];
  }

  sources.forEach(function (source) {
    var descriptors = Object.keys(source).reduce(function (descriptors, key) {
      descriptors[key] = Object.getOwnPropertyDescriptor(source, key);
      return descriptors;
    }, {});
    Object.getOwnPropertySymbols(source).forEach(function (sym) {
      var descriptor = Object.getOwnPropertyDescriptor(source, sym);

      if (descriptor.enumerable) {
        descriptors[sym] = descriptor;
      }
    });
    Object.defineProperties(target, descriptors);
  });
  return target;
};

var property = {};
property.completeAssign = completeAssign;
var internals = {};
var legacy = {};
Object.defineProperty(legacy, 'isLegacy', {
  get: function get() {
    return _state.isLegacy;
  }
});

legacy.setLegacy = function () {
  _state.isLegacy = true;
};

internals.legacy = legacy;
internals.dom = dom;
internals.support = support;
internals.motion = selector;
internals.property = property;
internals.ns = ns;
internals.register = engine.register;
internals.state = _state;
Object.defineProperty(internals, 'preventManipulation', {
  get: function get() {
    return options.preventManipulation;
  }
});
Object.defineProperty(internals, 'stage', {
  get: function get() {
    return _state.getModule('stage');
  }
});
inspector.info("version ".concat(config.version));

var api$1 = function api$1(node) {
  var stage = _state.getModule('stage');

  return stage.getProxy(node);
};

api$1.Modes = Modes;
Object.defineProperty(api$1, 'mode', {
  set: function set(value) {
    options.mode = value;
  },
  get: function get() {
    return options.mode;
  }
});
api$1.internals = internals;
api$1.start = engine.start;
api$1.stop = engine.stop;
api$1.inspector = inspector;
api$1.colors = colors;
options.configure(window[config.namespace], api$1.start);
window[config.namespace] = api$1;

var Emitter = /*#__PURE__*/function () {
  function Emitter() {
    _classCallCheck(this, Emitter);

    this.emissions = {};
  }

  _createClass(Emitter, [{
    key: "add",
    value: function add(type, closure) {
      if (typeof closure !== 'function') throw new Error('closure must be a function');
      if (!this.emissions[type]) this.emissions[type] = [];
      this.emissions[type].push(closure);
    }
  }, {
    key: "remove",
    value: function remove(type, closure) {
      if (!this.emissions[type]) return;
      if (!closure) delete this.emissions[type];else {
        var index = this.emissions[type].indexOf(closure);
        if (index > -1) this.emissions[type].splice(index);
      }
    }
  }, {
    key: "emit",
    value: function emit(type, data) {
      if (!this.emissions[type]) return [];
      var response = [];

      var _iterator23 = _createForOfIteratorHelper(this.emissions[type]),
          _step23;

      try {
        for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
          var closure = _step23.value;
          if (closure) response.push(closure(data));
        }
      } catch (err) {
        _iterator23.e(err);
      } finally {
        _iterator23.f();
      }

      return response;
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this.emissions = null;
    }
  }]);

  return Emitter;
}();

var Breakpoint = /*#__PURE__*/function () {
  function Breakpoint(id, minWidth) {
    _classCallCheck(this, Breakpoint);

    this.id = id;
    this.minWidth = minWidth;
  }

  _createClass(Breakpoint, [{
    key: "test",
    value: function test() {
      return window.matchMedia("(min-width: ".concat(this.minWidth, "em)")).matches;
    }
  }]);

  return Breakpoint;
}();

var Breakpoints = {
  XS: new Breakpoint('xs', 0),
  SM: new Breakpoint('sm', 36),
  MD: new Breakpoint('md', 48),
  LG: new Breakpoint('lg', 62),
  XL: new Breakpoint('xl', 78)
};

var Instance = /*#__PURE__*/function () {
  function Instance() {
    var jsAttribute = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    _classCallCheck(this, Instance);

    this.jsAttribute = jsAttribute;
    this._isRendering = false;
    this._isResizing = false;
    this._isScrollLocked = false;
    this._isLoading = false;
    this._isSwappingFont = false;
    this._listeners = {};
    this._keyListenerTypes = [];
    this._keys = [];
    this.handlingKey = this.handleKey.bind(this);
    this._emitter = new Emitter();
    this._ascent = new Emitter();
    this._descent = new Emitter();
    this._registrations = [];
    this._nexts = [];
  }

  _createClass(Instance, [{
    key: "_config",
    value: function _config(element, registration) {
      this.element = element;
      this.registration = registration;
      this.node = element.node;
      this.id = element.node.id;
      if (this.jsAttribute) this.setAttribute(registration.attribute, true);
      this.init();
    }
  }, {
    key: "init",
    value: function init() {}
  }, {
    key: "proxy",
    get: function get() {
      var scope = this;
      return {
        render: function render() {
          return scope.render();
        },
        resize: function resize() {
          return scope.resize();
        }
      };
    }
  }, {
    key: "register",
    value: function register(selector, InstanceClass) {
      var registration = _state.getModule('register').register(selector, InstanceClass, this);

      this._registrations.push(registration);
    }
  }, {
    key: "getRegisteredInstances",
    value: function getRegisteredInstances(instanceClassName) {
      var _iterator24 = _createForOfIteratorHelper(this._registrations),
          _step24;

      try {
        for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
          var registration = _step24.value;
          if (registration.hasInstanceClassName(instanceClassName)) return registration.instances.collection;
        }
      } catch (err) {
        _iterator24.e(err);
      } finally {
        _iterator24.f();
      }

      return [];
    }
  }, {
    key: "dispatch",
    value: function dispatch(type, detail, bubbles, cancelable) {
      var event = new CustomEvent(type, {
        detail: detail,
        bubble: bubbles === true,
        cancelable: cancelable === true
      });
      this.node.dispatchEvent(event);
    }
  }, {
    key: "listen",
    value: function listen(type, closure, options) {
      if (!this._listeners[type]) this._listeners[type] = [];
      if (this._listeners[type].indexOf(closure) > -1) return;

      this._listeners[type].push(closure);

      this.node.addEventListener(type, closure, options);
    }
  }, {
    key: "unlisten",
    value: function unlisten(type, closure) {
      if (!type) {
        for (var _type in this._listeners) {
          this.unlisten(_type);
        }
      } else if (!closure) {
        if (!this._listeners[type]) return;

        var _iterator25 = _createForOfIteratorHelper(this._listeners[type]),
            _step25;

        try {
          for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
            var _closure = _step25.value;
            this.node.removeEventListener(type, _closure);
          }
        } catch (err) {
          _iterator25.e(err);
        } finally {
          _iterator25.f();
        }

        this._listeners[type].length = 0;
      } else {
        if (!this._listeners[type]) return;

        var index = this._listeners[type].indexOf(closure);

        if (index > -1) this._listeners[type].splice(index, 1);
        this.node.removeEventListener(type, closure);
      }
    }
  }, {
    key: "listenKey",
    value: function listenKey(code, closure) {
      var preventDefault = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var stopPropagation = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var type = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'down';

      if (this._keyListenerTypes.indexOf(type) === -1) {
        this.listen("key".concat(type), this.handlingKey);

        this._keyListenerTypes.push(type);
      }

      this._keys.push(new KeyAction(type, code, closure, preventDefault, stopPropagation));
    }
  }, {
    key: "unlistenKey",
    value: function unlistenKey(code, closure) {
      var _this14 = this;

      this._keys = this._keys.filter(function (key) {
        return key.code !== code || key.closure !== closure;
      });

      this._keyListenerTypes.forEach(function (type) {
        if (!_this14._keys.some(function (key) {
          return key.type === type;
        })) _this14.unlisten("key".concat(type), _this14.handlingKey);
      });
    }
  }, {
    key: "handleKey",
    value: function handleKey(e) {
      var _iterator26 = _createForOfIteratorHelper(this._keys),
          _step26;

      try {
        for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
          var key = _step26.value;
          key.handle(e);
        }
      } catch (err) {
        _iterator26.e(err);
      } finally {
        _iterator26.f();
      }
    }
  }, {
    key: "isRendering",
    get: function get() {
      return this._isRendering;
    },
    set: function set(value) {
      if (this._isRendering === value) return;
      if (value) _state.add('render', this);else _state.remove('render', this);
      this._isRendering = value;
    }
  }, {
    key: "render",
    value: function render() {}
  }, {
    key: "request",
    value: function request(closure) {
      this._nexts.push(closure);

      _state.getModule('render').request(this);
    }
  }, {
    key: "next",
    value: function next() {
      var nexts = this._nexts.slice();

      this._nexts.length = 0;

      var _iterator27 = _createForOfIteratorHelper(nexts),
          _step27;

      try {
        for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
          var closure = _step27.value;
          if (closure) closure();
        }
      } catch (err) {
        _iterator27.e(err);
      } finally {
        _iterator27.f();
      }
    }
  }, {
    key: "isResizing",
    get: function get() {
      return this._isResizing;
    },
    set: function set(value) {
      if (this._isResizing === value) return;

      if (value) {
        _state.add('resize', this);

        this.resize();
      } else _state.remove('resize', this);

      this._isResizing = value;
    }
  }, {
    key: "resize",
    value: function resize() {}
  }, {
    key: "isBreakpoint",
    value: function isBreakpoint(breakpoint) {
      switch (true) {
        case typeof breakpoint === 'string':
          return Breakpoints[breakpoint.toUpperCase()].test();

        default:
          return breakpoint.test();
      }
    }
  }, {
    key: "isScrollLocked",
    get: function get() {
      return this._isScrollLocked;
    },
    set: function set(value) {
      if (this._isScrollLocked === value) return;
      if (value) _state.add('lock', this);else _state.remove('lock', this);
      this._isScrollLocked = value;
    }
  }, {
    key: "isLoading",
    get: function get() {
      return this._isLoading;
    },
    set: function set(value) {
      if (this._isLoading === value) return;
      if (value) _state.add('load', this);else _state.remove('load', this);
      this._isLoading = value;
    }
  }, {
    key: "load",
    value: function load() {}
  }, {
    key: "isSwappingFont",
    get: function get() {
      return this._isSwappingFont;
    },
    set: function set(value) {
      if (this._isSwappingFont === value) return;
      if (value) _state.add('font-swap', this);else _state.remove('font-swap', this);
      this._isSwappingFont = value;
    }
  }, {
    key: "swapFont",
    value: function swapFont() {}
  }, {
    key: "isMouseMoving",
    get: function get() {
      return this._isMouseMoving;
    },
    set: function set(value) {
      if (this._isMouseMoving === value) return;

      if (value) {
        _state.add('mouse-move', this);
      } else {
        _state.remove('mouse-move', this);
      }

      this._isMouseMoving = value;
    }
  }, {
    key: "mouseMove",
    value: function mouseMove(point) {}
  }, {
    key: "examine",
    value: function examine(attributeNames) {
      if (!this.node.matches(this.registration.selector)) {
        this._dispose();

        return;
      }

      this.mutate(attributeNames);
    }
  }, {
    key: "mutate",
    value: function mutate(attributeNames) {}
  }, {
    key: "_dispose",
    value: function _dispose() {
      inspector.debug("dispose instance of ".concat(this.registration.instanceClassName, " on element [").concat(this.element.id, "]"));
      this.removeAttribute(this.registration.attribute);
      this.unlisten();
      this._keys = null;
      this.isRendering = false;
      this.isResizing = false;
      this._nexts = null;

      _state.getModule('render').nexts.remove(this);

      this.isScrollLocked = false;
      this.isLoading = false;
      this.isSwappingFont = false;

      this._emitter.dispose();

      this._emitter = null;

      this._ascent.dispose();

      this._ascent = null;

      this._descent.dispose();

      this._descent = null;
      this.element.remove(this);

      var _iterator28 = _createForOfIteratorHelper(this._registrations),
          _step28;

      try {
        for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
          var registration = _step28.value;

          _state.remove('register', registration);
        }
      } catch (err) {
        _iterator28.e(err);
      } finally {
        _iterator28.f();
      }

      this._registrations = null;
      this.registration.remove(this);
      this.dispose();
    }
  }, {
    key: "dispose",
    value: function dispose() {}
  }, {
    key: "emit",
    value: function emit(type, data) {
      return this.element.emit(type, data);
    }
  }, {
    key: "addEmission",
    value: function addEmission(type, closure) {
      this._emitter.add(type, closure);
    }
  }, {
    key: "removeEmission",
    value: function removeEmission(type, closure) {
      this._emitter.remove(type, closure);
    }
  }, {
    key: "ascend",
    value: function ascend(type, data) {
      return this.element.ascend(type, data);
    }
  }, {
    key: "addAscent",
    value: function addAscent(type, closure) {
      this._ascent.add(type, closure);
    }
  }, {
    key: "removeAscent",
    value: function removeAscent(type, closure) {
      this._ascent.remove(type, closure);
    }
  }, {
    key: "descend",
    value: function descend(type, data) {
      return this.element.descend(type, data);
    }
  }, {
    key: "addDescent",
    value: function addDescent(type, closure) {
      this._descent.add(type, closure);
    }
  }, {
    key: "removeDescent",
    value: function removeDescent(type, closure) {
      this._descent.remove(type, closure);
    }
  }, {
    key: "style",
    get: function get() {
      return this.node.style;
    }
  }, {
    key: "addClass",
    value: function addClass(className) {
      _addClass(this.node, className);
    }
  }, {
    key: "removeClass",
    value: function removeClass(className) {
      _removeClass(this.node, className);
    }
  }, {
    key: "hasClass",
    value: function hasClass(className) {
      return _hasClass(this.node, className);
    }
  }, {
    key: "classNames",
    get: function get() {
      return getClassNames(this.node);
    }
  }, {
    key: "remove",
    value: function remove() {
      this.node.parentNode.removeChild(this.node);
    }
  }, {
    key: "setAttribute",
    value: function setAttribute(attributeName, value) {
      this.node.setAttribute(attributeName, value);
    }
  }, {
    key: "getAttribute",
    value: function getAttribute(attributeName) {
      return this.node.getAttribute(attributeName);
    }
  }, {
    key: "hasAttribute",
    value: function hasAttribute(attributeName) {
      return this.node.hasAttribute(attributeName);
    }
  }, {
    key: "removeAttribute",
    value: function removeAttribute(attributeName) {
      this.node.removeAttribute(attributeName);
    }
  }, {
    key: "setProperty",
    value: function setProperty(propertyName, value) {
      this.node.style.setProperty(propertyName, value);
    }
  }, {
    key: "removeProperty",
    value: function removeProperty(propertyName) {
      this.node.style.removeProperty(propertyName);
    }
  }, {
    key: "focus",
    value: function focus() {
      this.node.focus();
    }
  }, {
    key: "focusClosest",
    value: function focusClosest() {
      var closest = this._focusClosest(this.node.parentNode);

      if (closest) closest.focus();
    }
  }, {
    key: "_focusClosest",
    value: function _focusClosest(parent) {
      if (!parent) return null;

      var actions = _toConsumableArray(queryActions(parent));

      if (actions.length <= 1) {
        return this._focusClosest(parent.parentNode);
      } else {
        var index = actions.indexOf(this.node);
        return actions[index + (index < actions.length - 1 ? 1 : -1)];
      }
    }
  }, {
    key: "hasFocus",
    get: function get() {
      return this.node === document.activeElement;
    }
  }, {
    key: "matches",
    value: function matches(selectors) {
      return this.node.matches(selectors);
    }
  }, {
    key: "querySelector",
    value: function querySelector(selectors) {
      return this.node.querySelector(selectors);
    }
  }, {
    key: "querySelectorAll",
    value: function querySelectorAll(selectors) {
      return querySelectorAllArray(this.node, selectors);
    }
  }, {
    key: "queryParentSelector",
    value: function queryParentSelector(selectors) {
      return _queryParentSelector(this.node, selectors);
    }
  }, {
    key: "getRect",
    value: function getRect() {
      return this.node.getBoundingClientRect();
    }
  }, {
    key: "isLegacy",
    get: function get() {
      return _state.isLegacy;
    }
  }], [{
    key: "instanceClassName",
    get: function get() {
      return 'Instance';
    }
  }]);

  return Instance;
}();

var KeyAction = /*#__PURE__*/function () {
  function KeyAction(type, code, closure, preventDefault, stopPropagation) {
    _classCallCheck(this, KeyAction);

    this.type = type;
    this.eventType = "key".concat(type);
    this.code = code;
    this.closure = closure;
    this.preventDefault = preventDefault === true;
    this.stopPropagation = stopPropagation === true;
  }

  _createClass(KeyAction, [{
    key: "handle",
    value: function handle(e) {
      if (e.type !== this.eventType) return;

      if (e.keyCode === this.code) {
        this.closure(e);

        if (this.preventDefault) {
          e.preventDefault();
        }

        if (this.stopPropagation) {
          e.stopPropagation();
        }
      }
    }
  }]);

  return KeyAction;
}();

var KeyCodes = {
  TAB: 9,
  ESCAPE: 27,
  END: 35,
  HOME: 36,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
};
var DisclosureEvent = {
  DISCLOSE: ns.event('disclose'),
  CONCEAL: ns.event('conceal')
};
var DisclosureEmission = {
  RESET: ns.emission('disclosure', 'reset'),
  ADDED: ns.emission('disclosure', 'added'),
  REMOVED: ns.emission('disclosure', 'removed'),
  GROUP: ns.emission('disclosure', 'group'),
  UNGROUP: ns.emission('disclosure', 'ungroup')
};

var Disclosure = /*#__PURE__*/function (_Instance) {
  _inherits(Disclosure, _Instance);

  var _super11 = _createSuper(Disclosure);

  function Disclosure(type, selector, DisclosureButtonInstanceClass, disclosuresGroupInstanceClassName) {
    var _this15;

    _classCallCheck(this, Disclosure);

    _this15 = _super11.call(this);
    _this15.type = type;
    _this15._selector = selector;
    _this15.DisclosureButtonInstanceClass = DisclosureButtonInstanceClass;
    _this15.disclosuresGroupInstanceClassName = disclosuresGroupInstanceClassName;
    _this15.modifier = _this15._selector + '--' + _this15.type.id;
    _this15.pristine = true;
    return _this15;
  }

  _createClass(Disclosure, [{
    key: "init",
    value: function init() {
      this.addDescent(DisclosureEmission.RESET, this.reset.bind(this));
      this.addDescent(DisclosureEmission.GROUP, this.update.bind(this));
      this.addDescent(DisclosureEmission.UNGROUP, this.update.bind(this));
      this.register("[aria-controls=\"".concat(this.id, "\"]"), this.DisclosureButtonInstanceClass);
      this.ascend(DisclosureEmission.ADDED);
      this.update();
    }
  }, {
    key: "proxy",
    get: function get() {
      var scope = this;
      var proxy = Object.assign(_get(_getPrototypeOf(Disclosure.prototype), "proxy", this), {
        disclose: scope.disclose.bind(scope),
        focus: scope.focus.bind(scope)
      });
      if (this.type.canConceal) proxy.conceal = scope.conceal.bind(scope);
      var proxyAccessors = {
        get buttons() {
          return scope.buttons.map(function (button) {
            return button.proxy;
          });
        },

        get group() {
          var group = scope.group;
          return group ? group.proxy : null;
        }

      };
      return completeAssign(proxy, proxyAccessors);
    }
  }, {
    key: "buttons",
    get: function get() {
      return this.getRegisteredInstances(this.DisclosureButtonInstanceClass.instanceClassName);
    }
  }, {
    key: "update",
    value: function update() {
      this.getGroup();
    }
  }, {
    key: "getGroup",
    value: function getGroup() {
      if (!this.disclosuresGroupInstanceClassName) {
        this._group = null;
        return;
      }

      var group = this.element.getAscendantInstance(this.disclosuresGroupInstanceClassName, this.constructor.instanceClassName);

      if (!group || !group.validate(this)) {
        this._group = null;
        return;
      }

      this._group = group;
    }
  }, {
    key: "group",
    get: function get() {
      return this._group;
    }
  }, {
    key: "disclose",
    value: function disclose(withhold) {
      if (this.disclosed) return false;
      this.pristine = false;
      this.disclosed = true;
      if (!withhold && this.group) this.group.current = this;
      return true;
    }
  }, {
    key: "conceal",
    value: function conceal(withhold, preventFocus) {
      if (!this.disclosed) return false;
      if (!this.type.canConceal && this.group && this.group.current === this) return false;
      this.pristine = false;
      this.disclosed = false;
      if (!withhold && this.group && this.group.current === this) this.group.current = null;
      if (!preventFocus) this.focus();
      this.descend(DisclosureEmission.RESET);
      return true;
    }
  }, {
    key: "disclosed",
    get: function get() {
      return this._disclosed;
    },
    set: function set(value) {
      if (this._disclosed === value) return;
      this.dispatch(value ? DisclosureEvent.DISCLOSE : DisclosureEvent.CONCEAL, this.type);
      this._disclosed = value;
      if (value) this.addClass(this.modifier);else this.removeClass(this.modifier);

      for (var i = 0; i < this.buttons.length; i++) {
        this.buttons[i].apply(value);
      }
    }
  }, {
    key: "reset",
    value: function reset() {}
  }, {
    key: "toggle",
    value: function toggle(isPrimary) {
      if (!this.type.canConceal) this.disclose();else {
        switch (true) {
          case !isPrimary:
          case this.disclosed:
            this.conceal();
            break;

          default:
            this.disclose();
        }
      }
    }
  }, {
    key: "buttonHasFocus",
    get: function get() {
      if (this.buttons.some(function (button) {
        return button.hasFocus;
      })) return true;
      return false;
    }
  }, {
    key: "hasFocus",
    get: function get() {
      if (_get(_getPrototypeOf(Disclosure.prototype), "hasFocus", this)) return true;
      if (this.buttonHasFocus) return true;
      return this.querySelectorAll(':focus').length > 0;
    }
  }, {
    key: "focus",
    value: function focus() {
      for (var i = 0; i < this.buttons.length; i++) {
        var button = this.buttons[i];

        if (button.isPrimary) {
          button.focus();
          return;
        }
      }
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this._group = null;

      _get(_getPrototypeOf(Disclosure.prototype), "dispose", this).call(this);

      this.ascend(DisclosureEmission.REMOVED);
    }
  }], [{
    key: "instanceClassName",
    get: function get() {
      return 'Disclosure';
    }
  }]);

  return Disclosure;
}(Instance);

var DisclosureButton = /*#__PURE__*/function (_Instance2) {
  _inherits(DisclosureButton, _Instance2);

  var _super12 = _createSuper(DisclosureButton);

  function DisclosureButton(type) {
    var _this16;

    _classCallCheck(this, DisclosureButton);

    _this16 = _super12.call(this);
    _this16.type = type;
    _this16.attributeName = type.ariaState ? 'aria-' + type.id : ns.attr(type.id);
    return _this16;
  }

  _createClass(DisclosureButton, [{
    key: "init",
    value: function init() {
      this.controlsId = this.getAttribute('aria-controls');
      this.isPrimary = this.hasAttribute(this.attributeName);
      if (this.isPrimary && this.disclosed && this.registration.creator.pristine) this.registration.creator.disclose();
      this.listen('click', this.click.bind(this));
    }
  }, {
    key: "proxy",
    get: function get() {
      var scope = this;
      return Object.assign(_get(_getPrototypeOf(DisclosureButton.prototype), "proxy", this), {
        focus: scope.focus.bind(scope)
      });
    }
  }, {
    key: "click",
    value: function click(e) {
      if (this.registration.creator) this.registration.creator.toggle(this.isPrimary);
    }
  }, {
    key: "mutate",
    value: function mutate(attributeNames) {
      if (this.isPrimary && attributeNames.indexOf(this.attributeName) > -1 && this.registration.creator) {
        if (this.disclosed) this.registration.creator.disclose();else if (this.type.canConceal) this.registration.creator.conceal();
      }
    }
  }, {
    key: "apply",
    value: function apply(value) {
      if (!this.isPrimary) return;
      this.setAttribute(this.attributeName, value);
    }
  }, {
    key: "disclosed",
    get: function get() {
      return this.getAttribute(this.attributeName) === 'true';
    }
  }], [{
    key: "instanceClassName",
    get: function get() {
      return 'DisclosureButton';
    }
  }]);

  return DisclosureButton;
}(Instance);

var DisclosuresGroup = /*#__PURE__*/function (_Instance3) {
  _inherits(DisclosuresGroup, _Instance3);

  var _super13 = _createSuper(DisclosuresGroup);

  function DisclosuresGroup(disclosureInstanceClassName, jsAttribute) {
    var _this17;

    _classCallCheck(this, DisclosuresGroup);

    _this17 = _super13.call(this, jsAttribute);
    _this17.disclosureInstanceClassName = disclosureInstanceClassName;
    _this17._index = -1;
    return _this17;
  }

  _createClass(DisclosuresGroup, [{
    key: "init",
    value: function init() {
      this.addAscent(DisclosureEmission.ADDED, this.update.bind(this));
      this.addAscent(DisclosureEmission.REMOVED, this.update.bind(this));
      this.descend(DisclosureEmission.GROUP);
      this.update();
    }
  }, {
    key: "proxy",
    get: function get() {
      var scope = this;
      var proxyAccessors = {
        set index(value) {
          scope.index = value;
        },

        get index() {
          return scope.index;
        },

        get length() {
          return scope.length;
        },

        get current() {
          var current = scope.current;
          return current ? current.proxy : null;
        },

        get members() {
          return scope.members.map(function (member) {
            return member.proxy;
          });
        },

        get hasFocus() {
          return scope.hasFocus;
        }

      };
      return completeAssign(_get(_getPrototypeOf(DisclosuresGroup.prototype), "proxy", this), proxyAccessors);
    }
  }, {
    key: "validate",
    value: function validate(member) {
      return true;
    }
  }, {
    key: "getMembers",
    value: function getMembers() {
      var members = this.element.getDescendantInstances(this.disclosureInstanceClassName, this.constructor.instanceClassName, true);
      this._members = members.filter(this.validate.bind(this));
    }
  }, {
    key: "update",
    value: function update() {
      this.getMembers();
      this.getIndex();
    }
  }, {
    key: "members",
    get: function get() {
      return this._members;
    }
  }, {
    key: "length",
    get: function get() {
      return this.members ? this.members.length : 0;
    }
  }, {
    key: "getIndex",
    value: function getIndex() {
      this._index = -1;

      for (var i = 0; i < this.length; i++) {
        if (this.index > -1) this.members[i].conceal(true, true);else if (this.members[i].disclosed) {
          this.index = i;
        }
      }
    }
  }, {
    key: "index",
    get: function get() {
      return this._index;
    },
    set: function set(value) {
      if (value < -1 || value >= this.length || value === this._index) return;
      this._index = value;

      for (var i = 0; i < this.length; i++) {
        var member = this.members[i];

        if (value === i) {
          member.disclose(true);
        } else {
          member.conceal(true, true);
        }
      }

      this.apply();
    }
  }, {
    key: "current",
    get: function get() {
      return this._index === -1 ? null : this.members[this._index];
    },
    set: function set(member) {
      this.index = this.members.indexOf(member);
    }
  }, {
    key: "hasFocus",
    get: function get() {
      var current = this.current;
      if (current) return current.hasFocus;
      return false;
    }
  }, {
    key: "apply",
    value: function apply() {}
  }, {
    key: "dispose",
    value: function dispose() {
      _get(_getPrototypeOf(DisclosuresGroup.prototype), "dispose", this).call(this);

      this.descend(DisclosureEmission.UNGROUP);
      this._members = null;
    }
  }], [{
    key: "instanceClassName",
    get: function get() {
      return 'DisclosuresGroup';
    }
  }]);

  return DisclosuresGroup;
}(Instance);

var DisclosureType = {
  EXPAND: {
    id: 'expanded',
    ariaState: true,
    ariaControls: true,
    canConceal: true
  },
  SELECT: {
    id: 'selected',
    ariaState: true,
    ariaControls: true,
    canConceal: false
  },
  OPENED: {
    id: 'opened',
    ariaState: false,
    ariaControls: true,
    canConceal: true
  }
};

var CollapseButton = /*#__PURE__*/function (_DisclosureButton) {
  _inherits(CollapseButton, _DisclosureButton);

  var _super14 = _createSuper(CollapseButton);

  function CollapseButton() {
    _classCallCheck(this, CollapseButton);

    return _super14.call(this, DisclosureType.EXPAND);
  }

  _createClass(CollapseButton, null, [{
    key: "instanceClassName",
    get: function get() {
      return 'CollapseButton';
    }
  }]);

  return CollapseButton;
}(DisclosureButton);

var CollapseSelector = {
  COLLAPSE: ns.selector('collapse'),
  COLLAPSING: ns.selector('collapsing')
};
/**
 * Tab coorespond au panel d'un élement Tabs (tab panel)
 * Tab étend disclosure qui ajoute/enleve le modifier --selected,
 * et ajoute/eleve l'attribut hidden, sur le panel
 */

var Collapse = /*#__PURE__*/function (_Disclosure) {
  _inherits(Collapse, _Disclosure);

  var _super15 = _createSuper(Collapse);

  function Collapse() {
    _classCallCheck(this, Collapse);

    return _super15.call(this, DisclosureType.EXPAND, CollapseSelector.COLLAPSE, CollapseButton, 'CollapsesGroup');
  }

  _createClass(Collapse, [{
    key: "init",
    value: function init() {
      _get(_getPrototypeOf(Collapse.prototype), "init", this).call(this);

      this.listen('transitionend', this.transitionend.bind(this));
    }
  }, {
    key: "transitionend",
    value: function transitionend(e) {
      this.removeClass(CollapseSelector.COLLAPSING);

      if (!this.disclosed) {
        if (this.isLegacy) this.style.maxHeight = '';else this.style.removeProperty('--collapse-max-height');
      }
    }
  }, {
    key: "unbound",
    value: function unbound() {
      if (this.isLegacy) this.style.maxHeight = 'none';else this.style.setProperty('--collapse-max-height', 'none');
    }
  }, {
    key: "disclose",
    value: function disclose(withhold) {
      var _this18 = this;

      if (this.disclosed) return;
      this.unbound();
      this.request(function () {
        _this18.addClass(CollapseSelector.COLLAPSING);

        _this18.adjust();

        _this18.request(function () {
          _get(_getPrototypeOf(Collapse.prototype), "disclose", _this18).call(_this18, withhold);
        });
      });
    }
  }, {
    key: "conceal",
    value: function conceal(withhold, preventFocus) {
      var _this19 = this;

      if (!this.disclosed) return;
      this.request(function () {
        _this19.addClass(CollapseSelector.COLLAPSING);

        _this19.adjust();

        _this19.request(function () {
          _get(_getPrototypeOf(Collapse.prototype), "conceal", _this19).call(_this19, withhold, preventFocus);
        });
      });
    }
  }, {
    key: "adjust",
    value: function adjust() {
      this.setProperty('--collapser', 'none');
      var height = this.node.offsetHeight;
      this.setProperty('--collapse', -height + 'px');
      this.setProperty('--collapser', '');
    }
  }, {
    key: "reset",
    value: function reset() {
      if (!this.pristine) this.disclosed = false;
    }
  }], [{
    key: "instanceClassName",
    get: function get() {
      return 'Collapse';
    }
  }]);

  return Collapse;
}(Disclosure);

var CollapsesGroup = /*#__PURE__*/function (_DisclosuresGroup) {
  _inherits(CollapsesGroup, _DisclosuresGroup);

  var _super16 = _createSuper(CollapsesGroup);

  function CollapsesGroup() {
    _classCallCheck(this, CollapsesGroup);

    return _super16.call(this, 'Collapse');
  }

  _createClass(CollapsesGroup, null, [{
    key: "instanceClassName",
    get: function get() {
      return 'CollapsesGroup';
    }
  }]);

  return CollapsesGroup;
}(DisclosuresGroup);

var EquisizedEmission = {
  CHANGE: ns('equisized')
};

var Equisized = /*#__PURE__*/function (_Instance4) {
  _inherits(Equisized, _Instance4);

  var _super17 = _createSuper(Equisized);

  function Equisized() {
    _classCallCheck(this, Equisized);

    return _super17.apply(this, arguments);
  }

  _createClass(Equisized, [{
    key: "init",
    value: function init() {
      this.ascend(EquisizedEmission.CHANGE);
    }
  }, {
    key: "measure",
    value: function measure() {
      if (this.isLegacy) this.style.width = 'auto';
      return this.getRect().width;
    }
  }, {
    key: "adjust",
    value: function adjust(width) {
      if (this.isLegacy) this.style.width = "".concat(width, "px");
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this.ascend(EquisizedEmission.CHANGE);
    }
  }], [{
    key: "instanceClassName",
    get: function get() {
      return 'Equisized';
    }
  }]);

  return Equisized;
}(Instance);

var EquisizedsGroup = /*#__PURE__*/function (_Instance5) {
  _inherits(EquisizedsGroup, _Instance5);

  var _super18 = _createSuper(EquisizedsGroup);

  function EquisizedsGroup() {
    _classCallCheck(this, EquisizedsGroup);

    return _super18.apply(this, arguments);
  }

  _createClass(EquisizedsGroup, [{
    key: "init",
    value: function init() {
      this.isResizing = true;
      this.isLoading = true;
      this.addAscent(EquisizedEmission.CHANGE, this.resize.bind(this));
    }
  }, {
    key: "load",
    value: function load() {
      this.resize();
    }
  }, {
    key: "resize",
    value: function resize() {
      var equisizeds = this.element.getDescendantInstances('Equisized');
      if (!this.isLegacy) this.style.setProperty('--equisized-width', 'auto');
      var width = Math.max.apply(Math, _toConsumableArray(equisizeds.map(function (equisized) {
        return equisized.measure();
      })));
      if (this.isLegacy) equisizeds.forEach(function (equisized) {
        return equisized.adjust(width);
      });else this.style.setProperty('--equisized-width', "".concat(width, "px"));
    }
  }], [{
    key: "instanceClassName",
    get: function get() {
      return 'EquisizedsGroup';
    }
  }]);

  return EquisizedsGroup;
}(Instance);

var ToggleEvent = {
  TOGGLE: ns.event('toggle')
};

var Toggle = /*#__PURE__*/function (_Instance6) {
  _inherits(Toggle, _Instance6);

  var _super19 = _createSuper(Toggle);

  function Toggle() {
    _classCallCheck(this, Toggle);

    return _super19.apply(this, arguments);
  }

  _createClass(Toggle, [{
    key: "init",
    value: function init() {
      this.pressed = this.pressed === 'true';
      this.listen('click', this.toggle.bind(this));
    }
  }, {
    key: "toggle",
    value: function toggle() {
      this.pressed = this.pressed !== 'true';
    }
  }, {
    key: "pressed",
    get: function get() {
      return this.getAttribute('aria-pressed');
    },
    set: function set(value) {
      this.setAttribute('aria-pressed', value ? 'true' : 'false');
      this.dispatch(ToggleEvent.TOGGLE, value);
    }
  }, {
    key: "proxy",
    get: function get() {
      var scope = this;
      var proxy = Object.assign(_get(_getPrototypeOf(Toggle.prototype), "proxy", this), {
        toggle: scope.toggle.bind(scope)
      });
      var proxyAccessors = {
        get pressed() {
          return scope.pressed;
        },

        set pressed(value) {
          scope.pressed = value;
        }

      };
      return completeAssign(proxy, proxyAccessors);
    }
  }], [{
    key: "instanceClassName",
    get: function get() {
      return 'Toggle';
    }
  }]);

  return Toggle;
}(Instance);

var setAttributes = function setAttributes(el, attrs) {
  Object.keys(attrs).forEach(function (key) {
    return el.setAttribute(key, attrs[key]);
  });
};

var InjectSvg = /*#__PURE__*/function (_Instance7) {
  _inherits(InjectSvg, _Instance7);

  var _super20 = _createSuper(InjectSvg);

  function InjectSvg() {
    _classCallCheck(this, InjectSvg);

    return _super20.apply(this, arguments);
  }

  _createClass(InjectSvg, [{
    key: "init",
    value: function init() {
      if (this.node) {
        this.img = this.node.querySelector('img');
      }

      if (!this.isLegacy) {
        this.replace();
      }
    }
  }, {
    key: "proxy",
    get: function get() {
      var scope = this;
      return Object.assign(_get(_getPrototypeOf(InjectSvg.prototype), "proxy", this), {
        replace: scope.replace.bind(scope),
        restore: scope.restore.bind(scope)
      });
    }
  }, {
    key: "fetch",
    value: function (_fetch) {
      function fetch() {
        return _fetch.apply(this, arguments);
      }

      fetch.toString = function () {
        return _fetch.toString();
      };

      return fetch;
    }(function () {
      var _this20 = this;

      if (this.img) {
        this.imgID = this.img.getAttribute('id');
        this.imgClass = this.img.getAttribute('class');
        this.imgURL = this.img.getAttribute('src');
        fetch(this.imgURL).then(function (data) {
          return data.text();
        }).then(function (response) {
          var parser = new DOMParser();
          var xmlDoc = parser.parseFromString(response, 'text/html');
          _this20.svg = xmlDoc.querySelector('svg');

          if (_this20.svg) {
            _this20.replace();
          }
        });
      }
    })
  }, {
    key: "replace",
    value: function replace() {
      if (!this.svg) {
        this.fetch();
        return;
      }

      if (this.imgID && typeof this.imgID !== 'undefined') {
        this.svg.setAttribute('id', this.imgID);
      } // gestion de la dépréciation


      var name = this.imgURL.match(/[ \w-]+\./)[0];

      if (name) {
        name = name.slice(0, -1);

        if (['dark', 'light', 'system'].includes(name)) {
          this.svg.innerHTML = this.svg.innerHTML.replaceAll('id="artwork-', "id=\"".concat(name, "-artwork-"));
          this.svg.innerHTML = this.svg.innerHTML.replaceAll('"#artwork-', "\"#".concat(name, "-artwork-"));
        }
      }

      if (this.imgClass && typeof this.imgClass !== 'undefined') {
        this.svg.setAttribute('class', this.imgClass);
      }

      if (this.svg.hasAttribute('xmlns:a')) {
        this.svg.removeAttribute('xmlns:a');
      }

      this.node.setAttribute('data-fr-inject-svg', true);
      var svgAttributes = {
        'aria-hidden': true,
        focusable: false
      };
      setAttributes(this.svg, svgAttributes);
      this.node.replaceChild(this.svg, this.img);
    }
  }, {
    key: "restore",
    value: function restore() {
      if (this.img && this.svg) {
        this.node.setAttribute('data-fr-inject-svg', false);
        this.node.replaceChild(this.img, this.svg);
      }
    }
  }], [{
    key: "instanceClassName",
    get: function get() {
      return 'InjectSvg';
    }
  }]);

  return InjectSvg;
}(Instance);

var InjectSvgSelector = {
  INJECT_SVG: "[".concat(ns.attr('inject-svg'), "]")
};

var Artwork = /*#__PURE__*/function (_Instance8) {
  _inherits(Artwork, _Instance8);

  var _super21 = _createSuper(Artwork);

  function Artwork() {
    _classCallCheck(this, Artwork);

    return _super21.apply(this, arguments);
  }

  _createClass(Artwork, [{
    key: "init",
    value: function init() {
      if (this.isLegacy) {
        this.replace();
      }
    }
  }, {
    key: "proxy",
    get: function get() {
      var scope = this;
      return Object.assign(_get(_getPrototypeOf(Artwork.prototype), "proxy", this), {
        replace: scope.replace.bind(scope)
      });
    }
  }, {
    key: "fetch",
    value: function fetch() {
      var _this21 = this;

      this.xlink = this.node.getAttribute('xlink:href');
      var splitUrl = this.xlink.split('#');
      this.svgUrl = splitUrl[0];
      this.svgName = splitUrl[1];
      var xhr = new XMLHttpRequest();

      xhr.onload = function () {
        var parser = new DOMParser();
        var xmlDoc = parser.parseFromString(xhr.responseText, 'text/html');
        _this21.realSvgContent = xmlDoc.getElementById(_this21.svgName);

        if (_this21.realSvgContent) {
          _this21.realSvgContent.classList.add(_this21.node.classList);

          _this21.replace();
        }
      };

      xhr.open('GET', this.svgUrl);
      xhr.send();
    }
  }, {
    key: "replace",
    value: function replace() {
      if (!this.realSvgContent) {
        this.fetch();
        return;
      }

      this.node.parentNode.replaceChild(this.realSvgContent, this.node);
    }
  }], [{
    key: "instanceClassName",
    get: function get() {
      return 'Artwork';
    }
  }]);

  return Artwork;
}(Instance);

var ArtworkSelector = {
  ARTWORK_USE: "".concat(ns.selector('artwork'), " use")
};
var ratiosImg = ['32x9', '16x9', '3x2', '4x3', '1x1', '3x4', '2x3'];
var ratiosVid = ['16x9', '4x3', '1x1'];

var ratioSelector = function ratioSelector(name, modifiers) {
  return modifiers.map(function (modifier) {
    return ns.selector("".concat(name, "--").concat(modifier));
  }).join(',');
};

var deprecatedRatioSelector = "".concat(ns.selector('responsive-img'), ", ").concat(ratioSelector('responsive-img', ratiosImg), ", ").concat(ns.selector('responsive-vid'), ", ").concat(ratioSelector('responsive-vid', ratiosVid));
var RatioSelector = {
  RATIO: "".concat(ns.selector('ratio'), ", ").concat(ratioSelector('ratio', ratiosImg), ", ").concat(deprecatedRatioSelector)
};
var api = window[config.namespace];

var Ratio = /*#__PURE__*/function (_Instance9) {
  _inherits(Ratio, _Instance9);

  var _super22 = _createSuper(Ratio);

  function Ratio() {
    _classCallCheck(this, Ratio);

    return _super22.apply(this, arguments);
  }

  _createClass(Ratio, [{
    key: "init",
    value: function init() {
      if (!api.internals.support.supportAspectRatio()) {
        this.ratio = 16 / 9;

        for (var className in this.classNames) {
          if (this.registration.selector.indexOf(this.classNames[className]) > 0) {
            var ratio = this.classNames[className].split('ratio-');

            if (ratio[1]) {
              this.ratio = ratio[1].split('x')[0] / ratio[1].split('x')[1];
            }
          }
        }

        this.isRendering = true;
        this.update();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var width = this.getRect().width;
      if (width !== this.currentWidth) this.update();
    }
  }, {
    key: "update",
    value: function update() {
      this.currentWidth = this.getRect().width;
      this.style.height = this.currentWidth / this.ratio + 'px';
    }
  }], [{
    key: "instanceClassName",
    get: function get() {
      return 'Ratio';
    }
  }]);

  return Ratio;
}(Instance);

api$1.core = {
  Instance: Instance,
  Breakpoints: Breakpoints,
  KeyCodes: KeyCodes,
  Disclosure: Disclosure,
  DisclosureButton: DisclosureButton,
  DisclosuresGroup: DisclosuresGroup,
  DisclosureType: DisclosureType,
  DisclosureEvent: DisclosureEvent,
  DisclosureEmission: DisclosureEmission,
  Collapse: Collapse,
  CollapseButton: CollapseButton,
  CollapsesGroup: CollapsesGroup,
  CollapseSelector: CollapseSelector,
  RootSelector: RootSelector,
  Equisized: Equisized,
  EquisizedEmission: EquisizedEmission,
  Toggle: Toggle,
  EquisizedsGroup: EquisizedsGroup,
  InjectSvg: InjectSvg,
  InjectSvgSelector: InjectSvgSelector,
  Artwork: Artwork,
  ArtworkSelector: ArtworkSelector,
  Ratio: Ratio,
  RatioSelector: RatioSelector
};
api$1.internals.register(api$1.core.CollapseSelector.COLLAPSE, api$1.core.Collapse);
api$1.internals.register(api$1.core.InjectSvgSelector.INJECT_SVG, api$1.core.InjectSvg);
api$1.internals.register(api$1.core.RatioSelector.RATIO, api$1.core.Ratio);
var SchemeValue = {
  SYSTEM: 'system',
  LIGHT: 'light',
  DARK: 'dark'
};
var SchemeAttribute = {
  THEME: api.internals.ns.attr('theme'),
  SCHEME: api.internals.ns.attr('scheme'),
  TRANSITION: api.internals.ns.attr('transition')
};
var SchemeTheme = {
  LIGHT: 'light',
  DARK: 'dark'
};
var SchemeEmission = {
  SCHEME: api.internals.ns.emission('scheme', 'scheme'),
  THEME: api.internals.ns.emission('scheme', 'theme'),
  ASK: api.internals.ns.emission('scheme', 'ask')
};
var SchemeEvent = {
  SCHEME: api.internals.ns.event('scheme'),
  THEME: api.internals.ns.event('theme')
};

var Scheme = /*#__PURE__*/function (_api$core$Instance) {
  _inherits(Scheme, _api$core$Instance);

  var _super23 = _createSuper(Scheme);

  function Scheme() {
    _classCallCheck(this, Scheme);

    return _super23.call(this, false);
  }

  _createClass(Scheme, [{
    key: "init",
    value: function init() {
      this.changing = this.change.bind(this);

      if (this.hasAttribute(SchemeAttribute.TRANSITION)) {
        this.removeAttribute(SchemeAttribute.TRANSITION);
        this.request(this.restoreTransition.bind(this));
      }

      var scheme = api.internals.support.supportLocalStorage() ? localStorage.getItem('scheme') : '';
      var schemeAttr = this.getAttribute(SchemeAttribute.SCHEME);

      switch (scheme) {
        case SchemeValue.DARK:
        case SchemeValue.LIGHT:
        case SchemeValue.SYSTEM:
          this.scheme = scheme;
          break;

        default:
          switch (schemeAttr) {
            case SchemeValue.DARK:
              this.scheme = SchemeValue.DARK;
              break;

            case SchemeValue.LIGHT:
              this.scheme = SchemeValue.LIGHT;
              break;

            default:
              this.scheme = SchemeValue.SYSTEM;
          }

      }

      this.addAscent(SchemeEmission.ASK, this.ask.bind(this));
      this.addAscent(SchemeEmission.SCHEME, this.apply.bind(this));
    }
  }, {
    key: "proxy",
    get: function get() {
      var scope = this;
      var proxyAccessors = {
        get scheme() {
          return scope.scheme;
        },

        set scheme(value) {
          scope.scheme = value;
        }

      };
      return api.internals.property.completeAssign(_get(_getPrototypeOf(Scheme.prototype), "proxy", this), proxyAccessors);
    }
  }, {
    key: "restoreTransition",
    value: function restoreTransition() {
      this.setAttribute(SchemeAttribute.TRANSITION, '');
    }
  }, {
    key: "ask",
    value: function ask() {
      this.descend(SchemeEmission.SCHEME, this.scheme);
    }
  }, {
    key: "apply",
    value: function apply(value) {
      this.scheme = value;
    }
  }, {
    key: "scheme",
    get: function get() {
      return this._scheme;
    },
    set: function set(value) {
      if (this._scheme === value) return;
      this._scheme = value;

      switch (value) {
        case SchemeValue.SYSTEM:
          this.listenPreferences();
          break;

        case SchemeValue.DARK:
          this.unlistenPreferences();
          this.theme = SchemeTheme.DARK;
          break;

        case SchemeValue.LIGHT:
          this.unlistenPreferences();
          this.theme = SchemeTheme.LIGHT;
          break;

        default:
          this.scheme = SchemeValue.SYSTEM;
          return;
      }

      this.descend(SchemeEmission.SCHEME, value);

      if (api.internals.support.supportLocalStorage()) {
        localStorage.setItem('scheme', value);
      }

      this.setAttribute(SchemeAttribute.SCHEME, value);
      this.dispatch(SchemeEvent.SCHEME, {
        scheme: this._scheme
      });
    }
  }, {
    key: "theme",
    get: function get() {
      return this._theme;
    },
    set: function set(value) {
      if (this._theme === value) return;

      switch (value) {
        case SchemeTheme.LIGHT:
        case SchemeTheme.DARK:
          this._theme = value;
          this.setAttribute(SchemeAttribute.THEME, value);
          this.descend(SchemeEmission.THEME, value);
          this.dispatch(SchemeEvent.THEME, {
            theme: this._theme
          });
          break;
      }
    }
  }, {
    key: "listenPreferences",
    value: function listenPreferences() {
      if (this.isListening) return;
      this.isListening = true;
      this.mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      this.mediaQuery.addEventListener('change', this.changing);
      this.change();
    }
  }, {
    key: "unlistenPreferences",
    value: function unlistenPreferences() {
      if (!this.isListening) return;
      this.isListening = false;
      this.mediaQuery.removeEventListener('change', this.changing);
      this.mediaQuery = null;
    }
  }, {
    key: "change",
    value: function change() {
      if (!this.isListening) return;
      this.theme = this.mediaQuery.matches ? SchemeTheme.DARK : SchemeTheme.LIGHT;
    }
  }, {
    key: "mutate",
    value: function mutate(attributeNames) {
      if (attributeNames.indexOf(SchemeAttribute.SCHEME) > -1) this.scheme = this.getAttribute(SchemeAttribute.SCHEME);
      if (attributeNames.indexOf(SchemeAttribute.THEME) > -1) this.theme = this.getAttribute(SchemeAttribute.THEME);
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this.unlistenPreferences();
    }
  }], [{
    key: "instanceClassName",
    get: function get() {
      return 'Scheme';
    }
  }]);

  return Scheme;
}(api.core.Instance);

var SchemeSelector = {
  SCHEME: ":root".concat(api.internals.ns.attr.selector('theme'), ", :root").concat(api.internals.ns.attr.selector('scheme')),
  SWITCH_THEME: api.internals.ns.selector('switch-theme'),
  RADIO_BUTTONS: "input[name=\"".concat(api.internals.ns('radios-theme'), "\"]")
};
api.scheme = {
  Scheme: Scheme,
  SchemeValue: SchemeValue,
  SchemeSelector: SchemeSelector,
  SchemeEmission: SchemeEmission,
  SchemeTheme: SchemeTheme,
  SchemeEvent: SchemeEvent
};
api.internals.register(api.scheme.SchemeSelector.SCHEME, api.scheme.Scheme);
var AccordionSelector = {
  GROUP: api.internals.ns.selector('accordions-group'),
  COLLAPSE: "".concat(api.internals.ns.selector('accordion'), " > ").concat(api.internals.ns.selector('collapse'))
};

var AccordionsGroup = /*#__PURE__*/function (_api$core$CollapsesGr) {
  _inherits(AccordionsGroup, _api$core$CollapsesGr);

  var _super24 = _createSuper(AccordionsGroup);

  function AccordionsGroup() {
    _classCallCheck(this, AccordionsGroup);

    return _super24.apply(this, arguments);
  }

  _createClass(AccordionsGroup, [{
    key: "validate",
    value: function validate(member) {
      return member.node.matches(AccordionSelector.COLLAPSE);
    }
  }], [{
    key: "instanceClassName",
    get: function get() {
      return 'AccordionsGroup';
    }
  }]);

  return AccordionsGroup;
}(api.core.CollapsesGroup);

api.accordion = {
  AccordionSelector: AccordionSelector,
  AccordionsGroup: AccordionsGroup
};
api.internals.register(api.accordion.AccordionSelector.GROUP, api.accordion.AccordionsGroup);
var ButtonSelector = {
  EQUISIZED_BUTTON: "".concat(api.internals.ns.selector('btns-group--equisized'), " ").concat(api.internals.ns.selector('btn')),
  EQUISIZED_GROUP: api.internals.ns.selector('btns-group--equisized')
};
api.button = {
  ButtonSelector: ButtonSelector
};
api.internals.register(api.button.ButtonSelector.EQUISIZED_BUTTON, api.core.Equisized);
api.internals.register(api.button.ButtonSelector.EQUISIZED_GROUP, api.core.EquisizedsGroup);

var Breadcrumb = /*#__PURE__*/function (_api$core$Instance2) {
  _inherits(Breadcrumb, _api$core$Instance2);

  var _super25 = _createSuper(Breadcrumb);

  function Breadcrumb() {
    var _this22;

    _classCallCheck(this, Breadcrumb);

    _this22 = _super25.call(this);
    _this22.count = 0;
    _this22.focusing = _this22.focus.bind(_assertThisInitialized(_this22));
    return _this22;
  }

  _createClass(Breadcrumb, [{
    key: "init",
    value: function init() {
      this.getCollapse();
      this.isResizing = true;
    }
  }, {
    key: "proxy",
    get: function get() {
      var scope = this;
      return Object.assign(_get(_getPrototypeOf(Breadcrumb.prototype), "proxy", this), {
        focus: scope.focus.bind(scope),
        disclose: scope.collapse.disclose.bind(scope.collapse)
      });
    }
  }, {
    key: "getCollapse",
    value: function getCollapse() {
      var collapse = this.collapse;

      if (collapse) {
        collapse.listen(api.core.DisclosureEvent.DISCLOSE, this.focusing);
      } else {
        this.addAscent(api.core.DisclosureEmission.ADDED, this.getCollapse.bind(this));
      }
    }
  }, {
    key: "resize",
    value: function resize() {
      var collapse = this.collapse;
      var links = this.links;
      if (!collapse || !links.length) return;

      if (this.isBreakpoint(api.core.Breakpoints.MD)) {
        if (collapse.buttonHasFocus) links[0].focus();
      } else {
        if (links.indexOf(document.activeElement) > -1) collapse.focus();
      }
    }
  }, {
    key: "links",
    get: function get() {
      return _toConsumableArray(this.querySelectorAll('a[href]'));
    }
  }, {
    key: "collapse",
    get: function get() {
      return this.element.getDescendantInstances(api.core.Collapse.instanceClassName, null, true)[0];
    }
  }, {
    key: "focus",
    value: function focus() {
      this.count = 0;

      this._focus();
    }
  }, {
    key: "_focus",
    value: function _focus() {
      var link = this.links[0];
      if (!link) return;
      link.focus();
      this.request(this.verify.bind(this));
    }
  }, {
    key: "verify",
    value: function verify() {
      this.count++;
      if (this.count > 100) return;
      var link = this.links[0];
      if (!link) return;
      if (document.activeElement !== link) this._focus();
    }
  }], [{
    key: "instanceClassName",
    get: function get() {
      return 'Breadcrumb';
    }
  }]);

  return Breadcrumb;
}(api.core.Instance);

var BreadcrumbSelector = {
  BREADCRUMB: api.internals.ns.selector('breadcrumb')
};
api.breadcrumb = {
  BreadcrumbSelector: BreadcrumbSelector,
  Breadcrumb: Breadcrumb
};
api.internals.register(api.breadcrumb.BreadcrumbSelector.BREADCRUMB, api.breadcrumb.Breadcrumb);

var ToggleInput = /*#__PURE__*/function (_api$core$Instance3) {
  _inherits(ToggleInput, _api$core$Instance3);

  var _super26 = _createSuper(ToggleInput);

  function ToggleInput() {
    _classCallCheck(this, ToggleInput);

    return _super26.apply(this, arguments);
  }

  _createClass(ToggleInput, [{
    key: "isChecked",
    get: function get() {
      return this.hasAttribute('checked');
    }
  }], [{
    key: "instanceClassName",
    get: function get() {
      return 'ToggleInput';
    }
  }]);

  return ToggleInput;
}(api.core.Instance);

var ToggleStatusLabel = /*#__PURE__*/function (_api$core$Instance4) {
  _inherits(ToggleStatusLabel, _api$core$Instance4);

  var _super27 = _createSuper(ToggleStatusLabel);

  function ToggleStatusLabel() {
    _classCallCheck(this, ToggleStatusLabel);

    return _super27.apply(this, arguments);
  }

  _createClass(ToggleStatusLabel, [{
    key: "init",
    value: function init() {
      this.register("input[id=\"".concat(this.getAttribute('for'), "\"]"), ToggleInput);
      this.update();
      this.isSwappingFont = true;
    }
  }, {
    key: "proxy",
    get: function get() {
      var scope = this;
      return Object.assign(_get(_getPrototypeOf(ToggleStatusLabel.prototype), "proxy", this), {
        update: scope.update.bind(scope)
      });
    }
  }, {
    key: "input",
    get: function get() {
      return this.getRegisteredInstances('ToggleInput')[0];
    }
  }, {
    key: "update",
    value: function update() {
      this.node.style.removeProperty('--toggle-status-width');
      var checked = this.input.isChecked;
      var style = getComputedStyle(this.node, ':before');
      var maxWidth = parseFloat(style.width);
      this.input.node.checked = !checked;
      var style2 = getComputedStyle(this.node, ':before');
      var width = parseFloat(style2.width);
      if (width > maxWidth) maxWidth = width;
      this.input.node.checked = checked;
      this.node.style.setProperty('--toggle-status-width', maxWidth / 16 + 'rem');
    }
  }, {
    key: "swapFont",
    value: function swapFont(families) {
      this.update();
    }
  }], [{
    key: "instanceClassName",
    get: function get() {
      return 'ToggleStatusLabel';
    }
  }]);

  return ToggleStatusLabel;
}(api.core.Instance);

var ToggleSelector = {
  STATUS_LABEL: "".concat(api.internals.ns.selector('toggle__label')).concat(api.internals.ns.attr.selector('checked-label')).concat(api.internals.ns.attr.selector('unchecked-label'))
}; // import { ToggleInput } from './script/toggle/toggle-input.js';

api.toggle = {
  ToggleStatusLabel: ToggleStatusLabel,
  ToggleSelector: ToggleSelector
};
api.internals.register(api.toggle.ToggleSelector.STATUS_LABEL, api.toggle.ToggleStatusLabel);
var SidemenuSelector = {
  LIST: api.internals.ns.selector('sidemenu__list'),
  COLLAPSE: "".concat(api.internals.ns.selector('sidemenu__item'), " > ").concat(api.internals.ns.selector('collapse'))
};

var SidemenuList = /*#__PURE__*/function (_api$core$CollapsesGr2) {
  _inherits(SidemenuList, _api$core$CollapsesGr2);

  var _super28 = _createSuper(SidemenuList);

  function SidemenuList() {
    _classCallCheck(this, SidemenuList);

    return _super28.apply(this, arguments);
  }

  _createClass(SidemenuList, [{
    key: "validate",
    value: function validate(member) {
      return member.node.matches(SidemenuSelector.COLLAPSE);
    }
  }], [{
    key: "instanceClassName",
    get: function get() {
      return 'SidemenuList';
    }
  }]);

  return SidemenuList;
}(api.core.CollapsesGroup);

api.sidemenu = {
  SidemenuList: SidemenuList,
  SidemenuSelector: SidemenuSelector
};
api.internals.register(api.sidemenu.SidemenuSelector.LIST, api.sidemenu.SidemenuList);
var ModalSelector = {
  MODAL: api.internals.ns.selector('modal'),
  SCROLL_SHADOW: api.internals.ns.selector('scroll-shadow'),
  BODY: api.internals.ns.selector('modal__body')
};

var ModalButton = /*#__PURE__*/function (_api$core$DisclosureB) {
  _inherits(ModalButton, _api$core$DisclosureB);

  var _super29 = _createSuper(ModalButton);

  function ModalButton() {
    _classCallCheck(this, ModalButton);

    return _super29.call(this, api.core.DisclosureType.OPENED);
  }

  _createClass(ModalButton, null, [{
    key: "instanceClassName",
    get: function get() {
      return 'ModalButton';
    }
  }]);

  return ModalButton;
}(api.core.DisclosureButton);

var ModalAttribute = {
  CONCEALING_BACKDROP: api.internals.ns.attr('concealing-backdrop')
};

var Modal = /*#__PURE__*/function (_api$core$Disclosure) {
  _inherits(Modal, _api$core$Disclosure);

  var _super30 = _createSuper(Modal);

  function Modal() {
    var _this23;

    _classCallCheck(this, Modal);

    _this23 = _super30.call(this, api.core.DisclosureType.OPENED, ModalSelector.MODAL, ModalButton, 'ModalsGroup');
    _this23.scrolling = _this23.resize.bind(_assertThisInitialized(_this23), false);
    _this23.resizing = _this23.resize.bind(_assertThisInitialized(_this23), true);
    return _this23;
  }

  _createClass(Modal, [{
    key: "init",
    value: function init() {
      _get(_getPrototypeOf(Modal.prototype), "init", this).call(this);

      this.listen('click', this.click.bind(this));
      this.listenKey(api.core.KeyCodes.ESCAPE, this.conceal.bind(this, false, false), true, true);
    }
  }, {
    key: "body",
    get: function get() {
      return this.element.getDescendantInstances('ModalBody', 'Modal')[0];
    }
  }, {
    key: "click",
    value: function click(e) {
      if (e.target === this.node && this.getAttribute(ModalAttribute.CONCEALING_BACKDROP) !== 'false') this.conceal();
    }
  }, {
    key: "disclose",
    value: function disclose(withhold) {
      if (!_get(_getPrototypeOf(Modal.prototype), "disclose", this).call(this, withhold)) return false;
      if (this.body) this.body.activate();
      this.isScrollLocked = true;
      this.setAttribute('aria-modal', 'true');
      this.setAttribute('open', 'true');
      return true;
    }
  }, {
    key: "conceal",
    value: function conceal(withhold, preventFocus) {
      if (!_get(_getPrototypeOf(Modal.prototype), "conceal", this).call(this, withhold, preventFocus)) return false;
      this.isScrollLocked = false;
      this.removeAttribute('aria-modal');
      this.removeAttribute('open');
      if (this.body) this.body.deactivate();
      return true;
    }
  }], [{
    key: "instanceClassName",
    get: function get() {
      return 'Modal';
    }
  }]);

  return Modal;
}(api.core.Disclosure);

var unordereds = ['[tabindex="0"]', 'a[href]', 'button:not([disabled])', 'input:not([disabled])', 'select:not([disabled])', 'textarea:not([disabled])', 'audio[controls]', 'video[controls]', '[contenteditable]:not([contenteditable="false"])', 'details>summary:first-of-type', 'details', 'iframe'];
var UNORDEREDS = unordereds.join();
var ordereds = ['[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'];
var ORDEREDS = ordereds.join();

var isFocusable = function isFocusable(element, container) {
  if (!(element instanceof Element)) return false;
  var style = window.getComputedStyle(element);
  if (!style) return false;
  if (style.visibility === 'hidden') return false;
  if (container === undefined) container = element;

  while (container.contains(element)) {
    if (style.display === 'none') return false;
    element = element.parentElement;
  }

  return true;
};

var FocusTrap = /*#__PURE__*/function () {
  function FocusTrap(onTrap, onUntrap) {
    _classCallCheck(this, FocusTrap);

    this.element = null;
    this.activeElement = null;
    this.onTrap = onTrap;
    this.onUntrap = onUntrap;
    this.waiting = this.wait.bind(this);
    this.handling = this.handle.bind(this);
    this.focusing = this.maintainFocus.bind(this);
    this.current = null;
  }

  _createClass(FocusTrap, [{
    key: "trapped",
    get: function get() {
      return this.element !== null;
    }
  }, {
    key: "trap",
    value: function trap(element) {
      if (this.trapped) this.untrap();
      this.element = element;
      this.isTrapping = true;
      this.wait();
      if (this.onTrap) this.onTrap();
    }
  }, {
    key: "wait",
    value: function wait() {
      if (!isFocusable(this.element)) {
        window.requestAnimationFrame(this.waiting);
        return;
      }

      this.trapping();
    }
  }, {
    key: "trapping",
    value: function trapping() {
      if (!this.isTrapping) return;
      this.isTrapping = false;
      var focusables = this.focusables;
      if (focusables.length) focusables[0].focus();
      this.element.setAttribute('aria-modal', true);
      window.addEventListener('keydown', this.handling);
      document.body.addEventListener('focus', this.focusing, true);
    }
  }, {
    key: "stun",
    value: function stun(node) {
      var _iterator29 = _createForOfIteratorHelper(node.children),
          _step29;

      try {
        for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
          var child = _step29.value;
          if (child === this.element) continue;

          if (child.contains(this.element)) {
            this.stun(child);
            continue;
          }

          this.stunneds.push(new Stunned(child));
        }
      } catch (err) {
        _iterator29.e(err);
      } finally {
        _iterator29.f();
      }
    }
  }, {
    key: "maintainFocus",
    value: function maintainFocus(event) {
      if (!this.element.contains(event.target)) {
        var focusables = this.focusables;
        if (focusables.length === 0) return;
        var first = focusables[0];
        event.preventDefault();
        first.focus();
      }
    }
  }, {
    key: "handle",
    value: function handle(e) {
      if (e.keyCode !== 9) return;
      var focusables = this.focusables;
      if (focusables.length === 0) return;
      var first = focusables[0];
      var last = focusables[focusables.length - 1];
      var index = focusables.indexOf(document.activeElement);

      if (e.shiftKey) {
        if (!this.element.contains(document.activeElement) || index < 1) {
          e.preventDefault();
          last.focus();
        } else if (document.activeElement.tabIndex > 0 || focusables[index - 1].tabIndex > 0) {
          e.preventDefault();
          focusables[index - 1].focus();
        }
      } else {
        if (!this.element.contains(document.activeElement) || index === focusables.length - 1 || index === -1) {
          e.preventDefault();
          first.focus();
        } else if (document.activeElement.tabIndex > 0) {
          e.preventDefault();
          focusables[index + 1].focus();
        }
      }
    }
  }, {
    key: "focusables",
    get: function get() {
      var _this24 = this;

      var unordereds = api.internals.dom.querySelectorAllArray(this.element, UNORDEREDS);
      /**
       *  filtrage des radiobutttons de même name (la navigations d'un groupe de radio se fait à la flèche et non pas au tab
       **/

      var radios = api.internals.dom.querySelectorAllArray(document.documentElement, 'input[type="radio"]');

      if (radios.length) {
        var groups = {};

        var _iterator30 = _createForOfIteratorHelper(radios),
            _step30;

        try {
          for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
            var radio = _step30.value;
            var name = radio.getAttribute('name');
            if (groups[name] === undefined) groups[name] = new RadioButtonGroup(name);
            groups[name].push(radio);
          }
        } catch (err) {
          _iterator30.e(err);
        } finally {
          _iterator30.f();
        }

        unordereds = unordereds.filter(function (unordered) {
          if (unordered.tagName.toLowerCase() !== 'input' || unordered.getAttribute('type').toLowerCase() !== 'radio') return true;
          var name = unordered.getAttribute('name');
          return groups[name].keep(unordered);
        });
      }

      var ordereds = api.internals.dom.querySelectorAllArray(this.element, ORDEREDS);
      ordereds.sort(function (a, b) {
        return a.tabIndex - b.tabIndex;
      });
      var noDuplicates = unordereds.filter(function (element) {
        return ordereds.indexOf(element) === -1;
      });
      var concateneds = ordereds.concat(noDuplicates);
      return concateneds.filter(function (element) {
        return element.tabIndex !== '-1' && isFocusable(element, _this24.element);
      });
    }
  }, {
    key: "untrap",
    value: function untrap() {
      if (!this.trapped) return;
      this.isTrapping = false;
      this.element.removeAttribute('aria-modal');
      window.removeEventListener('keydown', this.handling);
      document.body.removeEventListener('focus', this.focusing, true);
      this.element = null;
      if (this.onUntrap) this.onUntrap();
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this.untrap();
    }
  }]);

  return FocusTrap;
}();

var Stunned = /*#__PURE__*/function () {
  function Stunned(element) {
    _classCallCheck(this, Stunned);

    this.element = element; // this.hidden = element.getAttribute('aria-hidden');

    this.inert = element.getAttribute('inert'); // this.element.setAttribute('aria-hidden', true);

    this.element.setAttribute('inert', '');
  }

  _createClass(Stunned, [{
    key: "unstun",
    value: function unstun() {
      /*
      if (this.hidden === null) this.element.removeAttribute('aria-hidden');
      else this.element.setAttribute('aria-hidden', this.hidden);
       */
      if (this.inert === null) this.element.removeAttribute('inert');else this.element.setAttribute('inert', this.inert);
    }
  }]);

  return Stunned;
}();

var RadioButtonGroup = /*#__PURE__*/function () {
  function RadioButtonGroup(name) {
    _classCallCheck(this, RadioButtonGroup);

    this.name = name;
    this.buttons = [];
  }

  _createClass(RadioButtonGroup, [{
    key: "push",
    value: function push(button) {
      this.buttons.push(button);
      if (button === document.activeElement || button.checked || this.selected === undefined) this.selected = button;
    }
  }, {
    key: "keep",
    value: function keep(button) {
      return this.selected === button;
    }
  }]);

  return RadioButtonGroup;
}();

var ModalsGroup = /*#__PURE__*/function (_api$core$Disclosures) {
  _inherits(ModalsGroup, _api$core$Disclosures);

  var _super31 = _createSuper(ModalsGroup);

  function ModalsGroup() {
    var _this25;

    _classCallCheck(this, ModalsGroup);

    _this25 = _super31.call(this, 'Modal', false);
    _this25.focusTrap = new FocusTrap();
    return _this25;
  }

  _createClass(ModalsGroup, [{
    key: "apply",
    value: function apply(value, initial) {
      _get(_getPrototypeOf(ModalsGroup.prototype), "apply", this).call(this, value, initial);

      if (this.current === null) this.focusTrap.untrap();else this.focusTrap.trap(this.current.node);
    }
  }], [{
    key: "instanceClassName",
    get: function get() {
      return 'ModalsGroup';
    }
  }]);

  return ModalsGroup;
}(api.core.DisclosuresGroup);

var OFFSET = 32; // 32px => 8v => 2rem

var ModalBody = /*#__PURE__*/function (_api$core$Instance5) {
  _inherits(ModalBody, _api$core$Instance5);

  var _super32 = _createSuper(ModalBody);

  function ModalBody() {
    _classCallCheck(this, ModalBody);

    return _super32.apply(this, arguments);
  }

  _createClass(ModalBody, [{
    key: "init",
    value: function init() {
      this.listen('scroll', this.shade.bind(this));
    }
  }, {
    key: "activate",
    value: function activate() {
      this.isResizing = true;
      this.resize();
    }
  }, {
    key: "deactivate",
    value: function deactivate() {
      this.isResizing = false;
    }
  }, {
    key: "shade",
    value: function shade() {
      if (this.node.scrollHeight > this.node.clientHeight) {
        if (this.node.offsetHeight + this.node.scrollTop >= this.node.scrollHeight) {
          this.removeClass(ModalSelector.SCROLL_SHADOW);
        } else {
          this.addClass(ModalSelector.SCROLL_SHADOW);
        }
      } else {
        this.removeClass(ModalSelector.SCROLL_SHADOW);
      }
    }
  }, {
    key: "resize",
    value: function resize() {
      this.adjust();
      this.request(this.adjust.bind(this));
    }
  }, {
    key: "adjust",
    value: function adjust() {
      var offset = OFFSET * (this.isBreakpoint(api.core.Breakpoints.MD) ? 2 : 1);
      if (this.isLegacy) this.style.maxHeight = "".concat(window.innerHeight - offset, "px");else this.style.setProperty('--modal-max-height', "".concat(window.innerHeight - offset, "px"));
      this.shade();
    }
  }], [{
    key: "instanceClassName",
    get: function get() {
      return 'ModalBody';
    }
  }]);

  return ModalBody;
}(api.core.Instance);

api.modal = {
  Modal: Modal,
  ModalButton: ModalButton,
  ModalBody: ModalBody,
  ModalsGroup: ModalsGroup,
  ModalSelector: ModalSelector
};
api.internals.register(api.modal.ModalSelector.MODAL, api.modal.Modal);
api.internals.register(api.modal.ModalSelector.BODY, api.modal.ModalBody);
api.internals.register(api.core.RootSelector.ROOT, api.modal.ModalsGroup);
var PasswordEmission = {
  TOGGLE: api.internals.ns.emission('password', 'toggle'),
  ADJUST: api.internals.ns.emission('password', 'adjust')
};

var PasswordToggle = /*#__PURE__*/function (_api$core$Instance6) {
  _inherits(PasswordToggle, _api$core$Instance6);

  var _super33 = _createSuper(PasswordToggle);

  function PasswordToggle() {
    _classCallCheck(this, PasswordToggle);

    return _super33.apply(this, arguments);
  }

  _createClass(PasswordToggle, [{
    key: "init",
    value: function init() {
      this.listen('click', this.toggle.bind(this));
      this.ascend(PasswordEmission.ADJUST, this.width);
      this.isSwappingFont = true;
      this._isChecked = this.isChecked;
    }
  }, {
    key: "width",
    get: function get() {
      var style = getComputedStyle(this.node.parentNode);
      return parseInt(style.width);
    }
  }, {
    key: "isChecked",
    get: function get() {
      return this.node.checked;
    },
    set: function set(value) {
      this._isChecked = value;
      this.ascend(PasswordEmission.TOGGLE, value);
    }
  }, {
    key: "toggle",
    value: function toggle() {
      this.isChecked = !this._isChecked; // this.node.checked = this.isChecked;
    }
  }, {
    key: "swapFont",
    value: function swapFont(families) {
      this.ascend(PasswordEmission.ADJUST, this.width);
    }
  }], [{
    key: "instanceClassName",
    get: function get() {
      return 'PasswordToggle';
    }
  }]);

  return PasswordToggle;
}(api.core.Instance);

var Password = /*#__PURE__*/function (_api$core$Instance7) {
  _inherits(Password, _api$core$Instance7);

  var _super34 = _createSuper(Password);

  function Password() {
    _classCallCheck(this, Password);

    return _super34.apply(this, arguments);
  }

  _createClass(Password, [{
    key: "init",
    value: function init() {
      this.addAscent(PasswordEmission.TOGGLE, this.toggle.bind(this));
      this.addAscent(PasswordEmission.ADJUST, this.adjust.bind(this));
    }
  }, {
    key: "toggle",
    value: function toggle(value) {
      this.descend(PasswordEmission.TOGGLE, value);
    }
  }, {
    key: "adjust",
    value: function adjust(value) {
      this.descend(PasswordEmission.ADJUST, value);
    }
  }], [{
    key: "instanceClassName",
    get: function get() {
      return 'Password';
    }
  }]);

  return Password;
}(api.core.Instance);

var PasswordSelector = {
  PASSWORD: api.internals.ns.selector('password'),
  INPUT: api.internals.ns.selector('password__input'),
  LABEL: api.internals.ns.selector('password__label'),
  TOOGLE: "".concat(api.internals.ns.selector('password__checkbox'), " input[type=\"checkbox\"]")
};

var PasswordInput = /*#__PURE__*/function (_api$core$Instance8) {
  _inherits(PasswordInput, _api$core$Instance8);

  var _super35 = _createSuper(PasswordInput);

  function PasswordInput() {
    _classCallCheck(this, PasswordInput);

    return _super35.apply(this, arguments);
  }

  _createClass(PasswordInput, [{
    key: "init",
    value: function init() {
      this.addDescent(PasswordEmission.TOGGLE, this.toggle.bind(this));
      this._isRevealed = this.hasAttribute('type') === 'password';
      this.listen('keydown', this.capslock.bind(this)); // for capslock enabled

      this.listen('keyup', this.capslock.bind(this)); // for capslock desabled
    }
  }, {
    key: "toggle",
    value: function toggle(value) {
      this.isRevealed = value;
      this.setAttribute('type', value ? 'text' : 'password');
    }
  }, {
    key: "isRevealed",
    get: function get() {
      return this._isRevealed;
    },
    set: function set(value) {
      this._isRevealed = value;
      this.setAttribute('type', value ? 'text' : 'password');
    }
  }, {
    key: "capslock",
    value: function capslock(event) {
      if (event.getModifierState('CapsLock')) {
        this.node.parentNode.setAttribute(api.internals.ns.attr('capslock'), '');
      } else {
        this.node.parentNode.removeAttribute(api.internals.ns.attr('capslock'));
      }
    }
  }], [{
    key: "instanceClassName",
    get: function get() {
      return 'PasswordInput';
    }
  }]);

  return PasswordInput;
}(api.core.Instance);

var PasswordLabel = /*#__PURE__*/function (_api$core$Instance9) {
  _inherits(PasswordLabel, _api$core$Instance9);

  var _super36 = _createSuper(PasswordLabel);

  function PasswordLabel() {
    _classCallCheck(this, PasswordLabel);

    return _super36.apply(this, arguments);
  }

  _createClass(PasswordLabel, [{
    key: "init",
    value: function init() {
      this.addDescent(PasswordEmission.ADJUST, this.adjust.bind(this));
    }
  }, {
    key: "adjust",
    value: function adjust(value) {
      var valueREM = Math.ceil(value / 16);
      this.node.style.paddingRight = valueREM + 'rem';
    }
  }], [{
    key: "instanceClassName",
    get: function get() {
      return 'PasswordLabel';
    }
  }]);

  return PasswordLabel;
}(api.core.Instance);

api.password = {
  Password: Password,
  PasswordToggle: PasswordToggle,
  PasswordSelector: PasswordSelector,
  PasswordInput: PasswordInput,
  PasswordLabel: PasswordLabel
};
api.internals.register(api.password.PasswordSelector.INPUT, api.password.PasswordInput);
api.internals.register(api.password.PasswordSelector.PASSWORD, api.password.Password);
api.internals.register(api.password.PasswordSelector.TOOGLE, api.password.PasswordToggle);
api.internals.register(api.password.PasswordSelector.LABEL, api.password.PasswordLabel);
var NavigationSelector = {
  NAVIGATION: api.internals.ns.selector('nav'),
  COLLAPSE: "".concat(api.internals.ns.selector('nav__item'), " > ").concat(api.internals.ns.selector('collapse')),
  ITEM: api.internals.ns.selector('nav__item'),
  ITEM_RIGHT: api.internals.ns('nav__item--align-right'),
  MENU: api.internals.ns.selector('menu')
};

var NavigationItem = /*#__PURE__*/function (_api$core$Instance10) {
  _inherits(NavigationItem, _api$core$Instance10);

  var _super37 = _createSuper(NavigationItem);

  function NavigationItem() {
    var _this26;

    _classCallCheck(this, NavigationItem);

    _this26 = _super37.call(this);
    _this26._isRightAligned = false;
    return _this26;
  }

  _createClass(NavigationItem, [{
    key: "init",
    value: function init() {
      this.addAscent(api.core.DisclosureEmission.ADDED, this.calculate.bind(this));
      this.addAscent(api.core.DisclosureEmission.REMOVED, this.calculate.bind(this));
      this.isResizing = true;
      this.calculate();
    }
  }, {
    key: "resize",
    value: function resize() {
      this.calculate();
    }
  }, {
    key: "calculate",
    value: function calculate() {
      var collapse = this.element.getDescendantInstances(api.core.Collapse.instanceClassName, null, true)[0];

      if (collapse && this.isBreakpoint(api.core.Breakpoints.LG) && collapse.element.node.matches(NavigationSelector.MENU)) {
        var right = this.element.node.parentElement.getBoundingClientRect().right; // todo: ne fonctionne que si la nav fait 100% du container

        var width = collapse.element.node.getBoundingClientRect().width;
        var left = this.element.node.getBoundingClientRect().left;
        this.isRightAligned = left + width > right;
      } else this.isRightAligned = false;
    }
  }, {
    key: "isRightAligned",
    get: function get() {
      return this._isRightAligned;
    },
    set: function set(value) {
      if (this._isRightAligned === value) return;
      this._isRightAligned = value;
      if (value) api.internals.dom.addClass(this.element.node, NavigationSelector.ITEM_RIGHT);else api.internals.dom.removeClass(this.element.node, NavigationSelector.ITEM_RIGHT);
    }
  }], [{
    key: "instanceClassName",
    get: function get() {
      return 'NavigationItem';
    }
  }]);

  return NavigationItem;
}(api.core.Instance);

var NavigationMousePosition = {
  NONE: -1,
  INSIDE: 0,
  OUTSIDE: 1
};

var Navigation = /*#__PURE__*/function (_api$core$CollapsesGr3) {
  _inherits(Navigation, _api$core$CollapsesGr3);

  var _super38 = _createSuper(Navigation);

  function Navigation() {
    _classCallCheck(this, Navigation);

    return _super38.apply(this, arguments);
  }

  _createClass(Navigation, [{
    key: "init",
    value: function init() {
      _get(_getPrototypeOf(Navigation.prototype), "init", this).call(this);

      this.clicked = false;
      this.out = false;
      this.listen('focusout', this.focusOut.bind(this));
      this.listen('mousedown', this.down.bind(this));
    }
  }, {
    key: "validate",
    value: function validate(member) {
      return member.element.node.matches(NavigationSelector.COLLAPSE);
    }
  }, {
    key: "down",
    value: function down(e) {
      if (!this.isBreakpoint(api.core.Breakpoints.LG) || this.index === -1 || !this.current) return;
      this.position = this.current.node.contains(e.target) ? NavigationMousePosition.INSIDE : NavigationMousePosition.OUTSIDE;
      this.requestPosition();
    }
  }, {
    key: "focusOut",
    value: function focusOut(e) {
      if (!this.isBreakpoint(api.core.Breakpoints.LG)) return;
      this.out = true;
      this.requestPosition();
    }
  }, {
    key: "requestPosition",
    value: function requestPosition() {
      if (this.isRequesting) return;
      this.isRequesting = true;
      this.request(this.getPosition.bind(this));
    }
  }, {
    key: "getPosition",
    value: function getPosition() {
      if (this.out) {
        switch (this.position) {
          case NavigationMousePosition.OUTSIDE:
            this.index = -1;
            break;

          case NavigationMousePosition.INSIDE:
            if (this.current && !this.current.node.contains(document.activeElement)) this.current.focus();
            break;

          default:
            if (this.index > -1 && !this.current.hasFocus) this.index = -1;
        }
      }

      this.request(this.requested.bind(this));
    }
  }, {
    key: "requested",
    value: function requested() {
      this.position = NavigationMousePosition.NONE;
      this.out = false;
      this.isRequesting = false;
    }
  }, {
    key: "index",
    get: function get() {
      return _get(_getPrototypeOf(Navigation.prototype), "index", this);
    },
    set: function set(value) {
      if (value === -1 && this.current !== null && this.current.hasFocus) this.current.focus();

      _set(_getPrototypeOf(Navigation.prototype), "index", value, this, true);
    }
  }], [{
    key: "instanceClassName",
    get: function get() {
      return 'Navigation';
    }
  }]);

  return Navigation;
}(api.core.CollapsesGroup);

api.navigation = {
  Navigation: Navigation,
  NavigationItem: NavigationItem,
  NavigationMousePosition: NavigationMousePosition,
  NavigationSelector: NavigationSelector
};
api.internals.register(api.navigation.NavigationSelector.NAVIGATION, api.navigation.Navigation);
api.internals.register(api.navigation.NavigationSelector.ITEM, api.navigation.NavigationItem);
/**
  * TabButton correspond au bouton cliquable qui change le panel
  * TabButton étend de DisclosureButton qui ajoute/enelve l'attribut aria-selected,
  * Et change l'attributte tabindex a 0 si le boutton est actif (value=true), -1 s'il n'est pas actif (value=false)
 */

var TabButton = /*#__PURE__*/function (_api$core$DisclosureB2) {
  _inherits(TabButton, _api$core$DisclosureB2);

  var _super39 = _createSuper(TabButton);

  function TabButton() {
    _classCallCheck(this, TabButton);

    return _super39.call(this, api.core.DisclosureType.SELECT);
  }

  _createClass(TabButton, [{
    key: "apply",
    value: function apply(value) {
      _get(_getPrototypeOf(TabButton.prototype), "apply", this).call(this, value);

      if (this.isPrimary) {
        this.setAttribute('tabindex', value ? '0' : '-1');

        if (value) {
          if (this.list) this.list.focalize(this);
        }
      }
    }
  }, {
    key: "list",
    get: function get() {
      return this.element.getAscendantInstance('TabsList', 'TabsGroup');
    }
  }], [{
    key: "instanceClassName",
    get: function get() {
      return 'TabButton';
    }
  }]);

  return TabButton;
}(api.core.DisclosureButton);

var TabSelector = {
  TAB: api.internals.ns.selector('tabs__tab'),
  GROUP: api.internals.ns.selector('tabs'),
  PANEL: api.internals.ns.selector('tabs__panel'),
  LIST: api.internals.ns.selector('tabs__list'),
  SHADOW: api.internals.ns.selector('tabs__shadow'),
  SHADOW_LEFT: api.internals.ns.selector('tabs__shadow--left'),
  SHADOW_RIGHT: api.internals.ns.selector('tabs__shadow--right'),
  PANEL_START: api.internals.ns.selector('tabs__panel--direction-start'),
  PANEL_END: api.internals.ns.selector('tabs__panel--direction-end')
};
var TabPanelDirection = {
  START: 'direction-start',
  END: 'direction-end',
  NONE: 'none'
};
/**
  * Tab coorespond au panel d'un élement Tabs (tab panel)
  * Tab étend disclosure qui ajoute/enleve le modifier --selected,
  * et ajoute/eleve l'attribut hidden, sur le panel
  */

var TabPanel = /*#__PURE__*/function (_api$core$Disclosure2) {
  _inherits(TabPanel, _api$core$Disclosure2);

  var _super40 = _createSuper(TabPanel);

  function TabPanel() {
    var _this27;

    _classCallCheck(this, TabPanel);

    _this27 = _super40.call(this, api.core.DisclosureType.SELECT, TabSelector.PANEL, TabButton, 'TabsGroup');
    _this27._direction = TabPanelDirection.NONE;
    _this27._isPreventingTransition = false;
    return _this27;
  }

  _createClass(TabPanel, [{
    key: "direction",
    get: function get() {
      return this._direction;
    },
    set: function set(value) {
      if (value === this._direction) return;

      switch (this._direction) {
        case TabPanelDirection.START:
          this.removeClass(TabSelector.PANEL_START);
          break;

        case TabPanelDirection.END:
          this.removeClass(TabSelector.PANEL_END);
          break;

        case TabPanelDirection.NONE:
          break;

        default:
          return;
      }

      this._direction = value;

      switch (this._direction) {
        case TabPanelDirection.START:
          this.addClass(TabSelector.PANEL_START);
          break;

        case TabPanelDirection.END:
          this.addClass(TabSelector.PANEL_END);
          break;
      }
    }
  }, {
    key: "isPreventingTransition",
    get: function get() {
      return this._isPreventingTransition;
    },
    set: function set(value) {
      if (this._isPreventingTransition === value) return;
      if (value) this.addClass(api.internals.motion.TransitionSelector.NONE);else this.removeClass(api.internals.motion.TransitionSelector.NONE);
      this._isPreventingTransition = value === true;
    }
  }, {
    key: "translate",
    value: function translate(direction, initial) {
      this.isPreventingTransition = initial;
      this.direction = direction;
    }
  }, {
    key: "reset",
    value: function reset() {
      this.group.index = 0;
    }
  }], [{
    key: "instanceClassName",
    get: function get() {
      return 'TabPanel';
    }
  }]);

  return TabPanel;
}(api.core.Disclosure);
/**
* TabGroup est la classe étendue de DiscosuresGroup
* Correspond à un objet Tabs avec plusieurs tab-button & Tab (panel)
*/


var TabsGroup = /*#__PURE__*/function (_api$core$Disclosures2) {
  _inherits(TabsGroup, _api$core$Disclosures2);

  var _super41 = _createSuper(TabsGroup);

  function TabsGroup() {
    _classCallCheck(this, TabsGroup);

    return _super41.call(this, 'TabPanel');
  }

  _createClass(TabsGroup, [{
    key: "init",
    value: function init() {
      _get(_getPrototypeOf(TabsGroup.prototype), "init", this).call(this);

      this.listen('transitionend', this.transitionend.bind(this));
      this.listenKey(api.core.KeyCodes.RIGHT, this.pressRight.bind(this), true, true);
      this.listenKey(api.core.KeyCodes.LEFT, this.pressLeft.bind(this), true, true);
      this.listenKey(api.core.KeyCodes.HOME, this.pressHome.bind(this), true, true);
      this.listenKey(api.core.KeyCodes.END, this.pressEnd.bind(this), true, true);
      this.isRendering = true;
      if (this.list) this.list.apply();
    }
  }, {
    key: "list",
    get: function get() {
      return this.element.getDescendantInstances('TabsList', 'TabsGroup', true)[0];
    }
  }, {
    key: "transitionend",
    value: function transitionend(e) {
      this.isPreventingTransition = true;
    }
  }, {
    key: "buttonHasFocus",
    get: function get() {
      return this.members.some(function (member) {
        return member.buttonHasFocus;
      });
    }
    /**
     * Selectionne l'element suivant de la liste si on est sur un bouton
     * Si on est à la fin on retourne au début
     */

  }, {
    key: "pressRight",
    value: function pressRight() {
      if (this.buttonHasFocus) {
        if (this.index < this.length - 1) {
          this.index++;
        } else {
          this.index = 0;
        }

        this.focus();
      }
    }
  }, {
    key: "pressLeft",
    value:
    /**
     * Selectionne l'element précédent de la liste si on est sur un bouton
     * Si on est au debut retourne a la fin
     */
    function pressLeft() {
      if (this.buttonHasFocus) {
        if (this.index > 0) {
          this.index--;
        } else {
          this.index = this.length - 1;
        }

        this.focus();
      }
    }
  }, {
    key: "pressHome",
    value:
    /**
     * Selectionne le permier element de la liste si on est sur un bouton
     */
    function pressHome() {
      if (this.buttonHasFocus) {
        this.index = 0;
        this.focus();
      }
    }
  }, {
    key: "pressEnd",
    value:
    /**
     * Selectionne le dernier element de la liste si on est sur un bouton
     */
    function pressEnd() {
      if (this.buttonHasFocus) {
        this.index = this.length - 1;
        this.focus();
      }
    }
  }, {
    key: "focus",
    value: function focus() {
      if (this.current) {
        this.current.focus();
      }
    }
  }, {
    key: "apply",
    value: function apply() {
      for (var i = 0; i < this._index; i++) {
        this.members[i].translate(TabPanelDirection.START);
      }

      this.current.translate(TabPanelDirection.NONE);

      for (var _i4 = this._index + 1; _i4 < this.length; _i4++) {
        this.members[_i4].translate(TabPanelDirection.END);
      }

      this.isPreventingTransition = false;
    }
  }, {
    key: "isPreventingTransition",
    get: function get() {
      return this._isPreventingTransition;
    },
    set: function set(value) {
      if (this._isPreventingTransition === value) return;
      if (value) this.addClass(api.internals.motion.TransitionSelector.NONE);else this.removeClass(api.internals.motion.TransitionSelector.NONE);
      this._isPreventingTransition = value === true;
    }
  }, {
    key: "render",
    value: function render() {
      if (this.current === null) return;
      var paneHeight = Math.round(this.current.node.offsetHeight);
      if (this.panelHeight === paneHeight) return;
      this.panelHeight = paneHeight;
      var listHeight = 0;
      if (this.list) listHeight = this.list.node.offsetHeight;
      this.style.setProperty('--tabs-height', this.panelHeight + listHeight + 'px');
    }
  }], [{
    key: "instanceClassName",
    get: function get() {
      return 'TabsGroup';
    }
  }]);

  return TabsGroup;
}(api.core.DisclosuresGroup);

var FOCALIZE_OFFSET = 16;
var SCROLL_OFFSET$1 = 16; // valeur en px du scroll avant laquelle le shadow s'active ou se desactive

var TabsList = /*#__PURE__*/function (_api$core$Instance11) {
  _inherits(TabsList, _api$core$Instance11);

  var _super42 = _createSuper(TabsList);

  function TabsList() {
    _classCallCheck(this, TabsList);

    return _super42.apply(this, arguments);
  }

  _createClass(TabsList, [{
    key: "init",
    value: function init() {
      this.listen('scroll', this.scroll.bind(this));
      this.isResizing = true;
    }
  }, {
    key: "group",
    get: function get() {
      return this.element.getAscendantInstance('TabsGroup', 'TabsList');
    }
  }, {
    key: "focalize",
    value: function focalize(btn) {
      var btnRect = btn.getRect();
      var listRect = this.getRect();
      var actualScroll = this.node.scrollLeft;
      if (btnRect.left < listRect.left) this.node.scrollTo(actualScroll - listRect.left + btnRect.left - FOCALIZE_OFFSET, 0);else if (btnRect.right > listRect.right) this.node.scrollTo(actualScroll - listRect.right + btnRect.right + FOCALIZE_OFFSET, 0);
    }
  }, {
    key: "isScrolling",
    get: function get() {
      return this._isScrolling;
    },
    set: function set(value) {
      if (this._isScrolling === value) return;
      this._isScrolling = value;
      this.apply();
    }
  }, {
    key: "apply",
    value: function apply() {
      if (!this.group) return;

      if (this._isScrolling) {
        this.group.addClass(TabSelector.SHADOW);
        this.scroll();
      } else {
        this.group.removeClass(TabSelector.SHADOW_RIGHT);
        this.group.removeClass(TabSelector.SHADOW_LEFT);
        this.group.removeClass(TabSelector.SHADOW);
      }
    }
    /* ajoute la classe fr-table__shadow-left ou fr-table__shadow-right sur fr-table en fonction d'une valeur de scroll et du sens (right, left) */

  }, {
    key: "scroll",
    value: function scroll() {
      if (!this.group) return;
      var scrollLeft = this.node.scrollLeft;
      var isMin = scrollLeft <= SCROLL_OFFSET$1;
      var max = this.node.scrollWidth - this.node.clientWidth - SCROLL_OFFSET$1;
      var isMax = Math.abs(scrollLeft) >= max;
      var isRtl = document.documentElement.getAttribute('dir') === 'rtl';
      var minSelector = isRtl ? TabSelector.SHADOW_RIGHT : TabSelector.SHADOW_LEFT;
      var maxSelector = isRtl ? TabSelector.SHADOW_LEFT : TabSelector.SHADOW_RIGHT;

      if (isMin) {
        this.group.removeClass(minSelector);
      } else {
        this.group.addClass(minSelector);
      }

      if (isMax) {
        this.group.removeClass(maxSelector);
      } else {
        this.group.addClass(maxSelector);
      }
    }
  }, {
    key: "resize",
    value: function resize() {
      this.isScrolling = this.node.scrollWidth > this.node.clientWidth + SCROLL_OFFSET$1;
      this.setProperty('--tab-list-height', "".concat(this.getRect().height, "px"));
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this.isScrolling = false;
    }
  }], [{
    key: "instanceClassName",
    get: function get() {
      return 'TabsList';
    }
  }]);

  return TabsList;
}(api.core.Instance);

api.tab = {
  TabPanel: TabPanel,
  TabButton: TabButton,
  TabsGroup: TabsGroup,
  TabsList: TabsList,
  TabSelector: TabSelector
};
api.internals.register(api.tab.TabSelector.PANEL, api.tab.TabPanel);
api.internals.register(api.tab.TabSelector.GROUP, api.tab.TabsGroup);
api.internals.register(api.tab.TabSelector.LIST, api.tab.TabsList);
var TableEmission = {
  SCROLLABLE: api.internals.ns.emission('table', 'scrollable'),
  CHANGE: api.internals.ns.emission('table', 'change'),
  CAPTION_HEIGHT: api.internals.ns.emission('table', 'captionheight')
};
var PADDING = '1rem'; // padding de 4v sur le caption

var Table = /*#__PURE__*/function (_api$core$Instance12) {
  _inherits(Table, _api$core$Instance12);

  var _super43 = _createSuper(Table);

  function Table() {
    _classCallCheck(this, Table);

    return _super43.apply(this, arguments);
  }

  _createClass(Table, [{
    key: "init",
    value: function init() {
      this.addAscent(TableEmission.CAPTION_HEIGHT, this.setCaptionHeight.bind(this));
    }
  }, {
    key: "setCaptionHeight",
    value: function setCaptionHeight(value) {
      this.setProperty('--table-offset', "calc(".concat(value, "px + ").concat(PADDING, ")"));
    }
  }], [{
    key: "instanceClassName",
    get: function get() {
      return 'Table';
    }
  }]);

  return Table;
}(api.core.Instance);

var TableSelector = {
  TABLE: api.internals.ns.selector('table'),
  SHADOW: api.internals.ns.selector('table__shadow'),
  SHADOW_LEFT: api.internals.ns.selector('table__shadow--left'),
  SHADOW_RIGHT: api.internals.ns.selector('table__shadow--right'),
  ELEMENT: "".concat(api.internals.ns.selector('table'), ":not(").concat(api.internals.ns.selector('table--no-scroll'), ") table"),
  CAPTION: "".concat(api.internals.ns.selector('table'), " table caption")
};
var SCROLL_OFFSET = 8; // valeur en px du scroll avant laquelle le shadow s'active ou se desactive

var TableElement = /*#__PURE__*/function (_api$core$Instance13) {
  _inherits(TableElement, _api$core$Instance13);

  var _super44 = _createSuper(TableElement);

  function TableElement() {
    _classCallCheck(this, TableElement);

    return _super44.apply(this, arguments);
  }

  _createClass(TableElement, [{
    key: "init",
    value: function init() {
      this.listen('scroll', this.scroll.bind(this));
      this.content = this.querySelector('tbody');
      this.isResizing = true;
    }
  }, {
    key: "isScrolling",
    get: function get() {
      return this._isScrolling;
    },
    set: function set(value) {
      if (this._isScrolling === value) return;
      this._isScrolling = value;

      if (value) {
        this.addClass(TableSelector.SHADOW);
        this.scroll();
      } else {
        this.removeClass(TableSelector.SHADOW);
        this.removeClass(TableSelector.SHADOW_LEFT);
        this.removeClass(TableSelector.SHADOW_RIGHT);
      }
    }
    /* ajoute la classe fr-table__shadow-left ou fr-table__shadow-right sur fr-table en fonction d'une valeur de scroll et du sens (right, left) */

  }, {
    key: "scroll",
    value: function scroll() {
      var isMin = this.node.scrollLeft <= SCROLL_OFFSET;
      var max = this.content.offsetWidth - this.node.offsetWidth - SCROLL_OFFSET;
      var isMax = Math.abs(this.node.scrollLeft) >= max;
      var isRtl = document.documentElement.getAttribute('dir') === 'rtl';
      var minSelector = isRtl ? TableSelector.SHADOW_RIGHT : TableSelector.SHADOW_LEFT;
      var maxSelector = isRtl ? TableSelector.SHADOW_LEFT : TableSelector.SHADOW_RIGHT;

      if (isMin) {
        this.removeClass(minSelector);
      } else {
        this.addClass(minSelector);
      }

      if (isMax) {
        this.removeClass(maxSelector);
      } else {
        this.addClass(maxSelector);
      }
    }
  }, {
    key: "resize",
    value: function resize() {
      this.isScrolling = this.content.offsetWidth > this.node.offsetWidth;
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this.isScrolling = false;
    }
  }], [{
    key: "instanceClassName",
    get: function get() {
      return 'TableElement';
    }
  }]);

  return TableElement;
}(api.core.Instance);

var TableCaption = /*#__PURE__*/function (_api$core$Instance14) {
  _inherits(TableCaption, _api$core$Instance14);

  var _super45 = _createSuper(TableCaption);

  function TableCaption() {
    _classCallCheck(this, TableCaption);

    return _super45.apply(this, arguments);
  }

  _createClass(TableCaption, [{
    key: "init",
    value: function init() {
      this.height = 0;
      this.isResizing = true;
    }
  }, {
    key: "resize",
    value: function resize() {
      var height = this.getRect().height;
      if (this.height === height) return;
      this.height = height;
      this.ascend(TableEmission.CAPTION_HEIGHT, height);
    }
  }], [{
    key: "instanceClassName",
    get: function get() {
      return 'TableCaption';
    }
  }]);

  return TableCaption;
}(api.core.Instance);

api.table = {
  Table: Table,
  TableElement: TableElement,
  TableCaption: TableCaption,
  TableSelector: TableSelector
};
api.internals.register(api.table.TableSelector.TABLE, api.table.Table);
api.internals.register(api.table.TableSelector.ELEMENT, api.table.TableElement);
api.internals.register(api.table.TableSelector.CAPTION, api.table.TableCaption);
var TagEvent = {
  DISMISS: api.internals.ns.event('dismiss')
};

var TagDismissible = /*#__PURE__*/function (_api$core$Instance15) {
  _inherits(TagDismissible, _api$core$Instance15);

  var _super46 = _createSuper(TagDismissible);

  function TagDismissible() {
    _classCallCheck(this, TagDismissible);

    return _super46.apply(this, arguments);
  }

  _createClass(TagDismissible, [{
    key: "init",
    value: function init() {
      this.listen('click', this.click.bind(this));
    }
  }, {
    key: "click",
    value: function click() {
      this.focusClosest();

      switch (api.mode) {
        case api.Modes.ANGULAR:
        case api.Modes.REACT:
        case api.Modes.VUE:
          this.request(this.verify.bind(this));
          break;

        default:
          this.remove();
      }

      this.dispatch(TagEvent.DISMISS);
    }
  }, {
    key: "verify",
    value: function verify() {
      if (document.body.contains(this.node)) api.inspector.warn("a TagDismissible has just been dismissed and should be removed from the dom. In ".concat(api.mode, " mode, the api doesn't handle dom modification. An event ").concat(TagEvent.DISMISS, " is dispatched by the element to trigger the removal"));
    }
  }], [{
    key: "instanceClassName",
    get: function get() {
      return 'TagDismissible';
    }
  }]);

  return TagDismissible;
}(api.core.Instance);

var TagSelector = {
  PRESSABLE: "".concat(api.internals.ns.selector('tag'), "[aria-pressed]"),
  DISMISSIBLE: "".concat(api.internals.ns.selector('tag--dismiss'))
};
api.tag = {
  TagDismissible: TagDismissible,
  TagSelector: TagSelector,
  TagEvent: TagEvent
};
api.internals.register(api.tag.TagSelector.PRESSABLE, api.core.Toggle);
api.internals.register(api.tag.TagSelector.DISMISSIBLE, api.tag.TagDismissible);
var DownloadSelector = {
  DOWNLOAD_ASSESS_FILE: "".concat(api.internals.ns.attr.selector('assess-file')),
  DOWNLOAD_DETAIL: "".concat(api.internals.ns.selector('download__detail'))
};

var AssessFile = /*#__PURE__*/function (_api$core$Instance16) {
  _inherits(AssessFile, _api$core$Instance16);

  var _super47 = _createSuper(AssessFile);

  function AssessFile() {
    _classCallCheck(this, AssessFile);

    return _super47.apply(this, arguments);
  }

  _createClass(AssessFile, [{
    key: "init",
    value: function init() {
      this.lang = this.getLang(this.node);
      this.href = this.getAttribute('href');
      this.hreflang = this.getAttribute('hreflang');
      this.file = {};
      this.detail = this.querySelector(DownloadSelector.DOWNLOAD_DETAIL);
      this.update();
    }
  }, {
    key: "getFileLength",
    value: function getFileLength() {
      var _this28 = this;

      if (this.href === undefined) {
        this.length = -1;
        return;
      }

      fetch(this.href, {
        method: 'HEAD',
        mode: 'cors'
      }).then(function (response) {
        _this28.length = response.headers.get('content-length') || -1;

        if (_this28.length === -1) {
          console.warn('Impossible de détecter le poids du fichier ' + _this28.href + '\nErreur de récupération de l\'en-tête HTTP : "content-length"');
        }

        _this28.update();
      });
    }
  }, {
    key: "update",
    value: function update() {
      // TODO V2: implémenter async
      if (this.isLegacy) this.length = -1;

      if (!this.length) {
        this.getFileLength();
        return;
      }

      var details = [];

      if (this.detail) {
        if (this.href) {
          var extension = this.parseExtension(this.href);
          if (extension) details.push(extension.toUpperCase());
        }

        if (this.length !== -1) {
          details.push(this.bytesToSize(this.length));
        }

        if (this.hreflang) {
          details.push(this.getLangDisplayName(this.hreflang));
        }

        this.detail.innerHTML = details.join(' - ');
      }
    }
  }, {
    key: "getLang",
    value: function getLang(elem) {
      if (elem.lang) return elem.lang;
      if (document.documentElement === elem) return window.navigator.language;
      return this.getLang(elem.parentElement);
    }
  }, {
    key: "parseExtension",
    value: function parseExtension(url) {
      var regexExtension = /\.(\w{1,9})(?:$|[?#])/;
      return url.match(regexExtension)[0].replace('.', '');
    }
  }, {
    key: "getLangDisplayName",
    value: function getLangDisplayName(locale) {
      if (this.isLegacy) return locale;
      var displayNames = new Intl.DisplayNames([this.lang], {
        type: 'language'
      });
      var name = displayNames.of(locale);
      return name.charAt(0).toUpperCase() + name.slice(1);
    }
  }, {
    key: "bytesToSize",
    value: function bytesToSize(bytes) {
      if (bytes === -1) return null;
      var sizeUnits = ['octets', 'ko', 'Mo', 'Go', 'To'];

      if (this.getAttribute(api.internals.ns.attr('assess-file')) === 'bytes') {
        sizeUnits = ['bytes', 'KB', 'MB', 'GB', 'TB'];
      }

      var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1000)), 10);
      if (i === 0) return "".concat(bytes, " ").concat(sizeUnits[i]);
      var size = bytes / Math.pow(1000, i);
      var roundedSize = Math.round((size + Number.EPSILON) * 100) / 100; // arrondi a 2 décimal

      var stringSize = String(roundedSize).replace('.', ',');
      return "".concat(stringSize, " ").concat(sizeUnits[i]);
    }
  }], [{
    key: "instanceClassName",
    get: function get() {
      return 'AssessFile';
    }
  }]);

  return AssessFile;
}(api.core.Instance);

api.download = {
  DownloadSelector: DownloadSelector,
  AssessFile: AssessFile
};
api.internals.register(api.download.DownloadSelector.DOWNLOAD_ASSESS_FILE, api.download.AssessFile);
var HeaderSelector = {
  HEADER: api.internals.ns.selector('header'),
  TOOLS_LINKS: api.internals.ns.selector('header__tools-links'),
  MENU_LINKS: api.internals.ns.selector('header__menu-links'),
  BUTTONS: "".concat(api.internals.ns.selector('header__tools-links'), " ").concat(api.internals.ns.selector('btns-group'), ", ").concat(api.internals.ns.selector('header__tools-links'), " ").concat(api.internals.ns.selector('links-group')),
  MODALS: "".concat(api.internals.ns.selector('header__search')).concat(api.internals.ns.selector('modal'), ", ").concat(api.internals.ns.selector('header__menu')).concat(api.internals.ns.selector('modal'))
};

var HeaderLinks = /*#__PURE__*/function (_api$core$Instance17) {
  _inherits(HeaderLinks, _api$core$Instance17);

  var _super48 = _createSuper(HeaderLinks);

  function HeaderLinks() {
    _classCallCheck(this, HeaderLinks);

    return _super48.apply(this, arguments);
  }

  _createClass(HeaderLinks, [{
    key: "init",
    value: function init() {
      var header = this.queryParentSelector(HeaderSelector.HEADER);
      this.toolsLinks = header.querySelector(HeaderSelector.TOOLS_LINKS);
      this.menuLinks = header.querySelector(HeaderSelector.MENU_LINKS);
      var copySuffix = '-mobile';
      var toolsHtml = this.toolsLinks.innerHTML.replace(/  +/g, ' ');
      var menuHtml = this.menuLinks.innerHTML.replace(/  +/g, ' '); // Pour éviter de dupliquer des id, on ajoute un suffixe aux id et aria-controls duppliqués.

      var toolsHtmlDuplicateId = toolsHtml.replace(/(<nav[.\s\S]*-translate [.\s\S]*) id="(.*?)"([.\s\S]*<\/nav>)/gm, '$1 id="$2' + copySuffix + '"$3');
      toolsHtmlDuplicateId = toolsHtmlDuplicateId.replace(/(<nav[.\s\S]*-translate [.\s\S]*) aria-controls="(.*?)"([.\s\S]*<\/nav>)/gm, '$1 aria-controls="$2' + copySuffix + '"$3');
      if (toolsHtmlDuplicateId === menuHtml) return;

      switch (api.mode) {
        case api.Modes.ANGULAR:
        case api.Modes.REACT:
        case api.Modes.VUE:
          api.inspector.warn("header__tools-links content is different from header__menu-links content.\nAs you're using a dynamic framework, you should handle duplication of this content yourself, please refer to documentation:\n".concat(api.header.doc));
          break;

        default:
          this.menuLinks.innerHTML = toolsHtmlDuplicateId;
      }
    }
  }], [{
    key: "instanceClassName",
    get: function get() {
      return 'HeaderLinks';
    }
  }]);

  return HeaderLinks;
}(api.core.Instance);

var HeaderModal = /*#__PURE__*/function (_api$core$Instance18) {
  _inherits(HeaderModal, _api$core$Instance18);

  var _super49 = _createSuper(HeaderModal);

  function HeaderModal() {
    _classCallCheck(this, HeaderModal);

    return _super49.apply(this, arguments);
  }

  _createClass(HeaderModal, [{
    key: "init",
    value: function init() {
      this.isResizing = true;
    }
  }, {
    key: "resize",
    value: function resize() {
      if (this.isBreakpoint(api.core.Breakpoints.LG)) this.unqualify();else this.qualify();
    }
  }, {
    key: "qualify",
    value: function qualify() {
      this.setAttribute('role', 'dialog');
      var modal = this.element.getInstance('Modal');
      if (!modal) return;
      var buttons = modal.buttons;
      var id = '';

      var _iterator31 = _createForOfIteratorHelper(buttons),
          _step31;

      try {
        for (_iterator31.s(); !(_step31 = _iterator31.n()).done;) {
          var button = _step31.value;
          id = button.id || id;
          if (button.isPrimary && id) break;
        }
      } catch (err) {
        _iterator31.e(err);
      } finally {
        _iterator31.f();
      }

      this.setAttribute('aria-labelledby', id);
    }
  }, {
    key: "unqualify",
    value: function unqualify() {
      var modal = this.element.getInstance('Modal');
      if (modal) modal.conceal();
      this.removeAttribute('role');
      this.removeAttribute('aria-labelledby');
    }
  }], [{
    key: "instanceClassName",
    get: function get() {
      return 'HeaderModal';
    }
  }]);

  return HeaderModal;
}(api.core.Instance);

api.header = {
  HeaderLinks: HeaderLinks,
  HeaderModal: HeaderModal,
  HeaderSelector: HeaderSelector,
  doc: 'https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/en-tete'
};
api.internals.register(api.header.HeaderSelector.BUTTONS, api.header.HeaderLinks);
api.internals.register(api.header.HeaderSelector.MODALS, api.header.HeaderModal);
var DisplaySelector = {
  DISPLAY: api.internals.ns.selector('display'),
  RADIO_BUTTONS: "input[name=\"".concat(api.internals.ns('radios-theme'), "\"]"),
  FIELDSET: api.internals.ns.selector('fieldset')
};

var Display = /*#__PURE__*/function (_api$core$Instance19) {
  _inherits(Display, _api$core$Instance19);

  var _super50 = _createSuper(Display);

  function Display() {
    _classCallCheck(this, Display);

    return _super50.apply(this, arguments);
  }

  _createClass(Display, [{
    key: "init",
    value: function init() {
      this.radios = this.querySelectorAll(DisplaySelector.RADIO_BUTTONS);

      if (api.scheme) {
        this.changing = this.change.bind(this);

        var _iterator32 = _createForOfIteratorHelper(this.radios),
            _step32;

        try {
          for (_iterator32.s(); !(_step32 = _iterator32.n()).done;) {
            var radio = _step32.value;
            radio.addEventListener('change', this.changing);
          }
        } catch (err) {
          _iterator32.e(err);
        } finally {
          _iterator32.f();
        }

        this.addDescent(api.scheme.SchemeEmission.SCHEME, this.apply.bind(this));
        this.ascend(api.scheme.SchemeEmission.ASK);
      } else {
        this.querySelector(DisplaySelector.FIELDSET).setAttribute('disabled', '');
      }
    }
  }, {
    key: "scheme",
    get: function get() {
      return this._scheme;
    },
    set: function set(value) {
      if (this._scheme === value || !api.scheme) return;

      switch (value) {
        case api.scheme.SchemeValue.SYSTEM:
        case api.scheme.SchemeValue.LIGHT:
        case api.scheme.SchemeValue.DARK:
          this._scheme = value;

          var _iterator33 = _createForOfIteratorHelper(this.radios),
              _step33;

          try {
            for (_iterator33.s(); !(_step33 = _iterator33.n()).done;) {
              var radio = _step33.value;
              radio.checked = radio.value === value;
            }
          } catch (err) {
            _iterator33.e(err);
          } finally {
            _iterator33.f();
          }

          this.ascend(api.scheme.SchemeEmission.SCHEME, value);
          break;
      }
    }
  }, {
    key: "change",
    value: function change() {
      var _iterator34 = _createForOfIteratorHelper(this.radios),
          _step34;

      try {
        for (_iterator34.s(); !(_step34 = _iterator34.n()).done;) {
          var radio = _step34.value;

          if (radio.checked) {
            this.scheme = radio.value;
            return;
          }
        }
      } catch (err) {
        _iterator34.e(err);
      } finally {
        _iterator34.f();
      }
    }
  }, {
    key: "apply",
    value: function apply(value) {
      this.scheme = value;
    }
  }, {
    key: "dispose",
    value: function dispose() {
      var _iterator35 = _createForOfIteratorHelper(this.radios),
          _step35;

      try {
        for (_iterator35.s(); !(_step35 = _iterator35.n()).done;) {
          var radio = _step35.value;
          radio.removeEventListener('change', this.changing);
        }
      } catch (err) {
        _iterator35.e(err);
      } finally {
        _iterator35.f();
      }
    }
  }], [{
    key: "instanceClassName",
    get: function get() {
      return 'Display';
    }
  }]);

  return Display;
}(api.core.Instance);

api.display = {
  Display: Display,
  DisplaySelector: DisplaySelector
};
api.internals.register(api.display.DisplaySelector.DISPLAY, api.display.Display);

/***/ }),

/***/ "./node_modules/@rails/activestorage/app/assets/javascripts/activestorage.esm.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@rails/activestorage/app/assets/javascripts/activestorage.esm.js ***!
  \***************************************************************************************/
/*! exports provided: DirectUpload, start */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectUpload", function() { return DirectUpload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "start", function() { return start; });
var sparkMd5 = {
  exports: {}
};

(function (module, exports) {
  (function (factory) {
    {
      module.exports = factory();
    }
  })(function (undefined$1) {
    var hex_chr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

    function md5cycle(x, k) {
      var a = x[0],
          b = x[1],
          c = x[2],
          d = x[3];
      a += (b & c | ~b & d) + k[0] - 680876936 | 0;
      a = (a << 7 | a >>> 25) + b | 0;
      d += (a & b | ~a & c) + k[1] - 389564586 | 0;
      d = (d << 12 | d >>> 20) + a | 0;
      c += (d & a | ~d & b) + k[2] + 606105819 | 0;
      c = (c << 17 | c >>> 15) + d | 0;
      b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
      b = (b << 22 | b >>> 10) + c | 0;
      a += (b & c | ~b & d) + k[4] - 176418897 | 0;
      a = (a << 7 | a >>> 25) + b | 0;
      d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
      d = (d << 12 | d >>> 20) + a | 0;
      c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
      c = (c << 17 | c >>> 15) + d | 0;
      b += (c & d | ~c & a) + k[7] - 45705983 | 0;
      b = (b << 22 | b >>> 10) + c | 0;
      a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
      a = (a << 7 | a >>> 25) + b | 0;
      d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
      d = (d << 12 | d >>> 20) + a | 0;
      c += (d & a | ~d & b) + k[10] - 42063 | 0;
      c = (c << 17 | c >>> 15) + d | 0;
      b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
      b = (b << 22 | b >>> 10) + c | 0;
      a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
      a = (a << 7 | a >>> 25) + b | 0;
      d += (a & b | ~a & c) + k[13] - 40341101 | 0;
      d = (d << 12 | d >>> 20) + a | 0;
      c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
      c = (c << 17 | c >>> 15) + d | 0;
      b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
      b = (b << 22 | b >>> 10) + c | 0;
      a += (b & d | c & ~d) + k[1] - 165796510 | 0;
      a = (a << 5 | a >>> 27) + b | 0;
      d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
      d = (d << 9 | d >>> 23) + a | 0;
      c += (d & b | a & ~b) + k[11] + 643717713 | 0;
      c = (c << 14 | c >>> 18) + d | 0;
      b += (c & a | d & ~a) + k[0] - 373897302 | 0;
      b = (b << 20 | b >>> 12) + c | 0;
      a += (b & d | c & ~d) + k[5] - 701558691 | 0;
      a = (a << 5 | a >>> 27) + b | 0;
      d += (a & c | b & ~c) + k[10] + 38016083 | 0;
      d = (d << 9 | d >>> 23) + a | 0;
      c += (d & b | a & ~b) + k[15] - 660478335 | 0;
      c = (c << 14 | c >>> 18) + d | 0;
      b += (c & a | d & ~a) + k[4] - 405537848 | 0;
      b = (b << 20 | b >>> 12) + c | 0;
      a += (b & d | c & ~d) + k[9] + 568446438 | 0;
      a = (a << 5 | a >>> 27) + b | 0;
      d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
      d = (d << 9 | d >>> 23) + a | 0;
      c += (d & b | a & ~b) + k[3] - 187363961 | 0;
      c = (c << 14 | c >>> 18) + d | 0;
      b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
      b = (b << 20 | b >>> 12) + c | 0;
      a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
      a = (a << 5 | a >>> 27) + b | 0;
      d += (a & c | b & ~c) + k[2] - 51403784 | 0;
      d = (d << 9 | d >>> 23) + a | 0;
      c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
      c = (c << 14 | c >>> 18) + d | 0;
      b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
      b = (b << 20 | b >>> 12) + c | 0;
      a += (b ^ c ^ d) + k[5] - 378558 | 0;
      a = (a << 4 | a >>> 28) + b | 0;
      d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
      d = (d << 11 | d >>> 21) + a | 0;
      c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
      c = (c << 16 | c >>> 16) + d | 0;
      b += (c ^ d ^ a) + k[14] - 35309556 | 0;
      b = (b << 23 | b >>> 9) + c | 0;
      a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
      a = (a << 4 | a >>> 28) + b | 0;
      d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
      d = (d << 11 | d >>> 21) + a | 0;
      c += (d ^ a ^ b) + k[7] - 155497632 | 0;
      c = (c << 16 | c >>> 16) + d | 0;
      b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
      b = (b << 23 | b >>> 9) + c | 0;
      a += (b ^ c ^ d) + k[13] + 681279174 | 0;
      a = (a << 4 | a >>> 28) + b | 0;
      d += (a ^ b ^ c) + k[0] - 358537222 | 0;
      d = (d << 11 | d >>> 21) + a | 0;
      c += (d ^ a ^ b) + k[3] - 722521979 | 0;
      c = (c << 16 | c >>> 16) + d | 0;
      b += (c ^ d ^ a) + k[6] + 76029189 | 0;
      b = (b << 23 | b >>> 9) + c | 0;
      a += (b ^ c ^ d) + k[9] - 640364487 | 0;
      a = (a << 4 | a >>> 28) + b | 0;
      d += (a ^ b ^ c) + k[12] - 421815835 | 0;
      d = (d << 11 | d >>> 21) + a | 0;
      c += (d ^ a ^ b) + k[15] + 530742520 | 0;
      c = (c << 16 | c >>> 16) + d | 0;
      b += (c ^ d ^ a) + k[2] - 995338651 | 0;
      b = (b << 23 | b >>> 9) + c | 0;
      a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
      a = (a << 6 | a >>> 26) + b | 0;
      d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
      d = (d << 10 | d >>> 22) + a | 0;
      c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
      c = (c << 15 | c >>> 17) + d | 0;
      b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
      b = (b << 21 | b >>> 11) + c | 0;
      a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
      a = (a << 6 | a >>> 26) + b | 0;
      d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
      d = (d << 10 | d >>> 22) + a | 0;
      c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
      c = (c << 15 | c >>> 17) + d | 0;
      b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
      b = (b << 21 | b >>> 11) + c | 0;
      a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
      a = (a << 6 | a >>> 26) + b | 0;
      d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
      d = (d << 10 | d >>> 22) + a | 0;
      c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
      c = (c << 15 | c >>> 17) + d | 0;
      b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
      b = (b << 21 | b >>> 11) + c | 0;
      a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
      a = (a << 6 | a >>> 26) + b | 0;
      d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
      d = (d << 10 | d >>> 22) + a | 0;
      c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
      c = (c << 15 | c >>> 17) + d | 0;
      b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
      b = (b << 21 | b >>> 11) + c | 0;
      x[0] = a + x[0] | 0;
      x[1] = b + x[1] | 0;
      x[2] = c + x[2] | 0;
      x[3] = d + x[3] | 0;
    }

    function md5blk(s) {
      var md5blks = [],
          i;

      for (i = 0; i < 64; i += 4) {
        md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
      }

      return md5blks;
    }

    function md5blk_array(a) {
      var md5blks = [],
          i;

      for (i = 0; i < 64; i += 4) {
        md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24);
      }

      return md5blks;
    }

    function md51(s) {
      var n = s.length,
          state = [1732584193, -271733879, -1732584194, 271733878],
          i,
          length,
          tail,
          tmp,
          lo,
          hi;

      for (i = 64; i <= n; i += 64) {
        md5cycle(state, md5blk(s.substring(i - 64, i)));
      }

      s = s.substring(i - 64);
      length = s.length;
      tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

      for (i = 0; i < length; i += 1) {
        tail[i >> 2] |= s.charCodeAt(i) << (i % 4 << 3);
      }

      tail[i >> 2] |= 128 << (i % 4 << 3);

      if (i > 55) {
        md5cycle(state, tail);

        for (i = 0; i < 16; i += 1) {
          tail[i] = 0;
        }
      }

      tmp = n * 8;
      tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
      lo = parseInt(tmp[2], 16);
      hi = parseInt(tmp[1], 16) || 0;
      tail[14] = lo;
      tail[15] = hi;
      md5cycle(state, tail);
      return state;
    }

    function md51_array(a) {
      var n = a.length,
          state = [1732584193, -271733879, -1732584194, 271733878],
          i,
          length,
          tail,
          tmp,
          lo,
          hi;

      for (i = 64; i <= n; i += 64) {
        md5cycle(state, md5blk_array(a.subarray(i - 64, i)));
      }

      a = i - 64 < n ? a.subarray(i - 64) : new Uint8Array(0);
      length = a.length;
      tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

      for (i = 0; i < length; i += 1) {
        tail[i >> 2] |= a[i] << (i % 4 << 3);
      }

      tail[i >> 2] |= 128 << (i % 4 << 3);

      if (i > 55) {
        md5cycle(state, tail);

        for (i = 0; i < 16; i += 1) {
          tail[i] = 0;
        }
      }

      tmp = n * 8;
      tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
      lo = parseInt(tmp[2], 16);
      hi = parseInt(tmp[1], 16) || 0;
      tail[14] = lo;
      tail[15] = hi;
      md5cycle(state, tail);
      return state;
    }

    function rhex(n) {
      var s = "",
          j;

      for (j = 0; j < 4; j += 1) {
        s += hex_chr[n >> j * 8 + 4 & 15] + hex_chr[n >> j * 8 & 15];
      }

      return s;
    }

    function hex(x) {
      var i;

      for (i = 0; i < x.length; i += 1) {
        x[i] = rhex(x[i]);
      }

      return x.join("");
    }

    if (hex(md51("hello")) !== "5d41402abc4b2a76b9719d911017c592") ;

    if (typeof ArrayBuffer !== "undefined" && !ArrayBuffer.prototype.slice) {
      (function () {
        function clamp(val, length) {
          val = val | 0 || 0;

          if (val < 0) {
            return Math.max(val + length, 0);
          }

          return Math.min(val, length);
        }

        ArrayBuffer.prototype.slice = function (from, to) {
          var length = this.byteLength,
              begin = clamp(from, length),
              end = length,
              num,
              target,
              targetArray,
              sourceArray;

          if (to !== undefined$1) {
            end = clamp(to, length);
          }

          if (begin > end) {
            return new ArrayBuffer(0);
          }

          num = end - begin;
          target = new ArrayBuffer(num);
          targetArray = new Uint8Array(target);
          sourceArray = new Uint8Array(this, begin, num);
          targetArray.set(sourceArray);
          return target;
        };
      })();
    }

    function toUtf8(str) {
      if (/[\u0080-\uFFFF]/.test(str)) {
        str = unescape(encodeURIComponent(str));
      }

      return str;
    }

    function utf8Str2ArrayBuffer(str, returnUInt8Array) {
      var length = str.length,
          buff = new ArrayBuffer(length),
          arr = new Uint8Array(buff),
          i;

      for (i = 0; i < length; i += 1) {
        arr[i] = str.charCodeAt(i);
      }

      return returnUInt8Array ? arr : buff;
    }

    function arrayBuffer2Utf8Str(buff) {
      return String.fromCharCode.apply(null, new Uint8Array(buff));
    }

    function concatenateArrayBuffers(first, second, returnUInt8Array) {
      var result = new Uint8Array(first.byteLength + second.byteLength);
      result.set(new Uint8Array(first));
      result.set(new Uint8Array(second), first.byteLength);
      return returnUInt8Array ? result : result.buffer;
    }

    function hexToBinaryString(hex) {
      var bytes = [],
          length = hex.length,
          x;

      for (x = 0; x < length - 1; x += 2) {
        bytes.push(parseInt(hex.substr(x, 2), 16));
      }

      return String.fromCharCode.apply(String, bytes);
    }

    function SparkMD5() {
      this.reset();
    }

    SparkMD5.prototype.append = function (str) {
      this.appendBinary(toUtf8(str));
      return this;
    };

    SparkMD5.prototype.appendBinary = function (contents) {
      this._buff += contents;
      this._length += contents.length;
      var length = this._buff.length,
          i;

      for (i = 64; i <= length; i += 64) {
        md5cycle(this._hash, md5blk(this._buff.substring(i - 64, i)));
      }

      this._buff = this._buff.substring(i - 64);
      return this;
    };

    SparkMD5.prototype.end = function (raw) {
      var buff = this._buff,
          length = buff.length,
          i,
          tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          ret;

      for (i = 0; i < length; i += 1) {
        tail[i >> 2] |= buff.charCodeAt(i) << (i % 4 << 3);
      }

      this._finish(tail, length);

      ret = hex(this._hash);

      if (raw) {
        ret = hexToBinaryString(ret);
      }

      this.reset();
      return ret;
    };

    SparkMD5.prototype.reset = function () {
      this._buff = "";
      this._length = 0;
      this._hash = [1732584193, -271733879, -1732584194, 271733878];
      return this;
    };

    SparkMD5.prototype.getState = function () {
      return {
        buff: this._buff,
        length: this._length,
        hash: this._hash.slice()
      };
    };

    SparkMD5.prototype.setState = function (state) {
      this._buff = state.buff;
      this._length = state.length;
      this._hash = state.hash;
      return this;
    };

    SparkMD5.prototype.destroy = function () {
      delete this._hash;
      delete this._buff;
      delete this._length;
    };

    SparkMD5.prototype._finish = function (tail, length) {
      var i = length,
          tmp,
          lo,
          hi;
      tail[i >> 2] |= 128 << (i % 4 << 3);

      if (i > 55) {
        md5cycle(this._hash, tail);

        for (i = 0; i < 16; i += 1) {
          tail[i] = 0;
        }
      }

      tmp = this._length * 8;
      tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
      lo = parseInt(tmp[2], 16);
      hi = parseInt(tmp[1], 16) || 0;
      tail[14] = lo;
      tail[15] = hi;
      md5cycle(this._hash, tail);
    };

    SparkMD5.hash = function (str, raw) {
      return SparkMD5.hashBinary(toUtf8(str), raw);
    };

    SparkMD5.hashBinary = function (content, raw) {
      var hash = md51(content),
          ret = hex(hash);
      return raw ? hexToBinaryString(ret) : ret;
    };

    SparkMD5.ArrayBuffer = function () {
      this.reset();
    };

    SparkMD5.ArrayBuffer.prototype.append = function (arr) {
      var buff = concatenateArrayBuffers(this._buff.buffer, arr, true),
          length = buff.length,
          i;
      this._length += arr.byteLength;

      for (i = 64; i <= length; i += 64) {
        md5cycle(this._hash, md5blk_array(buff.subarray(i - 64, i)));
      }

      this._buff = i - 64 < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);
      return this;
    };

    SparkMD5.ArrayBuffer.prototype.end = function (raw) {
      var buff = this._buff,
          length = buff.length,
          tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          i,
          ret;

      for (i = 0; i < length; i += 1) {
        tail[i >> 2] |= buff[i] << (i % 4 << 3);
      }

      this._finish(tail, length);

      ret = hex(this._hash);

      if (raw) {
        ret = hexToBinaryString(ret);
      }

      this.reset();
      return ret;
    };

    SparkMD5.ArrayBuffer.prototype.reset = function () {
      this._buff = new Uint8Array(0);
      this._length = 0;
      this._hash = [1732584193, -271733879, -1732584194, 271733878];
      return this;
    };

    SparkMD5.ArrayBuffer.prototype.getState = function () {
      var state = SparkMD5.prototype.getState.call(this);
      state.buff = arrayBuffer2Utf8Str(state.buff);
      return state;
    };

    SparkMD5.ArrayBuffer.prototype.setState = function (state) {
      state.buff = utf8Str2ArrayBuffer(state.buff, true);
      return SparkMD5.prototype.setState.call(this, state);
    };

    SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;
    SparkMD5.ArrayBuffer.prototype._finish = SparkMD5.prototype._finish;

    SparkMD5.ArrayBuffer.hash = function (arr, raw) {
      var hash = md51_array(new Uint8Array(arr)),
          ret = hex(hash);
      return raw ? hexToBinaryString(ret) : ret;
    };

    return SparkMD5;
  });
})(sparkMd5);

var SparkMD5 = sparkMd5.exports;
const fileSlice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice;

class FileChecksum {
  static create(file, callback) {
    const instance = new FileChecksum(file);
    instance.create(callback);
  }

  constructor(file) {
    this.file = file;
    this.chunkSize = 2097152;
    this.chunkCount = Math.ceil(this.file.size / this.chunkSize);
    this.chunkIndex = 0;
  }

  create(callback) {
    this.callback = callback;
    this.md5Buffer = new SparkMD5.ArrayBuffer();
    this.fileReader = new FileReader();
    this.fileReader.addEventListener("load", event => this.fileReaderDidLoad(event));
    this.fileReader.addEventListener("error", event => this.fileReaderDidError(event));
    this.readNextChunk();
  }

  fileReaderDidLoad(event) {
    this.md5Buffer.append(event.target.result);

    if (!this.readNextChunk()) {
      const binaryDigest = this.md5Buffer.end(true);
      const base64digest = btoa(binaryDigest);
      this.callback(null, base64digest);
    }
  }

  fileReaderDidError(event) {
    this.callback("Error reading ".concat(this.file.name));
  }

  readNextChunk() {
    if (this.chunkIndex < this.chunkCount || this.chunkIndex == 0 && this.chunkCount == 0) {
      const start = this.chunkIndex * this.chunkSize;
      const end = Math.min(start + this.chunkSize, this.file.size);
      const bytes = fileSlice.call(this.file, start, end);
      this.fileReader.readAsArrayBuffer(bytes);
      this.chunkIndex++;
      return true;
    } else {
      return false;
    }
  }

}

function getMetaValue(name) {
  const element = findElement(document.head, "meta[name=\"".concat(name, "\"]"));

  if (element) {
    return element.getAttribute("content");
  }
}

function findElements(root, selector) {
  if (typeof root == "string") {
    selector = root;
    root = document;
  }

  const elements = root.querySelectorAll(selector);
  return toArray(elements);
}

function findElement(root, selector) {
  if (typeof root == "string") {
    selector = root;
    root = document;
  }

  return root.querySelector(selector);
}

function dispatchEvent(element, type) {
  let eventInit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  const disabled = element.disabled;
  const bubbles = eventInit.bubbles,
        cancelable = eventInit.cancelable,
        detail = eventInit.detail;
  const event = document.createEvent("Event");
  event.initEvent(type, bubbles || true, cancelable || true);
  event.detail = detail || {};

  try {
    element.disabled = false;
    element.dispatchEvent(event);
  } finally {
    element.disabled = disabled;
  }

  return event;
}

function toArray(value) {
  if (Array.isArray(value)) {
    return value;
  } else if (Array.from) {
    return Array.from(value);
  } else {
    return [].slice.call(value);
  }
}

class BlobRecord {
  constructor(file, checksum, url) {
    this.file = file;
    this.attributes = {
      filename: file.name,
      content_type: file.type || "application/octet-stream",
      byte_size: file.size,
      checksum: checksum
    };
    this.xhr = new XMLHttpRequest();
    this.xhr.open("POST", url, true);
    this.xhr.responseType = "json";
    this.xhr.setRequestHeader("Content-Type", "application/json");
    this.xhr.setRequestHeader("Accept", "application/json");
    this.xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    const csrfToken = getMetaValue("csrf-token");

    if (csrfToken != undefined) {
      this.xhr.setRequestHeader("X-CSRF-Token", csrfToken);
    }

    this.xhr.addEventListener("load", event => this.requestDidLoad(event));
    this.xhr.addEventListener("error", event => this.requestDidError(event));
  }

  get status() {
    return this.xhr.status;
  }

  get response() {
    const _this$xhr = this.xhr,
          responseType = _this$xhr.responseType,
          response = _this$xhr.response;

    if (responseType == "json") {
      return response;
    } else {
      return JSON.parse(response);
    }
  }

  create(callback) {
    this.callback = callback;
    this.xhr.send(JSON.stringify({
      blob: this.attributes
    }));
  }

  requestDidLoad(event) {
    if (this.status >= 200 && this.status < 300) {
      const response = this.response;
      const direct_upload = response.direct_upload;
      delete response.direct_upload;
      this.attributes = response;
      this.directUploadData = direct_upload;
      this.callback(null, this.toJSON());
    } else {
      this.requestDidError(event);
    }
  }

  requestDidError(event) {
    this.callback("Error creating Blob for \"".concat(this.file.name, "\". Status: ").concat(this.status));
  }

  toJSON() {
    const result = {};

    for (const key in this.attributes) {
      result[key] = this.attributes[key];
    }

    return result;
  }

}

class BlobUpload {
  constructor(blob) {
    this.blob = blob;
    this.file = blob.file;
    const _blob$directUploadDat = blob.directUploadData,
          url = _blob$directUploadDat.url,
          headers = _blob$directUploadDat.headers;
    this.xhr = new XMLHttpRequest();
    this.xhr.open("PUT", url, true);
    this.xhr.responseType = "text";

    for (const key in headers) {
      this.xhr.setRequestHeader(key, headers[key]);
    }

    this.xhr.addEventListener("load", event => this.requestDidLoad(event));
    this.xhr.addEventListener("error", event => this.requestDidError(event));
  }

  create(callback) {
    this.callback = callback;
    this.xhr.send(this.file.slice());
  }

  requestDidLoad(event) {
    const _this$xhr2 = this.xhr,
          status = _this$xhr2.status,
          response = _this$xhr2.response;

    if (status >= 200 && status < 300) {
      this.callback(null, response);
    } else {
      this.requestDidError(event);
    }
  }

  requestDidError(event) {
    this.callback("Error storing \"".concat(this.file.name, "\". Status: ").concat(this.xhr.status));
  }

}

let id = 0;

class DirectUpload {
  constructor(file, url, delegate) {
    this.id = ++id;
    this.file = file;
    this.url = url;
    this.delegate = delegate;
  }

  create(callback) {
    FileChecksum.create(this.file, (error, checksum) => {
      if (error) {
        callback(error);
        return;
      }

      const blob = new BlobRecord(this.file, checksum, this.url);
      notify(this.delegate, "directUploadWillCreateBlobWithXHR", blob.xhr);
      blob.create(error => {
        if (error) {
          callback(error);
        } else {
          const upload = new BlobUpload(blob);
          notify(this.delegate, "directUploadWillStoreFileWithXHR", upload.xhr);
          upload.create(error => {
            if (error) {
              callback(error);
            } else {
              callback(null, blob.toJSON());
            }
          });
        }
      });
    });
  }

}

function notify(object, methodName) {
  if (object && typeof object[methodName] == "function") {
    for (var _len = arguments.length, messages = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      messages[_key - 2] = arguments[_key];
    }

    return object[methodName](...messages);
  }
}

class DirectUploadController {
  constructor(input, file) {
    this.input = input;
    this.file = file;
    this.directUpload = new DirectUpload(this.file, this.url, this);
    this.dispatch("initialize");
  }

  start(callback) {
    const hiddenInput = document.createElement("input");
    hiddenInput.type = "hidden";
    hiddenInput.name = this.input.name;
    this.input.insertAdjacentElement("beforebegin", hiddenInput);
    this.dispatch("start");
    this.directUpload.create((error, attributes) => {
      if (error) {
        hiddenInput.parentNode.removeChild(hiddenInput);
        this.dispatchError(error);
      } else {
        hiddenInput.value = attributes.signed_id;
      }

      this.dispatch("end");
      callback(error);
    });
  }

  uploadRequestDidProgress(event) {
    const progress = event.loaded / event.total * 100;

    if (progress) {
      this.dispatch("progress", {
        progress: progress
      });
    }
  }

  get url() {
    return this.input.getAttribute("data-direct-upload-url");
  }

  dispatch(name) {
    let detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    detail.file = this.file;
    detail.id = this.directUpload.id;
    return dispatchEvent(this.input, "direct-upload:".concat(name), {
      detail: detail
    });
  }

  dispatchError(error) {
    const event = this.dispatch("error", {
      error: error
    });

    if (!event.defaultPrevented) {
      alert(error);
    }
  }

  directUploadWillCreateBlobWithXHR(xhr) {
    this.dispatch("before-blob-request", {
      xhr: xhr
    });
  }

  directUploadWillStoreFileWithXHR(xhr) {
    this.dispatch("before-storage-request", {
      xhr: xhr
    });
    xhr.upload.addEventListener("progress", event => this.uploadRequestDidProgress(event));
  }

}

const inputSelector = "input[type=file][data-direct-upload-url]:not([disabled])";

class DirectUploadsController {
  constructor(form) {
    this.form = form;
    this.inputs = findElements(form, inputSelector).filter(input => input.files.length);
  }

  start(callback) {
    const controllers = this.createDirectUploadControllers();

    const startNextController = () => {
      const controller = controllers.shift();

      if (controller) {
        controller.start(error => {
          if (error) {
            callback(error);
            this.dispatch("end");
          } else {
            startNextController();
          }
        });
      } else {
        callback();
        this.dispatch("end");
      }
    };

    this.dispatch("start");
    startNextController();
  }

  createDirectUploadControllers() {
    const controllers = [];
    this.inputs.forEach(input => {
      toArray(input.files).forEach(file => {
        const controller = new DirectUploadController(input, file);
        controllers.push(controller);
      });
    });
    return controllers;
  }

  dispatch(name) {
    let detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return dispatchEvent(this.form, "direct-uploads:".concat(name), {
      detail: detail
    });
  }

}

const processingAttribute = "data-direct-uploads-processing";
const submitButtonsByForm = new WeakMap();
let started = false;

function start() {
  if (!started) {
    started = true;
    document.addEventListener("click", didClick, true);
    document.addEventListener("submit", didSubmitForm, true);
    document.addEventListener("ajax:before", didSubmitRemoteElement);
  }
}

function didClick(event) {
  const target = event.target;

  if ((target.tagName == "INPUT" || target.tagName == "BUTTON") && target.type == "submit" && target.form) {
    submitButtonsByForm.set(target.form, target);
  }
}

function didSubmitForm(event) {
  handleFormSubmissionEvent(event);
}

function didSubmitRemoteElement(event) {
  if (event.target.tagName == "FORM") {
    handleFormSubmissionEvent(event);
  }
}

function handleFormSubmissionEvent(event) {
  const form = event.target;

  if (form.hasAttribute(processingAttribute)) {
    event.preventDefault();
    return;
  }

  const controller = new DirectUploadsController(form);
  const inputs = controller.inputs;

  if (inputs.length) {
    event.preventDefault();
    form.setAttribute(processingAttribute, "");
    inputs.forEach(disable);
    controller.start(error => {
      form.removeAttribute(processingAttribute);

      if (error) {
        inputs.forEach(enable);
      } else {
        submitForm(form);
      }
    });
  }
}

function submitForm(form) {
  let button = submitButtonsByForm.get(form) || findElement(form, "input[type=submit], button[type=submit]");

  if (button) {
    const _button = button,
          disabled = _button.disabled;
    button.disabled = false;
    button.focus();
    button.click();
    button.disabled = disabled;
  } else {
    button = document.createElement("input");
    button.type = "submit";
    button.style.display = "none";
    form.appendChild(button);
    button.click();
    form.removeChild(button);
  }

  submitButtonsByForm.delete(form);
}

function disable(input) {
  input.disabled = true;
}

function enable(input) {
  input.disabled = false;
}

function autostart() {
  if (window.ActiveStorage) {
    start();
  }
}

setTimeout(autostart, 1);


/***/ }),

/***/ "./node_modules/@rails/ujs/lib/assets/compiled/rails-ujs.js":
/*!******************************************************************!*\
  !*** ./node_modules/@rails/ujs/lib/assets/compiled/rails-ujs.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
Unobtrusive JavaScript
https://github.com/rails/rails/blob/main/actionview/app/assets/javascripts
Released under the MIT license
 */
;
(function () {
  var context = this;
  (function () {
    (function () {
      this.Rails = {
        linkClickSelector: 'a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]',
        buttonClickSelector: {
          selector: 'button[data-remote]:not([form]), button[data-confirm]:not([form])',
          exclude: 'form button'
        },
        inputChangeSelector: 'select[data-remote], input[data-remote], textarea[data-remote]',
        formSubmitSelector: 'form:not([data-turbo=true])',
        formInputClickSelector: 'form:not([data-turbo=true]) input[type=submit], form:not([data-turbo=true]) input[type=image], form:not([data-turbo=true]) button[type=submit], form:not([data-turbo=true]) button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])',
        formDisableSelector: 'input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled',
        formEnableSelector: 'input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled',
        fileInputSelector: 'input[name][type=file]:not([disabled])',
        linkDisableSelector: 'a[data-disable-with], a[data-disable]',
        buttonDisableSelector: 'button[data-remote][data-disable-with], button[data-remote][data-disable]'
      };
    }).call(this);
  }).call(context);
  var Rails = context.Rails;
  (function () {
    (function () {
      var nonce;
      nonce = null;

      Rails.loadCSPNonce = function () {
        var ref;
        return nonce = (ref = document.querySelector("meta[name=csp-nonce]")) != null ? ref.content : void 0;
      };

      Rails.cspNonce = function () {
        return nonce != null ? nonce : Rails.loadCSPNonce();
      };
    }).call(this);
    (function () {
      var expando, m;
      m = Element.prototype.matches || Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector;

      Rails.matches = function (element, selector) {
        if (selector.exclude != null) {
          return m.call(element, selector.selector) && !m.call(element, selector.exclude);
        } else {
          return m.call(element, selector);
        }
      };

      expando = '_ujsData';

      Rails.getData = function (element, key) {
        var ref;
        return (ref = element[expando]) != null ? ref[key] : void 0;
      };

      Rails.setData = function (element, key, value) {
        if (element[expando] == null) {
          element[expando] = {};
        }

        return element[expando][key] = value;
      };

      Rails.$ = function (selector) {
        return Array.prototype.slice.call(document.querySelectorAll(selector));
      };
    }).call(this);
    (function () {
      var $, csrfParam, csrfToken;
      $ = Rails.$;

      csrfToken = Rails.csrfToken = function () {
        var meta;
        meta = document.querySelector('meta[name=csrf-token]');
        return meta && meta.content;
      };

      csrfParam = Rails.csrfParam = function () {
        var meta;
        meta = document.querySelector('meta[name=csrf-param]');
        return meta && meta.content;
      };

      Rails.CSRFProtection = function (xhr) {
        var token;
        token = csrfToken();

        if (token != null) {
          return xhr.setRequestHeader('X-CSRF-Token', token);
        }
      };

      Rails.refreshCSRFTokens = function () {
        var param, token;
        token = csrfToken();
        param = csrfParam();

        if (token != null && param != null) {
          return $('form input[name="' + param + '"]').forEach(function (input) {
            return input.value = token;
          });
        }
      };
    }).call(this);
    (function () {
      var CustomEvent, fire, matches, preventDefault;
      matches = Rails.matches;
      CustomEvent = window.CustomEvent;

      if (typeof CustomEvent !== 'function') {
        CustomEvent = function (event, params) {
          var evt;
          evt = document.createEvent('CustomEvent');
          evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
          return evt;
        };

        CustomEvent.prototype = window.Event.prototype;
        preventDefault = CustomEvent.prototype.preventDefault;

        CustomEvent.prototype.preventDefault = function () {
          var result;
          result = preventDefault.call(this);

          if (this.cancelable && !this.defaultPrevented) {
            Object.defineProperty(this, 'defaultPrevented', {
              get: function () {
                return true;
              }
            });
          }

          return result;
        };
      }

      fire = Rails.fire = function (obj, name, data) {
        var event;
        event = new CustomEvent(name, {
          bubbles: true,
          cancelable: true,
          detail: data
        });
        obj.dispatchEvent(event);
        return !event.defaultPrevented;
      };

      Rails.stopEverything = function (e) {
        fire(e.target, 'ujs:everythingStopped');
        e.preventDefault();
        e.stopPropagation();
        return e.stopImmediatePropagation();
      };

      Rails.delegate = function (element, selector, eventType, handler) {
        return element.addEventListener(eventType, function (e) {
          var target;
          target = e.target;

          while (!(!(target instanceof Element) || matches(target, selector))) {
            target = target.parentNode;
          }

          if (target instanceof Element && handler.call(target, e) === false) {
            e.preventDefault();
            return e.stopPropagation();
          }
        });
      };
    }).call(this);
    (function () {
      var AcceptHeaders, CSRFProtection, createXHR, cspNonce, fire, prepareOptions, processResponse;
      cspNonce = Rails.cspNonce, CSRFProtection = Rails.CSRFProtection, fire = Rails.fire;
      AcceptHeaders = {
        '*': '*/*',
        text: 'text/plain',
        html: 'text/html',
        xml: 'application/xml, text/xml',
        json: 'application/json, text/javascript',
        script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript'
      };

      Rails.ajax = function (options) {
        var xhr;
        options = prepareOptions(options);
        xhr = createXHR(options, function () {
          var ref, response;
          response = processResponse((ref = xhr.response) != null ? ref : xhr.responseText, xhr.getResponseHeader('Content-Type'));

          if (Math.floor(xhr.status / 100) === 2) {
            if (typeof options.success === "function") {
              options.success(response, xhr.statusText, xhr);
            }
          } else {
            if (typeof options.error === "function") {
              options.error(response, xhr.statusText, xhr);
            }
          }

          return typeof options.complete === "function" ? options.complete(xhr, xhr.statusText) : void 0;
        });

        if (options.beforeSend != null && !options.beforeSend(xhr, options)) {
          return false;
        }

        if (xhr.readyState === XMLHttpRequest.OPENED) {
          return xhr.send(options.data);
        }
      };

      prepareOptions = function (options) {
        options.url = options.url || location.href;
        options.type = options.type.toUpperCase();

        if (options.type === 'GET' && options.data) {
          if (options.url.indexOf('?') < 0) {
            options.url += '?' + options.data;
          } else {
            options.url += '&' + options.data;
          }
        }

        if (AcceptHeaders[options.dataType] == null) {
          options.dataType = '*';
        }

        options.accept = AcceptHeaders[options.dataType];

        if (options.dataType !== '*') {
          options.accept += ', */*; q=0.01';
        }

        return options;
      };

      createXHR = function (options, done) {
        var xhr;
        xhr = new XMLHttpRequest();
        xhr.open(options.type, options.url, true);
        xhr.setRequestHeader('Accept', options.accept);

        if (typeof options.data === 'string') {
          xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        }

        if (!options.crossDomain) {
          xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
          CSRFProtection(xhr);
        }

        xhr.withCredentials = !!options.withCredentials;

        xhr.onreadystatechange = function () {
          if (xhr.readyState === XMLHttpRequest.DONE) {
            return done(xhr);
          }
        };

        return xhr;
      };

      processResponse = function (response, type) {
        var parser, script;

        if (typeof response === 'string' && typeof type === 'string') {
          if (type.match(/\bjson\b/)) {
            try {
              response = JSON.parse(response);
            } catch (error) {}
          } else if (type.match(/\b(?:java|ecma)script\b/)) {
            script = document.createElement('script');
            script.setAttribute('nonce', cspNonce());
            script.text = response;
            document.head.appendChild(script).parentNode.removeChild(script);
          } else if (type.match(/\b(xml|html|svg)\b/)) {
            parser = new DOMParser();
            type = type.replace(/;.+/, '');

            try {
              response = parser.parseFromString(response, type);
            } catch (error) {}
          }
        }

        return response;
      };

      Rails.href = function (element) {
        return element.href;
      };

      Rails.isCrossDomain = function (url) {
        var e, originAnchor, urlAnchor;
        originAnchor = document.createElement('a');
        originAnchor.href = location.href;
        urlAnchor = document.createElement('a');

        try {
          urlAnchor.href = url;
          return !((!urlAnchor.protocol || urlAnchor.protocol === ':') && !urlAnchor.host || originAnchor.protocol + '//' + originAnchor.host === urlAnchor.protocol + '//' + urlAnchor.host);
        } catch (error) {
          e = error;
          return true;
        }
      };
    }).call(this);
    (function () {
      var matches, toArray;
      matches = Rails.matches;

      toArray = function (e) {
        return Array.prototype.slice.call(e);
      };

      Rails.serializeElement = function (element, additionalParam) {
        var inputs, params;
        inputs = [element];

        if (matches(element, 'form')) {
          inputs = toArray(element.elements);
        }

        params = [];
        inputs.forEach(function (input) {
          if (!input.name || input.disabled) {
            return;
          }

          if (matches(input, 'fieldset[disabled] *')) {
            return;
          }

          if (matches(input, 'select')) {
            return toArray(input.options).forEach(function (option) {
              if (option.selected) {
                return params.push({
                  name: input.name,
                  value: option.value
                });
              }
            });
          } else if (input.checked || ['radio', 'checkbox', 'submit'].indexOf(input.type) === -1) {
            return params.push({
              name: input.name,
              value: input.value
            });
          }
        });

        if (additionalParam) {
          params.push(additionalParam);
        }

        return params.map(function (param) {
          if (param.name != null) {
            return encodeURIComponent(param.name) + "=" + encodeURIComponent(param.value);
          } else {
            return param;
          }
        }).join('&');
      };

      Rails.formElements = function (form, selector) {
        if (matches(form, 'form')) {
          return toArray(form.elements).filter(function (el) {
            return matches(el, selector);
          });
        } else {
          return toArray(form.querySelectorAll(selector));
        }
      };
    }).call(this);
    (function () {
      var allowAction, fire, stopEverything;
      fire = Rails.fire, stopEverything = Rails.stopEverything;

      Rails.handleConfirm = function (e) {
        if (!allowAction(this)) {
          return stopEverything(e);
        }
      };

      Rails.confirm = function (message, element) {
        return confirm(message);
      };

      allowAction = function (element) {
        var answer, callback, message;
        message = element.getAttribute('data-confirm');

        if (!message) {
          return true;
        }

        answer = false;

        if (fire(element, 'confirm')) {
          try {
            answer = Rails.confirm(message, element);
          } catch (error) {}

          callback = fire(element, 'confirm:complete', [answer]);
        }

        return answer && callback;
      };
    }).call(this);
    (function () {
      var disableFormElement, disableFormElements, disableLinkElement, enableFormElement, enableFormElements, enableLinkElement, formElements, getData, isXhrRedirect, matches, setData, stopEverything;
      matches = Rails.matches, getData = Rails.getData, setData = Rails.setData, stopEverything = Rails.stopEverything, formElements = Rails.formElements;

      Rails.handleDisabledElement = function (e) {
        var element;
        element = this;

        if (element.disabled) {
          return stopEverything(e);
        }
      };

      Rails.enableElement = function (e) {
        var element;

        if (e instanceof Event) {
          if (isXhrRedirect(e)) {
            return;
          }

          element = e.target;
        } else {
          element = e;
        }

        if (matches(element, Rails.linkDisableSelector)) {
          return enableLinkElement(element);
        } else if (matches(element, Rails.buttonDisableSelector) || matches(element, Rails.formEnableSelector)) {
          return enableFormElement(element);
        } else if (matches(element, Rails.formSubmitSelector)) {
          return enableFormElements(element);
        }
      };

      Rails.disableElement = function (e) {
        var element;
        element = e instanceof Event ? e.target : e;

        if (matches(element, Rails.linkDisableSelector)) {
          return disableLinkElement(element);
        } else if (matches(element, Rails.buttonDisableSelector) || matches(element, Rails.formDisableSelector)) {
          return disableFormElement(element);
        } else if (matches(element, Rails.formSubmitSelector)) {
          return disableFormElements(element);
        }
      };

      disableLinkElement = function (element) {
        var replacement;

        if (getData(element, 'ujs:disabled')) {
          return;
        }

        replacement = element.getAttribute('data-disable-with');

        if (replacement != null) {
          setData(element, 'ujs:enable-with', element.innerHTML);
          element.innerHTML = replacement;
        }

        element.addEventListener('click', stopEverything);
        return setData(element, 'ujs:disabled', true);
      };

      enableLinkElement = function (element) {
        var originalText;
        originalText = getData(element, 'ujs:enable-with');

        if (originalText != null) {
          element.innerHTML = originalText;
          setData(element, 'ujs:enable-with', null);
        }

        element.removeEventListener('click', stopEverything);
        return setData(element, 'ujs:disabled', null);
      };

      disableFormElements = function (form) {
        return formElements(form, Rails.formDisableSelector).forEach(disableFormElement);
      };

      disableFormElement = function (element) {
        var replacement;

        if (getData(element, 'ujs:disabled')) {
          return;
        }

        replacement = element.getAttribute('data-disable-with');

        if (replacement != null) {
          if (matches(element, 'button')) {
            setData(element, 'ujs:enable-with', element.innerHTML);
            element.innerHTML = replacement;
          } else {
            setData(element, 'ujs:enable-with', element.value);
            element.value = replacement;
          }
        }

        element.disabled = true;
        return setData(element, 'ujs:disabled', true);
      };

      enableFormElements = function (form) {
        return formElements(form, Rails.formEnableSelector).forEach(enableFormElement);
      };

      enableFormElement = function (element) {
        var originalText;
        originalText = getData(element, 'ujs:enable-with');

        if (originalText != null) {
          if (matches(element, 'button')) {
            element.innerHTML = originalText;
          } else {
            element.value = originalText;
          }

          setData(element, 'ujs:enable-with', null);
        }

        element.disabled = false;
        return setData(element, 'ujs:disabled', null);
      };

      isXhrRedirect = function (event) {
        var ref, xhr;
        xhr = (ref = event.detail) != null ? ref[0] : void 0;
        return (xhr != null ? xhr.getResponseHeader("X-Xhr-Redirect") : void 0) != null;
      };
    }).call(this);
    (function () {
      var stopEverything;
      stopEverything = Rails.stopEverything;

      Rails.handleMethod = function (e) {
        var csrfParam, csrfToken, form, formContent, href, link, method;
        link = this;
        method = link.getAttribute('data-method');

        if (!method) {
          return;
        }

        href = Rails.href(link);
        csrfToken = Rails.csrfToken();
        csrfParam = Rails.csrfParam();
        form = document.createElement('form');
        formContent = "<input name='_method' value='" + method + "' type='hidden' />";

        if (csrfParam != null && csrfToken != null && !Rails.isCrossDomain(href)) {
          formContent += "<input name='" + csrfParam + "' value='" + csrfToken + "' type='hidden' />";
        }

        formContent += '<input type="submit" />';
        form.method = 'post';
        form.action = href;
        form.target = link.target;
        form.innerHTML = formContent;
        form.style.display = 'none';
        document.body.appendChild(form);
        form.querySelector('[type="submit"]').click();
        return stopEverything(e);
      };
    }).call(this);
    (function () {
      var ajax,
          fire,
          getData,
          isCrossDomain,
          isRemote,
          matches,
          serializeElement,
          setData,
          stopEverything,
          slice = [].slice;
      matches = Rails.matches, getData = Rails.getData, setData = Rails.setData, fire = Rails.fire, stopEverything = Rails.stopEverything, ajax = Rails.ajax, isCrossDomain = Rails.isCrossDomain, serializeElement = Rails.serializeElement;

      isRemote = function (element) {
        var value;
        value = element.getAttribute('data-remote');
        return value != null && value !== 'false';
      };

      Rails.handleRemote = function (e) {
        var button, data, dataType, element, method, url, withCredentials;
        element = this;

        if (!isRemote(element)) {
          return true;
        }

        if (!fire(element, 'ajax:before')) {
          fire(element, 'ajax:stopped');
          return false;
        }

        withCredentials = element.getAttribute('data-with-credentials');
        dataType = element.getAttribute('data-type') || 'script';

        if (matches(element, Rails.formSubmitSelector)) {
          button = getData(element, 'ujs:submit-button');
          method = getData(element, 'ujs:submit-button-formmethod') || element.method;
          url = getData(element, 'ujs:submit-button-formaction') || element.getAttribute('action') || location.href;

          if (method.toUpperCase() === 'GET') {
            url = url.replace(/\?.*$/, '');
          }

          if (element.enctype === 'multipart/form-data') {
            data = new FormData(element);

            if (button != null) {
              data.append(button.name, button.value);
            }
          } else {
            data = serializeElement(element, button);
          }

          setData(element, 'ujs:submit-button', null);
          setData(element, 'ujs:submit-button-formmethod', null);
          setData(element, 'ujs:submit-button-formaction', null);
        } else if (matches(element, Rails.buttonClickSelector) || matches(element, Rails.inputChangeSelector)) {
          method = element.getAttribute('data-method');
          url = element.getAttribute('data-url');
          data = serializeElement(element, element.getAttribute('data-params'));
        } else {
          method = element.getAttribute('data-method');
          url = Rails.href(element);
          data = element.getAttribute('data-params');
        }

        ajax({
          type: method || 'GET',
          url: url,
          data: data,
          dataType: dataType,
          beforeSend: function (xhr, options) {
            if (fire(element, 'ajax:beforeSend', [xhr, options])) {
              return fire(element, 'ajax:send', [xhr]);
            } else {
              fire(element, 'ajax:stopped');
              return false;
            }
          },
          success: function () {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return fire(element, 'ajax:success', args);
          },
          error: function () {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return fire(element, 'ajax:error', args);
          },
          complete: function () {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return fire(element, 'ajax:complete', args);
          },
          crossDomain: isCrossDomain(url),
          withCredentials: withCredentials != null && withCredentials !== 'false'
        });
        return stopEverything(e);
      };

      Rails.formSubmitButtonClick = function (e) {
        var button, form;
        button = this;
        form = button.form;

        if (!form) {
          return;
        }

        if (button.name) {
          setData(form, 'ujs:submit-button', {
            name: button.name,
            value: button.value
          });
        }

        setData(form, 'ujs:formnovalidate-button', button.formNoValidate);
        setData(form, 'ujs:submit-button-formaction', button.getAttribute('formaction'));
        return setData(form, 'ujs:submit-button-formmethod', button.getAttribute('formmethod'));
      };

      Rails.preventInsignificantClick = function (e) {
        var data, insignificantMetaClick, link, metaClick, method, nonPrimaryMouseClick;
        link = this;
        method = (link.getAttribute('data-method') || 'GET').toUpperCase();
        data = link.getAttribute('data-params');
        metaClick = e.metaKey || e.ctrlKey;
        insignificantMetaClick = metaClick && method === 'GET' && !data;
        nonPrimaryMouseClick = e.button != null && e.button !== 0;

        if (nonPrimaryMouseClick || insignificantMetaClick) {
          return e.stopImmediatePropagation();
        }
      };
    }).call(this);
    (function () {
      var $, CSRFProtection, delegate, disableElement, enableElement, fire, formSubmitButtonClick, getData, handleConfirm, handleDisabledElement, handleMethod, handleRemote, loadCSPNonce, preventInsignificantClick, refreshCSRFTokens;
      fire = Rails.fire, delegate = Rails.delegate, getData = Rails.getData, $ = Rails.$, refreshCSRFTokens = Rails.refreshCSRFTokens, CSRFProtection = Rails.CSRFProtection, loadCSPNonce = Rails.loadCSPNonce, enableElement = Rails.enableElement, disableElement = Rails.disableElement, handleDisabledElement = Rails.handleDisabledElement, handleConfirm = Rails.handleConfirm, preventInsignificantClick = Rails.preventInsignificantClick, handleRemote = Rails.handleRemote, formSubmitButtonClick = Rails.formSubmitButtonClick, handleMethod = Rails.handleMethod;

      if (typeof jQuery !== "undefined" && jQuery !== null && jQuery.ajax != null) {
        if (jQuery.rails) {
          throw new Error('If you load both jquery_ujs and rails-ujs, use rails-ujs only.');
        }

        jQuery.rails = Rails;
        jQuery.ajaxPrefilter(function (options, originalOptions, xhr) {
          if (!options.crossDomain) {
            return CSRFProtection(xhr);
          }
        });
      }

      Rails.start = function () {
        if (window._rails_loaded) {
          throw new Error('rails-ujs has already been loaded!');
        }

        window.addEventListener('pageshow', function () {
          $(Rails.formEnableSelector).forEach(function (el) {
            if (getData(el, 'ujs:disabled')) {
              return enableElement(el);
            }
          });
          return $(Rails.linkDisableSelector).forEach(function (el) {
            if (getData(el, 'ujs:disabled')) {
              return enableElement(el);
            }
          });
        });
        delegate(document, Rails.linkDisableSelector, 'ajax:complete', enableElement);
        delegate(document, Rails.linkDisableSelector, 'ajax:stopped', enableElement);
        delegate(document, Rails.buttonDisableSelector, 'ajax:complete', enableElement);
        delegate(document, Rails.buttonDisableSelector, 'ajax:stopped', enableElement);
        delegate(document, Rails.linkClickSelector, 'click', preventInsignificantClick);
        delegate(document, Rails.linkClickSelector, 'click', handleDisabledElement);
        delegate(document, Rails.linkClickSelector, 'click', handleConfirm);
        delegate(document, Rails.linkClickSelector, 'click', disableElement);
        delegate(document, Rails.linkClickSelector, 'click', handleRemote);
        delegate(document, Rails.linkClickSelector, 'click', handleMethod);
        delegate(document, Rails.buttonClickSelector, 'click', preventInsignificantClick);
        delegate(document, Rails.buttonClickSelector, 'click', handleDisabledElement);
        delegate(document, Rails.buttonClickSelector, 'click', handleConfirm);
        delegate(document, Rails.buttonClickSelector, 'click', disableElement);
        delegate(document, Rails.buttonClickSelector, 'click', handleRemote);
        delegate(document, Rails.inputChangeSelector, 'change', handleDisabledElement);
        delegate(document, Rails.inputChangeSelector, 'change', handleConfirm);
        delegate(document, Rails.inputChangeSelector, 'change', handleRemote);
        delegate(document, Rails.formSubmitSelector, 'submit', handleDisabledElement);
        delegate(document, Rails.formSubmitSelector, 'submit', handleConfirm);
        delegate(document, Rails.formSubmitSelector, 'submit', handleRemote);
        delegate(document, Rails.formSubmitSelector, 'submit', function (e) {
          return setTimeout(function () {
            return disableElement(e);
          }, 13);
        });
        delegate(document, Rails.formSubmitSelector, 'ajax:send', disableElement);
        delegate(document, Rails.formSubmitSelector, 'ajax:complete', enableElement);
        delegate(document, Rails.formInputClickSelector, 'click', preventInsignificantClick);
        delegate(document, Rails.formInputClickSelector, 'click', handleDisabledElement);
        delegate(document, Rails.formInputClickSelector, 'click', handleConfirm);
        delegate(document, Rails.formInputClickSelector, 'click', formSubmitButtonClick);
        document.addEventListener('DOMContentLoaded', refreshCSRFTokens);
        document.addEventListener('DOMContentLoaded', loadCSPNonce);
        return window._rails_loaded = true;
      };

      if (window.Rails === Rails && fire(document, 'rails:attachBindings')) {
        Rails.start();
      }
    }).call(this);
  }).call(this);

  if ( true && module.exports) {
    module.exports = Rails;
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (Rails),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
}).call(this);

/***/ }),

/***/ "./node_modules/turbolinks/dist/turbolinks.js":
/*!****************************************************!*\
  !*** ./node_modules/turbolinks/dist/turbolinks.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
Turbolinks 5.2.0
Copyright © 2018 Basecamp, LLC
 */
(function () {
  var t = this;
  (function () {
    (function () {
      this.Turbolinks = {
        supported: function () {
          return null != window.history.pushState && null != window.requestAnimationFrame && null != window.addEventListener;
        }(),
        visit: function (t, r) {
          return e.controller.visit(t, r);
        },
        clearCache: function () {
          return e.controller.clearCache();
        },
        setProgressBarDelay: function (t) {
          return e.controller.setProgressBarDelay(t);
        }
      };
    }).call(this);
  }).call(t);
  var e = t.Turbolinks;
  (function () {
    (function () {
      var t,
          r,
          n,
          o = [].slice;
      e.copyObject = function (t) {
        var e, r, n;
        r = {};

        for (e in t) n = t[e], r[e] = n;

        return r;
      }, e.closest = function (e, r) {
        return t.call(e, r);
      }, t = function () {
        var t, e;
        return t = document.documentElement, null != (e = t.closest) ? e : function (t) {
          var e;

          for (e = this; e;) {
            if (e.nodeType === Node.ELEMENT_NODE && r.call(e, t)) return e;
            e = e.parentNode;
          }
        };
      }(), e.defer = function (t) {
        return setTimeout(t, 1);
      }, e.throttle = function (t) {
        var e;
        return e = null, function () {
          var r;
          return r = 1 <= arguments.length ? o.call(arguments, 0) : [], null != e ? e : e = requestAnimationFrame(function (n) {
            return function () {
              return e = null, t.apply(n, r);
            };
          }(this));
        };
      }, e.dispatch = function (t, e) {
        var r, o, i, s, a, u;
        return a = null != e ? e : {}, u = a.target, r = a.cancelable, o = a.data, i = document.createEvent("Events"), i.initEvent(t, !0, r === !0), i.data = null != o ? o : {}, i.cancelable && !n && (s = i.preventDefault, i.preventDefault = function () {
          return this.defaultPrevented || Object.defineProperty(this, "defaultPrevented", {
            get: function () {
              return !0;
            }
          }), s.call(this);
        }), (null != u ? u : document).dispatchEvent(i), i;
      }, n = function () {
        var t;
        return t = document.createEvent("Events"), t.initEvent("test", !0, !0), t.preventDefault(), t.defaultPrevented;
      }(), e.match = function (t, e) {
        return r.call(t, e);
      }, r = function () {
        var t, e, r, n;
        return t = document.documentElement, null != (e = null != (r = null != (n = t.matchesSelector) ? n : t.webkitMatchesSelector) ? r : t.msMatchesSelector) ? e : t.mozMatchesSelector;
      }(), e.uuid = function () {
        var t, e, r;

        for (r = "", t = e = 1; 36 >= e; t = ++e) r += 9 === t || 14 === t || 19 === t || 24 === t ? "-" : 15 === t ? "4" : 20 === t ? (Math.floor(4 * Math.random()) + 8).toString(16) : Math.floor(15 * Math.random()).toString(16);

        return r;
      };
    }).call(this), function () {
      e.Location = function () {
        function t(t) {
          var e, r;
          null == t && (t = ""), r = document.createElement("a"), r.href = t.toString(), this.absoluteURL = r.href, e = r.hash.length, 2 > e ? this.requestURL = this.absoluteURL : (this.requestURL = this.absoluteURL.slice(0, -e), this.anchor = r.hash.slice(1));
        }

        var e, r, n, o;
        return t.wrap = function (t) {
          return t instanceof this ? t : new this(t);
        }, t.prototype.getOrigin = function () {
          return this.absoluteURL.split("/", 3).join("/");
        }, t.prototype.getPath = function () {
          var t, e;
          return null != (t = null != (e = this.requestURL.match(/\/\/[^\/]*(\/[^?;]*)/)) ? e[1] : void 0) ? t : "/";
        }, t.prototype.getPathComponents = function () {
          return this.getPath().split("/").slice(1);
        }, t.prototype.getLastPathComponent = function () {
          return this.getPathComponents().slice(-1)[0];
        }, t.prototype.getExtension = function () {
          var t, e;
          return null != (t = null != (e = this.getLastPathComponent().match(/\.[^.]*$/)) ? e[0] : void 0) ? t : "";
        }, t.prototype.isHTML = function () {
          return this.getExtension().match(/^(?:|\.(?:htm|html|xhtml))$/);
        }, t.prototype.isPrefixedBy = function (t) {
          var e;
          return e = r(t), this.isEqualTo(t) || o(this.absoluteURL, e);
        }, t.prototype.isEqualTo = function (t) {
          return this.absoluteURL === (null != t ? t.absoluteURL : void 0);
        }, t.prototype.toCacheKey = function () {
          return this.requestURL;
        }, t.prototype.toJSON = function () {
          return this.absoluteURL;
        }, t.prototype.toString = function () {
          return this.absoluteURL;
        }, t.prototype.valueOf = function () {
          return this.absoluteURL;
        }, r = function (t) {
          return e(t.getOrigin() + t.getPath());
        }, e = function (t) {
          return n(t, "/") ? t : t + "/";
        }, o = function (t, e) {
          return t.slice(0, e.length) === e;
        }, n = function (t, e) {
          return t.slice(-e.length) === e;
        }, t;
      }();
    }.call(this), function () {
      var t = function (t, e) {
        return function () {
          return t.apply(e, arguments);
        };
      };

      e.HttpRequest = function () {
        function r(r, n, o) {
          this.delegate = r, this.requestCanceled = t(this.requestCanceled, this), this.requestTimedOut = t(this.requestTimedOut, this), this.requestFailed = t(this.requestFailed, this), this.requestLoaded = t(this.requestLoaded, this), this.requestProgressed = t(this.requestProgressed, this), this.url = e.Location.wrap(n).requestURL, this.referrer = e.Location.wrap(o).absoluteURL, this.createXHR();
        }

        return r.NETWORK_FAILURE = 0, r.TIMEOUT_FAILURE = -1, r.timeout = 60, r.prototype.send = function () {
          var t;
          return this.xhr && !this.sent ? (this.notifyApplicationBeforeRequestStart(), this.setProgress(0), this.xhr.send(), this.sent = !0, "function" == typeof (t = this.delegate).requestStarted ? t.requestStarted() : void 0) : void 0;
        }, r.prototype.cancel = function () {
          return this.xhr && this.sent ? this.xhr.abort() : void 0;
        }, r.prototype.requestProgressed = function (t) {
          return t.lengthComputable ? this.setProgress(t.loaded / t.total) : void 0;
        }, r.prototype.requestLoaded = function () {
          return this.endRequest(function (t) {
            return function () {
              var e;
              return 200 <= (e = t.xhr.status) && 300 > e ? t.delegate.requestCompletedWithResponse(t.xhr.responseText, t.xhr.getResponseHeader("Turbolinks-Location")) : (t.failed = !0, t.delegate.requestFailedWithStatusCode(t.xhr.status, t.xhr.responseText));
            };
          }(this));
        }, r.prototype.requestFailed = function () {
          return this.endRequest(function (t) {
            return function () {
              return t.failed = !0, t.delegate.requestFailedWithStatusCode(t.constructor.NETWORK_FAILURE);
            };
          }(this));
        }, r.prototype.requestTimedOut = function () {
          return this.endRequest(function (t) {
            return function () {
              return t.failed = !0, t.delegate.requestFailedWithStatusCode(t.constructor.TIMEOUT_FAILURE);
            };
          }(this));
        }, r.prototype.requestCanceled = function () {
          return this.endRequest();
        }, r.prototype.notifyApplicationBeforeRequestStart = function () {
          return e.dispatch("turbolinks:request-start", {
            data: {
              url: this.url,
              xhr: this.xhr
            }
          });
        }, r.prototype.notifyApplicationAfterRequestEnd = function () {
          return e.dispatch("turbolinks:request-end", {
            data: {
              url: this.url,
              xhr: this.xhr
            }
          });
        }, r.prototype.createXHR = function () {
          return this.xhr = new XMLHttpRequest(), this.xhr.open("GET", this.url, !0), this.xhr.timeout = 1e3 * this.constructor.timeout, this.xhr.setRequestHeader("Accept", "text/html, application/xhtml+xml"), this.xhr.setRequestHeader("Turbolinks-Referrer", this.referrer), this.xhr.onprogress = this.requestProgressed, this.xhr.onload = this.requestLoaded, this.xhr.onerror = this.requestFailed, this.xhr.ontimeout = this.requestTimedOut, this.xhr.onabort = this.requestCanceled;
        }, r.prototype.endRequest = function (t) {
          return this.xhr ? (this.notifyApplicationAfterRequestEnd(), null != t && t.call(this), this.destroy()) : void 0;
        }, r.prototype.setProgress = function (t) {
          var e;
          return this.progress = t, "function" == typeof (e = this.delegate).requestProgressed ? e.requestProgressed(this.progress) : void 0;
        }, r.prototype.destroy = function () {
          var t;
          return this.setProgress(1), "function" == typeof (t = this.delegate).requestFinished && t.requestFinished(), this.delegate = null, this.xhr = null;
        }, r;
      }();
    }.call(this), function () {
      var t = function (t, e) {
        return function () {
          return t.apply(e, arguments);
        };
      };

      e.ProgressBar = function () {
        function e() {
          this.trickle = t(this.trickle, this), this.stylesheetElement = this.createStylesheetElement(), this.progressElement = this.createProgressElement();
        }

        var r;
        return r = 300, e.defaultCSS = ".turbolinks-progress-bar {\n  position: fixed;\n  display: block;\n  top: 0;\n  left: 0;\n  height: 3px;\n  background: #0076ff;\n  z-index: 9999;\n  transition: width " + r + "ms ease-out, opacity " + r / 2 + "ms " + r / 2 + "ms ease-in;\n  transform: translate3d(0, 0, 0);\n}", e.prototype.show = function () {
          return this.visible ? void 0 : (this.visible = !0, this.installStylesheetElement(), this.installProgressElement(), this.startTrickling());
        }, e.prototype.hide = function () {
          return this.visible && !this.hiding ? (this.hiding = !0, this.fadeProgressElement(function (t) {
            return function () {
              return t.uninstallProgressElement(), t.stopTrickling(), t.visible = !1, t.hiding = !1;
            };
          }(this))) : void 0;
        }, e.prototype.setValue = function (t) {
          return this.value = t, this.refresh();
        }, e.prototype.installStylesheetElement = function () {
          return document.head.insertBefore(this.stylesheetElement, document.head.firstChild);
        }, e.prototype.installProgressElement = function () {
          return this.progressElement.style.width = 0, this.progressElement.style.opacity = 1, document.documentElement.insertBefore(this.progressElement, document.body), this.refresh();
        }, e.prototype.fadeProgressElement = function (t) {
          return this.progressElement.style.opacity = 0, setTimeout(t, 1.5 * r);
        }, e.prototype.uninstallProgressElement = function () {
          return this.progressElement.parentNode ? document.documentElement.removeChild(this.progressElement) : void 0;
        }, e.prototype.startTrickling = function () {
          return null != this.trickleInterval ? this.trickleInterval : this.trickleInterval = setInterval(this.trickle, r);
        }, e.prototype.stopTrickling = function () {
          return clearInterval(this.trickleInterval), this.trickleInterval = null;
        }, e.prototype.trickle = function () {
          return this.setValue(this.value + Math.random() / 100);
        }, e.prototype.refresh = function () {
          return requestAnimationFrame(function (t) {
            return function () {
              return t.progressElement.style.width = 10 + 90 * t.value + "%";
            };
          }(this));
        }, e.prototype.createStylesheetElement = function () {
          var t;
          return t = document.createElement("style"), t.type = "text/css", t.textContent = this.constructor.defaultCSS, t;
        }, e.prototype.createProgressElement = function () {
          var t;
          return t = document.createElement("div"), t.className = "turbolinks-progress-bar", t;
        }, e;
      }();
    }.call(this), function () {
      var t = function (t, e) {
        return function () {
          return t.apply(e, arguments);
        };
      };

      e.BrowserAdapter = function () {
        function r(r) {
          this.controller = r, this.showProgressBar = t(this.showProgressBar, this), this.progressBar = new e.ProgressBar();
        }

        var n, o, i;
        return i = e.HttpRequest, n = i.NETWORK_FAILURE, o = i.TIMEOUT_FAILURE, r.prototype.visitProposedToLocationWithAction = function (t, e) {
          return this.controller.startVisitToLocationWithAction(t, e);
        }, r.prototype.visitStarted = function (t) {
          return t.issueRequest(), t.changeHistory(), t.loadCachedSnapshot();
        }, r.prototype.visitRequestStarted = function (t) {
          return this.progressBar.setValue(0), t.hasCachedSnapshot() || "restore" !== t.action ? this.showProgressBarAfterDelay() : this.showProgressBar();
        }, r.prototype.visitRequestProgressed = function (t) {
          return this.progressBar.setValue(t.progress);
        }, r.prototype.visitRequestCompleted = function (t) {
          return t.loadResponse();
        }, r.prototype.visitRequestFailedWithStatusCode = function (t, e) {
          switch (e) {
            case n:
            case o:
              return this.reload();

            default:
              return t.loadResponse();
          }
        }, r.prototype.visitRequestFinished = function (t) {
          return this.hideProgressBar();
        }, r.prototype.visitCompleted = function (t) {
          return t.followRedirect();
        }, r.prototype.pageInvalidated = function () {
          return this.reload();
        }, r.prototype.showProgressBarAfterDelay = function () {
          return this.progressBarTimeout = setTimeout(this.showProgressBar, this.controller.progressBarDelay);
        }, r.prototype.showProgressBar = function () {
          return this.progressBar.show();
        }, r.prototype.hideProgressBar = function () {
          return this.progressBar.hide(), clearTimeout(this.progressBarTimeout);
        }, r.prototype.reload = function () {
          return window.location.reload();
        }, r;
      }();
    }.call(this), function () {
      var t = function (t, e) {
        return function () {
          return t.apply(e, arguments);
        };
      };

      e.History = function () {
        function r(e) {
          this.delegate = e, this.onPageLoad = t(this.onPageLoad, this), this.onPopState = t(this.onPopState, this);
        }

        return r.prototype.start = function () {
          return this.started ? void 0 : (addEventListener("popstate", this.onPopState, !1), addEventListener("load", this.onPageLoad, !1), this.started = !0);
        }, r.prototype.stop = function () {
          return this.started ? (removeEventListener("popstate", this.onPopState, !1), removeEventListener("load", this.onPageLoad, !1), this.started = !1) : void 0;
        }, r.prototype.push = function (t, r) {
          return t = e.Location.wrap(t), this.update("push", t, r);
        }, r.prototype.replace = function (t, r) {
          return t = e.Location.wrap(t), this.update("replace", t, r);
        }, r.prototype.onPopState = function (t) {
          var r, n, o, i;
          return this.shouldHandlePopState() && (i = null != (n = t.state) ? n.turbolinks : void 0) ? (r = e.Location.wrap(window.location), o = i.restorationIdentifier, this.delegate.historyPoppedToLocationWithRestorationIdentifier(r, o)) : void 0;
        }, r.prototype.onPageLoad = function (t) {
          return e.defer(function (t) {
            return function () {
              return t.pageLoaded = !0;
            };
          }(this));
        }, r.prototype.shouldHandlePopState = function () {
          return this.pageIsLoaded();
        }, r.prototype.pageIsLoaded = function () {
          return this.pageLoaded || "complete" === document.readyState;
        }, r.prototype.update = function (t, e, r) {
          var n;
          return n = {
            turbolinks: {
              restorationIdentifier: r
            }
          }, history[t + "State"](n, null, e);
        }, r;
      }();
    }.call(this), function () {
      e.HeadDetails = function () {
        function t(t) {
          var e, r, n, s, a, u;

          for (this.elements = {}, n = 0, a = t.length; a > n; n++) u = t[n], u.nodeType === Node.ELEMENT_NODE && (s = u.outerHTML, r = null != (e = this.elements)[s] ? e[s] : e[s] = {
            type: i(u),
            tracked: o(u),
            elements: []
          }, r.elements.push(u));
        }

        var e, r, n, o, i;
        return t.fromHeadElement = function (t) {
          var e;
          return new this(null != (e = null != t ? t.childNodes : void 0) ? e : []);
        }, t.prototype.hasElementWithKey = function (t) {
          return t in this.elements;
        }, t.prototype.getTrackedElementSignature = function () {
          var t, e;
          return function () {
            var r, n;
            r = this.elements, n = [];

            for (t in r) e = r[t].tracked, e && n.push(t);

            return n;
          }.call(this).join("");
        }, t.prototype.getScriptElementsNotInDetails = function (t) {
          return this.getElementsMatchingTypeNotInDetails("script", t);
        }, t.prototype.getStylesheetElementsNotInDetails = function (t) {
          return this.getElementsMatchingTypeNotInDetails("stylesheet", t);
        }, t.prototype.getElementsMatchingTypeNotInDetails = function (t, e) {
          var r, n, o, i, s, a;
          o = this.elements, s = [];

          for (n in o) i = o[n], a = i.type, r = i.elements, a !== t || e.hasElementWithKey(n) || s.push(r[0]);

          return s;
        }, t.prototype.getProvisionalElements = function () {
          var t, e, r, n, o, i, s;
          r = [], n = this.elements;

          for (e in n) o = n[e], s = o.type, i = o.tracked, t = o.elements, null != s || i ? t.length > 1 && r.push.apply(r, t.slice(1)) : r.push.apply(r, t);

          return r;
        }, t.prototype.getMetaValue = function (t) {
          var e;
          return null != (e = this.findMetaElementByName(t)) ? e.getAttribute("content") : void 0;
        }, t.prototype.findMetaElementByName = function (t) {
          var r, n, o, i;
          r = void 0, i = this.elements;

          for (o in i) n = i[o].elements, e(n[0], t) && (r = n[0]);

          return r;
        }, i = function (t) {
          return r(t) ? "script" : n(t) ? "stylesheet" : void 0;
        }, o = function (t) {
          return "reload" === t.getAttribute("data-turbolinks-track");
        }, r = function (t) {
          var e;
          return e = t.tagName.toLowerCase(), "script" === e;
        }, n = function (t) {
          var e;
          return e = t.tagName.toLowerCase(), "style" === e || "link" === e && "stylesheet" === t.getAttribute("rel");
        }, e = function (t, e) {
          var r;
          return r = t.tagName.toLowerCase(), "meta" === r && t.getAttribute("name") === e;
        }, t;
      }();
    }.call(this), function () {
      e.Snapshot = function () {
        function t(t, e) {
          this.headDetails = t, this.bodyElement = e;
        }

        return t.wrap = function (t) {
          return t instanceof this ? t : "string" == typeof t ? this.fromHTMLString(t) : this.fromHTMLElement(t);
        }, t.fromHTMLString = function (t) {
          var e;
          return e = document.createElement("html"), e.innerHTML = t, this.fromHTMLElement(e);
        }, t.fromHTMLElement = function (t) {
          var r, n, o, i;
          return o = t.querySelector("head"), r = null != (i = t.querySelector("body")) ? i : document.createElement("body"), n = e.HeadDetails.fromHeadElement(o), new this(n, r);
        }, t.prototype.clone = function () {
          return new this.constructor(this.headDetails, this.bodyElement.cloneNode(!0));
        }, t.prototype.getRootLocation = function () {
          var t, r;
          return r = null != (t = this.getSetting("root")) ? t : "/", new e.Location(r);
        }, t.prototype.getCacheControlValue = function () {
          return this.getSetting("cache-control");
        }, t.prototype.getElementForAnchor = function (t) {
          try {
            return this.bodyElement.querySelector("[id='" + t + "'], a[name='" + t + "']");
          } catch (e) {}
        }, t.prototype.getPermanentElements = function () {
          return this.bodyElement.querySelectorAll("[id][data-turbolinks-permanent]");
        }, t.prototype.getPermanentElementById = function (t) {
          return this.bodyElement.querySelector("#" + t + "[data-turbolinks-permanent]");
        }, t.prototype.getPermanentElementsPresentInSnapshot = function (t) {
          var e, r, n, o, i;

          for (o = this.getPermanentElements(), i = [], r = 0, n = o.length; n > r; r++) e = o[r], t.getPermanentElementById(e.id) && i.push(e);

          return i;
        }, t.prototype.findFirstAutofocusableElement = function () {
          return this.bodyElement.querySelector("[autofocus]");
        }, t.prototype.hasAnchor = function (t) {
          return null != this.getElementForAnchor(t);
        }, t.prototype.isPreviewable = function () {
          return "no-preview" !== this.getCacheControlValue();
        }, t.prototype.isCacheable = function () {
          return "no-cache" !== this.getCacheControlValue();
        }, t.prototype.isVisitable = function () {
          return "reload" !== this.getSetting("visit-control");
        }, t.prototype.getSetting = function (t) {
          return this.headDetails.getMetaValue("turbolinks-" + t);
        }, t;
      }();
    }.call(this), function () {
      var t = [].slice;

      e.Renderer = function () {
        function e() {}

        var r;
        return e.render = function () {
          var e, r, n, o;
          return n = arguments[0], r = arguments[1], e = 3 <= arguments.length ? t.call(arguments, 2) : [], o = function (t, e, r) {
            r.prototype = t.prototype;
            var n = new r(),
                o = t.apply(n, e);
            return Object(o) === o ? o : n;
          }(this, e, function () {}), o.delegate = n, o.render(r), o;
        }, e.prototype.renderView = function (t) {
          return this.delegate.viewWillRender(this.newBody), t(), this.delegate.viewRendered(this.newBody);
        }, e.prototype.invalidateView = function () {
          return this.delegate.viewInvalidated();
        }, e.prototype.createScriptElement = function (t) {
          var e;
          return "false" === t.getAttribute("data-turbolinks-eval") ? t : (e = document.createElement("script"), e.textContent = t.textContent, e.async = !1, r(e, t), e);
        }, r = function (t, e) {
          var r, n, o, i, s, a, u;

          for (i = e.attributes, a = [], r = 0, n = i.length; n > r; r++) s = i[r], o = s.name, u = s.value, a.push(t.setAttribute(o, u));

          return a;
        }, e;
      }();
    }.call(this), function () {
      var t,
          r,
          n = function (t, e) {
        function r() {
          this.constructor = t;
        }

        for (var n in e) o.call(e, n) && (t[n] = e[n]);

        return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, t;
      },
          o = {}.hasOwnProperty;

      e.SnapshotRenderer = function (e) {
        function o(t, e, r) {
          this.currentSnapshot = t, this.newSnapshot = e, this.isPreview = r, this.currentHeadDetails = this.currentSnapshot.headDetails, this.newHeadDetails = this.newSnapshot.headDetails, this.currentBody = this.currentSnapshot.bodyElement, this.newBody = this.newSnapshot.bodyElement;
        }

        return n(o, e), o.prototype.render = function (t) {
          return this.shouldRender() ? (this.mergeHead(), this.renderView(function (e) {
            return function () {
              return e.replaceBody(), e.isPreview || e.focusFirstAutofocusableElement(), t();
            };
          }(this))) : this.invalidateView();
        }, o.prototype.mergeHead = function () {
          return this.copyNewHeadStylesheetElements(), this.copyNewHeadScriptElements(), this.removeCurrentHeadProvisionalElements(), this.copyNewHeadProvisionalElements();
        }, o.prototype.replaceBody = function () {
          var t;
          return t = this.relocateCurrentBodyPermanentElements(), this.activateNewBodyScriptElements(), this.assignNewBody(), this.replacePlaceholderElementsWithClonedPermanentElements(t);
        }, o.prototype.shouldRender = function () {
          return this.newSnapshot.isVisitable() && this.trackedElementsAreIdentical();
        }, o.prototype.trackedElementsAreIdentical = function () {
          return this.currentHeadDetails.getTrackedElementSignature() === this.newHeadDetails.getTrackedElementSignature();
        }, o.prototype.copyNewHeadStylesheetElements = function () {
          var t, e, r, n, o;

          for (n = this.getNewHeadStylesheetElements(), o = [], e = 0, r = n.length; r > e; e++) t = n[e], o.push(document.head.appendChild(t));

          return o;
        }, o.prototype.copyNewHeadScriptElements = function () {
          var t, e, r, n, o;

          for (n = this.getNewHeadScriptElements(), o = [], e = 0, r = n.length; r > e; e++) t = n[e], o.push(document.head.appendChild(this.createScriptElement(t)));

          return o;
        }, o.prototype.removeCurrentHeadProvisionalElements = function () {
          var t, e, r, n, o;

          for (n = this.getCurrentHeadProvisionalElements(), o = [], e = 0, r = n.length; r > e; e++) t = n[e], o.push(document.head.removeChild(t));

          return o;
        }, o.prototype.copyNewHeadProvisionalElements = function () {
          var t, e, r, n, o;

          for (n = this.getNewHeadProvisionalElements(), o = [], e = 0, r = n.length; r > e; e++) t = n[e], o.push(document.head.appendChild(t));

          return o;
        }, o.prototype.relocateCurrentBodyPermanentElements = function () {
          var e, n, o, i, s, a, u;

          for (a = this.getCurrentBodyPermanentElements(), u = [], e = 0, n = a.length; n > e; e++) i = a[e], s = t(i), o = this.newSnapshot.getPermanentElementById(i.id), r(i, s.element), r(o, i), u.push(s);

          return u;
        }, o.prototype.replacePlaceholderElementsWithClonedPermanentElements = function (t) {
          var e, n, o, i, s, a, u;

          for (u = [], o = 0, i = t.length; i > o; o++) a = t[o], n = a.element, s = a.permanentElement, e = s.cloneNode(!0), u.push(r(n, e));

          return u;
        }, o.prototype.activateNewBodyScriptElements = function () {
          var t, e, n, o, i, s;

          for (i = this.getNewBodyScriptElements(), s = [], e = 0, o = i.length; o > e; e++) n = i[e], t = this.createScriptElement(n), s.push(r(n, t));

          return s;
        }, o.prototype.assignNewBody = function () {
          return document.body = this.newBody;
        }, o.prototype.focusFirstAutofocusableElement = function () {
          var t;
          return null != (t = this.newSnapshot.findFirstAutofocusableElement()) ? t.focus() : void 0;
        }, o.prototype.getNewHeadStylesheetElements = function () {
          return this.newHeadDetails.getStylesheetElementsNotInDetails(this.currentHeadDetails);
        }, o.prototype.getNewHeadScriptElements = function () {
          return this.newHeadDetails.getScriptElementsNotInDetails(this.currentHeadDetails);
        }, o.prototype.getCurrentHeadProvisionalElements = function () {
          return this.currentHeadDetails.getProvisionalElements();
        }, o.prototype.getNewHeadProvisionalElements = function () {
          return this.newHeadDetails.getProvisionalElements();
        }, o.prototype.getCurrentBodyPermanentElements = function () {
          return this.currentSnapshot.getPermanentElementsPresentInSnapshot(this.newSnapshot);
        }, o.prototype.getNewBodyScriptElements = function () {
          return this.newBody.querySelectorAll("script");
        }, o;
      }(e.Renderer), t = function (t) {
        var e;
        return e = document.createElement("meta"), e.setAttribute("name", "turbolinks-permanent-placeholder"), e.setAttribute("content", t.id), {
          element: e,
          permanentElement: t
        };
      }, r = function (t, e) {
        var r;
        return (r = t.parentNode) ? r.replaceChild(e, t) : void 0;
      };
    }.call(this), function () {
      var t = function (t, e) {
        function n() {
          this.constructor = t;
        }

        for (var o in e) r.call(e, o) && (t[o] = e[o]);

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          r = {}.hasOwnProperty;

      e.ErrorRenderer = function (e) {
        function r(t) {
          var e;
          e = document.createElement("html"), e.innerHTML = t, this.newHead = e.querySelector("head"), this.newBody = e.querySelector("body");
        }

        return t(r, e), r.prototype.render = function (t) {
          return this.renderView(function (e) {
            return function () {
              return e.replaceHeadAndBody(), e.activateBodyScriptElements(), t();
            };
          }(this));
        }, r.prototype.replaceHeadAndBody = function () {
          var t, e;
          return e = document.head, t = document.body, e.parentNode.replaceChild(this.newHead, e), t.parentNode.replaceChild(this.newBody, t);
        }, r.prototype.activateBodyScriptElements = function () {
          var t, e, r, n, o, i;

          for (n = this.getScriptElements(), i = [], e = 0, r = n.length; r > e; e++) o = n[e], t = this.createScriptElement(o), i.push(o.parentNode.replaceChild(t, o));

          return i;
        }, r.prototype.getScriptElements = function () {
          return document.documentElement.querySelectorAll("script");
        }, r;
      }(e.Renderer);
    }.call(this), function () {
      e.View = function () {
        function t(t) {
          this.delegate = t, this.htmlElement = document.documentElement;
        }

        return t.prototype.getRootLocation = function () {
          return this.getSnapshot().getRootLocation();
        }, t.prototype.getElementForAnchor = function (t) {
          return this.getSnapshot().getElementForAnchor(t);
        }, t.prototype.getSnapshot = function () {
          return e.Snapshot.fromHTMLElement(this.htmlElement);
        }, t.prototype.render = function (t, e) {
          var r, n, o;
          return o = t.snapshot, r = t.error, n = t.isPreview, this.markAsPreview(n), null != o ? this.renderSnapshot(o, n, e) : this.renderError(r, e);
        }, t.prototype.markAsPreview = function (t) {
          return t ? this.htmlElement.setAttribute("data-turbolinks-preview", "") : this.htmlElement.removeAttribute("data-turbolinks-preview");
        }, t.prototype.renderSnapshot = function (t, r, n) {
          return e.SnapshotRenderer.render(this.delegate, n, this.getSnapshot(), e.Snapshot.wrap(t), r);
        }, t.prototype.renderError = function (t, r) {
          return e.ErrorRenderer.render(this.delegate, r, t);
        }, t;
      }();
    }.call(this), function () {
      var t = function (t, e) {
        return function () {
          return t.apply(e, arguments);
        };
      };

      e.ScrollManager = function () {
        function r(r) {
          this.delegate = r, this.onScroll = t(this.onScroll, this), this.onScroll = e.throttle(this.onScroll);
        }

        return r.prototype.start = function () {
          return this.started ? void 0 : (addEventListener("scroll", this.onScroll, !1), this.onScroll(), this.started = !0);
        }, r.prototype.stop = function () {
          return this.started ? (removeEventListener("scroll", this.onScroll, !1), this.started = !1) : void 0;
        }, r.prototype.scrollToElement = function (t) {
          return t.scrollIntoView();
        }, r.prototype.scrollToPosition = function (t) {
          var e, r;
          return e = t.x, r = t.y, window.scrollTo(e, r);
        }, r.prototype.onScroll = function (t) {
          return this.updatePosition({
            x: window.pageXOffset,
            y: window.pageYOffset
          });
        }, r.prototype.updatePosition = function (t) {
          var e;
          return this.position = t, null != (e = this.delegate) ? e.scrollPositionChanged(this.position) : void 0;
        }, r;
      }();
    }.call(this), function () {
      e.SnapshotCache = function () {
        function t(t) {
          this.size = t, this.keys = [], this.snapshots = {};
        }

        var r;
        return t.prototype.has = function (t) {
          var e;
          return e = r(t), e in this.snapshots;
        }, t.prototype.get = function (t) {
          var e;
          if (this.has(t)) return e = this.read(t), this.touch(t), e;
        }, t.prototype.put = function (t, e) {
          return this.write(t, e), this.touch(t), e;
        }, t.prototype.read = function (t) {
          var e;
          return e = r(t), this.snapshots[e];
        }, t.prototype.write = function (t, e) {
          var n;
          return n = r(t), this.snapshots[n] = e;
        }, t.prototype.touch = function (t) {
          var e, n;
          return n = r(t), e = this.keys.indexOf(n), e > -1 && this.keys.splice(e, 1), this.keys.unshift(n), this.trim();
        }, t.prototype.trim = function () {
          var t, e, r, n, o;

          for (n = this.keys.splice(this.size), o = [], t = 0, r = n.length; r > t; t++) e = n[t], o.push(delete this.snapshots[e]);

          return o;
        }, r = function (t) {
          return e.Location.wrap(t).toCacheKey();
        }, t;
      }();
    }.call(this), function () {
      var t = function (t, e) {
        return function () {
          return t.apply(e, arguments);
        };
      };

      e.Visit = function () {
        function r(r, n, o) {
          this.controller = r, this.action = o, this.performScroll = t(this.performScroll, this), this.identifier = e.uuid(), this.location = e.Location.wrap(n), this.adapter = this.controller.adapter, this.state = "initialized", this.timingMetrics = {};
        }

        var n;
        return r.prototype.start = function () {
          return "initialized" === this.state ? (this.recordTimingMetric("visitStart"), this.state = "started", this.adapter.visitStarted(this)) : void 0;
        }, r.prototype.cancel = function () {
          var t;
          return "started" === this.state ? (null != (t = this.request) && t.cancel(), this.cancelRender(), this.state = "canceled") : void 0;
        }, r.prototype.complete = function () {
          var t;
          return "started" === this.state ? (this.recordTimingMetric("visitEnd"), this.state = "completed", "function" == typeof (t = this.adapter).visitCompleted && t.visitCompleted(this), this.controller.visitCompleted(this)) : void 0;
        }, r.prototype.fail = function () {
          var t;
          return "started" === this.state ? (this.state = "failed", "function" == typeof (t = this.adapter).visitFailed ? t.visitFailed(this) : void 0) : void 0;
        }, r.prototype.changeHistory = function () {
          var t, e;
          return this.historyChanged ? void 0 : (t = this.location.isEqualTo(this.referrer) ? "replace" : this.action, e = n(t), this.controller[e](this.location, this.restorationIdentifier), this.historyChanged = !0);
        }, r.prototype.issueRequest = function () {
          return this.shouldIssueRequest() && null == this.request ? (this.progress = 0, this.request = new e.HttpRequest(this, this.location, this.referrer), this.request.send()) : void 0;
        }, r.prototype.getCachedSnapshot = function () {
          var t;
          return !(t = this.controller.getCachedSnapshotForLocation(this.location)) || null != this.location.anchor && !t.hasAnchor(this.location.anchor) || "restore" !== this.action && !t.isPreviewable() ? void 0 : t;
        }, r.prototype.hasCachedSnapshot = function () {
          return null != this.getCachedSnapshot();
        }, r.prototype.loadCachedSnapshot = function () {
          var t, e;
          return (e = this.getCachedSnapshot()) ? (t = this.shouldIssueRequest(), this.render(function () {
            var r;
            return this.cacheSnapshot(), this.controller.render({
              snapshot: e,
              isPreview: t
            }, this.performScroll), "function" == typeof (r = this.adapter).visitRendered && r.visitRendered(this), t ? void 0 : this.complete();
          })) : void 0;
        }, r.prototype.loadResponse = function () {
          return null != this.response ? this.render(function () {
            var t, e;
            return this.cacheSnapshot(), this.request.failed ? (this.controller.render({
              error: this.response
            }, this.performScroll), "function" == typeof (t = this.adapter).visitRendered && t.visitRendered(this), this.fail()) : (this.controller.render({
              snapshot: this.response
            }, this.performScroll), "function" == typeof (e = this.adapter).visitRendered && e.visitRendered(this), this.complete());
          }) : void 0;
        }, r.prototype.followRedirect = function () {
          return this.redirectedToLocation && !this.followedRedirect ? (this.location = this.redirectedToLocation, this.controller.replaceHistoryWithLocationAndRestorationIdentifier(this.redirectedToLocation, this.restorationIdentifier), this.followedRedirect = !0) : void 0;
        }, r.prototype.requestStarted = function () {
          var t;
          return this.recordTimingMetric("requestStart"), "function" == typeof (t = this.adapter).visitRequestStarted ? t.visitRequestStarted(this) : void 0;
        }, r.prototype.requestProgressed = function (t) {
          var e;
          return this.progress = t, "function" == typeof (e = this.adapter).visitRequestProgressed ? e.visitRequestProgressed(this) : void 0;
        }, r.prototype.requestCompletedWithResponse = function (t, r) {
          return this.response = t, null != r && (this.redirectedToLocation = e.Location.wrap(r)), this.adapter.visitRequestCompleted(this);
        }, r.prototype.requestFailedWithStatusCode = function (t, e) {
          return this.response = e, this.adapter.visitRequestFailedWithStatusCode(this, t);
        }, r.prototype.requestFinished = function () {
          var t;
          return this.recordTimingMetric("requestEnd"), "function" == typeof (t = this.adapter).visitRequestFinished ? t.visitRequestFinished(this) : void 0;
        }, r.prototype.performScroll = function () {
          return this.scrolled ? void 0 : ("restore" === this.action ? this.scrollToRestoredPosition() || this.scrollToTop() : this.scrollToAnchor() || this.scrollToTop(), this.scrolled = !0);
        }, r.prototype.scrollToRestoredPosition = function () {
          var t, e;
          return t = null != (e = this.restorationData) ? e.scrollPosition : void 0, null != t ? (this.controller.scrollToPosition(t), !0) : void 0;
        }, r.prototype.scrollToAnchor = function () {
          return null != this.location.anchor ? (this.controller.scrollToAnchor(this.location.anchor), !0) : void 0;
        }, r.prototype.scrollToTop = function () {
          return this.controller.scrollToPosition({
            x: 0,
            y: 0
          });
        }, r.prototype.recordTimingMetric = function (t) {
          var e;
          return null != (e = this.timingMetrics)[t] ? e[t] : e[t] = new Date().getTime();
        }, r.prototype.getTimingMetrics = function () {
          return e.copyObject(this.timingMetrics);
        }, n = function (t) {
          switch (t) {
            case "replace":
              return "replaceHistoryWithLocationAndRestorationIdentifier";

            case "advance":
            case "restore":
              return "pushHistoryWithLocationAndRestorationIdentifier";
          }
        }, r.prototype.shouldIssueRequest = function () {
          return "restore" === this.action ? !this.hasCachedSnapshot() : !0;
        }, r.prototype.cacheSnapshot = function () {
          return this.snapshotCached ? void 0 : (this.controller.cacheSnapshot(), this.snapshotCached = !0);
        }, r.prototype.render = function (t) {
          return this.cancelRender(), this.frame = requestAnimationFrame(function (e) {
            return function () {
              return e.frame = null, t.call(e);
            };
          }(this));
        }, r.prototype.cancelRender = function () {
          return this.frame ? cancelAnimationFrame(this.frame) : void 0;
        }, r;
      }();
    }.call(this), function () {
      var t = function (t, e) {
        return function () {
          return t.apply(e, arguments);
        };
      };

      e.Controller = function () {
        function r() {
          this.clickBubbled = t(this.clickBubbled, this), this.clickCaptured = t(this.clickCaptured, this), this.pageLoaded = t(this.pageLoaded, this), this.history = new e.History(this), this.view = new e.View(this), this.scrollManager = new e.ScrollManager(this), this.restorationData = {}, this.clearCache(), this.setProgressBarDelay(500);
        }

        return r.prototype.start = function () {
          return e.supported && !this.started ? (addEventListener("click", this.clickCaptured, !0), addEventListener("DOMContentLoaded", this.pageLoaded, !1), this.scrollManager.start(), this.startHistory(), this.started = !0, this.enabled = !0) : void 0;
        }, r.prototype.disable = function () {
          return this.enabled = !1;
        }, r.prototype.stop = function () {
          return this.started ? (removeEventListener("click", this.clickCaptured, !0), removeEventListener("DOMContentLoaded", this.pageLoaded, !1), this.scrollManager.stop(), this.stopHistory(), this.started = !1) : void 0;
        }, r.prototype.clearCache = function () {
          return this.cache = new e.SnapshotCache(10);
        }, r.prototype.visit = function (t, r) {
          var n, o;
          return null == r && (r = {}), t = e.Location.wrap(t), this.applicationAllowsVisitingLocation(t) ? this.locationIsVisitable(t) ? (n = null != (o = r.action) ? o : "advance", this.adapter.visitProposedToLocationWithAction(t, n)) : window.location = t : void 0;
        }, r.prototype.startVisitToLocationWithAction = function (t, r, n) {
          var o;
          return e.supported ? (o = this.getRestorationDataForIdentifier(n), this.startVisit(t, r, {
            restorationData: o
          })) : window.location = t;
        }, r.prototype.setProgressBarDelay = function (t) {
          return this.progressBarDelay = t;
        }, r.prototype.startHistory = function () {
          return this.location = e.Location.wrap(window.location), this.restorationIdentifier = e.uuid(), this.history.start(), this.history.replace(this.location, this.restorationIdentifier);
        }, r.prototype.stopHistory = function () {
          return this.history.stop();
        }, r.prototype.pushHistoryWithLocationAndRestorationIdentifier = function (t, r) {
          return this.restorationIdentifier = r, this.location = e.Location.wrap(t), this.history.push(this.location, this.restorationIdentifier);
        }, r.prototype.replaceHistoryWithLocationAndRestorationIdentifier = function (t, r) {
          return this.restorationIdentifier = r, this.location = e.Location.wrap(t), this.history.replace(this.location, this.restorationIdentifier);
        }, r.prototype.historyPoppedToLocationWithRestorationIdentifier = function (t, r) {
          var n;
          return this.restorationIdentifier = r, this.enabled ? (n = this.getRestorationDataForIdentifier(this.restorationIdentifier), this.startVisit(t, "restore", {
            restorationIdentifier: this.restorationIdentifier,
            restorationData: n,
            historyChanged: !0
          }), this.location = e.Location.wrap(t)) : this.adapter.pageInvalidated();
        }, r.prototype.getCachedSnapshotForLocation = function (t) {
          var e;
          return null != (e = this.cache.get(t)) ? e.clone() : void 0;
        }, r.prototype.shouldCacheSnapshot = function () {
          return this.view.getSnapshot().isCacheable();
        }, r.prototype.cacheSnapshot = function () {
          var t, r;
          return this.shouldCacheSnapshot() ? (this.notifyApplicationBeforeCachingSnapshot(), r = this.view.getSnapshot(), t = this.lastRenderedLocation, e.defer(function (e) {
            return function () {
              return e.cache.put(t, r.clone());
            };
          }(this))) : void 0;
        }, r.prototype.scrollToAnchor = function (t) {
          var e;
          return (e = this.view.getElementForAnchor(t)) ? this.scrollToElement(e) : this.scrollToPosition({
            x: 0,
            y: 0
          });
        }, r.prototype.scrollToElement = function (t) {
          return this.scrollManager.scrollToElement(t);
        }, r.prototype.scrollToPosition = function (t) {
          return this.scrollManager.scrollToPosition(t);
        }, r.prototype.scrollPositionChanged = function (t) {
          var e;
          return e = this.getCurrentRestorationData(), e.scrollPosition = t;
        }, r.prototype.render = function (t, e) {
          return this.view.render(t, e);
        }, r.prototype.viewInvalidated = function () {
          return this.adapter.pageInvalidated();
        }, r.prototype.viewWillRender = function (t) {
          return this.notifyApplicationBeforeRender(t);
        }, r.prototype.viewRendered = function () {
          return this.lastRenderedLocation = this.currentVisit.location, this.notifyApplicationAfterRender();
        }, r.prototype.pageLoaded = function () {
          return this.lastRenderedLocation = this.location, this.notifyApplicationAfterPageLoad();
        }, r.prototype.clickCaptured = function () {
          return removeEventListener("click", this.clickBubbled, !1), addEventListener("click", this.clickBubbled, !1);
        }, r.prototype.clickBubbled = function (t) {
          var e, r, n;
          return this.enabled && this.clickEventIsSignificant(t) && (r = this.getVisitableLinkForNode(t.target)) && (n = this.getVisitableLocationForLink(r)) && this.applicationAllowsFollowingLinkToLocation(r, n) ? (t.preventDefault(), e = this.getActionForLink(r), this.visit(n, {
            action: e
          })) : void 0;
        }, r.prototype.applicationAllowsFollowingLinkToLocation = function (t, e) {
          var r;
          return r = this.notifyApplicationAfterClickingLinkToLocation(t, e), !r.defaultPrevented;
        }, r.prototype.applicationAllowsVisitingLocation = function (t) {
          var e;
          return e = this.notifyApplicationBeforeVisitingLocation(t), !e.defaultPrevented;
        }, r.prototype.notifyApplicationAfterClickingLinkToLocation = function (t, r) {
          return e.dispatch("turbolinks:click", {
            target: t,
            data: {
              url: r.absoluteURL
            },
            cancelable: !0
          });
        }, r.prototype.notifyApplicationBeforeVisitingLocation = function (t) {
          return e.dispatch("turbolinks:before-visit", {
            data: {
              url: t.absoluteURL
            },
            cancelable: !0
          });
        }, r.prototype.notifyApplicationAfterVisitingLocation = function (t) {
          return e.dispatch("turbolinks:visit", {
            data: {
              url: t.absoluteURL
            }
          });
        }, r.prototype.notifyApplicationBeforeCachingSnapshot = function () {
          return e.dispatch("turbolinks:before-cache");
        }, r.prototype.notifyApplicationBeforeRender = function (t) {
          return e.dispatch("turbolinks:before-render", {
            data: {
              newBody: t
            }
          });
        }, r.prototype.notifyApplicationAfterRender = function () {
          return e.dispatch("turbolinks:render");
        }, r.prototype.notifyApplicationAfterPageLoad = function (t) {
          return null == t && (t = {}), e.dispatch("turbolinks:load", {
            data: {
              url: this.location.absoluteURL,
              timing: t
            }
          });
        }, r.prototype.startVisit = function (t, e, r) {
          var n;
          return null != (n = this.currentVisit) && n.cancel(), this.currentVisit = this.createVisit(t, e, r), this.currentVisit.start(), this.notifyApplicationAfterVisitingLocation(t);
        }, r.prototype.createVisit = function (t, r, n) {
          var o, i, s, a, u;
          return i = null != n ? n : {}, a = i.restorationIdentifier, s = i.restorationData, o = i.historyChanged, u = new e.Visit(this, t, r), u.restorationIdentifier = null != a ? a : e.uuid(), u.restorationData = e.copyObject(s), u.historyChanged = o, u.referrer = this.location, u;
        }, r.prototype.visitCompleted = function (t) {
          return this.notifyApplicationAfterPageLoad(t.getTimingMetrics());
        }, r.prototype.clickEventIsSignificant = function (t) {
          return !(t.defaultPrevented || t.target.isContentEditable || t.which > 1 || t.altKey || t.ctrlKey || t.metaKey || t.shiftKey);
        }, r.prototype.getVisitableLinkForNode = function (t) {
          return this.nodeIsVisitable(t) ? e.closest(t, "a[href]:not([target]):not([download])") : void 0;
        }, r.prototype.getVisitableLocationForLink = function (t) {
          var r;
          return r = new e.Location(t.getAttribute("href")), this.locationIsVisitable(r) ? r : void 0;
        }, r.prototype.getActionForLink = function (t) {
          var e;
          return null != (e = t.getAttribute("data-turbolinks-action")) ? e : "advance";
        }, r.prototype.nodeIsVisitable = function (t) {
          var r;
          return (r = e.closest(t, "[data-turbolinks]")) ? "false" !== r.getAttribute("data-turbolinks") : !0;
        }, r.prototype.locationIsVisitable = function (t) {
          return t.isPrefixedBy(this.view.getRootLocation()) && t.isHTML();
        }, r.prototype.getCurrentRestorationData = function () {
          return this.getRestorationDataForIdentifier(this.restorationIdentifier);
        }, r.prototype.getRestorationDataForIdentifier = function (t) {
          var e;
          return null != (e = this.restorationData)[t] ? e[t] : e[t] = {};
        }, r;
      }();
    }.call(this), function () {
      !function () {
        var t, e;
        if ((t = e = document.currentScript) && !e.hasAttribute("data-turbolinks-suppress-warning")) for (; t = t.parentNode;) if (t === document.body) return console.warn("You are loading Turbolinks from a <script> element inside the <body> element. This is probably not what you meant to do!\n\nLoad your application\u2019s JavaScript bundle inside the <head> element instead. <script> elements in <body> are evaluated with each page change.\n\nFor more information, see: https://github.com/turbolinks/turbolinks#working-with-script-elements\n\n\u2014\u2014\nSuppress this warning by adding a `data-turbolinks-suppress-warning` attribute to: %s", e.outerHTML);
      }();
    }.call(this), function () {
      var t, r, n;
      e.start = function () {
        return r() ? (null == e.controller && (e.controller = t()), e.controller.start()) : void 0;
      }, r = function () {
        return null == window.Turbolinks && (window.Turbolinks = e), n();
      }, t = function () {
        var t;
        return t = new e.Controller(), t.adapter = new e.BrowserAdapter(t), t;
      }, n = function () {
        return window.Turbolinks === e;
      }, n() && e.start();
    }.call(this);
  }).call(this),  true && module.exports ? module.exports = e :  true && !(__WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}).call(this);

/***/ })

/******/ });
//# sourceMappingURL=application-7e38897100a6aa1475d9.js.map