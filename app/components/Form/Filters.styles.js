import { colors, sizes } from '../../Config.styles';

export default {
  container: {
    display: 'flex',
    width: '100%',
    marginTop: sizes.padding * 0.5,
    marginBottom: sizes.padding * 0.5,
  },
  filters: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: sizes.padding,
    paddingBottom: sizes.padding,
    width: '100%',
  },
  filterInside: {
    paddingLeft: sizes.padding,
    paddingRight: sizes.padding,
  },
  filter: {
    borderWidth: 1,
    borderColor: colors.grey2,
    alignItems: 'center',
    margin: sizes.padding,
    padding: sizes.padding,
    paddingLeft: sizes.padding * 2,
    paddingRight: sizes.padding * 2,
    borderRadius: 4,
    flexGrow: 0,
    flexShrink: 0,
  },
  filterSelected: {
    borderColor: colors.lightGreen,
    backgroundColor: colors.lightGreen,
  },
  filterText: {
    color: colors.grey,
  },
  filterTextSelected: {
    color: colors.light,
  },
};
