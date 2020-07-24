/* eslint-disable react/jsx-closing-tag-location */
import React, { useContext } from 'react'
import { Context } from '../context'
import { UserForm } from '../components/userForm'
import { RegisterMutation } from './../container/registerMutation'
import { LoginMutation } from './../container/LoginMutation'
import { ToastContainer, toast } from 'react-toastify'

const notify = (msj) => toast.error(msj, {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined
})

export const NotRegisteredUser = () => {
  const { activateAuth } = useContext(Context)
  return <>
    <RegisterMutation>
      {
        (register, { data, loading, error }) => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password }
            const variables = { input }
            register({ variables }).then( ({data}) => {
              const { signup } = data 
              return activateAuth(signup)
            })
          }
          error && notify('Error: User already exists')
          return <>
            <ToastContainer />
            <UserForm disabled={loading} title='Sign up' onSubmit={onSubmit} />
          </>
        }
      }
    </RegisterMutation>
    <LoginMutation>
      {
        (login, {data, loading, error}) => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password }
            const variables = { input }
            login({ variables }).then( ({data}) => {
              const { login } = data 
              return activateAuth(login)
            })
          }
          error && notify('Error: Password incorrect')
          return <>
            <ToastContainer />
            <UserForm disabled={loading} title='Sign in' onSubmit={onSubmit} />
          </>
        }
      }
    </LoginMutation>
  </>
}
