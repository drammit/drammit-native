import RNFetchBlob from 'react-native-fetch-blob';

export function emailExists(email) {
  return Promise.resolve(false);
}

export function userExists(username) {
  return Promise.resolve(false);
}

export function registerUser(username, fullName, avatar) {
  RNFetchBlob
    .fetch('POST', 'http://localhost:3030', {}, RNFetchBlob.wrap(avatar.uri))
    .uploadProgress((written, total) => {
      console.log('uploaded', written / total);
    })
    // listen to download progress event
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
