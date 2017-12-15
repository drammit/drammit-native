// @flow

import React from 'react';
import type { Element } from 'react';
import SvgUri from 'react-native-svg-uri';

import Drammit from './drammit-logo.svg';

function Logo({ style }: { style: any }): Element<any> {
  const ratio = 596.3 / 88.9;
  const width = style.width ? style.width : 300;

  return (
    <SvgUri
      style={{
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        ...style,
      }}
      width={width}
      height={width / ratio}
      source={Drammit}
    />
  );
}

export default Logo;
