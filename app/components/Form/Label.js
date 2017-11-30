// @flow

import React from 'react';
import type { Element } from 'react';
import { Text } from 'react-native';

import styles from './Label.styles';

function Label({ children }: { children: Children }): Element<any> {
  return (
    <Text style={styles.label}>{children}</Text>
  );
}

export default Label;
