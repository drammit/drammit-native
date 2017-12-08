// @flow

import { combineReducers } from 'redux';

function loading(state: boolean = true, action): boolean {
  switch (action.type) {
    case 'VALID_RESET_TOKEN':
    case 'INVALID_RESET_TOKEN':
      return false;
    default:
      return state;
  }
}

function valid(state: boolean = true, action): boolean {
  switch (action.type) {
    case 'VALID_RESET_TOKEN':
      return true;
    case 'INVALID_RESET_TOKEN':
      return false;
    default:
      return state;
  }
}

export default combineReducers({
  loading,
  valid,
});
