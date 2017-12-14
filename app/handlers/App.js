// @flow

import { currentToken } from '../core/login-token';

import { initialized } from '../actions/App';

async function onInit(dispatch, action) {
  const loginToken = await currentToken();

  // if (!loginToken) {
  //   dispatch(initialized());
  //   return;
  // }
}

export default function App(middleware) {
  middleware.addListener('INITIALIZE', onInit);
}
