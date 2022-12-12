const Controller = require("../controller/kategoriPegawai");

const kategoriPegawaiRouter = require("express").Router();

kategoriPegawaiRouter.get("/", Controller.getKategoriPegawais);
kategoriPegawaiRouter.get("/:id", Controller.getKategoriPegawai);
kategoriPegawaiRouter.post("/", Controller.addKategoriPegawai);
kategoriPegawaiRouter.put("/:id", Controller.editKategoriPegawai);
kategoriPegawaiRouter.delete("/:id", Controller.deleteKategoriPegawai);

module.exports = kategoriPegawaiRouter;
