  
// Update with your config settings.

module.exports = {

    // development: {
    //   client: 'sqlite3',
    //   connection: {
    //     filename: './dev.sqlite3'
    //   }
    // },
  
    development: {
      client: 'postgresql',
      connection: {
        database: 'todos_training',
        user:     'nagaraj.m',
        password: 'naga@9550'
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName: 'knex_migrations'
      },
      debug: true,
    },
  
    // production: {
    //   client: 'postgresql',
    //   connection: {
    //     database: 'my_db',
    //     user:     'username',
    //     password: 'password'
    //   },
    //   pool: {
    //     min: 2,
    //     max: 10
    //   },
    //   migrations: {
    //     tableName: 'knex_migrations'
    //   }
    // }
  
  };