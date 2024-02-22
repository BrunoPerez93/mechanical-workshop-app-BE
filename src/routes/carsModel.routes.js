const express = require("express");
const { validateBodyMW } = require("../utils/validateSchemas");
const { createCarsModelSchema } = require("../utils/validators/carsModelValidators");
const { StatusCodes } = require("http-status-codes");

const CarsModelController = require("../controllers/carsModel.controller");
const { validateRole } = require("../utils/middlewares");
const { Roles } = require("../utils/common");

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
      const { brandId } = req.query;
      const carsModel = await CarsModelController.getCars(brandId);
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

router.put(
  "/:id",
  validateRole([Roles.Admin]),
    
  async (req, res, next) => {
    try {
      const updatedModel = await CarsModelController.updateModel(req.params.id, req.body);
      if (!updatedModel) {
        res.sendStatus(StatusCodes.NOT_FOUND);
      } else {
        res.json(updatedModel);
      }
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
