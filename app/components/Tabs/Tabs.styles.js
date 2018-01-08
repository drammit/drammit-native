import { colors, sizes } from '../../Config.styles';

export default {
  container: {
    width: '100%',
    backgroundColor: colors.light,
    display: 'flex',
    flexDirection: 'row',
  },
  tab: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: '100%',
    display: 'flex',
    alignItems: 'center',
    paddingTop: sizes.padding,
    paddingBottom: (sizes.padding * 2) - 1.5,
    borderBottomWidth: 1.5,
    borderBottomColor: 'transparent',
  },
  active: {
    borderBottomColor: colors.lightGreen,
  },
  text: {
    fontSize: sizes.small,
    letterSpacing: 0.5,
    color: colors.grey1,
  },
  activeText: {
    color: colors.lightGreen,
    fontWeight: 'bold',
  },
};
