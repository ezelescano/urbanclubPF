const {Router} = require("express");
const {  getArtistHandler } = require("../Handlers/artistHandler/getAllArtistHandlers");
const {getArtistById} = require("../Handlers/artistHandler/getArtistById")
const {delArtistHandler} = require("../Handlers/artistHandler/delArtistHandler");
const {postArtistHandler} = require("../Handlers/artistHandler/postArtistHandler")
const { updateArtistHandler } = require("../Handlers/artistHandler/updateArtistHandler");
const {delLogArtistHandler} = require("../Handlers/artistHandler/delLogArtistHandler");
const {restoreArtistHandler} = require("../Handlers/artistHandler/restoreArtistHandler")
const authLogin = require("../Handlers/artistHandler/authLogin");
const authArtist = require("../Handlers/artistHandler/authArtist")
const verifyAuth = require("../middlewares/verifyAuth");

const artistRouter = Router();


artistRouter.get("/", getArtistHandler);
artistRouter.get("/:id", getArtistById);
artistRouter.delete("/:id", delArtistHandler);
artistRouter.put("/update/:id", updateArtistHandler);
artistRouter.put("/delete/:id", delLogArtistHandler);
artistRouter.put("/restore/:id", restoreArtistHandler);
artistRouter.post("/", postArtistHandler);
artistRouter.post("/login", authLogin);
artistRouter.get("/login/me", verifyAuth, authArtist)





module.exports = artistRouter;