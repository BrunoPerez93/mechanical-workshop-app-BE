'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('works', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      matricula: {
        type: Sequelize.STRING,
        allowNull: false
      },
      km: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      abs: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      engine: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      airbag: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      steer: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      ta: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      goodPayer: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      badPayer: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      normalPayer: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      cel: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      reclame: {
        type: Sequelize.STRING,
        allowNull: false
      },
      autoParts: {
        type: Sequelize.STRING,
        allowNull: false
      },
      observations: {
        type: Sequelize.STRING,
        allowNull: false
      },
      handWork: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      priceAutoParts: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      total: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      clientId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'clients',
          key: 'id',
        },
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      carModelId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'carsModels',
          key: 'id',
        },
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      mechanicId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'mechanics',
          key: 'id',
        },
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    });
  },

  async down (queryInterface, Sequelize) {
    // await queryInterface.removeIndex('works');
    await queryInterface.dropTable('works');
  }
};
