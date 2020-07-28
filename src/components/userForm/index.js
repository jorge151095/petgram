import React from 'react'
import { useInputValue } from './../../hooks/useInputValue'
import { Form, Input, Title, Layout } from './styles'
import { SubmitButton } from './../submitButton'

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
        <SubmitButton disabled={disabled}>{title}</SubmitButton>
      </Form>
    </Layout>
  )
}
