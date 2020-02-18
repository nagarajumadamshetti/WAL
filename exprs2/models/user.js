'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    roll_id:{
type: DataTypes.INTEGER
// references:models.Role.roll_id
    }
  }, {});
  User.associate = function (models) {
    // associations can be defined here

  };
  return User;
};