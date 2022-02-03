import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// react renvoie le return de app.js en id="root"
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
