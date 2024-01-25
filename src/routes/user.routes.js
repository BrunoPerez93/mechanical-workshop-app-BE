const express = require("express");
const { validateBodyMW } = require("../utils/validateSchemas");
const { createUserSchema } = require("../utils/validators/userValidators");
const { StatusCodes } = require("http-status-codes");

const UserController = require("../controllers/user.controller");

const router = express.Router();

router.post(
  "/",
  validateBodyMW(createUserSchema),
  async (req, res, next) => {
    try {
      await UserController.createUser(req.body);
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
      const users = await UserController.getUsers();
      res.json(users);
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  "/:id",
  async (req, res, next) => {
    try {
      const user = await UserController.getUser(req.params.id);
      if (!user) res.sendStatus(StatusCodes.NOT_FOUND);
      res.json(user);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
