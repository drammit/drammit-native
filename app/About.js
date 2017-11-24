// @flow

import React from 'react';
import type { Element } from 'react';
import { View, Text } from 'react-native';
import { Link } from 'react-router-native';

import styles from './Styles';

function About(): Element<any> {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
        About
      </Text>
      <Link to="/">
        <Text>Back to home</Text>
      </Link>
    </View>
  );
}

export default About;
