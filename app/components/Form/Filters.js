// @flow

import React, { Component } from 'react';
import type { Element } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

import styles from './Filters.styles';

type FiltersType = {
  title: string,
  options: Array<string>,
};

type FiltersState = {
  selected: Array<string>,
};

function newSelectedState(selected, option) {
  if (selected.indexOf(option) > -1) {
    return selected.filter(item => item !== option);
  }

  return [...selected, option];
}

class Filters extends Component<FiltersType, FiltersState> {
  constructor(props) {
    super(props);

    this.onToggle = option => () => this.toggleFilter(option);

    this.state = {
      selected: [],
    };
  }

  toggleFilter(option) {
    const { selected } = this.state;

    this.setState({
      selected: newSelectedState(selected, option),
    });
  }

  render(): Element<any> {
    const { title, options } = this.props;
    const { selected } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title.toUpperCase()}</Text>
        <ScrollView
          style={styles.filters}
          contentContainerStyle={styles.filterInside}
          alwaysBounceVertical={false}
          showsHorizontalScrollIndicator
          horizontal
        >
          {options.map(option => (
            <TouchableOpacity
              style={{
                ...styles.filter,
                ...(selected.indexOf(option) > -1 ? styles.filterSelected : {}),
              }}
              key={option}
              onPress={this.onToggle(option)}
            >
              <Text
                style={selected.indexOf(option) > -1 ?
                  styles.filterTextSelected : styles.filterText}
              >
                {option}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  }
}

export default Filters;
