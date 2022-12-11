const Controller = require("../controller/guru");

const guruRouter = require("express").Router();

guruRouter.get("/", Controller.getGurus);
guruRouter.get("/:id", Controller.getGuru);
guruRouter.post("/", Controller.addGuru);

module.exports = guruRouter;
