/* eslint-disable react/jsx-closing-tag-location */
import React from 'react'
import { Router } from '@reach/router'
import { GlobalStyle } from './styles/globalStyles'
import { Logo } from './components/logo'
import { Home } from './pages/Home'
import { Detail } from './pages/detail'

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
    </div>
  )
}
