import { post, get } from '../core/fetch';

export function emailExists(email) {
  return get(`/user/exists?email=${email}`);
}

export function userExists(username) {
  return get(`/user/exists?username=${username}`);
}

export function registerUser({
  email, password, username, fullName, avatar, facebookId,
}) {
  return post('/user/register', {
    email, password, username, fullName, avatar, facebookId,
  });
}
