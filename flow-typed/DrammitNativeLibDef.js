// @flow

// Drammit
declare var headerType: {
  back?: boolean,
  logo?: boolean,
  title: string,
};

// Redux listeners
declare var ReduxListener: {
  addListener: Function,
  addListeners: Function,
};

// React Router Annotations
declare var matchType: {
  path: string,
  url: string,
  isExact: boolean,
  params: {},
};

declare var locationType: {
  hash: string,
  key: string,
  pathname: string,
  search: string,
  state?: {},
};

declare var ReactRouterType: {
  match: matchType,
  location: locationType,
};

// Redux form
declare var ReduxFormType: {
  handleSubmit: Function,
  submitSucceeded: boolean,
};

declare var ReduxFormFieldType: {
  input: {
    name: string,
    onChange: Function,
  },
};
