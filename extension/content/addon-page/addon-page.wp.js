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

exports["default"] = new _utils._STORE({
  events: {
    ENV: {
      'toggled:sync': 'onToggledSync'
    }
  },
  env: 'addon-page',
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
        name = names ? names[i] : null;
        entry = entries ? entries[name] : null;

        if (entry) {
          try {
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

            if (!entry.url) {
              throw 'Entry is missing URL field!';
            }
          } catch (e) {
            var brokenEl = document.getElementById('entry-' + j);

            if (brokenEl) {
              brokenEl.classList.add('entry--broken');
              brokenEl.title = e.toString();
              var brokenNameEl = brokenEl.getElementsByClassName('name')[0];

              if (brokenNameEl) {
                brokenNameEl.classList.remove('name');
                brokenNameEl.classList.add('name--disabled');
              }
            } else {
              var errEl = document.createElement('div');
              errEl.className = 'entry--error u-color--red';
              errEl.appendChild(document.createTextNode(browser.i18n.getMessage('broken_entry', name)));
              container.appendChild(errEl);
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
        'set-areas-after-sync-change': 'update'
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
          '#addon-autocs': 'toggleAutocsOpt',
          '#addon-iframes': 'toggleIFrameOpt'
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
      document.getElementById('vip-note').checked = miscSettings.vipNote;
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
      document.getElementById('addon-iframes').checked = settings.addon.iframes;
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
    toggleIFrameOpt: function toggleIFrameOpt(e, el) {
      this.emit('change:iframe-setting', el.checked);
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
    ONEOFF: ['change:style-setting', 'change:autonote-setting', 'change:mark-method-setting', 'toggle:shortcut-setting', 'change:shortcut-setting', 'toggle:ctm-setting', 'change:saveopt-setting', 'toggle:priv-setting', 'change:immut-setting', 'change:dropLosses-setting', 'change:namingopt-setting', 'change:sort-setting', 'change:view-setting', 'change:hash-setting', 'toggle:noteopt-setting', 'toggle:quickbuttonopt-setting', 'switch:quickbuttonopt-setting', 'toggle:notification-setting', 'toggle:misc-setting', 'change:misc-setting', 'toggle:tbbpower-setting', 'change:autocs-setting', 'change:iframe-setting', 'add:custom-marker', 'remove:custom-marker', 'delete:entries', 'clean:entries', 'open:entries', 'rename:entry', 'view:entry', 'sync:entry', 'sync:history', 'sync:settings', 'import:storage', 'toggle:sync', 'change:custom-search-setting', 'changed:per-page-count', 'error:browser-console', 'clear:logs', 'tag:entries']
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
      autocs: true,
      iframes: true
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
  js_injection_failure: 37,
  css_injection_failure: 38,
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
        data = browser.i18n.getMessage(l10nId, '');

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

        if (lastArg && (tab = lastArg.tab)) {
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
                  browser.tabs.sendMessage(_tab.id, msg, {
                    frameId: lastArg.frameId || 0
                  })["catch"](function () {});
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
            browser.tabs.sendMessage(lastArg.tab, msg, {
              frameId: lastArg.frameId || 0
            })["catch"](function () {});
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
    key: "onToggledSync",
    value: function onToggledSync() {
      var _this3 = this;

      this.init().then(function () {
        return _this3.emit('set-areas-after-sync-change');
      });
    }
  }, {
    key: "get",
    value: function get() {
      var _this4 = this;

      var field = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'storage';

      if (this.initializing) {
        return new Promise(function (r) {
          return window.setTimeout(function () {
            return r(_this4.get(field));
          }, 10);
        });
      }

      var meth = this['_get_' + field];
      if (!meth) throw 'field ' + field + ' doesn\'t exist';

      if (!this.initialized) {
        this.initializing = true;
        this.initialized = true;
        return this.init().then(function () {
          _this4.initializing = false;
          return _this4['_get_' + field]();
        });
      }

      return this['_get_' + field]();
    }
  }, {
    key: "_get_storage",
    value: function _get_storage() {
      var _this5 = this;

      return browser.storage.local.get().then(function (localStorage) {
        return browser.storage.sync.get().then(function (syncedStorage) {
          ['version', 'logs'].forEach(function (field) {
            localStorage[field] = localStorage[field] || syncedStorage[field];
          });
          if (_this5.area_settings === 'sync') localStorage.settings = syncedStorage.settings;
          return _this5._get_history().then(function (history) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9fc2hhcmVkL3V0aWxzLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvYWRkb24tcGFnZS9fc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9hZGRvbi1wYWdlL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L2FkZG9uLXBhZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9hZGRvbi1wYWdlL21vZHVsZXMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L2FkZG9uLXBhZ2UvbW9kdWxlcy9oaXN0b3J5LXBhZ2luYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9hZGRvbi1wYWdlL21vZHVsZXMvaGlzdG9yeS1zb3J0LmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvYWRkb24tcGFnZS9tb2R1bGVzL2hpc3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9hZGRvbi1wYWdlL21vZHVsZXMvaW1wb3J0LmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvYWRkb24tcGFnZS9tb2R1bGVzL2xvZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9hZGRvbi1wYWdlL21vZHVsZXMvbWFya2VyLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvYWRkb24tcGFnZS9tb2R1bGVzL25hdi5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L2FkZG9uLXBhZ2UvbW9kdWxlcy9zZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L2FkZG9uLXBhZ2UvbW9kdWxlcy9zeW5jaW5nLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvYWRkb24tcGFnZS9tb2R1bGVzL3RvZ2dsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9hZGRvbi1wYWdlL3BvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9hZGRvbi1wYWdlL3Nhc3MvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9kYXRhL2RlZmF1bHQtc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly8vLi9kYXRhL2xvZy1rZXlzLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2NvcHkuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZG9tbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2Vycm9yLXRyYWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZXh0ZW5kLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2dldEFjdGl2ZVRhYi5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9oYXNobGVzcy5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9sMTBuLmpzIiwid2VicGFjazovLy8uL3V0aWxzL21lZGlhdG9yLmpzIiwid2VicGFjazovLy8uL3V0aWxzL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9wb3J0LmpzIiwid2VicGFjazovLy8uL3V0aWxzL3N0b3JlLmpzIl0sIm5hbWVzIjpbIl9DT1BZIiwiX0dFVF9BQ1RJVkVfVEFCIiwiX0VYVEVORCIsIl9NT0RVTEUiLCJfRE9NTU9EVUxFIiwiX1NUT1JFIiwiX1BPUlQiLCJfTDEwTiIsIl9FUlJPUlRSQUNLRVIiLCJfSEFTSExFU1MiLCJldmVudHMiLCJFTlYiLCJlbnYiLCJfZ2V0X2Rvd25sb2FkX29wdGlvbiIsImJyb3dzZXIiLCJzdG9yYWdlIiwiYXJlYV9zZXR0aW5ncyIsImdldCIsInRoZW4iLCJzZXR0aW5ncyIsImhpc3RvcnkiLCJkb3dubG9hZCIsIl9nZXRfbWFya2VycyIsIm1hcmtlcnMiLCJfZ2V0X3Nob3J0Y3V0cyIsInNob3J0Y3V0cyIsImFsbG93ZWRIYXNoZXMiLCJib290c3RyYXBwZWQiLCJhdXRvaW5pdCIsInN0YXJ0IiwiaW5pdE1haW5OYXYiLCJ0YWIiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhhc2giLCJzcGxpdCIsImluY2x1ZGVzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNsYXNzTGlzdCIsImFkZCIsIl9OQVYiLCJpbm5lclRleHQiLCJydW50aW1lIiwiZ2V0TWFuaWZlc3QiLCJ2ZXJzaW9uIiwic3VibmF2cyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJuIiwibGVuZ3RoIiwidG9nZ2xlQnV0dG9ucyIsInQiLCJfVE9HR0xFUiIsInNldEFkZG9uTGlua3MiLCJzZXRMb2dMaW5rIiwiYWRkb25VUkwiLCJpMThuIiwiZ2V0TWVzc2FnZSIsImFkZG9uTGlua3MiLCJhIiwiYUwiLCJocmVmIiwiaWQiLCJsb2dMaW5rIiwibG9ncyIsImwiLCJlbmNvZGVVUklDb21wb25lbnQiLCJsb2ciLCJEYXRlIiwidG9VVENTdHJpbmciLCJlbCIsIkRPTSIsImNsaWNrIiwibnVtYmVyUGFnZXMiLCJudW1iZXJFbnRyaWVzIiwiY3VycmVudFBhZ2UiLCJwZXJQYWdlIiwidXBkYXRlRnJvbVN0b3JhZ2UiLCJlIiwibmV3UGFnZSIsImdldEF0dHJpYnV0ZSIsImVtaXQiLCJyZW5kZXIiLCJwcmV2IiwibmV4dCIsInVwZGF0ZSIsInJlbW92ZSIsInBwIiwiT2JqZWN0Iiwia2V5cyIsImVudHJpZXMiLCJzaWxlbnQiLCJNYXRoIiwiY2VpbCIsInJlc2V0IiwidWwiLCJBcnJheSIsImZyb20iLCJmb3JFYWNoIiwibGkiLCJwIiwicGFnZXMiLCJyIiwiZnJhZyIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJpIiwibWF4IiwibWluIiwiaiIsImFwcGVuZEJ1dHRvbiIsImluc2VydEJlZm9yZSIsImIiLCJidG4iLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVUZXh0Tm9kZSIsImNoYW5nZUNvdW50UGVyUGFnZSIsImJ5IiwiZGF0ZSIsImNyZWF0ZWQiLCJvYmplY3QiLCJfc29ydCIsImxhc3QiLCJmaWVsZCIsInNvcnQiLCJuYW1lIiwiYXoiLCJ6YSIsInJldmVyc2UiLCJ0b0xvd2VyQ2FzZSIsImxvY2FsZUNvbXBhcmUiLCJjaGFuZ2UiLCJrZXl1cCIsImluaXRpYWxpemVkIiwibmFtZXMiLCJlbnRyeVRtcGwiLCJlbnRyaWVzQ29udGFpbmVyIiwicGFnZSIsInNvcnRlZCIsInZpZXdNb2RlIiwic2VhcmNoVGVybSIsInNlYXJjaGVkIiwidGFncyIsImZpbHRlcmVkIiwiZmlsdGVyT3B0aW9uc1NldCIsImluaXQiLCJyZXN1bWUiLCJtc2ciLCJsb2NrZWQiLCJjb25maXJtZWQiLCJjb25maXJtIiwidHlwZSIsInNwZWMiLCJ1bmRlZmluZWQiLCJnZXREYXRhIiwiZGF0YSIsInRleHQiLCJsaW5rIiwiam9pbiIsImJvZHkiLCJyZW1vdmVDaGlsZCIsImJhY2t1cCIsInBvcCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0b0xvY2FsZVN0cmluZyIsInJlcGxhY2UiLCJjb250YWlucyIsImdldFVSTHMiLCJ1cmxzIiwibmV3TmFtZSIsInByb21wdCIsIm9sZE5hbWUiLCJhcmVhIiwicGFyZW50Tm9kZSIsInRhZyIsImZvcmNlIiwibyIsInN5bmMiLCJsb2NhbCIsIm9yaWdFbnRyaWVzIiwic3luY2VkIiwicHVzaCIsImNoZWNrZWQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYWN0aW9uIiwidmFsdWUiLCJ2YWwiLCJ0ZW1wbGF0ZSIsImNvbnRhaW5lciIsInNlYXJjaFRlcm1MZW5ndGgiLCJzZWFyY2hlZEZ1bGxUZXh0IiwiY2xvbmUiLCJlbnRyeSIsIm5hbWVGaWVsZCIsImlucHV0IiwibGFiZWwiLCJpbmZvQnV0dG9uIiwiZGV0YWlscyIsInNlYXJjaFJlc3VsdHMiLCJidXR0b25zIiwiZWRpdCIsInZpZXciLCJpbW11dCIsImltbXV0RWwiLCJsb2NrZWRFbCIsInRhZ0VsIiwiZmlsdGVyIiwiY2xvbmVOb2RlIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJ1cmwiLCJjbGFzc05hbWUiLCJvcHRpbWl6ZURhdGVTdHJpbmciLCJmaXJzdCIsIm1hcmtzIiwiZnVsbFRleHRTZWFyY2hSZXN1bHRzIiwicmVzIiwibWFyayIsInBvcyIsIm1hcmtUZXh0IiwibWFya1RleHRFbCIsImhpZ2hsaWdodCIsInQxIiwidDIiLCJ0MyIsInN1YnN0cmluZyIsInN1YnN0ciIsImJyb2tlbkVsIiwidGl0bGUiLCJ0b1N0cmluZyIsImJyb2tlbk5hbWVFbCIsImVyckVsIiwibm9FbnRyaWVzSGludCIsInNlYXJjaCIsImFjdGlvbnMiLCJjb3VudCIsInBwU2VsZWN0IiwiY2hlY2thbGwiLCJtZXRoXzAiLCJtZXRoXzEiLCJtZXRoXzIiLCJtZXRoXzMiLCJzZWxlY3QiLCJwbGFjZWhvbGRlck9wdGlvbiIsImFsbFRhZ3MiLCJhZGRGaWx0ZXJPcHQiLCJkaXNhYmxlZCIsImF0dHJzIiwib3B0Iiwibm90YWdGaWx0ZXJPcHQiLCJhbGxfbWFya3NfcGx1c19tZXRhIiwiYWxsX21hcmtzX3BsdXNfbG9zdCIsImFsbF9tYXJrc19wbHVzX21ldGFfYW5kX25vdGVzIiwiYWxsX21hcmtzX2xvc3QiLCJkZWZhdWx0TWFya2VycyIsInJlamVjdCIsImtleSIsIm5ld0xpbmUiLCJuZXdMaW5lcyIsIm5vdGUiLCJub3RlVGV4dCIsImxvc3QiLCJtIiwidHJpbSIsImdldFRleHQiLCJxIiwidGVybSIsInNlYXJjaFR5cGUiLCJjb3VudFNlbGVjdCIsImNsYXNzTWV0aCIsInRvZ2dsZSIsInNldHVwU2VhcmNoIiwicmVuZGVyRW50cmllcyIsInNlYXJjaENvdW50Iiwic2VhcmNoRnVsbFRleHQiLCJzZWFyY2hCeU5hbWUiLCJmb3VuZCIsInJlc3VsdHMiLCJ0YWJsZSIsInNldFZpZXciLCJzZXRUaW1lb3V0IiwiZm9jdXMiLCJzZXR1cFNvcnQiLCJfU09SVCIsInNvcnRTZWFyY2hSZXN1bHRzIiwibm9kZU5hbWUiLCJmaXJzdENoaWxkIiwiZmlsdGVyZWRFbnRyaWVzIiwicngiLCJjIiwiUmVnRXhwIiwic2VsZWN0ZWRJbmRleCIsImluZGV4T2YiLCJkaXJlY3RseSIsImlucHV0cyIsImRlbGVnYXRlQnV0dG9uQWN0aW9uIiwicXVlcnlTZWxlY3RvciIsInNldHVwVmlldyIsInRvZ2dsZUhlYWRlckZpZWxkcyIsInNldEZpbHRlck9wdGlvbnMiLCJtb3VzZWRvd24iLCJ1cGRhdGVFeHBvcnRMaW5rcyIsInN0b3JlU3RyaW5nIiwicGFyc2VkU3RyaW5nIiwicGFyc2UiLCJkaXNwbGF5RmFpbHVyZSIsInRyaWdnZXJGaWxlSW5wdXQiLCJoYW5kbGVGaWxlIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsImZpbGUiLCJmaWxlcyIsInNpemUiLCJtb2QiLCJvbmxvYWQiLCJ0YXJnZXQiLCJyZXN1bHQiLCJyZWFkQXNUZXh0IiwicmVhc29uIiwibG9jYWxEYXRhTGluayIsInN5bmNlZERhdGFMaW5rIiwidXBkYXRlRXhwb3J0TmFtZSIsInRhYmxlQm9keSIsInRyIiwidGRfZGF0ZSIsInRkX21zZyIsIm5vZGVfZGF0ZSIsIm5vZGVfbXNnIiwidGltZSIsIl9MT0dfS0VZUyIsImdldEtleUJ5VmFsdWUiLCJjbGVhciIsIl9NQVJLRVIiLCJjdXN0b21CZ0NvbG9yIiwic3R5bGVzIiwic2hhZG93IiwieCIsInkiLCJibHVyIiwiY29sb3IiLCJpbmplY3QiLCJwcmV2aWV3IiwibWFya2VyIiwiZXhpc3RpbmdTdHlsZSIsInN0eWxlIiwiYXV0b25vdGUiLCJzZXRTdHlsZSIsInN0eWxlU3BsaXQiLCJ0ZXh0U2hhZG93Iiwic2hhZG93U3BsaXQiLCJiZ0lucHV0IiwiY29sb3JJbnB1dCIsImJvcmRlcklucHV0IiwiYXV0b25vdGVJbnB1dCIsImJnIiwiYm9yZGVyIiwiYXV0b25vdGVDb2xvciIsInNoYWRvd1NlbGVjdCIsInByb3AiLCJjaGlsZHJlbiIsImNsYXNzZXMiLCJpc1ZhbGlkIiwic2V0U2hhZG93IiwidmFsaWQiLCJ0ZXN0IiwicGFnZU5hdiIsImN1cnJlbnQiLCJoYXNBdHRyaWJ1dGUiLCJvcGVuIiwiY2xvc2UiLCJ0YXJnZXRJZCIsImFsbG93ZWRLZXlzIiwiYWxsb3dlZFNob3J0Y3V0cyIsImFsbG93ZWRRdWlja2J1dHRvbk9wdHMiLCJtYXJrZXJLZXlzIiwiY3VzdG9tTWFya2VyS2V5cyIsImN1c3RvbVNlYXJjaCIsInJlbmRlck1hcmtlclNlbGVjdE9wdGlvbnMiLCJ1cGRhdGVNYXJrZXIiLCJpbmplY3RTZXR0aW5ncyIsInByb3RvdHlwZSIsInNsaWNlIiwiY2FsbCIsImtleVNlbGVjdCIsImtleUljb25zIiwiYWRkS2V5U2VsZWN0IiwicmVtb3ZlS2V5U2VsZWN0IiwiZnJhZ21lbnQxIiwiZnJhZ21lbnQyIiwiZnJhZ21lbnQzIiwiZnJhZ21lbnQ0Iiwib3B0aW9uIiwiaWNvbiIsIlZhbCIsInRvVXBwZXJDYXNlIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwic2NDaGVja2JveCIsInNjU2VsZWN0IiwiY21DaGVja2JveCIsInNjIiwiaGlzdG9yeVNldHRpbmdzIiwic2F2ZU9wdHMiLCJnZXRFbGVtZW50c0J5TmFtZSIsImF1dG9zYXZlIiwibmFtaW5nIiwic2F2ZUluUHJpdiIsImRyb3BMb3NzZXMiLCJzYXZlTm90ZSIsImlnbm9yZUhhc2giLCJtaXNjU2V0dGluZ3MiLCJtaXNjIiwibWFya21ldGhvZCIsImJtaWNvbiIsIm5vdGVpY29uIiwibm90ZW9uY2xpY2siLCJub3RldHJhbnNwIiwibm90ZXBsYWludmlldyIsImZhaWx1cmVOb3RlIiwic3VjY2Vzc05vdGUiLCJwYm1Ob3RlIiwiZXJyb3JOb3RlIiwidmlwTm90ZSIsInRtdWlwb3MiLCJ0YmJwb3dlciIsImFkZG9uIiwiYXV0b2NzIiwiaWZyYW1lcyIsInNob3dDdXN0b21TZWFyY2hTZXR0aW5nU3VjY2VzcyIsImhpZGVDdXN0b21TZWFyY2hTZXR0aW5nU3VjY2VzcyIsImNoYW5nZVN0eWxlIiwidG9nZ2xlQXV0b05vdGVPcHQiLCJjaGFuZ2VBdXRvTm90ZU9wdCIsImNoYW5nZUhhc2hPcHQiLCJ0b2dnbGVJbW11dE9wdCIsInRvZ2dsZURyb3BMb3NzZXNPcHQiLCJ0b2dnbGVBdXRvY3NPcHQiLCJ0b2dnbGVJRnJhbWVPcHQiLCJhZGRNYXJrZXIiLCJiZ0NvbG9yIiwiZ2V0UmFuZG9tTGlnaHRDb2xvciIsInNlbGVjdGVkIiwicmVtb3ZlTWFya2VyIiwiY2hhbmdlTWFya01ldGhvZCIsInRvZ2dsZVNob3J0Y3V0IiwiY2hhbmdlU2hvcnRjdXQiLCJ0b2dnbGVDdG0iLCJjaGFuZ2VTYXZlT3B0IiwidG9nZ2xlUHJpdlNhdmUiLCJjaGFuZ2VOYW1pbmdPcHQiLCJ0b2dnbGVTYXZlTm90ZU9wdCIsImNoYW5nZVF1aWNrYnV0dG9uT3B0Iiwic3dpdGNoUXVpY2tidXR0b25PcHQiLCJ0b2dnbGVOb3RlcyIsInRvZ2dsZU1pc2MiLCJ0b2dnbGVUQkJQb3dlck9wdCIsImNoYW5nZVRtdWlQb3NpdGlvbk9wdCIsImNoYW5nZUN1c3RvbVNlYXJjaCIsImlucDEiLCJpbnAyIiwicGFydDEiLCJwYXJ0MiIsImZsb29yIiwicmFuZG9tIiwiYXJlYV9oaXN0b3J5IiwiYXJlYV9wYWdlbm90ZXMiLCJ0b2dnbGVTd2l0Y2giLCJ1bmRvIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0b3BQcm9wYWdhdGlvbiIsImRhdGFUYXJnZXQiLCJ0YXJnZXRzIiwiZGF0YVRvZ2dsZSIsInJvbGVzIiwicm9sZSIsIk9ORU9GRiIsInoiLCJzIiwiZCIsInciLCJhcnJvd3VwIiwiYXJyb3dkb3duIiwic2IiLCJjbSIsImNvcHkiLCJhY3RpdmUiLCJvdmVyd3JpdGUiLCJjaGFuZ2VkTm90ZSIsInByb2dyZXNzYmFyIiwidGFicyIsIm1ldGEiLCJ1bmZvbGRlZCIsIm5vdGVzIiwibGlua3MiLCJ0aGVtZXMiLCJ0aGVtZSIsInBhZ2Vub3RlcyIsIm5vdGVfcGJtIiwibm90ZV9yZXN0b3JhdGlvbl9mYWlsdXJlIiwibm90ZV91cmwiLCJlcnJvcl9zYXZlX3N0eWxlIiwiZXJyb3Jfc2F2ZV9fdG9nZ2xlX3NjIiwiZXJyb3Jfc2F2ZV9jaGFuZ2Vfc2MiLCJlcnJvcl9zYXZlX2N0bSIsImVycm9yX3NhdmVfYXV0b3NhdmUiLCJlcnJvcl9zYXZlX25hbWluZyIsImVycm9yX3NhdmVfbm90aWZ5IiwiZXJyb3Jfc2F2ZV9kb3dubG9hZCIsImVycm9yX3NhdmVfYm1pY29uIiwiZXJyb3JfY2xlYW5faGlzdG9yeSIsImVycm9yX2FkZF9tYXJrZXIiLCJlcnJvcl9yZW1vdmVfbWFya2VyIiwiZXJyb3Jfc2F2ZV9lbnRyeSIsImVycm9yX3VwZGF0ZV9lbnRyeSIsImVycm9yX2RlbF9lbnRyeSIsImVycm9yX2VtcHR5X3N5bmNlZF9zdG9yYWdlX29uc3RhcnQiLCJlcnJvcl9lbXB0eV9zeW5jZWRfc3RvcmFnZV9vbnVwZGF0ZSIsImVycm9yX2VtcHR5X2xvY2FsX3N0b3JhZ2Vfb25zdGFydCIsImVycm9yX2ltcG9ydF9lbXB0eSIsImVycm9yX2ltcG9ydF9oaXN0b3J5IiwiZXJyb3JfaW1wb3J0X3NldHRpbmdzIiwiZXJyb3JfaW1wb3J0X291dGRhdGVkIiwiZXJyb3JfaW1wb3J0X2hpc3Rvcnlfbm90X2ZvdW5kIiwiZXJyb3JfaW1wb3J0X3NldHRpbmdzX25vdF9mb3VuZCIsImVycm9yX25hbWluZyIsImVycm9yX3N0b3JhZ2VfbWlncmF0aW9uIiwiZXJyb3JfZW1wdHlfbG9jYWxfc3RvcmFnZV9vbnVwZGF0ZSIsImVycm9yX3RvZ2dsZV9zeW5jIiwiZXJyb3Jfc2F2ZV9wcml2Iiwibm90ZV9yZXN0b3JhdGlvbl93YXJuaW5nXzEiLCJub3RlX3Jlc3RvcmF0aW9uX3dhcm5pbmdfMiIsImVycm9yX3NhdmVfY2hhbmdlX2F1dG9ub3RlIiwiZXJyb3Jfc2F2ZV9tYXJrX21ldGhvZCIsImpzX2luamVjdGlvbl9mYWlsdXJlIiwiY3NzX2luamVjdGlvbl9mYWlsdXJlIiwic3JjIiwiaXNBcnJheSIsImhhc093blByb3BlcnR5Iiwib2JqIiwiX2JvdW5kIiwiX2V4dHJhQm91bmQiLCJhZGRMaXN0ZW5lcnNNYW51YWxseSIsImFkZExpc3RlbmVycyIsImF1dG9QYXVzZSIsInNldEF1dG9QYXVzZSIsInN1Yk1hcCIsInNlbGVjdG9yIiwiX3NlbCIsIm1ldGgiLCJmIiwiaXNJZCIsImlzQ2xhc3MiLCJpc0RvYyIsIm9uIiwicmVtb3ZlTGlzdGVuZXJzIiwiaGFuZGxlciIsImRvbUV2ZW50cyIsInByb3h5IiwiZ2VuZXJhbEhhbmRsZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic3BsaWNlIiwiX2V4dHJhIiwic2V0IiwiZXJyb3IiLCJmaWxlbmFtZSIsIm1lc3NhZ2UiLCJzaGlmdCIsImxpbmVubyIsImNvbG5vIiwiZ2V0VGltZSIsIm9iajEiLCJvYmoyIiwicXVlcnkiLCJjdXJyZW50V2luZG93IiwiaCIsImxhc3RJbmRleE9mIiwidHJhbnNsYXRlRG9jdW1lbnQiLCJjYXB0dXJlIiwicGFzc2l2ZSIsIm9uY2UiLCJkYXRhc2V0IiwiZG9jdW1lbnRFbGVtZW50IiwiZ2V0VUlMYW5ndWFnZSIsInRleHRFbGVtZW50cyIsImF0dHJFbGVtZW50cyIsImwxMG5JZCIsInRleHRDb250ZW50IiwiYXR0ciIsImwxMG5BdHRyIiwidG9waWNzIiwiZXZlbnQiLCJhcmdzIiwidG9waWMiLCJhcHBseSIsInNlbmRNZXNzYWdlIiwiZXYiLCJ3YWl0IiwiY29udGV4dCIsImZ1bmMiLCJhcmdzMSIsImFyZ3MyIiwiY29uY2F0IiwiZW52RXZlbnRzIiwiX01FRElBVE9SIiwicG9ydCIsIm9uTWVzc2FnZSIsImFkZExpc3RlbmVyIiwicGFzc01lc3NhZ2UiLCJpbml0UG9ydGluZyIsInJlZ2lzdGVyUG9ydEV2ZW50cyIsIm9uZU9mZkV2ZW50cyIsImNvbm5lY3Rpb25CYXNlZEV2ZW50cyIsIkNPTk5FQ1RJT04iLCJwb3N0TWVzc2FnZSIsInJlcSIsInNlbmRlciIsInNlbmRSZXNwb25zZSIsImxhc3RBcmciLCJmcmFtZUlkIiwicG9zdHBvbmVDb25uZWN0aW9uIiwiY29ubmVjdCIsImFkZENvbm5lY3Rpb25MaXN0ZW5lcnMiLCJvbkRpc2Nvbm5lY3QiLCJjYiIsIm9uQ29ubmVjdCIsImluaXRpYWxpemluZyIsIl9ERUZBVUxUX1NUT1JBR0UiLCJzZXRBcmVhcyIsIlByb21pc2UiLCJsb2NhbFN0b3JhZ2UiLCJzeW5jZWRTdG9yYWdlIiwiX2dldF9oaXN0b3J5Iiwic3luY2VkSGlzdG9yeSIsImxvY2FsSGlzdG9yeSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7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T0FBUixDQUFnQm9LLElBQWhCLENBQXFCbEssR0FBckIsR0FBMkJDLElBQTNCLENBQWdDLFVBQUFxbUIsYUFBYTtBQUFBLG1CQUFJQSxhQUFhLENBQUMxa0IsT0FBZCxJQUF5QixFQUE3QjtBQUFBLFdBQTdDLENBQVA7QUFDRDs7QUFDRCxlQUFPeWtCLFlBQVksQ0FBQ3prQixPQUFwQjtBQUNELE9BTE0sQ0FBUDtBQU1EOzs7O0VBdEd5QjFDLGUiLCJmaWxlIjoiY29udGVudC9hZGRvbi1wYWdlL2FkZG9uLXBhZ2Uud3AuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2NvbnRlbnQvYWRkb24tcGFnZS9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB7IF9DT1BZIH0gZnJvbSAnLi8uLi8uLi91dGlscy9jb3B5J1xyXG5pbXBvcnQgeyBfR0VUX0FDVElWRV9UQUIgfSBmcm9tICcuLy4uLy4uL3V0aWxzL2dldEFjdGl2ZVRhYidcclxuaW1wb3J0IF9FWFRFTkQgZnJvbSAnLi8uLi8uLi91dGlscy9leHRlbmQnXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uLy4uL3V0aWxzL21vZHVsZSdcclxuaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vdXRpbHMvZG9tbW9kdWxlJ1xyXG5pbXBvcnQgeyBfU1RPUkUgfSBmcm9tICcuLy4uLy4uL3V0aWxzL3N0b3JlJ1xyXG5pbXBvcnQgeyBfUE9SVCB9IGZyb20gJy4vLi4vLi4vdXRpbHMvcG9ydCdcclxuaW1wb3J0IHsgX0hBU0hMRVNTIH0gZnJvbSAnLi8uLi8uLi91dGlscy9oYXNobGVzcydcclxuaW1wb3J0IF9MMTBOIGZyb20gJy4vLi4vLi4vdXRpbHMvbDEwbidcclxuaW1wb3J0IF9FUlJPUlRSQUNLRVIgZnJvbSAnLi8uLi8uLi91dGlscy9lcnJvci10cmFja2VyJ1xyXG5cclxuZXhwb3J0IHsgX0NPUFksIF9HRVRfQUNUSVZFX1RBQiwgX0VYVEVORCwgX01PRFVMRSwgX0RPTU1PRFVMRSwgX1NUT1JFLCBfUE9SVCwgX0wxME4sIF9FUlJPUlRSQUNLRVIsIF9IQVNITEVTUyB9XHJcbiIsImltcG9ydCB7IF9TVE9SRSB9IGZyb20gJy4vLi4vX3NoYXJlZC91dGlscydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBfU1RPUkUoe1xyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICd0b2dnbGVkOnN5bmMnOiAnb25Ub2dnbGVkU3luYydcclxuICAgIH1cclxuICB9LFxyXG4gIGVudjogJ2FkZG9uLXBhZ2UnLFxyXG5cclxuICBfZ2V0X2Rvd25sb2FkX29wdGlvbigpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MpIHJldHVybiAndGV4dCc7XHJcbiAgICAgIHJldHVybiBzdG9yYWdlLnNldHRpbmdzLmhpc3RvcnkuZG93bmxvYWQ7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfbWFya2VycygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4gc3RvcmFnZS5zZXR0aW5ncy5tYXJrZXJzKTtcclxuICB9LFxyXG4gIF9nZXRfc2hvcnRjdXRzKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiBzdG9yYWdlLnNldHRpbmdzLnNob3J0Y3V0cyk7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IF9TVE9SRSBmcm9tICcuL19zdG9yZSdcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vX3NoYXJlZC91dGlscydcclxuXHJcbmltcG9ydCBfSElTVE9SWSBmcm9tICcuL21vZHVsZXMvaGlzdG9yeSdcclxuaW1wb3J0IF9TRVRUSU5HUyBmcm9tICcuL21vZHVsZXMvc2V0dGluZ3MnXHJcbmltcG9ydCBfTE9HR0lORyBmcm9tICcuL21vZHVsZXMvbG9ncydcclxuaW1wb3J0IF9TWU5DSU5HIGZyb20gJy4vbW9kdWxlcy9zeW5jaW5nJ1xyXG5pbXBvcnQgX0lNUE9SVCBmcm9tICcuL21vZHVsZXMvaW1wb3J0J1xyXG5pbXBvcnQgX0NPTlRBQ1QgZnJvbSAnLi9tb2R1bGVzL2NvbnRhY3QnXHJcbmltcG9ydCBfUEFHSU5BVE9SIGZyb20gJy4vbW9kdWxlcy9oaXN0b3J5LXBhZ2luYXRpb24nXHJcblxyXG5pbXBvcnQgX05BViBmcm9tICcuL21vZHVsZXMvbmF2J1xyXG5cclxubmV3IF9NT0RVTEUoe1xyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICdzdGFydGVkOmFwcCc6ICdzdGFydCcsXHJcbiAgICAgICd1cGRhdGVkOnNldHRpbmdzJzogJ3N0YXJ0JyxcclxuICAgICAgJ3VwZGF0ZWQ6aGlzdG9yeSc6ICdzdGFydCdcclxuICAgIH1cclxuICB9LFxyXG4gIGFsbG93ZWRIYXNoZXM6IFsnbmV3cycsICdtYW51YWwnLCAnc2V0dGluZ3MnLCAnaGlzdG9yeScsICdjb250YWN0JywgJ3N5bmMnLCAnZXhwb3J0JywgJ2xvZ3MnXSxcclxuICBib290c3RyYXBwZWQ6IGZhbHNlLFxyXG4gIGF1dG9pbml0KCkge1xyXG4gICAgX1NUT1JFLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmIChzdG9yYWdlLnNldHRpbmdzICYmIHN0b3JhZ2UuaGlzdG9yeSkgdGhpcy5zdGFydCgpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBzdGFydCgpIHtcclxuICAgIGlmICghdGhpcy5ib290c3RyYXBwZWQpIHtcclxuICAgICAgdGhpcy5ib290c3RyYXBwZWQgPSB0cnVlO1xyXG4gICAgICBfSElTVE9SWSgpO1xyXG4gICAgICBfU0VUVElOR1MoKTtcclxuICAgICAgX0xPR0dJTkcoKTtcclxuICAgICAgX1NZTkNJTkcoKTtcclxuICAgICAgX0lNUE9SVCgpO1xyXG4gICAgICBfQ09OVEFDVCgpO1xyXG4gICAgICBfUEFHSU5BVE9SKCk7XHJcbiAgICAgIHRoaXMuaW5pdE1haW5OYXYoKTtcclxuICAgIH1cclxuICB9LFxyXG4gIGluaXRNYWluTmF2KCkge1xyXG4gICAgY29uc3QgdGFiID0gd2luZG93LmxvY2F0aW9uLmhhc2guc3BsaXQoJz0nKVsxXTtcclxuXHJcbiAgICBpZiAodGhpcy5hbGxvd2VkSGFzaGVzLmluY2x1ZGVzKHRhYikpIHtcclxuICAgICAgd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWlubmF2LScgKyB0YWIpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgfVxyXG4gICAgbmV3IF9OQVYod2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWlubmF2JykpO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCAnLi9zYXNzL2luZGV4LnNjc3MnXHJcblxyXG5pbXBvcnQgX0VSUk9SVFJBQ0tFUiBmcm9tICcuLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCB7IF9MMTBOIH0gZnJvbSAnLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX05BViBmcm9tICcuL21vZHVsZXMvbmF2J1xyXG5pbXBvcnQgX1RPR0dMRVIgZnJvbSAnLi9tb2R1bGVzL3RvZ2dsZXInXHJcbmltcG9ydCAnLi9wb3J0J1xyXG5pbXBvcnQgJy4vX3N0b3JlJ1xyXG5pbXBvcnQgJy4vYm9vdHN0cmFwJ1xyXG5cclxuX0wxME4oKTtcclxuXHJcbi8qIGF1dG8taW5zZXJ0IGN1cnJlbnQgdmVyc2lvbiBudW1iZXIgKi9cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZlcnNpb24tbnVtYmVyJykuaW5uZXJUZXh0ID0gYnJvd3Nlci5ydW50aW1lLmdldE1hbmlmZXN0KCkudmVyc2lvbjtcclxuLyogZW5kOiBhdXRvLWluc2VydCBjdXJyZW50IHZlcnNpb24gbnVtYmVyICovXHJcblxyXG4vKiBjb25maWd1cmUgc3VibmF2cyAqL1xyXG5jb25zdCBzdWJuYXZzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3VibmF2Jyk7XHJcbmxldCBuID0gc3VibmF2cy5sZW5ndGg7XHJcblxyXG53aGlsZShuLS0pIG5ldyBfTkFWKHN1Ym5hdnNbbl0pO1xyXG4vKiBlbmQ6IGNvbmZpZ3VyZSBuYXZzICovXHJcblxyXG4vKiBjb25maWd1cmUgdG9nZ2xlIGVsZW1lbnRzICovXHJcbmxldCB0b2dnbGVCdXR0b25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndG9nZ2xlLWJ1dHRvbicpLFxyXG4gICAgdCA9IHRvZ2dsZUJ1dHRvbnMubGVuZ3RoO1xyXG5cclxud2hpbGUodC0tKSBuZXcgX1RPR0dMRVIodG9nZ2xlQnV0dG9uc1t0XSk7XHJcbi8qIGVuZDogY29uZmlndXJlIHRvZ2dsZSBlbGVtZW50cyAqL1xyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIG5ldyBfTU9EVUxFKHtcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAndXBkYXRlZDpsb2dzJzogJ3NldExvZ0xpbmsnXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBhdXRvaW5pdCgpIHtcclxuICAgICAgdGhpcy5zZXRBZGRvbkxpbmtzKClcclxuICAgICAgICAgIC5zZXRMb2dMaW5rKCk7XHJcbiAgICB9LFxyXG4gICAgc2V0QWRkb25MaW5rcygpIHtcclxuICAgICAgbGV0IGFkZG9uVVJMID0gYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ3VybF9tb3pfYWRkb24nKSxcclxuICAgICAgICAgIGFkZG9uTGlua3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtb3otYWRkb24nKSxcclxuICAgICAgICAgIGEgPSBhZGRvbkxpbmtzLmxlbmd0aCxcclxuICAgICAgICAgIGFMO1xyXG5cclxuICAgICAgd2hpbGUgKGEtLSkge1xyXG4gICAgICAgIGFMID0gYWRkb25MaW5rc1thXTtcclxuICAgICAgICBhTC5ocmVmID0gYWRkb25VUkw7XHJcbiAgICAgICAgaWYgKGFMLmlkID09PSAnbW96LWFkZG9uLS1jb250YWN0JykgYUwuaW5uZXJUZXh0ID0gYWRkb25VUkw7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfSxcclxuICAgIHNldExvZ0xpbmsoKSB7XHJcbiAgICAgIGNvbnN0IGxvZ0xpbmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9nLW1haWwnKTtcclxuXHJcbiAgICAgIF9TVE9SRS5nZXQoJ2xvZ3MnKS50aGVuKGxvZ3MgPT4ge1xyXG4gICAgICAgIGxldCBsID0gbG9ncyA/IGxvZ3MubGVuZ3RoIDogMCxcclxuICAgICAgICAgICAgaHJlZiA9XHJcbiAgICAgICAgICAgICAgJ21haWx0bzp1bmRmbHliaXJAZ214LmRlP3N1YmplY3Q9VGV4dG1hcmtlcicgK1xyXG4gICAgICAgICAgICAgIGVuY29kZVVSSUNvbXBvbmVudCgnIDogRXJyb3IgTG9ncycpICtcclxuICAgICAgICAgICAgICAnJmJvZHk9JytcclxuICAgICAgICAgICAgICBlbmNvZGVVUklDb21wb25lbnQoJy0gJyArIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCd5b3VyX21zZycpICsgJyAtXFxuXFxuXFxuTE9HUzpcXG5cXG4nKSxcclxuICAgICAgICAgICAgbG9nO1xyXG5cclxuICAgICAgICB3aGlsZShsLS0pIHtcclxuICAgICAgICAgIGxvZyA9IGxvZ3NbbF07XHJcbiAgICAgICAgICBocmVmICs9IGxvZ1sxXSArIChsb2dbMl0gPyAnICgnICsgbG9nWzJdICsgJyknIDogJycpICsgJyAtICcgKyBlbmNvZGVVUklDb21wb25lbnQoKG5ldyBEYXRlKGxvZ1swXSkudG9VVENTdHJpbmcoKSkgKyAnXFxuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxvZ0xpbmsuaHJlZiA9IGhyZWY7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcbmltcG9ydCBfVE9HR0xFUiBmcm9tICcuL3RvZ2dsZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gbmV3IF9ET01NT0RVTEUoe1xyXG4gICAgZWw6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdpbmF0b3InKSxcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAnc2F2ZWQ6ZW50cnknOiAnYWRkJyxcclxuICAgICAgICAnZGVsZXRlZDplbnRyaWVzJzogJ3VwZGF0ZUZyb21TdG9yYWdlJyxcclxuICAgICAgICAnZmlsdGVyZWQ6aGlzdG9yeSc6ICdyZXNldCcsXHJcbiAgICAgICAgJ2ltcG9ydGVkOmhpc3RvcnknOiAndXBkYXRlRnJvbVN0b3JhZ2UnLFxyXG4gICAgICAgICdjaGFuZ2VkOnBlci1wYWdlLWNvdW50JzogJ2NoYW5nZUNvdW50UGVyUGFnZSdcclxuICAgICAgfSxcclxuICAgICAgRE9NOiB7XHJcbiAgICAgICAgY2xpY2s6IHtcclxuICAgICAgICAgICcucGFnZSc6ICdnb3RvJyxcclxuICAgICAgICAgICcucHJldic6ICdwcmV2JyxcclxuICAgICAgICAgICcubmV4dCc6ICduZXh0J1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG51bWJlclBhZ2VzOiAxLFxyXG4gICAgbnVtYmVyRW50cmllczogMCxcclxuICAgIGN1cnJlbnRQYWdlOiAxLFxyXG4gICAgcGVyUGFnZTogMTAsXHJcblxyXG4gICAgYXV0b2luaXQoKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlRnJvbVN0b3JhZ2UoKTtcclxuICAgIH0sXHJcbiAgICBnb3RvKGUsIGVsKSB7XHJcbiAgICAgIGNvbnN0IG5ld1BhZ2UgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcGFnZScpICogMTtcclxuICAgICAgaWYgKHRoaXMuY3VycmVudFBhZ2UgIT09IG5ld1BhZ2UpIHtcclxuICAgICAgICB0aGlzLmVtaXQoJ3BhZ2luYXRlOmhpc3RvcnknLCBuZXdQYWdlKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRQYWdlID0gbmV3UGFnZTtcclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgcHJldigpIHtcclxuICAgICAgaWYgKHRoaXMuY3VycmVudFBhZ2UgPT09IDEpIHJldHVybjtcclxuICAgICAgdGhpcy5lbWl0KCdwYWdpbmF0ZTpoaXN0b3J5JywgLS10aGlzLmN1cnJlbnRQYWdlKTtcclxuICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIH0sXHJcbiAgICBuZXh0KCkge1xyXG4gICAgICBpZiAodGhpcy5jdXJyZW50UGFnZSA9PT0gdGhpcy5udW1iZXJQYWdlcykgcmV0dXJuO1xyXG4gICAgICB0aGlzLmVtaXQoJ3BhZ2luYXRlOmhpc3RvcnknLCArK3RoaXMuY3VycmVudFBhZ2UpO1xyXG4gICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgfSxcclxuICAgIGFkZCgpIHtcclxuICAgICAgdGhpcy51cGRhdGUoKyt0aGlzLm51bWJlckVudHJpZXMpO1xyXG4gICAgfSxcclxuICAgIHJlbW92ZSgpIHtcclxuICAgICAgdGhpcy51cGRhdGUoLS10aGlzLm51bWJlckVudHJpZXMpO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZUZyb21TdG9yYWdlKCkge1xyXG4gICAgICBfU1RPUkUuZ2V0KCdzZXR0aW5ncycpLnRoZW4oc2V0dGluZ3MgPT4gdGhpcy5wZXJQYWdlID0gc2V0dGluZ3MuaGlzdG9yeS5wcCB8fCAxMClcclxuICAgICAgICAudGhlbigoKSA9PiBfU1RPUkUuZ2V0KCdoaXN0b3J5JykudGhlbihoaXN0b3J5ID0+IHRoaXMudXBkYXRlKE9iamVjdC5rZXlzKGhpc3RvcnkuZW50cmllcykubGVuZ3RoKSkpO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZShsLCBzaWxlbnQpIHtcclxuICAgICAgdGhpcy5udW1iZXJFbnRyaWVzID0gbDtcclxuICAgICAgdGhpcy5udW1iZXJQYWdlcyA9IGwgPyBNYXRoLmNlaWwobCAvIHRoaXMucGVyUGFnZSkgOiAxO1xyXG4gICAgICBpZiAodGhpcy5jdXJyZW50UGFnZSA+IHRoaXMubnVtYmVyUGFnZXMpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRQYWdlID0gdGhpcy5udW1iZXJQYWdlcztcclxuICAgICAgICBpZiAoIXNpbGVudCkgdGhpcy5lbWl0KCdwYWdpbmF0ZTpoaXN0b3J5JywgdGhpcy5jdXJyZW50UGFnZSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIH0sXHJcbiAgICByZXNldChsKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSAxO1xyXG4gICAgICB0aGlzLnVwZGF0ZShsKTtcclxuICAgIH0sXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2luYXRvci1saXN0Jyk7XHJcbiAgICAgIGNvbnN0IGwgPSB0aGlzLm51bWJlckVudHJpZXM7XHJcbiAgICAgIEFycmF5LmZyb20odWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncGFnZScpKS5mb3JFYWNoKGxpID0+IGxpLnJlbW92ZSgpKTtcclxuXHJcbiAgICAgIGlmIChsIDwgdGhpcy5wZXJQYWdlICsgMSkge1xyXG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgcCA9IHRoaXMuY3VycmVudFBhZ2U7XHJcblxyXG4gICAgICBjb25zdCBwYWdlcyA9IHRoaXMubnVtYmVyUGFnZXM7XHJcbiAgICAgIGNvbnN0IHIgPSA3IC0gKHBhZ2VzIC0gMSAtIHApO1xyXG4gICAgICBjb25zdCBmcmFnID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG4gICAgICBjb25zdCBuZXh0ID0gdWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmV4dCcpWzBdO1xyXG4gICAgICBsZXQgaSA9IE1hdGgubWF4KDIsIHAgLSA3KTtcclxuICAgICAgaWYgKHIgPiAwKSBpID0gTWF0aC5tYXgoMiwgTWF0aC5taW4oaSwgaSAtIHIpKTtcclxuICAgICAgY29uc3QgaiA9IE1hdGgubWluKHBhZ2VzLCBpICsgMTQpICsgMTtcclxuXHJcbiAgICAgIHRoaXMuYXBwZW5kQnV0dG9uKGZyYWcsIDEpO1xyXG4gICAgICBmb3IgKDsgaSA8IGo7IGkrKykgdGhpcy5hcHBlbmRCdXR0b24oZnJhZywgaSk7XHJcbiAgICAgIGlmIChwYWdlcyA+IGogLSAxKSB0aGlzLmFwcGVuZEJ1dHRvbihmcmFnLCBwYWdlcyk7XHJcblxyXG4gICAgICB1bC5pbnNlcnRCZWZvcmUoZnJhZywgbmV4dCk7XHJcbiAgICB9LFxyXG4gICAgYXBwZW5kQnV0dG9uKGZyYWcsIGIpIHtcclxuICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgYnRuLnNldEF0dHJpYnV0ZSgnZGF0YS1wYWdlJywgYik7XHJcbiAgICAgIGJ0bi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShiKSk7XHJcbiAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdwYWdlJyk7XHJcbiAgICAgIGlmIChiID09PSB0aGlzLmN1cnJlbnRQYWdlKSBidG4uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgIGZyYWcuYXBwZW5kQ2hpbGQoYnRuKTtcclxuICAgIH0sXHJcbiAgICBjaGFuZ2VDb3VudFBlclBhZ2UocCkge1xyXG4gICAgICB0aGlzLnBlclBhZ2UgPSBwO1xyXG4gICAgICB0aGlzLnVwZGF0ZSh0aGlzLm51bWJlckVudHJpZXMsIHRydWUpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuICBieToge1xyXG4gICAgZGF0ZToge1xyXG4gICAgICBjcmVhdGVkKG9iamVjdCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zb3J0KG9iamVjdCwgJ2ZpcnN0Jyk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGxhc3Qob2JqZWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NvcnQob2JqZWN0LCAnbGFzdCcpO1xyXG4gICAgICB9LFxyXG4gICAgICBfc29ydChvYmplY3QsIGZpZWxkKSB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iamVjdCkuc29ydCgoYSwgYikgPT4gKG5ldyBEYXRlKG9iamVjdFtiXVtmaWVsZF0pKSAtIChuZXcgRGF0ZShvYmplY3RbYV1bZmllbGRdKSkpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbmFtZToge1xyXG4gICAgICBheihvYmplY3QpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc29ydChvYmplY3QpO1xyXG4gICAgICB9LFxyXG4gICAgICB6YShvYmplY3QpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc29ydChvYmplY3QpLnJldmVyc2UoKTtcclxuICAgICAgfSxcclxuICAgICAgX3NvcnQob2JqZWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iamVjdCkuc29ydCgoYSwgYikgPT4gYS50b0xvd2VyQ2FzZSgpLmxvY2FsZUNvbXBhcmUoYi50b0xvd2VyQ2FzZSgpKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuaW1wb3J0IF9UT0dHTEVSIGZyb20gJy4vdG9nZ2xlcidcclxuaW1wb3J0IF9TT1JUIGZyb20gJy4vaGlzdG9yeS1zb3J0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIG5ldyBfRE9NTU9EVUxFKHtcclxuICAgIGVsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGlzdG9yeScpLFxyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgICdvcGVuZWQ6dGFiJzogJ2luaXQnLFxyXG4gICAgICAgICd1cGRhdGVkOmhpc3RvcnknOiAncmVuZGVyJyxcclxuICAgICAgICAnZmFpbGVkOnN5bmMtZW50cnknOiAndW5kb1N5bmNUb2dnbGUnLFxyXG4gICAgICAgICdwYWdpbmF0ZTpoaXN0b3J5JzogJ3BhZ2luYXRlJ1xyXG4gICAgICB9LFxyXG4gICAgICBET006IHtcclxuICAgICAgICBjbGljazoge1xyXG4gICAgICAgICAgJy5hY3Rpb24tYnV0dG9uJzogJ2RlbGVnYXRlQnV0dG9uQWN0aW9uJyxcclxuICAgICAgICAgICcuc3dpdGNoJzogJ3RvZ2dsZVN3aXRjaCcsXHJcbiAgICAgICAgICAnLm5hbWUnOiAnb3BlbicsXHJcbiAgICAgICAgICAnLmVkaXQnOiAnZWRpdCcsXHJcbiAgICAgICAgICAnLnZpZXcnOiAndmlldycsXHJcbiAgICAgICAgICAnI3NlYXJjaC10b2dnbGUnOiAndG9nZ2xlU2VhcmNoJyxcclxuICAgICAgICAgICcjcmVtb3ZlLWZpbHRlcic6ICdyZW1vdmVGaWx0ZXInLFxyXG4gICAgICAgICAgJy50YWdzX19pdGVtJzogJ2ZpbHRlcidcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNoYW5nZToge1xyXG4gICAgICAgICAgJy5jaGVja21hcmstYWxsJzogJ2NoZWNrbWFya0FsbCcsXHJcbiAgICAgICAgICAnI3NvcnQtZW50cmllcyc6ICdzb3J0JyxcclxuICAgICAgICAgICcjZmlsdGVyLWVudHJpZXMnOiAnZmlsdGVyJyxcclxuICAgICAgICAgICcjZW50cmllcy1wZXItcGFnZSc6ICdjaGFuZ2VDb3VudFBlclBhZ2UnLFxyXG4gICAgICAgICAgJyNzZXQtdmlldyc6ICdzZXRWaWV3JyxcclxuICAgICAgICAgICcjYWN0aW9uJzogJ29uQ2hhbmdlQWN0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAga2V5dXA6IHtcclxuICAgICAgICAgICcuc2VhcmNoLWVudHJpZXMnOiAnc2VhcmNoJ1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBpbml0aWFsaXplZDogZmFsc2UsXHJcblxyXG4gICAgbmFtZXM6IFtdLFxyXG4gICAgZW50cmllczoge30sXHJcbiAgICBlbnRyeVRtcGw6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbnRyeS10ZW1wbGF0ZScpLFxyXG4gICAgZW50cmllc0NvbnRhaW5lcjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VudHJpZXMnKSxcclxuICAgIHBhZ2U6IDEsXHJcbiAgICBwZXJQYWdlOiAxMCxcclxuICAgIHNvcnRlZDogJ2RhdGUtbGFzdCcsXHJcbiAgICB2aWV3TW9kZTogJ2xpc3QnLFxyXG4gICAgc2VhcmNoVGVybTogJycsXHJcbiAgICBzZWFyY2hlZDogW10sXHJcbiAgICB0YWdzOiBbXSxcclxuICAgIGZpbHRlcmVkOiBmYWxzZSxcclxuICAgIGZpbHRlck9wdGlvbnNTZXQ6IGZhbHNlLFxyXG5cclxuICAgIGluaXQodGFiKSB7XHJcbiAgICAgIGlmICh0YWIgIT09ICdoaXN0b3J5JykgcmV0dXJuO1xyXG4gICAgICBpZiAoIXRoaXMuaW5pdGlhbGl6ZWQpIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG4gICAgfSxcclxuICAgIHJlc3VtZSgpIHtcclxuICAgICAgdGhpcy5maWx0ZXJPcHRpb25zU2V0ID0gZmFsc2U7XHJcbiAgICAgIHRoaXMudGFncyA9IFtdO1xyXG4gICAgfSxcclxuXHJcbiAgICBbJ2RlbGV0ZSddKG5hbWVzKSB7XHJcbiAgICAgIGxldCBtc2cgPSAnZGVsX2NvbmZpcm0nO1xyXG4gICAgICBsZXQgbCA9IG5hbWVzLmxlbmd0aDtcclxuXHJcbiAgICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgICBpZiAodGhpcy5lbnRyaWVzW25hbWVzW2xdXS5sb2NrZWQpIHtcclxuICAgICAgICAgIG1zZyArPSAnX2xvY2tlZCc7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCBjb25maXJtZWQgPSB3aW5kb3cuY29uZmlybShicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShtc2cpKTtcclxuICAgICAgaWYgKGNvbmZpcm1lZCkgdGhpcy5lbWl0KCdkZWxldGU6ZW50cmllcycsIG5hbWVzKTtcclxuICAgIH0sXHJcbiAgICBjbGVhbihuYW1lcykge1xyXG4gICAgICB0aGlzLmVtaXQoJ2NsZWFuOmVudHJpZXMnLCBuYW1lcyk7XHJcbiAgICB9LFxyXG4gICAgZG93bmxvYWQobmFtZXMsIHR5cGUsIHNwZWMpIHtcclxuICAgICAgaWYgKHR5cGVvZiB0eXBlICE9PSAnc3RyaW5nJykge1xyXG4gICAgICAgIHJldHVybiBfU1RPUkUuZ2V0KCdkb3dubG9hZF9vcHRpb24nKS50aGVuKHNldHRpbmdzID0+IHtcclxuICAgICAgICAgIHNldHRpbmdzID0gc2V0dGluZ3Muc3BsaXQoJyAnKTtcclxuICAgICAgICAgIHR5cGUgPSBzZXR0aW5nc1swXTtcclxuICAgICAgICAgIHNwZWMgPSBzZXR0aW5ncy5sZW5ndGggPT09IDIgPyBzZXR0aW5nc1sxXSA6IHVuZGVmaW5lZDtcclxuICAgICAgICAgIGlmICh0eXBlID09PSAnanNvbicpIHRoaXMuZXhwb3J0KG5hbWVzKTtcclxuICAgICAgICAgIGVsc2UgdGhpcy5kb3dubG9hZChuYW1lcywgdHlwZSwgc3BlYyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5nZXREYXRhKG5hbWVzLCB0eXBlLCBzcGVjKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgIGxldCB0ZXh0ID0gZW5jb2RlVVJJQ29tcG9uZW50KGRhdGEpLFxyXG4gICAgICAgICAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG5cclxuICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZSgnZG93bmxvYWQnLCAnVGV4dG1hcmtlciAoJyArIG5hbWVzLmpvaW4oJ18nKSArICcpLnR4dCcpO1xyXG4gICAgICAgIGxpbmsuaHJlZiA9ICdkYXRhOnRleHQvcGxhaW47Y2hhcnNldD11dGYtOCwnICsgdGV4dDtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsaW5rKTtcclxuICAgICAgICBsaW5rLmNsaWNrKCk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChsaW5rKTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgZXhwb3J0KG5hbWVzKSB7XHJcbiAgICAgIGxldCBiYWNrdXAgPSB7IGhpc3Rvcnk6IHsgZW50cmllczoge30gfSB9LFxyXG4gICAgICAgICAgZW50cmllcyA9IGJhY2t1cC5oaXN0b3J5LmVudHJpZXMsXHJcbiAgICAgICAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG5cclxuICAgICAgX1NUT1JFLmdldCgnaGlzdG9yeScpLnRoZW4oaGlzdG9yeSA9PiB7XHJcbiAgICAgICAgbGV0IG5hbWU7XHJcbiAgICAgICAgd2hpbGUgKG5hbWVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgbmFtZSA9IG5hbWVzLnBvcCgpO1xyXG4gICAgICAgICAgZW50cmllc1tuYW1lXSA9IGhpc3RvcnkuZW50cmllc1tuYW1lXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYmFja3VwID0gZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGJhY2t1cCkpO1xyXG4gICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKCdkb3dubG9hZCcsXHJcbiAgICAgICAgICAnVGV4dG1hcmtlci1iYWNrdXAtJyArXHJcbiAgICAgICAgICAobmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpLnJlcGxhY2UoL1xcRC9nLCAnXycpKSArXHJcbiAgICAgICAgICAnLmpzb24nXHJcbiAgICAgICAgKTtcclxuICAgICAgICBsaW5rLmhyZWYgPSAnZGF0YTp0ZXh0L2pzb247Y2hhcnNldD11dGYtOCwnICsgYmFja3VwO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxpbmspO1xyXG4gICAgICAgIGxpbmsuY2xpY2soKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGxpbmspO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBzeW5jKG5hbWUsIGVsKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgnc3luYzplbnRyeScsIG5hbWVbMF0sIGVsLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpO1xyXG4gICAgfSxcclxuICAgIHZpc2l0KG5hbWVzKSB7XHJcbiAgICAgIHRoaXMuZ2V0VVJMcyhuYW1lcykudGhlbih1cmxzID0+IHRoaXMuZW1pdCgnb3BlbjplbnRyaWVzJywgdXJscywgbmFtZXMpKTtcclxuICAgIH0sXHJcbiAgICBvcGVuKGUsIGVsKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgnb3BlbjplbnRyaWVzJywgZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXVybCcpLCBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScpKTtcclxuICAgIH0sXHJcbiAgICBlZGl0KGUsIGVsKSB7XHJcbiAgICAgIGNvbnN0IG5ld05hbWUgPSB3aW5kb3cucHJvbXB0KGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdubV9tZXNzYWdlX2VkaXQnKSk7XHJcbiAgICAgIGlmIChuZXdOYW1lKSB7XHJcbiAgICAgICAgY29uc3Qgb2xkTmFtZSA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJyk7XHJcbiAgICAgICAgY29uc3QgYXJlYSA9IGVsLnBhcmVudE5vZGUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3dpdGNoLS1zeW5jJylbMF0uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSA/XHJcbiAgICAgICAgICAnc3luYycgOiAnbG9jYWwnO1xyXG4gICAgICAgIHRoaXMuZW1pdCgncmVuYW1lOmVudHJ5Jywgb2xkTmFtZSwgbmV3TmFtZSwgYXJlYSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB2aWV3KGUsIGVsKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgndmlldzplbnRyeScsIGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJykpO1xyXG4gICAgfSxcclxuICAgIHRhZyhuYW1lcywgdGFnLCBmb3JjZSkge1xyXG4gICAgICBpZiAoIXRhZyAmJiAhZm9yY2UpIHJldHVybjtcclxuICAgICAgY29uc3QgbyA9IHsgc3luYzogW10sIGxvY2FsOiBbXSB9O1xyXG4gICAgICBuYW1lcy5mb3JFYWNoKG5hbWUgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLm9yaWdFbnRyaWVzW25hbWVdLnN5bmNlZCkgby5zeW5jLnB1c2gobmFtZSk7XHJcbiAgICAgICAgZWxzZSBvLmxvY2FsLnB1c2gobmFtZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLmVtaXQoJ3RhZzplbnRyaWVzJywgbywgdGFnKTtcclxuICAgIH0sXHJcbiAgICByZW1vdmVUYWdzKG5hbWVzKSB7XHJcbiAgICAgIHRoaXMudGFnKG5hbWVzLCAnJywgdHJ1ZSk7XHJcbiAgICB9LFxyXG4gICAgcHJvY2Vzc1NlbGVjdGlvbigpIHtcclxuICAgICAgbGV0IGNoZWNrZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZW50cnktY2I6Y2hlY2tlZCcpLFxyXG4gICAgICAgICAgaSA9IGNoZWNrZWQubGVuZ3RoO1xyXG5cclxuICAgICAgaWYgKCFpKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICBsZXQgYWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FjdGlvbicpLnZhbHVlLFxyXG4gICAgICAgICAgbmFtZXMgPSBbXTtcclxuXHJcbiAgICAgIHdoaWxlKGktLSkgbmFtZXMucHVzaChjaGVja2VkW2ldLmdldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJykpO1xyXG5cclxuICAgICAgaWYgKGFjdGlvbiA9PT0gJ3RhZycpIHtcclxuICAgICAgICBsZXQgdmFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhZycpLnZhbHVlO1xyXG4gICAgICAgIHRoaXMudGFnKG5hbWVzLCB2YWwpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxldCBzcGxpdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzcGVjaWZpY2F0aW9uJykudmFsdWUuc3BsaXQoJyAnKSxcclxuICAgICAgICAgICAgdHlwZSA9IHNwbGl0WzBdLFxyXG4gICAgICAgICAgICBzcGVjID0gc3BsaXRbMV07XHJcblxyXG4gICAgICAgICF0aGlzW2FjdGlvbl0gfHwgdGhpc1thY3Rpb25dKG5hbWVzLCB0eXBlLCBzcGVjKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHJlbmRlckVudHJpZXMoKSB7XHJcbiAgICAgIGxldCB0ZW1wbGF0ZSA9IHRoaXMuZW50cnlUbXBsLFxyXG4gICAgICAgICAgY29udGFpbmVyID0gdGhpcy5lbnRyaWVzQ29udGFpbmVyLFxyXG4gICAgICAgICAgZW50cmllcyA9IHRoaXMuZW50cmllcyxcclxuICAgICAgICAgIHNlYXJjaFRlcm0gPSB0aGlzLnNlYXJjaFRlcm0sXHJcbiAgICAgICAgICBzZWFyY2hUZXJtTGVuZ3RoID0gc2VhcmNoVGVybSA/IHNlYXJjaFRlcm0ubGVuZ3RoIDogMCxcclxuICAgICAgICAgIHNlYXJjaGVkID0gISFzZWFyY2hUZXJtLFxyXG4gICAgICAgICAgc2VhcmNoZWRGdWxsVGV4dCA9IHRoaXMuc2VhcmNoZWRGdWxsVGV4dCxcclxuICAgICAgICAgIG5hbWVzID0gc2VhcmNoZWQgPyB0aGlzLnNlYXJjaGVkIDogdGhpcy5uYW1lcyxcclxuICAgICAgICAgIGwgPSBzZWFyY2hlZCA/IG5hbWVzLmxlbmd0aCA6IHRoaXMucGFnZSAqIHRoaXMucGVyUGFnZSxcclxuICAgICAgICAgIGkgPSBzZWFyY2hlZCA/IDAgOiBsIC0gdGhpcy5wZXJQYWdlLFxyXG4gICAgICAgICAgY2xvbmUsIGVudHJ5LCBuYW1lLCBuYW1lRmllbGQsIGlucHV0LCBsYWJlbCwgaW5mb0J1dHRvbiwgZGV0YWlscywgc2VhcmNoUmVzdWx0cyxcclxuICAgICAgICAgIGJ1dHRvbnMsIGVkaXQsIHZpZXcsIHRhZ3MsIGltbXV0LCBpbW11dEVsLCBsb2NrZWQsIGxvY2tlZEVsLCB0YWdFbCwgYiwgajtcclxuXHJcbiAgICAgIGlmICh0aGlzLmZpbHRlcmVkKSB7XHJcbiAgICAgICAgbmFtZXMgPSBuYW1lcy5maWx0ZXIobiA9PiAhIWVudHJpZXNbbl0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsID0gTWF0aC5taW4obCwgbmFtZXMubGVuZ3RoKTtcclxuXHJcbiAgICAgIGNvbnRhaW5lci5pbm5lclRleHQgPSAnJztcclxuXHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGVja21hcmstYWxsJykuY2hlY2tlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgaWYgKCFsKSByZXR1cm4gdGhpcztcclxuXHJcbiAgICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgKChpLCBqKSA9PiB7XHJcbiAgICAgICAgICBuYW1lID0gbmFtZXMgPyBuYW1lc1tpXSA6IG51bGw7XHJcbiAgICAgICAgICBlbnRyeSA9IGVudHJpZXMgPyBlbnRyaWVzW25hbWVdIDogbnVsbDtcclxuICAgICAgICAgIGlmIChlbnRyeSkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgIHRhZ3MgPSBlbnRyeS50YWcgPyBlbnRyeS50YWcuc3BsaXQoJyAnKSA6IG51bGw7XHJcbiAgICAgICAgICAgICAgbG9ja2VkID0gZW50cnkubG9ja2VkO1xyXG4gICAgICAgICAgICAgIGltbXV0ID0gZW50cnkuaW1tdXQ7XHJcbiAgICAgICAgICAgICAgY2xvbmUgPSB0ZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNsb25lKTtcclxuICAgICAgICAgICAgICBjbG9uZS5pZCA9ICdlbnRyeS0nICsgajtcclxuICAgICAgICAgICAgICBjbG9uZS5jbGFzc0xpc3QucmVtb3ZlKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgICAgICAgICAgICBjbG9uZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScsIG5hbWUpO1xyXG4gICAgICAgICAgICAgIG5hbWVGaWVsZCA9IGNsb25lLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25hbWUnKVswXTtcclxuICAgICAgICAgICAgICBpbnB1dCA9IGNsb25lLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbnB1dCcpWzBdO1xyXG4gICAgICAgICAgICAgIGxhYmVsID0gY2xvbmUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2xhYmVsJylbMF07XHJcbiAgICAgICAgICAgICAgZGV0YWlscyA9IGNsb25lLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2RldGFpbHMnKVswXTtcclxuICAgICAgICAgICAgICBzZWFyY2hSZXN1bHRzID0gY2xvbmUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2VhcmNoLXJlc3VsdHMnKVswXTtcclxuICAgICAgICAgICAgICBidXR0b25zID0gY2xvbmUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncXVpY2stYWN0aW9uJyk7XHJcbiAgICAgICAgICAgICAgZWRpdCA9IGNsb25lLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2VkaXQnKVswXTtcclxuICAgICAgICAgICAgICB2aWV3ID0gY2xvbmUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndmlldycpWzBdO1xyXG4gICAgICAgICAgICAgIHRhZ0VsID0gY2xvbmUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGFncycpWzBdO1xyXG4gICAgICAgICAgICAgIGxvY2tlZEVsID0gY2xvbmUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbG9ja2VkJylbMF07XHJcbiAgICAgICAgICAgICAgaW1tdXRFbCA9IGNsb25lLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ltbXV0JylbMF07XHJcbiAgICAgICAgICAgICAgYiA9IGJ1dHRvbnMubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgICB3aGlsZShiLS0pIHtcclxuICAgICAgICAgICAgICAgICAgYnV0dG9uc1tiXS5zZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScsIG5hbWUpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBuYW1lRmllbGQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobmFtZSkpO1xyXG4gICAgICAgICAgICAgIG5hbWVGaWVsZC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXJsJywgZW50cnkudXJsKTtcclxuICAgICAgICAgICAgICBuYW1lRmllbGQuc2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnLCBuYW1lKTtcclxuICAgICAgICAgICAgICBpbnB1dC5jbGFzc05hbWUgPSAnZW50cnktY2InO1xyXG4gICAgICAgICAgICAgIGlucHV0LmlkID0gJ2VudHJ5LWNiLScgKyBqO1xyXG4gICAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJywgbmFtZSk7XHJcbiAgICAgICAgICAgICAgdmlldy5zZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScsIG5hbWUpO1xyXG4gICAgICAgICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2VudHJ5LWNiLScgKyBqKTtcclxuXHJcbiAgICAgICAgICAgICAgaWYgKGxvY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgbG9ja2VkRWwuY2xhc3NMaXN0LnJlbW92ZSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGVkaXQuY2xhc3NMaXN0LnJlbW92ZSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICAgICAgICAgICAgICBlZGl0LnNldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJywgbmFtZSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGlmIChpbW11dCkgaW1tdXRFbC5jbGFzc0xpc3QucmVtb3ZlKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuXHJcbiAgICAgICAgICAgICAgaWYgKHRhZ3MpIHtcclxuICAgICAgICAgICAgICAgIHRhZ3MuZm9yRWFjaCh0YWcgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgICAgICAgICAgIHRhZ0VsLmFwcGVuZENoaWxkKGVsKTtcclxuICAgICAgICAgICAgICAgICAgZWwuY2xhc3NOYW1lID0gJ3RhZ3NfX2l0ZW0nO1xyXG4gICAgICAgICAgICAgICAgICBlbC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0YWcpKTtcclxuICAgICAgICAgICAgICAgICAgZWwuc2V0QXR0cmlidXRlKCd0aXRsZScsIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCd0aXRsZV9maWx0ZXInKSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGFnRWwuaW5uZXJUZXh0ID0gYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ2RldGFpbF9ub3RhZycpO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgY2xvbmUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY3JlYXRlZCcpWzBdLmlubmVyVGV4dCA9IHRoaXMub3B0aW1pemVEYXRlU3RyaW5nKG5ldyBEYXRlKGVudHJ5LmZpcnN0KS50b0xvY2FsZVN0cmluZygpKTtcclxuICAgICAgICAgICAgICBjbG9uZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdsYXN0JylbMF0uaW5uZXJUZXh0ID0gdGhpcy5vcHRpbWl6ZURhdGVTdHJpbmcobmV3IERhdGUoZW50cnkubGFzdCkudG9Mb2NhbGVTdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgY2xvbmUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY291bnQnKVswXS5pbm5lclRleHQgPSBlbnRyeS5tYXJrcy5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgLy9jbG9uZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdsb3N0JylbMF0uaW5uZXJUZXh0ID0gZW50cnkubG9zdCA/IGVudHJ5Lmxvc3QubGVuZ3RoIDogMDtcclxuXHJcbiAgICAgICAgICAgICAgaWYgKGVudHJ5LnN5bmNlZCA9PT0gdW5kZWZpbmVkIHx8IGVudHJ5LnN5bmNlZCkge1xyXG4gICAgICAgICAgICAgICAgY2xvbmUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3dpdGNoLS1zeW5jJylbMF0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICBpZiAoc2VhcmNoZWRGdWxsVGV4dCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZnVsbFRleHRTZWFyY2hSZXN1bHRzID0gdGhpcy5mdWxsVGV4dFNlYXJjaFJlc3VsdHNbbmFtZV07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGZ1bGxUZXh0U2VhcmNoUmVzdWx0cykge1xyXG4gICAgICAgICAgICAgICAgICBsZXQgciA9IDAsIHJlcywgbWFyaywgcG9zLCBtYXJrVGV4dCwgbWFya1RleHRFbCwgaGlnaGxpZ2h0LCB0MSwgdDIsIHQzO1xyXG5cclxuICAgICAgICAgICAgICAgICAgZm9yICg7IHIgPCBmdWxsVGV4dFNlYXJjaFJlc3VsdHMubGVuZ3RoOyByKyspIHtcclxuICAgICAgICAgICAgICAgICAgICByZXMgPSBmdWxsVGV4dFNlYXJjaFJlc3VsdHNbcl07XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyayA9IGVudHJ5Lm1hcmtzW3Jlcy5tYXJrXTtcclxuICAgICAgICAgICAgICAgICAgICBwb3MgPSByZXMucG9zO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmtUZXh0ID0gbWFyay50ZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmtUZXh0RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdDEgPSBtYXJrVGV4dC5zdWJzdHJpbmcoTWF0aC5tYXgocG9zLTE2LCAwKSwgcG9zKTtcclxuICAgICAgICAgICAgICAgICAgICB0MiA9IG1hcmtUZXh0LnN1YnN0cihwb3MsIHNlYXJjaFRlcm1MZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHQzID0gbWFya1RleHQuc3Vic3RyKHBvcytzZWFyY2hUZXJtTGVuZ3RoLCAxNik7XHJcbiAgICAgICAgICAgICAgICAgICAgdDEgPSB0MSA/ICcuLi4gJyArIHQxIDogdDE7XHJcbiAgICAgICAgICAgICAgICAgICAgdDMgPSB0MyA/IHQzICsgJyAuLi4nIDogdDM7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGhpZ2hsaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICAgICAgICAgICAgICBoaWdobGlnaHQuY2xhc3NOYW1lID0gJ2hpZ2hsaWdodCc7XHJcbiAgICAgICAgICAgICAgICAgICAgaGlnaGxpZ2h0LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHQyKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFya1RleHRFbC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0MSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmtUZXh0RWwuYXBwZW5kQ2hpbGQoaGlnaGxpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJrVGV4dEVsLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHQzKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaFJlc3VsdHMuYXBwZW5kQ2hpbGQobWFya1RleHRFbCk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIGlmICghZW50cnkudXJsKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdygnRW50cnkgaXMgbWlzc2luZyBVUkwgZmllbGQhJyk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgICAgICAgICBjb25zdCBicm9rZW5FbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbnRyeS0nICsgaik7XHJcbiAgICAgICAgICAgICAgaWYgKGJyb2tlbkVsKSB7XHJcbiAgICAgICAgICAgICAgICBicm9rZW5FbC5jbGFzc0xpc3QuYWRkKCdlbnRyeS0tYnJva2VuJyk7XHJcbiAgICAgICAgICAgICAgICBicm9rZW5FbC50aXRsZSA9IGUudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJyb2tlbk5hbWVFbCA9IGJyb2tlbkVsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25hbWUnKVswXTtcclxuICAgICAgICAgICAgICAgIGlmIChicm9rZW5OYW1lRWwpIHtcclxuICAgICAgICAgICAgICAgICAgYnJva2VuTmFtZUVsLmNsYXNzTGlzdC5yZW1vdmUoJ25hbWUnKTtcclxuICAgICAgICAgICAgICAgICAgYnJva2VuTmFtZUVsLmNsYXNzTGlzdC5hZGQoJ25hbWUtLWRpc2FibGVkJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVyckVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICBlcnJFbC5jbGFzc05hbWUgPSAnZW50cnktLWVycm9yIHUtY29sb3ItLXJlZCc7XHJcbiAgICAgICAgICAgICAgICBlcnJFbC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnYnJva2VuX2VudHJ5JywgbmFtZSkpKTtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlcnJFbCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSkoaSwgbC1pLTEpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfSxcclxuICAgIHRvZ2dsZUhlYWRlckZpZWxkcyhsKSB7XHJcbiAgICAgIGNvbnN0IG5vRW50cmllc0hpbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm8tZW50cmllcycpO1xyXG4gICAgICBjb25zdCBzZWFyY2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoJyk7XHJcbiAgICAgIGNvbnN0IGFjdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGlzdG9yeS1hY3Rpb25zJyk7XHJcbiAgICAgIGNvbnN0IHNvcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc29ydCcpO1xyXG4gICAgICBjb25zdCBmaWx0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsdGVyJyk7XHJcbiAgICAgIGNvbnN0IGNvdW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvdW50Jyk7XHJcbiAgICAgIGNvbnN0IHZpZXcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlldycpO1xyXG4gICAgICBjb25zdCBwcFNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbnRyaWVzLXBlci1wYWdlJyk7XHJcbiAgICAgIGNvbnN0IGNoZWNrYWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoZWNrbWFyay1hbGwtY29udGFpbmVyJyk7XHJcbiAgICAgIGNvbnN0IG1ldGhfMCA9ICFsID8gJ3JlbW92ZScgOiAnYWRkJztcclxuICAgICAgY29uc3QgbWV0aF8xID0gbCA+IDAgPyAncmVtb3ZlJyA6ICdhZGQnO1xyXG4gICAgICBjb25zdCBtZXRoXzIgPSBsID4gMiA/ICdyZW1vdmUnIDogJ2FkZCc7XHJcbiAgICAgIGNvbnN0IG1ldGhfMyA9IGwgPiAxMCA/ICdyZW1vdmUnIDogJ2FkZCc7XHJcblxyXG4gICAgICBub0VudHJpZXNIaW50LmNsYXNzTGlzdFttZXRoXzBdKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgICAgYWN0aW9ucy5jbGFzc0xpc3RbbWV0aF8xXSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICAgIHNlYXJjaC5jbGFzc0xpc3RbbWV0aF8yXSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICAgIHNvcnQuY2xhc3NMaXN0W21ldGhfMl0oJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgICBmaWx0ZXIuY2xhc3NMaXN0W21ldGhfMV0oJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgICBjb3VudC5jbGFzc0xpc3RbbWV0aF8zXSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICAgIHZpZXcuY2xhc3NMaXN0W21ldGhfMV0oJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgICBjaGVja2FsbC5jbGFzc0xpc3RbbWV0aF8yXSgndS1kaXNwbGF5LS1ub25lJyk7XHJcblxyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW50cmllcy1jb3VudCcpLmlubmVyVGV4dCA9IGw7XHJcblxyXG4gICAgICByZXR1cm4gX1NUT1JFLmdldCgnc2V0dGluZ3MnKS50aGVuKHNldHRpbmdzID0+IHtcclxuICAgICAgICBjb25zdCBwcCA9IHRoaXMucGVyUGFnZSA9IHNldHRpbmdzLmhpc3RvcnkucHAgfHwgMTA7XHJcbiAgICAgICAgcHBTZWxlY3QudmFsdWUgPSBwcDtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgc2V0RmlsdGVyT3B0aW9ucygpIHtcclxuICAgICAgaWYgKHRoaXMuZmlsdGVyT3B0aW9uc1NldCkgcmV0dXJuIHRoaXM7XHJcblxyXG4gICAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsdGVyLWVudHJpZXMnKTtcclxuICAgICAgY29uc3QgcGxhY2Vob2xkZXJPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgY29uc3QgYWxsVGFncyA9IFtdO1xyXG4gICAgICBjb25zdCBlbnRyaWVzID0gdGhpcy5vcmlnRW50cmllcztcclxuICAgICAgbGV0IHRhZ3M7XHJcblxyXG4gICAgICBzZWxlY3QuaW5uZXJUZXh0ID0gJyc7XHJcbiAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChwbGFjZWhvbGRlck9wdGlvbik7XHJcbiAgICAgIHBsYWNlaG9sZGVyT3B0aW9uLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCAnJyk7XHJcbiAgICAgIHBsYWNlaG9sZGVyT3B0aW9uLnNldEF0dHJpYnV0ZSgnaGlkZGVuJywgJycpO1xyXG4gICAgICBwbGFjZWhvbGRlck9wdGlvbi5pbm5lclRleHQgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgndDUxMjQnKTtcclxuXHJcbiAgICAgIGZvciAobGV0IG5hbWUgaW4gZW50cmllcykge1xyXG4gICAgICAgIHRhZ3MgPSBlbnRyaWVzW25hbWVdLnRhZztcclxuICAgICAgICB0YWdzID0gdGFncyA/IHRhZ3Muc3BsaXQoJyAnKSA6IFtdO1xyXG4gICAgICAgIHRhZ3MuZm9yRWFjaCh0YWcgPT4ge1xyXG4gICAgICAgICAgaWYgKCFhbGxUYWdzLmluY2x1ZGVzKHRhZykpIGFsbFRhZ3MucHVzaCh0YWcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoIWFsbFRhZ3MubGVuZ3RoICYmICFkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsdGVyLW9wdC1ub3RhZycpKSB7XHJcbiAgICAgICAgdGhpcy5hZGRGaWx0ZXJPcHQoJycsIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdkZXRhaWxfbm90YWcnKSwgeyBkaXNhYmxlZDogdHJ1ZSwgaWQ6ICdmaWx0ZXItb3B0LW5vdGFnJyB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhbGxUYWdzLmZvckVhY2godGFnID0+IHRoaXMuYWRkRmlsdGVyT3B0KHRhZywgdGFnKSk7XHJcbiAgICAgICAgaWYgKCFkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsdGVyLW9wdC10YWdsZXNzJykpIHtcclxuICAgICAgICAgIHRoaXMuYWRkRmlsdGVyT3B0KCcnLCBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgndDUxMjUnKSwgeyBpZDogJ2ZpbHRlci1vcHQtdGFnbGVzcycgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZmlsdGVyT3B0aW9uc1NldCA9IHRydWU7XHJcbiAgICB9LFxyXG4gICAgYWRkRmlsdGVyT3B0KHRhZywgdGV4dCwgYXR0cnMpIHtcclxuICAgICAgaWYgKHRoaXMudGFncy5pbmNsdWRlcyh0YWcpKSByZXR1cm4gdGhpcztcclxuXHJcbiAgICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWx0ZXItZW50cmllcycpO1xyXG4gICAgICBjb25zdCBvcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuXHJcbiAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHQpO1xyXG4gICAgICBvcHQudmFsdWUgPSB0YWc7XHJcbiAgICAgIG9wdC5pbm5lclRleHQgPSB0ZXh0O1xyXG4gICAgICBpZiAoYXR0cnMpIHtcclxuICAgICAgICBmb3IgKGxldCBhIGluIGF0dHJzKSBvcHQuc2V0QXR0cmlidXRlKGEsIGF0dHJzW2FdKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoIXRoaXMudGFncy5sZW5ndGggJiYgdGFnKSB7XHJcbiAgICAgICAgY29uc3Qgbm90YWdGaWx0ZXJPcHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsdGVyLW9wdC1ub3RhZycpO1xyXG4gICAgICAgIGlmIChub3RhZ0ZpbHRlck9wdCkgc2VsZWN0LnJlbW92ZUNoaWxkKG5vdGFnRmlsdGVyT3B0KTtcclxuICAgICAgICBpZiAoIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWx0ZXItb3B0LXRhZ2xlc3MnKSkge1xyXG4gICAgICAgICAgdGhpcy5hZGRGaWx0ZXJPcHQoJycsIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCd0NTEyNScpLCB7IGlkOiAnZmlsdGVyLW9wdC10YWdsZXNzJyB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRhZykgdGhpcy50YWdzLnB1c2godGFnKTtcclxuICAgIH0sXHJcbiAgICBnZXRUZXh0KG5hbWVzLCBzcGVjKSB7XHJcbiAgICAgIGxldCBhbGxfbWFya3NfcGx1c19tZXRhID0gc3BlYyA9PT0gJyttZXRhJyxcclxuICAgICAgICAgIGFsbF9tYXJrc19wbHVzX2xvc3QgPSBzcGVjID09PSAnK2xvc3QnLFxyXG4gICAgICAgICAgYWxsX21hcmtzX3BsdXNfbWV0YV9hbmRfbm90ZXMgPSBzcGVjID09PSAnK25vdGVzJyxcclxuICAgICAgICAgIGFsbF9tYXJrc19sb3N0ID0gc3BlYyA9PT0gJ2xvc3QnLFxyXG4gICAgICAgICAgZGVmYXVsdE1hcmtlcnMgPSBbJ20nLCAnMicsICczJywgMiwgM10sXHJcblxyXG4gICAgICAgICAgcmVqZWN0ID0gZGVmYXVsdE1hcmtlcnMuaW5jbHVkZXMoc3BlYykgP1xyXG4gICAgICAgICAgICBmdW5jdGlvbihrZXkpIHtcclxuICAgICAgICAgICAgICByZXR1cm4ga2V5ICE9IHNwZWM7XHJcbiAgICAgICAgICAgIH0gOiBzcGVjID09PSAnYycgP1xyXG4gICAgICAgICAgICBmdW5jdGlvbihrZXkpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gZGVmYXVsdE1hcmtlcnMuaW5jbHVkZXMoa2V5KTtcclxuICAgICAgICAgICAgfSA6IG51bGwsXHJcblxyXG4gICAgICAgICAgbmV3TGluZSA9ICdcXHJcXG4nLFxyXG4gICAgICAgICAgbmV3TGluZXMgPSAnXFxyXFxuXFxyXFxuJyxcclxuICAgICAgICAgIG5vdGUgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZScpLFxyXG4gICAgICAgICAgdGV4dCA9ICcnLFxyXG4gICAgICAgICAgbCA9IG5hbWVzLmxlbmd0aCxcclxuICAgICAgICAgIGkgPSAwLFxyXG4gICAgICAgICAgbm90ZVRleHQsIGVudHJ5LCBtYXJrcywgbWFyaywgbG9zdCwgbmFtZSwgbSwgbiwgajtcclxuXHJcbiAgICAgIHJldHVybiBfU1RPUkUuZ2V0KCdoaXN0b3J5JykudGhlbihoaXN0b3J5ID0+IHtcclxuICAgICAgICBsZXQgZW50cmllcyA9IGhpc3RvcnkuZW50cmllcztcclxuXHJcbiAgICAgICAgZm9yICg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICAgIG5hbWUgPSBuYW1lc1tpXTtcclxuICAgICAgICAgIGVudHJ5ID0gZW50cmllc1tuYW1lXTtcclxuICAgICAgICAgIG1hcmtzID0gZW50cnkubWFya3M7XHJcbiAgICAgICAgICBsb3N0ID0gZW50cnkubG9zdDtcclxuICAgICAgICAgIG0gPSBtYXJrcy5sZW5ndGg7XHJcbiAgICAgICAgICBuID0gbG9zdC5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgaWYgKCFhbGxfbWFya3NfbG9zdCkge1xyXG4gICAgICAgICAgICBpZiAoYWxsX21hcmtzX3BsdXNfbWV0YSB8fCBhbGxfbWFya3NfcGx1c19tZXRhX2FuZF9ub3Rlcykge1xyXG4gICAgICAgICAgICAgICAgdGV4dCArPSBuYW1lICsgbmV3TGluZSArXHJcbiAgICAgICAgICAgICAgICAnVVJMOiAnICsgZW50cnkudXJsICsgbmV3TGluZSArXHJcbiAgICAgICAgICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgncGFnZV90aXRsZScpICsgJzogJyArIGVudHJ5LnRpdGxlICsgbmV3TGluZSArXHJcbiAgICAgICAgICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnY3JlYXRlZCcpICsgJzogJyArIHRoaXMub3B0aW1pemVEYXRlU3RyaW5nKG5ldyBEYXRlKGVudHJ5LmZpcnN0KS50b0xvY2FsZVN0cmluZygpKSArIG5ld0xpbmUgK1xyXG4gICAgICAgICAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ2xhc3RfbW9kaWZpZWQnKSArICc6ICcgKyB0aGlzLm9wdGltaXplRGF0ZVN0cmluZyhuZXcgRGF0ZShlbnRyeS5sYXN0KS50b0xvY2FsZVN0cmluZygpKSArXHJcbiAgICAgICAgICAgICAgICBuZXdMaW5lICsgbmV3TGluZXM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBtOyBqKyspIHtcclxuICAgICAgICAgICAgICBtYXJrID0gbWFya3Nbal07XHJcblxyXG4gICAgICAgICAgICAgIGlmIChyZWplY3QgJiYgcmVqZWN0KG1hcmsua2V5KSkgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICAgIGlmIChhbGxfbWFya3NfcGx1c19tZXRhX2FuZF9ub3Rlcykge1xyXG4gICAgICAgICAgICAgICAgdGV4dCArPSAnLS0tJyArIG5ld0xpbmU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHRleHQgKz0gbWFyay50ZXh0LnJlcGxhY2UoL1xcbi9nLCAnXFxyXFxuJykgKyBuZXdMaW5lcztcclxuXHJcbiAgICAgICAgICAgICAgaWYgKGFsbF9tYXJrc19wbHVzX21ldGFfYW5kX25vdGVzICYmIG1hcmsubm90ZSkge1xyXG4gICAgICAgICAgICAgICAgbm90ZVRleHQgPSBtYXJrLm5vdGUudGV4dCB8fCBtYXJrLm5vdGU7XHJcbiAgICAgICAgICAgICAgICB0ZXh0ICs9ICcgICcgKyBub3RlICsgJzonICsgbmV3TGluZSArICcgICcgKyBub3RlVGV4dC5yZXBsYWNlKC9cXG4vZywgJ1xcclxcbiAgJykgKyBuZXdMaW5lcztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChhbGxfbWFya3NfbG9zdCB8fCBhbGxfbWFya3NfcGx1c19sb3N0KSB7XHJcbiAgICAgICAgICAgIHRleHQgKz0gbmV3TGluZXMgKyBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbG9zdF9tYXJrcycpICsgJzonICsgbmV3TGluZXMgKyBuZXdMaW5lcztcclxuXHJcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBuOyBqKyspIHtcclxuICAgICAgICAgICAgICBtYXJrID0gbG9zdFtqXTtcclxuXHJcbiAgICAgICAgICAgICAgdGV4dCArPSBtYXJrLnRleHQucmVwbGFjZSgvXFxuL2csICdcXHJcXG4nKSArIG5ld0xpbmVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0ZXh0ICs9IG5ld0xpbmVzICsgbmV3TGluZXMgKyBuZXdMaW5lcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0ZXh0LnRyaW0oKTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgZ2V0RGF0YShuYW1lcywgdHlwZSwgc3BlYykge1xyXG4gICAgICBpZiAodHlwZSA9PT0gJ3RleHQnKSByZXR1cm4gdGhpcy5nZXRUZXh0KG5hbWVzLCBzcGVjKTtcclxuXHJcbiAgICAgIHJldHVybiBfU1RPUkUuZ2V0KCdoaXN0b3J5JykudGhlbihoaXN0b3J5ID0+IHtcclxuICAgICAgICBsZXQgZW50cmllcyA9IHRoaXMub3JpZ0VudHJpZXMgPSBoaXN0b3J5LmVudHJpZXMsXHJcbiAgICAgICAgICAgIGwgPSBuYW1lcy5sZW5ndGgsXHJcbiAgICAgICAgICAgIGRhdGEgPSAnJyxcclxuICAgICAgICAgICAgbmV3TGluZXMgPSAnXFxyXFxuXFxyXFxuJyxcclxuICAgICAgICAgICAgaSA9IDA7XHJcblxyXG4gICAgICAgIGZvciAoOyBpIDwgbDsgaSsrKSBkYXRhICs9IGVudHJpZXNbbmFtZXNbaV1dW3R5cGVdICsgbmV3TGluZXM7XHJcblxyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBnZXRVUkxzKG5hbWVzKSB7XHJcbiAgICAgIHJldHVybiBfU1RPUkUuZ2V0KCdoaXN0b3J5JykudGhlbihoaXN0b3J5ID0+IHtcclxuICAgICAgICBsZXQgZW50cmllcyA9IGhpc3RvcnkuZW50cmllcyxcclxuICAgICAgICAgICAgdXJscyA9IFtdLFxyXG4gICAgICAgICAgICBsID0gbmFtZXMubGVuZ3RoLFxyXG4gICAgICAgICAgICBpID0gMDtcclxuXHJcbiAgICAgICAgZm9yICg7IGkgPCBsOyBpKyspIHVybHMucHVzaChlbnRyaWVzW25hbWVzW2ldXS51cmwpO1xyXG5cclxuICAgICAgICByZXR1cm4gdXJscztcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgb3B0aW1pemVEYXRlU3RyaW5nKGRhdGUpIHtcclxuICAgICAgcmV0dXJuIChkYXRlXHJcbiAgICAgICAgLnJlcGxhY2UoL14oXFxkezF9KShcXER7MX0pLywgKG0sIHAsIHEpPT4gJzAnICsgcCArIHEpXHJcbiAgICAgICAgLnJlcGxhY2UoLyhcXER7MX0pKFxcZHsxfVxcRHsxfSkvZywgKG0sIHAsIHEpID0+IHAgKyAnMCcgKyBxKSk7XHJcbiAgICB9LFxyXG5cclxuICAgIHNlYXJjaChlLCBlbCkge1xyXG4gICAgICBjb25zdCB0ZXJtID0gZWwudmFsdWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgY29uc3Qgc2VhcmNoVHlwZSA9IGVsLmdldEF0dHJpYnV0ZSA/IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS10eXBlJykgOiAnJztcclxuICAgICAgY29uc3QgY291bnRTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY291bnQnKTtcclxuICAgICAgY29uc3QgY2xhc3NNZXRoID0gdGVybSA/ICdhZGQnIDogJ3JlbW92ZSc7XHJcbiAgICAgIGNvbnN0IHRvZ2dsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtdG9nZ2xlJyk7XHJcbiAgICAgIHRoaXMuc2V0dXBTZWFyY2godGVybSwgc2VhcmNoVHlwZSkucmVuZGVyRW50cmllcygpO1xyXG4gICAgICBjb3VudFNlbGVjdC5jbGFzc0xpc3RbY2xhc3NNZXRoXSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICAgIHRvZ2dsZS5jbGFzc0xpc3RbY2xhc3NNZXRoXSgnYWN0aXZlJyk7XHJcbiAgICB9LFxyXG4gICAgc2V0dXBTZWFyY2godGVybSwgc2VhcmNoVHlwZSkge1xyXG4gICAgICB0ZXJtID0gdHlwZW9mIHRlcm0gPT09ICdzdHJpbmcnID8gdGVybSA6IHRoaXMuc2VhcmNoVGVybTtcclxuICAgICAgY29uc3QgaGlzdG9yeSA9IHRoaXMuZWw7XHJcbiAgICAgIGNvbnN0IHNlYXJjaENvdW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1jb3VudCcpO1xyXG4gICAgICB0aGlzLnNlYXJjaGVkID0gW107XHJcbiAgICAgIHRoaXMuc2VhcmNoVGVybSA9IHRlcm07XHJcbiAgICAgIGlmICghdGVybSkge1xyXG4gICAgICAgIGhpc3RvcnkuY2xhc3NMaXN0LnJlbW92ZSgnc2VhcmNoZWQnKTtcclxuICAgICAgICBoaXN0b3J5LmNsYXNzTGlzdC5yZW1vdmUoJ3NlYXJjaGVkLS1mdWxsLXRleHQnKTtcclxuICAgICAgICBzZWFyY2hDb3VudC5pbm5lclRleHQgPSAnJztcclxuICAgICAgICB0aGlzLnNlYXJjaGVkRnVsbFRleHQgPSBmYWxzZTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBoaXN0b3J5LmNsYXNzTGlzdC5hZGQoJ3NlYXJjaGVkJyk7XHJcbiAgICAgICAgaWYgKHNlYXJjaFR5cGUgPT09ICdmdWxsLXRleHQnKSB7XHJcbiAgICAgICAgICBoaXN0b3J5LmNsYXNzTGlzdC5hZGQoJ3NlYXJjaGVkLS1mdWxsLXRleHQnKTtcclxuICAgICAgICAgIHRoaXMuc2VhcmNoRnVsbFRleHQodGVybSk7XHJcbiAgICAgICAgICB0aGlzLnNlYXJjaGVkRnVsbFRleHQgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBoaXN0b3J5LmNsYXNzTGlzdC5yZW1vdmUoJ3NlYXJjaGVkLS1mdWxsLXRleHQnKTtcclxuICAgICAgICAgIHRoaXMuc2VhcmNoQnlOYW1lKHRlcm0pO1xyXG4gICAgICAgICAgdGhpcy5zZWFyY2hlZEZ1bGxUZXh0ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNlYXJjaENvdW50LmlubmVyVGV4dCA9IHRoaXMuc2VhcmNoZWQubGVuZ3RoIHx8ICcnO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfSxcclxuICAgIHNlYXJjaEJ5TmFtZSh0ZXJtKSB7XHJcbiAgICAgIGNvbnN0IG5hbWVzID0gdGhpcy5uYW1lcztcclxuICAgICAgbGV0IGwgPSBuYW1lcy5sZW5ndGgsIGkgPSAwLCBuYW1lO1xyXG5cclxuICAgICAgZm9yKDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgIG5hbWUgPSBuYW1lc1tpXTtcclxuICAgICAgICBpZiAobmFtZS50b0xvd2VyQ2FzZSgpLnNlYXJjaCh0ZXJtKSAhPT0gLTEpIHtcclxuICAgICAgICAgIHRoaXMuc2VhcmNoZWQucHVzaChuYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzZWFyY2hGdWxsVGV4dCh0ZXh0KSB7XHJcbiAgICAgIGNvbnN0IGVudHJpZXMgPSB0aGlzLm9yaWdFbnRyaWVzO1xyXG4gICAgICBsZXQgbmFtZSwgbWFya3MsIGksIG1hcmtUZXh0LCBwb3MsIGZvdW5kO1xyXG5cclxuICAgICAgY29uc3QgcmVzdWx0cyA9IHRoaXMuZnVsbFRleHRTZWFyY2hSZXN1bHRzID0ge307XHJcblxyXG4gICAgICBmb3IgKG5hbWUgaW4gZW50cmllcykge1xyXG4gICAgICAgIG1hcmtzID0gZW50cmllc1tuYW1lXS5tYXJrcztcclxuICAgICAgICBmb3VuZCA9IGZhbHNlO1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBtYXJrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgbWFya1RleHQgPSBtYXJrc1tpXS50ZXh0O1xyXG4gICAgICAgICAgcG9zID0gbWFya1RleHQudG9Mb3dlckNhc2UoKS5zZWFyY2godGV4dCk7XHJcbiAgICAgICAgICBpZiAocG9zICE9PSAtMSkge1xyXG4gICAgICAgICAgICBmb3VuZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHJlc3VsdHNbbmFtZV0gPSByZXN1bHRzW25hbWVdIHx8IFtdO1xyXG4gICAgICAgICAgICByZXN1bHRzW25hbWVdLnB1c2goeyBtYXJrOiBpLCBwb3MgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChmb3VuZCkge1xyXG4gICAgICAgICAgdGhpcy5zZWFyY2hlZC5wdXNoKG5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHRvZ2dsZVNlYXJjaChlLCBlbCkge1xyXG4gICAgICBpZiAoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtZW50cmllcy0tbmFtZScpLnZhbHVlID0gJyc7XHJcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWVudHJpZXMtLWZ1bGwtdGV4dCcpLnZhbHVlID0gJyc7XHJcbiAgICAgICAgaWYgKHRoaXMuc2VhcmNoVGVybSkgdGhpcy5zZWFyY2gobnVsbCwgeyB2YWx1ZTogJycgfSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjaGFuZ2VDb3VudFBlclBhZ2UoZSwgZWwpIHtcclxuICAgICAgbGV0IHAgPSB0aGlzLnBlclBhZ2UgPSBlbC52YWx1ZSAqIDE7XHJcbiAgICAgIHRoaXMucGFnZSA9IDE7XHJcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlZDpwZXItcGFnZS1jb3VudCcsIHApO1xyXG4gICAgICB0aGlzLnJlbmRlckVudHJpZXMoKTtcclxuICAgIH0sXHJcbiAgICBzZXRWaWV3KGUsIGVsKSB7XHJcbiAgICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VudHJpZXMnKTtcclxuICAgICAgY29uc3QgdmFsID0gZWwudmFsdWU7XHJcbiAgICAgIGlmICh2YWwgPT09ICdsaXN0JykgdGFibGUuY2xhc3NMaXN0LnJlbW92ZSgnZGV0YWlsZWQtbGlzdCcpO1xyXG4gICAgICBlbHNlIHRhYmxlLmNsYXNzTGlzdC5hZGQoJ2RldGFpbGVkLWxpc3QnKTtcclxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2U6dmlldy1zZXR0aW5nJywgdmFsKTtcclxuICAgIH0sXHJcbiAgICBzZXR1cFZpZXcodmlldykge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2V0LXZpZXcnKS52YWx1ZSA9IHZpZXc7XHJcbiAgICAgIHRoaXMuc2V0VmlldyhudWxsLCB7IHZhbHVlOiB2aWV3IH0pO1xyXG4gICAgfSxcclxuICAgIG9uQ2hhbmdlQWN0aW9uKGUsIGVsKSB7XHJcbiAgICAgIGlmIChlbC52YWx1ZSA9PT0gJ3RhZycpIHNldFRpbWVvdXQoKCkgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhZycpLmZvY3VzKCksIDApO1xyXG4gICAgfSxcclxuICAgIHNvcnQoZSwgZWwpIHtcclxuICAgICAgbGV0IHNvcnRlZCA9IHRoaXMuc29ydGVkID0gZWwudmFsdWU7XHJcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlOnNvcnQtc2V0dGluZycsIHNvcnRlZCk7XHJcbiAgICAgIHRoaXMuc2V0dXBTb3J0KHNvcnRlZCkucmVuZGVyRW50cmllcygpO1xyXG4gICAgfSxcclxuICAgIHNldHVwU29ydChzb3J0ZWQpIHtcclxuICAgICAgc29ydGVkID0gc29ydGVkLnNwbGl0KCctJyk7XHJcbiAgICAgIHRoaXMubmFtZXMgPSBfU09SVC5ieVtzb3J0ZWRbMF1dW3NvcnRlZFsxXV0odGhpcy5vcmlnRW50cmllcyk7XHJcbiAgICAgIHRoaXMuc29ydFNlYXJjaFJlc3VsdHMoKTtcclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9LFxyXG4gICAgZmlsdGVyKGUsIGVsKSB7XHJcbiAgICAgIGNvbnN0IGZpbHRlciA9IGVsLm5vZGVOYW1lID09PSAnU1BBTicgPyBlbC5maXJzdENoaWxkLmRhdGEgOiBlbC52YWx1ZTtcclxuICAgICAgY29uc3QgZW50cmllcyA9IHRoaXMub3JpZ0VudHJpZXM7XHJcbiAgICAgIGNvbnN0IGZpbHRlcmVkRW50cmllcyA9IHt9O1xyXG4gICAgICBsZXQgZW50cnksIHJ4LCBjID0gMDtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbHRlcicpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICBmb3IgKGxldCBuYW1lIGluIGVudHJpZXMpIHtcclxuICAgICAgICBlbnRyeSA9IGVudHJpZXNbbmFtZV07XHJcbiAgICAgICAgcnggPSBuZXcgUmVnRXhwKCdeJytmaWx0ZXIrJyR8XicrZmlsdGVyKydcXFxcc3xcXFxccycrZmlsdGVyKydcXFxcc3xcXFxccycrZmlsdGVyKyckJywgJ2cnKTtcclxuICAgICAgICBpZiAoKGZpbHRlciAmJiBlbnRyeS50YWcgJiYgZW50cnkudGFnLnNlYXJjaChyeCkgIT09IC0xKSB8fCAoIWVudHJ5LnRhZyAmJiBmaWx0ZXIgPT0gJycpKSB7XHJcbiAgICAgICAgICBmaWx0ZXJlZEVudHJpZXNbbmFtZV0gPSBlbnRyeTtcclxuICAgICAgICAgIGMrKztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5lbnRyaWVzID0gZmlsdGVyZWRFbnRyaWVzO1xyXG4gICAgICB0aGlzLmZpbHRlcmVkID0gdHJ1ZTtcclxuICAgICAgdGhpcy5wYWdlID0gMTtcclxuICAgICAgdGhpcy5yZW5kZXJFbnRyaWVzKCk7XHJcbiAgICAgIHRoaXMuZW1pdCgnZmlsdGVyZWQ6aGlzdG9yeScsIGMpO1xyXG4gICAgfSxcclxuICAgIHJlbW92ZUZpbHRlcihlLCBlbCkge1xyXG4gICAgICBlbC5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsdGVyLWVudHJpZXMnKS5zZWxlY3RlZEluZGV4ID0gMDtcclxuICAgICAgdGhpcy5lbnRyaWVzID0gdGhpcy5vcmlnRW50cmllcztcclxuICAgICAgdGhpcy5maWx0ZXJlZCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnBhZ2UgPSAxO1xyXG4gICAgICB0aGlzLnJlbmRlckVudHJpZXMoKTtcclxuICAgICAgdGhpcy5lbWl0KCdmaWx0ZXJlZDpoaXN0b3J5JywgdGhpcy5uYW1lcy5sZW5ndGgpO1xyXG4gICAgfSxcclxuICAgIHNvcnRTZWFyY2hSZXN1bHRzKCkge1xyXG4gICAgICBpZiAoIXRoaXMuc2VhcmNoZWQubGVuZ3RoKSByZXR1cm47XHJcbiAgICAgIGNvbnN0IG5hbWVzID0gdGhpcy5uYW1lcztcclxuICAgICAgdGhpcy5zZWFyY2hlZC5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgYSA9IG5hbWVzLmluZGV4T2YoYSk7XHJcbiAgICAgICAgYiA9IG5hbWVzLmluZGV4T2YoYik7XHJcbiAgICAgICAgaWYgKGEgPT0gYikgcmV0dXJuIDA7XHJcbiAgICAgICAgcmV0dXJuIGEgPCBiID8gLTEgOiAxO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBjaGVja21hcmtBbGwoZSwgZWwpIHtcclxuICAgICAgbGV0IGRpcmVjdGx5ID0gdHlwZW9mIGVsID09PSAnYm9vbGVhbicsXHJcbiAgICAgICAgICBjaGVja2VkID0gZGlyZWN0bHkgPyBlbCA6IGVsLmNoZWNrZWQsXHJcbiAgICAgICAgICBpbnB1dHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW50cmllcycpLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbnB1dCcpLFxyXG4gICAgICAgICAgaSA9IGlucHV0cy5sZW5ndGg7XHJcblxyXG4gICAgICB3aGlsZSAoaS0tKSBpbnB1dHNbaV0uY2hlY2tlZCA9IGNoZWNrZWQ7XHJcblxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9LFxyXG4gICAgZGVsZWdhdGVCdXR0b25BY3Rpb24oZSwgZWwpIHtcclxuICAgICAgbGV0IGFjdGlvbiA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1hY3Rpb24nKSxcclxuICAgICAgICAgIG5hbWUgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScpO1xyXG5cclxuICAgICAgbmFtZSA9IG5hbWUgPyBbbmFtZV0gOiB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAhdGhpc1thY3Rpb25dIHx8IHRoaXNbYWN0aW9uXShuYW1lLCBlbCk7XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlU3dpdGNoKGUsIGVsKSB7XHJcbiAgICAgIGVsID0gZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzd2l0Y2gtLXN5bmMnKSA/IGVsIDogZWwucGFyZW50Tm9kZTtcclxuICAgICAgZWwuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgICAgIHRoaXMuZGVsZWdhdGVCdXR0b25BY3Rpb24oZSwgZWwpO1xyXG4gICAgfSxcclxuICAgIHVuZG9TeW5jVG9nZ2xlKG5hbWUpIHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN3aXRjaC0tc3luY1tkYXRhLW5hbWU9XCInICsgbmFtZSArICdcIl0nKS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICAgIH0sXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgIHRoaXMucmVzdW1lKCk7XHJcblxyXG4gICAgICBfU1RPUkUuZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgICBsZXQgZW50cmllcyA9IHRoaXMuZW50cmllcyA9IHRoaXMub3JpZ0VudHJpZXMgPSBzdG9yYWdlLmhpc3RvcnkuZW50cmllcyxcclxuICAgICAgICAgICAgc29ydGVkID0gc3RvcmFnZS5zZXR0aW5ncy5oaXN0b3J5LnNvcnRlZCB8fCB0aGlzLnNvcnRlZCxcclxuICAgICAgICAgICAgdmlldyA9IHN0b3JhZ2Uuc2V0dGluZ3MuaGlzdG9yeS52aWV3IHx8IHRoaXMudmlld01vZGUsXHJcbiAgICAgICAgICAgIGw7XHJcbiAgICAgICAgdGhpcy5zb3J0ZWQgPSBzb3J0ZWQ7XHJcbiAgICAgICAgdGhpcy5zZXR1cFNvcnQoc29ydGVkKTtcclxuICAgICAgICB0aGlzLnNldHVwVmlldyh2aWV3KTtcclxuICAgICAgICBsID0gdGhpcy5uYW1lcy5sZW5ndGg7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0dXBTZWFyY2goKS50b2dnbGVIZWFkZXJGaWVsZHMobCkudGhlbigoKSA9PiB0aGlzLnJlbmRlckVudHJpZXMoKS5zZXRGaWx0ZXJPcHRpb25zKCkpO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBwYWdpbmF0ZShwYWdlKSB7XHJcbiAgICAgIHRoaXMucGFnZSA9IHBhZ2U7XHJcbiAgICAgIHRoaXMucmVuZGVyRW50cmllcygpO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZUVudHJ5KGVudHJ5KSB7XHJcbiAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVudHJ5W2RhdGEtbmFtZT1cIicgKyBlbnRyeS5uYW1lICsgJ1wiXScpO1xyXG5cclxuICAgICAgZWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY3JlYXRlZCcpWzBdLmlubmVyVGV4dCA9IGVudHJ5LmZpcnN0O1xyXG4gICAgICBlbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdsYXN0JylbMF0uaW5uZXJUZXh0ID0gZW50cnkubGFzdDtcclxuICAgICAgZWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY291bnQnKVswXS5pbm5lclRleHQgPSBlbnRyeS5tYXJrcy5sZW5ndGg7XHJcbiAgICAgIC8vZWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbG9zdCcpWzBdLmlubmVyVGV4dCA9IGVudHJ5Lmxvc3QubGVuZ3RoO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gbmV3IF9ET01NT0RVTEUoe1xyXG4gICAgZWw6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdleHBvcnQnKSxcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAndXBkYXRlZDpzZXR0aW5ncyc6ICd1cGRhdGVFeHBvcnRMaW5rcycsXHJcbiAgICAgICAgJ3VwZGF0ZWQ6aGlzdG9yeSc6ICd1cGRhdGVFeHBvcnRMaW5rcycsXHJcbiAgICAgICAgJ3RvZ2dsZWQ6c3luYyc6ICd1cGRhdGVFeHBvcnRMaW5rcycsXHJcbiAgICAgICAgJ3N5bmNlZDplbnRyeSc6ICd1cGRhdGVFeHBvcnRMaW5rcydcclxuICAgICAgfSxcclxuICAgICAgRE9NOiB7XHJcbiAgICAgICAgY2xpY2s6IHtcclxuICAgICAgICAgICcuaW1wb3J0LWJ1dHRvbic6ICd0cmlnZ2VyRmlsZUlucHV0J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2hhbmdlOiB7XHJcbiAgICAgICAgICAnLmltcG9ydC1maWxlJzogJ2hhbmRsZUZpbGUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb3VzZWRvd246IHtcclxuICAgICAgICAgICcuZXhwb3J0LWJ1dHRvbic6ICd1cGRhdGVFeHBvcnROYW1lJ1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBhdXRvaW5pdCgpIHtcclxuICAgICAgdGhpcy51cGRhdGVFeHBvcnRMaW5rcygpO1xyXG4gICAgfSxcclxuXHJcbiAgICBpbXBvcnQ6IGZ1bmN0aW9uKHN0b3JlU3RyaW5nLCB0eXBlKSB7XHJcbiAgICAgIHZhciBwYXJzZWRTdHJpbmc7XHJcblxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHBhcnNlZFN0cmluZyA9IEpTT04ucGFyc2Uoc3RvcmVTdHJpbmcpO1xyXG4gICAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kaXNwbGF5RmFpbHVyZShicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnZXJyb3JfZmlsZV9wYXJzZScpKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHBhcnNlZFN0cmluZykge1xyXG4gICAgICAgIHRoaXMuZW1pdCgnaW1wb3J0OnN0b3JhZ2UnLCBwYXJzZWRTdHJpbmcsIHR5cGUpO1xyXG4gICAgICAgIHRoaXMuZGlzcGxheUZhaWx1cmUoJycpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHRyaWdnZXJGaWxlSW5wdXQ6IGZ1bmN0aW9uKGUsIGVsKSB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbXBvcnQtLScgKyBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScpKS5jbGljaygpO1xyXG4gICAgfSxcclxuICAgIGhhbmRsZUZpbGUoZSwgZWwpIHtcclxuICAgICAgbGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCksXHJcbiAgICAgICAgICBmaWxlID0gZWwuZmlsZXNbMF0sXHJcbiAgICAgICAgICBzaXplID0gZmlsZS5zaXplIC8gMTAwMDAwMCxcclxuICAgICAgICAgIHR5cGUgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScpLFxyXG4gICAgICAgICAgbW9kID0gdGhpcztcclxuXHJcbiAgICAgIGlmIChzaXplID4gNTApXHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5kaXNwbGF5RmFpbHVyZShicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnZXJyb3JfZmlsZV9zaXplJykpO1xyXG5cclxuICAgICAgaWYgKHR5cGUgPT09ICdzeW5jJyAmJiBzaXplID4gMC4wOTkpXHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5kaXNwbGF5RmFpbHVyZShicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnZXJyb3JfZmlsZV9zaXplX3N5bmMnKSk7XHJcblxyXG4gICAgICBpZiAoZmlsZS5uYW1lLnNwbGl0KCcuJykucG9wKCkgIT09ICdqc29uJylcclxuICAgICAgICAgIHJldHVybiB0aGlzLmRpc3BsYXlGYWlsdXJlKGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdlcnJvcl9maWxlX2Zvcm1hdCcpKTtcclxuXHJcbiAgICAgIHJlYWRlci5vbmxvYWQgPSAoZnVuY3Rpb24oZmlsZSkge1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICBtb2QuaW1wb3J0KGUudGFyZ2V0LnJlc3VsdCwgdHlwZSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgfSkoZmlsZSk7XHJcblxyXG4gICAgICByZWFkZXIucmVhZEFzVGV4dChmaWxlKTtcclxuICAgIH0sXHJcbiAgICBkaXNwbGF5RmFpbHVyZShyZWFzb24pIHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltcG9ydC1lcnJvcicpLmlubmVyVGV4dCA9IHJlYXNvbjtcclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlRXhwb3J0TGlua3MoKSB7XHJcbiAgICAgIGNvbnN0IGxvY2FsRGF0YUxpbmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXhwb3J0LWxvY2FsJyk7XHJcbiAgICAgIGNvbnN0IHN5bmNlZERhdGFMaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V4cG9ydC1zeW5jZWQnKTtcclxuXHJcbiAgICAgIF9TVE9SRS5nZXQoJ2xvY2FsX3N0b3JhZ2UnKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICAgIGxvY2FsRGF0YUxpbmsuaHJlZiA9ICdkYXRhOnRleHQvanNvbjtjaGFyc2V0PXV0Zi04LCcgKyBlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc3RvcmFnZSkpO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoKSA9PiBfU1RPUkUuZ2V0KCdzeW5jZWRfc3RvcmFnZScpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgICAgc3luY2VkRGF0YUxpbmsuaHJlZiA9ICdkYXRhOnRleHQvanNvbjtjaGFyc2V0PXV0Zi04LCcgKyBlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc3RvcmFnZSkpO1xyXG4gICAgICB9KSk7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlRXhwb3J0TmFtZShlLCBlbCkge1xyXG4gICAgICBlbC5wYXJlbnROb2RlLnNldEF0dHJpYnV0ZSgnZG93bmxvYWQnLFxyXG4gICAgICAgICdUZXh0bWFya2VyLWRhdGEtJyArXHJcbiAgICAgICAgZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXR5cGUnKSArICctJyArXHJcbiAgICAgICAgKG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKS5yZXBsYWNlKC9cXEQvZywgJ18nKSkgK1xyXG4gICAgICAgICcuanNvbidcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5pbXBvcnQgX0xPR19LRVlTIGZyb20gJy4uLy4uLy4uL2RhdGEvbG9nLWtleXMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gbmV3IF9ET01NT0RVTEUoe1xyXG4gICAgZWw6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dzJyksXHJcbiAgICBldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ3VwZGF0ZWQ6bG9ncyc6ICdsb2cnXHJcbiAgICAgIH0sXHJcbiAgICAgIERPTToge1xyXG4gICAgICAgIGNsaWNrOiB7XHJcbiAgICAgICAgICAnI2NsZWFyLWxvZ3MnOiAnY2xlYXInXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgYXV0b2luaXQoKSB7XHJcbiAgICAgIHRoaXMubG9nKCk7XHJcbiAgICB9LFxyXG4gICAgbG9nKCkge1xyXG4gICAgICBfU1RPUkUuZ2V0KCdsb2dzJykudGhlbihsb2dzID0+IHtcclxuICAgICAgICBsb2dzID0gbG9ncyB8fCBbXTtcclxuICAgICAgICBsZXQgdGFibGVCb2R5ID0gdGhpcy5lbC5nZXRFbGVtZW50c0J5VGFnTmFtZSgndGJvZHknKVswXSxcclxuICAgICAgICAgICAgbCA9IGxvZ3MubGVuZ3RoLFxyXG4gICAgICAgICAgICBmcmFnID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLFxyXG4gICAgICAgICAgICB0ciwgdGRfZGF0ZSwgdGRfbXNnLCBub2RlX2RhdGUsIG5vZGVfbXNnLCBsb2csIHRpbWUsIG1zZywgcmVhc29uO1xyXG5cclxuICAgICAgICBpZiAobCkge1xyXG4gICAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKCdub2xvZ3MnKTtcclxuICAgICAgICAgIHdoaWxlKGwtLSkge1xyXG4gICAgICAgICAgICBsb2cgPSBsb2dzW2xdO1xyXG4gICAgICAgICAgICBtc2cgPSBsb2dbMV07XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbXNnID09PSAnbnVtYmVyJykgbXNnID0gYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoX0xPR19LRVlTLmdldEtleUJ5VmFsdWUobG9nWzFdKSk7XHJcbiAgICAgICAgICAgIC8vJ251Jyx7eWVhcjonbnVtZXJpYycsbW9udGg6JzItZGlnaXQnLGRheTonMi1kaWdpdCcsaG91cjonbnVtZXJpYycsc2Vjb25kOidudW1lcmljJyxtaW51dGU6J251bWVyaWMnfVxyXG4gICAgICAgICAgICB0aW1lID0gdGhpcy5vcHRpbWl6ZURhdGVTdHJpbmcoKG5ldyBEYXRlKGxvZ1swXSkpLnRvTG9jYWxlU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICB0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XHJcbiAgICAgICAgICAgIHRkX2RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgICAgICAgICB0ZF9tc2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgICAgICAgICBub2RlX2RhdGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0aW1lKTtcclxuICAgICAgICAgICAgbm9kZV9tc2cgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShtc2cpO1xyXG5cclxuICAgICAgICAgICAgdGRfZGF0ZS5hcHBlbmRDaGlsZChub2RlX2RhdGUpO1xyXG4gICAgICAgICAgICB0ZF9tc2cuYXBwZW5kQ2hpbGQobm9kZV9tc2cpO1xyXG4gICAgICAgICAgICBpZiAobG9nWzJdKSB7XHJcbiAgICAgICAgICAgICAgcmVhc29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgLy9yZWFzb24uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobG9nWzJdKSk7XHJcbiAgICAgICAgICAgICAgcmVhc29uLmlubmVyVGV4dCA9IGxvZ1syXTtcclxuICAgICAgICAgICAgICB0ZF9tc2cuYXBwZW5kQ2hpbGQocmVhc29uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0ci5hcHBlbmRDaGlsZCh0ZF9kYXRlKTtcclxuICAgICAgICAgICAgdHIuYXBwZW5kQ2hpbGQodGRfbXNnKTtcclxuICAgICAgICAgICAgZnJhZy5hcHBlbmRDaGlsZCh0cik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0YWJsZUJvZHkuaW5uZXJUZXh0ID0gJyc7XHJcbiAgICAgICAgICB0YWJsZUJvZHkuYXBwZW5kQ2hpbGQoZnJhZyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnbm9sb2dzJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBjbGVhcigpIHtcclxuICAgICAgdGhpcy5lbWl0KCdjbGVhcjpsb2dzJyk7XHJcbiAgICB9LFxyXG4gICAgb3B0aW1pemVEYXRlU3RyaW5nKGRhdGUpIHtcclxuICAgICAgcmV0dXJuIChkYXRlXHJcbiAgICAgICAgLnJlcGxhY2UoL14oXFxkezF9KShcXER7MX0pLywgKG0sIHAsIHEpPT4gJzAnICsgcCArIHEpXHJcbiAgICAgICAgLnJlcGxhY2UoLyhcXER7MX0pKFxcZHsxfVxcRHsxfSkvZywgKG0sIHAsIHEpID0+IHAgKyAnMCcgKyBxKSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIF9NQVJLRVIge1xyXG5cclxuICBjb25zdHJ1Y3RvcihrZXksIGN1c3RvbUJnQ29sb3IpIHtcclxuICAgIHRoaXMua2V5ID0ga2V5O1xyXG5cclxuICAgIHRoaXMuc3R5bGVzID0ge1xyXG4gICAgICAnYmFja2dyb3VuZC1jb2xvcic6IGN1c3RvbUJnQ29sb3IsXHJcbiAgICAgICdjb2xvcic6IHVuZGVmaW5lZCxcclxuICAgICAgJ2JvcmRlci1ib3R0b20nOiB1bmRlZmluZWQsXHJcbiAgICAgICdmb250LXNpemUnOiB1bmRlZmluZWQsXHJcbiAgICAgICdmb250LWZhbWlseSc6IHVuZGVmaW5lZCxcclxuICAgICAgJ2ZvbnQtd2VpZ2h0JzogdW5kZWZpbmVkLFxyXG4gICAgICAnZm9udC1zdHlsZSc6IHVuZGVmaW5lZCxcclxuICAgICAgJ3RleHQtZGVjb3JhdGlvbic6IHVuZGVmaW5lZCxcclxuICAgICAgJ3RleHQtc2hhZG93JzogdW5kZWZpbmVkXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuc2hhZG93ID0ge1xyXG4gICAgICB4OiAnMXB4JyxcclxuICAgICAgeTogJzFweCcsXHJcbiAgICAgIGJsdXI6ICcxcHgnLFxyXG4gICAgICBjb2xvcjogJyMwMDAwMDAnXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuaW5pdCgpLnRoZW4oKCkgPT4gdGhpcy5pbmplY3QoKS5wcmV2aWV3KCkpO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIHJldHVybiBfU1RPUkUuZ2V0KCdtYXJrZXJzJykudGhlbihtYXJrZXJzID0+IHtcclxuICAgICAgY29uc3QgbWFya2VyID0gbWFya2Vyc1t0aGlzLmtleV07XHJcbiAgICAgIGNvbnN0IGV4aXN0aW5nU3R5bGUgPSBtYXJrZXIgPyBtYXJrZXIuc3R5bGUgOiBudWxsO1xyXG5cclxuICAgICAgdGhpcy5hdXRvbm90ZSA9IG1hcmtlciAmJiBtYXJrZXIuYXV0b25vdGUgPyB0cnVlIDogZmFsc2U7XHJcblxyXG4gICAgICBpZiAoIWV4aXN0aW5nU3R5bGUpIHRoaXMuc2V0U3R5bGUoKTtcclxuICAgICAgZWxzZSB0aGlzLnN0eWxlID0gZXhpc3RpbmdTdHlsZTtcclxuXHJcbiAgICAgIGxldCBzdHlsZXMgPSB0aGlzLnN0eWxlLnNwbGl0KCc7JyksXHJcbiAgICAgICAgICBpID0gc3R5bGVzLmxlbmd0aCxcclxuICAgICAgICAgIHN0eWxlLCBzdHlsZVNwbGl0LCB0ZXh0U2hhZG93O1xyXG5cclxuICAgICAgd2hpbGUgKGktLSkge1xyXG4gICAgICAgIHN0eWxlID0gc3R5bGVzW2ldO1xyXG4gICAgICAgIGlmIChzdHlsZSkge1xyXG4gICAgICAgICAgc3R5bGVTcGxpdCA9IHN0eWxlLnNwbGl0KCc6Jyk7XHJcbiAgICAgICAgICB0aGlzLnN0eWxlc1tzdHlsZVNwbGl0WzBdXSA9IHN0eWxlU3BsaXRbMV07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoKHRleHRTaGFkb3cgPSB0aGlzLnN0eWxlc1sndGV4dC1zaGFkb3cnXSkgJiYgdGV4dFNoYWRvdyAhPT0gJ25vbmUnKSB7XHJcbiAgICAgICAgbGV0IHNoYWRvd1NwbGl0ID0gdGV4dFNoYWRvdy5zcGxpdCgnICcpO1xyXG4gICAgICAgIHRoaXMuc2hhZG93LnggPSBzaGFkb3dTcGxpdFswXTtcclxuICAgICAgICB0aGlzLnNoYWRvdy55ID0gc2hhZG93U3BsaXRbMV07XHJcbiAgICAgICAgdGhpcy5zaGFkb3cuYmx1ciA9IHNoYWRvd1NwbGl0WzJdO1xyXG4gICAgICAgIHRoaXMuc2hhZG93LmNvbG9yID0gc2hhZG93U3BsaXRbM107XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICBpbmplY3QoKSB7XHJcbiAgICBsZXQgbWFya2VyID0gdGhpcyxcclxuICAgICAgICBzdHlsZXMgPSB0aGlzLnN0eWxlcyxcclxuICAgICAgICBiZ0lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JnLWNvbG9yJyksXHJcbiAgICAgICAgY29sb3JJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0LWNvbG9yJyksXHJcbiAgICAgICAgYm9yZGVySW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9yZGVyLWNvbG9yJyksXHJcbiAgICAgICAgYXV0b25vdGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdXRvbm90ZS1jb2xvcicpLFxyXG4gICAgICAgIGJnID0gc3R5bGVzWydiYWNrZ3JvdW5kLWNvbG9yJ10sXHJcbiAgICAgICAgY29sb3IgPSBzdHlsZXNbJ2NvbG9yJ10sXHJcbiAgICAgICAgYm9yZGVyID0gc3R5bGVzWydib3JkZXItYm90dG9tJ10sXHJcbiAgICAgICAgYXV0b25vdGVDb2xvciA9IHRoaXMuYXV0b25vdGUgfHwgJycsXHJcbiAgICAgICAgc2hhZG93LCBzaGFkb3dTZWxlY3QsIGk7XHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F1dG8tbm90ZScpLmNoZWNrZWQgPSB0aGlzLmF1dG9ub3RlO1xyXG4gICAgYXV0b25vdGVJbnB1dC52YWx1ZSA9IGF1dG9ub3RlQ29sb3IgfHwgJ3llbGxvdyc7XHJcbiAgICBhdXRvbm90ZUlucHV0LmRpc2FibGVkID0gIWF1dG9ub3RlQ29sb3I7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmctY29sb3ItY2hlY2tib3gnKS5jaGVja2VkID0gISFiZztcclxuICAgIGJnSW5wdXQudmFsdWUgPSBiZyB8fCAnI2ZmZmZmZic7XHJcbiAgICBiZ0lucHV0LmRpc2FibGVkID0gIWJnO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHQtY29sb3ItY2hlY2tib3gnKS5jaGVja2VkID0gISFjb2xvcjtcclxuICAgIGNvbG9ySW5wdXQudmFsdWUgPSBjb2xvciB8fCAnIzAwMDAwMCc7XHJcbiAgICBjb2xvcklucHV0LmRpc2FibGVkID0gIWNvbG9yO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvcmRlci1jb2xvci1jaGVja2JveCcpLmNoZWNrZWQgPSAhIWJvcmRlcjtcclxuICAgIGJvcmRlcklucHV0LnZhbHVlID0gYm9yZGVyIHx8ICcxcHggc29saWQgI2ZmMDAwMCc7XHJcbiAgICBib3JkZXJJbnB1dC5kaXNhYmxlZCA9ICFib3JkZXI7XHJcblxyXG4gICAgWydmb250LXNpemUnLCAnZm9udC1mYW1pbHknLCAnZm9udC13ZWlnaHQnLCAnZm9udC1zdHlsZScsICd0ZXh0LWRlY29yYXRpb24nXS5mb3JFYWNoKHByb3AgPT4ge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwcm9wKS52YWx1ZSA9IHN0eWxlc1twcm9wXSB8fCAnZGVmYXVsdCc7XHJcbiAgICB9KTtcclxuXHJcbiAgICBzaGFkb3dTZWxlY3QgPSAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHQtc2hhZG93Jyk7XHJcbiAgICBzaGFkb3cgPSBzdHlsZXNbJ3RleHQtc2hhZG93J107XHJcbiAgICBpID0gIXNoYWRvdyA/IDAgOiBzaGFkb3cgPT09ICdub25lJyA/IDIgOiAxO1xyXG5cclxuICAgIHNoYWRvd1NlbGVjdC5zZWxlY3RlZEluZGV4ID0gaTtcclxuICAgIHNoYWRvd1NlbGVjdC5jaGlsZHJlbltpXS5jbGljaygpO1xyXG5cclxuICAgIFsneCcsICd5JywgJ2JsdXInLCAnY29sb3InXS5mb3JFYWNoKHByb3AgPT4ge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dC1zaGFkb3ctJyArIHByb3ApLnZhbHVlID0gbWFya2VyLnNoYWRvd1twcm9wXS5yZXBsYWNlKCdweCcsICcnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBwcmV2aWV3KCkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V4YW1wbGUnKS5zdHlsZSA9IHRoaXMuc3R5bGU7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIHVwZGF0ZShlbCkge1xyXG4gICAgbGV0IGNsYXNzZXMgPSBlbC5jbGFzc0xpc3QsXHJcbiAgICAgICAgcHJvcCA9IGVsLm5hbWUsXHJcbiAgICAgICAgdmFsO1xyXG5cclxuICAgIGlmIChjbGFzc2VzLmNvbnRhaW5zKCdjc3MtY29sb3InKSkge1xyXG4gICAgICBpZiAoZWwuY2hlY2tlZCkge1xyXG4gICAgICAgIHZhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsLmdldEF0dHJpYnV0ZSgnZGF0YS10YXJnZXQnKSkudmFsdWU7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5pc1ZhbGlkKHByb3AsIHZhbCkpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5zdHlsZXNbcHJvcF0gPSBwcm9wID09PSAnYm9yZGVyLWJvdHRvbScgPyAnMXB4IHNvbGlkICcgKyB2YWwgOiB2YWw7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zdHlsZXNbcHJvcF0gPSB1bmRlZmluZWQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGNsYXNzZXMuY29udGFpbnMoJ3NoYWRvdycpKSB7XHJcbiAgICAgIHZhbCA9IGVsLnZhbHVlO1xyXG5cclxuICAgICAgaWYgKHZhbCA9PT0gJ2RlZmF1bHQnIHx8ICF0aGlzLmlzVmFsaWQocHJvcCwgdmFsKSlcclxuICAgICAgICB0aGlzLnN0eWxlc1twcm9wXSA9ICcnO1xyXG4gICAgICBlbHNlIHtcclxuICAgICAgICBsZXQgbWFya2VyID0gdGhpcztcclxuXHJcbiAgICAgICAgc3dpdGNoKHZhbCkge1xyXG4gICAgICAgICAgY2FzZSAnbm9uZSc6IG1hcmtlci5zdHlsZXNbJ3RleHQtc2hhZG93J10gPSAnbm9uZSc7IGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnZGVmYXVsdCc6IG1hcmtlci5zdHlsZXNbJ3RleHQtc2hhZG93J10gPSB1bmRlZmluZWQ7IGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnc2hhZG93JzogbWFya2VyLnNldFNoYWRvdygpOyBicmVhaztcclxuICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGNsYXNzZXMuY29udGFpbnMoJ3NoYWRvdy12YWx1ZScpKSB7XHJcbiAgICAgIHZhbCA9IGVsLnZhbHVlO1xyXG5cclxuICAgICAgaWYgKCF0aGlzLmlzVmFsaWQocHJvcCwgdmFsKSlcclxuICAgICAgICB0aGlzLnN0eWxlc1twcm9wXSA9ICcnO1xyXG4gICAgICBlbHNlIHtcclxuICAgICAgICBpZiAoY2xhc3Nlcy5jb250YWlucygnc2hhZG93LXB4LXZhbHVlJykpXHJcbiAgICAgICAgICB2YWwgKz0gJ3B4JztcclxuXHJcbiAgICAgICAgdGhpcy5zaGFkb3dbcHJvcF0gPSB2YWw7XHJcbiAgICAgICAgdGhpcy5zZXRTaGFkb3coKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAocHJvcCA9PT0gJ2JvcmRlci1ib3R0b20nKSB7XHJcbiAgICAgIHZhbCA9ICcxcHggc29saWQgJyArIGVsLnZhbHVlO1xyXG4gICAgICB0aGlzLnN0eWxlc1twcm9wXSA9IHZhbDtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB2YWwgPSBlbC52YWx1ZTtcclxuXHJcbiAgICAgIGlmICh2YWwgPT09ICdkZWZhdWx0JyB8fCAhdGhpcy5pc1ZhbGlkKHByb3AsIHZhbCkpXHJcbiAgICAgICAgdGhpcy5zdHlsZXNbcHJvcF0gPSAnJztcclxuICAgICAgZWxzZVxyXG4gICAgICAgIHRoaXMuc3R5bGVzW3Byb3BdID0gdmFsO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLnNldFN0eWxlKCkucHJldmlldygpO1xyXG4gIH1cclxuICBpc1ZhbGlkKHByb3AsIHZhbCkge1xyXG4gICAgbGV0IHZhbGlkO1xyXG5cclxuICAgIHN3aXRjaChwcm9wKSB7XHJcbiAgICAgIGNhc2UgJ2JhY2tncm91bmQtY29sb3InOiB2YWxpZCA9IC9eI1swLTlBLUZdezZ9JC9pLnRlc3QodmFsKTsgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2NvbG9yJzogdmFsaWQgPSAvXiNbMC05QS1GXXs2fSQvaS50ZXN0KHZhbCk7IGJyZWFrO1xyXG4gICAgICBjYXNlICdib3JkZXItYm90dG9tJzogdmFsaWQgPSAvXiNbMC05QS1GXXs2fSQvaS50ZXN0KHZhbCk7IGJyZWFrO1xyXG4gICAgICBjYXNlICdmb250LXNpemUnOiB2YWxpZCA9IC9eWzAtOV17MSwyfXB4JC8udGVzdCh2YWwpOyBicmVhaztcclxuICAgICAgY2FzZSAnZm9udC1mYW1pbHknOiB2YWxpZCA9IC9eW2EteixcXHMtXXs1LDQwfSQvaS50ZXN0KHZhbCk7IGJyZWFrO1xyXG4gICAgICBjYXNlICdmb250LXdlaWdodCc6IHZhbGlkID0gL15bYS16XXs0LDd9JC9pLnRlc3QodmFsKTsgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2ZvbnQtc3R5bGUnOiB2YWxpZCA9IC9eW2Etel17NCw3fSQvaS50ZXN0KHZhbCk7IGJyZWFrO1xyXG4gICAgICBjYXNlICd0ZXh0LWRlY29yYXRpb24nOiB2YWxpZCA9IC9eW2Etei1dezcsMTJ9JC9pLnRlc3QodmFsKTsgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3RleHQtc2hhZG93JzogdmFsaWQgPSAvXlthLXpdezQsN30kL2kudGVzdCh2YWwpOyBicmVhaztcclxuICAgICAgY2FzZSAneCc6IHZhbGlkID0gL15cXGQkLzsgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3knOiB2YWxpZCA9IC9eXFxkJC87IGJyZWFrO1xyXG4gICAgICBjYXNlICdibHVyJzogdmFsaWQgPSAvXlxcZCQvOyBicmVhaztcclxuICAgICAgZGVmYXVsdDogdmFsaWQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdmFsaWQ7XHJcbiAgfVxyXG4gIHNldFNoYWRvdygpIHtcclxuICAgIHRoaXMuc3R5bGVzWyd0ZXh0LXNoYWRvdyddID0gdGhpcy5zaGFkb3cueCArICcgJyArIHRoaXMuc2hhZG93LnkgKyAnICcgKyB0aGlzLnNoYWRvdy5ibHVyICsgJyAnICsgdGhpcy5zaGFkb3cuY29sb3I7XHJcbiAgfVxyXG4gIHNldFN0eWxlKCkge1xyXG4gICAgbGV0IHN0eWxlID0gJycsIHZhbDtcclxuXHJcbiAgICBmb3IgKHZhciBpIGluIHRoaXMuc3R5bGVzKSB7XHJcbiAgICAgIHZhbCA9IHRoaXMuc3R5bGVzW2ldO1xyXG4gICAgICBpZiAodmFsKSBzdHlsZSArPSBpICsgJzonICsgdmFsICsgJzsnO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zdHlsZSA9IHN0eWxlO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlbCkge1xyXG5cclxuICByZXR1cm4gbmV3IF9ET01NT0RVTEUoe1xyXG4gICAgZWwsXHJcblx0XHRldmVudHM6IHtcclxuICAgICAgRE9NOiB7XHJcbiAgICAgICAgY2xpY2s6IHtcclxuICAgICAgICAgICdsaSc6ICd0b2dnbGUnXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblx0XHR9LFxyXG4gICAgcGFnZU5hdjogbnVsbCxcclxuICAgIGN1cnJlbnQ6IG51bGwsXHJcblxyXG4gICAgYXV0b2luaXQoKSB7XHJcbiAgICAgIHRoaXMucGFnZU5hdiA9IGVsLmhhc0F0dHJpYnV0ZSgnZGF0YS1wYWdlLW5hdicpO1xyXG4gICAgICBsZXQgY3VycmVudCA9IHRoaXMuY3VycmVudCA9IGVsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2FjdGl2ZScpWzBdO1xyXG4gICAgICB0aGlzLm9wZW4oY3VycmVudCk7XHJcbiAgICB9LFxyXG5cclxuICAgIHRvZ2dsZShlLCBlbCkge1xyXG4gICAgICBpZiAoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdkaXNhYmxlZCcpIHx8IHRoaXMuY3VycmVudCA9PSBlbCkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgaWYgKHRoaXMuY3VycmVudCkgdGhpcy5jbG9zZSh0aGlzLmN1cnJlbnQpO1xyXG5cclxuICAgICAgdGhpcy5vcGVuKGVsKTtcclxuICAgIH0sXHJcbiAgICBvcGVuKGVsKSB7XHJcbiAgICAgIGNvbnN0IHRhcmdldElkID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcpO1xyXG4gICAgICBlbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFyZ2V0SWQpLmNsYXNzTGlzdC5yZW1vdmUoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgICB0aGlzLmVtaXQoJ29wZW5lZDp0YWInLCB0YXJnZXRJZCk7XHJcbiAgICAgIHRoaXMuY3VycmVudCA9IGVsO1xyXG4gICAgICBpZiAodGhpcy5wYWdlTmF2KSB3aW5kb3cuZG9jdW1lbnQudGl0bGUgPSAnVGV4dG1hcmtlciAtICcgKyBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSh0YXJnZXRJZCk7XHJcbiAgICB9LFxyXG4gICAgY2xvc2UoZWwpIHtcclxuICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsLmdldEF0dHJpYnV0ZSgnZGF0YS10YXJnZXQnKSkuY2xhc3NMaXN0LmFkZCgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuaW1wb3J0IF9NQVJLRVIgZnJvbSAnLi9tYXJrZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gbmV3IF9ET01NT0RVTEUoe1xyXG4gICAgZWw6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZXR0aW5ncycpLFxyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgICdpbXBvcnRlZDpzZXR0aW5ncyc6ICd1cGRhdGUnLFxyXG4gICAgICAgICd1cGRhdGVkOmJnLWNvbG9yLXNldHRpbmdzJzogJ3VwZGF0ZScsXHJcbiAgICAgICAgJ3VwZGF0ZWQ6Y3VzdG9tLXNlYXJjaC1zZXR0aW5ncyc6ICdzaG93Q3VzdG9tU2VhcmNoU2V0dGluZ1N1Y2Nlc3MnLFxyXG4gICAgICAgICdzZXQtYXJlYXMtYWZ0ZXItc3luYy1jaGFuZ2UnOiAndXBkYXRlJ1xyXG4gICAgICB9LFxyXG4gICAgICBET006IHtcclxuICAgICAgICBjaGFuZ2U6IHtcclxuICAgICAgICAgICcuY3NzJzogJ2NoYW5nZVN0eWxlJyxcclxuICAgICAgICAgICcjY3VzdG9taXplZC1rZXknOiAndXBkYXRlTWFya2VyJyxcclxuICAgICAgICAgICcjYWRkLWtleSc6ICdhZGRNYXJrZXInLFxyXG4gICAgICAgICAgJyNyZW1vdmUta2V5JzogJ3JlbW92ZU1hcmtlcicsXHJcbiAgICAgICAgICAnLm1hcmstb3B0JzogJ2NoYW5nZU1hcmtNZXRob2QnLFxyXG4gICAgICAgICAgJy5zYy1jYic6ICd0b2dnbGVTaG9ydGN1dCcsXHJcbiAgICAgICAgICAnLnNob3J0Y3V0LXNlbGVjdCc6ICdjaGFuZ2VTaG9ydGN1dCcsXHJcbiAgICAgICAgICAnLnNhdmUtb3B0JzogJ2NoYW5nZVNhdmVPcHQnLFxyXG4gICAgICAgICAgJy5uYW1pbmctb3B0JzogJ2NoYW5nZU5hbWluZ09wdCcsXHJcbiAgICAgICAgICAnI25vdGVzLW5ldyc6ICd0b2dnbGVTYXZlTm90ZU9wdCcsXHJcbiAgICAgICAgICAnLmN1c3RvbWl6ZS1xdWlja2J1dHRvbnMnOiAnY2hhbmdlUXVpY2tidXR0b25PcHQnLFxyXG4gICAgICAgICAgJy5kb3dubG9hZC1xdWlja2J1dHRvbi1vcHQnOiAnc3dpdGNoUXVpY2tidXR0b25PcHQnLFxyXG4gICAgICAgICAgJy5jdG0tY2InOiAndG9nZ2xlQ3RtJyxcclxuICAgICAgICAgICcubm90ZXMtY2InOiAndG9nZ2xlTm90ZXMnLFxyXG4gICAgICAgICAgJy5taXNjLWNiJzogJ3RvZ2dsZU1pc2MnLFxyXG4gICAgICAgICAgJy50YmJwb3dlci1vcHQnOiAndG9nZ2xlVEJCUG93ZXJPcHQnLFxyXG4gICAgICAgICAgJy50bXVpcG9zJzogJ2NoYW5nZVRtdWlQb3NpdGlvbk9wdCcsXHJcbiAgICAgICAgICAnI3ByaXZhdGUtc2F2ZSc6ICd0b2dnbGVQcml2U2F2ZScsXHJcbiAgICAgICAgICAnI2F1dG8tbm90ZSc6ICd0b2dnbGVBdXRvTm90ZU9wdCcsXHJcbiAgICAgICAgICAnI2ltbXV0JzogJ3RvZ2dsZUltbXV0T3B0JyxcclxuICAgICAgICAgICcjZHJvcC1sb3NzZXMnOiAndG9nZ2xlRHJvcExvc3Nlc09wdCcsXHJcbiAgICAgICAgICAnI2F1dG9ub3RlLWNvbG9yJzogJ2NoYW5nZUF1dG9Ob3RlT3B0JyxcclxuICAgICAgICAgICcjaWdub3JlLWhhc2gnOiAnY2hhbmdlSGFzaE9wdCcsXHJcbiAgICAgICAgICAnI2FkZG9uLWF1dG9jcyc6ICd0b2dnbGVBdXRvY3NPcHQnLFxyXG4gICAgICAgICAgJyNhZGRvbi1pZnJhbWVzJzogJ3RvZ2dsZUlGcmFtZU9wdCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNsaWNrOiB7XHJcbiAgICAgICAgICAnI2N1c3RvbS1zZWFyY2gnOiAnY2hhbmdlQ3VzdG9tU2VhcmNoJyxcclxuICAgICAgICAgICcuY3VzdG9tLXNlYXJjaC1pbnB1dCc6ICdoaWRlQ3VzdG9tU2VhcmNoU2V0dGluZ1N1Y2Nlc3MnXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgYWxsb3dlZEtleXM6ICdhIGIgYyBkIGUgZiBnIGggaSBqIGsgbCBuIG8gcCBxIHIgcyB0IHUgdiB4IHkgeiAwIDEgNCA1IDYgNyA4IDkgZW50ZXIgLSArJy5zcGxpdCgnICcpLFxyXG4gICAgYWxsb3dlZFNob3J0Y3V0czogWycnLCAnY3RybEtleScsICdzaGlmdEtleScsICdhbHRLZXknLCAnY3RybEtleS1zaGlmdEtleScsICdjdHJsS2V5LWFsdEtleScsICdzaGlmdEtleS1hbHRLZXknLCAnbWV0YUtleScsICdtZXRhS2V5LXNoaWZ0S2V5JywgJ21ldGFLZXktYWx0S2V5J10sXHJcbiAgICBhbGxvd2VkUXVpY2tidXR0b25PcHRzOiBbJ3RpdGxlJywgJ3VybCcsICd0ZXh0JywgJ3RleHQgK21ldGEnLCAndGV4dCArbm90ZXMnLCAndGV4dCArbG9zdCcsICd0ZXh0IG0nLCAndGV4dCAyJywgJ3RleHQgMycsICd0ZXh0IGMnLCAndGV4dCBsb3N0J10sXHJcbiAgICBtYXJrZXJLZXlzOiBbJ20nLCAnMicsICczJ10sXHJcbiAgICBjdXN0b21NYXJrZXJLZXlzOiBbXSxcclxuICAgIG1hcmtlcjogbnVsbCxcclxuICAgIGN1c3RvbVNlYXJjaDogYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ2xuZycpICsgJy53aWtpcGVkaWEub3JnL3dpa2kvJyxcclxuXHJcbiAgICBhdXRvaW5pdCgpIHtcclxuICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICB9LFxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgX1NUT1JFLmdldCgnc2V0dGluZ3MnKS50aGVuKHNldHRpbmdzID0+IHtcclxuICAgICAgICBsZXQgbWFya2VycyA9IHNldHRpbmdzLm1hcmtlcnMsXHJcbiAgICAgICAgICAgIG1hcmtlcktleXMgPSB0aGlzLm1hcmtlcktleXMsXHJcbiAgICAgICAgICAgIGN1c3RvbU1hcmtlcktleXMgPSB0aGlzLmN1c3RvbU1hcmtlcktleXMsXHJcbiAgICAgICAgICAgIGksIGtleTtcclxuXHJcbiAgICAgICAgZm9yIChrZXkgaW4gbWFya2Vycykge1xyXG4gICAgICAgICAgaSA9IGtleS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgaWYgKCFtYXJrZXJLZXlzLmluY2x1ZGVzKGkpICYmICFjdXN0b21NYXJrZXJLZXlzLmluY2x1ZGVzKGkpKVxyXG4gICAgICAgICAgICB0aGlzLmN1c3RvbU1hcmtlcktleXMucHVzaChpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucmVuZGVyTWFya2VyU2VsZWN0T3B0aW9ucygpXHJcbiAgICAgICAgICAgIC51cGRhdGVNYXJrZXIodGhpcy5tYXJrZXIgPyB0aGlzLm1hcmtlci5rZXkgOiAnbScpXHJcbiAgICAgICAgICAgIC5pbmplY3RTZXR0aW5ncyhzZXR0aW5ncyk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHJlc3VtZSgpIHtcclxuICAgICAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY3VzdG9tLWtleScpKS5mb3JFYWNoKGVsID0+IGVsLnJlbW92ZSgpKTtcclxuICAgICAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY3VzdG9tLW1hcmtlci1vcHRpb24nKSkuZm9yRWFjaChlbCA9PiBlbC5yZW1vdmUoKSk7XHJcbiAgICAgIHRoaXMuY3VzdG9tTWFya2VyS2V5cyA9IFtdO1xyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgIH0sXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgIHRoaXMucmVzdW1lKCkuaW5pdCgpO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZU1hcmtlcihlLCBlbCwgY3VzdG9tQmdDb2xvcikge1xyXG4gICAgICBsZXQga2V5ID0gZWwgPyBlbC52YWx1ZSA6IGUgPyBlIDogdGhpcy5tYXJrZXIgPyB0aGlzLm1hcmtlci5rZXkgOiAnbSc7XHJcblxyXG4gICAgICB0aGlzLm1hcmtlciA9IG5ldyBfTUFSS0VSKGtleSwgY3VzdG9tQmdDb2xvcik7XHJcblxyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgIH0sXHJcbiAgICByZW5kZXJNYXJrZXJTZWxlY3RPcHRpb25zKCkge1xyXG4gICAgICBsZXQga2V5U2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1c3RvbWl6ZWQta2V5JyksXHJcbiAgICAgICAgICBrZXlJY29ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXN0b20ta2V5cycpLFxyXG4gICAgICAgICAgYWRkS2V5U2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1rZXknKSxcclxuICAgICAgICAgIHJlbW92ZUtleVNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZW1vdmUta2V5JyksXHJcblxyXG4gICAgICAgICAgYWxsb3dlZEtleXMgPSB0aGlzLmFsbG93ZWRLZXlzLFxyXG4gICAgICAgICAgY3VzdG9tTWFya2VyS2V5cyA9IHRoaXMuY3VzdG9tTWFya2VyS2V5cyxcclxuXHJcbiAgICAgICAgICBhID0gYWxsb3dlZEtleXMubGVuZ3RoLFxyXG4gICAgICAgICAgYyA9IGN1c3RvbU1hcmtlcktleXMubGVuZ3RoLFxyXG4gICAgICAgICAgaSA9IDAsXHJcblxyXG4gICAgICAgICAgZnJhZ21lbnQxID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLFxyXG4gICAgICAgICAgZnJhZ21lbnQyID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLFxyXG4gICAgICAgICAgZnJhZ21lbnQzID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLFxyXG4gICAgICAgICAgZnJhZ21lbnQ0ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLFxyXG5cclxuICAgICAgICAgIG9wdGlvbiwgaWNvbiwgdmFsLCBWYWw7XHJcblxyXG4gICAgICBmb3IgKDsgaSA8IGM7IGkrKykge1xyXG4gICAgICAgIHZhbCA9IGN1c3RvbU1hcmtlcktleXNbaV07XHJcbiAgICAgICAgVmFsID0gdmFsLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgVmFsID0gVmFsID09PSAnRU5URVInID8gU3RyaW5nLmZyb21DaGFyQ29kZSgweDIxQjUpIDogVmFsO1xyXG4gICAgICAgIG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICAgIGZyYWdtZW50MS5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IHZhbDtcclxuICAgICAgICBvcHRpb24uaW5uZXJUZXh0ID0gdmFsLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgb3B0aW9uLmNsYXNzTmFtZSA9ICdjdXN0b20tbWFya2VyLW9wdGlvbiBjdXN0b20tbWFya2VyLW9wdGlvbi0nICsgdmFsO1xyXG5cclxuICAgICAgICBmcmFnbWVudDMuYXBwZW5kQ2hpbGQob3B0aW9uLmNsb25lTm9kZSh0cnVlKSk7XHJcblxyXG4gICAgICAgIGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBmcmFnbWVudDIuYXBwZW5kQ2hpbGQoaWNvbik7XHJcbiAgICAgICAgaWNvbi5jbGFzc05hbWUgPSAna2V5IGN1c3RvbS1rZXknO1xyXG4gICAgICAgIGljb24uaWQgPSAnY3VzdG9tLWtleS0nICsgdmFsO1xyXG4gICAgICAgIGljb24uaW5uZXJUZXh0ID0gVmFsO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBrZXlTZWxlY3QuYXBwZW5kQ2hpbGQoZnJhZ21lbnQxKTtcclxuICAgICAga2V5SWNvbnMuYXBwZW5kQ2hpbGQoZnJhZ21lbnQyKTtcclxuICAgICAgcmVtb3ZlS2V5U2VsZWN0LmFwcGVuZENoaWxkKGZyYWdtZW50Myk7XHJcblxyXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgYTsgaSsrKSB7XHJcbiAgICAgICAgdmFsID0gYWxsb3dlZEtleXNbaV0udG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICAgICAgaWYgKGN1c3RvbU1hcmtlcktleXMuaW5jbHVkZXModmFsKSlcclxuICAgICAgICAgICAgY29udGludWVcclxuXHJcbiAgICAgICAgVmFsID0gdmFsLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgZnJhZ21lbnQ0LmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gdmFsO1xyXG4gICAgICAgIG9wdGlvbi5pbm5lclRleHQgPSBWYWw7XHJcbiAgICAgICAgb3B0aW9uLmNsYXNzTmFtZSA9ICdjdXN0b20tbWFya2VyLW9wdGlvbiBjdXN0b20tbWFya2VyLW9wdGlvbi0nICsgdmFsO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBhZGRLZXlTZWxlY3QuYXBwZW5kQ2hpbGQoZnJhZ21lbnQ0KTtcclxuXHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfSxcclxuICAgIGluamVjdFNldHRpbmdzKHNldHRpbmdzKSB7XHJcbiAgICAgIGxldCBzaG9ydGN1dHMgPSBzZXR0aW5ncy5zaG9ydGN1dHMsXHJcbiAgICAgICAgICBpLCBzY0NoZWNrYm94LCBzY1NlbGVjdCwgY21DaGVja2JveCwgc2M7XHJcblxyXG4gICAgICBmb3IgKGkgaW4gc2hvcnRjdXRzKSB7XHJcbiAgICAgICAgc2MgPSBzaG9ydGN1dHNbaV07XHJcbiAgICAgICAgc2NDaGVja2JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzYy0nICsgaSk7XHJcbiAgICAgICAgc2NTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hvcnRjdXQtc2VsZWN0LScgKyBpKTtcclxuICAgICAgICBjbUNoZWNrYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NtLScgKyBpKTtcclxuXHJcbiAgICAgICAgaWYgKHNjQ2hlY2tib3gpIHNjQ2hlY2tib3guY2hlY2tlZCA9IHNjWzFdO1xyXG4gICAgICAgIGlmIChzY1NlbGVjdCkgc2NTZWxlY3QudmFsdWUgPSBzY1swXTtcclxuICAgICAgICBpZiAoY21DaGVja2JveCkgY21DaGVja2JveC5jaGVja2VkID0gc2NbMl07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCBoaXN0b3J5U2V0dGluZ3MgPSBzZXR0aW5ncy5oaXN0b3J5LFxyXG4gICAgICAgICAgc2F2ZU9wdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSgnc2F2ZS1vcHQnKTtcclxuXHJcbiAgICAgIGlmIChoaXN0b3J5U2V0dGluZ3MuYXV0b3NhdmUpIHNhdmVPcHRzWzBdLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICBlbHNlIHNhdmVPcHRzWzFdLmNoZWNrZWQgPSB0cnVlO1xyXG5cclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWUtJyArIGhpc3RvcnlTZXR0aW5ncy5uYW1pbmcpLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpdmF0ZS1zYXZlJykuY2hlY2tlZCA9IGhpc3RvcnlTZXR0aW5ncy5zYXZlSW5Qcml2O1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1tdXQnKS5jaGVja2VkID0gaGlzdG9yeVNldHRpbmdzLmltbXV0O1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHJvcC1sb3NzZXMnKS5jaGVja2VkID0gaGlzdG9yeVNldHRpbmdzLmRyb3BMb3NzZXM7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub3Rlcy1uZXcnKS5jaGVja2VkID0gaGlzdG9yeVNldHRpbmdzLnNhdmVOb3RlO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaWdub3JlLWhhc2gnKS5jaGVja2VkID0gIWhpc3RvcnlTZXR0aW5ncy5pZ25vcmVIYXNoO1xyXG5cclxuICAgICAgaWYgKGhpc3RvcnlTZXR0aW5ncy5kb3dubG9hZCA9PT0gJ2pzb24nKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rvd25sb2FkLWpzb24nKS5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZG93bmxvYWQtdGV4dCcpLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdxdWlja2J1dHRvbi1kb3dubG9hZC1zZWxlY3QnKS52YWx1ZSA9IGhpc3RvcnlTZXR0aW5ncy5kb3dubG9hZDtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IG1pc2NTZXR0aW5ncyA9IHNldHRpbmdzLm1pc2M7XHJcblxyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFyay1tZXRob2QtLScgKyBtaXNjU2V0dGluZ3MubWFya21ldGhvZCkuY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtaXNjLWJtJykuY2hlY2tlZCA9IG1pc2NTZXR0aW5ncy5ibWljb247XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtaXNjLW5vdGVpY29uJykuY2hlY2tlZCA9IG1pc2NTZXR0aW5ncy5ub3RlaWNvbjtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21pc2Mtbm90ZW9uY2xpY2snKS5jaGVja2VkID0gbWlzY1NldHRpbmdzLm5vdGVvbmNsaWNrO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWlzYy1ub3RldHJhbnNwJykuY2hlY2tlZCA9IG1pc2NTZXR0aW5ncy5ub3RldHJhbnNwO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWlzYy1ub3RlcGxhaW52aWV3JykuY2hlY2tlZCA9IG1pc2NTZXR0aW5ncy5ub3RlcGxhaW52aWV3O1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm90ZXMtcmVzdG9yYXRpb24tZmFpbHVyZScpLmNoZWNrZWQgPSBtaXNjU2V0dGluZ3MuZmFpbHVyZU5vdGU7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub3Rlcy1yZXN0b3JhdGlvbi1zdWNjZXNzJykuY2hlY2tlZCA9IG1pc2NTZXR0aW5ncy5zdWNjZXNzTm90ZTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vdGVzLXBibScpLmNoZWNrZWQgPSBtaXNjU2V0dGluZ3MucGJtTm90ZTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vdGVzLWVycm9yJykuY2hlY2tlZCA9IG1pc2NTZXR0aW5ncy5lcnJvck5vdGU7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aXAtbm90ZScpLmNoZWNrZWQgPSBtaXNjU2V0dGluZ3MudmlwTm90ZTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1c3RvbS1zZWFyY2gtLXN0YXJ0JykudmFsdWUgPSBtaXNjU2V0dGluZ3MuY3VzdG9tU2VhcmNoID8gbWlzY1NldHRpbmdzLmN1c3RvbVNlYXJjaFswXSA6IHRoaXMuY3VzdG9tU2VhcmNoO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VzdG9tLXNlYXJjaC0tZW5kJykudmFsdWUgPSBtaXNjU2V0dGluZ3MuY3VzdG9tU2VhcmNoID8gbWlzY1NldHRpbmdzLmN1c3RvbVNlYXJjaFsxXSA6ICcnO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG11aXBvcy0tbm90ZWljb24nKS52YWx1ZSA9IG1pc2NTZXR0aW5ncy50bXVpcG9zO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG11aXBvcy0tYm1pY29uJykudmFsdWUgPSBtaXNjU2V0dGluZ3MudG11aXBvcztcclxuXHJcbiAgICAgIGlmIChtaXNjU2V0dGluZ3MudGJicG93ZXIpIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGJicG93ZXItb24nKS5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGJicG93ZXItb2ZmJykuY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRvbi1hdXRvY3MnKS5jaGVja2VkID0gc2V0dGluZ3MuYWRkb24uYXV0b2NzO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkb24taWZyYW1lcycpLmNoZWNrZWQgPSBzZXR0aW5ncy5hZGRvbi5pZnJhbWVzO1xyXG4gICAgfSxcclxuICAgIHNob3dDdXN0b21TZWFyY2hTZXR0aW5nU3VjY2VzcygpIHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1c3RvbS1zZWFyY2gtLXN1Ym1pdHRlZCcpLmNsYXNzTGlzdC5yZW1vdmUoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgfSxcclxuICAgIGhpZGVDdXN0b21TZWFyY2hTZXR0aW5nU3VjY2VzcygpIHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1c3RvbS1zZWFyY2gtLXN1Ym1pdHRlZCcpLmNsYXNzTGlzdC5hZGQoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgfSxcclxuICAgIGNoYW5nZVN0eWxlKGUsIGVsKSB7XHJcbiAgICAgIGNvbnN0IG1hcmtlciA9IHRoaXMubWFya2VyLnVwZGF0ZShlbCk7XHJcblxyXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZTpzdHlsZS1zZXR0aW5nJywgbWFya2VyLmtleSwgbWFya2VyLnN0eWxlKTtcclxuICAgIH0sXHJcbiAgICB0b2dnbGVBdXRvTm90ZU9wdChlLCBlbCkge1xyXG4gICAgICBjb25zdCB2YWwgPSBlbC5jaGVja2VkID8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F1dG9ub3RlLWNvbG9yJykudmFsdWUgOiBmYWxzZTtcclxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2U6YXV0b25vdGUtc2V0dGluZycsIHRoaXMubWFya2VyLmtleSwgdmFsKTtcclxuICAgIH0sXHJcbiAgICBjaGFuZ2VBdXRvTm90ZU9wdChlLCBlbCkge1xyXG4gICAgICBjb25zdCB2YWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXV0by1ub3RlJykuY2hlY2tlZCA/IGVsLnZhbHVlIDogZmFsc2U7XHJcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlOmF1dG9ub3RlLXNldHRpbmcnLCB0aGlzLm1hcmtlci5rZXksIHZhbCk7XHJcbiAgICB9LFxyXG4gICAgY2hhbmdlSGFzaE9wdChlLCBlbCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZTpoYXNoLXNldHRpbmcnLCAhZWwuY2hlY2tlZCk7XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlSW1tdXRPcHQoZSwgZWwpIHtcclxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2U6aW1tdXQtc2V0dGluZycsIGVsLmNoZWNrZWQpO1xyXG4gICAgfSxcclxuICAgIHRvZ2dsZURyb3BMb3NzZXNPcHQoZSwgZWwpIHtcclxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2U6ZHJvcExvc3Nlcy1zZXR0aW5nJywgZWwuY2hlY2tlZCk7XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlQXV0b2NzT3B0KGUsIGVsKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlOmF1dG9jcy1zZXR0aW5nJywgZWwuY2hlY2tlZCk7XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlSUZyYW1lT3B0KGUsIGVsKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlOmlmcmFtZS1zZXR0aW5nJywgZWwuY2hlY2tlZCk7XHJcbiAgICB9LFxyXG4gICAgYWRkTWFya2VyKGUsIGVsKSB7XHJcbiAgICAgIGxldCBrZXkgPSBlbC52YWx1ZSxcclxuICAgICAgICAgIGtleVNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXN0b21pemVkLWtleScpLFxyXG4gICAgICAgICAga2V5SWNvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VzdG9tLWtleXMnKSxcclxuICAgICAgICAgIHJlbW92ZUtleVNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZW1vdmUta2V5JyksXHJcbiAgICAgICAgICBvcHRpb24gPSBlbC5jaGlsZHJlbltlbC5zZWxlY3RlZEluZGV4XSxcclxuICAgICAgICAgIGNsb25lID0gb3B0aW9uLmNsb25lTm9kZSh0cnVlKSxcclxuICAgICAgICAgIGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuICAgICAgICAgIGJnQ29sb3IgPSB0aGlzLmdldFJhbmRvbUxpZ2h0Q29sb3IoKTtcclxuXHJcbiAgICAgIGlmICgha2V5IHx8IHJlbW92ZUtleVNlbGVjdC5jaGlsZHJlbi5sZW5ndGggPj0gMTIgfHwgdGhpcy5hbGxvd2VkS2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICByZW1vdmVLZXlTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICAgICAgcmVtb3ZlS2V5U2VsZWN0LnNlbGVjdGVkSW5kZXggPSAwO1xyXG4gICAgICBrZXlTZWxlY3QuYXBwZW5kQ2hpbGQoY2xvbmUpO1xyXG4gICAgICBjbG9uZS5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgIGljb24uY2xhc3NOYW1lID0gJ2tleSBjdXN0b20ta2V5JztcclxuICAgICAgaWNvbi5pZCA9ICdjdXN0b20ta2V5LScgKyBrZXk7XHJcbiAgICAgIGtleUljb25zLmFwcGVuZENoaWxkKGljb24pO1xyXG4gICAgICBpY29uLmlubmVyVGV4dCA9IGtleSA9PT0gJ2VudGVyJyA/IFN0cmluZy5mcm9tQ2hhckNvZGUoMHgyMUI1KSA6IGtleS50b1VwcGVyQ2FzZSgpO1xyXG5cclxuICAgICAgdGhpcy51cGRhdGVNYXJrZXIoa2V5LCBudWxsLCBiZ0NvbG9yKTtcclxuXHJcbiAgICAgIHRoaXMuZW1pdCgnYWRkOmN1c3RvbS1tYXJrZXInLCBrZXksICdiYWNrZ3JvdW5kLWNvbG9yOicgKyBiZ0NvbG9yICsgJzsnKTtcclxuICAgIH0sXHJcbiAgICByZW1vdmVNYXJrZXIoZSwgZWwpIHtcclxuICAgICAgbGV0IGtleSA9IGVsLnZhbHVlLFxyXG4gICAgICAgICAga2V5U2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1c3RvbWl6ZWQta2V5JyksXHJcbiAgICAgICAgICBrZXlJY29ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXN0b20ta2V5cycpLFxyXG4gICAgICAgICAgYWRkS2V5U2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1rZXknKSxcclxuICAgICAgICAgIG9wdGlvbjtcclxuXHJcbiAgICAgIGlmICgha2V5IHx8IHRoaXMuYWxsb3dlZEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgb3B0aW9uID0gZWwuY2hpbGRyZW5bZWwuc2VsZWN0ZWRJbmRleF07XHJcbiAgICAgIGFkZEtleVNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gICAgICBhZGRLZXlTZWxlY3Quc2VsZWN0ZWRJbmRleCA9IDA7XHJcbiAgICAgIGVsLnNlbGVjdGVkSW5kZXggPSAwO1xyXG5cclxuICAgICAga2V5U2VsZWN0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2N1c3RvbS1tYXJrZXItb3B0aW9uLScgKyBrZXkpWzBdLnJlbW92ZSgpO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VzdG9tLWtleS0nICsga2V5KS5yZW1vdmUoKTtcclxuICAgICAga2V5U2VsZWN0LnNlbGVjdGVkSW5kZXggPSAwO1xyXG5cclxuICAgICAgdGhpcy51cGRhdGVNYXJrZXIoJ20nKTtcclxuXHJcbiAgICAgIHRoaXMuZW1pdCgncmVtb3ZlOmN1c3RvbS1tYXJrZXInLCBrZXkpO1xyXG4gICAgfSxcclxuICAgIGNoYW5nZU1hcmtNZXRob2QoZSwgZWwpIHtcclxuICAgICAgaWYgKGVsLmNoZWNrZWQpIHtcclxuICAgICAgICB0aGlzLmVtaXQoJ2NoYW5nZTptYXJrLW1ldGhvZC1zZXR0aW5nJywgZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXZhbHVlJykpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlU2hvcnRjdXQoZSwgZWwpIHtcclxuICAgICAgdGhpcy5lbWl0KCd0b2dnbGU6c2hvcnRjdXQtc2V0dGluZycsIGVsLm5hbWUsIGVsLmNoZWNrZWQpO1xyXG4gICAgfSxcclxuICAgIGNoYW5nZVNob3J0Y3V0KGUsIGVsKSB7XHJcbiAgICAgIGlmICghdGhpcy5hbGxvd2VkU2hvcnRjdXRzLmluY2x1ZGVzKGVsLnZhbHVlKSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2U6c2hvcnRjdXQtc2V0dGluZycsIGVsLm5hbWUsIGVsLnZhbHVlKTtcclxuICAgIH0sXHJcbiAgICB0b2dnbGVDdG0oZSwgZWwpIHtcclxuICAgICAgdGhpcy5lbWl0KCd0b2dnbGU6Y3RtLXNldHRpbmcnLCBlbC5uYW1lLCBlbC5jaGVja2VkKTtcclxuICAgIH0sXHJcbiAgICBjaGFuZ2VTYXZlT3B0KGUsIGVsKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlOnNhdmVvcHQtc2V0dGluZycsICEhZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpO1xyXG4gICAgfSxcclxuICAgIHRvZ2dsZVByaXZTYXZlKGUsIGVsKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgndG9nZ2xlOnByaXYtc2V0dGluZycsIGVsLmNoZWNrZWQpO1xyXG4gICAgfSxcclxuICAgIGNoYW5nZU5hbWluZ09wdChlLCBlbCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZTpuYW1pbmdvcHQtc2V0dGluZycsIGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKTtcclxuICAgIH0sXHJcbiAgICB0b2dnbGVTYXZlTm90ZU9wdChlLCBlbCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ3RvZ2dsZTpub3Rlb3B0LXNldHRpbmcnLCBlbC5jaGVja2VkKTtcclxuICAgIH0sXHJcbiAgICBjaGFuZ2VRdWlja2J1dHRvbk9wdChlLCBlbCkge1xyXG4gICAgICBpZiAoIXRoaXMuYWxsb3dlZFF1aWNrYnV0dG9uT3B0cy5pbmNsdWRlcyhlbC52YWx1ZSkpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgIHRoaXMuZW1pdCgndG9nZ2xlOnF1aWNrYnV0dG9ub3B0LXNldHRpbmcnLCBlbC5uYW1lLCBlbC52YWx1ZSk7XHJcbiAgICB9LFxyXG4gICAgc3dpdGNoUXVpY2tidXR0b25PcHQoZSwgZWwpIHtcclxuICAgICAgY29uc3QgdHlwZSA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xyXG4gICAgICBjb25zdCB2YWwgPSB0eXBlID09PSAnanNvbicgPyB0eXBlIDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3F1aWNrYnV0dG9uLWRvd25sb2FkLXNlbGVjdCcpLnZhbHVlO1xyXG4gICAgICB0aGlzLmVtaXQoJ3N3aXRjaDpxdWlja2J1dHRvbm9wdC1zZXR0aW5nJywgZWwubmFtZSwgdmFsKTtcclxuICAgIH0sXHJcbiAgICB0b2dnbGVOb3RlcyhlLCBlbCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ3RvZ2dsZTpub3RpZmljYXRpb24tc2V0dGluZycsIGVsLm5hbWUsIGVsLmNoZWNrZWQpO1xyXG4gICAgfSxcclxuICAgIHRvZ2dsZU1pc2MoZSwgZWwpIHtcclxuICAgICAgdGhpcy5lbWl0KCd0b2dnbGU6bWlzYy1zZXR0aW5nJywgZWwubmFtZSwgZWwuY2hlY2tlZCk7XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlVEJCUG93ZXJPcHQoZSwgZWwpIHtcclxuICAgICAgY29uc3QgdmFsID0gISEoZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykqMSk7XHJcbiAgICAgIHRoaXMuZW1pdCgndG9nZ2xlOnRiYnBvd2VyLXNldHRpbmcnLCBlbC5uYW1lLCB2YWwpO1xyXG4gICAgfSxcclxuICAgIGNoYW5nZVRtdWlQb3NpdGlvbk9wdChlLCBlbCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZTptaXNjLXNldHRpbmcnLCBlbC5uYW1lLCBlbC52YWx1ZSk7XHJcbiAgICAgIEFycmF5LmZyb20odGhpcy5lbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0bXVpcG9zJykpLmZvckVhY2goc2VsZWN0ID0+IHNlbGVjdC52YWx1ZSA9IGVsLnZhbHVlKTtcclxuICAgIH0sXHJcbiAgICBjaGFuZ2VDdXN0b21TZWFyY2goZSwgZWwpIHtcclxuICAgICAgdGhpcy5oaWRlQ3VzdG9tU2VhcmNoU2V0dGluZ1N1Y2Nlc3MoKTtcclxuICAgICAgY29uc3QgaW5wMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXN0b20tc2VhcmNoLS1zdGFydCcpO1xyXG4gICAgICBjb25zdCBpbnAyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1c3RvbS1zZWFyY2gtLWVuZCcpO1xyXG4gICAgICBjb25zdCBwYXJ0MSA9IGlucDEudmFsdWU7XHJcbiAgICAgIGNvbnN0IHBhcnQyID0gaW5wMi52YWx1ZTtcclxuICAgICAgaWYgKCFwYXJ0MSAmJiAhcGFydDIpIHtcclxuICAgICAgICBpbnAxLnZhbHVlID0gdGhpcy5jdXN0b21TZWFyY2g7XHJcbiAgICAgICAgaW5wMi52YWx1ZSA9ICcnO1xyXG4gICAgICAgIHRoaXMuZW1pdCgnY2hhbmdlOmN1c3RvbS1zZWFyY2gtc2V0dGluZycsIGZhbHNlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmVtaXQoJ2NoYW5nZTpjdXN0b20tc2VhcmNoLXNldHRpbmcnLCBbcGFydDEsIHBhcnQyXSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBnZXRSYW5kb21MaWdodENvbG9yKCkge1xyXG4gICAgICByZXR1cm4gJyMnICsgTWF0aC5mbG9vcigoMC44ICsgTWF0aC5yYW5kb20oKSAqIDAuMTc1KSAqIDE2Nzc3MjE1KS50b1N0cmluZygxNik7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBuZXcgX0RPTU1PRFVMRSh7XHJcbiAgICBlbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N5bmMnKSxcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAnZmFpbGVkOnRvZ2dsZS1zeW5jJzogJ3VuZG8nXHJcbiAgICAgIH0sXHJcbiAgICAgIERPTToge1xyXG4gICAgICAgIGNsaWNrOiB7XHJcbiAgICAgICAgICAnLnN3aXRjaCc6ICd0b2dnbGVTd2l0Y2gnXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGF1dG9pbml0KCkge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3luYy1zd2l0Y2gtLXNldHRpbmdzJykuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJywgX1NUT1JFLmFyZWFfc2V0dGluZ3MgPT09ICdzeW5jJyk7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzeW5jLXN3aXRjaC0taGlzdG9yeScpLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScsIF9TVE9SRS5hcmVhX2hpc3RvcnkgPT09ICdzeW5jJyk7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzeW5jLXN3aXRjaC0tcGFnZW5vdGVzJykuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJywgX1NUT1JFLmFyZWFfcGFnZW5vdGVzID09PSAnc3luYycpO1xyXG4gICAgfSxcclxuXHJcbiAgICB0b2dnbGVTd2l0Y2goZSwgZWwpIHtcclxuICAgICAgZWwgPSBlbC5jbGFzc0xpc3QuY29udGFpbnMoJ3N3aXRjaC0tc3luYycpID8gZWwgOiBlbC5wYXJlbnROb2RlO1xyXG4gICAgICBlbC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICAgICAgdGhpcy5lbWl0KCd0b2dnbGU6c3luYycsIGVsLmdldEF0dHJpYnV0ZSgnZGF0YS10eXBlJyksIGVsLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpO1xyXG4gICAgfSxcclxuXHJcbiAgICB1bmRvKGZpZWxkKSB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzeW5jLXN3aXRjaC0tJyArIGZpZWxkKS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBfVE9HR0xFUiB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGVsKSB7XHJcbiAgICB0aGlzLmVsID0gZWw7XHJcbiAgICB0aGlzLmluaXQoKTtcclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy50b2dnbGUsIGZhbHNlKTtcclxuICB9XHJcbiAgdG9nZ2xlKGUpIHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgbGV0IGRhdGFUYXJnZXQgPSB0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS10YXJnZXQnKSxcclxuICAgICAgICB0YXJnZXRzID0gZGF0YVRhcmdldCA/IGRhdGFUYXJnZXQuc3BsaXQoJyAnKSA6IG51bGwsXHJcbiAgICAgICAgZGF0YVRvZ2dsZSA9IHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZScpLFxyXG4gICAgICAgIHJvbGVzID0gZGF0YVRvZ2dsZSA/IGRhdGFUb2dnbGUuc3BsaXQoJyAnKSA6IG51bGw7XHJcblxyXG4gICAgaWYgKHJvbGVzKSB7XHJcbiAgICAgIHJvbGVzLmZvckVhY2goKHJvbGUsIGkpID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhcmdldHNbaV0pLmNsYXNzTGlzdFtyb2xlXSgnb3BlbicpKTtcclxuICAgIH1cclxuICAgIGVsc2UgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFyZ2V0c1swXSkuZGlzYWJsZWQgPSAhdGhpcy5jaGVja2VkO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBfUE9SVCB9IGZyb20gJy4vLi4vX3NoYXJlZC91dGlscydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBfUE9SVCh7XHJcbiAgbmFtZTogJ2FkZG9uLXBhZ2UnLFxyXG4gIHR5cGU6ICdjb250ZW50JyxcclxuICBldmVudHM6IHtcclxuICAgIE9ORU9GRjogW1xyXG4gICAgICAnY2hhbmdlOnN0eWxlLXNldHRpbmcnLFxyXG4gICAgICAnY2hhbmdlOmF1dG9ub3RlLXNldHRpbmcnLFxyXG4gICAgICAnY2hhbmdlOm1hcmstbWV0aG9kLXNldHRpbmcnLFxyXG4gICAgICAndG9nZ2xlOnNob3J0Y3V0LXNldHRpbmcnLFxyXG4gICAgICAnY2hhbmdlOnNob3J0Y3V0LXNldHRpbmcnLFxyXG4gICAgICAndG9nZ2xlOmN0bS1zZXR0aW5nJyxcclxuICAgICAgJ2NoYW5nZTpzYXZlb3B0LXNldHRpbmcnLFxyXG4gICAgICAndG9nZ2xlOnByaXYtc2V0dGluZycsXHJcbiAgICAgICdjaGFuZ2U6aW1tdXQtc2V0dGluZycsXHJcbiAgICAgICdjaGFuZ2U6ZHJvcExvc3Nlcy1zZXR0aW5nJyxcclxuICAgICAgJ2NoYW5nZTpuYW1pbmdvcHQtc2V0dGluZycsXHJcbiAgICAgICdjaGFuZ2U6c29ydC1zZXR0aW5nJyxcclxuICAgICAgJ2NoYW5nZTp2aWV3LXNldHRpbmcnLFxyXG4gICAgICAnY2hhbmdlOmhhc2gtc2V0dGluZycsXHJcbiAgICAgICd0b2dnbGU6bm90ZW9wdC1zZXR0aW5nJyxcclxuICAgICAgJ3RvZ2dsZTpxdWlja2J1dHRvbm9wdC1zZXR0aW5nJyxcclxuICAgICAgJ3N3aXRjaDpxdWlja2J1dHRvbm9wdC1zZXR0aW5nJyxcclxuICAgICAgJ3RvZ2dsZTpub3RpZmljYXRpb24tc2V0dGluZycsXHJcbiAgICAgICd0b2dnbGU6bWlzYy1zZXR0aW5nJyxcclxuICAgICAgJ2NoYW5nZTptaXNjLXNldHRpbmcnLFxyXG4gICAgICAndG9nZ2xlOnRiYnBvd2VyLXNldHRpbmcnLFxyXG4gICAgICAnY2hhbmdlOmF1dG9jcy1zZXR0aW5nJyxcclxuICAgICAgJ2NoYW5nZTppZnJhbWUtc2V0dGluZycsXHJcbiAgICAgICdhZGQ6Y3VzdG9tLW1hcmtlcicsXHJcbiAgICAgICdyZW1vdmU6Y3VzdG9tLW1hcmtlcicsXHJcbiAgICAgICdkZWxldGU6ZW50cmllcycsXHJcbiAgICAgICdjbGVhbjplbnRyaWVzJyxcclxuICAgICAgJ29wZW46ZW50cmllcycsXHJcbiAgICAgICdyZW5hbWU6ZW50cnknLFxyXG4gICAgICAndmlldzplbnRyeScsXHJcbiAgICAgICdzeW5jOmVudHJ5JyxcclxuICAgICAgJ3N5bmM6aGlzdG9yeScsXHJcbiAgICAgICdzeW5jOnNldHRpbmdzJyxcclxuICAgICAgJ2ltcG9ydDpzdG9yYWdlJyxcclxuICAgICAgJ3RvZ2dsZTpzeW5jJyxcclxuICAgICAgJ2NoYW5nZTpjdXN0b20tc2VhcmNoLXNldHRpbmcnLFxyXG4gICAgICAnY2hhbmdlZDpwZXItcGFnZS1jb3VudCcsXHJcbiAgICAgICdlcnJvcjpicm93c2VyLWNvbnNvbGUnLFxyXG4gICAgICAnY2xlYXI6bG9ncycsXHJcbiAgICAgICd0YWc6ZW50cmllcydcclxuICAgIF1cclxuICB9XHJcbn0pXHJcbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gIHZlcnNpb246IGJyb3dzZXIucnVudGltZS5nZXRNYW5pZmVzdCgpLnZlcnNpb24sXHJcbiAgc2V0dGluZ3M6e1xyXG4gICAgc2hvcnRjdXRzOiB7XHJcbiAgICAgIHo6IFsnY3RybEtleS1hbHRLZXknLCB0cnVlXSxcclxuICAgICAgeTogWydjdHJsS2V5LWFsdEtleScsIHRydWVdLFxyXG4gICAgICBzOiBbJ2N0cmxLZXktYWx0S2V5JywgdHJ1ZV0sXHJcbiAgICAgIGM6IFsnY3RybEtleS1hbHRLZXknLCBmYWxzZSwgdHJ1ZV0sXHJcbiAgICAgIGI6IFsnY3RybEtleS1hbHRLZXknLCB0cnVlLCB0cnVlXSxcclxuICAgICAgZDogWydzaGlmdEtleScsIGZhbHNlLCB0cnVlXSxcclxuICAgICAgJy1iJzogWycnLCAnJywgdHJ1ZV0sXHJcbiAgICAgIG06IFsnJywgdHJ1ZSwgdHJ1ZV0sXHJcbiAgICAgIHc6IFsnJywgdHJ1ZSwgdHJ1ZV0sXHJcbiAgICAgIG46IFsnJywgJycsIHRydWVdLFxyXG4gICAgICAnMic6IFsnJywgdHJ1ZV0sXHJcbiAgICAgICczJzogWycnLCB0cnVlXSxcclxuICAgICAgYXJyb3d1cDogWydhbHRLZXknLCBmYWxzZSwgZmFsc2VdLFxyXG4gICAgICBhcnJvd2Rvd246IFsnYWx0S2V5JywgZmFsc2UsIGZhbHNlXSxcclxuICAgICAgc2I6IFsnJywgJycsIHRydWVdLFxyXG4gICAgICBjbTogWycnLCB0cnVlXVxyXG4gICAgfSxcclxuICAgIG1hcmtlcnM6IHtcclxuICAgICAgJzEnOiB7IHN0eWxlOiAnYmFja2dyb3VuZC1jb2xvcjojZGQ5OWZmOycgfSxcclxuICAgICAgJzInOiB7IHN0eWxlOiAnYmFja2dyb3VuZC1jb2xvcjojNjZiYmZmOycgfSxcclxuICAgICAgJzMnOiB7IHN0eWxlOiAnYmFja2dyb3VuZC1jb2xvcjojNTVmZjU1OycgfSxcclxuICAgICAgJzQnOiB7IHN0eWxlOiAnYmFja2dyb3VuZC1jb2xvcjojZmY2NjY2O2NvbG9yOiNmZmZmZmY7JyB9LFxyXG4gICAgICAnNSc6IHsgc3R5bGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiNmZmNjMDA7JyB9LFxyXG4gICAgICBtOiB7IHN0eWxlOiAnYmFja2dyb3VuZC1jb2xvcjojZmZlZTAwOycgfVxyXG4gICAgfSxcclxuICAgIGhpc3Rvcnk6IHtcclxuICAgICAgYXV0b3NhdmU6IHRydWUsXHJcbiAgICAgIHNhdmVJblByaXY6IGZhbHNlLFxyXG4gICAgICBkcm9wTG9zc2VzOiB0cnVlLFxyXG4gICAgICBpbW11dDogZmFsc2UsXHJcbiAgICAgIG5hbWluZzogJ3RpdGxlJyxcclxuICAgICAgZG93bmxvYWQ6ICdqc29uJyxcclxuICAgICAgY29weTogJ3RleHQnLFxyXG4gICAgICBzYXZlTm90ZTogdHJ1ZSxcclxuICAgICAgc29ydGVkOiAnZGF0ZS1sYXN0JyxcclxuICAgICAgdmlldzogJ2xpc3QnLFxyXG4gICAgICBwcDogMTAsXHJcbiAgICAgIGlnbm9yZUhhc2g6IHRydWVcclxuICAgIH0sXHJcbiAgICBhZGRvbjoge1xyXG4gICAgICBhY3RpdmU6IHRydWUsXHJcbiAgICAgIGF1dG9jczogdHJ1ZSxcclxuICAgICAgaWZyYW1lczogdHJ1ZVxyXG4gICAgfSxcclxuICAgIG1pc2M6IHtcclxuICAgICAgYm1pY29uOiB0cnVlLFxyXG4gICAgICBub3RlaWNvbjogdHJ1ZSxcclxuICAgICAgbm90ZW9uY2xpY2s6IHRydWUsXHJcbiAgICAgIG5vdGV0cmFuc3A6IGZhbHNlLFxyXG4gICAgICBub3RlcGxhaW52aWV3OiBmYWxzZSxcclxuICAgICAgb3ZlcndyaXRlOiBmYWxzZSxcclxuICAgICAgZmFpbHVyZU5vdGU6IHRydWUsXHJcbiAgICAgIHN1Y2Nlc3NOb3RlOiB0cnVlLFxyXG4gICAgICBwYm1Ob3RlOiB0cnVlLFxyXG4gICAgICBjaGFuZ2VkTm90ZTogZmFsc2UsXHJcbiAgICAgIGVycm9yTm90ZTogdHJ1ZSxcclxuICAgICAgdmlwTm90ZTogdHJ1ZSxcclxuICAgICAgY3VzdG9tU2VhcmNoOiBmYWxzZSxcclxuICAgICAgdG11aXBvczogJ3RvcC1yaWdodCcsXHJcbiAgICAgIG1hcmttZXRob2Q6ICdwb3B1cCcsXHJcbiAgICAgIHByb2dyZXNzYmFyOiB0cnVlLFxyXG4gICAgICB0YmJwb3dlcjogZmFsc2VcclxuICAgIH0sXHJcbiAgICBzYjoge1xyXG4gICAgICB0YWJzOiB7XHJcbiAgICAgICAgbWV0YTogeyB1bmZvbGRlZDogZmFsc2UgfSxcclxuICAgICAgICB0YWdzOiB7IHVuZm9sZGVkOiBmYWxzZSB9LFxyXG4gICAgICAgIG5vdGVzOiB7IHVuZm9sZGVkOiBmYWxzZSB9LFxyXG4gICAgICAgIG1hcmtlcnM6IHsgdW5mb2xkZWQ6IHRydWUgfSxcclxuICAgICAgICBhY3Rpb25zOiB7IHVuZm9sZGVkOiB0cnVlIH0sXHJcbiAgICAgICAgbWFya3M6IHsgdW5mb2xkZWQ6IGZhbHNlIH0sXHJcbiAgICAgICAgbGlua3M6IHsgdW5mb2xkZWQ6IGZhbHNlIH0sXHJcbiAgICAgICAgdGhlbWVzOiB7IHVuZm9sZGVkOiBmYWxzZSB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHRoZW1lOiAnZGVmYXVsdCdcclxuICAgIH1cclxuICB9LFxyXG4gIGhpc3Rvcnk6IHtcclxuICAgIGVudHJpZXM6IHt9XHJcbiAgfSxcclxuICBwYWdlbm90ZXM6IHt9LFxyXG4gIHN5bmM6IHtcclxuICAgIHNldHRpbmdzOiBmYWxzZSxcclxuICAgIGhpc3Rvcnk6IGZhbHNlLFxyXG4gICAgcGFnZW5vdGVzOiBmYWxzZVxyXG4gIH1cclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5vdGVfcGJtOiAxLFxyXG4gIG5vdGVfcmVzdG9yYXRpb25fZmFpbHVyZTogMixcclxuICBub3RlX3VybDogMyxcclxuICBlcnJvcl9zYXZlX3N0eWxlOiA0LFxyXG4gIGVycm9yX3NhdmVfX3RvZ2dsZV9zYzogNSxcclxuICBlcnJvcl9zYXZlX2NoYW5nZV9zYzogNixcclxuICBlcnJvcl9zYXZlX2N0bTogNyxcclxuICBlcnJvcl9zYXZlX2F1dG9zYXZlOiA4LFxyXG4gIGVycm9yX3NhdmVfbmFtaW5nOiA5LFxyXG4gIGVycm9yX3NhdmVfbm90aWZ5OiAxMCxcclxuICBlcnJvcl9zYXZlX2Rvd25sb2FkOiAxMSxcclxuICBlcnJvcl9zYXZlX2JtaWNvbjogMTIsXHJcbiAgZXJyb3JfY2xlYW5faGlzdG9yeTogMTMsXHJcbiAgZXJyb3JfYWRkX21hcmtlcjogMTQsXHJcbiAgZXJyb3JfcmVtb3ZlX21hcmtlcjogMTUsXHJcbiAgZXJyb3Jfc2F2ZV9lbnRyeTogMTYsXHJcbiAgZXJyb3JfdXBkYXRlX2VudHJ5OiAxNyxcclxuICBlcnJvcl9kZWxfZW50cnk6IDE4LFxyXG4gIGVycm9yX2VtcHR5X3N5bmNlZF9zdG9yYWdlX29uc3RhcnQ6IDE5LFxyXG4gIGVycm9yX2VtcHR5X3N5bmNlZF9zdG9yYWdlX29udXBkYXRlOiAyMCxcclxuICBlcnJvcl9lbXB0eV9sb2NhbF9zdG9yYWdlX29uc3RhcnQ6IDIxLFxyXG4gIGVycm9yX2ltcG9ydF9lbXB0eTogMjIsXHJcbiAgZXJyb3JfaW1wb3J0X2hpc3Rvcnk6IDIzLFxyXG4gIGVycm9yX2ltcG9ydF9zZXR0aW5nczogMjQsXHJcbiAgZXJyb3JfaW1wb3J0X291dGRhdGVkOiAyNSxcclxuICBlcnJvcl9pbXBvcnRfaGlzdG9yeV9ub3RfZm91bmQ6IDI2LFxyXG4gIGVycm9yX2ltcG9ydF9zZXR0aW5nc19ub3RfZm91bmQ6IDI3LFxyXG4gIGVycm9yX25hbWluZzogMjgsXHJcbiAgZXJyb3Jfc3RvcmFnZV9taWdyYXRpb246IDI5LFxyXG4gIGVycm9yX2VtcHR5X2xvY2FsX3N0b3JhZ2Vfb251cGRhdGU6IDMwLFxyXG4gIGVycm9yX3RvZ2dsZV9zeW5jOiAzMSxcclxuICBlcnJvcl9zYXZlX3ByaXY6IDMyLFxyXG4gIG5vdGVfcmVzdG9yYXRpb25fd2FybmluZ18xOiAzMyxcclxuICBub3RlX3Jlc3RvcmF0aW9uX3dhcm5pbmdfMjogMzQsXHJcbiAgZXJyb3Jfc2F2ZV9jaGFuZ2VfYXV0b25vdGU6IDM1LFxyXG4gIGVycm9yX3NhdmVfbWFya19tZXRob2Q6IDM2LFxyXG4gIGpzX2luamVjdGlvbl9mYWlsdXJlOiAzNyxcclxuICBjc3NfaW5qZWN0aW9uX2ZhaWx1cmU6IDM4LFxyXG5cclxuICBnZXRLZXlCeVZhbHVlKHZhbCkge1xyXG4gICAgZm9yIChsZXQga2V5IGluIHRoaXMpIHtcclxuICAgICAgaWYgKHRoaXNba2V5XSA9PSB2YWwpIHtcclxuICAgICAgICByZXR1cm4ga2V5O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gJyc7XHJcbiAgfVxyXG59XHJcbiIsImNvbnN0IF9DT1BZID0gZnVuY3Rpb24oc3JjKSB7XHJcbiAgY29uc3QgdGFyZ2V0ID0gQXJyYXkuaXNBcnJheShzcmMpID8gW10gOiB7fTtcclxuICBsZXQgdmFsO1xyXG4gIGZvciAobGV0IHByb3AgaW4gc3JjKSB7XHJcbiAgICBpZiAoc3JjLmhhc093blByb3BlcnR5KHByb3ApKSB7XHJcbiAgICAgIHZhbCA9IHNyY1twcm9wXTtcclxuICAgICAgaWYgKHZhbCAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIHRhcmdldFtwcm9wXSA9IF9DT1BZKHZhbCk7XHJcbiAgICAgIH0gZWxzZVxyXG4gICAgICAgIHRhcmdldFtwcm9wXSA9IHZhbDtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHRhcmdldDtcclxufVxyXG5cclxuZXhwb3J0IHsgX0NPUFkgfVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi9tb2R1bGUnXHJcblxyXG5leHBvcnQgY2xhc3MgX0RPTU1PRFVMRSBleHRlbmRzIF9NT0RVTEUge1xyXG5cclxuICBjb25zdHJ1Y3RvcihvYmopIHtcclxuICAgIG9iai5fYm91bmQgPSB7fTtcclxuICAgIG9iai5fZXh0cmFCb3VuZCA9IFtdO1xyXG5cclxuICAgIHN1cGVyKG9iailcclxuXHJcbiAgICB0aGlzLmFkZExpc3RlbmVyc01hbnVhbGx5IHx8IHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcbiAgICAhdGhpcy5hdXRvUGF1c2UgfHwgdGhpcy5zZXRBdXRvUGF1c2UoKTtcclxuICB9XHJcbiAgZ2VuZXJhbEhhbmRsZXIoc3ViTWFwLCB0eXBlLCBlKSB7XHJcbiAgICBsZXQgZWwgPSBlLnRhcmdldCxcclxuICAgICAgICBzZWxlY3RvciwgX3NlbCwgbWV0aCwgZiwgaXNJZCwgaXNDbGFzcywgaXNEb2M7XHJcblxyXG4gICAgZm9yIChzZWxlY3RvciBpbiBzdWJNYXApIHtcclxuICAgICAgZiA9IHNlbGVjdG9yWzBdO1xyXG4gICAgICBfc2VsID0gc2VsZWN0b3I7XHJcbiAgICAgIGlzSWQgPSBmID09PSAnIyc7XHJcbiAgICAgIGlzQ2xhc3MgPSBmID09PSAnLic7XHJcbiAgICAgIGlzRG9jID0gZiA9PT0gJyonO1xyXG5cclxuICAgICAgaWYgKGlzSWQgfHwgaXNDbGFzcykgc2VsZWN0b3IgPSBzZWxlY3Rvci5zdWJzdHIoMSk7XHJcblxyXG4gICAgICBpZiAoaXNEb2MgfHxcclxuICAgICAgICAgIGlzQ2xhc3MgJiYgZWwuY2xhc3NMaXN0LmNvbnRhaW5zKHNlbGVjdG9yKSB8fFxyXG4gICAgICAgICAgaXNJZCAmJiBlbC5pZCA9PT0gc2VsZWN0b3IgfHxcclxuICAgICAgICAgIGVsLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09IHNlbGVjdG9yXHJcbiAgICAgICkge1xyXG5cclxuICAgICAgICBtZXRoID0gc3ViTWFwW19zZWxdO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIG1ldGggPT09ICdmdW5jdGlvbicpIG1ldGgoZSwgZWwpO1xyXG4gICAgICAgIGVsc2UgaWYgKHRoaXNbbWV0aF0pIHRoaXNbbWV0aF0oZSwgZWwpO1xyXG5cclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBzZXRBdXRvUGF1c2UoKSB7XHJcbiAgICB0aGlzLm9uKCd0b2dnbGVkOmFkZG9uJywgb24gPT4ge1xyXG4gICAgICBpZiAob24pIHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcbiAgICAgIGVsc2UgdGhpcy5yZW1vdmVMaXN0ZW5lcnMoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBhZGRMaXN0ZW5lcih0eXBlLCBtZXRoLCBlbCkge1xyXG4gICAgZWwgPSBlbCB8fCB0aGlzLmVsO1xyXG4gICAgY29uc3QgaGFuZGxlciA9IHR5cGVvZiBtZXRoID09PSAnZnVuY3Rpb24nID8gbWV0aCA6IHRoaXNbbWV0aF07XHJcblxyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyLCBmYWxzZSk7XHJcblxyXG4gICAgaWYgKGVsID09PSB0aGlzLmVsKSB7XHJcbiAgICAgIGlmICghdGhpcy5fYm91bmRbdHlwZV0pIHRoaXMuX2JvdW5kW3R5cGVdID0gW107XHJcbiAgICAgIHRoaXMuX2JvdW5kW3R5cGVdLnB1c2goaGFuZGxlcik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9leHRyYUJvdW5kLnB1c2goW2VsLCB0eXBlLCBoYW5kbGVyXSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGFkZExpc3RlbmVycygpIHtcclxuICAgIGxldCBldmVudHMgPSB0aGlzLmV2ZW50cyxcclxuICAgICAgICBkb21FdmVudHMsIGVsLCBzdWJNYXAsIHR5cGUsIGhhbmRsZXI7XHJcblxyXG4gICAgaWYgKCFldmVudHMgfHwgIShkb21FdmVudHMgPSBldmVudHMuRE9NKSB8fCAhKGVsID0gdGhpcy5lbCkpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICBmb3IgKHR5cGUgaW4gZG9tRXZlbnRzKSB7XHJcbiAgICAgIHN1Yk1hcCA9IGRvbUV2ZW50c1t0eXBlXTtcclxuICAgICAgaGFuZGxlciA9IHRoaXMucHJveHkodGhpcywgdGhpcy5nZW5lcmFsSGFuZGxlciwgc3ViTWFwLCB0eXBlKTtcclxuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAgIGlmICghdGhpcy5fYm91bmRbdHlwZV0pIHRoaXMuX2JvdW5kW3R5cGVdID0gW107XHJcbiAgICAgIHRoaXMuX2JvdW5kW3R5cGVdLnB1c2goaGFuZGxlcik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlbW92ZUxpc3RlbmVycygpIHtcclxuICAgIGxldCB0eXBlLCBfYm91bmQsIGw7XHJcblxyXG4gICAgZm9yICh0eXBlIGluIHRoaXMuX2JvdW5kKSB7XHJcbiAgICAgIF9ib3VuZCA9IHRoaXMuX2JvdW5kW3R5cGVdO1xyXG4gICAgICBsID0gX2JvdW5kLmxlbmd0aDtcclxuICAgICAgd2hpbGUgKGwtLSkge1xyXG4gICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBfYm91bmRbbF0sIGZhbHNlKTtcclxuICAgICAgICBfYm91bmQuc3BsaWNlKGwsIDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IF9leHRyYSA9IHRoaXMuX2V4dHJhQm91bmQsIGkgPSAwLCBzZXQ7XHJcbiAgICBsID0gX2V4dHJhLmxlbmd0aDtcclxuXHJcbiAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xyXG4gICAgICBzZXQgPSBfZXh0cmFbaV07XHJcbiAgICAgIHNldFswXS5yZW1vdmVFdmVudExpc3RlbmVyKHNldFsxXSwgc2V0WzJdLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuL21vZHVsZSdcclxuXHJcbmNvbnN0IF9FUlJPUlRSQUNLRVIgPSBuZXcgX01PRFVMRSh7XHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlcnJvciA9PiB7XHJcbiAgICAgIGNvbnN0IGZpbGUgPSBlcnJvci5maWxlbmFtZS5zcGxpdCgnLycpLnBvcCgpO1xyXG4gICAgICBpZiAoWydzaWRlYmFyLndwLmpzJywgJ3RiYi1tZW51LndwLmpzJywgJ29wdGlvbnMud3AuanMnLCAnYWRkb24tcGFnZS53cC5qcyddLmluY2x1ZGVzKGZpbGUpKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdlcnJvcjpicm93c2VyLWNvbnNvbGUnLCB7XHJcbiAgICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLFxyXG4gICAgICAgICAgbG9jYXRpb246IGVycm9yLmZpbGVuYW1lLnNwbGl0KCcvJykucG9wKCkuc3BsaXQoJy4nKS5zaGlmdCgpICsgJzonICsgZXJyb3IubGluZW5vICsgJzonICsgZXJyb3IuY29sbm8sXHJcbiAgICAgICAgICB0aW1lOiAobmV3IERhdGUoKSkuZ2V0VGltZSgpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0sIGZhbHNlKTtcclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgX0VSUk9SVFJBQ0tFUjtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob2JqMSwgb2JqMikge1xyXG4gIGZvciAodmFyIGkgaW4gb2JqMilcclxuICAgIGlmICghb2JqMVtpXSkgb2JqMVtpXSA9IG9iajJbaV07XHJcblxyXG4gIHJldHVybiBvYmoxO1xyXG59XHJcbiIsImNvbnN0IF9HRVRfQUNUSVZFX1RBQiA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICByZXR1cm4gYnJvd3Nlci50YWJzLnF1ZXJ5KHsgY3VycmVudFdpbmRvdzogdHJ1ZSwgYWN0aXZlOiB0cnVlIH0pLnRoZW4odGFicyA9PiB0YWJzWzBdKTtcclxufVxyXG5cclxuZXhwb3J0IHsgX0dFVF9BQ1RJVkVfVEFCIH1cclxuIiwiY29uc3QgX0hBU0hMRVNTID0gZnVuY3Rpb24odXJsKSB7XHJcbiAgY29uc3QgaCA9IHVybC5sYXN0SW5kZXhPZignIycpO1xyXG4gIGlmIChoID09PSAtMSkgcmV0dXJuIHVybDtcclxuICBlbHNlIHJldHVybiB1cmwuc3Vic3RyKDAsIGgpO1xyXG59XHJcblxyXG5leHBvcnQgeyBfSEFTSExFU1MgfVxyXG4iLCIvKlxyXG4qIFRyYW5zbGF0ZXMgYSBIVE1sIHBhZ2UgaW4gdGhlIHdlYiBsMTBuIHN0eWxlIGZyb20gdGhlIEFkZC1vbiBTREsgd2l0aCBXZWJFeHRlbnNpb25zIHN0cmluZ3MuXHJcbiogTW9kaWZpZWQgYnkgdW5kZXJmbHlpbmdiaXJjaGVzXHJcbipcclxuKiBAYXV0aG9yIE1hcnRpbiBHaWdlclxyXG4qIEBzZWUge0BsaW5rIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2ZyZWFrdGVjaG5pay80YTcyYmMwNzExZDliYzgyY2YzYjA3NWJjYzI5Mjk1M31cclxuKiBAbGljZW5zZSBNUEwtMi4wXHJcbiovXHJcbmZ1bmN0aW9uIHRyYW5zbGF0ZURvY3VtZW50KCkge1xyXG4gIGxldCBlbCwgZGF0YSwgZGF0YXNldDtcclxuICAvLyBTZXQgdGhlIGxhbmd1YWdlIGF0dHJpYnV0ZSBvZiB0aGUgZG9jdW1lbnQuXHJcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZSgnbGFuZycsIGJyb3dzZXIuaTE4bi5nZXRVSUxhbmd1YWdlKCkucmVwbGFjZSgnXycsICctJykpO1xyXG4gIC8vIEdldCBhbGwgZWxlbWVudHMgdGhhdCBhcmUgbWFya2VkIGFzIGJlaW5nIHRyYW5zbGF0ZWFibGUuXHJcbiAgY29uc3QgdGV4dEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnKltkYXRhLWwxMG4taWRdJyk7XHJcbiAgY29uc3QgYXR0ckVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnKltkYXRhLWwxMG4tYXR0cl0nKTtcclxuXHJcbiAgZm9yKGVsIG9mIHRleHRFbGVtZW50cykge1xyXG4gICAgZGF0YXNldCA9IGVsLmRhdGFzZXQ7XHJcbiAgICBjb25zdCBsMTBuSWQgPSBkYXRhc2V0LmwxMG5JZDtcclxuXHJcbiAgICBpZiAobDEwbklkKSB7XHJcbiAgICAgIGRhdGEgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShsMTBuSWQsICcnKTtcclxuXHJcbiAgICAgIGlmKGRhdGEgJiYgZGF0YSAhPSAnPz8nKSB7XHJcbiAgICAgICAgZWwudGV4dENvbnRlbnQgPSBkYXRhO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZvcihlbCBvZiBhdHRyRWxlbWVudHMpIHtcclxuICAgIGRhdGFzZXQgPSBlbC5kYXRhc2V0O1xyXG5cclxuICAgIFsnVGl0bGUnLCAnUGxhY2Vob2xkZXInXS5mb3JFYWNoKGF0dHIgPT4ge1xyXG4gICAgICBjb25zdCBsMTBuQXR0ciA9IGRhdGFzZXRbJ2wxMG4nICsgYXR0cl07XHJcblxyXG4gICAgICBpZiAobDEwbkF0dHIpIHtcclxuICAgICAgICBkYXRhID0gYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UobDEwbkF0dHIpO1xyXG5cclxuICAgICAgICBpZiAoZGF0YSAmJiBkYXRhICE9ICc/PycpIHtcclxuICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZShhdHRyLnRvTG93ZXJDYXNlKCksIGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4gdHJhbnNsYXRlRG9jdW1lbnQoKSwge1xyXG4gICAgY2FwdHVyZTogZmFsc2UsXHJcbiAgICBwYXNzaXZlOiB0cnVlLFxyXG4gICAgb25jZTogdHJ1ZVxyXG4gIH0pO1xyXG59XHJcbiIsImxldCB0b3BpY3MgPSB7fTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcclxuXHJcbiAgb24oZXZlbnQsIGhhbmRsZXIpIHtcclxuICAgIGlmICghdG9waWNzW2V2ZW50XSkgdG9waWNzW2V2ZW50XSA9IFtdO1xyXG5cclxuICAgIHRvcGljc1tldmVudF0ucHVzaChoYW5kbGVyKTtcclxuICB9XHJcbiAgZW1pdChldmVudHMsIC4uLmFyZ3MpIHtcclxuICAgIGV2ZW50cyA9IGV2ZW50cy5zcGxpdCgnICcpO1xyXG5cclxuICAgIGxldCBpID0gMCwgbCA9IGV2ZW50cy5sZW5ndGgsIHRvcGljO1xyXG5cclxuICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgIHRvcGljID0gdG9waWNzW2V2ZW50c1tpXV07XHJcblxyXG4gICAgICBpZiAodG9waWMpXHJcbiAgICAgICAgdG9waWMuZm9yRWFjaChoYW5kbGVyID0+IGhhbmRsZXIuYXBwbHkodGhpcywgYXJncykpXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlcXVlc3QoZXZlbnQsIC4uLmFyZ3MpIHtcclxuICAgIHJldHVybiBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoeyBldjogZXZlbnQsIGFyZ3M6IGFyZ3MsIHdhaXQ6IHRydWUgfSkuY2F0Y2goKCkgPT4ge30pO1xyXG4gIH1cclxuICBwcm94eShjb250ZXh0LCBmdW5jLCAuLi5hcmdzMSkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKC4uLmFyZ3MyKSB7XHJcbiAgICAgIHJldHVybiBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MxLmNvbmNhdChhcmdzMikpO1xyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IF9NRURJQVRPUiBmcm9tICcuL21lZGlhdG9yJ1xyXG5cclxuZXhwb3J0IGNsYXNzIF9NT0RVTEUgZXh0ZW5kcyBfTUVESUFUT1Ige1xyXG5cclxuICBjb25zdHJ1Y3RvcihvYmopIHtcclxuICAgIHN1cGVyKClcclxuXHJcbiAgICBmb3IgKG8gaW4gb2JqKSB0aGlzW29dID0gb2JqW29dO1xyXG5cclxuICAgIGxldCBldmVudHMgPSB0aGlzLmV2ZW50cyxcclxuICAgICAgICBlbnZFdmVudHMsIG8sIGUsIGhhbmRsZXI7XHJcblxyXG4gICAgaWYgKGV2ZW50cyAmJiAoZW52RXZlbnRzID0gZXZlbnRzLkVOVikpIHtcclxuICAgICAgZm9yIChlIGluIGVudkV2ZW50cykge1xyXG4gICAgICAgIGhhbmRsZXIgPSBlbnZFdmVudHNbZV07XHJcbiAgICAgICAgaWYgKHRoaXNbaGFuZGxlcl0pXHJcbiAgICAgICAgICB0aGlzLm9uKGUsIHRoaXMucHJveHkodGhpcywgdGhpc1toYW5kbGVyXSkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAhdGhpcy5hdXRvaW5pdCB8fCB0aGlzLmF1dG9pbml0KCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuL21vZHVsZSdcclxuXHJcbmV4cG9ydCBjbGFzcyBfUE9SVCBleHRlbmRzIF9NT0RVTEUge1xyXG5cclxuICBjb25zdHJ1Y3RvcihvYmopIHtcclxuICAgIHN1cGVyKG9iailcclxuXHJcbiAgICB0aGlzLnBvcnQgPSBudWxsO1xyXG5cclxuICAgIGNvbnN0IHR5cGUgPSB0aGlzLnR5cGU7XHJcblxyXG4gICAgYnJvd3Nlci5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcih0aGlzLnByb3h5KHRoaXMsIHRoaXMucGFzc01lc3NhZ2UpKTtcclxuXHJcbiAgICBpZiAodHlwZSA9PT0gJ3ByaXZpbGVnZWQnIHx8IHR5cGUgPT09ICdiYWNrZ3JvdW5kJykgdGhpcy5pbml0UG9ydGluZygpO1xyXG5cclxuICAgIHRoaXMucmVnaXN0ZXJQb3J0RXZlbnRzKCk7XHJcbiAgfVxyXG4gIGV4dGVuZChldmVudHMpIHtcclxuICAgIHRoaXMucmVnaXN0ZXJQb3J0RXZlbnRzKGV2ZW50cyk7XHJcbiAgfVxyXG4gIHJlZ2lzdGVyUG9ydEV2ZW50cyhldmVudHMpIHtcclxuICAgIGV2ZW50cyA9IGV2ZW50cyB8fCB0aGlzLmV2ZW50cztcclxuICAgIGxldCBvbmVPZmZFdmVudHMsIGNvbm5lY3Rpb25CYXNlZEV2ZW50cztcclxuXHJcbiAgICBpZiAoZXZlbnRzKSB7XHJcbiAgICAgIG9uZU9mZkV2ZW50cyA9IGV2ZW50cy5PTkVPRkY7XHJcbiAgICAgIGlmIChvbmVPZmZFdmVudHMpIHtcclxuICAgICAgICBmb3IgKGxldCBlIG9mIG9uZU9mZkV2ZW50cylcclxuICAgICAgICAgIHRoaXMub24oZSwgdGhpcy5wcm94eSh0aGlzLCB0aGlzLnNlbmRNZXNzYWdlLCBlKSk7XHJcbiAgICAgIH1cclxuICAgICAgY29ubmVjdGlvbkJhc2VkRXZlbnRzID0gZXZlbnRzLkNPTk5FQ1RJT047XHJcbiAgICAgIGlmIChjb25uZWN0aW9uQmFzZWRFdmVudHMpIHtcclxuICAgICAgICBmb3IgKGxldCBmIG9mIGNvbm5lY3Rpb25CYXNlZEV2ZW50cylcclxuICAgICAgICAgIHRoaXMub24oZiwgdGhpcy5wcm94eSh0aGlzLCB0aGlzLnBvc3RNZXNzYWdlLCBmKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcGFzc01lc3NhZ2UocmVxLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkge1xyXG4gICAgcmVxLmFyZ3MgPSByZXEuYXJncyB8fCBbXTtcclxuICAgIGxldCBhcmdzID0gW10uY29uY2F0KHJlcS5ldiwgcmVxLmFyZ3MpO1xyXG4gICAgaWYgKCFzZW5kZXIgfHwgIXNlbmRlci5uYW1lKSBhcmdzID0gYXJncy5jb25jYXQoc2VuZGVyLCBzZW5kUmVzcG9uc2UpO1xyXG4gICAgdGhpcy5lbWl0LmFwcGx5KHRoaXMsIGFyZ3MpO1xyXG4gICAgaWYgKHJlcS53YWl0KSByZXR1cm4gdHJ1ZTsgLy8gdGhpcyB3aWxsIGtlZXAgdGhlIG1lc3NhZ2UgY2hhbm5lbCBvcGVuIHRvIHRoZSBvdGhlciBlbmQgdW50aWwgYHNlbmRSZXNwb25zZWAgaXMgY2FsbGVkXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIHNlbmRNZXNzYWdlKGUsIC4uLmFyZ3MpIHtcclxuICAgIGNvbnN0IHR5cGUgPSB0aGlzLnR5cGU7XHJcbiAgICBsZXQgbXNnID0geyBldjogZSwgYXJnczogYXJncyB9O1xyXG4gICAgaWYgKHR5cGUgPT09ICdjb250ZW50JykgYnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlKG1zZykuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ2JhY2tncm91bmQnKSB7XHJcbiAgICAgIGNvbnN0IGxhc3RBcmcgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV07XHJcbiAgICAgIGxldCB0YWI7XHJcbiAgICAgIGlmIChsYXN0QXJnICYmICh0YWIgPSBsYXN0QXJnLnRhYikpIHtcclxuICAgICAgICBpZiAodGFiID09PSAnYWN0aXZlJykge1xyXG4gICAgICAgICAgYnJvd3Nlci50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlIH0pLnRoZW4odGFicyA9PiB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHRhYiBvZiB0YWJzKVxyXG4gICAgICAgICAgICAgIGJyb3dzZXIudGFicy5zZW5kTWVzc2FnZSh0YWIuaWQsIG1zZywgeyBmcmFtZUlkOiBsYXN0QXJnLmZyYW1lSWQgfHwgMCB9KS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYnJvd3Nlci50YWJzLnNlbmRNZXNzYWdlKGxhc3RBcmcudGFiLCBtc2csIHsgZnJhbWVJZDogbGFzdEFyZy5mcmFtZUlkIHx8IDAgfSkuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBicm93c2VyLnRhYnMucXVlcnkoey8qIGN1cnJlbnRXaW5kb3c6IGZhbHNlLCBhY3RpdmU6IGZhbHNlICovfSkudGhlbih0YWJzID0+IHtcclxuICAgICAgICAgIGZvciAobGV0IHRhYiBvZiB0YWJzKVxyXG4gICAgICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UodGFiLmlkLCBtc2cpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBwb3N0TWVzc2FnZShlLCAuLi5hcmdzKSB7XHJcbiAgICBjb25zdCBtc2cgPSB7IGV2OiBlLCBhcmdzOiBhcmdzIH07XHJcbiAgICBpZiAodGhpcy5wb3J0KSB0aGlzLnBvcnQucG9zdE1lc3NhZ2UobXNnKTtcclxuICB9XHJcbiAgaW5pdFBvcnRpbmcoKSB7XHJcbiAgICBpZiAoIXRoaXMucG9zdHBvbmVDb25uZWN0aW9uKSB7XHJcbiAgICAgIHRoaXMuY29ubmVjdCgpO1xyXG4gICAgICB0aGlzLmFkZENvbm5lY3Rpb25MaXN0ZW5lcnMoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuYWRkQ29ubmVjdGlvbkxpc3RlbmVycyh0aGlzLnByb3h5KHRoaXMsIHRoaXMuY29ubmVjdCkpO1xyXG4gICAgfVxyXG4gIH1cclxuICBjb25uZWN0KCkge1xyXG4gICAgY29uc3QgcG9ydCA9IHRoaXMucG9ydCA9IHRoaXMucG9ydCB8fCBicm93c2VyLnJ1bnRpbWUuY29ubmVjdCh7IG5hbWU6IHRoaXMubmFtZSB9KTtcclxuICAgIHBvcnQub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKCgpID0+IHRoaXMucG9ydCA9IG51bGwpO1xyXG4gIH1cclxuICBhZGRDb25uZWN0aW9uTGlzdGVuZXJzKGNiKSB7XHJcbiAgICBicm93c2VyLnJ1bnRpbWUub25Db25uZWN0LmFkZExpc3RlbmVyKHBvcnQgPT4ge1xyXG4gICAgICBwb3J0Lm9uTWVzc2FnZS5hZGRMaXN0ZW5lcih0aGlzLnByb3h5KHRoaXMsIHRoaXMucGFzc01lc3NhZ2UpKTtcclxuICAgICAgIWNiIHx8IGNiKCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vbW9kdWxlJ1xyXG5pbXBvcnQgX0RFRkFVTFRfU1RPUkFHRSBmcm9tICcuLi9kYXRhL2RlZmF1bHQtc3RvcmFnZSdcclxuXHJcbmV4cG9ydCBjbGFzcyBfU1RPUkUgZXh0ZW5kcyBfTU9EVUxFIHtcclxuXHJcbiAgY29uc3RydWN0b3Iob2JqKSB7XHJcbiAgICBzdXBlcihvYmopXHJcblxyXG4gICAgdGhpcy5pbml0aWFsaXplZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5pbml0aWFsaXppbmcgPSBmYWxzZTtcclxuXHJcbiAgICB0aGlzLmFyZWFfc2V0dGluZ3MgPSBfREVGQVVMVF9TVE9SQUdFLnN5bmMuc2V0dGluZ3MgPyAnc3luYycgOiAnbG9jYWwnO1xyXG4gICAgdGhpcy5hcmVhX2hpc3RvcnkgPSBfREVGQVVMVF9TVE9SQUdFLnN5bmMuaGlzdG9yeSA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgICB0aGlzLmFyZWFfcGFnZW5vdGVzID0gX0RFRkFVTFRfU1RPUkFHRS5zeW5jLnBhZ2Vub3RlcyA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgfVxyXG5cclxuICBpbml0KCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoc3RvcmFnZSAmJiBzdG9yYWdlLnN5bmMpIHtcclxuICAgICAgICB0aGlzLnNldEFyZWFzKHN0b3JhZ2Uuc3luYyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0QXJlYXMoc3luYykge1xyXG4gICAgZm9yIChsZXQgYXJlYSBpbiBzeW5jKSB7XHJcbiAgICAgIHRoaXNbJ2FyZWFfJyArIGFyZWFdID0gc3luY1thcmVhXSA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblRvZ2dsZWRTeW5jKCkge1xyXG4gICAgdGhpcy5pbml0KCkudGhlbigoKSA9PiB0aGlzLmVtaXQoJ3NldC1hcmVhcy1hZnRlci1zeW5jLWNoYW5nZScpKTtcclxuICB9XHJcblxyXG4gIGdldChmaWVsZCA9ICdzdG9yYWdlJykge1xyXG4gICAgaWYgKHRoaXMuaW5pdGlhbGl6aW5nKSB7XHJcbiAgICAgIHJldHVybiAobmV3IFByb21pc2UociA9PiB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiByKHRoaXMuZ2V0KGZpZWxkKSksIDEwKSkpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbWV0aCA9IHRoaXNbJ19nZXRfJyArIGZpZWxkXTtcclxuICAgIGlmICghbWV0aCkgdGhyb3coJ2ZpZWxkICcgKyBmaWVsZCArICcgZG9lc25cXCd0IGV4aXN0Jyk7XHJcblxyXG4gICAgaWYgKCF0aGlzLmluaXRpYWxpemVkKSB7XHJcbiAgICAgIHRoaXMuaW5pdGlhbGl6aW5nID0gdHJ1ZTtcclxuICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5pbml0KCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXppbmcgPSBmYWxzZTtcclxuICAgICAgICByZXR1cm4gdGhpc1snX2dldF8nICsgZmllbGRdKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXNbJ19nZXRfJyArIGZpZWxkXSgpO1xyXG4gIH1cclxuXHJcbiAgX2dldF9zdG9yYWdlKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKGxvY2FsU3RvcmFnZSA9PiB7XHJcbiAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKS50aGVuKHN5bmNlZFN0b3JhZ2UgPT4ge1xyXG4gICAgICAgIFsndmVyc2lvbicsICdsb2dzJ10uZm9yRWFjaChmaWVsZCA9PiB7XHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2VbZmllbGRdID0gbG9jYWxTdG9yYWdlW2ZpZWxkXSB8fCBzeW5jZWRTdG9yYWdlW2ZpZWxkXTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAodGhpcy5hcmVhX3NldHRpbmdzID09PSAnc3luYycpIGxvY2FsU3RvcmFnZS5zZXR0aW5ncyA9IHN5bmNlZFN0b3JhZ2Uuc2V0dGluZ3M7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldF9oaXN0b3J5KCkudGhlbihoaXN0b3J5ID0+IHtcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5oaXN0b3J5ID0gaGlzdG9yeTtcclxuICAgICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIF9nZXRfbG9jYWxfc3RvcmFnZSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCk7XHJcbiAgfVxyXG4gIF9nZXRfc3luY2VkX3N0b3JhZ2UoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCk7XHJcbiAgfVxyXG4gIF9nZXRfaGlzdG9yeSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKS50aGVuKHN5bmNlZFN0b3JhZ2UgPT4ge1xyXG4gICAgICBjb25zdCBzeW5jZWRIaXN0b3J5ID0gc3luY2VkU3RvcmFnZS5oaXN0b3J5O1xyXG5cclxuICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKGxvY2FsU3RvcmFnZSA9PiB7XHJcbiAgICAgICAgY29uc3QgbG9jYWxIaXN0b3J5ID0gbG9jYWxTdG9yYWdlLmhpc3Rvcnk7XHJcbiAgICAgICAgaWYgKCFzeW5jZWRIaXN0b3J5KSByZXR1cm4gbG9jYWxIaXN0b3J5O1xyXG4gICAgICAgIGlmICghbG9jYWxIaXN0b3J5KSByZXR1cm4gc3luY2VkSGlzdG9yeTtcclxuXHJcbiAgICAgICAgLy9zeW5jZWRIaXN0b3J5Lm9yZGVyID0gc3luY2VkSGlzdG9yeS5vcmRlci5jb25jYXQobG9jYWxIaXN0b3J5Lm9yZGVyKTtcclxuICAgICAgICBmb3IgKGxldCBlIGluIGxvY2FsSGlzdG9yeS5lbnRyaWVzKSBzeW5jZWRIaXN0b3J5LmVudHJpZXNbZV0gPSBsb2NhbEhpc3RvcnkuZW50cmllc1tlXTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHN5bmNlZEhpc3Rvcnk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIF9nZXRfc2V0dGluZ3MoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHN0b3JhZ2Uuc2V0dGluZ3MgfHwgX0RFRkFVTFRfU1RPUkFHRS5zZXR0aW5ncyk7XHJcbiAgfVxyXG4gIF9nZXRfbG9ncygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihsb2NhbFN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIWxvY2FsU3RvcmFnZSB8fCAhbG9jYWxTdG9yYWdlLmxvZ3MpIHJldHVybiBbXTtcclxuICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5sb2dzO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIF9nZXRfdmVyc2lvbigpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihsb2NhbFN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIWxvY2FsU3RvcmFnZSB8fCAhbG9jYWxTdG9yYWdlLnZlcnNpb24pIHtcclxuICAgICAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCkudGhlbihzeW5jZWRTdG9yYWdlID0+IHN5bmNlZFN0b3JhZ2UudmVyc2lvbiB8fCAnJyk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS52ZXJzaW9uO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=