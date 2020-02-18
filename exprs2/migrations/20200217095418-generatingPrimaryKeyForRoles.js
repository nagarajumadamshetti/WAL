'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.addConstraint('Roles',['roll_id'],{
     type:'primary key',
     name:'custom_pk'
   });
  },
  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
