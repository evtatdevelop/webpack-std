// const path = require('path');

// Дополнительные настройки на клиенте для hotreloading (РАБОТАЕТ БЕЗ НИХ)
// const { HotModuleReplacementPlugin } = require('webpack');

// const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { merge } = require('webpack-merge');

// Configurations
const getCommonConfig = require('./webpack.common');

const {
  // BUILD_DIRECTORY,
  // SOURCE_DIRECTORY,
  PROJECT_ROOT
} = require('../constans');

const cleanOptions = {
  verbose: true,
  root: PROJECT_ROOT,
};
// const entry = SOURCE_DIRECTORY;
// const entry = [
//   // 'webpack-hot-middleware/client?reload=true&quiet=true', // Дополнительные настройки на клиенте для hotreloading (РАБОТАЕТ БЕЗ НИХ)
//   SOURCE_DIRECTORY,
// ];
// const output = {
//   filename: 'bundle.js',
//   path: BUILD_DIRECTORY,
// }

module.exports = () => {

  return merge(getCommonConfig(), {
    mode: 'none',
    devtool: false,
    // entry: entry,
    // output: output,
    // module: {
    //   rules: [
    //     {
    //       test: /\.css$/,
    //       use: [ 'style-loader', 'css-loader' ],
    //     },
    //   ],
    // },
    plugins: [
      // new HtmlWebpackPlugin({
      //   template: './static/template.html',
      //   title: 'Learning WebPack!👀!',
      //   favicon: './static/favicon.ico',
      // }),
      new CleanWebpackPlugin(cleanOptions),

      // new HotModuleReplacementPlugin(), // Дополнительные настройки на клиенте для hotreloading (РАБОТАЕТ БЕЗ НИХ)
    ],
  });
};
