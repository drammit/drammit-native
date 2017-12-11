// @flow

export function submitForgotPassword(username) {
  return {
    type: 'SUBMIT_FORGOT_PASSWORD',
    username,
  };
}

export function facebookLogin(id, email, name) {
  return {
    type: 'FACEBOOK_LOGIN',
    id,
    email,
    name,
  };
}

export function facebookLoginSuccess(token) {
  return { type: 'FACEBOOK_LOGIN_SUCCESS', token };
}

export function facebookLoginFailed(message) {
  return { type: 'FACEBOOK_LOGIN_FAILED', message };
}
