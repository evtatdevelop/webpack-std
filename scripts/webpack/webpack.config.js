// const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BUILD_DIRECTORY, SOURCE_DIRECTORY, PROJECT_ROOT } = require('./constans');

// const delay = (timeout = 1000) =>
//   new Promise(resolve => setTimeout(resolve,timeout));


const cleanOptions = {
  verbose: true,
  root: PROJECT_ROOT,
};
const entry = SOURCE_DIRECTORY;
const output = {
  filename: 'bundle.js',
  path: BUILD_DIRECTORY,
}



// module.exports = async () => {
//   //  пауза 1000 ms
//   await delay();
module.exports = () => {

  return {
    mode: 'none',
    devtool: false,
    entry: entry,
    output: output,
    module: {
      rules: [
        {
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
      new CleanWebpackPlugin(cleanOptions),
    ],
  };
};
