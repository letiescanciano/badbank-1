import React, { useState} from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Link} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

// import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import NavBar from './navBar';
import Home from './home';
import CreateAccount from './createAccount';
import Login from './login';
import AllData from './alldata';
import reportWebVitals from './reportWebVitals';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
