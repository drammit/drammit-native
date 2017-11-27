// @flow

import React from 'react';
import { View, Platform } from 'react-native';
import { NativeRouter, Route } from 'react-router-native';
import { createStore, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import devTools from 'remote-redux-devtools';

import Welcome from './pages/Welcome';

import styles from './App.styles';

const store = createStore(
  combineReducers({
    test: () => true,
  }),
  compose(
    devTools({
      name: Platform.OS,
      hostname: 'localhost',
      port: 5678,
    }),
  ),
);

console.log(window);

export default () => (
  <Provider store={store}>
    <NativeRouter>
      <View style={styles.container}>
        <Route path="/" component={Welcome} />
      </View>
    </NativeRouter>
  </Provider>
);
