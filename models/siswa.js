"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Siswa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Siswa.init(
    {
      namaLengkap: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Nama Lengkap Siswa is required",
          },
          notNull: {
            msg: "Nama Lengkap Siswa Guru is required",
          },
        },
      },
      NISN: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "NISN Siswa is required",
          },
          notNull: {
            msg: "NISN Siswa is required",
          },
        },
      },
      tempatTanggalLahir: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Tempat Tanggal Lahir Siswa is required",
          },
          notNull: {
            msg: "Tempat Tanggal Lahir Siswa is required",
          },
        },
      },
      alamat: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Alamat Siswa is required",
          },
          notNull: {
            msg: "Alamat Siswa is required",
          },
        },
      },
      nomorTelepon: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Nomor Telepon Siswa is required",
          },
          notNull: {
            msg: "Nomor Telepon Siswa is required",
          },
        },
      },
      jenisKelamin: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Jenis Kelamin Siswa is required",
          },
          notNull: {
            msg: "Jenis Kelamin Siswa is required",
          },
        },
      },
      agama: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Agama Siswa is required",
          },
          notNull: {
            msg: "Agama Siswa is required",
          },
        },
      },
      namaAyah: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Nama Ayah Siswa is required",
          },
          notNull: {
            msg: "Nama Ayah Siswa is required",
          },
        },
      },
      namaIbu: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Nama Ibu Siswa is required",
          },
          notNull: {
            msg: "Nama Ibu Siswa is required",
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
    },
    {
      sequelize,
      modelName: "Siswa",
    }
  );
  return Siswa;
};
