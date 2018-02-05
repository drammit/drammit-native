// @flow

import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './Tabs.styles';

type TabsType = {
  options: Array<string>,
  active?: string,
  onChange: Function,
};

type StateType = {
  selected: string,
};

class Tabs extends Component<TabsType, StateType> {
  constructor(props: TabsType) {
    super(props);

    this.onChange = option => () => this.handlePress(option);

    this.state = {
      selected: props.active || props.options[0],
    };
  }

  onChange: (option: string) => () => void;

  handlePress(option: string) {
    this.setState({
      selected: option,
    }, () => {
      this.props.onChange(option);
    });
  }

  render() {
    const { options } = this.props;
    const { selected } = this.state;

    return (
      <View style={styles.container}>
        {options.map(option => (
          <TouchableOpacity
            key={option}
            style={{
              ...styles.tab,
              ...option === selected ? styles.active : {},
            }}
            onPress={this.onChange(option)}
          >
            <Text
              style={{
                ...styles.text,
                ...option === selected ? styles.activeText : {},
              }}
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
