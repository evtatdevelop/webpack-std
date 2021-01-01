// Core
import { DefinePlugin } from "webpack";
import merge from "webpack-merge";

// Constants
import { BUILD_DIRECTORY, SOURCE_DIRECTORY } from "../constans";

// Modules
import * as modules from "../modules";

export default () => {
  const { NODE_ENV } = process.env;
  const IS_DEV = NODE_ENV === 'development';

  return merge(
    {
      entry: [ SOURCE_DIRECTORY ],
      output: {
        path: BUILD_DIRECTORY,
        // filename: "js/bundle.js",
        // filename: 'js/bundle.[hash:5].js',
        filename: IS_DEV
          ? 'js/bundle.[hash].chunk.js'
          : 'js/bundle.[chunkhash].bundle.js',
        chunkFilename: 'js/bundle.[chunkhash].chunk.js',
        publicPath: "/", // FIXING Lesson 5 'do not load fonts if make CSS folder in prodaction build'
        hashDigestLength: 5,
      },
      plugins: [
        new DefinePlugin({
          __ENV__: JSON.stringify(NODE_ENV),
          __DEV__: NODE_ENV === "development",
          __STAGE__: NODE_ENV === "stage",
          __PROD__: NODE_ENV === "prodaction",
        }),
      ],
    },
    modules.loadJavaScript(),
    modules.loadSass(),
    modules.loadLess(),
    modules.loadFonts(),
    modules.loadImages(),
    modules.loadSvg(),
    modules.setupHtml(),
    modules.filterMomentLocales(),
  );
};
