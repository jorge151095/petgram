import React from 'react'
import { PhotoCard } from './../photoCard/index'

import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

const GET_PHOTOS = gql`
  query getPhotos($categoryId: ID!) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

export const ListOfPhotoCards = ({ categoryId }) => {
  const { loading, data = { photos: [] } } = useQuery(GET_PHOTOS, { variables: { categoryId } })
  if (loading) return ''
  return (
    <ul>
      {data.photos.map(photo => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </ul>
  )
}
