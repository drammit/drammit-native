import { StyleSheet } from 'react-native';

import { colors, sizes } from '../../Config.styles';

export default StyleSheet.create({
  input: {
    backgroundColor: colors.light,
    padding: sizes.padding,
    fontSize: sizes.base,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginBottom: -1,
  },
});
