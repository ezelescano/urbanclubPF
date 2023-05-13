const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Follow',{
    follower_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    following_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  })
}
