const { Op } = require("sequelize");
const { Work, Mechanic, Client, CarsModel } = require("../models");
const { BadRequest, Errors, DatabaseError } = require("../utils/exceptions");
const { DateTime } = require("luxon");

const createWork = async (workData) => {
  try {
    console.log('workData', workData);
    return Work.create(workData);
  } catch (error) {
    console.log(error);
    if (error.name === 'SequelizeUniqueConstraintError')
      throw new BadRequest('Error duplicado');
    throw new DatabaseError(Errors.databaseCreation);
  }
};

const getWorks = async (filters) => {
  try {
    const options = {
      include: [
        {
          association: Work.associations.mechanic,
          where: {
            ...(filters.mechanicName && {
              userName: {
                [Op.iLike]: `%${filters.mechanicName}%`,
              },
            }),
          },
        },
        {
          association: Work.associations.carsModel,
          include: [
            {
              association: CarsModel.associations.brand,
            },
          ],
        },
        {
          association: Work.associations.client,
          where: {
            ...(filters.ci && {
              ci: {
                [Op.iLike]: `${filters.ci}%`,
              },
            }),
            ...(filters.clientName && {
              name: {
                [Op.iLike]: `%${filters.clientName}%`,
              },
            }),
          },
        },
      ],
      where: Object.entries(filters).reduce((prev, [key, value]) => {
        if (key === 'createdAt') {
          prev[key] = {
            [Op.and]: [
              {
                [Op.gte]: DateTime.fromISO(value, { zone: 'UTC-3' })
                  .startOf('day')
                  .toJSDate(),
              },
              {
                [Op.lte]: DateTime.fromISO(value, { zone: 'UTC-3' })
                  .endOf('day')
                  .toJSDate(),
              },
            ],
          };
        } else {
          prev[key] = {
            [Op.iLike]: `%${value}%`,
          };
        }
        return prev;
      }, {}),
      order: [['createdAt', 'DESC']],
    };

    console.log('options', options);
    options.attributes = { include: ['createdAt'] };

    return Work.findAll(options);
  } catch (error) {
    console.log(error);
    throw new DatabaseError(Errors.databaseCreation);
  }
};


const getWork = async (id) => {
  try {
    return Work.findByPk(id, {
      include: [
        Mechanic,
        Client,
        {
          association: Work.associations.carsModel,
          include: [{
            association: CarsModel.associations.brand,
          }],
        }
      ]
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
