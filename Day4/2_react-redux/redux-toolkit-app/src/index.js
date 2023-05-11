import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import 'bootstrap';

import RootComponent from './components/root/RootComponent';
import configureStore from './store/configureStore';

const appStore = configureStore();
// const appStore = configureStore({ counter: 1000 });
// console.log(appStore.getState());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={appStore}>
    <RootComponent />
  </Provider>
);