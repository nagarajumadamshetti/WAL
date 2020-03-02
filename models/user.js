'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
      },
      allowNull:false,
      unique: true
    },
    password: DataTypes.STRING,
    jwtToken:DataTypes.STRING
  }, {});
  User.associate = function (models) {
    // associations can be defined here
  };
  return User;
};