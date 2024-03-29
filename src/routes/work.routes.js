const express = require("express");
const { validateBodyMW } = require("../utils/validateSchemas");
const { createWorkSchema } = require("../utils/validators/workValidators");
const { StatusCodes } = require("http-status-codes");

const WorkController = require("../controllers/work.controller");
const { Roles } = require("../utils/common");
const { validateRole } = require("../utils/middlewares");

const router = express.Router();

router.post(
  "/",
  validateRole([Roles.Admin, Roles.Management]),
  validateBodyMW(createWorkSchema),
  async (req, res, next) => {
    try {
      await WorkController.createWork(req.body);
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
      const filters = req.query;
      const work = await WorkController.getWorks(filters);

      res.json(work);
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  "/:id",
  async (req, res, next) => {
    try {
      const work = await WorkController.getWork(req.params.id);
      if (!work) res.sendStatus(StatusCodes.NOT_FOUND);
      res.json(work);
    } catch (error) {
      next(error);
    }
  }
);

router.put(
  "/:id",
  validateRole([Roles.Admin, Roles.Mechanic]),
    
  async (req, res, next) => {
    try {
      const updatedWork = await WorkController.updateWork(req.params.id, req.body);
      if (!updatedWork) {
        res.sendStatus(StatusCodes.NOT_FOUND);
      } else {
        res.json(updatedWork);
      }
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
