import React from 'react'
import { useInputValue } from './../../hooks/useInputValue'
import { Form, Input, Button, Title, Layout } from './styles'

export const UserForm = ({ disabled, onSubmit, title }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({ email: email.value, password: password.value })
  }

  return (
    <Layout>
      <Title>{title}</Title>
      <Form onSubmit={handleSubmit}>
        <Input disabled={disabled} placeholder='Email' {...email} />
        <Input disabled={disabled} placeholder='Password' type='password' {...password} />
        <Button disabled={disabled}>{title}</Button>
      </Form>
    </Layout>
  )
}
