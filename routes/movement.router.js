const movementService = require("../services/movement.service");
const router = require("express").Router();
const { config } = require("../config");

/**
  Modifican los valores del archivo "gameStatus.json" para
  que el jugador se desplace hacía arriba, derecha, izquierda
  o abajo respectivamente. Tambien está el ataque y el salto
*/

router.put("/up", async (req, res) => {
  try {
    const status = await movementService.setUp();
    res.status(200).json(status);
  } catch (error) {
    console.error(error);
  }
});

router.put("/right", async (req, res) => {
  try {
    const status = await movementService.setRight();
    res.status(200).json(status);
  } catch (error) {
    console.error(error);
  }
});

router.put("/left", async (req, res) => {
  try {
    const status = await movementService.setLeft();
    res.status(200).json(status);
  } catch (error) {
    console.error(error);
  }
});

router.put("/down", async (req, res) => {
  try {
    const status = await movementService.setDown();
    res.status(200).json(status);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
