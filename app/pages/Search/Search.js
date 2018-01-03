// @flow

import React, { Component } from 'react';
import type { Element } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';

import Page from '../../components/Layout/Page';
import Navigation from '../../components/Layout/Navigation';
import SearchBar from '../../components/Form/Search';

class Timeline extends Component {
  render(): Element<any> {
    return (
      <Page
        statusBar
      >
        <Navigation active="search">
          <SearchBar />
          <Text>Search</Text>
        </Navigation>
      </Page>
    );
  }
}

export default connect()(Timeline);
