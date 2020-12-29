// Core
import merge from 'webpack-merge';

// Configurations
const getCommonConfig = require('./webpack.common');

// Modules
import * as modules from '../modules';

module.exports = () => {
  return merge(
    getCommonConfig.default(),
    {
      mode: 'development',
      devtool: 'cheap-module-source-map',
      entry: [ 'webpack-hot-middleware/client?reload=true&quiet=true' ],
    },
    modules.connectHMR(),
    modules.connectFriendlyErrors(),
    modules.loadDevCss(),
  );
};
