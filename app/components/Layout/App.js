// @flow

import React from 'react';
import type { Element } from 'react';
import { connect } from 'react-redux';
import { View, StatusBar } from 'react-native';

import styles from './App.styles';

type AppType = {
  statusBar: boolean,
  children: Children,
};

function App({ statusBar, children }: AppType): Element<any> {
  return (
    <View style={styles.container}>
      <StatusBar
        animated
        translucent
        barStyle="light-content"
        showHideTransition="slide"
        hidden={!statusBar}
      />
      <View style={styles.statusBar} />
      <View style={styles.container}>
        {children}
      </View>
    </View>
  );
}

function mapStateToProps(state) {
  return {
    statusBar: true,
  };
}

export default connect(mapStateToProps)(App);
