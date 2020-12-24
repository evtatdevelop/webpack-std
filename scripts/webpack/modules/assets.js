//  Core
// import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export const setupHtml = () => ({
  plugins: [
    new HtmlWebpackPlugin({
      template: './static/template.html',
      title: 'Learning WebPack!👀!',
      favicon: './static/favicon.ico',
    }),
    // new webpack.ProvidePlugin({
    //   process: 'process/browser',
    // }),
  ],
});

export const loadImages = () => ({
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[ext]',
            }
          },
        ],
      },
    ],
  },
});
