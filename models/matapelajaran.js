"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class MataPelajaran extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      MataPelajaran.belongsTo(models.Guru, {
        foreignKey: "IdGuru",
      });
    }
  }
  MataPelajaran.init(
    {
      nama: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Nama Mata Pelajaran is required",
          },
          notNull: {
            msg: "Nama Mata Pelajaran is required",
          },
        },
      },
      jadwal: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Jadwal is required",
          },
          notNull: {
            msg: "Jadwal is required",
          },
        },
      },
      IdKelas: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Id Kelas is required",
          },
          notNull: {
            msg: "Id Kelas is required",
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
      IdKategoriMataPelajaran: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Id Kategori Pelajaran is required",
          },
          notNull: {
            msg: "Id Kategori Pelajaran is required",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "MataPelajaran",
    }
  );
  return MataPelajaran;
};
