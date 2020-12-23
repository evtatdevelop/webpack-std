// Core
const { HotModuleReplacementPlugin } = require('webpack');
const { merge } = require('webpack-merge');

// Configurations
const getCommonConfig = require('./webpack.common');

module.exports = () => {
  return merge(getCommonConfig(), {
    mode: 'development',
    // devtool: false,
    devtool: 'cheap-module-source-map',
    entry: [ 'webpack-hot-middleware/client?reload=true&quiet=true' ],
    plugins: [
      new HotModuleReplacementPlugin(),
    ],
  });
};
