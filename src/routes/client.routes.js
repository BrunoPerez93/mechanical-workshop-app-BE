const express = require("express");
const { validateBodyMW } = require("../utils/validateSchemas");
const { createClientSchema } = require("../utils/validators/clientValidators");
const { StatusCodes } = require("http-status-codes");

const ClientController = require("../controllers/client.controller");
const { validateRole } = require("../utils/middlewares");
const { Roles } = require("../utils/common");

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
  "/:id",
  async (req, res, next) => {
    try {
      const client = await ClientController.getClient(req.params.id);
      if (!client) res.sendStatus(StatusCodes.NOT_FOUND);
      res.json(client);
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
      const updatedClient = await ClientController.updateClient(req.params.id, req.body);
      if (!updatedClient) {
        res.sendStatus(StatusCodes.NOT_FOUND);
      } else {
        res.json(updatedClient);
      }
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
