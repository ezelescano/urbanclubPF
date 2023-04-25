const { Router } = require("express");
const { getArtistHandler } = require("../Handlers/artistHandlers");


const mainrouter = Router();

mainrouter.use("/artist", getArtistHandler )


module.exports = mainrouter;