// @flow

import React from 'react';
import { NativeModules } from 'react-native';
import { Route, NativeRouter } from 'react-router-native';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form';
import { createMiddleware } from 'redux-listeners';

import { setStore } from './core/fetch';

import reducers from './reducers';
import handlers from './handlers';

import AppComponent from './components/Layout/App';
import AnimatedRoutes from './components/Router/AnimatedRoutes';

import Welcome from './pages/Welcome';
import SignUp from './pages/SignUp';
import TimeLine from './pages/Timeline';
import Search from './pages/Search';
import Whisky from './pages/Whisky';

const actionMiddleware = createMiddleware();

const store = createStore(
  combineReducers({
    ...reducers,
    form: formReducer,
  }),
  compose(
    applyMiddleware(actionMiddleware),
    // eslint-disable-next-line no-underscore-dangle
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

setStore(store);
handlers(actionMiddleware);

const App = () => (
  <Provider store={store}>
    <NativeRouter>
      <AppComponent>
        <AnimatedRoutes>
          <Route path="/" component={Welcome} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/time-line" component={TimeLine} />
          <Route path="/search" component={Search} />
          <Route path="/whisky" component={Whisky} />
        </AnimatedRoutes>
      </AppComponent>
    </NativeRouter>
  </Provider>
);

// ignore Remote Debugger warnings
// $FlowExpectedError
console.disableYellowBox = true; // eslint-disable-line no-console
// $FlowExpectedError
NativeModules.ExceptionsManager = null;

export default App;
