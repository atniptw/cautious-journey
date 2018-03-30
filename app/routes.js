/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import LandingPage from './containers/LandingPage';

export default () => (
  <App>
    <Switch>
      <Route path="/landingPage" component={LandingPage} />
      <Route path="/" component={HomePage} />
    </Switch>
  </App>
);
