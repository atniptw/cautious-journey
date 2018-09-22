// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import CommitReducers from './commit/Commit';

const rootReducer = combineReducers({
  commitReducers,
  router,
});

export default rootReducer;
