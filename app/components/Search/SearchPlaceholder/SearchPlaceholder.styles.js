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
    height: 42,
    width: 42,
    borderRadius: 42,
    backgroundColor: colors.grey5,
  },
  name: {
    marginBottom: sizes.padding,
    height: 19.5,
    width: 150,
    backgroundColor: colors.grey5,
  },
  description: {
    backgroundColor: colors.grey5,
    height: 16.5,
    width: 190,
  },
});
