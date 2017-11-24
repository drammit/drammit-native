// @flow

import React, { Component } from 'react';
import { View } from 'react-native';
import { NativeRouter, Route } from 'react-router-native';

import Welcome from './Welcome';
import About from './About';

import styles from './Styles';

export default class App extends Component<{}> {
  render() {
    return (
      <NativeRouter>
        <View style={styles.container}>
          <Route exact path="/" component={Welcome}/>
          <Route path="/about" component={About}/>
        </View>
      </NativeRouter>
    );
  }
}
