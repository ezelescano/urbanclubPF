const { artistById } = require("./artistById");
const { getAllArtist } = require("./getAllArtist");
const {postArtist} = require("./postArtist")
const {delArtist} = require("./delArtist")
const {updateArtist} = require("./updateArtist")

module.exports = { artistById, getAllArtist, postArtist, delArtist, updateArtist };