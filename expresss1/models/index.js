const config = require('../knexfile')['development'];
const knex = require('knex')(config);

const {Model} = require('objection');

Model.knex(knex);

module.exports = exports = Model;