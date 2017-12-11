// @flow

export function submitForgotPassword(username) {
  return {
    type: 'SUBMIT_FORGOT_PASSWORD',
    username,
  };
}

export function facebookLogin(id, email) {
  return {
    type: 'FACEBOOK_LOGIN',
    id,
    email,
  };
}
