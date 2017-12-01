export function signupStep1(email, password) {
  return {
    type: 'SIGNUP_STEP_1',
    email,
    password,
  };
}
