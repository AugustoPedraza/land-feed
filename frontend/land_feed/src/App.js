import React, { Component } from 'react';
import Router from './Router';
// import ApolloClient from "apollo-boost";
// import { ApolloProvider } from "react-apollo";

import MainContainer from './MainContainer';
// import Dogs from './Dogs';
// import DogPhoto from './DogPhoto';

// import logo from './logo.svg';
// import './App.css';

// const client = new ApolloClient({
//   uri: `https://nx9zvp49q7.lp.gql.zone/graphql`
// });

class App extends Component {
  // state = { selectedDog: null };

  // onDogSelected = ({ target }) => {
  //   this.setState(() => ({ selectedDog: target.value }));
  // };

  render() {
    return (
      <div>
        <Router />
        <MainContainer />
      </div>
    );
    //   <ApolloProvider client={client}>
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
    //   </ApolloProvider>
    // );
  }
}

export default App;
