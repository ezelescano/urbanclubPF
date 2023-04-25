const { Router } = require("express");
const artistRouter = require("./artistRouter");


const mainRouter = Router();

mainRouter.use("/artist", artistRouter )
mainRouter.use("/artist", getArtistHandler )


module.exports = mainRouter;
module.exports = mainRouter;