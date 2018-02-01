// @flow

import React, { Component } from 'react';
import type { Element } from 'react';
import { View, Button } from 'react-native';

import Tabs from '../Tabs';
import SearchBar from '../Form/Search';
import Filters from '../Form/Filters';
import Range from '../Form/Range';
import PageContent from '../Layout/PageContent';
import Submit from '../Form/Submit';

import styles from './SearchForm.styles';
import { colors } from '../../Config.styles';

type tabType = 'whisky' | 'distillery' | 'user';

function buttonText(tab: tabType): string {
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

type SearchFormType = {
  onSearch: () => void,
};

type SearchFormStateType = {
  tab: tabType,
  collapsed: boolean,
};

class SearchForm extends Component<SearchFormType, SearchFormStateType> {
  constructor(props: SearchFormType) {
    super(props);

    this.onChangeTab = this.changeTab.bind(this);
    this.onSearch = this.triggerSearch.bind(this);
    this.onOpenFilters = this.openFilters.bind(this);

    this.state = {
      tab: 'whisky',
      collapsed: false,
    };
  }

  onChangeTab: (tab: tabType) => void;
  onSearch: () => void;
  onOpenFilters: () => void;

  changeTab(tab: tabType) {
    this.setState({ tab });
  }

  openFilters() {
    this.setState({
      collapsed: false,
    });
  }

  triggerSearch() {
    const { onSearch } = this.props;

    onSearch();

    // collapse search
    this.setState({
      collapsed: true,
    });
  }

  render(): Element<any> {
    const { tab, collapsed } = this.state;

    return (
      <View style={styles.formContainer}>
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
            <Submit
              light
              title={buttonText(tab)}
              onPress={this.onSearch}
            />
          </View>

          {collapsed && (
            <Button
              title="Show filters"
              disabled={!collapsed}
              onPress={this.onOpenFilters}
            />
          )}
        </PageContent>
      </View>
    );
  }
}

export default SearchForm;
