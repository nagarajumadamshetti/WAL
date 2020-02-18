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
    User.belongsTo(models.Role,{foreignKey: 'roll_id'});
    models.Role.hasMany(User,{foreignKey: 'roll_id'});
  };
  return User;
};