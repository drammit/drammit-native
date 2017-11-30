// @flow

import React from 'react';
import type { Element } from 'react';
import { View } from 'react-native';

import styles from './Container.styles';

function Container({ children }: { children: Children }): Element<any> {
  return (
    <View style={styles.container}>
      { children }
    </View>
  );
}

export default Container;
