"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Options extends Model {
    static associate(models) {
      Options.belongsTo(models.Questions);
    }
  }

  Options.init(
    {
      option: DataTypes.STRING,
      extrovertChances: {
        type: DataTypes.INTEGER,
        validate: { min: 1, max: 100 },
      },
      introvertChances: {
        type: DataTypes.INTEGER,
        validate: { min: 1, max: 100 },
      },
    },
    {
      sequelize,
      modelName: "Options",
    }
  );
  return Options;
};
