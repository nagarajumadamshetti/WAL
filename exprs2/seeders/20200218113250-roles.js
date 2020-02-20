'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Roles', [{
    role_name: 'Admin',
    roll_id: 111,
    createdAt: new Date(),
    updatedAt: new Date()
  },
{
  role_name: 'FontEnd',
  roll_id:61,
  createdAt: new Date(),
  updatedAt: new Date(),
},{
  role_name: 'BackEnd',
  roll_id:71,
  createdAt: new Date(),
  updatedAt: new Date(),
},{
  role_name: 'SDE',
  roll_id:31,
  createdAt: new Date(),
  updatedAt: new Date(),
},{
  role_name: 'Manager',
  roll_id:41,
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
