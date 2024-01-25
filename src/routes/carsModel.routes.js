const express = require("express");
const { validateBodyMW } = require("../utils/validateSchemas");
const { createCarsModelSchema } = require("../utils/validators/carsModelValidators");
const { StatusCodes } = require("http-status-codes");

const CarsModelController = require("../controllers/carsModel.controller");

const router = express.Router();

router.post(
  "/",
  validateBodyMW(createCarsModelSchema),
  async (req, res, next) => {
    try {
      await CarsModelController.createCarsModel(req.body);
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
      const carsModel = await CarsModelController.getCars();
      res.json(carsModel);
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  "/:id",
  async (req, res, next) => {
    try {
      const carsModel = await CarsModelController.getCar(req.params.id);
      if (!carsModel) res.sendStatus(StatusCodes.NOT_FOUND);
      res.json(carsModel);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
