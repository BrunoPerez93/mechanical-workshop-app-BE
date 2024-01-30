/**
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */
module.exports = (sequelize, DataTypes) => {
  const Brand = sequelize.define("brand", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    brandName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

  });

  Brand.associate = db => {
    Brand.hasMany(db.carsModels, { foreignKey: 'brandId' });
  };
  return Brand;
};
