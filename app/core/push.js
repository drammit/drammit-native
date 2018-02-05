// @flow

let history = null;

export function setHistory(passedHistory: any) {
  history = passedHistory;
}

export function push(path: string, data: any = {}) {
  if (!history) {
    throw new Error('Used push too early');
  }

  history.push(path, data);
}
