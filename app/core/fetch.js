// @flow

import RNFetchBlob from 'react-native-fetch-blob';
import Config from 'react-native-config';

import { uploadProgress, fetchError } from '../actions/App';

let store = { dispatch() {} };

export function setStore(newStore: any) {
  store = newStore;
}

function createUrl(url) {
  return `${Config.API_URL}${url}`;
}

function containsFile(data) {
  return Object.keys(data).some(key => data[key] && data[key].uri);
}

async function handleError(response) {
  if (!response.ok) {
    throw new Error(await response.text());
  }

  return response;
}

function handleFetchError(e) {
  store.dispatch(fetchError(e.message || e));
}

function sendFormData(url, data) {
  store.dispatch(uploadProgress(0));

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
    .catch(handleFetchError)
    .uploadProgress((written, total) => {
      store.dispatch(uploadProgress(written / total));
    })
    .progress((received, total) => {
      store.dispatch(uploadProgress(received / total));
    });
}

export function post(url: string, data: any): Promise<any> {
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
  )
    .then(handleError)
    .then(resp => resp.json())
    .catch(handleFetchError);
}

export function get(url: string): Promise<any> {
  return fetch(
    createUrl(url),
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    },
  )
    .then(handleError)
    .then(resp => resp.json())
    .catch(handleFetchError);
}
