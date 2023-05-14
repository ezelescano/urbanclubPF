const { DataTypes } = require('sequelize');
const {ACTIVATED} = require("../constants")

module.exports = (sequelize) => {
  
    sequelize.define("Artist", {
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
        allowNull: false,
      },
      id_profilePhoto: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue:""
      },
      estado: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: ACTIVATED,
      },
      profilePhoto: {
        type: DataTypes.STRING,
        allowNull:false,
        defaultValue:
          "https://res.cloudinary.com/draxxv99e/image/upload/v1682710836/defaulr_urbanclub/profilePhoto_r6vbif.png",
      },
      id_coverPhoto: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue:""
      },
      coverPhoto: {
        type: DataTypes.STRING,
        allowNull:false,
        defaultValue:
          "https://res.cloudinary.com/draxxv99e/image/upload/v1682710844/defaulr_urbanclub/coverPhoto_rmh1lj.png",
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nickName: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      Country: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue:""
      },
      city: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue:""
      },
      ocupation: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue:""
      },
      // subCategory: {
      //   type: DataTypes.JSON,
      //   allowNull: true,
      // },
      aboutMe: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue:""
      },
    });
}

