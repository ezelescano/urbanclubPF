const {Router} = require("express");
const {  getArtistHandler } = require("../Handlers/artistHandler/getAllArtistHandlers");
const {getArtistById} = require("../Handlers/artistHandler/getArtistById")
const {delArtistHandler} = require("../Handlers/artistHandler/delArtistHandler")
const {postArtistHandler} = require("../Handlers/artistHandler/postArtistHandler")
const { updateArtistHandler } = require("../Handlers/artistHandler/updateArtistHandler");
const {delLogArtistHandler} = require("../Handlers/artistHandler/delLogArtistHandler")
const authLogin = require("../Handlers/artistHandler/authLogin");
const testFunction = require("../handlers/artistHandler/testFunction");
const verifyAuth = require("../middlewares/verifyAuth");
const fileupload = require("express-fileupload")
const artistRouter = Router();

 
artistRouter.get("/", getArtistHandler);
artistRouter.get("/:id", getArtistById);
artistRouter.delete("/:id", delArtistHandler);
artistRouter.put("/update/:id", fileupload({useTempFiles: true,tempFileDir: "./uploads"}) ,updateArtistHandler);
artistRouter.put("/delete/:id", delLogArtistHandler)
artistRouter.post("/",fileupload({useTempFiles: true,tempFileDir: "./uploads"}), postArtistHandler);
artistRouter.post("/login", authLogin);
artistRouter.get("/:id/prueba", verifyAuth, testFunction)





module.exports = artistRouter;