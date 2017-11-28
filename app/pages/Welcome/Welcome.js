// @flow

import React, { Component } from 'react';
import type { Element } from 'react';
import { connect } from 'react-redux';
import { Animated, Text, View, Button, StatusBar } from 'react-native';

import ImageContainer from '../../components/Layout/ImageContainer';
import Logo from '../../components/Logo/Logo';

import { colors } from '../../Config.styles';

import Scotland from './Scotland.jpg';

import { styles, style } from './Welcome.styles';

type WelcomeType = {
  continueWithFacebook: Function,
  continueWithEmail: Function,
  signUp: Function,
};

class Welcome extends Component<WelcomeType> {
  state = {
    fadeHeader: new Animated.Value(0),
    fadeFacebook: new Animated.Value(0),
    fadeEmail: new Animated.Value(0),
    fadeSignup: new Animated.Value(0),
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

  render(): Element {
    const { continueWithFacebook, continueWithEmail, signUp } = this.props;
    const { fadeHeader, fadeFacebook, fadeEmail, fadeSignup } = this.state;

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
                translateY: fadeHeader.interpolate({
                  inputRange: [0, 1],
                  outputRange: [20, 0],
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

          <View style={styles.buttons}>
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
                onPress={continueWithEmail}
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
          </View>
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

    continueWithEmail() {
      console.log('Email');
    },

    signUp() {
      console.log('Sign Up');
    },
  };
}

export default connect(null, mapDispatchToProps)(Welcome);
