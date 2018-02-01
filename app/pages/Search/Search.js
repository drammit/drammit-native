// @flow

import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import Page from '../../components/Layout/Page';
import Text from '../../components/Page/Text';
import PageContent from '../../components/Layout/PageContent';
import SearchForm from '../../components/Search/SearchForm';
import SearchResult from '../../components/Search/SearchResult';

type SearchStateType = {
  searching: boolean,
};

class Search extends Component<null, SearchStateType> {
  constructor(props) {
    super(props);

    this.onSearch = this.startSearch.bind(this);

    this.state = {
      searching: false,
    };
  }

  onSearch: () => void;

  startSearch() {
    this.setState({
      searching: true,
    });
  }

  render() {
    const { searching } = this.state;

    return (
      <Page
        statusBar
        navigation="search"
      >
        <SearchForm onSearch={this.onSearch} />

        <View style={{ width: '100%' }}>
          <SearchResult />
          <SearchResult />
          <SearchResult />
          <SearchResult />
          <SearchResult />
          <SearchResult />
          <SearchResult />
          <SearchResult />
          <SearchResult />
        </View>
        {searching && (
          <PageContent>
            <Text>Searching...</Text>
          </PageContent>
        )}
      </Page>
    );
  }
}

export default connect()(Search);
