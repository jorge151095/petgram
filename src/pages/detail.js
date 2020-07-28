import React from 'react'
import { PhotoCardWithQuery } from '../container/PhotoCardWithQuery'
import { Layout } from './../components/layout'

export const Detail = ({ detailId }) => (
  <Layout title={`Photograph ${detailId}`}>
    <PhotoCardWithQuery id={detailId} />
  </Layout> 
)
