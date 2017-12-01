// @flow

import { signupStep1Success, signupStep1Failed } from '../actions/SignUp';

async function handleSignUp(dispatch, action) {
  try {
    const result = await something(action.email);

    dispatch(signupStep1Success());
  } catch (e) {
    dispatch(signupStep1Failed(e.message));
  }
}

export default function SignUp(middleware) {
  middleware.addListener('SIGNUP_STEP_1', handleSignUp);
}
