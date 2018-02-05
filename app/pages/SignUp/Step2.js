// @flow

import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { reduxForm } from 'redux-form';
import { View, Text as NativeText, TouchableWithoutFeedback, Button } from 'react-native';

import { signupStep2 } from '../../actions/SignUp';

import { validateUsername } from '../../core/validate';

import Page from '../../components/Layout/Page';
import Text from '../../components/Page/Text';
import Container from '../../components/Page/Container';
import KeyboardScrollView from '../../components/Page/KeyboardScrollView';
import Label from '../../components/Form/Label';
import TextInput from '../../components/Form/TextInput';
import Image from '../../components/Form/Image';
import Submit from '../../components/Form/Submit';
import Error from '../../components/Form/Error';
import UploadIndicator from '../../components/Indicators/Upload';

import Terms from './Terms';

import styles from './Step2.styles';

type SignUpType = ReduxFormType & ReactRouterType & {
  loading: boolean,
  error: string,
  errorMessage: string,
  onSubmitForm: (email: string, password: string, username: string, fullName: string,
    avatar: string, facebookId: string) => void,
  initialValues: {
    email: string,
    password: string,
    facebookId: string,
  }
};

type SignUpStateType = {
  showTerms: boolean,
};

class Step2 extends Component<SignUpType, SignUpStateType> {
  constructor(props) {
    super(props);

    this.onSubmit = props.handleSubmit(this.handleSubmit.bind(this));

    this.setNameRef = (ref) => {
      this.nameInput = ref;
    };

    this.focusName = () => this.nameInput.focus && this.nameInput.focus();

    this.showTerms = () => { this.toggleTerms(true); };
    this.hideTerms = () => { this.toggleTerms(false); };

    this.state = {
      showTerms: false,
    };
  }

  onSubmit: () => void;
  setNameRef: (ref: TextInput) => void;
  nameInput: TextInput;
  focusName: () => void;
  showTerms: () => void;
  hideTerms: () => void;

  toggleTerms(showTerms) {
    this.setState({
      showTerms,
    });
  }

  handleSubmit(values) {
    const { email, password, facebookId } = this.props.initialValues;

    this.props.onSubmitForm(
      email,
      password,
      values.username,
      values.fullName,
      values.avatar,
      facebookId,
    );
  }

  render() {
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
            <UploadIndicator show={loading} />
            <Container>
              <Text>
                Almost done! Tell us a bit about yourself.
              </Text>

              {errorMessage !== '' && <Error message={errorMessage} />}

              <View style={styles.infoContainer}>
                <View
                  style={styles.imageContainer}
                >
                  <Label>Profile picture</Label>
                  <Image
                    name="avatar"
                    text="Add an image"
                    replaceText="Replace image"
                  />
                </View>
                <View style={styles.namesContainer}>
                  <Label>Your name</Label>
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
                  <TextInput
                    name="fullName"
                    placeholder="Your full name (optional)"
                    returnKeyType="go"
                    onRef={this.setNameRef}
                    blurOnSubmit={false}
                    onSubmitEditing={this.onSubmit}
                  />
                </View>
              </View>

              <Submit
                title={loading ? 'Completing Sign Up' : 'Complete Sign Up'}
                onPress={this.onSubmit}
                disabled={loading}
              />

              <View style={styles.linkContainer}>
                <NativeText>By signing up, you agree to the </NativeText>
                <TouchableWithoutFeedback onPress={this.showTerms}>
                  <View>
                    <NativeText style={styles.link}>
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

  if (values.username && !validateUsername(values.username)) {
    errors.username = 'Username can only contain alphanumeric characters';
  }

  return errors;
}

function mapStateToProps(state) {
  const { step2Loading, step2Error, data } = state.signup;

  return {
    loading: step2Loading,
    errorMessage: step2Error,
    initialValues: {
      ...data,
    },
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSubmitForm(email, password, username, fullName, avatar, facebookId) {
      dispatch(signupStep2(
        email,
        password,
        username,
        fullName,
        avatar,
        facebookId,
      ));
    },
  };
}

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: 'sign-up-2',
    validate,
    touchOnBlur: false,
    enableReinitialize: true,
  }),
)(Step2);
