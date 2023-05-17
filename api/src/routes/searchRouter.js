const { Router } = require("express");
const searchRouter = Router();

const { getAllCategories } = require("../Handlers/searchHandler/getAllCategories");
// const { getArtistByCat } = require("../Handlers/searchHandler/getArtistByCat")
const { filterCategories } = require("../middlewares/filterCategories")
const { filterLocation } = require("../middlewares/filterLocation")
const { getResults } = require("../Handlers/searchHandler/getResults")
const { filterEvents } = require("../middlewares/filterEvents")
const { getSearchEvents } = require("../Handlers/searchHandler/getSearchEvents")
const { filterDate } = require("../middlewares/filterDate");
const { getSavedLocations } = require("../Handlers/searchHandler/getLocations");
const { getEventsLocations } = require("../Handlers/searchHandler/getEventsLocations");

const { filterPrice } = require("../middlewares/filterPrice")


searchRouter.get("/", getAllCategories);
searchRouter.get("/locations", getSavedLocations);
searchRouter.get("/events/locations", getEventsLocations);
// searchRouter.get("/:category", getArtistByCat);
searchRouter.get("/artists", filterCategories, filterLocation, filterEvents, getResults);
searchRouter.get("/events", filterDate, filterPrice, filterLocation, getSearchEvents);

//  artistRouter.get("/search/:category/:subcategory", getArtistByCat)

module.exports = searchRouter;