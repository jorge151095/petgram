import React from 'react'
import { FavsWithQuery } from '../../container/getFavorites'
import { Layout, Title } from './styles'

export const Favs = () => (
  <Layout>
    <Title>Favs</Title>
    <FavsWithQuery />
  </Layout>
)
