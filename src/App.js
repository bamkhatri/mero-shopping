import React from 'react'
import './App.css'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Cart from './components/Cart/Cart'

function App() {
  return (
    <>
      <Router>
        <ToastContainer />
        <Header />
        <Switch>
          <Route path='/cart'>
            <Cart />
          </Route>
          <Route path='/' exact>
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
