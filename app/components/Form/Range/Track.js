// @flow

import React, { Component } from 'react';
import { View } from 'react-native';

import Handle from './Handle';

import { colors, sizes } from '../../../Config.styles';

function calcValue(position, max, width) {
  return Math.floor(position / (width / (max - 1)));
}

function calcValues(positions, max, width) {
  return positions.map(position => calcValue(position, max, width));
}

function calcPosition(value, max, width) {
  return (width / (max - 1)) * value;
}

function calcPositions(values, max, width) {
  return values.map(value => calcPosition(value, max, width));
}

type TrackType = {
  totalItems: number,
  values: Array<number>,
  size: number,
  onUpdate: Function,
};

type TrackStateType = {
  trackWidth: number,
  positions: Array<number>,
};

class Track extends Component<TrackType, TrackStateType> {
  static defaultProps = {
    size: 25,
  };

  constructor(props: TrackType) {
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

  onUpdatePositions: (handle: number) => (pos: number) => void;

  updateTrackWidth(event: any) {
    const newWidth = event.nativeEvent.layout.width;
    const { totalItems, size } = this.props;

    this.setState({
      trackWidth: newWidth,
      positions: calcPositions(this.props.values, totalItems, newWidth - size),
    });
  }

  updatePositions(pos1: number, pos2: number) {
    const { onUpdate, totalItems, size } = this.props;
    const { trackWidth } = this.state;

    if (typeof onUpdate === 'function') {
      onUpdate(calcValues([pos1, pos2], totalItems, trackWidth - size));
    }

    this.setState({
      positions: [pos1, pos2],
    });
  }

  render() {
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

export default Track;
