export function submitForgotPassword(username) {
  return {
    type: 'SUBMIT_FORGOT_PASSWORD',
    username,
  };
}
