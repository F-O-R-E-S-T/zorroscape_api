const attackService = require("../services/attack.service");
const router = require("express").Router();
const { config } = require("../config");

router.put("/right", async (req, res) => {
  try {
    const state = await attackService.setRight();
    res.status(200).json(state);
  } catch (error) {
    console.error(error);
  }
});

router.put("/left", async (req, res) => {
  try {
    const state = await attackService.setLeft();
    res.status(200).json(state);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
