// @flow

export function signupStep1(email: string, password: string) {
  return {
    type: 'SIGNUP_STEP_1',
    email,
    password,
  };
}

export function signupStep1Success() {
  return {
    type: 'SIGNUP_STEP_1_SUCCESS',
  };
}

export function signupStep1Failed(message: string) {
  return {
    type: 'SIGNUP_STEP_1_FAILED',
    message,
  };
}

export function signupStep2(
  email: string,
  password: string,
  username: string,
  fullName: string,
  avatar: string,
  facebookId: string,
) {
  return {
    type: 'SIGNUP_STEP_2',
    email,
    password,
    username,
    fullName,
    avatar,
    facebookId,
  };
}

export function signupStep2Failed(message: string) {
  return {
    type: 'SIGNUP_STEP_2_FAILED',
    message,
  };
}
