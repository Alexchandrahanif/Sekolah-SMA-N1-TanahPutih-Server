const Controller = require("../controller/user");

const userRouter = require("express").Router();

userRouter.get("/", Controller.getUsers);
userRouter.post("/register", Controller.register);
userRouter.put("/:id", Controller.updateUser);
userRouter.delete("/:id", Controller.deleteUser);

module.exports = userRouter;
