'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    roll_id:{
type: DataTypes.INTEGER
// references:models.Role.roll_id
    },
    softDelete:{
      type:DataTypes.BOOLEAN,
    defaultValue:false
    },
    projectId:DataTypes.INTEGER
  }, {});
  User.associate = function (models) {
    // associations can be defined here
    User.belongsTo(models.Role,{foreignKey: 'roll_id'});
    // models.Role.hasOne(User,{foreignKey: 'roll_id'});
    // User.hasOne(models.Role);
    User.belongsTo(models.Project,{foreignKey:'projectId'});
    models.Project.hasMany(User,{foreignKey:'projectId'});
  };
  return User;
};