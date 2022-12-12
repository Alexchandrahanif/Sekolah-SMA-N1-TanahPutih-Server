const { KategoriPegawai } = require("../models/index");

class Controller {
  // Melihat Semua data kategori pegawai
  static async getKategoriPegawais(req, res, next) {
    try {
      const dataGuru = await KategoriPegawai.findAll();
      res.status(200).json({
        statusCode: 200,
        data: dataGuru,
      });
    } catch (error) {
      next(error);
    }
  }

  // Melihat data kategori pegawai berdasarkan ID
  static async getKategoriPegawai(req, res, next) {
    try {
      const { id } = req.params;
      const dataGuru = await KategoriPegawai.findByPk(id);
      if (!dataGuru) {
        throw { name: "Data Kategori Pegawai Not Found", id: id };
      }

      res.status(200).json({
        statusCode: 200,
        data: dataGuru,
      });
    } catch (error) {
      next(error);
    }
  }

  // Menambahkan Kategori pegawai Baru
  static async addKategoriPegawai(req, res, next) {
    try {
      const { nama } = req.body;
      const dataKategori = await KategoriPegawai.create({
        nama,
      });
      res.status(201).json({
        statusCode: 201,
        message: `Berhasil menambahkan kategori pegawai baru`,
        data: dataKategori,
      });
    } catch (error) {
      next(error);
    }
  }

  // Memperbaharui data kategori pegawai
  static async editKategoriPegawai(req, res, next) {
    try {
      const { nama } = req.body;
      const { id } = req.params;
      const dataGuru = await KategoriPegawai.findByPk(id);
      if (!dataGuru) {
        throw { name: "Data Kategori Pegawai Not Found", id: id };
      }
      const dataKategori = await KategoriPegawai.update(
        {
          nama,
        },
        {
          where: {
            id,
          },
        }
      );
      res.status(200).json({
        statusCode: 200,
        message: `Kategori Pegawi dengan id ${id} berhasil diperbaharui`,
      });
    } catch (error) {
      next(error);
    }
  }

  // Menghapus data Kategori guru
  static async deleteKategoriPegawai(req, res, next) {
    try {
      const { id } = req.params;
      const dataGuru = await KategoriPegawai.findByPk(id);

      if (!dataGuru) {
        throw { name: "Data Kategori Pegawai Not Found", id: id };
      }
      const dataKategori = await KategoriPegawai.destroy({
        where: {
          id,
        },
      });
      res.status(200).json({
        statusCode: 200,
        message: `Kategori Pegawai dengan id ${id} berhasil dihapus`,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;
