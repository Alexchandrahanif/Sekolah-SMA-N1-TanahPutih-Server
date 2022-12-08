"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Kelas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Kelas.init(
    {
      nama: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Nama Kelas is required",
          },
          notNull: {
            msg: "Nama Kelas is required",
          },
        },
      },
      IdGuru: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Id Guru is required",
          },
          notNull: {
            msg: "Id Guru is required",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Kelas",
    }
  );
  return Kelas;
};
