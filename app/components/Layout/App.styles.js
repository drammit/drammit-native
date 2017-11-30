import { StyleSheet } from 'react-native';

import { colors } from '../../Config.styles';

export const style = {
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },
  statusBar: {
    flexGrow: 0,
    flexShrink: 0,
    height: 20,
    width: '100%',
  },
};

export const styles = StyleSheet.create(style);
