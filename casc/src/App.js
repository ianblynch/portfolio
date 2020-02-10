import React, { Component } from 'react'
import { Route, NavLink, HashRouter } from 'react-router-dom'
import 'jquery'
import 'popper.js'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import './App.scss'
import { ArticleFilter } from './containers/ArticleFilter'
import { Faq } from './components/Faq'
import { faqData } from './data/faqData'
import { SubmitDisplayer } from './components/SubmitDisplayer'

const Header = () => {
  return (
    <header>
      <div className='header-inner-wrapper'>
        <h1 className='text-center'>
          Cincinnati Adapted Sports Connection
        </h1>
        <p id='purpose'>
          All your adapted sports in one place!
        </p>
      </div>
      <HashRouter>
        <div>
          <ul className='nav-links'>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/faq'>FAQ</NavLink>
            </li>
            <li>
              <NavLink to='/submit'>Submit</NavLink>
            </li>
          </ul>
        </div>
      </HashRouter>
    </header>
  )
}

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer>
      Greater Cincinnati Adapted Sports Club &#169; {year} All rights reserved
    </footer>
  )
}

const FaqDisplayer = () => {
  return (
    <Faq data={faqData} />
  )
}


const AppRouter = () => {
  return (
    <HashRouter basename='/'>
      <div>
        <Route exact path='/' component={ArticleFilter} />
        <Route path='/faq' component={FaqDisplayer} />
        <Route path='/submit' component={SubmitDisplayer} />
      </div>
    </HashRouter>
  )
}

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <AppRouter />
        <Footer />
      </div>
    );
  }
}

export default App;

