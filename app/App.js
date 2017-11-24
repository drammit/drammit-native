// @flow

import React from 'react';
import { View } from 'react-native';
import { NativeRouter, Route } from 'react-router-native';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import Welcome from './Welcome';
import About from './About';

import styles from './Styles';

export default () => (
  <NativeRouter>
    <View style={styles.container}>
      <Route exact path="/" component={Welcome} />
      <Route path="/about" component={About} />
    </View>
  </NativeRouter>
);
