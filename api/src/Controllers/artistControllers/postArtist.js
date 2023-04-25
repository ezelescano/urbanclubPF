const {Artist} = require("../../db");
const postArtist = async (req) => {
    const {name,lastname,email,password,nickName
    } = req.body;
    const Nombre = name.toUpperCase().split(" ").join("-");

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
    console.log(newArtist)
  const crea = await Artist.create(newArtist)
//  console.log("fdfdfsfs",crea)


    return newArtist
}
module.exports = {postArtist}