// @flow

import React, { Component } from 'react';
import type { Element } from 'react';
import { View } from 'react-native';

import Handle from './Handle';

import { colors, sizes } from '../../../Config.styles';

type TrackType = {
  totalItems: number,
  values: Array<number>,
  size: number,
};

class Track extends Component<TrackType> {
  constructor(props) {
    super(props);

    this.onUpdatePositions = handle => (pos) => {
      const [pos1, pos2] = this.state.positions;
      this.updatePositions(handle === 1 ? pos : pos1, handle === 2 ? pos : pos2);
    };

    this.state = {
      trackWidth: 0,
      positions: [0, 0],
    };
  }

  calcPositions(values) {
    console.log(values);

    return [...values];
  }

  updateTrackWidth(event) {
    this.setState({
      trackWidth: event.nativeEvent.layout.width,
      positions: this.calcPositions(this.props.values),
    });
  }

  updatePositions(pos1, pos2) {
    this.setState({
      positions: [pos1, pos2],
    });
  }

  render(): Element<any> {
    const { size } = this.props;
    const { trackWidth, positions } = this.state;
    const [pos1, pos2] = positions;

    return (
      <View
        onLayout={event => this.updateTrackWidth(event)}
        style={{
          height: 4,
          backgroundColor: colors.grey4,
          width: 'auto',
          margin: sizes.padding * 2,
          marginLeft: 0,
          marginRight: 0,
        }}
      >
        <View
          style={{
            height: 4,
            width: pos2 - pos1,
            backgroundColor: colors.grey2,
            position: 'absolute',
            left: pos1,
          }}
        />
        <Handle
          size={size}
          position={pos1}
          min={0}
          max={pos2}
          onUpdate={this.onUpdatePositions(1)}
        />
        <Handle
          size={size}
          position={pos2}
          min={pos1 + size}
          max={trackWidth}
          onUpdate={this.onUpdatePositions(2)}
        />
      </View>
    );
  }
}

Track.defaultProps = {
  size: 25,
};

export default Track;
