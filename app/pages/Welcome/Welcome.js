// @flow

import React from 'react';
import type { Element } from 'react';
import { Text, View, Platform } from 'react-native';
import { Link } from 'react-router-native';

import styles from './Styles';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
  'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
  'Shake or press menu button for dev menu',
});

function Welcome(): Element<any> {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
        Welcome to React Native!
      </Text>
      <Text style={styles.instructions}>
        To get started, edit App.js
      </Text>
      <Text style={styles.instructions}>
        {instructions}
      </Text>
      <Link to="/about">
        <Text>Go to about</Text>
      </Link>
    </View>
  );
}

export default Welcome;