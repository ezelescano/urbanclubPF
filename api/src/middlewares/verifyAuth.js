require('dotenv').config();
const {JWT_SECRET} = process.env;
const jwt = require("jsonwebtoken")

const {artistById} = require("../Controllers/artistControllers/artistById")


const verifyAuth = async (req, res, next) => {
    const authHeader = req.get("Authorization");
    
    const token = authHeader && authHeader.split(" ")[1];
    
    if(!token) return res.status(401).json("Token required");
    
    try {
        const authArtist = jwt.verify(token, JWT_SECRET)
       
        const artist = await artistById(authArtist.id)
       
        if(!artist) {
        res.json("error")
        } else {
        req.artist = artist
        }
    } catch (error) {
        
    }
        next();
}
module.exports = verifyAuth