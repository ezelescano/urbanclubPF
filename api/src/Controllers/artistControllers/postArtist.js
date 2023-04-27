const {Artist} = require("../../db");
const bcrypt = require("bcrypt")
const postArtist = async (req, res) => {
    let {name,lastname,email,password,nickName
    } = req.body;
    const Nombre = name.toUpperCase().split(" ").join("-");
    password = await bcrypt.hash(password, 8);
    const newArtist = {
        name,
        lastname,
        email,
        profilePhoto:"",
        coverPhoto:"",
        nickName,
        Country:"",
        city:"",
        ocupation:"",
        aboutMe:"",
        password
    }
    const create = await Artist.create(newArtist)
    return create
}
module.exports = {postArtist}