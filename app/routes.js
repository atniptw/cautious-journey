/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CommitPage from './containers/CommitPage';

export default () => (
  <App>
    <Switch>
      <Route path="/commit" component={CommitPage} />
      <Route path="/" component={HomePage} />
    </Switch>
  </App>
);
