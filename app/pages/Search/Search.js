// @flow

import React, { Component } from 'react';
import type { Element } from 'react';
import { connect } from 'react-redux';

import Page from '../../components/Layout/Page';
import SearchBar from '../../components/Form/Search';
import Tabs from '../../components/Tabs';
import Filters from '../../components/Form/Filters';
import Range from '../../components/Form/Range';
import PageContent from '../../components/Layout/PageContent';

class Search extends Component {
  render(): Element<any> {
    return (
      <Page
        statusBar
        navigation="search"
      >
        <SearchBar />

        <Tabs
          options={['whisky', 'distillery', 'user']}
          active="whisky"
          onChange={console.log}
        />

        <PageContent>
          <Filters
            title="Whisky type"
            options={[
              'Single Malt', 'Bourbon', 'Blend', 'Blended Malt', 'Single Grain', 'Rye', 'Spirit',
            ]}
          />
          <Filters
            title="Region"
            options={[
              'Speyside', 'Highlands', 'Islay', 'Islands', 'Lowlands', 'Campbeltown',
            ]}
          />
          <Range
            title="Age range"
            items={[
              'All',
              ...Array(50).fill('').map((i, index) => index + 1),
              '50+',
            ]}
          />
        </PageContent>
      </Page>
    );
  }
}

export default connect()(Search);
