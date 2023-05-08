const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Message', {
    sender: {
      type: DataTypes.STRING
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
};