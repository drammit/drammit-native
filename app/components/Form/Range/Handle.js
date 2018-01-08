// @flow

import React, { Component } from 'react';
import type { Element } from 'react';
import { View, PanResponder } from 'react-native';

import { colors } from '../../../Config.styles';

type HandleType = {
  size?: number,
  min: number,
  max: number,
};

type HandleStateType = {
  moveX: number,
};

class Handle extends Component<HandleType, HandleStateType> {
  constructor(props) {
    super(props);

    this.state = {
      moveX: 0,
      posX: 0,
    };
  }

  componentWillMount() {
    this.panResponder = PanResponder.create({
      // Ask to be the responder:
      onStartShouldSetPanResponder: () => true,
      onStartShouldSetPanResponderCapture: () => true,
      onMoveShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponderCapture: () => true,

      onPanResponderMove: (evt, gestureState) => {
        const { posX } = this.state;
        const { min, max, size } = this.props;

        console.log(min, max - size, posX + gestureState.dx);

        if (posX + gestureState.dx < min) {
          return this.setState({
            moveX: posX * -1,
          });
        }

        if (posX + gestureState.dx > max - size) {
          return this.setState({
            moveX: (max - size) - posX,
          });
        }

        return this.setState({
          moveX: gestureState.dx,
        });
      },
      onPanResponderTerminationRequest: () => true,
      onPanResponderRelease: (evt, gestureState) => {
        const { min } = this.props;
        const newPos = this.state.posX + gestureState.dx;

        this.setState({
          moveX: 0,
          posX: newPos < min ? min : newPos,
        });
      },
    });
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

Handle.defaultProps = {
  size: 25,
};

export default Handle;
