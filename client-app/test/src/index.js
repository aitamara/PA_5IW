import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './tests/reportWebVitals';

import App from './components/App';
import './assets/css/index.css';

const root = ReactDOM.createRoot(document.querySelector('main'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();