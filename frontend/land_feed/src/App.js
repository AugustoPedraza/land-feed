import React, { Component } from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
// import gql from "graphql-tag";

import ExchangeRates from './ExchangeRates';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {

  const client = new ApolloClient({
    uri: "https://w5xlvm3vzz.lp.gql.zone/graphql"
  });
// client
//   .query({
//     query: gql`
//       {
//         rates(currency: "USD") {
//           currency
//         }
//       }
//     `
//   })
//   .then(result => console.log(result));

    return (
      <ApolloProvider client={client}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to My React</h1>
          </header>
          <ExchangeRates />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
