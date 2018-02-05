// @flow

import { facebookLogin, authenticate } from '../api/Login';

import {
  loginUserSuccess,
  loginUserFailed,
  facebookLoginFailed,
} from '../actions/Login';

import { push } from '../core/push';
import { saveToken, clearToken } from '../core/login-token';

async function handleFacebookLogin(dispatch, action) {
  try {
    const user = await facebookLogin(action.email, action.id);

    if (user) {
      dispatch(loginUserSuccess(user));
    } else {
      // redirect to sign up
      push('/sign-up/step-2', {
        email: action.email,
        facebookId: action.id,
        fullName: action.name,
      });
    }
  } catch (e) {
    dispatch(facebookLoginFailed(e.message));
  }
}

async function handleLoginUser(dispatch, action) {
  if (!action.username || !action.password) {
    dispatch(loginUserFailed('Fill in your credentials'));
    return;
  }

  try {
    const user = await authenticate(action.username, action.password);
    dispatch(loginUserSuccess(user));
  } catch (e) {
    dispatch(loginUserFailed(e.message));
  }
}

function handleLoginSuccess(dispatch, action) {
  // save token
  saveToken(action.user.token, action.user.id);

  // go to time line
  push('/time-line');
}

function handleLogout() {
  // remove token
  clearToken();

  // go to home
  push('/');
}

export default function Login(middleware: ReduxListener) {
  middleware.addListener('FACEBOOK_LOGIN', handleFacebookLogin);
  middleware.addListener('LOGIN_USER', handleLoginUser);
  middleware.addListener('LOGIN_USER_SUCCESS', handleLoginSuccess);
  middleware.addListener('LOGOUT_USER', handleLogout);
}
