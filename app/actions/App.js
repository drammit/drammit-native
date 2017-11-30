export function showStatusBar() {
  return { type: 'SHOW_STATUSBAR' };
}

export function hideStatusBar() {
  return { type: 'HIDE_STATUSBAR' };
}

export function updateHeader(header) {
  return { type: 'UPDATE_HEADER', header };
}
