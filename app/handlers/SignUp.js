// @flow

function handleSignUp(dispatch, action) {
  console.log(action);
}

export default function SignUp(middleware) {
  middleware.addListener('SIGNUP_STEP_1', handleSignUp);
}
