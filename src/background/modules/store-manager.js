import _STORAGE from './../storage'
import { _MODULE } from './../utils'
import { _COPY } from './../utils'

new _MODULE({
  events: {
    ENV: {
      'started:app': 'registerStorageChangedHandler',
      'toggled:addon': 'saveActivationState',
      'toggle:sync': 'toggleSync',

      'change:style-setting': 'changeStyle',
      'change:autonote-setting': 'changeAutoNoteSetting',
      'change:bg-setting': 'changeBgColor',
      'change:mark-method-setting': 'changeMarkMethod',
      'toggle:shortcut-setting': 'toggleShortcutSetting',
      'change:shortcut-setting': 'changeShortcutSetting',
      'toggle:ctm-setting': 'toggleCtmSetting',
      'change:saveopt-setting': 'changeSaveOpt',
      'change:immut-setting': 'toggleImmutOpt',
      'change:dropLosses-setting': 'toggleDropLossesOpt',
      'change:hash-setting': 'toggleHashOpt',
      'toggle:priv-setting': 'togglePrivSaveOpt',
      'change:namingopt-setting': 'changeNamingOpt',
      'toggle:noteopt-setting': 'toggleNoteOpt',
      'toggle:quickbuttonopt-setting': 'toggleQuickbuttonOpt',
      'switch:quickbuttonopt-setting': 'switchQuickbuttonOpt',
      'toggle:notification-setting': 'toggleNotificationOpt',
      'toggle:misc-setting': 'changeMiscSetting',
      'change:misc-setting': 'changeMiscSetting',
      'toggle:tbbpower-setting': 'toggleTBBPowerSetting',
      'change:sort-setting': 'changeSortOpt',
      'change:view-setting': 'changeViewOpt',
      'change:custom-search-setting': 'changeCustomSearch',
      'changed:per-page-count': 'changeCountPerPage',
      'change:autocs-setting': 'toggleAutocsOpt',
      'change:iframe-setting': 'toggleIFrameOpt',

      'remove:custom-marker': 'removeCustomMarker',
      'add:custom-marker': 'addCustomMarker',

      'named:entry': 'saveEntry',
      'renamed:entry': 'saveNewName',
      'granted:update-entry': 'updateEntryOnPageAction',
      'delete:entries': 'deleteEntries',
      'finished:restoration': 'updateEntryOnRestoration',
      'clean:entries': 'cleanEntries',
      'sync:entry': 'syncEntry',
      'tag:entries': 'tagEntries',
      'remove:tag': 'removeTag',
      'add:tag': 'addTag',

      'toggled:sidebar-tab': 'changeSBSettings',
      'changed:sidebar-theme': 'changeThemeSettings',
      'updated:page-note': 'updatePageNotes'
    }
  },
  updateOnChangedSync: false,

  // ADDON METHODS
  saveActivationState(active) {
    _STORAGE.update('settings', settings => { settings.addon.active = active; return settings; });
  },

  // SYNC METHODS
  toggleSync(field, val) {
    _STORAGE.update('sync', function(sync) {
      sync[field] = val;
      this.setAreas(sync);
      return sync;
    }, 'local')

      .then(() => {
        _STORAGE.update('sync', sync => {
          sync[field] = val;
          return sync;
        }, 'sync')

        .catch(() => {
          this.emit('error', 'error_toggle_sync');
          this.emit('failed:toggle-sync', field);
        })
        .then(() => this.emit('toggled:sync toggled:sync-' + field, field, val))
      });
  },

  // SETTINGS METHODS
  updateSettings(updater, setting, error) {
    _STORAGE.update('settings', updater)
      .then(() => this.emit('updated:' + setting + '-settings'))
      .catch(() => { if (error) this.emit('error', error); });
  },
  addCustomMarker(key, style) {
    this.updateSettings(
      settings => { settings.markers[key] =  { style }; return settings; },
      'marker',
      'error_add_marker'
    );
  },
  removeCustomMarker(key) {
    this.updateSettings(
      settings => { delete settings.markers[key]; return settings; },
      'marker',
      'error_remove_marker'
    );
  },
  changeStyle(key, style) {
    if (!key) return false;

    this.updateSettings(
      settings => { settings.markers[key].style = style; return settings; },
      'style',
      'error_save_style'
    );
  },
  changeBgColor(key, color) {
    this.updateSettings(
      settings => {
        let marker = settings.markers[key];

        if (marker) {
          let split = marker.style.split(';'),
              l = split.length, style;

          while (l--) {
            style = split[l];
            if (style.includes('background-color')) {
              settings.markers[key].style = marker.style.replace(/background-color:#.{6}/, 'background-color:' + color);
              break;
            }
          }
        }
        return settings;
      },
      'bg-color',
      'error_save_style'
    );
  },
  changeAutoNoteSetting(key, autonote) {
    this.updateSettings(
      settings => { settings.markers[key].autonote = autonote; return settings; },
      'autonote',
      'error_save_toggle_autonote'
    );
  },
  changeMarkMethod(method) {
    this.updateSettings(
      settings => { settings.misc.markmethod = method; return settings; },
      'mark-method',
      'error_save_mark_method'
    );
  },
  toggleShortcutSetting(key, status) {
    this.updateSettings(
      settings => { settings.shortcuts[key][1] = status; return settings; },
      'shortcut',
      'error_save__toggle_sc'
    );
  },
  changeShortcutSetting(key, value) {
    this.updateSettings(
      settings => { settings.shortcuts[key][0] = value; return settings; },
      'shortcut',
      'error_save_change_sc'
    );
  },
  changeSortOpt(value) {
    this.updateSettings(
      settings => { settings.history.sorted = value; return settings; },
      'sort'
    );
  },
  changeViewOpt(value) {
    this.updateSettings(
      settings => { settings.history.view = value; return settings; },
      'view'
    );
  },
  changeCustomSearch(values) {
    this.updateSettings(
      settings => { settings.misc.customSearch = values; return settings; },
      'custom-search',
      'error_save_change_search'
    );
  },
  changeCountPerPage(value) {
    this.updateSettings(
      settings => { settings.history.pp = value; return settings; },
      'count-per-page'
    );
  },
  toggleCtmSetting(key, value) {
    this.updateSettings(
      settings => { settings.shortcuts[key][2] = value; return settings; },
      'ctm',
      'error_save_ctm'
    );
  },
  changeSaveOpt(val) {
    this.updateSettings(
      settings => { settings.history.autosave = val; return settings; },
      'saveopt',
      'error_save_autosave'
    );
  },
  toggleImmutOpt(val) {
    this.updateSettings(
      settings => { settings.history.immut = val; return settings; },
      'immutopt',
      'error_save_autosave'
    );
  },
  toggleDropLossesOpt(val) {
    this.updateSettings(
      settings => { settings.history.dropLosses = val; return settings; },
      'droplossesopt',
      'error_save_autosave'
    );
  },
  toggleHashOpt(val) {
    this.updateSettings(
      settings => { settings.history.ignoreHash = val; return settings; },
      'hashopt'
    );
  },
  togglePrivSaveOpt(val) {
    this.updateSettings(
      settings => { settings.history.saveInPriv = val; return settings; },
      'privsaveopt',
      'error_save_priv'
    );
  },
  changeNamingOpt(val) {
    this.updateSettings(
      settings => { settings.history.naming = val; return settings; },
      'naming',
      'error_save_naming'
    );
  },
  toggleNoteOpt(val) {
    this.updateSettings(
      settings => { settings.history.saveNote = val; return settings; },
      'noteopt',
      'error_save_notify'
    );
  },
  toggleQuickbuttonOpt(prop, val) {
    this.updateSettings(
      settings => { settings.history[prop] = val; return settings; },
      'quickbutton',
      'error_save_download'
    );
  },
  switchQuickbuttonOpt(prop, val) {
    this.updateSettings(
      settings => { settings.history[prop] = val; return settings; },
      'quickbutton',
      'error_save_download'
    );
  },
  toggleNotificationOpt(prop, val) {
    this.updateSettings(
      settings => { settings.misc[prop] = val; return settings; },
      'notification',
      'error_save_notify'
    );
  },
  changeMiscSetting(prop, val) {
    this.updateSettings(
      settings => { settings.misc[prop] = val; return settings; },
      'misc',
      'error_save_bmicon'
    );
  },
  toggleTBBPowerSetting(prop, val) {
    this.updateSettings(
      settings => { settings.misc[prop] = val; return settings; },
      'tbbpower',
      'error_save_bmicon'
    );
  },
  toggleAutocsOpt(val) {
    this.updateSettings(
      settings => { settings.addon.autocs = val; return settings; },
      'autocs',
      'error_save_autocs'
    );
  },
  toggleIFrameOpt(val) {
    this.updateSettings(
      settings => { settings.addon.iframes = val; return settings; },
      'iframes',
      'error_save_iframes'
    );
  },
  changeSBSettings(tab, unfolded) {
    _STORAGE.update('settings', settings => { settings.sb.tabs[tab].unfolded = unfolded; return settings; });
  },
  changeThemeSettings(theme) {
    _STORAGE.update('settings', settings => { settings.sb.theme = theme; return settings; });
  },

  // HISTORY METHODS
  cleanEntries(names, area) {
    if (!names.length) return;

    area = typeof area === 'string' ? area : 'sync';

    let names_local = [];

    return _STORAGE.update('history', history => {
      let i = names.length, name;
      while (i--) {
        name = names[i];
        if (history.entries[name]) history.entries[name].lost.length = 0;
        else names_local.push(name);
      }
      return history;
    }, area)
    .then(() => { if (area === 'local') { this.emit('cleaned:entries'); }})
    .catch(() => this.emit('error', 'error_clean_history'))
    .then(() => { if (area === 'sync' && names_local.length) { this.cleanEntries(names_local, 'local'); }});
  },
  saveEntry(entry) {
    entry.lost = [];
    const name = entry.name;
    _STORAGE.update('history', history => {
      history.entries[name] = entry;
      return history;
    })
      .then(history => this.emit('saved:entry', history.entries[name]))
      .catch(() => this.emit('failed:save-entry', 'error_save_entry'));
  },
  saveNewName(oldName, newName, area) {
    _STORAGE.update('history', history => {
      const entry = _COPY(history.entries[oldName]);
      entry.name = newName;
      history.entries[newName] = entry;
      delete history.entries[oldName];
      return history;
    }, area)
      .then(history => this.emit('updated:entry updated:entry-name', history.entries[newName], oldName))
      .catch(() => this.emit('failed:update-entry', 'error_update_entry'));
  },
  updateEntryOnPageAction(entry, area) {
    area = typeof area === 'string' ? area : entry.synced ? 'sync' : 'local';

    const name = entry.name;
    const receivedCompleteEntry = !!entry.url;
    let found = true;

    _STORAGE.update('history', history => {
      if (receivedCompleteEntry) {
        history.entries[name] = entry;
        history.entries[name].lost = history.entries[name].lost || [];
      } else {
        if (!history.entries[name]) {
          found = false;
        } else {
          delete entry.synced;
          for (let e in entry) {
            if (entry.hasOwnProperty(e)) {
              history.entries[name][e] = entry[e];
            }
          }
          history.entries[name].lost = history.entries[name].lost || [];
        }
      }

      return history;
    }, area)
      .catch((e) => this.emit('failed:update-entry', 'error_update_entry'))
      .then(() => { if (!found) { this.updateEntryOnPageAction(entry, entry.synced ? 'local' : 'sync'); }})
      .then(() => this.emit('updated:entry updated:entry-on-save', entry));
  },
  deleteEntries(names, area) {
    if (!names.length) return;

    area = typeof area === 'string' ? area : 'sync';

    let names_local = [];

    return _STORAGE.update('history', history => {
      let name, url, hashSensitive;

      while (names.length) {
        name = names.pop();
        if (history.entries && Object.keys(history.entries).indexOf(name) !== -1) {
          url = history.entries[name].url || '';
          hashSensitive = history.entries[name].hashSensitive || '';

          delete history.entries[name];
          this.emit('deleted:entry', name, url, hashSensitive);
        } else {
          names_local.push(name);
        }
      }
      return history;
    }, area)
      .catch((e) =>{console.log(e, e.toString()); this.emit('failed:delete-entries', 'error_del_entry')})
      .then(() => { if (area === 'sync' && names_local.length) { this.deleteEntries(names_local, 'local'); }})
      .then(() => this.emit('deleted:entries'));
  },
  updateEntryOnRestoration(entryName, restoredMarks, lostMarks, area) {
    _STORAGE.get('settings').then(settings => {
      if (settings.history.dropLosses === true) {
        _STORAGE.update('history', history => {
          const oldLostMarks = history.entries[entryName].lost || [];
          const restoredMarksIDs = [];
          const oldLostMarksIDs = [];

          history.entries[entryName].marks = restoredMarks;

          restoredMarks.forEach(mark => restoredMarksIDs.push(mark.id));

          let l = oldLostMarks.length, id;

          while (l--) {
            id = oldLostMarks[l].id;
            if (restoredMarksIDs.includes(id)) {
              oldLostMarks.splice(l, 1);
            } else {
              oldLostMarksIDs.push(id);
            }
          }

          lostMarks.forEach(mark => {
            if (!oldLostMarksIDs.includes(mark.id)) oldLostMarks.push(mark);
          });

          history.entries[entryName].lost = oldLostMarks;

          return history;
        }, area);
      }
    });
  },
  syncEntry(name, val) {
    const area_1 = val ? 'local' : 'sync';
    const area_2 = val ? 'sync' : 'local';

    let entry;

    _STORAGE.update('history', history => {
      entry = _COPY(history.entries[name]);
      entry.synced = val;
      delete history.entries[name];
      return history;
    }, area_1)

      .then(() => {
        _STORAGE.update('history', history => {
          history.entries[name] = entry;
          return history;
        }, area_2)

        .then(() => this.emit('updated:entry updated:entry-sync', entry))
        .catch(() => this.emit('failed:sync-entry', name));
      });
  },
  tagEntries(names, tag) {
    _STORAGE.update('history', history => {
      const entries = history.entries;
      names.sync.forEach(name => this.addTagToEntry(entries[name], tag));
      return history;
    }, 'sync')
      .then(() => {
        return _STORAGE.update('history', history => {
          const entries = history.entries;
          names.local.forEach(name => this.addTagToEntry(entries[name], tag));
          return history;
        }, 'local');
      });
  },
  removeTag(tag, entry) {
    const area = entry.synced ? 'sync' : 'local';
    const name = entry.name;

    _STORAGE.update('history', history => {
      const storedEntry = history.entries[name];
      const rx = new RegExp('^'+tag+'$|^'+tag+'\\s|\\s'+tag+'\\s|\\s'+tag+'$');
      if (storedEntry.tag) {
        storedEntry.tag = storedEntry.tag
          .replace(rx, ' ')
          .replace(/^\s|\s$/, '')
          .replace(/\s{2,}/, ' ');
      }
      return history;
    }, area)
      .then(history => this.emit('updated:entry updated:entry-tags', history.entries[name]));
  },
  addTag(tag, entry) {
    const area = entry.synced ? 'sync' : 'local';
    const name = entry.name;
    _STORAGE.update('history', history => {
      this.addTagToEntry(history.entries[name], tag);
      return history;
    }, area);
  },
  addTagToEntry(entry, tag) {
    if (!tag) entry.tag = '';
    else if (!entry.tag) entry.tag = tag;
    else {
      const rx = new RegExp('^'+tag+'$|^'+tag+'\\s|\\s'+tag+'\\s|\\s'+tag+'$', 'g');
      if (entry.tag.search(rx) === -1) {
        entry.tag += ' ' + tag;
      }
    }
    this.emit('updated:entry updated:entry-tags', entry);
    return entry;
  },

  // PAGE NOTE METHODS
  updatePageNotes(url, notes) {
    _STORAGE.update('pagenotes', pagenotes => {
      pagenotes[url] = notes;
      return pagenotes;
    });
  },

  registerStorageChangedHandler() {
    browser.storage.onChanged.addListener(this.proxy(this, this.onStorageChanged));
  },
  onStorageChanged(changedItem) {
    if (changedItem.settings) this.emit('updated:settings');
    if (changedItem.history) this.emit('updated:history');
    if (changedItem.pagenotes) this.emit('updated:pagenotes');
  }
});
