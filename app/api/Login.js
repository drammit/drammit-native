// @flow

import { post } from '../core/fetch';

export function authenticate(username: string, password: string) {
  return post('/user/authenticate', { username, password });
}

export function facebookLogin(email: string, id: string) {
  return post('/user/facebook-login', { email, id });
}
