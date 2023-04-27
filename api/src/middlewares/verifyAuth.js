require('dotenv').config();
const {JWT_SECRET} = process.env;
const jwt = require("jsonwebtoken")

const verifyAuth = (req, res, next) => {
    const authHeader = req.get("Authorization");
    
    const token = authHeader && authHeader.split(" ")[1];
    
    if(!token) return res.status(401).json("Token required");
    jwt.verify(token, JWT_SECRET, (err, artist) => {
        if(err) return res.status(403).json("Invalid Token");
        req.artist = artist;
        next();
    })
}
module.exports = verifyAuth