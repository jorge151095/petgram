/* eslint-disable react/jsx-closing-tag-location */
import React from 'react'
import Context from '../context'
import { UserForm } from '../components/userForm'
import { RegisterMutation } from './../container/registerMutation'
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

export const NotRegisteredUser = () => (
  <Context.Consumer>
    {
      ({ activateAuth }) => {
        return <>
          <RegisterMutation>
            {
              (register, { data, loading, error }) => {
                const onSubmit = ({ email, password }) => {
                  const input = { email, password }
                  const variables = { input }
                  register({ variables }).then(
                    activateAuth
                  )
                }
                error && notify('Error: User already exists')
                return <>
                  <ToastContainer />
                  <UserForm disabled={loading} title='Sign up' onSubmit={onSubmit} />
                </>
              }
            }
          </RegisterMutation>
          <UserForm title='Sign in' onSubmit={activateAuth} />
        </>
      }
    }
  </Context.Consumer>
)
