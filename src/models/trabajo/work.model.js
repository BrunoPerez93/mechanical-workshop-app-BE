/**
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */
module.exports = (sequelize, DataTypes) => {
  const Work = sequelize.define("work", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,      
      primaryKey: true
    },
    brandName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    carName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    matricula: {
      type: DataTypes.STRING,
      allowNull: false
    },
    km: {
      type: DataTypes.NUMBER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    abs: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    engine: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    airbag: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    steer: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    ta: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    goodPayer: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    badPayer: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    normalPayer: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    ci: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    cel: {
      type: DataTypes.NUMBER,
      allowNull: false
    },
    reclame: {
      type: DataTypes.STRING,
      allowNull: false
    },
    autoParts: {
      type: DataTypes.STRING,
      allowNull: false
    },
    observations: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    handWork: {
      type: DataTypes.STRING,
      allowNull: false
    },
    priceAutoParts: {
      type: DataTypes.NUMBER,
      allowNull: false
    },
    total: {
      type: DataTypes.NUMBER,
      allowNull: false
    },
  });
  Work.associate = (db) => {};
  return Work;
};
