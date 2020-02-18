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
// const UserRoles=db.define('userRoles',{
// role_id:{
//   type:sequelize.INTEGER,
//   allowNull:false
// },

// })
  Role.associate = function(models) {
    // associations can be defined here
    Role.belongsToMany(models.User);
    models.User.hasOne(Role);
  };
  return Role;
};