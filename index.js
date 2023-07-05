const { config } = require("./config");

const loadEndpoint = require("./routes");
const express = require("express");
const cors = require("cors");

if (config.env === "development") {
  const morgan = require("morgan");
  const chalk = require("chalk");
}

// Express instance
const app = express();

// General purpose
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// Paths
loadEndpoint(app);

// Static files
app.use(`${config.appPublic}`, express.static(`./${config.appStatic}`));

// Loggers
if (config.env === "development") {
  app.use(morgan("dev"));
  app.use(logError);
}

// Error handlers
app.use(errorHandler);

// App port
app.set("port", config.port);

// Server runner
server.listen(app.get("port"), () => {
  const deployLog =
    config.env === "development"
      ? `${chalk.green("[SERVER]:")} App running on ${chalk.green(
          `https://localhost:${app.get("port")}`
        )}`
      : `[SERVER]: App running on ${config.appHost}:${app.get("port")}`;
  console.log(deployLog);
});
