/**
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("user", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userName: {
      type: DataTypes.STRING,
      unique: true,
      required: true
    },
    password: {
      type: DataTypes.STRING,
      required: true
    },
    role: {
      type: DataTypes.STRING,
      required: true
    },
  });
  User.associate = (db) => {};
  return User;
};
