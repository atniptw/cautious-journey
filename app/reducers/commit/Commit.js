// @flow
import { combineReducers } from 'redux';
import { ADD_COMMIT } from '../../actions/commit';

function commits(state: commit = {}, action) {
  switch (action.type) {
    case ADD_COMMIT:
      const id = action.hash;
      return {
        ...state,
        [action.hash]: {
          userName: action.userName,
          date: action.date,
          files: action.files
        }
      };
    default:
      return state;
  }
}

const commitReducers = combineReducers({
  commits
})

export default commitReducers;
