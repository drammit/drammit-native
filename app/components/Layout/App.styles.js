import { StyleSheet } from 'react-native';

import { colors } from '../../Config.styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grey5,
  },
  statusBar: {
    flexGrow: 0,
    flexShrink: 0,
    backgroundColor: colors.green,
    height: 20,
    width: '100%',
  },
});
