const express = require("express");
const { validateBodyMW } = require("../utils/validateSchemas");
const { createClientSchema } = require("../utils/validators/clientValidators");
const { StatusCodes } = require("http-status-codes");

const ClientController = require("../controllers/client.controller");

const router = express.Router();

router.post(
  "/",
  validateBodyMW(createClientSchema),
  async (req, res, next) => {
    try {
      await ClientController.createClient(req.body);
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
      const client = await ClientController.getClients();
      res.json(client);
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  "/:ci",
  async (req, res, next) => {
    try {
      const client = await ClientController.getClient(req.params.ci);
      if (!client) res.sendStatus(StatusCodes.NOT_FOUND);
      res.json(client);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
