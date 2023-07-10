const jumpService = require("../services/jump.service");
const router = require("express").Router();
const { config } = require("../config");

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
