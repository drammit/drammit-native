// @flow

import React from 'react';
import type { Element } from 'react';
import { Text, View } from 'react-native';
import { Link } from 'react-router-native';

import ImageContainer from '../../components/Layout/ImageContainer';
import Logo from '../../components/Logo/Logo';

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
      </View>
    </ImageContainer>
  );
}

export default Welcome;
