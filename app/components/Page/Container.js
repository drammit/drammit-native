// @flow

import React from 'react';
import { View } from 'react-native';

import styles from './Container.styles';

function Container({ children }: { children: any }) {
  return (
    <View style={styles.container}>
      { children }
    </View>
  );
}

export default Container;
