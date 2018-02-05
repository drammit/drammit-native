// @flow

import React, { Component } from 'react';
import { Text } from 'react-native';

import { colors, sizes } from '../../Config.styles';

type TitleType = {
  children: string,
};

class Title extends Component<TitleType> {
  render() {
    return (
      <Text
        style={{
          color: colors.grey2,
          textAlign: 'center',
          fontSize: sizes.mini,
          fontWeight: 'bold',
        }}
      >
        {this.props.children.toUpperCase()}
      </Text>
    );
  }
}

export default Title;
