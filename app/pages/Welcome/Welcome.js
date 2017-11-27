// @flow

import React from 'react';
import type { Element } from 'react';
import { Text, View } from 'react-native';
import { Link } from 'react-router-native';

import ImageContainer from '../../components/Layout/ImageContainer';

import Schotland from './Scotland.jpg';

import styles from './Welcome.styles';

function Welcome(): Element<any> {
  return (
    <ImageContainer
      source={Schotland}
    >
      <View style={styles.container}>
        <Text>Keep track of and rate the whiskies you drink</Text>
      </View>
    </ImageContainer>
  );
}

export default Welcome;
