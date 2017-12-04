import { StyleSheet } from 'react-native';

import { colors } from '../../Config.styles';

export default StyleSheet.create({
  infoContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    marginTop: 12,
    marginBottom: 12,
  },
  imageContainer: {
    width: 100,
    marginRight: 20,
  },
  namesContainer: {
    flex: 1,
  },
  link: {
    color: colors.deepOrange,
  },
  linkContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 12,
  },
});
