// @flow

import React, { Component } from 'react';
import { View, Animated } from 'react-native';

import styles from './SearchPlaceholder.styles';

type SearchPlaceholderType = {};

type SearchPlaceholderStateType = {
  opacity: Animated.Value,
};

class SearchPlaceholder extends Component<SearchPlaceholderType, SearchPlaceholderStateType> {
  constructor() {
    super();

    this.state = {
      opacity: new Animated.Value(1),
    };
  }

  componentDidMount() {
    Animated.loop(Animated.sequence([
      Animated.timing(this.state.opacity, {
        toValue: 0.5,
        duration: 1000,
        delay: 500,
      }),
      Animated.timing(this.state.opacity, {
        toValue: 1,
        duration: 1000,
      }),
    ])).start();
  }

  render() {
    const { opacity } = this.state;

    return (
      <View style={styles.container}>
        <Animated.View
          style={{
            display: 'flex',
            flexDirection: 'row',
            opacity,
          }}
        >
          <View style={styles.imageContainer} />
          <View>
            <View style={styles.name} />
            <View style={styles.description} />
          </View>
        </Animated.View>
      </View>
    );
  }
}

export default SearchPlaceholder;
