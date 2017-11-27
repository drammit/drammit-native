import { StyleSheet } from 'react-native';

import { colors, sizes } from '../../Config.styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  intro: {
    flexDirection: 'row',
    marginTop: sizes.base,
    marginBottom: sizes.base,
    justifyContent: 'center',
    alignItems: 'center',
  },
  introText: {
    textAlign: 'center',
    fontSize: sizes.head,
    lineHeight: sizes.head * 1.6,
    fontWeight: '600',
    color: colors.green,
    flexGrow: 1,
    width: '60%',
  },
  introDash: {
    width: '20%',
    textAlign: 'center',
  },
});
