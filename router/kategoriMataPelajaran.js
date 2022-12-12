const Controller = require("../controller/kategoriMataPelajaran");

const kategoriMataPelajaranRouter = require("express").Router();

kategoriMataPelajaranRouter.get("/", Controller.getKategoriMataPelajarans);
kategoriMataPelajaranRouter.get("/:id", Controller.getKategoriMataPelajaran);
kategoriMataPelajaranRouter.post("/", Controller.addKategoriMataPelajaran);
kategoriMataPelajaranRouter.put("/:id", Controller.editKategoriMataPelajaran);
kategoriMataPelajaranRouter.delete(
  "/:id",
  Controller.deleteKategoriMataPelajaran
);

module.exports = kategoriMataPelajaranRouter;
