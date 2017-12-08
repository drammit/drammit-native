// @flow

import { Linking } from 'react-native';
import { parse as parseUrl } from 'uri-js';
import { parse as parseQS } from 'query-string';

const allowedRoutes = ['/reset-password'];

function handleNavigation(history, url: string) {
  const parsedUrl = parseUrl(url);
  const path = `/${parsedUrl.host}${parsedUrl.path}`;
  let data = {};

  console.info(`Receiving url request ${url}`);

  if (parsedUrl.scheme !== 'drammit') {
    return;
  }

  if (allowedRoutes.indexOf(path) === -1) {
    return;
  }

  if (parsedUrl.query && parsedUrl.query !== '') {
    data = parseQS(parsedUrl.query);
  }

  console.info(`Navigating to ${path}`);

  history.push(path, data);
}

function handleUrlEvent(history) {
  return (event) => {
    handleNavigation(history, event.url);
  };
}

export default async function setupDeepLinking(history: { push: Function }) {
  // register url event
  Linking.addEventListener('url', handleUrlEvent(history));

  // handle initial url
  const url = await Linking.getInitialURL();
  if (url !== null) {
    handleNavigation(history, url);
  }
}
