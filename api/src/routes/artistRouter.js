const {Router} = require("express");
const { getAllArtistHandler } = require("../Handlers/artistHandler/getAllArtistHandlers");
const {getArtistById} = require("../Handlers/artistHandler/getArtistById")
const {postArtistHandler} = require("../Handlers/artistHandler/postArtistHandler")
// const fileupload = require("express-fileupload")

const artistRouter = Router();


artistRouter.get("/", getAllArtistHandler);
artistRouter.get("/:id", getArtistById);
artistRouter.post("/", postArtistHandler);





module.exports = artistRouter;