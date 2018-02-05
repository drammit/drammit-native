import { sizes, colors } from '../../../Config.styles';

export default {
  container: {
    marginTop: sizes.padding,
    padding: sizes.padding * 2,
    backgroundColor: colors.light,
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
    marginTop: 4,
    marginBottom: sizes.padding,
    height: 14.5,
    width: 150,
    backgroundColor: colors.grey5,
  },
  description: {
    marginTop: 2,
    backgroundColor: colors.grey5,
    height: 12.5,
    width: 190,
  },
};
