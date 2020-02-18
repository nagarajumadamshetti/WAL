'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:*/
    return queryInterface.bulkInsert('Roles', [{
      roll_name: 'Intern',
      roll_id: 101
    }], {});

  },

  down: (queryInterface, Sequelize) => {

  }
};
