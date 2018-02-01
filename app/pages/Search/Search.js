// @flow

import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';

import Page from '../../components/Layout/Page';
import Text from '../../components/Page/Text';
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

        {searching && (
          <Text>Searching...</Text>
        )}

        <FlatList
          style={{ width: '100%' }}
          data={[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]}
          renderItem={() => <SearchResult />}
        />
      </Page>
    );
  }
}

export default connect()(Search);
