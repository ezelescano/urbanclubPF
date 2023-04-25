const express = require("express");
const morgan = require("morgan");
const mainRouter = require("./routes/index")


const app = express();

app.use(morgan("dev"));

app.use(express.json());

app.use(mainRouter);

module.exports = app;