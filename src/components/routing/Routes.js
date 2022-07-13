import React from 'react'
import { Route, Switch } from 'react-router-dom'
import About from '../layout/About'
import Contact from '../layout/Contact'
import Portfolio from '../layout/Portfolio'
import Particle from '../layout/Particle'

const Routes = () => {
  return (
    <section>
      <Particle />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </section>
  )
}

export default Routes