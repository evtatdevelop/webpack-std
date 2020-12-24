// import webpack from 'webpack';
// import HtmlWebpackPlugin from 'html-webpack-plugin';
// import env from 'postcss-preset-env';
import merge from 'webpack-merge';

// Constants
import { BUILD_DIRECTORY, SOURCE_DIRECTORY } from '../constans';

// Modules
// import { loadJavaScript } from '../modules';
import * as modules from '../modules';

export default () => {
  return merge(
      {
      entry: [ SOURCE_DIRECTORY ],
      output: {
        path: BUILD_DIRECTORY,
        filename: 'bundle.js',
      },
      // module: {
        // rules: [
          // loadJavaScript
          // {
          //   test: /\.js$/,
          //   exclude: /node_modules/,
          //   use: {
          //     loader: 'babel-loader',
          //   },
          // },
          // loadCSS
          // {
          //   // TODO: Upgrade style loading
          //   test: /\.css$/,
          //   use: [
          //     'style-loader',
          //     {
          //       loader: 'css-loader',
          //       options: {
          //         modules: true,
          //         // localIdentName: '[path][name]__[local]--[hash:base64:5]'
          //       },
          //     },
          //     {
          //       loader: 'postcss-loader',
          //       options: {
          //         postcssOptions: {
          //           plugins: [

          //             env({
          //               stage: 0,
          //               features: {
          //                 'custom-media-queries': {
          //                   importFrom: [
          //                     {
          //                       customMedia: {
          //                         '--phonePortrait':
          //                           '(width <= 414px)',
          //                         '--phoneLandscape':
          //                           '(width >= 415px) and (width <= 667px)',
          //                         '--tabletPortrait':
          //                           '(width >= 668px) and (width <= 768px)',
          //                         '--tabletLandscape':
          //                           '(width >= 769px) and (width <= 1024px)',
          //                         '--desktopS':
          //                           '(width >= 1025px) and (width <= 1366px)',
          //                         '--desktopM':
          //                           '(width >= 1367px) and (width <= 1680px)',
          //                         '--desktopL':
          //                           '(width >= 1681px) and (width <= 1920px)',
          //                         '--desktopXL':
          //                           '(width >= 1921px)',
          //                       },
          //                     },
          //                   ],
          //                 },
          //               },
          //             }),
          //           ],
          //         },

          //       },
          //     },
          //   ],
          // },
          // {
          //   test: /\.(png|jpe?g|gif)$/i,
          //   use: [
          //     {
          //       loader: 'file-loader',
          //       options: {
          //         name: 'images/[name].[ext]',
          //       }
          //     },
          //   ],
          // },
        // ],
      // },
      // plugins: [
      //   new HtmlWebpackPlugin({
      //     template: './static/template.html',
      //     title: 'Learning WebPack!👀!',
      //     favicon: './static/favicon.ico',
      //   }),
      //   new webpack.ProvidePlugin({
      //     process: 'process/browser',
      //   }),
      // ],
    },
    modules.loadJavaScript(),
    modules.loadCss(),
    modules.setupHtml(),
  );
};
