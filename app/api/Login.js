// @flow

import { post } from '../core/fetch';

export function facebookLogin(email: string, id: string) {
  return post('/user/facebook-login', { email, id });
}
