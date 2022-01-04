import React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import * as ReactBootstrap from 'react-bootstrap';
import './App.css';
import logo from './bank-logo.jpg';
import userContext from './contextProject';


function Home(){
    const { Card, Button } = ReactBootstrap;
    const header = "BadBank Landing Module";
    const title = "Welcome to the bank";
    const text = "You can move around using the navigation bar."
    const ctx = React.useContext(userContext);

    return (
      <div className="card text-center" id="landing">
        <div className="card-header" id="title">
          <h5 className="card-title">Welcome to BadBank!</h5>
          {JSON.stringify(ctx)}
        </div>
        <div className="card-body">
          <p className="card-text" id="bodytxt">BadBank is here to serve your financial needs. If you would prefer speaking with a live representative, call 1 (800) XXX - XXXX. 
          Hours of Operation: Monday - Friday, 8AM - 5pm EST</p>
          <img src={logo} style={{padding: '10px'}}></img>
          <Link to="/CreateAccount" class="btn btn-primary">Get Started!</Link>
        </div>
        <div className="card-footer text-muted">
          @2021 BadBank 
        </div>
    </div>
    );  
  };

  export default Home;