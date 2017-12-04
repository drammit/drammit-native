import { StyleSheet } from 'react-native';

import { colors, sizes } from '../../Config.styles';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.red,
    padding: 8,
    margin: 6,
    marginLeft: 0,
    marginRight: 0,
  },
  text: {
    color: colors.light,
    fontSize: sizes.base,
    fontWeight: '600',
  },
});
