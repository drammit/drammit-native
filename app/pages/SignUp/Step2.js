// @flow

import React, { Component } from 'react';
import type { Element } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { reduxForm } from 'redux-form';
import { View, Text as NativeText, TouchableWithoutFeedback, Button } from 'react-native';

import { signupStep2 } from '../../actions/SignUp';

import Page from '../../components/Layout/Page';
import Text from '../../components/Page/Text';
import Container from '../../components/Page/Container';
import KeyboardScrollView from '../../components/Page/KeyboardScrollView';
import Label from '../../components/Form/Label';
import TextInput from '../../components/Form/TextInput';
import Submit from '../../components/Form/Submit';
import Error from '../../components/Form/Error';

import Terms from './Terms';

type SignUpType = ReduxFormType & ReactRouterType & {
  loading: boolean,
  error: string,
};

class Step2 extends Component<SignUpType> {
  constructor(props) {
    super(props);

    this.onSubmit = props.handleSubmit(this.handleSubmit.bind(this));

    this.setNameRef = (ref) => {
      this.nameInput = ref;
    };

    this.focusName = () => this.nameInput.focus();

    this.showTerms = () => { this.toggleTerms(true); };
    this.hideTerms = () => { this.toggleTerms(false); };

    this.state = {
      showTerms: false,
    };
  }

  toggleTerms(showTerms) {
    this.setState({
      showTerms,
    });
  }

  handleSubmit(values) {
    this.props.onSubmitForm(values.username, values.fullName);
  }

  render(): Element<any> {
    const { loading, errorMessage } = this.props;
    const { showTerms } = this.state;

    return (
      <Page
        statusBar
        header={{
          back: true,
          title: 'Sign up',
        }}
      >
        {showTerms ? (
          <View>
            <KeyboardScrollView>
              <Container>
                <Terms />
              </Container>
            </KeyboardScrollView>
            <Button title="Close Terms of Service" onPress={this.hideTerms} />
          </View>
        ) : (
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

              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  padding: 12,
                }}
              >
                <NativeText>By signing up, you agree to the </NativeText>
                <TouchableWithoutFeedback onPress={this.showTerms}>
                  <View>
                    <NativeText
                      style={{
                        color: 'blue',
                      }}
                    >
                      Terms of Service
                    </NativeText>
                  </View>
                </TouchableWithoutFeedback>
                <NativeText>of Drammit.</NativeText>
              </View>
            </Container>
          </KeyboardScrollView>
        )}
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
)(Step2);
