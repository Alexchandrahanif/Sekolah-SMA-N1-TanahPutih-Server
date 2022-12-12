const { KategoriMataPelajaran } = require("../models/index");

class Controller {
  // Melihat Semua data kategori Mata Pelajaran
  static async getKategoriMataPelajarans(req, res, next) {
    try {
      const dataGuru = await KategoriMataPelajaran.findAll();
      res.status(200).json({
        statusCode: 200,
        data: dataGuru,
      });
    } catch (error) {
      next(error);
    }
  }

  // Melihat data kategori Mata Pelajaran berdasarkan ID
  static async getKategoriMataPelajaran(req, res, next) {
    try {
      const { id } = req.params;
      const dataGuru = await KategoriMataPelajaran.findByPk(id);
      if (!dataGuru) {
        throw { name: "Data Kategori Mata Pelajaran Not Found", id: id };
      }

      res.status(200).json({
        statusCode: 200,
        data: dataGuru,
      });
    } catch (error) {
      next(error);
    }
  }

  // Menambahkan Kategori Mata Pelajaran Baru
  static async addKategoriMataPelajaran(req, res, next) {
    try {
      const { nama } = req.body;
      const dataKategori = await KategoriMataPelajaran.create({
        nama,
      });
      res.status(201).json({
        statusCode: 201,
        message: `Berhasil menambahkan kategori Mata Pelajaran baru`,
        data: dataKategori,
      });
    } catch (error) {
      next(error);
    }
  }

  // Memperbaharui data kategori Mata Pelajaran
  static async editKategoriMataPelajaran(req, res, next) {
    try {
      const { nama } = req.body;
      const { id } = req.params;
      const dataGuru = await KategoriMataPelajaran.findByPk(id);
      if (!dataGuru) {
        throw { name: "Data Kategori Mata Pelajaran Not Found", id: id };
      }
      const dataKategori = await KategoriMataPelajaran.update(
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
        message: `Kategori Mata Pelajaran dengan id ${id} berhasil diperbaharui`,
      });
    } catch (error) {
      next(error);
    }
  }

  // Menghapus data Kategori Mata Pelajaran
  static async deleteKategoriMataPelajaran(req, res, next) {
    try {
      const { id } = req.params;
      const dataGuru = await KategoriMataPelajaran.findByPk(id);

      if (!dataGuru) {
        throw { name: "Data Kategori Mata Pelajaran Not Found", id: id };
      }
      const dataKategori = await KategoriMataPelajaran.destroy({
        where: {
          id,
        },
      });
      res.status(200).json({
        statusCode: 200,
        message: `Kategori Mata Pelajaran dengan id ${id} berhasil dihapus`,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;
