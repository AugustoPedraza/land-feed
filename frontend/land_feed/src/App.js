import React, { Component } from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
// import gql from "graphql-tag";

import Dogs from './Dogs';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {

  const client = new ApolloClient({
    uri: `https://nx9zvp49q7.lp.gql.zone/graphql`
  });

    return (
      <ApolloProvider client={client}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to My React</h1>
          </header>
          <Dogs />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
