const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

const delay = (timeout = 1000) =>
  new Promise(resolve => setTimeout(resolve,timeout));


const cleanOptions = {
  verbose: true,
};
const entry = './src/index.js';
const output = {
  filename: 'main.js',
  path: path.resolve(__dirname, 'dist'),
}


// module.exports = async () => {
//   //  пауза 1000 ms
//   await delay();
module.exports = () => {

  return {
    entry: entry,
    output: output,
    mode: 'none',
    devtool: false,

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
