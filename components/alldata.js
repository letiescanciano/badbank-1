import React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import * as ReactBootstrap from 'react-bootstrap';
import './App.css';
import userContext from './contextProject';
import { useContext } from 'react';


function AllData(){
    const ctx = React.useContext(userContext);

    return (
      <>
      <h1>All Data</h1>
      {JSON.stringify(ctx)}
      </>
    );
  }

export default AllData;