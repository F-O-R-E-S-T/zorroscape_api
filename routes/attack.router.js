const attackService = require("../services/attack.service");
const router = require("express").Router();
const { config } = require("../config");

router.post("/right", async (req, res) => {
  try {
    const state = attackService.setRight();
    res.status(200).json(state);
  } catch (error) {
    console.error(error);
  }
});

router.post("/left", async (req, res) => {
  try {
    const state = stateService.setLeft();
    res.status(200).json(state);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
