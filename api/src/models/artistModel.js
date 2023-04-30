const { DataTypes } = require('sequelize');
const {ACTIVATED} = require("../constants")

module.exports = (sequelize) => {
    sequelize.define('Artist', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        id_profilePhoto: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        estado: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue:ACTIVATED
        },
        profilePhoto: {
            type: DataTypes.STRING,
            allowNull: true,
            default:"https://res.cloudinary.com/draxxv99e/image/upload/v1682710836/defaulr_urbanclub/profilePhoto_r6vbif.png"
        },
        id_coverPhoto: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        coverPhoto: {
            type: DataTypes.STRING,
            allowNull: true,
            default:"https://res.cloudinary.com/draxxv99e/image/upload/v1682710844/defaulr_urbanclub/coverPhoto_rmh1lj.png"
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        nickName: { 
            type: DataTypes.STRING,
            unique:true,
            allowNull: false,
        },
        Country: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        city: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        ocupation: {
            type: DataTypes.ENUM(
                "Band",
                "Circus",
                "Dancer",
                "Freak Show",
                "Magician",
                "Musician",
                "Performer",
                "Puppeteer",
                "Statue",
                "Stand Up",
                "theatre",
                "Other"
            ),
        },
        aboutMe: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    })
}

