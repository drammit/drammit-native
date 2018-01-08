// @flow

import React, { Component } from 'react';
import type { Element } from 'react';
import { View, StyleSheet } from 'react-native';
import { reduxForm } from 'redux-form';

import TextInput from './TextInput';

import rawStyles from './Search.styles';

const styles = StyleSheet.create(rawStyles);

type SearchType = {};

class Search extends Component<SearchType> {
  render(): Element<any> {
    return (
      <View style={styles.container}>
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
