import { StyleSheet } from 'react-native';

import { sizes, colors } from '../../Config.styles';

export default StyleSheet.create({
  submitContainer: {
    marginLeft: sizes.padding * 2,
    marginRight: sizes.padding * 2,
  },
  filterSwitch: {
    backgroundColor: colors.light,
    alignItems: 'center',
  },
  filterSwitchButton: {
    fontSize: sizes.small,
    color: colors.grey2,
    padding: 12,
  },
});
