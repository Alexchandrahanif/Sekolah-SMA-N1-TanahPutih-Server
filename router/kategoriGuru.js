const Controller = require("../controller/kategoriGuru");
const kategoriGuruRouter = require("express").Router();

kategoriGuruRouter.get("/", Controller.getKategoriGurus);
kategoriGuruRouter.get("/:id", Controller.getKategoriGuru);

module.exports = kategoriGuruRouter;
