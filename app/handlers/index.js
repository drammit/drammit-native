// @flow

import App from './App';
import SignUp from './SignUp';
import Forgot from './Forgot';
import Login from './Login';

export default function registerListeners(middleware: ReduxListener) {
  // register all listeners
  console.info('Registering all listeners');

  [App, SignUp, Forgot, Login].map(f => f(middleware));
}
