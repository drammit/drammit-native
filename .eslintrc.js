module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true
  },
  extends: ['airbnb', 'plugin:flowtype/recommended'],
  plugins: ['flowtype'],
  rules: {
    'react/prefer-stateless-function': [0],
    'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
    'react/require-default-props': 0,
    'import/prefer-default-export': 0,
    'jsx-a11y/anchor-is-valid': ['error', {
      components: ['Link'],
      specialLink: ['hrefLeft', 'hrefRight'],
      aspects: ['invalidHref', 'preferButton'],
    }],
  }
};
