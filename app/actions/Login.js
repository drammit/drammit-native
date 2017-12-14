// @flow

export function loginUser(username, password) {
  return {
    type: 'LOGIN_USER',
    username,
    password,
  };
}

export function loginUserSuccess(user) {
  return { type: 'LOGIN_USER_SUCCESS', user };
}

export function loginUserFailed(message) {
  return {
    type: 'LOGIN_USER_FAILED',
    message,
  };
}

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

export function facebookLoginFailed(message) {
  return { type: 'FACEBOOK_LOGIN_FAILED', message };
}
