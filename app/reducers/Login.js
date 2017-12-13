// @flow

import { combineReducers } from 'redux';

function loading(state: boolean = false, action): boolean {
  switch (action.type) {
    case 'LOGIN_USER':
      return true;
    case 'LOGIN_USER_FAILED':
    case 'LOGIN_USER_SUCCESS':
      return false;
    default:
      return state;
  }
}

function error(state: string = '', action): string {
  switch (action.type) {
    case 'LOGIN_USER_FAILED':
      return action.message;
    case 'LOGIN_USER':
      return '';
    default:
      return state;
  }
}

export default combineReducers({
  loading,
  error,
});
