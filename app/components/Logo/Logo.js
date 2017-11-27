// @flow

import React from 'react';
import type { Element } from 'react';
import { Image } from 'react-native';

import Drammit from './Drammit.png';

function Logo(): Element<any> {
  return (
    <Image
      style={{
        width: '80%',
        resizeMode: 'contain',
      }}
      source={Drammit}
    />
  );
}

export default Logo;
