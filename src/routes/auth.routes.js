const express = require("express");

const AuthController = require("../controllers/auth.controller");

const router = express.Router();

router.post(
  "/login",
  async (req, res, next) => {
    try {
      const { userName, password } = req.body;
      const result = await AuthController.login(userName.toLowerCase(), password);
      res.json(result);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
