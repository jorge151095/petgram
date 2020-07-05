import React from 'react'
import { ListOfCategories } from './components/listOfCategories'
import { GlobalStyle } from './styles/globalStyles'
import { ListOfPhotoCards } from './components/listOfPhotoCards'
import { Logo } from './components/logo'

export const App = () => (
  <div>
    <Logo />
    <GlobalStyle />
    <ListOfCategories />
    <ListOfPhotoCards />
  </div>
)
