const {Router} = require("express");
const { getAllArtistHandler } = require("../Handlers/artistHandler/getAllArtistHandlers");
const {getArtistById} = require("../Handlers/artistHandler/getArtistById")
const {delArtistHandler} = require("../Handlers/artistHandler/delArtistHandler")
// const {postArtistHandler} = require("../Handlers/postArtistHandler")
const artistRouter = Router();


artistRouter.get("/", getAllArtistHandler);
artistRouter.get("/:id", getArtistById);
artistRouter.delete("/:id", delArtistHandler);



// artistRouter.post("/", postArtistHandler);



module.exports = artistRouter;