const idleService = require("../services/idle.service");
const router = require("express").Router();
const { config } = require("../config");

/**
  Indica que el jugador ganó
*/
router.get("/win", async (req, res) => {
  try {
    const won = idleService.win();
    if (won) {
      res.status(200).send("Player won");
    } else {
      res.status(200).send("No yet");
    }
  } catch (error) {
    console.error(error);
  }
});

/**
  Regresa el estado actual del archivo "gameStatus.json"
*/
router.get("/current", async (req, res) => {
  try {
    const status = await idleService.getCurrent();
    res.status(200).json(status);
  } catch (error) {
    console.error(error);
  }
});

/**
  Crea un nuevo archivo "gameStatus.json"
*/
router.post("/start", async (req, res) => {
  try {
    const msg = idleService.start();
    res.status(200).send(msg);
  } catch (error) {
    console.error(error);
  }
});

/**
  Eliminando el archivo "gameStatus.json"
*/
router.delete("/die", async (req, res) => {
  try {
    const msg = idleService.die();
    res.status(200).send(msg);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
