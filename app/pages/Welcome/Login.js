// @flow

import React, { Component } from 'react';
import type { Element } from 'react';
import { compose } from 'redux';
import { View, Button } from 'react-native';
import { reduxForm } from 'redux-form';
import { withRouter } from 'react-router';

import TextInput from '../../components/Form/TextInput';

import { colors } from '../../Config.styles';
import styles from './Login.styles';

type LoginType = {
  ...ReduxFormType,
  onBack: Function,
  goToForgotPassword: Function,
};

class Login extends Component<LoginType> {
  constructor(props) {
    super(props);

    this.setPasswordRef = (ref) => {
      this.passwordInput = ref;
    };
    this.setUserRef = (ref) => {
      this.userInput = ref;
    };

    this.focusPassword = () => this.passwordInput.focus();

    this.onSubmit = props.handleSubmit((values) => {
      console.log(values);
    });
    this.onBack = () => {
      this.userInput.blur();
      this.passwordInput.blur();

      if (props.onBack && typeof props.onBack === 'function') {
        props.onBack();
      }
    };
    this.onGoToForgotPassword = this.goToForgotPassword.bind(this);
    this.onGoToSignup = this.goToSignUp.bind(this);
  }

  goToSignUp() {
    const { history } = this.props;

    history.push('/sign-up');
  }

  goToForgotPassword() {
    const { history } = this.props;

    history.push('/forgot-password');
  }

  render(): Element {
    return (
      <View>
        <TextInput
          style={{
            paddingLeft: 6,
          }}
          name="username"
          placeholder="Username / Email address"
          returnKeyType="next"
          keyboardType="email-address"
          onRef={this.setUserRef}
          autofocus
          autoCorrect={false}
          blurOnSubmit={false}
          onSubmitEditing={this.focusPassword}
        />
        <TextInput
          style={{
            paddingLeft: 6,
          }}
          name="password"
          placeholder="Password"
          returnKeyType="go"
          secureTextEntry
          onRef={this.setPasswordRef}
          blurOnSubmit={false}
          onSubmitEditing={this.onSubmit}
        />
        <View style={styles.buttonsContainer}>
          <Button
            onPress={this.onBack}
            title="Back"
            color={colors.grey2}
          />

          <Button
            onPress={this.onSubmit}
            title="Login →"
          />
        </View>
        <View style={styles.buttonsContainer}>
          <Button
            onPress={this.onGoToForgotPassword}
            color={colors.grey2}
            title="Forgot password?"
          />

          <Button
            onPress={this.onGoToSignup}
            color={colors.grey2}
            title="New here? Sign up"
          />
        </View>
      </View>
    );
  }
}

export default compose(
  withRouter,
  reduxForm({
    form: 'login',
  }),
)(Login);
