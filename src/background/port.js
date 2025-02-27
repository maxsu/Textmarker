import { _PORT } from './utils'

new _PORT({
  name: 'background',
  type: 'background',
  postponeConnection: true,
  events: {
    ONEOFF: [
      'started:app',
      'toggled:addon',
      'toggled:sync',
      'updated:settings',
      'updated:history',
      'updated:history-on-restoration',
      'updated:entry-sync',
      'updated:entry-name',
      'updated:logs',
      'updated:ctm-settings',
      'updated:misc-settings',
      'updated:naming-settings',
      'updated:bg-color-settings',
      'updated:custom-search-settings',
      'updated:saveopt-settings',
      'updated:mark-method-settings',
      'entries:found',
      'saved:entry',
      'deleted:entry',
      'deleted:entries',
      'imported:settings',
      'imported:history',
      'ctx:m',
      'ctx:d',
      'ctx:b',
      'ctx:-b',
      'ctx:n',
      'ctx:c',
      'sidebar:highlight',
      'sidebar:delete-highlight',
      'sidebar:bookmark',
      'sidebar:delete-bookmark',
      'sidebar:note',
      'sidebar:immut',
      'sidebar:save-changes',
      'sidebar:undo',
      'sidebar:redo',
      'sidebar:copy',
      'sidebar:scroll-to-bookmark',
      'sidebar:toggle-notes',
      'sidebar:next-mark',
      'sidebar:retry-restoration',
      'sidebar:selected-marker',
      'opened:sidebar',
      'changed:url'
    ],
    CONNECTION: [
      'started:app',
      'toggled:addon',
      'toggled:sync',
      'updated:settings',
      'updated:entry-on-save',
      'saved:entry',
      'updated:pagenotes',
      'changed:selection',
      'unsaved-changes',
      'clicked:mark',
      'added:bookmark',
      'removed:bookmark',
      'added:note',
      'removed:last-note',
      'page-state',
      'notes-state',
      'entry:found',
      'entry:found-for-tab',
      'entry:deleted-for-tab',
      'entry:ordered-marks'
    ]
  }
});
