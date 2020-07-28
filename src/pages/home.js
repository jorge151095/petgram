import React from 'react'
import { ListOfPhotoCards } from '../components/listOfPhotoCards'
import { ListOfCategories } from '../components/listOfCategories'
import { Helmet } from 'react-helmet'

const HomePage = ({ categoryId }) => {
  return (
    <>
      <Helmet>
        <title>
          Petgram - Pets' photos App
        </title>
        <meta name='description' content='With
        petgram you can find beautiful pets photos'/>
      </Helmet>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={categoryId} />
    </>
  )
}

export const Home = React.memo(HomePage, (prevProps, props) => {
  return prevProps.categoryId === props.categoryId
})
