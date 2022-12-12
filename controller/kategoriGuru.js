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
}

module.exports = Controller;
