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

const updateClient = async (id, updatedData) => {
  try {
    const existingClient = await Client.findByPk(id);

    if (!existingClient) {
      throw new BadRequest('Client not found');
    }

    await existingClient.update(updatedData);

    return existingClient;
  } catch (error) {
    console.log(error);
    if (error.name === 'SequelizeUniqueConstraintError') {
      throw new BadRequest('Error duplicado');
    }
    throw new DatabaseError(Errors.databaseUpdate);
  }
};

const ClientController = {
  createClient,
  getClients,
  getClient,
  updateClient
};

module.exports = ClientController;
