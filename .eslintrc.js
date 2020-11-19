module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: 'babel-eslint',
  extends: [
    'plugin:prettier/recommended'
    'plugin:react/recommended',
    'prettier/react',
    'prettier/standard'
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react','import','jsx-a11y','prettier','react-hooks',
  ],
  rules: {
  },
};
