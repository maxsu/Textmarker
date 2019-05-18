import { _PORT } from './../_shared/utils'

export default new _PORT({
  name: 'sidebar',
  type: 'privileged',
  events: {
    CONNECTION: [
      'change:bg-setting',
      'error:browser-console',
      'sidebar:highlight',
      'sidebar:delete-highlight',
      'sidebar:bookmark',
      'sidebar:delete-bookmark',
      'sidebar:note',
      'sidebar:immut',
      'sidebar:save-changes',
      'sidebar:retry-restoration',
      'sidebar:undo',
      'sidebar:redo',
      'sidebar:copy',
      'sidebar:copy-all',
      'sidebar:scroll-to-bookmark',
      'sidebar:toggle-notes',
      'sidebar:next-mark',
      'remove:tag',
      'add:tag',
      'open:addon-page(sb)',
      'opened:sidebar',
      'updated:page-note',
      'toggled:sidebar-tab',
      'sidebar:selected-marker',
      'changed:sidebar-theme'
    ]
  }
})
