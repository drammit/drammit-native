// @flow

export function initialize() {
  return { type: 'INITIALIZE' };
}

export function initialized() {
  return { type: 'INITIALIZED' };
}

export function showStatusBar() {
  return { type: 'SHOW_STATUSBAR' };
}

export function hideStatusBar() {
  return { type: 'HIDE_STATUSBAR' };
}

export function updateHeader(header) {
  return { type: 'UPDATE_HEADER', header };
}

export function uploadProgress(progress) {
  return { type: 'UPLOAD_PROGRESS', progress };
}
