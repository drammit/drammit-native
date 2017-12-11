// @flow

import {
  LoginManager,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk';

function getUserInfo() {
  return new Promise((resolve, reject) => {
    // Create a graph request asking for user information with a callback to handle the response.
    const infoRequest = new GraphRequest(
      '/me?fields=email,name',
      null,
      (error, result) => {
        if (error) {
          reject(error);
        }

        resolve(result);
      },
    );
    // Start the graph request.
    new GraphRequestManager().addRequest(infoRequest).start();
  });
}

export async function loginToFacebook() {
  try {
    const result = await LoginManager.logInWithReadPermissions(['public_profile', 'email']);

    if (result.isCancelled) {
      return {};
    }

    const userInfo = await getUserInfo();

    return userInfo;
  } catch (e) {
    throw new Error(e);
  }
}
