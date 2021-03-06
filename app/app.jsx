import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './components/TodoApp';

$(document).foundation();

import 'style!css!sass!./styles/app.scss';

ReactDOM.render(
  <TodoApp />,
  document.getElementById('app')
);
