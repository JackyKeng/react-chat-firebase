import React from 'react'
import Agent from './agent/Agent'
import './App.css'
import Client from './client/Client'
import 'firebase/auth'
import 'firebase/firestore'
import { Link, Route, BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
      <React.Fragment>
        <ul>
          <li>
            <Link to="/">iCllean Customer</Link>
          </li>
          <li>
            <Link to="/agent">iCllean Support</Link>
          </li>
        </ul>
        <hr />
        <Route exact path="/" component={Client} />
        <Route path="/agent" component={Agent} />
      </React.Fragment>
    </Router>
  )
}

export default App
