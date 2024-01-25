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
      brandName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      carName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      matricula: {
        type: Sequelize.STRING,
        allowNull: false
      },
      km: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      lastname: {
        type: Sequelize.STRING,
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
      ci: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
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
      userName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      handWork: {
        type: Sequelize.STRING,
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
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('works');
  }
};
