import React from 'react';
import {
  BrowserRouter,
  Route,
  Redirect,
  // Link
} from 'react-router-dom'

import FeedContainer from './FeedContainer';
import SetupContainer from './SetupContainer';

const Router = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/feed" component={FeedContainer}/>
      <Route exact path="/setup" component={SetupContainer}/>
      <Route exact path="/" render={() => ( <Redirect to="/feed"/> )} />
    </div>
  </BrowserRouter>
);

export default Router;

