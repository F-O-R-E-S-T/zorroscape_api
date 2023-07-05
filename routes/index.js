const router = require("express").Router();
const { config } = require("../config");

// Routers
const movementRouter = require("./movement.router");
const attackRouter = require("./attack.router");
const jumpRouter = require("./jump.router");
const idleRouter = require("./idle.router");

const loadEnpoint = (app) => {
  // Over writing default base path
  app.use(`${config.appRoute}`, router);

  // Base path routes
  router.use("/movement", movementRouter);
  router.use("/attack", attackRouter);
  router.use("/jump", jumpRouter);
  router.use("/idle", idleRouter);
};

module.exports = loadEnpoint;
