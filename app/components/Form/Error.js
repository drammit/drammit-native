// @flow

import React from 'react';
import type { Element } from 'react';
import { View, Text } from 'react-native';

import styles from './Error.styles';

function Error({ message }: { message: string }): Element<any> {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

export default Error;
