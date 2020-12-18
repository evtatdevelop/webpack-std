// Дополнительные настройки на клиенте для hotreloading (РАБОТАЕТ БЕЗ НИХ)
// const { HotModuleReplacementPlugin } = require('webpack');

const { merge } = require('webpack-merge');

// Configurations
const getCommonConfig = require('./webpack.common');

module.exports = () => {
  return merge(getCommonConfig(), {
    mode: 'none',
    devtool: false, // TODO: Make source maps
    // entry: [ 'webpack-hot-middleware/client?reload=true&quiet=true' ], // Дополнительные настройки на клиенте для hotreloading (РАБОТАЕТ БЕЗ НИХ)
    // plugins: [
    //   // new HotModuleReplacementPlugin(), // Дополнительные настройки на клиенте для hotreloading (РАБОТАЕТ БЕЗ НИХ)
    // ],
  });
};
