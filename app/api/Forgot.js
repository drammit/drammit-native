// @flow

import { post } from '../core/fetch';

export function requestForgotPassword(username: string) {
  return post('/user/forgot-password', { username });
}
