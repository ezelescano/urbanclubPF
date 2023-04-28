const { DataTypes } = require('sequelize');
// const {ACTIVATED} = require("../constants")

module.exports = (sequelize) => {
    sequelize.define('Rating', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            
        },
        id_artist: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        puntaje: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        }
    })
}