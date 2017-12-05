import RNFetchBlob from 'react-native-fetch-blob';
import Config from 'react-native-config';

import { post } from '../core/fetch';

export function emailExists(email) {
  return Promise.resolve(false);
}

export function userExists(username) {
  return Promise.resolve(false);
}

export function registerUser(username, fullName, avatar) {
  return post('/user/register', { username, fullName, avatar });
}
