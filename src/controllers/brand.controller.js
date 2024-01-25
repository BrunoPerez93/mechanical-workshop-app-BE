const { Brand } = require("../models");
const { BadRequest, Errors, DatabaseError } = require("../utils/exceptions");

const createBrand = async (brandData) => {
  try {
    return Brand.create(brandData);
  } catch (error) {
    console.log(error);
    if (error.name === 'SequelizeUniqueConstraintError')
      throw new BadRequest('Error duplicado');
    throw new DatabaseError(Errors.databaseCreation);
  }
};

const getBrands = async () => {
  try {
    return Brand.findAll({
      attributes: ['id', 'brandName'],
    });
  } catch (error) {
    console.log(error);
    throw new DatabaseError(Errors.databaseCreation);
  }
};

const getBrand = async (id) => {
  try {
    return Brand.findByPk(id, {
      attributes: ['id', 'brandName'],
    });
  } catch (error) {
    console.log(error);
    throw new DatabaseError(Errors.databaseCreation);
  }
};

const BrandController = {
  createBrand,
  getBrands,
  getBrand
};

module.exports = BrandController;
