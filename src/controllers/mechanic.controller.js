const { Mechanic } = require("../models");
const { BadRequest, Errors, DatabaseError } = require("../utils/exceptions");

const createMechanic = async (mechanicData) => {
  try {
    return Mechanic.create(mechanicData);
  } catch (error) {
    console.log(error);
    if (error.name === 'SequelizeUniqueConstraintError')
      throw new BadRequest('Error duplicado');
    throw new DatabaseError(Errors.databaseCreation);
  }
};

const getMechanics = async () => {
  try {
    return Mechanic.findAll({
      attributes: ['id', 'userName'],
    });
  } catch (error) {
    console.log(error);
    throw new DatabaseError(Errors.databaseCreation);
  }
};

const getMechanic = async (id) => {
  try {
    return Mechanic.findByPk(id, {
      attributes: ['id', 'userName'],
    });
  } catch (error) {
    console.log(error);
    throw new DatabaseError(Errors.databaseCreation);
  }
};

const MechanicController = {
  createMechanic,
  getMechanics,
  getMechanic
};

module.exports = MechanicController;
