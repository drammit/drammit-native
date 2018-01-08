// @flow

import React, { Component } from 'react';
import type { Element } from 'react';
import { View, Text } from 'react-native';

import Title from '../Title';

import Track from './Track';

type RangeType = {
  title: string,
  items: Array<string|number>,
};

class Range extends Component<RangeType> {
  render(): Element<any> {
    const { title, items } = this.props;

    return (
      <View>
        <Title>{title}</Title>
        <View style={{ height: 60 }}>
          <Track />
        </View>
      </View>
    );
  }
}

export default Range;
