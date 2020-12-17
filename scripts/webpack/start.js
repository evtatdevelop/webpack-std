// Core
const webpack = require('webpack');
const DevServer = require('webpack-dev-server');
const hot = require('webpack-hot-middleware');
const chalk = require('chalk');

// Config
const getConfig = require('./webpack.config');

// Constants
const { HOST, PORT } = require('./constans');

const compiler = webpack(getConfig());

const server = new DevServer(compiler, {
  host: HOST,
  port: PORT,
  historyApiFallback: true,
  overlay: true,
  quiet: true,
  clientLogLevel: 'none',
  noInfo: true,
  after: (app) => {
    app.use(
      hot(compiler, {
        log: false,
      }),
    );
  },
});

server.listen(PORT, HOST, () => {
  console.log(
    `${chalk.greenBright('-> Serverlistening')} ${chalk.blueBright(
      `http://${HOST}:${PORT}`,
    )}`,
  );
});
