// @flow

import { getItem, setItem } from './storage';

export async function currentToken() {
  const [token, UserId] =
    await Promise.all([getItem('logintoken:token'), getItem('logintoken:userid')]);

  if (!token || !UserId) {
    return null;
  }

  return {
    token,
    UserId,
  };
}

export function saveToken(token: string, UserId: number) {
  return [
    setItem('logintoken:token', token),
    setItem('logintoken:userid', UserId),
  ];
}
