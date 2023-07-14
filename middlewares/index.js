const chalk = require("chalk");

const { config } = require("../config");

function errorLogger(error, req, res, next) {
  console.log(`${chalk.red("[SERVER ERROR]:")} ${error}`);
  next(error);
}

function requestLogger(req, res, next) {
  console.log(
    `${chalk.blue("[SERVER REQUEST]:")} Request send to ${chalk.cyan(
      "http://",
    )}${chalk.green(req.hostname)}:${chalk.red(config.port)}${chalk.magenta(
      req.baseUrl,
    )}${chalk.blue(req.path)}`,
  );
  next();
}

function errorHandler(error, req, res, next) {
  res.status(500).json({
    message: error.message,
    stack: error.stack,
  });
}

module.exports = {
  requestLogger,
  errorHandler,
  errorLogger,
};
