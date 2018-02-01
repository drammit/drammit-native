// @flow

import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import SvgUri from 'react-native-svg-uri';

import bottle from './bottle.png';
import arrow from './arrow.svg';

import styles from './SearchResult.styles';

type SearchResultType = {};

class SearchResult extends Component<SearchResultType> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={bottle} />
        </View>
        <View>
          <Text style={styles.name}>Laphroaig 10-year-old</Text>
          <Text style={styles.description}>by Laphroaig, bottled at 40%</Text>
        </View>
        <View style={styles.arrowContainer}>
          <SvgUri width={10} height={20} source={arrow} />
        </View>
      </View>
    );
  }
}

export default SearchResult;
