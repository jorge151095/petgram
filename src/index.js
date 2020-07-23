import React from 'react'
import ReactDom from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import { App } from './app'
import Context from './context'

const client = new ApolloClient({
  uri: 'https://petgram-api-jorge.jorge151095.vercel.app/graphql'
})

ReactDom.render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>,
  document.getElementById('app')
)
