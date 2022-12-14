const handleError = (err, req, res, next) => {
  let code = 500;
  let message = "Internal Server Error";
  console.log(err);
  if (
    err.name === "SequelizeValidationError" ||
    err.name == "SequelizeUniqueConstraintError"
  ) {
    code = 400;
    message = [];
    err.errors.forEach((el) => {
      message.push(el.message);
    });
  } else if (err.name === "Invalid email/password") {
    code = 401;
    message = "Invalid email/password";
  } else if (err.name === "Invalid access_token") {
    code = 401;
    message = "Unauthorized";
  } else if (err.name === "Password is required") {
    code = 400;
    message = "Password is required";
  } else if (err.name === "Email is required") {
    code = 400;
    message = "Email is required";
  } else if (err.name === "JsonWebTokenError") {
    code = 401;
    message = "Invalid token";
  } else if (err.name === "Forbidden") {
    code = 403;
    message = "You are not authorized";
  } else if (err.name === "Data Kategori Guru Not Found") {
    (code = 400),
      (message = `Data Kategori Guru dengan id ${err.id} tidak ada`);
  } else if (err.name === "Data Kategori Mata Pelajaran Not Found") {
    (code = 400),
      (message = `Data Kategori Mata Pelajaran dengan id ${err.id} tidak ada`);
  } else if (err.name === "Data Kategori Pegawai Not Found") {
    (code = 400),
      (message = `Data Kategori Pegawai dengan id ${err.id} tidak ada`);
  }
  res.status(code).json({
    message: message,
  });
};

module.exports = handleError;
