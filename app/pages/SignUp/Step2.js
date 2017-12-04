// @flow

import React, { Component } from 'react';
import type { Element } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { reduxForm } from 'redux-form';

import { signupStep2 } from '../../actions/SignUp';

import Page from '../../components/Layout/Page';
import Text from '../../components/Page/Text';
import Container from '../../components/Page/Container';
import KeyboardScrollView from '../../components/Page/KeyboardScrollView';
import Label from '../../components/Form/Label';
import TextInput from '../../components/Form/TextInput';
import Submit from '../../components/Form/Submit';
import Error from '../../components/Form/Error';

type SignUpType = ReduxFormType & ReactRouterType & {
  loading: boolean,
  error: string,
};

class Forgot extends Component<SignUpType> {
  constructor(props) {
    super(props);

    this.onSubmit = props.handleSubmit(this.handleSubmit.bind(this));

    this.setNameRef = (ref) => {
      this.nameInput = ref;
    };

    this.focusName = () => this.nameInput.focus();
  }

  handleSubmit(values) {
    this.props.onSubmitForm(values.username, values.fullName);
  }

  render(): Element<any> {
    const { loading, errorMessage } = this.props;

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
              Almost done! Tell us a bit about yourself.
            </Text>

            {errorMessage !== '' && <Error message={errorMessage} />}

            <Label>Username</Label>
            <TextInput
              name="username"
              placeholder="Pick a username"
              returnKeyType="next"
              keyboardType="default"
              autofocus
              autoCorrect={false}
              blurOnSubmit={false}
              onSubmitEditing={this.focusName}
            />
            <Label>Full name</Label>
            <TextInput
              name="fullName"
              placeholder="Your full name (optional)"
              returnKeyType="go"
              secureTextEntry
              onRef={this.setNameRef}
              blurOnSubmit={false}
              onSubmitEditing={this.onSubmit}
            />
            <Submit
              title={loading ? 'Completing Sign Up' : 'Complete Sign Up'}
              onPress={this.onSubmit}
              disabled={loading}
            />

            <Text>By signing up, you agree to the Terms of Service of Drammit.</Text>
          </Container>
        </KeyboardScrollView>
      </Page>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.username) {
    errors.username = 'Pick a username';
  }

  return errors;
}

function mapStateToProps(state) {
  const { step2Loading, step2Error } = state.signup;

  return {
    loading: step2Loading,
    errorMessage: step2Error,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSubmitForm(username, fullName) {
      dispatch(signupStep2(username, fullName));
    },
  };
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
  reduxForm({
    form: 'sign-up-2',
    validate,
  }),
)(Forgot);
