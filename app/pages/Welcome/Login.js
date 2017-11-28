// @flow

import React, { Component } from 'react';
import type { Element } from 'react';
import { View } from 'react-native';
import { reduxForm } from 'redux-form';

import TextInput from '../../components/Form/TextInput';

type LoginType = {
  ...ReduxFormType,
};

class Login extends Component<LoginType> {
  constructor(props) {
    super(props);

    this.setPasswordRef = (ref) => {
      this.passwordInput = ref;
    };

    this.focusPassword = () => this.passwordInput.focus();

    this.onSubmit = props.handleSubmit((values) => {
      console.log(values);
    });
  }

  render(): Element {
    return (
      <View>
        <TextInput
          name="username"
          placeholder="Username / Email address"
          returnKeyType="next"
          keyboardType="email-address"
          autofocus
          autoCorrect={false}
          blurOnSubmit={false}
          onSubmitEditing={this.focusPassword}
        />
        <TextInput
          name="password"
          placeholder="Password"
          returnKeyType="go"
          secureTextEntry
          onRef={this.setPasswordRef}
          blurOnSubmit={false}
          onSubmitEditing={this.onSubmit}
        />
        <View>

        </View>
      </View>
    );
  }
}

export default reduxForm({
  form: 'login',
})(Login);
