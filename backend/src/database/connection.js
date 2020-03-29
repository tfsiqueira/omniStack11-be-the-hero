const knex = require('knex');
const configuration = require('../../knexfile');

const connection = knex(configuration.development); // Seleciona a configuração de desenvolvimento do knex

module.exports = connection;