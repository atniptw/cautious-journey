// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import commit from './commit/Commit';

const rootReducer = combineReducers({
<<<<<<< HEAD
<<<<<<< HEAD
  commit,
  router,
=======
  counter,
  router
>>>>>>> 2c37e738fd45fd4826256fa62e7876fefe9e36b1
=======
  commit,
  router,
>>>>>>> db0a6acf3856de7877faa4d05ed11fae9dce6d26
});

export default rootReducer;
