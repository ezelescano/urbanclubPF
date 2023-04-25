const {Router} = require("express");
const { getArtistHandler } = require("../Handlers/artistHandlers");

const artistRouter = Router();


artistRouter.get("/", getArtistHandler);



module.exports = artistRouter;