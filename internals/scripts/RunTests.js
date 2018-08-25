import spawn from 'cross-spawn';
import path from 'path';

<<<<<<< HEAD
<<<<<<< HEAD
const pattern = process.argv[2] === 'e2e'
  ? 'test/e2e/.+\\.spec\\.js'
  : '__test__/(?!e2e/)[^/]+.+\\.spec\\.js$';
=======
const pattern =
  process.argv[2] === 'e2e'
    ? 'test/e2e/.+\\.spec\\.js'
    : 'test/(?!e2e/)[^/]+/.+\\.spec\\.js$';
>>>>>>> 2c37e738fd45fd4826256fa62e7876fefe9e36b1
=======
const pattern = process.argv[2] === 'e2e'
  ? 'test/e2e/.+\\.spec\\.js'
  : '__test__/(?!e2e/)[^/]+.+\\.spec\\.js$';
>>>>>>> db0a6acf3856de7877faa4d05ed11fae9dce6d26

const result = spawn.sync(
  path.normalize('./node_modules/.bin/jest'),
  [pattern, ...process.argv.slice(2)],
  { stdio: 'inherit' }
);

process.exit(result.status);
