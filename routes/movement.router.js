const movementService = require("../services/movement.service");
const router = require("express").Router();
const { config } = require("../config");

/**
  Modifican los valores del archivo "gameStatus.json" para
  que el jugador se desplace hacía arriba, derecha, izquierda
  o abajo respectivamente. Tambien está el ataque y el salto
*/

router.post("/up", async (req, res) => {
  try {
    const status = movementService.setUp();
    res.status(200).json(status);
  } catch (error) {
    console.error(error);
  }
});

router.post("/right", async (req, res) => {
  try {
    const status = movementService.setRight();
    res.status(200).json(status);
  } catch (error) {
    console.error(error);
  }
});

router.post("/left", async (req, res) => {
  try {
    const status = movementService.setLeft();
    res.status(200).json(status);
  } catch (error) {
    console.error(error);
  }
});

router.post("/down", async (req, res) => {
  try {
    const status = movementService.setDown();
    res.status(200).json(status);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
