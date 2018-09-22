// @flow
export const ADD_COMMIT = 'ADD_COMMIT';

export function addCommit(commit) {
  return { 
    ...commit, 
    type: ADD_COMMIT 
  };
}
