// @flow

import SignUp from './SignUp';
import Forgot from './Forgot';
import Login from './Login';

export default function registerListeners(middleware: ReduxListener) {
  // register all listeners
  console.info('Registering all listeners');

  [SignUp, Forgot, Login].map(f => f(middleware));
}
