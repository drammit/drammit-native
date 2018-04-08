// @flow

import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import SvgUri from 'react-native-svg-uri';
import { withRouter } from 'react-router-native';
import { compose } from 'redux';
import { connect } from 'react-redux';

import bottle from './bottle.png';
import arrow from './arrow.svg';

import styles from './SearchResult.styles';

type SearchResultType = {
  goToWhisky: () => void,
} & ReactRouterType;

class SearchResult extends Component<SearchResultType> {
  render() {
    const { goToWhisky } = this.props;

    return (
      <TouchableOpacity
        onPress={goToWhisky}
        style={styles.container}
      >
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
      </TouchableOpacity>
    );
  }
}

const mapDispatchToProps = (dispatch, props: SearchResultType) => ({
  goToWhisky() {
    const { history } = props;

    history.push('/whisky');
  },
});

export default compose(
  withRouter,
  connect(null, mapDispatchToProps),
)(SearchResult);
