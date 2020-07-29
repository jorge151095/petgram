/* eslint-disable react/jsx-closing-tag-location */
import React, { useContext, Suspense } from 'react'
import { Router, Redirect } from '@reach/router'
import { GlobalStyle } from './styles/globalStyles'
import { Logo } from './components/logo'
import { Home } from './pages/home'
import { Detail } from './pages/detail'
import { NavBar } from './components/navbar'
import { User } from './pages/user/index'
import { NotFound } from './pages/notFound'
import { NotRegisteredUser } from './pages/notRegisteredUser/index'
import { Context } from './context'

const Favs = React.lazy( () => import('./pages/favs/index'))

export const App = () => {
  const { isAuth } = useContext(Context)
  return (
    <Suspense fallback={<div />}>
      <Logo />
      <GlobalStyle />
      <Router>
        <NotFound default />
        <Home path='/' />
        <Home path='/pet/:categoryId' />
        <Detail path='/detail/:detailId' />
        { !isAuth && <NotRegisteredUser path='/login'/>}
        { !isAuth && <Redirect noThrow from='/favs' to='/login' />}
        { !isAuth && <Redirect noThrow from='/user' to='/login' />}
        { isAuth && <Redirect noThrow from='/login' to='/' />}
        <Favs path='/favs' />
        <User path='/user' />
      </Router>
      <NavBar />
    </Suspense>
  )
}
