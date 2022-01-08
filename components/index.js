import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Link} from 'react-router-dom';
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserContext from './contextProject';

import './index.css';
import NavBar from './navBar';
import Home from './home';
import CreateAccount from './createAccount';
import Login from './login';
import AllData from './alldata';
import reportWebVitals from './reportWebVitals';
import Balance from './balance';
import Withdraw from './withdraw';
import Deposit from './deposit';


function Spa() {
  const UserContext = React.createContext(null);
  return (
    <HashRouter>
      <NavBar/>
      <UserContext.Provider value={{users:[{name:'abel',email:'abel@mit.edu',password:'secret',balance:100}]}}>
        <div className="container" style={{padding: "20px"}}>
          <Route path="/" exact component={Home} />
          <Route path="/home/" exact component={Home} />
          <Route path="/createAccount/" component={CreateAccount} />
          <Route path="/login/" component={Login} />
          <Route path="/deposit/" component={Deposit} />
          <Route path="/withdraw/" component={Withdraw} />
          <Route path="/balance/" component={Balance} />
          <Route path="/alldata/" component={AllData} />
        </div>
      </UserContext.Provider>      
    </HashRouter>
  );
}

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
