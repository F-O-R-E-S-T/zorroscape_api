const jumpService = require("../services/jump.service");
const router = require("express").Router();
const { config } = require("../config");

/**
  Modifican los valores del archivo "gameStatus.json" 
  en X y Y para saltar hacia la derecha o la izquierda
*/

router.put("/right", async (req, res) => {
  try {
    const status = await jumpService.setRight();
    res.status(200).json(status);
  } catch (error) {
    console.error(error);
  }
});

router.put("/left", async (req, res) => {
  try {
    const status = await jumpService.setLeft();
    res.status(200).json(status);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
