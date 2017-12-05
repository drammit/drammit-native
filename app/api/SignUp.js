import RNFetchBlob from 'react-native-fetch-blob';
import Config from 'react-native-config';

export function emailExists(email) {
  return Promise.resolve(false);
}

export function userExists(username) {
  return Promise.resolve(false);
}

export function registerUser(username, fullName, avatar) {
  RNFetchBlob
    .fetch(
      'POST',
      `${Config.API_URL}/user/register`,
      {},
      [
        {
          name: 'username',
          data: username,
        },
        {
          name: 'fullName',
          data: fullName,
        },
        {
          name: 'avatar',
          filename: avatar.filename,
          data: RNFetchBlob.wrap(avatar.uri),
        },
      ],
    )
    .uploadProgress((written, total) => {
      console.log('uploaded', written / total);
    })
    .progress((received, total) => {
      console.log('progress', received / total);
    })
    .then((resp) => {
      console.info(resp);
    });

  // return Promise.resolve({
  //   username,
  //   fullName,
  // });
}
