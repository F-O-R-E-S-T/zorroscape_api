require('dotenv').config();

const config = {
  env: process.env.NODE_ENV || 'development',

  port: process.env.PORT || 3000,

  appHost: process.env.APP_HOST || 'localhost',
  appRoute: process.env.APP_ROUTE || '/api/v1',

  appPublic: process.env.APP_PUBLIC || '/',
  appStatic: process.env.APP_STATIC || 'public',

  appStatusFilePath: process.env.APP_FILES || 'files',
}

module.exports = { config };
