// @flow

import React, { Component } from 'react';
import type { Element } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { reduxForm } from 'redux-form';

import { submitForgotPassword } from '../../actions/Login';

import Page from '../../components/Layout/Page';
import Text from '../../components/Page/Text';
import Container from '../../components/Page/Container';
import Label from '../../components/Form/Label';
import TextInput from '../../components/Form/TextInput';
import Submit from '../../components/Form/Submit';

type ForgotType = ReduxFormType & ReactRouterType & {
  submitRequest: (username: string) => void,
};

type ForgotStateType = {
  requestSent: boolean,
};

class Forgot extends Component<ForgotType, ForgotStateType> {
  constructor(props) {
    super(props);

    this.onSubmit = props.handleSubmit(this.handleSubmit.bind(this));
    this.onBackToHome = this.backToHome.bind(this);

    this.state = {
      requestSent: false,
    };
  }

  onSubmit: () => void;
  onBackToHome: () => void;

  handleSubmit(values) {
    this.props.submitRequest(values.username);

    this.setState({
      requestSent: true,
    });
  }

  backToHome() {
    this.props.history.push('/');
  }

  render(): Element<any> {
    const { requestSent } = this.state;

    return (
      <Page
        statusBar
        header={{
          back: true,
          title: 'Forgot password',
        }}
      >
        {requestSent ? (
          <Container>
            <Text>An email has been sent to your inbox.</Text>
            <Text>Please follow the instructions in the mail to reset your password.</Text>
            <Submit
              title="Back to home screen"
              onPress={this.onBackToHome}
            />
          </Container>
        ) : (
          <Container>
            <Text>No worries! We&#39;ve got you covered.</Text>
            <Text>
              Just enter your email address or username and we&#39;ll send you password resetting
              instructions.
            </Text>

            <Label>Username / Email</Label>
            <TextInput
              name="username"
              placeholder="Your username or email address"
              returnKeyType="send"
              keyboardType="email-address"
              autofocus
              autoCorrect={false}
              blurOnSubmit={false}
              onSubmitEditing={this.onSubmit}
            />
            <Submit
              title="Send reset request"
              onPress={this.onSubmit}
            />
          </Container>
        )}
      </Page>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.username) {
    errors.username = 'Enter username or email address';
  }

  return errors;
}

function mapDispatchToProps(dispatch) {
  return {
    submitRequest(username) {
      dispatch(submitForgotPassword(username));
    },
  };
}

export default compose(
  connect(null, mapDispatchToProps),
  withRouter,
  reduxForm({
    form: 'forgot',
    validate,
  }),
)(Forgot);
