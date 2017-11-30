// @flow

import React from 'react';
import type { Element } from 'react';
import { View, Button, StyleSheet } from 'react-native';

import { colors, sizes } from '../../Config.styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.orange,
    marginTop: sizes.padding * 2,
    marginBottom: sizes.padding * 2,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'transparent',
  },
});

type SubmitType = {
  title: string,
  onPress: Function,
};

function Submit({ title, onPress }: SubmitType): Element<any> {
  return (
    <View style={styles.container}>
      <Button color={colors.light} title={title} onPress={onPress} />
    </View>
  );
}

export default Submit;
