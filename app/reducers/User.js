// @flow

import { combineReducers } from 'redux';

function id(state: number | null = null, action): number | null {
  switch (action.type) {
    case 'LOGOUT_USER':
      return null;
    case 'LOGIN_USER_SUCCESS':
      return action.user.id;
    default:
      return state;
  }
}

function email(state: string | null = null, action): string | null {
  switch (action.type) {
    case 'LOGOUT_USER':
      return null;
    case 'LOGIN_USER_SUCCESS':
      return action.user.email;
    default:
      return state;
  }
}

function username(state: string | null = null, action): string | null {
  switch (action.type) {
    case 'LOGOUT_USER':
      return null;
    case 'LOGIN_USER_SUCCESS':
      return action.user.username;
    default:
      return state;
  }
}

function name(state: string | null = null, action): string | null {
  switch (action.type) {
    case 'LOGOUT_USER':
      return null;
    case 'LOGIN_USER_SUCCESS':
      return action.user.name;
    default:
      return state;
  }
}

function avatar(state: string | null = null, action): string | null {
  switch (action.type) {
    case 'LOGOUT_USER':
      return null;
    case 'LOGIN_USER_SUCCESS':
      return action.user.avatar;
    default:
      return state;
  }
}

function subscription(state: boolean = false, action): boolean {
  switch (action.type) {
    case 'LOGOUT_USER':
      return false;
    case 'LOGIN_USER_SUCCESS':
      return !!action.user.subscription;
    default:
      return state;
  }
}

export default combineReducers({
  id,
  email,
  username,
  name,
  avatar,
  subscription,
});
