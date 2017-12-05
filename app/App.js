// @flow

import React from 'react';
import { Platform, NativeModules } from 'react-native';
import { Route, NativeRouter } from 'react-router-native';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form';
import devTools from 'remote-redux-devtools';
import { createMiddleware } from 'redux-listeners';

import reducers from './reducers';
import handlers from './handlers';

import AppComponent from './components/Layout/App';

import Welcome from './pages/Welcome';
import SignUp from './pages/SignUp';

const actionMiddleware = createMiddleware();

const store = createStore(
  combineReducers({
    ...reducers,
    form: formReducer,
  }),
  compose(
    applyMiddleware(actionMiddleware),
    devTools({
      name: Platform.OS,
      hostname: 'localhost',
      port: 5678,
    }),
  ),
);

handlers(actionMiddleware);

const App = () => (
  <Provider store={store}>
    <NativeRouter>
      <AppComponent>
        <Route path="/" component={Welcome} />
        <Route path="/sign-up" component={SignUp} />
      </AppComponent>
    </NativeRouter>
  </Provider>
);

// ignore Remote Debugger warnings
console.disableYellowBox = true;
NativeModules.ExceptionsManager = null;

export default App;
