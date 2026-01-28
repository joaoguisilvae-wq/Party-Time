const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.use(express.json());

// DB conection
const conn = require("./db/conn");

conn();

// Routes
const route = require("./routes/router");

app.use("/api", route);

app.listen(3000, function () {
  console.log("Servidor online!");
});
