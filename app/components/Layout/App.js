// @flow

import React, { Component } from 'react';
import { compose } from 'redux';
import type { Element } from 'react';
import { connect } from 'react-redux';
import { View, StatusBar, Animated, Easing } from 'react-native';
import { withRouter } from 'react-router';

import Header from './Header';

import deepLinking from '../../core/deep-linking';

import { style, styles } from './App.styles';

type AppType = ReactRouter & {
  statusBar: boolean,
  header: headerType,
  children: Children,
};

class App extends Component<AppType> {
  constructor(props) {
    super(props);

    deepLinking(props.history);

    this.state = {
      statusBarPosition: new Animated.Value(props.statusBar ? 1 : 0),
      headerPosition: new Animated.Value(props.header.visible ? 1 : 0),
    };
  }

  componentWillReceiveProps(nextProps) {
    this.animateStatusBar(this.props, nextProps);
    this.animateHeader(this.props, nextProps);
  }

  animateStatusBar(currentProps, nextProps) {
    if (
      (!currentProps.statusBar && nextProps.statusBar) ||
      (currentProps.statusBar && !nextProps.statusBar)
    ) {
      const toValue = nextProps.statusBar ? 1 : 0;

      Animated.timing(
        this.state.statusBarPosition,
        {
          toValue,
          duration: 300,
          easing: Easing.in(Easing.linear),
        },
      ).start();
    }
  }

  animateHeader(currentProps, nextProps) {
    if (
      (!currentProps.header.visible && nextProps.header.visible) ||
      (currentProps.header.visible && !nextProps.header.visible)
    ) {
      const toValue = nextProps.header.visible ? 1 : 0;

      Animated.timing(
        this.state.headerPosition,
        {
          toValue,
          duration: 300,
          easing: Easing.in(Easing.linear),
        },
      ).start();
    }
  }

  render(): Element<any> {
    const { statusBar, header, children } = this.props;
    const { statusBarPosition, headerPosition } = this.state;

    return (
      <View style={styles.container}>
        <StatusBar
          animated
          translucent
          barStyle="dark-content"
          showHideTransition="slide"
          hidden={!statusBar}
        />
        <Animated.View
          style={{
            ...style.statusBar,
            height: statusBarPosition.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 20],
            }),
          }}
        />
        <Animated.View
          style={{
            height: headerPosition.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 44],
            }),
          }}
        >
          <Header {...header} />
        </Animated.View>
        <View style={styles.container}>
          {children}
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  const { statusBar, header } = state.app;

  return {
    statusBar,
    header,
  };
}

export default compose(
  withRouter,
  connect(mapStateToProps),
)(App);
