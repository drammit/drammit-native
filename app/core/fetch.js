// @flow

import RNFetchBlob from 'react-native-fetch-blob';
import Config from 'react-native-config';

function createUrl(url) {
  return `${Config.API_URL}${url}`;
}

function containsFile(data) {
  return Object.keys(data).some(key => data[key] && data[key].uri);
}

function sendFormData(url, data) {
  return RNFetchBlob
    .fetch(
      'POST',
      createUrl(url),
      {},
      Object.keys(data).map((key) => {
        const value = data[key];

        if (!value) {
          return null;
        }

        if (value.uri) {
          return {
            name: key,
            filename: value.filename,
            data: RNFetchBlob.wrap(value.uri),
          };
        }

        return {
          name: key,
          data: value,
        };
      }).filter(value => value !== null),
    )
    .uploadProgress((written, total) => {
      console.log('uploaded', written / total);
    })
    .progress((received, total) => {
      console.log('progress', received / total);
    });
}

export function post(url, data): Promise<any> {
  if (containsFile(data)) {
    return sendFormData(url, data).then(resp => resp.json());
  }

  return fetch(
    createUrl(url),
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    },
  ).then(resp => resp.json());
}
