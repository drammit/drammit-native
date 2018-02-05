// @flow

import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Redirect } from 'react-router-native';
import { reduxForm } from 'redux-form';

import { signupStep1 } from '../../actions/SignUp';

import { validateEmail } from '../../core/validate';

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
  errorMessage: string,
  nextStep: boolean,
  initialValues: { email: string, password: string },
  onSubmitForm: (email: string, password: string) => void,
};

class Step1 extends Component<SignUpType> {
  constructor(props) {
    super(props);

    this.onSubmit = props.handleSubmit(this.handleSubmit.bind(this));

    this.setPasswordRef = (ref) => {
      this.passwordInput = ref;
    };

    this.focusPassword = () => this.passwordInput.focus && this.passwordInput.focus();
  }

  onSubmit: () => void;
  setPasswordRef: (ref: TextInput) => void;
  passwordInput: TextInput;
  focusPassword: () => void;

  handleSubmit(values) {
    this.props.onSubmitForm(values.email, values.password);
  }

  render() {
    const {
      loading, errorMessage, nextStep, initialValues,
    } = this.props;

    if (nextStep) {
      return <Redirect to="/sign-up/step-2" push />;
    }

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

            {errorMessage !== '' && <Error message={errorMessage} />}

            <Label>Email address</Label>
            <TextInput
              name="email"
              placeholder="Enter your email address"
              returnKeyType="next"
              keyboardType="email-address"
              autofocus={initialValues.email === '' || !initialValues.email}
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
              autofocus={initialValues.email !== '' && !!initialValues.email}
              onRef={this.setPasswordRef}
              blurOnSubmit={false}
              onSubmitEditing={this.onSubmit}
            />
            <Submit
              title={loading ? 'Signing Up' : 'Sign Up'}
              onPress={this.onSubmit}
              disabled={loading}
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
  } else if (values.email && !validateEmail(values.email)) {
    errors.email = 'Enter a valid email address';
  }

  if (!values.password) {
    errors.password = 'Enter a desired password';
  }

  return errors;
}

function mapStateToProps(state) {
  const {
    step1Loading, step1Error, step1Continue, data,
  } = state.signup;

  return {
    loading: step1Loading,
    errorMessage: step1Error,
    nextStep: step1Continue,
    initialValues: {
      email: data.email,
      password: data.password,
    },
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSubmitForm(email, password) {
      dispatch(signupStep1(email, password));
    },
  };
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
  reduxForm({
    form: 'sign-up-1',
    validate,
    enableReinitialize: true,
  }),
)(Step1);
