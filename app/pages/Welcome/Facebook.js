// @flow

import { LoginManager } from 'react-native-fbsdk';

export function loginToFacebook() {
  LoginManager.logInWithReadPermissions(['public_profile']);
}
