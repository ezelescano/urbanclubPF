const { artistById } = require("./artistById");
const { artistByCat } = require("../searchControllers/artistByCat");
const { getAllArtist } = require("./getAllArtist");
const {postArtist} = require("./postArtist")
const {delArtist} = require("./delArtist")
const {updateArtist} = require("./updateArtist")
const {delLogArtist} = require("./delLogArtist")
const {getArtistInfo} = require("./getArtistInfo")

module.exports = { artistById, getAllArtist, postArtist, delArtist, updateArtist, delLogArtist, getArtistInfo, artistByCat };