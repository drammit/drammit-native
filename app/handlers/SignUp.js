// @flow

import { emailExists, userExists, registerUser } from '../api/SignUp';

import {
  signupStep1Success,
  signupStep1Failed,
  signupStep2Failed,
} from '../actions/SignUp';
import { loginUserSuccess } from '../actions/Login';

async function handleSignUpStep1(dispatch, action) {
  try {
    const exists = await emailExists(action.email);

    if (exists) {
      dispatch(signupStep1Failed(`'${action.email}' is already in use`));
    } else {
      dispatch(signupStep1Success());
    }
  } catch (e) {
    dispatch(signupStep1Failed(e.message));
  }
}

async function handleSignUpStep2(dispatch, action) {
  try {
    const exists = await userExists(action.username);

    if (exists) {
      dispatch(signupStep2Failed(`Username '${action.username}' is already in use`));
      return;
    }

    const {
      email, password, username, fullName, avatar, facebookId,
    } = action;

    const user = await registerUser({
      email, password, username, fullName, avatar, facebookId,
    });

    dispatch(loginUserSuccess(user));
  } catch (e) {
    dispatch(signupStep2Failed(e.message));
  }
}

export default function SignUp(middleware) {
  middleware.addListener('SIGNUP_STEP_1', handleSignUpStep1);
  middleware.addListener('SIGNUP_STEP_2', handleSignUpStep2);
}
