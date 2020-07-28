import React, { useContext } from 'react'
import { Context } from '../../context'
import { SubmitButton } from '../../components/submitButton'
import { Layout, Title } from './styles'

export const User = () => {
  const { removeAuth } = useContext(Context)
  return <Layout>
    <Title>User</Title>
    <SubmitButton onClick={removeAuth}> Logout</SubmitButton>
  </Layout>
}
