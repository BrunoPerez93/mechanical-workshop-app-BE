'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('carsModels', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      carName: {
        type: Sequelize.STRING,
        required: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      brandId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'brands',
          key: 'id',
        },
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    });
    await queryInterface.addIndex(
      'carsModels',
      {
        fields: ['brandId', 'carName'],
        unique: true,
      }
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('carsModels');
  }
};
