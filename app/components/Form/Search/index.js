// @flow

import React, { Component } from 'react';
import type { Element } from 'react';
import { View, StyleSheet } from 'react-native';
import { reduxForm } from 'redux-form';
import SvgUri from 'react-native-svg-uri';

import TextInput from '../TextInput';
import SearchSVG from './search.svg';

import { colors } from '../../../Config.styles';

import rawStyles from './Search.styles';

const styles = StyleSheet.create(rawStyles);

type SearchType = {};

class Search extends Component<SearchType> {
  render(): Element<any> {
    return (
      <View style={styles.container}>
        <SvgUri
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            zIndex: 2,
            top: 14,
            left: 16,
          }}
          fill={colors.grey2}
          width={15}
          height={15}
          source={SearchSVG}
        />
        <TextInput
          name="search"
          placeholder="Search"
          returnKeyType="go"
          autoCorrect={false}
          blurOnSubmit={false}
          onSubmitEditing={console.log}
          style={rawStyles.input}
        />
      </View>
    );
  }
}

export default reduxForm({
  form: 'search',
})(Search);
