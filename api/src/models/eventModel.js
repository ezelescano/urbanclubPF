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
            allowNull: true,
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        location: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        nameArena: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        id_eventPhoto: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        eventPhoto: {
            type: DataTypes.STRING,
            defaultValue: "https://res.cloudinary.com/draxxv99e/image/upload/v1682710836/defaulr_urbanclub/profilePhoto_r6vbif.png"
        }
    })
}