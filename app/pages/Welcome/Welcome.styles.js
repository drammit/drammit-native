import { StyleSheet } from 'react-native';

import { colors, sizes } from '../../Config.styles';
import { darken } from '../../core/colors';

const button = {
  marginTop: sizes.base,
  borderBottomWidth: 3,
};

export const style = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  header: {
    alignItems: 'center',
    width: '100%',
    position: 'absolute',
    top: 180,
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
  buttons: {
    marginTop: sizes.base,
    marginBottom: sizes.base,
    width: '80%',
    position: 'absolute',
    bottom: 60,
  },
  facebookButton: Object.assign({}, button, {
    backgroundColor: colors.facebook,
    borderBottomColor: darken(colors.facebook, 35),
  }),
  emailButton: Object.assign({}, button, {
    backgroundColor: colors.lightGreen,
    borderBottomColor: colors.darkGreen,
  }),
  signupButton: Object.assign({}, button, {
    borderColor: colors.white,
    borderWidth: 1,
    borderBottomWidth: 1,
  }),
};

export const styles = StyleSheet.create(style);
