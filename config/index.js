require("dotenv").config();

const config = {
  env: process.env.NODE_ENV || "development",

  port: process.env.PORT || 3000,

  appHost: process.env.APP_HOST || "localhost",
  appRoute: process.env.APP_ROUTE || "/api/v1",

  appPublic: process.env.APP_PUBLIC || "/",
  appStatic: process.env.APP_STATIC || "public",

  appStatusFilePath: process.env.APP_FILES || "files",

  movementSpeed: parseInt(process.env.MOVEMENT_SPEED) || 10,

  jumpingSpeed: parseInt(process.env.JUMPING_SPEED) || 10,
  jumpingHigh: parseInt(process.env.JUMPING_HIGH) || 10,

  attackDistance: parseInt(process.env.ATTACK_DISTANCE) || 10,
  attackSpeed: parseInt(process.env.ATTACK_SPEED) || 10,
};

module.exports = { config };
