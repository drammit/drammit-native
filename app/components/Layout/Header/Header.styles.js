import { StyleSheet } from 'react-native';

import { colors, sizes } from '../../../Config.styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  backButton: {
    flexGrow: 0,
    left: 0,
    position: 'absolute',
    zIndex: 2,
  },
  backContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    width: '100%',
  },
  backText: {
    fontSize: sizes.base,
    color: colors.dark,
  },
  backImage: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  title: {
    fontSize: sizes.base,
    color: colors.dark,
    textAlign: 'center',
    zIndex: 1,
    flexGrow: 1,
    marginLeft: 60,
    marginRight: 60,
  },
});
