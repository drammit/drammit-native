// @flow

import { post } from '../core/fetch';

export function requestForgotPassword(username: string) {
  return post('/user/forgot-password', { username });
}

export function validateResetToken(UserId: string, token: string) {
  return post('/user/validate-reset-token', { UserId, token });
}

export function resetPassword(UserId: string, token: string, password: string) {
  return post('/user/reset-password', { UserId, token, password });
}
