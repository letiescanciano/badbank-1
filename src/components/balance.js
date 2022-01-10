import React from 'react'
import { HashRouter, Route, Link } from 'react-router-dom'
// import * as ReactBootstrap from 'react-bootstrap';
import logo from './bank-logo.jpg'
import { UserContext } from './UserContext'
// import { useContext } from 'react';
import ATMWithdraw from './withdraw'
import Deposit from './deposit'

// function Balance(){
// const [totalState, setTotalState] = React.useState(0);
// const [totalAmount, setTotalAmount] = React.useState(0);
// let status = 'zero';
//     const ctx = React.useContext(UserContext);

const Balance = () => {
  const ctx = React.useContext(UserContext)
  console.log('Balance ctx', ctx)

  const user = ctx.users.find(user => user.email === 'abel@mit.edu')
  console.log(user)

  return (
    <div>
      <p>Your account balance is ${user.balance}</p>
    </div>
  )
}

export default Balance
