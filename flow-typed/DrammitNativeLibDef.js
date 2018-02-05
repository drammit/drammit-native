/* eslint-disable no-undef */
// @flow

// Drammit
declare type headerType = {
  back?: boolean,
  logo?: boolean,
  title?: string,
};

// Redux listeners
declare type ReduxListener = {
  addListener: Function,
  addListeners: Function,
};

// React Router Annotations
declare type matchType = {
  path: string,
  url: string,
  isExact: boolean,
  params: {},
};

declare type locationType = {
  hash: string,
  key: string,
  pathname: string,
  search: string,
  state?: any,
};

declare type historyType = {
  push: (path: string) => void,
};

declare type ReactRouterType = {
  match: matchType,
  location: locationType,
  history: historyType,
};

// Redux form
declare type ReduxFormType = {
  handleSubmit: Function,
  submitSucceeded: boolean,
};

declare type ReduxFormFieldType = {
  input: {
    name: string,
    onChange: Function,
  },
};
