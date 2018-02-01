// @flow

import React, { Component } from 'react';
import type { Element } from 'react';
import { connect } from 'react-redux';

import Page from '../../components/Layout/Page';
import Text from '../../components/Page/Text';
import SearchForm from '../../components/Search/SearchForm';
import PageContent from '../../components/Layout/PageContent';

class Search extends Component {
  constructor(props) {
    super(props);

    this.onSearch = this.startSearch.bind(this);

    this.state = {
      searching: false,
    };
  }

  startSearch() {
    this.setState({
      searching: true,
    });
  }

  render(): Element<any> {
    const { searching } = this.state;

    return (
      <Page
        statusBar
        navigation="search"
      >
        <SearchForm onSearch={this.onSearch} />
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
