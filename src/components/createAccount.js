import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import { UserContext } from './UserContext'
import { useContext } from 'react'

function CreateAccount() {
  const [show, setShow] = React.useState(true)
  const [status, setStatus] = React.useState('')
  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const ctx = React.useContext(UserContext)
  // ctx.users.push(...firstName);

  function validate(field, label) {
    if (!field) {
      setStatus('Error: ' + label)
      setTimeout(() => setStatus(''), 3000)
      return false
    }
    return true
  }

  function handleCreate() {
    console.log(firstName, lastName, email, password)
    if (!validate(firstName, 'firstName')) return
    if (!validate(lastName, 'lastName')) return
    if (!validate(email, 'email')) return
    if (!validate(password, 'password')) return
    // ctx.users.push({firstName,lastName,email,password,balance:100});
    setShow(false)
  }

  function clearForm() {
    setFirstName('')
    setLastName('')
    setEmail('')
    setPassword('')
    setShow(true)
  }

  const header = 'Create Account'

  return (
    <Card
      bg='secondary'
      text='white'
      className='mb-2'
      style={{ width: '28rem' }}
    >
      <Card.Header>{header}</Card.Header>
      <Card.Body>
        {show ? (
          <>
            {status}
            First Name
            <br />
            <input
              type='input'
              className='form-control'
              id='name'
              placeholder='Enter name'
              value={firstName}
              onChange={e => setFirstName(e.currentTarget.value)}
            />
            <br />
            Last Name
            <br />
            <input
              type='input'
              className='form-control'
              id='name'
              placeholder='Enter name'
              value={lastName}
              onChange={e => setLastName(e.currentTarget.value)}
            />
            <br />
            Email address
            <br />
            <input
              type='input'
              className='form-control'
              id='email'
              placeholder='Enter email'
              value={email}
              onChange={e => setEmail(e.currentTarget.value)}
            />
            <br />
            Password
            <br />
            <input
              type='input'
              className='form-control'
              id='password'
              placeholder='Enter password'
              value={password}
              onChange={e => setPassword(e.currentTarget.value)}
            />
            <br />
            <button
              type='submit'
              className='btn btn-light'
              onClick={handleCreate}
            >
              Create Account
            </button>
          </>
        ) : (
          <>
            <h5>Success</h5>
            <button type='submit' className='btn btn-light' onClick={clearForm}>
              Add another account
            </button>
          </>
        )}{' '}
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h6> Already have an account?</h6>{' '}
        <Link to='/login' class='btn btn-primary'>
          LOGIN Here!
        </Link>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Link to='/home' class='btn btn-tertiary'>
          Back to HOME
        </Link>
      </Card.Body>
      {JSON.stringify(ctx)}
    </Card>
  )
}

export default CreateAccount
