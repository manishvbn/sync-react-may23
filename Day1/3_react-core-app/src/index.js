import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HelloComponent from './components/1_hello/HelloComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelloComponent />
  </React.StrictMode>
);