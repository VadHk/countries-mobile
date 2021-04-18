/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import Home from './src';
import {name as appName} from './app.json';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import server from './src/config/server_config';

// Initialize Apollo Client
const client = new ApolloClient({
    uri: server.url,
    cache: new InMemoryCache()
});

const App = () => (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  );

AppRegistry.registerComponent(appName, () => App);
