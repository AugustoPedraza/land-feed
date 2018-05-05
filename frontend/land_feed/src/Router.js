import React from 'react';
import {
  BrowserRouter,
  Route,
  Redirect,
  // Link
} from 'react-router-dom'

import MainMenu from './routes/MainMenu';

const Router = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/feed" component={MainMenu}/>
      <Route exact path="/" render={() => ( <Redirect to="/feed"/> )} />
    </div>
  </BrowserRouter>
);

export default Router;

