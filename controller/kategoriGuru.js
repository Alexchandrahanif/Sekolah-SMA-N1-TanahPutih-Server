const { KategoriGuru } = require("../models/index");

class Controller {
  // Melihat Semua data kategori guru
  static async getKategoriGurus(req, res, next) {
    try {
      const dataGuru = await KategoriGuru.findAll();
      res.status(200).json({
        statusCode: 200,
        data: dataGuru,
      });
    } catch (error) {
      next(error);
    }
  }

  // Melihat data kategori guru berdasarkan ID
  static async getKategoriGuru(req, res, next) {
    try {
      const { id } = req.params;
      const dataGuru = await KategoriGuru.findByPk(id);
      if (!dataGuru) {
        throw { name: "Data Kategori Guru Not Found", id: id };
      }

      res.status(200).json({
        statusCode: 200,
        data: dataGuru,
      });
    } catch (error) {
      next(error);
    }
  }

  // Menambahkan Kategori Guru Baru
  static async addKategoriGuru(req, res, next) {
    try {
      const { nama } = req.body;
      const dataKategori = await KategoriGuru.create({
        nama,
      });
      res.status(201).json({
        statusCode: 201,
        message: `Berhasil menambahkan kategori guru baru`,
        data: dataKategori,
      });
    } catch (error) {
      next(error);
    }
  }

  // Memperbaharui data kategori guru
  static async editKategoriGuru(req, res, next) {
    try {
      const { nama } = req.body;
      const { id } = req.params;
      const dataGuru = await KategoriGuru.findByPk(id);
      if (!dataGuru) {
        throw { name: "Data Kategori Guru Not Found", id: id };
      }
      const dataKategori = await KategoriGuru.update(
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
        message: `Kategori Guru dengan id ${id} berhasil diperbaharui`,
      });
    } catch (error) {
      next(error);
    }
  }

  // Menghapus data Kategori guru
  static async deleteKategoriGuru(req, res, next) {
    try {
      const { id } = req.params;
      const dataGuru = await KategoriGuru.findByPk(id);

      if (!dataGuru) {
        throw { name: "Data Kategori Guru Not Found", id: id };
      }
      const dataKategori = await KategoriGuru.destroy({
        where: {
          id,
        },
      });
      res.status(200).json({
        statusCode: 200,
        message: `Kategori Guru dengan id ${id} berhasil dihapus`,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;
