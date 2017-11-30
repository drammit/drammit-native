// @flow

import { combineReducers } from 'redux';

function statusBar(state: boolean = false, action): boolean {
  switch (action.type) {
    case 'SHOW_STATUSBAR':
      return true;
    case 'HIDE_STATUSBAR':
      return false;
    default:
      return state;
  }
}

function back(state: boolean = false, action): boolean {
  switch (action.type) {
    case 'UPDATE_HEADER':
      return action.header.back || false;
    default:
      return state;
  }
}

function visible(state: boolean = false, action): boolean {
  switch (action.type) {
    case 'UPDATE_HEADER':
      return Object.keys(action.header).length > 0;
    default:
      return state;
  }
}

function title(state: string = '', action): string {
  switch (action.type) {
    case 'UPDATE_HEADER':
      return action.header.title || '';
    default:
      return state;
  }
}

const header = combineReducers({
  back,
  visible,
  title,
});

export default combineReducers({
  statusBar,
  header,
});
