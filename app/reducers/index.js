// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import commit from './commit/Commit';

const rootReducer = combineReducers({
<<<<<<< HEAD
  commit,
  router,
=======
  counter,
  router
>>>>>>> 2c37e738fd45fd4826256fa62e7876fefe9e36b1
});

export default rootReducer;
