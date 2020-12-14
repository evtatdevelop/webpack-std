const HtmlWebpackPlugin = require('html-webpack-plugin')

const delay = (timeout = 1000) =>
  new Promise(resolve => setTimeout(resolve,timeout));

// module.exports = async () => {
//   //  пауза 1000 ms
//   await delay();

module.exports = () => {

  return {
    mode: 'none',
    devtool: false,

    plugins: [
      new HtmlWebpackPlugin({
        template: './static/template.html',
        title: 'Learning WebPack!👀!',
        favicon: './static/favicon.ico',
      }),
    ],
  };
};
