// Core
const { HotModuleReplacementPlugin } = require('webpack');
const { merge } = require('webpack-merge');

// Configurations
const getCommonConfig = require('./webpack.common');

// Modules
import * as modules from '../modules';

module.exports = () => {
  return merge(
    getCommonConfig.default(),
    {
      mode: 'development',
      // devtool: false,
      devtool: 'cheap-module-source-map',
      entry: [ 'webpack-hot-middleware/client?reload=true&quiet=true' ],
      plugins: [
        new HotModuleReplacementPlugin(),
      ],
    },
    modules.loadDevCss(),
  );
};
