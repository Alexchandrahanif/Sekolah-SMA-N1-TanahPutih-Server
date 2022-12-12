const Controller = require("../controller/kategoriGuru");
const kategoriGuruRouter = require("express").Router();

kategoriGuruRouter.get("/", Controller.getKategoriGurus);
kategoriGuruRouter.get("/:id", Controller.getKategoriGuru);
kategoriGuruRouter.post("/", Controller.addKategoriGuru);
kategoriGuruRouter.put("/:id", Controller.editKategoriGuru);
kategoriGuruRouter.delete("/:id", Controller.deleteKategoriGuru);

module.exports = kategoriGuruRouter;
