// @flow

function fontSize(scale: number): number {
  return 16 * scale;
}

const config = {
  colors: {
    dark: '#050505',
    grey: '#414141',
    grey1: '#6b6b6b',
    grey2: '#8b8b8b',
    grey3: '#b8b8b8',
    grey4: '#dedede',
    grey5: '#efefef',
    light: '#fffdfa',
    white: '#ffffff',

    brightGreen: '#55d96e',
    lightGreen: '#6fa664',
    green: '#365131',
    darkGreen: '#373a36',
    darkBrown: '#401100',
    brown: '#83551c',
    deepOrange: '#cc5914',
    orange: '#f7a732',
    yellow: '#f4d980',
    lightOrange: '#fde3be',
    lightYellow: '#f5f5f0',
    blue: '#174886',
    red: '#e30117',
    lightRed: '#ffc8c8',
    facebook: '#3B5998',
  },
  sizes: {
    base: fontSize(1),
    lineHeight: fontSize(1.5),
    hugeHead: fontSize(2),
    bigHead: fontSize(1.23),
    head: fontSize(1.15),
    smallish: fontSize(0.92),
    small: fontSize(0.84),
    mini: fontSize(0.7),
    padding: 6,
  },
};

export const { colors, sizes } = config;
