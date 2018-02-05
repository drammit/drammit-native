// @flow

import React from 'react';
import { View, Text } from 'react-native';

import styles from './Error.styles';

function Error({ message }: { message: string }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

export default Error;
