const Controller = require("../controller/user");
const guruRouter = require("./guru");
const kategoriGuruRouter = require("./kategoriGuru");
const userRouter = require("./user");

const router = require("express").Router();

router.get("/", Controller.welcome);

router.use("/user", userRouter);
router.use("/guru", guruRouter);
router.use("/kategoriGuru", kategoriGuruRouter);

module.exports = router;
