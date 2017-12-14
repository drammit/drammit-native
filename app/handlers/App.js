// @flow

import { currentToken } from '../core/login-token';

import { tokenLogin } from '../api/Login';

import { initialized } from '../actions/App';
import { loginUserSuccess } from '../actions/Login';

async function onInit(dispatch) {
  const loginToken = await currentToken();

  if (!loginToken) {
    dispatch(initialized());
    return;
  }

  try {
    const user = await tokenLogin(loginToken.token, loginToken.UserId);
    dispatch(loginUserSuccess(user));
  } catch (e) {
    console.error(e);
    dispatch(initialized());
  }
}

export default function App(middleware) {
  middleware.addListener('INITIALIZE', onInit);
}
