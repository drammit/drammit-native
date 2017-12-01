// @flow

import React, { Component } from 'react';
import type { Element } from 'react';
import { Keyboard, ScrollView, View } from 'react-native';

class KeyboardScrollView extends Component {
  state = {
    keyboardHeight: 0,
  };

  componentDidMount() {
    this.keyboardDidShowListener =
      Keyboard.addListener('keyboardDidShow', this.keyboardDidShow.bind(this));
    this.keyboardDidHideListener =
      Keyboard.addListener('keyboardDidHide', this.keyboardDidHide.bind(this));
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  keyboardDidShow(e) {
    const keyboardHeight = e.endCoordinates.height;

    this.setState({
      keyboardHeight,
    });
  }

  keyboardDidHide() {
    this.setState({
      keyboardHeight: 0,
    });
  }

  render(): Element<any> {
    const { children } = this.props;
    const { keyboardHeight } = this.state;


    return (
      <ScrollView
        style={{
          flex: 1,
          width: '100%',
          marginBottom: keyboardHeight,
        }}
        keyboardShouldPersistTaps="always"
        alwaysBounceVertical={false}
      >
        { children }
      </ScrollView>
    );
  }
}

export default KeyboardScrollView;
