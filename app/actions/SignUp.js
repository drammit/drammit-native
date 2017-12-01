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
