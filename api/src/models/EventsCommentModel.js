const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
sequelize.define('EventComment',{
    id:{
        type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
    },
    
})
}