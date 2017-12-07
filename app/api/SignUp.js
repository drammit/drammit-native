import { post, get } from '../core/fetch';

export function emailExists(email) {
  return get(`/user/exists?email=${email}`);
}

export function userExists(username) {
  return get(`/user/exists?username=${username}`);
}

export function registerUser(username, fullName, avatar) {
  return post('/user/register', { username, fullName, avatar });
}
