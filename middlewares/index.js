const chalk = require("chalk");

function errorLogger(error, req, res, next) {
  console.log(`${chalk.red("[SERVER ERROR]:")} ${error}`);
  next(error);
}

function errorHandler(error, req, res, next) {
  res.status(500).json({
    message: error.message,
    stack: error.stack,
  });
}

module.exports = {
  errorHandler,
  errorLogger,
};
