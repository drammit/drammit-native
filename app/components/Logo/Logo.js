// @flow

import React from 'react';
import type { Element } from 'react';
import SvgUri from 'react-native-svg-uri';

import Drammit from './drammit-logo.svg';

function Logo({ style }: { style: any }): Element<any> {
  return (
    <SvgUri
      style={{
        width: '80%',
        ...style,
      }}
      width={300}
      height={45}
      source={Drammit}
    />
  );
}

export default Logo;
