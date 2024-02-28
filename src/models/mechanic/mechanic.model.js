/**
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */
module.exports = (sequelize, DataTypes) => {
  const Mechanic = sequelize.define("mechanic", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false
    },
  });

  Mechanic.associate = db => {
    Mechanic.hasMany(db.works, { foreignKey: { name: 'mechanicId', allowNull: true } });
  };
  return Mechanic;
};
