// @flow

import React, { Component } from 'react';
import type { Element } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { reduxForm } from 'redux-form';

import { signupStep1 } from '../../actions/SignUp';

import Page from '../../components/Layout/Page';
import Text from '../../components/Page/Text';
import Container from '../../components/Page/Container';
import KeyboardScrollView from '../../components/Page/KeyboardScrollView';
import Label from '../../components/Form/Label';
import TextInput from '../../components/Form/TextInput';
import Submit from '../../components/Form/Submit';

type SignUpType = ReduxFormType & ReactRouterType;

class Forgot extends Component<SignUpType> {
  constructor(props) {
    super(props);

    this.onSubmit = props.handleSubmit(this.handleSubmit.bind(this));

    this.setPasswordRef = (ref) => {
      this.passwordInput = ref;
    };
    this.setEmailRef = (ref) => {
      this.emailInput = ref;
    };

    this.focusPassword = () => this.passwordInput.focus();
  }

  handleSubmit(values) {
    this.props.onSubmitForm(values.email, values.password);
  }

  render(): Element<any> {
    return (
      <Page
        statusBar
        header={{
          back: true,
          title: 'Sign up',
        }}
      >
        <KeyboardScrollView>
          <Container>
            <Text>
              First, provide your email address and a desired password.
            </Text>

            <Label>Email address</Label>
            <TextInput
              name="email"
              placeholder="Enter your email address"
              returnKeyType="next"
              keyboardType="email-address"
              autofocus
              onRef={this.setEmailRef}
              autoCorrect={false}
              blurOnSubmit={false}
              onSubmitEditing={this.focusPassword}
            />
            <Label>Choose a password</Label>
            <TextInput
              name="password"
              placeholder="Choose a password"
              returnKeyType="go"
              secureTextEntry
              onRef={this.setPasswordRef}
              blurOnSubmit={false}
              onSubmitEditing={this.onSubmit}
            />
            <Submit
              title="Sign Up"
              onPress={this.onSubmit}
            />
          </Container>
        </KeyboardScrollView>
      </Page>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.email) {
    errors.email = 'Enter email address';
  }

  if (!values.password) {
    errors.password = 'Enter a desired password';
  }

  return errors;
}

function mapDispatchToProps(dispatch) {
  return {
    onSubmitForm(email, password) {
      dispatch(signupStep1(email, password));
    },
  };
}

export default compose(
  connect(null, mapDispatchToProps),
  withRouter,
  reduxForm({
    form: 'sign-up-1',
    validate,
  }),
)(Forgot);
