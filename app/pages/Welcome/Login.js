// @flow

import React, { Component } from 'react';
import type { Element } from 'react';
import { View, Text, TextInput } from 'react-native';

class Login extends Component {
  componentDidMount() {
    this.username.focus();
  }

  render() {
    return (
      <View>
        <TextInput
          ref={(ref) => this.username = ref}
          placeholder="Username / Email address"
          style={{
            backgroundColor: 'white',
            padding: 10,
            fontSize: 15,
            borderBottomWidth: 1,
            borderBottomColor: '#ddd',
          }}
          returnKeyLabel="done"
        />
        <TextInput
          placeholder="Password"
          style={{
            backgroundColor: 'white',
            padding: 10,
            fontSize: 15,
          }}
          secureTextEntry
          returnKeyLabel="done"
        />
      </View>
    );
  }
}

export default Login;
