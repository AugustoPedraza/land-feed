import React, { Component } from 'react';
import Router from './Router';
import {ApolloClient} from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import MainContainer from './MainContainer';
// import Dogs from './Dogs';
// import DogPhoto from './DogPhoto';

// import logo from './logo.svg';
// import './App.css';
//

const client = new ApolloClient({
  link: new HttpLink({ uri: process.env.REACT_APP_GQL_URI }),
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
});

class App extends Component {
  // state = { selectedDog: null };

  // onDogSelected = ({ target }) => {
  //   this.setState(() => ({ selectedDog: target.value }));
  // };

  render() {
    return (
      <ApolloProvider client={client}>
        <div>
          <Router />
          <MainContainer />
        </div>
      </ApolloProvider>
    );
    //     <div className="App">
    //       <header className="App-header">
    //         <img src={logo} className="App-logo" alt="logo" />
    //         <h1 className="App-title">Welcome to My React</h1>
    //       </header>
		  // {this.state.selectedDog && (
		    // <DogPhoto breed={this.state.selectedDog} />
		  // )}
    //       <Dogs onDogSelected={this.onDogSelected} />
    //     </div>
    // );
  }
}

export default App;
