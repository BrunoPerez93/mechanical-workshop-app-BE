const express = require("express");
const { validateBodyMW } = require("../utils/validateSchemas");
const { createBrandSchema } = require("../utils/validators/brandValidators");
const { StatusCodes } = require("http-status-codes");

const BrandController = require("../controllers/brand.controller");
const { validateRole } = require("../utils/middlewares");
const { Roles } = require("../utils/common");

const router = express.Router();

router.post(
  "/",
  validateBodyMW(createBrandSchema),
  async (req, res, next) => {
    try {
      await BrandController.createBrand(req.body);
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
      const brands = await BrandController.getBrands();
      res.json(brands);
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  "/:id",
  async (req, res, next) => {
    try {
      const brand = await BrandController.getBrand(req.params.id);
      if (!brand) res.sendStatus(StatusCodes.NOT_FOUND);
      res.json(brand);
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
      const updatedBrand = await BrandController.updateBrand(req.params.id, req.body);
      if (!updatedBrand) {
        res.sendStatus(StatusCodes.NOT_FOUND);
      } else {
        res.json(updatedBrand);
      }
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
