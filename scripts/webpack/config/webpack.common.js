// const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin')
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');


// Constants
const {
  BUILD_DIRECTORY,
  SOURCE_DIRECTORY,
  // PROJECT_ROOT
} = require('../constans');

// const cleanOptions = {
//   verbose: true,
//   root: PROJECT_ROOT,
// };
// const entry = SOURCE_DIRECTORY;
// const entry = [ SOURCE_DIRECTORY ];
// const output = {
//   filename: 'bundle.js',
//   path: BUILD_DIRECTORY,
// }


// const delay = (timeout = 1000) =>
//   new Promise(resolve => setTimeout(resolve,timeout));

// module.exports = async () => {
//   //  пауза 1000 ms
//   await delay();
module.exports = () => {

  return {
    // mode: 'none',
    // devtool: false,
    entry: [ SOURCE_DIRECTORY ],
    output: {
      path: BUILD_DIRECTORY,
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          // TODO: Upgrade style loading
          test: /\.css$/,
          use: [ 'style-loader', 'css-loader' ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './static/template.html',
        title: 'Learning WebPack!👀!',
        favicon: './static/favicon.ico',
      }),
      // new CleanWebpackPlugin(cleanOptions),

      // new HotModuleReplacementPlugin(), // Дополнительные настройки на клиенте для hotreloading (РАБОТАЕТ БЕЗ НИХ)
    ],
  };
};
