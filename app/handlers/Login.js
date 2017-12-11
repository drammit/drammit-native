// @flow

import { facebookLogin } from '../api/Login';

import { facebookLoginSuccess, facebookLoginFailed } from '../actions/Login';

import { push } from '../core/push';

async function handleFacebookLogin(dispatch, action) {
  try {
    const result = await facebookLogin(action.email, action.id);

    if (result) {
      dispatch(facebookLoginSuccess(result));
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

export default function Login(middleware) {
  middleware.addListener('FACEBOOK_LOGIN', handleFacebookLogin);
}
