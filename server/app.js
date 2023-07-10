require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Products = require("./models/productSchema");
require("./db/conn");
const DefaultData = require("./defaultdata");
const router = require("./routes/router");
const cors = require("cors");
const port = 8005;
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(router);
app.listen(port, () => {
  console.log(`server is running at ${port}`);
});

DefaultData();