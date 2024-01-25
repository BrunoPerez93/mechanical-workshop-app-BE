const express = require("express");
const { validateBodyMW } = require("../utils/validateSchemas");
const { createMechanicSchema } = require("../utils/validators/mechanicValidators");
const { StatusCodes } = require("http-status-codes");

const MechanicController = require("../controllers/mechanic.controller");

const router = express.Router();

router.post(
  "/",
  validateBodyMW(createMechanicSchema),
  async (req, res, next) => {
    try {
      await MechanicController.createMechanic(req.body);
      res.sendStatus(201);
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  "/",
  async (req, res, next) => {
    try {
      const mechanic = await MechanicController.getMechanics();
      res.json(mechanic);
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  "/:id",
  async (req, res, next) => {
    try {
      const mechanic = await MechanicController.getMechanic(req.params.id);
      if (!mechanic) res.sendStatus(StatusCodes.NOT_FOUND);
      res.json(mechanic);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
