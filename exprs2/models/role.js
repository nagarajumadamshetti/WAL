'use strict';
module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    role_name:{
      type: DataTypes.STRING
    },
    roll_id:{
      primaryKey:true,
      type:DataTypes.INTEGER 
  }
}  , {});

  Role.associate = function(models) {
    // associations can be defined here
    
  };
  return Role;
};