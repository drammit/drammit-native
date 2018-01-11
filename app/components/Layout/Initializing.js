// @flow

import React, { Component } from 'react';
import type { Element } from 'react';
import { StatusBar, View, StyleSheet, Animated, Text } from 'react-native';

import Logo from '../Logo/Logo';

import { colors } from '../../Config.styles';

const container = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: colors.light,
  width: '100%',
  height: '100%',
};

const styles = StyleSheet.create({
  container,
});

type InitializingType = {
  fetchError: boolean,
};

class Initializing extends Component<InitializingType> {
  state = {
    fadeLogo: new Animated.Value(0),
  };

  componentDidMount() {
    Animated.loop(Animated.sequence([
      Animated.timing(this.state.fadeLogo, {
        toValue: 1,
        duration: 1000,
        delay: 1000,
      }),
      Animated.timing(this.state.fadeLogo, {
        toValue: 0,
        duration: 1000,
        delay: 1000,
      }),
    ])).start();
  }

  render(): Element<any> {
    const { fadeLogo } = this.state;
    const { fetchError } = this.props;

    return (
      <View style={styles.container}>
        <StatusBar
          animated
          translucent
          barStyle="dark-content"
          showHideTransition="slide"
          hidden
        />
        <Animated.View style={{ ...container, opacity: fetchError ? 1 : fadeLogo }}>
          <Logo style={{ width: 150, opacity: 0.4 }} />
          {fetchError && <Text style={{ padding: 6 }}>Could not connect to Drammit</Text>}
        </Animated.View>
      </View>
    );
  }
}

export default Initializing;
