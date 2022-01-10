import React from 'react'
import { HashRouter, Route, Link } from 'react-router-dom'
import * as ReactBootstrap from 'react-bootstrap'
import logo from './bank-logo.jpg'
import { UserContext } from './UserContext'
import Balance from './balance'

const ATMWithdraw = ({ onChange, isWithdraw, isValid }) => {
  const choice = ['Withdraw']
  console.log(`ATM isWithdraw: ${isWithdraw}`)
  return (
    <label className='label huge'>
      <h3> {choice[Number(!isWithdraw)]}</h3>
      <input
        id='number-input'
        type='number'
        width='200'
        onChange={onChange}
      ></input>
      <input
        type='submit'
        disabled={!isValid}
        width='200'
        value='Submit'
        id='submit-input'
      ></input>
    </label>
  )
}

const Account = () => {
  // let deposit = 0; // state of this transaction
  const [withdraw, setWithdraw] = React.useState(0)
  const [totalState, setTotalState] = React.useState(0)
  const [isWithdraw, setIsWithdraw] = React.useState(true)
  const [atmMode, setAtmMode] = React.useState('')
  const [validTransaction, setValidTransaction] = React.useState(false)

  let status = `Account Balance $ ${totalState} `
  console.log(`Account Rendered with isWithdraw: ${isWithdraw}`)
  const handleChange = event => {
    console.log(Number(event.target.value))
    if (Number(event.target.value) <= 0) {
      return setValidTransaction(false)
    }
    // if (atmMode === 'Cash Back' && Number(event.target.value) > totalState) {
    //   setValidTransaction(false);
    // }
    else {
      setValidTransaction(true)
    }
    setWithdraw(Number(event.target.value))
  }
  const handleSubmit = event => {
    let newTotal = isWithdraw ? totalState - withdraw : totalState
    setTotalState(newTotal)
    setValidTransaction(false)
    event.preventDefault()
  }

  const handleModeSelect = event => {
    console.log(event.target.value)
    setAtmMode(event.target.value)
    setValidTransaction(false)
    if (event.target.value === 'Withdraw') {
      setIsWithdraw(true)
    } else {
      setIsWithdraw(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <>
        <h2 id='total'>{status}</h2>
        <label>Select an action below to continue</label>
        <select
          onChange={e => handleModeSelect(e)}
          name='mode'
          id='mode-select'
        >
          <option id='no-selection' value=''></option>
          <option id='withdraw-selection' value='Withdraw'>
            Withdraw
          </option>
          {/* <option id="cashback-selection" value="Cash Back">
            Cash Back
          </option> */}
        </select>
        {atmMode && (
          <ATMWithdraw
            onChange={handleChange}
            isWithdraw={isWithdraw}
            isValid={validTransaction}
          ></ATMWithdraw>
        )}
      </>
    </form>
  )
}

export default Account
// ========================================
// ReactDOM.render(<Account />, document.getElementById('root'));

// function Withdraw(){
//     return (
//       <h1>Withdraw</h1>
//     )
//   }

// export default Withdraw;
