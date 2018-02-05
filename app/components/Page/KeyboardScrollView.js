// @flow

import React, { Component } from 'react';
import { Keyboard, ScrollView } from 'react-native';

type KeyboardScrollViewType = {
  children: any,
};

type KeyboardScrollViewStateType = {
  keyboardHeight: number,
};

class KeyboardScrollView extends Component<KeyboardScrollViewType, KeyboardScrollViewStateType> {
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

  keyboardDidShowListener: any;
  keyboardDidHideListener: any;

  keyboardDidShow(e: any) {
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

  render() {
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
