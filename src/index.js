import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './reducers/index'

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
      <Provider store={store}>
      <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

