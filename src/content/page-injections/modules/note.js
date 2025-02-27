import { _DOMMODULE } from './../../_shared/utils'
import _STORE from './../_store'

export default function(mark, color) {

  const BODY = window.document.body;

  return new _DOMMODULE({
		events: {
      ENV: {
        'updated:misc-settings': 'addMarkListeners',
        'drag:note': 'onDrag',
        'dragstop:note': 'onDragEnd'
      },
      DOM: {
        click: {
          'tmnotedelete': '_delete',
          'tmnoteminimize': 'hide',
          'tmnotecustomize': 'togglePalette',
          'tmnotecolor': 'changeColor',
          'textarea': 'bringUpFront'
        },
        keyup: {
          'textarea': 'attemptUpdate'
        },
        mousedown: {
          'tmnoteheader': 'onDragStart'
        },
        touchstart: {
          'tmnoteheader': 'onDragStart'
        }
      }
		},
    addListenersManually: true,
    el: null,
    mark,
    color: color || '',
    markClickHandler: null,
    text: '',
    visible: false,
    recentlyUpdated: false,
    settingsMode: false,
    pos: { l: null, t: null },
    size: { w: null, h: null },
    dragDX: 0,
    dragDY: 0,
    mutationObserver: null,

    autoinit() {
      this.adjustNoteDataObject();
      this.createNoteElement();
      this.addListeners();
      this.addMarkListeners();
    },

    adjustNoteDataObject() {
      const noteData = this.mark.keyData.note;
      if (typeof noteData === 'string') {
        this.mark.keyData.note = { text: noteData, color: this.color || 'yellow' };
      }
      else if (!noteData) {
        this.mark.keyData.note = { text: noteData, color: this.color || _STORE.noteColor };
      } else {
        this.pos = noteData.pos || this.pos;
        this.size = noteData.size || this.size;
      }
      this.fs = this.mark.keyData.note.fs = this.mark.keyData.note.fs || _STORE.noteFontSize;
    },
    createNoteElement() {
      const note = this.el = document.createElement('tmnote');
      const header = this.header = document.createElement('tmnoteheader');
      const actions = this.actions = document.createElement('tmnoteactions');
      const del = this.del = document.createElement('tmnotedelete');
      const min = this.min = document.createElement('tmnoteminimize');
      const gear = document.createElement('tmnotecustomize');
      const palette = this.palette = document.createElement('tmnotepalette');
      const p = this.textElement = document.createElement('textarea');
      const text = this.mark.keyData.note.text;
      const color = this.color = this.mark.keyData.note.color || _STORE.noteColor;
      _STORE.noteColor = color;
      const delText = document.createTextNode(String.fromCharCode(10005));
      const minText = document.createTextNode(String.fromCharCode(0x2013));
      const gearText = document.createTextNode(String.fromCharCode(0x2699));

      ['green', 'white', 'yellow', 'orange', 'red', 'purple', 'blue', 'turquoise'].forEach(c => {
        let color = document.createElement('tmnotecolor');
        color.className = 'tmnotecolor--' + c;
        color.setAttribute('data-color', c);
        palette.appendChild(color);
      });

      p.setAttribute('data-tm-note', true);
      del.appendChild(delText);
      min.appendChild(minText);
      gear.appendChild(gearText);
      note.appendChild(header);
      actions.appendChild(gear);
      actions.appendChild(del);
      actions.appendChild(min);
      note.appendChild(actions);
      note.appendChild(p);
      note.classList.add('tmnote--' + color);
      if (text) p.value = text;

      p.addEventListener('blur', e => this.attemptUpdate(e, e.target, true), false);
    },
    _delete() {
      this.remove();
      this.mark.keyData.note = '';
    },
    remove() {
      this.hide();
      this.removeMarkListeners();
      this.emit('removed:note', this.mark.id);
    },
    attemptUpdate(e, el, force) {
      if (force) {
        this.update(el);
      }
      else if (!this.recentlyUpdated) {
        this.recentlyUpdated = true;
        window.setTimeout(() => this.update(el), 3000);
      }
    },
    update(el) {
      this.mark.keyData.note.text = el.value;
      this.emit('updated:note', this.mark.id);
      this.recentlyUpdated = false;
    },
    show() {
      const el = this.el;
      const innerWindowWidth = window.innerWidth;

      let pos, left, top;

      if (this.pos.l !== null) {
        pos = this.pos;
        top = pos.t;
      } else {
        pos = this.getPosition();

        left = this.pos.l = pos.l;
        top = this.pos.t = pos.t + pos.offset;
      }
      left = this.pos.l = pos.l;

      if (left + 340 > innerWindowWidth) {
        left = this.pos.l = innerWindowWidth - 340;
      }

      const size = this.size.w ? `width:${this.size.w};height:${this.size.h};` : '';
      const fontSize = `font-size: ${this.fs}px !important;`;

      BODY.appendChild(el);
      el.setAttribute('style', `display:block;top:${top}px;left:${left}px;`);
      el.getElementsByTagName('textarea')[0].setAttribute('style', (size + fontSize));
      this.connectMutationObserver();
      this.visible = true;
    },
    bringUpFront() {
      Array.from(BODY.getElementsByTagName('tmnote')).forEach(note => {
        if (note === this.el) note.style.zIndex = 2147483647;
        else note.style.zIndex = 2147483646;
      });
    },
    hide() {
      BODY.removeChild(this.el);
      this.mutationObserver.disconnect();
      this.visible = false;
    },
    toggle() {
      if (this.visible) this.hide();
      else this.show();
    },
    togglePalette() {
      if (this.settingsMode) {
        this.el.removeChild(this.palette);
      } else {
        this.el.appendChild(this.palette);
      }
      this.settingsMode = !this.settingsMode;
    },
    changeColor(e, el) {
      this.el.classList.remove('tmnote--' + this.color);
      const color = this.color = _STORE.noteColor = el.getAttribute('data-color');
      this.el.classList.add('tmnote--' + color);
      this.mark.keyData.note.color = color;
      this.togglePalette();
      this.emit('changed:note-color', this.mark.id);
    },

    addMarkListeners() {
      _STORE.get('noteonclick').then(noteonclick => {
        if (noteonclick) {
          if (!!this.markClickHandler) return;

          const handler = this.markClickHandler = () => this.toggle();

          for (let wrapper of this.mark.wrappers) {
            wrapper.addEventListener('click', handler, false);
            wrapper.setAttribute('title', browser.i18n.getMessage('toggle_note'));
          }
        } else {
          this.removeMarkListeners();
        }
      });
    },
    removeMarkListeners() {
      if (!this.markClickHandler) return;
      for (let wrapper of this.mark.wrappers) {
        wrapper.removeEventListener('click', this.markClickHandler, false);
        wrapper.removeAttribute('title');
      }
    },
    connectMutationObserver() {
      const textarea = this.el.getElementsByTagName('textarea')[0];
      const config = { attributeFilter: ['style'] };
      const observer = this.mutationObserver = this.mutationObserver || new MutationObserver(this.proxy(this, this.saveSize));
      observer.observe(textarea, config);
    },
    getPosition() {
      const rect = this.mark.wrappers[this.mark.wrappers.length - 1].getBoundingClientRect();
      return {
        t: rect.top + window.pageYOffset - BODY.clientTop,
        l: rect.left + window.pageXOffset - BODY.clientLeft,
        offset: rect.height
      };
    },
    onDragStart(e, el) {
      e.preventDefault();
      this.dragDX = e.pageX - this.pos.l;
      this.dragDY = e.pageY - this.pos.t;
      this.emit('start:drag', this.mark.id);
    },
    onDrag(note, e) {
      if (note === this.mark.id) {
        const el = this.el;
        let left = this.pos.l = e.pageX - this.dragDX;
        let top = this.pos.t = e.pageY - this.dragDY;
        el.style.left = left + 'px';
        el.style.top = top + 'px';
      }
    },
    onDragEnd() {
      this.mark.keyData.note.pos = this.pos;
      this.emit('changed:note-pos', this.mark.id);
    },
    saveSize(mutationsList) {
      const style = mutationsList[0].target.style;
      this.size = this.mark.keyData.note.size = { w: style.width, h: style.height };
      this.emit('changed:note-size', this.mark.id);
    }
	});
}
