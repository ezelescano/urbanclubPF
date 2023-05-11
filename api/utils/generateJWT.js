require('dotenv').config();
const jwt = require("jsonwebtoken")
const {JWT_SECRET} = process.env;

const generateJWT = (id, name, profilePhoto) => {
    return jwt.sign({id, name, profilePhoto}, JWT_SECRET, {
        expiresIn: "3h",
        algorithm: "HS256",

    })
}
module.exports =  generateJWT