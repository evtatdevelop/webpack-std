// Core
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { merge } = require('webpack-merge');

// Constats
const { PROJECT_ROOT, BUILD_DIRECTORY } = require('../constans');

// Configurations
const getCommonConfig = require('./webpack.common');

// Modules
import * as modules from '../modules';


const cleanOptions = {
  verbose: true,
  root: PROJECT_ROOT,
};

module.exports = () => {

  return merge(
    getCommonConfig.default(),
    {
      mode: 'none',
      devtool: false,
      plugins: [
        new CleanWebpackPlugin(cleanOptions),
        // new CleanWebpackPlugin([ BUILD_DIRECTORY ], cleanOptions),
      ],
    },
    modules.loadProdCss(),
  );
};
