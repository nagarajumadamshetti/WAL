'use strict';

module.exports = {
  async up: (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.addColumn(
        'Users',
        'projectId',
        {
          type: Sequelize.INTEGER
        },
        { transaction }
      );
      // await queryInterface.addConstraint(
      //   'Users',
      //   ['projectId'],
      //   {
      //     type: 'unique',
      //     name: 'unique_projectId_fkey'
      //   },
      //   { transaction }
      // );
      await queryInterface.addConstraint(
        'Users',
        ['projectId'],
        {
          type: 'foreign key',
          name: 'to_projectTable_fkey',
          references: { //Required field
            table: 'Project',
            field: 'id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        },
        { transaction }
      );
    } catch (error) {
      await transaction.rollback();
      next(error);
    }
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
