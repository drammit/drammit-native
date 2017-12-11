// @flow

let history = null;

export function setHistory(passedHistory) {
  history = passedHistory;
}

export function push(path, data = {}) {
  if (!history) {
    throw new Error('Used push too early');
  }

  history.push(path, data);
}
