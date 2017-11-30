import { StyleSheet } from 'react-native';

import { colors, sizes } from '../../Config.styles';

export default StyleSheet.create({
  container: {
    marginTop: 6,
    marginBottom: 6,
  },
  text: {
    color: colors.dark,
    fontSize: sizes.base,
    lineHeight: sizes.lineHeight,
  },
});
