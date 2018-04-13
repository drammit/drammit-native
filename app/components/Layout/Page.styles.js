import { StyleSheet } from 'react-native';

import { colors } from '../../Config.styles';

export default StyleSheet.create({
  pageContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
    height: '100%',
    backgroundColor: colors.grey5,
    position: 'absolute',
    top: 0,
    left: 0,
  },
});
