const { Op } = require("sequelize");
const { Brand } = require("../models");
const { BadRequest, Errors, DatabaseError } = require("../utils/exceptions");

const createBrand = async (brandData) => {
  try {
    const brandFound = await Brand.findOne({
      where: {
        brandName: { [Op.iLike]: (brandData.brandName || '').toLocaleLowerCase() }
      },
      raw: true,
    });
    if (brandFound) throw new BadRequest(Errors.duplicated);
    return Brand.create(brandData);
  } catch (error) {
    console.log(error);
    if (error.name === BadRequest.name) throw error;
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

const updateBrand = async (id, updatedData) => {
  try {
    const existingBrand = await Brand.findByPk(id);

    if (!existingBrand) {
      throw new BadRequest('Brand not found');
    }

    await existingBrand.update(updatedData);

    return existingBrand;
  } catch (error) {
    console.log(error);
    if (error.name === 'SequelizeUniqueConstraintError') {
      throw new BadRequest('Error duplicado');
    }
    throw new DatabaseError(Errors.databaseUpdate);
  }
};

const BrandController = {
  createBrand,
  getBrands,
  getBrand,
  updateBrand
};

module.exports = BrandController;
