import React from 'react'
import { ListOfPhotoCards } from '../components/listOfPhotoCards'
import { ListOfCategories } from '../components/listOfCategories'

export const Home = ({ categoryId }) => {
  return (
    <>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={categoryId} />
    </>
  )
}
