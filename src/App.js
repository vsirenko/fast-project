import React from 'react'
import { Route, Router } from 'react-router-dom'
import Header from './components/Header'
import Basket from './components/pages/Basket'
import Main from './components/pages/Main'
import './index.scss'

function App() {
  return (
    <div className='app'>
      <Header />
      <div className="wr">
          <Route exact path='/'>
              <Main />
          </Route>
          <Route exact path='/basket'>
            <Basket />
          </Route>
      </div>
    </div>
  )
}

export default App
