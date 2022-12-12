const Controller = require("../controller/user");
const router = require("express").Router();

const guruRouter = require("./guru");
const kategoriGuruRouter = require("./kategoriGuru");
const kategoriMataPelajaranRouter = require("./kategoriMataPelajaran");
const kategoriPegawaiRouter = require("./kategoriPegawai");
const userRouter = require("./user");

router.get("/", Controller.welcome);

router.use("/user", userRouter);
router.use("/guru", guruRouter);
router.use("/kategoriGuru", kategoriGuruRouter);
router.use("/kategoriMataPelajaran", kategoriMataPelajaranRouter);
router.use("/kategoriPegawai", kategoriPegawaiRouter);

module.exports = router;
