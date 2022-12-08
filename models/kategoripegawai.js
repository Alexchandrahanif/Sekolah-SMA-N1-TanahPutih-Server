"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class KategoriPegawai extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  KategoriPegawai.init(
    {
      nama: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Kategori Pegawai is required",
          },
          notNull: {
            msg: "Kategori Pegawai is required",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "KategoriPegawai",
    }
  );
  return KategoriPegawai;
};
