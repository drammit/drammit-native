// @flow

import { AsyncStorage } from 'react-native';

export const setItem =
  (key: string, value: any): Promise<null> => AsyncStorage.setItem(key, JSON.stringify(value));

export const getItem =
  (key: string): Promise<string> => AsyncStorage.getItem(key).then(value => JSON.parse(value));

export const removeItem = (key: string): Promise<null> => AsyncStorage.removeItem(key);
