"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Guru extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Guru.init(
    {
      namaLengkap: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Nama Lengkap Guru is required",
          },
          notNull: {
            msg: "Nama Lengkap Guru is required",
          },
        },
      },
      NIP: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "NIP Guru is required",
          },
          notNull: {
            msg: "NIP Guru is required",
          },
        },
      },
      tempatTanggalLahir: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Tempat tanggal lahir Guru is required",
          },
          notNull: {
            msg: "Tempat tanggal lahir Guru is required",
          },
        },
      },
      alamat: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Alamat Guru is required",
          },
          notNull: {
            msg: "Alamat Guru is required",
          },
        },
      },
      nomorTelepon: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Nomor Telepon Guru is required",
          },
          notNull: {
            msg: "Nomor Telepon Guru is required",
          },
        },
      },
      jenisKelamin: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Jenis Kelamin Guru is required",
          },
          notNull: {
            msg: "Jenis Kelamin Guru is required",
          },
        },
      },
      agama: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Agama Guru is required",
          },
          notNull: {
            msg: "Agama Guru is required",
          },
        },
      },
      pendidikanTerakhir: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Pendidikan terakhir Guru is required",
          },
          notNull: {
            msg: "Pendidikan terakhir Guru is required",
          },
        },
      },
      mataPelajaran: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Mata Pelajaran is required",
          },
          notNull: {
            msg: "Mata Pelajaran is required",
          },
        },
      },
      jabatan: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Jabatan Guru is required",
          },
          notNull: {
            msg: "Jabatan Guru is required",
          },
        },
      },
      IdKategoriGuru: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Id Kategori Guru is required",
          },
          notNull: {
            msg: "Id Kategori Guru is required",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Guru",
    }
  );
  return Guru;
};
