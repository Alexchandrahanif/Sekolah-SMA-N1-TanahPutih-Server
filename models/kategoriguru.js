"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class KategoriGuru extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      KategoriGuru.hasMany(models.Guru, {
        foreignKey: "IdKategoriGuru",
      });
    }
  }
  KategoriGuru.init(
    {
      nama: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Kategori Guru is required",
          },
          notNull: {
            msg: "Kategori Guru is required",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "KategoriGuru",
    }
  );
  return KategoriGuru;
};
