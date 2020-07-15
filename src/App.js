/* eslint-disable react/jsx-closing-tag-location */
import React from 'react'
import { ListOfCategories } from './components/listOfCategories'
import { GlobalStyle } from './styles/globalStyles'
import { ListOfPhotoCards } from './components/listOfPhotoCards'
import { Logo } from './components/logo'
import { PhotoCardWithQuery } from './container/PhotoCardWithQuery'

export const App = () => {
  const urlPararms = new window.URLSearchParams(window.location.search)
  const detailId = urlPararms.get('detail')

  return (
    <div>
      <Logo />
      <GlobalStyle />
      {
        detailId
          ? <PhotoCardWithQuery id={detailId} />
          : <>
            <ListOfCategories />
            <ListOfPhotoCards categoryId={2} />
          </>
      }
    </div>
  )
}
