const HtmlWebpackPlugin = require('html-webpack-plugin');

// Constants
const {
  BUILD_DIRECTORY,
  SOURCE_DIRECTORY,
} = require('../constans');

module.exports = () => {

  return {
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
    ],
  };
};
