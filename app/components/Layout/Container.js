// @flow

import React from 'react';
import type { Element } from 'react';
import { View } from 'react-native';

type ContainerType = {
  style: any,
  children: any,
};

function Container({ style, children }: ContainerType): Element<any> {
  return (
    <View
      style={Object.assign({}, {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }, style)}
    >
      {children}
    </View>
  );
}

export default Container;
