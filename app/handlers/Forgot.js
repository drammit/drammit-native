// @flow

import { requestForgotPassword, validateResetToken, resetPassword } from '../api/Forgot';

import { validResetToken, invalidResetToken } from '../actions/Forgot';

function handleForgotPasswordSubmit(dispatch, action) {
  requestForgotPassword(action.username);
}

async function handleValidateToken(dispatch, action) {
  try {
    const valid = await validateResetToken(action.UserId, action.token);

    if (valid) {
      dispatch(validResetToken());
    } else {
      dispatch(invalidResetToken());
    }
  } catch (e) {
    dispatch(invalidResetToken());
  }
}

function handleResetPassword(dispatch, action) {
  resetPassword(action.UserId, action.token, action.password);
}

export default function Forgot(middleware) {
  middleware.addListener('SUBMIT_FORGOT_PASSWORD', handleForgotPasswordSubmit);
  middleware.addListener('VALIDATE_RESET_TOKEN', handleValidateToken);
  middleware.addListener('RESET_PASSWORD', handleResetPassword);
}
