// @flow

import React from 'react';
import { Platform } from 'react-native';
import { NativeRouter, Route } from 'react-router-native';
import { createStore, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import devTools from 'remote-redux-devtools';

import Container from './components/Layout/Container';

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

const App = () => (
  <Provider store={store}>
    <NativeRouter>
      <Route style={styles.container} path="/" component={Welcome} />
    </NativeRouter>
  </Provider>
);

export default App;
