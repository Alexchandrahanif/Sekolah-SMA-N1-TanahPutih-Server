const { Guru, KategoriGuru, MataPelajaran, Kelas } = require("../models/index");
class Controller {
  // GET GURU
  static async getGurus(req, res, next) {
    try {
      const dataGuru = await Guru.findAll({
        include: [KategoriGuru, MataPelajaran, Kelas],
      });

      res.status(200).json({
        statusCode: 200,
        data: dataGuru,
      });
    } catch (error) {
      next(error);
    }
  }

  // GET GURU by ID
  static async getGuru(req, res, next) {
    try {
      const { id } = req.params;

      const dataGuru = await Guru.findOne({
        where: {
          id,
        },
        include: [KategoriGuru, MataPelajaran, Kelas],
      });

      res.status(200).json({
        statusCode: 200,
        data: dataGuru,
      });
    } catch (error) {
      next(error);
    }
  }

  // CREATE GURU
  static async addGuru(req, res, next) {
    try {
      const {
        namaLengkap,
        NIP,
        tempatTanggalLahir,
        alamat,
        nomorTelepon,
        jenisKelamin,
        agama,
        pendidikanTerakhir,
        IdKategoriGuru,
      } = req.body;

      const dataGuru = await Guru.create({
        namaLengkap,
        NIP,
        tempatTanggalLahir,
        alamat,
        nomorTelepon,
        jenisKelamin,
        agama,
        pendidikanTerakhir,
        IdKategoriGuru,
      });

      res.status(201).json({
        statusCode: 201,
        message: `Sukses menambahkan ${namaLengkap} sebagai guru baru`,
        data: dataGuru,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;
