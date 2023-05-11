const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Message', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUID4
    },
    sender: {
      type: DataTypes.STRING
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false
    },
    seen: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });
};