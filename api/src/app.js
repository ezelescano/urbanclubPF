const express = require("express");
const morgan = require("morgan");
const fileupload = require("express-fileupload")
const mainRouter = require("./routes/index")



const app = express();

app.use(morgan("dev"));

app.use(express.json());
app.use(fileupload({
    useTempFiles: true,
    tempFileDir: "./uploads" // crea una carpeta temporal ponemos la que queramos crear
}))
app.use(mainRouter);

module.exports = app;