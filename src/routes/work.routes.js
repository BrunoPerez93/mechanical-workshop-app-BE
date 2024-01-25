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
      const work = await WorkController.getWorks();
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

module.exports = router;
