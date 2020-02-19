'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Projects', [{
      projectName: 'Saitama',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      projectName: 'DragonBallZ',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      projectName: 'DeathNote',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      projectName: 'Naruto',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      projectName: 'OnePiece',
      createdAt: new Date(),
      updatedAt: new Date()
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
