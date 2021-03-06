
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./index.css";
import reportWebVitals from './reportWebVitals';
import { StyledEngineProvider } from "@mui/material/styles";
import Login from './Login';
import CApp from "./comments/commentApp"; //for comment test


ReactDOM.render(
    <React.StrictMode>
      <App />
      </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
