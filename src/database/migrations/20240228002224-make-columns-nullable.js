'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, { DataTypes }) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.changeColumn(
        'clients',
        'lastname',
        {
          type: DataTypes.STRING,
          allowNull: true
        },
        { transaction }
      );
      await queryInterface.changeColumn(
        'works',
        'km',
        {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        { transaction }
      );
      await queryInterface.changeColumn(
        'works',
        'autoParts',
        {
          type: DataTypes.STRING,
          allowNull: true
        },
        { transaction }
      );
      await queryInterface.changeColumn(
        'works',
        'observations',
        {
          type: DataTypes.STRING,
          allowNull: true
        },
        { transaction }
      );
      await queryInterface.changeColumn(
        'works',
        'handWork',
        {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        { transaction }
      );
      await queryInterface.changeColumn(
        'works',
        'priceAutoParts',
        {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        { transaction }
      );
      await queryInterface.changeColumn(
        'works',
        'total',
        {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        { transaction }
      );
      await queryInterface.changeColumn(
        'works',
        'mechanicId',
        {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        { transaction }
      );
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },

  async down (queryInterface, { DataTypes }) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.changeColumn(
        'clients',
        'lastname',
        {
          type: DataTypes.STRING,
          allowNull: false
        },
        { transaction }
      );
      await queryInterface.changeColumn(
        'works',
        'km',
        {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        { transaction }
      );
      await queryInterface.changeColumn(
        'works',
        'autoParts',
        {
          type: DataTypes.STRING,
          allowNull: false
        },
        { transaction }
      );
      await queryInterface.changeColumn(
        'works',
        'observations',
        {
          type: DataTypes.STRING,
          allowNull: false
        },
        { transaction }
      );
      await queryInterface.changeColumn(
        'works',
        'handWork',
        {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        { transaction }
      );
      await queryInterface.changeColumn(
        'works',
        'priceAutoParts',
        {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        { transaction }
      );
      await queryInterface.changeColumn(
        'works',
        'total',
        {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        { transaction }
      );
      await queryInterface.changeColumn(
        'works',
        'mechanicId',
        {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        { transaction }
      );
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  }
};
