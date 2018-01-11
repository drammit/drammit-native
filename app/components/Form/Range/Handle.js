// @flow

import React, { Component } from 'react';
import type { Element } from 'react';
import { View, PanResponder } from 'react-native';

import { colors } from '../../../Config.styles';

type HandleType = {
  start?: number,
  size: number,
  min: number,
  max: number,
  onUpdate?: Function,
};

type HandleStateType = {
  moveX: number,
};

class Handle extends Component<HandleType, HandleStateType> {
  constructor(props) {
    super(props);

    this.state = {
      moveX: 0,
      posX: props.start || 0,
    };
  }

  componentWillMount() {
    function posx(min, max, newPos) {
      if (newPos < min) {
        return min;
      }

      if (newPos > max) {
        return max;
      }

      return newPos;
    }

    this.panResponder = PanResponder.create({
      // Ask to be the responder:
      onStartShouldSetPanResponder: () => true,
      onStartShouldSetPanResponderCapture: () => true,
      onMoveShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponderCapture: () => true,

      onPanResponderMove: (evt, gestureState) => {
        const { posX } = this.state;
        const { min, max, size } = this.props;

        let moveX = gestureState.dx;

        if (posX + gestureState.dx < min) {
          moveX = (posX * -1) + min;
        }

        if (posX + gestureState.dx > max - size) {
          moveX = (max - size) - posX;
        }

        this.updatePosition(posX + moveX);

        return this.setState({
          moveX,
        });
      },
      onPanResponderTerminationRequest: () => true,
      onPanResponderRelease: (evt, gestureState) => {
        const {
          min,
          max,
          size,
        } = this.props;
        const newPos = this.state.posX + gestureState.dx;
        const posX = posx(min, (max - size), newPos);

        this.updatePosition(posX);

        this.setState({
          moveX: 0,
          posX: posx(min, (max - size), newPos),
        });
      },
    });
  }

  updatePosition(posX: number) {
    const { onUpdate } = this.props;

    if (typeof onUpdate === 'function') {
      onUpdate(posX);
    }
  }

  render(): Element<any> {
    const { size } = this.props;
    const { posX, moveX } = this.state;

    return (
      <View
        {...this.panResponder.panHandlers}
        style={{
          backgroundColor: colors.lightGreen,
          borderRadius: size,
          width: size,
          height: size,
          left: posX,
          position: 'absolute',
          transform: [{ translateX: moveX }, { translateY: ((size / 2) * -1) + 2 }],
        }}
      />
    );
  }
}

export default Handle;
