// Core
// import webpack from 'webpack';
import { DefinePlugin } from "webpack";
import WebpackBar from 'webpackbar';
var FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
import merge from "webpack-merge";

// Constants
import { BUILD_DIRECTORY, SOURCE_DIRECTORY } from "../constans";

// Modules
// import { loadJavaScript } from '../modules';
import * as modules from "../modules";

export default () => {
  const { NODE_ENV } = process.env;

  return merge(
    {
      entry: [SOURCE_DIRECTORY],
      output: {
        path: BUILD_DIRECTORY,
        // filename: 'bundle.js',
        filename: "js/bundle.js",
        publicPath: "/", // FIXING Lesson 5 'do not load fonts if make CSS folder in prodaction build'
      },
      plugins: [
        //   new webpack.ProvidePlugin({
        //     process: 'process/browser',
        //   }),
        new DefinePlugin({
          __ENV__: JSON.stringify(NODE_ENV),
          __DEV__: NODE_ENV === "development",
          __STAGE__: NODE_ENV === "stage",
          __PROD__: NODE_ENV === "prodaction",
        }),
        new WebpackBar(),
        new FriendlyErrorsWebpackPlugin({
          compilationSuccessInfo: {
            messages: ['You application is running here http://localhost:3000'],
            notes: ['Some additionnal notes to be displayed unpon successful compilation']
          },
          onErrors: function (severity, errors) {
            // You can listen to errors transformed and prioritized by the plugin
            // severity can be 'error' or 'warning'
          },
          // should the console be cleared between each compilation?
          // default is true
          clearConsole: true,

          // add formatters and transformers (see below)
          additionalFormatters: [],
          additionalTransformers: []
        }),
      ],
    },
    modules.loadJavaScript(),
    // modules.loadCss(),
    modules.loadSass(),
    modules.loadLess(),
    modules.loadFonts(),
    modules.loadImages(),
    modules.loadSvg(),
    modules.setupHtml()
  );
};
