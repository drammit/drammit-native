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

export default combineReducers({
  statusBar,
});
