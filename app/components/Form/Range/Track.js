// @flow

import React, { Component } from 'react';
import type { Element } from 'react';
import { View, Text } from 'react-native';

import Handle from './Handle';

import { colors, sizes } from '../../../Config.styles';

type TrackType = {};

class Track extends Component<TrackType> {
  constructor(props) {
    super(props);

    this.state = {
      trackWidth: 0,
    };
  }

  updateTrackWidth(event) {
    this.setState({
      trackWidth: event.nativeEvent.layout.width,
    });
  }

  render(): Element<any> {
    const { trackWidth } = this.state;

    return (
      <View
        onLayout={event => this.updateTrackWidth(event)}
        style={{
          height: 4,
          backgroundColor: colors.grey4,
          width: 'auto',
          margin: sizes.padding * 2,
        }}
      >
        <Handle min={0} max={trackWidth} />
      </View>
    );
  }
}

export default Track;
