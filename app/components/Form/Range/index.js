// @flow

import React, { Component } from 'react';
import type { Element } from 'react';
import { View, Text } from 'react-native';

import { sizes } from '../../../Config.styles';

import Title from '../Title';

import Track from './Track';
import Indicator from './Indicator';

type RangeType = {
  title: string,
  items: Array<string | number>,
};

class Range extends Component<RangeType> {
  render(): Element<any> {
    const { title, items } = this.props;

    return (
      <View>
        <Title>{title}</Title>
        <Indicator position="left" text="All" />
        <Indicator position="right" text="25" />
        <View
          style={{
            height: 25,
            marginTop: 6,
            marginBottom: 6,
            marginLeft: sizes.padding * 4,
            marginRight: sizes.padding * 4,
            width: 'auto',
          }}
        >
          <Track />
        </View>
      </View>
    );
  }
}

export default Range;
