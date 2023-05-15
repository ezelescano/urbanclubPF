const { Router } = require("express");

const { getArtistHandler } = require("../Handlers/artistHandler/getAllArtistHandlers");
const { getArtistById } = require("../Handlers/artistHandler/getArtistById");
const { delArtistHandler } = require("../Handlers/artistHandler/delArtistHandler");
const { postArtistHandler } = require("../Handlers/artistHandler/postArtistHandler");
const { updateArtistHandler } = require("../Handlers/artistHandler/updateArtistHandler");
const { delLogArtistHandler } = require("../Handlers/artistHandler/delLogArtistHandler");
const { restoreArtistHandler } = require("../Handlers/artistHandler/restoreArtistHandler");
const { forgotPasswordHandler } = require("../Handlers/artistHandler/forgotPasswordHandler");
const { getArtistByCat } = require("../Handlers/searchHandler/getArtistByCat");
const { getAllCategories } = require("../Handlers/searchHandler/getAllCategories");
const authLogin = require("../Handlers/artistHandler/authLogin");
const authArtist = require("../Handlers/artistHandler/authArtist")
const newPasswordHandler = require("../Handlers/artistHandler/newPasswordHandler");
const verifyAuth = require("../middlewares/verifyAuth");
const verifyPassToken = require("../middlewares/verifyPassToken");
const fileupload = require("express-fileupload")
const passport = require("../middlewares/authGoogle");
const generateJWT = require("../../utils/generateJWT");
const isAuthGoogle = require("../middlewares/isAuthGoogle");
const followArtistHandler1 = require("../Handlers/artistHandler/followArtistHandler1");
const unfollowArtistHandler = require("../Handlers/artistHandler/unfollowArtistHandler");
const getFollowingsHandler = require("../Handlers/artistHandler/getFollowingsHandler");
const getFollowersHandler = require("../Handlers/artistHandler/getFollowersHandler");
const artistRouter = Router();
const {URL_FRONT} = require("../env")


artistRouter.get("/", getArtistHandler);
artistRouter.get("/:id", getArtistById);
artistRouter.delete("/:id", delArtistHandler);
artistRouter.put("/update/:id", fileupload({ useTempFiles: true, tempFileDir: "./uploads" }), updateArtistHandler);
artistRouter.put("/delete/:id", delLogArtistHandler);
artistRouter.put("/restore/:id", restoreArtistHandler);
artistRouter.post("/", fileupload({ useTempFiles: true, tempFileDir: "./uploads" }), postArtistHandler);
artistRouter.post("/login", authLogin);
artistRouter.get("/login/me", verifyAuth, authArtist);
artistRouter.put("/forgotPassword", forgotPasswordHandler);
artistRouter.get("/followings/:id", getFollowingsHandler);
artistRouter.get("/followers/:id", getFollowersHandler);
artistRouter.post("/follow/:userId/follow", followArtistHandler1);
artistRouter.post("/follow/:userId/unfollow", unfollowArtistHandler);

artistRouter.put("/newPassword/:id/:token", verifyPassToken, newPasswordHandler)


artistRouter.get(
  "/auth/google",
  passport.authenticate("google", {
    prompt: 'select_account'
  }),
  // (req, res, next) => {
  // Esta función se ejecutará solo si la autenticación falla
  // res.status(401).json({ error: "Autenticación fallida" });
  // }
);

artistRouter.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureMessage: "no se pudo iniciar sesion con google",
    failureRedirect: `${URL_FRONT}/login`, //! una direccion de front 
    successRedirect: `${URL_FRONT}/login/success` //!reemplazar por https://urbanclub.club
    // session: false,
  }),
  (req, res) => {

    try {
      //   const userString = JSON.stringify(req.user);
      console.log('se envia respuesta', req.user);

      res.send(req.user
        // ` 
        // <!DOCTYPE html>
        // <html lang="en">

        // <body>


        // </body>
        // <script> window.opener.postMessage(${userString}, '${URL_BACK}') </script>
        // </html>
        // `
      )
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }
);

artistRouter.get("/auth/user", isAuthGoogle, (req,res)=>{
  const token = generateJWT(req.user.id, req.user.name, req.user.profilePhoto)
  res.json(token)
})

artistRouter.get("/resetPassword/:token", verifyPassToken, (req, res) => {
  res.redirect(`${URL_FRONT}/artist/login`)
})



module.exports = artistRouter;