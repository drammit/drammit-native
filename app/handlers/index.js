// @flow

import SignUp from './SignUp';

export default function registerListeners(middleware) {
  // register all listeners
  console.info('Registering all listeners');

  [SignUp].map(f => f(middleware));
}
