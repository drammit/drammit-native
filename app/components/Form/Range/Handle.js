// @flow

import React, { Component } from 'react';
import { View, PanResponder } from 'react-native';

import { colors } from '../../../Config.styles';

type HandleType = {
  position: number,
  size: number,
  min: number,
  max: number,
  onUpdate?: Function,
};

type HandleStateType = {
  moveX: number,
  posX: number,
  moving: boolean,
};

class Handle extends Component<HandleType, HandleStateType> {
  constructor(props: HandleType) {
    super(props);

    this.initializePanhandler();

    this.state = {
      moveX: 0,
      posX: props.position || 0,
      moving: false,
    };
  }

  componentWillReceiveProps(nextProps: HandleType) {
    const { posX, moving } = this.state;

    if (!moving && nextProps.position !== posX) {
      this.setState({
        posX: nextProps.position,
      });
    }
  }

  initializePanhandler() {
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

      onPanResponderGrant: () => {
        this.setState({
          moving: true,
        });
      },

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
          moving: false,
        });
      },
    });
  }

  panResponder: any;

  updatePosition(posX: number) {
    const { onUpdate } = this.props;

    if (typeof onUpdate === 'function') {
      onUpdate(posX);
    }
  }

  render() {
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
