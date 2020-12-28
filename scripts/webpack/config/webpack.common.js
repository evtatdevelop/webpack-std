// Core
// import webpack from 'webpack';
import { DefinePlugin } from "webpack";
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
