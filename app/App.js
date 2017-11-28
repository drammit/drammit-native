// @flow

import React from 'react';
import { Platform } from 'react-native';
import { NativeRouter, Route } from 'react-router-native';
import { createStore, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form';
import devTools from 'remote-redux-devtools';

import Welcome from './pages/Welcome';

import styles from './App.styles';

const store = createStore(
  combineReducers({
    test: () => true,
    form: formReducer,
  }),
  compose(
    devTools({
      name: Platform.OS,
      hostname: 'localhost',
      port: 5678,
    }),
  ),
);

const App = () => (
  <Provider store={store}>
    <NativeRouter>
      <Route style={styles.container} path="/" component={Welcome} />
    </NativeRouter>
  </Provider>
);

// ignore Remote Debugger warnings
console.ignoredYellowBox = ['Remote debugger'];

export default App;
