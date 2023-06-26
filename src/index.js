import React from 'react';
import ReactDOM from 'react-dom/client';
import TodoHome from './Components/TodoHome';
import { Provider } from 'react-redux';
import store from './Redux/Todo.Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <TodoHome />
    </Provider>
  </React.StrictMode>
);
