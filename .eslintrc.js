module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: 'babel-eslint',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier/react',
    'prettier/standard',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', 'import', 'jsx-a11y', 'react-hooks'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'arrow-parens': [1, 'as-needed'],
    'react/state-in-constructor': [1, 'never'],
    'react/static-property-placement': [
      'error',
      'property assignment',
      {
        childContextTypes: 'static getter',
        contextTypes: 'static public field',
        contextType: 'static public field',
        displayName: 'static public field',
        propTypes: 'static public field',
        defaultProps: 'static public field',
      },
    ],
    'react/jsx-props-no-spreading': 0,
    'react/button-has-type': 0,
    'object-curly-newline': 0,
    'react/jsx-closing-bracket-location': [
      'error',
      {
        nonEmpty: 'after-props',
        selfClosing: 'tag-aligned',
      },
    ],
  },
};
