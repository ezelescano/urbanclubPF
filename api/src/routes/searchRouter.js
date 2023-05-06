const {Router} = require("express");
const searchRouter = Router();

const { getAllCategories } = require("../Handlers/searchHandler/getAllCategories");
const {getArtistByCat} = require("../Handlers/searchHandler/getArtistByCat")
const {filterCategories} = require("../middlewares/filterCategories")
const {filterLocation} = require("../middlewares/filterLocation")
const {getResults} = require("../Handlers/searchHandler/getResults")


searchRouter.get("/", getAllCategories);
// searchRouter.get("/:category", getArtistByCat);
searchRouter.get("/resultados", filterCategories, filterLocation, getResults);

// artistRouter.get("/search/:category/:subcategory", getArtistByCat)

module.exports = searchRouter;