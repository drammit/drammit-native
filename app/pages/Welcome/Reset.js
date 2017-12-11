// @flow

import React, { Component } from 'react';
import type { Element } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { withRouter } from 'react-router';
import { reduxForm } from 'redux-form';

import { validateResetToken } from '../../actions/Forgot';

import Page from '../../components/Layout/Page';
import Text from '../../components/Page/Text';
import Container from '../../components/Page/Container';
import Label from '../../components/Form/Label';
import TextInput from '../../components/Form/TextInput';
import Submit from '../../components/Form/Submit';

type ResetType = {
  loadingToken: boolean,
  validToken: boolean,
  validateToken: Function,
} & ReactRouterType;

class Reset extends Component<ResetType> {
  constructor(props) {
    super(props);

    this.focusPassword = () => this.passwordInput.focus();

    this.setPasswordRef = (ref) => {
      this.passwordInput = ref;
    };

    this.toForgotPassword = () => {
      props.history.push('/forgot-password');
    };

    this.toHomeScreen = () => {
      props.history.push('/');
    };

    this.onSubmit = props.handleSubmit(this.submitForm.bind(this));
  }

  componentDidMount() {
    const { validateToken, location } = this.props;
    const { token, user } = location.state;

    if (token && user) {
      validateToken(user, token);
    }
  }

  submitForm(values) {
    console.log(values);
  }

  render(): Element<any> {
    const { location, loadingToken, validToken } = this.props;
    const { token, user } = location.state;

    if (!token || !user) {
      return (
        <Page
          statusBar
          header={{
            back: false,
            title: 'Forgot password',
          }}
        >
          <Container>
            <Text>The request is invalid.</Text>
          </Container>
        </Page>
      );
    }

    return (
      <Page
        statusBar
        header={{
          back: false,
          title: 'Forgot password',
        }}
      >
        <Container>
          {loadingToken && <Text>Validating reset request.</Text>}
          {!loadingToken && (
            <View>
              {validToken ? (
                <View>
                  <Text>Enter you new desired password.</Text>

                  <Label>New password:</Label>
                  <TextInput
                    name="password_1"
                    placeholder="Enter a password"
                    returnKeyType="next"
                    secureTextEntry
                    autofocus
                    autoCorrect={false}
                    blurOnSubmit={false}
                    onSubmitEditing={this.focusPassword}
                  />
                  <Label>Repeat new password:</Label>
                  <TextInput
                    name="password_2"
                    placeholder="Repeat the password"
                    returnKeyType="go"
                    secureTextEntry
                    onRef={this.setPasswordRef}
                    blurOnSubmit={false}
                    onSubmitEditing={this.onSubmit}
                  />
                  <Submit
                    title="Update password"
                    onPress={this.onSubmit}
                  />
                </View>
              ) : (
                <View>
                  <Text>The request to change your password has expired or is invalid.</Text>
                  <Submit
                    title="Try again"
                    onPress={this.toForgotPassword}
                  />
                  <Submit
                    title="Back to home screen"
                    onPress={this.toHomeScreen}
                  />
                </View>
              )}
            </View>
          )}
        </Container>
      </Page>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.password_1) {
    errors.password_1 = 'Enter a password';
  }

  if (!values.password_2) {
    errors.password_2 = 'Repeat the password';
  }

  if (values.password_1 && values.password_2 && values.password_1 !== values.password_2) {
    errors.password_2 = 'Passwords do not match';
  }

  return errors;
}

function mapStateToProps(state) {
  const { loading, valid } = state.reset;

  return {
    loadingToken: loading,
    validToken: valid,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    validateToken(user, token) {
      dispatch(validateResetToken(user, token));
    },
  };
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
  reduxForm({
    form: 'reset',
    validate,
  }),
)(Reset);
