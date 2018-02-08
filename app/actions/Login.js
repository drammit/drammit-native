// @flow

export function loginUser(username: string, password: string) {
  return {
    type: 'LOGIN_USER',
    username,
    password,
  };
}

type userResponseType = {
  id: string,
  email: string,
  username: string,
  name: string,
  avatar: string,
  name: boolean,
};

export function loginUserSuccess(user: userResponseType) {
  return { type: 'LOGIN_USER_SUCCESS', user };
}

export function loginUserFailed(message: string) {
  return {
    type: 'LOGIN_USER_FAILED',
    message,
  };
}

export function logoutUser() {
  return { type: 'LOGOUT_USER' };
}

export function submitForgotPassword(username: string) {
  return {
    type: 'SUBMIT_FORGOT_PASSWORD',
    username,
  };
}

export function facebookLogin(id: string, email: string, name: string) {
  return {
    type: 'FACEBOOK_LOGIN',
    id,
    email,
    name,
  };
}

export function facebookLoginFailed(message: string) {
  return { type: 'FACEBOOK_LOGIN_FAILED', message };
}
