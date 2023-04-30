const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Event', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        nameArena: {
            type: DataTypes.STRING,
        },
        date: {
            type: DataTypes.DATE,
        },
        id_eventPhoto: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        eventPhoto: {
            type: DataTypes.STRING,
            allowNull: true,
            default: "https://res.cloudinary.com/draxxv99e/image/upload/v1682710836/defaulr_urbanclub/profilePhoto_r6vbif.png"
        }
    })
}