// @flow

import React, { Component } from 'react';
import type { Element } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import Page from '../../components/Layout/Page';
import SearchBar from '../../components/Form/Search';
import Tabs from '../../components/Tabs';
import Filters from '../../components/Form/Filters';
import Range from '../../components/Form/Range';
import PageContent from '../../components/Layout/PageContent';
import Submit from '../../components/Form/Submit';

import styles from './Search.styles';

function buttonText(tab: 'whisky' | 'distillery' | 'user'): string {
  switch (tab) {
    case 'whisky':
      return 'Find whisky';
    case 'distillery':
      return 'Find distillery';
    case 'user':
      return 'Find user';
    default:
      return 'Find';
  }
}

class Search extends Component {
  constructor(props) {
    super(props);

    this.onChangeTab = this.changeTab.bind(this);

    this.state = {
      tab: 'whisky',
    };
  }

  changeTab(tab) {
    this.setState({ tab });
  }

  render(): Element<any> {
    const { tab } = this.state;

    return (
      <Page
        statusBar
        navigation="search"
      >
        <SearchBar />

        <Tabs
          options={['whisky', 'distillery', 'user']}
          active={tab}
          onChange={this.onChangeTab}
        />

        <PageContent>
          {tab === 'whisky' && (
            <Filters
              title="Whisky type"
              options={[
                'Single Malt', 'Bourbon', 'Blend', 'Blended Malt', 'Single Grain', 'Rye', 'Spirit',
              ]}
            />
          )}
          {(tab === 'whisky' || tab === 'distillery') && (
            <Filters
              title="Region"
              options={[
                'Speyside', 'Highlands', 'Islay', 'Islands', 'Lowlands', 'Campbeltown',
              ]}
            />
          )}
          {tab === 'whisky' && (
            <Range
              title="Age range"
              initial={[0, 30]}
              items={[
                'All',
                ...Array(50).fill('').map((i, index) => index + 1),
                '50+',
              ]}
            />
          )}

          <View style={styles.submitContainer}>
            <Submit light title={buttonText(tab)} onPress={console.log} />
          </View>
        </PageContent>
      </Page>
    );
  }
}

export default connect()(Search);
