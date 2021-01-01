module.exports = (api) => {

  const env = api.env();
  // api.cache.using(() => env === 'development');

  api.cache.never();

  const plugins = [
    '@babel/proposal-class-properties',
    '@babel/plugin-syntax-dynamic-import',
  ];

  if (env === 'development') {
    plugins.push('react-hot-loader/babel');
  }

  return {
    presets: [
      '@babel/preset-react',
      [ '@babel/env',
        {
          debug: false,
          spec: true,
          loose: false,
          modules: false,
          // useBuiltIns: 'usage', // Загружает только нужные полифилы (ERROR Compilation)
        },
      ],
    ],
    // plugins: ['@babel/proposal-class-properties'],
    // plugins: plugins,
    plugins,
  };
};
