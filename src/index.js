require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });
require('./config/passport');
const express = require("express");
const { sequelize } = require("./models/index");
const initialSetup = require('./config/initialSetup');
const apiRouter = require("./routes");
const cors = require('cors');
const helmet = require('helmet');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(helmet());

(async () => {
  await sequelize.sync();
  await initialSetup.setup();
  console.log("Database ready");
})();

app.use("/api/v1", apiRouter);

app.use((err, req, res, next) => {
  console.error(
    err.details
      ? `${err.details.name}: ${err.details.message}`
      : `${err.name}: ${err.message}`
  );
  //console.log('error fede', err);
  if (err.isOperational) {
    return res.status(err.status).json(err);
  }
  return res
    .status(500)
    .json({ error: "Please contact with the administrator" });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Express listening on port ${PORT}`);
});
