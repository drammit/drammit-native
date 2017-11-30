// @flow

import React, { Component } from 'react';
import type { Element } from 'react';
import { connect } from 'react-redux';
import { View, StatusBar, Animated, Easing } from 'react-native';

import { style, styles } from './App.styles';

type AppType = {
  statusBar: boolean,
  children: Children,
};

class App extends Component<AppType> {
  constructor(props) {
    super(props);

    this.state = {
      statusBarPosition: new Animated.Value(props.statusBar ? 1 : 0),
    };
  }

  componentWillReceiveProps(nextProps) {
    if (
      (!this.props.statusBar && nextProps.statusBar) ||
      (this.props.statusBar && !nextProps.statusBar)
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

  render(): Element<any> {
    const { statusBar, children } = this.props;
    const { statusBarPosition } = this.state;

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
        <View style={styles.container}>
          {children}
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  const { statusBar } = state.app;

  return {
    statusBar,
  };
}

export default connect(mapStateToProps)(App);
