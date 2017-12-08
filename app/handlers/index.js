// @flow

import SignUp from './SignUp';

export default function registerListeners(middleware: ReduxListener) {
  // register all listeners
  console.info('Registering all listeners');

  [SignUp].map(f => f(middleware));
}
