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

    // Включено всегда Конфигурируется в SplitChunkPlugin
    splitChunks: {
      // Режим разделения кода. По-умолчанию - async
      chunks: 'all',
      // Минимальный размернового чанка для отделения
      minSize: 30000,
      // Максимальный размернового чанка для отделения
      maxSize: 0,
      // минимальное количество чанков которых зависит от модуля
      // определение этого модуля в отдельный чанк
      minChunks: 1,
      // максимальное количество одновременных параллельных запросов чанков для асинхронного Splitinga
      // всегда предпочитаю тачанки большего размера
      maxAsyncRequests: 5,
      // максимальное количество одновременных параллельных запросов чанков на 1 entrypoint
      // всегда предпочитает Зачем ты большего размера
      maxInitialRequests: 3,
      // символ разделитель имени сплит-чанка
      automaticNameDelimiter: '~',
      // Определяет имя нового чанка
      name: true,
      // по умолчанию в cacheGroups наследует от остальных опции Сплитchunks
      // уникальное для cacheGroups только test, priority и reuseExistingChunk
      // ключ каждой кеш-группы определяет её имя
      // по умолчанию вебпак устанавливает две кеш-группы
      cacheGroups: {
        // дефолтная кэш-группа Выносит все зависимости из node-modules в chunk vendors
        vendors: {
          //  перезаписанные опция
          chunks: 'initial',
          //  выбирает модули внесённые в данную кеш-группу если не указать будут выбраны все
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        default: {
          // Дефолтная группа выносит любой модуль-зависимость в отдельный чанк default
          // при условии дублирование модуля-зависимости хотя бы в двух чанках
          minChunks: 2,
          // Приоритет кеш-группыю Если модуль попадает сразу в нескольких кеш-группах то выбирают
          // кеш-группа с более высоким priority или которая составляет xанr большего размера
          // у дефолтных кеш-групп отрицательный приоритет
          // поэтому кастомные кешгруппы приоритетние (их priority 0 по умолчанию)
          priority: -20,
          // если чанк содержит уже существующее отдельный чанк
          // то используется этот уже существующий отдельный чанк вместо создания нового
          reuseExistingChunk: true,
        },
      },
    },
    // Выносит webpack runtime каждого entrypoint в отдельный чанкю fakse по-умолчанию
    runtimeChunk: false,
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
