// @flow

import React, { Component } from 'react';
import { Animated, Easing } from 'react-native';
import { compose } from 'redux';
import { withRouter } from 'react-router-native';

type AnimatedRoutesType = {
  children: any,
} & ReactRouterType;

type AnimatedRoutesState = {
  currentPath: string,
  previousChildren: null | any,
  currentChildren: any,
};

class AnimatedRoutes extends Component<AnimatedRoutesType, AnimatedRoutesState> {
  static getDerivedStateFromProps(nextProps, prevState) {
    const newPath = nextProps.location.pathname;

    if (newPath !== prevState.currentPath) {
      return {
        currentPath: newPath,
        previousChildren: prevState.currentChildren,
        currentChildren: nextProps.children,
      };
    }

    return null;
  }

  constructor(props: AnimatedRoutesType) {
    super();

    this.state = {
      currentPath: props.location.pathname,
      previousChildren: null,
      currentChildren: props.children,
    };
  }

  shouldComponentUpdate(nextProps: AnimatedRoutesType, nextState: AnimatedRoutesState) {
    if (this.state.currentPath !== nextState.currentPath) {
      console.log('path change');
    }

    return this.props !== nextProps || this.state !== nextState;
  }

  render() {
    const { currentChildren, previousChildren } = this.state;

    return (
      previousChildren || currentChildren
    );
  }
}

export default compose(withRouter)(AnimatedRoutes);
