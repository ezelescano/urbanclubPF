const {Router} = require("express");
const {  getArtistHandler } = require("../Handlers/artistHandler/getAllArtistHandlers");
const {getArtistById} = require("../Handlers/artistHandler/getArtistById")
const {postArtistHandler} = require("../Handlers/artistHandler/postArtistHandler")
const { updateArtistHandler } = require("../Handlers/artistHandler/updateArtistHandler");
const artistRouter = Router();


artistRouter.get("/", getArtistHandler);
artistRouter.get("/:id", getArtistById);
artistRouter.put("/update/:id", updateArtistHandler);
artistRouter.post("/", postArtistHandler);





module.exports = artistRouter;