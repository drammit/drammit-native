// @flow

import {
  LoginManager,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk';

function getUserInfo(): Promise<{ id: string, email: string, name: string }> {
  return new Promise((resolve, reject) => {
    // Create a graph request asking for user information with a callback to handle the response.
    const infoRequest = new GraphRequest(
      '/me?fields=email,name',
      null,
      (error, result) => {
        if (error) {
          reject(error);
          return;
        }

        if (typeof result === 'undefined' || result === null) {
          reject(new Error('Empty result'));
          return;
        }

        if (!result.id || !result.email || !result.name) {
          reject(new Error('Invalid user response'));
          return;
        }

        resolve(result);
      },
    );
    // Start the graph request.
    new GraphRequestManager().addRequest(infoRequest).start();
  });
}

type loginResponse = { id: string, email: string, name: string };

export async function loginToFacebook(): Promise<loginResponse | null> {
  try {
    const result = await LoginManager.logInWithReadPermissions(['public_profile', 'email']);

    if (result.isCancelled) {
      return null;
    }

    return getUserInfo();
  } catch (e) {
    throw new Error(e);
  }
}
