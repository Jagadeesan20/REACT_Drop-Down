import React from 'react'
import { BrowserRouter,Switch,Route } from 'react-router-dom'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route to='/' component={NavBar}></Route>
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App

