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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./content/tbb-menu/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./content/_shared/utils.js":
/*!**********************************!*\
  !*** ./content/_shared/utils.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._HASHLESS = exports._ERRORTRACKER = exports._L10N = exports._PORT = exports._STORE = exports._DOMMODULE = exports._MODULE = exports._EXTEND = exports._GET_ACTIVE_TAB = exports._COPY = undefined;

var _copy = __webpack_require__(/*! ./../../utils/copy */ "./utils/copy.js");

var _getActiveTab = __webpack_require__(/*! ./../../utils/getActiveTab */ "./utils/getActiveTab.js");

var _extend = __webpack_require__(/*! ./../../utils/extend */ "./utils/extend.js");

var _extend2 = _interopRequireDefault(_extend);

var _module = __webpack_require__(/*! ./../../utils/module */ "./utils/module.js");

var _dommodule = __webpack_require__(/*! ./../../utils/dommodule */ "./utils/dommodule.js");

var _store = __webpack_require__(/*! ./../../utils/store */ "./utils/store.js");

var _port = __webpack_require__(/*! ./../../utils/port */ "./utils/port.js");

var _hashless = __webpack_require__(/*! ./../../utils/hashless */ "./utils/hashless.js");

var _l10n = __webpack_require__(/*! ./../../utils/l10n */ "./utils/l10n.js");

var _l10n2 = _interopRequireDefault(_l10n);

var _errorTracker = __webpack_require__(/*! ./../../utils/error-tracker */ "./utils/error-tracker.js");

var _errorTracker2 = _interopRequireDefault(_errorTracker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

exports._COPY = _copy._COPY;
exports._GET_ACTIVE_TAB = _getActiveTab._GET_ACTIVE_TAB;
exports._EXTEND = _extend2["default"];
exports._MODULE = _module._MODULE;
exports._DOMMODULE = _dommodule._DOMMODULE;
exports._STORE = _store._STORE;
exports._PORT = _port._PORT;
exports._L10N = _l10n2["default"];
exports._ERRORTRACKER = _errorTracker2["default"];
exports._HASHLESS = _hashless._HASHLESS;

/***/ }),

/***/ "./content/tbb-menu/index.js":
/*!***********************************!*\
  !*** ./content/tbb-menu/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./sass/index.scss */ "./content/tbb-menu/sass/index.scss");

var _utils = __webpack_require__(/*! ./../_shared/utils */ "./content/_shared/utils.js");

var _utils2 = _interopRequireDefault(_utils);

var _port = __webpack_require__(/*! ./port */ "./content/tbb-menu/port.js");

var _port2 = _interopRequireDefault(_port);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _utils._L10N)();
new _utils._DOMMODULE({
  el: document.getElementById('menu'),
  events: {
    DOM: {
      click: {
        '#activate': 'toggle',
        '.send': 'open',
        'span': 'open'
      }
    }
  },
  port: null,
  disabled: false,
  autoinit: function autoinit() {
    var _this = this;

    browser.storage.sync.get().then(function (storage) {
      if (storage.settings) {
        if (!storage || !storage.sync || storage.sync.settings) return storage.settings.addon.active;
        return browser.storage.local.get().then(function (storage) {
          return storage.settings.addon.active;
        });
      }

      return true;
    }).then(function (active) {
      return _this.setActivateText(active);
    });
  },
  toggle: function toggle() {
    this.emit('toggle:addon');
    window.close();
  },
  open: function open(e, el) {
    var page = el.nodeName === 'SPAN' ? el.parentNode.id : el.id;
    this.emit('open:addon-page(tbb)', page);
    window.close();
  },
  setActivateText: function setActivateText(active) {
    var btn = document.getElementById('activate');
    btn.title = browser.i18n.getMessage('tbb_mitem_1_' + active);

    if (active) {
      btn.classList.remove('menu__icon--start');
      btn.classList.add('menu__icon--pause');
    } else {
      btn.classList.add('menu__icon--start');
      btn.classList.remove('menu__icon--pause');
    }
  }
});

/***/ }),

/***/ "./content/tbb-menu/port.js":
/*!**********************************!*\
  !*** ./content/tbb-menu/port.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(/*! ./../_shared/utils */ "./content/_shared/utils.js");

exports["default"] = new _utils._PORT({
  name: 'tbb-menu',
  type: 'privileged',
  events: {
    CONNECTION: ['toggle:addon', 'open:addon-page(tbb)', 'error:browser-console']
  }
});

/***/ }),

/***/ "./content/tbb-menu/sass/index.scss":
/*!******************************************!*\
  !*** ./content/tbb-menu/sass/index.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./data/default-storage.js":
/*!*********************************!*\
  !*** ./data/default-storage.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = {
  version: browser.runtime.getManifest().version,
  settings: {
    shortcuts: {
      z: ['ctrlKey-altKey', true],
      y: ['ctrlKey-altKey', true],
      s: ['ctrlKey-altKey', true],
      c: ['ctrlKey-altKey', false, true],
      b: ['ctrlKey-altKey', true, true],
      d: ['shiftKey', false, true],
      '-b': ['', '', true],
      m: ['', true, true],
      w: ['', true, true],
      n: ['', '', true],
      '2': ['', true],
      '3': ['', true],
      arrowup: ['altKey', false, false],
      arrowdown: ['altKey', false, false],
      sb: ['', '', true],
      cm: ['', true]
    },
    markers: {
      '1': {
        style: 'background-color:#dd99ff;'
      },
      '2': {
        style: 'background-color:#66bbff;'
      },
      '3': {
        style: 'background-color:#55ff55;'
      },
      '4': {
        style: 'background-color:#ff6666;color:#ffffff;'
      },
      '5': {
        style: 'background-color:#ffcc00;'
      },
      m: {
        style: 'background-color:#ffee00;'
      }
    },
    history: {
      autosave: true,
      saveInPriv: false,
      dropLosses: true,
      immut: false,
      naming: 'title',
      download: 'json',
      copy: 'text',
      saveNote: true,
      sorted: 'date-last',
      view: 'list',
      pp: 10,
      ignoreHash: true
    },
    addon: {
      active: true,
      autocs: true
    },
    misc: {
      bmicon: true,
      noteicon: true,
      noteonclick: true,
      notetransp: false,
      noteplainview: false,
      overwrite: false,
      failureNote: true,
      successNote: true,
      pbmNote: true,
      changedNote: false,
      errorNote: true,
      vipNote: true,
      customSearch: false,
      tmuipos: 'top-right',
      markmethod: 'popup',
      progressbar: true,
      tbbpower: false
    },
    sb: {
      tabs: {
        meta: {
          unfolded: false
        },
        tags: {
          unfolded: false
        },
        notes: {
          unfolded: false
        },
        markers: {
          unfolded: true
        },
        actions: {
          unfolded: true
        },
        marks: {
          unfolded: false
        },
        links: {
          unfolded: false
        },
        themes: {
          unfolded: false
        }
      },
      theme: 'default'
    }
  },
  history: {
    entries: {}
  },
  pagenotes: {},
  sync: {
    settings: false,
    history: false,
    pagenotes: false
  }
};

/***/ }),

/***/ "./utils/copy.js":
/*!***********************!*\
  !*** ./utils/copy.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _COPY = function _COPY(src) {
  var target = Array.isArray(src) ? [] : {};
  var val;

  for (var prop in src) {
    if (src.hasOwnProperty(prop)) {
      val = src[prop];

      if (val !== null && _typeof(val) === 'object') {
        target[prop] = _COPY(val);
      } else target[prop] = val;
    }
  }

  return target;
};

exports._COPY = _COPY;

/***/ }),

/***/ "./utils/dommodule.js":
/*!****************************!*\
  !*** ./utils/dommodule.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._DOMMODULE = undefined;

var _module = __webpack_require__(/*! ./module */ "./utils/module.js");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var _DOMMODULE =
/*#__PURE__*/
exports._DOMMODULE = function (_MODULE2) {
  _inherits(_DOMMODULE, _MODULE2);

  function _DOMMODULE(obj) {
    var _this;

    _classCallCheck(this, _DOMMODULE);

    obj._bound = {};
    obj._extraBound = [];
    _this = _possibleConstructorReturn(this, _getPrototypeOf(_DOMMODULE).call(this, obj));
    _this.addListenersManually || _this.addListeners();
    !_this.autoPause || _this.setAutoPause();
    return _this;
  }

  _createClass(_DOMMODULE, [{
    key: "generalHandler",
    value: function generalHandler(subMap, type, e) {
      var el = e.target,
          selector,
          _sel,
          meth,
          f,
          isId,
          isClass,
          isDoc;

      for (selector in subMap) {
        f = selector[0];
        _sel = selector;
        isId = f === '#';
        isClass = f === '.';
        isDoc = f === '*';
        if (isId || isClass) selector = selector.substr(1);

        if (isDoc || isClass && el.classList.contains(selector) || isId && el.id === selector || el.nodeName.toLowerCase() === selector) {
          meth = subMap[_sel];
          if (typeof meth === 'function') meth(e, el);else if (this[meth]) this[meth](e, el);
          break;
        }
      }
    }
  }, {
    key: "setAutoPause",
    value: function setAutoPause() {
      var _this2 = this;

      this.on('toggled:addon', function (on) {
        if (on) _this2.addListeners();else _this2.removeListeners();
      });
    }
  }, {
    key: "addListener",
    value: function addListener(type, meth, el) {
      el = el || this.el;
      var handler = typeof meth === 'function' ? meth : this[meth];
      el.addEventListener(type, handler, false);

      if (el === this.el) {
        if (!this._bound[type]) this._bound[type] = [];

        this._bound[type].push(handler);
      } else {
        this._extraBound.push([el, type, handler]);
      }
    }
  }, {
    key: "addListeners",
    value: function addListeners() {
      var events = this.events,
          domEvents,
          el,
          subMap,
          type,
          handler;
      if (!events || !(domEvents = events.DOM) || !(el = this.el)) return false;

      for (type in domEvents) {
        subMap = domEvents[type];
        handler = this.proxy(this, this.generalHandler, subMap, type);
        el.addEventListener(type, handler, false);
        if (!this._bound[type]) this._bound[type] = [];

        this._bound[type].push(handler);
      }
    }
  }, {
    key: "removeListeners",
    value: function removeListeners() {
      var type, _bound, l;

      for (type in this._bound) {
        _bound = this._bound[type];
        l = _bound.length;

        while (l--) {
          this.el.removeEventListener(type, _bound[l], false);

          _bound.splice(l, 1);
        }
      }

      var _extra = this._extraBound,
          i = 0,
          set;
      l = _extra.length;

      for (; i < l; i++) {
        set = _extra[i];
        set[0].removeEventListener(set[1], set[2], false);
      }
    }
  }]);

  return _DOMMODULE;
}(_module._MODULE);

/***/ }),

/***/ "./utils/error-tracker.js":
/*!********************************!*\
  !*** ./utils/error-tracker.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _module = __webpack_require__(/*! ./module */ "./utils/module.js");

var _ERRORTRACKER = new _module._MODULE({
  autoinit: function autoinit() {
    var _this = this;

    window.addEventListener('error', function (error) {
      var file = error.filename.split('/').pop();

      if (['sidebar.wp.js', 'tbb-menu.wp.js', 'options.wp.js', 'addon-page.wp.js'].includes(file)) {
        _this.emit('error:browser-console', {
          message: error.message,
          location: error.filename.split('/').pop().split('.').shift() + ':' + error.lineno + ':' + error.colno,
          time: new Date().getTime()
        });
      }
    }, false);
  }
});

exports["default"] = _ERRORTRACKER;

/***/ }),

/***/ "./utils/extend.js":
/*!*************************!*\
  !*** ./utils/extend.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function (obj1, obj2) {
  for (var i in obj2) {
    if (!obj1[i]) obj1[i] = obj2[i];
  }

  return obj1;
};

/***/ }),

/***/ "./utils/getActiveTab.js":
/*!*******************************!*\
  !*** ./utils/getActiveTab.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GET_ACTIVE_TAB = function _GET_ACTIVE_TAB() {
  return browser.tabs.query({
    currentWindow: true,
    active: true
  }).then(function (tabs) {
    return tabs[0];
  });
};

exports._GET_ACTIVE_TAB = _GET_ACTIVE_TAB;

/***/ }),

/***/ "./utils/hashless.js":
/*!***************************!*\
  !*** ./utils/hashless.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _HASHLESS = function _HASHLESS(url) {
  var h = url.lastIndexOf('#');
  if (h === -1) return url;else return url.substr(0, h);
};

exports._HASHLESS = _HASHLESS;

/***/ }),

/***/ "./utils/l10n.js":
/*!***********************!*\
  !*** ./utils/l10n.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function () {
  document.addEventListener('DOMContentLoaded', function () {
    return translateDocument();
  }, {
    capture: false,
    passive: true,
    once: true
  });
};

/*
* Translates a HTMl page in the web l10n style from the Add-on SDK with WebExtensions strings.
* Modified by underflyingbirches
*
* @author Martin Giger
* @see {@link https://gist.github.com/freaktechnik/4a72bc0711d9bc82cf3b075bcc292953}
* @license MPL-2.0
*/
function translateDocument() {
  var el, data, dataset; // Set the language attribute of the document.

  document.documentElement.setAttribute('lang', browser.i18n.getUILanguage().replace('_', '-')); // Get all elements that are marked as being translateable.

  var textElements = document.querySelectorAll('*[data-l10n-id]');
  var attrElements = document.querySelectorAll('*[data-l10n-attr]');
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = textElements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      el = _step.value;
      dataset = el.dataset;
      var l10nId = dataset.l10nId;

      if (l10nId) {
        data = browser.i18n.getMessage(l10nId);

        if (data && data != '??') {
          el.textContent = data;
        }
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = attrElements[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      el = _step2.value;
      dataset = el.dataset;
      ['Title', 'Placeholder'].forEach(function (attr) {
        var l10nAttr = dataset['l10n' + attr];

        if (l10nAttr) {
          data = browser.i18n.getMessage(l10nAttr);

          if (data && data != '??') {
            el.setAttribute(attr.toLowerCase(), data);
          }
        }
      });
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }
}

/***/ }),

/***/ "./utils/mediator.js":
/*!***************************!*\
  !*** ./utils/mediator.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var topics = {};

var _default =
/*#__PURE__*/
function () {
  function _default() {
    _classCallCheck(this, _default);
  }

  _createClass(_default, [{
    key: "on",
    value: function on(event, handler) {
      if (!topics[event]) topics[event] = [];
      topics[event].push(handler);
    }
  }, {
    key: "emit",
    value: function emit(events) {
      var _this = this;

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      events = events.split(' ');
      var i = 0,
          l = events.length,
          topic;

      for (; i < l; i++) {
        topic = topics[events[i]];
        if (topic) topic.forEach(function (handler) {
          return handler.apply(_this, args);
        });
      }
    }
  }, {
    key: "request",
    value: function request(event) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      return browser.runtime.sendMessage({
        ev: event,
        args: args,
        wait: true
      })["catch"](function () {});
    }
  }, {
    key: "proxy",
    value: function proxy(context, func) {
      for (var _len3 = arguments.length, args1 = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
        args1[_key3 - 2] = arguments[_key3];
      }

      return function () {
        for (var _len4 = arguments.length, args2 = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          args2[_key4] = arguments[_key4];
        }

        return func.apply(context, args1.concat(args2));
      };
    }
  }]);

  return _default;
}();

exports["default"] = _default;

/***/ }),

/***/ "./utils/module.js":
/*!*************************!*\
  !*** ./utils/module.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._MODULE = undefined;

var _mediator = __webpack_require__(/*! ./mediator */ "./utils/mediator.js");

var _mediator2 = _interopRequireDefault(_mediator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var _MODULE =
/*#__PURE__*/
exports._MODULE = function (_MEDIATOR2) {
  _inherits(_MODULE, _MEDIATOR2);

  function _MODULE(obj) {
    var _this;

    _classCallCheck(this, _MODULE);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(_MODULE).call(this));

    for (o in obj) {
      _this[o] = obj[o];
    }

    var events = _this.events,
        envEvents,
        o,
        e,
        handler;

    if (events && (envEvents = events.ENV)) {
      for (e in envEvents) {
        handler = envEvents[e];
        if (_this[handler]) _this.on(e, _this.proxy(_assertThisInitialized(_this), _this[handler]));
      }
    }

    !_this.autoinit || _this.autoinit();
    return _this;
  }

  return _MODULE;
}(_mediator2["default"]);

/***/ }),

/***/ "./utils/port.js":
/*!***********************!*\
  !*** ./utils/port.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._PORT = undefined;

var _module = __webpack_require__(/*! ./module */ "./utils/module.js");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var _PORT =
/*#__PURE__*/
exports._PORT = function (_MODULE2) {
  _inherits(_PORT, _MODULE2);

  function _PORT(obj) {
    var _this;

    _classCallCheck(this, _PORT);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(_PORT).call(this, obj));
    _this.port = null;
    var type = _this.type;
    browser.runtime.onMessage.addListener(_this.proxy(_assertThisInitialized(_this), _this.passMessage));
    if (type === 'privileged' || type === 'background') _this.initPorting();

    _this.registerPortEvents();

    return _this;
  }

  _createClass(_PORT, [{
    key: "extend",
    value: function extend(events) {
      this.registerPortEvents(events);
    }
  }, {
    key: "registerPortEvents",
    value: function registerPortEvents(events) {
      events = events || this.events;
      var oneOffEvents, connectionBasedEvents;

      if (events) {
        oneOffEvents = events.ONEOFF;

        if (oneOffEvents) {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = oneOffEvents[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var e = _step.value;
              this.on(e, this.proxy(this, this.sendMessage, e));
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                _iterator["return"]();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        }

        connectionBasedEvents = events.CONNECTION;

        if (connectionBasedEvents) {
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = connectionBasedEvents[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var f = _step2.value;
              this.on(f, this.proxy(this, this.postMessage, f));
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
                _iterator2["return"]();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }
        }
      }
    }
  }, {
    key: "passMessage",
    value: function passMessage(req, sender, sendResponse) {
      req.args = req.args || [];
      var args = [].concat(req.ev, req.args);
      if (!sender || !sender.name) args = args.concat(sender, sendResponse);
      this.emit.apply(this, args);
      if (req.wait) return true; // this will keep the message channel open to the other end until `sendResponse` is called

      return false;
    }
  }, {
    key: "sendMessage",
    value: function sendMessage(e) {
      var type = this.type;

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var msg = {
        ev: e,
        args: args
      };
      if (type === 'content') browser.runtime.sendMessage(msg)["catch"](function () {});else if (type === 'background') {
        var lastArg = args[args.length - 1];
        var tab;

        if (lastArg !== undefined && (tab = lastArg.tab)) {
          if (tab === 'active') {
            browser.tabs.query({
              active: true
            }).then(function (tabs) {
              var _iteratorNormalCompletion3 = true;
              var _didIteratorError3 = false;
              var _iteratorError3 = undefined;

              try {
                for (var _iterator3 = tabs[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                  var _tab = _step3.value;
                  browser.tabs.sendMessage(_tab.id, msg)["catch"](function () {});
                }
              } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
                    _iterator3["return"]();
                  }
                } finally {
                  if (_didIteratorError3) {
                    throw _iteratorError3;
                  }
                }
              }
            });
          } else {
            browser.tabs.sendMessage(lastArg.tab, msg)["catch"](function () {});
          }
        } else {
          browser.tabs.query({
            /* currentWindow: false, active: false */
          }).then(function (tabs) {
            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
              for (var _iterator4 = tabs[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                var _tab2 = _step4.value;
                browser.tabs.sendMessage(_tab2.id, msg)["catch"](function () {});
              }
            } catch (err) {
              _didIteratorError4 = true;
              _iteratorError4 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
                  _iterator4["return"]();
                }
              } finally {
                if (_didIteratorError4) {
                  throw _iteratorError4;
                }
              }
            }
          });
        }
      }
    }
  }, {
    key: "postMessage",
    value: function postMessage(e) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      var msg = {
        ev: e,
        args: args
      };
      if (this.port) this.port.postMessage(msg);
    }
  }, {
    key: "initPorting",
    value: function initPorting() {
      if (!this.postponeConnection) {
        this.connect();
        this.addConnectionListeners();
      } else {
        this.addConnectionListeners(this.proxy(this, this.connect));
      }
    }
  }, {
    key: "connect",
    value: function connect() {
      var _this2 = this;

      var port = this.port = this.port || browser.runtime.connect({
        name: this.name
      });
      port.onDisconnect.addListener(function () {
        return _this2.port = null;
      });
    }
  }, {
    key: "addConnectionListeners",
    value: function addConnectionListeners(cb) {
      var _this3 = this;

      browser.runtime.onConnect.addListener(function (port) {
        port.onMessage.addListener(_this3.proxy(_this3, _this3.passMessage));
        !cb || cb();
      });
    }
  }]);

  return _PORT;
}(_module._MODULE);

/***/ }),

/***/ "./utils/store.js":
/*!************************!*\
  !*** ./utils/store.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._STORE = undefined;

var _module = __webpack_require__(/*! ./module */ "./utils/module.js");

var _defaultStorage = __webpack_require__(/*! ../data/default-storage */ "./data/default-storage.js");

var _defaultStorage2 = _interopRequireDefault(_defaultStorage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var _STORE =
/*#__PURE__*/
exports._STORE = function (_MODULE2) {
  _inherits(_STORE, _MODULE2);

  function _STORE(obj) {
    var _this;

    _classCallCheck(this, _STORE);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(_STORE).call(this, obj));
    _this.initialized = false;
    _this.initializing = false;
    _this.area_settings = _defaultStorage2["default"].sync.settings ? 'sync' : 'local';
    _this.area_history = _defaultStorage2["default"].sync.history ? 'sync' : 'local';
    _this.area_pagenotes = _defaultStorage2["default"].sync.pagenotes ? 'sync' : 'local';
    return _this;
  }

  _createClass(_STORE, [{
    key: "init",
    value: function init() {
      var _this2 = this;

      return browser.storage.local.get().then(function (storage) {
        if (storage && storage.sync) {
          _this2.setAreas(storage.sync);
        }
      });
    }
  }, {
    key: "setAreas",
    value: function setAreas(sync) {
      for (var area in sync) {
        this['area_' + area] = sync[area] ? 'sync' : 'local';
      }
    }
  }, {
    key: "get",
    value: function get() {
      var _this3 = this;

      var field = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'storage';

      if (this.initializing) {
        return new Promise(function (r) {
          return window.setTimeout(function () {
            return r(_this3.get(field));
          }, 10);
        });
      }

      var meth = this['_get_' + field];
      if (!meth) throw 'field ' + field + ' doesn\'t exist';

      if (!this.initialized) {
        this.initializing = true;
        this.initialized = true;
        return this.init().then(function () {
          _this3.initializing = false;
          return _this3['_get_' + field]();
        });
      }

      return this['_get_' + field]();
    }
  }, {
    key: "_get_storage",
    value: function _get_storage() {
      var _this4 = this;

      return browser.storage.local.get().then(function (localStorage) {
        return browser.storage.sync.get().then(function (syncedStorage) {
          ['version', 'logs'].forEach(function (field) {
            localStorage[field] = localStorage[field] || syncedStorage[field];
          });
          if (_this4.area_settings === 'sync') localStorage.settings = syncedStorage.settings;
          return _this4._get_history().then(function (history) {
            localStorage.history = history;
            return localStorage;
          });
        });
      });
    }
  }, {
    key: "_get_local_storage",
    value: function _get_local_storage() {
      return browser.storage.local.get();
    }
  }, {
    key: "_get_synced_storage",
    value: function _get_synced_storage() {
      return browser.storage.sync.get();
    }
  }, {
    key: "_get_history",
    value: function _get_history() {
      return browser.storage.sync.get().then(function (syncedStorage) {
        var syncedHistory = syncedStorage.history;
        return browser.storage.local.get().then(function (localStorage) {
          var localHistory = localStorage.history;
          if (!syncedHistory) return localHistory;
          if (!localHistory) return syncedHistory; //syncedHistory.order = syncedHistory.order.concat(localHistory.order);

          for (var e in localHistory.entries) {
            syncedHistory.entries[e] = localHistory.entries[e];
          }

          return syncedHistory;
        });
      });
    }
  }, {
    key: "_get_settings",
    value: function _get_settings() {
      return browser.storage[this.area_settings].get().then(function (storage) {
        return storage.settings || _defaultStorage2["default"].settings;
      });
    }
  }, {
    key: "_get_logs",
    value: function _get_logs() {
      return browser.storage.local.get().then(function (localStorage) {
        if (!localStorage || !localStorage.logs) return [];
        return localStorage.logs;
      });
    }
  }, {
    key: "_get_version",
    value: function _get_version() {
      return browser.storage.local.get().then(function (localStorage) {
        if (!localStorage || !localStorage.version) {
          return browser.storage.sync.get().then(function (syncedStorage) {
            return syncedStorage.version || '';
          });
        }

        return localStorage.version;
      });
    }
  }]);

  return _STORE;
}(_module._MODULE);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9fc2hhcmVkL3V0aWxzLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvdGJiLW1lbnUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC90YmItbWVudS9wb3J0LmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvdGJiLW1lbnUvc2Fzcy9pbmRleC5zY3NzIiwid2VicGFjazovLy8uL2RhdGEvZGVmYXVsdC1zdG9yYWdlLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2NvcHkuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZG9tbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2Vycm9yLXRyYWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZXh0ZW5kLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2dldEFjdGl2ZVRhYi5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9oYXNobGVzcy5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9sMTBuLmpzIiwid2VicGFjazovLy8uL3V0aWxzL21lZGlhdG9yLmpzIiwid2VicGFjazovLy8uL3V0aWxzL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9wb3J0LmpzIiwid2VicGFjazovLy8uL3V0aWxzL3N0b3JlLmpzIl0sIm5hbWVzIjpbIl9DT1BZIiwiX0dFVF9BQ1RJVkVfVEFCIiwiX0VYVEVORCIsIl9NT0RVTEUiLCJfRE9NTU9EVUxFIiwiX1NUT1JFIiwiX1BPUlQiLCJfTDEwTiIsIl9FUlJPUlRSQUNLRVIiLCJfSEFTSExFU1MiLCJlbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJldmVudHMiLCJET00iLCJjbGljayIsInBvcnQiLCJkaXNhYmxlZCIsImF1dG9pbml0IiwiYnJvd3NlciIsInN0b3JhZ2UiLCJzeW5jIiwiZ2V0IiwidGhlbiIsInNldHRpbmdzIiwiYWRkb24iLCJhY3RpdmUiLCJsb2NhbCIsInNldEFjdGl2YXRlVGV4dCIsInRvZ2dsZSIsImVtaXQiLCJ3aW5kb3ciLCJjbG9zZSIsIm9wZW4iLCJlIiwicGFnZSIsIm5vZGVOYW1lIiwicGFyZW50Tm9kZSIsImlkIiwiYnRuIiwidGl0bGUiLCJpMThuIiwiZ2V0TWVzc2FnZSIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsIm5hbWUiLCJ0eXBlIiwiQ09OTkVDVElPTiIsInZlcnNpb24iLCJydW50aW1lIiwiZ2V0TWFuaWZlc3QiLCJzaG9ydGN1dHMiLCJ6IiwieSIsInMiLCJjIiwiYiIsImQiLCJtIiwidyIsIm4iLCJhcnJvd3VwIiwiYXJyb3dkb3duIiwic2IiLCJjbSIsIm1hcmtlcnMiLCJzdHlsZSIsImhpc3RvcnkiLCJhdXRvc2F2ZSIsInNhdmVJblByaXYiLCJkcm9wTG9zc2VzIiwiaW1tdXQiLCJuYW1pbmciLCJkb3dubG9hZCIsImNvcHkiLCJzYXZlTm90ZSIsInNvcnRlZCIsInZpZXciLCJwcCIsImlnbm9yZUhhc2giLCJhdXRvY3MiLCJtaXNjIiwiYm1pY29uIiwibm90ZWljb24iLCJub3Rlb25jbGljayIsIm5vdGV0cmFuc3AiLCJub3RlcGxhaW52aWV3Iiwib3ZlcndyaXRlIiwiZmFpbHVyZU5vdGUiLCJzdWNjZXNzTm90ZSIsInBibU5vdGUiLCJjaGFuZ2VkTm90ZSIsImVycm9yTm90ZSIsInZpcE5vdGUiLCJjdXN0b21TZWFyY2giLCJ0bXVpcG9zIiwibWFya21ldGhvZCIsInByb2dyZXNzYmFyIiwidGJicG93ZXIiLCJ0YWJzIiwibWV0YSIsInVuZm9sZGVkIiwidGFncyIsIm5vdGVzIiwiYWN0aW9ucyIsIm1hcmtzIiwibGlua3MiLCJ0aGVtZXMiLCJ0aGVtZSIsImVudHJpZXMiLCJwYWdlbm90ZXMiLCJzcmMiLCJ0YXJnZXQiLCJBcnJheSIsImlzQXJyYXkiLCJ2YWwiLCJwcm9wIiwiaGFzT3duUHJvcGVydHkiLCJvYmoiLCJfYm91bmQiLCJfZXh0cmFCb3VuZCIsImFkZExpc3RlbmVyc01hbnVhbGx5IiwiYWRkTGlzdGVuZXJzIiwiYXV0b1BhdXNlIiwic2V0QXV0b1BhdXNlIiwic3ViTWFwIiwic2VsZWN0b3IiLCJfc2VsIiwibWV0aCIsImYiLCJpc0lkIiwiaXNDbGFzcyIsImlzRG9jIiwic3Vic3RyIiwiY29udGFpbnMiLCJ0b0xvd2VyQ2FzZSIsIm9uIiwicmVtb3ZlTGlzdGVuZXJzIiwiaGFuZGxlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJwdXNoIiwiZG9tRXZlbnRzIiwicHJveHkiLCJnZW5lcmFsSGFuZGxlciIsImwiLCJsZW5ndGgiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic3BsaWNlIiwiX2V4dHJhIiwiaSIsInNldCIsImVycm9yIiwiZmlsZSIsImZpbGVuYW1lIiwic3BsaXQiLCJwb3AiLCJpbmNsdWRlcyIsIm1lc3NhZ2UiLCJsb2NhdGlvbiIsInNoaWZ0IiwibGluZW5vIiwiY29sbm8iLCJ0aW1lIiwiRGF0ZSIsImdldFRpbWUiLCJvYmoxIiwib2JqMiIsInF1ZXJ5IiwiY3VycmVudFdpbmRvdyIsInVybCIsImgiLCJsYXN0SW5kZXhPZiIsInRyYW5zbGF0ZURvY3VtZW50IiwiY2FwdHVyZSIsInBhc3NpdmUiLCJvbmNlIiwiZGF0YSIsImRhdGFzZXQiLCJkb2N1bWVudEVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJnZXRVSUxhbmd1YWdlIiwicmVwbGFjZSIsInRleHRFbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhdHRyRWxlbWVudHMiLCJsMTBuSWQiLCJ0ZXh0Q29udGVudCIsImZvckVhY2giLCJhdHRyIiwibDEwbkF0dHIiLCJ0b3BpY3MiLCJldmVudCIsImFyZ3MiLCJ0b3BpYyIsImFwcGx5Iiwic2VuZE1lc3NhZ2UiLCJldiIsIndhaXQiLCJjb250ZXh0IiwiZnVuYyIsImFyZ3MxIiwiYXJnczIiLCJjb25jYXQiLCJvIiwiZW52RXZlbnRzIiwiRU5WIiwiX01FRElBVE9SIiwib25NZXNzYWdlIiwiYWRkTGlzdGVuZXIiLCJwYXNzTWVzc2FnZSIsImluaXRQb3J0aW5nIiwicmVnaXN0ZXJQb3J0RXZlbnRzIiwib25lT2ZmRXZlbnRzIiwiY29ubmVjdGlvbkJhc2VkRXZlbnRzIiwiT05FT0ZGIiwicG9zdE1lc3NhZ2UiLCJyZXEiLCJzZW5kZXIiLCJzZW5kUmVzcG9uc2UiLCJtc2ciLCJsYXN0QXJnIiwidGFiIiwidW5kZWZpbmVkIiwicG9zdHBvbmVDb25uZWN0aW9uIiwiY29ubmVjdCIsImFkZENvbm5lY3Rpb25MaXN0ZW5lcnMiLCJvbkRpc2Nvbm5lY3QiLCJjYiIsIm9uQ29ubmVjdCIsImluaXRpYWxpemVkIiwiaW5pdGlhbGl6aW5nIiwiYXJlYV9zZXR0aW5ncyIsIl9ERUZBVUxUX1NUT1JBR0UiLCJhcmVhX2hpc3RvcnkiLCJhcmVhX3BhZ2Vub3RlcyIsInNldEFyZWFzIiwiYXJlYSIsImZpZWxkIiwiUHJvbWlzZSIsInIiLCJzZXRUaW1lb3V0IiwiaW5pdCIsImxvY2FsU3RvcmFnZSIsInN5bmNlZFN0b3JhZ2UiLCJfZ2V0X2hpc3RvcnkiLCJzeW5jZWRIaXN0b3J5IiwibG9jYWxIaXN0b3J5IiwibG9ncyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7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QUFSLENBQWdCQyxJQUFoQixDQUFxQkMsR0FBckIsR0FBMkJDLElBQTNCLENBQWdDLFVBQUE2TixhQUFhO0FBQUEsbUJBQUlBLGFBQWEsQ0FBQ25NLE9BQWQsSUFBeUIsRUFBN0I7QUFBQSxXQUE3QyxDQUFQO0FBQ0Q7O0FBQ0QsZUFBT2tNLFlBQVksQ0FBQ2xNLE9BQXBCO0FBQ0QsT0FMTSxDQUFQO0FBTUQ7Ozs7RUFsR3lCOUMsZSIsImZpbGUiOiJjb250ZW50L3RiYi1tZW51L3RiYi1tZW51LndwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9jb250ZW50L3RiYi1tZW51L2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgX0NPUFkgfSBmcm9tICcuLy4uLy4uL3V0aWxzL2NvcHknXHJcbmltcG9ydCB7IF9HRVRfQUNUSVZFX1RBQiB9IGZyb20gJy4vLi4vLi4vdXRpbHMvZ2V0QWN0aXZlVGFiJ1xyXG5pbXBvcnQgX0VYVEVORCBmcm9tICcuLy4uLy4uL3V0aWxzL2V4dGVuZCdcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vLi4vdXRpbHMvbW9kdWxlJ1xyXG5pbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi91dGlscy9kb21tb2R1bGUnXHJcbmltcG9ydCB7IF9TVE9SRSB9IGZyb20gJy4vLi4vLi4vdXRpbHMvc3RvcmUnXHJcbmltcG9ydCB7IF9QT1JUIH0gZnJvbSAnLi8uLi8uLi91dGlscy9wb3J0J1xyXG5pbXBvcnQgeyBfSEFTSExFU1MgfSBmcm9tICcuLy4uLy4uL3V0aWxzL2hhc2hsZXNzJ1xyXG5pbXBvcnQgX0wxME4gZnJvbSAnLi8uLi8uLi91dGlscy9sMTBuJ1xyXG5pbXBvcnQgX0VSUk9SVFJBQ0tFUiBmcm9tICcuLy4uLy4uL3V0aWxzL2Vycm9yLXRyYWNrZXInXHJcblxyXG5leHBvcnQgeyBfQ09QWSwgX0dFVF9BQ1RJVkVfVEFCLCBfRVhURU5ELCBfTU9EVUxFLCBfRE9NTU9EVUxFLCBfU1RPUkUsIF9QT1JULCBfTDEwTiwgX0VSUk9SVFJBQ0tFUiwgX0hBU0hMRVNTIH1cclxuIiwiaW1wb3J0ICcuL3Nhc3MvaW5kZXguc2NzcydcclxuXHJcbmltcG9ydCBfRVJST1JUUkFDS0VSIGZyb20gJy4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IHsgX0wxME4gfSBmcm9tICcuLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfUE9SVCBmcm9tICcuL3BvcnQnXHJcbl9MMTBOKCk7XHJcblxyXG5uZXcgX0RPTU1PRFVMRSh7XHJcbiAgZWw6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51JyksXHJcbiAgZXZlbnRzOiB7XHJcbiAgICBET006IHtcclxuICAgICAgY2xpY2s6IHtcclxuICAgICAgICAnI2FjdGl2YXRlJzogJ3RvZ2dsZScsXHJcbiAgICAgICAgJy5zZW5kJzogJ29wZW4nLFxyXG4gICAgICAgICdzcGFuJzogJ29wZW4nXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIHBvcnQ6IG51bGwsXHJcbiAgZGlzYWJsZWQ6IGZhbHNlLFxyXG5cclxuICBhdXRvaW5pdCgpIHtcclxuICAgIGJyb3dzZXIuc3RvcmFnZS5zeW5jLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmIChzdG9yYWdlLnNldHRpbmdzKSB7XHJcbiAgICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnN5bmMgfHwgc3RvcmFnZS5zeW5jLnNldHRpbmdzKSByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5hZGRvbi5hY3RpdmU7XHJcbiAgICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKHN0b3JhZ2UgPT4gc3RvcmFnZS5zZXR0aW5ncy5hZGRvbi5hY3RpdmUpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSlcclxuICAgIC50aGVuKGFjdGl2ZSA9PiB0aGlzLnNldEFjdGl2YXRlVGV4dChhY3RpdmUpKTtcclxuICB9LFxyXG4gIHRvZ2dsZSgpIHtcclxuICAgIHRoaXMuZW1pdCgndG9nZ2xlOmFkZG9uJyk7XHJcbiAgICB3aW5kb3cuY2xvc2UoKTtcclxuICB9LFxyXG4gIG9wZW4oZSwgZWwpIHtcclxuICAgIGNvbnN0IHBhZ2UgPSBlbC5ub2RlTmFtZSA9PT0gJ1NQQU4nID8gZWwucGFyZW50Tm9kZS5pZCA6IGVsLmlkO1xyXG4gICAgdGhpcy5lbWl0KCdvcGVuOmFkZG9uLXBhZ2UodGJiKScsIHBhZ2UpO1xyXG4gICAgd2luZG93LmNsb3NlKCk7XHJcbiAgfSxcclxuICBzZXRBY3RpdmF0ZVRleHQoYWN0aXZlKSB7XHJcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWN0aXZhdGUnKTtcclxuICAgIGJ0bi50aXRsZSA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCd0YmJfbWl0ZW1fMV8nICsgYWN0aXZlKTtcclxuICAgIGlmIChhY3RpdmUpIHtcclxuICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ21lbnVfX2ljb24tLXN0YXJ0Jyk7XHJcbiAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdtZW51X19pY29uLS1wYXVzZScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoJ21lbnVfX2ljb24tLXN0YXJ0Jyk7XHJcbiAgICAgIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdtZW51X19pY29uLS1wYXVzZScpO1xyXG4gICAgfVxyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCB7IF9QT1JUIH0gZnJvbSAnLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IF9QT1JUKHtcclxuICBuYW1lOiAndGJiLW1lbnUnLFxyXG4gIHR5cGU6ICdwcml2aWxlZ2VkJyxcclxuICBldmVudHM6IHtcclxuICAgIENPTk5FQ1RJT046IFtcclxuICAgICAgJ3RvZ2dsZTphZGRvbicsXHJcbiAgICAgICdvcGVuOmFkZG9uLXBhZ2UodGJiKScsXHJcbiAgICAgICdlcnJvcjpicm93c2VyLWNvbnNvbGUnXHJcbiAgICBdXHJcbiAgfVxyXG59KVxyXG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuICB2ZXJzaW9uOiBicm93c2VyLnJ1bnRpbWUuZ2V0TWFuaWZlc3QoKS52ZXJzaW9uLFxyXG4gIHNldHRpbmdzOntcclxuICAgIHNob3J0Y3V0czoge1xyXG4gICAgICB6OiBbJ2N0cmxLZXktYWx0S2V5JywgdHJ1ZV0sXHJcbiAgICAgIHk6IFsnY3RybEtleS1hbHRLZXknLCB0cnVlXSxcclxuICAgICAgczogWydjdHJsS2V5LWFsdEtleScsIHRydWVdLFxyXG4gICAgICBjOiBbJ2N0cmxLZXktYWx0S2V5JywgZmFsc2UsIHRydWVdLFxyXG4gICAgICBiOiBbJ2N0cmxLZXktYWx0S2V5JywgdHJ1ZSwgdHJ1ZV0sXHJcbiAgICAgIGQ6IFsnc2hpZnRLZXknLCBmYWxzZSwgdHJ1ZV0sXHJcbiAgICAgICctYic6IFsnJywgJycsIHRydWVdLFxyXG4gICAgICBtOiBbJycsIHRydWUsIHRydWVdLFxyXG4gICAgICB3OiBbJycsIHRydWUsIHRydWVdLFxyXG4gICAgICBuOiBbJycsICcnLCB0cnVlXSxcclxuICAgICAgJzInOiBbJycsIHRydWVdLFxyXG4gICAgICAnMyc6IFsnJywgdHJ1ZV0sXHJcbiAgICAgIGFycm93dXA6IFsnYWx0S2V5JywgZmFsc2UsIGZhbHNlXSxcclxuICAgICAgYXJyb3dkb3duOiBbJ2FsdEtleScsIGZhbHNlLCBmYWxzZV0sXHJcbiAgICAgIHNiOiBbJycsICcnLCB0cnVlXSxcclxuICAgICAgY206IFsnJywgdHJ1ZV1cclxuICAgIH0sXHJcbiAgICBtYXJrZXJzOiB7XHJcbiAgICAgICcxJzogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6I2RkOTlmZjsnIH0sXHJcbiAgICAgICcyJzogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6IzY2YmJmZjsnIH0sXHJcbiAgICAgICczJzogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6IzU1ZmY1NTsnIH0sXHJcbiAgICAgICc0JzogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6I2ZmNjY2Njtjb2xvcjojZmZmZmZmOycgfSxcclxuICAgICAgJzUnOiB7IHN0eWxlOiAnYmFja2dyb3VuZC1jb2xvcjojZmZjYzAwOycgfSxcclxuICAgICAgbTogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6I2ZmZWUwMDsnIH1cclxuICAgIH0sXHJcbiAgICBoaXN0b3J5OiB7XHJcbiAgICAgIGF1dG9zYXZlOiB0cnVlLFxyXG4gICAgICBzYXZlSW5Qcml2OiBmYWxzZSxcclxuICAgICAgZHJvcExvc3NlczogdHJ1ZSxcclxuICAgICAgaW1tdXQ6IGZhbHNlLFxyXG4gICAgICBuYW1pbmc6ICd0aXRsZScsXHJcbiAgICAgIGRvd25sb2FkOiAnanNvbicsXHJcbiAgICAgIGNvcHk6ICd0ZXh0JyxcclxuICAgICAgc2F2ZU5vdGU6IHRydWUsXHJcbiAgICAgIHNvcnRlZDogJ2RhdGUtbGFzdCcsXHJcbiAgICAgIHZpZXc6ICdsaXN0JyxcclxuICAgICAgcHA6IDEwLFxyXG4gICAgICBpZ25vcmVIYXNoOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgYWRkb246IHtcclxuICAgICAgYWN0aXZlOiB0cnVlLFxyXG4gICAgICBhdXRvY3M6IHRydWVcclxuICAgIH0sXHJcbiAgICBtaXNjOiB7XHJcbiAgICAgIGJtaWNvbjogdHJ1ZSxcclxuICAgICAgbm90ZWljb246IHRydWUsXHJcbiAgICAgIG5vdGVvbmNsaWNrOiB0cnVlLFxyXG4gICAgICBub3RldHJhbnNwOiBmYWxzZSxcclxuICAgICAgbm90ZXBsYWludmlldzogZmFsc2UsXHJcbiAgICAgIG92ZXJ3cml0ZTogZmFsc2UsXHJcbiAgICAgIGZhaWx1cmVOb3RlOiB0cnVlLFxyXG4gICAgICBzdWNjZXNzTm90ZTogdHJ1ZSxcclxuICAgICAgcGJtTm90ZTogdHJ1ZSxcclxuICAgICAgY2hhbmdlZE5vdGU6IGZhbHNlLFxyXG4gICAgICBlcnJvck5vdGU6IHRydWUsXHJcbiAgICAgIHZpcE5vdGU6IHRydWUsXHJcbiAgICAgIGN1c3RvbVNlYXJjaDogZmFsc2UsXHJcbiAgICAgIHRtdWlwb3M6ICd0b3AtcmlnaHQnLFxyXG4gICAgICBtYXJrbWV0aG9kOiAncG9wdXAnLFxyXG4gICAgICBwcm9ncmVzc2JhcjogdHJ1ZSxcclxuICAgICAgdGJicG93ZXI6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgc2I6IHtcclxuICAgICAgdGFiczoge1xyXG4gICAgICAgIG1ldGE6IHsgdW5mb2xkZWQ6IGZhbHNlIH0sXHJcbiAgICAgICAgdGFnczogeyB1bmZvbGRlZDogZmFsc2UgfSxcclxuICAgICAgICBub3RlczogeyB1bmZvbGRlZDogZmFsc2UgfSxcclxuICAgICAgICBtYXJrZXJzOiB7IHVuZm9sZGVkOiB0cnVlIH0sXHJcbiAgICAgICAgYWN0aW9uczogeyB1bmZvbGRlZDogdHJ1ZSB9LFxyXG4gICAgICAgIG1hcmtzOiB7IHVuZm9sZGVkOiBmYWxzZSB9LFxyXG4gICAgICAgIGxpbmtzOiB7IHVuZm9sZGVkOiBmYWxzZSB9LFxyXG4gICAgICAgIHRoZW1lczogeyB1bmZvbGRlZDogZmFsc2UgfVxyXG4gICAgICB9LFxyXG4gICAgICB0aGVtZTogJ2RlZmF1bHQnXHJcbiAgICB9XHJcbiAgfSxcclxuICBoaXN0b3J5OiB7XHJcbiAgICBlbnRyaWVzOiB7fVxyXG4gIH0sXHJcbiAgcGFnZW5vdGVzOiB7fSxcclxuICBzeW5jOiB7XHJcbiAgICBzZXR0aW5nczogZmFsc2UsXHJcbiAgICBoaXN0b3J5OiBmYWxzZSxcclxuICAgIHBhZ2Vub3RlczogZmFsc2VcclxuICB9XHJcbn07XHJcbiIsImNvbnN0IF9DT1BZID0gZnVuY3Rpb24oc3JjKSB7XHJcbiAgY29uc3QgdGFyZ2V0ID0gQXJyYXkuaXNBcnJheShzcmMpID8gW10gOiB7fTtcclxuICBsZXQgdmFsO1xyXG4gIGZvciAobGV0IHByb3AgaW4gc3JjKSB7XHJcbiAgICBpZiAoc3JjLmhhc093blByb3BlcnR5KHByb3ApKSB7XHJcbiAgICAgIHZhbCA9IHNyY1twcm9wXTtcclxuICAgICAgaWYgKHZhbCAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIHRhcmdldFtwcm9wXSA9IF9DT1BZKHZhbCk7XHJcbiAgICAgIH0gZWxzZVxyXG4gICAgICAgIHRhcmdldFtwcm9wXSA9IHZhbDtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHRhcmdldDtcclxufVxyXG5cclxuZXhwb3J0IHsgX0NPUFkgfVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi9tb2R1bGUnXHJcblxyXG5leHBvcnQgY2xhc3MgX0RPTU1PRFVMRSBleHRlbmRzIF9NT0RVTEUge1xyXG5cclxuICBjb25zdHJ1Y3RvcihvYmopIHtcclxuICAgIG9iai5fYm91bmQgPSB7fTtcclxuICAgIG9iai5fZXh0cmFCb3VuZCA9IFtdO1xyXG5cclxuICAgIHN1cGVyKG9iailcclxuXHJcbiAgICB0aGlzLmFkZExpc3RlbmVyc01hbnVhbGx5IHx8IHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcbiAgICAhdGhpcy5hdXRvUGF1c2UgfHwgdGhpcy5zZXRBdXRvUGF1c2UoKTtcclxuICB9XHJcbiAgZ2VuZXJhbEhhbmRsZXIoc3ViTWFwLCB0eXBlLCBlKSB7XHJcbiAgICBsZXQgZWwgPSBlLnRhcmdldCxcclxuICAgICAgICBzZWxlY3RvciwgX3NlbCwgbWV0aCwgZiwgaXNJZCwgaXNDbGFzcywgaXNEb2M7XHJcblxyXG4gICAgZm9yIChzZWxlY3RvciBpbiBzdWJNYXApIHtcclxuICAgICAgZiA9IHNlbGVjdG9yWzBdO1xyXG4gICAgICBfc2VsID0gc2VsZWN0b3I7XHJcbiAgICAgIGlzSWQgPSBmID09PSAnIyc7XHJcbiAgICAgIGlzQ2xhc3MgPSBmID09PSAnLic7XHJcbiAgICAgIGlzRG9jID0gZiA9PT0gJyonO1xyXG5cclxuICAgICAgaWYgKGlzSWQgfHwgaXNDbGFzcykgc2VsZWN0b3IgPSBzZWxlY3Rvci5zdWJzdHIoMSk7XHJcblxyXG4gICAgICBpZiAoaXNEb2MgfHxcclxuICAgICAgICAgIGlzQ2xhc3MgJiYgZWwuY2xhc3NMaXN0LmNvbnRhaW5zKHNlbGVjdG9yKSB8fFxyXG4gICAgICAgICAgaXNJZCAmJiBlbC5pZCA9PT0gc2VsZWN0b3IgfHxcclxuICAgICAgICAgIGVsLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09IHNlbGVjdG9yXHJcbiAgICAgICkge1xyXG5cclxuICAgICAgICBtZXRoID0gc3ViTWFwW19zZWxdO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIG1ldGggPT09ICdmdW5jdGlvbicpIG1ldGgoZSwgZWwpO1xyXG4gICAgICAgIGVsc2UgaWYgKHRoaXNbbWV0aF0pIHRoaXNbbWV0aF0oZSwgZWwpO1xyXG5cclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBzZXRBdXRvUGF1c2UoKSB7XHJcbiAgICB0aGlzLm9uKCd0b2dnbGVkOmFkZG9uJywgb24gPT4ge1xyXG4gICAgICBpZiAob24pIHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcbiAgICAgIGVsc2UgdGhpcy5yZW1vdmVMaXN0ZW5lcnMoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBhZGRMaXN0ZW5lcih0eXBlLCBtZXRoLCBlbCkge1xyXG4gICAgZWwgPSBlbCB8fCB0aGlzLmVsO1xyXG4gICAgY29uc3QgaGFuZGxlciA9IHR5cGVvZiBtZXRoID09PSAnZnVuY3Rpb24nID8gbWV0aCA6IHRoaXNbbWV0aF07XHJcblxyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyLCBmYWxzZSk7XHJcblxyXG4gICAgaWYgKGVsID09PSB0aGlzLmVsKSB7XHJcbiAgICAgIGlmICghdGhpcy5fYm91bmRbdHlwZV0pIHRoaXMuX2JvdW5kW3R5cGVdID0gW107XHJcbiAgICAgIHRoaXMuX2JvdW5kW3R5cGVdLnB1c2goaGFuZGxlcik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9leHRyYUJvdW5kLnB1c2goW2VsLCB0eXBlLCBoYW5kbGVyXSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGFkZExpc3RlbmVycygpIHtcclxuICAgIGxldCBldmVudHMgPSB0aGlzLmV2ZW50cyxcclxuICAgICAgICBkb21FdmVudHMsIGVsLCBzdWJNYXAsIHR5cGUsIGhhbmRsZXI7XHJcblxyXG4gICAgaWYgKCFldmVudHMgfHwgIShkb21FdmVudHMgPSBldmVudHMuRE9NKSB8fCAhKGVsID0gdGhpcy5lbCkpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICBmb3IgKHR5cGUgaW4gZG9tRXZlbnRzKSB7XHJcbiAgICAgIHN1Yk1hcCA9IGRvbUV2ZW50c1t0eXBlXTtcclxuICAgICAgaGFuZGxlciA9IHRoaXMucHJveHkodGhpcywgdGhpcy5nZW5lcmFsSGFuZGxlciwgc3ViTWFwLCB0eXBlKTtcclxuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAgIGlmICghdGhpcy5fYm91bmRbdHlwZV0pIHRoaXMuX2JvdW5kW3R5cGVdID0gW107XHJcbiAgICAgIHRoaXMuX2JvdW5kW3R5cGVdLnB1c2goaGFuZGxlcik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlbW92ZUxpc3RlbmVycygpIHtcclxuICAgIGxldCB0eXBlLCBfYm91bmQsIGw7XHJcblxyXG4gICAgZm9yICh0eXBlIGluIHRoaXMuX2JvdW5kKSB7XHJcbiAgICAgIF9ib3VuZCA9IHRoaXMuX2JvdW5kW3R5cGVdO1xyXG4gICAgICBsID0gX2JvdW5kLmxlbmd0aDtcclxuICAgICAgd2hpbGUgKGwtLSkge1xyXG4gICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBfYm91bmRbbF0sIGZhbHNlKTtcclxuICAgICAgICBfYm91bmQuc3BsaWNlKGwsIDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IF9leHRyYSA9IHRoaXMuX2V4dHJhQm91bmQsIGkgPSAwLCBzZXQ7XHJcbiAgICBsID0gX2V4dHJhLmxlbmd0aDtcclxuXHJcbiAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xyXG4gICAgICBzZXQgPSBfZXh0cmFbaV07XHJcbiAgICAgIHNldFswXS5yZW1vdmVFdmVudExpc3RlbmVyKHNldFsxXSwgc2V0WzJdLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuL21vZHVsZSdcclxuXHJcbmNvbnN0IF9FUlJPUlRSQUNLRVIgPSBuZXcgX01PRFVMRSh7XHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlcnJvciA9PiB7XHJcbiAgICAgIGNvbnN0IGZpbGUgPSBlcnJvci5maWxlbmFtZS5zcGxpdCgnLycpLnBvcCgpO1xyXG4gICAgICBpZiAoWydzaWRlYmFyLndwLmpzJywgJ3RiYi1tZW51LndwLmpzJywgJ29wdGlvbnMud3AuanMnLCAnYWRkb24tcGFnZS53cC5qcyddLmluY2x1ZGVzKGZpbGUpKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdlcnJvcjpicm93c2VyLWNvbnNvbGUnLCB7XHJcbiAgICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLFxyXG4gICAgICAgICAgbG9jYXRpb246IGVycm9yLmZpbGVuYW1lLnNwbGl0KCcvJykucG9wKCkuc3BsaXQoJy4nKS5zaGlmdCgpICsgJzonICsgZXJyb3IubGluZW5vICsgJzonICsgZXJyb3IuY29sbm8sXHJcbiAgICAgICAgICB0aW1lOiAobmV3IERhdGUoKSkuZ2V0VGltZSgpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0sIGZhbHNlKTtcclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgX0VSUk9SVFJBQ0tFUjtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob2JqMSwgb2JqMikge1xyXG4gIGZvciAodmFyIGkgaW4gb2JqMilcclxuICAgIGlmICghb2JqMVtpXSkgb2JqMVtpXSA9IG9iajJbaV07XHJcblxyXG4gIHJldHVybiBvYmoxO1xyXG59XHJcbiIsImNvbnN0IF9HRVRfQUNUSVZFX1RBQiA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICByZXR1cm4gYnJvd3Nlci50YWJzLnF1ZXJ5KHsgY3VycmVudFdpbmRvdzogdHJ1ZSwgYWN0aXZlOiB0cnVlIH0pLnRoZW4odGFicyA9PiB0YWJzWzBdKTtcclxufVxyXG5cclxuZXhwb3J0IHsgX0dFVF9BQ1RJVkVfVEFCIH1cclxuIiwiY29uc3QgX0hBU0hMRVNTID0gZnVuY3Rpb24odXJsKSB7XHJcbiAgY29uc3QgaCA9IHVybC5sYXN0SW5kZXhPZignIycpO1xyXG4gIGlmIChoID09PSAtMSkgcmV0dXJuIHVybDtcclxuICBlbHNlIHJldHVybiB1cmwuc3Vic3RyKDAsIGgpO1xyXG59XHJcblxyXG5leHBvcnQgeyBfSEFTSExFU1MgfVxyXG4iLCIvKlxyXG4qIFRyYW5zbGF0ZXMgYSBIVE1sIHBhZ2UgaW4gdGhlIHdlYiBsMTBuIHN0eWxlIGZyb20gdGhlIEFkZC1vbiBTREsgd2l0aCBXZWJFeHRlbnNpb25zIHN0cmluZ3MuXHJcbiogTW9kaWZpZWQgYnkgdW5kZXJmbHlpbmdiaXJjaGVzXHJcbipcclxuKiBAYXV0aG9yIE1hcnRpbiBHaWdlclxyXG4qIEBzZWUge0BsaW5rIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2ZyZWFrdGVjaG5pay80YTcyYmMwNzExZDliYzgyY2YzYjA3NWJjYzI5Mjk1M31cclxuKiBAbGljZW5zZSBNUEwtMi4wXHJcbiovXHJcbmZ1bmN0aW9uIHRyYW5zbGF0ZURvY3VtZW50KCkge1xyXG4gIGxldCBlbCwgZGF0YSwgZGF0YXNldDtcclxuICAvLyBTZXQgdGhlIGxhbmd1YWdlIGF0dHJpYnV0ZSBvZiB0aGUgZG9jdW1lbnQuXHJcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZSgnbGFuZycsIGJyb3dzZXIuaTE4bi5nZXRVSUxhbmd1YWdlKCkucmVwbGFjZSgnXycsICctJykpO1xyXG4gIC8vIEdldCBhbGwgZWxlbWVudHMgdGhhdCBhcmUgbWFya2VkIGFzIGJlaW5nIHRyYW5zbGF0ZWFibGUuXHJcbiAgY29uc3QgdGV4dEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnKltkYXRhLWwxMG4taWRdJyk7XHJcbiAgY29uc3QgYXR0ckVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnKltkYXRhLWwxMG4tYXR0cl0nKTtcclxuXHJcbiAgZm9yKGVsIG9mIHRleHRFbGVtZW50cykge1xyXG4gICAgZGF0YXNldCA9IGVsLmRhdGFzZXQ7XHJcbiAgICBjb25zdCBsMTBuSWQgPSBkYXRhc2V0LmwxMG5JZDtcclxuXHJcbiAgICBpZiAobDEwbklkKSB7XHJcbiAgICAgIGRhdGEgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShsMTBuSWQpO1xyXG5cclxuICAgICAgaWYoZGF0YSAmJiBkYXRhICE9ICc/PycpIHtcclxuICAgICAgICBlbC50ZXh0Q29udGVudCA9IGRhdGE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgZm9yKGVsIG9mIGF0dHJFbGVtZW50cykge1xyXG4gICAgZGF0YXNldCA9IGVsLmRhdGFzZXQ7XHJcblxyXG4gICAgWydUaXRsZScsICdQbGFjZWhvbGRlciddLmZvckVhY2goYXR0ciA9PiB7XHJcbiAgICAgIGNvbnN0IGwxMG5BdHRyID0gZGF0YXNldFsnbDEwbicgKyBhdHRyXTtcclxuXHJcbiAgICAgIGlmIChsMTBuQXR0cikge1xyXG4gICAgICAgIGRhdGEgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShsMTBuQXR0cik7XHJcblxyXG4gICAgICAgIGlmIChkYXRhICYmIGRhdGEgIT0gJz8/Jykge1xyXG4gICAgICAgICAgZWwuc2V0QXR0cmlidXRlKGF0dHIudG9Mb3dlckNhc2UoKSwgZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB0cmFuc2xhdGVEb2N1bWVudCgpLCB7XHJcbiAgICBjYXB0dXJlOiBmYWxzZSxcclxuICAgIHBhc3NpdmU6IHRydWUsXHJcbiAgICBvbmNlOiB0cnVlXHJcbiAgfSk7XHJcbn1cclxuIiwibGV0IHRvcGljcyA9IHt9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xyXG5cclxuICBvbihldmVudCwgaGFuZGxlcikge1xyXG4gICAgaWYgKCF0b3BpY3NbZXZlbnRdKSB0b3BpY3NbZXZlbnRdID0gW107XHJcblxyXG4gICAgdG9waWNzW2V2ZW50XS5wdXNoKGhhbmRsZXIpO1xyXG4gIH1cclxuICBlbWl0KGV2ZW50cywgLi4uYXJncykge1xyXG4gICAgZXZlbnRzID0gZXZlbnRzLnNwbGl0KCcgJyk7XHJcblxyXG4gICAgbGV0IGkgPSAwLCBsID0gZXZlbnRzLmxlbmd0aCwgdG9waWM7XHJcblxyXG4gICAgZm9yICg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgdG9waWMgPSB0b3BpY3NbZXZlbnRzW2ldXTtcclxuXHJcbiAgICAgIGlmICh0b3BpYylcclxuICAgICAgICB0b3BpYy5mb3JFYWNoKGhhbmRsZXIgPT4gaGFuZGxlci5hcHBseSh0aGlzLCBhcmdzKSlcclxuICAgIH1cclxuICB9XHJcbiAgcmVxdWVzdChldmVudCwgLi4uYXJncykge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZSh7IGV2OiBldmVudCwgYXJnczogYXJncywgd2FpdDogdHJ1ZSB9KS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgfVxyXG4gIHByb3h5KGNvbnRleHQsIGZ1bmMsIC4uLmFyZ3MxKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24oLi4uYXJnczIpIHtcclxuICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJnczEuY29uY2F0KGFyZ3MyKSk7XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgX01FRElBVE9SIGZyb20gJy4vbWVkaWF0b3InXHJcblxyXG5leHBvcnQgY2xhc3MgX01PRFVMRSBleHRlbmRzIF9NRURJQVRPUiB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgc3VwZXIoKVxyXG5cclxuICAgIGZvciAobyBpbiBvYmopIHRoaXNbb10gPSBvYmpbb107XHJcblxyXG4gICAgbGV0IGV2ZW50cyA9IHRoaXMuZXZlbnRzLFxyXG4gICAgICAgIGVudkV2ZW50cywgbywgZSwgaGFuZGxlcjtcclxuXHJcbiAgICBpZiAoZXZlbnRzICYmIChlbnZFdmVudHMgPSBldmVudHMuRU5WKSkge1xyXG4gICAgICBmb3IgKGUgaW4gZW52RXZlbnRzKSB7XHJcbiAgICAgICAgaGFuZGxlciA9IGVudkV2ZW50c1tlXTtcclxuICAgICAgICBpZiAodGhpc1toYW5kbGVyXSlcclxuICAgICAgICAgIHRoaXMub24oZSwgdGhpcy5wcm94eSh0aGlzLCB0aGlzW2hhbmRsZXJdKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICF0aGlzLmF1dG9pbml0IHx8IHRoaXMuYXV0b2luaXQoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vbW9kdWxlJ1xyXG5cclxuZXhwb3J0IGNsYXNzIF9QT1JUIGV4dGVuZHMgX01PRFVMRSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgc3VwZXIob2JqKVxyXG5cclxuICAgIHRoaXMucG9ydCA9IG51bGw7XHJcblxyXG4gICAgY29uc3QgdHlwZSA9IHRoaXMudHlwZTtcclxuXHJcbiAgICBicm93c2VyLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKHRoaXMucHJveHkodGhpcywgdGhpcy5wYXNzTWVzc2FnZSkpO1xyXG5cclxuICAgIGlmICh0eXBlID09PSAncHJpdmlsZWdlZCcgfHwgdHlwZSA9PT0gJ2JhY2tncm91bmQnKSB0aGlzLmluaXRQb3J0aW5nKCk7XHJcblxyXG4gICAgdGhpcy5yZWdpc3RlclBvcnRFdmVudHMoKTtcclxuICB9XHJcbiAgZXh0ZW5kKGV2ZW50cykge1xyXG4gICAgdGhpcy5yZWdpc3RlclBvcnRFdmVudHMoZXZlbnRzKTtcclxuICB9XHJcbiAgcmVnaXN0ZXJQb3J0RXZlbnRzKGV2ZW50cykge1xyXG4gICAgZXZlbnRzID0gZXZlbnRzIHx8IHRoaXMuZXZlbnRzO1xyXG4gICAgbGV0IG9uZU9mZkV2ZW50cywgY29ubmVjdGlvbkJhc2VkRXZlbnRzO1xyXG5cclxuICAgIGlmIChldmVudHMpIHtcclxuICAgICAgb25lT2ZmRXZlbnRzID0gZXZlbnRzLk9ORU9GRjtcclxuICAgICAgaWYgKG9uZU9mZkV2ZW50cykge1xyXG4gICAgICAgIGZvciAobGV0IGUgb2Ygb25lT2ZmRXZlbnRzKVxyXG4gICAgICAgICAgdGhpcy5vbihlLCB0aGlzLnByb3h5KHRoaXMsIHRoaXMuc2VuZE1lc3NhZ2UsIGUpKTtcclxuICAgICAgfVxyXG4gICAgICBjb25uZWN0aW9uQmFzZWRFdmVudHMgPSBldmVudHMuQ09OTkVDVElPTjtcclxuICAgICAgaWYgKGNvbm5lY3Rpb25CYXNlZEV2ZW50cykge1xyXG4gICAgICAgIGZvciAobGV0IGYgb2YgY29ubmVjdGlvbkJhc2VkRXZlbnRzKVxyXG4gICAgICAgICAgdGhpcy5vbihmLCB0aGlzLnByb3h5KHRoaXMsIHRoaXMucG9zdE1lc3NhZ2UsIGYpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBwYXNzTWVzc2FnZShyZXEsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSB7XHJcbiAgICByZXEuYXJncyA9IHJlcS5hcmdzIHx8IFtdO1xyXG4gICAgbGV0IGFyZ3MgPSBbXS5jb25jYXQocmVxLmV2LCByZXEuYXJncyk7XHJcbiAgICBpZiAoIXNlbmRlciB8fCAhc2VuZGVyLm5hbWUpIGFyZ3MgPSBhcmdzLmNvbmNhdChzZW5kZXIsIHNlbmRSZXNwb25zZSk7XHJcbiAgICB0aGlzLmVtaXQuYXBwbHkodGhpcywgYXJncyk7XHJcbiAgICBpZiAocmVxLndhaXQpIHJldHVybiB0cnVlOyAvLyB0aGlzIHdpbGwga2VlcCB0aGUgbWVzc2FnZSBjaGFubmVsIG9wZW4gdG8gdGhlIG90aGVyIGVuZCB1bnRpbCBgc2VuZFJlc3BvbnNlYCBpcyBjYWxsZWRcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgc2VuZE1lc3NhZ2UoZSwgLi4uYXJncykge1xyXG4gICAgY29uc3QgdHlwZSA9IHRoaXMudHlwZTtcclxuICAgIGxldCBtc2cgPSB7IGV2OiBlLCBhcmdzOiBhcmdzIH07XHJcbiAgICBpZiAodHlwZSA9PT0gJ2NvbnRlbnQnKSBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2UobXNnKS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICBlbHNlIGlmICh0eXBlID09PSAnYmFja2dyb3VuZCcpIHtcclxuICAgICAgY29uc3QgbGFzdEFyZyA9IGFyZ3NbYXJncy5sZW5ndGggLSAxXTtcclxuICAgICAgbGV0IHRhYjtcclxuICAgICAgaWYgKGxhc3RBcmcgIT09IHVuZGVmaW5lZCAmJiAodGFiID0gbGFzdEFyZy50YWIpKSB7XHJcbiAgICAgICAgaWYgKHRhYiA9PT0gJ2FjdGl2ZScpIHtcclxuICAgICAgICAgIGJyb3dzZXIudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSB9KS50aGVuKHRhYnMgPT4ge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB0YWIgb2YgdGFicylcclxuICAgICAgICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UodGFiLmlkLCBtc2cpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UobGFzdEFyZy50YWIsIG1zZykuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBicm93c2VyLnRhYnMucXVlcnkoey8qIGN1cnJlbnRXaW5kb3c6IGZhbHNlLCBhY3RpdmU6IGZhbHNlICovfSkudGhlbih0YWJzID0+IHtcclxuICAgICAgICAgIGZvciAobGV0IHRhYiBvZiB0YWJzKVxyXG4gICAgICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UodGFiLmlkLCBtc2cpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBwb3N0TWVzc2FnZShlLCAuLi5hcmdzKSB7XHJcbiAgICBjb25zdCBtc2cgPSB7IGV2OiBlLCBhcmdzOiBhcmdzIH07XHJcbiAgICBpZiAodGhpcy5wb3J0KSB0aGlzLnBvcnQucG9zdE1lc3NhZ2UobXNnKTtcclxuICB9XHJcbiAgaW5pdFBvcnRpbmcoKSB7XHJcbiAgICBpZiAoIXRoaXMucG9zdHBvbmVDb25uZWN0aW9uKSB7XHJcbiAgICAgIHRoaXMuY29ubmVjdCgpO1xyXG4gICAgICB0aGlzLmFkZENvbm5lY3Rpb25MaXN0ZW5lcnMoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuYWRkQ29ubmVjdGlvbkxpc3RlbmVycyh0aGlzLnByb3h5KHRoaXMsIHRoaXMuY29ubmVjdCkpO1xyXG4gICAgfVxyXG4gIH1cclxuICBjb25uZWN0KCkge1xyXG4gICAgY29uc3QgcG9ydCA9IHRoaXMucG9ydCA9IHRoaXMucG9ydCB8fCBicm93c2VyLnJ1bnRpbWUuY29ubmVjdCh7IG5hbWU6IHRoaXMubmFtZSB9KTtcclxuICAgIHBvcnQub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKCgpID0+IHRoaXMucG9ydCA9IG51bGwpO1xyXG4gIH1cclxuICBhZGRDb25uZWN0aW9uTGlzdGVuZXJzKGNiKSB7XHJcbiAgICBicm93c2VyLnJ1bnRpbWUub25Db25uZWN0LmFkZExpc3RlbmVyKHBvcnQgPT4ge1xyXG4gICAgICBwb3J0Lm9uTWVzc2FnZS5hZGRMaXN0ZW5lcih0aGlzLnByb3h5KHRoaXMsIHRoaXMucGFzc01lc3NhZ2UpKTtcclxuICAgICAgIWNiIHx8IGNiKCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vbW9kdWxlJ1xyXG5pbXBvcnQgX0RFRkFVTFRfU1RPUkFHRSBmcm9tICcuLi9kYXRhL2RlZmF1bHQtc3RvcmFnZSdcclxuXHJcbmV4cG9ydCBjbGFzcyBfU1RPUkUgZXh0ZW5kcyBfTU9EVUxFIHtcclxuXHJcbiAgY29uc3RydWN0b3Iob2JqKSB7XHJcbiAgICBzdXBlcihvYmopXHJcblxyXG4gICAgdGhpcy5pbml0aWFsaXplZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5pbml0aWFsaXppbmcgPSBmYWxzZTtcclxuXHJcbiAgICB0aGlzLmFyZWFfc2V0dGluZ3MgPSBfREVGQVVMVF9TVE9SQUdFLnN5bmMuc2V0dGluZ3MgPyAnc3luYycgOiAnbG9jYWwnO1xyXG4gICAgdGhpcy5hcmVhX2hpc3RvcnkgPSBfREVGQVVMVF9TVE9SQUdFLnN5bmMuaGlzdG9yeSA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgICB0aGlzLmFyZWFfcGFnZW5vdGVzID0gX0RFRkFVTFRfU1RPUkFHRS5zeW5jLnBhZ2Vub3RlcyA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgfVxyXG5cclxuICBpbml0KCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoc3RvcmFnZSAmJiBzdG9yYWdlLnN5bmMpIHtcclxuICAgICAgICB0aGlzLnNldEFyZWFzKHN0b3JhZ2Uuc3luYyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0QXJlYXMoc3luYykge1xyXG4gICAgZm9yIChsZXQgYXJlYSBpbiBzeW5jKSB7XHJcbiAgICAgIHRoaXNbJ2FyZWFfJyArIGFyZWFdID0gc3luY1thcmVhXSA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQoZmllbGQgPSAnc3RvcmFnZScpIHtcclxuICAgIGlmICh0aGlzLmluaXRpYWxpemluZykge1xyXG4gICAgICByZXR1cm4gKG5ldyBQcm9taXNlKHIgPT4gd2luZG93LnNldFRpbWVvdXQoKCkgPT4gcih0aGlzLmdldChmaWVsZCkpLCAxMCkpKTtcclxuICAgIH1cclxuICAgIGNvbnN0IG1ldGggPSB0aGlzWydfZ2V0XycgKyBmaWVsZF07XHJcbiAgICBpZiAoIW1ldGgpIHRocm93KCdmaWVsZCAnICsgZmllbGQgKyAnIGRvZXNuXFwndCBleGlzdCcpO1xyXG5cclxuICAgIGlmICghdGhpcy5pbml0aWFsaXplZCkge1xyXG4gICAgICB0aGlzLmluaXRpYWxpemluZyA9IHRydWU7XHJcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG5cclxuICAgICAgcmV0dXJuIHRoaXMuaW5pdCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6aW5nID0gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIHRoaXNbJ19nZXRfJyArIGZpZWxkXSgpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzWydfZ2V0XycgKyBmaWVsZF0oKTtcclxuICB9XHJcblxyXG4gIF9nZXRfc3RvcmFnZSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihsb2NhbFN0b3JhZ2UgPT4ge1xyXG4gICAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCkudGhlbihzeW5jZWRTdG9yYWdlID0+IHtcclxuICAgICAgICBbJ3ZlcnNpb24nLCAnbG9ncyddLmZvckVhY2goZmllbGQgPT4ge1xyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlW2ZpZWxkXSA9IGxvY2FsU3RvcmFnZVtmaWVsZF0gfHwgc3luY2VkU3RvcmFnZVtmaWVsZF07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHRoaXMuYXJlYV9zZXR0aW5ncyA9PT0gJ3N5bmMnKSBsb2NhbFN0b3JhZ2Uuc2V0dGluZ3MgPSBzeW5jZWRTdG9yYWdlLnNldHRpbmdzO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRfaGlzdG9yeSgpLnRoZW4oaGlzdG9yeSA9PiB7XHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2UuaGlzdG9yeSA9IGhpc3Rvcnk7XHJcbiAgICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBfZ2V0X2xvY2FsX3N0b3JhZ2UoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpO1xyXG4gIH1cclxuICBfZ2V0X3N5bmNlZF9zdG9yYWdlKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5zeW5jLmdldCgpO1xyXG4gIH1cclxuICBfZ2V0X2hpc3RvcnkoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCkudGhlbihzeW5jZWRTdG9yYWdlID0+IHtcclxuICAgICAgY29uc3Qgc3luY2VkSGlzdG9yeSA9IHN5bmNlZFN0b3JhZ2UuaGlzdG9yeTtcclxuXHJcbiAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihsb2NhbFN0b3JhZ2UgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxvY2FsSGlzdG9yeSA9IGxvY2FsU3RvcmFnZS5oaXN0b3J5O1xyXG4gICAgICAgIGlmICghc3luY2VkSGlzdG9yeSkgcmV0dXJuIGxvY2FsSGlzdG9yeTtcclxuICAgICAgICBpZiAoIWxvY2FsSGlzdG9yeSkgcmV0dXJuIHN5bmNlZEhpc3Rvcnk7XHJcblxyXG4gICAgICAgIC8vc3luY2VkSGlzdG9yeS5vcmRlciA9IHN5bmNlZEhpc3Rvcnkub3JkZXIuY29uY2F0KGxvY2FsSGlzdG9yeS5vcmRlcik7XHJcbiAgICAgICAgZm9yIChsZXQgZSBpbiBsb2NhbEhpc3RvcnkuZW50cmllcykgc3luY2VkSGlzdG9yeS5lbnRyaWVzW2VdID0gbG9jYWxIaXN0b3J5LmVudHJpZXNbZV07XHJcblxyXG4gICAgICAgIHJldHVybiBzeW5jZWRIaXN0b3J5O1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBfZ2V0X3NldHRpbmdzKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiBzdG9yYWdlLnNldHRpbmdzIHx8IF9ERUZBVUxUX1NUT1JBR0Uuc2V0dGluZ3MpO1xyXG4gIH1cclxuICBfZ2V0X2xvZ3MoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4obG9jYWxTdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFsb2NhbFN0b3JhZ2UgfHwgIWxvY2FsU3RvcmFnZS5sb2dzKSByZXR1cm4gW107XHJcbiAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UubG9ncztcclxuICAgIH0pO1xyXG4gIH1cclxuICBfZ2V0X3ZlcnNpb24oKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4obG9jYWxTdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFsb2NhbFN0b3JhZ2UgfHwgIWxvY2FsU3RvcmFnZS52ZXJzaW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5zeW5jLmdldCgpLnRoZW4oc3luY2VkU3RvcmFnZSA9PiBzeW5jZWRTdG9yYWdlLnZlcnNpb24gfHwgJycpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UudmVyc2lvbjtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9