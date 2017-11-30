import { StyleSheet } from 'react-native';

import { colors, sizes } from '../../Config.styles';

export const style = {
  input: {
    backgroundColor: colors.light,
    paddingTop: sizes.padding * 2,
    paddingBottom: sizes.padding * 2,
    fontSize: sizes.base,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
};

export const styles = StyleSheet.create(style);
