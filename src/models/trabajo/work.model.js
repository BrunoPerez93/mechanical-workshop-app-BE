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
    matricula: {
      type: DataTypes.STRING,
      allowNull: false
    },
    km: {
      type: DataTypes.NUMBER,
      allowNull: true
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
    notAccepted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    reclame: {
      type: DataTypes.STRING,
      allowNull: false
    },
    autoParts: {
      type: DataTypes.STRING,
      allowNull: true
    },
    observations: {
      type: DataTypes.STRING,
      allowNull: true
    },
    handWork: {
      type: DataTypes.NUMBER,
      allowNull: true
    },
    priceAutoParts: {
      type: DataTypes.NUMBER,
      allowNull: true
    },
    total: {
      type: DataTypes.NUMBER,
      allowNull: true
    },
  });

  Work.associate = db => {
    Work.belongsTo(db.carsModels, { foreignKey: 'carModelId' });
    Work.belongsTo(db.mechanics, { foreignKey: { name: 'mechanicId', allowNull: true } });
    Work.belongsTo(db.clients, { foreignKey: 'clientId' });
  };
  return Work;
};
