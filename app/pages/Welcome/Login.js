// @flow

import React, { Component } from 'react';
import type { Element } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { View, Button } from 'react-native';
import { reduxForm } from 'redux-form';
import { withRouter } from 'react-router';

import { loginUser } from '../../actions/Login';

import TextInput from '../../components/Form/TextInput';
import Error from '../../components/Form/Error';

import { colors } from '../../Config.styles';
import styles from './Login.styles';

type LoginType = {
  ...ReduxFormType,
  loadingLogin: boolean,
  errorLogin: string,
  onBack: Function,
  goToForgotPassword: Function,
  loginUser: Function,
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
      props.loginUser(values.username, values.password);
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
    const { loadingLogin, errorLogin } = this.props;

    return (
      <View>
        {errorLogin !== '' && <Error message={errorLogin} />}

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
            disabled={loadingLogin}
            onPress={this.onSubmit}
            title="Login →"
          />
        </View>
        <View style={styles.buttonsContainer}>
          <Button
            onPress={this.onGoToSignup}
            color={colors.grey2}
            title="Sign up"
          />

          <Button
            onPress={this.onGoToForgotPassword}
            color={colors.grey2}
            title="Forgot password?"
          />
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  const { loading, error } = state.login;

  return {
    loadingLogin: loading,
    errorLogin: error,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loginUser(username, password) {
      dispatch(loginUser(username, password));
    },
  };
}

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: 'login',
  }),
)(Login);
