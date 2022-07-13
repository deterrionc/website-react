import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Routes from './components/routing/Routes'
import Landing from './components/layout/Landing'
import './App.css'

function App() {
  return (
    <Router>
      <Fragment>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route component={Routes} />
        </Switch>
      </Fragment>
    </Router>
  )
}

export default App
