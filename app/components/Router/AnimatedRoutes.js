// @flow

import React, { Component } from 'react';
import type { Element } from 'react';
import { Animated, View } from 'react-native';
import { withRouter } from 'react-router';

type AnimatedChildRoutesType = ReactRouterType & {
  children: Children,
};

class AnimatedChildRoutes extends Component<AnimatedChildRoutesType> {
  constructor(props) {
    super(props);

    this.state = {
      previousChildren: null,
      currentPath: props.location.pathname,
      slideAnimation: new Animated.Value(0),
    };
  }

  componentWillReceiveProps({ location }) {
    const { currentPath } = this.state;
    const { children } = this.props;

    const newPath = location.pathname;

    if (currentPath !== newPath) {
      this.setState({
        previousChildren: children,
        currentPath: newPath,
      });

      Animated.sequence([
        Animated.timing(
          this.state.slideAnimation,
          {
            toValue: 1,
            duration: 200,
            useNativeDriver: true,
          },
        ),
        {
          start: (next) => {
            this.setState({
              previousChildren: null,
            });
            next({ finished: true });
          },
        },
        Animated.timing(
          this.state.slideAnimation,
          {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
          },
        ),
      ]).start();
    }
  }

  render(): Element<any> {
    const { children, match } = this.props;
    const { previousChildren, slideAnimation } = this.state;

    const navigateToParent = match.isExact;

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
                outputRange: [0, navigateToParent ? 100 : -100],
              })
            ) : 0,
          }],
          opacity: slideAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0],
          }),
        }}
      >
        {previousChildren || children}
      </Animated.View>
    );
  }
}

export default withRouter(AnimatedChildRoutes);
