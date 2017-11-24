module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true
  },
  extends: ['airbnb', 'plugin:flowtype/recommended'],
  plugins: ['flowtype'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
    'react/require-default-props': 0,
    'import/prefer-default-export': 0,
  }
};
