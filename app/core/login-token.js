// @flow

import { getItem, setItem, removeItem } from './storage';

const tokenKey = 'logintoken:token';
const useridKey = 'logintoken:userid';

export async function currentToken(): Promise<null | { token: string, UserId: string }> {
  const [token, UserId] =
    await Promise.all([
      getItem(tokenKey),
      getItem(useridKey),
    ]);

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
    setItem(tokenKey, token),
    setItem(useridKey, UserId),
  ];
}

export function clearToken() {
  return [removeItem(tokenKey), removeItem(useridKey)];
}
