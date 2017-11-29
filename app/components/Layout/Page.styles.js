import { StyleSheet } from 'react-native';

import { colors } from '../../Config.styles';

export default StyleSheet.create({
  statusBar: {
    flexGrow: 0,
    flexShrink: 0,
    backgroundColor: colors.green,
    height: 20,
    width: '100%',
  },
  pageContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
    backgroundColor: colors.light,
  },
});
