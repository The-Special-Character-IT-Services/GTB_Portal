npm init / yarn init

yarn add webpack webpack-cli webpack-dev-server -D

setup webpack.config.js

add loaders in webpack.config.js file

-> babel-loader

yarn add -D babel-loader @babel/core babel/preset-env @babel/preset-react

created .babelrc file -> added presets

yarn add -D html-loader html-webpack-plugin

add html loader & add html-webpack plugin

yarn add -D css-loader style-loader

add css and style loader

yarn add -D clean-webpack-plugin

yarn add eslint -D

npx eslint --init
-> answer questions

-> .eslintrc.js

yarn add -D babel-eslint prettier eslint-plugin-prettier eslint-config-prettier

-> add aditional configuration in eslintrc.js


parser: 'babel-eslint',
  extends: [
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier/react',
    'prettier/standard',
    'airbnb',
  ],

plugins: ['react', 'prettier', 'import', 'jsx-a11y', 'react-hooks'],

setup prettier.config.js

setup vscode settings








