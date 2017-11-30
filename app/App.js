// @flow

import React from 'react';
import { Platform } from 'react-native';
import { Route, NativeRouter } from 'react-router-native';
import { createStore, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form';
import devTools from 'remote-redux-devtools';

import reducers from './reducers';

import AppComponent from './components/Layout/App';

import Welcome from './pages/Welcome';

const store = createStore(
  combineReducers({
    ...reducers,
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
      <AppComponent>
        <Route path="/" component={Welcome} />
      </AppComponent>
    </NativeRouter>
  </Provider>
);

// ignore Remote Debugger warnings
console.ignoredYellowBox = ['Remote debugger'];

export default App;
