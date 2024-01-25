/**
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */
module.exports = (sequelize, DataTypes) => {
  const CarsModel = sequelize.define("carsModel", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    carName: {
      type: DataTypes.STRING,
      unique: true,
      required: true
    },
   
  });
  CarsModel.associate = (db) => {};
  return CarsModel;
};
