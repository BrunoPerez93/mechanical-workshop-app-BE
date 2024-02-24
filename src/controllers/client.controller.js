const { Client } = require("../models");
const { BadRequest, Errors, DatabaseError } = require("../utils/exceptions");

const createClient = async (clientData) => {
  try {
    return Client.create(clientData);
  } catch (error) {
    console.log(error);
    if (error.name === 'SequelizeUniqueConstraintError')
      throw new BadRequest('Error duplicado');
    throw new DatabaseError(Errors.databaseCreation);
  }
};

const getClients = async () => {
  try {
    return Client.findAll({
      attributes: ['id', 'name', 'lastname', 'ci'],
    });
  } catch (error) {
    console.log(error);
    throw new DatabaseError(Errors.databaseCreation);
  }
};

const getClient = async (id) => {
  try {
    return Client.findByPk(id, {
      attributes: ['id', 'name', 'lastname', 'ci'],
    });
  } catch (error) {
    console.log(error);
    throw new DatabaseError(Errors.databaseCreation);
  }
};

const ClientController = {
  createClient,
  getClients,
  getClient
};

module.exports = ClientController;
