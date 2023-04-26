const { DataTypes } = require('sequelize');

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
        profilePhoto: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        coverPhoto: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        password: {
            type: DataTypes.STRING,
            unique:true,
            allowNull: false,
        },
        nickName: {
            type: DataTypes.STRING,
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

// cloudinary/upload/bucket subir imagenes