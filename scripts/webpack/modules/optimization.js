import ImageminPlugin from 'imagemin-webpack';

import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';
import imageminSvgo from 'imagemin-svgo';

// export const optimizeImages = () => ({
//   plugins: [
//     new ImageminPlugin({
//       minimizerOptions: {
//         plugins: [
//           imageminMozjpeg({
//             progressive: true,
//             quality: 10,
//           }),
//           imageminPngquant({
//             quality: 60,
//           }),
//           imageminSvgo(),
//         ],
//       },
//     }),
//   ],
// });

export const optimizeImages = () => ({
  plugins: [
    new ImageminPlugin({
      imageminOptions: {
        plugins: [
          imageminMozjpeg({
            progressive: true,
            quality: 60,
          }),
          imageminPngquant({
            quality: 60,
          }),
          imageminSvgo(),
        ]
      }
    })
  ]
});
