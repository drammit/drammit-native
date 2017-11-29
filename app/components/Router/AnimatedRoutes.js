// @flow

import React, { Component } from 'react';
import type { Element } from 'react';
import { Animated, Easing } from 'react-native';
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
      navUp: false,
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
        navUp: currentPath.indexOf(newPath) === 0,
      });

      Animated.sequence([
        Animated.timing(
          this.state.slideAnimation,
          {
            toValue: 1,
            duration: 200,
            useNativeDriver: true,
            easing: Easing.in(Easing.ease),
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
    const { children } = this.props;
    const { previousChildren, slideAnimation, navUp } = this.state;

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
