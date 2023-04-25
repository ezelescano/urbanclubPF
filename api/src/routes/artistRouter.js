const {Router} = require("express");
const {  getArtistHandler } = require("../Handlers/artistHandler/getAllArtistHandlers");
const {getArtistById} = require("../Handlers/artistHandler/getArtistById")
const {postArtistHandler} = require("../Handlers/artistHandler/postArtistHandler")
const artistRouter = Router();


artistRouter.get("/", getArtistHandler);
artistRouter.get("/:id", getArtistById);
artistRouter.post("/", postArtistHandler);





module.exports = artistRouter;