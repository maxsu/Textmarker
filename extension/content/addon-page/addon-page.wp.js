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
/******/ 	return __webpack_require__(__webpack_require__.s = "./content/addon-page/index.js");
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
exports._HASHLESS = exports._ERRORTRACKER = exports._L10N = exports._PORT = exports._DOMMODULE = exports._MODULE = exports._EXTEND = exports._GET_ACTIVE_TAB = exports._COPY = undefined;

var _copy = __webpack_require__(/*! ./../../utils/copy */ "./utils/copy.js");

var _getActiveTab = __webpack_require__(/*! ./../../utils/getActiveTab */ "./utils/getActiveTab.js");

var _extend = __webpack_require__(/*! ./../../utils/extend */ "./utils/extend.js");

var _extend2 = _interopRequireDefault(_extend);

var _module = __webpack_require__(/*! ./../../utils/module */ "./utils/module.js");

var _dommodule = __webpack_require__(/*! ./../../utils/dommodule */ "./utils/dommodule.js");

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
exports._PORT = _port._PORT;
exports._L10N = _l10n2["default"];
exports._ERRORTRACKER = _errorTracker2["default"];
exports._HASHLESS = _hashless._HASHLESS;

/***/ }),

/***/ "./content/addon-page/_store.js":
/*!**************************************!*\
  !*** ./content/addon-page/_store.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(/*! ./../_shared/utils */ "./content/_shared/utils.js");

exports["default"] = new _utils._MODULE({
  events: {
    ENV: {
      'toggled:sync': 'setAreas'
    }
  },
  initialized: false,
  initializing: false,
  area_settings: 'sync',
  area_history: 'sync',
  area_pagenotes: 'sync',
  setAreas: function setAreas() {
    var _this = this;

    return browser.storage.sync.get().then(function (storage) {
      if (storage && storage.sync) {
        _this.area_settings = storage.sync.settings ? 'sync' : 'local';
        _this.area_history = storage.sync.history ? 'sync' : 'local';
        _this.area_pagenotes = storage.sync.pagenotes ? 'sync' : 'local';
      }
    });
  },
  get: function get() {
    var _this2 = this;

    var field = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'storage';

    if (this.initializing) {
      return new Promise(function (r) {
        return window.setTimeout(function () {
          return r(_this2.get(field));
        }, 10);
      });
    }

    var meth = this['_get_' + field];
    if (!meth) throw 'field ' + field + ' doesn\'t exist';

    if (!this.initialized) {
      this.initializing = true;
      this.initialized = true;
      return this.setAreas().then(function () {
        _this2.initializing = false;
        return _this2['_get_' + field]();
      });
    }

    return this['_get_' + field]();
  },
  _get_storage: function _get_storage() {
    var _this3 = this;

    return browser.storage.local.get().then(function (localStorage) {
      return browser.storage.sync.get().then(function (syncedStorage) {
        ['version', 'logs'].forEach(function (field) {
          localStorage[field] = localStorage[field] || syncedStorage[field];
        });
        if (_this3.area_settings === 'sync') localStorage.settings = syncedStorage.settings;
        return _this3._get_history().then(function (history) {
          localStorage.history = history;
          return localStorage;
        });
      });
    });
  },
  _get_local_storage: function _get_local_storage() {
    return browser.storage.local.get();
  },
  _get_synced_storage: function _get_synced_storage() {
    return browser.storage.sync.get();
  },
  _get_history: function _get_history() {
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
  },
  _get_settings: function _get_settings() {
    return browser.storage[this.area_settings].get().then(function (storage) {
      return storage.settings;
    });
  },
  _get_logs: function _get_logs() {
    return browser.storage.local.get().then(function (localStorage) {
      if (!localStorage || !localStorage.logs) return [];
      return localStorage.logs;
    });
  },
  _get_download_option: function _get_download_option() {
    return browser.storage[this.area_settings].get().then(function (storage) {
      if (!storage || !storage.settings) return 'text';
      return storage.settings.history.download;
    });
  },
  _get_markers: function _get_markers() {
    return browser.storage[this.area_settings].get().then(function (storage) {
      return storage.settings.markers;
    });
  },
  _get_shortcuts: function _get_shortcuts() {
    return browser.storage[this.area_settings].get().then(function (storage) {
      return storage.settings.shortcuts;
    });
  }
});

/***/ }),

/***/ "./content/addon-page/bootstrap.js":
/*!*****************************************!*\
  !*** ./content/addon-page/bootstrap.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _store = __webpack_require__(/*! ./_store */ "./content/addon-page/_store.js");

var _store2 = _interopRequireDefault(_store);

var _utils = __webpack_require__(/*! ./../_shared/utils */ "./content/_shared/utils.js");

var _history = __webpack_require__(/*! ./modules/history */ "./content/addon-page/modules/history.js");

var _history2 = _interopRequireDefault(_history);

var _settings = __webpack_require__(/*! ./modules/settings */ "./content/addon-page/modules/settings.js");

var _settings2 = _interopRequireDefault(_settings);

var _logs = __webpack_require__(/*! ./modules/logs */ "./content/addon-page/modules/logs.js");

var _logs2 = _interopRequireDefault(_logs);

var _syncing = __webpack_require__(/*! ./modules/syncing */ "./content/addon-page/modules/syncing.js");

var _syncing2 = _interopRequireDefault(_syncing);

var _import = __webpack_require__(/*! ./modules/import */ "./content/addon-page/modules/import.js");

var _import2 = _interopRequireDefault(_import);

var _contact = __webpack_require__(/*! ./modules/contact */ "./content/addon-page/modules/contact.js");

var _contact2 = _interopRequireDefault(_contact);

var _historyPagination = __webpack_require__(/*! ./modules/history-pagination */ "./content/addon-page/modules/history-pagination.js");

var _historyPagination2 = _interopRequireDefault(_historyPagination);

var _nav = __webpack_require__(/*! ./modules/nav */ "./content/addon-page/modules/nav.js");

var _nav2 = _interopRequireDefault(_nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

new _utils._MODULE({
  events: {
    ENV: {
      'started:app': 'start',
      'updated:settings': 'start',
      'updated:history': 'start'
    }
  },
  allowedHashes: ['news', 'manual', 'settings', 'history', 'contact', 'sync', 'export', 'logs'],
  bootstrapped: false,
  autoinit: function autoinit() {
    var _this = this;

    _store2["default"].get().then(function (storage) {
      if (storage.settings && storage.history) _this.start();
    });
  },
  start: function start() {
    if (!this.bootstrapped) {
      this.bootstrapped = true;
      (0, _history2["default"])();
      (0, _settings2["default"])();
      (0, _logs2["default"])();
      (0, _syncing2["default"])();
      (0, _import2["default"])();
      (0, _contact2["default"])();
      (0, _historyPagination2["default"])();
      this.initMainNav();
    }
  },
  initMainNav: function initMainNav() {
    var tab = window.location.hash.split('=')[1];

    if (this.allowedHashes.includes(tab)) {
      window.document.getElementById('mainnav-' + tab).classList.add('active');
    }

    new _nav2["default"](window.document.getElementById('mainnav'));
  }
});

/***/ }),

/***/ "./content/addon-page/index.js":
/*!*************************************!*\
  !*** ./content/addon-page/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./sass/index.scss */ "./content/addon-page/sass/index.scss");

var _utils = __webpack_require__(/*! ./../_shared/utils */ "./content/_shared/utils.js");

var _utils2 = _interopRequireDefault(_utils);

var _nav = __webpack_require__(/*! ./modules/nav */ "./content/addon-page/modules/nav.js");

var _nav2 = _interopRequireDefault(_nav);

var _toggler = __webpack_require__(/*! ./modules/toggler */ "./content/addon-page/modules/toggler.js");

var _toggler2 = _interopRequireDefault(_toggler);

__webpack_require__(/*! ./port */ "./content/addon-page/port.js");

__webpack_require__(/*! ./_store */ "./content/addon-page/_store.js");

__webpack_require__(/*! ./bootstrap */ "./content/addon-page/bootstrap.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _utils._L10N)();
/* auto-insert current version number */

document.getElementById('version-number').innerText = browser.runtime.getManifest().version;
/* end: auto-insert current version number */

/* configure subnavs */

var subnavs = document.getElementsByClassName('subnav');
var n = subnavs.length;

while (n--) {
  new _nav2["default"](subnavs[n]);
}
/* end: configure navs */

/* configure toggle elements */


var toggleButtons = document.getElementsByClassName('toggle-button'),
    t = toggleButtons.length;

while (t--) {
  new _toggler2["default"](toggleButtons[t]);
}
/* end: configure toggle elements */

/***/ }),

/***/ "./content/addon-page/modules/contact.js":
/*!***********************************************!*\
  !*** ./content/addon-page/modules/contact.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function () {
  return new _utils._MODULE({
    events: {
      ENV: {
        'updated:logs': 'setLogLink'
      }
    },
    autoinit: function autoinit() {
      this.setAddonLinks().setLogLink();
    },
    setAddonLinks: function setAddonLinks() {
      var addonURL = browser.i18n.getMessage('url_moz_addon'),
          addonLinks = document.getElementsByClassName('moz-addon'),
          a = addonLinks.length,
          aL;

      while (a--) {
        aL = addonLinks[a];
        aL.href = addonURL;
        if (aL.id === 'moz-addon--contact') aL.innerText = addonURL;
      }

      return this;
    },
    setLogLink: function setLogLink() {
      var logLink = document.getElementById('log-mail');

      _store2["default"].get('logs').then(function (logs) {
        var l = logs ? logs.length : 0,
            href = 'mailto:undflybir@gmx.de?subject=Textmarker' + encodeURIComponent(' : Error Logs') + '&body=' + encodeURIComponent('- ' + browser.i18n.getMessage('your_msg') + ' -\n\n\nLOGS:\n\n'),
            log;

        while (l--) {
          log = logs[l];
          href += log[1] + (log[2] ? ' (' + log[2] + ')' : '') + ' - ' + encodeURIComponent(new Date(log[0]).toUTCString() + '\n');
        }

        logLink.href = href;
      });
    }
  });
};

var _utils = __webpack_require__(/*! ./../../_shared/utils */ "./content/_shared/utils.js");

var _store = __webpack_require__(/*! ./../_store */ "./content/addon-page/_store.js");

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/***/ }),

/***/ "./content/addon-page/modules/history-pagination.js":
/*!**********************************************************!*\
  !*** ./content/addon-page/modules/history-pagination.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function () {
  return new _utils._DOMMODULE({
    el: document.getElementById('paginator'),
    events: {
      ENV: {
        'saved:entry': 'add',
        'deleted:entries': 'updateFromStorage',
        'filtered:history': 'reset',
        'imported:history': 'updateFromStorage',
        'changed:per-page-count': 'changeCountPerPage'
      },
      DOM: {
        click: {
          '.page': 'goto',
          '.prev': 'prev',
          '.next': 'next'
        }
      }
    },
    numberPages: 1,
    numberEntries: 0,
    currentPage: 1,
    perPage: 10,
    autoinit: function autoinit() {
      this.updateFromStorage();
    },
    "goto": function goto(e, el) {
      var newPage = el.getAttribute('data-page') * 1;

      if (this.currentPage !== newPage) {
        this.emit('paginate:history', newPage);
        this.currentPage = newPage;
        this.render();
      }
    },
    prev: function prev() {
      if (this.currentPage === 1) return;
      this.emit('paginate:history', --this.currentPage);
      this.render();
    },
    next: function next() {
      if (this.currentPage === this.numberPages) return;
      this.emit('paginate:history', ++this.currentPage);
      this.render();
    },
    add: function add() {
      this.update(++this.numberEntries);
    },
    remove: function remove() {
      this.update(--this.numberEntries);
    },
    updateFromStorage: function updateFromStorage() {
      var _this = this;

      _store2["default"].get('settings').then(function (settings) {
        return _this.perPage = settings.history.pp || 10;
      }).then(function () {
        return _store2["default"].get('history').then(function (history) {
          return _this.update(Object.keys(history.entries).length);
        });
      });
    },
    update: function update(l, silent) {
      this.numberEntries = l;
      this.numberPages = l ? Math.ceil(l / this.perPage) : 1;

      if (this.currentPage > this.numberPages) {
        this.currentPage = this.numberPages;
        if (!silent) this.emit('paginate:history', this.currentPage);
      }

      this.render();
    },
    reset: function reset(l) {
      this.currentPage = 1;
      this.update(l);
    },
    render: function render() {
      var ul = document.getElementById('paginator-list');
      var l = this.numberEntries;
      Array.from(ul.getElementsByClassName('page')).forEach(function (li) {
        return li.remove();
      });

      if (l < this.perPage + 1) {
        this.el.classList.add('u-display--none');
        return;
      } else {
        this.el.classList.remove('u-display--none');
      }

      var p = this.currentPage;
      var pages = this.numberPages;
      var r = 7 - (pages - 1 - p);
      var frag = document.createDocumentFragment();
      var next = ul.getElementsByClassName('next')[0];
      var i = Math.max(2, p - 7);
      if (r > 0) i = Math.max(2, Math.min(i, i - r));
      var j = Math.min(pages, i + 14) + 1;
      this.appendButton(frag, 1);

      for (; i < j; i++) {
        this.appendButton(frag, i);
      }

      if (pages > j - 1) this.appendButton(frag, pages);
      ul.insertBefore(frag, next);
    },
    appendButton: function appendButton(frag, b) {
      var btn = document.createElement('li');
      btn.setAttribute('data-page', b);
      btn.appendChild(document.createTextNode(b));
      btn.classList.add('page');
      if (b === this.currentPage) btn.classList.add('active');
      frag.appendChild(btn);
    },
    changeCountPerPage: function changeCountPerPage(p) {
      this.perPage = p;
      this.update(this.numberEntries, true);
    }
  });
};

var _utils = __webpack_require__(/*! ./../../_shared/utils */ "./content/_shared/utils.js");

var _store = __webpack_require__(/*! ./../_store */ "./content/addon-page/_store.js");

var _store2 = _interopRequireDefault(_store);

var _toggler = __webpack_require__(/*! ./toggler */ "./content/addon-page/modules/toggler.js");

var _toggler2 = _interopRequireDefault(_toggler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/***/ }),

/***/ "./content/addon-page/modules/history-sort.js":
/*!****************************************************!*\
  !*** ./content/addon-page/modules/history-sort.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = {
  by: {
    date: {
      created: function created(object) {
        return this._sort(object, 'first');
      },
      last: function last(object) {
        return this._sort(object, 'last');
      },
      _sort: function _sort(object, field) {
        return Object.keys(object).sort(function (a, b) {
          return new Date(object[b][field]) - new Date(object[a][field]);
        });
      }
    },
    name: {
      az: function az(object) {
        return this._sort(object);
      },
      za: function za(object) {
        return this._sort(object).reverse();
      },
      _sort: function _sort(object) {
        return Object.keys(object).sort(function (a, b) {
          return a.toLowerCase().localeCompare(b.toLowerCase());
        });
      }
    }
  }
};

/***/ }),

/***/ "./content/addon-page/modules/history.js":
/*!***********************************************!*\
  !*** ./content/addon-page/modules/history.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function () {
  var _ref;

  return new _utils._DOMMODULE((_ref = {
    el: document.getElementById('history'),
    events: {
      ENV: {
        'opened:tab': 'init',
        'updated:history': 'render',
        'failed:sync-entry': 'undoSyncToggle',
        'paginate:history': 'paginate'
      },
      DOM: {
        click: {
          '.action-button': 'delegateButtonAction',
          '.switch': 'toggleSwitch',
          '.name': 'open',
          '.edit': 'edit',
          '.view': 'view',
          '#search-toggle': 'toggleSearch',
          '#remove-filter': 'removeFilter',
          '.tags__item': 'filter'
        },
        change: {
          '.checkmark-all': 'checkmarkAll',
          '#sort-entries': 'sort',
          '#filter-entries': 'filter',
          '#entries-per-page': 'changeCountPerPage',
          '#set-view': 'setView',
          '#action': 'onChangeAction'
        },
        keyup: {
          '.search-entries': 'search'
        }
      }
    },
    initialized: false,
    names: [],
    entries: {},
    entryTmpl: document.getElementById('entry-template'),
    entriesContainer: document.getElementById('entries'),
    page: 1,
    perPage: 10,
    sorted: 'date-last',
    viewMode: 'list',
    searchTerm: '',
    searched: [],
    tags: [],
    filtered: false,
    filterOptionsSet: false,
    init: function init(tab) {
      if (tab !== 'history') return;
      if (!this.initialized) this.render();
      this.initialized = true;
    },
    resume: function resume() {
      this.filterOptionsSet = false;
      this.tags = [];
    }
  }, _defineProperty(_ref, 'delete', function _delete(names) {
    var msg = 'del_confirm';
    var l = names.length;

    while (l--) {
      if (this.entries[names[l]].locked) {
        msg += '_locked';
        break;
      }
    }

    var confirmed = window.confirm(browser.i18n.getMessage(msg));
    if (confirmed) this.emit('delete:entries', names);
  }), _defineProperty(_ref, "clean", function clean(names) {
    this.emit('clean:entries', names);
  }), _defineProperty(_ref, "download", function download(names, type, spec) {
    var _this = this;

    if (typeof type !== 'string') {
      return _store2["default"].get('download_option').then(function (settings) {
        settings = settings.split(' ');
        type = settings[0];
        spec = settings.length === 2 ? settings[1] : undefined;
        if (type === 'json') _this["export"](names);else _this.download(names, type, spec);
      });
    }

    this.getData(names, type, spec).then(function (data) {
      var text = encodeURIComponent(data),
          link = document.createElement('a');
      link.setAttribute('download', 'Textmarker (' + names.join('_') + ').txt');
      link.href = 'data:text/plain;charset=utf-8,' + text;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }), _defineProperty(_ref, "export", function _export(names) {
    var backup = {
      history: {
        entries: {}
      }
    },
        entries = backup.history.entries,
        link = document.createElement('a');

    _store2["default"].get('history').then(function (history) {
      var name;

      while (names.length) {
        name = names.pop();
        entries[name] = history.entries[name];
      }

      backup = encodeURIComponent(JSON.stringify(backup));
      link.setAttribute('download', 'Textmarker-backup-' + new Date().toLocaleString().replace(/\D/g, '_') + '.json');
      link.href = 'data:text/json;charset=utf-8,' + backup;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }), _defineProperty(_ref, "sync", function sync(name, el) {
    this.emit('sync:entry', name[0], el.classList.contains('active'));
  }), _defineProperty(_ref, "visit", function visit(names) {
    var _this2 = this;

    this.getURLs(names).then(function (urls) {
      return _this2.emit('open:entries', urls, names);
    });
  }), _defineProperty(_ref, "open", function open(e, el) {
    this.emit('open:entries', el.getAttribute('data-url'), el.getAttribute('data-name'));
  }), _defineProperty(_ref, "edit", function edit(e, el) {
    var newName = window.prompt(browser.i18n.getMessage('nm_message_edit'));

    if (newName) {
      var oldName = el.getAttribute('data-name');
      var area = el.parentNode.getElementsByClassName('switch--sync')[0].classList.contains('active') ? 'sync' : 'local';
      this.emit('rename:entry', oldName, newName, area);
    }
  }), _defineProperty(_ref, "view", function view(e, el) {
    this.emit('view:entry', el.getAttribute('data-name'));
  }), _defineProperty(_ref, "tag", function tag(names, _tag, force) {
    var _this3 = this;

    if (!_tag && !force) return;
    var o = {
      sync: [],
      local: []
    };
    names.forEach(function (name) {
      if (_this3.origEntries[name].synced) o.sync.push(name);else o.local.push(name);
    });
    this.emit('tag:entries', o, _tag);
  }), _defineProperty(_ref, "removeTags", function removeTags(names) {
    this.tag(names, '', true);
  }), _defineProperty(_ref, "processSelection", function processSelection() {
    var checked = document.querySelectorAll('.entry-cb:checked'),
        i = checked.length;
    if (!i) return false;
    var action = document.getElementById('action').value,
        names = [];

    while (i--) {
      names.push(checked[i].getAttribute('data-name'));
    }

    if (action === 'tag') {
      var val = document.getElementById('tag').value;
      this.tag(names, val);
    } else {
      var split = document.getElementById('specification').value.split(' '),
          type = split[0],
          spec = split[1];
      !this[action] || this[action](names, type, spec);
    }
  }), _defineProperty(_ref, "renderEntries", function renderEntries() {
    var _this4 = this;

    var template = this.entryTmpl,
        container = this.entriesContainer,
        entries = this.entries,
        searchTerm = this.searchTerm,
        searchTermLength = searchTerm ? searchTerm.length : 0,
        searched = !!searchTerm,
        searchedFullText = this.searchedFullText,
        names = searched ? this.searched : this.names,
        l = searched ? names.length : this.page * this.perPage,
        i = searched ? 0 : l - this.perPage,
        clone,
        entry,
        name,
        nameField,
        input,
        label,
        infoButton,
        details,
        searchResults,
        buttons,
        edit,
        view,
        tags,
        immut,
        immutEl,
        locked,
        lockedEl,
        tagEl,
        b,
        j;

    if (this.filtered) {
      names = names.filter(function (n) {
        return !!entries[n];
      });
    }

    l = Math.min(l, names.length);
    container.innerText = '';
    document.getElementById('checkmark-all').checked = false;
    if (!l) return this;

    for (; i < l; i++) {
      (function (i, j) {
        name = names[i];
        entry = entries[name];

        if (entry) {
          tags = entry.tag ? entry.tag.split(' ') : null;
          locked = entry.locked;
          immut = entry.immut;
          clone = template.cloneNode(true);
          container.appendChild(clone);
          clone.id = 'entry-' + j;
          clone.classList.remove('u-display--none');
          clone.setAttribute('data-name', name);
          nameField = clone.getElementsByClassName('name')[0];
          input = clone.getElementsByTagName('input')[0];
          label = clone.getElementsByTagName('label')[0];
          details = clone.getElementsByClassName('details')[0];
          searchResults = clone.getElementsByClassName('search-results')[0];
          buttons = clone.getElementsByClassName('quick-action');
          edit = clone.getElementsByClassName('edit')[0];
          view = clone.getElementsByClassName('view')[0];
          tagEl = clone.getElementsByClassName('tags')[0];
          lockedEl = clone.getElementsByClassName('locked')[0];
          immutEl = clone.getElementsByClassName('immut')[0];
          b = buttons.length;

          while (b--) {
            buttons[b].setAttribute('data-name', name);
          }

          nameField.appendChild(document.createTextNode(name));
          nameField.setAttribute('data-url', entry.url);
          nameField.setAttribute('data-name', name);
          input.className = 'entry-cb';
          input.id = 'entry-cb-' + j;
          input.setAttribute('data-name', name);
          view.setAttribute('data-name', name);
          label.setAttribute('for', 'entry-cb-' + j);

          if (locked) {
            lockedEl.classList.remove('u-display--none');
          } else {
            edit.classList.remove('u-display--none');
            edit.setAttribute('data-name', name);
          }

          if (immut) immutEl.classList.remove('u-display--none');

          if (tags) {
            tags.forEach(function (tag) {
              var el = document.createElement('span');
              tagEl.appendChild(el);
              el.className = 'tags__item';
              el.appendChild(document.createTextNode(tag));
              el.setAttribute('title', browser.i18n.getMessage('title_filter'));
            });
          } else {
            tagEl.innerText = browser.i18n.getMessage('detail_notag');
          }

          clone.getElementsByClassName('created')[0].innerText = _this4.optimizeDateString(new Date(entry.first).toLocaleString());
          clone.getElementsByClassName('last')[0].innerText = _this4.optimizeDateString(new Date(entry.last).toLocaleString());
          clone.getElementsByClassName('count')[0].innerText = entry.marks.length; //clone.getElementsByClassName('lost')[0].innerText = entry.lost ? entry.lost.length : 0;

          if (entry.synced === undefined || entry.synced) {
            clone.getElementsByClassName('switch--sync')[0].classList.add('active');
          }

          if (searchedFullText) {
            var fullTextSearchResults = _this4.fullTextSearchResults[name];

            if (fullTextSearchResults) {
              var r = 0,
                  res,
                  mark,
                  pos,
                  markText,
                  markTextEl,
                  highlight,
                  t1,
                  t2,
                  t3;

              for (; r < fullTextSearchResults.length; r++) {
                res = fullTextSearchResults[r];
                mark = entry.marks[res.mark];
                pos = res.pos;
                markText = mark.text;
                markTextEl = document.createElement('div');
                t1 = markText.substring(Math.max(pos - 16, 0), pos);
                t2 = markText.substr(pos, searchTermLength);
                t3 = markText.substr(pos + searchTermLength, 16);
                t1 = t1 ? '... ' + t1 : t1;
                t3 = t3 ? t3 + ' ...' : t3;
                highlight = document.createElement('span');
                highlight.className = 'highlight';
                highlight.appendChild(document.createTextNode(t2));
                markTextEl.appendChild(document.createTextNode(t1));
                markTextEl.appendChild(highlight);
                markTextEl.appendChild(document.createTextNode(t3));
                searchResults.appendChild(markTextEl);
              }
            }
          }
        }
      })(i, l - i - 1);
    }

    return this;
  }), _defineProperty(_ref, "toggleHeaderFields", function toggleHeaderFields(l) {
    var _this5 = this;

    var noEntriesHint = document.getElementById('no-entries');
    var search = document.getElementById('search');
    var actions = document.getElementById('history-actions');
    var sort = document.getElementById('sort');
    var filter = document.getElementById('filter');
    var count = document.getElementById('count');
    var view = document.getElementById('view');
    var ppSelect = document.getElementById('entries-per-page');
    var checkall = document.getElementById('checkmark-all-container');
    var meth_0 = !l ? 'remove' : 'add';
    var meth_1 = l > 0 ? 'remove' : 'add';
    var meth_2 = l > 2 ? 'remove' : 'add';
    var meth_3 = l > 10 ? 'remove' : 'add';
    noEntriesHint.classList[meth_0]('u-display--none');
    actions.classList[meth_1]('u-display--none');
    search.classList[meth_2]('u-display--none');
    sort.classList[meth_2]('u-display--none');
    filter.classList[meth_1]('u-display--none');
    count.classList[meth_3]('u-display--none');
    view.classList[meth_1]('u-display--none');
    checkall.classList[meth_2]('u-display--none');
    document.getElementById('entries-count').innerText = l;
    return _store2["default"].get('settings').then(function (settings) {
      var pp = _this5.perPage = settings.history.pp || 10;
      ppSelect.value = pp;
    });
  }), _defineProperty(_ref, "setFilterOptions", function setFilterOptions() {
    var _this6 = this;

    if (this.filterOptionsSet) return this;
    var select = document.getElementById('filter-entries');
    var placeholderOption = document.createElement('option');
    var allTags = [];
    var entries = this.origEntries;
    var tags;
    select.innerText = '';
    select.appendChild(placeholderOption);
    placeholderOption.setAttribute('selected', '');
    placeholderOption.setAttribute('hidden', '');
    placeholderOption.innerText = browser.i18n.getMessage('t5124');

    for (var name in entries) {
      tags = entries[name].tag;
      tags = tags ? tags.split(' ') : [];
      tags.forEach(function (tag) {
        if (!allTags.includes(tag)) allTags.push(tag);
      });
    }

    if (!allTags.length && !document.getElementById('filter-opt-notag')) {
      this.addFilterOpt('', browser.i18n.getMessage('detail_notag'), {
        disabled: true,
        id: 'filter-opt-notag'
      });
    } else {
      allTags.forEach(function (tag) {
        return _this6.addFilterOpt(tag, tag);
      });

      if (!document.getElementById('filter-opt-tagless')) {
        this.addFilterOpt('', browser.i18n.getMessage('t5125'), {
          id: 'filter-opt-tagless'
        });
      }
    }

    this.filterOptionsSet = true;
  }), _defineProperty(_ref, "addFilterOpt", function addFilterOpt(tag, text, attrs) {
    if (this.tags.includes(tag)) return this;
    var select = document.getElementById('filter-entries');
    var opt = document.createElement('option');
    select.appendChild(opt);
    opt.value = tag;
    opt.innerText = text;

    if (attrs) {
      for (var a in attrs) {
        opt.setAttribute(a, attrs[a]);
      }
    }

    if (!this.tags.length && tag) {
      var notagFilterOpt = document.getElementById('filter-opt-notag');
      if (notagFilterOpt) select.removeChild(notagFilterOpt);

      if (!document.getElementById('filter-opt-tagless')) {
        this.addFilterOpt('', browser.i18n.getMessage('t5125'), {
          id: 'filter-opt-tagless'
        });
      }
    }

    if (tag) this.tags.push(tag);
  }), _defineProperty(_ref, "getText", function getText(names, spec) {
    var _this7 = this;

    var all_marks_plus_meta = spec === '+meta',
        all_marks_plus_lost = spec === '+lost',
        all_marks_plus_meta_and_notes = spec === '+notes',
        all_marks_lost = spec === 'lost',
        defaultMarkers = ['m', '2', '3', 2, 3],
        reject = defaultMarkers.includes(spec) ? function (key) {
      return key != spec;
    } : spec === 'c' ? function (key) {
      return defaultMarkers.includes(key);
    } : null,
        newLine = '\r\n',
        newLines = '\r\n\r\n',
        note = browser.i18n.getMessage('note'),
        text = '',
        l = names.length,
        i = 0,
        noteText,
        entry,
        marks,
        mark,
        lost,
        name,
        m,
        n,
        j;
    return _store2["default"].get('history').then(function (history) {
      var entries = history.entries;

      for (; i < l; i++) {
        name = names[i];
        entry = entries[name];
        marks = entry.marks;
        lost = entry.lost;
        m = marks.length;
        n = lost.length;

        if (!all_marks_lost) {
          if (all_marks_plus_meta || all_marks_plus_meta_and_notes) {
            text += name + newLine + 'URL: ' + entry.url + newLine + browser.i18n.getMessage('page_title') + ': ' + entry.title + newLine + browser.i18n.getMessage('created') + ': ' + _this7.optimizeDateString(new Date(entry.first).toLocaleString()) + newLine + browser.i18n.getMessage('last_modified') + ': ' + _this7.optimizeDateString(new Date(entry.last).toLocaleString()) + newLine + newLines;
          }

          for (j = 0; j < m; j++) {
            mark = marks[j];
            if (reject && reject(mark.key)) continue;

            if (all_marks_plus_meta_and_notes) {
              text += '---' + newLine;
            }

            text += mark.text.replace(/\n/g, '\r\n') + newLines;

            if (all_marks_plus_meta_and_notes && mark.note) {
              noteText = mark.note.text || mark.note;
              text += '  ' + note + ':' + newLine + '  ' + noteText.replace(/\n/g, '\r\n  ') + newLines;
            }
          }
        }

        if (all_marks_lost || all_marks_plus_lost) {
          text += newLines + browser.i18n.getMessage('lost_marks') + ':' + newLines + newLines;

          for (j = 0; j < n; j++) {
            mark = lost[j];
            text += mark.text.replace(/\n/g, '\r\n') + newLines;
          }
        }

        text += newLines + newLines + newLines;
      }

      return text.trim();
    });
  }), _defineProperty(_ref, "getData", function getData(names, type, spec) {
    var _this8 = this;

    if (type === 'text') return this.getText(names, spec);
    return _store2["default"].get('history').then(function (history) {
      var entries = _this8.origEntries = history.entries,
          l = names.length,
          data = '',
          newLines = '\r\n\r\n',
          i = 0;

      for (; i < l; i++) {
        data += entries[names[i]][type] + newLines;
      }

      return data;
    });
  }), _defineProperty(_ref, "getURLs", function getURLs(names) {
    return _store2["default"].get('history').then(function (history) {
      var entries = history.entries,
          urls = [],
          l = names.length,
          i = 0;

      for (; i < l; i++) {
        urls.push(entries[names[i]].url);
      }

      return urls;
    });
  }), _defineProperty(_ref, "optimizeDateString", function optimizeDateString(date) {
    return date.replace(/^(\d{1})(\D{1})/, function (m, p, q) {
      return '0' + p + q;
    }).replace(/(\D{1})(\d{1}\D{1})/g, function (m, p, q) {
      return p + '0' + q;
    });
  }), _defineProperty(_ref, "search", function search(e, el) {
    var term = el.value.toLowerCase();
    var searchType = el.getAttribute ? el.getAttribute('data-type') : '';
    var countSelect = document.getElementById('count');
    var classMeth = term ? 'add' : 'remove';
    var toggle = document.getElementById('search-toggle');
    this.setupSearch(term, searchType).renderEntries();
    countSelect.classList[classMeth]('u-display--none');
    toggle.classList[classMeth]('active');
  }), _defineProperty(_ref, "setupSearch", function setupSearch(term, searchType) {
    term = typeof term === 'string' ? term : this.searchTerm;
    var history = this.el;
    var searchCount = document.getElementById('search-count');
    this.searched = [];
    this.searchTerm = term;

    if (!term) {
      history.classList.remove('searched');
      history.classList.remove('searched--full-text');
      searchCount.innerText = '';
      this.searchedFullText = false;
      return this;
    } else {
      history.classList.add('searched');

      if (searchType === 'full-text') {
        history.classList.add('searched--full-text');
        this.searchFullText(term);
        this.searchedFullText = true;
      } else {
        history.classList.remove('searched--full-text');
        this.searchByName(term);
        this.searchedFullText = false;
      }

      searchCount.innerText = this.searched.length || '';
    }

    return this;
  }), _defineProperty(_ref, "searchByName", function searchByName(term) {
    var names = this.names;
    var l = names.length,
        i = 0,
        name;

    for (; i < l; i++) {
      name = names[i];

      if (name.toLowerCase().search(term) !== -1) {
        this.searched.push(name);
      }
    }
  }), _defineProperty(_ref, "searchFullText", function searchFullText(text) {
    var entries = this.origEntries;
    var name, marks, i, markText, pos, found;
    var results = this.fullTextSearchResults = {};

    for (name in entries) {
      marks = entries[name].marks;
      found = false;

      for (i = 0; i < marks.length; i++) {
        markText = marks[i].text;
        pos = markText.toLowerCase().search(text);

        if (pos !== -1) {
          found = true;
          results[name] = results[name] || [];
          results[name].push({
            mark: i,
            pos: pos
          });
        }
      }

      if (found) {
        this.searched.push(name);
      }
    }
  }), _defineProperty(_ref, "toggleSearch", function toggleSearch(e, el) {
    if (el.classList.contains('active')) {
      document.getElementById('search-entries--name').value = '';
      document.getElementById('search-entries--full-text').value = '';
      if (this.searchTerm) this.search(null, {
        value: ''
      });
    }
  }), _defineProperty(_ref, "changeCountPerPage", function changeCountPerPage(e, el) {
    var p = this.perPage = el.value * 1;
    this.page = 1;
    this.emit('changed:per-page-count', p);
    this.renderEntries();
  }), _defineProperty(_ref, "setView", function setView(e, el) {
    var table = document.getElementById('entries');
    var val = el.value;
    if (val === 'list') table.classList.remove('detailed-list');else table.classList.add('detailed-list');
    this.emit('change:view-setting', val);
  }), _defineProperty(_ref, "setupView", function setupView(view) {
    document.getElementById('set-view').value = view;
    this.setView(null, {
      value: view
    });
  }), _defineProperty(_ref, "onChangeAction", function onChangeAction(e, el) {
    if (el.value === 'tag') setTimeout(function () {
      return document.getElementById('tag').focus();
    }, 0);
  }), _defineProperty(_ref, "sort", function sort(e, el) {
    var sorted = this.sorted = el.value;
    this.emit('change:sort-setting', sorted);
    this.setupSort(sorted).renderEntries();
  }), _defineProperty(_ref, "setupSort", function setupSort(sorted) {
    sorted = sorted.split('-');
    this.names = _historySort2["default"].by[sorted[0]][sorted[1]](this.origEntries);
    this.sortSearchResults();
    return this;
  }), _defineProperty(_ref, "filter", function filter(e, el) {
    var filter = el.nodeName === 'SPAN' ? el.firstChild.data : el.value;
    var entries = this.origEntries;
    var filteredEntries = {};
    var entry,
        rx,
        c = 0;
    document.getElementById('filter').classList.add('active');

    for (var name in entries) {
      entry = entries[name];
      rx = new RegExp('^' + filter + '$|^' + filter + '\\s|\\s' + filter + '\\s|\\s' + filter + '$', 'g');

      if (filter && entry.tag && entry.tag.search(rx) !== -1 || !entry.tag && filter == '') {
        filteredEntries[name] = entry;
        c++;
      }
    }

    this.entries = filteredEntries;
    this.filtered = true;
    this.page = 1;
    this.renderEntries();
    this.emit('filtered:history', c);
  }), _defineProperty(_ref, "removeFilter", function removeFilter(e, el) {
    el.parentNode.classList.remove('active');
    document.getElementById('filter-entries').selectedIndex = 0;
    this.entries = this.origEntries;
    this.filtered = false;
    this.page = 1;
    this.renderEntries();
    this.emit('filtered:history', this.names.length);
  }), _defineProperty(_ref, "sortSearchResults", function sortSearchResults() {
    if (!this.searched.length) return;
    var names = this.names;
    this.searched.sort(function (a, b) {
      a = names.indexOf(a);
      b = names.indexOf(b);
      if (a == b) return 0;
      return a < b ? -1 : 1;
    });
  }), _defineProperty(_ref, "checkmarkAll", function checkmarkAll(e, el) {
    var directly = typeof el === 'boolean',
        checked = directly ? el : el.checked,
        inputs = document.getElementById('entries').getElementsByTagName('input'),
        i = inputs.length;

    while (i--) {
      inputs[i].checked = checked;
    }

    return false;
  }), _defineProperty(_ref, "delegateButtonAction", function delegateButtonAction(e, el) {
    var action = el.getAttribute('data-action'),
        name = el.getAttribute('data-name');
    name = name ? [name] : undefined;
    !this[action] || this[action](name, el);
  }), _defineProperty(_ref, "toggleSwitch", function toggleSwitch(e, el) {
    el = el.classList.contains('switch--sync') ? el : el.parentNode;
    el.classList.toggle('active');
    this.delegateButtonAction(e, el);
  }), _defineProperty(_ref, "undoSyncToggle", function undoSyncToggle(name) {
    document.querySelector('.switch--sync[data-name="' + name + '"]').classList.toggle('active');
  }), _defineProperty(_ref, "render", function render() {
    var _this9 = this;

    this.resume();

    _store2["default"].get().then(function (storage) {
      var entries = _this9.entries = _this9.origEntries = storage.history.entries,
          sorted = storage.settings.history.sorted || _this9.sorted,
          view = storage.settings.history.view || _this9.viewMode,
          l;
      _this9.sorted = sorted;

      _this9.setupSort(sorted);

      _this9.setupView(view);

      l = _this9.names.length;

      _this9.setupSearch().toggleHeaderFields(l).then(function () {
        return _this9.renderEntries().setFilterOptions();
      });
    });
  }), _defineProperty(_ref, "paginate", function paginate(page) {
    this.page = page;
    this.renderEntries();
  }), _defineProperty(_ref, "updateEntry", function updateEntry(entry) {
    var el = document.querySelector('.entry[data-name="' + entry.name + '"]');
    el.getElementsByClassName('created')[0].innerText = entry.first;
    el.getElementsByClassName('last')[0].innerText = entry.last;
    el.getElementsByClassName('count')[0].innerText = entry.marks.length; //el.getElementsByClassName('lost')[0].innerText = entry.lost.length;
  }), _ref));
};

var _utils = __webpack_require__(/*! ./../../_shared/utils */ "./content/_shared/utils.js");

var _store = __webpack_require__(/*! ./../_store */ "./content/addon-page/_store.js");

var _store2 = _interopRequireDefault(_store);

var _toggler = __webpack_require__(/*! ./toggler */ "./content/addon-page/modules/toggler.js");

var _toggler2 = _interopRequireDefault(_toggler);

var _historySort = __webpack_require__(/*! ./history-sort */ "./content/addon-page/modules/history-sort.js");

var _historySort2 = _interopRequireDefault(_historySort);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/***/ }),

/***/ "./content/addon-page/modules/import.js":
/*!**********************************************!*\
  !*** ./content/addon-page/modules/import.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function () {
  return new _utils._DOMMODULE({
    el: document.getElementById('export'),
    events: {
      ENV: {
        'updated:settings': 'updateExportLinks',
        'updated:history': 'updateExportLinks',
        'toggled:sync': 'updateExportLinks',
        'synced:entry': 'updateExportLinks'
      },
      DOM: {
        click: {
          '.import-button': 'triggerFileInput'
        },
        change: {
          '.import-file': 'handleFile'
        },
        mousedown: {
          '.export-button': 'updateExportName'
        }
      }
    },
    autoinit: function autoinit() {
      this.updateExportLinks();
    },
    "import": function _import(storeString, type) {
      var parsedString;

      try {
        parsedString = JSON.parse(storeString);
      } catch (e) {
        return this.displayFailure(browser.i18n.getMessage('error_file_parse'));
      }

      if (parsedString) {
        this.emit('import:storage', parsedString, type);
        this.displayFailure('');
      }
    },
    triggerFileInput: function triggerFileInput(e, el) {
      document.getElementById('import--' + el.getAttribute('data-type')).click();
    },
    handleFile: function handleFile(e, el) {
      var reader = new FileReader(),
          file = el.files[0],
          size = file.size / 1000000,
          type = el.getAttribute('data-type'),
          mod = this;
      if (size > 50) return this.displayFailure(browser.i18n.getMessage('error_file_size'));
      if (type === 'sync' && size > 0.099) return this.displayFailure(browser.i18n.getMessage('error_file_size_sync'));
      if (file.name.split('.').pop() !== 'json') return this.displayFailure(browser.i18n.getMessage('error_file_format'));

      reader.onload = function (file) {
        return function (e) {
          mod["import"](e.target.result, type);
        };
      }(file);

      reader.readAsText(file);
    },
    displayFailure: function displayFailure(reason) {
      document.getElementById('import-error').innerText = reason;
    },
    updateExportLinks: function updateExportLinks() {
      var localDataLink = document.getElementById('export-local');
      var syncedDataLink = document.getElementById('export-synced');

      _store2["default"].get('local_storage').then(function (storage) {
        localDataLink.href = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(storage));
      }).then(function () {
        return _store2["default"].get('synced_storage').then(function (storage) {
          syncedDataLink.href = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(storage));
        });
      });
    },
    updateExportName: function updateExportName(e, el) {
      el.parentNode.setAttribute('download', 'Textmarker-data-' + el.getAttribute('data-type') + '-' + new Date().toLocaleString().replace(/\D/g, '_') + '.json');
    }
  });
};

var _utils = __webpack_require__(/*! ./../../_shared/utils */ "./content/_shared/utils.js");

var _store = __webpack_require__(/*! ./../_store */ "./content/addon-page/_store.js");

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/***/ }),

/***/ "./content/addon-page/modules/logs.js":
/*!********************************************!*\
  !*** ./content/addon-page/modules/logs.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function () {
  return new _utils._DOMMODULE({
    el: document.getElementById('logs'),
    events: {
      ENV: {
        'updated:logs': 'log'
      },
      DOM: {
        click: {
          '#clear-logs': 'clear'
        }
      }
    },
    autoinit: function autoinit() {
      this.log();
    },
    log: function log() {
      var _this = this;

      _store2["default"].get('logs').then(function (logs) {
        logs = logs || [];

        var tableBody = _this.el.getElementsByTagName('tbody')[0],
            l = logs.length,
            frag = document.createDocumentFragment(),
            tr,
            td_date,
            td_msg,
            node_date,
            node_msg,
            log,
            time,
            msg,
            reason;

        if (l) {
          _this.el.classList.remove('nologs');

          while (l--) {
            log = logs[l];
            msg = log[1];
            if (typeof msg === 'number') msg = browser.i18n.getMessage(_logKeys2["default"].getKeyByValue(log[1])); //'nu',{year:'numeric',month:'2-digit',day:'2-digit',hour:'numeric',second:'numeric',minute:'numeric'}

            time = _this.optimizeDateString(new Date(log[0]).toLocaleString());
            tr = document.createElement('tr');
            td_date = document.createElement('td');
            td_msg = document.createElement('td');
            node_date = document.createTextNode(time);
            node_msg = document.createTextNode(msg);
            td_date.appendChild(node_date);
            td_msg.appendChild(node_msg);

            if (log[2]) {
              reason = document.createElement('div'); //reason.appendChild(document.createTextNode(log[2]));

              reason.innerText = log[2];
              td_msg.appendChild(reason);
            }

            tr.appendChild(td_date);
            tr.appendChild(td_msg);
            frag.appendChild(tr);
          }

          tableBody.innerText = '';
          tableBody.appendChild(frag);
        } else {
          _this.el.classList.add('nologs');
        }
      });
    },
    clear: function clear() {
      this.emit('clear:logs');
    },
    optimizeDateString: function optimizeDateString(date) {
      return date.replace(/^(\d{1})(\D{1})/, function (m, p, q) {
        return '0' + p + q;
      }).replace(/(\D{1})(\d{1}\D{1})/g, function (m, p, q) {
        return p + '0' + q;
      });
    }
  });
};

var _utils = __webpack_require__(/*! ./../../_shared/utils */ "./content/_shared/utils.js");

var _store = __webpack_require__(/*! ./../_store */ "./content/addon-page/_store.js");

var _store2 = _interopRequireDefault(_store);

var _logKeys = __webpack_require__(/*! ../../../data/log-keys */ "./data/log-keys.js");

var _logKeys2 = _interopRequireDefault(_logKeys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/***/ }),

/***/ "./content/addon-page/modules/marker.js":
/*!**********************************************!*\
  !*** ./content/addon-page/modules/marker.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = undefined;

var _store = __webpack_require__(/*! ./../_store */ "./content/addon-page/_store.js");

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _MARKER =
/*#__PURE__*/
function () {
  function _MARKER(key, customBgColor) {
    var _this = this;

    _classCallCheck(this, _MARKER);

    this.key = key;
    this.styles = {
      'background-color': customBgColor,
      'color': undefined,
      'border-bottom': undefined,
      'font-size': undefined,
      'font-family': undefined,
      'font-weight': undefined,
      'font-style': undefined,
      'text-decoration': undefined,
      'text-shadow': undefined
    };
    this.shadow = {
      x: '1px',
      y: '1px',
      blur: '1px',
      color: '#000000'
    };
    this.init().then(function () {
      return _this.inject().preview();
    });
  }

  _createClass(_MARKER, [{
    key: "init",
    value: function init() {
      var _this2 = this;

      return _store2["default"].get('markers').then(function (markers) {
        var marker = markers[_this2.key];
        var existingStyle = marker ? marker.style : null;
        _this2.autonote = marker && marker.autonote ? true : false;
        if (!existingStyle) _this2.setStyle();else _this2.style = existingStyle;

        var styles = _this2.style.split(';'),
            i = styles.length,
            style,
            styleSplit,
            textShadow;

        while (i--) {
          style = styles[i];

          if (style) {
            styleSplit = style.split(':');
            _this2.styles[styleSplit[0]] = styleSplit[1];
          }
        }

        if ((textShadow = _this2.styles['text-shadow']) && textShadow !== 'none') {
          var shadowSplit = textShadow.split(' ');
          _this2.shadow.x = shadowSplit[0];
          _this2.shadow.y = shadowSplit[1];
          _this2.shadow.blur = shadowSplit[2];
          _this2.shadow.color = shadowSplit[3];
        }
      });
    }
  }, {
    key: "inject",
    value: function inject() {
      var marker = this,
          styles = this.styles,
          bgInput = document.getElementById('bg-color'),
          colorInput = document.getElementById('text-color'),
          borderInput = document.getElementById('border-color'),
          autonoteInput = document.getElementById('autonote-color'),
          bg = styles['background-color'],
          color = styles['color'],
          border = styles['border-bottom'],
          autonoteColor = this.autonote || '',
          shadow,
          shadowSelect,
          i;
      document.getElementById('auto-note').checked = this.autonote;
      autonoteInput.value = autonoteColor || 'yellow';
      autonoteInput.disabled = !autonoteColor;
      document.getElementById('bg-color-checkbox').checked = !!bg;
      bgInput.value = bg || '#ffffff';
      bgInput.disabled = !bg;
      document.getElementById('text-color-checkbox').checked = !!color;
      colorInput.value = color || '#000000';
      colorInput.disabled = !color;
      document.getElementById('border-color-checkbox').checked = !!border;
      borderInput.value = border || '1px solid #ff0000';
      borderInput.disabled = !border;
      ['font-size', 'font-family', 'font-weight', 'font-style', 'text-decoration'].forEach(function (prop) {
        document.getElementById(prop).value = styles[prop] || 'default';
      });
      shadowSelect = document.getElementById('text-shadow');
      shadow = styles['text-shadow'];
      i = !shadow ? 0 : shadow === 'none' ? 2 : 1;
      shadowSelect.selectedIndex = i;
      shadowSelect.children[i].click();
      ['x', 'y', 'blur', 'color'].forEach(function (prop) {
        document.getElementById('text-shadow-' + prop).value = marker.shadow[prop].replace('px', '');
      });
      return this;
    }
  }, {
    key: "preview",
    value: function preview() {
      document.getElementById('example').style = this.style;
      return this;
    }
  }, {
    key: "update",
    value: function update(el) {
      var classes = el.classList,
          prop = el.name,
          val;

      if (classes.contains('css-color')) {
        if (el.checked) {
          val = document.getElementById(el.getAttribute('data-target')).value;
          if (!this.isValid(prop, val)) return false;
          this.styles[prop] = prop === 'border-bottom' ? '1px solid ' + val : val;
        } else {
          this.styles[prop] = undefined;
        }
      } else if (classes.contains('shadow')) {
        val = el.value;
        if (val === 'default' || !this.isValid(prop, val)) this.styles[prop] = '';else {
          var marker = this;

          switch (val) {
            case 'none':
              marker.styles['text-shadow'] = 'none';
              break;

            case 'default':
              marker.styles['text-shadow'] = undefined;
              break;

            case 'shadow':
              marker.setShadow();
              break;

            default:
              return false;
          }
        }
      } else if (classes.contains('shadow-value')) {
        val = el.value;
        if (!this.isValid(prop, val)) this.styles[prop] = '';else {
          if (classes.contains('shadow-px-value')) val += 'px';
          this.shadow[prop] = val;
          this.setShadow();
        }
      } else if (prop === 'border-bottom') {
        val = '1px solid ' + el.value;
        this.styles[prop] = val;
      } else {
        val = el.value;
        if (val === 'default' || !this.isValid(prop, val)) this.styles[prop] = '';else this.styles[prop] = val;
      }

      return this.setStyle().preview();
    }
  }, {
    key: "isValid",
    value: function isValid(prop, val) {
      var valid;

      switch (prop) {
        case 'background-color':
          valid = /^#[0-9A-F]{6}$/i.test(val);
          break;

        case 'color':
          valid = /^#[0-9A-F]{6}$/i.test(val);
          break;

        case 'border-bottom':
          valid = /^#[0-9A-F]{6}$/i.test(val);
          break;

        case 'font-size':
          valid = /^[0-9]{1,2}px$/.test(val);
          break;

        case 'font-family':
          valid = /^[a-z,\s-]{5,40}$/i.test(val);
          break;

        case 'font-weight':
          valid = /^[a-z]{4,7}$/i.test(val);
          break;

        case 'font-style':
          valid = /^[a-z]{4,7}$/i.test(val);
          break;

        case 'text-decoration':
          valid = /^[a-z-]{7,12}$/i.test(val);
          break;

        case 'text-shadow':
          valid = /^[a-z]{4,7}$/i.test(val);
          break;

        case 'x':
          valid = /^\d$/;
          break;

        case 'y':
          valid = /^\d$/;
          break;

        case 'blur':
          valid = /^\d$/;
          break;

        default:
          valid = false;
      }

      return valid;
    }
  }, {
    key: "setShadow",
    value: function setShadow() {
      this.styles['text-shadow'] = this.shadow.x + ' ' + this.shadow.y + ' ' + this.shadow.blur + ' ' + this.shadow.color;
    }
  }, {
    key: "setStyle",
    value: function setStyle() {
      var style = '',
          val;

      for (var i in this.styles) {
        val = this.styles[i];
        if (val) style += i + ':' + val + ';';
      }

      this.style = style;
      return this;
    }
  }]);

  return _MARKER;
}();

exports["default"] = _MARKER;

/***/ }),

/***/ "./content/addon-page/modules/nav.js":
/*!*******************************************!*\
  !*** ./content/addon-page/modules/nav.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function (el) {
  return new _utils._DOMMODULE({
    el: el,
    events: {
      DOM: {
        click: {
          'li': 'toggle'
        }
      }
    },
    pageNav: null,
    current: null,
    autoinit: function autoinit() {
      this.pageNav = el.hasAttribute('data-page-nav');
      var current = this.current = el.getElementsByClassName('active')[0];
      this.open(current);
    },
    toggle: function toggle(e, el) {
      if (el.classList.contains('disabled') || this.current == el) return false;
      if (this.current) this.close(this.current);
      this.open(el);
    },
    open: function open(el) {
      var targetId = el.getAttribute('data-target');
      el.classList.add('active');
      document.getElementById(targetId).classList.remove('u-display--none');
      this.emit('opened:tab', targetId);
      this.current = el;
      if (this.pageNav) window.document.title = 'Textmarker - ' + browser.i18n.getMessage(targetId);
    },
    close: function close(el) {
      el.classList.remove('active');
      document.getElementById(el.getAttribute('data-target')).classList.add('u-display--none');
    }
  });
};

var _utils = __webpack_require__(/*! ./../../_shared/utils */ "./content/_shared/utils.js");

/***/ }),

/***/ "./content/addon-page/modules/settings.js":
/*!************************************************!*\
  !*** ./content/addon-page/modules/settings.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function () {
  return new _utils._DOMMODULE({
    el: document.getElementById('settings'),
    events: {
      ENV: {
        'imported:settings': 'update',
        'updated:bg-color-settings': 'update',
        'updated:custom-search-settings': 'showCustomSearchSettingSuccess',
        'toggled:sync-settings': 'update'
      },
      DOM: {
        change: {
          '.css': 'changeStyle',
          '#customized-key': 'updateMarker',
          '#add-key': 'addMarker',
          '#remove-key': 'removeMarker',
          '.mark-opt': 'changeMarkMethod',
          '.sc-cb': 'toggleShortcut',
          '.shortcut-select': 'changeShortcut',
          '.save-opt': 'changeSaveOpt',
          '.naming-opt': 'changeNamingOpt',
          '#notes-new': 'toggleSaveNoteOpt',
          '.customize-quickbuttons': 'changeQuickbuttonOpt',
          '.download-quickbutton-opt': 'switchQuickbuttonOpt',
          '.ctm-cb': 'toggleCtm',
          '.notes-cb': 'toggleNotes',
          '.misc-cb': 'toggleMisc',
          '.tbbpower-opt': 'toggleTBBPowerOpt',
          '.tmuipos': 'changeTmuiPositionOpt',
          '#private-save': 'togglePrivSave',
          '#auto-note': 'toggleAutoNoteOpt',
          '#immut': 'toggleImmutOpt',
          '#drop-losses': 'toggleDropLossesOpt',
          '#autonote-color': 'changeAutoNoteOpt',
          '#ignore-hash': 'changeHashOpt',
          '#addon-autocs': 'toggleAutocsOpt'
        },
        click: {
          '#custom-search': 'changeCustomSearch',
          '.custom-search-input': 'hideCustomSearchSettingSuccess'
        }
      }
    },
    allowedKeys: 'a b c d e f g h i j k l n o p q r s t u v x y z 0 1 4 5 6 7 8 9 enter - +'.split(' '),
    allowedShortcuts: ['', 'ctrlKey', 'shiftKey', 'altKey', 'ctrlKey-shiftKey', 'ctrlKey-altKey', 'shiftKey-altKey', 'metaKey', 'metaKey-shiftKey', 'metaKey-altKey'],
    allowedQuickbuttonOpts: ['title', 'url', 'text', 'text +meta', 'text +notes', 'text +lost', 'text m', 'text 2', 'text 3', 'text c', 'text lost'],
    markerKeys: ['m', '2', '3'],
    customMarkerKeys: [],
    marker: null,
    customSearch: browser.i18n.getMessage('lng') + '.wikipedia.org/wiki/',
    autoinit: function autoinit() {
      this.init();
    },
    init: function init() {
      var _this = this;

      _store2["default"].get('settings').then(function (settings) {
        var markers = settings.markers,
            markerKeys = _this.markerKeys,
            customMarkerKeys = _this.customMarkerKeys,
            i,
            key;

        for (key in markers) {
          i = key.toLowerCase();
          if (!markerKeys.includes(i) && !customMarkerKeys.includes(i)) _this.customMarkerKeys.push(i);
        }

        _this.renderMarkerSelectOptions().updateMarker(_this.marker ? _this.marker.key : 'm').injectSettings(settings);
      });
    },
    resume: function resume() {
      Array.prototype.slice.call(document.getElementsByClassName('custom-key')).forEach(function (el) {
        return el.remove();
      });
      Array.prototype.slice.call(document.getElementsByClassName('custom-marker-option')).forEach(function (el) {
        return el.remove();
      });
      this.customMarkerKeys = [];
      return this;
    },
    update: function update() {
      this.resume().init();
    },
    updateMarker: function updateMarker(e, el, customBgColor) {
      var key = el ? el.value : e ? e : this.marker ? this.marker.key : 'm';
      this.marker = new _marker2["default"](key, customBgColor);
      return this;
    },
    renderMarkerSelectOptions: function renderMarkerSelectOptions() {
      var keySelect = document.getElementById('customized-key'),
          keyIcons = document.getElementById('custom-keys'),
          addKeySelect = document.getElementById('add-key'),
          removeKeySelect = document.getElementById('remove-key'),
          allowedKeys = this.allowedKeys,
          customMarkerKeys = this.customMarkerKeys,
          a = allowedKeys.length,
          c = customMarkerKeys.length,
          i = 0,
          fragment1 = document.createDocumentFragment(),
          fragment2 = document.createDocumentFragment(),
          fragment3 = document.createDocumentFragment(),
          fragment4 = document.createDocumentFragment(),
          option,
          icon,
          val,
          Val;

      for (; i < c; i++) {
        val = customMarkerKeys[i];
        Val = val.toUpperCase();
        Val = Val === 'ENTER' ? String.fromCharCode(0x21B5) : Val;
        option = document.createElement('option');
        fragment1.appendChild(option);
        option.value = val;
        option.innerText = val.toUpperCase();
        option.className = 'custom-marker-option custom-marker-option-' + val;
        fragment3.appendChild(option.cloneNode(true));
        icon = document.createElement('div');
        fragment2.appendChild(icon);
        icon.className = 'key custom-key';
        icon.id = 'custom-key-' + val;
        icon.innerText = Val;
      }

      keySelect.appendChild(fragment1);
      keyIcons.appendChild(fragment2);
      removeKeySelect.appendChild(fragment3);

      for (i = 0; i < a; i++) {
        val = allowedKeys[i].toLowerCase();
        if (customMarkerKeys.includes(val)) continue;
        Val = val.toUpperCase();
        option = document.createElement('option');
        fragment4.appendChild(option);
        option.value = val;
        option.innerText = Val;
        option.className = 'custom-marker-option custom-marker-option-' + val;
      }

      addKeySelect.appendChild(fragment4);
      return this;
    },
    injectSettings: function injectSettings(settings) {
      var shortcuts = settings.shortcuts,
          i,
          scCheckbox,
          scSelect,
          cmCheckbox,
          sc;

      for (i in shortcuts) {
        sc = shortcuts[i];
        scCheckbox = document.getElementById('sc-' + i);
        scSelect = document.getElementById('shortcut-select-' + i);
        cmCheckbox = document.getElementById('cm-' + i);
        if (scCheckbox) scCheckbox.checked = sc[1];
        if (scSelect) scSelect.value = sc[0];
        if (cmCheckbox) cmCheckbox.checked = sc[2];
      }

      var historySettings = settings.history,
          saveOpts = document.getElementsByName('save-opt');
      if (historySettings.autosave) saveOpts[0].checked = true;else saveOpts[1].checked = true;
      document.getElementById('name-' + historySettings.naming).checked = true;
      document.getElementById('private-save').checked = historySettings.saveInPriv;
      document.getElementById('immut').checked = historySettings.immut;
      document.getElementById('drop-losses').checked = historySettings.dropLosses;
      document.getElementById('notes-new').checked = historySettings.saveNote;
      document.getElementById('ignore-hash').checked = !historySettings.ignoreHash;

      if (historySettings.download === 'json') {
        document.getElementById('download-json').checked = true;
      } else {
        document.getElementById('download-text').checked = true;
        document.getElementById('quickbutton-download-select').value = historySettings.download;
      }

      var miscSettings = settings.misc;
      document.getElementById('mark-method--' + miscSettings.markmethod).checked = true;
      document.getElementById('misc-bm').checked = miscSettings.bmicon;
      document.getElementById('misc-noteicon').checked = miscSettings.noteicon;
      document.getElementById('misc-noteonclick').checked = miscSettings.noteonclick;
      document.getElementById('misc-notetransp').checked = miscSettings.notetransp;
      document.getElementById('misc-noteplainview').checked = miscSettings.noteplainview;
      document.getElementById('notes-restoration-failure').checked = miscSettings.failureNote;
      document.getElementById('notes-restoration-success').checked = miscSettings.successNote;
      document.getElementById('notes-pbm').checked = miscSettings.pbmNote;
      document.getElementById('notes-error').checked = miscSettings.errorNote;
      document.getElementById('custom-search--start').value = miscSettings.customSearch ? miscSettings.customSearch[0] : this.customSearch;
      document.getElementById('custom-search--end').value = miscSettings.customSearch ? miscSettings.customSearch[1] : '';
      document.getElementById('tmuipos--noteicon').value = miscSettings.tmuipos;
      document.getElementById('tmuipos--bmicon').value = miscSettings.tmuipos;

      if (miscSettings.tbbpower) {
        document.getElementById('tbbpower-on').checked = true;
      } else {
        document.getElementById('tbbpower-off').checked = true;
      }

      document.getElementById('addon-autocs').checked = settings.addon.autocs;
    },
    showCustomSearchSettingSuccess: function showCustomSearchSettingSuccess() {
      document.getElementById('custom-search--submitted').classList.remove('u-display--none');
    },
    hideCustomSearchSettingSuccess: function hideCustomSearchSettingSuccess() {
      document.getElementById('custom-search--submitted').classList.add('u-display--none');
    },
    changeStyle: function changeStyle(e, el) {
      var marker = this.marker.update(el);
      this.emit('change:style-setting', marker.key, marker.style);
    },
    toggleAutoNoteOpt: function toggleAutoNoteOpt(e, el) {
      var val = el.checked ? document.getElementById('autonote-color').value : false;
      this.emit('change:autonote-setting', this.marker.key, val);
    },
    changeAutoNoteOpt: function changeAutoNoteOpt(e, el) {
      var val = document.getElementById('auto-note').checked ? el.value : false;
      this.emit('change:autonote-setting', this.marker.key, val);
    },
    changeHashOpt: function changeHashOpt(e, el) {
      this.emit('change:hash-setting', !el.checked);
    },
    toggleImmutOpt: function toggleImmutOpt(e, el) {
      this.emit('change:immut-setting', el.checked);
    },
    toggleDropLossesOpt: function toggleDropLossesOpt(e, el) {
      this.emit('change:dropLosses-setting', el.checked);
    },
    toggleAutocsOpt: function toggleAutocsOpt(e, el) {
      this.emit('change:autocs-setting', el.checked);
    },
    addMarker: function addMarker(e, el) {
      var key = el.value,
          keySelect = document.getElementById('customized-key'),
          keyIcons = document.getElementById('custom-keys'),
          removeKeySelect = document.getElementById('remove-key'),
          option = el.children[el.selectedIndex],
          clone = option.cloneNode(true),
          icon = document.createElement('div'),
          bgColor = this.getRandomLightColor();
      if (!key || removeKeySelect.children.length >= 12 || this.allowedKeys.indexOf(key) === -1) return false;
      removeKeySelect.appendChild(option);
      removeKeySelect.selectedIndex = 0;
      keySelect.appendChild(clone);
      clone.selected = true;
      icon.className = 'key custom-key';
      icon.id = 'custom-key-' + key;
      keyIcons.appendChild(icon);
      icon.innerText = key === 'enter' ? String.fromCharCode(0x21B5) : key.toUpperCase();
      this.updateMarker(key, null, bgColor);
      this.emit('add:custom-marker', key, 'background-color:' + bgColor + ';');
    },
    removeMarker: function removeMarker(e, el) {
      var key = el.value,
          keySelect = document.getElementById('customized-key'),
          keyIcons = document.getElementById('custom-keys'),
          addKeySelect = document.getElementById('add-key'),
          option;
      if (!key || this.allowedKeys.indexOf(key) === -1) return false;
      option = el.children[el.selectedIndex];
      addKeySelect.appendChild(option);
      addKeySelect.selectedIndex = 0;
      el.selectedIndex = 0;
      keySelect.getElementsByClassName('custom-marker-option-' + key)[0].remove();
      document.getElementById('custom-key-' + key).remove();
      keySelect.selectedIndex = 0;
      this.updateMarker('m');
      this.emit('remove:custom-marker', key);
    },
    changeMarkMethod: function changeMarkMethod(e, el) {
      if (el.checked) {
        this.emit('change:mark-method-setting', el.getAttribute('data-value'));
      }
    },
    toggleShortcut: function toggleShortcut(e, el) {
      this.emit('toggle:shortcut-setting', el.name, el.checked);
    },
    changeShortcut: function changeShortcut(e, el) {
      if (!this.allowedShortcuts.includes(el.value)) return false;
      this.emit('change:shortcut-setting', el.name, el.value);
    },
    toggleCtm: function toggleCtm(e, el) {
      this.emit('toggle:ctm-setting', el.name, el.checked);
    },
    changeSaveOpt: function changeSaveOpt(e, el) {
      this.emit('change:saveopt-setting', !!el.getAttribute('data-id'));
    },
    togglePrivSave: function togglePrivSave(e, el) {
      this.emit('toggle:priv-setting', el.checked);
    },
    changeNamingOpt: function changeNamingOpt(e, el) {
      this.emit('change:namingopt-setting', el.getAttribute('data-id'));
    },
    toggleSaveNoteOpt: function toggleSaveNoteOpt(e, el) {
      this.emit('toggle:noteopt-setting', el.checked);
    },
    changeQuickbuttonOpt: function changeQuickbuttonOpt(e, el) {
      if (!this.allowedQuickbuttonOpts.includes(el.value)) return false;
      this.emit('toggle:quickbuttonopt-setting', el.name, el.value);
    },
    switchQuickbuttonOpt: function switchQuickbuttonOpt(e, el) {
      var type = el.getAttribute('data-id');
      var val = type === 'json' ? type : document.getElementById('quickbutton-download-select').value;
      this.emit('switch:quickbuttonopt-setting', el.name, val);
    },
    toggleNotes: function toggleNotes(e, el) {
      this.emit('toggle:notification-setting', el.name, el.checked);
    },
    toggleMisc: function toggleMisc(e, el) {
      this.emit('toggle:misc-setting', el.name, el.checked);
    },
    toggleTBBPowerOpt: function toggleTBBPowerOpt(e, el) {
      var val = !!(el.getAttribute('data-id') * 1);
      this.emit('toggle:tbbpower-setting', el.name, val);
    },
    changeTmuiPositionOpt: function changeTmuiPositionOpt(e, el) {
      this.emit('change:misc-setting', el.name, el.value);
      Array.from(this.el.getElementsByClassName('tmuipos')).forEach(function (select) {
        return select.value = el.value;
      });
    },
    changeCustomSearch: function changeCustomSearch(e, el) {
      this.hideCustomSearchSettingSuccess();
      var inp1 = document.getElementById('custom-search--start');
      var inp2 = document.getElementById('custom-search--end');
      var part1 = inp1.value;
      var part2 = inp2.value;

      if (!part1 && !part2) {
        inp1.value = this.customSearch;
        inp2.value = '';
        this.emit('change:custom-search-setting', false);
      } else {
        this.emit('change:custom-search-setting', [part1, part2]);
      }
    },
    getRandomLightColor: function getRandomLightColor() {
      return '#' + Math.floor((0.8 + Math.random() * 0.175) * 16777215).toString(16);
    }
  });
};

var _utils = __webpack_require__(/*! ./../../_shared/utils */ "./content/_shared/utils.js");

var _store = __webpack_require__(/*! ./../_store */ "./content/addon-page/_store.js");

var _store2 = _interopRequireDefault(_store);

var _marker = __webpack_require__(/*! ./marker */ "./content/addon-page/modules/marker.js");

var _marker2 = _interopRequireDefault(_marker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/***/ }),

/***/ "./content/addon-page/modules/syncing.js":
/*!***********************************************!*\
  !*** ./content/addon-page/modules/syncing.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function () {
  return new _utils._DOMMODULE({
    el: document.getElementById('sync'),
    events: {
      ENV: {
        'failed:toggle-sync': 'undo'
      },
      DOM: {
        click: {
          '.switch': 'toggleSwitch'
        }
      }
    },
    autoinit: function autoinit() {
      document.getElementById('sync-switch--settings').classList.toggle('active', _store2["default"].area_settings === 'sync');
      document.getElementById('sync-switch--history').classList.toggle('active', _store2["default"].area_history === 'sync');
      document.getElementById('sync-switch--pagenotes').classList.toggle('active', _store2["default"].area_pagenotes === 'sync');
    },
    toggleSwitch: function toggleSwitch(e, el) {
      el = el.classList.contains('switch--sync') ? el : el.parentNode;
      el.classList.toggle('active');
      this.emit('toggle:sync', el.getAttribute('data-type'), el.classList.contains('active'));
    },
    undo: function undo(field) {
      document.getElementById('sync-switch--' + field).classList.toggle('active');
    }
  });
};

var _utils = __webpack_require__(/*! ./../../_shared/utils */ "./content/_shared/utils.js");

var _store = __webpack_require__(/*! ./../_store */ "./content/addon-page/_store.js");

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/***/ }),

/***/ "./content/addon-page/modules/toggler.js":
/*!***********************************************!*\
  !*** ./content/addon-page/modules/toggler.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _TOGGLER =
/*#__PURE__*/
function () {
  function _TOGGLER(el) {
    _classCallCheck(this, _TOGGLER);

    this.el = el;
    this.init();
  }

  _createClass(_TOGGLER, [{
    key: "init",
    value: function init() {
      this.el.addEventListener('click', this.toggle, false);
    }
  }, {
    key: "toggle",
    value: function toggle(e) {
      e.stopPropagation();
      var dataTarget = this.getAttribute('data-target'),
          targets = dataTarget ? dataTarget.split(' ') : null,
          dataToggle = this.getAttribute('data-toggle'),
          roles = dataToggle ? dataToggle.split(' ') : null;

      if (roles) {
        roles.forEach(function (role, i) {
          return document.getElementById(targets[i]).classList[role]('open');
        });
      } else document.getElementById(targets[0]).disabled = !this.checked;
    }
  }]);

  return _TOGGLER;
}();

exports["default"] = _TOGGLER;

/***/ }),

/***/ "./content/addon-page/port.js":
/*!************************************!*\
  !*** ./content/addon-page/port.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(/*! ./../_shared/utils */ "./content/_shared/utils.js");

exports["default"] = new _utils._PORT({
  name: 'addon-page',
  type: 'content',
  events: {
    ONEOFF: ['change:style-setting', 'change:autonote-setting', 'change:mark-method-setting', 'toggle:shortcut-setting', 'change:shortcut-setting', 'toggle:ctm-setting', 'change:saveopt-setting', 'toggle:priv-setting', 'change:immut-setting', 'change:dropLosses-setting', 'change:namingopt-setting', 'change:sort-setting', 'change:view-setting', 'change:hash-setting', 'toggle:noteopt-setting', 'toggle:quickbuttonopt-setting', 'switch:quickbuttonopt-setting', 'toggle:notification-setting', 'toggle:misc-setting', 'change:misc-setting', 'toggle:tbbpower-setting', 'change:autocs-setting', 'add:custom-marker', 'remove:custom-marker', 'delete:entries', 'clean:entries', 'open:entries', 'rename:entry', 'view:entry', 'sync:entry', 'sync:history', 'sync:settings', 'import:storage', 'toggle:sync', 'change:custom-search-setting', 'changed:per-page-count', 'error:browser-console', 'clear:logs', 'tag:entries']
  }
});

/***/ }),

/***/ "./content/addon-page/sass/index.scss":
/*!********************************************!*\
  !*** ./content/addon-page/sass/index.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./data/log-keys.js":
/*!**************************!*\
  !*** ./data/log-keys.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = {
  note_pbm: 1,
  note_restoration_failure: 2,
  note_url: 3,
  error_save_style: 4,
  error_save__toggle_sc: 5,
  error_save_change_sc: 6,
  error_save_ctm: 7,
  error_save_autosave: 8,
  error_save_naming: 9,
  error_save_notify: 10,
  error_save_download: 11,
  error_save_bmicon: 12,
  error_clean_history: 13,
  error_add_marker: 14,
  error_remove_marker: 15,
  error_save_entry: 16,
  error_update_entry: 17,
  error_del_entry: 18,
  error_empty_synced_storage_onstart: 19,
  error_empty_synced_storage_onupdate: 20,
  error_empty_local_storage_onstart: 21,
  error_import_empty: 22,
  error_import_history: 23,
  error_import_settings: 24,
  error_import_outdated: 25,
  error_import_history_not_found: 26,
  error_import_settings_not_found: 27,
  error_naming: 28,
  error_storage_migration: 29,
  error_empty_local_storage_onupdate: 30,
  error_toggle_sync: 31,
  error_save_priv: 32,
  note_restoration_warning_1: 33,
  note_restoration_warning_2: 34,
  error_save_change_autonote: 35,
  error_save_mark_method: 36,
  getKeyByValue: function getKeyByValue(val) {
    for (var key in this) {
      if (this[key] == val) {
        return key;
        break;
      }
    }

    return '';
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9fc2hhcmVkL3V0aWxzLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvYWRkb24tcGFnZS9fc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9hZGRvbi1wYWdlL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L2FkZG9uLXBhZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9hZGRvbi1wYWdlL21vZHVsZXMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L2FkZG9uLXBhZ2UvbW9kdWxlcy9oaXN0b3J5LXBhZ2luYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9hZGRvbi1wYWdlL21vZHVsZXMvaGlzdG9yeS1zb3J0LmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvYWRkb24tcGFnZS9tb2R1bGVzL2hpc3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9hZGRvbi1wYWdlL21vZHVsZXMvaW1wb3J0LmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvYWRkb24tcGFnZS9tb2R1bGVzL2xvZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9hZGRvbi1wYWdlL21vZHVsZXMvbWFya2VyLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvYWRkb24tcGFnZS9tb2R1bGVzL25hdi5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L2FkZG9uLXBhZ2UvbW9kdWxlcy9zZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L2FkZG9uLXBhZ2UvbW9kdWxlcy9zeW5jaW5nLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvYWRkb24tcGFnZS9tb2R1bGVzL3RvZ2dsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9hZGRvbi1wYWdlL3BvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9hZGRvbi1wYWdlL3Nhc3MvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9kYXRhL2xvZy1rZXlzLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2NvcHkuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZG9tbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2Vycm9yLXRyYWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZXh0ZW5kLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2dldEFjdGl2ZVRhYi5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9oYXNobGVzcy5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9sMTBuLmpzIiwid2VicGFjazovLy8uL3V0aWxzL21lZGlhdG9yLmpzIiwid2VicGFjazovLy8uL3V0aWxzL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9wb3J0LmpzIl0sIm5hbWVzIjpbIl9DT1BZIiwiX0dFVF9BQ1RJVkVfVEFCIiwiX0VYVEVORCIsIl9NT0RVTEUiLCJfRE9NTU9EVUxFIiwiX1BPUlQiLCJfTDEwTiIsIl9FUlJPUlRSQUNLRVIiLCJfSEFTSExFU1MiLCJldmVudHMiLCJFTlYiLCJpbml0aWFsaXplZCIsImluaXRpYWxpemluZyIsImFyZWFfc2V0dGluZ3MiLCJhcmVhX2hpc3RvcnkiLCJhcmVhX3BhZ2Vub3RlcyIsInNldEFyZWFzIiwiYnJvd3NlciIsInN0b3JhZ2UiLCJzeW5jIiwiZ2V0IiwidGhlbiIsInNldHRpbmdzIiwiaGlzdG9yeSIsInBhZ2Vub3RlcyIsImZpZWxkIiwiUHJvbWlzZSIsInIiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0IiwibWV0aCIsIl9nZXRfc3RvcmFnZSIsImxvY2FsIiwibG9jYWxTdG9yYWdlIiwic3luY2VkU3RvcmFnZSIsImZvckVhY2giLCJfZ2V0X2hpc3RvcnkiLCJfZ2V0X2xvY2FsX3N0b3JhZ2UiLCJfZ2V0X3N5bmNlZF9zdG9yYWdlIiwic3luY2VkSGlzdG9yeSIsImxvY2FsSGlzdG9yeSIsImUiLCJlbnRyaWVzIiwiX2dldF9zZXR0aW5ncyIsIl9nZXRfbG9ncyIsImxvZ3MiLCJfZ2V0X2Rvd25sb2FkX29wdGlvbiIsImRvd25sb2FkIiwiX2dldF9tYXJrZXJzIiwibWFya2VycyIsIl9nZXRfc2hvcnRjdXRzIiwic2hvcnRjdXRzIiwiYWxsb3dlZEhhc2hlcyIsImJvb3RzdHJhcHBlZCIsImF1dG9pbml0IiwiX1NUT1JFIiwic3RhcnQiLCJpbml0TWFpbk5hdiIsInRhYiIsImxvY2F0aW9uIiwiaGFzaCIsInNwbGl0IiwiaW5jbHVkZXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2xhc3NMaXN0IiwiYWRkIiwiX05BViIsImlubmVyVGV4dCIsInJ1bnRpbWUiLCJnZXRNYW5pZmVzdCIsInZlcnNpb24iLCJzdWJuYXZzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIm4iLCJsZW5ndGgiLCJ0b2dnbGVCdXR0b25zIiwidCIsIl9UT0dHTEVSIiwic2V0QWRkb25MaW5rcyIsInNldExvZ0xpbmsiLCJhZGRvblVSTCIsImkxOG4iLCJnZXRNZXNzYWdlIiwiYWRkb25MaW5rcyIsImEiLCJhTCIsImhyZWYiLCJpZCIsImxvZ0xpbmsiLCJsIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwibG9nIiwiRGF0ZSIsInRvVVRDU3RyaW5nIiwiZWwiLCJET00iLCJjbGljayIsIm51bWJlclBhZ2VzIiwibnVtYmVyRW50cmllcyIsImN1cnJlbnRQYWdlIiwicGVyUGFnZSIsInVwZGF0ZUZyb21TdG9yYWdlIiwibmV3UGFnZSIsImdldEF0dHJpYnV0ZSIsImVtaXQiLCJyZW5kZXIiLCJwcmV2IiwibmV4dCIsInVwZGF0ZSIsInJlbW92ZSIsInBwIiwiT2JqZWN0Iiwia2V5cyIsInNpbGVudCIsIk1hdGgiLCJjZWlsIiwicmVzZXQiLCJ1bCIsIkFycmF5IiwiZnJvbSIsImxpIiwicCIsInBhZ2VzIiwiZnJhZyIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJpIiwibWF4IiwibWluIiwiaiIsImFwcGVuZEJ1dHRvbiIsImluc2VydEJlZm9yZSIsImIiLCJidG4iLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVUZXh0Tm9kZSIsImNoYW5nZUNvdW50UGVyUGFnZSIsImJ5IiwiZGF0ZSIsImNyZWF0ZWQiLCJvYmplY3QiLCJfc29ydCIsImxhc3QiLCJzb3J0IiwibmFtZSIsImF6IiwiemEiLCJyZXZlcnNlIiwidG9Mb3dlckNhc2UiLCJsb2NhbGVDb21wYXJlIiwiY2hhbmdlIiwia2V5dXAiLCJuYW1lcyIsImVudHJ5VG1wbCIsImVudHJpZXNDb250YWluZXIiLCJwYWdlIiwic29ydGVkIiwidmlld01vZGUiLCJzZWFyY2hUZXJtIiwic2VhcmNoZWQiLCJ0YWdzIiwiZmlsdGVyZWQiLCJmaWx0ZXJPcHRpb25zU2V0IiwiaW5pdCIsInJlc3VtZSIsIm1zZyIsImxvY2tlZCIsImNvbmZpcm1lZCIsImNvbmZpcm0iLCJ0eXBlIiwic3BlYyIsInVuZGVmaW5lZCIsImdldERhdGEiLCJkYXRhIiwidGV4dCIsImxpbmsiLCJqb2luIiwiYm9keSIsInJlbW92ZUNoaWxkIiwiYmFja3VwIiwicG9wIiwiSlNPTiIsInN0cmluZ2lmeSIsInRvTG9jYWxlU3RyaW5nIiwicmVwbGFjZSIsImNvbnRhaW5zIiwiZ2V0VVJMcyIsInVybHMiLCJuZXdOYW1lIiwicHJvbXB0Iiwib2xkTmFtZSIsImFyZWEiLCJwYXJlbnROb2RlIiwidGFnIiwiZm9yY2UiLCJvIiwib3JpZ0VudHJpZXMiLCJzeW5jZWQiLCJwdXNoIiwiY2hlY2tlZCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhY3Rpb24iLCJ2YWx1ZSIsInZhbCIsInRlbXBsYXRlIiwiY29udGFpbmVyIiwic2VhcmNoVGVybUxlbmd0aCIsInNlYXJjaGVkRnVsbFRleHQiLCJjbG9uZSIsImVudHJ5IiwibmFtZUZpZWxkIiwiaW5wdXQiLCJsYWJlbCIsImluZm9CdXR0b24iLCJkZXRhaWxzIiwic2VhcmNoUmVzdWx0cyIsImJ1dHRvbnMiLCJlZGl0IiwidmlldyIsImltbXV0IiwiaW1tdXRFbCIsImxvY2tlZEVsIiwidGFnRWwiLCJmaWx0ZXIiLCJjbG9uZU5vZGUiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInVybCIsImNsYXNzTmFtZSIsIm9wdGltaXplRGF0ZVN0cmluZyIsImZpcnN0IiwibWFya3MiLCJmdWxsVGV4dFNlYXJjaFJlc3VsdHMiLCJyZXMiLCJtYXJrIiwicG9zIiwibWFya1RleHQiLCJtYXJrVGV4dEVsIiwiaGlnaGxpZ2h0IiwidDEiLCJ0MiIsInQzIiwic3Vic3RyaW5nIiwic3Vic3RyIiwibm9FbnRyaWVzSGludCIsInNlYXJjaCIsImFjdGlvbnMiLCJjb3VudCIsInBwU2VsZWN0IiwiY2hlY2thbGwiLCJtZXRoXzAiLCJtZXRoXzEiLCJtZXRoXzIiLCJtZXRoXzMiLCJzZWxlY3QiLCJwbGFjZWhvbGRlck9wdGlvbiIsImFsbFRhZ3MiLCJhZGRGaWx0ZXJPcHQiLCJkaXNhYmxlZCIsImF0dHJzIiwib3B0Iiwibm90YWdGaWx0ZXJPcHQiLCJhbGxfbWFya3NfcGx1c19tZXRhIiwiYWxsX21hcmtzX3BsdXNfbG9zdCIsImFsbF9tYXJrc19wbHVzX21ldGFfYW5kX25vdGVzIiwiYWxsX21hcmtzX2xvc3QiLCJkZWZhdWx0TWFya2VycyIsInJlamVjdCIsImtleSIsIm5ld0xpbmUiLCJuZXdMaW5lcyIsIm5vdGUiLCJub3RlVGV4dCIsImxvc3QiLCJtIiwidGl0bGUiLCJ0cmltIiwiZ2V0VGV4dCIsInEiLCJ0ZXJtIiwic2VhcmNoVHlwZSIsImNvdW50U2VsZWN0IiwiY2xhc3NNZXRoIiwidG9nZ2xlIiwic2V0dXBTZWFyY2giLCJyZW5kZXJFbnRyaWVzIiwic2VhcmNoQ291bnQiLCJzZWFyY2hGdWxsVGV4dCIsInNlYXJjaEJ5TmFtZSIsImZvdW5kIiwicmVzdWx0cyIsInRhYmxlIiwic2V0VmlldyIsImZvY3VzIiwic2V0dXBTb3J0IiwiX1NPUlQiLCJzb3J0U2VhcmNoUmVzdWx0cyIsIm5vZGVOYW1lIiwiZmlyc3RDaGlsZCIsImZpbHRlcmVkRW50cmllcyIsInJ4IiwiYyIsIlJlZ0V4cCIsInNlbGVjdGVkSW5kZXgiLCJpbmRleE9mIiwiZGlyZWN0bHkiLCJpbnB1dHMiLCJkZWxlZ2F0ZUJ1dHRvbkFjdGlvbiIsInF1ZXJ5U2VsZWN0b3IiLCJzZXR1cFZpZXciLCJ0b2dnbGVIZWFkZXJGaWVsZHMiLCJzZXRGaWx0ZXJPcHRpb25zIiwibW91c2Vkb3duIiwidXBkYXRlRXhwb3J0TGlua3MiLCJzdG9yZVN0cmluZyIsInBhcnNlZFN0cmluZyIsInBhcnNlIiwiZGlzcGxheUZhaWx1cmUiLCJ0cmlnZ2VyRmlsZUlucHV0IiwiaGFuZGxlRmlsZSIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJmaWxlIiwiZmlsZXMiLCJzaXplIiwibW9kIiwib25sb2FkIiwidGFyZ2V0IiwicmVzdWx0IiwicmVhZEFzVGV4dCIsInJlYXNvbiIsImxvY2FsRGF0YUxpbmsiLCJzeW5jZWREYXRhTGluayIsInVwZGF0ZUV4cG9ydE5hbWUiLCJ0YWJsZUJvZHkiLCJ0ciIsInRkX2RhdGUiLCJ0ZF9tc2ciLCJub2RlX2RhdGUiLCJub2RlX21zZyIsInRpbWUiLCJfTE9HX0tFWVMiLCJnZXRLZXlCeVZhbHVlIiwiY2xlYXIiLCJfTUFSS0VSIiwiY3VzdG9tQmdDb2xvciIsInN0eWxlcyIsInNoYWRvdyIsIngiLCJ5IiwiYmx1ciIsImNvbG9yIiwiaW5qZWN0IiwicHJldmlldyIsIm1hcmtlciIsImV4aXN0aW5nU3R5bGUiLCJzdHlsZSIsImF1dG9ub3RlIiwic2V0U3R5bGUiLCJzdHlsZVNwbGl0IiwidGV4dFNoYWRvdyIsInNoYWRvd1NwbGl0IiwiYmdJbnB1dCIsImNvbG9ySW5wdXQiLCJib3JkZXJJbnB1dCIsImF1dG9ub3RlSW5wdXQiLCJiZyIsImJvcmRlciIsImF1dG9ub3RlQ29sb3IiLCJzaGFkb3dTZWxlY3QiLCJwcm9wIiwiY2hpbGRyZW4iLCJjbGFzc2VzIiwiaXNWYWxpZCIsInNldFNoYWRvdyIsInZhbGlkIiwidGVzdCIsInBhZ2VOYXYiLCJjdXJyZW50IiwiaGFzQXR0cmlidXRlIiwib3BlbiIsImNsb3NlIiwidGFyZ2V0SWQiLCJhbGxvd2VkS2V5cyIsImFsbG93ZWRTaG9ydGN1dHMiLCJhbGxvd2VkUXVpY2tidXR0b25PcHRzIiwibWFya2VyS2V5cyIsImN1c3RvbU1hcmtlcktleXMiLCJjdXN0b21TZWFyY2giLCJyZW5kZXJNYXJrZXJTZWxlY3RPcHRpb25zIiwidXBkYXRlTWFya2VyIiwiaW5qZWN0U2V0dGluZ3MiLCJwcm90b3R5cGUiLCJzbGljZSIsImNhbGwiLCJrZXlTZWxlY3QiLCJrZXlJY29ucyIsImFkZEtleVNlbGVjdCIsInJlbW92ZUtleVNlbGVjdCIsImZyYWdtZW50MSIsImZyYWdtZW50MiIsImZyYWdtZW50MyIsImZyYWdtZW50NCIsIm9wdGlvbiIsImljb24iLCJWYWwiLCJ0b1VwcGVyQ2FzZSIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsInNjQ2hlY2tib3giLCJzY1NlbGVjdCIsImNtQ2hlY2tib3giLCJzYyIsImhpc3RvcnlTZXR0aW5ncyIsInNhdmVPcHRzIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJhdXRvc2F2ZSIsIm5hbWluZyIsInNhdmVJblByaXYiLCJkcm9wTG9zc2VzIiwic2F2ZU5vdGUiLCJpZ25vcmVIYXNoIiwibWlzY1NldHRpbmdzIiwibWlzYyIsIm1hcmttZXRob2QiLCJibWljb24iLCJub3RlaWNvbiIsIm5vdGVvbmNsaWNrIiwibm90ZXRyYW5zcCIsIm5vdGVwbGFpbnZpZXciLCJmYWlsdXJlTm90ZSIsInN1Y2Nlc3NOb3RlIiwicGJtTm90ZSIsImVycm9yTm90ZSIsInRtdWlwb3MiLCJ0YmJwb3dlciIsImFkZG9uIiwiYXV0b2NzIiwic2hvd0N1c3RvbVNlYXJjaFNldHRpbmdTdWNjZXNzIiwiaGlkZUN1c3RvbVNlYXJjaFNldHRpbmdTdWNjZXNzIiwiY2hhbmdlU3R5bGUiLCJ0b2dnbGVBdXRvTm90ZU9wdCIsImNoYW5nZUF1dG9Ob3RlT3B0IiwiY2hhbmdlSGFzaE9wdCIsInRvZ2dsZUltbXV0T3B0IiwidG9nZ2xlRHJvcExvc3Nlc09wdCIsInRvZ2dsZUF1dG9jc09wdCIsImFkZE1hcmtlciIsImJnQ29sb3IiLCJnZXRSYW5kb21MaWdodENvbG9yIiwic2VsZWN0ZWQiLCJyZW1vdmVNYXJrZXIiLCJjaGFuZ2VNYXJrTWV0aG9kIiwidG9nZ2xlU2hvcnRjdXQiLCJjaGFuZ2VTaG9ydGN1dCIsInRvZ2dsZUN0bSIsImNoYW5nZVNhdmVPcHQiLCJ0b2dnbGVQcml2U2F2ZSIsImNoYW5nZU5hbWluZ09wdCIsInRvZ2dsZVNhdmVOb3RlT3B0IiwiY2hhbmdlUXVpY2tidXR0b25PcHQiLCJzd2l0Y2hRdWlja2J1dHRvbk9wdCIsInRvZ2dsZU5vdGVzIiwidG9nZ2xlTWlzYyIsInRvZ2dsZVRCQlBvd2VyT3B0IiwiY2hhbmdlVG11aVBvc2l0aW9uT3B0IiwiY2hhbmdlQ3VzdG9tU2VhcmNoIiwiaW5wMSIsImlucDIiLCJwYXJ0MSIsInBhcnQyIiwiZmxvb3IiLCJyYW5kb20iLCJ0b1N0cmluZyIsInRvZ2dsZVN3aXRjaCIsInVuZG8iLCJhZGRFdmVudExpc3RlbmVyIiwic3RvcFByb3BhZ2F0aW9uIiwiZGF0YVRhcmdldCIsInRhcmdldHMiLCJkYXRhVG9nZ2xlIiwicm9sZXMiLCJyb2xlIiwiT05FT0ZGIiwibm90ZV9wYm0iLCJub3RlX3Jlc3RvcmF0aW9uX2ZhaWx1cmUiLCJub3RlX3VybCIsImVycm9yX3NhdmVfc3R5bGUiLCJlcnJvcl9zYXZlX190b2dnbGVfc2MiLCJlcnJvcl9zYXZlX2NoYW5nZV9zYyIsImVycm9yX3NhdmVfY3RtIiwiZXJyb3Jfc2F2ZV9hdXRvc2F2ZSIsImVycm9yX3NhdmVfbmFtaW5nIiwiZXJyb3Jfc2F2ZV9ub3RpZnkiLCJlcnJvcl9zYXZlX2Rvd25sb2FkIiwiZXJyb3Jfc2F2ZV9ibWljb24iLCJlcnJvcl9jbGVhbl9oaXN0b3J5IiwiZXJyb3JfYWRkX21hcmtlciIsImVycm9yX3JlbW92ZV9tYXJrZXIiLCJlcnJvcl9zYXZlX2VudHJ5IiwiZXJyb3JfdXBkYXRlX2VudHJ5IiwiZXJyb3JfZGVsX2VudHJ5IiwiZXJyb3JfZW1wdHlfc3luY2VkX3N0b3JhZ2Vfb25zdGFydCIsImVycm9yX2VtcHR5X3N5bmNlZF9zdG9yYWdlX29udXBkYXRlIiwiZXJyb3JfZW1wdHlfbG9jYWxfc3RvcmFnZV9vbnN0YXJ0IiwiZXJyb3JfaW1wb3J0X2VtcHR5IiwiZXJyb3JfaW1wb3J0X2hpc3RvcnkiLCJlcnJvcl9pbXBvcnRfc2V0dGluZ3MiLCJlcnJvcl9pbXBvcnRfb3V0ZGF0ZWQiLCJlcnJvcl9pbXBvcnRfaGlzdG9yeV9ub3RfZm91bmQiLCJlcnJvcl9pbXBvcnRfc2V0dGluZ3Nfbm90X2ZvdW5kIiwiZXJyb3JfbmFtaW5nIiwiZXJyb3Jfc3RvcmFnZV9taWdyYXRpb24iLCJlcnJvcl9lbXB0eV9sb2NhbF9zdG9yYWdlX29udXBkYXRlIiwiZXJyb3JfdG9nZ2xlX3N5bmMiLCJlcnJvcl9zYXZlX3ByaXYiLCJub3RlX3Jlc3RvcmF0aW9uX3dhcm5pbmdfMSIsIm5vdGVfcmVzdG9yYXRpb25fd2FybmluZ18yIiwiZXJyb3Jfc2F2ZV9jaGFuZ2VfYXV0b25vdGUiLCJlcnJvcl9zYXZlX21hcmtfbWV0aG9kIiwic3JjIiwiaXNBcnJheSIsImhhc093blByb3BlcnR5Iiwib2JqIiwiX2JvdW5kIiwiX2V4dHJhQm91bmQiLCJhZGRMaXN0ZW5lcnNNYW51YWxseSIsImFkZExpc3RlbmVycyIsImF1dG9QYXVzZSIsInNldEF1dG9QYXVzZSIsInN1Yk1hcCIsInNlbGVjdG9yIiwiX3NlbCIsImYiLCJpc0lkIiwiaXNDbGFzcyIsImlzRG9jIiwib24iLCJyZW1vdmVMaXN0ZW5lcnMiLCJoYW5kbGVyIiwiZG9tRXZlbnRzIiwicHJveHkiLCJnZW5lcmFsSGFuZGxlciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzcGxpY2UiLCJfZXh0cmEiLCJzZXQiLCJlcnJvciIsImZpbGVuYW1lIiwibWVzc2FnZSIsInNoaWZ0IiwibGluZW5vIiwiY29sbm8iLCJnZXRUaW1lIiwib2JqMSIsIm9iajIiLCJ0YWJzIiwicXVlcnkiLCJjdXJyZW50V2luZG93IiwiYWN0aXZlIiwiaCIsImxhc3RJbmRleE9mIiwidHJhbnNsYXRlRG9jdW1lbnQiLCJjYXB0dXJlIiwicGFzc2l2ZSIsIm9uY2UiLCJkYXRhc2V0IiwiZG9jdW1lbnRFbGVtZW50IiwiZ2V0VUlMYW5ndWFnZSIsInRleHRFbGVtZW50cyIsImF0dHJFbGVtZW50cyIsImwxMG5JZCIsInRleHRDb250ZW50IiwiYXR0ciIsImwxMG5BdHRyIiwidG9waWNzIiwiZXZlbnQiLCJhcmdzIiwidG9waWMiLCJhcHBseSIsInNlbmRNZXNzYWdlIiwiZXYiLCJ3YWl0IiwiY29udGV4dCIsImZ1bmMiLCJhcmdzMSIsImFyZ3MyIiwiY29uY2F0IiwiZW52RXZlbnRzIiwiX01FRElBVE9SIiwicG9ydCIsIm9uTWVzc2FnZSIsImFkZExpc3RlbmVyIiwicGFzc01lc3NhZ2UiLCJpbml0UG9ydGluZyIsInJlZ2lzdGVyUG9ydEV2ZW50cyIsIm9uZU9mZkV2ZW50cyIsImNvbm5lY3Rpb25CYXNlZEV2ZW50cyIsIkNPTk5FQ1RJT04iLCJwb3N0TWVzc2FnZSIsInJlcSIsInNlbmRlciIsInNlbmRSZXNwb25zZSIsImxhc3RBcmciLCJwb3N0cG9uZUNvbm5lY3Rpb24iLCJjb25uZWN0IiwiYWRkQ29ubmVjdGlvbkxpc3RlbmVycyIsIm9uRGlzY29ubmVjdCIsImNiIiwib25Db25uZWN0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFFLEVBQUU3aEIsQ0FBTjtBQUFTeWhCLFlBQUksRUFBRUE7QUFBZixPQUFaO0FBQ0EsVUFBSSxLQUFLYSxJQUFULEVBQWUsS0FBS0EsSUFBTCxDQUFVUyxXQUFWLENBQXNCamIsR0FBdEI7QUFDaEI7OztrQ0FDYTtBQUNaLFVBQUksQ0FBQyxLQUFLc2Isa0JBQVYsRUFBOEI7QUFDNUIsYUFBS0MsT0FBTDtBQUNBLGFBQUtDLHNCQUFMO0FBQ0QsT0FIRCxNQUdPO0FBQ0wsYUFBS0Esc0JBQUwsQ0FBNEIsS0FBS2pFLEtBQUwsQ0FBVyxJQUFYLEVBQWlCLEtBQUtnRSxPQUF0QixDQUE1QjtBQUNEO0FBQ0Y7Ozs4QkFDUztBQUFBOztBQUNSLFVBQU1mLElBQUksR0FBRyxLQUFLQSxJQUFMLEdBQVksS0FBS0EsSUFBTCxJQUFhOWpCLE9BQU8sQ0FBQ29ELE9BQVIsQ0FBZ0J5aEIsT0FBaEIsQ0FBd0I7QUFBRTVjLFlBQUksRUFBRSxLQUFLQTtBQUFiLE9BQXhCLENBQXRDO0FBQ0E2YixVQUFJLENBQUNpQixZQUFMLENBQWtCZixXQUFsQixDQUE4QjtBQUFBLGVBQU0sTUFBSSxDQUFDRixJQUFMLEdBQVksSUFBbEI7QUFBQSxPQUE5QjtBQUNEOzs7MkNBQ3NCa0IsRSxFQUFJO0FBQUE7O0FBQ3pCaGxCLGFBQU8sQ0FBQ29ELE9BQVIsQ0FBZ0I2aEIsU0FBaEIsQ0FBMEJqQixXQUExQixDQUFzQyxVQUFBRixJQUFJLEVBQUk7QUFDNUNBLFlBQUksQ0FBQ0MsU0FBTCxDQUFlQyxXQUFmLENBQTJCLE1BQUksQ0FBQ25ELEtBQUwsQ0FBVyxNQUFYLEVBQWlCLE1BQUksQ0FBQ29ELFdBQXRCLENBQTNCO0FBQ0EsU0FBQ2UsRUFBRCxJQUFPQSxFQUFFLEVBQVQ7QUFDRCxPQUhEO0FBSUQ7Ozs7RUF4RndCOWxCLGUiLCJmaWxlIjoiY29udGVudC9hZGRvbi1wYWdlL2FkZG9uLXBhZ2Uud3AuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2NvbnRlbnQvYWRkb24tcGFnZS9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB7IF9DT1BZIH0gZnJvbSAnLi8uLi8uLi91dGlscy9jb3B5J1xyXG5pbXBvcnQgeyBfR0VUX0FDVElWRV9UQUIgfSBmcm9tICcuLy4uLy4uL3V0aWxzL2dldEFjdGl2ZVRhYidcclxuaW1wb3J0IF9FWFRFTkQgZnJvbSAnLi8uLi8uLi91dGlscy9leHRlbmQnXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uLy4uL3V0aWxzL21vZHVsZSdcclxuaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vdXRpbHMvZG9tbW9kdWxlJ1xyXG5pbXBvcnQgeyBfUE9SVCB9IGZyb20gJy4vLi4vLi4vdXRpbHMvcG9ydCdcclxuaW1wb3J0IHsgX0hBU0hMRVNTIH0gZnJvbSAnLi8uLi8uLi91dGlscy9oYXNobGVzcydcclxuaW1wb3J0IF9MMTBOIGZyb20gJy4vLi4vLi4vdXRpbHMvbDEwbidcclxuaW1wb3J0IF9FUlJPUlRSQUNLRVIgZnJvbSAnLi8uLi8uLi91dGlscy9lcnJvci10cmFja2VyJ1xyXG5cclxuZXhwb3J0IHsgX0NPUFksIF9HRVRfQUNUSVZFX1RBQiwgX0VYVEVORCwgX01PRFVMRSwgX0RPTU1PRFVMRSwgX1BPUlQsIF9MMTBOLCBfRVJST1JUUkFDS0VSLCBfSEFTSExFU1MgfVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IF9NT0RVTEUoe1xyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICd0b2dnbGVkOnN5bmMnOiAnc2V0QXJlYXMnXHJcbiAgICB9XHJcbiAgfSxcclxuICBpbml0aWFsaXplZDogZmFsc2UsXHJcbiAgaW5pdGlhbGl6aW5nOiBmYWxzZSxcclxuICBhcmVhX3NldHRpbmdzOiAnc3luYycsXHJcbiAgYXJlYV9oaXN0b3J5OiAnc3luYycsXHJcbiAgYXJlYV9wYWdlbm90ZXM6ICdzeW5jJyxcclxuXHJcbiAgc2V0QXJlYXMoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKHN0b3JhZ2UgJiYgc3RvcmFnZS5zeW5jKSB7XHJcbiAgICAgICAgdGhpcy5hcmVhX3NldHRpbmdzID0gc3RvcmFnZS5zeW5jLnNldHRpbmdzID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICAgICAgICB0aGlzLmFyZWFfaGlzdG9yeSA9IHN0b3JhZ2Uuc3luYy5oaXN0b3J5ID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICAgICAgICB0aGlzLmFyZWFfcGFnZW5vdGVzID0gc3RvcmFnZS5zeW5jLnBhZ2Vub3RlcyA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIGdldChmaWVsZCA9ICdzdG9yYWdlJykge1xyXG4gICAgaWYgKHRoaXMuaW5pdGlhbGl6aW5nKSB7XHJcbiAgICAgIHJldHVybiAobmV3IFByb21pc2UociA9PiB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiByKHRoaXMuZ2V0KGZpZWxkKSksIDEwKSkpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbWV0aCA9IHRoaXNbJ19nZXRfJyArIGZpZWxkXTtcclxuICAgIGlmICghbWV0aCkgdGhyb3coJ2ZpZWxkICcgKyBmaWVsZCArICcgZG9lc25cXCd0IGV4aXN0Jyk7XHJcblxyXG4gICAgaWYgKCF0aGlzLmluaXRpYWxpemVkKSB7XHJcbiAgICAgIHRoaXMuaW5pdGlhbGl6aW5nID0gdHJ1ZTtcclxuICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XHJcbiAgICAgIHJldHVybiB0aGlzLnNldEFyZWFzKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXppbmcgPSBmYWxzZTtcclxuICAgICAgICByZXR1cm4gdGhpc1snX2dldF8nICsgZmllbGRdKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXNbJ19nZXRfJyArIGZpZWxkXSgpO1xyXG4gIH0sXHJcblxyXG4gIF9nZXRfc3RvcmFnZSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihsb2NhbFN0b3JhZ2UgPT4ge1xyXG4gICAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCkudGhlbihzeW5jZWRTdG9yYWdlID0+IHtcclxuICAgICAgICBbJ3ZlcnNpb24nLCAnbG9ncyddLmZvckVhY2goZmllbGQgPT4ge1xyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlW2ZpZWxkXSA9IGxvY2FsU3RvcmFnZVtmaWVsZF0gfHwgc3luY2VkU3RvcmFnZVtmaWVsZF07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHRoaXMuYXJlYV9zZXR0aW5ncyA9PT0gJ3N5bmMnKSBsb2NhbFN0b3JhZ2Uuc2V0dGluZ3MgPSBzeW5jZWRTdG9yYWdlLnNldHRpbmdzO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRfaGlzdG9yeSgpLnRoZW4oaGlzdG9yeSA9PiB7XHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2UuaGlzdG9yeSA9IGhpc3Rvcnk7XHJcbiAgICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9sb2NhbF9zdG9yYWdlKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKTtcclxuICB9LFxyXG4gIF9nZXRfc3luY2VkX3N0b3JhZ2UoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCk7XHJcbiAgfSxcclxuICBfZ2V0X2hpc3RvcnkoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCkudGhlbihzeW5jZWRTdG9yYWdlID0+IHtcclxuICAgICAgY29uc3Qgc3luY2VkSGlzdG9yeSA9IHN5bmNlZFN0b3JhZ2UuaGlzdG9yeTtcclxuXHJcbiAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihsb2NhbFN0b3JhZ2UgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxvY2FsSGlzdG9yeSA9IGxvY2FsU3RvcmFnZS5oaXN0b3J5O1xyXG4gICAgICAgIGlmICghc3luY2VkSGlzdG9yeSkgcmV0dXJuIGxvY2FsSGlzdG9yeTtcclxuICAgICAgICBpZiAoIWxvY2FsSGlzdG9yeSkgcmV0dXJuIHN5bmNlZEhpc3Rvcnk7XHJcblxyXG4gICAgICAgIC8vc3luY2VkSGlzdG9yeS5vcmRlciA9IHN5bmNlZEhpc3Rvcnkub3JkZXIuY29uY2F0KGxvY2FsSGlzdG9yeS5vcmRlcik7XHJcbiAgICAgICAgZm9yIChsZXQgZSBpbiBsb2NhbEhpc3RvcnkuZW50cmllcykgc3luY2VkSGlzdG9yeS5lbnRyaWVzW2VdID0gbG9jYWxIaXN0b3J5LmVudHJpZXNbZV07XHJcblxyXG4gICAgICAgIHJldHVybiBzeW5jZWRIaXN0b3J5O1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9zZXR0aW5ncygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4gc3RvcmFnZS5zZXR0aW5ncyk7XHJcbiAgfSxcclxuICBfZ2V0X2xvZ3MoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4obG9jYWxTdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFsb2NhbFN0b3JhZ2UgfHwgIWxvY2FsU3RvcmFnZS5sb2dzKSByZXR1cm4gW107XHJcbiAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UubG9ncztcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9kb3dubG9hZF9vcHRpb24oKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzKSByZXR1cm4gJ3RleHQnO1xyXG4gICAgICByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5oaXN0b3J5LmRvd25sb2FkO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X21hcmtlcnMoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHN0b3JhZ2Uuc2V0dGluZ3MubWFya2Vycyk7XHJcbiAgfSxcclxuICBfZ2V0X3Nob3J0Y3V0cygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4gc3RvcmFnZS5zZXR0aW5ncy5zaG9ydGN1dHMpO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCBfU1RPUkUgZnJvbSAnLi9fc3RvcmUnXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uL19zaGFyZWQvdXRpbHMnXHJcblxyXG5pbXBvcnQgX0hJU1RPUlkgZnJvbSAnLi9tb2R1bGVzL2hpc3RvcnknXHJcbmltcG9ydCBfU0VUVElOR1MgZnJvbSAnLi9tb2R1bGVzL3NldHRpbmdzJ1xyXG5pbXBvcnQgX0xPR0dJTkcgZnJvbSAnLi9tb2R1bGVzL2xvZ3MnXHJcbmltcG9ydCBfU1lOQ0lORyBmcm9tICcuL21vZHVsZXMvc3luY2luZydcclxuaW1wb3J0IF9JTVBPUlQgZnJvbSAnLi9tb2R1bGVzL2ltcG9ydCdcclxuaW1wb3J0IF9DT05UQUNUIGZyb20gJy4vbW9kdWxlcy9jb250YWN0J1xyXG5pbXBvcnQgX1BBR0lOQVRPUiBmcm9tICcuL21vZHVsZXMvaGlzdG9yeS1wYWdpbmF0aW9uJ1xyXG5cclxuaW1wb3J0IF9OQVYgZnJvbSAnLi9tb2R1bGVzL25hdidcclxuXHJcbm5ldyBfTU9EVUxFKHtcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAnc3RhcnRlZDphcHAnOiAnc3RhcnQnLFxyXG4gICAgICAndXBkYXRlZDpzZXR0aW5ncyc6ICdzdGFydCcsXHJcbiAgICAgICd1cGRhdGVkOmhpc3RvcnknOiAnc3RhcnQnXHJcbiAgICB9XHJcbiAgfSxcclxuICBhbGxvd2VkSGFzaGVzOiBbJ25ld3MnLCAnbWFudWFsJywgJ3NldHRpbmdzJywgJ2hpc3RvcnknLCAnY29udGFjdCcsICdzeW5jJywgJ2V4cG9ydCcsICdsb2dzJ10sXHJcbiAgYm9vdHN0cmFwcGVkOiBmYWxzZSxcclxuICBhdXRvaW5pdCgpIHtcclxuICAgIF9TVE9SRS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoc3RvcmFnZS5zZXR0aW5ncyAmJiBzdG9yYWdlLmhpc3RvcnkpIHRoaXMuc3RhcnQoKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgc3RhcnQoKSB7XHJcbiAgICBpZiAoIXRoaXMuYm9vdHN0cmFwcGVkKSB7XHJcbiAgICAgIHRoaXMuYm9vdHN0cmFwcGVkID0gdHJ1ZTtcclxuICAgICAgX0hJU1RPUlkoKTtcclxuICAgICAgX1NFVFRJTkdTKCk7XHJcbiAgICAgIF9MT0dHSU5HKCk7XHJcbiAgICAgIF9TWU5DSU5HKCk7XHJcbiAgICAgIF9JTVBPUlQoKTtcclxuICAgICAgX0NPTlRBQ1QoKTtcclxuICAgICAgX1BBR0lOQVRPUigpO1xyXG4gICAgICB0aGlzLmluaXRNYWluTmF2KCk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBpbml0TWFpbk5hdigpIHtcclxuICAgIGNvbnN0IHRhYiA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNwbGl0KCc9JylbMV07XHJcblxyXG4gICAgaWYgKHRoaXMuYWxsb3dlZEhhc2hlcy5pbmNsdWRlcyh0YWIpKSB7XHJcbiAgICAgIHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbm5hdi0nICsgdGFiKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgIH1cclxuICAgIG5ldyBfTkFWKHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbm5hdicpKTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgJy4vc2Fzcy9pbmRleC5zY3NzJ1xyXG5cclxuaW1wb3J0IF9FUlJPUlRSQUNLRVIgZnJvbSAnLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgeyBfTDEwTiB9IGZyb20gJy4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9OQVYgZnJvbSAnLi9tb2R1bGVzL25hdidcclxuaW1wb3J0IF9UT0dHTEVSIGZyb20gJy4vbW9kdWxlcy90b2dnbGVyJ1xyXG5pbXBvcnQgJy4vcG9ydCdcclxuaW1wb3J0ICcuL19zdG9yZSdcclxuaW1wb3J0ICcuL2Jvb3RzdHJhcCdcclxuXHJcbl9MMTBOKCk7XHJcblxyXG4vKiBhdXRvLWluc2VydCBjdXJyZW50IHZlcnNpb24gbnVtYmVyICovXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2ZXJzaW9uLW51bWJlcicpLmlubmVyVGV4dCA9IGJyb3dzZXIucnVudGltZS5nZXRNYW5pZmVzdCgpLnZlcnNpb247XHJcbi8qIGVuZDogYXV0by1pbnNlcnQgY3VycmVudCB2ZXJzaW9uIG51bWJlciAqL1xyXG5cclxuLyogY29uZmlndXJlIHN1Ym5hdnMgKi9cclxuY29uc3Qgc3VibmF2cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N1Ym5hdicpO1xyXG5sZXQgbiA9IHN1Ym5hdnMubGVuZ3RoO1xyXG5cclxud2hpbGUobi0tKSBuZXcgX05BVihzdWJuYXZzW25dKTtcclxuLyogZW5kOiBjb25maWd1cmUgbmF2cyAqL1xyXG5cclxuLyogY29uZmlndXJlIHRvZ2dsZSBlbGVtZW50cyAqL1xyXG5sZXQgdG9nZ2xlQnV0dG9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RvZ2dsZS1idXR0b24nKSxcclxuICAgIHQgPSB0b2dnbGVCdXR0b25zLmxlbmd0aDtcclxuXHJcbndoaWxlKHQtLSkgbmV3IF9UT0dHTEVSKHRvZ2dsZUJ1dHRvbnNbdF0pO1xyXG4vKiBlbmQ6IGNvbmZpZ3VyZSB0b2dnbGUgZWxlbWVudHMgKi9cclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBuZXcgX01PRFVMRSh7XHJcbiAgICBldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ3VwZGF0ZWQ6bG9ncyc6ICdzZXRMb2dMaW5rJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgYXV0b2luaXQoKSB7XHJcbiAgICAgIHRoaXMuc2V0QWRkb25MaW5rcygpXHJcbiAgICAgICAgICAuc2V0TG9nTGluaygpO1xyXG4gICAgfSxcclxuICAgIHNldEFkZG9uTGlua3MoKSB7XHJcbiAgICAgIGxldCBhZGRvblVSTCA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCd1cmxfbW96X2FkZG9uJyksXHJcbiAgICAgICAgICBhZGRvbkxpbmtzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbW96LWFkZG9uJyksXHJcbiAgICAgICAgICBhID0gYWRkb25MaW5rcy5sZW5ndGgsXHJcbiAgICAgICAgICBhTDtcclxuXHJcbiAgICAgIHdoaWxlIChhLS0pIHtcclxuICAgICAgICBhTCA9IGFkZG9uTGlua3NbYV07XHJcbiAgICAgICAgYUwuaHJlZiA9IGFkZG9uVVJMO1xyXG4gICAgICAgIGlmIChhTC5pZCA9PT0gJ21vei1hZGRvbi0tY29udGFjdCcpIGFMLmlubmVyVGV4dCA9IGFkZG9uVVJMO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgIH0sXHJcbiAgICBzZXRMb2dMaW5rKCkge1xyXG4gICAgICBjb25zdCBsb2dMaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZy1tYWlsJyk7XHJcblxyXG4gICAgICBfU1RPUkUuZ2V0KCdsb2dzJykudGhlbihsb2dzID0+IHtcclxuICAgICAgICBsZXQgbCA9IGxvZ3MgPyBsb2dzLmxlbmd0aCA6IDAsXHJcbiAgICAgICAgICAgIGhyZWYgPVxyXG4gICAgICAgICAgICAgICdtYWlsdG86dW5kZmx5YmlyQGdteC5kZT9zdWJqZWN0PVRleHRtYXJrZXInICtcclxuICAgICAgICAgICAgICBlbmNvZGVVUklDb21wb25lbnQoJyA6IEVycm9yIExvZ3MnKSArXHJcbiAgICAgICAgICAgICAgJyZib2R5PScrXHJcbiAgICAgICAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KCctICcgKyBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgneW91cl9tc2cnKSArICcgLVxcblxcblxcbkxPR1M6XFxuXFxuJyksXHJcbiAgICAgICAgICAgIGxvZztcclxuXHJcbiAgICAgICAgd2hpbGUobC0tKSB7XHJcbiAgICAgICAgICBsb2cgPSBsb2dzW2xdO1xyXG4gICAgICAgICAgaHJlZiArPSBsb2dbMV0gKyAobG9nWzJdID8gJyAoJyArIGxvZ1syXSArICcpJyA6ICcnKSArICcgLSAnICsgZW5jb2RlVVJJQ29tcG9uZW50KChuZXcgRGF0ZShsb2dbMF0pLnRvVVRDU3RyaW5nKCkpICsgJ1xcbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsb2dMaW5rLmhyZWYgPSBocmVmO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5pbXBvcnQgX1RPR0dMRVIgZnJvbSAnLi90b2dnbGVyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIG5ldyBfRE9NTU9EVUxFKHtcclxuICAgIGVsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnaW5hdG9yJyksXHJcbiAgICBldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ3NhdmVkOmVudHJ5JzogJ2FkZCcsXHJcbiAgICAgICAgJ2RlbGV0ZWQ6ZW50cmllcyc6ICd1cGRhdGVGcm9tU3RvcmFnZScsXHJcbiAgICAgICAgJ2ZpbHRlcmVkOmhpc3RvcnknOiAncmVzZXQnLFxyXG4gICAgICAgICdpbXBvcnRlZDpoaXN0b3J5JzogJ3VwZGF0ZUZyb21TdG9yYWdlJyxcclxuICAgICAgICAnY2hhbmdlZDpwZXItcGFnZS1jb3VudCc6ICdjaGFuZ2VDb3VudFBlclBhZ2UnXHJcbiAgICAgIH0sXHJcbiAgICAgIERPTToge1xyXG4gICAgICAgIGNsaWNrOiB7XHJcbiAgICAgICAgICAnLnBhZ2UnOiAnZ290bycsXHJcbiAgICAgICAgICAnLnByZXYnOiAncHJldicsXHJcbiAgICAgICAgICAnLm5leHQnOiAnbmV4dCdcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBudW1iZXJQYWdlczogMSxcclxuICAgIG51bWJlckVudHJpZXM6IDAsXHJcbiAgICBjdXJyZW50UGFnZTogMSxcclxuICAgIHBlclBhZ2U6IDEwLFxyXG5cclxuICAgIGF1dG9pbml0KCkge1xyXG4gICAgICB0aGlzLnVwZGF0ZUZyb21TdG9yYWdlKCk7XHJcbiAgICB9LFxyXG4gICAgZ290byhlLCBlbCkge1xyXG4gICAgICBjb25zdCBuZXdQYWdlID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXBhZ2UnKSAqIDE7XHJcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRQYWdlICE9PSBuZXdQYWdlKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdwYWdpbmF0ZTpoaXN0b3J5JywgbmV3UGFnZSk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IG5ld1BhZ2U7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHByZXYoKSB7XHJcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRQYWdlID09PSAxKSByZXR1cm47XHJcbiAgICAgIHRoaXMuZW1pdCgncGFnaW5hdGU6aGlzdG9yeScsIC0tdGhpcy5jdXJyZW50UGFnZSk7XHJcbiAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICB9LFxyXG4gICAgbmV4dCgpIHtcclxuICAgICAgaWYgKHRoaXMuY3VycmVudFBhZ2UgPT09IHRoaXMubnVtYmVyUGFnZXMpIHJldHVybjtcclxuICAgICAgdGhpcy5lbWl0KCdwYWdpbmF0ZTpoaXN0b3J5JywgKyt0aGlzLmN1cnJlbnRQYWdlKTtcclxuICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIH0sXHJcbiAgICBhZGQoKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlKCsrdGhpcy5udW1iZXJFbnRyaWVzKTtcclxuICAgIH0sXHJcbiAgICByZW1vdmUoKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlKC0tdGhpcy5udW1iZXJFbnRyaWVzKTtcclxuICAgIH0sXHJcbiAgICB1cGRhdGVGcm9tU3RvcmFnZSgpIHtcclxuICAgICAgX1NUT1JFLmdldCgnc2V0dGluZ3MnKS50aGVuKHNldHRpbmdzID0+IHRoaXMucGVyUGFnZSA9IHNldHRpbmdzLmhpc3RvcnkucHAgfHwgMTApXHJcbiAgICAgICAgLnRoZW4oKCkgPT4gX1NUT1JFLmdldCgnaGlzdG9yeScpLnRoZW4oaGlzdG9yeSA9PiB0aGlzLnVwZGF0ZShPYmplY3Qua2V5cyhoaXN0b3J5LmVudHJpZXMpLmxlbmd0aCkpKTtcclxuICAgIH0sXHJcbiAgICB1cGRhdGUobCwgc2lsZW50KSB7XHJcbiAgICAgIHRoaXMubnVtYmVyRW50cmllcyA9IGw7XHJcbiAgICAgIHRoaXMubnVtYmVyUGFnZXMgPSBsID8gTWF0aC5jZWlsKGwgLyB0aGlzLnBlclBhZ2UpIDogMTtcclxuICAgICAgaWYgKHRoaXMuY3VycmVudFBhZ2UgPiB0aGlzLm51bWJlclBhZ2VzKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IHRoaXMubnVtYmVyUGFnZXM7XHJcbiAgICAgICAgaWYgKCFzaWxlbnQpIHRoaXMuZW1pdCgncGFnaW5hdGU6aGlzdG9yeScsIHRoaXMuY3VycmVudFBhZ2UpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICB9LFxyXG4gICAgcmVzZXQobCkge1xyXG4gICAgICB0aGlzLmN1cnJlbnRQYWdlID0gMTtcclxuICAgICAgdGhpcy51cGRhdGUobCk7XHJcbiAgICB9LFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICBjb25zdCB1bCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdpbmF0b3ItbGlzdCcpO1xyXG4gICAgICBjb25zdCBsID0gdGhpcy5udW1iZXJFbnRyaWVzO1xyXG4gICAgICBBcnJheS5mcm9tKHVsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3BhZ2UnKSkuZm9yRWFjaChsaSA9PiBsaS5yZW1vdmUoKSk7XHJcblxyXG4gICAgICBpZiAobCA8IHRoaXMucGVyUGFnZSArIDEpIHtcclxuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHAgPSB0aGlzLmN1cnJlbnRQYWdlO1xyXG5cclxuICAgICAgY29uc3QgcGFnZXMgPSB0aGlzLm51bWJlclBhZ2VzO1xyXG4gICAgICBjb25zdCByID0gNyAtIChwYWdlcyAtIDEgLSBwKTtcclxuICAgICAgY29uc3QgZnJhZyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuICAgICAgY29uc3QgbmV4dCA9IHVsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25leHQnKVswXTtcclxuICAgICAgbGV0IGkgPSBNYXRoLm1heCgyLCBwIC0gNyk7XHJcbiAgICAgIGlmIChyID4gMCkgaSA9IE1hdGgubWF4KDIsIE1hdGgubWluKGksIGkgLSByKSk7XHJcbiAgICAgIGNvbnN0IGogPSBNYXRoLm1pbihwYWdlcywgaSArIDE0KSArIDE7XHJcblxyXG4gICAgICB0aGlzLmFwcGVuZEJ1dHRvbihmcmFnLCAxKTtcclxuICAgICAgZm9yICg7IGkgPCBqOyBpKyspIHRoaXMuYXBwZW5kQnV0dG9uKGZyYWcsIGkpO1xyXG4gICAgICBpZiAocGFnZXMgPiBqIC0gMSkgdGhpcy5hcHBlbmRCdXR0b24oZnJhZywgcGFnZXMpO1xyXG5cclxuICAgICAgdWwuaW5zZXJ0QmVmb3JlKGZyYWcsIG5leHQpO1xyXG4gICAgfSxcclxuICAgIGFwcGVuZEJ1dHRvbihmcmFnLCBiKSB7XHJcbiAgICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtcGFnZScsIGIpO1xyXG4gICAgICBidG4uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYikpO1xyXG4gICAgICBidG4uY2xhc3NMaXN0LmFkZCgncGFnZScpO1xyXG4gICAgICBpZiAoYiA9PT0gdGhpcy5jdXJyZW50UGFnZSkgYnRuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICBmcmFnLmFwcGVuZENoaWxkKGJ0bik7XHJcbiAgICB9LFxyXG4gICAgY2hhbmdlQ291bnRQZXJQYWdlKHApIHtcclxuICAgICAgdGhpcy5wZXJQYWdlID0gcDtcclxuICAgICAgdGhpcy51cGRhdGUodGhpcy5udW1iZXJFbnRyaWVzLCB0cnVlKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgYnk6IHtcclxuICAgIGRhdGU6IHtcclxuICAgICAgY3JlYXRlZChvYmplY3QpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc29ydChvYmplY3QsICdmaXJzdCcpO1xyXG4gICAgICB9LFxyXG4gICAgICBsYXN0KG9iamVjdCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zb3J0KG9iamVjdCwgJ2xhc3QnKTtcclxuICAgICAgfSxcclxuICAgICAgX3NvcnQob2JqZWN0LCBmaWVsZCkge1xyXG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmplY3QpLnNvcnQoKGEsIGIpID0+IChuZXcgRGF0ZShvYmplY3RbYl1bZmllbGRdKSkgLSAobmV3IERhdGUob2JqZWN0W2FdW2ZpZWxkXSkpKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG5hbWU6IHtcclxuICAgICAgYXoob2JqZWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NvcnQob2JqZWN0KTtcclxuICAgICAgfSxcclxuICAgICAgemEob2JqZWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NvcnQob2JqZWN0KS5yZXZlcnNlKCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIF9zb3J0KG9iamVjdCkge1xyXG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmplY3QpLnNvcnQoKGEsIGIpID0+IGEudG9Mb3dlckNhc2UoKS5sb2NhbGVDb21wYXJlKGIudG9Mb3dlckNhc2UoKSkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcbmltcG9ydCBfVE9HR0xFUiBmcm9tICcuL3RvZ2dsZXInXHJcbmltcG9ydCBfU09SVCBmcm9tICcuL2hpc3Rvcnktc29ydCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBuZXcgX0RPTU1PRFVMRSh7XHJcbiAgICBlbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hpc3RvcnknKSxcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAnb3BlbmVkOnRhYic6ICdpbml0JyxcclxuICAgICAgICAndXBkYXRlZDpoaXN0b3J5JzogJ3JlbmRlcicsXHJcbiAgICAgICAgJ2ZhaWxlZDpzeW5jLWVudHJ5JzogJ3VuZG9TeW5jVG9nZ2xlJyxcclxuICAgICAgICAncGFnaW5hdGU6aGlzdG9yeSc6ICdwYWdpbmF0ZSdcclxuICAgICAgfSxcclxuICAgICAgRE9NOiB7XHJcbiAgICAgICAgY2xpY2s6IHtcclxuICAgICAgICAgICcuYWN0aW9uLWJ1dHRvbic6ICdkZWxlZ2F0ZUJ1dHRvbkFjdGlvbicsXHJcbiAgICAgICAgICAnLnN3aXRjaCc6ICd0b2dnbGVTd2l0Y2gnLFxyXG4gICAgICAgICAgJy5uYW1lJzogJ29wZW4nLFxyXG4gICAgICAgICAgJy5lZGl0JzogJ2VkaXQnLFxyXG4gICAgICAgICAgJy52aWV3JzogJ3ZpZXcnLFxyXG4gICAgICAgICAgJyNzZWFyY2gtdG9nZ2xlJzogJ3RvZ2dsZVNlYXJjaCcsXHJcbiAgICAgICAgICAnI3JlbW92ZS1maWx0ZXInOiAncmVtb3ZlRmlsdGVyJyxcclxuICAgICAgICAgICcudGFnc19faXRlbSc6ICdmaWx0ZXInXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjaGFuZ2U6IHtcclxuICAgICAgICAgICcuY2hlY2ttYXJrLWFsbCc6ICdjaGVja21hcmtBbGwnLFxyXG4gICAgICAgICAgJyNzb3J0LWVudHJpZXMnOiAnc29ydCcsXHJcbiAgICAgICAgICAnI2ZpbHRlci1lbnRyaWVzJzogJ2ZpbHRlcicsXHJcbiAgICAgICAgICAnI2VudHJpZXMtcGVyLXBhZ2UnOiAnY2hhbmdlQ291bnRQZXJQYWdlJyxcclxuICAgICAgICAgICcjc2V0LXZpZXcnOiAnc2V0VmlldycsXHJcbiAgICAgICAgICAnI2FjdGlvbic6ICdvbkNoYW5nZUFjdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIGtleXVwOiB7XHJcbiAgICAgICAgICAnLnNlYXJjaC1lbnRyaWVzJzogJ3NlYXJjaCdcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgaW5pdGlhbGl6ZWQ6IGZhbHNlLFxyXG5cclxuICAgIG5hbWVzOiBbXSxcclxuICAgIGVudHJpZXM6IHt9LFxyXG4gICAgZW50cnlUbXBsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW50cnktdGVtcGxhdGUnKSxcclxuICAgIGVudHJpZXNDb250YWluZXI6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbnRyaWVzJyksXHJcbiAgICBwYWdlOiAxLFxyXG4gICAgcGVyUGFnZTogMTAsXHJcbiAgICBzb3J0ZWQ6ICdkYXRlLWxhc3QnLFxyXG4gICAgdmlld01vZGU6ICdsaXN0JyxcclxuICAgIHNlYXJjaFRlcm06ICcnLFxyXG4gICAgc2VhcmNoZWQ6IFtdLFxyXG4gICAgdGFnczogW10sXHJcbiAgICBmaWx0ZXJlZDogZmFsc2UsXHJcbiAgICBmaWx0ZXJPcHRpb25zU2V0OiBmYWxzZSxcclxuXHJcbiAgICBpbml0KHRhYikge1xyXG4gICAgICBpZiAodGFiICE9PSAnaGlzdG9yeScpIHJldHVybjtcclxuICAgICAgaWYgKCF0aGlzLmluaXRpYWxpemVkKSB0aGlzLnJlbmRlcigpO1xyXG4gICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcclxuICAgIH0sXHJcbiAgICByZXN1bWUoKSB7XHJcbiAgICAgIHRoaXMuZmlsdGVyT3B0aW9uc1NldCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnRhZ3MgPSBbXTtcclxuICAgIH0sXHJcblxyXG4gICAgWydkZWxldGUnXShuYW1lcykge1xyXG4gICAgICBsZXQgbXNnID0gJ2RlbF9jb25maXJtJztcclxuICAgICAgbGV0IGwgPSBuYW1lcy5sZW5ndGg7XHJcblxyXG4gICAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZW50cmllc1tuYW1lc1tsXV0ubG9ja2VkKSB7XHJcbiAgICAgICAgICBtc2cgKz0gJ19sb2NrZWQnO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgY29uZmlybWVkID0gd2luZG93LmNvbmZpcm0oYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UobXNnKSk7XHJcbiAgICAgIGlmIChjb25maXJtZWQpIHRoaXMuZW1pdCgnZGVsZXRlOmVudHJpZXMnLCBuYW1lcyk7XHJcbiAgICB9LFxyXG4gICAgY2xlYW4obmFtZXMpIHtcclxuICAgICAgdGhpcy5lbWl0KCdjbGVhbjplbnRyaWVzJywgbmFtZXMpO1xyXG4gICAgfSxcclxuICAgIGRvd25sb2FkKG5hbWVzLCB0eXBlLCBzcGVjKSB7XHJcbiAgICAgIGlmICh0eXBlb2YgdHlwZSAhPT0gJ3N0cmluZycpIHtcclxuICAgICAgICByZXR1cm4gX1NUT1JFLmdldCgnZG93bmxvYWRfb3B0aW9uJykudGhlbihzZXR0aW5ncyA9PiB7XHJcbiAgICAgICAgICBzZXR0aW5ncyA9IHNldHRpbmdzLnNwbGl0KCcgJyk7XHJcbiAgICAgICAgICB0eXBlID0gc2V0dGluZ3NbMF07XHJcbiAgICAgICAgICBzcGVjID0gc2V0dGluZ3MubGVuZ3RoID09PSAyID8gc2V0dGluZ3NbMV0gOiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICBpZiAodHlwZSA9PT0gJ2pzb24nKSB0aGlzLmV4cG9ydChuYW1lcyk7XHJcbiAgICAgICAgICBlbHNlIHRoaXMuZG93bmxvYWQobmFtZXMsIHR5cGUsIHNwZWMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZ2V0RGF0YShuYW1lcywgdHlwZSwgc3BlYykudGhlbihkYXRhID0+IHtcclxuICAgICAgICBsZXQgdGV4dCA9IGVuY29kZVVSSUNvbXBvbmVudChkYXRhKSxcclxuICAgICAgICAgICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuXHJcbiAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoJ2Rvd25sb2FkJywgJ1RleHRtYXJrZXIgKCcgKyBuYW1lcy5qb2luKCdfJykgKyAnKS50eHQnKTtcclxuICAgICAgICBsaW5rLmhyZWYgPSAnZGF0YTp0ZXh0L3BsYWluO2NoYXJzZXQ9dXRmLTgsJyArIHRleHQ7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGluayk7XHJcbiAgICAgICAgbGluay5jbGljaygpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobGluayk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGV4cG9ydChuYW1lcykge1xyXG4gICAgICBsZXQgYmFja3VwID0geyBoaXN0b3J5OiB7IGVudHJpZXM6IHt9IH0gfSxcclxuICAgICAgICAgIGVudHJpZXMgPSBiYWNrdXAuaGlzdG9yeS5lbnRyaWVzLFxyXG4gICAgICAgICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuXHJcbiAgICAgIF9TVE9SRS5nZXQoJ2hpc3RvcnknKS50aGVuKGhpc3RvcnkgPT4ge1xyXG4gICAgICAgIGxldCBuYW1lO1xyXG4gICAgICAgIHdoaWxlIChuYW1lcy5sZW5ndGgpIHtcclxuICAgICAgICAgIG5hbWUgPSBuYW1lcy5wb3AoKTtcclxuICAgICAgICAgIGVudHJpZXNbbmFtZV0gPSBoaXN0b3J5LmVudHJpZXNbbmFtZV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJhY2t1cCA9IGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShiYWNrdXApKTtcclxuICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZSgnZG93bmxvYWQnLFxyXG4gICAgICAgICAgJ1RleHRtYXJrZXItYmFja3VwLScgK1xyXG4gICAgICAgICAgKG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKS5yZXBsYWNlKC9cXEQvZywgJ18nKSkgK1xyXG4gICAgICAgICAgJy5qc29uJ1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgbGluay5ocmVmID0gJ2RhdGE6dGV4dC9qc29uO2NoYXJzZXQ9dXRmLTgsJyArIGJhY2t1cDtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsaW5rKTtcclxuICAgICAgICBsaW5rLmNsaWNrKCk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChsaW5rKTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgc3luYyhuYW1lLCBlbCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ3N5bmM6ZW50cnknLCBuYW1lWzBdLCBlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKTtcclxuICAgIH0sXHJcbiAgICB2aXNpdChuYW1lcykge1xyXG4gICAgICB0aGlzLmdldFVSTHMobmFtZXMpLnRoZW4odXJscyA9PiB0aGlzLmVtaXQoJ29wZW46ZW50cmllcycsIHVybHMsIG5hbWVzKSk7XHJcbiAgICB9LFxyXG4gICAgb3BlbihlLCBlbCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ29wZW46ZW50cmllcycsIGVsLmdldEF0dHJpYnV0ZSgnZGF0YS11cmwnKSwgZWwuZ2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnKSk7XHJcbiAgICB9LFxyXG4gICAgZWRpdChlLCBlbCkge1xyXG4gICAgICBjb25zdCBuZXdOYW1lID0gd2luZG93LnByb21wdChicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm1fbWVzc2FnZV9lZGl0JykpO1xyXG4gICAgICBpZiAobmV3TmFtZSkge1xyXG4gICAgICAgIGNvbnN0IG9sZE5hbWUgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScpO1xyXG4gICAgICAgIGNvbnN0IGFyZWEgPSBlbC5wYXJlbnROb2RlLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N3aXRjaC0tc3luYycpWzBdLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykgP1xyXG4gICAgICAgICAgJ3N5bmMnIDogJ2xvY2FsJztcclxuICAgICAgICB0aGlzLmVtaXQoJ3JlbmFtZTplbnRyeScsIG9sZE5hbWUsIG5ld05hbWUsIGFyZWEpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgdmlldyhlLCBlbCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ3ZpZXc6ZW50cnknLCBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScpKTtcclxuICAgIH0sXHJcbiAgICB0YWcobmFtZXMsIHRhZywgZm9yY2UpIHtcclxuICAgICAgaWYgKCF0YWcgJiYgIWZvcmNlKSByZXR1cm47XHJcbiAgICAgIGNvbnN0IG8gPSB7IHN5bmM6IFtdLCBsb2NhbDogW10gfTtcclxuICAgICAgbmFtZXMuZm9yRWFjaChuYW1lID0+IHtcclxuICAgICAgICBpZiAodGhpcy5vcmlnRW50cmllc1tuYW1lXS5zeW5jZWQpIG8uc3luYy5wdXNoKG5hbWUpO1xyXG4gICAgICAgIGVsc2Ugby5sb2NhbC5wdXNoKG5hbWUpO1xyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5lbWl0KCd0YWc6ZW50cmllcycsIG8sIHRhZyk7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlVGFncyhuYW1lcykge1xyXG4gICAgICB0aGlzLnRhZyhuYW1lcywgJycsIHRydWUpO1xyXG4gICAgfSxcclxuICAgIHByb2Nlc3NTZWxlY3Rpb24oKSB7XHJcbiAgICAgIGxldCBjaGVja2VkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVudHJ5LWNiOmNoZWNrZWQnKSxcclxuICAgICAgICAgIGkgPSBjaGVja2VkLmxlbmd0aDtcclxuXHJcbiAgICAgIGlmICghaSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgbGV0IGFjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhY3Rpb24nKS52YWx1ZSxcclxuICAgICAgICAgIG5hbWVzID0gW107XHJcblxyXG4gICAgICB3aGlsZShpLS0pIG5hbWVzLnB1c2goY2hlY2tlZFtpXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScpKTtcclxuXHJcbiAgICAgIGlmIChhY3Rpb24gPT09ICd0YWcnKSB7XHJcbiAgICAgICAgbGV0IHZhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWcnKS52YWx1ZTtcclxuICAgICAgICB0aGlzLnRhZyhuYW1lcywgdmFsKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsZXQgc3BsaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3BlY2lmaWNhdGlvbicpLnZhbHVlLnNwbGl0KCcgJyksXHJcbiAgICAgICAgICAgIHR5cGUgPSBzcGxpdFswXSxcclxuICAgICAgICAgICAgc3BlYyA9IHNwbGl0WzFdO1xyXG5cclxuICAgICAgICAhdGhpc1thY3Rpb25dIHx8IHRoaXNbYWN0aW9uXShuYW1lcywgdHlwZSwgc3BlYyk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICByZW5kZXJFbnRyaWVzKCkge1xyXG4gICAgICBsZXQgdGVtcGxhdGUgPSB0aGlzLmVudHJ5VG1wbCxcclxuICAgICAgICAgIGNvbnRhaW5lciA9IHRoaXMuZW50cmllc0NvbnRhaW5lcixcclxuICAgICAgICAgIGVudHJpZXMgPSB0aGlzLmVudHJpZXMsXHJcbiAgICAgICAgICBzZWFyY2hUZXJtID0gdGhpcy5zZWFyY2hUZXJtLFxyXG4gICAgICAgICAgc2VhcmNoVGVybUxlbmd0aCA9IHNlYXJjaFRlcm0gPyBzZWFyY2hUZXJtLmxlbmd0aCA6IDAsXHJcbiAgICAgICAgICBzZWFyY2hlZCA9ICEhc2VhcmNoVGVybSxcclxuICAgICAgICAgIHNlYXJjaGVkRnVsbFRleHQgPSB0aGlzLnNlYXJjaGVkRnVsbFRleHQsXHJcbiAgICAgICAgICBuYW1lcyA9IHNlYXJjaGVkID8gdGhpcy5zZWFyY2hlZCA6IHRoaXMubmFtZXMsXHJcbiAgICAgICAgICBsID0gc2VhcmNoZWQgPyBuYW1lcy5sZW5ndGggOiB0aGlzLnBhZ2UgKiB0aGlzLnBlclBhZ2UsXHJcbiAgICAgICAgICBpID0gc2VhcmNoZWQgPyAwIDogbCAtIHRoaXMucGVyUGFnZSxcclxuICAgICAgICAgIGNsb25lLCBlbnRyeSwgbmFtZSwgbmFtZUZpZWxkLCBpbnB1dCwgbGFiZWwsIGluZm9CdXR0b24sIGRldGFpbHMsIHNlYXJjaFJlc3VsdHMsXHJcbiAgICAgICAgICBidXR0b25zLCBlZGl0LCB2aWV3LCB0YWdzLCBpbW11dCwgaW1tdXRFbCwgbG9ja2VkLCBsb2NrZWRFbCwgdGFnRWwsIGIsIGo7XHJcblxyXG4gICAgICBpZiAodGhpcy5maWx0ZXJlZCkge1xyXG4gICAgICAgIG5hbWVzID0gbmFtZXMuZmlsdGVyKG4gPT4gISFlbnRyaWVzW25dKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbCA9IE1hdGgubWluKGwsIG5hbWVzLmxlbmd0aCk7XHJcblxyXG4gICAgICBjb250YWluZXIuaW5uZXJUZXh0ID0gJyc7XHJcblxyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hlY2ttYXJrLWFsbCcpLmNoZWNrZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgIGlmICghbCkgcmV0dXJuIHRoaXM7XHJcblxyXG4gICAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgICgoaSwgaikgPT4ge1xyXG4gICAgICAgICAgbmFtZSA9IG5hbWVzW2ldO1xyXG4gICAgICAgICAgZW50cnkgPSBlbnRyaWVzW25hbWVdO1xyXG4gICAgICAgICAgaWYgKGVudHJ5KSB7XHJcbiAgICAgICAgICAgIHRhZ3MgPSBlbnRyeS50YWcgPyBlbnRyeS50YWcuc3BsaXQoJyAnKSA6IG51bGw7XHJcbiAgICAgICAgICAgIGxvY2tlZCA9IGVudHJ5LmxvY2tlZDtcclxuICAgICAgICAgICAgaW1tdXQgPSBlbnRyeS5pbW11dDtcclxuICAgICAgICAgICAgY2xvbmUgPSB0ZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjbG9uZSk7XHJcbiAgICAgICAgICAgIGNsb25lLmlkID0gJ2VudHJ5LScgKyBqO1xyXG4gICAgICAgICAgICBjbG9uZS5jbGFzc0xpc3QucmVtb3ZlKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgICAgICAgICAgY2xvbmUuc2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnLCBuYW1lKTtcclxuICAgICAgICAgICAgbmFtZUZpZWxkID0gY2xvbmUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmFtZScpWzBdO1xyXG4gICAgICAgICAgICBpbnB1dCA9IGNsb25lLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbnB1dCcpWzBdO1xyXG4gICAgICAgICAgICBsYWJlbCA9IGNsb25lLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdsYWJlbCcpWzBdO1xyXG4gICAgICAgICAgICBkZXRhaWxzID0gY2xvbmUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZGV0YWlscycpWzBdO1xyXG4gICAgICAgICAgICBzZWFyY2hSZXN1bHRzID0gY2xvbmUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2VhcmNoLXJlc3VsdHMnKVswXTtcclxuICAgICAgICAgICAgYnV0dG9ucyA9IGNsb25lLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3F1aWNrLWFjdGlvbicpO1xyXG4gICAgICAgICAgICBlZGl0ID0gY2xvbmUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZWRpdCcpWzBdO1xyXG4gICAgICAgICAgICB2aWV3ID0gY2xvbmUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndmlldycpWzBdO1xyXG4gICAgICAgICAgICB0YWdFbCA9IGNsb25lLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RhZ3MnKVswXTtcclxuICAgICAgICAgICAgbG9ja2VkRWwgPSBjbG9uZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdsb2NrZWQnKVswXTtcclxuICAgICAgICAgICAgaW1tdXRFbCA9IGNsb25lLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ltbXV0JylbMF07XHJcbiAgICAgICAgICAgIGIgPSBidXR0b25zLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgIHdoaWxlKGItLSkge1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uc1tiXS5zZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScsIG5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5hbWVGaWVsZC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShuYW1lKSk7XHJcbiAgICAgICAgICAgIG5hbWVGaWVsZC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXJsJywgZW50cnkudXJsKTtcclxuICAgICAgICAgICAgbmFtZUZpZWxkLnNldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJywgbmFtZSk7XHJcbiAgICAgICAgICAgIGlucHV0LmNsYXNzTmFtZSA9ICdlbnRyeS1jYic7XHJcbiAgICAgICAgICAgIGlucHV0LmlkID0gJ2VudHJ5LWNiLScgKyBqO1xyXG4gICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScsIG5hbWUpO1xyXG4gICAgICAgICAgICB2aWV3LnNldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJywgbmFtZSk7XHJcbiAgICAgICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2VudHJ5LWNiLScgKyBqKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChsb2NrZWQpIHtcclxuICAgICAgICAgICAgICBsb2NrZWRFbC5jbGFzc0xpc3QucmVtb3ZlKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBlZGl0LmNsYXNzTGlzdC5yZW1vdmUoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgICAgICAgICAgIGVkaXQuc2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnLCBuYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaW1tdXQpIGltbXV0RWwuY2xhc3NMaXN0LnJlbW92ZSgndS1kaXNwbGF5LS1ub25lJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGFncykge1xyXG4gICAgICAgICAgICAgIHRhZ3MuZm9yRWFjaCh0YWcgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgICAgICAgICAgdGFnRWwuYXBwZW5kQ2hpbGQoZWwpO1xyXG4gICAgICAgICAgICAgICAgZWwuY2xhc3NOYW1lID0gJ3RhZ3NfX2l0ZW0nO1xyXG4gICAgICAgICAgICAgICAgZWwuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGFnKSk7XHJcbiAgICAgICAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ3RpdGxlX2ZpbHRlcicpKTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICB0YWdFbC5pbm5lclRleHQgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnZGV0YWlsX25vdGFnJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNsb25lLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NyZWF0ZWQnKVswXS5pbm5lclRleHQgPSB0aGlzLm9wdGltaXplRGF0ZVN0cmluZyhuZXcgRGF0ZShlbnRyeS5maXJzdCkudG9Mb2NhbGVTdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIGNsb25lLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2xhc3QnKVswXS5pbm5lclRleHQgPSB0aGlzLm9wdGltaXplRGF0ZVN0cmluZyhuZXcgRGF0ZShlbnRyeS5sYXN0KS50b0xvY2FsZVN0cmluZygpKTtcclxuICAgICAgICAgICAgY2xvbmUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY291bnQnKVswXS5pbm5lclRleHQgPSBlbnRyeS5tYXJrcy5sZW5ndGg7XHJcbiAgICAgICAgICAgIC8vY2xvbmUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbG9zdCcpWzBdLmlubmVyVGV4dCA9IGVudHJ5Lmxvc3QgPyBlbnRyeS5sb3N0Lmxlbmd0aCA6IDA7XHJcblxyXG4gICAgICAgICAgICBpZiAoZW50cnkuc3luY2VkID09PSB1bmRlZmluZWQgfHwgZW50cnkuc3luY2VkKSB7XHJcbiAgICAgICAgICAgICAgY2xvbmUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3dpdGNoLS1zeW5jJylbMF0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChzZWFyY2hlZEZ1bGxUZXh0KSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgZnVsbFRleHRTZWFyY2hSZXN1bHRzID0gdGhpcy5mdWxsVGV4dFNlYXJjaFJlc3VsdHNbbmFtZV07XHJcblxyXG4gICAgICAgICAgICAgIGlmIChmdWxsVGV4dFNlYXJjaFJlc3VsdHMpIHtcclxuICAgICAgICAgICAgICAgIGxldCByID0gMCwgcmVzLCBtYXJrLCBwb3MsIG1hcmtUZXh0LCBtYXJrVGV4dEVsLCBoaWdobGlnaHQsIHQxLCB0MiwgdDM7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yICg7IHIgPCBmdWxsVGV4dFNlYXJjaFJlc3VsdHMubGVuZ3RoOyByKyspIHtcclxuICAgICAgICAgICAgICAgICAgcmVzID0gZnVsbFRleHRTZWFyY2hSZXN1bHRzW3JdO1xyXG4gICAgICAgICAgICAgICAgICBtYXJrID0gZW50cnkubWFya3NbcmVzLm1hcmtdO1xyXG4gICAgICAgICAgICAgICAgICBwb3MgPSByZXMucG9zO1xyXG4gICAgICAgICAgICAgICAgICBtYXJrVGV4dCA9IG1hcmsudGV4dDtcclxuICAgICAgICAgICAgICAgICAgbWFya1RleHRFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgdDEgPSBtYXJrVGV4dC5zdWJzdHJpbmcoTWF0aC5tYXgocG9zLTE2LCAwKSwgcG9zKTtcclxuICAgICAgICAgICAgICAgICAgdDIgPSBtYXJrVGV4dC5zdWJzdHIocG9zLCBzZWFyY2hUZXJtTGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgdDMgPSBtYXJrVGV4dC5zdWJzdHIocG9zK3NlYXJjaFRlcm1MZW5ndGgsIDE2KTtcclxuICAgICAgICAgICAgICAgICAgdDEgPSB0MSA/ICcuLi4gJyArIHQxIDogdDE7XHJcbiAgICAgICAgICAgICAgICAgIHQzID0gdDMgPyB0MyArICcgLi4uJyA6IHQzO1xyXG5cclxuICAgICAgICAgICAgICAgICAgaGlnaGxpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgICAgICAgICAgICBoaWdobGlnaHQuY2xhc3NOYW1lID0gJ2hpZ2hsaWdodCc7XHJcbiAgICAgICAgICAgICAgICAgIGhpZ2hsaWdodC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0MikpO1xyXG4gICAgICAgICAgICAgICAgICBtYXJrVGV4dEVsLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHQxKSk7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmtUZXh0RWwuYXBwZW5kQ2hpbGQoaGlnaGxpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgbWFya1RleHRFbC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0MykpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgc2VhcmNoUmVzdWx0cy5hcHBlbmRDaGlsZChtYXJrVGV4dEVsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KShpLCBsLWktMSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlSGVhZGVyRmllbGRzKGwpIHtcclxuICAgICAgY29uc3Qgbm9FbnRyaWVzSGludCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduby1lbnRyaWVzJyk7XHJcbiAgICAgIGNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gnKTtcclxuICAgICAgY29uc3QgYWN0aW9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoaXN0b3J5LWFjdGlvbnMnKTtcclxuICAgICAgY29uc3Qgc29ydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzb3J0Jyk7XHJcbiAgICAgIGNvbnN0IGZpbHRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWx0ZXInKTtcclxuICAgICAgY29uc3QgY291bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY291bnQnKTtcclxuICAgICAgY29uc3QgdmlldyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWV3Jyk7XHJcbiAgICAgIGNvbnN0IHBwU2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VudHJpZXMtcGVyLXBhZ2UnKTtcclxuICAgICAgY29uc3QgY2hlY2thbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hlY2ttYXJrLWFsbC1jb250YWluZXInKTtcclxuICAgICAgY29uc3QgbWV0aF8wID0gIWwgPyAncmVtb3ZlJyA6ICdhZGQnO1xyXG4gICAgICBjb25zdCBtZXRoXzEgPSBsID4gMCA/ICdyZW1vdmUnIDogJ2FkZCc7XHJcbiAgICAgIGNvbnN0IG1ldGhfMiA9IGwgPiAyID8gJ3JlbW92ZScgOiAnYWRkJztcclxuICAgICAgY29uc3QgbWV0aF8zID0gbCA+IDEwID8gJ3JlbW92ZScgOiAnYWRkJztcclxuXHJcbiAgICAgIG5vRW50cmllc0hpbnQuY2xhc3NMaXN0W21ldGhfMF0oJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgICBhY3Rpb25zLmNsYXNzTGlzdFttZXRoXzFdKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgICAgc2VhcmNoLmNsYXNzTGlzdFttZXRoXzJdKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgICAgc29ydC5jbGFzc0xpc3RbbWV0aF8yXSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICAgIGZpbHRlci5jbGFzc0xpc3RbbWV0aF8xXSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICAgIGNvdW50LmNsYXNzTGlzdFttZXRoXzNdKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgICAgdmlldy5jbGFzc0xpc3RbbWV0aF8xXSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICAgIGNoZWNrYWxsLmNsYXNzTGlzdFttZXRoXzJdKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuXHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbnRyaWVzLWNvdW50JykuaW5uZXJUZXh0ID0gbDtcclxuXHJcbiAgICAgIHJldHVybiBfU1RPUkUuZ2V0KCdzZXR0aW5ncycpLnRoZW4oc2V0dGluZ3MgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBwID0gdGhpcy5wZXJQYWdlID0gc2V0dGluZ3MuaGlzdG9yeS5wcCB8fCAxMDtcclxuICAgICAgICBwcFNlbGVjdC52YWx1ZSA9IHBwO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBzZXRGaWx0ZXJPcHRpb25zKCkge1xyXG4gICAgICBpZiAodGhpcy5maWx0ZXJPcHRpb25zU2V0KSByZXR1cm4gdGhpcztcclxuXHJcbiAgICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWx0ZXItZW50cmllcycpO1xyXG4gICAgICBjb25zdCBwbGFjZWhvbGRlck9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICBjb25zdCBhbGxUYWdzID0gW107XHJcbiAgICAgIGNvbnN0IGVudHJpZXMgPSB0aGlzLm9yaWdFbnRyaWVzO1xyXG4gICAgICBsZXQgdGFncztcclxuXHJcbiAgICAgIHNlbGVjdC5pbm5lclRleHQgPSAnJztcclxuICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKHBsYWNlaG9sZGVyT3B0aW9uKTtcclxuICAgICAgcGxhY2Vob2xkZXJPcHRpb24uc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICcnKTtcclxuICAgICAgcGxhY2Vob2xkZXJPcHRpb24uc2V0QXR0cmlidXRlKCdoaWRkZW4nLCAnJyk7XHJcbiAgICAgIHBsYWNlaG9sZGVyT3B0aW9uLmlubmVyVGV4dCA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCd0NTEyNCcpO1xyXG5cclxuICAgICAgZm9yIChsZXQgbmFtZSBpbiBlbnRyaWVzKSB7XHJcbiAgICAgICAgdGFncyA9IGVudHJpZXNbbmFtZV0udGFnO1xyXG4gICAgICAgIHRhZ3MgPSB0YWdzID8gdGFncy5zcGxpdCgnICcpIDogW107XHJcbiAgICAgICAgdGFncy5mb3JFYWNoKHRhZyA9PiB7XHJcbiAgICAgICAgICBpZiAoIWFsbFRhZ3MuaW5jbHVkZXModGFnKSkgYWxsVGFncy5wdXNoKHRhZyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICghYWxsVGFncy5sZW5ndGggJiYgIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWx0ZXItb3B0LW5vdGFnJykpIHtcclxuICAgICAgICB0aGlzLmFkZEZpbHRlck9wdCgnJywgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ2RldGFpbF9ub3RhZycpLCB7IGRpc2FibGVkOiB0cnVlLCBpZDogJ2ZpbHRlci1vcHQtbm90YWcnIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFsbFRhZ3MuZm9yRWFjaCh0YWcgPT4gdGhpcy5hZGRGaWx0ZXJPcHQodGFnLCB0YWcpKTtcclxuICAgICAgICBpZiAoIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWx0ZXItb3B0LXRhZ2xlc3MnKSkge1xyXG4gICAgICAgICAgdGhpcy5hZGRGaWx0ZXJPcHQoJycsIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCd0NTEyNScpLCB7IGlkOiAnZmlsdGVyLW9wdC10YWdsZXNzJyB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5maWx0ZXJPcHRpb25zU2V0ID0gdHJ1ZTtcclxuICAgIH0sXHJcbiAgICBhZGRGaWx0ZXJPcHQodGFnLCB0ZXh0LCBhdHRycykge1xyXG4gICAgICBpZiAodGhpcy50YWdzLmluY2x1ZGVzKHRhZykpIHJldHVybiB0aGlzO1xyXG5cclxuICAgICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbHRlci1lbnRyaWVzJyk7XHJcbiAgICAgIGNvbnN0IG9wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG5cclxuICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdCk7XHJcbiAgICAgIG9wdC52YWx1ZSA9IHRhZztcclxuICAgICAgb3B0LmlubmVyVGV4dCA9IHRleHQ7XHJcbiAgICAgIGlmIChhdHRycykge1xyXG4gICAgICAgIGZvciAobGV0IGEgaW4gYXR0cnMpIG9wdC5zZXRBdHRyaWJ1dGUoYSwgYXR0cnNbYV0pO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghdGhpcy50YWdzLmxlbmd0aCAmJiB0YWcpIHtcclxuICAgICAgICBjb25zdCBub3RhZ0ZpbHRlck9wdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWx0ZXItb3B0LW5vdGFnJyk7XHJcbiAgICAgICAgaWYgKG5vdGFnRmlsdGVyT3B0KSBzZWxlY3QucmVtb3ZlQ2hpbGQobm90YWdGaWx0ZXJPcHQpO1xyXG4gICAgICAgIGlmICghZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbHRlci1vcHQtdGFnbGVzcycpKSB7XHJcbiAgICAgICAgICB0aGlzLmFkZEZpbHRlck9wdCgnJywgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ3Q1MTI1JyksIHsgaWQ6ICdmaWx0ZXItb3B0LXRhZ2xlc3MnIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAodGFnKSB0aGlzLnRhZ3MucHVzaCh0YWcpO1xyXG4gICAgfSxcclxuICAgIGdldFRleHQobmFtZXMsIHNwZWMpIHtcclxuICAgICAgbGV0IGFsbF9tYXJrc19wbHVzX21ldGEgPSBzcGVjID09PSAnK21ldGEnLFxyXG4gICAgICAgICAgYWxsX21hcmtzX3BsdXNfbG9zdCA9IHNwZWMgPT09ICcrbG9zdCcsXHJcbiAgICAgICAgICBhbGxfbWFya3NfcGx1c19tZXRhX2FuZF9ub3RlcyA9IHNwZWMgPT09ICcrbm90ZXMnLFxyXG4gICAgICAgICAgYWxsX21hcmtzX2xvc3QgPSBzcGVjID09PSAnbG9zdCcsXHJcbiAgICAgICAgICBkZWZhdWx0TWFya2VycyA9IFsnbScsICcyJywgJzMnLCAyLCAzXSxcclxuXHJcbiAgICAgICAgICByZWplY3QgPSBkZWZhdWx0TWFya2Vycy5pbmNsdWRlcyhzcGVjKSA/XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uKGtleSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBrZXkgIT0gc3BlYztcclxuICAgICAgICAgICAgfSA6IHNwZWMgPT09ICdjJyA/XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uKGtleSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBkZWZhdWx0TWFya2Vycy5pbmNsdWRlcyhrZXkpO1xyXG4gICAgICAgICAgICB9IDogbnVsbCxcclxuXHJcbiAgICAgICAgICBuZXdMaW5lID0gJ1xcclxcbicsXHJcbiAgICAgICAgICBuZXdMaW5lcyA9ICdcXHJcXG5cXHJcXG4nLFxyXG4gICAgICAgICAgbm90ZSA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlJyksXHJcbiAgICAgICAgICB0ZXh0ID0gJycsXHJcbiAgICAgICAgICBsID0gbmFtZXMubGVuZ3RoLFxyXG4gICAgICAgICAgaSA9IDAsXHJcbiAgICAgICAgICBub3RlVGV4dCwgZW50cnksIG1hcmtzLCBtYXJrLCBsb3N0LCBuYW1lLCBtLCBuLCBqO1xyXG5cclxuICAgICAgcmV0dXJuIF9TVE9SRS5nZXQoJ2hpc3RvcnknKS50aGVuKGhpc3RvcnkgPT4ge1xyXG4gICAgICAgIGxldCBlbnRyaWVzID0gaGlzdG9yeS5lbnRyaWVzO1xyXG5cclxuICAgICAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgICAgbmFtZSA9IG5hbWVzW2ldO1xyXG4gICAgICAgICAgZW50cnkgPSBlbnRyaWVzW25hbWVdO1xyXG4gICAgICAgICAgbWFya3MgPSBlbnRyeS5tYXJrcztcclxuICAgICAgICAgIGxvc3QgPSBlbnRyeS5sb3N0O1xyXG4gICAgICAgICAgbSA9IG1hcmtzLmxlbmd0aDtcclxuICAgICAgICAgIG4gPSBsb3N0Lmxlbmd0aDtcclxuXHJcbiAgICAgICAgICBpZiAoIWFsbF9tYXJrc19sb3N0KSB7XHJcbiAgICAgICAgICAgIGlmIChhbGxfbWFya3NfcGx1c19tZXRhIHx8IGFsbF9tYXJrc19wbHVzX21ldGFfYW5kX25vdGVzKSB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0ICs9IG5hbWUgKyBuZXdMaW5lICtcclxuICAgICAgICAgICAgICAgICdVUkw6ICcgKyBlbnRyeS51cmwgKyBuZXdMaW5lICtcclxuICAgICAgICAgICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdwYWdlX3RpdGxlJykgKyAnOiAnICsgZW50cnkudGl0bGUgKyBuZXdMaW5lICtcclxuICAgICAgICAgICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdjcmVhdGVkJykgKyAnOiAnICsgdGhpcy5vcHRpbWl6ZURhdGVTdHJpbmcobmV3IERhdGUoZW50cnkuZmlyc3QpLnRvTG9jYWxlU3RyaW5nKCkpICsgbmV3TGluZSArXHJcbiAgICAgICAgICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbGFzdF9tb2RpZmllZCcpICsgJzogJyArIHRoaXMub3B0aW1pemVEYXRlU3RyaW5nKG5ldyBEYXRlKGVudHJ5Lmxhc3QpLnRvTG9jYWxlU3RyaW5nKCkpICtcclxuICAgICAgICAgICAgICAgIG5ld0xpbmUgKyBuZXdMaW5lcztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IG07IGorKykge1xyXG4gICAgICAgICAgICAgIG1hcmsgPSBtYXJrc1tqXTtcclxuXHJcbiAgICAgICAgICAgICAgaWYgKHJlamVjdCAmJiByZWplY3QobWFyay5rZXkpKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgICAgaWYgKGFsbF9tYXJrc19wbHVzX21ldGFfYW5kX25vdGVzKSB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0ICs9ICctLS0nICsgbmV3TGluZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgdGV4dCArPSBtYXJrLnRleHQucmVwbGFjZSgvXFxuL2csICdcXHJcXG4nKSArIG5ld0xpbmVzO1xyXG5cclxuICAgICAgICAgICAgICBpZiAoYWxsX21hcmtzX3BsdXNfbWV0YV9hbmRfbm90ZXMgJiYgbWFyay5ub3RlKSB7XHJcbiAgICAgICAgICAgICAgICBub3RlVGV4dCA9IG1hcmsubm90ZS50ZXh0IHx8IG1hcmsubm90ZTtcclxuICAgICAgICAgICAgICAgIHRleHQgKz0gJyAgJyArIG5vdGUgKyAnOicgKyBuZXdMaW5lICsgJyAgJyArIG5vdGVUZXh0LnJlcGxhY2UoL1xcbi9nLCAnXFxyXFxuICAnKSArIG5ld0xpbmVzO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKGFsbF9tYXJrc19sb3N0IHx8IGFsbF9tYXJrc19wbHVzX2xvc3QpIHtcclxuICAgICAgICAgICAgdGV4dCArPSBuZXdMaW5lcyArIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdsb3N0X21hcmtzJykgKyAnOicgKyBuZXdMaW5lcyArIG5ld0xpbmVzO1xyXG5cclxuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IG47IGorKykge1xyXG4gICAgICAgICAgICAgIG1hcmsgPSBsb3N0W2pdO1xyXG5cclxuICAgICAgICAgICAgICB0ZXh0ICs9IG1hcmsudGV4dC5yZXBsYWNlKC9cXG4vZywgJ1xcclxcbicpICsgbmV3TGluZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRleHQgKz0gbmV3TGluZXMgKyBuZXdMaW5lcyArIG5ld0xpbmVzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRleHQudHJpbSgpO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBnZXREYXRhKG5hbWVzLCB0eXBlLCBzcGVjKSB7XHJcbiAgICAgIGlmICh0eXBlID09PSAndGV4dCcpIHJldHVybiB0aGlzLmdldFRleHQobmFtZXMsIHNwZWMpO1xyXG5cclxuICAgICAgcmV0dXJuIF9TVE9SRS5nZXQoJ2hpc3RvcnknKS50aGVuKGhpc3RvcnkgPT4ge1xyXG4gICAgICAgIGxldCBlbnRyaWVzID0gdGhpcy5vcmlnRW50cmllcyA9IGhpc3RvcnkuZW50cmllcyxcclxuICAgICAgICAgICAgbCA9IG5hbWVzLmxlbmd0aCxcclxuICAgICAgICAgICAgZGF0YSA9ICcnLFxyXG4gICAgICAgICAgICBuZXdMaW5lcyA9ICdcXHJcXG5cXHJcXG4nLFxyXG4gICAgICAgICAgICBpID0gMDtcclxuXHJcbiAgICAgICAgZm9yICg7IGkgPCBsOyBpKyspIGRhdGEgKz0gZW50cmllc1tuYW1lc1tpXV1bdHlwZV0gKyBuZXdMaW5lcztcclxuXHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGdldFVSTHMobmFtZXMpIHtcclxuICAgICAgcmV0dXJuIF9TVE9SRS5nZXQoJ2hpc3RvcnknKS50aGVuKGhpc3RvcnkgPT4ge1xyXG4gICAgICAgIGxldCBlbnRyaWVzID0gaGlzdG9yeS5lbnRyaWVzLFxyXG4gICAgICAgICAgICB1cmxzID0gW10sXHJcbiAgICAgICAgICAgIGwgPSBuYW1lcy5sZW5ndGgsXHJcbiAgICAgICAgICAgIGkgPSAwO1xyXG5cclxuICAgICAgICBmb3IgKDsgaSA8IGw7IGkrKykgdXJscy5wdXNoKGVudHJpZXNbbmFtZXNbaV1dLnVybCk7XHJcblxyXG4gICAgICAgIHJldHVybiB1cmxzO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBvcHRpbWl6ZURhdGVTdHJpbmcoZGF0ZSkge1xyXG4gICAgICByZXR1cm4gKGRhdGVcclxuICAgICAgICAucmVwbGFjZSgvXihcXGR7MX0pKFxcRHsxfSkvLCAobSwgcCwgcSk9PiAnMCcgKyBwICsgcSlcclxuICAgICAgICAucmVwbGFjZSgvKFxcRHsxfSkoXFxkezF9XFxEezF9KS9nLCAobSwgcCwgcSkgPT4gcCArICcwJyArIHEpKTtcclxuICAgIH0sXHJcblxyXG4gICAgc2VhcmNoKGUsIGVsKSB7XHJcbiAgICAgIGNvbnN0IHRlcm0gPSBlbC52YWx1ZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICBjb25zdCBzZWFyY2hUeXBlID0gZWwuZ2V0QXR0cmlidXRlID8gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXR5cGUnKSA6ICcnO1xyXG4gICAgICBjb25zdCBjb3VudFNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3VudCcpO1xyXG4gICAgICBjb25zdCBjbGFzc01ldGggPSB0ZXJtID8gJ2FkZCcgOiAncmVtb3ZlJztcclxuICAgICAgY29uc3QgdG9nZ2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC10b2dnbGUnKTtcclxuICAgICAgdGhpcy5zZXR1cFNlYXJjaCh0ZXJtLCBzZWFyY2hUeXBlKS5yZW5kZXJFbnRyaWVzKCk7XHJcbiAgICAgIGNvdW50U2VsZWN0LmNsYXNzTGlzdFtjbGFzc01ldGhdKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgICAgdG9nZ2xlLmNsYXNzTGlzdFtjbGFzc01ldGhdKCdhY3RpdmUnKTtcclxuICAgIH0sXHJcbiAgICBzZXR1cFNlYXJjaCh0ZXJtLCBzZWFyY2hUeXBlKSB7XHJcbiAgICAgIHRlcm0gPSB0eXBlb2YgdGVybSA9PT0gJ3N0cmluZycgPyB0ZXJtIDogdGhpcy5zZWFyY2hUZXJtO1xyXG4gICAgICBjb25zdCBoaXN0b3J5ID0gdGhpcy5lbDtcclxuICAgICAgY29uc3Qgc2VhcmNoQ291bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWNvdW50Jyk7XHJcbiAgICAgIHRoaXMuc2VhcmNoZWQgPSBbXTtcclxuICAgICAgdGhpcy5zZWFyY2hUZXJtID0gdGVybTtcclxuICAgICAgaWYgKCF0ZXJtKSB7XHJcbiAgICAgICAgaGlzdG9yeS5jbGFzc0xpc3QucmVtb3ZlKCdzZWFyY2hlZCcpO1xyXG4gICAgICAgIGhpc3RvcnkuY2xhc3NMaXN0LnJlbW92ZSgnc2VhcmNoZWQtLWZ1bGwtdGV4dCcpO1xyXG4gICAgICAgIHNlYXJjaENvdW50LmlubmVyVGV4dCA9ICcnO1xyXG4gICAgICAgIHRoaXMuc2VhcmNoZWRGdWxsVGV4dCA9IGZhbHNlO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGhpc3RvcnkuY2xhc3NMaXN0LmFkZCgnc2VhcmNoZWQnKTtcclxuICAgICAgICBpZiAoc2VhcmNoVHlwZSA9PT0gJ2Z1bGwtdGV4dCcpIHtcclxuICAgICAgICAgIGhpc3RvcnkuY2xhc3NMaXN0LmFkZCgnc2VhcmNoZWQtLWZ1bGwtdGV4dCcpO1xyXG4gICAgICAgICAgdGhpcy5zZWFyY2hGdWxsVGV4dCh0ZXJtKTtcclxuICAgICAgICAgIHRoaXMuc2VhcmNoZWRGdWxsVGV4dCA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGhpc3RvcnkuY2xhc3NMaXN0LnJlbW92ZSgnc2VhcmNoZWQtLWZ1bGwtdGV4dCcpO1xyXG4gICAgICAgICAgdGhpcy5zZWFyY2hCeU5hbWUodGVybSk7XHJcbiAgICAgICAgICB0aGlzLnNlYXJjaGVkRnVsbFRleHQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2VhcmNoQ291bnQuaW5uZXJUZXh0ID0gdGhpcy5zZWFyY2hlZC5sZW5ndGggfHwgJyc7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9LFxyXG4gICAgc2VhcmNoQnlOYW1lKHRlcm0pIHtcclxuICAgICAgY29uc3QgbmFtZXMgPSB0aGlzLm5hbWVzO1xyXG4gICAgICBsZXQgbCA9IG5hbWVzLmxlbmd0aCwgaSA9IDAsIG5hbWU7XHJcblxyXG4gICAgICBmb3IoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgbmFtZSA9IG5hbWVzW2ldO1xyXG4gICAgICAgIGlmIChuYW1lLnRvTG93ZXJDYXNlKCkuc2VhcmNoKHRlcm0pICE9PSAtMSkge1xyXG4gICAgICAgICAgdGhpcy5zZWFyY2hlZC5wdXNoKG5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNlYXJjaEZ1bGxUZXh0KHRleHQpIHtcclxuICAgICAgY29uc3QgZW50cmllcyA9IHRoaXMub3JpZ0VudHJpZXM7XHJcbiAgICAgIGxldCBuYW1lLCBtYXJrcywgaSwgbWFya1RleHQsIHBvcywgZm91bmQ7XHJcblxyXG4gICAgICBjb25zdCByZXN1bHRzID0gdGhpcy5mdWxsVGV4dFNlYXJjaFJlc3VsdHMgPSB7fTtcclxuXHJcbiAgICAgIGZvciAobmFtZSBpbiBlbnRyaWVzKSB7XHJcbiAgICAgICAgbWFya3MgPSBlbnRyaWVzW25hbWVdLm1hcmtzO1xyXG4gICAgICAgIGZvdW5kID0gZmFsc2U7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IG1hcmtzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBtYXJrVGV4dCA9IG1hcmtzW2ldLnRleHQ7XHJcbiAgICAgICAgICBwb3MgPSBtYXJrVGV4dC50b0xvd2VyQ2FzZSgpLnNlYXJjaCh0ZXh0KTtcclxuICAgICAgICAgIGlmIChwb3MgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmVzdWx0c1tuYW1lXSA9IHJlc3VsdHNbbmFtZV0gfHwgW107XHJcbiAgICAgICAgICAgIHJlc3VsdHNbbmFtZV0ucHVzaCh7IG1hcms6IGksIHBvcyB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGZvdW5kKSB7XHJcbiAgICAgICAgICB0aGlzLnNlYXJjaGVkLnB1c2gobmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlU2VhcmNoKGUsIGVsKSB7XHJcbiAgICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1lbnRyaWVzLS1uYW1lJykudmFsdWUgPSAnJztcclxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtZW50cmllcy0tZnVsbC10ZXh0JykudmFsdWUgPSAnJztcclxuICAgICAgICBpZiAodGhpcy5zZWFyY2hUZXJtKSB0aGlzLnNlYXJjaChudWxsLCB7IHZhbHVlOiAnJyB9KTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNoYW5nZUNvdW50UGVyUGFnZShlLCBlbCkge1xyXG4gICAgICBsZXQgcCA9IHRoaXMucGVyUGFnZSA9IGVsLnZhbHVlICogMTtcclxuICAgICAgdGhpcy5wYWdlID0gMTtcclxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2VkOnBlci1wYWdlLWNvdW50JywgcCk7XHJcbiAgICAgIHRoaXMucmVuZGVyRW50cmllcygpO1xyXG4gICAgfSxcclxuICAgIHNldFZpZXcoZSwgZWwpIHtcclxuICAgICAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW50cmllcycpO1xyXG4gICAgICBjb25zdCB2YWwgPSBlbC52YWx1ZTtcclxuICAgICAgaWYgKHZhbCA9PT0gJ2xpc3QnKSB0YWJsZS5jbGFzc0xpc3QucmVtb3ZlKCdkZXRhaWxlZC1saXN0Jyk7XHJcbiAgICAgIGVsc2UgdGFibGUuY2xhc3NMaXN0LmFkZCgnZGV0YWlsZWQtbGlzdCcpO1xyXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZTp2aWV3LXNldHRpbmcnLCB2YWwpO1xyXG4gICAgfSxcclxuICAgIHNldHVwVmlldyh2aWV3KSB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZXQtdmlldycpLnZhbHVlID0gdmlldztcclxuICAgICAgdGhpcy5zZXRWaWV3KG51bGwsIHsgdmFsdWU6IHZpZXcgfSk7XHJcbiAgICB9LFxyXG4gICAgb25DaGFuZ2VBY3Rpb24oZSwgZWwpIHtcclxuICAgICAgaWYgKGVsLnZhbHVlID09PSAndGFnJykgc2V0VGltZW91dCgoKSA9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFnJykuZm9jdXMoKSwgMCk7XHJcbiAgICB9LFxyXG4gICAgc29ydChlLCBlbCkge1xyXG4gICAgICBsZXQgc29ydGVkID0gdGhpcy5zb3J0ZWQgPSBlbC52YWx1ZTtcclxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2U6c29ydC1zZXR0aW5nJywgc29ydGVkKTtcclxuICAgICAgdGhpcy5zZXR1cFNvcnQoc29ydGVkKS5yZW5kZXJFbnRyaWVzKCk7XHJcbiAgICB9LFxyXG4gICAgc2V0dXBTb3J0KHNvcnRlZCkge1xyXG4gICAgICBzb3J0ZWQgPSBzb3J0ZWQuc3BsaXQoJy0nKTtcclxuICAgICAgdGhpcy5uYW1lcyA9IF9TT1JULmJ5W3NvcnRlZFswXV1bc29ydGVkWzFdXSh0aGlzLm9yaWdFbnRyaWVzKTtcclxuICAgICAgdGhpcy5zb3J0U2VhcmNoUmVzdWx0cygpO1xyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgIH0sXHJcbiAgICBmaWx0ZXIoZSwgZWwpIHtcclxuICAgICAgY29uc3QgZmlsdGVyID0gZWwubm9kZU5hbWUgPT09ICdTUEFOJyA/IGVsLmZpcnN0Q2hpbGQuZGF0YSA6IGVsLnZhbHVlO1xyXG4gICAgICBjb25zdCBlbnRyaWVzID0gdGhpcy5vcmlnRW50cmllcztcclxuICAgICAgY29uc3QgZmlsdGVyZWRFbnRyaWVzID0ge307XHJcbiAgICAgIGxldCBlbnRyeSwgcngsIGMgPSAwO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsdGVyJykuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgIGZvciAobGV0IG5hbWUgaW4gZW50cmllcykge1xyXG4gICAgICAgIGVudHJ5ID0gZW50cmllc1tuYW1lXTtcclxuICAgICAgICByeCA9IG5ldyBSZWdFeHAoJ14nK2ZpbHRlcisnJHxeJytmaWx0ZXIrJ1xcXFxzfFxcXFxzJytmaWx0ZXIrJ1xcXFxzfFxcXFxzJytmaWx0ZXIrJyQnLCAnZycpO1xyXG4gICAgICAgIGlmICgoZmlsdGVyICYmIGVudHJ5LnRhZyAmJiBlbnRyeS50YWcuc2VhcmNoKHJ4KSAhPT0gLTEpIHx8ICghZW50cnkudGFnICYmIGZpbHRlciA9PSAnJykpIHtcclxuICAgICAgICAgIGZpbHRlcmVkRW50cmllc1tuYW1lXSA9IGVudHJ5O1xyXG4gICAgICAgICAgYysrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLmVudHJpZXMgPSBmaWx0ZXJlZEVudHJpZXM7XHJcbiAgICAgIHRoaXMuZmlsdGVyZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLnBhZ2UgPSAxO1xyXG4gICAgICB0aGlzLnJlbmRlckVudHJpZXMoKTtcclxuICAgICAgdGhpcy5lbWl0KCdmaWx0ZXJlZDpoaXN0b3J5JywgYyk7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlRmlsdGVyKGUsIGVsKSB7XHJcbiAgICAgIGVsLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWx0ZXItZW50cmllcycpLnNlbGVjdGVkSW5kZXggPSAwO1xyXG4gICAgICB0aGlzLmVudHJpZXMgPSB0aGlzLm9yaWdFbnRyaWVzO1xyXG4gICAgICB0aGlzLmZpbHRlcmVkID0gZmFsc2U7XHJcbiAgICAgIHRoaXMucGFnZSA9IDE7XHJcbiAgICAgIHRoaXMucmVuZGVyRW50cmllcygpO1xyXG4gICAgICB0aGlzLmVtaXQoJ2ZpbHRlcmVkOmhpc3RvcnknLCB0aGlzLm5hbWVzLmxlbmd0aCk7XHJcbiAgICB9LFxyXG4gICAgc29ydFNlYXJjaFJlc3VsdHMoKSB7XHJcbiAgICAgIGlmICghdGhpcy5zZWFyY2hlZC5sZW5ndGgpIHJldHVybjtcclxuICAgICAgY29uc3QgbmFtZXMgPSB0aGlzLm5hbWVzO1xyXG4gICAgICB0aGlzLnNlYXJjaGVkLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICBhID0gbmFtZXMuaW5kZXhPZihhKTtcclxuICAgICAgICBiID0gbmFtZXMuaW5kZXhPZihiKTtcclxuICAgICAgICBpZiAoYSA9PSBiKSByZXR1cm4gMDtcclxuICAgICAgICByZXR1cm4gYSA8IGIgPyAtMSA6IDE7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGNoZWNrbWFya0FsbChlLCBlbCkge1xyXG4gICAgICBsZXQgZGlyZWN0bHkgPSB0eXBlb2YgZWwgPT09ICdib29sZWFuJyxcclxuICAgICAgICAgIGNoZWNrZWQgPSBkaXJlY3RseSA/IGVsIDogZWwuY2hlY2tlZCxcclxuICAgICAgICAgIGlucHV0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbnRyaWVzJykuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lucHV0JyksXHJcbiAgICAgICAgICBpID0gaW5wdXRzLmxlbmd0aDtcclxuXHJcbiAgICAgIHdoaWxlIChpLS0pIGlucHV0c1tpXS5jaGVja2VkID0gY2hlY2tlZDtcclxuXHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0sXHJcbiAgICBkZWxlZ2F0ZUJ1dHRvbkFjdGlvbihlLCBlbCkge1xyXG4gICAgICBsZXQgYWN0aW9uID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWFjdGlvbicpLFxyXG4gICAgICAgICAgbmFtZSA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJyk7XHJcblxyXG4gICAgICBuYW1lID0gbmFtZSA/IFtuYW1lXSA6IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICF0aGlzW2FjdGlvbl0gfHwgdGhpc1thY3Rpb25dKG5hbWUsIGVsKTtcclxuICAgIH0sXHJcbiAgICB0b2dnbGVTd2l0Y2goZSwgZWwpIHtcclxuICAgICAgZWwgPSBlbC5jbGFzc0xpc3QuY29udGFpbnMoJ3N3aXRjaC0tc3luYycpID8gZWwgOiBlbC5wYXJlbnROb2RlO1xyXG4gICAgICBlbC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICAgICAgdGhpcy5kZWxlZ2F0ZUJ1dHRvbkFjdGlvbihlLCBlbCk7XHJcbiAgICB9LFxyXG4gICAgdW5kb1N5bmNUb2dnbGUobmFtZSkge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3dpdGNoLS1zeW5jW2RhdGEtbmFtZT1cIicgKyBuYW1lICsgJ1wiXScpLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgfSxcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgdGhpcy5yZXN1bWUoKTtcclxuXHJcbiAgICAgIF9TVE9SRS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICAgIGxldCBlbnRyaWVzID0gdGhpcy5lbnRyaWVzID0gdGhpcy5vcmlnRW50cmllcyA9IHN0b3JhZ2UuaGlzdG9yeS5lbnRyaWVzLFxyXG4gICAgICAgICAgICBzb3J0ZWQgPSBzdG9yYWdlLnNldHRpbmdzLmhpc3Rvcnkuc29ydGVkIHx8IHRoaXMuc29ydGVkLFxyXG4gICAgICAgICAgICB2aWV3ID0gc3RvcmFnZS5zZXR0aW5ncy5oaXN0b3J5LnZpZXcgfHwgdGhpcy52aWV3TW9kZSxcclxuICAgICAgICAgICAgbDtcclxuICAgICAgICB0aGlzLnNvcnRlZCA9IHNvcnRlZDtcclxuICAgICAgICB0aGlzLnNldHVwU29ydChzb3J0ZWQpO1xyXG4gICAgICAgIHRoaXMuc2V0dXBWaWV3KHZpZXcpO1xyXG4gICAgICAgIGwgPSB0aGlzLm5hbWVzLmxlbmd0aDtcclxuXHJcbiAgICAgICAgdGhpcy5zZXR1cFNlYXJjaCgpLnRvZ2dsZUhlYWRlckZpZWxkcyhsKS50aGVuKCgpID0+IHRoaXMucmVuZGVyRW50cmllcygpLnNldEZpbHRlck9wdGlvbnMoKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHBhZ2luYXRlKHBhZ2UpIHtcclxuICAgICAgdGhpcy5wYWdlID0gcGFnZTtcclxuICAgICAgdGhpcy5yZW5kZXJFbnRyaWVzKCk7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlRW50cnkoZW50cnkpIHtcclxuICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW50cnlbZGF0YS1uYW1lPVwiJyArIGVudHJ5Lm5hbWUgKyAnXCJdJyk7XHJcblxyXG4gICAgICBlbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjcmVhdGVkJylbMF0uaW5uZXJUZXh0ID0gZW50cnkuZmlyc3Q7XHJcbiAgICAgIGVsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2xhc3QnKVswXS5pbm5lclRleHQgPSBlbnRyeS5sYXN0O1xyXG4gICAgICBlbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjb3VudCcpWzBdLmlubmVyVGV4dCA9IGVudHJ5Lm1hcmtzLmxlbmd0aDtcclxuICAgICAgLy9lbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdsb3N0JylbMF0uaW5uZXJUZXh0ID0gZW50cnkubG9zdC5sZW5ndGg7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBuZXcgX0RPTU1PRFVMRSh7XHJcbiAgICBlbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V4cG9ydCcpLFxyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgICd1cGRhdGVkOnNldHRpbmdzJzogJ3VwZGF0ZUV4cG9ydExpbmtzJyxcclxuICAgICAgICAndXBkYXRlZDpoaXN0b3J5JzogJ3VwZGF0ZUV4cG9ydExpbmtzJyxcclxuICAgICAgICAndG9nZ2xlZDpzeW5jJzogJ3VwZGF0ZUV4cG9ydExpbmtzJyxcclxuICAgICAgICAnc3luY2VkOmVudHJ5JzogJ3VwZGF0ZUV4cG9ydExpbmtzJ1xyXG4gICAgICB9LFxyXG4gICAgICBET006IHtcclxuICAgICAgICBjbGljazoge1xyXG4gICAgICAgICAgJy5pbXBvcnQtYnV0dG9uJzogJ3RyaWdnZXJGaWxlSW5wdXQnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjaGFuZ2U6IHtcclxuICAgICAgICAgICcuaW1wb3J0LWZpbGUnOiAnaGFuZGxlRmlsZSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vdXNlZG93bjoge1xyXG4gICAgICAgICAgJy5leHBvcnQtYnV0dG9uJzogJ3VwZGF0ZUV4cG9ydE5hbWUnXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGF1dG9pbml0KCkge1xyXG4gICAgICB0aGlzLnVwZGF0ZUV4cG9ydExpbmtzKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIGltcG9ydDogZnVuY3Rpb24oc3RvcmVTdHJpbmcsIHR5cGUpIHtcclxuICAgICAgdmFyIHBhcnNlZFN0cmluZztcclxuXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgcGFyc2VkU3RyaW5nID0gSlNPTi5wYXJzZShzdG9yZVN0cmluZyk7XHJcbiAgICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRpc3BsYXlGYWlsdXJlKGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdlcnJvcl9maWxlX3BhcnNlJykpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAocGFyc2VkU3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdpbXBvcnQ6c3RvcmFnZScsIHBhcnNlZFN0cmluZywgdHlwZSk7XHJcbiAgICAgICAgdGhpcy5kaXNwbGF5RmFpbHVyZSgnJyk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgdHJpZ2dlckZpbGVJbnB1dDogZnVuY3Rpb24oZSwgZWwpIHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltcG9ydC0tJyArIGVsLmdldEF0dHJpYnV0ZSgnZGF0YS10eXBlJykpLmNsaWNrKCk7XHJcbiAgICB9LFxyXG4gICAgaGFuZGxlRmlsZShlLCBlbCkge1xyXG4gICAgICBsZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKSxcclxuICAgICAgICAgIGZpbGUgPSBlbC5maWxlc1swXSxcclxuICAgICAgICAgIHNpemUgPSBmaWxlLnNpemUgLyAxMDAwMDAwLFxyXG4gICAgICAgICAgdHlwZSA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS10eXBlJyksXHJcbiAgICAgICAgICBtb2QgPSB0aGlzO1xyXG5cclxuICAgICAgaWYgKHNpemUgPiA1MClcclxuICAgICAgICAgIHJldHVybiB0aGlzLmRpc3BsYXlGYWlsdXJlKGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdlcnJvcl9maWxlX3NpemUnKSk7XHJcblxyXG4gICAgICBpZiAodHlwZSA9PT0gJ3N5bmMnICYmIHNpemUgPiAwLjA5OSlcclxuICAgICAgICAgIHJldHVybiB0aGlzLmRpc3BsYXlGYWlsdXJlKGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdlcnJvcl9maWxlX3NpemVfc3luYycpKTtcclxuXHJcbiAgICAgIGlmIChmaWxlLm5hbWUuc3BsaXQoJy4nKS5wb3AoKSAhPT0gJ2pzb24nKVxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuZGlzcGxheUZhaWx1cmUoYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ2Vycm9yX2ZpbGVfZm9ybWF0JykpO1xyXG5cclxuICAgICAgcmVhZGVyLm9ubG9hZCA9IChmdW5jdGlvbihmaWxlKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgIG1vZC5pbXBvcnQoZS50YXJnZXQucmVzdWx0LCB0eXBlKTtcclxuICAgICAgICB9O1xyXG4gICAgICB9KShmaWxlKTtcclxuXHJcbiAgICAgIHJlYWRlci5yZWFkQXNUZXh0KGZpbGUpO1xyXG4gICAgfSxcclxuICAgIGRpc3BsYXlGYWlsdXJlKHJlYXNvbikge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1wb3J0LWVycm9yJykuaW5uZXJUZXh0ID0gcmVhc29uO1xyXG4gICAgfSxcclxuXHJcbiAgICB1cGRhdGVFeHBvcnRMaW5rcygpIHtcclxuICAgICAgY29uc3QgbG9jYWxEYXRhTGluayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdleHBvcnQtbG9jYWwnKTtcclxuICAgICAgY29uc3Qgc3luY2VkRGF0YUxpbmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXhwb3J0LXN5bmNlZCcpO1xyXG5cclxuICAgICAgX1NUT1JFLmdldCgnbG9jYWxfc3RvcmFnZScpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgICAgbG9jYWxEYXRhTGluay5ocmVmID0gJ2RhdGE6dGV4dC9qc29uO2NoYXJzZXQ9dXRmLTgsJyArIGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzdG9yYWdlKSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IF9TVE9SRS5nZXQoJ3N5bmNlZF9zdG9yYWdlJykudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgICBzeW5jZWREYXRhTGluay5ocmVmID0gJ2RhdGE6dGV4dC9qc29uO2NoYXJzZXQ9dXRmLTgsJyArIGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzdG9yYWdlKSk7XHJcbiAgICAgIH0pKTtcclxuICAgIH0sXHJcbiAgICB1cGRhdGVFeHBvcnROYW1lKGUsIGVsKSB7XHJcbiAgICAgIGVsLnBhcmVudE5vZGUuc2V0QXR0cmlidXRlKCdkb3dubG9hZCcsXHJcbiAgICAgICAgJ1RleHRtYXJrZXItZGF0YS0nICtcclxuICAgICAgICBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScpICsgJy0nICtcclxuICAgICAgICAobmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpLnJlcGxhY2UoL1xcRC9nLCAnXycpKSArXHJcbiAgICAgICAgJy5qc29uJ1xyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcbmltcG9ydCBfTE9HX0tFWVMgZnJvbSAnLi4vLi4vLi4vZGF0YS9sb2cta2V5cydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBuZXcgX0RPTU1PRFVMRSh7XHJcbiAgICBlbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ3MnKSxcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAndXBkYXRlZDpsb2dzJzogJ2xvZydcclxuICAgICAgfSxcclxuICAgICAgRE9NOiB7XHJcbiAgICAgICAgY2xpY2s6IHtcclxuICAgICAgICAgICcjY2xlYXItbG9ncyc6ICdjbGVhcidcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBhdXRvaW5pdCgpIHtcclxuICAgICAgdGhpcy5sb2coKTtcclxuICAgIH0sXHJcbiAgICBsb2coKSB7XHJcbiAgICAgIF9TVE9SRS5nZXQoJ2xvZ3MnKS50aGVuKGxvZ3MgPT4ge1xyXG4gICAgICAgIGxvZ3MgPSBsb2dzIHx8IFtdO1xyXG4gICAgICAgIGxldCB0YWJsZUJvZHkgPSB0aGlzLmVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKCd0Ym9keScpWzBdLFxyXG4gICAgICAgICAgICBsID0gbG9ncy5sZW5ndGgsXHJcbiAgICAgICAgICAgIGZyYWcgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksXHJcbiAgICAgICAgICAgIHRyLCB0ZF9kYXRlLCB0ZF9tc2csIG5vZGVfZGF0ZSwgbm9kZV9tc2csIGxvZywgdGltZSwgbXNnLCByZWFzb247XHJcblxyXG4gICAgICAgIGlmIChsKSB7XHJcbiAgICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoJ25vbG9ncycpO1xyXG4gICAgICAgICAgd2hpbGUobC0tKSB7XHJcbiAgICAgICAgICAgIGxvZyA9IGxvZ3NbbF07XHJcbiAgICAgICAgICAgIG1zZyA9IGxvZ1sxXTtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBtc2cgPT09ICdudW1iZXInKSBtc2cgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShfTE9HX0tFWVMuZ2V0S2V5QnlWYWx1ZShsb2dbMV0pKTtcclxuICAgICAgICAgICAgLy8nbnUnLHt5ZWFyOidudW1lcmljJyxtb250aDonMi1kaWdpdCcsZGF5OicyLWRpZ2l0Jyxob3VyOidudW1lcmljJyxzZWNvbmQ6J251bWVyaWMnLG1pbnV0ZTonbnVtZXJpYyd9XHJcbiAgICAgICAgICAgIHRpbWUgPSB0aGlzLm9wdGltaXplRGF0ZVN0cmluZygobmV3IERhdGUobG9nWzBdKSkudG9Mb2NhbGVTdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcclxuICAgICAgICAgICAgdGRfZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICAgICAgICAgIHRkX21zZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICAgICAgICAgIG5vZGVfZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRpbWUpO1xyXG4gICAgICAgICAgICBub2RlX21zZyA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG1zZyk7XHJcblxyXG4gICAgICAgICAgICB0ZF9kYXRlLmFwcGVuZENoaWxkKG5vZGVfZGF0ZSk7XHJcbiAgICAgICAgICAgIHRkX21zZy5hcHBlbmRDaGlsZChub2RlX21zZyk7XHJcbiAgICAgICAgICAgIGlmIChsb2dbMl0pIHtcclxuICAgICAgICAgICAgICByZWFzb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAvL3JlYXNvbi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShsb2dbMl0pKTtcclxuICAgICAgICAgICAgICByZWFzb24uaW5uZXJUZXh0ID0gbG9nWzJdO1xyXG4gICAgICAgICAgICAgIHRkX21zZy5hcHBlbmRDaGlsZChyZWFzb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRyLmFwcGVuZENoaWxkKHRkX2RhdGUpO1xyXG4gICAgICAgICAgICB0ci5hcHBlbmRDaGlsZCh0ZF9tc2cpO1xyXG4gICAgICAgICAgICBmcmFnLmFwcGVuZENoaWxkKHRyKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRhYmxlQm9keS5pbm5lclRleHQgPSAnJztcclxuICAgICAgICAgIHRhYmxlQm9keS5hcHBlbmRDaGlsZChmcmFnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdub2xvZ3MnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGNsZWFyKCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ2NsZWFyOmxvZ3MnKTtcclxuICAgIH0sXHJcbiAgICBvcHRpbWl6ZURhdGVTdHJpbmcoZGF0ZSkge1xyXG4gICAgICByZXR1cm4gKGRhdGVcclxuICAgICAgICAucmVwbGFjZSgvXihcXGR7MX0pKFxcRHsxfSkvLCAobSwgcCwgcSk9PiAnMCcgKyBwICsgcSlcclxuICAgICAgICAucmVwbGFjZSgvKFxcRHsxfSkoXFxkezF9XFxEezF9KS9nLCAobSwgcCwgcSkgPT4gcCArICcwJyArIHEpKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgX01BUktFUiB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGtleSwgY3VzdG9tQmdDb2xvcikge1xyXG4gICAgdGhpcy5rZXkgPSBrZXk7XHJcblxyXG4gICAgdGhpcy5zdHlsZXMgPSB7XHJcbiAgICAgICdiYWNrZ3JvdW5kLWNvbG9yJzogY3VzdG9tQmdDb2xvcixcclxuICAgICAgJ2NvbG9yJzogdW5kZWZpbmVkLFxyXG4gICAgICAnYm9yZGVyLWJvdHRvbSc6IHVuZGVmaW5lZCxcclxuICAgICAgJ2ZvbnQtc2l6ZSc6IHVuZGVmaW5lZCxcclxuICAgICAgJ2ZvbnQtZmFtaWx5JzogdW5kZWZpbmVkLFxyXG4gICAgICAnZm9udC13ZWlnaHQnOiB1bmRlZmluZWQsXHJcbiAgICAgICdmb250LXN0eWxlJzogdW5kZWZpbmVkLFxyXG4gICAgICAndGV4dC1kZWNvcmF0aW9uJzogdW5kZWZpbmVkLFxyXG4gICAgICAndGV4dC1zaGFkb3cnOiB1bmRlZmluZWRcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5zaGFkb3cgPSB7XHJcbiAgICAgIHg6ICcxcHgnLFxyXG4gICAgICB5OiAnMXB4JyxcclxuICAgICAgYmx1cjogJzFweCcsXHJcbiAgICAgIGNvbG9yOiAnIzAwMDAwMCdcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5pbml0KCkudGhlbigoKSA9PiB0aGlzLmluamVjdCgpLnByZXZpZXcoKSk7XHJcbiAgfVxyXG5cclxuICBpbml0KCkge1xyXG4gICAgcmV0dXJuIF9TVE9SRS5nZXQoJ21hcmtlcnMnKS50aGVuKG1hcmtlcnMgPT4ge1xyXG4gICAgICBjb25zdCBtYXJrZXIgPSBtYXJrZXJzW3RoaXMua2V5XTtcclxuICAgICAgY29uc3QgZXhpc3RpbmdTdHlsZSA9IG1hcmtlciA/IG1hcmtlci5zdHlsZSA6IG51bGw7XHJcblxyXG4gICAgICB0aGlzLmF1dG9ub3RlID0gbWFya2VyICYmIG1hcmtlci5hdXRvbm90ZSA/IHRydWUgOiBmYWxzZTtcclxuXHJcbiAgICAgIGlmICghZXhpc3RpbmdTdHlsZSkgdGhpcy5zZXRTdHlsZSgpO1xyXG4gICAgICBlbHNlIHRoaXMuc3R5bGUgPSBleGlzdGluZ1N0eWxlO1xyXG5cclxuICAgICAgbGV0IHN0eWxlcyA9IHRoaXMuc3R5bGUuc3BsaXQoJzsnKSxcclxuICAgICAgICAgIGkgPSBzdHlsZXMubGVuZ3RoLFxyXG4gICAgICAgICAgc3R5bGUsIHN0eWxlU3BsaXQsIHRleHRTaGFkb3c7XHJcblxyXG4gICAgICB3aGlsZSAoaS0tKSB7XHJcbiAgICAgICAgc3R5bGUgPSBzdHlsZXNbaV07XHJcbiAgICAgICAgaWYgKHN0eWxlKSB7XHJcbiAgICAgICAgICBzdHlsZVNwbGl0ID0gc3R5bGUuc3BsaXQoJzonKTtcclxuICAgICAgICAgIHRoaXMuc3R5bGVzW3N0eWxlU3BsaXRbMF1dID0gc3R5bGVTcGxpdFsxXTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICgodGV4dFNoYWRvdyA9IHRoaXMuc3R5bGVzWyd0ZXh0LXNoYWRvdyddKSAmJiB0ZXh0U2hhZG93ICE9PSAnbm9uZScpIHtcclxuICAgICAgICBsZXQgc2hhZG93U3BsaXQgPSB0ZXh0U2hhZG93LnNwbGl0KCcgJyk7XHJcbiAgICAgICAgdGhpcy5zaGFkb3cueCA9IHNoYWRvd1NwbGl0WzBdO1xyXG4gICAgICAgIHRoaXMuc2hhZG93LnkgPSBzaGFkb3dTcGxpdFsxXTtcclxuICAgICAgICB0aGlzLnNoYWRvdy5ibHVyID0gc2hhZG93U3BsaXRbMl07XHJcbiAgICAgICAgdGhpcy5zaGFkb3cuY29sb3IgPSBzaGFkb3dTcGxpdFszXTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGluamVjdCgpIHtcclxuICAgIGxldCBtYXJrZXIgPSB0aGlzLFxyXG4gICAgICAgIHN0eWxlcyA9IHRoaXMuc3R5bGVzLFxyXG4gICAgICAgIGJnSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmctY29sb3InKSxcclxuICAgICAgICBjb2xvcklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHQtY29sb3InKSxcclxuICAgICAgICBib3JkZXJJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib3JkZXItY29sb3InKSxcclxuICAgICAgICBhdXRvbm90ZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F1dG9ub3RlLWNvbG9yJyksXHJcbiAgICAgICAgYmcgPSBzdHlsZXNbJ2JhY2tncm91bmQtY29sb3InXSxcclxuICAgICAgICBjb2xvciA9IHN0eWxlc1snY29sb3InXSxcclxuICAgICAgICBib3JkZXIgPSBzdHlsZXNbJ2JvcmRlci1ib3R0b20nXSxcclxuICAgICAgICBhdXRvbm90ZUNvbG9yID0gdGhpcy5hdXRvbm90ZSB8fCAnJyxcclxuICAgICAgICBzaGFkb3csIHNoYWRvd1NlbGVjdCwgaTtcclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXV0by1ub3RlJykuY2hlY2tlZCA9IHRoaXMuYXV0b25vdGU7XHJcbiAgICBhdXRvbm90ZUlucHV0LnZhbHVlID0gYXV0b25vdGVDb2xvciB8fCAneWVsbG93JztcclxuICAgIGF1dG9ub3RlSW5wdXQuZGlzYWJsZWQgPSAhYXV0b25vdGVDb2xvcjtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiZy1jb2xvci1jaGVja2JveCcpLmNoZWNrZWQgPSAhIWJnO1xyXG4gICAgYmdJbnB1dC52YWx1ZSA9IGJnIHx8ICcjZmZmZmZmJztcclxuICAgIGJnSW5wdXQuZGlzYWJsZWQgPSAhYmc7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dC1jb2xvci1jaGVja2JveCcpLmNoZWNrZWQgPSAhIWNvbG9yO1xyXG4gICAgY29sb3JJbnB1dC52YWx1ZSA9IGNvbG9yIHx8ICcjMDAwMDAwJztcclxuICAgIGNvbG9ySW5wdXQuZGlzYWJsZWQgPSAhY29sb3I7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9yZGVyLWNvbG9yLWNoZWNrYm94JykuY2hlY2tlZCA9ICEhYm9yZGVyO1xyXG4gICAgYm9yZGVySW5wdXQudmFsdWUgPSBib3JkZXIgfHwgJzFweCBzb2xpZCAjZmYwMDAwJztcclxuICAgIGJvcmRlcklucHV0LmRpc2FibGVkID0gIWJvcmRlcjtcclxuXHJcbiAgICBbJ2ZvbnQtc2l6ZScsICdmb250LWZhbWlseScsICdmb250LXdlaWdodCcsICdmb250LXN0eWxlJywgJ3RleHQtZGVjb3JhdGlvbiddLmZvckVhY2gocHJvcCA9PiB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHByb3ApLnZhbHVlID0gc3R5bGVzW3Byb3BdIHx8ICdkZWZhdWx0JztcclxuICAgIH0pO1xyXG5cclxuICAgIHNoYWRvd1NlbGVjdCA9ICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dC1zaGFkb3cnKTtcclxuICAgIHNoYWRvdyA9IHN0eWxlc1sndGV4dC1zaGFkb3cnXTtcclxuICAgIGkgPSAhc2hhZG93ID8gMCA6IHNoYWRvdyA9PT0gJ25vbmUnID8gMiA6IDE7XHJcblxyXG4gICAgc2hhZG93U2VsZWN0LnNlbGVjdGVkSW5kZXggPSBpO1xyXG4gICAgc2hhZG93U2VsZWN0LmNoaWxkcmVuW2ldLmNsaWNrKCk7XHJcblxyXG4gICAgWyd4JywgJ3knLCAnYmx1cicsICdjb2xvciddLmZvckVhY2gocHJvcCA9PiB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0LXNoYWRvdy0nICsgcHJvcCkudmFsdWUgPSBtYXJrZXIuc2hhZG93W3Byb3BdLnJlcGxhY2UoJ3B4JywgJycpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIHByZXZpZXcoKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXhhbXBsZScpLnN0eWxlID0gdGhpcy5zdHlsZTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgdXBkYXRlKGVsKSB7XHJcbiAgICBsZXQgY2xhc3NlcyA9IGVsLmNsYXNzTGlzdCxcclxuICAgICAgICBwcm9wID0gZWwubmFtZSxcclxuICAgICAgICB2YWw7XHJcblxyXG4gICAgaWYgKGNsYXNzZXMuY29udGFpbnMoJ2Nzcy1jb2xvcicpKSB7XHJcbiAgICAgIGlmIChlbC5jaGVja2VkKSB7XHJcbiAgICAgICAgdmFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcpKS52YWx1ZTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQocHJvcCwgdmFsKSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLnN0eWxlc1twcm9wXSA9IHByb3AgPT09ICdib3JkZXItYm90dG9tJyA/ICcxcHggc29saWQgJyArIHZhbCA6IHZhbDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnN0eWxlc1twcm9wXSA9IHVuZGVmaW5lZDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoY2xhc3Nlcy5jb250YWlucygnc2hhZG93JykpIHtcclxuICAgICAgdmFsID0gZWwudmFsdWU7XHJcblxyXG4gICAgICBpZiAodmFsID09PSAnZGVmYXVsdCcgfHwgIXRoaXMuaXNWYWxpZChwcm9wLCB2YWwpKVxyXG4gICAgICAgIHRoaXMuc3R5bGVzW3Byb3BdID0gJyc7XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIGxldCBtYXJrZXIgPSB0aGlzO1xyXG5cclxuICAgICAgICBzd2l0Y2godmFsKSB7XHJcbiAgICAgICAgICBjYXNlICdub25lJzogbWFya2VyLnN0eWxlc1sndGV4dC1zaGFkb3cnXSA9ICdub25lJzsgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdkZWZhdWx0JzogbWFya2VyLnN0eWxlc1sndGV4dC1zaGFkb3cnXSA9IHVuZGVmaW5lZDsgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdzaGFkb3cnOiBtYXJrZXIuc2V0U2hhZG93KCk7IGJyZWFrO1xyXG4gICAgICAgICAgZGVmYXVsdDogcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoY2xhc3Nlcy5jb250YWlucygnc2hhZG93LXZhbHVlJykpIHtcclxuICAgICAgdmFsID0gZWwudmFsdWU7XHJcblxyXG4gICAgICBpZiAoIXRoaXMuaXNWYWxpZChwcm9wLCB2YWwpKVxyXG4gICAgICAgIHRoaXMuc3R5bGVzW3Byb3BdID0gJyc7XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIGlmIChjbGFzc2VzLmNvbnRhaW5zKCdzaGFkb3ctcHgtdmFsdWUnKSlcclxuICAgICAgICAgIHZhbCArPSAncHgnO1xyXG5cclxuICAgICAgICB0aGlzLnNoYWRvd1twcm9wXSA9IHZhbDtcclxuICAgICAgICB0aGlzLnNldFNoYWRvdygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChwcm9wID09PSAnYm9yZGVyLWJvdHRvbScpIHtcclxuICAgICAgdmFsID0gJzFweCBzb2xpZCAnICsgZWwudmFsdWU7XHJcbiAgICAgIHRoaXMuc3R5bGVzW3Byb3BdID0gdmFsO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHZhbCA9IGVsLnZhbHVlO1xyXG5cclxuICAgICAgaWYgKHZhbCA9PT0gJ2RlZmF1bHQnIHx8ICF0aGlzLmlzVmFsaWQocHJvcCwgdmFsKSlcclxuICAgICAgICB0aGlzLnN0eWxlc1twcm9wXSA9ICcnO1xyXG4gICAgICBlbHNlXHJcbiAgICAgICAgdGhpcy5zdHlsZXNbcHJvcF0gPSB2YWw7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuc2V0U3R5bGUoKS5wcmV2aWV3KCk7XHJcbiAgfVxyXG4gIGlzVmFsaWQocHJvcCwgdmFsKSB7XHJcbiAgICBsZXQgdmFsaWQ7XHJcblxyXG4gICAgc3dpdGNoKHByb3ApIHtcclxuICAgICAgY2FzZSAnYmFja2dyb3VuZC1jb2xvcic6IHZhbGlkID0gL14jWzAtOUEtRl17Nn0kL2kudGVzdCh2YWwpOyBicmVhaztcclxuICAgICAgY2FzZSAnY29sb3InOiB2YWxpZCA9IC9eI1swLTlBLUZdezZ9JC9pLnRlc3QodmFsKTsgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2JvcmRlci1ib3R0b20nOiB2YWxpZCA9IC9eI1swLTlBLUZdezZ9JC9pLnRlc3QodmFsKTsgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2ZvbnQtc2l6ZSc6IHZhbGlkID0gL15bMC05XXsxLDJ9cHgkLy50ZXN0KHZhbCk7IGJyZWFrO1xyXG4gICAgICBjYXNlICdmb250LWZhbWlseSc6IHZhbGlkID0gL15bYS16LFxccy1dezUsNDB9JC9pLnRlc3QodmFsKTsgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2ZvbnQtd2VpZ2h0JzogdmFsaWQgPSAvXlthLXpdezQsN30kL2kudGVzdCh2YWwpOyBicmVhaztcclxuICAgICAgY2FzZSAnZm9udC1zdHlsZSc6IHZhbGlkID0gL15bYS16XXs0LDd9JC9pLnRlc3QodmFsKTsgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3RleHQtZGVjb3JhdGlvbic6IHZhbGlkID0gL15bYS16LV17NywxMn0kL2kudGVzdCh2YWwpOyBicmVhaztcclxuICAgICAgY2FzZSAndGV4dC1zaGFkb3cnOiB2YWxpZCA9IC9eW2Etel17NCw3fSQvaS50ZXN0KHZhbCk7IGJyZWFrO1xyXG4gICAgICBjYXNlICd4JzogdmFsaWQgPSAvXlxcZCQvOyBicmVhaztcclxuICAgICAgY2FzZSAneSc6IHZhbGlkID0gL15cXGQkLzsgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2JsdXInOiB2YWxpZCA9IC9eXFxkJC87IGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OiB2YWxpZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB2YWxpZDtcclxuICB9XHJcbiAgc2V0U2hhZG93KCkge1xyXG4gICAgdGhpcy5zdHlsZXNbJ3RleHQtc2hhZG93J10gPSB0aGlzLnNoYWRvdy54ICsgJyAnICsgdGhpcy5zaGFkb3cueSArICcgJyArIHRoaXMuc2hhZG93LmJsdXIgKyAnICcgKyB0aGlzLnNoYWRvdy5jb2xvcjtcclxuICB9XHJcbiAgc2V0U3R5bGUoKSB7XHJcbiAgICBsZXQgc3R5bGUgPSAnJywgdmFsO1xyXG5cclxuICAgIGZvciAodmFyIGkgaW4gdGhpcy5zdHlsZXMpIHtcclxuICAgICAgdmFsID0gdGhpcy5zdHlsZXNbaV07XHJcbiAgICAgIGlmICh2YWwpIHN0eWxlICs9IGkgKyAnOicgKyB2YWwgKyAnOyc7XHJcbiAgICB9XHJcbiAgICB0aGlzLnN0eWxlID0gc3R5bGU7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGVsKSB7XHJcblxyXG4gIHJldHVybiBuZXcgX0RPTU1PRFVMRSh7XHJcbiAgICBlbCxcclxuXHRcdGV2ZW50czoge1xyXG4gICAgICBET006IHtcclxuICAgICAgICBjbGljazoge1xyXG4gICAgICAgICAgJ2xpJzogJ3RvZ2dsZSdcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHRcdH0sXHJcbiAgICBwYWdlTmF2OiBudWxsLFxyXG4gICAgY3VycmVudDogbnVsbCxcclxuXHJcbiAgICBhdXRvaW5pdCgpIHtcclxuICAgICAgdGhpcy5wYWdlTmF2ID0gZWwuaGFzQXR0cmlidXRlKCdkYXRhLXBhZ2UtbmF2Jyk7XHJcbiAgICAgIGxldCBjdXJyZW50ID0gdGhpcy5jdXJyZW50ID0gZWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYWN0aXZlJylbMF07XHJcbiAgICAgIHRoaXMub3BlbihjdXJyZW50KTtcclxuICAgIH0sXHJcblxyXG4gICAgdG9nZ2xlKGUsIGVsKSB7XHJcbiAgICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc2FibGVkJykgfHwgdGhpcy5jdXJyZW50ID09IGVsKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICBpZiAodGhpcy5jdXJyZW50KSB0aGlzLmNsb3NlKHRoaXMuY3VycmVudCk7XHJcblxyXG4gICAgICB0aGlzLm9wZW4oZWwpO1xyXG4gICAgfSxcclxuICAgIG9wZW4oZWwpIHtcclxuICAgICAgY29uc3QgdGFyZ2V0SWQgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0Jyk7XHJcbiAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXJnZXRJZCkuY2xhc3NMaXN0LnJlbW92ZSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICAgIHRoaXMuZW1pdCgnb3BlbmVkOnRhYicsIHRhcmdldElkKTtcclxuICAgICAgdGhpcy5jdXJyZW50ID0gZWw7XHJcbiAgICAgIGlmICh0aGlzLnBhZ2VOYXYpIHdpbmRvdy5kb2N1bWVudC50aXRsZSA9ICdUZXh0bWFya2VyIC0gJyArIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKHRhcmdldElkKTtcclxuICAgIH0sXHJcbiAgICBjbG9zZShlbCkge1xyXG4gICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcpKS5jbGFzc0xpc3QuYWRkKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5pbXBvcnQgX01BUktFUiBmcm9tICcuL21hcmtlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBuZXcgX0RPTU1PRFVMRSh7XHJcbiAgICBlbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NldHRpbmdzJyksXHJcbiAgICBldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ2ltcG9ydGVkOnNldHRpbmdzJzogJ3VwZGF0ZScsXHJcbiAgICAgICAgJ3VwZGF0ZWQ6YmctY29sb3Itc2V0dGluZ3MnOiAndXBkYXRlJyxcclxuICAgICAgICAndXBkYXRlZDpjdXN0b20tc2VhcmNoLXNldHRpbmdzJzogJ3Nob3dDdXN0b21TZWFyY2hTZXR0aW5nU3VjY2VzcycsXHJcbiAgICAgICAgJ3RvZ2dsZWQ6c3luYy1zZXR0aW5ncyc6ICd1cGRhdGUnXHJcbiAgICAgIH0sXHJcbiAgICAgIERPTToge1xyXG4gICAgICAgIGNoYW5nZToge1xyXG4gICAgICAgICAgJy5jc3MnOiAnY2hhbmdlU3R5bGUnLFxyXG4gICAgICAgICAgJyNjdXN0b21pemVkLWtleSc6ICd1cGRhdGVNYXJrZXInLFxyXG4gICAgICAgICAgJyNhZGQta2V5JzogJ2FkZE1hcmtlcicsXHJcbiAgICAgICAgICAnI3JlbW92ZS1rZXknOiAncmVtb3ZlTWFya2VyJyxcclxuICAgICAgICAgICcubWFyay1vcHQnOiAnY2hhbmdlTWFya01ldGhvZCcsXHJcbiAgICAgICAgICAnLnNjLWNiJzogJ3RvZ2dsZVNob3J0Y3V0JyxcclxuICAgICAgICAgICcuc2hvcnRjdXQtc2VsZWN0JzogJ2NoYW5nZVNob3J0Y3V0JyxcclxuICAgICAgICAgICcuc2F2ZS1vcHQnOiAnY2hhbmdlU2F2ZU9wdCcsXHJcbiAgICAgICAgICAnLm5hbWluZy1vcHQnOiAnY2hhbmdlTmFtaW5nT3B0JyxcclxuICAgICAgICAgICcjbm90ZXMtbmV3JzogJ3RvZ2dsZVNhdmVOb3RlT3B0JyxcclxuICAgICAgICAgICcuY3VzdG9taXplLXF1aWNrYnV0dG9ucyc6ICdjaGFuZ2VRdWlja2J1dHRvbk9wdCcsXHJcbiAgICAgICAgICAnLmRvd25sb2FkLXF1aWNrYnV0dG9uLW9wdCc6ICdzd2l0Y2hRdWlja2J1dHRvbk9wdCcsXHJcbiAgICAgICAgICAnLmN0bS1jYic6ICd0b2dnbGVDdG0nLFxyXG4gICAgICAgICAgJy5ub3Rlcy1jYic6ICd0b2dnbGVOb3RlcycsXHJcbiAgICAgICAgICAnLm1pc2MtY2InOiAndG9nZ2xlTWlzYycsXHJcbiAgICAgICAgICAnLnRiYnBvd2VyLW9wdCc6ICd0b2dnbGVUQkJQb3dlck9wdCcsXHJcbiAgICAgICAgICAnLnRtdWlwb3MnOiAnY2hhbmdlVG11aVBvc2l0aW9uT3B0JyxcclxuICAgICAgICAgICcjcHJpdmF0ZS1zYXZlJzogJ3RvZ2dsZVByaXZTYXZlJyxcclxuICAgICAgICAgICcjYXV0by1ub3RlJzogJ3RvZ2dsZUF1dG9Ob3RlT3B0JyxcclxuICAgICAgICAgICcjaW1tdXQnOiAndG9nZ2xlSW1tdXRPcHQnLFxyXG4gICAgICAgICAgJyNkcm9wLWxvc3Nlcyc6ICd0b2dnbGVEcm9wTG9zc2VzT3B0JyxcclxuICAgICAgICAgICcjYXV0b25vdGUtY29sb3InOiAnY2hhbmdlQXV0b05vdGVPcHQnLFxyXG4gICAgICAgICAgJyNpZ25vcmUtaGFzaCc6ICdjaGFuZ2VIYXNoT3B0JyxcclxuICAgICAgICAgICcjYWRkb24tYXV0b2NzJzogJ3RvZ2dsZUF1dG9jc09wdCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNsaWNrOiB7XHJcbiAgICAgICAgICAnI2N1c3RvbS1zZWFyY2gnOiAnY2hhbmdlQ3VzdG9tU2VhcmNoJyxcclxuICAgICAgICAgICcuY3VzdG9tLXNlYXJjaC1pbnB1dCc6ICdoaWRlQ3VzdG9tU2VhcmNoU2V0dGluZ1N1Y2Nlc3MnXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgYWxsb3dlZEtleXM6ICdhIGIgYyBkIGUgZiBnIGggaSBqIGsgbCBuIG8gcCBxIHIgcyB0IHUgdiB4IHkgeiAwIDEgNCA1IDYgNyA4IDkgZW50ZXIgLSArJy5zcGxpdCgnICcpLFxyXG4gICAgYWxsb3dlZFNob3J0Y3V0czogWycnLCAnY3RybEtleScsICdzaGlmdEtleScsICdhbHRLZXknLCAnY3RybEtleS1zaGlmdEtleScsICdjdHJsS2V5LWFsdEtleScsICdzaGlmdEtleS1hbHRLZXknLCAnbWV0YUtleScsICdtZXRhS2V5LXNoaWZ0S2V5JywgJ21ldGFLZXktYWx0S2V5J10sXHJcbiAgICBhbGxvd2VkUXVpY2tidXR0b25PcHRzOiBbJ3RpdGxlJywgJ3VybCcsICd0ZXh0JywgJ3RleHQgK21ldGEnLCAndGV4dCArbm90ZXMnLCAndGV4dCArbG9zdCcsICd0ZXh0IG0nLCAndGV4dCAyJywgJ3RleHQgMycsICd0ZXh0IGMnLCAndGV4dCBsb3N0J10sXHJcbiAgICBtYXJrZXJLZXlzOiBbJ20nLCAnMicsICczJ10sXHJcbiAgICBjdXN0b21NYXJrZXJLZXlzOiBbXSxcclxuICAgIG1hcmtlcjogbnVsbCxcclxuICAgIGN1c3RvbVNlYXJjaDogYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ2xuZycpICsgJy53aWtpcGVkaWEub3JnL3dpa2kvJyxcclxuXHJcbiAgICBhdXRvaW5pdCgpIHtcclxuICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICB9LFxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgX1NUT1JFLmdldCgnc2V0dGluZ3MnKS50aGVuKHNldHRpbmdzID0+IHtcclxuICAgICAgICBsZXQgbWFya2VycyA9IHNldHRpbmdzLm1hcmtlcnMsXHJcbiAgICAgICAgICAgIG1hcmtlcktleXMgPSB0aGlzLm1hcmtlcktleXMsXHJcbiAgICAgICAgICAgIGN1c3RvbU1hcmtlcktleXMgPSB0aGlzLmN1c3RvbU1hcmtlcktleXMsXHJcbiAgICAgICAgICAgIGksIGtleTtcclxuXHJcbiAgICAgICAgZm9yIChrZXkgaW4gbWFya2Vycykge1xyXG4gICAgICAgICAgaSA9IGtleS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgaWYgKCFtYXJrZXJLZXlzLmluY2x1ZGVzKGkpICYmICFjdXN0b21NYXJrZXJLZXlzLmluY2x1ZGVzKGkpKVxyXG4gICAgICAgICAgICB0aGlzLmN1c3RvbU1hcmtlcktleXMucHVzaChpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucmVuZGVyTWFya2VyU2VsZWN0T3B0aW9ucygpXHJcbiAgICAgICAgICAgIC51cGRhdGVNYXJrZXIodGhpcy5tYXJrZXIgPyB0aGlzLm1hcmtlci5rZXkgOiAnbScpXHJcbiAgICAgICAgICAgIC5pbmplY3RTZXR0aW5ncyhzZXR0aW5ncyk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHJlc3VtZSgpIHtcclxuICAgICAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY3VzdG9tLWtleScpKS5mb3JFYWNoKGVsID0+IGVsLnJlbW92ZSgpKTtcclxuICAgICAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY3VzdG9tLW1hcmtlci1vcHRpb24nKSkuZm9yRWFjaChlbCA9PiBlbC5yZW1vdmUoKSk7XHJcbiAgICAgIHRoaXMuY3VzdG9tTWFya2VyS2V5cyA9IFtdO1xyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgIH0sXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgIHRoaXMucmVzdW1lKCkuaW5pdCgpO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZU1hcmtlcihlLCBlbCwgY3VzdG9tQmdDb2xvcikge1xyXG4gICAgICBsZXQga2V5ID0gZWwgPyBlbC52YWx1ZSA6IGUgPyBlIDogdGhpcy5tYXJrZXIgPyB0aGlzLm1hcmtlci5rZXkgOiAnbSc7XHJcblxyXG4gICAgICB0aGlzLm1hcmtlciA9IG5ldyBfTUFSS0VSKGtleSwgY3VzdG9tQmdDb2xvcik7XHJcblxyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgIH0sXHJcbiAgICByZW5kZXJNYXJrZXJTZWxlY3RPcHRpb25zKCkge1xyXG4gICAgICBsZXQga2V5U2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1c3RvbWl6ZWQta2V5JyksXHJcbiAgICAgICAgICBrZXlJY29ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXN0b20ta2V5cycpLFxyXG4gICAgICAgICAgYWRkS2V5U2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1rZXknKSxcclxuICAgICAgICAgIHJlbW92ZUtleVNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZW1vdmUta2V5JyksXHJcblxyXG4gICAgICAgICAgYWxsb3dlZEtleXMgPSB0aGlzLmFsbG93ZWRLZXlzLFxyXG4gICAgICAgICAgY3VzdG9tTWFya2VyS2V5cyA9IHRoaXMuY3VzdG9tTWFya2VyS2V5cyxcclxuXHJcbiAgICAgICAgICBhID0gYWxsb3dlZEtleXMubGVuZ3RoLFxyXG4gICAgICAgICAgYyA9IGN1c3RvbU1hcmtlcktleXMubGVuZ3RoLFxyXG4gICAgICAgICAgaSA9IDAsXHJcblxyXG4gICAgICAgICAgZnJhZ21lbnQxID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLFxyXG4gICAgICAgICAgZnJhZ21lbnQyID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLFxyXG4gICAgICAgICAgZnJhZ21lbnQzID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLFxyXG4gICAgICAgICAgZnJhZ21lbnQ0ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLFxyXG5cclxuICAgICAgICAgIG9wdGlvbiwgaWNvbiwgdmFsLCBWYWw7XHJcblxyXG4gICAgICBmb3IgKDsgaSA8IGM7IGkrKykge1xyXG4gICAgICAgIHZhbCA9IGN1c3RvbU1hcmtlcktleXNbaV07XHJcbiAgICAgICAgVmFsID0gdmFsLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgVmFsID0gVmFsID09PSAnRU5URVInID8gU3RyaW5nLmZyb21DaGFyQ29kZSgweDIxQjUpIDogVmFsO1xyXG4gICAgICAgIG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICAgIGZyYWdtZW50MS5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IHZhbDtcclxuICAgICAgICBvcHRpb24uaW5uZXJUZXh0ID0gdmFsLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgb3B0aW9uLmNsYXNzTmFtZSA9ICdjdXN0b20tbWFya2VyLW9wdGlvbiBjdXN0b20tbWFya2VyLW9wdGlvbi0nICsgdmFsO1xyXG5cclxuICAgICAgICBmcmFnbWVudDMuYXBwZW5kQ2hpbGQob3B0aW9uLmNsb25lTm9kZSh0cnVlKSk7XHJcblxyXG4gICAgICAgIGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBmcmFnbWVudDIuYXBwZW5kQ2hpbGQoaWNvbik7XHJcbiAgICAgICAgaWNvbi5jbGFzc05hbWUgPSAna2V5IGN1c3RvbS1rZXknO1xyXG4gICAgICAgIGljb24uaWQgPSAnY3VzdG9tLWtleS0nICsgdmFsO1xyXG4gICAgICAgIGljb24uaW5uZXJUZXh0ID0gVmFsO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBrZXlTZWxlY3QuYXBwZW5kQ2hpbGQoZnJhZ21lbnQxKTtcclxuICAgICAga2V5SWNvbnMuYXBwZW5kQ2hpbGQoZnJhZ21lbnQyKTtcclxuICAgICAgcmVtb3ZlS2V5U2VsZWN0LmFwcGVuZENoaWxkKGZyYWdtZW50Myk7XHJcblxyXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgYTsgaSsrKSB7XHJcbiAgICAgICAgdmFsID0gYWxsb3dlZEtleXNbaV0udG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICAgICAgaWYgKGN1c3RvbU1hcmtlcktleXMuaW5jbHVkZXModmFsKSlcclxuICAgICAgICAgICAgY29udGludWVcclxuXHJcbiAgICAgICAgVmFsID0gdmFsLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgZnJhZ21lbnQ0LmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gdmFsO1xyXG4gICAgICAgIG9wdGlvbi5pbm5lclRleHQgPSBWYWw7XHJcbiAgICAgICAgb3B0aW9uLmNsYXNzTmFtZSA9ICdjdXN0b20tbWFya2VyLW9wdGlvbiBjdXN0b20tbWFya2VyLW9wdGlvbi0nICsgdmFsO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBhZGRLZXlTZWxlY3QuYXBwZW5kQ2hpbGQoZnJhZ21lbnQ0KTtcclxuXHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfSxcclxuICAgIGluamVjdFNldHRpbmdzKHNldHRpbmdzKSB7XHJcbiAgICAgIGxldCBzaG9ydGN1dHMgPSBzZXR0aW5ncy5zaG9ydGN1dHMsXHJcbiAgICAgICAgICBpLCBzY0NoZWNrYm94LCBzY1NlbGVjdCwgY21DaGVja2JveCwgc2M7XHJcblxyXG4gICAgICBmb3IgKGkgaW4gc2hvcnRjdXRzKSB7XHJcbiAgICAgICAgc2MgPSBzaG9ydGN1dHNbaV07XHJcbiAgICAgICAgc2NDaGVja2JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzYy0nICsgaSk7XHJcbiAgICAgICAgc2NTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hvcnRjdXQtc2VsZWN0LScgKyBpKTtcclxuICAgICAgICBjbUNoZWNrYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NtLScgKyBpKTtcclxuXHJcbiAgICAgICAgaWYgKHNjQ2hlY2tib3gpIHNjQ2hlY2tib3guY2hlY2tlZCA9IHNjWzFdO1xyXG4gICAgICAgIGlmIChzY1NlbGVjdCkgc2NTZWxlY3QudmFsdWUgPSBzY1swXTtcclxuICAgICAgICBpZiAoY21DaGVja2JveCkgY21DaGVja2JveC5jaGVja2VkID0gc2NbMl07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCBoaXN0b3J5U2V0dGluZ3MgPSBzZXR0aW5ncy5oaXN0b3J5LFxyXG4gICAgICAgICAgc2F2ZU9wdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSgnc2F2ZS1vcHQnKTtcclxuXHJcbiAgICAgIGlmIChoaXN0b3J5U2V0dGluZ3MuYXV0b3NhdmUpIHNhdmVPcHRzWzBdLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICBlbHNlIHNhdmVPcHRzWzFdLmNoZWNrZWQgPSB0cnVlO1xyXG5cclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWUtJyArIGhpc3RvcnlTZXR0aW5ncy5uYW1pbmcpLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpdmF0ZS1zYXZlJykuY2hlY2tlZCA9IGhpc3RvcnlTZXR0aW5ncy5zYXZlSW5Qcml2O1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1tdXQnKS5jaGVja2VkID0gaGlzdG9yeVNldHRpbmdzLmltbXV0O1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHJvcC1sb3NzZXMnKS5jaGVja2VkID0gaGlzdG9yeVNldHRpbmdzLmRyb3BMb3NzZXM7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub3Rlcy1uZXcnKS5jaGVja2VkID0gaGlzdG9yeVNldHRpbmdzLnNhdmVOb3RlO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaWdub3JlLWhhc2gnKS5jaGVja2VkID0gIWhpc3RvcnlTZXR0aW5ncy5pZ25vcmVIYXNoO1xyXG5cclxuICAgICAgaWYgKGhpc3RvcnlTZXR0aW5ncy5kb3dubG9hZCA9PT0gJ2pzb24nKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rvd25sb2FkLWpzb24nKS5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZG93bmxvYWQtdGV4dCcpLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdxdWlja2J1dHRvbi1kb3dubG9hZC1zZWxlY3QnKS52YWx1ZSA9IGhpc3RvcnlTZXR0aW5ncy5kb3dubG9hZDtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IG1pc2NTZXR0aW5ncyA9IHNldHRpbmdzLm1pc2M7XHJcblxyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFyay1tZXRob2QtLScgKyBtaXNjU2V0dGluZ3MubWFya21ldGhvZCkuY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtaXNjLWJtJykuY2hlY2tlZCA9IG1pc2NTZXR0aW5ncy5ibWljb247XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtaXNjLW5vdGVpY29uJykuY2hlY2tlZCA9IG1pc2NTZXR0aW5ncy5ub3RlaWNvbjtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21pc2Mtbm90ZW9uY2xpY2snKS5jaGVja2VkID0gbWlzY1NldHRpbmdzLm5vdGVvbmNsaWNrO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWlzYy1ub3RldHJhbnNwJykuY2hlY2tlZCA9IG1pc2NTZXR0aW5ncy5ub3RldHJhbnNwO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWlzYy1ub3RlcGxhaW52aWV3JykuY2hlY2tlZCA9IG1pc2NTZXR0aW5ncy5ub3RlcGxhaW52aWV3O1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm90ZXMtcmVzdG9yYXRpb24tZmFpbHVyZScpLmNoZWNrZWQgPSBtaXNjU2V0dGluZ3MuZmFpbHVyZU5vdGU7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub3Rlcy1yZXN0b3JhdGlvbi1zdWNjZXNzJykuY2hlY2tlZCA9IG1pc2NTZXR0aW5ncy5zdWNjZXNzTm90ZTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vdGVzLXBibScpLmNoZWNrZWQgPSBtaXNjU2V0dGluZ3MucGJtTm90ZTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vdGVzLWVycm9yJykuY2hlY2tlZCA9IG1pc2NTZXR0aW5ncy5lcnJvck5vdGU7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXN0b20tc2VhcmNoLS1zdGFydCcpLnZhbHVlID0gbWlzY1NldHRpbmdzLmN1c3RvbVNlYXJjaCA/IG1pc2NTZXR0aW5ncy5jdXN0b21TZWFyY2hbMF0gOiB0aGlzLmN1c3RvbVNlYXJjaDtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1c3RvbS1zZWFyY2gtLWVuZCcpLnZhbHVlID0gbWlzY1NldHRpbmdzLmN1c3RvbVNlYXJjaCA/IG1pc2NTZXR0aW5ncy5jdXN0b21TZWFyY2hbMV0gOiAnJztcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RtdWlwb3MtLW5vdGVpY29uJykudmFsdWUgPSBtaXNjU2V0dGluZ3MudG11aXBvcztcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RtdWlwb3MtLWJtaWNvbicpLnZhbHVlID0gbWlzY1NldHRpbmdzLnRtdWlwb3M7XHJcblxyXG4gICAgICBpZiAobWlzY1NldHRpbmdzLnRiYnBvd2VyKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RiYnBvd2VyLW9uJykuY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RiYnBvd2VyLW9mZicpLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkb24tYXV0b2NzJykuY2hlY2tlZCA9IHNldHRpbmdzLmFkZG9uLmF1dG9jcztcclxuICAgIH0sXHJcbiAgICBzaG93Q3VzdG9tU2VhcmNoU2V0dGluZ1N1Y2Nlc3MoKSB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXN0b20tc2VhcmNoLS1zdWJtaXR0ZWQnKS5jbGFzc0xpc3QucmVtb3ZlKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgIH0sXHJcbiAgICBoaWRlQ3VzdG9tU2VhcmNoU2V0dGluZ1N1Y2Nlc3MoKSB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXN0b20tc2VhcmNoLS1zdWJtaXR0ZWQnKS5jbGFzc0xpc3QuYWRkKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgIH0sXHJcbiAgICBjaGFuZ2VTdHlsZShlLCBlbCkge1xyXG4gICAgICBjb25zdCBtYXJrZXIgPSB0aGlzLm1hcmtlci51cGRhdGUoZWwpO1xyXG5cclxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2U6c3R5bGUtc2V0dGluZycsIG1hcmtlci5rZXksIG1hcmtlci5zdHlsZSk7XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlQXV0b05vdGVPcHQoZSwgZWwpIHtcclxuICAgICAgY29uc3QgdmFsID0gZWwuY2hlY2tlZCA/IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdXRvbm90ZS1jb2xvcicpLnZhbHVlIDogZmFsc2U7XHJcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlOmF1dG9ub3RlLXNldHRpbmcnLCB0aGlzLm1hcmtlci5rZXksIHZhbCk7XHJcbiAgICB9LFxyXG4gICAgY2hhbmdlQXV0b05vdGVPcHQoZSwgZWwpIHtcclxuICAgICAgY29uc3QgdmFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F1dG8tbm90ZScpLmNoZWNrZWQgPyBlbC52YWx1ZSA6IGZhbHNlO1xyXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZTphdXRvbm90ZS1zZXR0aW5nJywgdGhpcy5tYXJrZXIua2V5LCB2YWwpO1xyXG4gICAgfSxcclxuICAgIGNoYW5nZUhhc2hPcHQoZSwgZWwpIHtcclxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2U6aGFzaC1zZXR0aW5nJywgIWVsLmNoZWNrZWQpO1xyXG4gICAgfSxcclxuICAgIHRvZ2dsZUltbXV0T3B0KGUsIGVsKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlOmltbXV0LXNldHRpbmcnLCBlbC5jaGVja2VkKTtcclxuICAgIH0sXHJcbiAgICB0b2dnbGVEcm9wTG9zc2VzT3B0KGUsIGVsKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlOmRyb3BMb3NzZXMtc2V0dGluZycsIGVsLmNoZWNrZWQpO1xyXG4gICAgfSxcclxuICAgIHRvZ2dsZUF1dG9jc09wdChlLCBlbCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZTphdXRvY3Mtc2V0dGluZycsIGVsLmNoZWNrZWQpO1xyXG4gICAgfSxcclxuICAgIGFkZE1hcmtlcihlLCBlbCkge1xyXG4gICAgICBsZXQga2V5ID0gZWwudmFsdWUsXHJcbiAgICAgICAgICBrZXlTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VzdG9taXplZC1rZXknKSxcclxuICAgICAgICAgIGtleUljb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1c3RvbS1rZXlzJyksXHJcbiAgICAgICAgICByZW1vdmVLZXlTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVtb3ZlLWtleScpLFxyXG4gICAgICAgICAgb3B0aW9uID0gZWwuY2hpbGRyZW5bZWwuc2VsZWN0ZWRJbmRleF0sXHJcbiAgICAgICAgICBjbG9uZSA9IG9wdGlvbi5jbG9uZU5vZGUodHJ1ZSksXHJcbiAgICAgICAgICBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcbiAgICAgICAgICBiZ0NvbG9yID0gdGhpcy5nZXRSYW5kb21MaWdodENvbG9yKCk7XHJcblxyXG4gICAgICBpZiAoIWtleSB8fCByZW1vdmVLZXlTZWxlY3QuY2hpbGRyZW4ubGVuZ3RoID49IDEyIHx8IHRoaXMuYWxsb3dlZEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgcmVtb3ZlS2V5U2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgICAgIHJlbW92ZUtleVNlbGVjdC5zZWxlY3RlZEluZGV4ID0gMDtcclxuICAgICAga2V5U2VsZWN0LmFwcGVuZENoaWxkKGNsb25lKTtcclxuICAgICAgY2xvbmUuc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICBpY29uLmNsYXNzTmFtZSA9ICdrZXkgY3VzdG9tLWtleSc7XHJcbiAgICAgIGljb24uaWQgPSAnY3VzdG9tLWtleS0nICsga2V5O1xyXG4gICAgICBrZXlJY29ucy5hcHBlbmRDaGlsZChpY29uKTtcclxuICAgICAgaWNvbi5pbm5lclRleHQgPSBrZXkgPT09ICdlbnRlcicgPyBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4MjFCNSkgOiBrZXkudG9VcHBlckNhc2UoKTtcclxuXHJcbiAgICAgIHRoaXMudXBkYXRlTWFya2VyKGtleSwgbnVsbCwgYmdDb2xvcik7XHJcblxyXG4gICAgICB0aGlzLmVtaXQoJ2FkZDpjdXN0b20tbWFya2VyJywga2V5LCAnYmFja2dyb3VuZC1jb2xvcjonICsgYmdDb2xvciArICc7Jyk7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlTWFya2VyKGUsIGVsKSB7XHJcbiAgICAgIGxldCBrZXkgPSBlbC52YWx1ZSxcclxuICAgICAgICAgIGtleVNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXN0b21pemVkLWtleScpLFxyXG4gICAgICAgICAga2V5SWNvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VzdG9tLWtleXMnKSxcclxuICAgICAgICAgIGFkZEtleVNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQta2V5JyksXHJcbiAgICAgICAgICBvcHRpb247XHJcblxyXG4gICAgICBpZiAoIWtleSB8fCB0aGlzLmFsbG93ZWRLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgIG9wdGlvbiA9IGVsLmNoaWxkcmVuW2VsLnNlbGVjdGVkSW5kZXhdO1xyXG4gICAgICBhZGRLZXlTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICAgICAgYWRkS2V5U2VsZWN0LnNlbGVjdGVkSW5kZXggPSAwO1xyXG4gICAgICBlbC5zZWxlY3RlZEluZGV4ID0gMDtcclxuXHJcbiAgICAgIGtleVNlbGVjdC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjdXN0b20tbWFya2VyLW9wdGlvbi0nICsga2V5KVswXS5yZW1vdmUoKTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1c3RvbS1rZXktJyArIGtleSkucmVtb3ZlKCk7XHJcbiAgICAgIGtleVNlbGVjdC5zZWxlY3RlZEluZGV4ID0gMDtcclxuXHJcbiAgICAgIHRoaXMudXBkYXRlTWFya2VyKCdtJyk7XHJcblxyXG4gICAgICB0aGlzLmVtaXQoJ3JlbW92ZTpjdXN0b20tbWFya2VyJywga2V5KTtcclxuICAgIH0sXHJcbiAgICBjaGFuZ2VNYXJrTWV0aG9kKGUsIGVsKSB7XHJcbiAgICAgIGlmIChlbC5jaGVja2VkKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdjaGFuZ2U6bWFyay1tZXRob2Qtc2V0dGluZycsIGVsLmdldEF0dHJpYnV0ZSgnZGF0YS12YWx1ZScpKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHRvZ2dsZVNob3J0Y3V0KGUsIGVsKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgndG9nZ2xlOnNob3J0Y3V0LXNldHRpbmcnLCBlbC5uYW1lLCBlbC5jaGVja2VkKTtcclxuICAgIH0sXHJcbiAgICBjaGFuZ2VTaG9ydGN1dChlLCBlbCkge1xyXG4gICAgICBpZiAoIXRoaXMuYWxsb3dlZFNob3J0Y3V0cy5pbmNsdWRlcyhlbC52YWx1ZSkpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlOnNob3J0Y3V0LXNldHRpbmcnLCBlbC5uYW1lLCBlbC52YWx1ZSk7XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlQ3RtKGUsIGVsKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgndG9nZ2xlOmN0bS1zZXR0aW5nJywgZWwubmFtZSwgZWwuY2hlY2tlZCk7XHJcbiAgICB9LFxyXG4gICAgY2hhbmdlU2F2ZU9wdChlLCBlbCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZTpzYXZlb3B0LXNldHRpbmcnLCAhIWVsLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKTtcclxuICAgIH0sXHJcbiAgICB0b2dnbGVQcml2U2F2ZShlLCBlbCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ3RvZ2dsZTpwcml2LXNldHRpbmcnLCBlbC5jaGVja2VkKTtcclxuICAgIH0sXHJcbiAgICBjaGFuZ2VOYW1pbmdPcHQoZSwgZWwpIHtcclxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2U6bmFtaW5nb3B0LXNldHRpbmcnLCBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSk7XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlU2F2ZU5vdGVPcHQoZSwgZWwpIHtcclxuICAgICAgdGhpcy5lbWl0KCd0b2dnbGU6bm90ZW9wdC1zZXR0aW5nJywgZWwuY2hlY2tlZCk7XHJcbiAgICB9LFxyXG4gICAgY2hhbmdlUXVpY2tidXR0b25PcHQoZSwgZWwpIHtcclxuICAgICAgaWYgKCF0aGlzLmFsbG93ZWRRdWlja2J1dHRvbk9wdHMuaW5jbHVkZXMoZWwudmFsdWUpKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICB0aGlzLmVtaXQoJ3RvZ2dsZTpxdWlja2J1dHRvbm9wdC1zZXR0aW5nJywgZWwubmFtZSwgZWwudmFsdWUpO1xyXG4gICAgfSxcclxuICAgIHN3aXRjaFF1aWNrYnV0dG9uT3B0KGUsIGVsKSB7XHJcbiAgICAgIGNvbnN0IHR5cGUgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcclxuICAgICAgY29uc3QgdmFsID0gdHlwZSA9PT0gJ2pzb24nID8gdHlwZSA6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdxdWlja2J1dHRvbi1kb3dubG9hZC1zZWxlY3QnKS52YWx1ZTtcclxuICAgICAgdGhpcy5lbWl0KCdzd2l0Y2g6cXVpY2tidXR0b25vcHQtc2V0dGluZycsIGVsLm5hbWUsIHZhbCk7XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlTm90ZXMoZSwgZWwpIHtcclxuICAgICAgdGhpcy5lbWl0KCd0b2dnbGU6bm90aWZpY2F0aW9uLXNldHRpbmcnLCBlbC5uYW1lLCBlbC5jaGVja2VkKTtcclxuICAgIH0sXHJcbiAgICB0b2dnbGVNaXNjKGUsIGVsKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgndG9nZ2xlOm1pc2Mtc2V0dGluZycsIGVsLm5hbWUsIGVsLmNoZWNrZWQpO1xyXG4gICAgfSxcclxuICAgIHRvZ2dsZVRCQlBvd2VyT3B0KGUsIGVsKSB7XHJcbiAgICAgIGNvbnN0IHZhbCA9ICEhKGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKjEpO1xyXG4gICAgICB0aGlzLmVtaXQoJ3RvZ2dsZTp0YmJwb3dlci1zZXR0aW5nJywgZWwubmFtZSwgdmFsKTtcclxuICAgIH0sXHJcbiAgICBjaGFuZ2VUbXVpUG9zaXRpb25PcHQoZSwgZWwpIHtcclxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2U6bWlzYy1zZXR0aW5nJywgZWwubmFtZSwgZWwudmFsdWUpO1xyXG4gICAgICBBcnJheS5mcm9tKHRoaXMuZWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndG11aXBvcycpKS5mb3JFYWNoKHNlbGVjdCA9PiBzZWxlY3QudmFsdWUgPSBlbC52YWx1ZSk7XHJcbiAgICB9LFxyXG4gICAgY2hhbmdlQ3VzdG9tU2VhcmNoKGUsIGVsKSB7XHJcbiAgICAgIHRoaXMuaGlkZUN1c3RvbVNlYXJjaFNldHRpbmdTdWNjZXNzKCk7XHJcbiAgICAgIGNvbnN0IGlucDEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VzdG9tLXNlYXJjaC0tc3RhcnQnKTtcclxuICAgICAgY29uc3QgaW5wMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXN0b20tc2VhcmNoLS1lbmQnKTtcclxuICAgICAgY29uc3QgcGFydDEgPSBpbnAxLnZhbHVlO1xyXG4gICAgICBjb25zdCBwYXJ0MiA9IGlucDIudmFsdWU7XHJcbiAgICAgIGlmICghcGFydDEgJiYgIXBhcnQyKSB7XHJcbiAgICAgICAgaW5wMS52YWx1ZSA9IHRoaXMuY3VzdG9tU2VhcmNoO1xyXG4gICAgICAgIGlucDIudmFsdWUgPSAnJztcclxuICAgICAgICB0aGlzLmVtaXQoJ2NoYW5nZTpjdXN0b20tc2VhcmNoLXNldHRpbmcnLCBmYWxzZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdjaGFuZ2U6Y3VzdG9tLXNlYXJjaC1zZXR0aW5nJywgW3BhcnQxLCBwYXJ0Ml0pO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZ2V0UmFuZG9tTGlnaHRDb2xvcigpIHtcclxuICAgICAgcmV0dXJuICcjJyArIE1hdGguZmxvb3IoKDAuOCArIE1hdGgucmFuZG9tKCkgKiAwLjE3NSkgKiAxNjc3NzIxNSkudG9TdHJpbmcoMTYpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gbmV3IF9ET01NT0RVTEUoe1xyXG4gICAgZWw6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzeW5jJyksXHJcbiAgICBldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ2ZhaWxlZDp0b2dnbGUtc3luYyc6ICd1bmRvJ1xyXG4gICAgICB9LFxyXG4gICAgICBET006IHtcclxuICAgICAgICBjbGljazoge1xyXG4gICAgICAgICAgJy5zd2l0Y2gnOiAndG9nZ2xlU3dpdGNoJ1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBhdXRvaW5pdCgpIHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N5bmMtc3dpdGNoLS1zZXR0aW5ncycpLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScsIF9TVE9SRS5hcmVhX3NldHRpbmdzID09PSAnc3luYycpO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3luYy1zd2l0Y2gtLWhpc3RvcnknKS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnLCBfU1RPUkUuYXJlYV9oaXN0b3J5ID09PSAnc3luYycpO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3luYy1zd2l0Y2gtLXBhZ2Vub3RlcycpLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScsIF9TVE9SRS5hcmVhX3BhZ2Vub3RlcyA9PT0gJ3N5bmMnKTtcclxuICAgIH0sXHJcblxyXG4gICAgdG9nZ2xlU3dpdGNoKGUsIGVsKSB7XHJcbiAgICAgIGVsID0gZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzd2l0Y2gtLXN5bmMnKSA/IGVsIDogZWwucGFyZW50Tm9kZTtcclxuICAgICAgZWwuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgICAgIHRoaXMuZW1pdCgndG9nZ2xlOnN5bmMnLCBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScpLCBlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKTtcclxuICAgIH0sXHJcblxyXG4gICAgdW5kbyhmaWVsZCkge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3luYy1zd2l0Y2gtLScgKyBmaWVsZCkuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgX1RPR0dMRVIge1xyXG5cclxuICBjb25zdHJ1Y3RvcihlbCkge1xyXG4gICAgdGhpcy5lbCA9IGVsO1xyXG4gICAgdGhpcy5pbml0KCk7XHJcbiAgfVxyXG5cclxuICBpbml0KCkge1xyXG4gICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMudG9nZ2xlLCBmYWxzZSk7XHJcbiAgfVxyXG4gIHRvZ2dsZShlKSB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgIGxldCBkYXRhVGFyZ2V0ID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0JyksXHJcbiAgICAgICAgdGFyZ2V0cyA9IGRhdGFUYXJnZXQgPyBkYXRhVGFyZ2V0LnNwbGl0KCcgJykgOiBudWxsLFxyXG4gICAgICAgIGRhdGFUb2dnbGUgPSB0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS10b2dnbGUnKSxcclxuICAgICAgICByb2xlcyA9IGRhdGFUb2dnbGUgPyBkYXRhVG9nZ2xlLnNwbGl0KCcgJykgOiBudWxsO1xyXG5cclxuICAgIGlmIChyb2xlcykge1xyXG4gICAgICByb2xlcy5mb3JFYWNoKChyb2xlLCBpKSA9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXJnZXRzW2ldKS5jbGFzc0xpc3Rbcm9sZV0oJ29wZW4nKSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhcmdldHNbMF0pLmRpc2FibGVkID0gIXRoaXMuY2hlY2tlZDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX1BPUlQgfSBmcm9tICcuLy4uL19zaGFyZWQvdXRpbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgX1BPUlQoe1xyXG4gIG5hbWU6ICdhZGRvbi1wYWdlJyxcclxuICB0eXBlOiAnY29udGVudCcsXHJcbiAgZXZlbnRzOiB7XHJcbiAgICBPTkVPRkY6IFtcclxuICAgICAgJ2NoYW5nZTpzdHlsZS1zZXR0aW5nJyxcclxuICAgICAgJ2NoYW5nZTphdXRvbm90ZS1zZXR0aW5nJyxcclxuICAgICAgJ2NoYW5nZTptYXJrLW1ldGhvZC1zZXR0aW5nJyxcclxuICAgICAgJ3RvZ2dsZTpzaG9ydGN1dC1zZXR0aW5nJyxcclxuICAgICAgJ2NoYW5nZTpzaG9ydGN1dC1zZXR0aW5nJyxcclxuICAgICAgJ3RvZ2dsZTpjdG0tc2V0dGluZycsXHJcbiAgICAgICdjaGFuZ2U6c2F2ZW9wdC1zZXR0aW5nJyxcclxuICAgICAgJ3RvZ2dsZTpwcml2LXNldHRpbmcnLFxyXG4gICAgICAnY2hhbmdlOmltbXV0LXNldHRpbmcnLFxyXG4gICAgICAnY2hhbmdlOmRyb3BMb3NzZXMtc2V0dGluZycsXHJcbiAgICAgICdjaGFuZ2U6bmFtaW5nb3B0LXNldHRpbmcnLFxyXG4gICAgICAnY2hhbmdlOnNvcnQtc2V0dGluZycsXHJcbiAgICAgICdjaGFuZ2U6dmlldy1zZXR0aW5nJyxcclxuICAgICAgJ2NoYW5nZTpoYXNoLXNldHRpbmcnLFxyXG4gICAgICAndG9nZ2xlOm5vdGVvcHQtc2V0dGluZycsXHJcbiAgICAgICd0b2dnbGU6cXVpY2tidXR0b25vcHQtc2V0dGluZycsXHJcbiAgICAgICdzd2l0Y2g6cXVpY2tidXR0b25vcHQtc2V0dGluZycsXHJcbiAgICAgICd0b2dnbGU6bm90aWZpY2F0aW9uLXNldHRpbmcnLFxyXG4gICAgICAndG9nZ2xlOm1pc2Mtc2V0dGluZycsXHJcbiAgICAgICdjaGFuZ2U6bWlzYy1zZXR0aW5nJyxcclxuICAgICAgJ3RvZ2dsZTp0YmJwb3dlci1zZXR0aW5nJyxcclxuICAgICAgJ2NoYW5nZTphdXRvY3Mtc2V0dGluZycsXHJcbiAgICAgICdhZGQ6Y3VzdG9tLW1hcmtlcicsXHJcbiAgICAgICdyZW1vdmU6Y3VzdG9tLW1hcmtlcicsXHJcbiAgICAgICdkZWxldGU6ZW50cmllcycsXHJcbiAgICAgICdjbGVhbjplbnRyaWVzJyxcclxuICAgICAgJ29wZW46ZW50cmllcycsXHJcbiAgICAgICdyZW5hbWU6ZW50cnknLFxyXG4gICAgICAndmlldzplbnRyeScsXHJcbiAgICAgICdzeW5jOmVudHJ5JyxcclxuICAgICAgJ3N5bmM6aGlzdG9yeScsXHJcbiAgICAgICdzeW5jOnNldHRpbmdzJyxcclxuICAgICAgJ2ltcG9ydDpzdG9yYWdlJyxcclxuICAgICAgJ3RvZ2dsZTpzeW5jJyxcclxuICAgICAgJ2NoYW5nZTpjdXN0b20tc2VhcmNoLXNldHRpbmcnLFxyXG4gICAgICAnY2hhbmdlZDpwZXItcGFnZS1jb3VudCcsXHJcbiAgICAgICdlcnJvcjpicm93c2VyLWNvbnNvbGUnLFxyXG4gICAgICAnY2xlYXI6bG9ncycsXHJcbiAgICAgICd0YWc6ZW50cmllcydcclxuICAgIF1cclxuICB9XHJcbn0pXHJcbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5vdGVfcGJtOiAxLFxyXG4gIG5vdGVfcmVzdG9yYXRpb25fZmFpbHVyZTogMixcclxuICBub3RlX3VybDogMyxcclxuICBlcnJvcl9zYXZlX3N0eWxlOiA0LFxyXG4gIGVycm9yX3NhdmVfX3RvZ2dsZV9zYzogNSxcclxuICBlcnJvcl9zYXZlX2NoYW5nZV9zYzogNixcclxuICBlcnJvcl9zYXZlX2N0bTogNyxcclxuICBlcnJvcl9zYXZlX2F1dG9zYXZlOiA4LFxyXG4gIGVycm9yX3NhdmVfbmFtaW5nOiA5LFxyXG4gIGVycm9yX3NhdmVfbm90aWZ5OiAxMCxcclxuICBlcnJvcl9zYXZlX2Rvd25sb2FkOiAxMSxcclxuICBlcnJvcl9zYXZlX2JtaWNvbjogMTIsXHJcbiAgZXJyb3JfY2xlYW5faGlzdG9yeTogMTMsXHJcbiAgZXJyb3JfYWRkX21hcmtlcjogMTQsXHJcbiAgZXJyb3JfcmVtb3ZlX21hcmtlcjogMTUsXHJcbiAgZXJyb3Jfc2F2ZV9lbnRyeTogMTYsXHJcbiAgZXJyb3JfdXBkYXRlX2VudHJ5OiAxNyxcclxuICBlcnJvcl9kZWxfZW50cnk6IDE4LFxyXG4gIGVycm9yX2VtcHR5X3N5bmNlZF9zdG9yYWdlX29uc3RhcnQ6IDE5LFxyXG4gIGVycm9yX2VtcHR5X3N5bmNlZF9zdG9yYWdlX29udXBkYXRlOiAyMCxcclxuICBlcnJvcl9lbXB0eV9sb2NhbF9zdG9yYWdlX29uc3RhcnQ6IDIxLFxyXG4gIGVycm9yX2ltcG9ydF9lbXB0eTogMjIsXHJcbiAgZXJyb3JfaW1wb3J0X2hpc3Rvcnk6IDIzLFxyXG4gIGVycm9yX2ltcG9ydF9zZXR0aW5nczogMjQsXHJcbiAgZXJyb3JfaW1wb3J0X291dGRhdGVkOiAyNSxcclxuICBlcnJvcl9pbXBvcnRfaGlzdG9yeV9ub3RfZm91bmQ6IDI2LFxyXG4gIGVycm9yX2ltcG9ydF9zZXR0aW5nc19ub3RfZm91bmQ6IDI3LFxyXG4gIGVycm9yX25hbWluZzogMjgsXHJcbiAgZXJyb3Jfc3RvcmFnZV9taWdyYXRpb246IDI5LFxyXG4gIGVycm9yX2VtcHR5X2xvY2FsX3N0b3JhZ2Vfb251cGRhdGU6IDMwLFxyXG4gIGVycm9yX3RvZ2dsZV9zeW5jOiAzMSxcclxuICBlcnJvcl9zYXZlX3ByaXY6IDMyLFxyXG4gIG5vdGVfcmVzdG9yYXRpb25fd2FybmluZ18xOiAzMyxcclxuICBub3RlX3Jlc3RvcmF0aW9uX3dhcm5pbmdfMjogMzQsXHJcbiAgZXJyb3Jfc2F2ZV9jaGFuZ2VfYXV0b25vdGU6IDM1LFxyXG4gIGVycm9yX3NhdmVfbWFya19tZXRob2Q6IDM2LFxyXG5cclxuICBnZXRLZXlCeVZhbHVlKHZhbCkge1xyXG4gICAgZm9yIChsZXQga2V5IGluIHRoaXMpIHtcclxuICAgICAgaWYgKHRoaXNba2V5XSA9PSB2YWwpIHtcclxuICAgICAgICByZXR1cm4ga2V5O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gJyc7XHJcbiAgfVxyXG59XHJcbiIsImNvbnN0IF9DT1BZID0gZnVuY3Rpb24oc3JjKSB7XHJcbiAgY29uc3QgdGFyZ2V0ID0gQXJyYXkuaXNBcnJheShzcmMpID8gW10gOiB7fTtcclxuICBsZXQgdmFsO1xyXG4gIGZvciAobGV0IHByb3AgaW4gc3JjKSB7XHJcbiAgICBpZiAoc3JjLmhhc093blByb3BlcnR5KHByb3ApKSB7XHJcbiAgICAgIHZhbCA9IHNyY1twcm9wXTtcclxuICAgICAgaWYgKHZhbCAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIHRhcmdldFtwcm9wXSA9IF9DT1BZKHZhbCk7XHJcbiAgICAgIH0gZWxzZVxyXG4gICAgICAgIHRhcmdldFtwcm9wXSA9IHZhbDtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHRhcmdldDtcclxufVxyXG5cclxuZXhwb3J0IHsgX0NPUFkgfVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi9tb2R1bGUnXHJcblxyXG5leHBvcnQgY2xhc3MgX0RPTU1PRFVMRSBleHRlbmRzIF9NT0RVTEUge1xyXG5cclxuICBjb25zdHJ1Y3RvcihvYmopIHtcclxuICAgIG9iai5fYm91bmQgPSB7fTtcclxuICAgIG9iai5fZXh0cmFCb3VuZCA9IFtdO1xyXG5cclxuICAgIHN1cGVyKG9iailcclxuXHJcbiAgICB0aGlzLmFkZExpc3RlbmVyc01hbnVhbGx5IHx8IHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcbiAgICAhdGhpcy5hdXRvUGF1c2UgfHwgdGhpcy5zZXRBdXRvUGF1c2UoKTtcclxuICB9XHJcbiAgZ2VuZXJhbEhhbmRsZXIoc3ViTWFwLCB0eXBlLCBlKSB7XHJcbiAgICBsZXQgZWwgPSBlLnRhcmdldCxcclxuICAgICAgICBzZWxlY3RvciwgX3NlbCwgbWV0aCwgZiwgaXNJZCwgaXNDbGFzcywgaXNEb2M7XHJcblxyXG4gICAgZm9yIChzZWxlY3RvciBpbiBzdWJNYXApIHtcclxuICAgICAgZiA9IHNlbGVjdG9yWzBdO1xyXG4gICAgICBfc2VsID0gc2VsZWN0b3I7XHJcbiAgICAgIGlzSWQgPSBmID09PSAnIyc7XHJcbiAgICAgIGlzQ2xhc3MgPSBmID09PSAnLic7XHJcbiAgICAgIGlzRG9jID0gZiA9PT0gJyonO1xyXG5cclxuICAgICAgaWYgKGlzSWQgfHwgaXNDbGFzcykgc2VsZWN0b3IgPSBzZWxlY3Rvci5zdWJzdHIoMSk7XHJcblxyXG4gICAgICBpZiAoaXNEb2MgfHxcclxuICAgICAgICAgIGlzQ2xhc3MgJiYgZWwuY2xhc3NMaXN0LmNvbnRhaW5zKHNlbGVjdG9yKSB8fFxyXG4gICAgICAgICAgaXNJZCAmJiBlbC5pZCA9PT0gc2VsZWN0b3IgfHxcclxuICAgICAgICAgIGVsLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09IHNlbGVjdG9yXHJcbiAgICAgICkge1xyXG5cclxuICAgICAgICBtZXRoID0gc3ViTWFwW19zZWxdO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIG1ldGggPT09ICdmdW5jdGlvbicpIG1ldGgoZSwgZWwpO1xyXG4gICAgICAgIGVsc2UgaWYgKHRoaXNbbWV0aF0pIHRoaXNbbWV0aF0oZSwgZWwpO1xyXG5cclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBzZXRBdXRvUGF1c2UoKSB7XHJcbiAgICB0aGlzLm9uKCd0b2dnbGVkOmFkZG9uJywgb24gPT4ge1xyXG4gICAgICBpZiAob24pIHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcbiAgICAgIGVsc2UgdGhpcy5yZW1vdmVMaXN0ZW5lcnMoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBhZGRMaXN0ZW5lcih0eXBlLCBtZXRoLCBlbCkge1xyXG4gICAgZWwgPSBlbCB8fCB0aGlzLmVsO1xyXG4gICAgY29uc3QgaGFuZGxlciA9IHR5cGVvZiBtZXRoID09PSAnZnVuY3Rpb24nID8gbWV0aCA6IHRoaXNbbWV0aF07XHJcblxyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyLCBmYWxzZSk7XHJcblxyXG4gICAgaWYgKGVsID09PSB0aGlzLmVsKSB7XHJcbiAgICAgIGlmICghdGhpcy5fYm91bmRbdHlwZV0pIHRoaXMuX2JvdW5kW3R5cGVdID0gW107XHJcbiAgICAgIHRoaXMuX2JvdW5kW3R5cGVdLnB1c2goaGFuZGxlcik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9leHRyYUJvdW5kLnB1c2goW2VsLCB0eXBlLCBoYW5kbGVyXSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGFkZExpc3RlbmVycygpIHtcclxuICAgIGxldCBldmVudHMgPSB0aGlzLmV2ZW50cyxcclxuICAgICAgICBkb21FdmVudHMsIGVsLCBzdWJNYXAsIHR5cGUsIGhhbmRsZXI7XHJcblxyXG4gICAgaWYgKCFldmVudHMgfHwgIShkb21FdmVudHMgPSBldmVudHMuRE9NKSB8fCAhKGVsID0gdGhpcy5lbCkpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICBmb3IgKHR5cGUgaW4gZG9tRXZlbnRzKSB7XHJcbiAgICAgIHN1Yk1hcCA9IGRvbUV2ZW50c1t0eXBlXTtcclxuICAgICAgaGFuZGxlciA9IHRoaXMucHJveHkodGhpcywgdGhpcy5nZW5lcmFsSGFuZGxlciwgc3ViTWFwLCB0eXBlKTtcclxuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAgIGlmICghdGhpcy5fYm91bmRbdHlwZV0pIHRoaXMuX2JvdW5kW3R5cGVdID0gW107XHJcbiAgICAgIHRoaXMuX2JvdW5kW3R5cGVdLnB1c2goaGFuZGxlcik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlbW92ZUxpc3RlbmVycygpIHtcclxuICAgIGxldCB0eXBlLCBfYm91bmQsIGw7XHJcblxyXG4gICAgZm9yICh0eXBlIGluIHRoaXMuX2JvdW5kKSB7XHJcbiAgICAgIF9ib3VuZCA9IHRoaXMuX2JvdW5kW3R5cGVdO1xyXG4gICAgICBsID0gX2JvdW5kLmxlbmd0aDtcclxuICAgICAgd2hpbGUgKGwtLSkge1xyXG4gICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBfYm91bmRbbF0sIGZhbHNlKTtcclxuICAgICAgICBfYm91bmQuc3BsaWNlKGwsIDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IF9leHRyYSA9IHRoaXMuX2V4dHJhQm91bmQsIGkgPSAwLCBzZXQ7XHJcbiAgICBsID0gX2V4dHJhLmxlbmd0aDtcclxuXHJcbiAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xyXG4gICAgICBzZXQgPSBfZXh0cmFbaV07XHJcbiAgICAgIHNldFswXS5yZW1vdmVFdmVudExpc3RlbmVyKHNldFsxXSwgc2V0WzJdLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuL21vZHVsZSdcclxuXHJcbmNvbnN0IF9FUlJPUlRSQUNLRVIgPSBuZXcgX01PRFVMRSh7XHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlcnJvciA9PiB7XHJcbiAgICAgIGNvbnN0IGZpbGUgPSBlcnJvci5maWxlbmFtZS5zcGxpdCgnLycpLnBvcCgpO1xyXG4gICAgICBpZiAoWydzaWRlYmFyLndwLmpzJywgJ3RiYi1tZW51LndwLmpzJywgJ29wdGlvbnMud3AuanMnLCAnYWRkb24tcGFnZS53cC5qcyddLmluY2x1ZGVzKGZpbGUpKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdlcnJvcjpicm93c2VyLWNvbnNvbGUnLCB7XHJcbiAgICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLFxyXG4gICAgICAgICAgbG9jYXRpb246IGVycm9yLmZpbGVuYW1lLnNwbGl0KCcvJykucG9wKCkuc3BsaXQoJy4nKS5zaGlmdCgpICsgJzonICsgZXJyb3IubGluZW5vICsgJzonICsgZXJyb3IuY29sbm8sXHJcbiAgICAgICAgICB0aW1lOiAobmV3IERhdGUoKSkuZ2V0VGltZSgpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0sIGZhbHNlKTtcclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgX0VSUk9SVFJBQ0tFUjtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob2JqMSwgb2JqMikge1xyXG4gIGZvciAodmFyIGkgaW4gb2JqMilcclxuICAgIGlmICghb2JqMVtpXSkgb2JqMVtpXSA9IG9iajJbaV07XHJcblxyXG4gIHJldHVybiBvYmoxO1xyXG59XHJcbiIsImNvbnN0IF9HRVRfQUNUSVZFX1RBQiA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICByZXR1cm4gYnJvd3Nlci50YWJzLnF1ZXJ5KHsgY3VycmVudFdpbmRvdzogdHJ1ZSwgYWN0aXZlOiB0cnVlIH0pLnRoZW4odGFicyA9PiB0YWJzWzBdKTtcclxufVxyXG5cclxuZXhwb3J0IHsgX0dFVF9BQ1RJVkVfVEFCIH1cclxuIiwiY29uc3QgX0hBU0hMRVNTID0gZnVuY3Rpb24odXJsKSB7XHJcbiAgY29uc3QgaCA9IHVybC5sYXN0SW5kZXhPZignIycpO1xyXG4gIGlmIChoID09PSAtMSkgcmV0dXJuIHVybDtcclxuICBlbHNlIHJldHVybiB1cmwuc3Vic3RyKDAsIGgpO1xyXG59XHJcblxyXG5leHBvcnQgeyBfSEFTSExFU1MgfVxyXG4iLCIvKlxyXG4qIFRyYW5zbGF0ZXMgYSBIVE1sIHBhZ2UgaW4gdGhlIHdlYiBsMTBuIHN0eWxlIGZyb20gdGhlIEFkZC1vbiBTREsgd2l0aCBXZWJFeHRlbnNpb25zIHN0cmluZ3MuXHJcbiogTW9kaWZpZWQgYnkgdW5kZXJmbHlpbmdiaXJjaGVzXHJcbipcclxuKiBAYXV0aG9yIE1hcnRpbiBHaWdlclxyXG4qIEBzZWUge0BsaW5rIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2ZyZWFrdGVjaG5pay80YTcyYmMwNzExZDliYzgyY2YzYjA3NWJjYzI5Mjk1M31cclxuKiBAbGljZW5zZSBNUEwtMi4wXHJcbiovXHJcbmZ1bmN0aW9uIHRyYW5zbGF0ZURvY3VtZW50KCkge1xyXG4gIGxldCBlbCwgZGF0YSwgZGF0YXNldDtcclxuICAvLyBTZXQgdGhlIGxhbmd1YWdlIGF0dHJpYnV0ZSBvZiB0aGUgZG9jdW1lbnQuXHJcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZSgnbGFuZycsIGJyb3dzZXIuaTE4bi5nZXRVSUxhbmd1YWdlKCkucmVwbGFjZSgnXycsICctJykpO1xyXG4gIC8vIEdldCBhbGwgZWxlbWVudHMgdGhhdCBhcmUgbWFya2VkIGFzIGJlaW5nIHRyYW5zbGF0ZWFibGUuXHJcbiAgY29uc3QgdGV4dEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnKltkYXRhLWwxMG4taWRdJyk7XHJcbiAgY29uc3QgYXR0ckVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnKltkYXRhLWwxMG4tYXR0cl0nKTtcclxuXHJcbiAgZm9yKGVsIG9mIHRleHRFbGVtZW50cykge1xyXG4gICAgZGF0YXNldCA9IGVsLmRhdGFzZXQ7XHJcbiAgICBjb25zdCBsMTBuSWQgPSBkYXRhc2V0LmwxMG5JZDtcclxuXHJcbiAgICBpZiAobDEwbklkKSB7XHJcbiAgICAgIGRhdGEgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShsMTBuSWQpO1xyXG5cclxuICAgICAgaWYoZGF0YSAmJiBkYXRhICE9ICc/PycpIHtcclxuICAgICAgICBlbC50ZXh0Q29udGVudCA9IGRhdGE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgZm9yKGVsIG9mIGF0dHJFbGVtZW50cykge1xyXG4gICAgZGF0YXNldCA9IGVsLmRhdGFzZXQ7XHJcblxyXG4gICAgWydUaXRsZScsICdQbGFjZWhvbGRlciddLmZvckVhY2goYXR0ciA9PiB7XHJcbiAgICAgIGNvbnN0IGwxMG5BdHRyID0gZGF0YXNldFsnbDEwbicgKyBhdHRyXTtcclxuXHJcbiAgICAgIGlmIChsMTBuQXR0cikge1xyXG4gICAgICAgIGRhdGEgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShsMTBuQXR0cik7XHJcblxyXG4gICAgICAgIGlmIChkYXRhICYmIGRhdGEgIT0gJz8/Jykge1xyXG4gICAgICAgICAgZWwuc2V0QXR0cmlidXRlKGF0dHIudG9Mb3dlckNhc2UoKSwgZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB0cmFuc2xhdGVEb2N1bWVudCgpLCB7XHJcbiAgICBjYXB0dXJlOiBmYWxzZSxcclxuICAgIHBhc3NpdmU6IHRydWUsXHJcbiAgICBvbmNlOiB0cnVlXHJcbiAgfSk7XHJcbn1cclxuIiwibGV0IHRvcGljcyA9IHt9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xyXG5cclxuICBvbihldmVudCwgaGFuZGxlcikge1xyXG4gICAgaWYgKCF0b3BpY3NbZXZlbnRdKSB0b3BpY3NbZXZlbnRdID0gW107XHJcblxyXG4gICAgdG9waWNzW2V2ZW50XS5wdXNoKGhhbmRsZXIpO1xyXG4gIH1cclxuICBlbWl0KGV2ZW50cywgLi4uYXJncykge1xyXG4gICAgZXZlbnRzID0gZXZlbnRzLnNwbGl0KCcgJyk7XHJcblxyXG4gICAgbGV0IGkgPSAwLCBsID0gZXZlbnRzLmxlbmd0aCwgdG9waWM7XHJcblxyXG4gICAgZm9yICg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgdG9waWMgPSB0b3BpY3NbZXZlbnRzW2ldXTtcclxuXHJcbiAgICAgIGlmICh0b3BpYylcclxuICAgICAgICB0b3BpYy5mb3JFYWNoKGhhbmRsZXIgPT4gaGFuZGxlci5hcHBseSh0aGlzLCBhcmdzKSlcclxuICAgIH1cclxuICB9XHJcbiAgcmVxdWVzdChldmVudCwgLi4uYXJncykge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZSh7IGV2OiBldmVudCwgYXJnczogYXJncywgd2FpdDogdHJ1ZSB9KS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgfVxyXG4gIHByb3h5KGNvbnRleHQsIGZ1bmMsIC4uLmFyZ3MxKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24oLi4uYXJnczIpIHtcclxuICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJnczEuY29uY2F0KGFyZ3MyKSk7XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgX01FRElBVE9SIGZyb20gJy4vbWVkaWF0b3InXHJcblxyXG5leHBvcnQgY2xhc3MgX01PRFVMRSBleHRlbmRzIF9NRURJQVRPUiB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgc3VwZXIoKVxyXG5cclxuICAgIGZvciAobyBpbiBvYmopIHRoaXNbb10gPSBvYmpbb107XHJcblxyXG4gICAgbGV0IGV2ZW50cyA9IHRoaXMuZXZlbnRzLFxyXG4gICAgICAgIGVudkV2ZW50cywgbywgZSwgaGFuZGxlcjtcclxuXHJcbiAgICBpZiAoZXZlbnRzICYmIChlbnZFdmVudHMgPSBldmVudHMuRU5WKSkge1xyXG4gICAgICBmb3IgKGUgaW4gZW52RXZlbnRzKSB7XHJcbiAgICAgICAgaGFuZGxlciA9IGVudkV2ZW50c1tlXTtcclxuICAgICAgICBpZiAodGhpc1toYW5kbGVyXSlcclxuICAgICAgICAgIHRoaXMub24oZSwgdGhpcy5wcm94eSh0aGlzLCB0aGlzW2hhbmRsZXJdKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICF0aGlzLmF1dG9pbml0IHx8IHRoaXMuYXV0b2luaXQoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vbW9kdWxlJ1xyXG5cclxuZXhwb3J0IGNsYXNzIF9QT1JUIGV4dGVuZHMgX01PRFVMRSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgc3VwZXIob2JqKVxyXG5cclxuICAgIHRoaXMucG9ydCA9IG51bGw7XHJcblxyXG4gICAgY29uc3QgdHlwZSA9IHRoaXMudHlwZTtcclxuXHJcbiAgICBicm93c2VyLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKHRoaXMucHJveHkodGhpcywgdGhpcy5wYXNzTWVzc2FnZSkpO1xyXG5cclxuICAgIGlmICh0eXBlID09PSAncHJpdmlsZWdlZCcgfHwgdHlwZSA9PT0gJ2JhY2tncm91bmQnKSB0aGlzLmluaXRQb3J0aW5nKCk7XHJcblxyXG4gICAgdGhpcy5yZWdpc3RlclBvcnRFdmVudHMoKTtcclxuICB9XHJcbiAgZXh0ZW5kKGV2ZW50cykge1xyXG4gICAgdGhpcy5yZWdpc3RlclBvcnRFdmVudHMoZXZlbnRzKTtcclxuICB9XHJcbiAgcmVnaXN0ZXJQb3J0RXZlbnRzKGV2ZW50cykge1xyXG4gICAgZXZlbnRzID0gZXZlbnRzIHx8IHRoaXMuZXZlbnRzO1xyXG4gICAgbGV0IG9uZU9mZkV2ZW50cywgY29ubmVjdGlvbkJhc2VkRXZlbnRzO1xyXG5cclxuICAgIGlmIChldmVudHMpIHtcclxuICAgICAgb25lT2ZmRXZlbnRzID0gZXZlbnRzLk9ORU9GRjtcclxuICAgICAgaWYgKG9uZU9mZkV2ZW50cykge1xyXG4gICAgICAgIGZvciAobGV0IGUgb2Ygb25lT2ZmRXZlbnRzKVxyXG4gICAgICAgICAgdGhpcy5vbihlLCB0aGlzLnByb3h5KHRoaXMsIHRoaXMuc2VuZE1lc3NhZ2UsIGUpKTtcclxuICAgICAgfVxyXG4gICAgICBjb25uZWN0aW9uQmFzZWRFdmVudHMgPSBldmVudHMuQ09OTkVDVElPTjtcclxuICAgICAgaWYgKGNvbm5lY3Rpb25CYXNlZEV2ZW50cykge1xyXG4gICAgICAgIGZvciAobGV0IGYgb2YgY29ubmVjdGlvbkJhc2VkRXZlbnRzKVxyXG4gICAgICAgICAgdGhpcy5vbihmLCB0aGlzLnByb3h5KHRoaXMsIHRoaXMucG9zdE1lc3NhZ2UsIGYpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBwYXNzTWVzc2FnZShyZXEsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSB7XHJcbiAgICByZXEuYXJncyA9IHJlcS5hcmdzIHx8IFtdO1xyXG4gICAgbGV0IGFyZ3MgPSBbXS5jb25jYXQocmVxLmV2LCByZXEuYXJncyk7XHJcbiAgICBpZiAoIXNlbmRlciB8fCAhc2VuZGVyLm5hbWUpIGFyZ3MgPSBhcmdzLmNvbmNhdChzZW5kZXIsIHNlbmRSZXNwb25zZSk7XHJcbiAgICB0aGlzLmVtaXQuYXBwbHkodGhpcywgYXJncyk7XHJcbiAgICBpZiAocmVxLndhaXQpIHJldHVybiB0cnVlOyAvLyB0aGlzIHdpbGwga2VlcCB0aGUgbWVzc2FnZSBjaGFubmVsIG9wZW4gdG8gdGhlIG90aGVyIGVuZCB1bnRpbCBgc2VuZFJlc3BvbnNlYCBpcyBjYWxsZWRcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgc2VuZE1lc3NhZ2UoZSwgLi4uYXJncykge1xyXG4gICAgY29uc3QgdHlwZSA9IHRoaXMudHlwZTtcclxuICAgIGxldCBtc2cgPSB7IGV2OiBlLCBhcmdzOiBhcmdzIH07XHJcbiAgICBpZiAodHlwZSA9PT0gJ2NvbnRlbnQnKSBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2UobXNnKS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICBlbHNlIGlmICh0eXBlID09PSAnYmFja2dyb3VuZCcpIHtcclxuICAgICAgY29uc3QgbGFzdEFyZyA9IGFyZ3NbYXJncy5sZW5ndGggLSAxXTtcclxuICAgICAgbGV0IHRhYjtcclxuICAgICAgaWYgKGxhc3RBcmcgIT09IHVuZGVmaW5lZCAmJiAodGFiID0gbGFzdEFyZy50YWIpKSB7XHJcbiAgICAgICAgaWYgKHRhYiA9PT0gJ2FjdGl2ZScpIHtcclxuICAgICAgICAgIGJyb3dzZXIudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSB9KS50aGVuKHRhYnMgPT4ge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB0YWIgb2YgdGFicylcclxuICAgICAgICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UodGFiLmlkLCBtc2cpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UobGFzdEFyZy50YWIsIG1zZykuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBicm93c2VyLnRhYnMucXVlcnkoey8qIGN1cnJlbnRXaW5kb3c6IGZhbHNlLCBhY3RpdmU6IGZhbHNlICovfSkudGhlbih0YWJzID0+IHtcclxuICAgICAgICAgIGZvciAobGV0IHRhYiBvZiB0YWJzKVxyXG4gICAgICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UodGFiLmlkLCBtc2cpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBwb3N0TWVzc2FnZShlLCAuLi5hcmdzKSB7XHJcbiAgICBjb25zdCBtc2cgPSB7IGV2OiBlLCBhcmdzOiBhcmdzIH07XHJcbiAgICBpZiAodGhpcy5wb3J0KSB0aGlzLnBvcnQucG9zdE1lc3NhZ2UobXNnKTtcclxuICB9XHJcbiAgaW5pdFBvcnRpbmcoKSB7XHJcbiAgICBpZiAoIXRoaXMucG9zdHBvbmVDb25uZWN0aW9uKSB7XHJcbiAgICAgIHRoaXMuY29ubmVjdCgpO1xyXG4gICAgICB0aGlzLmFkZENvbm5lY3Rpb25MaXN0ZW5lcnMoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuYWRkQ29ubmVjdGlvbkxpc3RlbmVycyh0aGlzLnByb3h5KHRoaXMsIHRoaXMuY29ubmVjdCkpO1xyXG4gICAgfVxyXG4gIH1cclxuICBjb25uZWN0KCkge1xyXG4gICAgY29uc3QgcG9ydCA9IHRoaXMucG9ydCA9IHRoaXMucG9ydCB8fCBicm93c2VyLnJ1bnRpbWUuY29ubmVjdCh7IG5hbWU6IHRoaXMubmFtZSB9KTtcclxuICAgIHBvcnQub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKCgpID0+IHRoaXMucG9ydCA9IG51bGwpO1xyXG4gIH1cclxuICBhZGRDb25uZWN0aW9uTGlzdGVuZXJzKGNiKSB7XHJcbiAgICBicm93c2VyLnJ1bnRpbWUub25Db25uZWN0LmFkZExpc3RlbmVyKHBvcnQgPT4ge1xyXG4gICAgICBwb3J0Lm9uTWVzc2FnZS5hZGRMaXN0ZW5lcih0aGlzLnByb3h5KHRoaXMsIHRoaXMucGFzc01lc3NhZ2UpKTtcclxuICAgICAgIWNiIHx8IGNiKCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==