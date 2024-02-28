'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, { DataTypes }) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.removeColumn('works', 'cel', { transaction });
      await queryInterface.addColumn(
        'clients',
        'cel',
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
      await queryInterface.removeColumn('clients', 'cel', { transaction });
      await queryInterface.addColumn(
        'works',
        'cel',
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
  }
};
