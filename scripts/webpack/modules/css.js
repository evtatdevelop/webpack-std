// Core
import env from 'postcss-preset-env';
import MiniCssExtractPlugin  from 'mini-css-extract-plugin';

const loadPostcss = (
  { sourceMap = false, minify = false } = { sourceMap: false, minify: false }
) => ({
    loader: 'postcss-loader',
    options: {
      postcssOptions: {
        sourceMap,
        plugins: [
          // plugins

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
});

const loadCss = ({ sourceMap = false } = { sourceMap: false }) => ({
  loader: 'css-loader',
  options: {
    modules: true,
    // localIdentName: '[path][name]__[local]--[hash:base64:5]',
    sourceMap
  },
});

export const loadDevCss = () => ({
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          loadCss({ sourceMap: true }),
          loadPostcss({ sourceMap: true }),
        ],
      },
    ],
  },
});

export const loadProdCss = () => ({
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          loadCss({ sourceMap: false }),
          loadPostcss({ sourceMap: false }),
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename:       '[name].[id].css',   // !!! Fonts are loading -> building !!!
      // filename:       'css/[name].[id].css',  // !!! Fonts are not loading -> building !!!
      chunkFilename:  'css/[name].[id].css',
    }),
  ],
});

// export const loadCsss = () => ({
//   module: {
//     rules: [
//       {
//         test: /\.css$/,
//         use: [
//           // 'style-loader',
//           // {
//           //   loader: 'css-loader',
//           //   options: {
//           //     modules: true,
//           //     // localIdentName: '[path][name]__[local]--[hash:base64:5]'
//           //   },
//           // },
//           // {
//           //   loader: 'postcss-loader',
//           //   options: {
//           //     postcssOptions: {
//           //       plugins: [

//           //         env({
//           //           stage: 0,
//           //           features: {
//           //             'custom-media-queries': {
//           //               importFrom: [
//           //                 {
//           //                   customMedia: {
//           //                     '--phonePortrait':
//           //                       '(width <= 414px)',
//           //                     '--phoneLandscape':
//           //                       '(width >= 415px) and (width <= 667px)',
//           //                     '--tabletPortrait':
//           //                       '(width >= 668px) and (width <= 768px)',
//           //                     '--tabletLandscape':
//           //                       '(width >= 769px) and (width <= 1024px)',
//           //                     '--desktopS':
//           //                       '(width >= 1025px) and (width <= 1366px)',
//           //                     '--desktopM':
//           //                       '(width >= 1367px) and (width <= 1680px)',
//           //                     '--desktopL':
//           //                       '(width >= 1681px) and (width <= 1920px)',
//           //                     '--desktopXL':
//           //                       '(width >= 1921px)',
//           //                   },
//           //                 },
//           //               ],
//           //             },
//           //           },
//           //         }),
//           //       ],
//           //     },

//           //   },
//           // },
//         ],
//       },
//     ],
//   },
// });

export const loadSass = () => ({
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              // localIdentName:
              //   '[path][name]__[local]--[hash:base64:5]',
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
});

export const loadLess = () => ({
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              // localIdentName:
              //   '[path][name]__[local]--[hash:base64:5]',
            },
          },
          'less-loader',
        ],
      },
    ],
  },
});
