import React from 'react'
import { HashRouter, Route, Link } from 'react-router-dom'
import * as ReactBootstrap from 'react-bootstrap'
import { UserContext } from './UserContext'
import { useContext } from 'react'

function AllData() {
  const ctx = React.useContext(UserContext)

  return (
    <>
      <h1>All Data</h1>
      {JSON.stringify(ctx)}
    </>
  )
}

export default AllData
