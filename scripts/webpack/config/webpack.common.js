// Core
// import webpack from 'webpack';
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
      // plugins: [
      //   new webpack.ProvidePlugin({
      //     process: 'process/browser',
      //   }),
      // ],
    },
    modules.loadJavaScript(),
    modules.loadCss(),
    modules.loadImages(),
    modules.loadSvg(),
    modules.setupHtml(),
  );
};
