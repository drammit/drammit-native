// @flow

import React, { Component } from 'react';
import type { Element } from 'react';
import { connect } from 'react-redux';
import { Animated, Text, View, Button, StatusBar } from 'react-native';

import ImageContainer from '../../components/Layout/ImageContainer';
import Logo from '../../components/Logo/Logo';

import { colors } from '../../Config.styles';

import Login from './Login';

import Scotland from './Scotland.jpg';

import { styles, style } from './Welcome.styles';

type WelcomeType = {
  continueWithFacebook: Function,
  signUp: Function,
};

const openLogin = false;

class Welcome extends Component<WelcomeType> {
  constructor(props) {
    super(props);

    this.onOpenEmailLogin = this.openEmailLogin.bind(this);
    this.onCloseEmailLogin = this.closeEmailLogin.bind(this);
  }

  state = {
    fadeHeader: new Animated.Value(0),
    fadeFacebook: new Animated.Value(0),
    fadeEmail: new Animated.Value(0),
    fadeSignup: new Animated.Value(0),
    buttonsSlide: new Animated.Value(openLogin ? 1 : 0),
    renderLogin: openLogin,
  };

  componentDidMount() {
    setTimeout(() => {
      Animated.timing(
        this.state.fadeHeader,
        {
          toValue: 1,
          duration: 1500,
        },
      ).start();
    }, 500);

    setTimeout(() => {
      Animated.timing(
        this.state.fadeFacebook,
        {
          toValue: 1,
          duration: 500,
        },
      ).start();
    }, 2000);

    setTimeout(() => {
      Animated.timing(
        this.state.fadeEmail,
        {
          toValue: 1,
          duration: 500,
        },
      ).start();
    }, 1750);

    setTimeout(() => {
      Animated.timing(
        this.state.fadeSignup,
        {
          toValue: 1,
          duration: 500,
        },
      ).start();
    }, 1500);
  }

  openEmailLogin() {
    Animated.timing(
      this.state.buttonsSlide,
      {
        toValue: 1,
        duration: 300,
      },
    ).start();

    this.setState({
      renderLogin: true,
    });
  }

  closeEmailLogin() {
    Animated.sequence([
      Animated.timing(
        this.state.buttonsSlide,
        {
          toValue: 0,
          duration: 300,
        },
      ),
      {
        start: () => {
          this.setState({
            renderLogin: false,
          });
        },
      },
    ]).start();
  }

  render(): Element {
    const { continueWithFacebook, signUp } = this.props;
    const {
      fadeHeader, fadeFacebook, fadeEmail, fadeSignup, buttonsSlide, renderLogin,
    } = this.state;

    return (
      <ImageContainer
        source={Scotland}
      >
        <StatusBar hidden />
        <View style={styles.container}>
          <Animated.View
            style={{
              ...style.header,
              opacity: fadeHeader,
              transform: [{
                translateY: Animated.add(fadeHeader, buttonsSlide).interpolate({
                  inputRange: [0, 1, 2],
                  outputRange: [20, 0, -120],
                }),
              }],
            }}
          >
            <Logo />
            <View style={style.intro}>
              <Text style={styles.introDash}>——</Text>
              <Text style={styles.introText}>Keep track of and rate the whiskies you drink</Text>
              <Text style={styles.introDash}>——</Text>
            </View>
          </Animated.View>

          <Animated.View
            style={{
              ...style.buttons,
              opacity: buttonsSlide.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 0],
              }),
              transform: [{
                translateY: buttonsSlide.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 300],
                }),
              }],
            }}
          >
            <Animated.View
              style={{
                ...style.facebookButton,
                opacity: fadeFacebook,
                transform: [{
                  translateY: fadeFacebook.interpolate({
                    inputRange: [0, 1],
                    outputRange: [-10, 0],
                  }),
                }],
              }}
            >
              <Button
                onPress={continueWithFacebook}
                color={colors.white}
                title="Continue with Facebook"
              />
            </Animated.View>
            <Animated.View
              style={{
                ...style.emailButton,
                opacity: fadeEmail,
                transform: [{
                  translateY: fadeEmail.interpolate({
                    inputRange: [0, 1],
                    outputRange: [-10, 0],
                  }),
                }],
              }}
            >
              <Button
                onPress={this.onOpenEmailLogin}
                color={colors.white}
                title="Continue with email"
              />
            </Animated.View>
            <Animated.View
              style={{
                ...style.signupButton,
                opacity: fadeSignup,
                transform: [{
                  translateY: fadeSignup.interpolate({
                    inputRange: [0, 1],
                    outputRange: [-10, 0],
                  }),
                }],
              }}
            >
              <Button
                onPress={signUp}
                color={colors.white}
                title="New here? Sign up!"
              />
            </Animated.View>
          </Animated.View>

          <Animated.View
            style={{
              ...style.login,
              opacity: buttonsSlide,
              transform: [{
                translateY: buttonsSlide.interpolate({
                  inputRange: [0, 1],
                  outputRange: [120, 0],
                }),
              }],
            }}
          >
            {renderLogin && <Login onBack={this.onCloseEmailLogin} />}
          </Animated.View>
        </View>
      </ImageContainer>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    continueWithFacebook() {
      console.log('Facebook');
    },

    signUp() {
      console.log('Sign Up');
    },
  };
}

export default connect(null, mapDispatchToProps)(Welcome);
