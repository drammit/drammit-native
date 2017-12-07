// @flow

import React, { Component } from 'react';
import type { Element } from 'react';
import { connect } from 'react-redux';
import { Animated } from 'react-native';

import { colors } from '../../Config.styles';

const styles = {
  position: 'absolute',
  backgroundColor: colors.brightGreen,
};

type UploadType = {
  show: boolean,
  uploadProgress: number,
};

class Upload extends Component<UploadType> {
  constructor(props) {
    super(props);

    this.state = {
      barWidth: new Animated.Value(0),
      showHeight: new Animated.Value(props.show ? 2 : 0),
    };
  }

  componentWillReceiveProps(nextProps) {
    Animated.timing(
      this.state.barWidth,
      {
        toValue: nextProps.uploadProgress,
        duration: 300,
      },
    ).start();

    if (nextProps.show === true) {
      Animated.timing(
        this.state.showHeight,
        {
          toValue: 2,
          duration: 100,
        },
      ).start();
    } else {
      Animated.timing(
        this.state.showHeight,
        {
          toValue: 0,
          duration: 500,
          delay: 500,
        },
      ).start();
    }
  }

  render(): Element {
    const { barWidth, showHeight } = this.state;

    return (
      <Animated.View
        style={{
          ...styles,
          width: barWidth.interpolate({
            inputRange: [0, 100],
            outputRange: ['0%', '100%'],
          }),
          height: showHeight,
        }}
      />
    );
  }
}

function mapStateToProps(state) {
  const { uploadProgress } = state.app;

  return { uploadProgress };
}

export default connect(mapStateToProps)(Upload);
