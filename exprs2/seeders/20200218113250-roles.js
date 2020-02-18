'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('Roles', [{
    role_name: 'Intern',
    roll_id: 101,
    createdAt: new Date(),
    updatedAt: new Date()
  },
{
  role_name: 'Tech_Lead',
  roll_id:'51',
  createdAt: new Date(),
  updatedAt: new Date(),
},{
  role_name: 'HR',
  roll_id:'21',
  createdAt: new Date(),
  updatedAt: new Date(),
}], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
