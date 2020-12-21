module.exports = (api) => {

  // const env = api.env();
  // api.cache.using(() => env === 'development');


  api.cache.never();

  return {
    presets: [
      [ '@babel/env',
        {
          debug: true,
          spec: true,
          loose: false,
          modules: false
        },
      ],
    ],
    plugins: ['@babel/plugin-proposal-class-properties'],
  };
};
