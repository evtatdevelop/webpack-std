const HtmlWebpackPlugin = require('html-webpack-plugin');
const env = require('postcss-preset-env');

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
          test: /\.js$/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          // TODO: Upgrade style loading
          test: /\.css$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName:
                  '[path][name]__[local]--[hash:base64:5]',
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: [

                  env({
                    stage: 0,
                    features: {
                      'custom-media-queries': {
                        importFrom: [
                          {
                            customMedia: {
                              '--phonePortrait':
                                '(width <= 414px)',
                              '--phoneLandscape':
                                '(width >= 415px) and (width <= 667px)',
                              '--tabletPortrait':
                                '(width >= 668px) and (width <= 768px)',
                              '--tabletLandscape':
                                '(width >= 769px) and (width <= 1024px)',
                              '--desktopS':
                                '(width >= 1025px) and (width <= 1366px)',
                              '--desktopM':
                                '(width >= 1367px) and (width <= 1680px)',
                              '--desktopL':
                                '(width >= 1681px) and (width <= 1920px)',
                              '--desktopXL':
                                '(width >= 1921px)',
                            },
                          },
                        ],
                      },
                    },
                  }),
                ],
              },
            },
          ],
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
