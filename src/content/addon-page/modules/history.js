import { _DOMMODULE } from './../../_shared/utils'
import _STORE from './../_store'
import _TOGGLER from './toggler'
import _SORT from './history-sort'

export default function() {
  return new _DOMMODULE({
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

    init(tab) {
      if (tab !== 'history') return;
      if (!this.initialized) this.render();
      this.initialized = true;
    },
    resume() {
      this.filterOptionsSet = false;
      this.tags = [];
    },

    ['delete'](names) {
      let msg = 'del_confirm';
      let l = names.length;

      while (l--) {
        if (this.entries[names[l]].locked) {
          msg += '_locked';
          break;
        }
      }

      let confirmed = window.confirm(browser.i18n.getMessage(msg));
      if (confirmed) this.emit('delete:entries', names);
    },
    clean(names) {
      this.emit('clean:entries', names);
    },
    download(names, type, spec) {
      if (typeof type !== 'string') {
        return _STORE.get('download_option').then(settings => {
          settings = settings.split(' ');
          type = settings[0];
          spec = settings.length === 2 ? settings[1] : undefined;
          if (type === 'json') this.export(names);
          else this.download(names, type, spec);
        });
      }
      this.getData(names, type, spec).then(data => {
        let text = encodeURIComponent(data),
            link = document.createElement('a');

        link.setAttribute('download', 'Textmarker (' + names.join('_') + ').txt');
        link.href = 'data:text/plain;charset=utf-8,' + text;

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
    },
    export(names) {
      let backup = { history: { entries: {} } },
          entries = backup.history.entries,
          link = document.createElement('a');

      _STORE.get('history').then(history => {
        let name;
        while (names.length) {
          name = names.pop();
          entries[name] = history.entries[name];
        }
        backup = encodeURIComponent(JSON.stringify(backup));
        link.setAttribute('download',
          'Textmarker-backup-' +
          (new Date().toLocaleString().replace(/\D/g, '_')) +
          '.json'
        );
        link.href = 'data:text/json;charset=utf-8,' + backup;

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
    },
    sync(name, el) {
      this.emit('sync:entry', name[0], el.classList.contains('active'));
    },
    visit(names) {
      this.getURLs(names).then(urls => this.emit('open:entries', urls, names));
    },
    open(e, el) {
      this.emit('open:entries', el.getAttribute('data-url'), el.getAttribute('data-name'));
    },
    edit(e, el) {
      const newName = window.prompt(browser.i18n.getMessage('nm_message_edit'));
      if (newName) {
        const oldName = el.getAttribute('data-name');
        const area = el.parentNode.getElementsByClassName('switch--sync')[0].classList.contains('active') ?
          'sync' : 'local';
        this.emit('rename:entry', oldName, newName, area);
      }
    },
    view(e, el) {
      this.emit('view:entry', el.getAttribute('data-name'));
    },
    tag(names, tag, force) {
      if (!tag && !force) return;
      const o = { sync: [], local: [] };
      names.forEach(name => {
        if (this.origEntries[name].synced) o.sync.push(name);
        else o.local.push(name);
      });
      this.emit('tag:entries', o, tag);
    },
    removeTags(names) {
      this.tag(names, '', true);
    },
    processSelection() {
      let checked = document.querySelectorAll('.entry-cb:checked'),
          i = checked.length;

      if (!i) return false;

      let action = document.getElementById('action').value,
          names = [];

      while(i--) names.push(checked[i].getAttribute('data-name'));

      if (action === 'tag') {
        let val = document.getElementById('tag').value;
        this.tag(names, val);
      } else {
        let split = document.getElementById('specification').value.split(' '),
            type = split[0],
            spec = split[1];

        !this[action] || this[action](names, type, spec);
      }
    },
    renderEntries() {
      let template = this.entryTmpl,
          container = this.entriesContainer,
          entries = this.entries,
          searchTerm = this.searchTerm,
          searchTermLength = searchTerm ? searchTerm.length : 0,
          searched = !!searchTerm,
          searchedFullText = this.searchedFullText,
          names = searched ? this.searched : this.names,
          l = searched ? names.length : this.page * this.perPage,
          i = searched ? 0 : l - this.perPage,
          clone, entry, name, nameField, input, label, infoButton, details, searchResults,
          buttons, edit, view, tags, immut, immutEl, locked, lockedEl, tagEl, b, j;

      if (this.filtered) {
        names = names.filter(n => !!entries[n]);
      }

      l = Math.min(l, names.length);

      container.innerText = '';

      document.getElementById('checkmark-all').checked = false;

      if (!l) return this;

      for (; i < l; i++) {
        ((i, j) => {
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

            while(b--) {
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
              tags.forEach(tag => {
                let el = document.createElement('span');
                tagEl.appendChild(el);
                el.className = 'tags__item';
                el.appendChild(document.createTextNode(tag));
                el.setAttribute('title', browser.i18n.getMessage('title_filter'));
              });
            } else {
              tagEl.innerText = browser.i18n.getMessage('detail_notag');
            }

            clone.getElementsByClassName('created')[0].innerText = this.optimizeDateString(new Date(entry.first).toLocaleString());
            clone.getElementsByClassName('last')[0].innerText = this.optimizeDateString(new Date(entry.last).toLocaleString());
            clone.getElementsByClassName('count')[0].innerText = entry.marks.length;
            //clone.getElementsByClassName('lost')[0].innerText = entry.lost ? entry.lost.length : 0;

            if (entry.synced === undefined || entry.synced) {
              clone.getElementsByClassName('switch--sync')[0].classList.add('active');
            }

            if (searchedFullText) {
              const fullTextSearchResults = this.fullTextSearchResults[name];

              if (fullTextSearchResults) {
                let r = 0, res, mark, pos, markText, markTextEl, highlight, t1, t2, t3;

                for (; r < fullTextSearchResults.length; r++) {
                  res = fullTextSearchResults[r];
                  mark = entry.marks[res.mark];
                  pos = res.pos;
                  markText = mark.text;
                  markTextEl = document.createElement('div');

                  t1 = markText.substring(Math.max(pos-16, 0), pos);
                  t2 = markText.substr(pos, searchTermLength);
                  t3 = markText.substr(pos+searchTermLength, 16);
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
        })(i, l-i-1);
      }
      return this;
    },
    toggleHeaderFields(l) {
      const noEntriesHint = document.getElementById('no-entries');
      const search = document.getElementById('search');
      const actions = document.getElementById('history-actions');
      const sort = document.getElementById('sort');
      const filter = document.getElementById('filter');
      const count = document.getElementById('count');
      const view = document.getElementById('view');
      const ppSelect = document.getElementById('entries-per-page');
      const checkall = document.getElementById('checkmark-all-container');
      const meth_0 = !l ? 'remove' : 'add';
      const meth_1 = l > 0 ? 'remove' : 'add';
      const meth_2 = l > 2 ? 'remove' : 'add';
      const meth_3 = l > 10 ? 'remove' : 'add';

      noEntriesHint.classList[meth_0]('u-display--none');
      actions.classList[meth_1]('u-display--none');
      search.classList[meth_2]('u-display--none');
      sort.classList[meth_2]('u-display--none');
      filter.classList[meth_1]('u-display--none');
      count.classList[meth_3]('u-display--none');
      view.classList[meth_1]('u-display--none');
      checkall.classList[meth_2]('u-display--none');

      document.getElementById('entries-count').innerText = l;

      return _STORE.get('settings').then(settings => {
        const pp = this.perPage = settings.history.pp || 10;
        ppSelect.value = pp;
      });
    },
    setFilterOptions() {
      if (this.filterOptionsSet) return this;

      const select = document.getElementById('filter-entries');
      const placeholderOption = document.createElement('option');
      const allTags = [];
      const entries = this.origEntries;
      let tags;

      select.innerText = '';
      select.appendChild(placeholderOption);
      placeholderOption.setAttribute('selected', '');
      placeholderOption.setAttribute('hidden', '');
      placeholderOption.innerText = browser.i18n.getMessage('t5124');

      for (let name in entries) {
        tags = entries[name].tag;
        tags = tags ? tags.split(' ') : [];
        tags.forEach(tag => {
          if (!allTags.includes(tag)) allTags.push(tag);
        });
      }

      if (!allTags.length && !document.getElementById('filter-opt-notag')) {
        this.addFilterOpt('', browser.i18n.getMessage('detail_notag'), { disabled: true, id: 'filter-opt-notag' });
      } else {
        allTags.forEach(tag => this.addFilterOpt(tag, tag));
        if (!document.getElementById('filter-opt-tagless')) {
          this.addFilterOpt('', browser.i18n.getMessage('t5125'), { id: 'filter-opt-tagless' });
        }
      }
      this.filterOptionsSet = true;
    },
    addFilterOpt(tag, text, attrs) {
      if (this.tags.includes(tag)) return this;

      const select = document.getElementById('filter-entries');
      const opt = document.createElement('option');

      select.appendChild(opt);
      opt.value = tag;
      opt.innerText = text;
      if (attrs) {
        for (let a in attrs) opt.setAttribute(a, attrs[a]);
      }
      if (!this.tags.length && tag) {
        const notagFilterOpt = document.getElementById('filter-opt-notag');
        if (notagFilterOpt) select.removeChild(notagFilterOpt);
        if (!document.getElementById('filter-opt-tagless')) {
          this.addFilterOpt('', browser.i18n.getMessage('t5125'), { id: 'filter-opt-tagless' });
        }
      }
      if (tag) this.tags.push(tag);
    },
    getText(names, spec) {
      let all_marks_plus_meta = spec === '+meta',
          all_marks_plus_lost = spec === '+lost',
          all_marks_plus_meta_and_notes = spec === '+notes',
          all_marks_lost = spec === 'lost',
          defaultMarkers = ['m', '2', '3', 2, 3],

          reject = defaultMarkers.includes(spec) ?
            function(key) {
              return key != spec;
            } : spec === 'c' ?
            function(key) {
              return defaultMarkers.includes(key);
            } : null,

          newLine = '\r\n',
          newLines = '\r\n\r\n',
          note = browser.i18n.getMessage('note'),
          text = '',
          l = names.length,
          i = 0,
          noteText, entry, marks, mark, lost, name, m, n, j;

      return _STORE.get('history').then(history => {
        let entries = history.entries;

        for (; i < l; i++) {
          name = names[i];
          entry = entries[name];
          marks = entry.marks;
          lost = entry.lost;
          m = marks.length;
          n = lost.length;

          if (!all_marks_lost) {
            if (all_marks_plus_meta || all_marks_plus_meta_and_notes) {
                text += name + newLine +
                'URL: ' + entry.url + newLine +
                browser.i18n.getMessage('page_title') + ': ' + entry.title + newLine +
                browser.i18n.getMessage('created') + ': ' + this.optimizeDateString(new Date(entry.first).toLocaleString()) + newLine +
                browser.i18n.getMessage('last_modified') + ': ' + this.optimizeDateString(new Date(entry.last).toLocaleString()) +
                newLine + newLines;
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
    },
    getData(names, type, spec) {
      if (type === 'text') return this.getText(names, spec);

      return _STORE.get('history').then(history => {
        let entries = this.origEntries = history.entries,
            l = names.length,
            data = '',
            newLines = '\r\n\r\n',
            i = 0;

        for (; i < l; i++) data += entries[names[i]][type] + newLines;

        return data;
      });
    },
    getURLs(names) {
      return _STORE.get('history').then(history => {
        let entries = history.entries,
            urls = [],
            l = names.length,
            i = 0;

        for (; i < l; i++) urls.push(entries[names[i]].url);

        return urls;
      });
    },
    optimizeDateString(date) {
      return (date
        .replace(/^(\d{1})(\D{1})/, (m, p, q)=> '0' + p + q)
        .replace(/(\D{1})(\d{1}\D{1})/g, (m, p, q) => p + '0' + q));
    },

    search(e, el) {
      const term = el.value.toLowerCase();
      const searchType = el.getAttribute ? el.getAttribute('data-type') : '';
      const countSelect = document.getElementById('count');
      const classMeth = term ? 'add' : 'remove';
      const toggle = document.getElementById('search-toggle');
      this.setupSearch(term, searchType).renderEntries();
      countSelect.classList[classMeth]('u-display--none');
      toggle.classList[classMeth]('active');
    },
    setupSearch(term, searchType) {
      term = typeof term === 'string' ? term : this.searchTerm;
      const history = this.el;
      const searchCount = document.getElementById('search-count');
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
    },
    searchByName(term) {
      const names = this.names;
      let l = names.length, i = 0, name;

      for(; i < l; i++) {
        name = names[i];
        if (name.toLowerCase().search(term) !== -1) {
          this.searched.push(name);
        }
      }
    },
    searchFullText(text) {
      const entries = this.origEntries;
      let name, marks, i, markText, pos, found;

      const results = this.fullTextSearchResults = {};

      for (name in entries) {
        marks = entries[name].marks;
        found = false;
        for (i = 0; i < marks.length; i++) {
          markText = marks[i].text;
          pos = markText.toLowerCase().search(text);
          if (pos !== -1) {
            found = true;
            results[name] = results[name] || [];
            results[name].push({ mark: i, pos });
          }
        }
        if (found) {
          this.searched.push(name);
        }
      }
    },
    toggleSearch(e, el) {
      if (el.classList.contains('active')) {
        document.getElementById('search-entries--name').value = '';
          document.getElementById('search-entries--full-text').value = '';
        if (this.searchTerm) this.search(null, { value: '' });
      }
    },
    changeCountPerPage(e, el) {
      let p = this.perPage = el.value * 1;
      this.page = 1;
      this.emit('changed:per-page-count', p);
      this.renderEntries();
    },
    setView(e, el) {
      const table = document.getElementById('entries');
      const val = el.value;
      if (val === 'list') table.classList.remove('detailed-list');
      else table.classList.add('detailed-list');
      this.emit('change:view-setting', val);
    },
    setupView(view) {
      document.getElementById('set-view').value = view;
      this.setView(null, { value: view });
    },
    onChangeAction(e, el) {
      if (el.value === 'tag') setTimeout(() => document.getElementById('tag').focus(), 0);
    },
    sort(e, el) {
      let sorted = this.sorted = el.value;
      this.emit('change:sort-setting', sorted);
      this.setupSort(sorted).renderEntries();
    },
    setupSort(sorted) {
      sorted = sorted.split('-');
      this.names = _SORT.by[sorted[0]][sorted[1]](this.origEntries);
      this.sortSearchResults();
      return this;
    },
    filter(e, el) {
      const filter = el.nodeName === 'SPAN' ? el.firstChild.data : el.value;
      const entries = this.origEntries;
      const filteredEntries = {};
      let entry, rx, c = 0;
      document.getElementById('filter').classList.add('active');
      for (let name in entries) {
        entry = entries[name];
        rx = new RegExp('^'+filter+'$|^'+filter+'\\s|\\s'+filter+'\\s|\\s'+filter+'$', 'g');
        if ((filter && entry.tag && entry.tag.search(rx) !== -1) || (!entry.tag && filter == '')) {
          filteredEntries[name] = entry;
          c++;
        }
      }
      this.entries = filteredEntries;
      this.filtered = true;
      this.page = 1;
      this.renderEntries();
      this.emit('filtered:history', c);
    },
    removeFilter(e, el) {
      el.parentNode.classList.remove('active');
      document.getElementById('filter-entries').selectedIndex = 0;
      this.entries = this.origEntries;
      this.filtered = false;
      this.page = 1;
      this.renderEntries();
      this.emit('filtered:history', this.names.length);
    },
    sortSearchResults() {
      if (!this.searched.length) return;
      const names = this.names;
      this.searched.sort((a, b) => {
        a = names.indexOf(a);
        b = names.indexOf(b);
        if (a == b) return 0;
        return a < b ? -1 : 1;
      });
    },
    checkmarkAll(e, el) {
      let directly = typeof el === 'boolean',
          checked = directly ? el : el.checked,
          inputs = document.getElementById('entries').getElementsByTagName('input'),
          i = inputs.length;

      while (i--) inputs[i].checked = checked;

      return false;
    },
    delegateButtonAction(e, el) {
      let action = el.getAttribute('data-action'),
          name = el.getAttribute('data-name');

      name = name ? [name] : undefined;

      !this[action] || this[action](name, el);
    },
    toggleSwitch(e, el) {
      el = el.classList.contains('switch--sync') ? el : el.parentNode;
      el.classList.toggle('active');
      this.delegateButtonAction(e, el);
    },
    undoSyncToggle(name) {
      document.querySelector('.switch--sync[data-name="' + name + '"]').classList.toggle('active');
    },
    render() {
      this.resume();

      _STORE.get().then(storage => {
        let entries = this.entries = this.origEntries = storage.history.entries,
            sorted = storage.settings.history.sorted || this.sorted,
            view = storage.settings.history.view || this.viewMode,
            l;
        this.sorted = sorted;
        this.setupSort(sorted);
        this.setupView(view);
        l = this.names.length;

        this.setupSearch().toggleHeaderFields(l).then(() => this.renderEntries().setFilterOptions());
      });
    },
    paginate(page) {
      this.page = page;
      this.renderEntries();
    },
    updateEntry(entry) {
      const el = document.querySelector('.entry[data-name="' + entry.name + '"]');

      el.getElementsByClassName('created')[0].innerText = entry.first;
      el.getElementsByClassName('last')[0].innerText = entry.last;
      el.getElementsByClassName('count')[0].innerText = entry.marks.length;
      //el.getElementsByClassName('lost')[0].innerText = entry.lost.length;
    }
  });
}
