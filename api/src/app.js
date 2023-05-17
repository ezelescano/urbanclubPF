const express = require("express");
const morgan = require("morgan");
const fileupload = require("express-fileupload")
const cors = require("cors")
const mainRouter = require("./routes/index");
const passport = require("passport");
const session = require('express-session');
const {URL_FRONT,URL_BACK} = require("../src/env")


const app = express();
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(morgan("dev"));
app.use(session({
    secret: 'my-secret-key',
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 24 * 60 * 60 * 1000 
    }
  }));
  //? inicializar el modulo passport
app.use(passport.initialize());
app.use(passport.session());
const optionCors ={
  origin:URL_FRONT,
  methods:'GET, POST, OPTIONS, PUT, DELETE',
  allowedHeaders: 'Content-Type,Authorization',
  credentials:true
}
 app.use(cors(optionCors))

app.use(mainRouter);

module.exports = app;