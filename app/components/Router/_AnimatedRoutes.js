// @flow

import React, { Component } from 'react';
import { Animated, Easing } from 'react-native';
import { withRouter } from 'react-router';

type AnimatedChildRoutesType = ReactRouterType & {
  children: any,
};

type AnimatedChildRoutesStateType = {
  currentPath: string,
  previousChildren: null | any,
  currentChildren: null | any,
  navUp: boolean,
  slideAnimation: Animated.Value,
};

class AnimatedChildRoutes extends Component<AnimatedChildRoutesType, AnimatedChildRoutesStateType> {
  static getDerivedStateFromProps(nextProps, prevState) {
    // determine if we need to switch page
    const { currentPath, currentChildren } = prevState;
    const { location, children } = nextProps;

    const newPath = location.pathname;

    if (currentPath !== newPath) {
      return {
        previousChildren: currentChildren,
        currentChildren: children.map(React.cloneElement),
        currentPath: newPath,
        navUp: currentPath.indexOf(newPath) === 0,
      };
    }

    return prevState;
  }

  constructor(props) {
    super(props);

    this.state = {
      previousChildren: null,
      currentChildren: props.children.map(React.cloneElement),
      currentPath: props.location.pathname,
      slideAnimation: new Animated.Value(0),
      navUp: false,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const { currentPath } = prevState;
    const newPath = this.state.currentPath;

    const speed = 0.3;

    if (currentPath !== newPath) {
      Animated.sequence([
        Animated.timing(
          this.state.slideAnimation,
          {
            toValue: 1,
            duration: 200 / speed,
            easing: Easing.in(Easing.ease),
          },
        ),
        {
          start: (next) => {
            this.setState({
              previousChildren: null,
            }, () => next && next({ finished: true }));
          },
          stop: () => {},
          reset: () => {},
          _isUsingNativeDriver: () => false,
          _startNativeLoop: () => {},
        },
        Animated.timing(
          this.state.slideAnimation,
          {
            toValue: 0,
            duration: 300 / speed,
          },
        ),
      ]).start();
    }
  }

  render() {
    const {
      previousChildren,
      slideAnimation,
      navUp,
      currentChildren,
    } = this.state;

    return (
      <Animated.View
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          width: '100%',
          height: '100%',
          transform: [{
            translateX: previousChildren ? (
              slideAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: [0, navUp ? 100 : -100],
              })
            ) : 0,
          }],
          opacity: slideAnimation.interpolate({
            inputRange: [0, 0.9],
            outputRange: [1, 0],
          }),
        }}
      >
        {previousChildren || currentChildren}
      </Animated.View>
    );
  }
}

export default withRouter(AnimatedChildRoutes);
