// @flow

import React from 'react';
import type { Element } from 'react';
import { View, Button } from 'react-native';

import { colors, sizes } from '../../Config.styles';

type SubmitType = {
  title: string,
  light?: boolean,
  disabled: boolean,
  onPress: Function,
};

function Submit({ title, onPress, light = false, disabled = false }: SubmitType): Element<any> {
  return (
    <View
      style={{
        backgroundColor: light ? 'transparent' : colors.orange,
        marginTop: sizes.padding * 2,
        marginBottom: sizes.padding * 2,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: light ? colors.lightGreen : 'transparent',
      }}
    >
      <Button
        color={light ? colors.lightGreen : colors.light}
        title={title}
        disabled={disabled}
        onPress={onPress}
      />
    </View>
  );
}

export default Submit;
