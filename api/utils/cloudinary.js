require("dotenv").config();
const fs_extra = require("fs-extra")
const cloudinary = require("cloudinary").v2

const { CLOUD_NAME, API_KEY, API_SECRET } = process.env;
const postArtist = require("../src/Controllers/artistControllers/postArtist")

const cloudiconfig = () => {
    cloudinary.config({
        cloud_name: CLOUD_NAME,
        api_key: API_KEY,
        api_secret: API_SECRET,
        secure: true
    });
}
const loadPhoto = async (path,ban,name) => {
    let folder = ""
   
    if (ban === "events") folder = `Events/${name}`
    if (ban === "Artist") folder = `Artis/${name}`
  
    const savePhoto = await cloudinary.uploader.upload(path, {
        folder: `UrbanClub/${folder}`
    });
    
    await fs_extra.unlink(path)
    return savePhoto;
}
const DeletePhoto = async (idImg) => {
    return await cloudinary.uploader.destroy(idImg)
}

module.exports = { cloudiconfig, loadPhoto,DeletePhoto }