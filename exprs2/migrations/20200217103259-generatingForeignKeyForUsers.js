'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('Users','custom_fkey',{
     
    })
    //   return queryInterface.addConstraint('Users', ['roll_id'], {
  //     type: 'foreign key',
  //     name: 'custom_fkey',
  //     references: { //Required field
  //       table: 'Roles',
  //       field: 'roll_id'
  //     },
  //     onDelete: 'cascade',
  //     onUpdate: 'cascade'
  //   });
   },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
}
