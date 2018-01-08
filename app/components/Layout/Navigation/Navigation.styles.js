import { StyleSheet } from 'react-native';

import { colors } from '../../../Config.styles';

export default StyleSheet.create({
  page: {
    flex: 1,
    width: '100%',
  },
  navigation: {
    height: 50,
    borderTopColor: colors.grey3,
    borderTopWidth: 0.5,
    backgroundColor: colors.light,
    flexShrink: 0,
    flexGrow: 0,
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
