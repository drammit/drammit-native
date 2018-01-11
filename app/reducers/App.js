// @flow

import { combineReducers } from 'redux';

function initialized(state: boolean = false, action): boolean {
  switch (action.type) {
    case 'INITIALIZED':
    case 'LOGIN_USER_SUCCESS':
      return true;
    default:
      return state;
  }
}

function fetchError(state: boolean = false, action): boolean {
  switch (action.type) {
    case 'FETCH_ERROR':
      return true;
    default:
      return state;
  }
}

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

function uploadProgress(state: number = 0, action): number {
  switch (action.type) {
    case 'UPLOAD_PROGRESS':
      return Math.round(action.progress * 100);
    default:
      return state;
  }
}

function navigation(state: string = '', action): string {
  switch (action.type) {
    case 'UPDATE_NAVIGATION':
    case 'UPDATE_LAYOUT':
      return action.navigation;
    default:
      return state;
  }
}

function back(state: boolean = false, action): boolean {
  switch (action.type) {
    case 'UPDATE_HEADER':
    case 'UPDATE_LAYOUT':
      return action.header.back || false;
    default:
      return state;
  }
}

function visible(state: boolean = false, action): boolean {
  switch (action.type) {
    case 'UPDATE_HEADER':
    case 'UPDATE_LAYOUT':
      return Object.keys(action.header).length > 0;
    default:
      return state;
  }
}

function logo(state: boolean = false, action): boolean {
  switch (action.type) {
    case 'UPDATE_HEADER':
    case 'UPDATE_LAYOUT':
      return action.header.logo || false;
    default:
      return state;
  }
}

function title(state: string = '', action): string {
  switch (action.type) {
    case 'UPDATE_HEADER':
    case 'UPDATE_LAYOUT':
      return action.header.title || '';
    default:
      return state;
  }
}

const header = combineReducers({
  back,
  visible,
  logo,
  title,
});

export default combineReducers({
  initialized,
  fetchError,
  statusBar,
  navigation,
  header,
  uploadProgress,
});
