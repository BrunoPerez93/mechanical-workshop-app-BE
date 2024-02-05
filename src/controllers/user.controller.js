const { User } = require("../models");
const { BadRequest, Errors, DatabaseError } = require("../utils/exceptions");
const bcrypt = require('bcryptjs');

const createUser = async (userData) => {
  try {
    
    userData.password = await bcrypt.hash(userData.password, parseInt(10, 10));
    userData.userName = userData.userName.toLowerCase();
    const createdUser = await User.create(userData);

    return createdUser;
  } catch (error) {
    console.error(error);
    if (error.name === 'SequelizeUniqueConstraintError'  || error.name === 'SequelizeValidationError')
      throw new BadRequest('Error duplicado');
    throw new DatabaseError(Errors.databaseCreation);
  }
};

const getUsers = async () => {
  try {
    return User.findAll({
      attributes: ['id', 'userName', 'role'],
    });
  } catch (error) {
    console.log(error);
    throw new DatabaseError(Errors.databaseCreation);
  }
};

const getUser = async (id) => {
  try {
    return User.findByPk(id, {
      attributes: ['id', 'userName', 'role'],
    });
  } catch (error) {
    console.log(error);
    throw new DatabaseError(Errors.databaseCreation);
  }
};

const UserController = {
  createUser,
  getUsers,
  getUser
};

module.exports = UserController;
