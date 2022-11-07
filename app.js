const express = require("express");

const router = require("./router/router");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
// To read JSON data in URL body
app.use(bodyParser.json());
// To read log URLs
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", router);

async function run() {
  try {
    app.listen(process.env.PORT, () => {
      console.log(`sever is running on port no  : ${process.env.PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
}
run();
