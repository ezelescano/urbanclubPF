require('dotenv').config();
const jwt = require("jsonwebtoken")
const {JWT_SECRET} = process.env;

const generateJWT = (id,name) => {
    return jwt.sign({id,name}, JWT_SECRET, {
        expiresIn: "3h",
        algorithm: "HS256"
    })
}
module.exports =  generateJWT