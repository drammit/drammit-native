// @flow

import SignUp from './SignUp';
import Forgot from './Forgot';

export default function registerListeners(middleware: ReduxListener) {
  // register all listeners
  console.info('Registering all listeners');

  [SignUp, Forgot].map(f => f(middleware));
}
