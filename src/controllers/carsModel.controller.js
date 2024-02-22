const { CarsModel } = require("../models");
const { BadRequest, Errors, DatabaseError } = require("../utils/exceptions");

const createCarsModel = async (carData) => {
  try {
   
    return CarsModel.create(carData);
  } catch (error) {
    console.log(error);
    if (error.name === 'SequelizeUniqueConstraintError')
      throw new BadRequest('Error duplicado');
    throw new DatabaseError(Errors.databaseCreation);
  }
};

const getCars = async (brandId) => {
  const where = {};
  if (brandId) where.brandId = brandId;
  try {
    return CarsModel.findAll({
      attributes: ['id', 'carName'],
      where,
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

const updateModel = async (id, updatedData) => {
  try {
    const existingModel = await CarsModel.findByPk(id);

    console.log('existingmodel', existingModel);
    if (!existingModel) {
      throw new BadRequest('Model not found');
    }

    await existingModel.update(updatedData);

    return existingModel;
  } catch (error) {
    console.log(error);
    if (error.name === 'SequelizeUniqueConstraintError') {
      throw new BadRequest('Error duplicado');
    }
    throw new DatabaseError(Errors.databaseUpdate);
  }
};

const CarsModelController = {
  createCarsModel,
  getCars,
  getCar,
  updateModel,
};

module.exports = CarsModelController;
