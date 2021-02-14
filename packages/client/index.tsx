import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

import {AppComponent} from './App';

const client = new ApolloClient({
  // @ts-ignore
  uri: import.meta.env.SNOWPACK_PUBLIC_GRAPHQL_URL,
  cache: new InMemoryCache(),
  headers: {
    // @ts-ignore
    'apiKey': import.meta.env.SNOWPACK_PUBLIC_GRAPHQL_API_KEY
  }
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <AppComponent/>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// @ts-ignore
import.meta.hot?.accept();
