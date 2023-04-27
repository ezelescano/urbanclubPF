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
        },
        id_coverPhoto: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        coverPhoto: {
            type: DataTypes.STRING,
            allowNull: true,
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
            type: DataTypes.STRING,
            allowNull: true,
        },
        aboutMe: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    })
}

