// @flow

import React from 'react';
import type { Element } from 'react';
import { View, Text } from 'react-native';

import SVG from './svg';

function Timeline(): Element<any> {
  return (
    <View>
      <SVG />
    </View>
  );
}

export default Timeline;
