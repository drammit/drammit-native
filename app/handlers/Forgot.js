// @flow

import { requestForgotPassword } from '../api/Forgot';

function handleForgotPasswordSubmit(dispatch, action) {
  requestForgotPassword(action.username);
}

export default function Forgot(middleware) {
  middleware.addListener('SUBMIT_FORGOT_PASSWORD', handleForgotPasswordSubmit);
}
