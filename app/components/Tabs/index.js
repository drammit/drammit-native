// @flow

import React, { Component } from 'react';
import type { Element } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './Tabs.styles';

type TabsType = {
  options: Array<string>,
  active: string,
};

class Tabs extends Component<TabsType> {
  render(): Element<any> {
    const { options, active } = this.props;

    return (
      <View style={styles.container}>
        {options.map(option => (
          <TouchableOpacity
            style={{
              ...styles.tab,
              ...option === active ? styles.active : {},
            }}
            onPress={console.log}
          >
            <Text
              style={{
                ...styles.text,
                ...option === active ? styles.activeText : {},
              }}
              key={option}
            >
              {option.toUpperCase()}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

export default Tabs;
