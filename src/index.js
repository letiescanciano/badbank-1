import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { UserContext } from './components/UserContext'

import NavBar from './components/navBar'
import Home from './components/home'
import CreateAccount from './components/createAccount'
import Login from './components/login'
import AllData from './components/alldata'
import Balance from './components/balance'
import Withdraw from './components/withdraw'
import Deposit from './components/deposit'

function Spa() {
  return (
    <HashRouter>
      <NavBar />
      <UserContext.Provider
        value={{
          users: [
            {
              name: 'abel',
              email: 'abel@mit.edu',
              password: 'secret',
              balance: 600,
            },
          ],
        }}
      >
        <div className='container' style={{ padding: '20px' }}>
          <Route path='/' exact component={Home} />
          <Route path='/home/' exact component={Home} />
          <Route path='/createAccount/' component={CreateAccount} />
          <Route path='/login/' component={Login} />
          <Route path='/deposit/' component={Deposit} />
          <Route path='/withdraw/' component={Withdraw} />
          <Route path='/balance/' component={Balance} />
          <Route path='/alldata/' component={AllData} />
        </div>
      </UserContext.Provider>
    </HashRouter>
  )
}

ReactDOM.render(<Spa />, document.getElementById('root'))

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
