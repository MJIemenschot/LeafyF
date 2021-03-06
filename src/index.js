import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import AuthContextProvider from "./context/AuthContext";


ReactDOM.render(
  <React.StrictMode>

      <Router >
          <AuthContextProvider>
              {/*<ItemProvider>*/}
                <App />
              {/*</ItemProvider>*/}
          </AuthContextProvider>
      </Router>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
