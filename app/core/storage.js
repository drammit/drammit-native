// @flow

import { AsyncStorage } from 'react-native';

export const setItem =
  (key: string, value: any): Promise => AsyncStorage.setItem(key, JSON.stringify(value));

export const getItem =
  (key: string): Promise<string> => AsyncStorage.getItem(key).then(value => JSON.parse(value));
