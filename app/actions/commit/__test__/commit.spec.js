import * as actions from '../Commit';

describe('addCommit action', () => {
  it('should create commit action', () => {
    const commit = {
      hash: 'b1869772-b2b2-4a6b-8a92-d08c2efed3c2',
      userName: 'Test User',
      date: '2018-02-14T21:00:42-05:00',
      files: ['example/file/path/file.txt']
    };

    const expectedAction = {
      ...commit,
      type: actions.ADD_COMMIT
    };

    expect(actions.addCommit(commit)).toEqual(expectedAction);
  });
});
