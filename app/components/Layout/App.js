// @flow

import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { View, StatusBar, Animated, Easing } from 'react-native';
import { withRouter } from 'react-router';

import Header from './Header';

import deepLinking from '../../core/deep-linking';
import { setHistory } from '../../core/push';

import { initialize } from '../../actions/App';

import Initializing from './Initializing';
import Navigation from './Navigation';

import { style, styles } from './App.styles';

type AppType = ReactRouterType & {
  initialized: boolean,
  statusBar: boolean,
  fetchError: boolean,
  header: headerType,
  navigation: string,
  children: any,
  initialize: () => void;
};

type AppStateType = {
  statusBarPosition: Animated.Value,
  headerPosition: Animated.Value,
};

class App extends Component<AppType, AppStateType> {
  constructor(props) {
    super(props);

    deepLinking(props.history);
    setHistory(props.history);

    this.state = {
      statusBarPosition: new Animated.Value(props.statusBar ? 1 : 0),
      headerPosition: new Animated.Value(props.header.visible ? 1 : 0),
    };
  }

  componentDidMount() {
    this.props.initialize();
  }

  componentDidUpdate(prevProps: AppType) {
    this.animateStatusBar(prevProps, this.props);
    this.animateHeader(prevProps, this.props);
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

  render() {
    const {
      initialized,
      fetchError,
      statusBar,
      header,
      navigation,
      children,
    } = this.props;
    const { statusBarPosition, headerPosition } = this.state;

    if (!initialized) {
      return <Initializing fetchError={fetchError} />;
    }

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
        <Navigation active={navigation}>
          {children}
        </Navigation>
      </View>
    );
  }
}

function mapStateToProps(state) {
  const {
    statusBar,
    fetchError,
    header,
    navigation,
    initialized,
  } = state.app;

  return {
    initialized,
    fetchError,
    statusBar,
    header,
    navigation,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    initialize() {
      dispatch(initialize());
    },
  };
}

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
)(App);
