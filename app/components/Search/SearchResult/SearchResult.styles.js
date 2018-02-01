import { Image, StyleSheet } from 'react-native';

import { sizes, colors } from '../../../Config.styles';

export default StyleSheet.create({
  container: {
    marginTop: sizes.padding,
    padding: sizes.padding * 2,
    backgroundColor: colors.light,
    display: 'flex',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: colors.grey4,
  },
  imageContainer: {
    marginRight: sizes.padding * 2,
  },
  image: {
    height: 42,
    width: 42,
    resizeMode: Image.resizeMode.contain,
  },
  name: {
    fontSize: sizes.base,
    marginBottom: sizes.padding,
  },
  description: {
    fontSize: sizes.small,
    color: colors.grey1,
  },
  arrowContainer: {
    justifyContent: 'center',
    marginLeft: 'auto',
    paddingLeft: sizes.padding * 2,
  },
});
