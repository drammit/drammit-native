// @flow

import React, { Component } from 'react';
import { View } from 'react-native';

import { sizes } from '../../../Config.styles';

import Title from '../Title';

import Track from './Track';
import Indicator from './Indicator';

type RangeType = {
  title: string,
  initial: Array<number>,
  items: Array<string | number>,
};

type RangeStateType = {
  values: Array<number>,
};

class Range extends Component<RangeType, RangeStateType> {
  constructor(props: RangeType) {
    super(props);

    this.onUpdateValues = this.updateValues.bind(this);

    this.state = {
      values: [...props.initial],
    };
  }

  onUpdateValues: (values: Array<number>) => void;

  updateValues(values: Array<number>) {
    this.setState({
      values,
    });
  }

  render() {
    const { title, items } = this.props;
    const { values } = this.state;

    return (
      <View>
        <Title>{title}</Title>
        <Indicator position="left" text={items[values[0]]} />
        <Indicator position="right" text={items[values[1]]} />
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
          <Track onUpdate={this.onUpdateValues} totalItems={items.length} values={values} />
        </View>
      </View>
    );
  }
}

export default Range;
