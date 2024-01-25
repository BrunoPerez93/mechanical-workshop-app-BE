const express = require("express");
const userRouter = require("./user.routes");
const brandRouter = require("./brand.routes");
const carsModelsRouter = require("./carsModel.routes");
const mechanicRouter = require("./mechanic.routes");
const clientRouter = require("./client.routes");
const workRouter = require("./work.routes");
const authRouter = require("./auth.routes");
const passport = require("passport");
const { validateRole } = require("../utils/middlewares");
const { Roles } = require("../utils/common");

const router = express.Router();

router.use(
  "/",
  authRouter
);
router.use(
  "/users",
  passport.authenticate('jwt', { session: false }),
  validateRole([Roles.Admin]),
  userRouter
);
router.use(
  "/brands",
  passport.authenticate('jwt', { session: false }),
  brandRouter
);
router.use(
  "/carsModels",
  passport.authenticate('jwt', { session: false }),
  carsModelsRouter
);
router.use(
  "/mechanics",
  passport.authenticate('jwt', { session: false }),
  validateRole([Roles.Admin]),
  mechanicRouter
);
router.use(
  "/clients",
  passport.authenticate('jwt', { session: false }),
  validateRole([Roles.Admin, Roles.Management]),
  clientRouter
);
router.use(
  "/works",
  passport.authenticate('jwt', { session: false }),
  workRouter
);

module.exports = router;
