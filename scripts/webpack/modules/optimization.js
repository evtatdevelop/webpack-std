import { ContextReplacementPlugin } from 'webpack';
// import ImageminPlugin from 'imagemin-webpack';
// import imageminMozjpeg from 'imagemin-mozjpeg';
// import imageminPngquant from 'imagemin-pngquant';
// import imageminSvgo from 'imagemin-svgo';

// Достаточно в webpack.prod.js установить:  mode: 'production'
import TerserPlugin from 'terser-webpack-plugin';

export const optimizeBuild = () => ({
  optimization: {
    nodeEnv: 'production',

    // production: минификация JavaScript
    minimize: false,
    minimizer: [ new TerserPlugin() ],

    // production: останавливает эмит сборки при возникновении ошибки во впемя компиляции
    noEmitOnErrors: true,

    // prod & dev: Не добавляет в сборку пустые чанки - уменьшает нагрузку на систему - ускоряет сомпиляцию
    removeEmptyChunks: true,
    // prod & dev: Обьеденяет эквивалентные чанки
    mergeDuplicateChunks: true,
    // prod & dev: Удаляет ьщдуль из чанка, если этот модуль пресутствует в родительском чанке
    removeAvailableModules: true,

    // prod: Находит наиболее часто-используемые модули и дает им меньшее значение идентификатора
    // таким образомэти модули загружаются в сборку быстрее
    // TODO webpack 5 remove optimization.occurrenceOrder
    occurrenceOrder: true,
    // prod: анализирует module graph и ишет модули которые можно смержить
    // ? зависит от providedExports и usedExports
    concatenateModules: true,

    // prod & dev: Определяет экспортированные сущности для каждого модуля
    // помогает другим оптимизациям
    providedExports: true,
    // prod: Определяет использованые экспортированные сущности для каждого модуля
    // это помогает другим оптимизациям
    // ? зависит от providedExports
    usedExports: true,
    // prod: собирает зависимости более эффетивно
    // ? зависит от providedExports и usedExports
    sideEffects: true, // TODO: (TREE SHAKING)

    // dev: вместо числовых идентификаторов даёт модулям более понятные имена
    // TODO: webpack 5 add moduleIds: "named" default for development
    // TODO: webpack 5 add moduleIds: "size" default for prodaction
    // TODO: webpack 5 remove optimization.namedModules
    namedModules: false,
    // Определяет механизм генерирования идентификатора для модуля
    moduleIds: false,

    // dev: вместо числовых идентификаторов даёт чанкам более понятные имена
    // TODO: webpack 5 add chunkIds: "named" default for development
    // TODO: webpack 5 add chunkIds: "size" default for prodaction
    // TODO: webpack 5 remove optimization.namedChunks
    namedChunks: false,
    // Определяет механизм генерирования идентификатора для чанка
    chunkIds: false,
  },
});


// export const optimizeImages = () => ({
//   plugins: [
//     new ImageminPlugin({
//       minimizerOptions: {
//         plugins: [
//           imageminMozjpeg({
//             progressive: true,
//             quality: 60,
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

export const filterMomentLocales = () => ({
  plugins: [ new ContextReplacementPlugin(
      /moment[/\\]locale$/,
      /en|ru/
    ),
  ],
});
