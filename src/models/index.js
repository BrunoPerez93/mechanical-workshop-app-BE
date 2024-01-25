const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
    charset: "utf8",
    collate: "utf8_general_ci",
    timezone: "-03:00",
    logging: false,
    define: {
      defaultScope: {
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      },
    },
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.DataTypes = DataTypes;

db.users = require("./user/user.model")(sequelize, DataTypes);
db.brands = require("./brand/brand.model")(sequelize, DataTypes);
db.carsModels = require("./carsModel/carsModel.model")(sequelize, DataTypes);
db.mechanics = require("./mechanic/mechanic.model")(sequelize, DataTypes);
db.clients = require("./cliente/client.model")(sequelize, DataTypes);
db.works = require("./trabajo/work.model")(sequelize, DataTypes);

Object.values(db).forEach((model) => model?.associate && model.associate(db));

const models = {
  sequelize,
  User: db.users,
  Brand: db.brands,
  CarsModel: db.carsModels,
  Mechanic: db.mechanics,
  Client: db.clients,
  Work: db.works,
};

module.exports = models;
