// @flow

import React, { Component } from 'react';
import type { Element } from 'react';
import { Text } from 'react-native';

import { colors, sizes } from '../../../Config.styles';

type IndicatorType = {
  position: 'left' | 'right',
  text: string,
};

class Indicator extends Component<IndicatorType> {
  render(): Element<any> {
    const { text, position } = this.props;

    return (
      <Text
        style={{
          position: 'absolute',
          top: 0,
          fontSize: sizes.mini,
          fontWeight: '600',
          marginLeft: sizes.padding * 4,
          marginRight: sizes.padding * 4,
          color: colors.dark,
          left: position === 'left' ? 0 : 'auto',
          right: position === 'right' ? 0 : 'auto',
        }}
      >
        {text}
      </Text>
    );
  }
}

export default Indicator;
