import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './index.css';
import { Provider } from 'react-redux';
import Store from './redux/store';
import api from './API/data.json'

const StoreInstance = Store({api});


ReactDOM.render(
  <Provider store={StoreInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);
