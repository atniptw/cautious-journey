import commit from '../../app/reducers/commit';
import { ADD_COMMIT } from '../../app/actions/commit';

describe('reducers', () => {
  describe('commit', () => {
    it('should handle initial state', () => {
      expect(commit(undefined, {})).toEqual({ commits: {} });
    });

    it('should handle ADD_COMMIT', () => {
      expect(commit({
        'commits': {
          'f14b2b44-151d-11e8-b642-0ed5f89f718b': {
            userName: 'Test User',
            date: '2018-02-14T21:00:42-05:00',
            files: ['example/file/path/file.txt']
          }
        }
      }, {
        type: ADD_COMMIT,
        hash: 'e34650fa-176b-11e8-b642-0ed5f89f718b',
        userName: 'Test User',
        date: '2018-02-15T21:00:42-05:00',
        files: ['example/file/path/file2.txt']
      })).toEqual({'commits': {
          'f14b2b44-151d-11e8-b642-0ed5f89f718b': {
            userName: 'Test User',
            date: '2018-02-14T21:00:42-05:00',
            files: ['example/file/path/file.txt']
          },
          'e34650fa-176b-11e8-b642-0ed5f89f718b': {
            userName: 'Test User',
            date: '2018-02-15T21:00:42-05:00',
            files: ['example/file/path/file2.txt']
          }
        }
      });
    });

    it('should handle unknown action type', () => {
      expect(commit({
        'commits': {
          'f14b2b44-151d-11e8-b642-0ed5f89f718b': {
            userName: 'Test User',
            date: '2018-02-14T21:00:42-05:00',
            files: ['example/file/path/file.txt']
          }
        }
      }, { type: 'unknown' }))
      .toEqual({
        'commits': {
          'f14b2b44-151d-11e8-b642-0ed5f89f718b': {
            userName: 'Test User',
            date: '2018-02-14T21:00:42-05:00',
            files: ['example/file/path/file.txt']
          }
        }
      });
    });
  });
});
