// @flow

import React, { Component } from 'react';
import type { Element } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import Page from '../../components/Layout/Page';
import Text from '../../components/Page/Text';
import Container from '../../components/Page/Container';
import Label from '../../components/Form/Label';
import TextInput from '../../components/Form/TextInput';
import Submit from '../../components/Form/Submit';

type ForgotType = ReduxFormType;

class Forgot extends Component<ForgotType> {
  constructor(props) {
    super(props);

    this.onSubmit = props.handleSubmit((values) => {
      console.log(values);
    });
  }

  render(): Element<any> {
    return (
      <Page
        statusBar
        header={{
          back: true,
          title: 'Forgot password',
        }}
      >
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

export default compose(
  connect(),
  reduxForm({
    form: 'forgot',
    validate,
  }),
)(Forgot);
