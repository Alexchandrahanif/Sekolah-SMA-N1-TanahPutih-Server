const { Guru, KategoriGuru, MataPelajaran, Kelas } = require("../models/index");
class Controller {
  // Melihat semua GURU
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

  // Melihat data GURU berdasarkan ID
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

  // Membuat data GURU baru
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

  // Mengubah data GURU
  static async updateGuru(req, res, next) {
    try {
      const { id } = req.params;
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

      const dataGuru = await Guru.update(
        {
          namaLengkap,
          NIP,
          tempatTanggalLahir,
          alamat,
          nomorTelepon,
          jenisKelamin,
          agama,
          pendidikanTerakhir,
          IdKategoriGuru,
        },
        {
          where: {
            id,
          },
        }
      );

      res.status(200).json({
        message: `Sukses memperbaharui data guru dengan id ${id} dan nama ${namaLengkap}`,
      });
    } catch (error) {
      next(error);
    }
  }

  // Menghapus data guru
  static async deleteGuru(req, res, next) {
    try {
      const { id } = req.params;
      const dataGuru = await Guru.destroy({
        where: {
          id,
        },
      });

      res.status(200).json({
        message: `Guru dengan id ${id} berhasil dihapus`,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;
