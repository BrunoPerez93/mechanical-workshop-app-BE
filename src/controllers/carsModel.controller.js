const { CarsModel } = require("../models");
const { BadRequest, Errors, DatabaseError } = require("../utils/exceptions");

const createCarsModel = async (carData) => {
  try {
    console.log('carData', carData);
    return CarsModel.create(carData);
  } catch (error) {
    console.log(error);
    if (error.name === 'SequelizeUniqueConstraintError')
      throw new BadRequest('Error duplicado');
    throw new DatabaseError(Errors.databaseCreation);
  }
};

const getCars = async () => {
  try {
    return CarsModel.findAll({
      attributes: ['id', 'carName'],
    });
  } catch (error) {
    console.log(error);
    throw new DatabaseError(Errors.databaseCreation);
  }
};

const getCar = async (id) => {
  try {
    return CarsModel.findByPk(id, {
      attributes: ['id', 'carName'],
    });
  } catch (error) {
    console.log(error);
    throw new DatabaseError(Errors.databaseCreation);
  }
};

const CarsModelController = {
  createCarsModel,
  getCars,
  getCar
};

module.exports = CarsModelController;
