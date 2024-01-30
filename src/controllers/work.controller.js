const { Op } = require("sequelize");
const { Work, Mechanic, Client, CarsModel } = require("../models");
const { BadRequest, Errors, DatabaseError } = require("../utils/exceptions");

const createWork = async (workData) => {
  try {
    return Work.create(workData);
  } catch (error) {
    console.log(error);
    if (error.name === 'SequelizeUniqueConstraintError')
      throw new BadRequest('Error duplicado');
    throw new DatabaseError(Errors.databaseCreation);
  }
};

const getWorks = async (filters) => {
  try {
    const options = { include: [] };
    if (filters.mechanicName) {
      options.include = [
        {
          association: Work.associations.mechanic,
          where: {
            userName: {
              [Op.iLike]: `%${filters.mechanicName}%`
            }
          }
        },
        Client,
        {
          association: Work.associations.carsModel,
          include: [{
            association: CarsModel.associations.brand,
          }],
        }
      ]
    } else if (filters.clientCi) {
      options.include = [
        Mechanic,
        {
          association: Work.associations.client,
          where: {
            ci: {
              [Op.iLike]: `${filters.clientCi}%`
            }
          }
        },
        {
          association: Work.associations.carsModel,
          include: [{
            association: CarsModel.associations.brand,
          }],
        }
      ]
    } else if (Object.keys(filters).length) {
      options.include = [
        Mechanic,
        Client,
        {
          association: Work.associations.carsModel,
          include: [{
            association: CarsModel.associations.brand,
          }],
        }
      ];
      options.where = filters;
    }
    options.logging = console.log;
    return Work.findAll(options);
  } catch (error) {
    console.log(error);
    throw new DatabaseError(Errors.databaseCreation);
  }
};

const getWork = async (id) => {
  try {
    return Work.findByPk(id, {
      include: [
        Mechanic,
        Client,
        {
          association: Work.associations.carsModel,
          include: [{
            association: CarsModel.associations.brand,
          }],
        }
      ]
    });
  } catch (error) {
    console.log(error);
    throw new DatabaseError(Errors.databaseCreation);
  }
};

const WorkController = {
  createWork,
  getWorks,
  getWork
};

module.exports = WorkController;
