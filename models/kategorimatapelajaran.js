"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class KategoriMataPelajaran extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  KategoriMataPelajaran.init(
    {
      nama: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Kategori Mata Pelajaran is required",
          },
          notNull: {
            msg: "Kategori Mata Pelajaran is required",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "KategoriMataPelajaran",
    }
  );
  return KategoriMataPelajaran;
};
