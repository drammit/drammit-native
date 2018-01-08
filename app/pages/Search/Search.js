// @flow

import React, { Component } from 'react';
import type { Element } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';

import Page from '../../components/Layout/Page';
import SearchBar from '../../components/Form/Search';

class Search extends Component {
  render(): Element<any> {
    return (
      <Page
        statusBar
        navigation="search"
      >
        <SearchBar />
        <Text>Search</Text>
      </Page>
    );
  }
}

export default connect()(Search);
