/* eslint-disable react/jsx-closing-tag-location */
import React from 'react'
import { Router } from '@reach/router'
import { GlobalStyle } from './styles/globalStyles'
import { Logo } from './components/logo'
import { Home } from './pages/home'
import { Detail } from './pages/detail'
import { NavBar } from './components/navbar'
import { Favs } from './pages/favs/index'
import { User } from './pages/user/index'
import { NotRegisteredUser } from './pages/notRegisteredUser'
import Context from './context'

export const App = () => {
  return (
    <div>
      <Logo />
      <GlobalStyle />
      <Router>
        <Home path='/' />
        <Home path='/pet/:categoryId' />
        <Detail path='/detail/:detailId' />
      </Router>
      <Context.Consumer>
        {
          ({ isAuth }) =>
            isAuth
              ? <Router>
                <Favs path='/favs' />
                <User path='/user' />
              </Router>
              : <Router>
                <NotRegisteredUser path='/favs' />
                <NotRegisteredUser path='/user' />
              </Router>
        }
      </Context.Consumer>
      <NavBar />
    </div>
  )
}
