"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Nilai extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Nilai.init(
    {
      jumlahNilai: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Jumlah Nilai is required",
          },
          notNull: {
            msg: "Jumlah Nilai is required",
          },
        },
      },
      IdSIswa: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Id Siswa is required",
          },
          notNull: {
            msg: "Id Siswa is required",
          },
        },
      },
      IdMataPelajaran: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Id Mata Pelajaran is required",
          },
          notNull: {
            msg: "Id Mata Pelajaran is required",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Nilai",
    }
  );
  return Nilai;
};
