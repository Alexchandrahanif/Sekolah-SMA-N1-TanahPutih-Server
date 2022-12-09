const { hashingPassword } = require("../helper/herlper");
const { User } = require("../models/index");

class Controller {
  // WELCOME
  static async welcome(req, res, next) {
    try {
      res.status(200).json({
        message:
          "Selamat Datang di Server SMA N 1 TANAH PUTIH, Alex Chandra Hanif, 7 Desember 2022",
      });
    } catch (error) {
      next(error);
    }
  }

  // GET USERS
  static async getUsers(req, res, next) {
    try {
      const dataUser = await User.findAll();
      res.status(200).json({
        statusCode: 200,
        data: dataUser,
      });
    } catch (error) {
      next(error);
    }
  }

  // REGISTER/CREATE USER GURU
  static async register(req, res, next) {
    try {
      const { username, email, password } = req.body;
      const datauser = await User.create({
        username,
        email,
        password,
        role: "Guru",
      });
      res.status(201).json({
        statusCode: 201,
        data: datauser,
      });
    } catch (error) {
      next(error);
    }
  }

  // UPDATE USER GURU
  static async updateUser(req, res, next) {
    try {
      const { id } = req.params;
      const { username, email, password } = req.body;
      const dataUser = await User.update(
        {
          username,
          email,
          password: hashingPassword(password),
        },
        {
          where: {
            id,
          },
        }
      );
      res.status(200).json({
        message: `Update user with id ${id} successfully`,
      });
    } catch (error) {
      next(error);
    }
  }

  // DELETE USER GURU
  static async deleteUser(req, res, next) {
    try {
      const { id } = req.params;
      const dataUser = await User.destroy({
        where: {
          id,
        },
      });
      res.status(200).json({
        message: `Delete User with id ${id} successfully`,
      });
    } catch (error) {
      next(error);
    }
  }
}
module.exports = Controller;
