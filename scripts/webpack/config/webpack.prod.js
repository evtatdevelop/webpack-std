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
      mode: 'none',
      // mode: 'production',  // NODE_ENV = 'production'
      devtool: false,
    },
    modules.cleanDirectories(),
    modules.connectBuildProgressIndicator(),
    modules.loadProdCss(),
    modules.optimizeBuild(),
    // modules.optimizeImages(),
    modules.conectBundleAnalyzer(),
  );
};
