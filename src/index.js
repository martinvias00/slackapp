import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
    <head>
      <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"/>
    </head>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);


reportWebVitals();
