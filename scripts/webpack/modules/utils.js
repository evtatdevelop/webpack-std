// Core
import { HotModuleReplacementPlugin } from 'webpack';
import WebpackBar from 'webpackbar';
import FriendlyErrorsWebpackPlugin from 'friendly-errors-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

// Constants
import { PROJECT_ROOT } from "../constans";

export const connectBuildProgressIndicator = () => ({
  plugins: [ new WebpackBar() ],
});

export const connectFriendlyErrors = () => ({
  plugins: [ new FriendlyErrorsWebpackPlugin() ],
});

export const connectHMR = () =>({
  plugins: [ new HotModuleReplacementPlugin() ],
});

export const cleanDirectories = () => ({
  plugins: [
    new CleanWebpackPlugin({
      verbose: true,
      root: PROJECT_ROOT,
    }),
  ],
});

