// Core
const webpack = require('webpack');
const DevServer = require('webpack-dev-server');
const hot = require('webpack-hot-middleware');
const chalk = require('chalk');

// Config
const getDevConfig = require('./config/webpack.dev');

// Utils
const { choosePort } = require('./utils');

// Constants
const { HOST, PORT } = require('./constans');

const compiler = webpack(getDevConfig());



(async () => {
  try {
    const choosenPort = await choosePort(PORT);

    if (!choosenPort) {
      console.log(
        chalk.yellowBright('-> It\'s impossible to run the app :('),
      );
      return null;
    }

    const server = new DevServer(compiler, {
      host: HOST,
      port: choosenPort,
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

    server.listen(choosenPort, HOST, () => {
      console.log(
        `${chalk.greenBright('-> Serverlistening')} ${chalk.blueBright(
          `http://${HOST}:${choosenPort}`,
        )}`,
      );
    });

  } catch (error) {
    console.log(chalk.redBright('-> Error!'));
    console.error(error.message || error);
  }



})();




