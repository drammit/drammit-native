// @flow

import React from 'react';
import type { Element } from 'react';
import { StatusBar, View, StyleSheet } from 'react-native';

import Logo from '../Logo/Logo';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function Initializing(): Element<any> {
  return (
    <View style={styles.container}>
      <StatusBar
        animated
        translucent
        barStyle="dark-content"
        showHideTransition="slide"
        hidden
      />
      <Logo style={{ width: '40%', opacity: 0.3 }} />
    </View>
  );
}

export default Initializing;
