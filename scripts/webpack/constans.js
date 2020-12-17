const path = require('path');
const { path: PROJECT_ROOT } = require('app-root-path');

console.log('-> project', PROJECT_ROOT);

exports.PROJECT_ROOT = PROJECT_ROOT;
exports.SOURCE_DIRECTORY = path.resolve(PROJECT_ROOT, './source');
exports.BUILD_DIRECTORY = path.resolve(PROJECT_ROOT, './build');
