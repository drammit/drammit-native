// @flow

import React from 'react';
import type { Element } from 'react';
import { Text, View, Button } from 'react-native';
import { Link } from 'react-router-native';

import ImageContainer from '../../components/Layout/ImageContainer';
import Logo from '../../components/Logo/Logo';

import { colors } from '../../Config.styles';

import Schotland from './Scotland.jpg';

import styles from './Welcome.styles';


function Welcome(): Element<any> {
  return (
    <ImageContainer
      source={Schotland}
    >
      <View style={styles.container}>
        <Logo />
        <View style={styles.intro}>
          <Text style={styles.introDash}>——</Text>
          <Text style={styles.introText}>Keep track of and rate the whiskies you drink</Text>
          <Text style={styles.introDash}>——</Text>
        </View>

        <View style={styles.buttons}>
          <View style={styles.facebookButton}>
            <Button color={colors.white} title="Continue with Facebook" />
          </View>
          <View style={styles.emailButton}>
            <Button color={colors.white} title="Continue with email" />
          </View>
          <View style={Object.assign({}, styles.button, { borderColor: colors.white, borderWidth: 1 })}>
            <Button color={colors.white} title="New here? Sign up!" />
          </View>
        </View>
      </View>
    </ImageContainer>
  );
}

export default Welcome;
