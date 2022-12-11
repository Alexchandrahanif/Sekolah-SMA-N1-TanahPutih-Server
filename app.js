const cors = require("cors");
const express = require("express");
const handleError = require("./midleware/handleError");
const router = require("./router");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", router);
app.use(handleError);

app.listen(port, () => {
  console.log(`Server SMA N 1 TANAH PUTIH`);
});
