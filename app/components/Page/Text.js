// @flow

import React from 'react';
import type { Element } from 'react';
import { View, Text } from 'react-native';

import styles from './Text.styles';

function TextElement({ children }: { children: any }): Element<any> {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{ children }</Text>
    </View>
  );
}

export default TextElement;
