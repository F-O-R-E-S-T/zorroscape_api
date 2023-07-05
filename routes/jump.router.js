const jumpService = require("../services/jump.service");
const router = require("express").Router();
const { config } = require("../config");

router.post("/right", async (req, res) => {
  try {
    const status = jumpService.setRight();
    res.status(200).json(status);
  } catch (error) {
    console.error(error);
  }
});

router.post("/left", async (req, res) => {
  try {
    const status = jumpService.setLeft();
    res.status(200).json(status);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
