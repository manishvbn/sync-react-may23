// import './index.css';

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import HelloComponent from './components/1_hello/HelloComponent';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <HelloComponent />
//   </React.StrictMode>
// );

// ------------------------------------------- Using Bootstrap
// Application / Global CSS

// npm i bootstrap bootstrap-icons

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap';

import HelloComponent from './components/1_hello/HelloComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelloComponent />
  </React.StrictMode>
);