// @flow

import { emailExists } from '../api/SignUp';

import { signupStep1Success, signupStep1Failed } from '../actions/SignUp';

async function handleSignUp(dispatch, action) {
  try {
    const exists = await emailExists(action.email);

    if (exists) {
      dispatch(signupStep1Failed(`${action.email} is already in use`));
    } else {
      dispatch(signupStep1Success());
    }
  } catch (e) {
    dispatch(signupStep1Failed(e.message));
  }
}

export default function SignUp(middleware) {
  middleware.addListener('SIGNUP_STEP_1', handleSignUp);
}
