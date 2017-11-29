// @flow

import React, { Component } from 'react';
import type { Element } from 'react';
import { compose } from 'redux';
import { View, Button, Text } from 'react-native';
import { reduxForm } from 'redux-form';
import { withRouter } from 'react-router';
import { Link } from 'react-router-native';

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
  }

  goToForgotPassword() {
    const { history } = this.props;

    history.push('/forgot-password');
  }

  render(): Element {
    return (
      <View>
        <TextInput
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
          <Link to="/forgot-password"><Text>Hallo</Text></Link>
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
