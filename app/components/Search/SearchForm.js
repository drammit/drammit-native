// @flow

import React, { Component } from 'react';
import { View, Text, Animated, TouchableOpacity } from 'react-native';

import Tabs from '../Tabs';
import SearchBar from '../Form/Search';
import Filters from '../Form/Filters';
import Range from '../Form/Range';
import PageContent from '../Layout/PageContent';
import Submit from '../Form/Submit';

import styles from './SearchForm.styles';

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
  animating: boolean,
  collapsed: boolean,
  collapseAnimation: any,
};

class SearchForm extends Component<SearchFormType, SearchFormStateType> {
  constructor(props: SearchFormType) {
    super(props);

    this.onChangeTab = this.changeTab.bind(this);
    this.onSearch = this.triggerSearch.bind(this);
    this.onOpenFilters = this.openFilters.bind(this);

    this.state = {
      tab: 'whisky',
      animating: false,
      collapsed: false,
      collapseAnimation: new Animated.Value(0),
    };
  }

  onChangeTab: (tab: tabType) => void;
  onSearch: () => void;
  onOpenFilters: () => void;
  collapseDuration: number = 500;

  changeTab(tab: tabType) {
    this.setState({ tab });
  }

  openFilters() {
    Animated.timing(
      this.state.collapseAnimation,
      {
        toValue: 0,
        duration: this.collapseDuration,
      },
    ).start();

    this.setState({
      collapsed: false,
      animating: true,
    });

    setTimeout(() => {
      this.setState({
        animating: false,
      });
    }, this.collapseDuration);
  }

  triggerSearch() {
    const { onSearch } = this.props;

    onSearch();

    Animated.timing(
      this.state.collapseAnimation,
      {
        toValue: 1,
        duration: this.collapseDuration,
      },
    ).start();

    // collapse search
    this.setState({
      collapsed: true,
      animating: true,
    });

    setTimeout(() => {
      this.setState({
        animating: false,
      });
    }, this.collapseDuration);
  }

  render() {
    const {
      tab,
      collapsed,
      collapseAnimation,
      animating,
    } = this.state;

    const tabHeights = {
      whisky: 318,
      distillery: 192,
      user: 118,
    };

    return (
      <View style={{ width: '100%' }}>
        <SearchBar />

        <Animated.View
          style={{
            width: '100%',
            overflow: 'hidden',
            justifyContent: 'flex-end',
            height: collapseAnimation.interpolate({
              inputRange: [0, 1],
              outputRange: [tabHeights[tab], 0],
            }),
          }}
        >
          <View style={{ height: animating ? tabHeights[tab] : 'auto' }}>
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
            </PageContent>
          </View>
        </Animated.View>
        {collapsed && (
          <View style={styles.filterSwitch}>
            <TouchableOpacity disabled={!collapsed} onPress={this.onOpenFilters}>
              <Text style={styles.filterSwitchButton}>SHOW FILTERS</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }
}

export default SearchForm;
