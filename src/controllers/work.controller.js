const { Work } = require("../models");
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

const getWorks = async () => {
  try {
    return Work.findAll({
      attributes: { exclude: [''] }
    });
  } catch (error) {
    console.log(error);
    throw new DatabaseError(Errors.databaseCreation);
  }
};

const getWork = async (id) => {
  try {
    return Work.findByPk(id, {
      attributes: [
        'id',
        'brandName',
        'carName',
        'matricula',
        'km',
        'name',
        'lastname',
        'abs',
        'engine',
        'airbag',
        'steer',
        'ta',
        'goodPayer',
        'badPayer',
        'normalPayer',
        'ci',
        'cel',
        'reclame',
        'autoParts',
        'observations',
        'userName',
        'handWork',
        'priceAutoParts',
        'total',
      ],
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
