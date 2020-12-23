// const path = require('path');
// const { path: PROJECT_ROOT } = require('app-root-path');

// console.log('-> project', PROJECT_ROOT);

// exports.PROJECT_ROOT = PROJECT_ROOT;
// exports.SOURCE_DIRECTORY = path.resolve(PROJECT_ROOT, './source');
// exports.BUILD_DIRECTORY = path.resolve(PROJECT_ROOT, './build');
// exports.HOST = 'localhost';
// exports.PORT = 3000;

import { resolve } from 'path';
import { path as PROJECT_ROOT } from 'app-root-path';

export { PROJECT_ROOT };
export const SOURCE_DIRECTORY = resolve(PROJECT_ROOT, './source');
export const BUILD_DIRECTORY = resolve(PROJECT_ROOT, './build');
export const HOST = 'localhost';
export const PORT = 3000;
