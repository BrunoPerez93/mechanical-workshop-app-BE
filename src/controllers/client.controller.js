const { Client } = require("../models");
const { BadRequest, Errors, DatabaseError } = require("../utils/exceptions");

const createClient = async (clientData) => {
  try {
    const client = await Client.create(clientData);
    return client;
  } catch (error) {
    if (error.name === 'SequelizeUniqueConstraintError')
      throw new BadRequest(Errors.duplicated);
    throw new DatabaseError(Errors.databaseCreation);
  }
};

const getClients = async () => {
  try {
    return Client.findAll({
      attributes: ['id', 'name', 'lastname', 'ci', 'cel'],
    });
  } catch (error) {
    console.log(error);
    throw new DatabaseError(Errors.databaseCreation);
  }
};

const getClient = async (id) => {
  try {
    return Client.findByPk(id, {
      attributes: ['id', 'name', 'lastname', 'ci', 'cel'],
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
