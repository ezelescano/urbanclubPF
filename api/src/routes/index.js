const { Router } = require("express");
const { getArtistHandler } = require("../Handlers/artistHandlers");


const mainRouter = Router();

mainRouter.use("/artist", getArtistHandler )


module.exports = mainRouter;