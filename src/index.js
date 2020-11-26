/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './Todo/Todo';
import './index.css';
import './tailwind.css';
// import ClassApp from './ClassApp';

ReactDOM.render(
  // <ClassApp ask='how are you' ans='i am all okay' />,
  <Todo />,
  document.getElementById('root'),
);
