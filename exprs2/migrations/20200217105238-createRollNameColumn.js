'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
   return queryInterface.addColumn('Roles', 'roll_name', Sequelize.STRING, {
    // after option is only supported by MySQL
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
