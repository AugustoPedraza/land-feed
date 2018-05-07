import React, { Component } from 'react';
import Router from './Router';
import {ApolloClient} from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { withClientState } from 'apollo-link-state';
import { ApolloLink } from 'apollo-link';

import MainMenu from './routes/MainMenu';
import {defaults} from './resolvers';

const cache = new InMemoryCache();//.restore(window.__APOLLO_STATE__);
const httpLink = new HttpLink({ uri: process.env.REACT_APP_GQL_URI });
const stateLink = withClientState({ defaults, cache });
const link = ApolloLink.from([stateLink, httpLink]);

const client = new ApolloClient({ link, cache });

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div>
          <MainMenu />
          <Router />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
