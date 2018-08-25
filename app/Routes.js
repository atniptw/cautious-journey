/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes.json';
import App from './containers/App';
import HomePage from './containers/HomePage';
import LandingPage from './containers/LandingPage';

export default () => (
  <App>
    <Switch>
<<<<<<< HEAD:app/routes.js
      <Route path="/landingPage" component={LandingPage} />
      <Route path="/" component={HomePage} />
=======
      <Route path={routes.COUNTER} component={CounterPage} />
      <Route path={routes.HOME} component={HomePage} />
>>>>>>> 2c37e738fd45fd4826256fa62e7876fefe9e36b1:app/Routes.js
    </Switch>
  </App>
);
