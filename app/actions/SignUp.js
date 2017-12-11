// @flow

export function signupStep1(email, password) {
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

export function signupStep1Failed(message) {
  return {
    type: 'SIGNUP_STEP_1_FAILED',
    message,
  };
}

export function signupStep2(username, fullName, avatar) {
  return {
    type: 'SIGNUP_STEP_2',
    username,
    fullName,
    avatar,
  };
}

export function signupStep2Success(user) {
  return {
    type: 'SIGNUP_STEP_2_SUCCESS',
    user,
  };
}

export function signupStep2Failed(message) {
  return {
    type: 'SIGNUP_STEP_2_FAILED',
    message,
  };
}
