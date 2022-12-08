"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Pegawai extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pegawai.init(
    {
      namaLengkap: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Nama Lengkap Pegawai is required",
          },
          notNull: {
            msg: "Nama Lengkap Pegawai is required",
          },
        },
      },
      nomorSK: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Nomor SK Pegawai is required",
          },
          notNull: {
            msg: "Nomor SK Pegawai is required",
          },
        },
      },
      tempatTanggalLahir: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Tempat tanggal lahir Pegawai is required",
          },
          notNull: {
            msg: "Tempat tanggal lahir Pegawai is required",
          },
        },
      },
      alamat: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Alamat Pegawai is required",
          },
          notNull: {
            msg: "Alamat Pegawai is required",
          },
        },
      },
      nomorTelepon: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Nomor Telepon Pegawai is required",
          },
          notNull: {
            msg: "Nomor Telepon Pegawai is required",
          },
        },
      },
      jenisKelamin: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Jenis Kelamin Pegawai is required",
          },
          notNull: {
            msg: "Jenis Kelamin Pegawai is required",
          },
        },
      },
      agama: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Agama Pegawai is required",
          },
          notNull: {
            msg: "Agama Pegawai is required",
          },
        },
      },
      pendidikanTerakhir: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Pendidikan terakhir Pegawai is required",
          },
          notNull: {
            msg: "Pendidikan terakhir Pegawai is required",
          },
        },
      },
      IdKategoriPegawai: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Id Kategori Pegawai is required",
          },
          notNull: {
            msg: "Id Kategori Pegawai is required",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Pegawai",
    }
  );
  return Pegawai;
};
