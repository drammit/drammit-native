// @flow

import React, { Component } from 'react';
import { View } from 'react-native';

import styles from './SearchPlaceholder.styles';

type SearchPlaceholderType = {};

class SearchPlaceholder extends Component<SearchPlaceholderType> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer} />
        <View>
          <View style={styles.name} />
          <View style={styles.description} />
        </View>
      </View>
    );
  }
}

export default SearchPlaceholder;
