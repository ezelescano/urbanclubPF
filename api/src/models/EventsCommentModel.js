const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
sequelize.define('EventComment',{
    writer: {
        type: DataTypes.STRING,
    },
    comment: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})
}