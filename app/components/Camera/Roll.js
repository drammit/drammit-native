// @flow

import React from 'react';
import type { Element } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import CameraRollPicker from 'react-native-camera-roll-picker';

import Checkmark from './Checkmark.png';

import { sizes } from '../../Config.styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  title: {
    paddingTop: 20,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: sizes.base,
  },
  checkmark: {
    position: 'absolute',
    bottom: 7,
    right: 7,
    height: 24,
    width: 24,
  },
  button: {
    padding: 6,
  },
});

type RollType = {
  onDone: Function,
  onChange: Function,
};

function Roll({ onDone, onChange }: RollType): Element<any> {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.text}>Pick an Image</Text>
      </View>
      <CameraRollPicker
        callback={onChange}
        selectSingleItem
        selectedMarker={<Image style={styles.checkmark} source={Checkmark} />}
      />
      <View style={styles.button}>
        <Button title="Done" onPress={onDone} />
      </View>
    </View>
  );
}

export default Roll;
