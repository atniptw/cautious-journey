// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import commit from './commit';

const rootReducer = combineReducers({
  commit,
  router,
});

export default rootReducer;
